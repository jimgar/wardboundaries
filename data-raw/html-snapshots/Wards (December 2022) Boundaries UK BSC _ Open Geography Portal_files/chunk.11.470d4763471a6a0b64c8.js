(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[11],{1159:function(t,e,s){"use strict"
s.d(e,"a",(function(){return M})),s.d(e,"b",(function(){return P})),s.d(e,"c",(function(){return a})),s.d(e,"d",(function(){return p})),s.d(e,"e",(function(){return g})),s.d(e,"f",(function(){return y})),s.d(e,"g",(function(){return b})),s.d(e,"h",(function(){return d})),s.d(e,"i",(function(){return m})),s.d(e,"j",(function(){return x}))
var i=s(178),r=s(869),n=s(1697)
function a(t){const e=Object(i.a)(t)
return(s=e)&&(Object(r.g)(s)?_(s.rings):Object(r.h)(s)?_(s.paths):Object(r.e)(s)&&f(s.points),o(s)),e
var s}function o(t){if(!t)return null
Object(r.f)(t)?t.y=-t.y:Object(r.g)(t)?c(t.rings):Object(r.h)(t)?c(t.paths):Object(r.e)(t)&&h(t.points)}function h(t){if(t){const e=t.length
for(let s=0;s<e;s++)t[s][1]=-t[s][1]}}function c(t){if(t)for(const e of t)h(e)}function l(t){if(t)for(let e=t.length-1;e>0;--e)t[e][0]-=t[e-1][0],t[e][1]-=t[e-1][1]}function u(t){if(t)for(const e of t)l(e)}function f(t){if(t){const e=t.length
for(let s=1;s<e;++s)t[s][0]+=t[s-1][0],t[s][1]+=t[s-1][1]}}function _(t){if(t)for(const e of t)f(e)}function p(t){t&&(o(t),Object(r.g)(t)?u(t.rings):Object(r.h)(t)?u(t.paths):Object(r.e)(t)&&l(t.points))}function d(t){if(t)for(const e of t)m(e)}function m(t){t&&t.reverse()}function g(t,e,s){return[t[0]+(e[0]-t[0])*s,t[1]+(e[1]-t[1])*s]}function b(t){return!(!t||0===t.length)&&t[0][0]===t[t.length-1][0]&&t[0][1]===t[t.length-1][1]}function y(t){return t[4]}function x(t,e){t[4]=e}class P{constructor(t,e,s,i){this.acceptPolygon=e,this.acceptPolyline=s,this.geomUnitsPerPoint=i,this.pathCount=-1,this.pathIndex=-1,this.iteratePath=!1,t&&(Object(r.g)(t)?e&&(this.multiPath=t.rings,this.isClosed=!0):Object(r.h)(t)?s&&(this.multiPath=t.paths,this.isClosed=!1):Object(r.d)(t)&&e&&(this.multiPath=S(t).rings,this.isClosed=!0),this.multiPath&&(this.pathCount=this.multiPath.length)),this.internalPlacement=new n.a}next(){if(!this.multiPath)return null
for(;this.iteratePath||this.pathIndex<this.pathCount-1;){this.iteratePath||this.pathIndex++
const t=this.processPath(this.multiPath[this.pathIndex])
if(t)return t}return this.pathCount=-1,this.pathIndex=-1,this.multiPath=null,null}}class M{constructor(t,e,s,i){this.inputGeometries=t,this.acceptPolygon=e,this.acceptPolyline=s,this.geomUnitsPerPoint=i,this.pathCount=-1,this.pathIndex=-1,this.iteratePath=!1}next(){for(;;){if(!this.multiPath){let t=this.inputGeometries.next()
for(;t;){if(Object(r.g)(t)?this.acceptPolygon&&(this.multiPath=t.rings,this.isClosed=!0):Object(r.h)(t)?this.acceptPolyline&&(this.multiPath=t.paths,this.isClosed=!1):Object(r.d)(t)&&this.acceptPolygon&&(this.multiPath=S(t).rings,this.isClosed=!0),this.multiPath){this.pathCount=this.multiPath.length,this.pathIndex=-1
break}t=this.inputGeometries.next()}if(!this.multiPath)return null}for(;this.iteratePath||this.pathIndex<this.pathCount-1;){this.iteratePath||this.pathIndex++
const t=this.processPath(this.multiPath[this.pathIndex])
if(t)return t}this.pathCount=-1,this.pathIndex=-1,this.multiPath=null}}}function S(t){return{rings:[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]}}},1179:function(t,e,s){"use strict"
s.d(e,"a",(function(){return O})),s.d(e,"b",(function(){return I})),s.d(e,"c",(function(){return j})),s.d(e,"d",(function(){return A})),s.d(e,"e",(function(){return N})),s.d(e,"f",(function(){return C}))
var i=s(873),r=s(1251),n=s(1177),a=s(178),o=s(177),h=s(874),c=s(20),l=s(876),u=s(884),f=s(943),_=s(1697),p=s(1666),d=s(969),m=s(1149),g=s(1562),b=s(891),y=s(1395)
const x=Math.PI,P=x/2,M=96/72,S=Math.PI/180,w=o.a.getLogger("esri.symbols.cim.CIMSymbolHelper")
function C(t){if(!t||!t.type)return null
let e
switch(t.type){case"cim":return t.data
case"web-style":return t
case"simple-marker":e=I.fromSimpleMarker(t)
break
case"picture-marker":e=I.fromPictureMarker(t)
break
case"simple-line":e=I.fromSimpleLineSymbol(t)
break
case"simple-fill":e=I.fromSimpleFillSymbol(t)
break
case"picture-fill":e=I.fromPictureFillSymbol(t)
break
case"text":e=I.fromTextSymbol(t)}return{type:"CIMSymbolReference",symbol:e}}function k(t,e){switch(e.type){case"CIMSymbolReference":return k(t,e.symbol)
case"CIMPointSymbol":{const s={x:0,y:0}
t.drawSymbol(e,s)
break}case"CIMLineSymbol":{const s={paths:[[[0,0],[0,1]]]}
t.drawSymbol(e,s)
break}case"CIMPolygonSymbol":{const s={rings:[[[0,0],[0,1],[0,0]]]}
t.drawSymbol(e,s)
break}case"CIMTextSymbol":{const s={x:0,y:0}
t.drawSymbol(e,s)
break}case"CIMVectorMarker":{const s=new _.a
t.drawMarker(e,s)
break}}return t.envelope()}function v(t){if(!t)return 0
switch(t.type){case"CIMMarkerPlacementAlongLineSameSize":case"CIMMarkerPlacementAlongLineRandomSize":case"CIMMarkerPlacementAtExtremities":case"CIMMarkerPlacementAtMeasuredUnits":case"CIMMarkerPlacementAtRatioPositions":case"CIMMarkerPlacementOnLine":case"CIMMarkerPlacementOnVertices":return Math.abs(t.offset)
default:return 0}}function T(t){if(!t)return 0
switch(t.type){case"CIMGeometricEffectArrow":return Math.abs(.5*t.width)
case"CIMGeometricEffectBuffer":return Math.abs(t.size)
case"CIMGeometricEffectExtension":case"CIMGeometricEffectRadial":return Math.abs(t.length)
case"CIMGeometricEffectJog":return Math.abs(.5*t.length)
case"CIMGeometricEffectMove":return Math.max(Math.abs(Object(m.f)(t.offsetX)),Math.abs(Object(m.f)(t.offsetY)))
case"CIMGeometricEffectOffset":case"CIMGeometricEffectOffsetTangent":return Math.abs(t.offset)
case"CIMGeometricEffectRegularPolygon":return Math.abs(t.radius)
case"CIMGeometricEffectRotate":case"CIMGeometricEffectScale":default:return 0
case"CIMGeometricEffectTaperedPolygon":return.5*Math.max(Math.abs(t.fromWidth),Math.abs(t.toWidth))
case"CIMGeometricEffectWave":return Math.abs(t.amplitude)}}function L(t){if(!t)return 0
let e=0
for(const s of t)e+=T(s)
return e}class O{getSymbolInflateSize(t,e,s,i,r){return t||(t=[0,0,0,0]),e?this._getInflateSize(t,e,s,i,r):t}static safeSize(t){const e=Math.max(Math.abs(t[0]),Math.abs(t[2])),s=Math.max(Math.abs(t[1]),Math.abs(t[3]))
return Math.sqrt(e*e+s*s)}_vectorMarkerBounds(t,e,s,i){let r=!0
const n=Object(u.m)()
if(e&&e.markerGraphics)for(const a of e.markerGraphics){const e=[0,0,0,0]
a.geometry&&(Object(f.a)(n,a.geometry),e[0]=0,e[1]=0,e[2]=0,e[3]=0,this.getSymbolInflateSize(e,a.symbol,s,0,i),n[0]+=e[0],n[1]+=e[1],n[2]+=e[2],n[3]+=e[3],r?(t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],r=!1):(t[0]=Math.min(t[0],n[0]),t[1]=Math.min(t[1],n[1]),t[2]=Math.max(t[2],n[2]),t[3]=Math.max(t[3],n[3])))}return t}_getInflateSize(t,e,s,i,r){if(function(t){return void 0!==t.symbolLayers}(e)){const n=this._getLayersInflateSize(t,e.symbolLayers,s,i,r),a=L(e.effects)
return a>0&&(n[0]-=a,n[1]-=a,n[2]+=a,n[3]+=a),n}return this._getTextInflatedSize(t,e,r)}_getLayersInflateSize(t,e,s,i,r){let n=!0
if(!e)return t
for(const a of e){if(!a)continue
let e=[0,0,0,0]
switch(a.type){case"CIMSolidFill":case"CIMPictureFill":case"CIMHatchFill":case"CIMGradientFill":break
case"CIMSolidStroke":case"CIMPictureStroke":case"CIMGradientStroke":{const t=a
let s=t.width
t.capStyle===d.p.Square||t.joinStyle===d.r.Miter?s/=1.4142135623730951:s/=2,e[0]=-s,e[1]=-s,e[2]=s,e[3]=s
break}case"CIMCharacterMarker":case"CIMVectorMarker":case"CIMPictureMarker":{const t=a
if("CIMVectorMarker"===a.type){const t=a
if(e=this._vectorMarkerBounds(e,t,s,r),t.frame){const s=(t.frame.xmin+t.frame.xmax)/2,i=(t.frame.ymin+t.frame.ymax)/2
e[0]-=s,e[1]-=i,e[2]-=s,e[3]-=i
const r=t.size/(t.frame.ymax-t.frame.ymin)
e[0]*=r,e[1]*=r,e[2]*=r,e[3]*=r}}else if("CIMPictureMarker"===a.type){const i=a,r=s.getResource(i.url)
let n=1
Object(c.k)(r)&&r.height&&(n=r.width/r.height)
const o=t.size/2,h=t.size*n*i.scaleX/2
e=[-h,-o,h,o]}else{const s=t.size/2
e=[-s,-s,s,s]}if(t.anchorPoint){let s,i
"Absolute"===t.anchorPointUnits?(s=t.anchorPoint.x,i=t.anchorPoint.y):(s=t.anchorPoint.x*(e[2]-e[0]),i=t.anchorPoint.y*(e[3]-e[1])),e[0]-=s,e[1]-=i,e[2]-=s,e[3]-=i}let n=Object(m.f)(t.rotation)
if(t.rotateClockwise&&(n=-n),i&&(n-=i),n){const t=S*n,s=Math.cos(t),i=Math.sin(t),r=Object(u.m)([g.c,g.c,-g.c,-g.c])
Object(u.r)(r,[e[0]*s-e[1]*i,e[0]*i+e[1]*s]),Object(u.r)(r,[e[0]*s-e[3]*i,e[0]*i+e[3]*s]),Object(u.r)(r,[e[2]*s-e[1]*i,e[2]*i+e[1]*s]),Object(u.r)(r,[e[2]*s-e[3]*i,e[2]*i+e[3]*s]),e=r}let o=Object(m.f)(t.offsetX),h=Object(m.f)(t.offsetY)
if(i){const t=S*i,e=Math.cos(t),s=Math.sin(t),r=o*s+h*e
o=o*e-h*s,h=r}e[0]+=o,e[1]+=h,e[2]+=o,e[3]+=h
const l=v(t.markerPlacement)
l>0&&(e[0]-=l,e[1]-=l,e[2]+=l,e[3]+=l)
break}}const o=L(a.effects)
o>0&&(e[0]-=o,e[1]-=o,e[2]+=o,e[3]+=o),n?(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],n=!1):(t[0]=Math.min(t[0],e[0]),t[1]=Math.min(t[1],e[1]),t[2]=Math.max(t[2],e[2]),t[3]=Math.max(t[3],e[3]))}return t}_getTextInflatedSize(t,e,s){var i,n
const a=null!=(i=e.height)?i:10
if(t[0]=-a/2,t[1]=-a/2,t[2]=a/2,t[3]=a/2,!s)return t
const o=s.get(e)
if(!o)return t
const{text:h,mosaicItem:c}=o
if(!c||0===c.glyphMosaicItems.length)return t
const l=Object(p.f)(e.lineGapType,null!=(n=e.lineGap)?n:0,a),u=Object(r.a)(h)[1],f=c.glyphMosaicItems,_=Object(y.a)(f,u,{scale:a/b.r,angle:Object(m.f)(e.angle),xOffset:Object(m.f)(e.offsetX),yOffset:Object(m.f)(e.offsetY),hAlign:Object(p.e)(e.horizontalAlignment),vAlign:Object(p.g)(e.verticalAlignment),maxLineWidth:512,lineHeight:b.u*Math.max(.25,Math.min(l||1,4)),decoration:e.font.decoration||"none",isCIM:!0}).boundsT
return t[0]=_.x-_.halfWidth,t[1]=-_.y-_.halfHeight,t[2]=_.x+_.halfWidth,t[3]=-_.y+_.halfHeight,t}}class I{static getEnvelope(t,e){const s=new p.b(e)
if(Array.isArray(t)){let e
for(const i of t)e?e.union(k(s,i)):e=k(s,i)
return e}return k(s,t)}static getTextureAnchor(t,e){const s=this.getEnvelope(t,e)
if(!s)return[0,0,0]
const i=(s.x+.5*s.width)*M,r=-(s.y+.5*s.height)*M,n=s.width*M+2,a=s.height*M+2
return[i/n,r/a,a]}static rasterize(t,e,s,i,r=!0){const n=s||this.getEnvelope(e,i)
if(!n)return[null,0,0,0,0]
const a=(n.x+.5*n.width)*M,o=(n.y+.5*n.height)*M
t.width=n.width*M,t.height=n.height*M,s||(t.width+=2,t.height+=2)
const h=t.getContext("2d"),c=p.d.createScale(M,-M)
c.translate(.5*t.width-a,.5*t.height+o)
const l=new p.a(h,i,c)
switch(e.type){case"CIMPointSymbol":{const t={type:"point",x:0,y:0}
l.drawSymbol(e,t)
break}case"CIMVectorMarker":{const t=new _.a
l.drawMarker(e,t)
break}}const u=h.getImageData(0,0,t.width,t.height),f=new Uint8Array(u.data)
if(r){let t
for(let e=0;e<f.length;e+=4)t=f[e+3]/255,f[e]=f[e]*t,f[e+1]=f[e+1]*t,f[e+2]=f[e+2]*t}return[f,t.width,t.height,-a/t.width,-o/t.height]}static fromTextSymbol(t){const{angle:e,color:s,font:i,haloColor:n,haloSize:a,horizontalAlignment:o,kerning:h,text:c,verticalAlignment:l,xoffset:u,yoffset:f}=t
let _,p,g,b,y
i&&(_=i.family,p=i.style,g=i.weight,b=i.size,y=i.decoration)
let x=!1
return c&&(x=Object(r.a)(c)[1]),{type:"CIMPointSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,anchorPointUnits:"Relative",dominantSizeAxis3D:"Y",size:10,billboardMode3D:"FaceNearPlane",frame:{xmin:-5,ymin:-5,xmax:5,ymax:5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{x:0,y:0},symbol:{type:"CIMTextSymbol",angle:e,blockProgression:d.c.BTT,depth3D:1,extrapolateBaselines:!0,fontEffects:d.f.Normal,fontEncoding:d.g.Unicode,fontFamilyName:_||"Arial",fontStyleName:B(p,g),fontType:d.h.Unspecified,haloSize:a,height:b,hinting:d.n.Default,horizontalAlignment:R(null!=o?o:"center"),kerning:h,letterWidth:100,ligatures:!0,lineGapType:"Multiple",offsetX:Object(m.f)(u),offsetY:Object(m.f)(f),strikethrough:"line-through"===y,underline:"underline"===y,symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:G(s)}]},haloSymbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:G(n)}]},shadowColor:[0,0,0,255],shadowOffsetX:1,shadowOffsetY:1,textCase:"Normal",textDirection:x?d.w.RTL:d.w.LTR,verticalAlignment:E(null!=l?l:"baseline"),verticalGlyphOrientation:d.y.Right,wordSpacing:100,billboardMode3D:d.b.FaceNearPlane},textString:c}],scaleSymbolsProportionally:!0,respectFrame:!0}],scaleX:1,angleAlignment:"Display"}}static fromPictureFillSymbol(t){const{height:e,outline:s,width:i,xoffset:r,xscale:n,yoffset:a,yscale:o}=t,h=[],c={type:"CIMPolygonSymbol",symbolLayers:h}
if(s){const{cap:t,join:e,miterLimit:i,width:r}=s
h.push({type:"CIMSolidStroke",color:G(s.color),capStyle:F(t),joinStyle:z(e),miterLimit:i,width:r})}let l=t.url
"esriPFS"===t.type&&t.imageData&&(l=t.imageData)
const u="angle"in t?t.angle:0,f=i*(n||1),_=e*(o||1)
return h.push({type:"CIMPictureFill",invertBackfaceTexture:!1,scaleX:1,textureFilter:d.x.Picture,tintColor:null,url:l,height:_,width:f,offsetX:Object(m.f)(r),offsetY:Object(m.f)(a),rotation:Object(m.f)(-u),colorSubstitutions:null}),c}static fromSimpleFillSymbol(t){const{color:e,style:s,outline:i}=t,r=[],n={type:"CIMPolygonSymbol",symbolLayers:r}
let o=null
if(i){const{cap:t,join:e,style:s}=i
"solid"!==s&&"none"!==s&&"esriSLSSolid"!==s&&"esriSLSNull"!==s&&(o=[{type:"CIMGeometricEffectDashes",dashTemplate:N(s,t),lineDashEnding:"NoConstraint",scaleDash:!0,offsetAlongLine:null}]),r.push({type:"CIMSolidStroke",color:G(i.color),capStyle:F(t),joinStyle:z(e),miterLimit:i.miterLimit,width:i.width,effects:o})}if(s&&"solid"!==s&&"none"!==s&&"esriSFSSolid"!==s&&"esriSFSNull"!==s){const t={type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",color:G(e),capStyle:d.p.Butt,joinStyle:d.r.Miter,width:.75}]}
let i=0
const n=Object(h.o)(Math.ceil(window.devicePixelRatio)),o=V(s)?8*n:10*n
switch(s){case"vertical":case"esriSFSVertical":i=90
break
case"forward-diagonal":case"esriSFSForwardDiagonal":case"diagonal-cross":case"esriSFSDiagonalCross":i=-45
break
case"backward-diagonal":case"esriSFSBackwardDiagonal":i=45
break
case"cross":case"esriSFSCross":i=0}r.push({type:"CIMHatchFill",lineSymbol:t,offsetX:0,offsetY:0,rotation:i,separation:o}),"cross"===s||"esriSFSCross"===s?r.push({type:"CIMHatchFill",lineSymbol:Object(a.a)(t),offsetX:0,offsetY:0,rotation:90,separation:o}):"diagonal-cross"!==s&&"esriSFSDiagonalCross"!==s||r.push({type:"CIMHatchFill",lineSymbol:Object(a.a)(t),offsetX:0,offsetY:0,rotation:45,separation:o})}else!s||"solid"!==s&&"esriSFSSolid"!==s||r.push({type:"CIMSolidFill",enable:!0,color:G(e)})
return n}static fromSimpleLineSymbol(t){const{cap:e,color:s,join:i,marker:r,miterLimit:n,style:a,width:o}=t
let h=null
"solid"!==a&&"none"!==a&&"esriSLSSolid"!==a&&"esriSLSNull"!==a&&(h=[{type:"CIMGeometricEffectDashes",dashTemplate:N(a,e),lineDashEnding:"NoConstraint",scaleDash:!0,offsetAlongLine:null}])
const c=[]
if(r){let t
switch(r.placement){case"begin-end":t=d.e.Both
break
case"begin":t=d.e.JustBegin
break
case"end":t=d.e.JustEnd
break
default:t=d.e.None}const e=I.fromSimpleMarker(r,o,s).symbolLayers[0]
e.markerPlacement={type:"CIMMarkerPlacementAtExtremities",angleToLine:!0,offset:0,extremityPlacement:t,offsetAlongLine:0},c.push(e)}return"none"!==a&&"esriSLSNull"!==a&&c.push({type:"CIMSolidStroke",color:G(s),capStyle:F(e),joinStyle:z(i),miterLimit:n,width:o,effects:h}),{type:"CIMLineSymbol",symbolLayers:c}}static fromPictureMarker(t){const{angle:e,height:s,width:i,xoffset:r,yoffset:n}=t
let a=t.url
return"esriPMS"===t.type&&t.imageData&&(a=t.imageData),{type:"CIMPointSymbol",symbolLayers:[{type:"CIMPictureMarker",invertBackfaceTexture:!1,scaleX:1,textureFilter:d.x.Picture,tintColor:null,url:a,size:s,width:i,offsetX:Object(m.f)(r),offsetY:Object(m.f)(n),rotation:Object(m.f)(-e)}]}}static fromSimpleMarker(t,e,s){var i
const{style:r}=t,n=null!=(i=t.color)?i:s
if("path"===r){const e=[]
if("outline"in t&&t.outline){const s=t.outline
e.push({type:"CIMSolidStroke",enable:!0,width:Object(l.h)(Math.round(Object(l.i)(s.width))),color:G(s.color)})}e.push({type:"CIMSolidFill",enable:!0,color:G(n),path:t.path})
const[s,i]=U("square")
return{type:"CIMPointSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,rotation:Object(m.f)(-t.angle),size:Object(m.f)(t.size||6),offsetX:Object(m.f)(t.xoffset),offsetY:Object(m.f)(t.yoffset),frame:s,markerGraphics:[{type:"CIMMarkerGraphic",geometry:i,symbol:{type:"CIMPolygonSymbol",symbolLayers:e}}]}]}}const[a,o]=U(r)
let h
if(o&&a){const s=[]
if("outline"in t&&t.outline){const e=t.outline
s.push({type:"CIMSolidStroke",enable:!0,width:e.width>.667?Object(l.h)(Math.round(Object(l.i)(e.width))):e.width,color:G(e.color)})}else!e||"line-marker"!==t.type||"cross"!==t.style&&"x"!==t.style||s.push({type:"CIMSolidStroke",enable:!0,width:e,color:G(n)})
s.push({type:"CIMSolidFill",enable:!0,color:G(n)})
const i={type:"CIMPolygonSymbol",symbolLayers:s}
h={type:"CIMPointSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,rotation:Object(m.f)(-t.angle),size:Object(m.f)(t.size||6*e),offsetX:Object(m.f)(t.xoffset),offsetY:Object(m.f)(t.yoffset),frame:a,markerGraphics:[{type:"CIMMarkerGraphic",geometry:o,symbol:i}]}]}}return h}static fromCIMHatchFill(t){var e
const s=null!=(e=t.separation)?e:4,i=s/2
let r=this._getLineSymbolPeriod(t.lineSymbol)||4
for(;r<4;)r*=2
const n=r/2
return{type:"CIMVectorMarker",frame:{xmin:-n,xmax:n,ymin:-i,ymax:i},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{paths:[[[-n,0],[n,0]]]},symbol:t.lineSymbol}],size:s}}static _getLineSymbolPeriod(t){if(t){const e=this._getEffectsRepeat(t.effects)
if(e)return e
if(t.symbolLayers)for(const e of t.symbolLayers){const t=this._getEffectsRepeat(e.effects)
if(t)return t
if(e){const t=this._getPlacementRepeat(e.markerPlacement)
if(t)return t}}}return 0}static _getEffectsRepeat(t){if(t)for(const e of t)if(e)switch(e.type){case"CIMGeometricEffectDashes":{const t=e.dashTemplate
if(t&&t.length){let e=0
for(const s of t)e+=s
return 1&t.length&&(e*=2),e}break}case"CIMGeometricEffectWave":return e.period
default:w.error("unsupported geometric effect type "+e.type)}return 0}static _getPlacementRepeat(t){if(t)switch(t.type){case"CIMMarkerPlacementAlongLineSameSize":case"CIMMarkerPlacementAlongLineRandomSize":case"CIMMarkerPlacementAlongLineVariableSize":{const e=t.placementTemplate
if(e&&e.length){let t=0
for(const s of e)t+=s
return 1&e.length&&(t*=2),t}break}}return 0}static fromCIMInsidePolygon(t){const e=t.markerPlacement,s={type:t.type,...t}
let i,r,n,a
return s.markerPlacement=null,s.anchorPoint=null,!0===e.shiftOddRows?(r=e.stepX/2,n=e.stepY,a=2*e.stepY,i=[{x:-r,y:0},{x:r,y:0},{x:0,y:n},{x:0,y:-n}].map(t=>({type:"CIMMarkerGraphic",geometry:t,symbol:{type:"CIMPointSymbol",symbolLayers:[s]}}))):(r=e.stepX/2,n=e.stepY/2,a=e.stepY,i=[{type:"CIMMarkerGraphic",geometry:{x:0,y:0},symbol:{type:"CIMPointSymbol",symbolLayers:[s]}}]),{type:"CIMVectorMarker",frame:{xmin:-r,xmax:r,ymin:-n,ymax:n},markerGraphics:i,size:a}}static getFillColor(t){if(!t)return null
switch(t.type){case"CIMPolygonSymbol":if(t.symbolLayers)for(const e of t.symbolLayers){const t=I.getFillColor(e)
if(null!=t)return t}break
case"CIMTextSymbol":return I.getFillColor(t.symbol)
case"CIMSolidFill":return t.color}}static getStrokeColor(t){if(t)switch(t.type){case"CIMPolygonSymbol":case"CIMLineSymbol":if(t.symbolLayers)for(const e of t.symbolLayers){const t=I.getStrokeColor(e)
if(void 0!==t)return t}break
case"CIMTextSymbol":return I.getStrokeColor(t.symbol)
case"CIMSolidStroke":return t.color}}static getStrokeWidth(t){if(t)switch(t.type){case"CIMPolygonSymbol":case"CIMLineSymbol":if(t.symbolLayers)for(const e of t.symbolLayers){const t=I.getStrokeWidth(e)
if(void 0!==t)return t}break
case"CIMTextSymbol":return I.getStrokeWidth(t.symbol)
case"CIMSolidStroke":case"CIMGradientStroke":case"CIMPictureStroke":return t.width}}static getSize(t){if(t)switch(t.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":{let e=0
if(t.symbolLayers)for(const s of t.symbolLayers){const t=I.getSize(s)
t>e&&(e=t)}return e}case"CIMSolidStroke":case"CIMPictureStroke":case"CIMGradientStroke":return t.width
case"CIMCharacterMarker":case"CIMPictureMarker":case"CIMVectorMarker":return t.size}}static getMarkerScaleRatio(t){if(t&&"CIMVectorMarker"===t.type&&!1!==t.scaleSymbolsProportionally&&t.frame){const e=t.frame.ymax-t.frame.ymin
return t.size/e}return 1}}class A{static rasterizeSimpleFill(t,e,s){"solid"!==e&&"none"!==e&&"esriSFSSolid"!==e&&"esriSFSNull"!==e||console.error("Unexpected: style does not require rasterization")
const i=Object(h.o)(Math.ceil(s)),r=V(e)?8*i:16*i,n=2*i
t.width=r,t.height=r
const a=t.getContext("2d")
a.strokeStyle="#FFFFFF",a.lineWidth=i,a.beginPath(),"vertical"!==e&&"cross"!==e&&"esriSFSCross"!==e&&"esriSFSVertical"!==e||(a.moveTo(r/2,-n),a.lineTo(r/2,r+n)),"horizontal"!==e&&"cross"!==e&&"esriSFSCross"!==e&&"esriSFSHorizontal"!==e||(a.moveTo(-n,r/2),a.lineTo(r+n,r/2)),"forward-diagonal"!==e&&"diagonal-cross"!==e&&"esriSFSDiagonalCross"!==e&&"esriSFSForwardDiagonal"!==e||(a.moveTo(-n,-n),a.lineTo(r+n,r+n),a.moveTo(r-n,-n),a.lineTo(r+n,n),a.moveTo(-n,r-n),a.lineTo(n,r+n)),"backward-diagonal"!==e&&"diagonal-cross"!==e&&"esriSFSBackwardDiagonal"!==e&&"esriSFSDiagonalCross"!==e||(a.moveTo(r+n,-n),a.lineTo(-n,r+n),a.moveTo(n,-n),a.lineTo(-n,n),a.moveTo(r+n,r-n),a.lineTo(r-n,r+n)),a.stroke()
const o=a.getImageData(0,0,t.width,t.height),c=new Uint8Array(o.data)
let l
for(let t=0;t<c.length;t+=4)l=c[t+3]/255,c[t]=c[t]*l,c[t+1]=c[t+1]*l,c[t+2]=c[t+2]*l
return[c,t.width,t.height]}static rasterizeSimpleLine(t,e){return this.rasterizeDash(t,e)}static rasterizeDash(t,e){const s="Butt"===e,i="Square"===e,r=!s&&!i
t.length%2==1&&(t=[...t,...t])
const a=15.5
let o=0
for(const e of t)o+=e
const h=Math.round(o*a),c=new Float32Array(31*h),l=7.75
let u=0,f=0,_=.5,p=!0
for(const e of t){for(u=f,f+=e*a;_<=f;){let t=.5
for(;t<31;){const e=(t-.5)*h+_-.5,n=r?(t-a)*(t-a):Math.abs(t-a)
c[e]=p?s?Math.max(Math.max(u+l-_,n),Math.max(_-f+l,n)):n:r?Math.min((_-u)*(_-u)+n,(_-f)*(_-f)+n):i?Math.min(Math.max(_-u,n),Math.max(f-_,n)):Math.min(Math.max(_-u+l,n),Math.max(f+l-_,n)),t++}_++}p=!p}const d=c.length,m=new Uint8Array(4*d)
for(let t=0;t<d;++t){const e=(r?Math.sqrt(c[t]):c[t])/a
Object(n.a)(e,m,4*t)}return[m,h,31]}}class j{static findApplicableOverrides(t,e,s){if(t&&e){if(t.primitiveName){let i=!1
for(const e of s)if(e.primitiveName===t.primitiveName){i=!0
break}if(!i)for(const i of e)i.primitiveName===t.primitiveName&&s.push(i)}switch(t.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(t.effects)for(const i of t.effects)j.findApplicableOverrides(i,e,s)
if(t.symbolLayers)for(const i of t.symbolLayers)j.findApplicableOverrides(i,e,s)
break
case"CIMTextSymbol":break
case"CIMSolidStroke":case"CIMPictureStroke":case"CIMGradientStroke":case"CIMSolidFill":case"CIMPictureFill":case"CIMHatchFill":case"CIMGradientFill":case"CIMVectorMarker":case"CIMCharacterMarker":case"CIMPictureMarker":if(t.effects)for(const i of t.effects)j.findApplicableOverrides(i,e,s)
if(t.markerPlacement&&j.findApplicableOverrides(t.markerPlacement,e,s),"CIMVectorMarker"===t.type){if(t.markerGraphics)for(const i of t.markerGraphics)j.findApplicableOverrides(i,e,s),j.findApplicableOverrides(i.symbol,e,s)}else"CIMCharacterMarker"===t.type?j.findApplicableOverrides(t.symbol,e,s):"CIMHatchFill"===t.type&&j.findApplicableOverrides(t.lineSymbol,e,s)}}}static findEffectOverrides(t,e,s){if(!e||!t)return
const i=t.length
for(let r=0;r<i;r++){const i=t[r],n=null==i?void 0:i.primitiveName
if(n){let t=!1
for(const e of s)if(e.primitiveName===n){t=!0
break}if(!t)for(const t of e)t.primitiveName===n&&s.push(t)}}}static applyOverrides(t,e,s,i){if(!e)return
const r=t=>t?t.charAt(0).toLowerCase()+t.substr(1):t
if(t.primitiveName)for(const n of e)if(n.primitiveName===t.primitiveName){const e=r(n.propertyName)
if(i&&i.push({cim:t,nocapPropertyName:e,value:t[e]}),n.expression&&(n.value=j.toValue(n.propertyName,n.expression)),s){let e=!1
for(const i of s)i.primitiveName===t.primitiveName&&(e=!0)
e||s.push(n)}t[e]=n.value}switch(t.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(t.effects)for(const r of t.effects)j.applyOverrides(r,e,s,i)
if(t.symbolLayers)for(const r of t.symbolLayers)j.applyOverrides(r,e,s,i)
break
case"CIMTextSymbol":break
case"CIMSolidStroke":case"CIMSolidFill":case"CIMVectorMarker":if(t.effects)for(const r of t.effects)j.applyOverrides(r,e,s,i)
if("CIMVectorMarker"===t.type&&t.markerGraphics)for(const r of t.markerGraphics)j.applyOverrides(r,e,s,i),j.applyOverrides(r.symbol,e,s,i)}}static restoreOverrides(t){for(const e of t)e.cim[e.nocapPropertyName]=e.value}static buildOverrideKey(t){let e=""
for(const s of t)void 0!==s.value&&(e+=`${s.primitiveName}${s.propertyName}${JSON.stringify(s.value)}`)
return e}static toValue(t,e){if("DashTemplate"===t)return e.split(" ").map(t=>Number(t))
if("Color"===t){const t=new i.a(e).toRgba()
return t[3]*=255,t}return e}}const F=t=>{if(!t)return d.p.Butt
switch(t){case"butt":return d.p.Butt
case"square":return d.p.Square
case"round":return d.p.Round}},z=t=>{if(!t)return d.r.Miter
switch(t){case"miter":return d.r.Miter
case"round":return d.r.Round
case"bevel":return d.r.Bevel}},R=t=>{if(!t)return"Center"
switch(t){case"left":return"Left"
case"right":return"Right"
case"center":return"Center"
case"justify":return"Justify"}},E=t=>{if(!t)return"Center"
switch(t){case"baseline":return"Baseline"
case"top":return"Top"
case"middle":return"Center"
case"bottom":return"Bottom"}},G=t=>{if(!t)return[0,0,0,0]
const{r:e,g:s,b:i,a:r}=t
return[e,s,i,255*r]},B=(t,e)=>{const s=H(e),i=D(t)
return s&&i?`${s}-${i}`:`${s}${i}`},H=t=>{if(!t)return""
switch(t.toLowerCase()){case"bold":case"bolder":return"bold"}return""},D=t=>{if(!t)return""
switch(t.toLowerCase()){case"italic":case"oblique":return"italic"}return""},N=(t,e)=>{const s="butt"===e
switch(t){case"dash":case"esriSLSDash":return s?[4,3]:[3,4]
case"dash-dot":case"esriSLSDashDot":return s?[4,3,1,3]:[3,4,0,4]
case"dot":case"esriSLSDot":return s?[1,3]:[0,4]
case"long-dash":case"esriSLSLongDash":return s?[8,3]:[7,4]
case"long-dash-dot":case"esriSLSLongDashDot":return s?[8,3,1,3]:[7,4,0,4]
case"long-dash-dot-dot":case"esriSLSDashDotDot":return s?[8,3,1,3,1,3]:[7,4,0,4,0,4]
case"short-dash":case"esriSLSShortDash":return s?[4,1]:[3,2]
case"short-dash-dot":case"esriSLSShortDashDot":return s?[4,1,1,1]:[3,2,0,2]
case"short-dash-dot-dot":case"esriSLSShortDashDotDot":return s?[4,1,1,1,1,1]:[3,2,0,2,0,2]
case"short-dot":case"esriSLSShortDot":return s?[1,1]:[0,2]
case"solid":case"esriSLSSolid":case"none":return w.error("Unexpected: style does not require rasterization"),[0,0]
default:return w.error(`Tried to rasterize SLS, but found an unexpected style: ${t}!`),[0,0]}},U=t=>{const e=50
let s,i
const r=t
if("circle"===r||"esriSMSCircle"===r){const t=.25
let r=Math.acos(1-t/e),n=Math.ceil(x/r/4)
0===n&&(n=1),r=P/n,n*=4
const a=[]
a.push([e,0])
for(let t=1;t<n;t++)a.push([e*Math.cos(t*r),-50*Math.sin(t*r)])
a.push([e,0]),s={rings:[a]},i={xmin:-50,ymin:-50,xmax:e,ymax:e}}else if("cross"===r||"esriSMSCross"===r){const t=0
s={rings:[[[t,e],[t,t],[e,t],[e,-t],[t,-t],[t,-50],[-t,-50],[-t,-t],[-50,-t],[-50,t],[-t,t],[-t,e],[t,e]]]},i={xmin:-50,ymin:-50,xmax:e,ymax:e}}else if("diamond"===r||"esriSMSDiamond"===r)s={rings:[[[-50,0],[0,e],[e,0],[0,-50],[-50,0]]]},i={xmin:-50,ymin:-50,xmax:e,ymax:e}
else if("square"===r||"esriSMSSquare"===r)s={rings:[[[-50,-50],[-50,e],[e,e],[e,-50],[-50,-50]]]},i={xmin:-50,ymin:-50,xmax:e,ymax:e}
else if("x"===r||"esriSMSX"===r){const t=0
s={rings:[[[0,t],[e-t,e],[e,e-t],[t,0],[e,t-e],[e-t,-50],[0,-t],[t-e,-50],[-50,t-e],[-t,0],[-50,e-t],[t-e,e],[0,t]]]},i={xmin:-50,ymin:-50,xmax:e,ymax:e}}else if("triangle"===r||"esriSMSTriangle"===r){const t=57.735026918962575,e=-t,r=2/3*100,n=r-100
s={rings:[[[e,n],[0,r],[t,n],[e,n]]]},i={xmin:e,ymin:n,xmax:t,ymax:r}}else"arrow"===r&&(s={rings:[[[-50,50],[50,0],[-50,-50],[-33,-20],[-33,20],[-50,50]]]},i={xmin:-50,ymin:-50,xmax:e,ymax:e})
return[i,s]},V=t=>"vertical"===t||"horizontal"===t||"cross"===t||"esriSFSCross"===t||"esriSFSVertical"===t||"esriSFSHorizontal"===t},1251:function(t,e,s){"use strict"
s.d(e,"a",(function(){return r}))
const i=new(s(2035).a)
function r(t){if(!i.hasBidiChar(t))return[t,!1]
let e
return e="rtl"===i.checkContextual(t)?"IDNNN":"ICNNN",[i.bidiTransform(t,e,"VLYSN"),!0]}},1367:function(t,e,s){"use strict"
s.d(e,"a",(function(){return i}))
class i{constructor(t=0,e=0,s=0,i=0){this.x=t,this.y=e,this.width=s,this.height=i}get isEmpty(){return this.width<=0||this.height<=0}union(t){this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.width=Math.max(this.width,t.width),this.height=Math.max(this.height,t.height)}}},1395:function(t,e,s){"use strict"
s.d(e,"a",(function(){return b}))
var i=s(1147),r=s(1144),n=s(919),a=s(1042),o=s(1152),h=s(937),c=s(1603)
class l{constructor(t,e,s,i){this.center=Object(a.b)(t,e),this.centerT=Object(a.a)(),this.halfWidth=s/2,this.halfHeight=i/2,this.width=s,this.height=i}get x(){return this.center[0]}get y(){return this.center[1]}get blX(){return this.center[0]+this.halfWidth}get blY(){return this.center[1]+this.halfHeight}get trX(){return this.center[0]-this.halfWidth}get trY(){return this.center[1]-this.halfHeight}get xmin(){return this.x-this.halfWidth}get xmax(){return this.x+this.halfWidth}get ymin(){return this.y-this.halfHeight}get ymax(){return this.y+this.halfHeight}set x(t){this.center[0]=t}set y(t){this.center[1]=t}clone(){return new l(this.x,this.y,this.width,this.height)}serialize(t){return t.writeF32(this.center[0]),t.writeF32(this.center[1]),t.push(this.width),t.push(this.height),t}findCollisionDelta(t,e=4){const s=Math.abs(t.centerT[0]-this.centerT[0]),i=Math.abs(t.centerT[1]-this.centerT[1]),r=(t.halfWidth+this.halfWidth+e)/s,n=(t.halfHeight+this.halfHeight+e)/i,a=Math.min(r,n)
return Math.log2(a)}extend(t){const e=Math.min(this.xmin,t.xmin),s=Math.min(this.ymin,t.ymin),i=Math.max(this.xmax,t.xmax)-e,r=Math.max(this.ymax,t.ymax)-s,n=e+i/2,a=s+r/2
this.width=i,this.height=r,this.halfWidth=i/2,this.halfHeight=r/2,this.x=n,this.y=a}static deserialize(t){const e=t.readF32(),s=t.readF32(),i=t.readInt32(),r=t.readInt32()
return new l(e,s,i,r)}}const u=Math.PI/180
class f{constructor(t,e,s,i){this._rotationT=Object(r.a)(),this._xBounds=0,this._yBounds=0,this.minZoom=0,this.maxZoom=255,this._bounds=null
const n=s.rect,a=new Float32Array(8)
t*=i,e*=i
const o=s.code?n.width*i:s.metrics.width,h=s.code?n.height*i:s.metrics.height
a[0]=t,a[1]=e,a[2]=t+o,a[3]=e,a[4]=t,a[5]=e+h,a[6]=t+o,a[7]=e+h,this._data=a,this._setTextureCoords(n),this._scale=i,this._mosaic=s,this.x=t,this.y=e,this.maxOffset=Math.max(t+o,e+h)}get width(){return this._mosaic.metrics.width*this._scale}get mosaic(){return this._mosaic}set angle(t){this._angle=t,Object(i.b)(this._rotationT,-t),this._setOffsets(this._data)}get angle(){return this._angle}get xTopLeft(){return this._data[0]}get yTopLeft(){return this._data[1]}get xBottomRight(){return this._data[6]}get yBottomRight(){return this._data[7]}get texcoords(){return this._texcoords}get textureBinding(){return this._mosaic.textureBinding}get offsets(){return this._offsets||this._setOffsets(this._data),this._offsets}get char(){return String.fromCharCode(this._mosaic.code)}get code(){return this._mosaic.code}get bounds(){if(!this._bounds){const{height:t,width:e}=this._mosaic.metrics,s=e*this._scale,n=Math.abs(t)*this._scale,a=new Float32Array(8)
a[0]=this.x,a[1]=this.y,a[2]=this.x+s,a[3]=this.y,a[4]=this.x,a[5]=this.y+n,a[6]=this.x+s,a[7]=this.y+n
const o=Object(i.f)(Object(r.a)(),this._rotationT,this._T)
Object(r.b)(a,a,o)
let h=1/0,c=1/0,u=0,f=0
for(let t=0;t<4;t++){const e=a[2*t],s=a[2*t+1]
h=Math.min(h,e),c=Math.min(c,s),u=Math.max(u,e),f=Math.max(f,s)}const _=u-h,p=f-c,d=h+_/2,m=c+p/2
this._bounds=new l(d,m,_,p)}return this._bounds}setTransform(t){this._T=t,this._offsets=null}_setOffsets(t){this._offsets||(this._offsets={upperLeft:0,upperRight:0,lowerLeft:0,lowerRight:0})
const e=this._offsets,s=new Float32Array(8),n=Object(i.f)(Object(r.a)(),this._rotationT,this._T)
Object(r.b)(s,t,n),e.upperLeft=Object(h.a)(8*s[0],8*s[1]),e.upperRight=Object(h.a)(8*s[2],8*s[3]),e.lowerLeft=Object(h.a)(8*s[4],8*s[5]),e.lowerRight=Object(h.a)(8*s[6],8*s[7])}_setTextureCoords({x:t,y:e,width:s,height:i}){this._texcoords={upperLeft:Object(h.a)(t,e),upperRight:Object(h.a)(t+s,e),lowerLeft:Object(h.a)(t,e+i),lowerRight:Object(h.a)(t+s,e+i)}}}const _=(t,e)=>({code:0,page:0,sdf:!0,rect:new c.a(0,0,11,8),textureBinding:e,metrics:{advance:0,height:4,width:t,left:0,top:0}})
class p{constructor(t,e,s){this._rotation=0,this._decorate(t,e,s),this.glyphs=t,this.bounds=this._createBounds(t),this.isMultiline=e.length>1,this._hasRotation=0!==s.angle,this._T=this._createGlyphTransform(this.bounds,s)
for(const e of t)e.setTransform(this._T)}setRotation(t){if(0===t&&0===this._rotation)return
this._rotation=t
const e=this._T,s=Object(i.b)(Object(r.a)(),t)
Object(i.f)(e,s,e)
for(const t of this.glyphs)t.setTransform(this._T)}_decorate(t,e,s){if(!s.decoration||"none"===s.decoration||!t.length)return
const i=s.scale,r="underline"===s.decoration?30:20,n=t[0].textureBinding
for(const s of e){const e=s.startX*i,a=s.startY*i,o=(s.width+s.glyphWidthEnd)*i
t.push(new f(e,a+r*i,_(o,n),1))}}get boundsT(){const t=this.bounds,e=Object(n.s)(Object(a.a)(),t.x,t.y)
if(Object(n.t)(e,e,this._T),this._hasRotation){const s=Math.max(t.width,t.height)
return new l(e[0],e[1],s,s)}return new l(e[0],e[1],t.width,t.height)}_createBounds(t){let e=1/0,s=1/0,i=0,r=0
for(const n of t)e=Math.min(e,n.xTopLeft),s=Math.min(s,n.yTopLeft),i=Math.max(i,n.xTopLeft+n.width),r=Math.max(r,n.yBottomRight)
const n=i-e,a=r-s
return new l(e+n/2,s+a/2,n,a)}_createGlyphTransform(t,e){const s=u*e.angle,o=Object(r.a)(),h=Object(a.a)()
return Object(i.i)(o,o,Object(n.s)(h,e.xOffset,-e.yOffset)),e.isCIM?Object(i.g)(o,o,s):(Object(i.i)(o,o,Object(n.s)(h,t.x,t.y)),Object(i.g)(o,o,s),Object(i.i)(o,o,Object(n.s)(h,-t.x,-t.y))),o}}class d{constructor(t,e,s,i,r,n){this.glyphWidthEnd=0,this.startX=0,this.startY=0,this.start=Math.max(0,Math.min(e,s)),this.end=Math.max(0,Math.max(e,s)),this.end<t.length&&(this.glyphWidthEnd=t[this.end].metrics.width),this.width=i,this.yMin=r,this.yMax=n}}const m=t=>10===t,g=t=>32===t
function b(t,e,s){const i=s.scale,r=new Array,n=function(t,e,s){const i=new Array,r=1/s.scale,n=s.maxLineWidth*r,a=e?t.length-1:0,o=e?-1:t.length,h=e?-1:1
let c=a,l=0,u=0,f=c,_=f,p=0,b=1/0,y=0
for(;c!==o;){const{code:e,metrics:s}=t[c],r=Math.abs(s.top)
if(m(e)||g(e)||(b=Math.min(b,r),y=Math.max(y,r+s.height)),m(e))c!==a&&(i.push(new d(t,f,c-h,l,b,y)),b=1/0,y=0),l=0,f=c+h,_=c+h,u=0
else if(g(e))_=c+h,u=0,p=s.advance,l+=s.advance
else if(l>n){if(_!==f){const e=_-2*h
l-=p,i.push(new d(t,f,e,l-u,b,y)),b=1/0,y=0,f=_,l=u}else i.push(new d(t,f,c-h,l,b,y)),b=1/0,y=0,f=c,_=c,l=0
l+=s.advance,u+=s.advance}else l+=s.advance,u+=s.advance
c+=h}const x=new d(t,f,c-h,l,b,y)
return x.start>=0&&x.end<t.length&&i.push(x),i}(t,e,s),a=function(t,e){let s=0
for(let e=0;e<t.length;e++){const{width:i}=t[e]
s=Math.max(i,s)}const i="underline"===e.decoration?4:0,r=t[0].yMin
return{x:0,y:r,height:t[t.length-1].yMax+e.lineHeight*(t.length-1)+i-r,width:s}}(n,s),{vAlign:h,hAlign:c}=s,l=h===o.b.Baseline?1:0,u=l?0:h-1,_=(1-l)*-a.y+u*(a.height/2)+-26*(l?1:0)
for(let e=0;e<n.length;e++){const{start:a,end:o,width:h}=n[e]
let l=-1*(c+1)*(h/2)-3
const u=e*s.lineHeight+_-3
n[e].startX=l,n[e].startY=u
for(let e=a;e<=o;e++){const s=t[e]
if(m(s.code))continue
const n=new f(l+s.metrics.left,u-s.metrics.top,s,i)
l+=s.metrics.advance,r.push(n)}}return new p(r,n,s)}},1411:function(t,e,s){"use strict"
s.d(e,"a",(function(){return ot})),s.d(e,"b",(function(){return ht}))
var i=s(178),r=s(869),n=s(1159)
class a{static local(){return null===a.instance&&(a.instance=new a),a.instance}execute(t,e,s,i){return new o(t,e,s)}}a.instance=null
class o{constructor(t,e,s){this._inputGeometries=t,this._angleTolerance=void 0!==e.angleTolerance?e.angleTolerance:120,this._maxCosAngle=Math.cos((1-Math.abs(this._angleTolerance)/180)*Math.PI)}next(){let t=this._inputGeometries.next()
for(;t;){if(Object(r.g)(t)){this._isClosed=!0
const e=Object(i.a)(t)
return this._processMultipath(e.rings),e}if(Object(r.h)(t)){this._isClosed=!1
const e=Object(i.a)(t)
return this._processMultipath(e.paths),e}if(Object(r.d)(t)){if(this._maxCosAngle)return t
this._isClosed=!0
const e=[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]
return this._processPath(e),{rings:[e]}}t=this._inputGeometries.next()}return null}_processMultipath(t){if(t)for(const e of t)this._processPath(e)}_processPath(t){if(t){let e,s,i,r,a,o,h=t.length,c=t[0]
this._isClosed&&++h
for(let l=1;l<h;++l){let u
u=this._isClosed&&l===h-1?t[0]:t[l]
const f=u[0]-c[0],_=u[1]-c[1],p=Math.sqrt(f*f+_*_)
l>1&&p>0&&i>0&&(e*f+s*_)/p/i<=this._maxCosAngle&&Object(n.j)(c,1),1===l&&(r=f,a=_,o=p),p>0&&(c=u,e=f,s=_,i=p)}this._isClosed&&i>0&&o>0&&(e*r+s*a)/o/i<=this._maxCosAngle&&Object(n.j)(t[0],1)}}}var h=s(969)
class c{constructor(){this._path=[]}path(){return this._path}addPath(t,e){e||t.reverse(),Array.prototype.push.apply(this._path,t),e||t.reverse()}static mergePath(t,e){e&&Array.prototype.push.apply(t,e)}startPath(t){this._path.push(t)}lineTo(t){this._path.push(t)}close(){const t=this._path
t.length>1&&(t[0][0]===t[t.length-1][0]&&t[0][1]===t[t.length-1][1]||t.push([t[0][0],t[0][1]]))}}class l{constructor(t=0,e=!1){}normalize(t){const e=Math.sqrt(t[0]*t[0]+t[1]*t[1])
t[0]/=e,t[1]/=e}calculateLength(t,e){const s=e[0]-t[0],i=e[1]-t[1]
return Math.sqrt(s*s+i*i)}calculateSegLength(t,e){return this.calculateLength(t[e],t[e+1])}calculatePathLength(t){let e=0
const s=t?t.length:0
for(let i=0;i<s-1;++i)e+=this.calculateSegLength(t,i)
return e}calculatePathArea(t){let e=0
const s=t?t.length:0
for(let i=0;i<s-1;++i)e+=(t[i+1][0]-t[i][0])*(t[i+1][1]+t[i][1])
return e/2}getCoord2D(t,e,s){return[t[0]+(e[0]-t[0])*s,t[1]+(e[1]-t[1])*s]}getSegCoord2D(t,e,s){return this.getCoord2D(t[e],t[e+1],s)}getAngle(t,e,s){const i=e[0]-t[0],r=e[1]-t[1]
return Math.atan2(r,i)}getSegAngle(t,e,s){return this.getAngle(t[e],t[e+1],s)}getAngleCS(t,e,s){const i=e[0]-t[0],r=e[1]-t[1],n=Math.sqrt(i*i+r*r)
return n>0?[i/n,r/n]:[1,0]}getSegAngleCS(t,e,s){return this.getAngleCS(t[e],t[e+1],s)}cut(t,e,s,i){return[s<=0?t[e]:this.getSegCoord2D(t,e,s),i>=1?t[e+1]:this.getSegCoord2D(t,e,i)]}addSegment(t,e,s){s&&t.push(e[0]),t.push(e[1])}getSubCurve(t,e,s){const i=[]
return this.appendSubCurve(i,t,e,s)?i:null}appendSubCurve(t,e,s,i){const r=e?e.length-1:0
let n=0,a=!0,o=0
for(;o<r;){const r=this.calculateSegLength(e,o)
if(0!==r){if(a){if(n+r>s){const h=(s-n)/r
let c=1,l=!1
n+r>=i&&(c=(i-n)/r,l=!0)
const u=this.cut(e,o,h,c)
if(u&&this.addSegment(t,u,a),l)break
a=!1}}else{if(n+r>i){const s=this.cut(e,o,0,(i-n)/r)
s&&this.addSegment(t,s,a)
break}this.addSegment(t,[e[o],e[o+1]],a)}n+=r,++o}else++o}return!0}getCIMPointAlong(t,e){const s=t?t.length-1:0
let i=0,r=-1
for(;r<s;){++r
const s=this.calculateSegLength(t,r)
if(0!==s){if(i+s>e){const n=(e-i)/s
return this.getCoord2D(t[r],t[r+1],n)}i+=s}}return null}isEmpty(t,e){if(!t||t.length<=1)return!0
const s=t?t.length-1:0
let i=-1
for(;i<s;){if(++i,t[i+1][0]!==t[i][0]||t[i+1][1]!==t[i][1])return!1
if(e&&t[i+1][2]!==t[i][2])return!1}return!0}offset(t,e,s,i,r){if(!t||t.length<2)return null
let n=0,a=t[n++],o=n
for(;n<t.length;){const e=t[n]
e[0]===a[0]&&e[1]===a[1]||(n!==o&&(t[o]=t[n]),a=t[o++]),n++}const c=t[0][0]===t[o-1][0]&&t[0][1]===t[o-1][1]
if(c&&--o,o<(c?3:2))return null
const l=[]
a=c?t[o-1]:null
let u=t[0]
for(let r=0;r<o;r++){const n=r===o-1?c?t[0]:null:t[r+1]
if(a)if(n){const t=[n[0]-u[0],n[1]-u[1]]
this.normalize(t)
const r=[u[0]-a[0],u[1]-a[1]]
this.normalize(r)
const o=r[0]*t[1]-r[1]*t[0],c=r[0]*t[0]+r[1]*t[1]
if(o>=0==e<=0){if(c<1){const s=[t[0]-r[0],t[1]-r[1]]
this.normalize(s)
const n=Math.sqrt((1+c)/2)
if(n>1/i){const t=-Math.abs(e)/n
l.push([u[0]-s[0]*t,u[1]-s[1]*t])}}}else switch(s){case h.l.Mitered:{const s=Math.sqrt((1+c)/2)
if(s>0&&1/s<i){const i=[t[0]-r[0],t[1]-r[1]]
this.normalize(i)
const n=Math.abs(e)/s
l.push([u[0]-i[0]*n,u[1]-i[1]*n])
break}}case h.l.Bevelled:l.push([u[0]+r[1]*e,u[1]-r[0]*e]),l.push([u[0]+t[1]*e,u[1]-t[0]*e])
break
case h.l.Rounded:if(c<1){l.push([u[0]+r[1]*e,u[1]-r[0]*e])
const s=Math.floor(2.5*(1-c))
if(s>0){const i=1/s
let n=i
for(let a=1;a<s;a++,n+=i){const s=[r[1]*(1-n)+t[1]*n,-r[0]*(1-n)-t[0]*n]
this.normalize(s),l.push([u[0]+s[0]*e,u[1]+s[1]*e])}}l.push([u[0]+t[1]*e,u[1]-t[0]*e])}break
case h.l.Square:default:if(o<0)l.push([u[0]+(r[1]+r[0])*e,u[1]+(r[1]-r[0])*e]),l.push([u[0]+(t[1]-t[0])*e,u[1]-(t[0]+t[1])*e])
else{const s=Math.sqrt((1+Math.abs(c))/2),i=[t[0]-r[0],t[1]-r[1]]
this.normalize(i)
const n=e/s
l.push([u[0]-i[0]*n,u[1]-i[1]*n])}}}else{const t=[u[0]-a[0],u[1]-a[1]]
this.normalize(t),l.push([u[0]+t[1]*e,u[1]-t[0]*e])}else{const t=[n[0]-u[0],n[1]-u[1]]
this.normalize(t),l.push([u[0]+t[1]*e,u[1]-t[0]*e])}a=u,u=n}return l.length<(c?3:2)?null:(c&&l.push([l[0][0],l[0][1]]),l)}}const u=h.i.OpenEnded
class f{static local(){return null===f.instance&&(f.instance=new f),f.instance}execute(t,e,s,i){return new _(t,e,s)}}f.instance=null
class _ extends n.a{constructor(t,e,s){super(t,!1,!0),this._curveHelper=new l,this._width=(void 0!==e.width?e.width:5)*s,this._arrowType=void 0!==e.geometricEffectArrowType?e.geometricEffectArrowType:void 0!==e.arrowType?e.arrowType:u,this._offsetFlattenError=.03*s}processPath(t){switch(this._arrowType){case h.i.OpenEnded:default:return this._constructSimpleArrow(t,!0)
case h.i.Block:return this._constructSimpleArrow(t,!1)
case h.i.Crossed:return this._constructCrossedArrow(t)}}_constructSimpleArrow(t,e){const s=this._curveHelper.calculatePathLength(t)
let i=this._width
s<2*i&&(i=s/2)
const r=this._curveHelper.getSubCurve(t,0,s-i)
if(!r)return null
const n=i/2
if(this._curveHelper.isEmpty(r,!1))return null
const a=this._constructOffset(r,-n)
if(!a)return null
const o=this._constructOffset(r,n)
if(!o)return null
const h=this._constructArrowBasePoint(a,-n/2)
if(!h)return null
const l=this._constructArrowBasePoint(o,n/2)
if(!l)return null
const u=t[t.length-1]
e||(this._makeControlPoint(o,!0),this._makeControlPoint(a,!0))
const f=new c
return f.addPath(o,!0),f.lineTo(l),this._makeControlPoint(f.path()),f.lineTo(u),this._makeControlPoint(f.path()),f.lineTo(h),this._makeControlPoint(f.path()),f.addPath(a,!1),e?{paths:[f.path()]}:(f.close(),{rings:[f.path()]})}_constructCrossedArrow(t){const e=this._curveHelper.calculatePathLength(t)
let s=this._width
e<3.732050807568877*s&&(s=e/3.732050807568877)
const i=this._curveHelper.getSubCurve(t,0,e-2.732050807568877*s)
if(!i)return null
const r=s/2
if(this._curveHelper.isEmpty(i,!1))return null
const n=this._constructOffset(i,r)
if(!n)return null
const a=this._constructOffset(i,-r)
if(!a)return null
const o=this._curveHelper.getSubCurve(t,0,e-s)
if(!o)return null
if(this._curveHelper.isEmpty(o,!1))return null
const h=this._constructOffset(o,r)
if(!h)return null
const l=this._constructOffset(o,-r)
if(!l)return null
const u=h[h.length-1],f=this._constructArrowBasePoint(h,r/2)
if(!f)return null
const _=l[l.length-1],p=this._constructArrowBasePoint(l,-r/2)
if(!p)return null
const d=t[t.length-1]
this._makeControlPoint(n,!1),this._makeControlPoint(a,!1)
const m=new c
return m.addPath(n,!0),this._makeControlPoint(m.path()),m.lineTo(_),m.lineTo(p),this._makeControlPoint(m.path()),m.lineTo(d),this._makeControlPoint(m.path()),m.lineTo(f),this._makeControlPoint(m.path()),m.lineTo(u),this._makeControlPoint(m.path()),m.addPath(a,!1),{paths:[m.path()]}}_constructOffset(t,e){return this._curveHelper.offset(t,e,h.l.Rounded,4,this._offsetFlattenError)}_constructArrowBasePoint(t,e){if(!t||t.length<2)return null
const s=t[t.length-2],i=t[t.length-1],r=[i[0]-s[0],i[1]-s[1]]
return this._curveHelper.normalize(r),[i[0]+r[1]*e,i[1]-r[0]*e]}_makeControlPoint(t,e=!1){Object(n.j)(e?t[0]:t[t.length-1],1)}}class p{static local(){return null===p.instance&&(p.instance=new p),p.instance}execute(t,e,s,i){return new d(t,e,s,i)}}p.instance=null
class d{constructor(t,e,s,i){this._inputGeometries=t,this._curveHelper=new l,this._size=(void 0!==e.size?e.size:1)*s,this._offsetFlattenError=.03*s}next(){let t=this._inputGeometries.next()
for(;t;){if(Object(r.d)(t))if(this._size>0){const e=[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]],s=this._curveHelper.offset(e,this._size,h.l.Rounded,4,this._offsetFlattenError)
if(s)return{rings:[s]}}else{if(!(this._size<0))return t
if(Math.min(t.xmax-t.xmin,t.ymax-t.ymin)+2*this._size>0)return{xmin:t.xmin-this._size,xmax:t.xmax+this._size,ymin:t.ymin-this._size,ymax:t.ymax+this._size}}if(Object(r.g)(t)){if(0===this._size)return t
const e=[]
for(const s of t.rings){const t=this._curveHelper.offset(s,this._size,h.l.Rounded,4,this._offsetFlattenError)
t&&e.push(t)}if(e.length)return{rings:e}}if(Object(r.h)(t)&&this._size>0){const e=[]
for(const s of t.paths)if(s&&s.length>1){const t=this._curveHelper.offset(s,this._size,h.l.Rounded,4,this._offsetFlattenError),i=this._curveHelper.offset(s,-this._size,h.l.Rounded,4,this._offsetFlattenError)
if(t&&i){for(let e=i.length-1;e>=0;e--)t.push(i[e])
t.push([t[0][0],t[0][1]]),e.push(t)}}if(e.length)return{rings:e}}Object(r.f)(t)&&this._size,t=this._inputGeometries.next()}return null}}class m{static local(){return null===m.instance&&(m.instance=new m),m.instance}execute(t,e,s,i){return new g(t,e,s)}}m.instance=null
class g{constructor(t,e,s){var i
this._default_point_size=20,this._inputGeometries=t,this._geomUnitsPerPoint=s,this._rule=null!=(i=e.rule)?i:h.j.FullGeometry,this._default_size=this._default_point_size*s}next(){let t
for(;t=this._inputGeometries.next();){let e
if(Object(r.f)(t)?e=this._processGeom([[[t.x,t.y]]]):Object(r.e)(t)?e=this._processGeom([t.points]):Object(r.h)(t)?e=this._processGeom(t.paths):Object(r.g)(t)&&(e=this._processGeom(t.rings)),e&&e.length)return{paths:e}}return null}_clone(t){return[t[0],t[1]]}_mid(t,e){return[(t[0]+e[0])/2,(t[1]+e[1])/2]}_mix(t,e,s,i){return[t[0]*e+s[0]*i,t[1]*e+s[1]*i]}_add(t,e){return[t[0]+e[0],t[1]+e[1]]}_add2(t,e,s){return[t[0]+e,t[1]+s]}_sub(t,e){return[t[0]-e[0],t[1]-e[1]]}_dist(t,e){return Math.sqrt((t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1]))}_norm(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1])}_normalize(t,e=1){const s=e/this._norm(t)
t[0]*=s,t[1]*=s}_leftPerpendicular(t){const e=-t[1],s=t[0]
t[0]=e,t[1]=s}_leftPerp(t){return[-t[1],t[0]]}_rightPerpendicular(t){const e=t[1],s=-t[0]
t[0]=e,t[1]=s}_rightPerp(t){return[t[1],-t[0]]}_dotProduct(t,e){return t[0]*e[0]+t[1]*e[1]}_crossProduct(t,e){return t[0]*e[1]-t[1]*e[0]}_rotateDirect(t,e,s){const i=t[0]*e-t[1]*s,r=t[0]*s+t[1]*e
t[0]=i,t[1]=r}_makeCtrlPt(t){const e=[t[0],t[1]]
return Object(n.j)(e,1),e}_addAngledTicks(t,e,s,i){const r=this._sub(s,e)
this._normalize(r)
const n=this._crossProduct(r,this._sub(i,e))
let a
a=n>0?this._rightPerp(r):this._leftPerp(r)
const o=Math.abs(n)/2,h=[]
h.push([e[0]+(a[0]-r[0])*o,e[1]+(a[1]-r[1])*o]),h.push(e),h.push(s),h.push([s[0]+(a[0]+r[0])*o,s[1]+(a[1]+r[1])*o]),t.push(h)}_addBezier2(t,e,s,i,r){if(0==r--)return void t.push(i)
const n=this._mid(e,s),a=this._mid(s,i),o=this._mid(n,a)
this._addBezier2(t,e,n,o,r),this._addBezier2(t,o,a,i,r)}_addBezier3(t,e,s,i,r,n){if(0==n--)return void t.push(r)
const a=this._mid(e,s),o=this._mid(s,i),h=this._mid(i,r),c=this._mid(a,o),l=this._mid(o,h),u=this._mid(c,l)
this._addBezier3(t,e,a,c,u,n),this._addBezier3(t,u,l,h,r,n)}_add90DegArc(t,e,s,i,r){const n=null!=r?r:this._crossProduct(this._sub(s,e),this._sub(i,e))>0,a=this._mid(e,s),o=this._sub(a,e)
n?this._leftPerpendicular(o):this._rightPerpendicular(o),a[0]+=o[0],a[1]+=o[1],this._addBezier3(t,e,this._mix(e,.33333,a,.66667),this._mix(s,.33333,a,.66667),s,4)}_addArrow(t,e,s){const i=e[0],r=e[1],n=e[e.length-1],a=this._sub(i,r)
this._normalize(a)
const o=this._crossProduct(a,this._sub(n,r)),h=.5*o,c=this._leftPerp(a),l=[n[0]-c[0]*o,n[1]-c[1]*o],u=e.length-1,f=[]
f.push(s?[-c[0],-c[1]]:c)
let _=[-a[0],-a[1]]
for(let t=1;t<u-1;t++){const s=this._sub(e[t+1],e[t])
this._normalize(s)
const i=this._dotProduct(s,_),r=this._crossProduct(s,_),n=Math.sqrt((1+i)/2),a=this._sub(s,_)
this._normalize(a),a[0]/=n,a[1]/=n,f.push(r<0?[-a[0],-a[1]]:a),_=s}f.push(this._rightPerp(_))
for(let s=f.length-1;s>0;s--)t.push([e[s][0]+f[s][0]*h,e[s][1]+f[s][1]*h])
t.push([l[0]+f[0][0]*h,l[1]+f[0][1]*h]),t.push([l[0]+f[0][0]*o,l[1]+f[0][1]*o]),t.push(i),t.push([l[0]-f[0][0]*o,l[1]-f[0][1]*o]),t.push([l[0]-f[0][0]*h,l[1]-f[0][1]*h])
for(let s=1;s<f.length;s++)t.push([e[s][0]-f[s][0]*h,e[s][1]-f[s][1]*h])}_cp2(t,e,s){return t.length>=2?t[1]:this._add2(t[0],e*this._default_size,s*this._default_size)}_cp3(t,e,s,i){if(t.length>=3)return t[2]
const r=this._mix(t[0],1-s,e,s),n=this._sub(e,t[0])
return this._normalize(n),this._rightPerpendicular(n),[r[0]+n[0]*i*this._default_size,r[1]+n[1]*i*this._default_size]}_arrowPath(t){if(t.length>2)return t
const e=t[0],s=this._cp2(t,-4,0),i=this._sub(e,s)
this._normalize(i)
const r=this._rightPerp(i)
return[e,s,[e[0]+(r[0]-i[0])*this._default_size,e[1]+(r[1]-i[1])*this._default_size]]}_arrowLastSeg(t){const e=t[0],s=this._cp2(t,-4,0)
let i
if(t.length>=3)i=t[t.length-1]
else{const t=this._sub(e,s)
this._normalize(t)
const r=this._rightPerp(t)
i=[e[0]+(r[0]-t[0])*this._default_size,e[1]+(r[1]-t[1])*this._default_size]}return[s,i]}_processGeom(t){if(!t)return null
const e=[]
for(const s of t){if(!s||0===s.length)continue
const t=s.length
let i=s[0]
switch(this._rule){case h.j.PerpendicularFromFirstSegment:{const t=this._cp2(s,0,-1),r=this._cp3(s,t,.5,4),n=[]
n.push(r),n.push(this._mid(i,t)),e.push(n)
break}case h.j.ReversedFirstSegment:{const t=this._cp2(s,0,-1)
e.push([t,i])
break}case h.j.PerpendicularToSecondSegment:{const t=this._cp2(s,-4,1),r=this._cp3(s,t,.882353,-1.94),n=[]
n.push(this._mid(t,r)),n.push(i),e.push(n)
break}case h.j.SecondSegmentWithTicks:{const t=this._cp2(s,-4,1),r=this._cp3(s,t,.882353,-1.94),n=this._sub(r,t)
let a
a=this._crossProduct(n,this._sub(i,t))>0?this._rightPerp(a):this._leftPerp(n)
const o=[]
o.push([t[0]+(a[0]-n[0])/3,t[1]+(a[1]-n[1])/3]),o.push(t),o.push(r),o.push([r[0]+(a[0]+n[0])/3,r[1]+(a[1]+n[1])/3]),e.push(o)
break}case h.j.DoublePerpendicular:{const t=this._cp2(s,0,-1),r=this._cp3(s,t,.5,3),n=this._mid(i,t),a=this._sub(n,r)
this._normalize(a)
const o=this._crossProduct(a,this._sub(i,r))
this._leftPerpendicular(a)
const h=[]
h.push(i),h.push([r[0]+a[0]*o,r[1]+a[1]*o]),e.push(h)
const c=[]
c.push([r[0]-a[0]*o,r[1]-a[1]*o]),c.push(t),e.push(c)
break}case h.j.OppositeToFirstSegment:{const t=this._cp2(s,0,-1),r=this._cp3(s,t,.5,3),n=this._mid(i,t),a=this._sub(n,r)
this._normalize(a)
const o=this._crossProduct(a,this._sub(i,r))
this._leftPerpendicular(a)
const h=[]
h.push([r[0]+a[0]*o,r[1]+a[1]*o]),h.push([r[0]-a[0]*o,r[1]-a[1]*o]),e.push(h)
break}case h.j.TriplePerpendicular:{const t=this._cp2(s,0,-1),r=this._cp3(s,t,.5,4),n=this._mid(i,t),a=this._sub(n,r)
this._normalize(a)
const o=this._crossProduct(a,this._sub(i,r))
this._leftPerpendicular(a)
const h=[]
h.push([r[0]+a[0]*o*.8,r[1]+a[1]*o*.8]),h.push([n[0]+.8*(i[0]-n[0]),n[1]+.8*(i[1]-n[1])]),e.push(h),e.push([r,n])
const c=[]
c.push([r[0]-a[0]*o*.8,r[1]-a[1]*o*.8]),c.push([n[0]+.8*(t[0]-n[0]),n[1]+.8*(t[1]-n[1])]),e.push(c)
break}case h.j.HalfCircleFirstSegment:{const t=this._cp2(s,0,-1),r=this._cp3(s,t,.5,4),n=this._mid(i,t)
let a=this._sub(t,i)
const o=Math.cos(Math.PI/18),h=Math.sin(Math.PI/18),c=Math.sqrt((1+o)/2),l=Math.sqrt((1-o)/2),u=[]
let f
this._crossProduct(a,this._sub(r,i))>0?(u.push(i),a=this._sub(i,n),f=t):(u.push(t),a=this._sub(t,n),f=i),this._rotateDirect(a,c,l),a[0]/=c,a[1]/=c
for(let t=1;t<=18;t++)u.push(this._add(n,a)),this._rotateDirect(a,o,h)
u.push(f),e.push(u)
break}case h.j.HalfCircleSecondSegment:{const t=this._cp2(s,0,-1),r=this._cp3(s,t,1,-1)
let n=this._sub(i,t)
this._normalize(n)
const a=this._crossProduct(n,this._sub(r,t))/2
this._leftPerpendicular(n)
const o=[t[0]+n[0]*a,t[1]+n[1]*a]
n=this._sub(t,o)
const h=Math.cos(Math.PI/18)
let c=Math.sin(Math.PI/18)
a>0&&(c=-c)
const l=[t]
for(let t=1;t<=18;t++)this._rotateDirect(n,h,c),l.push(this._add(o,n))
e.push(l)
break}case h.j.HalfCircleExtended:{const r=this._cp2(s,0,-2),n=this._cp3(s,r,1,-1)
let a
if(t>=4)a=s[3]
else{const t=this._sub(i,r)
a=this._add(n,t)}const o=this._dist(r,n)/2/.75,h=this._sub(r,i)
this._normalize(h,o)
const c=this._sub(n,a)
this._normalize(c,o)
const l=[a,n]
e.push(l)
const u=[this._clone(n)]
this._addBezier3(u,n,this._add(n,c),this._add(r,h),r,4),u.push(i),e.push(u)
break}case h.j.OpenCircle:{const t=this._cp2(s,-2,0),r=this._sub(t,i),n=Math.cos(Math.PI/18),a=-Math.sin(Math.PI/18),o=[t]
for(let t=1;t<=33;t++)this._rotateDirect(r,n,a),o.push(this._add(i,r))
e.push(o)
break}case h.j.CoverageEdgesWithTicks:{const r=this._cp2(s,0,-1)
let n,a
if(t>=3)n=s[2]
else{const t=this._sub(r,i),e=this._leftPerp(t)
n=[i[0]+e[0]-.25*t[0],i[1]+e[1]-.25*t[1]]}if(t>=4)a=s[3]
else{const t=this._mid(i,r),e=this._sub(i,r)
this._normalize(e),this._leftPerpendicular(e)
const s=this._crossProduct(e,this._sub(n,t))
this._rightPerpendicular(e),a=[n[0]+e[0]*s*2,n[1]+e[1]*s*2]}const o=this._sub(r,i)
let h,c
h=this._crossProduct(o,this._sub(n,i))>0?this._rightPerp(o):this._leftPerp(o),c=[],c.push(n),c.push(i),c.push([i[0]+(h[0]-o[0])/3,i[1]+(h[1]-o[1])/3]),e.push(c),h=this._crossProduct(o,this._sub(a,r))>0?this._rightPerp(h):this._leftPerp(o),c=[],c.push([r[0]+(h[0]+o[0])/3,r[1]+(h[1]+o[1])/3]),c.push(r),c.push(a),e.push(c)
break}case h.j.GapExtentWithDoubleTicks:{const r=this._cp2(s,0,2),n=this._cp3(s,r,0,1)
let a
if(t>=4)a=s[3]
else{const t=this._sub(r,i)
a=this._add(n,t)}this._addAngledTicks(e,i,r,this._mid(n,a)),this._addAngledTicks(e,n,a,this._mid(i,r))
break}case h.j.GapExtentMidline:{const r=this._cp2(s,2,0),n=this._cp3(s,r,0,1)
let a
if(t>=4)a=s[3]
else{const t=this._sub(r,i)
a=this._add(n,t)}const o=[]
o.push(this._mid(i,n)),o.push(this._mid(r,a)),e.push(o)
break}case h.j.Chevron:{const r=this._cp2(s,-1,-1)
let n
if(t>=3)n=s[2]
else{const t=this._sub(r,i)
this._leftPerpendicular(t),n=this._add(i,t)}e.push([r,this._makeCtrlPt(i),n])
break}case h.j.PerpendicularWithArc:{const t=this._cp2(s,0,-2),r=this._cp3(s,t,.5,-1)
let n=this._sub(t,i)
const a=this._norm(n)
n[0]/=a,n[1]/=a
const o=this._crossProduct(n,this._sub(r,i))
let h=this._dotProduct(n,this._sub(r,i))
h<.05*a?h=.05*a:h>.95*a&&(h=.95*a)
const c=[i[0]+n[0]*h,i[1]+n[1]*h]
this._leftPerpendicular(n)
let l=[]
l.push([c[0]-n[0]*o,c[1]-n[1]*o]),l.push([c[0]+n[0]*o,c[1]+n[1]*o]),e.push(l)
const u=[t[0]+n[0]*o,t[1]+n[1]*o]
n=this._sub(t,u)
const f=Math.cos(Math.PI/18)
let _=Math.sin(Math.PI/18)
o<0&&(_=-_),l=[i,t]
for(let t=1;t<=9;t++)this._rotateDirect(n,f,_),l.push(this._add(u,n))
e.push(l)
break}case h.j.ClosedHalfCircle:{const t=this._cp2(s,2,0),r=this._mid(i,t),n=this._sub(t,r),a=Math.cos(Math.PI/18),o=Math.sin(Math.PI/18),h=[i,t]
for(let t=1;t<=18;t++)this._rotateDirect(n,a,o),h.push(this._add(r,n))
e.push(h)
break}case h.j.TripleParallelExtended:{const t=this._cp2(s,0,-2),r=this._cp3(s,t,1,-2),a=this._mid(i,t),o=this._sub(r,t)
this._normalize(o)
const h=Math.abs(this._crossProduct(o,this._sub(a,t)))/2,c=this._dist(t,r),l=[t,i]
l.push([i[0]+o[0]*c*.5,i[1]+o[1]*c*.5]),e.push(l)
const u=[]
u.push([a[0]-o[0]*h,a[1]-o[1]*h]),u.push([a[0]+o[0]*c*.375,a[1]+o[1]*c*.375]),Object(n.j)(u[u.length-1],1),u.push([a[0]+o[0]*c*.75,a[1]+o[1]*c*.75]),e.push(u)
const f=[t,r]
e.push(f)
break}case h.j.ParallelWithTicks:{const t=this._cp2(s,3,0),r=this._cp3(s,t,.5,-1),n=this._sub(r,t)
this._normalize(n)
const a=this._crossProduct(n,this._sub(r,i))
this._leftPerpendicular(n),this._addAngledTicks(e,i,t,r),this._addAngledTicks(e,this._mix(i,1,n,a),this._mix(t,1,n,a),this._mid(i,t))
break}case h.j.Parallel:{const t=this._cp2(s,3,0),r=this._cp3(s,t,.5,-1),n=this._sub(t,i)
this._normalize(n)
const a=this._leftPerp(n),o=this._crossProduct(n,this._sub(r,i))
let h=[i,t]
e.push(h),h=[],h.push([i[0]+a[0]*o,i[1]+a[1]*o]),h.push([t[0]+a[0]*o,t[1]+a[1]*o]),e.push(h)
break}case h.j.PerpendicularToFirstSegment:{const t=this._cp2(s,3,0),r=this._cp3(s,t,.5,-1),n=this._mid(i,t),a=this._sub(t,i)
this._normalize(a)
const o=this._crossProduct(a,this._sub(r,i))
this._leftPerpendicular(a)
const h=[]
h.push([n[0]-a[0]*o*.25,n[1]-a[1]*o*.25]),h.push([n[0]+a[0]*o*1.25,n[1]+a[1]*o*1.25]),e.push(h)
break}case h.j.ParallelOffset:{const t=this._cp2(s,3,0),r=this._cp3(s,t,.5,-1),n=this._sub(t,i)
this._normalize(n)
const a=this._crossProduct(n,this._sub(r,i))
this._leftPerpendicular(n)
const o=[]
o.push([i[0]-n[0]*a,i[1]-n[1]*a]),o.push([t[0]-n[0]*a,t[1]-n[1]*a]),e.push(o)
const h=[]
h.push([i[0]+n[0]*a,i[1]+n[1]*a]),h.push([t[0]+n[0]*a,t[1]+n[1]*a]),e.push(h)
break}case h.j.OffsetOpposite:{const t=this._cp2(s,3,0),r=this._cp3(s,t,.5,-1),n=this._sub(t,i)
this._normalize(n)
const a=this._crossProduct(n,this._sub(r,i))
this._leftPerpendicular(n)
const o=[]
o.push([i[0]-n[0]*a,i[1]-n[1]*a]),o.push([t[0]-n[0]*a,t[1]-n[1]*a]),e.push(o)
break}case h.j.OffsetSame:{const t=this._cp2(s,3,0),r=this._cp3(s,t,.5,-1),n=this._sub(t,i)
this._normalize(n)
const a=this._crossProduct(n,this._sub(r,i))
this._leftPerpendicular(n)
const o=[]
o.push([i[0]+n[0]*a,i[1]+n[1]*a]),o.push([t[0]+n[0]*a,t[1]+n[1]*a]),e.push(o)
break}case h.j.CircleWithArc:{let r=this._cp2(s,3,0)
const a=this._cp3(s,r,.5,-1)
let o,h
if(t>=4)o=s[3],h=this._crossProduct(this._sub(o,r),this._sub(a,r))>0
else{o=r,h=this._crossProduct(this._sub(o,i),this._sub(a,i))>0
const t=24*this._geomUnitsPerPoint,e=this._sub(o,i)
this._normalize(e,t)
const s=Math.sqrt(2)/2
this._rotateDirect(e,s,h?s:-s),r=this._add(i,e)}const c=this._sub(r,i),l=Math.cos(Math.PI/18),u=Math.sin(Math.PI/18),f=[r]
for(let t=1;t<=36;t++)this._rotateDirect(c,l,u),f.push(this._add(i,c))
this._add90DegArc(f,r,o,a,h),Object(n.j)(f[f.length-8],1),e.push(f)
break}case h.j.DoubleJog:{let r,n,a=this._cp2(s,-3,1)
if(r=t>=3?s[2]:this._add(i,this._sub(i,a)),t>=4)n=s[3]
else{const t=i
i=a,n=r
const e=this._dist(i,t),s=this._dist(n,t)
let o=30*this._geomUnitsPerPoint;.5*e<o&&(o=.5*e),.5*s<o&&(o=.5*s),a=this._mix(i,o/e,t,(e-o)/e),r=this._mix(n,o/s,t,(s-o)/s)}const o=this._mid(i,a),h=this._mid(n,r),c=this._dist(i,a),l=this._dist(r,n)
let u=Math.min(c,l)/8
u=Math.min(u,24*this._geomUnitsPerPoint)
const f=Math.cos(Math.PI/4)
let _=this._sub(i,a)
this._normalize(_,u),this._crossProduct(_,this._sub(n,a))>0?this._rotateDirect(_,f,-f):this._rotateDirect(_,f,f)
let p=[]
p.push(a),p.push(this._add(o,_)),p.push(this._sub(o,_)),p.push(i),e.push(p),_=this._sub(n,r),this._normalize(_,u),this._crossProduct(_,this._sub(i,r))<0?this._rotateDirect(_,f,f):this._rotateDirect(_,f,-f),p=[],p.push(r),p.push(this._add(h,_)),p.push(this._sub(h,_)),p.push(n),e.push(p)
break}case h.j.PerpendicularOffset:{const t=this._cp2(s,-4,1),r=this._cp3(s,t,.882353,-1.94),n=this._sub(r,t)
this._crossProduct(n,this._sub(i,t))>0?this._rightPerpendicular(n):this._leftPerpendicular(n)
const a=[n[0]/8,n[1]/8],o=this._sub(this._mid(t,r),a)
e.push([o,i])
break}case h.j.LineExcludingLastSegment:{const t=this._arrowPath(s),i=[]
let r=t.length-2
for(;r--;)i.push(t[r])
e.push(i)
break}case h.j.MultivertexArrow:{const t=this._arrowPath(s),i=[]
this._addArrow(i,t,!1),e.push(i)
break}case h.j.CrossedArrow:{const t=this._arrowPath(s),i=[]
this._addArrow(i,t,!0),e.push(i)
break}case h.j.ChevronArrow:{const[t,r]=this._arrowLastSeg(s),n=10*this._geomUnitsPerPoint,a=this._sub(i,t)
this._normalize(a)
const o=this._crossProduct(a,this._sub(r,t)),h=this._leftPerp(a),c=[r[0]-h[0]*o*2,r[1]-h[1]*o*2],l=[]
l.push([r[0]+a[0]*n,r[1]+a[1]*n]),l.push(i),l.push([c[0]+a[0]*n,c[1]+a[1]*n]),e.push(l)
break}case h.j.ChevronArrowOffset:{const[t,r]=this._arrowLastSeg(s),n=this._sub(i,t)
this._normalize(n)
const a=this._crossProduct(n,this._sub(r,t))
this._leftPerpendicular(n)
const o=[r[0]-n[0]*a,r[1]-n[1]*a],h=[]
h.push([o[0]+n[0]*a*.5,o[1]+n[1]*a*.5]),h.push(this._mid(o,i)),h.push([o[0]-n[0]*a*.5,o[1]-n[1]*a*.5]),e.push(h)
break}case h.j.PartialFirstSegment:{const[t,r]=this._arrowLastSeg(s),n=this._sub(i,t)
this._normalize(n)
const a=this._crossProduct(n,this._sub(r,t))
this._leftPerpendicular(n)
const o=[r[0]-n[0]*a,r[1]-n[1]*a]
e.push([t,o])
break}case h.j.Arch:{const t=this._cp2(s,0,-1),r=this._cp3(s,t,.5,1),n=this._sub(i,t),a=this._mix(r,1,n,.55),o=this._mix(r,1,n,-.55),h=[i]
this._addBezier2(h,i,a,r,4),this._addBezier2(h,r,o,t,4),e.push(h)
break}case h.j.CurvedParallelTicks:{const t=this._cp2(s,-4,1),r=this._cp3(s,t,.882353,-1.94),n=this._sub(r,t)
this._crossProduct(n,this._sub(i,t))>0?this._rightPerpendicular(n):this._leftPerpendicular(n)
const a=[n[0]/8,n[1]/8],o=this._sub(this._mid(t,r),a),h=this._sub(this._mix(t,.75,r,.25),a),c=this._sub(this._mix(t,.25,r,.75),a),l=[t]
this._addBezier2(l,t,h,o,3),this._addBezier2(l,o,c,r,3),e.push(l)
for(let t=0;t<8;t++){const s=l[2*t+1],i=[this._clone(s)]
i.push(this._add(s,[n[0]/4,n[1]/4])),e.push(i)}break}case h.j.Arc90Degrees:{const t=this._cp2(s,0,-1),r=this._cp3(s,t,.5,1),n=[t]
this._add90DegArc(n,t,i,r),e.push(n)
break}case h.j.FullGeometry:default:e.push(s)}}return e}}class b{static local(){return null===b.instance&&(b.instance=new b),b.instance}execute(t,e,s,i){return new y(t,e,s)}}b.instance=null
class y extends n.a{constructor(t,e,s){super(t,!0,!0),this._curveHelper=new l,this._beginCut=(void 0!==e.beginCut?e.beginCut:1)*s,this._endCut=(void 0!==e.endCut?e.endCut:1)*s,this._middleCut=(void 0!==e.middleCut?e.middleCut:0)*s,this._invert=void 0!==e.invert&&e.invert,this._beginCut<0&&(this._beginCut=0),this._endCut<0&&(this._endCut=0),this._middleCut<0&&(this._middleCut=0)}processPath(t){const e=this._beginCut,s=this._endCut,i=this._middleCut,r=this._curveHelper.calculatePathLength(t),n=[]
if(this._invert)if(0===e&&0===s&&0===i);else if(e+s+i>=r)n.push(t)
else{let a=this._curveHelper.getSubCurve(t,0,e)
a&&n.push(a),a=this._curveHelper.getSubCurve(t,.5*(r-i),.5*(r+i)),a&&n.push(a),a=this._curveHelper.getSubCurve(t,r-s,s),a&&n.push(a)}else if(0===e&&0===s&&0===i)n.push(t)
else if(e+s+i>=r);else if(0===i){const i=this._curveHelper.getSubCurve(t,e,r-s)
i&&n.push(i)}else{let a=this._curveHelper.getSubCurve(t,e,.5*(r-i))
a&&n.push(a),a=this._curveHelper.getSubCurve(t,.5*(r+i),r-s),a&&n.push(a)}return 0===n.length?null:{paths:n}}}class x{constructor(){this._values=[],this.extPtGap=0,this.ctrlPtGap=0,this._length=0,this._currentValue=0}isEmpty(){return 0===this._values.length}size(){return this._values.length}init(t,e,s=!0){if(this._setEmpty(),!t||0===t.length)return!1
for(let e=0;e<t.length;e++){let i=Math.abs(t[e])
s&&i<1e-7&&(i=1e-7),this._values.push(i),this._length+=i}return e&&1&t.length&&(this._length*=2),0!==this._length&&(this.ctrlPtGap=this.extPtGap=0,this._currentValue=-1,!0)}scale(t){const e=this._values?this._values.length:0
for(let s=0;s<e;++s)this._values[s]*=t
this._length*=t,this.extPtGap*=t,this.ctrlPtGap*=t}addValue(t){this._length+=t,this._values.push(t)}firstValue(){return this._values[0]}lastValue(){return this._values[this._values.length-1]}nextValue(){return this._currentValue++,this._currentValue===this._values.length&&(this._currentValue=0),this._values[this._currentValue]}reset(){this._currentValue=-1}length(){return this._length}_setEmpty(){this.extPtGap=this.ctrlPtGap=this._length=0,this._currentValue=-1,this._values.length=0}}var P,M;(M=P||(P={}))[M.FAIL=0]="FAIL",M[M.END=1]="END",M[M.CONTINUE=2]="CONTINUE"
class S{constructor(){this.reset()}reset(){this.segment=-1,this.segmentLength=0,this.abscissa=0,this.isPathEnd=!1,this.isPartEnd=!1}isValid(){return-1!==this.segment}copyTo(t){t.segment=this.segment,t.segmentLength=this.segmentLength,t.abscissa=this.abscissa,t.isPathEnd=this.isPathEnd,t.isPartEnd=this.isPartEnd}}class w extends l{constructor(t=0,e=!1){super(t,e),this._tolerance=.03,this._currentPosition=new S}updateTolerance(t){this._tolerance=.03*t}init(t,e,s=!0){return s?(this._patternLength=e.length(),this._partExtPtGap=e.extPtGap,this._partCtrlPtGap=e.ctrlPtGap):(this._patternLength=0,this._partExtPtGap=0,this._partCtrlPtGap=0),this._currentPosition.reset(),this._partSegCount=0,this._path=t,this._seg=-1,this._setPosAtNextPart()}curPositionIsValid(){return this._currentPosition.isValid()}nextPosition(t,e=P.FAIL){const s=new S
return!!this._nextPosition(t,s,null,e)&&(s.copyTo(this._currentPosition),!0)}curPointAndAngle(t){t.pt=this._getPoint(this._currentPosition)
const[e,s]=this._getAngle(this._currentPosition)
t.ca=e,t.sa=s}nextPointAndAngle(t,e,s=P.FAIL){const i=new S
if(!this._nextPosition(t,i,null,s))return!1
i.copyTo(this._currentPosition),e.pt=this._getPoint(i)
const[r,n]=this._getAngle(i)
return e.ca=r,e.sa=n,!0}nextCurve(t){if(0===t)return null
const e=[],s=new S
return this._nextPosition(t,s,e,P.END)?(s.copyTo(this._currentPosition),e):null}isPathEnd(){return this._currentPosition.isPathEnd}getPathEnd(){if(-1===this._currentPosition.segment)throw new Error("missing segment")
return this._path[this._currentPosition.segment+1]}_nextPosition(t,e,s,i){if(this._currentPosition.isPathEnd)return!1
let r=this._currentPosition.abscissa
for(this._currentPosition.segmentLength>0&&(r/=this._currentPosition.segmentLength),this._currentPosition.copyTo(e);e.abscissa+t*this._partLengthRatio>e.segmentLength+this._tolerance;){if(s){if(0===s.length)if(0===r){const t=this._path[e.segment]
s.push([t[0],t[1]])}else s.push(this.getSegCoord2D(this._path,e.segment,r))
const t=this._path[e.segment+1]
s.push([t[0],t[1]])}if(r=0,t-=(e.segmentLength-e.abscissa)/this._partLengthRatio,this._partSegCount)e.segment=this._nextSegment(),e.segmentLength=this.calculateSegLength(this._path,e.segment),e.abscissa=0,this._partSegCount--
else{if(!this._setPosAtNextPart())return i!==P.FAIL&&(e.segmentLength=this.calculateSegLength(this._path,e.segment),e.isPartEnd=!0,i===P.END?(e.abscissa=e.segmentLength,e.isPathEnd=!0):e.abscissa=e.segmentLength+t,!0)
this._currentPosition.copyTo(e)}}if(e.abscissa+=t*this._partLengthRatio,s){if(0===s.length)if(0===r){const t=this._path[e.segment]
s.push([t[0],t[1]])}else s.push(this.getSegCoord2D(this._path,e.segment,r))
const t=e.abscissa/e.segmentLength
if(1===t){const t=this._path[e.segment+1]
s.push([t[0],t[1]])}else s.push(this.getSegCoord2D(this._path,e.segment,t))}return this._partSegCount||Math.abs(e.abscissa-e.segmentLength)<this._tolerance&&(e.isPathEnd=this._partIsLast,e.isPartEnd=!0),!0}_getPoint(t){if(-1===t.segment)throw new Error("missing segment")
const e=t.segmentLength<=0?0:t.abscissa/t.segmentLength
return this.getSegCoord2D(this._path,t.segment,e)}_getAngle(t){if(-1===t.segment)throw new Error("missing segment")
const e=t.segmentLength<=0?0:t.abscissa/t.segmentLength
return this.getSegAngleCS(this._path,t.segment,e)}_setPosAtNextPart(){for(;this._partSegCount;)this._hasNextSegment()&&this._nextSegment(),this._partSegCount--
if(!this._hasNextSegment())return!1
for(this._partLength=0,this._partIsLast=!0,this._partSegCount=0;this._hasNextSegment();)if(this._partLength+=this.calculateSegLength(this._path,this._nextSegment()),this._partSegCount++,1===Object(n.f)(this._path[this._getEndPointIndex()])){this._partIsLast=!this._hasNextSegment()
break}let t=this._partSegCount
for(;t;)this._previousSegment(),--t
this._currentPosition.segment=this._nextSegment(),this._currentPosition.segmentLength=this.calculateSegLength(this._path,this._currentPosition.segment),this._currentPosition.abscissa=0,this._currentPosition.isPathEnd=this._currentPosition.isPartEnd=!1,--this._partSegCount
const e=this._getStartPointIndex()
this._ctrlPtBegin=1===Object(n.f)(this._path[e])
let s=e+this._partSegCount+1
if(s>=this._path.length&&(s=0),this._ctrlPtEnd=1===Object(n.f)(this._path[s]),this._patternLength>0){const t=this._ctrlPtBegin?this._partCtrlPtGap:this._partExtPtGap,e=this._ctrlPtEnd?this._partCtrlPtGap:this._partExtPtGap
let s=Math.round((this._partLength-(t+e))/this._patternLength)
s<=0&&(s=t+e>0?0:1),this._partLengthRatio=this._partLength/(t+e+s*this._patternLength),this._partLengthRatio<.01&&(this._partLengthRatio=1)}else this._partLengthRatio=1
return!0}_hasNextSegment(){return this._seg<this._path.length-2}_previousSegment(){return--this._seg}_nextSegment(){return++this._seg}_getStartPointIndex(){return this._seg}_getEndPointIndex(){return this._seg+1}}class C{static local(){return null===C.instance&&(C.instance=new C),C.instance}execute(t,e,s,i){return new k(t,e,s)}}C.instance=null
class k extends n.a{constructor(t,e,s){var i,r
super(t,!0,!0),this._walker=new w,this._walker.updateTolerance(s),this._endings=e.lineDashEnding,this._customDashPos=-(null!=(i=e.offsetAlongLine)?i:0)*s,this._offsetAtEnd=(null!=(r=e.customEndingOffset)?r:0)*s,this._pattern=new x,this._pattern.init(e.dashTemplate,!0),this._pattern.scale(s)}processPath(t){if(0===this._pattern.length())return this.iteratePath=!1,{paths:[t]}
if(!this.iteratePath){let e=!0
switch(this._endings){case h.q.HalfPattern:case h.q.HalfGap:default:this._pattern.extPtGap=0
break
case h.q.FullPattern:this.isClosed||(this._pattern.extPtGap=.5*this._pattern.firstValue())
break
case h.q.FullGap:this.isClosed||(this._pattern.extPtGap=.5*this._pattern.lastValue())
break
case h.q.NoConstraint:this.isClosed||(e=!1)
break
case h.q.Custom:this.isClosed||(this._pattern.extPtGap=.5*this._offsetAtEnd)}const s=this._walker.calculatePathLength(t)
if(this._pattern.isEmpty()||s<.1*this._pattern.length())return{paths:[t]}
if(!this._walker.init(t,this._pattern,e))return{paths:[t]}}let e
if(this.iteratePath)e=this._pattern.nextValue()
else{let t
switch(this._endings){case h.q.HalfPattern:default:t=.5*this._pattern.firstValue()
break
case h.q.HalfGap:t=.5*-this._pattern.lastValue()
break
case h.q.FullGap:t=-this._pattern.lastValue()
break
case h.q.FullPattern:t=0
break
case h.q.NoConstraint:case h.q.Custom:t=-this._customDashPos}let s=t/this._pattern.length()
s-=Math.floor(s),t=s*this._pattern.length(),this._pattern.reset(),e=this._pattern.nextValue()
let i=!1
for(;t>=e;)t-=e,e=this._pattern.nextValue(),i=!i
e-=t,i?(this._walker.nextPosition(e),e=this._pattern.nextValue()):this.isClosed&&(this._firstCurve=this._walker.nextCurve(e),e=this._pattern.nextValue(),this._walker.nextPosition(e),e=this._pattern.nextValue())}let s=this._walker.nextCurve(e)
return s?this._walker.isPathEnd()?(this.iteratePath=!1,this._firstCurve&&(this._firstCurve.splice(0,1),c.mergePath(s,this._firstCurve),this._firstCurve=null)):(e=this._pattern.nextValue(),!this._walker.nextPosition(e)||this._walker.isPathEnd()?(this.iteratePath=!1,this._firstCurve&&(s=this._firstCurve,this._firstCurve=null)):this.iteratePath=!0):(this.iteratePath=!1,s=this._firstCurve,this._firstCurve=null),{paths:[s]}}}class v{static local(){return null===v.instance&&(v.instance=new v),v.instance}execute(t,e,s,i){return new T(t,e,s)}}v.instance=null
class T{constructor(t,e,s){switch(this._inputGeometries=t,this._curveHelper=new l,this._width=(void 0!==e.width?e.width:2)*s,e.method){case h.k.Mitered:default:this._method=h.l.Mitered
break
case h.k.Bevelled:this._method=h.l.Bevelled
break
case h.k.Rounded:case h.k.TrueBuffer:this._method=h.l.Rounded
break
case h.k.Square:this._method=h.l.Square}this._option=e.option,this._offsetFlattenError=.03*s}next(){let t=this._inputGeometries.next()
for(;t;){if(Object(r.d)(t)&&this._width>0){if(Math.min(t.xmax-t.xmin,t.ymax-t.ymin)-2*this._width<0)return t
const e=[]
return e.push([[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]),e.push([[t.xmin+this._width,t.ymin+this._width],[t.xmax-this._width,t.ymin+this._width],[t.xmax-this._width,t.ymax-this._width],[t.xmin+this._width,t.ymax-this._width],[t.xmin+this._width,t.ymin+this._width]]),{rings:e}}if(Object(r.g)(t)&&this._width>0){const e=[]
for(const s of t.rings){const t=this._curveHelper.calculatePathLength(s),i=this._curveHelper.offset(s,this._width,this._method,4,this._offsetFlattenError)
i&&(t<0&&i.reverse(),e.push(i))}if(e.length)return{rings:e}}t=this._inputGeometries.next()}return null}}class L{static local(){return null===L.instance&&(L.instance=new L),L.instance}execute(t,e,s,i){return new O(t,e,s)}}L.instance=null
class O extends n.a{constructor(t,e,s){super(t,!1,!0),this._curveHelper=new l,this._length=(void 0!==e.length?e.length:20)*s,this._angle=void 0!==e.angle?e.angle:225,this._position=void 0!==e.position?e.position:50,this._length<0&&(this._length=-this._length),this._position<20&&(this._position=20),this._position>80&&(this._position=80),this._mirror=!1}processPath(t){if(this._curveHelper.isEmpty(t,!1))return null
const e=t[0],s=t[t.length-1],i=[s[0]-e[0],s[1]-e[1]]
this._curveHelper.normalize(i)
const r=[e[0]+(s[0]-e[0])*this._position/100,e[1]+(s[1]-e[1])*this._position/100],n=Math.cos((90-this._angle)/180*Math.PI)
let a=Math.sin((90-this._angle)/180*Math.PI)
return this._mirror&&(a=-a),this._mirror=!this._mirror,{paths:[[e,[r[0]-this._length/2*n,r[1]-this._length/2*a],[r[0]+this._length/2*n,r[1]+this._length/2*a],s]]}}}class I{static local(){return null===I.instance&&(I.instance=new I),I.instance}execute(t,e,s,i){return new A(t,e,s)}}I.instance=null
class A{constructor(t,e,s){this._inputGeometries=t,this._offsetX=void 0!==e.offsetX?e.offsetX*s:0,this._offsetY=void 0!==e.offsetY?-e.offsetY*s:0}next(){let t=this._inputGeometries.next()
for(;t;){if(Object(r.d)(t))return{xmin:t.xmin+this._offsetX,xmax:t.xmax+this._offsetX,ymin:t.ymin+this._offsetY,ymax:t.ymax+this._offsetY}
if(Object(r.g)(t)){const e=Object(i.a)(t)
return this._moveMultipath(e.rings,this._offsetX,this._offsetY),e}if(Object(r.h)(t)){const e=Object(i.a)(t)
return this._moveMultipath(e.paths,this._offsetX,this._offsetY),e}if(Object(r.e)(t)){const e=Object(i.a)(t)
return this._movePath(e.points,this._offsetX,this._offsetY),e}if(Object(r.f)(t))return{x:t.x+this._offsetX,y:t.y+this._offsetY}
t=this._inputGeometries.next()}return null}_moveMultipath(t,e,s){if(t)for(const i of t)this._movePath(i,e,s)}_movePath(t,e,s){if(t)for(const i of t)i[0]+=e,i[1]+=s}}class j{static local(){return null===j.instance&&(j.instance=new j),j.instance}execute(t,e,s,i){return new F(t,e,s)}}j.instance=null
class F{constructor(t,e,s){var i
this._inputGeometries=t,this._curveHelper=new l,this._offset=(null!=(i=e.offset)?i:1)*s,this._method=e.method,this._option=e.option,this._offsetFlattenError=.03*s}next(){let t=this._inputGeometries.next()
for(;t;){if(0===this._offset)return t
if(Object(r.d)(t)){if(this._method===h.l.Rounded&&this._offset>0){const e=[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]],s=this._curveHelper.offset(e,-this._offset,this._method,4,this._offsetFlattenError)
return s?{rings:[s]}:null}if(Math.min(t.xmax-t.xmin,t.ymax-t.ymin)+2*this._offset>0)return{xmin:t.xmin-this._offset,xmax:t.xmax+this._offset,ymin:t.ymin-this._offset,ymax:t.ymax+this._offset}}if(Object(r.g)(t)){const e=[]
for(const s of t.rings){const t=this._curveHelper.offset(s,-this._offset,this._method,4,this._offsetFlattenError)
t&&e.push(t)}if(e.length)return{rings:e}}if(Object(r.h)(t)){const e=[]
for(const s of t.paths){const t=this._curveHelper.offset(s,-this._offset,this._method,4,this._offsetFlattenError)
t&&e.push(t)}if(e.length)return{paths:e}}t=this._inputGeometries.next()}return null}}class z{static local(){return null===z.instance&&(z.instance=new z),z.instance}execute(t,e,s,i){return new R(t,e,s)}}z.instance=null
class R{constructor(t,e,s){this._inputGeometries=t,this._reverse=void 0===e.reverse||e.reverse}next(){let t=this._inputGeometries.next()
for(;t;){if(!this._reverse)return t
if(Object(r.h)(t)){const e=Object(i.a)(t)
return Object(n.h)(e.paths),e}t=this._inputGeometries.next()}return null}}var E=s(884),G=s(943)
class B{static local(){return null===B.instance&&(B.instance=new B),B.instance}execute(t,e,s,i){return new H(t,e,s)}}B.instance=null
class H{constructor(t,e,s){this._inputGeometries=t,this._rotateAngle=void 0!==e.angle?e.angle*Math.PI/180:0}next(){let t=this._inputGeometries.next()
for(;t;){if(0===this._rotateAngle)return t
const e=Object(E.m)()
Object(G.a)(e,t)
const s=(e[2]+e[0])/2,n=(e[3]+e[1])/2
if(Object(r.d)(t)){const e={rings:[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]}
return this._rotateMultipath(e.rings,s,n),e}if(Object(r.g)(t)){const e=Object(i.a)(t)
return this._rotateMultipath(e.rings,s,n),e}if(Object(r.h)(t)){const e=Object(i.a)(t)
return this._rotateMultipath(e.paths,s,n),e}if(Object(r.e)(t)){const e=Object(i.a)(t)
return this._rotatePath(e.points,s,n),e}if(Object(r.f)(t))return t
t=this._inputGeometries.next()}return null}_rotateMultipath(t,e,s){if(t)for(const i of t)this._rotatePath(i,e,s)}_rotatePath(t,e,s){if(t){const i=Math.cos(this._rotateAngle),r=Math.sin(this._rotateAngle)
for(const n of t){const t=n[0]-e,a=n[1]-s
n[0]=e+t*i-a*r,n[1]=s+t*r+a*i}}}}class D{static local(){return null===D.instance&&(D.instance=new D),D.instance}execute(t,e,s,i){return new N(t,e,s)}}D.instance=null
class N{constructor(t,e,s){this._inputGeometries=t,this._xFactor=void 0!==e.xScaleFactor?e.xScaleFactor:1.15,this._yFactor=void 0!==e.yScaleFactor?e.yScaleFactor:1.15}next(){let t=this._inputGeometries.next()
for(;t;){if(1===this._xFactor&&1===this._yFactor)return t
const e=Object(E.m)()
Object(G.a)(e,t)
const s=(e[2]+e[0])/2,n=(e[3]+e[1])/2
if(Object(r.d)(t)){const e={rings:[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]}
return this._scaleMultipath(e.rings,s,n),e}if(Object(r.g)(t)){const e=Object(i.a)(t)
return this._scaleMultipath(e.rings,s,n),e}if(Object(r.h)(t)){const e=Object(i.a)(t)
return this._scaleMultipath(e.paths,s,n),e}if(Object(r.e)(t)){const e=Object(i.a)(t)
return this._scalePath(e.points,s,n),e}if(Object(r.f)(t))return t
t=this._inputGeometries.next()}return null}_scaleMultipath(t,e,s){if(t)for(const i of t)this._scalePath(i,e,s)}_scalePath(t,e,s){if(t)for(const i of t){const t=(i[0]-e)*this._xFactor,r=(i[1]-s)*this._yFactor
i[0]=e+t,i[1]=s+r}}}class U{static local(){return null===U.instance&&(U.instance=new U),U.instance}execute(t,e,s,i){return new V(t,e,s)}}U.instance=null
class V{constructor(t,e,s){this._inputGeometries=t,this._height=(void 0!==e.amplitude?e.amplitude:2)*s,this._period=(void 0!==e.period?e.period:3)*s,this._style=e.waveform,this._height<=0&&(this._height=Math.abs(this._height)),this._period<=0&&(this._period=Math.abs(this._period)),this._pattern=new x,this._pattern.addValue(this._period),this._pattern.addValue(this._period),this._walker=new w,this._walker.updateTolerance(s)}next(){let t=this._inputGeometries.next()
for(;t;){if(0===this._height||0===this._period)return t
if(Object(r.h)(t)){const e=this._processGeom(t.paths)
if(e.length)return{paths:e}}if(Object(r.g)(t)){const e=this._processGeom(t.rings)
if(e.length)return{rings:e}}t=this._inputGeometries.next()}return null}_processGeom(t){const e=[]
for(const s of t)if(this._walker.init(s,this._pattern))switch(this._style){case h.m.Sinus:default:e.push(this._constructCurve(s,!1))
break
case h.m.Square:e.push(this._constructSquare(s))
break
case h.m.Triangle:e.push(this._constructTriangle(s))
break
case h.m.Random:e.push(this._constructCurve(s,!0))}else e.push(s)
return e}_constructCurve(t,e){const s=new c,i=this._walker.calculatePathLength(t)
let r=Math.round(i/this._period)
0===r&&(r=1)
const n=16*r+1,a=i/r,o=this._period/16,h=1/n,l=2*Math.PI*i/a,u=2*Math.PI*Math.random(),f=2*Math.PI*Math.random(),_=2*Math.PI*Math.random(),p=.75-Math.random()/2,d=.75-Math.random()/2,m={}
this._walker.curPointAndAngle(m),s.startPath(m.pt)
let g=0
for(;;){if(!this._walker.nextPointAndAngle(o,m)){s.lineTo(t[t.length-1])
break}{const t=g
let i
if(g+=h,e){const e=this._height/2*(1+.3*Math.sin(p*l*t+u))
i=e*Math.sin(l*t+f),i+=e*Math.sin(d*l*t+_),i/=2}else i=.5*this._height*Math.sin(.5*l*t)
s.lineTo([m.pt[0]-i*m.sa,m.pt[1]+i*m.ca])}}return s.path()}_constructSquare(t){const e=new c,s=this._walker.calculatePathLength(t)
Math.round(s/this._period)
let i=!0
for(;;){let t=!1
if(this._walker.curPositionIsValid()){const s={}
this._walker.curPointAndAngle(s)
const r={}
if(this._walker.nextPointAndAngle(this._period,r)){const n={}
this._walker.nextPointAndAngle(this._period,n)&&(i?(e.startPath(s.pt),i=!1):e.lineTo(s.pt),e.lineTo([s.pt[0]-this._height/2*s.sa,s.pt[1]+this._height/2*s.ca]),e.lineTo([r.pt[0]-this._height/2*r.sa,r.pt[1]+this._height/2*r.ca]),e.lineTo([r.pt[0]+this._height/2*r.sa,r.pt[1]-this._height/2*r.ca]),e.lineTo([n.pt[0]+this._height/2*n.sa,n.pt[1]-this._height/2*n.ca]),t=!0)}}if(!t){e.lineTo(this._walker.getPathEnd())
break}}return e.path()}_constructTriangle(t){const e=new c,s=this._walker.calculatePathLength(t)
Math.round(s/this._period)
let i=!0
for(;;){let t=!1
if(this._walker.curPositionIsValid()){const s={}
this._walker.curPointAndAngle(s)
const r={}
if(this._walker.nextPointAndAngle(this._period/2,r)){const n={}
this._walker.nextPointAndAngle(this._period,n)&&(this._walker.nextPosition(this._period/2)&&(i?(e.startPath(s.pt),i=!1):e.lineTo(s.pt),e.lineTo([r.pt[0]-this._height/2*r.sa,r.pt[1]+this._height/2*r.ca]),e.lineTo([n.pt[0]+this._height/2*n.sa,n.pt[1]-this._height/2*n.ca])),t=!0)}}if(!t){e.lineTo(this._walker.getPathEnd())
break}}return e.path()}}class X{static local(){return null===X.instance&&(X.instance=new X),X.instance}execute(t,e,s,i){return new Y(t,e,s)}}X.instance=null
class Y extends n.b{constructor(t,e,s){var i
super(t,!0,!0),this._geometryWalker=new w,this._geometryWalker.updateTolerance(s),this._angleToLine=null==(i=e.angleToLine)||i,this._offset=(e.offset?e.offset:0)*s,this._originalEndings=e.endings,this._offsetAtEnd=(e.customEndingOffset?e.customEndingOffset:0)*s,this._position=-(e.offsetAlongLine?e.offsetAlongLine:0)*s,this._pattern=new x,this._pattern.init(e.placementTemplate,!1),this._pattern.scale(s),this._endings=this._originalEndings}processPath(t){if(this._pattern.isEmpty())return null
let e
if(this.iteratePath)e=this._pattern.nextValue()
else{this._originalEndings===h.s.WithFullGap&&this.isClosed?this._endings=h.s.WithMarkers:this._endings=this._originalEndings,this._pattern.extPtGap=0
let s,i=!0
switch(this._endings){case h.s.NoConstraint:s=-this._position,s=this._adjustPosition(s),i=!1
break
case h.s.WithHalfGap:default:s=-this._pattern.lastValue()/2
break
case h.s.WithFullGap:s=-this._pattern.lastValue(),this._pattern.extPtGap=this._pattern.lastValue()
break
case h.s.WithMarkers:s=0
break
case h.s.Custom:s=-this._position,s=this._adjustPosition(s),this._pattern.extPtGap=.5*this._offsetAtEnd}if(!this._geometryWalker.init(t,this._pattern,i))return null
this._pattern.reset()
let r=0
for(;s>r;)s-=r,r=this._pattern.nextValue()
r-=s,e=r,this.iteratePath=!0}const s={}
return this._geometryWalker.nextPointAndAngle(e,s)?this._endings===h.s.WithFullGap&&this._geometryWalker.isPathEnd()?(this.iteratePath=!1,null):this._endings===h.s.WithMarkers&&this._geometryWalker.isPathEnd()&&(this.iteratePath=!1,this.isClosed)?null:(this.internalPlacement.setTranslate(s.pt[0]-this._offset*s.sa,s.pt[1]+this._offset*s.ca),this._angleToLine&&this.internalPlacement.setRotateCS(s.ca,s.sa),this.internalPlacement):(this.iteratePath=!1,null)}_adjustPosition(t){let e=t/this._pattern.length()
return e-=Math.floor(e),e*this._pattern.length()}}class W{static local(){return null===W.instance&&(W.instance=new W),W.instance}execute(t,e,s,i){return new q(t,e,s)}}W.instance=null
class q extends n.b{constructor(t,e,s){super(t,!1,!0),this._curveHelper=new l,this._angleToLine=void 0===e.angleToLine||e.angleToLine,this._offset=void 0!==e.offset?e.offset*s:0,this._type=e.extremityPlacement,this._position=void 0!==e.offsetAlongLine?e.offsetAlongLine*s:0,this._beginProcessed=!1}processPath(t){let e
switch(this._type){case h.e.Both:default:this._beginProcessed?(e=this._atExtremities(t,this._position,!1),this._beginProcessed=!1,this.iteratePath=!1):(e=this._atExtremities(t,this._position,!0),this._beginProcessed=!0,this.iteratePath=!0)
break
case h.e.JustBegin:e=this._atExtremities(t,this._position,!0)
break
case h.e.JustEnd:e=this._atExtremities(t,this._position,!1)
case h.e.None:}return e}_atExtremities(t,e,s){const i=t.length
if(i<2)return null
const r=s?1:i-2,a=s?i:-1,o=s?1:-1
let h,c=0,l=s?t[0]:t[i-1]
for(let s=r;s!==a;s+=o){h=l,l=t[s]
const i=this._curveHelper.calculateLength(h,l)
if(c+i>e){const t=(e-c)/i,[s,r]=this._curveHelper.getAngleCS(h,l,t),a=Object(n.e)(h,l,t)
return this.internalPlacement.setTranslate(a[0]-this._offset*r,a[1]+this._offset*s),this._angleToLine&&this.internalPlacement.setRotateCS(-s,-r),this.internalPlacement}c+=i}return null}}class J{static local(){return null===J.instance&&(J.instance=new J),J.instance}execute(t,e,s,i){return new $(t,e,s)}}J.instance=null
class $ extends n.b{constructor(t,e,s){super(t,!0,!0),this._walker=new w,this._walker.updateTolerance(s),this._angleToLine=void 0===e.angleToLine||e.angleToLine,this._offset=void 0!==e.offset?e.offset*s:0,this._beginGap=void 0!==e.beginPosition?e.beginPosition*s:0,this._endGap=void 0!==e.endPosition?e.endPosition*s:0,this._flipFirst=void 0===e.flipFirst||e.flipFirst,this._pattern=new x,this._pattern.init(e.positionArray,!1,!1),this._subPathLen=0,this._posCount=this._pattern.size(),this._isFirst=!0,this._prevPos=0}processPath(t){if(this._pattern.isEmpty())return null
let e
if(this.iteratePath){const t=this._pattern.nextValue()*this._subPathLen,s=this._beginGap+t
e=s-this._prevPos,this._prevPos=s}else{if(this._posCount=this._pattern.size(),this._isFirst=!0,this._prevPos=0,this._subPathLen=this._walker.calculatePathLength(t)-this._beginGap-this._endGap,this._subPathLen<0)return this.iteratePath=!1,null
if(!this._walker.init(t,this._pattern,!1))return null
this._pattern.reset()
const s=this._pattern.nextValue()*this._subPathLen,i=this._beginGap+s
e=i-this._prevPos,this._prevPos=i,this.iteratePath=!0}const s={}
if(!this._walker.nextPointAndAngle(e,s,P.END))return this.iteratePath=!1,null
this.internalPlacement.setTranslate(s.pt[0]-this._offset*s.sa,s.pt[1]+this._offset*s.ca)
const i=this._isFirst&&this._flipFirst
let r,n
return this._angleToLine?(r=s.ca,n=s.sa):(r=1,n=0),i&&(r=-r,n=-n),this.internalPlacement.setRotateCS(r,n),this._isFirst=!1,this._posCount--,0===this._posCount&&(this.iteratePath=!1),this.internalPlacement}}var Z=s(1697)
class K{static local(){return null===K.instance&&(K.instance=new K),K.instance}execute(t,e,s,i){return new Q(t,e,s,i)}}K.instance=null
class Q{constructor(t,e,s,i){if(this._xMin=0,this._xMax=0,this._yMin=0,this._yMax=0,this._currentX=0,this._currentY=0,this._stepX=(void 0!==e.stepX?Math.abs(e.stepX):16)*s,this._stepY=(void 0!==e.stepY?Math.abs(e.stepY):16)*s,0!==this._stepX&&0!==this._stepY&&t&&function(t){return void 0!==t.rings}(t)&&t.rings){if(this._gridType=void 0!==e.gridType?e.gridType:h.t.Fixed,this._gridType===h.t.Random)this._randomness=void 0!==e.randomness?e.randomness/100:1,this._gridAngle=0,this._shiftOddRows=!1,this._cosAngle=1,this._sinAngle=0,this._offsetX=0,this._offsetY=0
else{if(this._randomness=0,this._gridAngle=void 0!==e.gridAngle?e.gridAngle:0,this._shiftOddRows=void 0!==e.shiftOddRows&&e.shiftOddRows,this._offsetX=void 0!==e.offsetX?e.offsetX*s:0,this._offsetY=void 0!==e.offsetY?e.offsetY*s:0,this._cosAngle=Math.cos(this._gridAngle/180*Math.PI),this._sinAngle=-Math.sin(this._gridAngle/180*Math.PI),this._stepX)if(this._offsetX<0)for(;this._offsetX<-.5*this._stepX;)this._offsetX+=this._stepX
else for(;this._offsetX>=.5*this._stepX;)this._offsetX-=this._stepX
if(this._stepY)if(this._offsetY<0)for(;this._offsetY<-.5*this._stepY;)this._offsetY+=this._stepY
else for(;this._offsetY>=.5*this._stepY;)this._offsetY-=this._stepY}this._graphicOriginX=0,this._graphicOriginY=0,this._internalPlacement=new Z.a,this._calculateMinMax(t),this._geometry=t}}next(){return this._geometry?this._nextInside():null}_calculateMinMax(t){let e,s,i,r,n,a,o,h
this._xMin=0,this._xMax=0,this._yMin=0,this._yMax=0,n=a=Number.MAX_VALUE,o=h=-Number.MAX_VALUE
for(const c of t.rings){const t=c?c.length:0
for(let l=0;l<t;++l)e=c[l][0]-this._graphicOriginX-this._offsetX,s=c[l][1]-this._graphicOriginY-this._offsetY,i=this._cosAngle*e-this._sinAngle*s,r=this._sinAngle*e+this._cosAngle*s,n=Math.min(n,i),o=Math.max(o,i),a=Math.min(a,r),h=Math.max(h,r)}n+=this._graphicOriginX,o+=this._graphicOriginX,a+=this._graphicOriginY,h+=this._graphicOriginY,this._xMin=Math.round(n/this._stepX),this._xMax=Math.round(o/this._stepX),this._yMin=Math.round(a/this._stepY),this._yMax=Math.round(h/this._stepY),this._currentX=this._xMax+1,this._currentY=this._yMin-1}_nextInside(){for(;;){if(this._currentX>this._xMax){if(this._currentY++,this._currentY>this._yMax)return null
this._currentX=this._xMin,this._shiftOddRows&&this._currentY%2&&this._currentX--}let t=this._currentX*this._stepX+this._offsetX
this._shiftOddRows&&this._currentY%2&&(t+=.5*this._stepX)
const e=this._currentY*this._stepY+this._offsetY
let s,i
return this._currentX++,this._gridType===h.t.Random?(s=this._graphicOriginX+t+this._stepX*this._randomness*(.5-Math.random())*2/3,i=this._graphicOriginY+e+this._stepY*this._randomness*(.5-Math.random())*2/3):(s=this._graphicOriginX+this._cosAngle*t+this._sinAngle*e,i=this._graphicOriginY-this._sinAngle*t+this._cosAngle*e),this._internalPlacement.setTranslate(s,i),this._internalPlacement}}}class tt{static local(){return null===tt.instance&&(tt.instance=new tt),tt.instance}execute(t,e,s,i){return new et(t,e,s)}}tt.instance=null
class et extends n.b{constructor(t,e,s){super(t,!0,!0),this._curveHelper=new l,this._angleToLine=void 0===e.angleToLine||e.angleToLine,this._offset=void 0!==e.offset?e.offset*s:0,this._relativeTo=e.relativeTo,this._position=void 0!==e.startPointOffset?e.startPointOffset*s:0,this._epsilon=.001*s}processPath(t){const e=this._position
if(this._relativeTo===h.u.SegmentMidpoint){for(this.iteratePath||(this._segmentCount=t.length,this._curSegment=1,this.iteratePath=!0);this._curSegment<this._segmentCount;){const e=this._curSegment
this._curSegment++
const s=t[e-1],i=t[e],r=this._curveHelper.calculateLength(s,i)
if(r<this._epsilon)continue
const a=.5+this._position/r,[o,h]=this._curveHelper.getAngleCS(s,i,a),c=Object(n.e)(s,i,a)
return this.internalPlacement.setTranslate(c[0]-this._offset*h,c[1]+this._offset*o),this._angleToLine&&this.internalPlacement.setRotateCS(o,h),this.internalPlacement}return this.iteratePath=!1,null}this._relativeTo===h.u.LineEnd&&Object(n.i)(t)
const s=this.onLine(t,e)
return this._relativeTo===h.u.LineEnd&&Object(n.i)(t),s}onLine(t,e){let s,i=!1
switch(this._relativeTo){case h.u.LineMiddle:default:s=this._curveHelper.calculatePathLength(t)/2+e
break
case h.u.LineBeginning:s=e
break
case h.u.LineEnd:s=e,i=!0}const r=t.length
let a,o=0,c=t[0]
for(let e=1;e<r;++e){a=c,c=t[e]
const r=this._curveHelper.calculateLength(a,c)
if(o+r>s){const t=(s-o)/r,[e,h]=this._curveHelper.getAngleCS(a,c,t),l=Object(n.e)(a,c,t),u=i?-this._offset:this._offset
return this.internalPlacement.setTranslate(l[0]-u*h,l[1]+u*e),this._angleToLine&&(i?this.internalPlacement.setRotateCS(-e,-h):this.internalPlacement.setRotateCS(e,h)),this.internalPlacement}o+=r}return null}}class st{static local(){return null===st.instance&&(st.instance=new st),st.instance}execute(t,e,s,i){return new it(t,e,s)}}st.instance=null
class it extends n.b{constructor(t,e,s){super(t,!0,!0),this._curveHelper=new l,this._angleToLine=void 0===e.angleToLine||e.angleToLine,this._offset=void 0!==e.offset?e.offset*s:0,this._endPoints=void 0===e.placeOnEndPoints||e.placeOnEndPoints,this._controlPoints=void 0===e.placeOnControlPoints||e.placeOnControlPoints,this._regularVertices=void 0===e.placeOnRegularVertices||e.placeOnRegularVertices,this._tags=[],this._tagIterator=0}processPath(t){if(this.iteratePath||(this._preparePath(t),this.iteratePath=!0),this._tagIterator>=this._tags.length)return this._tags.length=0,this._tagIterator=0,this.iteratePath=!1,null
const e=this._tags[this._tagIterator]
this._angleToLine&&this.internalPlacement.setRotate(e[2])
let s=e[0],i=e[1]
if(0!==this._offset){const t=Math.cos(e[2]),r=Math.sin(e[2])
s-=this._offset*r,i+=this._offset*t}return this.internalPlacement.setTranslate(s,i),this._tagIterator++,this.internalPlacement}_preparePath(t){this._tags.length=0,this._tagIterator=0
const e=Object(n.g)(t),s=t.length-1
let i,r,a=0,o=0,h=0,c=0,l=0
for(;a<s;){a++,i=t[a-1],r=t[a]
const u=Object(n.f)(i),f=Object(n.f)(r);(this._angleToLine||0!==this._offset)&&(c=this._curveHelper.getAngle(i,r,0)),1===a?e?(o=c,h=u):(this._endPoints||this._controlPoints&&1===u)&&this._tags.push([i[0],i[1],c]):1===u?this._controlPoints&&this._tags.push([i[0],i[1],rt(l,c)]):this._regularVertices&&this._tags.push([i[0],i[1],rt(l,c)]),(this._angleToLine||0!==this._offset)&&(l=this._curveHelper.getAngle(i,r,1)),a===s&&(e?1===f||1===h?this._controlPoints&&this._tags.push([r[0],r[1],rt(l,o)]):this._regularVertices&&this._tags.push([r[0],r[1],rt(l,o)]):(this._endPoints||this._controlPoints&&1===f)&&this._tags.push([r[0],r[1],l]))}this._tagIterator=0}}function rt(t,e){const s=Math.PI
for(;Math.abs(e-t)>s+2e-15;)e-t>s?e-=2*s:e+=2*s
return(t+e)/2}class nt{static local(){return null===nt.instance&&(nt.instance=new nt),nt.instance}execute(t,e,s,i){return new at(t,e,s)}}nt.instance=null
class at{constructor(t,e,s){this._geometry=t,this._offsetX=void 0!==e.offsetX?e.offsetX*s:0,this._offsetY=void 0!==e.offsetY?e.offsetY*s:0,this._method=void 0!==e.method?e.method:h.v.OnPolygon,this._internalPlacement=new Z.a}next(){const t=this._geometry
return this._geometry=null,t&&function(t){return void 0!==t.rings}(t)?this._polygonCenter(t):null}_polygonCenter(t){let e=!1
switch(this._method){case h.v.OnPolygon:default:case h.v.CenterOfMass:case h.v.BoundingBoxCenter:{const s=Object(E.m)()
Object(G.a)(s,t),this._internalPlacement.setTranslate((s[2]+s[0])/2+this._offsetX,(s[3]+s[1])/2+this._offsetY),e=!0
break}}return e?this._internalPlacement:null}}function ot(t){if(!t)return null
switch(t.type){case"CIMGeometricEffectAddControlPoints":return a.local()
case"CIMGeometricEffectArrow":return f.local()
case"CIMGeometricEffectBuffer":return p.local()
case"CIMGeometricEffectControlMeasureLine":return m.local()
case"CIMGeometricEffectCut":return b.local()
case"CIMGeometricEffectDashes":return C.local()
case"CIMGeometricEffectDonut":return v.local()
case"CIMGeometricEffectJog":return L.local()
case"CIMGeometricEffectMove":return I.local()
case"CIMGeometricEffectOffset":return j.local()
case"CIMGeometricEffectReverse":return z.local()
case"CIMGeometricEffectRotate":return B.local()
case"CIMGeometricEffectScale":return D.local()
case"CIMGeometricEffectWave":return U.local()}return null}function ht(t){if(!t)return null
switch(t.type){case"CIMMarkerPlacementAlongLineSameSize":return X.local()
case"CIMMarkerPlacementAtExtremities":return W.local()
case"CIMMarkerPlacementAtRatioPositions":return J.local()
case"CIMMarkerPlacementInsidePolygon":return K.local()
case"CIMMarkerPlacementOnLine":return tt.local()
case"CIMMarkerPlacementOnVertices":return st.local()
case"CIMMarkerPlacementPolygonCenter":return nt.local()}return null}},1562:function(t,e,s){"use strict"
s.d(e,"a",(function(){return n})),s.d(e,"b",(function(){return o})),s.d(e,"c",(function(){return i})),s.d(e,"d",(function(){return r})),s.d(e,"e",(function(){return f})),s.d(e,"f",(function(){return u})),s.d(e,"g",(function(){return c})),s.d(e,"h",(function(){return l}))
const i=Number.POSITIVE_INFINITY,r=Math.PI,n=2*r,a=128/r,o=r/180,h=1/Math.LN2
function c(t,e){return(t%=e)>=0?t:t+e}function l(t){return c(t*a,256)}function u(t){return Math.log(t)*h}function f(t,e,s){return t*(1-s)+e*s}},1602:function(t,e,s){"use strict"
s.d(e,"a",(function(){return i})),s(178)
class i{constructor(t){this._geometry=t}next(){const t=this._geometry
return this._geometry=null,t}}},1603:function(t,e,s){"use strict"
s.d(e,"a",(function(){return i}))
class i{constructor(t=0,e=0,s=0,i=0){this.x=t,this.y=e,this.width=s,this.height=i}get isEmpty(){return this.width<=0||this.height<=0}union(t){this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.width=Math.max(this.width,t.width),this.height=Math.max(this.height,t.height)}}},1666:function(t,e,s){"use strict"
s.d(e,"a",(function(){return T})),s.d(e,"b",(function(){return k})),s.d(e,"c",(function(){return v})),s.d(e,"d",(function(){return w})),s.d(e,"e",(function(){return O})),s.d(e,"f",(function(){return A})),s.d(e,"g",(function(){return I}))
var i=s(1251),r=s(177),n=s(20),a=s(982),o=s(876),h=s(884),c=s(943),l=s(968),u=s(869),f=s(1602),_=s(1411),p=s(1697),d=s(1986),m=s(969),g=s(1367),b=s(2078),y=s(1152),x=s(891),P=s(1395)
const M=Math.PI/180,S=r.a.getLogger("esri.symbols.cim.CIMSymbolDrawHelper")
class w{constructor(t){this._t=t}static createIdentity(){return new w([1,0,0,0,1,0])}clone(){const t=this._t
return new w(t.slice())}transform(t){const e=this._t
return[e[0]*t[0]+e[1]*t[1]+e[2],e[3]*t[0]+e[4]*t[1]+e[5]]}static createScale(t,e){return new w([t,0,0,0,e,0])}scale(t,e){const s=this._t
return s[0]*=t,s[1]*=t,s[2]*=t,s[3]*=e,s[4]*=e,s[5]*=e,this}scaleRatio(){return Math.sqrt(this._t[0]*this._t[0]+this._t[1]*this._t[1])}static createTranslate(t,e){return new w([0,0,t,0,0,e])}translate(t,e){const s=this._t
return s[2]+=t,s[5]+=e,this}static createRotate(t){const e=Math.cos(t),s=Math.sin(t)
return new w([e,-s,0,s,e,0])}rotate(t){return w.multiply(this,w.createRotate(t),this)}static multiply(t,e,s){const i=t._t,r=e._t,n=i[0]*r[0]+i[3]*r[1],a=i[1]*r[0]+i[4]*r[1],o=i[2]*r[0]+i[5]*r[1]+r[2],h=i[0]*r[3]+i[3]*r[4],c=i[1]*r[3]+i[4]*r[4],l=i[2]*r[3]+i[5]*r[4]+r[5],u=s._t
return u[0]=n,u[1]=a,u[2]=o,u[3]=h,u[4]=c,u[5]=l,s}invert(){const t=this._t
let e=t[0]*t[4]-t[1]*t[3]
if(0===e)return new w([0,0,0,0,0,0])
e=1/e
const s=(t[1]*t[5]-t[2]*t[4])*e,i=(t[2]*t[3]-t[0]*t[5])*e,r=t[4]*e,n=-t[1]*e,a=-t[3]*e,o=t[0]*e
return new w([r,n,s,a,o,i])}}class C{constructor(t,e){this._transfos=[],this._sizeTransfos=[],this._geomUnitsPerPoint=1,this._placementPool=new a.a(p.a,null,null,100),this._earlyReturn=!1,this._mapRotation=0,this._resourceManager=t||new d.a,this._transfos.push(e||w.createIdentity()),this._sizeTransfos.push(e?e.scaleRatio():1)}setTransform(t,e){this._transfos=[t||w.createIdentity()],this._sizeTransfos=[e||(t?t.scaleRatio():1)]}setGeomUnitsPerPoint(t){this._geomUnitsPerPoint=t}transformPt(t){return this._transfos[this._transfos.length-1].transform(t)}transformSize(t){return t*this._sizeTransfos[this._sizeTransfos.length-1]}reverseTransformPt(t){return this._transfos[this._transfos.length-1].invert().transform(t)}reverseTransformSize(t){return t/this._sizeTransfos[this._sizeTransfos.length-1]}geomUnitsPerPoint(){return this.isEmbedded()?1:this._geomUnitsPerPoint}isEmbedded(){return this._transfos.length>1}back(){return this._transfos[this._transfos.length-1]}push(t,e){const s=e?t.scaleRatio():1
w.multiply(t,this.back(),t),this._transfos.push(t),this._sizeTransfos.push(this._sizeTransfos[this._sizeTransfos.length-1]*s)}pop(){this._transfos.splice(-1,1),this._sizeTransfos.splice(-1,1)}drawSymbol(t,e){if(t)switch(t.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":this.drawMultiLayerSymbol(t,e)
break
case"CIMTextSymbol":this.drawTextSymbol(t,e)}}drawMultiLayerSymbol(t,e){if(!t)return
const s=t.symbolLayers
if(!s)return
const i=t.effects
if(i&&i.length>0){const t=this.executeEffects(i,e)
if(t){let e=t.next()
for(;e;)this.drawSymbolLayers(s,e),e=t.next()}}else this.drawSymbolLayers(s,e)}executeEffects(t,e){const s=this._resourceManager.geometryEngine
let i=new f.a(e)
for(const e of t){const t=Object(_.a)(e)
t&&(i=t.execute(i,e,this.geomUnitsPerPoint(),s))}return i}drawSymbolLayers(t,e){let s=t.length
for(;s--;){const i=t[s]
if(!i||!1===i.enable)continue
const r=i.effects
if(r&&r.length>0){const t=this.executeEffects(r,e)
if(t){let e=null
for(;(e=t.next())&&(this.drawSymbolLayer(i,e),!this._earlyReturn););}}else this.drawSymbolLayer(i,e)
if(this._earlyReturn)return}}drawSymbolLayer(t,e){switch(t.type){case"CIMSolidFill":this.drawSolidFill(e,t.color)
break
case"CIMHatchFill":this.drawHatchFill(e,t)
break
case"CIMPictureFill":this.drawPictureFill(e,t)
break
case"CIMGradientFill":this.drawGradientFill(e,t)
break
case"CIMSolidStroke":this.drawSolidStroke(e,t.color,t.width,t.capStyle,t.joinStyle,t.miterLimit)
break
case"CIMPictureStroke":this.drawPictureStroke(e,t)
break
case"CIMGradientStroke":this.drawGradientStroke(e,t)
break
case"CIMCharacterMarker":case"CIMPictureMarker":case"CIMVectorMarker":this.drawMarkerLayer(t,e)}}drawHatchFill(t,e){const s=this._buildHatchPolyline(e,t,this.geomUnitsPerPoint())
s&&(this.pushClipPath(t),this.drawMultiLayerSymbol(e.lineSymbol,s),this.popClipPath())}drawPictureFill(t,e){}drawGradientFill(t,e){}drawPictureStroke(t,e){}drawGradientStroke(t,e){}drawMarkerLayer(t,e){const s=t.markerPlacement
if(s){const i=Object(_.b)(s)
if(i){const r="CIMMarkerPlacementInsidePolygon"===s.type
r&&this.pushClipPath(e)
const n=i.execute(e,s,this.geomUnitsPerPoint(),this._resourceManager.geometryEngine)
if(n){let e=null
for(;(e=n.next())&&(this.drawMarker(t,e),!this._earlyReturn););}r&&this.popClipPath()}}else{const s=this._placementPool.acquire()
if(Object(u.f)(e))s.tx=e.x,s.ty=e.y,this.drawMarker(t,s)
else if(Object(u.g)(e))[s.tx,s.ty]=Object(l.b)(e),this.drawMarker(t,s)
else for(const i of e.points)if(s.tx=i[0],s.ty=i[1],this.drawMarker(t,s),this._earlyReturn)break
this._placementPool.release(s)}}drawMarker(t,e){switch(t.type){case"CIMCharacterMarker":case"CIMPictureMarker":this.drawPictureMarker(t,e)
break
case"CIMVectorMarker":this.drawVectorMarker(t,e)}}drawPictureMarker(t,e){var s,i,r,a,o
if(!t)return
const h=this._resourceManager.getResource(t.url),c=null!=(s=t.size)?s:10
if(Object(n.j)(h)||c<=0)return
const l=h.width,u=h.height
if(!l||!u)return
const f=l/u,_=null!=(i=t.scaleX)?i:1,p=w.createIdentity(),d=t.anchorPoint
if(d){let e=d.x,s=d.y
"Absolute"!==t.anchorPointUnits&&(e*=c*f*_,s*=c),p.translate(-e,-s)}let m=null!=(r=t.rotation)?r:0
t.rotateClockwise&&(m=-m),this._mapRotation&&(m+=this._mapRotation),m&&p.rotate(m*M)
let g=null!=(a=t.offsetX)?a:0,b=null!=(o=t.offsetY)?o:0
if(g||b){if(this._mapRotation){const t=M*this._mapRotation,e=Math.cos(t),s=Math.sin(t),i=g*s+b*e
g=g*e-b*s,b=i}p.translate(g,b)}const y=this.geomUnitsPerPoint()
1!==y&&p.scale(y,y)
const x=e.getAngle()
x&&p.rotate(x),p.translate(e.tx,e.ty),this.push(p,!1),this.drawImage(t.url,c,t.scaleX),this.pop()}drawVectorMarker(t,e){var s,i,r,n
if(!t)return
const a=t.markerGraphics
if(!a)return
const o=null!=(s=t.size)?s:10,h=t.frame,c=h?h.ymax-h.ymin:0,l=o&&c?o/c:1,u=w.createIdentity()
h&&u.translate(.5*-(h.xmax+h.xmin),.5*-(h.ymax+h.ymin))
const f=t.anchorPoint
if(f){let e=f.x,s=f.y
"Absolute"!==t.anchorPointUnits?h&&(e*=h.xmax-h.xmin,s*=h.ymax-h.ymin):(e/=l,s/=l),u.translate(-e,-s)}1!==l&&u.scale(l,l)
let _=null!=(i=t.rotation)?i:0
t.rotateClockwise&&(_=-_),this._mapRotation&&(_+=this._mapRotation),_&&u.rotate(_*M)
let p=null!=(r=t.offsetX)?r:0,d=null!=(n=t.offsetY)?n:0
if(p||d){if(this._mapRotation){const t=M*this._mapRotation,e=Math.cos(t),s=Math.sin(t),i=p*s+d*e
p=p*e-d*s,d=i}u.translate(p,d)}const m=this.geomUnitsPerPoint()
1!==m&&u.scale(m,m)
const g=e.getAngle()
g&&u.rotate(g),u.translate(e.tx,e.ty),this.push(u,t.scaleSymbolsProportionally)
for(const t of a)if(t&&t.symbol&&t.geometry||S.error("Invalid marker graphic",t),this.drawSymbol(t.symbol,t.geometry),this._earlyReturn)break
this.pop()}drawTextSymbol(t,e){var s,i,r,n
if(!t)return
if(!Object(u.f)(e))return
if((null!=(s=t.height)?s:10)<=0)return
const a=w.createIdentity()
let o=null!=(i=t.angle)?i:0
o=-o,o&&a.rotate(o*M)
const h=null!=(r=t.offsetX)?r:0,c=null!=(n=t.offsetY)?n:0;(h||c)&&a.translate(h,c)
const l=this.geomUnitsPerPoint()
1!==l&&a.scale(l,l),a.translate(e.x,e.y),this.push(a,!1),this.drawText(t),this.pop()}_buildHatchPolyline(t,e,s){let i=(void 0!==t.separation?t.separation:4)*s,r=void 0!==t.rotation?t.rotation:0
if(0===i)return null
i<0&&(i=-i)
let n=0
const a=.5*i
for(;n>a;)n-=i
for(;n<-a;)n+=i
const o=Object(h.m)()
Object(c.a)(o,e),o[0]-=a,o[1]-=a,o[2]+=a,o[3]+=a
const l=[[o[0],o[1]],[o[0],o[3]],[o[2],o[3]],[o[2],o[1]]]
for(;r>180;)r-=180
for(;r<0;)r+=180
const u=Math.cos(r*M),f=Math.sin(r*M),_=-i*f,p=i*u
let d,m,g,b
n=(void 0!==t.offsetX?t.offsetX*s:0)*f-(void 0!==t.offsetY?t.offsetY*s:0)*u,d=g=Number.MAX_VALUE,m=b=-Number.MAX_VALUE
for(const t of l){const e=t[0],s=t[1],i=u*e+f*s,r=-f*e+u*s
d=Math.min(d,i),g=Math.min(g,r),m=Math.max(m,i),b=Math.max(b,r)}g=Math.floor(g/i)*i
let y=u*d-f*g-_*n/i,x=f*d+u*g-p*n/i,P=u*m-f*g-_*n/i,S=f*m+u*g-p*n/i
const w=1+Math.round((b-g)/i),C=[]
for(let t=0;t<w;t++)y+=_,x+=p,P+=_,S+=p,C.push([[y,x],[P,S]])
return{paths:C}}}class k extends C{constructor(t,e){super(t,e),this.reset()}reset(){this._xmin=this._ymin=1/0,this._xmax=this._ymax=-1/0,this._clipCount=0}envelope(){return new g.a(this._xmin,this._ymin,this._xmax-this._xmin,this._ymax-this._ymin)}bounds(){return Object(h.u)(this._xmin,this._ymin,this._xmax,this._ymax)}drawSolidFill(t){if(t&&!(this._clipCount>0))if(Object(u.g)(t))this._processPath(t.rings,0)
else if(Object(u.h)(t))this._processPath(t.paths,0)
else if(Object(u.d)(t)){const e=L(t)
e&&this._processPath(e.rings,0)}else console.error("drawSolidFill Unexpected geometry type!")}drawSolidStroke(t,e,s){if(!t||this._clipCount>0)return
const i=.5*this.transformSize(s)
if(Object(u.g)(t))this._processPath(t.rings,i)
else if(Object(u.h)(t))this._processPath(t.paths,i)
else if(Object(u.d)(t)){const e=L(t)
e&&this._processPath(e.rings,i)}else console.error("drawSolidStroke unexpected geometry type!")}pushClipPath(t){this.drawSolidFill(t),++this._clipCount}popClipPath(){--this._clipCount}drawImage(t,e,s){let i=s*e,r=e
const a=this._resourceManager.getResource(t)
!e&&Object(n.k)(a)&&(i=s*a.width,r=a.height),this._merge(this.transformPt([-i/2,-r/2]),0),this._merge(this.transformPt([-i/2,r/2]),0),this._merge(this.transformPt([i/2,-r/2]),0),this._merge(this.transformPt([i/2,r/2]),0)}drawText(t){this._textRasterizer||(this._textRasterizer=new b.a)}_processPath(t,e){if(t)for(const s of t){const t=s?s.length:0
if(t>1){this._merge(this.transformPt(s[0]),e)
for(let i=1;i<t;++i)this._merge(this.transformPt(s[i]),e)}}}_merge(t,e){t[0]-e<this._xmin&&(this._xmin=t[0]-e),t[0]+e>this._xmax&&(this._xmax=t[0]+e),t[1]-e<this._ymin&&(this._ymin=t[1]-e),t[1]+e>this._ymax&&(this._ymax=t[1]+e)}}class v extends C{constructor(){super(...arguments),this._searchPoint=[0,0],this._searchDistPoint=0}hitTest(t,e,s,i,r,n){const a=n*Object(o.h)(1)
this.setTransform(),this.setGeomUnitsPerPoint(a),this._searchPoint=[(t[0]+t[2])/2,(t[1]+t[3])/2],this._searchDistPoint=(t[2]-t[0])/2/a,this._textInfo=i
const h=e&&("CIMPointSymbol"===e.type&&"Map"!==e.angleAlignment||"CIMTextSymbol"===e.type)
return this._mapRotation=h?r:0,this._earlyReturn=!1,this.drawSymbol(e,s),this._earlyReturn}drawSolidFill(t,e){this._hitTestFill(t)}drawHatchFill(t,e){this._hitTestFill(t)}drawPictureFill(t,e){this._hitTestFill(t)}drawGradientFill(t,e){this._hitTestFill(t)}drawSolidStroke(t,e,s,i,r,n){this._hitTestStroke(t,s)}drawPictureStroke(t,e){this._hitTestStroke(t,e.width)}drawGradientStroke(t,e){this._hitTestStroke(t,e.width)}pushClipPath(t){}popClipPath(){}drawImage(t,e,s){const i=this._resourceManager.getResource(t)
if(Object(n.j)(i)||0===i.height||0===e)return
const r=e*this.geomUnitsPerPoint(),a=r*s*(i.width/i.height),o=this.reverseTransformPt(this._searchPoint),h=this._searchDistPoint
Math.abs(o[0])<a/2+h&&Math.abs(o[1])<r/2+h&&(this._earlyReturn=!0)}drawText(t){var e,s
const r=this._textInfo
if(!r)return
const n=r.get(t)
if(!n)return
const{text:a,mosaicItem:o}=n
if(!o||0===o.glyphMosaicItems.length)return
const h=null!=(e=t.height)?e:10,c=A(t.lineGapType,null!=(s=t.lineGap)?s:0,h),l=Object(i.a)(a)[1],u=o.glyphMosaicItems,f=Object(P.a)(u,l,{scale:h/x.r,angle:0,xOffset:0,yOffset:0,hAlign:O(t.horizontalAlignment),vAlign:I(t.verticalAlignment),maxLineWidth:512,lineHeight:x.u*Math.max(.25,Math.min(c||1,4)),decoration:t.font.decoration||"none",isCIM:!0}),_=this.reverseTransformPt(this._searchPoint),p=_[0],d=_[1]
for(const t of f.glyphs)if(p>t.xTopLeft&&p<t.xBottomRight&&d>-t.yBottomRight&&d<-t.yTopLeft){this._earlyReturn=!0
break}}_hitTestFill(t){let e=null
if(Object(u.d)(t)){const s=t
e=[[[s.xmin,s.ymin],[s.xmin,s.ymax],[s.xmax,s.ymax],[s.xmax,s.ymin],[s.xmin,s.ymin]]]}else if(Object(u.g)(t))e=t.rings
else{if(!Object(u.h)(t))return
e=t.paths}const s=this.reverseTransformPt(this._searchPoint)
this._pointInPolygon(s,e)&&(this._earlyReturn=!0)
const i=this.reverseTransformSize(this._searchDistPoint)*this.geomUnitsPerPoint()
this._nearLine(s,e,i)&&(this._earlyReturn=!0)}_hitTestStroke(t,e){let s=null
if(Object(u.d)(t)){const e=t
s=[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]}else if(Object(u.g)(t))s=t.rings
else{if(!Object(u.h)(t))return
s=t.paths}const i=this.reverseTransformPt(this._searchPoint),r=e*this.geomUnitsPerPoint(),n=this.reverseTransformSize(this._searchDistPoint)*this.geomUnitsPerPoint()
this._nearLine(i,s,r/2+n)&&(this._earlyReturn=!0)}_pointInPolygon(t,e){let s=0
for(const i of e){const e=i.length
for(let r=1;r<e;++r){const e=i[r-1],n=i[r]
e[1]>t[1]!=n[1]>t[1]&&((n[0]-e[0])*(t[1]-e[1])-(n[1]-e[1])*(t[0]-e[0])>0?s++:s--)}}return 0!==s}_nearLine(t,e,s){for(const i of e){const e=i.length
for(let r=1;r<e;++r){const e=i[r-1],n=i[r]
let a=(n[0]-e[0])*(n[0]-e[0])+(n[1]-e[1])*(n[1]-e[1])
if(0===a)continue
a=Math.sqrt(a)
const o=((n[0]-e[0])*(t[1]-e[1])-(n[1]-e[1])*(t[0]-e[0]))/a
if(Math.abs(o)<s){const i=((n[0]-e[0])*(t[0]-e[0])+(n[1]-e[1])*(t[1]-e[1]))/a
if(i>-s&&i<a+s)return!0}}}return!1}}class T extends C{constructor(t,e,s){super(e,s),this._ctx=t}drawSolidFill(t,e){if(!t)return
if(Object(u.g)(t))this._buildPath(t.rings,!0)
else if(Object(u.h)(t))this._buildPath(t.paths,!0)
else if(Object(u.d)(t))this._buildPath(L(t).rings,!0)
else{if(!Object(u.e)(t))return
console.log("CanvasDrawHelper.drawSolidFill - No implementation!")}const s=this._ctx
s.fillStyle="string"==typeof e?e:"rgba("+Math.round(e[0])+","+Math.round(e[1])+","+Math.round(e[2])+","+e[3]/255+")",s.fill("evenodd")}drawSolidStroke(t,e,s,i,r,n){if(!t||!e||0===s)return
if(Object(u.g)(t))this._buildPath(t.rings,!0)
else if(Object(u.h)(t))this._buildPath(t.paths,!1)
else{if(!Object(u.d)(t))return void console.log("CanvasDrawHelper.drawSolidStroke isn't implemented!")
this._buildPath(L(t).rings,!0)}const a=this._ctx
a.strokeStyle="string"==typeof e?e:"rgba("+Math.round(e[0])+","+Math.round(e[1])+","+Math.round(e[2])+","+e[3]/255+")",a.lineWidth=this.transformSize(s)+.5,this._setCapStyle(i),this._setJoinStyle(r),a.miterLimit=n,a.stroke()}pushClipPath(t){if(this._ctx.save(),Object(u.g)(t))this._buildPath(t.rings,!0)
else if(Object(u.h)(t))this._buildPath(t.paths,!0)
else{if(!Object(u.d)(t))return
this._buildPath(L(t).rings,!0)}this._ctx.clip("evenodd")}popClipPath(){this._ctx.restore()}drawImage(t,e,s){const i=this._resourceManager.getResource(t)
if(Object(n.j)(i))return
const r=this._ctx,a=r.canvas.width,o=r.canvas.height
let h=e*s*(i.width/i.height),c=s*e
e||(h=s*i.width,c=s*i.height),this._ctx.drawImage(i,0,0,i.width,i.height,0,0,Math.min(this.transformSize(h),a),Math.min(this.transformSize(c),o))}drawText(t){this._textRasterizer||(this._textRasterizer=new b.a)}_buildPath(t,e){const s=this._ctx
if(s.beginPath(),t)for(const i of t){const t=i?i.length:0
if(t>1){let r=this.transformPt(i[0])
s.moveTo(r[0],r[1])
for(let e=1;e<t;++e)r=this.transformPt(i[e]),s.lineTo(r[0],r[1])
e&&s.closePath()}}}_setCapStyle(t){switch(t){case m.p.Butt:this._ctx.lineCap="butt"
break
case m.p.Round:this._ctx.lineCap="round"
break
case m.p.Square:this._ctx.lineCap="square"}}_setJoinStyle(t){switch(t){case m.r.Bevel:this._ctx.lineJoin="bevel"
break
case m.r.Round:this._ctx.lineJoin="round"
break
case m.r.Miter:this._ctx.lineJoin="miter"}}}const L=t=>t?{spatialReference:t.spatialReference,rings:[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]}:null,O=t=>{switch(t){case"Left":return y.a.Left
case"Right":return y.a.Right
case"Center":case"Justify":return y.a.Center}},I=t=>{switch(t){case"Top":return y.b.Top
case"Center":return y.b.Center
case"Bottom":return y.b.Bottom
case"Baseline":return y.b.Baseline}},A=(t,e,s)=>{switch(t){case"ExtraLeading":return 1+e/s
case"Multiple":return e
case"Exact":return e/s}}},1697:function(t,e,s){"use strict"
s.d(e,"a",(function(){return i}))
class i{constructor(){this.setIdentity()}getAngle(){return(null==this.rz||0===this.rz&&1!==this.rz_c&&0!==this.rz_s)&&(this.rz=Math.atan2(this.rz_s,this.rz_c)),this.rz}setIdentity(){this.tx=0,this.ty=0,this.tz=0,this.s=1,this.rx=0,this.ry=0,this.rz=0,this.rz_c=1,this.rz_s=0}setTranslate(t,e){this.tx=t,this.ty=e}setTranslateZ(t){this.tz=t}setRotateCS(t,e){this.rz=void 0,this.rz_c=t,this.rz_s=e}setRotate(t){this.rz=t,this.rz_c=void 0,this.rz_s=void 0}setRotateY(t){this.ry=t}setScale(t){this.s=t}setMeasure(t){this.m=t}}},1986:function(t,e,s){"use strict"
s.d(e,"a",(function(){return a}))
var i=s(660),r=s(354),n=s(861)
class a{constructor(){this._resourceMap=new Map,this._inFlightResourceMap=new Map,this.geometryEngine=null}destroy(){this._inFlightResourceMap.clear(),this._resourceMap.clear()}getResource(t){var e
return null!=(e=this._resourceMap.get(t))?e:null}async fetchResource(t,e){const s={width:0,height:0},i=this._resourceMap,r=i.get(t)
if(r)return s.width=r.width,s.height=r.height,s
let n=this._inFlightResourceMap.get(t)
return n||(n=o(t,e),this._inFlightResourceMap.set(t,n),n=n.then(e=>{if(this._inFlightResourceMap.delete(t),e.ok){i.set(t,e.value)
const r=e.value
return s.width=r.width,s.height=r.height,s}return s}),n)}deleteResource(t){this._inFlightResourceMap.delete(t),this._resourceMap.delete(t)}}function o(t,e){if(t.includes(";base64,")){const e=new Image
return e.src=t,e.decode().then(()=>({ok:!0,value:e})).catch(e=>Object(n.m)(e)?{ok:!1,error:e}:{ok:!1,error:new r.a("invalid-resource","Could not fetch requested resource at "+t)})}return Object(i.default)(t,{responseType:"image",...e}).then(t=>({ok:!0,value:t.data})).catch(e=>Object(n.m)(e)?{ok:!1,error:e}:{ok:!1,error:new r.a("invalid-resource","Could not fetch requested resource at "+t)})}},2035:function(t,e,s){"use strict"
s.d(e,"a",(function(){return w}))
const i=[["(",")"],[")","("],["<",">"],[">","<"],["[","]"],["]","["],["{","}"],["}","{"],["«","»"],["»","«"],["‹","›"],["›","‹"],["⁽","⁾"],["⁾","⁽"],["₍","₎"],["₎","₍"],["≤","≥"],["≥","≤"],["〈","〉"],["〉","〈"],["﹙","﹚"],["﹚","﹙"],["﹛","﹜"],["﹜","﹛"],["﹝","﹞"],["﹞","﹝"],["﹤","﹥"],["﹥","﹤"]],r=["آ","أ","إ","ا"],n=["ﻵ","ﻷ","ﻹ","ﻻ"],a=["ﻶ","ﻸ","ﻺ","ﻼ"],o=["ا","ب","ت","ث","ج","ح","خ","د","ذ","ر","ز","س","ش","ص","ض","ط","ظ","ع","غ","ف","ق","ك","ل","م","ن","ه","و","ي","إ","أ","آ","ة","ى","ل","م","ن","ه","و","ي","إ","أ","آ","ة","ى","ی","ئ","ؤ"],h=["ﺍ","ﺏ","ﺕ","ﺙ","ﺝ","ﺡ","ﺥ","ﺩ","ﺫ","ﺭ","ﺯ","ﺱ","ﺵ","ﺹ","ﺽ","ﻁ","ﻅ","ﻉ","ﻍ","ﻑ","ﻕ","ﻙ","ﻝ","ﻡ","ﻥ","ﻩ","ﻭ","ﻱ","ﺇ","ﺃ","ﺁ","ﺓ","ﻯ","ﯼ","ﺉ","ﺅ","ﹰ","ﹲ","ﹴ","ﹶ","ﹸ","ﹺ","ﹼ","ﹾ","ﺀ","ﺉ","ﺅ"],c=["ﺎ","ﺐ","ﺖ","ﺚ","ﺞ","ﺢ","ﺦ","ﺪ","ﺬ","ﺮ","ﺰ","ﺲ","ﺶ","ﺺ","ﺾ","ﻂ","ﻆ","ﻊ","ﻎ","ﻒ","ﻖ","ﻚ","ﻞ","ﻢ","ﻦ","ﻪ","ﻮ","ﻲ","ﺈ","ﺄ","ﺂ","ﺔ","ﻰ","ﯽ","ﺊ","ﺆ","ﹰ","ﹲ","ﹴ","ﹶ","ﹸ","ﹺ","ﹼ","ﹾ","ﺀ","ﺊ","ﺆ"],l=["ﺎ","ﺒ","ﺘ","ﺜ","ﺠ","ﺤ","ﺨ","ﺪ","ﺬ","ﺮ","ﺰ","ﺴ","ﺸ","ﺼ","ﻀ","ﻄ","ﻈ","ﻌ","ﻐ","ﻔ","ﻘ","ﻜ","ﻠ","ﻤ","ﻨ","ﻬ","ﻮ","ﻴ","ﺈ","ﺄ","ﺂ","ﺔ","ﻰ","ﯿ","ﺌ","ﺆ","ﹱ","ﹲ","ﹴ","ﹷ","ﹹ","ﹻ","ﹽ","ﹿ","ﺀ","ﺌ","ﺆ"],u=["ﺍ","ﺑ","ﺗ","ﺛ","ﺟ","ﺣ","ﺧ","ﺩ","ﺫ","ﺭ","ﺯ","ﺳ","ﺷ","ﺻ","ﺿ","ﻃ","ﻇ","ﻋ","ﻏ","ﻓ","ﻗ","ﻛ","ﻟ","ﻣ","ﻧ","ﻫ","ﻭ","ﻳ","ﺇ","ﺃ","ﺁ","ﺓ","ﻯ","ﯾ","ﺋ","ﺅ","ﹰ","ﹲ","ﹴ","ﹶ","ﹸ","ﹺ","ﹼ","ﹾ","ﺀ","ﺋ","ﺅ"],f=["ء","آ","أ","ؤ","إ","ا","ة","د","ذ","ر","ز","و","ى"],_=["ً","ً","ٌ","؟","ٍ","؟","َ","َ","ُ","ُ","ِ","ِ","ّ","ّ","ْ","ْ","ء","آ","آ","أ","أ","ؤ","ؤ","إ","إ","ئ","ئ","ئ","ئ","ا","ا","ب","ب","ب","ب","ة","ة","ت","ت","ت","ت","ث","ث","ث","ث","ج","ج","ج","ج","ح","ح","ح","ح","خ","خ","خ","خ","د","د","ذ","ذ","ر","ر","ز","ز","س","س","س","س","ش","ش","ش","ش","ص","ص","ص","ص","ض","ض","ض","ض","ط","ط","ط","ط","ظ","ظ","ظ","ظ","ع","ع","ع","ع","غ","غ","غ","غ","ف","ف","ف","ف","ق","ق","ق","ق","ك","ك","ك","ك","ل","ل","ل","ل","م","م","م","م","ن","ن","ن","ن","ه","ه","ه","ه","و","و","ى","ى","ي","ي","ي","ي","ﻵ","ﻶ","ﻷ","ﻸ","ﻹ","ﻺ","ﻻ","ﻼ","؟","؟","؟"],p=["ء","ف"],d=["غ","ي"],m=[[0,3,0,1,0,0,0],[0,3,0,1,2,2,0],[0,3,0,17,2,0,1],[0,3,5,5,4,1,0],[0,3,21,21,4,0,1],[0,3,5,5,4,2,0]],g=[[2,0,1,1,0,1,0],[2,0,1,1,0,2,0],[2,0,2,1,3,2,0],[2,0,2,33,3,1,1]],b=10,y=12,x=18,P=["UBAT_L","UBAT_R","UBAT_EN","UBAT_AN","UBAT_ON","UBAT_B","UBAT_S","UBAT_AL","UBAT_WS","UBAT_CS","UBAT_ES","UBAT_ET","UBAT_NSM","UBAT_LRE","UBAT_RLE","UBAT_PDF","UBAT_LRO","UBAT_RLO","UBAT_BN"],M=[100,0,0,0,0,101,102,103,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,104,4,4,4,0,4,0,4,0,4,4,4,0,0,4,4,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,4,4,0,0,4,4,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,0,105,7,7,106,107],S=[[x,x,x,x,x,x,x,x,x,6,5,6,8,5,x,x,x,x,x,x,x,x,x,x,x,x,x,x,5,5,5,6,8,4,4,11,11,11,4,4,4,4,4,b,9,b,9,9,2,2,2,2,2,2,2,2,2,2,9,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,x,x,x,x,x,x,5,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,9,4,11,11,11,11,4,4,4,4,0,4,4,x,4,4,11,11,2,2,4,0,4,4,4,2,0,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,4,4,4,4,4,4,4,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,1,y,1,y,y,1,y,y,1,y,4,4,4,4,4,4,4,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,1,1,1,1,1,4,4,4,4,4,4,4,4,4,4,4],[3,3,3,3,4,4,4,4,7,11,11,7,9,7,4,4,y,y,y,y,y,y,y,y,y,y,y,7,4,4,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,3,3,3,3,3,3,3,3,3,3,11,3,3,7,7,7,y,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,y,y,y,y,y,y,y,3,4,y,y,y,y,y,y,7,7,y,y,4,y,y,y,y,7,7,2,2,2,2,2,2,2,2,2,2,7,7,7,7,7,7],[7,7,7,7,7,7,7,7,7,7,7,7,7,7,4,7,7,y,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,4,4,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,y,y,y,y,y,y,y,y,y,y,y,7,4,4,4,4,4,4,4,4,4,4,4,4,4,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,y,y,y,y,y,y,y,y,y,1,1,4,4,4,4,1,4,4,4,4,4],[8,8,8,8,8,8,8,8,8,8,8,x,x,x,0,1,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,8,5,13,14,15,16,17,9,11,11,11,11,11,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,9,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,8,x,x,x,x,x,4,4,4,4,4,x,x,x,x,x,x,2,0,4,4,2,2,2,2,2,2,b,b,4,4,4,0,2,2,2,2,2,2,2,2,2,2,b,b,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],[0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,4,4,4,4,4,1,y,1,1,1,1,1,1,1,1,1,1,b,1,1,1,1,1,1,1,1,1,1,1,1,1,4,1,1,1,1,1,4,1,4,1,1,4,1,1,4,1,1,1,1,1,1,1,1,1,1,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],[y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,y,y,y,y,y,y,y,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,9,4,9,4,4,9,4,4,4,4,4,4,4,4,4,11,4,4,b,b,4,4,4,4,4,11,11,4,4,4,4,4,7,7,7,7,7,4,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,4,4,x],[4,4,4,11,11,11,4,4,4,4,4,b,9,b,9,9,2,2,2,2,2,2,2,2,2,2,9,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,0,0,0,0,0,0,4,4,0,0,0,0,0,0,4,4,0,0,0,0,0,0,4,4,0,0,0,4,4,4,11,11,4,4,4,11,11,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]]
class w{constructor(){this.inputFormat="ILYNN",this.outputFormat="VLNNN",this.sourceToTarget=[],this.targetToSource=[],this.levels=[]}bidiTransform(t,e,s){if(this.sourceToTarget=[],this.targetToSource=[],!t)return""
if(function(t,e,s){X=[],W=[]
for(let i=0;i<s;i++)t[i]=i,e[i]=i,X[i]=i}(this.sourceToTarget,this.targetToSource,t.length),!this.checkParameters(e,s))return t
e=this.inputFormat,s=this.outputFormat
let i=t
const o=q,l=D(e.charAt(1)),f=D(s.charAt(1)),p=("I"===e.charAt(0)?"L":e.charAt(0))+l,d=("I"===s.charAt(0)?"L":s.charAt(0))+f,m=e.charAt(2)+s.charAt(2)
o.defInFormat=p,o.defOutFormat=d,o.defSwap=m
const g=function t(e,s,i,r,n){const a=function(t,e,s){if(void 0===e.inFormat&&(e.inFormat=s.defInFormat),void 0===e.outFormat&&(e.outFormat=s.defOutFormat),void 0===e.swap&&(e.swap=s.defSwap),e.inFormat===e.outFormat)return e
const i=e.inFormat.substring(0,1),r=e.outFormat.substring(0,1)
let n,a=e.inFormat.substring(1,4),o=e.outFormat.substring(1,4)
return"C"===a.charAt(0)&&(n=C(t),a="ltr"===n||"rtl"===n?n.toUpperCase():"L"===e.inFormat.charAt(2)?"LTR":"RTL",e.inFormat=i+a),"C"===o.charAt(0)&&(n=C(t),"rtl"===n?o="RTL":"ltr"===n?(n=function(t){const e=t.split("")
return e.reverse(),C(e.join(""))}(t),o=n.toUpperCase()):o="L"===e.outFormat.charAt(2)?"LTR":"RTL",e.outFormat=r+o),e}(e,{inFormat:s,outFormat:i,swap:r},n)
if(a.inFormat===a.outFormat)return e
s=a.inFormat,i=a.outFormat,r=a.swap
const o=s.substring(0,1),h=s.substring(1,4),c=i.substring(0,1),l=i.substring(1,4)
if(n.inFormat=s,n.outFormat=i,n.swap=r,"L"===o&&"VLTR"===i){if("LTR"===h)return n.dir=Z,k(e,n)
if("RTL"===h)return n.dir=K,k(e,n)}if("V"===o&&"V"===c)return n.dir="RTL"===h?K:Z,L(e,n)
if("L"===o&&"VRTL"===i)return"LTR"===h?(n.dir=Z,e=k(e,n)):(n.dir=K,e=k(e,n)),L(e)
if("VLTR"===s&&"LLTR"===i)return n.dir=Z,k(e,n)
if("V"===o&&"L"===c&&h!==l)return e=L(e),"RTL"===h?t(e,"LLTR","VLTR",r,n):t(e,"LRTL","VRTL",r,n)
if("VRTL"===s&&"LRTL"===i)return t(e,"LRTL","VRTL",r,n)
if("L"===o&&"L"===c){const s=n.swap
return n.swap=s.substr(0,1)+"N","RTL"===h?(n.dir=K,e=k(e,n),n.swap="N"+s.substr(1,2),n.dir=Z,e=k(e,n)):(n.dir=Z,e=k(e,n),n.swap="N"+s.substr(1,2),e=t(e,"VLTR","LRTL",n.swap,n)),e}return e}(t,p,d,m,o)
let b=!1
return"R"===s.charAt(1)?b=!0:"C"!==s.charAt(1)&&"D"!==s.charAt(1)||(b="rtl"===this.checkContextual(g)),this.sourceToTarget=X,this.targetToSource=function(t){const e=new Array(t.length)
for(let s=0;s<t.length;s++)e[t[s]]=s
return e}(this.sourceToTarget),Y=this.targetToSource,i=e.charAt(3)===s.charAt(3)?g:"S"===s.charAt(3)?function(t,e,s){if(0===e.length)return""
void 0===t&&(t=!0),void 0===s&&(s=!0)
const i=(e=String(e)).split("")
let r=0,o=1,l=i.length
t||(r=i.length-1,o=-1,l=1)
const f=function(t,e,s,i,r){let o=0
const l=[]
let f=0
for(let _=e;_*s<i;_+=s)if(I(t[_])||H(t[_])){if("ل"===t[_]&&j(t,_+s,s,i)){t[_]=U(t[_+s],0===o?n:a),_+=s,N(t,_,s,i),r&&(l[f]=_,f++),o=0
continue}const e=t[_]
1===o?t[_]=A(t,_+s,s,i)?G(t[_]):B(t[_],c):!0===A(t,_+s,s,i)?t[_]=B(t[_],u):t[_]=B(t[_],h),H(e)||(o=1),!0===E(e)&&(o=0)}else o=0
return l}(i,r,o,l,s)
let _=""
for(let e=0;e<i.length;e++)s&&O(f,f.length,e)>-1?(V(Y,e,!t,-1),X.splice(e,1)):_+=i[e]
return _}(b,g,!0):function(t,e,s){if(0===t.length)return""
void 0===s&&(s=!0),void 0===e&&(e=!0)
let i=""
const n=(t=String(t)).split("")
for(let a=0;a<t.length;a++){let o=!1
if(n[a]>="ﹰ"&&n[a]<"\ufeff"){const h=t.charCodeAt(a)
n[a]>="ﻵ"&&n[a]<="ﻼ"?(e?(a>0&&s&&" "===n[a-1]?i=i.substring(0,i.length-1)+"ل":(i+="ل",o=!0),i+=r[(h-65269)/2]):(i+=r[(h-65269)/2],i+="ل",a+1<t.length&&s&&" "===n[a+1]?a++:o=!0),o&&(V(Y,a,!0,1),X.splice(a,0,X[a]))):i+=_[h-65136]}else i+=n[a]}return i}(g,b,!0),this.sourceToTarget=X,this.targetToSource=Y,this.levels=W,i}_inputFormatSetter(t){if(!Q.test(t))throw new Error("dojox/string/BidiEngine: the bidi layout string is wrong!")
this.inputFormat=t}_outputFormatSetter(t){if(!Q.test(t))throw new Error("dojox/string/BidiEngine: the bidi layout string is wrong!")
this.outputFormat=t}checkParameters(t,e){return t?this._inputFormatSetter(t):t=this.inputFormat,e?this._outputFormatSetter(e):e=this.outputFormat,t!==e}checkContextual(t){let e=C(t)
if("ltr"!==e&&"rtl"!==e){try{e=document.dir.toLowerCase()}catch(t){}"ltr"!==e&&"rtl"!==e&&(e="ltr")}return e}hasBidiChar(t){return tt.test(t)}}function C(t){const e=/[A-Za-z\u05d0-\u065f\u066a-\u06ef\u06fa-\u07ff\ufb1d-\ufdff\ufe70-\ufefc]/.exec(t)
return e?e[0]<="z"?"ltr":"rtl":""}function k(t,e){const s=t.split(""),i=[]
return v(s,i,e),function(t,e,s){if(0!==s.hiLevel&&s.swap.substr(0,1)!==s.swap.substr(1,2))for(let s=0;s<t.length;s++)1===e[s]&&(t[s]=R(t[s]))}(s,i,e),F(2,s,i,e),F(1,s,i,e),W=i,s.join("")}function v(t,e,s){const i=t.length,r=s.dir?g:m
let n=0,a=-1
const o=[],h=[]
s.hiLevel=s.dir,s.lastArabic=!1,s.hasUbatAl=!1,s.hasUbatB=!1,s.hasUbatS=!1
for(let e=0;e<i;e++)o[e]=T(t[e])
for(let c=0;c<i;c++){const i=n,l=z(t,o,h,c,s)
h[c]=l,n=r[i][l]
const u=240&n
n&=15
const f=r[n][J]
if(e[c]=f,u>0)if(16===u){for(let t=a;t<c;t++)e[t]=1
a=-1}else a=-1
if(r[n][$])-1===a&&(a=c)
else if(a>-1){for(let t=a;t<c;t++)e[t]=f
a=-1}5===o[c]&&(e[c]=0),s.hiLevel|=f}s.hasUbatS&&function(t,e,s,i){for(let r=0;r<s;r++)if(6===t[r]){e[r]=i.dir
for(let s=r-1;s>=0&&8===t[s];s--)e[s]=i.dir}}(o,e,i,s)}function T(t){const e=t.charCodeAt(0),s=M[e>>8]
return s<100?s:S[s-100][255&e]}function L(t,e){const s=t.split("")
if(e){const t=[]
v(s,t,e),W=t}return s.reverse(),X.reverse(),s.join("")}function O(t,e,s){for(let i=0;i<e;i++)if(t[i]===s)return i
return-1}function I(t){for(let e=0;e<p.length;e++)if(t>=p[e]&&t<=d[e])return!0
return!1}function A(t,e,s,i){for(;e*s<i&&H(t[e]);)e+=s
return!!(e*s<i&&I(t[e]))}function j(t,e,s,i){for(;e*s<i&&H(t[e]);)e+=s
let n=" "
if(!(e*s<i))return!1
n=t[e]
for(let t=0;t<r.length;t++)if(r[t]===n)return!0
return!1}function F(t,e,s,i){if(i.hiLevel<t)return
if(1===t&&i.dir===K&&!i.hasUbatB)return e.reverse(),void X.reverse()
const r=e.length
let n,a,o,h,c,l=0
for(;l<r;){if(s[l]>=t){for(n=l+1;n<r&&s[n]>=t;)n++
for(a=l,o=n-1;a<o;a++,o--)h=e[a],e[a]=e[o],e[o]=h,c=X[a],X[a]=X[o],X[o]=c
l=n}l++}}function z(t,e,s,i,r){const n=e[i]
return{UBAT_L:()=>(r.lastArabic=!1,0),UBAT_R:()=>(r.lastArabic=!1,1),UBAT_ON:()=>4,UBAT_AN:()=>3,UBAT_EN:()=>r.lastArabic?3:2,UBAT_AL:()=>(r.lastArabic=!0,r.hasUbatAl=!0,1),UBAT_WS:()=>4,UBAT_CS:()=>{let t,n
return i<1||i+1>=e.length||2!==(t=s[i-1])&&3!==t||2!==(n=e[i+1])&&3!==n?4:(r.lastArabic&&(n=3),n===t?n:4)},UBAT_ES:()=>2===(i>0?s[i-1]:5)&&i+1<e.length&&2===e[i+1]?2:4,UBAT_ET:()=>{if(i>0&&2===s[i-1])return 2
if(r.lastArabic)return 4
let t=i+1
const n=e.length
for(;t<n&&11===e[t];)t++
return t<n&&2===e[t]?2:4},UBAT_NSM:()=>{if("VLTR"===r.inFormat){const s=e.length
let r=i+1
for(;r<s&&e[r]===y;)r++
if(r<s){const s=t[i].charCodeAt[0],n=s>=1425&&s<=2303||64286===s,a=e[r]
if(n&&(1===a||7===a))return 1}}return i<1||5===e[i-1]?4:s[i-1]},UBAT_B:()=>(r.lastArabic=!0,r.hasUbatB=!0,r.dir),UBAT_S:()=>(r.hasUbatS=!0,4),UBAT_LRE:()=>(r.lastArabic=!1,4),UBAT_RLE:()=>(r.lastArabic=!1,4),UBAT_LRO:()=>(r.lastArabic=!1,4),UBAT_RLO:()=>(r.lastArabic=!1,4),UBAT_PDF:()=>(r.lastArabic=!1,4),UBAT_BN:()=>4}[P[n]]()}function R(t){let e,s=0,r=i.length-1
for(;s<=r;)if(e=Math.floor((s+r)/2),t<i[e][0])r=e-1
else{if(!(t>i[e][0]))return i[e][1]
s=e+1}return t}function E(t){for(let e=0;e<f.length;e++)if(f[e]===t)return!0
return!1}function G(t){for(let e=0;e<o.length;e++)if(t===o[e])return l[e]
return t}function B(t,e){for(let s=0;s<o.length;s++)if(t===o[s])return e[s]
return t}function H(t){return t>="ً"&&t<="ٕ"}function D(t){return"L"===t?"LTR":"R"===t?"RTL":"C"===t?"CLR":"D"===t?"CRL":""}function N(t,e,s,i){for(;e*s<i&&H(t[e]);)e+=s
return e*s<i&&(t[e]=" ",!0)}function U(t,e){for(let s=0;s<r.length;s++)if(t===r[s])return e[s]
return t}function V(t,e,s,i){for(let r=0;r<t.length;r++)(t[r]>e||!s&&t[r]===e)&&(t[r]+=i)}let X=[],Y=[],W=[]
const q={dir:0,defInFormat:"LLTR",defoutFormat:"VLTR",defSwap:"YN",inFormat:"LLTR",outFormat:"VLTR",swap:"YN",hiLevel:0,lastArabic:!1,hasUbatAl:!1,hasBlockSep:!1,hasSegSep:!1,defOutFormat:""},J=5,$=6,Z=0,K=1,Q=/^[(I|V)][(L|R|C|D)][(Y|N)][(S|N)][N]$/,tt=/[\u0591-\u06ff\ufb1d-\ufefc]/},2078:function(t,e,s){"use strict"
s.d(e,"a",(function(){return r}))
var i=s(876)
class r{constructor(){}rasterizeText(t,e){this._textRasterizationCanvas||(this._textRasterizationCanvas=document.createElement("canvas"))
const s=this._textRasterizationCanvas,i=s.getContext("2d")
this._setFontProperties(i,e),this.parameters=e,this.textLines=t.split(/\r?\n/),this.lineHeight=this._computeLineHeight()
const r=this._computeTextWidth(i,e),{decoration:n,weight:a}=e.font
this.lineThroughWidthOffset=n&&"line-through"===n?.1*this.lineHeight:0
const o=this.lineHeight*this.textLines.length
s.width=r+2*this.lineThroughWidthOffset,s.height=o,this.renderedLineHeight=Math.round(this.lineHeight*e.pixelRatio),this.renderedHaloSize=e.halo.size*e.pixelRatio,this.renderedWidth=r*e.pixelRatio,this.renderedHeight=o*e.pixelRatio,this.lineThroughWidthOffset*=e.pixelRatio,this.fillStyle=function(t){return`rgba(${t.slice(0,3).toString()},${t[3]})`}(e.color),this.haloStyle=function(t){return`rgb(${t.slice(0,3).toString()})`}(e.halo.color)
const h=this.renderedLineHeight,c=this.renderedHaloSize
this._setFontProperties(i,e)
const l=function(t,e){return"center"===t?.5*e:"right"===t?e:0}(i.textAlign,this.renderedWidth)+c,u=c,f=c>0
let _=this.lineThroughWidthOffset,p=0
f&&this._renderHalo(i,l,u,_,p,e),p+=u,_+=l
for(const t of this.textLines)i.globalCompositeOperation="destination-out",i.fillStyle="rgb(0, 0, 0)",i.fillText(t,_,p),i.globalCompositeOperation="source-over",i.fillStyle=this.fillStyle,i.fillText(t,_,p),n&&"none"!==n&&this._renderDecoration(i,_,p,n,a),p+=h
const d=this.renderedWidth+2*this.lineThroughWidthOffset,m=this.renderedHeight,g=i.getImageData(0,0,d,m),b=new Uint8Array(g.data)
if(e.premultiplyColors){let t
for(let e=0;e<b.length;e+=4)t=b[e+3]/255,b[e]=b[e]*t,b[e+1]=b[e+1]*t,b[e+2]=b[e+2]*t}return{size:[d,m],image:new Uint32Array(b.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}}_renderHalo(t,e,s,i,r,n){const a=this.renderedWidth,o=this.renderedHeight
this._haloRasterizationCanvas||(this._haloRasterizationCanvas=document.createElement("canvas")),this._haloRasterizationCanvas.width=a,this._haloRasterizationCanvas.height=o
const h=this._haloRasterizationCanvas,c=h.getContext("2d")
c.clearRect(0,0,a,o),this._setFontProperties(c,n)
const{decoration:l,weight:u}=n.font
c.fillStyle=this.haloStyle,c.strokeStyle=this.haloStyle
const f=this.renderedHaloSize<3
c.lineJoin=f?"miter":"round",f?this._renderHaloEmulated(c,e,s,l,u):this._renderHaloNative(c,e,s,l,u),t.globalAlpha=this.parameters.halo.color[3],t.drawImage(h,0,0,a,o,i,r,a,o),t.globalAlpha=1}_renderHaloEmulated(t,e,s,i,r){const a=this.renderedLineHeight,o=this.renderedHaloSize
for(const h of this.textLines){for(const[i,r]of n)t.fillText(h,e+o*i,s+o*r)
i&&"none"!==i&&this._renderDecoration(t,e,s,i,r),s+=a}}_renderHaloNative(t,e,s,i,r){const n=this.renderedLineHeight,a=this.renderedHaloSize
for(const o of this.textLines){const h=2*a,c=5,l=.1
for(let n=0;n<c;n++){const a=1-(c-1)*l+n*l
t.lineWidth=a*h,t.strokeText(o,e,s),i&&"none"!==i&&this._renderDecoration(t,e,s,i,r)}s+=n}}_setFontProperties(t,e){const s=e.font,r=`${s.style} ${s.weight} ${Object(i.h)(e.size*e.pixelRatio)}px ${s.family}, sans-serif`
let n
switch(t.font=r,t.textBaseline="top",e.horizontalAlignment){case"left":default:n="left"
break
case"right":n="right"
break
case"center":n="center"}t.textAlign=n}computeTextSize(t,e){this._textRasterizationCanvas||(this._textRasterizationCanvas=document.createElement("canvas"))
const s=this._textRasterizationCanvas,i=s.getContext("2d")
this._setFontProperties(i,e),this.parameters=e,this.textLines=t.split(/\r?\n/),this.lineHeight=this._computeLineHeight()
const r=this._computeTextWidth(i,e),n=this.lineHeight*this.textLines.length
return s.width=r,s.height=n,[r*e.pixelRatio,n*e.pixelRatio]}_computeTextWidth(t,e){let s=0
for(const e of this.textLines)s=Math.max(s,t.measureText(e).width)
const i=e.font
return("italic"===i.style||"oblique"===i.style||"string"==typeof i.weight&&("bold"===i.weight||"bolder"===i.weight)||"number"==typeof i.weight&&i.weight>600)&&(s+=.3*t.measureText("w").width),s+=2*this.parameters.halo.size,Math.round(s)}_computeLineHeight(){let t=1.275*this.parameters.size
const e=this.parameters.font.decoration
return e&&"underline"===e&&(t*=1.3),Math.round(t+2*this.parameters.halo.size)}_renderDecoration(t,e,s,i,r){const n=.9*this.lineHeight,a="bold"===r?.06:"bolder"===r?.09:.04
switch(t.textAlign){case"center":e-=this.renderedWidth/2
break
case"right":e-=this.renderedWidth}const o=t.textBaseline
if("underline"===i)switch(o){case"top":s+=n
break
case"middle":s+=n/2}else if("line-through"===i)switch(o){case"top":s+=n/1.5
break
case"middle":s+=n/3}t.save(),t.beginPath(),t.strokeStyle=t.fillStyle,t.lineWidth=Math.ceil(n*a),t.moveTo(e-this.lineThroughWidthOffset,s),t.lineTo(e+this.renderedWidth+2*this.lineThroughWidthOffset,s),t.stroke(),t.restore()}}const n=[]
{const t=16
for(let e=0;e<360;e+=360/t)n.push([Math.cos(Math.PI*e/180),Math.sin(Math.PI*e/180)])}}}])
