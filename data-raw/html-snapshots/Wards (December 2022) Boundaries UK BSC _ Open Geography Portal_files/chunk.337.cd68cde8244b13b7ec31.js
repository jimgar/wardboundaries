(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[337],{662:function(t,n,e){"use strict"
e.r(n),e.d(n,"canProject",(function(){return d})),e.d(n,"geographicToWebMercator",(function(){return M})),e.d(n,"lngLatToXY",(function(){return g})),e.d(n,"project",(function(){return x})),e.d(n,"webMercatorToGeographic",(function(){return b})),e.d(n,"x2lon",(function(){return h})),e.d(n,"xyToLngLat",(function(){return j})),e.d(n,"y2lat",(function(){return f}))
var i=e(178),r=e(20),s=e(659),a=e(902),u=e(872)
function o(t){return 57.29577951308232*t}function c(t){return.017453292519943*t}function h(t){return t/a.a.radius}function f(t){return Math.PI/2-2*Math.atan(Math.exp(-t/a.a.radius))}function l(t){return null!=t.wkid||null!=t.wkt}const p=[0,0]
function m(t,n,e,i,r){const s=t,a=r
if(a.spatialReference=e,"x"in s&&"x"in a)[a.x,a.y]=n(s.x,s.y,p,i)
else if("xmin"in s&&"xmin"in a)[a.xmin,a.ymin]=n(s.xmin,s.ymin,p,i),[a.xmax,a.ymax]=n(s.xmax,s.ymax,p,i)
else if("paths"in s&&"paths"in a||"rings"in s&&"rings"in a){const t="paths"in s?s.paths:s.rings,e=[]
let r
for(let s=0;s<t.length;s++){const a=t[s]
r=[],e.push(r)
for(let t=0;t<a.length;t++)r.push(n(a[t][0],a[t][1],[0,0],i)),a[t].length>2&&r[t].push(a[t][2]),a[t].length>3&&r[t].push(a[t][3])}"paths"in a?a.paths=e:a.rings=e}else if("points"in s&&"points"in a){const t=s.points,e=[]
for(let r=0;r<t.length;r++)e[r]=n(t[r][0],t[r][1],[0,0],i),t[r].length>2&&e[r].push(t[r][2]),t[r].length>3&&e[r].push(t[r][3])
a.points=e}return r}function d(t,n){const e=t&&(l(t)?t:t.spatialReference),i=n&&(l(n)?n:n.spatialReference)
return!(t&&"type"in t&&"mesh"===t.type||n&&"type"in n&&"mesh"===n.type||!e||!i)&&(!!Object(u.d)(i,e)||Object(u.p)(i)&&Object(u.m)(e)||Object(u.p)(e)&&Object(u.m)(i))}function x(t,n){if(Object(r.j)(t))return null
const e=t.spatialReference,a=n&&(l(n)?n:n.spatialReference)
return d(e,a)?Object(u.d)(e,a)?Object(i.a)(t):Object(u.p)(a)?m(t,g,s.default.WebMercator,!1,Object(i.a)(t)):Object(u.m)(a)?m(t,j,s.default.WGS84,!1,Object(i.a)(t)):null:null}function g(t,n,e=[0,0]){n>89.99999?n=89.99999:n<-89.99999&&(n=-89.99999)
const i=c(n)
return e[0]=c(t)*a.a.radius,e[1]=a.a.halfSemiMajorAxis*Math.log((1+Math.sin(i))/(1-Math.sin(i))),e}function j(t,n,e=[0,0],i=!1){const r=o(t/a.a.radius)
return e[0]=i?r:r-360*Math.floor((r+180)/360),e[1]=o(Math.PI/2-2*Math.atan(Math.exp(-n/a.a.radius))),e}function M(t,n=!1,e=Object(i.a)(t)){return m(t,g,s.default.WebMercator,n,e)}function b(t,n=!1,e=Object(i.a)(t)){return m(t,j,s.default.WGS84,n,e)}},902:function(t,n,e){"use strict"
e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return s})),e.d(n,"c",(function(){return a}))
class i{constructor(t,n,e,i){this.semiMajorAxis=t,this.flattening=n,this.outerAtmosphereRimWidth=e
const r=1-this.flattening
this.semiMinorAxis=this.semiMajorAxis*r,this.halfSemiMajorAxis=this.semiMajorAxis/2,this.halfCircumference=Math.PI*this.semiMajorAxis,this.metersPerDegree=this.halfCircumference/180,this.inverseFlattening=1/(1-this.flattening)-1,this.eccentricitySquared=i||2*this.flattening-this.flattening*this.flattening,this.meanRadiusSemiAxes=(2*this.semiMajorAxis+this.semiMinorAxis)/3}get radius(){return this.semiMajorAxis}}const r=new i(6378137,1/298.257223563,3e5,.006694379990137799),s=new i(3396190,1/169.8944472236118,23e4),a=new i(1737400,0,0)}}])
