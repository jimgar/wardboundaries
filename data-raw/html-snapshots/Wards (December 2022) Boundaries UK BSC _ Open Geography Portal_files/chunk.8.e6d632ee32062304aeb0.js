(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[8],{1041:function(t,e,r){"use strict"
r.d(e,"a",(function(){return f}))
var i=r(177),n=r(20),s=r(985),o=r(1257),a=r(1051),c=r(877),h=r(1548),l=r(973),_=r(1114)
const u=i.a.getLogger("esri.views.webgl.FrameBufferObject")
class f{constructor(t,e,r=null,i=null){if(this._context=t,this._glName=null,this._depthAttachment=null,this._stencilAttachment=null,this._colorAttachments=new Map,this._initialized=!1,this._desc={...e},t.instanceCounter.increment(c.t.Framebuffer,this),Object(n.k)(r)){Array.isArray(r)||(r=[r])
for(let t=0;t<r.length;++t){const e=r[t],i=c.g.COLOR_ATTACHMENT0+t
let n
g(e)?(d(e)?(n=e.descriptor,this._colorAttachments.set(i,e)):(n=e,this._colorAttachments.set(i,new l.a(this._context,n))),E(n,this._desc)):(m(e)?(n=e.descriptor,this._colorAttachments.set(i,e)):(n=e,this._colorAttachments.set(i,new h.a(this._context,n))),p(n,this._desc)),this._validateColorAttachmentPoint(i)}}if(Object(n.k)(i)){let t,e
if(g(i))this._context.capabilities.depthTexture||console.error("Setting the depth/stencil texture as an attachment requires WEBGL_depth_texture or WebGL2"),d(i)?(e=i.descriptor,this._depthStencilTexture=i):(e=i,this._depthStencilTexture=new l.a(this._context,e)),E(e,this._desc)
else{var s
m(i)?(e=i.descriptor,t=i):(e=i,t=new h.a(this._context,e))
const r=null!=(s=this._desc.depthStencilTarget)?s:c.m.DEPTH_STENCIL_RENDER_BUFFER
r===c.m.STENCIL_RENDER_BUFFER?this._stencilAttachment=t:r===c.m.DEPTH_RENDER_BUFFER||r===c.m.DEPTH_STENCIL_RENDER_BUFFER?this._depthAttachment=t:console.error('If a Renderbuffer is provided, "depthStencilTarget" must be one of STENCIL_RENDER_BUFFER, DEPTH_RENDER_BUFFER or DEPTH_STENCIL_RENDER_BUFFER'),p(e,this._desc)}}}dispose(){if(!this._desc)return
const t=this._context.getBoundFramebufferObject()
this._disposeColorAttachments(),this._disposeDepthStencilAttachments(),this._glName&&(this._context.gl.deleteFramebuffer(this._glName),this._glName=null),this._context.bindFramebuffer(t),this._context.instanceCounter.decrement(c.t.Framebuffer,this),this._desc=null}get glName(){return this._glName}get descriptor(){return this._desc}get colorTexture(){const t=this._colorAttachments.get(c.g.COLOR_ATTACHMENT0)
return t&&d(t)?t:null}get colorAttachment(){return this._colorAttachments.get(c.g.COLOR_ATTACHMENT0)}get depthStencilAttachment(){return this._depthStencilTexture||this._depthAttachment||this._stencilAttachment}get depthStencilTexture(){return this._depthStencilTexture}get width(){return this._desc.width}get height(){return this._desc.height}get gpuMemoryUsage(){return[...this._colorAttachments].reduce((t,[e,r])=>t+Object(_.d)(r),0)+Object(_.d)(this.depthStencilAttachment)}getColorTexture(t){const e=this._colorAttachments.get(t)
return e&&d(e)?e:null}attachColorTexture(t,e=c.g.COLOR_ATTACHMENT0){t&&(this._validateColorAttachmentPoint(e),E(t.descriptor,this._desc),this._disposeColorAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(t.glName,e)),this._colorAttachments.set(e,t))}detachColorTexture(t=c.g.COLOR_ATTACHMENT0){const e=this._colorAttachments.get(t)
if(d(e)){const r=e
return this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,t)),this._colorAttachments.delete(t),r}}setColorTextureTarget(t,e=c.g.COLOR_ATTACHMENT0){const r=this._colorAttachments.get(e)
d(r)&&this._framebufferTexture2D(r.glName,e,t)}attachDepthStencilTexture(t){if(Object(n.j)(t))return
const e=t.descriptor
e.pixelFormat!==c.p.DEPTH_STENCIL&&console.error("Depth/Stencil texture must have a pixel type of DEPTH_STENCIL!"),e.dataType!==c.q.UNSIGNED_INT_24_8&&console.error("Depth/Stencil texture must have data type of UNSIGNED_INT_24_8!"),this._context.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture!"),E(e,this._desc),this._desc.depthStencilTarget&&this._desc.depthStencilTarget!==c.m.DEPTH_STENCIL_TEXTURE&&(this._desc.depthStencilTarget=c.m.DEPTH_STENCIL_TEXTURE),this._disposeDepthStencilAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(t.glName,c.l)),this._depthStencilTexture=t}detachDepthStencilTexture(){const t=this._depthStencilTexture
return t&&this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,c.l)),this._depthStencilTexture=null,t}attachDepthStencilBuffer(t){if(Object(n.j)(t))return
const e=t.descriptor
if(e.internalFormat!==c.s.DEPTH_STENCIL&&e.internalFormat!==c.s.DEPTH_COMPONENT16&&console.error("Depth/Stencil buffer must have correct internalFormat"),p(e,this._desc),this._disposeDepthStencilAttachments(),this._desc.depthStencilTarget=e.internalFormat===c.s.DEPTH_STENCIL?c.m.DEPTH_STENCIL_RENDER_BUFFER:c.m.DEPTH_RENDER_BUFFER,this._initialized){this._context.bindFramebuffer(this)
const e=this._context.gl,r=this._desc.depthStencilTarget===c.m.DEPTH_RENDER_BUFFER?e.DEPTH_ATTACHMENT:e.DEPTH_STENCIL_ATTACHMENT
e.framebufferRenderbuffer(c.o.FRAMEBUFFER,r,e.RENDERBUFFER,t.glName)}this._depthAttachment=t}detachDepthStencilBuffer(){const t=this._context.gl,e=this._depthAttachment
if(e&&this._initialized){this._context.bindFramebuffer(this)
const e=this._desc.depthStencilTarget===c.m.DEPTH_RENDER_BUFFER?t.DEPTH_ATTACHMENT:t.DEPTH_STENCIL_ATTACHMENT
t.framebufferRenderbuffer(c.o.FRAMEBUFFER,e,t.RENDERBUFFER,null)}return this._depthAttachment=null,e}detachAll(){this._colorAttachments.forEach((t,e)=>this._detachColorAttachment(e)),this.detachDepthStencilBuffer(),this.detachDepthStencilTexture()}copyToTexture(t,e,r,i,n,s,o){(t<0||e<0||n<0||s<0)&&console.error("Offsets cannot be negative!"),(r<=0||i<=0)&&console.error("Copy width and height must be greater than zero!")
const a=this._desc,h=o.descriptor
o.descriptor.target!==c.A.TEXTURE_2D&&console.error("Texture target must be TEXTURE_2D!"),(t+r>a.width||e+i>a.height||n+r>h.width||s+i>h.height)&&console.error("Bad dimensions, the current input values will attempt to read or copy out of bounds!")
const _=this._context,u=_.bindTexture(o,l.a.TEXTURE_UNIT_FOR_UPDATES)
_.setActiveTexture(l.a.TEXTURE_UNIT_FOR_UPDATES),_.bindFramebuffer(this),_.gl.copyTexSubImage2D(c.A.TEXTURE_2D,0,n,s,t,e,r,i),_.bindTexture(u,l.a.TEXTURE_UNIT_FOR_UPDATES)}readPixels(t,e,r,i,n,s,o){(r<=0||i<=0)&&console.error("Copy width and height must be greater than zero!"),o||console.error("Target memory is not initialized!"),this._context.bindFramebuffer(this),this._context.gl.readPixels(t,e,r,i,n,s,o)}async readPixelsAsync(t,e,r,i,n,h,l){if(this._context.type!==a.a.WEBGL2)return Object(o.b)()&&console.warn("Attempting to read pixels using pixel buffer object without WebGL2"),void this.readPixels(t,e,r,i,n,h,l)
const _=this._context.gl,u=s.a.createPixelPack(this._context,c.D.STREAM_READ,l.byteLength)
this._context.bindBuffer(u),this._context.bindFramebuffer(this),_.readPixels(t,e,r,i,n,h,0),this._context.unbindBuffer(c.d.PIXEL_PACK_BUFFER),await u.getSubDataAsync(l),u.dispose()}resize(t,e){const r=this._desc
if(r.width!==t||r.height!==e){if(!this._initialized)return r.width=t,r.height=e,this._colorAttachments.forEach(r=>{r&&r.resize(t,e)}),void(this._depthStencilTexture&&this._depthStencilTexture.resize(t,e))
r.width=t,r.height=e,this._colorAttachments.forEach(r=>{r&&r.resize(t,e)}),null!=this._depthStencilTexture?this._depthStencilTexture.resize(t,e):(this._depthAttachment||this._stencilAttachment)&&(this._depthAttachment&&this._depthAttachment.resize(t,e),this._stencilAttachment&&this._stencilAttachment.resize(t,e)),this._context.getBoundFramebufferObject()===this&&this._context.bindFramebuffer(null),this._initialized=!1}}initializeAndBind(t=c.o.FRAMEBUFFER){var e,r,i,n
const s=this._context.gl
if(this._initialized)return void s.bindFramebuffer(t,this.glName)
this._glName&&s.deleteFramebuffer(this._glName)
const a=this._context,_=s.createFramebuffer(),u=this._desc,f=null!=(e=u.colorTarget)?e:c.y.RENDER_BUFFER,m=null!=(r=u.width)?r:1,g=null!=(i=u.height)?i:1
if(s.bindFramebuffer(t,_),0===this._colorAttachments.size)if(f===c.y.TEXTURE||f===c.y.CUBEMAP)this._colorAttachments.set(c.g.COLOR_ATTACHMENT0,function(t,e,r){return new l.a(t,{target:r,pixelFormat:c.p.RGBA,dataType:c.q.UNSIGNED_BYTE,samplingMode:c.z.NEAREST,wrapMode:c.B.CLAMP_TO_EDGE,width:e.width,height:e.height})}(a,u,this.descriptor.colorTarget===c.y.CUBEMAP?c.A.TEXTURE_CUBE_MAP:c.A.TEXTURE_2D))
else{const t=new h.a(a,{internalFormat:c.v.RGBA4,width:m,height:g})
this._colorAttachments.set(c.g.COLOR_ATTACHMENT0,t)}this._colorAttachments.forEach((e,r)=>{e&&(d(e)?this._framebufferTexture2D(e.glName,r,T(e),t):s.framebufferRenderbuffer(t,r,s.RENDERBUFFER,e.glName))})
const E=null!=(n=u.depthStencilTarget)?n:c.m.NONE
switch(E){case c.m.DEPTH_RENDER_BUFFER:case c.m.DEPTH_STENCIL_RENDER_BUFFER:{this._depthAttachment||(this._depthAttachment=new h.a(a,{internalFormat:u.depthStencilTarget===c.m.DEPTH_RENDER_BUFFER?c.s.DEPTH_COMPONENT16:c.s.DEPTH_STENCIL,width:m,height:g}))
const e=E===c.m.DEPTH_RENDER_BUFFER?s.DEPTH_ATTACHMENT:s.DEPTH_STENCIL_ATTACHMENT
s.framebufferRenderbuffer(t,e,s.RENDERBUFFER,this._depthAttachment.glName)
break}case c.m.STENCIL_RENDER_BUFFER:this._stencilAttachment||(this._stencilAttachment=new h.a(a,{internalFormat:c.s.STENCIL_INDEX8,width:m,height:g})),s.framebufferRenderbuffer(t,s.STENCIL_ATTACHMENT,s.RENDERBUFFER,this._stencilAttachment.glName)
break
case c.m.DEPTH_STENCIL_TEXTURE:if(!this._depthStencilTexture){a.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture as an attachment!")
const t={target:c.A.TEXTURE_2D,pixelFormat:c.p.DEPTH_STENCIL,dataType:c.q.UNSIGNED_INT_24_8,samplingMode:c.z.NEAREST,wrapMode:c.B.CLAMP_TO_EDGE,width:m,height:g}
this._depthStencilTexture=new l.a(a,t)}this._framebufferTexture2D(this._depthStencilTexture.glName,s.DEPTH_STENCIL_ATTACHMENT,T(this._depthStencilTexture),t)}Object(o.c)()&&s.checkFramebufferStatus(t)!==s.FRAMEBUFFER_COMPLETE&&console.error("Framebuffer is incomplete!"),this._glName=_,this._initialized=!0}_framebufferTexture2D(t,e=c.g.COLOR_ATTACHMENT0,r=c.A.TEXTURE_2D,i=c.o.FRAMEBUFFER,n=0){this._context.gl.framebufferTexture2D(i,e,r,t,n)}_detachColorAttachment(t){Object(o.b)()&&console.warn("Detaching an FBO attachment can be a slow due to invalidating framebuffer completeness!")
const e=this._context.gl,r=this._colorAttachments.get(t)
return d(r)?this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,t)):this._initialized&&(this._context.bindFramebuffer(this),e.framebufferRenderbuffer(c.o.FRAMEBUFFER,t,e.RENDERBUFFER,null)),this._colorAttachments.delete(t),r}_disposeColorAttachments(){this._colorAttachments.forEach((t,e)=>{this._detachColorAttachment(e),t.dispose()}),this._colorAttachments.clear()}_disposeDepthStencilAttachments(){const t=this._context.gl
if(this._depthAttachment){if(this._initialized){this._context.bindFramebuffer(this)
const e=this._desc.depthStencilTarget===c.m.DEPTH_RENDER_BUFFER?t.DEPTH_ATTACHMENT:t.DEPTH_STENCIL_ATTACHMENT
t.framebufferRenderbuffer(c.o.FRAMEBUFFER,e,t.RENDERBUFFER,null)}this._depthAttachment.dispose(),this._depthAttachment=null}this._stencilAttachment&&(this._initialized&&(this._context.bindFramebuffer(this),t.framebufferRenderbuffer(c.o.FRAMEBUFFER,t.STENCIL_ATTACHMENT,t.RENDERBUFFER,null)),this._stencilAttachment.dispose(),this._stencilAttachment=null),this._depthStencilTexture&&(this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,t.DEPTH_STENCIL_ATTACHMENT)),this._depthStencilTexture.dispose(),this._depthStencilTexture=null)}_validateColorAttachmentPoint(t){if(-1===f._MAX_COLOR_ATTACHMENTS){const t=this._context.capabilities.drawBuffers
if(t){const e=this._context.gl
f._MAX_COLOR_ATTACHMENTS=e.getParameter(t.MAX_COLOR_ATTACHMENTS)}else f._MAX_COLOR_ATTACHMENTS=1}const e=t-c.g.COLOR_ATTACHMENT0
e+1>f._MAX_COLOR_ATTACHMENTS&&u.error("esri.FrameBufferObject",`illegal attachment point for color attachment: ${e+1}. Implementation supports up to ${f._MAX_COLOR_ATTACHMENTS} color attachments`)}}function d(t){return"type"in t&&"texture"===t.type}function m(t){return"type"in t&&"renderbuffer"===t.type}function g(t){return d(t)||"pixelFormat"in t}function E(t,e){t.target!==c.A.TEXTURE_2D&&t.target!==c.A.TEXTURE_CUBE_MAP&&console.error("Texture type must be TEXTURE_2D or TEXTURE_CUBE_MAP!"),void 0!==e.width&&e.width>=0&&void 0!==e.height&&e.height>=0?e.width===t.width&&e.height===t.height||console.error("Color attachment texture must match the framebuffer's!"):(e.width=t.width,e.height=t.height)}function p(t,e){void 0!==e.width&&e.width>=0&&void 0!==e.height&&e.height>=0?e.width===t.width&&e.height===t.height||console.error("Renderbuffer dimensions must match the framebuffer's!"):(e.width=t.width,e.height=t.height)}function T(t){return t.descriptor.target===c.A.TEXTURE_CUBE_MAP?c.A.TEXTURE_CUBE_MAP_POSITIVE_X:c.A.TEXTURE_2D}f._MAX_COLOR_ATTACHMENTS=-1},1114:function(t,e,r){"use strict"
r.d(e,"a",(function(){return a})),r.d(e,"b",(function(){return h})),r.d(e,"c",(function(){return s})),r.d(e,"d",(function(){return l})),r.d(e,"e",(function(){return c})),r.d(e,"f",(function(){return o})),r(77)
var i=r(20),n=r(877)
function s(t){const e=t.gl
switch(e.getError()){case e.NO_ERROR:return null
case e.INVALID_ENUM:return"An unacceptable value has been specified for an enumerated argument"
case e.INVALID_VALUE:return"A numeric argument is out of range"
case e.INVALID_OPERATION:return"The specified command is not allowed for the current state"
case e.INVALID_FRAMEBUFFER_OPERATION:return"The currently bound framebuffer is not framebuffer complete"
case e.OUT_OF_MEMORY:return"Not enough memory is left to execute the command"
case e.CONTEXT_LOST_WEBGL:return"WebGL context is lost"}return"Unknown error"}function o(t,e){return t.vertexBuffers[e].size/function(t){return t[0].stride}(t.layout[e])}function a(t,e,r,i,n=0){const s=t.gl,o=t.capabilities.instancing
t.bindBuffer(r)
for(const t of i){const r=e.get(t.name)
void 0===r&&console.error(`There is no location for vertex attribute '${t.name}' defined.`)
const i=n*t.stride
if(t.count<=4)s.vertexAttribPointer(r,t.count,t.type,t.normalized,t.stride,t.offset+i),s.enableVertexAttribArray(r),t.divisor>0&&o&&o.vertexAttribDivisor(r,t.divisor)
else if(9===t.count)for(let e=0;e<3;e++)s.vertexAttribPointer(r+e,3,t.type,t.normalized,t.stride,t.offset+12*e+i),s.enableVertexAttribArray(r+e),t.divisor>0&&o&&o.vertexAttribDivisor(r+e,t.divisor)
else if(16===t.count)for(let e=0;e<4;e++)s.vertexAttribPointer(r+e,4,t.type,t.normalized,t.stride,t.offset+16*e+i),s.enableVertexAttribArray(r+e),t.divisor>0&&o&&o.vertexAttribDivisor(r+e,t.divisor)
else console.error("Unsupported vertex attribute element count: "+t.count)}}function c(t,e,r,i){const s=t.gl,o=t.capabilities.instancing
t.bindBuffer(r)
for(const t of i){const r=e.get(t.name)
if(t.count<=4)s.disableVertexAttribArray(r),t.divisor&&t.divisor>0&&o&&o.vertexAttribDivisor(r,0)
else if(9===t.count)for(let e=0;e<3;e++)s.disableVertexAttribArray(r+e),t.divisor&&t.divisor>0&&o&&o.vertexAttribDivisor(r+e,0)
else if(16===t.count)for(let e=0;e<4;e++)s.disableVertexAttribArray(r+e),t.divisor&&t.divisor>0&&o&&o.vertexAttribDivisor(r+e,0)
else console.error("Unsupported vertex attribute element count: "+t.count)}t.unbindBuffer(n.d.ARRAY_BUFFER)}function h(t){switch(t){case n.p.ALPHA:case n.p.LUMINANCE:case n.p.RED:case n.p.RED_INTEGER:case n.v.R8:case n.v.R8I:case n.v.R8UI:case n.v.R8_SNORM:case n.s.STENCIL_INDEX8:return 1
case n.p.LUMINANCE_ALPHA:case n.p.RG:case n.p.RG_INTEGER:case n.v.RGBA4:case n.v.R16F:case n.v.R16I:case n.v.R16UI:case n.v.RG8:case n.v.RG8I:case n.v.RG8UI:case n.v.RG8_SNORM:case n.v.RGB565:case n.v.RGB5_A1:case n.s.DEPTH_COMPONENT16:return 2
case n.p.DEPTH_COMPONENT:case n.p.RGB:case n.p.RGB_INTEGER:case n.v.RGB8:case n.v.RGB8I:case n.v.RGB8UI:case n.v.RGB8_SNORM:case n.v.SRGB8:case n.s.DEPTH_COMPONENT24:return 3
case n.p.DEPTH_STENCIL:case n.p.RGBA:case n.p.RGBA_INTEGER:case n.v.RGBA8:case n.v.R32F:case n.v.R11F_G11F_B10F:case n.v.RG16F:case n.v.R32I:case n.v.R32UI:case n.v.RG16I:case n.v.RG16UI:case n.v.RGBA8I:case n.v.RGBA8UI:case n.v.RGBA8_SNORM:case n.v.SRGB8_ALPHA8:case n.v.RGB9_E5:case n.v.RGB10_A2UI:case n.v.RGB10_A2:case n.s.DEPTH_STENCIL:case n.s.DEPTH_COMPONENT32F:case n.s.DEPTH24_STENCIL8:return 4
case n.s.DEPTH32F_STENCIL8:return 5
case n.v.RGB16F:case n.v.RGB16I:case n.v.RGB16UI:return 6
case n.v.RG32F:case n.v.RG32I:case n.v.RG32UI:case n.v.RGBA16F:case n.v.RGBA16I:case n.v.RGBA16UI:return 8
case n.v.RGB32F:case n.v.RGB32I:case n.v.RGB32UI:return 12
case n.v.RGBA32F:case n.v.RGBA32I:case n.v.RGBA32UI:return 16
case n.i.COMPRESSED_RGB_S3TC_DXT1_EXT:case n.i.COMPRESSED_RGBA_S3TC_DXT1_EXT:return.5
case n.i.COMPRESSED_RGBA_S3TC_DXT3_EXT:case n.i.COMPRESSED_RGBA_S3TC_DXT5_EXT:return 1
case n.i.COMPRESSED_R11_EAC:case n.i.COMPRESSED_SIGNED_R11_EAC:case n.i.COMPRESSED_RGB8_ETC2:case n.i.COMPRESSED_SRGB8_ETC2:case n.i.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:case n.i.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:return.5
case n.i.COMPRESSED_RG11_EAC:case n.i.COMPRESSED_SIGNED_RG11_EAC:case n.i.COMPRESSED_RGBA8_ETC2_EAC:case n.i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:return 1}return 0}function l(t){if(Object(i.j)(t))return 0
if("descriptor"in t)return t.glName?l(t.descriptor):0
const e=t.internalFormat||"pixelFormat"in t&&t.pixelFormat
if(!e)return 0
const r="hasMipmap"in t&&t.hasMipmap?1.3:1,n=t.width*t.height
return h(e)*n*r}},1548:function(t,e,r){"use strict"
r.d(e,"a",(function(){return s}))
var i=r(1051),n=r(877)
class s{constructor(t,e){this._context=t,this._desc=e,this.type="renderbuffer",this._context.instanceCounter.increment(n.t.Renderbuffer,this)
const r=this._context.gl
this.glName=r.createRenderbuffer(),this._context.bindRenderbuffer(this)
const{width:s,height:o,internalFormat:a,multisampled:c}=e
if(c){if(this._context.type!==i.a.WEBGL2)throw new Error("Multisampled renderbuffers are not supported in WebGL1!")
r.renderbufferStorageMultisample(r.RENDERBUFFER,this.samples,a,s,o)}else r.renderbufferStorage(r.RENDERBUFFER,a,s,o)}get descriptor(){return this._desc}get samples(){const t=this._desc.samples,e=this._context.parameters.maxSamples
return t?Math.min(t,e):e}resize(t,e){const r=this._desc
if(r.width===t&&r.height===e)return
r.width=t,r.height=e
const i=this._context.gl
this._context.bindRenderbuffer(this),r.multisampled?i.renderbufferStorageMultisample(i.RENDERBUFFER,this.samples,r.internalFormat,r.width,r.height):i.renderbufferStorage(i.RENDERBUFFER,r.internalFormat,r.width,r.height)}dispose(){this._context&&(this._context.gl.deleteRenderbuffer(this.glName),this._context.instanceCounter.decrement(n.t.Renderbuffer,this),this._context=null)}}},1664:function(t,e,r){"use strict"
r.d(e,"a",(function(){return c})),r(77)
var i=r(20),n=r(1257),s=r(1051),o=r(877),a=r(1733)
class c{constructor(t,e,r,i,c=new Map){this._context=t,this._locations=i,this._uniformBlockBindings=c,this._refCount=1,this._compiled=!1,this._nameToUniformLocation={},this._nameToUniform1={},this._nameToUniform1v={},this._nameToUniform2={},this._nameToUniform3={},this._nameToUniform4={},this._nameToUniformMatrix3={},this._nameToUniformMatrix4={},t||console.error("RenderingContext isn't initialized!"),0===e.length&&console.error("Shaders source should not be empty!"),this._context.type===s.a.WEBGL2&&(e=Object(a.a)(e,o.u.VERTEX_SHADER),r=Object(a.a)(r,o.u.FRAGMENT_SHADER)),this._vShader=l(this._context,o.u.VERTEX_SHADER,e),this._fShader=l(this._context,o.u.FRAGMENT_SHADER,r),this._vShader&&this._fShader||console.error("Error loading shaders!"),this._context.instanceCounter.increment(o.t.Shader,this),Object(n.c)()&&(this.vertexShader=e,this.fragmentShader=r)}get glName(){if(Object(i.k)(this._glName))return this._glName
if(Object(i.j)(this._vShader))return null
const t=this._context.gl,e=t.createProgram()
if(t.attachShader(e,this._vShader),t.attachShader(e,this._fShader),this._locations.forEach((r,i)=>t.bindAttribLocation(e,r,i)),t.linkProgram(e),Object(n.c)()&&!t.getProgramParameter(e,t.LINK_STATUS)&&console.error(`Could not link shader\nvalidated: ${t.getProgramParameter(e,t.VALIDATE_STATUS)}, gl error ${t.getError()}, vertex: ${t.getShaderParameter(this._vShader,t.COMPILE_STATUS)}, fragment: ${t.getShaderParameter(this._fShader,t.COMPILE_STATUS)}, info log: ${t.getProgramInfoLog(e)}, vertex source: ${this.vertexShader}, fragment source: ${this.fragmentShader}`),this._context.type===s.a.WEBGL2){const r=t
for(const[t,i]of this._uniformBlockBindings){const n=r.getUniformBlockIndex(e,t)
n<4294967295&&r.uniformBlockBinding(e,n,i)}}return this._glName=e,this._context.instanceCounter.increment(o.t.Program,this),e}get hasGLName(){return Object(i.k)(this._glName)}get isCompiled(){if(this._compiled)return!0
const t=this._context.gl.getExtension("KHR_parallel_shader_compile")
return null==t?(this._compiled=!0,!0):(this._compiled=!!this._context.gl.getProgramParameter(this.glName,t.COMPLETION_STATUS_KHR),this._compiled)}dispose(){if(--this._refCount>0)return
const t=this._context.gl
this._vShader&&(t.deleteShader(this._vShader),this._vShader=null,this._context.instanceCounter.decrement(o.t.Shader,this)),this._fShader&&(t.deleteShader(this._fShader),this._fShader=null),this._glName&&(t.deleteProgram(this._glName),this._glName=null,this._context.instanceCounter.decrement(o.t.Program,this))}ref(){++this._refCount}_getUniformLocation(t){return void 0===this._nameToUniformLocation[t]&&(this._nameToUniformLocation[t]=this._context.gl.getUniformLocation(this.glName,t)),this._nameToUniformLocation[t]}hasUniform(t){return null!==this._getUniformLocation(t)}setUniform1i(t,e){const r=this._nameToUniform1[t]
void 0!==r&&e===r||(this._context.gl.uniform1i(this._getUniformLocation(t),e),this._nameToUniform1[t]=e)}setUniform1iv(t,e){const r=this._nameToUniform1v[t]
h(r,e)&&(this._context.gl.uniform1iv(this._getUniformLocation(t),e),void 0===r?this._nameToUniform1v[t]=Array.from(e):_(e,r))}setUniform2iv(t,e){const r=this._nameToUniform2[t]
h(r,e)&&(this._context.gl.uniform2iv(this._getUniformLocation(t),e),void 0===r?this._nameToUniform2[t]=Array.from(e):_(e,r))}setUniform3iv(t,e){const r=this._nameToUniform3[t]
h(r,e)&&(this._context.gl.uniform3iv(this._getUniformLocation(t),e),void 0===r?this._nameToUniform3[t]=Array.from(e):_(e,r))}setUniform4iv(t,e){const r=this._nameToUniform4[t]
h(r,e)&&(this._context.gl.uniform4iv(this._getUniformLocation(t),e),void 0===r?this._nameToUniform4[t]=Array.from(e):_(e,r))}setUniform1f(t,e){const r=this._nameToUniform1[t]
void 0!==r&&e===r||(this._context.gl.uniform1f(this._getUniformLocation(t),e),this._nameToUniform1[t]=e)}setUniform1fv(t,e){const r=this._nameToUniform1v[t]
h(r,e)&&(this._context.gl.uniform1fv(this._getUniformLocation(t),e),void 0===r?this._nameToUniform1v[t]=Array.from(e):_(e,r))}setUniform2f(t,e,r){const i=this._nameToUniform2[t]
void 0!==i&&e===i[0]&&r===i[1]||(this._context.gl.uniform2f(this._getUniformLocation(t),e,r),void 0===i?this._nameToUniform2[t]=[e,r]:(i[0]=e,i[1]=r))}setUniform2fv(t,e){const r=this._nameToUniform2[t]
h(r,e)&&(this._context.gl.uniform2fv(this._getUniformLocation(t),e),void 0===r?this._nameToUniform2[t]=Array.from(e):_(e,r))}setUniform3f(t,e,r,i){const n=this._nameToUniform3[t]
void 0!==n&&e===n[0]&&r===n[1]&&i===n[2]||(this._context.gl.uniform3f(this._getUniformLocation(t),e,r,i),void 0===n?this._nameToUniform3[t]=[e,r,i]:(n[0]=e,n[1]=r,n[2]=i))}setUniform3fv(t,e){const r=this._nameToUniform3[t]
h(r,e)&&(this._context.gl.uniform3fv(this._getUniformLocation(t),e),void 0===r?this._nameToUniform3[t]=Array.from(e):_(e,r))}setUniform4f(t,e,r,i,n){const s=this._nameToUniform4[t]
void 0!==s&&e===s[0]&&r===s[1]&&i===s[2]&&n===s[3]||(this._context.gl.uniform4f(this._getUniformLocation(t),e,r,i,n),void 0===s?this._nameToUniform4[t]=[e,r,i,n]:(s[0]=e,s[1]=r,s[2]=i,s[3]=n))}setUniform4fv(t,e){const r=this._nameToUniform4[t]
h(r,e)&&(this._context.gl.uniform4fv(this._getUniformLocation(t),e),void 0===r?this._nameToUniform4[t]=Array.from(e):_(e,r))}setUniformMatrix3fv(t,e,r=!1){const n=this._nameToUniformMatrix3[t];(function(t,e){return!!Object(i.j)(t)||(9!==t.length?h(t,e):9!==t.length||t[0]!==e[0]||t[1]!==e[1]||t[2]!==e[2]||t[3]!==e[3]||t[4]!==e[4]||t[5]!==e[5]||t[6]!==e[6]||t[7]!==e[7]||t[8]!==e[8])})(n,e)&&(this._context.gl.uniformMatrix3fv(this._getUniformLocation(t),r,e),void 0===n?this._nameToUniformMatrix3[t]=Array.from(e):_(e,n))}setUniformMatrix4fv(t,e,r=!1){const n=this._nameToUniformMatrix4[t];(function(t,e){return!!Object(i.j)(t)||(16!==t.length?h(t,e):16!==t.length||t[0]!==e[0]||t[1]!==e[1]||t[2]!==e[2]||t[3]!==e[3]||t[4]!==e[4]||t[5]!==e[5]||t[6]!==e[6]||t[7]!==e[7]||t[8]!==e[8]||t[9]!==e[9]||t[10]!==e[10]||t[11]!==e[11]||t[12]!==e[12]||t[13]!==e[13]||t[14]!==e[14]||t[15]!==e[15])})(n,e)&&(this._context.gl.uniformMatrix4fv(this._getUniformLocation(t),r,e),void 0===n?this._nameToUniformMatrix4[t]=Array.from(e):_(e,n))}stop(){}}function h(t,e){if(Object(i.j)(t)||t.length!==e.length)return!0
for(let r=0;r<t.length;++r)if(t[r]!==e[r])return!0
return!1}function l(t,e,r){const i=t.gl,a=i.createShader(e)
return i.shaderSource(a,r),i.compileShader(a),Object(n.c)()&&!i.getShaderParameter(a,i.COMPILE_STATUS)&&(console.error("Compile error in ".concat(e===o.u.VERTEX_SHADER?"vertex":"fragment"," shader")),console.error(i.getShaderInfoLog(a)),console.error(function(t){let e=2
return t.replace(/\n/g,()=>"\n"+function(t){return t>=1e3?t.toString():("  "+t).slice(-3)}(e++)+":")}(r)),t.type===s.a.WEBGL2&&(console.log("Shader source before transpilation:"),console.log(r))),a}function _(t,e){for(let r=0;r<t.length;++r)e[r]=t[r]}},1733:function(t,e,r){"use strict"
r.d(e,"a",(function(){return v})),r(77)
var i=r(20),n=r(877)
const s=["layout","centroid","smooth","case","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","uint","uvec2","uvec3","uvec4","samplerCubeShadow","sampler2DArray","sampler2DArrayShadow","isampler2D","isampler3D","isamplerCube","isampler2DArray","usampler2D","usampler3D","usamplerCube","usampler2DArray","coherent","restrict","readonly","writeonly","resource","atomic_uint","noperspective","patch","sample","subroutine","common","partition","active","filter","image1D","image2D","image3D","imageCube","iimage1D","iimage2D","iimage3D","iimageCube","uimage1D","uimage2D","uimage3D","uimageCube","image1DArray","image2DArray","iimage1DArray","iimage2DArray","uimage1DArray","uimage2DArray","image1DShadow","image2DShadow","image1DArrayShadow","image2DArrayShadow","imageBuffer","iimageBuffer","uimageBuffer","sampler1DArray","sampler1DArrayShadow","isampler1D","isampler1DArray","usampler1D","usampler1DArray","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","trunc","round","roundEven","isnan","isinf","floatBitsToInt","floatBitsToUint","intBitsToFloat","uintBitsToFloat","packSnorm2x16","unpackSnorm2x16","packUnorm2x16","unpackUnorm2x16","packHalf2x16","unpackHalf2x16","outerProduct","transpose","determinant","inverse","texture","textureSize","textureProj","textureLod","textureOffset","texelFetch","texelFetchOffset","textureProjOffset","textureLodOffset","textureProjLod","textureProjLodOffset","textureGrad","textureGradOffset","textureProjGrad","textureProjGradOffset"]
var o,a={exports:{}}
void 0!==(o=["precision","highp","mediump","lowp","attribute","const","uniform","varying","break","continue","do","for","while","if","else","in","out","inout","float","int","void","bool","true","false","discard","return","mat2","mat3","mat4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","struct","asm","class","union","enum","typedef","template","this","packed","goto","switch","default","inline","noinline","volatile","public","static","extern","external","interface","long","short","double","half","fixed","unsigned","input","output","hvec2","hvec3","hvec4","dvec2","dvec3","dvec4","fvec2","fvec3","fvec4","sampler2DRect","sampler3DRect","sampler2DRectShadow","sizeof","cast","namespace","using"])&&(a.exports=o)
const c=a.exports
var h,l={exports:{}}
void 0!==(h=["<<=",">>=","++","--","<<",">>","<=",">=","==","!=","&&","||","+=","-=","*=","/=","%=","&=","^^","^=","|=","(",")","[","]",".","!","~","*","/","%","+","-","<",">","&","^","|","?",":","=",",",";","{","}"])&&(l.exports=h)
const _=l.exports
var u,f,d={exports:{}}
u=d,void 0!==(f=["abs","acos","all","any","asin","atan","ceil","clamp","cos","cross","dFdx","dFdy","degrees","distance","dot","equal","exp","exp2","faceforward","floor","fract","gl_BackColor","gl_BackLightModelProduct","gl_BackLightProduct","gl_BackMaterial","gl_BackSecondaryColor","gl_ClipPlane","gl_ClipVertex","gl_Color","gl_DepthRange","gl_DepthRangeParameters","gl_EyePlaneQ","gl_EyePlaneR","gl_EyePlaneS","gl_EyePlaneT","gl_Fog","gl_FogCoord","gl_FogFragCoord","gl_FogParameters","gl_FragColor","gl_FragCoord","gl_FragData","gl_FragDepth","gl_FragDepthEXT","gl_FrontColor","gl_FrontFacing","gl_FrontLightModelProduct","gl_FrontLightProduct","gl_FrontMaterial","gl_FrontSecondaryColor","gl_LightModel","gl_LightModelParameters","gl_LightModelProducts","gl_LightProducts","gl_LightSource","gl_LightSourceParameters","gl_MaterialParameters","gl_MaxClipPlanes","gl_MaxCombinedTextureImageUnits","gl_MaxDrawBuffers","gl_MaxFragmentUniformComponents","gl_MaxLights","gl_MaxTextureCoords","gl_MaxTextureImageUnits","gl_MaxTextureUnits","gl_MaxVaryingFloats","gl_MaxVertexAttribs","gl_MaxVertexTextureImageUnits","gl_MaxVertexUniformComponents","gl_ModelViewMatrix","gl_ModelViewMatrixInverse","gl_ModelViewMatrixInverseTranspose","gl_ModelViewMatrixTranspose","gl_ModelViewProjectionMatrix","gl_ModelViewProjectionMatrixInverse","gl_ModelViewProjectionMatrixInverseTranspose","gl_ModelViewProjectionMatrixTranspose","gl_MultiTexCoord0","gl_MultiTexCoord1","gl_MultiTexCoord2","gl_MultiTexCoord3","gl_MultiTexCoord4","gl_MultiTexCoord5","gl_MultiTexCoord6","gl_MultiTexCoord7","gl_Normal","gl_NormalMatrix","gl_NormalScale","gl_ObjectPlaneQ","gl_ObjectPlaneR","gl_ObjectPlaneS","gl_ObjectPlaneT","gl_Point","gl_PointCoord","gl_PointParameters","gl_PointSize","gl_Position","gl_ProjectionMatrix","gl_ProjectionMatrixInverse","gl_ProjectionMatrixInverseTranspose","gl_ProjectionMatrixTranspose","gl_SecondaryColor","gl_TexCoord","gl_TextureEnvColor","gl_TextureMatrix","gl_TextureMatrixInverse","gl_TextureMatrixInverseTranspose","gl_TextureMatrixTranspose","gl_Vertex","greaterThan","greaterThanEqual","inversesqrt","length","lessThan","lessThanEqual","log","log2","matrixCompMult","max","min","mix","mod","normalize","not","notEqual","pow","radians","reflect","refract","sign","sin","smoothstep","sqrt","step","tan","texture2D","texture2DLod","texture2DProj","texture2DProjLod","textureCube","textureCubeLod","texture2DLodEXT","texture2DProjLodEXT","textureCubeLodEXT","texture2DGradEXT","texture2DProjGradEXT","textureCubeGradEXT"])&&(u.exports=f)
const m=d.exports
var g=999,E=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"]
function p(t){return function(t){var e=function(){var t,e,r,i=0,n=0,s=g,o=[],a=[],h=1,l=0,u=0,f=!1,d=!1,p=""
return function(t){return a=[],null!==t?x(t.replace?t.replace(/\r\n/g,"\n"):t):(o.length&&T(o.join("")),s=10,T("(eof)"),a)}
function T(t){t.length&&a.push({type:E[s],data:t,position:u,line:h,column:l})}function x(e){var o
for(i=0,r=(p+=e).length;t=p[i],i<r;){switch(o=i,s){case 0:i=D()
break
case 1:case 2:i=R()
break
case 3:i=S()
break
case 4:i=F()
break
case 11:i=N()
break
case 5:i=U()
break
case 9999:i=y()
break
case 9:i=A()
break
case g:i=b()}o!==i&&("\n"===p[o]?(l=0,++h):++l)}return n+=i,p=p.slice(i),a}function b(){return o=o.length?[]:o,"/"===e&&"*"===t?(u=n+i-1,s=0,e=t,i+1):"/"===e&&"/"===t?(u=n+i-1,s=1,e=t,i+1):"#"===t?(s=2,u=n+i,i):/\s/.test(t)?(s=9,u=n+i,i):(f=/\d/.test(t),d=/[^\w_]/.test(t),u=n+i,s=f?4:d?3:9999,i)}function A(){return/[^\s]/g.test(t)?(T(o.join("")),s=g,i):(o.push(t),e=t,i+1)}function R(){return"\r"!==t&&"\n"!==t||"\\"===e?(o.push(t),e=t,i+1):(T(o.join("")),s=g,i)}function D(){return"/"===t&&"*"===e?(o.push(t),T(o.join("")),s=g,i+1):(o.push(t),e=t,i+1)}function S(){if("."===e&&/\d/.test(t))return s=5,i
if("/"===e&&"*"===t)return s=0,i
if("/"===e&&"/"===t)return s=1,i
if("."===t&&o.length){for(;v(o););return s=5,i}if(";"===t||")"===t||"("===t){if(o.length)for(;v(o););return T(t),s=g,i+1}var r=2===o.length&&"="!==t
if(/[\w_\d\s]/.test(t)||r){for(;v(o););return s=g,i}return o.push(t),e=t,i+1}function v(t){for(var e,r,i=0;;){if(e=_.indexOf(t.slice(0,t.length+i).join("")),r=_[e],-1===e){if(i--+t.length>0)continue
r=t.slice(0,1).join("")}return T(r),u+=r.length,(o=o.slice(r.length)).length}}function N(){return/[^a-fA-F0-9]/.test(t)?(T(o.join("")),s=g,i):(o.push(t),e=t,i+1)}function F(){return"."===t||/[eE]/.test(t)?(o.push(t),s=5,e=t,i+1):"x"===t&&1===o.length&&"0"===o[0]?(s=11,o.push(t),e=t,i+1):/[^\d]/.test(t)?(T(o.join("")),s=g,i):(o.push(t),e=t,i+1)}function U(){return"f"===t&&(o.push(t),e=t,i+=1),/[eE]/.test(t)||"-"===t&&/[eE]/.test(e)?(o.push(t),e=t,i+1):/[^\d]/.test(t)?(T(o.join("")),s=g,i):(o.push(t),e=t,i+1)}function y(){if(/[^\d\w_]/.test(t)){var r=o.join("")
return s=c.indexOf(r)>-1?8:m.indexOf(r)>-1?7:6,T(o.join("")),s=g,i}return o.push(t),e=t,i+1}}(),r=[]
return(r=r.concat(e(t))).concat(e(null))}(t)}const T=["GL_OES_standard_derivatives","GL_EXT_frag_depth","GL_EXT_draw_buffers","GL_EXT_shader_texture_lod"]
function x(t,e){for(let r=e-1;r>=0;r--){const e=t[r]
if("whitespace"!==e.type&&"block-comment"!==e.type){if("keyword"!==e.type)break
if("attribute"===e.data||"in"===e.data)return!0}}return!1}function b(t,e,r,i){i=i||r
for(const n of t)if("ident"===n.type&&n.data===r)return i in e?e[i]++:e[i]=0,b(t,e,i+"_"+e[i],i)
return r}function A(t,e,r="afterVersion"){function i(t,e){for(let r=e;r<t.length;r++){const e=t[r]
if("operator"===e.type&&";"===e.data)return r}return null}const n={data:"\n",type:"whitespace"},s=e=>e<t.length&&/[^\r\n]$/.test(t[e].data)
let o=function(t){let e=-1,n=0,s=-1
for(let o=0;o<t.length;o++){const a=t[o]
if("preprocessor"===a.type&&(a.data.match(/\#(if|ifdef|ifndef)\s+.+/)?++n:a.data.match(/\#endif\s*.*/)&&--n),"afterVersion"!==r&&"afterPrecision"!==r||"preprocessor"===a.type&&/^#version/.test(a.data)&&(s=Math.max(s,o)),"afterPrecision"===r&&"keyword"===a.type&&"precision"===a.data){const e=i(t,o)
if(null===e)throw new Error("precision statement not followed by any semicolons!")
s=Math.max(s,e)}e<s&&0===n&&(e=o)}return e+1}(t)
s(o-1)&&t.splice(o++,0,n)
for(const r of e)t.splice(o++,0,r)
s(o-1)&&s(o)&&t.splice(o,0,n)}function R(t,e,r,i="lowp"){A(t,[{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:i},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"ident",data:e},{type:"operator",data:";"}],"afterPrecision")}function D(t,e,r,i,n="lowp"){A(t,[{type:"keyword",data:"layout"},{type:"operator",data:"("},{type:"keyword",data:"location"},{type:"whitespace",data:" "},{type:"operator",data:"="},{type:"whitespace",data:" "},{type:"integer",data:i.toString()},{type:"operator",data:")"},{type:"whitespace",data:" "},{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:n},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"ident",data:e},{type:"operator",data:";"}],"afterPrecision")}function S(t,e){let r,i,n=-1
for(let s=e;s<t.length;s++){const e=t[s]
if("operator"===e.type&&("["===e.data&&(r=s),"]"===e.data)){i=s
break}"integer"===e.type&&(n=parseInt(e.data,10))}return r&&i&&t.splice(r,i-r+1),n}function v(t,e){const r=function(t){return N?F.get(t):null}(t)
if(Object(i.k)(r))return r
const o=p(t)
if("300 es"===function(t,e="100",r="300 es"){const i=/^\s*\#version\s+([0-9]+(\s+[a-zA-Z]+)?)\s*/
for(const n of t)if("preprocessor"===n.type){const t=i.exec(n.data)
if(t){const i=t[1].replace(/\s\s+/g," ")
if(i===r)return i
if(i===e)return n.data="#version "+r,e
throw new Error("unknown glsl version: "+i)}}return t.splice(0,0,{type:"preprocessor",data:"#version "+r},{type:"whitespace",data:"\n"}),null}(o,"100","300 es"))return t
let a=null,c=null
const h={},l={}
for(let t=0;t<o.length;++t){const r=o[t]
switch(r.type){case"keyword":e===n.u.VERTEX_SHADER&&"attribute"===r.data?r.data="in":"varying"===r.data&&(r.data=e===n.u.VERTEX_SHADER?"out":"in")
break
case"builtin":if(/^texture(2D|Cube)(Proj)?(Lod|Grad)?(EXT)?$/.test(r.data.trim())&&(r.data=r.data.replace(/(2D|Cube|EXT)/g,"")),e===n.u.FRAGMENT_SHADER&&"gl_FragColor"===r.data&&(a||(a=b(o,h,"fragColor"),R(o,a,"vec4")),r.data=a),e===n.u.FRAGMENT_SHADER&&"gl_FragData"===r.data){const e=S(o,t+1),i=b(o,h,"fragData")
D(o,i,"vec4",e,"mediump"),r.data=i}else e===n.u.FRAGMENT_SHADER&&"gl_FragDepthEXT"===r.data&&(c||(c=b(o,h,"gl_FragDepth")),r.data=c)
break
case"ident":if(s.indexOf(r.data)>=0){if(e===n.u.VERTEX_SHADER&&x(o,t))throw new Error("attribute in vertex shader uses a name that is a reserved word in glsl 300 es")
r.data in l||(l[r.data]=b(o,h,r.data)),r.data=l[r.data]}}}for(let t=o.length-1;t>=0;--t){const e=o[t]
if("preprocessor"===e.type){const r=e.data.match(/\#extension\s+(.*)\:/)
if(r&&r[1]&&T.indexOf(r[1].trim())>=0){const e=o[t+1]
o.splice(t,e&&"whitespace"===e.type?2:1)}const i=e.data.match(/\#ifdef\s+(.*)/)
i&&i[1]&&T.indexOf(i[1].trim())>=0&&(e.data="#if 1")
const n=e.data.match(/\#ifndef\s+(.*)/)
n&&n[1]&&T.indexOf(n[1].trim())>=0&&(e.data="#if 0")}}return function(t,e){return N&&F.set(t,e),e}(t,function(t){return t.map(t=>"eof"!==t.type?t.data:"").join("")}(o))}const N=!1,F=new Map},985:function(t,e,r){"use strict"
r.d(e,"a",(function(){return _}))
var i=r(353),n=r(177),s=r(20),o=r(57),a=r(1257),c=r(1051),h=r(877)
const l=n.a.getLogger("esri.views.webgl.BufferObject")
class _{constructor(t,e,r,i){this._context=t,this.bufferType=e,this.usage=r,this._glName=null,this._size=-1,this._indexType=void 0,t.instanceCounter.increment(h.t.Buffer,this),this._glName=this._context.gl.createBuffer(),Object(a.a)(this._context.gl),i&&this.setData(i)}static createIndex(t,e,r){return new _(t,h.d.ELEMENT_ARRAY_BUFFER,e,r)}static createVertex(t,e,r){return new _(t,h.d.ARRAY_BUFFER,e,r)}static createUniform(t,e,r){if(t.type!==c.a.WEBGL2)throw new Error("Uniform buffers are supported in WebGL2 only!")
return new _(t,h.d.UNIFORM_BUFFER,e,r)}static createPixelPack(t,e=h.D.STREAM_READ,r){if(t.type!==c.a.WEBGL2)throw new Error("Pixel pack buffers are supported in WebGL2 only!")
const i=new _(t,h.d.PIXEL_PACK_BUFFER,e)
return r&&i.setSize(r),i}static createPixelUnpack(t,e=h.D.STREAM_DRAW,r){if(t.type!==c.a.WEBGL2)throw new Error("Pixel unpack buffers are supported in WebGL2 only!")
return new _(t,h.d.PIXEL_UNPACK_BUFFER,e,r)}get glName(){return this._glName}get size(){return this._size}get indexType(){return this._indexType}get byteSize(){return this.bufferType===h.d.ELEMENT_ARRAY_BUFFER?this._indexType===h.k.UNSIGNED_INT?4*this._size:2*this._size:this._size}get _isVAOAware(){return this.bufferType===h.d.ELEMENT_ARRAY_BUFFER||this.bufferType===h.d.ARRAY_BUFFER}dispose(){var t
null!=(t=this._context)&&t.gl?(this._glName&&(this._context.gl.deleteBuffer(this._glName),this._glName=null),this._context.instanceCounter.decrement(h.t.Buffer,this),this._context=null):this._glName&&l.warn("Leaked WebGL buffer object")}setSize(t,e=null){if(t<=0&&l.error("Buffer size needs to be positive!"),this.bufferType===h.d.ELEMENT_ARRAY_BUFFER&&Object(s.k)(e))switch(this._indexType=e,e){case h.k.UNSIGNED_SHORT:t*=2
break
case h.k.UNSIGNED_INT:t*=4}this._setBufferData(t)}setData(t){if(!t)return
let e=t.byteLength
this.bufferType===h.d.ELEMENT_ARRAY_BUFFER&&(Object(o.i)(t)&&(e/=2,this._indexType=h.k.UNSIGNED_SHORT),Object(o.j)(t)&&(e/=4,this._indexType=h.k.UNSIGNED_INT)),this._setBufferData(e,t)}_setBufferData(t,e=null){this._size=t
const r=this._context.getBoundVAO()
this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this)
const i=this._context.gl
Object(s.k)(e)?i.bufferData(this.bufferType,e,this.usage):i.bufferData(this.bufferType,t,this.usage),Object(a.a)(i),this._isVAOAware&&this._context.bindVAO(r)}setSubData(t,e=0,r=0,i=t.byteLength){if(!t)return;(e<0||e>=this._size)&&l.error("offset is out of range!")
let n=e,s=r,c=i,_=t.byteLength
this.bufferType===h.d.ELEMENT_ARRAY_BUFFER&&(Object(o.i)(t)?(_/=2,n*=2,s*=2,c*=2):Object(o.j)(t)&&(_/=4,n*=4,s*=4,c*=4)),void 0===i&&(i=_-1),r>=i&&l.error("end must be bigger than start!"),e+r-i>this._size&&l.error("An attempt to write beyond the end of the buffer!")
const u=this._context.getBoundVAO()
this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this)
const f=this._context.gl,d=ArrayBuffer.isView(t)?t.buffer:t,m=0===s&&c===t.byteLength?d:d.slice(s,c)
f.bufferSubData(this.bufferType,n,m),Object(a.a)(f),this._isVAOAware&&this._context.bindVAO(u)}setSubDataFromView(t,e,r,i){if(!t)return;(e<0||e>=this._size)&&l.error("offset is out of range!"),r>=i&&l.error("end must be bigger than start!"),e+r-i>this._size&&l.error("An attempt to write beyond the end of the buffer!")
const n=this._context.getBoundVAO()
this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this)
const s=this._context.gl
if(this._context.type===c.a.WEBGL2)s.bufferSubData(this.bufferType,e*t.BYTES_PER_ELEMENT,t,r,i-r)
else{const n=0===r&&i===t.length?t:t.subarray(r,i)
s.bufferSubData(this.bufferType,e*t.BYTES_PER_ELEMENT,n)}Object(a.a)(s),this._isVAOAware&&this._context.bindVAO(n)}getSubData(t,e=0,r,n){if(this._context.type!==c.a.WEBGL2)return void l.error("Get buffer subdata is supported in WebGL2 only!")
if(r<0||n<0)return void l.error("Problem getting subdata: offset and length were less than zero!")
const s=function(t){return Object(i.h)(t)}(t)?t.BYTES_PER_ELEMENT:1
if(s*((null!=r?r:0)+(null!=n?n:0))>t.byteLength)return void l.error("Problem getting subdata: offset and length exceeded destination size!")
e+s*(null!=n?n:0)>this.byteSize&&l.warn("Potential problem getting subdata: requested data exceeds buffer size!")
const o=this._context.gl
this._context.bindBuffer(this,h.d.COPY_READ_BUFFER),o.getBufferSubData(h.d.COPY_READ_BUFFER,e,t,r,n),this._context.unbindBuffer(h.d.COPY_READ_BUFFER)}async getSubDataAsync(t,e=0,r,i){this._context.type===c.a.WEBGL2?(await this._context.clientWaitAsync(),this.getSubData(t,e,r,i)):l.error("Get buffer subdata is supported in WebGL2 only!")}}},998:function(t,e,r){"use strict"
r.d(e,"a",(function(){return c}))
var i=r(177),n=r(20),s=r(877),o=r(1114)
const a=i.a.getLogger("esri.views.webgl.VertexArrayObject")
class c{constructor(t,e,r,i,n=null){this._context=t,this._locations=e,this._layout=r,this._buffers=i,this._indexBuffer=n,this._glName=null,this._initialized=!1,t.instanceCounter.increment(s.t.VAO,this)}get glName(){return this._glName}get vertexBuffers(){return this._buffers}get indexBuffer(){return this._indexBuffer}get size(){return Object.keys(this._buffers).reduce((t,e)=>t+this._buffers[e].size,Object(n.k)(this._indexBuffer)?this._indexBuffer.size:0)}get layout(){return this._layout}get locations(){return this._locations}dispose(t=!0){if(this._context){if(this._glName){var e,r
const t=null==(e=this._context)||null==(r=e.capabilities)?void 0:r.vao
t?(t.deleteVertexArray(this._glName),this._glName=null):a.warn("Leaked WebGL VAO")}if(this._context.getBoundVAO()===this&&this._context.bindVAO(null),t){for(const t in this._buffers)this._buffers[t].dispose(),delete this._buffers[t]
this._indexBuffer=Object(n.e)(this._indexBuffer)}this._context.instanceCounter.decrement(s.t.VAO,this),this._context=null}else(this._glName||t&&Object.getOwnPropertyNames(this._buffers).length>0)&&a.warn("Leaked WebGL VAO")}initialize(){if(this._initialized)return
const t=this._context.capabilities.vao
if(t){const e=t.createVertexArray()
t.bindVertexArray(e),this._bindLayout(),t.bindVertexArray(null),this._glName=e}this._initialized=!0}bind(){this.initialize()
const t=this._context.capabilities.vao
t?t.bindVertexArray(this.glName):(this._context.bindVAO(null),this._bindLayout())}_bindLayout(){const{_buffers:t,_layout:e,_indexBuffer:r}=this
t||a.error("Vertex buffer dictionary is empty!")
const i=this._context.gl
for(const r in t){const i=t[r]
i||a.error("Vertex buffer is uninitialized!")
const n=e[r]
n||a.error("Vertex element descriptor is empty!"),Object(o.a)(this._context,this._locations,i,n)}Object(n.k)(r)&&(this._context.capabilities.vao?i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,r.glName):this._context.bindBuffer(r))}unbind(){this.initialize()
const t=this._context.capabilities.vao
t?t.bindVertexArray(null):this._unbindLayout()}_unbindLayout(){const{_buffers:t,_layout:e}=this
t||a.error("Vertex buffer dictionary is empty!")
for(const r in t){const i=t[r]
i||a.error("Vertex buffer is uninitialized!")
const n=e[r]
Object(o.e)(this._context,this._locations,i,n)}Object(n.k)(this._indexBuffer)&&this._context.unbindBuffer(this._indexBuffer.bufferType)}}}}])
