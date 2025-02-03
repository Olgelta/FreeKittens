
/**
 * @typedef {Object} ScriptErrorModel
 * @property {Error|any} error
 * @property {string} uuid
 * @property {string?} eventName
 * @property {{ script: string, name: string }?} script
 * @property {('warn'|'error')?} errorLevel 
 */
/**
 * @param {ScriptErrorModel} model 
 */
function tryDispatchScriptError(model) {
    console.error(model.error, model.error.object);
    if (!window.EJX || !window.EJX.editor) {
        return;
    }
    const editor = window.EJX.editor;
    editor.signals.scriptError.dispatch(model)
}

class RuntimeError extends Error {
    constructor(object, message) {
        super(message);
        this.object = object;
    }
}
//---------------------------------------------------------------- Video / Audio.
//
// Patches the play method on an object to try auto start if it fails.
const patchPlay = (uuid, object) => {
  const originalPlay = object.play.bind(object);
  object.play = () => {
    return new Promise((res, rej) => {
      originalPlay()
        .catch((reason) => {
          document.addEventListener(
            "pointerdown",
            () => {
              originalPlay()
                .catch((reason) => {
                  tryDispatchScriptError({
                    uuid,
                    error: new RuntimeError(object, "Couldn't play media on object.  Double check that the video or audio is a valid media file.  " + reason),
                  })
                  rej(reason);
                })
                .then(() => {
                  res();
                });
            },
            { once: true },
          );
        })
        .then(res);
    });
  };
};

THREE.Object3D.prototype.getAudio = function () {
  if (this.__ejx_audio) {
    return this.__ejx_audio;
  }
  const userData = this.userData;
  if (!userData) throw new RuntimeError(this, 'getAudio() was called but there was no audio file attached to this object.');

  const inEditor = window.EJX && window.EJX.editor;
  const editorSrc = inEditor && userData.sound_file_64;
  const publishedSrc = !inEditor && userData.sound_filename;
  const audioSrc = editorSrc || publishedSrc;
  if (!audioSrc) throw new RuntimeError(this, 'getAudio() was called but there was no audio file attached to this object.');

  const audio = new Audio();
  audio.loop = this.userData.sound_loop;
  audio.src = audioSrc;

  patchPlay(this.uuid, audio);
  if (this.userData.sound_autoplay) audio.play();

  this.__ejx_audio = audio;

  return audio;
};

THREE.Object3D.prototype.getVideo = function () {
  if (this.__ejx_video) {
    return this.__ejx_video;
  }
  const userData = this.userData;
  if (!userData) throw new RuntimeError(this, 'getVideo() was called but there was no video file attached to this object.');

  const inEditor = window.EJX && window.EJX.editor;
  const editorSrc = inEditor && userData.video_file_64;
  const publishedSrc = !inEditor && userData.video_filename;
  const videoSrc = editorSrc || publishedSrc;
  if (!videoSrc) throw new RuntimeError(this, 'getVideo() was called but there was no video file attached to this object.');

  const video = document.createElement("video");
  video.src = videoSrc;
  patchPlay(this.uuid, video);
  if (this.userData.video_loop) {
    video.loop = true;
    video.setAttribute("loop", "");
  }
  video.playsInline = true;
  video.setAttribute("playsinline", "");
  video.muted = true;
  video.setAttribute("muted", "");
  video.crossOrigin = "anonymous";

  this.__ejx_video = video;
  return video;
};

