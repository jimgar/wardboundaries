(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[28,80],{1006:function(e,t,i){"use strict"
i.r(t),i.d(t,"default",(function(){return S}))
var r=i(856),s=i(897),n=i(354),a=i(860),o=i(178),l=i(903),c=i(20),h=i(292),p=i(858),u=i(859),d=i(865),b=i(857),m=i(658),g=i(914),f=i(862),O=i(177),y=(i(353),i(77),i(880))
const v=O.a.getLogger("esri.portal.PortalItemResource")
let j=class extends f.a{constructor(e){super(e),this.portalItem=null}normalizeCtorArgs(e){return e&&e.portalItem&&e.path?{...e,path:this._normalizePath(e.path,e.portalItem)}:e}set path(e){Object(c.k)(e)&&Object(h.u)(e)?v.error("portalitemresource:invalid-path","A portal item resource path must be relative"):this._set("path",e)}_castPath(e){return this._normalizePath(e,this.portalItem)}get url(){return this.portalItem&&this.path?`${this.portalItem.itemUrl}/resources/${this.path}`:null}get itemRelativeUrl(){return this.portalItem&&this.path?"./resources/"+this.path:null}fetch(e="json",t){const i=this.url
if(Object(c.j)(i))throw new n.a("portal-item-resource:fetch","Portal item resource does not refer to a valid item or path")
return this.portalItem.portal._request(i,{responseType:e,query:{token:this.portalItem.apiKey},signal:Object(c.i)(t,"signal")})}async update(e,t){return(await i.e(31).then(i.bind(null,1826))).addOrUpdateResource(this,"update",e,t)}hasPath(){return Object(c.k)(this.path)}_normalizePath(e,t){return Object(c.j)(e)?e:(e=e.replace(/^\/+/,""),Object(c.k)(t)&&Object(h.u)(e)&&(e=Object(h.E)(e,t.itemUrl)),e.replace(/^\/+/,"").replace(/^(\.\/)?resources\//,""))}}
Object(r.a)([Object(p.b)()],j.prototype,"portalItem",void 0),Object(r.a)([Object(p.b)({type:String,value:null})],j.prototype,"path",null),Object(r.a)([Object(y.a)("path")],j.prototype,"_castPath",null),Object(r.a)([Object(p.b)({type:String,readOnly:!0})],j.prototype,"url",null),Object(r.a)([Object(p.b)({type:String,readOnly:!0})],j.prototype,"itemRelativeUrl",null),j=Object(r.a)([Object(b.a)("esri.portal.PortalItemResource")],j)
const _=j
let w=class extends f.a{constructor(e){super(e),this.created=null,this.rating=null}}
Object(r.a)([Object(p.b)()],w.prototype,"created",void 0),Object(r.a)([Object(p.b)()],w.prototype,"rating",void 0),w=Object(r.a)([Object(b.a)("esri.portal.PortalRating")],w)
const x=w
var k
let C=k=class extends(Object(a.b)(l.a)){constructor(e){super(e),this.access=null,this.accessInformation=null,this.apiKey=null,this.applicationProxies=null,this.avgRating=null,this.categories=null,this.created=null,this.culture=null,this.description=null,this.extent=null,this.groupCategories=null,this.id=null,this.itemControl=null,this.licenseInfo=null,this.modified=null,this.name=null,this.numComments=null,this.numRatings=null,this.numViews=null,this.owner=null,this.ownerFolder=null,this.portal=null,this.screenshots=null,this.size=null,this.snippet=null,this.sourceJSON=null,this.tags=null,this.title=null,this.type=null,this.typeKeywords=null,this.url=null}static from(e){return Object(u.d)(k,e)}destroy(){this.portal=null}get displayName(){const e=this.type,t=this.typeKeywords||[]
let i=e
return"Feature Service"===e||"Feature Collection"===e?i=t.indexOf("Table")>-1?"Table":t.indexOf("Route Layer")>-1?"Route Layer":t.indexOf("Markup")>-1?"Markup":"Feature Layer":"Image Service"===e?i=t.indexOf("Elevation 3D Layer")>-1?"Elevation Layer":t.indexOf("Tiled Imagery")>-1?"Tiled Imagery Layer":"Imagery Layer":"Scene Service"===e?i="Scene Layer":"Media Service"===e?i="Media Layer":"Scene Package"===e?i="Scene Layer Package":"Stream Service"===e?i="Feature Layer":"Geoprocessing Service"===e&&this.portal&&this.portal.isPortal?i=t.indexOf("Web Tool")>-1?"Tool":"Geoprocessing Service":"Geocoding Service"===e?i="Locator":"Geoenrichment Service"===e?i="GeoEnrichment Service":"Microsoft Powerpoint"===e?i="Microsoft PowerPoint":"GeoJson"===e?i="GeoJSON":"Globe Service"===e?i="Globe Layer":"Vector Tile Service"===e?i="Tile Layer":"netCDF"===e?i="NetCDF":"Map Service"===e?i=-1===t.indexOf("Spatiotemporal")&&(t.indexOf("Hosted Service")>-1||t.indexOf("Tiled")>-1)&&-1===t.indexOf("Relational")?"Tile Layer":"Map Image Layer":e&&e.toLowerCase().indexOf("add in")>-1?i=e.replace(/(add in)/gi,"Add-In"):"datastore catalog service"===e?i="Big Data File Share":"Compact Tile Package"===e?i="Tile Package (tpkx)":"OGCFeatureServer"===e?i="OGC Feature Layer":"web mapping application"===e&&t.indexOf("configurableApp")>-1&&(i="Instant App"),i}readExtent(e){return e&&e.length?new m.default(e[0][0],e[0][1],e[1][0],e[1][1]):null}get iconUrl(){const e=this.type&&this.type.toLowerCase()||"",t=this.typeKeywords||[]
let i,r=!1,n=!1,a=!1,o=!1,l=!1,c=!1
return e.indexOf("service")>0||"feature collection"===e||"kml"===e||"wms"===e||"wmts"===e||"wfs"===e?(r=t.indexOf("Hosted Service")>-1,"feature service"===e||"feature collection"===e||"kml"===e||"wfs"===e?(n=t.indexOf("Table")>-1,a=t.indexOf("Route Layer")>-1,o=t.indexOf("Markup")>-1,l=-1!==t.indexOf("Spatiotemporal"),c=-1!==t.indexOf("UtilityNetwork"),i=l&&n?"spatiotemporaltable":n?"table":a?"routelayer":o?"markup":l?"spatiotemporal":r?"featureshosted":c?"utilitynetwork":"features"):i="map service"===e||"wms"===e||"wmts"===e?r||t.indexOf("Tiled")>-1||"wmts"===e?"maptiles":"mapimages":"scene service"===e?t.indexOf("Line")>-1?"sceneweblayerline":t.indexOf("3DObject")>-1?"sceneweblayermultipatch":t.indexOf("Point")>-1?"sceneweblayerpoint":t.indexOf("IntegratedMesh")>-1?"sceneweblayermesh":t.indexOf("PointCloud")>-1?"sceneweblayerpointcloud":t.indexOf("Polygon")>-1?"sceneweblayerpolygon":t.indexOf("Building")>-1?"sceneweblayerbuilding":t.indexOf("Voxel")>-1?"sceneweblayervoxel":"sceneweblayer":"image service"===e?t.indexOf("Elevation 3D Layer")>-1?"elevationlayer":t.indexOf("Tiled Imagery")>-1?"tiledimagerylayer":"imagery":"stream service"===e?"streamlayer":"media service"===e?"mediaservice":"vector tile service"===e?"vectortile":"datastore catalog service"===e?"datastorecollection":"geocoding service"===e?"geocodeservice":"geoprocessing service"===e&&t.indexOf("Web Tool")>-1&&this.portal&&this.portal.isPortal?"tool":"layers"):i="web map"===e||"cityengine web scene"===e?"maps":"web scene"===e?t.indexOf("ViewingMode-Local")>-1?"webscenelocal":"websceneglobal":"web mapping application"===e&&t.indexOf("configurableApp")>-1?"instantapps":"web mapping application"===e||"mobile application"===e||"application"===e||"operation view"===e||"desktop application"===e?"apps":"map document"===e||"map package"===e||"published map"===e||"scene document"===e||"globe document"===e||"basemap package"===e||"mobile basemap package"===e||"mobile map package"===e||"project package"===e||"project template"===e||"pro map"===e||"layout"===e||"layer"===e&&t.indexOf("ArcGIS Pro")>-1||"explorer map"===e&&t.indexOf("Explorer Document")?"mapsgray":"service definition"===e||"csv"===e||"shapefile"===e||"cad drawing"===e||"geojson"===e||"360 vr experience"===e||"netcdf"===e||"administrative report"===e?"datafiles":"explorer add in"===e||"desktop add in"===e||"windows viewer add in"===e||"windows viewer configuration"===e?"appsgray":"arcgis pro add in"===e||"arcgis pro configuration"===e?"addindesktop":"rule package"===e||"file geodatabase"===e||"sqlite geodatabase"===e||"csv collection"===e||"kml collection"===e||"windows mobile package"===e||"map template"===e||"desktop application template"===e||"gml"===e||"arcpad package"===e||"code sample"===e||"form"===e||"document link"===e||"earth configuration"===e||"operations dashboard add in"===e||"rules package"===e||"image"===e||"workflow manager package"===e||"explorer map"===e&&t.indexOf("Explorer Mapping Application")>-1||t.indexOf("Document")>-1?"datafilesgray":"network analysis service"===e||"geoprocessing service"===e||"geodata service"===e||"geometry service"===e||"geoprocessing package"===e||"locator package"===e||"geoprocessing sample"===e||"workflow manager service"===e?"toolsgray":"layer"===e||"layer package"===e||"explorer layer"===e?"layersgray":"scene package"===e?"scenepackage":"mobile scene package"===e?"mobilescenepackage":"tile package"===e||"compact tile package"===e?"tilepackage":"task file"===e?"taskfile":"report template"===e?"report-template":"statistical data collection"===e?"statisticaldatacollection":"insights workbook"===e?"workbook":"insights model"===e?"insightsmodel":"insights page"===e?"insightspage":"insights theme"===e?"insightstheme":"hub initiative"===e?"hubinitiative":"hubpage"===e?"hubpage":"hub event"===e?"hubevent":"hub site application"===e?"hubsite":"hub project"===e?"hubproject":"relational database connection"===e?"relationaldatabaseconnection":"big data file share"===e?"datastorecollection":"image collection"===e?"imagecollection":"style"===e?"style":"desktop style"===e?"desktopstyle":"dashboard"===e?"dashboard":"raster function template"===e?"rasterprocessingtemplate":"vector tile package"===e?"vectortilepackage":"ortho mapping project"===e?"orthomappingproject":"ortho mapping template"===e?"orthomappingtemplate":"solution"===e?"solutions":"geopackage"===e?"geopackage":"deep learning package"===e?"deeplearningpackage":"real time analytic"===e?"realtimeanalytics":"big data analytic"===e?"bigdataanalytics":"feed"===e?"feed":"excalibur imagery project"===e?"excaliburimageryproject":"notebook"===e?"notebook":"storymap"===e?"storymap":"survey123 add in"===e?"survey123addin":"mission"===e?"mission":"mission report"===e?"missionreport":"quickcapture project"===e?"quickcaptureproject":"pro report"===e?"proreport":"urban model"===e?"urbanmodel":"web experience"===e?"experiencebuilder":"web experience template"===e?"webexperiencetemplate":"experience builder widget"===e?"experiencebuilderwidget":"experience builder widget package"===e?"experiencebuilderwidgetpackage":"workflow"===e?"workflow":"insights script"===e?"insightsscript":"kernel gateway connection"===e?"kernelgatewayconnection":"hub initiative template"===e?"hubinitiativetemplate":"storymap theme"===e?"storymaptheme":"knowledge graph"===e?"knowledgegraph":"native application"===e?"nativeapp":"native application installer"===e?"nativeappinstaller":"link chart"===e?"linkchart":"investigation"===e?"investigation":"ogcfeatureserver"===e?"features":"pro project"===e?"proproject":"insights workbook package"===e?"insightsworkbookpackage":"apache parquet"===e?"apacheparquet":"maps",i?Object(s.b)("esri/images/portal/"+i+"16.png"):null}get isLayer(){return["Map Service","Feature Service","Feature Collection","Scene Service","Image Service","Stream Service","Vector Tile Service","WMTS","WMS"].indexOf(this.type)>-1}get itemUrl(){const e=this.get("portal.restUrl")
return e?e+"/content/items/"+this.id:null}get thumbnailUrl(){const e=this.itemUrl,t=this.thumbnail
return e&&t?this.portal._normalizeUrl(`${e}/info/${t}?f=json`):null}get userItemUrl(){const e=this.get("portal.restUrl")
if(!e)return null
const t=this.owner||this.get("portal.user.username")
return t?`${e}/content/users/${this.ownerFolder?`${t}/${this.ownerFolder}`:t}/items/${this.id}`:null}load(e){this.portal||(this.portal=g.a.getDefault())
const t=this.portal.load(e).then(()=>this.sourceJSON?this.sourceJSON:this.id&&this.itemUrl?this.portal._request(this.itemUrl,{signal:Object(c.k)(e)?e.signal:null,query:{token:this.apiKey}}):{}).then(e=>{this.sourceJSON=e,this.read(e)})
return this.addResolvingPromise(t),Promise.resolve(this)}addRating(e){const t={method:"post",query:{}}
return e instanceof x&&(e=e.rating),isNaN(e)||"number"!=typeof e||(t.query.rating=e),this.portal._request(this.itemUrl+"/addRating",t).then(()=>new x({rating:e,created:new Date}))}clone(){const e={access:this.access,accessInformation:this.accessInformation,applicationProxies:Object(o.a)(this.applicationProxies),avgRating:this.avgRating,categories:Object(o.a)(this.categories),created:Object(o.a)(this.created),culture:this.culture,description:this.description,extent:Object(o.a)(this.extent),groupCategories:Object(o.a)(this.groupCategories),id:this.id,itemControl:this.itemControl,licenseInfo:this.licenseInfo,modified:Object(o.a)(this.modified),name:this.name,numComments:this.numComments,numRatings:this.numRatings,numViews:this.numViews,owner:this.owner,ownerFolder:this.ownerFolder,portal:this.portal,screenshots:Object(o.a)(this.screenshots),size:this.size,snippet:this.snippet,tags:Object(o.a)(this.tags),thumbnail:this.thumbnail,title:this.title,type:this.type,typeKeywords:Object(o.a)(this.typeKeywords),url:this.url}
return this.loaded&&(e.loadStatus="loaded"),new k({sourceJSON:this.sourceJSON}).set(e)}createPostQuery(){const e=this.toJSON()
for(const t in e)"tags"===t&&null!==e[t]&&(e[t]=e[t].join(", ")),"typeKeywords"===t&&null!==e[t]&&(e[t]=e[t].join(", ")),"extent"===t&&e[t]&&(e[t]=JSON.stringify(e[t]))
return e}deleteRating(){return this.portal._request(this.itemUrl+"/deleteRating",{method:"post"}).then(()=>{})}fetchData(e="json",t){return this.portal._request(this.itemUrl+"/data",{responseType:e,...t,query:{token:this.apiKey}})}fetchRating(e){return this.portal._request(this.itemUrl+"/rating",{query:{token:this.apiKey},...e}).then(e=>null!=e.rating?(e.created=new Date(e.created),new x(e)):null)}fetchRelatedItems(e,t){return this.portal._requestToTypedArray(this.itemUrl+"/relatedItems",{query:{...e,token:this.apiKey},...t},k)}getThumbnailUrl(e){let t=this.thumbnailUrl
return t&&e&&(t+="&w="+e),t}reload(){return this.portal._request(this.itemUrl,{cacheBust:!0,query:{token:this.apiKey}}).then(e=>(this.sourceJSON=e,this.read(e),this))}update(e){return this.id?this.load().then(()=>this.portal._signIn()).then(()=>{const t=e&&e.data,i={method:"post"}
i.query=this.createPostQuery()
for(const e in i.query)null===i.query[e]&&(i.query[e]="")
return i.query.clearEmptyFields=!0,null!=t&&("string"==typeof t?i.query.text=t:"object"==typeof t&&(i.query.text=JSON.stringify(t))),this.portal._request(this.userItemUrl+"/update",i).then(()=>this.reload())}):Promise.reject(new n.a("portal:item-does-not-exist","The item does not exist yet and cannot be updated"))}updateThumbnail(e){return this.id?this.load().then(()=>this.portal._signIn()).then(()=>{const t=e.thumbnail,i=e.filename,r={method:"post"}
if("string"==typeof t)Object(h.w)(t)?r.query={data:t}:r.query={url:Object(h.C)(t)},Object(c.k)(i)&&(r.query.filename=i)
else{const e=new FormData
Object(c.k)(i)?e.append("file",t,i):e.append("file",t),r.body=e}return this.portal._request(this.userItemUrl+"/updateThumbnail",r).then(()=>this.reload())}):Promise.reject(new n.a("portal:item-does-not-exist","The item does not exist yet and cannot be updated"))}async fetchResources(e={},t){return(await i.e(31).then(i.bind(null,1826))).fetchResources(this,e,t)}async addResource(e,t,r){const s=await i.e(31).then(i.bind(null,1826))
return e.portalItem=this,s.addOrUpdateResource(e,"add",t,r)}async removeResource(e,t){const r=await i.e(31).then(i.bind(null,1826))
if(e.portalItem&&e.portalItem.itemUrl!==this.itemUrl)throw new n.a("removeresource:portal-item-mismatch","The portal item associated with the provided resource does not match the item")
return r.removeResource(this,e,t)}async removeAllResources(e){return(await i.e(31).then(i.bind(null,1826))).removeAllResources(this,e)}resourceFromPath(e){return new _({portalItem:this,path:e})}toJSON(){const e=this.extent,t={created:this.created&&this.created.getTime(),description:this.description,extent:e&&[[e.xmin,e.ymin],[e.xmax,e.ymax]],id:this.id,modified:this.modified&&this.modified.getTime(),name:this.name,owner:this.owner,ownerFolder:this.ownerFolder,snippet:this.snippet,tags:this.tags,thumbnail:this.thumbnail,title:this.title,type:this.type,typeKeywords:this.typeKeywords,url:this.url}
return Object(o.c)(t)}static fromJSON(e){if(!e)return null
if(e.declaredClass)throw new Error("JSON object is already hydrated")
return new k({sourceJSON:e})}_getPostQuery(){const e=this.toJSON()
for(const t in e)"tags"===t&&null!==e[t]&&(e[t]=e[t].join(", ")),"typeKeywords"===t&&null!==e[t]&&(e[t]=e[t].join(", ")),"extent"===t&&e[t]&&(e[t]=JSON.stringify(e[t]))
return e}}
Object(r.a)([Object(p.b)({type:["private","shared","org","public"]})],C.prototype,"access",void 0),Object(r.a)([Object(p.b)()],C.prototype,"accessInformation",void 0),Object(r.a)([Object(p.b)({type:String})],C.prototype,"apiKey",void 0),Object(r.a)([Object(p.b)({json:{read:{source:"appProxies"}}})],C.prototype,"applicationProxies",void 0),Object(r.a)([Object(p.b)()],C.prototype,"avgRating",void 0),Object(r.a)([Object(p.b)()],C.prototype,"categories",void 0),Object(r.a)([Object(p.b)({type:Date})],C.prototype,"created",void 0),Object(r.a)([Object(p.b)()],C.prototype,"culture",void 0),Object(r.a)([Object(p.b)()],C.prototype,"description",void 0),Object(r.a)([Object(p.b)({readOnly:!0})],C.prototype,"displayName",null),Object(r.a)([Object(p.b)({type:m.default})],C.prototype,"extent",void 0),Object(r.a)([Object(d.a)("extent")],C.prototype,"readExtent",null),Object(r.a)([Object(p.b)()],C.prototype,"groupCategories",void 0),Object(r.a)([Object(p.b)({readOnly:!0})],C.prototype,"iconUrl",null),Object(r.a)([Object(p.b)()],C.prototype,"id",void 0),Object(r.a)([Object(p.b)({readOnly:!0})],C.prototype,"isLayer",null),Object(r.a)([Object(p.b)()],C.prototype,"itemControl",void 0),Object(r.a)([Object(p.b)({readOnly:!0})],C.prototype,"itemUrl",null),Object(r.a)([Object(p.b)()],C.prototype,"licenseInfo",void 0),Object(r.a)([Object(p.b)({type:Date})],C.prototype,"modified",void 0),Object(r.a)([Object(p.b)()],C.prototype,"name",void 0),Object(r.a)([Object(p.b)()],C.prototype,"numComments",void 0),Object(r.a)([Object(p.b)()],C.prototype,"numRatings",void 0),Object(r.a)([Object(p.b)()],C.prototype,"numViews",void 0),Object(r.a)([Object(p.b)()],C.prototype,"owner",void 0),Object(r.a)([Object(p.b)()],C.prototype,"ownerFolder",void 0),Object(r.a)([Object(p.b)({type:g.a})],C.prototype,"portal",void 0),Object(r.a)([Object(p.b)()],C.prototype,"screenshots",void 0),Object(r.a)([Object(p.b)()],C.prototype,"size",void 0),Object(r.a)([Object(p.b)()],C.prototype,"snippet",void 0),Object(r.a)([Object(p.b)()],C.prototype,"sourceJSON",void 0),Object(r.a)([Object(p.b)()],C.prototype,"tags",void 0),Object(r.a)([Object(p.b)()],C.prototype,"thumbnail",void 0),Object(r.a)([Object(p.b)({readOnly:!0})],C.prototype,"thumbnailUrl",null),Object(r.a)([Object(p.b)()],C.prototype,"title",void 0),Object(r.a)([Object(p.b)()],C.prototype,"type",void 0),Object(r.a)([Object(p.b)()],C.prototype,"typeKeywords",void 0),Object(r.a)([Object(p.b)()],C.prototype,"url",void 0),Object(r.a)([Object(p.b)({readOnly:!0})],C.prototype,"userItemUrl",null),C=k=Object(r.a)([Object(b.a)("esri.portal.PortalItem")],C)
const S=C},1193:function(e,t,i){"use strict"
i.d(t,"a",(function(){return o})),i.d(t,"b",(function(){return l}))
var r=i(931),s=i(878),n=i(903),a=i(20)
async function o(e,t){return await e.load(),l(e,t)}async function l(e,t){const i=[],o=(...e)=>{for(const t of e)Object(a.j)(t)||(Array.isArray(t)?o(...t):s.a.isCollection(t)?t.forEach(e=>o(e)):n.a.isLoadable(t)&&i.push(t))}
t(o)
let l=null
if(await Object(r.c)(i,async e=>{!1!==(await Object(r.d)(function(e){return"loadAll"in e&&"function"==typeof e.loadAll}(e)?e.loadAll():e.load())).ok||l||(l=e)}),l)throw l.loadError
return e}},1414:function(e,t,i){"use strict"
i.d(t,"a",(function(){return u}))
var r=i(354),s=i(178),n=i(20),a=i(109),o=i(1591)
const l=new Set(["bing-maps","imagery","imagery-tile","map-image","open-street-map","tile","unknown","unsupported","vector-tile","web-tile","wms","wmts"]),c=new Set(["csv","feature","geo-rss","geojson","group","imagery","imagery-tile","kml","map-image","map-notes","ogc-feature","route","tile","unknown","unsupported","vector-tile","web-tile","wfs","wms","wmts"])
function h(e){return!("feature"!==e.type||e.url||!e.source||"memory"!==e.source.type)}function p(e,t){"maxScale"in e&&(t.maxScale=Object(o.b)(e.maxScale)),"minScale"in e&&(t.minScale=Object(o.b)(e.minScale))}function u(e,t,i){if(!("write"in e)||!e.write)return i&&i.messages&&i.messages.push(new r.a("layer:unsupported",`Layers (${e.title}, ${e.id}) of type '${e.declaredClass}' cannot be persisted`,{layer:e})),null
if(function(e,t){if(t.restrictedWebMapWriting){const i=function(e){return"basemap"===e.layerContainerType?l:"operational-layers"===e.layerContainerType?c:null}(t)
return!Object(n.k)(i)||i.has(e.type)&&!h(e)}return!0}(e,i)){const t={}
return e.write(t,i)?t:null}return Object(n.k)(t)&&function(e,t){if(function(e,t){if(h(e)){const i=Object(a.b)("featureCollection.layers",t),r=i&&i[0]&&i[0].layerDefinition
r&&p(e,r)}else"stream"===e.type?p(e,t.layerDefinition=t.layerDefinition||{}):"group"!==e.type&&p(e,t)}(e,t),"blendMode"in e&&(t.blendMode=e.blendMode,"normal"===t.blendMode&&delete t.blendMode),t.opacity=Object(o.b)(e.opacity),t.title=e.title||"Layer",t.visibility=e.visible,"legendEnabled"in e&&"wmts"!==e.type)if(h(e)){const i=t.featureCollection
i&&(i.showLegend=e.legendEnabled)}else t.showLegend=e.legendEnabled}(e,t=Object(s.a)(t)),t}},878:function(e,t,i){"use strict"
i.d(t,"a",(function(){return I}))
var r,s=i(856),n=i(1061),a=i(890),o=i(178),l=i(20),c=i(982),h=i(984),p=i(948),u=i(858),d=i(859),b=i(971),m=i(857),g=i(1063),f=i(1134)
class O{constructor(){this._observers=[]}observe(e){return this._observers.includes(e)||this._observers.push(e),new f.a(this._observers,e)}notify(){const e=this._observers.slice()
for(let t=0;t<e.length;++t){const i=e[t]
i.onInvalidated(),i.onCommitted()}}}const y=new c.a(class{constructor(){this.target=null,this.cancellable=!1,this.defaultPrevented=!1,this.item=void 0,this.type=void 0}preventDefault(){this.cancellable&&(this.defaultPrevented=!0)}reset(e){this.defaultPrevented=!1,this.item=e}},void 0,e=>{e.item=null,e.target=null,e.defaultPrevented=!1,e.cancellable=!1}),v=()=>{}
function j(e){return e?e instanceof A?e.toArray():e.length?Array.prototype.slice.apply(e):[]:[]}function _(e){if(e&&e.length)return e[0]}function w(e,t,i,r){const s=Math.min(e.length-i,t.length-r)
let n=0
for(;n<s&&e[i+n]===t[r+n];)n++
return n}const x=new Set,k=new Set,C=new Set,S=new Map
let E=0,A=r=class extends a.a.EventedAccessor{constructor(e){super(e),this._chgListeners=[],this._notifications=null,this._timer=null,this._observable=new O,this.length=0,this._items=[],Object.defineProperty(this,"uid",{value:E++})}static isCollection(e){return null!=e&&e instanceof r}normalizeCtorArgs(e){return e?Array.isArray(e)||e instanceof r?{items:e}:e:{}}destroy(){this.removeAll()}*[Symbol.iterator](){yield*this.items}get items(){return Object(g.d)(this._observable),this._items}set items(e){this._emitBeforeChanges(h.a.ADD)||(this._splice(0,this.length,j(e)),this._emitAfterChanges(h.a.ADD))}hasEventListener(e){return"change"===e?this._chgListeners.length>0:this._emitter.hasEventListener(e)}on(e,t){if("change"===e){const e=this._chgListeners,i={removed:!1,callback:t}
return e.push(i),this._notifications&&this._notifications.push({listeners:e.slice(),items:this._items.slice(),changes:[]}),{remove(){this.remove=v,i.removed=!0,e.splice(e.indexOf(i),1)}}}return this._emitter.on(e,t)}once(e,t){const i=this.on(e,t)
return{remove(){i.remove()}}}add(e,t){if(Object(g.d)(this._observable),this._emitBeforeChanges(h.a.ADD))return this
const i=this.getNextIndex(null!=t?t:null)
return this._splice(i,0,[e]),this._emitAfterChanges(h.a.ADD),this}addMany(e,t=this._items.length){if(Object(g.d)(this._observable),!e||!e.length)return this
if(this._emitBeforeChanges(h.a.ADD))return this
const i=this.getNextIndex(t)
return this._splice(i,0,j(e)),this._emitAfterChanges(h.a.ADD),this}at(e){if(Object(g.d)(this._observable),(e=Math.trunc(e)||0)<0&&(e+=this.length),!(e<0||e>=this.length))return this._items[e]}removeAll(){if(Object(g.d)(this._observable),!this.length||this._emitBeforeChanges(h.a.REMOVE))return[]
const e=this._splice(0,this.length)||[]
return this._emitAfterChanges(h.a.REMOVE),e}clone(){return Object(g.d)(this._observable),this._createNewInstance({items:this._items.map(o.a)})}concat(...e){Object(g.d)(this._observable)
const t=e.map(j)
return this._createNewInstance({items:this._items.concat(...t)})}drain(e,t){if(Object(g.d)(this._observable),!this.length||this._emitBeforeChanges(h.a.REMOVE))return
const i=Object(l.c)(this._splice(0,this.length)),r=i.length
for(let s=0;s<r;s++)e.call(t,i[s],s,i)
this._emitAfterChanges(h.a.REMOVE)}every(e,t){return Object(g.d)(this._observable),this._items.every(e,t)}filter(e,t){let i
return Object(g.d)(this._observable),i=2===arguments.length?this._items.filter(e,t):this._items.filter(e),this._createNewInstance({items:i})}find(e,t){return Object(g.d)(this._observable),this._items.find(e,t)}findIndex(e,t){return Object(g.d)(this._observable),this._items.findIndex(e,t)}flatten(e,t){Object(g.d)(this._observable)
const i=[]
return function e(t,i,r,s){i&&i.forEach((i,n,a)=>{t.push(i),e(t,r.call(s,i,n,a),r,s)})}(i,this,e,t),new r(i)}forEach(e,t){return Object(g.d)(this._observable),this._items.forEach(e,t)}getItemAt(e){return Object(g.d)(this._observable),this._items[e]}getNextIndex(e){Object(g.d)(this._observable)
const t=this.length
return(e=null==e?t:e)<0?e=0:e>t&&(e=t),e}includes(e,t=0){return Object(g.d)(this._observable),this._items.includes(e,t)}indexOf(e,t=0){return Object(g.d)(this._observable),this._items.indexOf(e,t)}join(e=","){return Object(g.d)(this._observable),this._items.join(e)}lastIndexOf(e,t=this.length-1){return Object(g.d)(this._observable),this._items.lastIndexOf(e,t)}map(e,t){Object(g.d)(this._observable)
const i=this._items.map(e,t)
return new r({items:i})}reorder(e,t=this.length-1){Object(g.d)(this._observable)
const i=this.indexOf(e)
if(-1!==i){if(t<0?t=0:t>=this.length&&(t=this.length-1),i!==t){if(this._emitBeforeChanges(h.a.MOVE))return e
this._splice(i,1),this._splice(t,0,[e]),this._emitAfterChanges(h.a.MOVE)}return e}}pop(){if(Object(g.d)(this._observable),!this.length||this._emitBeforeChanges(h.a.REMOVE))return
const e=_(this._splice(this.length-1,1))
return this._emitAfterChanges(h.a.REMOVE),e}push(...e){return Object(g.d)(this._observable),this._emitBeforeChanges(h.a.ADD)||(this._splice(this.length,0,e),this._emitAfterChanges(h.a.ADD)),this.length}reduce(e,t){Object(g.d)(this._observable)
const i=this._items
return 2===arguments.length?i.reduce(e,t):i.reduce(e)}reduceRight(e,t){Object(g.d)(this._observable)
const i=this._items
return 2===arguments.length?i.reduceRight(e,t):i.reduceRight(e)}remove(e){return Object(g.d)(this._observable),this.removeAt(this.indexOf(e))}removeAt(e){if(Object(g.d)(this._observable),e<0||e>=this.length||this._emitBeforeChanges(h.a.REMOVE))return
const t=_(this._splice(e,1))
return this._emitAfterChanges(h.a.REMOVE),t}removeMany(e){if(Object(g.d)(this._observable),!e||!e.length||this._emitBeforeChanges(h.a.REMOVE))return[]
const t=e instanceof r?e.toArray():e,i=this._items,s=[],n=t.length
for(let e=0;e<n;e++){const r=t[e],n=i.indexOf(r)
if(n>-1){const r=1+w(t,i,e+1,n+1),a=this._splice(n,r)
a&&a.length>0&&s.push.apply(s,a),e+=r-1}}return this._emitAfterChanges(h.a.REMOVE),s}reverse(){if(Object(g.d)(this._observable),this._emitBeforeChanges(h.a.MOVE))return this
const e=this._splice(0,this.length)
return e&&(e.reverse(),this._splice(0,0,e)),this._emitAfterChanges(h.a.MOVE),this}shift(){if(Object(g.d)(this._observable),!this.length||this._emitBeforeChanges(h.a.REMOVE))return
const e=_(this._splice(0,1))
return this._emitAfterChanges(h.a.REMOVE),e}slice(e=0,t=this.length){return Object(g.d)(this._observable),this._createNewInstance({items:this._items.slice(e,t)})}some(e,t){return Object(g.d)(this._observable),this._items.some(e,t)}sort(e){if(Object(g.d)(this._observable),!this.length||this._emitBeforeChanges(h.a.MOVE))return this
const t=Object(l.c)(this._splice(0,this.length))
return arguments.length?t.sort(e):t.sort(),this._splice(0,0,t),this._emitAfterChanges(h.a.MOVE),this}splice(e,t,...i){Object(g.d)(this._observable)
const r=(t?h.a.REMOVE:0)|(i.length?h.a.ADD:0)
if(this._emitBeforeChanges(r))return[]
const s=this._splice(e,t,i)||[]
return this._emitAfterChanges(r),s}toArray(){return Object(g.d)(this._observable),this._items.slice()}toJSON(){return Object(g.d)(this._observable),this.toArray()}toLocaleString(){return Object(g.d)(this._observable),this._items.toLocaleString()}toString(){return Object(g.d)(this._observable),this._items.toString()}unshift(...e){return Object(g.d)(this._observable),!e.length||this._emitBeforeChanges(h.a.ADD)||(this._splice(0,0,e),this._emitAfterChanges(h.a.ADD)),this.length}_createNewInstance(e){return new this.constructor(e)}_splice(e,t,i){const r=this._items,s=this.itemType
let n,a
if(!this._notifications&&this.hasEventListener("change")&&(this._notifications=[{listeners:this._chgListeners.slice(),items:this._items.slice(),changes:[]}],this._timer&&this._timer.remove(),this._timer=Object(p.b)(()=>this._dispatchChange())),t){if(a=r.splice(e,t),this.hasEventListener("before-remove")){const t=y.acquire()
t.target=this,t.cancellable=!0
for(let i=0,s=a.length;i<s;i++)n=a[i],t.reset(n),this.emit("before-remove",t),t.defaultPrevented&&(a.splice(i,1),r.splice(e,0,n),e+=1,i-=1,s-=1)
y.release(t)}if(this.length=this._items.length,this.hasEventListener("after-remove")){const e=y.acquire()
e.target=this,e.cancellable=!1
const t=a.length
for(let i=0;i<t;i++)e.reset(a[i]),this.emit("after-remove",e)
y.release(e)}}if(i&&i.length){if(s){const e=[]
for(const t of i){const i=s.ensureType(t)
null==i&&null!=t||e.push(i)}i=e}const t=this.hasEventListener("before-add"),n=this.hasEventListener("after-add"),a=e===this.length
if(t||n){const s=y.acquire()
s.target=this,s.cancellable=!0
const o=y.acquire()
o.target=this,o.cancellable=!1
for(const l of i)t?(s.reset(l),this.emit("before-add",s),s.defaultPrevented||(a?r.push(l):r.splice(e++,0,l),this._set("length",r.length),n&&(o.reset(l),this.emit("after-add",o)))):(a?r.push(l):r.splice(e++,0,l),this._set("length",r.length),o.reset(l),this.emit("after-add",o))
y.release(o),y.release(s)}else{if(a)for(const e of i)r.push(e)
else r.splice(e,0,...i)
this._set("length",r.length)}}return(i&&i.length||a&&a.length)&&this._notifyChangeEvent(i,a),a}_emitBeforeChanges(e){let t=!1
if(this.hasEventListener("before-changes")){const i=y.acquire()
i.target=this,i.cancellable=!0,i.type=e,this.emit("before-changes",i),t=i.defaultPrevented,y.release(i)}return t}_emitAfterChanges(e){if(this.hasEventListener("after-changes")){const t=y.acquire()
t.target=this,t.cancellable=!1,t.type=e,this.emit("after-changes",t),y.release(t)}this._observable.notify()}_notifyChangeEvent(e,t){this.hasEventListener("change")&&this._notifications&&this._notifications[this._notifications.length-1].changes.push({added:e,removed:t})}_dispatchChange(){if(this._timer&&(this._timer.remove(),this._timer=null),!this._notifications)return
const e=this._notifications
this._notifications=null
for(const t of e){const e=t.changes
x.clear(),k.clear(),C.clear()
for(const{added:t,removed:i}of e){if(t)if(0===C.size&&0===k.size)for(const e of t)x.add(e)
else for(const e of t)k.has(e)?(C.add(e),k.delete(e)):C.has(e)||x.add(e)
if(i)if(0===C.size&&0===x.size)for(const e of i)k.add(e)
else for(const e of i)x.has(e)?x.delete(e):(C.delete(e),k.add(e))}const i=n.a.acquire()
x.forEach(e=>{i.push(e)})
const r=n.a.acquire()
k.forEach(e=>{r.push(e)})
const s=this._items,a=t.items,o=n.a.acquire()
if(C.forEach(e=>{a.indexOf(e)!==s.indexOf(e)&&o.push(e)}),t.listeners&&(i.length||r.length||o.length)){const e={target:this,added:i,removed:r,moved:o},s=t.listeners.length
for(let i=0;i<s;i++){const r=t.listeners[i]
r.removed||r.callback.call(this,e)}}n.a.release(i),n.a.release(r),n.a.release(o)}x.clear(),k.clear(),C.clear()}}
A.ofType=e=>{if(!e)return r
if(S.has(e))return S.get(e)
let t=null
if("function"==typeof e)t=e.prototype.declaredClass
else if(e.base)t=e.base.prototype.declaredClass
else for(const i in e.typeMap){const r=e.typeMap[i].prototype.declaredClass
t?t+=" | "+r:t=r}let i=class extends r{}
return Object(s.a)([Object(b.a)({Type:e,ensureType:"function"==typeof e?Object(d.m)(e):Object(d.k)(e)})],i.prototype,"itemType",void 0),i=Object(s.a)([Object(m.a)(`esri.core.Collection<${t}>`)],i),S.set(e,i),i},Object(s.a)([Object(u.b)()],A.prototype,"length",void 0),Object(s.a)([Object(u.b)()],A.prototype,"items",null),A=r=Object(s.a)([Object(m.a)("esri.core.Collection")],A)
const I=A},897:function(e,t,i){"use strict"
i.d(t,"a",(function(){return c})),i.d(t,"b",(function(){return h}))
var r=i(78),s=i(660),n=i(354),a=i(177),o=i(292)
const l=a.a.getLogger("esri.assets")
function c(e,t){return Object(s.default)(h(e),t)}function h(e){if(!r.default.assetsPath)throw l.errorOnce("The API assets location needs to be set using config.assetsPath. More information: https://arcg.is/1OzLe50"),new n.a("assets:path-not-set","config.assetsPath is not set")
return Object(o.B)(r.default.assetsPath,e)}},931:function(e,t,i){"use strict"
i.d(t,"a",(function(){return c})),i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return a})),i.d(t,"d",(function(){return o})),i.d(t,"e",(function(){return l}))
var r=i(20),s=i(861)
function n(e,t,i){return Object(s.j)(e.map((e,r)=>t.apply(i,[e,r])))}function a(e,t,i){return Object(s.j)(e.map((e,r)=>t.apply(i,[e,r]))).then(e=>e.map(e=>e.value))}function o(e){return Object(r.j)(e)?Object(s.t)():e.then(e=>({ok:!0,value:e})).catch(e=>({ok:!1,error:e}))}function l(e){return e.then(e=>({ok:!0,value:e})).catch(e=>(Object(s.u)(e),{ok:!1,error:e}))}function c(e){if(!0===e.ok)return e.value
throw e.error}},971:function(e,t,i){"use strict"
function r(e){return(t,i)=>{t[i]=e}}i.d(t,"a",(function(){return r}))},984:function(e,t,i){"use strict"
var r
i.d(t,"a",(function(){return r})),function(e){e[e.ADD=1]="ADD",e[e.REMOVE=2]="REMOVE",e[e.MOVE=4]="MOVE"}(r||(r={}))}}])
