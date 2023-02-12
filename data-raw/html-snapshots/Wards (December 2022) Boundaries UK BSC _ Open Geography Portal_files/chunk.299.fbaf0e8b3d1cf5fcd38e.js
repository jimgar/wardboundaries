(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[299],{1450:function(e,t,i){"use strict"
function a(e,t){return t?"xoffset"in t&&t.xoffset?Math.max(e,Math.abs(t.xoffset)):"yoffset"in t&&t.yoffset?Math.max(e,Math.abs(t.yoffset||0)):e:e}function s(e,t){return"number"==typeof e?e:e&&e.stops&&e.stops.length?function(e){let t=0,i=0
for(let a=0;a<e.length;a++){const s=e[a].size
"number"==typeof s&&(t+=s,i++)}return t/i}(e.stops):t}function r(e,t){if(!t)return e
const i=t.filter(e=>"size"===e.type).map(t=>{const{maxSize:i,minSize:a}=t
return(s(i,e)+s(a,e))/2})
let a=0
const r=i.length
if(0===r)return e
for(let e=0;e<r;e++)a+=i[e]
const n=Math.floor(a/r)
return Math.max(n,e)}function n(e){const t=e&&e.renderer,i="touch"===(e&&e.event&&e.event.pointerType)?9:6
if(!t)return i
const s="visualVariables"in t?r(i,t.visualVariables):i
if("simple"===t.type)return a(s,t.symbol)
if("unique-value"===t.type){let e=s
return t.uniqueValueInfos.forEach(t=>{e=a(e,t.symbol)}),e}if("class-breaks"===t.type){let e=s
return t.classBreakInfos.forEach(t=>{e=a(e,t.symbol)}),e}return t.type,s}i.d(t,"a",(function(){return n}))},1538:function(e,t,i){"use strict"
i.d(t,"a",(function(){return l})),i.d(t,"b",(function(){return c})),i(870)
var a=i(20),s=i(886),r=i(1450),n=i(658)
function l(e,t,i,r=new n.default){let l
if("2d"===i.type)l=t*i.resolution
else if("3d"===i.type){const r=i.overlayPixelSizeInMapUnits(e),n=i.basemapSpatialReference
l=Object(a.k)(n)&&!n.equals(i.spatialReference)?Object(s.f)(n)/Object(s.f)(i.spatialReference):t*r}const c=e.x-l,u=e.y-l,o=e.x+l,h=e.y+l,{spatialReference:f}=i
return r.xmin=Math.min(c,o),r.ymin=Math.min(u,h),r.xmax=Math.max(c,o),r.ymax=Math.max(u,h),r.spatialReference=f,r}function c(e,t,i){const s=i.toMap(e)
return!Object(a.j)(s)&&l(s,Object(r.a)(),i,u).intersects(t)}const u=new n.default},2155:function(e,t,i){"use strict"
i.d(t,"a",(function(){return o}))
var a=i(856),s=i(354),r=i(20),n=i(861),l=i(858),c=(i(353),i(77),i(859),i(857)),u=i(1450)
const o=e=>{let t=class extends e{async fetchPopupFeatures(e,t){const{layer:i}=this
if(!e)return Promise.reject(new s.a("tilelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:i}))
if("tile"!==i.type)return Promise.reject(new s.a("tilelayerview:fetchPopupFeatures","Layer type should be 'tile'",{type:i.type}))
const a=this.get("view.scale"),l=i.allSublayers.toArray().filter(e=>{const t=0===e.minScale||a<=e.minScale,i=0===e.maxScale||a>=e.maxScale
return e.popupTemplate&&e.popupEnabled&&e.visible&&t&&i})
return Object(n.j)(l.map(async i=>{const a=i.createQuery(),s=Object(r.k)(t)?t.event:null,n=Object(u.a)({renderer:i.renderer,event:s})
return a.geometry=this.createFetchPopupFeaturesQueryGeometry(e,n),a.outFields=await i.popupTemplate.getRequiredFields(),(await i.queryFeatures(a)).features})).then(e=>[].concat(...e.map(e=>e.value).filter(Boolean)))}}
return Object(a.a)([Object(l.b)()],t.prototype,"layer",void 0),t=Object(a.a)([Object(c.a)("esri.layers.mixins.TileLayerView")],t),t}},2326:function(e,t,i){"use strict"
i.r(t),i.d(t,"default",(function(){return O}))
var a=i(856),s=i(177),r=i(861),n=i(892),l=i(858),c=(i(353),i(77),i(859),i(857)),u=i(872),o=i(2237),h=i(1331),f=i(2238),p=i(1394),y=i(1059),m=i(1437),d=i(1466),b=i(1118),w=i(1241),_=i(2155),g=i(1538)
const v=[0,0]
let j=class extends(Object(_.a)(Object(w.a)(Object(o.a)(Object(h.a)(b.a))))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this.layer=null}get resampling(){return!("resampling"in this.layer)||!1!==this.layer.resampling}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume()}attach(){const e="tileServers"in this.layer?this.layer.tileServers:null
this._tileInfoView=new p.a(this.layer.tileInfo,this.layer.fullExtent),this._fetchQueue=new m.a({tileInfoView:this._tileInfoView,concurrency:e&&10*e.length||10,process:(e,t)=>this.fetchTile(e,t)}),this._tileStrategy=new d.a({cachePolicy:"keep",resampling:this.resampling,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),this.requestUpdate(),this.handles.add(Object(n.e)(()=>this.resampling,()=>{this.doRefresh()})),super.attach()}detach(){super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(e){var t
return Object(u.d)(null==(t=this.layer.tileInfo)?void 0:t.spatialReference,e)}createFetchPopupFeaturesQueryGeometry(e,t){return Object(g.a)(e,t,this.view)}async doRefresh(){this.updateRequested||this.suspended||(this._fetchQueue.reset(),this._tileStrategy.tiles.forEach(e=>this._enqueueTileFetch(e)))}isUpdating(){var e,t
return null!=(e=null==(t=this._fetchQueue)?void 0:t.updating)&&e}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap
return[i.x,i.y]=this._tileInfoView.getTileCoords(v,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(t),this._bitmapView.addChild(t),this.requestUpdate(),t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",()=>e.destroy()),this.requestUpdate()}async fetchTile(e,t={}){const i="tilemapCache"in this.layer?this.layer.tilemapCache:null,{signal:a,resamplingLevel:s=0}=t
if(!i)try{return await this._fetchImage(e,a)}catch(i){if(!Object(r.m)(i)&&!this.resampling)return Object(f.a)(this._tileInfoView.tileInfo.size)
if(s<3){const i=this._tileInfoView.getTileParentId(e.id)
if(i){const a=new y.a(i),r=await this.fetchTile(a,{...t,resamplingLevel:s+1})
return Object(f.b)(this._tileInfoView,r,a,e)}}throw i}const n=new y.a(0,0,0,0)
let l
try{if(await i.fetchAvailabilityUpsample(e.level,e.row,e.col,n,{signal:a}),n.level!==e.level&&!this.resampling)return Object(f.a)(this._tileInfoView.tileInfo.size)
l=await this._fetchImage(n,a)}catch(t){if(Object(r.m)(t))throw t
l=await this._fetchImage(e,a)}return this.resampling?Object(f.b)(this._tileInfoView,l,n,e):l}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key)
e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",()=>this.requestUpdate())}catch(e){Object(r.m)(e)||s.a.getLogger(this.declaredClass).error(e)}this.requestUpdate()}}async _fetchImage(e,t){return this.layer.fetchTile(e.level,e.row,e.col,{signal:t})}}
Object(a.a)([Object(l.b)()],j.prototype,"_fetchQueue",void 0),Object(a.a)([Object(l.b)()],j.prototype,"resampling",null),j=Object(a.a)([Object(c.a)("esri.views.2d.layers.TileLayerView2D")],j)
const O=j}}])
