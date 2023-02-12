(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[152,228,337],{1003:function(e,t,r){"use strict"
r.d(t,"a",(function(){return h}))
var s=r(856),a=r(862),i=r(885),n=r(20),o=r(892),l=r(948),c=r(858),u=r(857)
let h=class extends a.a{constructor(){super(...arguments),this.updating=!1,this.handleId=0,this.handles=new i.a,this.scheduleHandleId=0,this.pendingPromises=new Set}destroy(){this.removeAll(),this.handles.destroy()}add(e,t,r={}){return this._installWatch(e,t,r,o.e)}addWhen(e,t,r={}){return this._installWatch(e,t,r,o.f)}addOnCollectionChange(e,t,{initial:r=!1}={}){const s=++this.handleId
return this.handles.add([Object(o.b)(e,"after-changes",this._createSyncUpdatingCallback(),o.c),Object(o.b)(e,"change",t,{onListenerAdd:r?e=>t({added:e.toArray(),removed:[]}):void 0})],s),{remove:()=>this.handles.remove(s)}}addPromise(e){if(Object(n.j)(e))return e
const t=++this.handleId
this.handles.add({remove:()=>{this.pendingPromises.delete(e)&&(0!==this.pendingPromises.size||this.handles.has(d)||this._set("updating",!1))}},t),this.pendingPromises.add(e),this._set("updating",!0)
const r=()=>this.handles.remove(t)
return e.then(r,r),e}removeAll(){this.pendingPromises.clear(),this.handles.removeAll(),this._set("updating",!1)}_installWatch(e,t,r={},s){const a=++this.handleId
r.sync||this._installSyncUpdatingWatch(e,a)
const i=s(e,t,r)
return this.handles.add(i,a),{remove:()=>this.handles.remove(a)}}_installSyncUpdatingWatch(e,t){const r=this._createSyncUpdatingCallback(),s=Object(o.e)(e,r,{sync:!0,equals:()=>!1})
return this.handles.add(s,t),s}_createSyncUpdatingCallback(){return()=>{this.handles.remove(d),++this.scheduleHandleId
const e=this.scheduleHandleId
this._get("updating")||this._set("updating",!0),this.handles.add(Object(l.b)(()=>{e===this.scheduleHandleId&&(this._set("updating",this.pendingPromises.size>0),this.handles.remove(d))}),d)}}}
Object(s.a)([Object(c.b)({readOnly:!0})],h.prototype,"updating",void 0),h=Object(s.a)([Object(u.a)("esri.views.support.WatchUpdatingTracking")],h)
const d=-42
var p,y;(y=p||(p={}))[y.NONE=0]="NONE",y[y.SYNC=1]="SYNC",y[y.INIT=2]="INIT"},1055:function(e,t,r){"use strict"
r.d(t,"a",(function(){return n}))
var s=r(77),a=r(20),i=r(861)
function n(e,t,r=!1,n){return new Promise((l,c)=>{if(Object(i.n)(n))return void c(o())
let u=()=>{p(),c(new Error("Unable to load "+t))},h=()=>{const t=e
p(),l(t)},d=()=>{if(!e)return
const t=e
p(),t.src="",c(o())}
const p=()=>{Object(s.a)("esri-image-decode")||(e.removeEventListener("error",u),e.removeEventListener("load",h)),u=null,h=null,e=null,Object(a.k)(n)&&n.removeEventListener("abort",d),d=null,r&&URL.revokeObjectURL(t)}
Object(a.k)(n)&&n.addEventListener("abort",d),Object(s.a)("esri-image-decode")?e.decode().then(h,u):(e.addEventListener("error",u),e.addEventListener("load",h))})}function o(){try{return new DOMException("Aborted","AbortError")}catch{const e=new Error
return e.name="AbortError",e}}},1184:function(e,t,r){"use strict"
r.d(t,"a",(function(){return h}))
var s=r(856),a=r(878),i=r(912),n=r(20),o=(r(354),r(177),r(1007),r(958)),l=r(858),c=(r(353),r(77),r(859),r(857))
let u=class extends(Object(i.b)(a.a)){constructor(e){super(e),this.getCollections=null}initialize(){this.handles.add(Object(o.a)(()=>this._refresh()))}destroy(){this.getCollections=null}_refresh(){const e=Object(n.k)(this.getCollections)?this.getCollections():null
if(Object(n.j)(e))return void this.removeAll()
let t=0
for(const r of e)Object(n.k)(r)&&(t=this._processCollection(t,r))
this.splice(t,this.length)}_createNewInstance(e){return new a.a(e)}_processCollection(e,t){if(!t)return e
const r=this.itemFilterFunction?this.itemFilterFunction:e=>!!e
for(const s of t)if(s){if(r(s)){const t=this.indexOf(s,e)
t>=0?t!==e&&this.reorder(s,e):this.add(s,e),++e}if(this.getChildrenFunction){const t=this.getChildrenFunction(s)
if(Array.isArray(t))for(const r of t)e=this._processCollection(e,r)
else e=this._processCollection(e,t)}}return e}}
Object(s.a)([Object(l.b)()],u.prototype,"getCollections",void 0),Object(s.a)([Object(l.b)()],u.prototype,"getChildrenFunction",void 0),Object(s.a)([Object(l.b)()],u.prototype,"itemFilterFunction",void 0),u=Object(s.a)([Object(c.a)("esri.core.CollectionFlattener")],u)
const h=u},1428:function(e,t,r){"use strict"
r.d(t,"a",(function(){return _}))
var s,a=r(856),i=r(873),n=r(878),o=r(1072),l=r(963),c=r(354),u=r(860),h=r(178),d=r(903),p=r(1193),y=r(177),b=r(861),m=r(858),f=r(859),g=r(857),v=r(864),O=(r(353),r(77),r(962),r(868))
let j=s=class extends u.a{constructor(e){super(e),this.type="none"}clone(){return new s({type:this.type})}}
Object(a.a)([Object(O.a)({none:"none",stayAbove:"stay-above"})],j.prototype,"type",void 0),j=s=Object(a.a)([Object(g.a)("esri.ground.NavigationConstraint")],j)
var w,x=r(1076)
const L=y.a.getLogger("esri.Ground")
let S=w=class extends(Object(u.b)(d.a)){constructor(e){super(e),this.opacity=1,this.surfaceColor=null,this.navigationConstraint=null,this.layers=new n.a
const t=e=>{e.parent&&e.parent!==this&&"remove"in e.parent&&e.parent.remove(e),e.parent=this,"elevation"!==e.type&&"base-elevation"!==e.type&&L.error(`Layer '${e.title}, id:${e.id}' of type '${e.type}' is not supported as a ground layer and will therefore be ignored. Only layers of type 'elevation' are supported.`)}
this.layers.on("after-add",e=>t(e.item)),this.layers.on("after-remove",e=>(e=>{e.parent=null})(e.item))}initialize(){this.when().catch(e=>{L.error("#load()","Failed to load ground",e)}),this.resourceInfo&&this.read(this.resourceInfo.data,this.resourceInfo.context)}destroy(){const e=this.layers.removeAll()
for(const t of e)t.destroy()
this.layers.destroy()}normalizeCtorArgs(e){return e&&"resourceInfo"in e&&(this._set("resourceInfo",e.resourceInfo),delete(e={...e}).resourceInfo),e}set layers(e){this._set("layers",Object(o.b)(e,this._get("layers")))}writeLayers(e,t,r,s){const a=[]
e?(s={...s,layerContainerType:"ground"},e.forEach(e=>{if("write"in e){const t={}
Object(l.b)(e)().write(t,s)&&a.push(t)}else s&&s.messages&&s.messages.push(new c.a("layer:unsupported",`Layers (${e.title}, ${e.id}) of type '${e.declaredClass}' cannot be persisted in the ground`,{layer:e}))}),t.layers=a):t.layers=a}load(e){return this.addResolvingPromise(this._loadFromSource(e)),Promise.resolve(this)}loadAll(){return Object(p.a)(this,e=>{e(this.layers)})}async queryElevation(e,t){await this.load({signal:null==t?void 0:t.signal})
const{ElevationQuery:s}=await Promise.all([r.e(14),r.e(69)]).then(r.bind(null,2204))
Object(b.v)(t)
const a=new s,i=this.layers.filter(M).toArray()
return a.queryAll(i,e,t)}async createElevationSampler(e,t){await this.load({signal:null==t?void 0:t.signal})
const{ElevationQuery:s}=await Promise.all([r.e(14),r.e(69)]).then(r.bind(null,2204))
Object(b.v)(t)
const a=new s,i=this.layers.filter(M).toArray()
return a.createSamplerAll(i,e,t)}clone(){const e={opacity:this.opacity,surfaceColor:Object(h.a)(this.surfaceColor),navigationConstraint:Object(h.a)(this.navigationConstraint),layers:this.layers.slice()}
return this.loaded&&(e.loadStatus="loaded"),new w({resourceInfo:this.resourceInfo}).set(e)}read(e,t){this.resourceInfo||this._set("resourceInfo",{data:e,context:t}),super.read(e,t)}_loadFromSource(e){const t=this.resourceInfo
return t?this._loadLayersFromJSON(t.data,t.context,e):Promise.resolve(null)}_loadLayersFromJSON(e,t,s){const a=t&&t.origin||"web-scene",i=t&&t.portal||null,n=t&&t.url||null
return r.e(47).then(r.bind(null,1643)).then(({populateOperationalLayers:t})=>{Object(b.v)(s)
const r=[]
if(e.layers&&Array.isArray(e.layers)){const s={context:{origin:a,url:n,portal:i,layerContainerType:"ground"},defaultLayerType:"ArcGISTiledElevationServiceLayer"}
r.push(t(this.layers,e.layers,s))}return Object(b.j)(r)}).then(()=>{})}}
function M(e){return"elevation"===e.type||function(e){return e&&"createElevationSampler"in e}(e)}Object(a.a)([Object(m.b)({json:{read:!1}})],S.prototype,"layers",null),Object(a.a)([Object(v.a)("layers")],S.prototype,"writeLayers",null),Object(a.a)([Object(m.b)({readOnly:!0})],S.prototype,"resourceInfo",void 0),Object(a.a)([Object(m.b)({type:Number,nonNullable:!0,range:{min:0,max:1},json:{type:f.a,read:{reader:x.b,source:"transparency"},write:{writer:(e,t)=>{t.transparency=Object(x.a)(e)},target:"transparency"}}})],S.prototype,"opacity",void 0),Object(a.a)([Object(m.b)({type:i.a,json:{type:[f.a],write:(e,t)=>{t.surfaceColor=e.toJSON().slice(0,3)}}})],S.prototype,"surfaceColor",void 0),Object(a.a)([Object(m.b)({type:j,json:{write:!0}})],S.prototype,"navigationConstraint",void 0),S=w=Object(a.a)([Object(g.a)("esri.Ground")],S)
const _=S},1430:function(e,t,r){"use strict"
r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d})),r.d(t,"c",(function(){return p})),r.d(t,"d",(function(){return y})),r.d(t,"e",(function(){return O})),r.d(t,"f",(function(){return m})),r.d(t,"g",(function(){return g})),r.d(t,"h",(function(){return v}))
var s=r(671),a=r(78),i=r(878),n=r(177),o=r(20),l=r(292),c=r(859),u=r(670)
const h=n.a.getLogger("esri.support.basemapUtils")
function d(){return{}}function p(e){for(const t in e){const r=e[t]
!1===(null==r?void 0:r.destroyed)&&r.destroy(),delete e[t]}}function y(e,t){var r
let i
if("string"==typeof e){if(!(e in u.esriBasemapDefinitions)){const t=Object.entries(u.esriBasemapDefinitions).filter(([e,t])=>a.default.apiKey&&!t.classic||!a.default.apiKey&&t.classic&&!t.deprecated).map(([e])=>`"${e}"`).join(", ")
return h.warn(`Unable to find basemap definition for: ${e}. Try one of these: ${t}`),null}t&&(i=t[e]),i||(i=s.default.fromId(e),t&&(t[e]=i))}else i=Object(c.m)(s.default,e)
return null!=(r=i)&&r.destroyed&&(h.warn("The provided basemap is already destroyed",{basemap:i}),i=null),i}function b(e,t=null){const r=y(e)
if(!r)return null
const a=new s.default({id:r.id,title:r.title,baseLayers:r.baseLayers.slice(),referenceLayers:r.referenceLayers.slice()})
return t&&(a.baseLayers=f(a.baseLayers,t.baseLayers),a.referenceLayers=f(a.referenceLayers,t.referenceLayers)),a.load().catch(()=>{}),a.portalItem=r.portalItem,a}function m(e){let t=null
const r=function(e){return e?!e.loaded&&e.resourceInfo?S(e.resourceInfo.data):{baseLayers:x(e.baseLayers),referenceLayers:x(e.referenceLayers)}:null}(e),s=!r.baseLayers.length
for(const e in u.esriBasemapDefinitions){const a=_(r,S(u.esriBasemapDefinitions[e]),{mustMatchReferences:s})
if("equal"===a){t=e
break}"base-layers-equal"===a&&(t=e)}return t}function f(e,t){const r=new i.a
return e.forEach(e=>{const s=t.find(t=>I(L(e),L(t)))||e
r.some(e=>e===s)?r.push(e):r.push(s)}),r}function g(e){return!(null==e||!e.baseLayers.concat(e.referenceLayers).some(v))}function v(e){if(w(e.url))return!0
if("vector-tile"===e.type)for(const t in e.sourceNameToSource){const r=e.sourceNameToSource[t]
if(w(null==r?void 0:r.sourceUrl))return!0}return!1}function O(e,t){var r,s,a
if(Object(o.j)(t)||Object(o.j)(e))return{spatialReference:null,updating:!1}
if("not-loaded"===t.loadStatus)return t.load(),{spatialReference:null,updating:!0}
if(t.spatialReference)return{spatialReference:t.spatialReference,updating:!1}
if(0===t.baseLayers.length)return{spatialReference:null,updating:!1}
const i=t.baseLayers.getItemAt(0)
switch(i.loadStatus){case"not-loaded":i.load()
case"loading":return{spatialReference:null,updating:!0}
case"failed":return{spatialReference:null,updating:!1}}const n=(("supportedSpatialReferences"in i?i.supportedSpatialReferences:null)||["tileInfo"in i?null==(r=i.tileInfo)?void 0:r.spatialReference:i.spatialReference]).filter(Boolean)
return e.spatialReference?{spatialReference:null!=(s=null!=(a=n.find(t=>e.spatialReference.equals(t)))?a:n[0])?s:null,updating:!1}:{spatialReference:n[0],updating:!1}}const j=/^(basemaps|ibasemaps).*-api\.arcgis\.com$/i
function w(e){if(!e)return!1
const t=new l.a(Object(l.C)(e))
return j.test(t.authority)}function x(e){return(i.a.isCollection(e)?e.toArray():e).map(L)}function L(e){var t,r
return{type:e.type,url:A("urlTemplate"in e&&e.urlTemplate||e.url||"styleUrl"in e&&e.styleUrl),minScale:"minScale"in e&&null!=e.minScale?e.minScale:0,maxScale:"maxScale"in e&&null!=e.maxScale?e.maxScale:0,opacity:null!=e.opacity?e.opacity:1,visible:null==e.visible||!!e.visible,sublayers:"map-image"!==e.type&&"wms"!==e.type||!Object(o.k)(e.sublayers)||null==(t=e.sublayers)?void 0:t.map(e=>({id:e.id,visible:e.visible})),activeLayerId:"wmts"===e.type?null==(r=e.activeLayer)?void 0:r.id:void 0}}function S(e){return e?{baseLayers:M(e.baseMapLayers.filter(e=>!e.isReference)),referenceLayers:M(e.baseMapLayers.filter(e=>e.isReference))}:null}function M(e){return e.map(e=>function(e){let t
switch(e.layerType){case"VectorTileLayer":t="vector-tile"
break
case"ArcGISTiledMapServiceLayer":t="tile"
break
default:t="unknown"}return{type:t,url:A(e.templateUrl||e.urlTemplate||e.styleUrl||e.url),minScale:null!=e.minScale?e.minScale:0,maxScale:null!=e.maxScale?e.maxScale:0,opacity:null!=e.opacity?e.opacity:1,visible:null==e.visibility||!!e.visibility,sublayers:void 0,activeLayerId:void 0}}(e))}function _(e,t,r){return null!=e!=(null!=t)?"not-equal":e?T(e.baseLayers,t.baseLayers)?T(e.referenceLayers,t.referenceLayers)?"equal":r.mustMatchReferences?"not-equal":"base-layers-equal":"not-equal":"equal"}function T(e,t){if(e.length!==t.length)return!1
for(let r=0;r<e.length;r++)if(!I(e[r],t[r]))return!1
return!0}function I(e,t){if(e.type!==t.type||e.url!==t.url||e.minScale!==t.minScale||e.maxScale!==t.maxScale||e.visible!==t.visible||e.opacity!==t.opacity)return!1
if(Object(o.k)(e.activeLayerId)||Object(o.k)(t.activeLayerId))return e.activeLayerId===t.activeLayerId
if(Object(o.k)(e.sublayers)||Object(o.k)(t.sublayers)){if(Object(o.j)(e.sublayers)||Object(o.j)(t.sublayers)||e.sublayers.length!==t.sublayers.length)return!1
for(let r=0;r<e.sublayers.length;r++){const s=e.sublayers.at(r),a=t.sublayers.at(r)
if(s.id!==a.id||s.visible!==a.visible)return!1}}return!0}function A(e){return e?Object(l.F)(e).replace(/^\s*https?:/i,"").toLowerCase():""}},1563:function(e,t,r){"use strict"
r.d(t,"a",(function(){return y}))
var s=r(856),a=r(878),i=r(1072),n=r(177),o=r(861),l=r(858),c=(r(353),r(77),r(859),r(857)),u=r(664)
function h(e){return e&&"group"===e.type}function d(e,t,r){let s,a
if(e)for(let i=0,n=e.length;i<n;i++){if(s=e.getItemAt(i),s[t]===r)return s
if(h(s)&&(a=d(s.layers,t,r),a))return a}}const p=n.a.getLogger("esri.support.LayersMixin"),y=e=>{let t=class extends e{constructor(...e){super(...e),this.layers=new a.a
const t=e=>{e.parent=this,this.layerAdded(e),"elevation"!==e.type&&"base-elevation"!==e.type||p.error(`Layer 'title:${e.title}, id:${e.id}' of type '${e.type}' is not supported as an operational layer and will therefore be ignored.`)},r=e=>{e.parent=null,this.layerRemoved(e)}
this.layers.on("before-add",e=>(e=>{e.parent&&"remove"in e.parent&&e.parent.remove(e)})(e.item)),this.layers.on("after-add",e=>t(e.item)),this.layers.on("after-remove",e=>r(e.item))}destroy(){const e=this.layers.removeAll()
for(const t of e)this.layerRemoved(t),t.destroy()
this.layers.destroy()}set layers(e){this._set("layers",Object(i.b)(e,this._get("layers")))}add(e,t){const r=this.layers
if(t=r.getNextIndex(t),e instanceof u.default){const s=e
s.parent===this?this.reorder(s,t):r.add(s,t)}else Object(o.o)(e)?e.then(e=>{this.destroyed||this.add(e,t)}):p.error("#add()","The item being added is not a Layer or a Promise that resolves to a Layer.")}addMany(e,t){const r=this.layers
t=r.getNextIndex(t),e.slice().forEach(e=>{e.parent!==this?(r.add(e,t),t+=1):this.reorder(e,t)})}findLayerById(e){return d(this.layers,"id",e)}findLayerByUid(e){return d(this.layers,"uid",e)}remove(e){return this.layers.remove(e)}removeMany(e){return this.layers.removeMany(e)}removeAll(){return this.layers.removeAll()}reorder(e,t){return this.layers.reorder(e,t)}layerAdded(e){}layerRemoved(e){}}
return Object(s.a)([Object(l.b)()],t.prototype,"layers",null),t=Object(s.a)([Object(c.a)("esri.support.LayersMixin")],t),t}},1564:function(e,t,r){"use strict"
r.d(t,"a",(function(){return p}))
var s=r(856),a=r(878),i=r(1072),n=r(177),o=r(858),l=(r(353),r(77),r(859),r(857))
const c="esri.support.TablesMixin",u=n.a.getLogger(c)
function h(e){return e&&"group"===e.type}function d(e,t,r){if(e)for(let s=0,a=e.length;s<a;s++){const a=e.getItemAt(s)
if(a[t]===r)return a
if(h(a)){const e=d(a.tables,t,r)
if(e)return e}}}const p=e=>{let t=class extends e{constructor(...e){super(...e),this.tables=new a.a,this.tables.on("after-add",e=>{const t=e.item
t.parent&&t.parent!==this&&"tables"in t.parent&&t.parent.tables.remove(t),t.parent=this,"feature"!==t.type&&u.error(`Layer 'title:${t.title}, id:${t.id}' of type '${t.type}' is not supported as a table and will therefore be ignored.`)}),this.tables.on("after-remove",e=>{e.item.parent=null})}destroy(){const e=this.tables.removeAll()
for(const t of e)t.destroy()
this.tables.destroy()}set tables(e){this._set("tables",Object(i.b)(e,this._get("tables")))}findTableById(e){return d(this.tables,"id",e)}findTableByUid(e){return d(this.tables,"uid",e)}}
return Object(s.a)([Object(o.b)()],t.prototype,"tables",null),t=Object(s.a)([Object(l.a)(c)],t),t}},658:function(e,t,r){"use strict"
r.r(t),r.d(t,"default",(function(){return g}))
var s,a=r(856),i=r(20),n=r(355),o=r(858),l=(r(353),r(77),r(859),r(857)),c=r(875),u=r(866),h=r(659),d=r(928),p=r(904),y=r(872),b=r(662)
function m(e,t,r){return null==t?r:null==r?t:e(t,r)}let f=s=class extends c.a{constructor(...e){super(...e),this.type="extent",this.xmin=0,this.ymin=0,this.mmin=void 0,this.zmin=void 0,this.xmax=0,this.ymax=0,this.mmax=void 0,this.zmax=void 0}normalizeCtorArgs(e,t,r,s,a){return function(e){return e&&("esri.geometry.SpatialReference"===e.declaredClass||null!=e.wkid)}(e)?{spatialReference:e,xmin:0,ymin:0,xmax:0,ymax:0}:"object"==typeof e?(e.spatialReference=null==e.spatialReference?h.default.WGS84:e.spatialReference,e):{xmin:e,ymin:t,xmax:r,ymax:s,spatialReference:null==a?h.default.WGS84:a}}static fromBounds(e,t){return new s({xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:t})}static fromPoint(e){return new s({xmin:e.x,ymin:e.y,zmin:e.z,xmax:e.x,ymax:e.y,zmax:e.z,spatialReference:e.spatialReference})}get cache(){return this.commitProperty("xmin"),this.commitProperty("ymin"),this.commitProperty("zmin"),this.commitProperty("mmin"),this.commitProperty("xmax"),this.commitProperty("ymax"),this.commitProperty("zmax"),this.commitProperty("mmax"),this.commitProperty("spatialReference"),{}}get center(){const e=new u.a({x:.5*(this.xmin+this.xmax),y:.5*(this.ymin+this.ymax),spatialReference:this.spatialReference})
return this.hasZ&&(e.z=.5*(this.zmin+this.zmax)),this.hasM&&(e.m=.5*(this.mmin+this.mmax)),e}get extent(){return this.clone()}get hasM(){return null!=this.mmin&&null!=this.mmax}get hasZ(){return null!=this.zmin&&null!=this.zmax}get height(){return Math.abs(this.ymax-this.ymin)}get width(){return Math.abs(this.xmax-this.xmin)}centerAt(e){const t=this.center
return null!=e.z&&this.hasZ?this.offset(e.x-t.x,e.y-t.y,e.z-t.z):this.offset(e.x-t.x,e.y-t.y)}clone(){const e=new s
return e.xmin=this.xmin,e.ymin=this.ymin,e.xmax=this.xmax,e.ymax=this.ymax,e.spatialReference=this.spatialReference,null!=this.zmin&&(e.zmin=this.zmin,e.zmax=this.zmax),null!=this.mmin&&(e.mmin=this.mmin,e.mmax=this.mmax),e}contains(e){if(!e)return!1
const t=this.spatialReference,r=e.spatialReference
return t&&r&&!t.equals(r)&&Object(b.canProject)(t,r)&&(e=t.isWebMercator?Object(b.geographicToWebMercator)(e):Object(b.webMercatorToGeographic)(e,!0)),"point"===e.type?Object(d.e)(this,e):"extent"===e.type&&Object(d.c)(this,e)}equals(e){if(this===e)return!0
if(Object(i.j)(e))return!1
const t=this.spatialReference,r=e.spatialReference
return t&&r&&!t.equals(r)&&Object(b.canProject)(t,r)&&(e=t.isWebMercator?Object(b.geographicToWebMercator)(e):Object(b.webMercatorToGeographic)(e,!0)),this.xmin===e.xmin&&this.ymin===e.ymin&&this.zmin===e.zmin&&this.mmin===e.mmin&&this.xmax===e.xmax&&this.ymax===e.ymax&&this.zmax===e.zmax&&this.mmax===e.mmax}expand(e){const t=.5*(1-e),r=this.width*t,s=this.height*t
if(this.xmin+=r,this.ymin+=s,this.xmax-=r,this.ymax-=s,this.hasZ){const e=(this.zmax-this.zmin)*t
this.zmin+=e,this.zmax-=e}if(this.hasM){const e=(this.mmax-this.mmin)*t
this.mmin+=e,this.mmax-=e}return this}intersects(e){if(Object(i.j)(e))return!1
"mesh"===e.type&&(e=e.extent)
const t=this.spatialReference,r=e.spatialReference
return t&&r&&!t.equals(r)&&Object(b.canProject)(t,r)&&(e=t.isWebMercator?Object(b.geographicToWebMercator)(e):Object(b.webMercatorToGeographic)(e,!0)),Object(p.c)(e.type)(this,e)}normalize(){const e=this._normalize(!1,!0)
return Array.isArray(e)?e:[e]}offset(e,t,r){return this.xmin+=e,this.ymin+=t,this.xmax+=e,this.ymax+=t,null!=r&&(this.zmin+=r,this.zmax+=r),this}shiftCentralMeridian(){return this._normalize(!0)}union(e){return this===e||(this.xmin=Math.min(this.xmin,e.xmin),this.ymin=Math.min(this.ymin,e.ymin),this.xmax=Math.max(this.xmax,e.xmax),this.ymax=Math.max(this.ymax,e.ymax),(this.hasZ||e.hasZ)&&(this.zmin=m(Math.min,this.zmin,e.zmin),this.zmax=m(Math.max,this.zmax,e.zmax)),(this.hasM||e.hasM)&&(this.mmin=m(Math.min,this.mmin,e.mmin),this.mmax=m(Math.max,this.mmax,e.mmax))),this}intersection(e){return this===e?this:Object(i.j)(e)||!this.intersects(e)?null:(this.xmin=Math.max(this.xmin,e.xmin),this.ymin=Math.max(this.ymin,e.ymin),this.xmax=Math.min(this.xmax,e.xmax),this.ymax=Math.min(this.ymax,e.ymax),(this.hasZ||e.hasZ)&&(this.zmin=m(Math.max,this.zmin,e.zmin),this.zmax=m(Math.min,this.zmax,e.zmax)),(this.hasM||e.hasM)&&(this.mmin=m(Math.max,this.mmin,e.mmin),this.mmax=m(Math.min,this.mmax,e.mmax)),this)}toJSON(e){return this.write({},e)}_shiftCM(e=Object(y.e)(this.spatialReference)){if(!e||!this.spatialReference)return this
const t=this.spatialReference,r=this._getCM(e)
if(r){const s=t.isWebMercator?Object(b.webMercatorToGeographic)(r):r
this.xmin-=r.x,this.xmax-=r.x,t.isWebMercator||(s.x=this._normalizeX(s.x,e).x),this.spatialReference=new h.default(Object(n.c)(t.isWGS84?e.altTemplate:e.wkTemplate,{Central_Meridian:s.x}))}return this}_getCM(e){let t=null
const[r,s]=e.valid,a=this.xmin,i=this.xmax
return a>=r&&a<=s&&i>=r&&i<=s||(t=this.center),t}_normalize(e,t,r){const s=this.spatialReference
if(!s)return this
if(!(r=r||Object(y.e)(s)))return this
const a=this._getParts(r).map(e=>e.extent)
if(a.length<2)return a[0]||this
if(a.length>2)return e?this._shiftCM(r):this.set({xmin:r.valid[0],xmax:r.valid[1]})
if(e)return this._shiftCM(r)
if(t)return a
let i=!0,n=!0
return a.forEach(e=>{e.hasZ||(i=!1),e.hasM||(n=!1)}),{rings:a.map(e=>{const t=[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]
if(i){const r=(e.zmax-e.zmin)/2
for(let e=0;e<t.length;e++)t[e].push(r)}if(n){const r=(e.mmax-e.mmin)/2
for(let e=0;e<t.length;e++)t[e].push(r)}return t}),hasZ:i,hasM:n,spatialReference:s}}_getParts(e){let t=this.cache._parts
if(!t){t=[]
const{ymin:r,ymax:a,spatialReference:i}=this,n=this.width,o=this.xmin,l=this.xmax
let c
e=e||Object(y.e)(i)
const[u,h]=e.valid
c=this._normalizeX(this.xmin,e)
const d=c.x,p=c.frameId
c=this._normalizeX(this.xmax,e)
const b=c.x,m=c.frameId,f=d===b&&n>0
if(n>2*h){const e=new s(o<l?d:b,r,h,a,i),n=new s(u,r,o<l?b:d,a,i),c=new s(0,r,h,a,i),y=new s(u,r,0,a,i),f=[],g=[]
e.contains(c)&&f.push(p),e.contains(y)&&g.push(p),n.contains(c)&&f.push(m),n.contains(y)&&g.push(m)
for(let e=p+1;e<m;e++)f.push(e),g.push(e)
t.push({extent:e,frameIds:[p]},{extent:n,frameIds:[m]},{extent:c,frameIds:f},{extent:y,frameIds:g})}else d>b||f?t.push({extent:new s(d,r,h,a,i),frameIds:[p]},{extent:new s(u,r,b,a,i),frameIds:[m]}):t.push({extent:new s(d,r,b,a,i),frameIds:[p]})
this.cache._parts=t}const r=this.hasZ,a=this.hasM
if(r||a){const e={}
r&&(e.zmin=this.zmin,e.zmax=this.zmax),a&&(e.mmin=this.mmin,e.mmax=this.mmax)
for(let r=0;r<t.length;r++)t[r].extent.set(e)}return t}_normalizeX(e,t){const[r,s]=t.valid,a=2*s
let i,n=0
return e>s?(i=Math.ceil(Math.abs(e-s)/a),e-=i*a,n=i):e<r&&(i=Math.ceil(Math.abs(e-r)/a),e+=i*a,n=-i),{x:e,frameId:n}}}
Object(a.a)([Object(o.b)({readOnly:!0})],f.prototype,"cache",null),Object(a.a)([Object(o.b)({readOnly:!0})],f.prototype,"center",null),Object(a.a)([Object(o.b)({readOnly:!0})],f.prototype,"extent",null),Object(a.a)([Object(o.b)({readOnly:!0,json:{write:{enabled:!1,overridePolicy:null}}})],f.prototype,"hasM",null),Object(a.a)([Object(o.b)({readOnly:!0,json:{write:{enabled:!1,overridePolicy:null}}})],f.prototype,"hasZ",null),Object(a.a)([Object(o.b)({readOnly:!0})],f.prototype,"height",null),Object(a.a)([Object(o.b)({readOnly:!0})],f.prototype,"width",null),Object(a.a)([Object(o.b)({type:Number,json:{type:[Number,String],write:{enabled:!0,allowNull:!0}}})],f.prototype,"xmin",void 0),Object(a.a)([Object(o.b)({type:Number,json:{write:!0}})],f.prototype,"ymin",void 0),Object(a.a)([Object(o.b)({type:Number,json:{origins:{"web-scene":{write:!1}},write:{overridePolicy(){return{enabled:this.hasM}}}}})],f.prototype,"mmin",void 0),Object(a.a)([Object(o.b)({type:Number,json:{origins:{"web-scene":{write:!1}},write:{overridePolicy(){return{enabled:this.hasZ}}}}})],f.prototype,"zmin",void 0),Object(a.a)([Object(o.b)({type:Number,json:{write:!0}})],f.prototype,"xmax",void 0),Object(a.a)([Object(o.b)({type:Number,json:{write:!0}})],f.prototype,"ymax",void 0),Object(a.a)([Object(o.b)({type:Number,json:{origins:{"web-scene":{write:!1}},write:{overridePolicy(){return{enabled:this.hasM}}}}})],f.prototype,"mmax",void 0),Object(a.a)([Object(o.b)({type:Number,json:{origins:{"web-scene":{write:!1}},write:{overridePolicy(){return{enabled:this.hasZ}}}}})],f.prototype,"zmax",void 0),f=s=Object(a.a)([Object(l.a)("esri.geometry.Extent")],f),f.prototype.toJSON.isDefaultToJSON=!0
const g=f},660:function(e,t,r){"use strict"
r.r(t),r.d(t,"default",(function(){return p}))
var s=r(78),a=r(148),i=r(354),n=r(77),o=r(178),l=r(20),c=r(861),u=r(292),h=r(966),d=r(1055)
async function p(e,t){var o
const d=Object(u.w)(e),f=Object(u.v)(e)
f||d||(e=Object(u.F)(e))
const g={url:e,requestOptions:{...Object(l.t)(t)}}
let v=Object(u.n)(e)
if(v){const e=await async function(e,t){if(null!=e.responseData)return e.responseData
if(e.headers&&(t.requestOptions.headers={...t.requestOptions.headers,...e.headers}),e.query&&(t.requestOptions.query={...t.requestOptions.query,...e.query}),e.before){let r,s
try{s=await e.before(t)}catch(e){r=x("request:interceptor",e,t)}if((s instanceof Error||s instanceof i.a)&&(r=x("request:interceptor",s,t)),r)throw e.error&&e.error(r),r
return s}}(v,g)
if(null!=e)return{data:e,getHeader:O,requestOptions:g.requestOptions,url:g.url}
v.after||v.error||(v=null)}if(e=g.url,"image"===(t=g.requestOptions).responseType){if(Object(n.a)("host-webworker")||Object(n.a)("host-node"))throw x("request:invalid-parameters",new Error("responseType 'image' is not supported in Web Workers or Node environment"),g)}else if(d)throw x("request:invalid-parameters",new Error("Data URLs are not supported for responseType = "+t.responseType),g)
if("head"===t.method){if(t.body)throw x("request:invalid-parameters",new Error("body parameter cannot be set when method is 'head'"),g)
if(d||f)throw x("request:invalid-parameters",new Error("data and blob URLs are not supported for method 'head'"),g)}if(await async function(){Object(n.a)("host-webworker")?y||(y=await r.e(428).then(r.bind(null,1231))):p._abortableFetch||(p._abortableFetch=globalThis.fetch.bind(globalThis))}(),y)return y.execute(e,t)
const j=new AbortController
Object(c.q)(t,()=>j.abort())
const w={controller:j,credential:null,credentialToken:null,fetchOptions:null,hasToken:!1,interceptor:v,params:g,redoRequest:!1,useIdentity:b.useIdentity,useProxy:!1,useSSL:!1,withCredentials:!1},_=await async function(e){var t,r
let i,n
await async function(e){const t=e.params.url,r=e.params.requestOptions,i=e.controller.signal,n=r.body
let o=null,l=null,u=null
if(m&&"HTMLFormElement"in globalThis&&(n instanceof FormData?o=n:n instanceof HTMLFormElement&&(l=n,o=new FormData(l))),"string"==typeof n&&(u=n),e.fetchOptions={cache:r.cacheBust&&!p._abortableFetch.polyfill?"no-cache":"default",credentials:"same-origin",headers:r.headers||{},method:"head"===r.method?"HEAD":"GET",mode:"cors",redirect:"follow",signal:i},(o||u)&&(e.fetchOptions.body=o||u),"anonymous"===r.authMode&&(e.useIdentity=!1),e.hasToken=!!(/token=/i.test(t)||r.query&&r.query.token||o&&o.get&&o.get("token")||l&&l.elements.token),!e.hasToken&&s.default.apiKey&&Object(h.a)(t)&&(r.query||(r.query={}),r.query.token=s.default.apiKey,e.hasToken=!0),e.useIdentity&&!e.hasToken&&!e.credentialToken&&!S(t)&&!Object(c.n)(i)){let s
"immediate"===r.authMode?(await L(),s=await a.b.getCredential(t,{signal:i}),e.credential=s):"no-prompt"===r.authMode?(await L(),s=await a.b.getCredential(t,{prompt:!1,signal:i}).catch(()=>{}),e.credential=s):a.b&&(s=a.b.findCredential(t)),s&&(e.credentialToken=s.token,e.useSSL=!!s.ssl)}}(e)
try{do{[i,n]=await M(e)}while(!await T(e,i,n))}catch(t){const r=x("request:server",t,e.params,i)
throw r.details.ssl=e.useSSL,e.interceptor&&e.interceptor.error&&e.interceptor.error(r),r}const o=e.params.url
if(/\/sharing\/rest\/(accounts|portals)\/self/i.test(o)&&!e.hasToken&&!e.credentialToken&&null!=(t=n)&&null!=(r=t.user)&&r.username&&!Object(u.A)(o)){const e=Object(u.o)(o,!0)
e&&b.trustedServers.push(e)}const l=e.credential
if(l&&a.b){const e=a.b.findServerInfo(l.server)
let t=e&&e.owningSystemUrl
if(t){t=t.replace(/\/?$/,"/sharing")
const e=a.b.findCredential(t,l.userId)
e&&-1===a.b._getIdenticalSvcIdx(t,e)&&e.resources.unshift(t)}}return{data:n,getHeader:i?e=>i.headers.get(e):O,requestOptions:e.params.requestOptions,ssl:e.useSSL,url:e.params.url}}(w)
return null==(o=v)||null==o.after||o.after(_),_}let y
const b=s.default.request,m="FormData"in globalThis,f=[499,498,403,401],g=["COM_0056","COM_0057","SB_0008"],v=[/\/arcgis\/tokens/i,/\/sharing(\/rest)?\/generatetoken/i,/\/rest\/info/i],O=()=>null,j=Symbol()
function w(e){const t=Object(u.o)(e)
return!t||t.endsWith(".arcgis.com")||p._corsServers.includes(t)||Object(u.A)(t)}function x(e,t,r,s){let a="Error"
const n={url:r.url,requestOptions:r.requestOptions,getHeader:O,ssl:!1}
if(t instanceof i.a)return t.details?(t.details=Object(o.a)(t.details),t.details.url=r.url,t.details.requestOptions=r.requestOptions):t.details=n,t
if(t){const e=s&&(e=>s.headers.get(e)),r=s&&s.status,i=t.message
i&&(a=i),e&&(n.getHeader=e),n.httpStatus=(null!=t.httpCode?t.httpCode:t.code)||r||0,n.subCode=t.subcode,n.messageCode=t.messageCode,"string"==typeof t.details?n.messages=[t.details]:n.messages=t.details,n.raw=j in t?t[j]:t}return Object(c.m)(t)?Object(c.e)():new i.a(e,a,n)}async function L(){a.b||await Promise.all([r.e(3),r.e(23),r.e(29),r.e(68),r.e(490)]).then(r.bind(null,669))}function S(e){return v.some(t=>t.test(e))}async function M(e){let t=e.params.url
const r=e.params.requestOptions,s=e.fetchOptions,i=Object(u.v)(t)||Object(u.w)(t),o=r.responseType||"json",l=i?0:null!=r.timeout?r.timeout:b.timeout
let h=!1
if(!i){e.useSSL&&(t=Object(u.L)(t)),r.cacheBust&&"default"===s.cache&&(t=Object(u.d)(t,"request.preventCache",Date.now()))
let i={...r.query}
e.credentialToken&&(i.token=e.credentialToken)
let o=Object(u.G)(i)
Object(n.a)("esri-url-encodes-apostrophe")&&(o=o.replace(/'/g,"%27"))
const l=t.length+1+o.length
let c
h="delete"===r.method||"post"===r.method||"put"===r.method||!!r.body||l>b.maxUrlLength
const d=r.useProxy||!!Object(u.q)(t)
if(d){const e=Object(u.r)(t)
c=e.path,!h&&c.length+1+l>b.maxUrlLength&&(h=!0),e.query&&(i={...e.query,...i})}if("HEAD"===s.method&&(h||d)){if(h){if(l>b.maxUrlLength)throw x("request:invalid-parameters",new Error("URL exceeds maximum length"),e.params)
throw x("request:invalid-parameters",new Error("cannot use POST request when method is 'head'"),e.params)}if(d)throw x("request:invalid-parameters",new Error("cannot use proxy when method is 'head'"),e.params)}if(h?(s.method="delete"===r.method?"DELETE":"put"===r.method?"PUT":"POST",r.body?t=Object(u.e)(t,i):(s.body=Object(u.G)(i),s.headers["Content-Type"]="application/x-www-form-urlencoded")):t=Object(u.e)(t,i),d&&(e.useProxy=!0,t=`${c}?${t}`),i.token&&m&&s.body instanceof FormData){const e=s.body
e.set?e.set("token",i.token):e.append("token",i.token)}if(r.hasOwnProperty("withCredentials"))e.withCredentials=r.withCredentials
else if(!Object(u.s)(t,Object(u.l)()))if(Object(u.A)(t))e.withCredentials=!0
else if(a.b){const r=a.b.findServerInfo(t)
r&&r.webTierAuth&&(e.withCredentials=!0)}e.withCredentials&&(s.credentials="include")}let d,y,f=0,g=!1
l>0&&(f=setTimeout(()=>{g=!0,e.controller.abort()},l))
try{if("native-request-init"===r.responseType)y=s,y.url=t
else if("image"!==r.responseType||"default"!==s.cache||"GET"!==s.method||h||function(e){if(e)for(const t of Object.getOwnPropertyNames(e))if(e[t])return!0
return!1}(r.headers)||!i&&!e.useProxy&&b.proxyUrl&&!w(t)){if(d=await p._abortableFetch(t,s),e.useProxy||function(e){const t=Object(u.o)(e)
t&&!p._corsServers.includes(t)&&p._corsServers.push(t)}(t),"native"===r.responseType)y=d
else if("HEAD"!==s.method)if(d.ok){switch(o){case"array-buffer":y=await d.arrayBuffer()
break
case"blob":case"image":y=await d.blob()
break
default:y=await d.text()}if(f&&(clearTimeout(f),f=0),"json"===o||"xml"===o||"document"===o)if(y)switch(o){case"json":y=JSON.parse(y)
break
case"xml":y=_(y,"application/xml")
break
case"document":y=_(y,"text/html")}else y=null
if(y){if("array-buffer"===o||"blob"===o){const e=d.headers.get("Content-Type")
if(/application\/json|text\/plain/i.test(e)&&y["blob"===o?"size":"byteLength"]<=750)try{const e=await new Response(y).json()
e.error&&(y=e)}catch{}}"image"===o&&y instanceof Blob&&(y=await I(URL.createObjectURL(y),e,!0))}}else y=await d.text()}else y=await I(t,e)}catch(s){if("AbortError"===s.name){if(g)throw new Error("Timeout exceeded")
throw Object(c.e)("Request canceled")}if(!(!d&&s instanceof TypeError&&b.proxyUrl)||r.body||"delete"===r.method||"head"===r.method||"post"===r.method||"put"===r.method||e.useProxy||w(t))throw s
e.redoRequest=!0,Object(u.c)({proxyUrl:b.proxyUrl,urlPrefix:Object(u.o)(t)})}finally{f&&clearTimeout(f)}return[d,y]}function _(e,t){let r
try{r=(new DOMParser).parseFromString(e,t)}catch{}if(!r||r.getElementsByTagName("parsererror").length)throw new SyntaxError("XML Parse error")
return r}async function T(e,t,r){if(e.redoRequest)return e.redoRequest=!1,!1
const s=e.params.requestOptions
if(!t||"native"===s.responseType||"native-request-init"===s.responseType)return!0
let i,n,o,l
if(!t.ok)throw i=new Error(`Unable to load ${t.url} status: ${t.status}`),i[j]=r,i
null!=r&&r.error&&(i=r.error),i&&(n=Number(i.code),o=i.hasOwnProperty("subcode")?Number(i.subcode):null,l=i.messageCode,l=l&&l.toUpperCase())
const c=s.authMode
if(403===n&&(4===o||i.message&&i.message.toLowerCase().indexOf("ssl")>-1&&-1===i.message.toLowerCase().indexOf("permission"))){if(!e.useSSL)return e.useSSL=!0,!1}else if(!e.hasToken&&e.useIdentity&&("no-prompt"!==c||498===n)&&-1!==f.indexOf(n)&&!S(e.params.url)&&(403!==n||-1===g.indexOf(l)&&(null==o||2===o&&e.credentialToken))){await L()
try{const t=await a.b.getCredential(e.params.url,{error:x("request:server",i,e.params),prompt:"no-prompt"!==c,signal:e.controller.signal,token:e.credentialToken})
return e.credential=t,e.credentialToken=t.token,e.useSSL=e.useSSL||t.ssl,!1}catch(t){if("no-prompt"===c)return e.credential=null,e.credentialToken=null,!1
i=t}}if(i)throw i
return!0}function I(e,t,r=!1){const s=t.controller.signal,a=new Image
return t.withCredentials?a.crossOrigin="use-credentials":a.crossOrigin="anonymous",a.alt="",a.src=e,Object(d.a)(a,e,r,s)}p._abortableFetch=null,p._corsServers=["https://server.arcgisonline.com","https://services.arcgisonline.com"]},662:function(e,t,r){"use strict"
r.r(t),r.d(t,"canProject",(function(){return b})),r.d(t,"geographicToWebMercator",(function(){return v})),r.d(t,"lngLatToXY",(function(){return f})),r.d(t,"project",(function(){return m})),r.d(t,"webMercatorToGeographic",(function(){return O})),r.d(t,"x2lon",(function(){return u})),r.d(t,"xyToLngLat",(function(){return g})),r.d(t,"y2lat",(function(){return h}))
var s=r(178),a=r(20),i=r(659),n=r(902),o=r(872)
function l(e){return 57.29577951308232*e}function c(e){return.017453292519943*e}function u(e){return e/n.a.radius}function h(e){return Math.PI/2-2*Math.atan(Math.exp(-e/n.a.radius))}function d(e){return null!=e.wkid||null!=e.wkt}const p=[0,0]
function y(e,t,r,s,a){const i=e,n=a
if(n.spatialReference=r,"x"in i&&"x"in n)[n.x,n.y]=t(i.x,i.y,p,s)
else if("xmin"in i&&"xmin"in n)[n.xmin,n.ymin]=t(i.xmin,i.ymin,p,s),[n.xmax,n.ymax]=t(i.xmax,i.ymax,p,s)
else if("paths"in i&&"paths"in n||"rings"in i&&"rings"in n){const e="paths"in i?i.paths:i.rings,r=[]
let a
for(let i=0;i<e.length;i++){const n=e[i]
a=[],r.push(a)
for(let e=0;e<n.length;e++)a.push(t(n[e][0],n[e][1],[0,0],s)),n[e].length>2&&a[e].push(n[e][2]),n[e].length>3&&a[e].push(n[e][3])}"paths"in n?n.paths=r:n.rings=r}else if("points"in i&&"points"in n){const e=i.points,r=[]
for(let a=0;a<e.length;a++)r[a]=t(e[a][0],e[a][1],[0,0],s),e[a].length>2&&r[a].push(e[a][2]),e[a].length>3&&r[a].push(e[a][3])
n.points=r}return a}function b(e,t){const r=e&&(d(e)?e:e.spatialReference),s=t&&(d(t)?t:t.spatialReference)
return!(e&&"type"in e&&"mesh"===e.type||t&&"type"in t&&"mesh"===t.type||!r||!s)&&(!!Object(o.d)(s,r)||Object(o.p)(s)&&Object(o.m)(r)||Object(o.p)(r)&&Object(o.m)(s))}function m(e,t){if(Object(a.j)(e))return null
const r=e.spatialReference,n=t&&(d(t)?t:t.spatialReference)
return b(r,n)?Object(o.d)(r,n)?Object(s.a)(e):Object(o.p)(n)?y(e,f,i.default.WebMercator,!1,Object(s.a)(e)):Object(o.m)(n)?y(e,g,i.default.WGS84,!1,Object(s.a)(e)):null:null}function f(e,t,r=[0,0]){t>89.99999?t=89.99999:t<-89.99999&&(t=-89.99999)
const s=c(t)
return r[0]=c(e)*n.a.radius,r[1]=n.a.halfSemiMajorAxis*Math.log((1+Math.sin(s))/(1-Math.sin(s))),r}function g(e,t,r=[0,0],s=!1){const a=l(e/n.a.radius)
return r[0]=s?a:a-360*Math.floor((a+180)/360),r[1]=l(Math.PI/2-2*Math.atan(Math.exp(-t/n.a.radius))),r}function v(e,t=!1,r=Object(s.a)(e)){return y(e,f,i.default.WebMercator,t,r)}function O(e,t=!1,r=Object(s.a)(e)){return y(e,g,i.default.WGS84,t,r)}},664:function(e,t,r){"use strict"
r.r(t),r.d(t,"default",(function(){return O}))
var s=r(856),a=r(78),i=(r(870),r(660)),n=r(354),o=r(890),l=r(1010),c=r(903),u=r(177),h=r(861),d=r(292),p=r(858),y=(r(353),r(77),r(859),r(857)),b=r(658),m=r(659)
let f=0
const g=u.a.getLogger("esri.layers.Layer")
let v=class extends(o.a.EventedMixin(Object(l.b)(c.a))){constructor(){super(...arguments),this.attributionDataUrl=null,this.fullExtent=new b.default(-180,-90,180,90,m.default.WGS84),this.id=Date.now().toString(16)+"-layer-"+f++,this.legendEnabled=!0,this.listMode="show",this.opacity=1,this.parent=null,this.popupEnabled=!0,this.attributionVisible=!0,this.spatialReference=m.default.WGS84,this.title=null,this.type=null,this.url=null,this.visible=!0}static async fromArcGISServerUrl(e){const t="string"==typeof e?{url:e}:e,s=await r.e(294).then(r.bind(null,1188))
try{return await s.fromUrl(t)}catch(e){throw g.error("#fromArcGISServerUrl({ url: '"+t.url+"'})","Failed to create layer from arcgis server url",e),e}}static async fromPortalItem(e){const t="portalItem"in e?e:{portalItem:e},s=await r.e(191).then(r.bind(null,1164))
try{return await s.fromItem(t)}catch(e){const r=t&&t.portalItem,s=r&&r.id||"unset",i=r&&r.portal&&r.portal.url||a.default.portalUrl
throw g.error("#fromPortalItem()","Failed to create layer from portal item (portal: '"+i+"', id: '"+s+"')",e),e}}initialize(){this.when().catch(e=>{var t,r
Object(h.m)(e)||u.a.getLogger(this.declaredClass).error("#load()",`Failed to load layer (title: '${null!=(t=this.title)?t:"no title"}', id: '${null!=(r=this.id)?r:"no id"}')`,{error:e})})}destroy(){if(this.parent){const e=this,t=this.parent
"layers"in t&&t.layers.includes(e)?t.layers.remove(e):"tables"in t&&t.tables.includes(e)?t.tables.remove(e):"baseLayers"in t&&t.baseLayers.includes(e)?t.baseLayers.remove(e):"baseLayers"in t&&t.referenceLayers.includes(e)&&t.referenceLayers.remove(e)}}get hasAttributionData(){return null!=this.attributionDataUrl}get parsedUrl(){const e=this.url
return e?Object(d.M)(e):null}async fetchAttributionData(){const e=this.attributionDataUrl
if(this.hasAttributionData&&e)return(await Object(i.default)(e,{query:{f:"json"},responseType:"json"})).data
throw new n.a("layer:no-attribution-data","Layer does not have attribution data")}}
Object(s.a)([Object(p.b)({type:String})],v.prototype,"attributionDataUrl",void 0),Object(s.a)([Object(p.b)({type:b.default})],v.prototype,"fullExtent",void 0),Object(s.a)([Object(p.b)({readOnly:!0})],v.prototype,"hasAttributionData",null),Object(s.a)([Object(p.b)({type:String,clonable:!1})],v.prototype,"id",void 0),Object(s.a)([Object(p.b)({type:Boolean,nonNullable:!0})],v.prototype,"legendEnabled",void 0),Object(s.a)([Object(p.b)({type:["show","hide","hide-children"]})],v.prototype,"listMode",void 0),Object(s.a)([Object(p.b)({type:Number,range:{min:0,max:1},nonNullable:!0})],v.prototype,"opacity",void 0),Object(s.a)([Object(p.b)({clonable:!1})],v.prototype,"parent",void 0),Object(s.a)([Object(p.b)({readOnly:!0})],v.prototype,"parsedUrl",null),Object(s.a)([Object(p.b)({type:Boolean})],v.prototype,"popupEnabled",void 0),Object(s.a)([Object(p.b)({type:Boolean})],v.prototype,"attributionVisible",void 0),Object(s.a)([Object(p.b)({type:m.default})],v.prototype,"spatialReference",void 0),Object(s.a)([Object(p.b)({type:String})],v.prototype,"title",void 0),Object(s.a)([Object(p.b)({type:String,readOnly:!0,json:{read:!1}})],v.prototype,"type",void 0),Object(s.a)([Object(p.b)()],v.prototype,"url",void 0),Object(s.a)([Object(p.b)({type:Boolean,nonNullable:!0})],v.prototype,"visible",void 0),v=Object(s.a)([Object(y.a)("esri.layers.Layer")],v)
const O=v},670:function(e,t,r){"use strict"
r.r(t),r.d(t,"esriBasemapDefinitions",(function(){return n})),r.d(t,"getBasemapTitle",(function(){return i}))
var s=r(897),a=r(900)
async function i(e){if(!e)return
const t=e.indexOf("-vector")>-1?e.slice(0,e.indexOf("-vector")):e,r=await Object(a.a)("esri/t9n/basemaps")
return r[e]||r[t]}const n={streets:{id:"streets",classic:!0,deprecated:!0,get thumbnailUrl(){return Object(s.b)("esri/images/basemap/streets.jpg")},baseMapLayers:[{id:"streets-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Street Map",showLegend:!1,visibility:!0,opacity:1}]},satellite:{id:"satellite",classic:!0,get thumbnailUrl(){return Object(s.b)("esri/images/basemap/satellite.jpg")},baseMapLayers:[{id:"satellite-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Imagery",showLegend:!1,visibility:!0,opacity:1}]},hybrid:{id:"hybrid",classic:!0,get thumbnailUrl(){return Object(s.b)("esri/images/basemap/hybrid.jpg")},baseMapLayers:[{id:"hybrid-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Imagery",showLegend:!1,visibility:!0,opacity:1},{id:"hybrid-reference-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Boundaries and Places",isReference:!0,showLegend:!1,visibility:!0,opacity:1}]},terrain:{id:"terrain",classic:!0,get thumbnailUrl(){return Object(s.b)("esri/images/basemap/terrain.jpg")},baseMapLayers:[{id:"terrain-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Terrain Base",showLegend:!1,visibility:!0,opacity:1},{id:"terrain-reference-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Reference_Overlay/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Reference Overlay",isReference:!0,showLegend:!1,visibility:!0,opacity:1}]},topo:{id:"topo",classic:!0,deprecated:!0,get thumbnailUrl(){return Object(s.b)("esri/images/basemap/topo.jpg")},baseMapLayers:[{id:"topo-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Topo Map",showLegend:!1,visibility:!0,opacity:1}]},gray:{id:"gray",classic:!0,deprecated:!0,get thumbnailUrl(){return Object(s.b)("esri/images/basemap/gray.jpg")},baseMapLayers:[{id:"gray-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Light Gray Base",showLegend:!1,visibility:!0,opacity:1},{id:"gray-reference-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Light Gray Reference",isReference:!0,showLegend:!1,visibility:!0,opacity:1}]},"dark-gray":{id:"dark-gray",classic:!0,deprecated:!0,get thumbnailUrl(){return Object(s.b)("esri/images/basemap/dark-gray.jpg")},baseMapLayers:[{id:"dark-gray-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Dark Gray Base",showLegend:!1,visibility:!0,opacity:1},{id:"dark-gray-reference-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Dark Gray Reference",isReference:!0,showLegend:!1,visibility:!0,opacity:1}]},oceans:{id:"oceans",classic:!0,get thumbnailUrl(){return Object(s.b)("esri/images/basemap/oceans.jpg")},baseMapLayers:[{id:"oceans-base-layer",url:"//services.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Base/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Ocean Base",showLegend:!1,visibility:!0,opacity:1},{id:"oceans-reference-layer",url:"//services.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Reference/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Ocean Reference",isReference:!0,showLegend:!1,visibility:!0,opacity:1}]},"national-geographic":{id:"national-geographic",classic:!0,deprecated:!0,get thumbnailUrl(){return Object(s.b)("esri/images/basemap/national-geographic.jpg")},baseMapLayers:[{id:"national-geographic-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer",title:"NatGeo World Map",showLegend:!1,layerType:"ArcGISTiledMapServiceLayer",visibility:!0,opacity:1}]},osm:{id:"osm",classic:!0,get thumbnailUrl(){return Object(s.b)("esri/images/basemap/osm.jpg")},baseMapLayers:[{id:"osm-base-layer",layerType:"OpenStreetMap",title:"Open Street Map",showLegend:!1,visibility:!0,opacity:1}]},"dark-gray-vector":{id:"dark-gray-vector",classic:!0,get thumbnailUrl(){return Object(s.b)("esri/images/basemap/dark-gray-vector.jpg")},baseMapLayers:[{id:"dark-gray-base-layer",styleUrl:"https://cdn.arcgis.com/sharing/rest/content/items/5e9b3685f4c24d8781073dd928ebda50/resources/styles/root.json",layerType:"VectorTileLayer",title:"Dark Gray Base",visibility:!0,opacity:1},{id:"dark-gray-reference-layer",styleUrl:"https://cdn.arcgis.com/sharing/rest/content/items/747cb7a5329c478cbe6981076cc879c5/resources/styles/root.json",layerType:"VectorTileLayer",title:"Dark Gray Reference",isReference:!0,visibility:!0,opacity:1}]},"gray-vector":{id:"gray-vector",classic:!0,get thumbnailUrl(){return Object(s.b)("esri/images/basemap/gray-vector.jpg")},baseMapLayers:[{id:"gray-base-layer",styleUrl:"https://cdn.arcgis.com/sharing/rest/content/items/291da5eab3a0412593b66d384379f89f/resources/styles/root.json",layerType:"VectorTileLayer",title:"Light Gray Base",visibility:!0,opacity:1},{id:"gray-reference-layer",styleUrl:"https://cdn.arcgis.com/sharing/rest/content/items/1768e8369a214dfab4e2167d5c5f2454/resources/styles/root.json",layerType:"VectorTileLayer",title:"Light Gray Reference",isReference:!0,visibility:!0,opacity:1}]},"streets-vector":{id:"streets-vector",classic:!0,get thumbnailUrl(){return Object(s.b)("esri/images/basemap/streets-vector.jpg")},baseMapLayers:[{id:"streets-vector-base-layer",styleUrl:"//cdn.arcgis.com/sharing/rest/content/items/de26a3cf4cc9451298ea173c4b324736/resources/styles/root.json",layerType:"VectorTileLayer",title:"World Streets",visibility:!0,opacity:1}]},"topo-vector":{id:"topo-vector",classic:!0,get thumbnailUrl(){return Object(s.b)("esri/images/basemap/topo-vector.jpg")},baseMapLayers:[{id:"world-hillshade-layer",url:"//services.arcgisonline.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Hillshade",showLegend:!1,visibility:!0,opacity:1},{id:"topo-vector-base-layer",styleUrl:"//cdn.arcgis.com/sharing/rest/content/items/7dc6cea0b1764a1f9af2e679f642f0f5/resources/styles/root.json",layerType:"VectorTileLayer",title:"World Topo",visibility:!0,opacity:1}]},"streets-night-vector":{id:"streets-night-vector",classic:!0,get thumbnailUrl(){return Object(s.b)("esri/images/basemap/streets-night.jpg")},baseMapLayers:[{id:"streets-night-vector-base-layer",styleUrl:"//cdn.arcgis.com/sharing/rest/content/items/86f556a2d1fd468181855a35e344567f/resources/styles/root.json",layerType:"VectorTileLayer",title:"World Streets Night",visibility:!0,opacity:1}]},"streets-relief-vector":{id:"streets-relief-vector",classic:!0,get thumbnailUrl(){return Object(s.b)("esri/images/basemap/streets-relief.jpg")},baseMapLayers:[{id:"world-hillshade-layer",url:"//services.arcgisonline.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Hillshade",showLegend:!1,visibility:!0,opacity:1},{id:"streets-relief-vector-base-layer",styleUrl:"//www.arcgis.com/sharing/rest/content/items/b266e6d17fc345b498345613930fbd76/resources/styles/root.json",title:"World Streets Relief",layerType:"VectorTileLayer",visibility:!0,opacity:1}]},"streets-navigation-vector":{id:"streets-navigation-vector",classic:!0,get thumbnailUrl(){return Object(s.b)("esri/images/basemap/streets-navigation.jpg")},baseMapLayers:[{id:"streets-navigation-vector-base-layer",styleUrl:"//cdn.arcgis.com/sharing/rest/content/items/63c47b7177f946b49902c24129b87252/resources/styles/root.json",layerType:"VectorTileLayer",title:"World Streets Navigation",visibility:!0,opacity:1}]},"arcgis-imagery":{get thumbnailUrl(){return Object(s.b)("esri/images/basemap/hybrid.jpg")},title:"Imagery Hybrid",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Imagery",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/World_Imagery/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Imagery:Labels",title:"Hybrid Reference Layer",isReference:!0}]},"arcgis-imagery-standard":{get thumbnailUrl(){return Object(s.b)("esri/images/basemap/satellite.jpg")},title:"Imagery",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Imagery",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/World_Imagery/MapServer"}]},"arcgis-imagery-labels":{title:"Hybrid [Reference]",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Imagery:Labels",title:"Hybrid Reference Layer",isReference:!0}]},"arcgis-light-gray":{get thumbnailUrl(){return Object(s.b)("esri/images/basemap/gray-vector.jpg")},title:"Light Gray Canvas",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:LightGray:Base",title:"Light Gray Canvas Base"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:LightGray:Labels",title:"Light Gray Canvas Labels",isReference:!0}]},"arcgis-dark-gray":{get thumbnailUrl(){return Object(s.b)("esri/images/basemap/dark-gray.jpg")},title:"Dark Gray Canvas",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:DarkGray:Base",title:"Dark Gray Canvas Base"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:DarkGray:Labels",title:"Dark Gray Canvas Labels",isReference:!0}]},"arcgis-navigation":{get thumbnailUrl(){return Object(s.b)("esri/images/basemap/streets-navigation.jpg")},title:"Navigation",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Navigation",title:"World Navigation Map"}]},"arcgis-navigation-night":{title:"Navigation (Dark Mode)",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:NavigationNight",title:"World Navigation Map (Dark Mode)"}]},"arcgis-streets":{get thumbnailUrl(){return Object(s.b)("esri/images/basemap/streets-vector.jpg")},title:"Streets",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Streets",title:"World Street Map"}]},"arcgis-streets-night":{get thumbnailUrl(){return Object(s.b)("esri/images/basemap/streets-night.jpg")},title:"Streets (Night)",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:StreetsNight",title:"World Street Map (Night)"}]},"arcgis-streets-relief":{get thumbnailUrl(){return Object(s.b)("esri/images/basemap/streets-relief.jpg")},title:"Streets (with Relief)",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:StreetsRelief:Base",title:"World Street Map (with Relief)"}]},"arcgis-topographic":{get thumbnailUrl(){return Object(s.b)("esri/images/basemap/topo.jpg")},title:"Topographic",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Topographic:Base",title:"World Topographic Map"}]},"arcgis-oceans":{get thumbnailUrl(){return Object(s.b)("esri/images/basemap/oceans.jpg")},title:"Oceans",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Ocean Base",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Ocean/World_Ocean_Base/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Oceans:Labels",title:"World Ocean Reference",isReference:!0}]},"osm-standard":{title:"OpenStreetMap",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:Standard",title:"OpenStreetMap"}]},"osm-standard-relief":{title:"OpenStreetMap (with relief)",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:StandardRelief:Base",layerType:"VectorTileLayer",title:"OpenStreetMap Relief Base"}]},"osm-streets":{title:"OpenStreetMap (Streets)",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:Streets",title:"OpenStreetMap (Streets)"}]},"osm-streets-relief":{title:"OpenStreetMap (Streets with relief)",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:StreetsRelief:Base",layerType:"VectorTileLayer",title:"OpenStreetMap Relief Base"}]},"osm-light-gray":{title:"OpenStreetMap (Light Gray Canvas)",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:LightGray:Base",title:"OSM (Light Gray Base)"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:LightGray:Labels",title:"OSM (Light Gray Reference)",isReference:!0}]},"osm-dark-gray":{title:"OpenStreetMap (Dark Gray Canvas)",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:DarkGray:Base",title:"OSM (Dark Gray Base)"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:DarkGray:Labels",title:"OSM (Dark Gray Reference)",isReference:!0}]},"arcgis-terrain":{title:"Terrain with Labels",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Terrain:Base",title:"World Terrain Base"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Terrain:Detail",title:"World Terrain Reference",isReference:!0}]},"arcgis-community":{title:"Community",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Community",title:"Community"}]},"arcgis-charted-territory":{title:"Charted Territory",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:ChartedTerritory:Base",title:"Charted Territory"}]},"arcgis-colored-pencil":{title:"Colored Pencil",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:ColoredPencil",title:"Colored Pencil"}]},"arcgis-nova":{title:"Nova",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Nova",title:"Nova"}]},"arcgis-modern-antique":{title:"Modern Antique",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:ModernAntique:Base",title:"Modern Antique"}]},"arcgis-midcentury":{title:"Mid-Century",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Midcentury",title:"Mid-Century"}]},"arcgis-newspaper":{title:"Newspaper",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Newspaper",title:"Newspaper"}]},"arcgis-hillshade-light":{title:"Hillshade",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"}]},"arcgis-hillshade-dark":{title:"Hillshade (Dark)",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade (Dark)",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade_Dark/MapServer"}]}}},671:function(e,t,r){"use strict"
r.r(t),r.d(t,"default",(function(){return _}))
var s,a=r(856),i=r(878),n=r(1072),o=r(996),l=r(860),c=r(178),u=r(903),h=r(1193),d=r(177),p=r(20),y=r(861),b=r(292),m=r(858),f=(r(859),r(857)),g=r(864),v=r(659),O=r(914),j=r(1006),w=r(670),x=r(1414)
let L=0
const S=d.a.getLogger("esri.Basemap")
let M=s=class extends(Object(l.b)(u.a)){constructor(e){super(e),this.id=null,this.portalItem=null,this.spatialReference=null,this.thumbnailUrl=null,this.title="Basemap",this.id=Date.now().toString(16)+"-basemap-"+L++,this.baseLayers=new i.a,this.referenceLayers=new i.a
const t=e=>{e.parent&&e.parent!==this&&"remove"in e.parent&&e.parent.remove(e),e.parent=this,"elevation"===e.type&&S.error(`Layer '${e.title}, id:${e.id}' of type '${e.type}' is not supported as a basemap layer and will therefore be ignored.`)},r=e=>{e.parent=null}
this.baseLayers.on("after-add",e=>t(e.item)),this.referenceLayers.on("after-add",e=>t(e.item)),this.baseLayers.on("after-remove",e=>r(e.item)),this.referenceLayers.on("after-remove",e=>r(e.item))}initialize(){this.when().catch(e=>{S.error("#load()",`Failed to load basemap (title: '${this.title}', id: '${this.id}')`,e)}),this.resourceInfo&&this.read(this.resourceInfo.data,this.resourceInfo.context)}destroy(){var e
const t=this.baseLayers.removeAll()
for(const e of t)e.destroy()
const r=this.referenceLayers.removeAll()
for(const e of r)e.destroy()
this.baseLayers.destroy(),this.referenceLayers.destroy(),null==(e=this.portalItem)||e.destroy(),this.portalItem=null}normalizeCtorArgs(e){return e&&"resourceInfo"in e&&(this._set("resourceInfo",e.resourceInfo),delete(e={...e}).resourceInfo),e}set baseLayers(e){this._set("baseLayers",Object(n.b)(e,this._get("baseLayers")))}_writeBaseLayers(e,t,r){const s=[]
e?(r={...r,layerContainerType:"basemap"},this.baseLayers.forEach(e=>{const t=Object(x.a)(e,r.webmap?r.webmap.getLayerJSONFromResourceInfo(e):null,r)
Object(p.k)(t)&&s.push(t)}),this.referenceLayers.forEach(e=>{const t=Object(x.a)(e,r.webmap?r.webmap.getLayerJSONFromResourceInfo(e):null,r)
Object(p.k)(t)&&(t.isReference=!0,s.push(t))}),t.baseMapLayers=s):t.baseMapLayers=s}set referenceLayers(e){this._set("referenceLayers",Object(n.b)(e,this._get("referenceLayers")))}writeTitle(e,t){t.title=e||"Basemap"}load(e){return this.addResolvingPromise(this._loadFromSource(e)),Promise.resolve(this)}loadAll(){return Object(h.a)(this,e=>{e(this.baseLayers,this.referenceLayers)})}clone(){const e={id:this.id,title:this.title,portalItem:this.portalItem,baseLayers:this.baseLayers.slice(),referenceLayers:this.referenceLayers.slice()}
return this.loaded&&(e.loadStatus="loaded"),new s({resourceInfo:this.resourceInfo}).set(e)}read(e,t){this.resourceInfo||this._set("resourceInfo",{data:e,context:t}),super.read(e,t)}write(e,t){return e=e||{},t&&t.origin||(t={origin:"web-map",...t}),super.write(e,t),!this.loaded&&this.resourceInfo&&this.resourceInfo.data.baseMapLayers&&(e.baseMapLayers=this.resourceInfo.data.baseMapLayers.map(e=>{const t=Object(c.a)(e)
return t.url&&Object(b.y)(t.url)&&(t.url="https:"+t.url),t.templateUrl&&Object(b.y)(t.templateUrl)&&(t.templateUrl="https:"+t.templateUrl),t})),e}async _loadFromSource(e){const{resourceInfo:t,portalItem:r}=this
Object(y.v)(e)
const s=[]
if(t){const r=t.context?t.context.url:null
if(s.push(this._loadLayersFromJSON(t.data,r,e)),t.data.id&&!t.data.title){const e=t.data.id
s.push(Object(w.getBasemapTitle)(e).then(e=>{e&&this.read({title:e},t.context)}))}}else r&&s.push(this._loadFromItem(r,e))
await Promise.all(s)}async _loadLayersFromJSON(e,t,s){const a=this.resourceInfo&&this.resourceInfo.context,i=this.portalItem&&this.portalItem.portal||a&&a.portal||null,n=a&&"web-scene"===a.origin?"web-scene":"web-map",{populateOperationalLayers:o}=await r.e(47).then(r.bind(null,1643)),l=[]
if(Object(y.v)(s),e.baseMapLayers&&Array.isArray(e.baseMapLayers)){const r={context:{origin:n,url:t,portal:i,layerContainerType:"basemap"},defaultLayerType:"DefaultTileLayer"},s=o(this.baseLayers,e.baseMapLayers.filter(e=>!e.isReference),r)
l.push(s)
const a=o(this.referenceLayers,e.baseMapLayers.filter(e=>e.isReference),r)
l.push(a)}await Object(y.j)(l)}async _loadFromItem(e,t){const r=await e.load(t),s=await r.fetchData("json",t),a=Object(b.M)(e.itemUrl)
return this._set("resourceInfo",{data:s.baseMap,context:{origin:"web-map",portal:e.portal||O.a.getDefault(),url:a}}),this.read(this.resourceInfo.data,this.resourceInfo.context),this.read({spatialReference:s.spatialReference},this.resourceInfo.context),this.read({title:e.title,thumbnailUrl:e.thumbnailUrl},{origin:"portal-item",portal:e.portal||O.a.getDefault(),url:a}),this._loadLayersFromJSON(this.resourceInfo.data,a,t)}static fromId(e){const t=w.esriBasemapDefinitions[e]
if(t){if(t.deprecated){let t=null
"dark-gray"===e?t="dark-gray-vector":"gray"===e?t="gray-vector":"streets"===e?t="streets-vector":"topo"===e&&(t="topo-vector"),Object(o.a)(S,`The ${e} basemap has entered mature support and is no longer being updated.`,{replacement:t,see:"https://arcg.is/1iq8aD",warnOnce:!0})}return s.fromJSON(t)}return null}}
Object(a.a)([Object(m.b)({json:{write:{ignoreOrigin:!0,target:"baseMapLayers",writer(e,t,r,s){this._writeBaseLayers(e,t,s)}},origins:{"web-scene":{write:{ignoreOrigin:!0,target:{baseMapLayers:{type:i.a}},writer(e,t,r,s){this._writeBaseLayers(e,t,s)}}}}}})],M.prototype,"baseLayers",null),Object(a.a)([Object(m.b)({type:String,json:{origins:{"web-scene":{write:!0}}}})],M.prototype,"id",void 0),Object(a.a)([Object(m.b)({type:j.default})],M.prototype,"portalItem",void 0),Object(a.a)([Object(m.b)()],M.prototype,"referenceLayers",null),Object(a.a)([Object(m.b)({readOnly:!0})],M.prototype,"resourceInfo",void 0),Object(a.a)([Object(m.b)({type:v.default})],M.prototype,"spatialReference",void 0),Object(a.a)([Object(m.b)()],M.prototype,"thumbnailUrl",void 0),Object(a.a)([Object(m.b)({type:String,json:{origins:{"web-scene":{write:{isRequired:!0}}}}})],M.prototype,"title",void 0),Object(a.a)([Object(g.a)("title")],M.prototype,"writeTitle",null),M=s=Object(a.a)([Object(f.a)("esri.Basemap")],M)
const _=M},674:function(e,t,r){"use strict"
r.r(t),r.d(t,"default",(function(){return w}))
var s=r(856),a=r(671),i=r(1428),n=r(862),o=r(1184),l=r(890),c=r(20),u=r(858),h=(r(353),r(77),r(880)),d=r(857)
function p(e){var t
return!(!(e&&e.loaded&&"capabilities"in e&&null!=e&&null!=(t=e.capabilities)&&t.operations&&"supportsEditing"in e.capabilities.operations&&!0===e.capabilities.operations.supportsEditing)||"editingEnabled"in e&&!e.editingEnabled)}var y=r(1430),b=r(177),m=r(859)
const f=b.a.getLogger("esri.support.groundUtils"),g={"world-elevation":{id:"worldElevation",url:"//elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer",layerType:"ArcGISTiledElevationServiceLayer"},"world-topobathymetry":{id:"worldTopoBathymetry",url:"//elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/TopoBathy3D/ImageServer",layerType:"ArcGISTiledElevationServiceLayer"}}
var v=r(1563),O=r(1564)
let j=class extends(Object(O.a)(Object(v.a)(l.a.EventedMixin(n.a)))){constructor(e){super(e),this.allLayers=new o.a({getCollections:()=>{var e,t,r
return[null==(e=this.basemap)?void 0:e.baseLayers,null==(t=this.ground)?void 0:t.layers,this.layers,null==(r=this.basemap)?void 0:r.referenceLayers]},getChildrenFunction:e=>"layers"in e?e.layers:null}),this.allTables=new o.a({getCollections:()=>[this.tables,this.layers],getChildrenFunction:e=>{const t=[]
return"tables"in e&&t.push(e.tables),"layers"in e&&t.push(e.layers),t},itemFilterFunction:e=>{const t=e.parent
return t&&"tables"in t&&t.tables.includes(e)}}),this.basemap=null,this.editableLayers=new o.a({getCollections:()=>[this.allLayers],itemFilterFunction:p}),this.ground=new i.a,this._basemapCache=Object(y.b)()}destroy(){var e,t
this.allLayers.destroy(),this.allTables.destroy(),this.editableLayers.destroy(),null==(e=this.ground)||e.destroy(),null==(t=this.basemap)||t.destroy(),Object(y.c)(this._basemapCache),this._basemapCache=null}castBasemap(e){return Object(y.d)(e,this._basemapCache)}castGround(e){const t=function(e){let t=null
if("string"==typeof e)if(e in g){const r=g[e]
t=new i.a({resourceInfo:{data:{layers:[r]}}})}else f.warn(`Unable to find ground definition for: ${e}. Try "world-elevation"`)
else t=Object(m.m)(i.a,e)
return t}(e)
return Object(c.j)(t)?this._get("ground"):t}findLayerById(e){return this.allLayers.find(t=>t.id===e)}findTableById(e){return this.allTables.find(t=>t.id===e)}}
Object(s.a)([Object(u.b)({readOnly:!0,dependsOn:[]})],j.prototype,"allLayers",void 0),Object(s.a)([Object(u.b)({readOnly:!0})],j.prototype,"allTables",void 0),Object(s.a)([Object(u.b)({type:a.default})],j.prototype,"basemap",void 0),Object(s.a)([Object(h.a)("basemap")],j.prototype,"castBasemap",null),Object(s.a)([Object(u.b)({readOnly:!0})],j.prototype,"editableLayers",void 0),Object(s.a)([Object(u.b)({type:i.a,nonNullable:!0})],j.prototype,"ground",void 0),Object(s.a)([Object(h.a)("ground")],j.prototype,"castGround",null),j=Object(s.a)([Object(d.a)("esri.Map")],j)
const w=j},863:function(e,t,r){"use strict"
r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return i}))
var s=r(109)
class a{constructor(e,t={ignoreUnknown:!1,useNumericKeys:!1}){this.jsonToAPI=e,this.options=t,this.apiValues=[],this.jsonValues=[],this.apiToJSON=this._invertMap(e),this.apiValues=this._getKeysSorted(this.apiToJSON),this.jsonValues=this._getKeysSorted(this.jsonToAPI),this.read=e=>this.fromJSON(e),this.write=(e,t,r)=>{const a=this.toJSON(e)
void 0!==a&&Object(s.c)(r,a,t)},this.write.isJSONMapWriter=!0}toJSON(e){if(this.apiToJSON.hasOwnProperty(e)){const t=this.apiToJSON[e]
return this.options.useNumericKeys?+t:t}return this.options.ignoreUnknown?void 0:e}fromJSON(e){return this.jsonToAPI.hasOwnProperty(e)?this.jsonToAPI[e]:this.options.ignoreUnknown?void 0:e}_invertMap(e){const t={}
for(const r in e)t[e[r]]=r
return t}_getKeysSorted(e){const t=[]
for(const r in e)t.push(r)
return t.sort(),t}}function i(){return function(e,t){return new a(e,{ignoreUnknown:!0,...t})}}},865:function(e,t,r){"use strict"
r.d(t,"a",(function(){return a}))
var s=r(858)
function a(e,t,r){let a,i
return void 0===t||Array.isArray(t)?(i=e,r=t,a=[void 0]):(i=t,a=Array.isArray(e)?e:[e]),(e,t)=>{const n=e.constructor.prototype
a.forEach(a=>{const o=Object(s.c)(e,a,i)
o.read&&"object"==typeof o.read||(o.read={}),o.read.reader=n[t],r&&(o.read.source=(o.read.source||[]).concat(r))})}}},866:function(e,t,r){"use strict"
r.d(t,"a",(function(){return j}))
var s,a=r(856),i=r(177),n=r(20),o=r(858),l=(r(353),r(77),r(880)),c=r(865),u=r(857),h=r(864),d=r(859),p=r(875),y=r(659),b=r(872),m=r(662)
const f=[0,0]
function g(e){return e&&("esri.geometry.SpatialReference"===e.declaredClass||null!=e.wkid)}const v=i.a.getLogger("esri.geometry.Point")
let O=s=class extends p.a{constructor(...e){super(...e),this.x=0,this.y=0,this.z=void 0,this.m=void 0,this.type="point"}static copy(e,t){t._set("x",e._get("x")),t._set("y",e._get("y")),t._set("z",e._get("z")),t._set("m",e._get("m"))
const r=e._get("spatialReference")
t._set("spatialReference",Object.isFrozen(r)?r:r.clone())}normalizeCtorArgs(e,t,r,s,a){let i
if(Array.isArray(e))i=e,a=t,e=i[0],t=i[1],r=i[2],s=i[3]
else if(e&&"object"==typeof e){if(i=e,e=null!=i.x?i.x:i.longitude,t=null!=i.y?i.y:i.latitude,r=i.z,s=i.m,(a=i.spatialReference)&&"esri.geometry.SpatialReference"!==a.declaredClass&&(a=new y.default(a)),null!=i.longitude||null!=i.latitude)if(null==i.longitude)v.warn(".longitude=","Latitude was defined without longitude")
else if(null==i.latitude)v.warn(".latitude=","Longitude was defined without latitude")
else if(!i.declaredClass&&a&&a.isWebMercator){const r=Object(m.lngLatToXY)(i.longitude,i.latitude,f)
e=r[0],t=r[1]}}else g(r)?(a=r,r=null):g(s)&&(a=s,s=null)
const n={x:e,y:t}
return null==n.x&&null!=n.y?v.warn(".y=","Y coordinate was defined without an X coordinate"):null==n.y&&null!=n.x&&v.warn(".x=","X coordinate was defined without a Y coordinate"),null!=a&&(n.spatialReference=a),null!=r&&(n.z=r),null!=s&&(n.m=s),n}get cache(){return this.commitProperty("x"),this.commitProperty("y"),this.commitProperty("z"),this.commitProperty("m"),this.commitProperty("spatialReference"),{}}get hasM(){return void 0!==this.m}set hasM(e){e!==(void 0!==this._get("m"))&&(this._set("m",e?0:void 0),this._set("hasM",e))}get hasZ(){return void 0!==this.z}set hasZ(e){e!==(void 0!==this._get("z"))&&(this._set("z",e?0:void 0),this._set("hasZ",e))}get latitude(){const{spatialReference:e,x:t,y:r}=this
if(e){if(e.isWebMercator)return Object(m.xyToLngLat)(t,r,f)[1]
if(e.isGeographic)return r}return null}set latitude(e){const{spatialReference:t,x:r}=this
t&&(t.isWebMercator?this._set("y",Object(m.lngLatToXY)(r,e,f)[1]):t.isGeographic&&this._set("y",e),this._set("latitude",e))}get longitude(){const{x:e,y:t,spatialReference:r}=this
if(r){if(r.isWebMercator)return Object(m.xyToLngLat)(e,t,f)[0]
if(r.isGeographic)return e}return null}set longitude(e){const{y:t,spatialReference:r}=this
r&&(r.isWebMercator?this._set("x",Object(m.lngLatToXY)(e,t,f)[0]):r.isGeographic&&this._set("x",e),this._set("longitude",e))}writeX(e,t,r){t[r]=isNaN(e)?"NaN":e}readX(e){return"string"==typeof e?NaN:e}clone(){const e=new s
return e.x=this.x,e.y=this.y,e.z=this.z,e.m=this.m,e.spatialReference=this.spatialReference,e}copy(e){return s.copy(e,this),this}equals(e){if(Object(n.j)(e))return!1
const{x:t,y:r,z:s,m:a,spatialReference:i}=this,{z:o,m:l}=e
let{x:c,y:u,spatialReference:h}=e
if(!i.equals(h))if(i.isWebMercator&&h.isWGS84)[c,u]=Object(m.lngLatToXY)(c,u),h=i
else{if(!i.isWGS84||!h.isWebMercator)return!1;[c,u]=Object(m.xyToLngLat)(c,u),h=i}return t===c&&r===u&&s===o&&a===l&&i.wkid===h.wkid}offset(e,t,r){return function(e,t,r,s){var a
return e.x=e.x+t,e.y=e.y+r,null!=s&&(e.z=(null!=(a=e.z)?a:0)+s),e}(this,e,t,r)}normalize(){if(!this.spatialReference)return this
const e=Object(b.e)(this.spatialReference)
if(!e)return this
let t=this.x
const[r,s]=e.valid,a=2*s
let i
return t>s?(i=Math.ceil(Math.abs(t-s)/a),t-=i*a):t<r&&(i=Math.ceil(Math.abs(t-r)/a),t+=i*a),this._set("x",t),this}distance(e){return function(e,t){const r=e.x-t.x,s=e.y-t.y,a=e.hasZ&&t.hasZ?e.z-t.z:0
return Math.sqrt(r*r+s*s+a*a)}(this,e)}toArray(){const e=this.hasZ,t=this.hasM
return e&&t?[this.x,this.y,this.z,this.m]:e?[this.x,this.y,this.z]:t?[this.x,this.y,this.m]:[this.x,this.y]}toJSON(e){return this.write({},e)}}
Object(a.a)([Object(o.b)({readOnly:!0})],O.prototype,"cache",null),Object(a.a)([Object(o.b)({type:Boolean,json:{read:!1,write:{enabled:!1,overridePolicy:null}}})],O.prototype,"hasM",null),Object(a.a)([Object(o.b)({type:Boolean,json:{read:!1,write:{enabled:!1,overridePolicy:null}}})],O.prototype,"hasZ",null),Object(a.a)([Object(o.b)({type:Number})],O.prototype,"latitude",null),Object(a.a)([Object(o.b)({type:Number})],O.prototype,"longitude",null),Object(a.a)([Object(o.b)({type:Number,json:{type:[Number,String],write:{isRequired:!0,allowNull:!0}}}),Object(l.a)(e=>isNaN(e)?e:Object(d.i)(e))],O.prototype,"x",void 0),Object(a.a)([Object(h.a)("x")],O.prototype,"writeX",null),Object(a.a)([Object(c.a)("x")],O.prototype,"readX",null),Object(a.a)([Object(o.b)({type:Number,json:{write:!0}})],O.prototype,"y",void 0),Object(a.a)([Object(o.b)({type:Number,json:{write:{overridePolicy(){return{enabled:this.hasZ}}}}})],O.prototype,"z",void 0),Object(a.a)([Object(o.b)({type:Number,json:{write:{overridePolicy(){return{enabled:this.hasM}}}}})],O.prototype,"m",void 0),O=s=Object(a.a)([Object(u.a)("esri.geometry.Point")],O),O.prototype.toJSON.isDefaultToJSON=!0
const j=O},868:function(e,t,r){"use strict"
r.d(t,"a",(function(){return i}))
var s=r(863),a=r(858)
function i(e,t={}){var r
const i=e instanceof s.a?e:new s.a(e,t),n={type:null==(r=null==t?void 0:t.ignoreUnknown)||r?i.apiValues:String,json:{type:i.jsonValues,read:(null==t||!t.readOnly)&&{reader:i.read},write:{writer:i.write}}}
return void 0!==(null==t?void 0:t.readOnly)&&(n.readOnly=!!t.readOnly),void 0!==(null==t?void 0:t.default)&&(n.json.default=t.default),void 0!==(null==t?void 0:t.name)&&(n.json.name=t.name),Object(a.b)(n)}},873:function(e,t,r){"use strict"
r.d(t,"a",(function(){return d}))
var s,a,i=r(967),n=r(874),o=r(20),l=r(859)
function c(e){return Object(n.f)(Object(l.e)(e),0,255)}function u(e,t,r){return e=Number(e),isNaN(e)?r:e<t?t:e>r?r:e}class h{constructor(e){this.r=255,this.g=255,this.b=255,this.a=1,e&&this.setColor(e)}static blendColors(e,t,r,s=new h){return s.r=Math.round(e.r+(t.r-e.r)*r),s.g=Math.round(e.g+(t.g-e.g)*r),s.b=Math.round(e.b+(t.b-e.b)*r),s.a=e.a+(t.a-e.a)*r,s._sanitize()}static fromRgb(e,t){const r=e.toLowerCase().match(/^(rgba?|hsla?)\(([\s\.\-,%0-9]+)\)/)
if(r){const e=r[2].split(/\s*,\s*/),s=r[1]
if("rgb"===s&&3===e.length||"rgba"===s&&4===e.length){const r=e[0]
if("%"===r.charAt(r.length-1)){const r=e.map(e=>2.56*parseFloat(e))
return 4===e.length&&(r[3]=parseFloat(e[3])),h.fromArray(r,t)}return h.fromArray(e.map(e=>parseFloat(e)),t)}if("hsl"===s&&3===e.length||"hsla"===s&&4===e.length)return h.fromArray(Object(i.d)(parseFloat(e[0]),parseFloat(e[1])/100,parseFloat(e[2])/100,parseFloat(e[3])),t)}return null}static fromHex(e,t=new h){if(4!==e.length&&7!==e.length||"#"!==e[0])return null
const r=4===e.length?4:8,s=(1<<r)-1
let a=Number("0x"+e.substr(1))
return isNaN(a)?null:(["b","g","r"].forEach(e=>{const i=a&s
a>>=r,t[e]=4===r?17*i:i}),t.a=1,t)}static fromArray(e,t=new h){return t._set(Number(e[0]),Number(e[1]),Number(e[2]),Number(e[3])),isNaN(t.a)&&(t.a=1),t._sanitize()}static fromString(e,t){const r=Object(i.e)(e)?Object(i.a)(e):null
return r&&h.fromArray(r,t)||h.fromRgb(e,t)||h.fromHex(e,t)}static fromJSON(e){return e&&new h([e[0],e[1],e[2],e[3]/255])}static toUnitRGB(e){return Object(o.k)(e)?[e.r/255,e.g/255,e.b/255]:null}static toUnitRGBA(e){return Object(o.k)(e)?[e.r/255,e.g/255,e.b/255,null!=e.a?e.a:1]:null}get isBright(){return.299*this.r+.587*this.g+.114*this.b>=127}setColor(e){if("string"==typeof e)h.fromString(e,this)
else if(Array.isArray(e))h.fromArray(e,this)
else{var t,r,s,a
this._set(null!=(t=e.r)?t:0,null!=(r=e.g)?r:0,null!=(s=e.b)?s:0,null!=(a=e.a)?a:1),e instanceof h||this._sanitize()}return this}toRgb(){return[this.r,this.g,this.b]}toRgba(){return[this.r,this.g,this.b,this.a]}toHex(){const e=this.r.toString(16),t=this.g.toString(16),r=this.b.toString(16)
return`#${e.length<2?"0"+e:e}${t.length<2?"0"+t:t}${r.length<2?"0"+r:r}`}toCss(e=!1){const t=this.r+", "+this.g+", "+this.b
return e?`rgba(${t}, ${this.a})`:`rgb(${t})`}toString(){return this.toCss(!0)}toJSON(){return this.toArray()}toArray(e=h.AlphaMode.ALWAYS){const t=c(this.r),r=c(this.g),s=c(this.b)
return e===h.AlphaMode.ALWAYS||1!==this.a?[t,r,s,c(255*this.a)]:[t,r,s]}clone(){return new h(this.toRgba())}hash(){return this.r<<24|this.g<<16|this.b<<8|255*this.a}equals(e){return Object(o.k)(e)&&e.r===this.r&&e.g===this.g&&e.b===this.b&&e.a===this.a}_sanitize(){return this.r=Math.round(u(this.r,0,255)),this.g=Math.round(u(this.g,0,255)),this.b=Math.round(u(this.b,0,255)),this.a=u(this.a,0,1),this}_set(e,t,r,s){this.r=e,this.g=t,this.b=r,this.a=s}}h.prototype.declaredClass="esri.Color",s=h||(h={}),(a=s.AlphaMode||(s.AlphaMode={}))[a.ALWAYS=0]="ALWAYS",a[a.UNLESS_OPAQUE=1]="UNLESS_OPAQUE"
const d=h},875:function(e,t,r){"use strict"
r.d(t,"a",(function(){return u}))
var s=r(856),a=r(860),i=r(858),n=(r(353),r(77),r(859),r(865)),o=r(857),l=r(659)
let c=class extends a.a{constructor(...e){super(...e),this.type=null,this.hasM=!1,this.hasZ=!1,this.spatialReference=l.default.WGS84}get cache(){return this.commitProperty("spatialReference"),{}}get extent(){return null}readSpatialReference(e,t){if(e instanceof l.default)return e
if(null!=e){const r=new l.default
return r.read(e,t),r}return e}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}clearCache(){this.notifyChange("cache")}getCacheValue(e){return this.cache[e]}setCacheValue(e,t){this.cache[e]=t}}
Object(s.a)([Object(i.b)()],c.prototype,"type",void 0),Object(s.a)([Object(i.b)({readOnly:!0})],c.prototype,"cache",null),Object(s.a)([Object(i.b)({readOnly:!0})],c.prototype,"extent",null),Object(s.a)([Object(i.b)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],c.prototype,"hasM",void 0),Object(s.a)([Object(i.b)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],c.prototype,"hasZ",void 0),Object(s.a)([Object(i.b)({type:l.default,json:{write:!0}})],c.prototype,"spatialReference",void 0),Object(s.a)([Object(n.a)("spatialReference")],c.prototype,"readSpatialReference",null),c=Object(s.a)([Object(o.a)("esri.geometry.Geometry")],c)
const u=c},880:function(e,t,r){"use strict"
r.d(t,"a",(function(){return l}))
var s=r(859),a=r(1181)
const i=Object.prototype.toString
function n(e){const t="__accessorMetadata__"in e?Object(s.m)(e):e
return function(...e){if(e.push(t),"number"==typeof e[2])throw new Error("Using @cast has parameter decorator is not supported since 4.16")
return o.apply(this,e)}}function o(e,t,r,s){Object(a.b)(e,t).cast=s}function l(...e){if(3!==e.length||"string"!=typeof e[1])return 1===e.length&&"[object Function]"===i.call(e[0])?n(e[0]):1===e.length&&"string"==typeof e[0]?function(e){return function(t,r){Object(a.b)(t,e).cast=t[r]}}(e[0]):void 0}},885:function(e,t,r){"use strict"
r.d(t,"a",(function(){return u}))
var s=r(856),a=r(862),i=r(878),n=r(20),o=r(858),l=r(857)
let c=class extends a.a{constructor(e){super(e),this._groups=new Map}destroy(){this.removeAll()}get size(){let e=0
return this._groups.forEach(t=>{e+=t.length}),e}add(e,t){if(!this._isHandle(e)&&!Array.isArray(e)&&!i.a.isCollection(e))return this
const r=this._getOrCreateGroup(t)
return Array.isArray(e)||i.a.isCollection(e)?e.forEach(e=>this._isHandle(e)&&r.push(e)):r.push(e),this.notifyChange("size"),this}forEach(e,t){if("function"==typeof e)this._groups.forEach(t=>t.forEach(e))
else{const r=this._getGroup(e)
r&&t&&r.forEach(t)}}has(e){return this._groups.has(this._ensureGroupKey(e))}remove(e){if(Array.isArray(e)||i.a.isCollection(e))return e.forEach(this.remove,this),this
if(!this.has(e))return this
const t=this._getGroup(e)
for(let e=0;e<t.length;e++)t[e].remove()
return this._deleteGroup(e),this.notifyChange("size"),this}removeAll(){return this._groups.forEach(e=>{for(let t=0;t<e.length;t++)e[t].remove()}),this._groups.clear(),this.notifyChange("size"),this}_isHandle(e){return e&&!!e.remove}_getOrCreateGroup(e){if(this.has(e))return this._getGroup(e)
const t=[]
return this._groups.set(this._ensureGroupKey(e),t),t}_getGroup(e){return Object(n.c)(this._groups.get(this._ensureGroupKey(e)))}_deleteGroup(e){return this._groups.delete(this._ensureGroupKey(e))}_ensureGroupKey(e){return e||"_default_"}}
Object(s.a)([Object(o.b)({readOnly:!0})],c.prototype,"size",null),c=Object(s.a)([Object(l.a)("esri.core.Handles")],c)
const u=c},890:function(e,t,r){"use strict"
r.d(t,"a",(function(){return l}))
var s=r(856),a=r(862),i=r(923),n=r(857)
class o{constructor(){this._emitter=new o.EventEmitter(this)}emit(e,t){return this._emitter.emit(e,t)}on(e,t){return this._emitter.on(e,t)}once(e,t){return this._emitter.once(e,t)}hasEventListener(e){return this._emitter.hasEventListener(e)}}!function(e){class t{constructor(e=null){this.target=e,this._listenersMap=null}clear(){this._listenersMap&&this._listenersMap.clear(),this._listenersMap=null}emit(e,t){const r=this._listenersMap&&this._listenersMap.get(e)
if(!r)return!1
const s=this.target||this
return[...r].forEach(e=>{e.call(s,t)}),r.length>0}on(e,t){if(Array.isArray(e)){const r=e.map(e=>this.on(e,t))
return Object(i.b)(r)}if(e.indexOf(",")>-1)throw new TypeError("Evented.on() with a comma delimited string of event types is not supported")
this._listenersMap||(this._listenersMap=new Map)
const r=this._listenersMap.get(e)||[]
return r.push(t),this._listenersMap.set(e,r),{remove:()=>{const r=this._listenersMap&&this._listenersMap.get(e)||[],s=r.indexOf(t)
s>=0&&r.splice(s,1)}}}once(e,t){const r=this.on(e,e=>{r.remove(),t.call(null,e)})
return r}hasEventListener(e){const t=this._listenersMap&&this._listenersMap.get(e)
return null!=t&&t.length>0}}e.EventEmitter=t,e.EventedMixin=e=>{let r=class extends e{constructor(){super(...arguments),this._emitter=new t}destroy(){this._emitter.clear()}emit(e,t){return this._emitter.emit(e,t)}on(e,t){return this._emitter.on(e,t)}once(e,t){return this._emitter.once(e,t)}hasEventListener(e){return this._emitter.hasEventListener(e)}}
return r=Object(s.a)([Object(n.a)("esri.core.Evented")],r),r}
let r=class extends a.a{constructor(){super(...arguments),this._emitter=new o.EventEmitter(this)}destroy(){this._emitter.clear()}emit(e,t){return this._emitter.emit(e,t)}on(e,t){return this._emitter.on(e,t)}once(e,t){return this._emitter.once(e,t)}hasEventListener(e){return this._emitter.hasEventListener(e)}}
r=Object(s.a)([Object(n.a)("esri.core.Evented")],r),e.EventedAccessor=r}(o||(o={}))
const l=o},892:function(e,t,r){"use strict"
r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return h})),r.d(t,"c",(function(){return b})),r.d(t,"d",(function(){return f})),r.d(t,"e",(function(){return l})),r.d(t,"f",(function(){return c})),r.d(t,"g",(function(){return d}))
var s=r(932),a=r(923),i=r(20),n=r(861),o=r(1007)
function l(e,t,r={}){return u(e,t,r,p)}function c(e,t,r={}){return u(e,t,r,y)}function u(e,t,r={},s){let a=null
const n=r.once?(e,r)=>{s(e)&&(Object(i.s)(a),t(e,r))}:(e,r)=>{s(e)&&t(e,r)}
if(a=Object(o.e)(e,n,r.sync,r.equals),r.initial){const t=e()
n(t,t)}return a}function h(e,t,r,n={}){let o=null,c=null,u=null
function h(){o&&c&&(c.remove(),null==n.onListenerRemove||n.onListenerRemove(o),o=null,c=null)}function d(e){n.once&&n.once&&Object(i.s)(u),r(e)}const p=l(e,(e,r)=>{h(),Object(s.b)(e)&&(o=e,c=Object(s.c)(e,t,d),null==n.onListenerAdd||n.onListenerAdd(e))},{sync:n.sync,initial:!0})
return u=Object(a.c)(()=>{p.remove(),h()}),u}function d(e,t){return function(e,t,r){if(Object(n.n)(r))return Promise.reject(Object(n.e)())
const s=e()
if(null!=t&&t(s))return Promise.resolve(s)
let o=null
function l(){o=Object(i.s)(o)}return new Promise((s,i)=>{o=Object(a.b)([Object(n.q)(r,()=>{l(),i(Object(n.e)())}),u(e,e=>{l(),s(e)},{sync:!1,once:!0},null!=t?t:p)])})}(e,y,t)}function p(e){return!0}function y(e){return!!e}r(958)
const b={sync:!0},m={initial:!0},f={sync:!0,initial:!0}},900:function(e,t,r){"use strict"
r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return y})),r.d(t,"c",(function(){return d}))
var s=r(354),a=r(861),i=r(879)
const n=/^([a-z]{2})(?:[-_]([A-Za-z]{2}))?$/,o={ar:!0,bg:!0,bs:!0,ca:!0,cs:!0,da:!0,de:!0,el:!0,en:!0,es:!0,et:!0,fi:!0,fr:!0,he:!0,hr:!0,hu:!0,id:!0,it:!0,ja:!0,ko:!0,lt:!0,lv:!0,nb:!0,nl:!0,pl:!0,"pt-BR":!0,"pt-PT":!0,ro:!0,ru:!0,sk:!0,sl:!0,sr:!0,sv:!0,th:!0,tr:!0,uk:!0,vi:!0,"zh-CN":!0,"zh-HK":!0,"zh-TW":!0}
function l(e){var t
return null!=(t=o[e])&&t}const c=[],u=new Map
function h(e){for(const t of u.keys())b(e.pattern,t)&&u.delete(t)}function d(e){return c.includes(e)||(h(e),c.unshift(e)),{remove(){const t=c.indexOf(e)
t>-1&&(c.splice(t,1),h(e))}}}async function p(e){const t=Object(i.b)()
u.has(e)||u.set(e,async function(e,t){const r=[]
for(const s of c)if(b(s.pattern,e))try{return await s.fetchMessageBundle(e,t)}catch(e){r.push(e)}if(r.length)throw new s.a("intl:message-bundle-error",`Errors occurred while loading "${e}"`,{errors:r})
throw new s.a("intl:no-message-bundle-loader",`No loader found for message bundle "${e}"`)}(e,t))
const r=u.get(e)
return await m.add(r),r}function y(e){if(!n.test(e))return null
const[,t,r]=n.exec(e),s=t+(r?"-"+r.toUpperCase():"")
return l(s)?s:l(t)?t:null}function b(e,t){return"string"==typeof e?t.startsWith(e):e.test(t)}Object(i.a)(()=>{u.clear()})
const m=new class{constructor(){this._numLoading=0}async waitForAll(){this._dfd&&await this._dfd.promise}add(e){return this._increase(),e.then(()=>this._decrease(),()=>this._decrease()),this.waitForAll()}_increase(){this._numLoading++,this._dfd||(this._dfd=Object(a.f)())}_decrease(){this._numLoading=Math.max(this._numLoading-1,0),this._dfd&&0===this._numLoading&&(this._dfd.resolve(),this._dfd=null)}}},902:function(e,t,r){"use strict"
r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return n}))
class s{constructor(e,t,r,s){this.semiMajorAxis=e,this.flattening=t,this.outerAtmosphereRimWidth=r
const a=1-this.flattening
this.semiMinorAxis=this.semiMajorAxis*a,this.halfSemiMajorAxis=this.semiMajorAxis/2,this.halfCircumference=Math.PI*this.semiMajorAxis,this.metersPerDegree=this.halfCircumference/180,this.inverseFlattening=1/(1-this.flattening)-1,this.eccentricitySquared=s||2*this.flattening-this.flattening*this.flattening,this.meanRadiusSemiAxes=(2*this.semiMajorAxis+this.semiMinorAxis)/3}get radius(){return this.semiMajorAxis}}const a=new s(6378137,1/298.257223563,3e5,.006694379990137799),i=new s(3396190,1/169.8944472236118,23e4),n=new s(1737400,0,0)},903:function(e,t,r){"use strict"
r.d(t,"a",(function(){return y}))
var s=r(856),a=r(354),i=r(959),n=r(861),o=r(970),l=r(858),c=r(857)
const u="loaded",h=e=>{let t=class extends e{constructor(...e){super(...e),this._loadController=null,this.loadError=null,this.loadStatus="not-loaded",this._set("loadWarnings",[]),this.addResolvingPromise(new Promise(e=>{const t=this.load.bind(this)
this.load=r=>{const s=new Promise((e,t)=>{const s=Object(n.r)(r,t)
this.destroyed&&t(new a.a("load:instance-destroyed",`Instance of '${this.declaredClass||this.constructor.name}' is already destroyed`,{instance:this})),this._promiseProps.when(e,t).finally(()=>{s&&s.remove()})})
if("not-loaded"===this.loadStatus){this._set("loadStatus","loading")
const e=this._loadController=new AbortController
t({signal:e.signal}),Object(n.q)(e.signal,()=>{this._promiseProps.abort()})}return e(),s}})),this.when(()=>{this._set("loadStatus",u),this._loadController=null},e=>{this._set("loadStatus","failed"),this._set("loadError",e),this._loadController=null})}get loaded(){return this.loadStatus===u}get loadWarnings(){return this._get("loadWarnings")}load(){return null}cancelLoad(){var e
return this.isFulfilled()||(this._set("loadError",new a.a("load:cancelled","Cancelled")),null==(e=this._loadController)||e.abort()),this}}
return Object(s.a)([Object(l.b)({readOnly:!0})],t.prototype,"loaded",null),Object(s.a)([Object(l.b)({readOnly:!0})],t.prototype,"loadError",void 0),Object(s.a)([Object(l.b)({clonable:!1})],t.prototype,"loadStatus",void 0),Object(s.a)([Object(l.b)({type:[o.a],readOnly:!0})],t.prototype,"loadWarnings",null),t=Object(s.a)([Object(c.a)("esri.core.Loadable")],t),t}
let d=class extends(h(i.a)){}
var p
d=Object(s.a)([Object(c.a)("esri.core.Loadable")],d),(p=d||(d={})).LoadableMixin=h,p.isLoadable=function(e){return!(!e||!e.load)}
const y=d},904:function(e,t,r){"use strict"
r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return y})),r.d(t,"c",(function(){return v})),r.d(t,"d",(function(){return m})),r.d(t,"e",(function(){return g}))
var s=r(928)
function a(e,t){return Object(s.e)(e,t)}function i(e,t){const r=e.hasZ&&t.hasZ
let s,a,i
if(e.xmin<=t.xmin){if(s=t.xmin,e.xmax<s)return!1}else if(s=e.xmin,t.xmax<s)return!1
if(e.ymin<=t.ymin){if(a=t.ymin,e.ymax<a)return!1}else if(a=e.ymin,t.ymax<a)return!1
if(r&&t.hasZ)if(e.zmin<=t.zmin){if(i=t.zmin,e.zmax<i)return!1}else if(i=e.zmin,t.zmax<i)return!1
return!0}function n(e,t){const{points:r,hasZ:a}=t,i=a?s.b:s.a
for(const t of r)if(i(e,t))return!0
return!1}const o=[0,0],l=[0,0],c=[0,0],u=[0,0],h=[o,l,c,u],d=[[c,o],[o,l],[l,u],[u,c]]
function p(e,t){o[0]=e.xmin,o[1]=e.ymax,l[0]=e.xmax,l[1]=e.ymax,c[0]=e.xmin,c[1]=e.ymin,u[0]=e.xmax,u[1]=e.ymin
for(const e of h)if(Object(s.f)(t,e))return!0
for(const r of t.rings){if(!r.length)continue
let t=r[0]
if(Object(s.a)(e,t))return!0
for(let a=1;a<r.length;a++){const i=r[a]
if(Object(s.a)(e,i)||f(t,i,d))return!0
t=i}}return!1}function y(e,t){o[0]=e.xmin,o[1]=e.ymax,l[0]=e.xmax,l[1]=e.ymax,c[0]=e.xmin,c[1]=e.ymin,u[0]=e.xmax,u[1]=e.ymin
const r=t.paths
for(const t of r){if(!r.length)continue
let a=t[0]
if(Object(s.a)(e,a))return!0
for(let r=1;r<t.length;r++){const i=t[r]
if(Object(s.a)(e,i)||f(a,i,d))return!0
a=i}}return!1}const b=[0,0]
function m(e){for(let t=0;t<e.length;t++){const r=e[t]
for(let s=0;s<r.length-1;s++){const a=r[s],i=r[s+1]
for(let r=t+1;r<e.length;r++)for(let t=0;t<e[r].length-1;t++){const s=e[r][t],n=e[r][t+1]
if(g(a,i,s,n,b)&&!(b[0]===a[0]&&b[1]===a[1]||b[0]===s[0]&&b[1]===s[1]||b[0]===i[0]&&b[1]===i[1]||b[0]===n[0]&&b[1]===n[1]))return!0}}const s=r.length
if(!(s<=4))for(let e=0;e<s-3;e++){let t=s-1
0===e&&(t=s-2)
const a=r[e],i=r[e+1]
for(let s=e+2;s<t;s++){const e=r[s],t=r[s+1]
if(g(a,i,e,t,b)&&!(b[0]===a[0]&&b[1]===a[1]||b[0]===e[0]&&b[1]===e[1]||b[0]===i[0]&&b[1]===i[1]||b[0]===t[0]&&b[1]===t[1]))return!0}}}return!1}function f(e,t,r){for(let s=0;s<r.length;s++)if(g(e,t,r[s][0],r[s][1]))return!0
return!1}function g(e,t,r,s,a){const[i,n]=e,[o,l]=t,[c,u]=r,[h,d]=s,p=h-c,y=i-c,b=o-i,m=d-u,f=n-u,g=l-n,v=m*b-p*g
if(0===v)return!1
const O=(p*f-m*y)/v,j=(b*f-g*y)/v
return O>=0&&O<=1&&j>=0&&j<=1&&(a&&(a[0]=i+O*(o-i),a[1]=n+O*(l-n)),!0)}function v(e){switch(e){case"esriGeometryEnvelope":case"extent":return i
case"esriGeometryMultipoint":case"multipoint":return n
case"esriGeometryPoint":case"point":return a
case"esriGeometryPolygon":case"polygon":return p
case"esriGeometryPolyline":case"polyline":return y}}},912:function(e,t,r){"use strict"
r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return c}))
var s=r(856),a=r(862),i=r(885),n=r(858),o=r(857),l=r(1003)
const c=e=>{let t=class extends e{destroy(){var e,t
this.destroyed||(null==(e=this._get("handles"))||e.destroy(),null==(t=this._get("updatingHandles"))||t.destroy())}get handles(){return this._get("handles")||new i.a}get updatingHandles(){return this._get("updatingHandles")||new l.a}}
return Object(s.a)([Object(n.b)({readOnly:!0})],t.prototype,"handles",null),Object(s.a)([Object(n.b)({readOnly:!0})],t.prototype,"updatingHandles",null),t=Object(s.a)([Object(o.a)("esri.core.HandleOwner")],t),t}
let u=class extends(c(a.a)){}
u=Object(s.a)([Object(o.a)("esri.core.HandleOwner")],u)},928:function(e,t,r){"use strict"
r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return c})),r.d(t,"c",(function(){return o})),r.d(t,"d",(function(){return n})),r.d(t,"e",(function(){return i})),r.d(t,"f",(function(){return d})),r.d(t,"g",(function(){return h}))
var s=r(20)
const a=[0,0]
function i(e,t){return!!Object(s.k)(t)&&u(e,t.x,t.y,t.z)}function n(e,t){if(!t.points||t.points.length)return!1
for(const r of t.points)if(!l(e,r))return!1
return!0}function o(e,t){const{xmin:r,ymin:s,zmin:a,xmax:i,ymax:n,zmax:o}=t
return e.hasZ&&t.hasZ?u(e,r,s,a)&&u(e,r,n,a)&&u(e,i,n,a)&&u(e,i,s,a)&&u(e,r,s,o)&&u(e,r,n,o)&&u(e,i,n,o)&&u(e,i,s,o):u(e,r,s)&&u(e,r,n)&&u(e,i,n)&&u(e,i,s)}function l(e,t){return u(e,t[0],t[1])}function c(e,t){return u(e,t[0],t[1],t[2])}function u(e,t,r,s){return t>=e.xmin&&t<=e.xmax&&r>=e.ymin&&r<=e.ymax&&(null==s||!e.hasZ||s>=e.zmin&&s<=e.zmax)}function h(e,t){return a[1]=t.y,a[0]=t.x,d(e,a)}function d(e,t){return function(e,t){if(!e)return!1
if(function(e){return!Array.isArray(e[0][0])}(e))return p(!1,e,t)
let r=!1
for(let s=0,a=e.length;s<a;s++)r=p(r,e[s],t)
return r}(e.rings,t)}function p(e,t,r){const[s,a]=r
let i=e,n=0
for(let e=0,r=t.length;e<r;e++){n++,n===r&&(n=0)
const[o,l]=t[e],[c,u]=t[n];(l<a&&u>=a||u<a&&l>=a)&&o+(a-l)/(u-l)*(c-o)<s&&(i=!i)}return i}},959:function(e,t,r){"use strict"
r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return h}))
var s,a,i=r(856),n=r(862),o=r(20),l=r(861),c=r(857);(a=s||(s={}))[a.PENDING=0]="PENDING",a[a.RESOLVED=1]="RESOLVED",a[a.REJECTED=2]="REJECTED"
class u{constructor(e){this.instance=e,this._resolver=Object(l.f)(),this._status=s.PENDING,this._resolvingPromises=[],this._resolver.promise.then(()=>{this._status=s.RESOLVED,this._cleanUp()},()=>{this._status=s.REJECTED,this._cleanUp()})}addResolvingPromise(e){this._resolvingPromises.push(e),this._tryResolve()}isResolved(){return this._status===s.RESOLVED}isRejected(){return this._status===s.REJECTED}isFulfilled(){return this._status!==s.PENDING}abort(){this._resolver.reject(Object(l.e)())}when(e,t){return this._resolver.promise.then(e,t)}_cleanUp(){this._allPromise=this._resolvingPromises=this._allPromise=null}_tryResolve(){if(this.isFulfilled())return
const e=Object(l.f)(),t=[...this._resolvingPromises,Object(o.c)(e.promise)],r=this._allPromise=Promise.all(t)
r.then(()=>{this.isFulfilled()||this._allPromise!==r||this._resolver.resolve(this.instance)},e=>{this.isFulfilled()||this._allPromise!==r||Object(l.m)(e)||this._resolver.reject(e)}),e.resolve()}}const h=e=>{let t=class extends e{constructor(...e){super(...e),this._promiseProps=new u(this),this.addResolvingPromise(Promise.resolve())}isResolved(){return this._promiseProps.isResolved()}isRejected(){return this._promiseProps.isRejected()}isFulfilled(){return this._promiseProps.isFulfilled()}when(e,t){return new Promise((e,t)=>{this._promiseProps.when(e,t)}).then(e,t)}catch(e){return this.when(null,e)}addResolvingPromise(e){e&&!this._promiseProps.isFulfilled()&&this._promiseProps.addResolvingPromise("_promiseProps"in e?e.when():e)}}
return t=Object(i.a)([Object(c.a)("esri.core.Promise")],t),t}
let d=class extends(h(n.a)){}
d=Object(i.a)([Object(c.a)("esri.core.Promise")],d)},963:function(e,t,r){"use strict"
function s(e){}function a(e){return()=>e}r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return a})),r(77)},966:function(e,t,r){"use strict"
r.d(t,"a",(function(){return i}))
var s=r(292)
const a=["elevation3d.arcgis.com","js.arcgis.com","jsdev.arcgis.com","jsqa.arcgis.com","static.arcgis.com"]
function i(e){const t=Object(s.o)(e,!0)
return t&&t.endsWith(".arcgis.com")&&!a.includes(t)&&!e.endsWith("/sharing/rest/generateToken")}},967:function(e,t,r){"use strict"
r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return c})),r.d(t,"d",(function(){return l})),r.d(t,"e",(function(){return a}))
const s={transparent:[0,0,0,0],black:[0,0,0,1],silver:[192,192,192,1],gray:[128,128,128,1],white:[255,255,255,1],maroon:[128,0,0,1],red:[255,0,0,1],purple:[128,0,128,1],fuchsia:[255,0,255,1],green:[0,128,0,1],lime:[0,255,0,1],olive:[128,128,0,1],yellow:[255,255,0,1],navy:[0,0,128,1],blue:[0,0,255,1],teal:[0,128,128,1],aqua:[0,255,255,1],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],blanchedalmond:[255,235,205,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],oldlace:[253,245,230,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],rebeccapurple:[102,51,153,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],whitesmoke:[245,245,245,1],yellowgreen:[154,205,50,1]}
function a(e){return s[e]||s[e.toLowerCase()]}function i(e){var t
return null!=(t=s[e])?t:s[e.toLowerCase()]}function n(e){return[...i(e)]}function o(e,t,r){r<0&&++r,r>1&&--r
const s=6*r
return s<1?e+(t-e)*s:2*r<1?t:3*r<2?e+(t-e)*(2/3-r)*6:e}function l(e,t,r,s=1){const a=(e%360+360)%360/360,i=r<=.5?r*(t+1):r+t-r*t,n=2*r-i
return[Math.round(255*o(n,i,a+1/3)),Math.round(255*o(n,i,a)),Math.round(255*o(n,i,a-1/3)),s]}function c(e){const t=e.length>5,r=t?8:4,s=(1<<r)-1,a=t?1:17,i=t?9===e.length:5===e.length
let n=Number("0x"+e.substr(1))
if(isNaN(n))return null
const o=[0,0,0,1]
let l
return i&&(l=n&s,n>>=r,o[3]=a*l/255),l=n&s,n>>=r,o[2]=a*l,l=n&s,n>>=r,o[1]=a*l,l=n&s,n>>=r,o[0]=a*l,o}}}])
