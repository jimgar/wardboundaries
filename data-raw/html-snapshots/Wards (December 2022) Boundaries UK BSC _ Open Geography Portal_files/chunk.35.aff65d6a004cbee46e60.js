(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[35,439],{1110:function(e,t,i){"use strict"
i.d(t,"a",(function(){return g})),i.d(t,"b",(function(){return b})),i.d(t,"c",(function(){return o})),i.d(t,"d",(function(){return m})),i.d(t,"e",(function(){return v})),i.d(t,"f",(function(){return O})),i.d(t,"g",(function(){return j}))
var r=i(20),s=i(869)
const n=(e,t,i)=>[t,i],a=(e,t,i)=>[t,i,e[2]],l=(e,t,i)=>[t,i,e[2],e[3]]
function o(e){return e?{originPosition:"upper-left"===e.originPosition?"upperLeft":"lower-left"===e.originPosition?"lowerLeft":e.originPosition,scale:e.tolerance?[e.tolerance,e.tolerance]:[1,1],translate:Object(r.k)(e.extent)?[e.extent.xmin,e.extent.ymax]:[0,0]}:null}function u({scale:e,translate:t},i){return Math.round((i-t[0])/e[0])}function c({scale:e,translate:t},i){return Math.round((t[1]-i)/e[1])}function d(e,t,i){const r=[]
let s,n,a,l
for(let o=0;o<i.length;o++){const d=i[o]
o>0?(a=u(e,d[0]),l=c(e,d[1]),a===s&&l===n||(r.push(t(d,a-s,l-n)),s=a,n=l)):(s=u(e,d[0]),n=c(e,d[1]),r.push(t(d,s,n)))}return r.length>0?r:null}function p({scale:e,translate:t},i){return i*e[0]+t[0]}function h({scale:e,translate:t},i){return t[1]-i*e[1]}function f(e,t,i){const r=new Array(i.length)
if(!i.length)return r
const[s,n]=e.scale
let a=p(e,i[0][0]),l=h(e,i[0][1])
r[0]=t(i[0],a,l)
for(let e=1;e<i.length;e++){const o=i[e]
a+=o[0]*s,l-=o[1]*n,r[e]=t(o,a,l)}return r}function y(e,t,i){const r=new Array(i.length)
for(let s=0;s<i.length;s++)r[s]=f(e,t,i[s])
return r}function b(e,t,i,r,s){return t.x=u(e,i.x),t.y=c(e,i.y),t!==i&&(r&&(t.z=i.z),s&&(t.m=i.m)),t}function g(e,t){return e&&t?Object(s.f)(t)?b(e,{},t,!1,!1):Object(s.h)(t)?function(e,t,i,r,s){const o=function(e,t,i,r){const s=[],o=i?r?l:a:r?a:n
for(let i=0;i<t.length;i++){const r=d(e,o,t[i])
r&&r.length>=2&&s.push(r)}return s.length?s:null}(e,i.paths,r,s)
return o?(t.paths=o,t):null}(e,{},t,!1,!1):Object(s.g)(t)?function(e,t,i,r,s){const o=function(e,t,i,r){const s=[],o=i?r?l:a:r?a:n
for(let i=0;i<t.length;i++){const r=d(e,o,t[i])
r&&r.length>=3&&s.push(r)}return s.length?s:null}(e,i.rings,r,s)
return o?(t.rings=o,t):null}(e,{},t,!1,!1):Object(s.e)(t)?function(e,t,i,r,s){return t.points=function(e,t,i,r){return d(e,i?r?l:a:r?a:n,t)}(e,i.points,r,s),t}(e,{},t,!1,!1):Object(s.d)(t)?function(e,t,i,r,s){return t.xmin=u(e,i.xmin),t.ymin=c(e,i.ymin),t.xmax=u(e,i.xmax),t.ymax=c(e,i.ymax),t}(e,{},t):null:null}function m(e,t,i,s,o){return Object(r.k)(i)&&(t.points=function(e,t,i,r){return f(e,i?r?l:a:r?a:n,t)}(e,i.points,s,o)),t}function v(e,t,i,s,n){return Object(r.j)(i)||(t.x=p(e,i.x),t.y=h(e,i.y),t!==i&&(s&&(t.z=i.z),n&&(t.m=i.m))),t}function O(e,t,i,s,o){return Object(r.k)(i)&&(t.rings=function(e,t,i,r){return y(e,i?r?l:a:r?a:n,t)}(e,i.rings,s,o)),t}function j(e,t,i,s,o){return Object(r.k)(i)&&(t.paths=function(e,t,i,r){return y(e,i?r?l:a:r?a:n,t)}(e,i.paths,s,o)),t}},1118:function(e,t,i){"use strict"
i.d(t,"a",(function(){return f}))
var r=i(856),s=i(862),n=i(890),a=i(912),l=i(1010),o=i(177),u=i(20),c=i(959),d=i(858),p=(i(353),i(77),i(859),i(857))
let h=class extends(Object(a.b)(Object(l.b)(Object(c.b)(n.a.EventedMixin(s.a))))){constructor(e){super(e),this.layer=null,this.parent=null}initialize(){this.when().catch(e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",i=this.layer&&this.layer.title||"no title"
throw o.a.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${i}', id: '${t}')`,e),e}})}get fullOpacity(){return Object(u.u)(this.get("layer.opacity"),1)*Object(u.u)(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer.legendEnabled}get updating(){var e
return!!(null!=(e=this.updatingHandles)&&e.updating||this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var e
return!0===(null==(e=this.layer)?void 0:e.visible)}set visible(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}canResume(){var e,t,i
return this.visible&&(null==(e=this.layer)?void 0:e.loaded)&&!(null!=(t=this.parent)&&t.suspended)&&(null==(i=this.view)?void 0:i.ready)||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{}
return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}}
Object(r.a)([Object(d.b)()],h.prototype,"fullOpacity",null),Object(r.a)([Object(d.b)()],h.prototype,"layer",void 0),Object(r.a)([Object(d.b)()],h.prototype,"parent",void 0),Object(r.a)([Object(d.b)({readOnly:!0})],h.prototype,"suspended",null),Object(r.a)([Object(d.b)({readOnly:!0})],h.prototype,"suspendInfo",null),Object(r.a)([Object(d.b)({readOnly:!0})],h.prototype,"legendEnabled",null),Object(r.a)([Object(d.b)({type:Boolean,readOnly:!0})],h.prototype,"updating",null),Object(r.a)([Object(d.b)({readOnly:!0})],h.prototype,"updatingProgress",null),Object(r.a)([Object(d.b)()],h.prototype,"visible",null),Object(r.a)([Object(d.b)()],h.prototype,"view",void 0),h=Object(r.a)([Object(p.a)("esri.views.layers.LayerView")],h)
const f=h},1120:function(e,t,i){"use strict"
i.r(t),i.d(t,"createSymbolSchema",(function(){return l}))
var r=i(908),s=i(939)
function n(e){var t
return"line-marker"===e.type?{type:"line-marker",color:null==(t=e.color)?void 0:t.toJSON(),placement:e.placement,style:e.style}:e.constructor.fromJSON(e.toJSON()).toJSON()}function a(e){return hydrateKey(e)}function l(e,t,i){if(!e)return null
switch(e.type){case"simple-fill":case"picture-fill":return function(e,t,i){const l=t.supportsOutlineFills,o=Object(s.g)(r.d.FILL,{...t,isOutlinedFill:l}),u=i?a(o):o,c=e.clone(),d=c.outline
t.supportsOutlineFills||(c.outline=null)
const p={materialKey:u,hash:c.hash(),isOutlinedFill:!!t.supportsOutlineFills,...n(c)}
if(t.supportsOutlineFills)return p
const h=[]
if(h.push(p),d){const e=Object(s.g)(r.d.LINE,{...t,isOutline:!0}),l={materialKey:i?a(e):e,hash:d.hash(),...n(d)}
h.push(l)}return{type:"composite-symbol",layers:h,hash:h.reduce((e,t)=>t.hash+e,"")}}(e,t,i)
case"simple-marker":case"picture-marker":return function(e,t,i){const l=Object(s.g)(r.d.MARKER,t),o=i?a(l):l,u=n(e)
return{materialKey:o,hash:e.hash(),...u,angle:e.angle,maxVVSize:t.maxVVSize}}(e,t,i)
case"simple-line":return function(e,t,i){const l=Object(s.g)(r.d.LINE,t),o=i?a(l):l,u=e.clone(),c=u.marker
u.marker=null
const d=[]
if(d.push({materialKey:o,hash:u.hash(),...n(u)}),c){var p
const e=Object(s.g)(r.d.MARKER,t),l=i?a(e):e
c.color=null!=(p=c.color)?p:u.color,d.push({materialKey:l,hash:c.hash(),lineWidth:u.width,...n(c)})}return{type:"composite-symbol",layers:d,hash:d.reduce((e,t)=>t.hash+e,"")}}(e,t,i)
case"text":return function(e,t,i){const l=Object(s.g)(r.d.TEXT,t),o=i?a(l):l,u=n(e)
return{materialKey:o,hash:e.hash(),...u,angle:e.angle,maxVVSize:t.maxVVSize}}(e,t,i)
case"label":return function(e,t,i){const n=e.toJSON(),l=Object(s.g)(r.d.LABEL,{...t,placement:n.labelPlacement})
return{materialKey:i?a(l):l,hash:e.hash(),...n,labelPlacement:n.labelPlacement}}(e,t,i)
case"cim":return{type:"cim",rendererKey:t.vvFlags,data:e.data,maxVVSize:t.maxVVSize}
case"CIMSymbolReference":return{type:"cim",rendererKey:t.vvFlags,data:e,maxVVSize:t.maxVVSize}
case"web-style":return{...n(e),type:"web-style",hash:e.hash(),rendererKey:t.vvFlags,maxVVSize:t.maxVVSize}
default:throw new Error("symbol not supported "+e.type)}}},1168:function(e,t,i){"use strict"
i.d(t,"a",(function(){return h})),i.d(t,"b",(function(){return p})),i.d(t,"c",(function(){return m})),i.d(t,"d",(function(){return g})),i.d(t,"e",(function(){return f})),i.d(t,"f",(function(){return b})),i.d(t,"g",(function(){return y})),i.d(t,"h",(function(){return v}))
var r=i(1251),s=i(20),n=i(876),a=i(661),l=i(884),o=i(1033),u=i(1152),c=i(891),d=i(1395)
const p=512,h=50
function f(e,t){if(!t.isWrappable)return null
const[i,r]=Object(o.c)(t)
return e[2]>r?[Object(l.m)([e[0],e[1],r,e[3]]),Object(l.m)([i,e[1],i+e[2]-r,e[3]])]:e[0]<i?[Object(l.m)([i,e[1],e[2],e[3]]),Object(l.m)([r-(i-e[0]),e[1],r,e[3]])]:null}function y(e){return"text"===e||"esriTS"===e}function b(e){return"simple-marker"===e||"picture-marker"===e||"esriSMS"===e||"esriPMS"===e}function g(e){switch(Object(s.t)(e.geometry).type){case"point":case"multipoint":return 0
case"polyline":return 1
case"polygon":case"extent":return 2}return 0}function m(e,t,i){var s,a,l
if(!i||0===i.glyphMosaicItems.length)return e
const o=Object(r.a)(t.text)[1],p=i.glyphMosaicItems,h=Object(d.a)(p,o,{scale:Object(n.h)(t.font.size)/c.r,angle:null!=(s=t.angle)?s:0,xOffset:null!=(a=t.xoffset)?a:0,yOffset:null!=(l=t.yoffset)?l:0,hAlign:Object(u.e)(t.horizontalAlignment||"center"),vAlign:Object(u.g)(t.verticalAlignment||"baseline"),maxLineWidth:Math.max(32,Math.min(t.lineWidth||512,512)),lineHeight:c.u*Math.max(.25,Math.min(t.lineHeight||1,4)),decoration:t.font.decoration||"none",isCIM:!1}).bounds
return e[0]=Object(n.h)(h.x-h.halfWidth),e[1]=Object(n.h)(h.y-h.halfHeight),e[2]=Object(n.h)(h.width),e[3]=Object(n.h)(h.height),e}function v(e){if(!e)return null
const{xmin:t,ymin:i,xmax:r,ymax:s,spatialReference:n}=e
return new a.default({rings:[[[t,i],[t,s],[r,s],[r,i],[t,i]]],spatialReference:n})}},1241:function(e,t,i){"use strict"
i.d(t,"a",(function(){return u}))
var r=i(856),s=i(177),n=i(861),a=i(892),l=i(858),o=(i(353),i(77),i(859),i(857))
const u=e=>{let t=class extends e{initialize(){this.handles.add(Object(a.b)(()=>this.layer,"refresh",e=>{this.doRefresh(e.dataChanged).catch(e=>{Object(n.m)(e)||s.a.getLogger(this.declaredClass).error(e)})}),"RefreshableLayerView")}}
return Object(r.a)([Object(l.b)()],t.prototype,"layer",void 0),t=Object(r.a)([Object(o.a)("esri.layers.mixins.RefreshableLayerView")],t),t}},1303:function(e,t,i){"use strict"
i.d(t,"a",(function(){return o}))
var r=i(354),s=i(177),n=i(908),a=i(942)
const l=s.a.getLogger("esri.views.2d.engine.webgl")
function o(e){return Object(a.u)(e.minDataValue)&&Object(a.u)(e.maxDataValue)&&null!=e.minSize&&null!=e.maxSize?n.e.SIZE_MINMAX_VALUE:(e.expression&&"view.scale"===e.expression||e.valueExpression&&"$view.scale"===e.valueExpression)&&Array.isArray(e.stops)?n.e.SIZE_SCALE_STOPS:(null!=e.field||e.expression&&"view.scale"!==e.expression||e.valueExpression&&"$view.scale"!==e.valueExpression)&&(Array.isArray(e.stops)||"levels"in e&&e.levels)?n.e.SIZE_FIELD_STOPS:(null!=e.field||e.expression&&"view.scale"!==e.expression||e.valueExpression&&"$view.scale"!==e.valueExpression)&&null!=e.valueUnit?n.e.SIZE_UNIT_VALUE:(l.error(new r.a("mapview-bad-type","Found invalid size VisualVariable",e)),n.e.NONE)}},1306:function(e,t,i){"use strict"
i.d(t,"a",(function(){return a})),i.d(t,"b",(function(){return n}))
var r=i(20),s=i(881)
async function n(e,t=e.popupTemplate){if(!Object(r.k)(t))return[]
const i=await t.getRequiredFields(e.fieldsIndex),{lastEditInfoEnabled:n}=t,{objectIdField:a,typeIdField:l,globalIdField:o,relationships:u}=e
if(i.includes("*"))return["*"]
const c=n?await Object(s.n)(e):[],d=Object(s.j)(e.fieldsIndex,[...i,...c])
return l&&d.push(l),d&&a&&e.fieldsIndex.has(a)&&-1===d.indexOf(a)&&d.push(a),d&&o&&e.fieldsIndex.has(o)&&-1===d.indexOf(o)&&d.push(o),u&&u.forEach(t=>{const{keyField:i}=t
d&&i&&e.fieldsIndex.has(i)&&-1===d.indexOf(i)&&d.push(i)}),d}function a(e,t){return e.popupTemplate?e.popupTemplate:Object(r.k)(t)&&t.defaultPopupTemplateEnabled&&Object(r.k)(e.defaultPopupTemplate)?e.defaultPopupTemplate:null}},1331:function(e,t,i){"use strict"
i.d(t,"a",(function(){return F}))
var r=i(856),s=i(878),n=i(1072),a=i(354),l=i(892),o=i(858),u=(i(353),i(77),i(859),i(857)),c=i(1290),d=i(860)
i(177),i(962)
let p=class extends d.a{}
p=Object(r.a)([Object(u.a)("esri.views.layers.support.ClipArea")],p)
const h=p
var f
let y=f=class extends h{constructor(){super(...arguments),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new f({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}get version(){return(this._get("version")||0)+1}}
Object(r.a)([Object(o.b)({type:[Number,String],json:{write:!0}})],y.prototype,"left",void 0),Object(r.a)([Object(o.b)({type:[Number,String],json:{write:!0}})],y.prototype,"right",void 0),Object(r.a)([Object(o.b)({type:[Number,String],json:{write:!0}})],y.prototype,"top",void 0),Object(r.a)([Object(o.b)({type:[Number,String],json:{write:!0}})],y.prototype,"bottom",void 0),Object(r.a)([Object(o.b)({readOnly:!0})],y.prototype,"version",null),y=f=Object(r.a)([Object(u.a)("esri.views.layers.support.ClipRect")],y)
const b=y
i(870)
var g,m=i(875),v=i(869),O=i(658),j=i(661)
const _={base:m.a,key:"type",typeMap:{extent:O.default,polygon:j.default}}
let w=g=class extends h{constructor(){super(...arguments),this.type="geometry",this.geometry=null}get version(){return(this._get("version")||0)+1}clone(){return new g({geometry:this.geometry.clone()})}}
Object(r.a)([Object(o.b)({types:_,json:{read:v.a,write:!0}})],w.prototype,"geometry",void 0),Object(r.a)([Object(o.b)({readOnly:!0})],w.prototype,"version",null),w=g=Object(r.a)([Object(u.a)("esri.views.layers.support.Geometry")],w)
const x=w
let S=class extends h{constructor(){super(...arguments),this.type="path",this.path=[]}get version(){return(this._get("version")||0)+1}}
Object(r.a)([Object(o.b)({type:[[[Number]]],json:{write:!0}})],S.prototype,"path",void 0),Object(r.a)([Object(o.b)({readOnly:!0})],S.prototype,"version",null),S=Object(r.a)([Object(u.a)("esri.views.layers.support.Path")],S)
const E=S,R=s.a.ofType({key:"type",base:h,typeMap:{rect:b,path:E,geometry:x}}),F=e=>{let t=class extends e{constructor(){super(...arguments),this.attached=!1,this.clips=new R,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1}initialize(){var e,t,i,r
const s=null==(e=null==(t=this.view)?void 0:t.spatialReferenceLocked)||e;(null==(i=this.view)?void 0:i.spatialReference)&&s&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new a.a("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new c.a),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([Object(l.e)(()=>this.suspended,e=>{this.container&&(this.container.visible=!e),this.view&&!e&&this.updateRequested&&this.view.requestUpdate()},l.d),Object(l.e)(()=>{var e,t
return null!=(e=null==(t=this.layer)?void 0:t.opacity)?e:1},e=>{this.container&&(this.container.opacity=e)},l.d),Object(l.e)(()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal",e=>{this.container&&(this.container.blendMode=e)},l.d),Object(l.e)(()=>this.layer&&"effect"in this.layer?this.layer.effect:null,e=>{this.container&&(this.container.effect=e)},l.d),Object(l.b)(()=>this.clips,"change",()=>{this.container&&(this.container.clips=this.clips)})]),null!=(r=this.view)&&r.whenLayerView?this.view.whenLayerView(this.layer).then(e=>{e===this&&this.processAttach()},()=>{}):this.when().then(()=>{this.processAttach()},()=>{}))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){var e
const t=null==(e=this.view)?void 0:e.spatialReference
return null==t||this.supportsSpatialReference(t)}get updating(){var e
return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!(null==(e=this.updatingHandles)||!e.updating))}get visibleAtCurrentScale(){return this.isVisibleAtScale(this.view.scale)}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.detach(),this.updateRequested=!1)}isVisibleAtScale(e){const t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null
if(!t)return!0
const{minScale:i,maxScale:r}=t
return(0===i||e<=i)&&(0===r||e>=r)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}hitTest(e,t){return Promise.resolve(null)}supportsSpatialReference(e){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const e=super.getSuspendInfo(),t=!this.spatialReferenceSupported,i=this.visibleAtCurrentScale
return t&&(e.spatialReferenceNotSupported=t),i&&(e.outsideScaleRange=i),e}}
return Object(r.a)([Object(o.b)()],t.prototype,"attached",void 0),Object(r.a)([Object(o.b)({type:R,set(e){const t=Object(n.b)(e,this._get("clips"),R)
this._set("clips",t)}})],t.prototype,"clips",void 0),Object(r.a)([Object(o.b)()],t.prototype,"container",void 0),Object(r.a)([Object(o.b)()],t.prototype,"moving",void 0),Object(r.a)([Object(o.b)({readOnly:!0})],t.prototype,"spatialReferenceSupported",null),Object(r.a)([Object(o.b)({readOnly:!0})],t.prototype,"updateParameters",void 0),Object(r.a)([Object(o.b)()],t.prototype,"updateRequested",void 0),Object(r.a)([Object(o.b)()],t.prototype,"updating",null),Object(r.a)([Object(o.b)()],t.prototype,"view",void 0),Object(r.a)([Object(o.b)({readOnly:!0})],t.prototype,"visibleAtCurrentScale",null),t=Object(r.a)([Object(u.a)("esri.views.2d.layers.LayerView2D")],t),t}},1379:function(e,t,i){"use strict"
i.d(t,"a",(function(){return d})),i.d(t,"b",(function(){return r}))
const r={Base64:0,Hex:1,String:2,Raw:3}
function s(e,t){const i=(65535&e)+(65535&t)
return(e>>16)+(t>>16)+(i>>16)<<16|65535&i}function n(e,t,i,r,n,a){return s(function(e,t){return e<<t|e>>>32-t}(s(s(t,e),s(r,a)),n),i)}function a(e,t,i,r,s,a,l){return n(t&i|~t&r,e,t,s,a,l)}function l(e,t,i,r,s,a,l){return n(t&r|i&~r,e,t,s,a,l)}function o(e,t,i,r,s,a,l){return n(t^i^r,e,t,s,a,l)}function u(e,t,i,r,s,a,l){return n(i^(t|~r),e,t,s,a,l)}function c(e,t){e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t
let i=1732584193,r=-271733879,n=-1732584194,c=271733878
for(let t=0;t<e.length;t+=16){const d=i,p=r,h=n,f=c
i=a(i,r,n,c,e[t+0],7,-680876936),c=a(c,i,r,n,e[t+1],12,-389564586),n=a(n,c,i,r,e[t+2],17,606105819),r=a(r,n,c,i,e[t+3],22,-1044525330),i=a(i,r,n,c,e[t+4],7,-176418897),c=a(c,i,r,n,e[t+5],12,1200080426),n=a(n,c,i,r,e[t+6],17,-1473231341),r=a(r,n,c,i,e[t+7],22,-45705983),i=a(i,r,n,c,e[t+8],7,1770035416),c=a(c,i,r,n,e[t+9],12,-1958414417),n=a(n,c,i,r,e[t+10],17,-42063),r=a(r,n,c,i,e[t+11],22,-1990404162),i=a(i,r,n,c,e[t+12],7,1804603682),c=a(c,i,r,n,e[t+13],12,-40341101),n=a(n,c,i,r,e[t+14],17,-1502002290),r=a(r,n,c,i,e[t+15],22,1236535329),i=l(i,r,n,c,e[t+1],5,-165796510),c=l(c,i,r,n,e[t+6],9,-1069501632),n=l(n,c,i,r,e[t+11],14,643717713),r=l(r,n,c,i,e[t+0],20,-373897302),i=l(i,r,n,c,e[t+5],5,-701558691),c=l(c,i,r,n,e[t+10],9,38016083),n=l(n,c,i,r,e[t+15],14,-660478335),r=l(r,n,c,i,e[t+4],20,-405537848),i=l(i,r,n,c,e[t+9],5,568446438),c=l(c,i,r,n,e[t+14],9,-1019803690),n=l(n,c,i,r,e[t+3],14,-187363961),r=l(r,n,c,i,e[t+8],20,1163531501),i=l(i,r,n,c,e[t+13],5,-1444681467),c=l(c,i,r,n,e[t+2],9,-51403784),n=l(n,c,i,r,e[t+7],14,1735328473),r=l(r,n,c,i,e[t+12],20,-1926607734),i=o(i,r,n,c,e[t+5],4,-378558),c=o(c,i,r,n,e[t+8],11,-2022574463),n=o(n,c,i,r,e[t+11],16,1839030562),r=o(r,n,c,i,e[t+14],23,-35309556),i=o(i,r,n,c,e[t+1],4,-1530992060),c=o(c,i,r,n,e[t+4],11,1272893353),n=o(n,c,i,r,e[t+7],16,-155497632),r=o(r,n,c,i,e[t+10],23,-1094730640),i=o(i,r,n,c,e[t+13],4,681279174),c=o(c,i,r,n,e[t+0],11,-358537222),n=o(n,c,i,r,e[t+3],16,-722521979),r=o(r,n,c,i,e[t+6],23,76029189),i=o(i,r,n,c,e[t+9],4,-640364487),c=o(c,i,r,n,e[t+12],11,-421815835),n=o(n,c,i,r,e[t+15],16,530742520),r=o(r,n,c,i,e[t+2],23,-995338651),i=u(i,r,n,c,e[t+0],6,-198630844),c=u(c,i,r,n,e[t+7],10,1126891415),n=u(n,c,i,r,e[t+14],15,-1416354905),r=u(r,n,c,i,e[t+5],21,-57434055),i=u(i,r,n,c,e[t+12],6,1700485571),c=u(c,i,r,n,e[t+3],10,-1894986606),n=u(n,c,i,r,e[t+10],15,-1051523),r=u(r,n,c,i,e[t+1],21,-2054922799),i=u(i,r,n,c,e[t+8],6,1873313359),c=u(c,i,r,n,e[t+15],10,-30611744),n=u(n,c,i,r,e[t+6],15,-1560198380),r=u(r,n,c,i,e[t+13],21,1309151649),i=u(i,r,n,c,e[t+4],6,-145523070),c=u(c,i,r,n,e[t+11],10,-1120210379),n=u(n,c,i,r,e[t+2],15,718787259),r=u(r,n,c,i,e[t+9],21,-343485551),i=s(i,d),r=s(r,p),n=s(n,h),c=s(c,f)}return[i,r,n,c]}function d(e,t=r.Hex){const i=t||r.Base64,s=c(function(e){const t=[]
for(let i=0,r=8*e.length;i<r;i+=8)t[i>>5]|=(255&e.charCodeAt(i/8))<<i%32
return t}(e),8*e.length)
switch(i){case r.Raw:return s
case r.Hex:return function(e){const t="0123456789abcdef",i=[]
for(let r=0,s=4*e.length;r<s;r++)i.push(t.charAt(e[r>>2]>>r%4*8+4&15)+t.charAt(e[r>>2]>>r%4*8&15))
return i.join("")}(s)
case r.String:return function(e){const t=[]
for(let i=0,r=32*e.length;i<r;i+=8)t.push(String.fromCharCode(e[i>>5]>>>i%32&255))
return t.join("")}(s)
case r.Base64:return function(e){const t=[]
for(let i=0,r=4*e.length;i<r;i+=3){const r=(e[i>>2]>>i%4*8&255)<<16|(e[i+1>>2]>>(i+1)%4*8&255)<<8|e[i+2>>2]>>(i+2)%4*8&255
for(let s=0;s<4;s++)8*i+6*s>32*e.length?t.push("="):t.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(r>>6*(3-s)&63))}return t.join("")}(s)}}},1406:function(e,t,i){"use strict"
i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return s}))
const r=new(i(863).a)({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch",mesh:"mesh"})
function s(e){return r.toJSON(e)}function n(e){const{bandCount:t,attributeTable:i,colormap:r,pixelType:s}=e.rasterInfo
return 1===t&&(null!=i||null!=r||"u8"===s||"s8"===s)}},1464:function(e,t,i){"use strict"
i.d(t,"a",(function(){return a})),i.d(t,"b",(function(){return l}))
var r=i(177),s=i(876)
const n=r.a.getLogger("esri.renderers.visualVariables.support.utils"),a=e=>{if(!("visualVariables"in e)||!e.visualVariables||!e.visualVariables.length)return e
const t=e.clone(),i=t.visualVariables.map(e=>o(e)?u(e):e)
return t.visualVariables=i,t}
function l(e){return e.map(e=>o(e)?u(e.clone()):e)}function o(e){return("size"===e.type||"color"===e.type||"opacity"===e.type)&&null!=e.stops}function u(e){return e.stops=function(e,t){return t.length<=8?t:(n.warn(`Found ${t.length} Visual Variable stops, but MapView only supports 8. Displayed stops will be simplified.`),t.length>16?function(e,t){const[i,...r]=t,n=r.pop(),a=r[0].value,l=r[r.length-1].value,o=(l-a)/6,u=[]
for(let i=a;i<l;i+=o){let n=0
for(;i>=r[n].value;)n++
const a=r[n],l=t[n-1],o=i-l.value,d=a.value===l.value?1:o/(a.value-l.value)
if("color"===e){const e=r[n],s=t[n-1],a=e.color.clone()
a.r=c(s.color.r,a.r,d),a.g=c(s.color.g,a.g,d),a.b=c(s.color.b,a.b,d),a.a=c(s.color.a,a.a,d),u.push({value:i,color:a,label:e.label})}else if("size"===e){const e=r[n],a=t[n-1],l=Object(s.k)(e.size),o=c(Object(s.k)(a.size),l,d)
u.push({value:i,size:o,label:e.label})}else{const e=r[n],s=c(t[n-1].opacity,e.opacity,d)
u.push({value:i,opacity:s,label:e.label})}}return[i,...u,n]}(e,t):function(e){const[t,...i]=e,r=i.pop()
for(;i.length>6;){let e=0,t=0
for(let r=1;r<i.length;r++){const s=i[r-1],n=i[r],a=Math.abs(n.value-s.value)
a>t&&(t=a,e=r)}i.splice(e,1)}return[t,...i,r]}(t))}(e.type,e.stops),e}function c(e,t,i){return(1-i)*e+i*t}},1467:function(e,t,i){"use strict"
i.d(t,"a",(function(){return w})),i.d(t,"b",(function(){return O})),i.d(t,"c",(function(){return j})),i.d(t,"d",(function(){return x}))
var r,s=i(354),n=i(77),a=i(177),l=i(20),o=i(1379),u=i(1085),c=i(1233),d=i(856),p=i(178),h=i(858),f=(i(859),i(857)),y=i(864),b=i(1019)
let g=r=class extends u.a{writeLevels(e,t,i){for(const i in e){const e=this.levels[i]
return void(t.stops=e)}}clone(){return new r({axis:this.axis,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,maxDataValue:this.maxDataValue,maxSize:Object(b.e)(this.maxSize)?this.maxSize.clone():this.maxSize,minDataValue:this.minDataValue,minSize:Object(b.e)(this.minSize)?this.minSize.clone():this.minSize,normalizationField:this.normalizationField,stops:this.stops&&this.stops.map(e=>e.clone()),target:this.target,useSymbolValue:this.useSymbolValue,valueRepresentation:this.valueRepresentation,valueUnit:this.valueUnit,legendOptions:this.legendOptions&&this.legendOptions.clone(),levels:Object(p.a)(this.levels)})}}
Object(d.a)([Object(h.b)()],g.prototype,"levels",void 0),Object(d.a)([Object(y.a)("levels")],g.prototype,"writeLevels",null),g=r=Object(d.a)([Object(f.a)("esri.views.2d.engine.LevelDependentSizeVariable")],g)
const m=a.a.getLogger("esri.views.2d.layers.support.clusterUtils")
n.a.add("esri-cluster-arcade-enabled",!0)
const v=Object(n.a)("esri-cluster-arcade-enabled"),O=(e,t,i,r)=>{const s=t.clone()
if(!x(s))return s
if(i.fields)for(const t of i.fields)S(e,t)
if("visualVariables"in s){const t=(s.visualVariables||[]).filter(e=>"$view.scale"!==e.valueExpression),n=j(t)
t.forEach(t=>{"rotation"===t.type?t.field?t.field=R(e,t.field,"avg_angle"):t.valueExpression&&(t.field=E(e,t.valueExpression,"avg_angle"),t.valueExpression=null):t.normalizationField?(t.field=R(e,t.field,"norm",t.normalizationField),t.normalizationField=null):t.field?t.field=R(e,t.field,"avg"):(t.field=E(e,t.valueExpression,"avg"),t.valueExpression=null)}),Object(l.j)(n)&&!_(t)&&(t.push(w(i,r)),s.dynamicClusterSize=!0),s.visualVariables=t}switch(s.type){case"simple":break
case"unique-value":s.field?s.field=R(e,s.field,"mode"):s.valueExpression&&(s.field=E(e,s.valueExpression,"mode"),s.valueExpression=null)
break
case"class-breaks":s.normalizationField?(s.field=R(e,s.field,"norm",s.normalizationField),s.normalizationField=null):s.field?s.field=R(e,s.field,"avg"):(s.field=E(e,s.valueExpression,"avg"),s.valueExpression=null)}return s},j=e=>{for(const t of e)if("size"===t.type)return t
return null},_=e=>{for(const t of e)if("cluster_count"===t.field)return!0
return!1},w=(e,t)=>{const i=[new c.a({value:0,size:0}),new c.a({value:1})]
if(Object(l.j)(t))return new u.a({field:"cluster_count",stops:[...i,new c.a({value:2,size:0})]})
const r=Object.keys(t).reduce((r,s)=>({...r,[s]:[...i,new c.a({value:Math.max(2,t[s].minValue),size:e.clusterMinSize}),new c.a({value:Math.max(3,t[s].maxValue),size:e.clusterMaxSize})]}),{})
return new g({field:"cluster_count",levels:r})},x=e=>{const t=t=>m.error(new s.a("Unsupported-renderer",t,{renderer:e}))
if("unique-value"===e.type){if(e.field2||e.field3)return t("FeatureReductionCluster does not support multi-field UniqueValueRenderers"),!1}else if("class-breaks"===e.type){if(e.normalizationField){const i=e.normalizationType
if("field"!==i)return t("FeatureReductionCluster does not support a normalizationType of "+i),!1}}else if("simple"!==e.type)return t("FeatureReductionCluster does not support renderers of type "+e.type),!1
if(!v){if("valueExpression"in e&&e.valueExpression)return t("FeatureReductionCluster does not currently support renderer.valueExpression. Support will be added in a future release"),!1
if(("visualVariables"in e&&e.visualVariables||[]).some(e=>!(!("valueExpression"in e)||!e.valueExpression)))return t("FeatureReductionCluster does not currently support visualVariables with a valueExpression. Support will be added in a future release"),!1}return!0}
function S(e,t){const{name:i,outStatistic:r}=t,{onStatisticField:n,onStatisticValueExpression:a,statisticType:l}=r
if(a){const t=Object(o.a)(a.toLowerCase())
e.push({name:i,outStatistic:{onStatisticField:t,onStatisticValueExpression:a,statisticType:l}})}else n?e.push({name:i,outStatistic:{onStatisticField:n,statisticType:l}}):m.error(new s.a("mapview-unsupported-field","Unable to handle field",{field:t}))}function E(e,t,i){const r=Object(o.a)(t),s="mode"===i?"cluster_type_"+r:"cluster_avg_"+r
return e.some(e=>e.name===s)||e.push({name:s,outStatistic:{onStatisticField:r,onStatisticValueExpression:t,statisticType:i}}),s}function R(e,t,i,r){if("cluster_count"===t||e.some(e=>e.name===t))return t
const s=function(e,t,i){switch(e){case"avg":case"avg_angle":return"cluster_avg_"+t
case"mode":return"cluster_type_"+t
case"norm":{const e=i,r="field",s=t.toLowerCase()+",norm:"+r+","+e.toLowerCase()
return"cluster_avg_"+Object(o.a)(s)}}}(i,t,r)
return e.some(e=>e.name===s)||("norm"===i?e.push({name:s,outStatistic:{onStatisticField:t,onStatisticNormalizationField:r,statisticType:i}}):e.push({name:s,outStatistic:{onStatisticField:t,statisticType:i}})),s}},1498:function(e,t,i){"use strict"
i.d(t,"a",(function(){return q})),i.d(t,"b",(function(){return x})),i.d(t,"c",(function(){return _}))
var r=i(354),s=i(77),n=i(178),a=i(177),l=i(20),o=i(876),u=i(942),c=i(908),d=i(1303),p=i(1120),h=(i(1179),i(1367)),f=i(891)
function y(e,t){return Math.max(e,t)}i(1168),i(1160),f.f.metrics,new h.a(0,0,24,24)
var b=i(1464),g=i(1467),m=i(1406)
const v=a.a.getLogger("esri.views.2d.layers.features.schemaUtils"),O="ValidationError",j={esriGeometryPoint:["above-right","above-center","above-left","center-center","center-left","center-right","below-center","below-left","below-right"],esriGeometryPolygon:["always-horizontal"],esriGeometryPolyline:["center-along"],esriGeometryMultipoint:null}
function _(e){let t=0,i=0,r=!1,s=!0,n=!0
if(Object(l.k)(e)){if(i=function(e){if(!("visualVariables"in e))return 0
if(!e.hasVisualVariables("size"))return 0
const t=e.getVisualVariablesForType("size")
if(!t[0])return 0
const i=t[0]
if("outline"===i.target)return 0
if("stops"===i.transformationType)return i.stops.map(e=>e.size).reduce(y,0)
if("clamped-linear"===i.transformationType){let e=-1/0,t=-1/0
return e="number"==typeof i.maxSize?i.maxSize:i.maxSize.stops.map(e=>e.size).reduce(y,0),t="number"==typeof i.minSize?i.minSize:i.minSize.stops.map(e=>e.size).reduce(y,0),Math.max(e,t)}return"real-world-size"===i.transformationType?30:void 0}(e),"visualVariables"in e&&(t=function(e){if(!e)return c.e.NONE
let t=0
for(const i of e)if("size"===i.type){const e=Object(d.a)(i)
t|=e,"outline"===i.target&&(t|=e<<4)}else"color"===i.type?t|=c.e.COLOR:"opacity"===i.type?t|=c.e.OPACITY:"rotation"===i.type&&(t|=c.e.ROTATION)
return t}(e.visualVariables||[]),r="dot-density"===e.type),"dictionary"===e.type)return{maxVVSize:i,supportsOutlineFills:!1,vvFlags:t,stride:{fill:"default"}}
if(!r){const t=e.getSymbols()
"backgroundFillSymbol"in e&&e.backgroundFillSymbol&&t.push(e.backgroundFillSymbol)
for(const e of t)if("cim"===e.type&&(s=!1),"simple-fill"===e.type||"picture-fill"===e.type){const t=e.outline
t&&"none"!==t.style&&"solid"!==t.style&&(n=!1)
const i=t&&"none"!==t.style&&"solid"!==t.style,r="simple-fill"===e.type&&"none"!==e.style&&"solid"!==e.style;("picture-fill"===e.type||r||i)&&(s=!1)}}}return r&&(n=!1),{vvFlags:t,maxVVSize:i,supportsOutlineFills:n,stride:{fill:r?"dot-density":s?"simple":"default"}}}function w(e,t){const i=Object(n.a)(e)
return i.some(e=>function(e,t){const i=e.labelPlacement,s=j[t]
if(!e.symbol)return v.warn("No ILabelClass symbol specified."),!0
if(!s)return v.error(new r.a("mapview-labeling:unsupported-geometry-type",`Unable to create labels for Feature Layer, ${t} is not supported`)),!0
if(!s.some(e=>e===i)){const r=s[0]
i&&v.warn(`Found invalid label placement type ${i} for ${t}. Defaulting to ${r}`),e.labelPlacement=r}return!1}(e,t))?[]:i}function x(e){return Object(s.a)("esri-2d-update-debug")&&console.debug("Created new schema",S(e,!0)),S(e)}function S(e,t=!1){try{var i,s
const n=function(e,t=!1){const i=new Array
return i.push(function(e,t,i=!1){const s={indexCount:0,fields:{}},n="featureReduction"in e&&e.featureReduction,a=n?"aggregate":"feature"
if("sublayers"in e){const t={type:"subtype",subtypeField:e.subtypeField,renderers:{},stride:{fill:"default"}},n={type:"subtype",mapping:{},target:"feature"},o={type:"subtype",classes:{}},u={type:"symbol",target:"feature",aggregateFields:[],attributes:s,storage:n,mesh:{matcher:t,aggregateMatcher:null,labels:o,sortKey:null}},c=new Set
let d=0
for(const{renderer:u,subtypeCode:p,labelingInfo:h,labelsVisible:f}of e.sublayers){const e=q(s,a,u,i),y=k(s,a,u),b=f&&h
if("visualVariables"in u&&u.visualVariables&&u.visualVariables.length)throw new r.a(O,"Visual variables are currently not supported for subtype layers")
if("dictionary"===e.type)throw new r.a(O,"Dictionary renderer is not supported in subtype layers")
if("subtype"===e.type)throw new r.a(O,"Nested subtype renderers is not supported")
if(Object(l.k)(y)&&"subtype"===y.type)throw new r.a(O,"Nested subtype storage is not supported")
if(Object(l.k)(y)&&"dot-density"===y.type)throw new r.a(O,"Dot density attributes are not supported in subtype layers")
if(c.has(p))throw new r.a(O,"Subtype codes for sublayers must be unique")
c.add(p),t.renderers[p]=e,n.mapping[p]=y,b&&(o.classes[p]=b.map(e=>T(u,s,e,"feature",d++,i)))}return u}if("heatmap"===e.renderer.type){const{blurRadius:t,fieldOffset:i,field:r}=e.renderer
return{type:"heatmap",aggregateFields:[],attributes:s,target:a,storage:null,mesh:{blurRadius:t,fieldOffset:i,field:I(s,{target:a,field:r,resultType:"numeric"}).field}}}{const t=[],o="aggregate"===a?Object(g.b)(t,e.renderer,n,null):e.renderer
!function(e,t){const i={mesh:!0,storage:!0}
for(const r of t){const{name:t,outStatistic:s}=r,{statisticType:n,onStatisticField:a}=s
let l=null,o=null,u=null
const c="numeric",d="feature"
"onStatisticValueExpression"in s?o=V(e,{type:"expression",target:d,valueExpression:s.onStatisticValueExpression,resultType:c}).fieldIndex:"onStatisticNormalizationField"in s?(l=V(e,{type:"field",target:d,field:a,resultType:c}).field,u=s.onStatisticNormalizationField):l=V(e,{type:"field",target:d,field:a,resultType:c}).field,V(e,{type:"statistic",target:"aggregate",name:t,context:i,inField:l,inNormalizationField:u,inFieldIndex:o,statisticType:n})}}(s,t)
const u=q(s,a,o,i)
let c=null
const d=k(s,a,o),h=Object(m.b)(e.geometryType)
let f=e.labelsVisible&&e.labelingInfo||[],y=[]
if(n){if("selection"===n.type)throw new r.a(O,"Mapview does not support `selection` reduction type",n)
if(n.symbol){const e=_(o)
c={type:"simple",symbol:Object(p.createSymbolSchema)(n.symbol,e,i),stride:e.stride}}y=n&&n.labelsVisible&&n.labelingInfo||[]}f=w(f,h),y=w(y,h)
let b=0
const j=[...f.map(e=>T(o,s,e,"feature",b++,i)),...y.map(e=>T(o,s,e,"aggregate",b++,i))],x=function(e,t){if(Object(l.j)(t)||!t.length)return null
t.length>1&&v.warn(`Layer rendering currently only supports ordering by 1 orderByInfo, but found ${t.length}. All but the first will be discarded`)
const i=t[0],s="ascending"===i.order?"asc":"desc"
return i.field?{field:i.field,order:s}:i.valueExpression?{fieldIndex:V(e,{type:"expression",target:"feature",valueExpression:i.valueExpression,resultType:"numeric"}).fieldIndex,order:s}:(v.error(new r.a(O,"Expected to find a field or valueExpression for OrderByInfo",i)),null)}(s,e.orderBy)
return{type:"symbol",target:a,attributes:s,aggregateFields:t,storage:d,mesh:{matcher:u,labels:{type:"simple",classes:j},aggregateMatcher:c,sortKey:x}}}}(e)),i}(e,t),a={}
return n.map(t=>function(e,t,i){switch(i.target){case"feature":return void F(e,R(t),i)
case"aggregate":{if(!("featureReduction"in t))return
const s=t.featureReduction
if("selection"===s.type)throw new r.a(O,"Mapview does not support `selection` reduction type",s)
return F(e,R(t),i),void function(e,t,i){e.aggregate||(e.aggregate={name:"aggregate",input:"feature",filters:null,attributes:{},params:{clusterRadius:Object(o.h)(t.clusterRadius/2),clusterPixelBuffer:64*Math.ceil(Object(o.h)(t.clusterMaxSize)/64),fields:i.aggregateFields}}),E(e.aggregate,i.attributes.fields)}(e,s,i)}}}(a,e,t)),{source:{definitionExpression:e.definitionExpression,fields:e.fields.map(e=>e.toJSON()),gdbVersion:e.gdbVersion,historicMoment:null==(i=e.historicMoment)?void 0:i.getTime(),outFields:e.availableFields,pixelBuffer:e.pixelBuffer,spatialReference:e.spatialReference.toJSON(),timeExtent:null==(s=e.timeExtent)?void 0:s.toJSON(),customParameters:e.customParameters},attributes:{fields:{},indexCount:0},processors:n,targets:a}}catch(e){if(e.fieldName===O)return v.error(e),null
throw e}}function E(e,t){for(const i in t){const r=t[i]
if(r.target!==e.name)continue
const s=e.attributes[i]
s?(s.context.mesh=s.context.mesh||r.context.mesh,s.context.storage=s.context.storage||r.context.storage):e.attributes[i]=r}return e}function R(e){var t,i,r,s,n
return[null!=(t=null==(i=Object(l.t)(e.filter))?void 0:i.toJSON())?t:null,null!=(r=null==(s=Object(l.t)(null==(n=Object(l.t)(e.featureEffect))?void 0:n.filter))?void 0:s.toJSON())?r:null]}function F(e,t,i){return e.feature||(e.feature={name:"feature",input:"source",filters:t,attributes:{}}),E(e.feature,i.attributes.fields),e}function I(e,t){return t.field?V(e,{...t,type:"field",field:t.field}):t.valueExpression?V(e,{...t,type:"expression",valueExpression:t.valueExpression}):{field:null,fieldIndex:null}}function V(e,t){switch(t.type){case"expression":{const i=t.valueExpression
if(!e.fields[i]){const r=e.indexCount++
e.fields[i]={...t,name:i,fieldIndex:r}}return{fieldIndex:e.fields[i].fieldIndex}}case"label-expression":{const i=JSON.stringify(t.label)
if(!e.fields[i]){const r=e.indexCount++
e.fields[i]={...t,name:i,fieldIndex:r}}return{fieldIndex:e.fields[i].fieldIndex}}case"field":{const i=t.field
return"aggregate"===t.target&&e.fields[i]||(e.fields[i]={...t,name:i}),{field:i}}case"statistic":return e.fields[t.name]={...t},{field:t.name}}}function T(e,t,i,r,s,n=!1){const a=V(t,{type:"label-expression",target:r,context:{mesh:!0},resultType:"string",label:{labelExpression:i.labelExpression,labelExpressionInfo:i.labelExpressionInfo?{expression:i.labelExpressionInfo.expression}:null,symbol:!!i.symbol,where:i.where}}),{fieldIndex:l}=a,o=_(e)
return{...Object(p.createSymbolSchema)(i,o,n),fieldIndex:l,target:r,index:s}}function k(e,t,i){switch(i.type){case"dot-density":return function(e,t,i){return i&&i.length?{type:"dot-density",mapping:i.map((i,r)=>{const{field:s,fieldIndex:n}=I(e,{valueExpression:i.valueExpression,field:i.field,resultType:"numeric",target:t})
return{binding:r,field:s,fieldIndex:n}}),target:t}:{type:"dot-density",mapping:[],target:t}}(e,t,i.attributes)
case"simple":case"class-breaks":case"unique-value":case"dictionary":return function(e,t,i){if(!i||!i.length)return{type:"visual-variable",mapping:[],target:t}
const r={storage:!0},s="numeric"
return{type:"visual-variable",mapping:Object(b.b)(i).map(i=>{var n
const a=Object(u.p)(i.type),{field:l,fieldIndex:o}=I(e,{target:t,valueExpression:i.valueExpression,field:i.field,context:r,resultType:s})
switch(i.type){case"size":return"$view.scale"===i.valueExpression?null:{type:"size",binding:a,field:l,fieldIndex:o,normalizationField:I(e,{target:t,field:i.normalizationField,context:r,resultType:s}).field,valueRepresentation:null!=(n=i.valueRepresentation)?n:null}
case"color":return{type:"color",binding:a,field:l,fieldIndex:o,normalizationField:I(e,{target:t,field:i.normalizationField,context:r,resultType:s}).field}
case"opacity":return{type:"opacity",binding:a,field:l,fieldIndex:o,normalizationField:I(e,{target:t,field:i.normalizationField,context:r,resultType:s}).field}
case"rotation":return{type:"rotation",binding:a,field:l,fieldIndex:o}}}).filter(e=>e),target:t}}(e,t,i.visualVariables)
case"heatmap":return null}}function q(e,t,i,s=!1){const n=Object(l.u)(e,{indexCount:0,fields:{}})
switch(i.type){case"simple":case"dot-density":return function(e,t,i=!1){const r=t.getSymbols(),s=r.length?r[0]:null,n=_(t)
return{type:"simple",symbol:Object(p.createSymbolSchema)(s,n,i),stride:n.stride}}(0,i,s)
case"class-breaks":return function(e,t,i,r=!1){const s=i.backgroundFillSymbol,{field:n,fieldIndex:a}=I(e,{target:t,field:i.field,valueExpression:i.valueExpression,resultType:"numeric",context:{mesh:!0,use:"renderer.field"}}),l=i.normalizationType,o="log"===l?"esriNormalizeByLog":"percent-of-total"===l?"esriNormalizeByPercentOfTotal":"field"===l?"esriNormalizeByField":null,u=_(i),c=i.classBreakInfos.map(e=>({symbol:Object(p.createSymbolSchema)(e.symbol,u,r),min:e.minValue,max:e.maxValue})).sort((e,t)=>e.min-t.min)
return{type:"interval",attributes:e.fields,field:n,fieldIndex:a,backgroundFillSymbol:Object(p.createSymbolSchema)(s,u,r),defaultSymbol:Object(p.createSymbolSchema)(i.defaultSymbol,u,r),intervals:c,normalizationField:i.normalizationField,normalizationTotal:i.normalizationTotal,normalizationType:o,isMaxInclusive:i.isMaxInclusive,stride:u.stride}}(n,t,i,s)
case"unique-value":return function(e,t,i,s=!1){const n=[],a=i.backgroundFillSymbol,l={target:t,context:{mesh:!0},resultType:"string"}
if(i.field&&"string"!=typeof i.field)throw new r.a(O,"Expected renderer.field to be a string",i)
const{field:o,fieldIndex:u}=I(e,{...l,field:i.field,valueExpression:i.valueExpression}),c=_(i)
for(const e of i.uniqueValueInfos)n.push({value:""+e.value,symbol:Object(p.createSymbolSchema)(e.symbol,c,s)})
return{type:"map",attributes:e.fields,field:o,fieldIndex:u,field2:I(e,{...l,field:i.field2}).field,field3:I(e,{...l,field:i.field3}).field,fieldDelimiter:i.fieldDelimiter,backgroundFillSymbol:Object(p.createSymbolSchema)(a,c),defaultSymbol:Object(p.createSymbolSchema)(i.defaultSymbol,c),map:n,stride:c.stride}}(n,t,i,s)
case"dictionary":return function(e,t,i=!1){const r=_(t)
return{type:"dictionary",config:t.config,fieldMap:t.fieldMap,scaleExpression:t.scaleExpression,url:t.url,symbolOptions:r,stride:r.stride}}(0,i,s)}}},1701:function(e,t,i){"use strict"
i.d(t,"a",(function(){return j}))
var r=i(856),s=i(996),n=i(354),a=i(177),l=i(20),o=i(861),u=i(898),c=i(858),d=(i(353),i(77),i(859),i(857)),p=i(933),h=i(1169),f=i(1136),y=i(881),b=i(918),g=i(907),m=i(1306),v=i(1078)
const O=a.a.getLogger("esri.views.layers.FeatureLayerView"),j=e=>{let t=class extends e{constructor(...e){super(...e),this._updatingRequiredFieldsPromise=null,this.filter=null,this.timeExtent=null,this.layer=null,this.requiredFields=[],this.view=null}initialize(){Object(u.a)(this,["layer.renderer","layer.labelingInfo","layer.elevationInfo.featureExpressionInfo","layer.displayField","filter","featureEffect","layer.timeInfo","layer.floorInfo","timeExtent"],()=>this._handleRequiredFieldsChange(),!0),Object(u.b)(this,"view.floors","change",()=>this._handleRequiredFieldsChange()),Object(u.b)(this,"layer.sublayer","change",()=>this._handleRequiredFieldsChange())}get availableFields(){const{layer:e,layer:{fieldsIndex:t},requiredFields:i}=this
return"outFields"in e&&e.outFields?Object(y.j)(t,[...Object(y.v)(t,e.outFields),...i]):Object(y.j)(t,i)}set effect(e){Object(s.c)(O,"effect",{replacement:"featureEffect",version:"4.22"}),this.featureEffect=e}get effect(){return Object(s.c)(O,"effect",{replacement:"featureEffect",version:"4.22"}),this.featureEffect}get featureEffect(){return this.layer&&"featureEffect"in this.layer?this.layer.featureEffect:null}set featureEffect(e){void 0!==e?this._override("featureEffect",e):this._clearOverride("featureEffect")}get maximumNumberOfFeatures(){return 0}set maximumNumberOfFeatures(e){O.error("#maximumNumberOfFeatures=","Setting maximum number of features is not supported")}get maximumNumberOfFeaturesExceeded(){return!1}highlight(e){throw new Error("missing implementation")}createQuery(){const e={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference},t=Object(l.k)(this.filter)?this.filter.createQuery(e):new b.a(e)
if("feature"===this.layer.type){const e=Object(v.b)(this)
Object(l.k)(e)&&(t.where=t.where?`(${t.where}) AND (${e})`:e)}return Object(l.k)(this.timeExtent)&&(t.timeExtent=Object(l.k)(t.timeExtent)?t.timeExtent.intersection(this.timeExtent):this.timeExtent.clone()),t}queryFeatures(e,t){throw new Error("missing implementation")}queryObjectIds(e,t){throw new Error("missing implementation")}queryFeatureCount(e,t){throw new Error("missing implementation")}queryExtent(e,t){throw new Error("missing implementation")}async fetchPopupFeatures(e,t){const i=this.validateFetchPopupFeatures(t)
if(i)throw i
return this.fetchClientPopupFeatures(t)}_loadArcadeModules(e){if(e.get("expressionInfos.length")||Array.isArray(e.content)&&e.content.some(e=>"expression"===e.type))return Object(g.e)()}_handleRequiredFieldsChange(){const e=this._updateRequiredFields()
this._set("_updatingRequiredFieldsPromise",e),e.then(()=>{this._updatingRequiredFieldsPromise===e&&this._set("_updatingRequiredFieldsPromise",null)})}async _updateRequiredFields(){if(!this.layer||!this.view)return
const e="3d"===this.view.type,{layer:t,layer:{fieldsIndex:i,objectIdField:r}}=this,s="renderer"in t&&t.renderer,n="orderBy"in t&&t.orderBy,a=t.featureReduction,u=new Set,c=await Object(o.j)([s?s.collectRequiredFields(u,i):null,Object(y.g)(u,t),e?Object(y.b)(u,t):null,Object(l.k)(this.filter)?Object(y.f)(u,t,this.filter):null,Object(l.k)(this.featureEffect)?Object(y.f)(u,t,this.featureEffect.filter):null,a?Object(y.c)(u,t,a):null,n?Object(y.h)(u,t,n):null])
if(t.timeInfo&&this.timeExtent&&Object(y.e)(u,t.fieldsIndex,[t.timeInfo.startField,t.timeInfo.endField]),"feature"===t.type&&t.floorInfo&&Object(y.e)(u,t.fieldsIndex,[t.floorInfo.floorField]),"subtype-group"===t.type){Object(y.d)(u,i,t.subtypeField)
const e=t.sublayers.map(e=>{var t
return Promise.all([null==(t=e.renderer)?void 0:t.collectRequiredFields(u,i),Object(y.g)(u,e)])})
await Object(o.j)(e)}for(const e of c)e.error&&O.error(e.error)
Object(y.d)(u,i,r),e&&"displayField"in t&&t.displayField&&Object(y.d)(u,i,t.displayField)
const d=Array.from(u).sort()
this._set("requiredFields",d)}validateFetchPopupFeatures(e){if(Object(l.j)(e))return null
for(const t of e.clientGraphics){const i=t.layer
if("popupEnabled"in i&&!i.popupEnabled)return new n.a("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:i})
if("popupTemplate"in i&&!Object(m.a)(i,e))return new n.a("featurelayerview:fetchPopupFeatures","Layer does not define a popup template",{layer:i})
if(t.isAggregate&&!(i.featureReduction&&"popupTemplate"in i.featureReduction&&i.featureReduction.popupEnabled&&i.featureReduction.popupTemplate))return new n.a("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:i})}}async fetchClientPopupFeatures(e){const t=Object(l.k)(e)?e.clientGraphics:null
if(!t||0===t.length)return[]
const i=new Array(t.length),r=new Map,s=await this.createPopupQuery(e)
for(let n=0;n<t.length;n++){const a=t[n]
if(a.isAggregate){i[n]=a
continue}const{layer:o}=a
if(!("popupEnabled"in o))continue
const u=Object(y.v)(this.layer.fieldsIndex,s.outFields),c=Object(m.a)(o,e)
if(!Object(l.k)(c))continue
const d=await this._loadArcadeModules(c)
d&&d.arcadeUtils.hasGeometryOperations(c)||!Object(y.i)(u,a)?r.set(a.getObjectId(),n):i[n]=a}if("stream"===this.layer.type||0===r.size)return i.filter(Boolean)
s.objectIds=Array.from(r.keys())
try{const e=await this.layer.queryFeatures(s)
for(const t of e.features)i[r.get(t.getObjectId())]=t}catch{}return i.filter(Boolean)}async createPopupQuery(e){const t=this.layer.createQuery(),i=new Set
let r=!1
const s=Object(l.k)(e)&&e.clientGraphics?e.clientGraphics.map(e=>e.layer):[this.layer]
for(const t of s){if(!("popupEnabled"in t))continue
const s=Object(m.a)(t,e)
if(!Object(l.k)(s))continue
const n=await this._loadArcadeModules(s),a=n&&n.arcadeUtils.hasGeometryOperations(s)
r=!("point"!==this.layer.geometryType&&!a)
const o=await Object(m.b)(this.layer,s)
for(const e of o)i.add(e)}if(t.returnGeometry=r,t.returnZ=r,t.returnM=r,t.outFields=Array.from(i),t.outSpatialReference=this.view.spatialReference,"feature"===this.layer.type){const e=Object(v.b)(this)
Object(l.k)(e)&&(t.where=t.where?`(${t.where}) AND (${e})`:e)}return t}canResume(){return!(!super.canResume()||Object(l.k)(this.timeExtent)&&this.timeExtent.isEmpty)}}
return Object(r.a)([Object(c.b)()],t.prototype,"_updatingRequiredFieldsPromise",void 0),Object(r.a)([Object(c.b)({readOnly:!0})],t.prototype,"availableFields",null),Object(r.a)([Object(c.b)()],t.prototype,"effect",null),Object(r.a)([Object(c.b)({type:h.a})],t.prototype,"featureEffect",null),Object(r.a)([Object(c.b)({type:f.a})],t.prototype,"filter",void 0),Object(r.a)([Object(c.b)(p.a)],t.prototype,"timeExtent",void 0),Object(r.a)([Object(c.b)()],t.prototype,"layer",void 0),Object(r.a)([Object(c.b)({type:Number})],t.prototype,"maximumNumberOfFeatures",null),Object(r.a)([Object(c.b)({readOnly:!0,type:Boolean})],t.prototype,"maximumNumberOfFeaturesExceeded",null),Object(r.a)([Object(c.b)({readOnly:!0})],t.prototype,"requiredFields",void 0),Object(r.a)([Object(c.b)()],t.prototype,"suspended",void 0),Object(r.a)([Object(c.b)()],t.prototype,"view",void 0),t=Object(r.a)([Object(d.a)("esri.views.layers.FeatureLayerView")],t),t}},2194:function(e,t,i){"use strict"
i.r(t),i.d(t,"default",(function(){return Z}))
var r=i(856),s=i(663),n=i(858),a=(i(353),i(77)),l=(i(859),i(857))
let o=class extends s.default{constructor(){super(...arguments),this.isAggregate=!0}getEffectivePopupTemplate(e=!1){if(this.popupTemplate)return this.popupTemplate
const t=this.sourceLayer&&this.sourceLayer.featureReduction
return t&&"popupTemplate"in t&&t.popupEnabled?t.popupTemplate:null}getObjectId(){return this.objectId}}
Object(r.a)([Object(n.b)({type:Boolean})],o.prototype,"isAggregate",void 0),Object(r.a)([Object(n.b)({type:Number,json:{read:!0}})],o.prototype,"objectId",void 0),o=Object(r.a)([Object(l.a)("esri.AggregateGraphic")],o)
const u=o
i(870)
var c=i(878),d=i(354),p=i(178),h=i(177),f=i(20),y=i(861),b=i(892),g=i(862),m=i(1926)
let v=class extends g.a{constructor(e){super(e),this._filter=null,this.duration=Object(a.a)("mapview-transitions-duration"),this._excludedEffectView=new m.a(e),this._includedEffectView=new m.a(e)}get excludedEffects(){return this._excludedEffectView.effects}set featureEffect(e){this._get("featureEffect")!==e&&this._transitionTo(e)}get filter(){var e
return this._filter||(null==(e=Object(f.t)(this.featureEffect))?void 0:e.filter)||null}get hasEffects(){return this._excludedEffectView.hasEffects||this._includedEffectView.hasEffects}get includedEffects(){return this._includedEffectView.effects}set scale(e){this._set("scale",e),this._excludedEffectView.scale=e,this._includedEffectView.scale=e}get transitioning(){return this._excludedEffectView.transitioning||this._includedEffectView.transitioning}transitionStep(e,t){this._set("scale",t),this.transitioning?(this._includedEffectView.transitionStep(e,t),this._excludedEffectView.transitionStep(e,t),this.transitioning||(this._filter=null)):(this._excludedEffectView.scale=t,this._includedEffectView.scale=t)}end(){this._includedEffectView.end(),this._excludedEffectView.end(),this._filter=null}_transitionTo(e){const t=this._get("featureEffect"),i=Object(f.t)(e),r=Object(f.t)(null==i?void 0:i.includedEffect),s=Object(f.t)(null==i?void 0:i.excludedEffect),n=this._includedEffectView.canTransitionTo(r)&&this._excludedEffectView.canTransitionTo(s)
this._includedEffectView.effect=r,this._excludedEffectView.effect=s,this._set("featureEffect",i),this._filter=(null==i?void 0:i.filter)||(null==t?void 0:t.filter)||null,n||this.end()}}
Object(r.a)([Object(n.b)()],v.prototype,"_filter",void 0),Object(r.a)([Object(n.b)()],v.prototype,"_excludedEffectView",void 0),Object(r.a)([Object(n.b)()],v.prototype,"_includedEffectView",void 0),Object(r.a)([Object(n.b)()],v.prototype,"duration",void 0),Object(r.a)([Object(n.b)()],v.prototype,"excludedEffects",null),Object(r.a)([Object(n.b)()],v.prototype,"featureEffect",null),Object(r.a)([Object(n.b)()],v.prototype,"filter",null),Object(r.a)([Object(n.b)()],v.prototype,"hasEffects",null),Object(r.a)([Object(n.b)()],v.prototype,"includedEffects",null),Object(r.a)([Object(n.b)({value:0})],v.prototype,"scale",null),Object(r.a)([Object(n.b)()],v.prototype,"transitioning",null),v=Object(r.a)([Object(l.a)("esri.layers.effects.FeatureEffectView")],v)
const O=v
var j=i(1136),_=i(947),w=i(918),x=i(891),S=i(1331),E=i(1498),R=i(1467),F=i(1503)
function I(e){return e.some(e=>e.globalId)}function V(e){return e.filter(e=>!e.error).map(e=>{var t
return null!=(t=e.objectId)?t:e.globalId})}function T(e,t){const i=new Set(e)
for(const e of t.values())i.add(e)
return i}function k(e,t){const i=new Set(e)
for(const e of t.values())i.delete(e)
return i}let q=class extends g.a{constructor(e){super(e),this._hasGlobalIds=!1}normalizeCtorArgs(e){return this._queueProcessor=new F.a({concurrency:1,process:e.process}),{}}destroy(){this.clear()}get updating(){return this._queueProcessor.length>0}clear(){this._queueProcessor.clear()}push(e){const t=this._queueProcessor,i=t.last()
switch(e.type){case"update":case"refresh":if((null==i?void 0:i.type)===e.type)return
t.push(e).finally(()=>this.notifyChange("updating"))
break
case"edit":{const r="processed-edit"===(null==i?void 0:i.type)?i:null
r&&t.popLast()
const s=this._mergeEdits(r,e)
for(const e of s)t.push(e).finally(()=>this.notifyChange("updating"))
break}}this.notifyChange("updating")}_mergeEdits(e,t){var i,r
const{addedFeatures:s,deletedFeatures:n,updatedFeatures:a}=t.edits
if(this._hasGlobalIds=this._hasGlobalIds||I(s)||I(a)||I(n),this._hasGlobalIds)return[e,{type:"processed-edit",edits:{addOrModified:[...s,...a],removed:n}}]
const l=new Set(V(null!=(i=null==e?void 0:e.edits.addOrModified)?i:[])),o=new Set(V(null!=(r=null==e?void 0:e.edits.removed)?r:[])),u=new Set([...V(s),...V(a)]),c=new Set(V(n))
return[{type:"processed-edit",edits:{addOrModified:Array.from(T(k(l,c),u)).map(e=>({objectId:e})),removed:Array.from(T(k(o,u),c)).map(e=>({objectId:e}))}}]}}
Object(r.a)([Object(n.b)({readOnly:!0})],q.prototype,"updating",null),q=Object(r.a)([Object(l.a)("esri.views.2d.layers.support.FeatureCommandQueue")],q)
const z=q
var C=i(959),P=i(1097)
let U=class extends C.a{constructor(e){super(e),this._startupResolver=Object(y.g)(),this.isReady=!1}initialize(){this._controller=new AbortController,this.addResolvingPromise(this._startWorker(this._controller.signal))}destroy(){this._controller.abort(),this._connection&&this._connection.close()}set tileRenderer(e){this.client.tileRenderer=e}get closed(){return this._connection.closed}async startup(e,t,i,r){await this.when()
const s=this._controller.signal,n=function(e){return Array.isArray(e)}(i.source)?{transferList:i.source,signal:s}:void 0,a={service:i,config:t,tileInfo:e.tileInfo.toJSON(),tiles:r}
await this._connection.invoke("startup",a,n),this._startupResolver.resolve(),this._set("isReady",!0)}async updateTiles(e){return await this._startupResolver.promise,Object(y.l)(this._connection.invoke("updateTiles",e))}async update(e){const t={config:e}
return await this._startupResolver.promise,this._connection.invoke("update",t)}async applyUpdate(e){return await this._startupResolver.promise,this._connection.invoke("applyUpdate",e)}async setHighlight(e){return await this._startupResolver.promise,Object(y.l)(this._connection.invoke("controller.setHighlight",e))}async stop(){if(await this._startupResolver.promise,!this.closed)return Object(y.l)(this._connection.invoke("stop"))}async refresh(e){return await this._startupResolver.promise,Object(y.l)(this._connection.invoke("controller.refresh",e))}async querySummaryStatistics(e,t,i){return await this._startupResolver.promise,this._connection.invoke("controller.querySummaryStatistics",{query:e.toJSON(),params:t},i)}async queryUniqueValues(e,t,i){return await this._startupResolver.promise,this._connection.invoke("controller.queryUniqueValues",{query:e.toJSON(),params:t},i)}async queryClassBreaks(e,t,i){return await this._startupResolver.promise,this._connection.invoke("controller.queryClassBreaks",{query:e.toJSON(),params:t},i)}async queryHistogram(e,t,i){return await this._startupResolver.promise,this._connection.invoke("controller.queryHistogram",{query:e.toJSON(),params:t},i)}async queryFeatures(e,t){return await this._startupResolver.promise,this._connection.invoke("controller.queryFeatures",e.toJSON(),t)}async queryVisibleFeatures(e,t){return await this._startupResolver.promise,this._connection.invoke("controller.queryVisibleFeatures",e.toJSON(),t)}async queryObjectIds(e,t){return await this._startupResolver.promise,this._connection.invoke("controller.queryObjectIds",e.toJSON(),t)}async queryFeatureCount(e,t){return await this._startupResolver.promise,this._connection.invoke("controller.queryFeatureCount",e.toJSON(),t)}async queryExtent(e,t){return this._connection.invoke("controller.queryExtent",e.toJSON(),t)}async queryLatestObservations(e,t){return await this._startupResolver.promise,this._connection.invoke("controller.queryLatestObservations",e.toJSON(),t)}async queryStatistics(e){return await this._startupResolver.promise,this._connection.invoke("controller.queryStatistics",e)}async getObjectId(e){return await this._startupResolver.promise,this._connection.invoke("controller.getObjectId",e)}async getDisplayId(e){return await this._startupResolver.promise,this._connection.invoke("controller.getDisplayId",e)}async getFeatures(e){return await this._startupResolver.promise,this._connection.invoke("controller.getFeatures",e)}async getAggregates(){return await this._startupResolver.promise,this._connection.invoke("controller.getAggregates")}async getAggregateValueRanges(){return await this._startupResolver.promise,this._connection.invoke("controller.getAggregateValueRanges")}async mapValidDisplayIds(e){return await this._startupResolver.promise,this._connection.invoke("controller.mapValidDisplayIds",e)}async onEdits(e){return await this._startupResolver.promise,Object(y.l)(this._connection.invoke("controller.onEdits",e))}async enableEvent(e,t){return await this._startupResolver.promise,Object(y.l)(this._connection.invoke("controller.enableEvent",{name:e,value:t}))}pauseStream(){return Object(y.l)(this._connection.invoke("controller.pauseStream"))}resumeStream(){return Object(y.l)(this._connection.invoke("controller.resumeStream"))}async _startWorker(e){try{this._connection=await Object(P.b)("Pipeline",{client:this.client,strategy:"dedicated",signal:e})}catch(e){Object(y.w)(e)}}}
Object(r.a)([Object(n.b)()],U.prototype,"isReady",void 0),Object(r.a)([Object(n.b)()],U.prototype,"client",void 0),Object(r.a)([Object(n.b)()],U.prototype,"tileRenderer",null),U=Object(r.a)([Object(l.a)("esri.views.2d.layers.support.FeatureLayerProxy")],U)
const N=U
var A=i(1406),M=i(1436),L=i(1059)
class J{constructor(e){this._tiles=new Map,this.buffer=0,this.acquireTile=e.acquireTile,this.releaseTile=e.releaseTile,this.tileInfoView=e.tileInfoView,this.buffer=e.buffer}destroy(){}clear(){this._tiles.forEach(e=>this._releaseTile(e))}tileKeys(){const e=[]
return this._tiles.forEach((t,i)=>e.push(i)),e}update(e){const t=this.tileInfoView.getTileCoverage(e.state,this.buffer,"closest"),{spans:i,lodInfo:r}=t,{level:s}=r,n=[],a=[],l=new Set,o=new Set
for(const{row:e,colFrom:t,colTo:a}of i)for(let i=t;i<=a;i++){const t=L.a.getId(s,e,r.normalizeCol(i),r.getWorldForColumn(i)),a=this._getOrAcquireTile(n,t)
l.add(t),a.isReady?a.visible=!0:o.add(a.key)}return o.forEach(e=>this._addPlaceholders(l,e)),this._tiles.forEach(e=>{l.has(e.key.id)||(a.push(e.key.id),this._releaseTile(e))}),M.a.pool.release(t),{hasMissingTiles:o.size>0,added:n,removed:a}}_getOrAcquireTile(e,t){if(!this._tiles.has(t)){const i=this.acquireTile(new L.a(t))
e.push(t),this._tiles.set(t,i),i.visible=!1}return this._tiles.get(t)}_getTile(e){return this._tiles.get(e)}_releaseTile(e){this._tiles.delete(e.key.id),this.releaseTile(e)}_addPlaceholders(e,t){const i=this._addPlaceholderChildren(e,t)
Math.abs(1-i)<1e-6||this._addPlaceholderParent(e,t)||(this._getTile(t.id).visible=!0)}_addPlaceholderChildren(e,t){let i=0
return this._tiles.forEach(r=>{i+=this._addPlaceholderChild(e,r,t)}),i}_addPlaceholderChild(e,t,i){return t.key.level<=i.level||!t.hasData||!i.contains(t.key)?0:(t.visible=!0,e.add(t.key.id),1/(1<<2*(t.key.level-i.level)))}_addPlaceholderParent(e,t){let i=t.getParentKey(),r=0,s=null
for(;Object(f.k)(i);){if(e.has(i.id))return!0
const t=this._getTile(i.id)
if(null!=t&&t.isReady)return t.visible=!0,e.add(t.key.id),!0
null!=t&&t.hasData&&t.patchCount>r&&(r=t.patchCount,s=t),i=i.getParentKey()}return!!s&&(s.visible=!0,e.add(s.key.id),!0)}}var D=i(1701),B=i(1118),H=i(1241),G=i(1266),$=i(658)
function Q(e){return e&&"openPorts"in e}const K=h.a.getLogger("esri.views.2d.layers.FeatureLayerView2D")
let W=class extends(Object(D.a)(Object(H.a)(Object(S.a)(B.a)))){constructor(){super(...arguments),this._pipelineIsUpdating=!0,this._commandsQueue=new z({process:e=>{switch(e.type){case"processed-edit":return this._doEdit(e)
case"refresh":return this._doRefresh(e.dataChanged)
case"update":return this._doUpdate()}}}),this._visibilityOverrides=new Set,this._highlightIds=new Map,this._updateHighlight=Object(y.i)(async()=>this._proxy.setHighlight(Array.from(this._highlightIds.keys()))),this._uploadsLocked=!1,this._needsClusterSizeUpdate=!1,this.featureEffectView=new O,this._lastDefinitionExpression=null}destroy(){var e
Object(f.b)(this._updateClusterSizeTask,e=>e.remove()),null==(e=this._proxy)||e.destroy(),this._commandsQueue.destroy()}initialize(){this.addResolvingPromise(Promise.all([this._initProxy(),this._initServiceOptions()])),this.handles.add([this.on("valueRangesChanged",e=>{this._set("_aggregateValueRanges",e.valueRanges)}),Object(b.e)(()=>this.featureEffect,e=>{this.featureEffectView.featureEffect=e},{initial:!0,sync:!0})])}async _initProxy(){if("isTable"in this.layer&&this.layer.isTable)throw new d.a("featurelayerview:table-not-supported","table feature layer can't be displayed",{layer:this.layer})
this._proxy&&this._proxy.destroy()
const e=this._createClientOptions()
return this._set("_proxy",new N({client:e})),this._proxy.when()}async _initServiceOptions(){return this._set("_serviceOptions",await this._createServiceOptions()),this._serviceOptions}get orderByFields(){return"stream"!==this._serviceOptions.type&&this._serviceOptions.orderByFields}get labelsVisible(){const e="subtype-group"===this.layer.type?this.layer.sublayers.items:[this.layer]
return!this.suspended&&e.some(e=>e.labelingInfo&&e.labelsVisible)}get queryMode(){return this._serviceOptions.type}get renderingConfigHash(){if(!this.layer)return null
const e=this.availableFields,t=this.layer,i=this.view.floors,{definitionExpression:r}=t,s="subtype-group"!==this.layer.type&&this.layer.labelsVisible&&this.layer.labelingInfo,n="renderer"in t&&t.renderer,a="feature"===t.type?t.gdbVersion:void 0,l="feature"===t.type&&t.historicMoment?t.historicMoment.getTime():void 0,{timeExtent:o}=this,u="customParameters"in t?JSON.stringify(t.customParameters):void 0,c="apiKey"in t?t.apiKey:void 0,d="stream"===t.type?`${JSON.stringify(t.geometryDefinition)}${t.definitionExpression}`:null,p=JSON.stringify(this.clips),h=t.featureReduction&&t.featureReduction.toJSON(),y="orderBy"in this.layer&&JSON.stringify(this.layer.orderBy),b="sublayers"in this.layer&&this.layer.sublayers.items.reduce((e,t)=>e+`${t.visible?1:0}.${JSON.stringify(t.renderer)}.${t.labelsVisible}\n.${JSON.stringify(t.labelingInfo)}`,"")
return JSON.stringify({orderBy:y,sublayerHash:b,filterHash:Object(f.k)(this.filter)&&this.filter.toJSON(),effectHash:Object(f.k)(this.featureEffect)&&this.featureEffect.toJSON(),streamFilter:d,gdbVersion:a,definitionExpression:r,historicMoment:l,availableFields:e,renderer:n,labelingInfo:s,timeExtent:o,floors:i,clipsHash:p,featureReduction:h,customParameters:u,apiKey:c})}highlight(e){var t
let i
return e instanceof s.default?i=[e.getObjectId()]:"number"==typeof e||"string"==typeof e?i=[e]:Array.isArray(e)&&e.length>0?i="number"==typeof e[0]||"string"==typeof e[0]?e:e.map(e=>null==e?void 0:e.getObjectId()):c.a.isCollection(e)&&e.length>0&&(i=e.map(e=>null==e?void 0:e.getObjectId()).toArray()),i=null==(t=i)?void 0:t.filter(e=>null!=e),i&&i.length?(this._addHighlight(i),{remove:()=>this._removeHighlight(i)}):{remove:()=>{}}}hasHighlight(){return!!this._highlightIds.size}async hitTest(e,t){if(!this.tileRenderer)return null
const i=await this.tileRenderer.hitTest(t)
if(0===i.length)return null
const{features:r,aggregates:n}=await this._proxy.getFeatures(i)
return[...n.map(e=>this._createHittestResult(u.fromJSON(e))),...r.map(e=>this._createHittestResult(s.default.fromJSON(e)))]}async queryAggregates(){return(await this._proxy.getAggregates()).map(e=>u.fromJSON(e))}queryStatistics(){return this._proxy.queryStatistics()}async querySummaryStatistics(e,t,i){const r={...t,scale:this.view.scale}
return this._proxy.querySummaryStatistics(this._cleanUpQuery(e),r,i)}async queryUniqueValues(e,t,i){const r={...t,scale:this.view.scale}
return this._proxy.queryUniqueValues(this._cleanUpQuery(e),r,i)}async queryClassBreaks(e,t,i){const r={...t,scale:this.view.scale}
return this._proxy.queryClassBreaks(this._cleanUpQuery(e),r,i)}async queryHistogram(e,t,i){const r={...t,scale:this.view.scale}
return this._proxy.queryHistogram(this._cleanUpQuery(e),r,i)}queryFeatures(e,t){return this.queryFeaturesJSON(e,t).then(e=>{const t=_.default.fromJSON(e)
return t.features.forEach(e=>this._setLayersForFeature(e)),t})}queryVisibleFeatures(e,t){return this._proxy.queryVisibleFeatures(this._cleanUpQuery(e),t).then(e=>{const t=_.default.fromJSON(e)
return t.features.forEach(e=>this._setLayersForFeature(e)),t})}queryFeaturesJSON(e,t){return this._proxy.queryFeatures(this._cleanUpQuery(e),t)}queryObjectIds(e,t){return this._proxy.queryObjectIds(this._cleanUpQuery(e),t)}queryFeatureCount(e,t){return this._proxy.queryFeatureCount(this._cleanUpQuery(e),t)}queryExtent(e,t){return this._proxy.queryExtent(this._cleanUpQuery(e),t).then(e=>({count:e.count,extent:$.default.fromJSON(e.extent)}))}setVisibility(e,t){t?this._visibilityOverrides.delete(e):this._visibilityOverrides.add(e),this._update()}update(e){if(!this._tileStrategy||!this.tileRenderer)return
const{hasMissingTiles:t,added:i,removed:r}=this._tileStrategy.update(e);(i.length||r.length)&&this._proxy.updateTiles({added:i,removed:r}),t&&this.requestUpdate(),this.notifyChange("updating")}attach(){this.view.timeline.record(this.layer.title+" (FeatureLayer) Attach"),this._tileStrategy=new J({acquireTile:e=>this._acquireTile(e),releaseTile:e=>this._releaseTile(e),tileInfoView:this.view.featuresTilingScheme,buffer:0}),this.handles.add(Object(b.e)(()=>this.renderingConfigHash,()=>this._update(),b.a),"attach"),"stream"!==this.layer.type&&this.handles.add(this.layer.on("edits",e=>this._edit(e)),"attach")}detach(){var e
this._commandsQueue.clear(),null==(e=this._proxy)||e.stop(),this.container.removeAllChildren(),this.handles.remove("attach"),this.tileRenderer&&(this.tileRenderer.uninstall(this.container),this.tileRenderer=null),this._tileStrategy&&(this._tileStrategy.destroy(),this._tileStrategy=null),this._tileRendererHash=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}isUpdating(){var e
const t="renderer"in this.layer&&null!=this.layer.renderer,i=this._commandsQueue.updating,r=null!=this._updatingRequiredFieldsPromise,s=!this._proxy||!this._proxy.isReady,n=this._pipelineIsUpdating,l=null==this.tileRenderer||(null==(e=this.tileRenderer)?void 0:e.updating),o=t&&(i||r||s||n||l)
return Object(a.a)("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${t}\n  -> hasPendingCommand ${i}\n  -> updatingRequiredFields ${r}\n  -> updatingProxy ${s}\n  -> updatingPipeline ${n}\n  -> updatingTileRenderer ${l}\n`),o}_createClientOptions(){return{setUpdating:e=>{this._set("_pipelineIsUpdating",e)},emitEvent:e=>{this.emit(e.name,e.event)}}}async _detectQueryMode(e){var t
const i="path"in e,r="editingInfo"in this.layer&&(null==(t=this.layer.editingInfo)?void 0:t.lastEditDate),s=!!this.layer.refreshInterval,n=!r&&s
if(i&&("feature"===this.layer.type||"subtype-group"===this.layer.type)&&"point"===this.layer.geometryType&&this.layer.capabilities.query.supportsPagination&&!this.layer.capabilities.operations.supportsEditing&&!n&&Object(a.a)("featurelayer-snapshot-enabled"))try{const e=await this.layer.queryFeatureCount()
if(e<=Object(a.a)("featurelayer-snapshot-point-min-threshold"))return{mode:"snapshot",featureCount:e}
const t=Object(a.a)("featurelayer-snapshot-point-max-threshold"),i=Object(a.a)("featurelayer-snapshot-point-coverage"),r=this.view.extent,s=Object(f.t)(this.layer.fullExtent),n=null==s?void 0:s.clone().intersection(r),l=Object(f.k)(n)?n.width*n.height:0,o=(null==s?void 0:s.width)*(null==s?void 0:s.height),u=0===o?0:l/o
if(e<=t&&u>=i)return{mode:"snapshot",featureCount:e}}catch(e){K.warn("mapview-feature-layer","Encountered an error when querying for featureCount",{error:e})}return{mode:"on-demand"}}async _createServiceOptions(){var e
const t=this.layer
if("stream"===t.type)return null
const{capabilities:i,objectIdField:r}=t,s=t.fields.map(e=>e.toJSON()),n=Object(f.k)(t.fullExtent)&&t.fullExtent.toJSON(),a=Object(A.b)(t.geometryType),l=t.timeInfo&&t.timeInfo.toJSON()||null,o=t.spatialReference?t.spatialReference.toJSON():null,u="feature"===t.type?t.globalIdField:null
let c
"ogc-feature"===t.type?c=t.source.getFeatureDefinition():Q(t.source)?c=await t.source.openPorts():t.parsedUrl&&(c=Object(p.a)(t.parsedUrl),"dynamicDataSource"in t&&t.dynamicDataSource&&(c.query={layer:JSON.stringify({source:t.dynamicDataSource})}))
const d="datesInUnknownTimezone"in this.layer&&this.layer.datesInUnknownTimezone,h=null!=(e="subtypeField"in this.layer&&this.layer.subtypeField)?e:null,{mode:y,featureCount:b}=await this._detectQueryMode(c)
let g=this.layer.objectIdField
if("feature"===this.layer.type&&Object(f.k)(this.layer.orderBy)&&this.layer.orderBy.length){const e=!this.layer.orderBy[0].valueExpression&&this.layer.orderBy[0].field
e&&(g=e)}return{type:y,timeReferenceUnknownClient:d,subtypeField:h,featureCount:b,globalIdField:u,maxRecordCount:i.query.maxRecordCount,tileMaxRecordCount:i.query.tileMaxRecordCount,capabilities:i,fields:s,fullExtent:n,geometryType:a,objectIdField:r,source:c,timeInfo:l,spatialReference:o,orderByFields:g}}async _createMemoryServiceOptions(e){const t=await e.openPorts()
return{...this._createServiceOptions(),type:"memory",source:t}}_cleanUpQuery(e){const t=w.a.from(e)||this.createQuery()
return t.outSpatialReference||(t.outSpatialReference=this.view.spatialReference),t}async _update(){return this._commandsQueue.push({type:"update"})}async _edit(e){if(!this.suspended)return this._validateEdit(e)?this._commandsQueue.push({type:"edit",edits:e}):void 0
this._clearTiles()}async doRefresh(e){if(this._tileStrategy.tileKeys().length)return this.suspended&&e?void this._clearTiles():this._commandsQueue.push({type:"refresh",dataChanged:e})}_clearTiles(){this._tileStrategy.tileKeys().length&&(this._proxy.updateTiles({added:[],removed:this._tileStrategy.tileKeys()}),this._tileStrategy.clear(),this.requestUpdate(),this._commandsQueue.clear(),this._update())}_validateEdit(e){const t="globalIdField"in this.layer&&this.layer.globalIdField,i=e.deletedFeatures.some(e=>-1===e.objectId||!e.objectId),r=t&&this.availableFields.includes(t)
return i&&!r?(K.error(new d.a("mapview-apply-edits",`Editing the specified service requires the layer's globalIdField, ${t} to be included the layer's outFields for updates to be reflected on the map`)),null):e}async _doUpdate(){try{if(this.destroyed||!this._hasRequiredSupport(this.layer)||!this._tileStrategy)return
const{featureEffectView:e,filter:t}=this
await this._updateRequiredFields()
const{renderer:i}=this._getEffectiveRenderer()
this._set("_effectiveRenderer",i)
const r=this._createSchemaConfig(),s=this._createConfiguration(r,t,e.filter),n=this._lastDefinitionExpression!==s.definitionExpression
this._lastDefinitionExpression=s.definitionExpression
const a=this._createTileRendererHash(i)
if("snapshot"===this._serviceOptions.type&&(s.schema.source.featureCount=this._serviceOptions.featureCount),a!==this._tileRendererHash){await this._initTileRenderer(i)
const e=this.layer,t="stream"===e.type?await this._initServiceOptions():this._serviceOptions
this.tileRenderer.onConfigUpdate(i),"stream"!==e.type&&Q(e.source)&&(t.source=await e.source.openPorts())
const r={added:this._tileStrategy.tileKeys(),removed:[]}
await this._proxy.startup(this.view.featuresTilingScheme,s,t,r),this.hasHighlight()&&await this._proxy.setHighlight(Array.from(this._highlightIds.keys())),await this._onceTilesUpdated(),this.tileRenderer.onConfigUpdate(i)}else{"snapshot"===this._serviceOptions.type&&n&&(s.schema.source.featureCount=await this.layer.queryFeatureCount())
const e=await this._proxy.update(s);(e.mesh||e.targets.aggregate)&&this._lockGPUUploads()
try{await this._proxy.applyUpdate(e)}catch(e){Object(y.m)(e)||K.error(e)}(e.mesh||e.targets.aggregate)&&this._unlockGPUUploads(),this.tileRenderer.onConfigUpdate(i),this._updateClusterSizeVariable(),this._forceAttributeTextureUpload()}this._tileRendererHash=a,this.tileRenderer.invalidateLabels(),this.requestUpdate()}catch(e){}}async _doEdit(e){try{await this._proxy.onEdits(e)}catch(e){Object(y.m)(e)}}async _doRefresh(e){var t
this._lockGPUUploads()
try{await this._proxy.refresh(e)}catch(e){Object(y.m)(e)}this._unlockGPUUploads(),null!=(t=this.layer)&&t.featureReduction&&this._updateClusterSizeVariable()}_updateClusterSizeVariable(){this._needsClusterSizeUpdate&&(this.tileRenderer.onConfigUpdate(this._effectiveRenderer),this._needsClusterSizeUpdate=!1)}_createUpdateClusterSizeTask(e,t){return this.watch("_aggregateValueRanges",async i=>{this._updateClusterEffectiveRendererSizeVariable(e,t,i),this._needsClusterSizeUpdate=!0,this._uploadsLocked||this._updateClusterSizeVariable()})}async _updateClusterEffectiveRendererSizeVariable(e,t,i){if(e.dynamicClusterSize&&"visualVariables"in e&&e.visualVariables){const r=Object(R.c)(e.visualVariables)
if(Object(f.k)(r)&&"cluster_count"===r.field){const s=e.visualVariables.indexOf(r)
e.visualVariables[s]=Object(R.a)(t,i)
const n=e.clone()
n.dynamicClusterSize=!0,this._set("_effectiveRenderer",n)}}}_getEffectiveRenderer(){const e="renderer"in this.layer&&this.layer.renderer,t=this.layer.featureReduction
if(Object(f.k)(this._updateClusterSizeTask)&&(this._updateClusterSizeTask.remove(),this._updateClusterSizeTask=null),t&&"cluster"===t.type&&Object(R.d)(e)){const i=t,r=[],s=Object(R.b)(r,e,i,this._aggregateValueRanges)
return Object(f.b)(this._updateClusterSizeTask,e=>e.remove()),this._updateClusterSizeTask=this._createUpdateClusterSizeTask(s,i),{renderer:s,aggregateFields:r,featureReduction:t}}return{renderer:e,aggregateFields:[],featureReduction:null}}_acquireTile(e){const t=this.tileRenderer.acquireTile(e)
return t.once("attach",()=>{this.requestUpdate()}),t}_releaseTile(e){this.tileRenderer.releaseTile(e)}async _initTileRenderer(e){const t=await async function(e,t){if(!e)return null
switch(e.type){case"class-breaks":case"simple":case"unique-value":case"dot-density":case"dictionary":return new((await Promise.all([i.e(10),i.e(8),i.e(185)]).then(i.bind(null,2422))).default)(t)
case"heatmap":return new((await Promise.all([i.e(10),i.e(8),i.e(196)]).then(i.bind(null,2438))).default)(t)}}(e,{layerView:this,tileInfoView:this.view.featuresTilingScheme,layer:this.layer})
return this.tileRenderer&&(this._tileStrategy.clear(),this.tileRenderer.uninstall(this.container),this.tileRenderer.destroy(),this.tileRenderer=null),this.destroyed?null:(this._proxy.tileRenderer=t,this._set("tileRenderer",t),this.tileRenderer.install(this.container),this.tileRenderer.onConfigUpdate(e),this.requestUpdate(),this.tileRenderer)}_createTileRendererHash(e){return"heatmap"===e.type?"heatmap":"symbol"}get hasFilter(){const e=!!("floorInfo"in this.layer&&this.layer.floorInfo&&this.view.floors&&this.view.floors.length)
return!!this.filter||e||!!this._visibilityOverrides.size||!!this.timeExtent}_injectOverrides(e){const t=Object(f.k)(e)?e.timeExtent:null,i=Object(f.k)(this.timeExtent)&&Object(f.k)(t)?this.timeExtent.intersection(t):this.timeExtent||t
let r=null
const s="floorInfo"in this.layer&&this.layer.floorInfo
if(s){const t=Object(f.k)(e)&&e.where
r=this._addFloorFilterClause(t)}if(!this._visibilityOverrides.size&&!i&&!s)return Object(f.k)(e)?e.toJSON():null;(e=Object(f.k)(e)&&e.clone()||new j.a).timeExtent=i,r&&(e.where=r)
const n=e.toJSON()
return n.hiddenIds=Array.from(this._visibilityOverrides),n}_addFloorFilterClause(e){const t=this.layer
let i=e||""
if("floorInfo"in t&&t.floorInfo){var r
let e=this.view.floors
if(!e||!e.length)return i
null!=(r=t.floorInfo.viewAllLevelIds)&&r.length&&(e=t.floorInfo.viewAllLevelIds)
const s=e.filter(e=>""!==e).map(e=>"'"+e+"'")
s.push("''")
const n=t.floorInfo.floorField
let a="("+n+" IN ({ids}) OR "+n+" IS NULL)"
if(a=a.replace("{ids}",s.join(", ")),Object(f.k)(i)&&i.includes(n)){let e=new RegExp("AND \\("+n+".*NULL\\)","g")
i=i.replace(e,""),e=new RegExp("\\("+n+".*NULL\\)","g"),i=i.replace(e,""),i=i.replace(/\s+/g," ").trim()}i=""!==i?"("+i+") AND "+a:a}return""!==i?i:null}_createConfiguration(e,t,i){const r="feature"===this.layer.type&&this.layer.historicMoment?this.layer.historicMoment.getTime():void 0,s="feature"===this.layer.type?this.layer.gdbVersion:void 0,n=new Array(x.v),a=this._injectOverrides(t)
n[0]=a,n[1]=Object(f.k)(i)?i.toJSON():null
const l=Object(E.b)(e)
if(Object(f.j)(l))return null
const o=Object(G.a)()
return{definitionExpression:this.layer.definitionExpression,availableFields:this.availableFields,gdbVersion:s,historicMoment:r,devicePixelRatio:window.devicePixelRatio||1,filters:n,schema:l,supportsTextureFloat:o.supportsTextureFloat,maxTextureSize:o.maxTextureSize}}_hasRequiredSupport(e){var t
return!("renderer"in e&&"dot-density"===(null==(t=e.renderer)?void 0:t.type)&&!Object(G.a)().supportsTextureFloat&&(K.error(new d.a("webgl-missing-extension","Missing WebGL extension OES_Texture_Float which is required for DotDensity")),1))}_onceTilesUpdated(){return this.requestUpdate(),Object(b.g)(()=>!this._pipelineIsUpdating)}_lockGPUUploads(){this.tileRenderer&&(this._uploadsLocked=!0,this.tileRenderer.lockGPUUploads())}_unlockGPUUploads(){this.tileRenderer&&(this._uploadsLocked=!1,this.tileRenderer.unlockGPUUploads())}_forceAttributeTextureUpload(){this.tileRenderer&&this.tileRenderer.forceAttributeTextureUpload()}_createSchemaConfig(){const e="feature"===this.layer.type?this.layer.historicMoment:null,t="feature"===this.layer.type?this.layer.gdbVersion:null
return{renderer:"renderer"in this.layer&&this.layer.renderer,spatialReference:this.layer.spatialReference,timeExtent:this.layer.timeExtent,definitionExpression:this.layer.definitionExpression,featureReduction:this.layer.featureReduction,fields:this.layer.fields,geometryType:this.layer.geometryType,historicMoment:e,labelsVisible:"labelsVisible"in this.layer&&this.layer.labelsVisible,labelingInfo:"labelingInfo"in this.layer&&this.layer.labelingInfo,availableFields:this.availableFields,featureEffect:this.featureEffect,filter:this.filter,gdbVersion:t,pixelBuffer:0,orderBy:"orderBy"in this.layer&&this.layer.orderBy?this.layer.orderBy:null,customParameters:{..."customParameters"in this.layer?this.layer.customParameters:void 0,token:"apiKey"in this.layer?this.layer.apiKey:void 0}}}_addHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)
this._highlightIds.set(t,e+1)}else this._highlightIds.set(t,1)
this._updateHighlight().catch(e=>{Object(y.m)(e)||K.error(e)})}_removeHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1
0===e?this._highlightIds.delete(t):this._highlightIds.set(t,e)}this._updateHighlight().catch(e=>{Object(y.m)(e)||K.error(e)})}_setLayersForFeature(e){const t=this.layer
e.layer=t,e.sourceLayer=t}_createHittestResult(e){return this._setLayersForFeature(e),Object(f.k)(e.geometry)&&(e.geometry.spatialReference=this.view.spatialReference),e}}
Object(r.a)([Object(n.b)()],W.prototype,"_serviceOptions",void 0),Object(r.a)([Object(n.b)()],W.prototype,"_proxy",void 0),Object(r.a)([Object(n.b)()],W.prototype,"_pipelineIsUpdating",void 0),Object(r.a)([Object(n.b)()],W.prototype,"_effectiveRenderer",void 0),Object(r.a)([Object(n.b)()],W.prototype,"_aggregateValueRanges",void 0),Object(r.a)([Object(n.b)()],W.prototype,"_commandsQueue",void 0),Object(r.a)([Object(n.b)()],W.prototype,"featureEffectView",void 0),Object(r.a)([Object(n.b)()],W.prototype,"labelsVisible",null),Object(r.a)([Object(n.b)({readOnly:!0})],W.prototype,"queryMode",null),Object(r.a)([Object(n.b)()],W.prototype,"renderingConfigHash",null),Object(r.a)([Object(n.b)()],W.prototype,"tileRenderer",void 0),Object(r.a)([Object(n.b)()],W.prototype,"updating",void 0),W=Object(r.a)([Object(l.a)("esri.views.2d.layers.FeatureLayerView2D")],W)
const Z=W}}])
