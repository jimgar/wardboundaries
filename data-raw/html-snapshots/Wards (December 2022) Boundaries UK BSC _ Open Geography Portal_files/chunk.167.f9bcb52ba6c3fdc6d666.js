(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[167,228,278,293,337],{1055:function(e,t,r){"use strict"
r.d(t,"a",(function(){return n}))
var s=r(77),i=r(20),a=r(861)
function n(e,t,r=!1,n){return new Promise((l,c)=>{if(Object(a.n)(n))return void c(o())
let u=()=>{d(),c(new Error("Unable to load "+t))},p=()=>{const t=e
d(),l(t)},h=()=>{if(!e)return
const t=e
d(),t.src="",c(o())}
const d=()=>{Object(s.a)("esri-image-decode")||(e.removeEventListener("error",u),e.removeEventListener("load",p)),u=null,p=null,e=null,Object(i.k)(n)&&n.removeEventListener("abort",h),h=null,r&&URL.revokeObjectURL(t)}
Object(i.k)(n)&&n.addEventListener("abort",h),Object(s.a)("esri-image-decode")?e.decode().then(p,u):(e.addEventListener("error",u),e.addEventListener("load",p))})}function o(){try{return new DOMException("Aborted","AbortError")}catch{const e=new Error
return e.name="AbortError",e}}},1072:function(e,t,r){"use strict"
r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return i}))
var s=r(878)
function i(e,t,r=s.a){return t||(t=new r),t===e||(t.removeAll(),(i=e)&&(Array.isArray(i)||"items"in i&&Array.isArray(i.items))?t.addMany(e):e&&t.add(e)),t
var i}function a(e){return e}},658:function(e,t,r){"use strict"
r.r(t),r.d(t,"default",(function(){return g}))
var s,i=r(856),a=r(20),n=r(355),o=r(858),l=(r(353),r(77),r(859),r(857)),c=r(875),u=r(866),p=r(659),h=r(928),d=r(904),y=r(872),b=r(662)
function m(e,t,r){return null==t?r:null==r?t:e(t,r)}let f=s=class extends c.a{constructor(...e){super(...e),this.type="extent",this.xmin=0,this.ymin=0,this.mmin=void 0,this.zmin=void 0,this.xmax=0,this.ymax=0,this.mmax=void 0,this.zmax=void 0}normalizeCtorArgs(e,t,r,s,i){return function(e){return e&&("esri.geometry.SpatialReference"===e.declaredClass||null!=e.wkid)}(e)?{spatialReference:e,xmin:0,ymin:0,xmax:0,ymax:0}:"object"==typeof e?(e.spatialReference=null==e.spatialReference?p.default.WGS84:e.spatialReference,e):{xmin:e,ymin:t,xmax:r,ymax:s,spatialReference:null==i?p.default.WGS84:i}}static fromBounds(e,t){return new s({xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:t})}static fromPoint(e){return new s({xmin:e.x,ymin:e.y,zmin:e.z,xmax:e.x,ymax:e.y,zmax:e.z,spatialReference:e.spatialReference})}get cache(){return this.commitProperty("xmin"),this.commitProperty("ymin"),this.commitProperty("zmin"),this.commitProperty("mmin"),this.commitProperty("xmax"),this.commitProperty("ymax"),this.commitProperty("zmax"),this.commitProperty("mmax"),this.commitProperty("spatialReference"),{}}get center(){const e=new u.a({x:.5*(this.xmin+this.xmax),y:.5*(this.ymin+this.ymax),spatialReference:this.spatialReference})
return this.hasZ&&(e.z=.5*(this.zmin+this.zmax)),this.hasM&&(e.m=.5*(this.mmin+this.mmax)),e}get extent(){return this.clone()}get hasM(){return null!=this.mmin&&null!=this.mmax}get hasZ(){return null!=this.zmin&&null!=this.zmax}get height(){return Math.abs(this.ymax-this.ymin)}get width(){return Math.abs(this.xmax-this.xmin)}centerAt(e){const t=this.center
return null!=e.z&&this.hasZ?this.offset(e.x-t.x,e.y-t.y,e.z-t.z):this.offset(e.x-t.x,e.y-t.y)}clone(){const e=new s
return e.xmin=this.xmin,e.ymin=this.ymin,e.xmax=this.xmax,e.ymax=this.ymax,e.spatialReference=this.spatialReference,null!=this.zmin&&(e.zmin=this.zmin,e.zmax=this.zmax),null!=this.mmin&&(e.mmin=this.mmin,e.mmax=this.mmax),e}contains(e){if(!e)return!1
const t=this.spatialReference,r=e.spatialReference
return t&&r&&!t.equals(r)&&Object(b.canProject)(t,r)&&(e=t.isWebMercator?Object(b.geographicToWebMercator)(e):Object(b.webMercatorToGeographic)(e,!0)),"point"===e.type?Object(h.e)(this,e):"extent"===e.type&&Object(h.c)(this,e)}equals(e){if(this===e)return!0
if(Object(a.j)(e))return!1
const t=this.spatialReference,r=e.spatialReference
return t&&r&&!t.equals(r)&&Object(b.canProject)(t,r)&&(e=t.isWebMercator?Object(b.geographicToWebMercator)(e):Object(b.webMercatorToGeographic)(e,!0)),this.xmin===e.xmin&&this.ymin===e.ymin&&this.zmin===e.zmin&&this.mmin===e.mmin&&this.xmax===e.xmax&&this.ymax===e.ymax&&this.zmax===e.zmax&&this.mmax===e.mmax}expand(e){const t=.5*(1-e),r=this.width*t,s=this.height*t
if(this.xmin+=r,this.ymin+=s,this.xmax-=r,this.ymax-=s,this.hasZ){const e=(this.zmax-this.zmin)*t
this.zmin+=e,this.zmax-=e}if(this.hasM){const e=(this.mmax-this.mmin)*t
this.mmin+=e,this.mmax-=e}return this}intersects(e){if(Object(a.j)(e))return!1
"mesh"===e.type&&(e=e.extent)
const t=this.spatialReference,r=e.spatialReference
return t&&r&&!t.equals(r)&&Object(b.canProject)(t,r)&&(e=t.isWebMercator?Object(b.geographicToWebMercator)(e):Object(b.webMercatorToGeographic)(e,!0)),Object(d.c)(e.type)(this,e)}normalize(){const e=this._normalize(!1,!0)
return Array.isArray(e)?e:[e]}offset(e,t,r){return this.xmin+=e,this.ymin+=t,this.xmax+=e,this.ymax+=t,null!=r&&(this.zmin+=r,this.zmax+=r),this}shiftCentralMeridian(){return this._normalize(!0)}union(e){return this===e||(this.xmin=Math.min(this.xmin,e.xmin),this.ymin=Math.min(this.ymin,e.ymin),this.xmax=Math.max(this.xmax,e.xmax),this.ymax=Math.max(this.ymax,e.ymax),(this.hasZ||e.hasZ)&&(this.zmin=m(Math.min,this.zmin,e.zmin),this.zmax=m(Math.max,this.zmax,e.zmax)),(this.hasM||e.hasM)&&(this.mmin=m(Math.min,this.mmin,e.mmin),this.mmax=m(Math.max,this.mmax,e.mmax))),this}intersection(e){return this===e?this:Object(a.j)(e)||!this.intersects(e)?null:(this.xmin=Math.max(this.xmin,e.xmin),this.ymin=Math.max(this.ymin,e.ymin),this.xmax=Math.min(this.xmax,e.xmax),this.ymax=Math.min(this.ymax,e.ymax),(this.hasZ||e.hasZ)&&(this.zmin=m(Math.max,this.zmin,e.zmin),this.zmax=m(Math.min,this.zmax,e.zmax)),(this.hasM||e.hasM)&&(this.mmin=m(Math.max,this.mmin,e.mmin),this.mmax=m(Math.min,this.mmax,e.mmax)),this)}toJSON(e){return this.write({},e)}_shiftCM(e=Object(y.e)(this.spatialReference)){if(!e||!this.spatialReference)return this
const t=this.spatialReference,r=this._getCM(e)
if(r){const s=t.isWebMercator?Object(b.webMercatorToGeographic)(r):r
this.xmin-=r.x,this.xmax-=r.x,t.isWebMercator||(s.x=this._normalizeX(s.x,e).x),this.spatialReference=new p.default(Object(n.c)(t.isWGS84?e.altTemplate:e.wkTemplate,{Central_Meridian:s.x}))}return this}_getCM(e){let t=null
const[r,s]=e.valid,i=this.xmin,a=this.xmax
return i>=r&&i<=s&&a>=r&&a<=s||(t=this.center),t}_normalize(e,t,r){const s=this.spatialReference
if(!s)return this
if(!(r=r||Object(y.e)(s)))return this
const i=this._getParts(r).map(e=>e.extent)
if(i.length<2)return i[0]||this
if(i.length>2)return e?this._shiftCM(r):this.set({xmin:r.valid[0],xmax:r.valid[1]})
if(e)return this._shiftCM(r)
if(t)return i
let a=!0,n=!0
return i.forEach(e=>{e.hasZ||(a=!1),e.hasM||(n=!1)}),{rings:i.map(e=>{const t=[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]
if(a){const r=(e.zmax-e.zmin)/2
for(let e=0;e<t.length;e++)t[e].push(r)}if(n){const r=(e.mmax-e.mmin)/2
for(let e=0;e<t.length;e++)t[e].push(r)}return t}),hasZ:a,hasM:n,spatialReference:s}}_getParts(e){let t=this.cache._parts
if(!t){t=[]
const{ymin:r,ymax:i,spatialReference:a}=this,n=this.width,o=this.xmin,l=this.xmax
let c
e=e||Object(y.e)(a)
const[u,p]=e.valid
c=this._normalizeX(this.xmin,e)
const h=c.x,d=c.frameId
c=this._normalizeX(this.xmax,e)
const b=c.x,m=c.frameId,f=h===b&&n>0
if(n>2*p){const e=new s(o<l?h:b,r,p,i,a),n=new s(u,r,o<l?b:h,i,a),c=new s(0,r,p,i,a),y=new s(u,r,0,i,a),f=[],g=[]
e.contains(c)&&f.push(d),e.contains(y)&&g.push(d),n.contains(c)&&f.push(m),n.contains(y)&&g.push(m)
for(let e=d+1;e<m;e++)f.push(e),g.push(e)
t.push({extent:e,frameIds:[d]},{extent:n,frameIds:[m]},{extent:c,frameIds:f},{extent:y,frameIds:g})}else h>b||f?t.push({extent:new s(h,r,p,i,a),frameIds:[d]},{extent:new s(u,r,b,i,a),frameIds:[m]}):t.push({extent:new s(h,r,b,i,a),frameIds:[d]})
this.cache._parts=t}const r=this.hasZ,i=this.hasM
if(r||i){const e={}
r&&(e.zmin=this.zmin,e.zmax=this.zmax),i&&(e.mmin=this.mmin,e.mmax=this.mmax)
for(let r=0;r<t.length;r++)t[r].extent.set(e)}return t}_normalizeX(e,t){const[r,s]=t.valid,i=2*s
let a,n=0
return e>s?(a=Math.ceil(Math.abs(e-s)/i),e-=a*i,n=a):e<r&&(a=Math.ceil(Math.abs(e-r)/i),e+=a*i,n=-a),{x:e,frameId:n}}}
Object(i.a)([Object(o.b)({readOnly:!0})],f.prototype,"cache",null),Object(i.a)([Object(o.b)({readOnly:!0})],f.prototype,"center",null),Object(i.a)([Object(o.b)({readOnly:!0})],f.prototype,"extent",null),Object(i.a)([Object(o.b)({readOnly:!0,json:{write:{enabled:!1,overridePolicy:null}}})],f.prototype,"hasM",null),Object(i.a)([Object(o.b)({readOnly:!0,json:{write:{enabled:!1,overridePolicy:null}}})],f.prototype,"hasZ",null),Object(i.a)([Object(o.b)({readOnly:!0})],f.prototype,"height",null),Object(i.a)([Object(o.b)({readOnly:!0})],f.prototype,"width",null),Object(i.a)([Object(o.b)({type:Number,json:{type:[Number,String],write:{enabled:!0,allowNull:!0}}})],f.prototype,"xmin",void 0),Object(i.a)([Object(o.b)({type:Number,json:{write:!0}})],f.prototype,"ymin",void 0),Object(i.a)([Object(o.b)({type:Number,json:{origins:{"web-scene":{write:!1}},write:{overridePolicy(){return{enabled:this.hasM}}}}})],f.prototype,"mmin",void 0),Object(i.a)([Object(o.b)({type:Number,json:{origins:{"web-scene":{write:!1}},write:{overridePolicy(){return{enabled:this.hasZ}}}}})],f.prototype,"zmin",void 0),Object(i.a)([Object(o.b)({type:Number,json:{write:!0}})],f.prototype,"xmax",void 0),Object(i.a)([Object(o.b)({type:Number,json:{write:!0}})],f.prototype,"ymax",void 0),Object(i.a)([Object(o.b)({type:Number,json:{origins:{"web-scene":{write:!1}},write:{overridePolicy(){return{enabled:this.hasM}}}}})],f.prototype,"mmax",void 0),Object(i.a)([Object(o.b)({type:Number,json:{origins:{"web-scene":{write:!1}},write:{overridePolicy(){return{enabled:this.hasZ}}}}})],f.prototype,"zmax",void 0),f=s=Object(i.a)([Object(l.a)("esri.geometry.Extent")],f),f.prototype.toJSON.isDefaultToJSON=!0
const g=f},660:function(e,t,r){"use strict"
r.r(t),r.d(t,"default",(function(){return d}))
var s=r(78),i=r(148),a=r(354),n=r(77),o=r(178),l=r(20),c=r(861),u=r(292),p=r(966),h=r(1055)
async function d(e,t){var o
const h=Object(u.w)(e),f=Object(u.v)(e)
f||h||(e=Object(u.F)(e))
const g={url:e,requestOptions:{...Object(l.t)(t)}}
let O=Object(u.n)(e)
if(O){const e=await async function(e,t){if(null!=e.responseData)return e.responseData
if(e.headers&&(t.requestOptions.headers={...t.requestOptions.headers,...e.headers}),e.query&&(t.requestOptions.query={...t.requestOptions.query,...e.query}),e.before){let r,s
try{s=await e.before(t)}catch(e){r=w("request:interceptor",e,t)}if((s instanceof Error||s instanceof a.a)&&(r=w("request:interceptor",s,t)),r)throw e.error&&e.error(r),r
return s}}(O,g)
if(null!=e)return{data:e,getHeader:j,requestOptions:g.requestOptions,url:g.url}
O.after||O.error||(O=null)}if(e=g.url,"image"===(t=g.requestOptions).responseType){if(Object(n.a)("host-webworker")||Object(n.a)("host-node"))throw w("request:invalid-parameters",new Error("responseType 'image' is not supported in Web Workers or Node environment"),g)}else if(h)throw w("request:invalid-parameters",new Error("Data URLs are not supported for responseType = "+t.responseType),g)
if("head"===t.method){if(t.body)throw w("request:invalid-parameters",new Error("body parameter cannot be set when method is 'head'"),g)
if(h||f)throw w("request:invalid-parameters",new Error("data and blob URLs are not supported for method 'head'"),g)}if(await async function(){Object(n.a)("host-webworker")?y||(y=await r.e(428).then(r.bind(null,1231))):d._abortableFetch||(d._abortableFetch=globalThis.fetch.bind(globalThis))}(),y)return y.execute(e,t)
const v=new AbortController
Object(c.q)(t,()=>v.abort())
const x={controller:v,credential:null,credentialToken:null,fetchOptions:null,hasToken:!1,interceptor:O,params:g,redoRequest:!1,useIdentity:b.useIdentity,useProxy:!1,useSSL:!1,withCredentials:!1},_=await async function(e){var t,r
let a,n
await async function(e){const t=e.params.url,r=e.params.requestOptions,a=e.controller.signal,n=r.body
let o=null,l=null,u=null
if(m&&"HTMLFormElement"in globalThis&&(n instanceof FormData?o=n:n instanceof HTMLFormElement&&(l=n,o=new FormData(l))),"string"==typeof n&&(u=n),e.fetchOptions={cache:r.cacheBust&&!d._abortableFetch.polyfill?"no-cache":"default",credentials:"same-origin",headers:r.headers||{},method:"head"===r.method?"HEAD":"GET",mode:"cors",redirect:"follow",signal:a},(o||u)&&(e.fetchOptions.body=o||u),"anonymous"===r.authMode&&(e.useIdentity=!1),e.hasToken=!!(/token=/i.test(t)||r.query&&r.query.token||o&&o.get&&o.get("token")||l&&l.elements.token),!e.hasToken&&s.default.apiKey&&Object(p.a)(t)&&(r.query||(r.query={}),r.query.token=s.default.apiKey,e.hasToken=!0),e.useIdentity&&!e.hasToken&&!e.credentialToken&&!M(t)&&!Object(c.n)(a)){let s
"immediate"===r.authMode?(await S(),s=await i.b.getCredential(t,{signal:a}),e.credential=s):"no-prompt"===r.authMode?(await S(),s=await i.b.getCredential(t,{prompt:!1,signal:a}).catch(()=>{}),e.credential=s):i.b&&(s=i.b.findCredential(t)),s&&(e.credentialToken=s.token,e.useSSL=!!s.ssl)}}(e)
try{do{[a,n]=await L(e)}while(!await T(e,a,n))}catch(t){const r=w("request:server",t,e.params,a)
throw r.details.ssl=e.useSSL,e.interceptor&&e.interceptor.error&&e.interceptor.error(r),r}const o=e.params.url
if(/\/sharing\/rest\/(accounts|portals)\/self/i.test(o)&&!e.hasToken&&!e.credentialToken&&null!=(t=n)&&null!=(r=t.user)&&r.username&&!Object(u.A)(o)){const e=Object(u.o)(o,!0)
e&&b.trustedServers.push(e)}const l=e.credential
if(l&&i.b){const e=i.b.findServerInfo(l.server)
let t=e&&e.owningSystemUrl
if(t){t=t.replace(/\/?$/,"/sharing")
const e=i.b.findCredential(t,l.userId)
e&&-1===i.b._getIdenticalSvcIdx(t,e)&&e.resources.unshift(t)}}return{data:n,getHeader:a?e=>a.headers.get(e):j,requestOptions:e.params.requestOptions,ssl:e.useSSL,url:e.params.url}}(x)
return null==(o=O)||null==o.after||o.after(_),_}let y
const b=s.default.request,m="FormData"in globalThis,f=[499,498,403,401],g=["COM_0056","COM_0057","SB_0008"],O=[/\/arcgis\/tokens/i,/\/sharing(\/rest)?\/generatetoken/i,/\/rest\/info/i],j=()=>null,v=Symbol()
function x(e){const t=Object(u.o)(e)
return!t||t.endsWith(".arcgis.com")||d._corsServers.includes(t)||Object(u.A)(t)}function w(e,t,r,s){let i="Error"
const n={url:r.url,requestOptions:r.requestOptions,getHeader:j,ssl:!1}
if(t instanceof a.a)return t.details?(t.details=Object(o.a)(t.details),t.details.url=r.url,t.details.requestOptions=r.requestOptions):t.details=n,t
if(t){const e=s&&(e=>s.headers.get(e)),r=s&&s.status,a=t.message
a&&(i=a),e&&(n.getHeader=e),n.httpStatus=(null!=t.httpCode?t.httpCode:t.code)||r||0,n.subCode=t.subcode,n.messageCode=t.messageCode,"string"==typeof t.details?n.messages=[t.details]:n.messages=t.details,n.raw=v in t?t[v]:t}return Object(c.m)(t)?Object(c.e)():new a.a(e,i,n)}async function S(){i.b||await Promise.all([r.e(3),r.e(23),r.e(29),r.e(68),r.e(490)]).then(r.bind(null,669))}function M(e){return O.some(t=>t.test(e))}async function L(e){let t=e.params.url
const r=e.params.requestOptions,s=e.fetchOptions,a=Object(u.v)(t)||Object(u.w)(t),o=r.responseType||"json",l=a?0:null!=r.timeout?r.timeout:b.timeout
let p=!1
if(!a){e.useSSL&&(t=Object(u.L)(t)),r.cacheBust&&"default"===s.cache&&(t=Object(u.d)(t,"request.preventCache",Date.now()))
let a={...r.query}
e.credentialToken&&(a.token=e.credentialToken)
let o=Object(u.G)(a)
Object(n.a)("esri-url-encodes-apostrophe")&&(o=o.replace(/'/g,"%27"))
const l=t.length+1+o.length
let c
p="delete"===r.method||"post"===r.method||"put"===r.method||!!r.body||l>b.maxUrlLength
const h=r.useProxy||!!Object(u.q)(t)
if(h){const e=Object(u.r)(t)
c=e.path,!p&&c.length+1+l>b.maxUrlLength&&(p=!0),e.query&&(a={...e.query,...a})}if("HEAD"===s.method&&(p||h)){if(p){if(l>b.maxUrlLength)throw w("request:invalid-parameters",new Error("URL exceeds maximum length"),e.params)
throw w("request:invalid-parameters",new Error("cannot use POST request when method is 'head'"),e.params)}if(h)throw w("request:invalid-parameters",new Error("cannot use proxy when method is 'head'"),e.params)}if(p?(s.method="delete"===r.method?"DELETE":"put"===r.method?"PUT":"POST",r.body?t=Object(u.e)(t,a):(s.body=Object(u.G)(a),s.headers["Content-Type"]="application/x-www-form-urlencoded")):t=Object(u.e)(t,a),h&&(e.useProxy=!0,t=`${c}?${t}`),a.token&&m&&s.body instanceof FormData){const e=s.body
e.set?e.set("token",a.token):e.append("token",a.token)}if(r.hasOwnProperty("withCredentials"))e.withCredentials=r.withCredentials
else if(!Object(u.s)(t,Object(u.l)()))if(Object(u.A)(t))e.withCredentials=!0
else if(i.b){const r=i.b.findServerInfo(t)
r&&r.webTierAuth&&(e.withCredentials=!0)}e.withCredentials&&(s.credentials="include")}let h,y,f=0,g=!1
l>0&&(f=setTimeout(()=>{g=!0,e.controller.abort()},l))
try{if("native-request-init"===r.responseType)y=s,y.url=t
else if("image"!==r.responseType||"default"!==s.cache||"GET"!==s.method||p||function(e){if(e)for(const t of Object.getOwnPropertyNames(e))if(e[t])return!0
return!1}(r.headers)||!a&&!e.useProxy&&b.proxyUrl&&!x(t)){if(h=await d._abortableFetch(t,s),e.useProxy||function(e){const t=Object(u.o)(e)
t&&!d._corsServers.includes(t)&&d._corsServers.push(t)}(t),"native"===r.responseType)y=h
else if("HEAD"!==s.method)if(h.ok){switch(o){case"array-buffer":y=await h.arrayBuffer()
break
case"blob":case"image":y=await h.blob()
break
default:y=await h.text()}if(f&&(clearTimeout(f),f=0),"json"===o||"xml"===o||"document"===o)if(y)switch(o){case"json":y=JSON.parse(y)
break
case"xml":y=_(y,"application/xml")
break
case"document":y=_(y,"text/html")}else y=null
if(y){if("array-buffer"===o||"blob"===o){const e=h.headers.get("Content-Type")
if(/application\/json|text\/plain/i.test(e)&&y["blob"===o?"size":"byteLength"]<=750)try{const e=await new Response(y).json()
e.error&&(y=e)}catch{}}"image"===o&&y instanceof Blob&&(y=await G(URL.createObjectURL(y),e,!0))}}else y=await h.text()}else y=await G(t,e)}catch(s){if("AbortError"===s.name){if(g)throw new Error("Timeout exceeded")
throw Object(c.e)("Request canceled")}if(!(!h&&s instanceof TypeError&&b.proxyUrl)||r.body||"delete"===r.method||"head"===r.method||"post"===r.method||"put"===r.method||e.useProxy||x(t))throw s
e.redoRequest=!0,Object(u.c)({proxyUrl:b.proxyUrl,urlPrefix:Object(u.o)(t)})}finally{f&&clearTimeout(f)}return[h,y]}function _(e,t){let r
try{r=(new DOMParser).parseFromString(e,t)}catch{}if(!r||r.getElementsByTagName("parsererror").length)throw new SyntaxError("XML Parse error")
return r}async function T(e,t,r){if(e.redoRequest)return e.redoRequest=!1,!1
const s=e.params.requestOptions
if(!t||"native"===s.responseType||"native-request-init"===s.responseType)return!0
let a,n,o,l
if(!t.ok)throw a=new Error(`Unable to load ${t.url} status: ${t.status}`),a[v]=r,a
null!=r&&r.error&&(a=r.error),a&&(n=Number(a.code),o=a.hasOwnProperty("subcode")?Number(a.subcode):null,l=a.messageCode,l=l&&l.toUpperCase())
const c=s.authMode
if(403===n&&(4===o||a.message&&a.message.toLowerCase().indexOf("ssl")>-1&&-1===a.message.toLowerCase().indexOf("permission"))){if(!e.useSSL)return e.useSSL=!0,!1}else if(!e.hasToken&&e.useIdentity&&("no-prompt"!==c||498===n)&&-1!==f.indexOf(n)&&!M(e.params.url)&&(403!==n||-1===g.indexOf(l)&&(null==o||2===o&&e.credentialToken))){await S()
try{const t=await i.b.getCredential(e.params.url,{error:w("request:server",a,e.params),prompt:"no-prompt"!==c,signal:e.controller.signal,token:e.credentialToken})
return e.credential=t,e.credentialToken=t.token,e.useSSL=e.useSSL||t.ssl,!1}catch(t){if("no-prompt"===c)return e.credential=null,e.credentialToken=null,!1
a=t}}if(a)throw a
return!0}function G(e,t,r=!1){const s=t.controller.signal,i=new Image
return t.withCredentials?i.crossOrigin="use-credentials":i.crossOrigin="anonymous",i.alt="",i.src=e,Object(h.a)(i,e,r,s)}d._abortableFetch=null,d._corsServers=["https://server.arcgisonline.com","https://services.arcgisonline.com"]},662:function(e,t,r){"use strict"
r.r(t),r.d(t,"canProject",(function(){return b})),r.d(t,"geographicToWebMercator",(function(){return O})),r.d(t,"lngLatToXY",(function(){return f})),r.d(t,"project",(function(){return m})),r.d(t,"webMercatorToGeographic",(function(){return j})),r.d(t,"x2lon",(function(){return u})),r.d(t,"xyToLngLat",(function(){return g})),r.d(t,"y2lat",(function(){return p}))
var s=r(178),i=r(20),a=r(659),n=r(902),o=r(872)
function l(e){return 57.29577951308232*e}function c(e){return.017453292519943*e}function u(e){return e/n.a.radius}function p(e){return Math.PI/2-2*Math.atan(Math.exp(-e/n.a.radius))}function h(e){return null!=e.wkid||null!=e.wkt}const d=[0,0]
function y(e,t,r,s,i){const a=e,n=i
if(n.spatialReference=r,"x"in a&&"x"in n)[n.x,n.y]=t(a.x,a.y,d,s)
else if("xmin"in a&&"xmin"in n)[n.xmin,n.ymin]=t(a.xmin,a.ymin,d,s),[n.xmax,n.ymax]=t(a.xmax,a.ymax,d,s)
else if("paths"in a&&"paths"in n||"rings"in a&&"rings"in n){const e="paths"in a?a.paths:a.rings,r=[]
let i
for(let a=0;a<e.length;a++){const n=e[a]
i=[],r.push(i)
for(let e=0;e<n.length;e++)i.push(t(n[e][0],n[e][1],[0,0],s)),n[e].length>2&&i[e].push(n[e][2]),n[e].length>3&&i[e].push(n[e][3])}"paths"in n?n.paths=r:n.rings=r}else if("points"in a&&"points"in n){const e=a.points,r=[]
for(let i=0;i<e.length;i++)r[i]=t(e[i][0],e[i][1],[0,0],s),e[i].length>2&&r[i].push(e[i][2]),e[i].length>3&&r[i].push(e[i][3])
n.points=r}return i}function b(e,t){const r=e&&(h(e)?e:e.spatialReference),s=t&&(h(t)?t:t.spatialReference)
return!(e&&"type"in e&&"mesh"===e.type||t&&"type"in t&&"mesh"===t.type||!r||!s)&&(!!Object(o.d)(s,r)||Object(o.p)(s)&&Object(o.m)(r)||Object(o.p)(r)&&Object(o.m)(s))}function m(e,t){if(Object(i.j)(e))return null
const r=e.spatialReference,n=t&&(h(t)?t:t.spatialReference)
return b(r,n)?Object(o.d)(r,n)?Object(s.a)(e):Object(o.p)(n)?y(e,f,a.default.WebMercator,!1,Object(s.a)(e)):Object(o.m)(n)?y(e,g,a.default.WGS84,!1,Object(s.a)(e)):null:null}function f(e,t,r=[0,0]){t>89.99999?t=89.99999:t<-89.99999&&(t=-89.99999)
const s=c(t)
return r[0]=c(e)*n.a.radius,r[1]=n.a.halfSemiMajorAxis*Math.log((1+Math.sin(s))/(1-Math.sin(s))),r}function g(e,t,r=[0,0],s=!1){const i=l(e/n.a.radius)
return r[0]=s?i:i-360*Math.floor((i+180)/360),r[1]=l(Math.PI/2-2*Math.atan(Math.exp(-t/n.a.radius))),r}function O(e,t=!1,r=Object(s.a)(e)){return y(e,f,a.default.WebMercator,t,r)}function j(e,t=!1,r=Object(s.a)(e)){return y(e,g,a.default.WGS84,t,r)}},670:function(e,t,r){"use strict"
r.r(t),r.d(t,"esriBasemapDefinitions",(function(){return n})),r.d(t,"getBasemapTitle",(function(){return a}))
var s=r(897),i=r(900)
async function a(e){if(!e)return
const t=e.indexOf("-vector")>-1?e.slice(0,e.indexOf("-vector")):e,r=await Object(i.a)("esri/t9n/basemaps")
return r[e]||r[t]}const n={streets:{id:"streets",classic:!0,deprecated:!0,get thumbnailUrl(){return Object(s.b)("esri/images/basemap/streets.jpg")},baseMapLayers:[{id:"streets-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Street Map",showLegend:!1,visibility:!0,opacity:1}]},satellite:{id:"satellite",classic:!0,get thumbnailUrl(){return Object(s.b)("esri/images/basemap/satellite.jpg")},baseMapLayers:[{id:"satellite-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Imagery",showLegend:!1,visibility:!0,opacity:1}]},hybrid:{id:"hybrid",classic:!0,get thumbnailUrl(){return Object(s.b)("esri/images/basemap/hybrid.jpg")},baseMapLayers:[{id:"hybrid-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Imagery",showLegend:!1,visibility:!0,opacity:1},{id:"hybrid-reference-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Boundaries and Places",isReference:!0,showLegend:!1,visibility:!0,opacity:1}]},terrain:{id:"terrain",classic:!0,get thumbnailUrl(){return Object(s.b)("esri/images/basemap/terrain.jpg")},baseMapLayers:[{id:"terrain-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Terrain Base",showLegend:!1,visibility:!0,opacity:1},{id:"terrain-reference-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Reference_Overlay/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Reference Overlay",isReference:!0,showLegend:!1,visibility:!0,opacity:1}]},topo:{id:"topo",classic:!0,deprecated:!0,get thumbnailUrl(){return Object(s.b)("esri/images/basemap/topo.jpg")},baseMapLayers:[{id:"topo-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Topo Map",showLegend:!1,visibility:!0,opacity:1}]},gray:{id:"gray",classic:!0,deprecated:!0,get thumbnailUrl(){return Object(s.b)("esri/images/basemap/gray.jpg")},baseMapLayers:[{id:"gray-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Light Gray Base",showLegend:!1,visibility:!0,opacity:1},{id:"gray-reference-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Light Gray Reference",isReference:!0,showLegend:!1,visibility:!0,opacity:1}]},"dark-gray":{id:"dark-gray",classic:!0,deprecated:!0,get thumbnailUrl(){return Object(s.b)("esri/images/basemap/dark-gray.jpg")},baseMapLayers:[{id:"dark-gray-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Dark Gray Base",showLegend:!1,visibility:!0,opacity:1},{id:"dark-gray-reference-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Dark Gray Reference",isReference:!0,showLegend:!1,visibility:!0,opacity:1}]},oceans:{id:"oceans",classic:!0,get thumbnailUrl(){return Object(s.b)("esri/images/basemap/oceans.jpg")},baseMapLayers:[{id:"oceans-base-layer",url:"//services.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Base/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Ocean Base",showLegend:!1,visibility:!0,opacity:1},{id:"oceans-reference-layer",url:"//services.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Reference/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Ocean Reference",isReference:!0,showLegend:!1,visibility:!0,opacity:1}]},"national-geographic":{id:"national-geographic",classic:!0,deprecated:!0,get thumbnailUrl(){return Object(s.b)("esri/images/basemap/national-geographic.jpg")},baseMapLayers:[{id:"national-geographic-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer",title:"NatGeo World Map",showLegend:!1,layerType:"ArcGISTiledMapServiceLayer",visibility:!0,opacity:1}]},osm:{id:"osm",classic:!0,get thumbnailUrl(){return Object(s.b)("esri/images/basemap/osm.jpg")},baseMapLayers:[{id:"osm-base-layer",layerType:"OpenStreetMap",title:"Open Street Map",showLegend:!1,visibility:!0,opacity:1}]},"dark-gray-vector":{id:"dark-gray-vector",classic:!0,get thumbnailUrl(){return Object(s.b)("esri/images/basemap/dark-gray-vector.jpg")},baseMapLayers:[{id:"dark-gray-base-layer",styleUrl:"https://cdn.arcgis.com/sharing/rest/content/items/5e9b3685f4c24d8781073dd928ebda50/resources/styles/root.json",layerType:"VectorTileLayer",title:"Dark Gray Base",visibility:!0,opacity:1},{id:"dark-gray-reference-layer",styleUrl:"https://cdn.arcgis.com/sharing/rest/content/items/747cb7a5329c478cbe6981076cc879c5/resources/styles/root.json",layerType:"VectorTileLayer",title:"Dark Gray Reference",isReference:!0,visibility:!0,opacity:1}]},"gray-vector":{id:"gray-vector",classic:!0,get thumbnailUrl(){return Object(s.b)("esri/images/basemap/gray-vector.jpg")},baseMapLayers:[{id:"gray-base-layer",styleUrl:"https://cdn.arcgis.com/sharing/rest/content/items/291da5eab3a0412593b66d384379f89f/resources/styles/root.json",layerType:"VectorTileLayer",title:"Light Gray Base",visibility:!0,opacity:1},{id:"gray-reference-layer",styleUrl:"https://cdn.arcgis.com/sharing/rest/content/items/1768e8369a214dfab4e2167d5c5f2454/resources/styles/root.json",layerType:"VectorTileLayer",title:"Light Gray Reference",isReference:!0,visibility:!0,opacity:1}]},"streets-vector":{id:"streets-vector",classic:!0,get thumbnailUrl(){return Object(s.b)("esri/images/basemap/streets-vector.jpg")},baseMapLayers:[{id:"streets-vector-base-layer",styleUrl:"//cdn.arcgis.com/sharing/rest/content/items/de26a3cf4cc9451298ea173c4b324736/resources/styles/root.json",layerType:"VectorTileLayer",title:"World Streets",visibility:!0,opacity:1}]},"topo-vector":{id:"topo-vector",classic:!0,get thumbnailUrl(){return Object(s.b)("esri/images/basemap/topo-vector.jpg")},baseMapLayers:[{id:"world-hillshade-layer",url:"//services.arcgisonline.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Hillshade",showLegend:!1,visibility:!0,opacity:1},{id:"topo-vector-base-layer",styleUrl:"//cdn.arcgis.com/sharing/rest/content/items/7dc6cea0b1764a1f9af2e679f642f0f5/resources/styles/root.json",layerType:"VectorTileLayer",title:"World Topo",visibility:!0,opacity:1}]},"streets-night-vector":{id:"streets-night-vector",classic:!0,get thumbnailUrl(){return Object(s.b)("esri/images/basemap/streets-night.jpg")},baseMapLayers:[{id:"streets-night-vector-base-layer",styleUrl:"//cdn.arcgis.com/sharing/rest/content/items/86f556a2d1fd468181855a35e344567f/resources/styles/root.json",layerType:"VectorTileLayer",title:"World Streets Night",visibility:!0,opacity:1}]},"streets-relief-vector":{id:"streets-relief-vector",classic:!0,get thumbnailUrl(){return Object(s.b)("esri/images/basemap/streets-relief.jpg")},baseMapLayers:[{id:"world-hillshade-layer",url:"//services.arcgisonline.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Hillshade",showLegend:!1,visibility:!0,opacity:1},{id:"streets-relief-vector-base-layer",styleUrl:"//www.arcgis.com/sharing/rest/content/items/b266e6d17fc345b498345613930fbd76/resources/styles/root.json",title:"World Streets Relief",layerType:"VectorTileLayer",visibility:!0,opacity:1}]},"streets-navigation-vector":{id:"streets-navigation-vector",classic:!0,get thumbnailUrl(){return Object(s.b)("esri/images/basemap/streets-navigation.jpg")},baseMapLayers:[{id:"streets-navigation-vector-base-layer",styleUrl:"//cdn.arcgis.com/sharing/rest/content/items/63c47b7177f946b49902c24129b87252/resources/styles/root.json",layerType:"VectorTileLayer",title:"World Streets Navigation",visibility:!0,opacity:1}]},"arcgis-imagery":{get thumbnailUrl(){return Object(s.b)("esri/images/basemap/hybrid.jpg")},title:"Imagery Hybrid",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Imagery",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/World_Imagery/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Imagery:Labels",title:"Hybrid Reference Layer",isReference:!0}]},"arcgis-imagery-standard":{get thumbnailUrl(){return Object(s.b)("esri/images/basemap/satellite.jpg")},title:"Imagery",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Imagery",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/World_Imagery/MapServer"}]},"arcgis-imagery-labels":{title:"Hybrid [Reference]",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Imagery:Labels",title:"Hybrid Reference Layer",isReference:!0}]},"arcgis-light-gray":{get thumbnailUrl(){return Object(s.b)("esri/images/basemap/gray-vector.jpg")},title:"Light Gray Canvas",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:LightGray:Base",title:"Light Gray Canvas Base"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:LightGray:Labels",title:"Light Gray Canvas Labels",isReference:!0}]},"arcgis-dark-gray":{get thumbnailUrl(){return Object(s.b)("esri/images/basemap/dark-gray.jpg")},title:"Dark Gray Canvas",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:DarkGray:Base",title:"Dark Gray Canvas Base"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:DarkGray:Labels",title:"Dark Gray Canvas Labels",isReference:!0}]},"arcgis-navigation":{get thumbnailUrl(){return Object(s.b)("esri/images/basemap/streets-navigation.jpg")},title:"Navigation",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Navigation",title:"World Navigation Map"}]},"arcgis-navigation-night":{title:"Navigation (Dark Mode)",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:NavigationNight",title:"World Navigation Map (Dark Mode)"}]},"arcgis-streets":{get thumbnailUrl(){return Object(s.b)("esri/images/basemap/streets-vector.jpg")},title:"Streets",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Streets",title:"World Street Map"}]},"arcgis-streets-night":{get thumbnailUrl(){return Object(s.b)("esri/images/basemap/streets-night.jpg")},title:"Streets (Night)",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:StreetsNight",title:"World Street Map (Night)"}]},"arcgis-streets-relief":{get thumbnailUrl(){return Object(s.b)("esri/images/basemap/streets-relief.jpg")},title:"Streets (with Relief)",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:StreetsRelief:Base",title:"World Street Map (with Relief)"}]},"arcgis-topographic":{get thumbnailUrl(){return Object(s.b)("esri/images/basemap/topo.jpg")},title:"Topographic",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Topographic:Base",title:"World Topographic Map"}]},"arcgis-oceans":{get thumbnailUrl(){return Object(s.b)("esri/images/basemap/oceans.jpg")},title:"Oceans",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Ocean Base",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Ocean/World_Ocean_Base/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Oceans:Labels",title:"World Ocean Reference",isReference:!0}]},"osm-standard":{title:"OpenStreetMap",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:Standard",title:"OpenStreetMap"}]},"osm-standard-relief":{title:"OpenStreetMap (with relief)",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:StandardRelief:Base",layerType:"VectorTileLayer",title:"OpenStreetMap Relief Base"}]},"osm-streets":{title:"OpenStreetMap (Streets)",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:Streets",title:"OpenStreetMap (Streets)"}]},"osm-streets-relief":{title:"OpenStreetMap (Streets with relief)",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:StreetsRelief:Base",layerType:"VectorTileLayer",title:"OpenStreetMap Relief Base"}]},"osm-light-gray":{title:"OpenStreetMap (Light Gray Canvas)",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:LightGray:Base",title:"OSM (Light Gray Base)"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:LightGray:Labels",title:"OSM (Light Gray Reference)",isReference:!0}]},"osm-dark-gray":{title:"OpenStreetMap (Dark Gray Canvas)",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:DarkGray:Base",title:"OSM (Dark Gray Base)"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:DarkGray:Labels",title:"OSM (Dark Gray Reference)",isReference:!0}]},"arcgis-terrain":{title:"Terrain with Labels",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Terrain:Base",title:"World Terrain Base"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Terrain:Detail",title:"World Terrain Reference",isReference:!0}]},"arcgis-community":{title:"Community",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Community",title:"Community"}]},"arcgis-charted-territory":{title:"Charted Territory",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:ChartedTerritory:Base",title:"Charted Territory"}]},"arcgis-colored-pencil":{title:"Colored Pencil",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:ColoredPencil",title:"Colored Pencil"}]},"arcgis-nova":{title:"Nova",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Nova",title:"Nova"}]},"arcgis-modern-antique":{title:"Modern Antique",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:ModernAntique:Base",title:"Modern Antique"}]},"arcgis-midcentury":{title:"Mid-Century",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Midcentury",title:"Mid-Century"}]},"arcgis-newspaper":{title:"Newspaper",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Newspaper",title:"Newspaper"}]},"arcgis-hillshade-light":{title:"Hillshade",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"}]},"arcgis-hillshade-dark":{title:"Hillshade (Dark)",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade (Dark)",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade_Dark/MapServer"}]}}},671:function(e,t,r){"use strict"
r.r(t),r.d(t,"default",(function(){return _}))
var s,i=r(856),a=r(878),n=r(1072),o=r(996),l=r(860),c=r(178),u=r(903),p=r(1193),h=r(177),d=r(20),y=r(861),b=r(292),m=r(858),f=(r(859),r(857)),g=r(864),O=r(659),j=r(914),v=r(1006),x=r(670),w=r(1414)
let S=0
const M=h.a.getLogger("esri.Basemap")
let L=s=class extends(Object(l.b)(u.a)){constructor(e){super(e),this.id=null,this.portalItem=null,this.spatialReference=null,this.thumbnailUrl=null,this.title="Basemap",this.id=Date.now().toString(16)+"-basemap-"+S++,this.baseLayers=new a.a,this.referenceLayers=new a.a
const t=e=>{e.parent&&e.parent!==this&&"remove"in e.parent&&e.parent.remove(e),e.parent=this,"elevation"===e.type&&M.error(`Layer '${e.title}, id:${e.id}' of type '${e.type}' is not supported as a basemap layer and will therefore be ignored.`)},r=e=>{e.parent=null}
this.baseLayers.on("after-add",e=>t(e.item)),this.referenceLayers.on("after-add",e=>t(e.item)),this.baseLayers.on("after-remove",e=>r(e.item)),this.referenceLayers.on("after-remove",e=>r(e.item))}initialize(){this.when().catch(e=>{M.error("#load()",`Failed to load basemap (title: '${this.title}', id: '${this.id}')`,e)}),this.resourceInfo&&this.read(this.resourceInfo.data,this.resourceInfo.context)}destroy(){var e
const t=this.baseLayers.removeAll()
for(const e of t)e.destroy()
const r=this.referenceLayers.removeAll()
for(const e of r)e.destroy()
this.baseLayers.destroy(),this.referenceLayers.destroy(),null==(e=this.portalItem)||e.destroy(),this.portalItem=null}normalizeCtorArgs(e){return e&&"resourceInfo"in e&&(this._set("resourceInfo",e.resourceInfo),delete(e={...e}).resourceInfo),e}set baseLayers(e){this._set("baseLayers",Object(n.b)(e,this._get("baseLayers")))}_writeBaseLayers(e,t,r){const s=[]
e?(r={...r,layerContainerType:"basemap"},this.baseLayers.forEach(e=>{const t=Object(w.a)(e,r.webmap?r.webmap.getLayerJSONFromResourceInfo(e):null,r)
Object(d.k)(t)&&s.push(t)}),this.referenceLayers.forEach(e=>{const t=Object(w.a)(e,r.webmap?r.webmap.getLayerJSONFromResourceInfo(e):null,r)
Object(d.k)(t)&&(t.isReference=!0,s.push(t))}),t.baseMapLayers=s):t.baseMapLayers=s}set referenceLayers(e){this._set("referenceLayers",Object(n.b)(e,this._get("referenceLayers")))}writeTitle(e,t){t.title=e||"Basemap"}load(e){return this.addResolvingPromise(this._loadFromSource(e)),Promise.resolve(this)}loadAll(){return Object(p.a)(this,e=>{e(this.baseLayers,this.referenceLayers)})}clone(){const e={id:this.id,title:this.title,portalItem:this.portalItem,baseLayers:this.baseLayers.slice(),referenceLayers:this.referenceLayers.slice()}
return this.loaded&&(e.loadStatus="loaded"),new s({resourceInfo:this.resourceInfo}).set(e)}read(e,t){this.resourceInfo||this._set("resourceInfo",{data:e,context:t}),super.read(e,t)}write(e,t){return e=e||{},t&&t.origin||(t={origin:"web-map",...t}),super.write(e,t),!this.loaded&&this.resourceInfo&&this.resourceInfo.data.baseMapLayers&&(e.baseMapLayers=this.resourceInfo.data.baseMapLayers.map(e=>{const t=Object(c.a)(e)
return t.url&&Object(b.y)(t.url)&&(t.url="https:"+t.url),t.templateUrl&&Object(b.y)(t.templateUrl)&&(t.templateUrl="https:"+t.templateUrl),t})),e}async _loadFromSource(e){const{resourceInfo:t,portalItem:r}=this
Object(y.v)(e)
const s=[]
if(t){const r=t.context?t.context.url:null
if(s.push(this._loadLayersFromJSON(t.data,r,e)),t.data.id&&!t.data.title){const e=t.data.id
s.push(Object(x.getBasemapTitle)(e).then(e=>{e&&this.read({title:e},t.context)}))}}else r&&s.push(this._loadFromItem(r,e))
await Promise.all(s)}async _loadLayersFromJSON(e,t,s){const i=this.resourceInfo&&this.resourceInfo.context,a=this.portalItem&&this.portalItem.portal||i&&i.portal||null,n=i&&"web-scene"===i.origin?"web-scene":"web-map",{populateOperationalLayers:o}=await r.e(47).then(r.bind(null,1643)),l=[]
if(Object(y.v)(s),e.baseMapLayers&&Array.isArray(e.baseMapLayers)){const r={context:{origin:n,url:t,portal:a,layerContainerType:"basemap"},defaultLayerType:"DefaultTileLayer"},s=o(this.baseLayers,e.baseMapLayers.filter(e=>!e.isReference),r)
l.push(s)
const i=o(this.referenceLayers,e.baseMapLayers.filter(e=>e.isReference),r)
l.push(i)}await Object(y.j)(l)}async _loadFromItem(e,t){const r=await e.load(t),s=await r.fetchData("json",t),i=Object(b.M)(e.itemUrl)
return this._set("resourceInfo",{data:s.baseMap,context:{origin:"web-map",portal:e.portal||j.a.getDefault(),url:i}}),this.read(this.resourceInfo.data,this.resourceInfo.context),this.read({spatialReference:s.spatialReference},this.resourceInfo.context),this.read({title:e.title,thumbnailUrl:e.thumbnailUrl},{origin:"portal-item",portal:e.portal||j.a.getDefault(),url:i}),this._loadLayersFromJSON(this.resourceInfo.data,i,t)}static fromId(e){const t=x.esriBasemapDefinitions[e]
if(t){if(t.deprecated){let t=null
"dark-gray"===e?t="dark-gray-vector":"gray"===e?t="gray-vector":"streets"===e?t="streets-vector":"topo"===e&&(t="topo-vector"),Object(o.a)(M,`The ${e} basemap has entered mature support and is no longer being updated.`,{replacement:t,see:"https://arcg.is/1iq8aD",warnOnce:!0})}return s.fromJSON(t)}return null}}
Object(i.a)([Object(m.b)({json:{write:{ignoreOrigin:!0,target:"baseMapLayers",writer(e,t,r,s){this._writeBaseLayers(e,t,s)}},origins:{"web-scene":{write:{ignoreOrigin:!0,target:{baseMapLayers:{type:a.a}},writer(e,t,r,s){this._writeBaseLayers(e,t,s)}}}}}})],L.prototype,"baseLayers",null),Object(i.a)([Object(m.b)({type:String,json:{origins:{"web-scene":{write:!0}}}})],L.prototype,"id",void 0),Object(i.a)([Object(m.b)({type:v.default})],L.prototype,"portalItem",void 0),Object(i.a)([Object(m.b)()],L.prototype,"referenceLayers",null),Object(i.a)([Object(m.b)({readOnly:!0})],L.prototype,"resourceInfo",void 0),Object(i.a)([Object(m.b)({type:O.default})],L.prototype,"spatialReference",void 0),Object(i.a)([Object(m.b)()],L.prototype,"thumbnailUrl",void 0),Object(i.a)([Object(m.b)({type:String,json:{origins:{"web-scene":{write:{isRequired:!0}}}}})],L.prototype,"title",void 0),Object(i.a)([Object(g.a)("title")],L.prototype,"writeTitle",null),L=s=Object(i.a)([Object(f.a)("esri.Basemap")],L)
const _=L},863:function(e,t,r){"use strict"
r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return a}))
var s=r(109)
class i{constructor(e,t={ignoreUnknown:!1,useNumericKeys:!1}){this.jsonToAPI=e,this.options=t,this.apiValues=[],this.jsonValues=[],this.apiToJSON=this._invertMap(e),this.apiValues=this._getKeysSorted(this.apiToJSON),this.jsonValues=this._getKeysSorted(this.jsonToAPI),this.read=e=>this.fromJSON(e),this.write=(e,t,r)=>{const i=this.toJSON(e)
void 0!==i&&Object(s.c)(r,i,t)},this.write.isJSONMapWriter=!0}toJSON(e){if(this.apiToJSON.hasOwnProperty(e)){const t=this.apiToJSON[e]
return this.options.useNumericKeys?+t:t}return this.options.ignoreUnknown?void 0:e}fromJSON(e){return this.jsonToAPI.hasOwnProperty(e)?this.jsonToAPI[e]:this.options.ignoreUnknown?void 0:e}_invertMap(e){const t={}
for(const r in e)t[e[r]]=r
return t}_getKeysSorted(e){const t=[]
for(const r in e)t.push(r)
return t.sort(),t}}function a(){return function(e,t){return new i(e,{ignoreUnknown:!0,...t})}}},865:function(e,t,r){"use strict"
r.d(t,"a",(function(){return i}))
var s=r(858)
function i(e,t,r){let i,a
return void 0===t||Array.isArray(t)?(a=e,r=t,i=[void 0]):(a=t,i=Array.isArray(e)?e:[e]),(e,t)=>{const n=e.constructor.prototype
i.forEach(i=>{const o=Object(s.c)(e,i,a)
o.read&&"object"==typeof o.read||(o.read={}),o.read.reader=n[t],r&&(o.read.source=(o.read.source||[]).concat(r))})}}},866:function(e,t,r){"use strict"
r.d(t,"a",(function(){return v}))
var s,i=r(856),a=r(177),n=r(20),o=r(858),l=(r(353),r(77),r(880)),c=r(865),u=r(857),p=r(864),h=r(859),d=r(875),y=r(659),b=r(872),m=r(662)
const f=[0,0]
function g(e){return e&&("esri.geometry.SpatialReference"===e.declaredClass||null!=e.wkid)}const O=a.a.getLogger("esri.geometry.Point")
let j=s=class extends d.a{constructor(...e){super(...e),this.x=0,this.y=0,this.z=void 0,this.m=void 0,this.type="point"}static copy(e,t){t._set("x",e._get("x")),t._set("y",e._get("y")),t._set("z",e._get("z")),t._set("m",e._get("m"))
const r=e._get("spatialReference")
t._set("spatialReference",Object.isFrozen(r)?r:r.clone())}normalizeCtorArgs(e,t,r,s,i){let a
if(Array.isArray(e))a=e,i=t,e=a[0],t=a[1],r=a[2],s=a[3]
else if(e&&"object"==typeof e){if(a=e,e=null!=a.x?a.x:a.longitude,t=null!=a.y?a.y:a.latitude,r=a.z,s=a.m,(i=a.spatialReference)&&"esri.geometry.SpatialReference"!==i.declaredClass&&(i=new y.default(i)),null!=a.longitude||null!=a.latitude)if(null==a.longitude)O.warn(".longitude=","Latitude was defined without longitude")
else if(null==a.latitude)O.warn(".latitude=","Longitude was defined without latitude")
else if(!a.declaredClass&&i&&i.isWebMercator){const r=Object(m.lngLatToXY)(a.longitude,a.latitude,f)
e=r[0],t=r[1]}}else g(r)?(i=r,r=null):g(s)&&(i=s,s=null)
const n={x:e,y:t}
return null==n.x&&null!=n.y?O.warn(".y=","Y coordinate was defined without an X coordinate"):null==n.y&&null!=n.x&&O.warn(".x=","X coordinate was defined without a Y coordinate"),null!=i&&(n.spatialReference=i),null!=r&&(n.z=r),null!=s&&(n.m=s),n}get cache(){return this.commitProperty("x"),this.commitProperty("y"),this.commitProperty("z"),this.commitProperty("m"),this.commitProperty("spatialReference"),{}}get hasM(){return void 0!==this.m}set hasM(e){e!==(void 0!==this._get("m"))&&(this._set("m",e?0:void 0),this._set("hasM",e))}get hasZ(){return void 0!==this.z}set hasZ(e){e!==(void 0!==this._get("z"))&&(this._set("z",e?0:void 0),this._set("hasZ",e))}get latitude(){const{spatialReference:e,x:t,y:r}=this
if(e){if(e.isWebMercator)return Object(m.xyToLngLat)(t,r,f)[1]
if(e.isGeographic)return r}return null}set latitude(e){const{spatialReference:t,x:r}=this
t&&(t.isWebMercator?this._set("y",Object(m.lngLatToXY)(r,e,f)[1]):t.isGeographic&&this._set("y",e),this._set("latitude",e))}get longitude(){const{x:e,y:t,spatialReference:r}=this
if(r){if(r.isWebMercator)return Object(m.xyToLngLat)(e,t,f)[0]
if(r.isGeographic)return e}return null}set longitude(e){const{y:t,spatialReference:r}=this
r&&(r.isWebMercator?this._set("x",Object(m.lngLatToXY)(e,t,f)[0]):r.isGeographic&&this._set("x",e),this._set("longitude",e))}writeX(e,t,r){t[r]=isNaN(e)?"NaN":e}readX(e){return"string"==typeof e?NaN:e}clone(){const e=new s
return e.x=this.x,e.y=this.y,e.z=this.z,e.m=this.m,e.spatialReference=this.spatialReference,e}copy(e){return s.copy(e,this),this}equals(e){if(Object(n.j)(e))return!1
const{x:t,y:r,z:s,m:i,spatialReference:a}=this,{z:o,m:l}=e
let{x:c,y:u,spatialReference:p}=e
if(!a.equals(p))if(a.isWebMercator&&p.isWGS84)[c,u]=Object(m.lngLatToXY)(c,u),p=a
else{if(!a.isWGS84||!p.isWebMercator)return!1;[c,u]=Object(m.xyToLngLat)(c,u),p=a}return t===c&&r===u&&s===o&&i===l&&a.wkid===p.wkid}offset(e,t,r){return function(e,t,r,s){var i
return e.x=e.x+t,e.y=e.y+r,null!=s&&(e.z=(null!=(i=e.z)?i:0)+s),e}(this,e,t,r)}normalize(){if(!this.spatialReference)return this
const e=Object(b.e)(this.spatialReference)
if(!e)return this
let t=this.x
const[r,s]=e.valid,i=2*s
let a
return t>s?(a=Math.ceil(Math.abs(t-s)/i),t-=a*i):t<r&&(a=Math.ceil(Math.abs(t-r)/i),t+=a*i),this._set("x",t),this}distance(e){return function(e,t){const r=e.x-t.x,s=e.y-t.y,i=e.hasZ&&t.hasZ?e.z-t.z:0
return Math.sqrt(r*r+s*s+i*i)}(this,e)}toArray(){const e=this.hasZ,t=this.hasM
return e&&t?[this.x,this.y,this.z,this.m]:e?[this.x,this.y,this.z]:t?[this.x,this.y,this.m]:[this.x,this.y]}toJSON(e){return this.write({},e)}}
Object(i.a)([Object(o.b)({readOnly:!0})],j.prototype,"cache",null),Object(i.a)([Object(o.b)({type:Boolean,json:{read:!1,write:{enabled:!1,overridePolicy:null}}})],j.prototype,"hasM",null),Object(i.a)([Object(o.b)({type:Boolean,json:{read:!1,write:{enabled:!1,overridePolicy:null}}})],j.prototype,"hasZ",null),Object(i.a)([Object(o.b)({type:Number})],j.prototype,"latitude",null),Object(i.a)([Object(o.b)({type:Number})],j.prototype,"longitude",null),Object(i.a)([Object(o.b)({type:Number,json:{type:[Number,String],write:{isRequired:!0,allowNull:!0}}}),Object(l.a)(e=>isNaN(e)?e:Object(h.i)(e))],j.prototype,"x",void 0),Object(i.a)([Object(p.a)("x")],j.prototype,"writeX",null),Object(i.a)([Object(c.a)("x")],j.prototype,"readX",null),Object(i.a)([Object(o.b)({type:Number,json:{write:!0}})],j.prototype,"y",void 0),Object(i.a)([Object(o.b)({type:Number,json:{write:{overridePolicy(){return{enabled:this.hasZ}}}}})],j.prototype,"z",void 0),Object(i.a)([Object(o.b)({type:Number,json:{write:{overridePolicy(){return{enabled:this.hasM}}}}})],j.prototype,"m",void 0),j=s=Object(i.a)([Object(u.a)("esri.geometry.Point")],j),j.prototype.toJSON.isDefaultToJSON=!0
const v=j},875:function(e,t,r){"use strict"
r.d(t,"a",(function(){return u}))
var s=r(856),i=r(860),a=r(858),n=(r(353),r(77),r(859),r(865)),o=r(857),l=r(659)
let c=class extends i.a{constructor(...e){super(...e),this.type=null,this.hasM=!1,this.hasZ=!1,this.spatialReference=l.default.WGS84}get cache(){return this.commitProperty("spatialReference"),{}}get extent(){return null}readSpatialReference(e,t){if(e instanceof l.default)return e
if(null!=e){const r=new l.default
return r.read(e,t),r}return e}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}clearCache(){this.notifyChange("cache")}getCacheValue(e){return this.cache[e]}setCacheValue(e,t){this.cache[e]=t}}
Object(s.a)([Object(a.b)()],c.prototype,"type",void 0),Object(s.a)([Object(a.b)({readOnly:!0})],c.prototype,"cache",null),Object(s.a)([Object(a.b)({readOnly:!0})],c.prototype,"extent",null),Object(s.a)([Object(a.b)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],c.prototype,"hasM",void 0),Object(s.a)([Object(a.b)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],c.prototype,"hasZ",void 0),Object(s.a)([Object(a.b)({type:l.default,json:{write:!0}})],c.prototype,"spatialReference",void 0),Object(s.a)([Object(n.a)("spatialReference")],c.prototype,"readSpatialReference",null),c=Object(s.a)([Object(o.a)("esri.geometry.Geometry")],c)
const u=c},879:function(e,t,r){"use strict"
var s,i,a
let n
r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return c})),r.d(t,"c",(function(){return p}))
const o=null!=(s=null==(i=globalThis.esriConfig)?void 0:i.locale)?s:null==(a=globalThis.dojoConfig)?void 0:a.locale
function l(){var e,t
return null!=(e=null!=o?o:null==(t=globalThis.navigator)?void 0:t.language)?e:"en"}function c(){return void 0===n&&(n=l()),n}const u=[]
function p(e){return u.push(e),{remove(){u.splice(u.indexOf(e),1)}}}const h=[]
function d(e){return h.push(e),{remove(){u.splice(h.indexOf(e),1)}}}null==globalThis.addEventListener||globalThis.addEventListener("languagechange",(function(){const e=null!=void 0?void 0:l()
n!==e&&(n=e,[...h].forEach(t=>{t.call(null,e)}),[...u].forEach(t=>{t.call(null,e)}))}))},880:function(e,t,r){"use strict"
r.d(t,"a",(function(){return l}))
var s=r(859),i=r(1181)
const a=Object.prototype.toString
function n(e){const t="__accessorMetadata__"in e?Object(s.m)(e):e
return function(...e){if(e.push(t),"number"==typeof e[2])throw new Error("Using @cast has parameter decorator is not supported since 4.16")
return o.apply(this,e)}}function o(e,t,r,s){Object(i.b)(e,t).cast=s}function l(...e){if(3!==e.length||"string"!=typeof e[1])return 1===e.length&&"[object Function]"===a.call(e[0])?n(e[0]):1===e.length&&"string"==typeof e[0]?function(e){return function(t,r){Object(i.b)(t,e).cast=t[r]}}(e[0]):void 0}},890:function(e,t,r){"use strict"
r.d(t,"a",(function(){return l}))
var s=r(856),i=r(862),a=r(923),n=r(857)
class o{constructor(){this._emitter=new o.EventEmitter(this)}emit(e,t){return this._emitter.emit(e,t)}on(e,t){return this._emitter.on(e,t)}once(e,t){return this._emitter.once(e,t)}hasEventListener(e){return this._emitter.hasEventListener(e)}}!function(e){class t{constructor(e=null){this.target=e,this._listenersMap=null}clear(){this._listenersMap&&this._listenersMap.clear(),this._listenersMap=null}emit(e,t){const r=this._listenersMap&&this._listenersMap.get(e)
if(!r)return!1
const s=this.target||this
return[...r].forEach(e=>{e.call(s,t)}),r.length>0}on(e,t){if(Array.isArray(e)){const r=e.map(e=>this.on(e,t))
return Object(a.b)(r)}if(e.indexOf(",")>-1)throw new TypeError("Evented.on() with a comma delimited string of event types is not supported")
this._listenersMap||(this._listenersMap=new Map)
const r=this._listenersMap.get(e)||[]
return r.push(t),this._listenersMap.set(e,r),{remove:()=>{const r=this._listenersMap&&this._listenersMap.get(e)||[],s=r.indexOf(t)
s>=0&&r.splice(s,1)}}}once(e,t){const r=this.on(e,e=>{r.remove(),t.call(null,e)})
return r}hasEventListener(e){const t=this._listenersMap&&this._listenersMap.get(e)
return null!=t&&t.length>0}}e.EventEmitter=t,e.EventedMixin=e=>{let r=class extends e{constructor(){super(...arguments),this._emitter=new t}destroy(){this._emitter.clear()}emit(e,t){return this._emitter.emit(e,t)}on(e,t){return this._emitter.on(e,t)}once(e,t){return this._emitter.once(e,t)}hasEventListener(e){return this._emitter.hasEventListener(e)}}
return r=Object(s.a)([Object(n.a)("esri.core.Evented")],r),r}
let r=class extends i.a{constructor(){super(...arguments),this._emitter=new o.EventEmitter(this)}destroy(){this._emitter.clear()}emit(e,t){return this._emitter.emit(e,t)}on(e,t){return this._emitter.on(e,t)}once(e,t){return this._emitter.once(e,t)}hasEventListener(e){return this._emitter.hasEventListener(e)}}
r=Object(s.a)([Object(n.a)("esri.core.Evented")],r),e.EventedAccessor=r}(o||(o={}))
const l=o},900:function(e,t,r){"use strict"
r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return y})),r.d(t,"c",(function(){return h}))
var s=r(354),i=r(861),a=r(879)
const n=/^([a-z]{2})(?:[-_]([A-Za-z]{2}))?$/,o={ar:!0,bg:!0,bs:!0,ca:!0,cs:!0,da:!0,de:!0,el:!0,en:!0,es:!0,et:!0,fi:!0,fr:!0,he:!0,hr:!0,hu:!0,id:!0,it:!0,ja:!0,ko:!0,lt:!0,lv:!0,nb:!0,nl:!0,pl:!0,"pt-BR":!0,"pt-PT":!0,ro:!0,ru:!0,sk:!0,sl:!0,sr:!0,sv:!0,th:!0,tr:!0,uk:!0,vi:!0,"zh-CN":!0,"zh-HK":!0,"zh-TW":!0}
function l(e){var t
return null!=(t=o[e])&&t}const c=[],u=new Map
function p(e){for(const t of u.keys())b(e.pattern,t)&&u.delete(t)}function h(e){return c.includes(e)||(p(e),c.unshift(e)),{remove(){const t=c.indexOf(e)
t>-1&&(c.splice(t,1),p(e))}}}async function d(e){const t=Object(a.b)()
u.has(e)||u.set(e,async function(e,t){const r=[]
for(const s of c)if(b(s.pattern,e))try{return await s.fetchMessageBundle(e,t)}catch(e){r.push(e)}if(r.length)throw new s.a("intl:message-bundle-error",`Errors occurred while loading "${e}"`,{errors:r})
throw new s.a("intl:no-message-bundle-loader",`No loader found for message bundle "${e}"`)}(e,t))
const r=u.get(e)
return await m.add(r),r}function y(e){if(!n.test(e))return null
const[,t,r]=n.exec(e),s=t+(r?"-"+r.toUpperCase():"")
return l(s)?s:l(t)?t:null}function b(e,t){return"string"==typeof e?t.startsWith(e):e.test(t)}Object(a.a)(()=>{u.clear()})
const m=new class{constructor(){this._numLoading=0}async waitForAll(){this._dfd&&await this._dfd.promise}add(e){return this._increase(),e.then(()=>this._decrease(),()=>this._decrease()),this.waitForAll()}_increase(){this._numLoading++,this._dfd||(this._dfd=Object(i.f)())}_decrease(){this._numLoading=Math.max(this._numLoading-1,0),this._dfd&&0===this._numLoading&&(this._dfd.resolve(),this._dfd=null)}}},902:function(e,t,r){"use strict"
r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return n}))
class s{constructor(e,t,r,s){this.semiMajorAxis=e,this.flattening=t,this.outerAtmosphereRimWidth=r
const i=1-this.flattening
this.semiMinorAxis=this.semiMajorAxis*i,this.halfSemiMajorAxis=this.semiMajorAxis/2,this.halfCircumference=Math.PI*this.semiMajorAxis,this.metersPerDegree=this.halfCircumference/180,this.inverseFlattening=1/(1-this.flattening)-1,this.eccentricitySquared=s||2*this.flattening-this.flattening*this.flattening,this.meanRadiusSemiAxes=(2*this.semiMajorAxis+this.semiMinorAxis)/3}get radius(){return this.semiMajorAxis}}const i=new s(6378137,1/298.257223563,3e5,.006694379990137799),a=new s(3396190,1/169.8944472236118,23e4),n=new s(1737400,0,0)},903:function(e,t,r){"use strict"
r.d(t,"a",(function(){return y}))
var s=r(856),i=r(354),a=r(959),n=r(861),o=r(970),l=r(858),c=r(857)
const u="loaded",p=e=>{let t=class extends e{constructor(...e){super(...e),this._loadController=null,this.loadError=null,this.loadStatus="not-loaded",this._set("loadWarnings",[]),this.addResolvingPromise(new Promise(e=>{const t=this.load.bind(this)
this.load=r=>{const s=new Promise((e,t)=>{const s=Object(n.r)(r,t)
this.destroyed&&t(new i.a("load:instance-destroyed",`Instance of '${this.declaredClass||this.constructor.name}' is already destroyed`,{instance:this})),this._promiseProps.when(e,t).finally(()=>{s&&s.remove()})})
if("not-loaded"===this.loadStatus){this._set("loadStatus","loading")
const e=this._loadController=new AbortController
t({signal:e.signal}),Object(n.q)(e.signal,()=>{this._promiseProps.abort()})}return e(),s}})),this.when(()=>{this._set("loadStatus",u),this._loadController=null},e=>{this._set("loadStatus","failed"),this._set("loadError",e),this._loadController=null})}get loaded(){return this.loadStatus===u}get loadWarnings(){return this._get("loadWarnings")}load(){return null}cancelLoad(){var e
return this.isFulfilled()||(this._set("loadError",new i.a("load:cancelled","Cancelled")),null==(e=this._loadController)||e.abort()),this}}
return Object(s.a)([Object(l.b)({readOnly:!0})],t.prototype,"loaded",null),Object(s.a)([Object(l.b)({readOnly:!0})],t.prototype,"loadError",void 0),Object(s.a)([Object(l.b)({clonable:!1})],t.prototype,"loadStatus",void 0),Object(s.a)([Object(l.b)({type:[o.a],readOnly:!0})],t.prototype,"loadWarnings",null),t=Object(s.a)([Object(c.a)("esri.core.Loadable")],t),t}
let h=class extends(p(a.a)){}
var d
h=Object(s.a)([Object(c.a)("esri.core.Loadable")],h),(d=h||(h={})).LoadableMixin=p,d.isLoadable=function(e){return!(!e||!e.load)}
const y=h},904:function(e,t,r){"use strict"
r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return y})),r.d(t,"c",(function(){return O})),r.d(t,"d",(function(){return m})),r.d(t,"e",(function(){return g}))
var s=r(928)
function i(e,t){return Object(s.e)(e,t)}function a(e,t){const r=e.hasZ&&t.hasZ
let s,i,a
if(e.xmin<=t.xmin){if(s=t.xmin,e.xmax<s)return!1}else if(s=e.xmin,t.xmax<s)return!1
if(e.ymin<=t.ymin){if(i=t.ymin,e.ymax<i)return!1}else if(i=e.ymin,t.ymax<i)return!1
if(r&&t.hasZ)if(e.zmin<=t.zmin){if(a=t.zmin,e.zmax<a)return!1}else if(a=e.zmin,t.zmax<a)return!1
return!0}function n(e,t){const{points:r,hasZ:i}=t,a=i?s.b:s.a
for(const t of r)if(a(e,t))return!0
return!1}const o=[0,0],l=[0,0],c=[0,0],u=[0,0],p=[o,l,c,u],h=[[c,o],[o,l],[l,u],[u,c]]
function d(e,t){o[0]=e.xmin,o[1]=e.ymax,l[0]=e.xmax,l[1]=e.ymax,c[0]=e.xmin,c[1]=e.ymin,u[0]=e.xmax,u[1]=e.ymin
for(const e of p)if(Object(s.f)(t,e))return!0
for(const r of t.rings){if(!r.length)continue
let t=r[0]
if(Object(s.a)(e,t))return!0
for(let i=1;i<r.length;i++){const a=r[i]
if(Object(s.a)(e,a)||f(t,a,h))return!0
t=a}}return!1}function y(e,t){o[0]=e.xmin,o[1]=e.ymax,l[0]=e.xmax,l[1]=e.ymax,c[0]=e.xmin,c[1]=e.ymin,u[0]=e.xmax,u[1]=e.ymin
const r=t.paths
for(const t of r){if(!r.length)continue
let i=t[0]
if(Object(s.a)(e,i))return!0
for(let r=1;r<t.length;r++){const a=t[r]
if(Object(s.a)(e,a)||f(i,a,h))return!0
i=a}}return!1}const b=[0,0]
function m(e){for(let t=0;t<e.length;t++){const r=e[t]
for(let s=0;s<r.length-1;s++){const i=r[s],a=r[s+1]
for(let r=t+1;r<e.length;r++)for(let t=0;t<e[r].length-1;t++){const s=e[r][t],n=e[r][t+1]
if(g(i,a,s,n,b)&&!(b[0]===i[0]&&b[1]===i[1]||b[0]===s[0]&&b[1]===s[1]||b[0]===a[0]&&b[1]===a[1]||b[0]===n[0]&&b[1]===n[1]))return!0}}const s=r.length
if(!(s<=4))for(let e=0;e<s-3;e++){let t=s-1
0===e&&(t=s-2)
const i=r[e],a=r[e+1]
for(let s=e+2;s<t;s++){const e=r[s],t=r[s+1]
if(g(i,a,e,t,b)&&!(b[0]===i[0]&&b[1]===i[1]||b[0]===e[0]&&b[1]===e[1]||b[0]===a[0]&&b[1]===a[1]||b[0]===t[0]&&b[1]===t[1]))return!0}}}return!1}function f(e,t,r){for(let s=0;s<r.length;s++)if(g(e,t,r[s][0],r[s][1]))return!0
return!1}function g(e,t,r,s,i){const[a,n]=e,[o,l]=t,[c,u]=r,[p,h]=s,d=p-c,y=a-c,b=o-a,m=h-u,f=n-u,g=l-n,O=m*b-d*g
if(0===O)return!1
const j=(d*f-m*y)/O,v=(b*f-g*y)/O
return j>=0&&j<=1&&v>=0&&v<=1&&(i&&(i[0]=a+j*(o-a),i[1]=n+j*(l-n)),!0)}function O(e){switch(e){case"esriGeometryEnvelope":case"extent":return a
case"esriGeometryMultipoint":case"multipoint":return n
case"esriGeometryPoint":case"point":return i
case"esriGeometryPolygon":case"polygon":return d
case"esriGeometryPolyline":case"polyline":return y}}},914:function(e,t,r){"use strict"
r.d(t,"a",(function(){return P}))
var s=r(856),i=r(78),a=r(148),n=r(660),o=r(996),l=r(354),c=r(860),u=r(903),p=r(177),h=r(20),d=r(861),y=r(858),b=(r(353),r(77),r(859)),m=r(865),f=r(857),g=r(658),O=r(879),j=r(926),v=r(862)
let x=class extends v.a{constructor(e){super(e),this.nextQueryParams=null,this.queryParams=null,this.results=null,this.total=null}}
Object(s.a)([Object(y.b)()],x.prototype,"nextQueryParams",void 0),Object(s.a)([Object(y.b)()],x.prototype,"queryParams",void 0),Object(s.a)([Object(y.b)()],x.prototype,"results",void 0),Object(s.a)([Object(y.b)()],x.prototype,"total",void 0),x=Object(s.a)([Object(f.a)("esri.portal.PortalQueryResult")],x)
const w=x
var S,M=r(956),L=r(966)
let _
const T={PortalGroup:()=>Promise.resolve().then(r.bind(null,988)),PortalItem:()=>r.e(80).then(r.bind(null,1006)),PortalUser:()=>Promise.resolve().then(r.bind(null,956))}
let G=S=class extends(Object(c.b)(u.a)){constructor(e){super(e),this.access=null,this.allSSL=!1,this.authMode="auto",this.authorizedCrossOriginDomains=null,this.basemapGalleryGroupQuery=null,this.bingKey=null,this.canListApps=!1,this.canListData=!1,this.canListPreProvisionedItems=!1,this.canProvisionDirectPurchase=!1,this.canSearchPublic=!0,this.canShareBingPublic=!1,this.canSharePublic=!1,this.canSignInArcGIS=!1,this.canSignInIDP=!1,this.colorSetsGroupQuery=null,this.commentsEnabled=!1,this.created=null,this.culture=null,this.customBaseUrl=null,this.defaultBasemap=null,this.defaultDevBasemap=null,this.defaultExtent=null,this.defaultVectorBasemap=null,this.description=null,this.devBasemapGalleryGroupQuery=null,this.eueiEnabled=null,this.featuredGroups=null,this.featuredItemsGroupQuery=null,this.galleryTemplatesGroupQuery=null,this.livingAtlasGroupQuery=null,this.hasCategorySchema=!1,this.helperServices=null,this.homePageFeaturedContent=null,this.homePageFeaturedContentCount=null,this.httpPort=null,this.httpsPort=null,this.id=null,this.ipCntryCode=null,this.isPortal=!1,this.isReadOnly=!1,this.layerTemplatesGroupQuery=null,this.maxTokenExpirationMinutes=null,this.modified=null,this.name=null,this.portalHostname=null,this.portalMode=null,this.portalProperties=null,this.region=null,this.rotatorPanels=null,this.showHomePageDescription=!1,this.sourceJSON=null,this.supportsHostedServices=!1,this.symbolSetsGroupQuery=null,this.templatesGroupQuery=null,this.units=null,this.url=i.default.portalUrl,this.urlKey=null,this.user=null,this.useStandardizedQuery=!1,this.useVectorBasemaps=!1,this.vectorBasemapGalleryGroupQuery=null}normalizeCtorArgs(e){return"string"==typeof e?{url:e}:e}destroy(){this._esriId_credentialCreateHandle&&(this._esriId_credentialCreateHandle.remove(),this._esriId_credentialCreateHandle=null)}readAuthorizedCrossOriginDomains(e){if(e)for(const t of e)-1===i.default.request.trustedServers.indexOf(t)&&i.default.request.trustedServers.push(t)
return e}readDefaultBasemap(e){return this._readBasemap(e)}readDefaultDevBasemap(e){return this._readBasemap(e)}readDefaultVectorBasemap(e){return this._readBasemap(e)}get extraQuery(){const e=!(this.user&&this.user.orgId)||this.canSearchPublic
return this.id&&!e?" AND orgid:"+this.id:null}get isOrganization(){return!!this.access}get restUrl(){let e=this.url
if(e){const t=e.indexOf("/sharing")
e=t>0?e.substring(0,t):this.url.replace(/\/+$/,""),e+="/sharing/rest"}return e}get stylesGroupQuery(){return Object(o.c)(p.a.getLogger(this.declaredClass),"stylesGroupQuery",{replacement:"stylesGroupQuery3d",version:"4.21"}),this.stylesGroupQuery3d}get thumbnailUrl(){const e=this.restUrl,t=this.thumbnail
return e&&t?this._normalizeSSL(e+"/portals/self/resources/"+t):null}readUrlKey(e){return e?e.toLowerCase():e}readUser(e){let t=null
return e&&(t=M.default.fromJSON(e),t.portal=this),t}load(e){const t=Promise.all([r.e(28),r.e(293)]).then(r.bind(null,671)).then(({default:t})=>{Object(d.v)(e),_=t}).then(()=>this.sourceJSON?this.sourceJSON:this._fetchSelf(this.authMode,!1,e)).then(e=>{if(a.b){const e=a.b
this.credential=e.findCredential(this.restUrl),this.credential||this.authMode!==S.AUTH_MODE_AUTO||(this._esriId_credentialCreateHandle=e.on("credential-create",()=>{e.findCredential(this.restUrl)&&this._signIn()}))}this.sourceJSON=e,this.read(e)})
return this.addResolvingPromise(t),Promise.resolve(this)}async createClosestFacilityTask(){Object(o.b)(p.a.getLogger(this.declaredClass),null,{replacement:"Use helperServices url with esri/rest/closestFacility",version:"4.21"}),await this.load()
const e=this._getHelperServiceUrl("closestFacility")
return new(0,(await Promise.all([r.e(1),r.e(2),r.e(32),r.e(60),r.e(343)]).then(r.bind(null,2430))).default)(e)}async createElevationLayers(){await this.load()
const e=this._getHelperService("defaultElevationLayers"),t=(await Promise.all([r.e(22),r.e(42),r.e(56)]).then(r.bind(null,1996))).default
return e?e.map(e=>new t({id:e.id,url:e.url})):[]}async createGeometryService(){Object(o.b)(p.a.getLogger(this.declaredClass),null,{replacement:"Use helperServices url with esri/rest/geometryService",version:"4.21"}),await this.load()
const e=this._getHelperServiceUrl("geometry")
return new(0,(await r.e(159).then(r.bind(null,2416))).default)({url:e})}async createPrintTask(){Object(o.b)(p.a.getLogger(this.declaredClass),null,{replacement:"Use helperServices url with esri/rest/print",version:"4.21"}),await this.load()
const e=this._getHelperServiceUrl("printTask")
return new(0,(await Promise.all([r.e(1),r.e(2),r.e(32),r.e(194)]).then(r.bind(null,2417))).default)(e)}async createRouteTask(){Object(o.b)(p.a.getLogger(this.declaredClass),null,{replacement:"Use helperServices url with esri/rest/route",version:"4.21"}),await this.load()
const e=this._getHelperServiceUrl("route")
return new(0,(await Promise.all([r.e(1),r.e(2),r.e(32),r.e(60),r.e(321)]).then(r.bind(null,2279))).default)(e)}async createServiceAreaTask(){Object(o.b)(p.a.getLogger(this.declaredClass),null,{replacement:"Use helperServices url with esri/rest/serviceArea",version:"4.21"}),await this.load()
const e=this._getHelperServiceUrl("serviceArea")
return new(0,(await Promise.all([r.e(1),r.e(2),r.e(32),r.e(246)]).then(r.bind(null,2431))).default)(e)}fetchBasemaps(e,t){const r=new j.a
return r.query=e||(i.default.apiKey&&Object(L.a)(this.url)?this.devBasemapGalleryGroupQuery:this.useVectorBasemaps?this.vectorBasemapGalleryGroupQuery:this.basemapGalleryGroupQuery),r.disableExtraQuery=!0,this.queryGroups(r,t).then(e=>{if(r.num=100,r.query='type:"Web Map" -type:"Web Application"',e.total){const s=e.results[0]
return r.sortField=s.sortField||"name",r.sortOrder=s.sortOrder||"desc",s.queryItems(r,t)}return null}).then(e=>{let t
return t=e&&e.total?e.results.filter(e=>"Web Map"===e.type).map(e=>new _({portalItem:e})):[],t})}fetchCategorySchema(e){return this.hasCategorySchema?this._request(this.restUrl+"/portals/self/categorySchema",e).then(e=>e.categorySchema):Object(d.n)(e)?Promise.reject(Object(d.e)()):Promise.resolve([])}fetchFeaturedGroups(e){const t=this.featuredGroups,r=new j.a
if(r.num=100,r.sortField="title",t&&t.length){const s=[]
for(const e of t)s.push(`(title:"${e.title}" AND owner:${e.owner})`)
return r.query=s.join(" OR "),this.queryGroups(r,e).then(e=>e.results)}return Object(d.n)(e)?Promise.reject(Object(d.e)()):Promise.resolve([])}fetchRegions(e){var t
const r=(null==(t=this.user)?void 0:t.culture)||this.culture||Object(O.b)()
return this._request(this.restUrl+"/portals/regions",{...e,query:{culture:r}})}fetchSettings(e){var t
const r=(null==(t=this.user)?void 0:t.culture)||this.culture||Object(O.b)()
return this._request(this.restUrl+"/portals/self/settings",{...e,query:{culture:r}})}static getDefault(){return S._default&&!S._default.destroyed||(S._default=new S),S._default}queryGroups(e,t){return this._queryPortal("/community/groups",e,"PortalGroup",t)}queryItems(e,t){return this._queryPortal("/search",e,"PortalItem",t)}queryUsers(e,t){return e.sortField||(e.sortField="username"),this._queryPortal("/community/users",e,"PortalUser",t)}toJSON(){throw new l.a("internal:not-yet-implemented","Portal.toJSON is not yet implemented")}static fromJSON(e){if(!e)return null
if(e.declaredClass)throw new Error("JSON object is already hydrated")
return new S({sourceJSON:e})}_getHelperService(e){const t=this.helperServices&&this.helperServices[e]
if(!t)throw new l.a("portal:service-not-found",`The \`helperServices\` do not include an entry named "${e}"`)
return t}_getHelperServiceUrl(e){const t=this._getHelperService(e)
if(!t.url)throw new l.a("portal:service-url-not-found",`The \`helperServices\` entry "${e}" does not include a \`url\` value`)
return t.url}_fetchSelf(e=this.authMode,t=!1,r){const s=this.restUrl+"/portals/self",i={authMode:e,query:{culture:Object(O.b)().toLowerCase()},...r}
return"auto"===i.authMode&&(i.authMode="no-prompt"),t&&(i.query.default=!0),this._request(s,i)}_queryPortal(e,t,r,s){const i=Object(b.m)(j.a,t),a=t=>this._request(this.restUrl+e,{...i.toRequestOptions(this),...s}).then(e=>{const r=i.clone()
return r.start=e.nextStart,new w({nextQueryParams:r,queryParams:i,total:e.total,results:S._resultsToTypedArray(t,{portal:this},e,s)})}).then(e=>Promise.all(e.results.map(t=>"function"==typeof t.when?t.when():e)).then(()=>e,t=>(Object(d.u)(t),e)))
return r&&T[r]?T[r]().then(({default:e})=>(Object(d.v)(s),a(e))):a()}_signIn(){if(this.authMode===S.AUTH_MODE_ANONYMOUS)return Promise.reject(new l.a("portal:invalid-auth-mode",`Current "authMode"' is "${this.authMode}"`))
if("failed"===this.loadStatus)return Promise.reject(this.loadError)
const e=e=>Promise.resolve().then(()=>"not-loaded"===this.loadStatus?(e||(this.authMode="immediate"),this.load().then(()=>null)):"loading"===this.loadStatus?this.load().then(()=>this.credential?null:(this.credential=e,this._fetchSelf("immediate"))):this.user&&this.credential===e?null:(this.credential=e,this._fetchSelf("immediate"))).then(e=>{e&&(this.sourceJSON=e,this.read(e))})
return a.b?a.b.getCredential(this.restUrl).then(t=>e(t)):e(this.credential)}_normalizeSSL(e){return e.replace(/^http:/i,"https:").replace(":7080",":7443")}_normalizeUrl(e){const t=this.credential&&this.credential.token
return this._normalizeSSL(t?e+(e.indexOf("?")>-1?"&":"?")+"token="+t:e)}_requestToTypedArray(e,t,r){return this._request(e,t).then(e=>{const t=S._resultsToTypedArray(r,{portal:this},e)
return Promise.all(t.map(t=>"function"==typeof t.when?t.when():e)).then(()=>t,()=>t)})}_readBasemap(e){if(e){const t=_.fromJSON(e)
return t.portalItem={portal:this},t}return null}_request(e,t={}){const r={f:"json",...t.query},{authMode:s=(this.authMode===S.AUTH_MODE_ANONYMOUS?"anonymous":"auto"),body:i=null,cacheBust:a=!1,method:o="auto",responseType:l="json",signal:c}=t,u={authMode:s,body:i,cacheBust:a,method:o,query:r,responseType:l,timeout:0,signal:c}
return Object(n.default)(this._normalizeSSL(e),u).then(e=>e.data)}static _resultsToTypedArray(e,t,r,s){let i
if(r){const a=Object(h.k)(s)?s.signal:null
i=r.listings||r.notifications||r.userInvitations||r.tags||r.items||r.groups||r.comments||r.provisions||r.results||r.relatedItems||r,(e||t)&&(i=i.map(r=>{const s=Object.assign(e?e.fromJSON(r):r,t)
return"function"==typeof s.load&&s.load(a),s}))}else i=[]
return i}}
G.AUTH_MODE_ANONYMOUS="anonymous",G.AUTH_MODE_AUTO="auto",G.AUTH_MODE_IMMEDIATE="immediate",Object(s.a)([Object(y.b)()],G.prototype,"access",void 0),Object(s.a)([Object(y.b)()],G.prototype,"allSSL",void 0),Object(s.a)([Object(y.b)()],G.prototype,"authMode",void 0),Object(s.a)([Object(y.b)()],G.prototype,"authorizedCrossOriginDomains",void 0),Object(s.a)([Object(m.a)("authorizedCrossOriginDomains")],G.prototype,"readAuthorizedCrossOriginDomains",null),Object(s.a)([Object(y.b)()],G.prototype,"basemapGalleryGroupQuery",void 0),Object(s.a)([Object(y.b)()],G.prototype,"bingKey",void 0),Object(s.a)([Object(y.b)()],G.prototype,"canListApps",void 0),Object(s.a)([Object(y.b)()],G.prototype,"canListData",void 0),Object(s.a)([Object(y.b)()],G.prototype,"canListPreProvisionedItems",void 0),Object(s.a)([Object(y.b)()],G.prototype,"canProvisionDirectPurchase",void 0),Object(s.a)([Object(y.b)()],G.prototype,"canSearchPublic",void 0),Object(s.a)([Object(y.b)()],G.prototype,"canShareBingPublic",void 0),Object(s.a)([Object(y.b)()],G.prototype,"canSharePublic",void 0),Object(s.a)([Object(y.b)()],G.prototype,"canSignInArcGIS",void 0),Object(s.a)([Object(y.b)()],G.prototype,"canSignInIDP",void 0),Object(s.a)([Object(y.b)()],G.prototype,"colorSetsGroupQuery",void 0),Object(s.a)([Object(y.b)()],G.prototype,"commentsEnabled",void 0),Object(s.a)([Object(y.b)({type:Date})],G.prototype,"created",void 0),Object(s.a)([Object(y.b)()],G.prototype,"credential",void 0),Object(s.a)([Object(y.b)()],G.prototype,"culture",void 0),Object(s.a)([Object(y.b)()],G.prototype,"currentVersion",void 0),Object(s.a)([Object(y.b)()],G.prototype,"customBaseUrl",void 0),Object(s.a)([Object(y.b)()],G.prototype,"defaultBasemap",void 0),Object(s.a)([Object(m.a)("defaultBasemap")],G.prototype,"readDefaultBasemap",null),Object(s.a)([Object(y.b)()],G.prototype,"defaultDevBasemap",void 0),Object(s.a)([Object(m.a)("defaultDevBasemap")],G.prototype,"readDefaultDevBasemap",null),Object(s.a)([Object(y.b)({type:g.default})],G.prototype,"defaultExtent",void 0),Object(s.a)([Object(y.b)()],G.prototype,"defaultVectorBasemap",void 0),Object(s.a)([Object(m.a)("defaultVectorBasemap")],G.prototype,"readDefaultVectorBasemap",null),Object(s.a)([Object(y.b)()],G.prototype,"description",void 0),Object(s.a)([Object(y.b)()],G.prototype,"devBasemapGalleryGroupQuery",void 0),Object(s.a)([Object(y.b)()],G.prototype,"eueiEnabled",void 0),Object(s.a)([Object(y.b)({readOnly:!0})],G.prototype,"extraQuery",null),Object(s.a)([Object(y.b)()],G.prototype,"featuredGroups",void 0),Object(s.a)([Object(y.b)()],G.prototype,"featuredItemsGroupQuery",void 0),Object(s.a)([Object(y.b)()],G.prototype,"galleryTemplatesGroupQuery",void 0),Object(s.a)([Object(y.b)()],G.prototype,"livingAtlasGroupQuery",void 0),Object(s.a)([Object(y.b)()],G.prototype,"hasCategorySchema",void 0),Object(s.a)([Object(y.b)()],G.prototype,"helpBase",void 0),Object(s.a)([Object(y.b)()],G.prototype,"helperServices",void 0),Object(s.a)([Object(y.b)()],G.prototype,"helpMap",void 0),Object(s.a)([Object(y.b)()],G.prototype,"homePageFeaturedContent",void 0),Object(s.a)([Object(y.b)()],G.prototype,"homePageFeaturedContentCount",void 0),Object(s.a)([Object(y.b)()],G.prototype,"httpPort",void 0),Object(s.a)([Object(y.b)()],G.prototype,"httpsPort",void 0),Object(s.a)([Object(y.b)()],G.prototype,"id",void 0),Object(s.a)([Object(y.b)()],G.prototype,"ipCntryCode",void 0),Object(s.a)([Object(y.b)({readOnly:!0})],G.prototype,"isOrganization",null),Object(s.a)([Object(y.b)()],G.prototype,"isPortal",void 0),Object(s.a)([Object(y.b)()],G.prototype,"isReadOnly",void 0),Object(s.a)([Object(y.b)()],G.prototype,"layerTemplatesGroupQuery",void 0),Object(s.a)([Object(y.b)()],G.prototype,"maxTokenExpirationMinutes",void 0),Object(s.a)([Object(y.b)({type:Date})],G.prototype,"modified",void 0),Object(s.a)([Object(y.b)()],G.prototype,"name",void 0),Object(s.a)([Object(y.b)()],G.prototype,"portalHostname",void 0),Object(s.a)([Object(y.b)()],G.prototype,"portalMode",void 0),Object(s.a)([Object(y.b)()],G.prototype,"portalProperties",void 0),Object(s.a)([Object(y.b)()],G.prototype,"region",void 0),Object(s.a)([Object(y.b)({readOnly:!0})],G.prototype,"restUrl",null),Object(s.a)([Object(y.b)()],G.prototype,"rotatorPanels",void 0),Object(s.a)([Object(y.b)()],G.prototype,"showHomePageDescription",void 0),Object(s.a)([Object(y.b)()],G.prototype,"sourceJSON",void 0),Object(s.a)([Object(y.b)()],G.prototype,"staticImagesUrl",void 0),Object(s.a)([Object(y.b)({readOnly:!0,json:{read:!1}})],G.prototype,"stylesGroupQuery",null),Object(s.a)([Object(y.b)({json:{name:"2DStylesGroupQuery"}})],G.prototype,"stylesGroupQuery2d",void 0),Object(s.a)([Object(y.b)({json:{name:"stylesGroupQuery"}})],G.prototype,"stylesGroupQuery3d",void 0),Object(s.a)([Object(y.b)()],G.prototype,"supportsHostedServices",void 0),Object(s.a)([Object(y.b)()],G.prototype,"symbolSetsGroupQuery",void 0),Object(s.a)([Object(y.b)()],G.prototype,"templatesGroupQuery",void 0),Object(s.a)([Object(y.b)()],G.prototype,"thumbnail",void 0),Object(s.a)([Object(y.b)({readOnly:!0})],G.prototype,"thumbnailUrl",null),Object(s.a)([Object(y.b)()],G.prototype,"units",void 0),Object(s.a)([Object(y.b)()],G.prototype,"url",void 0),Object(s.a)([Object(y.b)()],G.prototype,"urlKey",void 0),Object(s.a)([Object(m.a)("urlKey")],G.prototype,"readUrlKey",null),Object(s.a)([Object(y.b)()],G.prototype,"user",void 0),Object(s.a)([Object(m.a)("user")],G.prototype,"readUser",null),Object(s.a)([Object(y.b)()],G.prototype,"useStandardizedQuery",void 0),Object(s.a)([Object(y.b)()],G.prototype,"useVectorBasemaps",void 0),Object(s.a)([Object(y.b)()],G.prototype,"vectorBasemapGalleryGroupQuery",void 0),G=S=Object(s.a)([Object(f.a)("esri.portal.Portal")],G)
const P=G},926:function(e,t,r){"use strict"
r.d(t,"a",(function(){return m}))
var s,i=r(856),a=r(862),n=r(863),o=r(178),l=r(20),c=r(858),u=(r(859),r(857)),p=r(658),h=r(659),d=r(662)
const y=new n.a({avgRating:"avg-rating",numRatings:"num-ratings",numComments:"num-comments",numViews:"num-views"})
let b=s=class extends a.a{constructor(e){super(e),this.categories=null,this.disableExtraQuery=!1,this.extent=null,this.filter=null,this.num=10,this.query=null,this.sortField=null,this.start=1}get sortOrder(){return this._get("sortOrder")||"asc"}set sortOrder(e){"asc"!==e&&"desc"!==e||this._set("sortOrder",e)}clone(){return new s({categories:this.categories?Object(o.a)(this.categories):null,disableExtraQuery:this.disableExtraQuery,extent:this.extent?this.extent.clone():null,filter:this.filter,num:this.num,query:this.query,sortField:this.sortField,sortOrder:this.sortOrder,start:this.start})}toRequestOptions(e,t){let r,s
if(this.categories&&(r=this.categories.map(e=>Array.isArray(e)?JSON.stringify(e):e)),this.extent){const e=Object(d.project)(this.extent,h.default.WGS84)
Object(l.k)(e)&&(s=`${e.xmin},${e.ymin},${e.xmax},${e.ymax}`)}let i=this.query
!this.disableExtraQuery&&e.extraQuery&&(i="("+i+")"+e.extraQuery)
const a={categories:r,bbox:s,q:i,filter:this.filter,num:this.num,sortField:null,sortOrder:null,start:this.start}
return this.sortField&&(a.sortField=this.sortField.split(",").map(e=>y.toJSON(e.trim())).join(","),a.sortOrder=this.sortOrder),{query:{...t,...a}}}}
Object(i.a)([Object(c.b)()],b.prototype,"categories",void 0),Object(i.a)([Object(c.b)()],b.prototype,"disableExtraQuery",void 0),Object(i.a)([Object(c.b)({type:p.default})],b.prototype,"extent",void 0),Object(i.a)([Object(c.b)()],b.prototype,"filter",void 0),Object(i.a)([Object(c.b)()],b.prototype,"num",void 0),Object(i.a)([Object(c.b)()],b.prototype,"query",void 0),Object(i.a)([Object(c.b)()],b.prototype,"sortField",void 0),Object(i.a)([Object(c.b)()],b.prototype,"sortOrder",null),Object(i.a)([Object(c.b)()],b.prototype,"start",void 0),b=s=Object(i.a)([Object(u.a)("esri.portal.PortalQueryParams")],b)
const m=b},928:function(e,t,r){"use strict"
r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return c})),r.d(t,"c",(function(){return o})),r.d(t,"d",(function(){return n})),r.d(t,"e",(function(){return a})),r.d(t,"f",(function(){return h})),r.d(t,"g",(function(){return p}))
var s=r(20)
const i=[0,0]
function a(e,t){return!!Object(s.k)(t)&&u(e,t.x,t.y,t.z)}function n(e,t){if(!t.points||t.points.length)return!1
for(const r of t.points)if(!l(e,r))return!1
return!0}function o(e,t){const{xmin:r,ymin:s,zmin:i,xmax:a,ymax:n,zmax:o}=t
return e.hasZ&&t.hasZ?u(e,r,s,i)&&u(e,r,n,i)&&u(e,a,n,i)&&u(e,a,s,i)&&u(e,r,s,o)&&u(e,r,n,o)&&u(e,a,n,o)&&u(e,a,s,o):u(e,r,s)&&u(e,r,n)&&u(e,a,n)&&u(e,a,s)}function l(e,t){return u(e,t[0],t[1])}function c(e,t){return u(e,t[0],t[1],t[2])}function u(e,t,r,s){return t>=e.xmin&&t<=e.xmax&&r>=e.ymin&&r<=e.ymax&&(null==s||!e.hasZ||s>=e.zmin&&s<=e.zmax)}function p(e,t){return i[1]=t.y,i[0]=t.x,h(e,i)}function h(e,t){return function(e,t){if(!e)return!1
if(function(e){return!Array.isArray(e[0][0])}(e))return d(!1,e,t)
let r=!1
for(let s=0,i=e.length;s<i;s++)r=d(r,e[s],t)
return r}(e.rings,t)}function d(e,t,r){const[s,i]=r
let a=e,n=0
for(let e=0,r=t.length;e<r;e++){n++,n===r&&(n=0)
const[o,l]=t[e],[c,u]=t[n];(l<i&&u>=i||u<i&&l>=i)&&o+(i-l)/(u-l)*(c-o)<s&&(a=!a)}return a}},956:function(e,t,r){"use strict"
r.r(t),r.d(t,"default",(function(){return d}))
var s=r(856),i=r(354),a=r(860),n=r(858),o=(r(353),r(77),r(859),r(857))
let l=class extends a.a{constructor(e){super(e),this.created=null,this.id=null,this.portal=null,this.title=null,this.username=null}get url(){const e=this.get("portal.restUrl")
return e?`${e}/content/users/${this.username}/${this.id}`:null}toJSON(){throw new i.a("internal:not-yet-implemented","PortalFolder.toJSON is not yet implemented")}}
Object(s.a)([Object(n.b)({type:Date})],l.prototype,"created",void 0),Object(s.a)([Object(n.b)()],l.prototype,"id",void 0),Object(s.a)([Object(n.b)()],l.prototype,"portal",void 0),Object(s.a)([Object(n.b)()],l.prototype,"title",void 0),Object(s.a)([Object(n.b)({readOnly:!0})],l.prototype,"url",null),Object(s.a)([Object(n.b)()],l.prototype,"username",void 0),l=Object(s.a)([Object(o.a)("esri.portal.PortalFolder")],l)
const c=l
var u,p=r(988)
let h=u=class extends a.a{constructor(...e){super(...e),this.access=null,this.created=null,this.culture=null,this.description=null,this.email=null,this.fullName=null,this.modified=null,this.orgId=null,this.portal=null,this.preferredView=null,this.privileges=null,this.region=null,this.role=null,this.roleId=null,this.sourceJSON=null,this.units=null,this.username=null,this.userType=null}get thumbnailUrl(){const e=this.url,t=this.thumbnail
return e&&t?this.portal._normalizeUrl(`${e}/info/${t}?f=json`):null}get userContentUrl(){const e=this.get("portal.restUrl")
return e?`${e}/content/users/${this.username}`:null}get url(){const e=this.get("portal.restUrl")
return e?`${e}/community/users/${this.username}`:null}addItem(e){const t=e&&e.item,r=e&&e.data,s=e&&e.folder,i={method:"post"}
t&&(i.query=t.createPostQuery(),null!=r&&("string"==typeof r?i.query.text=r:"object"==typeof r&&(i.query.text=JSON.stringify(r))))
let a=this.userContentUrl
return s&&(a+="/"+("string"==typeof s?s:s.id)),this.portal._request(a+"/addItem",i).then(e=>(t.id=e.id,t.portal=this.portal,t.loaded?t.reload():t.load()))}deleteItem(e){let t=this.userContentUrl
return e.ownerFolder&&(t+="/"+e.ownerFolder),this.portal._request(t+`/items/${e.id}/delete`,{method:"post"}).then(()=>{e.id=null,e.portal=null})}deleteItems(e){const t=this.userContentUrl+"/deleteItems",r=e.map(e=>e.id)
if(r.length){const s={method:"post",query:{items:r.join(",")}}
return this.portal._request(t,s).then(()=>{e.forEach(e=>{e.id=null,e.portal=null})})}return Promise.resolve(void 0)}fetchFolders(){return this.portal._request(this.userContentUrl,{query:{num:1}}).then(e=>{let t
return t=e&&e.folders?e.folders.map(e=>{const t=c.fromJSON(e)
return t.portal=this.portal,t}):[],t})}fetchGroups(){return this.portal._request(this.url).then(e=>{let t
return t=e&&e.groups?e.groups.map(e=>{const t=p.default.fromJSON(e)
return t.portal=this.portal,t}):[],t})}fetchItems(e){e||(e={})
let t,s=this.userContentUrl
return e.folder&&(s+="/"+e.folder.id),r.e(80).then(r.bind(null,1006)).then(({default:r})=>{t=r
const i={folders:!1,num:e.num||10,start:e.start||1,sortField:e.sortField||"created",sortOrder:e.sortOrder||"asc"}
return this.portal._request(s,{query:i})}).then(e=>{let r
return e&&e.items?(r=e.items.map(e=>{const r=t.fromJSON(e)
return r.portal=this.portal,r}),Promise.all(r.map(e=>e.load())).catch(e=>e).then(()=>({items:r,nextStart:e.nextStart,total:e.total}))):{items:[],nextStart:-1,total:0}})}fetchTags(){return this.portal._request(this.url+"/tags").then(e=>e.tags)}getThumbnailUrl(e){let t=this.thumbnailUrl
return t&&e&&(t+="&w="+e),t}queryFavorites(e){return this.favGroupId?(this._favGroup||(this._favGroup=new p.default({id:this.favGroupId,portal:this.portal})),this._favGroup.queryItems(e)):Promise.reject(new i.a("internal:unknown","Unknown internal error",{internalError:"Unknown favGroupId"}))}toJSON(){throw new i.a("internal:not-yet-implemented","PortalGroup.toJSON is not yet implemented")}static fromJSON(e){if(!e)return null
if(e.declaredClass)throw new Error("JSON object is already hydrated")
const t=new u
return t.sourceJSON=e,t.read(e),t}}
Object(s.a)([Object(n.b)()],h.prototype,"access",void 0),Object(s.a)([Object(n.b)({type:Date})],h.prototype,"created",void 0),Object(s.a)([Object(n.b)()],h.prototype,"culture",void 0),Object(s.a)([Object(n.b)()],h.prototype,"description",void 0),Object(s.a)([Object(n.b)()],h.prototype,"email",void 0),Object(s.a)([Object(n.b)()],h.prototype,"favGroupId",void 0),Object(s.a)([Object(n.b)()],h.prototype,"fullName",void 0),Object(s.a)([Object(n.b)({type:Date})],h.prototype,"modified",void 0),Object(s.a)([Object(n.b)()],h.prototype,"orgId",void 0),Object(s.a)([Object(n.b)()],h.prototype,"portal",void 0),Object(s.a)([Object(n.b)()],h.prototype,"preferredView",void 0),Object(s.a)([Object(n.b)()],h.prototype,"privileges",void 0),Object(s.a)([Object(n.b)()],h.prototype,"region",void 0),Object(s.a)([Object(n.b)()],h.prototype,"role",void 0),Object(s.a)([Object(n.b)()],h.prototype,"roleId",void 0),Object(s.a)([Object(n.b)()],h.prototype,"sourceJSON",void 0),Object(s.a)([Object(n.b)()],h.prototype,"thumbnail",void 0),Object(s.a)([Object(n.b)({readOnly:!0})],h.prototype,"thumbnailUrl",null),Object(s.a)([Object(n.b)()],h.prototype,"units",void 0),Object(s.a)([Object(n.b)({readOnly:!0})],h.prototype,"userContentUrl",null),Object(s.a)([Object(n.b)({readOnly:!0})],h.prototype,"url",null),Object(s.a)([Object(n.b)()],h.prototype,"username",void 0),Object(s.a)([Object(n.b)()],h.prototype,"userType",void 0),h=u=Object(s.a)([Object(o.a)("esri.portal.PortalUser")],h)
const d=h},959:function(e,t,r){"use strict"
r.d(t,"a",(function(){return h})),r.d(t,"b",(function(){return p}))
var s,i,a=r(856),n=r(862),o=r(20),l=r(861),c=r(857);(i=s||(s={}))[i.PENDING=0]="PENDING",i[i.RESOLVED=1]="RESOLVED",i[i.REJECTED=2]="REJECTED"
class u{constructor(e){this.instance=e,this._resolver=Object(l.f)(),this._status=s.PENDING,this._resolvingPromises=[],this._resolver.promise.then(()=>{this._status=s.RESOLVED,this._cleanUp()},()=>{this._status=s.REJECTED,this._cleanUp()})}addResolvingPromise(e){this._resolvingPromises.push(e),this._tryResolve()}isResolved(){return this._status===s.RESOLVED}isRejected(){return this._status===s.REJECTED}isFulfilled(){return this._status!==s.PENDING}abort(){this._resolver.reject(Object(l.e)())}when(e,t){return this._resolver.promise.then(e,t)}_cleanUp(){this._allPromise=this._resolvingPromises=this._allPromise=null}_tryResolve(){if(this.isFulfilled())return
const e=Object(l.f)(),t=[...this._resolvingPromises,Object(o.c)(e.promise)],r=this._allPromise=Promise.all(t)
r.then(()=>{this.isFulfilled()||this._allPromise!==r||this._resolver.resolve(this.instance)},e=>{this.isFulfilled()||this._allPromise!==r||Object(l.m)(e)||this._resolver.reject(e)}),e.resolve()}}const p=e=>{let t=class extends e{constructor(...e){super(...e),this._promiseProps=new u(this),this.addResolvingPromise(Promise.resolve())}isResolved(){return this._promiseProps.isResolved()}isRejected(){return this._promiseProps.isRejected()}isFulfilled(){return this._promiseProps.isFulfilled()}when(e,t){return new Promise((e,t)=>{this._promiseProps.when(e,t)}).then(e,t)}catch(e){return this.when(null,e)}addResolvingPromise(e){e&&!this._promiseProps.isFulfilled()&&this._promiseProps.addResolvingPromise("_promiseProps"in e?e.when():e)}}
return t=Object(a.a)([Object(c.a)("esri.core.Promise")],t),t}
let h=class extends(p(n.a)){}
h=Object(a.a)([Object(c.a)("esri.core.Promise")],h)},966:function(e,t,r){"use strict"
r.d(t,"a",(function(){return a}))
var s=r(292)
const i=["elevation3d.arcgis.com","js.arcgis.com","jsdev.arcgis.com","jsqa.arcgis.com","static.arcgis.com"]
function a(e){const t=Object(s.o)(e,!0)
return t&&t.endsWith(".arcgis.com")&&!i.includes(t)&&!e.endsWith("/sharing/rest/generateToken")}},988:function(e,t,r){"use strict"
r.r(t),r.d(t,"default",(function(){return p}))
var s=r(856),i=r(354),a=r(860),n=r(858),o=(r(353),r(77),r(859)),l=r(857),c=r(926)
let u=class extends a.a{constructor(e){super(e),this.access=null,this.created=null,this.description=null,this.id=null,this.isInvitationOnly=!1,this.modified=null,this.owner=null,this.portal=null,this.snippet=null,this.sortField=null,this.sortOrder=null,this.tags=null,this.title=null}get thumbnailUrl(){const e=this.url,t=this.thumbnail
return e&&t?this.portal._normalizeUrl(`${e}/info/${t}?f=json`):null}get url(){const e=this.get("portal.restUrl")
return e?e+"/community/groups/"+this.id:null}fetchCategorySchema(e){return this.portal._request(this.url+"/categorySchema",e).then(t=>{const r=t.categorySchema||[]
return r.some(e=>"contentCategorySetsGroupQuery.LivingAtlas"===e.source)?this._fetchCategorySchemaSet("LivingAtlas",e):r})}fetchMembers(e){return this.portal._request(this.url+"/users",e)}getThumbnailUrl(e){let t=this.thumbnailUrl
return t&&e&&(t+="&w="+e),t}toJSON(){throw new i.a("internal:not-yet-implemented","PortalGroup.toJSON is not yet implemented")}queryItems(e,t){let r=Object(o.m)(c.a,e)
return parseFloat(this.portal.currentVersion)>5?(r=r||new c.a,this.portal._queryPortal(`/content/groups/${this.id}/search`,r,"PortalItem",t)):(r=r?r.clone():new c.a,r.query="group:"+this.id+(r.query?" "+r.query:""),this.portal.queryItems(r,t))}_fetchCategorySchemaSet(e,t){return this.portal._fetchSelf(this.portal.authMode,!0,t).then(e=>{const r=e.contentCategorySetsGroupQuery
if(r){const e=new c.a
return e.disableExtraQuery=!0,e.num=1,e.query=r,this.portal.queryGroups(e,t)}throw new i.a("portal-group:fetchCategorySchema","contentCategorySetsGroupQuery value not found")}).then(r=>{if(r.total){const s=r.results[0],i=new c.a
return i.num=1,i.query=`typekeywords:"${e}"`,s.queryItems(i,t)}throw new i.a("portal-group:fetchCategorySchema","contentCategorySetsGroupQuery group not found")}).then(e=>e.total?e.results[0].fetchData("json",t).then(e=>{const t=e&&e.categorySchema
return t&&t.length?t:[]}):[])}}
Object(s.a)([Object(n.b)()],u.prototype,"access",void 0),Object(s.a)([Object(n.b)({type:Date})],u.prototype,"created",void 0),Object(s.a)([Object(n.b)()],u.prototype,"description",void 0),Object(s.a)([Object(n.b)()],u.prototype,"id",void 0),Object(s.a)([Object(n.b)()],u.prototype,"isInvitationOnly",void 0),Object(s.a)([Object(n.b)({type:Date})],u.prototype,"modified",void 0),Object(s.a)([Object(n.b)()],u.prototype,"owner",void 0),Object(s.a)([Object(n.b)()],u.prototype,"portal",void 0),Object(s.a)([Object(n.b)()],u.prototype,"snippet",void 0),Object(s.a)([Object(n.b)()],u.prototype,"sortField",void 0),Object(s.a)([Object(n.b)()],u.prototype,"sortOrder",void 0),Object(s.a)([Object(n.b)()],u.prototype,"tags",void 0),Object(s.a)([Object(n.b)()],u.prototype,"thumbnail",void 0),Object(s.a)([Object(n.b)({readOnly:!0})],u.prototype,"thumbnailUrl",null),Object(s.a)([Object(n.b)()],u.prototype,"title",void 0),Object(s.a)([Object(n.b)({readOnly:!0})],u.prototype,"url",null),u=Object(s.a)([Object(l.a)("esri.portal.PortalGroup")],u)
const p=u}}])