//---------------------------------------------------------------- Main.
export const main = ({ renderer, renderTarget, camera, scene, loadingManager, gui }) => {

  const contentPerCubeFace = {
    front: "all",
    right: "all",
    back: "all",
    left: "all",
    top: "all",
    bottom: "all",
  };

  let time = 0;
  let startTime = 0;
  let prevTime = 0;
  startTime = prevTime = performance.now();

  const objectLoader = new THREE.ObjectLoader();
  const cameraClone = camera.clone();
  let sceneLoaded = null;
  let sceneLoadedMatrix = null;
  let frameCounter = 0;
  let loaded = false;
  let loadProgress = 0;
  let postProcessing = null;
  //
  let cubeConfig = { // default cube config which matches the default values in EJPlayer / EJCube1.
    borderOn: true,
    borderWidth: 0.0025,
    borderFeather: 0.5,
    borderColor: '#ffffff',
    borderAlpha: 0.25,
  };
  //
  const boxMin = new THREE.Vector3(0, 0, 0);
  const boxMax = new THREE.Vector3(0, 0, 0);
  const box = new THREE.Box3(); // empty to start.

  const events = {
    init: [],
    start: [],
    stop: [],
    keydown: [],
    keyup: [],
    pointerdown: [],
    pointerup: [],
    pointermove: [],
    update: []
  };

  const fileLoader = new THREE.FileLoader(loadingManager);
  let appJsonLength = 10000000; // defaults to 10MB, overrided by ejx.json value and also the editor calculated value.
  const tryLoadFromFile = !(window.EJX && window.EJX.IS_EDITOR);

  if (tryLoadFromFile) {
    fileLoader.load("ejx.json", (jsonString) => {
      // The editor will provide its own ejx.json file preloaded.
      if (window.EJX && window.EJX.IS_EDITOR) return;

      const data = JSON.parse(jsonString);
      //
      appJsonLength = data[ "app-json-length" ];
      //
      const boxData = data["box"];
      if( boxData ) {
        boxMin.set( boxData.min.x, boxData.min.y, boxData.min.z );
        boxMax.set( boxData.max.x, boxData.max.y, boxData.max.z );
        box.set( boxMin, boxMax );
      }
    });

    const fileLoadHandler = (response) => {
      load(JSON.parse(response), false);
    };

    fileLoader.load(
      "app.json",
      fileLoadHandler,
      (xhr) => {
        loadProgress = xhr.loaded / (xhr.total !== undefined ? xhr.total : appJsonLength);
      }, // progress handler
      null // error handler
    );
  }

  const fixPaths = ( json ) => {
    for (let key in json) {
      if (typeof json[key] === "object") {
        fixPaths(json[key]); // recursively process if the value is an object
      } else if (key === "video_filename" || key === "sound_filename") {
        json[key] = loadingManager.resolveURL( json[key] );
      }
    }
  };

  const load = (json, inEditor = true) => {
    fixPaths( json );

    var project = json.project;

    const applyEditorRendererSettings = false; // changing these settings causes uknown behaviour. disabling for now.
    if( applyEditorRendererSettings ) {
      if (project.shadows !== undefined) renderer.shadowMap.enabled = project.shadows;
      if (project.shadowType !== undefined) renderer.shadowMap.type = project.shadowType;
      if (project.toneMapping !== undefined) renderer.toneMapping = project.toneMapping;
      if (project.toneMappingExposure !== undefined) renderer.toneMappingExposure = project.toneMappingExposure;
      if (project.useLegacyLights !== undefined) renderer.useLegacyLights = project.useLegacyLights;
    }

    contentPerCubeFace.front = project.faceFront;
    contentPerCubeFace.left = project.faceLeft;
    contentPerCubeFace.back = project.faceBack;
    contentPerCubeFace.right = project.faceRight;
    contentPerCubeFace.top = project.faceTop;
    contentPerCubeFace.bottom = project.faceBottom;

    if (project.postprocessing && project.postprocessing.length > 0) {
      postProcessing = project.postprocessing[ 0 ]; // only bloom for now.
      postProcessing.exposure = 1.0; // not included in editor project settings but is required for the player.
    }

    if (project.cubeConfig) {
      cubeConfig = project.cubeConfig;
    }

    sceneLoaded = objectLoader.parse(json.scene);
    sceneLoadedMatrix = new THREE.Matrix4().compose(sceneLoaded.position, sceneLoaded.quaternion, sceneLoaded.scale);

    const cameraLoaded = objectLoader.parse(json.camera);
    if (inEditor) {
      // when launching in editor, copy over editor camera so that it lines up with the player camera.
      cameraLoaded.updateMatrixWorld();
      camera.copy(cameraLoaded);
    }

    var scriptWrapParams = "player,renderer,scene,camera";
    var scriptWrapResultObj = {};

    for (var eventKey in events) {
      scriptWrapParams += "," + eventKey;
      scriptWrapResultObj[ eventKey ] = eventKey;
    }

    var scriptWrapResult = JSON.stringify(scriptWrapResultObj).replace(/\"/g, "");

    for (var uuid in json.scripts) {
      var object = sceneLoaded.getObjectByProperty("uuid", uuid, true);
      if (object === undefined) {
        console.warn("EJX.Content: Script without object.", uuid);
        continue;
      }

      var scripts = json.scripts[ uuid ];
      for (var i = 0; i < scripts.length; i ++) {
        var script = scripts[ i ];

        try {
          const scriptSource = script.source + "\nreturn " + scriptWrapResult + ";";
          const module = new Function(scriptWrapParams, scriptSource).bind(object);
          const functions = module(this, renderer, sceneLoaded, camera)
          for (var name in functions) {
            if (functions[ name ] === undefined) {
              continue;
            }

            if (events[ name ] === undefined) {
              console.warn("EJX.Content: Event type not supported (", name, ")");
              continue;
            }

            const handler = functions[ name ].bind(object);
            events[ name ].push({ uuid, handler, script });
          }
        } catch (error) {
          console.error(`Error processing user script on "${uuid}"`, error);
          tryDispatchScriptError({
            uuid,
            error,
            script,
          });
        }
      }
    }

    // Autoplay sound
    sceneLoaded.traverse(obj => {
      if (obj && obj.userData && obj.userData.sound_autoplay && obj.getAudio) {
        try {
          const audio = obj.getAudio();
          audio.play();
        } catch (error) {
          console.error('Error autoplaying video. ', error);
          tryDispatchScriptError({
            uuid: obj.uuid,
            error: new RuntimeError(obj, 'Error autoplaying audio.  Double check the audio on this object is valid'),
            errorLevel: 'warning',
          })
        }
      }
    });

    dispatch('init', null);
  };

  const preload = ( object ) => {
    const materials = [];
    object.traverse((obj) => {
      if (obj.isMesh) {
        if (Array.isArray(obj.material)) {
          materials.push(...obj.material);
        } else if (obj.material) {
          materials.push(obj.material);
        }
      }
    });
    //
    const tempCamera = new THREE.OrthographicCamera();
    const tempMesh = new THREE.Mesh(new THREE.BoxGeometry(), new THREE.MeshBasicMaterial());
    tempMesh.frustumCulled = false;
    //
    materials.forEach(mat => {
      tempMesh.material = mat;
      renderer.compile(tempMesh, tempCamera);
      //
      for (const key in mat) {
        if (mat.hasOwnProperty(key)) {
          const tex = mat[key];
          if (tex instanceof THREE.Texture) {
            renderer.initTexture(tex);
          }
        }
	    }
      //
      if( mat instanceof THREE.ShaderMaterial ) {
        if (mat.uniforms) {
          for (const key in mat.uniforms) {
            const u = mat.uniforms[key];
            if (u.value instanceof THREE.Texture) {
              renderer.initTexture(u.value);
            }
          }
        }			
      }
    });
  };

  const play = () => {
    dispatch( 'start', null );
  };

  const stop = () => {
    dispatch( 'stop', null );
  };

  const update = () => {
    time = performance.now();
    if( events.update ) {
      dispatch( 'update', { time: time - startTime, delta: time - prevTime } );
    }
    prevTime = time;
  };

  const render = (contentID) => {
    if (sceneLoaded === null) {
      return;
    }
    //
    frameCounter += 1;
    if( frameCounter === 1 ) {
      preload( sceneLoaded );
    }
    if( frameCounter === 2 ) {
      // takes an extra frame for the app.json to build
      // delay the loaded flag so any transitions happen after the big load and run smoothly.
      loaded = true; // scene loaded at this point.
    }

    const visibleSave = [];
    sceneLoaded.children.forEach((child, i) => {
      visibleSave[i] = child.visible;
      if (child.visible) { // only leave on or turn off if visible.
        const visible = (contentID === child.uuid) || (contentID === "all");
        child.visible = visible;
      }
    });

    const sceneMatrix = new THREE.Matrix4().compose(
      scene.position,
      scene.quaternion,
      scene.scale,
    );
    sceneMatrix.multiply(sceneLoadedMatrix);
    sceneMatrix.decompose(
      sceneLoaded.position,
      sceneLoaded.quaternion,
      sceneLoaded.scale,
    );

    cameraClone.copy(camera);
    
    renderer.render(sceneLoaded, cameraClone);

    sceneLoaded.children.forEach((child, i) => {
      child.visible = visibleSave[i];
    });
  };

  const resize = (width, height) => {
    //
  };

  const disposeTextures = ( material ) => {

    // Explicitly dispose any textures assigned to this material
    for ( const propertyName in material ) {

      const texture = material[ propertyName ];

      if ( texture instanceof THREE.Texture ) {

        const image = texture.source.data;

        if ( image instanceof ImageBitmap ) {

          image.close && image.close();

        }

        texture.dispose();

      }

    }

  };

  const disposeNode = ( node ) => {

    if ( node instanceof THREE.Mesh ) {

      if ( node.geometry ) node.geometry.dispose();

      const material = node.material;
      if ( material ) {

        if ( Array.isArray( material ) ) {

          for ( let i = 0, l = material.length; i < l; i ++ ) {

            const m = material[ i ];
            disposeTextures( m );
            m.dispose();

          }

        } else {

          disposeTextures( material );
          material.dispose(); // disposes any programs associated with the material

        }

      }

    }

  };

  const dispose = () => {

    if ( sceneLoaded ) {

      sceneLoaded.traverse( obj => {

        disposeNode( obj );
        // Puase audios
        if ( obj && obj.__ejx_audio ) {

          obj.__ejx_audio.pause();
          delete obj.__ejx_audio;

        }

        // Pause videos
        if ( obj && obj.__ejx_video ) {

          obj.__ejx_video.pause();
          delete obj.__ejx_video;

        }

      } );

    }

  };

  const pointerdown = (event) => {
    dispatch( 'pointerdown', event );
  };

  const pointermove = (event) => {
    dispatch( 'pointermove', event );
  };

  const pointerup = (event) => {
    dispatch( 'pointerup', event );
  };

  const keydown = (event) => {
    dispatch( 'keydown', event );
  };

  const keyup = (event) => {
    dispatch( 'keyup', event );
  };

  const dispatch = (eventName, event) => {
    const array = events[eventName];
      for ( var i = 0, l = array.length; i < l; i ++ ) {
        const el = array[ i ];
        try {
          el.handler( event );
        } catch(error) {
          console.error(`Error in script "${eventName}" function on "${el.uuid}":`, error);
          tryDispatchScriptError({
            uuid: el.uuid,
            eventName,
            error,
            script: el.script,
          });
        }
      }
  };

  return {
    load: load,
    loaded: () => { return loaded; },
    loadProgress: () => { return loadProgress; },
    update: update,
    render: render,
    resize: resize,
    dispose: dispose,
    pointerdown: pointerdown,
    pointermove: pointermove,
    pointerup: pointerup,
    keydown: keydown,
    keyup: keyup,
    cubeStyle: () => { return "Plain"; },
    cubeConfig: () => { return cubeConfig; },
    canGoInsideCube: () => { return true; },
    contentPerCubeFace: () => { return contentPerCubeFace; },
    postProcessing: () => { return postProcessing; },
    box: () => { return box; }
  };
};
