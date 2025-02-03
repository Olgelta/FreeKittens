/**
* name: @eyejack/ejx-editor-template
* version: v0.0.0
* date: 2024-05-30 06:04:18
* description: Boilerplate / testbed for EJX projects.
* author: EyeJack X
* homepage: https://eyejack.xyz
*/
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const em="modulepreload",tm=function(r,e){return new URL(r,e).href},mh={},nm=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){const s=document.getElementsByTagName("link");i=Promise.all(t.map(o=>{if(o=tm(o,n),o in mh)return;mh[o]=!0;const a=o.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!n)for(let h=s.length-1;h>=0;h--){const d=s[h];if(d.href===o&&(!a||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":em,a||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),a)return new Promise((h,d)=>{u.addEventListener("load",h),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${o}`)))})}))}return i.then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const da="151",wi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ti={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},fd=0,yl=1,pd=2,im=3,sm=0,vc=1,md=2,vs=3,sn=0,Et=1,Zt=2,rm=2,Yn=0,Ui=1,ta=2,_l=3,Ml=4,gd=5,Ai=100,xd=101,vd=102,bl=103,Sl=104,yd=200,_d=201,Md=202,bd=203,yc=204,_c=205,Sd=206,wd=207,Td=208,Ed=209,Ad=210,Cd=0,Pd=1,Id=2,na=3,Dd=4,Ld=5,Rd=6,Nd=7,Rr=0,Ud=1,Od=2,fn=0,zd=1,Fd=2,kd=3,Bd=4,Hd=5,fa=300,ri=301,oi=302,pr=303,mr=304,Rs=306,Gn=1e3,Mt=1001,gr=1002,ut=1003,ia=1004,om=1004,cr=1005,am=1005,st=1006,Mc=1007,lm=1007,ai=1008,cm=1008,In=1009,Vd=1010,Wd=1011,bc=1012,Gd=1013,ti=1014,dn=1015,Cn=1016,jd=1017,Yd=1018,Oi=1020,Xd=1021,qt=1023,qd=1024,Qd=1025,ii=1026,Bi=1027,Jd=1028,Zd=1029,$d=1030,Kd=1031,ef=1033,Ho=33776,Vo=33777,Wo=33778,Go=33779,wl=35840,Tl=35841,El=35842,Al=35843,tf=36196,Cl=37492,Pl=37496,Il=37808,Dl=37809,Ll=37810,Rl=37811,Nl=37812,Ul=37813,Ol=37814,zl=37815,Fl=37816,kl=37817,Bl=37818,Hl=37819,Vl=37820,Wl=37821,jo=36492,nf=36283,Gl=36284,jl=36285,Yl=36286,sf=2200,rf=2201,of=2202,xr=2300,vr=2301,Yo=2302,Ii=2400,Di=2401,yr=2402,pa=2500,Sc=2501,hm=0,um=1,dm=2,Mn=3e3,Qe=3001,af=3200,lf=3201,ci=0,cf=1,fm="",yn="srgb",Es="srgb-linear",wc="display-p3",pm=0,Xo=7680,mm=7681,gm=7682,xm=7683,vm=34055,ym=34056,_m=5386,Mm=512,bm=513,Sm=514,wm=515,Tm=516,Em=517,Am=518,hf=519,_r=35044,Cm=35048,Pm=35040,Im=35045,Dm=35049,Lm=35041,Rm=35046,Nm=35050,Um=35042,Om="100",Xl="300 es",sa=1035;class Dn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let gh=1234567;const zi=Math.PI/180,As=180/Math.PI;function nn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ot[r&255]+Ot[r>>8&255]+Ot[r>>16&255]+Ot[r>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]).toLowerCase()}function ft(r,e,t){return Math.max(e,Math.min(t,r))}function Tc(r,e){return(r%e+e)%e}function zm(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Fm(r,e,t){return r!==e?(t-r)/(e-r):0}function hr(r,e,t){return(1-t)*r+t*e}function km(r,e,t,n){return hr(r,e,1-Math.exp(-t*n))}function Bm(r,e=1){return e-Math.abs(Tc(r,e*2)-e)}function Hm(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Vm(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Wm(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Gm(r,e){return r+Math.random()*(e-r)}function jm(r){return r*(.5-Math.random())}function Ym(r){r!==void 0&&(gh=r);let e=gh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Xm(r){return r*zi}function qm(r){return r*As}function ql(r){return(r&r-1)===0&&r!==0}function uf(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function df(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Qm(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),d=o((e-n)/2),f=s((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*h,l*d,a*c);break;case"YZY":r.set(l*d,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*d,a*u,a*c);break;case"XZX":r.set(a*u,l*p,l*f,a*c);break;case"YXY":r.set(l*f,a*u,l*p,a*c);break;case"ZYZ":r.set(l*p,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function tn(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Be(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Ql={DEG2RAD:zi,RAD2DEG:As,generateUUID:nn,clamp:ft,euclideanModulo:Tc,mapLinear:zm,inverseLerp:Fm,lerp:hr,damp:km,pingpong:Bm,smoothstep:Hm,smootherstep:Vm,randInt:Wm,randFloat:Gm,randFloatSpread:jm,seededRandom:Ym,degToRad:Xm,radToDeg:qm,isPowerOfTwo:ql,ceilPowerOfTwo:uf,floorPowerOfTwo:df,setQuaternionFromProperEuler:Qm,normalize:Be,denormalize:tn};class W{constructor(e=0,t=0){W.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],p=n[8],x=i[0],g=i[3],m=i[6],_=i[1],v=i[4],y=i[7],b=i[2],w=i[5],A=i[8];return s[0]=o*x+a*_+l*b,s[3]=o*g+a*v+l*w,s[6]=o*m+a*y+l*A,s[1]=c*x+u*_+h*b,s[4]=c*g+u*v+h*w,s[7]=c*m+u*y+h*A,s[2]=d*x+f*_+p*b,s[5]=d*g+f*v+p*w,s[8]=d*m+f*y+p*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,f=c*s-o*l,p=t*h+n*d+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/p;return e[0]=h*x,e[1]=(i*c-u*n)*x,e[2]=(a*n-i*o)*x,e[3]=d*x,e[4]=(u*t-i*l)*x,e[5]=(i*s-a*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Fa.makeScale(e,t)),this}rotate(e){return this.premultiply(Fa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Fa.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Fa=new We;function ff(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}const Jm={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function ys(r,e){return new Jm[r](e)}function Mr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Ss(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ka(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Zm=new We().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),$m=new We().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Km(r){return r.convertSRGBToLinear().applyMatrix3($m)}function eg(r){return r.applyMatrix3(Zm).convertLinearToSRGB()}const tg={[Es]:r=>r,[yn]:r=>r.convertSRGBToLinear(),[wc]:Km},ng={[Es]:r=>r,[yn]:r=>r.convertLinearToSRGB(),[wc]:eg},kt={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return Es},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=tg[e],i=ng[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}};let qi;class Ec{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qi===void 0&&(qi=Mr("canvas")),qi.width=e.width,qi.height=e.height;const n=qi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=qi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Mr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Ss(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ss(t[n]/255)*255):t[n]=Ss(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Li{constructor(e=null){this.isSource=!0,this.uuid=nn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Ba(i[o].image)):s.push(Ba(i[o]))}else s=Ba(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ba(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ec.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ig=0;class ct extends Dn{constructor(e=ct.DEFAULT_IMAGE,t=ct.DEFAULT_MAPPING,n=Mt,i=Mt,s=st,o=ai,a=qt,l=In,c=ct.DEFAULT_ANISOTROPY,u=Mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ig++}),this.uuid=nn(),this.name="",this.source=new Li(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new W(0,0),this.repeat=new W(1,1),this.center=new W(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fa)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gn:e.x=e.x-Math.floor(e.x);break;case Mt:e.x=e.x<0?0:1;break;case gr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gn:e.y=e.y-Math.floor(e.y);break;case Mt:e.y=e.y<0?0:1;break;case gr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}ct.DEFAULT_IMAGE=null;ct.DEFAULT_MAPPING=fa;ct.DEFAULT_ANISOTROPY=1;class Ze{constructor(e=0,t=0,n=0,i=1){Ze.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,y=(f+1)/2,b=(m+1)/2,w=(u+d)/4,A=(h+x)/4,T=(p+g)/4;return v>y&&v>b?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=w/n,s=A/n):y>b?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=w/i,s=T/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=A/s,i=T/s),this.set(n,i,s,t),this}let _=Math.sqrt((g-p)*(g-p)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(_)<.001&&(_=1),this.x=(g-p)/_,this.y=(h-x)/_,this.z=(d-u)/_,this.w=Math.acos((c+f+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rt extends Dn{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ze(0,0,e,t),this.scissorTest=!1,this.viewport=new Ze(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new ct(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:st,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Li(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ma extends ct{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ut,this.minFilter=ut,this.wrapR=Mt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sg extends Rt{constructor(e=1,t=1,n=1){super(e,t),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new ma(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class Ac extends ct{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ut,this.minFilter=ut,this.wrapR=Mt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rg extends Rt{constructor(e=1,t=1,n=1){super(e,t),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Ac(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class og extends Rt{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLMultipleRenderTargets=!0;const s=this.texture;this.texture=[];for(let o=0;o<n;o++)this.texture[o]=s.clone(),this.texture[o].isRenderTargetTexture=!0}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.texture.length;i<s;i++)this.texture[i].image.width=e,this.texture[i].image.height=t,this.texture[i].image.depth=n;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone(),this.texture[t].isRenderTargetTexture=!0;return this}}class Nt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=s[o+0],f=s[o+1],p=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=x;return}if(h!==x||l!==d||c!==f||u!==p){let g=1-a;const m=l*d+c*f+u*p+h*x,_=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const b=Math.sqrt(v),w=Math.atan2(b,m*_);g=Math.sin(g*w)/b,a=Math.sin(a*w)/b}const y=a*_;if(l=l*g+d*y,c=c*g+f*y,u=u*g+p*y,h=h*g+x*y,g===1-a){const b=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=b,c*=b,u*=b,h*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],d=s[o+1],f=s[o+2],p=s[o+3];return e[t]=a*p+u*h+l*f-c*d,e[t+1]=l*p+u*d+c*h-a*f,e[t+2]=c*p+u*f+a*d-l*h,e[t+3]=u*p-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),d=l(n/2),f=l(i/2),p=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"YZX":this._x=d*u*h+c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h-d*f*p;break;case"XZY":this._x=d*u*h-c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class E{constructor(e=0,t=0,n=0){E.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,u=l*n+a*t-s*i,h=l*i+s*n-o*t,d=-s*t-o*n-a*i;return this.x=c*l+d*-s+u*-a-h*-o,this.y=u*l+d*-o+h*-s-c*-a,this.z=h*l+d*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ha.copy(this).projectOnVector(e),this.sub(Ha)}reflect(e){return this.sub(Ha.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ha=new E,xh=new Nt;class on{constructor(e=new E(1/0,1/0,1/0),t=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(On.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(On.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=On.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Qi.copy(e.boundingBox),Qi.applyMatrix4(e.matrixWorld),this.union(Qi);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)On.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(On)}else i.boundingBox===null&&i.computeBoundingBox(),Qi.copy(i.boundingBox),Qi.applyMatrix4(e.matrixWorld),this.union(Qi)}const n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xs),$r.subVectors(this.max,Xs),Ji.subVectors(e.a,Xs),Zi.subVectors(e.b,Xs),$i.subVectors(e.c,Xs),Jn.subVectors(Zi,Ji),Zn.subVectors($i,Zi),gi.subVectors(Ji,$i);let t=[0,-Jn.z,Jn.y,0,-Zn.z,Zn.y,0,-gi.z,gi.y,Jn.z,0,-Jn.x,Zn.z,0,-Zn.x,gi.z,0,-gi.x,-Jn.y,Jn.x,0,-Zn.y,Zn.x,0,-gi.y,gi.x,0];return!Va(t,Ji,Zi,$i,$r)||(t=[1,0,0,0,1,0,0,0,1],!Va(t,Ji,Zi,$i,$r))?!1:(Kr.crossVectors(Jn,Zn),t=[Kr.x,Kr.y,Kr.z],Va(t,Ji,Zi,$i,$r))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Un=[new E,new E,new E,new E,new E,new E,new E,new E],On=new E,Qi=new on,Ji=new E,Zi=new E,$i=new E,Jn=new E,Zn=new E,gi=new E,Xs=new E,$r=new E,Kr=new E,xi=new E;function Va(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){xi.fromArray(r,s);const a=i.x*Math.abs(xi.x)+i.y*Math.abs(xi.y)+i.z*Math.abs(xi.z),l=e.dot(xi),c=t.dot(xi),u=n.dot(xi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const ag=new on,qs=new E,Wa=new E;class Ln{constructor(e=new E,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ag.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qs.subVectors(e,this.center);const t=qs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(qs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qs.copy(e.center).add(Wa)),this.expandByPoint(qs.copy(e.center).sub(Wa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zn=new E,Ga=new E,eo=new E,$n=new E,ja=new E,to=new E,Ya=new E;class Ns{constructor(e=new E,t=new E(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zn.copy(this.origin).addScaledVector(this.direction,t),zn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ga.copy(e).add(t).multiplyScalar(.5),eo.copy(t).sub(e).normalize(),$n.copy(this.origin).sub(Ga);const s=e.distanceTo(t)*.5,o=-this.direction.dot(eo),a=$n.dot(this.direction),l=-$n.dot(eo),c=$n.lengthSq(),u=Math.abs(1-o*o);let h,d,f,p;if(u>0)if(h=o*l-a,d=o*a-l,p=s*u,h>=0)if(d>=-p)if(d<=p){const x=1/u;h*=x,d*=x,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-p?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=p?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Ga).addScaledVector(eo,d),f}intersectSphere(e,t){zn.subVectors(e.center,this.origin);const n=zn.dot(this.direction),i=zn.dot(zn)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,t,n,i,s){ja.subVectors(t,e),to.subVectors(n,e),Ya.crossVectors(ja,to);let o=this.direction.dot(Ya),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$n.subVectors(this.origin,e);const l=a*this.direction.dot(to.crossVectors($n,to));if(l<0)return null;const c=a*this.direction.dot(ja.cross($n));if(c<0||l+c>o)return null;const u=-a*$n.dot(Ya);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class we{constructor(){we.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,a,l,c,u,h,d,f,p,x,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new we().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ki.setFromMatrixColumn(e,0).length(),s=1/Ki.setFromMatrixColumn(e,1).length(),o=1/Ki.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,f=o*h,p=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+p*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,p=c*u,x=c*h;t[0]=d+x*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-p,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,p=c*u,x=c*h;t[0]=d-x*a,t[4]=-o*h,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,f=o*h,p=a*u,x=a*h;t[0]=l*u,t[4]=p*c-f,t[8]=d*c+x,t[1]=l*h,t[5]=x*c+d,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=x-d*h,t[8]=p*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+p,t[10]=d-x*h}else if(e.order==="XZY"){const d=o*l,f=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+x,t[5]=o*u,t[9]=f*h-p,t[2]=p*h-f,t[6]=a*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lg,e,cg)}lookAt(e,t,n){const i=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),Kn.crossVectors(n,Kt),Kn.lengthSq()===0&&(Math.abs(n.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),Kn.crossVectors(n,Kt)),Kn.normalize(),no.crossVectors(Kt,Kn),i[0]=Kn.x,i[4]=no.x,i[8]=Kt.x,i[1]=Kn.y,i[5]=no.y,i[9]=Kt.y,i[2]=Kn.z,i[6]=no.z,i[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],p=n[2],x=n[6],g=n[10],m=n[14],_=n[3],v=n[7],y=n[11],b=n[15],w=i[0],A=i[4],T=i[8],M=i[12],S=i[1],D=i[5],z=i[9],N=i[13],R=i[2],O=i[6],$=i[10],K=i[14],j=i[3],ee=i[7],te=i[11],ye=i[15];return s[0]=o*w+a*S+l*R+c*j,s[4]=o*A+a*D+l*O+c*ee,s[8]=o*T+a*z+l*$+c*te,s[12]=o*M+a*N+l*K+c*ye,s[1]=u*w+h*S+d*R+f*j,s[5]=u*A+h*D+d*O+f*ee,s[9]=u*T+h*z+d*$+f*te,s[13]=u*M+h*N+d*K+f*ye,s[2]=p*w+x*S+g*R+m*j,s[6]=p*A+x*D+g*O+m*ee,s[10]=p*T+x*z+g*$+m*te,s[14]=p*M+x*N+g*K+m*ye,s[3]=_*w+v*S+y*R+b*j,s[7]=_*A+v*D+y*O+b*ee,s[11]=_*T+v*z+y*$+b*te,s[15]=_*M+v*N+y*K+b*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],p=e[3],x=e[7],g=e[11],m=e[15];return p*(+s*l*h-i*c*h-s*a*d+n*c*d+i*a*f-n*l*f)+x*(+t*l*f-t*c*d+s*o*d-i*o*f+i*c*u-s*l*u)+g*(+t*c*h-t*a*f-s*o*h+n*o*f+s*a*u-n*c*u)+m*(-i*a*u-t*l*h+t*a*d+i*o*h-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],p=e[12],x=e[13],g=e[14],m=e[15],_=h*g*c-x*d*c+x*l*f-a*g*f-h*l*m+a*d*m,v=p*d*c-u*g*c-p*l*f+o*g*f+u*l*m-o*d*m,y=u*x*c-p*h*c+p*a*f-o*x*f-u*a*m+o*h*m,b=p*h*l-u*x*l-p*a*d+o*x*d+u*a*g-o*h*g,w=t*_+n*v+i*y+s*b;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=_*A,e[1]=(x*d*s-h*g*s-x*i*f+n*g*f+h*i*m-n*d*m)*A,e[2]=(a*g*s-x*l*s+x*i*c-n*g*c-a*i*m+n*l*m)*A,e[3]=(h*l*s-a*d*s-h*i*c+n*d*c+a*i*f-n*l*f)*A,e[4]=v*A,e[5]=(u*g*s-p*d*s+p*i*f-t*g*f-u*i*m+t*d*m)*A,e[6]=(p*l*s-o*g*s-p*i*c+t*g*c+o*i*m-t*l*m)*A,e[7]=(o*d*s-u*l*s+u*i*c-t*d*c-o*i*f+t*l*f)*A,e[8]=y*A,e[9]=(p*h*s-u*x*s-p*n*f+t*x*f+u*n*m-t*h*m)*A,e[10]=(o*x*s-p*a*s+p*n*c-t*x*c-o*n*m+t*a*m)*A,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*f-t*a*f)*A,e[12]=b*A,e[13]=(u*x*i-p*h*i+p*n*d-t*x*d-u*n*g+t*h*g)*A,e[14]=(p*a*i-o*x*i-p*n*l+t*x*l+o*n*g-t*a*g)*A,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*d+t*a*d)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,d=s*c,f=s*u,p=s*h,x=o*u,g=o*h,m=a*h,_=l*c,v=l*u,y=l*h,b=n.x,w=n.y,A=n.z;return i[0]=(1-(x+m))*b,i[1]=(f+y)*b,i[2]=(p-v)*b,i[3]=0,i[4]=(f-y)*w,i[5]=(1-(d+m))*w,i[6]=(g+_)*w,i[7]=0,i[8]=(p+v)*A,i[9]=(g-_)*A,i[10]=(1-(d+x))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Ki.set(i[0],i[1],i[2]).length();const o=Ki.set(i[4],i[5],i[6]).length(),a=Ki.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],mn.copy(this);const c=1/s,u=1/o,h=1/a;return mn.elements[0]*=c,mn.elements[1]*=c,mn.elements[2]*=c,mn.elements[4]*=u,mn.elements[5]*=u,mn.elements[6]*=u,mn.elements[8]*=h,mn.elements[9]*=h,mn.elements[10]*=h,t.setFromRotationMatrix(mn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){const a=this.elements,l=2*s/(t-e),c=2*s/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),d=-(o+s)/(o-s),f=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=f,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){const a=this.elements,l=1/(t-e),c=1/(n-i),u=1/(o-s),h=(t+e)*l,d=(n+i)*c,f=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-f,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ki=new E,mn=new we,lg=new E(0,0,0),cg=new E(1,1,1),Kn=new E,no=new E,Kt=new E,vh=new we,yh=new Nt;class hi{constructor(e=0,t=0,n=0,i=hi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ft(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ft(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return vh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yh.setFromEuler(this),this.setFromQuaternion(yh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hi.DEFAULT_ORDER="XYZ";class ga{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hg=0;const _h=new E,es=new Nt,Fn=new we,io=new E,Qs=new E,ug=new E,dg=new Nt,Mh=new E(1,0,0),bh=new E(0,1,0),Sh=new E(0,0,1),fg={type:"added"},wh={type:"removed"};class Oe extends Dn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hg++}),this.uuid=nn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Oe.DEFAULT_UP.clone();const e=new E,t=new hi,n=new Nt,i=new E(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new we},normalMatrix:{value:new We}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=Oe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ga,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.multiply(es),this}rotateOnWorldAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.premultiply(es),this}rotateX(e){return this.rotateOnAxis(Mh,e)}rotateY(e){return this.rotateOnAxis(bh,e)}rotateZ(e){return this.rotateOnAxis(Sh,e)}translateOnAxis(e,t){return _h.copy(e).applyQuaternion(this.quaternion),this.position.add(_h.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mh,e)}translateY(e){return this.translateOnAxis(bh,e)}translateZ(e){return this.translateOnAxis(Sh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?io.copy(e):io.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(Qs,io,this.up):Fn.lookAt(io,Qs,this.up),this.quaternion.setFromRotationMatrix(Fn),i&&(Fn.extractRotation(i.matrixWorld),es.setFromRotationMatrix(Fn),this.quaternion.premultiply(es.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(fg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(wh)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,e,ug),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,dg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Oe.DEFAULT_UP=new E(0,1,0);Oe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gn=new E,kn=new E,Xa=new E,Bn=new E,ts=new E,ns=new E,Th=new E,qa=new E,Qa=new E,Ja=new E;let so=!1;class Dt{constructor(e=new E,t=new E,n=new E){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),gn.subVectors(e,t),i.cross(gn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){gn.subVectors(i,t),kn.subVectors(n,t),Xa.subVectors(e,t);const o=gn.dot(gn),a=gn.dot(kn),l=gn.dot(Xa),c=kn.dot(kn),u=kn.dot(Xa),h=o*c-a*a;if(h===0)return s.set(-2,-1,-1);const d=1/h,f=(c*l-a*u)*d,p=(o*u-a*l)*d;return s.set(1-f-p,p,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Bn),Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getUV(e,t,n,i,s,o,a,l){return so===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),so=!0),this.getInterpolation(e,t,n,i,s,o,a,l)}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Bn),l.setScalar(0),l.addScaledVector(s,Bn.x),l.addScaledVector(o,Bn.y),l.addScaledVector(a,Bn.z),l}static isFrontFacing(e,t,n,i){return gn.subVectors(n,t),kn.subVectors(e,t),gn.cross(kn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),gn.cross(kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Dt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return so===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),so=!0),Dt.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return Dt.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Dt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;ts.subVectors(i,n),ns.subVectors(s,n),qa.subVectors(e,n);const l=ts.dot(qa),c=ns.dot(qa);if(l<=0&&c<=0)return t.copy(n);Qa.subVectors(e,i);const u=ts.dot(Qa),h=ns.dot(Qa);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(ts,o);Ja.subVectors(e,s);const f=ts.dot(Ja),p=ns.dot(Ja);if(p>=0&&f<=p)return t.copy(s);const x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(ns,a);const g=u*p-f*h;if(g<=0&&h-u>=0&&f-p>=0)return Th.subVectors(s,i),a=(h-u)/(h-u+(f-p)),t.copy(i).addScaledVector(Th,a);const m=1/(g+x+d);return o=x*m,a=d*m,t.copy(n).addScaledVector(ts,o).addScaledVector(ns,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let pg=0;class Ht extends Dn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pg++}),this.uuid=nn(),this.name="",this.type="Material",this.blending=Ui,this.side=sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=yc,this.blendDst=_c,this.blendEquation=Ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=na,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xo,this.stencilZFail=Xo,this.stencilZPass=Xo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ui&&(n.blending=this.blending),this.side!==sn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const pf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xn={h:0,s:0,l:0},ro={h:0,s:0,l:0};function Za(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class pe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,kt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=kt.workingColorSpace){return this.r=e,this.g=t,this.b=n,kt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=kt.workingColorSpace){if(e=Tc(e,1),t=ft(t,0,1),n=ft(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Za(o,s,e+1/3),this.g=Za(o,s,e),this.b=Za(o,s,e-1/3)}return kt.toWorkingColorSpace(this,i),this}setStyle(e,t=yn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,kt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,kt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,u,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yn){const n=pf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ss(e.r),this.g=Ss(e.g),this.b=Ss(e.b),this}copyLinearToSRGB(e){return this.r=ka(e.r),this.g=ka(e.g),this.b=ka(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yn){return kt.fromWorkingColorSpace(zt.copy(this),e),ft(zt.r*255,0,255)<<16^ft(zt.g*255,0,255)<<8^ft(zt.b*255,0,255)<<0}getHexString(e=yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=kt.workingColorSpace){kt.fromWorkingColorSpace(zt.copy(this),t);const n=zt.r,i=zt.g,s=zt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=kt.workingColorSpace){return kt.fromWorkingColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=yn){kt.fromWorkingColorSpace(zt.copy(this),e);const t=zt.r,n=zt.g,i=zt.b;return e!==yn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${i*255|0})`}offsetHSL(e,t,n){return this.getHSL(xn),xn.h+=e,xn.s+=t,xn.l+=n,this.setHSL(xn.h,xn.s,xn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(xn),e.getHSL(ro);const n=hr(xn.h,ro.h,t),i=hr(xn.s,ro.s,t),s=hr(xn.l,ro.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new pe;pe.NAMES=pf;class rn extends Ht{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Rr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wn=mg();function mg(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:o,offsetTable:a}}function Jt(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=ft(r,-65504,65504),Wn.floatView[0]=r;const e=Wn.uint32View[0],t=e>>23&511;return Wn.baseTable[t]+((e&8388607)>>Wn.shiftTable[t])}function sr(r){const e=r>>10;return Wn.uint32View[0]=Wn.mantissaTable[Wn.offsetTable[e]+(r&1023)]+Wn.exponentTable[e],Wn.floatView[0]}const rr={toHalfFloat:Jt,fromHalfFloat:sr},yt=new E,oo=new W;class rt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_r,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)oo.fromBufferAttribute(this,t),oo.applyMatrix3(e),this.setXY(t,oo.x,oo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=tn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Be(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=tn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Be(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=tn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Be(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=tn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Be(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Be(t,this.array),n=Be(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Be(t,this.array),n=Be(n,this.array),i=Be(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Be(t,this.array),n=Be(n,this.array),i=Be(i,this.array),s=Be(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_r&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class gg extends rt{constructor(e,t,n){super(new Int8Array(e),t,n)}}class xg extends rt{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class vg extends rt{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class yg extends rt{constructor(e,t,n){super(new Int16Array(e),t,n)}}class Cc extends rt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class _g extends rt{constructor(e,t,n){super(new Int32Array(e),t,n)}}class Pc extends rt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Mg extends rt{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=sr(this.array[e*this.itemSize]);return this.normalized&&(t=tn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Be(t,this.array)),this.array[e*this.itemSize]=Jt(t),this}getY(e){let t=sr(this.array[e*this.itemSize+1]);return this.normalized&&(t=tn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Be(t,this.array)),this.array[e*this.itemSize+1]=Jt(t),this}getZ(e){let t=sr(this.array[e*this.itemSize+2]);return this.normalized&&(t=tn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Be(t,this.array)),this.array[e*this.itemSize+2]=Jt(t),this}getW(e){let t=sr(this.array[e*this.itemSize+3]);return this.normalized&&(t=tn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Be(t,this.array)),this.array[e*this.itemSize+3]=Jt(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Be(t,this.array),n=Be(n,this.array)),this.array[e+0]=Jt(t),this.array[e+1]=Jt(n),this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Be(t,this.array),n=Be(n,this.array),i=Be(i,this.array)),this.array[e+0]=Jt(t),this.array[e+1]=Jt(n),this.array[e+2]=Jt(i),this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Be(t,this.array),n=Be(n,this.array),i=Be(i,this.array),s=Be(s,this.array)),this.array[e+0]=Jt(t),this.array[e+1]=Jt(n),this.array[e+2]=Jt(i),this.array[e+3]=Jt(s),this}}class ge extends rt{constructor(e,t,n){super(new Float32Array(e),t,n)}}class bg extends rt{constructor(e,t,n){super(new Float64Array(e),t,n)}}let Sg=0;const cn=new we,$a=new Oe,is=new E,en=new on,Js=new on,It=new E;class Fe extends Dn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sg++}),this.uuid=nn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ff(e)?Pc:Cc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new We().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,n){return cn.makeTranslation(e,t,n),this.applyMatrix4(cn),this}scale(e,t,n){return cn.makeScale(e,t,n),this.applyMatrix4(cn),this}lookAt(e){return $a.lookAt(e),$a.updateMatrix(),this.applyMatrix4($a.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ge(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new on);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];en.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ln);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new E,1/0);return}if(e){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Js.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(en.min,Js.min),en.expandByPoint(It),It.addVectors(en.max,Js.max),en.expandByPoint(It)):(en.expandByPoint(Js.min),en.expandByPoint(Js.max))}en.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)It.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(It));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)It.fromBufferAttribute(a,c),l&&(is.fromBufferAttribute(e,c),It.add(is)),i=Math.max(i,n.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let S=0;S<a;S++)c[S]=new E,u[S]=new E;const h=new E,d=new E,f=new E,p=new W,x=new W,g=new W,m=new E,_=new E;function v(S,D,z){h.fromArray(i,S*3),d.fromArray(i,D*3),f.fromArray(i,z*3),p.fromArray(o,S*2),x.fromArray(o,D*2),g.fromArray(o,z*2),d.sub(h),f.sub(h),x.sub(p),g.sub(p);const N=1/(x.x*g.y-g.x*x.y);isFinite(N)&&(m.copy(d).multiplyScalar(g.y).addScaledVector(f,-x.y).multiplyScalar(N),_.copy(f).multiplyScalar(x.x).addScaledVector(d,-g.x).multiplyScalar(N),c[S].add(m),c[D].add(m),c[z].add(m),u[S].add(_),u[D].add(_),u[z].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let S=0,D=y.length;S<D;++S){const z=y[S],N=z.start,R=z.count;for(let O=N,$=N+R;O<$;O+=3)v(n[O+0],n[O+1],n[O+2])}const b=new E,w=new E,A=new E,T=new E;function M(S){A.fromArray(s,S*3),T.copy(A);const D=c[S];b.copy(D),b.sub(A.multiplyScalar(A.dot(D))).normalize(),w.crossVectors(T,D);const N=w.dot(u[S])<0?-1:1;l[S*4]=b.x,l[S*4+1]=b.y,l[S*4+2]=b.z,l[S*4+3]=N}for(let S=0,D=y.length;S<D;++S){const z=y[S],N=z.start,R=z.count;for(let O=N,$=N+R;O<$;O+=3)M(n[O+0]),M(n[O+1]),M(n[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new rt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new E,s=new E,o=new E,a=new E,l=new E,c=new E,u=new E,h=new E;if(e)for(let d=0,f=e.count;d<f;d+=3){const p=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,p),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,p=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*u;for(let m=0;m<u;m++)d[p++]=c[f++]}return new rt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Fe,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Eh=new we,En=new Ns,ao=new Ln,Ah=new E,ss=new E,rs=new E,os=new E,Ka=new E,lo=new E,co=new W,ho=new W,uo=new W,Ch=new E,Ph=new E,Ih=new E,fo=new E,po=new E;class $e extends Oe{constructor(e=new Fe,t=new rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){lo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Ka.fromBufferAttribute(h,e),o?lo.addScaledVector(Ka,u):lo.addScaledVector(Ka.sub(t),u))}t.add(lo)}return this.isSkinnedMesh&&this.applyBoneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),ao.copy(n.boundingSphere),ao.applyMatrix4(s),En.copy(e.ray).recast(e.near),ao.containsPoint(En.origin)===!1&&(En.intersectSphere(ao,Ah)===null||En.origin.distanceToSquared(Ah)>(e.far-e.near)**2))||(Eh.copy(s).invert(),En.copy(e.ray).applyMatrix4(Eh),n.boundingBox!==null&&En.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,h=n.attributes.normal,d=n.groups,f=n.drawRange;if(a!==null)if(Array.isArray(i))for(let p=0,x=d.length;p<x;p++){const g=d[p],m=i[g.materialIndex],_=Math.max(g.start,f.start),v=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let y=_,b=v;y<b;y+=3){const w=a.getX(y),A=a.getX(y+1),T=a.getX(y+2);o=mo(this,m,e,En,c,u,h,w,A,T),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=g.materialIndex,t.push(o))}}else{const p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){const _=a.getX(g),v=a.getX(g+1),y=a.getX(g+2);o=mo(this,i,e,En,c,u,h,_,v,y),o&&(o.faceIndex=Math.floor(g/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let p=0,x=d.length;p<x;p++){const g=d[p],m=i[g.materialIndex],_=Math.max(g.start,f.start),v=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=_,b=v;y<b;y+=3){const w=y,A=y+1,T=y+2;o=mo(this,m,e,En,c,u,h,w,A,T),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=g.materialIndex,t.push(o))}}else{const p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){const _=g,v=g+1,y=g+2;o=mo(this,i,e,En,c,u,h,_,v,y),o&&(o.faceIndex=Math.floor(g/3),t.push(o))}}}}function wg(r,e,t,n,i,s,o,a){let l;if(e.side===Et?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===sn,a),l===null)return null;po.copy(a),po.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(po);return c<t.near||c>t.far?null:{distance:c,point:po.clone(),object:r}}function mo(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,ss),r.getVertexPosition(l,rs),r.getVertexPosition(c,os);const u=wg(r,e,t,n,ss,rs,os,fo);if(u){i&&(co.fromBufferAttribute(i,a),ho.fromBufferAttribute(i,l),uo.fromBufferAttribute(i,c),u.uv=Dt.getInterpolation(fo,ss,rs,os,co,ho,uo,new W)),s&&(co.fromBufferAttribute(s,a),ho.fromBufferAttribute(s,l),uo.fromBufferAttribute(s,c),u.uv2=Dt.getInterpolation(fo,ss,rs,os,co,ho,uo,new W)),o&&(Ch.fromBufferAttribute(o,a),Ph.fromBufferAttribute(o,l),Ih.fromBufferAttribute(o,c),u.normal=Dt.getInterpolation(fo,ss,rs,os,Ch,Ph,Ih,new E),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new E,materialIndex:0};Dt.getNormal(ss,rs,os,h.normal),u.face=h}return u}class Rn extends Fe{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;p("z","y","x",-1,-1,n,t,e,o,s,0),p("z","y","x",1,-1,n,t,-e,o,s,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,s,4),p("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ge(c,3)),this.setAttribute("normal",new ge(u,3)),this.setAttribute("uv",new ge(h,2));function p(x,g,m,_,v,y,b,w,A,T,M){const S=y/A,D=b/T,z=y/2,N=b/2,R=w/2,O=A+1,$=T+1;let K=0,j=0;const ee=new E;for(let te=0;te<$;te++){const ye=te*D-N;for(let re=0;re<O;re++){const B=re*S-z;ee[x]=B*_,ee[g]=ye*v,ee[m]=R,c.push(ee.x,ee.y,ee.z),ee[x]=0,ee[g]=0,ee[m]=w>0?1:-1,u.push(ee.x,ee.y,ee.z),h.push(re/A),h.push(1-te/T),K+=1}}for(let te=0;te<T;te++)for(let ye=0;ye<A;ye++){const re=d+ye+O*te,B=d+ye+O*(te+1),Q=d+(ye+1)+O*(te+1),le=d+(ye+1)+O*te;l.push(re,B,le),l.push(B,Q,le),j+=6}a.addGroup(f,j,M),f+=j,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Cs(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function jt(r){const e={};for(let t=0;t<r.length;t++){const n=Cs(r[t]);for(const i in n)e[i]=n[i]}return e}function Tg(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function mf(r){return r.getRenderTarget()===null&&r.outputEncoding===Qe?yn:Es}const br={clone:Cs,merge:jt};var Eg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ag=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Lt extends Ht{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Eg,this.fragmentShader=Ag,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cs(e.uniforms),this.uniformsGroups=Tg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class xa extends Oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class wt extends xa{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=As*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return As*2*Math.atan(Math.tan(zi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(zi*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const as=-90,ls=1;class gf extends Oe{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new wt(as,ls,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new wt(as,ls,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new wt(as,ls,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new wt(as,ls,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new wt(as,ls,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new wt(as,ls,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,d=e.xr.enabled;e.toneMapping=fn,e.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=f,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class Nr extends ct{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ri,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xf extends Rt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Nr(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:st}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Rn(5,5,5),s=new Lt({name:"CubemapFromEquirect",uniforms:Cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Et,blending:Yn});s.uniforms.tEquirect.value=t;const o=new $e(i,s),a=t.minFilter;return t.minFilter===ai&&(t.minFilter=st),new gf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const el=new E,Cg=new E,Pg=new We;class An{constructor(e=new E(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=el.subVectors(n,t).cross(Cg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(el),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Pg.getNormalMatrix(e),i=this.coplanarPoint(el).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vi=new Ln,go=new E;class Us{constructor(e=new An,t=new An,n=new An,i=new An,s=new An,o=new An){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7],d=n[8],f=n[9],p=n[10],x=n[11],g=n[12],m=n[13],_=n[14],v=n[15];return t[0].setComponents(a-i,h-l,x-d,v-g).normalize(),t[1].setComponents(a+i,h+l,x+d,v+g).normalize(),t[2].setComponents(a+s,h+c,x+f,v+m).normalize(),t[3].setComponents(a-s,h-c,x-f,v-m).normalize(),t[4].setComponents(a-o,h-u,x-p,v-_).normalize(),t[5].setComponents(a+o,h+u,x+p,v+_).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vi)}intersectsSprite(e){return vi.center.set(0,0,0),vi.radius=.7071067811865476,vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(go.x=i.normal.x>0?e.max.x:e.min.x,go.y=i.normal.y>0?e.max.y:e.min.y,go.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(go)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vf(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Ig(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,d=c.usage,f=r.createBuffer();r.bindBuffer(u,f),r.bufferData(u,h,d),c.onUploadCallback();let p;if(h instanceof Float32Array)p=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)p=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else p=5123;else if(h instanceof Int16Array)p=5122;else if(h instanceof Uint32Array)p=5125;else if(h instanceof Int32Array)p=5124;else if(h instanceof Int8Array)p=5120;else if(h instanceof Uint8Array)p=5121;else if(h instanceof Uint8ClampedArray)p=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const d=u.array,f=u.updateRange;r.bindBuffer(h,c),f.count===-1?r.bufferSubData(h,0,d):(t?r.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):r.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class bn extends Fe{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,d=t/l,f=[],p=[],x=[],g=[];for(let m=0;m<u;m++){const _=m*d-o;for(let v=0;v<c;v++){const y=v*h-s;p.push(y,-_,0),x.push(0,0,1),g.push(v/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<a;_++){const v=_+c*m,y=_+c*(m+1),b=_+1+c*(m+1),w=_+1+c*m;f.push(v,y,w),f.push(y,b,w)}this.setIndex(f),this.setAttribute("position",new ge(p,3)),this.setAttribute("normal",new ge(x,3)),this.setAttribute("uv",new ge(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bn(e.width,e.height,e.widthSegments,e.heightSegments)}}var Dg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ng=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ug=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Og=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zg="vec3 transformed = vec3( position );",Fg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Bg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Hg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Vg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Wg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Qg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Jg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Zg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$g=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Kg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,e0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,t0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,n0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,i0="gl_FragColor = linearToOutputTexel( gl_FragColor );",s0=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,r0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,o0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,a0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,l0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,c0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,h0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,u0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,d0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,f0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,p0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,m0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,g0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,x0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,v0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,y0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_0=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,M0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,b0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,S0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,w0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,T0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,E0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,A0=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,C0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,P0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,I0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,D0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,L0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,R0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,N0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,U0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,O0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,z0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,F0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,k0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,B0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,H0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,V0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,W0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,G0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,j0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Y0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Q0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,J0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Z0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,K0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ex=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,nx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ix=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ox=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ax=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,cx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ux=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,px=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_x=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Mx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,bx=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sx=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_UV2
	attribute vec2 uv2;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wx=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Tx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ex=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ax=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Px=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Lx=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Rx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Nx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ux=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Fx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bx=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Hx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,jx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Xx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Zx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$x=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ev=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,tv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nv=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,sv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ke={alphamap_fragment:Dg,alphamap_pars_fragment:Lg,alphatest_fragment:Rg,alphatest_pars_fragment:Ng,aomap_fragment:Ug,aomap_pars_fragment:Og,begin_vertex:zg,beginnormal_vertex:Fg,bsdfs:kg,iridescence_fragment:Bg,bumpmap_pars_fragment:Hg,clipping_planes_fragment:Vg,clipping_planes_pars_fragment:Wg,clipping_planes_pars_vertex:Gg,clipping_planes_vertex:jg,color_fragment:Yg,color_pars_fragment:Xg,color_pars_vertex:qg,color_vertex:Qg,common:Jg,cube_uv_reflection_fragment:Zg,defaultnormal_vertex:$g,displacementmap_pars_vertex:Kg,displacementmap_vertex:e0,emissivemap_fragment:t0,emissivemap_pars_fragment:n0,encodings_fragment:i0,encodings_pars_fragment:s0,envmap_fragment:r0,envmap_common_pars_fragment:o0,envmap_pars_fragment:a0,envmap_pars_vertex:l0,envmap_physical_pars_fragment:_0,envmap_vertex:c0,fog_vertex:h0,fog_pars_vertex:u0,fog_fragment:d0,fog_pars_fragment:f0,gradientmap_pars_fragment:p0,lightmap_fragment:m0,lightmap_pars_fragment:g0,lights_lambert_fragment:x0,lights_lambert_pars_fragment:v0,lights_pars_begin:y0,lights_toon_fragment:M0,lights_toon_pars_fragment:b0,lights_phong_fragment:S0,lights_phong_pars_fragment:w0,lights_physical_fragment:T0,lights_physical_pars_fragment:E0,lights_fragment_begin:A0,lights_fragment_maps:C0,lights_fragment_end:P0,logdepthbuf_fragment:I0,logdepthbuf_pars_fragment:D0,logdepthbuf_pars_vertex:L0,logdepthbuf_vertex:R0,map_fragment:N0,map_pars_fragment:U0,map_particle_fragment:O0,map_particle_pars_fragment:z0,metalnessmap_fragment:F0,metalnessmap_pars_fragment:k0,morphcolor_vertex:B0,morphnormal_vertex:H0,morphtarget_pars_vertex:V0,morphtarget_vertex:W0,normal_fragment_begin:G0,normal_fragment_maps:j0,normal_pars_fragment:Y0,normal_pars_vertex:X0,normal_vertex:q0,normalmap_pars_fragment:Q0,clearcoat_normal_fragment_begin:J0,clearcoat_normal_fragment_maps:Z0,clearcoat_pars_fragment:$0,iridescence_pars_fragment:K0,output_fragment:ex,packing:tx,premultiplied_alpha_fragment:nx,project_vertex:ix,dithering_fragment:sx,dithering_pars_fragment:rx,roughnessmap_fragment:ox,roughnessmap_pars_fragment:ax,shadowmap_pars_fragment:lx,shadowmap_pars_vertex:cx,shadowmap_vertex:hx,shadowmask_pars_fragment:ux,skinbase_vertex:dx,skinning_pars_vertex:fx,skinning_vertex:px,skinnormal_vertex:mx,specularmap_fragment:gx,specularmap_pars_fragment:xx,tonemapping_fragment:vx,tonemapping_pars_fragment:yx,transmission_fragment:_x,transmission_pars_fragment:Mx,uv_pars_fragment:bx,uv_pars_vertex:Sx,uv_vertex:wx,worldpos_vertex:Tx,background_vert:Ex,background_frag:Ax,backgroundCube_vert:Cx,backgroundCube_frag:Px,cube_vert:Ix,cube_frag:Dx,depth_vert:Lx,depth_frag:Rx,distanceRGBA_vert:Nx,distanceRGBA_frag:Ux,equirect_vert:Ox,equirect_frag:zx,linedashed_vert:Fx,linedashed_frag:kx,meshbasic_vert:Bx,meshbasic_frag:Hx,meshlambert_vert:Vx,meshlambert_frag:Wx,meshmatcap_vert:Gx,meshmatcap_frag:jx,meshnormal_vert:Yx,meshnormal_frag:Xx,meshphong_vert:qx,meshphong_frag:Qx,meshphysical_vert:Jx,meshphysical_frag:Zx,meshtoon_vert:$x,meshtoon_frag:Kx,points_vert:ev,points_frag:tv,shadow_vert:nv,shadow_frag:iv,sprite_vert:sv,sprite_frag:rv},de={common:{diffuse:{value:new pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new W(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new pe(16777215)},opacity:{value:1},center:{value:new W(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaTest:{value:0}}},_n={basic:{uniforms:jt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:jt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new pe(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:jt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new pe(0)},specular:{value:new pe(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:jt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:jt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new pe(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:jt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:jt([de.points,de.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:jt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:jt([de.common,de.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:jt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:jt([de.sprite,de.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:jt([de.common,de.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:jt([de.lights,de.fog,{color:{value:new pe(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};_n.physical={uniforms:jt([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new W(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new W},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new pe(0)},specularColor:{value:new pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const xo={r:0,b:0,g:0};function ov(r,e,t,n,i,s,o){const a=new pe(0);let l=s===!0?0:1,c,u,h=null,d=0,f=null;function p(g,m){let _=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?t:e).get(v));const y=r.xr,b=y.getSession&&y.getSession();b&&b.environmentBlendMode==="additive"&&(v=null),v===null?x(a,l):v&&v.isColor&&(x(v,1),_=!0),(r.autoClear||_)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Rs)?(u===void 0&&(u=new $e(new Rn(1,1,1),new Lt({name:"BackgroundCubeMaterial",uniforms:Cs(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:Et,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=v.encoding!==Qe,(h!==v||d!==v.version||f!==r.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,f=r.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new $e(new bn(2,2),new Lt({name:"BackgroundMaterial",uniforms:Cs(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=v.encoding!==Qe,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,f=r.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function x(g,m){g.getRGB(xo,mf(r)),n.buffers.color.setClear(xo.r,xo.g,xo.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(g,m=1){a.set(g),l=m,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,x(a,l)},render:p}}function av(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=g(null);let c=l,u=!1;function h(R,O,$,K,j){let ee=!1;if(o){const te=x(K,$,O);c!==te&&(c=te,f(c.object)),ee=m(R,K,$,j),ee&&_(R,K,$,j)}else{const te=O.wireframe===!0;(c.geometry!==K.id||c.program!==$.id||c.wireframe!==te)&&(c.geometry=K.id,c.program=$.id,c.wireframe=te,ee=!0)}j!==null&&t.update(j,34963),(ee||u)&&(u=!1,T(R,O,$,K),j!==null&&r.bindBuffer(34963,t.get(j).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function f(R){return n.isWebGL2?r.bindVertexArray(R):s.bindVertexArrayOES(R)}function p(R){return n.isWebGL2?r.deleteVertexArray(R):s.deleteVertexArrayOES(R)}function x(R,O,$){const K=$.wireframe===!0;let j=a[R.id];j===void 0&&(j={},a[R.id]=j);let ee=j[O.id];ee===void 0&&(ee={},j[O.id]=ee);let te=ee[K];return te===void 0&&(te=g(d()),ee[K]=te),te}function g(R){const O=[],$=[],K=[];for(let j=0;j<i;j++)O[j]=0,$[j]=0,K[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:$,attributeDivisors:K,object:R,attributes:{},index:null}}function m(R,O,$,K){const j=c.attributes,ee=O.attributes;let te=0;const ye=$.getAttributes();for(const re in ye)if(ye[re].location>=0){const Q=j[re];let le=ee[re];if(le===void 0&&(re==="instanceMatrix"&&R.instanceMatrix&&(le=R.instanceMatrix),re==="instanceColor"&&R.instanceColor&&(le=R.instanceColor)),Q===void 0||Q.attribute!==le||le&&Q.data!==le.data)return!0;te++}return c.attributesNum!==te||c.index!==K}function _(R,O,$,K){const j={},ee=O.attributes;let te=0;const ye=$.getAttributes();for(const re in ye)if(ye[re].location>=0){let Q=ee[re];Q===void 0&&(re==="instanceMatrix"&&R.instanceMatrix&&(Q=R.instanceMatrix),re==="instanceColor"&&R.instanceColor&&(Q=R.instanceColor));const le={};le.attribute=Q,Q&&Q.data&&(le.data=Q.data),j[re]=le,te++}c.attributes=j,c.attributesNum=te,c.index=K}function v(){const R=c.newAttributes;for(let O=0,$=R.length;O<$;O++)R[O]=0}function y(R){b(R,0)}function b(R,O){const $=c.newAttributes,K=c.enabledAttributes,j=c.attributeDivisors;$[R]=1,K[R]===0&&(r.enableVertexAttribArray(R),K[R]=1),j[R]!==O&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,O),j[R]=O)}function w(){const R=c.newAttributes,O=c.enabledAttributes;for(let $=0,K=O.length;$<K;$++)O[$]!==R[$]&&(r.disableVertexAttribArray($),O[$]=0)}function A(R,O,$,K,j,ee){n.isWebGL2===!0&&($===5124||$===5125)?r.vertexAttribIPointer(R,O,$,j,ee):r.vertexAttribPointer(R,O,$,K,j,ee)}function T(R,O,$,K){if(n.isWebGL2===!1&&(R.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const j=K.attributes,ee=$.getAttributes(),te=O.defaultAttributeValues;for(const ye in ee){const re=ee[ye];if(re.location>=0){let B=j[ye];if(B===void 0&&(ye==="instanceMatrix"&&R.instanceMatrix&&(B=R.instanceMatrix),ye==="instanceColor"&&R.instanceColor&&(B=R.instanceColor)),B!==void 0){const Q=B.normalized,le=B.itemSize,ue=t.get(B);if(ue===void 0)continue;const H=ue.buffer,Le=ue.type,De=ue.bytesPerElement;if(B.isInterleavedBufferAttribute){const ce=B.data,be=ce.stride,ie=B.offset;if(ce.isInstancedInterleavedBuffer){for(let q=0;q<re.locationSize;q++)b(re.location+q,ce.meshPerAttribute);R.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let q=0;q<re.locationSize;q++)y(re.location+q);r.bindBuffer(34962,H);for(let q=0;q<re.locationSize;q++)A(re.location+q,le/re.locationSize,Le,Q,be*De,(ie+le/re.locationSize*q)*De)}else{if(B.isInstancedBufferAttribute){for(let ce=0;ce<re.locationSize;ce++)b(re.location+ce,B.meshPerAttribute);R.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let ce=0;ce<re.locationSize;ce++)y(re.location+ce);r.bindBuffer(34962,H);for(let ce=0;ce<re.locationSize;ce++)A(re.location+ce,le/re.locationSize,Le,Q,le*De,le/re.locationSize*ce*De)}}else if(te!==void 0){const Q=te[ye];if(Q!==void 0)switch(Q.length){case 2:r.vertexAttrib2fv(re.location,Q);break;case 3:r.vertexAttrib3fv(re.location,Q);break;case 4:r.vertexAttrib4fv(re.location,Q);break;default:r.vertexAttrib1fv(re.location,Q)}}}}w()}function M(){z();for(const R in a){const O=a[R];for(const $ in O){const K=O[$];for(const j in K)p(K[j].object),delete K[j];delete O[$]}delete a[R]}}function S(R){if(a[R.id]===void 0)return;const O=a[R.id];for(const $ in O){const K=O[$];for(const j in K)p(K[j].object),delete K[j];delete O[$]}delete a[R.id]}function D(R){for(const O in a){const $=a[O];if($[R.id]===void 0)continue;const K=$[R.id];for(const j in K)p(K[j].object),delete K[j];delete $[R.id]}}function z(){N(),u=!0,c!==l&&(c=l,f(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:z,resetDefaultState:N,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfProgram:D,initAttributes:v,enableAttribute:y,disableUnusedAttributes:w}}function lv(r,e,t,n){const i=n.isWebGL2;let s;function o(c){s=c}function a(c,u){r.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let d,f;if(i)d=r,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](s,c,u,h),t.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function cv(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(A){if(A==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=r.getParameter(34930),d=r.getParameter(35660),f=r.getParameter(3379),p=r.getParameter(34076),x=r.getParameter(34921),g=r.getParameter(36347),m=r.getParameter(36348),_=r.getParameter(36349),v=d>0,y=o||e.has("OES_texture_float"),b=v&&y,w=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:p,maxAttributes:x,maxVertexUniforms:g,maxVaryings:m,maxFragmentUniforms:_,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:b,maxSamples:w}}function hv(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new An,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const p=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,m=r.get(h);if(!i||p===null||p.length===0||s&&!g)s?u(null):c();else{const _=s?0:n,v=_*4;let y=m.clippingState||null;l.value=y,y=u(p,d,v,f);for(let b=0;b!==v;++b)y[b]=t[b];m.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,p){const x=h!==null?h.length:0;let g=null;if(x!==0){if(g=l.value,p!==!0||g===null){const m=f+x*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<m)&&(g=new Float32Array(m));for(let v=0,y=f;v!==x;++v,y+=4)o.copy(h[v]).applyMatrix4(_,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function uv(r){let e=new WeakMap;function t(o,a){return a===pr?o.mapping=ri:a===mr&&(o.mapping=oi),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===pr||a===mr)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new xf(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Os extends xa{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const _s=4,Dh=[.125,.215,.35,.446,.526,.582],Ci=20,tl=new Os,Lh=new pe;let nl=null;const Ei=(1+Math.sqrt(5))/2,cs=1/Ei,Rh=[new E(1,1,1),new E(-1,1,1),new E(1,1,-1),new E(-1,1,-1),new E(0,Ei,cs),new E(0,Ei,-cs),new E(cs,0,Ei),new E(-cs,0,Ei),new E(Ei,cs,0),new E(-Ei,cs,0)];class Jl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){nl=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(nl),e.scissorTest=!1,vo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ri||e.mapping===oi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nl=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:st,minFilter:st,generateMipmaps:!1,type:Cn,format:qt,encoding:Mn,depthBuffer:!1},i=Nh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nh(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dv(s)),this._blurMaterial=fv(s,e,t)}return i}_compileMaterial(e){const t=new $e(this._lodPlanes[0],e);this._renderer.compile(t,tl)}_sceneToCubeUV(e,t,n,i){const a=new wt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Lh),u.toneMapping=fn,u.autoClear=!1;const f=new rn({name:"PMREM.Background",side:Et,depthWrite:!1,depthTest:!1}),p=new $e(new Rn,f);let x=!1;const g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,x=!0):(f.color.copy(Lh),x=!0);for(let m=0;m<6;m++){const _=m%3;_===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):_===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const v=this._cubeSize;vo(i,_*v,m>2?v:0,v,v),u.setRenderTarget(i),x&&u.render(p,a),u.render(e,a)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ri||e.mapping===oi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uh());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new $e(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;vo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,tl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Rh[(i-1)%Rh.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new $e(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Ci-1),x=s/p,g=isFinite(s)?1+Math.floor(u*x):Ci;g>Ci&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ci}`);const m=[];let _=0;for(let A=0;A<Ci;++A){const T=A/x,M=Math.exp(-T*T/2);m.push(M),A===0?_+=M:A<g&&(_+=2*M)}for(let A=0;A<m.length;A++)m[A]=m[A]/_;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=p,d.mipInt.value=v-n;const y=this._sizeLods[i],b=3*y*(i>v-_s?i-v+_s:0),w=4*(this._cubeSize-y);vo(t,b,w,3*y,2*y),l.setRenderTarget(t),l.render(h,tl)}}function dv(r){const e=[],t=[],n=[];let i=r;const s=r-_s+1+Dh.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-_s?l=Dh[o-r+_s-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,p=6,x=3,g=2,m=1,_=new Float32Array(x*p*f),v=new Float32Array(g*p*f),y=new Float32Array(m*p*f);for(let w=0;w<f;w++){const A=w%3*2/3-1,T=w>2?0:-1,M=[A,T,0,A+2/3,T,0,A+2/3,T+1,0,A,T,0,A+2/3,T+1,0,A,T+1,0];_.set(M,x*p*w),v.set(d,g*p*w);const S=[w,w,w,w,w,w];y.set(S,m*p*w)}const b=new Fe;b.setAttribute("position",new rt(_,x)),b.setAttribute("uv",new rt(v,g)),b.setAttribute("faceIndex",new rt(y,m)),e.push(b),i>_s&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Nh(r,e,t){const n=new Rt(r,e,t);return n.texture.mapping=Rs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vo(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function fv(r,e,t){const n=new Float32Array(Ci),i=new E(0,1,0);return new Lt({name:"SphericalGaussianBlur",defines:{n:Ci,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Uh(){return new Lt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Oh(){return new Lt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Ic(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function pv(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===pr||l===mr,u=l===ri||l===oi;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Jl(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new Jl(r));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function mv(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function gv(r,e,t,n){const i={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const p in d)e.update(d[p],34962);const f=h.morphAttributes;for(const p in f){const x=f[p];for(let g=0,m=x.length;g<m;g++)e.update(x[g],34962)}}function c(h){const d=[],f=h.index,p=h.attributes.position;let x=0;if(f!==null){const _=f.array;x=f.version;for(let v=0,y=_.length;v<y;v+=3){const b=_[v+0],w=_[v+1],A=_[v+2];d.push(b,w,w,A,A,b)}}else{const _=p.array;x=p.version;for(let v=0,y=_.length/3-1;v<y;v+=3){const b=v+0,w=v+1,A=v+2;d.push(b,w,w,A,A,b)}}const g=new(ff(d)?Pc:Cc)(d,1);g.version=x;const m=s.get(h);m&&e.remove(m),s.set(h,g)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function xv(r,e,t,n){const i=n.isWebGL2;let s;function o(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function u(d,f){r.drawElements(s,f,a,d*l),t.update(f,s,1)}function h(d,f,p){if(p===0)return;let x,g;if(i)x=r,g="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[g](s,f,a,d*l,p),t.update(f,s,p)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function vv(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function yv(r,e){return r[0]-e[0]}function _v(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Mv(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new Ze,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const f=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=f!==void 0?f.length:0;let x=s.get(u);if(x===void 0||x.count!==p){let R=function(){z.dispose(),s.delete(u),u.removeEventListener("dispose",R)};x!==void 0&&x.texture.dispose();const _=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,b=u.morphAttributes.position||[],w=u.morphAttributes.normal||[],A=u.morphAttributes.color||[];let T=0;_===!0&&(T=1),v===!0&&(T=2),y===!0&&(T=3);let M=u.attributes.position.count*T,S=1;M>e.maxTextureSize&&(S=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const D=new Float32Array(M*S*4*p),z=new ma(D,M,S,p);z.type=dn,z.needsUpdate=!0;const N=T*4;for(let O=0;O<p;O++){const $=b[O],K=w[O],j=A[O],ee=M*S*4*O;for(let te=0;te<$.count;te++){const ye=te*N;_===!0&&(o.fromBufferAttribute($,te),D[ee+ye+0]=o.x,D[ee+ye+1]=o.y,D[ee+ye+2]=o.z,D[ee+ye+3]=0),v===!0&&(o.fromBufferAttribute(K,te),D[ee+ye+4]=o.x,D[ee+ye+5]=o.y,D[ee+ye+6]=o.z,D[ee+ye+7]=0),y===!0&&(o.fromBufferAttribute(j,te),D[ee+ye+8]=o.x,D[ee+ye+9]=o.y,D[ee+ye+10]=o.z,D[ee+ye+11]=j.itemSize===4?o.w:1)}}x={count:p,texture:z,size:new W(M,S)},s.set(u,x),u.addEventListener("dispose",R)}let g=0;for(let _=0;_<d.length;_++)g+=d[_];const m=u.morphTargetsRelative?1:1-g;h.getUniforms().setValue(r,"morphTargetBaseInfluence",m),h.getUniforms().setValue(r,"morphTargetInfluences",d),h.getUniforms().setValue(r,"morphTargetsTexture",x.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}else{const f=d===void 0?0:d.length;let p=n[u.id];if(p===void 0||p.length!==f){p=[];for(let v=0;v<f;v++)p[v]=[v,0];n[u.id]=p}for(let v=0;v<f;v++){const y=p[v];y[0]=v,y[1]=d[v]}p.sort(_v);for(let v=0;v<8;v++)v<f&&p[v][1]?(a[v][0]=p[v][0],a[v][1]=p[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(yv);const x=u.morphAttributes.position,g=u.morphAttributes.normal;let m=0;for(let v=0;v<8;v++){const y=a[v],b=y[0],w=y[1];b!==Number.MAX_SAFE_INTEGER&&w?(x&&u.getAttribute("morphTarget"+v)!==x[b]&&u.setAttribute("morphTarget"+v,x[b]),g&&u.getAttribute("morphNormal"+v)!==g[b]&&u.setAttribute("morphNormal"+v,g[b]),i[v]=w,m+=w):(x&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),g&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}const _=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(r,"morphTargetBaseInfluence",_),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function bv(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const yf=new ct,_f=new ma,Mf=new Ac,bf=new Nr,zh=[],Fh=[],kh=new Float32Array(16),Bh=new Float32Array(9),Hh=new Float32Array(4);function zs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=zh[i];if(s===void 0&&(s=new Float32Array(i),zh[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function At(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Ct(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function va(r,e){let t=Fh[e];t===void 0&&(t=new Int32Array(e),Fh[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Sv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function wv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;r.uniform2fv(this.addr,e),Ct(t,e)}}function Tv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;r.uniform3fv(this.addr,e),Ct(t,e)}}function Ev(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;r.uniform4fv(this.addr,e),Ct(t,e)}}function Av(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,n))return;Hh.set(n),r.uniformMatrix2fv(this.addr,!1,Hh),Ct(t,n)}}function Cv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,n))return;Bh.set(n),r.uniformMatrix3fv(this.addr,!1,Bh),Ct(t,n)}}function Pv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,n))return;kh.set(n),r.uniformMatrix4fv(this.addr,!1,kh),Ct(t,n)}}function Iv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Dv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;r.uniform2iv(this.addr,e),Ct(t,e)}}function Lv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;r.uniform3iv(this.addr,e),Ct(t,e)}}function Rv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;r.uniform4iv(this.addr,e),Ct(t,e)}}function Nv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Uv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;r.uniform2uiv(this.addr,e),Ct(t,e)}}function Ov(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;r.uniform3uiv(this.addr,e),Ct(t,e)}}function zv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;r.uniform4uiv(this.addr,e),Ct(t,e)}}function Fv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||yf,i)}function kv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Mf,i)}function Bv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||bf,i)}function Hv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||_f,i)}function Vv(r){switch(r){case 5126:return Sv;case 35664:return wv;case 35665:return Tv;case 35666:return Ev;case 35674:return Av;case 35675:return Cv;case 35676:return Pv;case 5124:case 35670:return Iv;case 35667:case 35671:return Dv;case 35668:case 35672:return Lv;case 35669:case 35673:return Rv;case 5125:return Nv;case 36294:return Uv;case 36295:return Ov;case 36296:return zv;case 35678:case 36198:case 36298:case 36306:case 35682:return Fv;case 35679:case 36299:case 36307:return kv;case 35680:case 36300:case 36308:case 36293:return Bv;case 36289:case 36303:case 36311:case 36292:return Hv}}function Wv(r,e){r.uniform1fv(this.addr,e)}function Gv(r,e){const t=zs(e,this.size,2);r.uniform2fv(this.addr,t)}function jv(r,e){const t=zs(e,this.size,3);r.uniform3fv(this.addr,t)}function Yv(r,e){const t=zs(e,this.size,4);r.uniform4fv(this.addr,t)}function Xv(r,e){const t=zs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function qv(r,e){const t=zs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Qv(r,e){const t=zs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Jv(r,e){r.uniform1iv(this.addr,e)}function Zv(r,e){r.uniform2iv(this.addr,e)}function $v(r,e){r.uniform3iv(this.addr,e)}function Kv(r,e){r.uniform4iv(this.addr,e)}function ey(r,e){r.uniform1uiv(this.addr,e)}function ty(r,e){r.uniform2uiv(this.addr,e)}function ny(r,e){r.uniform3uiv(this.addr,e)}function iy(r,e){r.uniform4uiv(this.addr,e)}function sy(r,e,t){const n=this.cache,i=e.length,s=va(t,i);At(n,s)||(r.uniform1iv(this.addr,s),Ct(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||yf,s[o])}function ry(r,e,t){const n=this.cache,i=e.length,s=va(t,i);At(n,s)||(r.uniform1iv(this.addr,s),Ct(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Mf,s[o])}function oy(r,e,t){const n=this.cache,i=e.length,s=va(t,i);At(n,s)||(r.uniform1iv(this.addr,s),Ct(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||bf,s[o])}function ay(r,e,t){const n=this.cache,i=e.length,s=va(t,i);At(n,s)||(r.uniform1iv(this.addr,s),Ct(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||_f,s[o])}function ly(r){switch(r){case 5126:return Wv;case 35664:return Gv;case 35665:return jv;case 35666:return Yv;case 35674:return Xv;case 35675:return qv;case 35676:return Qv;case 5124:case 35670:return Jv;case 35667:case 35671:return Zv;case 35668:case 35672:return $v;case 35669:case 35673:return Kv;case 5125:return ey;case 36294:return ty;case 36295:return ny;case 36296:return iy;case 35678:case 36198:case 36298:case 36306:case 35682:return sy;case 35679:case 36299:case 36307:return ry;case 35680:case 36300:case 36308:case 36293:return oy;case 36289:case 36303:case 36311:case 36292:return ay}}class cy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Vv(t.type)}}class hy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=ly(t.type)}}class uy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const il=/(\w+)(\])?(\[|\.)?/g;function Vh(r,e){r.seq.push(e),r.map[e.id]=e}function dy(r,e,t){const n=r.name,i=n.length;for(il.lastIndex=0;;){const s=il.exec(n),o=il.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Vh(t,c===void 0?new cy(a,r,e):new hy(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new uy(a),Vh(t,h)),t=h}}}class qo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);dy(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Wh(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let fy=0;function py(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function my(r){switch(r){case Mn:return["Linear","( value )"];case Qe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Gh(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+py(r.getShaderSource(e),o)}else return i}function gy(r,e){const t=my(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function xy(r,e){let t;switch(e){case zd:t="Linear";break;case Fd:t="Reinhard";break;case kd:t="OptimizedCineon";break;case Bd:t="ACESFilmic";break;case Hd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function vy(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(or).join(`
`)}function yy(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function _y(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function or(r){return r!==""}function jh(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yh(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const My=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zl(r){return r.replace(My,by)}function by(r,e){const t=ke[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Zl(t)}const Sy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xh(r){return r.replace(Sy,wy)}function wy(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function qh(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ty(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===vc?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===md?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===vs&&(e="SHADOWMAP_TYPE_VSM"),e}function Ey(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ri:case oi:e="ENVMAP_TYPE_CUBE";break;case Rs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ay(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case oi:e="ENVMAP_MODE_REFRACTION";break}return e}function Cy(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Rr:e="ENVMAP_BLENDING_MULTIPLY";break;case Ud:e="ENVMAP_BLENDING_MIX";break;case Od:e="ENVMAP_BLENDING_ADD";break}return e}function Py(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Iy(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Ty(t),c=Ey(t),u=Ay(t),h=Cy(t),d=Py(t),f=t.isWebGL2?"":vy(t),p=yy(s),x=i.createProgram();let g,m,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=[p].filter(or).join(`
`),g.length>0&&(g+=`
`),m=[f,p].filter(or).join(`
`),m.length>0&&(m+=`
`)):(g=[qh(t),"#define SHADER_NAME "+t.shaderName,p,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(or).join(`
`),m=[f,qh(t),"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fn?"#define TONE_MAPPING":"",t.toneMapping!==fn?ke.tonemapping_pars_fragment:"",t.toneMapping!==fn?xy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.encodings_pars_fragment,gy("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(or).join(`
`)),o=Zl(o),o=jh(o,t),o=Yh(o,t),a=Zl(a),a=jh(a,t),a=Yh(a,t),o=Xh(o),a=Xh(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Xl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=_+g+o,y=_+m+a,b=Wh(i,35633,v),w=Wh(i,35632,y);if(i.attachShader(x,b),i.attachShader(x,w),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x),r.debug.checkShaderErrors){const M=i.getProgramInfoLog(x).trim(),S=i.getShaderInfoLog(b).trim(),D=i.getShaderInfoLog(w).trim();let z=!0,N=!0;if(i.getProgramParameter(x,35714)===!1)if(z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,x,b,w);else{const R=Gh(i,b,"vertex"),O=Gh(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,35715)+`

Program Info Log: `+M+`
`+R+`
`+O)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(S===""||D==="")&&(N=!1);N&&(this.diagnostics={runnable:z,programLog:M,vertexShader:{log:S,prefix:g},fragmentShader:{log:D,prefix:m}})}i.deleteShader(b),i.deleteShader(w);let A;this.getUniforms=function(){return A===void 0&&(A=new qo(i,x)),A};let T;return this.getAttributes=function(){return T===void 0&&(T=_y(i,x)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.name=t.shaderName,this.id=fy++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=w,this}let Dy=0;class Ly{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ry(e),t.set(e,n)),n}}class Ry{constructor(e){this.id=Dy++,this.code=e,this.usedTimes=0}}function Ny(r,e,t,n,i,s,o){const a=new ga,l=new Ly,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===1?"uv2":"uv"}function g(M,S,D,z,N){const R=z.fog,O=N.geometry,$=M.isMeshStandardMaterial?z.environment:null,K=(M.isMeshStandardMaterial?t:e).get(M.envMap||$),j=K&&K.mapping===Rs?K.image.height:null,ee=p[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const te=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ye=te!==void 0?te.length:0;let re=0;O.morphAttributes.position!==void 0&&(re=1),O.morphAttributes.normal!==void 0&&(re=2),O.morphAttributes.color!==void 0&&(re=3);let B,Q,le,ue;if(ee){const ve=_n[ee];B=ve.vertexShader,Q=ve.fragmentShader}else B=M.vertexShader,Q=M.fragmentShader,l.update(M),le=l.getVertexShaderID(M),ue=l.getFragmentShaderID(M);const H=r.getRenderTarget(),Le=N.isInstancedMesh===!0,De=!!M.map,ce=!!M.matcap,be=!!K,ie=!!M.aoMap,q=!!M.lightMap,ne=!!M.bumpMap,_e=!!M.normalMap,he=!!M.displacementMap,Pe=!!M.emissiveMap,Ie=!!M.metalnessMap,Ee=!!M.roughnessMap,ze=M.clearcoat>0,Xe=M.iridescence>0,I=M.sheen>0,C=M.transmission>0,G=ze&&!!M.clearcoatMap,se=ze&&!!M.clearcoatNormalMap,oe=ze&&!!M.clearcoatRoughnessMap,fe=Xe&&!!M.iridescenceMap,L=Xe&&!!M.iridescenceThicknessMap,Z=I&&!!M.sheenColorMap,V=I&&!!M.sheenRoughnessMap,me=!!M.specularMap,Me=!!M.specularColorMap,Te=!!M.specularIntensityMap,xe=C&&!!M.transmissionMap,Se=C&&!!M.thicknessMap,Ne=!!M.gradientMap,Ve=!!M.alphaMap,pt=M.alphaTest>0,U=!!M.extensions,X=!!O.attributes.uv2;return{isWebGL2:u,shaderID:ee,shaderName:M.type,vertexShader:B,fragmentShader:Q,defines:M.defines,customVertexShaderID:le,customFragmentShaderID:ue,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,instancing:Le,instancingColor:Le&&N.instanceColor!==null,supportsVertexTextures:d,outputEncoding:H===null?r.outputEncoding:H.isXRRenderTarget===!0?H.texture.encoding:Mn,map:De,matcap:ce,envMap:be,envMapMode:be&&K.mapping,envMapCubeUVHeight:j,aoMap:ie,lightMap:q,bumpMap:ne,normalMap:_e,displacementMap:d&&he,emissiveMap:Pe,normalMapObjectSpace:_e&&M.normalMapType===cf,normalMapTangentSpace:_e&&M.normalMapType===ci,decodeVideoTexture:De&&M.map.isVideoTexture===!0&&M.map.encoding===Qe,metalnessMap:Ie,roughnessMap:Ee,clearcoat:ze,clearcoatMap:G,clearcoatNormalMap:se,clearcoatRoughnessMap:oe,iridescence:Xe,iridescenceMap:fe,iridescenceThicknessMap:L,sheen:I,sheenColorMap:Z,sheenRoughnessMap:V,specularMap:me,specularColorMap:Me,specularIntensityMap:Te,transmission:C,transmissionMap:xe,thicknessMap:Se,gradientMap:Ne,opaque:M.transparent===!1&&M.blending===Ui,alphaMap:Ve,alphaTest:pt,combine:M.combine,mapUv:De&&x(M.map.channel),aoMapUv:ie&&x(M.aoMap.channel),lightMapUv:q&&x(M.lightMap.channel),bumpMapUv:ne&&x(M.bumpMap.channel),normalMapUv:_e&&x(M.normalMap.channel),displacementMapUv:he&&x(M.displacementMap.channel),emissiveMapUv:Pe&&x(M.emissiveMap.channel),metalnessMapUv:Ie&&x(M.metalnessMap.channel),roughnessMapUv:Ee&&x(M.roughnessMap.channel),clearcoatMapUv:G&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:se&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:L&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Z&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:V&&x(M.sheenRoughnessMap.channel),specularMapUv:me&&x(M.specularMap.channel),specularColorMapUv:Me&&x(M.specularColorMap.channel),specularIntensityMapUv:Te&&x(M.specularIntensityMap.channel),transmissionMapUv:xe&&x(M.transmissionMap.channel),thicknessMapUv:Se&&x(M.thicknessMap.channel),alphaMapUv:Ve&&x(M.alphaMap.channel),vertexTangents:_e&&!!O.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUvs2:X,pointsUvs:N.isPoints===!0&&!!O.attributes.uv&&(De||Ve),fog:!!R,useFog:M.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:N.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:re,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:M.toneMapped?r.toneMapping:fn,useLegacyLights:r.useLegacyLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Zt,flipSided:M.side===Et,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:U&&M.extensions.derivatives===!0,extensionFragDepth:U&&M.extensions.fragDepth===!0,extensionDrawBuffers:U&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:U&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function m(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const D in M.defines)S.push(D),S.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(_(S,M),v(S,M),S.push(r.outputEncoding)),S.push(M.customProgramCacheKey),S.join()}function _(M,S){M.push(S.precision),M.push(S.outputEncoding),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function v(M,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUvs2&&a.enable(13),S.vertexTangents&&a.enable(14),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.decodeVideoTexture&&a.enable(17),S.opaque&&a.enable(18),S.pointsUvs&&a.enable(19),M.push(a.mask)}function y(M){const S=p[M.type];let D;if(S){const z=_n[S];D=br.clone(z.uniforms)}else D=M.uniforms;return D}function b(M,S){let D;for(let z=0,N=c.length;z<N;z++){const R=c[z];if(R.cacheKey===S){D=R,++D.usedTimes;break}}return D===void 0&&(D=new Iy(r,S,M,s),c.push(D)),D}function w(M){if(--M.usedTimes===0){const S=c.indexOf(M);c[S]=c[c.length-1],c.pop(),M.destroy()}}function A(M){l.remove(M)}function T(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:y,acquireProgram:b,releaseProgram:w,releaseShaderCache:A,programs:c,dispose:T}}function Uy(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Oy(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Qh(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Jh(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,f,p,x,g){let m=r[e];return m===void 0?(m={id:h.id,object:h,geometry:d,material:f,groupOrder:p,renderOrder:h.renderOrder,z:x,group:g},r[e]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=f,m.groupOrder=p,m.renderOrder=h.renderOrder,m.z=x,m.group=g),e++,m}function a(h,d,f,p,x,g){const m=o(h,d,f,p,x,g);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):t.push(m)}function l(h,d,f,p,x,g){const m=o(h,d,f,p,x,g);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):t.unshift(m)}function c(h,d){t.length>1&&t.sort(h||Oy),n.length>1&&n.sort(d||Qh),i.length>1&&i.sort(d||Qh)}function u(){for(let h=e,d=r.length;h<d;h++){const f=r[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function zy(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Jh,r.set(n,[o])):i>=s.length?(o=new Jh,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function Fy(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new E,color:new pe};break;case"SpotLight":t={position:new E,direction:new E,color:new pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new E,color:new pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new E,skyColor:new pe,groundColor:new pe};break;case"RectAreaLight":t={color:new pe,position:new E,halfWidth:new E,halfHeight:new E};break}return r[e.id]=t,t}}}function ky(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new W};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new W};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new W,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let By=0;function Hy(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Vy(r,e){const t=new Fy,n=ky(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new E);const s=new E,o=new we,a=new we;function l(u,h){let d=0,f=0,p=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let x=0,g=0,m=0,_=0,v=0,y=0,b=0,w=0,A=0,T=0;u.sort(Hy);const M=h===!0?Math.PI:1;for(let D=0,z=u.length;D<z;D++){const N=u[D],R=N.color,O=N.intensity,$=N.distance,K=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)d+=R.r*O*M,f+=R.g*O*M,p+=R.b*O*M;else if(N.isLightProbe)for(let j=0;j<9;j++)i.probe[j].addScaledVector(N.sh.coefficients[j],O);else if(N.isDirectionalLight){const j=t.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity*M),N.castShadow){const ee=N.shadow,te=n.get(N);te.shadowBias=ee.bias,te.shadowNormalBias=ee.normalBias,te.shadowRadius=ee.radius,te.shadowMapSize=ee.mapSize,i.directionalShadow[x]=te,i.directionalShadowMap[x]=K,i.directionalShadowMatrix[x]=N.shadow.matrix,y++}i.directional[x]=j,x++}else if(N.isSpotLight){const j=t.get(N);j.position.setFromMatrixPosition(N.matrixWorld),j.color.copy(R).multiplyScalar(O*M),j.distance=$,j.coneCos=Math.cos(N.angle),j.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),j.decay=N.decay,i.spot[m]=j;const ee=N.shadow;if(N.map&&(i.spotLightMap[A]=N.map,A++,ee.updateMatrices(N),N.castShadow&&T++),i.spotLightMatrix[m]=ee.matrix,N.castShadow){const te=n.get(N);te.shadowBias=ee.bias,te.shadowNormalBias=ee.normalBias,te.shadowRadius=ee.radius,te.shadowMapSize=ee.mapSize,i.spotShadow[m]=te,i.spotShadowMap[m]=K,w++}m++}else if(N.isRectAreaLight){const j=t.get(N);j.color.copy(R).multiplyScalar(O),j.halfWidth.set(N.width*.5,0,0),j.halfHeight.set(0,N.height*.5,0),i.rectArea[_]=j,_++}else if(N.isPointLight){const j=t.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity*M),j.distance=N.distance,j.decay=N.decay,N.castShadow){const ee=N.shadow,te=n.get(N);te.shadowBias=ee.bias,te.shadowNormalBias=ee.normalBias,te.shadowRadius=ee.radius,te.shadowMapSize=ee.mapSize,te.shadowCameraNear=ee.camera.near,te.shadowCameraFar=ee.camera.far,i.pointShadow[g]=te,i.pointShadowMap[g]=K,i.pointShadowMatrix[g]=N.shadow.matrix,b++}i.point[g]=j,g++}else if(N.isHemisphereLight){const j=t.get(N);j.skyColor.copy(N.color).multiplyScalar(O*M),j.groundColor.copy(N.groundColor).multiplyScalar(O*M),i.hemi[v]=j,v++}}_>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=p;const S=i.hash;(S.directionalLength!==x||S.pointLength!==g||S.spotLength!==m||S.rectAreaLength!==_||S.hemiLength!==v||S.numDirectionalShadows!==y||S.numPointShadows!==b||S.numSpotShadows!==w||S.numSpotMaps!==A)&&(i.directional.length=x,i.spot.length=m,i.rectArea.length=_,i.point.length=g,i.hemi.length=v,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=w+A-T,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=T,S.directionalLength=x,S.pointLength=g,S.spotLength=m,S.rectAreaLength=_,S.hemiLength=v,S.numDirectionalShadows=y,S.numPointShadows=b,S.numSpotShadows=w,S.numSpotMaps=A,i.version=By++)}function c(u,h){let d=0,f=0,p=0,x=0,g=0;const m=h.matrixWorldInverse;for(let _=0,v=u.length;_<v;_++){const y=u[_];if(y.isDirectionalLight){const b=i.directional[d];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),d++}else if(y.isSpotLight){const b=i.spot[p];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const b=i.rectArea[x];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),a.identity(),o.copy(y.matrixWorld),o.premultiply(m),a.extractRotation(o),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){const b=i.point[f];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const b=i.hemi[g];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(m),g++}}}return{setup:l,setupView:c,state:i}}function Zh(r,e){const t=new Vy(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Wy(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Zh(r,e),t.set(s,[l])):o>=a.length?(l=new Zh(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class Dc extends Ht{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=af,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Lc extends Ht{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Gy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Yy(r,e,t){let n=new Us;const i=new W,s=new W,o=new Ze,a=new Dc({depthPacking:lf}),l=new Lc,c={},u=t.maxTextureSize,h={[sn]:Et,[Et]:sn,[Zt]:Zt},d=new Lt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new W},radius:{value:4}},vertexShader:Gy,fragmentShader:jy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new Fe;p.setAttribute("position",new rt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new $e(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vc,this.render=function(y,b,w){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||y.length===0)return;const A=r.getRenderTarget(),T=r.getActiveCubeFace(),M=r.getActiveMipmapLevel(),S=r.state;S.setBlending(Yn),S.buffers.color.setClear(1,1,1,1),S.buffers.depth.setTest(!0),S.setScissorTest(!1);for(let D=0,z=y.length;D<z;D++){const N=y[D],R=N.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;i.copy(R.mapSize);const O=R.getFrameExtents();if(i.multiply(O),s.copy(R.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/O.x),i.x=s.x*O.x,R.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/O.y),i.y=s.y*O.y,R.mapSize.y=s.y)),R.map===null){const K=this.type!==vs?{minFilter:ut,magFilter:ut}:{};R.map=new Rt(i.x,i.y,K),R.map.texture.name=N.name+".shadowMap",R.camera.updateProjectionMatrix()}r.setRenderTarget(R.map),r.clear();const $=R.getViewportCount();for(let K=0;K<$;K++){const j=R.getViewport(K);o.set(s.x*j.x,s.y*j.y,s.x*j.z,s.y*j.w),S.viewport(o),R.updateMatrices(N,K),n=R.getFrustum(),v(b,w,R.camera,N,this.type)}R.isPointLightShadow!==!0&&this.type===vs&&m(R,w),R.needsUpdate=!1}g.needsUpdate=!1,r.setRenderTarget(A,T,M)};function m(y,b){const w=e.update(x);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,f.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Rt(i.x,i.y)),d.uniforms.shadow_pass.value=y.map.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,r.setRenderTarget(y.mapPass),r.clear(),r.renderBufferDirect(b,null,w,d,x,null),f.uniforms.shadow_pass.value=y.mapPass.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,r.setRenderTarget(y.map),r.clear(),r.renderBufferDirect(b,null,w,f,x,null)}function _(y,b,w,A){let T=null;const M=w.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(M!==void 0)T=M;else if(T=w.isPointLight===!0?l:a,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const S=T.uuid,D=b.uuid;let z=c[S];z===void 0&&(z={},c[S]=z);let N=z[D];N===void 0&&(N=T.clone(),z[D]=N),T=N}if(T.visible=b.visible,T.wireframe=b.wireframe,A===vs?T.side=b.shadowSide!==null?b.shadowSide:b.side:T.side=b.shadowSide!==null?b.shadowSide:h[b.side],T.alphaMap=b.alphaMap,T.alphaTest=b.alphaTest,T.map=b.map,T.clipShadows=b.clipShadows,T.clippingPlanes=b.clippingPlanes,T.clipIntersection=b.clipIntersection,T.displacementMap=b.displacementMap,T.displacementScale=b.displacementScale,T.displacementBias=b.displacementBias,T.wireframeLinewidth=b.wireframeLinewidth,T.linewidth=b.linewidth,w.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const S=r.properties.get(T);S.light=w}return T}function v(y,b,w,A,T){if(y.visible===!1)return;if(y.layers.test(b.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&T===vs)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,y.matrixWorld);const D=e.update(y),z=y.material;if(Array.isArray(z)){const N=D.groups;for(let R=0,O=N.length;R<O;R++){const $=N[R],K=z[$.materialIndex];if(K&&K.visible){const j=_(y,K,A,T);r.renderBufferDirect(w,null,D,j,y,$)}}}else if(z.visible){const N=_(y,z,A,T);r.renderBufferDirect(w,null,D,N,y,null)}}const S=y.children;for(let D=0,z=S.length;D<z;D++)v(S[D],b,w,A,T)}}function Xy(r,e,t){const n=t.isWebGL2;function i(){let U=!1;const X=new Ze;let ae=null;const ve=new Ze(0,0,0,0);return{setMask:function(Ae){ae!==Ae&&!U&&(r.colorMask(Ae,Ae,Ae,Ae),ae=Ae)},setLocked:function(Ae){U=Ae},setClear:function(Ae,ot,at,Ut,Qn){Qn===!0&&(Ae*=Ut,ot*=Ut,at*=Ut),X.set(Ae,ot,at,Ut),ve.equals(X)===!1&&(r.clearColor(Ae,ot,at,Ut),ve.copy(X))},reset:function(){U=!1,ae=null,ve.set(-1,0,0,0)}}}function s(){let U=!1,X=null,ae=null,ve=null;return{setTest:function(Ae){Ae?H(2929):Le(2929)},setMask:function(Ae){X!==Ae&&!U&&(r.depthMask(Ae),X=Ae)},setFunc:function(Ae){if(ae!==Ae){switch(Ae){case Cd:r.depthFunc(512);break;case Pd:r.depthFunc(519);break;case Id:r.depthFunc(513);break;case na:r.depthFunc(515);break;case Dd:r.depthFunc(514);break;case Ld:r.depthFunc(518);break;case Rd:r.depthFunc(516);break;case Nd:r.depthFunc(517);break;default:r.depthFunc(515)}ae=Ae}},setLocked:function(Ae){U=Ae},setClear:function(Ae){ve!==Ae&&(r.clearDepth(Ae),ve=Ae)},reset:function(){U=!1,X=null,ae=null,ve=null}}}function o(){let U=!1,X=null,ae=null,ve=null,Ae=null,ot=null,at=null,Ut=null,Qn=null;return{setTest:function(mt){U||(mt?H(2960):Le(2960))},setMask:function(mt){X!==mt&&!U&&(r.stencilMask(mt),X=mt)},setFunc:function(mt,ln,Tn){(ae!==mt||ve!==ln||Ae!==Tn)&&(r.stencilFunc(mt,ln,Tn),ae=mt,ve=ln,Ae=Tn)},setOp:function(mt,ln,Tn){(ot!==mt||at!==ln||Ut!==Tn)&&(r.stencilOp(mt,ln,Tn),ot=mt,at=ln,Ut=Tn)},setLocked:function(mt){U=mt},setClear:function(mt){Qn!==mt&&(r.clearStencil(mt),Qn=mt)},reset:function(){U=!1,X=null,ae=null,ve=null,Ae=null,ot=null,at=null,Ut=null,Qn=null}}}const a=new i,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let d={},f={},p=new WeakMap,x=[],g=null,m=!1,_=null,v=null,y=null,b=null,w=null,A=null,T=null,M=!1,S=null,D=null,z=null,N=null,R=null;const O=r.getParameter(35661);let $=!1,K=0;const j=r.getParameter(7938);j.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(j)[1]),$=K>=1):j.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),$=K>=2);let ee=null,te={};const ye=r.getParameter(3088),re=r.getParameter(2978),B=new Ze().fromArray(ye),Q=new Ze().fromArray(re);function le(U,X,ae){const ve=new Uint8Array(4),Ae=r.createTexture();r.bindTexture(U,Ae),r.texParameteri(U,10241,9728),r.texParameteri(U,10240,9728);for(let ot=0;ot<ae;ot++)r.texImage2D(X+ot,0,6408,1,1,0,6408,5121,ve);return Ae}const ue={};ue[3553]=le(3553,3553,1),ue[34067]=le(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),H(2929),l.setFunc(na),he(!1),Pe(yl),H(2884),ne(Yn);function H(U){d[U]!==!0&&(r.enable(U),d[U]=!0)}function Le(U){d[U]!==!1&&(r.disable(U),d[U]=!1)}function De(U,X){return f[U]!==X?(r.bindFramebuffer(U,X),f[U]=X,n&&(U===36009&&(f[36160]=X),U===36160&&(f[36009]=X)),!0):!1}function ce(U,X){let ae=x,ve=!1;if(U)if(ae=p.get(X),ae===void 0&&(ae=[],p.set(X,ae)),U.isWebGLMultipleRenderTargets){const Ae=U.texture;if(ae.length!==Ae.length||ae[0]!==36064){for(let ot=0,at=Ae.length;ot<at;ot++)ae[ot]=36064+ot;ae.length=Ae.length,ve=!0}}else ae[0]!==36064&&(ae[0]=36064,ve=!0);else ae[0]!==1029&&(ae[0]=1029,ve=!0);ve&&(t.isWebGL2?r.drawBuffers(ae):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae))}function be(U){return g!==U?(r.useProgram(U),g=U,!0):!1}const ie={[Ai]:32774,[xd]:32778,[vd]:32779};if(n)ie[bl]=32775,ie[Sl]=32776;else{const U=e.get("EXT_blend_minmax");U!==null&&(ie[bl]=U.MIN_EXT,ie[Sl]=U.MAX_EXT)}const q={[yd]:0,[_d]:1,[Md]:768,[yc]:770,[Ad]:776,[Td]:774,[Sd]:772,[bd]:769,[_c]:771,[Ed]:775,[wd]:773};function ne(U,X,ae,ve,Ae,ot,at,Ut){if(U===Yn){m===!0&&(Le(3042),m=!1);return}if(m===!1&&(H(3042),m=!0),U!==gd){if(U!==_||Ut!==M){if((v!==Ai||w!==Ai)&&(r.blendEquation(32774),v=Ai,w=Ai),Ut)switch(U){case Ui:r.blendFuncSeparate(1,771,1,771);break;case ta:r.blendFunc(1,1);break;case _l:r.blendFuncSeparate(0,769,0,1);break;case Ml:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ui:r.blendFuncSeparate(770,771,1,771);break;case ta:r.blendFunc(770,1);break;case _l:r.blendFuncSeparate(0,769,0,1);break;case Ml:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}y=null,b=null,A=null,T=null,_=U,M=Ut}return}Ae=Ae||X,ot=ot||ae,at=at||ve,(X!==v||Ae!==w)&&(r.blendEquationSeparate(ie[X],ie[Ae]),v=X,w=Ae),(ae!==y||ve!==b||ot!==A||at!==T)&&(r.blendFuncSeparate(q[ae],q[ve],q[ot],q[at]),y=ae,b=ve,A=ot,T=at),_=U,M=!1}function _e(U,X){U.side===Zt?Le(2884):H(2884);let ae=U.side===Et;X&&(ae=!ae),he(ae),U.blending===Ui&&U.transparent===!1?ne(Yn):ne(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),a.setMask(U.colorWrite);const ve=U.stencilWrite;c.setTest(ve),ve&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ee(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?H(32926):Le(32926)}function he(U){S!==U&&(U?r.frontFace(2304):r.frontFace(2305),S=U)}function Pe(U){U!==fd?(H(2884),U!==D&&(U===yl?r.cullFace(1029):U===pd?r.cullFace(1028):r.cullFace(1032))):Le(2884),D=U}function Ie(U){U!==z&&($&&r.lineWidth(U),z=U)}function Ee(U,X,ae){U?(H(32823),(N!==X||R!==ae)&&(r.polygonOffset(X,ae),N=X,R=ae)):Le(32823)}function ze(U){U?H(3089):Le(3089)}function Xe(U){U===void 0&&(U=33984+O-1),ee!==U&&(r.activeTexture(U),ee=U)}function I(U,X,ae){ae===void 0&&(ee===null?ae=33984+O-1:ae=ee);let ve=te[ae];ve===void 0&&(ve={type:void 0,texture:void 0},te[ae]=ve),(ve.type!==U||ve.texture!==X)&&(ee!==ae&&(r.activeTexture(ae),ee=ae),r.bindTexture(U,X||ue[U]),ve.type=U,ve.texture=X)}function C(){const U=te[ee];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function G(){try{r.compressedTexImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(){try{r.compressedTexImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function oe(){try{r.texSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(){try{r.texSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function L(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function V(){try{r.texStorage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(){try{r.texStorage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Me(){try{r.texImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Te(){try{r.texImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xe(U){B.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),B.copy(U))}function Se(U){Q.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),Q.copy(U))}function Ne(U,X){let ae=h.get(X);ae===void 0&&(ae=new WeakMap,h.set(X,ae));let ve=ae.get(U);ve===void 0&&(ve=r.getUniformBlockIndex(X,U.name),ae.set(U,ve))}function Ve(U,X){const ve=h.get(X).get(U);u.get(X)!==ve&&(r.uniformBlockBinding(X,ve,U.__bindingPointIndex),u.set(X,ve))}function pt(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},ee=null,te={},f={},p=new WeakMap,x=[],g=null,m=!1,_=null,v=null,y=null,b=null,w=null,A=null,T=null,M=!1,S=null,D=null,z=null,N=null,R=null,B.set(0,0,r.canvas.width,r.canvas.height),Q.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:H,disable:Le,bindFramebuffer:De,drawBuffers:ce,useProgram:be,setBlending:ne,setMaterial:_e,setFlipSided:he,setCullFace:Pe,setLineWidth:Ie,setPolygonOffset:Ee,setScissorTest:ze,activeTexture:Xe,bindTexture:I,unbindTexture:C,compressedTexImage2D:G,compressedTexImage3D:se,texImage2D:Me,texImage3D:Te,updateUBOMapping:Ne,uniformBlockBinding:Ve,texStorage2D:V,texStorage3D:me,texSubImage2D:oe,texSubImage3D:fe,compressedTexSubImage2D:L,compressedTexSubImage3D:Z,scissor:xe,viewport:Se,reset:pt}}function qy(r,e,t,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new WeakMap;let x;const g=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(I,C){return m?new OffscreenCanvas(I,C):Mr("canvas")}function v(I,C,G,se){let oe=1;if((I.width>se||I.height>se)&&(oe=se/Math.max(I.width,I.height)),oe<1||C===!0)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap){const fe=C?df:Math.floor,L=fe(oe*I.width),Z=fe(oe*I.height);x===void 0&&(x=_(L,Z));const V=G?_(L,Z):x;return V.width=L,V.height=Z,V.getContext("2d").drawImage(I,0,0,L,Z),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+L+"x"+Z+")."),V}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),I;return I}function y(I){return ql(I.width)&&ql(I.height)}function b(I){return a?!1:I.wrapS!==Mt||I.wrapT!==Mt||I.minFilter!==ut&&I.minFilter!==st}function w(I,C){return I.generateMipmaps&&C&&I.minFilter!==ut&&I.minFilter!==st}function A(I){r.generateMipmap(I)}function T(I,C,G,se,oe=!1){if(a===!1)return C;if(I!==null){if(r[I]!==void 0)return r[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let fe=C;return C===6403&&(G===5126&&(fe=33326),G===5131&&(fe=33325),G===5121&&(fe=33321)),C===33319&&(G===5126&&(fe=33328),G===5131&&(fe=33327),G===5121&&(fe=33323)),C===6408&&(G===5126&&(fe=34836),G===5131&&(fe=34842),G===5121&&(fe=se===Qe&&oe===!1?35907:32856),G===32819&&(fe=32854),G===32820&&(fe=32855)),(fe===33325||fe===33326||fe===33327||fe===33328||fe===34842||fe===34836)&&e.get("EXT_color_buffer_float"),fe}function M(I,C,G){return w(I,G)===!0||I.isFramebufferTexture&&I.minFilter!==ut&&I.minFilter!==st?Math.log2(Math.max(C.width,C.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?C.mipmaps.length:1}function S(I){return I===ut||I===ia||I===cr?9728:9729}function D(I){const C=I.target;C.removeEventListener("dispose",D),N(C),C.isVideoTexture&&p.delete(C)}function z(I){const C=I.target;C.removeEventListener("dispose",z),O(C)}function N(I){const C=n.get(I);if(C.__webglInit===void 0)return;const G=I.source,se=g.get(G);if(se){const oe=se[C.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&R(I),Object.keys(se).length===0&&g.delete(G)}n.remove(I)}function R(I){const C=n.get(I);r.deleteTexture(C.__webglTexture);const G=I.source,se=g.get(G);delete se[C.__cacheKey],o.memory.textures--}function O(I){const C=I.texture,G=n.get(I),se=n.get(C);if(se.__webglTexture!==void 0&&(r.deleteTexture(se.__webglTexture),o.memory.textures--),I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++)r.deleteFramebuffer(G.__webglFramebuffer[oe]),G.__webglDepthbuffer&&r.deleteRenderbuffer(G.__webglDepthbuffer[oe]);else{if(r.deleteFramebuffer(G.__webglFramebuffer),G.__webglDepthbuffer&&r.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&r.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let oe=0;oe<G.__webglColorRenderbuffer.length;oe++)G.__webglColorRenderbuffer[oe]&&r.deleteRenderbuffer(G.__webglColorRenderbuffer[oe]);G.__webglDepthRenderbuffer&&r.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(I.isWebGLMultipleRenderTargets)for(let oe=0,fe=C.length;oe<fe;oe++){const L=n.get(C[oe]);L.__webglTexture&&(r.deleteTexture(L.__webglTexture),o.memory.textures--),n.remove(C[oe])}n.remove(C),n.remove(I)}let $=0;function K(){$=0}function j(){const I=$;return I>=l&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+l),$+=1,I}function ee(I){const C=[];return C.push(I.wrapS),C.push(I.wrapT),C.push(I.wrapR||0),C.push(I.magFilter),C.push(I.minFilter),C.push(I.anisotropy),C.push(I.internalFormat),C.push(I.format),C.push(I.type),C.push(I.generateMipmaps),C.push(I.premultiplyAlpha),C.push(I.flipY),C.push(I.unpackAlignment),C.push(I.encoding),C.join()}function te(I,C){const G=n.get(I);if(I.isVideoTexture&&ze(I),I.isRenderTargetTexture===!1&&I.version>0&&G.__version!==I.version){const se=I.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Le(G,I,C);return}}t.bindTexture(3553,G.__webglTexture,33984+C)}function ye(I,C){const G=n.get(I);if(I.version>0&&G.__version!==I.version){Le(G,I,C);return}t.bindTexture(35866,G.__webglTexture,33984+C)}function re(I,C){const G=n.get(I);if(I.version>0&&G.__version!==I.version){Le(G,I,C);return}t.bindTexture(32879,G.__webglTexture,33984+C)}function B(I,C){const G=n.get(I);if(I.version>0&&G.__version!==I.version){De(G,I,C);return}t.bindTexture(34067,G.__webglTexture,33984+C)}const Q={[Gn]:10497,[Mt]:33071,[gr]:33648},le={[ut]:9728,[ia]:9984,[cr]:9986,[st]:9729,[Mc]:9985,[ai]:9987};function ue(I,C,G){if(G?(r.texParameteri(I,10242,Q[C.wrapS]),r.texParameteri(I,10243,Q[C.wrapT]),(I===32879||I===35866)&&r.texParameteri(I,32882,Q[C.wrapR]),r.texParameteri(I,10240,le[C.magFilter]),r.texParameteri(I,10241,le[C.minFilter])):(r.texParameteri(I,10242,33071),r.texParameteri(I,10243,33071),(I===32879||I===35866)&&r.texParameteri(I,32882,33071),(C.wrapS!==Mt||C.wrapT!==Mt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(I,10240,S(C.magFilter)),r.texParameteri(I,10241,S(C.minFilter)),C.minFilter!==ut&&C.minFilter!==st&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const se=e.get("EXT_texture_filter_anisotropic");if(C.magFilter===ut||C.minFilter!==cr&&C.minFilter!==ai||C.type===dn&&e.has("OES_texture_float_linear")===!1||a===!1&&C.type===Cn&&e.has("OES_texture_half_float_linear")===!1)return;(C.anisotropy>1||n.get(C).__currentAnisotropy)&&(r.texParameterf(I,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,i.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy)}}function H(I,C){let G=!1;I.__webglInit===void 0&&(I.__webglInit=!0,C.addEventListener("dispose",D));const se=C.source;let oe=g.get(se);oe===void 0&&(oe={},g.set(se,oe));const fe=ee(C);if(fe!==I.__cacheKey){oe[fe]===void 0&&(oe[fe]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,G=!0),oe[fe].usedTimes++;const L=oe[I.__cacheKey];L!==void 0&&(oe[I.__cacheKey].usedTimes--,L.usedTimes===0&&R(C)),I.__cacheKey=fe,I.__webglTexture=oe[fe].texture}return G}function Le(I,C,G){let se=3553;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(se=35866),C.isData3DTexture&&(se=32879);const oe=H(I,C),fe=C.source;t.bindTexture(se,I.__webglTexture,33984+G);const L=n.get(fe);if(fe.version!==L.__version||oe===!0){t.activeTexture(33984+G),r.pixelStorei(37440,C.flipY),r.pixelStorei(37441,C.premultiplyAlpha),r.pixelStorei(3317,C.unpackAlignment),r.pixelStorei(37443,0);const Z=b(C)&&y(C.image)===!1;let V=v(C.image,Z,!1,u);V=Xe(C,V);const me=y(V)||a,Me=s.convert(C.format,C.encoding);let Te=s.convert(C.type),xe=T(C.internalFormat,Me,Te,C.encoding,C.isVideoTexture);ue(se,C,me);let Se;const Ne=C.mipmaps,Ve=a&&C.isVideoTexture!==!0,pt=L.__version===void 0||oe===!0,U=M(C,V,me);if(C.isDepthTexture)xe=6402,a?C.type===dn?xe=36012:C.type===ti?xe=33190:C.type===Oi?xe=35056:xe=33189:C.type===dn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),C.format===ii&&xe===6402&&C.type!==bc&&C.type!==ti&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),C.type=ti,Te=s.convert(C.type)),C.format===Bi&&xe===6402&&(xe=34041,C.type!==Oi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),C.type=Oi,Te=s.convert(C.type))),pt&&(Ve?t.texStorage2D(3553,1,xe,V.width,V.height):t.texImage2D(3553,0,xe,V.width,V.height,0,Me,Te,null));else if(C.isDataTexture)if(Ne.length>0&&me){Ve&&pt&&t.texStorage2D(3553,U,xe,Ne[0].width,Ne[0].height);for(let X=0,ae=Ne.length;X<ae;X++)Se=Ne[X],Ve?t.texSubImage2D(3553,X,0,0,Se.width,Se.height,Me,Te,Se.data):t.texImage2D(3553,X,xe,Se.width,Se.height,0,Me,Te,Se.data);C.generateMipmaps=!1}else Ve?(pt&&t.texStorage2D(3553,U,xe,V.width,V.height),t.texSubImage2D(3553,0,0,0,V.width,V.height,Me,Te,V.data)):t.texImage2D(3553,0,xe,V.width,V.height,0,Me,Te,V.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Ve&&pt&&t.texStorage3D(35866,U,xe,Ne[0].width,Ne[0].height,V.depth);for(let X=0,ae=Ne.length;X<ae;X++)Se=Ne[X],C.format!==qt?Me!==null?Ve?t.compressedTexSubImage3D(35866,X,0,0,0,Se.width,Se.height,V.depth,Me,Se.data,0,0):t.compressedTexImage3D(35866,X,xe,Se.width,Se.height,V.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?t.texSubImage3D(35866,X,0,0,0,Se.width,Se.height,V.depth,Me,Te,Se.data):t.texImage3D(35866,X,xe,Se.width,Se.height,V.depth,0,Me,Te,Se.data)}else{Ve&&pt&&t.texStorage2D(3553,U,xe,Ne[0].width,Ne[0].height);for(let X=0,ae=Ne.length;X<ae;X++)Se=Ne[X],C.format!==qt?Me!==null?Ve?t.compressedTexSubImage2D(3553,X,0,0,Se.width,Se.height,Me,Se.data):t.compressedTexImage2D(3553,X,xe,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?t.texSubImage2D(3553,X,0,0,Se.width,Se.height,Me,Te,Se.data):t.texImage2D(3553,X,xe,Se.width,Se.height,0,Me,Te,Se.data)}else if(C.isDataArrayTexture)Ve?(pt&&t.texStorage3D(35866,U,xe,V.width,V.height,V.depth),t.texSubImage3D(35866,0,0,0,0,V.width,V.height,V.depth,Me,Te,V.data)):t.texImage3D(35866,0,xe,V.width,V.height,V.depth,0,Me,Te,V.data);else if(C.isData3DTexture)Ve?(pt&&t.texStorage3D(32879,U,xe,V.width,V.height,V.depth),t.texSubImage3D(32879,0,0,0,0,V.width,V.height,V.depth,Me,Te,V.data)):t.texImage3D(32879,0,xe,V.width,V.height,V.depth,0,Me,Te,V.data);else if(C.isFramebufferTexture){if(pt)if(Ve)t.texStorage2D(3553,U,xe,V.width,V.height);else{let X=V.width,ae=V.height;for(let ve=0;ve<U;ve++)t.texImage2D(3553,ve,xe,X,ae,0,Me,Te,null),X>>=1,ae>>=1}}else if(Ne.length>0&&me){Ve&&pt&&t.texStorage2D(3553,U,xe,Ne[0].width,Ne[0].height);for(let X=0,ae=Ne.length;X<ae;X++)Se=Ne[X],Ve?t.texSubImage2D(3553,X,0,0,Me,Te,Se):t.texImage2D(3553,X,xe,Me,Te,Se);C.generateMipmaps=!1}else Ve?(pt&&t.texStorage2D(3553,U,xe,V.width,V.height),t.texSubImage2D(3553,0,0,0,Me,Te,V)):t.texImage2D(3553,0,xe,Me,Te,V);w(C,me)&&A(se),L.__version=fe.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function De(I,C,G){if(C.image.length!==6)return;const se=H(I,C),oe=C.source;t.bindTexture(34067,I.__webglTexture,33984+G);const fe=n.get(oe);if(oe.version!==fe.__version||se===!0){t.activeTexture(33984+G),r.pixelStorei(37440,C.flipY),r.pixelStorei(37441,C.premultiplyAlpha),r.pixelStorei(3317,C.unpackAlignment),r.pixelStorei(37443,0);const L=C.isCompressedTexture||C.image[0].isCompressedTexture,Z=C.image[0]&&C.image[0].isDataTexture,V=[];for(let X=0;X<6;X++)!L&&!Z?V[X]=v(C.image[X],!1,!0,c):V[X]=Z?C.image[X].image:C.image[X],V[X]=Xe(C,V[X]);const me=V[0],Me=y(me)||a,Te=s.convert(C.format,C.encoding),xe=s.convert(C.type),Se=T(C.internalFormat,Te,xe,C.encoding),Ne=a&&C.isVideoTexture!==!0,Ve=fe.__version===void 0||se===!0;let pt=M(C,me,Me);ue(34067,C,Me);let U;if(L){Ne&&Ve&&t.texStorage2D(34067,pt,Se,me.width,me.height);for(let X=0;X<6;X++){U=V[X].mipmaps;for(let ae=0;ae<U.length;ae++){const ve=U[ae];C.format!==qt?Te!==null?Ne?t.compressedTexSubImage2D(34069+X,ae,0,0,ve.width,ve.height,Te,ve.data):t.compressedTexImage2D(34069+X,ae,Se,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?t.texSubImage2D(34069+X,ae,0,0,ve.width,ve.height,Te,xe,ve.data):t.texImage2D(34069+X,ae,Se,ve.width,ve.height,0,Te,xe,ve.data)}}}else{U=C.mipmaps,Ne&&Ve&&(U.length>0&&pt++,t.texStorage2D(34067,pt,Se,V[0].width,V[0].height));for(let X=0;X<6;X++)if(Z){Ne?t.texSubImage2D(34069+X,0,0,0,V[X].width,V[X].height,Te,xe,V[X].data):t.texImage2D(34069+X,0,Se,V[X].width,V[X].height,0,Te,xe,V[X].data);for(let ae=0;ae<U.length;ae++){const Ae=U[ae].image[X].image;Ne?t.texSubImage2D(34069+X,ae+1,0,0,Ae.width,Ae.height,Te,xe,Ae.data):t.texImage2D(34069+X,ae+1,Se,Ae.width,Ae.height,0,Te,xe,Ae.data)}}else{Ne?t.texSubImage2D(34069+X,0,0,0,Te,xe,V[X]):t.texImage2D(34069+X,0,Se,Te,xe,V[X]);for(let ae=0;ae<U.length;ae++){const ve=U[ae];Ne?t.texSubImage2D(34069+X,ae+1,0,0,Te,xe,ve.image[X]):t.texImage2D(34069+X,ae+1,Se,Te,xe,ve.image[X])}}}w(C,Me)&&A(34067),fe.__version=oe.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function ce(I,C,G,se,oe){const fe=s.convert(G.format,G.encoding),L=s.convert(G.type),Z=T(G.internalFormat,fe,L,G.encoding);n.get(C).__hasExternalTextures||(oe===32879||oe===35866?t.texImage3D(oe,0,Z,C.width,C.height,C.depth,0,fe,L,null):t.texImage2D(oe,0,Z,C.width,C.height,0,fe,L,null)),t.bindFramebuffer(36160,I),Ee(C)?d.framebufferTexture2DMultisampleEXT(36160,se,oe,n.get(G).__webglTexture,0,Ie(C)):(oe===3553||oe>=34069&&oe<=34074)&&r.framebufferTexture2D(36160,se,oe,n.get(G).__webglTexture,0),t.bindFramebuffer(36160,null)}function be(I,C,G){if(r.bindRenderbuffer(36161,I),C.depthBuffer&&!C.stencilBuffer){let se=33189;if(G||Ee(C)){const oe=C.depthTexture;oe&&oe.isDepthTexture&&(oe.type===dn?se=36012:oe.type===ti&&(se=33190));const fe=Ie(C);Ee(C)?d.renderbufferStorageMultisampleEXT(36161,fe,se,C.width,C.height):r.renderbufferStorageMultisample(36161,fe,se,C.width,C.height)}else r.renderbufferStorage(36161,se,C.width,C.height);r.framebufferRenderbuffer(36160,36096,36161,I)}else if(C.depthBuffer&&C.stencilBuffer){const se=Ie(C);G&&Ee(C)===!1?r.renderbufferStorageMultisample(36161,se,35056,C.width,C.height):Ee(C)?d.renderbufferStorageMultisampleEXT(36161,se,35056,C.width,C.height):r.renderbufferStorage(36161,34041,C.width,C.height),r.framebufferRenderbuffer(36160,33306,36161,I)}else{const se=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let oe=0;oe<se.length;oe++){const fe=se[oe],L=s.convert(fe.format,fe.encoding),Z=s.convert(fe.type),V=T(fe.internalFormat,L,Z,fe.encoding),me=Ie(C);G&&Ee(C)===!1?r.renderbufferStorageMultisample(36161,me,V,C.width,C.height):Ee(C)?d.renderbufferStorageMultisampleEXT(36161,me,V,C.width,C.height):r.renderbufferStorage(36161,V,C.width,C.height)}}r.bindRenderbuffer(36161,null)}function ie(I,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,I),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),te(C.depthTexture,0);const se=n.get(C.depthTexture).__webglTexture,oe=Ie(C);if(C.depthTexture.format===ii)Ee(C)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,se,0,oe):r.framebufferTexture2D(36160,36096,3553,se,0);else if(C.depthTexture.format===Bi)Ee(C)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,se,0,oe):r.framebufferTexture2D(36160,33306,3553,se,0);else throw new Error("Unknown depthTexture format")}function q(I){const C=n.get(I),G=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!C.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");ie(C.__webglFramebuffer,I)}else if(G){C.__webglDepthbuffer=[];for(let se=0;se<6;se++)t.bindFramebuffer(36160,C.__webglFramebuffer[se]),C.__webglDepthbuffer[se]=r.createRenderbuffer(),be(C.__webglDepthbuffer[se],I,!1)}else t.bindFramebuffer(36160,C.__webglFramebuffer),C.__webglDepthbuffer=r.createRenderbuffer(),be(C.__webglDepthbuffer,I,!1);t.bindFramebuffer(36160,null)}function ne(I,C,G){const se=n.get(I);C!==void 0&&ce(se.__webglFramebuffer,I,I.texture,36064,3553),G!==void 0&&q(I)}function _e(I){const C=I.texture,G=n.get(I),se=n.get(C);I.addEventListener("dispose",z),I.isWebGLMultipleRenderTargets!==!0&&(se.__webglTexture===void 0&&(se.__webglTexture=r.createTexture()),se.__version=C.version,o.memory.textures++);const oe=I.isWebGLCubeRenderTarget===!0,fe=I.isWebGLMultipleRenderTargets===!0,L=y(I)||a;if(oe){G.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)G.__webglFramebuffer[Z]=r.createFramebuffer()}else{if(G.__webglFramebuffer=r.createFramebuffer(),fe)if(i.drawBuffers){const Z=I.texture;for(let V=0,me=Z.length;V<me;V++){const Me=n.get(Z[V]);Me.__webglTexture===void 0&&(Me.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&I.samples>0&&Ee(I)===!1){const Z=fe?C:[C];G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,G.__webglMultisampledFramebuffer);for(let V=0;V<Z.length;V++){const me=Z[V];G.__webglColorRenderbuffer[V]=r.createRenderbuffer(),r.bindRenderbuffer(36161,G.__webglColorRenderbuffer[V]);const Me=s.convert(me.format,me.encoding),Te=s.convert(me.type),xe=T(me.internalFormat,Me,Te,me.encoding,I.isXRRenderTarget===!0),Se=Ie(I);r.renderbufferStorageMultisample(36161,Se,xe,I.width,I.height),r.framebufferRenderbuffer(36160,36064+V,36161,G.__webglColorRenderbuffer[V])}r.bindRenderbuffer(36161,null),I.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),be(G.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(36160,null)}}if(oe){t.bindTexture(34067,se.__webglTexture),ue(34067,C,L);for(let Z=0;Z<6;Z++)ce(G.__webglFramebuffer[Z],I,C,36064,34069+Z);w(C,L)&&A(34067),t.unbindTexture()}else if(fe){const Z=I.texture;for(let V=0,me=Z.length;V<me;V++){const Me=Z[V],Te=n.get(Me);t.bindTexture(3553,Te.__webglTexture),ue(3553,Me,L),ce(G.__webglFramebuffer,I,Me,36064+V,3553),w(Me,L)&&A(3553)}t.unbindTexture()}else{let Z=3553;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(a?Z=I.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Z,se.__webglTexture),ue(Z,C,L),ce(G.__webglFramebuffer,I,C,36064,Z),w(C,L)&&A(Z),t.unbindTexture()}I.depthBuffer&&q(I)}function he(I){const C=y(I)||a,G=I.isWebGLMultipleRenderTargets===!0?I.texture:[I.texture];for(let se=0,oe=G.length;se<oe;se++){const fe=G[se];if(w(fe,C)){const L=I.isWebGLCubeRenderTarget?34067:3553,Z=n.get(fe).__webglTexture;t.bindTexture(L,Z),A(L),t.unbindTexture()}}}function Pe(I){if(a&&I.samples>0&&Ee(I)===!1){const C=I.isWebGLMultipleRenderTargets?I.texture:[I.texture],G=I.width,se=I.height;let oe=16384;const fe=[],L=I.stencilBuffer?33306:36096,Z=n.get(I),V=I.isWebGLMultipleRenderTargets===!0;if(V)for(let me=0;me<C.length;me++)t.bindFramebuffer(36160,Z.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+me,36161,null),t.bindFramebuffer(36160,Z.__webglFramebuffer),r.framebufferTexture2D(36009,36064+me,3553,null,0);t.bindFramebuffer(36008,Z.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,Z.__webglFramebuffer);for(let me=0;me<C.length;me++){fe.push(36064+me),I.depthBuffer&&fe.push(L);const Me=Z.__ignoreDepthValues!==void 0?Z.__ignoreDepthValues:!1;if(Me===!1&&(I.depthBuffer&&(oe|=256),I.stencilBuffer&&(oe|=1024)),V&&r.framebufferRenderbuffer(36008,36064,36161,Z.__webglColorRenderbuffer[me]),Me===!0&&(r.invalidateFramebuffer(36008,[L]),r.invalidateFramebuffer(36009,[L])),V){const Te=n.get(C[me]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,Te,0)}r.blitFramebuffer(0,0,G,se,0,0,G,se,oe,9728),f&&r.invalidateFramebuffer(36008,fe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),V)for(let me=0;me<C.length;me++){t.bindFramebuffer(36160,Z.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+me,36161,Z.__webglColorRenderbuffer[me]);const Me=n.get(C[me]).__webglTexture;t.bindFramebuffer(36160,Z.__webglFramebuffer),r.framebufferTexture2D(36009,36064+me,3553,Me,0)}t.bindFramebuffer(36009,Z.__webglMultisampledFramebuffer)}}function Ie(I){return Math.min(h,I.samples)}function Ee(I){const C=n.get(I);return a&&I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function ze(I){const C=o.render.frame;p.get(I)!==C&&(p.set(I,C),I.update())}function Xe(I,C){const G=I.encoding,se=I.format,oe=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||I.format===sa||G!==Mn&&(G===Qe?a===!1?e.has("EXT_sRGB")===!0&&se===qt?(I.format=sa,I.minFilter=st,I.generateMipmaps=!1):C=Ec.sRGBToLinear(C):(se!==qt||oe!==In)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",G)),C}this.allocateTextureUnit=j,this.resetTextureUnits=K,this.setTexture2D=te,this.setTexture2DArray=ye,this.setTexture3D=re,this.setTextureCube=B,this.rebindTextures=ne,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=q,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=Ee}function Sf(r,e,t){const n=t.isWebGL2;function i(s,o=null){let a;if(s===In)return 5121;if(s===jd)return 32819;if(s===Yd)return 32820;if(s===Vd)return 5120;if(s===Wd)return 5122;if(s===bc)return 5123;if(s===Gd)return 5124;if(s===ti)return 5125;if(s===dn)return 5126;if(s===Cn)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Xd)return 6406;if(s===qt)return 6408;if(s===qd)return 6409;if(s===Qd)return 6410;if(s===ii)return 6402;if(s===Bi)return 34041;if(s===sa)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Jd)return 6403;if(s===Zd)return 36244;if(s===$d)return 33319;if(s===Kd)return 33320;if(s===ef)return 36249;if(s===Ho||s===Vo||s===Wo||s===Go)if(o===Qe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ho)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Vo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Wo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Go)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ho)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Vo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Wo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Go)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===wl||s===Tl||s===El||s===Al)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===wl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Tl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===El)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Al)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===tf)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Cl||s===Pl)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Cl)return o===Qe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Pl)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Il||s===Dl||s===Ll||s===Rl||s===Nl||s===Ul||s===Ol||s===zl||s===Fl||s===kl||s===Bl||s===Hl||s===Vl||s===Wl)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Il)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Dl)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ll)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Rl)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Nl)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ul)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ol)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===zl)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Fl)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===kl)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Bl)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Hl)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Vl)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Wl)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===jo)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===jo)return o===Qe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===nf||s===Gl||s===jl||s===Yl)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===jo)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Gl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===jl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Yl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Oi?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class wf extends wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ri extends Oe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qy={type:"move"};class sl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ri,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ri,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ri,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const g=t.getJointPose(x,n),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.jointRadius=g.radius),m.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Qy)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ri;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Tf extends ct{constructor(e,t,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:ii,u!==ii&&u!==Bi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ii&&(n=ti),n===void 0&&u===Bi&&(n=Oi),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ut,this.minFilter=l!==void 0?l:ut,this.flipY=!1,this.generateMipmaps=!1}}class Jy extends Dn{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,p=null;const x=t.getContextAttributes();let g=null,m=null;const _=[],v=[],y=new Set,b=new Map,w=new wt;w.layers.enable(1),w.viewport=new Ze;const A=new wt;A.layers.enable(2),A.viewport=new Ze;const T=[w,A],M=new wf;M.layers.enable(1),M.layers.enable(2);let S=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let Q=_[B];return Q===void 0&&(Q=new sl,_[B]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(B){let Q=_[B];return Q===void 0&&(Q=new sl,_[B]=Q),Q.getGripSpace()},this.getHand=function(B){let Q=_[B];return Q===void 0&&(Q=new sl,_[B]=Q),Q.getHandSpace()};function z(B){const Q=v.indexOf(B.inputSource);if(Q===-1)return;const le=_[Q];le!==void 0&&le.dispatchEvent({type:B.type,data:B.inputSource})}function N(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",R);for(let B=0;B<_.length;B++){const Q=v[B];Q!==null&&(v[B]=null,_[B].disconnect(Q))}S=null,D=null,e.setRenderTarget(g),f=null,d=null,h=null,i=null,m=null,re.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(B){if(i=B,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",N),i.addEventListener("inputsourceschange",R),x.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Q={antialias:i.renderState.layers===void 0?x.antialias:!0,alpha:x.alpha,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,Q),i.updateRenderState({baseLayer:f}),m=new Rt(f.framebufferWidth,f.framebufferHeight,{format:qt,type:In,encoding:e.outputEncoding,stencilBuffer:x.stencil})}else{let Q=null,le=null,ue=null;x.depth&&(ue=x.stencil?35056:33190,Q=x.stencil?Bi:ii,le=x.stencil?Oi:ti);const H={colorFormat:32856,depthFormat:ue,scaleFactor:s};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(H),i.updateRenderState({layers:[d]}),m=new Rt(d.textureWidth,d.textureHeight,{format:qt,type:In,depthTexture:new Tf(d.textureWidth,d.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:x.stencil,encoding:e.outputEncoding,samples:x.antialias?4:0});const Le=e.properties.get(m);Le.__ignoreDepthValues=d.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),re.setContext(i),re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function R(B){for(let Q=0;Q<B.removed.length;Q++){const le=B.removed[Q],ue=v.indexOf(le);ue>=0&&(v[ue]=null,_[ue].disconnect(le))}for(let Q=0;Q<B.added.length;Q++){const le=B.added[Q];let ue=v.indexOf(le);if(ue===-1){for(let Le=0;Le<_.length;Le++)if(Le>=v.length){v.push(le),ue=Le;break}else if(v[Le]===null){v[Le]=le,ue=Le;break}if(ue===-1)break}const H=_[ue];H&&H.connect(le)}}const O=new E,$=new E;function K(B,Q,le){O.setFromMatrixPosition(Q.matrixWorld),$.setFromMatrixPosition(le.matrixWorld);const ue=O.distanceTo($),H=Q.projectionMatrix.elements,Le=le.projectionMatrix.elements,De=H[14]/(H[10]-1),ce=H[14]/(H[10]+1),be=(H[9]+1)/H[5],ie=(H[9]-1)/H[5],q=(H[8]-1)/H[0],ne=(Le[8]+1)/Le[0],_e=De*q,he=De*ne,Pe=ue/(-q+ne),Ie=Pe*-q;Q.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Ie),B.translateZ(Pe),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const Ee=De+Pe,ze=ce+Pe,Xe=_e-Ie,I=he+(ue-Ie),C=be*ce/ze*Ee,G=ie*ce/ze*Ee;B.projectionMatrix.makePerspective(Xe,I,C,G,Ee,ze),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function j(B,Q){Q===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(Q.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(i===null)return;M.near=A.near=w.near=B.near,M.far=A.far=w.far=B.far,(S!==M.near||D!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),S=M.near,D=M.far);const Q=B.parent,le=M.cameras;j(M,Q);for(let ue=0;ue<le.length;ue++)j(le[ue],Q);le.length===2?K(M,w,A):M.projectionMatrix.copy(w.projectionMatrix),ee(B,M,Q)};function ee(B,Q,le){le===null?B.matrix.copy(Q.matrixWorld):(B.matrix.copy(le.matrixWorld),B.matrix.invert(),B.matrix.multiply(Q.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0);const ue=B.children;for(let H=0,Le=ue.length;H<Le;H++)ue[H].updateMatrixWorld(!0);B.projectionMatrix.copy(Q.projectionMatrix),B.projectionMatrixInverse.copy(Q.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=As*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(B){l=B,d!==null&&(d.fixedFoveation=B),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=B)},this.getPlanes=function(){return y};let te=null;function ye(B,Q){if(u=Q.getViewerPose(c||o),p=Q,u!==null){const le=u.views;f!==null&&(e.setRenderTargetFramebuffer(m,f.framebuffer),e.setRenderTarget(m));let ue=!1;le.length!==M.cameras.length&&(M.cameras.length=0,ue=!0);for(let H=0;H<le.length;H++){const Le=le[H];let De=null;if(f!==null)De=f.getViewport(Le);else{const be=h.getViewSubImage(d,Le);De=be.viewport,H===0&&(e.setRenderTargetTextures(m,be.colorTexture,d.ignoreDepthValues?void 0:be.depthStencilTexture),e.setRenderTarget(m))}let ce=T[H];ce===void 0&&(ce=new wt,ce.layers.enable(H),ce.viewport=new Ze,T[H]=ce),ce.matrix.fromArray(Le.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(Le.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(De.x,De.y,De.width,De.height),H===0&&(M.matrix.copy(ce.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ue===!0&&M.cameras.push(ce)}}for(let le=0;le<_.length;le++){const ue=v[le],H=_[le];ue!==null&&H!==void 0&&H.update(ue,Q,c||o)}if(te&&te(B,Q),Q.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:Q.detectedPlanes});let le=null;for(const ue of y)Q.detectedPlanes.has(ue)||(le===null&&(le=[]),le.push(ue));if(le!==null)for(const ue of le)y.delete(ue),b.delete(ue),n.dispatchEvent({type:"planeremoved",data:ue});for(const ue of Q.detectedPlanes)if(!y.has(ue))y.add(ue),b.set(ue,Q.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ue});else{const H=b.get(ue);ue.lastChangedTime>H&&(b.set(ue,ue.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ue}))}}p=null}const re=new vf;re.setAnimationLoop(ye),this.setAnimationLoop=function(B){te=B},this.dispose=function(){}}}function Zy(r,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,mf(r)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,_,v,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(g,m):m.isMeshToonMaterial?(s(g,m),h(g,m)):m.isMeshPhongMaterial?(s(g,m),u(g,m)):m.isMeshStandardMaterial?(s(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,y)):m.isMeshMatcapMaterial?(s(g,m),p(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),x(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,_,v):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Et&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Et&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const _=e.get(m).envMap;if(_&&(g.envMap.value=_,g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap){g.lightMap.value=m.lightMap;const v=r.useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=m.lightMapIntensity*v,t(m.lightMap,g.lightMapTransform)}m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,_,v){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*_,g.scale.value=v*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),e.get(m).envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,_){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Et&&g.clearcoatNormalScale.value.negate())),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){const _=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function $y(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(35375):0;function l(_,v){const y=v.program;n.uniformBlockBinding(_,y)}function c(_,v){let y=i[_.id];y===void 0&&(p(_),y=u(_),i[_.id]=y,_.addEventListener("dispose",g));const b=v.program;n.updateUBOMapping(_,b);const w=e.render.frame;s[_.id]!==w&&(d(_),s[_.id]=w)}function u(_){const v=h();_.__bindingPointIndex=v;const y=r.createBuffer(),b=_.__size,w=_.usage;return r.bindBuffer(35345,y),r.bufferData(35345,b,w),r.bindBuffer(35345,null),r.bindBufferBase(35345,v,y),y}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const v=i[_.id],y=_.uniforms,b=_.__cache;r.bindBuffer(35345,v);for(let w=0,A=y.length;w<A;w++){const T=y[w];if(f(T,w,b)===!0){const M=T.__offset,S=Array.isArray(T.value)?T.value:[T.value];let D=0;for(let z=0;z<S.length;z++){const N=S[z],R=x(N);typeof N=="number"?(T.__data[0]=N,r.bufferSubData(35345,M+D,T.__data)):N.isMatrix3?(T.__data[0]=N.elements[0],T.__data[1]=N.elements[1],T.__data[2]=N.elements[2],T.__data[3]=N.elements[0],T.__data[4]=N.elements[3],T.__data[5]=N.elements[4],T.__data[6]=N.elements[5],T.__data[7]=N.elements[0],T.__data[8]=N.elements[6],T.__data[9]=N.elements[7],T.__data[10]=N.elements[8],T.__data[11]=N.elements[0]):(N.toArray(T.__data,D),D+=R.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,M,T.__data)}}r.bindBuffer(35345,null)}function f(_,v,y){const b=_.value;if(y[v]===void 0){if(typeof b=="number")y[v]=b;else{const w=Array.isArray(b)?b:[b],A=[];for(let T=0;T<w.length;T++)A.push(w[T].clone());y[v]=A}return!0}else if(typeof b=="number"){if(y[v]!==b)return y[v]=b,!0}else{const w=Array.isArray(y[v])?y[v]:[y[v]],A=Array.isArray(b)?b:[b];for(let T=0;T<w.length;T++){const M=w[T];if(M.equals(A[T])===!1)return M.copy(A[T]),!0}}return!1}function p(_){const v=_.uniforms;let y=0;const b=16;let w=0;for(let A=0,T=v.length;A<T;A++){const M=v[A],S={boundary:0,storage:0},D=Array.isArray(M.value)?M.value:[M.value];for(let z=0,N=D.length;z<N;z++){const R=D[z],O=x(R);S.boundary+=O.boundary,S.storage+=O.storage}if(M.__data=new Float32Array(S.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=y,A>0){w=y%b;const z=b-w;w!==0&&z-S.boundary<0&&(y+=b-w,M.__offset=y)}y+=S.storage}return w=y%b,w>0&&(y+=b-w),_.__size=y,_.__cache={},this}function x(_){const v={boundary:0,storage:0};return typeof _=="number"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function g(_){const v=_.target;v.removeEventListener("dispose",g);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function m(){for(const _ in i)r.deleteBuffer(i[_]);o=[],i={},s={}}return{bind:l,update:c,dispose:m}}function Ky(){const r=Mr("canvas");return r.style.display="block",r}class ya{constructor(e={}){const{canvas:t=Ky(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;let f=null,p=null;const x=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Mn,this.useLegacyLights=!0,this.toneMapping=fn,this.toneMappingExposure=1;const m=this;let _=!1,v=0,y=0,b=null,w=-1,A=null;const T=new Ze,M=new Ze;let S=null,D=t.width,z=t.height,N=1,R=null,O=null;const $=new Ze(0,0,D,z),K=new Ze(0,0,D,z);let j=!1;const ee=new Us;let te=!1,ye=!1,re=null;const B=new we,Q=new E,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ue(){return b===null?N:1}let H=n;function Le(P,k){for(let Y=0;Y<P.length;Y++){const F=P[Y],J=t.getContext(F,k);if(J!==null)return J}return null}try{const P={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${da}`),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",Ve,!1),H===null){const k=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&k.shift(),H=Le(k,P),H===null)throw Le(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let De,ce,be,ie,q,ne,_e,he,Pe,Ie,Ee,ze,Xe,I,C,G,se,oe,fe,L,Z,V,me,Me;function Te(){De=new mv(H),ce=new cv(H,De,e),De.init(ce),V=new Sf(H,De,ce),be=new Xy(H,De,ce),ie=new vv,q=new Uy,ne=new qy(H,De,be,q,ce,V,ie),_e=new uv(m),he=new pv(m),Pe=new Ig(H,ce),me=new av(H,De,Pe,ce),Ie=new gv(H,Pe,ie,me),Ee=new bv(H,Ie,Pe,ie),fe=new Mv(H,ce,ne),G=new hv(q),ze=new Ny(m,_e,he,De,ce,me,G),Xe=new Zy(m,q),I=new zy,C=new Wy(De,ce),oe=new ov(m,_e,he,be,Ee,d,l),se=new Yy(m,Ee,ce),Me=new $y(H,ie,ce,be),L=new lv(H,De,ie,ce),Z=new xv(H,De,ie,ce),ie.programs=ze.programs,m.capabilities=ce,m.extensions=De,m.properties=q,m.renderLists=I,m.shadowMap=se,m.state=be,m.info=ie}Te();const xe=new Jy(m,H);this.xr=xe,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const P=De.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=De.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(P){P!==void 0&&(N=P,this.setSize(D,z,!1))},this.getSize=function(P){return P.set(D,z)},this.setSize=function(P,k,Y=!0){if(xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=P,z=k,t.width=Math.floor(P*N),t.height=Math.floor(k*N),Y===!0&&(t.style.width=P+"px",t.style.height=k+"px"),this.setViewport(0,0,P,k)},this.getDrawingBufferSize=function(P){return P.set(D*N,z*N).floor()},this.setDrawingBufferSize=function(P,k,Y){D=P,z=k,N=Y,t.width=Math.floor(P*Y),t.height=Math.floor(k*Y),this.setViewport(0,0,P,k)},this.getCurrentViewport=function(P){return P.copy(T)},this.getViewport=function(P){return P.copy($)},this.setViewport=function(P,k,Y,F){P.isVector4?$.set(P.x,P.y,P.z,P.w):$.set(P,k,Y,F),be.viewport(T.copy($).multiplyScalar(N).floor())},this.getScissor=function(P){return P.copy(K)},this.setScissor=function(P,k,Y,F){P.isVector4?K.set(P.x,P.y,P.z,P.w):K.set(P,k,Y,F),be.scissor(M.copy(K).multiplyScalar(N).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(P){be.setScissorTest(j=P)},this.setOpaqueSort=function(P){R=P},this.setTransparentSort=function(P){O=P},this.getClearColor=function(P){return P.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor.apply(oe,arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha.apply(oe,arguments)},this.clear=function(P=!0,k=!0,Y=!0){let F=0;P&&(F|=16384),k&&(F|=256),Y&&(F|=1024),H.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",Ve,!1),I.dispose(),C.dispose(),q.dispose(),_e.dispose(),he.dispose(),Ee.dispose(),me.dispose(),Me.dispose(),ze.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",Ae),xe.removeEventListener("sessionend",ot),re&&(re.dispose(),re=null),at.stop()};function Se(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const P=ie.autoReset,k=se.enabled,Y=se.autoUpdate,F=se.needsUpdate,J=se.type;Te(),ie.autoReset=P,se.enabled=k,se.autoUpdate=Y,se.needsUpdate=F,se.type=J}function Ve(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function pt(P){const k=P.target;k.removeEventListener("dispose",pt),U(k)}function U(P){X(P),q.remove(P)}function X(P){const k=q.get(P).programs;k!==void 0&&(k.forEach(function(Y){ze.releaseProgram(Y)}),P.isShaderMaterial&&ze.releaseShaderCache(P))}this.renderBufferDirect=function(P,k,Y,F,J,Ce){k===null&&(k=le);const Re=J.isMesh&&J.matrixWorld.determinant()<0,Ue=Jp(P,k,Y,F,J);be.setMaterial(F,Re);let He=Y.index,Ge=1;F.wireframe===!0&&(He=Ie.getWireframeAttribute(Y),Ge=2);const je=Y.drawRange,Ye=Y.attributes.position;let it=je.start*Ge,Vt=(je.start+je.count)*Ge;Ce!==null&&(it=Math.max(it,Ce.start*Ge),Vt=Math.min(Vt,(Ce.start+Ce.count)*Ge)),He!==null?(it=Math.max(it,0),Vt=Math.min(Vt,He.count)):Ye!=null&&(it=Math.max(it,0),Vt=Math.min(Vt,Ye.count));const pn=Vt-it;if(pn<0||pn===1/0)return;me.setup(J,F,Ue,Y,He);let fi,vt=L;if(He!==null&&(fi=Pe.get(He),vt=Z,vt.setIndex(fi)),J.isMesh)F.wireframe===!0?(be.setLineWidth(F.wireframeLinewidth*ue()),vt.setMode(1)):vt.setMode(4);else if(J.isLine){let qe=F.linewidth;qe===void 0&&(qe=1),be.setLineWidth(qe*ue()),J.isLineSegments?vt.setMode(1):J.isLineLoop?vt.setMode(2):vt.setMode(3)}else J.isPoints?vt.setMode(0):J.isSprite&&vt.setMode(4);if(J.isInstancedMesh)vt.renderInstances(it,pn,J.count);else if(Y.isInstancedBufferGeometry){const qe=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Na=Math.min(Y.instanceCount,qe);vt.renderInstances(it,pn,Na)}else vt.render(it,pn)},this.compile=function(P,k){function Y(F,J,Ce){F.transparent===!0&&F.side===Zt&&F.forceSinglePass===!1?(F.side=Et,F.needsUpdate=!0,Zr(F,J,Ce),F.side=sn,F.needsUpdate=!0,Zr(F,J,Ce),F.side=Zt):Zr(F,J,Ce)}p=C.get(P),p.init(),g.push(p),P.traverseVisible(function(F){F.isLight&&F.layers.test(k.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights(m.useLegacyLights),P.traverse(function(F){const J=F.material;if(J)if(Array.isArray(J))for(let Ce=0;Ce<J.length;Ce++){const Re=J[Ce];Y(Re,P,F)}else Y(J,P,F)}),g.pop(),p=null};let ae=null;function ve(P){ae&&ae(P)}function Ae(){at.stop()}function ot(){at.start()}const at=new vf;at.setAnimationLoop(ve),typeof self<"u"&&at.setContext(self),this.setAnimationLoop=function(P){ae=P,xe.setAnimationLoop(P),P===null?at.stop():at.start()},xe.addEventListener("sessionstart",Ae),xe.addEventListener("sessionend",ot),this.render=function(P,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(k),k=xe.getCamera()),P.isScene===!0&&P.onBeforeRender(m,P,k,b),p=C.get(P,g.length),p.init(),g.push(p),B.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ee.setFromProjectionMatrix(B),ye=this.localClippingEnabled,te=G.init(this.clippingPlanes,ye),f=I.get(P,x.length),f.init(),x.push(f),Ut(P,k,0,m.sortObjects),f.finish(),m.sortObjects===!0&&f.sort(R,O),te===!0&&G.beginShadows();const Y=p.state.shadowsArray;if(se.render(Y,P,k),te===!0&&G.endShadows(),this.info.autoReset===!0&&this.info.reset(),oe.render(f,P),p.setupLights(m.useLegacyLights),k.isArrayCamera){const F=k.cameras;for(let J=0,Ce=F.length;J<Ce;J++){const Re=F[J];Qn(f,P,Re,Re.viewport)}}else Qn(f,P,k);b!==null&&(ne.updateMultisampleRenderTarget(b),ne.updateRenderTargetMipmap(b)),P.isScene===!0&&P.onAfterRender(m,P,k),me.resetDefaultState(),w=-1,A=null,g.pop(),g.length>0?p=g[g.length-1]:p=null,x.pop(),x.length>0?f=x[x.length-1]:f=null};function Ut(P,k,Y,F){if(P.visible===!1)return;if(P.layers.test(k.layers)){if(P.isGroup)Y=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(k);else if(P.isLight)p.pushLight(P),P.castShadow&&p.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||ee.intersectsSprite(P)){F&&Q.setFromMatrixPosition(P.matrixWorld).applyMatrix4(B);const Re=Ee.update(P),Ue=P.material;Ue.visible&&f.push(P,Re,Ue,Y,Q.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(P.isSkinnedMesh&&P.skeleton.frame!==ie.render.frame&&(P.skeleton.update(),P.skeleton.frame=ie.render.frame),!P.frustumCulled||ee.intersectsObject(P))){F&&Q.setFromMatrixPosition(P.matrixWorld).applyMatrix4(B);const Re=Ee.update(P),Ue=P.material;if(Array.isArray(Ue)){const He=Re.groups;for(let Ge=0,je=He.length;Ge<je;Ge++){const Ye=He[Ge],it=Ue[Ye.materialIndex];it&&it.visible&&f.push(P,Re,it,Y,Q.z,Ye)}}else Ue.visible&&f.push(P,Re,Ue,Y,Q.z,null)}}const Ce=P.children;for(let Re=0,Ue=Ce.length;Re<Ue;Re++)Ut(Ce[Re],k,Y,F)}function Qn(P,k,Y,F){const J=P.opaque,Ce=P.transmissive,Re=P.transparent;p.setupLightsView(Y),te===!0&&G.setGlobalState(m.clippingPlanes,Y),Ce.length>0&&mt(J,Ce,k,Y),F&&be.viewport(T.copy(F)),J.length>0&&ln(J,k,Y),Ce.length>0&&ln(Ce,k,Y),Re.length>0&&ln(Re,k,Y),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function mt(P,k,Y,F){if(re===null){const Ue=ce.isWebGL2;re=new Rt(1024,1024,{generateMipmaps:!0,type:De.has("EXT_color_buffer_half_float")?Cn:In,minFilter:ai,samples:Ue&&a===!0?4:0})}const J=m.getRenderTarget();m.setRenderTarget(re),m.clear();const Ce=m.toneMapping;m.toneMapping=fn,ln(P,Y,F),ne.updateMultisampleRenderTarget(re),ne.updateRenderTargetMipmap(re);let Re=!1;for(let Ue=0,He=k.length;Ue<He;Ue++){const Ge=k[Ue],je=Ge.object,Ye=Ge.geometry,it=Ge.material,Vt=Ge.group;if(it.side===Zt&&je.layers.test(F.layers)){const pn=it.side;it.side=Et,it.needsUpdate=!0,Tn(je,Y,F,Ye,it,Vt),it.side=pn,it.needsUpdate=!0,Re=!0}}Re===!0&&(ne.updateMultisampleRenderTarget(re),ne.updateRenderTargetMipmap(re)),m.setRenderTarget(J),m.toneMapping=Ce}function ln(P,k,Y){const F=k.isScene===!0?k.overrideMaterial:null;for(let J=0,Ce=P.length;J<Ce;J++){const Re=P[J],Ue=Re.object,He=Re.geometry,Ge=F===null?Re.material:F,je=Re.group;Ue.layers.test(Y.layers)&&Tn(Ue,k,Y,He,Ge,je)}}function Tn(P,k,Y,F,J,Ce){P.onBeforeRender(m,k,Y,F,J,Ce),P.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),J.onBeforeRender(m,k,Y,F,P,Ce),J.transparent===!0&&J.side===Zt&&J.forceSinglePass===!1?(J.side=Et,J.needsUpdate=!0,m.renderBufferDirect(Y,k,F,J,P,Ce),J.side=sn,J.needsUpdate=!0,m.renderBufferDirect(Y,k,F,J,P,Ce),J.side=Zt):m.renderBufferDirect(Y,k,F,J,P,Ce),P.onAfterRender(m,k,Y,F,J,Ce)}function Zr(P,k,Y){k.isScene!==!0&&(k=le);const F=q.get(P),J=p.state.lights,Ce=p.state.shadowsArray,Re=J.state.version,Ue=ze.getParameters(P,J.state,Ce,k,Y),He=ze.getProgramCacheKey(Ue);let Ge=F.programs;F.environment=P.isMeshStandardMaterial?k.environment:null,F.fog=k.fog,F.envMap=(P.isMeshStandardMaterial?he:_e).get(P.envMap||F.environment),Ge===void 0&&(P.addEventListener("dispose",pt),Ge=new Map,F.programs=Ge);let je=Ge.get(He);if(je!==void 0){if(F.currentProgram===je&&F.lightsStateVersion===Re)return dh(P,Ue),je}else Ue.uniforms=ze.getUniforms(P),P.onBuild(Y,Ue,m),P.onBeforeCompile(Ue,m),je=ze.acquireProgram(Ue,He),Ge.set(He,je),F.uniforms=Ue.uniforms;const Ye=F.uniforms;(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ye.clippingPlanes=G.uniform),dh(P,Ue),F.needsLights=$p(P),F.lightsStateVersion=Re,F.needsLights&&(Ye.ambientLightColor.value=J.state.ambient,Ye.lightProbe.value=J.state.probe,Ye.directionalLights.value=J.state.directional,Ye.directionalLightShadows.value=J.state.directionalShadow,Ye.spotLights.value=J.state.spot,Ye.spotLightShadows.value=J.state.spotShadow,Ye.rectAreaLights.value=J.state.rectArea,Ye.ltc_1.value=J.state.rectAreaLTC1,Ye.ltc_2.value=J.state.rectAreaLTC2,Ye.pointLights.value=J.state.point,Ye.pointLightShadows.value=J.state.pointShadow,Ye.hemisphereLights.value=J.state.hemi,Ye.directionalShadowMap.value=J.state.directionalShadowMap,Ye.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ye.spotShadowMap.value=J.state.spotShadowMap,Ye.spotLightMatrix.value=J.state.spotLightMatrix,Ye.spotLightMap.value=J.state.spotLightMap,Ye.pointShadowMap.value=J.state.pointShadowMap,Ye.pointShadowMatrix.value=J.state.pointShadowMatrix);const it=je.getUniforms(),Vt=qo.seqWithValue(it.seq,Ye);return F.currentProgram=je,F.uniformsList=Vt,je}function dh(P,k){const Y=q.get(P);Y.outputEncoding=k.outputEncoding,Y.instancing=k.instancing,Y.skinning=k.skinning,Y.morphTargets=k.morphTargets,Y.morphNormals=k.morphNormals,Y.morphColors=k.morphColors,Y.morphTargetsCount=k.morphTargetsCount,Y.numClippingPlanes=k.numClippingPlanes,Y.numIntersection=k.numClipIntersection,Y.vertexAlphas=k.vertexAlphas,Y.vertexTangents=k.vertexTangents,Y.toneMapping=k.toneMapping}function Jp(P,k,Y,F,J){k.isScene!==!0&&(k=le),ne.resetTextureUnits();const Ce=k.fog,Re=F.isMeshStandardMaterial?k.environment:null,Ue=b===null?m.outputEncoding:b.isXRRenderTarget===!0?b.texture.encoding:Mn,He=(F.isMeshStandardMaterial?he:_e).get(F.envMap||Re),Ge=F.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,je=!!F.normalMap&&!!Y.attributes.tangent,Ye=!!Y.morphAttributes.position,it=!!Y.morphAttributes.normal,Vt=!!Y.morphAttributes.color,pn=F.toneMapped?m.toneMapping:fn,fi=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,vt=fi!==void 0?fi.length:0,qe=q.get(F),Na=p.state.lights;if(te===!0&&(ye===!0||P!==A)){const $t=P===A&&F.id===w;G.setState(F,P,$t)}let Pt=!1;F.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Na.state.version||qe.outputEncoding!==Ue||J.isInstancedMesh&&qe.instancing===!1||!J.isInstancedMesh&&qe.instancing===!0||J.isSkinnedMesh&&qe.skinning===!1||!J.isSkinnedMesh&&qe.skinning===!0||qe.envMap!==He||F.fog===!0&&qe.fog!==Ce||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==G.numPlanes||qe.numIntersection!==G.numIntersection)||qe.vertexAlphas!==Ge||qe.vertexTangents!==je||qe.morphTargets!==Ye||qe.morphNormals!==it||qe.morphColors!==Vt||qe.toneMapping!==pn||ce.isWebGL2===!0&&qe.morphTargetsCount!==vt)&&(Pt=!0):(Pt=!0,qe.__version=F.version);let pi=qe.currentProgram;Pt===!0&&(pi=Zr(F,k,J));let fh=!1,Ys=!1,Ua=!1;const Wt=pi.getUniforms(),mi=qe.uniforms;if(be.useProgram(pi.program)&&(fh=!0,Ys=!0,Ua=!0),F.id!==w&&(w=F.id,Ys=!0),fh||A!==P){if(Wt.setValue(H,"projectionMatrix",P.projectionMatrix),ce.logarithmicDepthBuffer&&Wt.setValue(H,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),A!==P&&(A=P,Ys=!0,Ua=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){const $t=Wt.map.cameraPosition;$t!==void 0&&$t.setValue(H,Q.setFromMatrixPosition(P.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&Wt.setValue(H,"isOrthographic",P.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||J.isSkinnedMesh)&&Wt.setValue(H,"viewMatrix",P.matrixWorldInverse)}if(J.isSkinnedMesh){Wt.setOptional(H,J,"bindMatrix"),Wt.setOptional(H,J,"bindMatrixInverse");const $t=J.skeleton;$t&&(ce.floatVertexTextures?($t.boneTexture===null&&$t.computeBoneTexture(),Wt.setValue(H,"boneTexture",$t.boneTexture,ne),Wt.setValue(H,"boneTextureSize",$t.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Oa=Y.morphAttributes;if((Oa.position!==void 0||Oa.normal!==void 0||Oa.color!==void 0&&ce.isWebGL2===!0)&&fe.update(J,Y,pi),(Ys||qe.receiveShadow!==J.receiveShadow)&&(qe.receiveShadow=J.receiveShadow,Wt.setValue(H,"receiveShadow",J.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(mi.envMap.value=He,mi.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),Ys&&(Wt.setValue(H,"toneMappingExposure",m.toneMappingExposure),qe.needsLights&&Zp(mi,Ua),Ce&&F.fog===!0&&Xe.refreshFogUniforms(mi,Ce),Xe.refreshMaterialUniforms(mi,F,N,z,re),qo.upload(H,qe.uniformsList,mi,ne)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(qo.upload(H,qe.uniformsList,mi,ne),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&Wt.setValue(H,"center",J.center),Wt.setValue(H,"modelViewMatrix",J.modelViewMatrix),Wt.setValue(H,"normalMatrix",J.normalMatrix),Wt.setValue(H,"modelMatrix",J.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const $t=F.uniformsGroups;for(let za=0,Kp=$t.length;za<Kp;za++)if(ce.isWebGL2){const ph=$t[za];Me.update(ph,pi),Me.bind(ph,pi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return pi}function Zp(P,k){P.ambientLightColor.needsUpdate=k,P.lightProbe.needsUpdate=k,P.directionalLights.needsUpdate=k,P.directionalLightShadows.needsUpdate=k,P.pointLights.needsUpdate=k,P.pointLightShadows.needsUpdate=k,P.spotLights.needsUpdate=k,P.spotLightShadows.needsUpdate=k,P.rectAreaLights.needsUpdate=k,P.hemisphereLights.needsUpdate=k}function $p(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(P,k,Y){q.get(P.texture).__webglTexture=k,q.get(P.depthTexture).__webglTexture=Y;const F=q.get(P);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=Y===void 0,F.__autoAllocateDepthBuffer||De.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,k){const Y=q.get(P);Y.__webglFramebuffer=k,Y.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(P,k=0,Y=0){b=P,v=k,y=Y;let F=!0,J=null,Ce=!1,Re=!1;if(P){const He=q.get(P);He.__useDefaultFramebuffer!==void 0?(be.bindFramebuffer(36160,null),F=!1):He.__webglFramebuffer===void 0?ne.setupRenderTarget(P):He.__hasExternalTextures&&ne.rebindTextures(P,q.get(P.texture).__webglTexture,q.get(P.depthTexture).__webglTexture);const Ge=P.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Re=!0);const je=q.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(J=je[k],Ce=!0):ce.isWebGL2&&P.samples>0&&ne.useMultisampledRTT(P)===!1?J=q.get(P).__webglMultisampledFramebuffer:J=je,T.copy(P.viewport),M.copy(P.scissor),S=P.scissorTest}else T.copy($).multiplyScalar(N).floor(),M.copy(K).multiplyScalar(N).floor(),S=j;if(be.bindFramebuffer(36160,J)&&ce.drawBuffers&&F&&be.drawBuffers(P,J),be.viewport(T),be.scissor(M),be.setScissorTest(S),Ce){const He=q.get(P.texture);H.framebufferTexture2D(36160,36064,34069+k,He.__webglTexture,Y)}else if(Re){const He=q.get(P.texture),Ge=k||0;H.framebufferTextureLayer(36160,36064,He.__webglTexture,Y||0,Ge)}w=-1},this.readRenderTargetPixels=function(P,k,Y,F,J,Ce,Re){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=q.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Re!==void 0&&(Ue=Ue[Re]),Ue){be.bindFramebuffer(36160,Ue);try{const He=P.texture,Ge=He.format,je=He.type;if(Ge!==qt&&V.convert(Ge)!==H.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ye=je===Cn&&(De.has("EXT_color_buffer_half_float")||ce.isWebGL2&&De.has("EXT_color_buffer_float"));if(je!==In&&V.convert(je)!==H.getParameter(35738)&&!(je===dn&&(ce.isWebGL2||De.has("OES_texture_float")||De.has("WEBGL_color_buffer_float")))&&!Ye){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=P.width-F&&Y>=0&&Y<=P.height-J&&H.readPixels(k,Y,F,J,V.convert(Ge),V.convert(je),Ce)}finally{const He=b!==null?q.get(b).__webglFramebuffer:null;be.bindFramebuffer(36160,He)}}},this.copyFramebufferToTexture=function(P,k,Y=0){const F=Math.pow(2,-Y),J=Math.floor(k.image.width*F),Ce=Math.floor(k.image.height*F);ne.setTexture2D(k,0),H.copyTexSubImage2D(3553,Y,0,0,P.x,P.y,J,Ce),be.unbindTexture()},this.copyTextureToTexture=function(P,k,Y,F=0){const J=k.image.width,Ce=k.image.height,Re=V.convert(Y.format),Ue=V.convert(Y.type);ne.setTexture2D(Y,0),H.pixelStorei(37440,Y.flipY),H.pixelStorei(37441,Y.premultiplyAlpha),H.pixelStorei(3317,Y.unpackAlignment),k.isDataTexture?H.texSubImage2D(3553,F,P.x,P.y,J,Ce,Re,Ue,k.image.data):k.isCompressedTexture?H.compressedTexSubImage2D(3553,F,P.x,P.y,k.mipmaps[0].width,k.mipmaps[0].height,Re,k.mipmaps[0].data):H.texSubImage2D(3553,F,P.x,P.y,Re,Ue,k.image),F===0&&Y.generateMipmaps&&H.generateMipmap(3553),be.unbindTexture()},this.copyTextureToTexture3D=function(P,k,Y,F,J=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ce=P.max.x-P.min.x+1,Re=P.max.y-P.min.y+1,Ue=P.max.z-P.min.z+1,He=V.convert(F.format),Ge=V.convert(F.type);let je;if(F.isData3DTexture)ne.setTexture3D(F,0),je=32879;else if(F.isDataArrayTexture)ne.setTexture2DArray(F,0),je=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(37440,F.flipY),H.pixelStorei(37441,F.premultiplyAlpha),H.pixelStorei(3317,F.unpackAlignment);const Ye=H.getParameter(3314),it=H.getParameter(32878),Vt=H.getParameter(3316),pn=H.getParameter(3315),fi=H.getParameter(32877),vt=Y.isCompressedTexture?Y.mipmaps[0]:Y.image;H.pixelStorei(3314,vt.width),H.pixelStorei(32878,vt.height),H.pixelStorei(3316,P.min.x),H.pixelStorei(3315,P.min.y),H.pixelStorei(32877,P.min.z),Y.isDataTexture||Y.isData3DTexture?H.texSubImage3D(je,J,k.x,k.y,k.z,Ce,Re,Ue,He,Ge,vt.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(je,J,k.x,k.y,k.z,Ce,Re,Ue,He,vt.data)):H.texSubImage3D(je,J,k.x,k.y,k.z,Ce,Re,Ue,He,Ge,vt),H.pixelStorei(3314,Ye),H.pixelStorei(32878,it),H.pixelStorei(3316,Vt),H.pixelStorei(3315,pn),H.pixelStorei(32877,fi),J===0&&F.generateMipmaps&&H.generateMipmap(je),be.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?ne.setTextureCube(P,0):P.isData3DTexture?ne.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?ne.setTexture2DArray(P,0):ne.setTexture2D(P,0),be.unbindTexture()},this.resetState=function(){v=0,y=0,b=null,be.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}}class Ef extends ya{}Ef.prototype.isWebGL1Renderer=!0;class _a{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new pe(e),this.density=t}clone(){return new _a(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}class Ma{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new pe(e),this.near=t,this.far=n}clone(){return new Ma(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class si extends Oe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class ba{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=_r,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=nn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Gt=new E;class Hi{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}setX(e,t){return this.normalized&&(t=Be(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Be(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Be(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Be(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=tn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=tn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=tn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=tn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Be(t,this.array),n=Be(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Be(t,this.array),n=Be(n,this.array),i=Be(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Be(t,this.array),n=Be(n,this.array),i=Be(i,this.array),s=Be(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new rt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Hi(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Rc extends Ht{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let hs;const Zs=new E,us=new E,ds=new E,fs=new W,$s=new W,Af=new we,yo=new E,Ks=new E,_o=new E,$h=new W,rl=new W,Kh=new W;class Cf extends Oe{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",hs===void 0){hs=new Fe;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ba(t,5);hs.setIndex([0,1,2,0,2,3]),hs.setAttribute("position",new Hi(n,3,0,!1)),hs.setAttribute("uv",new Hi(n,2,3,!1))}this.geometry=hs,this.material=e!==void 0?e:new Rc,this.center=new W(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),us.setFromMatrixScale(this.matrixWorld),Af.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ds.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&us.multiplyScalar(-ds.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;Mo(yo.set(-.5,-.5,0),ds,o,us,i,s),Mo(Ks.set(.5,-.5,0),ds,o,us,i,s),Mo(_o.set(.5,.5,0),ds,o,us,i,s),$h.set(0,0),rl.set(1,0),Kh.set(1,1);let a=e.ray.intersectTriangle(yo,Ks,_o,!1,Zs);if(a===null&&(Mo(Ks.set(-.5,.5,0),ds,o,us,i,s),rl.set(0,1),a=e.ray.intersectTriangle(yo,_o,Ks,!1,Zs),a===null))return;const l=e.ray.origin.distanceTo(Zs);l<e.near||l>e.far||t.push({distance:l,point:Zs.clone(),uv:Dt.getInterpolation(Zs,yo,Ks,_o,$h,rl,Kh,new W),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Mo(r,e,t,n,i,s){fs.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?($s.x=s*fs.x-i*fs.y,$s.y=i*fs.x+s*fs.y):$s.copy(fs),r.copy(e),r.x+=$s.x,r.y+=$s.y,r.applyMatrix4(Af)}const bo=new E,eu=new E;class Pf extends Oe{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const s=t[n];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const i=this.levels;let s;for(s=0;s<i.length&&!(t<i[s].distance);s++);return i.splice(s,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let s=t[n].distance;if(t[n].object.visible&&(s-=s*t[n].hysteresis),e<s)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){bo.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(bo);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){bo.setFromMatrixPosition(e.matrixWorld),eu.setFromMatrixPosition(this.matrixWorld);const n=bo.distanceTo(eu)/e.zoom;t[0].object.visible=!0;let i,s;for(i=1,s=t.length;i<s;i++){let o=t[i].distance;if(t[i].object.visible&&(o-=o*t[i].hysteresis),n>=o)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<s;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,s=n.length;i<s;i++){const o=n[i];t.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return t}}const tu=new E,nu=new Ze,iu=new Ze,e_=new E,su=new we,ps=new E;class If extends $e{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new we,this.bindMatrixInverse=new we,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new on),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)ps.fromBufferAttribute(t,n),this.applyBoneTransform(n,ps),this.boundingBox.expandByPoint(ps)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ln),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)ps.fromBufferAttribute(t,n),this.applyBoneTransform(n,ps),this.boundingSphere.expandByPoint(ps)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ze,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;nu.fromBufferAttribute(i.attributes.skinIndex,e),iu.fromBufferAttribute(i.attributes.skinWeight,e),tu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=iu.getComponent(s);if(o!==0){const a=nu.getComponent(s);su.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(e_.copy(tu).applyMatrix4(su),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class Nc extends Oe{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ws extends ct{constructor(e=null,t=1,n=1,i,s,o,a,l,c=ut,u=ut,h,d){super(null,o,a,l,c,u,i,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ru=new we,t_=new we;class Sa{constructor(e=[],t=[]){this.uuid=nn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new we)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new we;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:t_;ru.multiplyMatrices(a,t[s]),ru.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Sa(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=uf(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new ws(t,e,e,qt,dn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Nc),this.bones.push(o),this.boneInverses.push(new we().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Ps extends rt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ms=new we,ou=new we,So=[],au=new on,n_=new we,er=new $e,tr=new Ln;class Df extends $e{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ps(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,n_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new on),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ms),au.copy(e.boundingBox).applyMatrix4(ms),this.boundingBox.union(au)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ln),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ms),tr.copy(e.boundingSphere).applyMatrix4(ms),this.boundingSphere.union(tr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(er.geometry=this.geometry,er.material=this.material,er.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),tr.copy(this.boundingSphere),tr.applyMatrix4(n),e.ray.intersectsSphere(tr)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,ms),ou.multiplyMatrices(n,ms),er.matrixWorld=ou,er.raycast(e,So);for(let o=0,a=So.length;o<a;o++){const l=So[o];l.instanceId=s,l.object=this,t.push(l)}So.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ps(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Qt extends Ht{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const lu=new E,cu=new E,hu=new we,ol=new Ns,wo=new Ln;class li extends Oe{constructor(e=new Fe,t=new Qt){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)lu.fromBufferAttribute(t,i-1),cu.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=lu.distanceTo(cu);e.setAttribute("lineDistance",new ge(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wo.copy(n.boundingSphere),wo.applyMatrix4(i),wo.radius+=s,e.ray.intersectsSphere(wo)===!1)return;hu.copy(i).invert(),ol.copy(e.ray).applyMatrix4(hu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new E,u=new E,h=new E,d=new E,f=this.isLineSegments?2:1,p=n.index,g=n.attributes.position;if(p!==null){const m=Math.max(0,o.start),_=Math.min(p.count,o.start+o.count);for(let v=m,y=_-1;v<y;v+=f){const b=p.getX(v),w=p.getX(v+1);if(c.fromBufferAttribute(g,b),u.fromBufferAttribute(g,w),ol.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(d);T<e.near||T>e.far||t.push({distance:T,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,o.start),_=Math.min(g.count,o.start+o.count);for(let v=m,y=_-1;v<y;v+=f){if(c.fromBufferAttribute(g,v),u.fromBufferAttribute(g,v+1),ol.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(d);w<e.near||w>e.far||t.push({distance:w,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const uu=new E,du=new E;class Nn extends li{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)uu.fromBufferAttribute(t,i),du.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+uu.distanceTo(du);e.setAttribute("lineDistance",new ge(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Lf extends li{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Uc extends Ht{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const fu=new we,$l=new Ns,To=new Ln,Eo=new E;class Rf extends Oe{constructor(e=new Fe,t=new Uc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),To.copy(n.boundingSphere),To.applyMatrix4(i),To.radius+=s,e.ray.intersectsSphere(To)===!1)return;fu.copy(i).invert(),$l.copy(e.ray).applyMatrix4(fu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=d,x=f;p<x;p++){const g=c.getX(p);Eo.fromBufferAttribute(h,g),pu(Eo,g,l,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let p=d,x=f;p<x;p++)Eo.fromBufferAttribute(h,p),pu(Eo,p,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function pu(r,e,t,n,i,s,o){const a=$l.distanceSqToPoint(r);if(a<t){const l=new E;$l.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class i_ extends ct{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:st,this.magFilter=s!==void 0?s:st,this.generateMipmaps=!1;const u=this;function h(){u.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class s_ extends ct{constructor(e,t,n){super({width:e,height:t}),this.isFramebufferTexture=!0,this.format=n,this.magFilter=ut,this.minFilter=ut,this.generateMipmaps=!1,this.needsUpdate=!0}}class Oc extends ct{constructor(e,t,n,i,s,o,a,l,c,u,h,d){super(null,o,a,l,c,u,i,s,h,d),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class r_ extends Oc{constructor(e,t,n,i,s,o){super(e,t,n,s,o),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=Mt}}class o_ extends ct{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Sn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const u=n[i],d=n[i+1]-u,f=(o-u)/d;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=t||(o.isVector2?new W:new E);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new E,i=[],s=[],o=[],a=new E,l=new we;for(let f=0;f<=e;f++){const p=f/e;i[f]=this.getTangentAt(p,new E)}s[0]=new E,o[0]=new E;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(ft(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(ft(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let p=1;p<=e;p++)s[p].applyMatrix4(l.makeRotationAxis(i[p],f*p)),o[p].crossVectors(i[p],s[p])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class wa extends Sn{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const n=t||new W,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Nf extends wa{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function zc(){let r=0,e=0,t=0,n=0;function i(s,o,a,l){r=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let d=(o-s)/c-(a-s)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,i(o,a,d,f)},calc:function(s){const o=s*s,a=o*s;return r+e*s+t*o+n*a}}}const Ao=new E,al=new zc,ll=new zc,cl=new zc;class Uf extends Sn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new E){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%s]:(Ao.subVectors(i[0],i[1]).add(i[0]),c=Ao);const h=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:(Ao.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=Ao),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(h),f),x=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),al.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,p,x,g),ll.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,p,x,g),cl.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,p,x,g)}else this.curveType==="catmullrom"&&(al.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),ll.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),cl.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(al.calc(l),ll.calc(l),cl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new E().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function mu(r,e,t,n,i){const s=(n-e)*.5,o=(i-t)*.5,a=r*r,l=r*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*r+t}function a_(r,e){const t=1-r;return t*t*e}function l_(r,e){return 2*(1-r)*r*e}function c_(r,e){return r*r*e}function ur(r,e,t,n){return a_(r,e)+l_(r,t)+c_(r,n)}function h_(r,e){const t=1-r;return t*t*t*e}function u_(r,e){const t=1-r;return 3*t*t*r*e}function d_(r,e){return 3*(1-r)*r*r*e}function f_(r,e){return r*r*r*e}function dr(r,e,t,n,i){return h_(r,e)+u_(r,t)+d_(r,n)+f_(r,i)}class Fc extends Sn{constructor(e=new W,t=new W,n=new W,i=new W){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new W){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(dr(e,i.x,s.x,o.x,a.x),dr(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Of extends Sn{constructor(e=new E,t=new E,n=new E,i=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new E){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(dr(e,i.x,s.x,o.x,a.x),dr(e,i.y,s.y,o.y,a.y),dr(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ta extends Sn{constructor(e=new W,t=new W){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new W){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new W){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zf extends Sn{constructor(e=new E,t=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new E){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new E){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class kc extends Sn{constructor(e=new W,t=new W,n=new W){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new W){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(ur(e,i.x,s.x,o.x),ur(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bc extends Sn{constructor(e=new E,t=new E,n=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new E){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(ur(e,i.x,s.x,o.x),ur(e,i.y,s.y,o.y),ur(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Hc extends Sn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new W){const n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(mu(a,l.x,c.x,u.x,h.x),mu(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new W().fromArray(i))}return this}}var Vc=Object.freeze({__proto__:null,ArcCurve:Nf,CatmullRomCurve3:Uf,CubicBezierCurve:Fc,CubicBezierCurve3:Of,EllipseCurve:wa,LineCurve:Ta,LineCurve3:zf,QuadraticBezierCurve:kc,QuadraticBezierCurve3:Bc,SplineCurve:Hc});class Ff extends Sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Ta(t,e))}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Vc[i.type]().fromJSON(i))}return this}}class Sr extends Ff{constructor(e){super(),this.type="Path",this.currentPoint=new W,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Ta(this.currentPoint.clone(),new W(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new kc(this.currentPoint.clone(),new W(e,t),new W(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){const a=new Fc(this.currentPoint.clone(),new W(e,t),new W(n,i),new W(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Hc(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,s,o,a,l),this}absellipse(e,t,n,i,s,o,a,l){const c=new wa(e,t,n,i,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Fs extends Fe{constructor(e=[new W(0,-.5),new W(.5,0),new W(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=ft(i,0,Math.PI*2);const s=[],o=[],a=[],l=[],c=[],u=1/t,h=new E,d=new W,f=new E,p=new E,x=new E;let g=0,m=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:g=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,f.x=m*1,f.y=-g,f.z=m*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:g=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(p)}for(let _=0;_<=t;_++){const v=n+_*u*i,y=Math.sin(v),b=Math.cos(v);for(let w=0;w<=e.length-1;w++){h.x=e[w].x*y,h.y=e[w].y,h.z=e[w].x*b,o.push(h.x,h.y,h.z),d.x=_/t,d.y=w/(e.length-1),a.push(d.x,d.y);const A=l[3*w+0]*y,T=l[3*w+1],M=l[3*w+0]*b;c.push(A,T,M)}}for(let _=0;_<t;_++)for(let v=0;v<e.length-1;v++){const y=v+_*e.length,b=y,w=y+e.length,A=y+e.length+1,T=y+1;s.push(b,w,T),s.push(A,T,w)}this.setIndex(s),this.setAttribute("position",new ge(o,3)),this.setAttribute("uv",new ge(a,2)),this.setAttribute("normal",new ge(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fs(e.points,e.segments,e.phiStart,e.phiLength)}}class Ur extends Fs{constructor(e=1,t=1,n=4,i=8){const s=new Sr;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new Ur(e.radius,e.length,e.capSegments,e.radialSegments)}}class Or extends Fe{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new E,u=new W;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const f=n+h/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new ge(o,3)),this.setAttribute("normal",new ge(a,3)),this.setAttribute("uv",new ge(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Or(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ji extends Fe{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],h=[],d=[],f=[];let p=0;const x=[],g=n/2;let m=0;_(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new ge(h,3)),this.setAttribute("normal",new ge(d,3)),this.setAttribute("uv",new ge(f,2));function _(){const y=new E,b=new E;let w=0;const A=(t-e)/n;for(let T=0;T<=s;T++){const M=[],S=T/s,D=S*(t-e)+e;for(let z=0;z<=i;z++){const N=z/i,R=N*l+a,O=Math.sin(R),$=Math.cos(R);b.x=D*O,b.y=-S*n+g,b.z=D*$,h.push(b.x,b.y,b.z),y.set(O,A,$).normalize(),d.push(y.x,y.y,y.z),f.push(N,1-S),M.push(p++)}x.push(M)}for(let T=0;T<i;T++)for(let M=0;M<s;M++){const S=x[M][T],D=x[M+1][T],z=x[M+1][T+1],N=x[M][T+1];u.push(S,D,N),u.push(D,z,N),w+=6}c.addGroup(m,w,0),m+=w}function v(y){const b=p,w=new W,A=new E;let T=0;const M=y===!0?e:t,S=y===!0?1:-1;for(let z=1;z<=i;z++)h.push(0,g*S,0),d.push(0,S,0),f.push(.5,.5),p++;const D=p;for(let z=0;z<=i;z++){const R=z/i*l+a,O=Math.cos(R),$=Math.sin(R);A.x=M*$,A.y=g*S,A.z=M*O,h.push(A.x,A.y,A.z),d.push(0,S,0),w.x=O*.5+.5,w.y=$*.5*S+.5,f.push(w.x,w.y),p++}for(let z=0;z<i;z++){const N=b+z,R=D+z;y===!0?u.push(R,R+1,N):u.push(R+1,R,N),T+=3}c.addGroup(m,T,y===!0?1:2),m+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ji(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class zr extends ji{constructor(e=1,t=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new zr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class qn extends Fe{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],o=[];a(i),c(n),u(),this.setAttribute("position",new ge(s,3)),this.setAttribute("normal",new ge(s.slice(),3)),this.setAttribute("uv",new ge(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const v=new E,y=new E,b=new E;for(let w=0;w<t.length;w+=3)f(t[w+0],v),f(t[w+1],y),f(t[w+2],b),l(v,y,b,_)}function l(_,v,y,b){const w=b+1,A=[];for(let T=0;T<=w;T++){A[T]=[];const M=_.clone().lerp(y,T/w),S=v.clone().lerp(y,T/w),D=w-T;for(let z=0;z<=D;z++)z===0&&T===w?A[T][z]=M:A[T][z]=M.clone().lerp(S,z/D)}for(let T=0;T<w;T++)for(let M=0;M<2*(w-T)-1;M++){const S=Math.floor(M/2);M%2===0?(d(A[T][S+1]),d(A[T+1][S]),d(A[T][S])):(d(A[T][S+1]),d(A[T+1][S+1]),d(A[T+1][S]))}}function c(_){const v=new E;for(let y=0;y<s.length;y+=3)v.x=s[y+0],v.y=s[y+1],v.z=s[y+2],v.normalize().multiplyScalar(_),s[y+0]=v.x,s[y+1]=v.y,s[y+2]=v.z}function u(){const _=new E;for(let v=0;v<s.length;v+=3){_.x=s[v+0],_.y=s[v+1],_.z=s[v+2];const y=g(_)/2/Math.PI+.5,b=m(_)/Math.PI+.5;o.push(y,1-b)}p(),h()}function h(){for(let _=0;_<o.length;_+=6){const v=o[_+0],y=o[_+2],b=o[_+4],w=Math.max(v,y,b),A=Math.min(v,y,b);w>.9&&A<.1&&(v<.2&&(o[_+0]+=1),y<.2&&(o[_+2]+=1),b<.2&&(o[_+4]+=1))}}function d(_){s.push(_.x,_.y,_.z)}function f(_,v){const y=_*3;v.x=e[y+0],v.y=e[y+1],v.z=e[y+2]}function p(){const _=new E,v=new E,y=new E,b=new E,w=new W,A=new W,T=new W;for(let M=0,S=0;M<s.length;M+=9,S+=6){_.set(s[M+0],s[M+1],s[M+2]),v.set(s[M+3],s[M+4],s[M+5]),y.set(s[M+6],s[M+7],s[M+8]),w.set(o[S+0],o[S+1]),A.set(o[S+2],o[S+3]),T.set(o[S+4],o[S+5]),b.copy(_).add(v).add(y).divideScalar(3);const D=g(b);x(w,S+0,_,D),x(A,S+2,v,D),x(T,S+4,y,D)}}function x(_,v,y,b){b<0&&_.x===1&&(o[v]=_.x-1),y.x===0&&y.z===0&&(o[v]=b/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qn(e.vertices,e.indices,e.radius,e.details)}}class Fr extends qn{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Fr(e.radius,e.detail)}}const Co=new E,Po=new E,hl=new E,Io=new Dt;class kf extends Fe{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),s=Math.cos(zi*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),d={},f=[];for(let p=0;p<l;p+=3){o?(c[0]=o.getX(p),c[1]=o.getX(p+1),c[2]=o.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);const{a:x,b:g,c:m}=Io;if(x.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),m.fromBufferAttribute(a,c[2]),Io.getNormal(hl),h[0]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,h[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,h[2]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let _=0;_<3;_++){const v=(_+1)%3,y=h[_],b=h[v],w=Io[u[_]],A=Io[u[v]],T=`${y}_${b}`,M=`${b}_${y}`;M in d&&d[M]?(hl.dot(d[M].normal)<=s&&(f.push(w.x,w.y,w.z),f.push(A.x,A.y,A.z)),d[M]=null):T in d||(d[T]={index0:c[_],index1:c[v],normal:hl.clone()})}}for(const p in d)if(d[p]){const{index0:x,index1:g}=d[p];Co.fromBufferAttribute(a,x),Po.fromBufferAttribute(a,g),f.push(Co.x,Co.y,Co.z),f.push(Po.x,Po.y,Po.z)}this.setAttribute("position",new ge(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Fi extends Sr{constructor(e){super(e),this.uuid=nn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Sr().fromJSON(i))}return this}}const p_={triangulate:function(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=Bf(r,0,i,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,d,f;if(n&&(s=y_(r,e,s,t)),r.length>80*t){a=c=r[0],l=u=r[1];for(let p=t;p<i;p+=t)h=r[p],d=r[p+1],h<a&&(a=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);f=Math.max(c-a,u-l),f=f!==0?32767/f:0}return wr(s,o,t,a,l,f,0),o}};function Bf(r,e,t,n,i){let s,o;if(i===I_(r,e,t,n)>0)for(s=e;s<t;s+=n)o=gu(s,r[s],r[s+1],o);else for(s=t-n;s>=e;s-=n)o=gu(s,r[s],r[s+1],o);return o&&Ea(o,o.next)&&(Er(o),o=o.next),o}function Vi(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Ea(t,t.next)||lt(t.prev,t,t.next)===0)){if(Er(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function wr(r,e,t,n,i,s,o){if(!r)return;!o&&s&&w_(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?g_(r,n,i,s):m_(r)){e.push(l.i/t|0),e.push(r.i/t|0),e.push(c.i/t|0),Er(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=x_(Vi(r),e,t),wr(r,e,t,n,i,s,2)):o===2&&v_(r,e,t,n,i,s):wr(Vi(r),e,t,n,i,s,1);break}}}function m_(r){const e=r.prev,t=r,n=r.next;if(lt(e,t,n)>=0)return!1;const i=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=i<s?i<o?i:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,d=i>s?i>o?i:o:s>o?s:o,f=a>l?a>c?a:c:l>c?l:c;let p=n.next;for(;p!==e;){if(p.x>=u&&p.x<=d&&p.y>=h&&p.y<=f&&Ms(i,a,s,l,o,c,p.x,p.y)&&lt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function g_(r,e,t,n){const i=r.prev,s=r,o=r.next;if(lt(i,s,o)>=0)return!1;const a=i.x,l=s.x,c=o.x,u=i.y,h=s.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,p=u<h?u<d?u:d:h<d?h:d,x=a>l?a>c?a:c:l>c?l:c,g=u>h?u>d?u:d:h>d?h:d,m=Kl(f,p,e,t,n),_=Kl(x,g,e,t,n);let v=r.prevZ,y=r.nextZ;for(;v&&v.z>=m&&y&&y.z<=_;){if(v.x>=f&&v.x<=x&&v.y>=p&&v.y<=g&&v!==i&&v!==o&&Ms(a,u,l,h,c,d,v.x,v.y)&&lt(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=f&&y.x<=x&&y.y>=p&&y.y<=g&&y!==i&&y!==o&&Ms(a,u,l,h,c,d,y.x,y.y)&&lt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=m;){if(v.x>=f&&v.x<=x&&v.y>=p&&v.y<=g&&v!==i&&v!==o&&Ms(a,u,l,h,c,d,v.x,v.y)&&lt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=_;){if(y.x>=f&&y.x<=x&&y.y>=p&&y.y<=g&&y!==i&&y!==o&&Ms(a,u,l,h,c,d,y.x,y.y)&&lt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function x_(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!Ea(i,s)&&Hf(i,n,n.next,s)&&Tr(i,s)&&Tr(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Er(n),Er(n.next),n=r=s),n=n.next}while(n!==r);return Vi(n)}function v_(r,e,t,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&A_(o,a)){let l=Vf(o,a);o=Vi(o,o.next),l=Vi(l,l.next),wr(o,e,t,n,i,s,0),wr(l,e,t,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function y_(r,e,t,n){const i=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:r.length,c=Bf(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(E_(c));for(i.sort(__),s=0;s<i.length;s++)t=M_(i[s],t);return t}function __(r,e){return r.x-e.x}function M_(r,e){const t=b_(r,e);if(!t)return e;const n=Vf(t,r);return Vi(n,n.next),Vi(t,t.next)}function b_(r,e){let t=e,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=s&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===s))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,l=i.x,c=i.y;let u=1/0,h;t=i;do s>=t.x&&t.x>=l&&s!==t.x&&Ms(o<c?s:n,o,l,c,o<c?n:s,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(s-t.x),Tr(t,r)&&(h<u||h===u&&(t.x>i.x||t.x===i.x&&S_(i,t)))&&(i=t,u=h)),t=t.next;while(t!==a);return i}function S_(r,e){return lt(r.prev,r,e.prev)<0&&lt(e.next,r,r.next)<0}function w_(r,e,t,n){let i=r;do i.z===0&&(i.z=Kl(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,T_(i)}function T_(r){let e,t,n,i,s,o,a,l,c=1;do{for(t=r,r=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,c*=2}while(o>1);return r}function Kl(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function E_(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Ms(r,e,t,n,i,s,o,a){return(i-o)*(e-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(i-o)*(n-a)}function A_(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!C_(r,e)&&(Tr(r,e)&&Tr(e,r)&&P_(r,e)&&(lt(r.prev,r,e.prev)||lt(r,e.prev,e))||Ea(r,e)&&lt(r.prev,r,r.next)>0&&lt(e.prev,e,e.next)>0)}function lt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Ea(r,e){return r.x===e.x&&r.y===e.y}function Hf(r,e,t,n){const i=Lo(lt(r,e,t)),s=Lo(lt(r,e,n)),o=Lo(lt(t,n,r)),a=Lo(lt(t,n,e));return!!(i!==s&&o!==a||i===0&&Do(r,t,e)||s===0&&Do(r,n,e)||o===0&&Do(t,r,n)||a===0&&Do(t,e,n))}function Do(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Lo(r){return r>0?1:r<0?-1:0}function C_(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&Hf(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Tr(r,e){return lt(r.prev,r,r.next)<0?lt(r,e,r.next)>=0&&lt(r,r.prev,e)>=0:lt(r,e,r.prev)<0||lt(r,r.next,e)<0}function P_(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function Vf(r,e){const t=new ec(r.i,r.x,r.y),n=new ec(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function gu(r,e,t,n){const i=new ec(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Er(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function ec(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function I_(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class Pn{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return Pn.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];xu(e),vu(n,e);let o=e.length;t.forEach(xu);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,vu(n,t[l]);const a=p_.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function xu(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function vu(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class kr extends Fe{constructor(e=new Fi([new W(.5,.5),new W(-.5,.5),new W(-.5,-.5),new W(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new ge(i,3)),this.setAttribute("uv",new ge(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:D_;let v,y=!1,b,w,A,T;m&&(v=m.getSpacedPoints(u),y=!0,d=!1,b=m.computeFrenetFrames(u,!1),w=new E,A=new E,T=new E),d||(g=0,f=0,p=0,x=0);const M=a.extractPoints(c);let S=M.shape;const D=M.holes;if(!Pn.isClockWise(S)){S=S.reverse();for(let ie=0,q=D.length;ie<q;ie++){const ne=D[ie];Pn.isClockWise(ne)&&(D[ie]=ne.reverse())}}const N=Pn.triangulateShape(S,D),R=S;for(let ie=0,q=D.length;ie<q;ie++){const ne=D[ie];S=S.concat(ne)}function O(ie,q,ne){return q||console.error("THREE.ExtrudeGeometry: vec does not exist"),ie.clone().addScaledVector(q,ne)}const $=S.length,K=N.length;function j(ie,q,ne){let _e,he,Pe;const Ie=ie.x-q.x,Ee=ie.y-q.y,ze=ne.x-ie.x,Xe=ne.y-ie.y,I=Ie*Ie+Ee*Ee,C=Ie*Xe-Ee*ze;if(Math.abs(C)>Number.EPSILON){const G=Math.sqrt(I),se=Math.sqrt(ze*ze+Xe*Xe),oe=q.x-Ee/G,fe=q.y+Ie/G,L=ne.x-Xe/se,Z=ne.y+ze/se,V=((L-oe)*Xe-(Z-fe)*ze)/(Ie*Xe-Ee*ze);_e=oe+Ie*V-ie.x,he=fe+Ee*V-ie.y;const me=_e*_e+he*he;if(me<=2)return new W(_e,he);Pe=Math.sqrt(me/2)}else{let G=!1;Ie>Number.EPSILON?ze>Number.EPSILON&&(G=!0):Ie<-Number.EPSILON?ze<-Number.EPSILON&&(G=!0):Math.sign(Ee)===Math.sign(Xe)&&(G=!0),G?(_e=-Ee,he=Ie,Pe=Math.sqrt(I)):(_e=Ie,he=Ee,Pe=Math.sqrt(I/2))}return new W(_e/Pe,he/Pe)}const ee=[];for(let ie=0,q=R.length,ne=q-1,_e=ie+1;ie<q;ie++,ne++,_e++)ne===q&&(ne=0),_e===q&&(_e=0),ee[ie]=j(R[ie],R[ne],R[_e]);const te=[];let ye,re=ee.concat();for(let ie=0,q=D.length;ie<q;ie++){const ne=D[ie];ye=[];for(let _e=0,he=ne.length,Pe=he-1,Ie=_e+1;_e<he;_e++,Pe++,Ie++)Pe===he&&(Pe=0),Ie===he&&(Ie=0),ye[_e]=j(ne[_e],ne[Pe],ne[Ie]);te.push(ye),re=re.concat(ye)}for(let ie=0;ie<g;ie++){const q=ie/g,ne=f*Math.cos(q*Math.PI/2),_e=p*Math.sin(q*Math.PI/2)+x;for(let he=0,Pe=R.length;he<Pe;he++){const Ie=O(R[he],ee[he],_e);H(Ie.x,Ie.y,-ne)}for(let he=0,Pe=D.length;he<Pe;he++){const Ie=D[he];ye=te[he];for(let Ee=0,ze=Ie.length;Ee<ze;Ee++){const Xe=O(Ie[Ee],ye[Ee],_e);H(Xe.x,Xe.y,-ne)}}}const B=p+x;for(let ie=0;ie<$;ie++){const q=d?O(S[ie],re[ie],B):S[ie];y?(A.copy(b.normals[0]).multiplyScalar(q.x),w.copy(b.binormals[0]).multiplyScalar(q.y),T.copy(v[0]).add(A).add(w),H(T.x,T.y,T.z)):H(q.x,q.y,0)}for(let ie=1;ie<=u;ie++)for(let q=0;q<$;q++){const ne=d?O(S[q],re[q],B):S[q];y?(A.copy(b.normals[ie]).multiplyScalar(ne.x),w.copy(b.binormals[ie]).multiplyScalar(ne.y),T.copy(v[ie]).add(A).add(w),H(T.x,T.y,T.z)):H(ne.x,ne.y,h/u*ie)}for(let ie=g-1;ie>=0;ie--){const q=ie/g,ne=f*Math.cos(q*Math.PI/2),_e=p*Math.sin(q*Math.PI/2)+x;for(let he=0,Pe=R.length;he<Pe;he++){const Ie=O(R[he],ee[he],_e);H(Ie.x,Ie.y,h+ne)}for(let he=0,Pe=D.length;he<Pe;he++){const Ie=D[he];ye=te[he];for(let Ee=0,ze=Ie.length;Ee<ze;Ee++){const Xe=O(Ie[Ee],ye[Ee],_e);y?H(Xe.x,Xe.y+v[u-1].y,v[u-1].x+ne):H(Xe.x,Xe.y,h+ne)}}}Q(),le();function Q(){const ie=i.length/3;if(d){let q=0,ne=$*q;for(let _e=0;_e<K;_e++){const he=N[_e];Le(he[2]+ne,he[1]+ne,he[0]+ne)}q=u+g*2,ne=$*q;for(let _e=0;_e<K;_e++){const he=N[_e];Le(he[0]+ne,he[1]+ne,he[2]+ne)}}else{for(let q=0;q<K;q++){const ne=N[q];Le(ne[2],ne[1],ne[0])}for(let q=0;q<K;q++){const ne=N[q];Le(ne[0]+$*u,ne[1]+$*u,ne[2]+$*u)}}n.addGroup(ie,i.length/3-ie,0)}function le(){const ie=i.length/3;let q=0;ue(R,q),q+=R.length;for(let ne=0,_e=D.length;ne<_e;ne++){const he=D[ne];ue(he,q),q+=he.length}n.addGroup(ie,i.length/3-ie,1)}function ue(ie,q){let ne=ie.length;for(;--ne>=0;){const _e=ne;let he=ne-1;he<0&&(he=ie.length-1);for(let Pe=0,Ie=u+g*2;Pe<Ie;Pe++){const Ee=$*Pe,ze=$*(Pe+1),Xe=q+_e+Ee,I=q+he+Ee,C=q+he+ze,G=q+_e+ze;De(Xe,I,C,G)}}}function H(ie,q,ne){l.push(ie),l.push(q),l.push(ne)}function Le(ie,q,ne){ce(ie),ce(q),ce(ne);const _e=i.length/3,he=_.generateTopUV(n,i,_e-3,_e-2,_e-1);be(he[0]),be(he[1]),be(he[2])}function De(ie,q,ne,_e){ce(ie),ce(q),ce(_e),ce(q),ce(ne),ce(_e);const he=i.length/3,Pe=_.generateSideWallUV(n,i,he-6,he-3,he-2,he-1);be(Pe[0]),be(Pe[1]),be(Pe[3]),be(Pe[1]),be(Pe[2]),be(Pe[3])}function ce(ie){i.push(l[ie*3+0]),i.push(l[ie*3+1]),i.push(l[ie*3+2])}function be(ie){s.push(ie.x),s.push(ie.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return L_(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Vc[i.type]().fromJSON(i)),new kr(n,e.options)}}const D_={generateTopUV:function(r,e,t,n,i){const s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new W(s,o),new W(a,l),new W(c,u)]},generateSideWallUV:function(r,e,t,n,i,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[i*3],f=e[i*3+1],p=e[i*3+2],x=e[s*3],g=e[s*3+1],m=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new W(o,1-l),new W(c,1-h),new W(d,1-p),new W(x,1-m)]:[new W(a,1-l),new W(u,1-h),new W(f,1-p),new W(g,1-m)]}};function L_(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Br extends qn{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Br(e.radius,e.detail)}}class ks extends qn{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ks(e.radius,e.detail)}}class Hr extends Fe{constructor(e=.5,t=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],u=[];let h=e;const d=(t-e)/i,f=new E,p=new W;for(let x=0;x<=i;x++){for(let g=0;g<=n;g++){const m=s+g/n*o;f.x=h*Math.cos(m),f.y=h*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,u.push(p.x,p.y)}h+=d}for(let x=0;x<i;x++){const g=x*(n+1);for(let m=0;m<n;m++){const _=m+g,v=_,y=_+n+1,b=_+n+2,w=_+1;a.push(v,y,w),a.push(y,b,w)}}this.setIndex(a),this.setAttribute("position",new ge(l,3)),this.setAttribute("normal",new ge(c,3)),this.setAttribute("uv",new ge(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Vr extends Fe{constructor(e=new Fi([new W(0,.5),new W(-.5,-.5),new W(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ge(i,3)),this.setAttribute("normal",new ge(s,3)),this.setAttribute("uv",new ge(o,2));function c(u){const h=i.length/3,d=u.extractPoints(t);let f=d.shape;const p=d.holes;Pn.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){const _=p[g];Pn.isClockWise(_)===!0&&(p[g]=_.reverse())}const x=Pn.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){const _=p[g];f=f.concat(_)}for(let g=0,m=f.length;g<m;g++){const _=f[g];i.push(_.x,_.y,0),s.push(0,0,1),o.push(_.x,_.y)}for(let g=0,m=x.length;g<m;g++){const _=x[g],v=_[0]+h,y=_[1]+h,b=_[2]+h;n.push(v,y,b),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return R_(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const o=t[e.shapes[i]];n.push(o)}return new Vr(n,e.curveSegments)}}function R_(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class Bs extends Fe{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new E,d=new E,f=[],p=[],x=[],g=[];for(let m=0;m<=n;m++){const _=[],v=m/n;let y=0;m===0&&o===0?y=.5/t:m===n&&l===Math.PI&&(y=-.5/t);for(let b=0;b<=t;b++){const w=b/t;h.x=-e*Math.cos(i+w*s)*Math.sin(o+v*a),h.y=e*Math.cos(o+v*a),h.z=e*Math.sin(i+w*s)*Math.sin(o+v*a),p.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),g.push(w+y,1-v),_.push(c++)}u.push(_)}for(let m=0;m<n;m++)for(let _=0;_<t;_++){const v=u[m][_+1],y=u[m][_],b=u[m+1][_],w=u[m+1][_+1];(m!==0||o>0)&&f.push(v,y,w),(m!==n-1||l<Math.PI)&&f.push(y,b,w)}this.setIndex(f),this.setAttribute("position",new ge(p,3)),this.setAttribute("normal",new ge(x,3)),this.setAttribute("uv",new ge(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Wr extends qn{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Wr(e.radius,e.detail)}}class Gr extends Fe{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],u=new E,h=new E,d=new E;for(let f=0;f<=n;f++)for(let p=0;p<=i;p++){const x=p/i*s,g=f/n*Math.PI*2;h.x=(e+t*Math.cos(g))*Math.cos(x),h.y=(e+t*Math.cos(g))*Math.sin(x),h.z=t*Math.sin(g),a.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(p/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let p=1;p<=i;p++){const x=(i+1)*f+p-1,g=(i+1)*(f-1)+p-1,m=(i+1)*(f-1)+p,_=(i+1)*f+p;o.push(x,g,_),o.push(g,m,_)}this.setIndex(o),this.setAttribute("position",new ge(a,3)),this.setAttribute("normal",new ge(l,3)),this.setAttribute("uv",new ge(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class jr extends Fe{constructor(e=1,t=.4,n=64,i=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:o},n=Math.floor(n),i=Math.floor(i);const a=[],l=[],c=[],u=[],h=new E,d=new E,f=new E,p=new E,x=new E,g=new E,m=new E;for(let v=0;v<=n;++v){const y=v/n*s*Math.PI*2;_(y,s,o,e,f),_(y+.01,s,o,e,p),g.subVectors(p,f),m.addVectors(p,f),x.crossVectors(g,m),m.crossVectors(x,g),x.normalize(),m.normalize();for(let b=0;b<=i;++b){const w=b/i*Math.PI*2,A=-t*Math.cos(w),T=t*Math.sin(w);h.x=f.x+(A*m.x+T*x.x),h.y=f.y+(A*m.y+T*x.y),h.z=f.z+(A*m.z+T*x.z),l.push(h.x,h.y,h.z),d.subVectors(h,f).normalize(),c.push(d.x,d.y,d.z),u.push(v/n),u.push(b/i)}}for(let v=1;v<=n;v++)for(let y=1;y<=i;y++){const b=(i+1)*(v-1)+(y-1),w=(i+1)*v+(y-1),A=(i+1)*v+y,T=(i+1)*(v-1)+y;a.push(b,w,T),a.push(w,A,T)}this.setIndex(a),this.setAttribute("position",new ge(l,3)),this.setAttribute("normal",new ge(c,3)),this.setAttribute("uv",new ge(u,2));function _(v,y,b,w,A){const T=Math.cos(v),M=Math.sin(v),S=b/y*v,D=Math.cos(S);A.x=w*(2+D)*.5*T,A.y=w*(2+D)*M*.5,A.z=w*Math.sin(S)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jr(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Yr extends Fe{constructor(e=new Bc(new E(-1,-1,0),new E(-1,1,0),new E(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new E,l=new E,c=new W;let u=new E;const h=[],d=[],f=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new ge(h,3)),this.setAttribute("normal",new ge(d,3)),this.setAttribute("uv",new ge(f,2));function x(){for(let v=0;v<t;v++)g(v);g(s===!1?t:0),_(),m()}function g(v){u=e.getPointAt(v/t,u);const y=o.normals[v],b=o.binormals[v];for(let w=0;w<=i;w++){const A=w/i*Math.PI*2,T=Math.sin(A),M=-Math.cos(A);l.x=M*y.x+T*b.x,l.y=M*y.y+T*b.y,l.z=M*y.z+T*b.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function m(){for(let v=1;v<=t;v++)for(let y=1;y<=i;y++){const b=(i+1)*(v-1)+(y-1),w=(i+1)*v+(y-1),A=(i+1)*v+y,T=(i+1)*(v-1)+y;p.push(b,w,T),p.push(w,A,T)}}function _(){for(let v=0;v<=t;v++)for(let y=0;y<=i;y++)c.x=v/t,c.y=y/i,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Yr(new Vc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Wf extends Fe{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new E,s=new E;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const h=l[c],d=h.start,f=h.count;for(let p=d,x=d+f;p<x;p+=3)for(let g=0;g<3;g++){const m=a.getX(p+g),_=a.getX(p+(g+1)%3);i.fromBufferAttribute(o,m),s.fromBufferAttribute(o,_),yu(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const u=3*a+c,h=3*a+(c+1)%3;i.fromBufferAttribute(o,u),s.fromBufferAttribute(o,h),yu(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new ge(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function yu(r,e,t){const n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var _u=Object.freeze({__proto__:null,BoxGeometry:Rn,CapsuleGeometry:Ur,CircleGeometry:Or,ConeGeometry:zr,CylinderGeometry:ji,DodecahedronGeometry:Fr,EdgesGeometry:kf,ExtrudeGeometry:kr,IcosahedronGeometry:Br,LatheGeometry:Fs,OctahedronGeometry:ks,PlaneGeometry:bn,PolyhedronGeometry:qn,RingGeometry:Hr,ShapeGeometry:Vr,SphereGeometry:Bs,TetrahedronGeometry:Wr,TorusGeometry:Gr,TorusKnotGeometry:jr,TubeGeometry:Yr,WireframeGeometry:Wf});class Gf extends Ht{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new pe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Hs extends Lt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Wc extends Ht{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ci,this.normalScale=new W(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jf extends Wc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new W(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ft(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new pe(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Yf extends Ht{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new pe(16777215),this.specular=new pe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ci,this.normalScale=new W(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Rr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xf extends Ht{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new pe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ci,this.normalScale=new W(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class qf extends Ht{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ci,this.normalScale=new W(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Qf extends Ht{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ci,this.normalScale=new W(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Rr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Jf extends Ht{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new pe(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ci,this.normalScale=new W(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zf extends Qt{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function un(r,e,t){return Gc(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)}function Ni(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Gc(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function $f(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function tc(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function jc(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}function N_(r,e,t,n,i=30){const s=r.clone();s.name=e;const o=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],u=c.getValueSize(),h=[],d=[];for(let f=0;f<c.times.length;++f){const p=c.times[f]*i;if(!(p<t||p>=n)){h.push(c.times[f]);for(let x=0;x<u;++x)d.push(c.values[f*u+x])}}h.length!==0&&(c.times=Ni(h,c.times.constructor),c.values=Ni(d,c.values.constructor),o.push(c))}s.tracks=o;let a=1/0;for(let l=0;l<s.tracks.length;++l)a>s.tracks[l].times[0]&&(a=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*a);return s.resetDuration(),s}function U_(r,e=0,t=r,n=30){n<=0&&(n=30);const i=t.tracks.length,s=e/n;for(let o=0;o<i;++o){const a=t.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;const c=r.tracks.find(function(m){return m.name===a.name&&m.ValueTypeName===l});if(c===void 0)continue;let u=0;const h=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let d=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);const p=a.times.length-1;let x;if(s<=a.times[0]){const m=u,_=h-u;x=un(a.values,m,_)}else if(s>=a.times[p]){const m=p*h+u,_=m+h-u;x=un(a.values,m,_)}else{const m=a.createInterpolant(),_=u,v=h-u;m.evaluate(s),x=un(m.resultBuffer,_,v)}l==="quaternion"&&new Nt().fromArray(x).normalize().conjugate().toArray(x);const g=c.times.length;for(let m=0;m<g;++m){const _=m*f+d;if(l==="quaternion")Nt.multiplyQuaternionsFlat(c.values,_,x,0,c.values,_);else{const v=f-d*2;for(let y=0;y<v;++y)c.values[_+y]-=x[y]}}}return r.blendMode=Sc,r}const O_={arraySlice:un,convertArray:Ni,isTypedArray:Gc,getKeyframeOrder:$f,sortedArray:tc,flattenJSON:jc,subclip:N_,makeClipAdditive:U_};class Xr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Kf extends Xr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ii,endingEnd:Ii}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Di:s=e,a=2*t-n;break;case yr:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Di:o=e,l=2*n-t;break;case yr:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(i-t),x=p*p,g=x*p,m=-d*g+2*d*x-d*p,_=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*p+1,v=(-1-f)*g+(1.5+f)*x+.5*p,y=f*g-f*x;for(let b=0;b!==a;++b)s[b]=m*o[u+b]+_*o[c+b]+v*o[l+b]+y*o[h+b];return s}}class Yc extends Xr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)s[d]=o[c+d]*h+o[l+d]*u;return s}}class ep extends Xr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class wn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ni(t,this.TimeBufferType),this.values=Ni(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ni(e.times,Array),values:Ni(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ep(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Yc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Kf(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case xr:t=this.InterpolantFactoryMethodDiscrete;break;case vr:t=this.InterpolantFactoryMethodLinear;break;case Yo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xr;case this.InterpolantFactoryMethodLinear:return vr;case this.InterpolantFactoryMethodSmooth:return Yo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=un(n,s,o),this.values=un(this.values,s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Gc(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=un(this.times),t=un(this.values),n=this.getValueSize(),i=this.getInterpolation()===Yo,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,d=h-n,f=h+n;for(let p=0;p!==n;++p){const x=t[h+p];if(x!==t[d+p]||x!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=un(e,0,o),this.values=un(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=un(this.times,0),t=un(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}wn.prototype.TimeBufferType=Float32Array;wn.prototype.ValueBufferType=Float32Array;wn.prototype.DefaultInterpolation=vr;class Yi extends wn{}Yi.prototype.ValueTypeName="bool";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=xr;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;class Xc extends wn{}Xc.prototype.ValueTypeName="color";class Ar extends wn{}Ar.prototype.ValueTypeName="number";class tp extends Xr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Nt.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Vs extends wn{InterpolantFactoryMethodLinear(e){return new tp(this.times,this.values,this.getValueSize(),e)}}Vs.prototype.ValueTypeName="quaternion";Vs.prototype.DefaultInterpolation=vr;Vs.prototype.InterpolantFactoryMethodSmooth=void 0;class Xi extends wn{}Xi.prototype.ValueTypeName="string";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=xr;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;class Cr extends wn{}Cr.prototype.ValueTypeName="vector";class Pr{constructor(e,t=-1,n,i=pa){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=nn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(F_(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(wn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=$f(l);l=tc(l,1,u),c=tc(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Ar(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,p,x){if(f.length!==0){const g=[],m=[];jc(f,g,m,p),g.length!==0&&x.push(new h(d,g,m))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let x=0;x<d[p].morphTargets.length;x++)f[d[p].morphTargets[x]]=-1;for(const x in f){const g=[],m=[];for(let _=0;_!==d[p].morphTargets.length;++_){const v=d[p];g.push(v.time),m.push(v.morphTarget===x?1:0)}i.push(new Ar(".morphTargetInfluence["+x+"]",g,m))}l=f.length*o}else{const f=".bones["+t[h].name+"]";n(Cr,f+".position",d,"pos",i),n(Vs,f+".quaternion",d,"rot",i),n(Cr,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function z_(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ar;case"vector":case"vector2":case"vector3":case"vector4":return Cr;case"color":return Xc;case"quaternion":return Vs;case"bool":case"boolean":return Yi;case"string":return Xi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function F_(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=z_(r.type);if(r.times===void 0){const t=[],n=[];jc(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Wi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class qr{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],p=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null}}}const np=new qr;class an{constructor(e){this.manager=e!==void 0?e:np,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Hn={};class k_ extends Error{constructor(e,t){super(e),this.response=t}}class Xn extends an{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Wi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Hn[e]!==void 0){Hn[e].push({onLoad:t,onProgress:n,onError:i});return}Hn[e]=[],Hn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Hn[e],h=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=d?parseInt(d):0,p=f!==0;let x=0;const g=new ReadableStream({start(m){_();function _(){h.read().then(({done:v,value:y})=>{if(v)m.close();else{x+=y.byteLength;const b=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:f});for(let w=0,A=u.length;w<A;w++){const T=u[w];T.onProgress&&T.onProgress(b)}m.enqueue(y),_()}})}}});return new Response(g)}else throw new k_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{Wi.add(e,c);const u=Hn[e];delete Hn[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=Hn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Hn[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class B_ extends an{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new Xn(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}parse(e){const t=[];for(let n=0;n<e.length;n++){const i=Pr.parse(e[n]);t.push(i)}return t}}class H_ extends an{constructor(e){super(e)}load(e,t,n,i){const s=this,o=[],a=new Oc,l=new Xn(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(s.withCredentials);let c=0;function u(h){l.load(e[h],function(d){const f=s.parse(d,!0);o[h]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},c+=1,c===6&&(f.mipmapCount===1&&(a.minFilter=st),a.image=o,a.format=f.format,a.needsUpdate=!0,t&&t(a))},n,i)}if(Array.isArray(e))for(let h=0,d=e.length;h<d;++h)u(h);else l.load(e,function(h){const d=s.parse(h,!0);if(d.isCubemap){const f=d.mipmaps.length/d.mipmapCount;for(let p=0;p<f;p++){o[p]={mipmaps:[]};for(let x=0;x<d.mipmapCount;x++)o[p].mipmaps.push(d.mipmaps[p*d.mipmapCount+x]),o[p].format=d.format,o[p].width=d.width,o[p].height=d.height}a.image=o}else a.image.width=d.width,a.image.height=d.height,a.mipmaps=d.mipmaps;d.mipmapCount===1&&(a.minFilter=st),a.format=d.format,a.needsUpdate=!0,t&&t(a)},n,i);return a}}class Ir extends an{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Wi.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Mr("img");function l(){u(),Wi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class V_ extends an{constructor(e){super(e)}load(e,t,n,i){const s=new Nr,o=new Ir(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(u){s.images[c]=u,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return s}}class ip extends an{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new ws,a=new Xn(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){const c=s.parse(l);c&&(c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Mt,o.wrapT=c.wrapT!==void 0?c.wrapT:Mt,o.magFilter=c.magFilter!==void 0?c.magFilter:st,o.minFilter=c.minFilter!==void 0?c.minFilter:st,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.encoding!==void 0&&(o.encoding=c.encoding),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=ai),c.mipmapCount===1&&(o.minFilter=st),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c))},n,i),o}}class qc extends an{constructor(e){super(e)}load(e,t,n,i){const s=new ct,o=new Ir(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class ui extends Oe{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class sp extends ui{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ul=new we,Mu=new E,bu=new E;class Qc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new W(512,512),this.map=null,this.mapPass=null,this.matrix=new we,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Us,this._frameExtents=new W(1,1),this._viewportCount=1,this._viewports=[new Ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Mu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Mu),bu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bu),t.updateMatrixWorld(),ul.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ul),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ul)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class W_ extends Qc{constructor(){super(new wt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=As*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class rp extends ui{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.target=new Oe,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new W_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Su=new we,nr=new E,dl=new E;class G_ extends Qc{constructor(){super(new wt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new W(4,2),this._viewportCount=6,this._viewports=[new Ze(2,1,1,1),new Ze(0,1,1,1),new Ze(3,1,1,1),new Ze(1,1,1,1),new Ze(3,0,1,1),new Ze(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),nr.setFromMatrixPosition(e.matrixWorld),n.position.copy(nr),dl.copy(n.position),dl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(dl),n.updateMatrixWorld(),i.makeTranslation(-nr.x,-nr.y,-nr.z),Su.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Su)}}class op extends ui{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new G_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class j_ extends Qc{constructor(){super(new Os(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ap extends ui{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.target=new Oe,this.shadow=new j_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class lp extends ui{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class cp extends ui{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class hp{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new E)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*i),t.addScaledVector(o[2],.488603*s),t.addScaledVector(o[3],.488603*n),t.addScaledVector(o[4],1.092548*(n*i)),t.addScaledVector(o[5],1.092548*(i*s)),t.addScaledVector(o[6],.315392*(3*s*s-1)),t.addScaledVector(o[7],1.092548*(n*s)),t.addScaledVector(o[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*i),t.addScaledVector(o[2],2*.511664*s),t.addScaledVector(o[3],2*.511664*n),t.addScaledVector(o[4],2*.429043*n*i),t.addScaledVector(o[5],2*.429043*i*s),t.addScaledVector(o[6],.743125*s*s-.247708),t.addScaledVector(o[7],2*.429043*n*s),t.addScaledVector(o[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}}class Aa extends ui{constructor(e=new hp,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class Ca extends an{constructor(e){super(e),this.textures={}}load(e,t,n,i){const s=this,o=new Xn(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}parse(e){const t=this.textures;function n(s){return t[s]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",s),t[s]}const i=Ca.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new pe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==1&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(i.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const s in e.uniforms){const o=e.uniforms[s];switch(i.uniforms[s]={},o.type){case"t":i.uniforms[s].value=n(o.value);break;case"c":i.uniforms[s].value=new pe().setHex(o.value);break;case"v2":i.uniforms[s].value=new W().fromArray(o.value);break;case"v3":i.uniforms[s].value=new E().fromArray(o.value);break;case"v4":i.uniforms[s].value=new Ze().fromArray(o.value);break;case"m3":i.uniforms[s].value=new We().fromArray(o.value);break;case"m4":i.uniforms[s].value=new we().fromArray(o.value);break;default:i.uniforms[s].value=o.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)i.extensions[s]=e.extensions[s];if(e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),i.normalScale=new W().fromArray(s)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new W().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}static createMaterialFromType(e){const t={ShadowMaterial:Gf,SpriteMaterial:Rc,RawShaderMaterial:Hs,ShaderMaterial:Lt,PointsMaterial:Uc,MeshPhysicalMaterial:jf,MeshStandardMaterial:Wc,MeshPhongMaterial:Yf,MeshToonMaterial:Xf,MeshNormalMaterial:qf,MeshLambertMaterial:Qf,MeshDepthMaterial:Dc,MeshDistanceMaterial:Lc,MeshBasicMaterial:rn,MeshMatcapMaterial:Jf,LineDashedMaterial:Zf,LineBasicMaterial:Qt,Material:Ht};return new t[e]}}class nc{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class up extends Fe{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class dp extends an{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new Xn(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(f,p){if(t[p]!==void 0)return t[p];const g=f.interleavedBuffers[p],m=s(f,g.buffer),_=ys(g.type,m),v=new ba(_,g.stride);return v.uuid=g.uuid,t[p]=v,v}function s(f,p){if(n[p]!==void 0)return n[p];const g=f.arrayBuffers[p],m=new Uint32Array(g).buffer;return n[p]=m,m}const o=e.isInstancedBufferGeometry?new up:new Fe,a=e.data.index;if(a!==void 0){const f=ys(a.type,a.array);o.setIndex(new rt(f,1))}const l=e.data.attributes;for(const f in l){const p=l[f];let x;if(p.isInterleavedBufferAttribute){const g=i(e.data,p.data);x=new Hi(g,p.itemSize,p.offset,p.normalized)}else{const g=ys(p.type,p.array),m=p.isInstancedBufferAttribute?Ps:rt;x=new m(g,p.itemSize,p.normalized)}p.name!==void 0&&(x.name=p.name),p.usage!==void 0&&x.setUsage(p.usage),p.updateRange!==void 0&&(x.updateRange.offset=p.updateRange.offset,x.updateRange.count=p.updateRange.count),o.setAttribute(f,x)}const c=e.data.morphAttributes;if(c)for(const f in c){const p=c[f],x=[];for(let g=0,m=p.length;g<m;g++){const _=p[g];let v;if(_.isInterleavedBufferAttribute){const y=i(e.data,_.data);v=new Hi(y,_.itemSize,_.offset,_.normalized)}else{const y=ys(_.type,_.array);v=new rt(y,_.itemSize,_.normalized)}_.name!==void 0&&(v.name=_.name),x.push(v)}o.morphAttributes[f]=x}e.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);const h=e.data.groups||e.data.drawcalls||e.data.offsets;if(h!==void 0)for(let f=0,p=h.length;f!==p;++f){const x=h[f];o.addGroup(x.start,x.count,x.materialIndex)}const d=e.data.boundingSphere;if(d!==void 0){const f=new E;d.center!==void 0&&f.fromArray(d.center),o.boundingSphere=new Ln(f,d.radius)}return e.name&&(o.name=e.name),e.userData&&(o.userData=e.userData),o}}class Y_ extends an{constructor(e){super(e)}load(e,t,n,i){const s=this,o=this.path===""?nc.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||o;const a=new Xn(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(h){i!==void 0&&i(h),console.error("THREE:ObjectLoader: Can't parse "+e+".",h.message);return}const u=c.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}s.parse(c,t)},n,i)}async loadAsync(e,t){const n=this,i=this.path===""?nc.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const s=new Xn(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials);const o=await s.loadAsync(e,t),a=JSON.parse(o),l=a.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(a)}parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,i),o=this.parseImages(e.images,function(){t!==void 0&&t(c)}),a=this.parseTextures(e.textures,o),l=this.parseMaterials(e.materials,a),c=this.parseObject(e.object,s,l,a,n),u=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,u),t!==void 0){let h=!1;for(const d in o)if(o[d].data instanceof HTMLImageElement){h=!0;break}h===!1&&t(c)}return c}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),s=await this.parseImagesAsync(e.images),o=this.parseTextures(e.textures,s),a=this.parseMaterials(e.materials,o),l=this.parseObject(e.object,i,a,o,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),l}parseShapes(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const s=new Fi().fromJSON(e[n]);t[s.uuid]=s}return t}parseSkeletons(e,t){const n={},i={};if(t.traverse(function(s){s.isBone&&(i[s.uuid]=s)}),e!==void 0)for(let s=0,o=e.length;s<o;s++){const a=new Sa().fromJSON(e[s],i);n[a.uuid]=a}return n}parseGeometries(e,t){const n={};if(e!==void 0){const i=new dp;for(let s=0,o=e.length;s<o;s++){let a;const l=e[s];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":a=i.parse(l);break;default:l.type in _u?a=_u[l.type].fromJSON(l,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${l.type}"`)}a.uuid=l.uuid,l.name!==void 0&&(a.name=l.name),l.userData!==void 0&&(a.userData=l.userData),n[l.uuid]=a}}return n}parseMaterials(e,t){const n={},i={};if(e!==void 0){const s=new Ca;s.setTextures(t);for(let o=0,a=e.length;o<a;o++){const l=e[o];n[l.uuid]===void 0&&(n[l.uuid]=s.parse(l)),i[l.uuid]=n[l.uuid]}}return i}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const i=e[n],s=Pr.parse(i);t[s.uuid]=s}return t}parseImages(e,t){const n=this,i={};let s;function o(l){return n.manager.itemStart(l),s.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function a(l){if(typeof l=="string"){const c=l,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return o(u)}else return l.data?{data:ys(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){const l=new qr(t);s=new Ir(l),s.setCrossOrigin(this.crossOrigin);for(let c=0,u=e.length;c<u;c++){const h=e[c],d=h.url;if(Array.isArray(d)){const f=[];for(let p=0,x=d.length;p<x;p++){const g=d[p],m=a(g);m!==null&&(m instanceof HTMLImageElement?f.push(m):f.push(new ws(m.data,m.width,m.height)))}i[h.uuid]=new Li(f)}else{const f=a(h.url);i[h.uuid]=new Li(f)}}}return i}async parseImagesAsync(e){const t=this,n={};let i;async function s(o){if(typeof o=="string"){const a=o,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:t.resourcePath+a;return await i.loadAsync(l)}else return o.data?{data:ys(o.type,o.data),width:o.width,height:o.height}:null}if(e!==void 0&&e.length>0){i=new Ir(this.manager),i.setCrossOrigin(this.crossOrigin);for(let o=0,a=e.length;o<a;o++){const l=e[o],c=l.url;if(Array.isArray(c)){const u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h],p=await s(f);p!==null&&(p instanceof HTMLImageElement?u.push(p):u.push(new ws(p.data,p.width,p.height)))}n[l.uuid]=new Li(u)}else{const u=await s(l.url);n[l.uuid]=new Li(u)}}}return n}parseTextures(e,t){function n(s,o){return typeof s=="number"?s:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",s),o[s])}const i={};if(e!==void 0)for(let s=0,o=e.length;s<o;s++){const a=e[s];a.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',a.uuid),t[a.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",a.image);const l=t[a.image],c=l.data;let u;Array.isArray(c)?(u=new Nr,c.length===6&&(u.needsUpdate=!0)):(c&&c.data?u=new ws:u=new ct,c&&(u.needsUpdate=!0)),u.source=l,u.uuid=a.uuid,a.name!==void 0&&(u.name=a.name),a.mapping!==void 0&&(u.mapping=n(a.mapping,X_)),a.channel!==void 0&&(u.channel=a.channel),a.offset!==void 0&&u.offset.fromArray(a.offset),a.repeat!==void 0&&u.repeat.fromArray(a.repeat),a.center!==void 0&&u.center.fromArray(a.center),a.rotation!==void 0&&(u.rotation=a.rotation),a.wrap!==void 0&&(u.wrapS=n(a.wrap[0],wu),u.wrapT=n(a.wrap[1],wu)),a.format!==void 0&&(u.format=a.format),a.internalFormat!==void 0&&(u.internalFormat=a.internalFormat),a.type!==void 0&&(u.type=a.type),a.encoding!==void 0&&(u.encoding=a.encoding),a.minFilter!==void 0&&(u.minFilter=n(a.minFilter,Tu)),a.magFilter!==void 0&&(u.magFilter=n(a.magFilter,Tu)),a.anisotropy!==void 0&&(u.anisotropy=a.anisotropy),a.flipY!==void 0&&(u.flipY=a.flipY),a.generateMipmaps!==void 0&&(u.generateMipmaps=a.generateMipmaps),a.premultiplyAlpha!==void 0&&(u.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(u.unpackAlignment=a.unpackAlignment),a.userData!==void 0&&(u.userData=a.userData),i[a.uuid]=u}return i}parseObject(e,t,n,i,s){let o;function a(d){return t[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",d),t[d]}function l(d){if(d!==void 0){if(Array.isArray(d)){const f=[];for(let p=0,x=d.length;p<x;p++){const g=d[p];n[g]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",g),f.push(n[g])}return f}return n[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",d),n[d]}}function c(d){return i[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",d),i[d]}let u,h;switch(e.type){case"Scene":o=new si,e.background!==void 0&&(Number.isInteger(e.background)?o.background=new pe(e.background):o.background=c(e.background)),e.environment!==void 0&&(o.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?o.fog=new Ma(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(o.fog=new _a(e.fog.color,e.fog.density))),e.backgroundBlurriness!==void 0&&(o.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(o.backgroundIntensity=e.backgroundIntensity);break;case"PerspectiveCamera":o=new wt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(o.focus=e.focus),e.zoom!==void 0&&(o.zoom=e.zoom),e.filmGauge!==void 0&&(o.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(o.filmOffset=e.filmOffset),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"OrthographicCamera":o=new Os(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(o.zoom=e.zoom),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"AmbientLight":o=new lp(e.color,e.intensity);break;case"DirectionalLight":o=new ap(e.color,e.intensity);break;case"PointLight":o=new op(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":o=new cp(e.color,e.intensity,e.width,e.height);break;case"SpotLight":o=new rp(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay);break;case"HemisphereLight":o=new sp(e.color,e.groundColor,e.intensity);break;case"LightProbe":o=new Aa().fromJSON(e);break;case"SkinnedMesh":u=a(e.geometry),h=l(e.material),o=new If(u,h),e.bindMode!==void 0&&(o.bindMode=e.bindMode),e.bindMatrix!==void 0&&o.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(o.skeleton=e.skeleton);break;case"Mesh":u=a(e.geometry),h=l(e.material),o=new $e(u,h);break;case"InstancedMesh":u=a(e.geometry),h=l(e.material);const d=e.count,f=e.instanceMatrix,p=e.instanceColor;o=new Df(u,h,d),o.instanceMatrix=new Ps(new Float32Array(f.array),16),p!==void 0&&(o.instanceColor=new Ps(new Float32Array(p.array),p.itemSize));break;case"LOD":o=new Pf;break;case"Line":o=new li(a(e.geometry),l(e.material));break;case"LineLoop":o=new Lf(a(e.geometry),l(e.material));break;case"LineSegments":o=new Nn(a(e.geometry),l(e.material));break;case"PointCloud":case"Points":o=new Rf(a(e.geometry),l(e.material));break;case"Sprite":o=new Cf(l(e.material));break;case"Group":o=new Ri;break;case"Bone":o=new Nc;break;default:o=new Oe}if(o.uuid=e.uuid,e.name!==void 0&&(o.name=e.name),e.matrix!==void 0?(o.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(o.matrixAutoUpdate=e.matrixAutoUpdate),o.matrixAutoUpdate&&o.matrix.decompose(o.position,o.quaternion,o.scale)):(e.position!==void 0&&o.position.fromArray(e.position),e.rotation!==void 0&&o.rotation.fromArray(e.rotation),e.quaternion!==void 0&&o.quaternion.fromArray(e.quaternion),e.scale!==void 0&&o.scale.fromArray(e.scale)),e.up!==void 0&&o.up.fromArray(e.up),e.castShadow!==void 0&&(o.castShadow=e.castShadow),e.receiveShadow!==void 0&&(o.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.bias!==void 0&&(o.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(o.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(o.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&o.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(o.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(o.visible=e.visible),e.frustumCulled!==void 0&&(o.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(o.renderOrder=e.renderOrder),e.userData!==void 0&&(o.userData=e.userData),e.layers!==void 0&&(o.layers.mask=e.layers),e.children!==void 0){const d=e.children;for(let f=0;f<d.length;f++)o.add(this.parseObject(d[f],t,n,i,s))}if(e.animations!==void 0){const d=e.animations;for(let f=0;f<d.length;f++){const p=d[f];o.animations.push(s[p])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(o.autoUpdate=e.autoUpdate);const d=e.levels;for(let f=0;f<d.length;f++){const p=d[f],x=o.getObjectByProperty("uuid",p.object);x!==void 0&&o.addLevel(x,p.distance,p.hysteresis)}}return o}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}}const X_={UVMapping:fa,CubeReflectionMapping:ri,CubeRefractionMapping:oi,EquirectangularReflectionMapping:pr,EquirectangularRefractionMapping:mr,CubeUVReflectionMapping:Rs},wu={RepeatWrapping:Gn,ClampToEdgeWrapping:Mt,MirroredRepeatWrapping:gr},Tu={NearestFilter:ut,NearestMipmapNearestFilter:ia,NearestMipmapLinearFilter:cr,LinearFilter:st,LinearMipmapNearestFilter:Mc,LinearMipmapLinearFilter:ai};class q_ extends an{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Wi.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){Wi.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){i&&i(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}let Ro;class Jc{static getContext(){return Ro===void 0&&(Ro=new(window.AudioContext||window.webkitAudioContext)),Ro}static setContext(e){Ro=e}}class Q_ extends an{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new Xn(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{const l=a.slice(0);Jc.getContext().decodeAudioData(l,function(u){t(u)})}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}}class J_ extends Aa{constructor(e,t,n=1){super(void 0,n),this.isHemisphereLightProbe=!0;const i=new pe().set(e),s=new pe().set(t),o=new E(i.r,i.g,i.b),a=new E(s.r,s.g,s.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(.75);this.sh.coefficients[0].copy(o).add(a).multiplyScalar(l),this.sh.coefficients[1].copy(o).sub(a).multiplyScalar(c)}}class Z_ extends Aa{constructor(e,t=1){super(void 0,t),this.isAmbientLightProbe=!0;const n=new pe().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}}const Eu=new we,Au=new we,yi=new we;class $_{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new wt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new wt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,yi.copy(e.projectionMatrix);const i=t.eyeSep/2,s=i*t.near/t.focus,o=t.near*Math.tan(zi*t.fov*.5)/t.zoom;let a,l;Au.elements[12]=-i,Eu.elements[12]=i,a=-o*t.aspect+s,l=o*t.aspect+s,yi.elements[0]=2*t.near/(l-a),yi.elements[8]=(l+a)/(l-a),this.cameraL.projectionMatrix.copy(yi),a=-o*t.aspect-s,l=o*t.aspect-s,yi.elements[0]=2*t.near/(l-a),yi.elements[8]=(l+a)/(l-a),this.cameraR.projectionMatrix.copy(yi)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(Au),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(Eu)}}class Ws{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Cu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Cu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Cu(){return(typeof performance>"u"?Date:performance).now()}const _i=new E,Pu=new Nt,K_=new E,Mi=new E;class eM extends Oe{constructor(){super(),this.type="AudioListener",this.context=Jc.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Ws}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(_i,Pu,K_),Mi.set(0,0,-1).applyQuaternion(Pu),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(_i.x,i),t.positionY.linearRampToValueAtTime(_i.y,i),t.positionZ.linearRampToValueAtTime(_i.z,i),t.forwardX.linearRampToValueAtTime(Mi.x,i),t.forwardY.linearRampToValueAtTime(Mi.y,i),t.forwardZ.linearRampToValueAtTime(Mi.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(_i.x,_i.y,_i.z),t.setOrientation(Mi.x,Mi.y,Mi.z,n.x,n.y,n.z)}}class fp extends Oe{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const bi=new E,Iu=new Nt,tM=new E,Si=new E;class nM extends fp{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(bi,Iu,tM),Si.set(0,0,1).applyQuaternion(Iu);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(bi.x,n),t.positionY.linearRampToValueAtTime(bi.y,n),t.positionZ.linearRampToValueAtTime(bi.z,n),t.orientationX.linearRampToValueAtTime(Si.x,n),t.orientationY.linearRampToValueAtTime(Si.y,n),t.orientationZ.linearRampToValueAtTime(Si.z,n)}else t.setPosition(bi.x,bi.y,bi.z),t.setOrientation(Si.x,Si.y,Si.z)}}class iM{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class pp{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,o;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,o=i;s!==o;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){Nt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const o=this._workIndex*s;Nt.multiplyQuaternionsFlat(e,o,e,t,e,n),Nt.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,s){const o=1-i;for(let a=0;a!==s;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const Zc="\\[\\]\\.:\\/",sM=new RegExp("["+Zc+"]","g"),$c="[^"+Zc+"]",rM="[^"+Zc.replace("\\.","")+"]",oM=/((?:WC+[\/:])*)/.source.replace("WC",$c),aM=/(WCOD+)?/.source.replace("WCOD",rM),lM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$c),cM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$c),hM=new RegExp("^"+oM+aM+lM+cM+"$"),uM=["material","materials","bones","map"];class dM{constructor(e,t,n){const i=n||Je.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Je{constructor(e,t,n){this.path=t,this.parsedPath=n||Je.parseTrackName(t),this.node=Je.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Je.Composite(e,t,n):new Je(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(sM,"")}static parseTrackName(e){const t=hM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);uM.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Je.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Je.Composite=dM;Je.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Je.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Je.prototype.GetterByBindingType=[Je.prototype._getValue_direct,Je.prototype._getValue_array,Je.prototype._getValue_arrayElement,Je.prototype._getValue_toArray];Je.prototype.SetterByBindingTypeAndVersioning=[[Je.prototype._setValue_direct,Je.prototype._setValue_direct_setNeedsUpdate,Je.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_array,Je.prototype._setValue_array_setNeedsUpdate,Je.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_arrayElement,Je.prototype._setValue_arrayElement_setNeedsUpdate,Je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_fromArray,Je.prototype._setValue_fromArray_setNeedsUpdate,Je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class fM{constructor(){this.isAnimationObjectGroup=!0,this.uuid=nn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,s=this._bindings,o=s.length;let a,l=e.length,c=this.nCachedObjects_;for(let u=0,h=arguments.length;u!==h;++u){const d=arguments[u],f=d.uuid;let p=t[f];if(p===void 0){p=l++,t[f]=p,e.push(d);for(let x=0,g=o;x!==g;++x)s[x].push(new Je(d,n[x],i[x]))}else if(p<c){a=e[p];const x=--c,g=e[x];t[g.uuid]=p,e[p]=g,t[f]=x,e[x]=d;for(let m=0,_=o;m!==_;++m){const v=s[m],y=v[x];let b=v[p];v[p]=y,b===void 0&&(b=new Je(d,n[m],i[m])),v[x]=b}}else e[p]!==a&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_;for(let o=0,a=arguments.length;o!==a;++o){const l=arguments[o],c=l.uuid,u=t[c];if(u!==void 0&&u>=s){const h=s++,d=e[h];t[d.uuid]=u,e[u]=d,t[c]=h,e[h]=l;for(let f=0,p=i;f!==p;++f){const x=n[f],g=x[h],m=x[u];x[u]=g,x[h]=m}}}this.nCachedObjects_=s}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_,o=e.length;for(let a=0,l=arguments.length;a!==l;++a){const c=arguments[a],u=c.uuid,h=t[u];if(h!==void 0)if(delete t[u],h<s){const d=--s,f=e[d],p=--o,x=e[p];t[f.uuid]=h,e[h]=f,t[x.uuid]=d,e[d]=x,e.pop();for(let g=0,m=i;g!==m;++g){const _=n[g],v=_[d],y=_[p];_[h]=v,_[d]=y,_.pop()}}else{const d=--o,f=e[d];d>0&&(t[f.uuid]=h),e[h]=f,e.pop();for(let p=0,x=i;p!==x;++p){const g=n[p];g[h]=g[d],g.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const s=this._bindings;if(i!==void 0)return s[i];const o=this._paths,a=this._parsedPaths,l=this._objects,c=l.length,u=this.nCachedObjects_,h=new Array(c);i=s.length,n[e]=i,o.push(e),a.push(t),s.push(h);for(let d=u,f=l.length;d!==f;++d){const p=l[d];h[d]=new Je(p,e,t)}return h}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,s=this._parsedPaths,o=this._bindings,a=o.length-1,l=o[a],c=e[a];t[c]=n,o[n]=l,o.pop(),s[n]=s[a],s.pop(),i[n]=i[a],i.pop()}}}class mp{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,o=s.length,a=new Array(o),l={endingStart:Ii,endingEnd:Ii};for(let c=0;c!==o;++c){const u=s[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=rf,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,o=s/i,a=i/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Sc:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case pa:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const o=n===of;if(e===0)return s===-1?i:o&&(s&1)===1?t-i:i;if(n===sf){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Di,i.endingEnd=Di):(e?i.endingStart=this.zeroSlopeAtStart?Di:Ii:i.endingStart=yr,t?i.endingEnd=this.zeroSlopeAtEnd?Di:Ii:i.endingEnd=yr)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=n,this}}const pM=new Float32Array(1);class mM extends Dn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==s;++h){const d=i[h],f=d.name;let p=u[f];if(p!==void 0)++p.referenceCount,o[h]=p;else{if(p=o[h],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue}const x=t&&t._propertyBindings[h].binding.parsedPath;p=new pp(Je.create(n,f,x),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,f),o[h]=p}a[h].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Yc(new Float32Array(2),new Float32Array(2),1,pM),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let o=typeof e=="string"?Pr.findByName(i,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=pa),l!==void 0){const h=l.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const u=new mp(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,s),u}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?Pr.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class Kc{constructor(e){this.value=e}clone(){return new Kc(this.value.clone===void 0?this.value:this.value.clone())}}let gM=0;class xM extends Dn{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:gM++}),this.name="",this.usage=_r,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,i=t.length;n<i;n++)this.uniforms.push(t[n].clone());return this}clone(){return new this.constructor().copy(this)}}class vM extends ba{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class yM{constructor(e,t,n,i,s){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=s,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}class eh{constructor(e,t,n=0,i=1/0){this.ray=new Ns(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new ga,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return ic(e,this,n,t),n.sort(Du),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)ic(e[i],this,n,t);return n.sort(Du),n}}function Du(r,e){return r.distance-e.distance}function ic(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)ic(i[s],e,t,!0)}}class sc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ft(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class _M{constructor(e=1,t=0,n=0){return this.radius=e,this.theta=t,this.y=n,this}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}const Lu=new W;class ra{constructor(e=new W(1/0,1/0),t=new W(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Lu.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Lu).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ru=new E,No=new E;class gp{constructor(e=new E,t=new E){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Ru.subVectors(e,this.start),No.subVectors(this.end,this.start);const n=No.dot(No);let s=No.dot(Ru)/n;return t&&(s=ft(s,0,1)),s}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const Nu=new E;class MM extends Oe{constructor(e,t){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new Fe,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,l=32;o<l;o++,a++){const c=o/l*Math.PI*2,u=a/l*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(u),Math.sin(u),1)}n.setAttribute("position",new ge(i,3));const s=new Qt({fog:!1,toneMapped:!1});this.cone=new Nn(n,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),Nu.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Nu),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const ei=new E,Uo=new we,fl=new we;class bM extends Nn{constructor(e){const t=xp(e),n=new Fe,i=[],s=[],o=new pe(0,0,1),a=new pe(0,1,0);for(let c=0;c<t.length;c++){const u=t[c];u.parent&&u.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(o.r,o.g,o.b),s.push(a.r,a.g,a.b))}n.setAttribute("position",new ge(i,3)),n.setAttribute("color",new ge(s,3));const l=new Qt({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");fl.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<t.length;s++){const a=t[s];a.parent&&a.parent.isBone&&(Uo.multiplyMatrices(fl,a.matrixWorld),ei.setFromMatrixPosition(Uo),i.setXYZ(o,ei.x,ei.y,ei.z),Uo.multiplyMatrices(fl,a.parent.matrixWorld),ei.setFromMatrixPosition(Uo),i.setXYZ(o+1,ei.x,ei.y,ei.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}}function xp(r){const e=[];r.isBone===!0&&e.push(r);for(let t=0;t<r.children.length;t++)e.push.apply(e,xp(r.children[t]));return e}class SM extends $e{constructor(e,t,n){const i=new Bs(t,4,2),s=new rn({wireframe:!0,fog:!1,toneMapped:!1});super(i,s),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const wM=new E,Uu=new pe,Ou=new pe;class TM extends Oe{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new ks(t);i.rotateY(Math.PI*.5),this.material=new rn({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const s=i.getAttribute("position"),o=new Float32Array(s.count*3);i.setAttribute("color",new rt(o,3)),this.add(new $e(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");Uu.copy(this.light.color),Ou.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const s=n<i/2?Uu:Ou;t.setXYZ(n,s.r,s.g,s.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(wM.setFromMatrixPosition(this.light.matrixWorld).negate())}}class EM extends Nn{constructor(e=10,t=10,n=4473924,i=8947848){n=new pe(n),i=new pe(i);const s=t/2,o=e/t,a=e/2,l=[],c=[];for(let d=0,f=0,p=-a;d<=t;d++,p+=o){l.push(-a,0,p,a,0,p),l.push(p,0,-a,p,0,a);const x=d===s?n:i;x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3}const u=new Fe;u.setAttribute("position",new ge(l,3)),u.setAttribute("color",new ge(c,3));const h=new Qt({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class AM extends Nn{constructor(e=10,t=16,n=8,i=64,s=4473924,o=8947848){s=new pe(s),o=new pe(o);const a=[],l=[];if(t>1)for(let h=0;h<t;h++){const d=h/t*(Math.PI*2),f=Math.sin(d)*e,p=Math.cos(d)*e;a.push(0,0,0),a.push(f,0,p);const x=h&1?s:o;l.push(x.r,x.g,x.b),l.push(x.r,x.g,x.b)}for(let h=0;h<n;h++){const d=h&1?s:o,f=e-e/n*h;for(let p=0;p<i;p++){let x=p/i*(Math.PI*2),g=Math.sin(x)*f,m=Math.cos(x)*f;a.push(g,0,m),l.push(d.r,d.g,d.b),x=(p+1)/i*(Math.PI*2),g=Math.sin(x)*f,m=Math.cos(x)*f,a.push(g,0,m),l.push(d.r,d.g,d.b)}}const c=new Fe;c.setAttribute("position",new ge(a,3)),c.setAttribute("color",new ge(l,3));const u=new Qt({vertexColors:!0,toneMapped:!1});super(c,u),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const zu=new E,Oo=new E,Fu=new E;class CM extends Oe{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new Fe;i.setAttribute("position",new ge([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const s=new Qt({fog:!1,toneMapped:!1});this.lightPlane=new li(i,s),this.add(this.lightPlane),i=new Fe,i.setAttribute("position",new ge([0,0,0,0,0,1],3)),this.targetLine=new li(i,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),zu.setFromMatrixPosition(this.light.matrixWorld),Oo.setFromMatrixPosition(this.light.target.matrixWorld),Fu.subVectors(Oo,zu),this.lightPlane.lookAt(Oo),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Oo),this.targetLine.scale.z=Fu.length()}}const zo=new E,ht=new xa;class PM extends Nn{constructor(e){const t=new Fe,n=new Qt({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],s=[],o={};a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4");function a(p,x){l(p),l(x)}function l(p){i.push(0,0,0),s.push(0,0,0),o[p]===void 0&&(o[p]=[]),o[p].push(i.length/3-1)}t.setAttribute("position",new ge(i,3)),t.setAttribute("color",new ge(s,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();const c=new pe(16755200),u=new pe(16711680),h=new pe(43775),d=new pe(16777215),f=new pe(3355443);this.setColors(c,u,h,d,f)}setColors(e,t,n,i,s){const a=this.geometry.getAttribute("color");a.setXYZ(0,e.r,e.g,e.b),a.setXYZ(1,e.r,e.g,e.b),a.setXYZ(2,e.r,e.g,e.b),a.setXYZ(3,e.r,e.g,e.b),a.setXYZ(4,e.r,e.g,e.b),a.setXYZ(5,e.r,e.g,e.b),a.setXYZ(6,e.r,e.g,e.b),a.setXYZ(7,e.r,e.g,e.b),a.setXYZ(8,e.r,e.g,e.b),a.setXYZ(9,e.r,e.g,e.b),a.setXYZ(10,e.r,e.g,e.b),a.setXYZ(11,e.r,e.g,e.b),a.setXYZ(12,e.r,e.g,e.b),a.setXYZ(13,e.r,e.g,e.b),a.setXYZ(14,e.r,e.g,e.b),a.setXYZ(15,e.r,e.g,e.b),a.setXYZ(16,e.r,e.g,e.b),a.setXYZ(17,e.r,e.g,e.b),a.setXYZ(18,e.r,e.g,e.b),a.setXYZ(19,e.r,e.g,e.b),a.setXYZ(20,e.r,e.g,e.b),a.setXYZ(21,e.r,e.g,e.b),a.setXYZ(22,e.r,e.g,e.b),a.setXYZ(23,e.r,e.g,e.b),a.setXYZ(24,t.r,t.g,t.b),a.setXYZ(25,t.r,t.g,t.b),a.setXYZ(26,t.r,t.g,t.b),a.setXYZ(27,t.r,t.g,t.b),a.setXYZ(28,t.r,t.g,t.b),a.setXYZ(29,t.r,t.g,t.b),a.setXYZ(30,t.r,t.g,t.b),a.setXYZ(31,t.r,t.g,t.b),a.setXYZ(32,n.r,n.g,n.b),a.setXYZ(33,n.r,n.g,n.b),a.setXYZ(34,n.r,n.g,n.b),a.setXYZ(35,n.r,n.g,n.b),a.setXYZ(36,n.r,n.g,n.b),a.setXYZ(37,n.r,n.g,n.b),a.setXYZ(38,i.r,i.g,i.b),a.setXYZ(39,i.r,i.g,i.b),a.setXYZ(40,s.r,s.g,s.b),a.setXYZ(41,s.r,s.g,s.b),a.setXYZ(42,s.r,s.g,s.b),a.setXYZ(43,s.r,s.g,s.b),a.setXYZ(44,s.r,s.g,s.b),a.setXYZ(45,s.r,s.g,s.b),a.setXYZ(46,s.r,s.g,s.b),a.setXYZ(47,s.r,s.g,s.b),a.setXYZ(48,s.r,s.g,s.b),a.setXYZ(49,s.r,s.g,s.b),a.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;ht.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),gt("c",t,e,ht,0,0,-1),gt("t",t,e,ht,0,0,1),gt("n1",t,e,ht,-n,-i,-1),gt("n2",t,e,ht,n,-i,-1),gt("n3",t,e,ht,-n,i,-1),gt("n4",t,e,ht,n,i,-1),gt("f1",t,e,ht,-n,-i,1),gt("f2",t,e,ht,n,-i,1),gt("f3",t,e,ht,-n,i,1),gt("f4",t,e,ht,n,i,1),gt("u1",t,e,ht,n*.7,i*1.1,-1),gt("u2",t,e,ht,-n*.7,i*1.1,-1),gt("u3",t,e,ht,0,i*2,-1),gt("cf1",t,e,ht,-n,0,1),gt("cf2",t,e,ht,n,0,1),gt("cf3",t,e,ht,0,-i,1),gt("cf4",t,e,ht,0,i,1),gt("cn1",t,e,ht,-n,0,-1),gt("cn2",t,e,ht,n,0,-1),gt("cn3",t,e,ht,0,-i,-1),gt("cn4",t,e,ht,0,i,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function gt(r,e,t,n,i,s,o){zo.set(i,s,o).unproject(n);const a=e[r];if(a!==void 0){const l=t.getAttribute("position");for(let c=0,u=a.length;c<u;c++)l.setXYZ(a[c],zo.x,zo.y,zo.z)}}const Fo=new on;class IM extends Nn{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),s=new Fe;s.setIndex(new rt(n,1)),s.setAttribute("position",new rt(i,3)),super(s,new Qt({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Fo.setFromObject(this.object),Fo.isEmpty())return;const t=Fo.min,n=Fo.max,i=this.geometry.attributes.position,s=i.array;s[0]=n.x,s[1]=n.y,s[2]=n.z,s[3]=t.x,s[4]=n.y,s[5]=n.z,s[6]=t.x,s[7]=t.y,s[8]=n.z,s[9]=n.x,s[10]=t.y,s[11]=n.z,s[12]=n.x,s[13]=n.y,s[14]=t.z,s[15]=t.x,s[16]=n.y,s[17]=t.z,s[18]=t.x,s[19]=t.y,s[20]=t.z,s[21]=n.x,s[22]=t.y,s[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class DM extends Nn{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new Fe;s.setIndex(new rt(n,1)),s.setAttribute("position",new ge(i,3)),super(s,new Qt({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class LM extends li{constructor(e,t=1,n=16776960){const i=n,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],o=new Fe;o.setAttribute("position",new ge(s,3)),o.computeBoundingSphere(),super(o,new Qt({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const a=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new Fe;l.setAttribute("position",new ge(a,3)),l.computeBoundingSphere(),this.add(new $e(l,new rn({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const ku=new E;let ko,pl;class RM extends Oe{constructor(e=new E(0,0,1),t=new E(0,0,0),n=1,i=16776960,s=n*.2,o=s*.2){super(),this.type="ArrowHelper",ko===void 0&&(ko=new Fe,ko.setAttribute("position",new ge([0,0,0,0,1,0],3)),pl=new ji(0,.5,1,5,1),pl.translate(0,-.5,0)),this.position.copy(t),this.line=new li(ko,new Qt({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new $e(pl,new rn({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{ku.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(ku,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class NM extends Nn{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Fe;i.setAttribute("position",new ge(t,3)),i.setAttribute("color",new ge(n,3));const s=new Qt({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new pe,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class UM{constructor(){this.type="ShapePath",this.color=new pe,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Sr,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,o){return this.currentPath.bezierCurveTo(e,t,n,i,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(m){const _=[];for(let v=0,y=m.length;v<y;v++){const b=m[v],w=new Fi;w.curves=b.curves,_.push(w)}return _}function n(m,_){const v=_.length;let y=!1;for(let b=v-1,w=0;w<v;b=w++){let A=_[b],T=_[w],M=T.x-A.x,S=T.y-A.y;if(Math.abs(S)>Number.EPSILON){if(S<0&&(A=_[w],M=-M,T=_[b],S=-S),m.y<A.y||m.y>T.y)continue;if(m.y===A.y){if(m.x===A.x)return!0}else{const D=S*(m.x-A.x)-M*(m.y-A.y);if(D===0)return!0;if(D<0)continue;y=!y}}else{if(m.y!==A.y)continue;if(T.x<=m.x&&m.x<=A.x||A.x<=m.x&&m.x<=T.x)return!0}}return y}const i=Pn.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new Fi,l.curves=a.curves,c.push(l),c;let u=!i(s[0].getPoints());u=e?!u:u;const h=[],d=[];let f=[],p=0,x;d[p]=void 0,f[p]=[];for(let m=0,_=s.length;m<_;m++)a=s[m],x=a.getPoints(),o=i(x),o=e?!o:o,o?(!u&&d[p]&&p++,d[p]={s:new Fi,p:x},d[p].s.curves=a.curves,u&&p++,f[p]=[]):f[p].push({h:a,p:x[0]});if(!d[0])return t(s);if(d.length>1){let m=!1,_=0;for(let v=0,y=d.length;v<y;v++)h[v]=[];for(let v=0,y=d.length;v<y;v++){const b=f[v];for(let w=0;w<b.length;w++){const A=b[w];let T=!0;for(let M=0;M<d.length;M++)n(A.p,d[M].p)&&(v!==M&&_++,T?(T=!1,h[M].push(A)):m=!0);T&&h[v].push(A)}}_>0&&m===!1&&(f=h)}let g;for(let m=0,_=d.length;m<_;m++){l=d[m].s,c.push(l),g=f[m];for(let v=0,y=g.length;v<y;v++)l.holes.push(g[v].h)}return c}}class OM extends Rn{constructor(e,t,n,i,s,o){console.warn("THREE.BoxBufferGeometry has been renamed to THREE.BoxGeometry."),super(e,t,n,i,s,o)}}class zM extends Ur{constructor(e,t,n,i){console.warn("THREE.CapsuleBufferGeometry has been renamed to THREE.CapsuleGeometry."),super(e,t,n,i)}}class FM extends Or{constructor(e,t,n,i){console.warn("THREE.CircleBufferGeometry has been renamed to THREE.CircleGeometry."),super(e,t,n,i)}}class kM extends zr{constructor(e,t,n,i,s,o,a){console.warn("THREE.ConeBufferGeometry has been renamed to THREE.ConeGeometry."),super(e,t,n,i,s,o,a)}}class BM extends ji{constructor(e,t,n,i,s,o,a,l){console.warn("THREE.CylinderBufferGeometry has been renamed to THREE.CylinderGeometry."),super(e,t,n,i,s,o,a,l)}}class HM extends Fr{constructor(e,t){console.warn("THREE.DodecahedronBufferGeometry has been renamed to THREE.DodecahedronGeometry."),super(e,t)}}class VM extends kr{constructor(e,t){console.warn("THREE.ExtrudeBufferGeometry has been renamed to THREE.ExtrudeGeometry."),super(e,t)}}class WM extends Br{constructor(e,t){console.warn("THREE.IcosahedronBufferGeometry has been renamed to THREE.IcosahedronGeometry."),super(e,t)}}class GM extends Fs{constructor(e,t,n,i){console.warn("THREE.LatheBufferGeometry has been renamed to THREE.LatheGeometry."),super(e,t,n,i)}}class jM extends ks{constructor(e,t){console.warn("THREE.OctahedronBufferGeometry has been renamed to THREE.OctahedronGeometry."),super(e,t)}}class YM extends bn{constructor(e,t,n,i){console.warn("THREE.PlaneBufferGeometry has been renamed to THREE.PlaneGeometry."),super(e,t,n,i)}}class XM extends qn{constructor(e,t,n,i){console.warn("THREE.PolyhedronBufferGeometry has been renamed to THREE.PolyhedronGeometry."),super(e,t,n,i)}}class qM extends Hr{constructor(e,t,n,i,s,o){console.warn("THREE.RingBufferGeometry has been renamed to THREE.RingGeometry."),super(e,t,n,i,s,o)}}class QM extends Vr{constructor(e,t){console.warn("THREE.ShapeBufferGeometry has been renamed to THREE.ShapeGeometry."),super(e,t)}}class JM extends Bs{constructor(e,t,n,i,s,o,a){console.warn("THREE.SphereBufferGeometry has been renamed to THREE.SphereGeometry."),super(e,t,n,i,s,o,a)}}class ZM extends Wr{constructor(e,t){console.warn("THREE.TetrahedronBufferGeometry has been renamed to THREE.TetrahedronGeometry."),super(e,t)}}class $M extends Gr{constructor(e,t,n,i,s){console.warn("THREE.TorusBufferGeometry has been renamed to THREE.TorusGeometry."),super(e,t,n,i,s)}}class KM extends jr{constructor(e,t,n,i,s,o){console.warn("THREE.TorusKnotBufferGeometry has been renamed to THREE.TorusKnotGeometry."),super(e,t,n,i,s,o)}}class eb extends Yr{constructor(e,t,n,i,s){console.warn("THREE.TubeBufferGeometry has been renamed to THREE.TubeGeometry."),super(e,t,n,i,s)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:da}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=da);const tb=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Bd,AddEquation:Ai,AddOperation:Od,AdditiveAnimationBlendMode:Sc,AdditiveBlending:ta,AlphaFormat:Xd,AlwaysDepth:Pd,AlwaysStencilFunc:hf,AmbientLight:lp,AmbientLightProbe:Z_,AnimationAction:mp,AnimationClip:Pr,AnimationLoader:B_,AnimationMixer:mM,AnimationObjectGroup:fM,AnimationUtils:O_,ArcCurve:Nf,ArrayCamera:wf,ArrowHelper:RM,Audio:fp,AudioAnalyser:iM,AudioContext:Jc,AudioListener:eM,AudioLoader:Q_,AxesHelper:NM,BackSide:Et,BasicDepthPacking:af,BasicShadowMap:sm,Bone:Nc,BooleanKeyframeTrack:Yi,Box2:ra,Box3:on,Box3Helper:DM,BoxBufferGeometry:OM,BoxGeometry:Rn,BoxHelper:IM,BufferAttribute:rt,BufferGeometry:Fe,BufferGeometryLoader:dp,ByteType:Vd,Cache:Wi,Camera:xa,CameraHelper:PM,CanvasTexture:o_,CapsuleBufferGeometry:zM,CapsuleGeometry:Ur,CatmullRomCurve3:Uf,CineonToneMapping:kd,CircleBufferGeometry:FM,CircleGeometry:Or,ClampToEdgeWrapping:Mt,Clock:Ws,Color:pe,ColorKeyframeTrack:Xc,ColorManagement:kt,CompressedArrayTexture:r_,CompressedTexture:Oc,CompressedTextureLoader:H_,ConeBufferGeometry:kM,ConeGeometry:zr,CubeCamera:gf,CubeReflectionMapping:ri,CubeRefractionMapping:oi,CubeTexture:Nr,CubeTextureLoader:V_,CubeUVReflectionMapping:Rs,CubicBezierCurve:Fc,CubicBezierCurve3:Of,CubicInterpolant:Kf,CullFaceBack:yl,CullFaceFront:pd,CullFaceFrontBack:im,CullFaceNone:fd,Curve:Sn,CurvePath:Ff,CustomBlending:gd,CustomToneMapping:Hd,CylinderBufferGeometry:BM,CylinderGeometry:ji,Cylindrical:_M,Data3DTexture:Ac,DataArrayTexture:ma,DataTexture:ws,DataTextureLoader:ip,DataUtils:rr,DecrementStencilOp:xm,DecrementWrapStencilOp:ym,DefaultLoadingManager:np,DepthFormat:ii,DepthStencilFormat:Bi,DepthTexture:Tf,DirectionalLight:ap,DirectionalLightHelper:CM,DiscreteInterpolant:ep,DisplayP3ColorSpace:wc,DodecahedronBufferGeometry:HM,DodecahedronGeometry:Fr,DoubleSide:Zt,DstAlphaFactor:Sd,DstColorFactor:Td,DynamicCopyUsage:Nm,DynamicDrawUsage:Cm,DynamicReadUsage:Dm,EdgesGeometry:kf,EllipseCurve:wa,EqualDepth:Dd,EqualStencilFunc:Sm,EquirectangularReflectionMapping:pr,EquirectangularRefractionMapping:mr,Euler:hi,EventDispatcher:Dn,ExtrudeBufferGeometry:VM,ExtrudeGeometry:kr,FileLoader:Xn,Float16BufferAttribute:Mg,Float32BufferAttribute:ge,Float64BufferAttribute:bg,FloatType:dn,Fog:Ma,FogExp2:_a,FramebufferTexture:s_,FrontSide:sn,Frustum:Us,GLBufferAttribute:yM,GLSL1:Om,GLSL3:Xl,GreaterDepth:Rd,GreaterEqualDepth:Ld,GreaterEqualStencilFunc:Am,GreaterStencilFunc:Tm,GridHelper:EM,Group:Ri,HalfFloatType:Cn,HemisphereLight:sp,HemisphereLightHelper:TM,HemisphereLightProbe:J_,IcosahedronBufferGeometry:WM,IcosahedronGeometry:Br,ImageBitmapLoader:q_,ImageLoader:Ir,ImageUtils:Ec,IncrementStencilOp:gm,IncrementWrapStencilOp:vm,InstancedBufferAttribute:Ps,InstancedBufferGeometry:up,InstancedInterleavedBuffer:vM,InstancedMesh:Df,Int16BufferAttribute:yg,Int32BufferAttribute:_g,Int8BufferAttribute:gg,IntType:Gd,InterleavedBuffer:ba,InterleavedBufferAttribute:Hi,Interpolant:Xr,InterpolateDiscrete:xr,InterpolateLinear:vr,InterpolateSmooth:Yo,InvertStencilOp:_m,KeepStencilOp:Xo,KeyframeTrack:wn,LOD:Pf,LatheBufferGeometry:GM,LatheGeometry:Fs,Layers:ga,LessDepth:Id,LessEqualDepth:na,LessEqualStencilFunc:wm,LessStencilFunc:bm,Light:ui,LightProbe:Aa,Line:li,Line3:gp,LineBasicMaterial:Qt,LineCurve:Ta,LineCurve3:zf,LineDashedMaterial:Zf,LineLoop:Lf,LineSegments:Nn,LinearEncoding:Mn,LinearFilter:st,LinearInterpolant:Yc,LinearMipMapLinearFilter:cm,LinearMipMapNearestFilter:lm,LinearMipmapLinearFilter:ai,LinearMipmapNearestFilter:Mc,LinearSRGBColorSpace:Es,LinearToneMapping:zd,Loader:an,LoaderUtils:nc,LoadingManager:qr,LoopOnce:sf,LoopPingPong:of,LoopRepeat:rf,LuminanceAlphaFormat:Qd,LuminanceFormat:qd,MOUSE:wi,Material:Ht,MaterialLoader:Ca,MathUtils:Ql,Matrix3:We,Matrix4:we,MaxEquation:Sl,Mesh:$e,MeshBasicMaterial:rn,MeshDepthMaterial:Dc,MeshDistanceMaterial:Lc,MeshLambertMaterial:Qf,MeshMatcapMaterial:Jf,MeshNormalMaterial:qf,MeshPhongMaterial:Yf,MeshPhysicalMaterial:jf,MeshStandardMaterial:Wc,MeshToonMaterial:Xf,MinEquation:bl,MirroredRepeatWrapping:gr,MixOperation:Ud,MultiplyBlending:Ml,MultiplyOperation:Rr,NearestFilter:ut,NearestMipMapLinearFilter:am,NearestMipMapNearestFilter:om,NearestMipmapLinearFilter:cr,NearestMipmapNearestFilter:ia,NeverDepth:Cd,NeverStencilFunc:Mm,NoBlending:Yn,NoColorSpace:fm,NoToneMapping:fn,NormalAnimationBlendMode:pa,NormalBlending:Ui,NotEqualDepth:Nd,NotEqualStencilFunc:Em,NumberKeyframeTrack:Ar,Object3D:Oe,ObjectLoader:Y_,ObjectSpaceNormalMap:cf,OctahedronBufferGeometry:jM,OctahedronGeometry:ks,OneFactor:_d,OneMinusDstAlphaFactor:wd,OneMinusDstColorFactor:Ed,OneMinusSrcAlphaFactor:_c,OneMinusSrcColorFactor:bd,OrthographicCamera:Os,PCFShadowMap:vc,PCFSoftShadowMap:md,PMREMGenerator:Jl,Path:Sr,PerspectiveCamera:wt,Plane:An,PlaneBufferGeometry:YM,PlaneGeometry:bn,PlaneHelper:LM,PointLight:op,PointLightHelper:SM,Points:Rf,PointsMaterial:Uc,PolarGridHelper:AM,PolyhedronBufferGeometry:XM,PolyhedronGeometry:qn,PositionalAudio:nM,PropertyBinding:Je,PropertyMixer:pp,QuadraticBezierCurve:kc,QuadraticBezierCurve3:Bc,Quaternion:Nt,QuaternionKeyframeTrack:Vs,QuaternionLinearInterpolant:tp,RED_GREEN_RGTC2_Format:jl,RED_RGTC1_Format:nf,REVISION:da,RGBADepthPacking:lf,RGBAFormat:qt,RGBAIntegerFormat:ef,RGBA_ASTC_10x10_Format:Hl,RGBA_ASTC_10x5_Format:Fl,RGBA_ASTC_10x6_Format:kl,RGBA_ASTC_10x8_Format:Bl,RGBA_ASTC_12x10_Format:Vl,RGBA_ASTC_12x12_Format:Wl,RGBA_ASTC_4x4_Format:Il,RGBA_ASTC_5x4_Format:Dl,RGBA_ASTC_5x5_Format:Ll,RGBA_ASTC_6x5_Format:Rl,RGBA_ASTC_6x6_Format:Nl,RGBA_ASTC_8x5_Format:Ul,RGBA_ASTC_8x6_Format:Ol,RGBA_ASTC_8x8_Format:zl,RGBA_BPTC_Format:jo,RGBA_ETC2_EAC_Format:Pl,RGBA_PVRTC_2BPPV1_Format:Al,RGBA_PVRTC_4BPPV1_Format:El,RGBA_S3TC_DXT1_Format:Vo,RGBA_S3TC_DXT3_Format:Wo,RGBA_S3TC_DXT5_Format:Go,RGB_ETC1_Format:tf,RGB_ETC2_Format:Cl,RGB_PVRTC_2BPPV1_Format:Tl,RGB_PVRTC_4BPPV1_Format:wl,RGB_S3TC_DXT1_Format:Ho,RGFormat:$d,RGIntegerFormat:Kd,RawShaderMaterial:Hs,Ray:Ns,Raycaster:eh,RectAreaLight:cp,RedFormat:Jd,RedIntegerFormat:Zd,ReinhardToneMapping:Fd,RepeatWrapping:Gn,ReplaceStencilOp:mm,ReverseSubtractEquation:vd,RingBufferGeometry:qM,RingGeometry:Hr,SIGNED_RED_GREEN_RGTC2_Format:Yl,SIGNED_RED_RGTC1_Format:Gl,SRGBColorSpace:yn,Scene:si,ShaderChunk:ke,ShaderLib:_n,ShaderMaterial:Lt,ShadowMaterial:Gf,Shape:Fi,ShapeBufferGeometry:QM,ShapeGeometry:Vr,ShapePath:UM,ShapeUtils:Pn,ShortType:Wd,Skeleton:Sa,SkeletonHelper:bM,SkinnedMesh:If,Source:Li,Sphere:Ln,SphereBufferGeometry:JM,SphereGeometry:Bs,Spherical:sc,SphericalHarmonics3:hp,SplineCurve:Hc,SpotLight:rp,SpotLightHelper:MM,Sprite:Cf,SpriteMaterial:Rc,SrcAlphaFactor:yc,SrcAlphaSaturateFactor:Ad,SrcColorFactor:Md,StaticCopyUsage:Rm,StaticDrawUsage:_r,StaticReadUsage:Im,StereoCamera:$_,StreamCopyUsage:Um,StreamDrawUsage:Pm,StreamReadUsage:Lm,StringKeyframeTrack:Xi,SubtractEquation:xd,SubtractiveBlending:_l,TOUCH:Ti,TangentSpaceNormalMap:ci,TetrahedronBufferGeometry:ZM,TetrahedronGeometry:Wr,Texture:ct,TextureLoader:qc,TorusBufferGeometry:$M,TorusGeometry:Gr,TorusKnotBufferGeometry:KM,TorusKnotGeometry:jr,Triangle:Dt,TriangleFanDrawMode:dm,TriangleStripDrawMode:um,TrianglesDrawMode:hm,TubeBufferGeometry:eb,TubeGeometry:Yr,TwoPassDoubleSide:rm,UVMapping:fa,Uint16BufferAttribute:Cc,Uint32BufferAttribute:Pc,Uint8BufferAttribute:xg,Uint8ClampedBufferAttribute:vg,Uniform:Kc,UniformsGroup:xM,UniformsLib:de,UniformsUtils:br,UnsignedByteType:In,UnsignedInt248Type:Oi,UnsignedIntType:ti,UnsignedShort4444Type:jd,UnsignedShort5551Type:Yd,UnsignedShortType:bc,VSMShadowMap:vs,Vector2:W,Vector3:E,Vector4:Ze,VectorKeyframeTrack:Cr,VideoTexture:i_,WebGL1Renderer:Ef,WebGL3DRenderTarget:rg,WebGLArrayRenderTarget:sg,WebGLCubeRenderTarget:xf,WebGLMultipleRenderTargets:og,WebGLRenderTarget:Rt,WebGLRenderer:ya,WebGLUtils:Sf,WireframeGeometry:Wf,WrapAroundEnding:yr,ZeroCurvatureEnding:Ii,ZeroFactor:yd,ZeroSlopeEnding:Di,ZeroStencilOp:pm,_SRGBAFormat:sa,sRGBEncoding:Qe},Symbol.toStringTag,{value:"Module"}));var nb=Object.defineProperty,ib=(r,e,t)=>e in r?nb(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Gs=(r,e,t)=>(ib(r,typeof e!="symbol"?e+"":e,t),t),Pa,nt,vp,Pi,Bu,yp,rc,Dr={},th=[],sb=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,nh=Array.isArray;function ni(r,e){for(var t in e)r[t]=e[t];return r}function _p(r){var e=r.parentNode;e&&e.removeChild(r)}function Mp(r,e,t){var n,i,s,o={};for(s in e)s=="key"?n=e[s]:s=="ref"?i=e[s]:o[s]=e[s];if(arguments.length>2&&(o.children=arguments.length>3?Pa.call(arguments,2):t),typeof r=="function"&&r.defaultProps!=null)for(s in r.defaultProps)o[s]===void 0&&(o[s]=r.defaultProps[s]);return Qo(r,o,n,i,null)}function Qo(r,e,t,n,i){var s={type:r,props:e,key:t,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:i??++vp,__i:-1,__u:0};return i==null&&nt.vnode!=null&&nt.vnode(s),s}function Ia(r){return r.children}function Jo(r,e){this.props=r,this.context=e}function Is(r,e){if(e==null)return r.__?Is(r.__,r.__i+1):null;for(var t;e<r.__k.length;e++)if((t=r.__k[e])!=null&&t.__e!=null)return t.__e;return typeof r.type=="function"?Is(r):null}function rb(r,e,t){var n,i=r.__v,s=i.__e,o=r.__P;if(o)return(n=ni({},i)).__v=i.__v+1,nt.vnode&&nt.vnode(n),ih(o,n,i,r.__n,o.ownerSVGElement!==void 0,32&i.__u?[s]:null,e,s??Is(i),!!(32&i.__u),t),n.__v=i.__v,n.__.__k[n.__i]=n,n.__d=void 0,n.__e!=s&&bp(n),n}function bp(r){var e,t;if((r=r.__)!=null&&r.__c!=null){for(r.__e=r.__c.base=null,e=0;e<r.__k.length;e++)if((t=r.__k[e])!=null&&t.__e!=null){r.__e=r.__c.base=t.__e;break}return bp(r)}}function Hu(r){(!r.__d&&(r.__d=!0)&&Pi.push(r)&&!oa.__r++||Bu!==nt.debounceRendering)&&((Bu=nt.debounceRendering)||yp)(oa)}function oa(){var r,e,t,n=[],i=[];for(Pi.sort(rc);r=Pi.shift();)r.__d&&(t=Pi.length,e=rb(r,n,i)||e,t===0||Pi.length>t?(oc(n,e,i),i.length=n.length=0,e=void 0,Pi.sort(rc)):e&&nt.__c&&nt.__c(e,th));e&&oc(n,e,i),oa.__r=0}function Sp(r,e,t,n,i,s,o,a,l,c,u){var h,d,f,p,x,g=n&&n.__k||th,m=e.length;for(t.__d=l,ob(t,e,g),l=t.__d,h=0;h<m;h++)(f=t.__k[h])!=null&&typeof f!="boolean"&&typeof f!="function"&&(d=f.__i===-1?Dr:g[f.__i]||Dr,f.__i=h,ih(r,f,d,i,s,o,a,l,c,u),p=f.__e,f.ref&&d.ref!=f.ref&&(d.ref&&sh(d.ref,null,f),u.push(f.ref,f.__c||p,f)),x==null&&p!=null&&(x=p),65536&f.__u||d.__k===f.__k?l=wp(f,l,r):typeof f.type=="function"&&f.__d!==void 0?l=f.__d:p&&(l=p.nextSibling),f.__d=void 0,f.__u&=-196609);t.__d=l,t.__e=x}function ob(r,e,t){var n,i,s,o,a,l=e.length,c=t.length,u=c,h=0;for(r.__k=[],n=0;n<l;n++)o=n+h,(i=r.__k[n]=(i=e[n])==null||typeof i=="boolean"||typeof i=="function"?null:typeof i=="string"||typeof i=="number"||typeof i=="bigint"||i.constructor==String?Qo(null,i,null,null,null):nh(i)?Qo(Ia,{children:i},null,null,null):i.constructor===void 0&&i.__b>0?Qo(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i)!=null?(i.__=r,i.__b=r.__b+1,a=ab(i,t,o,u),i.__i=a,s=null,a!==-1&&(u--,(s=t[a])&&(s.__u|=131072)),s==null||s.__v===null?(a==-1&&h--,typeof i.type!="function"&&(i.__u|=65536)):a!==o&&(a===o+1?h++:a>o?u>l-o?h+=a-o:h--:a<o?a==o-1&&(h=a-o):h=0,a!==n+h&&(i.__u|=65536))):(s=t[o])&&s.key==null&&s.__e&&!(131072&s.__u)&&(s.__e==r.__d&&(r.__d=Is(s)),ac(s,s,!1),t[o]=null,u--);if(u)for(n=0;n<c;n++)(s=t[n])!=null&&!(131072&s.__u)&&(s.__e==r.__d&&(r.__d=Is(s)),ac(s,s))}function wp(r,e,t){var n,i;if(typeof r.type=="function"){for(n=r.__k,i=0;n&&i<n.length;i++)n[i]&&(n[i].__=r,e=wp(n[i],e,t));return e}r.__e!=e&&(t.insertBefore(r.__e,e||null),e=r.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType===8);return e}function ab(r,e,t,n){var i=r.key,s=r.type,o=t-1,a=t+1,l=e[t];if(l===null||l&&i==l.key&&s===l.type&&!(131072&l.__u))return t;if(n>(l!=null&&!(131072&l.__u)?1:0))for(;o>=0||a<e.length;){if(o>=0){if((l=e[o])&&!(131072&l.__u)&&i==l.key&&s===l.type)return o;o--}if(a<e.length){if((l=e[a])&&!(131072&l.__u)&&i==l.key&&s===l.type)return a;a++}}return-1}function Vu(r,e,t){e[0]==="-"?r.setProperty(e,t??""):r[e]=t==null?"":typeof t!="number"||sb.test(e)?t:t+"px"}function Bo(r,e,t,n,i){var s;e:if(e==="style")if(typeof t=="string")r.style.cssText=t;else{if(typeof n=="string"&&(r.style.cssText=n=""),n)for(e in n)t&&e in t||Vu(r.style,e,"");if(t)for(e in t)n&&t[e]===n[e]||Vu(r.style,e,t[e])}else if(e[0]==="o"&&e[1]==="n")s=e!==(e=e.replace(/(PointerCapture)$|Capture$/i,"$1")),e=e.toLowerCase()in r?e.toLowerCase().slice(2):e.slice(2),r.l||(r.l={}),r.l[e+s]=t,t?n?t.u=n.u:(t.u=Date.now(),r.addEventListener(e,s?Gu:Wu,s)):r.removeEventListener(e,s?Gu:Wu,s);else{if(i)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="width"&&e!=="height"&&e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e!=="rowSpan"&&e!=="colSpan"&&e!=="role"&&e in r)try{r[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!=="-"?r.removeAttribute(e):r.setAttribute(e,t))}}function Wu(r){if(this.l){var e=this.l[r.type+!1];if(r.t){if(r.t<=e.u)return}else r.t=Date.now();return e(nt.event?nt.event(r):r)}}function Gu(r){if(this.l)return this.l[r.type+!0](nt.event?nt.event(r):r)}function ih(r,e,t,n,i,s,o,a,l,c){var u,h,d,f,p,x,g,m,_,v,y,b,w,A,T,M=e.type;if(e.constructor!==void 0)return null;128&t.__u&&(l=!!(32&t.__u),s=[a=e.__e=t.__e]),(u=nt.__b)&&u(e);e:if(typeof M=="function")try{if(m=e.props,_=(u=M.contextType)&&n[u.__c],v=u?_?_.props.value:u.__:n,t.__c?g=(h=e.__c=t.__c).__=h.__E:("prototype"in M&&M.prototype.render?e.__c=h=new M(m,v):(e.__c=h=new Jo(m,v),h.constructor=M,h.render=cb),_&&_.sub(h),h.props=m,h.state||(h.state={}),h.context=v,h.__n=n,d=h.__d=!0,h.__h=[],h._sb=[]),h.__s==null&&(h.__s=h.state),M.getDerivedStateFromProps!=null&&(h.__s==h.state&&(h.__s=ni({},h.__s)),ni(h.__s,M.getDerivedStateFromProps(m,h.__s))),f=h.props,p=h.state,h.__v=e,d)M.getDerivedStateFromProps==null&&h.componentWillMount!=null&&h.componentWillMount(),h.componentDidMount!=null&&h.__h.push(h.componentDidMount);else{if(M.getDerivedStateFromProps==null&&m!==f&&h.componentWillReceiveProps!=null&&h.componentWillReceiveProps(m,v),!h.__e&&(h.shouldComponentUpdate!=null&&h.shouldComponentUpdate(m,h.__s,v)===!1||e.__v===t.__v)){for(e.__v!==t.__v&&(h.props=m,h.state=h.__s,h.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.forEach(function(S){S&&(S.__=e)}),y=0;y<h._sb.length;y++)h.__h.push(h._sb[y]);h._sb=[],h.__h.length&&o.push(h);break e}h.componentWillUpdate!=null&&h.componentWillUpdate(m,h.__s,v),h.componentDidUpdate!=null&&h.__h.push(function(){h.componentDidUpdate(f,p,x)})}if(h.context=v,h.props=m,h.__P=r,h.__e=!1,b=nt.__r,w=0,"prototype"in M&&M.prototype.render){for(h.state=h.__s,h.__d=!1,b&&b(e),u=h.render(h.props,h.state,h.context),A=0;A<h._sb.length;A++)h.__h.push(h._sb[A]);h._sb=[]}else do h.__d=!1,b&&b(e),u=h.render(h.props,h.state,h.context),h.state=h.__s;while(h.__d&&++w<25);h.state=h.__s,h.getChildContext!=null&&(n=ni(ni({},n),h.getChildContext())),d||h.getSnapshotBeforeUpdate==null||(x=h.getSnapshotBeforeUpdate(f,p)),Sp(r,nh(T=u!=null&&u.type===Ia&&u.key==null?u.props.children:u)?T:[T],e,t,n,i,s,o,a,l,c),h.base=e.__e,e.__u&=-161,h.__h.length&&o.push(h),g&&(h.__E=h.__=null)}catch(S){e.__v=null,l||s!=null?(e.__e=a,e.__u|=l?160:32,s[s.indexOf(a)]=null):(e.__e=t.__e,e.__k=t.__k),nt.__e(S,e,t)}else s==null&&e.__v===t.__v?(e.__k=t.__k,e.__e=t.__e):e.__e=lb(t.__e,e,t,n,i,s,o,l,c);(u=nt.diffed)&&u(e)}function oc(r,e,t){for(var n=0;n<t.length;n++)sh(t[n],t[++n],t[++n]);nt.__c&&nt.__c(e,r),r.some(function(i){try{r=i.__h,i.__h=[],r.some(function(s){s.call(i)})}catch(s){nt.__e(s,i.__v)}})}function lb(r,e,t,n,i,s,o,a,l){var c,u,h,d,f,p,x,g=t.props,m=e.props,_=e.type;if(_==="svg"&&(i=!0),s!=null){for(c=0;c<s.length;c++)if((f=s[c])&&"setAttribute"in f==!!_&&(_?f.localName===_:f.nodeType===3)){r=f,s[c]=null;break}}if(r==null){if(_===null)return document.createTextNode(m);r=i?document.createElementNS("http://www.w3.org/2000/svg",_):document.createElement(_,m.is&&m),s=null,a=!1}if(_===null)g===m||a&&r.data===m||(r.data=m);else{if(s=s&&Pa.call(r.childNodes),g=t.props||Dr,!a&&s!=null)for(g={},c=0;c<r.attributes.length;c++)g[(f=r.attributes[c]).name]=f.value;for(c in g)f=g[c],c=="children"||(c=="dangerouslySetInnerHTML"?h=f:c==="key"||c in m||Bo(r,c,null,f,i));for(c in m)f=m[c],c=="children"?d=f:c=="dangerouslySetInnerHTML"?u=f:c=="value"?p=f:c=="checked"?x=f:c==="key"||a&&typeof f!="function"||g[c]===f||Bo(r,c,f,g[c],i);if(u)a||h&&(u.__html===h.__html||u.__html===r.innerHTML)||(r.innerHTML=u.__html),e.__k=[];else if(h&&(r.innerHTML=""),Sp(r,nh(d)?d:[d],e,t,n,i&&_!=="foreignObject",s,o,s?s[0]:t.__k&&Is(t,0),a,l),s!=null)for(c=s.length;c--;)s[c]!=null&&_p(s[c]);a||(c="value",p!==void 0&&(p!==r[c]||_==="progress"&&!p||_==="option"&&p!==g[c])&&Bo(r,c,p,g[c],!1),c="checked",x!==void 0&&x!==r[c]&&Bo(r,c,x,g[c],!1))}return r}function sh(r,e,t){try{typeof r=="function"?r(e):r.current=e}catch(n){nt.__e(n,t)}}function ac(r,e,t){var n,i;if(nt.unmount&&nt.unmount(r),(n=r.ref)&&(n.current&&n.current!==r.__e||sh(n,null,e)),(n=r.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(s){nt.__e(s,e)}n.base=n.__P=null,r.__c=void 0}if(n=r.__k)for(i=0;i<n.length;i++)n[i]&&ac(n[i],e,t||typeof r.type!="function");t||r.__e==null||_p(r.__e),r.__=r.__e=r.__d=void 0}function cb(r,e,t){return this.constructor(r,t)}function hb(r,e,t){var n,i,s,o;nt.__&&nt.__(r,e),i=(n=typeof t=="function")?null:t&&t.__k||e.__k,s=[],o=[],ih(e,r=(!n&&t||e).__k=Mp(Ia,null,[r]),i||Dr,Dr,e.ownerSVGElement!==void 0,!n&&t?[t]:i?null:e.firstChild?Pa.call(e.childNodes):null,s,!n&&t?t:i?i.__e:e.firstChild,n,o),r.__d=void 0,oc(s,r,o)}Pa=th.slice,nt={__e:function(r,e,t,n){for(var i,s,o;e=e.__;)if((i=e.__c)&&!i.__)try{if((s=i.constructor)&&s.getDerivedStateFromError!=null&&(i.setState(s.getDerivedStateFromError(r)),o=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(r,n||{}),o=i.__d),o)return i.__E=i}catch(a){r=a}throw r}},vp=0,Jo.prototype.setState=function(r,e){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=ni({},this.state),typeof r=="function"&&(r=r(ni({},t),this.props)),r&&ni(t,r),r!=null&&this.__v&&(e&&this._sb.push(e),Hu(this))},Jo.prototype.forceUpdate=function(r){this.__v&&(this.__e=!0,r&&this.__h.push(r),Hu(this))},Jo.prototype.render=Ia,Pi=[],yp=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,rc=function(r,e){return r.__v.__b-e.__v.__b},oa.__r=0;const ub="ejx-LaunchButtonWrapper",db="ejx-LaunchRoot",fb="ejx-CloseButton",pb="ejx-LaunchButton",mb="ejx-LaunchRoot__variantminimal",gb="ejx-LaunchRoot__pickvisible",xb="ejx-Button",vb="ejx-Button__Deemphasize",yb="ejx-Button__Small",_b="ejx-SessionButtonWrapper",Mb="ejx-LaunchRoot__variantdefault",bb="ejx-EJXLogoShape",Sb="ejx-EJXLogoShape__Close",wb="ejx-EJXLogoShape__Secondary",Tb="ejx-EJXText",Ft={"user-select-none":"ejx-user-select-none",LaunchButtonWrapper:ub,LaunchRoot:db,CloseButton:fb,LaunchButton:pb,LaunchRoot__variantminimal:mb,LaunchRoot__pickvisible:gb,Button:xb,Button__Deemphasize:vb,Button__Small:yb,SessionButtonWrapper:_b,LaunchRoot__variantdefault:Mb,EJXLogoShape:bb,EJXLogoShape__Close:Sb,EJXLogoShape__Secondary:wb,EJXText:Tb};var Ds,dt,ml,ju,Lr=0,Tp=[],Zo=[],xt=nt,Yu=xt.__b,Xu=xt.__r,qu=xt.diffed,Qu=xt.__c,Ju=xt.unmount,Zu=xt.__;function Da(r,e){xt.__h&&xt.__h(dt,r,Lr||e),Lr=0;var t=dt.__H||(dt.__H={__:[],__h:[]});return r>=t.__.length&&t.__.push({__V:Zo}),t.__[r]}function St(r){return Lr=1,Eb(Ap,r)}function Eb(r,e,t){var n=Da(Ds++,2);if(n.t=r,!n.__c&&(n.__=[t?t(e):Ap(void 0,e),function(a){var l=n.__N?n.__N[0]:n.__[0],c=n.t(l,a);l!==c&&(n.__N=[c,n.__[1]],n.__c.setState({}))}],n.__c=dt,!dt.u)){var i=function(a,l,c){if(!n.__c.__H)return!0;var u=n.__c.__H.__.filter(function(d){return!!d.__c});if(u.every(function(d){return!d.__N}))return!s||s.call(this,a,l,c);var h=!1;return u.forEach(function(d){if(d.__N){var f=d.__[0];d.__=d.__N,d.__N=void 0,f!==d.__[0]&&(h=!0)}}),!(!h&&n.__c.props===a)&&(!s||s.call(this,a,l,c))};dt.u=!0;var s=dt.shouldComponentUpdate,o=dt.componentWillUpdate;dt.componentWillUpdate=function(a,l,c){if(this.__e){var u=s;s=void 0,i(a,l,c),s=u}o&&o.call(this,a,l,c)},dt.shouldComponentUpdate=i}return n.__N||n.__}function js(r,e){var t=Da(Ds++,3);!xt.__s&&oh(t.__H,e)&&(t.__=r,t.i=e,dt.__H.__h.push(t))}function Ab(r,e){var t=Da(Ds++,4);!xt.__s&&oh(t.__H,e)&&(t.__=r,t.i=e,dt.__h.push(t))}function $u(r){return Lr=5,rh(function(){return{current:r}},[])}function rh(r,e){var t=Da(Ds++,7);return oh(t.__H,e)?(t.__V=r(),t.i=e,t.__h=r,t.__V):t.__}function Ep(r,e){return Lr=8,rh(function(){return r},e)}function Cb(){for(var r;r=Tp.shift();)if(r.__P&&r.__H)try{r.__H.__h.forEach($o),r.__H.__h.forEach(lc),r.__H.__h=[]}catch(e){r.__H.__h=[],xt.__e(e,r.__v)}}xt.__b=function(r){dt=null,Yu&&Yu(r)},xt.__=function(r,e){r&&e.__k&&e.__k.__m&&(r.__m=e.__k.__m),Zu&&Zu(r,e)},xt.__r=function(r){Xu&&Xu(r),Ds=0;var e=(dt=r.__c).__H;e&&(ml===dt?(e.__h=[],dt.__h=[],e.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=Zo,t.__N=t.i=void 0})):(e.__h.forEach($o),e.__h.forEach(lc),e.__h=[],Ds=0)),ml=dt},xt.diffed=function(r){qu&&qu(r);var e=r.__c;e&&e.__H&&(e.__H.__h.length&&(Tp.push(e)!==1&&ju===xt.requestAnimationFrame||((ju=xt.requestAnimationFrame)||Pb)(Cb)),e.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==Zo&&(t.__=t.__V),t.i=void 0,t.__V=Zo})),ml=dt=null},xt.__c=function(r,e){e.some(function(t){try{t.__h.forEach($o),t.__h=t.__h.filter(function(n){return!n.__||lc(n)})}catch(n){e.some(function(i){i.__h&&(i.__h=[])}),e=[],xt.__e(n,t.__v)}}),Qu&&Qu(r,e)},xt.unmount=function(r){Ju&&Ju(r);var e,t=r.__c;t&&t.__H&&(t.__H.__.forEach(function(n){try{$o(n)}catch(i){e=i}}),t.__H=void 0,e&&xt.__e(e,t.__v))};var Ku=typeof requestAnimationFrame=="function";function Pb(r){var e,t=function(){clearTimeout(n),Ku&&cancelAnimationFrame(e),setTimeout(r)},n=setTimeout(t,100);Ku&&(e=requestAnimationFrame(t))}function $o(r){var e=dt,t=r.__c;typeof t=="function"&&(r.__c=void 0,t()),dt=e}function lc(r){var e=dt;r.__c=r.__(),dt=e}function oh(r,e){return!r||r.length!==e.length||e.some(function(t,n){return t!==r[n]})}function Ap(r,e){return typeof e=="function"?e(r):e}const Ib=r=>new Promise(e=>{if(navigator.xr&&navigator.xr.isSessionSupported){const t=r.map(n=>{var i;return(i=navigator.xr)==null?void 0:i.isSessionSupported(n).then(s=>{if(console.debug(`Checking if ${n} is supported? ${s}`),s)return n})});Promise.all(t).then(n=>{e(n.filter(i=>i!==void 0))})}else e([])});var bt=(r=>(r.OK="OK",r.IOS="IOS",r.NO_FULLSCREEN="NO_FULLSCREEN",r.ANDROID_NO_XR="ANDROID_NO_XR",r.NO_HTTPS="NO_HTTPS",r.SHOW_POPUP="SHOW_POPUP",r.NAVIGATOR_XR_PERMISSIONS="NAVIGATOR_XR_PERMISSIONS",r.SHOW_IFRAME_REDIRECT="SHOW_IFRAME_REDIRECT",r.USER_REJECT_AR="USER_REJECT_AR",r.USER_REJECT_VR="USER_REJECT_VR",r))(bt||{});const gs=r=>({status:r,sessions:[]}),Db=async r=>{var e,t;let n=!0;try{(e=navigator.xr)!=null&&e.isSessionSupported?await navigator.xr.isSessionSupported("immersive-ar"):n=!1}catch{n=!1}const i=document.fullscreenEnabled??!1,s=n?await Ib(r):[],o=/^iP/.test(navigator.platform)||/^Mac/.test(navigator.platform)&&navigator.maxTouchPoints>4,a=window.innerWidth,l=((t=navigator.userAgentData)==null?void 0:t.mobile)||o||a&&a<500,c=window.location.protocol==="https:",u=navigator.userAgent.includes("EyeJack");if((i||u)&&s.length>0)return{status:"OK",sessions:s};if(l){if(o)return gs("IOS");if(!c)return gs("NO_HTTPS");if(!n)return gs("NAVIGATOR_XR_PERMISSIONS");if(!i)return gs("NO_FULLSCREEN");if(s.length===0)return gs("ANDROID_NO_XR")}return gs("SHOW_POPUP")},Ko=r=>{window.postMessage({type:r.type,...r.detail},"*"),window.parent&&window.parent.postMessage({type:r.type,...r.detail,src:window.location.pathname},"*")},Lb=r=>{const e=window.getSelection();if(!e)return;e.removeAllRanges();const t=document.createRange();t.selectNodeContents(r),e.addRange(t)},Rb=r=>/[ \&\=\?\%\x80-\xFF]/.test(r);function Nb(){try{return window.self!==window.top}catch{return!0}}class Ub extends Error{constructor(){super("This device, website, or iframe does not support fullscreen."),Gs(this,"errorType","FullscreenError")}}class aa extends Error{constructor(){super('This device, website, or iframe does not permit the "xr" feature.'),Gs(this,"errorType","XRPermissionsError")}}class Ob extends Error{constructor(e){super(`The provided session mode "${e}" is not valid.`),Gs(this,"errorType","InvalidXRSessionModeError")}}class Cp extends Error{constructor(e){const t=e instanceof Error?e.message:e;super("An error occured."+(e!==void 0?`
 Reason:${t}`:"")),Gs(this,"errorType","UnknownError"),e instanceof Error&&(this.cause=e)}}class zb extends Error{constructor(){super("Website not served over https.  Https is required for WebXR."),Gs(this,"errorType","NoHttpsError")}}class Fb extends Error{constructor(){super("Website is served in an iframe and therefore can't redirect to the EyeJackX player to launch on iOS."),Gs(this,"errorType","IframeCantRedirectError")}}function kb(r){switch(r){case bt.ANDROID_NO_XR:return new aa;case bt.NO_HTTPS:return new zb;case bt.NAVIGATOR_XR_PERMISSIONS:return new aa;case bt.SHOW_IFRAME_REDIRECT:return new Fb;case bt.NO_FULLSCREEN:return new Ub}}const Bb=r=>{const[e,t]=St(!1),[n,i]=St(void 0),s=async()=>{try{location.protocol!=="https:"?i("Needs HTTPS"):!navigator.xr||!navigator.xr.isSessionSupported?i("No support for XR."):await navigator.xr.isSessionSupported("inline")||i("No support for `inline` session.")}catch(p){p instanceof TypeError&&r.onError?r.onError(new Ob("inline")):p instanceof DOMException&&r.onError?r.onError(new aa):r.onError&&r.onError(new Cp(p))}t(!0),window.addEventListener("message",p=>{p.data.type==="@eyejack/ejx-launcher-button:start"?h(p.data.sessionType):p.data.type==="@eyejack/ejx-launcher-button:stop"&&d()});const f=new CustomEvent("@eyejack/ejx-launcher-button:ready",{detail:{}});Ko(f)};js(()=>{s()},[]);const o=()=>{l(void 0);const f=new CustomEvent("@eyejack/ejx-launcher-button:stopped");Ko(f)},[a,l]=St(),[c,u]=St(),h=async(f="immersive-ar")=>{r.onBeforeStart&&r.onBeforeStart(f);const p=await r.xrSessionBuilder(f);if(p){u(f),p.addEventListener("end",o),l(p);const x=new CustomEvent("@eyejack/ejx-launcher-button:started",{detail:{sessionType:f}});Ko(x),r.onStart&&r.onStart(f,p)}},d=async()=>{a&&(r.onBeforeEnd&&c&&r.onBeforeEnd(c,a),await r.xrSessionEnder(a),r.onEnd&&c&&r.onEnd(c),u(void 0))};return{supported:e,errorReason:n,session:a,tryStartXR:h,tryStopXR:d,currentSessionType:c}};function Pp(r){var e,t,n="";if(typeof r=="string"||typeof r=="number")n+=r;else if(typeof r=="object")if(Array.isArray(r))for(e=0;e<r.length;e++)r[e]&&(t=Pp(r[e]))&&(n&&(n+=" "),n+=t);else for(e in r)r[e]&&(n&&(n+=" "),n+=e);return n}function jn(){for(var r,e,t=0,n="";t<arguments.length;)(r=arguments[t++])&&(e=Pp(r))&&(n&&(n+=" "),n+=e);return n}const Hb="ejx-LauncherPopup",Vb="ejx-LaunchButtonWrapper",Wb="ejx-LaunchRoot",Gb="ejx-CloseButton",jb="ejx-LaunchButton",Yb="ejx-LaunchRoot__variantminimal",Xb="ejx-LaunchRoot__pickvisible",qb="ejx-Button",Qb="ejx-Button__Deemphasize",Jb="ejx-Button__Small",Zb="ejx-SessionButtonWrapper",$b="ejx-LaunchRoot__variantdefault",Kb="ejx-EJXLogoShape",e1="ejx-EJXLogoShape__Close",t1="ejx-EJXLogoShape__Secondary",n1="ejx-EJXText",i1="ejx-LauncherPopup__Visible",s1="ejx-LauncherPopup_Version",gl={"user-select-none":"ejx-user-select-none",LauncherPopup:Hb,LaunchButtonWrapper:Vb,LaunchRoot:Wb,CloseButton:Gb,LaunchButton:jb,LaunchRoot__variantminimal:Yb,LaunchRoot__pickvisible:Xb,Button:qb,Button__Deemphasize:Qb,Button__Small:Jb,SessionButtonWrapper:Zb,LaunchRoot__variantdefault:$b,EJXLogoShape:Kb,EJXLogoShape__Close:e1,EJXLogoShape__Secondary:t1,EJXText:n1,LauncherPopup__Visible:i1,LauncherPopup_Version:s1},r1="data:image/svg+xml;base64,ICAgIDxzdmcKICAgICAgICB3aWR0aD0iMTIxIgogICAgICAgIGhlaWdodD0iMjQiCiAgICAgICAgdmlld0JveD0iMCAwIDEyMSAyNCIKICAgICAgICBmaWxsPSJub25lIgogICAgICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgID4KICAgICAgICA8cGF0aAogICAgICAgICAgICBkPSJNMTE2LjE3NCAyMy4zNDU3VjIxLjcwOUMxMTYuMTc0IDIxLjUzOTcgMTE2LjEwNyAyMS4zNzc0IDExNS45ODcgMjEuMjU3OEwxMTAuMzY2IDE1LjY1QzExMC4zMDYgMTUuNTkwNiAxMTAuMjM2IDE1LjU0MzUgMTEwLjE1OCAxNS41MTE0QzExMC4wOCAxNS40NzkzIDEwOS45OTcgMTUuNDYyNyAxMDkuOTEzIDE1LjQ2MjhIMTA3Ljg4MkMxMDcuNzEzIDE1LjQ2MjkgMTA3LjU1IDE1LjUzMDIgMTA3LjQzIDE1LjY1TDEwMS45NiAyMS4xMDQ5QzEwMS45IDIxLjE2NDEgMTAxLjg1MyAyMS4yMzQ0IDEwMS44MiAyMS4zMTE4QzEwMS43ODggMjEuMzg5MyAxMDEuNzcyIDIxLjQ3MjMgMTAxLjc3MiAyMS41NTYxVjIzLjMwMThDMTAxLjc3MiAyMy4zODU2IDEwMS43ODggMjMuNDY4NiAxMDEuODIgMjMuNTQ2QzEwMS44NTMgMjMuNjIzNCAxMDEuOSAyMy42OTM4IDEwMS45NTkgMjMuNzUzQzEwMi4wMTkgMjMuODEyMiAxMDIuMDg5IDIzLjg1OTIgMTAyLjE2NyAyMy44OTEyQzEwMi4yNDUgMjMuOTIzMiAxMDIuMzI4IDIzLjkzOTYgMTAyLjQxMiAyMy45Mzk1SDEwNC4xMDlDMTA0LjI3OSAyMy45Mzk2IDEwNC40NDIgMjMuODcyNSAxMDQuNTYyIDIzLjc1M0wxMDcuNDcyIDIwLjg1NzdDMTA3LjU5MiAyMC43MzgyIDEwNy43NTUgMjAuNjcxMiAxMDcuOTI1IDIwLjY3MTJIMTEwLjAwNEMxMTAuMTczIDIwLjY3MTQgMTEwLjMzNiAyMC43Mzg0IDExMC40NTYgMjAuODU3N0wxMTMuMzkgMjMuNzgzQzExMy41MDkgMjMuOTAxNSAxMTMuNjcxIDIzLjk2ODggMTEzLjgzOSAyMy45NzAyTDExNS41MzIgMjMuOTgxOUMxMTUuNjE2IDIzLjk4MjIgMTE1LjY5OSAyMy45NjYgMTE1Ljc3NyAyMy45MzQyQzExNS44NTUgMjMuOTAyNCAxMTUuOTI2IDIzLjg1NTYgMTE1Ljk4NSAyMy43OTY1QzExNi4wNDUgMjMuNzM3NCAxMTYuMDkyIDIzLjY2NzIgMTE2LjEyNSAyMy41ODk4QzExNi4xNTcgMjMuNTEyNSAxMTYuMTc0IDIzLjQyOTUgMTE2LjE3NCAyMy4zNDU3WiIKICAgICAgICAgICAgZmlsbD0id2hpdGUiCiAgICAgICAgLz4KICAgICAgICA8cGF0aAogICAgICAgICAgICBkPSJNMTIwLjM2MiA0LjgxMDY3SDExOC43MkMxMTguNTUgNC44MTA4MyAxMTguMzg4IDQuODc3ODcgMTE4LjI2NyA0Ljk5NzE1TDExMi42NDYgMTAuNjA0MkMxMTIuNTI2IDEwLjcyNDEgMTEyLjQ1OSAxMC44ODYzIDExMi40NTkgMTEuMDU1NFYxMy4wNzk3QzExMi40NTkgMTMuMjQ5MSAxMTIuNTI2IDEzLjQxMTUgMTEyLjY0NiAxMy41MzE3TDExOC4xMTcgMTguOTg1OUMxMTguMjM3IDE5LjEwNTYgMTE4LjQgMTkuMTczIDExOC41NyAxOS4xNzMxSDEyMC4zMkMxMjAuNDkgMTkuMTczMSAxMjAuNjUzIDE5LjEwNTggMTIwLjc3MyAxOC45ODYxQzEyMC44OTMgMTguODY2MyAxMjAuOTYxIDE4LjcwNCAxMjAuOTYxIDE4LjUzNDZWMTYuODQyNEMxMjAuOTYxIDE2Ljc1ODQgMTIwLjk0NCAxNi42NzUzIDEyMC45MTIgMTYuNTk3N0MxMjAuODggMTYuNTIwMiAxMjAuODMzIDE2LjQ0OTcgMTIwLjc3MyAxNi4zOTA0TDExNy44NjcgMTMuNDkyOUMxMTcuNzQ3IDEzLjM3MzMgMTE3LjY3OSAxMy4yMTEgMTE3LjY3OSAxMy4wNDE3VjEwLjk2OThDMTE3LjY3OSAxMC44MDA2IDExNy43NDcgMTAuNjM4MyAxMTcuODY3IDEwLjUxODZMMTIwLjgwMSA3LjU5MzM0QzEyMC45MiA3LjQ3NDg0IDEyMC45ODcgNy4zMTQyMiAxMjAuOTg4IDcuMTQ2NUwxMjEgNS40NTg2MkMxMjEuMDAxIDUuMzc0MTYgMTIwLjk4NSA1LjI5MDMgMTIwLjk1NCA1LjIxMTg4QzEyMC45MjIgNS4xMzM0NyAxMjAuODc2IDUuMDYyMDYgMTIwLjgxNiA1LjAwMTc5QzEyMC43NTcgNC45NDE1MyAxMjAuNjg2IDQuODkzNiAxMjAuNjA4IDQuODYwNzlDMTIwLjUzIDQuODI3OTggMTIwLjQ0NiA0LjgxMDk1IDEyMC4zNjIgNC44MTA2N1oiCiAgICAgICAgICAgIGZpbGw9IndoaXRlIgogICAgICAgIC8+CiAgICAgICAgPHBhdGgKICAgICAgICAgICAgZD0iTTk3LjU4NDIgMTkuMTcwOUg5OS4yMjU3Qzk5LjM5NTUgMTkuMTcwOCA5OS41NTgzIDE5LjEwMzQgOTkuNjc4MyAxOC45ODM3TDEwNS4zIDEzLjM3ODhDMTA1LjQyIDEzLjI1OTEgMTA1LjQ4NyAxMy4wOTY4IDEwNS40ODcgMTIuOTI3NlYxMC45MDMzQzEwNS40ODcgMTAuNzM0MiAxMDUuNDE5IDEwLjU3MiAxMDUuMyAxMC40NTIxTDk5LjgyODcgNC45OTcxNUM5OS43MDg0IDQuODc3ODcgOTkuNTQ1NyA0LjgxMDgzIDk5LjM3NjEgNC44MTA2N0g5Ny42MjUzQzk3LjQ1NTQgNC44MTA2NyA5Ny4yOTI2IDQuODc3OTMgOTcuMTcyNSA0Ljk5NzY2Qzk3LjA1MjQgNS4xMTczOSA5Ni45ODQ5IDUuMjc5NzggOTYuOTg0OSA1LjQ0OTExVjcuMTQxMzlDOTYuOTg1IDcuMzEwNjcgOTcuMDUyNiA3LjQ3Mjk3IDk3LjE3MjcgNy41OTI2MUwxMDAuMDc5IDEwLjQ5MDFDMTAwLjE5OSAxMC42MDk3IDEwMC4yNjYgMTAuNzcyIDEwMC4yNjcgMTAuOTQxM1YxMy4wMTc1QzEwMC4yNjcgMTMuMTAxNCAxMDAuMjUgMTMuMTg0NCAxMDAuMjE4IDEzLjI2MTlDMTAwLjE4NiAxMy4zMzkzIDEwMC4xMzggMTMuNDA5NiAxMDAuMDc5IDEzLjQ2ODhMOTcuMTQ0OCAxNi4zOTQxQzk3LjAyNTQgMTYuNTEyMyA5Ni45NTc5IDE2LjY3MyA5Ni45NTcxIDE2Ljg0MDlMOTYuOTQ1MyAxOC41Mjk1Qzk2Ljk0NDkgMTguNjEzNSA5Ni45NjEyIDE4LjY5NjcgOTYuOTkzMSAxOC43NzQ0Qzk3LjAyNSAxOC44NTIxIDk3LjA3MiAxOC45MjI4IDk3LjEzMTMgMTguOTgyM0M5Ny4xOTA3IDE5LjA0MTkgOTcuMjYxMiAxOS4wODkyIDk3LjMzODkgMTkuMTIxNkM5Ny40MTY2IDE5LjE1MzkgOTcuNSAxOS4xNzA3IDk3LjU4NDIgMTkuMTcwOVoiCiAgICAgICAgICAgIGZpbGw9IndoaXRlIgogICAgICAgIC8+CiAgICAgICAgPHBhdGgKICAgICAgICAgICAgZD0iTTEwMS43NzIgMC42MzQ4MDZWMi4yNzE1QzEwMS43NzIgMi4zNTU0NSAxMDEuNzg4IDIuNDM4NTcgMTAxLjgyIDIuNTE2MTJDMTAxLjg1MyAyLjU5MzY3IDEwMS45IDIuNjY0MTMgMTAxLjk2IDIuNzIzNDZMMTA3LjU4MSA4LjMyNzU3QzEwNy42NCA4LjM4NyAxMDcuNzExIDguNDM0MTMgMTA3Ljc4OCA4LjQ2NjI2QzEwNy44NjYgOC40OTgzOSAxMDcuOTQ5IDguNTE0ODkgMTA4LjAzNCA4LjUxNDc5SDExMC4wNjRDMTEwLjIzNCA4LjUxNDY3IDExMC4zOTYgOC40NDczMyAxMTAuNTE2IDguMzI3NTdMMTE1Ljk4NyAyLjg3MzM4QzExNi4xMDcgMi43NTM3NCAxMTYuMTc0IDIuNTkxNDMgMTE2LjE3NCAyLjQyMjE1VjAuNjc2NDkyQzExNi4xNzQgMC41OTI2NTEgMTE2LjE1OCAwLjUwOTYzMSAxMTYuMTI2IDAuNDMyMTcxQzExNi4wOTQgMC4zNTQ3MTIgMTE2LjA0NiAwLjI4NDMzIDExNS45ODcgMC4yMjUwNDVDMTE1LjkyNyAwLjE2NTc2MSAxMTUuODU3IDAuMTE4NzMxIDExNS43NzkgMC4wODY2NDYyQzExNS43MDEgMC4wNTQ1NjE1IDExNS42MTggMC4wMzgwNTA3IDExNS41MzQgMC4wMzgwNTA3SDExMy44MzdDMTEzLjc1MyAwLjAzNzk0OTMgMTEzLjY2OSAwLjA1NDQzODggMTEzLjU5MiAwLjA4NjU3MDNDMTEzLjUxNCAwLjExODcwMiAxMTMuNDQ0IDAuMTY1ODQgMTEzLjM4NCAwLjIyNTI2OUwxMTAuNDggMy4xMjI3NkMxMTAuNDIgMy4xODIxOSAxMTAuMzUgMy4yMjkzMyAxMTAuMjcyIDMuMjYxNDZDMTEwLjE5NCAzLjI5MzU5IDExMC4xMTEgMy4zMTAwOCAxMTAuMDI3IDMuMzA5OThIMTA3Ljk0N0MxMDcuODYzIDMuMzEwMDIgMTA3Ljc3OSAzLjI5MzUgMTA3LjcwMiAzLjI2MTM3QzEwNy42MjQgMy4yMjkyNSAxMDcuNTUzIDMuMTgyMTUgMTA3LjQ5NCAzLjEyMjc2TDEwNC41NiAwLjE5NzQ3OEMxMDQuNDQgMC4wNzg4NzkzIDEwNC4yNzkgMC4wMTE4ODA4IDEwNC4xMTEgMC4wMTA5OTIyTDEwMi40MTYgMi4wNjAzNGUtMDVDMTAyLjMzMiAtMC4wMDA2NTQwMzYgMTAyLjI0OSAwLjAxNTI0NTQgMTAyLjE3MSAwLjA0NjgwODNDMTAyLjA5MyAwLjA3ODM3MTMgMTAyLjAyMiAwLjEyNDk3OSAxMDEuOTYyIDAuMTgzOTUzQzEwMS45MDIgMC4yNDI5MjggMTAxLjg1NCAwLjMxMzEwOCAxMDEuODIyIDAuMzkwNDc2QzEwMS43ODkgMC40Njc4NDQgMTAxLjc3MiAwLjU1MDg3NSAxMDEuNzcyIDAuNjM0ODA2WiIKICAgICAgICAgICAgZmlsbD0id2hpdGUiCiAgICAgICAgLz4KICAgICAgICA8cGF0aAogICAgICAgICAgICBkPSJNMi42MzA0MiAxNy43NzAzQzIuMTQ0ODEgMTcuNzcwMyAxLjcwNjQgMTcuNjQ5MiAxLjMxNTIxIDE3LjQwNzFDMC45MjQwMiAxNy4xNjUgMC42MDcwMiAxNi44NDkgMC4zNjQyMTIgMTYuNDU4OUMwLjEyMTQwNCAxNi4wNjg5IDAgMTUuNjMxOCAwIDE1LjE0NzZWOC42OTE4NUMwIDguMjA3NjcgMC4xMjE0MDQgNy43NzA1NiAwLjM2NDIxMiA3LjM4MDUyQzAuNjA3MDIgNi45OTA0OSAwLjkyNDAyIDYuNjc0NDIgMS4zMTUyMSA2LjQzMjMzQzEuNzA2NCA2LjE5MDI0IDIuMTQ0ODEgNi4wNjkxOSAyLjYzMDQyIDYuMDY5MTlIOS4zMDc2NUM5Ljc5MzI2IDYuMDY5MTkgMTAuMjMxNyA2LjE5MDI0IDEwLjYyMjkgNi40MzIzM0MxMS4wMjc1IDYuNjYwOTcgMTEuMzQ0NSA2Ljk3NzA0IDExLjU3MzkgNy4zODA1MkMxMS44MTY3IDcuNzg0MDEgMTEuOTM4MSA4LjIyMTEyIDExLjkzODEgOC42OTE4NVYxMy4wMDkxSDIuMTg1MjdWMTUuMDg3MUMyLjE4NTI3IDE1LjIyMTYgMi4yMzI0OSAxNS4zNDI2IDIuMzI2OTEgMTUuNDUwMkMyLjQzNDgzIDE1LjU0NDQgMi41NTYyMyAxNS41OTE0IDIuNjkxMTIgMTUuNTkxNEgxMS45MzgxVjE3Ljc3MDNIMi42MzA0MlpNMi4xODUyNyAxMC45NzE1SDkuNzMyNTZWOC43NTIzN0M5LjczMjU2IDguNjE3ODggOS42ODUzNSA4LjUwMzU2IDkuNTkwOTIgOC40MDk0MUM5LjQ5NjUgOC4zMDE4MSA5LjM4MTg0IDguMjQ4MDIgOS4yNDY5NSA4LjI0ODAySDIuNjkxMTJDMi41NTYyMyA4LjI0ODAyIDIuNDM0ODMgOC4zMDE4MSAyLjMyNjkxIDguNDA5NDFDMi4yMzI0OSA4LjUwMzU2IDIuMTg1MjcgOC42MTc4OCAyLjE4NTI3IDguNzUyMzdWMTAuOTcxNVoiCiAgICAgICAgICAgIGZpbGw9IndoaXRlIgogICAgICAgIC8+CiAgICAgICAgPHBhdGgKICAgICAgICAgICAgZD0iTTE2LjgyNDEgMjIuMjQ5VjIwLjA1SDI0LjAwNzJDMjQuMTQyMSAyMC4wNSAyNC4yNTY3IDE5Ljk5NjIgMjQuMzUxMiAxOS44ODg2QzI0LjQ1OTEgMTkuNzk0NCAyNC41MTMgMTkuNjgwMSAyNC41MTMgMTkuNTQ1NlYxNy43NzAzSDE3LjM5MDdDMTYuOTE4NSAxNy43NzAzIDE2LjQ4MDEgMTcuNjU1OSAxNi4wNzU1IDE3LjQyNzNDMTUuNjcwOCAxNy4xODUyIDE1LjM0NyAxNi44NjI0IDE1LjEwNDIgMTYuNDU4OUMxNC44NzQ5IDE2LjA1NTUgMTQuNzYwMiAxNS42MTgzIDE0Ljc2MDIgMTUuMTQ3NlY2LjEwOTU0SDE2Ljk0NTVWMTUuMDg3MUMxNi45NDU1IDE1LjIyMTYgMTYuOTkyNyAxNS4zNDI2IDE3LjA4NzIgMTUuNDUwMkMxNy4xOTUxIDE1LjU0NDQgMTcuMzE2NSAxNS41OTE0IDE3LjQ1MTQgMTUuNTkxNEgyNC4wMDcyQzI0LjE0MjEgMTUuNTkxNCAyNC4yNTY3IDE1LjU0NDQgMjQuMzUxMiAxNS40NTAyQzI0LjQ1OTEgMTUuMzQyNiAyNC41MTMgMTUuMjIxNiAyNC41MTMgMTUuMDg3MVY2LjEwOTU0SDI2LjY5ODNWMTkuNjI2M0MyNi42OTgzIDIwLjExMDUgMjYuNTc2OSAyMC41NDc2IDI2LjMzNDEgMjAuOTM3NkMyNi4xMDQ4IDIxLjM0MTEgMjUuNzg3OCAyMS42NTcyIDI1LjM4MzEgMjEuODg1OEMyNC45OTE5IDIyLjEyNzkgMjQuNTUzNSAyMi4yNDkgMjQuMDY3OSAyMi4yNDlIMTYuODI0MVoiCiAgICAgICAgICAgIGZpbGw9IndoaXRlIgogICAgICAgIC8+CiAgICAgICAgPHBhdGgKICAgICAgICAgICAgZD0iTTMyLjAwMTQgMTcuNzcwM0MzMS41MTU3IDE3Ljc3MDMgMzEuMDc3MyAxNy42NDkyIDMwLjY4NjEgMTcuNDA3MUMzMC4yOTUgMTcuMTY1IDI5Ljk3OCAxNi44NDkgMjkuNzM1MSAxNi40NTg5QzI5LjQ5MjMgMTYuMDY4OSAyOS4zNzA5IDE1LjYzMTggMjkuMzcwOSAxNS4xNDc2VjguNjkxODVDMjkuMzcwOSA4LjIwNzY3IDI5LjQ5MjMgNy43NzA1NiAyOS43MzUxIDcuMzgwNTJDMjkuOTc4IDYuOTkwNDkgMzAuMjk1IDYuNjc0NDIgMzAuNjg2MSA2LjQzMjMzQzMxLjA3NzMgNi4xOTAyNCAzMS41MTU3IDYuMDY5MTkgMzIuMDAxNCA2LjA2OTE5SDM4LjY3ODZDMzkuMTY0MiA2LjA2OTE5IDM5LjYwMjYgNi4xOTAyNCAzOS45OTM4IDYuNDMyMzNDNDAuMzk4NSA2LjY2MDk3IDQwLjcxNTUgNi45NzcwNCA0MC45NDQ4IDcuMzgwNTJDNDEuMTg3NiA3Ljc4NDAxIDQxLjMwOSA4LjIyMTEyIDQxLjMwOSA4LjY5MTg1VjEzLjAwOTFIMzEuNTU2MlYxNS4wODcxQzMxLjU1NjIgMTUuMjIxNiAzMS42MDM0IDE1LjM0MjYgMzEuNjk3OSAxNS40NTAyQzMxLjgwNTggMTUuNTQ0NCAzMS45MjcyIDE1LjU5MTQgMzIuMDYyMSAxNS41OTE0SDQxLjMwOVYxNy43NzAzSDMyLjAwMTRaTTMxLjU1NjIgMTAuOTcxNUgzOS4xMDM1VjguNzUyMzdDMzkuMTAzNSA4LjYxNzg4IDM5LjA1NjMgOC41MDM1NiAzOC45NjE5IDguNDA5NDFDMzguODY3NCA4LjMwMTgxIDM4Ljc1MjggOC4yNDgwMiAzOC42MTc5IDguMjQ4MDJIMzIuMDYyMUMzMS45MjcyIDguMjQ4MDIgMzEuODA1OCA4LjMwMTgxIDMxLjY5NzkgOC40MDk0MUMzMS42MDM0IDguNTAzNTYgMzEuNTU2MiA4LjYxNzg4IDMxLjU1NjIgOC43NTIzN1YxMC45NzE1WiIKICAgICAgICAgICAgZmlsbD0id2hpdGUiCiAgICAgICAgLz4KICAgICAgICA8cGF0aAogICAgICAgICAgICBkPSJNMzkuNjU1NyAyMi40MTA0VjIwLjIxMTRINDQuNjEzQzQ0Ljc0NzkgMjAuMjExNCA0NC44NjI1IDIwLjE2NDMgNDQuOTU3IDIwLjA3MDFDNDUuMDY0OSAxOS45NzYgNDUuMTE4OCAxOS44NjE3IDQ1LjExODggMTkuNzI3MlY2LjA2OTE5SDQ3LjMwNDFWMTkuNzg3N0M0Ny4zMDQxIDIwLjI3MTkgNDcuMTgyNyAyMC43MDkgNDYuOTM5OSAyMS4wOTlDNDYuNzEwNiAyMS41MDI1IDQ2LjM5MzYgMjEuODE4NiA0NS45ODg5IDIyLjA0NzJDNDUuNTk3NyAyMi4yODkzIDQ1LjE1OTMgMjIuNDEwNCA0NC42NzM3IDIyLjQxMDRIMzkuNjU1N1pNNDUuMTE4OCA0LjQxNDlWMi4yMzYwOEg0Ny4zMDQxVjQuNDE0OUg0NS4xMTg4WiIKICAgICAgICAgICAgZmlsbD0id2hpdGUiCiAgICAgICAgLz4KICAgICAgICA8cGF0aAogICAgICAgICAgICBkPSJNNTMuMDUzOSAxNy43NzAzQzUyLjU2ODMgMTcuNzcwMyA1Mi4xMjMxIDE3LjY0OTIgNTEuNzE4NSAxNy40MDcxQzUxLjMyNzMgMTcuMTY1IDUxLjAxMDMgMTYuODQ5IDUwLjc2NzUgMTYuNDU4OUM1MC41MzgxIDE2LjA2ODkgNTAuNDIzNSAxNS42MzE4IDUwLjQyMzUgMTUuMTQ3NlYxMC44MzAzSDYwLjE1NlY4Ljc1MjM3QzYwLjE1NiA4LjYxNzg4IDYwLjEwODggOC41MDM1NiA2MC4wMTQ0IDguNDA5NDFDNTkuOTIgOC4zMDE4MSA1OS44MDUzIDguMjQ4MDIgNTkuNjcwNCA4LjI0ODAySDUwLjQyMzVWNi4wNjkxOUg1OS43MzExQzYwLjIxNjcgNi4wNjkxOSA2MC42NTUyIDYuMTkwMjQgNjEuMDQ2MyA2LjQzMjMzQzYxLjQ1MSA2LjY2MDk3IDYxLjc2OCA2Ljk3NzA0IDYxLjk5NzMgNy4zODA1MkM2Mi4yNDAyIDcuNzg0MDEgNjIuMzYxNSA4LjIyMTEyIDYyLjM2MTUgOC42OTE4NVYxNy43NzAzSDUzLjA1MzlaTTUzLjExNDYgMTUuNTkxNEg2MC4xNTZWMTIuODY3OUg1Mi42MDg4VjE1LjA4NzFDNTIuNjA4OCAxNS4yMjE2IDUyLjY1NiAxNS4zNDI2IDUyLjc1MDQgMTUuNDUwMkM1Mi44NTgzIDE1LjU0NDQgNTIuOTc5NyAxNS41OTE0IDUzLjExNDYgMTUuNTkxNFoiCiAgICAgICAgICAgIGZpbGw9IndoaXRlIgogICAgICAgIC8+CiAgICAgICAgPHBhdGgKICAgICAgICAgICAgZD0iTTY3LjcxOTEgMTcuNzcwM0M2Ny4yMzM1IDE3Ljc3MDMgNjYuNzk1MSAxNy42NDkyIDY2LjQwMzkgMTcuNDA3MUM2Ni4wMTI3IDE3LjE2NSA2NS42OTU3IDE2Ljg0OSA2NS40NTI5IDE2LjQ1ODlDNjUuMjEwMSAxNi4wNjg5IDY1LjA4ODcgMTUuNjMxOCA2NS4wODg3IDE1LjE0NzZWOC42OTE4NUM2NS4wODg3IDguMjA3NjcgNjUuMjEwMSA3Ljc3MDU2IDY1LjQ1MjkgNy4zODA1MkM2NS42OTU3IDYuOTkwNDkgNjYuMDEyNyA2LjY3NDQyIDY2LjQwMzkgNi40MzIzM0M2Ni43OTUxIDYuMTkwMjQgNjcuMjMzNSA2LjA2OTE5IDY3LjcxOTEgNi4wNjkxOUg3Ni45ODYzVjguMjQ4MDJINjcuNzc5OEM2Ny42NDUgOC4yNDgwMiA2Ny41MjM1IDguMzAxODEgNjcuNDE1NiA4LjQwOTQxQzY3LjMyMTIgOC41MDM1NiA2Ny4yNzQgOC42MTc4OCA2Ny4yNzQgOC43NTIzN1YxNS4wODcxQzY3LjI3NCAxNS4yMjE2IDY3LjMyMTIgMTUuMzQyNiA2Ny40MTU2IDE1LjQ1MDJDNjcuNTIzNSAxNS41NDQ0IDY3LjY0NSAxNS41OTE0IDY3Ljc3OTggMTUuNTkxNEg3Ny4wMjY4VjE3Ljc3MDNINjcuNzE5MVoiCiAgICAgICAgICAgIGZpbGw9IndoaXRlIgogICAgICAgIC8+CiAgICAgICAgPHBhdGgKICAgICAgICAgICAgZD0iTTc5Ljc3NTYgMTcuNzcwM1YyLjIzNjA4SDgxLjk2MDlWMTAuODMwM0g4NC41OTEzTDg4Ljk4MjEgNi4wNjkxOUg5MS40OTExVjYuNDcyNjhMODYuNTMzOCAxMS45MTk3TDkxLjQ5MTEgMTcuMzY2OFYxNy43NzAzSDg4Ljk4MjFMODQuNTkxMyAxMy4wMDkxSDgxLjk2MDlWMTcuNzcwM0g3OS43NzU2WiIKICAgICAgICAgICAgZmlsbD0id2hpdGUiCiAgICAgICAgLz4KICAgIDwvc3ZnPgo=",o1="0.7.1";var a1=0;function Ke(r,e,t,n,i,s){var o,a,l={};for(a in e)a=="ref"?o=e[a]:l[a]=e[a];var c={type:r,props:l,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--a1,__i:-1,__u:0,__source:i,__self:s};if(typeof r=="function"&&(o=r.defaultProps))for(a in o)l[a]===void 0&&(l[a]=o[a]);return nt.vnode&&nt.vnode(c),c}const ed=r=>Ke("div",{className:jn(gl.LauncherPopup,r.visible&&gl.LauncherPopup__Visible,r.className),style:{"--bottom-offset":`${r.bottomOffset??20}px`},children:[Ke("div",{children:Ke("img",{src:r1,style:{height:"18px",marginBottom:"5px"}})}),Ke("p",{className:gl.LauncherPopup_Version,children:o1}),r.children]});let Ip=null;class Dp{}Dp.render=function(r,e){Ip(r,e)};self.QrCreator=Dp;(function(r){function e(a,l,c,u){var h={},d=r(c,l);d.u(a),d.J(),u=u||0;var f=d.h(),p=d.h()+2*u;return h.text=a,h.level=l,h.version=c,h.O=p,h.a=function(x,g){return x-=u,g-=u,0>x||x>=f||0>g||g>=f?!1:d.a(x,g)},h}function t(a,l,c,u,h,d,f,p,x,g){function m(_,v,y,b,w,A,T){_?(a.lineTo(v+A,y+T),a.arcTo(v,y,b,w,d)):a.lineTo(v,y)}f?a.moveTo(l+d,c):a.moveTo(l,c),m(p,u,c,u,h,-d,0),m(x,u,h,l,h,0,-d),m(g,l,h,l,c,d,0),m(f,l,c,u,c,0,d)}function n(a,l,c,u,h,d,f,p,x,g){function m(_,v,y,b){a.moveTo(_+y,v),a.lineTo(_,v),a.lineTo(_,v+b),a.arcTo(_,v,_+y,v,d)}f&&m(l,c,d,d),p&&m(u,c,-d,d),x&&m(u,h,-d,-d),g&&m(l,h,d,-d)}function i(a,l){var c=l.fill;if(typeof c=="string")a.fillStyle=c;else{var u=c.type,h=c.colorStops;if(c=c.position.map(f=>Math.round(f*l.size)),u==="linear-gradient")var d=a.createLinearGradient.apply(a,c);else if(u==="radial-gradient")d=a.createRadialGradient.apply(a,c);else throw Error("Unsupported fill");h.forEach(([f,p])=>{d.addColorStop(f,p)}),a.fillStyle=d}}function s(a,l){e:{var c=l.text,u=l.v,h=l.N,d=l.K,f=l.P;for(h=Math.max(1,h||1),d=Math.min(40,d||40);h<=d;h+=1)try{var p=e(c,u,h,f);break e}catch{}p=void 0}if(!p)return null;for(c=a.getContext("2d"),l.background&&(c.fillStyle=l.background,c.fillRect(l.left,l.top,l.size,l.size)),u=p.O,d=l.size/u,c.beginPath(),f=0;f<u;f+=1)for(h=0;h<u;h+=1){var x=c,g=l.left+h*d,m=l.top+f*d,_=f,v=h,y=p.a,b=g+d,w=m+d,A=_-1,T=_+1,M=v-1,S=v+1,D=Math.floor(Math.min(.5,Math.max(0,l.R))*d),z=y(_,v),N=y(A,M),R=y(A,v);A=y(A,S);var O=y(_,S);S=y(T,S),v=y(T,v),T=y(T,M),_=y(_,M),g=Math.round(g),m=Math.round(m),b=Math.round(b),w=Math.round(w),z?t(x,g,m,b,w,D,!R&&!_,!R&&!O,!v&&!O,!v&&!_):n(x,g,m,b,w,D,R&&_&&N,R&&O&&A,v&&O&&S,v&&_&&T)}return i(c,l),c.fill(),a}var o={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};Ip=function(a,l){var c={};Object.assign(c,o,a),c.N=c.minVersion,c.K=c.maxVersion,c.v=c.ecLevel,c.left=c.left,c.top=c.top,c.size=c.size,c.fill=c.fill,c.background=c.background,c.text=c.text,c.R=c.radius,c.P=c.quiet,l instanceof HTMLCanvasElement?((l.width!==c.size||l.height!==c.size)&&(l.width=c.size,l.height=c.size),l.getContext("2d").clearRect(0,0,l.width,l.height),s(l,c)):(a=document.createElement("canvas"),a.width=c.size,a.height=c.size,c=s(a,c),l.appendChild(c))}})(function(){function r(l){var c=t.s(l);return{S:function(){return 4},b:function(){return c.length},write:function(u){for(var h=0;h<c.length;h+=1)u.put(c[h],8)}}}function e(){var l=[],c=0,u={B:function(){return l},c:function(h){return(l[Math.floor(h/8)]>>>7-h%8&1)==1},put:function(h,d){for(var f=0;f<d;f+=1)u.m((h>>>d-f-1&1)==1)},f:function(){return c},m:function(h){var d=Math.floor(c/8);l.length<=d&&l.push(0),h&&(l[d]|=128>>>c%8),c+=1}};return u}function t(l,c){function u(_,v){for(var y=-1;7>=y;y+=1)if(!(-1>=_+y||p<=_+y))for(var b=-1;7>=b;b+=1)-1>=v+b||p<=v+b||(f[_+y][v+b]=0<=y&&6>=y&&(b==0||b==6)||0<=b&&6>=b&&(y==0||y==6)||2<=y&&4>=y&&2<=b&&4>=b)}function h(_,v){for(var y=p=4*l+17,b=Array(y),w=0;w<y;w+=1){b[w]=Array(y);for(var A=0;A<y;A+=1)b[w][A]=null}for(f=b,u(0,0),u(p-7,0),u(0,p-7),y=s.G(l),b=0;b<y.length;b+=1)for(w=0;w<y.length;w+=1){A=y[b];var T=y[w];if(f[A][T]==null)for(var M=-2;2>=M;M+=1)for(var S=-2;2>=S;S+=1)f[A+M][T+S]=M==-2||M==2||S==-2||S==2||M==0&&S==0}for(y=8;y<p-8;y+=1)f[y][6]==null&&(f[y][6]=y%2==0);for(y=8;y<p-8;y+=1)f[6][y]==null&&(f[6][y]=y%2==0);for(y=s.w(d<<3|v),b=0;15>b;b+=1)w=!_&&(y>>b&1)==1,f[6>b?b:8>b?b+1:p-15+b][8]=w,f[8][8>b?p-b-1:9>b?15-b:14-b]=w;if(f[p-8][8]=!_,7<=l){for(y=s.A(l),b=0;18>b;b+=1)w=!_&&(y>>b&1)==1,f[Math.floor(b/3)][b%3+p-8-3]=w;for(b=0;18>b;b+=1)w=!_&&(y>>b&1)==1,f[b%3+p-8-3][Math.floor(b/3)]=w}if(x==null){for(_=a.I(l,d),y=e(),b=0;b<g.length;b+=1)w=g[b],y.put(4,4),y.put(w.b(),s.f(4,l)),w.write(y);for(b=w=0;b<_.length;b+=1)w+=_[b].j;if(y.f()>8*w)throw Error("code length overflow. ("+y.f()+">"+8*w+")");for(y.f()+4<=8*w&&y.put(0,4);y.f()%8!=0;)y.m(!1);for(;!(y.f()>=8*w)&&(y.put(236,8),!(y.f()>=8*w));)y.put(17,8);var D=0;for(w=b=0,A=Array(_.length),T=Array(_.length),M=0;M<_.length;M+=1){var z=_[M].j,N=_[M].o-z;for(b=Math.max(b,z),w=Math.max(w,N),A[M]=Array(z),S=0;S<A[M].length;S+=1)A[M][S]=255&y.B()[S+D];for(D+=z,S=s.C(N),z=n(A[M],S.b()-1).l(S),T[M]=Array(S.b()-1),S=0;S<T[M].length;S+=1)N=S+z.b()-T[M].length,T[M][S]=0<=N?z.c(N):0}for(S=y=0;S<_.length;S+=1)y+=_[S].o;for(y=Array(y),S=D=0;S<b;S+=1)for(M=0;M<_.length;M+=1)S<A[M].length&&(y[D]=A[M][S],D+=1);for(S=0;S<w;S+=1)for(M=0;M<_.length;M+=1)S<T[M].length&&(y[D]=T[M][S],D+=1);x=y}for(_=x,y=-1,b=p-1,w=7,A=0,v=s.F(v),T=p-1;0<T;T-=2)for(T==6&&--T;;){for(M=0;2>M;M+=1)f[b][T-M]==null&&(S=!1,A<_.length&&(S=(_[A]>>>w&1)==1),v(b,T-M)&&(S=!S),f[b][T-M]=S,--w,w==-1&&(A+=1,w=7));if(b+=y,0>b||p<=b){b-=y,y=-y;break}}}var d=i[c],f=null,p=0,x=null,g=[],m={u:function(_){_=r(_),g.push(_),x=null},a:function(_,v){if(0>_||p<=_||0>v||p<=v)throw Error(_+","+v);return f[_][v]},h:function(){return p},J:function(){for(var _=0,v=0,y=0;8>y;y+=1){h(!0,y);var b=s.D(m);(y==0||_>b)&&(_=b,v=y)}h(!1,v)}};return m}function n(l,c){if(typeof l.length>"u")throw Error(l.length+"/"+c);var u=function(){for(var d=0;d<l.length&&l[d]==0;)d+=1;for(var f=Array(l.length-d+c),p=0;p<l.length-d;p+=1)f[p]=l[p+d];return f}(),h={c:function(d){return u[d]},b:function(){return u.length},multiply:function(d){for(var f=Array(h.b()+d.b()-1),p=0;p<h.b();p+=1)for(var x=0;x<d.b();x+=1)f[p+x]^=o.i(o.g(h.c(p))+o.g(d.c(x)));return n(f,0)},l:function(d){if(0>h.b()-d.b())return h;for(var f=o.g(h.c(0))-o.g(d.c(0)),p=Array(h.b()),x=0;x<h.b();x+=1)p[x]=h.c(x);for(x=0;x<d.b();x+=1)p[x]^=o.i(o.g(d.c(x))+f);return n(p,0).l(d)}};return h}t.s=function(l){for(var c=[],u=0;u<l.length;u++){var h=l.charCodeAt(u);128>h?c.push(h):2048>h?c.push(192|h>>6,128|h&63):55296>h||57344<=h?c.push(224|h>>12,128|h>>6&63,128|h&63):(u++,h=65536+((h&1023)<<10|l.charCodeAt(u)&1023),c.push(240|h>>18,128|h>>12&63,128|h>>6&63,128|h&63))}return c};var i={L:1,M:0,Q:3,H:2},s=function(){function l(h){for(var d=0;h!=0;)d+=1,h>>>=1;return d}var c=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],u={w:function(h){for(var d=h<<10;0<=l(d)-l(1335);)d^=1335<<l(d)-l(1335);return(h<<10|d)^21522},A:function(h){for(var d=h<<12;0<=l(d)-l(7973);)d^=7973<<l(d)-l(7973);return h<<12|d},G:function(h){return c[h-1]},F:function(h){switch(h){case 0:return function(d,f){return(d+f)%2==0};case 1:return function(d){return d%2==0};case 2:return function(d,f){return f%3==0};case 3:return function(d,f){return(d+f)%3==0};case 4:return function(d,f){return(Math.floor(d/2)+Math.floor(f/3))%2==0};case 5:return function(d,f){return d*f%2+d*f%3==0};case 6:return function(d,f){return(d*f%2+d*f%3)%2==0};case 7:return function(d,f){return(d*f%3+(d+f)%2)%2==0};default:throw Error("bad maskPattern:"+h)}},C:function(h){for(var d=n([1],0),f=0;f<h;f+=1)d=d.multiply(n([1,o.i(f)],0));return d},f:function(h,d){if(h!=4||1>d||40<d)throw Error("mode: "+h+"; type: "+d);return 10>d?8:16},D:function(h){for(var d=h.h(),f=0,p=0;p<d;p+=1)for(var x=0;x<d;x+=1){for(var g=0,m=h.a(p,x),_=-1;1>=_;_+=1)if(!(0>p+_||d<=p+_))for(var v=-1;1>=v;v+=1)0>x+v||d<=x+v||(_!=0||v!=0)&&m==h.a(p+_,x+v)&&(g+=1);5<g&&(f+=3+g-5)}for(p=0;p<d-1;p+=1)for(x=0;x<d-1;x+=1)g=0,h.a(p,x)&&(g+=1),h.a(p+1,x)&&(g+=1),h.a(p,x+1)&&(g+=1),h.a(p+1,x+1)&&(g+=1),(g==0||g==4)&&(f+=3);for(p=0;p<d;p+=1)for(x=0;x<d-6;x+=1)h.a(p,x)&&!h.a(p,x+1)&&h.a(p,x+2)&&h.a(p,x+3)&&h.a(p,x+4)&&!h.a(p,x+5)&&h.a(p,x+6)&&(f+=40);for(x=0;x<d;x+=1)for(p=0;p<d-6;p+=1)h.a(p,x)&&!h.a(p+1,x)&&h.a(p+2,x)&&h.a(p+3,x)&&h.a(p+4,x)&&!h.a(p+5,x)&&h.a(p+6,x)&&(f+=40);for(x=g=0;x<d;x+=1)for(p=0;p<d;p+=1)h.a(p,x)&&(g+=1);return f+=Math.abs(100*g/d/d-50)/5*10}};return u}(),o=function(){for(var l=Array(256),c=Array(256),u=0;8>u;u+=1)l[u]=1<<u;for(u=8;256>u;u+=1)l[u]=l[u-4]^l[u-5]^l[u-6]^l[u-8];for(u=0;255>u;u+=1)c[l[u]]=u;return{g:function(h){if(1>h)throw Error("glog("+h+")");return c[h]},i:function(h){for(;0>h;)h+=255;for(;256<=h;)h-=255;return l[h]}}}(),a=function(){function l(h,d){switch(d){case i.L:return c[4*(h-1)];case i.M:return c[4*(h-1)+1];case i.Q:return c[4*(h-1)+2];case i.H:return c[4*(h-1)+3]}}var c=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],u={I:function(h,d){var f=l(h,d);if(typeof f>"u")throw Error("bad rs block @ typeNumber:"+h+"/errorCorrectLevel:"+d);h=f.length/3,d=[];for(var p=0;p<h;p+=1)for(var x=f[3*p],g=f[3*p+1],m=f[3*p+2],_=0;_<x;_+=1){var v=m,y={};y.o=g,y.j=v,d.push(y)}return d}};return u}();return t}());const l1=QrCreator,c1=(r={})=>({copy:async t=>{if(navigator.clipboard){const n=navigator.clipboard.writeText(t);return r.onError&&n.catch(r.onError),r.onCopy&&n.then(r.onCopy),await n}else r.onError&&r.onError(new DOMException("No clipboard in navigator"))}}),h1="ejx-CopyText",u1="ejx-CopyText_UrlText",d1="ejx-CopyText_UrlText__Selectable",f1="ejx-CopyText_Copy",p1="ejx-CopyText_CopyIcon",m1="ejx-CopyText_CopyIcon__Visible",g1="ejx-CopyText_CopyIcon__Check",x1="ejx-CopyText_Popup",Vn={CopyText:h1,CopyText_UrlText:u1,CopyText_UrlText__Selectable:d1,CopyText_Copy:f1,CopyText_CopyIcon:p1,CopyText_CopyIcon__Visible:m1,CopyText_CopyIcon__Check:g1,CopyText_Popup:x1},Lp=r=>{const[e,t]=St(!0),[n,i]=St(!1),s=$u(),{copy:o}=c1({onCopy:()=>{r.onCopy&&r.onCopy(),i(!0),s.current!==void 0&&(window.clearTimeout(s.current),s.current=void 0),s.current=window.setTimeout(()=>{s.current=void 0,i(!1)},1e3)}});js(()=>{if(!r.parentOpen){const c=document.getSelection();c&&c.removeAllRanges()}},[r.parentOpen]);const a=$u(null),l=Ep(()=>{o(r.text).catch(()=>{t(!1),a.current&&Lb(a.current)})},[o,r.text]);return Ke("div",{className:jn(Vn.CopyText,r.className),onClick:l,children:[Ke("span",{ref:a,className:jn(Vn.CopyText_UrlText,!e&&Vn.CopyText_UrlText__Selectable),children:r.text}),e&&Ke("div",{className:Vn.CopyText_Copy,children:[Ke("svg",{className:jn(Vn.CopyText_CopyIcon,!n&&Vn.CopyText_CopyIcon__Visible),width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[Ke("path",{d:"M5.75 4.75H10.25V1.75H5.75V4.75Z"}),Ke("path",{d:"M3.25 2.88379C2.9511 3.05669 2.75 3.37987 2.75 3.75001V13.25C2.75 13.8023 3.19772 14.25 3.75 14.25H12.25C12.8023 14.25 13.25 13.8023 13.25 13.25V3.75001C13.25 3.37987 13.0489 3.05669 12.75 2.88379"})]}),Ke("svg",{className:jn(Vn.CopyText_CopyIcon,Vn.CopyText_CopyIcon__Check,n&&Vn.CopyText_CopyIcon__Visible),width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:Ke("path",{d:"M13.25 4.75L6 12L2.75 8.75"})})]})]})},v1="ejx-DesktopPopupContents",y1="ejx-DesktopPopupContents_Qr",_1="ejx-DesktopPopupContents_Text",td={DesktopPopupContents:v1,DesktopPopupContents_Qr:y1,DesktopPopupContents_Text:_1},M1=r=>{const[e,t]=St();return js(()=>{e&&l1.render({text:r.targetUrl,radius:.2,background:null,fill:"#000",size:512},e)},[r.targetUrl,e]),Ke("div",{className:td.DesktopPopupContents,children:[Ke("canvas",{ref:n=>t(n),className:td.DesktopPopupContents_Qr,id:"launch-button-qr",onTouchStart:n=>n.preventDefault()}),"Scan the QR code to Play in XR",Ke(Lp,{text:r.targetUrl,parentOpen:r.visible})]})},b1=r=>{const[e,t]=St(null);return js(()=>{const n=i=>{e&&!e.contains(i.target)&&r(i)};return e&&window.addEventListener("click",n),()=>{window.removeEventListener("click",n)}},[e,r]),t};function S1(){const[r,e]=St({width:void 0,height:void 0});return js(()=>{function t(){e({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",t),t(),()=>window.removeEventListener("resize",t)},[]),r}const w1={"immersive-ar":"AR","immersive-vr":"VR"},T1=r=>{var e,t,n,i,s;const{session:o,currentSessionType:a,tryStartXR:l,tryStopXR:c}=Bb({xrSessionBuilder:r.xrSessionBuilder,xrSessionEnder:r.xrSessionEnder,onBeforeStart:r.onBeforeStart,onStart:r.onStart,onBeforeEnd:r.onBeforeEnd,onEnd:r.onEnd,onError:r.onError}),[u,h]=St(!0),[d,f]=St(((e=r.appearance)==null?void 0:e.redirectPopupOpen)??!1),[p,x]=St(!1),[g,m]=St(r.launchUrl??window.location.toString()),[_,v]=St(r.launchBaseUrl??"https://play.eyejack.xyz/link?url="),[y,b]=St(((t=r.appearance)==null?void 0:t.buttonText)??"Play"),[w,A]=St({"--ejx-border-color":((n=r.appearance)==null?void 0:n.borderColor)??"#C0FB00","--ejx-border-color-deemphasized":((i=r.appearance)==null?void 0:i.deemphasizedBorderColor)??"#597500"}),T=_+(Rb(g)?encodeURIComponent(g):g),M=b1(()=>{f(!1),x(!1),z&&N(!1)}),[S,D]=St([]),[z,N]=St(!1),[R,O]=St(),$=Ep(re=>{l(re).catch(B=>{B instanceof DOMException&&(B.name==="SecurityError"||B.name==="NotSupportedError"?(x(!0),re==="immersive-ar"?O(bt.USER_REJECT_AR):re==="immersive-vr"&&O(bt.USER_REJECT_VR),r.onError&&r.onError(new aa)):r.onError&&r.onError(new Cp(B.message)))})},[l,r]);Ab(()=>{const re=B=>{if(B.data.type==="@eyejack/ejx-launcher-button:configure"){const{data:Q}=B;Q.launchUrl!==void 0&&m(Q.launchUrl),Q.launchBaseUrl!==void 0&&v(Q.launchBaseUrl);const{appearance:le}=Q;le&&(le.showButton!==void 0&&h(le.showButton),le.buttonText&&b(le.buttonText),le.borderColor&&A(ue=>({...ue,"--ejx-border-color":le.borderColor})),le.deemphasizedBorderColor&&A(ue=>({...ue,"--ejx-border-color-deemphasized":le.deemphasizedBorderColor})))}};return window.addEventListener("message",re),()=>{window.removeEventListener("@eyejack/ejx-launcher-button:configure",re)}},[]),window.EJXStartXr=$;const K=async()=>{const{status:re,sessions:B}=await Db(r.supportedSessionTypes);O(re);const Q=kb(re);if(Q&&r.onError&&r.onError(Q),o)c();else if(re===bt.OK)if(B.length===1){$(B[0]);return}else{D(B),N(!z);return}else if(re===bt.IOS)if(Nb()){const le=new CustomEvent("@eyejack/ejx-launcher-button:redirect",{detail:{launchUrl:T}});Ko(le);let ue=!1;const H=()=>{ue=!0,x(!1),window.removeEventListener("blur",H)};window.addEventListener("blur",H,{once:!0}),setTimeout(()=>{ue||(x(!0),O(bt.SHOW_IFRAME_REDIRECT))},500)}else window.location.href=T;else re===bt.SHOW_POPUP?f(!d):x(!0)};js(()=>{o||N(!1)},[o]);const j=rh(()=>{if(p){if(R===bt.NO_HTTPS)return{title:"Uh oh!",description:"WebXR requires HTTPS to work.  Make sure the website has a valid https certificate."};if(R===bt.ANDROID_NO_XR)return{title:"Uh oh!",description:"This browser doesn't support WebXR.  Please use the latest Google Chrome.",copyText:T};if(R===bt.NAVIGATOR_XR_PERMISSIONS)return{title:"Uh oh!",description:"The device, website, or iframe does not permit XR sessions. Try allowing WebXR in permissions."};if(R===bt.USER_REJECT_VR)return{title:"Uh oh!",description:"Please allow Virtual Reality permissions"};if(R===bt.USER_REJECT_AR)return{title:"Uh oh!",description:"Please allow Augmented Reality permissions"};if(R===bt.SHOW_IFRAME_REDIRECT)return{description:"Copy link to Play in XR",copyText:T};if(R===bt.NO_FULLSCREEN)return{description:"Copy link to Play in XR",copyText:T};console.error("Unhandled status error.")}},[R,p,T]),{height:ee}=S1();if(!u)return null;const{appearance:te}=r,ye=(te==null?void 0:te.showCloseButton)!==void 0?te.showCloseButton:!0;return Ke("div",{className:jn(Ft.LaunchRoot,z&&Ft.LaunchRoot__pickvisible,((te==null?void 0:te.variant)==="default"||!(te!=null&&te.variant))&&Ft.LaunchRoot__variantdefault,(te==null?void 0:te.variant)==="minimal"&&Ft.LaunchRoot__variantminimal),style:{"--win-height":`${ee}px`,...w},children:[ye&&o&&a&&Ke("svg",{className:Ft.CloseButton,onClickCapture:K,width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Ke("path",{d:"M3 3L29 29",stroke:"white",strokeWidth:"2",strokeLinecap:"round"}),Ke("path",{d:"M3 29L29 3",stroke:"white",strokeWidth:"2",strokeLinecap:"round"})]}),Ke("div",{ref:re=>M(re),className:Ft.LaunchButtonWrapper,children:[(!o||!a)&&Ke("div",{className:Ft.LaunchButton,onClickCapture:K,children:Ke("button",{className:jn(Ft.Button,((s=r.appearance)==null?void 0:s.variant)==="minimal"&&Ft.Button__Small,z&&Ft.LaunchButton__Deemphasize),children:y})}),Ke("div",{className:jn(Ft.SessionButtonWrapper,z&&Ft.SessionButtonWrapper__Visible),children:S.map(re=>Ke("button",{className:jn(Ft.Button,Ft.Button__Small),onClickCapture:()=>{$(re),N(!1)},children:w1[re]},re))}),Ke(ed,{visible:d,children:Ke(M1,{targetUrl:T,supportedTypes:r.supportedSessionTypes,visible:d})}),Ke(ed,{visible:!!(j&&p),children:[Ke("h3",{className:Ft.EJXText,children:j==null?void 0:j.title}),Ke("p",{className:Ft.EJXText,children:j==null?void 0:j.description}),(j==null?void 0:j.copyText)&&Ke(Lp,{text:j.copyText,parentOpen:!!(j&&p)})]})]})]})},E1="immersive-ar",A1="immersive-vr",C1=r=>{if(!r.arOptions&&!r.vrOptions)throw new Error("@eyejack/ejx-launcher-button requires `arOptions` or `vrOptions` to be provided.");const e=[];r.arOptions&&e.push(E1),r.vrOptions&&e.push(A1);const t=document.createElement("div");return t.setAttribute("id","ejx-launcher-button"),hb(Mp(T1,{xrSessionBuilder:r.xrSessionBuilder,xrSessionEnder:r.xrSessionEnder,supportedSessionTypes:e,onBeforeStart:r.onBeforeStart,onBeforeEnd:r.onBeforeEnd,onStart:r.onStart,onEnd:r.onEnd,onError:r.onError,launchUrl:r.launchUrl,launchBaseUrl:r.launchBaseUrl,appearance:r.appearance}),t),(r.container??document.body).appendChild(t),t},P1=({renderer:r,arReferenceSpace:e="local",vrReferenceSpace:t,...n})=>{const i=C1({...n,xrSessionBuilder:async s=>{var o;const a=(()=>{if(s==="immersive-ar"&&n.arOptions)return n.arOptions;if(s==="immersive-vr"&&n.vrOptions)return n.vrOptions;throw new Error(`@eyejack/ejx-launcher-button: Trying to build xr session with session type ${s}.  This session type is not supported.`)})();a.optionalFeatures||(a.optionalFeatures=[]),a.optionalFeatures.includes("dom-overlay")||a.optionalFeatures.push("dom-overlay"),a.domOverlay={root:n.container??i};const l=await((o=navigator.xr)==null?void 0:o.requestSession(s,a));if(!l)throw new Error("Session could not be created.");return s==="immersive-ar"&&e&&r.xr.setReferenceSpaceType(e),s==="immersive-vr"&&t&&r.xr.setReferenceSpaceType(t),await r.xr.setSession(l),l},xrSessionEnder:s=>s.end()});return i},nd={type:"change"},xl={type:"start"},id={type:"end"};class ah extends Dn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new E,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:wi.ROTATE,MIDDLE:wi.DOLLY,RIGHT:wi.PAN},this.touches={ONE:Ti.ROTATE,TWO:Ti.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",ze),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ze),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(nd),n.update(),s=i.NONE},this.update=function(){const L=new E,Z=new Nt().setFromUnitVectors(e.up,new E(0,1,0)),V=Z.clone().invert(),me=new E,Me=new Nt,Te=2*Math.PI;return function(){const Se=n.object.position;L.copy(Se).sub(n.target),L.applyQuaternion(Z),a.setFromVector3(L),n.autoRotate&&s===i.NONE&&M(A()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Ne=n.minAzimuthAngle,Ve=n.maxAzimuthAngle;return isFinite(Ne)&&isFinite(Ve)&&(Ne<-Math.PI?Ne+=Te:Ne>Math.PI&&(Ne-=Te),Ve<-Math.PI?Ve+=Te:Ve>Math.PI&&(Ve-=Te),Ne<=Ve?a.theta=Math.max(Ne,Math.min(Ve,a.theta)):a.theta=a.theta>(Ne+Ve)/2?Math.max(Ne,a.theta):Math.min(Ve,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),L.setFromSpherical(a),L.applyQuaternion(V),Se.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||me.distanceToSquared(n.object.position)>o||8*(1-Me.dot(n.object.quaternion))>o?(n.dispatchEvent(nd),me.copy(n.object.position),Me.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",C),n.domElement.removeEventListener("pointerdown",ne),n.domElement.removeEventListener("pointercancel",he),n.domElement.removeEventListener("wheel",Ee),n.domElement.removeEventListener("pointermove",_e),n.domElement.removeEventListener("pointerup",he),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",ze),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new sc,l=new sc;let c=1;const u=new E;let h=!1;const d=new W,f=new W,p=new W,x=new W,g=new W,m=new W,_=new W,v=new W,y=new W,b=[],w={};function A(){return 2*Math.PI/60/60*n.autoRotateSpeed}function T(){return Math.pow(.95,n.zoomSpeed)}function M(L){l.theta-=L}function S(L){l.phi-=L}const D=function(){const L=new E;return function(V,me){L.setFromMatrixColumn(me,0),L.multiplyScalar(-V),u.add(L)}}(),z=function(){const L=new E;return function(V,me){n.screenSpacePanning===!0?L.setFromMatrixColumn(me,1):(L.setFromMatrixColumn(me,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(V),u.add(L)}}(),N=function(){const L=new E;return function(V,me){const Me=n.domElement;if(n.object.isPerspectiveCamera){const Te=n.object.position;L.copy(Te).sub(n.target);let xe=L.length();xe*=Math.tan(n.object.fov/2*Math.PI/180),D(2*V*xe/Me.clientHeight,n.object.matrix),z(2*me*xe/Me.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(D(V*(n.object.right-n.object.left)/n.object.zoom/Me.clientWidth,n.object.matrix),z(me*(n.object.top-n.object.bottom)/n.object.zoom/Me.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function R(L){n.object.isPerspectiveCamera?c/=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*L)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function O(L){n.object.isPerspectiveCamera?c*=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/L)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function $(L){d.set(L.clientX,L.clientY)}function K(L){_.set(L.clientX,L.clientY)}function j(L){x.set(L.clientX,L.clientY)}function ee(L){f.set(L.clientX,L.clientY),p.subVectors(f,d).multiplyScalar(n.rotateSpeed);const Z=n.domElement;M(2*Math.PI*p.x/Z.clientHeight),S(2*Math.PI*p.y/Z.clientHeight),d.copy(f),n.update()}function te(L){v.set(L.clientX,L.clientY),y.subVectors(v,_),y.y>0?R(T()):y.y<0&&O(T()),_.copy(v),n.update()}function ye(L){g.set(L.clientX,L.clientY),m.subVectors(g,x).multiplyScalar(n.panSpeed),N(m.x,m.y),x.copy(g),n.update()}function re(L){L.deltaY<0?O(T()):L.deltaY>0&&R(T()),n.update()}function B(L){let Z=!1;switch(L.code){case n.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?S(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(0,n.keyPanSpeed),Z=!0;break;case n.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?S(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(0,-n.keyPanSpeed),Z=!0;break;case n.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?M(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(n.keyPanSpeed,0),Z=!0;break;case n.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?M(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(-n.keyPanSpeed,0),Z=!0;break}Z&&(L.preventDefault(),n.update())}function Q(){if(b.length===1)d.set(b[0].pageX,b[0].pageY);else{const L=.5*(b[0].pageX+b[1].pageX),Z=.5*(b[0].pageY+b[1].pageY);d.set(L,Z)}}function le(){if(b.length===1)x.set(b[0].pageX,b[0].pageY);else{const L=.5*(b[0].pageX+b[1].pageX),Z=.5*(b[0].pageY+b[1].pageY);x.set(L,Z)}}function ue(){const L=b[0].pageX-b[1].pageX,Z=b[0].pageY-b[1].pageY,V=Math.sqrt(L*L+Z*Z);_.set(0,V)}function H(){n.enableZoom&&ue(),n.enablePan&&le()}function Le(){n.enableZoom&&ue(),n.enableRotate&&Q()}function De(L){if(b.length==1)f.set(L.pageX,L.pageY);else{const V=fe(L),me=.5*(L.pageX+V.x),Me=.5*(L.pageY+V.y);f.set(me,Me)}p.subVectors(f,d).multiplyScalar(n.rotateSpeed);const Z=n.domElement;M(2*Math.PI*p.x/Z.clientHeight),S(2*Math.PI*p.y/Z.clientHeight),d.copy(f)}function ce(L){if(b.length===1)g.set(L.pageX,L.pageY);else{const Z=fe(L),V=.5*(L.pageX+Z.x),me=.5*(L.pageY+Z.y);g.set(V,me)}m.subVectors(g,x).multiplyScalar(n.panSpeed),N(m.x,m.y),x.copy(g)}function be(L){const Z=fe(L),V=L.pageX-Z.x,me=L.pageY-Z.y,Me=Math.sqrt(V*V+me*me);v.set(0,Me),y.set(0,Math.pow(v.y/_.y,n.zoomSpeed)),R(y.y),_.copy(v)}function ie(L){n.enableZoom&&be(L),n.enablePan&&ce(L)}function q(L){n.enableZoom&&be(L),n.enableRotate&&De(L)}function ne(L){n.enabled!==!1&&(b.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",_e),n.domElement.addEventListener("pointerup",he)),G(L),L.pointerType==="touch"?Xe(L):Pe(L))}function _e(L){n.enabled!==!1&&(L.pointerType==="touch"?I(L):Ie(L))}function he(L){se(L),b.length===0&&(n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",_e),n.domElement.removeEventListener("pointerup",he)),n.dispatchEvent(id),s=i.NONE}function Pe(L){let Z;switch(L.button){case 0:Z=n.mouseButtons.LEFT;break;case 1:Z=n.mouseButtons.MIDDLE;break;case 2:Z=n.mouseButtons.RIGHT;break;default:Z=-1}switch(Z){case wi.DOLLY:if(n.enableZoom===!1)return;K(L),s=i.DOLLY;break;case wi.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;j(L),s=i.PAN}else{if(n.enableRotate===!1)return;$(L),s=i.ROTATE}break;case wi.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;$(L),s=i.ROTATE}else{if(n.enablePan===!1)return;j(L),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(xl)}function Ie(L){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;ee(L);break;case i.DOLLY:if(n.enableZoom===!1)return;te(L);break;case i.PAN:if(n.enablePan===!1)return;ye(L);break}}function Ee(L){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(L.preventDefault(),n.dispatchEvent(xl),re(L),n.dispatchEvent(id))}function ze(L){n.enabled===!1||n.enablePan===!1||B(L)}function Xe(L){switch(oe(L),b.length){case 1:switch(n.touches.ONE){case Ti.ROTATE:if(n.enableRotate===!1)return;Q(),s=i.TOUCH_ROTATE;break;case Ti.PAN:if(n.enablePan===!1)return;le(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Ti.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;H(),s=i.TOUCH_DOLLY_PAN;break;case Ti.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Le(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(xl)}function I(L){switch(oe(L),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;De(L),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ce(L),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ie(L),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;q(L),n.update();break;default:s=i.NONE}}function C(L){n.enabled!==!1&&L.preventDefault()}function G(L){b.push(L)}function se(L){delete w[L.pointerId];for(let Z=0;Z<b.length;Z++)if(b[Z].pointerId==L.pointerId){b.splice(Z,1);return}}function oe(L){let Z=w[L.pointerId];Z===void 0&&(Z=new W,w[L.pointerId]=Z),Z.set(L.pageX,L.pageY)}function fe(L){const Z=L.pointerId===b[0].pointerId?b[1]:b[0];return w[Z.pointerId]}n.domElement.addEventListener("contextmenu",C),n.domElement.addEventListener("pointerdown",ne),n.domElement.addEventListener("pointercancel",he),n.domElement.addEventListener("wheel",Ee,{passive:!1}),this.update()}}class I1 extends ip{constructor(e){super(e),this.type=Cn}parse(e){const a=function(v,y){switch(v){case 1:console.error("THREE.RGBELoader Read Error: "+(y||""));break;case 2:console.error("THREE.RGBELoader Write Error: "+(y||""));break;case 3:console.error("THREE.RGBELoader Bad File Format: "+(y||""));break;default:case 4:console.error("THREE.RGBELoader: Error: "+(y||""))}return-1},h=`
`,d=function(v,y,b){y=y||1024;let A=v.pos,T=-1,M=0,S="",D=String.fromCharCode.apply(null,new Uint16Array(v.subarray(A,A+128)));for(;0>(T=D.indexOf(h))&&M<y&&A<v.byteLength;)S+=D,M+=D.length,A+=128,D+=String.fromCharCode.apply(null,new Uint16Array(v.subarray(A,A+128)));return-1<T?(b!==!1&&(v.pos+=M+T+1),S+D.slice(0,T)):!1},f=function(v){const y=/^#\?(\S+)/,b=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,w=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,A=/^\s*FORMAT=(\S+)\s*$/,T=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,M={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let S,D;if(v.pos>=v.byteLength||!(S=d(v)))return a(1,"no header found");if(!(D=S.match(y)))return a(3,"bad initial token");for(M.valid|=1,M.programtype=D[1],M.string+=S+`
`;S=d(v),S!==!1;){if(M.string+=S+`
`,S.charAt(0)==="#"){M.comments+=S+`
`;continue}if((D=S.match(b))&&(M.gamma=parseFloat(D[1])),(D=S.match(w))&&(M.exposure=parseFloat(D[1])),(D=S.match(A))&&(M.valid|=2,M.format=D[1]),(D=S.match(T))&&(M.valid|=4,M.height=parseInt(D[1],10),M.width=parseInt(D[2],10)),M.valid&2&&M.valid&4)break}return M.valid&2?M.valid&4?M:a(3,"missing image size specifier"):a(3,"missing format specifier")},p=function(v,y,b){const w=y;if(w<8||w>32767||v[0]!==2||v[1]!==2||v[2]&128)return new Uint8Array(v);if(w!==(v[2]<<8|v[3]))return a(3,"wrong scanline width");const A=new Uint8Array(4*y*b);if(!A.length)return a(4,"unable to allocate buffer space");let T=0,M=0;const S=4*w,D=new Uint8Array(4),z=new Uint8Array(S);let N=b;for(;N>0&&M<v.byteLength;){if(M+4>v.byteLength)return a(1);if(D[0]=v[M++],D[1]=v[M++],D[2]=v[M++],D[3]=v[M++],D[0]!=2||D[1]!=2||(D[2]<<8|D[3])!=w)return a(3,"bad rgbe scanline format");let R=0,O;for(;R<S&&M<v.byteLength;){O=v[M++];const K=O>128;if(K&&(O-=128),O===0||R+O>S)return a(3,"bad scanline data");if(K){const j=v[M++];for(let ee=0;ee<O;ee++)z[R++]=j}else z.set(v.subarray(M,M+O),R),R+=O,M+=O}const $=w;for(let K=0;K<$;K++){let j=0;A[T]=z[K+j],j+=w,A[T+1]=z[K+j],j+=w,A[T+2]=z[K+j],j+=w,A[T+3]=z[K+j],T+=4}N--}return A},x=function(v,y,b,w){const A=v[y+3],T=Math.pow(2,A-128)/255;b[w+0]=v[y+0]*T,b[w+1]=v[y+1]*T,b[w+2]=v[y+2]*T,b[w+3]=1},g=function(v,y,b,w){const A=v[y+3],T=Math.pow(2,A-128)/255;b[w+0]=rr.toHalfFloat(Math.min(v[y+0]*T,65504)),b[w+1]=rr.toHalfFloat(Math.min(v[y+1]*T,65504)),b[w+2]=rr.toHalfFloat(Math.min(v[y+2]*T,65504)),b[w+3]=rr.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;const _=f(m);if(_!==-1){const v=_.width,y=_.height,b=p(m.subarray(m.pos),v,y);if(b!==-1){let w,A,T;switch(this.type){case dn:T=b.length/4;const M=new Float32Array(T*4);for(let D=0;D<T;D++)x(b,D*4,M,D*4);w=M,A=dn;break;case Cn:T=b.length/4;const S=new Uint16Array(T*4);for(let D=0;D<T;D++)g(b,D*4,S,D*4);w=S,A=Cn;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type);break}return{width:v,height:y,data:w,header:_.string,gamma:_.gamma,exposure:_.exposure,type:A}}}return null}setDataType(e){return this.type=e,this}load(e,t,n,i){function s(o,a){switch(o.type){case dn:case Cn:o.encoding=Mn,o.minFilter=st,o.magFilter=st,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,s,n,i)}}const ir=new E;function hn(r,e,t,n,i,s){const o=2*Math.PI*i/4,a=Math.max(s-2*i,0),l=Math.PI/4;ir.copy(e),ir[n]=0,ir.normalize();const c=.5*o/(o+a),u=1-ir.angleTo(r)/l;return Math.sign(ir[t])===1?u*c:a/(o+a)+c+c*(1-u)}class D1 extends Rn{constructor(e=1,t=1,n=1,i=2,s=.1){if(i=i*2+1,s=Math.min(e/2,t/2,n/2,s),super(1,1,1,i,i,i),i===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new E,l=new E,c=new E(e,t,n).divideScalar(2).subScalar(s),u=this.attributes.position.array,h=this.attributes.normal.array,d=this.attributes.uv.array,f=u.length/6,p=new E,x=.5/i;for(let g=0,m=0;g<u.length;g+=3,m+=2)switch(a.fromArray(u,g),l.copy(a),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),u[g+0]=c.x*Math.sign(a.x)+l.x*s,u[g+1]=c.y*Math.sign(a.y)+l.y*s,u[g+2]=c.z*Math.sign(a.z)+l.z*s,h[g+0]=l.x,h[g+1]=l.y,h[g+2]=l.z,Math.floor(g/f)){case 0:p.set(1,0,0),d[m+0]=hn(p,l,"z","y",s,n),d[m+1]=1-hn(p,l,"y","z",s,t);break;case 1:p.set(-1,0,0),d[m+0]=1-hn(p,l,"z","y",s,n),d[m+1]=1-hn(p,l,"y","z",s,t);break;case 2:p.set(0,1,0),d[m+0]=1-hn(p,l,"x","z",s,e),d[m+1]=hn(p,l,"z","x",s,n);break;case 3:p.set(0,-1,0),d[m+0]=1-hn(p,l,"x","z",s,e),d[m+1]=1-hn(p,l,"z","x",s,n);break;case 4:p.set(0,0,1),d[m+0]=1-hn(p,l,"x","y",s,e),d[m+1]=1-hn(p,l,"y","x",s,t);break;case 5:p.set(0,0,-1),d[m+0]=hn(p,l,"x","y",s,e),d[m+1]=1-hn(p,l,"y","x",s,t);break}}}const Tt=Object.create(null);Tt.clamp=(r,e,t)=>Math.max(Math.min(r,Math.max(e,t)),Math.min(e,t));Tt.lerp=(r,e,t)=>(e-r)*t+r;Tt.unlerp=(r,e,t)=>(t-r)/(e-r);Tt.map=(r,e,t,n,i)=>Tt.clamp(Tt.lerp(t,n,Tt.unlerp(r,e,i)),t,n);Tt.disposeMaterial=r=>{Object.keys(r).forEach(e=>{r[e]&&r[e]!==null&&typeof r[e].dispose=="function"&&r[e].dispose()}),r.dispose()};Tt.disposeRecursive=r=>{for(;r.children.length>0;)L1(r.children[0]),r.remove(r.children[0]);r.geometry&&r.geometry.dispose(),r.material&&(Array.isArray(r.material)?r.material.forEach(Tt.disposeMaterial):Tt.disposeMaterial(r.material))};Tt.clamp;Tt.lerp;Tt.unlerp;Tt.map;const L1=Tt.disposeRecursive,et=Object.create(null);et.getFaceNormals=()=>{const r=[];return r.push(new E(0,0,1)),r.push(new E(1,0,0)),r.push(new E(0,0,-1)),r.push(new E(-1,0,0)),r.push(new E(0,1,0)),r.push(new E(0,-1,0)),r};const R1=et.getFaceNormals;et.getFaceCentres=()=>{const r=[];return r.push(new E(0,0,.5)),r.push(new E(.5,0,0)),r.push(new E(0,0,-.5)),r.push(new E(-.5,0,0)),r.push(new E(0,.5,0)),r.push(new E(0,-.5,0)),r};const Rp=et.getFaceCentres;et.getFaceColorMasks=()=>{const r=[];return r.push(new E(1,0,0)),r.push(new E(0,1,0)),r.push(new E(0,0,1)),r.push(new E(1,0,1)),r.push(new E(1,1,0)),r.push(new E(0,1,1)),r};et.getFaceColorMasks;et.getFaceDescriptors=()=>{const r=[];return r.push("front"),r.push("right"),r.push("back"),r.push("left"),r.push("top"),r.push("bottom"),r};et.getFaceDescriptors;et.getFacePoints=(r,e)=>{const t=Rp(),n=[new E(-.5,.5,0),new E(.5,.5,0),new E(.5,-.5,0),new E(-.5,-.5,0)];return n.forEach(i=>{r===0||(r===1?i.applyAxisAngle(new E(0,1,0),Math.PI*.5):r===2?i.applyAxisAngle(new E(0,1,0),Math.PI):r===3?i.applyAxisAngle(new E(0,1,0),-Math.PI*.5):r===4?i.applyAxisAngle(new E(1,0,0),-Math.PI*.5):r===5&&i.applyAxisAngle(new E(1,0,0),Math.PI*.5)),i.add(t[r]),i.applyMatrix4(e)}),n};const lh=et.getFacePoints;et.getFaceOnScreen=(r,e,t)=>{const n=new Us;n.setFromProjectionMatrix(t.projectionMatrix),n.planes[5].constant=0;const i=(f,p)=>{for(let x=0;x<f.length;x++)if(f[x].distanceToPoint(p)<0)return!1;return!0},s=lh(r,e);for(let f=0;f<s.length;f++){const p=s[f];if(p.applyMatrix4(t.matrixWorldInverse),i(n.planes,p))return!0}for(let f=0;f<n.planes.length;f++){const p=n.planes[f];let x=!0;for(let g=0;g<s.length;g++){const m=s[g],_=p.distanceToPoint(m)<0;x=x&&_}if(x)return!1}const o=new gp,a=new E,l=new Dt(s[3],s[1],s[0]),c=new Dt(s[3],s[2],s[1]),u=[l,c];for(let f=0;f<u.length;f++){const p=u[f],x=[p.a,p.b,p.c];for(let g=0;g<3;g++){o.start=x[g],o.end=x[(g+1)%3];for(let m=0;m<n.planes.length;m++)if(n.planes[m].intersectLine(o,a)){const y=[...n.planes];if(y.splice(m,1),i(y,a))return!0}}}s.forEach(f=>{f.applyMatrix4(t.matrixWorld)});const h=new THREE.Vector3;t.getWorldDirection(h);const d=new Ns(t.position,h);for(let f=0;f<u.length;f++){const p=u[f];if(d.intersectTriangle(p.a,p.b,p.c,!1,a))return!0}return!1};et.getFaceOnScreen;et.getFaceBoundingBox=(r,e,t)=>{const n=new ra,i=new W,s=new Us;s.setFromProjectionMatrix(t.projectionMatrix);const o=lh(r,e);for(let a=0;a<o.length;a++){const l=o[a];l.applyMatrix4(t.matrixWorldInverse);const c=s.planes[0].distanceToPoint(l)<0,u=s.planes[1].distanceToPoint(l)<0,h=s.planes[2].distanceToPoint(l)<0,d=s.planes[3].distanceToPoint(l)<0,f=s.planes[4].distanceToPoint(l)<0;if(s.planes[5].distanceToPoint(l)<0||f)return null;l.applyMatrix4(t.projectionMatrix),(l.z<-1||l.z>1)&&console.log("point.z out of range?"),i.x=(l.x+1)*.5,i.y=-(l.y-1)*.5,c&&(i.x=1),u&&(i.x=0),h&&(i.y=1),d&&(i.y=0),n.expandByPoint(i)}return n};et.getFaceBoundingBox;et.getFaceDistanceToCamera=(r,e,t)=>{const n=lh(r,e),i=new Dt(n[3],n[1],n[0]),s=new Dt(n[3],n[2],n[1]),o=[i,s],a=new E;let l=0;return o.forEach((c,u)=>{c.closestPointToPoint(t.position,a);const h=t.position.distanceTo(a);u===0?l=h:l=Math.min(l,h)}),l};et.getFaceDistanceToCamera;et.initCubeGeometry=()=>{const r=new Fe;r.name="EJCubeGeometry";const e=[];e.push(-1,-1,1),e.push(1,-1,1),e.push(-1,1,1),e.push(1,1,1),e.push(-1,-1,-1),e.push(1,-1,-1),e.push(-1,1,-1),e.push(1,1,-1);for(let d=0;d<e.length;d++)e[d]*=.5;const t=[];t.push(1,0,1,.5),t.push(1,0,1,.5),t.push(1,0,1,.5),t.push(1,0,1,.5),t.push(1,0,1,.5),t.push(1,0,1,.5),t.push(1,0,1,.5),t.push(1,0,1,.5);const n=[];n.push(0,3,2),n.push(0,1,3),n.push(1,7,3),n.push(1,5,7),n.push(5,6,7),n.push(5,4,6),n.push(4,2,6),n.push(4,0,2),n.push(2,7,6),n.push(2,3,7),n.push(4,1,0),n.push(4,5,1);const i=[],s=[];for(let d=0;d<n.length;d++){const f=n[d],p=f*3;i.push(e[p+0]),i.push(e[p+1]),i.push(e[p+2]);const x=f*4;s.push(t[x+0]),s.push(t[x+1]),s.push(t[x+2]),s.push(t[x+3])}const o=[];for(let d=0;d<6;d++)o.push(0,0),o.push(1,1),o.push(0,1),o.push(0,0),o.push(1,0),o.push(1,1);const a=[],l=R1();for(let d=0;d<l.length;d++){const f=l[d];for(let p=0;p<6;p++)a.push(f.x,f.y,f.z)}const c=[],u=Rp();for(let d=0;d<u.length;d++){const f=u[d];for(let p=0;p<6;p++)c.push(f.x,f.y,f.z)}const h=[];for(let d=0;d<6;d++)for(let f=0;f<6;f++)h.push(d);return r.setAttribute("position",new ge(i,3)),r.setAttribute("centre",new ge(c,3)),r.setAttribute("normal",new ge(a,3)),r.setAttribute("color",new ge(s,4)),r.setAttribute("uv",new ge(o,2)),r.setAttribute("face",new ge(h,1)),r};et.initCubeGeometry;const cc="None",ea="Plain",hc="Glass",uc="Glass3";class ch{constructor(e,t){this.style=cc,this.container=e,this.cubeBack=null,this.cubeFront=null,this.cubeToCameraDist=100,this.cubeToCameraDistNorm=1,this.cubeToCameraThreshold=.05,this.raycaster=new eh,this.gui=t,this.gui&&(this.guiFolder=this.gui.addFolder("Cube Settings"))}setConfig(e){}updateProps(e,t){}updateMasterOpacity(e){}update(e){this.cubeToCameraDist=100,this.raycaster.setFromCamera(new W(0,0),e);const t=this.raycaster.intersectObject(this.cubeFront);if(t.length>0){const i=t[0];this.cubeToCameraDist=i.distance}this.raycaster.ray.direction.multiply(new E(-1,-1,-1));const n=this.raycaster.intersectObject(this.cubeBack);if(n.length>0){const i=n[0];this.cubeToCameraDist=-i.distance}this.cubeToCameraDistNorm=Ql.mapLinear(this.cubeToCameraDist,-this.cubeToCameraThreshold,this.cubeToCameraThreshold,-1,1),this.cubeToCameraDistNorm=Ql.clamp(this.cubeToCameraDistNorm,-1,1)}dispose(){this.container&&Tt.disposeRecursive(this.container),this.guiFolder&&(this.guiFolder.destroy(),this.guiFolder=null)}}function sd(){return new Hs({uniforms:{backFace:{value:1},borderOn:{value:1},borderColor:{value:new Ze(1,1,1,.25)},borderWidth:{value:.0025},borderFeather:{value:.5},textureOn:{value:1},texture:{type:"t",value:null},resolution:{value:new W(0,0)},masterOpacity:{value:1}},vertexShader:`
      precision highp float;
      precision highp int;

      uniform mat4 modelMatrix;
      uniform mat4 modelViewMatrix;
      uniform mat4 projectionMatrix;

      attribute vec3 position;
      attribute vec4 color;
      attribute vec2 uv;
      
      varying vec2 vUv;
      
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
      }
    `,fragmentShader:`
      precision highp float;
      precision highp int;
      
      uniform int backFace;
      uniform int borderOn;
      uniform vec4 borderColor;
      uniform float borderWidth;
      uniform float borderFeather;
      uniform int textureOn;
      uniform sampler2D texture;
      uniform vec2 resolution;
      uniform float masterOpacity;
      
      varying vec2 vUv;

      vec4 alphaBlend( vec4 src, vec4 dst ) {
        float final_alpha = src.a + dst.a * (1.0 - src.a);
        if( final_alpha == 0.0 ) {
          return vec4( 0.0, 0.0, 0.0, 0.0 );
        }
        return vec4( (src.rgb * src.a + dst.rgb * dst.a * (1.0 - src.a)) / final_alpha, final_alpha);
      }

      float border(vec2 uv, float strokeWidth, float feather) {
        vec2 borderBottomLeft = smoothstep(vec2(strokeWidth * feather), vec2(strokeWidth), uv);
        vec2 borderTopRight = smoothstep(vec2(strokeWidth * feather), vec2(strokeWidth), 1.0 - uv);
        return 1.0 - borderBottomLeft.x * borderBottomLeft.y * borderTopRight.x * borderTopRight.y;
      }

      vec4 LinearTosRGB( vec4 value ) {
        return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
      }      
      
      void main()  {
        vec4 colorTex = vec4(0.0, 0.0, 0.0, 0.0);
        vec4 colorBorder = vec4(0.0, 0.0, 0.0, 0.0);
        
        if(textureOn == 1) {
          vec2 st = gl_FragCoord.xy / resolution;
          colorTex = texture2D(texture, st);
        }

        if(borderOn == 1 && borderWidth > 0.0 && borderColor.a > 0.0) {
          float line = border(vUv, borderWidth, 1.0 - borderFeather);
          colorBorder = vec4(borderColor.xyz, borderColor.a * line);
        }

        vec4 colorFinal = vec4(0.0, 0.0, 0.0, 0.0);
        if( backFace == 0 ) {
          colorFinal = alphaBlend(colorBorder, colorTex); // border first, then blend content on top.
        } else {
          colorFinal = alphaBlend(colorTex, colorBorder); // content first, then blend border on top.
        }

        colorFinal = LinearTosRGB( colorFinal );
        colorFinal.a *= masterOpacity;

        gl_FragColor = colorFinal;
      }      
    `,side:Zt,transparent:!0})}class Np extends ch{constructor(e,t){if(super(e,t),this.style=ea,this.geometry=et.initCubeGeometry(),this.materialBack=sd(),this.materialFront=sd(),this.cubeBack=new $e(this.geometry,this.materialBack),this.cubeBack.name="cubeBack",this.materialBack.side=Et,this.materialBack.uniforms.backFace.value=1,this.materialBack.uniforms.textureOn.value=1,this.materialBack.uniformsNeedUpdate=!0,this.cubeFront=new $e(this.geometry,this.materialFront),this.cubeFront.name="cubeFront",this.materialFront.side=sn,this.materialFront.uniforms.backFace.value=0,this.materialFront.uniforms.textureOn.value=0,this.materialFront.uniformsNeedUpdate=!0,this.container.add(this.cubeBack),this.container.add(this.cubeFront),this.config={masterOpacity:1,borderOn:!0,borderWidth:.0025,borderFeather:.5,borderColor:new pe(16777215),borderAlpha:.25},this.guiFolder){const n=c=>{this.updateMasterOpacity(c)},i=c=>{this.setConfig({borderOn:c})},s=c=>{this.setConfig({borderWidth:c})},o=c=>{this.setConfig({borderFeather:c})},a=c=>{this.setConfig({borderColor:c})},l=c=>{this.setConfig({borderAlpha:c})};this.guiFolder.add(this.config,"masterOpacity",0,1).name("Master Opacity").onChange(n.bind(this)),this.guiFolder.add(this.config,"borderOn").name("Border On").onChange(i.bind(this)),this.guiFolder.add(this.config,"borderWidth",0,.1).name("Border Width").onChange(s.bind(this)),this.guiFolder.add(this.config,"borderFeather",0,1).name("Border Feather").onChange(o.bind(this)),this.guiFolder.addColor(this.config,"borderColor").name("Border Color").onChange(a.bind(this)),this.guiFolder.add(this.config,"borderAlpha",0,1).name("Border Alpha").onChange(l.bind(this))}}setConfig(e){if(e){if(e.borderOn!==void 0&&(this.materialBack.uniforms.borderOn.value=e.borderOn?1:0,this.materialBack.uniformsNeedUpdate=!0,this.materialFront.uniforms.borderOn.value=e.borderOn?1:0,this.materialFront.uniformsNeedUpdate=!0),e.borderWidth!==void 0&&(this.materialBack.uniforms.borderWidth.value=e.borderWidth,this.materialBack.uniformsNeedUpdate=!0,this.materialFront.uniforms.borderWidth.value=e.borderWidth,this.materialFront.uniformsNeedUpdate=!0),e.borderFeather!==void 0&&(this.materialBack.uniforms.borderFeather.value=e.borderFeather,this.materialBack.uniformsNeedUpdate=!0,this.materialFront.uniforms.borderFeather.value=e.borderFeather,this.materialFront.uniformsNeedUpdate=!0),e.borderColor!==void 0){let t=e.borderColor;typeof t=="string"&&(t=new pe(t)),this.materialBack.uniforms.borderColor.value.x=t.r,this.materialBack.uniforms.borderColor.value.y=t.g,this.materialBack.uniforms.borderColor.value.z=t.b,this.materialBack.uniformsNeedUpdate=!0,this.materialFront.uniforms.borderColor.value.x=t.r,this.materialFront.uniforms.borderColor.value.y=t.g,this.materialFront.uniforms.borderColor.value.z=t.b,this.materialFront.uniformsNeedUpdate=!0}e.borderAlpha!==void 0&&(this.materialBack.uniforms.borderColor.value.w=e.borderAlpha,this.materialBack.uniformsNeedUpdate=!0,this.materialFront.uniforms.borderColor.value.w=e.borderAlpha,this.materialFront.uniformsNeedUpdate=!0)}}update(e){super.update(e)}updateProps(e,t){super.updateProps(e,t);let n=!1;n=n||this.materialBack.uniforms.texture.value!==e,n=n||this.materialBack.uniforms.resolution.value.equals(t)==!1,n&&(this.materialBack.uniforms.texture.value=e,this.materialBack.uniforms.resolution.value=t,this.materialBack.uniformsNeedUpdate=!0);let i=!1;i=i||this.materialFront.uniforms.texture.value!==e,i=i||this.materialFront.uniforms.resolution.value.equals(t)==!1,i&&(this.materialFront.uniforms.texture.value=e,this.materialFront.uniforms.resolution.value=t,this.materialFront.uniformsNeedUpdate=!0)}updateMasterOpacity(e){this.materialBack.uniforms.masterOpacity.value!=e&&(this.materialBack.uniforms.masterOpacity.value=e,this.materialBack.uniformsNeedUpdate=!0),this.materialFront.uniforms.masterOpacity.value!=e&&(this.materialFront.uniforms.masterOpacity.value=e,this.materialFront.uniformsNeedUpdate=!0)}}function rd(){return new Hs({name:"EJCube1Material",uniforms:{mode:{value:0},time:{value:1},resolution:{value:new W(0,0)},texture:{type:"t",value:null},tintAlpha:{value:.4},cubeToCameraDistNorm:{value:1}},vertexShader:`
      precision highp float;
      precision highp int;

      uniform mat4 modelViewMatrix; // optional
      uniform mat4 projectionMatrix; // optional

      attribute vec3 position;
      attribute vec3 centre;
      attribute vec3 normal;
      attribute vec4 color;
      attribute vec2 uv;

      varying vec3 vPosition;
      varying vec4 vPositionWorld;
      varying vec3 vCentre;
      varying vec4 vCentreWorld;
      varying vec3 vNormal;
      varying vec4 vColor;
      varying vec2 vUv;

      void main() {

        vPosition = position;
        vPositionWorld = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        vCentre = centre;
        vCentreWorld = projectionMatrix * modelViewMatrix * vec4( centre, 1.0 );
        vNormal = normal;
        vColor = color;
        vUv = uv;

        gl_Position = vPositionWorld;
      }
    `,fragmentShader:`
      precision highp float;
      precision highp int;

      uniform int mode;
      uniform float time;
      uniform vec2 resolution;
      uniform sampler2D texture;
      uniform float tintAlpha;
      uniform float cubeToCameraDistNorm;

      varying vec3 vPosition;
      varying vec4 vPositionWorld;
      varying vec3 vCentre;
      varying vec4 vCentreWorld;
      varying vec3 vNormal;
      varying vec4 vColor;
      varying vec2 vUv;

      const float PI2 = 6.283185307179586;

      float map( float value, float inputMin, float inputMax, float outputMin, float outputMax ) {
        if( abs(inputMin - inputMax) < 0.00001 ) {
          return outputMin;
        } else {
          float outVal = ((value - inputMin) / (inputMax - inputMin) * (outputMax - outputMin) + outputMin);
          if(outputMax < outputMin){
            if( outVal < outputMax )outVal = outputMax;
            else if( outVal > outputMin )outVal = outputMin;
          } else {
            if( outVal > outputMax )outVal = outputMax;
            else if( outVal < outputMin )outVal = outputMin;
          }
          return outVal;
        }
      }

      vec4 alphaBlend( vec4 src, vec4 dst ) {
        float final_alpha = src.a + dst.a * (1.0 - src.a);
        if( final_alpha == 0.0 ) {
          return vec4( 0.0, 0.0, 0.0, 0.0 );
        }
        return vec4( (src.rgb * src.a + dst.rgb * dst.a * (1.0 - src.a)) / final_alpha, final_alpha);
      }

      float borders(vec2 uv, float strokeWidth) {
        vec2 borderBottomLeft = smoothstep(vec2(0.0), vec2(strokeWidth), uv);
        vec2 borderTopRight = smoothstep(vec2(0.0), vec2(strokeWidth), 1.0 - uv);
        return 1.0 - borderBottomLeft.x * borderBottomLeft.y * borderTopRight.x * borderTopRight.y;
      }

      vec4 warp( vec2 st ) {
        vec2 toCenter = vCentreWorld.xy - vPositionWorld.xy;
        float direction = (atan(toCenter.y, toCenter.x) / PI2) + 0.5;
        float length = borders(vUv, 0.028) + borders(vUv, 0.06) * 0.3;
        if( false ) { // debug.
          return vec4(direction, length, 0.0, 1.0);
        }

        vec2 dir = vec2(cos(direction * PI2), sin(direction * PI2));

        vec2 stWarp = st;
        stWarp.x += (length * 0.07) * dir.x;
        stWarp.y += (length * 0.07) * dir.y;

        return texture2D(texture, stWarp);
      }

      void main()  {

        vec2 st = gl_FragCoord.xy / resolution;
        vec4 color = vec4( 0.0, 0.0, 0.0, 0.0 );

        vec4 colorBorder = vec4( borders(vUv, 0.02) );
        if( colorBorder.a > 0.0 ) {
          colorBorder.rgb /= colorBorder.a; // premultiply alpha fix for dark shadows.
        }

        float colorTexAlphaMin = 0.5;
        float frostAlphaMax = 0.6;

        if( mode == 0 ) { // cube interior / back facing.

          vec4 colorTint = vec4( 0.0, 0.0, 0.0, tintAlpha );
          vec4 colorBorderFaded = vec4( colorBorder.rgb, colorBorder.a * 0.6 );
          
          color = alphaBlend( colorBorderFaded, colorTint );

          if( cubeToCameraDistNorm < 0.0 ) { // below 0.0, meams we're inside the cube.
            
            vec4 colorTex = texture2D(texture, st);
            float colorTexAlpha = map( cubeToCameraDistNorm, 0.0, -0.5, colorTexAlphaMin, 1.0 );
            colorTex.a *= colorTexAlpha;

            float frostAlpha = map( cubeToCameraDistNorm, 0.0, -1.0, frostAlphaMax, 0.0 );
            vec4 frostCol = vec4(1.0, 1.0, 1.0, frostAlpha );

            color = alphaBlend( colorTex, color );
            color = alphaBlend( frostCol, color );
          }

        } else { // cube exterior / front facing.

          if( cubeToCameraDistNorm < 0.0 ) {
            discard; // below 0.0, meams we're inside the cube.
          }

          vec4 colorTex = warp( st );
          float colorTexAlpha = map( cubeToCameraDistNorm, 1.0, 0.5, 1.0, colorTexAlphaMin );
          colorTex.a *= colorTexAlpha;

          float frostAlpha = map( cubeToCameraDistNorm, 1.0, 0.0, 0.0, frostAlphaMax );
          vec4 frostCol = vec4(1.0, 1.0, 1.0, frostAlpha );

          color = colorTex;
          color = alphaBlend( frostCol, color );
          color = alphaBlend( colorBorder, color );
        }

        gl_FragColor = color;
      }
    `,side:Zt,transparent:!0})}class N1 extends ch{constructor(e,t){super(e,t),this.style=hc,this.geometry=et.initCubeGeometry(),this.materialBack=rd(),this.materialFront=rd(),this.cubeBack=new $e(this.geometry,this.materialBack),this.cubeBack.name="cubeBack",this.cubeBack.material.side=Et,this.cubeBack.material.uniforms.mode.value=0,this.cubeBack.material.uniformsNeedUpdate=!0,this.cubeFront=new $e(this.geometry,this.materialFront),this.cubeFront.name="cubeFront",this.cubeFront.material.side=sn,this.cubeFront.material.uniforms.mode.value=1,this.cubeFront.material.uniformsNeedUpdate=!0,this.container.add(this.cubeBack),this.container.add(this.cubeFront),this.guiFolder&&(this.guiFolder.add(this.materialBack.uniforms.tintAlpha,"value",0,1).name("Tint Alpha").onChange(n=>{this.materialBack.uniforms.tintAlpha.value=n,this.materialBack.uniformsNeedUpdate=!0}),this.guiFolder.add(this,"cubeToCameraThreshold",0,1).name("Cube Threshold").onChange(n=>{this.cubeToCameraThreshold=n}))}update(e){super.update(e),this.materialBack.uniforms.cubeToCameraDistNorm.value=this.cubeToCameraDistNorm,this.materialBack.uniformsNeedUpdate=!0,this.materialFront.uniforms.cubeToCameraDistNorm.value=this.cubeToCameraDistNorm,this.materialFront.uniformsNeedUpdate=!0}updateProps(e,t){super.updateProps(e,t);let n=!1;n=n||this.materialBack.uniforms.texture.value!==e,n=n||this.materialBack.uniforms.resolution.value.equals(t)==!1,n&&(this.materialBack.uniforms.texture.value=e,this.materialBack.uniforms.resolution.value=t,this.materialBack.uniformsNeedUpdate=!0);let i=!1;i=i||this.materialFront.uniforms.texture.value!==e,i=i||this.materialFront.uniforms.resolution.value.equals(t)==!1,i&&(this.materialFront.uniforms.texture.value=e,this.materialFront.uniforms.resolution.value=t,this.materialFront.uniformsNeedUpdate=!0)}dispose(){super.dispose()}}const U1=`#version 300 es
//3.00 we need for normal map calc

precision highp float;
precision highp int;

//built in
//https://threejs.org/docs/#api/en/renderers/webgl/WebGLProgram
uniform mat4 modelViewMatrix; 
uniform mat4 projectionMatrix; 
uniform vec3 cameraPosition;  
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;


in vec3 position;
in vec3 centre;
in vec3 normal;
in vec3 tangent;
in vec4 color;
in vec2 uv;


out vec3 vPosWorld; //correct world space 
out vec3 vNormalWorld;
// out vec3 vTangentWorld;
// out vec3 vBitangentWorld;
out vec3 vViewDir;
out vec3 vViewPosition;
// out vec4 vColor;
out vec2 vUv;

//old
out vec3 vPosition;
out vec4 vPositionWorld;
out vec3 vCentre;
out vec4 vCentreWorld;
out vec3 vNormal;


//from THREEjs examples
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
  return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}

void main() {

  vPosWorld =  ( modelMatrix * vec4( position, 1. ) ).xyz;
  vNormalWorld = inverseTransformDirection( normal, modelMatrix );
  vViewDir = normalize(vPosWorld - cameraPosition); //?

  /*
  vTangentWorld = normalize( (vec4( tangent, 0.0 ) * modelMatrix ).xyz );
  vBitangentWorld = normalize( cross( vNormalWorld, vTangentWorld ) );
  */

  //these we need to normal map calc
  vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
  vViewPosition = - mvPosition.xyz;

  vUv = uv;

  //old vals
  //TODO DEPRECATE
  vPosition = position;
  vPositionWorld = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  vCentre = centre;
  vCentreWorld = projectionMatrix * modelViewMatrix * vec4( centre, 1.0 );
  vNormal = normal;
  // vColor = color;

  gl_Position = vPositionWorld;
}`,O1=`#version 300 es

precision highp float;
precision highp int;

#define PI 3.14159
#define PI2 6.283185307179586

//built in 
//https://threejs.org/docs/#api/en/renderers/webgl/WebGLProgram
uniform vec3 cameraPosition;  
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;
uniform mat4 projectionMatrix;


//from vert
in vec3 vPosWorld;
in vec3 vNormalWorld;
in vec3 vViewDir;
in vec3 vViewPosition;
in vec2 vUv; //surface uvs
// in vec4 vColor;
// in vec3 vTangentWorld;
// in vec3 vBitangentWorld;

//old
in vec3 vPosition;
in vec4 vPositionWorld;
in vec3 vCentre;
in vec4 vCentreWorld;
in vec3 vNormal;

out vec4 fragColor;



uniform int mode;  //rename to faceDir 
uniform float time;
uniform vec2 resolution;
uniform sampler2D texBack; //todo rename to transmissionSamplerMap or back texture 
uniform float cubeToCameraDistNorm;

uniform float tintAlpha;
uniform vec3 tintColor; //rename to tintColor
// uniform float camFOV;

uniform sampler2D texHDRI; //equirectangular HDRI
uniform float texEnvExposure;

const float normalScale = .02;
uniform sampler2D texNormal; 


/*
float map( float value, float inputMin, float inputMax, float outputMin, float outputMax ) {
  if( abs(inputMin - inputMax) < .00001 ) {
    return outputMin;
  } else {
    float outVal = ((value - inputMin) / (inputMax - inputMin) * (outputMax - outputMin) + outputMin);
    if(outputMax < outputMin){
      if( outVal < outputMax )outVal = outputMax;
      else if( outVal > outputMin )outVal = outputMin;
    } else {
      if( outVal > outputMax )outVal = outputMax;
      else if( outVal < outputMin )outVal = outputMin;
    }
    return outVal;
  }
}

vec4 alphaBlend( vec4 src, vec4 dst ) {
  float final_alpha = src.a + dst.a * (1.0 - src.a);
  if(final_alpha == .0) {
    return vec4(.0,.0,.0,.0);
  }
  return vec4( (src.rgb * src.a + dst.rgb * dst.a * (1.0 - src.a)) / final_alpha, final_alpha);
}


float borders(vec2 uv, float strokeWidth) {
  vec2 borderBottomLeft = smoothstep(vec2(0.0), vec2(strokeWidth), uv);
  vec2 borderTopRight = smoothstep(vec2(0.0), vec2(strokeWidth), 1.0 - uv);
  return 1.0 - borderBottomLeft.x * borderBottomLeft.y * borderTopRight.x * borderTopRight.y;
}

vec4 warp( vec2 st ) {
  vec2 toCenter = vCentreWorld.xy - vPositionWorld.xy;
  float direction = (atan(toCenter.y, toCenter.x) / PI2) + 0.5;
  float length = borders(vUv, 0.028) + borders(vUv, 0.06) * 0.3;
  if( false ) { // debug.
    return vec4(direction, length, 0.0, 1.0);
  }

  vec2 dir = vec2(cos(direction * PI2), sin(direction * PI2));

  vec2 stWarp = st;
  stWarp.x += (length * 0.07) * dir.x;
  stWarp.y += (length * 0.07) * dir.y;

  return texture(texBack, stWarp);
}
*/
/*
// with pre-calc tangents
vec3 getDetailNormal2(vec3 n){ 

  float normalScale = 0.02;
  vec3 mapN = texture(texNormal, vUv ).xyz * 2. - 1.;
  mapN.xy *= normalScale;


  // #ifdef FLIP_SIDED
  //   transformedTangent = - transformedTangent;
  // #endif


  vec3 tangent = normalize( vTangentWorld );
  vec3 bitangent = normalize( vBitangentWorld );

  // #ifdef DOUBLE_SIDED
  //   tangent = tangent * faceDirection;
  //   bitangent = bitangent * faceDirection;
  // #endif
  // #if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )

  mat3 vTBN = mat3( vTangentWorld, vBitangentWorld, vNormalWorld );
  vec3 nDetailed = normalize( vTBN * mapN );



  // float faceDirection = gl_FrontFacing ? 1. : - 1.;
  // vec3 nDetailed = applyNormalMap( n, mapN, faceDirection ); 
  return nDetailed;

}
*/



//https://stackoverflow.com/questions/56625730/does-blending-work-with-the-glsl-mix-function
vec4 blend(vec4 src, vec4 dst, float alpha){ return src*alpha + dst*(1.-alpha); }

// vec3 bms(vec3 a, vec3 b){ return 1.- (1.-a)*(1.-b); }
// float bms(float a, float b){ return 1.- (1.-a)*(1.-b); }


//Equirectangular HDRI
//https://www.shadertoy.com/view/4lK3DK
vec3 getHDRI(vec3 rd){
  vec2 uv = vec2(atan(rd.z, rd.x) + PI, acos(-rd.y)) / vec2(2. * PI, PI); //TODO PI2
  vec3 col = texture(texHDRI, uv).rgb;
  //TODO: on THREEjs side
  col = pow(col, vec3(2.2)); //sRGB -> Linear, 
  col *= texEnvExposure;
  return col;
}

//Note: it will be faster with precomputed tangents. bi tangents cud be calculated from t x n
//from normalmap_pars_fragment.glsl.js
// Normal Mapping Without Precomputed Tangents
// http://www.thetenthplanet.de/archives/1180
vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {

  vec3 q0 = dFdx( eye_pos.xyz );
  vec3 q1 = dFdy( eye_pos.xyz );
  vec2 st0 = dFdx( vUv.st );
  vec2 st1 = dFdy( vUv.st );

  vec3 N = surf_norm; // normalized

  vec3 q1perp = cross( q1, N );
  vec3 q0perp = cross( N, q0 );

  vec3 T = q1perp * st0.x + q0perp * st1.x;
  vec3 B = q1perp * st0.y + q0perp * st1.y;

  float det = max( dot( T, T ), dot( B, B ) );
  float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );

  return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );

}

vec3 getDetailNormal(vec3 n){ 

  // float normalScale = 0.02;
  vec3 mapN = texture(texNormal, vUv).xyz * 2. - 1.;
  mapN.xy *= normalScale;

  //TODO check with main normal - coz we flip it also
  float faceDirection = gl_FrontFacing ? 1. : - 1.;

  vec3 normal = perturbNormal2Arb( - vViewPosition, n, mapN, faceDirection );
  return normal;
}


//back texture refration
//from transmission_pars_fragment.glsl.js
vec4 transmission(vec3 n){

  vec3 pos = vPosWorld;
  vec3 v = -vViewDir;
  float ior = 2.;  //we use different ior for refration coz it looks better
  float thickness = .05;

  //face dir==back face
  // if(mode==0) ior = 1./ior; //glass to air

  // Direction of refracted light.
  vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );

  // Compute rotation-independant scaling of the model matrix.
  vec3 modelScale;
  modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
  modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
  modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );

  // The thickness is specified in local space.
  vec3 transmissionRay =  normalize( refractionVector ) * thickness * modelScale;

  vec3 refractedRayExit = pos + transmissionRay;

  // Project refracted vector on the framebuffer, 
  // while mapping to normalized device coordinates.
  vec4 ndcPos = projectionMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
  vec2 refractionCoords = ndcPos.xy / ndcPos.w;
  refractionCoords += 1.0;
  refractionCoords /= 2.0;

  vec4 col = texture(texBack, refractionCoords.xy).xyzw;
  return col;

}


//surface shading 

//fresnel-schlick
const float EPS = 1e-3;
float dot_c(vec3 a, vec3 b){ return max(dot(a, b), EPS); } //clamped dot with min eps val
float fre(vec3 n, vec3 rayDir, float ior){
  float f0 = pow(ior - 1., 2.) / pow(ior + 1., 2.); 
  float cosTheta = dot_c(n, -rayDir);
  float f = f0 + (1.-f0) * pow(1.-cosTheta, 5.);
  return f;
}


vec4 shadeFront(vec3 p, vec3 n, vec3 rayDir){ 
  
  vec4 col = vec4(0.,0.,0.,0.); 
  vec4 ambientCol = transmission(n); //back texture refraction

  vec3 reflectedCol = getHDRI(reflect(rayDir, n));
  
  //this one is for fresnel. we have another one for refraction. coz it looks better
  float ior = 1.2;
  float f = fre(n, rayDir, ior);

  vec4 colTint = vec4(tintColor, tintAlpha);

  col = colTint;
  col = blend(ambientCol, col, ambientCol.a );   //inner material 
  col = blend(vec4(reflectedCol,1.), col, f ); //surface material 

  // col = mix(ambientCol, vec4(reflectedCol,1.), vec4(f.x) );

  return col;
}


vec4 shadeBack(vec3 p, vec3 n, vec3 rayDir){ 

  vec4 col = vec4(0.,0.,0.,0.);
  // vec4 colTint = vec4(tintColor, tintAlpha);

  vec3 reflectedCol = getHDRI(reflect(rayDir, n));
  
  float ior = 1.2;
  float f = fre(n, rayDir,ior);

  col = blend(vec4(reflectedCol, 1.), col, f );

  return col;
}



void main()  {

  vec2 uv = gl_FragCoord.xy / resolution; //screen uvs
  // bool faceDir = gl_FrontFacing;// ? 1. : - 1.;
  vec4 col = vec4(0.,0.,0.,0.);

  /*
  vec4 colBorder = vec4( borders(vUv, 0.02) );
  if( colBorder.a > 0.0 ) {
    colBorder.rgb /= colBorder.a; // premultiply alpha fix for dark shadows.
  }

  float colTexAlphaMin = 0.5;
  float frostAlphaMax = 0.6;
  */

  //Back face, cube interior 
  if( mode == 0 ) { 

/*
    vec4 colTint = vec4( tintColor, tintAlpha );
    // vec4 colBorderFaded = vec4( colBorder.rgb, colBorder.a * 0.6 );
    
    // col = alphaBlend( colBorderFaded, colTint );
    col =  colTint ;

    // below 0.0, means we're inside the cube.
    if( cubeToCameraDistNorm < 0.0 ) { 
      
      vec4 colTex = texture(texBack, uv); //back texture?
      float colTexAlpha = map( cubeToCameraDistNorm, 0.0, -0.5, colTexAlphaMin, 1.0 );
      colTex.a *= colTexAlpha;

      // float frostAlpha = map( cubeToCameraDistNorm, 0., -1., frostAlphaMax, 0. );
      // vec4 frostCol = vec4(1., 1., 1., frostAlpha );

      col = alphaBlend( colTex, col );
      // col = alphaBlend( frostCol, col );

    }
*/
    

    vec3 p = vPosWorld;       //pos on surface
    vec3 n = -vNormalWorld;   //normal on surface: flipped for the back 
    //TODO check normal map along with this flipped normal - but its not critical

    vec3 rayDir = normalize(vViewDir); //already normalized, rename to viewDir
    vec3 nDetailed = getDetailNormal(n); //normalized

    vec4 colSurface = shadeBack(p, nDetailed, rayDir);
    col = colSurface; 

  } 

  // Front Face, cube exterior 
  else { 

    /*
    //clip front face?
    if( cubeToCameraDistNorm < 0.0 ) {
      discard; // below 0.0, means we're inside the cube.
    }

    vec4 colTex = warp( uv );

    float colTexAlpha = map( cubeToCameraDistNorm, 1., .5, 1., colTexAlphaMin );
    colTex.a *= colTexAlpha;

    float frostAlpha = map( cubeToCameraDistNorm, 1., 0., 0., frostAlphaMax );
    vec4 frostCol = vec4(1., 1., 1., frostAlpha );

    col = colTex;
    
    col = alphaBlend( frostCol, col );
    col = alphaBlend( colBorder, col );
    */

    vec3 p = vPosWorld;       //pos on surface
    vec3 n = vNormalWorld;    //normal on surface

    
    vec3 rayDir = normalize(vViewDir); //already normalized, todo renme to viewDir
    vec3 nDetailed = getDetailNormal(n); //normalized


    vec4 colSurface = shadeFront(p, nDetailed, rayDir);
    col = colSurface;
  }

  // col.xyz = pow(col.xyz, vec3(.4545) ); //gamma coorection

  fragColor = col;
}
`;class z1{constructor(){this.texLoader=null,this.rgbeLoader=null,this.pmremGenerator=null,this.texNormal=["n9.jpg","n12.jpg","n14.jpg","n16.jpg"],this.texEnv=["studio016.hdr","empty_warehouse_01_1k.hdr","hamburg_hbf_1k.hdr"],this.texRoughness=["h17.jpg","h9.jpg","h12.jpg","h14.jpg","h16.jpg"],this.texNormalId=0,this.texEnvId=0}loadNormalMap(e,t){this.texNormalId=t,this.texLoader.load("/libs/ejx/assets/normal/"+this.texNormal[t],function(n){n.encoding=Qe,n.wrapS=Gn,n.wrapT=Gn;for(let i=0;i<e.length;i++)e[i].uniforms.texNormal.value=n,e[i].uniformsNeedUpdate=!0})}loadEnvMap(e,t){this.texEnvId=t,this.rgbeLoader.load("/libs/ejx/assets/env/"+this.texEnv[t],function(n){n.minFilter=ut,n.wrapS=Gn,n.wrapT=Gn,n.encoding=Mn;for(let i=0;i<e.length;i++)e[i].uniforms.texHDRI.value=n,i==0&&(e[i].uniforms.texEnvExposure.value=1),i==1&&(e[i].uniforms.texEnvExposure.value=.2),i==2&&(e[i].uniforms.texEnvExposure.value=.02),e[i].uniformsNeedUpdate=!0})}loadRoughnessMap(e,t){this.texRoughnessId=t,this.texLoader.load("/libs/ejx/assets/rough/"+this.texRoughness[t],function(n){n.encoding=Qe,e.roughnessMap=n,e.needsUpdate=!0})}}function od(){return new Hs({vertexShader:U1,fragmentShader:O1,uniforms:{mode:{value:0},time:{value:1},resolution:{value:new W(0,0)},texBack:{value:null},tintColor:{value:new pe(0)},tintAlpha:{value:.2},texHDRI:{value:null},texEnvExposure:{value:.2},texNormal:{value:null},cubeToCameraDistNorm:{value:1}},side:Zt,transparent:!0})}class F1 extends ch{constructor(e,t){super(e,t),this.style=uc,this.geometry=new D1(1,1,1,4,.02),this.materialBack=od(),this.materialFront=od(),this.cubeBack=new $e(this.geometry,this.materialBack),this.cubeBack.name="cubeBack",this.cubeBack.material.side=Et,this.cubeBack.material.uniforms.mode.value=0,this.cubeBack.material.uniformsNeedUpdate=!0,this.cubeFront=new $e(this.geometry,this.materialFront),this.cubeFront.name="cubeFront",this.cubeFront.material.side=sn,this.cubeFront.material.uniforms.mode.value=1,this.cubeFront.material.uniformsNeedUpdate=!0,this.container.add(this.cubeBack),this.container.add(this.cubeFront);let n=new z1;n.texLoader=new qc,n.rgbeLoader=new I1,n.loadNormalMap([this.materialFront,this.materialBack],1),n.loadEnvMap([this.materialFront,this.materialBack],2),this.guiFolder&&(this.guiFolder.add(n,"texNormalId",0,n.texNormal.length-1).step(1).name("Normal Map").onChange(i=>{n.loadNormalMap([this.materialFront,this.materialBack],i)}),this.guiFolder.add(n,"texEnvId",0,n.texEnv.length-1).step(1).name("Env Map").onChange(i=>{n.loadEnvMap([this.materialFront,this.materialBack],i)}),this.guiFolder.add(this.materialFront.uniforms.texEnvExposure,"value",0,2).name("Env Exposure").onChange(i=>{this.materialBack.uniforms.texEnvExposure.value=i,this.materialBack.uniformsNeedUpdate=!0,this.materialFront.uniforms.texEnvExposure.value=i,this.materialFront.uniformsNeedUpdate=!0}),this.guiFolder.add(this.materialFront.uniforms.tintAlpha,"value",0,1).name("Tint Alpha").onChange(i=>{this.materialFront.uniformsNeedUpdate=!0}),this.guiFolder.addColor(this.materialFront.uniforms.tintColor,"value").name("Tint Color").onChange(i=>{this.materialFront.uniforms.tintColor.value=i,this.materialFront.uniformsNeedUpdate=!0}),this.guiFolder.add(this,"cubeToCameraThreshold",0,1).name("Cube Threshold").onChange(i=>{this.cubeToCameraThreshold=i}))}update(e){super.update(e),this.materialBack.uniforms.cubeToCameraDistNorm.value=this.cubeToCameraDistNorm,this.materialBack.uniformsNeedUpdate=!0,this.materialFront.uniforms.cubeToCameraDistNorm.value=this.cubeToCameraDistNorm,this.materialFront.uniformsNeedUpdate=!0}updateProps(e,t){super.updateProps(e,t);let n=!1;n=n||this.materialBack.uniforms.texBack.value!==e,n=n||this.materialBack.uniforms.resolution.value.equals(t)==!1,n&&(this.materialBack.uniforms.texBack.value=e,this.materialBack.uniforms.resolution.value=t,this.materialBack.uniformsNeedUpdate=!0);let i=!1;i=i||this.materialFront.uniforms.texBack.value!==e,i=i||this.materialFront.uniforms.resolution.value.equals(t)==!1,i&&(this.materialFront.uniforms.texBack.value=e,this.materialFront.uniforms.resolution.value=t,this.materialFront.uniformsNeedUpdate=!0)}dispose(){super.dispose()}}class k1{constructor(e){this.container=e,this.cubeBackGeometry=new Rn(1,1,1),this.cubeBackGeometry.name="EJCubeMask_BackGeometry",this.cubeBackMaterial=new rn({name:"EJCubeMask_BackMaterial",color:16711680,side:Et,depthWrite:!1,depthTest:!1}),this.cubeBack=new $e(this.cubeBackGeometry,this.cubeBackMaterial),this.cubeBack.name="EJCubeMask_BackMesh",this.cubeBack.frustumCulled=!1,this.container.add(this.cubeBack);const t=et.getFaceColorMasks();this.cubeFront=new Oe,this.cubeFrontFaces=[];for(let n=0;n<6;n++){const i=t[n],s=new bn(1,1);s.name=`EJCubeMask_FrontGeometry_${n}`;const o=new rn({color:new pe(i.x,i.y,i.z),side:sn,depthWrite:!1,depthTest:!1});s.name=`EJCubeMask_FrontMaterial_${n}`;const a=new $e(s,o);s.name=`EJCubeMask_FrontMesh_${n}`,a.frustumCulled=!1,n===0?a.position.z=.5:n===1?(a.position.x=.5,a.rotation.y=Math.PI*.5):n===2?(a.position.z=-.5,a.rotation.y=Math.PI):n===3?(a.position.x=-.5,a.rotation.y=-Math.PI*.5):n===4?(a.position.y=.5,a.rotation.x=-Math.PI*.5):n===5&&(a.position.y=-.5,a.rotation.x=Math.PI*.5),this.cubeFrontFaces.push(a),this.cubeFront.add(a)}this.container.add(this.cubeFront)}setFaceColorMask(e,t){const n=this.cubeFrontFaces[e];n.material.color.r=t.x,n.material.color.g=t.y,n.material.color.b=t.z}update(e,t){}getScreenspaceBox(e){const t=this.cubeBack,n=t.geometry.attributes.position.array,i=new THREE.Vector3,s=new THREE.Vector3(1,1,1),o=new THREE.Vector3(-1,-1,-1),a=new THREE.Vector3;for(let l=0;l<n.length;l+=3){a.set(...n.slice(l,l+3));const u=i.copy(a).applyMatrix4(t.matrixWorld).project(e);s.min(u),o.max(u)}return new THREE.Box2(s,o)}}class Up{constructor(e,t){this.container=e,this.camera=t,this.texture=new qc().load("./libs/ejx/assets/env/deathstar-bourgeois.jpg",this.textureLoaded.bind(this)),this.texture.encoding=Qe,this.geometry=new bn(1,1,1,1),this.geometry.name="EJEnvGeometry",this.material=new rn({name:"EJEnvMaterial",map:this.texture,color:new pe(16777215),opacity:1,transparent:!1,depthTest:!1,depthWrite:!1}),this.plane=new $e(this.geometry,this.material),this.plane.name="EJEnvMesh",this.plane.rotation.y=-Math.PI,this.plane.visible=!1,this.container.add(this.plane)}textureLoaded(e){this.textureWidth=e.image.width,this.textureHeight=e.image.height,this.textureAspect=this.textureWidth/this.textureHeight,this.plane.visible=!0}fitPlaneToScreen(e,t,n){let s=1*.5/Math.tan(t.fov*.5*(Math.PI/180)),o=new E;t.getWorldDirection(o),e.position.set(t.position.x,t.position.y,t.position.z),e.position.add(o.multiplyScalar(s)),e.rotation.setFromRotationMatrix(t.matrix),e.scale.set(n,1,1)}update(){this.fitPlaneToScreen(this.plane,this.camera,this.textureAspect)}}const Op="None",zp="Image";class Fp{constructor(e,t,n){this.container=e,this.camera=t,this.texture=n,this.textureWidth=window.innerWidth,this.textureHeight=window.innerHeight,this.textureAspect=this.textureWidth/this.textureHeight,this.geometry=new bn(1,1,1,1),this.geometry.name="EJEnvCameraGeometry",this.material=new rn({name:"EJEnvCameraMaterial",map:this.texture,color:new pe(16777215),opacity:1,transparent:!1,depthTest:!1,depthWrite:!1}),this.plane=new $e(this.geometry,this.material),this.plane.rotation.y=-Math.PI,this.container.add(this.plane)}fitPlaneToScreen(e,t,n){let s=1*.5/Math.tan(t.fov*.5*(Math.PI/180)),o=new E;t.getWorldDirection(o),e.position.set(t.position.x,t.position.y,t.position.z),e.position.add(o.multiplyScalar(s)),e.rotation.setFromRotationMatrix(t.matrix),e.scale.set(n,1,1)}update(){this.fitPlaneToScreen(this.plane,this.camera,this.textureAspect)}}const dc={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class La{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const B1=new Os(-1,1,1,-1,0,1),hh=new Fe;hh.setAttribute("position",new ge([-1,3,0,-1,-1,0,3,-1,0],3));hh.setAttribute("uv",new ge([0,2,0,0,2,0],2));class kp{constructor(e){this._mesh=new $e(hh,e),this._mesh.frustumCulled=!1}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,B1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class H1 extends La{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Lt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=br.clone(e.uniforms),this.material=new Lt({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new kp(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class ad extends La{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class V1 extends La{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class W1{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new W);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new Rt(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new H1(dc),this.clock=new Ws}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ad!==void 0&&(o instanceof ad?n=!0:o instanceof V1&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new W);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const ld={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new pe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Ls extends La{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new W(e.x,e.y):new W(256,256),this.clearColor=new pe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Rt(s,o),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new Rt(s,o);d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new Rt(s,o);f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),o=Math.round(o/2)}ld===void 0&&console.error("THREE.UnrealBloomPass relies on LuminosityHighPassShader");const a=ld;this.highPassUniforms=br.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Lt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.texSize.value=new W(s,o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,dc===void 0&&console.error("THREE.UnrealBloomPass relies on CopyShader");const u=dc;this.copyUniforms=br.clone(u.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new Lt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:ta,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new pe,this.oldClearAlpha=1,this.basic=new rn({transparent:!0}),this.fsQuad=new kp(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.texSize.value=new W(n,i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){window.spector&&window.spector.setMarker("Effect: Bloom"),e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ls.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ls.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){return new Lt({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new W(.5,.5)},direction:{value:new W(.5,.5)}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}
				void main() {
					vec2 invSize = 1.0 / texSize;
					float fSigma = float(SIGMA);
					float weightSum = gaussianPdf(0.0, fSigma);
					vec4 diffuseSum = texture2D( colorTexture, vUv) * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianPdf(x, fSigma);
						vec2 uvOffset = direction * invSize * x;
						vec4 sample1 = texture2D( colorTexture, vUv + uvOffset);
						vec4 sample2 = texture2D( colorTexture, vUv - uvOffset);
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum);
				}`})}getCompositeMaterial(e){return new Lt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},dirtTexture:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform sampler2D dirtTexture;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Ls.BlurDirectionX=new W(1,0);Ls.BlurDirectionY=new W(0,1);function G1(r,e){if(r.type==="bloom"){const t=r.strength??r.bloomStrength,n=r.radius??r.bloomRadius,i=r.threshold??r.bloomThreshold;return new Ls(new W(e.width,e.height),t,n,i)}}class uh{constructor(e,t,n=null){this.renderer=e,this.renderTarget=t,this.passLookup=new Map,this.composer=new W1(e,t),this.composer.renderToScreen=!1}setFromConfig(e){e=Array.isArray(e)?e:[e],this.clear();for(const t in e)this.addPass(e[t])}clear(){for(const e of this.passLookup.keys())this.removePass(e)}isEmpty(){return!this.passLookup.size}render(){this.renderer.xr.enabled=!1,window.spector&&window.spector.setMarker("Post processing"),this.composer.readBuffer!==this.renderTarget&&this.composer.swapBuffers(),this.composer.render(),window.spector&&window.spector.setMarker("END: Post processing"),this.renderer.xr.enabled=!0}addPass(e){const t=G1(e,this.renderTarget);return this.composer.addPass(t),this.passLookup.set(e.type,t),t}removePass(e){const t=this.passLookup.get(e);if(!t){console.warn(`EJPostProcessing: Attempted to remove "${e}" pass but none exists.`);return}return this.passLookup.delete(e),this.composer.removePass(t),t}hasPass(e){return this.passLookup.get(e)}configurePass(e,t){const n=this.passLookup.get(e);if(!n){console.warn(`EJPostProcessing: Attempted to configure "${e}" pass but none exists.`);return}switch(e){case"bloom":{const i=n;i.strength=t.strength,i.radius=t.radius,i.threshold=t.threshold}break}}getLastRenderTarget(){return this.composer.readBuffer}resize(e,t){this.composer.setSize(e,t)}dispose(){this.composer.dispose()}}kt.enabled=!0;let Bp=class extends ya{constructor(e){super(e),this.renderFunc=this.render,this.onBeforeRenderScene=null,this.onAfterRenderScene=null,this.render=(t,n)=>{const i=t.onBeforeRender,s=t.onAfterRender;this.onBeforeRenderScene&&(t.onBeforeRender=this.onBeforeRenderScene),this.onAfterRenderScene&&(t.onAfterRender=this.onAfterRenderScene),this.renderFunc(t,n),t.onBeforeRender=i,t.onAfterRender=s}}};class Ts{constructor(e){if(Ts.Instance)return Ts.Instance;Ts.Instance=this,this.config=e,this.config==null&&(this.config={gui:null});const t=window.innerWidth,n=window.innerHeight,i=window.devicePixelRatio;this.res=new W(t,n),this.resPixels=new W(t*i,n*i),this.devicePixelRatio=i,this.play=1,this.time=0,this.clock=new Ws(!1),this.contents=[],this.contentConfigOriginal=[],this.contentConfigCurrent=[],this.contentConfigInside=null,this.camerasData=[],this.cameraData={camera:null,inside:!1,insideChanged:!1,insideFaceIndex:-1,px:!1,nx:!1,py:!1,ny:!1,pz:!1,nz:!1},this.cameraData0=null,this.renderOverrideFunc=null,this.resizeOverrideFunc=null,this.clippingPlanesEmpty=Object.freeze([]),this.clippingPlanesCube=[];const s=et.getFaceNormals();for(let o=0;o<s.length;o++){const a=s[o],l=new An(a,.51);this.clippingPlanesCube.push(l)}this.saveImageFlag=!1,this.init(this.config),this.render()}init(e){const{canvas:t,renderer:n,camera:i,scene:s,cameraTexture:o}=e;t?this.canvas=t:(this.canvas=document.createElement("canvas"),this.canvas.id="ej-renderer");let a=this.canvas.getContext("webgl2");n?this.renderer=n:(this.renderer=new Bp({canvas:this.canvas,context:a,alpha:!0,antialias:!0}),this.renderer.setSize(this.res.x,this.res.y),this.renderer.setPixelRatio(this.devicePixelRatio),this.renderer.setClearColor(0,0),this.renderer.autoClear=!1,this.renderer.clippingPlanes=this.clippingPlanesEmpty,this.renderer.xr.enabled=!0,this.renderer.outputEncoding=Qe,this.renderer.toneMapping=fn,this.renderer.toneMappingExposure=1,this.renderer.useLegacyLights=!1),t||document.body.appendChild(this.renderer.domElement),i?this.camera=i:(this.camera=new wt(20,this.res.x/this.res.y,.01,1e3),this.camera.position.set(0,0,5),this.camera.lookAt(0,0,0),this.camera.name="xrCamera"),this.cameraTestMesh=null,this.orbitControls=new ah(this.camera,this.renderer.domElement),this.orbitControls.enableDamping=!0,this.orbitControls.minDistance=0,this.orbitControls.maxDistance=10,s?this.scene=s:(this.scene=new si,this.scene.background=null),o?this.cameraTexture=o:this.cameraTexture=null,this.initCommon(),this.cubeInit(ea),this.inputEventsInit(),window.addEventListener("resize",this.resizeHandler.bind(this)),this.renderer.setAnimationLoop(this.animationLoop.bind(this))}initCommon(){this.renderTargetContent=new Rt(this.resPixels.x,this.resPixels.y,{wrapS:Mt,wrapT:Mt,magFilter:st,minFilter:st,generateMipmaps:!1,format:qt,type:In,anisotropy:ct.anisotropy,encoding:Qe,depthBuffer:!0,stencilBuffer:!0,samples:0}),this.renderTargetContentMasked=this.renderTargetContent.clone(),this.renderTargetMask=this.renderTargetContent.clone(),this.renderTargetContent.texture.name="EJ.renderTargetContent",this.renderTargetContentMasked.texture.name="EJ.renderTargetContentMasked",this.renderTargetMask.texture.name="EJ.renderTargetMask",this.renderTargets=[this.renderTargetContent,this.renderTargetContentMasked,this.renderTargetMask],this.cubeMasterOpacity=1,this.cubeMasterOpacitySaved=1,this.cubeContainer=new Oe,this.scene.add(this.cubeContainer),this.cubeMask=new k1(new Oe,null),this.cubeMaskScene=new si,this.cubeMaskScene.add(this.cubeMask.container),this.cubeMaskPass=this.initMaskPass(),this.cubeMaskPassCamera=new Os(-1,1,1,-1,0,1),this.loadingManager=new qr,this.postProcessing=null,this.postProcessingConfig=[],this.contentLoadedCheck=!1,this.contentPerCubeFace={}}initMaskPass(){const e=new bn(2,2),t=new Lt({uniforms:{texContent:{type:"t",value:this.renderTargetContent.texture},texMask:{type:"t",value:this.renderTargetMask.texture},color:{value:new E(0,0,0)}},vertexShader:`
        varying vec2 vUv;
        void main(){ 
          vUv = uv;
          gl_Position = vec4( position, 1.0 );
        }
      `,fragmentShader:`
        uniform sampler2D texContent;
        uniform sampler2D texMask;
        uniform vec3 color;
        varying vec2 vUv;
        
        void main(){
          vec4 colorMask = texture2D( texMask, vUv);
          if( all( equal( colorMask.rgb, color ) ) ) {
            gl_FragColor = texture2D( texContent, vUv);
            return;
          }
          discard;
        }
      `}),n=new $e(e,t);return n.name="EJPlayer_MaskPassMesh",n.frustumCulled=!1,n}animationLoop(e,t){if(this.renderOverrideFunc!==null){this.renderOverrideFunc(e,t);return}this.render(e,t)}render(e,t){this.clock.running==!1&&this.clock.start();let n=this.clock.getDelta();n*=this.play,this.time+=n,this.orbitControls&&this.orbitControls.update(),this.cubeContainer.updateMatrixWorld(!0);const i=l=>{const c=new we;c.copy(this.cubeContainer.matrixWorld).invert();const u=new E(l.camera.position.x,l.camera.position.y,l.camera.position.z);u.applyMatrix4(c);const h=.5,d=u.x<=h,f=u.x>=-h,p=u.y<=h,x=u.y>=-h,g=u.z<=h,m=u.z>=-h,_=d&&f&&p&&x&&g&&m;l.insideChanged=l.inside!=_,l.inside=_,l.insideChanged&&l.inside&&(l.px!=d?l.insideFaceIndex=1:l.nx!=f?l.insideFaceIndex=3:l.py!=p?l.insideFaceIndex=4:l.ny!=x?l.insideFaceIndex=5:l.pz!=g?l.insideFaceIndex=0:l.nz!=m&&(l.insideFaceIndex=2)),l.px=d,l.nx=f,l.py=p,l.ny=x,l.pz=g,l.nz=m};let s=0;const o=(l,c,u)=>{this.camerasData.length===s&&this.camerasData.push(Object.assign({},this.cameraData));const h=this.camerasData[s];h.camera=u,i(h),s+=1};this.cameraTestMesh||(this.cameraTestMesh=new $e,this.cameraTestMesh.frustumCulled=!1),this.cameraTestMesh.onBeforeRender=o,this.renderer.render(this.cameraTestMesh,this.camera),this.camerasData.length>s&&s>=1&&this.camerasData.splice(s,this.camerasData.length-s),this.cameraData0=this.camerasData[0],this.envUpdate(),this.cubeUpdate(this.cameraData0.camera);const a=this.contentCurrent();a?this.renderContent(a):this.renderer.render(this.scene,this.camera)}renderContent(e){if(!e.instance)return;if(!e.instance.render){console.log("content.instance.render does not exist.");return}if(!this.cube){this.renderer.render(this.scene,this.camera),e.instance.update&&e.instance.update(),e.instance.render();return}const t=e.instance.loaded(),n=this.contentLoadedCheck!==t;if(this.contentLoadedCheck=t,this.contentLoadedCheck&&n){if(this.contentPerCubeFace={},e.instance.contentPerCubeFace&&(this.contentPerCubeFace=e.instance.contentPerCubeFace()),e.instance.postProcessing){const A=e.instance.postProcessing();this.postProcessingUpdate(A)}if(e.instance.cubeConfig){const A=e.instance.cubeConfig();this.setCubeConfig(A)}}const i=this.renderer.getRenderTarget();i&&this.renderer.xr.isPresenting&&this.resize(i.width,i.height,window.devicePixelRatio,!0),e.camera.copy(this.camera),e.scene.position.copy(this.cubeContainer.position),e.scene.quaternion.copy(this.cubeContainer.quaternion),e.scene.scale.copy(this.cubeContainer.scale);let s=this.renderer.clippingPlanes.length>0,o=!1;e.instance.useClippingPlanes&&(o=e.instance.useClippingPlanes()),o!==s&&(o?this.renderer.clippingPlanes=this.clippingPlanesCube:this.renderer.clippingPlanes=this.clippingPlanesEmpty);const l=et.getFaceNormals(),c=et.getFaceCentres(),u=[],h=new We().getNormalMatrix(this.cubeContainer.matrixWorld);for(let A=0;A<l.length;A++)l[A].applyMatrix3(h).normalize();for(let A=0;A<c.length;A++)c[A].applyMatrix4(this.cubeContainer.matrixWorld);this.camerasData.forEach(A=>{const T=A.camera;for(let M=0;M<6;M++){if(T.position.clone().sub(c[M]).dot(l[M])>0===!1||et.getFaceOnScreen(M,this.cubeContainer.matrixWorld,T)===!1)continue;u.findIndex(R=>R===M)===-1&&u.push(M)}}),this.cameraData0.insideChanged&&(this.cameraData0.inside?this.contentConfigCurrent.forEach(A=>{A.cubeFaceIndices.find(M=>M===this.cameraData0.insideFaceIndex)!==void 0&&(this.contentConfigInside=A,this.contentConfigInside.isInsidePortal=!0)}):(this.contentConfigInside.isInsidePortal=!1,this.contentConfigInside=null));const d=et.getFaceColorMasks();if(this.contentConfigOriginal=[],this.contentPerCubeFace){const A=[];for(A.push({contentID:this.contentPerCubeFace.front?this.contentPerCubeFace.front:0,cubeFaceIndex:0}),A.push({contentID:this.contentPerCubeFace.right?this.contentPerCubeFace.right:0,cubeFaceIndex:1}),A.push({contentID:this.contentPerCubeFace.back?this.contentPerCubeFace.back:0,cubeFaceIndex:2}),A.push({contentID:this.contentPerCubeFace.left?this.contentPerCubeFace.left:0,cubeFaceIndex:3}),A.push({contentID:this.contentPerCubeFace.top?this.contentPerCubeFace.top:0,cubeFaceIndex:4}),A.push({contentID:this.contentPerCubeFace.bottom?this.contentPerCubeFace.bottom:0,cubeFaceIndex:5});A.length>0;){const T=A.splice(0,1)[0],M=[T.cubeFaceIndex];for(let S=0;S<A.length;S++)if(A[S].contentID===T.contentID){const z=A.splice(S--,1)[0];M.push(z.cubeFaceIndex)}this.contentConfigOriginal.push({contentID:T.contentID,cubeFaceIndices:M,colorMask:d.splice(0,1)[0]})}}this.contentConfigOriginal.length===0&&(this.contentConfigOriginal=[{contentID:0,cubeFaceIndices:[0,1,2,3,4,5],colorMask:d[0]}]),this.contentConfigCurrent=[],this.contentConfigOriginal.forEach(A=>{this.contentConfigCurrent.push({contentID:A.contentID,cubeFaceIndices:[...A.cubeFaceIndices],colorMask:new E().copy(A.colorMask),isInsidePortal:!1})}),this.contentConfigCurrent.forEach(A=>{A.cubeFaceIndices.forEach(T=>{this.cubeMask.setFaceColorMask(T,A.colorMask)})}),window.spector&&window.spector.setMarker("Render: Cube Mask Scene"),this.renderer.setRenderTarget(this.renderTargetMask),this.renderer.clear(),this.cubeMaskScene.position.copy(this.cubeContainer.position),this.cubeMaskScene.quaternion.copy(this.cubeContainer.quaternion),this.cubeMaskScene.scale.copy(this.cubeContainer.scale),this.renderer.render(this.cubeMaskScene,this.camera);let f=[];this.contentConfigInside?f=[this.contentConfigInside]:this.contentConfigCurrent.forEach(A=>{A.cubeFaceIndices.forEach(T=>{u.findIndex(S=>S===T)>=0&&f.push(A)})}),e.instance.update&&e.instance.update();let p=null;const x=(A,T,M)=>{this.renderer.setScissorTest(!1);let S=!0;if(S=S&&p.isInsidePortal===!1,S===!1)return;const D=new E(0,0,0),z=new E(1,1,1),N=new we;N.compose(D,this.cubeContainer.quaternion,z);const R=new ra;R.min.x=0,R.min.y=0,R.max.x=this.resPixels.x,R.max.y=this.resPixels.y,M.viewport&&(R.max.x=M.viewport.z,R.max.y=M.viewport.w);const O=new ra;for(let ye=0;ye<p.cubeFaceIndices.length;ye++){const re=p.cubeFaceIndices[ye];if(u.find(Q=>Q===re)===void 0)continue;const B=et.getFaceBoundingBox(re,N,M);B!==null&&(B.min.x*=R.max.x,B.max.x*=R.max.x,B.min.y*=R.max.y,B.max.y*=R.max.y,O.isEmpty()?O.copy(B):O.union(B))}if(O.isEmpty()||O.equals(R))return;const $=O.min.x+(M.viewport?M.viewport.x:0),K=R.max.y-O.max.y,j=O.max.x-O.min.x,ee=O.max.y-O.min.y;let te=!1;te=te||j<=0,te=te||ee<=0,!te&&(this.renderer.setScissorTest(!0),this.renderer.setScissor($/this.devicePixelRatio,K/this.devicePixelRatio,j/this.devicePixelRatio,ee/this.devicePixelRatio))},g=new $e;g.frustumCulled=!1,g.name="camera-probe",g.renderOrder=-1/0,g.onBeforeRender=x;const m=[new we,new we],_=new E,v=new E,y=(A,T,M)=>{T.add(g),_.copy(T.scale),v.copy(T.position),T.scale.set(1,1,1),T.position.set(0,0,0),T.updateMatrixWorld(!0);const S=D=>{const z=new E(0,0,0);z.sub(D.position),z.add(v),z.multiplyScalar(-1/_.x),D.position.copy(z),D.matrix.compose(D.position,D.quaternion,D.scale),D.matrixWorld.copy(D.matrix),D.updateMatrixWorld(!0)};m[0].copy(M.matrix),S(M),M.cameras&&M.cameras.forEach((D,z)=>{m[z].copy(D.matrix),S(D)})},b=(A,T,M)=>{g.removeFromParent();const S=(D,z)=>{D.matrix.copy(z),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0)};S(M,m[0]),M.cameras&&M.cameras.forEach((D,z)=>{S(D,m[z])}),T.scale.copy(_),T.position.copy(v),T.updateMatrixWorld(!0)};for(let A=0;A<f.length;A++){const T=f[A];p=T,window.spector&&window.spector.setMarker(`Rendering ${T.contentID}`),this.renderer.setRenderTarget(this.renderTargetContent),this.renderer.clear(),this.renderer.onBeforeRenderScene=y,this.renderer.onAfterRenderScene=b,e.instance.render(T.contentID),this.renderer.onBeforeRenderScene=null,this.renderer.onAfterRenderScene=null,this.camerasData.length===2&&this.renderer.setScissorTest(!1),(this.cameraData0.inside===!1||T.isInsidePortal)&&this.cubeMask.cubeBackMaterial.color.setRGB(T.colorMask.x,T.colorMask.y,T.colorMask.z),this.cubeMaskPass.material.uniforms.color.value=T.colorMask,this.cubeMaskPass.material.uniformsNeedUpdate=!0,window.spector&&window.spector.setMarker("Render: Cube Mask Pass"),this.renderer.setRenderTarget(this.renderTargetContentMasked),A==0&&this.renderer.clear();const M=this.renderer.xr.enabled;this.renderer.xr.enabled=!1,this.renderer.render(this.cubeMaskPass,this.cubeMaskPassCamera),this.renderer.xr.enabled=M,this.camerasData.length===1&&this.renderer.setScissorTest(!1)}let w=this.renderTargetContentMasked.texture;this.postProcessing&&(this.postProcessing.render(),w=this.postProcessing.getLastRenderTarget().texture),this.cubeUpdateProps(w,this.resPixels),this.saveImageFlag&&(this.saveImageFlag=!1,this.renderExterior()),this.renderer.setRenderTarget(i),window.spector&&window.spector.setMarker("Rendering EJPlayer scene"),this.renderer.render(this.scene,this.camera)}renderExterior(){window.spector&&window.spector.setMarker("Render: Exteriqor");const e=this.contentCurrent();if(!(e&&e.instance&&e.instance.render))return;const n=this.res.clone(),i=this.devicePixelRatio,s=512;this.resize(s,s,1);const o=this.renderTargetContent.clone();o.texture.name="EJ.renderTargetFace",o.texture.encoding=Mn,this.cubeContainer.matrix.identity(),this.cubeContainer.matrix.decompose(this.cubeContainer.position,this.cubeContainer.quaternion,this.cubeContainer.scale),this.cubeContainer.matrixWorld.decompose(this.cubeMaskScene.position,this.cubeMaskScene.quaternion,this.cubeMaskScene.scale),this.cubeContainer.matrix.decompose(e.scene.position,e.scene.quaternion,e.scene.scale);const a=this.camera.clone(),l=this.camera.clone();let c={};e.instance.contentPerCubeFace&&(c=e.instance.contentPerCubeFace());const u=et.getFaceDescriptors(),h=et.getFaceNormals(),d=et.getFaceColorMasks(),f=["pz","px","nz","nx","py","ny"];for(let p=0;p<u.length;p++){const x=.5/Math.tan(l.fov*.5*(Math.PI/180))+.5,g=h[p];g.multiplyScalar(x),l.position.copy(g),l.lookAt(0,0,0),window.spector&&window.spector.setMarker(`Cube Content ${p}`),this.camera.copy(l),e.camera.copy(l);const m=d[p];this.cubeMask.setFaceColorMask(p,m),this.cubeMask.cubeBackMaterial.color.setRGB(m.x,m.y,m.z),this.cubeMaskPass.material.uniforms.color.value=m,this.cubeMaskPass.material.uniformsNeedUpdate=!0,this.renderer.setRenderTarget(this.renderTargetMask),this.renderer.clear(),this.renderer.render(this.cubeMaskScene,l),this.renderer.setRenderTarget(this.renderTargetContent),this.renderer.clear();const _=u[p];let v=0;c[_]&&(v=c[_]),e.instance.render(v),this.renderer.setRenderTarget(this.renderTargetContentMasked),this.renderer.clear(),this.renderer.render(this.cubeMaskPass,this.cubeMaskPassCamera),this.renderer.setRenderTarget(o),this.renderer.clear(),this.renderer.render(this.cubeContainer,l);const y=new Uint8Array(s*s*4),b=new Uint8Array(s*s*4);this.renderer.readRenderTargetPixels(o,0,0,s,s,y);for(let A=0;A<s;A++){const T=A*s*4,M=(s-A-1)*s*4;b.set(y.subarray(T,T+s*4),M)}const w=f[p]+".png";this.saveImage(b,s,s,w)}o.dispose(),e.camera.copy(a),this.resize(n.x,n.y,i)}dispose(){this.inputEventsKill()}requestSaveImage(){this.saveImageFlag=!0}saveImage(e,t,n,i){const s=document.createElement("canvas");s.width=t,s.height=n;const o=s.getContext("2d"),a=o.createImageData(t,n);a.data.set(e),o.putImageData(a,0,0),s.toBlob(l=>{this.downloadImage(l,i)},"image/png")}downloadImage(e,t){let n=document.createElement("a");document.body.appendChild(n),n.download=t,n.href=URL.createObjectURL(e),n.click(),document.body.removeChild(n)}resize(e=window.innerWidth,t=window.innerHeight,n=window.devicePixelRatio,i=!1){if(this.res.x===e&&this.res.y===t&&this.devicePixelRatio===n)return;this.res=new W(e,t),this.devicePixelRatio=n,i?this.resPixels=new W(e,t):(this.resPixels=new W(e*n,t*n),this.camera.aspect=this.res.x/this.res.y,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.res.x,this.res.y),this.renderer.setPixelRatio(n)),this.renderTargets.forEach(o=>{o.setSize(this.resPixels.x,this.resPixels.y)});const s=this.contentCurrent();s&&s.instance&&s.instance.resize&&s.instance.resize(this.resPixels.x,this.resPixels.y),this.cubeUpdateProps(this.renderTargetContentMasked.texture,this.resPixels),this.postProcessing&&this.postProcessing.resize(this.resPixels.x,this.resPixels.y)}resizeHandler(){if(this.resizeOverrideFunc!==null){this.resizeOverrideFunc();return}this.resize()}inputEventsInit(){document.addEventListener("keydown",this.inputHandler.bind(this)),document.addEventListener("keyup",this.inputHandler.bind(this)),document.addEventListener("pointerdown",this.inputHandler.bind(this)),document.addEventListener("pointerup",this.inputHandler.bind(this)),document.addEventListener("pointermove",this.inputHandler.bind(this))}inputEventsKill(){document.removeEventListener("keydown",this.inputHandler.bind(this)),document.removeEventListener("keyup",this.inputHandler.bind(this)),document.removeEventListener("pointerdown",this.inputHandler.bind(this)),document.removeEventListener("pointerup",this.inputHandler.bind(this)),document.removeEventListener("pointermove",this.inputHandler.bind(this))}inputHandler(e){const t=this.contentCurrent();t&&t.instance&&t.instance[e.type]&&t.instance[e.type](e)}envKill(){this.env!=null&&(this.env.container.parent&&this.env.container.parent.remove(this.env.container),this.env=null)}envCameraInit(){this.env=new Fp(new Oe,this.camera,this.cameraTexture),this.scene.add(this.env.container)}envInit(e){this.envKill(),e!=Op&&(e==zp&&(this.env=new Up(new Oe,this.camera)),this.scene.add(this.env.container))}envUpdate(){this.env&&this.env.update()}cubeKill(){this.cube!=null&&(this.cube.dispose(),this.cube=null)}cubeInit(e){let t=!1;if(t=t||e===cc,t=t||e===ea,t=t||e===hc,t=t||e===uc,t==!1)return;let n=!0;n=n&&this.cube!=null,n=n&&this.cube.style===e,!n&&(this.cubeKill(),e!=cc&&(e==ea?this.cube=new Np(this.cubeContainer,this.config.gui):e==hc?this.cube=new N1(this.cubeContainer,this.config.gui):e==uc&&(this.cube=new F1(this.cubeContainer,this.config.gui)),this.cubeUpdateProps(this.renderTargetContentMasked.texture,this.resPixels),this.cube.updateMasterOpacity(this.cubeMasterOpacity)))}cubeUpdate(e){if(this.cube==null)return;this.cube.update(e);const t=this.cubeMasterOpacitySaved!=this.cubeMasterOpacity;this.cubeMasterOpacitySaved=this.cubeMasterOpacity,t&&this.cube.updateMasterOpacity(this.cubeMasterOpacity)}cubeUpdateProps(e,t){this.cube!=null&&this.cube.updateProps(e,t)}contentLoaded(){const e=this.contentCurrent();return e?e.instance&&e.instance.loaded?e.instance.loaded():!0:!1}contentLoadProgress(){let e=0;const t=this.contentCurrent();return t&&t.instance&&t.instance.loadProgress&&(e=t.instance.loadProgress()),e}contentBox(e){if(!this.boxDefault){const t=new THREE.Vector3(0,0,0),n=new THREE.Vector3(1,1,1);this.boxDefault=new on,this.boxDefault.setFromCenterAndSize(t,n)}e.copy(this.boxDefault)}contentCurrent(){return this.contents.length==0?null:this.contents[this.contents.length-1]}contentDispose(e){e.instance&&e.instance.dispose&&e.instance.dispose(),e.scene&&Tt.disposeRecursive(e.scene),e.gui&&e.gui.destroy(),this.contentLoadedCheck=!1,this.contentPerCubeFace={},this.postProcessingDispose()}contentInstantiate(e){const t=this.contentCurrent();if(t==null)return;t.scene=new si,t.scene.name="Content-Scene",t.camera=this.camera,this.config.gui&&(t.gui=this.config.gui.addFolder("Content Settings"));const n=i=>{const s=t.filename;return s.substring(0,s.lastIndexOf("/"))+"/"+i};if(this.loadingManager.setURLModifier(n),t.instance=e.main({canvas:this.canvas,renderer:this.renderer,renderTarget:this.renderTargetContent,scene:t.scene,camera:t.camera,loadingManager:this.loadingManager,gui:t.gui}),t.instance.cubeStyle){const i=t.instance.cubeStyle();this.cubeInit(i)}}contentKill(e){this.contentDispose(e)}contentKillAll(){this.contents.forEach(e=>{this.contentKill(e)}),this.contents.splice(0,this.contents.length)}contentValidate(e){return!0}postProcessingUpdate(e){e?Array.isArray(e)||(e=[e]):e=[];let t=!1;if(t=t||this.postProcessingConfig.length!==e.length,!t)for(let n=0;n<this.postProcessingConfig.length;n++){const i=this.postProcessingConfig[n],s=e[n];t=t||i.type!==s.type}if(t)this.postProcessingDispose(),e.length>0&&(this.postProcessing=new uh(this.renderer,this.renderTargetContentMasked,null),this.postProcessing.setFromConfig(e));else if(this.postProcessing)for(let n=0;n<e.length;n++)this.postProcessing.configurePass(e[n].type,e[n]);this.postProcessingConfig=e}postProcessingDispose(){this.postProcessing&&(this.postProcessing.dispose(),this.postProcessing=null,this.postProcessingConfig=[])}setContent({filename:e,module:t}){if(this.contentValidate(e)==!1)return;this.contentKillAll();const n={filename:e,identifier:e.split(".js")[0]+"-script",module:t,instance:null,scene:null,gui:null};this.contents.push(n),this.contentInstantiate(t)}setContentPerCubeFace(e){this.contentPerCubeFace=e}getContentPerCubeFace(){return this.contentPerCubeFace}setCube(e){this.cubeInit(e)}setEnvironment(e){this.envInit(e)}setPostProcessingConfig(e){this.postProcessingUpdate(e)}getPostProcessingConfig(){return this.postProcessingConfig}setCubeConfig(e){this.cube&&this.cube.setConfig(e)}}const xs=.004,cd=.0015;class j1{constructor(e,t){this.camera=e,this.canvas=t,this.enabled=!0,this.locked=!1,this.camera.rotation.order="YXZ",this.direction=new E,this.moveForward=!1,this.moveBackward=!1,this.moveLeft=!1,this.moveRight=!1,this.moveUp=!1,this.moveDown=!1,t.addEventListener("mousemove",this.handleMouseMove.bind(this)),t.addEventListener("click",this.requestPointerLock.bind(this)),document.addEventListener("keydown",this.handleKeyDown.bind(this)),document.addEventListener("keyup",this.handleKeyUp.bind(this)),document.addEventListener("pointerlockchange",this.handlePointerLockChange.bind(this)),document.addEventListener("mozpointerlockchange",this.handlePointerLockChange.bind(this)),document.addEventListener("webkitpointerlockchange",this.handlePointerLockChange.bind(this))}setPosition(e){this.camera.position.copy(e),this.camera.updateWorldMatrix()}setRotation(e){this.camera.rotation.copy(e),this.camera.updateWorldMatrix()}update(){!this.enabled||!this.locked||(this.camera.getWorldDirection(this.direction),this.moveForward?this.camera.translateZ(-xs):this.moveBackward&&this.camera.translateZ(xs),this.moveLeft?this.camera.translateX(-xs):this.moveRight&&this.camera.translateX(xs),this.moveUp?this.camera.translateY(xs):this.moveDown&&this.camera.translateY(-xs))}handleMouseMove(e){!this.enabled||!this.locked||(this.camera.rotation.y-=e.movementX*cd,this.camera.rotation.x-=e.movementY*cd)}handleKeyDown(e){e.key==="w"&&(this.moveForward=!0,this.moveBackward=!1),e.key==="s"&&(this.moveForward=!1,this.moveBackward=!0),e.key==="a"&&(this.moveLeft=!0,this.moveRight=!1),e.key==="d"&&(this.moveLeft=!1,this.moveRight=!0),e.key===" "&&(this.moveUp=!0,this.moveDown=!1),e.key==="c"&&(this.moveUp=!1,this.moveDown=!0)}handleKeyUp(e){e.key==="w"&&this.moveForward&&(this.moveForward=!1),e.key==="s"&&this.moveBackward&&(this.moveBackward=!1),e.key==="a"&&this.moveLeft&&(this.moveLeft=!1),e.key==="d"&&this.moveRight&&(this.moveRight=!1),e.key===" "&&this.moveUp&&(this.moveUp=!1),e.key==="c"&&this.moveDown&&(this.moveDown=!1)}requestPointerLock(){this.enabled&&(this.canvas.requestPointerLock&&this.canvas.requestPointerLock(),this.canvas.mozRequestPointerLock&&this.canvas.mozRequestPointerLock(),this.canvas.webkitRequestPointerLock&&this.canvas.webkitRequestPointerLock())}handlePointerLockChange(){this.locked=document.pointerLockElement===this.canvas||document.mozPointerLockElement===this.canvas||document.webkitPointerLockElement===this.canvas}}class Y1{constructor(){this.enabled=!0}update(){}}kt.enabled=!0;class X1 extends ya{constructor(e){super(e),this.renderFunc=this.render,this.onBeforeRenderScene=null,this.onAfterRenderScene=null,this.render=(t,n)=>{const i=t.onBeforeRender,s=t.onAfterRender;this.onBeforeRenderScene&&(t.onBeforeRender=this.onBeforeRenderScene),this.onAfterRenderScene&&(t.onAfterRender=this.onAfterRenderScene),this.renderFunc(t,n),t.onBeforeRender=i,t.onAfterRender=s}}}class Ra{constructor(e){this.config=e,this.config==null&&(this.config={gui:null});const t=window.innerWidth,n=window.innerHeight,i=window.devicePixelRatio;this.res=new W(t,n),this.resPixels=new W(t*i,n*i),this.devicePixelRatio=i,this.contents=[],this.renderOverrideFunc=null,this.resizeOverrideFunc=null,this.init(this.config),this.render()}init(e){const{canvas:t,renderer:n,camera:i,scene:s,cameraTexture:o}=e;t?this.canvas=t:(this.canvas=document.createElement("canvas"),this.canvas.id="ej-renderer");let a=this.canvas.getContext("webgl2",{stencil:!0});n?this.renderer=n:(this.renderer=new X1({canvas:this.canvas,context:a,alpha:!0,antialias:!0}),this.renderer.setSize(this.res.x,this.res.y),this.renderer.setPixelRatio(this.devicePixelRatio),this.renderer.setClearColor(0,0),this.renderer.autoClear=!1,this.renderer.xr.enabled=!0,this.renderer.outputEncoding=Qe,this.renderer.toneMapping=fn,this.renderer.toneMappingExposure=1,this.renderer.useLegacyLights=!1,this.gl=a),t||document.body.appendChild(this.renderer.domElement),i?this.camera=i:(this.camera=new wt(35,this.res.x/this.res.y,.01,1e3),this.camera.position.set(0,0,5),this.camera.lookAt(0,0,0),this.camera.name="xrCamera"),this.initControls(),s?this.scene=s:(this.scene=new si,this.scene.background=null),o?this.cameraTexture=o:this.cameraTexture=null,this.commonInit(),this.sceneInit(),this.inputEventsInit(),window.addEventListener("resize",this.resizeHandler.bind(this)),this.renderer.setAnimationLoop(this.animationLoop.bind(this))}initControls(){this.camera.position.set(0,0,2),this.avilableControls={},this.avilableControls.NoControls=new Y1,this.avilableControls.NoClipControls=new j1(this.camera,this.renderer.domElement),this.avilableControls.NoClipControls.enabled=!1,this.avilableControls.OrbitControls=new ah(this.camera,this.renderer.domElement),this.avilableControls.OrbitControls.enabled=!1,this.avilableControls.OrbitControls.enableDamping=!0,this.avilableControls.OrbitControls.minDistance=0,this.avilableControls.OrbitControls.maxDistance=10;const e={controls:"OrbitControls"};this.controls=this.avilableControls[e.controls],this.controls.enabled=!0,this.config.gui&&this.config.gui.addFolder("Controls").add(e,"controls",["OrbitControls","NoClipControls","NoControls"],e.controls).onChange(n=>{Object.values(this.avilableControls).forEach(i=>i.enabled=!1),this.controls=this.avilableControls[n],this.controls.enabled=!0,this.camera.position.set(0,0,2)})}commonInit(){this.renderTargetContent=new Rt(this.resPixels.x,this.resPixels.y,{wrapS:Mt,wrapT:Mt,magFilter:st,minFilter:st,generateMipmaps:!1,format:qt,type:In,anisotropy:ct.anisotropy,encoding:Qe,depthBuffer:!0,stencilBuffer:!0,samples:0}),this.renderTargetContentMasked=this.renderTargetContent.clone(),this.renderTargetMask=this.renderTargetContent.clone(),this.renderTargetContent.texture.name="EJ.renderTargetContent",this.renderTargetContentMasked.texture.name="EJ.renderTargetContentMasked",this.renderTargetMask.texture.name="EJ.renderTargetMask",this.renderTargets=[this.renderTargetContent,this.renderTargetContentMasked,this.renderTargetMask],this.masterOpacity=1,this.contentContainer=new Oe,this.loadingManager=new qr,this.postProcessing=null,this.postProcessingConfig=[],this.contentLoadedCheck=!1}sceneInit(){this.contentFsQuadUvMap=new Ze(0,0,1,1),this.contentFsQuadMat=new Hs({uniforms:{texContent:{type:"t",value:this.renderTargetContent.texture},uvMap:{value:this.contentFsQuadUvMap},masterOpacity:{value:this.masterOpacity}},vertexShader:`
        precision highp float;
        precision highp int;

        attribute vec3 position;
        attribute vec2 uv;
        
        varying vec2 vUv;
        
        void main() {
          vUv = uv;
          gl_Position = vec4(position.x, position.y, 0.0, 1.0);
        }
      `,fragmentShader:`
        precision highp float;
        precision highp int;

        uniform sampler2D texContent;
        uniform vec4 uvMap;
        uniform float masterOpacity;

        varying vec2 vUv;

        float lerp(float a, float b, float t) {
          return (b - a) * t + a;
        }
  
        vec4 LinearTosRGB( vec4 value ) {
          return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
        }      
  
        void main() {
          vec2 uv = vec2(
            lerp( uvMap.x, uvMap.z, vUv.x ),
            lerp( uvMap.y, uvMap.w, vUv.y )
          );
          vec4 color = texture2D( texContent, uv );
          color = LinearTosRGB( color );
          color.a *= masterOpacity;
          gl_FragColor = color;
        }
      `,side:Zt,transparent:!0,depthTest:!1,depthWrite:!1}),this.contentFsQuad=new $e(new bn(2,2),this.contentFsQuadMat),this.contentFsQuad.frustumCulled=!1,this.contentFsQuad.onBeforeRender=(e,t,n)=>{const i=this.renderer.xr.getCamera().cameras;i.length===2&&this.renderer.xr.isPresenting?i[0]===n?(this.contentFsQuadUvMap.set(0,0,.5,1).divideScalar(window.devicePixelRatio),this.contentFsQuadMat.uniforms.uvMap.value.copy(this.contentFsQuadUvMap),this.contentFsQuadMat.uniformsNeedUpdate=!0):(this.contentFsQuadUvMap.set(.5,0,1,1).divideScalar(window.devicePixelRatio),this.contentFsQuadMat.uniforms.uvMap.value.copy(this.contentFsQuadUvMap),this.contentFsQuadMat.uniformsNeedUpdate=!0):(this.contentFsQuadUvMap.set(0,0,1,1),this.contentFsQuadMat.uniforms.uvMap.value.equals(this.contentFsQuadUvMap)||(this.contentFsQuadMat.uniforms.uvMap.value.copy(this.contentFsQuadUvMap),this.contentFsQuadMat.uniformsNeedUpdate=!0)),this.contentFsQuadMat.uniforms.masterOpacity.value!=this.masterOpacity&&(this.contentFsQuadMat.uniforms.masterOpacity.value=this.masterOpacity,this.contentFsQuadMat.uniformsNeedUpdate=!0)},this.scene.add(this.contentFsQuad)}timeUpdate(){this.clock||(this.clock=new Ws(!1),this.clock.start(),this.play=1,this.time=0,this.timeDelta=0),this.timeDelta=this.clock.getDelta(),this.timeDelta*=this.play,this.time+=this.timeDelta}animationLoop(e,t){if(this.renderOverrideFunc!==null){this.renderOverrideFunc(e,t);return}this.timeUpdate(),this.render(e,t)}render(e,t){this.controls&&this.controls.update(),this.envUpdate(),this.camerasUpdate();const n=this.contentCurrent();if(!(n&&n.instance&&n.instance.render)){this.renderer.render(this.scene,this.camera);return}this.contentContainer.updateMatrixWorld(!0),n.camera.copy(this.camera),n.scene.position.copy(this.contentContainer.position),n.scene.quaternion.copy(this.contentContainer.quaternion),n.scene.scale.copy(this.contentContainer.scale),n.instance.update&&n.instance.update(),this.renderContent(n)}renderContent(e){let t=0;if(e.instance){const o=e.instance.loaded(),a=this.contentLoadedCheck!==o;if(this.contentLoadedCheck=o,this.contentLoadedCheck&&a&&e.instance.postProcessing){const l=e.instance.postProcessing();this.postProcessingUpdate(l)}if(e.instance.contentPerCubeFace){const l=e.instance.contentPerCubeFace();l&&l.front&&(t=l.front)}}const n=this.renderer.getRenderTarget();this.renderer.xr.getCamera().cameras.length===2&&this.renderer.xr.isPresenting&&n&&this.resize(n.width,n.height,1,!1),this.renderer.setRenderTarget(this.renderTargetContent),this.renderer.clear(),e.instance.render(t),this.postProcessing&&this.postProcessing.render(),this.renderer.setRenderTarget(n),this.renderer.render(this.scene,this.camera)}dispose(){this.inputEventsKill()}resize(e=window.innerWidth,t=window.innerHeight,n=window.devicePixelRatio,i=!0){if(this.res.x===e&&this.res.y===t&&this.devicePixelRatio===n)return;this.res.set(e,t),this.resPixels.set(e*n,t*n),this.devicePixelRatio=n,i&&(this.camera.aspect=this.res.x/this.res.y,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.res.x,this.res.y),this.renderer.setPixelRatio(n)),this.renderTargets.forEach(o=>{o.setSize(this.resPixels.x,this.resPixels.y)});const s=this.contentCurrent();s&&s.instance&&s.instance.resize&&s.instance.resize(this.resPixels.x,this.resPixels.y),this.postProcessing&&this.postProcessing.resize(this.resPixels.x,this.resPixels.y)}resizeHandler(){if(this.resizeOverrideFunc!==null){this.resizeOverrideFunc();return}this.resize()}camerasUpdate(){this.cameras||(this.cameras=[]);let e=0;const t=(n,i,s)=>{this.cameras.length===e&&this.cameras.push(s),e+=1};this.cameraProbe||(this.cameraProbe=new $e,this.cameraProbe.frustumCulled=!1),this.cameraProbe.onBeforeRender=t,this.renderer.render(this.cameraProbe,this.camera),this.cameras.length>e&&e>=1&&this.cameras.splice(e,this.cameras.length-e)}inputEventsInit(){document.addEventListener("keydown",this.inputHandler.bind(this)),document.addEventListener("keyup",this.inputHandler.bind(this)),document.addEventListener("pointerdown",this.inputHandler.bind(this)),document.addEventListener("pointerup",this.inputHandler.bind(this)),document.addEventListener("pointermove",this.inputHandler.bind(this))}inputEventsKill(){document.removeEventListener("keydown",this.inputHandler.bind(this)),document.removeEventListener("keyup",this.inputHandler.bind(this)),document.removeEventListener("pointerdown",this.inputHandler.bind(this)),document.removeEventListener("pointerup",this.inputHandler.bind(this)),document.removeEventListener("pointermove",this.inputHandler.bind(this))}inputHandler(e){const t=this.contentCurrent();t&&t.instance&&t.instance[e.type]&&t.instance[e.type](e)}envKill(){this.env!=null&&(this.env.container.parent&&this.env.container.parent.remove(this.env.container),this.env=null)}envCameraInit(){this.env=new Fp(new Oe,this.camera,this.cameraTexture),this.scene.add(this.env.container)}envInit(e){this.envKill(),e!=Op&&(e==zp&&(this.env=new Up(new Oe,this.camera)),this.scene.add(this.env.container))}envUpdate(){this.env&&this.env.update()}contentLoaded(){const e=this.contentCurrent();return e?e.instance&&e.instance.loaded?e.instance.loaded():!0:!1}contentLoadProgress(){let e=0;const t=this.contentCurrent();return t&&t.instance&&t.instance.loadProgress&&(e=t.instance.loadProgress()),e}contentBox(e){const t=this.contentCurrent();if(t&&t.instance&&t.instance.box){const n=t.instance.box();n instanceof on&&e.copy(n)}}contentCurrent(){return this.contents.length==0?null:this.contents[this.contents.length-1]}contentDispose(e){e.instance&&e.instance.dispose&&e.instance.dispose(),e.scene&&Tt.disposeRecursive(e.scene),e.gui&&e.gui.destroy(),this.contentLoadedCheck=!1,this.postProcessingDispose()}contentInstantiate(e){const t=this.contentCurrent();if(t==null)return;t.scene=new si,t.scene.name="Content-Scene",t.camera=this.camera,this.config.gui&&(t.gui=this.config.gui.addFolder("Content Settings"));const n=i=>{const s=t.filename;return s.substring(0,s.lastIndexOf("/"))+"/"+i};this.loadingManager.setURLModifier(n),t.instance=e.main({canvas:this.canvas,renderer:this.renderer,renderTarget:this.renderTargetContent,scene:t.scene,camera:t.camera,loadingManager:this.loadingManager,gui:t.gui})}contentKill(e){this.contentDispose(e)}contentKillAll(){this.contents.forEach(e=>{this.contentKill(e)}),this.contents.splice(0,this.contents.length)}contentValidate(e){return!0}postProcessingUpdate(e){e?Array.isArray(e)||(e=[e]):e=[];let t=!1;if(t=t||this.postProcessingConfig.length!==e.length,!t)for(let n=0;n<this.postProcessingConfig.length;n++){const i=this.postProcessingConfig[n],s=e[n];t=t||i.type!==s.type}if(t)this.postProcessingDispose(),e.length>0&&(this.postProcessing=new uh(this.renderer,this.renderTargetContent,null),this.postProcessing.setFromConfig(e));else if(this.postProcessing)for(let n=0;n<e.length;n++)this.postProcessing.configurePass(e[n].type,e[n]);this.postProcessingConfig=e}postProcessingDispose(){this.postProcessing&&(this.postProcessing.dispose(),this.postProcessing=null,this.postProcessingConfig=[])}setContent({filename:e,module:t}){if(this.contentValidate(e)==!1)return;this.contentKillAll();const n={filename:e,identifier:e.split(".js")[0]+"-script",module:t,instance:null,scene:null,gui:null};this.contents.push(n),this.contentInstantiate(t)}setCube(e){}setEnvironment(e){this.envInit(e)}setPostProcessingConfig(e){this.postProcessingUpdate(e)}getPostProcessingConfig(){return this.postProcessingConfig}}class q1 extends Ra{constructor(e){super(e)}sceneInit(){this.cubeContainer=new Oe,this.cube=new Np(this.cubeContainer,this.config.gui),this.cube.cubeBack.onBeforeRender=(e,t,n)=>{const i=this.renderer.xr.getCamera().cameras;i.length===2&&this.renderer.xr.isPresenting&&i[0],this.cubeContainer.position.copy(this.contentContainer.position),this.cubeContainer.quaternion.copy(this.contentContainer.quaternion),this.cubeContainer.scale.copy(this.contentContainer.scale),this.cube.updateMasterOpacity(this.masterOpacity),this.cube.updateProps(this.renderTargetContent.texture,this.resPixels)},this.scene.add(this.cubeContainer)}setCubeConfig(e){this.cube.setConfig(e)}contentBox(e){if(!this.boxDefault){const t=new THREE.Vector3(0,0,0),n=new THREE.Vector3(1,1,1);this.boxDefault=new on,this.boxDefault.setFromCenterAndSize(t,n)}e.copy(this.boxDefault)}}const hd=r=>{const e=new E;return r.updateMatrixWorld(),r.getWorldPosition(e),e},Q1=r=>{const e=new Nt;return r.updateMatrixWorld(),r.getWorldQuaternion(e),e},ud=r=>{const e=new hi;return r.updateMatrixWorld(),e.setFromQuaternion(Q1(r)),e};class J1{constructor(){this.raycaster=new eh}update(e,t,n,i,s){const o=t.clone().sub(n),a=this.checkCollision(t,o,i);if(!a)return null;const l=a.portal,c=s[l.targetWorldId],u=c.portals[l.targetPortalId],h=e.clone(),d=ud(u.group),f=ud(l.group),p=new hi(d.x-f.x,d.y-f.y+Math.PI,d.z-f.z,"YXZ");return h.x+=p.x,h.y+=p.y,h.z+=p.z,{newWorld:s[c.id],newPosition:a.intersectionPoint.sub(hd(l.group)).applyEuler(p).add(a.movementVector.clone().multiplyScalar(1-a.ratioToPosition).applyEuler(p)).add(hd(u.group)),newRotation:h}}checkCollision(e,t,n){this.raycaster.set(e,t),this.raycaster.far=t.length();const i=this.raycaster.intersectObjects(Object.values(n).map(s=>s.group),!0);if(i.length){const s=i[0];return{ratioToPosition:s.distance/this.raycaster.far,portal:n[s.object.uuid],intersectionPoint:s.point,movementVector:t}}return null}}const Z1=4;class $1 extends Ra{constructor(e){super(e),this.scenes=[],this.tmpScene=new Ri,this.originalCameraMatrixWorld=new we,this.originalCameraProjectionMatrix=new we,this.tmpRotationYMatrix=new we().makeRotationY(Math.PI),this.tmpInverse=new we,this.tmpDstInverse=new we,this.tmpSrcToCam=new we,this.tmpSrcToDst=new we,this.tmpResult=new we,this.tmpDstRotationMatrix=new we,this.tmpNormal=new E,this.tmpClipPlane=new An,this.tmpClipVector=new Ze,this.tmpQ=new Ze,this.tmpProjectionMatrix=new we,this.tmpCameraInverseViewMat=new we,this.cameraPreviousPosition=new E,this.cameraTeleport=new J1,this.cameraDeltaPosition=new E(0,0,0),this.cameraDeltaRotation=new hi(0,0,0),this.xrScene=new si,this.xrScene.rotation.order="YXZ",this.xrObject=new Oe,this.xrObject.rotation.order="YXZ",this.xrScene.add(this.xrObject)}setContent({filename:e,module:t}){super.setContent({filename:e,module:t}),this.worlds=this.contentCurrent().instance.worlds,this.currentWorld=this.contentCurrent().instance.currentWorld,this.scenes=this.contentCurrent().scene.children,Object.values(this.worlds).forEach(n=>{Object.values(n.portals).forEach(i=>this.scenes[n.id].add(i.group))})}renderContent(e){for(const t of this.cameras)this.checkCameraToTeleport(t),this.cameraPreviousPosition.copy(t.position),this.renderWorldsAndPortals(this.worlds,this.currentWorld,t,t.matrixWorld,t.projectionMatrix)}checkCameraToTeleport(e){const t=Object.values(this.currentWorld.portals).reduce((i,s)=>(i[s.group.children[0].uuid]=s,i),{}),n=this.cameraTeleport.update(e.rotation,e.position,this.cameraPreviousPosition,t,this.worlds);n&&(this.currentWorld=n.newWorld,this.controls.setPosition(n.newPosition),this.controls.setRotation(n.newRotation),this.cameraPreviousPosition.copy(n.newPosition),this.cameraDeltaPosition.copy(n.newPosition),this.cameraDeltaRotation.copy(n.newRotation))}renderWorldsAndPortals(e,t,n,i,s,o=0,a){const l=Z1-o,c=Object.values(t.portals);for(let u=0;u<c.length;u++){const h=c[u];if(h===a)continue;const d=e[h.targetWorldId];this.gl.colorMask(!1,!1,!1,!1),this.gl.depthMask(!1),this.gl.disable(this.gl.DEPTH_TEST),this.gl.enable(this.gl.STENCIL_TEST),this.gl.stencilFunc(this.gl.NOTEQUAL,o,255),this.gl.stencilOp(this.gl.INCR,this.gl.KEEP,this.gl.KEEP),this.gl.stencilMask(255),this.renderScene(n,h.group.children,i,s);const f=this.computePortalViewMatrix(e,h,i).clone(),p=this.computePortalProjectionMatrix(e,h,f,s).clone();l>0&&Object.values(d.portals).length>1?this.renderWorldsAndPortals(e,d,n,f,p,o+1,h):(this.gl.colorMask(!0,!0,!0,!0),this.gl.depthMask(!0),this.renderer.clear(!1,!0,!1),this.gl.enable(this.gl.DEPTH_TEST),this.gl.enable(this.gl.STENCIL_TEST),this.gl.stencilMask(0),this.gl.stencilFunc(this.gl.EQUAL,o+1,255),this.renderScene(n,this.scenes[d.contentId].children,f,p)),this.gl.colorMask(!1,!1,!1,!1),this.gl.depthMask(!1),this.gl.enable(this.gl.STENCIL_TEST),this.gl.stencilMask(255),this.gl.stencilFunc(this.gl.NOTEQUAL,o+1,255),this.gl.stencilOp(this.gl.DECR,this.gl.KEEP,this.gl.KEEP),this.renderScene(n,h.group.children,i,s)}this.gl.disable(this.gl.STENCIL_TEST),this.gl.stencilMask(0),this.gl.colorMask(!1,!1,!1,!1),this.gl.enable(this.gl.DEPTH_TEST),this.gl.depthMask(!0),this.gl.depthFunc(this.gl.ALWAYS),this.renderer.clear(!1,!0,!1),this.renderScene(n,c.map(u=>u.group),i,s),this.gl.depthFunc(this.gl.LESS),this.gl.enable(this.gl.STENCIL_TEST),this.gl.stencilMask(0),this.gl.stencilFunc(this.gl.LEQUAL,o,255),this.gl.colorMask(!0,!0,!0,!0),this.gl.depthMask(!0),this.renderScene(n,this.scenes[t.contentId].children,i,s)}renderScene(e,t,n,i){this.tmpScene.children=t,this.originalCameraMatrixWorld.copy(e.matrixWorld),this.originalCameraProjectionMatrix.copy(e.projectionMatrix),e.matrixAutoUpdate=!1,e.matrixWorld.copy(n),e.matrixWorldInverse.copy(e.matrixWorld).invert(),e.projectionMatrix.copy(i),this.renderer.xr.enabled=!1,this.renderer.render(this.tmpScene,e),this.renderer.xr.enabled=!0,e.matrixAutoUpdate=!0,e.matrixWorld.copy(this.originalCameraMatrixWorld),e.matrixWorldInverse.copy(e.matrixWorld).invert(),e.projectionMatrix.copy(this.originalCameraProjectionMatrix)}computePortalViewMatrix(e,t,n){this.tmpSrcToCam.multiplyMatrices(this.tmpInverse.copy(n).invert(),t.group.matrixWorld);const i=e[t.targetWorldId].portals[t.targetPortalId];return this.tmpDstInverse.copy(i.group.matrixWorld).invert(),this.tmpSrcToDst.identity().multiply(this.tmpSrcToCam).multiply(this.tmpRotationYMatrix).multiply(this.tmpDstInverse),this.tmpResult.copy(this.tmpSrcToDst).invert(),this.tmpResult}computePortalProjectionMatrix(e,t,n,i){const s=e[t.targetWorldId].portals[t.targetPortalId];this.tmpDstRotationMatrix.identity().extractRotation(s.group.matrixWorld),this.tmpNormal.set(0,0,1).applyMatrix4(this.tmpDstRotationMatrix);const o=new E;return s.group.getWorldPosition(o),this.tmpClipPlane.setFromNormalAndCoplanarPoint(this.tmpNormal,o),this.tmpCameraInverseViewMat.copy(n).invert(),this.tmpClipPlane.applyMatrix4(this.tmpCameraInverseViewMat),this.tmpClipVector.set(this.tmpClipPlane.normal.x,this.tmpClipPlane.normal.y,this.tmpClipPlane.normal.z,this.tmpClipPlane.constant),this.tmpProjectionMatrix.copy(i),this.tmpQ.x=(Math.sign(this.tmpClipVector.x)+this.tmpProjectionMatrix.elements[8])/this.tmpProjectionMatrix.elements[0],this.tmpQ.y=(Math.sign(this.tmpClipVector.y)+this.tmpProjectionMatrix.elements[9])/this.tmpProjectionMatrix.elements[5],this.tmpQ.z=-1,this.tmpQ.w=(1+this.tmpProjectionMatrix.elements[10])/i.elements[14],this.tmpClipVector.multiplyScalar(2/this.tmpClipVector.dot(this.tmpQ)),this.tmpProjectionMatrix.elements[2]=this.tmpClipVector.x,this.tmpProjectionMatrix.elements[6]=this.tmpClipVector.y,this.tmpProjectionMatrix.elements[10]=this.tmpClipVector.z+1,this.tmpProjectionMatrix.elements[14]=this.tmpClipVector.w,this.tmpProjectionMatrix}}typeof window<"u"&&(window.EJPlayer=Ts,window.EJPlayerBase=Ra,window.EJPlayerCubeOne=q1,window.EJPlayerPortals=$1,window.EJWebGLRenderer=Bp,window.EJPostProcessing=uh);class K1{constructor(){this.spinner=document.getElementById("spinner"),this.cover=document.getElementById("cover"),this.coverSpinner=document.getElementById("coverSpinner"),this.tapToStart=document.getElementById("tapToStart"),this.floorDetection=document.querySelector(".floorDetection"),this.elConfirmHittest=document.querySelector(".arConfirmHittest"),this.elEditButton=document.querySelector(".arEditButton")}hide(e){e.style.display="none"}show(e){e.style.display=""}hideWithAnimation(e,t,n){t.style.animation=e,setTimeout(()=>{t.style.display="none",t.style.animation=""},n)}showWithAnimation(e,t,n){t.style.animation=e,t.style.display="",n&&setTimeout(()=>t.style.animation="",n)}getCanvas(){return document.getElementById("my-canvas")}spinnerShow(){this.showWithAnimation("spin 1s ease infinite, fade-in 250ms linear",this.spinner)}spinnerHide(){this.hideWithAnimation("spin 1s ease infinite, fade-out 250ms linear",this.spinner,250)}coverShow(){this.show(this.cover),this.showWithAnimation("spin 1s ease infinite, fade-in 250ms linear",this.coverSpinner)}coverHide(){this.hideWithAnimation("fade-out 500ms linear",this.cover,500),this.hideWithAnimation("spin 1s ease infinite, fade-out 500ms linear",this.coverSpinner,500)}tapToStartShow(){this.showWithAnimation("fade-in 300ms linear",this.tapToStart,300)}tapToStartHide(){this.hideWithAnimation("fade-out 300ms linear",this.tapToStart,300)}floorDetectionShow(){this.show(this.floorDetection)}floorDetectionHide(){this.hideWithAnimation("fade-out 300ms linear",this.floorDetection,300)}hitTestShow(){this.showWithAnimation("fade-in 300ms linear",this.elConfirmHittest)}hitTestHide(){this.hideWithAnimation("fade-out 300ms linear",this.elConfirmHittest,300)}editButtonShow(){this.elEditButton.style.display="block",this.elEditButton.classList.toggle("active")}editButtonHide(){this.elEditButton.style.display="none"}}const eS=()=>new THREE.ShaderMaterial({name:"CubeProxyMaterial",uniforms:{time:{value:0},opacity:{value:1},loadProgress:{value:0}},vertexShader:`
      varying vec2 vUv;

      void main() {
        vUv = uv;
        vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
        gl_Position = projectionMatrix * mvPosition;
      }
    `,fragmentShader:`
      uniform float time;
      uniform float opacity;
      uniform float loadProgress;

      varying vec2 vUv;

      vec4 alphaBlend( vec4 src, vec4 dst ) {
        float final_alpha = src.a + dst.a * (1.0 - src.a);
        if( final_alpha == 0.0 ) {
          return vec4( 0.0, 0.0, 0.0, 0.0 );
        }
        return vec4( (src.rgb * src.a + dst.rgb * dst.a * (1.0 - src.a)) / final_alpha, final_alpha);
      }

      float border(vec2 uv, float strokeWidth, float feather) {
        vec2 borderBottomLeft = smoothstep(vec2(strokeWidth * feather), vec2(strokeWidth), uv);
        vec2 borderTopRight = smoothstep(vec2(strokeWidth * feather), vec2(strokeWidth), 1.0 - uv);
        return 1.0 - borderBottomLeft.x * borderBottomLeft.y * borderTopRight.x * borderTopRight.y;
      }

      float lerp(float a, float b, float t) {
        return (b - a) * t + a;
      }

      float unlerp(float a, float b, float t) {
        return (t - a) / (b - a);
      }

      float remap(float a1, float b1, float a2, float b2, float t) { 
        return lerp(a2, b2, unlerp(a1, b1, t));
      }

      void main() {
        if( opacity == 0.0 ) {
          discard;
        }

        float waveTime = 2.0;
        float wavePeriod = 5.0;
        float waveX = sin( vUv.x * wavePeriod + time * waveTime );
        float waveY = cos( vUv.y * wavePeriod + time * waveTime );
        waveX = remap( -1.0, 1.0, 0.5, 1.0, waveX );
        waveY = remap( -1.0, 1.0, 0.5, 1.0, waveY );
        float wave = waveX * waveY;
        float waveAlpha = 1.0;

        vec4 borderColor = vec4( 1.0, 1.0, 1.0, 0.5 );
        float borderWidth = 0.003 + 0.003 * wave;
        float borderFeather = 0.0;
        float line = border(vUv, borderWidth, 1.0 - borderFeather);
        vec4 colorBorder = vec4(borderColor.xyz, borderColor.a * line * waveAlpha);

        vec4 colorFinal = vec4(0.0, 0.0, 0.0, 0.0);
        colorFinal = alphaBlend(colorBorder, colorFinal); // blend border on top.

        vec4 rect = vec4(0.5 - loadProgress * 0.5, 0.5 - loadProgress * 0.5, 0.5 + loadProgress * 0.5, 0.5 + loadProgress * 0.5);
        vec2 hv = step(rect.xy, vUv) * step(vUv, rect.zw);
        float onOff = hv.x * hv.y;
        float colorLoaderAlpha = remap( 0.0, 1.0, 0.3, 1.0, loadProgress );
        vec4 colorLoader = vec4(1.0, 1.0, 1.0, colorLoaderAlpha * onOff);
        colorFinal = alphaBlend(colorLoader, colorFinal);

        colorFinal.a *= opacity;
        gl_FragColor = colorFinal;
      }
    `,side:THREE.DoubleSide,transparent:!0,depthWrite:!1,depthTest:!1});class tS{constructor(e){this.container=e,this.boxCenter=new THREE.Vector3(0,0,0),this.boxSize=new THREE.Vector3(1,1,1),this.boxSaved=new THREE.Box3().setFromCenterAndSize(this.boxCenter,this.boxSize);const t=new THREE.BoxGeometry(1,1,1),n=eS();this.cube=new THREE.Mesh(t,n),this.cube.name="EJCubeProxyMesh",this.cube.castShadow=!0,this.container.add(this.cube),this.opacitySaved=1,this.loadProgressSaved=0}set loadProgress(e){this.loadProgressSaved=e,this.cube.material.uniforms.loadProgress.value=e}get loadProgress(){return this.loadProgressSaved}set opacity(e){this.opacitySaved=e,this.cube.material.uniforms.opacity.value=e}get opacity(){return this.opacitySaved}set timeElapsed(e){this.cube.material.uniforms.time.value=e}set box(e){this.boxSaved.copy(e),this.boxSaved.getCenter(this.boxCenter),this.boxSaved.getSize(this.boxSize),this.cube.position.copy(this.boxCenter),this.cube.scale.copy(this.boxSize)}get box(){return this.boxSaved}update(e,t){}}class di{constructor(e){this.id=e}update(e,t){}pointerMoveHandler(e){}pointerDownHandler(e){}pointerUpHandler(e){}isComplete(){return!1}dispose(){}}class nS extends di{constructor(e,t){super(e),this.appUi=t.appUi,this.spinnerTimeoutComplete=!1,this.fontsLoaded=!1,setTimeout(()=>{this.spinnerTimeoutComplete=!0},1e3),this.loadFonts()}loadFonts(){const e=new FontFace("urwdin","url(./fonts/URWDIN-Regular.ttf)",{});document.fonts.add(e),e.load(),document.fonts.ready.then(()=>{this.fontsLoaded=!0})}update(e,t){}isComplete(){return this.spinnerTimeoutComplete&&this.fontsLoaded}dispose(){this.appUi.spinnerHide()}}class iS extends di{constructor(e,t){super(e),this.appUi=t.appUi,this.appUi.tapToStartShow(),this.complete=!1}update(e,t){}pointerDownHandler(e){this.appUi.tapToStartHide(),this.complete=!0}isComplete(){return this.complete}}class Hp extends di{constructor(e,t){super(e),this.shared=t,this.player=t.player,this.appUi=t.appUi,this.cubeProxy=t.cubeProxy,this.contentContainer=null,this.player.resize(),this.player.scene.background=new THREE.Color(0),this.controlsKill(),this.orbitControls=new ah(this.player.camera,this.player.renderer.domElement),this.orbitControls.enabled=!0,this.orbitControls.enablePan=!1,this.orbitControls.enableDamping=!0,this.orbitControls.autoRotate=!0,this.orbitControls.autoRotateSpeed=.5,this.orbitControls.minDistance=0,this.orbitControls.maxDistance=10,this.player.camera.fov=20,this.player.camera.updateProjectionMatrix(),this.player.camera.position.set(0,0,this.cameraInitZ()),this.player.camera.lookAt(0,0,0),this.autoRotateInterval=void 0,this.autoRotateTimeoutSec=4,this.autoRotatePointerDown=!1}controlsKill(){}cameraInitZ(){return 10}update(e,t){super.update(e,t),this.orbitControls.update();const n=this.cubeProxy.boxCenter;if(this.cubeProxy.boxSize,this.contentContainer&&(this.contentContainer.position.copy(n).multiplyScalar(-1),this.contentContainer.quaternion.identity(),this.contentContainer.scale.set(1,1,1),this.contentContainer.updateMatrixWorld(!0)),this.cubeProxy){const i=this.cubeProxy.container;i.position.copy(n).multiplyScalar(-1),i.quaternion.identity(),i.scale.set(1,1,1),i.updateMatrixWorld(!0)}}autoPlayIntervalClear(){this.autoRotateInterval&&clearInterval(this.autoRotateInterval)}autoPlayIntervalStart(){const e=Math.floor(1e3*this.autoRotateTimeoutSec);this.autoRotateInterval=setInterval(()=>{this.autoPlayIntervalClear(),this.orbitControls.autoRotate=!0},e)}pointerMoveHandler(e){this.autoRotatePointerDown&&(this.autoPlayIntervalClear(),this.orbitControls.autoRotate=!1)}pointerDownHandler(e){this.autoRotatePointerDown=!0}pointerUpHandler(e){this.autoRotatePointerDown=!1,this.autoPlayIntervalClear(),this.autoPlayIntervalStart()}isComplete(){return!1}dispose(){this.autoPlayIntervalClear(),this.orbitControls.dispose(),this.orbitControls=null}}const Bt=Object.create(null);Bt.clamp=(r,e,t)=>Math.max(Math.min(r,Math.max(e,t)),Math.min(e,t));Bt.lerp=(r,e,t)=>(e-r)*t+r;Bt.unlerp=(r,e,t)=>(t-r)/(e-r);Bt.map=(r,e,t,n,i)=>Bt.clamp(Bt.lerp(t,n,Bt.unlerp(r,e,i)),t,n);Bt.disposeMaterial=r=>{Object.keys(r).forEach(e=>{r[e]&&r[e]!==null&&typeof r[e].dispose=="function"&&r[e].dispose()}),r.dispose()};Bt.disposeRecursive=r=>{for(;r.children.length>0;)ki(r.children[0]),r.remove(r.children[0]);r.geometry&&r.geometry.dispose(),r.material&&(Array.isArray(r.material)?r.material.forEach(Bt.disposeMaterial):Bt.disposeMaterial(r.material))};const Yt=Bt.clamp;Bt.lerp;Bt.unlerp;const bs=Bt.map,ki=Bt.disposeRecursive;class sS extends Hp{constructor(e,t){super(e,t),this.contentContainer=this.player.contentContainer,this.scene=this.player.scene,this.orbitControls.minDistance=0,this.orbitControls.maxDistance=20,this.player.camera.position.set(0,2,this.cameraInitZ())}controlsKill(){this.player.controls&&(this.player.controls.dispose(),this.player.controls=null)}cameraInitZ(){let e=10,t=window.innerWidth/window.innerHeight;return t<1&&(t=Yt(t,.3,1),e=bs(.3,1,20,8,t)),e}dispose(){super.dispose(),this.gridHelper&&(ki(this.gridHelper),this.scene.remove(this.gridHelper))}}class rS extends Hp{constructor(e,t){super(e,t),this.contentContainer=t.player.cubeContainer}controlsKill(){this.player.orbitControls&&(this.player.orbitControls.dispose(),this.player.orbitControls=null)}cameraInitZ(){let e=4.5,t=window.innerWidth/window.innerHeight;return t<1&&(t=Yt(t,.3,1),e=bs(.3,1,10,4.5,t)),e}}class Vp extends di{constructor(e,t){super(e),this.shared=t,this.scene=t.player.scene,this.cubeProxy=t.cubeProxy,this.contentContainer=null,this.scene.background=null,this.scene.visible=!0,this.contentTransformInit(),this.reticleInit(),this.floorInit(),this.lightInit(),this.App={ARPlace:0,ARControls:1,Total:2},this.app=this.appById(this.App.ARPlace)}contentTransformInit(){this.shared.contentFloorPos=new THREE.Vector3(0,0,0),this.shared.contentPosition=new THREE.Vector3(0,0,0),this.shared.contentRotation=new THREE.Quaternion,this.shared.contentScale=new THREE.Vector3(1,1,1)}reticleInit(){const e=new THREE.TextureLoader().load("./images/reticle.png");this.reticle=new THREE.Mesh(new THREE.PlaneGeometry(.5,.5).rotateX(-Math.PI/2),new THREE.MeshBasicMaterial({map:e,transparent:!0,side:THREE.DoubleSide})),this.scene.add(this.reticle),this.shared.reticle=this.reticle}floorInit(){this.floor=new THREE.Mesh(new THREE.PlaneGeometry(6,6),new THREE.ShadowMaterial({color:0,opacity:.15,depthWrite:!1,depthTest:!1})),this.floor.rotation.x=-Math.PI/2,this.floor.receiveShadow=!0,this.scene.add(this.floor),this.shared.floor=this.floor}lightInit(){this.lightOffset=new THREE.Vector3(0,10,0),this.light=new THREE.DirectionalLight(16777215,1),this.light.castShadow=!0,this.light.shadow.mapSize.set(1024,1024),this.scene.add(this.light),this.scene.add(this.light.target),this.shared.light=this.light}appById(e){return super.appById(e)}update(e,t){if(this.app.update(e,t),this.app.isComplete()){const l=this.app.id;this.app.dispose(),l===this.App.ARPlace?this.app=this.appById(this.App.ARControls):l===this.App.ARControls&&(this.app=this.appById(this.App.ARPlace))}const i=this.shared.contentFloorPos,s=this.shared.contentPosition,o=this.shared.contentRotation,a=this.shared.contentScale;if(this.reticle&&(this.reticle.position.copy(i),this.reticle.quaternion.copy(o)),this.light&&(this.light.position.copy(i),this.light.position.add(this.lightOffset),this.light.target.position.copy(i)),this.floor&&this.floor.position.copy(i),this.contentContainer&&(this.contentContainer.position.copy(i).add(s),this.contentContainer.quaternion.copy(o),this.contentContainer.scale.copy(a),this.contentContainer.updateMatrixWorld(!0)),this.cubeProxy){const l=this.cubeProxy.container;l.position.copy(i).add(s),l.quaternion.copy(o),l.scale.copy(a),l.updateMatrixWorld(!0)}}pointerMoveHandler(e){this.app.pointerMoveHandler(e)}pointerDownHandler(e){this.app.pointerDownHandler(e)}pointerUpHandler(e){this.app.pointerUpHandler(e)}isComplete(){return!1}dispose(){this.app.dispose(),this.app=null,this.reticle&&(ki(this.reticle),this.scene.remove(this.reticle),this.shared.reticle=null),this.floor&&(ki(this.floor),this.scene.remove(this.floor),this.shared.floor=null),this.light&&(ki(this.light),this.scene.remove(this.light),this.shared.light=null),this.shared.contentFloorPos=null,this.shared.contentPosition=null,this.shared.contentRotation=null,this.shared.contentScale=null}}class Wp extends di{constructor(e,t){super(e),this.shared=t,this.player=t.player,this.appUi=t.appUi,this.contentFloorPos=new THREE.Vector3().copy(this.shared.contentFloorPos),this.contentPosition=new THREE.Vector3().copy(this.shared.contentPosition),this.contentRotation=new THREE.Quaternion().copy(this.shared.contentRotation),this.contentScale=new THREE.Vector3().copy(this.shared.contentScale),this.contentFloorPosEased=new THREE.Vector3().copy(this.shared.contentPosition),this.contentRotationEased=new THREE.Quaternion().copy(this.shared.contentRotation),this.raycaster=new THREE.Raycaster,this.raycastScreenPos=new THREE.Vector2(0,0),this.vec=new THREE.Vector3(0,0,0),this.euler=new THREE.Euler(0,0,0,"XYZ");const n=new THREE.PlaneGeometry(100,100),i=new THREE.MeshBasicMaterial({visible:!1});this.hitPlane=new THREE.Mesh(n,i),this.hitPlane.rotation.x=-Math.PI/2,this.player.scene.add(this.hitPlane),this.reticle=this.shared.reticle,this.reticle.visible=!1,this.shared.floor&&(this.shared.floor.visible=!1),this.shared.light&&(this.shared.light.visible=!1),this.hitTestSource=null,this.hitTestSourceRequested=!1,this.hitTestSupported=!1,this.hitTestInit=this.contentFloorPos.length()>0,this.hitTestShow=!1,this.hitTestMatrix=new THREE.Matrix4,this.pointerDown=!1,this.lockContent=!1,this.hitTestInit||this.appUi.floorDetectionShow()}update(e,t){const i=t/.016666666666666666,s=this.player.renderer;if(!this.hitTestSupported&&(this.hitTestSupported=s.xr.getSession().enabledFeatures.includes("hit-test"),!this.hitTestSupported)){console.log("hit-test not supported"),this.updateEnd();return}const o=s.xr.getReferenceSpace(),a=s.xr.getSession(),l=s.xr.getFrame();if(!this.hitTestSourceRequested&&!this.hitTestSource&&(this.hitTestSourceRequested=!0,a.requestReferenceSpace("viewer").then(g=>{a.requestHitTestSource({space:g}).then(m=>{this.hitTestSource=m,this.hitTestSourceRequested=!1})})),this.hitTestSource){const g=l.getHitTestResults(this.hitTestSource);if(g.length>0){const _=g[0].getPose(o).transform.matrix;this.hitTestMatrix.fromArray(_),this.hitTestInit=!0,this.contentFloorPos.setFromMatrixPosition(this.hitTestMatrix)}}if(!this.hitTestInit){this.updateEnd();return}let u=!1;this.hitTestShow||(this.hitTestShow=!0,u=!0,this.reticle.visible=!0,this.appUi.hitTestShow(),this.appUi.floorDetectionHide()),this.hitPlane.position.y=this.contentFloorPos.y,this.hitPlane.updateMatrixWorld(!0),this.raycaster.setFromCamera(this.raycastScreenPos,this.player.camera);const h=this.raycaster.intersectObject(this.hitPlane),d=0,f=4;if(h.length>0){const g=h[0];this.vec.x=g.point.x,this.vec.z=g.point.z,this.vec.y=0,this.vec.x-=this.player.camera.position.x,this.vec.z-=this.player.camera.position.z,this.vec.clampLength(d,f)}else this.player.camera.getWorldDirection(this.vec),this.vec.y=0,this.vec.normalize(),this.vec.multiplyScalar(f);this.vec.y=this.contentFloorPos.y,this.vec.x+=this.player.camera.position.x,this.vec.z+=this.player.camera.position.z,this.contentFloorPos.copy(this.vec);let p=Yt(.15*i,0,1);u&&(p=1),this.contentFloorPosEased.lerp(this.contentFloorPos,p),this.vec.copy(this.player.camera.position),this.vec.sub(this.contentFloorPos),this.vec.normalize();const x=Math.atan2(this.vec.x,this.vec.z);this.euler.set(0,x,0,"XYZ"),this.contentRotation.setFromEuler(this.euler),this.contentRotationEased.slerp(this.contentRotation,p),this.shared.contentFloorPos.copy(this.contentFloorPosEased),this.shared.contentPosition.copy(this.contentPosition),this.shared.contentRotation.copy(this.contentRotationEased),this.shared.contentScale.copy(this.contentScale),this.lockContent=this.pointerDown,this.updateEnd()}updateEnd(){this.pointerDown=!1}isComplete(){return this.lockContent}pointerDownHandler(e){this.pointerDown=!0}dispose(){this.hitTestSource&&(this.hitTestSource.cancel(),this.hitTestSource=null),this.appUi.hitTestHide(),this.appUi.floorDetectionHide(),this.reticle.visible=!1}}class Gp extends di{constructor(e){super(e),this.events=[],this.pointers=[],this.enableDragRot=!0,this.enablePinchScale=!0,this.enablePinchPan=!0,this.cameraQuat=new THREE.Quaternion,this.dragOnHit=!1,this.dragging=!1,this.dragPos=new THREE.Vector2(0,0),this.dragVel=new THREE.Vector2(0,0),this.dragVelEased=new THREE.Vector2(0,0),this.dragVelEase=.2,this.dragVelDecay=.045,this.dragRot=new THREE.Vector2(0,0),this.dragRotFreedom=new THREE.Vector2(1,1),this.dragRotEuler=new THREE.Euler(0,0,0,"XYZ"),this.dragRotAxisX=new THREE.Vector3(0,0,0),this.dragRotQuatInit=new THREE.Quaternion,this.dragRotQuatX=new THREE.Quaternion,this.dragRotQuatY=new THREE.Quaternion,this.dragRotQuatXY=new THREE.Quaternion,this.dragRotQuat=new THREE.Quaternion,this.dragRotSensitivity=4,this.pinchScaleOnHit=!1,this.pinchScaling=!1,this.pinchPos0=new THREE.Vector3(0,0,0),this.pinchPos1=new THREE.Vector3(0,0,0),this.pinchScale=1,this.pinchScaleEased=1,this.pinchScaleDiff=0,this.pinchScaleMin=.2,this.pinchScaleMax=1.5,this.pinchScaleSensitivity=1,this.pinchPanOnHit=!1,this.pinchPanning=!1,this.pinchMid0=new THREE.Vector3(0,0,0),this.pinchMid1=new THREE.Vector3(0,0,0),this.pinchPan=new THREE.Vector3(0,0,0),this.pinchPanNew=new THREE.Vector3(0,0,0),this.pinchPanEased=new THREE.Vector3(0,0,0),this.pinchPanDiff=new THREE.Vector3(0,0,0),this.pinchPanFreedom=new THREE.Vector3(0,1,0),this.pinchPanAxisDir=new THREE.Vector3(1,1,1),this.pinchPanClampMinY=0,this.pinchPanClampMaxY=0,this.pinchPanSensitivity=1}update(e,t){const i=t/.016666666666666666;let s=null;this.pointers.length>0&&(s=this.pointers[0]);let o=null;if(this.pointers.length>1&&(o=this.pointers[1]),this.dragging){this.dragVel.x=(s.dragPos.x-this.dragPos.x)*this.dragRotFreedom.x*this.dragRotSensitivity,this.dragVel.y=(s.dragPos.y-this.dragPos.y)*this.dragRotFreedom.y*this.dragRotSensitivity,this.enableDragRot||this.dragVel.set(0,0),this.dragVelEased.lerp(this.dragVel,Yt(this.dragVelEase*i,0,1)),this.dragPos.set(s.dragPos.x,s.dragPos.y);let c=!1;c=c||s.up,c=c||this.pointers.length>1,c&&(this.dragging=!1)}else{let c=!1;c=c||s&&s.down,c&&this.dragOnHit&&(c=s.hit),c&&(this.dragging=!0,this.dragPos.set(s.dragPos.x,s.dragPos.y),this.dragVelEased.set(0,0))}this.dragVelEased.length()>0&&(this.dragging||(this.dragVel.set(0,0),this.dragVelEased.lerp(this.dragVel,Yt(this.dragVelDecay*i,0,1)),this.dragVelEased.length()<5e-4&&this.dragVelEased.set(0,0)));const a=Math.PI*.5;if(this.dragRot.x+=this.dragVelEased.y,this.dragRot.y+=this.dragVelEased.x,this.dragRot.x=Yt(this.dragRot.x,-a,a),this.dragRotEuler.set(this.dragRot.x,this.dragRot.y,0,"XYZ"),this.dragRotQuat.setFromEuler(this.dragRotEuler),this.dragRotQuat.premultiply(this.dragRotQuatInit),this.pinchScaling){const c=this.pinchPos0.distanceTo(this.pinchPos1),u=s.pinchPos.distanceTo(o.pinchPos);this.pinchScaleDiff=(u-c)*this.pinchScaleSensitivity,this.enablePinchScale||(this.pinchScaleDiff=0);let h=!1;h=h||s.up,h=h||o.up,h&&(this.pinchScaling=!1,this.pinchScale=Yt(this.pinchScale+this.pinchScaleDiff,this.pinchScaleMin,this.pinchScaleMax),this.pinchScaleDiff=0)}else{let c=!1;o&&(c=!0,c=c&&o.down,c=c&&!s.up,c&&this.pinchScaleOnHit&&(c=s.hit&&o.hit)),c&&(this.pinchScaling=!0,this.pinchPos0.copy(s.pinchPos),this.pinchPos1.copy(o.pinchPos))}const l=Yt(this.pinchScale+this.pinchScaleDiff,this.pinchScaleMin,this.pinchScaleMax);if(this.pinchScaleEased+=(l-this.pinchScaleEased)*Yt(.1*i,0,1),this.updatePinchPanClamp(),this.pinchPanning){this.pinchMid1.copy(o.pinchPos).sub(s.pinchPos).multiplyScalar(.5).add(s.pinchPos),this.pinchPanDiff.copy(this.pinchMid1).sub(this.pinchMid0),this.pinchPanDiff.multiply(this.pinchPanAxisDir).multiply(this.pinchPanFreedom).multiplyScalar(this.pinchPanSensitivity),this.enablePinchPan||this.pinchPanDiff.set(0,0,0);let c=!1;c=c||s.up,c=c||o.up,c&&(this.pinchPanning=!1,this.pinchPan.add(this.pinchPanDiff),this.pinchPan.y=Yt(this.pinchPan.y,this.pinchPanClampMinY,this.pinchPanClampMaxY),this.pinchPanDiff.set(0,0,0))}else{let c=!1;o&&(c=!0,c=c&&o.down,c=c&&!s.up,c&&this.pinchPanOnHit&&(c=s.hit&&o.hit)),c&&(this.pinchPanning=!0,this.pinchMid0.copy(o.pinchPos).sub(s.pinchPos).multiplyScalar(.5).add(s.pinchPos))}this.pinchPanNew.copy(this.pinchPan).add(this.pinchPanDiff),this.pinchPanNew.y=Yt(this.pinchPanNew.y,this.pinchPanClampMinY,this.pinchPanClampMaxY),this.pinchPanEased.lerp(this.pinchPanNew,Yt(.1*i,0,1))}updatePinchPanClamp(){this.pinchPanClampMinY=0,this.pinchPanClampMaxY=0}updateEnd(){for(let e=0;e<this.pointers.length;e++){const t=this.pointers[e];t.down=!1,t.up&&(this.pointers.splice(e,1),--e)}}pointersResolve(){for(;this.events.length>0;){const e=this.events.shift();if(e.type==="down"){let t=this.pointers.find(n=>n.pointerId===e.pointerId);t?this.pointerUpdate(t,e):(t={pointerId:e.pointerId,dragPos:new THREE.Vector3(0,0,0),pinchPos:new THREE.Vector3(0,0,0),down:!0,up:!1,hit:!1},this.pointers.push(t),this.pointerUpdate(t,e))}else if(e.type==="move"){const t=this.pointers.find(n=>n.pointerId===e.pointerId);t&&this.pointerUpdate(t,e)}else if(e.type==="up"){const t=this.pointers.find(n=>n.pointerId===e.pointerId);if(t){if(t.down){const n=this.pointers.findIndex(i=>t.pointerId===i.pointerId);this.pointers.splice(n,1);continue}t.up=!0,this.pointerUpdate(t,e)}}}}pointerUpdate(e,t){}pointerMoveHandler(e){this.events.push({type:"move",pointerId:e.pointerId,pointerX:e.clientX,pointerY:e.clientY,pointerZ:0})}pointerDownHandler(e){this.events.push({type:"down",pointerId:e.pointerId,pointerX:e.clientX,pointerY:e.clientY,pointerZ:0})}pointerUpHandler(e){this.events.push({type:"up",pointerId:e.pointerId,pointerX:e.clientX,pointerY:e.clientY,pointerZ:0})}isComplete(){return!1}}class jp extends Gp{constructor(e,t){super(e),this.shared=t,this.player=this.shared.player,this.appUi=this.shared.appUi,this.contentFloorPos=new THREE.Vector3().copy(this.shared.contentFloorPos),this.contentPosition=new THREE.Vector3().copy(this.shared.contentPosition),this.contentRotation=new THREE.Quaternion().copy(this.shared.contentRotation),this.contentScale=new THREE.Vector3().copy(this.shared.contentScale),this.shared.floor&&(this.shared.floor.visible=!0),this.shared.light&&(this.shared.light.visible=!0),this.appUi.editButtonShow(),this.appUi.elEditButton.addEventListener("click",this.editButtonClick.bind(this)),this.editButtonClicked=!1,this.hitObject=null,this.raycaster=new THREE.Raycaster,this.posScreen=new THREE.Vector2(0,0),this.dragVelEase=.2,this.dragVelDecay=.045,this.dragRotFreedom.set(1,1),this.dragRotQuat.copy(this.contentRotation),this.dragRotSensitivity=4,this.pinchScale=this.contentScale.x,this.pinchScaleEased=this.contentScale.x,this.pinchScaleSensitivity=1,this.pinchScaleMin=.2,this.pinchScaleMax=1.5,this.pinchPan.set(0,this.contentPosition.y,0),this.pinchPanNew.set(0,this.contentPosition.y,0),this.pinchPanEased.set(0,this.contentPosition.y,0),this.pinchPanFreedom.set(0,1,0),this.pinchPanAxisDir.set(1,-1,1),this.pinchPanSensitivity=1}update(e,t){this.cameraQuat.copy(this.player.camera.quaternion),this.pointersResolve(),super.update(e,t),this.contentPosition.copy(this.pinchPanEased),this.contentRotation.copy(this.dragRotQuat),this.contentScale.set(this.pinchScaleEased,this.pinchScaleEased,this.pinchScaleEased),this.shared.contentFloorPos.copy(this.contentFloorPos),this.shared.contentPosition.copy(this.contentPosition),this.shared.contentRotation.copy(this.contentRotation),this.shared.contentScale.copy(this.contentScale),this.updateEnd()}pointerUpdate(e,t){const n=Math.max(window.innerWidth,window.innerHeight),i=(window.innerWidth-n)*.5,s=(window.innerHeight-n)*.5,o=i+n,a=s+n;if(e.dragPos.x=bs(i,o,0,1,t.pointerX),e.dragPos.y=bs(s,a,0,1,t.pointerY),e.dragPos.z=0,e.pinchPos.x=bs(i,o,0,1,t.pointerX),e.pinchPos.y=bs(s,a,0,1,t.pointerY),e.pinchPos.z=0,this.hitObject){this.posScreen.x=t.pointerX/window.innerWidth*2-1,this.posScreen.y=-(t.pointerY/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.posScreen,this.player.camera);const l=this.raycaster.intersectObject(this.hitObject);e.hit=l.length>0}}pointerMoveHandler(e){super.pointerMoveHandler(e)}pointerDownHandler(e){super.pointerDownHandler(e)}pointerUpHandler(e){super.pointerUpHandler(e)}editButtonClick(e){this.editButtonClicked=!0}isComplete(){return this.editButtonClicked}dispose(){this.appUi.editButtonHide(),this.appUi.elEditButton.removeEventListener("click",this.editButtonClick.bind(this))}}class oS extends jp{constructor(e,t){super(e,t),this.hitObject=t.cubeProxy.container}updatePinchPanClamp(){const e=this.cubeBoundingSphereDiameterAtScale(this.pinchScaleMax),t=this.cubeBoundingSphereDiameterAtScale(this.pinchScaleEased)*.5;this.pinchPanClampMinY=t,this.pinchPanClampMaxY=e-t}cubeBoundingSphereDiameterAtScale(e){return Math.sqrt(3)*e}}class aS extends Vp{constructor(e,t){super(e,t),this.player=t.player,this.cubeProxy=t.cubeProxy,this.contentContainer=this.player.cubeContainer,this.player.renderer.shadowMap.enabled=!0}contentTransformInit(){super.contentTransformInit();const e=.5,t=Math.sqrt(3)*e*.5;this.shared.contentPosition.y=t,this.shared.contentScale.set(e,e,e)}appById(e){return e===this.App.ARPlace?new Wp(this.App.ARPlace,this.shared):e===this.App.ARControls?new oS(this.App.ARControls,this.shared):null}update(e,t){super.update(e,t)}dispose(){super.dispose(),this.player.renderer.shadowMap.enabled=!1}}class lS extends jp{constructor(e,t){super(e,t),this.enableDragRot=!0,this.enablePinchScale=!1,this.enablePinchPan=!1,this.dragRotFreedom.set(1,0)}}class cS extends Vp{constructor(e,t){super(e,t),this.player=t.player,this.contentContainer=this.player.contentContainer}floorInit(){}lightInit(){}appById(e){return e===this.App.ARPlace?new Wp(this.App.ARPlace,this.shared):e===this.App.ARControls?new lS(this.App.ARControls,this.shared):null}update(e,t){super.update(e,t)}dispose(){super.dispose()}}class Yp extends Gp{constructor(e,t){super(e),this.shared=t,this.player=this.shared.player,this.cubeProxy=this.shared.cubeProxy,this.contentContainer=null,this.contentTransformInit(),this.contentFloorPos=new THREE.Vector3().copy(this.shared.contentFloorPos),this.contentPosition=new THREE.Vector3().copy(this.shared.contentPosition),this.contentRotation=new THREE.Quaternion().copy(this.shared.contentRotation),this.contentScale=new THREE.Vector3().copy(this.shared.contentScale),this.scene=this.player.scene,this.scene.background=null,this.scene.visible=!0,this.floorInit(),this.lightInit();const n=20,i=new THREE.PlaneGeometry(n,n),s=new THREE.MeshBasicMaterial({color:16711680,side:THREE.DoubleSide});this.hitPlane=new THREE.Mesh(i,s),this.hitPlane.visible=!1,this.scene.add(this.hitPlane),this.controller1=this.player.renderer.xr.getController(0),this.controller1.addEventListener("connected",this.controllerConnected.bind(this)),this.controller1.addEventListener("disconnected",this.controllerDisconnected.bind(this)),this.controller1.addEventListener("selectstart",this.controllerSelectstart.bind(this)),this.controller1.addEventListener("selectend",this.controllerSelectend.bind(this)),this.controller1.addEventListener("squeezestart",this.controllerSqueezestart.bind(this)),this.controller1.addEventListener("squeezeend",this.controllerSqueezeend.bind(this)),this.controller1.userData.over=!1,this.controller1.userData.overChanged=!1,this.controller1.userData.down=!1,this.controller1.userData.downChanged=!1,this.controller1.userData.button=-1,this.scene.add(this.controller1),this.controller2=this.player.renderer.xr.getController(1),this.controller2.addEventListener("connected",this.controllerConnected.bind(this)),this.controller2.addEventListener("disconnected",this.controllerDisconnected.bind(this)),this.controller2.addEventListener("selectstart",this.controllerSelectstart.bind(this)),this.controller2.addEventListener("selectend",this.controllerSelectend.bind(this)),this.controller2.addEventListener("squeezestart",this.controllerSqueezestart.bind(this)),this.controller2.addEventListener("squeezeend",this.controllerSqueezeend.bind(this)),this.controller2.userData.over=!1,this.controller2.userData.overChanged=!1,this.controller2.userData.down=!1,this.controller2.userData.downChanged=!1,this.controller2.userData.button=-1,this.scene.add(this.controller2);const o=new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0,0,0),new THREE.Vector3(0,0,-1)]);o.setAttribute("color",new THREE.Float32BufferAttribute([.5,.5,.5,1,.5,.5,.5,0],4));const a=new THREE.LineBasicMaterial({vertexColors:!0,blending:THREE.AdditiveBlending});this.controllerLine1=new THREE.Line(o,a),this.controllerLine1.scale.z=5,this.controller1.add(this.controllerLine1),this.controllerLine2=new THREE.Line(o,a.clone()),this.controllerLine2.scale.z=5,this.controller2.add(this.controllerLine2),this.controllerPos=new THREE.Vector3,this.controllerPlaneHitPos=new THREE.Vector3,this.controllers=[this.controller1,this.controller2],this.controllerLines=[this.controllerLine1,this.controllerLine2],this.hitObject=null,this.raycaster=new THREE.Raycaster,this.matrix=new THREE.Matrix4,this.vecTemp=new THREE.Vector3,this.dragOnHit=!0,this.dragVelEase=.2,this.dragVelDecay=.045,this.dragRotFreedom.set(1,1),this.dragRotQuat.copy(this.contentRotation),this.dragRotSensitivity=8,this.pinchScaleOnHit=!0,this.pinchScale=this.contentScale.x,this.pinchScaleEased=this.contentScale.x,this.pinchScaleSensitivity=2,this.pinchScaleMin=.3,this.pinchScaleMax=3,this.pinchPanOnHit=!0,this.pinchPan.set(0,this.contentPosition.y,0),this.pinchPanNew.set(0,this.contentPosition.y,0),this.pinchPanEased.set(0,this.contentPosition.y,0),this.pinchPanFreedom.set(0,1,0),this.pinchPanAxisDir.set(1,1,1),this.pinchPanSensitivity=3}contentTransformInit(){this.shared.contentFloorPos=new THREE.Vector3(0,0,0),this.shared.contentPosition=new THREE.Vector3(0,0,0),this.shared.contentRotation=new THREE.Quaternion,this.shared.contentScale=new THREE.Vector3(1,1,1)}floorInit(){this.floor=new THREE.Mesh(new THREE.PlaneGeometry(6,6),new THREE.ShadowMaterial({color:4473924,opacity:.4,depthWrite:!1,depthTest:!1})),this.floor.position.copy(this.contentFloorPos),this.floor.rotation.x=-Math.PI/2,this.floor.receiveShadow=!0,this.scene.add(this.floor)}lightInit(){this.lightOffset=new THREE.Vector3(0,10,0),this.light=new THREE.DirectionalLight(16777215,1),this.light.castShadow=!0,this.light.shadow.mapSize.set(1024,1024),this.light.position.copy(this.contentFloorPos),this.light.position.add(this.lightOffset),this.light.target.position.copy(this.contentFloorPos),this.scene.add(this.light),this.scene.add(this.light.target)}update(e,t){this.vecTemp.copy(this.player.camera.position),this.vecTemp.sub(this.contentFloorPos).sub(this.contentPosition),this.vecTemp.normalize(),this.vecTemp.y=0;const n=Math.atan2(this.vecTemp.x,this.vecTemp.z);this.hitPlane.rotation.y=n,this.vecTemp.multiplyScalar(-2),this.vecTemp.add(this.contentFloorPos).add(this.contentPosition),this.hitPlane.position.copy(this.vecTemp);for(let i=0;i<this.controllers.length;i++){const s=this.controllers[i],o=this.controllerLines[i];s.updateMatrixWorld(),this.matrix.identity().extractRotation(s.matrixWorld),this.controllerPos.setFromMatrixPosition(s.matrixWorld),this.raycaster.ray.origin.copy(this.controllerPos),this.raycaster.ray.direction.set(0,0,-1).applyMatrix4(this.matrix);let a=[];this.hitObject&&(a=this.raycaster.intersectObject(this.hitObject));const l=this.raycaster.intersectObject(this.hitPlane);if(l.length>0){const p=l[0];this.controllerPlaneHitPos.x=p.uv.x,this.controllerPlaneHitPos.y=p.uv.y,this.controllerPlaneHitPos.z=0}const c=a.length>0,u=s.userData.over!=c;s.userData.over=c,s.userData.overChanged=u;const h=s.userData.down,d=s.userData.downChanged;if(s.userData.downChanged=!1,c){const p=a[0];o.scale.z=p.distance,u&&!h&&this.hapticFeedbackWeak(s)}else u&&(o.scale.z=5);const f={type:"",pointerId:i,dragPos:new THREE.Vector3().copy(this.controllerPlaneHitPos),pinchPos:new THREE.Vector3().copy(this.controllerPos),hit:!1};d?h?f.type="down":f.type="up":f.type="move",f.hit=c,c&&h&&d&&this.hapticFeedbackStrong(s),this.events.push(f)}if(this.cameraQuat.copy(this.player.camera.quaternion),this.pointersResolve(),super.update(e,t),this.contentPosition.copy(this.pinchPanEased),this.contentRotation.copy(this.dragRotQuat),this.contentScale.set(this.pinchScaleEased,this.pinchScaleEased,this.pinchScaleEased),this.contentContainer&&(this.contentContainer.position.copy(this.contentFloorPos).add(this.contentPosition),this.contentContainer.quaternion.copy(this.contentRotation),this.contentContainer.scale.copy(this.contentScale),this.contentContainer.updateMatrixWorld(!0)),this.cubeProxy){const i=this.cubeProxy.container;i.position.copy(this.contentFloorPos).add(this.contentPosition),i.quaternion.copy(this.contentRotation),i.scale.copy(this.contentScale),i.updateMatrixWorld(!0)}this.shared.contentFloorPos.copy(this.contentFloorPos),this.shared.contentPosition.copy(this.contentPosition),this.shared.contentRotation.copy(this.contentRotation),this.shared.contentScale.copy(this.contentScale),this.updateEnd()}pointerUpdate(e,t){e.dragPos.copy(t.dragPos),e.dragPos.y*=-1,e.pinchPos.copy(t.pinchPos),e.hit=t.hit}controllerConnected(e){const t=e.data.gamepad;e.target.gamepad=t,e.target.supportHaptic=t&&"hapticActuators"in t&&t.hapticActuators!=null&&t.hapticActuators.length>0}controllerDisconnected(e){e.target.gamepad=null,e.target.supportHaptic=!1}controllerSelectstart(e){const t=e.target;t.userData.button===-1&&(t.userData.button=0,t.userData.down=!0,t.userData.downChanged=!0)}controllerSelectend(e){const t=e.target;t.userData.button===0&&(t.userData.button=-1,t.userData.down=!1,t.userData.downChanged=!0)}controllerSqueezestart(e){const t=e.target;t.userData.button===-1&&(t.userData.button=1,t.userData.down=!0,t.userData.downChanged=!0)}controllerSqueezeend(e){const t=e.target;t.userData.button===1&&(t.userData.button=-1,t.userData.down=!1,t.userData.downChanged=!0)}pointerMoveHandler(e){}pointerDownHandler(e){}pointerUpHandler(e){}hapticFeedbackStrong(e){this.hapticFeedback(e,1,50)}hapticFeedbackWeak(e){this.hapticFeedback(e,.5,25)}hapticFeedback(e,t,n){const{gamepad:i,supportHaptic:s}=e;s&&i.hapticActuators[0].pulse(t,n)}isComplete(){return!1}dispose(){this.floor&&(ki(this.floor),this.scene.remove(this.floor)),this.light&&(ki(this.light),this.scene.remove(this.light))}}class hS extends Yp{constructor(e,t){super(e,t),this.contentContainer=this.player.cubeContainer,this.player.renderer.shadowMap.enabled=!0,this.hitObject=this.cubeProxy.container}contentTransformInit(){super.contentTransformInit();const e=1,t=Math.sqrt(3)*e*.5;this.shared.contentFloorPos.z=-1.5,this.shared.contentPosition.y=t,this.shared.contentScale.set(e,e,e)}updatePinchPanClamp(){const e=this.cubeBoundingSphereDiameterAtScale(this.pinchScaleMax),t=this.cubeBoundingSphereDiameterAtScale(this.pinchScaleEased)*.5;this.pinchPanClampMinY=t,this.pinchPanClampMaxY=e-t}cubeBoundingSphereDiameterAtScale(e){return Math.sqrt(3)*e}update(e,t){super.update(e,t)}dispose(){super.dispose(),this.player.renderer.shadowMap.enabled=!1}}class uS extends Yp{constructor(e,t){super(e,t),this.contentContainer=this.player.contentContainer,this.enableDragRot=!0,this.enablePinchScale=!1,this.enablePinchPan=!0,this.dragOnHit=!1,this.dragRotFreedom.set(1,0),this.pinchPanOnHit=!1,this.pinchPanFreedom=new THREE.Vector3(1,1,1)}contentTransformInit(){super.contentTransformInit();const e=1;this.shared.contentFloorPos.z=-1.5,this.shared.contentScale.set(e,e,e)}updatePinchPanClamp(){this.pinchPanClampMinY=0,this.pinchPanClampMaxY=2}update(e,t){super.update(e,t)}}const dS=0,Qr=1,Jr=2,la=0,fc=1,ca=2,fS=0,pc=1,mc=2,gc=3,xc=4,dd=5;class fr{constructor(){if(fr.Instance)return fr.Instance;fr.Instance=this,this.template=dS,this.appState=fS,this.appStateChanged=!1,this.contentLoadState=la,this.contentLoadStateChanged=!1,this.contentLoadProgress=0}appStateUpdate(e){this.appStateChanged=this.appState!=e,this.appState=e}contentLoadStateUpdate(e){this.contentLoadStateChanged=this.contentLoadState!=e,this.contentLoadState=e}}class pS extends di{constructor(e,t){super(e),this.shared=t,this.player=t.player,this.contentLoadFunc=t.contentLoad,this.state=la,this.loadMinTime=0,this.loadMinTimeTotal=1,this.loadMinProgress=0,this.loadMinTimeDone=!1,this.loadProgress=0}update(e,t){if(this.state===fc){this.loadMinTime<this.loadMinTimeTotal&&(this.loadMinTime+=t,this.loadMinTimeDone=this.loadMinTime>=this.loadMinTimeTotal,this.loadMinTimeDone&&(this.loadMinTime=this.loadMinTimeTotal),this.loadMinProgress=this.loadMinTime/this.loadMinTimeTotal);const n=this.player.contentLoaded();let i=this.player.contentLoadProgress();i=Yt(i,0,1),n&&(i=1),this.loadProgress=Math.min(this.loadMinProgress,i),n&&(this.loadProgress=1,this.state=ca)}this.shared.contentLoadStateUpdate(this.state),this.shared.contentLoadProgress=this.loadProgress}pointerDownHandler(e){this.contentLoadFunc&&(this.contentLoadFunc(),this.contentLoadFunc=null,this.state=fc)}isComplete(){return this.state=ca}}class mS extends di{constructor(e,t){super(e),this.shared=t,this.player=t.player,this.cubeProxy=t.cubeProxy;let n=this.player.contentContainer;n||(n=this.player.cubeContainer),n.visible=!0,this.player.cubeMasterOpacity=0,this.player.masterOpacity=0,this.box=new THREE.Box3().copy(this.cubeProxy.box),this.boxEased=new THREE.Box3().copy(this.cubeProxy.box)}update(e,t){const i=t/.016666666666666666;this.cubeProxy&&(this.cubeProxy.timeElapsed=e);const s=this.shared.appState,o=this.shared.appStateChanged,a=this.shared.contentLoadState,l=this.shared.contentLoadStateChanged,c=this.shared.contentLoadProgress,u=a===ca;let h=0,d=1;a===la?(h=0,d=1):a===fc?(h=Yt(c,.2,.96),d=.15):a===ca&&(l?(h=1,d=1):(h=0,d=.15));let f=0;this.cubeProxy&&(f=this.cubeProxy.loadProgress,f+=(h-f)*d,f>0&&f<5e-4&&(f=0),this.cubeProxy.loadProgress=f);let p=u;p&&a>la&&(p=f===0);let x=0,g=1;s===pc?(x=u?1:0,g=1):s===mc?(x=0,g=1):s===gc?(x=u?.3:0,g=.15):(s===xc||s===dd)&&(x=u?1:0,g=.15),this.player.cubeMasterOpacity+=(x-this.player.cubeMasterOpacity)*g,this.player.masterOpacity+=(x-this.player.masterOpacity)*g;let m=0,_=1;s===pc?(m=p?0:1,_=o?1:.15):s===mc?(m=0,_=1):s===gc?(m=1,_=.15):(s===xc||s===dd)&&(m=p?0:1,_=.15),this.cubeProxy&&(this.cubeProxy.opacity+=(m-this.cubeProxy.opacity)*_);const v=Yt(.15*i,0,1);this.player.contentBox(this.box),this.box.isEmpty()||(this.boxEased.min.lerp(this.box.min,v),this.boxEased.max.lerp(this.box.max,v),this.cubeProxy.box=this.boxEased)}isComplete(){return!1}}function gS(r){return nm(()=>import(r),__vite__mapDeps([]),import.meta.url)}window.THREE=tb;const xS=navigator.userAgent.includes("EyeJack"),tt=new fr,Gi=new K1;Gi.spinnerShow();let ar=0,lr=0,ha=null,vS=null,vn=null,ua=null;const Xt={Preload:0,TapToStart:1,Inline:2,ImmersiveAR:3,ImmersiveVR:4,CubeLoader:5,CubeAnimator:6};let _t=null;function yS(){fetch("./content/ejx.json").then(r=>{if(r.ok)return r.json();console.error("ejx.json failed to load: "+r.statusText),vl(null)}).then(r=>{vl(r)}).catch(r=>{console.error("ejx.json failed to load: ",r),vl(null)})}yS();function vl(r){tt.template=Qr,r&&r.type&&r.type.length>0&&r.type==="EJXCube"&&(tt.template=Jr),_S();let e;r&&r.launchUrl&&r.launchUrl.length>0&&(e=r.launchUrl),P1({renderer:ua,vrOptions:{optionalFeatures:["local-floor","bounded-floor","plane-detection","anchors"]},arOptions:{optionalFeatures:["local-floor","bounded-floor","plane-detection","anchors","hit-test","dom-overlay"]},launchUrl:e,launchBaseUrl:void 0,appearance:{variant:"minimal",borderColor:"#fff",deemphasizedBorderColor:"#CCC",buttonText:"XR"},arReferenceSpace:"local-floor",vrReferenceSpace:void 0,onBeforeStart:CS.bind(this),onStart:PS.bind(this),onEnd:null,onError:DS.bind(this),container:document.getElementById("domOverlay")})}function _S(){ha=new Ws(!1),ha.start();const r={canvas:Gi.getCanvas(),gui:vS};tt.template===Qr&&(vn=new Ra(r)),tt.template===Jr&&(vn=new Ts(r),vn.setCube("Plain")),vn.renderOverrideFunc=SS.bind(this),vn.resizeOverrideFunc=wS.bind(this),ua=vn.renderer;const e=vn.scene;e.background=new pe(0);const t=new tS(new Oe);e.add(t.container),document.addEventListener("pointermove",TS.bind(this)),document.addEventListener("pointerdown",ES.bind(this)),document.addEventListener("pointerup",AS.bind(this)),ua.xr.addEventListener("sessionend",IS.bind(this));const n=()=>{let i="./content/app.js";gS(i).then(s=>{vn.setContent({filename:i,module:s})})};tt.player=vn,tt.appUi=Gi,tt.cubeProxy=t,tt.contentLoad=n,_t=[new nS(Xt.Preload,tt),Xp(),null,new mS(Xt.CubeAnimator,tt)]}function Xp(){if(tt.template===Qr)return new sS(Xt.Inline,tt);if(tt.template===Jr)return new rS(Xt.Inline,tt)}function MS(){if(tt.template===Qr)return new cS(Xt.ImmersiveAR,tt);if(tt.template===Jr)return new aS(Xt.ImmersiveAR,tt)}function qp(){if(tt.template===Qr)return new uS(Xt.ImmersiveVR,tt);if(tt.template===Jr)return new hS(Xt.ImmersiveVR,tt)}function bS(){const r=_t[0];r&&(r.update(lr,ar),r.isComplete()&&(r.dispose(),r.id===Xt.Preload?(_t[0]=null,xS||(_t[0]=new iS(Xt.TapToStart,tt)),_t[2]=new pS(Xt.CubeLoader,tt)):r.id===Xt.TapToStart&&(_t[0]=null)));const e=_t[1];e&&(e.update(lr,ar),e.id===Xt.Inline?tt.appStateUpdate(pc):e.id===Xt.ImmersiveAR&&(e.app.id===e.App.ARPlace?e.app.hitTestInit?tt.appStateUpdate(gc):tt.appStateUpdate(mc):e.app.id===e.App.ARControls?tt.appStateUpdate(xc):e.app.id===Xt.ImmersiveVR&&tt.appStateUpdate(AppStateVR)));const t=_t[2];t&&t.update(lr,ar);const n=_t[3];n&&n.update(lr,ar)}function SS(r,e){ar=ha.getDelta(),lr=ha.getElapsedTime(),bS(),vn.render()}function wS(){vn.resize()}function TS(r){_t.forEach(e=>{e&&e.pointerMoveHandler(r)})}function ES(r){_t.forEach(e=>{e&&e.pointerDownHandler(r)})}function AS(r){_t.forEach(e=>{e&&e.pointerUpHandler(r)})}function CS(r){Gi.coverShow()}function PS(r,e){if(r==="immersive-ar"){Qp();return}else r==="immersive-vr"&&(_t[1].dispose(),_t[1]=qp());Gi.coverHide()}function Qp(){const r=ua.xr.getCamera().cameras;if(r.length===0){setTimeout(Qp,50);return}else r.length===1?(_t[1].dispose(),_t[1]=MS()):r.length===2&&(_t[1].dispose(),_t[1]=qp());Gi.coverHide()}function IS(r){_t[1].dispose(),_t[1]=Xp()}function DS(r){console.log("onSessionError: "+r),Gi.coverHide()}
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}