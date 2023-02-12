(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[169],{1008:function(e,t,r){"use strict"
r.d(t,"a",(function(){return j})),r.d(t,"b",(function(){return F}))
var n=r(78),s=r(354),o=r(177),i=r(20),a=r(661),u=r(883),c=r(1033),l=r(872),d=r(662),h=(r(870),r(660)),f=r(292),p=r(869)
const y=o.a.getLogger("esri.geometry.support.normalizeUtils")
function g(e){return"polygon"===e[0].type}function m(e){return"polyline"===e[0].type}function b(e,t,r){if(t){const t=function(e,t){if(!(e instanceof u.a||e instanceof a.default)){const e="straightLineDensify: the input geometry is neither polyline nor polygon"
throw y.error(e),new s.a(e)}const r=Object(c.b)(e),n=[]
for(const e of r){const r=[]
n.push(r),r.push([e[0][0],e[0][1]])
for(let n=0;n<e.length-1;n++){const s=e[n][0],o=e[n][1],i=e[n+1][0],a=e[n+1][1],u=Math.sqrt((i-s)*(i-s)+(a-o)*(a-o)),c=(a-o)/u,l=(i-s)/u,d=u/t
if(d>1){for(let e=1;e<=d-1;e++){const n=e*t,i=l*n+s,a=c*n+o
r.push([i,a])}const e=(u+Math.floor(d-1)*t)/2,n=l*e+s,i=c*e+o
r.push([n,i])}r.push([i,a])}}return function(e){return"polygon"===e.type}(e)?new a.default({rings:n,spatialReference:e.spatialReference}):new u.a({paths:n,spatialReference:e.spatialReference})}(e,1e6)
e=Object(d.webMercatorToGeographic)(t,!0)}return r&&(e=Object(c.e)(e,r)),e}function O(e,t,r){if(Array.isArray(e)){const n=e[0]
if(n>t){const r=Object(c.d)(n,t)
e[0]=n+r*(-2*t)}else if(n<r){const t=Object(c.d)(n,r)
e[0]=n+t*(-2*r)}}else{const n=e.x
if(n>t){const r=Object(c.d)(n,t)
e=e.clone().offset(r*(-2*t),0)}else if(n<r){const t=Object(c.d)(n,r)
e=e.clone().offset(t*(-2*r),0)}}return e}async function j(e,t,r){var s
if(!Array.isArray(e))return j([e],t)
const o=null!=(s=null==t?void 0:t.url)?s:n.default.geometryServiceUrl
let y,F,I,_,S,w,x,R,k=0
const q=[],T=[]
for(const t of e)if(Object(i.j)(t))T.push(t)
else if(y||(y=t.spatialReference,F=Object(l.e)(y),I=y.isWebMercator,w=I?102100:4326,_=c.a[w].maxX,S=c.a[w].minX,x=c.a[w].plus180Line,R=c.a[w].minus180Line),F)if("mesh"===t.type)T.push(t)
else if("point"===t.type)T.push(O(t.clone(),_,S))
else if("multipoint"===t.type){const e=t.clone()
e.points=e.points.map(e=>O(e,_,S)),T.push(e)}else if("extent"===t.type){const e=t.clone()._normalize(!1,!1,F)
T.push(e.rings?new a.default(e):e)}else if(t.extent){const e=t.extent,r=Object(c.d)(e.xmin,S)*(2*_)
let n=0===r?t.clone():Object(c.e)(t.clone(),r)
e.offset(r,0),e.intersects(x)&&e.xmax!==_?(k=e.xmax>k?e.xmax:k,n=b(n,I),q.push(n),T.push("cut")):e.intersects(R)&&e.xmin!==S?(k=e.xmax*(2*_)>k?e.xmax*(2*_):k,n=b(n,I,360),q.push(n),T.push("cut")):T.push(n)}else T.push(t.clone())
else T.push(t)
let v=Object(c.d)(k,_),N=-90
const G=v,E=new u.a
for(;v>0;){const e=360*v-180
E.addPath([[e,N],[e,-1*N]]),N*=-1,v--}if(q.length>0&&G>0){const t=function(e,t){let r=-1
for(let n=0;n<t.cutIndexes.length;n++){const s=t.cutIndexes[n],o=t.geometries[n],i=Object(c.b)(o)
for(let e=0;e<i.length;e++){const t=i[e]
t.some(r=>{if(r[0]<180)return!0
{let r=0
for(let e=0;e<t.length;e++){const n=t[e][0]
r=n>r?n:r}r=Number(r.toFixed(9))
const n=-360*Object(c.d)(r,180)
for(let r=0;r<t.length;r++){const t=o.getPoint(e,r)
o.setPoint(e,r,t.clone().offset(n,0))}return!0}})}if(s===r){if(g(e))for(const t of Object(c.b)(o))e[s]=e[s].addRing(t)
else if(m(e))for(const t of Object(c.b)(o))e[s]=e[s].addPath(t)}else r=s,e[s]=o}return e}(q,await async function(e,t,r,n){const s="string"==typeof e?Object(f.M)(e):e,o=t[0].spatialReference,i={...n,query:{...s.query,f:"json",sr:JSON.stringify(o),target:JSON.stringify({geometryType:Object(p.c)(t[0]),geometries:t}),cutter:JSON.stringify(r)}},a=await Object(h.default)(s.path+"/cut",i),{cutIndexes:u,geometries:c=[]}=a.data
return{cutIndexes:u,geometries:c.map(e=>{const t=Object(p.a)(e)
return t.spatialReference=o,t})}}(o,q,E,r)),n=[],s=[]
for(let r=0;r<T.length;r++){const o=T[r]
if("cut"!==o)s.push(o)
else{const o=t.shift(),a=e[r]
Object(i.k)(a)&&"polygon"===a.type&&a.rings&&a.rings.length>1&&o.rings.length>=a.rings.length?(n.push(o),s.push("simplify")):s.push(I?Object(d.geographicToWebMercator)(o):o)}}if(!n.length)return s
const a=await async function(e,t,r){const n="string"==typeof e?Object(f.M)(e):e,s=t[0].spatialReference,o=Object(p.c)(t[0]),i={...r,query:{...n.query,f:"json",sr:s.wkid?s.wkid:JSON.stringify(s),geometries:JSON.stringify((a=t,{geometryType:Object(p.c)(a[0]),geometries:a.map(e=>e.toJSON())}))}}
var a
return function(e,t,r){const n=Object(p.b)(t)
return e.map(e=>{const t=n.fromJSON(e)
return t.spatialReference=r,t})}((await Object(h.default)(n.path+"/simplify",i)).data,o,s)}(o,n,r),u=[]
for(let e=0;e<s.length;e++){const t=s[e]
"simplify"!==t?u.push(t):u.push(I?Object(d.geographicToWebMercator)(a.shift()):a.shift())}return u}const P=[]
for(let e=0;e<T.length;e++){const t=T[e]
if("cut"!==t)P.push(t)
else{const e=q.shift()
P.push(!0===I?Object(d.geographicToWebMercator)(e):e)}}return Promise.resolve(P)}function F(e,t){const r=Object(l.e)(t)
if(r){const[t,n]=r.valid,s=n-t
if(e<t)for(;e<t;)e+=s
if(e>n)for(;e>n;)e-=s}return e}},1020:function(e,t,r){"use strict"
r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return o}))
var n=r(20)
class s{constructor(e=null,t={},r,n){this.geometry=e,this.attributes=t,this.centroid=r,this.objectId=n,this.displayId=0,this.geohashX=0,this.geohashY=0}weakClone(){const e=new s(this.geometry,this.attributes,this.centroid,this.objectId)
return e.displayId=this.displayId,e.geohashX=this.geohashX,e.geohashY=this.geohashY,e}}function o(e){return!(Object(n.j)(e.geometry)||!e.geometry.coords||!e.geometry.coords.length)}class i extends s{}},1021:function(e,t,r){"use strict"
r.r(t),r.d(t,"encodeGeometry",(function(){return h})),r.d(t,"executeQuery",(function(){return p})),r.d(t,"executeQueryForCount",(function(){return b})),r.d(t,"executeQueryForExtent",(function(){return O})),r.d(t,"executeQueryForIds",(function(){return m})),r.d(t,"executeQueryPBF",(function(){return y})),r.d(t,"executeQueryPBFBuffer",(function(){return g})),r.d(t,"queryToQueryStringParameters",(function(){return f})),r.d(t,"runQuery",(function(){return j}))
var n=r(660),s=r(20),o=r(292),i=r(869),a=r(1008),u=r(1099),c=r(1253),l=r(1090)
const d="Layer does not support extent calculation."
function h(e,t){if(t&&"extent"===e.type)return`${e.xmin},${e.ymin},${e.xmax},${e.ymax}`
if(t&&"point"===e.type)return`${e.x},${e.y}`
const r=e.toJSON()
return delete r.spatialReference,JSON.stringify(r)}function f(e,t){const r=e.geometry,n=e.toJSON()
delete n.compactGeometryEnabled,delete n.defaultSpatialReferenceEnabled
const o=n,a=e.outSpatialReference
let u,c
if(Object(s.k)(r)&&(u=r.spatialReference,c=r.spatialReference.wkid||JSON.stringify(r.spatialReference),o.geometryType=Object(i.c)(r),o.geometry=h(r,e.compactGeometryEnabled),o.inSR=c),n.groupByFieldsForStatistics&&(o.groupByFieldsForStatistics=n.groupByFieldsForStatistics.join(",")),n.objectIds&&(o.objectIds=n.objectIds.join(",")),n.orderByFields&&(o.orderByFields=n.orderByFields.join(",")),!n.outFields||!n.returnDistinctValues&&(null!=t&&t.returnCountOnly||null!=t&&t.returnExtentOnly||null!=t&&t.returnIdsOnly)?delete o.outFields:-1!==n.outFields.indexOf("*")?o.outFields="*":o.outFields=n.outFields.join(","),n.outSR?o.outSR=n.outSR.wkid||JSON.stringify(n.outSR):r&&(n.returnGeometry||n.returnCentroid)&&(o.outSR=o.inSR),n.returnGeometry&&delete n.returnGeometry,n.outStatistics&&(o.outStatistics=JSON.stringify(n.outStatistics)),n.pixelSize&&(o.pixelSize=JSON.stringify(n.pixelSize)),n.quantizationParameters&&(e.defaultSpatialReferenceEnabled&&Object(s.k)(u)&&Object(s.k)(e.quantizationParameters)&&Object(s.k)(e.quantizationParameters.extent)&&u.equals(e.quantizationParameters.extent.spatialReference)&&delete n.quantizationParameters.extent.spatialReference,o.quantizationParameters=JSON.stringify(n.quantizationParameters)),n.parameterValues&&(o.parameterValues=JSON.stringify(n.parameterValues)),n.rangeValues&&(o.rangeValues=JSON.stringify(n.rangeValues)),n.dynamicDataSource&&(o.layer=JSON.stringify({source:n.dynamicDataSource}),delete n.dynamicDataSource),n.timeExtent){const e=n.timeExtent,{start:t,end:r}=e
null==t&&null==r||(o.time=t===r?t:`${null==t?"null":t},${null==r?"null":r}`),delete n.timeExtent}return e.defaultSpatialReferenceEnabled&&Object(s.k)(u)&&Object(s.k)(a)&&u.equals(a)&&(o.defaultSR=o.inSR,delete o.inSR,delete o.outSR),o}async function p(e,t,r,n){const o=Object(s.k)(t.timeExtent)&&t.timeExtent.isEmpty?{data:{features:[]}}:await j(e,t,"json",n)
return Object(l.a)(t,r,o.data),o}async function y(e,t,r,n){if(Object(s.k)(t.timeExtent)&&t.timeExtent.isEmpty)return Promise.resolve({data:r.createFeatureResult()})
const o=await g(e,t,n),i=o
return i.data=Object(c.a)(o.data,r),i}function g(e,t,r){return j(e,t,"pbf",r)}function m(e,t,r){return Object(s.k)(t.timeExtent)&&t.timeExtent.isEmpty?Promise.resolve({data:{objectIds:[]}}):j(e,t,"json",r,{returnIdsOnly:!0})}function b(e,t,r){return Object(s.k)(t.timeExtent)&&t.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):j(e,t,"json",r,{returnIdsOnly:!0,returnCountOnly:!0})}function O(e,t,r){return Object(s.k)(t.timeExtent)&&t.timeExtent.isEmpty?Promise.resolve({data:{count:0,extent:null}}):j(e,t,"json",r,{returnExtentOnly:!0,returnCountOnly:!0}).then(e=>{const t=e.data
if(t.hasOwnProperty("extent"))return e
if(t.features)throw new Error(d)
if(t.hasOwnProperty("count"))throw new Error(d)
return e})}function j(e,t,r,i={},c={}){const l="string"==typeof e?Object(o.M)(e):e,d=t.geometry?[t.geometry]:[]
return i.responseType="pbf"===r?"array-buffer":"json",Object(a.a)(d,null,i).then(e=>{const a=e&&e[0]
Object(s.k)(a)&&((t=t.clone()).geometry=a)
const d=Object(u.a)({...l.query,f:r,...c,...f(t,c)})
return Object(n.default)(Object(o.B)(l.path,"query"),{...i,query:{...d,...i.query}})})}},1033:function(e,t,r){"use strict"
r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return c})),r.d(t,"c",(function(){return l})),r.d(t,"d",(function(){return a})),r.d(t,"e",(function(){return u}))
var n=r(883),s=r(659),o=r(869)
const i={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:new n.a({paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:s.default.WebMercator}),minus180Line:new n.a({paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:s.default.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new n.a({paths:[[[180,-180],[180,180]]],spatialReference:s.default.WGS84}),minus180Line:new n.a({paths:[[[-180,-180],[-180,180]]],spatialReference:s.default.WGS84})}}
function a(e,t){return Math.ceil((e-t)/(2*t))}function u(e,t){const r=c(e)
for(const e of r)for(const r of e)r[0]+=t
return e}function c(e){return Object(o.g)(e)?e.rings:e.paths}function l(e){const t=(null==e?void 0:e.isWebMercator)?102100:4326
return[i[t].minX,i[t].maxX]}},1078:function(e,t,r){"use strict"
function n(e){var t
const r=e.layer
return"floorInfo"in r&&null!=(t=r.floorInfo)&&t.floorField&&"floors"in e.view?i(e.view.floors,r.floorInfo.floorField):null}function s(e,t){var r
return"floorInfo"in t&&null!=(r=t.floorInfo)&&r.floorField?i(e,t.floorInfo.floorField):null}function o(e,t){const{definitionExpression:r}=t
return e?r?`(${r}) AND (${e})`:e:r}function i(e,t){if(null==e||!e.length)return null
const r=e.filter(e=>""!==e).map(e=>`'${e}'`)
return r.push("''"),`${t} IN (${r.join(",")}) OR ${t} IS NULL`}r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return s}))},1093:function(e,t,r){"use strict"
r.d(t,"a",(function(){return n}))
class n{constructor(){this.objectIdFieldName=null,this.globalIdFieldName=null,this.geohashFieldName=null,this.geometryProperties=null,this.geometryType=null,this.spatialReference=null,this.hasZ=!1,this.hasM=!1,this.features=[],this.fields=[],this.transform=null,this.exceededTransferLimit=!1,this.uniqueIdField=null,this.queryGeometryType=null,this.queryGeometry=null}weakClone(){const e=new n
return e.objectIdFieldName=this.objectIdFieldName,e.globalIdFieldName=this.globalIdFieldName,e.geohashFieldName=this.geohashFieldName,e.geometryProperties=this.geometryProperties,e.geometryType=this.geometryType,e.spatialReference=this.spatialReference,e.hasZ=this.hasZ,e.hasM=this.hasM,e.features=this.features,e.fields=this.fields,e.transform=this.transform,e.exceededTransferLimit=this.exceededTransferLimit,e.uniqueIdField=this.uniqueIdField,e.queryGeometry=this.queryGeometry,e.queryGeometryType=this.queryGeometryType,e}}},1099:function(e,t,r){"use strict"
function n(e){const t={}
for(const r in e){if("declaredClass"===r)continue
const s=e[r]
if(null!=s&&"function"!=typeof s)if(Array.isArray(s)){t[r]=[]
for(let e=0;e<s.length;e++)t[r][e]=n(s[e])}else"object"==typeof s?s.toJSON&&(t[r]=JSON.stringify(s)):t[r]=s}return t}r.d(t,"a",(function(){return n}))},1102:function(e,t,r){"use strict"
r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return s}))
var n=r(886)
function s(e,t){const r=t||e.extent,s=e.width,o=Object(n.f)(r&&r.spatialReference)
return r&&s?r.width/s*o*n.j*96:0}function o(e,t){return e/(Object(n.f)(t)*n.j*96)}function i(e,t){const r=e.extent,n=e.width,s=o(t,r.spatialReference)
return r.clone().expand(s*n/r.width)}},1182:function(e,t,r){"use strict"
r.d(t,"a",(function(){return l}))
var n,s,o=r(77),i=r(982);(s=n||(n={}))[s.varint=0]="varint",s[s.fixed64=1]="fixed64",s[s.delimited=2]="delimited",s[s.fixed32=5]="fixed32",s[s.unknown=99]="unknown"
const a=4294967296,u=new TextDecoder("utf-8"),c=Object(o.a)("safari")||Object(o.a)("ios")?6:Object(o.a)("ff")?12:32
class l{constructor(e,t,r=0,s=(e?e.byteLength:0)){this._tag=0,this._dataType=n.unknown,this._init(e,t,r,s)}_init(e,t,r,n){this._data=e,this._dataView=t,this._pos=r,this._end=n}clone(){return new l(this._data,this._dataView,this._pos,this._end)}pos(){return this._pos}move(e){this._pos=e}nextTag(e){for(;;){if(this._pos===this._end)return!1
const t=this._decodeVarint()
if(this._tag=t>>3,this._dataType=7&t,!e||e===this._tag)break
this.skip()}return!0}next(){if(this._pos===this._end)return!1
const e=this._decodeVarint()
return this._tag=e>>3,this._dataType=7&e,!0}empty(){return this._pos>=this._end}tag(){return this._tag}getInt32(){return this._decodeVarint()}getInt64(){return this._decodeVarint()}getUInt32(){let e=4294967295
return e=(127&this._data[this._pos])>>>0,this._data[this._pos++]<128?e:(e=(e|(127&this._data[this._pos])<<7)>>>0,this._data[this._pos++]<128?e:(e=(e|(127&this._data[this._pos])<<14)>>>0,this._data[this._pos++]<128?e:(e=(e|(127&this._data[this._pos])<<21)>>>0,this._data[this._pos++]<128?e:(e=(e|(15&this._data[this._pos])<<28)>>>0,this._data[this._pos++]<128?e:void 0))))}getUInt64(){return this._decodeVarint()}getSInt32(){const e=this.getUInt32()
return e>>>1^-(1&e)|0}getSInt64(){return this._decodeSVarint()}getBool(){const e=0!==this._data[this._pos]
return this._skip(1),e}getEnum(){return this._decodeVarint()}getFixed64(){const e=this._dataView,t=this._pos,r=e.getUint32(t,!0)+e.getUint32(t+4,!0)*a
return this._skip(8),r}getSFixed64(){const e=this._dataView,t=this._pos,r=e.getUint32(t,!0)+e.getInt32(t+4,!0)*a
return this._skip(8),r}getDouble(){const e=this._dataView.getFloat64(this._pos,!0)
return this._skip(8),e}getFixed32(){const e=this._dataView.getUint32(this._pos,!0)
return this._skip(4),e}getSFixed32(){const e=this._dataView.getInt32(this._pos,!0)
return this._skip(4),e}getFloat(){const e=this._dataView.getFloat32(this._pos,!0)
return this._skip(4),e}getString(){const e=this._getLength(),t=this._pos,r=this._toString(this._data,t,t+e)
return this._skip(e),r}getBytes(){const e=this._getLength(),t=this._pos,r=this._toBytes(this._data,t,t+e)
return this._skip(e),r}getLength(){return this._getLengthUnsafe()}processMessageWithArgs(e,t,r,n){const s=this.getMessage(),o=e(s,t,r,n)
return s.release(),o}processMessage(e){const t=this.getMessage(),r=e(t)
return t.release(),r}getMessage(){const e=this._getLength(),t=l.pool.acquire()
return t._init(this._data,this._dataView,this._pos,this._pos+e),this._skip(e),t}release(){l.pool.release(this)}dataType(){return this._dataType}skip(){switch(this._dataType){case n.varint:this._decodeVarint()
break
case n.fixed64:this._skip(8)
break
case n.delimited:this._skip(this._getLength())
break
case n.fixed32:this._skip(4)
break
default:throw new Error("Invalid data type!")}}skipLen(e){this._skip(e)}_skip(e){if(this._pos+e>this._end)throw new Error("Attempt to skip past the end of buffer!")
this._pos+=e}_decodeVarint(){const e=this._data
let t,r=this._pos,n=0
if(this._end-r>=10)do{if(t=e[r++],n|=127&t,0==(128&t))break
if(t=e[r++],n|=(127&t)<<7,0==(128&t))break
if(t=e[r++],n|=(127&t)<<14,0==(128&t))break
if(t=e[r++],n|=(127&t)<<21,0==(128&t))break
if(t=e[r++],n+=268435456*(127&t),0==(128&t))break
if(t=e[r++],n+=34359738368*(127&t),0==(128&t))break
if(t=e[r++],n+=4398046511104*(127&t),0==(128&t))break
if(t=e[r++],n+=562949953421312*(127&t),0==(128&t))break
if(t=e[r++],n+=72057594037927940*(127&t),0==(128&t))break
if(t=e[r++],n+=0x8000000000000000*(127&t),0==(128&t))break
throw new Error("Varint too long!")}while(0)
else{let s=1
for(;r!==this._end&&(t=e[r],0!=(128&t));)++r,n+=(127&t)*s,s*=128
if(r===this._end)throw new Error("Varint overrun!");++r,n+=t*s}return this._pos=r,n}_decodeSVarint(){const e=this._decodeVarint()
return e%2?-(e+1)/2:e/2}_getLength(){if(this._dataType!==n.delimited)throw new Error("Not a delimited data type!")
return this._decodeVarint()}_getLengthUnsafe(){return this.getUInt32()}_toString(e,t,r){if((r=Math.min(this._end,r))-t>c){const n=e.subarray(t,r)
return u.decode(n)}let n="",s=""
for(let o=t;o<r;++o){const t=e[o]
128&t?s+="%"+t.toString(16):(n+=decodeURIComponent(s)+String.fromCharCode(t),s="")}return s.length&&(n+=decodeURIComponent(s)),n}_toBytes(e,t,r){return r=Math.min(this._end,r),new Uint8Array(e.buffer,t,r-t)}}l.pool=new i.a(l,null,e=>{e._data=null,e._dataView=null})},1221:function(e,t,r){"use strict"
r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return c}))
var n=r(886),s=r(872),o=r(1020),i=r(1093),a=r(935)
const u=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"]
class c{constructor(e){this.options=e,this.geometryTypes=u,this._coordinatePtr=0,this._vertexDimension=0}createFeatureResult(){return new i.a}prepareFeatures(e){this._vertexDimension=2,e.hasZ&&this._vertexDimension++,e.hasM&&this._vertexDimension++}finishFeatureResult(e){if(!e||!e.features||!e.hasZ||!this.options.sourceSpatialReference||!e.spatialReference||Object(s.d)(e.spatialReference,this.options.sourceSpatialReference)||e.spatialReference.vcsWkid)return
const t=Object(n.g)(this.options.sourceSpatialReference)/Object(n.g)(e.spatialReference)
if(1!==t)for(const r of e.features){if(!Object(o.c)(r))continue
const e=r.geometry.coords
for(let r=2;r<e.length;r+=3)e[r]*=t}}addFeature(e,t){e.features.push(t)}createFeature(){return new o.a}createSpatialReference(){return{wkid:0}}createGeometry(){return new a.a}addField(e,t){e.fields.push(t)}allocateCoordinates(e){e.coords.length=e.lengths.reduce((e,t)=>e+t,0)*this._vertexDimension,this._coordinatePtr=0}addCoordinate(e,t){e.coords[this._coordinatePtr++]=t}addCoordinatePoint(e,t){e.coords.push(t)}addLength(e,t){e.lengths.push(t)}addQueryGeometry(e,t){e.queryGeometry=t.queryGeometry,e.queryGeometryType=t.queryGeometryType}createPointGeometry(){return new a.a}}},1243:function(e,t,r){"use strict"
r.d(t,"a",(function(){return q})),r.d(t,"b",(function(){return d})),r.d(t,"c",(function(){return S}))
var n=r(354),s=r(20),o=r(1182),i=r(935),a=r(1221)
const u=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeString","esriFieldTypeDate","esriFieldTypeOID","esriFieldTypeGeometry","esriFieldTypeBlob","esriFieldTypeRaster","esriFieldTypeGUID","esriFieldTypeGlobalID","esriFieldTypeXML"],c=["sqlTypeBigInt","sqlTypeBinary","sqlTypeBit","sqlTypeChar","sqlTypeDate","sqlTypeDecimal","sqlTypeDouble","sqlTypeFloat","sqlTypeGeometry","sqlTypeGUID","sqlTypeInteger","sqlTypeLongNVarchar","sqlTypeLongVarbinary","sqlTypeLongVarchar","sqlTypeNChar","sqlTypeNVarchar","sqlTypeOther","sqlTypeReal","sqlTypeSmallInt","sqlTypeSqlXml","sqlTypeTime","sqlTypeTimestamp","sqlTypeTimestamp2","sqlTypeTinyInt","sqlTypeVarbinary","sqlTypeVarchar"],l=["upperLeft","lowerLeft"]
function d(e){return e>=u.length?null:u[e]}function h(e){return e>=c.length?null:c[e]}function f(e){return e>=l.length?null:l[e]}function p(e,t){return t>=e.geometryTypes.length?null:e.geometryTypes[t]}function y(e,t,r){const n=t.createPointGeometry(r)
for(;e.next();)switch(e.tag()){case 3:{const r=e.getUInt32(),s=e.pos()+r
let o=0
for(;e.pos()<s;)t.addCoordinatePoint(n,e.getSInt64(),o++)
break}default:e.skip()}return n}function g(e,t,r){const n=t.createGeometry(r),s=2+(r.hasZ?1:0)+(r.hasM?1:0)
for(;e.next();)switch(e.tag()){case 2:{const r=e.getUInt32(),s=e.pos()+r
let o=0
for(;e.pos()<s;)t.addLength(n,e.getUInt32(),o++)
break}case 3:{const r=e.getUInt32(),o=e.pos()+r
let i=0
for(t.allocateCoordinates(n);e.pos()<o;)t.addCoordinate(n,e.getSInt64(),i),i++,i===s&&(i=0)
break}default:e.skip()}return n}function m(e){const t=new i.a
let r="esriGeometryPoint"
for(;e.next();)switch(e.tag()){case 2:{const r=e.getUInt32(),n=e.pos()+r
for(;e.pos()<n;)t.lengths.push(e.getUInt32())
break}case 3:{const r=e.getUInt32(),n=e.pos()+r
for(;e.pos()<n;)t.coords.push(e.getSInt64())
break}case 1:r=a.a[e.getEnum()]
break
default:e.skip()}return{queryGeometry:t,queryGeometryType:r}}function b(e){for(;e.next();)switch(e.tag()){case 1:return e.getString()
case 2:return e.getFloat()
case 3:return e.getDouble()
case 4:return e.getSInt32()
case 5:return e.getUInt32()
case 6:return e.getInt64()
case 7:return e.getUInt64()
case 8:return e.getSInt64()
case 9:return e.getBool()
default:return e.skip(),null}return null}function O(e){const t={type:d(0)}
for(;e.next();)switch(e.tag()){case 1:t.name=e.getString()
break
case 2:t.type=d(e.getEnum())
break
case 3:t.alias=e.getString()
break
case 4:t.sqlType=h(e.getEnum())
break
case 5:e.skip()
break
case 6:t.defaultValue=e.getString()
break
default:e.skip()}return t}function j(e){const t={}
for(;e.next();)switch(e.tag()){case 1:t.name=e.getString()
break
case 2:t.isSystemMaintained=e.getBool()
break
default:e.skip()}return t}function F(e,t,r,n){const s=t.createFeature(r)
let o=0
for(;e.next();)switch(e.tag()){case 1:{const t=n[o++].name
s.attributes[t]=e.processMessage(b)
break}case 2:s.geometry=e.processMessageWithArgs(g,t,r)
break
case 4:s.centroid=e.processMessageWithArgs(y,t,r)
break
default:e.skip()}return s}function I(e){const t=[1,1,1,1]
for(;e.next();)switch(e.tag()){case 1:t[0]=e.getDouble()
break
case 2:t[1]=e.getDouble()
break
case 4:t[2]=e.getDouble()
break
case 3:t[3]=e.getDouble()
break
default:e.skip()}return t}function _(e){const t=[0,0,0,0]
for(;e.next();)switch(e.tag()){case 1:t[0]=e.getDouble()
break
case 2:t[1]=e.getDouble()
break
case 4:t[2]=e.getDouble()
break
case 3:t[3]=e.getDouble()
break
default:e.skip()}return t}function S(e){const t={originPosition:f(0)}
for(;e.next();)switch(e.tag()){case 1:t.originPosition=f(e.getEnum())
break
case 2:t.scale=e.processMessage(I)
break
case 3:t.translate=e.processMessage(_)
break
default:e.skip()}return t}function w(e){const t={}
for(;e.next();)switch(e.tag()){case 1:t.shapeAreaFieldName=e.getString()
break
case 2:t.shapeLengthFieldName=e.getString()
break
case 3:t.units=e.getString()
break
default:e.skip()}return t}function x(e,t){const r=t.createSpatialReference()
for(;e.next();)switch(e.tag()){case 1:r.wkid=e.getUInt32()
break
case 5:r.wkt=e.getString()
break
case 2:r.latestWkid=e.getUInt32()
break
case 3:r.vcsWkid=e.getUInt32()
break
case 4:r.latestVcsWkid=e.getUInt32()
break
default:e.skip()}return r}function R(e,t){const r=t.createFeatureResult()
r.geometryType=p(t,0)
let n=!1
for(;e.next();)switch(e.tag()){case 1:r.objectIdFieldName=e.getString()
break
case 3:r.globalIdFieldName=e.getString()
break
case 4:r.geohashFieldName=e.getString()
break
case 5:r.geometryProperties=e.processMessage(w)
break
case 7:r.geometryType=p(t,e.getEnum())
break
case 8:r.spatialReference=e.processMessageWithArgs(x,t)
break
case 10:r.hasZ=e.getBool()
break
case 11:r.hasM=e.getBool()
break
case 12:r.transform=e.processMessage(S)
break
case 9:{const t=e.getBool()
r.exceededTransferLimit=t
break}case 13:t.addField(r,e.processMessage(O))
break
case 15:n||(t.prepareFeatures(r),n=!0),t.addFeature(r,e.processMessageWithArgs(F,t,r,r.fields))
break
case 2:r.uniqueIdField=e.processMessage(j)
break
default:e.skip()}return t.finishFeatureResult(r),r}function k(e,t){const r={}
let n=null
for(;e.next();)switch(e.tag()){case 4:n=e.processMessageWithArgs(m)
break
case 1:r.featureResult=e.processMessageWithArgs(R,t)
break
default:e.skip()}return Object(s.k)(n)&&r.featureResult&&t.addQueryGeometry(r,n),r}function q(e,t){try{const r=2,n=new o.a(new Uint8Array(e),new DataView(e)),s={}
for(;n.next();)n.tag()===r?s.queryResult=n.processMessageWithArgs(k,t):n.skip()
return s}catch(e){throw new n.a("query:parsing-pbf","Error while parsing FeatureSet PBF payload",{error:e})}}},1244:function(e,t,r){"use strict"
r.d(t,"a",(function(){return c}))
var n=r(856),s=r(862),o=r(292),i=r(858),a=(r(353),r(77),r(859),r(857))
let u=class extends s.a{constructor(...e){super(...e),this.requestOptions=null,this.url=null}normalizeCtorArgs(e,t){return"string"!=typeof e?e:{url:e,...t}}get parsedUrl(){return this._parseUrl(this.url)}_parseUrl(e){return e?Object(o.M)(e):null}_encode(e,t,r){const n={}
for(const s in e){if("declaredClass"===s)continue
const o=e[s]
if(null!=o&&"function"!=typeof o)if(Array.isArray(o)){n[s]=[]
for(let e=0;e<o.length;e++)n[s][e]=this._encode(o[e])}else if("object"==typeof o)if(o.toJSON){const e=o.toJSON(r&&r[s])
n[s]=t?e:JSON.stringify(e)}else n[s]=t?o:JSON.stringify(o)
else n[s]=o}return n}}
Object(n.a)([Object(i.b)({readOnly:!0})],u.prototype,"parsedUrl",null),Object(n.a)([Object(i.b)()],u.prototype,"requestOptions",void 0),Object(n.a)([Object(i.b)({type:String})],u.prototype,"url",void 0),u=Object(n.a)([Object(a.a)("esri.tasks.Task")],u)
const c=u},1253:function(e,t,r){"use strict"
r.d(t,"a",(function(){return s}))
var n=r(1243)
function s(e,t){const r=Object(n.a)(e,t),s=r.queryResult.featureResult,o=r.queryResult.queryGeometry,i=r.queryResult.queryGeometryType
if(s&&s.features&&s.features.length&&s.objectIdFieldName){const e=s.objectIdFieldName
for(const t of s.features)t.attributes&&(t.objectId=t.attributes[e])}return s&&(s.queryGeometry=o,s.queryGeometryType=i),s}},1279:function(e,t,r){"use strict"
r.d(t,"a",(function(){return n}))
const n={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},1280:function(e,t,r){"use strict"
r.d(t,"a",(function(){return d}))
var n,s=r(856),o=r(860),i=r(858),a=(r(353),r(77),r(859)),u=r(857)
const c={1:{id:1,rotation:0,mirrored:!1},2:{id:2,rotation:0,mirrored:!0},3:{id:3,rotation:180,mirrored:!1},4:{id:4,rotation:180,mirrored:!0},5:{id:5,rotation:-90,mirrored:!0},6:{id:6,rotation:90,mirrored:!1},7:{id:7,rotation:90,mirrored:!0},8:{id:8,rotation:-90,mirrored:!1}}
let l=n=class extends o.a{constructor(e){super(e),this.contentType=null,this.exifInfo=null,this.id=null,this.globalId=null,this.keywords=null,this.name=null,this.parentGlobalId=null,this.parentObjectId=null,this.size=null,this.url=null}get orientationInfo(){const{exifInfo:e}=this,t=function(e){const{exifInfo:t,exifName:r,tagName:n}=e
if(!t||!r||!n)return null
const s=t.find(e=>e.name===r)
return s?function(e){const{tagName:t,tags:r}=e
if(!r||!t)return null
const n=r.find(e=>e.name===t)
return n&&n.value||null}({tagName:n,tags:s.tags}):null}({exifName:"Exif IFD0",tagName:"Orientation",exifInfo:e})
return c[t]||null}clone(){return new n({contentType:this.contentType,exifInfo:this.exifInfo,id:this.id,globalId:this.globalId,keywords:this.keywords,name:this.name,parentGlobalId:this.parentGlobalId,parentObjectId:this.parentObjectId,size:this.size,url:this.url})}}
Object(s.a)([Object(i.b)({type:String})],l.prototype,"contentType",void 0),Object(s.a)([Object(i.b)()],l.prototype,"exifInfo",void 0),Object(s.a)([Object(i.b)({readOnly:!0})],l.prototype,"orientationInfo",null),Object(s.a)([Object(i.b)({type:a.a})],l.prototype,"id",void 0),Object(s.a)([Object(i.b)({type:String})],l.prototype,"globalId",void 0),Object(s.a)([Object(i.b)({type:String})],l.prototype,"keywords",void 0),Object(s.a)([Object(i.b)({type:String})],l.prototype,"name",void 0),Object(s.a)([Object(i.b)({json:{read:!1}})],l.prototype,"parentGlobalId",void 0),Object(s.a)([Object(i.b)({json:{read:!1}})],l.prototype,"parentObjectId",void 0),Object(s.a)([Object(i.b)({type:a.a})],l.prototype,"size",void 0),Object(s.a)([Object(i.b)({json:{read:!1}})],l.prototype,"url",void 0),l=n=Object(s.a)([Object(u.a)("esri.layers.support.AttachmentInfo")],l)
const d=l},1347:function(e,t,r){"use strict"
r.d(t,"a",(function(){return i}))
var n=r(925),s=r(1021),o=r(918)
async function i(e,t,r){const i=Object(n.c)(e)
return Object(s.executeQueryForCount)(i,o.a.from(t),{...r}).then(e=>e.data.count)}},1348:function(e,t,r){"use strict"
r.d(t,"a",(function(){return i}))
var n=r(925),s=r(1021),o=r(918)
async function i(e,t,r){const i=Object(n.c)(e)
return Object(s.executeQueryForIds)(i,o.a.from(t),{...r}).then(e=>e.data.objectIds)}},1349:function(e,t,r){"use strict"
r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return u}))
var n=r(925),s=r(1021),o=r(947),i=r(918)
async function a(e,t,r){const n=await u(e,t,r)
return o.default.fromJSON(n)}async function u(e,t,r){const o=Object(n.c)(e),a={...r},u=i.a.from(t),{data:c}=await Object(s.executeQuery)(o,u,u.sourceSpatialReference,a)
return c}},1455:function(e,t,r){"use strict"
r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return c}))
var n=r(148),s=r(660),o=r(292),i=r(1099),a=r(1280)
function u(e){const t=e.toJSON()
return t.attachmentTypes&&(t.attachmentTypes=t.attachmentTypes.join(",")),t.keywords&&(t.keywords=t.keywords.join(",")),t.globalIds&&(t.globalIds=t.globalIds.join(",")),t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.size&&(t.size=t.size.join(",")),t}function c(e,t){const r={}
for(const s of e){const{parentObjectId:e,parentGlobalId:i,attachmentInfos:u}=s
for(const s of u){const{id:u}=s,c=Object(o.b)(Object(n.a)(`${t}/${e}/attachments/${u}`)),l=a.a.fromJSON(s)
l.set({url:c,parentObjectId:e,parentGlobalId:i}),r[e]?r[e].push(l):r[e]=[l]}}return r}function l(e,t,r){let n={query:Object(i.a)({...e.query,f:"json",...u(t)})}
return r&&(n={...r,...n,query:{...r.query,...n.query}}),Object(s.default)(e.path+"/queryAttachments",n)}},1495:function(e,t,r){"use strict"
r.d(t,"a",(function(){return z}))
var n=r(856),s=r(354),o=r(77),i=r(20),a=r(861),u=r(858),c=(r(353),r(859),r(857)),l=r(983),d=r(925),h=r(1455),f=r(1125),p=r(1347),y=(r(870),r(1021)),g=r(918),m=r(658),b=r(1348),O=r(1349),j=r(963),F=r(1039),I=r(930)
function _(e,t){return t}function S(e,t,r,n){switch(r){case 0:return k(e,t+n,0)
case 1:return"lowerLeft"===e.originPosition?k(e,t+n,1):function({translate:e,scale:t},r,n){return e[n]-r*t[n]}(e,t+n,1)}}function w(e,t,r,n){return 2===r?k(e,t,2):S(e,t,r,n)}function x(e,t,r,n){return 2===r?k(e,t,3):S(e,t,r,n)}function R(e,t,r,n){return 3===r?k(e,t,3):w(e,t,r,n)}function k({translate:e,scale:t},r,n){return e[n]+r*t[n]}class q{constructor(e){this.options=e,this.geometryTypes=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"],this.previousCoordinate=[0,0],this.transform=null,this.applyTransform=_,this.lengths=[],this.currentLengthIndex=0,this.toAddInCurrentPath=0,this.vertexDimension=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,this._attributesConstructor=function(){}}createFeatureResult(){return{fields:[],features:[]}}finishFeatureResult(e){if(this.options.applyTransform&&(e.transform=null),this._attributesConstructor=function(){},this.coordinateBuffer=null,this.lengths.length=0,!e.hasZ)return
const t=Object(F.a)(e.geometryType,this.options.sourceSpatialReference,e.spatialReference)
if(!Object(i.j)(t))for(const r of e.features)t(r.geometry)}createSpatialReference(){return{}}addField(e,t){e.fields.push(t)
const r=e.fields.map(e=>e.name)
this._attributesConstructor=function(){for(const e of r)this[e]=null}}addFeature(e,t){e.features.push(t)}prepareFeatures(e){switch(this.transform=e.transform,this.options.applyTransform&&e.transform&&(this.applyTransform=this._deriveApplyTransform(e)),this.vertexDimension=2,e.hasZ&&this.vertexDimension++,e.hasM&&this.vertexDimension++,e.geometryType){case"esriGeometryPoint":this.addCoordinate=(e,t,r)=>this.addCoordinatePoint(e,t,r),this.createGeometry=e=>this.createPointGeometry(e)
break
case"esriGeometryPolygon":this.addCoordinate=(e,t,r)=>this._addCoordinatePolygon(e,t,r),this.createGeometry=e=>this._createPolygonGeometry(e)
break
case"esriGeometryPolyline":this.addCoordinate=(e,t,r)=>this._addCoordinatePolyline(e,t,r),this.createGeometry=e=>this._createPolylineGeometry(e)
break
case"esriGeometryMultipoint":this.addCoordinate=(e,t,r)=>this._addCoordinateMultipoint(e,t,r),this.createGeometry=e=>this._createMultipointGeometry(e)
break
default:Object(j.a)(e.geometryType)}}createFeature(){return this.lengths.length=0,this.currentLengthIndex=0,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,{attributes:new this._attributesConstructor}}allocateCoordinates(){}addLength(e,t,r){0===this.lengths.length&&(this.toAddInCurrentPath=t),this.lengths.push(t)}addQueryGeometry(e,t){const{queryGeometry:r,queryGeometryType:n}=t,s=Object(I.A)(r.clone(),r,!1,!1,this.transform),o=Object(I.l)(s,n,!1,!1)
e.queryGeometryType=n,e.queryGeometry={...o}}createPointGeometry(e){const t={x:0,y:0,spatialReference:e.spatialReference}
return e.hasZ&&(t.z=0),e.hasM&&(t.m=0),t}addCoordinatePoint(e,t,r){switch(t=this.applyTransform(this.transform,t,r,0),r){case 0:e.x=t
break
case 1:e.y=t
break
case 2:"z"in e?e.z=t:e.m=t
break
case 3:e.m=t}}_transformPathLikeValue(e,t){let r=0
return t<=1&&(r=this.previousCoordinate[t],this.previousCoordinate[t]+=e),this.applyTransform(this.transform,e,t,r)}_addCoordinatePolyline(e,t,r){this._dehydratedAddPointsCoordinate(e.paths,t,r)}_addCoordinatePolygon(e,t,r){this._dehydratedAddPointsCoordinate(e.rings,t,r)}_addCoordinateMultipoint(e,t,r){0===r&&e.points.push([])
const n=this._transformPathLikeValue(t,r)
e.points[e.points.length-1].push(n)}_createPolygonGeometry(e){return{rings:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_createPolylineGeometry(e){return{paths:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_createMultipointGeometry(e){return{points:[],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_dehydratedAddPointsCoordinate(e,t,r){0===r&&0==this.toAddInCurrentPath--&&(e.push([]),this.toAddInCurrentPath=this.lengths[++this.currentLengthIndex]-1,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0)
const n=this._transformPathLikeValue(t,r),s=e[e.length-1]
0===r&&(this.coordinateBufferPtr=0,this.coordinateBuffer=new Array(this.vertexDimension),s.push(this.coordinateBuffer)),this.coordinateBuffer[this.coordinateBufferPtr++]=n}_deriveApplyTransform(e){const{hasZ:t,hasM:r}=e
return t&&r?R:t?w:r?x:S}}var T=r(947)
var v=r(660),N=r(1099)
function G(e,t){const r=e.toJSON()
return r.objectIds&&(r.objectIds=r.objectIds.join(",")),r.orderByFields&&(r.orderByFields=r.orderByFields.join(",")),!r.outFields||null!=t&&t.returnCountOnly?delete r.outFields:-1!==r.outFields.indexOf("*")?r.outFields="*":r.outFields=r.outFields.join(","),r.outSpatialReference&&(r.outSR=r.outSR.wkid||JSON.stringify(r.outSR.toJSON()),delete r.outSpatialReference),r.dynamicDataSource&&(r.layer=JSON.stringify({source:r.dynamicDataSource}),delete r.dynamicDataSource),r}async function E(e,t,r={},n){const s=Object(N.a)({...e.query,f:"json",...n,...G(t,n)})
return Object(v.default)(e.path+"/queryRelatedRecords",{...r,query:{...r.query,...s}})}var P=r(1083)
var M=r(292),D=r(869),C=r(1008),A=r(1090)
function J(e,t){var r,n
const s=e.geometry,o=e.toJSON(),a=o
if(Object(i.k)(s)&&(a.geometry=JSON.stringify(s),a.geometryType=Object(D.c)(s),a.inSR=s.spatialReference.wkid||JSON.stringify(s.spatialReference)),null!=(r=o.topFilter)&&r.groupByFields&&(a.topFilter.groupByFields=o.topFilter.groupByFields.join(",")),null!=(n=o.topFilter)&&n.orderByFields&&(a.topFilter.orderByFields=o.topFilter.orderByFields.join(",")),o.topFilter&&(a.topFilter=JSON.stringify(a.topFilter)),o.objectIds&&(a.objectIds=o.objectIds.join(",")),o.orderByFields&&(a.orderByFields=o.orderByFields.join(",")),o.outFields&&!(null!=t&&t.returnCountOnly||null!=t&&t.returnExtentOnly||null!=t&&t.returnIdsOnly)?-1!==o.outFields.indexOf("*")?a.outFields="*":a.outFields=o.outFields.join(","):delete a.outFields,o.outSR?a.outSR=o.outSR.wkid||JSON.stringify(o.outSR):s&&o.returnGeometry&&(a.outSR=a.inSR),o.returnGeometry&&delete o.returnGeometry,o.timeExtent){const e=o.timeExtent,{start:t,end:r}=e
null==t&&null==r||(a.time=t===r?t:`${null==t?"null":t},${null==r?"null":r}`),delete o.timeExtent}return a}function V(e,t,r,n={},s={}){const o="string"==typeof e?Object(M.M)(e):e,a=t.geometry?[t.geometry]:[]
return n.responseType="pbf"===r?"array-buffer":"json",Object(C.a)(a,null,n).then(e=>{const a=e&&e[0]
Object(i.k)(a)&&((t=t.clone()).geometry=a)
const u=Object(N.a)({...o.query,f:r,...s,...J(t,s)})
return Object(v.default)(Object(M.B)(o.path,"queryTopFeatures"),{...n,query:{...u,...n.query}})})}var U=r(1053)
var L=r(1244)
let B=class extends L.a{constructor(e){super(e),this.dynamicDataSource=null,this.fieldsIndex=null,this.format="json",this.gdbVersion=null,this.infoFor3D=null,this.sourceSpatialReference=null}execute(e,t){return this.executeJSON(e,t).then(r=>this.featureSetFromJSON(e,r,t))}async executeJSON(e,t){var r
const n={...this.requestOptions,...t},s=this._normalizeQuery(e),i=null!=(null==(r=e.outStatistics)?void 0:r[0]),a=Object(o.a)("featurelayer-pbf-statistics"),u=!i||a
let c
if("pbf"===this.format&&u)try{c=await async function(e,t,r){const n=Object(d.c)(e),s={...r},o=g.a.from(t),i=!o.quantizationParameters,{data:a}=await Object(y.executeQueryPBF)(n,o,new q({sourceSpatialReference:o.sourceSpatialReference,applyTransform:i}),s)
return a}(this.url,s,n)}catch(e){if("query:parsing-pbf"!==e.name)throw e
this.format="json"}return"json"!==this.format&&u||(c=await Object(O.b)(this.url,s,n)),this._normalizeFields(c.fields),c}async featureSetFromJSON(e,t,n){if(!(this._queryIs3DObjectFormat(e)&&Object(i.k)(this.infoFor3D)&&t.features&&t.features.length))return T.default.fromJSON(t)
const{meshFeatureSetFromJSON:s}=await Object(a.A)(Promise.all([r.e(14),r.e(59),r.e(197)]).then(r.bind(null,2421)),n)
return s(e,this.infoFor3D,t)}executeForCount(e,t){const r={...this.requestOptions,...t},n=this._normalizeQuery(e)
return Object(p.a)(this.url,n,r)}executeForExtent(e,t){const r={...this.requestOptions,...t},n=this._normalizeQuery(e)
return async function(e,t,r){const n=Object(d.c)(e)
return Object(y.executeQueryForExtent)(n,g.a.from(t),{...r}).then(e=>({count:e.data.count,extent:m.default.fromJSON(e.data.extent)}))}(this.url,n,r)}executeForIds(e,t){const r={...this.requestOptions,...t},n=this._normalizeQuery(e)
return Object(b.a)(this.url,n,r)}executeRelationshipQuery(e,t){e=P.a.from(e)
const r={...this.requestOptions,...t}
return(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),async function(e,t,r){return t=P.a.from(t),async function(e,t,r){const n=await E(e,t,r),s=n.data,o=s.geometryType,i=s.spatialReference,a={}
for(const e of s.relatedRecordGroups){const t={fields:void 0,objectIdFieldName:void 0,geometryType:o,spatialReference:i,hasZ:!!s.hasZ,hasM:!!s.hasM,features:e.relatedRecords}
if(null!=e.objectId)a[e.objectId]=t
else for(const r in e)e.hasOwnProperty(r)&&"relatedRecords"!==r&&(a[e[r]]=t)}return{...n,data:a}}(Object(d.c)(e),t,r).then(e=>{const t=e.data,r={}
return Object.keys(t).forEach(e=>r[e]=T.default.fromJSON(t[e])),r})}(this.url,e,r)}executeRelationshipQueryForCount(e,t){e=P.a.from(e)
const r={...this.requestOptions,...t}
return(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),async function(e,t,r){return t=P.a.from(t),async function(e,t,r){const n=await E(e,t,r,{returnCountOnly:!0}),s=n.data,o={}
for(const e of s.relatedRecordGroups)null!=e.objectId&&(o[e.objectId]=e.count)
return{...n,data:o}}(Object(d.c)(e),t,{...r}).then(e=>e.data)}(this.url,e,r)}executeAttachmentQuery(e,t){const r={...this.requestOptions,...t}
return async function(e,t,r){const n=Object(d.c)(e)
return Object(h.a)(n,f.a.from(t),{...r}).then(e=>Object(h.b)(e.data.attachmentGroups,n.path))}(this.url,e,r)}executeTopFeaturesQuery(e,t){const r={...this.requestOptions,...t}
return async function(e,t,r,n){const s=Object(d.c)(e),o={...n},{data:i}=await async function(e,t,r,n){const s=await V(e,t,"json",n)
return Object(A.a)(t,r,s.data),s}(s,U.a.from(t),r,o)
return T.default.fromJSON(i)}(this.parsedUrl,e,this.sourceSpatialReference,r)}executeForTopIds(e,t){const r={...this.requestOptions,...t}
return async function(e,t,r){const n=Object(d.c)(e)
return(await async function(e,t,r){return Object(i.k)(t.timeExtent)&&t.timeExtent.isEmpty?Promise.resolve({data:{objectIds:[]}}):V(e,t,"json",r,{returnIdsOnly:!0})}(n,U.a.from(t),{...r})).data.objectIds}(this.parsedUrl,e,r)}executeForTopExtents(e,t){const r={...this.requestOptions,...t}
return async function(e,t,r){const n=Object(d.c)(e),s=await async function(e,t,r){return Object(i.k)(t.timeExtent)&&t.timeExtent.isEmpty?Promise.resolve({data:{count:0,extent:null}}):V(e,t,"json",r,{returnExtentOnly:!0,returnCountOnly:!0}).then(e=>{const t=e.data
if(t.hasOwnProperty("extent"))return e
if(t.features)throw new Error("Layer does not support extent calculation.")
if(t.hasOwnProperty("count"))throw new Error("Layer does not support extent calculation.")
return e})}(n,U.a.from(t),{...r})
return{count:s.data.count,extent:m.default.fromJSON(s.data.extent)}}(this.parsedUrl,e,r)}executeForTopCount(e,t){const r={...this.requestOptions,...t}
return async function(e,t,r){const n=Object(d.c)(e)
return(await(s=n,o=U.a.from(t),a={...r},Object(i.k)(o.timeExtent)&&o.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):V(s,o,"json",a,{returnIdsOnly:!0,returnCountOnly:!0}))).data.count
var s,o,a}(this.parsedUrl,e,r)}_normalizeQuery(e){let t=g.a.from(e)
if(t.sourceSpatialReference=t.sourceSpatialReference||this.sourceSpatialReference,(this.gdbVersion||this.dynamicDataSource)&&(t=t===e?t.clone():t,t.gdbVersion=e.gdbVersion||this.gdbVersion,t.dynamicDataSource=e.dynamicDataSource?l.a.from(e.dynamicDataSource):this.dynamicDataSource),Object(i.k)(this.infoFor3D)&&this._queryIs3DObjectFormat(e)){t=t===e?t.clone():t,t.formatOf3DObjects=null
for(const e of this.infoFor3D.queryFormats){if("3D_glb"===e.id){t.formatOf3DObjects=e.id
break}"3D_gltf"!==e.id||t.formatOf3DObjects||(t.formatOf3DObjects=e.id)}if(!t.formatOf3DObjects)throw new s.a("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf")
if(Object(i.j)(t.outFields)||!t.outFields.includes("*")){t=t===e?t.clone():t,Object(i.j)(t.outFields)&&(t.outFields=[])
const{originX:r,originY:n,originZ:s,translationX:o,translationY:a,translationZ:u,scaleX:c,scaleY:l,scaleZ:d,rotationX:h,rotationY:f,rotationZ:p,rotationDeg:y}=this.infoFor3D.transformFieldRoles
t.outFields.push(r,n,s,o,a,u,c,l,d,h,f,p,y)}}return t}_normalizeFields(e){if(Object(i.k)(this.fieldsIndex)&&Object(i.k)(e))for(const t of e){const e=this.fieldsIndex.get(t.name)
e&&Object.assign(t,e.toJSON())}}_queryIs3DObjectFormat(e){return Object(i.k)(this.infoFor3D)&&e.returnGeometry&&"xyFootprint"!==e.multipatchOption&&!e.outStatistics}}
Object(n.a)([Object(u.b)({type:l.a})],B.prototype,"dynamicDataSource",void 0),Object(n.a)([Object(u.b)()],B.prototype,"fieldsIndex",void 0),Object(n.a)([Object(u.b)()],B.prototype,"format",void 0),Object(n.a)([Object(u.b)()],B.prototype,"gdbVersion",void 0),Object(n.a)([Object(u.b)()],B.prototype,"infoFor3D",void 0),Object(n.a)([Object(u.b)()],B.prototype,"sourceSpatialReference",void 0),B=Object(n.a)([Object(c.a)("esri.tasks.QueryTask")],B)
const z=B},1537:function(e,t,r){"use strict"
r.d(t,"a",(function(){return h})),r.d(t,"b",(function(){return l})),r.d(t,"c",(function(){return d})),r.d(t,"d",(function(){return a}))
var n=r(77),s=r(178),o=r(1279),i=r(1068)
function a(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?i.c:"esriGeometryPolyline"===e?i.e:i.d}}}const u=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/
let c=1
function l(e,t){if(Object(n.a)("esri-csp-restrictions"))return()=>({[t]:null,...e})
try{let r=`this.${t} = null;`
for(const t in e)r+=`this${u.test(t)?"."+t:`["${t}"]`} = ${JSON.stringify(e[t])};`
const n=new Function(`\n      return class AttributesClass$${c++} {\n        constructor() {\n          ${r};\n        }\n      }\n    `)()
return()=>new n}catch(r){return()=>({[t]:null,...e})}}function d(e={}){return[{name:"New Feature",description:"",prototype:{attributes:Object(s.a)(e)}}]}function h(e,t){return{attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0},query:o.a,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}},2282:function(e,t,r){"use strict"
r.r(t),r.d(t,"default",(function(){return R}))
var n=r(856),s=(r(870),r(663)),o=r(660),i=r(894),a=r(354),u=r(77),c=r(863),l=r(903),d=r(20),h=r(109),f=r(861),p=r(292),y=r(858),g=(r(353),r(859),r(857)),m=r(658),b=r(869),O=r(1537),j=r(1284),F=r(1455),I=r(1495),_=r(659)
const S=new c.a({originalAndCurrentFeatures:"original-and-current-features",none:"none"}),w=new Set(["Feature Layer","Table"])
let x=class extends l.a{constructor(){super(...arguments),this.type="feature-layer",this.refresh=Object(f.i)(async()=>{var e,t
await this.load()
const r=null==(e=this.sourceJSON.editingInfo)?void 0:e.lastEditDate
if(null==r)return{dataChanged:!0,updates:{}}
try{await this._fetchService(null)}catch{return{dataChanged:!0,updates:{}}}const n=r!==(null==(t=this.sourceJSON.editingInfo)?void 0:t.lastEditDate)
return{dataChanged:n,updates:n?{editingInfo:this.sourceJSON.editingInfo,extent:this.sourceJSON.extent}:null}})}load(e){const t=Object(d.k)(e)?e.signal:null
return this.addResolvingPromise(this._fetchService(this.layer.sourceJSON,t)),Promise.resolve(this)}get queryTask(){const{capabilities:{query:{supportsFormatPBF:e}},parsedUrl:t,dynamicDataSource:r,infoFor3D:n,gdbVersion:s,spatialReference:o,fieldsIndex:i}=this.layer,a=Object(u.a)("featurelayer-pbf")&&e&&Object(d.j)(n)?"pbf":"json"
return new I.a({url:t.path,format:a,fieldsIndex:i,infoFor3D:n,dynamicDataSource:r,gdbVersion:s,sourceSpatialReference:o})}async addAttachment(e,t){await this.load()
const r=e.attributes[this.layer.objectIdField],n=this.layer.parsedUrl.path+"/"+r+"/addAttachment",s=this._getLayerRequestOptions(),i=this._getFormDataForAttachment(t,s.query)
try{const e=await Object(o.default)(n,{body:i})
return this._createFeatureEditResult(e.data.addAttachmentResult)}catch(e){throw this._createAttachmentErrorResult(r,e)}}async updateAttachment(e,t,r){await this.load()
const n=e.attributes[this.layer.objectIdField],s=this.layer.parsedUrl.path+"/"+n+"/updateAttachment",i=this._getLayerRequestOptions({query:{attachmentId:t}}),a=this._getFormDataForAttachment(r,i.query)
try{const e=await Object(o.default)(s,{body:a})
return this._createFeatureEditResult(e.data.updateAttachmentResult)}catch(e){throw this._createAttachmentErrorResult(n,e)}}async applyEdits(e,t){await this.load()
const r=e.addFeatures.map(this._serializeFeature,this),n=e.updateFeatures.map(this._serializeFeature,this),s=this._getFeatureIds(e.deleteFeatures,null==t?void 0:t.globalIdUsed)
Object(j.a)(r,n,this.layer.spatialReference)
const i=[],a=[],u=[...e.deleteAttachments]
for(const t of e.addAttachments)i.push(await this._serializeAttachment(t))
for(const t of e.updateAttachments)a.push(await this._serializeAttachment(t))
const c=i.length||a.length||u.length?{adds:i,updates:a,deletes:u}:null,l={gdbVersion:(null==t?void 0:t.gdbVersion)||this.layer.gdbVersion,rollbackOnFailure:null==t?void 0:t.rollbackOnFailureEnabled,useGlobalIds:null==t?void 0:t.globalIdUsed,returnEditMoment:null==t?void 0:t.returnEditMoment,usePreviousEditMoment:null==t?void 0:t.usePreviousEditMoment,sessionId:null==t?void 0:t.sessionId}
null!=t&&t.returnServiceEditsOption?(l.edits=JSON.stringify([{id:this.layer.layerId,adds:r,updates:n,deletes:s,attachments:c}]),l.returnServiceEditsOption=S.toJSON(null==t?void 0:t.returnServiceEditsOption),l.returnServiceEditsInSourceSR=null==t?void 0:t.returnServiceEditsInSourceSR):(l.adds=r.length?JSON.stringify(r):null,l.updates=n.length?JSON.stringify(n):null,l.deletes=s.length?null!=t&&t.globalIdUsed?JSON.stringify(s):s.join(","):null,l.attachments=c&&JSON.stringify(c))
const d=this._getLayerRequestOptions({method:"post",query:l}),h=null!=t&&t.returnServiceEditsOption?this.layer.url:this.layer.parsedUrl.path,f=await Object(o.default)(h+"/applyEdits",d)
return this._createEditsResult(f)}async deleteAttachments(e,t){await this.load()
const r=e.attributes[this.layer.objectIdField],n=this.layer.parsedUrl.path+"/"+r+"/deleteAttachments"
try{return(await Object(o.default)(n,this._getLayerRequestOptions({query:{attachmentIds:t.join(",")},method:"post"}))).data.deleteAttachmentResults.map(this._createFeatureEditResult)}catch(e){throw this._createAttachmentErrorResult(r,e)}}fetchRecomputedExtents(e={}){const t=e.signal
return this.load({signal:t}).then(async()=>{const t=this._getLayerRequestOptions({...e,query:{returnUpdates:!0}}),{layerId:r,url:n}=this.layer,{data:s}=await Object(o.default)(`${n}/${r}`,t),{id:a,extent:u,fullExtent:c,timeExtent:l}=s,d=u||c
return{id:a,fullExtent:d&&m.default.fromJSON(d),timeExtent:l&&i.a.fromJSON({start:l[0],end:l[1]})}})}async queryAttachments(e,t={}){const{parsedUrl:r}=this.layer,n=r.path
await this.load()
const s=this._getLayerRequestOptions(t)
if(!this.layer.get("capabilities.operations.supportsQueryAttachments")){const{objectIds:t}=e,r=[]
for(const e of t){const t=n+"/"+e+"/attachments"
r.push(Object(o.default)(t,s))}return Promise.all(r).then(e=>t.map((t,r)=>({parentObjectId:t,attachmentInfos:e[r].data.attachmentInfos}))).then(e=>Object(F.b)(e,n))}return this.queryTask.executeAttachmentQuery(e,s)}async queryFeatures(e,t){return await this.load(),this.queryTask.execute(e,{...t,query:this._createRequestQueryOptions(t)})}async queryFeaturesJSON(e,t){return await this.load(),this.queryTask.executeJSON(e,{...t,query:this._createRequestQueryOptions(t)})}async queryObjectIds(e,t){return await this.load(),this.queryTask.executeForIds(e,{...t,query:this._createRequestQueryOptions(t)})}async queryFeatureCount(e,t){return await this.load(),this.queryTask.executeForCount(e,{...t,query:this._createRequestQueryOptions(t)})}async queryExtent(e,t){return await this.load(),this.queryTask.executeForExtent(e,{...t,query:this._createRequestQueryOptions(t)})}async queryRelatedFeatures(e,t){return await this.load(),this.queryTask.executeRelationshipQuery(e,{...t,query:this._createRequestQueryOptions(t)})}async queryRelatedFeaturesCount(e,t){return await this.load(),this.queryTask.executeRelationshipQueryForCount(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopFeatures(e,t){return await this.load(),this.queryTask.executeTopFeaturesQuery(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopObjectIds(e,t){return await this.load(),this.queryTask.executeForTopIds(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopExtents(e,t){return await this.load(),this.queryTask.executeForTopExtents(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopCount(e,t){return await this.load(),this.queryTask.executeForTopCount(e,{...t,query:this._createRequestQueryOptions(t)})}_createRequestQueryOptions(e){const t={...this.layer.customParameters,token:this.layer.apiKey,...null==e?void 0:e.query}
return this.layer.datesInUnknownTimezone&&(t.timeReferenceUnknownClient=!0),t}async _fetchService(e,t){if(!e){const{data:r}=await Object(o.default)(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:Object(u.a)("featurelayer-advanced-symbols")?{returnAdvancedSymbols:!0}:{},signal:t}))
e=r}this.sourceJSON=this._patchServiceJSON(e)
const r=e.type
if(!w.has(r))throw new a.a("feature-layer-source:unsupported-type",`Source type "${r}" is not supported`)}_patchServiceJSON(e){var t
if("Table"!==e.type&&e.geometryType&&(null==e||null==(t=e.drawingInfo)||!t.renderer)&&!e.defaultSymbol){const t=Object(O.d)(e.geometryType).renderer
Object(h.c)("drawingInfo.renderer",t,e)}return"esriGeometryMultiPatch"===e.geometryType&&e.infoFor3D&&(e.geometryType="mesh"),e}_serializeFeature(e){const{geometry:t,attributes:r}=e
return Object(d.j)(t)?{attributes:r}:"mesh"===t.type||"extent"===t.type?null:{geometry:t.toJSON(),attributes:r}}async _serializeAttachment(e){const{feature:t,attachment:r}=e,{globalId:n,name:s,contentType:o,data:i,uploadId:a}=r,u={globalId:n,parentGlobalId:null,contentType:null,name:null,uploadId:null,data:null}
if(t&&(u.parentGlobalId="attributes"in t?t.attributes&&t.attributes[this.layer.globalIdField]:t.globalId),a)u.uploadId=a
else if(i){const e=await async function(e){return"string"==typeof e?Object(p.h)(e)||{data:e}:new Promise((t,r)=>{const n=new FileReader
n.readAsDataURL(e),n.onload=()=>t(Object(p.h)(n.result)),n.onerror=e=>r(e)})}(i)
u.contentType=e.mediaType,u.data=e.data,i instanceof File&&(u.name=i.name)}return s&&(u.name=s),o&&(u.contentType=o),u}_getFeatureIds(e,t){const r=e[0]
return r?this._canUseGlobalIds(t,e)?this._getGlobalIdsFromFeatureIdentifier(e):"objectId"in r?this._getObjectIdsFromFeatureIdentifier(e):this._getIdsFromFeatures(e):[]}_getIdsFromFeatures(e){const t=this.layer.objectIdField
return e.map(e=>e.attributes&&e.attributes[t])}_canUseGlobalIds(e,t){return e&&"globalId"in t[0]}_getObjectIdsFromFeatureIdentifier(e){return e.map(e=>e.objectId)}_getGlobalIdsFromFeatureIdentifier(e){return e.map(e=>e.globalId)}_createEditsResult(e){var t
const r=e.data,{layerId:n}=this.layer,s=[]
let o=null
if(Array.isArray(r))for(const e of r)s.push({id:e.id,editedFeatures:e.editedFeatures}),e.id===n&&(o={addResults:e.addResults,updateResults:e.updateResults,deleteResults:e.deleteResults,attachments:e.attachments,editMoment:e.editMoment})
else o=r
const i=null==(t=o)?void 0:t.attachments,a={addFeatureResults:o.addResults?o.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:o.updateResults?o.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:o.deleteResults?o.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:i&&i.addResults?i.addResults.map(this._createFeatureEditResult,this):[],updateAttachmentResults:i&&i.updateResults?i.updateResults.map(this._createFeatureEditResult,this):[],deleteAttachmentResults:i&&i.deleteResults?i.deleteResults.map(this._createFeatureEditResult,this):[]}
if(o.editMoment&&(a.editMoment=o.editMoment),s.length>0){a.editedFeatureResults=[]
for(const e of s){const{adds:t,updates:r,deletes:n,spatialReference:s}=e.editedFeatures,o=s?new _.default(s):null
a.editedFeatureResults.push({layerId:e.id,editedFeatures:{adds:(null==t?void 0:t.map(e=>this._createEditedFeature(e,o)))||[],updates:(null==r?void 0:r.map(e=>({original:this._createEditedFeature(e[0],o),current:this._createEditedFeature(e[1],o)})))||[],deletes:(null==n?void 0:n.map(e=>this._createEditedFeature(e,o)))||[],spatialReference:o}})}}return a}_createEditedFeature(e,t){return new s.default({attributes:e.attributes,geometry:Object(b.a)({...e.geometry,spatialReference:t})})}_createFeatureEditResult(e){const t=!0===e.success?null:e.error||{code:void 0,description:void 0}
return{objectId:e.objectId,globalId:e.globalId,error:t?new a.a("feature-layer-source:edit-failure",t.description,{code:t.code}):null}}_createAttachmentErrorResult(e,t){const r=t.details.messages&&t.details.messages[0]||t.message,n=t.details.httpStatus||t.details.messageCode
return{objectId:e,globalId:null,error:new a.a("feature-layer-source:attachment-failure",r,{code:n})}}_getFormDataForAttachment(e,t){const r=e instanceof FormData?e:e&&e.elements?new FormData(e):null
if(r)for(const e in t){const n=t[e]
null!=n&&(r.set?r.set(e,n):r.append(e,n))}return r}_getLayerRequestOptions(e={}){const{parsedUrl:t,gdbVersion:r,dynamicDataSource:n}=this.layer
return{...e,query:{gdbVersion:r,layer:n?JSON.stringify({source:n}):void 0,...t.query,f:"json",...this._createRequestQueryOptions(e)},responseType:"json"}}}
Object(n.a)([Object(y.b)()],x.prototype,"type",void 0),Object(n.a)([Object(y.b)({constructOnly:!0})],x.prototype,"layer",void 0),Object(n.a)([Object(y.b)({readOnly:!0})],x.prototype,"queryTask",null),x=Object(n.a)([Object(g.a)("esri.layers.graphics.sources.FeatureLayerSource")],x)
const R=x},925:function(e,t,r){"use strict"
r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return o})),r(20)
var n=r(292)
function s(e,t){return t?{...t,query:{...e,...t.query}}:{query:e}}function o(e){return"string"==typeof e?Object(n.M)(e):e}function i(e,t,r){const n={}
for(const s in e){if("declaredClass"===s)continue
const o=e[s]
if(null!=o&&"function"!=typeof o)if(Array.isArray(o)){n[s]=[]
for(let e=0;e<o.length;e++)n[s][e]=i(o[e])}else if("object"==typeof o)if(o.toJSON){const e=o.toJSON(r&&r[s])
n[s]=t?e:JSON.stringify(e)}else n[s]=t?o:JSON.stringify(o)
else n[s]=o}return n}r(1102),r(1078)},930:function(e,t,r){"use strict"
r.d(t,"a",(function(){return Q})),r.d(t,"b",(function(){return ee})),r.d(t,"c",(function(){return Z})),r.d(t,"d",(function(){return X})),r.d(t,"e",(function(){return $})),r.d(t,"f",(function(){return L})),r.d(t,"g",(function(){return G})),r.d(t,"h",(function(){return U})),r.d(t,"i",(function(){return A})),r.d(t,"j",(function(){return W})),r.d(t,"k",(function(){return K})),r.d(t,"l",(function(){return Y})),r.d(t,"m",(function(){return E})),r.d(t,"n",(function(){return I})),r.d(t,"o",(function(){return J})),r.d(t,"p",(function(){return D})),r.d(t,"q",(function(){return he})),r.d(t,"r",(function(){return se})),r.d(t,"s",(function(){return ae})),r.d(t,"t",(function(){return de})),r.d(t,"u",(function(){return re})),r.d(t,"v",(function(){return ne})),r.d(t,"w",(function(){return b})),r.d(t,"x",(function(){return O})),r.d(t,"y",(function(){return ce})),r.d(t,"z",(function(){return te})),r.d(t,"A",(function(){return ue}))
var n=r(354),s=r(177),o=r(20),i=r(869),a=r(1020),u=r(1093),c=r(935)
function l(e,t){return e?t?4:3:t?3:2}const d=s.a.getLogger("esri.layers.graphics.featureConversionUtils"),h={esriGeometryPoint:0,esriGeometryPolyline:2,esriGeometryPolygon:3,esriGeometryMultipoint:0},f=(e,t,r,n,s,o)=>{e[r]=s,e[r+1]=o},p=(e,t,r,n,s,o)=>{e[r]=s,e[r+1]=o,e[r+2]=t[n+2]},y=(e,t,r,n,s,o)=>{e[r]=s,e[r+1]=o,e[r+2]=t[n+3]},g=(e,t,r,n,s,o)=>{e[r]=s,e[r+1]=o,e[r+2]=t[n+2],e[r+3]=t[n+3]}
function m(e,t,r,n){if(e){if(r)return t&&n?g:p
if(t&&n)return y}else if(t&&n)return p
return f}function b({scale:e,translate:t},r){return Math.round((r-t[0])/e[0])}function O({scale:e,translate:t},r){return Math.round((t[1]-r)/e[1])}function j({scale:e,translate:t},r){return r*e[0]+t[0]}function F({scale:e,translate:t},r){return t[1]-r*e[1]}function I(e,t,r){return e?t?r?q(e):w(e):r?R(e):_(e):null}function _(e){const t=e.coords
return{x:t[0],y:t[1]}}function S(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e}function w(e){const t=e.coords
return{x:t[0],y:t[1],z:t[2]}}function x(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.z,e}function R(e){const t=e.coords
return{x:t[0],y:t[1],m:t[2]}}function k(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.m,e}function q(e){const t=e.coords
return{x:t[0],y:t[1],z:t[2],m:t[3]}}function T(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.z,e.coords[3]=t.m,e}function v(e,t){return e&&t?T:e?x:t?k:S}function N(e,t,r,n,s){const o=v(r,n)
for(const r of t){const{geometry:t,attributes:n}=r
let i
t&&(i=o(new c.a,t)),e.push(new a.a(i,n,null,n[s]))}return e}function G(e,t,r=v(null!=t.z,null!=t.m)){return r(e,t)}function E(e,t,r){if(Object(o.j)(e))return null
const n=l(t,r),s=[]
for(let t=0;t<e.coords.length;t+=n){const r=[]
for(let s=0;s<n;s++)r.push(e.coords[t+s])
s.push(r)}return t?r?{points:s,hasZ:t,hasM:r}:{points:s,hasZ:t}:r?{points:s,hasM:r}:{points:s}}function P(e,t,r,n,s){const o=l(r,n)
for(const r of t){const t=r.geometry,n=r.attributes
let i
t&&(i=M(new c.a,t,o)),e.push(new a.a(i,n,null,n[s]))}return e}function M(e,t,r=l(t.hasZ,t.hasM)){e.lengths[0]=t.points.length
const n=e.coords
let s=0
for(const e of t.points)for(let t=0;t<r;t++)n[s++]=e[t]
return e}function D(e,t,r){if(!e)return null
const n=l(t,r),{coords:s,lengths:o}=e,i=[]
let a=0
for(const e of o){const t=[]
for(let r=0;r<e;r++){const e=[]
for(let t=0;t<n;t++)e.push(s[a++])
t.push(e)}i.push(t)}return t?r?{paths:i,hasZ:t,hasM:r}:{paths:i,hasZ:t}:r?{paths:i,hasM:r}:{paths:i}}function C(e,t,r,n,s){const o=l(r,n)
for(const r of t){const t=r.geometry,n=r.attributes
let i
t&&(i=A(new c.a,t,o)),e.push(new a.a(i,n,null,n[s]))}return e}function A(e,t,r=l(t.hasZ,t.hasM)){const{lengths:n,coords:s}=e
let o=0
for(const e of t.paths){for(const t of e)for(let e=0;e<r;e++)s[o++]=t[e]
n.push(e.length)}return e}function J(e,t,r){if(!e)return null
const n=l(t,r),{coords:s,lengths:o}=e,i=[]
let a=0
for(const e of o){const t=[]
for(let r=0;r<e;r++){const e=[]
for(let t=0;t<n;t++)e.push(s[a++])
t.push(e)}i.push(t)}return t?r?{rings:i,hasZ:t,hasM:r}:{rings:i,hasZ:t}:r?{rings:i,hasM:r}:{rings:i}}function V(e,t,r,n,s){for(const i of t){const t=i.geometry,u=i.centroid,l=i.attributes
let d
t&&(d=U(new c.a,t,r,n)),Object(o.k)(u)?e.push(new a.a(d,l,S(new c.a,u),l[s])):e.push(new a.a(d,l,null,l[s]))}return e}function U(e,t,r=t.hasZ,n=t.hasM){return L(e,t.rings,r,n),e}function L(e,t,r,n){const s=l(r,n),{lengths:o,coords:i}=e
let a=0
o.length=i.length=0
for(const e of t){for(const t of e)for(let e=0;e<s;e++)i[a++]=t[e]
o.push(e.length)}return e}const B=[],z=[]
function Q(e,t,r,n,s){B[0]=e
const[o]=Z(z,B,t,r,n,s)
return B.length=z.length=0,o}function Z(e,t,r,s,o,i){if(e.length=0,!r){for(const r of t){const t=r.attributes[i]
e.push(new a.a(null,r.attributes,null,t))}return e}switch(r){case"esriGeometryPoint":return N(e,t,s,o,i)
case"esriGeometryMultipoint":return P(e,t,s,o,i)
case"esriGeometryPolyline":return C(e,t,s,o,i)
case"esriGeometryPolygon":return V(e,t,s,o,i)
default:d.error("convertToFeatureSet:unknown-geometry",new n.a(`Unable to parse unknown geometry type '${r}'`)),e.length=0}return e}function $(e,t,r,s,o,i){const a=e.length
switch(r){case"esriGeometryPoint":N(e,t,s,o,i)
break
case"esriGeometryMultipoint":P(e,t,s,o,i)
break
case"esriGeometryPolyline":C(e,t,s,o,i)
break
case"esriGeometryPolygon":V(e,t,s,o,i)
break
default:d.error("convertToFeatureSet:unknown-geometry",new n.a(`Unable to parse unknown geometry type '${r}'`))}for(let n=0;n<t.length;n++)e[n+a].geometryType=r,e[n+a].insertAfter=t[n].insertAfter,e[n+a].groupId=t[n].groupId
return e}function W(e,t,r,n){z[0]=e,H(B,z,t,r,n)
const s=B[0]
return B.length=z.length=0,s}function X(e,t,r){if(Object(o.j)(e))return null
const s=new c.a
return"hasZ"in e&&null==t&&(t=e.hasZ),"hasM"in e&&null==r&&(r=e.hasM),Object(i.f)(e)?v(null!=t?t:null!=e.z,null!=r?r:null!=e.m)(s,e):Object(i.g)(e)?U(s,e,t,r):Object(i.h)(e)?A(s,e,l(t,r)):Object(i.e)(e)?M(s,e,l(t,r)):void d.error("convertFromGeometry:unknown-geometry",new n.a(`Unable to parse unknown geometry type '${e}'`))}function Y(e,t,r,s){const i=e&&("coords"in e?e:e.geometry)
if(Object(o.j)(i))return null
switch(t){case"esriGeometryPoint":{let e=_
return r&&s?e=q:r?e=w:s&&(e=R),e(i)}case"esriGeometryMultipoint":return E(i,r,s)
case"esriGeometryPolyline":return D(i,r,s)
case"esriGeometryPolygon":return J(i,r,s)
default:return void d.error("convertToGeometry:unknown-geometry",new n.a(`Unable to parse unknown geometry type '${t}'`))}}function H(e,t,r,s,i){if(e.length=0,Object(o.j)(r))return function(e,t){for(const r of t)e.push({attributes:r.attributes})
return e}(e,t)
switch(r){case"esriGeometryPoint":return function(e,t,r,n){let s=_
r&&n?s=q:r?s=w:n&&(s=R)
for(const r of t){const{geometry:t,attributes:n}=r,i=Object(o.k)(t)?s(t):null
e.push({attributes:n,geometry:i})}return e}(e,t,s,i)
case"esriGeometryMultipoint":return function(e,t,r,n){for(const s of t){const{geometry:t,attributes:o}=s
let i
t&&(i=E(t,r,n)),e.push({attributes:o,geometry:i})}return e}(e,t,s,i)
case"esriGeometryPolyline":return function(e,t,r,n){for(const s of t){const{geometry:t,attributes:i}=s
let a
Object(o.k)(t)&&(a=D(t,r,n)),e.push({attributes:i,geometry:a})}return e}(e,t,s,i)
case"esriGeometryPolygon":return function(e,t,r,n){for(const s of t){const{geometry:t,attributes:i,centroid:a}=s
let u
if(Object(o.k)(t)&&(u=J(t,r,n)),Object(o.k)(a)){const t=_(a)
e.push({attributes:i,centroid:t,geometry:u})}else e.push({attributes:i,geometry:u})}return e}(e,t,s,i)
default:d.error("convertToFeatureSet:unknown-geometry",new n.a(`Unable to parse unknown geometry type '${r}'`))}return e}function K(e){const{objectIdFieldName:t,spatialReference:r,transform:n,fields:s,hasM:o,hasZ:i,features:a,geometryType:u,exceededTransferLimit:c,uniqueIdField:l,queryGeometry:d,queryGeometryType:h}=e,f={features:H([],a,u,i,o),fields:s,geometryType:u,objectIdFieldName:t,spatialReference:r,uniqueIdField:l,queryGeometry:Y(d,h,!1,!1)}
return n&&(f.transform=n),c&&(f.exceededTransferLimit=c),o&&(f.hasM=o),i&&(f.hasZ=i),f}function ee(e,t){const r=new u.a,{hasM:s,hasZ:o,features:i,objectIdFieldName:a,spatialReference:c,geometryType:l,exceededTransferLimit:h,transform:f,fields:p}=e
return p&&(r.fields=p),r.geometryType=l,r.objectIdFieldName=a||t,r.spatialReference=c,r.objectIdFieldName?(i&&Z(r.features,i,l,o,s,r.objectIdFieldName),h&&(r.exceededTransferLimit=h),s&&(r.hasM=s),o&&(r.hasZ=o),f&&(r.transform=f),r):(d.error(new n.a("optimized-features:invalid-objectIdFieldName","objectIdFieldName is missing")),r)}function te(e){const{transform:t,features:r,hasM:n,hasZ:s}=e
if(!t)return e
for(const e of r)Object(o.k)(e.geometry)&&ue(e.geometry,e.geometry,n,s,t),Object(o.k)(e.centroid)&&ue(e.centroid,e.centroid,n,s,t)
return e.transform=null,e}function re(e,t){const{geometryType:r,features:n,hasM:s,hasZ:o}=t
if(!e)return t
for(let t=0;t<n.length;t++){const i=n[t],a=i.weakClone()
a.geometry=new c.a,ne(a.geometry,i.geometry,s,o,r,e),i.centroid&&(a.centroid=new c.a,ne(a.centroid,i.centroid,s,o,"esriGeometryPoint",e)),n[t]=a}return t.transform=e,t}function ne(e,t,r,n,s,i,a=r,u=n){if(e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0),Object(o.j)(t)||!t.coords.length)return null
const c=h[s],{coords:d,lengths:f}=t,p=l(r,n),y=l(r&&a,n&&u),g=m(r,n,a,u)
if(!f.length)return g(e.coords,d,0,0,b(i,d[0]),O(i,d[1])),e.lengths.length&&(e.lengths.length=0),e.coords.length=p,e
let j,F,I,_,S=0,w=0,x=w
for(const t of f){if(t<c)continue
let r=0
w=x,I=j=b(i,d[S]),_=F=O(i,d[S+1]),g(e.coords,d,w,S,I,_),r++,S+=p,w+=y
for(let n=1;n<t;n++,S+=p)I=b(i,d[S]),_=O(i,d[S+1]),I===j&&_===F||(g(e.coords,d,w,S,I-j,_-F),w+=y,r++,j=I,F=_)
r>=c&&(e.lengths.push(r),x=w)}return e.coords.length=x,e.coords.length?e:null}function se(e,t,r,n,s,o,i=r,a=n){if(e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0),!t||!t.coords.length)return null
const u=h[s],{coords:c,lengths:d}=t,f=l(r,n),p=l(r&&i,n&&a),y=m(r,n,i,a)
if(!d.length)return y(e.coords,c,0,0,c[0],c[1]),e.lengths.length&&(e.lengths.length=0),e.coords.length=f,e
let g=0
const b=o*o
for(const t of d){if(t<u){g+=t*f
continue}const r=e.coords.length/p,n=g,s=g+(t-1)*f
y(e.coords,c,e.coords.length,n,c[n],c[n+1]),ie(e.coords,c,f,b,y,n,s),y(e.coords,c,e.coords.length,s,c[s],c[s+1])
const o=e.coords.length/p-r
o>=u?e.lengths.push(o):e.coords.length=r*p,g+=t*f}return e.coords.length?e:null}function oe(e,t,r,n){const s=e[t],o=e[t+1],i=e[r],a=e[r+1],u=e[n],c=e[n+1]
let l=i,d=a,h=u-l,f=c-d
if(0!==h||0!==f){const e=((s-l)*h+(o-d)*f)/(h*h+f*f)
e>1?(l=u,d=c):e>0&&(l+=h*e,d+=f*e)}return h=s-l,f=o-d,h*h+f*f}function ie(e,t,r,n,s,o,i){let a,u=n,c=0
for(let e=o+r;e<i;e+=r)a=oe(t,e,o,i),a>u&&(c=e,u=a)
u>n&&(c-o>r&&ie(e,t,r,n,s,o,c),s(e,t,e.length,c,t[c],t[c+1]),i-c>r&&ie(e,t,r,n,s,c,i))}function ae(e,t,r,n){if(Object(o.j)(t)||!t.coords||!t.coords.length)return null
const s=l(r,n)
let i=Number.POSITIVE_INFINITY,a=Number.POSITIVE_INFINITY,u=Number.NEGATIVE_INFINITY,c=Number.NEGATIVE_INFINITY
if(t&&t.coords){const e=t.coords
for(let t=0;t<e.length;t+=s){const r=e[t],n=e[t+1]
i=Math.min(i,r),u=Math.max(u,r),a=Math.min(a,n),c=Math.max(c,n)}}return e[0]=i,e[1]=a,e[2]=u,e[3]=c,e}function ue(e,t,r,n,s){const{coords:o,lengths:i}=t,a=r?n?g:p:n?p:f,u=l(r,n)
if(!o.length)return e!==t&&(e.lengths.length=0,e.coords.length=0),e
if(!i.length)return a(e.coords,o,0,0,j(s,o[0]),F(s,o[1])),e!==t&&(e.lengths.length=0,e.coords.length=u),e
const[c,d]=s.scale
let h=0
for(let t=0;t<i.length;t++){const r=i[t]
e.lengths[t]=r
let n=j(s,o[h]),l=F(s,o[h+1])
a(e.coords,o,h,h,n,l),h+=u
for(let t=1;t<r;t++,h+=u)n+=o[h]*c,l-=o[h+1]*d,a(e.coords,o,h,h,n,l)}return e!==t&&(e.lengths.length=i.length,e.coords.length=o.length),e}function ce(e,t,r,n,s,o){const i=l(r,n),a=m(r,n,s,o),u=t.coords
e.coords.length=0,e.lengths.length=0,e.lengths.push(...t.lengths)
for(let t=0;t<u.length;t+=i)a(e.coords,u,e.coords.length,t,u[t],u[t+1])
return e}function le(e,t,r,n){let s=0,o=e[n*t],i=e[n*(t+1)]
for(let a=1;a<r;a++){const r=o+e[n*(t+a)],u=i+e[n*(t+a)+1],c=(r-o)*(u+i)
o=r,i=u,s+=c}return.5*s}function de(e,t){const{coords:r,lengths:n}=e
let s=0,o=0
for(let e=0;e<n.length;e++)o+=le(r,s,n[e],t),s+=e
return Math.abs(o)}function he(e,t){if(Object(o.j)(e))return null
const r=e.clone(),n=e.coords,s=e.lengths
let i=0
for(let e=0;e<s.length;e++){const o=s[e]
let a=n[t*i],u=n[t*i+1]
for(let e=1;e<o;e++){const s=a+n[t*(i+e)],o=u+n[t*(i+e)+1]
r.coords[t*(i+e)]=s,r.coords[t*(i+e)+1]=o,a=s,u=o}i+=o}return r}},935:function(e,t,r){"use strict"
r.d(t,"a",(function(){return n}))
class n{constructor(e=[],t=[],r=!1){this.lengths=null!=e?e:[],this.coords=null!=t?t:[],this.hasIndeterminateRingOrder=r}get isPoint(){return 0===this.lengths.length}get maxLength(){return Math.max(...this.lengths)}get size(){return this.lengths.reduce((e,t)=>e+t)}forEachVertex(e){let t=0
this.lengths.length||e(this.coords[0],this.coords[1])
for(let r=0;r<this.lengths.length;r++){const n=this.lengths[r]
for(let r=0;r<n;r++)e(this.coords[2*(r+t)],this.coords[2*(r+t)+1])
t+=n}}clone(e){return e?(e.set(this.coords),new n(this.lengths.slice(),e,this.hasIndeterminateRingOrder)):new n(this.lengths.slice(),this.coords.slice(),this.hasIndeterminateRingOrder)}}}}])
