(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[173,278],{1010:function(t,e,r){"use strict"
r.d(e,"a",(function(){return a})),r.d(e,"b",(function(){return s}))
var n=r(856),o=r(857)
let i=0
const s=t=>{let e=class extends t{constructor(...t){super(...t),Object.defineProperty(this,"uid",{writable:!1,configurable:!1,value:Date.now().toString(16)+"-object-"+i++})}}
return e=Object(n.a)([Object(o.a)("esri.core.Identifiable")],e),e}
let a=class extends(s(class{})){}
a=Object(n.a)([Object(o.a)("esri.core.Identifiable")],a)},1072:function(t,e,r){"use strict"
r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return o}))
var n=r(878)
function o(t,e,r=n.a){return e||(e=new r),e===t||(e.removeAll(),(o=t)&&(Array.isArray(o)||"items"in o&&Array.isArray(o.items))?e.addMany(t):t&&e.add(t)),e
var o}function i(t){return t}},1076:function(t,e,r){"use strict"
r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return i}))
var n=r(859)
function o(t){const e=Object(n.e)(100*(1-t))
return Math.max(0,Math.min(e,100))}function i(t){const e=1-t/100
return Math.max(0,Math.min(e,1))}},661:function(t,e,r){"use strict"
r.r(e),r.d(e,"default",(function(){return S}))
var n,o=r(856),i=r(353),s=r(178),a=r(20),u=r(858),l=(r(859),r(857)),c=r(864),h=r(658),p=r(875),d=r(866),f=r(659),b=r(968),y=r(928),m=r(916),O=r(929),j=r(904),g=r(662),v=r(909)
function M(t){return!Array.isArray(t[0])}let x=n=class extends p.a{constructor(...t){super(...t),this.rings=[],this.type="polygon"}static fromExtent(t){const e=t.clone().normalize(),r=t.spatialReference
let o=!1,i=!1
for(const t of e)t.hasZ&&(o=!0),t.hasM&&(i=!0)
const s={rings:e.map((function(t){const e=[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]
if(o&&t.hasZ){const r=t.zmin+.5*(t.zmax-t.zmin)
for(let t=0;t<e.length;t++)e[t].push(r)}if(i&&t.hasM){const r=t.mmin+.5*(t.mmax-t.mmin)
for(let t=0;t<e.length;t++)e[t].push(r)}return e})),spatialReference:r}
return o&&(s.hasZ=!0),i&&(s.hasM=!0),new n(s)}normalizeCtorArgs(t,e){let r,n,o=null,i=null
return t&&!Array.isArray(t)?(o=t.rings?t.rings:null,e||(t.spatialReference?e=t.spatialReference:t.rings||(e=t)),r=t.hasZ,n=t.hasM):o=t,o=o||[],e=e||f.default.WGS84,o.length&&o[0]&&null!=o[0][0]&&"number"==typeof o[0][0]&&(o=[o]),i=o[0]&&o[0][0],i&&(void 0===r&&void 0===n?(r=i.length>2,n=i.length>3):void 0===r?r=n?i.length>3:i.length>2:void 0===n&&(n=r?i.length>3:i.length>2)),{rings:o,spatialReference:e,hasZ:r,hasM:n}}get cache(){return this.commitProperty("rings"),this.commitProperty("hasZ"),this.commitProperty("hasM"),this.commitProperty("spatialReference"),{}}get centroid(){const t=Object(b.b)(this)
if(!t||isNaN(t[0])||isNaN(t[1])||this.hasZ&&isNaN(t[2]))return null
const e=new d.a
return e.x=t[0],e.y=t[1],e.spatialReference=this.spatialReference,this.hasZ&&(e.z=t[2]),e}get extent(){const{spatialReference:t}=this,e=Object(O.b)(this)
if(!e)return null
const r=new h.default(e)
return r.spatialReference=t,r}get isSelfIntersecting(){return Object(j.d)(this.rings)}writeRings(t,e){e.rings=Object(s.a)(this.rings)}addRing(t){if(!t)return
const e=this.rings,r=e.length
if(M(t)){const n=[]
for(let e=0,r=t.length;e<r;e++)n[e]=t[e].toArray()
e[r]=n}else e[r]=t.concat()
return this.notifyChange("rings"),this}clone(){const t=new n
return t.spatialReference=this.spatialReference,t.rings=Object(s.a)(this.rings),t.hasZ=this.hasZ,t.hasM=this.hasM,t}equals(t){if(this===t)return!0
if(Object(a.j)(t))return!1
const e=this.spatialReference,r=t.spatialReference
if(Object(a.k)(e)!==Object(a.k)(r))return!1
if(Object(a.k)(e)&&Object(a.k)(r)&&!e.equals(r))return!1
if(this.rings.length!==t.rings.length)return!1
const n=([t,e,r,n],[o,i,s,a])=>t===o&&e===i&&(null==r&&null==s||r===s)&&(null==n&&null==a||n===a)
for(let e=0;e<this.rings.length;e++){const r=this.rings[e],o=t.rings[e]
if(!Object(i.e)(r,o,n))return!1}return!0}contains(t){if(!t)return!1
const e=Object(g.project)(t,this.spatialReference)
return Object(y.g)(this,Object(a.k)(e)?e:t)}isClockwise(t){let e
return e=M(t)?t.map(t=>this.hasZ?this.hasM?[t.x,t.y,t.z,t.m]:[t.x,t.y,t.z]:[t.x,t.y]):t,Object(m.g)(e,this.hasM,this.hasZ)}getPoint(t,e){if(!this._validateInputs(t,e))return null
const r=this.rings[t][e],n=this.hasZ,o=this.hasM
return n&&!o?new d.a(r[0],r[1],r[2],void 0,this.spatialReference):o&&!n?new d.a(r[0],r[1],void 0,r[2],this.spatialReference):n&&o?new d.a(r[0],r[1],r[2],r[3],this.spatialReference):new d.a(r[0],r[1],this.spatialReference)}insertPoint(t,e,r){return this._validateInputs(t,e,!0)?(Object(v.a)(this,r),Array.isArray(r)||(r=r.toArray()),this.rings[t].splice(e,0,r),this.notifyChange("rings"),this):this}removePoint(t,e){if(!this._validateInputs(t,e))return null
const r=new d.a(this.rings[t].splice(e,1)[0],this.spatialReference)
return this.notifyChange("rings"),r}removeRing(t){if(!this._validateInputs(t,null))return null
const e=this.rings.splice(t,1)[0],r=this.spatialReference,n=e.map(t=>new d.a(t,r))
return this.notifyChange("rings"),n}setPoint(t,e,r){return this._validateInputs(t,e)?(Object(v.a)(this,r),Array.isArray(r)||(r=r.toArray()),this.rings[t][e]=r,this.notifyChange("rings"),this):this}_validateInputs(t,e,r=!1){if(null==t||t<0||t>=this.rings.length)return!1
if(null!=e){const n=this.rings[t]
if(r&&(e<0||e>n.length))return!1
if(!r&&(e<0||e>=n.length))return!1}return!0}toJSON(t){return this.write({},t)}}
Object(o.a)([Object(u.b)({readOnly:!0})],x.prototype,"cache",null),Object(o.a)([Object(u.b)({readOnly:!0})],x.prototype,"centroid",null),Object(o.a)([Object(u.b)({readOnly:!0})],x.prototype,"extent",null),Object(o.a)([Object(u.b)({readOnly:!0})],x.prototype,"isSelfIntersecting",null),Object(o.a)([Object(u.b)({type:[[[Number]]],json:{write:{isRequired:!0}}})],x.prototype,"rings",void 0),Object(o.a)([Object(c.a)("rings")],x.prototype,"writeRings",null),x=n=Object(o.a)([Object(l.a)("esri.geometry.Polygon")],x),x.prototype.toJSON.isDefaultToJSON=!0
const S=x},867:function(t,e,r){"use strict"
function n(){return[0,0,0]}function o(t){return[t[0],t[1],t[2]]}function i(t,e,r){return[t,e,r]}function s(t){const e=[0,0,0],r=Math.min(3,t.length)
for(let n=0;n<r;++n)e[n]=t[n]
return e}function a(t,e){return new Float64Array(t,e,3)}function u(){return i(1,1,1)}function l(){return i(1,0,0)}function c(){return i(0,1,0)}function h(){return i(0,0,1)}r.d(e,"a",(function(){return d})),r.d(e,"b",(function(){return y})),r.d(e,"c",(function(){return p})),r.d(e,"d",(function(){return o})),r.d(e,"e",(function(){return a})),r.d(e,"f",(function(){return n})),r.d(e,"g",(function(){return s})),r.d(e,"h",(function(){return i})),r.d(e,"i",(function(){return h}))
const p=[0,0,0],d=u(),f=l(),b=c(),y=h()
Object.freeze({__proto__:null,create:n,clone:o,fromValues:i,fromArray:s,createView:a,zeros:function(){return[0,0,0]},ones:u,unitX:l,unitY:c,unitZ:h,ZEROS:p,ONES:d,UNIT_X:f,UNIT_Y:b,UNIT_Z:y})},869:function(t,e,r){"use strict"
r.d(e,"a",(function(){return b})),r.d(e,"b",(function(){return O})),r.d(e,"c",(function(){return y})),r.d(e,"d",(function(){return c})),r.d(e,"e",(function(){return h})),r.d(e,"f",(function(){return p})),r.d(e,"g",(function(){return f})),r.d(e,"h",(function(){return d}))
var n=r(20),o=r(658),i=r(875),s=r(889),a=r(866),u=r(661),l=r(883)
function c(t){return void 0!==t.xmin&&void 0!==t.ymin&&void 0!==t.xmax&&void 0!==t.ymax}function h(t){return void 0!==t.points}function p(t){return void 0!==t.x&&void 0!==t.y}function d(t){return void 0!==t.paths}function f(t){return void 0!==t.rings}function b(t){return Object(n.j)(t)?null:t instanceof i.a?t:p(t)?a.a.fromJSON(t):d(t)?l.a.fromJSON(t):f(t)?u.default.fromJSON(t):h(t)?s.a.fromJSON(t):c(t)?o.default.fromJSON(t):null}function y(t){return t?p(t)?"esriGeometryPoint":d(t)?"esriGeometryPolyline":f(t)?"esriGeometryPolygon":c(t)?"esriGeometryEnvelope":h(t)?"esriGeometryMultipoint":null:null}const m={esriGeometryPoint:a.a,esriGeometryPolyline:l.a,esriGeometryPolygon:u.default,esriGeometryEnvelope:o.default,esriGeometryMultipoint:s.a}
function O(t){return t&&m[t]||null}},870:function(t,e,r){"use strict"
r.d(e,"c",(function(){return c}))
var n=r(859),o=r(658)
r.d(e,"a",(function(){return o.default}))
var i=r(875),s=r(889),a=r(866)
r.d(e,"b",(function(){return a.a}))
var u=r(661),l=r(883)
r(659),r(888),r(869)
const c={base:i.a,key:"type",typeMap:{extent:o.default,multipoint:s.a,point:a.a,polyline:l.a,polygon:u.default}}
Object(n.k)(c)},871:function(t,e,r){"use strict"
r.d(e,"a",(function(){return p})),r.d(e,"b",(function(){return d})),r.d(e,"c",(function(){return Z})),r.d(e,"d",(function(){return c})),r.d(e,"e",(function(){return h})),r.d(e,"f",(function(){return b})),r.d(e,"g",(function(){return _})),r.d(e,"h",(function(){return f})),r.d(e,"i",(function(){return u})),r.d(e,"j",(function(){return M})),r.d(e,"k",(function(){return v})),r.d(e,"l",(function(){return x})),r.d(e,"m",(function(){return l})),r.d(e,"n",(function(){return s})),r.d(e,"o",(function(){return m})),r.d(e,"p",(function(){return y})),r.d(e,"q",(function(){return Q})),r.d(e,"r",(function(){return I})),r.d(e,"s",(function(){return i})),r.d(e,"t",(function(){return S})),r.d(e,"u",(function(){return g})),r.d(e,"v",(function(){return j})),r.d(e,"w",(function(){return O})),r.d(e,"x",(function(){return w})),r.d(e,"y",(function(){return C})),r.d(e,"z",(function(){return a})),r.d(e,"A",(function(){return P})),r.d(e,"B",(function(){return E})),r.d(e,"C",(function(){return U})),r.d(e,"D",(function(){return T})),r.d(e,"E",(function(){return D})),r.d(e,"F",(function(){return N})),r.d(e,"G",(function(){return q}))
var n=r(867),o=r(893)
function i(t){const e=t[0],r=t[1],n=t[2]
return Math.sqrt(e*e+r*r+n*n)}function s(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function a(t,e,r,n){return t[0]=e,t[1]=r,t[2]=n,t}function u(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t}function l(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t[2]=e[2]-r[2],t}function c(t,e,r){return t[0]=e[0]*r[0],t[1]=e[1]*r[1],t[2]=e[2]*r[2],t}function h(t,e,r){return t[0]=e[0]/r[0],t[1]=e[1]/r[1],t[2]=e[2]/r[2],t}function p(t,e,r){return t[0]=Math.min(e[0],r[0]),t[1]=Math.min(e[1],r[1]),t[2]=Math.min(e[2],r[2]),t}function d(t,e,r){return t[0]=Math.max(e[0],r[0]),t[1]=Math.max(e[1],r[1]),t[2]=Math.max(e[2],r[2]),t}function f(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t}function b(t,e,r,n){return t[0]=e[0]+r[0]*n,t[1]=e[1]+r[1]*n,t[2]=e[2]+r[2]*n,t}function y(t,e){const r=e[0]-t[0],n=e[1]-t[1],o=e[2]-t[2]
return Math.sqrt(r*r+n*n+o*o)}function m(t,e){const r=e[0]-t[0],n=e[1]-t[1],o=e[2]-t[2]
return r*r+n*n+o*o}function O(t){const e=t[0],r=t[1],n=t[2]
return e*e+r*r+n*n}function j(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t}function g(t,e){const r=e[0],n=e[1],o=e[2]
let i=r*r+n*n+o*o
return i>0&&(i=1/Math.sqrt(i),t[0]=e[0]*i,t[1]=e[1]*i,t[2]=e[2]*i),t}function v(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function M(t,e,r){const n=e[0],o=e[1],i=e[2],s=r[0],a=r[1],u=r[2]
return t[0]=o*u-i*a,t[1]=i*s-n*u,t[2]=n*a-o*s,t}function x(t,e,r,n){const o=e[0],i=e[1],s=e[2]
return t[0]=o+n*(r[0]-o),t[1]=i+n*(r[1]-i),t[2]=s+n*(r[2]-s),t}function S(t,e,r){const n=e[0],o=e[1],i=e[2]
return t[0]=r[0]*n+r[4]*o+r[8]*i+r[12],t[1]=r[1]*n+r[5]*o+r[9]*i+r[13],t[2]=r[2]*n+r[6]*o+r[10]*i+r[14],t}function P(t,e,r){const n=e[0],o=e[1],i=e[2]
return t[0]=n*r[0]+o*r[3]+i*r[6],t[1]=n*r[1]+o*r[4]+i*r[7],t[2]=n*r[2]+o*r[5]+i*r[8],t}function w(t,e,r){const n=r[0],o=r[1],i=r[2],s=r[3],a=e[0],u=e[1],l=e[2]
let c=o*l-i*u,h=i*a-n*l,p=n*u-o*a,d=o*p-i*h,f=i*c-n*p,b=n*h-o*c
const y=2*s
return c*=y,h*=y,p*=y,d*=2,f*=2,b*=2,t[0]=a+c+d,t[1]=u+h+f,t[2]=l+p+b,t}function _(t,e,r,n){const o=[],i=[]
return o[0]=e[0]-r[0],o[1]=e[1]-r[1],o[2]=e[2]-r[2],i[0]=o[0]*Math.cos(n)-o[1]*Math.sin(n),i[1]=o[0]*Math.sin(n)+o[1]*Math.cos(n),i[2]=o[2],t[0]=i[0]+r[0],t[1]=i[1]+r[1],t[2]=i[2]+r[2],t}function q(t,e){s(G,t),s(A,e),g(G,G),g(A,A)
const r=v(G,A)
return r>1?0:r<-1?Math.PI:Math.acos(r)}const G=Object(n.f)(),A=Object(n.f)()
function I(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]}function N(t,e){if(t===e)return!0
const r=t[0],n=t[1],i=t[2],s=e[0],a=e[1],u=e[2]
return Math.abs(r-s)<=o.a*Math.max(1,Math.abs(r),Math.abs(s))&&Math.abs(n-a)<=o.a*Math.max(1,Math.abs(n),Math.abs(a))&&Math.abs(i-u)<=o.a*Math.max(1,Math.abs(i),Math.abs(u))}function C(t,e,r){const n=r[0]-e[0],o=r[1]-e[1],i=r[2]-e[2]
let s=n*n+o*o+i*i
return s>0?(s=1/Math.sqrt(s),t[0]=n*s,t[1]=o*s,t[2]=i*s,t):(t[0]=0,t[1]=0,t[2]=0,t)}const U=l,R=c,z=h,Q=y,D=m,E=i,T=O,Z=Object.freeze({__proto__:null,length:i,copy:s,set:a,add:u,subtract:l,multiply:c,divide:h,ceil:function(t,e){return t[0]=Math.ceil(e[0]),t[1]=Math.ceil(e[1]),t[2]=Math.ceil(e[2]),t},floor:function(t,e){return t[0]=Math.floor(e[0]),t[1]=Math.floor(e[1]),t[2]=Math.floor(e[2]),t},min:p,max:d,round:function(t,e){return t[0]=Math.round(e[0]),t[1]=Math.round(e[1]),t[2]=Math.round(e[2]),t},scale:f,scaleAndAdd:b,distance:y,squaredDistance:m,squaredLength:O,negate:j,inverse:function(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t},normalize:g,dot:v,cross:M,lerp:x,hermite:function(t,e,r,n,o,i){const s=i*i,a=s*(2*i-3)+1,u=s*(i-2)+i,l=s*(i-1),c=s*(3-2*i)
return t[0]=e[0]*a+r[0]*u+n[0]*l+o[0]*c,t[1]=e[1]*a+r[1]*u+n[1]*l+o[1]*c,t[2]=e[2]*a+r[2]*u+n[2]*l+o[2]*c,t},bezier:function(t,e,r,n,o,i){const s=1-i,a=s*s,u=i*i,l=a*s,c=3*i*a,h=3*u*s,p=u*i
return t[0]=e[0]*l+r[0]*c+n[0]*h+o[0]*p,t[1]=e[1]*l+r[1]*c+n[1]*h+o[1]*p,t[2]=e[2]*l+r[2]*c+n[2]*h+o[2]*p,t},random:function(t,e){e=e||1
const r=2*Object(o.b)()*Math.PI,n=2*Object(o.b)()-1,i=Math.sqrt(1-n*n)*e
return t[0]=Math.cos(r)*i,t[1]=Math.sin(r)*i,t[2]=n*e,t},transformMat4:S,transformMat3:P,transformQuat:w,rotateX:function(t,e,r,n){const o=[],i=[]
return o[0]=e[0]-r[0],o[1]=e[1]-r[1],o[2]=e[2]-r[2],i[0]=o[0],i[1]=o[1]*Math.cos(n)-o[2]*Math.sin(n),i[2]=o[1]*Math.sin(n)+o[2]*Math.cos(n),t[0]=i[0]+r[0],t[1]=i[1]+r[1],t[2]=i[2]+r[2],t},rotateY:function(t,e,r,n){const o=[],i=[]
return o[0]=e[0]-r[0],o[1]=e[1]-r[1],o[2]=e[2]-r[2],i[0]=o[2]*Math.sin(n)+o[0]*Math.cos(n),i[1]=o[1],i[2]=o[2]*Math.cos(n)-o[0]*Math.sin(n),t[0]=i[0]+r[0],t[1]=i[1]+r[1],t[2]=i[2]+r[2],t},rotateZ:_,angle:q,str:function(t){return"vec3("+t[0]+", "+t[1]+", "+t[2]+")"},exactEquals:I,equals:N,direction:C,sub:U,mul:R,div:z,dist:Q,sqrDist:D,len:E,sqrLen:T})},874:function(t,e,r){"use strict"
r.d(e,"a",(function(){return S})),r.d(e,"b",(function(){return b})),r.d(e,"c",(function(){return x})),r.d(e,"d",(function(){return y})),r.d(e,"e",(function(){return M})),r.d(e,"f",(function(){return a})),r.d(e,"g",(function(){return j})),r.d(e,"h",(function(){return p})),r.d(e,"i",(function(){return O})),r.d(e,"j",(function(){return m})),r.d(e,"k",(function(){return u})),r.d(e,"l",(function(){return h})),r.d(e,"m",(function(){return c})),r.d(e,"n",(function(){return s})),r.d(e,"o",(function(){return l})),r.d(e,"p",(function(){return d})),r.d(e,"q",(function(){return f})),r.d(e,"r",(function(){return v}))
var n=r(871),o=r(910)
const i=new Float32Array(1)
function s(t){--t
for(let e=1;e<32;e<<=1)t|=t>>e
return t+1}function a(t,e,r){return Math.min(Math.max(t,e),r)}function u(t){return 0==(t&t-1)}function l(t){return t--,t|=t>>1,t|=t>>2,t|=t>>4,t|=t>>8,t|=t>>16,++t}function c(t){return 10**Math.ceil(Math.LOG10E*Math.log(t))}function h(t,e,r){return t+(e-t)*r}function p(t){return t*Math.PI/180}function d(t){return 180*t/Math.PI}function f(t,e=1e-6){return(t<0?-1:1)/Math.max(Math.abs(t),e)}function b(t){return Math.acos(a(t,-1,1))}function y(t){return Math.asin(a(t,-1,1))}function m(t,e,r=1e-6){if(isNaN(t)||isNaN(e))return!1
if(t===e)return!0
const n=Math.abs(t-e),o=Math.abs(t),i=Math.abs(e)
if(0===t||0===e||o<1e-12&&i<1e-12){if(n>.01*r)return!1}else if(n/(o+i)>r)return!1
return!0}function O(t,e,r=1e-6){return!isNaN(t)&&!isNaN(e)&&(t>e?t-e:e-t)<=r}function j(t){return g(Math.max(-S,Math.min(t,S)))}function g(t){return i[0]=t,i[0]}function v(t,e,r){const n=a((r-t)/(e-t),0,1)
return n*n*(3-2*n)}function M(t,e){const r=Object(n.s)(t),o=y(t[2]/r),i=Math.atan2(t[1]/r,t[0]/r)
return Object(n.z)(e,r,o,i),e}function x(t,e,r){return Object(o.l)(t,e[0],e[1],e[2],e[3]*r)}const S=g(34028234663852886e22)},879:function(t,e,r){"use strict"
var n,o,i
let s
r.d(e,"a",(function(){return d})),r.d(e,"b",(function(){return l})),r.d(e,"c",(function(){return h}))
const a=null!=(n=null==(o=globalThis.esriConfig)?void 0:o.locale)?n:null==(i=globalThis.dojoConfig)?void 0:i.locale
function u(){var t,e
return null!=(t=null!=a?a:null==(e=globalThis.navigator)?void 0:e.language)?t:"en"}function l(){return void 0===s&&(s=u()),s}const c=[]
function h(t){return c.push(t),{remove(){c.splice(c.indexOf(t),1)}}}const p=[]
function d(t){return p.push(t),{remove(){c.splice(p.indexOf(t),1)}}}null==globalThis.addEventListener||globalThis.addEventListener("languagechange",(function(){const t=null!=void 0?void 0:u()
s!==t&&(s=t,[...p].forEach(e=>{e.call(null,t)}),[...c].forEach(e=>{e.call(null,t)}))}))},883:function(t,e,r){"use strict"
r.d(e,"a",(function(){return y}))
var n,o=r(856),i=r(178),s=r(858),a=(r(859),r(857)),u=r(864),l=r(658),c=r(875),h=r(866),p=r(659),d=r(929),f=r(909)
let b=n=class extends c.a{constructor(...t){super(...t),this.paths=[],this.type="polyline"}normalizeCtorArgs(t,e){let r,n,o=null,i=null
return t&&!Array.isArray(t)?(o=t.paths?t.paths:null,e||(t.spatialReference?e=t.spatialReference:t.paths||(e=t)),r=t.hasZ,n=t.hasM):o=t,o=o||[],e=e||p.default.WGS84,o.length&&o[0]&&null!=o[0][0]&&"number"==typeof o[0][0]&&(o=[o]),i=o[0]&&o[0][0],i&&(void 0===r&&void 0===n?(r=i.length>2,n=!1):void 0===r?r=!n&&i.length>3:void 0===n&&(n=!r&&i.length>3)),{paths:o,spatialReference:e,hasZ:r,hasM:n}}get cache(){return this.commitProperty("paths"),this.commitProperty("hasZ"),this.commitProperty("hasM"),this.commitProperty("spatialReference"),{}}get extent(){const{spatialReference:t}=this,e=Object(d.c)(this)
if(!e)return null
const r=new l.default(e)
return r.spatialReference=t,r}writePaths(t,e){e.paths=Object(i.a)(this.paths)}addPath(t){if(!t)return
const e=this.paths,r=e.length
if(function(t){return!Array.isArray(t[0])}(t)){const n=[]
for(let e=0,r=t.length;e<r;e++)n[e]=t[e].toArray()
e[r]=n}else e[r]=t.concat()
return this.notifyChange("paths"),this}clone(){const t=new n
return t.spatialReference=this.spatialReference,t.paths=Object(i.a)(this.paths),t.hasZ=this.hasZ,t.hasM=this.hasM,t}getPoint(t,e){if(!this._validateInputs(t,e))return null
const r=this.paths[t][e],n=this.hasZ,o=this.hasM
return n&&!o?new h.a(r[0],r[1],r[2],void 0,this.spatialReference):o&&!n?new h.a(r[0],r[1],void 0,r[2],this.spatialReference):n&&o?new h.a(r[0],r[1],r[2],r[3],this.spatialReference):new h.a(r[0],r[1],this.spatialReference)}insertPoint(t,e,r){return this._validateInputs(t,e,!0)?(Object(f.a)(this,r),Array.isArray(r)||(r=r.toArray()),this.paths[t].splice(e,0,r),this.notifyChange("paths"),this):this}removePath(t){if(!this._validateInputs(t,null))return null
const e=this.paths.splice(t,1)[0],r=this.spatialReference,n=e.map(t=>new h.a(t,r))
return this.notifyChange("paths"),n}removePoint(t,e){if(!this._validateInputs(t,e))return null
const r=new h.a(this.paths[t].splice(e,1)[0],this.spatialReference)
return this.notifyChange("paths"),r}setPoint(t,e,r){return this._validateInputs(t,e)?(Object(f.a)(this,r),Array.isArray(r)||(r=r.toArray()),this.paths[t][e]=r,this.notifyChange("paths"),this):this}_validateInputs(t,e,r=!1){if(null==t||t<0||t>=this.paths.length)return!1
if(null!=e){const n=this.paths[t]
if(r&&(e<0||e>n.length))return!1
if(!r&&(e<0||e>=n.length))return!1}return!0}toJSON(t){return this.write({},t)}}
Object(o.a)([Object(s.b)({readOnly:!0})],b.prototype,"cache",null),Object(o.a)([Object(s.b)({readOnly:!0})],b.prototype,"extent",null),Object(o.a)([Object(s.b)({type:[[[Number]]],json:{write:{isRequired:!0}}})],b.prototype,"paths",void 0),Object(o.a)([Object(u.a)("paths")],b.prototype,"writePaths",null),b=n=Object(o.a)([Object(a.a)("esri.geometry.Polyline")],b),b.prototype.toJSON.isDefaultToJSON=!0
const y=b},888:function(t,e,r){"use strict"
r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return s}))
var n=r(863)
function o(t){return"point"===t||"multipoint"===t||"polyline"===t||"polygon"===t}const i=Object(n.b)()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon"}),s=Object(n.b)()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh"})},889:function(t,e,r){"use strict"
r.d(e,"a",(function(){return b}))
var n,o=r(856),i=r(178),s=r(858),a=(r(859),r(857)),u=r(864),l=r(658),c=r(875),h=r(866),p=r(909)
function d(t){return(e,r)=>null==e?r:null==r?e:t(e,r)}let f=n=class extends c.a{constructor(...t){super(...t),this.points=[],this.type="multipoint"}normalizeCtorArgs(t,e){if(!t&&!e)return null
const r={}
Array.isArray(t)?(r.points=t,r.spatialReference=e):function(t){return t&&("esri.geometry.SpatialReference"===t.declaredClass||null!=t.wkid)}(t)?r.spatialReference=t:(t.points&&(r.points=t.points),t.spatialReference&&(r.spatialReference=t.spatialReference),t.hasZ&&(r.hasZ=t.hasZ),t.hasM&&(r.hasM=t.hasM))
const n=r.points&&r.points[0]
return n&&(void 0===r.hasZ&&void 0===r.hasM?(r.hasZ=n.length>2,r.hasM=!1):void 0===r.hasZ?r.hasZ=n.length>3:void 0===r.hasM&&(r.hasM=n.length>3)),r}get cache(){return this.commitProperty("points"),this.commitProperty("hasZ"),this.commitProperty("hasM"),this.commitProperty("spatialReference"),{}}get extent(){const t=this.points
if(!t.length)return null
const e=new l.default,r=this.hasZ,n=this.hasM,o=r?3:2,i=t[0],s=d(Math.min),a=d(Math.max)
let u,c,h,p,[f,b]=i,[y,m]=i
for(let e=0,i=t.length;e<i;e++){const i=t[e],[l,d]=i
if(f=s(f,l),b=s(b,d),y=a(y,l),m=a(m,d),r&&i.length>2){const t=i[2]
u=s(u,t),h=a(h,t)}if(n&&i.length>o){const t=i[o]
c=s(c,t),p=a(p,t)}}return e.xmin=f,e.ymin=b,e.xmax=y,e.ymax=m,e.spatialReference=this.spatialReference,r?(e.zmin=u,e.zmax=h):(e.zmin=null,e.zmax=null),n?(e.mmin=c,e.mmax=p):(e.mmin=null,e.mmax=null),e}writePoints(t,e){e.points=Object(i.a)(this.points)}addPoint(t){return Object(p.a)(this,t),Array.isArray(t)?this.points.push(t):this.points.push(t.toArray()),this.notifyChange("points"),this}clone(){const t={points:Object(i.a)(this.points),spatialReference:this.spatialReference}
return this.hasZ&&(t.hasZ=!0),this.hasM&&(t.hasM=!0),new n(t)}getPoint(t){if(!this._validateInputs(t))return null
const e=this.points[t],r={x:e[0],y:e[1],spatialReference:this.spatialReference}
let n=2
return this.hasZ&&(r.z=e[2],n=3),this.hasM&&(r.m=e[n]),new h.a(r)}removePoint(t){if(!this._validateInputs(t))return null
const e=new h.a(this.points.splice(t,1)[0],this.spatialReference)
return this.notifyChange("points"),e}setPoint(t,e){return this._validateInputs(t)?(Object(p.a)(this,e),Array.isArray(e)||(e=e.toArray()),this.points[t]=e,this.notifyChange("points"),this):this}toJSON(t){return this.write({},t)}_validateInputs(t){return null!=t&&t>=0&&t<this.points.length}}
Object(o.a)([Object(s.b)({readOnly:!0})],f.prototype,"cache",null),Object(o.a)([Object(s.b)()],f.prototype,"extent",null),Object(o.a)([Object(s.b)({type:[[Number]],json:{write:{isRequired:!0}}})],f.prototype,"points",void 0),Object(o.a)([Object(u.a)("points")],f.prototype,"writePoints",null),f=n=Object(o.a)([Object(a.a)("esri.geometry.Multipoint")],f),f.prototype.toJSON.isDefaultToJSON=!0
const b=f},893:function(t,e,r){"use strict"
r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return a}))
const n=1e-6,o=Math.random,i=Math.PI/180,s=180/Math.PI
function a(t){return t*i}Object.freeze({__proto__:null,EPSILON:n,RANDOM:o,toRadian:a,toDegree:function(t){return t*s},equals:function(t,e){return Math.abs(t-e)<=n*Math.max(1,Math.abs(t),Math.abs(e))}})},909:function(t,e,r){"use strict"
function n(t,e,r=!1){let{hasM:n,hasZ:o}=t
Array.isArray(e)?4!==e.length||n||o?3===e.length&&r&&!n?(o=!0,n=!1):3===e.length&&n&&o&&(n=!1,o=!1):(n=!0,o=!0):(o=!o&&e.hasZ&&(!n||e.hasM),n=!n&&e.hasM&&(!o||e.hasZ)),t.hasZ=o,t.hasM=n}r.d(e,"a",(function(){return n}))},910:function(t,e,r){"use strict"
r.d(e,"a",(function(){return s})),r.d(e,"b",(function(){return c})),r.d(e,"c",(function(){return o})),r.d(e,"d",(function(){return y})),r.d(e,"e",(function(){return d})),r.d(e,"f",(function(){return f})),r.d(e,"g",(function(){return j})),r.d(e,"h",(function(){return g})),r.d(e,"i",(function(){return p})),r.d(e,"j",(function(){return m})),r.d(e,"k",(function(){return b})),r.d(e,"l",(function(){return i})),r.d(e,"m",(function(){return O})),r.d(e,"n",(function(){return q}))
var n=r(893)
function o(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function i(t,e,r,n,o){return t[0]=e,t[1]=r,t[2]=n,t[3]=o,t}function s(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t[3]=e[3]+r[3],t}function a(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t[2]=e[2]-r[2],t[3]=e[3]-r[3],t}function u(t,e,r){return t[0]=e[0]*r[0],t[1]=e[1]*r[1],t[2]=e[2]*r[2],t[3]=e[3]*r[3],t}function l(t,e,r){return t[0]=e[0]/r[0],t[1]=e[1]/r[1],t[2]=e[2]/r[2],t[3]=e[3]/r[3],t}function c(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t}function h(t,e){const r=e[0]-t[0],n=e[1]-t[1],o=e[2]-t[2],i=e[3]-t[3]
return Math.sqrt(r*r+n*n+o*o+i*i)}function p(t,e){const r=e[0]-t[0],n=e[1]-t[1],o=e[2]-t[2],i=e[3]-t[3]
return r*r+n*n+o*o+i*i}function d(t){const e=t[0],r=t[1],n=t[2],o=t[3]
return Math.sqrt(e*e+r*r+n*n+o*o)}function f(t){const e=t[0],r=t[1],n=t[2],o=t[3]
return e*e+r*r+n*n+o*o}function b(t,e){const r=e[0],n=e[1],o=e[2],i=e[3]
let s=r*r+n*n+o*o+i*i
return s>0&&(s=1/Math.sqrt(s),t[0]=r*s,t[1]=n*s,t[2]=o*s,t[3]=i*s),t}function y(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3]}function m(t,e,r,n){const o=e[0],i=e[1],s=e[2],a=e[3]
return t[0]=o+n*(r[0]-o),t[1]=i+n*(r[1]-i),t[2]=s+n*(r[2]-s),t[3]=a+n*(r[3]-a),t}function O(t,e,r){const n=e[0],o=e[1],i=e[2],s=e[3]
return t[0]=r[0]*n+r[4]*o+r[8]*i+r[12]*s,t[1]=r[1]*n+r[5]*o+r[9]*i+r[13]*s,t[2]=r[2]*n+r[6]*o+r[10]*i+r[14]*s,t[3]=r[3]*n+r[7]*o+r[11]*i+r[15]*s,t}function j(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]}function g(t,e){const r=t[0],o=t[1],i=t[2],s=t[3],a=e[0],u=e[1],l=e[2],c=e[3]
return Math.abs(r-a)<=n.a*Math.max(1,Math.abs(r),Math.abs(a))&&Math.abs(o-u)<=n.a*Math.max(1,Math.abs(o),Math.abs(u))&&Math.abs(i-l)<=n.a*Math.max(1,Math.abs(i),Math.abs(l))&&Math.abs(s-c)<=n.a*Math.max(1,Math.abs(s),Math.abs(c))}const v=a,M=u,x=l,S=h,P=p,w=d,_=f,q=Object.freeze({__proto__:null,copy:o,set:i,add:s,subtract:a,multiply:u,divide:l,ceil:function(t,e){return t[0]=Math.ceil(e[0]),t[1]=Math.ceil(e[1]),t[2]=Math.ceil(e[2]),t[3]=Math.ceil(e[3]),t},floor:function(t,e){return t[0]=Math.floor(e[0]),t[1]=Math.floor(e[1]),t[2]=Math.floor(e[2]),t[3]=Math.floor(e[3]),t},min:function(t,e,r){return t[0]=Math.min(e[0],r[0]),t[1]=Math.min(e[1],r[1]),t[2]=Math.min(e[2],r[2]),t[3]=Math.min(e[3],r[3]),t},max:function(t,e,r){return t[0]=Math.max(e[0],r[0]),t[1]=Math.max(e[1],r[1]),t[2]=Math.max(e[2],r[2]),t[3]=Math.max(e[3],r[3]),t},round:function(t,e){return t[0]=Math.round(e[0]),t[1]=Math.round(e[1]),t[2]=Math.round(e[2]),t[3]=Math.round(e[3]),t},scale:c,scaleAndAdd:function(t,e,r,n){return t[0]=e[0]+r[0]*n,t[1]=e[1]+r[1]*n,t[2]=e[2]+r[2]*n,t[3]=e[3]+r[3]*n,t},distance:h,squaredDistance:p,length:d,squaredLength:f,negate:function(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=-e[3],t},inverse:function(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t[3]=1/e[3],t},normalize:b,dot:y,lerp:m,random:function(t,e){let r,o,i,s,a,u
e=e||1
do{r=2*Object(n.b)()-1,o=2*Object(n.b)()-1,a=r*r+o*o}while(a>=1)
do{i=2*Object(n.b)()-1,s=2*Object(n.b)()-1,u=i*i+s*s}while(u>=1)
const l=Math.sqrt((1-a)/u)
return t[0]=e*r,t[1]=e*o,t[2]=e*i*l,t[3]=e*s*l,t},transformMat4:O,transformQuat:function(t,e,r){const n=e[0],o=e[1],i=e[2],s=r[0],a=r[1],u=r[2],l=r[3],c=l*n+a*i-u*o,h=l*o+u*n-s*i,p=l*i+s*o-a*n,d=-s*n-a*o-u*i
return t[0]=c*l+d*-s+h*-u-p*-a,t[1]=h*l+d*-a+p*-s-c*-u,t[2]=p*l+d*-u+c*-a-h*-s,t[3]=e[3],t},str:function(t){return"vec4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},exactEquals:j,equals:g,sub:v,mul:M,div:x,dist:S,sqrDist:P,len:w,sqrLen:_})},914:function(t,e,r){"use strict"
r.d(e,"a",(function(){return A}))
var n=r(856),o=r(78),i=r(148),s=r(660),a=r(996),u=r(354),l=r(860),c=r(903),h=r(177),p=r(20),d=r(861),f=r(858),b=(r(353),r(77),r(859)),y=r(865),m=r(857),O=r(658),j=r(879),g=r(926),v=r(862)
let M=class extends v.a{constructor(t){super(t),this.nextQueryParams=null,this.queryParams=null,this.results=null,this.total=null}}
Object(n.a)([Object(f.b)()],M.prototype,"nextQueryParams",void 0),Object(n.a)([Object(f.b)()],M.prototype,"queryParams",void 0),Object(n.a)([Object(f.b)()],M.prototype,"results",void 0),Object(n.a)([Object(f.b)()],M.prototype,"total",void 0),M=Object(n.a)([Object(m.a)("esri.portal.PortalQueryResult")],M)
const x=M
var S,P=r(956),w=r(966)
let _
const q={PortalGroup:()=>Promise.resolve().then(r.bind(null,988)),PortalItem:()=>r.e(80).then(r.bind(null,1006)),PortalUser:()=>Promise.resolve().then(r.bind(null,956))}
let G=S=class extends(Object(l.b)(c.a)){constructor(t){super(t),this.access=null,this.allSSL=!1,this.authMode="auto",this.authorizedCrossOriginDomains=null,this.basemapGalleryGroupQuery=null,this.bingKey=null,this.canListApps=!1,this.canListData=!1,this.canListPreProvisionedItems=!1,this.canProvisionDirectPurchase=!1,this.canSearchPublic=!0,this.canShareBingPublic=!1,this.canSharePublic=!1,this.canSignInArcGIS=!1,this.canSignInIDP=!1,this.colorSetsGroupQuery=null,this.commentsEnabled=!1,this.created=null,this.culture=null,this.customBaseUrl=null,this.defaultBasemap=null,this.defaultDevBasemap=null,this.defaultExtent=null,this.defaultVectorBasemap=null,this.description=null,this.devBasemapGalleryGroupQuery=null,this.eueiEnabled=null,this.featuredGroups=null,this.featuredItemsGroupQuery=null,this.galleryTemplatesGroupQuery=null,this.livingAtlasGroupQuery=null,this.hasCategorySchema=!1,this.helperServices=null,this.homePageFeaturedContent=null,this.homePageFeaturedContentCount=null,this.httpPort=null,this.httpsPort=null,this.id=null,this.ipCntryCode=null,this.isPortal=!1,this.isReadOnly=!1,this.layerTemplatesGroupQuery=null,this.maxTokenExpirationMinutes=null,this.modified=null,this.name=null,this.portalHostname=null,this.portalMode=null,this.portalProperties=null,this.region=null,this.rotatorPanels=null,this.showHomePageDescription=!1,this.sourceJSON=null,this.supportsHostedServices=!1,this.symbolSetsGroupQuery=null,this.templatesGroupQuery=null,this.units=null,this.url=o.default.portalUrl,this.urlKey=null,this.user=null,this.useStandardizedQuery=!1,this.useVectorBasemaps=!1,this.vectorBasemapGalleryGroupQuery=null}normalizeCtorArgs(t){return"string"==typeof t?{url:t}:t}destroy(){this._esriId_credentialCreateHandle&&(this._esriId_credentialCreateHandle.remove(),this._esriId_credentialCreateHandle=null)}readAuthorizedCrossOriginDomains(t){if(t)for(const e of t)-1===o.default.request.trustedServers.indexOf(e)&&o.default.request.trustedServers.push(e)
return t}readDefaultBasemap(t){return this._readBasemap(t)}readDefaultDevBasemap(t){return this._readBasemap(t)}readDefaultVectorBasemap(t){return this._readBasemap(t)}get extraQuery(){const t=!(this.user&&this.user.orgId)||this.canSearchPublic
return this.id&&!t?" AND orgid:"+this.id:null}get isOrganization(){return!!this.access}get restUrl(){let t=this.url
if(t){const e=t.indexOf("/sharing")
t=e>0?t.substring(0,e):this.url.replace(/\/+$/,""),t+="/sharing/rest"}return t}get stylesGroupQuery(){return Object(a.c)(h.a.getLogger(this.declaredClass),"stylesGroupQuery",{replacement:"stylesGroupQuery3d",version:"4.21"}),this.stylesGroupQuery3d}get thumbnailUrl(){const t=this.restUrl,e=this.thumbnail
return t&&e?this._normalizeSSL(t+"/portals/self/resources/"+e):null}readUrlKey(t){return t?t.toLowerCase():t}readUser(t){let e=null
return t&&(e=P.default.fromJSON(t),e.portal=this),e}load(t){const e=Promise.all([r.e(28),r.e(293)]).then(r.bind(null,671)).then(({default:e})=>{Object(d.v)(t),_=e}).then(()=>this.sourceJSON?this.sourceJSON:this._fetchSelf(this.authMode,!1,t)).then(t=>{if(i.b){const t=i.b
this.credential=t.findCredential(this.restUrl),this.credential||this.authMode!==S.AUTH_MODE_AUTO||(this._esriId_credentialCreateHandle=t.on("credential-create",()=>{t.findCredential(this.restUrl)&&this._signIn()}))}this.sourceJSON=t,this.read(t)})
return this.addResolvingPromise(e),Promise.resolve(this)}async createClosestFacilityTask(){Object(a.b)(h.a.getLogger(this.declaredClass),null,{replacement:"Use helperServices url with esri/rest/closestFacility",version:"4.21"}),await this.load()
const t=this._getHelperServiceUrl("closestFacility")
return new(0,(await Promise.all([r.e(1),r.e(2),r.e(32),r.e(60),r.e(343)]).then(r.bind(null,2430))).default)(t)}async createElevationLayers(){await this.load()
const t=this._getHelperService("defaultElevationLayers"),e=(await Promise.all([r.e(22),r.e(42),r.e(56)]).then(r.bind(null,1996))).default
return t?t.map(t=>new e({id:t.id,url:t.url})):[]}async createGeometryService(){Object(a.b)(h.a.getLogger(this.declaredClass),null,{replacement:"Use helperServices url with esri/rest/geometryService",version:"4.21"}),await this.load()
const t=this._getHelperServiceUrl("geometry")
return new(0,(await r.e(159).then(r.bind(null,2416))).default)({url:t})}async createPrintTask(){Object(a.b)(h.a.getLogger(this.declaredClass),null,{replacement:"Use helperServices url with esri/rest/print",version:"4.21"}),await this.load()
const t=this._getHelperServiceUrl("printTask")
return new(0,(await Promise.all([r.e(1),r.e(2),r.e(32),r.e(194)]).then(r.bind(null,2417))).default)(t)}async createRouteTask(){Object(a.b)(h.a.getLogger(this.declaredClass),null,{replacement:"Use helperServices url with esri/rest/route",version:"4.21"}),await this.load()
const t=this._getHelperServiceUrl("route")
return new(0,(await Promise.all([r.e(1),r.e(2),r.e(32),r.e(60),r.e(321)]).then(r.bind(null,2279))).default)(t)}async createServiceAreaTask(){Object(a.b)(h.a.getLogger(this.declaredClass),null,{replacement:"Use helperServices url with esri/rest/serviceArea",version:"4.21"}),await this.load()
const t=this._getHelperServiceUrl("serviceArea")
return new(0,(await Promise.all([r.e(1),r.e(2),r.e(32),r.e(246)]).then(r.bind(null,2431))).default)(t)}fetchBasemaps(t,e){const r=new g.a
return r.query=t||(o.default.apiKey&&Object(w.a)(this.url)?this.devBasemapGalleryGroupQuery:this.useVectorBasemaps?this.vectorBasemapGalleryGroupQuery:this.basemapGalleryGroupQuery),r.disableExtraQuery=!0,this.queryGroups(r,e).then(t=>{if(r.num=100,r.query='type:"Web Map" -type:"Web Application"',t.total){const n=t.results[0]
return r.sortField=n.sortField||"name",r.sortOrder=n.sortOrder||"desc",n.queryItems(r,e)}return null}).then(t=>{let e
return e=t&&t.total?t.results.filter(t=>"Web Map"===t.type).map(t=>new _({portalItem:t})):[],e})}fetchCategorySchema(t){return this.hasCategorySchema?this._request(this.restUrl+"/portals/self/categorySchema",t).then(t=>t.categorySchema):Object(d.n)(t)?Promise.reject(Object(d.e)()):Promise.resolve([])}fetchFeaturedGroups(t){const e=this.featuredGroups,r=new g.a
if(r.num=100,r.sortField="title",e&&e.length){const n=[]
for(const t of e)n.push(`(title:"${t.title}" AND owner:${t.owner})`)
return r.query=n.join(" OR "),this.queryGroups(r,t).then(t=>t.results)}return Object(d.n)(t)?Promise.reject(Object(d.e)()):Promise.resolve([])}fetchRegions(t){var e
const r=(null==(e=this.user)?void 0:e.culture)||this.culture||Object(j.b)()
return this._request(this.restUrl+"/portals/regions",{...t,query:{culture:r}})}fetchSettings(t){var e
const r=(null==(e=this.user)?void 0:e.culture)||this.culture||Object(j.b)()
return this._request(this.restUrl+"/portals/self/settings",{...t,query:{culture:r}})}static getDefault(){return S._default&&!S._default.destroyed||(S._default=new S),S._default}queryGroups(t,e){return this._queryPortal("/community/groups",t,"PortalGroup",e)}queryItems(t,e){return this._queryPortal("/search",t,"PortalItem",e)}queryUsers(t,e){return t.sortField||(t.sortField="username"),this._queryPortal("/community/users",t,"PortalUser",e)}toJSON(){throw new u.a("internal:not-yet-implemented","Portal.toJSON is not yet implemented")}static fromJSON(t){if(!t)return null
if(t.declaredClass)throw new Error("JSON object is already hydrated")
return new S({sourceJSON:t})}_getHelperService(t){const e=this.helperServices&&this.helperServices[t]
if(!e)throw new u.a("portal:service-not-found",`The \`helperServices\` do not include an entry named "${t}"`)
return e}_getHelperServiceUrl(t){const e=this._getHelperService(t)
if(!e.url)throw new u.a("portal:service-url-not-found",`The \`helperServices\` entry "${t}" does not include a \`url\` value`)
return e.url}_fetchSelf(t=this.authMode,e=!1,r){const n=this.restUrl+"/portals/self",o={authMode:t,query:{culture:Object(j.b)().toLowerCase()},...r}
return"auto"===o.authMode&&(o.authMode="no-prompt"),e&&(o.query.default=!0),this._request(n,o)}_queryPortal(t,e,r,n){const o=Object(b.m)(g.a,e),i=e=>this._request(this.restUrl+t,{...o.toRequestOptions(this),...n}).then(t=>{const r=o.clone()
return r.start=t.nextStart,new x({nextQueryParams:r,queryParams:o,total:t.total,results:S._resultsToTypedArray(e,{portal:this},t,n)})}).then(t=>Promise.all(t.results.map(e=>"function"==typeof e.when?e.when():t)).then(()=>t,e=>(Object(d.u)(e),t)))
return r&&q[r]?q[r]().then(({default:t})=>(Object(d.v)(n),i(t))):i()}_signIn(){if(this.authMode===S.AUTH_MODE_ANONYMOUS)return Promise.reject(new u.a("portal:invalid-auth-mode",`Current "authMode"' is "${this.authMode}"`))
if("failed"===this.loadStatus)return Promise.reject(this.loadError)
const t=t=>Promise.resolve().then(()=>"not-loaded"===this.loadStatus?(t||(this.authMode="immediate"),this.load().then(()=>null)):"loading"===this.loadStatus?this.load().then(()=>this.credential?null:(this.credential=t,this._fetchSelf("immediate"))):this.user&&this.credential===t?null:(this.credential=t,this._fetchSelf("immediate"))).then(t=>{t&&(this.sourceJSON=t,this.read(t))})
return i.b?i.b.getCredential(this.restUrl).then(e=>t(e)):t(this.credential)}_normalizeSSL(t){return t.replace(/^http:/i,"https:").replace(":7080",":7443")}_normalizeUrl(t){const e=this.credential&&this.credential.token
return this._normalizeSSL(e?t+(t.indexOf("?")>-1?"&":"?")+"token="+e:t)}_requestToTypedArray(t,e,r){return this._request(t,e).then(t=>{const e=S._resultsToTypedArray(r,{portal:this},t)
return Promise.all(e.map(e=>"function"==typeof e.when?e.when():t)).then(()=>e,()=>e)})}_readBasemap(t){if(t){const e=_.fromJSON(t)
return e.portalItem={portal:this},e}return null}_request(t,e={}){const r={f:"json",...e.query},{authMode:n=(this.authMode===S.AUTH_MODE_ANONYMOUS?"anonymous":"auto"),body:o=null,cacheBust:i=!1,method:a="auto",responseType:u="json",signal:l}=e,c={authMode:n,body:o,cacheBust:i,method:a,query:r,responseType:u,timeout:0,signal:l}
return Object(s.default)(this._normalizeSSL(t),c).then(t=>t.data)}static _resultsToTypedArray(t,e,r,n){let o
if(r){const i=Object(p.k)(n)?n.signal:null
o=r.listings||r.notifications||r.userInvitations||r.tags||r.items||r.groups||r.comments||r.provisions||r.results||r.relatedItems||r,(t||e)&&(o=o.map(r=>{const n=Object.assign(t?t.fromJSON(r):r,e)
return"function"==typeof n.load&&n.load(i),n}))}else o=[]
return o}}
G.AUTH_MODE_ANONYMOUS="anonymous",G.AUTH_MODE_AUTO="auto",G.AUTH_MODE_IMMEDIATE="immediate",Object(n.a)([Object(f.b)()],G.prototype,"access",void 0),Object(n.a)([Object(f.b)()],G.prototype,"allSSL",void 0),Object(n.a)([Object(f.b)()],G.prototype,"authMode",void 0),Object(n.a)([Object(f.b)()],G.prototype,"authorizedCrossOriginDomains",void 0),Object(n.a)([Object(y.a)("authorizedCrossOriginDomains")],G.prototype,"readAuthorizedCrossOriginDomains",null),Object(n.a)([Object(f.b)()],G.prototype,"basemapGalleryGroupQuery",void 0),Object(n.a)([Object(f.b)()],G.prototype,"bingKey",void 0),Object(n.a)([Object(f.b)()],G.prototype,"canListApps",void 0),Object(n.a)([Object(f.b)()],G.prototype,"canListData",void 0),Object(n.a)([Object(f.b)()],G.prototype,"canListPreProvisionedItems",void 0),Object(n.a)([Object(f.b)()],G.prototype,"canProvisionDirectPurchase",void 0),Object(n.a)([Object(f.b)()],G.prototype,"canSearchPublic",void 0),Object(n.a)([Object(f.b)()],G.prototype,"canShareBingPublic",void 0),Object(n.a)([Object(f.b)()],G.prototype,"canSharePublic",void 0),Object(n.a)([Object(f.b)()],G.prototype,"canSignInArcGIS",void 0),Object(n.a)([Object(f.b)()],G.prototype,"canSignInIDP",void 0),Object(n.a)([Object(f.b)()],G.prototype,"colorSetsGroupQuery",void 0),Object(n.a)([Object(f.b)()],G.prototype,"commentsEnabled",void 0),Object(n.a)([Object(f.b)({type:Date})],G.prototype,"created",void 0),Object(n.a)([Object(f.b)()],G.prototype,"credential",void 0),Object(n.a)([Object(f.b)()],G.prototype,"culture",void 0),Object(n.a)([Object(f.b)()],G.prototype,"currentVersion",void 0),Object(n.a)([Object(f.b)()],G.prototype,"customBaseUrl",void 0),Object(n.a)([Object(f.b)()],G.prototype,"defaultBasemap",void 0),Object(n.a)([Object(y.a)("defaultBasemap")],G.prototype,"readDefaultBasemap",null),Object(n.a)([Object(f.b)()],G.prototype,"defaultDevBasemap",void 0),Object(n.a)([Object(y.a)("defaultDevBasemap")],G.prototype,"readDefaultDevBasemap",null),Object(n.a)([Object(f.b)({type:O.default})],G.prototype,"defaultExtent",void 0),Object(n.a)([Object(f.b)()],G.prototype,"defaultVectorBasemap",void 0),Object(n.a)([Object(y.a)("defaultVectorBasemap")],G.prototype,"readDefaultVectorBasemap",null),Object(n.a)([Object(f.b)()],G.prototype,"description",void 0),Object(n.a)([Object(f.b)()],G.prototype,"devBasemapGalleryGroupQuery",void 0),Object(n.a)([Object(f.b)()],G.prototype,"eueiEnabled",void 0),Object(n.a)([Object(f.b)({readOnly:!0})],G.prototype,"extraQuery",null),Object(n.a)([Object(f.b)()],G.prototype,"featuredGroups",void 0),Object(n.a)([Object(f.b)()],G.prototype,"featuredItemsGroupQuery",void 0),Object(n.a)([Object(f.b)()],G.prototype,"galleryTemplatesGroupQuery",void 0),Object(n.a)([Object(f.b)()],G.prototype,"livingAtlasGroupQuery",void 0),Object(n.a)([Object(f.b)()],G.prototype,"hasCategorySchema",void 0),Object(n.a)([Object(f.b)()],G.prototype,"helpBase",void 0),Object(n.a)([Object(f.b)()],G.prototype,"helperServices",void 0),Object(n.a)([Object(f.b)()],G.prototype,"helpMap",void 0),Object(n.a)([Object(f.b)()],G.prototype,"homePageFeaturedContent",void 0),Object(n.a)([Object(f.b)()],G.prototype,"homePageFeaturedContentCount",void 0),Object(n.a)([Object(f.b)()],G.prototype,"httpPort",void 0),Object(n.a)([Object(f.b)()],G.prototype,"httpsPort",void 0),Object(n.a)([Object(f.b)()],G.prototype,"id",void 0),Object(n.a)([Object(f.b)()],G.prototype,"ipCntryCode",void 0),Object(n.a)([Object(f.b)({readOnly:!0})],G.prototype,"isOrganization",null),Object(n.a)([Object(f.b)()],G.prototype,"isPortal",void 0),Object(n.a)([Object(f.b)()],G.prototype,"isReadOnly",void 0),Object(n.a)([Object(f.b)()],G.prototype,"layerTemplatesGroupQuery",void 0),Object(n.a)([Object(f.b)()],G.prototype,"maxTokenExpirationMinutes",void 0),Object(n.a)([Object(f.b)({type:Date})],G.prototype,"modified",void 0),Object(n.a)([Object(f.b)()],G.prototype,"name",void 0),Object(n.a)([Object(f.b)()],G.prototype,"portalHostname",void 0),Object(n.a)([Object(f.b)()],G.prototype,"portalMode",void 0),Object(n.a)([Object(f.b)()],G.prototype,"portalProperties",void 0),Object(n.a)([Object(f.b)()],G.prototype,"region",void 0),Object(n.a)([Object(f.b)({readOnly:!0})],G.prototype,"restUrl",null),Object(n.a)([Object(f.b)()],G.prototype,"rotatorPanels",void 0),Object(n.a)([Object(f.b)()],G.prototype,"showHomePageDescription",void 0),Object(n.a)([Object(f.b)()],G.prototype,"sourceJSON",void 0),Object(n.a)([Object(f.b)()],G.prototype,"staticImagesUrl",void 0),Object(n.a)([Object(f.b)({readOnly:!0,json:{read:!1}})],G.prototype,"stylesGroupQuery",null),Object(n.a)([Object(f.b)({json:{name:"2DStylesGroupQuery"}})],G.prototype,"stylesGroupQuery2d",void 0),Object(n.a)([Object(f.b)({json:{name:"stylesGroupQuery"}})],G.prototype,"stylesGroupQuery3d",void 0),Object(n.a)([Object(f.b)()],G.prototype,"supportsHostedServices",void 0),Object(n.a)([Object(f.b)()],G.prototype,"symbolSetsGroupQuery",void 0),Object(n.a)([Object(f.b)()],G.prototype,"templatesGroupQuery",void 0),Object(n.a)([Object(f.b)()],G.prototype,"thumbnail",void 0),Object(n.a)([Object(f.b)({readOnly:!0})],G.prototype,"thumbnailUrl",null),Object(n.a)([Object(f.b)()],G.prototype,"units",void 0),Object(n.a)([Object(f.b)()],G.prototype,"url",void 0),Object(n.a)([Object(f.b)()],G.prototype,"urlKey",void 0),Object(n.a)([Object(y.a)("urlKey")],G.prototype,"readUrlKey",null),Object(n.a)([Object(f.b)()],G.prototype,"user",void 0),Object(n.a)([Object(y.a)("user")],G.prototype,"readUser",null),Object(n.a)([Object(f.b)()],G.prototype,"useStandardizedQuery",void 0),Object(n.a)([Object(f.b)()],G.prototype,"useVectorBasemaps",void 0),Object(n.a)([Object(f.b)()],G.prototype,"vectorBasemapGalleryGroupQuery",void 0),G=S=Object(n.a)([Object(m.a)("esri.portal.Portal")],G)
const A=G},916:function(t,e,r){"use strict"
r.d(e,"a",(function(){return p})),r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return i})),r.d(e,"d",(function(){return u})),r.d(e,"e",(function(){return l})),r.d(e,"f",(function(){return c})),r.d(e,"g",(function(){return h})),r.d(e,"h",(function(){return a})),r.d(e,"i",(function(){return d})),r.d(e,"j",(function(){return f}))
var n=r(872)
function o(t){if(!t)return null
if(Array.isArray(t))return t
const e=t.hasZ,r=t.hasM
if("point"===t.type)return r&&e?[t.x,t.y,t.z,t.m]:e?[t.x,t.y,t.z]:r?[t.x,t.y,t.m]:[t.x,t.y]
if("polygon"===t.type)return t.rings.slice(0)
if("polyline"===t.type)return t.paths.slice(0)
if("multipoint"===t.type)return t.points.slice(0)
if("extent"===t.type){const e=t.clone().normalize()
if(!e)return null
let r=!1,n=!1
return e.forEach(t=>{t.hasZ&&(r=!0),t.hasM&&(n=!0)}),e.map(t=>{const e=[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]
if(r&&t.hasZ){const r=.5*(t.zmax-t.zmin)
for(let t=0;t<e.length;t++)e[t].push(r)}if(n&&t.hasM){const r=.5*(t.mmax-t.mmin)
for(let t=0;t<e.length;t++)e[t].push(r)}return e})}return null}function i(t,e){const r=e[0]-t[0],n=e[1]-t[1]
if(t.length>2&&e.length>2){const o=t[2]-e[2]
return Math.sqrt(r*r+n*n+o*o)}return Math.sqrt(r*r+n*n)}function s(t,e,r){const n=t[0]+r*(e[0]-t[0]),o=t[1]+r*(e[1]-t[1])
return t.length>2&&e.length>2?[n,o,t[2]+r*(e[2]-t[2])]:[n,o]}function a(t,e,r,n){const[o,i]=e,[s,a]=r[n],[u,l]=r[n+1],c=u-s,h=l-a,p=c*c+h*h,d=(o-s)*c+(i-a)*h,f=Math.min(1,Math.max(0,d/p))
return t[0]=s+c*f,t[1]=a+h*f,t}function u(t,e){return s(t,e,.5)}function l(t){const e=t.length
let r=0
for(let n=0;n<e-1;++n)r+=i(t[n],t[n+1])
return r}function c(t,e){if(e<=0)return t[0]
const r=t.length
let n=0
for(let o=0;o<r-1;++o){const r=i(t[o],t[o+1])
if(e-n<r){const i=(e-n)/r
return s(t[o],t[o+1],i)}n+=r}return t[r-1]}function h(t,e,r){const n=t.length
let o=0,i=0,s=0
for(let a=0;a<n;a++){const u=t[a],l=t[(a+1)%n]
let c=2
o+=u[0]*l[1]-l[0]*u[1],u.length>2&&l.length>2&&r&&(i+=u[0]*l[2]-l[0]*u[2],c=3),u.length>c&&l.length>c&&e&&(s+=u[0]*l[c]-l[0]*u[c])}return o<=0&&i<=0&&s<=0}function p(t){if("rings"in t){for(const e of t.rings)e.length<3||e[0][0]===e[e.length-1][0]&&e[0][1]===e[e.length-1][1]||e.push([e[0][0],e[0][1]])
if(t.rings.length>0&&!h(t.rings[0],t.hasM,t.hasZ))for(let e=0;e<t.rings.length;++e)t.rings[e]=t.rings[e].reverse()}}function d(t){return"polygon"!==t.type&&"polyline"!==t.type||f("polygon"===t.type?t.rings:t.paths,t.spatialReference),t}function f(t,e){const r=Object(n.e)(e)
if(!r)return
const o=r.valid[0],i=r.valid[1],s=i-o
for(const e of t){let t=1/0,r=-1/0
e.forEach(e=>{let n=e[0]
for(;n<o;)n+=s
for(;n>i;)n-=s
t=Math.min(t,n),r=Math.max(r,n),e[0]=n})
const n=r-t
s-n<n&&e.forEach(t=>{t[0]<0&&(t[0]+=s)})}}},926:function(t,e,r){"use strict"
r.d(e,"a",(function(){return y}))
var n,o=r(856),i=r(862),s=r(863),a=r(178),u=r(20),l=r(858),c=(r(859),r(857)),h=r(658),p=r(659),d=r(662)
const f=new s.a({avgRating:"avg-rating",numRatings:"num-ratings",numComments:"num-comments",numViews:"num-views"})
let b=n=class extends i.a{constructor(t){super(t),this.categories=null,this.disableExtraQuery=!1,this.extent=null,this.filter=null,this.num=10,this.query=null,this.sortField=null,this.start=1}get sortOrder(){return this._get("sortOrder")||"asc"}set sortOrder(t){"asc"!==t&&"desc"!==t||this._set("sortOrder",t)}clone(){return new n({categories:this.categories?Object(a.a)(this.categories):null,disableExtraQuery:this.disableExtraQuery,extent:this.extent?this.extent.clone():null,filter:this.filter,num:this.num,query:this.query,sortField:this.sortField,sortOrder:this.sortOrder,start:this.start})}toRequestOptions(t,e){let r,n
if(this.categories&&(r=this.categories.map(t=>Array.isArray(t)?JSON.stringify(t):t)),this.extent){const t=Object(d.project)(this.extent,p.default.WGS84)
Object(u.k)(t)&&(n=`${t.xmin},${t.ymin},${t.xmax},${t.ymax}`)}let o=this.query
!this.disableExtraQuery&&t.extraQuery&&(o="("+o+")"+t.extraQuery)
const i={categories:r,bbox:n,q:o,filter:this.filter,num:this.num,sortField:null,sortOrder:null,start:this.start}
return this.sortField&&(i.sortField=this.sortField.split(",").map(t=>f.toJSON(t.trim())).join(","),i.sortOrder=this.sortOrder),{query:{...e,...i}}}}
Object(o.a)([Object(l.b)()],b.prototype,"categories",void 0),Object(o.a)([Object(l.b)()],b.prototype,"disableExtraQuery",void 0),Object(o.a)([Object(l.b)({type:h.default})],b.prototype,"extent",void 0),Object(o.a)([Object(l.b)()],b.prototype,"filter",void 0),Object(o.a)([Object(l.b)()],b.prototype,"num",void 0),Object(o.a)([Object(l.b)()],b.prototype,"query",void 0),Object(o.a)([Object(l.b)()],b.prototype,"sortField",void 0),Object(o.a)([Object(l.b)()],b.prototype,"sortOrder",null),Object(o.a)([Object(l.b)()],b.prototype,"start",void 0),b=n=Object(o.a)([Object(c.a)("esri.portal.PortalQueryParams")],b)
const y=b},929:function(t,e,r){"use strict"
r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return h})),r.d(e,"c",(function(){return p}))
var n=r(943)
const o=[]
function i(t,e,r,n){return{xmin:t,ymin:e,xmax:r,ymax:n}}function s(t,e,r,n,o,i){return{xmin:t,ymin:e,zmin:r,xmax:n,ymax:o,zmax:i}}function a(t,e,r,n,o,i){return{xmin:t,ymin:e,mmin:r,xmax:n,ymax:o,mmax:i}}function u(t,e,r,n,o,i,s,a){return{xmin:t,ymin:e,zmin:r,mmin:n,xmax:o,ymax:i,zmax:s,mmax:a}}function l(t,e=!1,r=!1){return e?r?u(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7]):s(t[0],t[1],t[2],t[3],t[4],t[5]):r?a(t[0],t[1],t[2],t[3],t[4],t[5]):i(t[0],t[1],t[2],t[3])}function c(t){return t?function(t){return void 0!==t.xmin&&void 0!==t.ymin&&void 0!==t.xmax&&void 0!==t.ymax}(t)?t:function(t){return void 0!==t.x&&void 0!==t.y}(t)?function(t){const{x:e,y:r,z:n,m:o}=t,l=null!=o
return null!=n?l?u(e,r,n,o,e,r,n,o):s(e,r,n,e,r,n):l?a(e,r,o,e,r,o):i(e,r,e,r)}(t):function(t){return void 0!==t.rings}(t)?h(t):function(t){return void 0!==t.paths}(t)?p(t):function(t){return void 0!==t.points}(t)?function(t){const{hasZ:e,hasM:r,points:i}=t
return l(Object(n.c)(o,i,e,r),e,r)}(t):null:null}function h(t){const{hasZ:e,hasM:r,rings:i}=t,s=Object(n.d)(o,i,e,r)
return s?l(s,e,r):null}function p(t){const{hasZ:e,hasM:r,paths:i}=t,s=Object(n.d)(o,i,e,r)
return s?l(s,e,r):null}},943:function(t,e,r){"use strict"
function n(t){return void 0!==t.xmin&&void 0!==t.ymin&&void 0!==t.xmax&&void 0!==t.ymax}function o(t){return void 0!==t.points}function i(t){return void 0!==t.x&&void 0!==t.y}function s(t){return void 0!==t.paths}function a(t){return void 0!==t.rings}function u(t){return(e,r)=>null==e?r:null==r?e:t(e,r)}r.d(e,"a",(function(){return h})),r.d(e,"b",(function(){return p})),r.d(e,"c",(function(){return b})),r.d(e,"d",(function(){return d}))
const l=u(Math.min),c=u(Math.max)
function h(t,e){return s(e)?d(t,e.paths,!1,!1):a(e)?d(t,e.rings,!1,!1):o(e)?b(t,e.points,!1,!1,!1,!1):n(e)?f(t,e):(i(e)&&(t[0]=e.x,t[1]=e.y,t[2]=e.x,t[3]=e.y),t)}function p(t,e){return s(e)?d(t,e.paths,!0,!1):a(e)?d(t,e.rings,!0,!1):o(e)?b(t,e.points,!0,!1,!0,!1):n(e)?f(t,e,!0,!1,!0,!1):(i(e)&&(t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.x,t[4]=e.y,t[5]=e.z),t)}function d(t,e,r,n){const o=r?3:2
if(!e.length||!e[0].length)return null
let i,s,a,u,[h,p]=e[0][0],[d,f]=e[0][0]
for(let t=0;t<e.length;t++){const b=e[t]
for(let t=0;t<b.length;t++){const e=b[t],[y,m]=e
if(h=l(h,y),p=l(p,m),d=c(d,y),f=c(f,m),r&&e.length>2){const t=e[2]
i=l(i,t),s=c(s,t)}if(n&&e.length>o){const t=e[o]
a=l(i,t),u=c(s,t)}}}return r?n?(t[0]=h,t[1]=p,t[2]=i,t[3]=a,t[4]=d,t[5]=f,t[6]=s,t[7]=u,t.length=8,t):(t[0]=h,t[1]=p,t[2]=i,t[3]=d,t[4]=f,t[5]=s,t.length=6,t):n?(t[0]=h,t[1]=p,t[2]=a,t[3]=d,t[4]=f,t[5]=u,t.length=6,t):(t[0]=h,t[1]=p,t[2]=d,t[3]=f,t.length=4,t)}function f(t,e,r,n,o,i){const s=e.xmin,a=e.xmax,u=e.ymin,l=e.ymax
let c=e.zmin,h=e.zmax,p=e.mmin,d=e.mmax
return o?(c=c||0,h=h||0,i?(p=p||0,d=d||0,t[0]=s,t[1]=u,t[2]=c,t[3]=p,t[4]=a,t[5]=l,t[6]=h,t[7]=d,t):(t[0]=s,t[1]=u,t[2]=c,t[3]=a,t[4]=l,t[5]=h,t)):i?(p=p||0,d=d||0,t[0]=s,t[1]=u,t[2]=p,t[3]=a,t[4]=l,t[5]=d,t):(t[0]=s,t[1]=u,t[2]=a,t[3]=l,t)}function b(t,e,r,n,o,i){const s=r?3:2,a=n&&i,u=r&&o
if(!e.length||!e[0].length)return null
let h,p,d,f,[b,y]=e[0],[m,O]=e[0]
for(let t=0;t<e.length;t++){const r=e[t],[n,o]=r
if(b=l(b,n),y=l(y,o),m=c(m,n),O=c(O,o),u&&r.length>2){const t=r[2]
h=l(h,t),p=c(p,t)}if(a&&r.length>s){const t=r[s]
d=l(h,t),f=c(p,t)}}return o?(h=h||0,p=p||0,i?(d=d||0,f=f||0,t[0]=b,t[1]=y,t[2]=h,t[3]=d,t[4]=m,t[5]=O,t[6]=p,t[7]=f,t):(t[0]=b,t[1]=y,t[2]=h,t[3]=m,t[4]=O,t[5]=p,t)):i?(d=d||0,f=f||0,t[0]=b,t[1]=y,t[2]=d,t[3]=m,t[4]=O,t[5]=f,t):(t[0]=b,t[1]=y,t[2]=m,t[3]=O,t)}},956:function(t,e,r){"use strict"
r.r(e),r.d(e,"default",(function(){return d}))
var n=r(856),o=r(354),i=r(860),s=r(858),a=(r(353),r(77),r(859),r(857))
let u=class extends i.a{constructor(t){super(t),this.created=null,this.id=null,this.portal=null,this.title=null,this.username=null}get url(){const t=this.get("portal.restUrl")
return t?`${t}/content/users/${this.username}/${this.id}`:null}toJSON(){throw new o.a("internal:not-yet-implemented","PortalFolder.toJSON is not yet implemented")}}
Object(n.a)([Object(s.b)({type:Date})],u.prototype,"created",void 0),Object(n.a)([Object(s.b)()],u.prototype,"id",void 0),Object(n.a)([Object(s.b)()],u.prototype,"portal",void 0),Object(n.a)([Object(s.b)()],u.prototype,"title",void 0),Object(n.a)([Object(s.b)({readOnly:!0})],u.prototype,"url",null),Object(n.a)([Object(s.b)()],u.prototype,"username",void 0),u=Object(n.a)([Object(a.a)("esri.portal.PortalFolder")],u)
const l=u
var c,h=r(988)
let p=c=class extends i.a{constructor(...t){super(...t),this.access=null,this.created=null,this.culture=null,this.description=null,this.email=null,this.fullName=null,this.modified=null,this.orgId=null,this.portal=null,this.preferredView=null,this.privileges=null,this.region=null,this.role=null,this.roleId=null,this.sourceJSON=null,this.units=null,this.username=null,this.userType=null}get thumbnailUrl(){const t=this.url,e=this.thumbnail
return t&&e?this.portal._normalizeUrl(`${t}/info/${e}?f=json`):null}get userContentUrl(){const t=this.get("portal.restUrl")
return t?`${t}/content/users/${this.username}`:null}get url(){const t=this.get("portal.restUrl")
return t?`${t}/community/users/${this.username}`:null}addItem(t){const e=t&&t.item,r=t&&t.data,n=t&&t.folder,o={method:"post"}
e&&(o.query=e.createPostQuery(),null!=r&&("string"==typeof r?o.query.text=r:"object"==typeof r&&(o.query.text=JSON.stringify(r))))
let i=this.userContentUrl
return n&&(i+="/"+("string"==typeof n?n:n.id)),this.portal._request(i+"/addItem",o).then(t=>(e.id=t.id,e.portal=this.portal,e.loaded?e.reload():e.load()))}deleteItem(t){let e=this.userContentUrl
return t.ownerFolder&&(e+="/"+t.ownerFolder),this.portal._request(e+`/items/${t.id}/delete`,{method:"post"}).then(()=>{t.id=null,t.portal=null})}deleteItems(t){const e=this.userContentUrl+"/deleteItems",r=t.map(t=>t.id)
if(r.length){const n={method:"post",query:{items:r.join(",")}}
return this.portal._request(e,n).then(()=>{t.forEach(t=>{t.id=null,t.portal=null})})}return Promise.resolve(void 0)}fetchFolders(){return this.portal._request(this.userContentUrl,{query:{num:1}}).then(t=>{let e
return e=t&&t.folders?t.folders.map(t=>{const e=l.fromJSON(t)
return e.portal=this.portal,e}):[],e})}fetchGroups(){return this.portal._request(this.url).then(t=>{let e
return e=t&&t.groups?t.groups.map(t=>{const e=h.default.fromJSON(t)
return e.portal=this.portal,e}):[],e})}fetchItems(t){t||(t={})
let e,n=this.userContentUrl
return t.folder&&(n+="/"+t.folder.id),r.e(80).then(r.bind(null,1006)).then(({default:r})=>{e=r
const o={folders:!1,num:t.num||10,start:t.start||1,sortField:t.sortField||"created",sortOrder:t.sortOrder||"asc"}
return this.portal._request(n,{query:o})}).then(t=>{let r
return t&&t.items?(r=t.items.map(t=>{const r=e.fromJSON(t)
return r.portal=this.portal,r}),Promise.all(r.map(t=>t.load())).catch(t=>t).then(()=>({items:r,nextStart:t.nextStart,total:t.total}))):{items:[],nextStart:-1,total:0}})}fetchTags(){return this.portal._request(this.url+"/tags").then(t=>t.tags)}getThumbnailUrl(t){let e=this.thumbnailUrl
return e&&t&&(e+="&w="+t),e}queryFavorites(t){return this.favGroupId?(this._favGroup||(this._favGroup=new h.default({id:this.favGroupId,portal:this.portal})),this._favGroup.queryItems(t)):Promise.reject(new o.a("internal:unknown","Unknown internal error",{internalError:"Unknown favGroupId"}))}toJSON(){throw new o.a("internal:not-yet-implemented","PortalGroup.toJSON is not yet implemented")}static fromJSON(t){if(!t)return null
if(t.declaredClass)throw new Error("JSON object is already hydrated")
const e=new c
return e.sourceJSON=t,e.read(t),e}}
Object(n.a)([Object(s.b)()],p.prototype,"access",void 0),Object(n.a)([Object(s.b)({type:Date})],p.prototype,"created",void 0),Object(n.a)([Object(s.b)()],p.prototype,"culture",void 0),Object(n.a)([Object(s.b)()],p.prototype,"description",void 0),Object(n.a)([Object(s.b)()],p.prototype,"email",void 0),Object(n.a)([Object(s.b)()],p.prototype,"favGroupId",void 0),Object(n.a)([Object(s.b)()],p.prototype,"fullName",void 0),Object(n.a)([Object(s.b)({type:Date})],p.prototype,"modified",void 0),Object(n.a)([Object(s.b)()],p.prototype,"orgId",void 0),Object(n.a)([Object(s.b)()],p.prototype,"portal",void 0),Object(n.a)([Object(s.b)()],p.prototype,"preferredView",void 0),Object(n.a)([Object(s.b)()],p.prototype,"privileges",void 0),Object(n.a)([Object(s.b)()],p.prototype,"region",void 0),Object(n.a)([Object(s.b)()],p.prototype,"role",void 0),Object(n.a)([Object(s.b)()],p.prototype,"roleId",void 0),Object(n.a)([Object(s.b)()],p.prototype,"sourceJSON",void 0),Object(n.a)([Object(s.b)()],p.prototype,"thumbnail",void 0),Object(n.a)([Object(s.b)({readOnly:!0})],p.prototype,"thumbnailUrl",null),Object(n.a)([Object(s.b)()],p.prototype,"units",void 0),Object(n.a)([Object(s.b)({readOnly:!0})],p.prototype,"userContentUrl",null),Object(n.a)([Object(s.b)({readOnly:!0})],p.prototype,"url",null),Object(n.a)([Object(s.b)()],p.prototype,"username",void 0),Object(n.a)([Object(s.b)()],p.prototype,"userType",void 0),p=c=Object(n.a)([Object(a.a)("esri.portal.PortalUser")],p)
const d=p},968:function(t,e,r){"use strict"
r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return i})),r.d(e,"c",(function(){return s}))
var n=r(916)
function o(t){return t?t.hasZ?[t.xmax-t.xmin/2,t.ymax-t.ymin/2,t.zmax-t.zmin/2]:[t.xmax-t.xmin/2,t.ymax-t.ymin/2]:null}function i(t){return t?s(t.rings,t.hasZ):null}function s(t,e){if(!t||!t.length)return null
const r=[],o=[],i=e?[1/0,-1/0,1/0,-1/0,1/0,-1/0]:[1/0,-1/0,1/0,-1/0]
for(let r=0,n=t.length;r<n;r++){const n=a(t[r],e,i)
n&&o.push(n)}if(o.sort((t,r)=>{let n=t[2]-r[2]
return 0===n&&e&&(n=t[4]-r[4]),n}),o.length&&(r[0]=o[0][0],r[1]=o[0][1],e&&(r[2]=o[0][3]),(r[0]<i[0]||r[0]>i[1]||r[1]<i[2]||r[1]>i[3]||e&&(r[2]<i[4]||r[2]>i[5]))&&(r.length=0)),!r.length){const o=t[0]&&t[0].length?function(t,e){const r=e?[0,0,0]:[0,0],o=e?[0,0,0]:[0,0]
let i=0,s=0,a=0,u=0
for(let l=0,c=t.length;l<c-1;l++){const c=t[l],h=t[l+1]
if(c&&h){r[0]=c[0],r[1]=c[1],o[0]=h[0],o[1]=h[1],e&&c.length>2&&h.length>2&&(r[2]=c[2],o[2]=h[2])
const t=Object(n.c)(r,o)
if(t){i+=t
const r=Object(n.d)(c,h)
s+=t*r[0],a+=t*r[1],e&&r.length>2&&(u+=t*r[2])}}}return i>0?e?[s/i,a/i,u/i]:[s/i,a/i]:t.length?t[0]:null}(t[0],e):null
if(!o)return null
r[0]=o[0],r[1]=o[1],e&&o.length>2&&(r[2]=o[2])}return r}function a(t,e,r){let n=0,o=0,i=0,s=0,a=0
const u=t.length?t[0][0]:0,l=t.length?t[0][1]:0,c=t.length&&e?t[0][2]:0
for(let h=0;h<t.length;h++){const p=t[h],d=t[(h+1)%t.length],[f,b,y]=p,m=f-u,O=b-l,j=e?y-c:void 0,[g,v,M]=d,x=g-u,S=v-l,P=e?M-c:void 0,w=m*S-x*O
if(s+=w,n+=(m+x)*w,o+=(O+S)*w,e&&p.length>2&&d.length>2){const t=m*P-x*j
i+=(j+P)*t,a+=t}f<r[0]&&(r[0]=f),f>r[1]&&(r[1]=f),b<r[2]&&(r[2]=b),b>r[3]&&(r[3]=b),e&&(y<r[4]&&(r[4]=y),y>r[5]&&(r[5]=y))}if(s>0&&(s*=-1),a>0&&(a*=-1),!s)return null
s*=.5,a*=.5
const h=[n/(6*s)+u,o/(6*s)+l,s]
return e&&(r[4]===r[5]||0===a?(h[3]=(r[4]+r[5])/2,h[4]=0):(h[3]=i/(6*a)+c,h[4]=a)),h}},988:function(t,e,r){"use strict"
r.r(e),r.d(e,"default",(function(){return h}))
var n=r(856),o=r(354),i=r(860),s=r(858),a=(r(353),r(77),r(859)),u=r(857),l=r(926)
let c=class extends i.a{constructor(t){super(t),this.access=null,this.created=null,this.description=null,this.id=null,this.isInvitationOnly=!1,this.modified=null,this.owner=null,this.portal=null,this.snippet=null,this.sortField=null,this.sortOrder=null,this.tags=null,this.title=null}get thumbnailUrl(){const t=this.url,e=this.thumbnail
return t&&e?this.portal._normalizeUrl(`${t}/info/${e}?f=json`):null}get url(){const t=this.get("portal.restUrl")
return t?t+"/community/groups/"+this.id:null}fetchCategorySchema(t){return this.portal._request(this.url+"/categorySchema",t).then(e=>{const r=e.categorySchema||[]
return r.some(t=>"contentCategorySetsGroupQuery.LivingAtlas"===t.source)?this._fetchCategorySchemaSet("LivingAtlas",t):r})}fetchMembers(t){return this.portal._request(this.url+"/users",t)}getThumbnailUrl(t){let e=this.thumbnailUrl
return e&&t&&(e+="&w="+t),e}toJSON(){throw new o.a("internal:not-yet-implemented","PortalGroup.toJSON is not yet implemented")}queryItems(t,e){let r=Object(a.m)(l.a,t)
return parseFloat(this.portal.currentVersion)>5?(r=r||new l.a,this.portal._queryPortal(`/content/groups/${this.id}/search`,r,"PortalItem",e)):(r=r?r.clone():new l.a,r.query="group:"+this.id+(r.query?" "+r.query:""),this.portal.queryItems(r,e))}_fetchCategorySchemaSet(t,e){return this.portal._fetchSelf(this.portal.authMode,!0,e).then(t=>{const r=t.contentCategorySetsGroupQuery
if(r){const t=new l.a
return t.disableExtraQuery=!0,t.num=1,t.query=r,this.portal.queryGroups(t,e)}throw new o.a("portal-group:fetchCategorySchema","contentCategorySetsGroupQuery value not found")}).then(r=>{if(r.total){const n=r.results[0],o=new l.a
return o.num=1,o.query=`typekeywords:"${t}"`,n.queryItems(o,e)}throw new o.a("portal-group:fetchCategorySchema","contentCategorySetsGroupQuery group not found")}).then(t=>t.total?t.results[0].fetchData("json",e).then(t=>{const e=t&&t.categorySchema
return e&&e.length?e:[]}):[])}}
Object(n.a)([Object(s.b)()],c.prototype,"access",void 0),Object(n.a)([Object(s.b)({type:Date})],c.prototype,"created",void 0),Object(n.a)([Object(s.b)()],c.prototype,"description",void 0),Object(n.a)([Object(s.b)()],c.prototype,"id",void 0),Object(n.a)([Object(s.b)()],c.prototype,"isInvitationOnly",void 0),Object(n.a)([Object(s.b)({type:Date})],c.prototype,"modified",void 0),Object(n.a)([Object(s.b)()],c.prototype,"owner",void 0),Object(n.a)([Object(s.b)()],c.prototype,"portal",void 0),Object(n.a)([Object(s.b)()],c.prototype,"snippet",void 0),Object(n.a)([Object(s.b)()],c.prototype,"sortField",void 0),Object(n.a)([Object(s.b)()],c.prototype,"sortOrder",void 0),Object(n.a)([Object(s.b)()],c.prototype,"tags",void 0),Object(n.a)([Object(s.b)()],c.prototype,"thumbnail",void 0),Object(n.a)([Object(s.b)({readOnly:!0})],c.prototype,"thumbnailUrl",null),Object(n.a)([Object(s.b)()],c.prototype,"title",void 0),Object(n.a)([Object(s.b)({readOnly:!0})],c.prototype,"url",null),c=Object(n.a)([Object(u.a)("esri.portal.PortalGroup")],c)
const h=c}}])
