(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[47,249,279],{1164:function(e,a,r){"use strict"
r.r(a),r.d(a,"fromItem",(function(){return y})),r.d(a,"selectLayerClassPath",(function(){return u}))
var t=r(354),n=r(1604),l=r(1006),i=r(1207),o=r(1825),s=r(1727)
function y(e){return!e.portalItem||e.portalItem instanceof l.default||(e={...e,portalItem:new l.default(e.portalItem)}),function(e){return e.load().then(u).then(c)}(e.portalItem).then(a=>{const r={portalItem:e.portalItem,...a.properties},t=a.constructor
return Promise.resolve(new t(r))})}function u(e){switch(e.type){case"Map Service":return function(e){return Object(s.a)(e.url).then(e=>e.tileInfo)}(e).then(e=>e?{className:"TileLayer"}:{className:"MapImageLayer"})
case"Feature Service":return function(e){return d(e).then(e=>{if("object"==typeof e){const a={}
return null!=e.id&&(a.layerId=e.id),{className:"FeatureLayer",properties:a}}return{className:"GroupLayer"}})}(e)
case"Feature Collection":return async function(e){if(await e.load(),Object(o.b)(e,"Map Notes"))return{className:"MapNotesLayer"}
if(Object(o.b)(e,"Route Layer"))return{className:"RouteLayer"}
const a=await e.fetchData()
return 1===Object(i.getNumLayersAndTables)(a)?{className:"FeatureLayer"}:{className:"GroupLayer"}}(e)
case"Scene Service":return function(e){return d(e).then(a=>{if("object"==typeof a){const r={}
let t
if(null!=a.id?(r.layerId=a.id,t=`${e.url}/layers/${a.id}`):t=e.url,Array.isArray(e.typeKeywords)&&e.typeKeywords.length>0){const a={IntegratedMesh:"IntegratedMeshLayer","3DObject":"SceneLayer",Point:"SceneLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"}
for(const r of Object.keys(a))if(-1!==e.typeKeywords.indexOf(r))return{className:a[r]}}return Object(s.a)(t).then(e=>{let a="SceneLayer"
const t={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"}
return e&&e.layerType&&t[e.layerType]&&(a=t[e.layerType]),{className:a,properties:r}})}return!1===a?Object(s.a)(e.url).then(e=>"Voxel"===(null==e?void 0:e.layerType)?{className:"VoxelLayer"}:{className:"GroupLayer"}):{className:"GroupLayer"}})}(e)
case"Image Service":return async function(e){var a,r,t
await e.load()
const n=null!=(a=null==(r=e.typeKeywords)?void 0:r.map(e=>e.toLowerCase()))?a:[]
if(n.indexOf("elevation 3d layer")>-1)return{className:"ElevationLayer"}
if(n.indexOf("tiled imagery")>-1)return{className:"ImageryTileLayer"}
const l=await e.fetchData(),i=null==l?void 0:l.layerType
return"ArcGISTiledImageServiceLayer"===i?{className:"ImageryTileLayer"}:"ArcGISImageServiceLayer"===i?{className:"ImageryLayer"}:"map"===(null==(t=(await Object(s.a)(e.url)).cacheType)?void 0:t.toLowerCase())?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}(e)
case"Stream Service":return{className:"StreamLayer"}
case"Vector Tile Service":return{className:"VectorTileLayer"}
case"KML":return{className:"KMLLayer"}
case"WFS":return{className:"WFSLayer"}
case"WMTS":return{className:"WMTSLayer"}
case"WMS":return{className:"WMSLayer"}
case"Feed":return{className:"StreamLayer"}
default:return Promise.reject(new t.a("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type}))}}function c(e){return(0,n.a[e.className])().then(a=>({constructor:a,properties:e.properties}))}function d(e){return!e.url||e.url.match(/\/\d+$/)?Promise.resolve({}):e.load().then(()=>e.fetchData()).then(async a=>"Feature Service"===e.type?L(a=await Object(i.preprocessFSItemData)(a,e.url)):Object(i.getNumLayersAndTables)(a)>0?L(a):Object(s.a)(e.url).then(L))}function L(e){return 1===Object(i.getNumLayersAndTables)(e)&&{id:Object(i.getFirstLayerOrTableId)(e)}}},1175:function(e,a,r){"use strict"
r.d(a,"a",(function(){return i}))
var t=r(931),n=r(861),l=r(970)
async function i(e,a,r){const i=e&&e.getAtOrigin&&e.getAtOrigin("renderer",a.origin)
if(i&&"unique-value"===i.type&&i.styleOrigin){const o=await Object(t.d)(i.populateFromStyle())
if(Object(n.v)(r),!1===o.ok){const r=o.error
a&&a.messages&&a.messages.push(new l.a("renderer:style-reference","Failed to create unique value renderer from style reference: "+r.message,{error:r,context:a})),e.clear("renderer",a.origin)}}}},1207:function(e,a,r){"use strict"
r.r(a),r.d(a,"getFirstLayerOrTableId",(function(){return f})),r.d(a,"getNumLayersAndTables",(function(){return m})),r.d(a,"load",(function(){return y})),r.d(a,"preprocessFSItemData",(function(){return p}))
var t=r(354),n=r(1604),l=r(914),i=r(1677),o=r(1175),s=r(1727)
async function y(e,a){const r=e.instance.portalItem
return r&&r.id?(await r.load(a),function(e){const a=e.instance.portalItem
if(-1===e.supportedTypes.indexOf(a.type))throw new t.a("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:a.type,expectedType:e.supportedTypes.join(", ")})}(e),async function(e,a){const r=e.instance,t=r.portalItem,{url:n,title:l}=t,s=Object(i.a)(t)
if("group"===r.type)return r.read({title:l},s),u(r,e)
n&&r.read({url:n},s)
const y=await L(e,a)
return y&&r.read(y,s),r.resourceReferences={portalItem:t,paths:s.readResourcePaths},r.read({title:l},s),Object(o.a)(r,s)}(e,a)):Promise.resolve()}function u(e,a){let r
const l=e.portalItem.type
switch(l){case"Feature Service":case"Feature Collection":r=n.a.FeatureLayer
break
case"Stream Service":r=n.a.StreamLayer
break
case"Scene Service":r=n.a.SceneLayer
break
default:throw new t.a("portal:unsupported-item-type-as-group",`The item type '${l}' is not supported as a 'IGroupLayer'`)}let i
return r().then(e=>(i=e,L(a))).then(async a=>"Feature Service"===l?(a=await p(a,e.portalItem.url),c(e,i,a)):m(a)>0?c(e,i,a):function(e,a){return e.portalItem.url?Object(s.a)(e.portalItem.url).then(r=>{var t,n
function l(e){return{id:e.id,name:e.name}}r&&c(e,a,{layers:null==(t=r.layers)?void 0:t.map(l),tables:null==(n=r.tables)?void 0:n.map(l)})}):Promise.resolve()}(e,i))}function c(e,a,r){let t=r.layers||[]
const n=r.tables||[]
"Feature Collection"===e.portalItem.type&&(t.forEach(e=>{var a
"Table"===(null==e||null==(a=e.layerDefinition)?void 0:a.type)&&n.push(e)}),t=t.filter(e=>{var a
return"Table"!==(null==e||null==(a=e.layerDefinition)?void 0:a.type)})),t.reverse().forEach(t=>{const n=d(e,a,r,t)
e.add(n)}),n.reverse().forEach(t=>{const n=d(e,a,r,t)
e.tables.add(n)})}function d(e,a,r,t){const n=new a({portalItem:e.portalItem.clone(),layerId:t.id,sublayerTitleMode:"service-name"})
if("Feature Collection"===e.portalItem.type){const a={origin:"portal-item",portal:e.portalItem.portal||l.a.getDefault()}
n.read(t,a)
const i=r.showLegend
null!=i&&n.read({showLegend:i},a)}return n}function L(e,a){if(!1===e.supportsData)return Promise.resolve(void 0)
const r=e.instance
return r.portalItem.fetchData("json",a).catch(()=>null).then(async e=>{if(function(e){return"stream"!==e.type&&"layerId"in e}(r)){let a,t=!0
return e&&m(e)>0&&(null==r.layerId&&(r.layerId=f(e)),a=function(e,a){const r=e.layers
if(r)for(let e=0;e<r.length;e++)if(r[e].id===a)return r[e]
const t=e.tables
if(t)for(let e=0;e<t.length;e++)if(t[e].id===a)return t[e]
return null}(e,r.layerId),a&&(1===m(e)&&(t=!1),null!=e.showLegend&&(a.showLegend=e.showLegend))),t&&"service-name"!==r.sublayerTitleMode&&(r.sublayerTitleMode="item-title-and-service-name"),a}return e})}async function p(e,a){var r,t
if(null==(null==(r=e)?void 0:r.layers)||null==(null==(t=e)?void 0:t.tables)){const r=await Object(s.a)(a);(e=e||{}).layers=e.layers||(null==r?void 0:r.layers),e.tables=e.tables||(null==r?void 0:r.tables)}return e}function f(e){const a=e.layers
if(a&&a.length)return a[0].id
const r=e.tables
return r&&r.length?r[0].id:null}function m(e){var a,r,t,n
return(null!=(a=null==e||null==(r=e.layers)?void 0:r.length)?a:0)+(null!=(t=null==e||null==(n=e.tables)?void 0:n.length)?t:0)}},1604:function(e,a,r){"use strict"
r.d(a,"a",(function(){return t}))
const t={BingMapsLayer:async()=>(await Promise.all([r.e(4),r.e(149)]).then(r.bind(null,2036))).default,BuildingSceneLayer:async()=>(await Promise.all([r.e(1),r.e(2),r.e(4),r.e(5),r.e(109)]).then(r.bind(null,2023))).default,CSVLayer:async()=>(await Promise.all([r.e(1),r.e(2),r.e(4),r.e(5),r.e(116)]).then(r.bind(null,2037))).default,ElevationLayer:async()=>(await Promise.all([r.e(22),r.e(42),r.e(56),r.e(278)]).then(r.bind(null,1996))).default,FeatureLayer:async()=>(await Promise.all([r.e(1),r.e(2),r.e(4),r.e(5),r.e(117)]).then(r.bind(null,667))).default,GroupLayer:async()=>(await Promise.all([r.e(4),r.e(28),r.e(51),r.e(198)]).then(r.bind(null,1950))).default,GeoRSSLayer:async()=>(await Promise.all([r.e(1),r.e(4),r.e(148)]).then(r.bind(null,2014))).default,GeoJSONLayer:async()=>(await Promise.all([r.e(1),r.e(2),r.e(4),r.e(5),r.e(123)]).then(r.bind(null,2038))).default,ImageryLayer:async()=>(await Promise.all([r.e(1),r.e(2),r.e(4),r.e(5),r.e(107)]).then(r.bind(null,677))).default,ImageryTileLayer:async()=>(await Promise.all([r.e(1),r.e(2),r.e(4),r.e(5),r.e(111)]).then(r.bind(null,2022))).default,IntegratedMeshLayer:async()=>(await Promise.all([r.e(14),r.e(22),r.e(33),r.e(45),r.e(199)]).then(r.bind(null,2039))).default,KMLLayer:async()=>(await Promise.all([r.e(1),r.e(2),r.e(4),r.e(5),r.e(132)]).then(r.bind(null,2040))).default,MapImageLayer:async()=>(await Promise.all([r.e(1),r.e(2),r.e(4),r.e(5),r.e(119)]).then(r.bind(null,675))).default,MapNotesLayer:async()=>(await Promise.all([r.e(1),r.e(2),r.e(4),r.e(5),r.e(114)]).then(r.bind(null,2015))).default,OGCFeatureLayer:async()=>(await Promise.all([r.e(1),r.e(2),r.e(4),r.e(5),r.e(120)]).then(r.bind(null,2041))).default,OpenStreetMapLayer:async()=>(await Promise.all([r.e(4),r.e(41),r.e(430)]).then(r.bind(null,2016))).default,PointCloudLayer:async()=>(await Promise.all([r.e(2),r.e(22),r.e(33),r.e(45),r.e(165)]).then(r.bind(null,2025))).default,RouteLayer:async()=>(await Promise.all([r.e(1),r.e(2),r.e(4),r.e(5),r.e(125)]).then(r.bind(null,2024))).default,SceneLayer:async()=>(await Promise.all([r.e(1),r.e(2),r.e(4),r.e(5),r.e(115)]).then(r.bind(null,2042))).default,StreamLayer:async()=>(await Promise.all([r.e(1),r.e(2),r.e(4),r.e(5),r.e(124)]).then(r.bind(null,2043))).default,TileLayer:async()=>(await Promise.all([r.e(1),r.e(2),r.e(4),r.e(5),r.e(122)]).then(r.bind(null,676))).default,UnknownLayer:async()=>(await r.e(171).then(r.bind(null,2017))).default,UnsupportedLayer:async()=>(await r.e(172).then(r.bind(null,2018))).default,VectorTileLayer:async()=>(await Promise.all([r.e(4),r.e(22),r.e(42),r.e(48),r.e(164)]).then(r.bind(null,678))).default,VoxelLayer:async()=>(await Promise.all([r.e(22),r.e(33),r.e(45),r.e(187)]).then(r.bind(null,2019))).default,WebTileLayer:async()=>(await Promise.all([r.e(4),r.e(41)]).then(r.bind(null,1913))).default,WFSLayer:async()=>(await Promise.all([r.e(1),r.e(2),r.e(4),r.e(5),r.e(118)]).then(r.bind(null,2044))).default,WMSLayer:async()=>(await Promise.all([r.e(1),r.e(2),r.e(4),r.e(137)]).then(r.bind(null,2031))).default,WMTSLayer:async()=>(await Promise.all([r.e(4),r.e(41),r.e(297)]).then(r.bind(null,2027))).default}},1643:function(e,a,r){"use strict"
r.r(a),r.d(a,"populateOperationalLayers",(function(){return u}))
var t=r(878),n=(r(77),r(861)),l=r(1604),i=r(1006)
function o(e,a){return!(!e.layerType||"ArcGISFeatureLayer"!==e.layerType)&&e.featureCollectionType===a}var s=r(1164),y=r(1175)
async function u(e,a,r){if(!a)return
const t=[]
for(const e of a){const a=S(e,r)
"GroupLayer"===e.layerType?t.push(g(a,e,r)):t.push(a)}const l=await Object(n.j)(t)
for(const a of l)!a.value||r.filter&&!r.filter(a.value)||e.add(a.value)}const c={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",OGCFeatureLayer:"OGCFeatureLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",GeoJSON:"GeoJSONLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer",Voxel:"VoxelLayer"},d={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},L={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",DefaultTileLayer:"TileLayer"},p={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoRSS:"GeoRSSLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",OGCFeatureLayer:"OGCFeatureLayer",SubtypeGroupLayer:"UnsupportedLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},f={ArcGISFeatureLayer:"FeatureLayer"},m={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"}
async function S(e,a){return async function(e,a,r){const t=new e
return t.read(a,r.context),"group"===t.type&&I(a)&&await async function(e,a,r){const t=l.a.FeatureLayer,n=await t(),i=a.featureCollection,o=i.showLegend,s=i.layers.map((t,l)=>{var i,s
const y=new n
y.read(t,r)
const u={...r,ignoreDefaults:!0}
return y.read({id:`${e.id}-sublayer-${l}`,visibility:null==(i=null==(s=a.visibleLayers)?void 0:s.includes(l))||i},u),null!=o&&y.read({showLegend:o},u),y})
e.layers.addMany(s)}(t,a,r.context),await Object(y.a)(t,r.context),t}(await async function(e,a){const r=a.context,t=function(e){let a
if("web-scene"===e.origin)switch(e.layerContainerType){case"basemap":a=L
break
case"ground":a=d
break
default:a=c}else switch(e.layerContainerType){case"basemap":a=m
break
case"tables":a=f
break
default:a=p}return a}(r)
let n=e.layerType||e.type
!n&&a&&a.defaultLayerType&&(n=a.defaultLayerType)
const y=t[n]
let u=y?l.a[y]:l.a.UnknownLayer
if(b(e)){const a=null==r?void 0:r.portal
if(e.itemId){const r=new i.default({id:e.itemId,portal:a})
await r.load()
const t=(await Object(s.selectLayerClassPath)(r)).className||"UnknownLayer"
u=l.a[t]}}else"ArcGISFeatureLayer"===n?function(e){return o(e,"notes")}(e)?u=l.a.MapNotesLayer:function(e){return o(e,"route")}(e)?u=l.a.RouteLayer:I(e)&&(u=l.a.GroupLayer):e.wmtsInfo&&e.wmtsInfo.url&&e.wmtsInfo.layerIdentifier?u=l.a.WMTSLayer:"WFS"===n&&"2.0.0"!==e.wfsInfo.version&&(u=l.a.UnsupportedLayer)
return u()}(e,a),e,a)}function I(e){var a,r,t
return"ArcGISFeatureLayer"===e.layerType&&!b(e)&&(null!=(a=null==(r=e.featureCollection)||null==(t=r.layers)?void 0:t.length)?a:0)>1}function b(e){return"Feature Collection"===e.type}async function g(e,a,r){const n=new t.a,l=u(n,Array.isArray(a.layers)?a.layers:[],r),i=await e
if(await l,"group"===i.type)return i.layers.addMany(n),i}},1677:function(e,a,r){"use strict"
r.d(a,"a",(function(){return l}))
var t=r(292),n=r(914)
function l(e){return{origin:"portal-item",url:Object(t.M)(e.itemUrl),portal:e.portal||n.a.getDefault(),portalItem:e,readResourcePaths:[]}}},1727:function(e,a,r){"use strict"
r.d(a,"a",(function(){return n}))
var t=r(660)
async function n(e){const{data:a}=await Object(t.default)(e,{responseType:"json",query:{f:"json"}})
return a}},1825:function(e,a,r){"use strict"
function t(e,a){if(!n(e,a)){const r=e.typeKeywords
r?r.push(a):e.typeKeywords=[a]}}function n(e,a){return!!e.typeKeywords&&e.typeKeywords.indexOf(a)>-1}function l(e,a){const r=e.typeKeywords
if(r){const e=r.indexOf(a)
e>-1&&r.splice(e,1)}}r.d(a,"a",(function(){return t})),r.d(a,"b",(function(){return n})),r.d(a,"c",(function(){return l}))}}])
