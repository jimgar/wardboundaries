(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[55,81,429],{1071:function(e,t,n){"use strict"
n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return j})),n.d(t,"d",(function(){return x})),n.d(t,"e",(function(){return _})),n.d(t,"f",(function(){return b})),n.d(t,"g",(function(){return E})),n.d(t,"h",(function(){return m})),n.d(t,"i",(function(){return v})),n.d(t,"j",(function(){return y})),n.d(t,"k",(function(){return O}))
var r=n(1130),i=(n(77),n(20)),a=n(57),s=n(1049),o=n(659),c=n(927),l=n(884),u=n(1110),h=n(888),d=n(941)
n(1352)
class p{constructor(e,t,n){this.uid=e,this.geometry=t,this.attributes=n,this.visible=!0,this.objectId=null,this.centroid=null}}function m(e){return Object(i.k)(e.geometry)}class f{constructor(){this.exceededTransferLimit=!1,this.features=[],this.fields=[],this.hasM=!1,this.hasZ=!1,this.geometryType=null,this.objectIdFieldName=null,this.globalIdFieldName=null,this.geometryProperties=null,this.geohashFieldName=null,this.spatialReference=null,this.transform=null}}function b(e){const t=h.a.fromJSON(e.geometryType),n=o.default.fromJSON(e.spatialReference),r=e.transform,a=e.features.map(a=>{const o=function(e,t,n,r){return{uid:Object(s.b)(),objectId:r&&e.attributes?e.attributes[r]:null,attributes:e.attributes,geometry:g(e.geometry,t,n),visible:!0}}(a,t,n,e.objectIdFieldName),c=o.geometry
if(Object(i.k)(c)&&r)switch(c.type){case"point":o.geometry=Object(u.e)(r,c,c,c.hasZ,c.hasM)
break
case"multipoint":o.geometry=Object(u.d)(r,c,c,c.hasZ,c.hasM)
break
case"polygon":o.geometry=Object(u.f)(r,c,c,c.hasZ,c.hasM)
break
case"polyline":o.geometry=Object(u.g)(r,c,c,c.hasZ,c.hasM)
break
case"extent":case"mesh":o.geometry=c}return o})
return{geometryType:t,features:a,spatialReference:n,fields:e.fields?e.fields.map(e=>d.a.fromJSON(e)):null,objectIdFieldName:e.objectIdFieldName,globalIdFieldName:e.globalIdFieldName,geohashFieldName:e.geohashFieldName,geometryProperties:e.geometryProperties,hasZ:e.hasZ,hasM:e.hasM,exceededTransferLimit:e.exceededTransferLimit,transform:null}}function g(e,t,n){if(Object(i.j)(e))return null
switch(t){case"point":{const t=e
return{x:t.x,y:t.y,z:t.z,m:t.m,hasZ:null!=t.z,hasM:null!=t.m,type:"point",spatialReference:n}}case"polyline":{const t=e
return{paths:t.paths,hasZ:!!t.hasZ,hasM:!!t.hasM,type:"polyline",spatialReference:n}}case"polygon":{const t=e
return{rings:t.rings,hasZ:!!t.hasZ,hasM:!!t.hasM,type:"polygon",spatialReference:n}}case"multipoint":{const t=e
return{points:t.points,hasZ:!!t.hasZ,hasM:!!t.hasM,type:"multipoint",spatialReference:n}}}}function y(e,t,n,r){return{x:e,y:t,z:n,hasZ:null!=n,hasM:!1,spatialReference:r,type:"point"}}function _(e){let t=32
return t+=Object(r.b)(e.attributes),t+=3,t+=8+function(e){if(Object(i.j)(e))return 0
let t=32
switch(e.type){case"point":t+=42
break
case"polyline":case"polygon":{let n=0
const r=2+(e.hasZ?1:0)+(e.hasM?1:0),i="polyline"===e.type?e.paths:e.rings
for(const e of i)n+=e.length
t+=8*n*r+64,t+=128*n,t+=34,t+=32*(i.length+1)
break}case"multipoint":{const n=2+(e.hasZ?1:0)+(e.hasM?1:0),r=e.points.length
t+=8*r*n+64,t+=128*r,t+=34,t+=32
break}case"extent":t+=98,e.hasM&&(t+=32),e.hasZ&&(t+=32)
break
case"mesh":t+=Object(a.a)(e.vertexAttributes.position),t+=Object(a.a)(e.vertexAttributes.normal),t+=Object(a.a)(e.vertexAttributes.uv),t+=Object(a.a)(e.vertexAttributes.tangent)}return t}(e.geometry),t}function O(e){if(Object(i.j)(e))return 0
switch(e.type){case"point":return 1
case"polyline":{let t=0
for(const n of e.paths)t+=n.length
return t}case"polygon":{let t=0
for(const n of e.rings)t+=n.length
return t}case"multipoint":return e.points.length
case"extent":return 2
case"mesh":{const t=e.vertexAttributes&&e.vertexAttributes.position
return t?t.length/3:0}default:return}}function v(e){if(Object(i.j)(e))return!1
switch(e.type){case"extent":case"point":return!0
case"polyline":for(const t of e.paths)if(t.length>0)return!0
return!1
case"polygon":for(const t of e.rings)if(t.length>0)return!0
return!1
case"multipoint":return e.points.length>0
case"mesh":return!e.loaded||e.vertexAttributes.position.length>0}}function j(e,t){switch(Object(c.k)(t),"mesh"===e.type&&(e=e.extent),e.type){case"point":t[0]=t[3]=e.x,t[1]=t[4]=e.y,e.hasZ&&(t[2]=t[5]=e.z)
break
case"polyline":for(let n=0;n<e.paths.length;n++)Object(c.o)(t,e.paths[n],e.hasZ)
break
case"polygon":for(let n=0;n<e.rings.length;n++)Object(c.o)(t,e.rings[n],e.hasZ)
break
case"multipoint":Object(c.o)(t,e.points,e.hasZ)
break
case"extent":t[0]=e.xmin,t[1]=e.ymin,t[3]=e.xmax,t[4]=e.ymax,null!=e.zmin&&(t[2]=e.zmin),null!=e.zmax&&(t[5]=e.zmax)}}function x(e,t){switch(Object(l.o)(t),"mesh"===e.type&&(e=e.extent),e.type){case"point":t[0]=t[2]=e.x,t[1]=t[3]=e.y
break
case"polyline":for(let n=0;n<e.paths.length;n++)Object(l.s)(t,e.paths[n])
break
case"polygon":for(let n=0;n<e.rings.length;n++)Object(l.s)(t,e.rings[n])
break
case"multipoint":Object(l.s)(t,e.points)
break
case"extent":t[0]=e.xmin,t[1]=e.ymin,t[2]=e.xmax,t[3]=e.ymax}}function E(e,t){return null!=e.objectId?e.objectId:e.attributes&&t?e.attributes[t]:null}Object(c.h)(),Object(l.m)()},1147:function(e,t,n){"use strict"
n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return h})),n.d(t,"e",(function(){return a})),n.d(t,"f",(function(){return s})),n.d(t,"g",(function(){return o})),n.d(t,"h",(function(){return c})),n.d(t,"i",(function(){return l}))
var r=n(893)
function i(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e[4]=0,e[5]=0,e}function a(e,t){const n=t[0],r=t[1],i=t[2],a=t[3],s=t[4],o=t[5]
let c=n*a-r*i
return c?(c=1/c,e[0]=a*c,e[1]=-r*c,e[2]=-i*c,e[3]=n*c,e[4]=(i*o-a*s)*c,e[5]=(r*s-n*o)*c,e):null}function s(e,t,n){const r=t[0],i=t[1],a=t[2],s=t[3],o=t[4],c=t[5],l=n[0],u=n[1],h=n[2],d=n[3],p=n[4],m=n[5]
return e[0]=r*l+a*u,e[1]=i*l+s*u,e[2]=r*h+a*d,e[3]=i*h+s*d,e[4]=r*p+a*m+o,e[5]=i*p+s*m+c,e}function o(e,t,n){const r=t[0],i=t[1],a=t[2],s=t[3],o=t[4],c=t[5],l=Math.sin(n),u=Math.cos(n)
return e[0]=r*u+a*l,e[1]=i*u+s*l,e[2]=r*-l+a*u,e[3]=i*-l+s*u,e[4]=o,e[5]=c,e}function c(e,t,n){const r=t[0],i=t[1],a=t[2],s=t[3],o=t[4],c=t[5],l=n[0],u=n[1]
return e[0]=r*l,e[1]=i*l,e[2]=a*u,e[3]=s*u,e[4]=o,e[5]=c,e}function l(e,t,n){const r=t[0],i=t[1],a=t[2],s=t[3],o=t[4],c=t[5],l=n[0],u=n[1]
return e[0]=r,e[1]=i,e[2]=a,e[3]=s,e[4]=r*l+a*u+o,e[5]=i*l+s*u+c,e}function u(e,t){const n=Math.sin(t),r=Math.cos(t)
return e[0]=r,e[1]=n,e[2]=-n,e[3]=r,e[4]=0,e[5]=0,e}function h(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=t[1],e[4]=0,e[5]=0,e}function d(e,t){return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e[4]=t[0],e[5]=t[1],e}function p(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e[3]=t[3]-n[3],e[4]=t[4]-n[4],e[5]=t[5]-n[5],e}const m=s,f=p
Object.freeze({__proto__:null,copy:function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e},identity:i,set:function(e,t,n,r,i,a,s){return e[0]=t,e[1]=n,e[2]=r,e[3]=i,e[4]=a,e[5]=s,e},invert:a,determinant:function(e){return e[0]*e[3]-e[1]*e[2]},multiply:s,rotate:o,scale:c,translate:l,fromRotation:u,fromScaling:h,fromTranslation:d,str:function(e){return"mat2d("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+")"},frob:function(e){return Math.sqrt(e[0]**2+e[1]**2+e[2]**2+e[3]**2+e[4]**2+e[5]**2+1)},add:function(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e[3]=t[3]+n[3],e[4]=t[4]+n[4],e[5]=t[5]+n[5],e},subtract:p,multiplyScalar:function(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e[4]=t[4]*n,e[5]=t[5]*n,e},multiplyScalarAndAdd:function(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e[2]=t[2]+n[2]*r,e[3]=t[3]+n[3]*r,e[4]=t[4]+n[4]*r,e[5]=t[5]+n[5]*r,e},exactEquals:function(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]&&e[4]===t[4]&&e[5]===t[5]},equals:function(e,t){const n=e[0],i=e[1],a=e[2],s=e[3],o=e[4],c=e[5],l=t[0],u=t[1],h=t[2],d=t[3],p=t[4],m=t[5]
return Math.abs(n-l)<=r.a*Math.max(1,Math.abs(n),Math.abs(l))&&Math.abs(i-u)<=r.a*Math.max(1,Math.abs(i),Math.abs(u))&&Math.abs(a-h)<=r.a*Math.max(1,Math.abs(a),Math.abs(h))&&Math.abs(s-d)<=r.a*Math.max(1,Math.abs(s),Math.abs(d))&&Math.abs(o-p)<=r.a*Math.max(1,Math.abs(o),Math.abs(p))&&Math.abs(c-m)<=r.a*Math.max(1,Math.abs(c),Math.abs(m))},mul:m,sub:f})},1275:function(e,t,n){"use strict"
n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return p})),n.d(t,"e",(function(){return R})),n.d(t,"f",(function(){return b})),n.d(t,"g",(function(){return h})),n.d(t,"h",(function(){return I})),n.d(t,"i",(function(){return l}))
var r=n(1031),i=n(1191),a=n(867),s=n(893),o=n(871),c=n(910)
function l(e,t,n){n*=.5
const r=Math.sin(n)
return e[0]=r*t[0],e[1]=r*t[1],e[2]=r*t[2],e[3]=Math.cos(n),e}function u(e,t){const n=2*Math.acos(t[3]),r=Math.sin(n/2)
return r>s.a?(e[0]=t[0]/r,e[1]=t[1]/r,e[2]=t[2]/r):(e[0]=1,e[1]=0,e[2]=0),n}function h(e,t,n){const r=t[0],i=t[1],a=t[2],s=t[3],o=n[0],c=n[1],l=n[2],u=n[3]
return e[0]=r*u+s*o+i*l-a*c,e[1]=i*u+s*c+a*o-r*l,e[2]=a*u+s*l+r*c-i*o,e[3]=s*u-r*o-i*c-a*l,e}function d(e,t,n,r){const i=t[0],a=t[1],o=t[2],c=t[3]
let l,u,h,d,p,m=n[0],f=n[1],b=n[2],g=n[3]
return u=i*m+a*f+o*b+c*g,u<0&&(u=-u,m=-m,f=-f,b=-b,g=-g),1-u>s.a?(l=Math.acos(u),h=Math.sin(l),d=Math.sin((1-r)*l)/h,p=Math.sin(r*l)/h):(d=1-r,p=r),e[0]=d*i+p*m,e[1]=d*a+p*f,e[2]=d*o+p*b,e[3]=d*c+p*g,e}function p(e,t){const n=t[0],r=t[1],i=t[2],a=t[3],s=n*n+r*r+i*i+a*a,o=s?1/s:0
return e[0]=-n*o,e[1]=-r*o,e[2]=-i*o,e[3]=a*o,e}function m(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e}function f(e,t){const n=t[0]+t[4]+t[8]
let r
if(n>0)r=Math.sqrt(n+1),e[3]=.5*r,r=.5/r,e[0]=(t[5]-t[7])*r,e[1]=(t[6]-t[2])*r,e[2]=(t[1]-t[3])*r
else{let n=0
t[4]>t[0]&&(n=1),t[8]>t[3*n+n]&&(n=2)
const i=(n+1)%3,a=(n+2)%3
r=Math.sqrt(t[3*n+n]-t[3*i+i]-t[3*a+a]+1),e[n]=.5*r,r=.5/r,e[3]=(t[3*i+a]-t[3*a+i])*r,e[i]=(t[3*i+n]+t[3*n+i])*r,e[a]=(t[3*a+n]+t[3*n+a])*r}return e}function b(e,t,n,r){const i=.5*Math.PI/180
t*=i,n*=i,r*=i
const a=Math.sin(t),s=Math.cos(t),o=Math.sin(n),c=Math.cos(n),l=Math.sin(r),u=Math.cos(r)
return e[0]=a*c*u-s*o*l,e[1]=s*o*u+a*c*l,e[2]=s*c*l-a*o*u,e[3]=s*c*u+a*o*l,e}const g=c.c,y=c.l,_=c.a,O=h,v=c.b,j=c.d,x=c.j,E=c.e,T=E,w=c.f,S=w,M=c.k,R=c.g,k=c.h
function I(e,t,n){const r=Object(o.k)(t,n)
return r<-.999999?(Object(o.j)(A,C,t),Object(o.B)(A)<1e-6&&Object(o.j)(A,V,t),Object(o.u)(A,A),l(e,A,Math.PI),e):r>.999999?(e[0]=0,e[1]=0,e[2]=0,e[3]=1,e):(Object(o.j)(A,t,n),e[0]=A[0],e[1]=A[1],e[2]=A[2],e[3]=1+r,M(e,e))}const A=Object(a.f)(),C=Object(a.h)(1,0,0),V=Object(a.h)(0,1,0),G=Object(i.b)(),P=Object(i.b)(),L=Object(r.b)()
Object.freeze({__proto__:null,identity:function(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e},setAxisAngle:l,getAxisAngle:u,multiply:h,rotateX:function(e,t,n){n*=.5
const r=t[0],i=t[1],a=t[2],s=t[3],o=Math.sin(n),c=Math.cos(n)
return e[0]=r*c+s*o,e[1]=i*c+a*o,e[2]=a*c-i*o,e[3]=s*c-r*o,e},rotateY:function(e,t,n){n*=.5
const r=t[0],i=t[1],a=t[2],s=t[3],o=Math.sin(n),c=Math.cos(n)
return e[0]=r*c-a*o,e[1]=i*c+s*o,e[2]=a*c+r*o,e[3]=s*c-i*o,e},rotateZ:function(e,t,n){n*=.5
const r=t[0],i=t[1],a=t[2],s=t[3],o=Math.sin(n),c=Math.cos(n)
return e[0]=r*c+i*o,e[1]=i*c-r*o,e[2]=a*c+s*o,e[3]=s*c-a*o,e},calculateW:function(e,t){const n=t[0],r=t[1],i=t[2]
return e[0]=n,e[1]=r,e[2]=i,e[3]=Math.sqrt(Math.abs(1-n*n-r*r-i*i)),e},slerp:d,random:function(e){const t=Object(s.b)(),n=Object(s.b)(),r=Object(s.b)(),i=Math.sqrt(1-t),a=Math.sqrt(t)
return e[0]=i*Math.sin(2*Math.PI*n),e[1]=i*Math.cos(2*Math.PI*n),e[2]=a*Math.sin(2*Math.PI*r),e[3]=a*Math.cos(2*Math.PI*r),e},invert:p,conjugate:m,fromMat3:f,fromEuler:b,str:function(e){return"quat("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"},copy:g,set:y,add:_,mul:O,scale:v,dot:j,lerp:x,length:E,len:T,squaredLength:w,sqrLen:S,normalize:M,exactEquals:R,equals:k,rotationTo:I,sqlerp:function(e,t,n,r,i,a){return d(G,t,i,a),d(P,n,r,a),d(e,G,P,2*a*(1-a)),e},setAxes:function(e,t,n,r){const i=L
return i[0]=n[0],i[3]=n[1],i[6]=n[2],i[1]=r[0],i[4]=r[1],i[7]=r[2],i[2]=-t[0],i[5]=-t[1],i[8]=-t[2],M(e,f(e,i))}})},1286:function(e,t,n){"use strict"
n.d(t,"a",(function(){return c}))
var r=n(856),i=n(862),a=n(861),s=n(858),o=(n(353),n(77),n(859),n(857))
let c=class extends i.a{constructor(){super(...arguments),this._tasks=new Array,this.running=!1}get length(){return this._tasks.length}destroy(){this.cancelAll()}runTask(e){for(;!e.done&&this._process(e);)e.madeProgress()}push(e,t,n){return this.running=!0,new Promise((r,i)=>this._tasks.push(new l(r,i,e,t,n)))}unshift(e,t,n){return this.running=!0,new Promise((r,i)=>this._tasks.unshift(new l(r,i,e,t,n)))}_process(e){if(0===this._tasks.length)return!1
const t=this._tasks.shift()
try{const n=Object(a.n)(t.signal)
if(n&&!t.abortCallback)t.reject(Object(a.e)())
else{const r=n?t.abortCallback(Object(a.e)()):t.callback(e)
Object(a.o)(r)?r.then(t.resolve,t.reject):t.resolve(r)}}catch(e){t.reject(e)}return this.running=this._tasks.length>0,!0}cancelAll(){const e=Object(a.e)()
for(const t of this._tasks)if(t.abortCallback){const n=t.abortCallback(e)
t.resolve(n)}else t.reject(e)
this._tasks.length=0,this.running=!1}}
Object(r.a)([Object(s.b)()],c.prototype,"running",void 0),c=Object(r.a)([Object(o.a)("esri.layers.support.PromiseQueue")],c)
class l{constructor(e,t,n,r,i){this.resolve=e,this.reject=t,this.callback=n,this.signal=r,this.abortCallback=i}}},1295:function(e,t,n){"use strict"
n.d(t,"a",(function(){return c}))
var r=n(856),i=n(862),a=n(858),s=(n(353),n(77),n(859),n(857))
let o=class extends i.a{constructor(){super(...arguments),this.SCHEDULER_LOG_SLOW_TASKS=!1,this.FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES=!1}}
Object(r.a)([Object(a.b)()],o.prototype,"SCHEDULER_LOG_SLOW_TASKS",void 0),Object(r.a)([Object(a.b)()],o.prototype,"FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES",void 0),o=Object(r.a)([Object(s.a)("esri.views.support.DebugFlags")],o)
const c=new o},1316:function(e,t,n){"use strict"
n.r(t),n.d(t,"hydratedAdapter",(function(){return c}))
var r=n(658),i=n(889),a=n(866),s=n(661),o=n(883)
const c={convertToGEGeometry:function(e,t){if(null==t)return null
let n="cache"in t?t.cache._geVersion:void 0
return null==n&&(n=e.convertJSONToGeometry(t),"cache"in t&&(t.cache._geVersion=n)),n},exportPoint:function(e,t,n){const r=e.hasZ(t),i=e.hasM(t),s=new a.a({x:e.getPointX(t),y:e.getPointY(t),spatialReference:n})
return r&&(s.z=e.getPointZ(t)),i&&(s.m=e.getPointM(t)),s.cache._geVersion=t,s},exportPolygon:function(e,t,n){const r=new s.default({rings:e.exportPaths(t),hasZ:e.hasZ(t),hasM:e.hasM(t),spatialReference:n})
return r.cache._geVersion=t,r},exportPolyline:function(e,t,n){const r=new o.a({paths:e.exportPaths(t),hasZ:e.hasZ(t),hasM:e.hasM(t),spatialReference:n})
return r.cache._geVersion=t,r},exportMultipoint:function(e,t,n){const r=new i.a({hasZ:e.hasZ(t),hasM:e.hasM(t),points:e.exportPoints(t),spatialReference:n})
return r.cache._geVersion=t,r},exportExtent:function(e,t,n){const i=e.hasZ(t),a=e.hasM(t),s=new r.default({xmin:e.getXMin(t),ymin:e.getYMin(t),xmax:e.getXMax(t),ymax:e.getYMax(t),spatialReference:n})
if(i){const n=e.getZExtent(t)
s.zmin=n.vmin,s.zmax=n.vmax}if(a){const n=e.getMExtent(t)
s.mmin=n.vmin,s.mmax=n.vmax}return s.cache._geVersion=t,s}}},1352:function(e,t,n){"use strict"
n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return s})),n(77)
var r=n(20)
function i(e,t){if(e===t)return!0
if(null==e||null==t)return!1
if(e.length!==t.length)return!1
for(let n=0;n<e.length;n++){const r=e[n],i=t[n]
if(r.length!==i.length)return!1
for(let e=0;e<r.length;e++)if(r[e]!==i[e])return!1}return!0}function a(e,t){if(e===t)return!0
if(null==e||null==t)return!1
if(e.length!==t.length)return!1
for(let n=0;n<e.length;n++)if(!i(e[n],t[n]))return!1
return!0}function s(e,t){return!!o(e.spatialReference,t.spatialReference)&&e.x===t.x&&e.y===t.y&&e.z===t.z&&e.m===t.m}function o(e,t){return e===t||e&&t&&e.equals(t)}function c(e,t){if(e===t)return!0
if(Object(r.j)(e)||Object(r.j)(t))return!1
if(e.type!==t.type)return!1
switch(e.type){case"point":return s(e,t)
case"extent":return function(e,t){return e.hasZ===t.hasZ&&e.hasM===t.hasM&&!!o(e.spatialReference,t.spatialReference)&&e.xmin===t.xmin&&e.ymin===t.ymin&&e.zmin===t.zmin&&e.xmax===t.xmax&&e.ymax===t.ymax&&e.zmax===t.zmax}(e,t)
case"polyline":return function(e,t){return e.hasZ===t.hasZ&&e.hasM===t.hasM&&!!o(e.spatialReference,t.spatialReference)&&a(e.paths,t.paths)}(e,t)
case"polygon":return function(e,t){return e.hasZ===t.hasZ&&e.hasM===t.hasM&&!!o(e.spatialReference,t.spatialReference)&&a(e.rings,t.rings)}(e,t)
case"multipoint":return function(e,t){return e.hasZ===t.hasZ&&e.hasM===t.hasM&&!!o(e.spatialReference,t.spatialReference)&&i(e.points,t.points)}(e,t)
case"mesh":return!1
default:return}}function l(e,t){return e===t||null!=e&&null!=t&&e.objectId===t.objectId&&!!c(e.geometry,t.geometry)&&!!function(e,t){if(e===t)return!0
if(!e||!t)return!1
const n=Object.keys(e),r=Object.keys(t)
if(n.length!==r.length)return!1
for(const r of n)if(e[r]!==t[r])return!1
return!0}(e.attributes,t.attributes)}},1402:function(e,t,n){"use strict"
var r,i,a
n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),function(e){e[e.USER=0]="USER",e[e.MANAGER=1]="MANAGER"}(r||(r={})),function(e){e[e.None=0]="None",e[e.Unfocused=1]="Unfocused",e[e.Focused=2]="Focused",e[e.Unselected=4]="Unselected",e[e.Selected=8]="Selected",e[e.All=15]="All"}(i||(i={})),function(e){e[e.None=0]="None",e[e.Custom1=16]="Custom1",e[e.Custom2=32]="Custom2",e[e.Custom3=64]="Custom3",e[e.Custom4=128]="Custom4",e[e.Custom5=256]="Custom5",e[e.Custom6=512]="Custom6",e[e.Custom7=1024]="Custom7",e[e.Custom8=2048]="Custom8",e[e.Custom9=4096]="Custom9",e[e.Custom10=8192]="Custom10",e[e.Custom11=16384]="Custom11",e[e.Custom12=32768]="Custom12",e[e.All=65520]="All"}(a||(a={}))},1539:function(e,t,n){"use strict"
n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return _})),n.d(t,"c",(function(){return O})),n.d(t,"d",(function(){return p})),n.d(t,"e",(function(){return d})),n.d(t,"f",(function(){return v})),n.d(t,"g",(function(){return m})),n.d(t,"h",(function(){return b})),n.d(t,"i",(function(){return g})),n.d(t,"j",(function(){return y})),n(870),n(923)
var r=n(178),i=n(874),a=n(20),s=n(876),o=n(867),c=n(917),l=n(955),u=n(1731),h=n(866)
function d(e,t){return e.events.on("drag",function(e,t){let n=null,r=null
return i=>{if("cancel"===i.action)return void(Object(a.k)(r)&&(r.execute({action:"cancel"}),n=null,r=null))
const s={action:i.action,screenStart:i.start,screenEnd:i.screenPoint}
"start"===i.action&&Object(a.j)(n)&&(n=new j,r=new j,t(e,n,r,i.pointerType,s)),Object(a.k)(n)&&n.execute(s),"end"===i.action&&Object(a.k)(n)&&(n=null,r=null)}}(e,t))}function p(e,t){const n=[e.x,e.y,e.z],r=t,i=[Math.cos(r),Math.sin(r)],a=Math.sqrt(i[0]*i[0]+i[1]*i[1])
if(0===a)return null
i[0]/=a,i[1]/=a
const s=e=>{const t=(e.x-n[0])*i[0]+(e.y-n[1])*i[1]
e.x=n[0]+t*i[0],e.y=n[1]+t*i[1]}
return e=>(s(e.mapStart),s(e.mapEnd),e)}function m(e,t){let n=null
return r=>{if("start"===r.action&&(n=function(e,t,n){const r=e.geometry
if(Object(a.j)(r))return null
if("mesh"===r.type)return function(e,t,n,r){if(Object(a.k)(t.transform))return function(e,t,n,r){const i=f(n.getOriginPoint(t.spatialReference),r),s=t.spatialReference
return Object(a.j)(i)?null:{move:(t,r,l)=>{const h=Object(u.d)(i.clone(),t,r,l)
if(h.spatialReference.equals(s))n.origin=Object(o.h)(h.x,h.y,h.z)
else{const e=Object(c.m)(h,s)
Object(a.k)(e)&&(n.origin=Object(o.h)(e.x,e.y,e.z))}e.notifyMeshTransformChanged(),e.notifyGeometryChanged()}}}(e,t,t.transform,n)
if(!t.spatialReference.equals(n))return null
let i=0,s=0,d=0
return{move:(n,a,o)=>{const c=n-i,u=a-s,p=o-d
if(c||u||p){const m=new h.a(t.origin.x+c,t.origin.y+u,t.origin.z+p,t.origin.spatialReference)
t.centerAt(m,{geographic:r===l.a.Global}),e.notifyGeometryChanged(),i=n,s=a,d=o}}}}(e,r,t,n)
const i=f(r,t),s=r.spatialReference
return Object(a.j)(i)?null:{move:(t,n,r)=>{const a=Object(u.d)(i.clone(),t,n,r)
a.spatialReference.equals(s)?e.geometry=a:e.geometry=Object(c.m)(a,s)}}}(e,r.mapStart.spatialReference,t)),Object(a.j)(n))return null
const i=r.mapEnd.x-r.mapStart.x,s=r.mapEnd.y-r.mapStart.y,d=r.mapEnd.z-r.mapStart.z
return n.move(i,s,d),{...r,translationX:i,translationY:s,translationZ:d}}}function f(e,t){return Object(a.j)(e)?null:e.spatialReference.equals(t)?e.clone():Object(c.m)(e,t)}function b(e,t){const n=e.map(e=>Object(a.t)(m(e,t))).filter(e=>Object(a.k)(e))
return e=>{const t=e.mapEnd.x-e.mapStart.x,r=e.mapEnd.y-e.mapStart.y,i=e.mapEnd.z-e.mapStart.z
return n.forEach(t=>t(e)),{...e,translationX:t,translationY:r,translationZ:i}}}function g(e){return Object(a.k)(e.geometry)&&"mesh"===e.geometry.type?function(e,t){const n=Object(a.k)(t.transform)?t.transform.clone():null,r=t.vertexAttributes.clonePositional()
return i=>(t.transform=n,t.vertexAttributes=r,e.notifyGeometryChanged(),i)}(e,e.geometry):function(e,t){const n=new Map
for(const i of t)n.set(i,Object(r.a)(e[i]))
return t=>(n.forEach((t,n)=>{e[n]=t}),t)}(e,["geometry"])}function y(e){const t=e.map(e=>Object(a.t)(g(e))).filter(e=>Object(a.k)(e))
return e=>(t.forEach(t=>t(e)),e)}function _(){let e=0,t=0,n=0
return r=>{"start"===r.action&&(e=r.mapStart.x,t=r.mapStart.y,n=r.mapStart.z)
const i=r.mapEnd.x-e,a=r.mapEnd.y-t,s=r.mapEnd.z-n
return e=r.mapEnd.x,t=r.mapEnd.y,n=r.mapEnd.z,{...r,mapDeltaX:i,mapDeltaY:a,mapDeltaZ:s,mapDeltaSpatialReference:r.mapStart.spatialReference}}}function O(){let e=0,t=0
return n=>{"start"===n.action&&(e=n.screenStart.x,t=n.screenStart.y)
const r=n.screenEnd.x-e,i=n.screenEnd.y-t
return e=n.screenEnd.x,t=n.screenEnd.y,{...n,screenDeltaX:r,screenDeltaY:i}}}function v(e,t){let n=null,r=0,a=0
return o=>{if("start"===o.action&&(n=e.toScreen(t),n.x<0||n.x>e.width||n.y<0||n.y>e.height?n=null:(r=o.screenStart.x-n.x,a=o.screenStart.y-n.y)),null==n)return null
const c=Object(i.f)(o.screenEnd.x-r,0,e.width),l=Object(i.f)(o.screenEnd.y-a,0,e.height),u=Object(s.f)(c,l)
return o.screenStart=n,o.screenEnd=u,o}}class j{constructor(){this.execute=()=>{}}next(e,t=new j){return Object(a.k)(e)&&(this.execute=n=>{const r=e(n)
Object(a.k)(r)&&t.execute(r)}),t}}},1545:function(e,t,n){"use strict"
function r(){return[1,0,0,1,0,0]}function i(e){return[e[0],e[1],e[2],e[3],e[4],e[5]]}n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return r})),Object.freeze({__proto__:null,create:r,clone:i,fromValues:function(e,t,n,r,i,a){return[e,t,n,r,i,a]},createView:function(e,t){return new Float64Array(e,t,6)}})},1919:function(e,t,n){"use strict"
n.d(t,"a",(function(){return g}))
var r,i,a=n(856),s=n(862),o=n(177),c=n(20),l=n(861),u=n(858),h=(n(353),n(77),n(859),n(857)),d=n(1607),p=n(1402),m=n(878);(i=r||(r={}))[i.WhenToolEditable=0]="WhenToolEditable",i[i.WhenToolNotEditable=1]="WhenToolNotEditable",i[i.Always=2]="Always"
class f{constructor(){this._isToolEditable=!0,this._manipulators=new m.a,this._nextManipulatorId=0,this._resourceContexts={manipulator3D:{}},this._attached=!1}set isToolEditable(e){this._isToolEditable=e}get length(){return this._manipulators.length}add(e,t=r.WhenToolEditable){return this.addMany([e],t)[0]}addMany(e,t=r.WhenToolEditable){return e.map(e=>{const n=this._nextManipulatorId++,r={id:n,manipulator:e,visibilityPredicate:t,attached:!1}
return this._manipulators.add(r),this._attached&&this._updateManipulatorAttachment(r),n})}remove(e){if("number"==typeof e){const t=e
for(let e=0;e<this._manipulators.length;e++)if(this._manipulators.getItemAt(e).id===t){const t=this._manipulators.splice(e,1)[0]
return this._detachManipulator(t),t.id}return null}const t=e
for(let e=0;e<this._manipulators.length;e++)if(this._manipulators.getItemAt(e).manipulator===t){const t=this._manipulators.splice(e,1)[0]
return this._detachManipulator(t),t.id}return null}removeAll(){this._manipulators.forEach(e=>{this._detachManipulator(e)}),this._manipulators.removeAll()}attach(){this._manipulators.forEach(e=>{this._updateManipulatorAttachment(e)}),this._attached=!0}detach(){this._manipulators.forEach(e=>{this._detachManipulator(e)}),this._attached=!1}destroy(){this._manipulators.forEach(({manipulator:e})=>{e.destroy&&e.destroy()}),this._manipulators.destroy(),this._resourceContexts=null}on(e,t){return this._manipulators.on(e,e=>{t(e)})}forEach(e){for(const t of this._manipulators.items)e(t)}some(e){return this._manipulators.items.some(e)}toArray(){const e=[]
return this.forEach(t=>e.push(t.manipulator)),e}intersect(e,t){let n=null,r=Number.MAX_VALUE
return this._manipulators.forEach(({id:i,manipulator:a,attached:s})=>{if(!s||!a.interactive)return
const o=a.intersectionDistance(e,t)
Object(c.k)(o)&&o<r&&(r=o,n={id:i,manipulator:a})}),n}findById(e){if(Object(c.j)(e))return null
for(const t of this._manipulators.items)if(e===t.id)return t.manipulator
return null}_updateManipulatorAttachment(e){this._isManipulatorItemVisible(e)?this._attachManipulator(e):this._detachManipulator(e)}_attachManipulator(e){e.attached||(e.manipulator.attach&&e.manipulator.attach(this._resourceContexts),e.attached=!0)}_detachManipulator(e){if(!e.attached)return
const t=e.manipulator
t.grabbing=!1,t.dragging=!1,t.hovering=!1,t.selected=!1,t.detach&&t.detach(this._resourceContexts),e.attached=!1}_isManipulatorItemVisible(e){return e.visibilityPredicate===r.Always||(this._isToolEditable?e.visibilityPredicate===r.WhenToolEditable:e.visibilityPredicate===r.WhenToolNotEditable)}}const b=o.a.getLogger("esri.views.interactive.InteractiveToolBase")
let g=class extends s.a{constructor(e){super(e),this.manipulators=new f,this.updating=!1,this.automaticManipulatorSelection=!0,this._editableFlags=new Map([[p.a.MANAGER,!0],[p.a.USER,!0]]),this._creationStartedResolver=Object(l.g)(),this._creationFinishedResolver=Object(l.g)()}set toolState(e){this._set("toolState",e),this._syncVisible()}get active(){return null!=this.view&&this.view.activeTool===this}set visible(e){this._get("visible")!==e&&(this._set("visible",e),this._syncVisible())}get editable(){return this.getEditableFlag(p.a.USER)}set editable(e){this.setEditableFlag(p.a.USER,e)}get created(){return"created"===this.toolState}get cursor(){return null}initialize(){this._syncVisible()}destroy(){this.manipulators.destroy(),this._set("view",null)}activate(){Object(c.j)(this.view)?b.error("Can't activate tool if view is not defined."):(Object(d.b)(this.view)&&this.view.focus(),this.onActivate())}deactivate(){this.onDeactivate()}handleInputEvent(e){this.onInputEvent(e)}handleInputEventAfter(e){this.onInputEventAfter(e)}setEditableFlag(e,t){this._editableFlags.set(e,t),this.manipulators.isToolEditable=this.internallyEditable,this._updateManipulatorAttachment(),e===p.a.USER&&this.notifyChange("editable"),this.onEditableChange()}getEditableFlag(e){return this._editableFlags.get(e)}whenCreationStarted(){return this._creationStartedResolver.promise}whenCreated(){return this._creationFinishedResolver.promise}rejectCreation(e){"pending"!==this.toolState&&"creating"!==this.toolState||this._creationStartedResolver.resolve(this),this._creationFinishedResolver.reject(e)}onActivate(){}onDeactivate(){}onShow(){}onHide(){}onEditableChange(){}onInputEvent(e){}onInputEventAfter(e){}get internallyEditable(){return this.getEditableFlag(p.a.USER)&&this.getEditableFlag(p.a.MANAGER)}startToolCreation(){if("pending"===this.toolState)return this._creationStartedResolver.resolve(this),void(this.toolState="creating")
throw new Error("Unexpected tool state "+this.toolState)}finishToolCreation(){switch(this.toolState){case"pending":this.startToolCreation()
case"creating":this.created||this._creationFinishedResolver.resolve(this),this.toolState="created"
break
case"created":break
default:throw new Error("Unexpected tool state "+this.toolState)}}_syncVisible(){if("pending"!==this.toolState)if(this.visible)this._show()
else if(this._hide(),this.active)return void(this.view.activeTool=null)}_show(){this._updateManipulatorAttachment(),this.onShow()}_hide(){this._updateManipulatorAttachment(),this.onHide()}_updateManipulatorAttachment(){this.visible?this.manipulators.attach():this.manipulators.detach()}}
Object(a.a)([Object(u.b)({value:"pending"})],g.prototype,"toolState",null),Object(a.a)([Object(u.b)({constructOnly:!0})],g.prototype,"view",void 0),Object(a.a)([Object(u.b)({readOnly:!0})],g.prototype,"active",null),Object(a.a)([Object(u.b)({value:!0})],g.prototype,"visible",null),Object(a.a)([Object(u.b)({value:!0})],g.prototype,"editable",null),Object(a.a)([Object(u.b)({readOnly:!0})],g.prototype,"created",null),Object(a.a)([Object(u.b)({readOnly:!0})],g.prototype,"manipulators",void 0),Object(a.a)([Object(u.b)({readOnly:!0})],g.prototype,"updating",void 0),Object(a.a)([Object(u.b)()],g.prototype,"cursor",null),Object(a.a)([Object(u.b)()],g.prototype,"automaticManipulatorSelection",void 0),g=Object(a.a)([Object(h.a)("esri.views.interactive.InteractiveToolBase")],g)},1946:function(e,t,n){"use strict"
n.d(t,"a",(function(){return l}))
var r=n(20),i=n(861),a=n(1352),s=n(1539),o=n(1784),c=n(992)
class l{constructor(){this.next=new s.a}createSnapDragEventPipelineStep({predicate:e=(()=>!0),cancel:t,snappingManager:n,snappingContext:l,updatingHandles:u}){if(Object(r.j)(n))return e=>e
let h=null,d=null
const p=()=>{h=Object(r.a)(h),n.doneSnapping(),Object(r.k)(d)&&d.frameTask.remove(),d=null}
return t.next(e=>(p(),e)),this.next=new s.a,t=>{if(!e(t))return t
if(h=Object(r.a)(h),"start"===t.action){const e="3d"===n.view.type?n.view.resourceController.scheduler.registerTask(c.c.SNAPPING):c.a
d={context:new o.a({editGeometryOperations:l.editGeometryOperations,elevationInfo:l.elevationInfo,pointer:l.pointer,vertexHandle:Object(r.k)(t.info)?t.info.handle:null,excludeFeature:l.excludeFeature,visualizer:l.visualizer}),originalPos:Object(r.k)(t.snapOrigin)?l.coordinateHelper.vectorToDehydratedPoint(t.snapOrigin):t.mapStart,frameTask:e}}if(Object(r.k)(d)){const e=d.context.coordinateHelper.vectorToDehydratedPoint(d.context.coordinateHelper.arrayToVector([d.originalPos.x,d.originalPos.y,d.originalPos.z]))
e.x+=t.mapEnd.x-t.mapStart.x,e.y+=t.mapEnd.y-t.mapStart.y
const r=t.mapStart.x-d.originalPos.x,s=t.mapStart.y-d.originalPos.y,o={...t,action:"udpate"},c=d.context,l=n.update(e,d.context)
if(t.mapEnd.x=l.x+r,t.mapEnd.y=l.y+s,"end"!==t.action){const t=d.frameTask
h=Object(i.h)(async i=>{const u=await t.schedule(()=>n.snap(e,c,i),i)
if(u.valid){const e=await t.schedule(()=>u.apply(),i)
Object(a.b)(e,l)||(o.mapEnd.x=e.x+r,o.mapEnd.y=e.y+s,this.next.execute(o))}}),u.addPromise(h.promise)}}return"end"===t.action&&p(),t}}}},2185:function(e,t,n){"use strict"
n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return c}))
var r=n(20),i=n(876),a=n(1071),s=n(1323)
class o{constructor(e,t,n,r=null){this.elevationInfo=e,this.defaultZ=t,this.view=n,this.excludeGraphics=r}screenToMap(e){if(Object(r.k)(this.defaultZ))return this.view.sceneIntersectionHelper.intersectElevationFromScreen(Object(i.g)(e.x,e.y),this.elevationInfo,this.defaultZ,this.excludeGraphics)
const t=this.view.sceneIntersectionHelper.intersectElevationFromScreen(Object(i.g)(e.x,e.y),this.elevationInfo,0,this.excludeGraphics)
return Object(r.k)(t)&&(t.z=void 0),t}mapToScreen(e){const t=Object(a.j)(e.x,e.y,Object(s.a)(this.view,e,this.elevationInfo),e.spatialReference)
return this.view.toScreen(t)}}class c{constructor(e,t,n=[]){this.view=e,this.elevationInfo=t,this.exclude=n}screenToMap(e){const t=this.view.toMap(e,{exclude:this.exclude})
return Object(r.k)(t)&&(t.z=Object(s.g)(t,this.view,this.elevationInfo)),t}mapToScreen(e){let t=e
return Object(r.k)(this.elevationInfo)&&(t=Object(a.j)(e.x,e.y,Object(s.a)(this.view,e,this.elevationInfo),e.spatialReference)),this.view.toScreen(t)}}class l{constructor(e){this.view=e,this.screenToMap=t=>e.toMap(t),this.mapToScreen=t=>e.toScreen(t)}}},2201:function(e,t,n){"use strict"
n.d(t,"a",(function(){return z})),n.d(t,"b",(function(){return W}))
var r=n(856),i=n(663),a=(n(77),n(890)),s=n(912),o=n(923),c=n(20),l=n(858),u=n(353),h=(n(859),n(857)),d=n(673),p=(n(870),n(178)),m=n(886),f=n(1981),b=n(672),g=n(916),y=n(872),_=n(1147),O=n(1545),v=n(1275),j=n(1191),x=n(871),E=n(867),T=n(1339),w=n(866)
function S(e,t,n=null){return Object(c.k)(n)?[e,t,n]:[e,t]}function M(e,t,n=null){return Object(c.k)(n)?{x:e,y:t,z:n}:{x:e,y:t}}class R{constructor(e){this.spatialReference=e}mapToLocalMultiple(e){return Object(c.g)(e.map(e=>this.mapToLocal(e)))}get doUnnormalization(){return!1}}class k extends R{constructor(e,t,n=null){super(t),this.defaultZ=n,this.transform=Object(O.b)(),this.transformInv=Object(O.b)(),this.transform=Object(O.a)(e),Object(_.e)(this.transformInv,this.transform)}makeMapPoint(e,t){return S(e,t,this.defaultZ)}mapToLocal(e){return M(this.transform[0]*e[0]+this.transform[2]*e[1]+this.transform[4],this.transform[1]*e[0]+this.transform[3]*e[1]+this.transform[5])}localToMap(e){return S(this.transformInv[0]*e.x+this.transformInv[2]*e.y+this.transformInv[4],this.transformInv[1]*e.x+this.transformInv[3]*e.y+this.transformInv[5],this.defaultZ)}}class I extends R{constructor(e,t){super(e.spatialReference),this.view=e,this.defaultZ=null,this.pWS=Object(E.f)(),this.tangentFrameUpWS=Object(E.f)(),this.tangentFrameRightWS=Object(E.f)(),this.tangentFrameForwardWS=Object(E.f)(),this.localFrameRightWS=Object(E.f)(),this.localFrameUpWS=Object(E.f)(),this.worldToLocalTransform=Object(j.b)(),this.localToWorldTransform=Object(j.b)(),this.scale=1,this.scale=e.resolution,this.referenceMapPoint=t,this.defaultZ=t.hasZ?t.z:null
const n=e.state.camera.viewRight
this.view.renderCoordsHelper.toRenderCoords(this.referenceMapPoint,this.pWS),this.view.renderCoordsHelper.worldBasisAtPosition(this.pWS,T.a.X,this.tangentFrameRightWS),this.view.renderCoordsHelper.worldBasisAtPosition(this.pWS,T.a.Y,this.tangentFrameUpWS),this.view.renderCoordsHelper.worldBasisAtPosition(this.pWS,T.a.Z,this.tangentFrameForwardWS)
const r=Object(E.f)()
Object(x.h)(r,this.tangentFrameForwardWS,Object(x.k)(n,this.tangentFrameForwardWS)),Object(x.m)(this.localFrameRightWS,n,r),Object(x.u)(this.localFrameRightWS,this.localFrameRightWS),Object(x.j)(this.localFrameUpWS,this.tangentFrameForwardWS,this.localFrameRightWS),Object(v.h)(this.worldToLocalTransform,this.localFrameRightWS,this.tangentFrameRightWS),Object(v.d)(this.localToWorldTransform,this.worldToLocalTransform)}get doUnnormalization(){return"global"===this.view.viewingMode}makeMapPoint(e,t){return S(e,t,this.defaultZ)}mapToLocal(e){const t=Object(E.f)()
this.view.renderCoordsHelper.toRenderCoords(new w.a({x:e[0],y:e[1],spatialReference:this.spatialReference}),t),Object(x.x)(t,t,this.worldToLocalTransform)
const n=this.view.renderCoordsHelper.fromRenderCoords(t,this.view.spatialReference)
return Object(c.k)(n)?M(n.x/this.scale,n.y/this.scale):null}localToMap(e){const t=Object(E.f)()
this.view.renderCoordsHelper.toRenderCoords(new w.a({x:e.x*this.scale,y:e.y*this.scale,spatialReference:this.spatialReference}),t),Object(x.x)(t,t,this.localToWorldTransform)
const n=this.view.renderCoordsHelper.fromRenderCoords(t,this.view.spatialReference)
return Object(c.k)(n)?S(n.x,n.y,this.defaultZ):null}}function A(e,t){if("2d"===e.type)return new k(e.state.transform,e.spatialReference,t.length>2?t[2]:null)
if("3d"===e.type){const n=t.length>2?new w.a({x:t[0],y:t[1],z:t[2],spatialReference:e.spatialReference}):new w.a({x:t[0],y:t[1],spatialReference:e.spatialReference})
return new I(e,n)}return null}var C=n(889),V=n(883),G=n(661)
function P(e,t){const n=new w.a({x:e[0],y:e[1],spatialReference:t})
return e.length>2&&(n.z=e[2]),n}function L(e,t,n){const r=new V.a({paths:e,spatialReference:t})
return n&&Object(g.i)(r),r}function F(e,t,n,r=!0){const i=Object(p.a)(e)
i.forEach(e=>{const t=e[0],n=e[e.length-1]
Object(u.e)(t,n)&&1!==e.length||e.push(e[0])})
let a=new G.default({rings:i,spatialReference:t})
return a.rings.forEach(e=>{Object(g.g)(e,!1,!1)||e.reverse()}),n&&Object(g.i)(a),r&&a.isSelfIntersecting&&Object(y.l)(t)&&(a=Object(b.simplify)(a)),a}function N(e,t,n){const r=t.mapToLocalMultiple(e),i=[],a={x:r[0].x,y:r[0].y},s=r[1].x,o=r[1].y,l=Math.round(s-a.x),u=Math.round(o-a.y),h=Math.max(Math.abs(l),Math.abs(u))
if(n){const e={x:a.x+h,y:a.y+h},t={x:a.x-h,y:a.y-h}
i.push(M(e.x,t.y),M(t.x,t.y),M(t.x,e.y),M(e.x,e.y))}else{const e={x:l>0?a.x+h:a.x-h,y:u>0?a.y+h:a.y-h}
i.push(M(a.x,a.y),M(e.x,a.y),M(e.x,e.y),M(a.x,e.y))}return F([Object(c.g)(i.map(e=>t.localToMap(e)))],t.spatialReference,t.doUnnormalization,!0)}function D(e,t,n,r){const i=t.mapToLocalMultiple(e)
let a=null,s=null
if(n)a=i[0],s=i[1]
else{const e=i[0],t=i[1],n=Math.round(t.x-e.x),r=Math.round(t.y-e.y),o=Math.max(Math.abs(n),Math.abs(r))
a=M(n>0?e.x+o/2:e.x-o/2,r>0?e.y+o/2:e.y-o/2),s=M(Math.abs(n)>Math.abs(r)?a.x-o/2:a.x,Math.abs(n)>Math.abs(r)?a.y:a.y-o/2)}const o=t.localToMap(a),l=t.localToMap(s)
if(Object(c.j)(o)||Object(c.j)(l))return null
t.doUnnormalization&&Object(g.j)([[o,l]],t.spatialReference)
const u=P(o,t.spatialReference),h=P(l,t.spatialReference),d=Object(m.f)(t.spatialReference)
let p=0
if(Object(y.l)(t.spatialReference))p=d*Object(b.distance)(u,h,null)
else{const e=a.x-s.x,t=a.y-s.y
p=d*Math.sqrt(e*e+t*t)*(r||1)}const _=new f.a({center:u,radius:p,radiusUnit:"meters",spatialReference:t.spatialReference})
return F(_.rings,_.spatialReference,!1)}var U=n(1919)
let z=class extends(Object(s.b)(a.a.EventedMixin(U.a))){constructor(e){super(e),this._graphic=null,this.defaultZ=0,this.geometryType=null,this.hasZ=!0,this.mode=null,this.snappingManager=null,this.snapToScene=!1}initialize(){this.internalGraphicsLayer=new d.default({listMode:"hide",internal:!0}),this.view.map.layers.add(this.internalGraphicsLayer),this.drawOperation=this.makeDrawOperation(),this.handles.add([this.drawOperation.on("vertex-add",e=>this.onVertexAdd(e)),this.drawOperation.on("vertex-remove",e=>this.onVertexRemove(e)),this.drawOperation.on("vertex-update",e=>this.onVertexUpdate(e)),this.drawOperation.on("cursor-update",e=>this.onCursorUpdate(e)),this.drawOperation.on("complete",e=>this.onComplete(e))]),this.finishToolCreation()}destroy(){this.drawOperation=Object(c.d)(this.drawOperation),this._destroyAllVisualisations(),this.view.map.remove(this.internalGraphicsLayer),this.internalGraphicsLayer=Object(c.d)(this.internalGraphicsLayer),this._set("view",null)}get canRedo(){return this.drawOperation.canRedo}get canUndo(){return this.drawOperation.canUndo}set centered(e){this._set("centered",e),this._updateGraphic()}set enabled(e){this.drawOperation.interactive=e,this._set("enabled",e)}set forceUniformSize(e){this._set("forceUniformSize",e),this._updateGraphic()}get graphic(){return this._graphic}set graphicSymbol(e){this._set("graphicSymbol",e),Object(c.k)(this._graphic)&&(this._graphic.symbol=e)}get updating(){var e,t
return null!=(e=null==(t=this.drawOperation)?void 0:t.updating)&&e}completeCreateOperation(){this.drawOperation.complete()}onInputEvent(e){this.drawOperation.onInputEvent(e)}redo(){this.drawOperation.redo()}reset(){}undo(){this.drawOperation.undo()}_createGraphic(e){this._graphic=new i.default({...this.graphicProperties,geometry:e,symbol:this.graphicSymbol}),this.internalGraphicsLayer.add(this._graphic),this.handles.add(this.initializeGraphic(this._graphic)),this.notifyChange("graphic"),this.handles.add(Object(o.c)(()=>{Object(c.k)(this._graphic)&&(this.internalGraphicsLayer.remove(this._graphic),this._graphic=Object(c.d)(this._graphic))}),Z)}_destroyAllVisualisations(){this.handles.remove(H.outline),this.handles.remove(H.regularVertices),this.handles.remove(H.activeVertex),this.handles.remove(Z)}_getCreateOperationGeometry(e={operationComplete:!1}){if(null==this.drawOperation||0===this.drawOperation.numVertices)return null
const t=this.drawOperation.stagedVertex,n=this.drawOperation.committedVertices,r=n.slice()
Object(c.k)(t)&&r.push(this.drawOperation.coordinateHelper.pointToArray(t))
const i=Object(c.k)(t)?this.drawOperation.coordinateHelper.pointToArray(t):n.splice(-1)[0],a={regularVertices:null,activeVertex:null,full:null,outline:null},s=r.length,o=this.drawOperation.spatialReference,l="3d"===this.view.type&&"global"===this.view.viewingMode
switch(this.geometryType){case"point":a.regularVertices=n,a.activeVertex=i,a.full=this.drawOperation.coordinateHelper.arrayToPoint(r[0])
break
case"multipoint":a.regularVertices=n,a.activeVertex=i,s>0&&(a.full=function(e,t){return new C.a({points:e,spatialReference:t})}(r,o))
break
case"polyline":a.regularVertices=n,a.activeVertex=i,s>0&&(a.full=L([r],o,l))
break
case"polygon":a.regularVertices=n,a.activeVertex=i,s>0&&(a.full=F([r],o,l,!0))
break
case"circle":if(s>0){const t=A(this.view,r[0])
if(1===s&&e.operationComplete){const e=r[0],n=t.makeMapPoint(e[0]+q*this.view.resolution,e[1])
a.full=D([e,n],t,!0)}else 2===s&&(a.full=this.forceUniformSize?D(r,t,this.centered):function(e,t,n){const r=t.mapToLocalMultiple(e),i=r[0],a=r[1],s=Math.round(a.x-i.x),o=Math.round(a.y-i.y),l=M(n?i.x:i.x+s/2,n?i.y:i.y+o/2),u=n?s:s/2,h=n?o:o/2,d=[],p=2*Math.PI/60
for(let e=0;e<60;e++){const t=Math.cos(e*p),n=Math.sin(e*p),r=M(u*t+l.x,h*n+l.y)
d.push(r)}return d.push(d[0]),F([Object(c.g)(d.map(e=>t.localToMap(e)))],t.spatialReference,t.doUnnormalization,!1)}(r,t,this.centered))}break
case"rectangle":if(s>0){const t=A(this.view,r[0])
if(1===s&&e.operationComplete){const e=r[0],n=t.makeMapPoint(e[0]+q*this.view.resolution,e[1])
a.full=N([e,n],t,!0)}else 2===s&&(a.full=this.forceUniformSize?N(r,t,this.centered):function(e,t,n){let r=t.mapToLocalMultiple(e)
if(1===r.length){const e=48,t=r[0]
r=[M(t.x-e,t.y+e),M(t.x+e,t.y-e),M(t.x+e,t.y-e),M(t.x-e,t.y+e)]}const i=[],a={x:r[0].x,y:r[0].y},s={x:r[1].x,y:r[1].y}
if(n){const e=Math.round(s.x-a.x),t=Math.round(s.y-a.y)
i.push(M(a.x-e,a.y-t),M(s.x,a.y-t),M(s.x,s.y),M(a.x-e,s.y))}else i.push(M(a.x,a.y),M(s.x,a.y),M(s.x,s.y),M(a.x,s.y))
return F([Object(c.g)(i.map(e=>t.localToMap(e)))],t.spatialReference,t.doUnnormalization,!0)}(r,t,this.centered))}break
default:return null}switch(this.geometryType){case"point":case"multipoint":break
case"polyline":case"polygon":s>1&&(a.outline=L([r],o,l))
break
case"circle":case"rectangle":Object(c.k)(a.full)&&"polygon"===a.full.type&&(a.outline=F(a.full.rings,o,l))}return a}initializeGraphic(e){return null}onComplete(e){this._updateGraphic()
let t=null
if(this.drawOperation.isCompleted){const e=this._getCreateOperationGeometry({operationComplete:!0})
Object(c.k)(e)&&(Object(c.j)(this._graphic)?this._createGraphic(e.full):this._graphic.geometry=e.full,t=Object(c.t)(this._graphic).clone())}this.emit("complete",{graphic:t,...e})}onCursorUpdate(e){this._updateGraphic(),this.emit("cursor-update",e)}onDeactivate(){this.drawOperation.isCompleted||this.drawOperation.cancel()}onVertexAdd(e){this._updateGraphic(),this.emit("vertex-add",e)}onVertexRemove(e){this._updateGraphic(),this.emit("vertex-remove",e)}onVertexUpdate(e){this._updateGraphic(),this.emit("vertex-update",e)}_updateGraphic(){const e=this._getCreateOperationGeometry()
Object(c.j)(e)?this._destroyAllVisualisations():(Object(c.k)(e.outline)?this.handles.add(this.onOutlineChanged(e.outline),H.outline):this.handles.remove(H.outline),Object(c.k)(e.regularVertices)?this.handles.add(this.onRegularVerticesChanged(e.regularVertices),H.regularVertices):this.handles.remove(H.regularVertices),Object(c.k)(e.activeVertex)?this.handles.add(this.onActiveVertexChanged(e.activeVertex),H.activeVertex):this.handles.remove(H.activeVertex),Object(c.k)(e.full)?Object(c.j)(this._graphic)?this._createGraphic(e.full):this._graphic.geometry=e.full:this.handles.remove(Z))}}
Object(r.a)([Object(l.b)({value:!0})],z.prototype,"centered",null),Object(r.a)([Object(l.b)({nonNullable:!0})],z.prototype,"defaultZ",void 0),Object(r.a)([Object(l.b)()],z.prototype,"drawOperation",void 0),Object(r.a)([Object(l.b)({value:!0})],z.prototype,"enabled",null),Object(r.a)([Object(l.b)({value:!0})],z.prototype,"forceUniformSize",null),Object(r.a)([Object(l.b)({constructOnly:!0})],z.prototype,"geometryType",void 0),Object(r.a)([Object(l.b)()],z.prototype,"graphic",null),Object(r.a)([Object(l.b)({constructOnly:!0})],z.prototype,"graphicProperties",void 0),Object(r.a)([Object(l.b)()],z.prototype,"graphicSymbol",null),Object(r.a)([Object(l.b)({constructOnly:!0})],z.prototype,"hasZ",void 0),Object(r.a)([Object(l.b)({constructOnly:!0})],z.prototype,"mode",void 0),Object(r.a)([Object(l.b)()],z.prototype,"snappingManager",void 0),Object(r.a)([Object(l.b)()],z.prototype,"snapToScene",void 0),Object(r.a)([Object(l.b)({readOnly:!0})],z.prototype,"type",void 0),Object(r.a)([Object(l.b)({readOnly:!0})],z.prototype,"updating",null),Object(r.a)([Object(l.b)({constructOnly:!0,nonNullable:!0})],z.prototype,"view",void 0),z=Object(r.a)([Object(h.a)("esri.views.draw.DrawGraphicTool")],z)
const Z="create-operation-graphic",H={outline:"outline-visual",regularVertices:"regular-vertices-visual",activeVertex:"active-vertex-visual"}
function W(e){switch(e){case"point":case"polyline":case"polygon":case"multipoint":return e
case"circle":case"rectangle":return"segment"
default:return null}}const q=48},2202:function(e,t,n){"use strict"
n.d(t,"a",(function(){return j}))
var r=n(856),i=n(890),a=n(912),s=n(178),o=n(20),c=n(861),l=n(876),u=n(858),h=(n(859),n(857)),d=n(1352),p=n(955)
class m{constructor({grabbableForEvent:e}){this.events=new i.a,this.interactive=!0,this.selectable=!1,this.cursor=null,this.grabbable=!0,this.grabbableForEvent=e}intersectionDistance(e,t){return 0}attach(){}detach(){}}var f=n(2088),b=n(1539),g=n(1842),y=n(1836),_=n(1784),O=n(1946),v=n(992)
let j=class extends(i.a.EventedMixin(a.a)){constructor(e){super(e),this._createOperationCompleted=!1,this._pointerDownStates=new Set,this._snappingPipeline=new O.a,this._snappingTask=null,this._stagedVertex=null,this.snapToSceneEnabled=null,Object(o.j)(e.elevationInfo)&&(this.elevationInfo={mode:e.hasZ?"absolute-height":"on-the-ground",offset:0})}initialize(){var e,t
this.coordinateHelper=Object(f.a)(this.hasZ,this.hasM,this.view.spatialReference)
const n="3d"===this.view.type?null==(e=this.view)||null==(t=e.resourceController)?void 0:t.scheduler:null
this._frameTask=n?n.registerTask(v.c.SNAPPING):v.a
const r="viewingMode"in this.view.state?this.view.state.viewingMode:p.a.Local,i="segment"===this.geometryType||"multipoint"===this.geometryType?"polyline":this.geometryType
this._editGeometryOperations=new y.a(new g.c(i,this.coordinateHelper,r)),this._activeComponent=new g.a(this.spatialReference,r),this._editGeometryOperations.data.components.push(this._activeComponent),this.handles.add(this._editGeometryOperations.on(["vertex-add","vertex-update","vertex-remove"],e=>{const t=e.vertices.map(e=>({componentIndex:0,vertexIndex:e.index,coordinates:this.coordinateHelper.vectorToArray(e.pos)})),n=t.map(e=>e.coordinates)
switch(e.type){case"vertex-add":this.emit(e.type,{...e,added:n,vertices:t})
break
case"vertex-update":this.emit(e.type,{...e,updated:n,vertices:t})
break
case"vertex-remove":this.emit(e.type,{...e,removed:n,vertices:t})}})),this._manipulator=new m({grabbableForEvent:e=>"click"!==this.drawingMode||"touch"===e.pointerType&&this._snappingEnabled&&1===this._pointerDownStates.size}),this.manipulators.add(this._manipulator),this._manipulator.grabbable="point"!==this.geometryType,this.handles.add([this._createManipulatorDragPipeline(this._manipulator),this._manipulator.events.on("immediate-click",e=>this._onImmediateClick(e)),this._manipulator.events.on("immediate-double-click",e=>this._onImmediateDoubleClick(e))])}destroy(){this._editGeometryOperations=Object(o.d)(this._editGeometryOperations),this._frameTask=Object(o.s)(this._frameTask)}get _snappingEnabled(){return Object(o.k)(this.snappingManager)&&this.snappingManager.options.effectiveEnabled}get canRedo(){return this._editGeometryOperations.canRedo}get canUndo(){return this._editGeometryOperations.canUndo}get committedVertices(){return this._activeComponent.vertices.map(e=>this.coordinateHelper.vectorToArray(e.pos))}set drawingMode(e){this._set("drawingMode",null!=e?e:"click")}get hasStagedVertex(){return Object(o.k)(this._stagedVertex)}get interactive(){return this._manipulator.interactive}set interactive(e){this._manipulator.interactive=e}get isCompleted(){return this._createOperationCompleted}get numCommittedVertices(){return this._activeComponent.vertices.length}get numVertices(){return Object(o.k)(this._stagedVertex)?this._activeComponent.vertices.length+1:this._activeComponent.vertices.length}get spatialReference(){return this.view.spatialReference}get stagedVertex(){return this._stagedVertex}set stagedVertex(e){if(Object(o.j)(e))this.discardStagedVertex()
else if(!Object(o.k)(this._stagedVertex)||!Object(d.b)(this._stagedVertex,e)){if(Object(o.j)(this._stagedVertex))this._stagedVertex=Object(s.a)(e)
else{if(Object(d.b)(this._stagedVertex,e))return
this._stagedVertex.x=e.x,this._stagedVertex.y=e.y,this._stagedVertex.z=e.z,this._stagedVertex.m=e.m,this._stagedVertex.hasZ=e.hasZ,this._stagedVertex.hasM=e.hasM,this._stagedVertex.spatialReference=e.spatialReference}this.emit("cursor-update",{updated:null,vertices:[{componentIndex:0,vertexIndex:this._activeComponent.vertices.length,coordinates:this.coordinateHelper.pointToArray(e)}],operation:"apply",type:"vertex-update"})}}get updating(){return this.updatingHandles.updating}get vertices(){const e=this.committedVertices
return Object(o.k)(this._stagedVertex)&&e.push(this.coordinateHelper.pointToArray(this._stagedVertex)),e}cancel(){this.complete({aborted:!0})}commitStagedVertex(){if(this._snappingTask=Object(o.a)(this._snappingTask),Object(o.k)(this._stagedVertex)){const e=this._stagedVertex
this._stagedVertex=null,this._editGeometryOperations.appendVertex(this.coordinateHelper.pointToVector(e))}}complete(e){const t=e&&e.aborted||!1
Object(o.a)(this._snappingTask),Object(o.k)(this.snappingManager)&&this.snappingManager.doneSnapping(),"segment"===this.geometryType||"point"===this.geometryType?this.commitStagedVertex():this.discardStagedVertex()
const n="multipoint"===this.geometryType&&0===this.numVertices||"polyline"===this.geometryType&&this.numVertices<2||"polygon"===this.geometryType&&this.numVertices<3
this._createOperationCompleted=!n,(this.isCompleted||t)&&this.emit("complete",{vertices:this.vertices.map((e,t)=>({componentIndex:0,vertexIndex:t,coordinates:e})),aborted:t,type:"complete"})}discardStagedVertex(){this._stagedVertex=null}onInputEvent(e){switch(e.type){case"pointer-down":this._pointerDownStates.add(e.pointerId)
break
case"pointer-up":this._pointerDownStates.delete(e.pointerId)}switch(e.type){case"pointer-move":return this._onPointerMove(e)
case"hold":return this._onHold(e)}}redo(){this._editGeometryOperations.redo()}undo(){Object(o.k)(this.snappingManager)&&this.snappingManager.doneSnapping(),this._editGeometryOperations.undo()}_closeOnClickVertexIndex(e){const t=this._activeComponent
if("polygon"===this.geometryType&&t.vertices.length>2){if(this._vertexWithinPointerDistance(t.vertices[0].pos,e))return 0
if(this._vertexWithinPointerDistance(t.vertices[t.vertices.length-1].pos,e))return t.vertices.length-1}return null}_createManipulatorDragPipeline(e){switch(this.drawingMode){case"click":return this._createManipulatorDragPipelineClick(e)
case"freehand":return this._createManipulatorDragPipelineFreehand(e)
case"hybrid":return this._createManipulatorDragPipelineHybrid(e)}}_createManipulatorDragPipelineClick(e){return Object(b.e)(e,(e,t,n,r)=>{const i="touch"===r&&this._snappingEnabled
!this.isCompleted&&i&&(t.next(this._screenToMapDragEventStep()).next(e=>("start"===e.action&&(this.stagedVertex=e.mapStart,("segment"===this.geometryType||i&&0===this.numVertices)&&this.commitStagedVertex()),e)).next(this._snappingPipeline.createSnapDragEventPipelineStep({predicate:()=>i,cancel:n,snappingManager:this.snappingManager,snappingContext:new _.a({editGeometryOperations:this._editGeometryOperations,elevationInfo:this.elevationInfo,pointer:r,visualizer:this.snappingVisualizer}),updatingHandles:this.updatingHandles}),this._snappingPipeline.next).next(e=>(i&&(this.stagedVertex=e.mapEnd,"end"===e.action&&this.commitStagedVertex()),e)).next(e=>("end"===e.action&&("segment"!==this.geometryType&&"point"!==this.geometryType||this.complete()),e)),n.next(()=>{i&&Object(o.k)(this.snappingManager)&&this.snappingManager.doneSnapping()}))})}_createManipulatorDragPipelineFreehand(e){return Object(b.e)(e,(e,t)=>{this.isCompleted||t.next(this._screenToMapDragEventStep()).next(e=>("start"===e.action&&(Object(o.j)(this.stagedVertex)&&(this.stagedVertex=e.mapStart),"segment"===this.geometryType&&this.commitStagedVertex()),e)).next(e=>{switch(e.action){case"start":case"update":this.stagedVertex=e.mapEnd,"polygon"!==this.geometryType&&"polyline"!==this.geometryType||this.commitStagedVertex()
break
case"end":this.complete()}return e})})}_createManipulatorDragPipelineHybrid(e){return Object(b.e)(e,(e,t)=>{this.isCompleted||t.next(this._screenToMapDragEventStep()).next(e=>("start"===e.action&&(Object(o.j)(this.stagedVertex)&&(this.stagedVertex=e.mapStart),this.commitStagedVertex()),e)).next(e=>{switch(e.action){case"start":case"update":this.stagedVertex=e.mapEnd,"polygon"!==this.geometryType&&"polyline"!==this.geometryType||this.commitStagedVertex()
break
case"end":"segment"!==this.geometryType&&"point"!==this.geometryType||this.complete()}return e})})}_getDrawSurface(){if(Object(o.j)(this.elevationDrawSurface))return this.drawSurface
if(!this.coordinateHelper.hasZ)return this.elevationDrawSurface.defaultZ=null,this.elevationDrawSurface
let e=this.defaultZ,t=!1
Object(o.k)(this.elevationInfo)&&"absolute-height"===this.elevationInfo.mode&&(t=!0),Object(o.k)(this.snapToSceneEnabled)&&(t=this.snapToSceneEnabled),Object(o.k)(this.elevationInfo)&&"on-the-ground"===this.elevationInfo.mode&&(t=!1)
const n=this._activeComponent.vertices.length
return("segment"===this.geometryType||"polygon"===this.geometryType)&&n>0&&(e=this.coordinateHelper.getZ(this._activeComponent.vertices[0].pos),t=!1),t?this.drawSurface:(this.elevationDrawSurface.defaultZ=e,this.elevationDrawSurface)}_mapToScreen(e){return this._getDrawSurface().mapToScreen(e)}_onHold(e){Object(o.a)(this._snappingTask),"click"===this.drawingMode&&"touch"===e.pointerType&&this._snappingEnabled&&(this.stagedVertex=e.mapPoint),e.stopPropagation()}_onImmediateClick(e){if("mouse"===e.pointerType&&2===e.button||this._manipulator.dragging)return
const t=this._activeComponent,n=this._closeOnClickVertexIndex(e.screenPoint)
if(Object(o.k)(n))return e.stopPropagation(),this.discardStagedVertex(),void this.complete()
const r=this._screenToMap(e.screenPoint)
if(Object(o.k)(r))switch(this.drawingMode){case"freehand":"point"===this.geometryType&&(this.hasStagedVertex?this.commitStagedVertex():this._editGeometryOperations.appendVertex(this.coordinateHelper.pointToVector(r)),this.complete())
break
case"click":case"hybrid":this._snappingTask=Object(o.a)(this._snappingTask),this.hasStagedVertex?this.commitStagedVertex():this._editGeometryOperations.appendVertex(this.coordinateHelper.pointToVector(r)),("point"===this.geometryType||"segment"===this.geometryType&&2===t.vertices.length||"segment"===this.geometryType&&"hybrid"===this.drawingMode&&1===t.vertices.length)&&this.complete()}e.stopPropagation()}_onImmediateDoubleClick(e){this._manipulator.dragging||"point"===this.geometryType||(this.complete(),e.stopPropagation())}_onPointerMove(e){if(Object(o.a)(this._snappingTask),this._manipulator.dragging||this._pointerDownStates.has(e.pointerId)||this._manipulator.grabbing||!this._manipulator.interactive)return
const t=Object(l.f)(e.x,e.y),n=this._closeOnClickVertexIndex(t)
if(Object(o.k)(n)){this.discardStagedVertex()
const e={componentIndex:0,vertexIndex:n,coordinates:this.coordinateHelper.vectorToArray(this._activeComponent.vertices[n].pos)}
this.emit("cursor-update",{updated:null,vertices:[e],operation:"apply",type:"vertex-update"})}else{const n=this._screenToMap(t)
if(this._manipulator.cursor=Object(o.k)(n)?"crosshair":null,Object(o.k)(n))if(Object(o.k)(this.snappingManager)){const t=this.snappingManager,r=new _.a({editGeometryOperations:this._editGeometryOperations,elevationInfo:this.elevationInfo,pointer:e.pointerType,visualizer:this.snappingVisualizer})
this.stagedVertex=t.update(n,r),this._snappingTask=Object(c.h)(async e=>{const i=await this._frameTask.schedule(()=>t.snap(n,r,e),e)
i.valid&&await this._frameTask.schedule(()=>{this.stagedVertex=i.apply()},e)}),this.updatingHandles.addPromise(this._snappingTask.promise)}else this.stagedVertex=n}e.stopPropagation()}_screenToMap(e){return this._getDrawSurface().screenToMap(e)}_screenToMapDragEventStep(){let e=null
return t=>{if("start"===t.action&&(e=this._screenToMap(t.screenStart)),Object(o.j)(e))return null
const n=this._screenToMap(t.screenEnd)
return Object(o.k)(n)?{...t,mapStart:e,mapEnd:n}:null}}_vertexWithinPointerDistance(e,t){const n=this._mapToScreen(this.coordinateHelper.vectorToDehydratedPoint(e))
return!!Object(o.k)(n)&&function(e,t,n){const r=e.x-t.x,i=e.y-t.y
return r*r+i*i<=25}(n,t)}}
Object(r.a)([Object(u.b)()],j.prototype,"defaultZ",void 0),Object(r.a)([Object(u.b)({value:"click"})],j.prototype,"drawingMode",null),Object(r.a)([Object(u.b)({constructOnly:!0})],j.prototype,"elevationDrawSurface",void 0),Object(r.a)([Object(u.b)({constructOnly:!0})],j.prototype,"elevationInfo",void 0),Object(r.a)([Object(u.b)({constructOnly:!0})],j.prototype,"geometryType",void 0),Object(r.a)([Object(u.b)({constructOnly:!0})],j.prototype,"hasM",void 0),Object(r.a)([Object(u.b)({constructOnly:!0})],j.prototype,"hasZ",void 0),Object(r.a)([Object(u.b)({constructOnly:!0})],j.prototype,"manipulators",void 0),Object(r.a)([Object(u.b)({constructOnly:!0})],j.prototype,"drawSurface",void 0),Object(r.a)([Object(u.b)({constructOnly:!0})],j.prototype,"snappingManager",void 0),Object(r.a)([Object(u.b)({constructOnly:!0})],j.prototype,"snappingVisualizer",void 0),Object(r.a)([Object(u.b)()],j.prototype,"snapToSceneEnabled",void 0),Object(r.a)([Object(u.b)({readOnly:!0})],j.prototype,"updating",null),Object(r.a)([Object(u.b)({constructOnly:!0})],j.prototype,"view",void 0),j=Object(r.a)([Object(h.a)("esri.views.draw.DrawOperation")],j)},2429:function(e,t,n){"use strict"
n.r(t),n.d(t,"DrawGraphicTool2D",(function(){return O}))
var r=n(856),i=(n(870),n(663)),a=n(923),s=n(20),o=n(858),c=(n(353),n(77),n(859),n(857)),l=n(2250),u=(n(906),n(668)),h=n(1105)
const d=new u.default({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",effects:[{type:"CIMGeometricEffectDashes",dashTemplate:[3.75,3.75],lineDashEnding:"HalfPattern",controlPointEnding:"NoConstraint"}],enable:!0,capStyle:"Butt",joinStyle:"Round",miterLimit:10,width:1.6,color:[255,255,255,255]},{type:"CIMSolidStroke",enable:!0,capStyle:"Butt",joinStyle:"Round",miterLimit:10,width:2,color:[0,0,0,255]}]}}}),p=new h.a({style:"circle",size:6,color:[127,127,127,1],outline:{color:[50,50,50],width:1}}),m=new h.a({style:"circle",size:6,color:[255,127,0,1],outline:{color:[50,50,50],width:1}})
var f=n(2201),b=n(2202),g=n(2185),y=n(866),_=n(889)
let O=class extends f.a{constructor(e){super(e),this._visualElementGraphics={outline:null,regularVertices:null,activeVertex:null},this.activeFillSymbol=null,this.type="draw-2d",this._visualElementSymbols={outline:Object(s.u)(e.activeLineSymbol,d),regularVertices:Object(s.u)(e.regularVerticesSymbol,p),activeVertex:Object(s.u)(e.activeVertexSymbol,m),fill:Object(s.t)(e.activeFillSymbol)}}normalizeCtorArgs(e){const t={...e}
return delete t.activeFillSymbol,delete t.activeVertexSymbol,delete t.regularVerticesSymbol,delete t.activeLineSymbol,t}initializeGraphic(e){return Object(s.k)(this._visualElementSymbols.fill)&&(e.symbol=this._visualElementSymbols.fill),null}makeDrawOperation(){const e=this.view
return new b.a({view:e,manipulators:this.manipulators,geometryType:Object(f.b)(this.geometryType),drawingMode:this.mode,hasZ:this.hasZ,defaultZ:this.defaultZ,snapToSceneEnabled:this.snapToScene,drawSurface:new g.b(e),hasM:!1,snappingManager:this.snappingManager,snappingVisualizer:new l.a(this.internalGraphicsLayer)})}onActiveVertexChanged(e){if("point"===this.geometryType)return null
const[t,n]=e,r=new y.a({x:t,y:n,spatialReference:this.drawOperation.spatialReference})
return Object(s.k)(this._visualElementGraphics.activeVertex)?(this._visualElementGraphics.activeVertex.geometry=r,null):(this._visualElementGraphics.activeVertex=new i.default({geometry:r,symbol:this._visualElementSymbols.activeVertex,attributes:{displayOrder:2}}),this.internalGraphicsLayer.add(this._visualElementGraphics.activeVertex),this.internalGraphicsLayer.graphics.sort(v),Object(a.c)(()=>{Object(s.k)(this._visualElementGraphics.activeVertex)&&(this.internalGraphicsLayer.remove(this._visualElementGraphics.activeVertex),this._visualElementGraphics.activeVertex=Object(s.d)(this._visualElementGraphics.activeVertex))}))}onOutlineChanged(e){const t=e.clone()
if("polyline"===t.type){const e=t.paths[t.paths.length-1]
e.splice(0,e.length-2)}return Object(s.k)(this._visualElementGraphics.outline)?(this._visualElementGraphics.outline.geometry=t,null):(this._visualElementGraphics.outline=new i.default({geometry:t,symbol:this._visualElementSymbols.outline,attributes:{displayOrder:0}}),this.internalGraphicsLayer.add(this._visualElementGraphics.outline),this.internalGraphicsLayer.graphics.sort(v),Object(a.c)(()=>{Object(s.k)(this._visualElementGraphics.outline)&&(this.internalGraphicsLayer.remove(this._visualElementGraphics.outline),this._visualElementGraphics.outline=Object(s.d)(this._visualElementGraphics.outline))}))}onRegularVerticesChanged(e){const t=new _.a({points:e,spatialReference:this.drawOperation.spatialReference})
return Object(s.k)(this._visualElementGraphics.regularVertices)?(this._visualElementGraphics.regularVertices.geometry=t,null):(this._visualElementGraphics.regularVertices=new i.default({geometry:t,symbol:this._visualElementSymbols.regularVertices,attributes:{displayOrder:1}}),this.internalGraphicsLayer.add(this._visualElementGraphics.regularVertices),this.internalGraphicsLayer.graphics.sort(v),Object(a.c)(()=>{Object(s.k)(this._visualElementGraphics.regularVertices)&&(this.internalGraphicsLayer.remove(this._visualElementGraphics.regularVertices),this._visualElementGraphics.regularVertices=Object(s.d)(this._visualElementGraphics.regularVertices))}))}}
function v(e,t){var n,r,i,a
return(null!=(n=null==(r=e.attributes)?void 0:r.displayOrder)?n:-1/0)-(null!=(i=null==(a=t.attributes)?void 0:a.displayOrder)?i:-1/0)}Object(r.a)([Object(o.b)()],O.prototype,"activeFillSymbol",void 0),Object(r.a)([Object(o.b)({readOnly:!0})],O.prototype,"type",void 0),Object(r.a)([Object(o.b)({constructOnly:!0,nonNullable:!0})],O.prototype,"view",void 0),O=Object(r.a)([Object(c.a)("esri.views.2d.interactive.draw.DrawGraphicTool2D")],O)},672:function(e,t,n){"use strict"
n.r(t),n.d(t,"buffer",(function(){return S})),n.d(t,"clip",(function(){return o})),n.d(t,"contains",(function(){return l})),n.d(t,"convexHull",(function(){return v})),n.d(t,"crosses",(function(){return u})),n.d(t,"cut",(function(){return c})),n.d(t,"densify",(function(){return L})),n.d(t,"difference",(function(){return j})),n.d(t,"disjoint",(function(){return b})),n.d(t,"distance",(function(){return h})),n.d(t,"equals",(function(){return d})),n.d(t,"extendedSpatialReferenceInfo",(function(){return s})),n.d(t,"flipHorizontal",(function(){return V})),n.d(t,"flipVertical",(function(){return G})),n.d(t,"generalize",(function(){return P})),n.d(t,"geodesicArea",(function(){return U})),n.d(t,"geodesicBuffer",(function(){return M})),n.d(t,"geodesicDensify",(function(){return F})),n.d(t,"geodesicLength",(function(){return z})),n.d(t,"intersect",(function(){return E})),n.d(t,"intersects",(function(){return p})),n.d(t,"isSimple",(function(){return _})),n.d(t,"nearestCoordinate",(function(){return R})),n.d(t,"nearestVertex",(function(){return k})),n.d(t,"nearestVertices",(function(){return I})),n.d(t,"offset",(function(){return w})),n.d(t,"overlaps",(function(){return g})),n.d(t,"planarArea",(function(){return N})),n.d(t,"planarLength",(function(){return D})),n.d(t,"relate",(function(){return y})),n.d(t,"rotate",(function(){return C})),n.d(t,"simplify",(function(){return O})),n.d(t,"symmetricDifference",(function(){return x})),n.d(t,"touches",(function(){return m})),n.d(t,"union",(function(){return T})),n.d(t,"within",(function(){return f}))
var r=n(1315),i=n(1316)
function a(e){return Array.isArray(e)?e[0].spatialReference:e&&e.spatialReference}function s(e){return r.G.extendedSpatialReferenceInfo(e)}function o(e,t){return r.G.clip(i.hydratedAdapter,a(e),e,t)}function c(e,t){return r.G.cut(i.hydratedAdapter,a(e),e,t)}function l(e,t){return r.G.contains(i.hydratedAdapter,a(e),e,t)}function u(e,t){return r.G.crosses(i.hydratedAdapter,a(e),e,t)}function h(e,t,n){return r.G.distance(i.hydratedAdapter,a(e),e,t,n)}function d(e,t){return r.G.equals(i.hydratedAdapter,a(e),e,t)}function p(e,t){return r.G.intersects(i.hydratedAdapter,a(e),e,t)}function m(e,t){return r.G.touches(i.hydratedAdapter,a(e),e,t)}function f(e,t){return r.G.within(i.hydratedAdapter,a(e),e,t)}function b(e,t){return r.G.disjoint(i.hydratedAdapter,a(e),e,t)}function g(e,t){return r.G.overlaps(i.hydratedAdapter,a(e),e,t)}function y(e,t,n){return r.G.relate(i.hydratedAdapter,a(e),e,t,n)}function _(e){return r.G.isSimple(i.hydratedAdapter,a(e),e)}function O(e){return r.G.simplify(i.hydratedAdapter,a(e),e)}function v(e,t=!1){return r.G.convexHull(i.hydratedAdapter,a(e),e,t)}function j(e,t){return r.G.difference(i.hydratedAdapter,a(e),e,t)}function x(e,t){return r.G.symmetricDifference(i.hydratedAdapter,a(e),e,t)}function E(e,t){return r.G.intersect(i.hydratedAdapter,a(e),e,t)}function T(e,t=null){return r.G.union(i.hydratedAdapter,a(e),e,t)}function w(e,t,n,s,o,c){return r.G.offset(i.hydratedAdapter,a(e),e,t,n,s,o,c)}function S(e,t,n,s=!1){return r.G.buffer(i.hydratedAdapter,a(e),e,t,n,s)}function M(e,t,n,s,o,c){return r.G.geodesicBuffer(i.hydratedAdapter,a(e),e,t,n,s,o,c)}function R(e,t,n=!0){return r.G.nearestCoordinate(i.hydratedAdapter,a(e),e,t,n)}function k(e,t){return r.G.nearestVertex(i.hydratedAdapter,a(e),e,t)}function I(e,t,n,s){return r.G.nearestVertices(i.hydratedAdapter,a(e),e,t,n,s)}function A(e){return"xmin"in e?"center"in e?e.center:null:"x"in e?e:"extent"in e?e.extent.center:null}function C(e,t,n){var i
if(null==e)throw new Error("Illegal Argument Exception")
const a=e.spatialReference
if(null==(n=null!=(i=n)?i:A(e)))throw new Error("Illegal Argument Exception")
const s=e.constructor.fromJSON(r.G.rotate(e,t,n))
return s.spatialReference=a,s}function V(e,t){var n
if(null==e)throw new Error("Illegal Argument Exception")
const i=e.spatialReference
if(null==(t=null!=(n=t)?n:A(e)))throw new Error("Illegal Argument Exception")
const a=e.constructor.fromJSON(r.G.flipHorizontal(e,t))
return a.spatialReference=i,a}function G(e,t){var n
if(null==e)throw new Error("Illegal Argument Exception")
const i=e.spatialReference
if(null==(t=null!=(n=t)?n:A(e)))throw new Error("Illegal Argument Exception")
const a=e.constructor.fromJSON(r.G.flipVertical(e,t))
return a.spatialReference=i,a}function P(e,t,n,s){return r.G.generalize(i.hydratedAdapter,a(e),e,t,n,s)}function L(e,t,n){return r.G.densify(i.hydratedAdapter,a(e),e,t,n)}function F(e,t,n,s=0){return r.G.geodesicDensify(i.hydratedAdapter,a(e),e,t,n,s)}function N(e,t){return r.G.planarArea(i.hydratedAdapter,a(e),e,t)}function D(e,t){return r.G.planarLength(i.hydratedAdapter,a(e),e,t)}function U(e,t,n){return r.G.geodesicArea(i.hydratedAdapter,a(e),e,t,n)}function z(e,t,n){return r.G.geodesicLength(i.hydratedAdapter,a(e),e,t,n)}},992:function(e,t,n){"use strict"
n.d(t,"a",(function(){return A})),n.d(t,"b",(function(){return x})),n.d(t,"c",(function(){return _})),n.d(t,"d",(function(){return y})),n.d(t,"e",(function(){return I}))
var r=n(856),i=n(862),a=n(885),s=n(177),o=n(20),c=n(1501),l=n(961),u=n(861),h=n(892),d=n(1128),p=n(858),m=(n(353),n(77),n(859),n(857)),f=n(1286),b=n(1295)
const g=s.a.getLogger("esri.views.support.Scheduler")
function y(e){return new R.Scheduler({nowFunc:e})}var _,O;(O=_||(_={})).RESOURCE_CONTROLLER="schedule",O.SLIDE="slide",O.STREAM_DATA_LOADER="stream loader",O.ELEVATION_QUERY="elevation query",O.TERRAIN_SURFACE="terrain",O.SURFACE_GEOMETRY_UPDATES="surface geometry updates",O.GRAPHICS_CORE="Graphics3D",O.I3S_CONTROLLER="I3S",O.POINT_CLOUD_LAYER="point cloud",O.FEATURE_TILE_FETCHER="feature fetcher",O.OVERLAY="overlay",O.STAGE="stage",O.GRAPHICS_DECONFLICTOR="graphics deconflictor",O.FILTER_VISIBILITY="Graphics3D filter visibility",O.SCALE_VISIBILITY="Graphics3D scale visibility",O.FRUSTUM_VISIBILITY="Graphics3D frustum visibility",O.POINT_OF_INTEREST_FREQUENT="POI frequent",O.POINT_OF_INTEREST_INFREQUENT="POI infrequent",O.LABELER="labeler",O.FEATURE_QUERY_ENGINE="feature query",O.FEATURE_TILE_TREE="feature tile tree",O.FEATURE_TILE_TREE_ACTIVE="fast feature tile tree",O.ELEVATION_ALIGNMENT="elevation alignment",O.TEXT_TEXTURE_ATLAS="text texture atlas",O.TEXTURE_UNLOAD="texture unload",O.LINE_OF_SIGHT_TOOL="line of sight tool",O.LINE_OF_SIGHT_TOOL_INTERACTIVE="interactive line of sight tool",O.ELEVATION_PROFILE="elevation profile",O.SNAPPING="snapping",O.SHADOW_ACCUMULATOR="shadow accumulator",O.CLOUDS_GENERATOR="cloud generator",O[O.TEST_PRIO=1]="TEST_PRIO"
const v=new Map([[_.RESOURCE_CONTROLLER,0],[_.SLIDE,0],[_.STREAM_DATA_LOADER,0],[_.ELEVATION_QUERY,0],[_.TERRAIN_SURFACE,1],[_.SURFACE_GEOMETRY_UPDATES,1],[_.GRAPHICS_CORE,2],[_.I3S_CONTROLLER,2],[_.POINT_CLOUD_LAYER,2],[_.FEATURE_TILE_FETCHER,2],[_.OVERLAY,4],[_.STAGE,4],[_.GRAPHICS_DECONFLICTOR,4],[_.FILTER_VISIBILITY,4],[_.SCALE_VISIBILITY,4],[_.FRUSTUM_VISIBILITY,4],[_.POINT_OF_INTEREST_FREQUENT,6],[_.POINT_OF_INTEREST_INFREQUENT,30],[_.LABELER,8],[_.FEATURE_QUERY_ENGINE,8],[_.FEATURE_TILE_TREE,16],[_.FEATURE_TILE_TREE_ACTIVE,0],[_.ELEVATION_ALIGNMENT,12],[_.TEXT_TEXTURE_ATLAS,12],[_.CLOUDS_GENERATOR,12],[_.TEXTURE_UNLOAD,12],[_.LINE_OF_SIGHT_TOOL,16],[_.LINE_OF_SIGHT_TOOL_INTERACTIVE,0],[_.SNAPPING,0],[_.SHADOW_ACCUMULATOR,30]])
function j(e){return v.has(e)?v.get(e):"number"==typeof e?e:1}var x
!function(e){e[e.ANIMATING=0]="ANIMATING",e[e.INTERACTING=1]="INTERACTING",e[e.IDLE=2]="IDLE"}(x||(x={}))
const E=Object(d.a)(6.5),T=Object(d.a)(1),w=Object(d.a)(30),S=Object(d.a)(1e3/30),M=Object(d.a)(100)
var R,k
!function(e){let t=class extends i.a{constructor(e){super(e),this.updating=!0,this._microTaskQueued=!1,this.performanceInfo={total:new c.a("total"),tasks:new Map},this._frameTaskTimes=new Map,this._budget=null,this._state=x.INTERACTING,this._tasks=new l.a,this._runQueue=new l.a,this._load=0,this._idleStateCallbacks=new l.a,this._idleUpdatesStartFired=!1,this._maxReschedule=C,this._forceTask=!1,this._debug=!1,this._debugHandle=Object(h.e)(()=>b.a.SCHEDULER_LOG_SLOW_TASKS,e=>this._debug=e,h.a),this._budget=new s(e.nowFunc)
for(const e of Object.keys(_))this.performanceInfo.tasks.set(_[e],new c.a(_[e]))
let t
const n=this
this._test={get state(){return Object(o.u)(t,n._state)},set state(e){t=e},FRAME_SAFETY_BUDGET:E,INTERACTING_BUDGET:S,IDLE_BUDGET:M,get budget(){return n._budget.budget},usedBudget:0,setBudget:e=>n._budget=e,updateTask:e=>this._updateTask(e),getState:e=>this._getState(e),getRuntime:e=>this._getRuntime(e),frameTaskTimes:this._frameTaskTimes,resetRuntimes:()=>this._resetRuntimes(),getRunning:()=>this._getRunning()}}destroy(){this._tasks.toArray().forEach(e=>e.remove()),this._tasks.clear(),Object(o.s)(this._debugHandle),this._microTaskQueued=!1,this.updating=!1}activate(){this._budget.done||this._microTaskQueued||(this._microTaskQueued=!0,queueMicrotask(()=>{this._microTaskQueued&&(this._microTaskQueued=!1,this._budget.done||(this._maxReschedule=C,this._schedule(),this.frame()))}))}registerTask(e,t){const r=j(e),i=new n(this,e,t,r)
return this._tasks.push(i),this.performanceInfo.tasks.has(e)||this.performanceInfo.tasks.set(e,new c.a(e)),i}registerIdleStateCallbacks(e,t){const n={idleBegin:e,idleEnd:t}
this._idleStateCallbacks.push(n),this.state===x.IDLE&&this._idleUpdatesStartFired&&n.idleBegin()
const r=this
return{remove:()=>this._removeIdleStateCallbacks(n),set idleBegin(e){r._idleUpdatesStartFired&&(n.idleEnd(),r._state===x.IDLE&&e()),n.idleBegin=e},set idleEnd(e){n.idleEnd=e}}}get now(){return this.nowFunc()}get load(){return this._load}set state(e){this._state!==e&&(this._state=e,this.state!==x.IDLE&&this._idleUpdatesStartFired&&(this._idleUpdatesStartFired=!1,this._idleStateCallbacks.forAll(e=>e.idleEnd())))}get state(){return Object(o.j)(this._test.state)?this._state:this._test.state}updateBudget(e){this._test.usedBudget=0
let t=E,n=e.frameDuration,r=T
switch(this.state){case x.IDLE:t=Object(d.a)(0),n=Object(d.a)(Math.max(M,e.frameDuration)),r=w
break
case x.INTERACTING:n=Object(d.a)(Math.max(S,e.frameDuration))
case x.ANIMATING:}return n=Object(d.a)(n-e.elapsedFrameTime-t),this.state!==x.IDLE&&n<T&&!this._forceTask?(this._forceTask=!0,!1):(n=Object(d.a)(Math.max(n,r)),this._budget.reset(n,this.state),this._maxReschedule=C,this._updateLoad(),this._schedule())}frame(){switch(this._forceTask=!1,this._microTaskQueued=!1,this.state){case x.IDLE:this._idleUpdatesStartFired||(this._idleUpdatesStartFired=!0,this._idleStateCallbacks.forAll(e=>e.idleBegin())),this._runIdle()
break
case x.INTERACTING:this._runInteracting()
break
default:this._runAnimating()}this._test.usedBudget=this._budget.elapsed}stopFrame(){this._budget.reset(Object(d.a)(0),this._state),this._budget.madeProgress()}_removeIdleStateCallbacks(e){this._idleUpdatesStartFired&&e.idleEnd(),this._idleStateCallbacks.removeUnordered(e)}removeTask(e){this._tasks.removeUnordered(e),this._runQueue.removeUnordered(e)}_updateTask(e){this._tasks.forAll(t=>{t.name===e&&t.setPriority(e)})}_getState(e){if(this._runQueue.some(t=>t.name===e))return k.SCHEDULED
let t=k.IDLE
return this._tasks.forAll(n=>{n.name===e&&n.needsUpdate&&(n.schedulePriority<=1?t=k.READY:t!==k.READY&&(t=k.WAITING))}),t}_getRuntime(e){let t=0
return this._tasks.forAll(n=>{n.name===e&&(t+=n.runtime)}),t}_resetRuntimes(){this._tasks.forAll(e=>e.runtime=0)}_getRunning(){const e=new Map
if(this._tasks.forAll(t=>{t.needsUpdate&&e.set(t.name,(e.get(t.name)||0)+1)}),0===e.size)return null
let t=""
return e.forEach((e,n)=>{t+=e>1?` ${e}x ${n}`:" "+n}),t}_runIdle(){this._run()}_runInteracting(){this._run()}_runAnimating(){this._run()}_updateLoad(){const e=this._tasks.reduce((e,t)=>t.needsUpdate?++e:e,0)
this._load=.9*this._load+e*(1-.9)}_schedule(){if(this._maxReschedule<=0)return!1
for(this._runQueue.filterInPlace(e=>!!e.needsUpdate||(e.schedulePriority=e.basePriority,!1)),this._tasks.forAll(e=>{0===e.basePriority&&e.needsUpdate&&!this._runQueue.some(t=>t===e)&&this._runQueue.unshift(e)});0===this._runQueue.length;){let e=!1,t=0
if(this._tasks.forAll(n=>{n.needsUpdate&&0!==n.schedulePriority&&0!==n.basePriority&&(e=!0,t=Math.max(t,n.basePriority),1===n.schedulePriority?(n.schedulePriority=0,this._runQueue.push(n)):--n.schedulePriority)}),!e)return this.updating=!1,!1
this._maxReschedule===C&&(this._maxReschedule=t),--this._maxReschedule}return this.updating=!0,!0}_run(){const e=this._budget.now()
this._startFrameTaskTimes()
do{for(;this._runQueue.length>0;){const t=this._budget.now(),n=this._runQueue.pop()
this._budget.resetProgress()
try{n.task.runTask(this._budget)}catch(e){g.error(`Exception in task "${n.name}"`,e)}n.schedulePriority=n.basePriority
const r=this._budget.now()-t
if(n.runtime+=r,this._frameTaskTimes.set(n.priority,this._frameTaskTimes.get(n.priority)+r),this._debug&&this._budget.elapsed>2*this._budget.budget&&console.log("Task",n.name,"used",this._budget.elapsed,"of max",this._budget.budget,"ms"),this._budget.remaining<=0)return this.updating=this._tasks.some(e=>e.needsUpdate),void this._recordFrameTaskTimes(this._budget.now()-e)}}while(this._schedule())
this.updating=this._tasks.some(e=>e.needsUpdate),this._recordFrameTaskTimes(this._budget.now()-e)}_startFrameTaskTimes(){for(const e of Object.keys(_))this._frameTaskTimes.set(_[e],0)}_recordFrameTaskTimes(e){this._frameTaskTimes.forEach((e,t)=>this.performanceInfo.tasks.get(t).record(e)),this.performanceInfo.total.record(e)}get test(){return this._test}}
Object(r.a)([Object(p.b)()],t.prototype,"updating",void 0),Object(r.a)([Object(p.b)()],t.prototype,"nowFunc",void 0),t=Object(r.a)([Object(m.a)("esri.views.support.Scheduler")],t),e.Scheduler=t
let n=class extends i.a{constructor(e,t,n,r){super({}),this._scheduler=e,this.name=t,this._basePriority=r,this.runtime=0,this._queue=new f.a,this._handles=new a.a,this.schedulePriority=this._basePriority,this.task=Object(o.k)(n)?n:this._queue,this._handles.add(Object(h.f)(()=>this.task.running,()=>e.activate()))}get updating(){return this._queue.running}normalizeCtorArgs(){return{}}remove(){this.processQueue(I),this._scheduler.removeTask(this),this.schedule=A.schedule,this.reschedule=A.reschedule,this._handles.destroy()}get basePriority(){return this._basePriority}setPriority(e){this.name=e
const t=j(e)
0!==this._basePriority&&0===this.schedulePriority||(this.schedulePriority=t),this._basePriority=t}get priority(){return this.name}set priority(e){this.setPriority(e)}get needsUpdate(){return this.updating||this.task.running}schedule(e,t,n){return this._queue.push(e,t,n)}reschedule(e,t,n){return this._queue.unshift(e,t,n)}processQueue(e){this._queue.runTask(e)}}
Object(r.a)([Object(p.b)({constructOnly:!0})],n.prototype,"task",void 0),Object(r.a)([Object(p.b)({readOnly:!0})],n.prototype,"updating",null),n=Object(r.a)([Object(m.a)("esri.views.support.SchedulerTask")],n)
class s{constructor(e){this.now=e,this._begin=0,this._budget=0,this._state=x.IDLE,this._didWork=!1,this._enabled=!0}run(e){return!this.done&&(!0===e()&&(this._didWork=!0),!0)}get done(){return this._didWork&&this.elapsed>=this._budget&&this._enabled}get budget(){return this._budget}madeProgress(){this._didWork=!0}get state(){return this._state}get enabled(){return this._enabled}set enabled(e){this._enabled=e}reset(e,t){this._begin=this.now(),this._budget=e,this._state=t,this._didWork=!1}get remaining(){return Math.max(this._budget-this.elapsed,0)}get elapsed(){return this.now()-this._begin}resetProgress(){this._didWork=!1}get hasProgressed(){return this._didWork}}e.Budget=s}(R||(R={})),function(e){e.SCHEDULED="s",e.READY="r",e.WAITING="w",e.IDLE="i"}(k||(k={}))
const I=(()=>{const e=new R.Budget(()=>performance.now())
return e.enabled=!1,e})(),A=new class{remove(){}processQueue(){}schedule(e,t,n){try{if(Object(u.n)(t)){const e=Object(u.e)()
return n?Promise.resolve(n(e)):Promise.reject(e)}return Object(u.z)(e(I))}catch(e){return Promise.reject(e)}}reschedule(e,t,n){return this.schedule(e,t,n)}},C=Number.MAX_SAFE_INTEGER}}])
