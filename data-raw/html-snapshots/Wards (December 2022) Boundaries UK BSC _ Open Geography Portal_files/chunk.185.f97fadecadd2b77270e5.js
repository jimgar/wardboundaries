(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[185],{1074:function(t,e,r){"use strict"
r.d(e,"a",(function(){return s})),r.d(e,"b",(function(){return a})),r.d(e,"c",(function(){return n})),r.d(e,"d",(function(){return d})),r.d(e,"e",(function(){return u})),r.d(e,"f",(function(){return h})),r.d(e,"g",(function(){return o})),r.d(e,"h",(function(){return c}))
const s=8388607,i=8388608,n=0,a=1,o=t=>(t&i)>>>23,h=t=>t&s,u=t=>o(t)===a?254:255
function c(t){return o(t)===a}function d(t,e){return((e?i:0)|t)>>>0}},1096:function(t,e,r){"use strict"
r.d(e,"a",(function(){return o}))
var s,i,n,a={exports:{}}
s=a,i=function(){function t(t,r,i){i=i||2
var n,a,o,u,c,d,l,f=r&&r.length,_=f?r[0]*i:t.length,p=e(t,0,_,i,!0),x=[]
if(!p||p.next===p.prev)return x
if(f&&(p=h(t,r,p,i)),t.length>80*i){n=o=t[0],a=u=t[1]
for(var b=i;b<_;b+=i)(c=t[b])<n&&(n=c),(d=t[b+1])<a&&(a=d),c>o&&(o=c),d>u&&(u=d)
l=0!==(l=Math.max(o-n,u-a))?1/l:0}return s(p,x,i,n,a,l),x}function e(t,e,r,s,i){var n,a
if(i===S(t,e,r,s)>0)for(n=e;n<r;n+=s)a=T(n,t[n],t[n+1],a)
else for(n=r-s;n>=e;n-=s)a=T(n,t[n],t[n+1],a)
if(a&&g(a,a.next)){var o=a.next
R(a),a=o}return a}function r(t,e){if(!t)return t
e||(e=t)
var r,s=t
do{if(r=!1,s.steiner||!g(s,s.next)&&0!==y(s.prev,s,s.next))s=s.next
else{var i=s.prev
if(R(s),(s=e=i)===s.next)break
r=!0}}while(r||s!==e)
return e}function s(t,e,h,u,c,d,l){if(t){!l&&d&&f(t,u,c,d)
for(var _,p,x=t;t.prev!==t.next;)if(_=t.prev,p=t.next,d?n(t,u,c,d):i(t))e.push(_.i/h),e.push(t.i/h),e.push(p.i/h),R(t),t=p.next,x=p.next
else if((t=p)===x){l?1===l?s(t=a(r(t),e,h),e,h,u,c,d,2):2===l&&o(t,e,h,u,c,d):s(r(t),e,h,u,c,d,1)
break}}}function i(t){var e=t.prev,r=t,s=t.next
if(y(e,r,s)>=0)return!1
for(var i=t.next.next;i!==t.prev;){if(x(e.x,e.y,r.x,r.y,s.x,s.y,i.x,i.y)&&y(i.prev,i,i.next)>=0)return!1
i=i.next}return!0}function n(t,e,r,s){var i=t.prev,n=t,a=t.next
if(y(i,n,a)>=0)return!1
for(var o=i.x<n.x?i.x<a.x?i.x:a.x:n.x<a.x?n.x:a.x,h=i.y<n.y?i.y<a.y?i.y:a.y:n.y<a.y?n.y:a.y,u=i.x>n.x?i.x>a.x?i.x:a.x:n.x>a.x?n.x:a.x,c=i.y>n.y?i.y>a.y?i.y:a.y:n.y>a.y?n.y:a.y,d=_(o,h,e,r,s),l=_(u,c,e,r,s),f=t.prevZ,p=t.nextZ;f&&f.z>=d&&p&&p.z<=l;){if(f!==t.prev&&f!==t.next&&x(i.x,i.y,n.x,n.y,a.x,a.y,f.x,f.y)&&y(f.prev,f,f.next)>=0)return!1
if(f=f.prevZ,p!==t.prev&&p!==t.next&&x(i.x,i.y,n.x,n.y,a.x,a.y,p.x,p.y)&&y(p.prev,p,p.next)>=0)return!1
p=p.nextZ}for(;f&&f.z>=d;){if(f!==t.prev&&f!==t.next&&x(i.x,i.y,n.x,n.y,a.x,a.y,f.x,f.y)&&y(f.prev,f,f.next)>=0)return!1
f=f.prevZ}for(;p&&p.z<=l;){if(p!==t.prev&&p!==t.next&&x(i.x,i.y,n.x,n.y,a.x,a.y,p.x,p.y)&&y(p.prev,p,p.next)>=0)return!1
p=p.nextZ}return!0}function a(t,e,s){var i=t
do{var n=i.prev,a=i.next.next
!g(n,a)&&m(n,i,i.next,a)&&w(n,a)&&w(a,n)&&(e.push(n.i/s),e.push(i.i/s),e.push(a.i/s),R(i),R(i.next),i=t=a),i=i.next}while(i!==t)
return r(i)}function o(t,e,i,n,a,o){var h=t
do{for(var u=h.next.next;u!==h.prev;){if(h.i!==u.i&&b(h,u)){var c=O(h,u)
return h=r(h,h.next),c=r(c,c.next),s(h,e,i,n,a,o),void s(c,e,i,n,a,o)}u=u.next}h=h.next}while(h!==t)}function h(t,s,i,n){var a,o,h,c=[]
for(a=0,o=s.length;a<o;a++)(h=e(t,s[a]*n,a<o-1?s[a+1]*n:t.length,n,!1))===h.next&&(h.steiner=!0),c.push(p(h))
for(c.sort(u),a=0;a<c.length;a++)i=r(i=d(c[a],i),i.next)
return i}function u(t,e){return t.x-e.x}function c(t){if(t.next.prev===t)return t
let e=t
for(;;){const r=e.next
if(r.prev===e||r===e||r===t)break
e=r}return e}function d(t,e){var s=function(t,e){var r,s=e,i=t.x,n=t.y,a=-1/0
do{if(n<=s.y&&n>=s.next.y&&s.next.y!==s.y){var o=s.x+(n-s.y)*(s.next.x-s.x)/(s.next.y-s.y)
if(o<=i&&o>a){if(a=o,o===i){if(n===s.y)return s
if(n===s.next.y)return s.next}r=s.x<s.next.x?s:s.next}}s=s.next}while(s!==e)
if(!r)return null
if(i===a)return r
var h,u=r,c=r.x,d=r.y,f=1/0
s=r
do{i>=s.x&&s.x>=c&&i!==s.x&&x(n<d?i:a,n,c,d,n<d?a:i,n,s.x,s.y)&&(h=Math.abs(n-s.y)/(i-s.x),w(s,t)&&(h<f||h===f&&(s.x>r.x||s.x===r.x&&l(r,s)))&&(r=s,f=h)),s=s.next}while(s!==u)
return r}(t,e)
if(!s)return e
var i=O(s,t),n=r(s,s.next)
let a=c(i)
return r(a,a.next),n=c(n),c(e===s?n:e)}function l(t,e){return y(t.prev,t,e.prev)<0&&y(e.next,t,t.next)<0}function f(t,e,r,s){var i=t
do{null===i.z&&(i.z=_(i.x,i.y,e,r,s)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next}while(i!==t)
i.prevZ.nextZ=null,i.prevZ=null,function(t){var e,r,s,i,n,a,o,h,u=1
do{for(r=t,t=null,n=null,a=0;r;){for(a++,s=r,o=0,e=0;e<u&&(o++,s=s.nextZ);e++);for(h=u;o>0||h>0&&s;)0!==o&&(0===h||!s||r.z<=s.z)?(i=r,r=r.nextZ,o--):(i=s,s=s.nextZ,h--),n?n.nextZ=i:t=i,i.prevZ=n,n=i
r=s}n.nextZ=null,u*=2}while(a>1)}(i)}function _(t,e,r,s,i){return(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-r)*i)|t<<8))|t<<4))|t<<2))|t<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-s)*i)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function p(t){var e=t,r=t
do{(e.x<r.x||e.x===r.x&&e.y<r.y)&&(r=e),e=e.next}while(e!==t)
return r}function x(t,e,r,s,i,n,a,o){return(i-a)*(e-o)-(t-a)*(n-o)>=0&&(t-a)*(s-o)-(r-a)*(e-o)>=0&&(r-a)*(n-o)-(i-a)*(s-o)>=0}function b(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!function(t,e){var r=t
do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==e.i&&r.next.i!==e.i&&m(r,r.next,t,e))return!0
r=r.next}while(r!==t)
return!1}(t,e)&&(w(t,e)&&w(e,t)&&function(t,e){var r=t,s=!1,i=(t.x+e.x)/2,n=(t.y+e.y)/2
do{r.y>n!=r.next.y>n&&r.next.y!==r.y&&i<(r.next.x-r.x)*(n-r.y)/(r.next.y-r.y)+r.x&&(s=!s),r=r.next}while(r!==t)
return s}(t,e)&&(y(t.prev,t,e.prev)||y(t,e.prev,e))||g(t,e)&&y(t.prev,t,t.next)>0&&y(e.prev,e,e.next)>0)}function y(t,e,r){return(e.y-t.y)*(r.x-e.x)-(e.x-t.x)*(r.y-e.y)}function g(t,e){return t.x===e.x&&t.y===e.y}function m(t,e,r,s){var i=E(y(t,e,r)),n=E(y(t,e,s)),a=E(y(r,s,t)),o=E(y(r,s,e))
return i!==n&&a!==o||!(0!==i||!v(t,r,e))||!(0!==n||!v(t,s,e))||!(0!==a||!v(r,t,s))||!(0!==o||!v(r,e,s))}function v(t,e,r){return e.x<=Math.max(t.x,r.x)&&e.x>=Math.min(t.x,r.x)&&e.y<=Math.max(t.y,r.y)&&e.y>=Math.min(t.y,r.y)}function E(t){return t>0?1:t<0?-1:0}function w(t,e){return y(t.prev,t,t.next)<0?y(t,e,t.next)>=0&&y(t,t.prev,e)>=0:y(t,e,t.prev)<0||y(t,t.next,e)<0}function O(t,e){var r=new j(t.i,t.x,t.y),s=new j(e.i,e.x,e.y),i=t.next,n=e.prev
return t.next=e,e.prev=t,r.next=i,i.prev=r,s.next=r,r.prev=s,n.next=s,s.prev=n,s}function T(t,e,r,s){var i=new j(t,e,r)
return s?(i.next=s.next,i.prev=s,s.next.prev=i,s.next=i):(i.prev=i,i.next=i),i}function R(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function j(t,e,r){this.i=t,this.x=e,this.y=r,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function S(t,e,r,s){for(var i=0,n=e,a=r-s;n<r;n+=s)i+=(t[a]-t[n])*(t[n+1]+t[a+1]),a=n
return i}return t.deviation=function(t,e,r,s){var i=e&&e.length,n=i?e[0]*r:t.length,a=Math.abs(S(t,0,n,r))
if(i)for(var o=0,h=e.length;o<h;o++){var u=e[o]*r,c=o<h-1?e[o+1]*r:t.length
a-=Math.abs(S(t,u,c,r))}var d=0
for(o=0;o<s.length;o+=3){var l=s[o]*r,f=s[o+1]*r,_=s[o+2]*r
d+=Math.abs((t[l]-t[_])*(t[f+1]-t[l+1])-(t[l]-t[f])*(t[_+1]-t[l+1]))}return 0===a&&0===d?0:Math.abs((d-a)/a)},t.flatten=function(t){for(var e=t[0][0].length,r={vertices:[],holes:[],dimensions:e},s=0,i=0;i<t.length;i++){for(var n=0;n<t[i].length;n++)for(var a=0;a<e;a++)r.vertices.push(t[i][n][a])
i>0&&(s+=t[i-1].length,r.holes.push(s))}return r},t},void 0!==(n=i())&&(s.exports=n)
const o=a.exports},1158:function(t,e,r){"use strict"
function s(){return new Float32Array(4)}function i(t){const e=new Float32Array(4)
return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}function n(t,e,r,s){const i=new Float32Array(4)
return i[0]=t,i[1]=e,i[2]=r,i[3]=s,i}function a(){return s()}function o(){return n(1,1,1,1)}function h(){return n(1,0,0,0)}function u(){return n(0,1,0,0)}function c(){return n(0,0,1,0)}function d(){return n(0,0,0,1)}r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return s})),r.d(e,"c",(function(){return n}))
const l=a(),f=o(),_=h(),p=u(),x=c(),b=d()
Object.freeze({__proto__:null,create:s,clone:i,fromValues:n,createView:function(t,e){return new Float32Array(t,e,4)},zeros:a,ones:o,unitX:h,unitY:u,unitZ:c,unitW:d,ZEROS:l,ONES:f,UNIT_X:_,UNIT_Y:p,UNIT_Z:x,UNIT_W:b})},1232:function(t,e,r){"use strict"
r.d(e,"a",(function(){return j})),r(77)
var s=r(20),i=r(1025),n=r(1344),a=r(1290),o=r(354),h=r(177),u=r(1123),c=r(1096),d=r(919),l=r(938),f=r(930),_=r(935),p=r(937),x=r(985),b=r(877)
const y=h.a.getLogger("esri.views.2d.engine.webgl.Mesh2D"),g=(t,e,r,s)=>{let i=0
for(let s=1;s<r;s++){const r=t[2*(e+s-1)],n=t[2*(e+s-1)+1]
i+=(t[2*(e+s)]-r)*(t[2*(e+s)+1]+n)}return s?i>0:i<0},m=({coords:t,lengths:e},r)=>{const s=[]
for(let i=0,n=0;i<e.length;n+=e[i],i+=1){const a=n,o=[]
for(;i<e.length-1&&g(t,n+e[i],e[i+1],r);i+=1,n+=e[i])o.push(n+e[i]-a)
const h=t.slice(2*a,2*(n+e[i])),u=Object(c.a)(h,o,2)
for(const t of u)s.push(t+a)}return s}
class v{constructor(t,e,r,s=!1){this._cache={},this.vertices=t,this.indices=e,this.primitiveType=r,this.isMapSpace=s}static fromRect({x:t,y:e,width:r,height:s}){const i=t,n=e,a=i+r,o=n+s
return v.fromScreenExtent({xmin:i,ymin:n,xmax:a,ymax:o})}static fromPath(t){const e=Object(f.f)(new _.a,t.path,!1,!1),r=e.coords,s=new Uint32Array(m(e,!0)),i=new Uint32Array(r.length/2)
for(let t=0;t<i.length;t++)i[t]=Object(p.a)(Math.floor(r[2*t]),Math.floor(r[2*t+1]))
return new v({geometry:i},s,b.r.TRIANGLES)}static fromGeometry(t,e){const r=e.geometry.type
switch(r){case"polygon":return v.fromPolygon(t,e.geometry)
case"extent":return v.fromMapExtent(t,e.geometry)
default:return y.error(new o.a("mapview-bad-type","Unable to create a mesh from type "+r,e)),v.fromRect({x:0,y:0,width:1,height:1})}}static fromPolygon(t,e){const r=Object(f.h)(new _.a,e,!1,!1),s=r.coords,i=new Uint32Array(m(r,!1)),n=new Uint32Array(s.length/2),a=Object(l.b)(),o=Object(l.b)()
for(let e=0;e<n.length;e++)Object(d.s)(a,s[2*e],s[2*e+1]),t.toScreen(o,a),n[e]=Object(p.a)(Math.floor(o[0]),Math.floor(o[1]))
return new v({geometry:n},i,b.r.TRIANGLES,!0)}static fromScreenExtent({xmin:t,xmax:e,ymin:r,ymax:s}){const i={geometry:new Uint32Array([Object(p.a)(t,r),Object(p.a)(e,r),Object(p.a)(t,s),Object(p.a)(t,s),Object(p.a)(e,r),Object(p.a)(e,s)])},n=new Uint32Array([0,1,2,3,4,5])
return new v(i,n,b.r.TRIANGLES)}static fromMapExtent(t,e){const[r,s]=t.toScreen([0,0],[e.xmin,e.ymin]),[i,n]=t.toScreen([0,0],[e.xmax,e.ymax]),a={geometry:new Uint32Array([Object(p.a)(r,s),Object(p.a)(i,s),Object(p.a)(r,n),Object(p.a)(r,n),Object(p.a)(i,s),Object(p.a)(i,n)])},o=new Uint32Array([0,1,2,3,4,5])
return new v(a,o,b.r.TRIANGLES)}destroy(){Object(s.k)(this._cache.indexBuffer)&&this._cache.indexBuffer.dispose()
for(const t in this._cache.vertexBuffers)Object(s.k)(this._cache.vertexBuffers[t])&&this._cache.vertexBuffers[t].dispose()}get elementType(){return(t=>{switch(t.BYTES_PER_ELEMENT){case 1:return b.k.UNSIGNED_BYTE
case 2:return b.k.UNSIGNED_SHORT
case 4:return b.k.UNSIGNED_INT
default:throw new o.a("Cannot get DataType of array")}})(this.indices)}getIndexBuffer(t,e=b.D.STATIC_DRAW){return this._cache.indexBuffer||(this._cache.indexBuffer=x.a.createIndex(t,e,this.indices)),this._cache.indexBuffer}getVertexBuffers(t,e=b.D.STATIC_DRAW){return this._cache.vertexBuffers||(this._cache.vertexBuffers=Object.keys(this.vertices).reduce((r,s)=>({...r,[s]:x.a.createVertex(t,e,this.vertices[s])}),{})),this._cache.vertexBuffers}}var E=r(998)
const w=h.a.getLogger("esri.views.2d.engine.webgl.ClippingInfo"),O=t=>parseFloat(t)/100
class T extends u.a{constructor(t,e){super(),this._clip=e,this._cache={},this.stage=t,this._handle=e.watch("version",()=>this._invalidate()),this.ready()}static fromClipArea(t,e){return new T(t,e)}_destroyGL(){Object(s.k)(this._cache.mesh)&&(this._cache.mesh.destroy(),this._cache.mesh=null),Object(s.k)(this._cache.vao)&&(this._cache.vao.dispose(),this._cache.vao=null)}destroy(){this._destroyGL(),this._handle.remove()}getVAO(t,e,r,i){const[n,a]=e.size
if("geometry"!==this._clip.type&&this._lastWidth===n&&this._lastHeight===a||(this._lastWidth=n,this._lastHeight=a,this._destroyGL()),Object(s.j)(this._cache.vao)){const s=this._createMesh(e,this._clip),n=s.getIndexBuffer(t),a=s.getVertexBuffers(t)
this._cache.mesh=s,this._cache.vao=new E.a(t,r,i,a,n)}return this._cache.vao}_createTransforms(){return{dvs:Object(i.b)()}}_invalidate(){this._destroyGL(),this.requestRender()}_createScreenRect(t,e){const[r,s]=t.size,i="string"==typeof e.left?O(e.left)*r:e.left,n="string"==typeof e.right?O(e.right)*r:e.right,a="string"==typeof e.top?O(e.top)*s:e.top,o="string"==typeof e.bottom?O(e.bottom)*s:e.bottom,h=i,u=a
return{x:h,y:u,width:Math.max(r-n-h,0),height:Math.max(s-o-u,0)}}_createMesh(t,e){switch(e.type){case"rect":return v.fromRect(this._createScreenRect(t,e))
case"path":return v.fromPath(e)
case"geometry":return v.fromGeometry(t,e)
default:return w.error(new o.a("mapview-bad-type","Unable to create ClippingInfo mesh from clip of type: ${clip.type}")),v.fromRect({x:0,y:0,width:1,height:1})}}}var R=r(908)
class j extends a.a{constructor(){super(...arguments),this.name=this.constructor.name}set clips(t){this._clips=t,this.children.forEach(e=>e.clips=t),this._updateClippingInfo()}_createTransforms(){return{dvs:Object(i.b)()}}doRender(t){const e=this.createRenderParams(t),{painter:r,globalOpacity:s,profiler:i,drawPhase:n}=e,a=n===R.c.LABEL||n===R.c.HIGHLIGHT?1:s*this.computedOpacity
i.recordContainerStart(this.name),r.beforeRenderLayer(e,this._clippingInfos?255:0,a),this.updateTransforms(t.state),this.renderChildren(e),r.compositeLayer(e,a),i.recordContainerEnd()}renderChildren(t){Object(s.j)(this._renderPasses)&&(this._renderPasses=this.prepareRenderPasses(t.painter))
for(const e of this.children)e.beforeRender(t)
for(const e of this._renderPasses)try{e.render(t)}catch(t){}for(const e of this.children)e.afterRender(t)}createRenderParams(t){return t.requireFBO=this.requiresDedicatedFBO,t}prepareRenderPasses(t){return[t.registerRenderPass({name:"clip",brushes:[n.a.clip],target:()=>this._clippingInfos,drawPhase:R.c.MAP|R.c.LABEL|R.c.LABEL_ALPHA|R.c.DEBUG|R.c.HIGHLIGHT})]}updateTransforms(t){for(const e of this.children)e.setTransform(t)}onAttach(){super.onAttach(),this._updateClippingInfo()}onDetach(){super.onDetach(),this._updateClippingInfo()}_updateClippingInfo(){if(Object(s.k)(this._clippingInfos)&&(this._clippingInfos.forEach(t=>t.destroy()),this._clippingInfos=null),!this.stage)return
const t=this._clips
Object(s.k)(t)&&t.length&&(this._clippingInfos=t.items.map(t=>T.fromClipArea(this.stage,t))),this.requestRender()}}},1277:function(t,e,r){"use strict"
r.d(e,"a",(function(){return a}))
var s=r(978),i=r(1123),n=r(1059)
class a extends i.a{constructor(t,e,r,s,i,a=s,o=i){super(),this.triangleCountReportedInDebug=0,this.triangleCount=0,this.texture=null,this.key=new n.a(t),this.x=e,this.y=r,this.width=s,this.height=i,this.rangeX=a,this.rangeY=o}destroy(){this.texture&&(this.texture.dispose(),this.texture=null)}setTransform(t,e){const r=e/(t.resolution*t.pixelRatio),i=this.transforms.tileMat3,[n,a]=t.toScreenNoRotation([0,0],[this.x,this.y]),o=this.width/this.rangeX*r,h=this.height/this.rangeY*r
Object(s.o)(i,o,0,0,0,h,0,n,a,1),Object(s.l)(this.transforms.dvs,t.displayViewMat3,i)}}},1310:function(t,e,r){"use strict"
r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return s}))
const s=(t,e)=>t&&((...t)=>e.warn("DEBUG:",...t))||(()=>null),i=!1},1322:function(t,e,r){"use strict"
r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return s})),r.d(e,"d",(function(){return a}))
const s=!0,i=32,n=1.5,a=200},1342:function(t,e,r){"use strict"
r.d(e,"a",(function(){return u}))
var s=r(77),i=r(908),n=r(1232),a=r(1542),o=r(1534)
const h=(t,e)=>t.key.level-e.key.level!=0?t.key.level-e.key.level:t.key.row-e.key.row!=0?t.key.row-e.key.row:t.key.col-e.key.col
class u extends n.a{constructor(t){super(),this._tileInfoView=t}get requiresDedicatedFBO(){return!1}renderChildren(t){this.sortChildren(h),this.setStencilReference(t),super.renderChildren(t)}createRenderParams(t){const{state:e}=t,r=super.createRenderParams(t)
return r.requiredLevel=this._tileInfoView.getClosestInfoForScale(e.scale).level,r.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(e.scale),r}prepareRenderPasses(t){const e=super.prepareRenderPasses(t)
return e.push(t.registerRenderPass({name:"stencil",brushes:[o.a],drawPhase:i.c.DEBUG|i.c.MAP|i.c.HIGHLIGHT,target:()=>this.getStencilTarget()})),Object(s.a)("esri-tiles-debug")&&e.push(t.registerRenderPass({name:"tileInfo",brushes:[a.a],drawPhase:i.c.DEBUG,target:()=>this.children})),e}getStencilTarget(){return this.children}updateTransforms(t){for(const e of this.children){const r=this._tileInfoView.getTileResolution(e.key)
e.setTransform(t,r)}}setStencilReference(t){let e=1
for(const t of this.children)t.stencilRef=e++}}},1366:function(t,e,r){"use strict"
r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return a}))
var s=r(877),i=r(1079)
const n={geometry:[new i.a("a_pos",2,s.k.BYTE,0,2)]},a={geometry:[new i.a("a_pos",2,s.k.BYTE,0,4),new i.a("a_tex",2,s.k.BYTE,2,4)]},o={geometry:[new i.a("a_pos",2,s.k.UNSIGNED_SHORT,0,4)]}},1378:function(t,e,r){"use strict"
r.d(e,"a",(function(){return h})),r.d(e,"b",(function(){return a})),r.d(e,"c",(function(){return o})),r.d(e,"d",(function(){return d})),r.d(e,"e",(function(){return c})),r.d(e,"f",(function(){return u})),r.d(e,"g",(function(){return f})),r.d(e,"h",(function(){return l})),r.d(e,"i",(function(){return _})),r.d(e,"j",(function(){return x})),r.d(e,"k",(function(){return p}))
var s=r(1051),i=r(877),n=(r(1041),r(973))
function a(t,e,r="nearest",a=!1){var o
const h=!(a&&"u8"===e.pixelType),u=h?i.q.FLOAT:i.q.UNSIGNED_BYTE,c=null==e.pixels||0===e.pixels.length?null:h?e.getAsRGBAFloat():e.getAsRGBA(),d=null==(o=t.capabilities.textureFloat)?void 0:o.textureFloatLinear,l={width:e.width,height:e.height,target:i.A.TEXTURE_2D,pixelFormat:i.p.RGBA,internalFormat:t.type===s.a.WEBGL2&&h?i.v.RGBA32F:i.p.RGBA,samplingMode:!d||"bilinear"!==r&&"cubic"!==r?i.z.NEAREST:i.z.LINEAR,dataType:u,wrapMode:i.B.CLAMP_TO_EDGE,flipped:!1}
return new n.a(t,l,c)}function o(t,e){const{spacing:r,offsets:a,coefficients:o,size:[h,u]}=e,c=r[0]>1,d={width:c?4*h:h,height:u,target:i.A.TEXTURE_2D,pixelFormat:i.p.RGBA,internalFormat:t.type===s.a.WEBGL2?i.v.RGBA32F:i.p.RGBA,dataType:i.q.FLOAT,samplingMode:i.z.NEAREST,wrapMode:i.B.CLAMP_TO_EDGE,flipped:!1},l=new Float32Array(c?h*u*16:2*a.length)
if(c)for(let t=0,e=0;t<o.length;t++)l[e++]=o[t],t%3==2&&(l[e++]=1)
else for(let t=0;t<u;t++)for(let e=0;e<h;e++){const r=4*(t*h+e),s=2*(e*u+t)
l[r]=a[s],l[r+1]=a[s+1],l[r+3]=-1===a[s]?0:1}return new n.a(t,d,l)}function h(t,e){const r={width:e.length/4,height:1,target:i.A.TEXTURE_2D,pixelFormat:i.p.RGBA,internalFormat:i.p.RGBA,dataType:i.q.UNSIGNED_BYTE,samplingMode:i.z.NEAREST,wrapMode:i.B.CLAMP_TO_EDGE,flipped:!1}
return new n.a(t,r,e)}function u(t,e,r,s=1,i=!0,n=!1){return{u_flipY:i,u_isFloatTexture:n,u_applyTransform:!!t,u_opacity:s,u_transformSpacing:t?t.spacing:null,u_transformGridSize:t?t.size:null,u_targetImageSize:e,u_srcImageSize:r}}function c(t,e){return{u_colormapOffset:e||0,u_colormapMaxIndex:t?t.length/4-1:null}}function d(t,e){return{u_scale:t,u_offset:e}}function l(t){return{u_bandCount:t.bandCount,u_minOutput:t.outMin,u_maxOutput:t.outMax,u_minCutOff:t.minCutOff,u_maxCutOff:t.maxCutOff,u_factor:t.factor,u_useGamma:t.useGamma,u_gamma:t.gamma,u_gammaCorrection:t.gammaCorrection}}function f(t){return{u_hillshadeType:t.hillshadeType,u_sinZcosAs:t.sinZcosAs,u_sinZsinAs:t.sinZsinAs,u_cosZs:t.cosZs,u_weights:t.weights,u_factor:t.factor,u_minValue:t.minValue,u_maxValue:t.maxValue}}function _(t,e){const r=t.gl,s=e.glName,i=r.getProgramParameter(s,r.ACTIVE_UNIFORMS),n=new Map
let a
for(let t=0;t<i;t++)a=r.getActiveUniform(s,t),a&&n.set(a.name,{location:r.getUniformLocation(s,a.name),info:a})
return n}function p(t,e,r){Object.keys(r).forEach(s=>{const n=e.get(s)||e.get(s+"[0]")
n&&function(t,e,r,s){if(null===s||null==r)return!1
const{info:n}=s
switch(n.type){case i.C.FLOAT:n.size>1?t.setUniform1fv(e,r):t.setUniform1f(e,r)
break
case i.C.FLOAT_VEC2:t.setUniform2fv(e,r)
break
case i.C.FLOAT_VEC3:t.setUniform3fv(e,r)
break
case i.C.FLOAT_VEC4:t.setUniform4fv(e,r)
break
case i.C.FLOAT_MAT3:t.setUniformMatrix3fv(e,r)
break
case i.C.FLOAT_MAT4:t.setUniformMatrix4fv(e,r)
break
case i.C.INT:n.size>1?t.setUniform1iv(e,r):t.setUniform1i(e,r)
break
case i.C.BOOL:t.setUniform1i(e,r?1:0)
break
case i.C.INT_VEC2:case i.C.BOOL_VEC2:t.setUniform2iv(e,r)
break
case i.C.INT_VEC3:case i.C.BOOL_VEC3:t.setUniform3iv(e,r)
break
case i.C.INT_VEC4:case i.C.BOOL_VEC4:t.setUniform4iv(e,r)
break
default:
}}(t,s,r[s],n)})}function x(t,e,r,s){r.length===s.length&&(s.some(t=>null==t)||r.some(t=>null==t)||r.forEach((r,i)=>{e.setUniform1i(r,i),t.bindTexture(s[i],i)}))}},1446:function(t,e,r){"use strict"
r.d(e,"a",(function(){return f})),r.d(e,"b",(function(){return u}))
var s=r(20),i=r(876),n=r(1e3),a=r(891),o=r(908),h=r(1303)
function u(t,e){if(!t||!e)return t
switch(e){case"radius":case"distance":return 2*t
case"diameter":case"width":return t
case"area":return Math.sqrt(t)}return t}function c(t){return t.map(t=>function(t){return{value:t.value,size:Object(i.k)(t.size)}}(t))}function d(t){if("string"==typeof t||"number"==typeof t)return Object(i.k)(t)
const e=t
return{type:"size",expression:e.expression,stops:c(e.stops)}}const l=t=>{const e=[],r=[],s=c(t),n=s.length
for(let t=0;t<6;t++){const o=s[Math.min(t,n-1)]
e.push(o.value),r.push(null==o.size?a.x:Object(i.h)(o.size))}return{values:new Float32Array(e),sizes:new Float32Array(r)}}
function f(t){const e=t&&t.length>0?{}:null,r=e?{}:null
if(!e)return{vvFields:e,vvRanges:r}
for(const s of t)if(s.field&&(e[s.type]=s.field),"size"===s.type){r.size||(r.size={})
const t=s
switch(Object(h.a)(t)){case o.e.SIZE_MINMAX_VALUE:r.size.minMaxValue={minDataValue:t.minDataValue,maxDataValue:t.maxDataValue,minSize:d(t.minSize),maxSize:d(t.maxSize)}
break
case o.e.SIZE_SCALE_STOPS:r.size.scaleStops={stops:c(t.stops)}
break
case o.e.SIZE_FIELD_STOPS:if(t.levels){const e={}
for(const r in t.levels)e[r]=l(t.levels[r])
r.size.fieldStops={type:"level-dependent",levels:e}}else r.size.fieldStops={type:"static",...l(t.stops)}
break
case o.e.SIZE_UNIT_VALUE:r.size.unitValue={unit:t.valueUnit,valueRepresentation:t.valueRepresentation}}}else if("color"===s.type)r.color=x(s)
else if("opacity"===s.type)r.opacity=_(s)
else if("rotation"===s.type){const t=s
r.rotation={type:t.rotationType}}return{vvFields:e,vvRanges:r}}function _(t){const e={values:[0,0,0,0,0,0,0,0],opacities:[0,0,0,0,0,0,0,0]}
if("string"==typeof t.field){if(!t.stops)return null
{if(t.stops.length>8)return null
const r=t.stops
for(let t=0;t<8;++t){const s=r[Math.min(t,r.length-1)]
e.values[t]=s.value,e.opacities[t]=s.opacity}}}else{if(!(t.stops&&t.stops.length>=0))return null
{const r=t.stops&&t.stops.length>=0&&t.stops[0].opacity
for(let t=0;t<8;t++)e.values[t]=1/0,e.opacities[t]=r}}return e}function p(t,e,r){t[4*e+0]=r.r/255,t[4*e+1]=r.g/255,t[4*e+2]=r.b/255,t[4*e+3]=r.a}function x(t){if(Object(s.j)(t))return null
if(t.normalizationField)return null
const e={field:null,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
if("string"==typeof t.field){if(!t.stops)return null
{if(t.stops.length>8)return null
e.field=t.field
const r=t.stops
for(let t=0;t<8;++t){const s=r[Math.min(t,r.length-1)]
e.values[t]=s.value,p(e.colors,t,s.color)}}}else{if(!(t.stops&&t.stops.length>=0))return null
{const r=t.stops&&t.stops.length>=0&&t.stops[0].color
for(let t=0;t<8;t++)e.values[t]=1/0,p(e.colors,t,r)}}for(let t=0;t<32;t+=4)Object(n.b)(e.colors,t,!0)
return e}},1486:function(t,e,r){"use strict"
r.d(e,"a",(function(){return c}))
var s=r(1147),i=r(978),n=r(1025),a=r(919),o=r(1042),h=r(891),u=r(1277)
class c extends u.a{constructor(t,e,r){super(t,e,r,h.P,h.P)}destroy(){super.destroy(),this._transforms&&c.TransformCache.release(this.key.hash)}setTransform(t,e){const r=e/(t.resolution*t.pixelRatio),n=this.transforms.tileMat3,[h,u]=t.toScreenNoRotation([0,0],[this.x,this.y]),c=this.width/this.rangeX*r,d=this.height/this.rangeY*r
Object(i.o)(n,c,0,0,0,d,0,h,u,1),Object(i.l)(this.transforms.dvs,t.displayViewMat3,n)
const l=this.transforms.labelMat2d,f=t.getScreenTransform(l,e),_=Object(o.a)()
Object(a.t)(_,[this.x,this.y],f),Object(s.a)(l,_),Object(s.f)(l,t.viewMat2d,l)}_createTransforms(){return c.TransformCache.acquire(this.key.hash)}}c.TransformCache=new class{acquire(t){return{refCount:1,version:-1,labelMat2d:Object(n.b)(),tileMat3:Object(n.b)(),dvs:Object(n.b)()}}release(t){}}},1487:function(t,e,r){"use strict"
r.d(e,"a",(function(){return a}))
var s=r(20),i=r(891)
const n=2147483647
class a{constructor(t){this._head=t,this._cursor=t}static from(t,e=0,r=t.byteLength/o.BYTES_PER_RECORD-e){const s=new o(new Int32Array(t,e*o.BYTES_PER_RECORD,r*o.ELEMENTS_PER_RECORD))
return new a(s)}size(){let t=this._cursor,e=0
for(;t;)e+=t.size(),t=t._link
return e}get id(){return this._cursor.id}set id(t){this._cursor.id=t}get materialKey(){return this._cursor.materialKey}set materialKey(t){this._cursor.materialKey=t}get insertAfter(){return this._cursor.insertAfter}get indexFrom(){return this._cursor.indexFrom}set indexFrom(t){this._cursor.indexFrom=t}get indexCount(){return this._cursor.indexCount}set indexCount(t){this._cursor.indexCount=t}get vertexFrom(){return this._cursor.vertexFrom}set vertexFrom(t){this._cursor.vertexFrom=t}get vertexCount(){return this._cursor.vertexCount}set vertexCount(t){this._cursor.vertexCount=t}get sortKey(){return this._cursor.sortKey}set sortKey(t){this._cursor.sortKey=t}get index(){return this._cursor._indexStart+this._cursor._index}seekIndex(t){let e=t
for(this._cursor=this._head;this._cursor;){const t=this._cursor.size()
if(e<t)return this._cursor._index=e,!0
e-=t,this._cursor=this._cursor._link}return!1}forEach(t){const e=this.getCursor()
for(;e.next();)t(e)}link(t){if(!this._head)return void(this._head=t._head)
let e=this._head
for(;e._link;)e=e._link
e._link=t._head,e._link._indexStart=e._indexStart+e.size()}getCursor(){return this.copy()}lookup(t){for(this._cursor=this._head;this._cursor&&!this._cursor.lookup(t);){if(!this._cursor._link)return!1
this._cursor=this._cursor._link}return!!this._cursor}copy(){var t
const e=new a(null==(t=this._head)?void 0:t.copy())
if(!e._head)return e
let r=e._head,s=e._head._link
for(;s;)r._link=s.copy(),r=s,s=r._link
return e}next(){return!!this._cursor&&(!!this._cursor.next()||!!this._cursor._link&&(this._cursor=this._cursor._link,this.next()))}peekId(){var t
return null!=(t=this._cursor.peekId())?t:this._cursor._link.peekId()}delete(t){let e=this._head,r=null
for(;e;){if(e.delete(t))return e.isEmpty()&&(Object(s.k)(r)&&(r._link=e._link),e===this._head&&(this._head=e._link),e===this._cursor&&(this._cursor=e._link)),!0
r=e,e=e._link}return!1}}a.ELEMENTS_PER_RECORD=i.n,a.BYTES_PER_RECORD=a.ELEMENTS_PER_RECORD*Int32Array.BYTES_PER_ELEMENT
class o{constructor(t){this._link=null,this._index=-1,this._indexStart=0,this._deletedCount=0,this._offsets={instance:null},this._packedRecords=t}static from(t,e=0,r=t.byteLength/this.BYTES_PER_RECORD-e){return new o(new Int32Array(t,e*this.BYTES_PER_RECORD,r*this.ELEMENTS_PER_RECORD))}delete(t){const e=this._index,r=this.lookup(t)
if(r)for(this.id=n,++this._deletedCount;this.next()&&this.id===t;)this.id=n,++this._deletedCount
return this._index=e,r}isEmpty(){return this._deletedCount===this.size()}link(t){this._link?this._link.link(t):this._link=t}lookup(t){if(Object(s.j)(this._offsets.instance)){this._offsets.instance=new Map
const t=this.copy()
t._index=-1
let e=0
for(;t.next();)t.id!==e&&(this._offsets.instance.set(t.id,t._index),e=t.id)}if(!this._offsets.instance.has(t))return!1
const e=this._index
return this._index=this._offsets.instance.get(t),this.id!==n||(this._index=e,!1)}get id(){return this._packedRecords[this._index*o.ELEMENTS_PER_RECORD]}set id(t){this._packedRecords[this._index*o.ELEMENTS_PER_RECORD]=t}get materialKey(){return this._packedRecords[this._index*o.ELEMENTS_PER_RECORD+1]}set materialKey(t){this._packedRecords[this._index*o.ELEMENTS_PER_RECORD+1]=t}get insertAfter(){return this._packedRecords[this._index*o.ELEMENTS_PER_RECORD+2]}get indexFrom(){return this._packedRecords[this._index*o.ELEMENTS_PER_RECORD+3]}set indexFrom(t){this._packedRecords[this._index*o.ELEMENTS_PER_RECORD+3]=t}get indexCount(){return this._packedRecords[this._index*o.ELEMENTS_PER_RECORD+4]}set indexCount(t){this._packedRecords[this._index*o.ELEMENTS_PER_RECORD+4]=t}get vertexFrom(){return this._packedRecords[this._index*o.ELEMENTS_PER_RECORD+5]}set vertexFrom(t){this._packedRecords[this._index*o.ELEMENTS_PER_RECORD+5]=t}get vertexCount(){return this._packedRecords[this._index*o.ELEMENTS_PER_RECORD+6]}set vertexCount(t){this._packedRecords[this._index*o.ELEMENTS_PER_RECORD+6]=t}get sortKey(){return this._packedRecordsF32||(this._packedRecordsF32=new Float32Array(this._packedRecords.buffer)),this._packedRecordsF32[this._index*o.ELEMENTS_PER_RECORD+7]}set sortKey(t){this._packedRecordsF32||(this._packedRecordsF32=new Float32Array(this._packedRecords.buffer)),this._packedRecordsF32[this._index*o.ELEMENTS_PER_RECORD+7]=t}get index(){return this._index}size(){return this._packedRecords.length/o.ELEMENTS_PER_RECORD}next(){for(;++this._index<this.size()&&this.id===n;);return this._index<this.size()}peekId(){const t=(this._index+1)*o.ELEMENTS_PER_RECORD
return t>=this._packedRecords.length?0:this._packedRecords[t]}getCursor(){return this.copy()}copy(){const t=new o(this._packedRecords)
return t._indexStart=this._indexStart,t._link=this._link,t._index=this._index,t._offsets=this._offsets,t._deletedCount=this._deletedCount,t}}o.ELEMENTS_PER_RECORD=i.n,o.BYTES_PER_RECORD=o.ELEMENTS_PER_RECORD*Int32Array.BYTES_PER_ELEMENT},1499:function(t,e,r){"use strict"
r.d(e,"a",(function(){return C}))
var s=r(861),i=r(1338),n=r(354),a=r(77),o=r(177),h=r(20),u=r(891),c=r(1074),d=r(942),l=r(1310),f=r(877),_=r(1041),p=r(973)
const x=o.a.getLogger("esri.views.2d.engine.webgl.AttributeStoreView"),b=Object(l.b)(l.a,x)
class y{constructor(t,e,r){this._texture=null,this._lastTexture=null,this._fbos={},this.texelSize=4
const{buffer:s,pixelType:i,textureOnly:n}=t,a=Object(d.l)(i)
this.shared=r,this.pixelType=i,this.size=e,this.textureOnly=n,n||(this.data=new a(Object(h.t)(s))),this._resetRange()}destroy(){Object(h.b)(this._texture,t=>t.dispose())
for(const t in this._fbos)Object(h.b)(this._fbos[t],e=>{"0"===t&&e.detachColorTexture(),e.dispose()}),this._fbos[t]=null
this._texture=null}get _textureDesc(){return{target:f.A.TEXTURE_2D,wrapMode:f.B.CLAMP_TO_EDGE,pixelFormat:f.p.RGBA,dataType:this.pixelType,samplingMode:f.z.NEAREST,width:this.size,height:this.size}}setData(t,e,r){const s=Object(c.f)(t),i=Object(h.t)(this.data),n=s*this.texelSize+e
!i||n>=i.length||(i[n]=r,this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,s))}getData(t,e){if(Object(h.j)(this.data))return null
const r=Object(c.f)(t)*this.texelSize+e
return!this.data||r>=this.data.length?null:this.data[r]}getTexture(t){return Object(h.u)(this._texture,()=>this._initTexture(t))}getFBO(t,e=0){if(Object(h.j)(this._fbos[e])){const r={colorTarget:f.y.TEXTURE,depthStencilTarget:f.m.NONE},s=0===e?this.getTexture(t):this._textureDesc
this._fbos[e]=new _.a(t,r,s)}return this._fbos[e]}get locked(){return!(this.pixelType!==f.q.UNSIGNED_BYTE||!this.shared||this.textureOnly||!Object(a.a)("esri-atomics")||!this.data)&&1===Atomics.load(this.data,0)}get hasDirty(){const t=this.dirtyStart
return this.dirtyEnd>=t}updateTexture(t,e){if(!this.locked){try{const e=this.dirtyStart,r=this.dirtyEnd
if(!this.hasDirty)return
this._resetRange()
const s=Object(h.t)(this.data).buffer,i=this.getTexture(t),a=4,o=(e-e%this.size)/this.size,u=(r-r%this.size)/this.size,c=o,l=this.size,f=u,_=o*this.size*a,p=(l+f*this.size)*a-_,b=Object(d.l)(this.pixelType),y=new b(s,_*b.BYTES_PER_ELEMENT,p),g=this.size,m=f-c+1
if(m>this.size)return void x.error(new n.a("mapview-webgl","Out-of-bounds index when updating AttributeData"))
i.updateData(0,0,c,g,m,y)}catch(t){}e()}}update(t){const{data:e,start:r,end:s}=t
if(Object(h.k)(e)){const s=this.data,i=r*this.texelSize
for(let r=0;r<e.length;r++){const n=1<<r%this.texelSize
t.layout&n&&(s[i+r]=e[r])}}this.dirtyStart=Math.min(this.dirtyStart,r),this.dirtyEnd=Math.max(this.dirtyEnd,s)}resize(t,e){const r=this.size
if(this.size=e,this.textureOnly)return void(r!==this.size&&(this._lastTexture=this._texture,this._texture=null))
const s=Object(d.l)(this.pixelType)
this.destroy(),this.data=new s(Object(h.t)(t.buffer))}_resetRange(){this.dirtyStart=2147483647,this.dirtyEnd=0}_initTexture(t){const e=new p.a(t,this._textureDesc,Object(h.u)(this.data,void 0))
if(Object(h.k)(this._lastTexture)&&this._fbos[0]){const r=this._lastTexture.descriptor.width,s=this._lastTexture.descriptor.height,i=this._lastTexture.descriptor.dataType,n=this._lastTexture.descriptor.pixelFormat,a=this.getFBO(t),o=Object(d.m)(i),h=new(Object(d.l)(i))(new ArrayBuffer(r*s*o*this.texelSize)),u=t.getBoundFramebufferObject(),{x:c,y:l,width:f,height:_}=t.getViewport()
t.bindFramebuffer(a),a.readPixels(0,0,r,s,n,i,h),e.updateData(0,0,0,2*r,s/2,h),t.setViewport(c,l,f,_),t.bindFramebuffer(u)}return this.destroy(),this._texture=e,this._texture}}class g{constructor(t){this._onUpdate=t,this._initialized=!1,this._forceNextUpload=!1,this._locked=!1}initialize(t){const{blocks:e,shared:r,size:s}=t
if(this.shared=r,this.size=s,b("Initializing AttributeStoreView",t),Object(h.j)(this._data))this._data=Object(h.m)(e,t=>new y(t,s,r))
else for(let t=0;t<this._data.length;t++){const i=this._data[t],n=e[t]
Object(h.k)(n)&&(Object(h.j)(i)?this._data[t]=new y(n,s,r):i.resize(n,s))}this._initialized=!0}destroy(){Object(h.b)(this._data,t=>Object(h.m)(t,t=>t.destroy())),Object(h.b)(this._defaultTexture,t=>t.dispose())}isEmpty(){const t=this._data
return Object(h.j)(t)}isUpdating(){const t=Object(h.k)(this._pendingAttributeUpdate),e=t
return Object(a.a)("esri-2d-log-updating")&&console.log(`Updating AttributeStoreView ${e}\n  -> hasPendingUpdate ${t}`),e}getBlock(t){return Object(h.j)(this._data)?null:this._data[t]}setLabelMinZoom(t,e){this.setData(t,0,1,e)}getLabelMinZoom(t){return this.getData(t,0,1,255)}getFilterFlags(t){return this.getData(t,0,0,0)}getVVSize(t){return this.getData(t,u.e,0,0)}getData(t,e,r,s){if(!this._data)return 0
const i=Object(h.t)(this._data)[e]
if(Object(h.j)(i))return 0
const n=i.getData(t,r)
return Object(h.k)(n)?n:s}setData(t,e,r,s){const i=Object(h.t)(this._data)[e]
Object(h.t)(i).setData(t,r,s)}lockTextureUpload(){this._locked=!0}unlockTextureUpload(){this._locked=!1}forceTextureUpload(){this._forceNextUpload=!0}async requestUpdate(t){if(this._pendingAttributeUpdate)return void x.error(new n.a("mapview-webgl","Tried to update attribute data with a pending update"))
const e=Object(s.g)()
return b("AttributeStoreView Update Requested",t),this._pendingAttributeUpdate={data:t,resolver:e},e.promise}update(){if(this._initialized&&Object(h.k)(this._pendingAttributeUpdate)){const{data:t,resolver:e}=this._pendingAttributeUpdate,r=Object(h.t)(this._data)
for(let e=0;e<t.blocks.length;e++){const s=t.blocks[e],i=r[e]
Object(h.b)(i,t=>Object(h.b)(s,r=>{b("Updating block "+e,r),t.update(r)}))}this._pendingAttributeUpdate=null,e(),this._onUpdate()}}bindTextures(t,e=!0){this.update()
const r=this._getDefaultTexture(t)
if(!this._initialized)return t.bindTexture(r,u.B),void(e&&(t.bindTexture(r,u.C),t.bindTexture(r,u.D),t.bindTexture(r,u.E),t.bindTexture(r,u.H)))
const s=Object(h.t)(this._data)
this._locked&&!this._forceNextUpload||(Object(h.h)(s,e=>e.updateTexture(t,()=>this._onUpdate())),this._forceNextUpload=!1),t.bindTexture(Object(h.n)(s[u.c],r,e=>e.getTexture(t)),u.B),e&&(t.bindTexture(Object(h.n)(s[u.d],r,e=>e.getTexture(t)),u.H),t.bindTexture(Object(h.n)(s[u.a],r,e=>e.getTexture(t)),u.C),t.bindTexture(Object(h.n)(s[u.e],r,e=>e.getTexture(t)),u.D),t.bindTexture(Object(h.n)(s[u.b],r,e=>e.getTexture(t)),u.E))}_getDefaultTexture(t){if(Object(h.j)(this._defaultTexture)){const e={wrapMode:f.B.CLAMP_TO_EDGE,pixelFormat:f.p.RGBA,dataType:f.q.UNSIGNED_BYTE,samplingMode:f.z.NEAREST,width:1,height:1}
this._defaultTexture=new p.a(t,e,new Uint8Array(4))}return this._defaultTexture}}var m=r(1342),v=r(873),E=r(876),w=r(886),O=r(999),T=r(1266)
function R(t,e){const r=e.length
if(t<e[0].value||1===r)return e[0].size
for(let s=1;s<r;s++)if(t<e[s].value){const r=(t-e[s-1].value)/(e[s].value-e[s-1].value)
return e[s-1].size+r*(e[s].size-e[s-1].size)}return e[r-1].size}function j(t,e,r=0){if(Object(h.j)(e))return t[r+0]=0,t[r+1]=0,t[r+2]=0,void(t[r+3]=0)
const{r:s,g:i,b:n,a:a}=e
t[r+0]=s*a/255,t[r+1]=i*a/255,t[r+2]=n*a/255,t[r+3]=a}class S{constructor(){this.symbolLevels=[],this.vvColorValues=new Float32Array(8),this.vvColors=new Float32Array(32),this.vvOpacityValues=new Float32Array(8),this.vvOpacities=new Float32Array(8),this.vvSizeMinMaxValue=new Float32Array(4),this.ddColors=new Float32Array(32),this.ddBackgroundColor=new Float32Array(4),this.ddActiveDots=new Float32Array(8),this._vvMaterialParameters={vvSizeEnabled:!1,vvColorEnabled:!1,vvRotationEnabled:!1,vvRotationType:"geographic",vvOpacityEnabled:!1}}getSizeVVFieldStops(t){const e=this._vvSizeFieldStops
switch(e.type){case"static":return e
case"level-dependent":return Object(h.u)(e.levels[t],()=>{let r=1/0,s=0
for(const i in e.levels){const e=parseFloat(i),n=Math.abs(t-e)
n<r&&(r=n,s=e)}if(r===1/0)return{sizes:new Float32Array([0,0,0,0,0,0]),values:new Float32Array([0,0,0,0,0,0])}
const i=2**((t-s)/2),n=Object(h.t)(e.levels[s]),a=new Float32Array(n.values)
return a[2]*=i,a[3]*=i,{sizes:Object(h.t)(n.sizes),values:a}})}}get vvMaterialParameters(){return this._vvMaterialParameters}update(t){Object(h.k)(this._vvInfo)&&this._updateVisualVariables(this._vvInfo.vvRanges,t)}setInfo(t,e,r){this._updateEffects(r),this._vvInfo=e,"dot-density"===t.type&&this._updateDotDensityInfo(t)}getVariation(){return{ddDotBlending:this.ddDotBlending,outsideLabelsVisible:this.outsideLabelsVisible,oesTextureFloat:Object(T.a)().supportsTextureFloat}}getVariationHash(){return(this.ddDotBlending?1:0)|(this.outsideLabelsVisible?1:0)<<1}_updateEffects(t){Object(h.k)(t)?this.outsideLabelsVisible=t.excludedLabelsVisible:this.outsideLabelsVisible=!1}_updateVisualVariables(t,e){const r=this._vvMaterialParameters
if(r.vvOpacityEnabled=!1,r.vvSizeEnabled=!1,r.vvColorEnabled=!1,r.vvRotationEnabled=!1,!t)return
const s=t.size
if(s){if(r.vvSizeEnabled=!0,s.minMaxValue){const t=s.minMaxValue
let r,i
if(Object(d.r)(t.minSize)&&Object(d.r)(t.maxSize))if(Object(d.u)(t.minSize)&&Object(d.u)(t.maxSize))r=Object(E.h)(t.minSize),i=Object(E.h)(t.maxSize)
else{const s=e.scale
r=Object(E.h)(R(s,t.minSize.stops)),i=Object(E.h)(R(s,t.maxSize.stops))}this.vvSizeMinMaxValue.set([t.minDataValue,t.maxDataValue,r,i])}if(s.scaleStops&&(this.vvSizeScaleStopsValue=Object(E.h)(R(e.scale,s.scaleStops.stops))),s.unitValue){const t=Object(w.f)(e.spatialReference)/O.a[s.unitValue.unit]
this.vvSizeUnitValueToPixelsRatio=t/e.resolution}s.fieldStops&&(this._vvSizeFieldStops=s.fieldStops)}const i=t.color
i&&(r.vvColorEnabled=!0,this.vvColorValues.set(i.values),this.vvColors.set(i.colors))
const n=t.opacity
n&&(r.vvOpacityEnabled=!0,this.vvOpacityValues.set(n.values),this.vvOpacities.set(n.opacities))
const a=t.rotation
a&&(r.vvRotationEnabled=!0,r.vvRotationType=a.type)}_updateDotDensityInfo(t){const e=t.attributes
this.ddDotValue=t.dotValue,this.ddDotScale=t.referenceScale,this.ddDotSize=t.dotSize,this.ddDotBlending=t.dotBlendingEnabled,this.ddSeed=t.seed
for(let t=0;t<u.o;t++){const r=t>=e.length?new v.a([0,0,0,0]):e[t].color
j(this.ddColors,r,4*t)}for(let e=0;e<8;e++)this.ddActiveDots[e]=e<t.attributes.length?1:0
j(this.ddBackgroundColor,t.backgroundColor)}}class C extends m.a{constructor(t){super(t),this._rendererInfo=new S,this._materialItemsRequestQueue=new i.a,this.attributeView=new g(()=>this.onAttributeStoreUpdate())}destroy(){this.removeAllChildren(),this.children.forEach(t=>t.destroy()),this.attributeView.destroy(),this._materialItemsRequestQueue.clear()}setRendererInfo(t,e,r){this._rendererInfo.setInfo(t,e,r),this.requestRender()}async getMaterialItems(t,e){if(!t||0===t.length)return null
const r=Object(s.g)()
return this._materialItemsRequestQueue.push({items:t,abortOptions:e,resolver:r}),this.requestRender(),r.promise}doRender(t){if(t.context.capabilities.enable("textureFloat"),t.context.capabilities.enable("vao"),this._materialItemsRequestQueue.length>0){let e=this._materialItemsRequestQueue.pop()
for(;e;)this._processMaterialItemRequest(t,e),e=this._materialItemsRequestQueue.pop()}super.doRender(t)}renderChildren(t){for(const e of this.children)e.commit(t)
this._rendererInfo.update(t.state),super.renderChildren(t)}createRenderParams(t){const e=super.createRenderParams(t)
return e.rendererInfo=this._rendererInfo,e.attributeView=this.attributeView,e}onAttributeStoreUpdate(){}_processMaterialItemRequest(t,{items:e,abortOptions:r,resolver:s}){const{painter:i,pixelRatio:n}=t,a=e.map(t=>i.textureManager.rasterizeItem(t.symbol,n,t.glyphIds,r))
Promise.all(a).then(t=>{if(!this.stage)return void s.reject()
const r=t.map((t,r)=>({id:e[r].id,mosaicItem:t}))
s.resolve(r)},s.reject)}}},1667:function(t,e,r){"use strict"
r.d(e,"a",(function(){return i}))
var s=r(20)
class i{constructor(t){this.size=0,this._start=0,this.maxSize=t,this._buffer=new Array(t)}get entries(){return this._buffer}enqueue(t){if(this.size===this.maxSize){const e=this._buffer[this._start]
return this._buffer[this._start]=t,this._start=(this._start+1)%this.maxSize,e}return this._buffer[(this._start+this.size++)%this.maxSize]=t,null}dequeue(){if(0===this.size)return null
const t=this._buffer[this._start]
return this._buffer[this._start]=null,this.size--,this._start=(this._start+1)%this.maxSize,t}peek(){return 0===this.size?null:this._buffer[this._start]}find(t){if(0===this.size)return null
for(const e of this._buffer)if(Object(s.k)(e)&&t(e))return e
return null}clear(t){let e=this.dequeue()
for(;Object(s.k)(e);)t&&t(e),e=this.dequeue()}}},2191:function(t,e,r){"use strict"
r.d(e,"a",(function(){return h}))
var s=r(856),i=r(912),n=r(858),a=(r(353),r(77),r(859),r(857))
let o=class extends i.a{constructor(t){super(t),this.tiles=new Map}destroy(){this.tiles.clear(),this.layer=this.layerView=this.tileInfoView=this.tiles=null}get updating(){return this.isUpdating()}acquireTile(t){const e=this.createTile(t)
return e.once("isReady",()=>this.notifyChange("updating")),this.tiles.set(t.id,e),e}forceAttributeTextureUpload(){}forEachTile(t){this.tiles.forEach(t)}releaseTile(t){this.tiles.delete(t.key.id),this.disposeTile(t)}isUpdating(){let t=!0
return this.tiles.forEach(e=>{t=t&&e.isReady}),!t}setHighlight(){}invalidateLabels(){}requestUpdate(){this.layerView.requestUpdate()}}
Object(s.a)([Object(n.b)()],o.prototype,"layer",void 0),Object(s.a)([Object(n.b)()],o.prototype,"layerView",void 0),Object(s.a)([Object(n.b)()],o.prototype,"tileInfoView",void 0),Object(s.a)([Object(n.b)()],o.prototype,"updating",null),o=Object(s.a)([Object(a.a)("esri.views.2d.layers.features.tileRenderers.BaseTileRenderer")],o)
const h=o},2422:function(t,e,r){"use strict"
r.r(e),r.d(e,"default",(function(){return G}))
var s=r(856),i=r(77),n=r(861),a=(r(177),r(859),r(353),r(962),r(857)),o=r(884),h=r(1667),u=r(20),c=r(1147),d=r(1144),l=r(919),f=r(1042),_=r(908),p=r(942),x=r(1486)
class b{constructor(t){this._head=t,this._cursor=t}static from(t){const e=y.from(new Float32Array(t))
return new b(e)}get id(){return this._cursor.id}get baseZoom(){return this._cursor.baseZoom}get anchorX(){return this._cursor.anchorX}get anchorY(){return this._cursor.anchorY}get directionX(){return this._cursor.directionX}get directionY(){return this._cursor.directionY}get size(){return this._cursor.size}get materialKey(){return this._cursor.materialKey}get boundsCount(){return this._cursor.boundsCount}computedMinZoom(){return this._cursor.computedMinZoom()}setComputedMinZoom(t){return this._cursor.setComputedMinZoom(t)}boundsComputedAnchorX(t){return this._cursor.boundsComputedAnchorX(t)}boundsComputedAnchorY(t){return this._cursor.boundsComputedAnchorY(t)}setBoundsComputedAnchorX(t,e){return this._cursor.setBoundsComputedAnchorX(t,e)}setBoundsComputedAnchorY(t,e){return this._cursor.setBoundsComputedAnchorY(t,e)}boundsX(t){return this._cursor.boundsX(t)}boundsY(t){return this._cursor.boundsY(t)}boundsWidth(t){return this._cursor.boundsWidth(t)}boundsHeight(t){return this._cursor.boundsHeight(t)}link(t){if(Object(u.k)(t._head))return this._cursor.link(t._head)}getCursor(){return this.copy()}copy(){var t
const e=new b(null==(t=this._head)?void 0:t.copy())
if(!e._head)return e
let r=e._head,s=e._head._link
for(;s;)r._link=s.copy(),r=s,s=r._link
return e}peekId(){var t
return null!=(t=this._cursor.peekId())?t:this._cursor._link.peekId()}nextId(){const t=this.id
for(;t===this.id;)if(!this.next())return!1
return!0}save(){this._savedCursor=this._cursor,this._savedOffset=this._cursor._offset}restore(){this._cursor=this._savedCursor,this._cursor._offset=this._savedOffset}next(){if(!this._cursor)return!1
if(!this._cursor.next()){if(!this._cursor._link)return!1
this._cursor=this._cursor._link,this._cursor._offset=0}return!0}lookup(t){for(this._cursor=this._head;this._cursor&&!this._cursor.lookup(t);){if(!this._cursor._link)return!1
this._cursor=this._cursor._link}return!!this._cursor}delete(t){let e=this._head,r=null
for(;e;){if(e.delete(t))return e.isEmpty()&&Object(u.k)(r)&&(r._link=e._link),!0
r=e,e=e._link}return!1}}class y{constructor(t){this._offset=-1,this._link=null,this._count=0,this._deletedCount=0,this._offsets={instance:null},this._buffer=t}static from(t){return new y(new Float32Array(t))}isEmpty(){return this._deletedCount===this.count}get count(){return this._count||(this._count=this._computeCount()),this._count}get id(){return this._buffer[this._offset+0]}set id(t){this._buffer[this._offset+0]=t}get baseZoom(){return this._buffer[this._offset+1]}get anchorX(){return this._buffer[this._offset+2]}get anchorY(){return this._buffer[this._offset+3]}get directionX(){return this._buffer[this._offset+4]}get directionY(){return this._buffer[this._offset+5]}get size(){return this._buffer[this._offset+6]}get materialKey(){return this._buffer[this._offset+7]}computedMinZoom(){return this._buffer[this._offset+8]}setComputedMinZoom(t){this._buffer[this._offset+8]=t}get boundsCount(){return this._buffer[this._offset+9]}boundsComputedAnchorX(t){return this._buffer[this._offset+10+6*t+0]}boundsComputedAnchorY(t){return this._buffer[this._offset+10+6*t+1]}setBoundsComputedAnchorX(t,e){this._buffer[this._offset+10+6*t+0]=e}setBoundsComputedAnchorY(t,e){this._buffer[this._offset+10+6*t+1]=e}boundsX(t){return this._buffer[this._offset+10+6*t+2]}boundsY(t){return this._buffer[this._offset+10+6*t+3]}boundsWidth(t){return this._buffer[this._offset+10+6*t+4]}boundsHeight(t){return this._buffer[this._offset+10+6*t+5]}link(t){let e=this
for(;e._link;)e=e._link
e._link=t}getCursor(){return this.copy()}copy(){const t=new y(this._buffer)
return t._link=this._link,t._offset=this._offset,t._deletedCount=this._deletedCount,t._offsets=this._offsets,t._count=this._count,t}peekId(){const t=this._offset+10+6*this.boundsCount+0
return t>=this._buffer.length?0:this._buffer[t]}next(){let t=0
for(;this._offset<this._buffer.length&&t++<100&&(-1===this._offset?this._offset=0:this._offset+=10+6*this.boundsCount,4294967296===this.id););return 4294967296!==this.id&&this._offset<this._buffer.length}delete(t){const e=this._offset,r=this.lookup(t)
if(r)for(this.id=4294967295,++this._deletedCount;this.next()&&this.id===t;)this.id=4294967295,++this._deletedCount
return this._offset=e,r}lookup(t){const e=this._offset
if(Object(u.j)(this._offsets.instance)){this._offsets.instance=new Map
const t=this.copy()
t._offset=-1
let e=0
for(;t.next();)t.id!==e&&(this._offsets.instance.set(t.id,t._offset),e=t.id)}return!!this._offsets.instance.has(t)&&(this._offset=this._offsets.instance.get(t),4294967296!==this.id||(this._offset=e,!1))}_computeCount(){const t=this._offset
let e=0
for(this._offset=-1;this.next();)e++
return this._offset=t,e}}class g{constructor(t){if(!Array.isArray(t))return void(this.data=t)
this.data=t[0]
let e=this
for(let r=1;r<t.length;r++)e.next=new g([t[r]]),e=e.next}*values(){let t=this
for(;t;)yield t.data,t=t.next}forEach(t){let e=this
for(;e;)t(e.data),e=e.next}find(t){var e
return t(this.data)?this:null==(e=this.next)?void 0:e.find(t)}max(t,e=this){const r=t(this.data)>t(e.data)?this:e
return this.next?this.next.max(t,r):r}remove(t,e=null){return this===t?e?(e.next=this.next,e):this.next:this.next.remove(t,this)}get last(){return this.next?this.next.last:this}}class m{constructor(t){this._head=null,Object(u.j)(t)||(this._head=new g(t))}get head(){return this._head}maxAvailableSpace(){if(Object(u.j)(this._head))return 0
const t=this._head.max(t=>t.end-t.start)
return t.data.end-t.data.start}firstFit(t){if(Object(u.j)(this._head))return null
let e=null,r=this._head
for(;r;){const s=r.data.end-r.data.start
if(s===t)return e?e.next=r.next:this._head=r.next,r.data.start
if(s>t){const e=r.data.start
return r.data.start+=t,e}e=r,r=r.next}return null}free(t,e){const r=t+e
if(Object(u.j)(this._head)){const e=new g({start:t,end:r})
return void(this._head=e)}if(r<=this._head.data.start){if(r===this._head.data.start)return void(this._head.data.start-=e)
const s=new g({start:t,end:r})
return s.next=this._head,void(this._head=s)}let s=this._head,i=s.next
for(;i;){if(i.data.start>=r){if(s.data.end===t){if(s.data.end+=e,s.data.end===i.data.start){const t=i.data.end-i.data.start
return s.data.end+=t,void(s.next=i.next)}return}if(i.data.start===r)return void(i.data.start-=e)
const n=new g({start:t,end:r})
return n.next=s.next,void(s.next=n)}s=i,i=i.next}if(t===s.data.end)return void(s.data.end+=e)
const n=new g({start:t,end:r})
s.next=n}}class v{constructor(t,e,r,s,i){this.target=t,this.geometryType=e,this.materialKey=r,this.indexFrom=s,this.indexCount=i}get indexEnd(){return this.indexFrom+this.indexCount}extend(t){this.indexCount+=t}}class E{constructor(t,e){this.geometryType=0,this._target=t,this.geometryType=e}static from(t,e,r,s){const i=new E(t,e)
if(Object(u.k)(s))for(const t of s)r.seekIndex(t),i.addRecord(r)
else for(;r.next();)i.addRecord(r)
return i}addRecord(t){const e=this._target,r=this.geometryType,s=t.materialKey
let i=t.indexFrom,n=t.indexCount
const a=t.vertexFrom,o=t.vertexCount
if(n||(i=a,n=o),Object(u.j)(this._head)){const t=new v(e,r,s,i,n)
return void(this._head=new g(t))}let h=null,c=this._head
for(;c;){if(i<c.data.indexFrom)return this._insert(s,i,n,h,c)
h=c,c=c.next}this._insert(s,i,n,h,null)}forEach(t){Object(u.k)(this._head)&&this._head.forEach(t)}*infos(){if(Object(u.k)(this._head))for(const t of this._head.values())yield t}_insert(t,e,r,s,i){if(Object(u.j)(s)&&Object(u.j)(i)){const s=new v(this._target,this.geometryType,t,e,r)
this._head=new g(s)}return Object(u.j)(s)&&Object(u.k)(i)?this._insertAtHead(t,e,r,i):Object(u.k)(s)&&Object(u.j)(i)?this._insertAtEnd(t,e,r,s):Object(u.k)(s)&&Object(u.k)(i)?this._insertAtMiddle(t,e,r,s,i):void 0}_insertAtHead(t,e,r,s){const i=e+r
if(t===s.data.materialKey&&i===s.data.indexFrom)s.data.indexFrom=e,s.data.indexCount+=r
else{const i=new v(this._target,this.geometryType,t,e,r)
this._head=new g(i),this._head.next=s}}_insertAtEnd(t,e,r,s){if(s.data.materialKey===t&&s.data.indexEnd===e)s.data.indexCount+=r
else{const i=new v(this._target,this.geometryType,t,e,r),n=new g(i)
s.next=n}}_insertAtMiddle(t,e,r,s,i){const n=e+r
if(s.data.materialKey===t&&s.data.indexEnd===e)s.data.indexCount+=r,s.data.materialKey===i.data.materialKey&&s.data.indexEnd===i.data.indexFrom&&(s.data.indexCount+=i.data.indexCount,s.next=i.next)
else if(t===i.data.materialKey&&n===i.data.indexFrom)i.data.indexFrom=e,i.data.indexCount+=r
else{const n=new v(this._target,this.geometryType,t,e,r),a=new g(n)
s.next=a,a.next=i}}}const w=Object(i.a)("esri-2d-log-allocations")
class O{constructor(t){this._array=t}get array(){return this._array}get length(){return this._array.length}static create(t){const e=R.acquire(t)
return new O(e)}expand(t){const e=R.acquire(t)
e.set(this._array),R.release(this._array),this._array=e}destroy(){R.release(this._array)}set(t,e){this._array.set(t._array,e)}slice(){const t=R.acquire(this._array.byteLength)
return t.set(this._array),new O(t)}}class T{constructor(){this._data=new ArrayBuffer(T.BYTE_LENGTH),this._freeList=new m({start:0,end:this._data.byteLength})}static get BYTE_LENGTH(){return 64e6}get buffer(){return this._data}allocate(t){const e=this._freeList.firstFit(t)
return Object(u.j)(e)?null:new Uint32Array(this._data,e,t/Uint32Array.BYTES_PER_ELEMENT)}free(t){this._freeList.free(t.byteOffset,t.byteLength)}}const R=new class{constructor(){this._bytesAllocated=0,this._pages=[],this._pagesByBuffer=new Map,this._addPage()}get _bytesTotal(){return this._pages.length*T.BYTE_LENGTH}acquire(t){if(this._bytesAllocated+=t,w&&console.log(`Allocating ${t}, (${this._bytesAllocated} / ${this._bytesTotal})`),t>T.BYTE_LENGTH)return new Uint32Array(t/Uint32Array.BYTES_PER_ELEMENT)
for(const e of this._pages){const r=e.allocate(t)
if(Object(u.k)(r))return r}return Object(u.v)(this._addPage().allocate(t),"Expected to allocate page")}release(t){this._bytesAllocated-=t.byteLength,w&&console.log(`Freeing ${t.byteLength}, (${this._bytesAllocated} / ${this._bytesTotal})`)
const e=this._pagesByBuffer.get(t.buffer)
e&&e.free(t)}_addPage(){const t=new T
return this._pages.push(t),this._pagesByBuffer.set(t.buffer,t),t}}
var j=r(985),S=r(877)
class C{constructor(t,e,r){const s=O.create(e*r*Uint32Array.BYTES_PER_ELEMENT)
this.size=e,this.strideInt=r,this.bufferType=t,this.dirty={start:1/0,end:0},this._gpu=null,this._cpu=s,this.clear()}get elementSize(){return this._cpu.length/this.strideInt}get invalidated(){return this.bufferSize&&!this._gpu}invalidate(){this._invalidateTriangleBuffer(),Object(u.b)(this._gpu,t=>t.dispose()),this._gpu=null}_invalidateTriangleBuffer(){Object(u.b)(this._gpuComputeTriangles,t=>t.dispose()),this._gpuComputeTriangles=null}destroy(){Object(u.b)(this._gpu,t=>t.dispose()),Object(u.b)(this._gpuComputeTriangles,t=>t.dispose()),Object(u.b)(this._cpu,t=>t.destroy()),Object(u.b)(this._cpu2,t=>t.destroy())}clear(){this.dirty.start=1/0,this.dirty.end=0,this.freeList=new m({start:0,end:this._cpu.length/this.strideInt}),this.fillPointer=0}ensure(t){if(!(this.maxAvailableSpace()>=t)&&t*this.strideInt>this._cpu.length-this.fillPointer){this.invalidate()
const e=this._cpu.length/this.strideInt,r=Math.round(1.25*(e+t)),s=r*this.strideInt
this._cpu.expand(s*Uint32Array.BYTES_PER_ELEMENT),this.freeList.free(e,r-e)}}set(t,e){this._cpu.array[t]!==e&&(this._cpu.array[t]=e,this.dirty.start=Math.min(t,this.dirty.start),this.dirty.end=Math.max(t,this.dirty.end))}getGPUBuffer(t,e=!1){if(!this.bufferSize)return null
if(e){if("index"!==this.bufferType)throw new Error("Tired to get triangle buffer, but target is not an index buffer")
return Object(u.j)(this._gpuComputeTriangles)&&(this._gpuComputeTriangles=this._createComputeBuffer(t)),this._gpuComputeTriangles}return Object(u.j)(this._gpu)&&(this._gpu=this._createBuffer(t)),this._gpu}getCPUBuffer(){if(!this._cpu2){const t=this._cpu.slice()
this._cpu2=t}return this._cpu2.length!==this._cpu.length&&this._cpu2.expand(this._cpu.length*this._cpu.array.BYTES_PER_ELEMENT),this._cpu2.set(this._cpu),this._cpu2}get bufferSize(){return this._cpu.length/this.strideInt}maxAvailableSpace(){return this.freeList.maxAvailableSpace()}insert(t,e,r,s){const i=r*this.strideInt
if(!i)return 0
const n=e*this.strideInt*Uint32Array.BYTES_PER_ELEMENT,a=new Uint32Array(t,n,i),o=Object(u.v)(this.freeList.firstFit(r),"First fit region must be defined")*this.strideInt,h=i,c=o/this.strideInt-e
if(0!==s)for(let t=0;t<a.length;t++)a[t]+=s
return this._cpu.array.set(a,o),this.dirty.start=Math.min(this.dirty.start,o),this.dirty.end=Math.max(this.dirty.end,o+h),this.fillPointer=Math.max(this.fillPointer,o+h),c}free(t,e,r){const s=t*this.strideInt,i=(t+e)*this.strideInt
if(!0===r)for(let r=t;r!==t+e;r++)this._cpu.array[r*this.strideInt]=2147450879
this.dirty.start=Math.min(this.dirty.start,s),this.dirty.end=Math.max(this.dirty.end,i),this.freeList.free(t,e)}upload(){if(this.dirty.end){if(this._invalidateTriangleBuffer(),Object(u.j)(this._gpu))return this.dirty.start=1/0,void(this.dirty.end=0)
this._gpu.setSubDataFromView(this._cpu.array,this.dirty.start,this.dirty.start,this.dirty.end),this.dirty.start=1/0,this.dirty.end=0}}_createBuffer(t){const e=S.D.DYNAMIC_DRAW
return"index"===this.bufferType?j.a.createIndex(t,e,this._cpu.array):j.a.createVertex(t,e,this._cpu.array)}_createComputeBuffer(t){const e=S.D.DYNAMIC_DRAW,r=new Uint32Array(this.fillPointer/3)
for(let t=0;t<this.fillPointer;t+=3)r[t/3]=this._cpu.array[t]
return j.a.createIndex(t,e,r)}}var k=r(1487),A=r(998)
class M{constructor(t,e){this._vaos=new Map,this._indicesInvalid=!1,this.geometryType=t}destroy(){for(const[t,e]of this._vaos)Object(u.k)(e)&&e.dispose(!1)
this._indexBuffer=Object(u.d)(this._indexBuffer),this._vertexBuffer=Object(u.d)(this._vertexBuffer)}insert(t,e,r){if(!t.records.byteLength)return
const s=t.stride
if(this._vertexBuffer&&this._indexBuffer){const r=t.indices.byteLength/4,i=t.vertices.byteLength/s
this._indexBuffer.ensure(r),this._vertexBuffer.ensure(i)
const{vertices:n,indices:a}=t,o=k.a.from(t.records),h=this._vertexBuffer.insert(n,0,n.byteLength/s,0),c=this._indexBuffer.insert(a,0,a.byteLength/4,h)
if(o.forEach(t=>{t.indexFrom+=c,t.vertexFrom+=h}),Object(u.v)(this._records,"Expected records to be defined").link(o),e)this._indicesInvalid=!0
else if(this._displayList){const t=o.getCursor()
for(;t.next();)this._displayList.addRecord(t)}}else{const r=t.indices.byteLength/4,i=t.vertices.byteLength/s,n=s/Uint32Array.BYTES_PER_ELEMENT
this._records=k.a.from(t.records),this._indexBuffer=new C("index",r,1),this._vertexBuffer=new C("vertex",i,n),this._indexBuffer.insert(t.indices,0,t.indices.byteLength/4,0),this._vertexBuffer.insert(t.vertices,0,t.vertices.byteLength/s,0),e&&(this._indicesInvalid=!0)}}remove(t){if(!Object(u.j)(this._records))for(const e of t){const t=this._records.getCursor()
if(!t.lookup(e))continue
const r=t.indexFrom,s=t.vertexFrom
let i=t.indexCount,n=t.vertexCount
for(;t.next()&&t.id===e;)i+=t.indexCount,n+=t.vertexCount
this._indexBuffer.free(r,i),this._vertexBuffer.free(s,n,!0),this._records.delete(e)}}getVAO(t,e,r,s){if(!this._vertexBuffer||!this._indexBuffer||Object(u.j)(this._records)||!this._vertexBuffer.bufferSize)return null
const i=s?1:0
let n=this._vaos.get(i);(this._vertexBuffer.invalidated||this._indexBuffer.invalidated)&&(Object(u.b)(n,t=>t.dispose(!1)),n=null),this._vertexBuffer.upload(),this._indexBuffer.upload()
const a=this._indexBuffer.getGPUBuffer(t,1===i),o=this._vertexBuffer.getGPUBuffer(t)
return n||(n=new A.a(t,r,e,{geometry:o},a),this._vaos.set(i,n)),n}forEachCommand(t){if(!Object(u.j)(this._records)){if(this._sortIndices(this._records),!this._displayList){const t=this._cursorIndexOrder
this._displayList=E.from(this,this.geometryType,this._records.getCursor(),t)}this._displayList.forEach(t)}}_sortIndices(t){const e=!!this._indexBuffer.bufferSize
if(!this._indicesInvalid)return
this._indicesInvalid=!1
let r=0
const s=t.getCursor(),i=[],n=[],a=[]
for(;s.next();)n.push(s.index),a.push(s.sortKey),i.push(s.id)
n.sort((t,e)=>{const r=a[e],s=a[t]
return s===r?i[e]-i[t]:r-s})
const o=t.getCursor(),h=e?this._indexBuffer.getCPUBuffer():this._vertexBuffer.getCPUBuffer()
for(const t of n){if(!o.seekIndex(t))throw new Error("Expected to find index")
if(e){const{indexFrom:t,indexCount:e}=o
o.indexFrom=r
for(let s=0;s<e;s++)this._indexBuffer.set(r++,h.array[t+s])}else{const{vertexFrom:t,vertexCount:e}=o,s=this._vertexBuffer.strideInt,i=t*s,n=i+e*s
o.vertexFrom=r/s
for(let t=i;t<n;t++)this._vertexBuffer.set(r++,h.array[t])}}this._cursorIndexOrder=n,this._displayList=null}}let B=0
class I extends x.a{constructor(t,e,r,s,i){super(t,e,r),this.instanceId=B++,this.patchCount=0,this._renderState={current:{geometry:new Map,metrics:null},next:null,swap:!1,swapFrames:0,locked:!1},this._patches=new h.a(100),this._bufferPatches=new h.a(100),this._lastCommitTime=0,this._lastMessageWasClear=!1,this.transforms.labelMat2d=Object(d.a)(),this._store=s,this._requestLabelUpdate=i}destroy(){super.destroy(),this._renderState.current.geometry.forEach(t=>t.destroy())}get labelMetrics(){return this._renderState.current.metrics}get hasData(){return!!this._renderState.current.geometry.size}getGeometry(t){return this._renderState.current.geometry.get(t)}setTransform(t,e){super.setTransform(t,e)
const r=this.transforms.labelMat2d,s=t.getScreenTransform(r,e),i=Object(f.a)()
Object(l.t)(i,[this.x,this.y],s),Object(c.a)(r,i),Object(c.f)(r,t.viewMat2d,r)}patch(t,e){if(this.patchCount++,t.clear&&this._lastMessageWasClear)return
this._lastMessageWasClear=t.clear,t.clear&&this._patches.size>=50&&this._dropPatches()
const r=t,s=r.addOrUpdate&&this.key.id!==r.addOrUpdate.tileKeyOrigin
e&&s?this._bufferPatches.enqueue(r):(r.sort=r.sort&&!e,this._patches.enqueue(r)),this.requestRender()}commit(t){if(this._lastCommitTime!==t.time){this._lastCommitTime=t.time
for(let t=0;t<4;t++)this._updateMesh(),this.isReady&&this._updateBufferMesh()
this._renderState.swap&&(this._swapRenderStates(),this.requestRender())}}lock(){this._renderState.locked=!0}unlock(){this._renderState.locked=!1,this._flushUpdates(),this._swap()}_swapRenderStates(){if(this._renderState.next){if(this._renderState.locked)return this._renderState.swap=!0,void this.requestRender()
if(this._renderState.swap=!0,0===this._renderState.swapFrames)return this._renderState.swapFrames=8,void this.requestRender()
1==this._renderState.swapFrames--?this._swap():this.requestRender()}}_swap(){this._renderState.swap&&(this._renderState.swap=!1,Object(u.k)(this._renderState.next)&&(this._renderState.current.geometry.forEach(t=>t.destroy()),this._renderState.current=this._renderState.next,this._renderState.next=null,this._requestLabelUpdate()))}_flushUpdates(){let t=this._patches.maxSize
for(;this._patches.size&&t--;)this._updateMesh(),this._swap()}_updateBufferMesh(){const t=this._bufferPatches.peek()
if(!Object(u.k)(t)||!t.clear||null===this._renderState.next)for(;this._bufferPatches.size;){const t=this._bufferPatches.dequeue()
Object(u.k)(t)&&this._patchBuffer(t)}}_updateMesh(){const t=this._patches.peek()
if(Object(u.k)(t)&&t.clear&&null!==this._renderState.next)return
const e=this._patches.dequeue()
if(Object(u.k)(e)){if(!0===e.clear){if(!this.isReady)return
return this._renderState.next,void(this._renderState.next={geometry:new Map,metrics:null})}this.requestRender(),this._patch(e),e.end&&(this.ready(),this._swapRenderStates())}}_patch(t){Object(p.h)(e=>{this._remove(e,t.remove),this._insert(e,t,!1)})}_patchBuffer(t){Object(p.h)(e=>{this._insert(e,t,!0)})}_insert(t,e,r){try{var s
const i=Object(u.u)(this._renderState.next,this._renderState.current),n=null==(s=e.addOrUpdate)?void 0:s.data[t],a=i.geometry
if(Object(u.j)(n))return
a.has(t)||a.set(t,new M(t,this.stage)),a.get(t).insert(n,e.sort,r),t===_.d.LABEL&&this._insertLabelMetrics(e.type,n.metrics,e.clear)}catch(t){}}_insertLabelMetrics(t,e,r){const s=Object(u.u)(this._renderState.next,this._renderState.current)
if(Object(u.j)(e))return
const i=b.from(e)
if(Object(u.j)(s.metrics))s.metrics=i
else{if("update"===t){const t=i.getCursor()
for(;t.next();)s.metrics.delete(t.id)}s.metrics.link(i)}}_remove(t,e){const r=Object(u.u)(this._renderState.next,this._renderState.current).geometry.get(t)
e&&e.length&&r&&(r.remove(e),this._removeLabelMetrics(e))}_removeLabelMetrics(t){const{metrics:e}=Object(u.u)(this._renderState.next,this._renderState.current)
if(!Object(u.j)(e)&&t.length)for(const r of t)for(;e.delete(r););}_dropPatches(){const t=new Array
let e=!1
for(;this._patches.size;){const r=this._patches.dequeue()
if(Object(u.j)(r))break
if(r.clear){if(e)break
e=!0}t.push(r)}this._patches.clear(),t.forEach(t=>this._patches.enqueue(t))}}var L=r(1464),V=r(2191),z=r(1446),U=r(1344),P=r(1499)
const F=Object(i.a)("featurelayer-order-by-server-enabled")
class D extends P.a{constructor(t,e,r,s){super(t),this._pointToCallbacks=[],this._layer=r,this._layerView=e,this._onUpdate=s}renderChildren(t){this.attributeView.update(),this.hasAnimation&&t.painter.effects.integrate.draw(t,t.attributeView),super.renderChildren(t)}hasEmptyAttributeView(){return this.attributeView.isEmpty()}isUpdating(){return this.attributeView.isUpdating()}hitTest(t){const e=Object(n.g)()
return this._pointToCallbacks.push({point:t,resolver:e}),this.requestRender(),e.promise}onTileData(t,e){const r=F&&"orderBy"in this._layer&&this._layer.orderBy,s=(null==r?void 0:r.length)&&!r[0].valueExpression&&r[0].field,i=r&&this._layerView.orderByFields===s
t.patch(e,i),this.contains(t)||this.addChild(t),this.requestRender()}onTileError(t){this.contains(t)||this.addChild(t)}updateTransitionProperties(t,e){super.updateTransitionProperties(t,e),this._layerView.featureEffectView.transitionStep(t,e),this._layerView.featureEffectView.transitioning&&this.requestRender()}doRender(t){const{minScale:e,maxScale:r}=this._layer,s=t.state.scale
s<=(e||1/0)&&s>=r&&super.doRender(t)}onAttributeStoreUpdate(){this.hasLabels&&this._layerView.view.labelManager.requestUpdate(),this._onUpdate()}get hasAnimation(){return this.hasLabels}setStencilReference(t){if(t.rendererInfo.ddDotSize>1){const t=1
for(const e of this.children)e.stencilRef=e.key.level+t}else super.setStencilReference(t)}get hasLabels(){if("sublayers"in this._layer)return this._layer.sublayers.some(t=>t.labelingInfo&&t.labelingInfo.length&&t.labelsVisible)
const t=this._layer.featureReduction,e=t&&"cluster"===t.type&&t.labelsVisible&&t.labelingInfo&&t.labelingInfo.length
return this._layer.labelingInfo&&this._layer.labelingInfo.length&&this._layer.labelsVisible||!!e}prepareRenderPasses(t){const e=t.registerRenderPass({name:"label",brushes:[U.a.label],target:()=>this.hasLabels?this.children:null,drawPhase:_.c.LABEL|_.c.LABEL_ALPHA}),r=t.registerRenderPass({name:"geometry",brushes:[U.a.fill,U.a.line,U.a.marker,U.a.text],target:()=>this.children,enableDefaultDraw:()=>!this._layerView.featureEffectView.hasEffects,effects:[{apply:t.effects.outsideEffect,enable:()=>this._layerView.featureEffectView.hasEffects,args:()=>this._layerView.featureEffectView.excludedEffects},{apply:t.effects.insideEffect,enable:()=>this._layerView.featureEffectView.hasEffects,args:()=>this._layerView.featureEffectView.includedEffects},{apply:t.effects.hittest,enable:()=>!!this._pointToCallbacks.length,args:()=>this._pointToCallbacks}]}),s=t.registerRenderPass({name:"highlight",brushes:[U.a.fill,U.a.line,U.a.marker,U.a.text],target:()=>this.children,drawPhase:_.c.HIGHLIGHT,enableDefaultDraw:()=>!1,effects:[{apply:t.effects.highlight,enable:()=>!!this._layerView.hasHighlight()}]})
return[...super.prepareRenderPasses(t),r,s,e]}}let N=class extends V.a{install(t){const e=new D(this.tileInfoView,this.layerView,this.layer,()=>this.notifyChange("updating"))
this.featuresView=e,t.addChild(e)}uninstall(t){t.removeChild(this.featuresView),this.featuresView.destroy(),this.featuresView=null}fetchResource(t,e){const{url:r}=t,s=this.featuresView.stage
try{return s.resourceManager.fetchResource(r,{signal:e.signal})}catch(t){return Object(n.m)(t)?Promise.resolve({width:0,height:0}):Promise.reject(t)}}isUpdating(){var t
const e=super.isUpdating(),r=!this.featuresView||this.featuresView.isUpdating(),s=null==(t=this.featuresView)?void 0:t.hasEmptyAttributeView(),n=e||r||e&&s
return Object(i.a)("esri-2d-log-updating")&&console.log(`Updating SymbolTileRenderer ${n}\n  -> updatingTiles ${e}\n  -> hasFeaturesView ${!!this.featuresView}\n  -> updatingFeaturesView ${r}`),n}hitTest(t){return this.featuresView.hitTest(t)}supportsRenderer(t){return null!=t&&-1!==["simple","class-breaks","unique-value","dot-density","dictionary"].indexOf(t.type)}onConfigUpdate(t){let e=null
if("visualVariables"in t){const r=(Object(L.a)(t).visualVariables||[]).map(t=>{const e=t.clone()
return"normalizationField"in t&&(e.normalizationField=null),t.valueExpression&&"$view.scale"!==t.valueExpression&&(e.valueExpression=null,e.field="nop"),e})
e=Object(z.a)(r)}this.featuresView.setRendererInfo(t,e,this.layerView.featureEffect)}onTileData(t){const e=this.tiles.get(t.tileKey)
e&&t.data&&this.featuresView.onTileData(e,t.data),this.layerView.view.labelManager.requestUpdate()}onTileError(t){const e=this.tiles.get(t.tileKey)
e&&this.featuresView.onTileError(e)}forceAttributeTextureUpload(){this.featuresView.attributeView.forceTextureUpload()}lockGPUUploads(){this.featuresView.attributeView.lockTextureUpload(),this.tiles.forEach(t=>t.lock())}unlockGPUUploads(){this.featuresView.attributeView.unlockTextureUpload(),this.tiles.forEach(t=>t.unlock())}async getMaterialItems(t){return this.featuresView.getMaterialItems(t)}invalidateLabels(){this.featuresView.hasLabels&&this.layerView.view.labelManager.requestUpdate()}createTile(t){const e=this.tileInfoView.getTileBounds(Object(o.m)(),t)
return new I(t,e[0],e[3],this.featuresView.attributeView,()=>this.layerView.view.labelManager.requestUpdate())}disposeTile(t){this.featuresView.removeChild(t),t.destroy(),this.layerView.view.labelManager.requestUpdate()}}
N=Object(s.a)([Object(a.a)("esri.views.2d.layers.features.tileRenderers.SymbolTileRenderer")],N)
const G=N}}])
