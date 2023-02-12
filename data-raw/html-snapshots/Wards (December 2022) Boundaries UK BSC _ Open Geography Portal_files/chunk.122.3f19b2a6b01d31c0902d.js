(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[122,22,42,80,278,381],{1002:function(e,t,r){"use strict"
r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return l})),r.d(t,"c",(function(){return c})),r.d(t,"d",(function(){return a}))
var n=r(20),i=r(961)
const s=-3
var a,o;(o=a||(a={}))[o.ALL=0]="ALL",o[o.SOME=1]="SOME"
class l{constructor(e,t,r){this._namespace=e,this._storage=t,this._removeFunc=!1,this._hit=0,this._miss=0,this._storage.register(this),this._namespace+=":",r&&(this._storage.registerRemoveFunc(this._namespace,r),this._removeFunc=!0)}destroy(){this._storage.clear(this._namespace),this._removeFunc&&this._storage.deregisterRemoveFunc(this._namespace),this._storage.deregister(this),this._storage=null}get namespace(){return this._namespace.slice(0,-1)}get hitRate(){return this._hit/(this._hit+this._miss)}get size(){return this._storage.size}get maxSize(){return this._storage.maxSize}resetHitRate(){this._hit=this._miss=0}put(e,t,r,n=0){this._storage.put(this._namespace+e,t,r,n)}get(e){const t=this._storage.get(this._namespace+e)
return void 0===t?++this._miss:++this._hit,t}pop(e){const t=this._storage.pop(this._namespace+e)
return void 0===t?++this._miss:++this._hit,t}updateSize(e,t,r){this._storage.updateSize(this._namespace+e,t,r)}clear(){this._storage.clear(this._namespace)}clearAll(){this._storage.clearAll()}getStats(){return this._storage.getStats()}resetStats(){this._storage.resetStats()}}class c{constructor(e=10485760){this._maxSize=e,this._db=new Map,this._size=0,this._hit=0,this._miss=0,this._removeFuncs=new i.a,this._users=new i.a}destroy(){this.clearAll(),this._removeFuncs.clear(),this._users.clear(),this._db=null}register(e){this._users.push(e)}deregister(e){this._users.removeUnordered(e)}registerRemoveFunc(e,t){this._removeFuncs.push([e,t])}deregisterRemoveFunc(e){this._removeFuncs.filterInPlace(t=>t[0]!==e)}get size(){return this._size}get maxSize(){return this._maxSize}set maxSize(e){this._maxSize=Math.max(e,0),this._checkSizeLimit()}put(e,t,r,n){const i=this._db.get(e)
if(i&&(this._size-=i.size,this._db.delete(e),i.entry!==t&&this._notifyRemove(e,i.entry,a.ALL)),r>this._maxSize)return void this._notifyRemove(e,t,a.ALL)
if(void 0===t)return void console.warn("Refusing to cache undefined entry ")
if(!r||r<0)return void console.warn("Refusing to cache entry with invalid size "+r)
const o=1+Math.max(n,s)-s
this._db.set(e,{entry:t,size:r,lifetime:o,lives:o}),this._size+=r,this._checkSizeLimit()}updateSize(e,t,r){const i=this._db.get(e)
if(i&&i.entry===t){for(this._size-=i.size;r>this._maxSize;){const i=this._notifyRemove(e,t,a.SOME)
if(!(Object(n.k)(i)&&i>0))return void this._db.delete(e)
r=i}i.size=r,this._size+=r,this._checkSizeLimit()}}pop(e){const t=this._db.get(e)
if(t)return this._size-=t.size,this._db.delete(e),++this._hit,t.entry;++this._miss}get(e){const t=this._db.get(e)
if(void 0!==t)return this._db.delete(e),t.lives=t.lifetime,this._db.set(e,t),++this._hit,t.entry;++this._miss}getStats(){const e={Size:Math.round(this._size/1048576)+"/"+Math.round(this._maxSize/1048576)+"MB","Hit rate":Math.round(100*this._getHitRate())+"%",Entries:this._db.size.toString()},t={},r=new Array
this._db.forEach((e,n)=>{const i=e.lifetime
r[i]=(r[i]||0)+e.size,this._users.forAll(r=>{const i=r.namespace
if(n.startsWith(i)){const r=t[i]||0
t[i]=r+e.size}})})
const n={}
this._users.forAll(e=>{const r=e.namespace
if(!isNaN(e.hitRate)&&e.hitRate>0){const i=t[r]||0
t[r]=i,n[r]=Math.round(100*e.hitRate)+"%"}else n[r]="0%"})
const i=Object.keys(t)
i.sort((e,r)=>t[r]-t[e]),i.forEach(r=>e[r]=Math.round(t[r]/2**20)+"MB / "+n[r])
for(let t=r.length-1;t>=0;--t){const n=r[t]
n&&(e["Priority "+(t+s-1)]=Math.round(n/this.size*100)+"%")}return e}resetStats(){this._hit=this._miss=0,this._users.forAll(e=>e.resetHitRate())}clear(e){this._db.forEach((t,r)=>{r.startsWith(e)&&(this._size-=t.size,this._db.delete(r),this._notifyRemove(r,t.entry,a.ALL))})}clearAll(){this._db.forEach((e,t)=>this._notifyRemove(t,e.entry,a.ALL)),this._size=0,this._db.clear()}_getHitRate(){return this._hit/(this._hit+this._miss)}_notifyRemove(e,t,r){let n
return this._removeFuncs.some(i=>{if(e.startsWith(i[0])){const e=i[1](t,r)
return"number"==typeof e&&(n=e),!0}return!1}),n}_checkSizeLimit(){if(!(this._size<=this._maxSize))for(const[e,t]of this._db){if(this._db.delete(e),t.lives<=1){this._size-=t.size
const r=this._notifyRemove(e,t.entry,a.SOME)
Object(n.k)(r)&&r>0&&(this._size+=r,t.lives=t.lifetime,t.size=r,this._db.set(e,t))}else--t.lives,this._db.set(e,t)
if(this._size<=.9*this.maxSize)return}}}},1003:function(e,t,r){"use strict"
r.d(t,"a",(function(){return d}))
var n=r(856),i=r(862),s=r(885),a=r(20),o=r(892),l=r(948),c=r(858),u=r(857)
let d=class extends i.a{constructor(){super(...arguments),this.updating=!1,this.handleId=0,this.handles=new s.a,this.scheduleHandleId=0,this.pendingPromises=new Set}destroy(){this.removeAll(),this.handles.destroy()}add(e,t,r={}){return this._installWatch(e,t,r,o.e)}addWhen(e,t,r={}){return this._installWatch(e,t,r,o.f)}addOnCollectionChange(e,t,{initial:r=!1}={}){const n=++this.handleId
return this.handles.add([Object(o.b)(e,"after-changes",this._createSyncUpdatingCallback(),o.c),Object(o.b)(e,"change",t,{onListenerAdd:r?e=>t({added:e.toArray(),removed:[]}):void 0})],n),{remove:()=>this.handles.remove(n)}}addPromise(e){if(Object(a.j)(e))return e
const t=++this.handleId
this.handles.add({remove:()=>{this.pendingPromises.delete(e)&&(0!==this.pendingPromises.size||this.handles.has(p)||this._set("updating",!1))}},t),this.pendingPromises.add(e),this._set("updating",!0)
const r=()=>this.handles.remove(t)
return e.then(r,r),e}removeAll(){this.pendingPromises.clear(),this.handles.removeAll(),this._set("updating",!1)}_installWatch(e,t,r={},n){const i=++this.handleId
r.sync||this._installSyncUpdatingWatch(e,i)
const s=n(e,t,r)
return this.handles.add(s,i),{remove:()=>this.handles.remove(i)}}_installSyncUpdatingWatch(e,t){const r=this._createSyncUpdatingCallback(),n=Object(o.e)(e,r,{sync:!0,equals:()=>!1})
return this.handles.add(n,t),n}_createSyncUpdatingCallback(){return()=>{this.handles.remove(p),++this.scheduleHandleId
const e=this.scheduleHandleId
this._get("updating")||this._set("updating",!0),this.handles.add(Object(l.b)(()=>{e===this.scheduleHandleId&&(this._set("updating",this.pendingPromises.size>0),this.handles.remove(p))}),p)}}}
Object(n.a)([Object(c.b)({readOnly:!0})],d.prototype,"updating",void 0),d=Object(n.a)([Object(u.a)("esri.views.support.WatchUpdatingTracking")],d)
const p=-42
var h,b;(b=h||(h={}))[b.NONE=0]="NONE",b[b.SYNC=1]="SYNC",b[b.INIT=2]="INIT"},1006:function(e,t,r){"use strict"
r.r(t),r.d(t,"default",(function(){return I}))
var n=r(856),i=r(897),s=r(354),a=r(860),o=r(178),l=r(903),c=r(20),u=r(292),d=r(858),p=r(859),h=r(865),b=r(857),f=r(658),y=r(914),m=r(862),O=r(177),g=(r(353),r(77),r(880))
const j=O.a.getLogger("esri.portal.PortalItemResource")
let v=class extends m.a{constructor(e){super(e),this.portalItem=null}normalizeCtorArgs(e){return e&&e.portalItem&&e.path?{...e,path:this._normalizePath(e.path,e.portalItem)}:e}set path(e){Object(c.k)(e)&&Object(u.u)(e)?j.error("portalitemresource:invalid-path","A portal item resource path must be relative"):this._set("path",e)}_castPath(e){return this._normalizePath(e,this.portalItem)}get url(){return this.portalItem&&this.path?`${this.portalItem.itemUrl}/resources/${this.path}`:null}get itemRelativeUrl(){return this.portalItem&&this.path?"./resources/"+this.path:null}fetch(e="json",t){const r=this.url
if(Object(c.j)(r))throw new s.a("portal-item-resource:fetch","Portal item resource does not refer to a valid item or path")
return this.portalItem.portal._request(r,{responseType:e,query:{token:this.portalItem.apiKey},signal:Object(c.i)(t,"signal")})}async update(e,t){return(await r.e(31).then(r.bind(null,1826))).addOrUpdateResource(this,"update",e,t)}hasPath(){return Object(c.k)(this.path)}_normalizePath(e,t){return Object(c.j)(e)?e:(e=e.replace(/^\/+/,""),Object(c.k)(t)&&Object(u.u)(e)&&(e=Object(u.E)(e,t.itemUrl)),e.replace(/^\/+/,"").replace(/^(\.\/)?resources\//,""))}}
Object(n.a)([Object(d.b)()],v.prototype,"portalItem",void 0),Object(n.a)([Object(d.b)({type:String,value:null})],v.prototype,"path",null),Object(n.a)([Object(g.a)("path")],v.prototype,"_castPath",null),Object(n.a)([Object(d.b)({type:String,readOnly:!0})],v.prototype,"url",null),Object(n.a)([Object(d.b)({type:String,readOnly:!0})],v.prototype,"itemRelativeUrl",null),v=Object(n.a)([Object(b.a)("esri.portal.PortalItemResource")],v)
const w=v
let S=class extends m.a{constructor(e){super(e),this.created=null,this.rating=null}}
Object(n.a)([Object(d.b)()],S.prototype,"created",void 0),Object(n.a)([Object(d.b)()],S.prototype,"rating",void 0),S=Object(n.a)([Object(b.a)("esri.portal.PortalRating")],S)
const x=S
var _
let M=_=class extends(Object(a.b)(l.a)){constructor(e){super(e),this.access=null,this.accessInformation=null,this.apiKey=null,this.applicationProxies=null,this.avgRating=null,this.categories=null,this.created=null,this.culture=null,this.description=null,this.extent=null,this.groupCategories=null,this.id=null,this.itemControl=null,this.licenseInfo=null,this.modified=null,this.name=null,this.numComments=null,this.numRatings=null,this.numViews=null,this.owner=null,this.ownerFolder=null,this.portal=null,this.screenshots=null,this.size=null,this.snippet=null,this.sourceJSON=null,this.tags=null,this.title=null,this.type=null,this.typeKeywords=null,this.url=null}static from(e){return Object(p.d)(_,e)}destroy(){this.portal=null}get displayName(){const e=this.type,t=this.typeKeywords||[]
let r=e
return"Feature Service"===e||"Feature Collection"===e?r=t.indexOf("Table")>-1?"Table":t.indexOf("Route Layer")>-1?"Route Layer":t.indexOf("Markup")>-1?"Markup":"Feature Layer":"Image Service"===e?r=t.indexOf("Elevation 3D Layer")>-1?"Elevation Layer":t.indexOf("Tiled Imagery")>-1?"Tiled Imagery Layer":"Imagery Layer":"Scene Service"===e?r="Scene Layer":"Media Service"===e?r="Media Layer":"Scene Package"===e?r="Scene Layer Package":"Stream Service"===e?r="Feature Layer":"Geoprocessing Service"===e&&this.portal&&this.portal.isPortal?r=t.indexOf("Web Tool")>-1?"Tool":"Geoprocessing Service":"Geocoding Service"===e?r="Locator":"Geoenrichment Service"===e?r="GeoEnrichment Service":"Microsoft Powerpoint"===e?r="Microsoft PowerPoint":"GeoJson"===e?r="GeoJSON":"Globe Service"===e?r="Globe Layer":"Vector Tile Service"===e?r="Tile Layer":"netCDF"===e?r="NetCDF":"Map Service"===e?r=-1===t.indexOf("Spatiotemporal")&&(t.indexOf("Hosted Service")>-1||t.indexOf("Tiled")>-1)&&-1===t.indexOf("Relational")?"Tile Layer":"Map Image Layer":e&&e.toLowerCase().indexOf("add in")>-1?r=e.replace(/(add in)/gi,"Add-In"):"datastore catalog service"===e?r="Big Data File Share":"Compact Tile Package"===e?r="Tile Package (tpkx)":"OGCFeatureServer"===e?r="OGC Feature Layer":"web mapping application"===e&&t.indexOf("configurableApp")>-1&&(r="Instant App"),r}readExtent(e){return e&&e.length?new f.default(e[0][0],e[0][1],e[1][0],e[1][1]):null}get iconUrl(){const e=this.type&&this.type.toLowerCase()||"",t=this.typeKeywords||[]
let r,n=!1,s=!1,a=!1,o=!1,l=!1,c=!1
return e.indexOf("service")>0||"feature collection"===e||"kml"===e||"wms"===e||"wmts"===e||"wfs"===e?(n=t.indexOf("Hosted Service")>-1,"feature service"===e||"feature collection"===e||"kml"===e||"wfs"===e?(s=t.indexOf("Table")>-1,a=t.indexOf("Route Layer")>-1,o=t.indexOf("Markup")>-1,l=-1!==t.indexOf("Spatiotemporal"),c=-1!==t.indexOf("UtilityNetwork"),r=l&&s?"spatiotemporaltable":s?"table":a?"routelayer":o?"markup":l?"spatiotemporal":n?"featureshosted":c?"utilitynetwork":"features"):r="map service"===e||"wms"===e||"wmts"===e?n||t.indexOf("Tiled")>-1||"wmts"===e?"maptiles":"mapimages":"scene service"===e?t.indexOf("Line")>-1?"sceneweblayerline":t.indexOf("3DObject")>-1?"sceneweblayermultipatch":t.indexOf("Point")>-1?"sceneweblayerpoint":t.indexOf("IntegratedMesh")>-1?"sceneweblayermesh":t.indexOf("PointCloud")>-1?"sceneweblayerpointcloud":t.indexOf("Polygon")>-1?"sceneweblayerpolygon":t.indexOf("Building")>-1?"sceneweblayerbuilding":t.indexOf("Voxel")>-1?"sceneweblayervoxel":"sceneweblayer":"image service"===e?t.indexOf("Elevation 3D Layer")>-1?"elevationlayer":t.indexOf("Tiled Imagery")>-1?"tiledimagerylayer":"imagery":"stream service"===e?"streamlayer":"media service"===e?"mediaservice":"vector tile service"===e?"vectortile":"datastore catalog service"===e?"datastorecollection":"geocoding service"===e?"geocodeservice":"geoprocessing service"===e&&t.indexOf("Web Tool")>-1&&this.portal&&this.portal.isPortal?"tool":"layers"):r="web map"===e||"cityengine web scene"===e?"maps":"web scene"===e?t.indexOf("ViewingMode-Local")>-1?"webscenelocal":"websceneglobal":"web mapping application"===e&&t.indexOf("configurableApp")>-1?"instantapps":"web mapping application"===e||"mobile application"===e||"application"===e||"operation view"===e||"desktop application"===e?"apps":"map document"===e||"map package"===e||"published map"===e||"scene document"===e||"globe document"===e||"basemap package"===e||"mobile basemap package"===e||"mobile map package"===e||"project package"===e||"project template"===e||"pro map"===e||"layout"===e||"layer"===e&&t.indexOf("ArcGIS Pro")>-1||"explorer map"===e&&t.indexOf("Explorer Document")?"mapsgray":"service definition"===e||"csv"===e||"shapefile"===e||"cad drawing"===e||"geojson"===e||"360 vr experience"===e||"netcdf"===e||"administrative report"===e?"datafiles":"explorer add in"===e||"desktop add in"===e||"windows viewer add in"===e||"windows viewer configuration"===e?"appsgray":"arcgis pro add in"===e||"arcgis pro configuration"===e?"addindesktop":"rule package"===e||"file geodatabase"===e||"sqlite geodatabase"===e||"csv collection"===e||"kml collection"===e||"windows mobile package"===e||"map template"===e||"desktop application template"===e||"gml"===e||"arcpad package"===e||"code sample"===e||"form"===e||"document link"===e||"earth configuration"===e||"operations dashboard add in"===e||"rules package"===e||"image"===e||"workflow manager package"===e||"explorer map"===e&&t.indexOf("Explorer Mapping Application")>-1||t.indexOf("Document")>-1?"datafilesgray":"network analysis service"===e||"geoprocessing service"===e||"geodata service"===e||"geometry service"===e||"geoprocessing package"===e||"locator package"===e||"geoprocessing sample"===e||"workflow manager service"===e?"toolsgray":"layer"===e||"layer package"===e||"explorer layer"===e?"layersgray":"scene package"===e?"scenepackage":"mobile scene package"===e?"mobilescenepackage":"tile package"===e||"compact tile package"===e?"tilepackage":"task file"===e?"taskfile":"report template"===e?"report-template":"statistical data collection"===e?"statisticaldatacollection":"insights workbook"===e?"workbook":"insights model"===e?"insightsmodel":"insights page"===e?"insightspage":"insights theme"===e?"insightstheme":"hub initiative"===e?"hubinitiative":"hubpage"===e?"hubpage":"hub event"===e?"hubevent":"hub site application"===e?"hubsite":"hub project"===e?"hubproject":"relational database connection"===e?"relationaldatabaseconnection":"big data file share"===e?"datastorecollection":"image collection"===e?"imagecollection":"style"===e?"style":"desktop style"===e?"desktopstyle":"dashboard"===e?"dashboard":"raster function template"===e?"rasterprocessingtemplate":"vector tile package"===e?"vectortilepackage":"ortho mapping project"===e?"orthomappingproject":"ortho mapping template"===e?"orthomappingtemplate":"solution"===e?"solutions":"geopackage"===e?"geopackage":"deep learning package"===e?"deeplearningpackage":"real time analytic"===e?"realtimeanalytics":"big data analytic"===e?"bigdataanalytics":"feed"===e?"feed":"excalibur imagery project"===e?"excaliburimageryproject":"notebook"===e?"notebook":"storymap"===e?"storymap":"survey123 add in"===e?"survey123addin":"mission"===e?"mission":"mission report"===e?"missionreport":"quickcapture project"===e?"quickcaptureproject":"pro report"===e?"proreport":"urban model"===e?"urbanmodel":"web experience"===e?"experiencebuilder":"web experience template"===e?"webexperiencetemplate":"experience builder widget"===e?"experiencebuilderwidget":"experience builder widget package"===e?"experiencebuilderwidgetpackage":"workflow"===e?"workflow":"insights script"===e?"insightsscript":"kernel gateway connection"===e?"kernelgatewayconnection":"hub initiative template"===e?"hubinitiativetemplate":"storymap theme"===e?"storymaptheme":"knowledge graph"===e?"knowledgegraph":"native application"===e?"nativeapp":"native application installer"===e?"nativeappinstaller":"link chart"===e?"linkchart":"investigation"===e?"investigation":"ogcfeatureserver"===e?"features":"pro project"===e?"proproject":"insights workbook package"===e?"insightsworkbookpackage":"apache parquet"===e?"apacheparquet":"maps",r?Object(i.b)("esri/images/portal/"+r+"16.png"):null}get isLayer(){return["Map Service","Feature Service","Feature Collection","Scene Service","Image Service","Stream Service","Vector Tile Service","WMTS","WMS"].indexOf(this.type)>-1}get itemUrl(){const e=this.get("portal.restUrl")
return e?e+"/content/items/"+this.id:null}get thumbnailUrl(){const e=this.itemUrl,t=this.thumbnail
return e&&t?this.portal._normalizeUrl(`${e}/info/${t}?f=json`):null}get userItemUrl(){const e=this.get("portal.restUrl")
if(!e)return null
const t=this.owner||this.get("portal.user.username")
return t?`${e}/content/users/${this.ownerFolder?`${t}/${this.ownerFolder}`:t}/items/${this.id}`:null}load(e){this.portal||(this.portal=y.a.getDefault())
const t=this.portal.load(e).then(()=>this.sourceJSON?this.sourceJSON:this.id&&this.itemUrl?this.portal._request(this.itemUrl,{signal:Object(c.k)(e)?e.signal:null,query:{token:this.apiKey}}):{}).then(e=>{this.sourceJSON=e,this.read(e)})
return this.addResolvingPromise(t),Promise.resolve(this)}addRating(e){const t={method:"post",query:{}}
return e instanceof x&&(e=e.rating),isNaN(e)||"number"!=typeof e||(t.query.rating=e),this.portal._request(this.itemUrl+"/addRating",t).then(()=>new x({rating:e,created:new Date}))}clone(){const e={access:this.access,accessInformation:this.accessInformation,applicationProxies:Object(o.a)(this.applicationProxies),avgRating:this.avgRating,categories:Object(o.a)(this.categories),created:Object(o.a)(this.created),culture:this.culture,description:this.description,extent:Object(o.a)(this.extent),groupCategories:Object(o.a)(this.groupCategories),id:this.id,itemControl:this.itemControl,licenseInfo:this.licenseInfo,modified:Object(o.a)(this.modified),name:this.name,numComments:this.numComments,numRatings:this.numRatings,numViews:this.numViews,owner:this.owner,ownerFolder:this.ownerFolder,portal:this.portal,screenshots:Object(o.a)(this.screenshots),size:this.size,snippet:this.snippet,tags:Object(o.a)(this.tags),thumbnail:this.thumbnail,title:this.title,type:this.type,typeKeywords:Object(o.a)(this.typeKeywords),url:this.url}
return this.loaded&&(e.loadStatus="loaded"),new _({sourceJSON:this.sourceJSON}).set(e)}createPostQuery(){const e=this.toJSON()
for(const t in e)"tags"===t&&null!==e[t]&&(e[t]=e[t].join(", ")),"typeKeywords"===t&&null!==e[t]&&(e[t]=e[t].join(", ")),"extent"===t&&e[t]&&(e[t]=JSON.stringify(e[t]))
return e}deleteRating(){return this.portal._request(this.itemUrl+"/deleteRating",{method:"post"}).then(()=>{})}fetchData(e="json",t){return this.portal._request(this.itemUrl+"/data",{responseType:e,...t,query:{token:this.apiKey}})}fetchRating(e){return this.portal._request(this.itemUrl+"/rating",{query:{token:this.apiKey},...e}).then(e=>null!=e.rating?(e.created=new Date(e.created),new x(e)):null)}fetchRelatedItems(e,t){return this.portal._requestToTypedArray(this.itemUrl+"/relatedItems",{query:{...e,token:this.apiKey},...t},_)}getThumbnailUrl(e){let t=this.thumbnailUrl
return t&&e&&(t+="&w="+e),t}reload(){return this.portal._request(this.itemUrl,{cacheBust:!0,query:{token:this.apiKey}}).then(e=>(this.sourceJSON=e,this.read(e),this))}update(e){return this.id?this.load().then(()=>this.portal._signIn()).then(()=>{const t=e&&e.data,r={method:"post"}
r.query=this.createPostQuery()
for(const e in r.query)null===r.query[e]&&(r.query[e]="")
return r.query.clearEmptyFields=!0,null!=t&&("string"==typeof t?r.query.text=t:"object"==typeof t&&(r.query.text=JSON.stringify(t))),this.portal._request(this.userItemUrl+"/update",r).then(()=>this.reload())}):Promise.reject(new s.a("portal:item-does-not-exist","The item does not exist yet and cannot be updated"))}updateThumbnail(e){return this.id?this.load().then(()=>this.portal._signIn()).then(()=>{const t=e.thumbnail,r=e.filename,n={method:"post"}
if("string"==typeof t)Object(u.w)(t)?n.query={data:t}:n.query={url:Object(u.C)(t)},Object(c.k)(r)&&(n.query.filename=r)
else{const e=new FormData
Object(c.k)(r)?e.append("file",t,r):e.append("file",t),n.body=e}return this.portal._request(this.userItemUrl+"/updateThumbnail",n).then(()=>this.reload())}):Promise.reject(new s.a("portal:item-does-not-exist","The item does not exist yet and cannot be updated"))}async fetchResources(e={},t){return(await r.e(31).then(r.bind(null,1826))).fetchResources(this,e,t)}async addResource(e,t,n){const i=await r.e(31).then(r.bind(null,1826))
return e.portalItem=this,i.addOrUpdateResource(e,"add",t,n)}async removeResource(e,t){const n=await r.e(31).then(r.bind(null,1826))
if(e.portalItem&&e.portalItem.itemUrl!==this.itemUrl)throw new s.a("removeresource:portal-item-mismatch","The portal item associated with the provided resource does not match the item")
return n.removeResource(this,e,t)}async removeAllResources(e){return(await r.e(31).then(r.bind(null,1826))).removeAllResources(this,e)}resourceFromPath(e){return new w({portalItem:this,path:e})}toJSON(){const e=this.extent,t={created:this.created&&this.created.getTime(),description:this.description,extent:e&&[[e.xmin,e.ymin],[e.xmax,e.ymax]],id:this.id,modified:this.modified&&this.modified.getTime(),name:this.name,owner:this.owner,ownerFolder:this.ownerFolder,snippet:this.snippet,tags:this.tags,thumbnail:this.thumbnail,title:this.title,type:this.type,typeKeywords:this.typeKeywords,url:this.url}
return Object(o.c)(t)}static fromJSON(e){if(!e)return null
if(e.declaredClass)throw new Error("JSON object is already hydrated")
return new _({sourceJSON:e})}_getPostQuery(){const e=this.toJSON()
for(const t in e)"tags"===t&&null!==e[t]&&(e[t]=e[t].join(", ")),"typeKeywords"===t&&null!==e[t]&&(e[t]=e[t].join(", ")),"extent"===t&&e[t]&&(e[t]=JSON.stringify(e[t]))
return e}}
Object(n.a)([Object(d.b)({type:["private","shared","org","public"]})],M.prototype,"access",void 0),Object(n.a)([Object(d.b)()],M.prototype,"accessInformation",void 0),Object(n.a)([Object(d.b)({type:String})],M.prototype,"apiKey",void 0),Object(n.a)([Object(d.b)({json:{read:{source:"appProxies"}}})],M.prototype,"applicationProxies",void 0),Object(n.a)([Object(d.b)()],M.prototype,"avgRating",void 0),Object(n.a)([Object(d.b)()],M.prototype,"categories",void 0),Object(n.a)([Object(d.b)({type:Date})],M.prototype,"created",void 0),Object(n.a)([Object(d.b)()],M.prototype,"culture",void 0),Object(n.a)([Object(d.b)()],M.prototype,"description",void 0),Object(n.a)([Object(d.b)({readOnly:!0})],M.prototype,"displayName",null),Object(n.a)([Object(d.b)({type:f.default})],M.prototype,"extent",void 0),Object(n.a)([Object(h.a)("extent")],M.prototype,"readExtent",null),Object(n.a)([Object(d.b)()],M.prototype,"groupCategories",void 0),Object(n.a)([Object(d.b)({readOnly:!0})],M.prototype,"iconUrl",null),Object(n.a)([Object(d.b)()],M.prototype,"id",void 0),Object(n.a)([Object(d.b)({readOnly:!0})],M.prototype,"isLayer",null),Object(n.a)([Object(d.b)()],M.prototype,"itemControl",void 0),Object(n.a)([Object(d.b)({readOnly:!0})],M.prototype,"itemUrl",null),Object(n.a)([Object(d.b)()],M.prototype,"licenseInfo",void 0),Object(n.a)([Object(d.b)({type:Date})],M.prototype,"modified",void 0),Object(n.a)([Object(d.b)()],M.prototype,"name",void 0),Object(n.a)([Object(d.b)()],M.prototype,"numComments",void 0),Object(n.a)([Object(d.b)()],M.prototype,"numRatings",void 0),Object(n.a)([Object(d.b)()],M.prototype,"numViews",void 0),Object(n.a)([Object(d.b)()],M.prototype,"owner",void 0),Object(n.a)([Object(d.b)()],M.prototype,"ownerFolder",void 0),Object(n.a)([Object(d.b)({type:y.a})],M.prototype,"portal",void 0),Object(n.a)([Object(d.b)()],M.prototype,"screenshots",void 0),Object(n.a)([Object(d.b)()],M.prototype,"size",void 0),Object(n.a)([Object(d.b)()],M.prototype,"snippet",void 0),Object(n.a)([Object(d.b)()],M.prototype,"sourceJSON",void 0),Object(n.a)([Object(d.b)()],M.prototype,"tags",void 0),Object(n.a)([Object(d.b)()],M.prototype,"thumbnail",void 0),Object(n.a)([Object(d.b)({readOnly:!0})],M.prototype,"thumbnailUrl",null),Object(n.a)([Object(d.b)()],M.prototype,"title",void 0),Object(n.a)([Object(d.b)()],M.prototype,"type",void 0),Object(n.a)([Object(d.b)()],M.prototype,"typeKeywords",void 0),Object(n.a)([Object(d.b)()],M.prototype,"url",void 0),Object(n.a)([Object(d.b)({readOnly:!0})],M.prototype,"userItemUrl",null),M=_=Object(n.a)([Object(b.a)("esri.portal.PortalItem")],M)
const I=M},1011:function(e,t,r){"use strict"
r.d(t,"a",(function(){return g})),r.d(t,"b",(function(){return j}))
var n=r(856),i=r(862),s=r(20),a=r(1045),o=r(178),l=r(913)
class c{constructor(){this._propertyOriginMap=new Map,this._originStores=new Array(l.b),this._values=new Map,this.multipleOriginsSupported=!0}clone(e){const t=new c,r=this._originStores[l.a.DEFAULTS]
r&&r.forEach((e,r)=>{t.set(r,Object(o.a)(e),l.a.DEFAULTS)})
for(let r=l.a.SERVICE;r<l.b;r++){const n=this._originStores[r]
n&&n.forEach((n,i)=>{e&&e.has(i)||t.set(i,Object(o.a)(n),r)})}return t}get(e,t){const r=void 0===t?this._values:this._originStores[t]
return r?r.get(e):void 0}keys(e){const t=null==e?this._values:this._originStores[e]
return t?[...t.keys()]:[]}set(e,t,r=l.a.USER){let n=this._originStores[r]
if(n||(n=new Map,this._originStores[r]=n),n.set(e,t),!this._values.has(e)||Object(s.c)(this._propertyOriginMap.get(e))<=r){const n=this._values.get(e)
return this._values.set(e,t),this._propertyOriginMap.set(e,r),n!==t}return!1}delete(e,t=l.a.USER){const r=this._originStores[t]
if(!r)return
const n=r.get(e)
if(r.delete(e),this._values.has(e)&&this._propertyOriginMap.get(e)===t){this._values.delete(e)
for(let r=t-1;r>=0;r--){const t=this._originStores[r]
if(t&&t.has(e)){this._values.set(e,t.get(e)),this._propertyOriginMap.set(e,r)
break}}}return n}has(e,t){const r=void 0===t?this._values:this._originStores[t]
return!!r&&r.has(e)}revert(e,t){for(;t>0&&!this.has(e,t);)--t
const r=this._originStores[t],n=r&&r.get(e),i=this._values.get(e)
return this._values.set(e,n),this._propertyOriginMap.set(e,t),i!==n}originOf(e){return this._propertyOriginMap.get(e)||l.a.DEFAULTS}forEach(e){this._values.forEach(e)}}var u=r(977),d=r(920),p=r(857)
const h=e=>{let t=class extends e{constructor(...e){super(...e)
const t=Object(s.c)(Object(d.a)(this)),r=t.store,n=new c
t.store=n,Object(a.a)(t,r,n)}read(e,t){Object(u.a)(this,e,t)}getAtOrigin(e,t){const r=b(this),n=Object(l.e)(t)
if("string"==typeof e)return r.get(e,n)
const i={}
return e.forEach(e=>{i[e]=r.get(e,n)}),i}originOf(e){return Object(l.c)(this.originIdOf(e))}originIdOf(e){return b(this).originOf(e)}revert(e,t){const r=b(this),n=Object(l.e)(t),i=Object(d.a)(this)
let s
s="string"==typeof e?"*"===e?r.keys(n):[e]:e,s.forEach(e=>{i.invalidate(e),r.revert(e,n),i.commit(e)})}}
return t=Object(n.a)([Object(p.a)("esri.core.ReadOnlyMultiOriginJSONSupport")],t),t}
function b(e){return Object(d.a)(e).store}let f=class extends(h(i.a)){}
f=Object(n.a)([Object(p.a)("esri.core.ReadOnlyMultiOriginJSONSupport")],f)
var y=r(980)
const m=e=>{let t=class extends e{constructor(...e){super(...e)}clear(e,t="user"){return O(this).delete(e,Object(l.e)(t))}write(e={},t){return Object(y.b)(this,e=e||{},t),e}setAtOrigin(e,t,r){Object(d.a)(this).setAtOrigin(e,t,Object(l.e)(r))}removeOrigin(e){const t=O(this),r=Object(l.e)(e),n=t.keys(r)
for(const e of n)t.originOf(e)===r&&t.set(e,t.get(e,r),l.a.USER)}updateOrigin(e,t){const r=O(this),n=Object(l.e)(t),i=this.get(e)
for(let t=n+1;t<l.b;++t)r.delete(e,t)
r.set(e,i,n)}toJSON(e){return this.write({},e)}}
return t=Object(n.a)([Object(p.a)("esri.core.WriteableMultiOriginJSONSupport")],t),t.prototype.toJSON.isDefaultToJSON=!0,t}
function O(e){return Object(d.a)(e).store}const g=e=>{let t=class extends(m(h(e))){constructor(...e){super(...e)}}
return t=Object(n.a)([Object(p.a)("esri.core.MultiOriginJSONSupport")],t),t}
let j=class extends(g(i.a)){}
j=Object(n.a)([Object(p.a)("esri.core.MultiOriginJSONSupport")],j)},1012:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return i}))
var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{}
function i(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function s(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}}).call(this,r(39))},1016:function(e,t,r){"use strict"
r.d(t,"a",(function(){return a}))
var n=r(881)
function i(e){return"oid"===e.type||"esriFieldTypeOID"===e.type}function s(e){return"global-id"===e.type||"esriFieldTypeGlobalID"===e.type}class a{constructor(e){if(this.fields=e,this._fieldsMap=new Map,this._dateFieldsSet=new Set,this._numericFieldsSet=new Set,this.dateFields=[],this.numericFields=[],this._requiredFields=null,!e)return
const t=[]
for(const a of e){const e=a&&a.name
if(e){const l=o(e)
this._fieldsMap.set(e,a),this._fieldsMap.set(l,a),t.push(l),"date"===(r=a).type||"esriFieldTypeDate"===r.type?(this.dateFields.push(a),this._dateFieldsSet.add(a)):Object(n.q)(a)&&(this._numericFieldsSet.add(a),this.numericFields.push(a)),i(a)||s(a)||(a.editable=null==a.editable||!!a.editable,a.nullable=null==a.nullable||!!a.nullable)}}var r
t.sort(),this.uid=t.join(",")}destroy(){this._fieldsMap.clear()}get requiredFields(){if(!this._requiredFields){this._requiredFields=[]
for(const e of this.fields)i(e)||s(e)||e.nullable||void 0!==Object(n.o)(e)||this._requiredFields.push(e)}return this._requiredFields}has(e){return null!=this.get(e)}get(e){return null!=e?this._fieldsMap.get(e)||this._fieldsMap.get(o(e)):void 0}isDateField(e){return this._dateFieldsSet.has(this.get(e))}isNumericField(e){return this._numericFieldsSet.has(this.get(e))}normalizeFieldName(e){const t=this.get(e)
if(t)return t.name}}function o(e){return e.toLowerCase().trim()}},1019:function(e,t,r){"use strict"
var n,i
function s(e){return e&&"esri.renderers.visualVariables.SizeVariable"===e.declaredClass}function a(e){return null!=e&&!isNaN(e)&&isFinite(e)}function o(e){return e.valueExpression?n.Expression:e.field&&"string"==typeof e.field?n.Field:n.Unknown}function l(e,t){const r=t||o(e),s=e.valueUnit||"unknown"
return r===n.Unknown?i.Constant:e.stops?i.Stops:null!=e.minSize&&null!=e.maxSize&&null!=e.minDataValue&&null!=e.maxDataValue?i.ClampedLinear:"unknown"===s?null!=e.minSize&&null!=e.minDataValue?e.minSize&&e.minDataValue?i.Proportional:i.Additive:i.Identity:i.RealWorldSize}r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return o})),r.d(t,"d",(function(){return l})),r.d(t,"e",(function(){return s})),r.d(t,"f",(function(){return a})),function(e){e.Unknown="unknown",e.Expression="expression",e.Field="field"}(n||(n={})),function(e){e.Unknown="unknown",e.Stops="stops",e.ClampedLinear="clamped-linear",e.Proportional="proportional",e.Additive="additive",e.Constant="constant",e.Identity="identity",e.RealWorldSize="real-world-size"}(i||(i={}))},1023:function(e,t,r){"use strict"
r.d(t,"a",(function(){return n}))
const n=new(r(863).a)({esriFieldTypeSmallInteger:"small-integer",esriFieldTypeInteger:"integer",esriFieldTypeSingle:"single",esriFieldTypeDouble:"double",esriFieldTypeLong:"long",esriFieldTypeString:"string",esriFieldTypeDate:"date",esriFieldTypeOID:"oid",esriFieldTypeGeometry:"geometry",esriFieldTypeBlob:"blob",esriFieldTypeRaster:"raster",esriFieldTypeGUID:"guid",esriFieldTypeGlobalID:"global-id",esriFieldTypeXML:"xml"})},1024:function(e,t,r){"use strict"
r.d(t,"a",(function(){return h}))
var n,i=r(856),s=r(178),a=r(858),o=(r(859),r(868)),l=r(857),c=r(911),u=r(965),d=r(1036)
let p=n=class extends(Object(u.a)(c.a)){constructor(e){super(e),this.description=null,this.label=null,this.symbol=null,this.type="simple"}async collectRequiredFields(e,t){await Promise.all([this.collectSymbolFields(e,t),this.collectVVRequiredFields(e,t)])}async collectSymbolFields(e,t){await Promise.all(this.getSymbols().map(r=>r.collectRequiredFields(e,t)))}getSymbol(e,t){return this.symbol}async getSymbolAsync(e,t){return this.symbol}getSymbols(){return this.symbol?[this.symbol]:[]}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce((e,t)=>e+t.getAttributeHash(),"")}getMeshHash(){return this.getSymbols().reduce((e,t)=>e+JSON.stringify(t),"")}get arcadeRequired(){return this.arcadeRequiredForVisualVariables}clone(){return new n({description:this.description,label:this.label,symbol:this.symbol&&this.symbol.clone(),visualVariables:Object(s.a)(this.visualVariables),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})}}
Object(i.a)([Object(a.b)({type:String,json:{write:!0}})],p.prototype,"description",void 0),Object(i.a)([Object(a.b)({type:String,json:{write:!0}})],p.prototype,"label",void 0),Object(i.a)([Object(a.b)(d.b)],p.prototype,"symbol",void 0),Object(i.a)([Object(o.a)({simple:"simple"})],p.prototype,"type",void 0),p=n=Object(i.a)([Object(l.a)("esri.renderers.SimpleRenderer")],p)
const h=p},1028:function(e,t,r){"use strict"
r.d(t,"a",(function(){return b}))
var n,i=r(856),s=r(178),a=r(858),o=(r(859),r(857)),l=r(864),c=r(881),u=r(911),d=r(965),p=r(1073)
let h=n=class extends(Object(d.a)(u.a)){constructor(e){super(e),this.config=null,this.fieldMap=null,this.scaleExpression=null,this.scaleExpressionTitle=null,this.url=null,this.type="dictionary"}get _loader(){return new p.DictionaryLoader(this.url,this.config,this.fieldMap)}writeData(e,t){e&&(t.scalingExpressionInfo={expression:e,returnType:"number"})}writeVisualVariables(e,t,r,n){null!=n&&n.origin||super.writeVisualVariables(e,t,r,n)}clone(){return new n({config:Object(s.a)(this.config),scaleExpression:this.scaleExpression,scaleExpressionTitle:this.scaleExpressionTitle,fieldMap:Object(s.a)(this.fieldMap),url:Object(s.a)(this.url),visualVariables:Object(s.a)(this.visualVariables)})}async getSymbolAsync(e,t){return this._loader.getSymbolAsync(e,t)}async collectRequiredFields(e,t){await this.collectVVRequiredFields(e,t),this.scaleExpression&&await Object(c.a)(e,t,this.scaleExpression)
for(const r in this.fieldMap){const n=this.fieldMap[r]
t.has(n)&&e.add(n)}}get arcadeRequired(){return!0}getSymbol(){return null}getSymbols(){return[]}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce((e,t)=>e+t.getAttributeHash(),"")}getMeshHash(){return`${this.url}-${JSON.stringify(this.fieldMap)}`}getSymbolFields(){return this._loader.getSymbolFields()}}
Object(i.a)([Object(a.b)({type:p.DictionaryLoader})],h.prototype,"_loader",null),Object(i.a)([Object(a.b)({type:Object,json:{read:{source:"configuration"},write:{target:"configuration"}}})],h.prototype,"config",void 0),Object(i.a)([Object(a.b)({type:Object,json:{write:!0}})],h.prototype,"fieldMap",void 0),Object(i.a)([Object(a.b)({type:String,json:{read:{source:"scalingExpressionInfo.expression"},write:!0}})],h.prototype,"scaleExpression",void 0),Object(i.a)([Object(l.a)("scaleExpression")],h.prototype,"writeData",null),Object(i.a)([Object(a.b)({type:String,json:{read:{source:"scalingExpressionInfo.title"},write:{target:"scalingExpressionInfo.title",overridePolicy(e){return{enabled:!!e&&!!this.scaleExpression}}}}})],h.prototype,"scaleExpressionTitle",void 0),Object(i.a)([Object(a.b)({type:String,json:{write:!0}})],h.prototype,"url",void 0),Object(i.a)([Object(l.a)("visualVariables")],h.prototype,"writeVisualVariables",null),h=n=Object(i.a)([Object(o.a)("esri.renderers.DictionaryRenderer")],h)
const b=h},1029:function(e,t,r){"use strict"
r.d(t,"a",(function(){return b}))
var n,i=r(856),s=r(873),a=r(178),o=r(858),l=(r(859),r(868)),c=r(857),u=r(881),d=r(911),p=r(1098)
let h=n=class extends d.a{constructor(e){super(e),this.blurRadius=10,this.referenceScale=0,this.colorStops=[new p.a({ratio:0,color:new s.a("rgba(255, 140, 0, 0)")}),new p.a({ratio:.75,color:new s.a("rgba(255, 140, 0, 1)")}),new p.a({ratio:.9,color:new s.a("rgba(255, 0,   0, 1)")})],this.field=null,this.fieldOffset=0,this.maxPixelIntensity=100,this.minPixelIntensity=0,this.type="heatmap"}async collectRequiredFields(e,t){const r=this.field
r&&"string"==typeof r&&Object(u.d)(e,t,r)}getAttributeHash(){return null}getMeshHash(){return`${JSON.stringify(this.colorStops)}.${this.blurRadius}.${this.field}`}clone(){return new n({blurRadius:this.blurRadius,referenceScale:this.referenceScale,colorStops:Object(a.a)(this.colorStops),field:this.field,maxPixelIntensity:this.maxPixelIntensity,minPixelIntensity:this.minPixelIntensity})}}
Object(i.a)([Object(o.b)({type:Number,json:{write:!0}})],h.prototype,"blurRadius",void 0),Object(i.a)([Object(o.b)({type:Number})],h.prototype,"referenceScale",void 0),Object(i.a)([Object(o.b)({type:[p.a],json:{write:!0}})],h.prototype,"colorStops",void 0),Object(i.a)([Object(o.b)({type:String,json:{write:!0}})],h.prototype,"field",void 0),Object(i.a)([Object(o.b)({type:Number,json:{write:{overridePolicy:(e,t,r)=>({enabled:null==r})}}})],h.prototype,"fieldOffset",void 0),Object(i.a)([Object(o.b)({type:Number,json:{write:!0}})],h.prototype,"maxPixelIntensity",void 0),Object(i.a)([Object(o.b)({type:Number,json:{write:!0}})],h.prototype,"minPixelIntensity",void 0),Object(i.a)([Object(l.a)({heatmap:"heatmap"})],h.prototype,"type",void 0),h=n=Object(i.a)([Object(c.a)("esri.renderers.HeatmapRenderer")],h)
const b=h},1032:function(e,t,r){"use strict"
r.d(t,"a",(function(){return T}))
var n,i=r(856),s=r(873),a=r(178),o=r(964),l=r(859),c=r(868),u=r(858),d=r(857),p=r(881),h=r(911),b=r(965),f=r(860),y=r(177),m=(r(353),r(77),r(880))
const O=y.a.getLogger("esri.renderers.support.AttributeColorInfo")
let g=n=class extends f.a{constructor(e){super(e),this.color=null,this.field=null,this.label=null,this.valueExpression=null,this.valueExpressionTitle=null}castField(e){return null==e?e:"function"==typeof e?(O.error(".field: field must be a string value"),null):Object(l.l)(e)}getAttributeHash(){return`${this.field}-${this.valueExpression}`}clone(){return new n({color:this.color&&this.color.clone(),field:this.field,label:this.label,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle})}}
Object(i.a)([Object(u.b)({type:s.a,json:{type:[Number],write:!0}})],g.prototype,"color",void 0),Object(i.a)([Object(u.b)({type:String,json:{write:!0}})],g.prototype,"field",void 0),Object(i.a)([Object(m.a)("field")],g.prototype,"castField",null),Object(i.a)([Object(u.b)({type:String,json:{write:!0}})],g.prototype,"label",void 0),Object(i.a)([Object(u.b)({type:String,json:{write:!0}})],g.prototype,"valueExpression",void 0),Object(i.a)([Object(u.b)({type:String,json:{write:!0}})],g.prototype,"valueExpressionTitle",void 0),g=n=Object(i.a)([Object(d.a)("esri.renderers.support.AttributeColorInfo")],g)
const j=g
var v
let w=v=class extends f.a{constructor(){super(...arguments),this.unit=null}clone(){return new v({unit:this.unit})}}
Object(i.a)([Object(u.b)({type:String,json:{write:!0}})],w.prototype,"unit",void 0),w=v=Object(i.a)([Object(d.a)("esri.renderers.support.DotDensityLegendOptions")],w)
const S=w
var x,_=r(1014),M=r(1022)
let I=x=class extends(Object(b.a)(h.a)){constructor(e){super(e),this.attributes=null,this.backgroundColor=new s.a([0,0,0,0]),this.blendDots=!0,this.dotBlendingEnabled=!0,this.dotShape="square",this.dotSize=1,this.legendOptions=null,this.outline=new M.a,this.dotValue=null,this.referenceDotValue=null,this.referenceScale=null,this.seed=1,this.type="dot-density"}calculateDotValue(e){if(null==this.referenceScale)return this.dotValue
const t=e/this.referenceScale*this.dotValue
return t<1?1:t}getSymbol(){return new _.a({outline:this.outline})}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return[this.getSymbol()]}getAttributeHash(){return this.attributes&&this.attributes.reduce((e,t)=>e+t.getAttributeHash(),"")}getMeshHash(){return JSON.stringify(this.outline)}clone(){return new x({attributes:Object(a.a)(this.attributes),backgroundColor:Object(a.a)(this.backgroundColor),dotBlendingEnabled:Object(a.a)(this.dotBlendingEnabled),dotShape:Object(a.a)(this.dotShape),dotSize:Object(a.a)(this.dotSize),dotValue:Object(a.a)(this.dotValue),legendOptions:Object(a.a)(this.legendOptions),outline:Object(a.a)(this.outline),referenceScale:Object(a.a)(this.referenceScale),visualVariables:Object(a.a)(this.visualVariables),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})}getControllerHash(){return`${this.attributes.map(e=>e.field||e.valueExpression||"")}-${this.outline&&JSON.stringify(this.outline.toJSON())||""}`}async collectRequiredFields(e,t){await this.collectVVRequiredFields(e,t)
for(const r of this.attributes)r.valueExpression&&await Object(p.a)(e,t,r.valueExpression),r.field&&e.add(r.field)}}
Object(i.a)([Object(u.b)({type:[j],json:{write:!0}})],I.prototype,"attributes",void 0),Object(i.a)([Object(u.b)({type:s.a,json:{write:!0}})],I.prototype,"backgroundColor",void 0),Object(i.a)([Object(u.b)({type:Boolean}),Object(o.a)("dotBlendingEnabled")],I.prototype,"blendDots",void 0),Object(i.a)([Object(u.b)({type:Boolean,json:{write:!0}})],I.prototype,"dotBlendingEnabled",void 0),Object(i.a)([Object(u.b)({type:String,json:{write:!1}})],I.prototype,"dotShape",void 0),Object(i.a)([Object(u.b)({type:Number,json:{write:!0,origins:{"web-map":{write:!1},"web-scene":{write:!1}}}})],I.prototype,"dotSize",void 0),Object(i.a)([Object(u.b)({type:S,json:{write:!0}})],I.prototype,"legendOptions",void 0),Object(i.a)([Object(u.b)({type:M.a,json:{default:null,write:!0}})],I.prototype,"outline",void 0),Object(i.a)([Object(u.b)({type:Number,json:{write:!0}})],I.prototype,"dotValue",void 0),Object(i.a)([Object(u.b)({type:Number}),Object(o.a)("dotValue")],I.prototype,"referenceDotValue",void 0),Object(i.a)([Object(u.b)({type:Number,json:{write:!0}})],I.prototype,"referenceScale",void 0),Object(i.a)([Object(u.b)({type:Number,json:{write:!0}})],I.prototype,"seed",void 0),Object(i.a)([Object(c.a)({dotDensity:"dot-density"})],I.prototype,"type",void 0),I=x=Object(i.a)([Object(d.a)("esri.renderers.DotDensityRenderer")],I)
const T=I},1035:function(e,t,r){"use strict"
r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}))
var n=r(1038),i=r(1028),s=r(1032),a=r(1029),o=r(911),l=r(1024),c=r(1043)
const u={key:"type",base:o.a,typeMap:{heatmap:a.a,simple:l.a,"unique-value":c.a,"class-breaks":n.a,"dot-density":s.a,dictionary:i.a},errorContext:"renderer"},d={key:"type",base:o.a,typeMap:{simple:l.a,"unique-value":c.a,"class-breaks":n.a},errorContext:"renderer"}},1046:function(e,t,r){"use strict"
r.d(t,"a",(function(){return i}))
var n=r(1002)
class i{constructor(e,t){this._storage=new n.c,this._storage.maxSize=e,t&&this._storage.registerRemoveFunc("",t)}put(e,t,r){this._storage.put(e,t,r,1)}pop(e){return this._storage.pop(e)}get(e){return this._storage.get(e)}clear(){this._storage.clearAll()}destroy(){this._storage.destroy()}get maxSize(){return this._storage.maxSize}set maxSize(e){this._storage.maxSize=e}}},1047:function(e,t,r){"use strict"
r.d(t,"a",(function(){return d}))
var n,i=r(856),s=r(178),a=r(858),o=(r(859),r(857)),l=r(976),c=r(944)
let u=n=class extends c.a{constructor(e){super(e),this.colorRamps=null,this.type="multipart"}clone(){return new n({colorRamps:Object(s.a)(this.colorRamps)})}}
Object(i.a)([Object(a.b)({type:[l.a],json:{write:!0}})],u.prototype,"colorRamps",void 0),Object(i.a)([Object(a.b)({type:["multipart"]})],u.prototype,"type",void 0),u=n=Object(i.a)([Object(o.a)("esri.rest.support.MultipartColorRamp")],u)
const d=u},1048:function(e,t,r){"use strict"
r.d(t,"a",(function(){return h}))
var n=r(856),i=r(873),s=r(863),a=r(860),o=r(858),l=(r(353),r(77),r(859),r(865)),c=r(857)
const u=new s.a({esriSMS:"simple-marker",esriPMS:"picture-marker",esriSLS:"simple-line",esriSFS:"simple-fill",esriPFS:"picture-fill",esriTS:"text",esriSHD:"shield-label-symbol",PointSymbol3D:"point-3d",LineSymbol3D:"line-3d",PolygonSymbol3D:"polygon-3d",WebStyleSymbol:"web-style",MeshSymbol3D:"mesh-3d",LabelSymbol3D:"label-3d",CIMSymbolReference:"cim"})
let d=0,p=class extends a.a{constructor(e){super(e),this.id="sym"+d++,this.type=null,this.color=new i.a([0,0,0,1])}readColor(e){return e&&null!=e[0]?[e[0],e[1],e[2],e[3]/255]:e}async collectRequiredFields(e,t){}hash(){return JSON.stringify(this.toJSON())}clone(){}}
Object(n.a)([Object(o.b)({type:u.apiValues,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0,writer:u.write}}})],p.prototype,"type",void 0),Object(n.a)([Object(o.b)({type:i.a,json:{write:{allowNull:!0}}})],p.prototype,"color",void 0),Object(n.a)([Object(l.a)("color")],p.prototype,"readColor",null),p=Object(n.a)([Object(c.a)("esri.symbols.Symbol")],p)
const h=p},1050:function(e,t,r){"use strict"
r.d(t,"a",(function(){return h}))
var n,i=r(856),s=r(863),a=r(860),o=r(178),l=r(858),c=(r(859),r(857)),u=r(864)
const d=new s.a({count:"count",sum:"sum",min:"min",max:"max",avg:"avg",stddev:"stddev",var:"var",exceedslimit:"exceedslimit",percentile_cont:"percentile-continuous",percentile_disc:"percentile-discrete",EnvelopeAggregate:"envelope-aggregate",CentroidAggregate:"centroid-aggregate",ConvexHullAggregate:"convex-hull-aggregate"})
let p=n=class extends a.a{constructor(e){super(e),this.maxPointCount=void 0,this.maxRecordCount=void 0,this.maxVertexCount=void 0,this.onStatisticField=null,this.outStatisticFieldName=null,this.statisticType=null,this.statisticParameters=null}writeStatisticParameters(e,t){"percentile-continuous"!==this.statisticType&&"percentile-discrete"!==this.statisticType||(t.statisticParameters=Object(o.a)(e))}clone(){return new n({maxPointCount:this.maxPointCount,maxRecordCount:this.maxRecordCount,maxVertexCount:this.maxVertexCount,onStatisticField:this.onStatisticField,outStatisticFieldName:this.outStatisticFieldName,statisticType:this.statisticType,statisticParameters:Object(o.a)(this.statisticParameters)})}}
Object(i.a)([Object(l.b)({type:Number,json:{write:!0}})],p.prototype,"maxPointCount",void 0),Object(i.a)([Object(l.b)({type:Number,json:{write:!0}})],p.prototype,"maxRecordCount",void 0),Object(i.a)([Object(l.b)({type:Number,json:{write:!0}})],p.prototype,"maxVertexCount",void 0),Object(i.a)([Object(l.b)({type:String,json:{write:!0}})],p.prototype,"onStatisticField",void 0),Object(i.a)([Object(l.b)({type:String,json:{write:!0}})],p.prototype,"outStatisticFieldName",void 0),Object(i.a)([Object(l.b)({type:String,json:{read:{source:"statisticType",reader:d.read},write:{target:"statisticType",writer:d.write}}})],p.prototype,"statisticType",void 0),Object(i.a)([Object(l.b)({type:Object})],p.prototype,"statisticParameters",void 0),Object(i.a)([Object(u.a)("statisticParameters")],p.prototype,"writeStatisticParameters",null),p=n=Object(i.a)([Object(c.a)("esri.rest.support.StatisticDefinition")],p)
const h=p},1054:function(e,t,r){"use strict"
r.d(t,"a",(function(){return h})),r.d(t,"b",(function(){return b}))
var n=r(856),i=r(354),s=r(292),a=r(858),o=(r(353),r(77),r(859),r(857)),l=r(864),c=r(977),u=r(980)
const d={"web-scene/operational-layers":{ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISTiledElevationServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BuildingSceneLayer:!0,GroupLayer:!0,IntegratedMeshLayer:!0,OGCFeatureLayer:!0,PointCloudLayer:!0,WebTiledLayer:!0,CSV:!0,GeoJSON:!0,VectorTileLayer:!0,WFS:!0,WMS:!0,KML:!0,RasterDataLayer:!0,Voxel:!0},"web-scene/basemap":{ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,WebTiledLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,ArcGISImageServiceLayer:!0,WMS:!0,ArcGISMapServiceLayer:!0},"web-scene/ground":{ArcGISTiledElevationServiceLayer:!0,RasterDataElevationLayer:!0},"web-map/operational-layers":{ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BingMapsAerial:!0,BingMapsHybrid:!0,BingMapsRoad:!0,CSV:!0,GeoRSS:!0,GeoJSON:!0,GroupLayer:!0,KML:!0,OGCFeatureLayer:!0,SubtypeGroupLayer:!0,VectorTileLayer:!0,WFS:!0,WMS:!0,WebTiledLayer:!0},"web-map/basemap":{ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,WMS:!0,WebTiledLayer:!0,BingMapsAerial:!0,BingMapsRoad:!0,BingMapsHybrid:!0},"web-map/tables":{ArcGISFeatureLayer:!0},"portal-item/operational-layers":{ArcGISFeatureLayer:!0,ArcGISSceneServiceLayer:!0,PointCloudLayer:!0,BuildingSceneLayer:!0,IntegratedMeshLayer:!0}}
var p=r(933)
const h=e=>{let t=class extends e{constructor(){super(...arguments),this.title=null}writeListMode(e,t,r,n){(n&&"ground"===n.layerContainerType||e&&Object(u.a)(this,r,{},n))&&(t[r]=e)}writeOperationalLayerType(e,t,r,n){!e||n&&"tables"===n.layerContainerType||(t.layerType=e)}writeTitle(e,t){t.title=e||"Layer"}read(e,t){t&&(t.layer=this),Object(c.b)(this,e,t=>super.read(e,t),t)}write(e,t){if(null!=t&&t.origin){const e=`${t.origin}/${t.layerContainerType||"operational-layers"}`,n=d[e]
let s=n&&n[this.operationalLayerType]
var r
if("ArcGISTiledElevationServiceLayer"===this.operationalLayerType&&"web-scene/operational-layers"===e&&(s=!1),!s)return null==(r=t.messages)||r.push(new i.a("layer:unsupported",`Layers (${this.title}, ${this.id}) of type '${this.declaredClass}' are not supported in the context of '${e}'`,{layer:this})),null}const n=super.write(e,{...t,layer:this}),a=!!t&&!!t.messages&&!!t.messages.filter(e=>e instanceof i.a&&"web-document-write:property-required"===e.name).length
var o
return Object(s.v)(null==n?void 0:n.url)?(null==t||null==(o=t.messages)||o.push(new i.a("layer:invalid-url",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' using a Blob URL cannot be written to web scenes and web maps`,{layer:this})),null):!this.url&&a?null:n}beforeSave(){}}
return Object(n.a)([Object(a.b)({type:String,json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}},"portal-item":{write:!1}}}})],t.prototype,"id",void 0),Object(n.a)([Object(a.b)({json:{write:{ignoreOrigin:!0},origins:{"web-map":{read:!1,write:!1}}}})],t.prototype,"listMode",void 0),Object(n.a)([Object(l.a)("listMode")],t.prototype,"writeListMode",null),Object(n.a)([Object(a.b)({type:String,readOnly:!0,json:{read:!1,write:{target:"layerType",ignoreOrigin:!0},origins:{"portal-item":{write:!1}}}})],t.prototype,"operationalLayerType",void 0),Object(n.a)([Object(l.a)("operationalLayerType")],t.prototype,"writeOperationalLayerType",null),Object(n.a)([Object(a.b)(p.h)],t.prototype,"opacity",void 0),Object(n.a)([Object(a.b)({type:String,json:{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}},"portal-item":{write:!1}}},value:"Layer"})],t.prototype,"title",void 0),Object(n.a)([Object(l.a)("title")],t.prototype,"writeTitle",null),Object(n.a)([Object(a.b)({type:Boolean,json:{name:"visibility"}})],t.prototype,"visible",void 0),t=Object(n.a)([Object(o.a)("esri.layers.mixins.OperationalLayer")],t),t}
function b(e){return"operationalLayerType"in e}},1056:function(e,t,r){"use strict"
r.d(t,"a",(function(){return j}))
var n=r(856),i=r(148),s=r(660),a=r(931),o=r(354),l=r(177),c=r(20),u=r(861),d=r(292),p=r(858),h=(r(353),r(77),r(859),r(865)),b=r(857),f=r(864),y=r(914),m=r(1006),O=r(956)
const g=l.a.getLogger("esri.layers.mixins.PortalLayer"),j=e=>{let t=class extends e{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0}destroy(){var e
null==(e=this.portalItem)||e.destroy(),this.portalItem=null}set portalItem(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))}readPortalItem(e,t,r){if(t.itemId)return new m.default({id:t.itemId,portal:r&&r.portal})}writePortalItem(e,t){e&&e.id&&(t.itemId=e.id)}async loadFromPortal(e,t){if(this.portalItem&&this.portalItem.id)try{const n=await r.e(279).then(r.bind(null,1207))
return Object(u.v)(t),await n.load({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData},t)}catch(e){throw Object(u.m)(e)||g.warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${e}`),e}}async finishLoadEditablePortalLayer(e){this._set("userHasEditingPrivileges",await this._fetchUserHasEditingPrivileges(e).catch(e=>(Object(u.u)(e),!0)))}async _fetchUserHasEditingPrivileges(e){const t=this.url?null==i.b?void 0:i.b.findCredential(this.url):null
if(!t)return!0
const r=v.credential===t?v.user:await this._fetchEditingUser(e)
return v.credential=t,v.user=r,Object(c.j)(r)||null==r.privileges||r.privileges.includes("features:user:edit")}async _fetchEditingUser(e){var t,r
const n=null==(t=this.portalItem)||null==(r=t.portal)?void 0:r.user
if(n)return n
const o=i.b.findServerInfo(this.url)
if(null==o||!o.owningSystemUrl)return null
const l=o.owningSystemUrl+"/sharing/rest",u=y.a.getDefault()
if(u&&u.loaded&&Object(d.F)(u.restUrl)===Object(d.F)(l))return u.user
const p=l+"/community/self",h=Object(c.k)(e)?e.signal:null,b=await Object(a.d)(Object(s.default)(p,{authMode:"no-prompt",query:{f:"json"},signal:h}))
return b.ok?O.default.fromJSON(b.value.data):null}read(e,t){t&&(t.layer=this),super.read(e,t)}write(e,t){const r=t&&t.portal,n=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||y.a.getDefault())
return r&&n&&!Object(d.t)(n.restUrl,r.restUrl)?(t.messages&&t.messages.push(new o.a("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save the scene, set the layer.portalItem to null or save the scene to the same portal as the item associated with the layer`,{layer:this})),null):super.write(e,{...t,layer:this})}}
return Object(n.a)([Object(p.b)({type:m.default})],t.prototype,"portalItem",null),Object(n.a)([Object(h.a)("web-document","portalItem",["itemId"])],t.prototype,"readPortalItem",null),Object(n.a)([Object(f.a)("web-document","portalItem",{itemId:{type:String}})],t.prototype,"writePortalItem",null),Object(n.a)([Object(p.b)({clonable:!1})],t.prototype,"resourceReferences",void 0),Object(n.a)([Object(p.b)({readOnly:!0})],t.prototype,"userHasEditingPrivileges",void 0),t=Object(n.a)([Object(b.a)("esri.layers.mixins.PortalLayer")],t),t},v={credential:null,user:null}},1057:function(e,t,r){"use strict"
r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d})),r.d(t,"c",(function(){return p})),r.d(t,"d",(function(){return h})),r.d(t,"e",(function(){return g})),r.d(t,"f",(function(){return u}))
var n=r(355)
const i="__begin__",s="__end__",a=new RegExp(i,"ig"),o=new RegExp(s,"ig"),l=new RegExp("^"+i,"i"),c=new RegExp(s+"$","i")
function u(e){return e.replace(new RegExp("\\{","g"),"[").replace(new RegExp("\\}","g"),"]")}function d(e){const t={expression:"",type:"none"}
return e.labelExpressionInfo?e.labelExpressionInfo.value?(t.expression=e.labelExpressionInfo.value,t.type="conventional"):e.labelExpressionInfo.expression&&(t.expression=e.labelExpressionInfo.expression,t.type="arcade"):null!=e.labelExpression&&(t.expression=function(e){return e.replace(new RegExp("\\[","g"),"{").replace(new RegExp("\\]","g"),"}")}(e.labelExpression),t.type="conventional"),t}function p(e){const t=d(e)
if(!t)return null
switch(t.type){case"conventional":return b(t.expression)
case"arcade":return t.expression}return null}function h(e){const t=d(e)
if(!t)return null
switch(t.type){case"conventional":return function(e){const t=e.match(f)
return t&&t[1].trim()||null}(t.expression)
case"arcade":return g(t.expression)}return null}function b(e){let t
return e?(t=Object(n.c)(e,e=>i+'$feature["'+e+'"]'+s),t=l.test(t)?t.replace(l,""):'"'+t,t=c.test(t)?t.replace(c,""):t+'"',t=t.replace(a,'" + ').replace(o,' + "')):t='""',t}const f=/^\s*\{([^}]+)\}\s*$/i,y=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*$/i,m=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])(\1|\3)(\5)\s*\));?\s*$/i,O=/^\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])([\w\s]+)(\1)\s*\));?\s*$/i
function g(e){if(!e)return null
let t=y.exec(e)||m.exec(e)
return t?t[1]||t[3]:(t=O.exec(e),t?t[2]:null)}},1062:function(e,t,r){"use strict"
r.r(t),r.d(t,"getAllSizes",(function(){return x})),r.d(t,"getColor",(function(){return b})),r.d(t,"getOpacity",(function(){return f})),r.d(t,"getRotationAngle",(function(){return y})),r.d(t,"getSize",(function(){return m})),r.d(t,"getSizeForValue",(function(){return j})),r.d(t,"getSizeFromNumberOrVariable",(function(){return O})),r.d(t,"getSizeRangeAtScale",(function(){return v})),r.d(t,"getVisualVariableValues",(function(){return w})),r.d(t,"viewScaleRE",(function(){return h}))
var n=r(873),i=r(663),s=r(963),a=r(177),o=r(20),l=r(999),c=r(1019)
const u=a.a.getLogger("esri.renderers.visualVariables.support.visualVariableUtils"),d=new i.default,p=Math.PI,h=/^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i
function b(e,t,r){const i="visualVariables"in e&&e.visualVariables?e.visualVariables.find(e=>"color"===e.type):e
if(!i)return
if("esri.renderers.visualVariables.ColorVariable"!==i.declaredClass)return void u.warn("The visualVariable should be an instance of esri.renderers.visualVariables.ColorVariable")
const s="number"==typeof t,a=s?null:t,l=a&&a.attributes
let c=s?t:null
const d=i.field,{ipData:p,hasExpression:h}=i.cache
let b=i.cache.compiledFunc
if(!d&&!h){const e=i.stops
return e&&e[0]&&e[0].color}if("number"!=typeof c)if(h){if(!Object(o.k)(r)||!Object(o.k)(r.arcade))return void u.error("Use of arcade expressions requires an arcade context")
const e={viewingMode:r.viewingMode,scale:r.scale,spatialReference:r.spatialReference},t=r.arcade.arcadeUtils,n=t.getViewInfo(e),s=t.createExecContext(a,n)
if(!b){const e=t.createSyntaxTree(i.valueExpression)
b=t.createFunction(e),i.cache.compiledFunc=b}c=t.executeFunction(b,s)}else l&&(c=l[d])
const f=i.normalizationField,y=l?parseFloat(l[f]):void 0
if(null!=c&&(!f||s||!isNaN(y)&&0!==y)){isNaN(y)||s||(c/=y)
const e=S(c,p)
if(e){const t=e[0],s=e[1],a=t===s?i.stops[t].color:n.a.blendColors(i.stops[t].color,i.stops[s].color,e[2],Object(o.k)(r)?r.color:void 0)
return new n.a(a)}}}function f(e,t,r){const n="visualVariables"in e&&e.visualVariables?e.visualVariables.find(e=>"opacity"===e.type):e
if(!n)return
if("esri.renderers.visualVariables.OpacityVariable"!==n.declaredClass)return void u.warn("The visualVariable should be an instance of esri.renderers.visualVariables.OpacityVariable")
const i="number"==typeof t,s=i?null:t,a=s&&s.attributes
let l=i?t:null
const c=n.field,{ipData:d,hasExpression:p}=n.cache
let h=n.cache.compiledFunc
if(!c&&!p){const e=n.stops
return e&&e[0]&&e[0].opacity}if("number"!=typeof l)if(p){if(Object(o.j)(r)||Object(o.j)(r.arcade))return void u.error("Use of arcade expressions requires an arcade context")
const e={viewingMode:r.viewingMode,scale:r.scale,spatialReference:r.spatialReference},t=r.arcade.arcadeUtils,i=t.getViewInfo(e),a=t.createExecContext(s,i)
if(!h){const e=t.createSyntaxTree(n.valueExpression)
h=t.createFunction(e),n.cache.compiledFunc=h}l=t.executeFunction(h,a)}else a&&(l=a[c])
const b=n.normalizationField,f=a?parseFloat(a[b]):void 0
if(null!=l&&(!b||i||!isNaN(f)&&0!==f)){isNaN(f)||i||(l/=f)
const e=S(l,d)
if(e){const t=e[0],r=e[1]
if(t===r)return n.stops[t].opacity
{const i=n.stops[t].opacity
return i+(n.stops[r].opacity-i)*e[2]}}}}function y(e,t,r){const n="visualVariables"in e&&e.visualVariables?e.visualVariables.find(e=>"rotation"===e.type):e
if(!n)return
if("esri.renderers.visualVariables.RotationVariable"!==n.declaredClass)return void u.warn("The visualVariable should be an instance of esri.renderers.visualVariables.RotationVariable")
const i=n.axis||"heading",s="heading"===i&&"arithmetic"===n.rotationType?90:0,a="heading"===i&&"arithmetic"===n.rotationType?-1:1,l="number"==typeof t?null:t,c=l&&l.attributes,d=n.field,{hasExpression:p}=n.cache
let h=n.cache.compiledFunc,b=0
if(!d&&!p)return b
if(p){if(Object(o.j)(r)||Object(o.j)(r.arcade))return void u.error("Use of arcade expressions requires an arcade context")
const e={viewingMode:r.viewingMode,scale:r.scale,spatialReference:r.spatialReference},t=r.arcade.arcadeUtils,i=t.getViewInfo(e),s=t.createExecContext(l,i)
if(!h){const e=t.createSyntaxTree(n.valueExpression)
h=t.createFunction(e),n.cache.compiledFunc=h}b=t.executeFunction(h,s)}else c&&(b=c[d]||0)
return b="number"!=typeof b||isNaN(b)?null:s+a*b,b}function m(e,t,r){const n="visualVariables"in e&&e.visualVariables?e.visualVariables.find(e=>"size"===e.type):e
if(!n)return
if("esri.renderers.visualVariables.SizeVariable"!==n.declaredClass)return void u.warn("The visualVariable should be an instance of esri.renderers.visualVariables.SizeVariable")
const i=j(function(e,t,r){const n="number"==typeof t,i=n?null:t,s=i&&i.attributes
let a=n?t:null
const{isScaleDriven:l}=e.cache
let d=e.cache.compiledFunc
if(l){const t=Object(o.k)(r)?r.scale:void 0,n=Object(o.k)(r)?r.view:void 0
a=null==t||"3d"===n?function(e){let t=null,r=null
const n=e.stops
return n?(t=n[0].value,r=n[n.length-1].value):(t=e.minDataValue||0,r=e.maxDataValue||0),(t+r)/2}(e):t}else if(!n)switch(e.inputValueType){case c.a.Expression:{if(Object(o.j)(r)||Object(o.j)(r.arcade))return void u.error("Use of arcade expressions requires an arcade context")
const t={viewingMode:r.viewingMode,scale:r.scale,spatialReference:r.spatialReference},n=r.arcade.arcadeUtils,s=n.getViewInfo(t),l=n.createExecContext(i,s)
if(!d){const t=n.createSyntaxTree(e.valueExpression)
d=n.createFunction(t),e.cache.compiledFunc=d}a=n.executeFunction(d,l)
break}case c.a.Field:s&&(a=s[e.field])
break
case c.a.Unknown:a=null}if(!Object(c.f)(a))return null
if(n||!e.normalizationField)return a
const p=s?parseFloat(s[e.normalizationField]):null
return Object(c.f)(p)&&0!==p?a/p:null}(n,t,r),n,t,r,n.cache.ipData)
return null==i||isNaN(i)?0:i}function O(e,t,r){return null==e?null:Object(c.e)(e)?m(e,t,r):Object(c.f)(e)?e:null}function g(e,t,r){return Object(c.f)(r)&&e>r?r:Object(c.f)(t)&&e<t?t:e}function j(e,t,r,n,i){switch(t.transformationType){case c.b.Additive:return function(e,t,r,n){return e+(O(t.minSize,r,n)||t.minDataValue)}(e,t,r,n)
case c.b.Constant:return function(e,t,r){const n=e.stops
let i=n&&n.length&&n[0].size
return null==i&&(i=e.minSize),O(i,t,r)}(t,r,n)
case c.b.ClampedLinear:return function(e,t,r,n){const i=(e-t.minDataValue)/(t.maxDataValue-t.minDataValue),s=O(t.minSize,r,n),a=O(t.maxSize,r,n),l=Object(o.k)(n)?n.shape:void 0
if(e<=t.minDataValue)return s
if(e>=t.maxDataValue)return a
if("area"===t.scaleBy&&l){const e="circle"===l,t=e?p*(s/2)**2:s*s,r=t+i*((e?p*(a/2)**2:a*a)-t)
return e?2*Math.sqrt(r/p):Math.sqrt(r)}return s+i*(a-s)}(e,t,r,n)
case c.b.Proportional:return function(e,t,r,n){const i=Object(o.k)(n)?n.shape:void 0,s=e/t.minDataValue,a=O(t.minSize,r,n),l=O(t.maxSize,r,n)
let c=null
return c="circle"===i?2*Math.sqrt(s*(a/2)**2):"square"===i||"diamond"===i||"image"===i?Math.sqrt(s*a**2):s*a,g(c,a,l)}(e,t,r,n)
case c.b.Stops:return function(e,t,r,n,i){const[s,a,o]=S(e,i)
if(s===a)return O(t.stops[s].size,r,n)
{const e=O(t.stops[s].size,r,n)
return e+(O(t.stops[a].size,r,n)-e)*o}}(e,t,r,n,i)
case c.b.RealWorldSize:return function(e,t,r,n){const i=(Object(o.k)(n)&&n.resolution?n.resolution:1)*l.a[t.valueUnit],s=O(t.minSize,r,n),a=O(t.maxSize,r,n),{valueRepresentation:c}=t
let u=null
return u="area"===c?2*Math.sqrt(e/p)/i:"radius"===c||"distance"===c?2*e/i:e/i,g(u,s,a)}(e,t,r,n)
case c.b.Identity:return e
case c.b.Unknown:return null}}function v(e,t,r){const{isScaleDriven:n}=e.cache
if(!(n&&"3d"===r||t))return null
const i={scale:t,view:r}
let s=O(e.minSize,d,i),a=O(e.maxSize,d,i)
if(null!=s||null!=a){if(s>a){const e=a
a=s,s=e}return{minSize:s,maxSize:a}}}function w(e,t,r){if(!e.visualVariables)return
const n=[],i=[],s=[],a=[],o=[]
for(const t of e.visualVariables)switch(t.type){case"color":i.push(t)
break
case"opacity":s.push(t)
break
case"rotation":o.push(t)
break
case"size":a.push(t)}return i.forEach(e=>{const i=b(e,t,r)
n.push({variable:e,value:i})}),s.forEach(e=>{const i=f(e,t,r)
n.push({variable:e,value:i})}),o.forEach(e=>{const i=y(e,t,r)
n.push({variable:e,value:i})}),a.forEach(e=>{const i=m(e,t,r)
n.push({variable:e,value:i})}),n.filter(e=>null!=e.value)}function S(e,t){if(!t)return
let r=0,n=t.length-1
return t.some((t,i)=>e<t?(n=i,!0):(r=i,!1)),[r,n,(e-t[r])/(t[n]-t[r])]}function x(e,t,r){const n=["proportional","proportional","proportional"]
for(const i of e){const e=i.useSymbolValue?"symbol-value":m(i,t,r)
switch(i.axis){case"width":n[0]=e
break
case"depth":n[1]=e
break
case"height":n[2]=e
break
case"width-and-depth":n[0]=e,n[1]=e
break
case"all":case void 0:case null:n[0]=e,n[1]=e,n[2]=e
break
default:Object(s.a)(i.axis)}}return n}},1064:function(e,t,r){"use strict"
r.d(t,"a",(function(){return h}))
var n,i=r(856),s=(r(870),r(863)),a=r(860),o=r(178),l=r(858),c=(r(859),r(857)),u=r(658)
const d=new s.a({upperLeft:"upper-left",lowerLeft:"lower-left"})
let p=n=class extends a.a{constructor(e){super(e),this.extent=null,this.mode="view",this.originPosition="upper-left",this.tolerance=1}clone(){return new n(Object(o.a)({extent:this.extent,mode:this.mode,originPosition:this.originPosition,tolerance:this.tolerance}))}}
Object(i.a)([Object(l.b)({type:u.default,json:{write:{overridePolicy(){return{enabled:"view"===this.mode}}}}})],p.prototype,"extent",void 0),Object(i.a)([Object(l.b)({type:["view","edit"],json:{write:!0}})],p.prototype,"mode",void 0),Object(i.a)([Object(l.b)({type:String,json:{read:d.read,write:d.write}})],p.prototype,"originPosition",void 0),Object(i.a)([Object(l.b)({type:Number,json:{write:{overridePolicy(){return{enabled:"view"===this.mode}}}}})],p.prototype,"tolerance",void 0),p=n=Object(i.a)([Object(c.a)("esri.rest.support.QuantizationParameters")],p)
const h=p},1067:function(e,t,r){"use strict"
r.d(t,"a",(function(){return c}))
var n,i=r(856),s=r(860),a=r(858),o=(r(353),r(77),r(859),r(857))
let l=n=class extends s.a{constructor(e){super(e),this.name=null,this.code=null}clone(){return new n({name:this.name,code:this.code})}}
Object(i.a)([Object(a.b)({type:String,json:{write:!0}})],l.prototype,"name",void 0),Object(i.a)([Object(a.b)({type:[String,Number],json:{write:!0}})],l.prototype,"code",void 0),l=n=Object(i.a)([Object(o.a)("esri.layers.support.CodedValue")],l)
const c=l},1068:function(e,t,r){"use strict"
r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return s})),r.d(t,"d",(function(){return o})),r.d(t,"e",(function(){return a})),r.d(t,"f",(function(){return l})),r.d(t,"g",(function(){return c})),r.d(t,"h",(function(){return d})),r.d(t,"i",(function(){return u}))
const n=[252,146,31,255],i=[153,153,153,255],s={type:"esriSMS",style:"esriSMSCircle",size:6,color:n,outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[153,153,153,255]}},a={type:"esriSLS",style:"esriSLSSolid",width:.75,color:n},o={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[255,255,255,191]}},l={type:"esriTS",color:[255,255,255,255],font:{family:"arial-unicode-ms",size:10,weight:"bold"},horizontalAlignment:"center",kerning:!0,haloColor:[0,0,0,255],haloSize:1,rotated:!1,text:"",xoffset:0,yoffset:0,angle:0},c={type:"esriSMS",style:"esriSMSCircle",color:[0,0,0,255],outline:null,size:10.5},u={type:"esriSLS",style:"esriSLSSolid",color:[0,0,0,255],width:1.5},d={type:"esriSFS",style:"esriSFSSolid",color:[0,0,0,255],outline:null}},1073:function(e,t,r){"use strict"
r.r(t),r.d(t,"DictionaryLoader",(function(){return f}))
var n=r(873),i=r(660),s=r(354),a=r(177),o=r(1046),l=r(20),c=r(861),u=r(355),d=r(907),p=r(668)
const h=a.a.getLogger("esri.renderers.support.DictionaryLoader"),b={type:"CIMSimpleLineCallout",lineSymbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",width:.5,color:[0,0,0,255]}]}}
class f{constructor(e,t,r){this.config=null,this.fieldMap=null,this.url=null,this._ongoingRequests=new Map,this._symbolCache=new o.a(100),this.url=e,this.config=t,this.fieldMap=r}getSymbolFields(){return this._symbolFields}async getSymbolAsync(e,t){let r
this._dictionaryPromise||(this._dictionaryPromise=this.fetchResources(t))
try{r=await this._dictionaryPromise}catch(e){if(Object(c.m)(e))return this._dictionaryPromise=null,null}const i={}
if(this.fieldMap)for(const t of this._symbolFields){const r=this.fieldMap[t]
if(r&&null!=e.attributes[r]){const n=""+e.attributes[r]
i[t]=n}else i[t]=""}const s=r(i,t)
if(!s||"string"!=typeof s)return null
const a=Object(u.b)(s).toString(),o=this._symbolCache.get(a)
if(o)return o.catch(()=>{this._symbolCache.pop(a)}),o
const d=s.split(";"),p=[],h=[]
for(const e of d)if(e)if(e.includes("po:")){const t=e.substr(3).split("|")
if(3===t.length){const e=t[0],r=t[1]
let i=t[2]
if("DashTemplate"===r)i=i.split(" ").map(e=>Number(e))
else if("Color"===r){const e=new n.a(i).toRgba()
i=[e[0],e[1],e[2],255*e[3]]}else i=Number(i)
h.push({primitiveName:e,propertyName:r,value:i})}}else if(e.includes("|")){for(const t of e.split("|"))if(this._itemNames.has(t)){p.push(t)
break}}else this._itemNames.has(e)&&p.push(e)
const b=!Object(l.k)(e.geometry)||!e.geometry.hasZ&&"point"===e.geometry.type,f=this._cimPartsToCIMSymbol(p,h,b,t)
return this._symbolCache.put(a,f,1),f}async fetchResources(e){if(this._dictionaryPromise)return this._dictionaryPromise
if(!this.url)return void h.error("no valid URL!")
const t=Object(l.k)(e)?e.abortOptions:null,r=Object(i.default)(this.url+"/resources/styles/dictionary-info.json",{responseType:"json",query:{f:"json"},...t}),[{data:n}]=await Promise.all([r,Object(d.e)()])
if(!n)throw this._dictionaryPromise=null,new s.a("esri.renderers.DictionaryRenderer","Bad dictionary data!")
const a=n.expression,o=n.authoringInfo
this._refSymbolUrlTemplate=this.url+"/"+n.cimRefTemplateUrl,this._itemNames=new Set(n.itemsNames),this._symbolFields=o.symbol
const c={}
if(this.config){const e=this.config
for(const t in e)c[t]=e[t]}if(o.configuration)for(const e of o.configuration)c.hasOwnProperty(e.name)||(c[e.name]=e.value)
const u=[]
if(Object(l.k)(e)&&e.fields&&this.fieldMap)for(const t of this._symbolFields){const r=this.fieldMap[t],n=e.fields.filter(e=>e.name===r)
n.length>0&&u.push({...n[0],name:t})}return this._dictionaryPromise=Object(d.b)(a,Object(l.k)(e)?e.spatialReference:null,u,c).then(e=>{const t={scale:0}
return(r,n)=>{const i=e.repurposeFeature({geometry:null,attributes:r})
return t.scale=Object(l.k)(n)?n.scale:void 0,e.evaluate({$feature:i,$view:t})}}).catch(e=>(h.error("Creating dictinoary expression failed:",e),null)),this._dictionaryPromise}async _cimPartsToCIMSymbol(e,t,r,n){const i=new Array(e.length)
for(let t=0;t<e.length;t++)i[t]=this._getSymbolPart(e[t],n)
const s=await Promise.all(i),a=this.fieldMap
for(const e of s)y(e,a)
return new p.default({data:this._combineSymbolParts(s,t,r)})}async _getSymbolPart(e,t){if(this._ongoingRequests.has(e))return this._ongoingRequests.get(e).then(e=>e.data)
const r=this._refSymbolUrlTemplate.replace(/\{itemName\}/gi,e),n=Object(i.default)(r,{responseType:"json",query:{f:"json"},...t})
this._ongoingRequests.set(e,n)
try{return(await n).data}catch(t){return this._ongoingRequests.delete(e),Promise.reject(t)}}_combineSymbolParts(e,t,r){if(!e||0===e.length)return null
const n={...e[0]}
if(e.length>1){n.symbolLayers=[]
for(const t of e){const e=t
n.symbolLayers.unshift(...e.symbolLayers)}}return r&&(n.callout=b),{type:"CIMSymbolReference",symbol:n,primitiveOverrides:t}}}function y(e,t){if(!e)return
const r=e.symbolLayers
if(!r)return
let n=r.length
for(;n--;){const e=r[n]
e&&!1!==e.enable&&"CIMVectorMarker"===e.type&&m(e,t)}}function m(e,t){const r=e.markerGraphics
if(r)for(const e of r){if(!e)continue
const r=e.symbol
if(r)switch(r.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":y(r,t)
break
case"CIMTextSymbol":r.fieldMap=t}}}},1077:function(e,t,r){"use strict"
r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return p})),r.d(t,"c",(function(){return h})),r.d(t,"d",(function(){return f}))
var n=r(862),i=r(878),s=r(20),a=r(920)
const o=["esri.Color","esri.portal.Portal","esri.symbols.support.Symbol3DAnchorPosition2D","esri.symbols.support.Symbol3DAnchorPosition3D"]
function l(e){return e instanceof n.a}function c(e){return e instanceof i.a?Object.keys(e.items):l(e)?Object(a.a)(e).keys():e?Object.keys(e):[]}function u(e,t){return e instanceof i.a?e.items[t]:e[t]}function d(e){return e?e.declaredClass:null}function p(e,t){if(Object(s.j)(e))return!1
const r=t.split(".")
let n=e
for(const e of r){if("complete"===n.type)return!0
if("partial"!==n.type)return!1
{const t=n.diff[e]
if(!t)return!1
n=t}}return!0}function h(e,t){for(const r of t)if(p(e,r))return!0
return!1}function b(e,t){if(!("function"==typeof e||"function"==typeof t||Object(s.j)(e)&&Object(s.j)(t)))return Object(s.j)(e)||Object(s.j)(t)||"object"==typeof e&&"object"==typeof t&&d(e)!==d(t)?{type:"complete",oldValue:e,newValue:t}:function e(t,r){const n=t.diff
if(n&&"function"==typeof n)return n(t,r)
const i=c(t),a=c(r)
if(0===i.length&&0===a.length)return
if(!i.length||!a.length||function(e,t){return!(!Array.isArray(e)||!Array.isArray(t))&&e.length!==t.length}(t,r))return{type:"complete",oldValue:t,newValue:r}
const p=a.filter(e=>-1===i.indexOf(e)),h=i.filter(e=>-1===a.indexOf(e)),b=i.filter(e=>a.indexOf(e)>-1&&u(t,e)!==u(r,e)).concat(p,h).sort(),f=d(t)
if(f&&o.indexOf(f)>-1&&b.length)return{type:"complete",oldValue:t,newValue:r}
let y
const m=l(t)&&l(r)
for(const i of b){const a=u(t,i),o=u(r,i)
let l;(m||"function"!=typeof a&&"function"!=typeof o)&&a!==o&&(null==a&&null==o||(l=n&&n[i]&&"function"==typeof n[i]?n[i](a,o):"object"==typeof a&&"object"==typeof o&&d(a)===d(o)?e(a,o):{type:"complete",oldValue:a,newValue:o},Object(s.k)(l)&&(Object(s.k)(y)?y.diff[i]=l:y={type:"partial",diff:{[i]:l}})))}return y}(e,t)}function f(e){if(Object(s.j)(e))return!0
switch(e.type){case"complete":return!1
case"collection":{const t=e
for(const e of t.added)if(!f(e))return!1
for(const e of t.removed)if(!f(e))return!1
for(const e of t.changed)if(!f(e))return!1
return!0}case"partial":for(const t in e.diff)if(!f(e.diff[t]))return!1
return!0}}},1078:function(e,t,r){"use strict"
function n(e){var t
const r=e.layer
return"floorInfo"in r&&null!=(t=r.floorInfo)&&t.floorField&&"floors"in e.view?a(e.view.floors,r.floorInfo.floorField):null}function i(e,t){var r
return"floorInfo"in t&&null!=(r=t.floorInfo)&&r.floorField?a(e,t.floorInfo.floorField):null}function s(e,t){const{definitionExpression:r}=t
return e?r?`(${r}) AND (${e})`:e:r}function a(e,t){if(null==e||!e.length)return null
const r=e.filter(e=>""!==e).map(e=>`'${e}'`)
return r.push("''"),`${t} IN (${r.join(",")}) OR ${t} IS NULL`}r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return i}))},1080:function(e,t,r){"use strict"
r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return l}))
var n=r(970),i=r(1015),s=r(1035)
function a(e,t){return l(e,null,t)}const o=Object(i.b)({types:s.a})
function l(e,t,r){return e?e&&(e.styleName||e.styleUrl)&&"uniqueValue"!==e.type?(r&&r.messages&&r.messages.push(new n.a("renderer:unsupported","Only UniqueValueRenderer can be referenced from a web style, but found '"+e.type+"'",{definition:e,context:r})),null):o(e,t,r):null}},1084:function(e,t,r){"use strict"
r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return a}))
var n=r(976),i=r(944),s=r(1047)
const a={key:"type",base:i.a,typeMap:{algorithmic:n.a,multipart:s.a}}
function o(e){return e&&e.type?"algorithmic"===e.type?n.a.fromJSON(e):"multipart"===e.type?s.a.fromJSON(e):null:null}},1086:function(e,t,r){"use strict"
r.d(t,"a",(function(){return O})),r.d(t,"b",(function(){return m}))
var n=r(856),i=r(177),s=r(861),a=r(858),o=(r(353),r(77),r(859),r(857)),l=r(878),c=(r(354),r(1007),r(958))
const u=new l.a,d=new WeakMap
function p(e){return e&&"object"==typeof e&&"refreshInterval"in e&&"refresh"in e}function h(e,t){return Number.isFinite(e)&&Number.isFinite(t)?t<=0?e:h(t,e%t):0}let b=0,f=0
function y(){const e=Date.now()
for(const r of u)if(r.refreshInterval){var t
e-(null!=(t=d.get(r))?t:0)+5>=6e4*r.refreshInterval&&(d.set(r,e),r.refresh(e))}}function m(e){return e&&"object"==typeof e&&"refreshTimestamp"in e&&"refresh"in e}Object(c.a)(()=>{const e=Date.now()
let t=0
for(const r of u)t=h(Math.round(6e4*r.refreshInterval),t),r.refreshInterval?d.get(r)||d.set(r,e):d.delete(r)
if(t!==f){if(f=t,clearInterval(b),0===f)return void(b=0)
b=setInterval(y,f)}})
const O=e=>{let t=class extends e{constructor(...e){super(...e),this.refreshInterval=0,this.refreshTimestamp=0,this._debounceHasDataChanged=Object(s.i)(()=>this.hasDataChanged()),this.when().then(()=>{!function(e){p(e)&&u.push(e)}(this)},()=>{})}destroy(){p(this)&&u.includes(this)&&u.remove(this)}get refreshParameters(){return{_ts:this.refreshTimestamp||null}}refresh(e=Date.now()){Object(s.l)(this._debounceHasDataChanged()).then(t=>{t&&this._set("refreshTimestamp",e),this.emit("refresh",{dataChanged:t})},e=>{i.a.getLogger(this.declaredClass).error(e),this.emit("refresh",{dataChanged:!1,error:e})})}async hasDataChanged(){return!0}}
return Object(n.a)([Object(a.b)({type:Number,cast:e=>e>=.1?e:e<=0?0:.1,json:{write:!0}})],t.prototype,"refreshInterval",void 0),Object(n.a)([Object(a.b)({readOnly:!0})],t.prototype,"refreshTimestamp",void 0),Object(n.a)([Object(a.b)()],t.prototype,"refreshParameters",null),t=Object(n.a)([Object(o.a)("esri.layers.mixins.RefreshableLayer")],t),t}},1088:function(e,t,r){"use strict"
r.d(t,"a",(function(){return u}))
var n,i=r(856),s=r(860),a=r(858),o=(r(353),r(77),r(859)),l=r(868),c=r(857)
let u=n=class extends s.a{constructor(e){super(e),this.type="map-layer"}clone(){const{mapLayerId:e,gdbVersion:t}=this
return new n({mapLayerId:e,gdbVersion:t})}}
Object(i.a)([Object(l.a)({mapLayer:"map-layer"})],u.prototype,"type",void 0),Object(i.a)([Object(a.b)({type:o.a,json:{write:!0}})],u.prototype,"mapLayerId",void 0),Object(i.a)([Object(a.b)({type:String,json:{write:!0}})],u.prototype,"gdbVersion",void 0),u=n=Object(i.a)([Object(c.a)("esri.layers.support.source.MapLayerSource")],u)},1094:function(e,t,r){"use strict"
r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return d})),r.d(t,"c",(function(){return u})),r.d(t,"d",(function(){return p})),r.d(t,"e",(function(){return b})),r.d(t,"f",(function(){return y})),r.d(t,"g",(function(){return f})),r.d(t,"h",(function(){return h})),r(77)
var n=r(20),i=r(1014),s=r(1022),a=r(1105),o=r(1142),l=r(1068)
const c=a.a.fromJSON(l.c),u=s.a.fromJSON(l.e),d=i.a.fromJSON(l.d),p=o.a.fromJSON(l.f)
function h(e){if(Object(n.j)(e))return null
switch(e.type){case"mesh":return null
case"point":case"multipoint":return c
case"polyline":return u
case"polygon":case"extent":return d}return null}const b=a.a.fromJSON(l.g),f=s.a.fromJSON(l.i),y=i.a.fromJSON(l.h)},1098:function(e,t,r){"use strict"
r.d(t,"a",(function(){return u}))
var n,i=r(856),s=r(873),a=r(860),o=r(858),l=(r(353),r(77),r(859),r(857))
let c=n=class extends a.a{constructor(e){super(e),this.color=null,this.ratio=null}clone(){return new n({color:this.color,ratio:this.ratio})}}
Object(i.a)([Object(o.b)({type:s.a,json:{write:!0}})],c.prototype,"color",void 0),Object(i.a)([Object(o.b)({type:Number,json:{write:!0}})],c.prototype,"ratio",void 0),c=n=Object(i.a)([Object(l.a)("esri.renderers.support.HeatmapColorStop")],c)
const u=c},1112:function(e,t,r){"use strict"
r.d(t,"a",(function(){return d}))
var n=r(856),i=r(954),s=r(863),a=r(860),o=r(858),l=(r(353),r(77),r(859),r(857))
const c=new s.a({esriFeatureEditToolAutoCompletePolygon:"auto-complete-polygon",esriFeatureEditToolCircle:"circle",esriFeatureEditToolEllipse:"ellipse",esriFeatureEditToolFreehand:"freehand",esriFeatureEditToolLine:"line",esriFeatureEditToolNone:"none",esriFeatureEditToolPoint:"point",esriFeatureEditToolPolygon:"polygon",esriFeatureEditToolRectangle:"rectangle",esriFeatureEditToolArrow:"arrow",esriFeatureEditToolTriangle:"triangle",esriFeatureEditToolLeftArrow:"left-arrow",esriFeatureEditToolRightArrow:"right-arrow",esriFeatureEditToolUpArrow:"up-arrow",esriFeatureEditToolDownArrow:"down-arrow"})
let u=class extends(Object(i.a)(a.a)){constructor(e){super(e),this.name=null,this.description=null,this.drawingTool=null,this.prototype=null,this.thumbnail=null}}
Object(n.a)([Object(o.b)({json:{write:!0}})],u.prototype,"name",void 0),Object(n.a)([Object(o.b)({json:{write:!0}})],u.prototype,"description",void 0),Object(n.a)([Object(o.b)({json:{read:c.read,write:c.write}})],u.prototype,"drawingTool",void 0),Object(n.a)([Object(o.b)({json:{write:!0}})],u.prototype,"prototype",void 0),Object(n.a)([Object(o.b)({json:{write:!0}})],u.prototype,"thumbnail",void 0),u=Object(n.a)([Object(l.a)("esri.layers.support.FeatureTemplate")],u)
const d=u},1113:function(e,t,r){"use strict"
r.d(t,"a",(function(){return d}))
var n=r(960),i=r(881),s=r(1217),a=(r(1173),r(1234),r(1218),r(1219)),o=(r(1220),r(1174),r(1189)),l=r(1264)
const c=["oid","global-id"],u=["oid","global-id","guid"]
function d({displayField:e,editFieldsInfo:t,fields:r,objectIdField:o,title:l},c){if(!r)return null
const u=m({editFieldsInfo:t,fields:r,objectIdField:o},c)
if(!u.length)return null
const d=function(e){const t=Object(i.m)(e),{titleBase:r}=e
return t?`${r}: {${t.trim()}}`:r}({titleBase:l,fields:r,displayField:e}),p=[new a.a,new s.a]
return new n.a({title:d,content:p,fieldInfos:u})}const p=[/^fnode_$/i,/^tnode_$/i,/^lpoly_$/i,/^rpoly_$/i,/^poly_$/i,/^subclass$/i,/^subclass_$/i,/^rings_ok$/i,/^rings_nok$/i,/shape/i,/perimeter/i,/objectid/i,/_i$/i],h=(e,{editFieldsInfo:t,objectIdField:r,visibleFieldNames:n})=>n?n.has(e.name):!(f(e.name,t)||r&&e.name===r||c.indexOf(e.type)>-1||p.some(t=>t.test(e.name)))
function b(e,t){return"oid"===e.type?-1:"oid"===t.type?1:g(e)?-1:g(t)?1:(e.alias||e.name).toLocaleLowerCase().localeCompare((t.alias||t.name).toLocaleLowerCase())}function f(e,t){if(!e||!t)return!1
const{creationDateField:r,creatorField:n,editDateField:i,editorField:s}=t
return-1!==[r&&r.toLowerCase(),n&&n.toLowerCase(),i&&i.toLowerCase(),s&&s.toLowerCase()].indexOf(e.toLowerCase())}function y(e,t){return e.editable&&-1===u.indexOf(e.type)&&!f(e.name,t)}function m({editFieldsInfo:e,fields:t,objectIdField:r},n){return function(e,t){const r=e
return t&&(e=e.filter(e=>-1===t.indexOf(e.type))),e===r&&(e=e.slice()),e.sort(b),e}(t,(null==n?void 0:n.ignoreFieldTypes)||j).map(t=>new o.a({fieldName:t.name,isEditable:y(t,e),label:t.alias,format:O(t),visible:h(t,{editFieldsInfo:e,objectIdField:r,visibleFieldNames:null==n?void 0:n.visibleFieldNames})}))}function O(e){switch(e.type){case"small-integer":case"integer":case"single":return new l.a({digitSeparator:!0,places:0})
case"double":return new l.a({digitSeparator:!0,places:2})
case"date":return new l.a({dateFormat:"long-month-day-year"})
default:return null}}function g(e){return"name"===(e.name&&e.name.toLowerCase())||"name"===(e.alias&&e.alias.toLowerCase())||void 0}const j=["geometry","blob","raster","guid","xml"]},1121:function(e,t,r){"use strict"
r.d(t,"a",(function(){return a}))
var n=r(856),i=r(858),s=(r(353),r(77),r(859),r(857))
const a=e=>{let t=class extends e{constructor(){super(...arguments),this.customParameters=null}}
return Object(n.a)([Object(i.b)({type:Object,json:{write:{overridePolicy:e=>({enabled:!!(e&&Object.keys(e).length>0)})}}})],t.prototype,"customParameters",void 0),t=Object(n.a)([Object(s.a)("esri.layers.mixins.CustomParametersMixin")],t),t}},1130:function(e,t,r){"use strict"
function n(e){return 32+e.length}function i(){return 16}function s(e){if(!e)return 0
let t=32
for(const r in e)if(e.hasOwnProperty(r)){const i=e[r]
switch(typeof i){case"string":t+=n(i)
break
case"number":t+=16
break
case"boolean":t+=4}}return t}function a(e,t){return 32+e.length*t}var o
r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return a})),r.d(t,"d",(function(){return i})),r.d(t,"e",(function(){return n})),function(e){e[e.KILOBYTES=1024]="KILOBYTES",e[e.MEGABYTES=1048576]="MEGABYTES",e[e.GIGABYTES=1073741824]="GIGABYTES"}(o||(o={}))},1135:function(e,t,r){"use strict"
r.d(t,"a",(function(){return c}))
var n=r(856),i=r(177),s=r(20),a=r(858),o=(r(353),r(77),r(859),r(857)),l=r(975)
const c=e=>{let t=class extends e{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title")
if(this.url){const e=Object(l.f)(this.url)
if(Object(s.k)(e)&&e.title)return e.title}return this._get("title")||""}set title(e){this._set("title",e)}set url(e){this._set("url",Object(l.h)(e,i.a.getLogger(this.declaredClass)))}}
return Object(n.a)([Object(a.b)()],t.prototype,"title",null),Object(n.a)([Object(a.b)({type:String})],t.prototype,"url",null),t=Object(n.a)([Object(o.a)("esri.layers.mixins.ArcGISService")],t),t}},1143:function(e,t,r){"use strict"
r.d(t,"a",(function(){return a}))
var n=r(856),i=r(858),s=(r(353),r(77),r(859),r(857))
const a=e=>{let t=class extends e{get apiKey(){var e
return this._isOverridden("apiKey")?this._get("apiKey"):function(e){return"portalItem"in e}(this)?null==(e=this.portalItem)?void 0:e.apiKey:null}set apiKey(e){null!=e?this._override("apiKey",e):(this._clearOverride("apiKey"),this.clear("apiKey","user"))}}
return Object(n.a)([Object(i.b)({type:String})],t.prototype,"apiKey",null),t=Object(n.a)([Object(s.a)("esri.layers.mixins.APIKeyMixin")],t),t}},1162:function(e,t,r){"use strict"
r.d(t,"a",(function(){return x}))
var n,i=r(856),s=r(863),a=r(860),o=r(20),l=r(886),c=r(858),u=(r(353),r(77),r(859)),d=r(865),p=r(857),h=r(864),b=r(866),f=r(659),y=r(884),m=r(872),O=r(662),g=r(1273)
const j=new s.a({PNG:"png",PNG8:"png8",PNG24:"png24",PNG32:"png32",JPEG:"jpg",JPG:"jpg",DIB:"dib",TIFF:"tiff",EMF:"emf",PS:"ps",PDF:"pdf",GIF:"gif",SVG:"svg",SVGZ:"svgz",Mixed:"mixed",MIXED:"mixed",LERC:"lerc",LERC2D:"lerc2d",RAW:"raw",pbf:"pbf"})
let v=n=class extends a.a{constructor(e){super(e),this.dpi=96,this.format=null,this.origin=null,this.minScale=0,this.maxScale=0,this.size=null,this.spatialReference=null}static create(e={}){const{resolutionFactor:t=1,scales:r,size:i=256,spatialReference:s=f.default.WebMercator,numLODs:a=24}=e
if(!Object(m.l)(s)){const e=[]
if(r)for(let t=0;t<r.length;t++){const n=r[t]
e.push({level:t,scale:n,resolution:n})}else{let t=5e-4
for(let r=a-1;r>=0;r--)e.unshift({level:r,scale:t,resolution:t}),t*=2}return new n({dpi:96,lods:e,origin:new b.a(0,0,s),size:[i,i],spatialReference:s})}const o=Object(m.e)(s),c=e.origin?new b.a({x:e.origin.x,y:e.origin.y,spatialReference:s}):new b.a(o?{x:o.origin[0],y:o.origin[1],spatialReference:s}:{x:0,y:0,spatialReference:s}),u=1/(39.37*Object(l.f)(s)*96),d=[]
if(r)for(let e=0;e<r.length;e++){const t=r[e],n=t*u
d.push({level:e,scale:t,resolution:n})}else{let e=Object(m.h)(s)?512/i*591657527.5917094:256/i*591657527.591555
const r=Math.ceil(a/t)
d.push({level:0,scale:e,resolution:e*u})
for(let n=1;n<r;n++){const r=e/2**t,i=r*u
d.push({level:n,scale:r,resolution:i}),e=r}}return new n({dpi:96,lods:d,origin:c,size:[i,i],spatialReference:s})}get isWrappable(){const{spatialReference:e,origin:t}=this
if(e&&t){const r=Object(m.e)(e)
return e.isWrappable&&Math.abs(r.origin[0]-t.x)<=r.dx}return!1}readOrigin(e,t){return b.a.fromJSON({spatialReference:t.spatialReference,...e})}set lods(e){let t=0,r=0
const n=[]
this._levelToLOD={},e&&(t=-1/0,r=1/0,e.forEach(e=>{n.push(e.scale),t=e.scale>t?e.scale:t,r=e.scale<r?e.scale:r,this._levelToLOD[e.level]=e})),this._set("scales",n),this._set("minScale",t),this._set("maxScale",r),this._set("lods",e),this._initializeUpsampleLevels()}readSize(e,t){return[t.cols,t.rows]}writeSize(e,t){t.cols=e[0],t.rows=e[1]}zoomToScale(e){const t=this.scales
if(e<=0)return t[0]
if(e>=t.length-1)return t[t.length-1]
{const r=Math.floor(e),n=r+1
return t[r]/(t[r]/t[n])**(e-r)}}scaleToZoom(e){const t=this.scales,r=t.length-1
let n=0
for(;n<r;n++){const r=t[n],i=t[n+1]
if(r<=e)return n
if(i===e)return n+1
if(r>e&&i<e)return n+Math.log(r/e)/Math.log(r/i)}return n}snapScale(e,t=.95){const r=this.scaleToZoom(e)
return r%Math.floor(r)>=t?this.zoomToScale(Math.ceil(r)):this.zoomToScale(Math.floor(r))}tileAt(e,t,r,n){const i=this.lodAt(e)
if(!i)return null
let s,a
if("number"==typeof t)s=t,a=r
else if(Object(m.d)(t.spatialReference,this.spatialReference))s=t.x,a=t.y,n=r
else{const e=Object(O.project)(t,this.spatialReference)
if(Object(o.j)(e))return null
s=e.x,a=e.y,n=r}const l=i.resolution*this.size[0],c=i.resolution*this.size[1]
return n||(n={id:null,level:0,row:0,col:0,extent:Object(y.m)()}),n.level=e,n.row=Math.floor((this.origin.y-a)/c+.001),n.col=Math.floor((s-this.origin.x)/l+.001),this.updateTileInfo(n),n}updateTileInfo(e,t=n.ExtrapolateOptions.NONE){let r=this.lodAt(e.level)
if(!r&&t===n.ExtrapolateOptions.POWER_OF_TWO){const t=this.lods[this.lods.length-1]
t.level<e.level&&(r=t)}if(!r)return
const i=e.level-r.level,s=r.resolution*this.size[0]/2**i,a=r.resolution*this.size[1]/2**i
e.id=`${e.level}/${e.row}/${e.col}`,e.extent||(e.extent=Object(y.m)()),e.extent[0]=this.origin.x+e.col*s,e.extent[1]=this.origin.y-(e.row+1)*a,e.extent[2]=e.extent[0]+s,e.extent[3]=e.extent[1]+a}upsampleTile(e){const t=this._upsampleLevels[e.level]
return!(!t||-1===t.parentLevel||(e.level=t.parentLevel,e.row=Math.floor(e.row/t.factor+.001),e.col=Math.floor(e.col/t.factor+.001),this.updateTileInfo(e),0))}getTileBounds(e,t){const{resolution:r}=this.lodAt(t.level),n=r*this.size[0],i=r*this.size[1]
return e[0]=this.origin.x+t.col*n,e[1]=this.origin.y-(t.row+1)*i,e[2]=e[0]+n,e[3]=e[1]+i,e}lodAt(e){return this._levelToLOD&&this._levelToLOD[e]||null}clone(){return n.fromJSON(this.write({}))}getOrCreateCompatible(e,t){if(256===this.size[0]&&256===this.size[1])return 256===e?this:null
const r=[],i=this.lods.length
for(let e=0;e<i;e++){const n=this.lods[e],i=n.resolution*t
r.push(new g.a({level:n.level,scale:n.scale,resolution:i}))}return new n({size:[e,e],dpi:this.dpi,format:this.format,compressionQuality:this.compressionQuality,origin:this.origin,spatialReference:this.spatialReference,lods:r})}_initializeUpsampleLevels(){const e=this.lods
this._upsampleLevels=[]
let t=null
for(let r=0;r<e.length;r++){const n=e[r]
this._upsampleLevels[n.level]={parentLevel:t?t.level:-1,factor:t?t.resolution/n.resolution:0},t=n}}}
var w,S
Object(i.a)([Object(c.b)({type:Number,json:{write:!0}})],v.prototype,"compressionQuality",void 0),Object(i.a)([Object(c.b)({type:Number,json:{write:!0}})],v.prototype,"dpi",void 0),Object(i.a)([Object(c.b)({type:String,json:{read:j.read,write:j.write,origins:{"web-scene":{read:!1,write:!1}}}})],v.prototype,"format",void 0),Object(i.a)([Object(c.b)({readOnly:!0})],v.prototype,"isWrappable",null),Object(i.a)([Object(c.b)({type:b.a,json:{write:!0}})],v.prototype,"origin",void 0),Object(i.a)([Object(d.a)("origin")],v.prototype,"readOrigin",null),Object(i.a)([Object(c.b)({type:[g.a],value:null,json:{write:!0}})],v.prototype,"lods",null),Object(i.a)([Object(c.b)({readOnly:!0})],v.prototype,"minScale",void 0),Object(i.a)([Object(c.b)({readOnly:!0})],v.prototype,"maxScale",void 0),Object(i.a)([Object(c.b)({readOnly:!0})],v.prototype,"scales",void 0),Object(i.a)([Object(c.b)({cast:e=>Array.isArray(e)?e:"number"==typeof e?[e,e]:[256,256]})],v.prototype,"size",void 0),Object(i.a)([Object(d.a)("size",["rows","cols"])],v.prototype,"readSize",null),Object(i.a)([Object(h.a)("size",{cols:{type:u.a},rows:{type:u.a}})],v.prototype,"writeSize",null),Object(i.a)([Object(c.b)({type:f.default,json:{write:!0}})],v.prototype,"spatialReference",void 0),v=n=Object(i.a)([Object(p.a)("esri.layers.support.TileInfo")],v),w=v||(v={}),(S=w.ExtrapolateOptions||(w.ExtrapolateOptions={}))[S.NONE=0]="NONE",S[S.POWER_OF_TWO=1]="POWER_OF_TWO"
const x=v},1167:function(e,t,r){"use strict"
r.d(t,"a",(function(){return h}))
var n=r(856),i=r(954),s=r(860),a=r(858),o=(r(353),r(77),r(859),r(865)),l=r(857),c=r(864),u=r(991),d=r(1112)
let p=class extends(Object(i.a)(s.a)){constructor(e){super(e),this.id=null,this.name=null,this.domains=null,this.templates=null}readDomains(e){const t={}
for(const r of Object.keys(e))t[r]=Object(u.a)(e[r])
return t}writeDomains(e,t){const r={}
for(const t of Object.keys(e)){var n
e[t]&&(r[t]=null==(n=e[t])?void 0:n.toJSON())}t.domains=r}}
Object(n.a)([Object(a.b)({json:{write:!0}})],p.prototype,"id",void 0),Object(n.a)([Object(a.b)({json:{write:!0}})],p.prototype,"name",void 0),Object(n.a)([Object(a.b)({json:{write:!0}})],p.prototype,"domains",void 0),Object(n.a)([Object(o.a)("domains")],p.prototype,"readDomains",null),Object(n.a)([Object(c.a)("domains")],p.prototype,"writeDomains",null),Object(n.a)([Object(a.b)({type:[d.a],json:{write:!0}})],p.prototype,"templates",void 0),p=Object(n.a)([Object(l.a)("esri.layers.support.FeatureType")],p)
const h=p},1184:function(e,t,r){"use strict"
r.d(t,"a",(function(){return d}))
var n=r(856),i=r(878),s=r(912),a=r(20),o=(r(354),r(177),r(1007),r(958)),l=r(858),c=(r(353),r(77),r(859),r(857))
let u=class extends(Object(s.b)(i.a)){constructor(e){super(e),this.getCollections=null}initialize(){this.handles.add(Object(o.a)(()=>this._refresh()))}destroy(){this.getCollections=null}_refresh(){const e=Object(a.k)(this.getCollections)?this.getCollections():null
if(Object(a.j)(e))return void this.removeAll()
let t=0
for(const r of e)Object(a.k)(r)&&(t=this._processCollection(t,r))
this.splice(t,this.length)}_createNewInstance(e){return new i.a(e)}_processCollection(e,t){if(!t)return e
const r=this.itemFilterFunction?this.itemFilterFunction:e=>!!e
for(const n of t)if(n){if(r(n)){const t=this.indexOf(n,e)
t>=0?t!==e&&this.reorder(n,e):this.add(n,e),++e}if(this.getChildrenFunction){const t=this.getChildrenFunction(n)
if(Array.isArray(t))for(const r of t)e=this._processCollection(e,r)
else e=this._processCollection(e,t)}}return e}}
Object(n.a)([Object(l.b)()],u.prototype,"getCollections",void 0),Object(n.a)([Object(l.b)()],u.prototype,"getChildrenFunction",void 0),Object(n.a)([Object(l.b)()],u.prototype,"itemFilterFunction",void 0),u=Object(n.a)([Object(c.a)("esri.core.CollectionFlattener")],u)
const d=u},1195:function(e,t,r){"use strict"
r.d(t,"a",(function(){return u}))
var n,i=r(856),s=r(878),a=r(860),o=r(858),l=(r(353),r(77),r(859),r(857))
let c=n=class extends a.a{constructor(e){super(e),this.floorField=null,this.viewAllMode=!1,this.viewAllLevelIds=new s.a}clone(){return new n({floorField:this.floorField,viewAllMode:this.viewAllMode,viewAllLevelIds:this.viewAllLevelIds})}}
Object(i.a)([Object(o.b)({type:String,json:{write:!0}})],c.prototype,"floorField",void 0),Object(i.a)([Object(o.b)({json:{read:!1,write:!1}})],c.prototype,"viewAllMode",void 0),Object(i.a)([Object(o.b)({json:{read:!1,write:!1}})],c.prototype,"viewAllLevelIds",void 0),c=n=Object(i.a)([Object(l.a)("esri.layers.support.LayerFloorInfo")],c)
const u=c},1273:function(e,t,r){"use strict"
r.d(t,"a",(function(){return u}))
var n,i=r(856),s=r(860),a=r(858),o=(r(353),r(77),r(859)),l=r(857)
let c=n=class extends s.a{constructor(e){super(e),this.cols=null,this.level=0,this.levelValue=null,this.origin=null,this.resolution=0,this.rows=null,this.scale=0}clone(){return new n({cols:this.cols,level:this.level,levelValue:this.levelValue,resolution:this.resolution,rows:this.rows,scale:this.scale})}}
Object(i.a)([Object(a.b)({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],c.prototype,"cols",void 0),Object(i.a)([Object(a.b)({type:o.a,json:{write:!0}})],c.prototype,"level",void 0),Object(i.a)([Object(a.b)({type:String,json:{write:!0}})],c.prototype,"levelValue",void 0),Object(i.a)([Object(a.b)({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],c.prototype,"origin",void 0),Object(i.a)([Object(a.b)({type:Number,json:{write:!0}})],c.prototype,"resolution",void 0),Object(i.a)([Object(a.b)({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],c.prototype,"rows",void 0),Object(i.a)([Object(a.b)({type:Number,json:{write:!0}})],c.prototype,"scale",void 0),c=n=Object(i.a)([Object(l.a)("esri.layers.support.LOD")],c)
const u=c},1399:function(e,t,r){"use strict"
r.d(t,"a",(function(){return i}))
var n=r(354)
class i{constructor(e,t,r=""){this.major=e,this.minor=t,this._context=r}lessThan(e,t){return this.major<e||e===this.major&&this.minor<t}since(e,t){return!this.lessThan(e,t)}validate(e){if(this.major!==e.major){const t=this._context&&this._context+":",r=this._context&&this._context+" "
throw new n.a(t+"unsupported-version",`Required major ${r}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,{version:e})}}clone(){return new i(this.major,this.minor,this._context)}static parse(e,t=""){const[r,s]=e.split("."),a=/^\s*\d+\s*$/
if(!r||!r.match||!r.match(a))throw new n.a((t&&t+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:e})
if(!s||!s.match||!s.match(a))throw new n.a((t&&t+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:e})
const o=parseInt(r,10),l=parseInt(s,10)
return new i(o,l,t)}}},1416:function(e,t,r){"use strict"
r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return i}))
var n=r(913)
function i(e,t,r){return t.flatten(({sublayers:e})=>e).length!==e.length||!!e.some(e=>e.originIdOf("minScale")>r||e.originIdOf("maxScale")>r||e.originIdOf("renderer")>r||e.originIdOf("labelingInfo")>r||e.originIdOf("opacity")>r||e.originIdOf("labelsVisible")>r||e.originIdOf("source")>r)||!a(e,t)}function s(e,t,r){return!!e.some(e=>{const t=e.source
return!(!t||"map-layer"===t.type&&t.mapLayerId===e.id&&(!t.gdbVersion||t.gdbVersion===r.gdbVersion))||e.originIdOf("renderer")>n.a.SERVICE||e.originIdOf("labelingInfo")>n.a.SERVICE||e.originIdOf("opacity")>n.a.SERVICE||e.originIdOf("labelsVisible")>n.a.SERVICE})||!a(e,t)}function a(e,t){if(!e||!e.length)return!0
const r=t.slice().reverse().flatten(({sublayers:e})=>e&&e.toArray().reverse()).map(e=>e.id).toArray()
if(e.length>r.length)return!1
let n=0
const i=r.length
for(const{id:t}of e){for(;n<i&&r[n]!==t;)n++
if(n>=i)return!1}return!0}function o(e){return!!e&&e.some(e=>null!=e.minScale||e.layerDefinition&&null!=e.layerDefinition.minScale)}},1598:function(e,t,r){"use strict"
r.d(t,"a",(function(){return H}))
var n,i=r(856),s=(r(870),r(960)),a=(r(1038),r(1028),r(1032),r(1029),r(911),r(1024),r(1043),r(1080),r(1035)),o=r(660),l=r(906),c=r(878),u=r(354),d=r(912),p=r(1010),h=r(178),b=r(903),f=r(177),y=r(20),m=r(1011),O=r(292),g=r(858),j=r(920),v=r(880),w=r(865),S=r(857),x=r(864),_=r(859),M=r(913),I=r(1167),T=r(941),E=r(1016),L=r(665),P=r(1195),A=r(983),F=r(1088),C=r(918),D=r(1113),R=r(1078),N=r(658)
function k(e){return e&&"esriSMS"===e.type}function V(e,t,r){var n
const i=this.originIdOf(t)>=Object(M.e)(r.origin)
return{ignoreOrigin:!0,allowNull:i,enabled:!!r&&"map-image"===(null==(n=r.layer)?void 0:n.type)&&(r.writeSublayerStructure||i)}}function U(e,t,r){var n
return{enabled:!!r&&"tile"===(null==(n=r.layer)?void 0:n.type)&&this._isOverridden(t)}}function q(e,t,r){return{ignoreOrigin:!0,enabled:r&&r.writeSublayerStructure||!1}}function z(e,t,r){return{ignoreOrigin:!0,enabled:!!r&&(r.writeSublayerStructure||this.originIdOf(t)>=Object(M.e)(r.origin))}}const G=f.a.getLogger("esri.layers.support.Sublayer")
let B=0
const $=new Set
$.add("layer"),$.add("parent"),$.add("loaded"),$.add("loadStatus"),$.add("loadError"),$.add("loadWarnings")
let J=n=class extends(Object(d.b)(Object(m.a)(Object(p.b)(b.a)))){constructor(e){super(e),this.capabilities=void 0,this.fields=null,this.fullExtent=null,this.globalIdField=null,this.legendEnabled=!0,this.objectIdField=null,this.popupEnabled=!0,this.popupTemplate=null,this.sourceJSON=null,this.title=null,this.typeIdField=null,this.types=null}async load(e){return this.addResolvingPromise((async()=>{var t
if(!this.layer&&!this.url)throw new u.a("sublayer:missing-layer","Sublayer can't be loaded without being part of a layer",{sublayer:this})
let r=null
if(!this.layer||this.originIdOf("url")>M.a.SERVICE||"data-layer"===(null==(t=this.source)?void 0:t.type))r=(await Object(o.default)(this.url,{responseType:"json",query:{f:"json"},...e})).data
else{var n
let t=this.id
"map-layer"===(null==(n=this.source)?void 0:n.type)&&(t=this.source.mapLayerId),r=await this.layer.fetchSublayerInfo(t,e)}r&&(this.sourceJSON=r,this.read({layerDefinition:r},{origin:"service"}))})()),this}readCapabilities(e,t){const r=(e=(t=t.layerDefinition||t).capabilities||e)?e.toLowerCase().split(",").map(e=>e.trim()):[]
return{exportMap:{supportsModification:!!t.canModifyLayer},operations:{supportsQuery:-1!==r.indexOf("query")}}}set definitionExpression(e){this._setAndNotifyLayer("definitionExpression",e)}get fieldsIndex(){return new E.a(this.fields||[])}set floorInfo(e){this._setAndNotifyLayer("floorInfo",e)}readGlobalIdFieldFromService(e,t){if((t=t.layerDefinition||t).globalIdField)return t.globalIdField
if(t.fields)for(const e of t.fields)if("esriFieldTypeGlobalID"===e.type)return e.name}get id(){const e=this._get("id")
return null==e?B++:e}set id(e){this._get("id")!==e&&(!1!==this.get("layer.capabilities.exportMap.supportsDynamicLayers")?this._set("id",e):this._logLockedError("id","capability not available 'layer.capabilities.exportMap.supportsDynamicLayers'"))}set labelingInfo(e){this._setAndNotifyLayer("labelingInfo",e)}writeLabelingInfo(e,t,r,n){e&&e.length&&(t.layerDefinition={drawingInfo:{labelingInfo:e.map(e=>e.write({},n))}})}set labelsVisible(e){this._setAndNotifyLayer("labelsVisible",e)}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach(t=>t.layer=e)}set listMode(e){this._set("listMode",e)}set minScale(e){this._setAndNotifyLayer("minScale",e)}readMinScale(e,t){return t.minScale||t.layerDefinition&&t.layerDefinition.minScale||0}set maxScale(e){this._setAndNotifyLayer("maxScale",e)}readMaxScale(e,t){return t.maxScale||t.layerDefinition&&t.layerDefinition.maxScale||0}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this
return{minScale:e,maxScale:t}}readObjectIdFieldFromService(e,t){if((t=t.layerDefinition||t).objectIdField)return t.objectIdField
if(t.fields)for(const e of t.fields)if("esriFieldTypeOID"===e.type)return e.name}set opacity(e){this._setAndNotifyLayer("opacity",e)}readOpacity(e,t){const r=t.layerDefinition
return 1-.01*(null!=r.transparency?r.transparency:r.drawingInfo.transparency)}writeOpacity(e,t,r,n){t.layerDefinition={drawingInfo:{transparency:100-100*e}}}writeParent(e,t){this.parent&&this.parent!==this.layer?t.parentLayerId=Object(_.e)(this.parent.id):t.parentLayerId=-1}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){if(e)for(const t of e.getSymbols())if(Object(l.c)(t)){G.warn("Sublayer renderer should use 2D symbols")
break}this._setAndNotifyLayer("renderer",e)}get source(){return this._get("source")||new F.a({mapLayerId:this.id})}set source(e){this._setAndNotifyLayer("source",e)}set sublayers(e){this._handleSublayersChange(e,this._get("sublayers")),this._set("sublayers",e)}castSublayers(e){return Object(_.m)(c.a.ofType(n),e)}writeSublayers(e,t,r){this.get("sublayers.length")&&(t[r]=this.sublayers.map(e=>e.id).toArray().reverse())}readTypeIdField(e,t){let r=(t=t.layerDefinition||t).typeIdField
if(r&&t.fields){r=r.toLowerCase()
const e=t.fields.find(e=>e.name.toLowerCase()===r)
e&&(r=e.name)}return null}get url(){var e,t
const r=null!=(e=null==(t=this.layer)?void 0:t.parsedUrl)?e:this._lastParsedUrl,n=this.source
if(!r)return null
if(this._lastParsedUrl=r,"map-layer"===(null==n?void 0:n.type))return`${r.path}/${n.mapLayerId}`
const i={layer:JSON.stringify({source:this.source})}
return`${r.path}/dynamicLayer?${Object(O.G)(i)}`}set url(e){e?this._override("url",e):this._clearOverride("url")}set visible(e){this._setAndNotifyLayer("visible",e)}writeVisible(e,t,r,n){t[r]=this.getAtOrigin("defaultVisibility","service")||e}clone(){const{store:e}=Object(j.a)(this),t=new n
return Object(j.a)(t).store=e.clone($),this.commitProperty("url"),t._lastParsedUrl=this._lastParsedUrl,t}createPopupTemplate(e){return Object(D.a)(this,e)}createQuery(){return new C.a({returnGeometry:!0,where:this.definitionExpression||"1=1"})}async createFeatureLayer(){var e,t
if(this.hasOwnProperty("sublayers"))return null
const n=null==(e=this.layer)?void 0:e.parsedUrl,i=new(0,(await Promise.all([r.e(177),r.e(229)]).then(r.bind(null,667))).default)({url:n.path})
return n&&this.source&&("map-layer"===this.source.type?i.layerId=this.source.mapLayerId:i.dynamicDataSource=this.source),null!=this.layer.refreshInterval&&(i.refreshInterval=this.layer.refreshInterval),this.definitionExpression&&(i.definitionExpression=this.definitionExpression),this.floorInfo&&(i.floorInfo=Object(h.a)(this.floorInfo)),this.originIdOf("labelingInfo")>M.a.SERVICE&&(i.labelingInfo=Object(h.a)(this.labelingInfo)),this.originIdOf("labelsVisible")>M.a.DEFAULTS&&(i.labelsVisible=this.labelsVisible),this.originIdOf("legendEnabled")>M.a.DEFAULTS&&(i.legendEnabled=this.legendEnabled),this.originIdOf("visible")>M.a.DEFAULTS&&(i.visible=this.visible),this.originIdOf("minScale")>M.a.DEFAULTS&&(i.minScale=this.minScale),this.originIdOf("maxScale")>M.a.DEFAULTS&&(i.maxScale=this.maxScale),this.originIdOf("opacity")>M.a.DEFAULTS&&(i.opacity=this.opacity),this.originIdOf("popupTemplate")>M.a.DEFAULTS&&(i.popupTemplate=Object(h.a)(this.popupTemplate)),this.originIdOf("renderer")>M.a.SERVICE&&(i.renderer=Object(h.a)(this.renderer)),"data-layer"===(null==(t=this.source)?void 0:t.type)&&(i.dynamicDataSource=this.source.clone()),this.originIdOf("title")>M.a.DEFAULTS&&(i.title=this.title),"map-image"===this.layer.type&&this.layer.originIdOf("customParameters")>M.a.DEFAULTS&&(i.customParameters=this.layer.customParameters),"tile"===this.layer.type&&this.layer.originIdOf("customParameters")>M.a.DEFAULTS&&(i.customParameters=this.layer.customParameters),i}getField(e){return this.fieldsIndex.get(e)}getFeatureType(e){const{typeIdField:t,types:r}=this
if(!t||!e)return null
const n=e.attributes?e.attributes[t]:void 0
if(null==n)return null
let i=null
return r.some(e=>{const{id:t}=e
return null!=t&&(t.toString()===n.toString()&&(i=e),!!i)}),i}getFieldDomain(e,t){const r=t&&t.feature,n=this.getFeatureType(r)
if(n){const t=n.domains&&n.domains[e]
if(t&&"inherited"!==t.type)return t}return this._getLayerDomain(e)}async queryFeatures(e=this.createQuery(),t){var n,i,s,a
if(await this.load(),!this.get("capabilities.operations.supportsQuery"))throw new u.a("Sublayer.queryFeatures","this layer doesn't support queries.")
const[{executeQuery:o},{default:l}]=await Promise.all([r.e(202).then(r.bind(null,1021)),r.e(432).then(r.bind(null,947))]),c=await o(this.url,C.a.from(e),null!=(n=null==(i=this.layer)?void 0:i.spatialReference)?n:null,{...t,query:{...null==(s=this.layer)?void 0:s.customParameters,token:null==(a=this.layer)?void 0:a.apiKey}}),d=l.fromJSON(c.data)
if(null!=d&&d.features)for(const e of d.features)e.sourceLayer=this
return d}toExportImageJSON(e){var t
const r={id:this.id,source:(null==(t=this.source)?void 0:t.toJSON())||{mapLayerId:this.id,type:"mapLayer"}}
if(this.definitionExpression){const t=Object(y.k)(e)?Object(R.a)(e,this):this.definitionExpression
r.definitionExpression=t}else Object(y.k)(e)&&(r.definitionExpression=e)
const n=["renderer","labelingInfo","opacity","labelsVisible"].reduce((e,t)=>(e[t]=this.originIdOf(t),e),{})
if(Object.keys(n).some(e=>n[e]>M.a.SERVICE)){const e=r.drawingInfo={}
n.renderer>M.a.SERVICE&&(e.renderer=this.renderer?this.renderer.toJSON():null),n.labelsVisible>M.a.SERVICE&&(e.showLabels=this.labelsVisible),this.labelsVisible&&n.labelingInfo>M.a.SERVICE&&(e.labelingInfo=this.labelingInfo?this.labelingInfo.map(e=>e.write({},{origin:"service",layer:this.layer})):null,e.showLabels=!0),n.opacity>M.a.SERVICE&&(e.transparency=100-100*this.opacity),this._assignDefaultSymbolColors(e.renderer)}return r}_assignDefaultSymbolColors(e){this._forEachSimpleMarkerSymbols(e,e=>{e.color||"esriSMSX"!==e.style&&"esriSMSCross"!==e.style||(e.outline&&e.outline.color?e.color=e.outline.color:e.color=[0,0,0,0])})}_forEachSimpleMarkerSymbols(e,t){if(e){const r="uniqueValueInfos"in e?e.uniqueValueInfos:"classBreakInfos"in e?e.classBreakInfos:[]
for(const e of r)k(e.symbol)&&t(e.symbol)
"symbol"in e&&k(e.symbol)&&t(e.symbol),"defaultSymbol"in e&&k(e.defaultSymbol)&&t(e.defaultSymbol)}}_setAndNotifyLayer(e,t){const r=this.layer,n=this._get(e)
let i,s
switch(e){case"definitionExpression":case"floorInfo":i="supportsSublayerDefinitionExpression"
case"minScale":case"maxScale":case"visible":i="supportsSublayerVisibility"
break
case"labelingInfo":case"labelsVisible":case"opacity":case"renderer":case"source":i="supportsDynamicLayers",s="supportsModification"}const a=Object(j.a)(this).getDefaultOrigin()
if("service"!==a){if(i&&!1===this.get("layer.capabilities.exportMap."+i))return void this._logLockedError(e,`capability not available 'layer.capabilities.exportMap.${i}'`)
if(s&&!1===this.get("capabilities.exportMap."+s))return void this._logLockedError(e,`capability not available 'capabilities.exportMap.${s}'`)}"source"!==e||"not-loaded"===this.loadStatus?(this._set(e,t),"service"!==a&&n!==t&&r&&r.emit&&r.emit("sublayer-update",{propertyName:e,target:this})):this._logLockedError(e,"'source' can't be changed after calling sublayer.load()")}_handleSublayersChange(e,t){t&&(t.forEach(e=>{e.parent=null,e.layer=null}),this.handles.removeAll()),e&&(e.forEach(e=>{e.parent=this,e.layer=this.layer}),this.handles.add([e.on("after-add",({item:e})=>{e.parent=this,e.layer=this.layer}),e.on("after-remove",({item:e})=>{e.parent=null,e.layer=null}),e.on("before-changes",e=>{const t=this.get("layer.capabilities.exportMap.supportsSublayersChanges")
null==t||t||(G.error(new u.a("sublayer:sublayers-non-modifiable","Sublayer can't be added, moved, or removed from the layer's sublayers",{sublayer:this,layer:this.layer})),e.preventDefault())})]))}_logLockedError(e,t){G.error(new u.a("sublayer:locked",`Property '${e}' can't be changed on Sublayer from the layer '${this.layer.id}'`,{reason:t,sublayer:this,layer:this.layer}))}_getLayerDomain(e){const t=this.fieldsIndex.get(e)
return t?t.domain:null}}
J.test={isMapImageLayerOverridePolicy:e=>e===q||e===V,isTileImageLayerOverridePolicy:e=>e===U},Object(i.a)([Object(g.b)({readOnly:!0})],J.prototype,"capabilities",void 0),Object(i.a)([Object(w.a)("service","capabilities",["layerDefinition.canModifyLayer","layerDefinition.capabilities"])],J.prototype,"readCapabilities",null),Object(i.a)([Object(g.b)({type:String,value:null,json:{name:"layerDefinition.definitionExpression",write:{allowNull:!0,overridePolicy:V}}})],J.prototype,"definitionExpression",null),Object(i.a)([Object(g.b)({type:[T.a],json:{origins:{service:{read:{source:"layerDefinition.fields"}}}}})],J.prototype,"fields",void 0),Object(i.a)([Object(g.b)({readOnly:!0})],J.prototype,"fieldsIndex",null),Object(i.a)([Object(g.b)({type:P.a,value:null,json:{name:"layerDefinition.floorInfo",read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo",overridePolicy:V},origins:{"web-scene":{read:!1,write:!1}}}})],J.prototype,"floorInfo",null),Object(i.a)([Object(g.b)({type:N.default,json:{read:{source:"layerDefinition.extent"}}})],J.prototype,"fullExtent",void 0),Object(i.a)([Object(g.b)({type:String})],J.prototype,"globalIdField",void 0),Object(i.a)([Object(w.a)("service","globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"])],J.prototype,"readGlobalIdFieldFromService",null),Object(i.a)([Object(g.b)({type:_.a,json:{write:{ignoreOrigin:!0}}})],J.prototype,"id",null),Object(i.a)([Object(g.b)({value:null,type:[L.default],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo"},write:{target:"layerDefinition.drawingInfo.labelingInfo",overridePolicy:q}}})],J.prototype,"labelingInfo",null),Object(i.a)([Object(x.a)("labelingInfo")],J.prototype,"writeLabelingInfo",null),Object(i.a)([Object(g.b)({type:Boolean,value:!0,json:{read:{source:"layerDefinition.drawingInfo.showLabels"},write:{target:"layerDefinition.drawingInfo.showLabels",overridePolicy:q}}})],J.prototype,"labelsVisible",null),Object(i.a)([Object(g.b)({value:null})],J.prototype,"layer",null),Object(i.a)([Object(g.b)({type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend",overridePolicy:z}}})],J.prototype,"legendEnabled",void 0),Object(i.a)([Object(g.b)({type:["show","hide","hide-children"],value:"show",json:{read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],J.prototype,"listMode",null),Object(i.a)([Object(g.b)({type:Number,value:0,json:{write:{overridePolicy:q}}})],J.prototype,"minScale",null),Object(i.a)([Object(w.a)("minScale",["minScale","layerDefinition.minScale"])],J.prototype,"readMinScale",null),Object(i.a)([Object(g.b)({type:Number,value:0,json:{write:{overridePolicy:q}}})],J.prototype,"maxScale",null),Object(i.a)([Object(w.a)("maxScale",["maxScale","layerDefinition.maxScale"])],J.prototype,"readMaxScale",null),Object(i.a)([Object(g.b)({readOnly:!0})],J.prototype,"effectiveScaleRange",null),Object(i.a)([Object(g.b)({type:String})],J.prototype,"objectIdField",void 0),Object(i.a)([Object(w.a)("service","objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],J.prototype,"readObjectIdFieldFromService",null),Object(i.a)([Object(g.b)({type:Number,value:1,json:{write:{target:"layerDefinition.drawingInfo.transparency",overridePolicy:q}}})],J.prototype,"opacity",null),Object(i.a)([Object(w.a)("opacity",["layerDefinition.drawingInfo.transparency","layerDefinition.transparency"])],J.prototype,"readOpacity",null),Object(i.a)([Object(x.a)("opacity")],J.prototype,"writeOpacity",null),Object(i.a)([Object(g.b)({json:{type:_.a,write:{target:"parentLayerId",writerEnsuresNonNull:!0,overridePolicy:q}}})],J.prototype,"parent",void 0),Object(i.a)([Object(x.a)("parent")],J.prototype,"writeParent",null),Object(i.a)([Object(g.b)({type:Boolean,value:!0,json:{read:{source:"disablePopup",reader:(e,t)=>!t.disablePopup},write:{target:"disablePopup",overridePolicy:z,writer(e,t,r){t[r]=!e}}}})],J.prototype,"popupEnabled",void 0),Object(i.a)([Object(g.b)({type:s.a,json:{read:{source:"popupInfo"},write:{target:"popupInfo",overridePolicy:z}}})],J.prototype,"popupTemplate",void 0),Object(i.a)([Object(g.b)({readOnly:!0})],J.prototype,"defaultPopupTemplate",null),Object(i.a)([Object(g.b)({types:a.a,value:null,json:{name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:q},origins:{"web-scene":{types:a.b,name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:q}}}}})],J.prototype,"renderer",null),Object(i.a)([Object(g.b)({types:{key:"type",base:null,typeMap:{"data-layer":A.a,"map-layer":F.a}},cast(e){if(e){if("mapLayerId"in e)return Object(_.d)(F.a,e)
if("dataSource"in e)return Object(_.d)(A.a,e)}return e},json:{name:"layerDefinition.source",write:{overridePolicy:q}}})],J.prototype,"source",null),Object(i.a)([Object(g.b)()],J.prototype,"sourceJSON",void 0),Object(i.a)([Object(g.b)({value:null,json:{type:[_.a],write:{target:"subLayerIds",allowNull:!0,overridePolicy:q}}})],J.prototype,"sublayers",null),Object(i.a)([Object(v.a)("sublayers")],J.prototype,"castSublayers",null),Object(i.a)([Object(x.a)("sublayers")],J.prototype,"writeSublayers",null),Object(i.a)([Object(g.b)({type:String,json:{name:"name",write:{overridePolicy:z}}})],J.prototype,"title",void 0),Object(i.a)([Object(g.b)({type:String})],J.prototype,"typeIdField",void 0),Object(i.a)([Object(w.a)("typeIdField",["layerDefinition.typeIdField"])],J.prototype,"readTypeIdField",null),Object(i.a)([Object(g.b)({type:[I.a],json:{origins:{service:{read:{source:"layerDefinition.types"}}}}})],J.prototype,"types",void 0),Object(i.a)([Object(g.b)({type:String,json:{read:{source:"layerUrl"},write:{target:"layerUrl",overridePolicy:U}}})],J.prototype,"url",null),Object(i.a)([Object(g.b)({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"},write:{target:"defaultVisibility",overridePolicy:q}}})],J.prototype,"visible",null),Object(i.a)([Object(x.a)("visible")],J.prototype,"writeVisible",null),J=n=Object(i.a)([Object(S.a)("esri.layers.support.Sublayer")],J)
const H=J},1676:function(e,t,r){"use strict"
r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return i}))
var n=r(1162)
const i={type:n.a,json:{origins:{service:{read:{source:["tileInfo","minScale","maxScale","minLOD","maxLOD"],reader:s}}}}}
function s(e,t,r,i){if(!e)return null
const{minScale:s,maxScale:a,minLOD:o,maxLOD:l}=t
if(null!=o&&null!=l)return i&&i.ignoreMinMaxLOD?n.a.fromJSON(e):n.a.fromJSON({...e,lods:e.lods.filter(({level:e})=>null!=e&&e>=o&&e<=l)})
if(0!==s&&0!==a){const t=e=>Math.round(1e4*e)/1e4,r=s?t(s):1/0,i=a?t(a):-1/0
return n.a.fromJSON({...e,lods:e.lods.filter(e=>{const n=t(e.scale)
return n<=r&&n>=i})})}return n.a.fromJSON(e)}},1705:function(e,t,r){"use strict"
r.d(t,"a",(function(){return _}))
var n,i=r(856),s=r(660),a=r(862),o=r(1130),l=r(354),c=r(912),u=r(177),d=r(1046),p=r(961),h=r(861),b=r(892),f=r(948),y=r(292),m=r(858),O=r(353),g=(r(77),r(880)),j=r(857),v=r(178)
class w{constructor(){this.location={left:0,top:0,width:0,height:0},this._allAvailability="unknown",this.byteSize=40}getAvailability(e,t){if("unknown"!==this._allAvailability)return this._allAvailability
const r=(e-this.location.top)*this.location.width+(t-this.location.left),n=r%8,i=r>>3,s=this._tileAvailabilityBitSet
return i<0||i>s.length?"unknown":s[i]&1<<n?"available":"unavailable"}_updateFromData(e){const t=this.location.width,r=this.location.height
let n=!0,i=!0
const s=Math.ceil(t*r/8),a=new Uint8Array(s)
let o=0
for(let t=0;t<e.length;t++){const r=t%8
e[t]?(i=!1,a[o]|=1<<r):n=!1,7===r&&++o}i?this._allAvailability="unavailable":n?this._allAvailability="available":(this._allAvailability="unknown",this._tileAvailabilityBitSet=a,this.byteSize+=a.length)}static fromDefinition(e,t){const r=e.service.request||s.default,{row:n,col:i,width:a,height:o}=e,c={query:{f:"json"}}
return t=t?{...c,...t}:c,r(function(e){let t
if("vector-tile"===e.service.type)t=`${e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`
else{const r=e.service.tileServers
t=`${r&&r.length?r[e.row%r.length]:e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}const r=e.service.query
return r&&(t=`${t}?${r}`),t}(e),t).then(e=>e.data).catch(e=>{if(e&&e.details&&422===e.details.httpStatus)return{location:{top:n,left:i,width:a,height:o},valid:!0,data:Object(O.c)(a*o,0)}
throw e}).then(e=>{if(e.location&&(e.location.top!==n||e.location.left!==i||e.location.width!==a||e.location.height!==o))throw new l.a("tilemap:location-mismatch","Tilemap response for different location than requested",{response:e,definition:{top:n,left:i,width:a,height:o}})
return w.fromJSON(e)})}static fromJSON(e){w._validateJSON(e)
const t=new w
return t.location=Object.freeze(Object(v.a)(e.location)),t._updateFromData(e.data),Object.freeze(t)}static _validateJSON(e){if(!e||!e.location)throw new l.a("tilemap:missing-location","Location missing from tilemap response")
if(!1===e.valid)throw new l.a("tilemap:invalid","Tilemap response was marked as invalid")
if(!e.data)throw new l.a("tilemap:missing-data","Data missing from tilemap response")
if(!Array.isArray(e.data))throw new l.a("tilemap:data-mismatch","Data must be an array of numbers")
if(e.data.length!==e.location.width*e.location.height)throw new l.a("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")}}function S(e){return`${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}const x=u.a.getLogger("esri.layers.support.TilemapCache")
let _=n=class extends(Object(c.b)(a.a)){constructor(e){super(e),this._pendingTilemapRequests={},this._availableLevels={},this.levels=5,this.cacheByteSize=2*o.a.MEGABYTES,this.request=s.default,this._prefetchingEnabled=!0}initialize(){this._tilemapCache=new d.a(this.cacheByteSize),this.handles.add([this.watch(["layer.parsedUrl","layer.tileServers?","layer.apiKey?","layer.customParameters?"],()=>this._initializeTilemapDefinition()),Object(b.e)(()=>{var e,t
return null==(e=this.layer)||null==(t=e.tileInfo)?void 0:t.lods},e=>this._initializeAvailableLevels(e),b.d)]),this._initializeTilemapDefinition()}castLevels(e){return e<=2?(x.error("Minimum levels for Tilemap is 3, but got ",e),3):e}get size(){return 1<<this.levels}fetchTilemap(e,t,r,n){if(!this._availableLevels[e])return Promise.reject(new l.a("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`))
const i=this._tmpTilemapDefinition,s=this._tilemapFromCache(e,t,r,i)
if(s)return Promise.resolve(s)
const a=n&&n.signal
return n={...n,signal:null},new Promise((e,t)=>{Object(h.q)(a,()=>t(Object(h.e)()))
const r=S(i)
let s=this._pendingTilemapRequests[r]
if(!s){s=w.fromDefinition(i,n).then(e=>(this._tilemapCache.put(r,e,e.byteSize),e))
const e=()=>delete this._pendingTilemapRequests[r]
this._pendingTilemapRequests[r]=s,s.then(e,e)}s.then(e,t)})}getAvailability(e,t,r){if(!this._availableLevels[e])return"unavailable"
const n=this._tilemapFromCache(e,t,r,this._tmpTilemapDefinition)
return n?n.getAvailability(t,r):"unknown"}fetchAvailability(e,t,r,n){return this._availableLevels[e]?this.fetchTilemap(e,t,r,n).catch(e=>e).then(n=>{if(n instanceof w){const i=n.getAvailability(t,r)
return"unavailable"===i?Promise.reject(new l.a("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:r})):i}if(Object(h.m)(n))throw n
return"unknown"}):Promise.reject(new l.a("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`))}fetchAvailabilityUpsample(e,t,r,n,i){n.level=e,n.row=t,n.col=r
const s=this.layer.tileInfo
s.updateTileInfo(n)
const a=this.fetchAvailability(e,t,r,i).catch(e=>{if(Object(h.m)(e))throw e
if(s.upsampleTile(n))return this.fetchAvailabilityUpsample(n.level,n.row,n.col,n)
throw e})
return this._fetchAvailabilityUpsamplePrefetch(n.id,e,t,r,i,a),a}async _fetchAvailabilityUpsamplePrefetch(e,t,r,i,s,a){if(!this._prefetchingEnabled)return
const o="prefetch-"+e
if(this.handles.has(o))return
const l=new AbortController
a.then(()=>l.abort(),()=>l.abort())
let c=!1
const u={remove(){c||(c=!0,l.abort())}}
if(this.handles.add(u,o),await Object(f.d)(10,l.signal).catch(()=>{}),c||(c=!0,this.handles.remove(o)),Object(h.n)(l))return
const d={id:e,level:t,row:r,col:i},p={...s,signal:l.signal},b=this.layer.tileInfo
for(let e=0;n._prefetches.length<n._maxPrefetch&&b.upsampleTile(d);++e){const e=this.fetchAvailability(d.level,d.row,d.col,p)
n._prefetches.push(e)
const t=()=>{n._prefetches.removeUnordered(e)}
e.then(t,t)}}_initializeTilemapDefinition(){var e
if(!this.layer.parsedUrl)return
const{parsedUrl:t,apiKey:r,customParameters:n}=this.layer
this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:t.path,query:Object(y.G)({...t.query,...n,token:null!=r?r:null==(e=t.query)?void 0:e.token}),tileServers:this.layer.tileServers,request:this.request,type:this.layer.type},width:this.size,height:this.size,level:0,row:0,col:0}}_tilemapFromCache(e,t,r,n){n.level=e,n.row=t-t%this.size,n.col=r-r%this.size
const i=S(n)
return this._tilemapCache.get(i)}_initializeAvailableLevels(e){this._availableLevels={},e&&e.forEach(e=>this._availableLevels[e.level]=!0)}get test(){const e=this
return{get prefetchingEnabled(){return e._prefetchingEnabled},set prefetchingEnabled(t){e._prefetchingEnabled=t},hasTilemap:(t,r,n)=>!!e._tilemapFromCache(t,r,n,e._tmpTilemapDefinition)}}}
_._maxPrefetch=4,_._prefetches=new p.a({initialSize:n._maxPrefetch}),Object(i.a)([Object(m.b)({constructOnly:!0,type:Number})],_.prototype,"levels",void 0),Object(i.a)([Object(g.a)("levels")],_.prototype,"castLevels",null),Object(i.a)([Object(m.b)({readOnly:!0,type:Number})],_.prototype,"size",null),Object(i.a)([Object(m.b)({constructOnly:!0,type:Number})],_.prototype,"cacheByteSize",void 0),Object(i.a)([Object(m.b)({constructOnly:!0})],_.prototype,"layer",void 0),Object(i.a)([Object(m.b)({constructOnly:!0})],_.prototype,"request",void 0),_=n=Object(i.a)([Object(j.a)("esri.layers.support.TilemapCache")],_)},1738:function(e,t,r){"use strict"
r.d(t,"a",(function(){return b}))
var n=r(856),i=r(660),s=r(861),a=r(292),o=r(1399),l=r(858),c=(r(353),r(77),r(859),r(865)),u=r(857),d=r(658),p=r(659),h=r(933)
const b=e=>{let t=class extends e{constructor(){super(...arguments),this.capabilities=void 0,this.copyright=null,this.fullExtent=null,this.legendEnabled=!0,this.spatialReference=null,this.version=void 0}readCapabilities(e,t){var r,n
const i=t.capabilities&&t.capabilities.split(",").map(e=>e.toLowerCase().trim())
if(!i)return{operations:{supportsQuery:!1,supportsExportMap:!1,supportsExportTiles:!1,supportsTileMap:!1},exportMap:null,exportTiles:null}
const s=this.type,a=i.includes("query"),l=i.includes("map"),c=!!t.exportTilesAllowed,u=i.includes("tilemap"),d="tile"!==s&&!!t.supportsDynamicLayers,p="tile"!==s&&(!t.tileInfo||d),h="tile"!==s&&(!t.tileInfo||d),b="tile"!==s,f=t.cimVersion&&o.a.parse(t.cimVersion),y=null!=(r=null==f?void 0:f.since(1,4))&&r,m=null!=(n=null==f?void 0:f.since(2,0))&&n
return{operations:{supportsQuery:a,supportsExportMap:l,supportsExportTiles:c,supportsTileMap:u},exportMap:l?{supportsArcadeExpressionForLabeling:y,supportsSublayersChanges:b,supportsDynamicLayers:d,supportsSublayerVisibility:p,supportsSublayerDefinitionExpression:h,supportsCIMSymbols:m}:null,exportTiles:c?{maxExportTilesCount:+t.maxExportTilesCount}:null}}readVersion(e,t){let r=t.currentVersion
return r||(r=t.hasOwnProperty("capabilities")||t.hasOwnProperty("tables")?10:t.hasOwnProperty("supportedImageFormatTypes")?9.31:9.3),r}async fetchSublayerInfo(e,t){return await this.fetchAllLayersAndTables(t),this._allLayersAndTablesMap.get(e)}async fetchAllLayersAndTables(e){await this.load(e),this._allLayersAndTablesPromise||(this._allLayersAndTablesPromise=Object(i.default)(Object(a.M)(this.url).path+"/layers",{responseType:"json",query:{f:"json",...this.customParameters,token:this.apiKey}}).then(e=>{this._allLayersAndTablesMap=new Map
for(const t of e.data.layers)this._allLayersAndTablesMap.set(t.id,t)
return{result:e.data}},e=>({error:e})))
const t=await this._allLayersAndTablesPromise
if(Object(s.v)(e),"result"in t)return t.result
throw t.error}}
return Object(n.a)([Object(l.b)({readOnly:!0})],t.prototype,"capabilities",void 0),Object(n.a)([Object(c.a)("service","capabilities",["capabilities","exportTilesAllowed","maxExportTilesCount","supportsDynamicLayers","tileInfo"])],t.prototype,"readCapabilities",null),Object(n.a)([Object(l.b)({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),Object(n.a)([Object(l.b)({type:d.default})],t.prototype,"fullExtent",void 0),Object(n.a)([Object(l.b)(h.c)],t.prototype,"id",void 0),Object(n.a)([Object(l.b)({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],t.prototype,"legendEnabled",void 0),Object(n.a)([Object(l.b)(h.j)],t.prototype,"popupEnabled",void 0),Object(n.a)([Object(l.b)({type:p.default})],t.prototype,"spatialReference",void 0),Object(n.a)([Object(l.b)({readOnly:!0})],t.prototype,"version",void 0),Object(n.a)([Object(c.a)("version",["currentVersion","capabilities","tables","supportedImageFormatTypes"])],t.prototype,"readVersion",null),t=Object(n.a)([Object(u.a)("esri.layers.mixins.ArcGISMapService")],t),t}},1739:function(e,t,r){"use strict"
r.d(t,"a",(function(){return y}))
var n=r(856),i=r(878),s=r(1184),a=r(354),o=r(177),l=r(858),c=(r(353),r(77),r(920)),u=(r(859),r(857)),d=r(913),p=r(1598),h=r(1416)
const b=o.a.getLogger("esri.layers.TileLayer"),f=i.a.ofType(p.a),y=e=>{let t=class extends e{constructor(...e){super(...e),this.allSublayers=new s.a({getCollections:()=>[this.sublayers],getChildrenFunction:e=>e.sublayers}),this.sublayersSourceJSON={[d.a.SERVICE]:{},[d.a.PORTAL_ITEM]:{},[d.a.WEB_SCENE]:{},[d.a.WEB_MAP]:{}},this.handles.add(this.watch("sublayers",(e,t)=>this._handleSublayersChange(e,t),!0))}readSublayers(e,t){if(!t||!e)return
const{sublayersSourceJSON:r}=this,n=Object(d.e)(t.origin)
if(n<d.a.SERVICE)return
if(r[n]={context:t,visibleLayers:e.visibleLayers||r[n].visibleLayers,layers:e.layers||r[n].layers},n>d.a.SERVICE)return
this._set("serviceSublayers",this.createSublayersForOrigin("service").sublayers)
const{sublayers:i,origin:s}=this.createSublayersForOrigin("web-document"),a=Object(c.a)(this)
a.setDefaultOrigin(s),this._set("sublayers",new f(i)),a.setDefaultOrigin("user")}findSublayerById(e){return this.allSublayers.find(t=>t.id===e)}createServiceSublayers(){return this.createSublayersForOrigin("service").sublayers}createSublayersForOrigin(e){const t=Object(d.e)("web-document"===e?"web-map":e)
let r=d.a.SERVICE,n=this.sublayersSourceJSON[d.a.SERVICE].layers,i=this.sublayersSourceJSON[d.a.SERVICE].context,s=null
const a=[d.a.PORTAL_ITEM,d.a.WEB_SCENE,d.a.WEB_MAP].filter(e=>e<=t)
for(const e of a){const t=this.sublayersSourceJSON[e]
Object(h.b)(t.layers)&&(r=e,n=t.layers,i=t.context,t.visibleLayers&&(s={visibleLayers:t.visibleLayers,context:t.context}))}const o=[d.a.PORTAL_ITEM,d.a.WEB_SCENE,d.a.WEB_MAP].filter(e=>e>r&&e<=t)
let l=null
for(const e of o){const{layers:t,visibleLayers:r,context:n}=this.sublayersSourceJSON[e]
t&&(l={layers:t,context:n}),r&&(s={visibleLayers:r,context:n})}const c=function(e,t){const r=[],n={}
return e?(e.forEach(e=>{const i=new p.a
if(i.read(e,t),n[i.id]=i,null!=e.parentLayerId&&-1!==e.parentLayerId){const t=n[e.parentLayerId]
t.sublayers||(t.sublayers=[]),t.sublayers.unshift(i)}else r.unshift(i)}),r):r}(n,i),u=new Map,b=new Set
if(l)for(const e of l.layers)u.set(e.id,e)
if(s)for(const e of s.visibleLayers)b.add(e)
return function e(t,r){t&&t.forEach(t=>{r(t),t.sublayers&&t.sublayers.length&&e(t.sublayers,r)})}(c,e=>{l&&e.read(u.get(e.id),l.context),s&&e.read({defaultVisibility:b.has(e.id)},s.context)}),{origin:Object(d.c)(r),sublayers:new f({items:c})}}read(e,t){super.read(e,t),this.readSublayers(e,t)}_handleSublayersChange(e,t){t&&(t.forEach(e=>{e.parent=null,e.layer=null}),this.handles.remove("sublayers-owner")),e&&(e.forEach(e=>{e.parent=this,e.layer=this}),this.handles.add([e.on("after-add",({item:e})=>{e.parent=this,e.layer=this}),e.on("after-remove",({item:e})=>{e.parent=null,e.layer=null})],"sublayers-owner"),"tile"===this.type&&this.handles.add(e.on("before-changes",e=>{b.error(new a.a("tilelayer:sublayers-non-modifiable","ISublayer can't be added, moved, or removed from the layer's sublayers",{layer:this})),e.preventDefault()}),"sublayers-owner"))}}
return Object(n.a)([Object(l.b)({readOnly:!0})],t.prototype,"allSublayers",void 0),Object(n.a)([Object(l.b)({readOnly:!0,type:i.a.ofType(p.a)})],t.prototype,"serviceSublayers",void 0),Object(n.a)([Object(l.b)({value:null,type:f,json:{read:!1,write:{allowNull:!0,ignoreOrigin:!0}}})],t.prototype,"sublayers",void 0),Object(n.a)([Object(l.b)({readOnly:!0})],t.prototype,"sublayersSourceJSON",void 0),t=Object(n.a)([Object(u.a)("esri.layers.mixins.SublayersOwner")],t),t}},1800:function(e,t,r){"use strict"
r.d(t,"a",(function(){return u}))
var n=r(856),i=(r(870),r(858)),s=(r(353),r(77),r(859),r(865)),a=r(857),o=r(1676),l=r(1705),c=r(659)
const u=e=>{let t=class extends e{constructor(){super(...arguments),this.copyright=null,this.minScale=0,this.maxScale=0,this.spatialReference=null,this.tileInfo=null,this.tilemapCache=null}readMinScale(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}readMaxScale(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}get supportsBlankTile(){return this.version>=10.2}readTilemapCache(e,t){return t.capabilities&&t.capabilities.indexOf("Tilemap")>-1?new l.a({layer:this}):null}}
return Object(n.a)([Object(i.b)({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),Object(n.a)([Object(i.b)()],t.prototype,"minScale",void 0),Object(n.a)([Object(s.a)("service","minScale")],t.prototype,"readMinScale",null),Object(n.a)([Object(i.b)()],t.prototype,"maxScale",void 0),Object(n.a)([Object(s.a)("service","maxScale")],t.prototype,"readMaxScale",null),Object(n.a)([Object(i.b)({type:c.default})],t.prototype,"spatialReference",void 0),Object(n.a)([Object(i.b)({readOnly:!0})],t.prototype,"supportsBlankTile",null),Object(n.a)([Object(i.b)(o.b)],t.prototype,"tileInfo",void 0),Object(n.a)([Object(i.b)()],t.prototype,"tilemapCache",void 0),Object(n.a)([Object(s.a)("service","tilemapCache",["capabilities"])],t.prototype,"readTilemapCache",null),Object(n.a)([Object(i.b)()],t.prototype,"version",void 0),t=Object(n.a)([Object(a.a)("esri.layers.mixins.ArcGISCachedService")],t),t}},661:function(e,t,r){"use strict"
r.r(t),r.d(t,"default",(function(){return x}))
var n,i=r(856),s=r(353),a=r(178),o=r(20),l=r(858),c=(r(859),r(857)),u=r(864),d=r(658),p=r(875),h=r(866),b=r(659),f=r(968),y=r(928),m=r(916),O=r(929),g=r(904),j=r(662),v=r(909)
function w(e){return!Array.isArray(e[0])}let S=n=class extends p.a{constructor(...e){super(...e),this.rings=[],this.type="polygon"}static fromExtent(e){const t=e.clone().normalize(),r=e.spatialReference
let i=!1,s=!1
for(const e of t)e.hasZ&&(i=!0),e.hasM&&(s=!0)
const a={rings:t.map((function(e){const t=[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]
if(i&&e.hasZ){const r=e.zmin+.5*(e.zmax-e.zmin)
for(let e=0;e<t.length;e++)t[e].push(r)}if(s&&e.hasM){const r=e.mmin+.5*(e.mmax-e.mmin)
for(let e=0;e<t.length;e++)t[e].push(r)}return t})),spatialReference:r}
return i&&(a.hasZ=!0),s&&(a.hasM=!0),new n(a)}normalizeCtorArgs(e,t){let r,n,i=null,s=null
return e&&!Array.isArray(e)?(i=e.rings?e.rings:null,t||(e.spatialReference?t=e.spatialReference:e.rings||(t=e)),r=e.hasZ,n=e.hasM):i=e,i=i||[],t=t||b.default.WGS84,i.length&&i[0]&&null!=i[0][0]&&"number"==typeof i[0][0]&&(i=[i]),s=i[0]&&i[0][0],s&&(void 0===r&&void 0===n?(r=s.length>2,n=s.length>3):void 0===r?r=n?s.length>3:s.length>2:void 0===n&&(n=r?s.length>3:s.length>2)),{rings:i,spatialReference:t,hasZ:r,hasM:n}}get cache(){return this.commitProperty("rings"),this.commitProperty("hasZ"),this.commitProperty("hasM"),this.commitProperty("spatialReference"),{}}get centroid(){const e=Object(f.b)(this)
if(!e||isNaN(e[0])||isNaN(e[1])||this.hasZ&&isNaN(e[2]))return null
const t=new h.a
return t.x=e[0],t.y=e[1],t.spatialReference=this.spatialReference,this.hasZ&&(t.z=e[2]),t}get extent(){const{spatialReference:e}=this,t=Object(O.b)(this)
if(!t)return null
const r=new d.default(t)
return r.spatialReference=e,r}get isSelfIntersecting(){return Object(g.d)(this.rings)}writeRings(e,t){t.rings=Object(a.a)(this.rings)}addRing(e){if(!e)return
const t=this.rings,r=t.length
if(w(e)){const n=[]
for(let t=0,r=e.length;t<r;t++)n[t]=e[t].toArray()
t[r]=n}else t[r]=e.concat()
return this.notifyChange("rings"),this}clone(){const e=new n
return e.spatialReference=this.spatialReference,e.rings=Object(a.a)(this.rings),e.hasZ=this.hasZ,e.hasM=this.hasM,e}equals(e){if(this===e)return!0
if(Object(o.j)(e))return!1
const t=this.spatialReference,r=e.spatialReference
if(Object(o.k)(t)!==Object(o.k)(r))return!1
if(Object(o.k)(t)&&Object(o.k)(r)&&!t.equals(r))return!1
if(this.rings.length!==e.rings.length)return!1
const n=([e,t,r,n],[i,s,a,o])=>e===i&&t===s&&(null==r&&null==a||r===a)&&(null==n&&null==o||n===o)
for(let t=0;t<this.rings.length;t++){const r=this.rings[t],i=e.rings[t]
if(!Object(s.e)(r,i,n))return!1}return!0}contains(e){if(!e)return!1
const t=Object(j.project)(e,this.spatialReference)
return Object(y.g)(this,Object(o.k)(t)?t:e)}isClockwise(e){let t
return t=w(e)?e.map(e=>this.hasZ?this.hasM?[e.x,e.y,e.z,e.m]:[e.x,e.y,e.z]:[e.x,e.y]):e,Object(m.g)(t,this.hasM,this.hasZ)}getPoint(e,t){if(!this._validateInputs(e,t))return null
const r=this.rings[e][t],n=this.hasZ,i=this.hasM
return n&&!i?new h.a(r[0],r[1],r[2],void 0,this.spatialReference):i&&!n?new h.a(r[0],r[1],void 0,r[2],this.spatialReference):n&&i?new h.a(r[0],r[1],r[2],r[3],this.spatialReference):new h.a(r[0],r[1],this.spatialReference)}insertPoint(e,t,r){return this._validateInputs(e,t,!0)?(Object(v.a)(this,r),Array.isArray(r)||(r=r.toArray()),this.rings[e].splice(t,0,r),this.notifyChange("rings"),this):this}removePoint(e,t){if(!this._validateInputs(e,t))return null
const r=new h.a(this.rings[e].splice(t,1)[0],this.spatialReference)
return this.notifyChange("rings"),r}removeRing(e){if(!this._validateInputs(e,null))return null
const t=this.rings.splice(e,1)[0],r=this.spatialReference,n=t.map(e=>new h.a(e,r))
return this.notifyChange("rings"),n}setPoint(e,t,r){return this._validateInputs(e,t)?(Object(v.a)(this,r),Array.isArray(r)||(r=r.toArray()),this.rings[e][t]=r,this.notifyChange("rings"),this):this}_validateInputs(e,t,r=!1){if(null==e||e<0||e>=this.rings.length)return!1
if(null!=t){const n=this.rings[e]
if(r&&(t<0||t>n.length))return!1
if(!r&&(t<0||t>=n.length))return!1}return!0}toJSON(e){return this.write({},e)}}
Object(i.a)([Object(l.b)({readOnly:!0})],S.prototype,"cache",null),Object(i.a)([Object(l.b)({readOnly:!0})],S.prototype,"centroid",null),Object(i.a)([Object(l.b)({readOnly:!0})],S.prototype,"extent",null),Object(i.a)([Object(l.b)({readOnly:!0})],S.prototype,"isSelfIntersecting",null),Object(i.a)([Object(l.b)({type:[[[Number]]],json:{write:{isRequired:!0}}})],S.prototype,"rings",void 0),Object(i.a)([Object(u.a)("rings")],S.prototype,"writeRings",null),S=n=Object(i.a)([Object(c.a)("esri.geometry.Polygon")],S),S.prototype.toJSON.isDefaultToJSON=!0
const x=S},663:function(e,t,r){"use strict"
r.r(t),r.d(t,"default",(function(){return y}))
var n=r(856),i=r(870),s=r(960),a=r(906),o=r(954),l=r(860),c=r(20),u=r(1049),d=r(858),p=(r(353),r(77),r(859),r(857)),h=r(869)
function b(e){if(!Object(c.k)(e))return null
const t={}
for(const r in e){const n=e[r]
n&&(t[r]=n.toJSON())}return 0!==Object.keys(t).length?t:null}let f=class extends(Object(o.a)(l.a)){constructor(...e){super(...e),this.isAggregate=!1,this.layer=null,this.popupTemplate=null,this.sourceLayer=null,Object.defineProperty(this,"uid",{value:Object(u.b)(),configurable:!0})}normalizeCtorArgs(e,t,r,n){return e&&!e.declaredClass?e:{geometry:e,symbol:t,attributes:r,popupTemplate:n}}set aggregateGeometries(e){const t=this._get("aggregateGeometries")
JSON.stringify(t)!==JSON.stringify(e)&&this._set("aggregateGeometries",e)}set attributes(e){const t=this._get("attributes")
t!==e&&(this._set("attributes",e),this._notifyLayer("attributes",t,e))}set geometry(e){const t=this._get("geometry")
t!==e&&(this._set("geometry",e),this._notifyLayer("geometry",t,e))}set symbol(e){const t=this._get("symbol")
t!==e&&(this._set("symbol",e),this._notifyLayer("symbol",t,e))}set visible(e){const t=this._get("visible")
t!==e&&(this._set("visible",e),this._notifyLayer("visible",t,e))}getEffectivePopupTemplate(e=!1){if(this.popupTemplate)return this.popupTemplate
for(const t of[this.sourceLayer,this.layer])if(t){if("popupTemplate"in t&&t.popupTemplate)return t.popupTemplate
if(e&&"defaultPopupTemplate"in t&&Object(c.k)(t.defaultPopupTemplate))return t.defaultPopupTemplate}return null}getAttribute(e){return this.attributes&&this.attributes[e]}setAttribute(e,t){if(this.attributes){const r=this.getAttribute(e)
this.attributes[e]=t,this._notifyLayer("attributes",r,t,e)}else this.attributes={[e]:t},this._notifyLayer("attributes",void 0,t,e)}getObjectId(){return this.sourceLayer&&"objectIdField"in this.sourceLayer&&this.sourceLayer.objectIdField?this.getAttribute(this.sourceLayer.objectIdField):null}toJSON(){return{aggregateGeometries:b(this.aggregateGeometries),geometry:Object(c.k)(this.geometry)?this.geometry.toJSON():null,symbol:Object(c.k)(this.symbol)?this.symbol.toJSON():null,attributes:{...this.attributes},popupTemplate:this.popupTemplate&&this.popupTemplate.toJSON()}}notifyGeometryChanged(){this._notifyLayer("geometry",this.geometry,this.geometry)}notifyMeshTransformChanged(){Object(c.k)(this.geometry)&&"mesh"===this.geometry.type&&this._notifyLayer("transform",this.geometry.transform,this.geometry.transform)}_notifyLayer(e,t,r,n){if(!this.layer||!("graphicChanged"in this.layer))return
const i={graphic:this,property:e,oldValue:t,newValue:r}
"attributes"===e&&(i.attributeName=n),this.layer.graphicChanged(i)}}
Object(n.a)([Object(d.b)({value:null,json:{read:function(e){if(!e)return null
const t={}
for(const r in e){const n=Object(h.a)(e[r])
n&&(t[r]=n)}return 0!==Object.keys(t).length?t:null}}})],f.prototype,"aggregateGeometries",null),Object(n.a)([Object(d.b)({value:null})],f.prototype,"attributes",null),Object(n.a)([Object(d.b)({value:null,types:i.c,json:{read:h.a}})],f.prototype,"geometry",null),Object(n.a)([Object(d.b)({type:Boolean})],f.prototype,"isAggregate",void 0),Object(n.a)([Object(d.b)({clonable:"reference"})],f.prototype,"layer",void 0),Object(n.a)([Object(d.b)({type:s.a})],f.prototype,"popupTemplate",void 0),Object(n.a)([Object(d.b)({clonable:"reference"})],f.prototype,"sourceLayer",void 0),Object(n.a)([Object(d.b)({value:null,types:a.e})],f.prototype,"symbol",null),Object(n.a)([Object(d.b)({type:Boolean,value:!0})],f.prototype,"visible",null),f=Object(n.a)([Object(p.a)("esri.Graphic")],f),(f||(f={})).generateUID=u.b
const y=f},664:function(e,t,r){"use strict"
r.r(t),r.d(t,"default",(function(){return j}))
var n=r(856),i=r(78),s=(r(870),r(660)),a=r(354),o=r(890),l=r(1010),c=r(903),u=r(177),d=r(861),p=r(292),h=r(858),b=(r(353),r(77),r(859),r(857)),f=r(658),y=r(659)
let m=0
const O=u.a.getLogger("esri.layers.Layer")
let g=class extends(o.a.EventedMixin(Object(l.b)(c.a))){constructor(){super(...arguments),this.attributionDataUrl=null,this.fullExtent=new f.default(-180,-90,180,90,y.default.WGS84),this.id=Date.now().toString(16)+"-layer-"+m++,this.legendEnabled=!0,this.listMode="show",this.opacity=1,this.parent=null,this.popupEnabled=!0,this.attributionVisible=!0,this.spatialReference=y.default.WGS84,this.title=null,this.type=null,this.url=null,this.visible=!0}static async fromArcGISServerUrl(e){const t="string"==typeof e?{url:e}:e,n=await r.e(294).then(r.bind(null,1188))
try{return await n.fromUrl(t)}catch(e){throw O.error("#fromArcGISServerUrl({ url: '"+t.url+"'})","Failed to create layer from arcgis server url",e),e}}static async fromPortalItem(e){const t="portalItem"in e?e:{portalItem:e},n=await r.e(191).then(r.bind(null,1164))
try{return await n.fromItem(t)}catch(e){const r=t&&t.portalItem,n=r&&r.id||"unset",s=r&&r.portal&&r.portal.url||i.default.portalUrl
throw O.error("#fromPortalItem()","Failed to create layer from portal item (portal: '"+s+"', id: '"+n+"')",e),e}}initialize(){this.when().catch(e=>{var t,r
Object(d.m)(e)||u.a.getLogger(this.declaredClass).error("#load()",`Failed to load layer (title: '${null!=(t=this.title)?t:"no title"}', id: '${null!=(r=this.id)?r:"no id"}')`,{error:e})})}destroy(){if(this.parent){const e=this,t=this.parent
"layers"in t&&t.layers.includes(e)?t.layers.remove(e):"tables"in t&&t.tables.includes(e)?t.tables.remove(e):"baseLayers"in t&&t.baseLayers.includes(e)?t.baseLayers.remove(e):"baseLayers"in t&&t.referenceLayers.includes(e)&&t.referenceLayers.remove(e)}}get hasAttributionData(){return null!=this.attributionDataUrl}get parsedUrl(){const e=this.url
return e?Object(p.M)(e):null}async fetchAttributionData(){const e=this.attributionDataUrl
if(this.hasAttributionData&&e)return(await Object(s.default)(e,{query:{f:"json"},responseType:"json"})).data
throw new a.a("layer:no-attribution-data","Layer does not have attribution data")}}
Object(n.a)([Object(h.b)({type:String})],g.prototype,"attributionDataUrl",void 0),Object(n.a)([Object(h.b)({type:f.default})],g.prototype,"fullExtent",void 0),Object(n.a)([Object(h.b)({readOnly:!0})],g.prototype,"hasAttributionData",null),Object(n.a)([Object(h.b)({type:String,clonable:!1})],g.prototype,"id",void 0),Object(n.a)([Object(h.b)({type:Boolean,nonNullable:!0})],g.prototype,"legendEnabled",void 0),Object(n.a)([Object(h.b)({type:["show","hide","hide-children"]})],g.prototype,"listMode",void 0),Object(n.a)([Object(h.b)({type:Number,range:{min:0,max:1},nonNullable:!0})],g.prototype,"opacity",void 0),Object(n.a)([Object(h.b)({clonable:!1})],g.prototype,"parent",void 0),Object(n.a)([Object(h.b)({readOnly:!0})],g.prototype,"parsedUrl",null),Object(n.a)([Object(h.b)({type:Boolean})],g.prototype,"popupEnabled",void 0),Object(n.a)([Object(h.b)({type:Boolean})],g.prototype,"attributionVisible",void 0),Object(n.a)([Object(h.b)({type:y.default})],g.prototype,"spatialReference",void 0),Object(n.a)([Object(h.b)({type:String})],g.prototype,"title",void 0),Object(n.a)([Object(h.b)({type:String,readOnly:!0,json:{read:!1}})],g.prototype,"type",void 0),Object(n.a)([Object(h.b)()],g.prototype,"url",void 0),Object(n.a)([Object(h.b)({type:Boolean,nonNullable:!0})],g.prototype,"visible",void 0),g=Object(n.a)([Object(b.a)("esri.layers.Layer")],g)
const j=g},665:function(e,t,r){"use strict"
r.r(t),r.d(t,"default",(function(){return _}))
var n,i=r(856),s=r(906),a=r(863),o=r(860),l=r(178),c=r(876),u=r(858),d=(r(859),r(865)),p=r(857),h=r(864),b=(r(353),r(77),r(1057))
let f=n=class extends o.a{constructor(){super(...arguments),this.expression=null,this.title=null,this.value=null}readExpression(e,t){return t.value?Object(b.a)(t.value):e}writeExpression(e,t,r){null!=this.value&&(e=Object(b.a)(this.value)),null!=e&&(t[r]=e)}clone(){return new n({expression:this.expression,title:this.title,value:this.value})}}
Object(i.a)([Object(u.b)({type:String,json:{write:{writerEnsuresNonNull:!0}}})],f.prototype,"expression",void 0),Object(i.a)([Object(d.a)("expression",["expression","value"])],f.prototype,"readExpression",null),Object(i.a)([Object(h.a)("expression")],f.prototype,"writeExpression",null),Object(i.a)([Object(u.b)({type:String,json:{write:!0,origins:{"web-scene":{write:!1}}}})],f.prototype,"title",void 0),Object(i.a)([Object(u.b)({json:{read:!1,write:!1}})],f.prototype,"value",void 0),f=n=Object(i.a)([Object(p.a)("esri.layers.support.LabelExpressionInfo")],f)
const y=f
var m,O=r(1094),g=r(1101)
const j=new a.a({esriServerPointLabelPlacementAboveCenter:"above-center",esriServerPointLabelPlacementAboveLeft:"above-left",esriServerPointLabelPlacementAboveRight:"above-right",esriServerPointLabelPlacementBelowCenter:"below-center",esriServerPointLabelPlacementBelowLeft:"below-left",esriServerPointLabelPlacementBelowRight:"below-right",esriServerPointLabelPlacementCenterCenter:"center-center",esriServerPointLabelPlacementCenterLeft:"center-left",esriServerPointLabelPlacementCenterRight:"center-right",esriServerLinePlacementAboveAfter:"above-after",esriServerLinePlacementAboveAlong:"above-along",esriServerLinePlacementAboveBefore:"above-before",esriServerLinePlacementAboveStart:"above-start",esriServerLinePlacementAboveEnd:"above-end",esriServerLinePlacementBelowAfter:"below-after",esriServerLinePlacementBelowAlong:"below-along",esriServerLinePlacementBelowBefore:"below-before",esriServerLinePlacementBelowStart:"below-start",esriServerLinePlacementBelowEnd:"below-end",esriServerLinePlacementCenterAfter:"center-after",esriServerLinePlacementCenterAlong:"center-along",esriServerLinePlacementCenterBefore:"center-before",esriServerLinePlacementCenterStart:"center-start",esriServerLinePlacementCenterEnd:"center-end",esriServerPolygonPlacementAlwaysHorizontal:"always-horizontal"},{ignoreUnknown:!0})
function v(e){return!e||"service"!==e.origin&&!w(e.layer)}function w(e){return"map-image"===(null==e?void 0:e.type)}function S(e){var t,r
return!!w(e)&&!(null==(t=e.capabilities)||null==(r=t.exportMap)||!r.supportsArcadeExpressionForLabeling)}let x=m=class extends o.a{constructor(e){super(e),this.type="label",this.name=null,this.allowOverrun=!1,this.deconflictionStrategy="static",this.labelExpression=null,this.labelExpressionInfo=null,this.labelPlacement=null,this.labelPosition="curved",this.maxScale=0,this.minScale=0,this.repeatLabel=!0,this.repeatLabelDistance=null,this.symbol=O.d,this.useCodedValues=void 0,this.where=null}static evaluateWhere(e,t){const r=function(e,t,r){switch(t){case"=":return e==r
case"<>":return e!=r
case">":return e>r
case">=":return e>=r
case"<":return e<r
case"<=":return e<=r}return!1}
try{if(null==e)return!0
const n=e.split(" ")
if(3===n.length)return r(t[n[0]],n[1],n[2])
if(7===n.length){const e=r(t[n[0]],n[1],n[2]),i=n[3],s=r(t[n[4]],n[5],n[6])
switch(i){case"AND":return e&&s
case"OR":return e||s}}return!1}catch(t){console.log("Error.: can't parse = "+e)}}readLabelExpression(e,t){const r=t.labelExpressionInfo
if(!r||!r.value&&!r.expression)return e}writeLabelExpression(e,t,r){if(this.labelExpressionInfo)if(null!=this.labelExpressionInfo.value)e=Object(b.f)(this.labelExpressionInfo.value)
else if(null!=this.labelExpressionInfo.expression){const t=Object(b.e)(this.labelExpressionInfo.expression)
t&&(e="["+t+"]")}null!=e&&(t[r]=e)}writeLabelExpressionInfo(e,t,r,n){if(null==e&&null!=this.labelExpression&&v(n))e=new y({expression:this.getLabelExpressionArcade()})
else if(!e)return
const i=e.toJSON(n)
i.expression&&(t[r]=i)}writeMaxScale(e,t){(e||this.minScale)&&(t.maxScale=e)}writeMinScale(e,t){(e||this.maxScale)&&(t.minScale=e)}getLabelExpression(){return Object(b.b)(this)}getLabelExpressionArcade(){return Object(b.c)(this)}getLabelExpressionSingleField(){return Object(b.d)(this)}hash(){return JSON.stringify(this)}clone(){return new m({allowOverrun:this.allowOverrun,deconflictionStrategy:this.deconflictionStrategy,labelExpression:this.labelExpression,labelExpressionInfo:Object(l.a)(this.labelExpressionInfo),labelPosition:this.labelPosition,labelPlacement:this.labelPlacement,maxScale:this.maxScale,minScale:this.minScale,name:this.name,repeatLabel:this.repeatLabel,repeatLabelDistance:this.repeatLabelDistance,symbol:Object(l.a)(this.symbol),where:this.where,useCodedValues:this.useCodedValues})}}
Object(i.a)([Object(u.b)({type:String,json:{write:!0}})],x.prototype,"name",void 0),Object(i.a)([Object(u.b)({type:Boolean,json:{write:!0,default:!1,origins:{"web-scene":{write:!1}}}})],x.prototype,"allowOverrun",void 0),Object(i.a)([Object(u.b)({type:String,json:{write:!0,default:"static",origins:{"web-scene":{write:!1}}}})],x.prototype,"deconflictionStrategy",void 0),Object(i.a)([Object(u.b)({type:String,json:{write:{overridePolicy(e,t,r){return this.labelExpressionInfo&&"service"===(null==r?void 0:r.origin)&&S(r.layer)?{enabled:!1}:{allowNull:!0}}}}})],x.prototype,"labelExpression",void 0),Object(i.a)([Object(d.a)("labelExpression")],x.prototype,"readLabelExpression",null),Object(i.a)([Object(h.a)("labelExpression")],x.prototype,"writeLabelExpression",null),Object(i.a)([Object(u.b)({type:y,json:{write:{overridePolicy:(e,t,r)=>function(e){return v(e)||S(e.layer)}(r)?{allowNull:!0}:{enabled:!1}}}})],x.prototype,"labelExpressionInfo",void 0),Object(i.a)([Object(h.a)("labelExpressionInfo")],x.prototype,"writeLabelExpressionInfo",null),Object(i.a)([Object(u.b)({type:j.apiValues,json:{type:j.jsonValues,read:j.read,write:j.write}})],x.prototype,"labelPlacement",void 0),Object(i.a)([Object(u.b)({type:["curved","parallel"],json:{write:!0,origins:{"web-map":{write:!1},"web-scene":{write:!1},"portal-item":{write:!1}}}})],x.prototype,"labelPosition",void 0),Object(i.a)([Object(u.b)({type:Number})],x.prototype,"maxScale",void 0),Object(i.a)([Object(h.a)("maxScale")],x.prototype,"writeMaxScale",null),Object(i.a)([Object(u.b)({type:Number})],x.prototype,"minScale",void 0),Object(i.a)([Object(h.a)("minScale")],x.prototype,"writeMinScale",null),Object(i.a)([Object(u.b)({type:Boolean,json:{write:!0,origins:{"web-scene":{write:!1},"portal-item":{write:!1}}}})],x.prototype,"repeatLabel",void 0),Object(i.a)([Object(u.b)({type:Number,cast:c.k,json:{write:!0,origins:{"web-scene":{write:!1}}}})],x.prototype,"repeatLabelDistance",void 0),Object(i.a)([Object(u.b)({types:s.g,json:{origins:{"web-scene":{types:s.h,write:g.c,default:null}},write:g.c,default:null}})],x.prototype,"symbol",void 0),Object(i.a)([Object(u.b)({type:Boolean,json:{write:!0}})],x.prototype,"useCodedValues",void 0),Object(i.a)([Object(u.b)({type:String,json:{write:!0}})],x.prototype,"where",void 0),x=m=Object(i.a)([Object(p.a)("esri.layers.support.LabelClass")],x)
const _=x},666:function(e,t,r){"use strict"
r.r(t),r.d(t,"getTimeExtentFromLayers",(function(){return u})),r.d(t,"toLocalTimeExtent",(function(){return p})),r.d(t,"toUTCTimeExtent",(function(){return d}))
var n=r(894),i=r(20),s=r(861),a=r(934)
function o(e){return"feature"===(null==e?void 0:e.type)}function l(e){return"map-image"===(null==e?void 0:e.type)}function c(e){return void 0!==e.timeInfo}async function u(e,t){if(0===e.length)return n.a.allTime
const r=e.filter(c)
await Promise.all(r.map(e=>e.load({signal:t})))
const a=[],u=[]
for(const e of r)(o(e)||l(e))&&e.timeInfo.hasLiveData?a.push(e):u.push(e)
const d=e=>Object(i.j)(e)||e.isAllTime,p=u.map(e=>e.timeInfo.fullTimeExtent)
if(p.some(d))return n.a.allTime
const h=a.map(async e=>{const{timeExtent:r}=await e.fetchRecomputedExtents({signal:t})
return r||Object(i.t)(e.timeInfo.fullTimeExtent)}),b=(await Object(s.j)(h)).map(e=>e.value)
return b.some(d)?n.a.allTime:b.concat(p).reduce((e,t)=>e.union(t))}function d(e){if(!e)return e
const{start:t,end:r}=e
return new n.a({start:Object(i.k)(t)?Object(a.b)(t,-t.getTimezoneOffset(),"minutes"):t,end:Object(i.k)(r)?Object(a.b)(r,-r.getTimezoneOffset(),"minutes"):r})}function p(e){if(!e)return e
const{start:t,end:r}=e
return new n.a({start:Object(i.k)(t)?Object(a.b)(t,t.getTimezoneOffset(),"minutes"):t,end:Object(i.k)(r)?Object(a.b)(r,r.getTimezoneOffset(),"minutes"):r})}},676:function(e,t,r){"use strict"
r.r(t),r.d(t,"default",(function(){return C}))
var n=r(856),i=r(660),s=r(354),a=r(912),o=r(20),l=r(1011),c=r(861),u=r(292),d=r(858),p=(r(353),r(77),r(880)),h=r(865),b=r(857),f=r(864),y=r(659),m=r(664),O=r(1143),g=r(1800),j=r(1738),v=r(1135),w=r(1161),S=r(1121),x=r(1054),_=r(1056),M=r(1086),I=r(1137),T=r(1739),E=r(975),L=r(933),P=r(1598)
const A=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Elevation/World_Hillshade_Dark","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"]
let F=class extends(Object(w.a)(Object(T.a)(Object(I.a)(Object(x.a)(Object(_.a)(Object(g.a)(Object(j.a)(Object(v.a)(Object(l.a)(Object(a.b)(Object(M.a)(Object(O.a)(Object(S.a)(m.default)))))))))))))){constructor(...e){super(...e),this.listMode="show",this.isReference=null,this.operationalLayerType="ArcGISTiledMapServiceLayer",this.resampling=!0,this.sourceJSON=null,this.spatialReference=null,this.path=null,this.sublayers=null,this.type="tile",this.url=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){const t=Object(o.k)(e)?e.signal:null
return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(c.u).then(()=>this._fetchService(t))),Promise.resolve(this)}get attributionDataUrl(){var e
const t=null==(e=this.parsedUrl)?void 0:e.path.toLowerCase()
return t&&this._getDefaultAttribution(this._getMapName(t))}readSpatialReference(e,t){return(e=e||t.tileInfo&&t.tileInfo.spatialReference)&&y.default.fromJSON(e)}writeSublayers(e,t,r,n){if(!this.loaded||!e)return
const i=e.slice().reverse().flatten(({sublayers:e})=>e&&e.toArray().reverse()).toArray(),s=[],a={writeSublayerStructure:!1,...n}
i.forEach(e=>{const t=e.write({},a)
s.push(t)}),s.some(e=>Object.keys(e).length>1)&&(t.layers=s)}get tileServers(){return this._getDefaultTileServers(this.parsedUrl.path)}castTileServers(e){return Array.isArray(e)?e.map(e=>Object(u.M)(e).path):null}fetchTile(e,t,r,n={}){const{signal:s}=n,a=this.getTileUrl(e,t,r),o={responseType:"image",signal:s,query:{...this.refreshParameters}}
return Object(i.default)(a,o).then(e=>e.data)}getTileUrl(e,t,r){const n=!this.tilemapCache&&this.supportsBlankTile,i=Object(u.G)({...this.parsedUrl.query,blankTile:!n&&null,...this.customParameters,token:this.apiKey}),s=this.tileServers
return`${s&&s.length?s[t%s.length]:this.parsedUrl.path}/tile/${e}/${t}/${r}${i?"?"+i:""}`}_fetchService(e){return new Promise((t,r)=>{if(this.sourceJSON){if(null!=this.sourceJSON.bandCount&&null!=this.sourceJSON.pixelSizeX)throw new s.a("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service")
return void t({data:this.sourceJSON})}if(!this.parsedUrl)throw new s.a("tile-layer:undefined-url","layer's url is not defined")
const n=Object(E.f)(this.parsedUrl.path)
if(Object(o.k)(n)&&"ImageServer"===n.serverType)throw new s.a("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service")
Object(i.default)(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},responseType:"json",signal:e}).then(t,r)}).then(t=>{if(t.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=t.data,this.read(t.data,{origin:"service",url:this.parsedUrl}),10.1===this.version&&!Object(E.c)(this.url))return this._fetchServerVersion(this.url,e).then(e=>{this.read({currentVersion:e})}).catch(()=>{})})}_fetchServerVersion(e,t){if(!Object(E.b)(e))return Promise.reject()
const r=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info"
return Object(i.default)(r,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:t}).then(e=>{if(e.data&&e.data.currentVersion)return e.data.currentVersion
throw new s.a("tile-layer:version-not-available")})}_getMapName(e){const t=e.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i)
return t&&t[2]}_getDefaultAttribution(e){if(!e)return
let t
e=e.toLowerCase()
for(let r=0,n=A.length;r<n;r++)if(t=A[r],t.toLowerCase().indexOf(e)>-1)return Object(u.C)("//static.arcgis.com/attribution/"+t)}_getDefaultTileServers(e){const t=-1!==e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i),r=-1!==e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i)
return t||r?[e,e.replace(t?/server\.arcgisonline/i:/services\.arcgisonline/i,t?"services.arcgisonline":"server.arcgisonline")]:[]}get hasOverriddenFetchTile(){return!this.fetchTile.__isDefault__}}
Object(n.a)([Object(d.b)({readOnly:!0})],F.prototype,"attributionDataUrl",null),Object(n.a)([Object(d.b)({type:["show","hide","hide-children"]})],F.prototype,"listMode",void 0),Object(n.a)([Object(d.b)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],F.prototype,"isReference",void 0),Object(n.a)([Object(d.b)({readOnly:!0,type:["ArcGISTiledMapServiceLayer"]})],F.prototype,"operationalLayerType",void 0),Object(n.a)([Object(d.b)({type:Boolean})],F.prototype,"resampling",void 0),Object(n.a)([Object(d.b)()],F.prototype,"sourceJSON",void 0),Object(n.a)([Object(d.b)({type:y.default})],F.prototype,"spatialReference",void 0),Object(n.a)([Object(h.a)("spatialReference",["spatialReference","tileInfo"])],F.prototype,"readSpatialReference",null),Object(n.a)([Object(d.b)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],F.prototype,"path",void 0),Object(n.a)([Object(d.b)({readOnly:!0})],F.prototype,"sublayers",void 0),Object(n.a)([Object(f.a)("sublayers",{layers:{type:[P.a]}})],F.prototype,"writeSublayers",null),Object(n.a)([Object(d.b)({json:{read:!1,write:!1}})],F.prototype,"popupEnabled",void 0),Object(n.a)([Object(d.b)()],F.prototype,"tileServers",null),Object(n.a)([Object(p.a)("tileServers")],F.prototype,"castTileServers",null),Object(n.a)([Object(d.b)({readOnly:!0,json:{read:!1}})],F.prototype,"type",void 0),Object(n.a)([Object(d.b)(L.n)],F.prototype,"url",void 0),F=Object(n.a)([Object(b.a)("esri.layers.TileLayer")],F),F.prototype.fetchTile.__isDefault__=!0
const C=F},867:function(e,t,r){"use strict"
function n(){return[0,0,0]}function i(e){return[e[0],e[1],e[2]]}function s(e,t,r){return[e,t,r]}function a(e){const t=[0,0,0],r=Math.min(3,e.length)
for(let n=0;n<r;++n)t[n]=e[n]
return t}function o(e,t){return new Float64Array(e,t,3)}function l(){return s(1,1,1)}function c(){return s(1,0,0)}function u(){return s(0,1,0)}function d(){return s(0,0,1)}r.d(t,"a",(function(){return h})),r.d(t,"b",(function(){return y})),r.d(t,"c",(function(){return p})),r.d(t,"d",(function(){return i})),r.d(t,"e",(function(){return o})),r.d(t,"f",(function(){return n})),r.d(t,"g",(function(){return a})),r.d(t,"h",(function(){return s})),r.d(t,"i",(function(){return d}))
const p=[0,0,0],h=l(),b=c(),f=u(),y=d()
Object.freeze({__proto__:null,create:n,clone:i,fromValues:s,fromArray:a,createView:o,zeros:function(){return[0,0,0]},ones:l,unitX:c,unitY:u,unitZ:d,ZEROS:p,ONES:h,UNIT_X:b,UNIT_Y:f,UNIT_Z:y})},868:function(e,t,r){"use strict"
r.d(t,"a",(function(){return s}))
var n=r(863),i=r(858)
function s(e,t={}){var r
const s=e instanceof n.a?e:new n.a(e,t),a={type:null==(r=null==t?void 0:t.ignoreUnknown)||r?s.apiValues:String,json:{type:s.jsonValues,read:(null==t||!t.readOnly)&&{reader:s.read},write:{writer:s.write}}}
return void 0!==(null==t?void 0:t.readOnly)&&(a.readOnly=!!t.readOnly),void 0!==(null==t?void 0:t.default)&&(a.json.default=t.default),void 0!==(null==t?void 0:t.name)&&(a.json.name=t.name),Object(i.b)(a)}},869:function(e,t,r){"use strict"
r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return O})),r.d(t,"c",(function(){return y})),r.d(t,"d",(function(){return u})),r.d(t,"e",(function(){return d})),r.d(t,"f",(function(){return p})),r.d(t,"g",(function(){return b})),r.d(t,"h",(function(){return h}))
var n=r(20),i=r(658),s=r(875),a=r(889),o=r(866),l=r(661),c=r(883)
function u(e){return void 0!==e.xmin&&void 0!==e.ymin&&void 0!==e.xmax&&void 0!==e.ymax}function d(e){return void 0!==e.points}function p(e){return void 0!==e.x&&void 0!==e.y}function h(e){return void 0!==e.paths}function b(e){return void 0!==e.rings}function f(e){return Object(n.j)(e)?null:e instanceof s.a?e:p(e)?o.a.fromJSON(e):h(e)?c.a.fromJSON(e):b(e)?l.default.fromJSON(e):d(e)?a.a.fromJSON(e):u(e)?i.default.fromJSON(e):null}function y(e){return e?p(e)?"esriGeometryPoint":h(e)?"esriGeometryPolyline":b(e)?"esriGeometryPolygon":u(e)?"esriGeometryEnvelope":d(e)?"esriGeometryMultipoint":null:null}const m={esriGeometryPoint:o.a,esriGeometryPolyline:c.a,esriGeometryPolygon:l.default,esriGeometryEnvelope:i.default,esriGeometryMultipoint:a.a}
function O(e){return e&&m[e]||null}},870:function(e,t,r){"use strict"
r.d(t,"c",(function(){return u}))
var n=r(859),i=r(658)
r.d(t,"a",(function(){return i.default}))
var s=r(875),a=r(889),o=r(866)
r.d(t,"b",(function(){return o.a}))
var l=r(661),c=r(883)
r(659),r(888),r(869)
const u={base:s.a,key:"type",typeMap:{extent:i.default,multipoint:a.a,point:o.a,polyline:c.a,polygon:l.default}}
Object(n.k)(u)},871:function(e,t,r){"use strict"
r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return h})),r.d(t,"c",(function(){return q})),r.d(t,"d",(function(){return u})),r.d(t,"e",(function(){return d})),r.d(t,"f",(function(){return f})),r.d(t,"g",(function(){return I})),r.d(t,"h",(function(){return b})),r.d(t,"i",(function(){return l})),r.d(t,"j",(function(){return w})),r.d(t,"k",(function(){return v})),r.d(t,"l",(function(){return S})),r.d(t,"m",(function(){return c})),r.d(t,"n",(function(){return a})),r.d(t,"o",(function(){return m})),r.d(t,"p",(function(){return y})),r.d(t,"q",(function(){return N})),r.d(t,"r",(function(){return P})),r.d(t,"s",(function(){return s})),r.d(t,"t",(function(){return x})),r.d(t,"u",(function(){return j})),r.d(t,"v",(function(){return g})),r.d(t,"w",(function(){return O})),r.d(t,"x",(function(){return M})),r.d(t,"y",(function(){return F})),r.d(t,"z",(function(){return o})),r.d(t,"A",(function(){return _})),r.d(t,"B",(function(){return V})),r.d(t,"C",(function(){return C})),r.d(t,"D",(function(){return U})),r.d(t,"E",(function(){return k})),r.d(t,"F",(function(){return A})),r.d(t,"G",(function(){return T}))
var n=r(867),i=r(893)
function s(e){const t=e[0],r=e[1],n=e[2]
return Math.sqrt(t*t+r*r+n*n)}function a(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}function o(e,t,r,n){return e[0]=t,e[1]=r,e[2]=n,e}function l(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e}function c(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e}function u(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e[2]=t[2]*r[2],e}function d(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e[2]=t[2]/r[2],e}function p(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e[2]=Math.min(t[2],r[2]),e}function h(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e[2]=Math.max(t[2],r[2]),e}function b(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e}function f(e,t,r,n){return e[0]=t[0]+r[0]*n,e[1]=t[1]+r[1]*n,e[2]=t[2]+r[2]*n,e}function y(e,t){const r=t[0]-e[0],n=t[1]-e[1],i=t[2]-e[2]
return Math.sqrt(r*r+n*n+i*i)}function m(e,t){const r=t[0]-e[0],n=t[1]-e[1],i=t[2]-e[2]
return r*r+n*n+i*i}function O(e){const t=e[0],r=e[1],n=e[2]
return t*t+r*r+n*n}function g(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e}function j(e,t){const r=t[0],n=t[1],i=t[2]
let s=r*r+n*n+i*i
return s>0&&(s=1/Math.sqrt(s),e[0]=t[0]*s,e[1]=t[1]*s,e[2]=t[2]*s),e}function v(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function w(e,t,r){const n=t[0],i=t[1],s=t[2],a=r[0],o=r[1],l=r[2]
return e[0]=i*l-s*o,e[1]=s*a-n*l,e[2]=n*o-i*a,e}function S(e,t,r,n){const i=t[0],s=t[1],a=t[2]
return e[0]=i+n*(r[0]-i),e[1]=s+n*(r[1]-s),e[2]=a+n*(r[2]-a),e}function x(e,t,r){const n=t[0],i=t[1],s=t[2]
return e[0]=r[0]*n+r[4]*i+r[8]*s+r[12],e[1]=r[1]*n+r[5]*i+r[9]*s+r[13],e[2]=r[2]*n+r[6]*i+r[10]*s+r[14],e}function _(e,t,r){const n=t[0],i=t[1],s=t[2]
return e[0]=n*r[0]+i*r[3]+s*r[6],e[1]=n*r[1]+i*r[4]+s*r[7],e[2]=n*r[2]+i*r[5]+s*r[8],e}function M(e,t,r){const n=r[0],i=r[1],s=r[2],a=r[3],o=t[0],l=t[1],c=t[2]
let u=i*c-s*l,d=s*o-n*c,p=n*l-i*o,h=i*p-s*d,b=s*u-n*p,f=n*d-i*u
const y=2*a
return u*=y,d*=y,p*=y,h*=2,b*=2,f*=2,e[0]=o+u+h,e[1]=l+d+b,e[2]=c+p+f,e}function I(e,t,r,n){const i=[],s=[]
return i[0]=t[0]-r[0],i[1]=t[1]-r[1],i[2]=t[2]-r[2],s[0]=i[0]*Math.cos(n)-i[1]*Math.sin(n),s[1]=i[0]*Math.sin(n)+i[1]*Math.cos(n),s[2]=i[2],e[0]=s[0]+r[0],e[1]=s[1]+r[1],e[2]=s[2]+r[2],e}function T(e,t){a(E,e),a(L,t),j(E,E),j(L,L)
const r=v(E,L)
return r>1?0:r<-1?Math.PI:Math.acos(r)}const E=Object(n.f)(),L=Object(n.f)()
function P(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]}function A(e,t){if(e===t)return!0
const r=e[0],n=e[1],s=e[2],a=t[0],o=t[1],l=t[2]
return Math.abs(r-a)<=i.a*Math.max(1,Math.abs(r),Math.abs(a))&&Math.abs(n-o)<=i.a*Math.max(1,Math.abs(n),Math.abs(o))&&Math.abs(s-l)<=i.a*Math.max(1,Math.abs(s),Math.abs(l))}function F(e,t,r){const n=r[0]-t[0],i=r[1]-t[1],s=r[2]-t[2]
let a=n*n+i*i+s*s
return a>0?(a=1/Math.sqrt(a),e[0]=n*a,e[1]=i*a,e[2]=s*a,e):(e[0]=0,e[1]=0,e[2]=0,e)}const C=c,D=u,R=d,N=y,k=m,V=s,U=O,q=Object.freeze({__proto__:null,length:s,copy:a,set:o,add:l,subtract:c,multiply:u,divide:d,ceil:function(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e},floor:function(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e},min:p,max:h,round:function(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e},scale:b,scaleAndAdd:f,distance:y,squaredDistance:m,squaredLength:O,negate:g,inverse:function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e},normalize:j,dot:v,cross:w,lerp:S,hermite:function(e,t,r,n,i,s){const a=s*s,o=a*(2*s-3)+1,l=a*(s-2)+s,c=a*(s-1),u=a*(3-2*s)
return e[0]=t[0]*o+r[0]*l+n[0]*c+i[0]*u,e[1]=t[1]*o+r[1]*l+n[1]*c+i[1]*u,e[2]=t[2]*o+r[2]*l+n[2]*c+i[2]*u,e},bezier:function(e,t,r,n,i,s){const a=1-s,o=a*a,l=s*s,c=o*a,u=3*s*o,d=3*l*a,p=l*s
return e[0]=t[0]*c+r[0]*u+n[0]*d+i[0]*p,e[1]=t[1]*c+r[1]*u+n[1]*d+i[1]*p,e[2]=t[2]*c+r[2]*u+n[2]*d+i[2]*p,e},random:function(e,t){t=t||1
const r=2*Object(i.b)()*Math.PI,n=2*Object(i.b)()-1,s=Math.sqrt(1-n*n)*t
return e[0]=Math.cos(r)*s,e[1]=Math.sin(r)*s,e[2]=n*t,e},transformMat4:x,transformMat3:_,transformQuat:M,rotateX:function(e,t,r,n){const i=[],s=[]
return i[0]=t[0]-r[0],i[1]=t[1]-r[1],i[2]=t[2]-r[2],s[0]=i[0],s[1]=i[1]*Math.cos(n)-i[2]*Math.sin(n),s[2]=i[1]*Math.sin(n)+i[2]*Math.cos(n),e[0]=s[0]+r[0],e[1]=s[1]+r[1],e[2]=s[2]+r[2],e},rotateY:function(e,t,r,n){const i=[],s=[]
return i[0]=t[0]-r[0],i[1]=t[1]-r[1],i[2]=t[2]-r[2],s[0]=i[2]*Math.sin(n)+i[0]*Math.cos(n),s[1]=i[1],s[2]=i[2]*Math.cos(n)-i[0]*Math.sin(n),e[0]=s[0]+r[0],e[1]=s[1]+r[1],e[2]=s[2]+r[2],e},rotateZ:I,angle:T,str:function(e){return"vec3("+e[0]+", "+e[1]+", "+e[2]+")"},exactEquals:P,equals:A,direction:F,sub:C,mul:D,div:R,dist:N,sqrDist:k,len:V,sqrLen:U})},873:function(e,t,r){"use strict"
r.d(t,"a",(function(){return p}))
var n,i,s=r(967),a=r(874),o=r(20),l=r(859)
function c(e){return Object(a.f)(Object(l.e)(e),0,255)}function u(e,t,r){return e=Number(e),isNaN(e)?r:e<t?t:e>r?r:e}class d{constructor(e){this.r=255,this.g=255,this.b=255,this.a=1,e&&this.setColor(e)}static blendColors(e,t,r,n=new d){return n.r=Math.round(e.r+(t.r-e.r)*r),n.g=Math.round(e.g+(t.g-e.g)*r),n.b=Math.round(e.b+(t.b-e.b)*r),n.a=e.a+(t.a-e.a)*r,n._sanitize()}static fromRgb(e,t){const r=e.toLowerCase().match(/^(rgba?|hsla?)\(([\s\.\-,%0-9]+)\)/)
if(r){const e=r[2].split(/\s*,\s*/),n=r[1]
if("rgb"===n&&3===e.length||"rgba"===n&&4===e.length){const r=e[0]
if("%"===r.charAt(r.length-1)){const r=e.map(e=>2.56*parseFloat(e))
return 4===e.length&&(r[3]=parseFloat(e[3])),d.fromArray(r,t)}return d.fromArray(e.map(e=>parseFloat(e)),t)}if("hsl"===n&&3===e.length||"hsla"===n&&4===e.length)return d.fromArray(Object(s.d)(parseFloat(e[0]),parseFloat(e[1])/100,parseFloat(e[2])/100,parseFloat(e[3])),t)}return null}static fromHex(e,t=new d){if(4!==e.length&&7!==e.length||"#"!==e[0])return null
const r=4===e.length?4:8,n=(1<<r)-1
let i=Number("0x"+e.substr(1))
return isNaN(i)?null:(["b","g","r"].forEach(e=>{const s=i&n
i>>=r,t[e]=4===r?17*s:s}),t.a=1,t)}static fromArray(e,t=new d){return t._set(Number(e[0]),Number(e[1]),Number(e[2]),Number(e[3])),isNaN(t.a)&&(t.a=1),t._sanitize()}static fromString(e,t){const r=Object(s.e)(e)?Object(s.a)(e):null
return r&&d.fromArray(r,t)||d.fromRgb(e,t)||d.fromHex(e,t)}static fromJSON(e){return e&&new d([e[0],e[1],e[2],e[3]/255])}static toUnitRGB(e){return Object(o.k)(e)?[e.r/255,e.g/255,e.b/255]:null}static toUnitRGBA(e){return Object(o.k)(e)?[e.r/255,e.g/255,e.b/255,null!=e.a?e.a:1]:null}get isBright(){return.299*this.r+.587*this.g+.114*this.b>=127}setColor(e){if("string"==typeof e)d.fromString(e,this)
else if(Array.isArray(e))d.fromArray(e,this)
else{var t,r,n,i
this._set(null!=(t=e.r)?t:0,null!=(r=e.g)?r:0,null!=(n=e.b)?n:0,null!=(i=e.a)?i:1),e instanceof d||this._sanitize()}return this}toRgb(){return[this.r,this.g,this.b]}toRgba(){return[this.r,this.g,this.b,this.a]}toHex(){const e=this.r.toString(16),t=this.g.toString(16),r=this.b.toString(16)
return`#${e.length<2?"0"+e:e}${t.length<2?"0"+t:t}${r.length<2?"0"+r:r}`}toCss(e=!1){const t=this.r+", "+this.g+", "+this.b
return e?`rgba(${t}, ${this.a})`:`rgb(${t})`}toString(){return this.toCss(!0)}toJSON(){return this.toArray()}toArray(e=d.AlphaMode.ALWAYS){const t=c(this.r),r=c(this.g),n=c(this.b)
return e===d.AlphaMode.ALWAYS||1!==this.a?[t,r,n,c(255*this.a)]:[t,r,n]}clone(){return new d(this.toRgba())}hash(){return this.r<<24|this.g<<16|this.b<<8|255*this.a}equals(e){return Object(o.k)(e)&&e.r===this.r&&e.g===this.g&&e.b===this.b&&e.a===this.a}_sanitize(){return this.r=Math.round(u(this.r,0,255)),this.g=Math.round(u(this.g,0,255)),this.b=Math.round(u(this.b,0,255)),this.a=u(this.a,0,1),this}_set(e,t,r,n){this.r=e,this.g=t,this.b=r,this.a=n}}d.prototype.declaredClass="esri.Color",n=d||(d={}),(i=n.AlphaMode||(n.AlphaMode={}))[i.ALWAYS=0]="ALWAYS",i[i.UNLESS_OPAQUE=1]="UNLESS_OPAQUE"
const p=d},874:function(e,t,r){"use strict"
r.d(t,"a",(function(){return x})),r.d(t,"b",(function(){return f})),r.d(t,"c",(function(){return S})),r.d(t,"d",(function(){return y})),r.d(t,"e",(function(){return w})),r.d(t,"f",(function(){return o})),r.d(t,"g",(function(){return g})),r.d(t,"h",(function(){return p})),r.d(t,"i",(function(){return O})),r.d(t,"j",(function(){return m})),r.d(t,"k",(function(){return l})),r.d(t,"l",(function(){return d})),r.d(t,"m",(function(){return u})),r.d(t,"n",(function(){return a})),r.d(t,"o",(function(){return c})),r.d(t,"p",(function(){return h})),r.d(t,"q",(function(){return b})),r.d(t,"r",(function(){return v}))
var n=r(871),i=r(910)
const s=new Float32Array(1)
function a(e){--e
for(let t=1;t<32;t<<=1)e|=e>>t
return e+1}function o(e,t,r){return Math.min(Math.max(e,t),r)}function l(e){return 0==(e&e-1)}function c(e){return e--,e|=e>>1,e|=e>>2,e|=e>>4,e|=e>>8,e|=e>>16,++e}function u(e){return 10**Math.ceil(Math.LOG10E*Math.log(e))}function d(e,t,r){return e+(t-e)*r}function p(e){return e*Math.PI/180}function h(e){return 180*e/Math.PI}function b(e,t=1e-6){return(e<0?-1:1)/Math.max(Math.abs(e),t)}function f(e){return Math.acos(o(e,-1,1))}function y(e){return Math.asin(o(e,-1,1))}function m(e,t,r=1e-6){if(isNaN(e)||isNaN(t))return!1
if(e===t)return!0
const n=Math.abs(e-t),i=Math.abs(e),s=Math.abs(t)
if(0===e||0===t||i<1e-12&&s<1e-12){if(n>.01*r)return!1}else if(n/(i+s)>r)return!1
return!0}function O(e,t,r=1e-6){return!isNaN(e)&&!isNaN(t)&&(e>t?e-t:t-e)<=r}function g(e){return j(Math.max(-x,Math.min(e,x)))}function j(e){return s[0]=e,s[0]}function v(e,t,r){const n=o((r-e)/(t-e),0,1)
return n*n*(3-2*n)}function w(e,t){const r=Object(n.s)(e),i=y(e[2]/r),s=Math.atan2(e[1]/r,e[0]/r)
return Object(n.z)(t,r,i,s),t}function S(e,t,r){return Object(i.l)(e,t[0],t[1],t[2],t[3]*r)}const x=j(34028234663852886e22)},876:function(e,t,r){"use strict"
r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return p})),r.d(t,"c",(function(){return h})),r.d(t,"d",(function(){return c})),r.d(t,"e",(function(){return u})),r.d(t,"f",(function(){return o})),r.d(t,"g",(function(){return l})),r.d(t,"h",(function(){return i})),r.d(t,"i",(function(){return s})),r.d(t,"j",(function(){return b})),r.d(t,"k",(function(){return a}))
const n=/^-?(\d+(\.\d+)?)\s*((px)|(pt))?$/i
function i(e){return e?e/72*96:0}function s(e){return e?72*e/96:0}function a(e){if("string"==typeof e){const t=e.match(n)
if(t){const r=Number(t[1]),n=t[3]&&t[3].toLowerCase(),i="-"===e.charAt(0),a="px"===n?s(r):r
return i?-a:a}return console.warn("screenUtils.toPt: input not recognized!"),null}return e}function o(e=0,t=0){return{x:e,y:t}}function l(e=0,t=0){return[e,t]}function c(e=0,t=0){return[e,t]}function u(e=0,t=0,r=0){return[e,t,r]}function d(e){return e}function p(e){return e}function h(e){return e}function b(e,t){return t?(t[0]=e.x,t[1]=e.y,t.length>2&&(t[2]=0),t):[e.x,e.y]}},878:function(e,t,r){"use strict"
r.d(t,"a",(function(){return L}))
var n,i=r(856),s=r(1061),a=r(890),o=r(178),l=r(20),c=r(982),u=r(984),d=r(948),p=r(858),h=r(859),b=r(971),f=r(857),y=r(1063),m=r(1134)
class O{constructor(){this._observers=[]}observe(e){return this._observers.includes(e)||this._observers.push(e),new m.a(this._observers,e)}notify(){const e=this._observers.slice()
for(let t=0;t<e.length;++t){const r=e[t]
r.onInvalidated(),r.onCommitted()}}}const g=new c.a(class{constructor(){this.target=null,this.cancellable=!1,this.defaultPrevented=!1,this.item=void 0,this.type=void 0}preventDefault(){this.cancellable&&(this.defaultPrevented=!0)}reset(e){this.defaultPrevented=!1,this.item=e}},void 0,e=>{e.item=null,e.target=null,e.defaultPrevented=!1,e.cancellable=!1}),j=()=>{}
function v(e){return e?e instanceof E?e.toArray():e.length?Array.prototype.slice.apply(e):[]:[]}function w(e){if(e&&e.length)return e[0]}function S(e,t,r,n){const i=Math.min(e.length-r,t.length-n)
let s=0
for(;s<i&&e[r+s]===t[n+s];)s++
return s}const x=new Set,_=new Set,M=new Set,I=new Map
let T=0,E=n=class extends a.a.EventedAccessor{constructor(e){super(e),this._chgListeners=[],this._notifications=null,this._timer=null,this._observable=new O,this.length=0,this._items=[],Object.defineProperty(this,"uid",{value:T++})}static isCollection(e){return null!=e&&e instanceof n}normalizeCtorArgs(e){return e?Array.isArray(e)||e instanceof n?{items:e}:e:{}}destroy(){this.removeAll()}*[Symbol.iterator](){yield*this.items}get items(){return Object(y.d)(this._observable),this._items}set items(e){this._emitBeforeChanges(u.a.ADD)||(this._splice(0,this.length,v(e)),this._emitAfterChanges(u.a.ADD))}hasEventListener(e){return"change"===e?this._chgListeners.length>0:this._emitter.hasEventListener(e)}on(e,t){if("change"===e){const e=this._chgListeners,r={removed:!1,callback:t}
return e.push(r),this._notifications&&this._notifications.push({listeners:e.slice(),items:this._items.slice(),changes:[]}),{remove(){this.remove=j,r.removed=!0,e.splice(e.indexOf(r),1)}}}return this._emitter.on(e,t)}once(e,t){const r=this.on(e,t)
return{remove(){r.remove()}}}add(e,t){if(Object(y.d)(this._observable),this._emitBeforeChanges(u.a.ADD))return this
const r=this.getNextIndex(null!=t?t:null)
return this._splice(r,0,[e]),this._emitAfterChanges(u.a.ADD),this}addMany(e,t=this._items.length){if(Object(y.d)(this._observable),!e||!e.length)return this
if(this._emitBeforeChanges(u.a.ADD))return this
const r=this.getNextIndex(t)
return this._splice(r,0,v(e)),this._emitAfterChanges(u.a.ADD),this}at(e){if(Object(y.d)(this._observable),(e=Math.trunc(e)||0)<0&&(e+=this.length),!(e<0||e>=this.length))return this._items[e]}removeAll(){if(Object(y.d)(this._observable),!this.length||this._emitBeforeChanges(u.a.REMOVE))return[]
const e=this._splice(0,this.length)||[]
return this._emitAfterChanges(u.a.REMOVE),e}clone(){return Object(y.d)(this._observable),this._createNewInstance({items:this._items.map(o.a)})}concat(...e){Object(y.d)(this._observable)
const t=e.map(v)
return this._createNewInstance({items:this._items.concat(...t)})}drain(e,t){if(Object(y.d)(this._observable),!this.length||this._emitBeforeChanges(u.a.REMOVE))return
const r=Object(l.c)(this._splice(0,this.length)),n=r.length
for(let i=0;i<n;i++)e.call(t,r[i],i,r)
this._emitAfterChanges(u.a.REMOVE)}every(e,t){return Object(y.d)(this._observable),this._items.every(e,t)}filter(e,t){let r
return Object(y.d)(this._observable),r=2===arguments.length?this._items.filter(e,t):this._items.filter(e),this._createNewInstance({items:r})}find(e,t){return Object(y.d)(this._observable),this._items.find(e,t)}findIndex(e,t){return Object(y.d)(this._observable),this._items.findIndex(e,t)}flatten(e,t){Object(y.d)(this._observable)
const r=[]
return function e(t,r,n,i){r&&r.forEach((r,s,a)=>{t.push(r),e(t,n.call(i,r,s,a),n,i)})}(r,this,e,t),new n(r)}forEach(e,t){return Object(y.d)(this._observable),this._items.forEach(e,t)}getItemAt(e){return Object(y.d)(this._observable),this._items[e]}getNextIndex(e){Object(y.d)(this._observable)
const t=this.length
return(e=null==e?t:e)<0?e=0:e>t&&(e=t),e}includes(e,t=0){return Object(y.d)(this._observable),this._items.includes(e,t)}indexOf(e,t=0){return Object(y.d)(this._observable),this._items.indexOf(e,t)}join(e=","){return Object(y.d)(this._observable),this._items.join(e)}lastIndexOf(e,t=this.length-1){return Object(y.d)(this._observable),this._items.lastIndexOf(e,t)}map(e,t){Object(y.d)(this._observable)
const r=this._items.map(e,t)
return new n({items:r})}reorder(e,t=this.length-1){Object(y.d)(this._observable)
const r=this.indexOf(e)
if(-1!==r){if(t<0?t=0:t>=this.length&&(t=this.length-1),r!==t){if(this._emitBeforeChanges(u.a.MOVE))return e
this._splice(r,1),this._splice(t,0,[e]),this._emitAfterChanges(u.a.MOVE)}return e}}pop(){if(Object(y.d)(this._observable),!this.length||this._emitBeforeChanges(u.a.REMOVE))return
const e=w(this._splice(this.length-1,1))
return this._emitAfterChanges(u.a.REMOVE),e}push(...e){return Object(y.d)(this._observable),this._emitBeforeChanges(u.a.ADD)||(this._splice(this.length,0,e),this._emitAfterChanges(u.a.ADD)),this.length}reduce(e,t){Object(y.d)(this._observable)
const r=this._items
return 2===arguments.length?r.reduce(e,t):r.reduce(e)}reduceRight(e,t){Object(y.d)(this._observable)
const r=this._items
return 2===arguments.length?r.reduceRight(e,t):r.reduceRight(e)}remove(e){return Object(y.d)(this._observable),this.removeAt(this.indexOf(e))}removeAt(e){if(Object(y.d)(this._observable),e<0||e>=this.length||this._emitBeforeChanges(u.a.REMOVE))return
const t=w(this._splice(e,1))
return this._emitAfterChanges(u.a.REMOVE),t}removeMany(e){if(Object(y.d)(this._observable),!e||!e.length||this._emitBeforeChanges(u.a.REMOVE))return[]
const t=e instanceof n?e.toArray():e,r=this._items,i=[],s=t.length
for(let e=0;e<s;e++){const n=t[e],s=r.indexOf(n)
if(s>-1){const n=1+S(t,r,e+1,s+1),a=this._splice(s,n)
a&&a.length>0&&i.push.apply(i,a),e+=n-1}}return this._emitAfterChanges(u.a.REMOVE),i}reverse(){if(Object(y.d)(this._observable),this._emitBeforeChanges(u.a.MOVE))return this
const e=this._splice(0,this.length)
return e&&(e.reverse(),this._splice(0,0,e)),this._emitAfterChanges(u.a.MOVE),this}shift(){if(Object(y.d)(this._observable),!this.length||this._emitBeforeChanges(u.a.REMOVE))return
const e=w(this._splice(0,1))
return this._emitAfterChanges(u.a.REMOVE),e}slice(e=0,t=this.length){return Object(y.d)(this._observable),this._createNewInstance({items:this._items.slice(e,t)})}some(e,t){return Object(y.d)(this._observable),this._items.some(e,t)}sort(e){if(Object(y.d)(this._observable),!this.length||this._emitBeforeChanges(u.a.MOVE))return this
const t=Object(l.c)(this._splice(0,this.length))
return arguments.length?t.sort(e):t.sort(),this._splice(0,0,t),this._emitAfterChanges(u.a.MOVE),this}splice(e,t,...r){Object(y.d)(this._observable)
const n=(t?u.a.REMOVE:0)|(r.length?u.a.ADD:0)
if(this._emitBeforeChanges(n))return[]
const i=this._splice(e,t,r)||[]
return this._emitAfterChanges(n),i}toArray(){return Object(y.d)(this._observable),this._items.slice()}toJSON(){return Object(y.d)(this._observable),this.toArray()}toLocaleString(){return Object(y.d)(this._observable),this._items.toLocaleString()}toString(){return Object(y.d)(this._observable),this._items.toString()}unshift(...e){return Object(y.d)(this._observable),!e.length||this._emitBeforeChanges(u.a.ADD)||(this._splice(0,0,e),this._emitAfterChanges(u.a.ADD)),this.length}_createNewInstance(e){return new this.constructor(e)}_splice(e,t,r){const n=this._items,i=this.itemType
let s,a
if(!this._notifications&&this.hasEventListener("change")&&(this._notifications=[{listeners:this._chgListeners.slice(),items:this._items.slice(),changes:[]}],this._timer&&this._timer.remove(),this._timer=Object(d.b)(()=>this._dispatchChange())),t){if(a=n.splice(e,t),this.hasEventListener("before-remove")){const t=g.acquire()
t.target=this,t.cancellable=!0
for(let r=0,i=a.length;r<i;r++)s=a[r],t.reset(s),this.emit("before-remove",t),t.defaultPrevented&&(a.splice(r,1),n.splice(e,0,s),e+=1,r-=1,i-=1)
g.release(t)}if(this.length=this._items.length,this.hasEventListener("after-remove")){const e=g.acquire()
e.target=this,e.cancellable=!1
const t=a.length
for(let r=0;r<t;r++)e.reset(a[r]),this.emit("after-remove",e)
g.release(e)}}if(r&&r.length){if(i){const e=[]
for(const t of r){const r=i.ensureType(t)
null==r&&null!=t||e.push(r)}r=e}const t=this.hasEventListener("before-add"),s=this.hasEventListener("after-add"),a=e===this.length
if(t||s){const i=g.acquire()
i.target=this,i.cancellable=!0
const o=g.acquire()
o.target=this,o.cancellable=!1
for(const l of r)t?(i.reset(l),this.emit("before-add",i),i.defaultPrevented||(a?n.push(l):n.splice(e++,0,l),this._set("length",n.length),s&&(o.reset(l),this.emit("after-add",o)))):(a?n.push(l):n.splice(e++,0,l),this._set("length",n.length),o.reset(l),this.emit("after-add",o))
g.release(o),g.release(i)}else{if(a)for(const e of r)n.push(e)
else n.splice(e,0,...r)
this._set("length",n.length)}}return(r&&r.length||a&&a.length)&&this._notifyChangeEvent(r,a),a}_emitBeforeChanges(e){let t=!1
if(this.hasEventListener("before-changes")){const r=g.acquire()
r.target=this,r.cancellable=!0,r.type=e,this.emit("before-changes",r),t=r.defaultPrevented,g.release(r)}return t}_emitAfterChanges(e){if(this.hasEventListener("after-changes")){const t=g.acquire()
t.target=this,t.cancellable=!1,t.type=e,this.emit("after-changes",t),g.release(t)}this._observable.notify()}_notifyChangeEvent(e,t){this.hasEventListener("change")&&this._notifications&&this._notifications[this._notifications.length-1].changes.push({added:e,removed:t})}_dispatchChange(){if(this._timer&&(this._timer.remove(),this._timer=null),!this._notifications)return
const e=this._notifications
this._notifications=null
for(const t of e){const e=t.changes
x.clear(),_.clear(),M.clear()
for(const{added:t,removed:r}of e){if(t)if(0===M.size&&0===_.size)for(const e of t)x.add(e)
else for(const e of t)_.has(e)?(M.add(e),_.delete(e)):M.has(e)||x.add(e)
if(r)if(0===M.size&&0===x.size)for(const e of r)_.add(e)
else for(const e of r)x.has(e)?x.delete(e):(M.delete(e),_.add(e))}const r=s.a.acquire()
x.forEach(e=>{r.push(e)})
const n=s.a.acquire()
_.forEach(e=>{n.push(e)})
const i=this._items,a=t.items,o=s.a.acquire()
if(M.forEach(e=>{a.indexOf(e)!==i.indexOf(e)&&o.push(e)}),t.listeners&&(r.length||n.length||o.length)){const e={target:this,added:r,removed:n,moved:o},i=t.listeners.length
for(let r=0;r<i;r++){const n=t.listeners[r]
n.removed||n.callback.call(this,e)}}s.a.release(r),s.a.release(n),s.a.release(o)}x.clear(),_.clear(),M.clear()}}
E.ofType=e=>{if(!e)return n
if(I.has(e))return I.get(e)
let t=null
if("function"==typeof e)t=e.prototype.declaredClass
else if(e.base)t=e.base.prototype.declaredClass
else for(const r in e.typeMap){const n=e.typeMap[r].prototype.declaredClass
t?t+=" | "+n:t=n}let r=class extends n{}
return Object(i.a)([Object(b.a)({Type:e,ensureType:"function"==typeof e?Object(h.m)(e):Object(h.k)(e)})],r.prototype,"itemType",void 0),r=Object(i.a)([Object(f.a)(`esri.core.Collection<${t}>`)],r),I.set(e,r),r},Object(i.a)([Object(p.b)()],E.prototype,"length",void 0),Object(i.a)([Object(p.b)()],E.prototype,"items",null),E=n=Object(i.a)([Object(f.a)("esri.core.Collection")],E)
const L=E},879:function(e,t,r){"use strict"
var n,i,s
let a
r.d(t,"a",(function(){return h})),r.d(t,"b",(function(){return c})),r.d(t,"c",(function(){return d}))
const o=null!=(n=null==(i=globalThis.esriConfig)?void 0:i.locale)?n:null==(s=globalThis.dojoConfig)?void 0:s.locale
function l(){var e,t
return null!=(e=null!=o?o:null==(t=globalThis.navigator)?void 0:t.language)?e:"en"}function c(){return void 0===a&&(a=l()),a}const u=[]
function d(e){return u.push(e),{remove(){u.splice(u.indexOf(e),1)}}}const p=[]
function h(e){return p.push(e),{remove(){u.splice(p.indexOf(e),1)}}}null==globalThis.addEventListener||globalThis.addEventListener("languagechange",(function(){const e=null!=void 0?void 0:l()
a!==e&&(a=e,[...p].forEach(t=>{t.call(null,e)}),[...u].forEach(t=>{t.call(null,e)}))}))},881:function(e,t,r){"use strict"
r.d(t,"a",(function(){return g})),r.d(t,"b",(function(){return S})),r.d(t,"c",(function(){return x})),r.d(t,"d",(function(){return m})),r.d(t,"e",(function(){return y})),r.d(t,"f",(function(){return _})),r.d(t,"g",(function(){return T})),r.d(t,"h",(function(){return M})),r.d(t,"i",(function(){return X})),r.d(t,"j",(function(){return f})),r.d(t,"k",(function(){return d})),r.d(t,"l",(function(){return h})),r.d(t,"m",(function(){return v})),r.d(t,"n",(function(){return I})),r.d(t,"o",(function(){return E})),r.d(t,"p",(function(){return z})),r.d(t,"q",(function(){return U})),r.d(t,"r",(function(){return q})),r.d(t,"s",(function(){return k})),r.d(t,"t",(function(){return ee})),r.d(t,"u",(function(){return $})),r.d(t,"v",(function(){return O})),r.d(t,"w",(function(){return J})),r.d(t,"x",(function(){return Z}))
var n,i,s=r(354),a=r(20),o=r(109);(i=n||(n={})).VALUE_OUT_OF_RANGE="domain-validation-error::value-out-of-range",i.INVALID_CODED_VALUE="domain-validation-error::invalid-coded-value"
var l=r(907)
const c=["field","field2","field3","normalizationField","rotationInfo.field","proportionalSymbolInfo.field","proportionalSymbolInfo.normalizationField","colorInfo.field","colorInfo.normalizationField"],u=["field","normalizationField"]
function d(e,t){if(null!=e&&null!=t)for(const r of Array.isArray(e)?e:[e])if(p(c,r,t),"visualVariables"in r&&r.visualVariables)for(const e of r.visualVariables)p(u,e,t)}function p(e,t,r){if(e)for(const n of e){const e=Object(o.b)(n,t),i=e&&"function"!=typeof e&&r.get(e)
i&&Object(o.c)(n,i.name,t)}}function h(e,t){if(null!=e&&null!=t&&t.fields.length)if("startField"in e){const r=t.get(e.startField),n=t.get(e.endField)
e.startField=r&&r.name||null,e.endField=n&&n.name||null}else{const r=t.get(e.startTimeField),n=t.get(e.endTimeField)
e.startTimeField=r&&r.name||null,e.endTimeField=n&&n.name||null}}const b=new Set
function f(e,t){return e&&t?(b.clear(),y(b,e,t),Array.from(b).sort()):[]}function y(e,t,r){var n
if(r)if(null!=t&&null!=(n=t.fields)&&n.length)if(r.includes("*"))for(const{name:r}of t.fields)e.add(r)
else for(const n of r)m(e,t,n)
else{if(r.includes("*"))return e.clear(),void e.add("*")
for(const t of r)e.add(t)}}function m(e,t,r){if("string"==typeof r)if(t){const n=t.get(r)
n&&e.add(n.name)}else e.add(r)}function O(e,t){return Object(a.j)(t)||Object(a.j)(e)?[]:t.includes("*")?e.fields.map(e=>e.name):t}async function g(e,t,r){var n
if(!r)return
const{arcadeUtils:i}=await Object(l.e)(),s=i.extractFieldNames(r,null==t||null==(n=t.fields)?void 0:n.map(e=>e.name))
for(const r of s)m(e,t,r)}async function j(e,t,n){if(n&&"1=1"!==n){const i=(await Promise.all([r.e(9),r.e(381)]).then(r.bind(null,1263))).WhereClause.create(n,t)
if(!i.isStandardized)throw new s.a("fieldUtils:collectFilterFields","Where clause is not standardized")
y(e,t,i.fieldNames)}}function v({displayField:e,fields:t}){return e||(t&&t.length?w(t,"name-or-title")||w(t,"unique-identifier")||w(t,"type-or-category")||function(e){for(const t of e){if(!t||!t.name)continue
const e=t.name.toLowerCase()
if(e.indexOf("name")>-1||e.indexOf("title")>-1)return t.name}return null}(t):null)}function w(e,t){for(const r of e)if(r&&r.valueType&&r.valueType===t)return r.name
return null}async function S(e,t){if(!t)return
const r=Object(o.b)("elevationInfo.featureExpressionInfo",t)
return r?r.collectRequiredFields(e,t.fieldsIndex):void 0}async function x(e,t,r){var n,i
if(!t||!r||"cluster"!==r.type)return
const s=[]
if(null!=(n=r.popupTemplate)&&n.expressionInfos&&s.push(...r.popupTemplate.expressionInfos.map(r=>g(e,t.fieldsIndex,r.expression))),Array.isArray(null==(i=r.popupTemplate)?void 0:i.content)){const n=r.popupTemplate.content
for(const r of n)"expression"===r.type&&r.expressionInfo&&s.push(g(e,t.fieldsIndex,r.expressionInfo.expression))}r.fields&&s.push(...r.fields.map(r=>async function(e,t,r){r.outStatistic.onStatisticValueExpression?g(e,t,r.outStatistic.onStatisticValueExpression):e.add(r.outStatistic.onStatisticField)}(e,t.fieldsIndex,r))),await Promise.all(s)}async function _(e,t,r){t&&(t.timeInfo&&Object(a.k)(r)&&r.timeExtent&&y(e,t.fieldsIndex,[t.timeInfo.startField,t.timeInfo.endField]),t.floorInfo&&y(e,t.fieldsIndex,[t.floorInfo.floorField]),Object(a.k)(r)&&Object(a.k)(r.where)&&await j(e,t.fieldsIndex,r.where))}async function M(e,t,r){t&&r&&await Promise.all(r.map(r=>async function(e,t,r){t&&r&&(r.valueExpression?await g(e,t.fieldsIndex,r.valueExpression):r.field&&m(e,t.fieldsIndex,r.field))}(e,t,r)))}function I(e){if(!e)return[]
const t="editFieldsInfo"in e&&e.editFieldsInfo
return t?f(e.fieldsIndex,[t&&t.creatorField,t&&t.creationDateField,t&&t.editorField,t&&t.editDateField]):[]}async function T(e,t){const{labelingInfo:r,fieldsIndex:n}=t
r&&r.length&&await Promise.all(r.map(t=>async function(e,t,r){if(!r)return
const n=r.getLabelExpression(),i=r.where
if("arcade"===n.type)await g(e,t,n.expression)
else{const r=n.expression.match(/{[^}]*}/g)
r&&r.forEach(r=>{m(e,t,r.slice(1,-1))})}await j(e,t,i)}(e,n,t)))}function E(e){const t=e.defaultValue
return void 0!==t&&N(e,t)?t:e.nullable?null:void 0}function L(e){return"number"==typeof e&&!isNaN(e)&&isFinite(e)}function P(e){return null===e||L(e)}const A="isInteger"in Number?Number.isInteger:e=>"number"==typeof e&&isFinite(e)&&Math.floor(e)===e
function F(e){return null===e||A(e)}function C(e){return null!=e&&"string"==typeof e}function D(e){return null===e||C(e)}function R(){return!0}function N(e,t){let r
switch(e.type){case"date":case"integer":case"long":case"small-integer":case"esriFieldTypeDate":case"esriFieldTypeInteger":case"esriFieldTypeLong":case"esriFieldTypeSmallInteger":r=e.nullable?F:A
break
case"double":case"single":case"esriFieldTypeSingle":case"esriFieldTypeDouble":r=e.nullable?P:L
break
case"string":case"esriFieldTypeString":r=e.nullable?D:C
break
default:r=R}return 1===arguments.length?r:r(t)}const k=["integer","small-integer","single","double"],V=new Set([...k,"esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble"])
function U(e){return null!=e&&V.has(e.type)}function q(e){return null!=e&&("string"===e.type||"esriFieldTypeString"===e.type)}function z(e){return null!=e&&("date"===e.type||"esriFieldTypeDate"===e.type)}var G,B
function $(e){return null==e||"number"==typeof e&&isNaN(e)?null:e}function J(e,t){return e.nullable&&null===t?null:U(e)&&!function(e,t){const r="string"==typeof e?H(e):e
return!!r&&(r.isInteger?A(t)&&t>=r.min&&t<=r.max:t>=r.min&&t<=r.max)}(e.type,Number(t))?G.OUT_OF_RANGE:N(e,t)?e.domain?function(e,t){switch(e.type){case"range":{const r="range"in e?e.range[0]:e.minValue,i="range"in e?e.range[1]:e.maxValue
if(+t<r||+t>i)return n.VALUE_OUT_OF_RANGE
break}case"coded-value":case"codedValue":if(null==e.codedValues||e.codedValues.every(e=>null==e||e.code!==t))return n.INVALID_CODED_VALUE}return null}(e.domain,t):null:B.INVALID_TYPE}function H(e){switch(e){case"esriFieldTypeSmallInteger":case"small-integer":return W
case"esriFieldTypeInteger":case"integer":return Q
case"esriFieldTypeSingle":case"single":return Y
case"esriFieldTypeDouble":case"double":return K}}!function(e){e.OUT_OF_RANGE="numeric-range-validation-error::out-of-range"}(G||(G={})),function(e){e.INVALID_TYPE="type-validation-error::invalid-type"}(B||(B={}))
const W={min:-32768,max:32767,isInteger:!0},Q={min:-2147483648,max:2147483647,isInteger:!0},Y={min:-34e37,max:12e37,isInteger:!1},K={min:-Number.MAX_VALUE,max:Number.MAX_VALUE,isInteger:!1}
function Z(e,t,r){switch(e){case n.INVALID_CODED_VALUE:return`Value ${r} is not in the coded domain - field: ${t.name}, domain: ${JSON.stringify(t.domain)}`
case n.VALUE_OUT_OF_RANGE:return`Value ${r} is out of the range of valid values - field: ${t.name}, domain: ${JSON.stringify(t.domain)}`
case B.INVALID_TYPE:return`Value ${r} is not a valid value for the field type - field: ${t.name}, type: ${t.type}, nullable: ${t.nullable}`
case G.OUT_OF_RANGE:{const{min:e,max:n}=H(t.type)
return`Value ${r} is out of range for the number type - field: ${t.name}, type: ${t.type}, value range is ${e} to ${n}`}}}function X(e,t){return!ee(e,t,null)}function ee(e,t,r){if(!t||!t.attributes||!e){if(Object(a.k)(r))for(const t of e)r.add(t)
return!0}const n=t.attributes
let i=!1
for(const t of e)if(!(t in n)){if(i=!0,!Object(a.k)(r))break
r.add(t)}return i}},883:function(e,t,r){"use strict"
r.d(t,"a",(function(){return y}))
var n,i=r(856),s=r(178),a=r(858),o=(r(859),r(857)),l=r(864),c=r(658),u=r(875),d=r(866),p=r(659),h=r(929),b=r(909)
let f=n=class extends u.a{constructor(...e){super(...e),this.paths=[],this.type="polyline"}normalizeCtorArgs(e,t){let r,n,i=null,s=null
return e&&!Array.isArray(e)?(i=e.paths?e.paths:null,t||(e.spatialReference?t=e.spatialReference:e.paths||(t=e)),r=e.hasZ,n=e.hasM):i=e,i=i||[],t=t||p.default.WGS84,i.length&&i[0]&&null!=i[0][0]&&"number"==typeof i[0][0]&&(i=[i]),s=i[0]&&i[0][0],s&&(void 0===r&&void 0===n?(r=s.length>2,n=!1):void 0===r?r=!n&&s.length>3:void 0===n&&(n=!r&&s.length>3)),{paths:i,spatialReference:t,hasZ:r,hasM:n}}get cache(){return this.commitProperty("paths"),this.commitProperty("hasZ"),this.commitProperty("hasM"),this.commitProperty("spatialReference"),{}}get extent(){const{spatialReference:e}=this,t=Object(h.c)(this)
if(!t)return null
const r=new c.default(t)
return r.spatialReference=e,r}writePaths(e,t){t.paths=Object(s.a)(this.paths)}addPath(e){if(!e)return
const t=this.paths,r=t.length
if(function(e){return!Array.isArray(e[0])}(e)){const n=[]
for(let t=0,r=e.length;t<r;t++)n[t]=e[t].toArray()
t[r]=n}else t[r]=e.concat()
return this.notifyChange("paths"),this}clone(){const e=new n
return e.spatialReference=this.spatialReference,e.paths=Object(s.a)(this.paths),e.hasZ=this.hasZ,e.hasM=this.hasM,e}getPoint(e,t){if(!this._validateInputs(e,t))return null
const r=this.paths[e][t],n=this.hasZ,i=this.hasM
return n&&!i?new d.a(r[0],r[1],r[2],void 0,this.spatialReference):i&&!n?new d.a(r[0],r[1],void 0,r[2],this.spatialReference):n&&i?new d.a(r[0],r[1],r[2],r[3],this.spatialReference):new d.a(r[0],r[1],this.spatialReference)}insertPoint(e,t,r){return this._validateInputs(e,t,!0)?(Object(b.a)(this,r),Array.isArray(r)||(r=r.toArray()),this.paths[e].splice(t,0,r),this.notifyChange("paths"),this):this}removePath(e){if(!this._validateInputs(e,null))return null
const t=this.paths.splice(e,1)[0],r=this.spatialReference,n=t.map(e=>new d.a(e,r))
return this.notifyChange("paths"),n}removePoint(e,t){if(!this._validateInputs(e,t))return null
const r=new d.a(this.paths[e].splice(t,1)[0],this.spatialReference)
return this.notifyChange("paths"),r}setPoint(e,t,r){return this._validateInputs(e,t)?(Object(b.a)(this,r),Array.isArray(r)||(r=r.toArray()),this.paths[e][t]=r,this.notifyChange("paths"),this):this}_validateInputs(e,t,r=!1){if(null==e||e<0||e>=this.paths.length)return!1
if(null!=t){const n=this.paths[e]
if(r&&(t<0||t>n.length))return!1
if(!r&&(t<0||t>=n.length))return!1}return!0}toJSON(e){return this.write({},e)}}
Object(i.a)([Object(a.b)({readOnly:!0})],f.prototype,"cache",null),Object(i.a)([Object(a.b)({readOnly:!0})],f.prototype,"extent",null),Object(i.a)([Object(a.b)({type:[[[Number]]],json:{write:{isRequired:!0}}})],f.prototype,"paths",void 0),Object(i.a)([Object(l.a)("paths")],f.prototype,"writePaths",null),f=n=Object(i.a)([Object(o.a)("esri.geometry.Polyline")],f),f.prototype.toJSON.isDefaultToJSON=!0
const y=f},884:function(e,t,r){"use strict"
r.d(t,"a",(function(){return R})),r.d(t,"b",(function(){return D})),r.d(t,"c",(function(){return f})),r.d(t,"d",(function(){return O})),r.d(t,"e",(function(){return g})),r.d(t,"f",(function(){return o})),r.d(t,"g",(function(){return I})),r.d(t,"h",(function(){return j})),r.d(t,"i",(function(){return S})),r.d(t,"j",(function(){return _})),r.d(t,"k",(function(){return x})),r.d(t,"l",(function(){return l})),r.d(t,"m",(function(){return a})),r.d(t,"n",(function(){return E})),r.d(t,"o",(function(){return P})),r.d(t,"p",(function(){return C})),r.d(t,"q",(function(){return h})),r.d(t,"r",(function(){return p})),r.d(t,"s",(function(){return b})),r.d(t,"t",(function(){return u})),r.d(t,"u",(function(){return c})),r.d(t,"v",(function(){return m})),r.d(t,"w",(function(){return T})),r.d(t,"x",(function(){return M})),r.d(t,"y",(function(){return w})),r.d(t,"z",(function(){return v})),r.d(t,"A",(function(){return F})),r.d(t,"B",(function(){return L})),r.d(t,"C",(function(){return d})),r.d(t,"D",(function(){return y}))
r(77)
var n=r(874),i=r(20),s=r(658)
function a(e=N){return[e[0],e[1],e[2],e[3]]}function o(e){return[e[0],e[1],e[2],e[3]]}function l(e,t){return e!==t&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3]),e}function c(e,t,r,n,i=a()){return i[0]=e,i[1]=t,i[2]=r,i[3]=n,i}function u(e,t=a()){return t[0]=e.xmin,t[1]=e.ymin,t[2]=e.xmax,t[3]=e.ymax,t}function d(e,t){return new s.default({xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:t})}function p(e,t){t[0]<e[0]&&(e[0]=t[0]),t[0]>e[2]&&(e[2]=t[0]),t[1]<e[1]&&(e[1]=t[1]),t[1]>e[3]&&(e[3]=t[1])}function h(e,t,r){if(Object(i.j)(t))l(r,e)
else if("length"in t)A(t)?(r[0]=Math.min(e[0],t[0]),r[1]=Math.min(e[1],t[1]),r[2]=Math.max(e[2],t[2]),r[3]=Math.max(e[3],t[3])):2!==t.length&&3!==t.length||(r[0]=Math.min(e[0],t[0]),r[1]=Math.min(e[1],t[1]),r[2]=Math.max(e[2],t[0]),r[3]=Math.max(e[3],t[1]))
else switch(t.type){case"extent":r[0]=Math.min(e[0],t.xmin),r[1]=Math.min(e[1],t.ymin),r[2]=Math.max(e[2],t.xmax),r[3]=Math.max(e[3],t.ymax)
break
case"point":r[0]=Math.min(e[0],t.x),r[1]=Math.min(e[1],t.y),r[2]=Math.max(e[2],t.x),r[3]=Math.max(e[3],t.y)}}function b(e,t,r=e){const n=t.length
let i=e[0],s=e[1],a=e[2],o=e[3]
for(let e=0;e<n;e++){const r=t[e]
i=Math.min(i,r[0]),s=Math.min(s,r[1]),a=Math.max(a,r[0]),o=Math.max(o,r[1])}return r[0]=i,r[1]=s,r[2]=a,r[3]=o,r}function f(e){for(let t=0;t<4;t++)if(!isFinite(e[t]))return!1
return!0}function y(e){return Object(i.j)(e)||e[0]>=e[2]?0:e[2]-e[0]}function m(e){return e[1]>=e[3]?0:e[3]-e[1]}function O(e){return y(e)*m(e)}function g(e,t=[0,0]){return t[0]=(e[0]+e[2])/2,t[1]=(e[1]+e[3])/2,t}function j(e,t){return x(e,t[0],t[1])}function v(e,t){const r=t[3],n=.5*(e[0]+e[2]),i=Math.abs(t[0]-n),s=.5*(e[2]-e[0])
if(i>r+s)return!1
const a=.5*(e[1]+e[3]),o=.5*(e[3]-e[1]),l=Math.abs(t[1]-a)
if(l>r+o)return!1
if(i<s||l<o)return!0
const c=i-s,u=l-o
return c*c+u*u<=r*r}function w(e,t,r){const n=e[0],i=e[1],s=e[2],a=e[3],{x:o,y:l}=t,{x:c,y:u}=r,d=(e,t)=>(u-l)*e+(o-c)*t+(c*l-o*u)<0,p=d(n,a),h=d(s,a),b=d(s,i),f=d(n,i)
return!(p===h&&h===b&&b===f&&f===p||o<n&&c<n||o>s&&c>s||l>a&&u>a||l<i&&u<i)}function S(e,t){return x(e,t.x,t.y)}function x(e,t,r){return t>=e[0]&&r>=e[1]&&t<=e[2]&&r<=e[3]}function _(e,t,r){return t[0]>=e[0]-r&&t[1]>=e[1]-r&&t[0]<=e[2]+r&&t[1]<=e[3]+r}function M(e,t){return Math.max(t[0],e[0])<=Math.min(t[2],e[2])&&Math.max(t[1],e[1])<=Math.min(t[3],e[3])}function I(e,t){return t[0]>=e[0]&&t[2]<=e[2]&&t[1]>=e[1]&&t[3]<=e[3]}function T(e,t,r){if(Object(i.j)(t))return l(r,e)
const s=t[0],a=t[1],o=t[2],c=t[3]
return r[0]=Object(n.f)(e[0],s,o),r[1]=Object(n.f)(e[1],a,c),r[2]=Object(n.f)(e[2],s,o),r[3]=Object(n.f)(e[3],a,c),r}function E(e,t){const r=(e[0]+e[2])/2,n=(e[1]+e[3])/2,i=Math.max(Math.abs(t[0]-r)-y(e)/2,0),s=Math.max(Math.abs(t[1]-n)-m(e)/2,0)
return Math.sqrt(i*i+s*s)}function L(e,t,r,n=e){return n[0]=e[0]+t,n[1]=e[1]+r,n[2]=e[2]+t,n[3]=e[3]+r,n}function P(e){return e?l(e,R):a(R)}function A(e){return null!=e&&4===e.length}function F(e){return!(0!==y(e)&&isFinite(e[0])||0!==m(e)&&isFinite(e[1]))}function C(e,t){return A(e)&&A(t)?e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]:e===t}const D=[-1/0,-1/0,1/0,1/0],R=[1/0,1/0,-1/0,-1/0],N=[0,0,0,0]},885:function(e,t,r){"use strict"
r.d(t,"a",(function(){return u}))
var n=r(856),i=r(862),s=r(878),a=r(20),o=r(858),l=r(857)
let c=class extends i.a{constructor(e){super(e),this._groups=new Map}destroy(){this.removeAll()}get size(){let e=0
return this._groups.forEach(t=>{e+=t.length}),e}add(e,t){if(!this._isHandle(e)&&!Array.isArray(e)&&!s.a.isCollection(e))return this
const r=this._getOrCreateGroup(t)
return Array.isArray(e)||s.a.isCollection(e)?e.forEach(e=>this._isHandle(e)&&r.push(e)):r.push(e),this.notifyChange("size"),this}forEach(e,t){if("function"==typeof e)this._groups.forEach(t=>t.forEach(e))
else{const r=this._getGroup(e)
r&&t&&r.forEach(t)}}has(e){return this._groups.has(this._ensureGroupKey(e))}remove(e){if(Array.isArray(e)||s.a.isCollection(e))return e.forEach(this.remove,this),this
if(!this.has(e))return this
const t=this._getGroup(e)
for(let e=0;e<t.length;e++)t[e].remove()
return this._deleteGroup(e),this.notifyChange("size"),this}removeAll(){return this._groups.forEach(e=>{for(let t=0;t<e.length;t++)e[t].remove()}),this._groups.clear(),this.notifyChange("size"),this}_isHandle(e){return e&&!!e.remove}_getOrCreateGroup(e){if(this.has(e))return this._getGroup(e)
const t=[]
return this._groups.set(this._ensureGroupKey(e),t),t}_getGroup(e){return Object(a.c)(this._groups.get(this._ensureGroupKey(e)))}_deleteGroup(e){return this._groups.delete(this._ensureGroupKey(e))}_ensureGroupKey(e){return e||"_default_"}}
Object(n.a)([Object(o.b)({readOnly:!0})],c.prototype,"size",null),c=Object(n.a)([Object(l.a)("esri.core.Handles")],c)
const u=c},886:function(e,t,r){"use strict"
r.d(t,"a",(function(){return $})),r.d(t,"b",(function(){return w})),r.d(t,"c",(function(){return x})),r.d(t,"d",(function(){return z})),r.d(t,"e",(function(){return R})),r.d(t,"f",(function(){return D})),r.d(t,"g",(function(){return F})),r.d(t,"h",(function(){return V})),r.d(t,"i",(function(){return C})),r.d(t,"j",(function(){return u})),r.d(t,"k",(function(){return S})),r.d(t,"l",(function(){return P})),r.d(t,"m",(function(){return J})),r.d(t,"n",(function(){return L})),r.d(t,"o",(function(){return I})),r.d(t,"p",(function(){return T})),r.d(t,"q",(function(){return E})),r.d(t,"r",(function(){return _})),r.d(t,"s",(function(){return M})),r.d(t,"t",(function(){return A})),r.d(t,"u",(function(){return v})),r(77)
var n=r(863),i=r(20),s=r(915),a=r(659),o=r(902),l=r(872),c=r(1027)
const u=39.37,d=o.a.radius*Math.PI/200,p=/UNIT\[([^\]]+)\]\]$/i,h=c.a,b=/UNIT\[([^\]]+)\]/i,f=new Set([4261,4305,4807,4810,4811,4812,4816,4819,4821,4901,4902,37225,104139,104140]),y=Object(n.b)()({meter:"meters",foot:"feet",foot_us:"us-feet",foot_clarke:"clarke-feet",yard_clarke:"clarke-yards",link_clarke:"clarke-links",yard_sears:"sears-yards",foot_sears:"sears-feet",chain_sears:"sears-chains",chain_benoit_1895_b:"benoit-1895-b-chains",yard_indian:"indian-yards",yard_indian_1937:"indian-1937-yards",foot_gold_coast:"gold-coast-feet",chain_sears_1922_truncated:"sears-1922-truncated-chains","50_kilometers":"50-kilometers","150_kilometers":"150-kilometers"}),m=e=>e*e,O=e=>e*e*e,g={length:{baseUnit:"meters",units:{millimeters:{inBaseUnits:.001},centimeters:{inBaseUnits:.01},decimeters:{inBaseUnits:.1},meters:{inBaseUnits:1},kilometers:{inBaseUnits:1e3},inches:{inBaseUnits:.0254},feet:{inBaseUnits:.3048},yards:{inBaseUnits:.9144},miles:{inBaseUnits:1609.344},"nautical-miles":{inBaseUnits:1852},"us-feet":{inBaseUnits:1200/3937}}},area:{baseUnit:"square-meters",units:{"square-millimeters":{inBaseUnits:m(.001)},"square-centimeters":{inBaseUnits:m(.01)},"square-decimeters":{inBaseUnits:m(.1)},"square-meters":{inBaseUnits:1},"square-kilometers":{inBaseUnits:m(1e3)},"square-inches":{inBaseUnits:m(.0254)},"square-feet":{inBaseUnits:m(.3048)},"square-yards":{inBaseUnits:m(.9144)},"square-miles":{inBaseUnits:m(1609.344)},"square-us-feet":{inBaseUnits:m(1200/3937)},acres:{inBaseUnits:.0015625*m(1609.344)},ares:{inBaseUnits:100},hectares:{inBaseUnits:1e4}}},volume:{baseUnit:"liters",units:{liters:{inBaseUnits:1},"cubic-millimeters":{inBaseUnits:1e3*O(.001)},"cubic-centimeters":{inBaseUnits:1e3*O(.01)},"cubic-decimeters":{inBaseUnits:1e3*O(.1)},"cubic-meters":{inBaseUnits:1e3},"cubic-kilometers":{inBaseUnits:1e3*O(1e3)},"cubic-inches":{inBaseUnits:1e3*O(.0254)},"cubic-feet":{inBaseUnits:1e3*O(.3048)},"cubic-yards":{inBaseUnits:1e3*O(.9144)},"cubic-miles":{inBaseUnits:1e3*O(1609.344)}}},angle:{baseUnit:"radians",units:{radians:{inBaseUnits:1},degrees:{inBaseUnits:Math.PI/180}}}},j=function(){const e={}
for(const t in g)for(const r in g[t].units)e[r]=t
return e}()
function v(e){const t=j[e]
if(t)return t
throw new Error("unknown type")}function w(e){return function(e){return g[e].baseUnit}(v(e))}function S(e,t=null){return t=t||v(e),g[t].baseUnit===e}function x(e,t,r){if(t===r)return e
const n=v(t)
if(n!==v(r))throw new Error("incompatible units")
const i=S(t,n)?e:function(e,t,r){return e*g[r].units[t].inBaseUnits}(e,t,n)
return S(r,n)?i:function(e,t,r){return e/g[r].units[t].inBaseUnits}(i,r,n)}function _(e,t){return x(e,t,"meters")<3e3?"meters":"kilometers"}function M(e,t){return x(e,t,"meters")<1e5?"meters":"kilometers"}function I(e,t){return x(e,t,"feet")<1e3?"feet":"miles"}function T(e,t){return x(e,t,"feet")<1e5?"feet":"miles"}function E(e,t){return x(e,t,"square-meters")<3e6?"square-meters":"square-kilometers"}function L(e,t){return x(e,t,"square-feet")<1e6?"square-feet":"square-miles"}function P(e,t,r){return x(e,t,"meters")/(r*Math.PI/180)}function A(e){return y.fromJSON(e.toLowerCase())||null}function F(e){if(e&&"object"==typeof e&&!Object(l.g)(e))return 1
const t=D(e)
return t>1e5?1:t}function C(e){return D(e)>=(e instanceof a.default?Object(s.e)(e).metersPerDegree:1e5)?"meters":V(e)}function D(e,t=o.a.metersPerDegree){return R(e,!0)||t}function R(e,t=!1){let r,n,i=null
if(null!=e&&("object"==typeof e?(r=e.wkid,n=e.wkt):"number"==typeof e?r=e:"string"==typeof e&&(n=e)),r){if(Object(l.n)(r))return o.b.metersPerDegree
if(Object(l.o)(r))return o.c.metersPerDegree
i=h.values[h[r]],!i&&t&&f.has(r)&&(i=d)}else n&&(q(n)?i=N(p.exec(n),i):U(n)&&(i=N(b.exec(n),i)))
return i}function N(e,t){return e&&e[1]?k(e[1]):t}function k(e){return parseFloat(e.split(",")[1])}function V(e){let t,r,n=null
if(null!=e&&("object"==typeof e?(t=e.wkid,r=e.wkt):"number"==typeof e?t=e:"string"==typeof e&&(r=e)),t)n=h.units[h[t]]
else if(r){const e=q(r)?p:U(r)?b:null
if(e){const t=e.exec(r)
t&&t[1]&&(n=function(e){const t=/[\\"\\']{1}([^\\"\\']+)/.exec(e)
let r=t&&t[1]
if(!r||-1===h.units.indexOf(r)){const t=k(e)
r=null
const n=h.values
for(let e=0;e<n.length;++e)if(Math.abs(t-n[e])<1e-7){r=h.units[e]
break}}return r}(t[1]))}}return Object(i.k)(n)?A(n):null}function U(e){return/^GEOCCS/i.test(e)}function q(e){return/^PROJCS/i.test(e)}function z(e){if(!e)return null
switch(V(e)){case"feet":case"us-feet":case"clarke-feet":case"clarke-yards":case"clarke-links":case"sears-yards":case"sears-feet":case"sears-chains":case"benoit-1895-b-chains":case"indian-yards":case"indian-1937-yards":case"gold-coast-feet":case"sears-1922-truncated-chains":return"imperial"
case"50-kilometers":case"150-kilometers":case"meters":return"metric"
case null:case void 0:return null}return null}const G={esriAcres:"acres",esriAres:"ares",esriHectares:"hectares",esriSquareCentimeters:"square-centimeters",esriSquareDecimeters:"square-decimeters",esriSquareFeet:"square-feet",esriSquareInches:"square-inches",esriSquareKilometers:"square-kilometers",esriSquareMeters:"square-meters",esriSquareMiles:"square-miles",esriSquareMillimeters:"square-millimeters",esriSquareUsFeet:"square-us-feet",esriSquareYards:"square-yards"},B={esriCentimeters:"centimeters",esriDecimeters:"decimeters",esriFeet:"feet",esriInches:"inches",esriKilometers:"kilometers",esriMeters:"meters",esriMiles:"miles",esriMillimeters:"millimeters",esriNauticalMiles:"nautical-miles",esriYards:"yards"},$=Object(n.b)()(G),J=Object(n.b)()(B)
Object(n.b)()({...G,...B})},888:function(e,t,r){"use strict"
r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return a}))
var n=r(863)
function i(e){return"point"===e||"multipoint"===e||"polyline"===e||"polygon"===e}const s=Object(n.b)()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon"}),a=Object(n.b)()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh"})},889:function(e,t,r){"use strict"
r.d(t,"a",(function(){return f}))
var n,i=r(856),s=r(178),a=r(858),o=(r(859),r(857)),l=r(864),c=r(658),u=r(875),d=r(866),p=r(909)
function h(e){return(t,r)=>null==t?r:null==r?t:e(t,r)}let b=n=class extends u.a{constructor(...e){super(...e),this.points=[],this.type="multipoint"}normalizeCtorArgs(e,t){if(!e&&!t)return null
const r={}
Array.isArray(e)?(r.points=e,r.spatialReference=t):function(e){return e&&("esri.geometry.SpatialReference"===e.declaredClass||null!=e.wkid)}(e)?r.spatialReference=e:(e.points&&(r.points=e.points),e.spatialReference&&(r.spatialReference=e.spatialReference),e.hasZ&&(r.hasZ=e.hasZ),e.hasM&&(r.hasM=e.hasM))
const n=r.points&&r.points[0]
return n&&(void 0===r.hasZ&&void 0===r.hasM?(r.hasZ=n.length>2,r.hasM=!1):void 0===r.hasZ?r.hasZ=n.length>3:void 0===r.hasM&&(r.hasM=n.length>3)),r}get cache(){return this.commitProperty("points"),this.commitProperty("hasZ"),this.commitProperty("hasM"),this.commitProperty("spatialReference"),{}}get extent(){const e=this.points
if(!e.length)return null
const t=new c.default,r=this.hasZ,n=this.hasM,i=r?3:2,s=e[0],a=h(Math.min),o=h(Math.max)
let l,u,d,p,[b,f]=s,[y,m]=s
for(let t=0,s=e.length;t<s;t++){const s=e[t],[c,h]=s
if(b=a(b,c),f=a(f,h),y=o(y,c),m=o(m,h),r&&s.length>2){const e=s[2]
l=a(l,e),d=o(d,e)}if(n&&s.length>i){const e=s[i]
u=a(u,e),p=o(p,e)}}return t.xmin=b,t.ymin=f,t.xmax=y,t.ymax=m,t.spatialReference=this.spatialReference,r?(t.zmin=l,t.zmax=d):(t.zmin=null,t.zmax=null),n?(t.mmin=u,t.mmax=p):(t.mmin=null,t.mmax=null),t}writePoints(e,t){t.points=Object(s.a)(this.points)}addPoint(e){return Object(p.a)(this,e),Array.isArray(e)?this.points.push(e):this.points.push(e.toArray()),this.notifyChange("points"),this}clone(){const e={points:Object(s.a)(this.points),spatialReference:this.spatialReference}
return this.hasZ&&(e.hasZ=!0),this.hasM&&(e.hasM=!0),new n(e)}getPoint(e){if(!this._validateInputs(e))return null
const t=this.points[e],r={x:t[0],y:t[1],spatialReference:this.spatialReference}
let n=2
return this.hasZ&&(r.z=t[2],n=3),this.hasM&&(r.m=t[n]),new d.a(r)}removePoint(e){if(!this._validateInputs(e))return null
const t=new d.a(this.points.splice(e,1)[0],this.spatialReference)
return this.notifyChange("points"),t}setPoint(e,t){return this._validateInputs(e)?(Object(p.a)(this,t),Array.isArray(t)||(t=t.toArray()),this.points[e]=t,this.notifyChange("points"),this):this}toJSON(e){return this.write({},e)}_validateInputs(e){return null!=e&&e>=0&&e<this.points.length}}
Object(i.a)([Object(a.b)({readOnly:!0})],b.prototype,"cache",null),Object(i.a)([Object(a.b)()],b.prototype,"extent",null),Object(i.a)([Object(a.b)({type:[[Number]],json:{write:{isRequired:!0}}})],b.prototype,"points",void 0),Object(i.a)([Object(l.a)("points")],b.prototype,"writePoints",null),b=n=Object(i.a)([Object(o.a)("esri.geometry.Multipoint")],b),b.prototype.toJSON.isDefaultToJSON=!0
const f=b},892:function(e,t,r){"use strict"
r.d(t,"a",(function(){return y})),r.d(t,"b",(function(){return d})),r.d(t,"c",(function(){return f})),r.d(t,"d",(function(){return m})),r.d(t,"e",(function(){return l})),r.d(t,"f",(function(){return c})),r.d(t,"g",(function(){return p}))
var n=r(932),i=r(923),s=r(20),a=r(861),o=r(1007)
function l(e,t,r={}){return u(e,t,r,h)}function c(e,t,r={}){return u(e,t,r,b)}function u(e,t,r={},n){let i=null
const a=r.once?(e,r)=>{n(e)&&(Object(s.s)(i),t(e,r))}:(e,r)=>{n(e)&&t(e,r)}
if(i=Object(o.e)(e,a,r.sync,r.equals),r.initial){const t=e()
a(t,t)}return i}function d(e,t,r,a={}){let o=null,c=null,u=null
function d(){o&&c&&(c.remove(),null==a.onListenerRemove||a.onListenerRemove(o),o=null,c=null)}function p(e){a.once&&a.once&&Object(s.s)(u),r(e)}const h=l(e,(e,r)=>{d(),Object(n.b)(e)&&(o=e,c=Object(n.c)(e,t,p),null==a.onListenerAdd||a.onListenerAdd(e))},{sync:a.sync,initial:!0})
return u=Object(i.c)(()=>{h.remove(),d()}),u}function p(e,t){return function(e,t,r){if(Object(a.n)(r))return Promise.reject(Object(a.e)())
const n=e()
if(null!=t&&t(n))return Promise.resolve(n)
let o=null
function l(){o=Object(s.s)(o)}return new Promise((n,s)=>{o=Object(i.b)([Object(a.q)(r,()=>{l(),s(Object(a.e)())}),u(e,e=>{l(),n(e)},{sync:!1,once:!0},null!=t?t:h)])})}(e,b,t)}function h(e){return!0}function b(e){return!!e}r(958)
const f={sync:!0},y={initial:!0},m={sync:!0,initial:!0}},893:function(e,t,r){"use strict"
r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return o}))
const n=1e-6,i=Math.random,s=Math.PI/180,a=180/Math.PI
function o(e){return e*s}Object.freeze({__proto__:null,EPSILON:n,RANDOM:i,toRadian:o,toDegree:function(e){return e*a},equals:function(e,t){return Math.abs(e-t)<=n*Math.max(1,Math.abs(e),Math.abs(t))}})},894:function(e,t,r){"use strict"
r.d(t,"a",(function(){return f}))
var n,i=r(856),s=r(860),a=r(20),o=r(934),l=r(858),c=(r(353),r(77),r(859),r(865)),u=r(857),d=r(864)
let p=n=class extends s.a{constructor(e){super(e),this.end=null,this.start=null}static get allTime(){return h}static get empty(){return b}readEnd(e,t){return null!=t.end?new Date(t.end):null}writeEnd(e,t){t.end=e?e.getTime():null}get isAllTime(){return this.equals(n.allTime)}get isEmpty(){return this.equals(n.empty)}readStart(e,t){return null!=t.start?new Date(t.start):null}writeStart(e,t){t.start=e?e.getTime():null}clone(){return new n({end:this.end,start:this.start})}equals(e){if(!e)return!1
const t=Object(a.k)(this.start)?this.start.getTime():this.start,r=Object(a.k)(this.end)?this.end.getTime():this.end,n=Object(a.k)(e.start)?e.start.getTime():e.start,i=Object(a.k)(e.end)?e.end.getTime():e.end
return t===n&&r===i}expandTo(e){if(this.isEmpty||this.isAllTime)return this.clone()
const t=Object(a.b)(this.start,t=>Object(o.c)(t,e)),r=Object(a.b)(this.end,t=>Object(o.b)(Object(o.c)(t,e),1,e))
return new n({start:t,end:r})}intersection(e){if(!e)return this.clone()
if(this.isEmpty||e.isEmpty)return n.empty
if(this.isAllTime)return e.clone()
if(e.isAllTime)return this.clone()
const t=Object(a.n)(this.start,-1/0,e=>e.getTime()),r=Object(a.n)(this.end,1/0,e=>e.getTime()),i=Object(a.n)(e.start,-1/0,e=>e.getTime()),s=Object(a.n)(e.end,1/0,e=>e.getTime())
let o,l
if(i>=t&&i<=r?o=i:t>=i&&t<=s&&(o=t),r>=i&&r<=s?l=r:s>=t&&s<=r&&(l=s),!isNaN(o)&&!isNaN(l)){const e=new n
return e.start=o===-1/0?null:new Date(o),e.end=l===1/0?null:new Date(l),e}return n.empty}offset(e,t){if(this.isEmpty||this.isAllTime)return this.clone()
const r=new n,{start:i,end:s}=this
return Object(a.k)(i)&&(r.start=Object(o.b)(i,e,t)),Object(a.k)(s)&&(r.end=Object(o.b)(s,e,t)),r}union(e){if(!e||e.isEmpty)return this.clone()
if(this.isEmpty)return e.clone()
if(this.isAllTime||e.isAllTime)return h.clone()
const t=Object(a.k)(this.start)&&Object(a.k)(e.start)?new Date(Math.min(this.start.getTime(),e.start.getTime())):null,r=Object(a.k)(this.end)&&Object(a.k)(e.end)?new Date(Math.max(this.end.getTime(),e.end.getTime())):null
return new n({start:t,end:r})}}
Object(i.a)([Object(l.b)({type:Date,json:{write:{allowNull:!0}}})],p.prototype,"end",void 0),Object(i.a)([Object(c.a)("end")],p.prototype,"readEnd",null),Object(i.a)([Object(d.a)("end")],p.prototype,"writeEnd",null),Object(i.a)([Object(l.b)({readOnly:!0,json:{read:!1}})],p.prototype,"isAllTime",null),Object(i.a)([Object(l.b)({readOnly:!0,json:{read:!1}})],p.prototype,"isEmpty",null),Object(i.a)([Object(l.b)({type:Date,json:{write:{allowNull:!0}}})],p.prototype,"start",void 0),Object(i.a)([Object(c.a)("start")],p.prototype,"readStart",null),Object(i.a)([Object(d.a)("start")],p.prototype,"writeStart",null),p=n=Object(i.a)([Object(u.a)("esri.TimeExtent")],p)
const h=new p,b=new p({start:void 0,end:void 0}),f=p},896:function(e,t,r){"use strict"
r.d(t,"a",(function(){return x})),r.d(t,"b",(function(){return c})),r.d(t,"c",(function(){return v})),r.d(t,"d",(function(){return s})),r.d(t,"e",(function(){return g})),r.d(t,"f",(function(){return h})),r.d(t,"g",(function(){return m})),r.d(t,"h",(function(){return y})),r.d(t,"i",(function(){return p})),r.d(t,"j",(function(){return o})),r.d(t,"k",(function(){return d})),r.d(t,"l",(function(){return _})),r.d(t,"m",(function(){return M})),r.d(t,"n",(function(){return u})),r.d(t,"o",(function(){return T})),r.d(t,"p",(function(){return f})),r.d(t,"q",(function(){return F})),r.d(t,"r",(function(){return I})),r.d(t,"s",(function(){return b})),r.d(t,"t",(function(){return a})),r.d(t,"u",(function(){return l})),r.d(t,"v",(function(){return O})),r.d(t,"w",(function(){return A})),r.d(t,"x",(function(){return P})),r.d(t,"y",(function(){return E})),r.d(t,"z",(function(){return j}))
var n=r(867),i=r(893)
function s(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function a(e,t,r,n,i,s,a,o,l,c,u,d,p,h,b,f,y){return e[0]=t,e[1]=r,e[2]=n,e[3]=i,e[4]=s,e[5]=a,e[6]=o,e[7]=l,e[8]=c,e[9]=u,e[10]=d,e[11]=p,e[12]=h,e[13]=b,e[14]=f,e[15]=y,e}function o(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function l(e,t){if(e===t){const r=t[1],n=t[2],i=t[3],s=t[6],a=t[7],o=t[11]
e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=r,e[6]=t[9],e[7]=t[13],e[8]=n,e[9]=s,e[11]=t[14],e[12]=i,e[13]=a,e[14]=o}else e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15]
return e}function c(e,t){const r=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],p=t[10],h=t[11],b=t[12],f=t[13],y=t[14],m=t[15],O=r*o-n*a,g=r*l-i*a,j=r*c-s*a,v=n*l-i*o,w=n*c-s*o,S=i*c-s*l,x=u*f-d*b,_=u*y-p*b,M=u*m-h*b,I=d*y-p*f,T=d*m-h*f,E=p*m-h*y
let L=O*E-g*T+j*I+v*M-w*_+S*x
return L?(L=1/L,e[0]=(o*E-l*T+c*I)*L,e[1]=(i*T-n*E-s*I)*L,e[2]=(f*S-y*w+m*v)*L,e[3]=(p*w-d*S-h*v)*L,e[4]=(l*M-a*E-c*_)*L,e[5]=(r*E-i*M+s*_)*L,e[6]=(y*j-b*S-m*g)*L,e[7]=(u*S-p*j+h*g)*L,e[8]=(a*T-o*M+c*x)*L,e[9]=(n*M-r*T-s*x)*L,e[10]=(b*w-f*j+m*O)*L,e[11]=(d*j-u*w-h*O)*L,e[12]=(o*_-a*I-l*x)*L,e[13]=(r*I-n*_+i*x)*L,e[14]=(f*g-b*v-y*O)*L,e[15]=(u*v-d*g+p*O)*L,e):null}function u(e,t,r){const n=t[0],i=t[1],s=t[2],a=t[3],o=t[4],l=t[5],c=t[6],u=t[7],d=t[8],p=t[9],h=t[10],b=t[11],f=t[12],y=t[13],m=t[14],O=t[15]
let g=r[0],j=r[1],v=r[2],w=r[3]
return e[0]=g*n+j*o+v*d+w*f,e[1]=g*i+j*l+v*p+w*y,e[2]=g*s+j*c+v*h+w*m,e[3]=g*a+j*u+v*b+w*O,g=r[4],j=r[5],v=r[6],w=r[7],e[4]=g*n+j*o+v*d+w*f,e[5]=g*i+j*l+v*p+w*y,e[6]=g*s+j*c+v*h+w*m,e[7]=g*a+j*u+v*b+w*O,g=r[8],j=r[9],v=r[10],w=r[11],e[8]=g*n+j*o+v*d+w*f,e[9]=g*i+j*l+v*p+w*y,e[10]=g*s+j*c+v*h+w*m,e[11]=g*a+j*u+v*b+w*O,g=r[12],j=r[13],v=r[14],w=r[15],e[12]=g*n+j*o+v*d+w*f,e[13]=g*i+j*l+v*p+w*y,e[14]=g*s+j*c+v*h+w*m,e[15]=g*a+j*u+v*b+w*O,e}function d(e,t,r){const n=r[0],i=r[1],s=r[2]
let a,o,l,c,u,d,p,h,b,f,y,m
return t===e?(e[12]=t[0]*n+t[4]*i+t[8]*s+t[12],e[13]=t[1]*n+t[5]*i+t[9]*s+t[13],e[14]=t[2]*n+t[6]*i+t[10]*s+t[14],e[15]=t[3]*n+t[7]*i+t[11]*s+t[15]):(a=t[0],o=t[1],l=t[2],c=t[3],u=t[4],d=t[5],p=t[6],h=t[7],b=t[8],f=t[9],y=t[10],m=t[11],e[0]=a,e[1]=o,e[2]=l,e[3]=c,e[4]=u,e[5]=d,e[6]=p,e[7]=h,e[8]=b,e[9]=f,e[10]=y,e[11]=m,e[12]=a*n+u*i+b*s+t[12],e[13]=o*n+d*i+f*s+t[13],e[14]=l*n+p*i+y*s+t[14],e[15]=c*n+h*i+m*s+t[15]),e}function p(e,t,r){const n=r[0],i=r[1],s=r[2]
return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e[4]=t[4]*i,e[5]=t[5]*i,e[6]=t[6]*i,e[7]=t[7]*i,e[8]=t[8]*s,e[9]=t[9]*s,e[10]=t[10]*s,e[11]=t[11]*s,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function h(e,t,r,n){let s,a,o,l,c,u,d,p,h,b,f,y,m,O,g,j,v,w,S,x,_,M,I,T,E=n[0],L=n[1],P=n[2],A=Math.sqrt(E*E+L*L+P*P)
return A<i.a?null:(A=1/A,E*=A,L*=A,P*=A,s=Math.sin(r),a=Math.cos(r),o=1-a,l=t[0],c=t[1],u=t[2],d=t[3],p=t[4],h=t[5],b=t[6],f=t[7],y=t[8],m=t[9],O=t[10],g=t[11],j=E*E*o+a,v=L*E*o+P*s,w=P*E*o-L*s,S=E*L*o-P*s,x=L*L*o+a,_=P*L*o+E*s,M=E*P*o+L*s,I=L*P*o-E*s,T=P*P*o+a,e[0]=l*j+p*v+y*w,e[1]=c*j+h*v+m*w,e[2]=u*j+b*v+O*w,e[3]=d*j+f*v+g*w,e[4]=l*S+p*x+y*_,e[5]=c*S+h*x+m*_,e[6]=u*S+b*x+O*_,e[7]=d*S+f*x+g*_,e[8]=l*M+p*I+y*T,e[9]=c*M+h*I+m*T,e[10]=u*M+b*I+O*T,e[11]=d*M+f*I+g*T,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)}function b(e,t,r){const n=Math.sin(r),i=Math.cos(r),s=t[4],a=t[5],o=t[6],l=t[7],c=t[8],u=t[9],d=t[10],p=t[11]
return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=s*i+c*n,e[5]=a*i+u*n,e[6]=o*i+d*n,e[7]=l*i+p*n,e[8]=c*i-s*n,e[9]=u*i-a*n,e[10]=d*i-o*n,e[11]=p*i-l*n,e}function f(e,t,r){const n=Math.sin(r),i=Math.cos(r),s=t[0],a=t[1],o=t[2],l=t[3],c=t[8],u=t[9],d=t[10],p=t[11]
return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=s*i-c*n,e[1]=a*i-u*n,e[2]=o*i-d*n,e[3]=l*i-p*n,e[8]=s*n+c*i,e[9]=a*n+u*i,e[10]=o*n+d*i,e[11]=l*n+p*i,e}function y(e,t,r){const n=Math.sin(r),i=Math.cos(r),s=t[0],a=t[1],o=t[2],l=t[3],c=t[4],u=t[5],d=t[6],p=t[7]
return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=s*i+c*n,e[1]=a*i+u*n,e[2]=o*i+d*n,e[3]=l*i+p*n,e[4]=c*i-s*n,e[5]=u*i-a*n,e[6]=d*i-o*n,e[7]=p*i-l*n,e}function m(e,t){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=t[0],e[13]=t[1],e[14]=t[2],e[15]=1,e}function O(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=t[1],e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=t[2],e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function g(e,t,r){let n,s,a,o=r[0],l=r[1],c=r[2],u=Math.sqrt(o*o+l*l+c*c)
return u<i.a?null:(u=1/u,o*=u,l*=u,c*=u,n=Math.sin(t),s=Math.cos(t),a=1-s,e[0]=o*o*a+s,e[1]=l*o*a+c*n,e[2]=c*o*a-l*n,e[3]=0,e[4]=o*l*a-c*n,e[5]=l*l*a+s,e[6]=c*l*a+o*n,e[7]=0,e[8]=o*c*a+l*n,e[9]=l*c*a-o*n,e[10]=c*c*a+s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e)}function j(e,t){const r=Math.sin(t),n=Math.cos(t)
return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=n,e[6]=r,e[7]=0,e[8]=0,e[9]=-r,e[10]=n,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function v(e,t){const r=Math.sin(t),n=Math.cos(t)
return e[0]=n,e[1]=r,e[2]=0,e[3]=0,e[4]=-r,e[5]=n,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function w(e,t,r){const n=t[0],i=t[1],s=t[2],a=t[3],o=n+n,l=i+i,c=s+s,u=n*o,d=n*l,p=n*c,h=i*l,b=i*c,f=s*c,y=a*o,m=a*l,O=a*c
return e[0]=1-(h+f),e[1]=d+O,e[2]=p-m,e[3]=0,e[4]=d-O,e[5]=1-(u+f),e[6]=b+y,e[7]=0,e[8]=p+m,e[9]=b-y,e[10]=1-(u+h),e[11]=0,e[12]=r[0],e[13]=r[1],e[14]=r[2],e[15]=1,e}const S=Object(n.f)()
function x(e,t){return e[0]=t[12],e[1]=t[13],e[2]=t[14],e}function _(e,t){const r=t[0],n=t[1],i=t[2],s=t[3],a=r+r,o=n+n,l=i+i,c=r*a,u=n*a,d=n*o,p=i*a,h=i*o,b=i*l,f=s*a,y=s*o,m=s*l
return e[0]=1-d-b,e[1]=u+m,e[2]=p-y,e[3]=0,e[4]=u-m,e[5]=1-c-b,e[6]=h+f,e[7]=0,e[8]=p+y,e[9]=h-f,e[10]=1-c-d,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function M(e,t,r,n,i,s,a){const o=1/(r-t),l=1/(i-n),c=1/(s-a)
return e[0]=2*s*o,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=2*s*l,e[6]=0,e[7]=0,e[8]=(r+t)*o,e[9]=(i+n)*l,e[10]=(a+s)*c,e[11]=-1,e[12]=0,e[13]=0,e[14]=a*s*2*c,e[15]=0,e}function I(e,t,r,n,i,s,a){const o=1/(t-r),l=1/(n-i),c=1/(s-a)
return e[0]=-2*o,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*l,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*c,e[11]=0,e[12]=(t+r)*o,e[13]=(i+n)*l,e[14]=(a+s)*c,e[15]=1,e}function T(e,t,r,n){let s,a,l,c,u,d,p,h,b,f
const y=t[0],m=t[1],O=t[2],g=n[0],j=n[1],v=n[2],w=r[0],S=r[1],x=r[2]
return Math.abs(y-w)<i.a&&Math.abs(m-S)<i.a&&Math.abs(O-x)<i.a?o(e):(p=y-w,h=m-S,b=O-x,f=1/Math.sqrt(p*p+h*h+b*b),p*=f,h*=f,b*=f,s=j*b-v*h,a=v*p-g*b,l=g*h-j*p,f=Math.sqrt(s*s+a*a+l*l),f?(f=1/f,s*=f,a*=f,l*=f):(s=0,a=0,l=0),c=h*l-b*a,u=b*s-p*l,d=p*a-h*s,f=Math.sqrt(c*c+u*u+d*d),f?(f=1/f,c*=f,u*=f,d*=f):(c=0,u=0,d=0),e[0]=s,e[1]=c,e[2]=p,e[3]=0,e[4]=a,e[5]=u,e[6]=h,e[7]=0,e[8]=l,e[9]=d,e[10]=b,e[11]=0,e[12]=-(s*y+a*m+l*O),e[13]=-(c*y+u*m+d*O),e[14]=-(p*y+h*m+b*O),e[15]=1,e)}function E(e,t,r,n){const i=t[0],s=t[1],a=t[2],o=n[0],l=n[1],c=n[2]
let u=i-r[0],d=s-r[1],p=a-r[2],h=u*u+d*d+p*p
h>0&&(h=1/Math.sqrt(h),u*=h,d*=h,p*=h)
let b=l*p-c*d,f=c*u-o*p,y=o*d-l*u
return h=b*b+f*f+y*y,h>0&&(h=1/Math.sqrt(h),b*=h,f*=h,y*=h),e[0]=b,e[1]=f,e[2]=y,e[3]=0,e[4]=d*y-p*f,e[5]=p*b-u*y,e[6]=u*f-d*b,e[7]=0,e[8]=u,e[9]=d,e[10]=p,e[11]=0,e[12]=i,e[13]=s,e[14]=a,e[15]=1,e}function L(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e[3]=t[3]-r[3],e[4]=t[4]-r[4],e[5]=t[5]-r[5],e[6]=t[6]-r[6],e[7]=t[7]-r[7],e[8]=t[8]-r[8],e[9]=t[9]-r[9],e[10]=t[10]-r[10],e[11]=t[11]-r[11],e[12]=t[12]-r[12],e[13]=t[13]-r[13],e[14]=t[14]-r[14],e[15]=t[15]-r[15],e}function P(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]&&e[4]===t[4]&&e[5]===t[5]&&e[6]===t[6]&&e[7]===t[7]&&e[8]===t[8]&&e[9]===t[9]&&e[10]===t[10]&&e[11]===t[11]&&e[12]===t[12]&&e[13]===t[13]&&e[14]===t[14]&&e[15]===t[15]}function A(e,t){if(e===t)return!0
const r=e[0],n=e[1],s=e[2],a=e[3],o=e[4],l=e[5],c=e[6],u=e[7],d=e[8],p=e[9],h=e[10],b=e[11],f=e[12],y=e[13],m=e[14],O=e[15],g=t[0],j=t[1],v=t[2],w=t[3],S=t[4],x=t[5],_=t[6],M=t[7],I=t[8],T=t[9],E=t[10],L=t[11],P=t[12],A=t[13],F=t[14],C=t[15]
return Math.abs(r-g)<=i.a*Math.max(1,Math.abs(r),Math.abs(g))&&Math.abs(n-j)<=i.a*Math.max(1,Math.abs(n),Math.abs(j))&&Math.abs(s-v)<=i.a*Math.max(1,Math.abs(s),Math.abs(v))&&Math.abs(a-w)<=i.a*Math.max(1,Math.abs(a),Math.abs(w))&&Math.abs(o-S)<=i.a*Math.max(1,Math.abs(o),Math.abs(S))&&Math.abs(l-x)<=i.a*Math.max(1,Math.abs(l),Math.abs(x))&&Math.abs(c-_)<=i.a*Math.max(1,Math.abs(c),Math.abs(_))&&Math.abs(u-M)<=i.a*Math.max(1,Math.abs(u),Math.abs(M))&&Math.abs(d-I)<=i.a*Math.max(1,Math.abs(d),Math.abs(I))&&Math.abs(p-T)<=i.a*Math.max(1,Math.abs(p),Math.abs(T))&&Math.abs(h-E)<=i.a*Math.max(1,Math.abs(h),Math.abs(E))&&Math.abs(b-L)<=i.a*Math.max(1,Math.abs(b),Math.abs(L))&&Math.abs(f-P)<=i.a*Math.max(1,Math.abs(f),Math.abs(P))&&Math.abs(y-A)<=i.a*Math.max(1,Math.abs(y),Math.abs(A))&&Math.abs(m-F)<=i.a*Math.max(1,Math.abs(m),Math.abs(F))&&Math.abs(O-C)<=i.a*Math.max(1,Math.abs(O),Math.abs(C))}function F(e){const t=i.a,r=e[0],n=e[1],s=e[2],a=e[4],o=e[5],l=e[6],c=e[8],u=e[9],d=e[10]
return Math.abs(1-(r*r+a*a+c*c))<=t&&Math.abs(1-(n*n+o*o+u*u))<=t&&Math.abs(1-(s*s+l*l+d*d))<=t}const C=u,D=L
Object.freeze({__proto__:null,copy:s,set:a,identity:o,transpose:l,invert:c,adjoint:function(e,t){const r=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],p=t[10],h=t[11],b=t[12],f=t[13],y=t[14],m=t[15]
return e[0]=o*(p*m-h*y)-d*(l*m-c*y)+f*(l*h-c*p),e[1]=-(n*(p*m-h*y)-d*(i*m-s*y)+f*(i*h-s*p)),e[2]=n*(l*m-c*y)-o*(i*m-s*y)+f*(i*c-s*l),e[3]=-(n*(l*h-c*p)-o*(i*h-s*p)+d*(i*c-s*l)),e[4]=-(a*(p*m-h*y)-u*(l*m-c*y)+b*(l*h-c*p)),e[5]=r*(p*m-h*y)-u*(i*m-s*y)+b*(i*h-s*p),e[6]=-(r*(l*m-c*y)-a*(i*m-s*y)+b*(i*c-s*l)),e[7]=r*(l*h-c*p)-a*(i*h-s*p)+u*(i*c-s*l),e[8]=a*(d*m-h*f)-u*(o*m-c*f)+b*(o*h-c*d),e[9]=-(r*(d*m-h*f)-u*(n*m-s*f)+b*(n*h-s*d)),e[10]=r*(o*m-c*f)-a*(n*m-s*f)+b*(n*c-s*o),e[11]=-(r*(o*h-c*d)-a*(n*h-s*d)+u*(n*c-s*o)),e[12]=-(a*(d*y-p*f)-u*(o*y-l*f)+b*(o*p-l*d)),e[13]=r*(d*y-p*f)-u*(n*y-i*f)+b*(n*p-i*d),e[14]=-(r*(o*y-l*f)-a*(n*y-i*f)+b*(n*l-i*o)),e[15]=r*(o*p-l*d)-a*(n*p-i*d)+u*(n*l-i*o),e},determinant:function(e){const t=e[0],r=e[1],n=e[2],i=e[3],s=e[4],a=e[5],o=e[6],l=e[7],c=e[8],u=e[9],d=e[10],p=e[11],h=e[12],b=e[13],f=e[14],y=e[15]
return(t*a-r*s)*(d*y-p*f)-(t*o-n*s)*(u*y-p*b)+(t*l-i*s)*(u*f-d*b)+(r*o-n*a)*(c*y-p*h)-(r*l-i*a)*(c*f-d*h)+(n*l-i*o)*(c*b-u*h)},multiply:u,translate:d,scale:p,rotate:h,rotateX:b,rotateY:f,rotateZ:y,fromTranslation:m,fromScaling:O,fromRotation:g,fromXRotation:j,fromYRotation:function(e,t){const r=Math.sin(t),n=Math.cos(t)
return e[0]=n,e[1]=0,e[2]=-r,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=r,e[9]=0,e[10]=n,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e},fromZRotation:v,fromRotationTranslation:w,fromQuat2:function(e,t){const r=S,n=-t[0],i=-t[1],s=-t[2],a=t[3],o=t[4],l=t[5],c=t[6],u=t[7],d=n*n+i*i+s*s+a*a
return d>0?(r[0]=2*(o*a+u*n+l*s-c*i)/d,r[1]=2*(l*a+u*i+c*n-o*s)/d,r[2]=2*(c*a+u*s+o*i-l*n)/d):(r[0]=2*(o*a+u*n+l*s-c*i),r[1]=2*(l*a+u*i+c*n-o*s),r[2]=2*(c*a+u*s+o*i-l*n)),w(e,t,r),e},getTranslation:x,getScaling:function(e,t){const r=t[0],n=t[1],i=t[2],s=t[4],a=t[5],o=t[6],l=t[8],c=t[9],u=t[10]
return e[0]=Math.sqrt(r*r+n*n+i*i),e[1]=Math.sqrt(s*s+a*a+o*o),e[2]=Math.sqrt(l*l+c*c+u*u),e},getRotation:function(e,t){const r=t[0]+t[5]+t[10]
let n=0
return r>0?(n=2*Math.sqrt(r+1),e[3]=.25*n,e[0]=(t[6]-t[9])/n,e[1]=(t[8]-t[2])/n,e[2]=(t[1]-t[4])/n):t[0]>t[5]&&t[0]>t[10]?(n=2*Math.sqrt(1+t[0]-t[5]-t[10]),e[3]=(t[6]-t[9])/n,e[0]=.25*n,e[1]=(t[1]+t[4])/n,e[2]=(t[8]+t[2])/n):t[5]>t[10]?(n=2*Math.sqrt(1+t[5]-t[0]-t[10]),e[3]=(t[8]-t[2])/n,e[0]=(t[1]+t[4])/n,e[1]=.25*n,e[2]=(t[6]+t[9])/n):(n=2*Math.sqrt(1+t[10]-t[0]-t[5]),e[3]=(t[1]-t[4])/n,e[0]=(t[8]+t[2])/n,e[1]=(t[6]+t[9])/n,e[2]=.25*n),e},fromRotationTranslationScale:function(e,t,r,n){const i=t[0],s=t[1],a=t[2],o=t[3],l=i+i,c=s+s,u=a+a,d=i*l,p=i*c,h=i*u,b=s*c,f=s*u,y=a*u,m=o*l,O=o*c,g=o*u,j=n[0],v=n[1],w=n[2]
return e[0]=(1-(b+y))*j,e[1]=(p+g)*j,e[2]=(h-O)*j,e[3]=0,e[4]=(p-g)*v,e[5]=(1-(d+y))*v,e[6]=(f+m)*v,e[7]=0,e[8]=(h+O)*w,e[9]=(f-m)*w,e[10]=(1-(d+b))*w,e[11]=0,e[12]=r[0],e[13]=r[1],e[14]=r[2],e[15]=1,e},fromRotationTranslationScaleOrigin:function(e,t,r,n,i){const s=t[0],a=t[1],o=t[2],l=t[3],c=s+s,u=a+a,d=o+o,p=s*c,h=s*u,b=s*d,f=a*u,y=a*d,m=o*d,O=l*c,g=l*u,j=l*d,v=n[0],w=n[1],S=n[2],x=i[0],_=i[1],M=i[2],I=(1-(f+m))*v,T=(h+j)*v,E=(b-g)*v,L=(h-j)*w,P=(1-(p+m))*w,A=(y+O)*w,F=(b+g)*S,C=(y-O)*S,D=(1-(p+f))*S
return e[0]=I,e[1]=T,e[2]=E,e[3]=0,e[4]=L,e[5]=P,e[6]=A,e[7]=0,e[8]=F,e[9]=C,e[10]=D,e[11]=0,e[12]=r[0]+x-(I*x+L*_+F*M),e[13]=r[1]+_-(T*x+P*_+C*M),e[14]=r[2]+M-(E*x+A*_+D*M),e[15]=1,e},fromQuat:_,frustum:M,perspective:function(e,t,r,n,i){const s=1/Math.tan(t/2)
let a
return e[0]=s/r,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=s,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=-1,e[12]=0,e[13]=0,e[15]=0,null!=i&&i!==1/0?(a=1/(n-i),e[10]=(i+n)*a,e[14]=2*i*n*a):(e[10]=-1,e[14]=-2*n),e},perspectiveFromFieldOfView:function(e,t,r,n){const i=Math.tan(t.upDegrees*Math.PI/180),s=Math.tan(t.downDegrees*Math.PI/180),a=Math.tan(t.leftDegrees*Math.PI/180),o=Math.tan(t.rightDegrees*Math.PI/180),l=2/(a+o),c=2/(i+s)
return e[0]=l,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=c,e[6]=0,e[7]=0,e[8]=-(a-o)*l*.5,e[9]=(i-s)*c*.5,e[10]=n/(r-n),e[11]=-1,e[12]=0,e[13]=0,e[14]=n*r/(r-n),e[15]=0,e},ortho:I,lookAt:T,targetTo:E,str:function(e){return"mat4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+", "+e[6]+", "+e[7]+", "+e[8]+", "+e[9]+", "+e[10]+", "+e[11]+", "+e[12]+", "+e[13]+", "+e[14]+", "+e[15]+")"},frob:function(e){return Math.sqrt(e[0]**2+e[1]**2+e[2]**2+e[3]**2+e[4]**2+e[5]**2+e[6]**2+e[7]**2+e[8]**2+e[9]**2+e[10]**2+e[11]**2+e[12]**2+e[13]**2+e[14]**2+e[15]**2)},add:function(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e[3]=t[3]+r[3],e[4]=t[4]+r[4],e[5]=t[5]+r[5],e[6]=t[6]+r[6],e[7]=t[7]+r[7],e[8]=t[8]+r[8],e[9]=t[9]+r[9],e[10]=t[10]+r[10],e[11]=t[11]+r[11],e[12]=t[12]+r[12],e[13]=t[13]+r[13],e[14]=t[14]+r[14],e[15]=t[15]+r[15],e},subtract:L,multiplyScalar:function(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e[4]=t[4]*r,e[5]=t[5]*r,e[6]=t[6]*r,e[7]=t[7]*r,e[8]=t[8]*r,e[9]=t[9]*r,e[10]=t[10]*r,e[11]=t[11]*r,e[12]=t[12]*r,e[13]=t[13]*r,e[14]=t[14]*r,e[15]=t[15]*r,e},multiplyScalarAndAdd:function(e,t,r,n){return e[0]=t[0]+r[0]*n,e[1]=t[1]+r[1]*n,e[2]=t[2]+r[2]*n,e[3]=t[3]+r[3]*n,e[4]=t[4]+r[4]*n,e[5]=t[5]+r[5]*n,e[6]=t[6]+r[6]*n,e[7]=t[7]+r[7]*n,e[8]=t[8]+r[8]*n,e[9]=t[9]+r[9]*n,e[10]=t[10]+r[10]*n,e[11]=t[11]+r[11]*n,e[12]=t[12]+r[12]*n,e[13]=t[13]+r[13]*n,e[14]=t[14]+r[14]*n,e[15]=t[15]+r[15]*n,e},exactEquals:P,equals:A,isOrthoNormal:F,mul:C,sub:D})},897:function(e,t,r){"use strict"
r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return u}))
var n=r(78),i=r(660),s=r(354),a=r(177),o=r(292)
const l=a.a.getLogger("esri.assets")
function c(e,t){return Object(i.default)(u(e),t)}function u(e){if(!n.default.assetsPath)throw l.errorOnce("The API assets location needs to be set using config.assetsPath. More information: https://arcg.is/1OzLe50"),new s.a("assets:path-not-set","config.assetsPath is not set")
return Object(o.B)(n.default.assetsPath,e)}},901:function(e,t,r){"use strict"
r.d(t,"a",(function(){return d}))
var n=r(856),i=r(863),s=r(860),a=r(858),o=(r(353),r(77),r(859),r(868)),l=r(857)
const c=new i.a({inherited:"inherited",codedValue:"coded-value",range:"range"})
let u=class extends s.a{constructor(e){super(e),this.name=null,this.type=null}}
Object(n.a)([Object(a.b)({type:String,json:{write:!0}})],u.prototype,"name",void 0),Object(n.a)([Object(o.a)(c)],u.prototype,"type",void 0),u=Object(n.a)([Object(l.a)("esri.layers.support.Domain")],u)
const d=u},907:function(e,t,r){"use strict"
r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return c})),r.d(t,"c",(function(){return o})),r.d(t,"d",(function(){return l})),r.d(t,"e",(function(){return a})),r(870)
var n=r(20),i=r(659)
let s
function a(){return s||(s=(async()=>{const e=await Promise.all([r.e(57),r.e(168)]).then(r.bind(null,1155))
return{arcade:e.arcade,arcadeUtils:e,Dictionary:e.Dictionary,Feature:e.arcadeFeature}})()),s}const o=(e,t,r)=>u.create(e,t,r,null,["$feature"]),l=(e,t,r)=>u.create(e,t,r,null,["$feature","$view"]),c=(e,t,r,n)=>u.create(e,t,r,n,["$feature","$view"])
class u{constructor(e,t,r,n,i,s,a,o){this.script=e,this.evaluate=i
const l=Array.isArray(a)?a:a.fields
this.fields=l,this._syntaxTree=n,this._arcade=t,this._arcadeDictionary=r,this._arcadeFeature=s,this._spatialReference=o,this._referencesGeometry=t.scriptTouchesGeometry(this._syntaxTree),this._referencesScale=this._arcade.referencesMember(this._syntaxTree,"scale")}static async create(e,t,r,s,o,l){const{arcade:c,Feature:d,Dictionary:p}=await a(),h=i.default.fromJSON(t),b=c.parseScript(e,l),f=o.reduce((e,t)=>({...e,[t]:null}),{})
let y=null
Object(n.k)(s)&&(y=new p(s),y.immutable=!0,f.$config=null)
const m=c.scriptUsesGeometryEngine(b)&&c.enableGeometrySupport(),O=c.scriptUsesFeatureSet(b)&&c.enableFeatureSetSupport(),g=c.scriptIsAsync(b)&&c.enableAsyncSupport(),j={vars:f,spatialReference:h,useAsync:!!g},v=new p
v.immutable=!1,v.setField("scale",0)
const w=c.compileScript(b,j)
return await Promise.all([m,O,g]),new u(e,c,p,b,e=>("$view"in e&&e.$view&&(v.setField("scale",e.$view.scale),e.$view=v),y&&(e.$config=y),w({vars:e,spatialReference:h})),new d,r,h)}repurposeFeature(e){return e.geometry&&!e.geometry.spatialReference&&(e.geometry.spatialReference=this._spatialReference),this._arcadeFeature.repurposeFromGraphicLikeObject(e.geometry,e.attributes,{fields:this.fields}),this._arcadeFeature}createDictionary(){return new this._arcadeDictionary}referencesMember(e){return this._arcade.referencesMember(this._syntaxTree,e)}referencesFunction(e){return this._arcade.referencesFunction(this._syntaxTree,e)}referencesGeometry(){return this._referencesGeometry}referencesScale(){return this._referencesScale}extractFieldLiterals(){return this._arcade.extractExpectedFieldLiterals(this._syntaxTree)}}},909:function(e,t,r){"use strict"
function n(e,t,r=!1){let{hasM:n,hasZ:i}=e
Array.isArray(t)?4!==t.length||n||i?3===t.length&&r&&!n?(i=!0,n=!1):3===t.length&&n&&i&&(n=!1,i=!1):(n=!0,i=!0):(i=!i&&t.hasZ&&(!n||t.hasM),n=!n&&t.hasM&&(!i||t.hasZ)),e.hasZ=i,e.hasM=n}r.d(t,"a",(function(){return n}))},910:function(e,t,r){"use strict"
r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return i})),r.d(t,"d",(function(){return y})),r.d(t,"e",(function(){return h})),r.d(t,"f",(function(){return b})),r.d(t,"g",(function(){return g})),r.d(t,"h",(function(){return j})),r.d(t,"i",(function(){return p})),r.d(t,"j",(function(){return m})),r.d(t,"k",(function(){return f})),r.d(t,"l",(function(){return s})),r.d(t,"m",(function(){return O})),r.d(t,"n",(function(){return T}))
var n=r(893)
function i(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}function s(e,t,r,n,i){return e[0]=t,e[1]=r,e[2]=n,e[3]=i,e}function a(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e[3]=t[3]+r[3],e}function o(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e[3]=t[3]-r[3],e}function l(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e[2]=t[2]*r[2],e[3]=t[3]*r[3],e}function c(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e[2]=t[2]/r[2],e[3]=t[3]/r[3],e}function u(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e}function d(e,t){const r=t[0]-e[0],n=t[1]-e[1],i=t[2]-e[2],s=t[3]-e[3]
return Math.sqrt(r*r+n*n+i*i+s*s)}function p(e,t){const r=t[0]-e[0],n=t[1]-e[1],i=t[2]-e[2],s=t[3]-e[3]
return r*r+n*n+i*i+s*s}function h(e){const t=e[0],r=e[1],n=e[2],i=e[3]
return Math.sqrt(t*t+r*r+n*n+i*i)}function b(e){const t=e[0],r=e[1],n=e[2],i=e[3]
return t*t+r*r+n*n+i*i}function f(e,t){const r=t[0],n=t[1],i=t[2],s=t[3]
let a=r*r+n*n+i*i+s*s
return a>0&&(a=1/Math.sqrt(a),e[0]=r*a,e[1]=n*a,e[2]=i*a,e[3]=s*a),e}function y(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]}function m(e,t,r,n){const i=t[0],s=t[1],a=t[2],o=t[3]
return e[0]=i+n*(r[0]-i),e[1]=s+n*(r[1]-s),e[2]=a+n*(r[2]-a),e[3]=o+n*(r[3]-o),e}function O(e,t,r){const n=t[0],i=t[1],s=t[2],a=t[3]
return e[0]=r[0]*n+r[4]*i+r[8]*s+r[12]*a,e[1]=r[1]*n+r[5]*i+r[9]*s+r[13]*a,e[2]=r[2]*n+r[6]*i+r[10]*s+r[14]*a,e[3]=r[3]*n+r[7]*i+r[11]*s+r[15]*a,e}function g(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]}function j(e,t){const r=e[0],i=e[1],s=e[2],a=e[3],o=t[0],l=t[1],c=t[2],u=t[3]
return Math.abs(r-o)<=n.a*Math.max(1,Math.abs(r),Math.abs(o))&&Math.abs(i-l)<=n.a*Math.max(1,Math.abs(i),Math.abs(l))&&Math.abs(s-c)<=n.a*Math.max(1,Math.abs(s),Math.abs(c))&&Math.abs(a-u)<=n.a*Math.max(1,Math.abs(a),Math.abs(u))}const v=o,w=l,S=c,x=d,_=p,M=h,I=b,T=Object.freeze({__proto__:null,copy:i,set:s,add:a,subtract:o,multiply:l,divide:c,ceil:function(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e[3]=Math.ceil(t[3]),e},floor:function(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e[3]=Math.floor(t[3]),e},min:function(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e[2]=Math.min(t[2],r[2]),e[3]=Math.min(t[3],r[3]),e},max:function(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e[2]=Math.max(t[2],r[2]),e[3]=Math.max(t[3],r[3]),e},round:function(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e[3]=Math.round(t[3]),e},scale:u,scaleAndAdd:function(e,t,r,n){return e[0]=t[0]+r[0]*n,e[1]=t[1]+r[1]*n,e[2]=t[2]+r[2]*n,e[3]=t[3]+r[3]*n,e},distance:d,squaredDistance:p,length:h,squaredLength:b,negate:function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e},inverse:function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e[3]=1/t[3],e},normalize:f,dot:y,lerp:m,random:function(e,t){let r,i,s,a,o,l
t=t||1
do{r=2*Object(n.b)()-1,i=2*Object(n.b)()-1,o=r*r+i*i}while(o>=1)
do{s=2*Object(n.b)()-1,a=2*Object(n.b)()-1,l=s*s+a*a}while(l>=1)
const c=Math.sqrt((1-o)/l)
return e[0]=t*r,e[1]=t*i,e[2]=t*s*c,e[3]=t*a*c,e},transformMat4:O,transformQuat:function(e,t,r){const n=t[0],i=t[1],s=t[2],a=r[0],o=r[1],l=r[2],c=r[3],u=c*n+o*s-l*i,d=c*i+l*n-a*s,p=c*s+a*i-o*n,h=-a*n-o*i-l*s
return e[0]=u*c+h*-a+d*-l-p*-o,e[1]=d*c+h*-o+p*-a-u*-l,e[2]=p*c+h*-l+u*-o-d*-a,e[3]=t[3],e},str:function(e){return"vec4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"},exactEquals:g,equals:j,sub:v,mul:w,div:S,dist:x,sqrDist:_,len:M,sqrLen:I})},912:function(e,t,r){"use strict"
r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return c}))
var n=r(856),i=r(862),s=r(885),a=r(858),o=r(857),l=r(1003)
const c=e=>{let t=class extends e{destroy(){var e,t
this.destroyed||(null==(e=this._get("handles"))||e.destroy(),null==(t=this._get("updatingHandles"))||t.destroy())}get handles(){return this._get("handles")||new s.a}get updatingHandles(){return this._get("updatingHandles")||new l.a}}
return Object(n.a)([Object(a.b)({readOnly:!0})],t.prototype,"handles",null),Object(n.a)([Object(a.b)({readOnly:!0})],t.prototype,"updatingHandles",null),t=Object(n.a)([Object(o.a)("esri.core.HandleOwner")],t),t}
let u=class extends(c(i.a)){}
u=Object(n.a)([Object(o.a)("esri.core.HandleOwner")],u)},914:function(e,t,r){"use strict"
r.d(t,"a",(function(){return L}))
var n=r(856),i=r(78),s=r(148),a=r(660),o=r(996),l=r(354),c=r(860),u=r(903),d=r(177),p=r(20),h=r(861),b=r(858),f=(r(353),r(77),r(859)),y=r(865),m=r(857),O=r(658),g=r(879),j=r(926),v=r(862)
let w=class extends v.a{constructor(e){super(e),this.nextQueryParams=null,this.queryParams=null,this.results=null,this.total=null}}
Object(n.a)([Object(b.b)()],w.prototype,"nextQueryParams",void 0),Object(n.a)([Object(b.b)()],w.prototype,"queryParams",void 0),Object(n.a)([Object(b.b)()],w.prototype,"results",void 0),Object(n.a)([Object(b.b)()],w.prototype,"total",void 0),w=Object(n.a)([Object(m.a)("esri.portal.PortalQueryResult")],w)
const S=w
var x,_=r(956),M=r(966)
let I
const T={PortalGroup:()=>Promise.resolve().then(r.bind(null,988)),PortalItem:()=>r.e(80).then(r.bind(null,1006)),PortalUser:()=>Promise.resolve().then(r.bind(null,956))}
let E=x=class extends(Object(c.b)(u.a)){constructor(e){super(e),this.access=null,this.allSSL=!1,this.authMode="auto",this.authorizedCrossOriginDomains=null,this.basemapGalleryGroupQuery=null,this.bingKey=null,this.canListApps=!1,this.canListData=!1,this.canListPreProvisionedItems=!1,this.canProvisionDirectPurchase=!1,this.canSearchPublic=!0,this.canShareBingPublic=!1,this.canSharePublic=!1,this.canSignInArcGIS=!1,this.canSignInIDP=!1,this.colorSetsGroupQuery=null,this.commentsEnabled=!1,this.created=null,this.culture=null,this.customBaseUrl=null,this.defaultBasemap=null,this.defaultDevBasemap=null,this.defaultExtent=null,this.defaultVectorBasemap=null,this.description=null,this.devBasemapGalleryGroupQuery=null,this.eueiEnabled=null,this.featuredGroups=null,this.featuredItemsGroupQuery=null,this.galleryTemplatesGroupQuery=null,this.livingAtlasGroupQuery=null,this.hasCategorySchema=!1,this.helperServices=null,this.homePageFeaturedContent=null,this.homePageFeaturedContentCount=null,this.httpPort=null,this.httpsPort=null,this.id=null,this.ipCntryCode=null,this.isPortal=!1,this.isReadOnly=!1,this.layerTemplatesGroupQuery=null,this.maxTokenExpirationMinutes=null,this.modified=null,this.name=null,this.portalHostname=null,this.portalMode=null,this.portalProperties=null,this.region=null,this.rotatorPanels=null,this.showHomePageDescription=!1,this.sourceJSON=null,this.supportsHostedServices=!1,this.symbolSetsGroupQuery=null,this.templatesGroupQuery=null,this.units=null,this.url=i.default.portalUrl,this.urlKey=null,this.user=null,this.useStandardizedQuery=!1,this.useVectorBasemaps=!1,this.vectorBasemapGalleryGroupQuery=null}normalizeCtorArgs(e){return"string"==typeof e?{url:e}:e}destroy(){this._esriId_credentialCreateHandle&&(this._esriId_credentialCreateHandle.remove(),this._esriId_credentialCreateHandle=null)}readAuthorizedCrossOriginDomains(e){if(e)for(const t of e)-1===i.default.request.trustedServers.indexOf(t)&&i.default.request.trustedServers.push(t)
return e}readDefaultBasemap(e){return this._readBasemap(e)}readDefaultDevBasemap(e){return this._readBasemap(e)}readDefaultVectorBasemap(e){return this._readBasemap(e)}get extraQuery(){const e=!(this.user&&this.user.orgId)||this.canSearchPublic
return this.id&&!e?" AND orgid:"+this.id:null}get isOrganization(){return!!this.access}get restUrl(){let e=this.url
if(e){const t=e.indexOf("/sharing")
e=t>0?e.substring(0,t):this.url.replace(/\/+$/,""),e+="/sharing/rest"}return e}get stylesGroupQuery(){return Object(o.c)(d.a.getLogger(this.declaredClass),"stylesGroupQuery",{replacement:"stylesGroupQuery3d",version:"4.21"}),this.stylesGroupQuery3d}get thumbnailUrl(){const e=this.restUrl,t=this.thumbnail
return e&&t?this._normalizeSSL(e+"/portals/self/resources/"+t):null}readUrlKey(e){return e?e.toLowerCase():e}readUser(e){let t=null
return e&&(t=_.default.fromJSON(e),t.portal=this),t}load(e){const t=Promise.all([r.e(28),r.e(293)]).then(r.bind(null,671)).then(({default:t})=>{Object(h.v)(e),I=t}).then(()=>this.sourceJSON?this.sourceJSON:this._fetchSelf(this.authMode,!1,e)).then(e=>{if(s.b){const e=s.b
this.credential=e.findCredential(this.restUrl),this.credential||this.authMode!==x.AUTH_MODE_AUTO||(this._esriId_credentialCreateHandle=e.on("credential-create",()=>{e.findCredential(this.restUrl)&&this._signIn()}))}this.sourceJSON=e,this.read(e)})
return this.addResolvingPromise(t),Promise.resolve(this)}async createClosestFacilityTask(){Object(o.b)(d.a.getLogger(this.declaredClass),null,{replacement:"Use helperServices url with esri/rest/closestFacility",version:"4.21"}),await this.load()
const e=this._getHelperServiceUrl("closestFacility")
return new(0,(await Promise.all([r.e(1),r.e(2),r.e(32),r.e(60),r.e(343)]).then(r.bind(null,2430))).default)(e)}async createElevationLayers(){await this.load()
const e=this._getHelperService("defaultElevationLayers"),t=(await Promise.all([r.e(22),r.e(42),r.e(56)]).then(r.bind(null,1996))).default
return e?e.map(e=>new t({id:e.id,url:e.url})):[]}async createGeometryService(){Object(o.b)(d.a.getLogger(this.declaredClass),null,{replacement:"Use helperServices url with esri/rest/geometryService",version:"4.21"}),await this.load()
const e=this._getHelperServiceUrl("geometry")
return new(0,(await r.e(159).then(r.bind(null,2416))).default)({url:e})}async createPrintTask(){Object(o.b)(d.a.getLogger(this.declaredClass),null,{replacement:"Use helperServices url with esri/rest/print",version:"4.21"}),await this.load()
const e=this._getHelperServiceUrl("printTask")
return new(0,(await Promise.all([r.e(1),r.e(2),r.e(32),r.e(194)]).then(r.bind(null,2417))).default)(e)}async createRouteTask(){Object(o.b)(d.a.getLogger(this.declaredClass),null,{replacement:"Use helperServices url with esri/rest/route",version:"4.21"}),await this.load()
const e=this._getHelperServiceUrl("route")
return new(0,(await Promise.all([r.e(1),r.e(2),r.e(32),r.e(60),r.e(321)]).then(r.bind(null,2279))).default)(e)}async createServiceAreaTask(){Object(o.b)(d.a.getLogger(this.declaredClass),null,{replacement:"Use helperServices url with esri/rest/serviceArea",version:"4.21"}),await this.load()
const e=this._getHelperServiceUrl("serviceArea")
return new(0,(await Promise.all([r.e(1),r.e(2),r.e(32),r.e(246)]).then(r.bind(null,2431))).default)(e)}fetchBasemaps(e,t){const r=new j.a
return r.query=e||(i.default.apiKey&&Object(M.a)(this.url)?this.devBasemapGalleryGroupQuery:this.useVectorBasemaps?this.vectorBasemapGalleryGroupQuery:this.basemapGalleryGroupQuery),r.disableExtraQuery=!0,this.queryGroups(r,t).then(e=>{if(r.num=100,r.query='type:"Web Map" -type:"Web Application"',e.total){const n=e.results[0]
return r.sortField=n.sortField||"name",r.sortOrder=n.sortOrder||"desc",n.queryItems(r,t)}return null}).then(e=>{let t
return t=e&&e.total?e.results.filter(e=>"Web Map"===e.type).map(e=>new I({portalItem:e})):[],t})}fetchCategorySchema(e){return this.hasCategorySchema?this._request(this.restUrl+"/portals/self/categorySchema",e).then(e=>e.categorySchema):Object(h.n)(e)?Promise.reject(Object(h.e)()):Promise.resolve([])}fetchFeaturedGroups(e){const t=this.featuredGroups,r=new j.a
if(r.num=100,r.sortField="title",t&&t.length){const n=[]
for(const e of t)n.push(`(title:"${e.title}" AND owner:${e.owner})`)
return r.query=n.join(" OR "),this.queryGroups(r,e).then(e=>e.results)}return Object(h.n)(e)?Promise.reject(Object(h.e)()):Promise.resolve([])}fetchRegions(e){var t
const r=(null==(t=this.user)?void 0:t.culture)||this.culture||Object(g.b)()
return this._request(this.restUrl+"/portals/regions",{...e,query:{culture:r}})}fetchSettings(e){var t
const r=(null==(t=this.user)?void 0:t.culture)||this.culture||Object(g.b)()
return this._request(this.restUrl+"/portals/self/settings",{...e,query:{culture:r}})}static getDefault(){return x._default&&!x._default.destroyed||(x._default=new x),x._default}queryGroups(e,t){return this._queryPortal("/community/groups",e,"PortalGroup",t)}queryItems(e,t){return this._queryPortal("/search",e,"PortalItem",t)}queryUsers(e,t){return e.sortField||(e.sortField="username"),this._queryPortal("/community/users",e,"PortalUser",t)}toJSON(){throw new l.a("internal:not-yet-implemented","Portal.toJSON is not yet implemented")}static fromJSON(e){if(!e)return null
if(e.declaredClass)throw new Error("JSON object is already hydrated")
return new x({sourceJSON:e})}_getHelperService(e){const t=this.helperServices&&this.helperServices[e]
if(!t)throw new l.a("portal:service-not-found",`The \`helperServices\` do not include an entry named "${e}"`)
return t}_getHelperServiceUrl(e){const t=this._getHelperService(e)
if(!t.url)throw new l.a("portal:service-url-not-found",`The \`helperServices\` entry "${e}" does not include a \`url\` value`)
return t.url}_fetchSelf(e=this.authMode,t=!1,r){const n=this.restUrl+"/portals/self",i={authMode:e,query:{culture:Object(g.b)().toLowerCase()},...r}
return"auto"===i.authMode&&(i.authMode="no-prompt"),t&&(i.query.default=!0),this._request(n,i)}_queryPortal(e,t,r,n){const i=Object(f.m)(j.a,t),s=t=>this._request(this.restUrl+e,{...i.toRequestOptions(this),...n}).then(e=>{const r=i.clone()
return r.start=e.nextStart,new S({nextQueryParams:r,queryParams:i,total:e.total,results:x._resultsToTypedArray(t,{portal:this},e,n)})}).then(e=>Promise.all(e.results.map(t=>"function"==typeof t.when?t.when():e)).then(()=>e,t=>(Object(h.u)(t),e)))
return r&&T[r]?T[r]().then(({default:e})=>(Object(h.v)(n),s(e))):s()}_signIn(){if(this.authMode===x.AUTH_MODE_ANONYMOUS)return Promise.reject(new l.a("portal:invalid-auth-mode",`Current "authMode"' is "${this.authMode}"`))
if("failed"===this.loadStatus)return Promise.reject(this.loadError)
const e=e=>Promise.resolve().then(()=>"not-loaded"===this.loadStatus?(e||(this.authMode="immediate"),this.load().then(()=>null)):"loading"===this.loadStatus?this.load().then(()=>this.credential?null:(this.credential=e,this._fetchSelf("immediate"))):this.user&&this.credential===e?null:(this.credential=e,this._fetchSelf("immediate"))).then(e=>{e&&(this.sourceJSON=e,this.read(e))})
return s.b?s.b.getCredential(this.restUrl).then(t=>e(t)):e(this.credential)}_normalizeSSL(e){return e.replace(/^http:/i,"https:").replace(":7080",":7443")}_normalizeUrl(e){const t=this.credential&&this.credential.token
return this._normalizeSSL(t?e+(e.indexOf("?")>-1?"&":"?")+"token="+t:e)}_requestToTypedArray(e,t,r){return this._request(e,t).then(e=>{const t=x._resultsToTypedArray(r,{portal:this},e)
return Promise.all(t.map(t=>"function"==typeof t.when?t.when():e)).then(()=>t,()=>t)})}_readBasemap(e){if(e){const t=I.fromJSON(e)
return t.portalItem={portal:this},t}return null}_request(e,t={}){const r={f:"json",...t.query},{authMode:n=(this.authMode===x.AUTH_MODE_ANONYMOUS?"anonymous":"auto"),body:i=null,cacheBust:s=!1,method:o="auto",responseType:l="json",signal:c}=t,u={authMode:n,body:i,cacheBust:s,method:o,query:r,responseType:l,timeout:0,signal:c}
return Object(a.default)(this._normalizeSSL(e),u).then(e=>e.data)}static _resultsToTypedArray(e,t,r,n){let i
if(r){const s=Object(p.k)(n)?n.signal:null
i=r.listings||r.notifications||r.userInvitations||r.tags||r.items||r.groups||r.comments||r.provisions||r.results||r.relatedItems||r,(e||t)&&(i=i.map(r=>{const n=Object.assign(e?e.fromJSON(r):r,t)
return"function"==typeof n.load&&n.load(s),n}))}else i=[]
return i}}
E.AUTH_MODE_ANONYMOUS="anonymous",E.AUTH_MODE_AUTO="auto",E.AUTH_MODE_IMMEDIATE="immediate",Object(n.a)([Object(b.b)()],E.prototype,"access",void 0),Object(n.a)([Object(b.b)()],E.prototype,"allSSL",void 0),Object(n.a)([Object(b.b)()],E.prototype,"authMode",void 0),Object(n.a)([Object(b.b)()],E.prototype,"authorizedCrossOriginDomains",void 0),Object(n.a)([Object(y.a)("authorizedCrossOriginDomains")],E.prototype,"readAuthorizedCrossOriginDomains",null),Object(n.a)([Object(b.b)()],E.prototype,"basemapGalleryGroupQuery",void 0),Object(n.a)([Object(b.b)()],E.prototype,"bingKey",void 0),Object(n.a)([Object(b.b)()],E.prototype,"canListApps",void 0),Object(n.a)([Object(b.b)()],E.prototype,"canListData",void 0),Object(n.a)([Object(b.b)()],E.prototype,"canListPreProvisionedItems",void 0),Object(n.a)([Object(b.b)()],E.prototype,"canProvisionDirectPurchase",void 0),Object(n.a)([Object(b.b)()],E.prototype,"canSearchPublic",void 0),Object(n.a)([Object(b.b)()],E.prototype,"canShareBingPublic",void 0),Object(n.a)([Object(b.b)()],E.prototype,"canSharePublic",void 0),Object(n.a)([Object(b.b)()],E.prototype,"canSignInArcGIS",void 0),Object(n.a)([Object(b.b)()],E.prototype,"canSignInIDP",void 0),Object(n.a)([Object(b.b)()],E.prototype,"colorSetsGroupQuery",void 0),Object(n.a)([Object(b.b)()],E.prototype,"commentsEnabled",void 0),Object(n.a)([Object(b.b)({type:Date})],E.prototype,"created",void 0),Object(n.a)([Object(b.b)()],E.prototype,"credential",void 0),Object(n.a)([Object(b.b)()],E.prototype,"culture",void 0),Object(n.a)([Object(b.b)()],E.prototype,"currentVersion",void 0),Object(n.a)([Object(b.b)()],E.prototype,"customBaseUrl",void 0),Object(n.a)([Object(b.b)()],E.prototype,"defaultBasemap",void 0),Object(n.a)([Object(y.a)("defaultBasemap")],E.prototype,"readDefaultBasemap",null),Object(n.a)([Object(b.b)()],E.prototype,"defaultDevBasemap",void 0),Object(n.a)([Object(y.a)("defaultDevBasemap")],E.prototype,"readDefaultDevBasemap",null),Object(n.a)([Object(b.b)({type:O.default})],E.prototype,"defaultExtent",void 0),Object(n.a)([Object(b.b)()],E.prototype,"defaultVectorBasemap",void 0),Object(n.a)([Object(y.a)("defaultVectorBasemap")],E.prototype,"readDefaultVectorBasemap",null),Object(n.a)([Object(b.b)()],E.prototype,"description",void 0),Object(n.a)([Object(b.b)()],E.prototype,"devBasemapGalleryGroupQuery",void 0),Object(n.a)([Object(b.b)()],E.prototype,"eueiEnabled",void 0),Object(n.a)([Object(b.b)({readOnly:!0})],E.prototype,"extraQuery",null),Object(n.a)([Object(b.b)()],E.prototype,"featuredGroups",void 0),Object(n.a)([Object(b.b)()],E.prototype,"featuredItemsGroupQuery",void 0),Object(n.a)([Object(b.b)()],E.prototype,"galleryTemplatesGroupQuery",void 0),Object(n.a)([Object(b.b)()],E.prototype,"livingAtlasGroupQuery",void 0),Object(n.a)([Object(b.b)()],E.prototype,"hasCategorySchema",void 0),Object(n.a)([Object(b.b)()],E.prototype,"helpBase",void 0),Object(n.a)([Object(b.b)()],E.prototype,"helperServices",void 0),Object(n.a)([Object(b.b)()],E.prototype,"helpMap",void 0),Object(n.a)([Object(b.b)()],E.prototype,"homePageFeaturedContent",void 0),Object(n.a)([Object(b.b)()],E.prototype,"homePageFeaturedContentCount",void 0),Object(n.a)([Object(b.b)()],E.prototype,"httpPort",void 0),Object(n.a)([Object(b.b)()],E.prototype,"httpsPort",void 0),Object(n.a)([Object(b.b)()],E.prototype,"id",void 0),Object(n.a)([Object(b.b)()],E.prototype,"ipCntryCode",void 0),Object(n.a)([Object(b.b)({readOnly:!0})],E.prototype,"isOrganization",null),Object(n.a)([Object(b.b)()],E.prototype,"isPortal",void 0),Object(n.a)([Object(b.b)()],E.prototype,"isReadOnly",void 0),Object(n.a)([Object(b.b)()],E.prototype,"layerTemplatesGroupQuery",void 0),Object(n.a)([Object(b.b)()],E.prototype,"maxTokenExpirationMinutes",void 0),Object(n.a)([Object(b.b)({type:Date})],E.prototype,"modified",void 0),Object(n.a)([Object(b.b)()],E.prototype,"name",void 0),Object(n.a)([Object(b.b)()],E.prototype,"portalHostname",void 0),Object(n.a)([Object(b.b)()],E.prototype,"portalMode",void 0),Object(n.a)([Object(b.b)()],E.prototype,"portalProperties",void 0),Object(n.a)([Object(b.b)()],E.prototype,"region",void 0),Object(n.a)([Object(b.b)({readOnly:!0})],E.prototype,"restUrl",null),Object(n.a)([Object(b.b)()],E.prototype,"rotatorPanels",void 0),Object(n.a)([Object(b.b)()],E.prototype,"showHomePageDescription",void 0),Object(n.a)([Object(b.b)()],E.prototype,"sourceJSON",void 0),Object(n.a)([Object(b.b)()],E.prototype,"staticImagesUrl",void 0),Object(n.a)([Object(b.b)({readOnly:!0,json:{read:!1}})],E.prototype,"stylesGroupQuery",null),Object(n.a)([Object(b.b)({json:{name:"2DStylesGroupQuery"}})],E.prototype,"stylesGroupQuery2d",void 0),Object(n.a)([Object(b.b)({json:{name:"stylesGroupQuery"}})],E.prototype,"stylesGroupQuery3d",void 0),Object(n.a)([Object(b.b)()],E.prototype,"supportsHostedServices",void 0),Object(n.a)([Object(b.b)()],E.prototype,"symbolSetsGroupQuery",void 0),Object(n.a)([Object(b.b)()],E.prototype,"templatesGroupQuery",void 0),Object(n.a)([Object(b.b)()],E.prototype,"thumbnail",void 0),Object(n.a)([Object(b.b)({readOnly:!0})],E.prototype,"thumbnailUrl",null),Object(n.a)([Object(b.b)()],E.prototype,"units",void 0),Object(n.a)([Object(b.b)()],E.prototype,"url",void 0),Object(n.a)([Object(b.b)()],E.prototype,"urlKey",void 0),Object(n.a)([Object(y.a)("urlKey")],E.prototype,"readUrlKey",null),Object(n.a)([Object(b.b)()],E.prototype,"user",void 0),Object(n.a)([Object(y.a)("user")],E.prototype,"readUser",null),Object(n.a)([Object(b.b)()],E.prototype,"useStandardizedQuery",void 0),Object(n.a)([Object(b.b)()],E.prototype,"useVectorBasemaps",void 0),Object(n.a)([Object(b.b)()],E.prototype,"vectorBasemapGalleryGroupQuery",void 0),E=x=Object(n.a)([Object(m.a)("esri.portal.Portal")],E)
const L=E},915:function(e,t,r){"use strict"
r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return l})),r.d(t,"c",(function(){return c})),r.d(t,"d",(function(){return u})),r.d(t,"e",(function(){return p})),r.d(t,"f",(function(){return h})),r.d(t,"g",(function(){return d}))
var n=r(659),i=r(902),s=r(872)
function a(e){return new n.default({wkt:`GEOCCS["Spherical geocentric",\n    DATUM["Not specified",\n      SPHEROID["Sphere",${e.radius},0]],\n    PRIMEM["Greenwich",0.0,\n      AUTHORITY["EPSG","8901"]],\n    UNIT["m",1.0],\n    AXIS["Geocentric X",OTHER],\n    AXIS["Geocentric Y",EAST],\n    AXIS["Geocentric Z",NORTH]\n  ]`})}const o=a(i.a),l=a(i.b),c=a(i.c),u=new n.default({wkt:`GEOCCS["WGS 84",\n  DATUM["WGS_1984",\n    SPHEROID["WGS 84",${i.a.radius},298.257223563,\n      AUTHORITY["EPSG","7030"]],\n    AUTHORITY["EPSG","6326"]],\n  PRIMEM["Greenwich",0,\n    AUTHORITY["EPSG","8901"]],\n  UNIT["m",1.0,\n    AUTHORITY["EPSG","9001"]],\n  AXIS["Geocentric X",OTHER],\n  AXIS["Geocentric Y",OTHER],\n  AXIS["Geocentric Z",NORTH],\n  AUTHORITY["EPSG","4978"]\n]`})
function d(e){return e&&(Object(s.i)(e)||e===l)?l:e&&(Object(s.j)(e)||e===c)?c:o}function p(e){return e&&(Object(s.i)(e)||e===l)?i.b:e&&(Object(s.j)(e)||e===c)?i.c:i.a}function h(e){return Object(s.n)(e)?i.b:Object(s.o)(e)?i.c:i.a}},916:function(e,t,r){"use strict"
r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return s})),r.d(t,"d",(function(){return l})),r.d(t,"e",(function(){return c})),r.d(t,"f",(function(){return u})),r.d(t,"g",(function(){return d})),r.d(t,"h",(function(){return o})),r.d(t,"i",(function(){return h})),r.d(t,"j",(function(){return b}))
var n=r(872)
function i(e){if(!e)return null
if(Array.isArray(e))return e
const t=e.hasZ,r=e.hasM
if("point"===e.type)return r&&t?[e.x,e.y,e.z,e.m]:t?[e.x,e.y,e.z]:r?[e.x,e.y,e.m]:[e.x,e.y]
if("polygon"===e.type)return e.rings.slice(0)
if("polyline"===e.type)return e.paths.slice(0)
if("multipoint"===e.type)return e.points.slice(0)
if("extent"===e.type){const t=e.clone().normalize()
if(!t)return null
let r=!1,n=!1
return t.forEach(e=>{e.hasZ&&(r=!0),e.hasM&&(n=!0)}),t.map(e=>{const t=[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]
if(r&&e.hasZ){const r=.5*(e.zmax-e.zmin)
for(let e=0;e<t.length;e++)t[e].push(r)}if(n&&e.hasM){const r=.5*(e.mmax-e.mmin)
for(let e=0;e<t.length;e++)t[e].push(r)}return t})}return null}function s(e,t){const r=t[0]-e[0],n=t[1]-e[1]
if(e.length>2&&t.length>2){const i=e[2]-t[2]
return Math.sqrt(r*r+n*n+i*i)}return Math.sqrt(r*r+n*n)}function a(e,t,r){const n=e[0]+r*(t[0]-e[0]),i=e[1]+r*(t[1]-e[1])
return e.length>2&&t.length>2?[n,i,e[2]+r*(t[2]-e[2])]:[n,i]}function o(e,t,r,n){const[i,s]=t,[a,o]=r[n],[l,c]=r[n+1],u=l-a,d=c-o,p=u*u+d*d,h=(i-a)*u+(s-o)*d,b=Math.min(1,Math.max(0,h/p))
return e[0]=a+u*b,e[1]=o+d*b,e}function l(e,t){return a(e,t,.5)}function c(e){const t=e.length
let r=0
for(let n=0;n<t-1;++n)r+=s(e[n],e[n+1])
return r}function u(e,t){if(t<=0)return e[0]
const r=e.length
let n=0
for(let i=0;i<r-1;++i){const r=s(e[i],e[i+1])
if(t-n<r){const s=(t-n)/r
return a(e[i],e[i+1],s)}n+=r}return e[r-1]}function d(e,t,r){const n=e.length
let i=0,s=0,a=0
for(let o=0;o<n;o++){const l=e[o],c=e[(o+1)%n]
let u=2
i+=l[0]*c[1]-c[0]*l[1],l.length>2&&c.length>2&&r&&(s+=l[0]*c[2]-c[0]*l[2],u=3),l.length>u&&c.length>u&&t&&(a+=l[0]*c[u]-c[0]*l[u])}return i<=0&&s<=0&&a<=0}function p(e){if("rings"in e){for(const t of e.rings)t.length<3||t[0][0]===t[t.length-1][0]&&t[0][1]===t[t.length-1][1]||t.push([t[0][0],t[0][1]])
if(e.rings.length>0&&!d(e.rings[0],e.hasM,e.hasZ))for(let t=0;t<e.rings.length;++t)e.rings[t]=e.rings[t].reverse()}}function h(e){return"polygon"!==e.type&&"polyline"!==e.type||b("polygon"===e.type?e.rings:e.paths,e.spatialReference),e}function b(e,t){const r=Object(n.e)(t)
if(!r)return
const i=r.valid[0],s=r.valid[1],a=s-i
for(const t of e){let e=1/0,r=-1/0
t.forEach(t=>{let n=t[0]
for(;n<i;)n+=a
for(;n>s;)n-=a
e=Math.min(e,n),r=Math.max(r,n),t[0]=n})
const n=r-e
a-n<n&&t.forEach(e=>{e[0]<0&&(e[0]+=a)})}}},918:function(e,t,r){"use strict"
r.d(t,"a",(function(){return M}))
var n,i=r(856),s=r(870),a=r(894),o=r(863),l=r(860),c=r(178),u=r(20),d=r(858),p=r(880),h=r(868),b=r(857),f=r(864),y=r(859),m=r(869),O=r(983),g=r(1064),j=r(1050),v=r(659),w=r(866)
const S=new o.a({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),x=new o.a({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"})
let _=n=class extends l.a{constructor(e){super(e),this.aggregateIds=null,this.cacheHint=void 0,this.compactGeometryEnabled=!1,this.datumTransformation=null,this.defaultSpatialReferenceEnabled=!1,this.distance=void 0,this.dynamicDataSource=void 0,this.formatOf3DObjects=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=void 0,this.groupByFieldsForStatistics=null,this.having=null,this.historicMoment=null,this.maxAllowableOffset=void 0,this.maxRecordCountFactor=1,this.multipatchOption=null,this.num=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.outStatistics=null,this.parameterValues=null,this.pixelSize=null,this.quantizationParameters=null,this.rangeValues=null,this.relationParameter=null,this.resultType=null,this.returnCentroid=!1,this.returnDistinctValues=!1,this.returnExceededLimitFeatures=!0,this.returnGeometry=!1,this.returnQueryGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.sourceSpatialReference=null,this.spatialRelationship="intersects",this.start=void 0,this.sqlFormat=null,this.text=null,this.timeExtent=null,this.timeReferenceUnknownClient=!1,this.units=null,this.where=null}static from(e){return Object(y.d)(n,e)}castDatumTransformation(e){return"number"==typeof e||"object"==typeof e?e:null}writeHistoricMoment(e,t){t.historicMoment=e&&e.getTime()}writeParameterValues(e,t){if(e){const r={}
for(const t in e){const n=e[t]
Array.isArray(n)?r[t]=n.map(e=>e instanceof Date?e.getTime():e):n instanceof Date?r[t]=n.getTime():r[t]=n}t.parameterValues=r}}writeStart(e,t){t.resultOffset=this.start,t.resultRecordCount=this.num||10,t.where="1=1"}writeWhere(e,t){t.where=e||"1=1"}clone(){return new n(Object(c.a)({aggregateIds:this.aggregateIds,cacheHint:this.cacheHint,compactGeometryEnabled:this.compactGeometryEnabled,datumTransformation:this.datumTransformation,defaultSpatialReferenceEnabled:this.defaultSpatialReferenceEnabled,distance:this.distance,gdbVersion:this.gdbVersion,geometry:this.geometry,geometryPrecision:this.geometryPrecision,groupByFieldsForStatistics:this.groupByFieldsForStatistics,having:this.having,historicMoment:Object(u.k)(this.historicMoment)?new Date(this.historicMoment.getTime()):null,maxAllowableOffset:this.maxAllowableOffset,maxRecordCountFactor:this.maxRecordCountFactor,multipatchOption:this.multipatchOption,num:this.num,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,outStatistics:this.outStatistics,parameterValues:this.parameterValues,pixelSize:this.pixelSize,quantizationParameters:this.quantizationParameters,rangeValues:this.rangeValues,relationParameter:this.relationParameter,resultType:this.resultType,returnDistinctValues:this.returnDistinctValues,returnGeometry:this.returnGeometry,returnCentroid:this.returnCentroid,returnExceededLimitFeatures:this.returnExceededLimitFeatures,returnQueryGeometry:this.returnQueryGeometry,returnM:this.returnM,returnZ:this.returnZ,dynamicDataSource:this.dynamicDataSource,sourceSpatialReference:this.sourceSpatialReference,spatialRelationship:this.spatialRelationship,start:this.start,sqlFormat:this.sqlFormat,text:this.text,timeExtent:this.timeExtent,timeReferenceUnknownClient:this.timeReferenceUnknownClient,units:this.units,where:this.where}))}}
_.MAX_MAX_RECORD_COUNT_FACTOR=5,Object(i.a)([Object(d.b)({json:{write:!0}})],_.prototype,"aggregateIds",void 0),Object(i.a)([Object(d.b)({type:Boolean,json:{write:!0}})],_.prototype,"cacheHint",void 0),Object(i.a)([Object(d.b)({type:Boolean,json:{default:!1,write:!0}})],_.prototype,"compactGeometryEnabled",void 0),Object(i.a)([Object(d.b)({json:{write:!0}})],_.prototype,"datumTransformation",void 0),Object(i.a)([Object(p.a)("datumTransformation")],_.prototype,"castDatumTransformation",null),Object(i.a)([Object(d.b)({type:Boolean,json:{default:!1,write:!0}})],_.prototype,"defaultSpatialReferenceEnabled",void 0),Object(i.a)([Object(d.b)({type:Number,json:{write:{overridePolicy:e=>({enabled:e>0})}}})],_.prototype,"distance",void 0),Object(i.a)([Object(d.b)({type:O.a,json:{write:!0}})],_.prototype,"dynamicDataSource",void 0),Object(i.a)([Object(d.b)({type:String,json:{write:!0}})],_.prototype,"formatOf3DObjects",void 0),Object(i.a)([Object(d.b)({type:String,json:{write:!0}})],_.prototype,"gdbVersion",void 0),Object(i.a)([Object(d.b)({types:s.c,json:{read:m.a,write:!0}})],_.prototype,"geometry",void 0),Object(i.a)([Object(d.b)({type:Number,json:{write:!0}})],_.prototype,"geometryPrecision",void 0),Object(i.a)([Object(d.b)({type:[String],json:{write:!0}})],_.prototype,"groupByFieldsForStatistics",void 0),Object(i.a)([Object(d.b)({type:String,json:{write:!0}})],_.prototype,"having",void 0),Object(i.a)([Object(d.b)({type:Date})],_.prototype,"historicMoment",void 0),Object(i.a)([Object(f.a)("historicMoment")],_.prototype,"writeHistoricMoment",null),Object(i.a)([Object(d.b)({type:Number,json:{write:!0}})],_.prototype,"maxAllowableOffset",void 0),Object(i.a)([Object(d.b)({type:Number,cast:e=>e<1?1:e>n.MAX_MAX_RECORD_COUNT_FACTOR?n.MAX_MAX_RECORD_COUNT_FACTOR:e,json:{write:{overridePolicy:e=>({enabled:e>1})}}})],_.prototype,"maxRecordCountFactor",void 0),Object(i.a)([Object(d.b)({type:["xyFootprint"],json:{write:!0}})],_.prototype,"multipatchOption",void 0),Object(i.a)([Object(d.b)({type:Number,json:{read:{source:"resultRecordCount"}}})],_.prototype,"num",void 0),Object(i.a)([Object(d.b)({json:{write:!0}})],_.prototype,"objectIds",void 0),Object(i.a)([Object(d.b)({type:[String],json:{write:!0}})],_.prototype,"orderByFields",void 0),Object(i.a)([Object(d.b)({type:[String],json:{write:!0}})],_.prototype,"outFields",void 0),Object(i.a)([Object(d.b)({type:v.default,json:{name:"outSR",write:!0}})],_.prototype,"outSpatialReference",void 0),Object(i.a)([Object(d.b)({type:[j.a],json:{write:{enabled:!0,overridePolicy(){return{enabled:Object(u.k)(this.outStatistics)&&this.outStatistics.length>0}}}}})],_.prototype,"outStatistics",void 0),Object(i.a)([Object(d.b)({json:{write:!0}})],_.prototype,"parameterValues",void 0),Object(i.a)([Object(f.a)("parameterValues")],_.prototype,"writeParameterValues",null),Object(i.a)([Object(d.b)({type:w.a,json:{write:!0}})],_.prototype,"pixelSize",void 0),Object(i.a)([Object(d.b)({type:g.a,json:{write:!0}})],_.prototype,"quantizationParameters",void 0),Object(i.a)([Object(d.b)({type:[Object],json:{write:!0}})],_.prototype,"rangeValues",void 0),Object(i.a)([Object(d.b)({type:String,json:{read:{source:"relationParam"},write:{target:"relationParam",overridePolicy(){return{enabled:"relation"===this.spatialRelationship}}}}})],_.prototype,"relationParameter",void 0),Object(i.a)([Object(d.b)({type:String,json:{write:!0}})],_.prototype,"resultType",void 0),Object(i.a)([Object(d.b)({type:Boolean,json:{default:!1,write:!0}})],_.prototype,"returnCentroid",void 0),Object(i.a)([Object(d.b)({type:Boolean,json:{default:!1,write:!0}})],_.prototype,"returnDistinctValues",void 0),Object(i.a)([Object(d.b)({type:Boolean,json:{default:!0,write:!0}})],_.prototype,"returnExceededLimitFeatures",void 0),Object(i.a)([Object(d.b)({type:Boolean,json:{write:!0}})],_.prototype,"returnGeometry",void 0),Object(i.a)([Object(d.b)({type:Boolean,json:{default:!1,write:!0}})],_.prototype,"returnQueryGeometry",void 0),Object(i.a)([Object(d.b)({type:Boolean,json:{default:!1,write:!0}})],_.prototype,"returnM",void 0),Object(i.a)([Object(d.b)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],_.prototype,"returnZ",void 0),Object(i.a)([Object(d.b)({type:v.default,json:{write:!0}})],_.prototype,"sourceSpatialReference",void 0),Object(i.a)([Object(h.a)(S,{ignoreUnknown:!1,name:"spatialRel"})],_.prototype,"spatialRelationship",void 0),Object(i.a)([Object(d.b)({type:Number,json:{read:{source:"resultOffset"}}})],_.prototype,"start",void 0),Object(i.a)([Object(f.a)("start"),Object(f.a)("num")],_.prototype,"writeStart",null),Object(i.a)([Object(d.b)({type:String,json:{write:!0}})],_.prototype,"sqlFormat",void 0),Object(i.a)([Object(d.b)({type:String,json:{write:!0}})],_.prototype,"text",void 0),Object(i.a)([Object(d.b)({type:a.a,json:{write:!0}})],_.prototype,"timeExtent",void 0),Object(i.a)([Object(d.b)({type:Boolean,json:{default:!1,write:!0}})],_.prototype,"timeReferenceUnknownClient",void 0),Object(i.a)([Object(h.a)(x,{ignoreUnknown:!1}),Object(d.b)({json:{write:{overridePolicy(e){return{enabled:e&&this.distance>0}}}}})],_.prototype,"units",void 0),Object(i.a)([Object(d.b)({type:String,json:{write:{overridePolicy(e){return{enabled:null!=e||this.start>0}}}}})],_.prototype,"where",void 0),Object(i.a)([Object(f.a)("where")],_.prototype,"writeWhere",null),_=n=Object(i.a)([Object(b.a)("esri.rest.support.Query")],_)
const M=_},921:function(e,t,r){"use strict"
r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return c}))
var n=r(20),i=r(879)
const s={ar:"ar-u-nu-latn"}
let a=new WeakMap,o={}
function l(e={}){const t={}
return null!=e.digitSeparator&&(t.useGrouping=e.digitSeparator),null!=e.places&&(t.minimumFractionDigits=t.maximumFractionDigits=e.places),t}function c(e,t){return function(e){const t=e||o
if(!a.has(t)){const r=Object(i.b)(),n=s[Object(i.b)()]||r
a.set(t,new Intl.NumberFormat(n,e))}return Object(n.c)(a.get(t))}(t).format(e)}Object(i.a)(()=>{a=new WeakMap,o={}})},922:function(e,t,r){"use strict"
r.d(t,"a",(function(){return y})),r.d(t,"b",(function(){return m}))
var n=r(863),i=r(879)
const s={year:"numeric",month:"numeric",day:"numeric"},a={year:"numeric",month:"long",day:"numeric"},o={year:"numeric",month:"short",day:"numeric"},l={year:"numeric",month:"long",weekday:"long",day:"numeric"},c={hour:"numeric",minute:"numeric"},u={...c,second:"numeric"},d={"short-date":s,"short-date-short-time":{...s,...c},"short-date-short-time-24":{...s,...c,hour12:!1},"short-date-long-time":{...s,...u},"short-date-long-time-24":{...s,...u,hour12:!1},"short-date-le":s,"short-date-le-short-time":{...s,...c},"short-date-le-short-time-24":{...s,...c,hour12:!1},"short-date-le-long-time":{...s,...u},"short-date-le-long-time-24":{...s,...u,hour12:!1},"long-month-day-year":a,"long-month-day-year-short-time":{...a,...c},"long-month-day-year-short-time-24":{...a,...c,hour12:!1},"long-month-day-year-long-time":{...a,...u},"long-month-day-year-long-time-24":{...a,...u,hour12:!1},"day-short-month-year":o,"day-short-month-year-short-time":{...o,...c},"day-short-month-year-short-time-24":{...o,...c,hour12:!1},"day-short-month-year-long-time":{...o,...u},"day-short-month-year-long-time-24":{...o,...u,hour12:!1},"long-date":l,"long-date-short-time":{...l,...c},"long-date-short-time-24":{...l,...c,hour12:!1},"long-date-long-time":{...l,...u},"long-date-long-time-24":{...l,...u,hour12:!1},"long-month-year":{month:"long",year:"numeric"},"short-month-year":{month:"short",year:"numeric"},year:{year:"numeric"},"short-time":c,"long-time":u},p=Object(n.b)()({shortDate:"short-date",shortDateShortTime:"short-date-short-time",shortDateShortTime24:"short-date-short-time-24",shortDateLongTime:"short-date-long-time",shortDateLongTime24:"short-date-long-time-24",shortDateLE:"short-date-le",shortDateLEShortTime:"short-date-le-short-time",shortDateLEShortTime24:"short-date-le-short-time-24",shortDateLELongTime:"short-date-le-long-time",shortDateLELongTime24:"short-date-le-long-time-24",longMonthDayYear:"long-month-day-year",longMonthDayYearShortTime:"long-month-day-year-short-time",longMonthDayYearShortTime24:"long-month-day-year-short-time-24",longMonthDayYearLongTime:"long-month-day-year-long-time",longMonthDayYearLongTime24:"long-month-day-year-long-time-24",dayShortMonthYear:"day-short-month-year",dayShortMonthYearShortTime:"day-short-month-year-short-time",dayShortMonthYearShortTime24:"day-short-month-year-short-time-24",dayShortMonthYearLongTime:"day-short-month-year-long-time",dayShortMonthYearLongTime24:"day-short-month-year-long-time-24",longDate:"long-date",longDateShortTime:"long-date-short-time",longDateShortTime24:"long-date-short-time-24",longDateLongTime:"long-date-long-time",longDateLongTime24:"long-date-long-time-24",longMonthYear:"long-month-year",shortMonthYear:"short-month-year",year:"year"}),h=(p.apiValues,p.toJSON.bind(p),p.fromJSON.bind(p),{ar:"ar-u-nu-latn-ca-gregory"})
let b=new WeakMap,f=d["short-date-short-time"]
function y(e){return d[e]||null}function m(e,t){return function(e){const t=e||f
if(!b.has(t)){const e=Object(i.b)(),r=h[Object(i.b)()]||e
b.set(t,new Intl.DateTimeFormat(r,t))}return b.get(t)}(t).format(e)}Object(i.a)(()=>{b=new WeakMap,f=d["short-date-short-time"]})},926:function(e,t,r){"use strict"
r.d(t,"a",(function(){return y}))
var n,i=r(856),s=r(862),a=r(863),o=r(178),l=r(20),c=r(858),u=(r(859),r(857)),d=r(658),p=r(659),h=r(662)
const b=new a.a({avgRating:"avg-rating",numRatings:"num-ratings",numComments:"num-comments",numViews:"num-views"})
let f=n=class extends s.a{constructor(e){super(e),this.categories=null,this.disableExtraQuery=!1,this.extent=null,this.filter=null,this.num=10,this.query=null,this.sortField=null,this.start=1}get sortOrder(){return this._get("sortOrder")||"asc"}set sortOrder(e){"asc"!==e&&"desc"!==e||this._set("sortOrder",e)}clone(){return new n({categories:this.categories?Object(o.a)(this.categories):null,disableExtraQuery:this.disableExtraQuery,extent:this.extent?this.extent.clone():null,filter:this.filter,num:this.num,query:this.query,sortField:this.sortField,sortOrder:this.sortOrder,start:this.start})}toRequestOptions(e,t){let r,n
if(this.categories&&(r=this.categories.map(e=>Array.isArray(e)?JSON.stringify(e):e)),this.extent){const e=Object(h.project)(this.extent,p.default.WGS84)
Object(l.k)(e)&&(n=`${e.xmin},${e.ymin},${e.xmax},${e.ymax}`)}let i=this.query
!this.disableExtraQuery&&e.extraQuery&&(i="("+i+")"+e.extraQuery)
const s={categories:r,bbox:n,q:i,filter:this.filter,num:this.num,sortField:null,sortOrder:null,start:this.start}
return this.sortField&&(s.sortField=this.sortField.split(",").map(e=>b.toJSON(e.trim())).join(","),s.sortOrder=this.sortOrder),{query:{...t,...s}}}}
Object(i.a)([Object(c.b)()],f.prototype,"categories",void 0),Object(i.a)([Object(c.b)()],f.prototype,"disableExtraQuery",void 0),Object(i.a)([Object(c.b)({type:d.default})],f.prototype,"extent",void 0),Object(i.a)([Object(c.b)()],f.prototype,"filter",void 0),Object(i.a)([Object(c.b)()],f.prototype,"num",void 0),Object(i.a)([Object(c.b)()],f.prototype,"query",void 0),Object(i.a)([Object(c.b)()],f.prototype,"sortField",void 0),Object(i.a)([Object(c.b)()],f.prototype,"sortOrder",null),Object(i.a)([Object(c.b)()],f.prototype,"start",void 0),f=n=Object(i.a)([Object(u.a)("esri.portal.PortalQueryParams")],f)
const y=f},927:function(e,t,r){"use strict"
r.d(t,"a",(function(){return V})),r.d(t,"b",(function(){return k})),r.d(t,"c",(function(){return U})),r.d(t,"d",(function(){return h})),r.d(t,"e",(function(){return O})),r.d(t,"f",(function(){return w})),r.d(t,"g",(function(){return v})),r.d(t,"h",(function(){return s})),r.d(t,"i",(function(){return f})),r.d(t,"j",(function(){return m})),r.d(t,"k",(function(){return P})),r.d(t,"l",(function(){return R})),r.d(t,"m",(function(){return o})),r.d(t,"n",(function(){return u})),r.d(t,"o",(function(){return p})),r.d(t,"p",(function(){return d})),r.d(t,"q",(function(){return l})),r.d(t,"r",(function(){return c})),r.d(t,"s",(function(){return F})),r.d(t,"t",(function(){return a})),r.d(t,"u",(function(){return I})),r.d(t,"v",(function(){return y})),r.d(t,"w",(function(){return S})),r.d(t,"x",(function(){return x})),r.d(t,"y",(function(){return D})),r.d(t,"z",(function(){return j})),r.d(t,"A",(function(){return _})),r.d(t,"B",(function(){return M})),r.d(t,"C",(function(){return L})),r.d(t,"D",(function(){return E})),r.d(t,"E",(function(){return T})),r.d(t,"F",(function(){return g})),r.d(t,"G",(function(){return A})),r.d(t,"H",(function(){return b})),r.d(t,"I",(function(){return N}))
var n=r(20),i=(r(658),r(884))
function s(e=U){return[e[0],e[1],e[2],e[3],e[4],e[5]]}function a(e,t,r,n,i,a,o=s()){return o[0]=e,o[1]=t,o[2]=r,o[3]=n,o[4]=i,o[5]=a,o}function o(e,t){e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[2]=Math.min(e[2],t[2]),e[3]=Math.max(e[3],t[3]),e[4]=Math.max(e[4],t[4]),e[5]=Math.max(e[5],t[5])}function l(e,t){e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[3]=Math.max(e[3],t[2]),e[4]=Math.max(e[4],t[3])}function c(e,t){e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[2]=Math.min(e[2],t[2]),e[3]=Math.max(e[3],t[0]),e[4]=Math.max(e[4],t[1]),e[5]=Math.max(e[5],t[2])}function u(e,t,r=0,n=t.length/3){let i=e[0],s=e[1],a=e[2],o=e[3],l=e[4],c=e[5]
for(let e=0;e<n;e++)i=Math.min(i,t[r+3*e]),s=Math.min(s,t[r+3*e+1]),a=Math.min(a,t[r+3*e+2]),o=Math.max(o,t[r+3*e]),l=Math.max(l,t[r+3*e+1]),c=Math.max(c,t[r+3*e+2])
e[0]=i,e[1]=s,e[2]=a,e[3]=o,e[4]=l,e[5]=c}function d(e,t,r,n){e[0]=Math.min(e[0],e[0]+t),e[3]=Math.max(e[3],e[3]+t),e[1]=Math.min(e[1],e[1]+r),e[4]=Math.max(e[4],e[4]+r),e[2]=Math.min(e[2],e[2]+n),e[5]=Math.max(e[5],e[5]+n)}function p(e,t,r){const n=t.length
let i=e[0],s=e[1],a=e[2],o=e[3],l=e[4],c=e[5]
if(r)for(let e=0;e<n;e++){const r=t[e]
i=Math.min(i,r[0]),s=Math.min(s,r[1]),a=Math.min(a,r[2]),o=Math.max(o,r[0]),l=Math.max(l,r[1]),c=Math.max(c,r[2])}else for(let e=0;e<n;e++){const r=t[e]
i=Math.min(i,r[0]),s=Math.min(s,r[1]),o=Math.max(o,r[0]),l=Math.max(l,r[1])}e[0]=i,e[1]=s,e[2]=a,e[3]=o,e[4]=l,e[5]=c}function h(e){for(let t=0;t<6;t++)if(!isFinite(e[t]))return!1
return!0}function b(e){return e[0]>=e[3]?0:e[3]-e[0]}function f(e){return e[1]>=e[4]?0:e[4]-e[1]}function y(e){return e[2]>=e[5]?0:e[5]-e[2]}function m(e){const t=b(e),r=y(e),n=f(e)
return Math.sqrt(t*t+r*r+n*n)}function O(e,t=[0,0,0]){return t[0]=e[0]+b(e)/2,t[1]=e[1]+f(e)/2,t[2]=e[2]+y(e)/2,t}function g(e,t=[0,0,0]){return t[0]=b(e),t[1]=f(e),t[2]=y(e),t}function j(e){return Math.max(b(e),y(e),f(e))}function v(e,t){return t[0]>=e[0]&&t[1]>=e[1]&&t[2]>=e[2]&&t[0]<=e[3]&&t[1]<=e[4]&&t[2]<=e[5]}function w(e,t){return t[0]>=e[0]&&t[1]>=e[1]&&t[2]>=e[2]&&t[3]<=e[3]&&t[4]<=e[4]&&t[5]<=e[5]}function S(e,t){return Math.max(t[0],e[0])<=Math.min(t[3],e[3])&&Math.max(t[1],e[1])<=Math.min(t[4],e[4])&&Math.max(t[2],e[2])<=Math.min(t[5],e[5])}function x(e,t){return!!Object(n.j)(t)||S(e,t)}function _(e,t,r,n,i=e){return i[0]=e[0]+t,i[1]=e[1]+r,i[2]=e[2]+n,i[3]=e[3]+t,i[4]=e[4]+r,i[5]=e[5]+n,i}function M(e,t,r=e){const n=e[0]+b(e)/2,i=e[1]+f(e)/2,s=e[2]+y(e)/2
return r[0]=n+(e[0]-n)*t,r[1]=i+(e[1]-i)*t,r[2]=s+(e[2]-s)*t,r[3]=n+(e[3]-n)*t,r[4]=i+(e[4]-i)*t,r[5]=s+(e[5]-s)*t,r}function I(e,t){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function T(e,t,r=e){return r[0]=t[0],r[1]=t[1],r[2]=t[2],r!==e&&(r[3]=e[3],r[4]=e[4],r[5]=e[5]),r}function E(e,t,r=e){return r[3]=t[0],r[4]=t[1],r[5]=t[2],r!==e&&(r[0]=e[0],r[1]=e[1],r[2]=e[2]),e}function L(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e}function P(e){return e?L(e,V):s(V)}function A(e,t){return t||(t=Object(i.m)()),t[0]=e[0],t[1]=e[1],t[2]=e[3],t[3]=e[4],t}function F(e,t){return e[0]=t[0],e[1]=t[1],e[2]=Number.NEGATIVE_INFINITY,e[3]=t[2],e[4]=t[3],e[5]=Number.POSITIVE_INFINITY,e}function C(e){return 6===e.length}function D(e){return 0===b(e)&&0===f(e)&&0===y(e)}function R(e,t,r){if(Object(n.j)(e)||Object(n.j)(t))return e===t
if(!C(e)||!C(t))return!1
if(r){for(let n=0;n<e.length;n++)if(!r(e[n],t[n]))return!1}else for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1
return!0}function N(e,t,r,n,i,s){return a(e,t,r,n,i,s,q)}const k=[-1/0,-1/0,-1/0,1/0,1/0,1/0],V=[1/0,1/0,1/0,-1/0,-1/0,-1/0],U=[0,0,0,0,0,0],q=s()},929:function(e,t,r){"use strict"
r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d})),r.d(t,"c",(function(){return p}))
var n=r(943)
const i=[]
function s(e,t,r,n){return{xmin:e,ymin:t,xmax:r,ymax:n}}function a(e,t,r,n,i,s){return{xmin:e,ymin:t,zmin:r,xmax:n,ymax:i,zmax:s}}function o(e,t,r,n,i,s){return{xmin:e,ymin:t,mmin:r,xmax:n,ymax:i,mmax:s}}function l(e,t,r,n,i,s,a,o){return{xmin:e,ymin:t,zmin:r,mmin:n,xmax:i,ymax:s,zmax:a,mmax:o}}function c(e,t=!1,r=!1){return t?r?l(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7]):a(e[0],e[1],e[2],e[3],e[4],e[5]):r?o(e[0],e[1],e[2],e[3],e[4],e[5]):s(e[0],e[1],e[2],e[3])}function u(e){return e?function(e){return void 0!==e.xmin&&void 0!==e.ymin&&void 0!==e.xmax&&void 0!==e.ymax}(e)?e:function(e){return void 0!==e.x&&void 0!==e.y}(e)?function(e){const{x:t,y:r,z:n,m:i}=e,c=null!=i
return null!=n?c?l(t,r,n,i,t,r,n,i):a(t,r,n,t,r,n):c?o(t,r,i,t,r,i):s(t,r,t,r)}(e):function(e){return void 0!==e.rings}(e)?d(e):function(e){return void 0!==e.paths}(e)?p(e):function(e){return void 0!==e.points}(e)?function(e){const{hasZ:t,hasM:r,points:s}=e
return c(Object(n.c)(i,s,t,r),t,r)}(e):null:null}function d(e){const{hasZ:t,hasM:r,rings:s}=e,a=Object(n.d)(i,s,t,r)
return a?c(a,t,r):null}function p(e){const{hasZ:t,hasM:r,paths:s}=e,a=Object(n.d)(i,s,t,r)
return a?c(a,t,r):null}},931:function(e,t,r){"use strict"
r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return a})),r.d(t,"d",(function(){return o})),r.d(t,"e",(function(){return l}))
var n=r(20),i=r(861)
function s(e,t,r){return Object(i.j)(e.map((e,n)=>t.apply(r,[e,n])))}function a(e,t,r){return Object(i.j)(e.map((e,n)=>t.apply(r,[e,n]))).then(e=>e.map(e=>e.value))}function o(e){return Object(n.j)(e)?Object(i.t)():e.then(e=>({ok:!0,value:e})).catch(e=>({ok:!1,error:e}))}function l(e){return e.then(e=>({ok:!0,value:e})).catch(e=>(Object(i.u)(e),{ok:!1,error:e}))}function c(e){if(!0===e.ok)return e.value
throw e.error}},933:function(e,t,r){"use strict"
r.d(t,"a",(function(){return g})),r.d(t,"b",(function(){return f})),r.d(t,"c",(function(){return v})),r.d(t,"d",(function(){return p})),r.d(t,"e",(function(){return b})),r.d(t,"f",(function(){return S})),r.d(t,"g",(function(){return w})),r.d(t,"h",(function(){return m})),r.d(t,"i",(function(){return O})),r.d(t,"j",(function(){return d})),r.d(t,"k",(function(){return y})),r.d(t,"l",(function(){return j})),r.d(t,"m",(function(){return u})),r.d(t,"n",(function(){return h}))
var n=r(894),i=r(658),s=r(659),a=r(936),o=r(666),l=r(1108),c=r(1076)
const u={type:Boolean,value:!0,json:{origins:{service:{read:!1,write:!1},"web-map":{read:!1,write:!1}},name:"screenSizePerspective",write:!0}},d={type:Boolean,value:!0,json:{name:"disablePopup",read:{reader:(e,t)=>!t.disablePopup},write:{enabled:!0,writer(e,t,r){t[r]=!e}}}},p={type:Boolean,value:!0,json:{name:"showLabels",write:!0}},h={type:String,json:{origins:{"portal-item":{write:!1}},write:{isRequired:!0,ignoreOrigin:!0,writer:a.g}}},b={type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},name:"showLegend",write:!0}},f={value:null,type:l.a,json:{origins:{service:{name:"elevationInfo",write:!0}},name:"layerDefinition.elevationInfo",write:!0}}
function y(e){return{type:e,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}}const m={type:Number,json:{origins:{"web-document":{write:!0,read:!0},"portal-item":{write:!0}}}},O={...m,json:{...m.json,origins:{"web-document":{...m.json.origins["web-document"],write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}}},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:(e,t,r)=>r&&"service"!==r.origin||!t.drawingInfo||void 0===t.drawingInfo.transparency?t.layerDefinition&&t.layerDefinition.drawingInfo&&void 0!==t.layerDefinition.drawingInfo.transparency?Object(c.b)(t.layerDefinition.drawingInfo.transparency):void 0:Object(c.b)(t.drawingInfo.transparency)}}},g={type:n.a,readOnly:!0,get(){var e,t
if(null==(e=this.layer)||!e.timeInfo)return null
const{datesInUnknownTimezone:r,timeOffset:n,useViewTime:i}=this.layer,s=null==(t=this.view)?void 0:t.timeExtent
let a=this.layer.timeExtent
r&&(a=Object(o.toLocalTimeExtent)(a))
let l=i?s&&a?s.intersection(a):s||a:a
if(!l||l.isEmpty||l.isAllTime)return l
n&&(l=l.offset(-n.value,n.unit)),r&&(l=Object(o.toUTCTimeExtent)(l))
const c=this._get("timeExtent")
return l.equals(c)?c:l}},j={type:i.default,readOnly:!0,json:{origins:{service:{read:{source:["fullExtent","spatialReference"],reader:(e,t)=>{const r=i.default.fromJSON(e)
return null!=t.spatialReference&&"object"==typeof t.spatialReference&&(r.spatialReference=s.default.fromJSON(t.spatialReference)),r}}}},read:!1}},v={type:String,json:{origins:{service:{read:!1},"portal-item":{read:!1}}}},w={type:Number,json:{origins:{service:{write:{enabled:!1}}},read:{source:"layerDefinition.minScale"},write:{target:"layerDefinition.minScale"}}},S={type:Number,json:{origins:{service:{write:{enabled:!1}}},read:{source:"layerDefinition.maxScale"},write:{target:"layerDefinition.maxScale"}}}},934:function(e,t,r){"use strict"
r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return a})),r(77)
const n={milliseconds:1,seconds:1e3,minutes:6e4,hours:36e5,days:864e5,weeks:6048e5,months:26784e5,years:31536e6,decades:31536e7,centuries:31536e8},i={milliseconds:{getter:"getMilliseconds",setter:"setMilliseconds",multiplier:1},seconds:{getter:"getSeconds",setter:"setSeconds",multiplier:1},minutes:{getter:"getMinutes",setter:"setMinutes",multiplier:1},hours:{getter:"getHours",setter:"setHours",multiplier:1},days:{getter:"getDate",setter:"setDate",multiplier:1},weeks:{getter:"getDate",setter:"setDate",multiplier:7},months:{getter:"getMonth",setter:"setMonth",multiplier:1},years:{getter:"getFullYear",setter:"setFullYear",multiplier:1},decades:{getter:"getFullYear",setter:"setFullYear",multiplier:10},centuries:{getter:"getFullYear",setter:"setFullYear",multiplier:100}}
function s(e,t,r){const n=new Date(e.getTime())
if(t&&r){const e=i[r],{getter:s,setter:a,multiplier:o}=e
if("months"===r){const e=function(e,t){const r=new Date(e,t+1,1)
return r.setDate(0),r.getDate()}(n.getFullYear(),n.getMonth()+t)
n.getDate()>e&&n.setDate(e)}n[a](n[s]()+t*o)}return n}function a(e,t){switch(t){case"milliseconds":return new Date(e.getTime())
case"seconds":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds())
case"minutes":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes())
case"hours":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours())
case"days":return new Date(e.getFullYear(),e.getMonth(),e.getDate())
case"weeks":return new Date(e.getFullYear(),e.getMonth(),e.getDate()-e.getDay())
case"months":return new Date(e.getFullYear(),e.getMonth(),1)
case"years":return new Date(e.getFullYear(),0,1)
case"decades":return new Date(e.getFullYear()-e.getFullYear()%10,0,1)
case"centuries":return new Date(e.getFullYear()-e.getFullYear()%100,0,1)
default:return new Date}}function o(e,t,r){return 0===e?0:e*n[t]/n[r]}},936:function(e,t,r){"use strict"
r.d(t,"a",(function(){return h})),r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return d})),r.d(t,"d",(function(){return f})),r.d(t,"e",(function(){return o})),r.d(t,"f",(function(){return a})),r.d(t,"g",(function(){return l}))
var n=r(20),i=r(292)
function s(e,t){const r=t&&t.url&&t.url.path
if(e&&r&&(e=Object(i.C)(e,r,{preserveProtocolRelative:!0}),t.portalItem&&t.readResourcePaths)){const r=Object(i.E)(e,t.portalItem.itemUrl)
u.test(r)&&t.readResourcePaths.push(t.portalItem.resourceFromPath(r).path)}return p(e,t&&t.portal)}function a(e,t,r=h.YES){if(!e)return e
!Object(i.u)(e)&&t&&t.blockedRelativeUrls&&t.blockedRelativeUrls.push(e)
let n=Object(i.C)(e)
if(t){const r=t.verifyItemRelativeUrls&&t.verifyItemRelativeUrls.rootPath||t.url&&t.url.path
if(r){const s=p(r,t.portal)
n=Object(i.E)(p(n,t.portal),s,s),n!==e&&t.verifyItemRelativeUrls&&t.verifyItemRelativeUrls.writtenUrls.push(n)}}return n=function(e,t){return t&&!t.isPortal&&t.urlKey&&t.customBaseUrl?Object(i.g)(e,`${t.urlKey}.${t.customBaseUrl}`,t.portalHostname):e}(n,t&&t.portal),Object(i.u)(n)&&(n=Object(i.F)(n)),null!=t&&t.resources&&null!=t&&t.portalItem&&!Object(i.u)(n)&&!Object(i.w)(n)&&r===h.YES&&t.resources.toKeep.push({resource:t.portalItem.resourceFromPath(n)}),n}function o(e,t,r){return s(e,r)}function l(e,t,r,n){const i=a(e,n)
void 0!==i&&(t[r]=i)}const c=/\/items\/([^\/]+)\/resources\//,u=/^\.\/resources\//
function d(e){const t=Object(n.k)(e)?e.match(c):null
return Object(n.k)(t)?t[1]:null}function p(e,t){if(!t||t.isPortal||!t.urlKey||!t.customBaseUrl)return e
const r=`${t.urlKey}.${t.customBaseUrl}`,n=Object(i.l)()
return Object(i.s)(n,`${n.scheme}://${r}`)?Object(i.g)(e,t.portalHostname,r):Object(i.g)(e,r,t.portalHostname)}var h,b;(b=h||(h={}))[b.YES=0]="YES",b[b.NO=1]="NO"
const f=Object.freeze({__proto__:null,fromJSON:s,toJSON:a,read:o,write:l,itemIdFromResourceUrl:d,get MarkKeep(){return h}})},941:function(e,t,r){"use strict"
r.d(t,"a",(function(){return y}))
var n,i=r(856),s=r(863),a=r(860),o=r(858),l=(r(353),r(77),r(859)),c=r(868),u=r(865),d=r(857),p=r(991),h=r(1023)
const b=new s.a({binary:"binary",coordinate:"coordinate",countOrAmount:"count-or-amount",dateAndTime:"date-and-time",description:"description",locationOrPlaceName:"location-or-place-name",measurement:"measurement",nameOrTitle:"name-or-title",none:"none",orderedOrRanked:"ordered-or-ranked",percentageOrRatio:"percentage-or-ratio",typeOrCategory:"type-or-category",uniqueIdentifier:"unique-identifier"})
let f=n=class extends a.a{constructor(e){super(e),this.alias=null,this.defaultValue=void 0,this.description=null,this.domain=null,this.editable=!0,this.length=-1,this.name=null,this.nullable=!0,this.type=null,this.valueType=null}readDescription(e,{description:t}){let r
try{r=JSON.parse(t)}catch(e){}return r?r.value:null}readValueType(e,{description:t}){let r
try{r=JSON.parse(t)}catch(e){}return r?b.fromJSON(r.fieldValueType):null}clone(){return new n({alias:this.alias,defaultValue:this.defaultValue,description:this.description,domain:this.domain&&this.domain.clone()||null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type,valueType:this.valueType})}}
Object(i.a)([Object(o.b)({type:String,json:{write:!0}})],f.prototype,"alias",void 0),Object(i.a)([Object(o.b)({type:[String,Number],json:{write:{allowNull:!0}}})],f.prototype,"defaultValue",void 0),Object(i.a)([Object(o.b)()],f.prototype,"description",void 0),Object(i.a)([Object(u.a)("description")],f.prototype,"readDescription",null),Object(i.a)([Object(o.b)({types:p.b,json:{read:{reader:p.a},write:!0}})],f.prototype,"domain",void 0),Object(i.a)([Object(o.b)({type:Boolean,json:{write:!0}})],f.prototype,"editable",void 0),Object(i.a)([Object(o.b)({type:l.a,json:{write:!0}})],f.prototype,"length",void 0),Object(i.a)([Object(o.b)({type:String,json:{write:!0}})],f.prototype,"name",void 0),Object(i.a)([Object(o.b)({type:Boolean,json:{write:!0}})],f.prototype,"nullable",void 0),Object(i.a)([Object(c.a)(h.a)],f.prototype,"type",void 0),Object(i.a)([Object(o.b)()],f.prototype,"valueType",void 0),Object(i.a)([Object(u.a)("valueType",["description"])],f.prototype,"readValueType",null),f=n=Object(i.a)([Object(d.a)("esri.layers.support.Field")],f)
const y=f},943:function(e,t,r){"use strict"
function n(e){return void 0!==e.xmin&&void 0!==e.ymin&&void 0!==e.xmax&&void 0!==e.ymax}function i(e){return void 0!==e.points}function s(e){return void 0!==e.x&&void 0!==e.y}function a(e){return void 0!==e.paths}function o(e){return void 0!==e.rings}function l(e){return(t,r)=>null==t?r:null==r?t:e(t,r)}r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return p})),r.d(t,"c",(function(){return f})),r.d(t,"d",(function(){return h}))
const c=l(Math.min),u=l(Math.max)
function d(e,t){return a(t)?h(e,t.paths,!1,!1):o(t)?h(e,t.rings,!1,!1):i(t)?f(e,t.points,!1,!1,!1,!1):n(t)?b(e,t):(s(t)&&(e[0]=t.x,e[1]=t.y,e[2]=t.x,e[3]=t.y),e)}function p(e,t){return a(t)?h(e,t.paths,!0,!1):o(t)?h(e,t.rings,!0,!1):i(t)?f(e,t.points,!0,!1,!0,!1):n(t)?b(e,t,!0,!1,!0,!1):(s(t)&&(e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.x,e[4]=t.y,e[5]=t.z),e)}function h(e,t,r,n){const i=r?3:2
if(!t.length||!t[0].length)return null
let s,a,o,l,[d,p]=t[0][0],[h,b]=t[0][0]
for(let e=0;e<t.length;e++){const f=t[e]
for(let e=0;e<f.length;e++){const t=f[e],[y,m]=t
if(d=c(d,y),p=c(p,m),h=u(h,y),b=u(b,m),r&&t.length>2){const e=t[2]
s=c(s,e),a=u(a,e)}if(n&&t.length>i){const e=t[i]
o=c(s,e),l=u(a,e)}}}return r?n?(e[0]=d,e[1]=p,e[2]=s,e[3]=o,e[4]=h,e[5]=b,e[6]=a,e[7]=l,e.length=8,e):(e[0]=d,e[1]=p,e[2]=s,e[3]=h,e[4]=b,e[5]=a,e.length=6,e):n?(e[0]=d,e[1]=p,e[2]=o,e[3]=h,e[4]=b,e[5]=l,e.length=6,e):(e[0]=d,e[1]=p,e[2]=h,e[3]=b,e.length=4,e)}function b(e,t,r,n,i,s){const a=t.xmin,o=t.xmax,l=t.ymin,c=t.ymax
let u=t.zmin,d=t.zmax,p=t.mmin,h=t.mmax
return i?(u=u||0,d=d||0,s?(p=p||0,h=h||0,e[0]=a,e[1]=l,e[2]=u,e[3]=p,e[4]=o,e[5]=c,e[6]=d,e[7]=h,e):(e[0]=a,e[1]=l,e[2]=u,e[3]=o,e[4]=c,e[5]=d,e)):s?(p=p||0,h=h||0,e[0]=a,e[1]=l,e[2]=p,e[3]=o,e[4]=c,e[5]=h,e):(e[0]=a,e[1]=l,e[2]=o,e[3]=c,e)}function f(e,t,r,n,i,s){const a=r?3:2,o=n&&s,l=r&&i
if(!t.length||!t[0].length)return null
let d,p,h,b,[f,y]=t[0],[m,O]=t[0]
for(let e=0;e<t.length;e++){const r=t[e],[n,i]=r
if(f=c(f,n),y=c(y,i),m=u(m,n),O=u(O,i),l&&r.length>2){const e=r[2]
d=c(d,e),p=u(p,e)}if(o&&r.length>a){const e=r[a]
h=c(d,e),b=u(p,e)}}return i?(d=d||0,p=p||0,s?(h=h||0,b=b||0,e[0]=f,e[1]=y,e[2]=d,e[3]=h,e[4]=m,e[5]=O,e[6]=p,e[7]=b,e):(e[0]=f,e[1]=y,e[2]=d,e[3]=m,e[4]=O,e[5]=p,e)):s?(h=h||0,b=b||0,e[0]=f,e[1]=y,e[2]=h,e[3]=m,e[4]=O,e[5]=b,e):(e[0]=f,e[1]=y,e[2]=m,e[3]=O,e)}},944:function(e,t,r){"use strict"
r.d(t,"a",(function(){return l}))
var n=r(856),i=r(860),s=r(858),a=(r(353),r(77),r(859),r(857))
let o=class extends i.a{constructor(e){super(e),this.type=null}}
Object(n.a)([Object(s.b)({readOnly:!0,json:{read:!1,write:!0}})],o.prototype,"type",void 0),o=Object(n.a)([Object(a.a)("esri.rest.support.ColorRamp")],o)
const l=o},950:function(e,t,r){"use strict"
r.d(t,"a",(function(){return p}))
var n,i=r(856),s=r(178),a=r(858),o=(r(859),r(868)),l=r(857),c=r(1067),u=r(901)
let d=n=class extends u.a{constructor(e){super(e),this.codedValues=null,this.type="coded-value"}getName(e){let t=null
if(this.codedValues){const r=String(e)
this.codedValues.some(e=>(String(e.code)===r&&(t=e.name),!!t))}return t}clone(){return new n({codedValues:Object(s.a)(this.codedValues),name:this.name})}}
Object(i.a)([Object(a.b)({type:[c.a],json:{write:!0}})],d.prototype,"codedValues",void 0),Object(i.a)([Object(o.a)({codedValue:"coded-value"})],d.prototype,"type",void 0),d=n=Object(i.a)([Object(l.a)("esri.layers.support.CodedValueDomain")],d)
const p=d},951:function(e,t,r){"use strict"
r.d(t,"a",(function(){return c}))
var n,i=r(856),s=(r(177),r(859),r(353),r(77),r(962),r(868)),a=r(857),o=r(901)
let l=n=class extends o.a{constructor(e){super(e),this.type="inherited"}clone(){return new n}}
Object(i.a)([Object(s.a)({inherited:"inherited"})],l.prototype,"type",void 0),l=n=Object(i.a)([Object(a.a)("esri.layers.support.InheritedDomain")],l)
const c=l},952:function(e,t,r){"use strict"
r.d(t,"a",(function(){return u}))
var n,i=r(856),s=r(858),a=(r(353),r(77),r(859),r(868)),o=r(857),l=r(901)
let c=n=class extends l.a{constructor(e){super(e),this.maxValue=null,this.minValue=null,this.type="range"}clone(){return new n({maxValue:this.maxValue,minValue:this.minValue,name:this.name})}}
Object(i.a)([Object(s.b)({type:Number,json:{type:[Number],read:{source:"range",reader:(e,t)=>t.range&&t.range[1]},write:{enabled:!1,overridePolicy(){return{enabled:null!=this.maxValue&&null==this.minValue}},target:"range",writer(e,t,r){t[r]=[this.minValue||0,e]}}}})],c.prototype,"maxValue",void 0),Object(i.a)([Object(s.b)({type:Number,json:{type:[Number],read:{source:"range",reader:(e,t)=>t.range&&t.range[0]},write:{target:"range",writer(e,t,r){t[r]=[e,this.maxValue||0]}}}})],c.prototype,"minValue",void 0),Object(i.a)([Object(a.a)({range:"range"})],c.prototype,"type",void 0),c=n=Object(i.a)([Object(o.a)("esri.layers.support.RangeDomain")],c)
const u=c},956:function(e,t,r){"use strict"
r.r(t),r.d(t,"default",(function(){return h}))
var n=r(856),i=r(354),s=r(860),a=r(858),o=(r(353),r(77),r(859),r(857))
let l=class extends s.a{constructor(e){super(e),this.created=null,this.id=null,this.portal=null,this.title=null,this.username=null}get url(){const e=this.get("portal.restUrl")
return e?`${e}/content/users/${this.username}/${this.id}`:null}toJSON(){throw new i.a("internal:not-yet-implemented","PortalFolder.toJSON is not yet implemented")}}
Object(n.a)([Object(a.b)({type:Date})],l.prototype,"created",void 0),Object(n.a)([Object(a.b)()],l.prototype,"id",void 0),Object(n.a)([Object(a.b)()],l.prototype,"portal",void 0),Object(n.a)([Object(a.b)()],l.prototype,"title",void 0),Object(n.a)([Object(a.b)({readOnly:!0})],l.prototype,"url",null),Object(n.a)([Object(a.b)()],l.prototype,"username",void 0),l=Object(n.a)([Object(o.a)("esri.portal.PortalFolder")],l)
const c=l
var u,d=r(988)
let p=u=class extends s.a{constructor(...e){super(...e),this.access=null,this.created=null,this.culture=null,this.description=null,this.email=null,this.fullName=null,this.modified=null,this.orgId=null,this.portal=null,this.preferredView=null,this.privileges=null,this.region=null,this.role=null,this.roleId=null,this.sourceJSON=null,this.units=null,this.username=null,this.userType=null}get thumbnailUrl(){const e=this.url,t=this.thumbnail
return e&&t?this.portal._normalizeUrl(`${e}/info/${t}?f=json`):null}get userContentUrl(){const e=this.get("portal.restUrl")
return e?`${e}/content/users/${this.username}`:null}get url(){const e=this.get("portal.restUrl")
return e?`${e}/community/users/${this.username}`:null}addItem(e){const t=e&&e.item,r=e&&e.data,n=e&&e.folder,i={method:"post"}
t&&(i.query=t.createPostQuery(),null!=r&&("string"==typeof r?i.query.text=r:"object"==typeof r&&(i.query.text=JSON.stringify(r))))
let s=this.userContentUrl
return n&&(s+="/"+("string"==typeof n?n:n.id)),this.portal._request(s+"/addItem",i).then(e=>(t.id=e.id,t.portal=this.portal,t.loaded?t.reload():t.load()))}deleteItem(e){let t=this.userContentUrl
return e.ownerFolder&&(t+="/"+e.ownerFolder),this.portal._request(t+`/items/${e.id}/delete`,{method:"post"}).then(()=>{e.id=null,e.portal=null})}deleteItems(e){const t=this.userContentUrl+"/deleteItems",r=e.map(e=>e.id)
if(r.length){const n={method:"post",query:{items:r.join(",")}}
return this.portal._request(t,n).then(()=>{e.forEach(e=>{e.id=null,e.portal=null})})}return Promise.resolve(void 0)}fetchFolders(){return this.portal._request(this.userContentUrl,{query:{num:1}}).then(e=>{let t
return t=e&&e.folders?e.folders.map(e=>{const t=c.fromJSON(e)
return t.portal=this.portal,t}):[],t})}fetchGroups(){return this.portal._request(this.url).then(e=>{let t
return t=e&&e.groups?e.groups.map(e=>{const t=d.default.fromJSON(e)
return t.portal=this.portal,t}):[],t})}fetchItems(e){e||(e={})
let t,n=this.userContentUrl
return e.folder&&(n+="/"+e.folder.id),r.e(80).then(r.bind(null,1006)).then(({default:r})=>{t=r
const i={folders:!1,num:e.num||10,start:e.start||1,sortField:e.sortField||"created",sortOrder:e.sortOrder||"asc"}
return this.portal._request(n,{query:i})}).then(e=>{let r
return e&&e.items?(r=e.items.map(e=>{const r=t.fromJSON(e)
return r.portal=this.portal,r}),Promise.all(r.map(e=>e.load())).catch(e=>e).then(()=>({items:r,nextStart:e.nextStart,total:e.total}))):{items:[],nextStart:-1,total:0}})}fetchTags(){return this.portal._request(this.url+"/tags").then(e=>e.tags)}getThumbnailUrl(e){let t=this.thumbnailUrl
return t&&e&&(t+="&w="+e),t}queryFavorites(e){return this.favGroupId?(this._favGroup||(this._favGroup=new d.default({id:this.favGroupId,portal:this.portal})),this._favGroup.queryItems(e)):Promise.reject(new i.a("internal:unknown","Unknown internal error",{internalError:"Unknown favGroupId"}))}toJSON(){throw new i.a("internal:not-yet-implemented","PortalGroup.toJSON is not yet implemented")}static fromJSON(e){if(!e)return null
if(e.declaredClass)throw new Error("JSON object is already hydrated")
const t=new u
return t.sourceJSON=e,t.read(e),t}}
Object(n.a)([Object(a.b)()],p.prototype,"access",void 0),Object(n.a)([Object(a.b)({type:Date})],p.prototype,"created",void 0),Object(n.a)([Object(a.b)()],p.prototype,"culture",void 0),Object(n.a)([Object(a.b)()],p.prototype,"description",void 0),Object(n.a)([Object(a.b)()],p.prototype,"email",void 0),Object(n.a)([Object(a.b)()],p.prototype,"favGroupId",void 0),Object(n.a)([Object(a.b)()],p.prototype,"fullName",void 0),Object(n.a)([Object(a.b)({type:Date})],p.prototype,"modified",void 0),Object(n.a)([Object(a.b)()],p.prototype,"orgId",void 0),Object(n.a)([Object(a.b)()],p.prototype,"portal",void 0),Object(n.a)([Object(a.b)()],p.prototype,"preferredView",void 0),Object(n.a)([Object(a.b)()],p.prototype,"privileges",void 0),Object(n.a)([Object(a.b)()],p.prototype,"region",void 0),Object(n.a)([Object(a.b)()],p.prototype,"role",void 0),Object(n.a)([Object(a.b)()],p.prototype,"roleId",void 0),Object(n.a)([Object(a.b)()],p.prototype,"sourceJSON",void 0),Object(n.a)([Object(a.b)()],p.prototype,"thumbnail",void 0),Object(n.a)([Object(a.b)({readOnly:!0})],p.prototype,"thumbnailUrl",null),Object(n.a)([Object(a.b)()],p.prototype,"units",void 0),Object(n.a)([Object(a.b)({readOnly:!0})],p.prototype,"userContentUrl",null),Object(n.a)([Object(a.b)({readOnly:!0})],p.prototype,"url",null),Object(n.a)([Object(a.b)()],p.prototype,"username",void 0),Object(n.a)([Object(a.b)()],p.prototype,"userType",void 0),p=u=Object(n.a)([Object(o.a)("esri.portal.PortalUser")],p)
const h=p},963:function(e,t,r){"use strict"
function n(e){}function i(e){return()=>e}r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return i})),r(77)},967:function(e,t,r){"use strict"
r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return c})),r.d(t,"d",(function(){return l})),r.d(t,"e",(function(){return i}))
const n={transparent:[0,0,0,0],black:[0,0,0,1],silver:[192,192,192,1],gray:[128,128,128,1],white:[255,255,255,1],maroon:[128,0,0,1],red:[255,0,0,1],purple:[128,0,128,1],fuchsia:[255,0,255,1],green:[0,128,0,1],lime:[0,255,0,1],olive:[128,128,0,1],yellow:[255,255,0,1],navy:[0,0,128,1],blue:[0,0,255,1],teal:[0,128,128,1],aqua:[0,255,255,1],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],blanchedalmond:[255,235,205,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],oldlace:[253,245,230,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],rebeccapurple:[102,51,153,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],whitesmoke:[245,245,245,1],yellowgreen:[154,205,50,1]}
function i(e){return n[e]||n[e.toLowerCase()]}function s(e){var t
return null!=(t=n[e])?t:n[e.toLowerCase()]}function a(e){return[...s(e)]}function o(e,t,r){r<0&&++r,r>1&&--r
const n=6*r
return n<1?e+(t-e)*n:2*r<1?t:3*r<2?e+(t-e)*(2/3-r)*6:e}function l(e,t,r,n=1){const i=(e%360+360)%360/360,s=r<=.5?r*(t+1):r+t-r*t,a=2*r-s
return[Math.round(255*o(a,s,i+1/3)),Math.round(255*o(a,s,i)),Math.round(255*o(a,s,i-1/3)),n]}function c(e){const t=e.length>5,r=t?8:4,n=(1<<r)-1,i=t?1:17,s=t?9===e.length:5===e.length
let a=Number("0x"+e.substr(1))
if(isNaN(a))return null
const o=[0,0,0,1]
let l
return s&&(l=a&n,a>>=r,o[3]=i*l/255),l=a&n,a>>=r,o[2]=i*l,l=a&n,a>>=r,o[1]=i*l,l=a&n,a>>=r,o[0]=i*l,o}},968:function(e,t,r){"use strict"
r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return a}))
var n=r(916)
function i(e){return e?e.hasZ?[e.xmax-e.xmin/2,e.ymax-e.ymin/2,e.zmax-e.zmin/2]:[e.xmax-e.xmin/2,e.ymax-e.ymin/2]:null}function s(e){return e?a(e.rings,e.hasZ):null}function a(e,t){if(!e||!e.length)return null
const r=[],i=[],s=t?[1/0,-1/0,1/0,-1/0,1/0,-1/0]:[1/0,-1/0,1/0,-1/0]
for(let r=0,n=e.length;r<n;r++){const n=o(e[r],t,s)
n&&i.push(n)}if(i.sort((e,r)=>{let n=e[2]-r[2]
return 0===n&&t&&(n=e[4]-r[4]),n}),i.length&&(r[0]=i[0][0],r[1]=i[0][1],t&&(r[2]=i[0][3]),(r[0]<s[0]||r[0]>s[1]||r[1]<s[2]||r[1]>s[3]||t&&(r[2]<s[4]||r[2]>s[5]))&&(r.length=0)),!r.length){const i=e[0]&&e[0].length?function(e,t){const r=t?[0,0,0]:[0,0],i=t?[0,0,0]:[0,0]
let s=0,a=0,o=0,l=0
for(let c=0,u=e.length;c<u-1;c++){const u=e[c],d=e[c+1]
if(u&&d){r[0]=u[0],r[1]=u[1],i[0]=d[0],i[1]=d[1],t&&u.length>2&&d.length>2&&(r[2]=u[2],i[2]=d[2])
const e=Object(n.c)(r,i)
if(e){s+=e
const r=Object(n.d)(u,d)
a+=e*r[0],o+=e*r[1],t&&r.length>2&&(l+=e*r[2])}}}return s>0?t?[a/s,o/s,l/s]:[a/s,o/s]:e.length?e[0]:null}(e[0],t):null
if(!i)return null
r[0]=i[0],r[1]=i[1],t&&i.length>2&&(r[2]=i[2])}return r}function o(e,t,r){let n=0,i=0,s=0,a=0,o=0
const l=e.length?e[0][0]:0,c=e.length?e[0][1]:0,u=e.length&&t?e[0][2]:0
for(let d=0;d<e.length;d++){const p=e[d],h=e[(d+1)%e.length],[b,f,y]=p,m=b-l,O=f-c,g=t?y-u:void 0,[j,v,w]=h,S=j-l,x=v-c,_=t?w-u:void 0,M=m*x-S*O
if(a+=M,n+=(m+S)*M,i+=(O+x)*M,t&&p.length>2&&h.length>2){const e=m*_-S*g
s+=(g+_)*e,o+=e}b<r[0]&&(r[0]=b),b>r[1]&&(r[1]=b),f<r[2]&&(r[2]=f),f>r[3]&&(r[3]=f),t&&(y<r[4]&&(r[4]=y),y>r[5]&&(r[5]=y))}if(a>0&&(a*=-1),o>0&&(o*=-1),!a)return null
a*=.5,o*=.5
const d=[n/(6*a)+l,i/(6*a)+c,a]
return t&&(r[4]===r[5]||0===o?(d[3]=(r[4]+r[5])/2,d[4]=0):(d[3]=s/(6*o)+u,d[4]=o)),d}},971:function(e,t,r){"use strict"
function n(e){return(t,r)=>{t[r]=e}}r.d(t,"a",(function(){return n}))},975:function(e,t,r){"use strict"
r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d})),r.d(t,"c",(function(){return y})),r.d(t,"d",(function(){return v})),r.d(t,"e",(function(){return j})),r.d(t,"f",(function(){return p})),r.d(t,"g",(function(){return h})),r.d(t,"h",(function(){return m})),r.d(t,"i",(function(){return O})),r.d(t,"j",(function(){return f})),r.d(t,"k",(function(){return g}))
var n=r(20),i=r(292),s=r(936)
const a={mapserver:"MapServer",imageserver:"ImageServer",featureserver:"FeatureServer",sceneserver:"SceneServer",streamserver:"StreamServer",vectortileserver:"VectorTileServer"},o=Object.values(a),l=new RegExp(`^((?:https?:)?\\/\\/\\S+?\\/rest\\/services\\/(.+?)\\/(${o.join("|")}))(?:\\/(?:layers\\/)?(\\d+))?`,"i"),c=new RegExp(`^((?:https?:)?\\/\\/\\S+?\\/([^\\/\\n]+)\\/(${o.join("|")}))(?:\\/(?:layers\\/)?(\\d+))?`,"i"),u=/(.*?)\/(?:layers\/)?(\d+)\/?$/i
function d(e){return!!l.test(e)}function p(e){const t=Object(i.M)(e),r=t.path.match(l)||t.path.match(c)
if(!r)return null
const[,n,s,o,u]=r,d=s.indexOf("/")
return{title:b(-1!==d?s.slice(d+1):s),serverType:a[o.toLowerCase()],sublayer:null!=u&&""!==u?parseInt(u,10):null,url:{path:n}}}function h(e){const t=Object(i.M)(e).path.match(u)
return t?{serviceUrl:t[1],sublayerId:Number(t[2])}:null}function b(e){return(e=e.replace(/\s*[/_]+\s*/g," "))[0].toUpperCase()+e.slice(1)}function f(e,t){const r=[]
if(e){const t=p(e)
Object(n.k)(t)&&t.title&&r.push(t.title)}if(t){const e=b(t)
r.push(e)}if(2===r.length){if(-1!==r[0].toLowerCase().indexOf(r[1].toLowerCase()))return r[0]
if(-1!==r[1].toLowerCase().indexOf(r[0].toLowerCase()))return r[1]}return r.join(" - ")}function y(e){if(!e)return!1
const t=-1!==(e=e.toLowerCase()).indexOf(".arcgis.com/"),r=-1!==e.indexOf("//services")||-1!==e.indexOf("//tiles")||-1!==e.indexOf("//features")
return t&&r}function m(e,t){return e?Object(i.K)(Object(i.J)(e,t)):e}function O(e){let{url:t}=e
if(!t)return{url:t}
t=Object(i.J)(t,e.logger)
const r=Object(i.M)(t),s=p(r.path)
let a
if(Object(n.k)(s))null!=s.sublayer&&null==e.layer.layerId&&(a=s.sublayer),t=s.url.path
else if(e.nonStandardUrlAllowed){const e=h(r.path)
Object(n.k)(e)&&(t=e.serviceUrl,a=e.sublayerId)}return{url:Object(i.K)(t),layerId:a}}function g(e,t,r,n,a){Object(s.g)(t,n,"url",a),n.url&&null!=e.layerId&&(n.url=Object(i.B)(n.url,r,e.layerId.toString()))}function j(e){if(!e)return!1
const t=e.toLowerCase(),r=-1!==t.indexOf("/services/"),n=-1!==t.indexOf("/mapserver/wmsserver"),i=-1!==t.indexOf("/imageserver/wmsserver"),s=-1!==t.indexOf("/wmsserver")
return r&&(n||i||s)}function v(e){if(!e)return!1
const t=new i.a(Object(i.C)(e)).authority.toLowerCase()
return"server.arcgisonline.com"===t||"services.arcgisonline.com"===t}},976:function(e,t,r){"use strict"
r.d(t,"a",(function(){return h}))
var n,i=r(856),s=r(873),a=r(178),o=r(858),l=r(859),c=r(868),u=r(857),d=r(944)
let p=n=class extends d.a{constructor(e){super(e),this.algorithm=null,this.fromColor=null,this.toColor=null,this.type="algorithmic"}clone(){return new n({fromColor:Object(a.a)(this.fromColor),toColor:Object(a.a)(this.toColor),algorithm:this.algorithm})}}
Object(i.a)([Object(c.a)({esriCIELabAlgorithm:"cie-lab",esriHSVAlgorithm:"hsv",esriLabLChAlgorithm:"lab-lch"})],p.prototype,"algorithm",void 0),Object(i.a)([Object(o.b)({type:s.a,json:{type:[l.a],write:!0}})],p.prototype,"fromColor",void 0),Object(i.a)([Object(o.b)({type:s.a,json:{type:[l.a],write:!0}})],p.prototype,"toColor",void 0),Object(i.a)([Object(o.b)({type:["algorithmic"]})],p.prototype,"type",void 0),p=n=Object(i.a)([Object(u.a)("esri.rest.support.AlgorithmicColorRamp")],p)
const h=p},983:function(e,t,r){"use strict"
r.d(t,"a",(function(){return A}))
var n,i=r(856),s=r(863),a=r(860),o=r(858),l=(r(353),r(77),r(880)),c=r(868),u=r(865),d=r(857),p=r(859),h=r(1015),b=r(941),f=r(1088),y=(r(870),r(659)),m=r(888)
let O=n=class extends a.a{constructor(e){super(e),this.type="query-table"}clone(){var e
const{workspaceId:t,query:r,oidFields:i,spatialReference:s,geometryType:a}=this,o={workspaceId:t,query:r,oidFields:i,spatialReference:null!=(e=null==s?void 0:s.clone())?e:void 0,geometryType:a}
return new n(o)}}
var g
Object(i.a)([Object(c.a)({queryTable:"query-table"})],O.prototype,"type",void 0),Object(i.a)([Object(o.b)({type:String,json:{write:!0}})],O.prototype,"workspaceId",void 0),Object(i.a)([Object(o.b)({type:String,json:{write:!0}})],O.prototype,"query",void 0),Object(i.a)([Object(o.b)({type:String,json:{write:!0}})],O.prototype,"oidFields",void 0),Object(i.a)([Object(o.b)({type:y.default,json:{write:!0}})],O.prototype,"spatialReference",void 0),Object(i.a)([Object(c.a)(m.a)],O.prototype,"geometryType",void 0),O=n=Object(i.a)([Object(d.a)("esri.layers.support.source.QueryTableDataSource")],O)
let j=g=class extends a.a{constructor(e){super(e),this.type="raster"}clone(){const{workspaceId:e,dataSourceName:t}=this
return new g({workspaceId:e,dataSourceName:t})}}
var v
Object(i.a)([Object(c.a)({raster:"raster"})],j.prototype,"type",void 0),Object(i.a)([Object(o.b)({type:String,json:{write:!0}})],j.prototype,"dataSourceName",void 0),Object(i.a)([Object(o.b)({type:String,json:{write:!0}})],j.prototype,"workspaceId",void 0),j=g=Object(i.a)([Object(d.a)("esri.layers.support.source.RasterDataSource")],j)
let w=v=class extends a.a{constructor(e){super(e),this.type="table"}clone(){const{workspaceId:e,gdbVersion:t,dataSourceName:r}=this
return new v({workspaceId:e,gdbVersion:t,dataSourceName:r})}}
var S,x
Object(i.a)([Object(c.a)({table:"table"})],w.prototype,"type",void 0),Object(i.a)([Object(o.b)({type:String,json:{write:!0}})],w.prototype,"workspaceId",void 0),Object(i.a)([Object(o.b)({type:String,json:{write:!0}})],w.prototype,"gdbVersion",void 0),Object(i.a)([Object(o.b)({type:String,json:{write:!0}})],w.prototype,"dataSourceName",void 0),w=v=Object(i.a)([Object(d.a)("esri.layers.support.source.TableDataSource")],w)
const _=Object(s.b)()({esriLeftInnerJoin:"left-inner-join",esriLeftOuterJoin:"left-outer-join"})
let M=S=class extends a.a{constructor(e){super(e),this.type="join-table"}readLeftTableSource(e,t,r){return T()(e,t,r)}castLeftTableSource(e){return Object(p.k)(L(),e)}readRightTableSource(e,t,r){return T()(e,t,r)}castRightTableSource(e){return Object(p.k)(L(),e)}clone(){var e,t
const{leftTableKey:r,rightTableKey:n,leftTableSource:i,rightTableSource:s,joinType:a}=this,o={leftTableKey:r,rightTableKey:n,leftTableSource:null!=(e=null==i?void 0:i.clone())?e:void 0,rightTableSource:null!=(t=null==s?void 0:s.clone())?t:void 0,joinType:a}
return new S(o)}}
Object(i.a)([Object(c.a)({joinTable:"join-table"})],M.prototype,"type",void 0),Object(i.a)([Object(o.b)({type:String,json:{write:!0}})],M.prototype,"leftTableKey",void 0),Object(i.a)([Object(o.b)({type:String,json:{write:!0}})],M.prototype,"rightTableKey",void 0),Object(i.a)([Object(o.b)({json:{write:!0}})],M.prototype,"leftTableSource",void 0),Object(i.a)([Object(u.a)("leftTableSource")],M.prototype,"readLeftTableSource",null),Object(i.a)([Object(l.a)("leftTableSource")],M.prototype,"castLeftTableSource",null),Object(i.a)([Object(o.b)({json:{write:!0}})],M.prototype,"rightTableSource",void 0),Object(i.a)([Object(u.a)("rightTableSource")],M.prototype,"readRightTableSource",null),Object(i.a)([Object(l.a)("rightTableSource")],M.prototype,"castRightTableSource",null),Object(i.a)([Object(c.a)(_)],M.prototype,"joinType",void 0),M=S=Object(i.a)([Object(d.a)("esri.layers.support.source.JoinTableDataSource")],M)
let I=null
function T(){return I||(I=Object(h.b)({types:L()})),I}let E=null
function L(){return E||(E={key:"type",base:null,typeMap:{"data-layer":A,"map-layer":f.a}}),E}const P={key:"type",base:null,typeMap:{"join-table":M,"query-table":O,raster:j,table:w}}
let A=x=class extends a.a{constructor(e){super(e),this.type="data-layer"}clone(){const{fields:e,dataSource:t}=this
return new x({fields:e,dataSource:t})}}
Object(i.a)([Object(c.a)({dataLayer:"data-layer"})],A.prototype,"type",void 0),Object(i.a)([Object(o.b)({type:[b.a],json:{write:!0}})],A.prototype,"fields",void 0),Object(i.a)([Object(o.b)({types:P,json:{write:!0}})],A.prototype,"dataSource",void 0),A=x=Object(i.a)([Object(d.a)("esri.layers.support.source.DataLayerSource")],A),A.from=Object(p.m)(A)},984:function(e,t,r){"use strict"
var n
r.d(t,"a",(function(){return n})),function(e){e[e.ADD=1]="ADD",e[e.REMOVE=2]="REMOVE",e[e.MOVE=4]="MOVE"}(n||(n={}))},988:function(e,t,r){"use strict"
r.r(t),r.d(t,"default",(function(){return d}))
var n=r(856),i=r(354),s=r(860),a=r(858),o=(r(353),r(77),r(859)),l=r(857),c=r(926)
let u=class extends s.a{constructor(e){super(e),this.access=null,this.created=null,this.description=null,this.id=null,this.isInvitationOnly=!1,this.modified=null,this.owner=null,this.portal=null,this.snippet=null,this.sortField=null,this.sortOrder=null,this.tags=null,this.title=null}get thumbnailUrl(){const e=this.url,t=this.thumbnail
return e&&t?this.portal._normalizeUrl(`${e}/info/${t}?f=json`):null}get url(){const e=this.get("portal.restUrl")
return e?e+"/community/groups/"+this.id:null}fetchCategorySchema(e){return this.portal._request(this.url+"/categorySchema",e).then(t=>{const r=t.categorySchema||[]
return r.some(e=>"contentCategorySetsGroupQuery.LivingAtlas"===e.source)?this._fetchCategorySchemaSet("LivingAtlas",e):r})}fetchMembers(e){return this.portal._request(this.url+"/users",e)}getThumbnailUrl(e){let t=this.thumbnailUrl
return t&&e&&(t+="&w="+e),t}toJSON(){throw new i.a("internal:not-yet-implemented","PortalGroup.toJSON is not yet implemented")}queryItems(e,t){let r=Object(o.m)(c.a,e)
return parseFloat(this.portal.currentVersion)>5?(r=r||new c.a,this.portal._queryPortal(`/content/groups/${this.id}/search`,r,"PortalItem",t)):(r=r?r.clone():new c.a,r.query="group:"+this.id+(r.query?" "+r.query:""),this.portal.queryItems(r,t))}_fetchCategorySchemaSet(e,t){return this.portal._fetchSelf(this.portal.authMode,!0,t).then(e=>{const r=e.contentCategorySetsGroupQuery
if(r){const e=new c.a
return e.disableExtraQuery=!0,e.num=1,e.query=r,this.portal.queryGroups(e,t)}throw new i.a("portal-group:fetchCategorySchema","contentCategorySetsGroupQuery value not found")}).then(r=>{if(r.total){const n=r.results[0],i=new c.a
return i.num=1,i.query=`typekeywords:"${e}"`,n.queryItems(i,t)}throw new i.a("portal-group:fetchCategorySchema","contentCategorySetsGroupQuery group not found")}).then(e=>e.total?e.results[0].fetchData("json",t).then(e=>{const t=e&&e.categorySchema
return t&&t.length?t:[]}):[])}}
Object(n.a)([Object(a.b)()],u.prototype,"access",void 0),Object(n.a)([Object(a.b)({type:Date})],u.prototype,"created",void 0),Object(n.a)([Object(a.b)()],u.prototype,"description",void 0),Object(n.a)([Object(a.b)()],u.prototype,"id",void 0),Object(n.a)([Object(a.b)()],u.prototype,"isInvitationOnly",void 0),Object(n.a)([Object(a.b)({type:Date})],u.prototype,"modified",void 0),Object(n.a)([Object(a.b)()],u.prototype,"owner",void 0),Object(n.a)([Object(a.b)()],u.prototype,"portal",void 0),Object(n.a)([Object(a.b)()],u.prototype,"snippet",void 0),Object(n.a)([Object(a.b)()],u.prototype,"sortField",void 0),Object(n.a)([Object(a.b)()],u.prototype,"sortOrder",void 0),Object(n.a)([Object(a.b)()],u.prototype,"tags",void 0),Object(n.a)([Object(a.b)()],u.prototype,"thumbnail",void 0),Object(n.a)([Object(a.b)({readOnly:!0})],u.prototype,"thumbnailUrl",null),Object(n.a)([Object(a.b)()],u.prototype,"title",void 0),Object(n.a)([Object(a.b)({readOnly:!0})],u.prototype,"url",null),u=Object(n.a)([Object(l.a)("esri.portal.PortalGroup")],u)
const d=u},991:function(e,t,r){"use strict"
r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return o})),r(77)
var n=r(950),i=r(901),s=r(951),a=r(952)
const o={key:"type",base:i.a,typeMap:{range:a.a,"coded-value":n.a,inherited:s.a}}
function l(e){if(!e||!e.type)return null
switch(e.type){case"range":return a.a.fromJSON(e)
case"codedValue":return n.a.fromJSON(e)
case"inherited":return s.a.fromJSON(e)}return null}},999:function(e,t,r){"use strict"
r.d(t,"a",(function(){return s}))
var n=r(886),i=r(902)
const s={inches:Object(n.c)(1,"meters","inches"),feet:Object(n.c)(1,"meters","feet"),"us-feet":Object(n.c)(1,"meters","us-feet"),yards:Object(n.c)(1,"meters","yards"),miles:Object(n.c)(1,"meters","miles"),"nautical-miles":Object(n.c)(1,"meters","nautical-miles"),millimeters:Object(n.c)(1,"meters","millimeters"),centimeters:Object(n.c)(1,"meters","centimeters"),decimeters:Object(n.c)(1,"meters","decimeters"),meters:Object(n.c)(1,"meters","meters"),kilometers:Object(n.c)(1,"meters","kilometers"),"decimal-degrees":1/Object(n.l)(1,"meters",i.a.radius)}}}])
