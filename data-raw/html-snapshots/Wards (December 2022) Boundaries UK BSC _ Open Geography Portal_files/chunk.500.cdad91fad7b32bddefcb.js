(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[500],{740:function(t,e,o){"use strict"
o.r(e),o.d(e,"arcgis_hub_map_popover",(function(){return s}))
var n=o(293)
const r=(t,e)=>{const{height:o,width:n}=e
return`${t.y<o/2?"top":"bottom"}-${t.x<n/2?"left":"right"}`},s=class{constructor(t){Object(n.j)(this,t)}handlePopoverOpen(t){t.stopPropagation()
const{detail:e}=t,o=e.view,n=e.geometry,{left:s,top:i,height:a,width:c}=o.container.getBoundingClientRect()
if("polygon"===n.type||"polyline"===n.type){const t=n.extent,e=o.toScreen(t.center)
if(e.x<0||e.y<0||e.x>c||e.y>a)return void(this.content=null)
this.quadrant=r(e,o)
const l=((t,e)=>{const{xmin:o,ymin:n,xmax:r,ymax:s,spatialReference:i}=t,a=e.includes("top")?n:s
return{x:e.includes("left")?r:o,y:a,spatialReference:i}})(t,this.quadrant),p=((t,e)=>{const{spatialReference:o}=e
let n=1/0,r=0
const s=("polygon"===e.type?e.rings.flat(1/0):e.paths.flat(1/0)).reduce((t,e,o)=>{const n=Math.floor(o/2)
return t[n]||(t[n]=[]),t[n].push(e),t},[])
s.forEach((e,s)=>{const[i,a]=e,c=((t,e)=>{const{x:o,y:n}=t,{x:r,y:s}=e,i=r-o,a=s-n
return Math.sqrt(i**2+a**2)})({x:i,y:a,spatialReference:o},t)
c<n&&(n=c,r=s)})
const[i,a]=s[r]
return{x:i,y:a,spatialReference:o}})(l,n),h=o.toScreen(p)
this.x=h.x+s,this.y=h.y+i}else if("point"===n.type){const t=o.toScreen(n)
this.quadrant=r(t,o),this.x=t.x+s,this.y=t.y+i}this.content=e.render(n.type)}handlePopoverClear(t){t.stopPropagation(),this.content=null}get styles(){const{quadrant:t,x:e,y:o}=this
return{"--top-offset":o+"px","--left-offset":e+"px",transform:`${(null==t?void 0:t.includes("right"))?"translateX(-110%)":"translateX(10%)"} ${null==t||t.includes("top"),"translateY(-35%)"}`}}render(){const{styles:t,content:e}=this
return Object(n.h)(n.b,{style:t},e)}get el(){return Object(n.g)(this)}}
s.style=":host{position:absolute;z-index:1;top:var(--top-offset);left:var(--left-offset);transform:var(--transform)}calcite-action{border-width:0px;border-top-width:1px;border-style:solid;border-color:var(--calcite-ui-border-1)}calcite-action:first-of-type{border-width:0px}calcite-action-pad>calcite-action{border-width:0px}"}}])
