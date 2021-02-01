/**
 * @licstart The following is the entire license notice for the
 * Javascript code in this page
 *
 * Copyright 2020 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @licend The above is the entire license notice for the
 * Javascript code in this page
 */
(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("pdfjs-dist/build/pdf",[],t):"object"==typeof exports?exports["pdfjs-dist/build/pdf"]=t():e["pdfjs-dist/build/pdf"]=e.pdfjsLib=t()})(this,(function(){return function(e){var t={}
function r(n){if(t[n])return t[n].exports
var i=t[n]={i:n,l:!1,exports:{}}
return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e
if(4&t&&"object"==typeof e&&e&&e.__esModule)return e
var n=Object.create(null)
if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i))
return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e}
return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addLinkAttributes",{enumerable:!0,get:function(){return n.addLinkAttributes}}),Object.defineProperty(t,"getFilenameFromUrl",{enumerable:!0,get:function(){return n.getFilenameFromUrl}}),Object.defineProperty(t,"LinkTarget",{enumerable:!0,get:function(){return n.LinkTarget}}),Object.defineProperty(t,"loadScript",{enumerable:!0,get:function(){return n.loadScript}}),Object.defineProperty(t,"PDFDateString",{enumerable:!0,get:function(){return n.PDFDateString}}),Object.defineProperty(t,"RenderingCancelledException",{enumerable:!0,get:function(){return n.RenderingCancelledException}}),Object.defineProperty(t,"build",{enumerable:!0,get:function(){return i.build}}),Object.defineProperty(t,"getDocument",{enumerable:!0,get:function(){return i.getDocument}}),Object.defineProperty(t,"LoopbackPort",{enumerable:!0,get:function(){return i.LoopbackPort}}),Object.defineProperty(t,"PDFDataRangeTransport",{enumerable:!0,get:function(){return i.PDFDataRangeTransport}}),Object.defineProperty(t,"PDFWorker",{enumerable:!0,get:function(){return i.PDFWorker}}),Object.defineProperty(t,"version",{enumerable:!0,get:function(){return i.version}}),Object.defineProperty(t,"CMapCompressionType",{enumerable:!0,get:function(){return a.CMapCompressionType}}),Object.defineProperty(t,"createObjectURL",{enumerable:!0,get:function(){return a.createObjectURL}}),Object.defineProperty(t,"createPromiseCapability",{enumerable:!0,get:function(){return a.createPromiseCapability}}),Object.defineProperty(t,"createValidAbsoluteUrl",{enumerable:!0,get:function(){return a.createValidAbsoluteUrl}}),Object.defineProperty(t,"InvalidPDFException",{enumerable:!0,get:function(){return a.InvalidPDFException}}),Object.defineProperty(t,"MissingPDFException",{enumerable:!0,get:function(){return a.MissingPDFException}}),Object.defineProperty(t,"OPS",{enumerable:!0,get:function(){return a.OPS}}),Object.defineProperty(t,"PasswordResponses",{enumerable:!0,get:function(){return a.PasswordResponses}}),Object.defineProperty(t,"PermissionFlag",{enumerable:!0,get:function(){return a.PermissionFlag}}),Object.defineProperty(t,"removeNullCharacters",{enumerable:!0,get:function(){return a.removeNullCharacters}}),Object.defineProperty(t,"shadow",{enumerable:!0,get:function(){return a.shadow}}),Object.defineProperty(t,"UnexpectedResponseException",{enumerable:!0,get:function(){return a.UnexpectedResponseException}}),Object.defineProperty(t,"UNSUPPORTED_FEATURES",{enumerable:!0,get:function(){return a.UNSUPPORTED_FEATURES}}),Object.defineProperty(t,"Util",{enumerable:!0,get:function(){return a.Util}}),Object.defineProperty(t,"VerbosityLevel",{enumerable:!0,get:function(){return a.VerbosityLevel}}),Object.defineProperty(t,"AnnotationLayer",{enumerable:!0,get:function(){return o.AnnotationLayer}}),Object.defineProperty(t,"apiCompatibilityParams",{enumerable:!0,get:function(){return s.apiCompatibilityParams}})
Object.defineProperty(t,"GlobalWorkerOptions",{enumerable:!0,get:function(){return u.GlobalWorkerOptions}}),Object.defineProperty(t,"renderTextLayer",{enumerable:!0,get:function(){return c.renderTextLayer}}),Object.defineProperty(t,"SVGGraphics",{enumerable:!0,get:function(){return l.SVGGraphics}})
var n=r(1),i=r(202),a=r(5),o=r(216),s=r(206),u=r(209),c=r(217),l=r(218)
if(r(7).isNodeJS){var f=r(219).PDFNodeStream;(0,i.setPDFNetworkStreamFactory)((function(e){return new f(e)}))}else{var h,d=r(222).PDFNetworkStream;(0,n.isFetchSupported)()&&(h=r(223).PDFFetchStream),(0,i.setPDFNetworkStreamFactory)((function(e){return h&&(0,n.isValidFetchUrl)(e.url)?new h(e):new d(e)}))}},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.addLinkAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.url,n=t.target,i=t.rel,o=t.enabled,s=void 0===o||o;(0,a.assert)(r&&"string"==typeof r,'addLinkAttributes: A valid "url" parameter must provided.')
var u=(0,a.removeNullCharacters)(r)
s?e.href=e.title=u:(e.href="",e.title="Disabled: ".concat(u),e.onclick=function(){return!1})
var c=""
switch(n){case P.NONE:break
case P.SELF:c="_self"
break
case P.BLANK:c="_blank"
break
case P.PARENT:c="_parent"
break
case P.TOP:c="_top"}e.target=c,e.rel="string"==typeof i?i:b},t.getFilenameFromUrl=function(e){var t=e.indexOf("#"),r=e.indexOf("?"),n=Math.min(t>0?t:e.length,r>0?r:e.length)
return e.substring(e.lastIndexOf("/",n)+1,n)},t.isFetchSupported=O,t.isValidFetchUrl=F,t.loadScript=function(e){return new Promise((function(t,r){var n=document.createElement("script")
n.src=e,n.onload=t,n.onerror=function(){r(new Error("Cannot load script at: ".concat(n.src)))},(document.head||document.documentElement).appendChild(n)}))},t.deprecated=function(e){console.log("Deprecated API usage: "+e)},t.PDFDateString=t.StatTimer=t.DOMSVGFactory=t.DOMCMapReaderFactory=t.BaseCMapReaderFactory=t.DOMCanvasFactory=t.BaseCanvasFactory=t.DEFAULT_LINK_REL=t.LinkTarget=t.RenderingCancelledException=t.PageViewport=void 0
var n,i=(n=r(2))&&n.__esModule?n:{default:n},a=r(5)
function o(e,t){var r
if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return
if("string"==typeof e)return s(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r)
var n=0,i=function(){}
return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,u=!1
return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next()
return o=e.done,e},e:function(e){u=!0,a=e},f:function(){try{o||null==r.return||r.return()}finally{if(u)throw a}}}}function s(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function u(e,t,r,n,i,a,o){try{var s=e[a](o),u=s.value}catch(c){return void r(c)}s.done?t(u):Promise.resolve(u).then(n,i)}function c(e){return function(){var t=this,r=arguments
return new Promise((function(n,i){var a=e.apply(t,r)
function o(e){u(a,n,i,o,s,"next",e)}function s(e){u(a,n,i,o,s,"throw",e)}o(void 0)}))}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=v(e)
if(t){var i=v(this).constructor
r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments)
return p(this,r)}}function p(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t,r){return t&&g(e.prototype,t),r&&g(e,r),e}var b="noopener noreferrer nofollow"
t.DEFAULT_LINK_REL=b
var _="http://www.w3.org/2000/svg",A=function(){function e(){y(this,e),this.constructor===e&&(0,a.unreachable)("Cannot initialize BaseCanvasFactory.")}return m(e,[{key:"create",value:function(e,t){(0,a.unreachable)("Abstract method `create` called.")}},{key:"reset",value:function(e,t,r){if(!e.canvas)throw new Error("Canvas is not specified")
if(t<=0||r<=0)throw new Error("Invalid canvas size")
e.canvas.width=t,e.canvas.height=r}},{key:"destroy",value:function(e){if(!e.canvas)throw new Error("Canvas is not specified")
e.canvas.width=0,e.canvas.height=0,e.canvas=null,e.context=null}}]),e}()
t.BaseCanvasFactory=A
var S=function(e){f(r,e)
var t=d(r)
function r(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=n.ownerDocument,a=void 0===i?globalThis.document:i
return y(this,r),(e=t.call(this))._document=a,e}return m(r,[{key:"create",value:function(e,t){if(e<=0||t<=0)throw new Error("Invalid canvas size")
var r=this._document.createElement("canvas"),n=r.getContext("2d")
return r.width=e,r.height=t,{canvas:r,context:n}}}]),r}(A)
t.DOMCanvasFactory=S
var w=function(){function e(t){var r=t.baseUrl,n=void 0===r?null:r,i=t.isCompressed,o=void 0!==i&&i
y(this,e),this.constructor===e&&(0,a.unreachable)("Cannot initialize BaseCMapReaderFactory."),this.baseUrl=n,this.isCompressed=o}var t
return m(e,[{key:"fetch",value:(t=c(i.default.mark((function e(t){var r,n,o,s=this
return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.name,this.baseUrl){e.next=3
break}throw new Error('The CMap "baseUrl" parameter must be specified, ensure that the "cMapUrl" and "cMapPacked" API parameters are provided.')
case 3:if(r){e.next=5
break}throw new Error("CMap name must be specified.")
case 5:return n=this.baseUrl+r+(this.isCompressed?".bcmap":""),o=this.isCompressed?a.CMapCompressionType.BINARY:a.CMapCompressionType.NONE,e.abrupt("return",this._fetchData(n,o).catch((function(e){throw new Error("Unable to load ".concat(s.isCompressed?"binary ":"","CMap at: ").concat(n))})))
case 8:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"_fetchData",value:function(e,t){(0,a.unreachable)("Abstract method `_fetchData` called.")}}]),e}()
t.BaseCMapReaderFactory=w
var k=function(e){f(r,e)
var t=d(r)
function r(){return y(this,r),t.apply(this,arguments)}return m(r,[{key:"_fetchData",value:function(e,t){var r=this
return O()&&F(e,document.baseURI)?fetch(e).then(function(){var e=c(i.default.mark((function e(n){var o
return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.ok){e.next=2
break}throw new Error(n.statusText)
case 2:if(!r.isCompressed){e.next=10
break}return e.t0=Uint8Array,e.next=6,n.arrayBuffer()
case 6:e.t1=e.sent,o=new e.t0(e.t1),e.next=15
break
case 10:return e.t2=a.stringToBytes,e.next=13,n.text()
case 13:e.t3=e.sent,o=(0,e.t2)(e.t3)
case 15:return e.abrupt("return",{cMapData:o,compressionType:t})
case 16:case"end":return e.stop()}}),e)})))
return function(t){return e.apply(this,arguments)}}()):new Promise((function(n,i){var o=new XMLHttpRequest
o.open("GET",e,!0),r.isCompressed&&(o.responseType="arraybuffer"),o.onreadystatechange=function(){if(o.readyState===XMLHttpRequest.DONE){var e
if(200===o.status||0===o.status)if(r.isCompressed&&o.response?e=new Uint8Array(o.response):!r.isCompressed&&o.responseText&&(e=(0,a.stringToBytes)(o.responseText)),e)return void n({cMapData:e,compressionType:t})
i(new Error(o.statusText))}},o.send(null)}))}}]),r}(w)
t.DOMCMapReaderFactory=k
var x=function(){function e(){y(this,e)}return m(e,[{key:"create",value:function(e,t){(0,a.assert)(e>0&&t>0,"Invalid SVG dimensions")
var r=document.createElementNS(_,"svg:svg")
return r.setAttribute("version","1.1"),r.setAttribute("width",e+"px"),r.setAttribute("height",t+"px"),r.setAttribute("preserveAspectRatio","none"),r.setAttribute("viewBox","0 0 "+e+" "+t),r}},{key:"createElement",value:function(e){return(0,a.assert)("string"==typeof e,"Invalid SVG element type"),document.createElementNS(_,e)}}]),e}()
t.DOMSVGFactory=x
var C=function(){function e(t){var r=t.viewBox,n=t.scale,i=t.rotation,a=t.offsetX,o=void 0===a?0:a,s=t.offsetY,u=void 0===s?0:s,c=t.dontFlip,l=void 0!==c&&c
y(this,e),this.viewBox=r,this.scale=n,this.rotation=i,this.offsetX=o,this.offsetY=u
var f,h,d,p,v,g,m,b,_=(r[2]+r[0])/2,A=(r[3]+r[1])/2
switch(i=(i%=360)<0?i+360:i){case 180:f=-1,h=0,d=0,p=1
break
case 90:f=0,h=1,d=1,p=0
break
case 270:f=0,h=-1,d=-1,p=0
break
case 0:f=1,h=0,d=0,p=-1
break
default:throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.")}l&&(d=-d,p=-p),0===f?(v=Math.abs(A-r[1])*n+o,g=Math.abs(_-r[0])*n+u,m=Math.abs(r[3]-r[1])*n,b=Math.abs(r[2]-r[0])*n):(v=Math.abs(_-r[0])*n+o,g=Math.abs(A-r[1])*n+u,m=Math.abs(r[2]-r[0])*n,b=Math.abs(r[3]-r[1])*n),this.transform=[f*n,h*n,d*n,p*n,v-f*n*_-d*n*A,g-h*n*_-p*n*A],this.width=m,this.height=b}return m(e,[{key:"clone",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.scale,n=void 0===r?this.scale:r,i=t.rotation,a=void 0===i?this.rotation:i,o=t.offsetX,s=void 0===o?this.offsetX:o,u=t.offsetY,c=void 0===u?this.offsetY:u,l=t.dontFlip,f=void 0!==l&&l
return new e({viewBox:this.viewBox.slice(),scale:n,rotation:a,offsetX:s,offsetY:c,dontFlip:f})}},{key:"convertToViewportPoint",value:function(e,t){return a.Util.applyTransform([e,t],this.transform)}},{key:"convertToViewportRectangle",value:function(e){var t=a.Util.applyTransform([e[0],e[1]],this.transform),r=a.Util.applyTransform([e[2],e[3]],this.transform)
return[t[0],t[1],r[0],r[1]]}},{key:"convertToPdfPoint",value:function(e,t){return a.Util.applyInverseTransform([e,t],this.transform)}}]),e}()
t.PageViewport=C
var R=function(e){f(r,e)
var t=d(r)
function r(e,n){var i
return y(this,r),(i=t.call(this,e)).type=n,i}return r}(a.BaseException)
t.RenderingCancelledException=R
var P={NONE:0,SELF:1,BLANK:2,PARENT:3,TOP:4}
t.LinkTarget=P
var T,E=function(){function e(){y(this,e),this.started=Object.create(null),this.times=[]}return m(e,[{key:"time",value:function(e){e in this.started&&(0,a.warn)("Timer is already running for ".concat(e)),this.started[e]=Date.now()}},{key:"timeEnd",value:function(e){e in this.started||(0,a.warn)("Timer has not been started for ".concat(e)),this.times.push({name:e,start:this.started[e],end:Date.now()}),delete this.started[e]}},{key:"toString",value:function(){var e,t=[],r=0,n=o(this.times)
try{for(n.s();!(e=n.n()).done;){var i=e.value.name
i.length>r&&(r=i.length)}}catch(l){n.e(l)}finally{n.f()}var a,s=o(this.times)
try{for(s.s();!(a=s.n()).done;){var u=a.value,c=u.end-u.start
t.push("".concat(u.name.padEnd(r)," ").concat(c,"ms\n"))}}catch(l){s.e(l)}finally{s.f()}return t.join("")}}]),e}()
function O(){return"undefined"!=typeof fetch&&"undefined"!=typeof Response&&"body"in Response.prototype&&"undefined"!=typeof ReadableStream}function F(e,t){try{var r=(t?new URL(e,t):new URL(e)).protocol
return"http:"===r||"https:"===r}catch(n){return!1}}t.StatTimer=E
var L=function(){function e(){y(this,e)}return m(e,null,[{key:"toDateObject",value:function(e){if(!e||!(0,a.isString)(e))return null
T||(T=new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"))
var t=T.exec(e)
if(!t)return null
var r=parseInt(t[1],10),n=parseInt(t[2],10)
n=n>=1&&n<=12?n-1:0
var i=parseInt(t[3],10)
i=i>=1&&i<=31?i:1
var o=parseInt(t[4],10)
o=o>=0&&o<=23?o:0
var s=parseInt(t[5],10)
s=s>=0&&s<=59?s:0
var u=parseInt(t[6],10)
u=u>=0&&u<=59?u:0
var c=t[7]||"Z",l=parseInt(t[8],10)
l=l>=0&&l<=23?l:0
var f=parseInt(t[9],10)||0
return f=f>=0&&f<=59?f:0,"-"===c?(o+=l,s+=f):"+"===c&&(o-=l,s-=f),new Date(Date.UTC(r,n,i,o,s,u))}}]),e}()
t.PDFDateString=L},function(e,t,r){"use strict"
e.exports=r(3)},function(e,t,r){"use strict";(function(e){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var r=function(e){var r,n=Object.prototype,i=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag"
function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(F){c=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var i=t&&t.prototype instanceof g?t:g,a=Object.create(i.prototype),o=new T(n||[])
return a._invoke=function(e,t,r){var n=h
return function(i,a){if(n===p)throw new Error("Generator is already running")
if(n===v){if("throw"===i)throw a
return O()}for(r.method=i,r.arg=a;;){var o=r.delegate
if(o){var s=C(o,r)
if(s){if(s===y)continue
return s}}if("next"===r.method)r.sent=r._sent=r.arg
else if("throw"===r.method){if(n===h)throw n=v,r.arg
r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg)
n=p
var u=f(e,t,r)
if("normal"===u.type){if(n=r.done?v:d,u.arg===y)continue
return{value:u.arg,done:r.done}}"throw"===u.type&&(n=v,r.method="throw",r.arg=u.arg)}}}(e,r,o),a}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(F){return{type:"throw",arg:F}}}e.wrap=l
var h="suspendedStart",d="suspendedYield",p="executing",v="completed",y={}
function g(){}function m(){}function b(){}var _={}
_[o]=function(){return this}
var A=Object.getPrototypeOf,S=A&&A(A(E([])))
S&&S!==n&&i.call(S,o)&&(_=S)
var w=b.prototype=g.prototype=Object.create(_)
function k(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,r){function n(a,o,s,u){var c=f(e[a],e,o)
if("throw"!==c.type){var l=c.arg,h=l.value
return h&&"object"===t(h)&&i.call(h,"__await")?r.resolve(h.__await).then((function(e){n("next",e,s,u)}),(function(e){n("throw",e,s,u)})):r.resolve(h).then((function(e){l.value=e,s(l)}),(function(e){return n("throw",e,s,u)}))}u(c.arg)}var a
this._invoke=function(e,t){function i(){return new r((function(r,i){n(e,t,r,i)}))}return a=a?a.then(i,i):i()}}function C(e,t){var n=e.iterator[t.method]
if(n===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=r,C(e,t),"throw"===t.method))return y
t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var i=f(n,e.iterator,t.arg)
if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,y
var a=i.arg
return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=r),t.delegate=null,y):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,y)}function R(e){var t={tryLoc:e[0]}
1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{}
t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(R,this),this.reset(!0)}function E(e){if(e){var t=e[o]
if(t)return t.call(e)
if("function"==typeof e.next)return e
if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(i.call(e,n))return t.value=e[n],t.done=!1,t
return t.value=r,t.done=!0,t}
return a.next=a}}return{next:O}}function O(){return{value:r,done:!0}}return m.prototype=w.constructor=b,b.constructor=m,m.displayName=c(b,u,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor
return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,c(e,u,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},k(x.prototype),x.prototype[s]=function(){return this},e.AsyncIterator=x,e.async=function(t,r,n,i,a){void 0===a&&(a=Promise)
var o=new x(l(t,r,n,i),a)
return e.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},k(w),c(w,u,"Generator"),w[o]=function(){return this},w.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[]
for(var r in e)t.push(r)
return t.reverse(),function r(){for(;t.length;){var n=t.pop()
if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=E,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(P),!e)for(var t in this)"t"===t.charAt(0)&&i.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=r)},stop:function(){this.done=!0
var e=this.tryEntries[0].completion
if("throw"===e.type)throw e.arg
return this.rval},dispatchException:function(e){if(this.done)throw e
var t=this
function n(n,i){return s.type="throw",s.arg=e,t.next=n,i&&(t.method="next",t.arg=r),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion
if("root"===o.tryLoc)return n("end")
if(o.tryLoc<=this.prev){var u=i.call(o,"catchLoc"),c=i.call(o,"finallyLoc")
if(u&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)
if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally")
if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r]
if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n
break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null)
var o=a?a.completion:{}
return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg
return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t]
if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),P(r),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t]
if(r.tryLoc===e){var n=r.completion
if("throw"===n.type){var i=n.arg
P(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:E(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=r),y}},e}("object"===t(e)?e.exports:{})
try{regeneratorRuntime=r}catch(n){Function("r","regeneratorRuntime = r")(r)}}).call(this,r(4)(e))},function(e,t,r){"use strict"
e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,r){"use strict"
function n(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=l(e)
if(t){var i=l(this).constructor
r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments)
return c(this,r)}}function c(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.arrayByteLength=R,t.arraysToBytes=function(e){var t=e.length
if(1===t&&e[0]instanceof Uint8Array)return e[0]
for(var r=0,n=0;n<t;n++)r+=R(e[n])
for(var i=0,a=new Uint8Array(r),o=0;o<t;o++){var s=e[o]
s instanceof Uint8Array||(s="string"==typeof s?C(s):new Uint8Array(s))
var u=s.byteLength
a.set(s,i),i+=u}return a},t.assert=v,t.bytesToString=function(e){v(null!==e&&"object"===i(e)&&void 0!==e.length,"Invalid argument for bytesToString")
var t=e.length,r=8192
if(t<r)return String.fromCharCode.apply(null,e)
for(var n=[],a=0;a<t;a+=r){var o=Math.min(a+r,t),s=e.subarray(a,o)
n.push(String.fromCharCode.apply(null,s))}return n.join("")},t.createPromiseCapability=function(){var e=Object.create(null),t=!1
return Object.defineProperty(e,"settled",{get:function(){return t}}),e.promise=new Promise((function(r,n){e.resolve=function(e){t=!0,r(e)},e.reject=function(e){t=!0,n(e)}})),e},t.escapeString=function(e){return e.replace(/([\(\)\\])/g,"\\$1")},t.getModificationDate=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date(Date.now()),t=[e.getUTCFullYear().toString(),(e.getUTCMonth()+1).toString().padStart(2,"0"),(e.getUTCDate()+1).toString().padStart(2,"0"),e.getUTCHours().toString().padStart(2,"0"),e.getUTCMinutes().toString().padStart(2,"0"),e.getUTCSeconds().toString().padStart(2,"0")]
return t.join("")},t.getVerbosityLevel=function(){return h},t.info=function(e){h>=f.INFOS&&console.log("Info: ".concat(e))},t.isArrayBuffer=function(e){return"object"===i(e)&&null!==e&&void 0!==e.byteLength},t.isArrayEqual=function(e,t){if(e.length!==t.length)return!1
return e.every((function(e,r){return e===t[r]}))},t.isBool=function(e){return"boolean"==typeof e},t.isNum=function(e){return"number"==typeof e},t.isString=function(e){return"string"==typeof e},t.isSameOrigin=function(e,t){var r
try{if(!(r=new URL(e)).origin||"null"===r.origin)return!1}catch(i){return!1}var n=new URL(t,r)
return r.origin===n.origin},t.createValidAbsoluteUrl=function(e,t){if(!e)return null
try{var r=t?new URL(e,t):new URL(e)
if(function(e){if(!e)return!1
switch(e.protocol){case"http:":case"https:":case"ftp:":case"mailto:":case"tel:":return!0
default:return!1}}(r))return r}catch(n){}return null},t.removeNullCharacters=function(e){if("string"!=typeof e)return d("The argument for removeNullCharacters must be a string."),e
return e.replace(x,"")},t.setVerbosityLevel=function(e){Number.isInteger(e)&&(h=e)},t.shadow=y,t.string32=function(e){return String.fromCharCode(e>>24&255,e>>16&255,e>>8&255,255&e)},t.stringToBytes=C,t.stringToPDFString=function(e){var t=e.length,r=[]
if("þ"===e[0]&&"ÿ"===e[1])for(var n=2;n<t;n+=2)r.push(String.fromCharCode(e.charCodeAt(n)<<8|e.charCodeAt(n+1)))
else if("ÿ"===e[0]&&"þ"===e[1])for(var i=2;i<t;i+=2)r.push(String.fromCharCode(e.charCodeAt(i+1)<<8|e.charCodeAt(i)))
else for(var a=0;a<t;++a){var o=F[e.charCodeAt(a)]
r.push(o?String.fromCharCode(o):e.charAt(a))}return r.join("")},t.stringToUTF8String=function(e){return decodeURIComponent(escape(e))},t.utf8StringToString=function(e){return unescape(encodeURIComponent(e))},t.warn=d,t.unreachable=p,t.IsEvalSupportedCached=t.IsLittleEndianCached=t.createObjectURL=t.FormatError=t.Util=t.UnknownErrorException=t.UnexpectedResponseException=t.TextRenderingMode=t.StreamType=t.PermissionFlag=t.PasswordResponses=t.PasswordException=t.MissingPDFException=t.InvalidPDFException=t.AbortException=t.CMapCompressionType=t.ImageKind=t.FontType=t.AnnotationType=t.AnnotationStateModelType=t.AnnotationReviewState=t.AnnotationReplyType=t.AnnotationMarkedState=t.AnnotationFlag=t.AnnotationFieldFlag=t.AnnotationBorderStyleType=t.UNSUPPORTED_FEATURES=t.VerbosityLevel=t.OPS=t.IDENTITY_MATRIX=t.FONT_IDENTITY_MATRIX=t.BaseException=void 0,r(6)
t.IDENTITY_MATRIX=[1,0,0,1,0,0]
t.FONT_IDENTITY_MATRIX=[.001,0,0,.001,0,0]
t.PermissionFlag={PRINT:4,MODIFY_CONTENTS:8,COPY:16,MODIFY_ANNOTATIONS:32,FILL_INTERACTIVE_FORMS:256,COPY_FOR_ACCESSIBILITY:512,ASSEMBLE:1024,PRINT_HIGH_QUALITY:2048}
t.TextRenderingMode={FILL:0,STROKE:1,FILL_STROKE:2,INVISIBLE:3,FILL_ADD_TO_PATH:4,STROKE_ADD_TO_PATH:5,FILL_STROKE_ADD_TO_PATH:6,ADD_TO_PATH:7,FILL_STROKE_MASK:3,ADD_TO_PATH_FLAG:4}
t.ImageKind={GRAYSCALE_1BPP:1,RGB_24BPP:2,RGBA_32BPP:3}
t.AnnotationType={TEXT:1,LINK:2,FREETEXT:3,LINE:4,SQUARE:5,CIRCLE:6,POLYGON:7,POLYLINE:8,HIGHLIGHT:9,UNDERLINE:10,SQUIGGLY:11,STRIKEOUT:12,STAMP:13,CARET:14,INK:15,POPUP:16,FILEATTACHMENT:17,SOUND:18,MOVIE:19,WIDGET:20,SCREEN:21,PRINTERMARK:22,TRAPNET:23,WATERMARK:24,THREED:25,REDACT:26}
t.AnnotationStateModelType={MARKED:"Marked",REVIEW:"Review"}
t.AnnotationMarkedState={MARKED:"Marked",UNMARKED:"Unmarked"}
t.AnnotationReviewState={ACCEPTED:"Accepted",REJECTED:"Rejected",CANCELLED:"Cancelled",COMPLETED:"Completed",NONE:"None"}
t.AnnotationReplyType={GROUP:"Group",REPLY:"R"}
t.AnnotationFlag={INVISIBLE:1,HIDDEN:2,PRINT:4,NOZOOM:8,NOROTATE:16,NOVIEW:32,READONLY:64,LOCKED:128,TOGGLENOVIEW:256,LOCKEDCONTENTS:512}
t.AnnotationFieldFlag={READONLY:1,REQUIRED:2,NOEXPORT:4,MULTILINE:4096,PASSWORD:8192,NOTOGGLETOOFF:16384,RADIO:32768,PUSHBUTTON:65536,COMBO:131072,EDIT:262144,SORT:524288,FILESELECT:1048576,MULTISELECT:2097152,DONOTSPELLCHECK:4194304,DONOTSCROLL:8388608,COMB:16777216,RICHTEXT:33554432,RADIOSINUNISON:33554432,COMMITONSELCHANGE:67108864}
t.AnnotationBorderStyleType={SOLID:1,DASHED:2,BEVELED:3,INSET:4,UNDERLINE:5}
t.StreamType={UNKNOWN:"UNKNOWN",FLATE:"FLATE",LZW:"LZW",DCT:"DCT",JPX:"JPX",JBIG:"JBIG",A85:"A85",AHX:"AHX",CCF:"CCF",RLX:"RLX"}
t.FontType={UNKNOWN:"UNKNOWN",TYPE1:"TYPE1",TYPE1C:"TYPE1C",CIDFONTTYPE0:"CIDFONTTYPE0",CIDFONTTYPE0C:"CIDFONTTYPE0C",TRUETYPE:"TRUETYPE",CIDFONTTYPE2:"CIDFONTTYPE2",TYPE3:"TYPE3",OPENTYPE:"OPENTYPE",TYPE0:"TYPE0",MMTYPE1:"MMTYPE1"}
var f={ERRORS:0,WARNINGS:1,INFOS:5}
t.VerbosityLevel=f
t.CMapCompressionType={NONE:0,BINARY:1,STREAM:2}
t.OPS={dependency:1,setLineWidth:2,setLineCap:3,setLineJoin:4,setMiterLimit:5,setDash:6,setRenderingIntent:7,setFlatness:8,setGState:9,save:10,restore:11,transform:12,moveTo:13,lineTo:14,curveTo:15,curveTo2:16,curveTo3:17,closePath:18,rectangle:19,stroke:20,closeStroke:21,fill:22,eoFill:23,fillStroke:24,eoFillStroke:25,closeFillStroke:26,closeEOFillStroke:27,endPath:28,clip:29,eoClip:30,beginText:31,endText:32,setCharSpacing:33,setWordSpacing:34,setHScale:35,setLeading:36,setFont:37,setTextRenderingMode:38,setTextRise:39,moveText:40,setLeadingMoveText:41,setTextMatrix:42,nextLine:43,showText:44,showSpacedText:45,nextLineShowText:46,nextLineSetSpacingShowText:47,setCharWidth:48,setCharWidthAndBounds:49,setStrokeColorSpace:50,setFillColorSpace:51,setStrokeColor:52,setStrokeColorN:53,setFillColor:54,setFillColorN:55,setStrokeGray:56,setFillGray:57,setStrokeRGBColor:58,setFillRGBColor:59,setStrokeCMYKColor:60,setFillCMYKColor:61,shadingFill:62,beginInlineImage:63,beginImageData:64,endInlineImage:65,paintXObject:66,markPoint:67,markPointProps:68,beginMarkedContent:69,beginMarkedContentProps:70,endMarkedContent:71,beginCompat:72,endCompat:73,paintFormXObjectBegin:74,paintFormXObjectEnd:75,beginGroup:76,endGroup:77,beginAnnotations:78,endAnnotations:79,beginAnnotation:80,endAnnotation:81,paintJpegXObject:82,paintImageMaskXObject:83,paintImageMaskXObjectGroup:84,paintImageXObject:85,paintInlineImageXObject:86,paintInlineImageXObjectGroup:87,paintImageXObjectRepeat:88,paintImageMaskXObjectRepeat:89,paintSolidColorImageMask:90,constructPath:91}
t.UNSUPPORTED_FEATURES={unknown:"unknown",forms:"forms",javaScript:"javaScript",smask:"smask",shadingPattern:"shadingPattern",font:"font",errorTilingPattern:"errorTilingPattern",errorExtGState:"errorExtGState",errorXObject:"errorXObject",errorFontLoadType3:"errorFontLoadType3",errorFontState:"errorFontState",errorFontMissing:"errorFontMissing",errorFontTranslate:"errorFontTranslate",errorColorSpace:"errorColorSpace",errorOperatorList:"errorOperatorList",errorFontToUnicode:"errorFontToUnicode",errorFontLoadNative:"errorFontLoadNative",errorFontGetPath:"errorFontGetPath",errorMarkedContent:"errorMarkedContent"}
t.PasswordResponses={NEED_PASSWORD:1,INCORRECT_PASSWORD:2}
var h=f.WARNINGS
function d(e){h>=f.WARNINGS&&console.log("Warning: ".concat(e))}function p(e){throw new Error(e)}function v(e,t){e||p(t)}function y(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!1}),r}var g=function(){function e(t){this.constructor===e&&p("Cannot initialize BaseException."),this.message=t,this.name=this.constructor.name}return e.prototype=new Error,e.constructor=e,e}()
t.BaseException=g
var m=function(e){o(r,e)
var t=u(r)
function r(e,n){var i
return a(this,r),(i=t.call(this,e)).code=n,i}return r}(g)
t.PasswordException=m
var b=function(e){o(r,e)
var t=u(r)
function r(e,n){var i
return a(this,r),(i=t.call(this,e)).details=n,i}return r}(g)
t.UnknownErrorException=b
var _=function(e){o(r,e)
var t=u(r)
function r(){return a(this,r),t.apply(this,arguments)}return r}(g)
t.InvalidPDFException=_
var A=function(e){o(r,e)
var t=u(r)
function r(){return a(this,r),t.apply(this,arguments)}return r}(g)
t.MissingPDFException=A
var S=function(e){o(r,e)
var t=u(r)
function r(e,n){var i
return a(this,r),(i=t.call(this,e)).status=n,i}return r}(g)
t.UnexpectedResponseException=S
var w=function(e){o(r,e)
var t=u(r)
function r(){return a(this,r),t.apply(this,arguments)}return r}(g)
t.FormatError=w
var k=function(e){o(r,e)
var t=u(r)
function r(){return a(this,r),t.apply(this,arguments)}return r}(g)
t.AbortException=k
var x=/\x00/g
function C(e){v("string"==typeof e,"Invalid argument for stringToBytes")
for(var t=e.length,r=new Uint8Array(t),n=0;n<t;++n)r[n]=255&e.charCodeAt(n)
return r}function R(e){return void 0!==e.length?e.length:(v(void 0!==e.byteLength,"arrayByteLength - invalid argument."),e.byteLength)}var P={get value(){return y(this,"value",((e=new Uint8Array(4))[0]=1,1===new Uint32Array(e.buffer,0,1)[0]))
var e}}
t.IsLittleEndianCached=P
var T={get value(){return y(this,"value",function(){try{return new Function(""),!0}catch(e){return!1}}())}}
t.IsEvalSupportedCached=T
var E=["rgb(",0,",",0,",",0,")"],O=function(){function e(){a(this,e)}var t,r,i
return t=e,i=[{key:"makeCssRgb",value:function(e,t,r){return E[1]=e,E[3]=t,E[5]=r,E.join("")}},{key:"transform",value:function(e,t){return[e[0]*t[0]+e[2]*t[1],e[1]*t[0]+e[3]*t[1],e[0]*t[2]+e[2]*t[3],e[1]*t[2]+e[3]*t[3],e[0]*t[4]+e[2]*t[5]+e[4],e[1]*t[4]+e[3]*t[5]+e[5]]}},{key:"applyTransform",value:function(e,t){return[e[0]*t[0]+e[1]*t[2]+t[4],e[0]*t[1]+e[1]*t[3]+t[5]]}},{key:"applyInverseTransform",value:function(e,t){var r=t[0]*t[3]-t[1]*t[2]
return[(e[0]*t[3]-e[1]*t[2]+t[2]*t[5]-t[4]*t[3])/r,(-e[0]*t[1]+e[1]*t[0]+t[4]*t[1]-t[5]*t[0])/r]}},{key:"getAxialAlignedBoundingBox",value:function(t,r){var n=e.applyTransform(t,r),i=e.applyTransform(t.slice(2,4),r),a=e.applyTransform([t[0],t[3]],r),o=e.applyTransform([t[2],t[1]],r)
return[Math.min(n[0],i[0],a[0],o[0]),Math.min(n[1],i[1],a[1],o[1]),Math.max(n[0],i[0],a[0],o[0]),Math.max(n[1],i[1],a[1],o[1])]}},{key:"inverseTransform",value:function(e){var t=e[0]*e[3]-e[1]*e[2]
return[e[3]/t,-e[1]/t,-e[2]/t,e[0]/t,(e[2]*e[5]-e[4]*e[3])/t,(e[4]*e[1]-e[5]*e[0])/t]}},{key:"apply3dTransform",value:function(e,t){return[e[0]*t[0]+e[1]*t[1]+e[2]*t[2],e[3]*t[0]+e[4]*t[1]+e[5]*t[2],e[6]*t[0]+e[7]*t[1]+e[8]*t[2]]}},{key:"singularValueDecompose2dScale",value:function(e){var t=[e[0],e[2],e[1],e[3]],r=e[0]*t[0]+e[1]*t[2],n=e[0]*t[1]+e[1]*t[3],i=e[2]*t[0]+e[3]*t[2],a=e[2]*t[1]+e[3]*t[3],o=(r+a)/2,s=Math.sqrt((r+a)*(r+a)-4*(r*a-i*n))/2,u=o+s||1,c=o-s||1
return[Math.sqrt(u),Math.sqrt(c)]}},{key:"normalizeRect",value:function(e){var t=e.slice(0)
return e[0]>e[2]&&(t[0]=e[2],t[2]=e[0]),e[1]>e[3]&&(t[1]=e[3],t[3]=e[1]),t}},{key:"intersect",value:function(t,r){function n(e,t){return e-t}var i=[t[0],t[2],r[0],r[2]].sort(n),a=[t[1],t[3],r[1],r[3]].sort(n),o=[]
return t=e.normalizeRect(t),r=e.normalizeRect(r),i[0]===t[0]&&i[1]===r[0]||i[0]===r[0]&&i[1]===t[0]?(o[0]=i[1],o[2]=i[2],a[0]===t[1]&&a[1]===r[1]||a[0]===r[1]&&a[1]===t[1]?(o[1]=a[1],o[3]=a[2],o):null):null}}],(r=null)&&n(t.prototype,r),i&&n(t,i),e}()
t.Util=O
var F=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,728,711,710,729,733,731,730,732,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8226,8224,8225,8230,8212,8211,402,8260,8249,8250,8722,8240,8222,8220,8221,8216,8217,8218,8482,64257,64258,321,338,352,376,381,305,322,339,353,382,0,8364]
var L,I=(L="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2]
if(!r&&URL.createObjectURL){var n=new Blob([e],{type:t})
return URL.createObjectURL(n)}for(var i="data:".concat(t,";base64,"),a=0,o=e.length;a<o;a+=3){var s=255&e[a],u=255&e[a+1],c=255&e[a+2],l=s>>2,f=(3&s)<<4|u>>4,h=a+1<o?(15&u)<<2|c>>6:64,d=a+2<o?63&c:64
i+=L[l]+L[f]+L[h]+L[d]}return i})
t.createObjectURL=I},function(e,t,r){"use strict"
var n=r(7)
function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}if("undefined"==typeof globalThis||!globalThis._pdfjsCompatibilityChecked){"undefined"!=typeof globalThis&&globalThis.Math===Math||(globalThis=r(8)),globalThis._pdfjsCompatibilityChecked=!0
var a="object"===("undefined"==typeof window?"undefined":i(window))&&"object"===("undefined"==typeof document?"undefined":i(document)),o="undefined"!=typeof navigator&&navigator.userAgent||"",s=/Trident/.test(o)
!globalThis.btoa&&n.isNodeJS&&(globalThis.btoa=function(e){return Buffer.from(e,"binary").toString("base64")}),!globalThis.atob&&n.isNodeJS&&(globalThis.atob=function(e){return Buffer.from(e,"base64").toString("binary")}),a&&void 0===Element.prototype.remove&&(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)}),function(){if(a&&!n.isNodeJS){var e=document.createElement("div")
if(e.classList.add("testOne","testTwo"),!0!==e.classList.contains("testOne")||!0!==e.classList.contains("testTwo")){var t=DOMTokenList.prototype.add,r=DOMTokenList.prototype.remove
DOMTokenList.prototype.add=function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n]
for(var i=0,a=r;i<a.length;i++){var o=a[i]
t.call(this,o)}},DOMTokenList.prototype.remove=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
for(var i=0,a=t;i<a.length;i++){var o=a[i]
r.call(this,o)}}}}}(),a&&!n.isNodeJS&&!1!==document.createElement("div").classList.toggle("test",0)&&(DOMTokenList.prototype.toggle=function(e){var t=arguments.length>1?!!arguments[1]:!this.contains(e)
return this[t?"add":"remove"](e),t}),function(){if(a&&s){var e=window.history.pushState,t=window.history.replaceState
window.history.pushState=function(t,r,n){var i=void 0===n?[t,r]:[t,r,n]
e.apply(this,i)},window.history.replaceState=function(e,r,n){var i=void 0===n?[e,r]:[e,r,n]
t.apply(this,i)}}}(),String.prototype.startsWith||r(53),String.prototype.endsWith||r(64),String.prototype.includes||r(66),Array.prototype.includes||r(68),Array.from||r(76),Object.assign||r(98),Object.fromEntries||r(101),Math.log2||(Math.log2=r(105)),Number.isNaN||(Number.isNaN=r(107)),Number.isInteger||(Number.isInteger=r(109)),Uint8Array.prototype.slice||r(112),globalThis.Promise&&globalThis.Promise.allSettled||(globalThis.Promise=r(117)),globalThis.URL=r(138),function(){var e=!1
if("undefined"!=typeof ReadableStream)try{new ReadableStream({start:function(e){e.close()}}),e=!0}catch(t){}e||(globalThis.ReadableStream=r(145).ReadableStream)}(),globalThis.Map&&globalThis.Map.prototype.entries||(globalThis.Map=r(146)),globalThis.Set&&globalThis.Set.prototype.entries||(globalThis.Set=r(153)),globalThis.WeakMap||(globalThis.WeakMap=r(155)),globalThis.WeakSet||(globalThis.WeakSet=r(161)),String.prototype.codePointAt||r(163),String.fromCodePoint||(String.fromCodePoint=r(165)),globalThis.Symbol||r(167),String.prototype.padStart||r(190),String.prototype.padEnd||r(195),Object.values||(Object.values=r(197))
Object.entries||(Object.entries=r(200))}},function(e,t,r){"use strict"
function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.isNodeJS=void 0
var i=!("object"!==("undefined"==typeof process?"undefined":n(process))||process+""!="[object process]"||process.versions.nw||process.versions.electron&&process.type&&"browser"!==process.type)
t.isNodeJS=i},function(e,t,r){r(9),e.exports=r(11)},function(e,t,r){r(10)({global:!0},{globalThis:r(11)})},function(e,t,r){var n=r(11),i=r(12).f,a=r(26),o=r(29),s=r(30),u=r(40),c=r(52)
e.exports=function(e,t){var r,l,f,h,d,p=e.target,v=e.global,y=e.stat
if(r=v?n:y?n[p]||s(p,{}):(n[p]||{}).prototype)for(l in t){if(h=t[l],f=e.noTargetGet?(d=i(r,l))&&d.value:r[l],!c(v?l:p+(y?".":"#")+l,e.forced)&&void 0!==f){if(typeof h==typeof f)continue
u(h,f)}(e.sham||f&&f.sham)&&a(h,"sham",!0),o(r,l,h,e)}}},function(e,t){var r=function(e){return e&&e.Math==Math&&e}
e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof global&&global)||Function("return this")()},function(e,t,r){var n=r(13),i=r(15),a=r(16),o=r(17),s=r(21),u=r(23),c=r(24),l=Object.getOwnPropertyDescriptor
t.f=n?l:function(e,t){if(e=o(e),t=s(t,!0),c)try{return l(e,t)}catch(r){}if(u(e,t))return a(!i.f.call(e,t),e[t])}},function(e,t,r){var n=r(14)
e.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},function(e,t,r){"use strict"
var n={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,a=i&&!n.call({1:2},1)
t.f=a?function(e){var t=i(this,e)
return!!t&&t.enumerable}:n},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,r){var n=r(18),i=r(20)
e.exports=function(e){return n(i(e))}},function(e,t,r){var n=r(14),i=r(19),a="".split
e.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==i(e)?a.call(e,""):Object(e)}:Object},function(e,t){var r={}.toString
e.exports=function(e){return r.call(e).slice(8,-1)}},function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on "+e)
return e}},function(e,t,r){var n=r(22)
e.exports=function(e,t){if(!n(e))return e
var r,i
if(t&&"function"==typeof(r=e.toString)&&!n(i=r.call(e)))return i
if("function"==typeof(r=e.valueOf)&&!n(i=r.call(e)))return i
if(!t&&"function"==typeof(r=e.toString)&&!n(i=r.call(e)))return i
throw TypeError("Can't convert object to primitive value")}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t){var r={}.hasOwnProperty
e.exports=function(e,t){return r.call(e,t)}},function(e,t,r){var n=r(13),i=r(14),a=r(25)
e.exports=!n&&!i((function(){return 7!=Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a}))},function(e,t,r){var n=r(11),i=r(22),a=n.document,o=i(a)&&i(a.createElement)
e.exports=function(e){return o?a.createElement(e):{}}},function(e,t,r){var n=r(13),i=r(27),a=r(16)
e.exports=n?function(e,t,r){return i.f(e,t,a(1,r))}:function(e,t,r){return e[t]=r,e}},function(e,t,r){var n=r(13),i=r(24),a=r(28),o=r(21),s=Object.defineProperty
t.f=n?s:function(e,t,r){if(a(e),t=o(t,!0),a(r),i)try{return s(e,t,r)}catch(n){}if("get"in r||"set"in r)throw TypeError("Accessors not supported")
return"value"in r&&(e[t]=r.value),e}},function(e,t,r){var n=r(22)
e.exports=function(e){if(!n(e))throw TypeError(String(e)+" is not an object")
return e}},function(e,t,r){var n=r(11),i=r(26),a=r(23),o=r(30),s=r(31),u=r(33),c=u.get,l=u.enforce,f=String(String).split("String");(e.exports=function(e,t,r,s){var u=!!s&&!!s.unsafe,c=!!s&&!!s.enumerable,h=!!s&&!!s.noTargetGet
"function"==typeof r&&("string"!=typeof t||a(r,"name")||i(r,"name",t),l(r).source=f.join("string"==typeof t?t:"")),e!==n?(u?!h&&e[t]&&(c=!0):delete e[t],c?e[t]=r:i(e,t,r)):c?e[t]=r:o(t,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&c(this).source||s(this)}))},function(e,t,r){var n=r(11),i=r(26)
e.exports=function(e,t){try{i(n,e,t)}catch(r){n[e]=t}return t}},function(e,t,r){var n=r(32),i=Function.toString
"function"!=typeof n.inspectSource&&(n.inspectSource=function(e){return i.call(e)}),e.exports=n.inspectSource},function(e,t,r){var n=r(11),i=r(30),a="__core-js_shared__",o=n[a]||i(a,{})
e.exports=o},function(e,t,r){var n,i,a,o=r(34),s=r(11),u=r(22),c=r(26),l=r(23),f=r(35),h=r(39),d=s.WeakMap
if(o){var p=new d,v=p.get,y=p.has,g=p.set
n=function(e,t){return g.call(p,e,t),t},i=function(e){return v.call(p,e)||{}},a=function(e){return y.call(p,e)}}else{var m=f("state")
h[m]=!0,n=function(e,t){return c(e,m,t),t},i=function(e){return l(e,m)?e[m]:{}},a=function(e){return l(e,m)}}e.exports={set:n,get:i,has:a,enforce:function(e){return a(e)?i(e):n(e,{})},getterFor:function(e){return function(t){var r
if(!u(t)||(r=i(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required")
return r}}}},function(e,t,r){var n=r(11),i=r(31),a=n.WeakMap
e.exports="function"==typeof a&&/native code/.test(i(a))},function(e,t,r){var n=r(36),i=r(38),a=n("keys")
e.exports=function(e){return a[e]||(a[e]=i(e))}},function(e,t,r){var n=r(37),i=r(32);(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.6.5",mode:n?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(e,t){e.exports=!1},function(e,t){var r=0,n=Math.random()
e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++r+n).toString(36)}},function(e,t){e.exports={}},function(e,t,r){var n=r(23),i=r(41),a=r(12),o=r(27)
e.exports=function(e,t){for(var r=i(t),s=o.f,u=a.f,c=0;c<r.length;c++){var l=r[c]
n(e,l)||s(e,l,u(t,l))}}},function(e,t,r){var n=r(42),i=r(44),a=r(51),o=r(28)
e.exports=n("Reflect","ownKeys")||function(e){var t=i.f(o(e)),r=a.f
return r?t.concat(r(e)):t}},function(e,t,r){var n=r(43),i=r(11),a=function(e){return"function"==typeof e?e:void 0}
e.exports=function(e,t){return arguments.length<2?a(n[e])||a(i[e]):n[e]&&n[e][t]||i[e]&&i[e][t]}},function(e,t,r){var n=r(11)
e.exports=n},function(e,t,r){var n=r(45),i=r(50).concat("length","prototype")
t.f=Object.getOwnPropertyNames||function(e){return n(e,i)}},function(e,t,r){var n=r(23),i=r(17),a=r(46).indexOf,o=r(39)
e.exports=function(e,t){var r,s=i(e),u=0,c=[]
for(r in s)!n(o,r)&&n(s,r)&&c.push(r)
for(;t.length>u;)n(s,r=t[u++])&&(~a(c,r)||c.push(r))
return c}},function(e,t,r){var n=r(17),i=r(47),a=r(49),o=function(e){return function(t,r,o){var s,u=n(t),c=i(u.length),l=a(o,c)
if(e&&r!=r){for(;c>l;)if((s=u[l++])!=s)return!0}else for(;c>l;l++)if((e||l in u)&&u[l]===r)return e||l||0
return!e&&-1}}
e.exports={includes:o(!0),indexOf:o(!1)}},function(e,t,r){var n=r(48),i=Math.min
e.exports=function(e){return e>0?i(n(e),9007199254740991):0}},function(e,t){var r=Math.ceil,n=Math.floor
e.exports=function(e){return isNaN(e=+e)?0:(e>0?n:r)(e)}},function(e,t,r){var n=r(48),i=Math.max,a=Math.min
e.exports=function(e,t){var r=n(e)
return r<0?i(r+t,0):a(r,t)}},function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(e,t){t.f=Object.getOwnPropertySymbols},function(e,t,r){var n=r(14),i=/#|\.prototype\./,a=function(e,t){var r=s[o(e)]
return r==c||r!=u&&("function"==typeof t?n(t):!!t)},o=a.normalize=function(e){return String(e).replace(i,".").toLowerCase()},s=a.data={},u=a.NATIVE="N",c=a.POLYFILL="P"
e.exports=a},function(e,t,r){r(54)
var n=r(61)
e.exports=n("String","startsWith")},function(e,t,r){"use strict"
var n,i=r(10),a=r(12).f,o=r(47),s=r(55),u=r(20),c=r(60),l=r(37),f="".startsWith,h=Math.min,d=c("startsWith")
i({target:"String",proto:!0,forced:!!(l||d||(n=a(String.prototype,"startsWith"),!n||n.writable))&&!d},{startsWith:function(e){var t=String(u(this))
s(e)
var r=o(h(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e)
return f?f.call(t,n,r):t.slice(r,r+n.length)===n}})},function(e,t,r){var n=r(56)
e.exports=function(e){if(n(e))throw TypeError("The method doesn't accept regular expressions")
return e}},function(e,t,r){var n=r(22),i=r(19),a=r(57)("match")
e.exports=function(e){var t
return n(e)&&(void 0!==(t=e[a])?!!t:"RegExp"==i(e))}},function(e,t,r){var n=r(11),i=r(36),a=r(23),o=r(38),s=r(58),u=r(59),c=i("wks"),l=n.Symbol,f=u?l:l&&l.withoutSetter||o
e.exports=function(e){return a(c,e)||(s&&a(l,e)?c[e]=l[e]:c[e]=f("Symbol."+e)),c[e]}},function(e,t,r){var n=r(14)
e.exports=!!Object.getOwnPropertySymbols&&!n((function(){return!String(Symbol())}))},function(e,t,r){var n=r(58)
e.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(e,t,r){var n=r(57)("match")
e.exports=function(e){var t=/./
try{"/./"[e](t)}catch(r){try{return t[n]=!1,"/./"[e](t)}catch(i){}}return!1}},function(e,t,r){var n=r(11),i=r(62),a=Function.call
e.exports=function(e,t,r){return i(a,n[e].prototype[t],r)}},function(e,t,r){var n=r(63)
e.exports=function(e,t,r){if(n(e),void 0===t)return e
switch(r){case 0:return function(){return e.call(t)}
case 1:return function(r){return e.call(t,r)}
case 2:return function(r,n){return e.call(t,r,n)}
case 3:return function(r,n,i){return e.call(t,r,n,i)}}return function(){return e.apply(t,arguments)}}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function")
return e}},function(e,t,r){r(65)
var n=r(61)
e.exports=n("String","endsWith")},function(e,t,r){"use strict"
var n,i=r(10),a=r(12).f,o=r(47),s=r(55),u=r(20),c=r(60),l=r(37),f="".endsWith,h=Math.min,d=c("endsWith")
i({target:"String",proto:!0,forced:!!(l||d||(n=a(String.prototype,"endsWith"),!n||n.writable))&&!d},{endsWith:function(e){var t=String(u(this))
s(e)
var r=arguments.length>1?arguments[1]:void 0,n=o(t.length),i=void 0===r?n:h(o(r),n),a=String(e)
return f?f.call(t,a,i):t.slice(i-a.length,i)===a}})},function(e,t,r){r(67)
var n=r(61)
e.exports=n("String","includes")},function(e,t,r){"use strict"
var n=r(10),i=r(55),a=r(20)
n({target:"String",proto:!0,forced:!r(60)("includes")},{includes:function(e){return!!~String(a(this)).indexOf(i(e),arguments.length>1?arguments[1]:void 0)}})},function(e,t,r){r(69)
var n=r(61)
e.exports=n("Array","includes")},function(e,t,r){"use strict"
var n=r(10),i=r(46).includes,a=r(70)
n({target:"Array",proto:!0,forced:!r(75)("indexOf",{ACCESSORS:!0,1:0})},{includes:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("includes")},function(e,t,r){var n=r(57),i=r(71),a=r(27),o=n("unscopables"),s=Array.prototype
null==s[o]&&a.f(s,o,{configurable:!0,value:i(null)}),e.exports=function(e){s[o][e]=!0}},function(e,t,r){var n,i=r(28),a=r(72),o=r(50),s=r(39),u=r(74),c=r(25),l=r(35),f=l("IE_PROTO"),h=function(){},d=function(e){return"<script>"+e+"</"+"script>"},p=function(){try{n=document.domain&&new ActiveXObject("htmlfile")}catch(i){}var e,t
p=n?function(e){e.write(d("")),e.close()
var t=e.parentWindow.Object
return e=null,t}(n):((t=c("iframe")).style.display="none",u.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(d("document.F=Object")),e.close(),e.F)
for(var r=o.length;r--;)delete p.prototype[o[r]]
return p()}
s[f]=!0,e.exports=Object.create||function(e,t){var r
return null!==e?(h.prototype=i(e),r=new h,h.prototype=null,r[f]=e):r=p(),void 0===t?r:a(r,t)}},function(e,t,r){var n=r(13),i=r(27),a=r(28),o=r(73)
e.exports=n?Object.defineProperties:function(e,t){a(e)
for(var r,n=o(t),s=n.length,u=0;s>u;)i.f(e,r=n[u++],t[r])
return e}},function(e,t,r){var n=r(45),i=r(50)
e.exports=Object.keys||function(e){return n(e,i)}},function(e,t,r){var n=r(42)
e.exports=n("document","documentElement")},function(e,t,r){var n=r(13),i=r(14),a=r(23),o=Object.defineProperty,s={},u=function(e){throw e}
e.exports=function(e,t){if(a(s,e))return s[e]
t||(t={})
var r=[][e],c=!!a(t,"ACCESSORS")&&t.ACCESSORS,l=a(t,0)?t[0]:u,f=a(t,1)?t[1]:void 0
return s[e]=!!r&&!i((function(){if(c&&!n)return!0
var e={length:-1}
c?o(e,1,{enumerable:!0,get:u}):e[1]=1,r.call(e,l,f)}))}},function(e,t,r){r(77),r(89)
var n=r(43)
e.exports=n.Array.from},function(e,t,r){"use strict"
var n=r(78).charAt,i=r(33),a=r(79),o="String Iterator",s=i.set,u=i.getterFor(o)
a(String,"String",(function(e){s(this,{type:o,string:String(e),index:0})}),(function(){var e,t=u(this),r=t.string,i=t.index
return i>=r.length?{value:void 0,done:!0}:(e=n(r,i),t.index+=e.length,{value:e,done:!1})}))},function(e,t,r){var n=r(48),i=r(20),a=function(e){return function(t,r){var a,o,s=String(i(t)),u=n(r),c=s.length
return u<0||u>=c?e?"":void 0:(a=s.charCodeAt(u))<55296||a>56319||u+1===c||(o=s.charCodeAt(u+1))<56320||o>57343?e?s.charAt(u):a:e?s.slice(u,u+2):o-56320+(a-55296<<10)+65536}}
e.exports={codeAt:a(!1),charAt:a(!0)}},function(e,t,r){"use strict"
var n=r(10),i=r(80),a=r(82),o=r(87),s=r(85),u=r(26),c=r(29),l=r(57),f=r(37),h=r(86),d=r(81),p=d.IteratorPrototype,v=d.BUGGY_SAFARI_ITERATORS,y=l("iterator"),g="keys",m="values",b="entries",_=function(){return this}
e.exports=function(e,t,r,l,d,A,S){i(r,t,l)
var w,k,x,C=function(e){if(e===d&&O)return O
if(!v&&e in T)return T[e]
switch(e){case g:case m:case b:return function(){return new r(this,e)}}return function(){return new r(this)}},R=t+" Iterator",P=!1,T=e.prototype,E=T[y]||T["@@iterator"]||d&&T[d],O=!v&&E||C(d),F="Array"==t&&T.entries||E
if(F&&(w=a(F.call(new e)),p!==Object.prototype&&w.next&&(f||a(w)===p||(o?o(w,p):"function"!=typeof w[y]&&u(w,y,_)),s(w,R,!0,!0),f&&(h[R]=_))),d==m&&E&&E.name!==m&&(P=!0,O=function(){return E.call(this)}),f&&!S||T[y]===O||u(T,y,O),h[t]=O,d)if(k={values:C(m),keys:A?O:C(g),entries:C(b)},S)for(x in k)(v||P||!(x in T))&&c(T,x,k[x])
else n({target:t,proto:!0,forced:v||P},k)
return k}},function(e,t,r){"use strict"
var n=r(81).IteratorPrototype,i=r(71),a=r(16),o=r(85),s=r(86),u=function(){return this}
e.exports=function(e,t,r){var c=t+" Iterator"
return e.prototype=i(n,{next:a(1,r)}),o(e,c,!1,!0),s[c]=u,e}},function(e,t,r){"use strict"
var n,i,a,o=r(82),s=r(26),u=r(23),c=r(57),l=r(37),f=c("iterator"),h=!1;[].keys&&("next"in(a=[].keys())?(i=o(o(a)))!==Object.prototype&&(n=i):h=!0),null==n&&(n={}),l||u(n,f)||s(n,f,(function(){return this})),e.exports={IteratorPrototype:n,BUGGY_SAFARI_ITERATORS:h}},function(e,t,r){var n=r(23),i=r(83),a=r(35),o=r(84),s=a("IE_PROTO"),u=Object.prototype
e.exports=o?Object.getPrototypeOf:function(e){return e=i(e),n(e,s)?e[s]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?u:null}},function(e,t,r){var n=r(20)
e.exports=function(e){return Object(n(e))}},function(e,t,r){var n=r(14)
e.exports=!n((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},function(e,t,r){var n=r(27).f,i=r(23),a=r(57)("toStringTag")
e.exports=function(e,t,r){e&&!i(e=r?e:e.prototype,a)&&n(e,a,{configurable:!0,value:t})}},function(e,t){e.exports={}},function(e,t,r){var n=r(28),i=r(88)
e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,r={}
try{(e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(r,[]),t=r instanceof Array}catch(a){}return function(r,a){return n(r),i(a),t?e.call(r,a):r.__proto__=a,r}}():void 0)},function(e,t,r){var n=r(22)
e.exports=function(e){if(!n(e)&&null!==e)throw TypeError("Can't set "+String(e)+" as a prototype")
return e}},function(e,t,r){var n=r(10),i=r(90)
n({target:"Array",stat:!0,forced:!r(97)((function(e){Array.from(e)}))},{from:i})},function(e,t,r){"use strict"
var n=r(62),i=r(83),a=r(91),o=r(92),s=r(47),u=r(93),c=r(94)
e.exports=function(e){var t,r,l,f,h,d,p=i(e),v="function"==typeof this?this:Array,y=arguments.length,g=y>1?arguments[1]:void 0,m=void 0!==g,b=c(p),_=0
if(m&&(g=n(g,y>2?arguments[2]:void 0,2)),null==b||v==Array&&o(b))for(r=new v(t=s(p.length));t>_;_++)d=m?g(p[_],_):p[_],u(r,_,d)
else for(h=(f=b.call(p)).next,r=new v;!(l=h.call(f)).done;_++)d=m?a(f,g,[l.value,_],!0):l.value,u(r,_,d)
return r.length=_,r}},function(e,t,r){var n=r(28)
e.exports=function(e,t,r,i){try{return i?t(n(r)[0],r[1]):t(r)}catch(o){var a=e.return
throw void 0!==a&&n(a.call(e)),o}}},function(e,t,r){var n=r(57),i=r(86),a=n("iterator"),o=Array.prototype
e.exports=function(e){return void 0!==e&&(i.Array===e||o[a]===e)}},function(e,t,r){"use strict"
var n=r(21),i=r(27),a=r(16)
e.exports=function(e,t,r){var o=n(t)
o in e?i.f(e,o,a(0,r)):e[o]=r}},function(e,t,r){var n=r(95),i=r(86),a=r(57)("iterator")
e.exports=function(e){if(null!=e)return e[a]||e["@@iterator"]||i[n(e)]}},function(e,t,r){var n=r(96),i=r(19),a=r(57)("toStringTag"),o="Arguments"==i(function(){return arguments}())
e.exports=n?i:function(e){var t,r,n
return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=function(e,t){try{return e[t]}catch(r){}}(t=Object(e),a))?r:o?i(t):"Object"==(n=i(t))&&"function"==typeof t.callee?"Arguments":n}},function(e,t,r){var n={}
n[r(57)("toStringTag")]="z",e.exports="[object z]"===String(n)},function(e,t,r){var n=r(57)("iterator"),i=!1
try{var a=0,o={next:function(){return{done:!!a++}},return:function(){i=!0}}
o[n]=function(){return this},Array.from(o,(function(){throw 2}))}catch(s){}e.exports=function(e,t){if(!t&&!i)return!1
var r=!1
try{var a={}
a[n]=function(){return{next:function(){return{done:r=!0}}}},e(a)}catch(s){}return r}},function(e,t,r){r(99)
var n=r(43)
e.exports=n.Object.assign},function(e,t,r){var n=r(10),i=r(100)
n({target:"Object",stat:!0,forced:Object.assign!==i},{assign:i})},function(e,t,r){"use strict"
var n=r(13),i=r(14),a=r(73),o=r(51),s=r(15),u=r(83),c=r(18),l=Object.assign,f=Object.defineProperty
e.exports=!l||i((function(){if(n&&1!==l({b:1},l(f({},"a",{enumerable:!0,get:function(){f(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0
var e={},t={},r=Symbol(),i="abcdefghijklmnopqrst"
return e[r]=7,i.split("").forEach((function(e){t[e]=e})),7!=l({},e)[r]||a(l({},t)).join("")!=i}))?function(e,t){for(var r=u(e),i=arguments.length,l=1,f=o.f,h=s.f;i>l;)for(var d,p=c(arguments[l++]),v=f?a(p).concat(f(p)):a(p),y=v.length,g=0;y>g;)d=v[g++],n&&!h.call(p,d)||(r[d]=p[d])
return r}:l},function(e,t,r){r(102),r(103)
var n=r(43)
e.exports=n.Object.fromEntries},function(e,t,r){"use strict"
var n=r(17),i=r(70),a=r(86),o=r(33),s=r(79),u="Array Iterator",c=o.set,l=o.getterFor(u)
e.exports=s(Array,"Array",(function(e,t){c(this,{type:u,target:n(e),index:0,kind:t})}),(function(){var e=l(this),t=e.target,r=e.kind,n=e.index++
return!t||n>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==r?{value:n,done:!1}:"values"==r?{value:t[n],done:!1}:{value:[n,t[n]],done:!1}}),"values"),a.Arguments=a.Array,i("keys"),i("values"),i("entries")},function(e,t,r){var n=r(10),i=r(104),a=r(93)
n({target:"Object",stat:!0},{fromEntries:function(e){var t={}
return i(e,(function(e,r){a(t,e,r)}),void 0,!0),t}})},function(e,t,r){var n=r(28),i=r(92),a=r(47),o=r(62),s=r(94),u=r(91),c=function(e,t){this.stopped=e,this.result=t};(e.exports=function(e,t,r,l,f){var h,d,p,v,y,g,m,b=o(t,r,l?2:1)
if(f)h=e
else{if("function"!=typeof(d=s(e)))throw TypeError("Target is not iterable")
if(i(d)){for(p=0,v=a(e.length);v>p;p++)if((y=l?b(n(m=e[p])[0],m[1]):b(e[p]))&&y instanceof c)return y
return new c(!1)}h=d.call(e)}for(g=h.next;!(m=g.call(h)).done;)if("object"==typeof(y=u(h,b,m.value,l))&&y&&y instanceof c)return y
return new c(!1)}).stop=function(e){return new c(!0,e)}},function(e,t,r){r(106)
var n=r(43)
e.exports=n.Math.log2},function(e,t,r){var n=r(10),i=Math.log,a=Math.LN2
n({target:"Math",stat:!0},{log2:function(e){return i(e)/a}})},function(e,t,r){r(108)
var n=r(43)
e.exports=n.Number.isNaN},function(e,t,r){r(10)({target:"Number",stat:!0},{isNaN:function(e){return e!=e}})},function(e,t,r){r(110)
var n=r(43)
e.exports=n.Number.isInteger},function(e,t,r){r(10)({target:"Number",stat:!0},{isInteger:r(111)})},function(e,t,r){var n=r(22),i=Math.floor
e.exports=function(e){return!n(e)&&isFinite(e)&&i(e)===e}},function(e,t,r){r(113)},function(e,t,r){"use strict"
var n=r(114),i=r(116),a=r(14),o=n.aTypedArray,s=n.aTypedArrayConstructor,u=n.exportTypedArrayMethod,c=[].slice
u("slice",(function(e,t){for(var r=c.call(o(this),e,t),n=i(this,this.constructor),a=0,u=r.length,l=new(s(n))(u);u>a;)l[a]=r[a++]
return l}),a((function(){new Int8Array(1).slice()})))},function(e,t,r){"use strict"
var n,i=r(115),a=r(13),o=r(11),s=r(22),u=r(23),c=r(95),l=r(26),f=r(29),h=r(27).f,d=r(82),p=r(87),v=r(57),y=r(38),g=o.Int8Array,m=g&&g.prototype,b=o.Uint8ClampedArray,_=b&&b.prototype,A=g&&d(g),S=m&&d(m),w=Object.prototype,k=w.isPrototypeOf,x=v("toStringTag"),C=y("TYPED_ARRAY_TAG"),R=i&&!!p&&"Opera"!==c(o.opera),P=!1,T={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},E=function(e){return s(e)&&u(T,c(e))}
for(n in T)o[n]||(R=!1)
if((!R||"function"!=typeof A||A===Function.prototype)&&(A=function(){throw TypeError("Incorrect invocation")},R))for(n in T)o[n]&&p(o[n],A)
if((!R||!S||S===w)&&(S=A.prototype,R))for(n in T)o[n]&&p(o[n].prototype,S)
if(R&&d(_)!==S&&p(_,S),a&&!u(S,x))for(n in P=!0,h(S,x,{get:function(){return s(this)?this[C]:void 0}}),T)o[n]&&l(o[n],C,n)
e.exports={NATIVE_ARRAY_BUFFER_VIEWS:R,TYPED_ARRAY_TAG:P&&C,aTypedArray:function(e){if(E(e))return e
throw TypeError("Target is not a typed array")},aTypedArrayConstructor:function(e){if(p){if(k.call(A,e))return e}else for(var t in T)if(u(T,n)){var r=o[t]
if(r&&(e===r||k.call(r,e)))return e}throw TypeError("Target is not a typed array constructor")},exportTypedArrayMethod:function(e,t,r){if(a){if(r)for(var n in T){var i=o[n]
i&&u(i.prototype,e)&&delete i.prototype[e]}S[e]&&!r||f(S,e,r?t:R&&m[e]||t)}},exportTypedArrayStaticMethod:function(e,t,r){var n,i
if(a){if(p){if(r)for(n in T)(i=o[n])&&u(i,e)&&delete i[e]
if(A[e]&&!r)return
try{return f(A,e,r?t:R&&g[e]||t)}catch(s){}}for(n in T)!(i=o[n])||i[e]&&!r||f(i,e,t)}},isView:function(e){var t=c(e)
return"DataView"===t||u(T,t)},isTypedArray:E,TypedArray:A,TypedArrayPrototype:S}},function(e,t){e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},function(e,t,r){var n=r(28),i=r(63),a=r(57)("species")
e.exports=function(e,t){var r,o=n(e).constructor
return void 0===o||null==(r=n(o)[a])?t:i(r)}},function(e,t,r){r(118),r(77),r(120),r(122),r(136),r(137)
var n=r(43)
e.exports=n.Promise},function(e,t,r){var n=r(96),i=r(29),a=r(119)
n||i(Object.prototype,"toString",a,{unsafe:!0})},function(e,t,r){"use strict"
var n=r(96),i=r(95)
e.exports=n?{}.toString:function(){return"[object "+i(this)+"]"}},function(e,t,r){var n=r(11),i=r(121),a=r(102),o=r(26),s=r(57),u=s("iterator"),c=s("toStringTag"),l=a.values
for(var f in i){var h=n[f],d=h&&h.prototype
if(d){if(d[u]!==l)try{o(d,u,l)}catch(v){d[u]=l}if(d[c]||o(d,c,f),i[f])for(var p in a)if(d[p]!==a[p])try{o(d,p,a[p])}catch(v){d[p]=a[p]}}}},function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(e,t,r){"use strict"
var n,i,a,o,s=r(10),u=r(37),c=r(11),l=r(42),f=r(123),h=r(29),d=r(124),p=r(85),v=r(125),y=r(22),g=r(63),m=r(126),b=r(19),_=r(31),A=r(104),S=r(97),w=r(116),k=r(127).set,x=r(130),C=r(131),R=r(133),P=r(132),T=r(134),E=r(33),O=r(52),F=r(57),L=r(135),I=F("species"),M="Promise",j=E.get,D=E.set,N=E.getterFor(M),q=f,U=c.TypeError,W=c.document,B=c.process,G=l("fetch"),z=P.f,H=z,Y="process"==b(B),X=!!(W&&W.createEvent&&c.dispatchEvent),V="unhandledrejection",Q=O(M,(function(){if(!(_(q)!==String(q))){if(66===L)return!0
if(!Y&&"function"!=typeof PromiseRejectionEvent)return!0}if(u&&!q.prototype.finally)return!0
if(L>=51&&/native code/.test(q))return!1
var e=q.resolve(1),t=function(e){e((function(){}),(function(){}))}
return(e.constructor={})[I]=t,!(e.then((function(){}))instanceof t)})),K=Q||!S((function(e){q.all(e).catch((function(){}))})),J=function(e){var t
return!(!y(e)||"function"!=typeof(t=e.then))&&t},$=function(e,t,r){if(!t.notified){t.notified=!0
var n=t.reactions
x((function(){for(var i=t.value,a=1==t.state,o=0;n.length>o;){var s,u,c,l=n[o++],f=a?l.ok:l.fail,h=l.resolve,d=l.reject,p=l.domain
try{f?(a||(2===t.rejection&&re(e,t),t.rejection=1),!0===f?s=i:(p&&p.enter(),s=f(i),p&&(p.exit(),c=!0)),s===l.promise?d(U("Promise-chain cycle")):(u=J(s))?u.call(s,h,d):h(s)):d(i)}catch(v){p&&!c&&p.exit(),d(v)}}t.reactions=[],t.notified=!1,r&&!t.rejection&&ee(e,t)}))}},Z=function(e,t,r){var n,i
X?((n=W.createEvent("Event")).promise=t,n.reason=r,n.initEvent(e,!1,!0),c.dispatchEvent(n)):n={promise:t,reason:r},(i=c["on"+e])?i(n):e===V&&R("Unhandled promise rejection",r)},ee=function(e,t){k.call(c,(function(){var r,n=t.value
if(te(t)&&(r=T((function(){Y?B.emit("unhandledRejection",n,e):Z(V,e,n)})),t.rejection=Y||te(t)?2:1,r.error))throw r.value}))},te=function(e){return 1!==e.rejection&&!e.parent},re=function(e,t){k.call(c,(function(){Y?B.emit("rejectionHandled",e):Z("rejectionhandled",e,t.value)}))},ne=function(e,t,r,n){return function(i){e(t,r,i,n)}},ie=function(e,t,r,n){t.done||(t.done=!0,n&&(t=n),t.value=r,t.state=2,$(e,t,!0))},ae=function(e,t,r,n){if(!t.done){t.done=!0,n&&(t=n)
try{if(e===r)throw U("Promise can't be resolved itself")
var i=J(r)
i?x((function(){var n={done:!1}
try{i.call(r,ne(ae,e,n,t),ne(ie,e,n,t))}catch(a){ie(e,n,a,t)}})):(t.value=r,t.state=1,$(e,t,!1))}catch(a){ie(e,{done:!1},a,t)}}}
Q&&(q=function(e){m(this,q,M),g(e),n.call(this)
var t=j(this)
try{e(ne(ae,this,t),ne(ie,this,t))}catch(r){ie(this,t,r)}},(n=function(e){D(this,{type:M,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=d(q.prototype,{then:function(e,t){var r=N(this),n=z(w(this,q))
return n.ok="function"!=typeof e||e,n.fail="function"==typeof t&&t,n.domain=Y?B.domain:void 0,r.parent=!0,r.reactions.push(n),0!=r.state&&$(this,r,!1),n.promise},catch:function(e){return this.then(void 0,e)}}),i=function(){var e=new n,t=j(e)
this.promise=e,this.resolve=ne(ae,e,t),this.reject=ne(ie,e,t)},P.f=z=function(e){return e===q||e===a?new i(e):H(e)},u||"function"!=typeof f||(o=f.prototype.then,h(f.prototype,"then",(function(e,t){var r=this
return new q((function(e,t){o.call(r,e,t)})).then(e,t)}),{unsafe:!0}),"function"==typeof G&&s({global:!0,enumerable:!0,forced:!0},{fetch:function(e){return C(q,G.apply(c,arguments))}}))),s({global:!0,wrap:!0,forced:Q},{Promise:q}),p(q,M,!1,!0),v(M),a=l(M),s({target:M,stat:!0,forced:Q},{reject:function(e){var t=z(this)
return t.reject.call(void 0,e),t.promise}}),s({target:M,stat:!0,forced:u||Q},{resolve:function(e){return C(u&&this===a?q:this,e)}}),s({target:M,stat:!0,forced:K},{all:function(e){var t=this,r=z(t),n=r.resolve,i=r.reject,a=T((function(){var r=g(t.resolve),a=[],o=0,s=1
A(e,(function(e){var u=o++,c=!1
a.push(void 0),s++,r.call(t,e).then((function(e){c||(c=!0,a[u]=e,--s||n(a))}),i)})),--s||n(a)}))
return a.error&&i(a.value),r.promise},race:function(e){var t=this,r=z(t),n=r.reject,i=T((function(){var i=g(t.resolve)
A(e,(function(e){i.call(t,e).then(r.resolve,n)}))}))
return i.error&&n(i.value),r.promise}})},function(e,t,r){var n=r(11)
e.exports=n.Promise},function(e,t,r){var n=r(29)
e.exports=function(e,t,r){for(var i in t)n(e,i,t[i],r)
return e}},function(e,t,r){"use strict"
var n=r(42),i=r(27),a=r(57),o=r(13),s=a("species")
e.exports=function(e){var t=n(e),r=i.f
o&&t&&!t[s]&&r(t,s,{configurable:!0,get:function(){return this}})}},function(e,t){e.exports=function(e,t,r){if(!(e instanceof t))throw TypeError("Incorrect "+(r?r+" ":"")+"invocation")
return e}},function(e,t,r){var n,i,a,o=r(11),s=r(14),u=r(19),c=r(62),l=r(74),f=r(25),h=r(128),d=o.location,p=o.setImmediate,v=o.clearImmediate,y=o.process,g=o.MessageChannel,m=o.Dispatch,b=0,_={},A="onreadystatechange",S=function(e){if(_.hasOwnProperty(e)){var t=_[e]
delete _[e],t()}},w=function(e){return function(){S(e)}},k=function(e){S(e.data)},x=function(e){o.postMessage(e+"",d.protocol+"//"+d.host)}
p&&v||(p=function(e){for(var t=[],r=1;arguments.length>r;)t.push(arguments[r++])
return _[++b]=function(){("function"==typeof e?e:Function(e)).apply(void 0,t)},n(b),b},v=function(e){delete _[e]},"process"==u(y)?n=function(e){y.nextTick(w(e))}:m&&m.now?n=function(e){m.now(w(e))}:g&&!h?(a=(i=new g).port2,i.port1.onmessage=k,n=c(a.postMessage,a,1)):!o.addEventListener||"function"!=typeof postMessage||o.importScripts||s(x)||"file:"===d.protocol?n=A in f("script")?function(e){l.appendChild(f("script")).onreadystatechange=function(){l.removeChild(this),S(e)}}:function(e){setTimeout(w(e),0)}:(n=x,o.addEventListener("message",k,!1))),e.exports={set:p,clear:v}},function(e,t,r){var n=r(129)
e.exports=/(iphone|ipod|ipad).*applewebkit/i.test(n)},function(e,t,r){var n=r(42)
e.exports=n("navigator","userAgent")||""},function(e,t,r){var n,i,a,o,s,u,c,l,f=r(11),h=r(12).f,d=r(19),p=r(127).set,v=r(128),y=f.MutationObserver||f.WebKitMutationObserver,g=f.process,m=f.Promise,b="process"==d(g),_=h(f,"queueMicrotask"),A=_&&_.value
A||(n=function(){var e,t
for(b&&(e=g.domain)&&e.exit();i;){t=i.fn,i=i.next
try{t()}catch(r){throw i?o():a=void 0,r}}a=void 0,e&&e.enter()},b?o=function(){g.nextTick(n)}:y&&!v?(s=!0,u=document.createTextNode(""),new y(n).observe(u,{characterData:!0}),o=function(){u.data=s=!s}):m&&m.resolve?(c=m.resolve(void 0),l=c.then,o=function(){l.call(c,n)}):o=function(){p.call(f,n)}),e.exports=A||function(e){var t={fn:e,next:void 0}
a&&(a.next=t),i||(i=t,o()),a=t}},function(e,t,r){var n=r(28),i=r(22),a=r(132)
e.exports=function(e,t){if(n(e),i(t)&&t.constructor===e)return t
var r=a.f(e)
return(0,r.resolve)(t),r.promise}},function(e,t,r){"use strict"
var n=r(63),i=function(e){var t,r
this.promise=new e((function(e,n){if(void 0!==t||void 0!==r)throw TypeError("Bad Promise constructor")
t=e,r=n})),this.resolve=n(t),this.reject=n(r)}
e.exports.f=function(e){return new i(e)}},function(e,t,r){var n=r(11)
e.exports=function(e,t){var r=n.console
r&&r.error&&(1===arguments.length?r.error(e):r.error(e,t))}},function(e,t){e.exports=function(e){try{return{error:!1,value:e()}}catch(t){return{error:!0,value:t}}}},function(e,t,r){var n,i,a=r(11),o=r(129),s=a.process,u=s&&s.versions,c=u&&u.v8
c?i=(n=c.split("."))[0]+n[1]:o&&(!(n=o.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=o.match(/Chrome\/(\d+)/))&&(i=n[1]),e.exports=i&&+i},function(e,t,r){"use strict"
var n=r(10),i=r(63),a=r(132),o=r(134),s=r(104)
n({target:"Promise",stat:!0},{allSettled:function(e){var t=this,r=a.f(t),n=r.resolve,u=r.reject,c=o((function(){var r=i(t.resolve),a=[],o=0,u=1
s(e,(function(e){var i=o++,s=!1
a.push(void 0),u++,r.call(t,e).then((function(e){s||(s=!0,a[i]={status:"fulfilled",value:e},--u||n(a))}),(function(e){s||(s=!0,a[i]={status:"rejected",reason:e},--u||n(a))}))})),--u||n(a)}))
return c.error&&u(c.value),r.promise}})},function(e,t,r){"use strict"
var n=r(10),i=r(37),a=r(123),o=r(14),s=r(42),u=r(116),c=r(131),l=r(29)
n({target:"Promise",proto:!0,real:!0,forced:!!a&&o((function(){a.prototype.finally.call({then:function(){}},(function(){}))}))},{finally:function(e){var t=u(this,s("Promise")),r="function"==typeof e
return this.then(r?function(r){return c(t,e()).then((function(){return r}))}:e,r?function(r){return c(t,e()).then((function(){throw r}))}:e)}}),i||"function"!=typeof a||a.prototype.finally||l(a.prototype,"finally",s("Promise").prototype.finally)},function(e,t,r){r(139),r(144),r(142)
var n=r(43)
e.exports=n.URL},function(e,t,r){"use strict"
r(77)
var n,i=r(10),a=r(13),o=r(140),s=r(11),u=r(72),c=r(29),l=r(126),f=r(23),h=r(100),d=r(90),p=r(78).codeAt,v=r(141),y=r(85),g=r(142),m=r(33),b=s.URL,_=g.URLSearchParams,A=g.getState,S=m.set,w=m.getterFor("URL"),k=Math.floor,x=Math.pow,C="Invalid scheme",R="Invalid host",P="Invalid port",T=/[A-Za-z]/,E=/[\d+-.A-Za-z]/,O=/\d/,F=/^(0x|0X)/,L=/^[0-7]+$/,I=/^\d+$/,M=/^[\dA-Fa-f]+$/,j=/[\u0000\u0009\u000A\u000D #%/:?@[\\]]/,D=/[\u0000\u0009\u000A\u000D #/:?@[\\]]/,N=/^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,q=/[\u0009\u000A\u000D]/g,U=function(e,t){var r,n,i
if("["==t.charAt(0)){if("]"!=t.charAt(t.length-1))return R
if(!(r=B(t.slice(1,-1))))return R
e.host=r}else if(K(e)){if(t=v(t),j.test(t))return R
if(null===(r=W(t)))return R
e.host=r}else{if(D.test(t))return R
for(r="",n=d(t),i=0;i<n.length;i++)r+=V(n[i],z)
e.host=r}},W=function(e){var t,r,n,i,a,o,s,u=e.split(".")
if(u.length&&""==u[u.length-1]&&u.pop(),(t=u.length)>4)return e
for(r=[],n=0;n<t;n++){if(""==(i=u[n]))return e
if(a=10,i.length>1&&"0"==i.charAt(0)&&(a=F.test(i)?16:8,i=i.slice(8==a?1:2)),""===i)o=0
else{if(!(10==a?I:8==a?L:M).test(i))return e
o=parseInt(i,a)}r.push(o)}for(n=0;n<t;n++)if(o=r[n],n==t-1){if(o>=x(256,5-t))return null}else if(o>255)return null
for(s=r.pop(),n=0;n<r.length;n++)s+=r[n]*x(256,3-n)
return s},B=function(e){var t,r,n,i,a,o,s,u=[0,0,0,0,0,0,0,0],c=0,l=null,f=0,h=function(){return e.charAt(f)}
if(":"==h()){if(":"!=e.charAt(1))return
f+=2,l=++c}for(;h();){if(8==c)return
if(":"!=h()){for(t=r=0;r<4&&M.test(h());)t=16*t+parseInt(h(),16),f++,r++
if("."==h()){if(0==r)return
if(f-=r,c>6)return
for(n=0;h();){if(i=null,n>0){if(!("."==h()&&n<4))return
f++}if(!O.test(h()))return
for(;O.test(h());){if(a=parseInt(h(),10),null===i)i=a
else{if(0==i)return
i=10*i+a}if(i>255)return
f++}u[c]=256*u[c]+i,2!=++n&&4!=n||c++}if(4!=n)return
break}if(":"==h()){if(f++,!h())return}else if(h())return
u[c++]=t}else{if(null!==l)return
f++,l=++c}}if(null!==l)for(o=c-l,c=7;0!=c&&o>0;)s=u[c],u[c--]=u[l+o-1],u[l+--o]=s
else if(8!=c)return
return u},G=function(e){var t,r,n,i
if("number"==typeof e){for(t=[],r=0;r<4;r++)t.unshift(e%256),e=k(e/256)
return t.join(".")}if("object"==typeof e){for(t="",n=function(e){for(var t=null,r=1,n=null,i=0,a=0;a<8;a++)0!==e[a]?(i>r&&(t=n,r=i),n=null,i=0):(null===n&&(n=a),++i)
return i>r&&(t=n,r=i),t}(e),r=0;r<8;r++)i&&0===e[r]||(i&&(i=!1),n===r?(t+=r?":":"::",i=!0):(t+=e[r].toString(16),r<7&&(t+=":")))
return"["+t+"]"}return e},z={},H=h({},z,{" ":1,'"':1,"<":1,">":1,"`":1}),Y=h({},H,{"#":1,"?":1,"{":1,"}":1}),X=h({},Y,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),V=function(e,t){var r=p(e,0)
return r>32&&r<127&&!f(t,e)?e:encodeURIComponent(e)},Q={ftp:21,file:null,http:80,https:443,ws:80,wss:443},K=function(e){return f(Q,e.scheme)},J=function(e){return""!=e.username||""!=e.password},$=function(e){return!e.host||e.cannotBeABaseURL||"file"==e.scheme},Z=function(e,t){var r
return 2==e.length&&T.test(e.charAt(0))&&(":"==(r=e.charAt(1))||!t&&"|"==r)},ee=function(e){var t
return e.length>1&&Z(e.slice(0,2))&&(2==e.length||"/"===(t=e.charAt(2))||"\\"===t||"?"===t||"#"===t)},te=function(e){var t=e.path,r=t.length
!r||"file"==e.scheme&&1==r&&Z(t[0],!0)||t.pop()},re=function(e){return"."===e||"%2e"===e.toLowerCase()},ne={},ie={},ae={},oe={},se={},ue={},ce={},le={},fe={},he={},de={},pe={},ve={},ye={},ge={},me={},be={},_e={},Ae={},Se={},we={},ke=function(e,t,r,i){var a,o,s,u,c,l=r||ne,h=0,p="",v=!1,y=!1,g=!1
for(r||(e.scheme="",e.username="",e.password="",e.host=null,e.port=null,e.path=[],e.query=null,e.fragment=null,e.cannotBeABaseURL=!1,t=t.replace(N,"")),t=t.replace(q,""),a=d(t);h<=a.length;){switch(o=a[h],l){case ne:if(!o||!T.test(o)){if(r)return C
l=ae
continue}p+=o.toLowerCase(),l=ie
break
case ie:if(o&&(E.test(o)||"+"==o||"-"==o||"."==o))p+=o.toLowerCase()
else{if(":"!=o){if(r)return C
p="",l=ae,h=0
continue}if(r&&(K(e)!=f(Q,p)||"file"==p&&(J(e)||null!==e.port)||"file"==e.scheme&&!e.host))return
if(e.scheme=p,r)return void(K(e)&&Q[e.scheme]==e.port&&(e.port=null))
p="","file"==e.scheme?l=ye:K(e)&&i&&i.scheme==e.scheme?l=oe:K(e)?l=le:"/"==a[h+1]?(l=se,h++):(e.cannotBeABaseURL=!0,e.path.push(""),l=Ae)}break
case ae:if(!i||i.cannotBeABaseURL&&"#"!=o)return C
if(i.cannotBeABaseURL&&"#"==o){e.scheme=i.scheme,e.path=i.path.slice(),e.query=i.query,e.fragment="",e.cannotBeABaseURL=!0,l=we
break}l="file"==i.scheme?ye:ue
continue
case oe:if("/"!=o||"/"!=a[h+1]){l=ue
continue}l=fe,h++
break
case se:if("/"==o){l=he
break}l=_e
continue
case ue:if(e.scheme=i.scheme,o==n)e.username=i.username,e.password=i.password,e.host=i.host,e.port=i.port,e.path=i.path.slice(),e.query=i.query
else if("/"==o||"\\"==o&&K(e))l=ce
else if("?"==o)e.username=i.username,e.password=i.password,e.host=i.host,e.port=i.port,e.path=i.path.slice(),e.query="",l=Se
else{if("#"!=o){e.username=i.username,e.password=i.password,e.host=i.host,e.port=i.port,e.path=i.path.slice(),e.path.pop(),l=_e
continue}e.username=i.username,e.password=i.password,e.host=i.host,e.port=i.port,e.path=i.path.slice(),e.query=i.query,e.fragment="",l=we}break
case ce:if(!K(e)||"/"!=o&&"\\"!=o){if("/"!=o){e.username=i.username,e.password=i.password,e.host=i.host,e.port=i.port,l=_e
continue}l=he}else l=fe
break
case le:if(l=fe,"/"!=o||"/"!=p.charAt(h+1))continue
h++
break
case fe:if("/"!=o&&"\\"!=o){l=he
continue}break
case he:if("@"==o){v&&(p="%40"+p),v=!0,s=d(p)
for(var m=0;m<s.length;m++){var b=s[m]
if(":"!=b||g){var _=V(b,X)
g?e.password+=_:e.username+=_}else g=!0}p=""}else if(o==n||"/"==o||"?"==o||"#"==o||"\\"==o&&K(e)){if(v&&""==p)return"Invalid authority"
h-=d(p).length+1,p="",l=de}else p+=o
break
case de:case pe:if(r&&"file"==e.scheme){l=me
continue}if(":"!=o||y){if(o==n||"/"==o||"?"==o||"#"==o||"\\"==o&&K(e)){if(K(e)&&""==p)return R
if(r&&""==p&&(J(e)||null!==e.port))return
if(u=U(e,p))return u
if(p="",l=be,r)return
continue}"["==o?y=!0:"]"==o&&(y=!1),p+=o}else{if(""==p)return R
if(u=U(e,p))return u
if(p="",l=ve,r==pe)return}break
case ve:if(!O.test(o)){if(o==n||"/"==o||"?"==o||"#"==o||"\\"==o&&K(e)||r){if(""!=p){var A=parseInt(p,10)
if(A>65535)return P
e.port=K(e)&&A===Q[e.scheme]?null:A,p=""}if(r)return
l=be
continue}return P}p+=o
break
case ye:if(e.scheme="file","/"==o||"\\"==o)l=ge
else{if(!i||"file"!=i.scheme){l=_e
continue}if(o==n)e.host=i.host,e.path=i.path.slice(),e.query=i.query
else if("?"==o)e.host=i.host,e.path=i.path.slice(),e.query="",l=Se
else{if("#"!=o){ee(a.slice(h).join(""))||(e.host=i.host,e.path=i.path.slice(),te(e)),l=_e
continue}e.host=i.host,e.path=i.path.slice(),e.query=i.query,e.fragment="",l=we}}break
case ge:if("/"==o||"\\"==o){l=me
break}i&&"file"==i.scheme&&!ee(a.slice(h).join(""))&&(Z(i.path[0],!0)?e.path.push(i.path[0]):e.host=i.host),l=_e
continue
case me:if(o==n||"/"==o||"\\"==o||"?"==o||"#"==o){if(!r&&Z(p))l=_e
else if(""==p){if(e.host="",r)return
l=be}else{if(u=U(e,p))return u
if("localhost"==e.host&&(e.host=""),r)return
p="",l=be}continue}p+=o
break
case be:if(K(e)){if(l=_e,"/"!=o&&"\\"!=o)continue}else if(r||"?"!=o)if(r||"#"!=o){if(o!=n&&(l=_e,"/"!=o))continue}else e.fragment="",l=we
else e.query="",l=Se
break
case _e:if(o==n||"/"==o||"\\"==o&&K(e)||!r&&("?"==o||"#"==o)){if(".."===(c=(c=p).toLowerCase())||"%2e."===c||".%2e"===c||"%2e%2e"===c?(te(e),"/"==o||"\\"==o&&K(e)||e.path.push("")):re(p)?"/"==o||"\\"==o&&K(e)||e.path.push(""):("file"==e.scheme&&!e.path.length&&Z(p)&&(e.host&&(e.host=""),p=p.charAt(0)+":"),e.path.push(p)),p="","file"==e.scheme&&(o==n||"?"==o||"#"==o))for(;e.path.length>1&&""===e.path[0];)e.path.shift()
"?"==o?(e.query="",l=Se):"#"==o&&(e.fragment="",l=we)}else p+=V(o,Y)
break
case Ae:"?"==o?(e.query="",l=Se):"#"==o?(e.fragment="",l=we):o!=n&&(e.path[0]+=V(o,z))
break
case Se:r||"#"!=o?o!=n&&("'"==o&&K(e)?e.query+="%27":e.query+="#"==o?"%23":V(o,z)):(e.fragment="",l=we)
break
case we:o!=n&&(e.fragment+=V(o,H))}h++}},xe=function(e){var t,r,n=l(this,xe,"URL"),i=arguments.length>1?arguments[1]:void 0,o=String(e),s=S(n,{type:"URL"})
if(void 0!==i)if(i instanceof xe)t=w(i)
else if(r=ke(t={},String(i)))throw TypeError(r)
if(r=ke(s,o,null,t))throw TypeError(r)
var u=s.searchParams=new _,c=A(u)
c.updateSearchParams(s.query),c.updateURL=function(){s.query=String(u)||null},a||(n.href=Re.call(n),n.origin=Pe.call(n),n.protocol=Te.call(n),n.username=Ee.call(n),n.password=Oe.call(n),n.host=Fe.call(n),n.hostname=Le.call(n),n.port=Ie.call(n),n.pathname=Me.call(n),n.search=je.call(n),n.searchParams=De.call(n),n.hash=Ne.call(n))},Ce=xe.prototype,Re=function(){var e=w(this),t=e.scheme,r=e.username,n=e.password,i=e.host,a=e.port,o=e.path,s=e.query,u=e.fragment,c=t+":"
return null!==i?(c+="//",J(e)&&(c+=r+(n?":"+n:"")+"@"),c+=G(i),null!==a&&(c+=":"+a)):"file"==t&&(c+="//"),c+=e.cannotBeABaseURL?o[0]:o.length?"/"+o.join("/"):"",null!==s&&(c+="?"+s),null!==u&&(c+="#"+u),c},Pe=function(){var e=w(this),t=e.scheme,r=e.port
if("blob"==t)try{return new URL(t.path[0]).origin}catch(n){return"null"}return"file"!=t&&K(e)?t+"://"+G(e.host)+(null!==r?":"+r:""):"null"},Te=function(){return w(this).scheme+":"},Ee=function(){return w(this).username},Oe=function(){return w(this).password},Fe=function(){var e=w(this),t=e.host,r=e.port
return null===t?"":null===r?G(t):G(t)+":"+r},Le=function(){var e=w(this).host
return null===e?"":G(e)},Ie=function(){var e=w(this).port
return null===e?"":String(e)},Me=function(){var e=w(this),t=e.path
return e.cannotBeABaseURL?t[0]:t.length?"/"+t.join("/"):""},je=function(){var e=w(this).query
return e?"?"+e:""},De=function(){return w(this).searchParams},Ne=function(){var e=w(this).fragment
return e?"#"+e:""},qe=function(e,t){return{get:e,set:t,configurable:!0,enumerable:!0}}
if(a&&u(Ce,{href:qe(Re,(function(e){var t=w(this),r=String(e),n=ke(t,r)
if(n)throw TypeError(n)
A(t.searchParams).updateSearchParams(t.query)})),origin:qe(Pe),protocol:qe(Te,(function(e){var t=w(this)
ke(t,String(e)+":",ne)})),username:qe(Ee,(function(e){var t=w(this),r=d(String(e))
if(!$(t)){t.username=""
for(var n=0;n<r.length;n++)t.username+=V(r[n],X)}})),password:qe(Oe,(function(e){var t=w(this),r=d(String(e))
if(!$(t)){t.password=""
for(var n=0;n<r.length;n++)t.password+=V(r[n],X)}})),host:qe(Fe,(function(e){var t=w(this)
t.cannotBeABaseURL||ke(t,String(e),de)})),hostname:qe(Le,(function(e){var t=w(this)
t.cannotBeABaseURL||ke(t,String(e),pe)})),port:qe(Ie,(function(e){var t=w(this)
$(t)||(""==(e=String(e))?t.port=null:ke(t,e,ve))})),pathname:qe(Me,(function(e){var t=w(this)
t.cannotBeABaseURL||(t.path=[],ke(t,e+"",be))})),search:qe(je,(function(e){var t=w(this)
""==(e=String(e))?t.query=null:("?"==e.charAt(0)&&(e=e.slice(1)),t.query="",ke(t,e,Se)),A(t.searchParams).updateSearchParams(t.query)})),searchParams:qe(De),hash:qe(Ne,(function(e){var t=w(this)
""!=(e=String(e))?("#"==e.charAt(0)&&(e=e.slice(1)),t.fragment="",ke(t,e,we)):t.fragment=null}))}),c(Ce,"toJSON",(function(){return Re.call(this)}),{enumerable:!0}),c(Ce,"toString",(function(){return Re.call(this)}),{enumerable:!0}),b){var Ue=b.createObjectURL,We=b.revokeObjectURL
Ue&&c(xe,"createObjectURL",(function(e){return Ue.apply(b,arguments)})),We&&c(xe,"revokeObjectURL",(function(e){return We.apply(b,arguments)}))}y(xe,"URL"),i({global:!0,forced:!o,sham:!a},{URL:xe})},function(e,t,r){var n=r(14),i=r(57),a=r(37),o=i("iterator")
e.exports=!n((function(){var e=new URL("b?a=1&b=2&c=3","http://a"),t=e.searchParams,r=""
return e.pathname="c%20d",t.forEach((function(e,n){t.delete("b"),r+=n+e})),a&&!e.toJSON||!t.sort||"http://a/c%20d?a=1&c=3"!==e.href||"3"!==t.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!t[o]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==r||"x"!==new URL("http://x",void 0).host}))},function(e,t,r){"use strict"
var n=2147483647,i=/[^\0-\u007E]/,a=/[.\u3002\uFF0E\uFF61]/g,o="Overflow: input needs wider integers to process",s=Math.floor,u=String.fromCharCode,c=function(e){return e+22+75*(e<26)},l=function(e,t,r){var n=0
for(e=r?s(e/700):e>>1,e+=s(e/t);e>455;n+=36)e=s(e/35)
return s(n+36*e/(e+38))},f=function(e){var t,r,i=[],a=(e=function(e){for(var t=[],r=0,n=e.length;r<n;){var i=e.charCodeAt(r++)
if(i>=55296&&i<=56319&&r<n){var a=e.charCodeAt(r++)
56320==(64512&a)?t.push(((1023&i)<<10)+(1023&a)+65536):(t.push(i),r--)}else t.push(i)}return t}(e)).length,f=128,h=0,d=72
for(t=0;t<e.length;t++)(r=e[t])<128&&i.push(u(r))
var p=i.length,v=p
for(p&&i.push("-");v<a;){var y=n
for(t=0;t<e.length;t++)(r=e[t])>=f&&r<y&&(y=r)
var g=v+1
if(y-f>s((n-h)/g))throw RangeError(o)
for(h+=(y-f)*g,f=y,t=0;t<e.length;t++){if((r=e[t])<f&&++h>n)throw RangeError(o)
if(r==f){for(var m=h,b=36;;b+=36){var _=b<=d?1:b>=d+26?26:b-d
if(m<_)break
var A=m-_,S=36-_
i.push(u(c(_+A%S))),m=s(A/S)}i.push(u(c(m))),d=l(h,g,v==p),h=0,++v}}++h,++f}return i.join("")}
e.exports=function(e){var t,r,n=[],o=e.toLowerCase().replace(a,".").split(".")
for(t=0;t<o.length;t++)r=o[t],n.push(i.test(r)?"xn--"+f(r):r)
return n.join(".")}},function(e,t,r){"use strict"
r(102)
var n=r(10),i=r(42),a=r(140),o=r(29),s=r(124),u=r(85),c=r(80),l=r(33),f=r(126),h=r(23),d=r(62),p=r(95),v=r(28),y=r(22),g=r(71),m=r(16),b=r(143),_=r(94),A=r(57),S=i("fetch"),w=i("Headers"),k=A("iterator"),x="URLSearchParams",C="URLSearchParamsIterator",R=l.set,P=l.getterFor(x),T=l.getterFor(C),E=/\+/g,O=Array(4),F=function(e){return O[e-1]||(O[e-1]=RegExp("((?:%[\\da-f]{2}){"+e+"})","gi"))},L=function(e){try{return decodeURIComponent(e)}catch(t){return e}},I=function(e){var t=e.replace(E," "),r=4
try{return decodeURIComponent(t)}catch(n){for(;r;)t=t.replace(F(r--),L)
return t}},M=/[!'()~]|%20/g,j={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},D=function(e){return j[e]},N=function(e){return encodeURIComponent(e).replace(M,D)},q=function(e,t){if(t)for(var r,n,i=t.split("&"),a=0;a<i.length;)(r=i[a++]).length&&(n=r.split("="),e.push({key:I(n.shift()),value:I(n.join("="))}))},U=function(e){this.entries.length=0,q(this.entries,e)},W=function(e,t){if(e<t)throw TypeError("Not enough arguments")},B=c((function(e,t){R(this,{type:C,iterator:b(P(e).entries),kind:t})}),"Iterator",(function(){var e=T(this),t=e.kind,r=e.iterator.next(),n=r.value
return r.done||(r.value="keys"===t?n.key:"values"===t?n.value:[n.key,n.value]),r})),G=function(){f(this,G,x)
var e,t,r,n,i,a,o,s,u,c=arguments.length>0?arguments[0]:void 0,l=this,d=[]
if(R(l,{type:x,entries:d,updateURL:function(){},updateSearchParams:U}),void 0!==c)if(y(c))if("function"==typeof(e=_(c)))for(r=(t=e.call(c)).next;!(n=r.call(t)).done;){if((o=(a=(i=b(v(n.value))).next).call(i)).done||(s=a.call(i)).done||!a.call(i).done)throw TypeError("Expected sequence with length 2")
d.push({key:o.value+"",value:s.value+""})}else for(u in c)h(c,u)&&d.push({key:u,value:c[u]+""})
else q(d,"string"==typeof c?"?"===c.charAt(0)?c.slice(1):c:c+"")},z=G.prototype
s(z,{append:function(e,t){W(arguments.length,2)
var r=P(this)
r.entries.push({key:e+"",value:t+""}),r.updateURL()},delete:function(e){W(arguments.length,1)
for(var t=P(this),r=t.entries,n=e+"",i=0;i<r.length;)r[i].key===n?r.splice(i,1):i++
t.updateURL()},get:function(e){W(arguments.length,1)
for(var t=P(this).entries,r=e+"",n=0;n<t.length;n++)if(t[n].key===r)return t[n].value
return null},getAll:function(e){W(arguments.length,1)
for(var t=P(this).entries,r=e+"",n=[],i=0;i<t.length;i++)t[i].key===r&&n.push(t[i].value)
return n},has:function(e){W(arguments.length,1)
for(var t=P(this).entries,r=e+"",n=0;n<t.length;)if(t[n++].key===r)return!0
return!1},set:function(e,t){W(arguments.length,1)
for(var r,n=P(this),i=n.entries,a=!1,o=e+"",s=t+"",u=0;u<i.length;u++)(r=i[u]).key===o&&(a?i.splice(u--,1):(a=!0,r.value=s))
a||i.push({key:o,value:s}),n.updateURL()},sort:function(){var e,t,r,n=P(this),i=n.entries,a=i.slice()
for(i.length=0,r=0;r<a.length;r++){for(e=a[r],t=0;t<r;t++)if(i[t].key>e.key){i.splice(t,0,e)
break}t===r&&i.push(e)}n.updateURL()},forEach:function(e){for(var t,r=P(this).entries,n=d(e,arguments.length>1?arguments[1]:void 0,3),i=0;i<r.length;)n((t=r[i++]).value,t.key,this)},keys:function(){return new B(this,"keys")},values:function(){return new B(this,"values")},entries:function(){return new B(this,"entries")}},{enumerable:!0}),o(z,k,z.entries),o(z,"toString",(function(){for(var e,t=P(this).entries,r=[],n=0;n<t.length;)e=t[n++],r.push(N(e.key)+"="+N(e.value))
return r.join("&")}),{enumerable:!0}),u(G,x),n({global:!0,forced:!a},{URLSearchParams:G}),a||"function"!=typeof S||"function"!=typeof w||n({global:!0,enumerable:!0,forced:!0},{fetch:function(e){var t,r,n,i=[e]
return arguments.length>1&&(y(t=arguments[1])&&(r=t.body,p(r)===x&&((n=t.headers?new w(t.headers):new w).has("content-type")||n.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"),t=g(t,{body:m(0,String(r)),headers:m(0,n)}))),i.push(t)),S.apply(this,i)}}),e.exports={URLSearchParams:G,getState:P}},function(e,t,r){var n=r(28),i=r(94)
e.exports=function(e){var t=i(e)
if("function"!=typeof t)throw TypeError(String(e)+" is not iterable")
return n(t.call(e))}},function(e,t,r){"use strict"
r(10)({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return URL.prototype.toString.call(this)}})},function(e,t,r){!function(e){"use strict"
var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?Symbol:function(e){return"Symbol("+e+")"}
function r(){}var n=Number.isNaN||function(e){return e!=e},i=r
function a(e){return"object"==typeof e&&null!==e||"function"==typeof e}function o(e){return e.slice()}function s(e,t,r,n,i){new Uint8Array(e).set(new Uint8Array(r,n,i),t)}function u(e){return!1!==c(e)&&e!==1/0}function c(e){return!("number"!=typeof e||n(e)||e<0)}function l(e,t,r){if("function"!=typeof e)throw new TypeError("Argument is not a function")
return Function.prototype.apply.call(e,t,r)}function f(e,t,r,n){var i=e[t]
if(void 0!==i){if("function"!=typeof i)throw new TypeError(i+" is not a method")
switch(r){case 0:return function(){return d(i,e,n)}
case 1:return function(t){var r=[t].concat(n)
return d(i,e,r)}}}return function(){return w(void 0)}}function h(e,t,r){var n=e[t]
if(void 0!==n)return l(n,e,r)}function d(e,t,r){try{return w(l(e,t,r))}catch(n){return k(n)}}function p(e){return e}function v(e){return!1}function y(e){if(e=Number(e),n(e)||e<0)throw new RangeError("highWaterMark property of a queuing strategy must be non-negative and non-NaN")
return e}function g(e){if(void 0===e)return function(){return 1}
if("function"!=typeof e)throw new TypeError("size property of a queuing strategy must be a function")
return function(t){return e(t)}}var m=Promise,b=Promise.prototype.then,_=Promise.resolve.bind(m),A=Promise.reject.bind(m)
function S(e){return new m(e)}function w(e){return _(e)}function k(e){return A(e)}function x(e,t,r){return b.call(e,t,r)}function C(e,t,r){x(x(e,t,r),void 0,i)}function R(e,t){C(e,t)}function P(e,t){C(e,void 0,t)}function T(e,t,r){return x(e,t,r)}function E(e){x(e,void 0,i)}var O=16384,F=function(){function e(){this._cursor=0,this._size=0,this._front={_elements:[],_next:void 0},this._back=this._front,this._cursor=0,this._size=0}return Object.defineProperty(e.prototype,"length",{get:function(){return this._size},enumerable:!0,configurable:!0}),e.prototype.push=function(e){var t=this._back,r=t
t._elements.length===O-1&&(r={_elements:[],_next:void 0}),t._elements.push(e),r!==t&&(this._back=r,t._next=r),++this._size},e.prototype.shift=function(){var e=this._front,t=e,r=this._cursor,n=r+1,i=e._elements,a=i[r]
return n===O&&(t=e._next,n=0),--this._size,this._cursor=n,e!==t&&(this._front=t),i[r]=void 0,a},e.prototype.forEach=function(e){for(var t=this._cursor,r=this._front,n=r._elements;!(t===n.length&&void 0===r._next||t===n.length&&(t=0,0===(n=(r=r._next)._elements).length));)e(n[t]),++t},e.prototype.peek=function(){var e=this._front,t=this._cursor
return e._elements[t]},e}()
function L(e,t,r){var n=null
!0===r&&(n=Object.prototype)
var i=Object.create(n)
return i.value=e,i.done=t,i}function I(e,t){e._forAuthorCode=!0,e._ownerReadableStream=t,t._reader=e,"readable"===t._state?N(e):"closed"===t._state?U(e):q(e,t._storedError)}function M(e,t){return jr(e._ownerReadableStream,t)}function j(e){"readable"===e._ownerReadableStream._state?W(e,new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")):B(e,new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")),e._ownerReadableStream._reader=void 0,e._ownerReadableStream=void 0}function D(e){return new TypeError("Cannot "+e+" a stream using a released reader")}function N(e){e._closedPromise=S((function(t,r){e._closedPromise_resolve=t,e._closedPromise_reject=r}))}function q(e,t){N(e),W(e,t)}function U(e){N(e),G(e)}function W(e,t){E(e._closedPromise),e._closedPromise_reject(t),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0}function B(e,t){q(e,t)}function G(e){e._closedPromise_resolve(void 0),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0}var z=t("[[CancelSteps]]"),H=t("[[PullSteps]]")
function Y(e,t){void 0===t&&(t=!1)
var r=new Z(e)
return r._forAuthorCode=t,r}function X(e){return S((function(t,r){var n={_resolve:t,_reject:r}
e._reader._readRequests.push(n)}))}function V(e,t,r){var n=e._reader
n._readRequests.shift()._resolve(L(t,r,n._forAuthorCode))}function Q(e){return e._reader._readRequests.length}function K(e){var t=e._reader
return void 0!==t&&!!ee(t)}var J,$,Z=function(){function e(e){if(!1===Ir(e))throw new TypeError("ReadableStreamDefaultReader can only be constructed with a ReadableStream instance")
if(!0===Mr(e))throw new TypeError("This stream has already been locked for exclusive reading by another reader")
I(this,e),this._readRequests=new F}return Object.defineProperty(e.prototype,"closed",{get:function(){return ee(this)?this._closedPromise:k(re("closed"))},enumerable:!0,configurable:!0}),e.prototype.cancel=function(e){return ee(this)?void 0===this._ownerReadableStream?k(D("cancel")):M(this,e):k(re("cancel"))},e.prototype.read=function(){return ee(this)?void 0===this._ownerReadableStream?k(D("read from")):te(this):k(re("read"))},e.prototype.releaseLock=function(){if(!ee(this))throw re("releaseLock")
if(void 0!==this._ownerReadableStream){if(this._readRequests.length>0)throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled")
j(this)}},e}()
function ee(e){return!!a(e)&&!!Object.prototype.hasOwnProperty.call(e,"_readRequests")}function te(e){var t=e._ownerReadableStream
return t._disturbed=!0,"closed"===t._state?w(L(void 0,!0,e._forAuthorCode)):"errored"===t._state?k(t._storedError):t._readableStreamController[H]()}function re(e){return new TypeError("ReadableStreamDefaultReader.prototype."+e+" can only be used on a ReadableStreamDefaultReader")}"symbol"==typeof t.asyncIterator&&((J={})[t.asyncIterator]=function(){return this},$=J,Object.defineProperty($,t.asyncIterator,{enumerable:!1}))
var ne={next:function(){if(!1===ae(this))return k(oe("next"))
var e=this._asyncIteratorReader
return void 0===e._ownerReadableStream?k(D("iterate")):T(te(e),(function(t){var r=t.done
return r&&j(e),L(t.value,r,!0)}))},return:function(e){if(!1===ae(this))return k(oe("next"))
var t=this._asyncIteratorReader
if(void 0===t._ownerReadableStream)return k(D("finish iterating"))
if(t._readRequests.length>0)return k(new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled"))
if(!1===this._preventCancel){var r=M(t,e)
return j(t),T(r,(function(){return L(e,!0,!0)}))}return j(t),w(L(e,!0,!0))}}
function ie(e,t){void 0===t&&(t=!1)
var r=Y(e),n=Object.create(ne)
return n._asyncIteratorReader=r,n._preventCancel=Boolean(t),n}function ae(e){return!!a(e)&&!!Object.prototype.hasOwnProperty.call(e,"_asyncIteratorReader")}function oe(e){return new TypeError("ReadableStreamAsyncIterator."+e+" can only be used on a ReadableSteamAsyncIterator")}function se(e){var t=e._queue.shift()
return e._queueTotalSize-=t.size,e._queueTotalSize<0&&(e._queueTotalSize=0),t.value}function ue(e,t,r){if(!u(r=Number(r)))throw new RangeError("Size must be a finite, non-NaN, non-negative number.")
e._queue.push({value:t,size:r}),e._queueTotalSize+=r}function ce(e){return e._queue.peek().value}function le(e){e._queue=new F,e._queueTotalSize=0}void 0!==$&&Object.setPrototypeOf(ne,$),Object.defineProperty(ne,"next",{enumerable:!1}),Object.defineProperty(ne,"return",{enumerable:!1})
var fe=t("[[AbortSteps]]"),he=t("[[ErrorSteps]]"),de=function(){function e(e,t){void 0===e&&(e={}),void 0===t&&(t={}),ye(this)
var r=t.size,n=t.highWaterMark
if(void 0!==e.type)throw new RangeError("Invalid type is specified")
var i=g(r)
void 0===n&&(n=1),Ve(this,e,n=y(n),i)}return Object.defineProperty(e.prototype,"locked",{get:function(){if(!1===ge(this))throw ot("locked")
return me(this)},enumerable:!0,configurable:!0}),e.prototype.abort=function(e){return!1===ge(this)?k(ot("abort")):!0===me(this)?k(new TypeError("Cannot abort a stream that already has a writer")):be(this,e)},e.prototype.close=function(){return!1===ge(this)?k(ot("close")):!0===me(this)?k(new TypeError("Cannot close a stream that already has a writer")):!0===Te(this)?k(new TypeError("Cannot close an already-closing stream")):_e(this)},e.prototype.getWriter=function(){if(!1===ge(this))throw ot("getWriter")
return pe(this)},e}()
function pe(e){return new Me(e)}function ve(e,t,r,n,i,a){void 0===i&&(i=1),void 0===a&&(a=function(){return 1})
var o=Object.create(de.prototype)
return ye(o),Xe(o,Object.create(He.prototype),e,t,r,n,i,a),o}function ye(e){e._state="writable",e._storedError=void 0,e._writer=void 0,e._writableStreamController=void 0,e._writeRequests=new F,e._inFlightWriteRequest=void 0,e._closeRequest=void 0,e._inFlightCloseRequest=void 0,e._pendingAbortRequest=void 0,e._backpressure=!1}function ge(e){return!!a(e)&&!!Object.prototype.hasOwnProperty.call(e,"_writableStreamController")}function me(e){return void 0!==e._writer}function be(e,t){var r=e._state
if("closed"===r||"errored"===r)return w(void 0)
if(void 0!==e._pendingAbortRequest)return e._pendingAbortRequest._promise
var n=!1
"erroring"===r&&(n=!0,t=void 0)
var i=S((function(r,i){e._pendingAbortRequest={_promise:void 0,_resolve:r,_reject:i,_reason:t,_wasAlreadyErroring:n}}))
return e._pendingAbortRequest._promise=i,!1===n&&we(e,t),i}function _e(e){var t=e._state
if("closed"===t||"errored"===t)return k(new TypeError("The stream (in "+t+" state) is not in the writable state and cannot be closed"))
var r=S((function(t,r){var n={_resolve:t,_reject:r}
e._closeRequest=n})),n=e._writer
return void 0!==n&&!0===e._backpressure&&"writable"===t&&At(n),Ke(e._writableStreamController),r}function Ae(e){return S((function(t,r){var n={_resolve:t,_reject:r}
e._writeRequests.push(n)}))}function Se(e,t){"writable"!==e._state?ke(e):we(e,t)}function we(e,t){var r=e._writableStreamController
e._state="erroring",e._storedError=t
var n=e._writer
void 0!==n&&We(n,t),!1===Ee(e)&&!0===r._started&&ke(e)}function ke(e){e._state="errored",e._writableStreamController[he]()
var t=e._storedError
if(e._writeRequests.forEach((function(e){e._reject(t)})),e._writeRequests=new F,void 0!==e._pendingAbortRequest){var r=e._pendingAbortRequest
if(e._pendingAbortRequest=void 0,!0===r._wasAlreadyErroring)return r._reject(t),void Le(e)
C(e._writableStreamController[fe](r._reason),(function(){r._resolve(),Le(e)}),(function(t){r._reject(t),Le(e)}))}else Le(e)}function xe(e){e._inFlightWriteRequest._resolve(void 0),e._inFlightWriteRequest=void 0}function Ce(e,t){e._inFlightWriteRequest._reject(t),e._inFlightWriteRequest=void 0,Se(e,t)}function Re(e){e._inFlightCloseRequest._resolve(void 0),e._inFlightCloseRequest=void 0,"erroring"===e._state&&(e._storedError=void 0,void 0!==e._pendingAbortRequest&&(e._pendingAbortRequest._resolve(),e._pendingAbortRequest=void 0)),e._state="closed"
var t=e._writer
void 0!==t&&pt(t)}function Pe(e,t){e._inFlightCloseRequest._reject(t),e._inFlightCloseRequest=void 0,void 0!==e._pendingAbortRequest&&(e._pendingAbortRequest._reject(t),e._pendingAbortRequest=void 0),Se(e,t)}function Te(e){return void 0!==e._closeRequest||void 0!==e._inFlightCloseRequest}function Ee(e){return void 0!==e._inFlightWriteRequest||void 0!==e._inFlightCloseRequest}function Oe(e){e._inFlightCloseRequest=e._closeRequest,e._closeRequest=void 0}function Fe(e){e._inFlightWriteRequest=e._writeRequests.shift()}function Le(e){void 0!==e._closeRequest&&(e._closeRequest._reject(e._storedError),e._closeRequest=void 0)
var t=e._writer
void 0!==t&&ht(t,e._storedError)}function Ie(e,t){var r=e._writer
void 0!==r&&t!==e._backpressure&&(!0===t?bt(r):At(r)),e._backpressure=t}var Me=function(){function e(e){if(!1===ge(e))throw new TypeError("WritableStreamDefaultWriter can only be constructed with a WritableStream instance")
if(!0===me(e))throw new TypeError("This stream has already been locked for exclusive writing by another writer")
this._ownerWritableStream=e,e._writer=this
var t=e._state
if("writable"===t)!1===Te(e)&&!0===e._backpressure?vt(this):gt(this),ct(this)
else if("erroring"===t)yt(this,e._storedError),ct(this)
else if("closed"===t)gt(this),ft(this)
else{var r=e._storedError
yt(this,r),lt(this,r)}}return Object.defineProperty(e.prototype,"closed",{get:function(){return!1===je(this)?k(st("closed")):this._closedPromise},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"desiredSize",{get:function(){if(!1===je(this))throw st("desiredSize")
if(void 0===this._ownerWritableStream)throw ut("desiredSize")
return Be(this)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"ready",{get:function(){return!1===je(this)?k(st("ready")):this._readyPromise},enumerable:!0,configurable:!0}),e.prototype.abort=function(e){return!1===je(this)?k(st("abort")):void 0===this._ownerWritableStream?k(ut("abort")):De(this,e)},e.prototype.close=function(){if(!1===je(this))return k(st("close"))
var e=this._ownerWritableStream
return void 0===e?k(ut("close")):!0===Te(e)?k(new TypeError("Cannot close an already-closing stream")):Ne(this)},e.prototype.releaseLock=function(){if(!1===je(this))throw st("releaseLock")
void 0!==this._ownerWritableStream&&Ge(this)},e.prototype.write=function(e){return!1===je(this)?k(st("write")):void 0===this._ownerWritableStream?k(ut("write to")):ze(this,e)},e}()
function je(e){return!!a(e)&&!!Object.prototype.hasOwnProperty.call(e,"_ownerWritableStream")}function De(e,t){return be(e._ownerWritableStream,t)}function Ne(e){return _e(e._ownerWritableStream)}function qe(e){var t=e._ownerWritableStream,r=t._state
return!0===Te(t)||"closed"===r?w(void 0):"errored"===r?k(t._storedError):Ne(e)}function Ue(e,t){"pending"===e._closedPromiseState?ht(e,t):dt(e,t)}function We(e,t){"pending"===e._readyPromiseState?mt(e,t):_t(e,t)}function Be(e){var t=e._ownerWritableStream,r=t._state
return"errored"===r||"erroring"===r?null:"closed"===r?0:$e(t._writableStreamController)}function Ge(e){var t=e._ownerWritableStream,r=new TypeError("Writer was released and can no longer be used to monitor the stream's closedness")
We(e,r),Ue(e,r),t._writer=void 0,e._ownerWritableStream=void 0}function ze(e,t){var r=e._ownerWritableStream,n=r._writableStreamController,i=Je(n,t)
if(r!==e._ownerWritableStream)return k(ut("write to"))
var a=r._state
if("errored"===a)return k(r._storedError)
if(!0===Te(r)||"closed"===a)return k(new TypeError("The stream is closing or closed and cannot be written to"))
if("erroring"===a)return k(r._storedError)
var o=Ae(r)
return Ze(n,t,i),o}var He=function(){function e(){throw new TypeError("WritableStreamDefaultController cannot be constructed explicitly")}return e.prototype.error=function(e){if(!1===Ye(this))throw new TypeError("WritableStreamDefaultController.prototype.error can only be used on a WritableStreamDefaultController")
"writable"===this._controlledWritableStream._state&&at(this,e)},e.prototype[fe]=function(e){var t=this._abortAlgorithm(e)
return Qe(this),t},e.prototype[he]=function(){le(this)},e}()
function Ye(e){return!!a(e)&&!!Object.prototype.hasOwnProperty.call(e,"_controlledWritableStream")}function Xe(e,t,r,n,i,a,o,s){t._controlledWritableStream=e,e._writableStreamController=t,t._queue=void 0,t._queueTotalSize=void 0,le(t),t._started=!1,t._strategySizeAlgorithm=s,t._strategyHWM=o,t._writeAlgorithm=n,t._closeAlgorithm=i,t._abortAlgorithm=a
var u=it(t)
Ie(e,u),C(w(r()),(function(){t._started=!0,et(t)}),(function(r){t._started=!0,Se(e,r)}))}function Ve(e,t,r,n){var i=Object.create(He.prototype)
function a(){return h(t,"start",[i])}var o=f(t,"write",1,[i]),s=f(t,"close",0,[]),u=f(t,"abort",1,[])
Xe(e,i,a,o,s,u,r,n)}function Qe(e){e._writeAlgorithm=void 0,e._closeAlgorithm=void 0,e._abortAlgorithm=void 0,e._strategySizeAlgorithm=void 0}function Ke(e){ue(e,"close",0),et(e)}function Je(e,t){try{return e._strategySizeAlgorithm(t)}catch(r){return tt(e,r),1}}function $e(e){return e._strategyHWM-e._queueTotalSize}function Ze(e,t,r){var n={chunk:t}
try{ue(e,n,r)}catch(a){return void tt(e,a)}var i=e._controlledWritableStream
!1===Te(i)&&"writable"===i._state&&Ie(i,it(e)),et(e)}function et(e){var t=e._controlledWritableStream
if(!1!==e._started&&void 0===t._inFlightWriteRequest)if("erroring"!==t._state){if(0!==e._queue.length){var r=ce(e)
"close"===r?rt(e):nt(e,r.chunk)}}else ke(t)}function tt(e,t){"writable"===e._controlledWritableStream._state&&at(e,t)}function rt(e){var t=e._controlledWritableStream
Oe(t),se(e)
var r=e._closeAlgorithm()
Qe(e),C(r,(function(){Re(t)}),(function(e){Pe(t,e)}))}function nt(e,t){var r=e._controlledWritableStream
Fe(r),C(e._writeAlgorithm(t),(function(){xe(r)
var t=r._state
if(se(e),!1===Te(r)&&"writable"===t){var n=it(e)
Ie(r,n)}et(e)}),(function(t){"writable"===r._state&&Qe(e),Ce(r,t)}))}function it(e){return $e(e)<=0}function at(e,t){var r=e._controlledWritableStream
Qe(e),we(r,t)}function ot(e){return new TypeError("WritableStream.prototype."+e+" can only be used on a WritableStream")}function st(e){return new TypeError("WritableStreamDefaultWriter.prototype."+e+" can only be used on a WritableStreamDefaultWriter")}function ut(e){return new TypeError("Cannot "+e+" a stream using a released writer")}function ct(e){e._closedPromise=S((function(t,r){e._closedPromise_resolve=t,e._closedPromise_reject=r,e._closedPromiseState="pending"}))}function lt(e,t){ct(e),ht(e,t)}function ft(e){ct(e),pt(e)}function ht(e,t){E(e._closedPromise),e._closedPromise_reject(t),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0,e._closedPromiseState="rejected"}function dt(e,t){lt(e,t)}function pt(e){e._closedPromise_resolve(void 0),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0,e._closedPromiseState="resolved"}function vt(e){e._readyPromise=S((function(t,r){e._readyPromise_resolve=t,e._readyPromise_reject=r})),e._readyPromiseState="pending"}function yt(e,t){vt(e),mt(e,t)}function gt(e){vt(e),At(e)}function mt(e,t){E(e._readyPromise),e._readyPromise_reject(t),e._readyPromise_resolve=void 0,e._readyPromise_reject=void 0,e._readyPromiseState="rejected"}function bt(e){vt(e)}function _t(e,t){yt(e,t)}function At(e){e._readyPromise_resolve(void 0),e._readyPromise_resolve=void 0,e._readyPromise_reject=void 0,e._readyPromiseState="fulfilled"}function St(e){if("object"!=typeof e||null===e)return!1
try{return"boolean"==typeof e.aborted}catch(J){return!1}}var wt="undefined"!=typeof DOMException?DOMException:void 0
function kt(e){if("function"!=typeof e&&"object"!=typeof e)return!1
try{return new e,!0}catch(J){return!1}}function xt(){var e=function(e,t){this.message=e||"",this.name=t||"Error",Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}
return e.prototype=Object.create(Error.prototype),Object.defineProperty(e.prototype,"constructor",{value:e,writable:!0,configurable:!0}),e}var Ct=kt(wt)?wt:xt()
function Rt(e,t,n,i,a,o){var s=Y(e),u=pe(t)
e._disturbed=!0
var c=!1,l=w(void 0)
return S((function(f,h){var d
if(void 0!==o){if(d=function(){var r=new Ct("Aborted","AbortError"),n=[]
!1===i&&n.push((function(){return"writable"===t._state?be(t,r):w(void 0)})),!1===a&&n.push((function(){return"readable"===e._state?jr(e,r):w(void 0)})),_((function(){return Promise.all(n.map((function(e){return e()})))}),!0,r)},!0===o.aborted)return void d()
o.addEventListener("abort",d)}function p(){return S((function(e,t){function r(n){n?e():x(v(),r,t)}r(!1)}))}function v(){return!0===c?w(!0):x(u._readyPromise,(function(){return x(te(s),(function(e){return!0===e.done||(l=x(ze(u,e.value),void 0,r),!1)}))}))}if(m(e,s._closedPromise,(function(e){!1===i?_((function(){return be(t,e)}),!0,e):A(!0,e)})),m(t,u._closedPromise,(function(t){!1===a?_((function(){return jr(e,t)}),!0,t):A(!0,t)})),b(e,s._closedPromise,(function(){!1===n?_((function(){return qe(u)})):A()})),!0===Te(t)||"closed"===t._state){var y=new TypeError("the destination writable stream closed before all data could be piped to it")
!1===a?_((function(){return jr(e,y)}),!0,y):A(!0,y)}function g(){var e=l
return x(l,(function(){return e!==l?g():void 0}))}function m(e,t,r){"errored"===e._state?r(e._storedError):P(t,r)}function b(e,t,r){"closed"===e._state?r():R(t,r)}function _(e,r,n){function i(){C(e(),(function(){return k(r,n)}),(function(e){return k(!0,e)}))}!0!==c&&(c=!0,"writable"===t._state&&!1===Te(t)?R(g(),i):i())}function A(e,r){!0!==c&&(c=!0,"writable"===t._state&&!1===Te(t)?R(g(),(function(){return k(e,r)})):k(e,r))}function k(e,t){Ge(u),j(s),void 0!==o&&o.removeEventListener("abort",d),e?h(t):f(void 0)}E(p())}))}var Pt=function(){function e(){throw new TypeError}return Object.defineProperty(e.prototype,"desiredSize",{get:function(){if(!1===Tt(this))throw Wt("desiredSize")
return jt(this)},enumerable:!0,configurable:!0}),e.prototype.close=function(){if(!1===Tt(this))throw Wt("close")
if(!1===Nt(this))throw new TypeError("The stream is not in a state that permits close")
Lt(this)},e.prototype.enqueue=function(e){if(!1===Tt(this))throw Wt("enqueue")
if(!1===Nt(this))throw new TypeError("The stream is not in a state that permits enqueue")
return It(this,e)},e.prototype.error=function(e){if(!1===Tt(this))throw Wt("error")
Mt(this,e)},e.prototype[z]=function(e){le(this)
var t=this._cancelAlgorithm(e)
return Ft(this),t},e.prototype[H]=function(){var e=this._controlledReadableStream
if(this._queue.length>0){var t=se(this)
return!0===this._closeRequested&&0===this._queue.length?(Ft(this),Dr(e)):Et(this),w(L(t,!1,e._reader._forAuthorCode))}var r=X(e)
return Et(this),r},e}()
function Tt(e){return!!a(e)&&!!Object.prototype.hasOwnProperty.call(e,"_controlledReadableStream")}function Et(e){!1!==Ot(e)&&(!0!==e._pulling?(e._pulling=!0,C(e._pullAlgorithm(),(function(){e._pulling=!1,!0===e._pullAgain&&(e._pullAgain=!1,Et(e))}),(function(t){Mt(e,t)}))):e._pullAgain=!0)}function Ot(e){var t=e._controlledReadableStream
return!1!==Nt(e)&&!1!==e._started&&(!0===Mr(t)&&Q(t)>0||jt(e)>0)}function Ft(e){e._pullAlgorithm=void 0,e._cancelAlgorithm=void 0,e._strategySizeAlgorithm=void 0}function Lt(e){var t=e._controlledReadableStream
e._closeRequested=!0,0===e._queue.length&&(Ft(e),Dr(t))}function It(e,t){var r=e._controlledReadableStream
if(!0===Mr(r)&&Q(r)>0)V(r,t,!1)
else{var n=void 0
try{n=e._strategySizeAlgorithm(t)}catch(i){throw Mt(e,i),i}try{ue(e,t,n)}catch(a){throw Mt(e,a),a}}Et(e)}function Mt(e,t){var r=e._controlledReadableStream
"readable"===r._state&&(le(e),Ft(e),Nr(r,t))}function jt(e){var t=e._controlledReadableStream._state
return"errored"===t?null:"closed"===t?0:e._strategyHWM-e._queueTotalSize}function Dt(e){return!0!==Ot(e)}function Nt(e){var t=e._controlledReadableStream._state
return!1===e._closeRequested&&"readable"===t}function qt(e,t,r,n,i,a,o){t._controlledReadableStream=e,t._queue=void 0,t._queueTotalSize=void 0,le(t),t._started=!1,t._closeRequested=!1,t._pullAgain=!1,t._pulling=!1,t._strategySizeAlgorithm=o,t._strategyHWM=a,t._pullAlgorithm=n,t._cancelAlgorithm=i,e._readableStreamController=t,C(w(r()),(function(){t._started=!0,Et(t)}),(function(e){Mt(t,e)}))}function Ut(e,t,r,n){var i=Object.create(Pt.prototype)
function a(){return h(t,"start",[i])}var o=f(t,"pull",0,[i]),s=f(t,"cancel",1,[])
qt(e,i,a,o,s,r,n)}function Wt(e){return new TypeError("ReadableStreamDefaultController.prototype."+e+" can only be used on a ReadableStreamDefaultController")}function Bt(e,t){var r,n,i,a,s,u=Y(e),c=!1,l=!1,f=!1,h=S((function(e){s=e}))
function d(){return!0===c||(c=!0,E(T(te(u),(function(e){if(c=!1,!0===e.done)return!1===l&&Lt(i._readableStreamController),void(!1===f&&Lt(a._readableStreamController))
var t=e.value,r=t,n=t
!1===l&&It(i._readableStreamController,r),!1===f&&It(a._readableStreamController,n)})))),w(void 0)}function p(t){if(l=!0,r=t,!0===f){var i=o([r,n]),a=jr(e,i)
s(a)}return h}function v(t){if(f=!0,n=t,!0===l){var i=o([r,n]),a=jr(e,i)
s(a)}return h}function y(){}return i=Fr(y,d,p),a=Fr(y,d,v),P(u._closedPromise,(function(e){Mt(i._readableStreamController,e),Mt(a._readableStreamController,e)})),[i,a]}var Gt=Number.isInteger||function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e},zt=function(){function e(){throw new TypeError("ReadableStreamBYOBRequest cannot be used directly")}return Object.defineProperty(e.prototype,"view",{get:function(){if(!1===Xt(this))throw _r("view")
return this._view},enumerable:!0,configurable:!0}),e.prototype.respond=function(e){if(!1===Xt(this))throw _r("respond")
if(void 0===this._associatedReadableByteStreamController)throw new TypeError("This BYOB request has been invalidated")
v(this._view.buffer),vr(this._associatedReadableByteStreamController,e)},e.prototype.respondWithNewView=function(e){if(!1===Xt(this))throw _r("respond")
if(void 0===this._associatedReadableByteStreamController)throw new TypeError("This BYOB request has been invalidated")
if(!ArrayBuffer.isView(e))throw new TypeError("You can only respond with array buffer views")
v(e.buffer),yr(this._associatedReadableByteStreamController,e)},e}(),Ht=function(){function e(){throw new TypeError("ReadableByteStreamController constructor cannot be used directly")}return Object.defineProperty(e.prototype,"byobRequest",{get:function(){if(!1===Yt(this))throw Ar("byobRequest")
if(void 0===this._byobRequest&&this._pendingPullIntos.length>0){var e=this._pendingPullIntos.peek(),t=new Uint8Array(e.buffer,e.byteOffset+e.bytesFilled,e.byteLength-e.bytesFilled),r=Object.create(zt.prototype)
br(r,this,t),this._byobRequest=r}return this._byobRequest},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"desiredSize",{get:function(){if(!1===Yt(this))throw Ar("desiredSize")
return pr(this)},enumerable:!0,configurable:!0}),e.prototype.close=function(){if(!1===Yt(this))throw Ar("close")
if(!0===this._closeRequested)throw new TypeError("The stream has already been closed; do not close it again!")
var e=this._controlledReadableByteStream._state
if("readable"!==e)throw new TypeError("The stream (in "+e+" state) is not in the readable state and cannot be closed")
fr(this)},e.prototype.enqueue=function(e){if(!1===Yt(this))throw Ar("enqueue")
if(!0===this._closeRequested)throw new TypeError("stream is closed or draining")
var t=this._controlledReadableByteStream._state
if("readable"!==t)throw new TypeError("The stream (in "+t+" state) is not in the readable state and cannot be enqueued to")
if(!ArrayBuffer.isView(e))throw new TypeError("You can only enqueue array buffer views when using a ReadableByteStreamController")
v(e.buffer),hr(this,e)},e.prototype.error=function(e){if(!1===Yt(this))throw Ar("error")
dr(this,e)},e.prototype[z]=function(e){this._pendingPullIntos.length>0&&(this._pendingPullIntos.peek().bytesFilled=0),le(this)
var t=this._cancelAlgorithm(e)
return lr(this),t},e.prototype[H]=function(){var e=this._controlledReadableByteStream
if(this._queueTotalSize>0){var t=this._queue.shift()
this._queueTotalSize-=t.byteLength,tr(this)
var r=void 0
try{r=new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}catch(s){return k(s)}return w(L(r,!1,e._reader._forAuthorCode))}var n=this._autoAllocateChunkSize
if(void 0!==n){var i=void 0
try{i=new ArrayBuffer(n)}catch(u){return k(u)}var a={buffer:i,byteOffset:0,byteLength:n,bytesFilled:0,elementSize:1,ctor:Uint8Array,readerType:"default"}
this._pendingPullIntos.push(a)}var o=X(e)
return Vt(this),o},e}()
function Yt(e){return!!a(e)&&!!Object.prototype.hasOwnProperty.call(e,"_controlledReadableByteStream")}function Xt(e){return!!a(e)&&!!Object.prototype.hasOwnProperty.call(e,"_associatedReadableByteStreamController")}function Vt(e){!1!==cr(e)&&(!0!==e._pulling?(e._pulling=!0,C(e._pullAlgorithm(),(function(){e._pulling=!1,!0===e._pullAgain&&(e._pullAgain=!1,Vt(e))}),(function(t){dr(e,t)}))):e._pullAgain=!0)}function Qt(e){rr(e),e._pendingPullIntos=new F}function Kt(e,t){var r=!1
"closed"===e._state&&(r=!0)
var n=Jt(t)
"default"===t.readerType?V(e,n,r):kr(e,n,r)}function Jt(e){var t=e.bytesFilled,r=e.elementSize
return new e.ctor(e.buffer,e.byteOffset,t/r)}function $t(e,t,r,n){e._queue.push({buffer:t,byteOffset:r,byteLength:n}),e._queueTotalSize+=n}function Zt(e,t){var r=t.elementSize,n=t.bytesFilled-t.bytesFilled%r,i=Math.min(e._queueTotalSize,t.byteLength-t.bytesFilled),a=t.bytesFilled+i,o=a-a%r,u=i,c=!1
o>n&&(u=o-t.bytesFilled,c=!0)
for(var l=e._queue;u>0;){var f=l.peek(),h=Math.min(u,f.byteLength),d=t.byteOffset+t.bytesFilled
s(t.buffer,d,f.buffer,f.byteOffset,h),f.byteLength===h?l.shift():(f.byteOffset+=h,f.byteLength-=h),e._queueTotalSize-=h,er(e,h,t),u-=h}return c}function er(e,t,r){rr(e),r.bytesFilled+=t}function tr(e){0===e._queueTotalSize&&!0===e._closeRequested?(lr(e),Dr(e._controlledReadableByteStream)):Vt(e)}function rr(e){void 0!==e._byobRequest&&(e._byobRequest._associatedReadableByteStreamController=void 0,e._byobRequest._view=void 0,e._byobRequest=void 0)}function nr(e){for(;e._pendingPullIntos.length>0;){if(0===e._queueTotalSize)return
var t=e._pendingPullIntos.peek()
!0===Zt(e,t)&&(ur(e),Kt(e._controlledReadableByteStream,t))}}function ir(e,t){var r=e._controlledReadableByteStream,n=1
t.constructor!==DataView&&(n=t.constructor.BYTES_PER_ELEMENT)
var i=t.constructor,a={buffer:p(t.buffer),byteOffset:t.byteOffset,byteLength:t.byteLength,bytesFilled:0,elementSize:n,ctor:i,readerType:"byob"}
if(e._pendingPullIntos.length>0)return e._pendingPullIntos.push(a),wr(r)
if("closed"===r._state)return w(L(new i(a.buffer,a.byteOffset,0),!0,r._reader._forAuthorCode))
if(e._queueTotalSize>0){if(!0===Zt(e,a)){var o=Jt(a)
return tr(e),w(L(o,!1,r._reader._forAuthorCode))}if(!0===e._closeRequested){var s=new TypeError("Insufficient bytes to fill elements in the given buffer")
return dr(e,s),k(s)}}e._pendingPullIntos.push(a)
var u=wr(r)
return Vt(e),u}function ar(e,t){t.buffer=p(t.buffer)
var r=e._controlledReadableByteStream
if(!0===Cr(r))for(;xr(r)>0;)Kt(r,ur(e))}function or(e,t,r){if(r.bytesFilled+t>r.byteLength)throw new RangeError("bytesWritten out of range")
if(er(e,t,r),!(r.bytesFilled<r.elementSize)){ur(e)
var n=r.bytesFilled%r.elementSize
if(n>0){var i=r.byteOffset+r.bytesFilled,a=r.buffer.slice(i-n,i)
$t(e,a,0,a.byteLength)}r.buffer=p(r.buffer),r.bytesFilled-=n,Kt(e._controlledReadableByteStream,r),nr(e)}}function sr(e,t){var r=e._pendingPullIntos.peek()
if("closed"===e._controlledReadableByteStream._state){if(0!==t)throw new TypeError("bytesWritten must be 0 when calling respond() on a closed stream")
ar(e,r)}else or(e,t,r)
Vt(e)}function ur(e){var t=e._pendingPullIntos.shift()
return rr(e),t}function cr(e){var t=e._controlledReadableByteStream
return"readable"===t._state&&!0!==e._closeRequested&&!1!==e._started&&(!0===K(t)&&Q(t)>0||!0===Cr(t)&&xr(t)>0||pr(e)>0)}function lr(e){e._pullAlgorithm=void 0,e._cancelAlgorithm=void 0}function fr(e){var t=e._controlledReadableByteStream
if(e._queueTotalSize>0)e._closeRequested=!0
else{if(e._pendingPullIntos.length>0&&e._pendingPullIntos.peek().bytesFilled>0){var r=new TypeError("Insufficient bytes to fill elements in the given buffer")
throw dr(e,r),r}lr(e),Dr(t)}}function hr(e,t){var r=e._controlledReadableByteStream,n=t.buffer,i=t.byteOffset,a=t.byteLength,o=p(n)
!0===K(r)?0===Q(r)?$t(e,o,i,a):V(r,new Uint8Array(o,i,a),!1):!0===Cr(r)?($t(e,o,i,a),nr(e)):$t(e,o,i,a),Vt(e)}function dr(e,t){var r=e._controlledReadableByteStream
"readable"===r._state&&(Qt(e),le(e),lr(e),Nr(r,t))}function pr(e){var t=e._controlledReadableByteStream._state
return"errored"===t?null:"closed"===t?0:e._strategyHWM-e._queueTotalSize}function vr(e,t){if(!1===u(t=Number(t)))throw new RangeError("bytesWritten must be a finite")
sr(e,t)}function yr(e,t){var r=e._pendingPullIntos.peek()
if(r.byteOffset+r.bytesFilled!==t.byteOffset)throw new RangeError("The region specified by view does not match byobRequest")
if(r.byteLength!==t.byteLength)throw new RangeError("The buffer of view has different capacity than byobRequest")
r.buffer=t.buffer,sr(e,t.byteLength)}function gr(e,t,r,n,i,a,o){t._controlledReadableByteStream=e,t._pullAgain=!1,t._pulling=!1,t._byobRequest=void 0,t._queue=t._queueTotalSize=void 0,le(t),t._closeRequested=!1,t._started=!1,t._strategyHWM=y(a),t._pullAlgorithm=n,t._cancelAlgorithm=i,t._autoAllocateChunkSize=o,t._pendingPullIntos=new F,e._readableStreamController=t,C(w(r()),(function(){t._started=!0,Vt(t)}),(function(e){dr(t,e)}))}function mr(e,t,r){var n=Object.create(Ht.prototype)
function i(){return h(t,"start",[n])}var a=f(t,"pull",0,[n]),o=f(t,"cancel",1,[]),s=t.autoAllocateChunkSize
if(void 0!==s&&(s=Number(s),!1===Gt(s)||s<=0))throw new RangeError("autoAllocateChunkSize must be a positive integer")
gr(e,n,i,a,o,r,s)}function br(e,t,r){e._associatedReadableByteStreamController=t,e._view=r}function _r(e){return new TypeError("ReadableStreamBYOBRequest.prototype."+e+" can only be used on a ReadableStreamBYOBRequest")}function Ar(e){return new TypeError("ReadableByteStreamController.prototype."+e+" can only be used on a ReadableByteStreamController")}function Sr(e,t){void 0===t&&(t=!1)
var r=new Rr(e)
return r._forAuthorCode=t,r}function wr(e){return S((function(t,r){var n={_resolve:t,_reject:r}
e._reader._readIntoRequests.push(n)}))}function kr(e,t,r){var n=e._reader
n._readIntoRequests.shift()._resolve(L(t,r,n._forAuthorCode))}function xr(e){return e._reader._readIntoRequests.length}function Cr(e){var t=e._reader
return void 0!==t&&!!Pr(t)}var Rr=function(){function e(e){if(!Ir(e))throw new TypeError("ReadableStreamBYOBReader can only be constructed with a ReadableStream instance given a byte source")
if(!1===Yt(e._readableStreamController))throw new TypeError("Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source")
if(Mr(e))throw new TypeError("This stream has already been locked for exclusive reading by another reader")
I(this,e),this._readIntoRequests=new F}return Object.defineProperty(e.prototype,"closed",{get:function(){return Pr(this)?this._closedPromise:k(Er("closed"))},enumerable:!0,configurable:!0}),e.prototype.cancel=function(e){return Pr(this)?void 0===this._ownerReadableStream?k(D("cancel")):M(this,e):k(Er("cancel"))},e.prototype.read=function(e){return Pr(this)?void 0===this._ownerReadableStream?k(D("read from")):ArrayBuffer.isView(e)?(v(e.buffer),0===e.byteLength?k(new TypeError("view must have non-zero byteLength")):Tr(this,e)):k(new TypeError("view must be an array buffer view")):k(Er("read"))},e.prototype.releaseLock=function(){if(!Pr(this))throw Er("releaseLock")
if(void 0!==this._ownerReadableStream){if(this._readIntoRequests.length>0)throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled")
j(this)}},e}()
function Pr(e){return!!a(e)&&!!Object.prototype.hasOwnProperty.call(e,"_readIntoRequests")}function Tr(e,t){var r=e._ownerReadableStream
return r._disturbed=!0,"errored"===r._state?k(r._storedError):ir(r._readableStreamController,t)}function Er(e){return new TypeError("ReadableStreamBYOBReader.prototype."+e+" can only be used on a ReadableStreamBYOBReader")}var Or=function(){function e(e,t){void 0===e&&(e={}),void 0===t&&(t={}),Lr(this)
var r=t.size,n=t.highWaterMark,i=e.type
if("bytes"===String(i)){if(void 0!==r)throw new RangeError("The strategy for a byte stream cannot have a size function")
void 0===n&&(n=0),mr(this,e,n=y(n))}else{if(void 0!==i)throw new RangeError("Invalid type is specified")
var a=g(r)
void 0===n&&(n=1),Ut(this,e,n=y(n),a)}}return Object.defineProperty(e.prototype,"locked",{get:function(){if(!1===Ir(this))throw qr("locked")
return Mr(this)},enumerable:!0,configurable:!0}),e.prototype.cancel=function(e){return!1===Ir(this)?k(qr("cancel")):!0===Mr(this)?k(new TypeError("Cannot cancel a stream that already has a reader")):jr(this,e)},e.prototype.getReader=function(e){var t=(void 0===e?{}:e).mode
if(!1===Ir(this))throw qr("getReader")
if(void 0===t)return Y(this,!0)
if("byob"===(t=String(t)))return Sr(this,!0)
throw new RangeError("Invalid mode is specified")},e.prototype.pipeThrough=function(e,t){var r=e.writable,n=e.readable,i=void 0===t?{}:t,a=i.preventClose,o=i.preventAbort,s=i.preventCancel,u=i.signal
if(!1===Ir(this))throw qr("pipeThrough")
if(!1===ge(r))throw new TypeError("writable argument to pipeThrough must be a WritableStream")
if(!1===Ir(n))throw new TypeError("readable argument to pipeThrough must be a ReadableStream")
if(a=Boolean(a),o=Boolean(o),s=Boolean(s),void 0!==u&&!St(u))throw new TypeError("ReadableStream.prototype.pipeThrough's signal option must be an AbortSignal")
if(!0===Mr(this))throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream")
if(!0===me(r))throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream")
return E(Rt(this,r,a,o,s,u)),n},e.prototype.pipeTo=function(e,t){var r=void 0===t?{}:t,n=r.preventClose,i=r.preventAbort,a=r.preventCancel,o=r.signal
return!1===Ir(this)?k(qr("pipeTo")):!1===ge(e)?k(new TypeError("ReadableStream.prototype.pipeTo's first argument must be a WritableStream")):(n=Boolean(n),i=Boolean(i),a=Boolean(a),void 0===o||St(o)?!0===Mr(this)?k(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream")):!0===me(e)?k(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream")):Rt(this,e,n,i,a,o):k(new TypeError("ReadableStream.prototype.pipeTo's signal option must be an AbortSignal")))},e.prototype.tee=function(){if(!1===Ir(this))throw qr("tee")
return o(Bt(this))},e.prototype.getIterator=function(e){var t=(void 0===e?{}:e).preventCancel,r=void 0!==t&&t
if(!1===Ir(this))throw qr("getIterator")
return ie(this,r)},e}()
function Fr(e,t,r,n,i){void 0===n&&(n=1),void 0===i&&(i=function(){return 1})
var a=Object.create(Or.prototype)
return Lr(a),qt(a,Object.create(Pt.prototype),e,t,r,n,i),a}function Lr(e){e._state="readable",e._reader=void 0,e._storedError=void 0,e._disturbed=!1}function Ir(e){return!!a(e)&&!!Object.prototype.hasOwnProperty.call(e,"_readableStreamController")}function Mr(e){return void 0!==e._reader}function jr(e,t){return e._disturbed=!0,"closed"===e._state?w(void 0):"errored"===e._state?k(e._storedError):(Dr(e),T(e._readableStreamController[z](t),r))}function Dr(e){e._state="closed"
var t=e._reader
void 0!==t&&(ee(t)&&(t._readRequests.forEach((function(e){e._resolve(L(void 0,!0,t._forAuthorCode))})),t._readRequests=new F),G(t))}function Nr(e,t){e._state="errored",e._storedError=t
var r=e._reader
void 0!==r&&(ee(r)?(r._readRequests.forEach((function(e){e._reject(t)})),r._readRequests=new F):(r._readIntoRequests.forEach((function(e){e._reject(t)})),r._readIntoRequests=new F),W(r,t))}function qr(e){return new TypeError("ReadableStream.prototype."+e+" can only be used on a ReadableStream")}"symbol"==typeof t.asyncIterator&&Object.defineProperty(Or.prototype,t.asyncIterator,{value:Or.prototype.getIterator,enumerable:!1,writable:!0,configurable:!0})
var Ur=function(){function e(e){var t=e.highWaterMark
this.highWaterMark=t}return e.prototype.size=function(e){return e.byteLength},e}(),Wr=function(){function e(e){var t=e.highWaterMark
this.highWaterMark=t}return e.prototype.size=function(){return 1},e}(),Br=function(){function e(e,t,r){void 0===e&&(e={}),void 0===t&&(t={}),void 0===r&&(r={})
var n=t.size,i=t.highWaterMark,a=r.size,o=r.highWaterMark
if(void 0!==e.writableType)throw new RangeError("Invalid writable type specified")
var s=g(n)
if(void 0===i&&(i=1),i=y(i),void 0!==e.readableType)throw new RangeError("Invalid readable type specified")
var u,c=g(a)
void 0===o&&(o=0),o=y(o),Gr(this,S((function(e){u=e})),i,s,o,c),Jr(this,e)
var l=h(e,"start",[this._transformStreamController])
u(l)}return Object.defineProperty(e.prototype,"readable",{get:function(){if(!1===zr(this))throw cn("readable")
return this._readable},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"writable",{get:function(){if(!1===zr(this))throw cn("writable")
return this._writable},enumerable:!0,configurable:!0}),e}()
function Gr(e,t,r,n,i,a){function o(){return t}function s(t){return nn(e,t)}function u(t){return an(e,t)}function c(){return on(e)}function l(){return sn(e)}function f(t){return Yr(e,t),w(void 0)}e._writable=ve(o,s,c,u,r,n),e._readable=Fr(o,l,f,i,a),e._backpressure=void 0,e._backpressureChangePromise=void 0,e._backpressureChangePromise_resolve=void 0,Xr(e,!0),e._transformStreamController=void 0}function zr(e){return!!a(e)&&!!Object.prototype.hasOwnProperty.call(e,"_transformStreamController")}function Hr(e,t){Mt(e._readable._readableStreamController,t),Yr(e,t)}function Yr(e,t){$r(e._transformStreamController),tt(e._writable._writableStreamController,t),!0===e._backpressure&&Xr(e,!1)}function Xr(e,t){void 0!==e._backpressureChangePromise&&e._backpressureChangePromise_resolve(),e._backpressureChangePromise=S((function(t){e._backpressureChangePromise_resolve=t})),e._backpressure=t}var Vr=function(){function e(){throw new TypeError("TransformStreamDefaultController instances cannot be created directly")}return Object.defineProperty(e.prototype,"desiredSize",{get:function(){if(!1===Qr(this))throw un("desiredSize")
return jt(this._controlledTransformStream._readable._readableStreamController)},enumerable:!0,configurable:!0}),e.prototype.enqueue=function(e){if(!1===Qr(this))throw un("enqueue")
Zr(this,e)},e.prototype.error=function(e){if(!1===Qr(this))throw un("error")
en(this,e)},e.prototype.terminate=function(){if(!1===Qr(this))throw un("terminate")
rn(this)},e}()
function Qr(e){return!!a(e)&&!!Object.prototype.hasOwnProperty.call(e,"_controlledTransformStream")}function Kr(e,t,r,n){t._controlledTransformStream=e,e._transformStreamController=t,t._transformAlgorithm=r,t._flushAlgorithm=n}function Jr(e,t){var r=Object.create(Vr.prototype),n=function(e){try{return Zr(r,e),w(void 0)}catch(t){return k(t)}},i=t.transform
if(void 0!==i){if("function"!=typeof i)throw new TypeError("transform is not a method")
n=function(e){return d(i,t,[e,r])}}var a=f(t,"flush",0,[r])
Kr(e,r,n,a)}function $r(e){e._transformAlgorithm=void 0,e._flushAlgorithm=void 0}function Zr(e,t){var r=e._controlledTransformStream,n=r._readable._readableStreamController
if(!1===Nt(n))throw new TypeError("Readable side is not in a state that permits enqueue")
try{It(n,t)}catch(i){throw Yr(r,i),r._readable._storedError}Dt(n)!==r._backpressure&&Xr(r,!0)}function en(e,t){Hr(e._controlledTransformStream,t)}function tn(e,t){return T(e._transformAlgorithm(t),void 0,(function(t){throw Hr(e._controlledTransformStream,t),t}))}function rn(e){var t=e._controlledTransformStream,r=t._readable._readableStreamController
!0===Nt(r)&&Lt(r),Yr(t,new TypeError("TransformStream terminated"))}function nn(e,t){var r=e._transformStreamController
return!0===e._backpressure?T(e._backpressureChangePromise,(function(){var n=e._writable
if("erroring"===n._state)throw n._storedError
return tn(r,t)})):tn(r,t)}function an(e,t){return Hr(e,t),w(void 0)}function on(e){var t=e._readable,r=e._transformStreamController,n=r._flushAlgorithm()
return $r(r),T(n,(function(){if("errored"===t._state)throw t._storedError
var e=t._readableStreamController
!0===Nt(e)&&Lt(e)}),(function(r){throw Hr(e,r),t._storedError}))}function sn(e){return Xr(e,!1),e._backpressureChangePromise}function un(e){return new TypeError("TransformStreamDefaultController.prototype."+e+" can only be used on a TransformStreamDefaultController")}function cn(e){return new TypeError("TransformStream.prototype."+e+" can only be used on a TransformStream")}e.ByteLengthQueuingStrategy=Ur,e.CountQueuingStrategy=Wr,e.ReadableStream=Or,e.TransformStream=Br,e.WritableStream=de,Object.defineProperty(e,"__esModule",{value:!0})}(t)},function(e,t,r){r(147),r(118),r(77),r(120)
var n=r(43)
e.exports=n.Map},function(e,t,r){"use strict"
var n=r(148),i=r(152)
e.exports=n("Map",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),i)},function(e,t,r){"use strict"
var n=r(10),i=r(11),a=r(52),o=r(29),s=r(149),u=r(104),c=r(126),l=r(22),f=r(14),h=r(97),d=r(85),p=r(151)
e.exports=function(e,t,r){var v=-1!==e.indexOf("Map"),y=-1!==e.indexOf("Weak"),g=v?"set":"add",m=i[e],b=m&&m.prototype,_=m,A={},S=function(e){var t=b[e]
o(b,e,"add"==e?function(e){return t.call(this,0===e?0:e),this}:"delete"==e?function(e){return!(y&&!l(e))&&t.call(this,0===e?0:e)}:"get"==e?function(e){return y&&!l(e)?void 0:t.call(this,0===e?0:e)}:"has"==e?function(e){return!(y&&!l(e))&&t.call(this,0===e?0:e)}:function(e,r){return t.call(this,0===e?0:e,r),this})}
if(a(e,"function"!=typeof m||!(y||b.forEach&&!f((function(){(new m).entries().next()})))))_=r.getConstructor(t,e,v,g),s.REQUIRED=!0
else if(a(e,!0)){var w=new _,k=w[g](y?{}:-0,1)!=w,x=f((function(){w.has(1)})),C=h((function(e){new m(e)})),R=!y&&f((function(){for(var e=new m,t=5;t--;)e[g](t,t)
return!e.has(-0)}))
C||((_=t((function(t,r){c(t,_,e)
var n=p(new m,t,_)
return null!=r&&u(r,n[g],n,v),n}))).prototype=b,b.constructor=_),(x||R)&&(S("delete"),S("has"),v&&S("get")),(R||k)&&S(g),y&&b.clear&&delete b.clear}return A[e]=_,n({global:!0,forced:_!=m},A),d(_,e),y||r.setStrong(_,e,v),_}},function(e,t,r){var n=r(39),i=r(22),a=r(23),o=r(27).f,s=r(38),u=r(150),c=s("meta"),l=0,f=Object.isExtensible||function(){return!0},h=function(e){o(e,c,{value:{objectID:"O"+ ++l,weakData:{}}})},d=e.exports={REQUIRED:!1,fastKey:function(e,t){if(!i(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e
if(!a(e,c)){if(!f(e))return"F"
if(!t)return"E"
h(e)}return e[c].objectID},getWeakData:function(e,t){if(!a(e,c)){if(!f(e))return!0
if(!t)return!1
h(e)}return e[c].weakData},onFreeze:function(e){return u&&d.REQUIRED&&f(e)&&!a(e,c)&&h(e),e}}
n[c]=!0},function(e,t,r){var n=r(14)
e.exports=!n((function(){return Object.isExtensible(Object.preventExtensions({}))}))},function(e,t,r){var n=r(22),i=r(87)
e.exports=function(e,t,r){var a,o
return i&&"function"==typeof(a=t.constructor)&&a!==r&&n(o=a.prototype)&&o!==r.prototype&&i(e,o),e}},function(e,t,r){"use strict"
var n=r(27).f,i=r(71),a=r(124),o=r(62),s=r(126),u=r(104),c=r(79),l=r(125),f=r(13),h=r(149).fastKey,d=r(33),p=d.set,v=d.getterFor
e.exports={getConstructor:function(e,t,r,c){var l=e((function(e,n){s(e,l,t),p(e,{type:t,index:i(null),first:void 0,last:void 0,size:0}),f||(e.size=0),null!=n&&u(n,e[c],e,r)})),d=v(t),y=function(e,t,r){var n,i,a=d(e),o=g(e,t)
return o?o.value=r:(a.last=o={index:i=h(t,!0),key:t,value:r,previous:n=a.last,next:void 0,removed:!1},a.first||(a.first=o),n&&(n.next=o),f?a.size++:e.size++,"F"!==i&&(a.index[i]=o)),e},g=function(e,t){var r,n=d(e),i=h(t)
if("F"!==i)return n.index[i]
for(r=n.first;r;r=r.next)if(r.key==t)return r}
return a(l.prototype,{clear:function(){for(var e=d(this),t=e.index,r=e.first;r;)r.removed=!0,r.previous&&(r.previous=r.previous.next=void 0),delete t[r.index],r=r.next
e.first=e.last=void 0,f?e.size=0:this.size=0},delete:function(e){var t=this,r=d(t),n=g(t,e)
if(n){var i=n.next,a=n.previous
delete r.index[n.index],n.removed=!0,a&&(a.next=i),i&&(i.previous=a),r.first==n&&(r.first=i),r.last==n&&(r.last=a),f?r.size--:t.size--}return!!n},forEach:function(e){for(var t,r=d(this),n=o(e,arguments.length>1?arguments[1]:void 0,3);t=t?t.next:r.first;)for(n(t.value,t.key,this);t&&t.removed;)t=t.previous},has:function(e){return!!g(this,e)}}),a(l.prototype,r?{get:function(e){var t=g(this,e)
return t&&t.value},set:function(e,t){return y(this,0===e?0:e,t)}}:{add:function(e){return y(this,e=0===e?0:e,e)}}),f&&n(l.prototype,"size",{get:function(){return d(this).size}}),l},setStrong:function(e,t,r){var n=t+" Iterator",i=v(t),a=v(n)
c(e,t,(function(e,t){p(this,{type:n,target:e,state:i(e),kind:t,last:void 0})}),(function(){for(var e=a(this),t=e.kind,r=e.last;r&&r.removed;)r=r.previous
return e.target&&(e.last=r=r?r.next:e.state.first)?"keys"==t?{value:r.key,done:!1}:"values"==t?{value:r.value,done:!1}:{value:[r.key,r.value],done:!1}:(e.target=void 0,{value:void 0,done:!0})}),r?"entries":"values",!r,!0),l(t)}}},function(e,t,r){r(154),r(118),r(77),r(120)
var n=r(43)
e.exports=n.Set},function(e,t,r){"use strict"
var n=r(148),i=r(152)
e.exports=n("Set",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),i)},function(e,t,r){r(118),r(156),r(120)
var n=r(43)
e.exports=n.WeakMap},function(e,t,r){"use strict"
var n,i=r(11),a=r(124),o=r(149),s=r(148),u=r(157),c=r(22),l=r(33).enforce,f=r(34),h=!i.ActiveXObject&&"ActiveXObject"in i,d=Object.isExtensible,p=function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}},v=e.exports=s("WeakMap",p,u)
if(f&&h){n=u.getConstructor(p,"WeakMap",!0),o.REQUIRED=!0
var y=v.prototype,g=y.delete,m=y.has,b=y.get,_=y.set
a(y,{delete:function(e){if(c(e)&&!d(e)){var t=l(this)
return t.frozen||(t.frozen=new n),g.call(this,e)||t.frozen.delete(e)}return g.call(this,e)},has:function(e){if(c(e)&&!d(e)){var t=l(this)
return t.frozen||(t.frozen=new n),m.call(this,e)||t.frozen.has(e)}return m.call(this,e)},get:function(e){if(c(e)&&!d(e)){var t=l(this)
return t.frozen||(t.frozen=new n),m.call(this,e)?b.call(this,e):t.frozen.get(e)}return b.call(this,e)},set:function(e,t){if(c(e)&&!d(e)){var r=l(this)
r.frozen||(r.frozen=new n),m.call(this,e)?_.call(this,e,t):r.frozen.set(e,t)}else _.call(this,e,t)
return this}})}},function(e,t,r){"use strict"
var n=r(124),i=r(149).getWeakData,a=r(28),o=r(22),s=r(126),u=r(104),c=r(158),l=r(23),f=r(33),h=f.set,d=f.getterFor,p=c.find,v=c.findIndex,y=0,g=function(e){return e.frozen||(e.frozen=new m)},m=function(){this.entries=[]},b=function(e,t){return p(e.entries,(function(e){return e[0]===t}))}
m.prototype={get:function(e){var t=b(this,e)
if(t)return t[1]},has:function(e){return!!b(this,e)},set:function(e,t){var r=b(this,e)
r?r[1]=t:this.entries.push([e,t])},delete:function(e){var t=v(this.entries,(function(t){return t[0]===e}))
return~t&&this.entries.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,r,c){var f=e((function(e,n){s(e,f,t),h(e,{type:t,id:y++,frozen:void 0}),null!=n&&u(n,e[c],e,r)})),p=d(t),v=function(e,t,r){var n=p(e),o=i(a(t),!0)
return!0===o?g(n).set(t,r):o[n.id]=r,e}
return n(f.prototype,{delete:function(e){var t=p(this)
if(!o(e))return!1
var r=i(e)
return!0===r?g(t).delete(e):r&&l(r,t.id)&&delete r[t.id]},has:function(e){var t=p(this)
if(!o(e))return!1
var r=i(e)
return!0===r?g(t).has(e):r&&l(r,t.id)}}),n(f.prototype,r?{get:function(e){var t=p(this)
if(o(e)){var r=i(e)
return!0===r?g(t).get(e):r?r[t.id]:void 0}},set:function(e,t){return v(this,e,t)}}:{add:function(e){return v(this,e,!0)}}),f}}},function(e,t,r){var n=r(62),i=r(18),a=r(83),o=r(47),s=r(159),u=[].push,c=function(e){var t=1==e,r=2==e,c=3==e,l=4==e,f=6==e,h=5==e||f
return function(d,p,v,y){for(var g,m,b=a(d),_=i(b),A=n(p,v,3),S=o(_.length),w=0,k=y||s,x=t?k(d,S):r?k(d,0):void 0;S>w;w++)if((h||w in _)&&(m=A(g=_[w],w,b),e))if(t)x[w]=m
else if(m)switch(e){case 3:return!0
case 5:return g
case 6:return w
case 2:u.call(x,g)}else if(l)return!1
return f?-1:c||l?l:x}}
e.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6)}},function(e,t,r){var n=r(22),i=r(160),a=r(57)("species")
e.exports=function(e,t){var r
return i(e)&&("function"!=typeof(r=e.constructor)||r!==Array&&!i(r.prototype)?n(r)&&null===(r=r[a])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===t?0:t)}},function(e,t,r){var n=r(19)
e.exports=Array.isArray||function(e){return"Array"==n(e)}},function(e,t,r){r(118),r(162),r(120)
var n=r(43)
e.exports=n.WeakSet},function(e,t,r){"use strict"
r(148)("WeakSet",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),r(157))},function(e,t,r){r(164)
var n=r(61)
e.exports=n("String","codePointAt")},function(e,t,r){"use strict"
var n=r(10),i=r(78).codeAt
n({target:"String",proto:!0},{codePointAt:function(e){return i(this,e)}})},function(e,t,r){r(166)
var n=r(43)
e.exports=n.String.fromCodePoint},function(e,t,r){var n=r(10),i=r(49),a=String.fromCharCode,o=String.fromCodePoint
n({target:"String",stat:!0,forced:!!o&&1!=o.length},{fromCodePoint:function(e){for(var t,r=[],n=arguments.length,o=0;n>o;){if(t=+arguments[o++],i(t,1114111)!==t)throw RangeError(t+" is not a valid code point")
r.push(t<65536?a(t):a(55296+((t-=65536)>>10),t%1024+56320))}return r.join("")}})},function(e,t,r){r(168),r(118),r(170),r(174),r(175),r(176),r(177),r(178),r(179),r(180),r(181),r(182),r(183),r(184),r(185),r(186),r(187),r(188),r(189)
var n=r(43)
e.exports=n.Symbol},function(e,t,r){"use strict"
var n=r(10),i=r(14),a=r(160),o=r(22),s=r(83),u=r(47),c=r(93),l=r(159),f=r(169),h=r(57),d=r(135),p=h("isConcatSpreadable"),v=9007199254740991,y="Maximum allowed index exceeded",g=d>=51||!i((function(){var e=[]
return e[p]=!1,e.concat()[0]!==e})),m=f("concat"),b=function(e){if(!o(e))return!1
var t=e[p]
return void 0!==t?!!t:a(e)}
n({target:"Array",proto:!0,forced:!g||!m},{concat:function(e){var t,r,n,i,a,o=s(this),f=l(o,0),h=0
for(t=-1,n=arguments.length;t<n;t++)if(b(a=-1===t?o:arguments[t])){if(h+(i=u(a.length))>v)throw TypeError(y)
for(r=0;r<i;r++,h++)r in a&&c(f,h,a[r])}else{if(h>=v)throw TypeError(y)
c(f,h++,a)}return f.length=h,f}})},function(e,t,r){var n=r(14),i=r(57),a=r(135),o=i("species")
e.exports=function(e){return a>=51||!n((function(){var t=[]
return(t.constructor={})[o]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},function(e,t,r){"use strict"
var n=r(10),i=r(11),a=r(42),o=r(37),s=r(13),u=r(58),c=r(59),l=r(14),f=r(23),h=r(160),d=r(22),p=r(28),v=r(83),y=r(17),g=r(21),m=r(16),b=r(71),_=r(73),A=r(44),S=r(171),w=r(51),k=r(12),x=r(27),C=r(15),R=r(26),P=r(29),T=r(36),E=r(35),O=r(39),F=r(38),L=r(57),I=r(172),M=r(173),j=r(85),D=r(33),N=r(158).forEach,q=E("hidden"),U="Symbol",W=L("toPrimitive"),B=D.set,G=D.getterFor(U),z=Object.prototype,H=i.Symbol,Y=a("JSON","stringify"),X=k.f,V=x.f,Q=S.f,K=C.f,J=T("symbols"),$=T("op-symbols"),Z=T("string-to-symbol-registry"),ee=T("symbol-to-string-registry"),te=T("wks"),re=i.QObject,ne=!re||!re.prototype||!re.prototype.findChild,ie=s&&l((function(){return 7!=b(V({},"a",{get:function(){return V(this,"a",{value:7}).a}})).a}))?function(e,t,r){var n=X(z,t)
n&&delete z[t],V(e,t,r),n&&e!==z&&V(z,t,n)}:V,ae=function(e,t){var r=J[e]=b(H.prototype)
return B(r,{type:U,tag:e,description:t}),s||(r.description=t),r},oe=c?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof H},se=function(e,t,r){e===z&&se($,t,r),p(e)
var n=g(t,!0)
return p(r),f(J,n)?(r.enumerable?(f(e,q)&&e[q][n]&&(e[q][n]=!1),r=b(r,{enumerable:m(0,!1)})):(f(e,q)||V(e,q,m(1,{})),e[q][n]=!0),ie(e,n,r)):V(e,n,r)},ue=function(e,t){p(e)
var r=y(t),n=_(r).concat(he(r))
return N(n,(function(t){s&&!ce.call(r,t)||se(e,t,r[t])})),e},ce=function(e){var t=g(e,!0),r=K.call(this,t)
return!(this===z&&f(J,t)&&!f($,t))&&(!(r||!f(this,t)||!f(J,t)||f(this,q)&&this[q][t])||r)},le=function(e,t){var r=y(e),n=g(t,!0)
if(r!==z||!f(J,n)||f($,n)){var i=X(r,n)
return!i||!f(J,n)||f(r,q)&&r[q][n]||(i.enumerable=!0),i}},fe=function(e){var t=Q(y(e)),r=[]
return N(t,(function(e){f(J,e)||f(O,e)||r.push(e)})),r},he=function(e){var t=e===z,r=Q(t?$:y(e)),n=[]
return N(r,(function(e){!f(J,e)||t&&!f(z,e)||n.push(J[e])})),n};(u||(P((H=function(){if(this instanceof H)throw TypeError("Symbol is not a constructor")
var e=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,t=F(e),r=function(e){this===z&&r.call($,e),f(this,q)&&f(this[q],t)&&(this[q][t]=!1),ie(this,t,m(1,e))}
return s&&ne&&ie(z,t,{configurable:!0,set:r}),ae(t,e)}).prototype,"toString",(function(){return G(this).tag})),P(H,"withoutSetter",(function(e){return ae(F(e),e)})),C.f=ce,x.f=se,k.f=le,A.f=S.f=fe,w.f=he,I.f=function(e){return ae(L(e),e)},s&&(V(H.prototype,"description",{configurable:!0,get:function(){return G(this).description}}),o||P(z,"propertyIsEnumerable",ce,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:H}),N(_(te),(function(e){M(e)})),n({target:U,stat:!0,forced:!u},{for:function(e){var t=String(e)
if(f(Z,t))return Z[t]
var r=H(t)
return Z[t]=r,ee[r]=t,r},keyFor:function(e){if(!oe(e))throw TypeError(e+" is not a symbol")
if(f(ee,e))return ee[e]},useSetter:function(){ne=!0},useSimple:function(){ne=!1}}),n({target:"Object",stat:!0,forced:!u,sham:!s},{create:function(e,t){return void 0===t?b(e):ue(b(e),t)},defineProperty:se,defineProperties:ue,getOwnPropertyDescriptor:le}),n({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:fe,getOwnPropertySymbols:he}),n({target:"Object",stat:!0,forced:l((function(){w.f(1)}))},{getOwnPropertySymbols:function(e){return w.f(v(e))}}),Y)&&n({target:"JSON",stat:!0,forced:!u||l((function(){var e=H()
return"[null]"!=Y([e])||"{}"!=Y({a:e})||"{}"!=Y(Object(e))}))},{stringify:function(e,t,r){for(var n,i=[e],a=1;arguments.length>a;)i.push(arguments[a++])
if(n=t,(d(t)||void 0!==e)&&!oe(e))return h(t)||(t=function(e,t){if("function"==typeof n&&(t=n.call(this,e,t)),!oe(t))return t}),i[1]=t,Y.apply(null,i)}})
H.prototype[W]||R(H.prototype,W,H.prototype.valueOf),j(H,U),O[q]=!0},function(e,t,r){var n=r(17),i=r(44).f,a={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[]
e.exports.f=function(e){return o&&"[object Window]"==a.call(e)?function(e){try{return i(e)}catch(t){return o.slice()}}(e):i(n(e))}},function(e,t,r){var n=r(57)
t.f=n},function(e,t,r){var n=r(43),i=r(23),a=r(172),o=r(27).f
e.exports=function(e){var t=n.Symbol||(n.Symbol={})
i(t,e)||o(t,e,{value:a.f(e)})}},function(e,t,r){r(173)("asyncIterator")},function(e,t,r){"use strict"
var n=r(10),i=r(13),a=r(11),o=r(23),s=r(22),u=r(27).f,c=r(40),l=a.Symbol
if(i&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var f={},h=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof h?new l(e):void 0===e?l():l(e)
return""===e&&(f[t]=!0),t}
c(h,l)
var d=h.prototype=l.prototype
d.constructor=h
var p=d.toString,v="Symbol(test)"==String(l("test")),y=/^Symbol\((.*)\)[^)]+$/
u(d,"description",{configurable:!0,get:function(){var e=s(this)?this.valueOf():this,t=p.call(e)
if(o(f,e))return""
var r=v?t.slice(7,-1):t.replace(y,"$1")
return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:h})}},function(e,t,r){r(173)("hasInstance")},function(e,t,r){r(173)("isConcatSpreadable")},function(e,t,r){r(173)("iterator")},function(e,t,r){r(173)("match")},function(e,t,r){r(173)("matchAll")},function(e,t,r){r(173)("replace")},function(e,t,r){r(173)("search")},function(e,t,r){r(173)("species")},function(e,t,r){r(173)("split")},function(e,t,r){r(173)("toPrimitive")},function(e,t,r){r(173)("toStringTag")},function(e,t,r){r(173)("unscopables")},function(e,t,r){r(85)(Math,"Math",!0)},function(e,t,r){var n=r(11)
r(85)(n.JSON,"JSON",!0)},function(e,t,r){r(191)
var n=r(61)
e.exports=n("String","padStart")},function(e,t,r){"use strict"
var n=r(10),i=r(192).start
n({target:"String",proto:!0,forced:r(194)},{padStart:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},function(e,t,r){var n=r(47),i=r(193),a=r(20),o=Math.ceil,s=function(e){return function(t,r,s){var u,c,l=String(a(t)),f=l.length,h=void 0===s?" ":String(s),d=n(r)
return d<=f||""==h?l:(u=d-f,(c=i.call(h,o(u/h.length))).length>u&&(c=c.slice(0,u)),e?l+c:c+l)}}
e.exports={start:s(!1),end:s(!0)}},function(e,t,r){"use strict"
var n=r(48),i=r(20)
e.exports="".repeat||function(e){var t=String(i(this)),r="",a=n(e)
if(a<0||a==1/0)throw RangeError("Wrong number of repetitions")
for(;a>0;(a>>>=1)&&(t+=t))1&a&&(r+=t)
return r}},function(e,t,r){var n=r(129)
e.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(n)},function(e,t,r){r(196)
var n=r(61)
e.exports=n("String","padEnd")},function(e,t,r){"use strict"
var n=r(10),i=r(192).end
n({target:"String",proto:!0,forced:r(194)},{padEnd:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},function(e,t,r){r(198)
var n=r(43)
e.exports=n.Object.values},function(e,t,r){var n=r(10),i=r(199).values
n({target:"Object",stat:!0},{values:function(e){return i(e)}})},function(e,t,r){var n=r(13),i=r(73),a=r(17),o=r(15).f,s=function(e){return function(t){for(var r,s=a(t),u=i(s),c=u.length,l=0,f=[];c>l;)r=u[l++],n&&!o.call(s,r)||f.push(e?[r,s[r]]:s[r])
return f}}
e.exports={entries:s(!0),values:s(!1)}},function(e,t,r){r(201)
var n=r(43)
e.exports=n.Object.entries},function(e,t,r){var n=r(10),i=r(199).entries
n({target:"Object",stat:!0},{entries:function(e){return i(e)}})},function(module,exports,__w_pdfjs_require__){"use strict"
Object.defineProperty(exports,"__esModule",{value:!0}),exports.getDocument=getDocument,exports.setPDFNetworkStreamFactory=setPDFNetworkStreamFactory,exports.build=exports.version=exports.PDFPageProxy=exports.PDFDocumentProxy=exports.PDFWorker=exports.PDFDataRangeTransport=exports.LoopbackPort=void 0
var _regenerator=_interopRequireDefault(__w_pdfjs_require__(2)),_util=__w_pdfjs_require__(5),_display_utils=__w_pdfjs_require__(1),_font_loader=__w_pdfjs_require__(203),_node_utils=__w_pdfjs_require__(204),_annotation_storage=__w_pdfjs_require__(205),_api_compatibility=__w_pdfjs_require__(206),_canvas=__w_pdfjs_require__(207),_worker_options=__w_pdfjs_require__(209),_is_node=__w_pdfjs_require__(7),_message_handler=__w_pdfjs_require__(210),_metadata=__w_pdfjs_require__(211),_optional_content_config=__w_pdfjs_require__(213),_transport_stream=__w_pdfjs_require__(214),_webgl=__w_pdfjs_require__(215)
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function asyncGeneratorStep(e,t,r,n,i,a,o){try{var s=e[a](o),u=s.value}catch(c){return void r(c)}s.done?t(u):Promise.resolve(u).then(n,i)}function _asyncToGenerator(e){return function(){var t=this,r=arguments
return new Promise((function(n,i){var a=e.apply(t,r)
function o(e){asyncGeneratorStep(a,n,i,o,s,"next",e)}function s(e){asyncGeneratorStep(a,n,i,o,s,"throw",e)}o(void 0)}))}}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _createForOfIteratorHelper(e,t){var r
if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){r&&(e=r)
var n=0,i=function(){}
return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,s=!1
return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next()
return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||null==r.return||r.return()}finally{if(s)throw a}}}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_unsupportedIterableToArray(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function _iterableToArrayLimit(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,i=!1,a=void 0
try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(u){i=!0,a=u}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}return r}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var DEFAULT_RANGE_CHUNK_SIZE=65536,RENDERING_CANCELLED_TIMEOUT=100,DefaultCanvasFactory=_is_node.isNodeJS?_node_utils.NodeCanvasFactory:_display_utils.DOMCanvasFactory,DefaultCMapReaderFactory=_is_node.isNodeJS?_node_utils.NodeCMapReaderFactory:_display_utils.DOMCMapReaderFactory,createPDFNetworkStream
function setPDFNetworkStreamFactory(e){createPDFNetworkStream=e}function getDocument(e){var t,r=new PDFDocumentLoadingTask
if("string"==typeof e)t={url:e}
else if((0,_util.isArrayBuffer)(e))t={data:e}
else if(e instanceof PDFDataRangeTransport)t={range:e}
else{if("object"!==_typeof(e))throw new Error("Invalid parameter in getDocument, need either Uint8Array, string or a parameter object")
if(!e.url&&!e.data&&!e.range)throw new Error("Invalid parameter object: need either .data, .range or .url")
t=e}var n=Object.create(null),i=null,a=null
for(var o in t)if("url"!==o||"undefined"==typeof window)if("range"!==o)if("worker"!==o)if("data"!==o||t[o]instanceof Uint8Array)n[o]=t[o]
else{var s=t[o]
if("string"==typeof s)n[o]=(0,_util.stringToBytes)(s)
else if("object"!==_typeof(s)||null===s||isNaN(s.length)){if(!(0,_util.isArrayBuffer)(s))throw new Error("Invalid PDF binary data: either typed array, string or array-like object is expected in the data property.")
n[o]=new Uint8Array(s)}else n[o]=new Uint8Array(s)}else a=t[o]
else i=t[o]
else n[o]=new URL(t[o],window.location).href
if(n.rangeChunkSize=n.rangeChunkSize||DEFAULT_RANGE_CHUNK_SIZE,n.CMapReaderFactory=n.CMapReaderFactory||DefaultCMapReaderFactory,n.ignoreErrors=!0!==n.stopAtErrors,n.fontExtraProperties=!0===n.fontExtraProperties,n.pdfBug=!0===n.pdfBug,Number.isInteger(n.maxImageSize)||(n.maxImageSize=-1),"boolean"!=typeof n.isEvalSupported&&(n.isEvalSupported=!0),"boolean"!=typeof n.disableFontFace&&(n.disableFontFace=_api_compatibility.apiCompatibilityParams.disableFontFace||!1),void 0===n.ownerDocument&&(n.ownerDocument=globalThis.document),"boolean"!=typeof n.disableRange&&(n.disableRange=!1),"boolean"!=typeof n.disableStream&&(n.disableStream=!1),"boolean"!=typeof n.disableAutoFetch&&(n.disableAutoFetch=!1),(0,_util.setVerbosityLevel)(n.verbosity),!a){var u={verbosity:n.verbosity,port:_worker_options.GlobalWorkerOptions.workerPort}
a=u.port?PDFWorker.fromPort(u):new PDFWorker(u),r._worker=a}var c=r.docId
return a.promise.then((function(){if(r.destroyed)throw new Error("Loading aborted")
var e=_fetchDocument(a,n,i,c),t=new Promise((function(e){var t
i?t=new _transport_stream.PDFDataTransportStream({length:n.length,initialData:n.initialData,progressiveDone:n.progressiveDone,disableRange:n.disableRange,disableStream:n.disableStream},i):n.data||(t=createPDFNetworkStream({url:n.url,length:n.length,httpHeaders:n.httpHeaders,withCredentials:n.withCredentials,rangeChunkSize:n.rangeChunkSize,disableRange:n.disableRange,disableStream:n.disableStream})),e(t)}))
return Promise.all([e,t]).then((function(e){var t=_slicedToArray(e,2),i=t[0],o=t[1]
if(r.destroyed)throw new Error("Loading aborted")
var s=new _message_handler.MessageHandler(c,i,a.port)
s.postMessageTransfers=a.postMessageTransfers
var u=new WorkerTransport(s,r,o,n)
r._transport=u,s.send("Ready",null)}))})).catch(r._capability.reject),r}function _fetchDocument(e,t,r,n){return e.destroyed?Promise.reject(new Error("Worker was destroyed")):(r&&(t.length=r.length,t.initialData=r.initialData,t.progressiveDone=r.progressiveDone),e.messageHandler.sendWithPromise("GetDocRequest",{docId:n,apiVersion:"2.6.347",source:{data:t.data,url:t.url,password:t.password,disableAutoFetch:t.disableAutoFetch,rangeChunkSize:t.rangeChunkSize,length:t.length},maxImageSize:t.maxImageSize,disableFontFace:t.disableFontFace,postMessageTransfers:e.postMessageTransfers,docBaseUrl:t.docBaseUrl,ignoreErrors:t.ignoreErrors,isEvalSupported:t.isEvalSupported,fontExtraProperties:t.fontExtraProperties}).then((function(t){if(e.destroyed)throw new Error("Worker was destroyed")
return t})))}var PDFDocumentLoadingTask=(nextDocumentId=0,function(){function e(){_classCallCheck(this,e),this._capability=(0,_util.createPromiseCapability)(),this._transport=null,this._worker=null,this.docId="d"+nextDocumentId++,this.destroyed=!1,this.onPassword=null,this.onProgress=null,this.onUnsupportedFeature=null}return _createClass(e,[{key:"destroy",value:function(){var e=this
return this.destroyed=!0,(this._transport?this._transport.destroy():Promise.resolve()).then((function(){e._transport=null,e._worker&&(e._worker.destroy(),e._worker=null)}))}},{key:"promise",get:function(){return this._capability.promise}}]),e}()),nextDocumentId,PDFDataRangeTransport=function(){function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2]
_classCallCheck(this,e),this.length=t,this.initialData=r,this.progressiveDone=n,this._rangeListeners=[],this._progressListeners=[],this._progressiveReadListeners=[],this._progressiveDoneListeners=[],this._readyCapability=(0,_util.createPromiseCapability)()}return _createClass(e,[{key:"addRangeListener",value:function(e){this._rangeListeners.push(e)}},{key:"addProgressListener",value:function(e){this._progressListeners.push(e)}},{key:"addProgressiveReadListener",value:function(e){this._progressiveReadListeners.push(e)}},{key:"addProgressiveDoneListener",value:function(e){this._progressiveDoneListeners.push(e)}},{key:"onDataRange",value:function(e,t){var r,n=_createForOfIteratorHelper(this._rangeListeners)
try{for(n.s();!(r=n.n()).done;){(0,r.value)(e,t)}}catch(i){n.e(i)}finally{n.f()}}},{key:"onDataProgress",value:function(e,t){var r=this
this._readyCapability.promise.then((function(){var n,i=_createForOfIteratorHelper(r._progressListeners)
try{for(i.s();!(n=i.n()).done;){(0,n.value)(e,t)}}catch(a){i.e(a)}finally{i.f()}}))}},{key:"onDataProgressiveRead",value:function(e){var t=this
this._readyCapability.promise.then((function(){var r,n=_createForOfIteratorHelper(t._progressiveReadListeners)
try{for(n.s();!(r=n.n()).done;){(0,r.value)(e)}}catch(i){n.e(i)}finally{n.f()}}))}},{key:"onDataProgressiveDone",value:function(){var e=this
this._readyCapability.promise.then((function(){var t,r=_createForOfIteratorHelper(e._progressiveDoneListeners)
try{for(r.s();!(t=r.n()).done;){(0,t.value)()}}catch(n){r.e(n)}finally{r.f()}}))}},{key:"transportReady",value:function(){this._readyCapability.resolve()}},{key:"requestDataRange",value:function(e,t){(0,_util.unreachable)("Abstract method PDFDataRangeTransport.requestDataRange")}},{key:"abort",value:function(){}}]),e}()
exports.PDFDataRangeTransport=PDFDataRangeTransport
var PDFDocumentProxy=function(){function e(t,r){_classCallCheck(this,e),this._pdfInfo=t,this._transport=r}return _createClass(e,[{key:"getPage",value:function(e){return this._transport.getPage(e)}},{key:"getPageIndex",value:function(e){return this._transport.getPageIndex(e)}},{key:"getDestinations",value:function(){return this._transport.getDestinations()}},{key:"getDestination",value:function(e){return this._transport.getDestination(e)}},{key:"getPageLabels",value:function(){return this._transport.getPageLabels()}},{key:"getPageLayout",value:function(){return this._transport.getPageLayout()}},{key:"getPageMode",value:function(){return this._transport.getPageMode()}},{key:"getViewerPreferences",value:function(){return this._transport.getViewerPreferences()}},{key:"getOpenAction",value:function(){return this._transport.getOpenAction()}},{key:"getAttachments",value:function(){return this._transport.getAttachments()}},{key:"getJavaScript",value:function(){return this._transport.getJavaScript()}},{key:"getOutline",value:function(){return this._transport.getOutline()}},{key:"getOptionalContentConfig",value:function(){return this._transport.getOptionalContentConfig()}},{key:"getPermissions",value:function(){return this._transport.getPermissions()}},{key:"getMetadata",value:function(){return this._transport.getMetadata()}},{key:"getData",value:function(){return this._transport.getData()}},{key:"getDownloadInfo",value:function(){return this._transport.downloadInfoCapability.promise}},{key:"getStats",value:function(){return this._transport.getStats()}},{key:"cleanup",value:function(){return this._transport.startCleanup()}},{key:"destroy",value:function(){return this.loadingTask.destroy()}},{key:"saveDocument",value:function(e){return this._transport.saveDocument(e)}},{key:"annotationStorage",get:function(){return(0,_util.shadow)(this,"annotationStorage",new _annotation_storage.AnnotationStorage)}},{key:"numPages",get:function(){return this._pdfInfo.numPages}},{key:"fingerprint",get:function(){return this._pdfInfo.fingerprint}},{key:"loadingParams",get:function(){return this._transport.loadingParams}},{key:"loadingTask",get:function(){return this._transport.loadingTask}}]),e}()
exports.PDFDocumentProxy=PDFDocumentProxy
var PDFPageProxy=function(){function e(t,r,n,i){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4]
_classCallCheck(this,e),this._pageIndex=t,this._pageInfo=r,this._ownerDocument=i,this._transport=n,this._stats=a?new _display_utils.StatTimer:null,this._pdfBug=a,this.commonObjs=n.commonObjs,this.objs=new PDFObjects,this.cleanupAfterRender=!1,this.pendingCleanup=!1,this._intentStates=new Map,this.destroyed=!1}return _createClass(e,[{key:"getViewport",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.scale,r=e.rotation,n=void 0===r?this.rotate:r,i=e.offsetX,a=void 0===i?0:i,o=e.offsetY,s=void 0===o?0:o,u=e.dontFlip,c=void 0!==u&&u
return new _display_utils.PageViewport({viewBox:this.view,scale:t,rotation:n,offsetX:a,offsetY:s,dontFlip:c})}},{key:"getAnnotations",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.intent,r=void 0===t?null:t
return this.annotationsPromise&&this.annotationsIntent===r||(this.annotationsPromise=this._transport.getAnnotations(this._pageIndex,r),this.annotationsIntent=r),this.annotationsPromise}},{key:"render",value:function(e){var t=this,r=e.canvasContext,n=e.viewport,i=e.intent,a=void 0===i?"display":i,o=e.enableWebGL,s=void 0!==o&&o,u=e.renderInteractiveForms,c=void 0!==u&&u,l=e.transform,f=void 0===l?null:l,h=e.imageLayer,d=void 0===h?null:h,p=e.canvasFactory,v=void 0===p?null:p,y=e.background,g=void 0===y?null:y,m=e.annotationStorage,b=void 0===m?null:m,_=e.optionalContentConfigPromise,A=void 0===_?null:_
this._stats&&this._stats.time("Overall")
var S="print"===a?"print":"display"
this.pendingCleanup=!1,A||(A=this._transport.getOptionalContentConfig())
var w=this._intentStates.get(S)
w||(w=Object.create(null),this._intentStates.set(S,w)),w.streamReaderCancelTimeout&&(clearTimeout(w.streamReaderCancelTimeout),w.streamReaderCancelTimeout=null)
var k=v||new DefaultCanvasFactory({ownerDocument:this._ownerDocument}),x=new _webgl.WebGLContext({enable:s})
w.displayReadyCapability||(w.displayReadyCapability=(0,_util.createPromiseCapability)(),w.operatorList={fnArray:[],argsArray:[],lastChunk:!1},this._stats&&this._stats.time("Page Request"),this._pumpOperatorList({pageIndex:this._pageIndex,intent:S,renderInteractiveForms:!0===c,annotationStorage:b&&b.getAll()||null}))
var C=function(e){var r=w.renderTasks.indexOf(R)
r>=0&&w.renderTasks.splice(r,1),(t.cleanupAfterRender||"print"===S)&&(t.pendingCleanup=!0),t._tryCleanup(),e?(R.capability.reject(e),t._abortOperatorList({intentState:w,reason:e})):R.capability.resolve(),t._stats&&(t._stats.timeEnd("Rendering"),t._stats.timeEnd("Overall"))},R=new InternalRenderTask({callback:C,params:{canvasContext:r,viewport:n,transform:f,imageLayer:d,background:g},objs:this.objs,commonObjs:this.commonObjs,operatorList:w.operatorList,pageIndex:this._pageIndex,canvasFactory:k,webGLContext:x,useRequestAnimationFrame:"print"!==S,pdfBug:this._pdfBug})
w.renderTasks||(w.renderTasks=[]),w.renderTasks.push(R)
var P=R.task
return Promise.all([w.displayReadyCapability.promise,A]).then((function(e){var r=_slicedToArray(e,2),n=r[0],i=r[1]
t.pendingCleanup?C():(t._stats&&t._stats.time("Rendering"),R.initializeGraphics({transparency:n,optionalContentConfig:i}),R.operatorListChanged())})).catch(C),P}},{key:"getOperatorList",value:function(){var e,t="oplist",r=this._intentStates.get(t)
return r||(r=Object.create(null),this._intentStates.set(t,r)),r.opListReadCapability||((e=Object.create(null)).operatorListChanged=function(){if(r.operatorList.lastChunk){r.opListReadCapability.resolve(r.operatorList)
var t=r.renderTasks.indexOf(e)
t>=0&&r.renderTasks.splice(t,1)}},r.opListReadCapability=(0,_util.createPromiseCapability)(),r.renderTasks=[],r.renderTasks.push(e),r.operatorList={fnArray:[],argsArray:[],lastChunk:!1},this._stats&&this._stats.time("Page Request"),this._pumpOperatorList({pageIndex:this._pageIndex,intent:t})),r.opListReadCapability.promise}},{key:"streamTextContent",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.normalizeWhitespace,r=void 0!==t&&t,n=e.disableCombineTextItems,i=void 0!==n&&n,a=100
return this._transport.messageHandler.sendWithStream("GetTextContent",{pageIndex:this._pageIndex,normalizeWhitespace:!0===r,combineTextItems:!0!==i},{highWaterMark:a,size:function(e){return e.items.length}})}},{key:"getTextContent",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this.streamTextContent(e)
return new Promise((function(e,r){var n=t.getReader(),i={items:[],styles:Object.create(null)};(function t(){n.read().then((function(r){var n,a=r.value
r.done?e(i):(Object.assign(i.styles,a.styles),(n=i.items).push.apply(n,_toConsumableArray(a.items)),t())}),r)})()}))}},{key:"_destroy",value:function(){this.destroyed=!0,this._transport.pageCache[this._pageIndex]=null
var e,t=[],r=_createForOfIteratorHelper(this._intentStates)
try{for(r.s();!(e=r.n()).done;){var n=_slicedToArray(e.value,2),i=n[0],a=n[1]
if(this._abortOperatorList({intentState:a,reason:new Error("Page was destroyed."),force:!0}),"oplist"!==i){var o,s=_createForOfIteratorHelper(a.renderTasks)
try{for(s.s();!(o=s.n()).done;){var u=o.value
t.push(u.completed),u.cancel()}}catch(c){s.e(c)}finally{s.f()}}}}catch(c){r.e(c)}finally{r.f()}return this.objs.clear(),this.annotationsPromise=null,this.pendingCleanup=!1,Promise.all(t)}},{key:"cleanup",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
return this.pendingCleanup=!0,this._tryCleanup(e)}},{key:"_tryCleanup",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
if(!this.pendingCleanup)return!1
var t,r=_createForOfIteratorHelper(this._intentStates.values())
try{for(r.s();!(t=r.n()).done;){var n=t.value,i=n.renderTasks,a=n.operatorList
if(0!==i.length||!a.lastChunk)return!1}}catch(o){r.e(o)}finally{r.f()}return this._intentStates.clear(),this.objs.clear(),this.annotationsPromise=null,e&&this._stats&&(this._stats=new _display_utils.StatTimer),this.pendingCleanup=!1,!0}},{key:"_startRenderPage",value:function(e,t){var r=this._intentStates.get(t)
r&&(this._stats&&this._stats.timeEnd("Page Request"),r.displayReadyCapability&&r.displayReadyCapability.resolve(e))}},{key:"_renderPageChunk",value:function(e,t){for(var r=0,n=e.length;r<n;r++)t.operatorList.fnArray.push(e.fnArray[r]),t.operatorList.argsArray.push(e.argsArray[r])
t.operatorList.lastChunk=e.lastChunk
for(var i=0;i<t.renderTasks.length;i++)t.renderTasks[i].operatorListChanged()
e.lastChunk&&this._tryCleanup()}},{key:"_pumpOperatorList",value:function(e){var t=this;(0,_util.assert)(e.intent,'PDFPageProxy._pumpOperatorList: Expected "intent" argument.')
var r=this._transport.messageHandler.sendWithStream("GetOperatorList",e).getReader(),n=this._intentStates.get(e.intent)
n.streamReader=r;(function e(){r.read().then((function(r){var i=r.value
r.done?n.streamReader=null:t._transport.destroyed||(t._renderPageChunk(i,n),e())}),(function(e){if(n.streamReader=null,!t._transport.destroyed){if(n.operatorList){n.operatorList.lastChunk=!0
for(var r=0;r<n.renderTasks.length;r++)n.renderTasks[r].operatorListChanged()
t._tryCleanup()}if(n.displayReadyCapability)n.displayReadyCapability.reject(e)
else{if(!n.opListReadCapability)throw e
n.opListReadCapability.reject(e)}}}))})()}},{key:"_abortOperatorList",value:function(e){var t=this,r=e.intentState,n=e.reason,i=e.force,a=void 0!==i&&i
if((0,_util.assert)(n instanceof Error||"object"===_typeof(n)&&null!==n,'PDFPageProxy._abortOperatorList: Expected "reason" argument.'),r.streamReader){if(!a){if(0!==r.renderTasks.length)return
if(n instanceof _display_utils.RenderingCancelledException)return void(r.streamReaderCancelTimeout=setTimeout((function(){t._abortOperatorList({intentState:r,reason:n,force:!0}),r.streamReaderCancelTimeout=null}),RENDERING_CANCELLED_TIMEOUT))}if(r.streamReader.cancel(new _util.AbortException(n&&n.message)),r.streamReader=null,!this._transport.destroyed){var o,s=_createForOfIteratorHelper(this._intentStates)
try{for(s.s();!(o=s.n()).done;){var u=_slicedToArray(o.value,2),c=u[0]
if(u[1]===r){this._intentStates.delete(c)
break}}}catch(l){s.e(l)}finally{s.f()}this.cleanup()}}}},{key:"pageNumber",get:function(){return this._pageIndex+1}},{key:"rotate",get:function(){return this._pageInfo.rotate}},{key:"ref",get:function(){return this._pageInfo.ref}},{key:"userUnit",get:function(){return this._pageInfo.userUnit}},{key:"view",get:function(){return this._pageInfo.view}},{key:"stats",get:function(){return this._stats}}]),e}()
exports.PDFPageProxy=PDFPageProxy
var LoopbackPort=function(){function e(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0]
_classCallCheck(this,e),this._listeners=[],this._defer=t,this._deferred=Promise.resolve(void 0)}return _createClass(e,[{key:"postMessage",value:function(e,t){var r=this
if(this._defer){var n=new WeakMap,i={data:function e(r){if("object"!==_typeof(r)||null===r)return r
if(n.has(r))return n.get(r)
var i,a
if((i=r.buffer)&&(0,_util.isArrayBuffer)(i))return a=t&&t.includes(i)?new r.constructor(i,r.byteOffset,r.byteLength):new r.constructor(r),n.set(r,a),a
for(var o in a=Array.isArray(r)?[]:{},n.set(r,a),r){for(var s=void 0,u=r;!(s=Object.getOwnPropertyDescriptor(u,o));)u=Object.getPrototypeOf(u)
if(void 0!==s.value)if("function"!=typeof s.value)a[o]=e(s.value)
else if(r.hasOwnProperty&&r.hasOwnProperty(o))throw new Error("LoopbackPort.postMessage - cannot clone: ".concat(r[o]))}return a}(e)}
this._deferred.then((function(){r._listeners.forEach((function(e){e.call(r,i)}))}))}else this._listeners.forEach((function(t){t.call(r,{data:e})}))}},{key:"addEventListener",value:function(e,t){this._listeners.push(t)}},{key:"removeEventListener",value:function(e,t){var r=this._listeners.indexOf(t)
this._listeners.splice(r,1)}},{key:"terminate",value:function(){this._listeners.length=0}}]),e}()
exports.LoopbackPort=LoopbackPort
var PDFWorker=function PDFWorkerClosure(){var pdfWorkerPorts=new WeakMap,isWorkerDisabled=!1,fallbackWorkerSrc,nextFakeWorkerId=0,fakeWorkerCapability
if(_is_node.isNodeJS&&"function"==typeof require)isWorkerDisabled=!0,fallbackWorkerSrc="./pdf.worker.js"
else if("object"===("undefined"==typeof document?"undefined":_typeof(document))&&"currentScript"in document){var pdfjsFilePath=document.currentScript&&document.currentScript.src
pdfjsFilePath&&(fallbackWorkerSrc=pdfjsFilePath.replace(/(\.(?:min\.)?js)(\?.*)?$/i,".worker$1$2"))}function _getWorkerSrc(){if(_worker_options.GlobalWorkerOptions.workerSrc)return _worker_options.GlobalWorkerOptions.workerSrc
if(void 0!==fallbackWorkerSrc)return _is_node.isNodeJS||(0,_display_utils.deprecated)('No "GlobalWorkerOptions.workerSrc" specified.'),fallbackWorkerSrc
throw new Error('No "GlobalWorkerOptions.workerSrc" specified.')}function getMainThreadWorkerMessageHandler(){var e
try{e=globalThis.pdfjsWorker&&globalThis.pdfjsWorker.WorkerMessageHandler}catch(t){}return e||null}function setupFakeWorkerGlobal(){if(fakeWorkerCapability)return fakeWorkerCapability.promise
fakeWorkerCapability=(0,_util.createPromiseCapability)()
var loader=function(){var _ref12=_asyncToGenerator(_regenerator.default.mark((function _callee(){var mainWorkerMessageHandler,worker
return _regenerator.default.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(mainWorkerMessageHandler=getMainThreadWorkerMessageHandler(),!mainWorkerMessageHandler){_context.next=3
break}return _context.abrupt("return",mainWorkerMessageHandler)
case 3:if(!_is_node.isNodeJS||"function"!=typeof require){_context.next=6
break}return worker=eval("require")(_getWorkerSrc()),_context.abrupt("return",worker.WorkerMessageHandler)
case 6:return _context.next=8,(0,_display_utils.loadScript)(_getWorkerSrc())
case 8:return _context.abrupt("return",window.pdfjsWorker.WorkerMessageHandler)
case 9:case"end":return _context.stop()}}),_callee)})))
return function(){return _ref12.apply(this,arguments)}}()
return loader().then(fakeWorkerCapability.resolve,fakeWorkerCapability.reject),fakeWorkerCapability.promise}function createCDNWrapper(e){var t="importScripts('"+e+"');"
return URL.createObjectURL(new Blob([t]))}var PDFWorker=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.name,n=void 0===r?null:r,i=t.port,a=void 0===i?null:i,o=t.verbosity,s=void 0===o?(0,_util.getVerbosityLevel)():o
if(_classCallCheck(this,e),a&&pdfWorkerPorts.has(a))throw new Error("Cannot use more than one PDFWorker per port")
if(this.name=n,this.destroyed=!1,this.postMessageTransfers=!0,this.verbosity=s,this._readyCapability=(0,_util.createPromiseCapability)(),this._port=null,this._webWorker=null,this._messageHandler=null,a)return pdfWorkerPorts.set(a,this),void this._initializeFromPort(a)
this._initialize()}return _createClass(e,[{key:"_initializeFromPort",value:function(e){this._port=e,this._messageHandler=new _message_handler.MessageHandler("main","worker",e),this._messageHandler.on("ready",(function(){})),this._readyCapability.resolve()}},{key:"_initialize",value:function(){var e=this
if("undefined"!=typeof Worker&&!isWorkerDisabled&&!getMainThreadWorkerMessageHandler()){var t=_getWorkerSrc()
try{(0,_util.isSameOrigin)(window.location.href,t)||(t=createCDNWrapper(new URL(t,window.location).href))
var r=new Worker(t),n=new _message_handler.MessageHandler("main","worker",r),i=function(){r.removeEventListener("error",a),n.destroy(),r.terminate(),e.destroyed?e._readyCapability.reject(new Error("Worker was destroyed")):e._setupFakeWorker()},a=function(){e._webWorker||i()}
r.addEventListener("error",a),n.on("test",(function(t){r.removeEventListener("error",a),e.destroyed?i():t?(e._messageHandler=n,e._port=r,e._webWorker=r,t.supportTransfers||(e.postMessageTransfers=!1),e._readyCapability.resolve(),n.send("configure",{verbosity:e.verbosity})):(e._setupFakeWorker(),n.destroy(),r.terminate())})),n.on("ready",(function(t){if(r.removeEventListener("error",a),e.destroyed)i()
else try{o()}catch(n){e._setupFakeWorker()}}))
var o=function(){var t=new Uint8Array([e.postMessageTransfers?255:0])
try{n.send("test",t,[t.buffer])}catch(r){(0,_util.warn)("Cannot use postMessage transfers."),t[0]=0,n.send("test",t)}}
return void o()}catch(s){(0,_util.info)("The worker has been disabled.")}}this._setupFakeWorker()}},{key:"_setupFakeWorker",value:function(){var e=this
isWorkerDisabled||((0,_util.warn)("Setting up fake worker."),isWorkerDisabled=!0),setupFakeWorkerGlobal().then((function(t){if(e.destroyed)e._readyCapability.reject(new Error("Worker was destroyed"))
else{var r=new LoopbackPort
e._port=r
var n="fake"+nextFakeWorkerId++,i=new _message_handler.MessageHandler(n+"_worker",n,r)
t.setup(i,r)
var a=new _message_handler.MessageHandler(n,n+"_worker",r)
e._messageHandler=a,e._readyCapability.resolve(),a.send("configure",{verbosity:e.verbosity})}})).catch((function(t){e._readyCapability.reject(new Error('Setting up fake worker failed: "'.concat(t.message,'".')))}))}},{key:"destroy",value:function(){this.destroyed=!0,this._webWorker&&(this._webWorker.terminate(),this._webWorker=null),pdfWorkerPorts.delete(this._port),this._port=null,this._messageHandler&&(this._messageHandler.destroy(),this._messageHandler=null)}},{key:"promise",get:function(){return this._readyCapability.promise}},{key:"port",get:function(){return this._port}},{key:"messageHandler",get:function(){return this._messageHandler}}],[{key:"fromPort",value:function(t){if(!t||!t.port)throw new Error("PDFWorker.fromPort - invalid method signature.")
return pdfWorkerPorts.has(t.port)?pdfWorkerPorts.get(t.port):new e(t)}},{key:"getWorkerSrc",value:function(){return _getWorkerSrc()}}]),e}()
return PDFWorker}()
exports.PDFWorker=PDFWorker
var WorkerTransport=function(){function e(t,r,n,i){_classCallCheck(this,e),this.messageHandler=t,this.loadingTask=r,this.commonObjs=new PDFObjects,this.fontLoader=new _font_loader.FontLoader({docId:r.docId,onUnsupportedFeature:this._onUnsupportedFeature.bind(this),ownerDocument:i.ownerDocument}),this._params=i,this.CMapReaderFactory=new i.CMapReaderFactory({baseUrl:i.cMapUrl,isCompressed:i.cMapPacked}),this.destroyed=!1,this.destroyCapability=null,this._passwordCapability=null,this._networkStream=n,this._fullReader=null,this._lastProgress=null,this.pageCache=[],this.pagePromises=[],this.downloadInfoCapability=(0,_util.createPromiseCapability)(),this.setupMessageHandler()}return _createClass(e,[{key:"destroy",value:function(){var e=this
if(this.destroyCapability)return this.destroyCapability.promise
this.destroyed=!0,this.destroyCapability=(0,_util.createPromiseCapability)(),this._passwordCapability&&this._passwordCapability.reject(new Error("Worker was destroyed during onPassword callback"))
var t=[]
this.pageCache.forEach((function(e){e&&t.push(e._destroy())})),this.pageCache.length=0,this.pagePromises.length=0
var r=this.messageHandler.sendWithPromise("Terminate",null)
return t.push(r),Promise.all(t).then((function(){e.fontLoader.clear(),e._networkStream&&e._networkStream.cancelAllRequests(new _util.AbortException("Worker was terminated.")),e.messageHandler&&(e.messageHandler.destroy(),e.messageHandler=null),e.destroyCapability.resolve()}),this.destroyCapability.reject),this.destroyCapability.promise}},{key:"setupMessageHandler",value:function(){var e=this,t=this.messageHandler,r=this.loadingTask
t.on("GetReader",(function(t,r){(0,_util.assert)(e._networkStream,"GetReader - no `IPDFStream` instance available."),e._fullReader=e._networkStream.getFullReader(),e._fullReader.onProgress=function(t){e._lastProgress={loaded:t.loaded,total:t.total}},r.onPull=function(){e._fullReader.read().then((function(e){var t=e.value
e.done?r.close():((0,_util.assert)((0,_util.isArrayBuffer)(t),"GetReader - expected an ArrayBuffer."),r.enqueue(new Uint8Array(t),1,[t]))})).catch((function(e){r.error(e)}))},r.onCancel=function(t){e._fullReader.cancel(t),r.ready.catch((function(t){if(!e.destroyed)throw t}))}})),t.on("ReaderHeadersReady",(function(t){var n=(0,_util.createPromiseCapability)(),i=e._fullReader
return i.headersReady.then((function(){i.isStreamingSupported&&i.isRangeSupported||(e._lastProgress&&r.onProgress&&r.onProgress(e._lastProgress),i.onProgress=function(e){r.onProgress&&r.onProgress({loaded:e.loaded,total:e.total})}),n.resolve({isStreamingSupported:i.isStreamingSupported,isRangeSupported:i.isRangeSupported,contentLength:i.contentLength})}),n.reject),n.promise})),t.on("GetRangeReader",(function(t,r){(0,_util.assert)(e._networkStream,"GetRangeReader - no `IPDFStream` instance available.")
var n=e._networkStream.getRangeReader(t.begin,t.end)
n?(r.onPull=function(){n.read().then((function(e){var t=e.value
e.done?r.close():((0,_util.assert)((0,_util.isArrayBuffer)(t),"GetRangeReader - expected an ArrayBuffer."),r.enqueue(new Uint8Array(t),1,[t]))})).catch((function(e){r.error(e)}))},r.onCancel=function(t){n.cancel(t),r.ready.catch((function(t){if(!e.destroyed)throw t}))}):r.close()})),t.on("GetDoc",(function(t){var n=t.pdfInfo
e._numPages=n.numPages,r._capability.resolve(new PDFDocumentProxy(n,e))})),t.on("DocException",(function(e){var t
switch(e.name){case"PasswordException":t=new _util.PasswordException(e.message,e.code)
break
case"InvalidPDFException":t=new _util.InvalidPDFException(e.message)
break
case"MissingPDFException":t=new _util.MissingPDFException(e.message)
break
case"UnexpectedResponseException":t=new _util.UnexpectedResponseException(e.message,e.status)
break
case"UnknownErrorException":t=new _util.UnknownErrorException(e.message,e.details)}if(!(t instanceof Error)){(0,_util.warn)("DocException - expected a valid Error.")}r._capability.reject(t)})),t.on("PasswordRequest",(function(t){if(e._passwordCapability=(0,_util.createPromiseCapability)(),r.onPassword){try{r.onPassword((function(t){e._passwordCapability.resolve({password:t})}),t.code)}catch(n){e._passwordCapability.reject(n)}}else e._passwordCapability.reject(new _util.PasswordException(t.message,t.code))
return e._passwordCapability.promise})),t.on("DataLoaded",(function(t){r.onProgress&&r.onProgress({loaded:t.length,total:t.length}),e.downloadInfoCapability.resolve(t)})),t.on("StartRenderPage",(function(t){e.destroyed||e.pageCache[t.pageIndex]._startRenderPage(t.transparency,t.intent)})),t.on("commonobj",(function(r){if(!e.destroyed){var n=_slicedToArray(r,3),i=n[0],a=n[1],o=n[2]
if(!e.commonObjs.has(i))switch(a){case"Font":var s=e._params
if("error"in o){var u=o.error;(0,_util.warn)("Error during font loading: ".concat(u)),e.commonObjs.resolve(i,u)
break}var c=null
s.pdfBug&&globalThis.FontInspector&&globalThis.FontInspector.enabled&&(c={registerFont:function(e,t){globalThis.FontInspector.fontAdded(e,t)}})
var l=new _font_loader.FontFaceObject(o,{isEvalSupported:s.isEvalSupported,disableFontFace:s.disableFontFace,ignoreErrors:s.ignoreErrors,onUnsupportedFeature:e._onUnsupportedFeature.bind(e),fontRegistry:c})
e.fontLoader.bind(l).catch((function(e){return t.sendWithPromise("FontFallback",{id:i})})).finally((function(){!s.fontExtraProperties&&l.data&&(l.data=null),e.commonObjs.resolve(i,l)}))
break
case"FontPath":case"Image":e.commonObjs.resolve(i,o)
break
default:throw new Error("Got unknown common object type ".concat(a))}}})),t.on("obj",(function(t){if(!e.destroyed){var r=_slicedToArray(t,4),n=r[0],i=r[1],a=r[2],o=r[3],s=e.pageCache[i]
if(!s.objs.has(n))switch(a){case"Image":s.objs.resolve(n,o)
o&&"data"in o&&o.data.length>8e6&&(s.cleanupAfterRender=!0)
break
default:throw new Error("Got unknown object type ".concat(a))}}})),t.on("DocProgress",(function(t){e.destroyed||r.onProgress&&r.onProgress({loaded:t.loaded,total:t.total})})),t.on("UnsupportedFeature",this._onUnsupportedFeature.bind(this)),t.on("FetchBuiltInCMap",(function(t,r){if(e.destroyed)r.error(new Error("Worker was destroyed"))
else{var n=!1
r.onPull=function(){n?r.close():(n=!0,e.CMapReaderFactory.fetch(t).then((function(e){r.enqueue(e,1,[e.cMapData.buffer])})).catch((function(e){r.error(e)})))}}}))}},{key:"_onUnsupportedFeature",value:function(e){var t=e.featureId
this.destroyed||this.loadingTask.onUnsupportedFeature&&this.loadingTask.onUnsupportedFeature(t)}},{key:"getData",value:function(){return this.messageHandler.sendWithPromise("GetData",null)}},{key:"getPage",value:function(e){var t=this
if(!Number.isInteger(e)||e<=0||e>this._numPages)return Promise.reject(new Error("Invalid page request"))
var r=e-1
if(r in this.pagePromises)return this.pagePromises[r]
var n=this.messageHandler.sendWithPromise("GetPage",{pageIndex:r}).then((function(e){if(t.destroyed)throw new Error("Transport destroyed")
var n=new PDFPageProxy(r,e,t,t._params.ownerDocument,t._params.pdfBug)
return t.pageCache[r]=n,n}))
return this.pagePromises[r]=n,n}},{key:"getPageIndex",value:function(e){return this.messageHandler.sendWithPromise("GetPageIndex",{ref:e}).catch((function(e){return Promise.reject(new Error(e))}))}},{key:"getAnnotations",value:function(e,t){return this.messageHandler.sendWithPromise("GetAnnotations",{pageIndex:e,intent:t})}},{key:"saveDocument",value:function(e){return this.messageHandler.sendWithPromise("SaveDocument",{numPages:this._numPages,annotationStorage:e&&e.getAll()||null,filename:this._fullReader?this._fullReader.filename:null}).finally((function(){e&&e.resetModified()}))}},{key:"getDestinations",value:function(){return this.messageHandler.sendWithPromise("GetDestinations",null)}},{key:"getDestination",value:function(e){return"string"!=typeof e?Promise.reject(new Error("Invalid destination request.")):this.messageHandler.sendWithPromise("GetDestination",{id:e})}},{key:"getPageLabels",value:function(){return this.messageHandler.sendWithPromise("GetPageLabels",null)}},{key:"getPageLayout",value:function(){return this.messageHandler.sendWithPromise("GetPageLayout",null)}},{key:"getPageMode",value:function(){return this.messageHandler.sendWithPromise("GetPageMode",null)}},{key:"getViewerPreferences",value:function(){return this.messageHandler.sendWithPromise("GetViewerPreferences",null)}},{key:"getOpenAction",value:function(){return this.messageHandler.sendWithPromise("GetOpenAction",null)}},{key:"getAttachments",value:function(){return this.messageHandler.sendWithPromise("GetAttachments",null)}},{key:"getJavaScript",value:function(){return this.messageHandler.sendWithPromise("GetJavaScript",null)}},{key:"getOutline",value:function(){return this.messageHandler.sendWithPromise("GetOutline",null)}},{key:"getOptionalContentConfig",value:function(){return this.messageHandler.sendWithPromise("GetOptionalContentConfig",null).then((function(e){return new _optional_content_config.OptionalContentConfig(e)}))}},{key:"getPermissions",value:function(){return this.messageHandler.sendWithPromise("GetPermissions",null)}},{key:"getMetadata",value:function(){var e=this
return this.messageHandler.sendWithPromise("GetMetadata",null).then((function(t){return{info:t[0],metadata:t[1]?new _metadata.Metadata(t[1]):null,contentDispositionFilename:e._fullReader?e._fullReader.filename:null}}))}},{key:"getStats",value:function(){return this.messageHandler.sendWithPromise("GetStats",null)}},{key:"startCleanup",value:function(){var e=this
return this.messageHandler.sendWithPromise("Cleanup",null).then((function(){for(var t=0,r=e.pageCache.length;t<r;t++){var n=e.pageCache[t]
if(n)if(!n.cleanup())throw new Error("startCleanup: Page ".concat(t+1," is currently rendering."))}e.commonObjs.clear(),e.fontLoader.clear()}))}},{key:"loadingParams",get:function(){var e=this._params
return(0,_util.shadow)(this,"loadingParams",{disableAutoFetch:e.disableAutoFetch,disableFontFace:e.disableFontFace})}}]),e}(),PDFObjects=function(){function e(){_classCallCheck(this,e),this._objs=Object.create(null)}return _createClass(e,[{key:"_ensureObj",value:function(e){return this._objs[e]?this._objs[e]:this._objs[e]={capability:(0,_util.createPromiseCapability)(),data:null,resolved:!1}}},{key:"get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null
if(t)return this._ensureObj(e).capability.promise.then(t),null
var r=this._objs[e]
if(!r||!r.resolved)throw new Error("Requesting object that isn't resolved yet ".concat(e,"."))
return r.data}},{key:"has",value:function(e){var t=this._objs[e]
return!!t&&t.resolved}},{key:"resolve",value:function(e,t){var r=this._ensureObj(e)
r.resolved=!0,r.data=t,r.capability.resolve(t)}},{key:"clear",value:function(){this._objs=Object.create(null)}}]),e}(),RenderTask=function(){function e(t){_classCallCheck(this,e),this._internalRenderTask=t,this.onContinue=null}return _createClass(e,[{key:"cancel",value:function(){this._internalRenderTask.cancel()}},{key:"promise",get:function(){return this._internalRenderTask.capability.promise}}]),e}(),InternalRenderTask=(canvasInRendering=new WeakSet,function(){function e(t){var r=t.callback,n=t.params,i=t.objs,a=t.commonObjs,o=t.operatorList,s=t.pageIndex,u=t.canvasFactory,c=t.webGLContext,l=t.useRequestAnimationFrame,f=void 0!==l&&l,h=t.pdfBug,d=void 0!==h&&h
_classCallCheck(this,e),this.callback=r,this.params=n,this.objs=i,this.commonObjs=a,this.operatorListIdx=null,this.operatorList=o,this._pageIndex=s,this.canvasFactory=u,this.webGLContext=c,this._pdfBug=d,this.running=!1,this.graphicsReadyCallback=null,this.graphicsReady=!1,this._useRequestAnimationFrame=!0===f&&"undefined"!=typeof window,this.cancelled=!1,this.capability=(0,_util.createPromiseCapability)(),this.task=new RenderTask(this),this._continueBound=this._continue.bind(this),this._scheduleNextBound=this._scheduleNext.bind(this),this._nextBound=this._next.bind(this),this._canvas=n.canvasContext.canvas}var t
return _createClass(e,[{key:"initializeGraphics",value:function(e){var t=e.transparency,r=void 0!==t&&t,n=e.optionalContentConfig
if(!this.cancelled){if(this._canvas){if(canvasInRendering.has(this._canvas))throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.")
canvasInRendering.add(this._canvas)}this._pdfBug&&globalThis.StepperManager&&globalThis.StepperManager.enabled&&(this.stepper=globalThis.StepperManager.create(this._pageIndex),this.stepper.init(this.operatorList),this.stepper.nextBreakPoint=this.stepper.getNextBreakPoint())
var i=this.params,a=i.canvasContext,o=i.viewport,s=i.transform,u=i.imageLayer,c=i.background
this.gfx=new _canvas.CanvasGraphics(a,this.commonObjs,this.objs,this.canvasFactory,this.webGLContext,u,n),this.gfx.beginDrawing({transform:s,viewport:o,transparency:r,background:c}),this.operatorListIdx=0,this.graphicsReady=!0,this.graphicsReadyCallback&&this.graphicsReadyCallback()}}},{key:"cancel",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null
this.running=!1,this.cancelled=!0,this.gfx&&this.gfx.endDrawing(),this._canvas&&canvasInRendering.delete(this._canvas),this.callback(e||new _display_utils.RenderingCancelledException("Rendering cancelled, page ".concat(this._pageIndex+1),"canvas"))}},{key:"operatorListChanged",value:function(){this.graphicsReady?(this.stepper&&this.stepper.updateOperatorList(this.operatorList),this.running||this._continue()):this.graphicsReadyCallback||(this.graphicsReadyCallback=this._continueBound)}},{key:"_continue",value:function(){this.running=!0,this.cancelled||(this.task.onContinue?this.task.onContinue(this._scheduleNextBound):this._scheduleNext())}},{key:"_scheduleNext",value:function(){var e=this
this._useRequestAnimationFrame?window.requestAnimationFrame((function(){e._nextBound().catch(e.cancel.bind(e))})):Promise.resolve().then(this._nextBound).catch(this.cancel.bind(this))}},{key:"_next",value:(t=_asyncToGenerator(_regenerator.default.mark((function e(){return _regenerator.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.cancelled){e.next=2
break}return e.abrupt("return")
case 2:this.operatorListIdx=this.gfx.executeOperatorList(this.operatorList,this.operatorListIdx,this._continueBound,this.stepper),this.operatorListIdx===this.operatorList.argsArray.length&&(this.running=!1,this.operatorList.lastChunk&&(this.gfx.endDrawing(),this._canvas&&canvasInRendering.delete(this._canvas),this.callback()))
case 4:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"completed",get:function(){return this.capability.promise.catch((function(){}))}}]),e}()),canvasInRendering,version="2.6.347"
exports.version=version
var build="3be9c65f"
exports.build=build},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.FontLoader=t.FontFaceObject=void 0
var n,i=(n=r(2))&&n.__esModule?n:{default:n},a=r(5)
function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=l(e)
if(t){var i=l(this).constructor
r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments)
return c(this,r)}}function c(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t,r,n,i,a,o){try{var s=e[a](o),u=s.value}catch(c){return void r(c)}s.done?t(u):Promise.resolve(u).then(n,i)}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t,r){return t&&d(e.prototype,t),r&&d(e,r),e}var v,y=function(){function e(t){var r=t.docId,n=t.onUnsupportedFeature,i=t.ownerDocument,o=void 0===i?globalThis.document:i
h(this,e),this.constructor===e&&(0,a.unreachable)("Cannot initialize BaseFontLoader."),this.docId=r,this._onUnsupportedFeature=n,this._document=o,this.nativeFontFaces=[],this.styleElement=null}var t,r
return p(e,[{key:"addNativeFontFace",value:function(e){this.nativeFontFaces.push(e),this._document.fonts.add(e)}},{key:"insertRule",value:function(e){var t=this.styleElement
t||((t=this.styleElement=this._document.createElement("style")).id="PDFJS_FONT_STYLE_TAG_".concat(this.docId),this._document.documentElement.getElementsByTagName("head")[0].appendChild(t))
var r=t.sheet
r.insertRule(e,r.cssRules.length)}},{key:"clear",value:function(){var e=this
this.nativeFontFaces.forEach((function(t){e._document.fonts.delete(t)})),this.nativeFontFaces.length=0,this.styleElement&&(this.styleElement.remove(),this.styleElement=null)}},{key:"bind",value:(t=i.default.mark((function e(t){var r,n,o=this
return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.attached&&!t.missingFile){e.next=2
break}return e.abrupt("return")
case 2:if(t.attached=!0,!this.isFontLoadingAPISupported){e.next=19
break}if(!(r=t.createNativeFontFace())){e.next=18
break}return this.addNativeFontFace(r),e.prev=7,e.next=10,r.loaded
case 10:e.next=18
break
case 12:throw e.prev=12,e.t0=e.catch(7),this._onUnsupportedFeature({featureId:a.UNSUPPORTED_FEATURES.errorFontLoadNative}),(0,a.warn)("Failed to load font '".concat(r.family,"': '").concat(e.t0,"'.")),t.disableFontFace=!0,e.t0
case 18:return e.abrupt("return")
case 19:if(!(n=t.createFontFaceRule())){e.next=26
break}if(this.insertRule(n),!this.isSyncFontLoadingSupported){e.next=24
break}return e.abrupt("return")
case 24:return e.next=26,new Promise((function(e){var r=o._queueLoadingCallback(e)
o._prepareFontLoadEvent([n],[t],r)}))
case 26:case"end":return e.stop()}}),e,this,[[7,12]])})),r=function(){var e=this,r=arguments
return new Promise((function(n,i){var a=t.apply(e,r)
function o(e){f(a,n,i,o,s,"next",e)}function s(e){f(a,n,i,o,s,"throw",e)}o(void 0)}))},function(e){return r.apply(this,arguments)})},{key:"_queueLoadingCallback",value:function(e){(0,a.unreachable)("Abstract method `_queueLoadingCallback`.")}},{key:"_prepareFontLoadEvent",value:function(e,t,r){(0,a.unreachable)("Abstract method `_prepareFontLoadEvent`.")}},{key:"isFontLoadingAPISupported",get:function(){var e=void 0!==this._document&&!!this._document.fonts
return(0,a.shadow)(this,"isFontLoadingAPISupported",e)}},{key:"isSyncFontLoadingSupported",get:function(){(0,a.unreachable)("Abstract method `isSyncFontLoadingSupported`.")}},{key:"_loadTestFont",get:function(){(0,a.unreachable)("Abstract method `_loadTestFont`.")}}]),e}()
t.FontLoader=v,t.FontLoader=v=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)})(r,e)
var t=u(r)
function r(e){var n
return h(this,r),(n=t.call(this,e)).loadingContext={requests:[],nextRequestId:0},n.loadTestFontId=0,n}return p(r,[{key:"_queueLoadingCallback",value:function(e){var t=this.loadingContext,r={id:"pdfjs-font-loading-".concat(t.nextRequestId++),done:!1,complete:function(){for((0,a.assert)(!r.done,"completeRequest() cannot be called twice."),r.done=!0;t.requests.length>0&&t.requests[0].done;){var e=t.requests.shift()
setTimeout(e.callback,0)}},callback:e}
return t.requests.push(r),r}},{key:"_prepareFontLoadEvent",value:function(e,t,r){var n,i,o=this
function s(e,t){return e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|255&e.charCodeAt(t+3)}function u(e,t,r,n){return e.substring(0,t)+n+e.substring(t+r)}var c=this._document.createElement("canvas")
c.width=1,c.height=1
var l=c.getContext("2d"),f=0
var h="lt".concat(Date.now()).concat(this.loadTestFontId++),d=this._loadTestFont,p=1482184792,v=s(d=u(d,976,h.length,h),16)
for(n=0,i=h.length-3;n<i;n+=4)v=v-p+s(h,n)|0
n<h.length&&(v=v-p+s(h+"XXX",n)|0),d=u(d,16,4,(0,a.string32)(v))
var y="url(data:font/opentype;base64,".concat(btoa(d),");"),g='@font-face {font-family:"'.concat(h,'";src:').concat(y,"}")
this.insertRule(g)
var m=[]
for(n=0,i=t.length;n<i;n++)m.push(t[n].loadedName)
m.push(h)
var b=this._document.createElement("div")
for(b.style.visibility="hidden",b.style.width=b.style.height="10px",b.style.position="absolute",b.style.top=b.style.left="0px",n=0,i=m.length;n<i;++n){var _=this._document.createElement("span")
_.textContent="Hi",_.style.fontFamily=m[n],b.appendChild(_)}this._document.body.appendChild(b),function e(t,r){if(++f>30)return(0,a.warn)("Load test font never loaded."),void r()
l.font="30px "+t,l.fillText(".",0,20),l.getImageData(0,0,1,1).data[3]>0?r():setTimeout(e.bind(null,t,r))}(h,(function(){o._document.body.removeChild(b),r.complete()}))}},{key:"isSyncFontLoadingSupported",get:function(){var e=!1
if("undefined"==typeof navigator)e=!0
else{var t=/Mozilla\/5.0.*?rv:(\d+).*? Gecko/.exec(navigator.userAgent)
t&&t[1]>=14&&(e=!0)}return(0,a.shadow)(this,"isSyncFontLoadingSupported",e)}},{key:"_loadTestFont",get:function(){return(0,a.shadow)(this,"_loadTestFont",atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA=="))}}]),r}(y)
var g=function(){function e(t,r){var n=r.isEvalSupported,i=void 0===n||n,a=r.disableFontFace,o=void 0!==a&&a,s=r.ignoreErrors,u=void 0!==s&&s,c=r.onUnsupportedFeature,l=void 0===c?null:c,f=r.fontRegistry,d=void 0===f?null:f
for(var p in h(this,e),this.compiledGlyphs=Object.create(null),t)this[p]=t[p]
this.isEvalSupported=!1!==i,this.disableFontFace=!0===o,this.ignoreErrors=!0===u,this._onUnsupportedFeature=l,this.fontRegistry=d}return p(e,[{key:"createNativeFontFace",value:function(){if(!this.data||this.disableFontFace)return null
var e=new FontFace(this.loadedName,this.data,{})
return this.fontRegistry&&this.fontRegistry.registerFont(this),e}},{key:"createFontFaceRule",value:function(){if(!this.data||this.disableFontFace)return null
var e=(0,a.bytesToString)(new Uint8Array(this.data)),t="url(data:".concat(this.mimetype,";base64,").concat(btoa(e),");"),r='@font-face {font-family:"'.concat(this.loadedName,'";src:').concat(t,"}")
return this.fontRegistry&&this.fontRegistry.registerFont(this,t),r}},{key:"getPathGenerator",value:function(e,t){if(void 0!==this.compiledGlyphs[t])return this.compiledGlyphs[t]
var r,n
try{r=e.get(this.loadedName+"_path_"+t)}catch(c){if(!this.ignoreErrors)throw c
return this._onUnsupportedFeature&&this._onUnsupportedFeature({featureId:a.UNSUPPORTED_FEATURES.errorFontGetPath}),(0,a.warn)('getPathGenerator - ignoring character: "'.concat(c,'".')),this.compiledGlyphs[t]=function(e,t){}}if(this.isEvalSupported&&a.IsEvalSupportedCached.value){for(var i,o="",s=0,u=r.length;s<u;s++)i=void 0!==(n=r[s]).args?n.args.join(","):"",o+="c."+n.cmd+"("+i+");\n"
return this.compiledGlyphs[t]=new Function("c","size",o)}return this.compiledGlyphs[t]=function(e,t){for(var i=0,a=r.length;i<a;i++)"scale"===(n=r[i]).cmd&&(n.args=[t,-t]),e[n.cmd].apply(e,n.args)}}}]),e}()
t.FontFaceObject=g},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.NodeCMapReaderFactory=t.NodeCanvasFactory=void 0
var n=r(1),i=r(7),a=r(5)
function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t,r){return t&&s(e.prototype,t),r&&s(e,r),e}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=d(e)
if(t){var i=d(this).constructor
r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments)
return h(this,r)}}function h(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var v=function e(){p(this,e),(0,a.unreachable)("Not implemented: NodeCanvasFactory")}
t.NodeCanvasFactory=v
var y=function e(){p(this,e),(0,a.unreachable)("Not implemented: NodeCMapReaderFactory")}
t.NodeCMapReaderFactory=y,i.isNodeJS&&(t.NodeCanvasFactory=v=function(e){c(r,e)
var t=f(r)
function r(){return p(this,r),t.apply(this,arguments)}return u(r,[{key:"create",value:function(e,t){if(e<=0||t<=0)throw new Error("Invalid canvas size")
var r=require("canvas").createCanvas(e,t)
return{canvas:r,context:r.getContext("2d")}}}]),r}(n.BaseCanvasFactory),t.NodeCMapReaderFactory=y=function(e){c(r,e)
var t=f(r)
function r(){return p(this,r),t.apply(this,arguments)}return u(r,[{key:"_fetchData",value:function(e,t){return new Promise((function(r,n){require("fs").readFile(e,(function(e,i){!e&&i?r({cMapData:new Uint8Array(i),compressionType:t}):n(new Error(e))}))}))}}]),r}(n.BaseCMapReaderFactory))},function(e,t,r){"use strict"
function n(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.AnnotationStorage=void 0
var i=function(){function e(){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this._storage=new Map,this._modified=!1,this.onSetModified=null,this.onResetModified=null}var t,r,i
return t=e,(r=[{key:"getOrCreateValue",value:function(e,t){return this._storage.has(e)?this._storage.get(e):(this._storage.set(e,t),t)}},{key:"setValue",value:function(e,t){this._storage.get(e)!==t&&this._setModified(),this._storage.set(e,t)}},{key:"getAll",value:function(){return 0===this._storage.size?null:Object.fromEntries(this._storage)}},{key:"_setModified",value:function(){this._modified||(this._modified=!0,"function"==typeof this.onSetModified&&this.onSetModified())}},{key:"resetModified",value:function(){this._modified&&(this._modified=!1,"function"==typeof this.onResetModified&&this.onResetModified())}},{key:"size",get:function(){return this._storage.size}}])&&n(t.prototype,r),i&&n(t,i),e}()
t.AnnotationStorage=i},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.apiCompatibilityParams=void 0
var n=r(7),i=Object.create(null)
n.isNodeJS&&(i.disableFontFace=!0)
var a=Object.freeze(i)
t.apiCompatibilityParams=a},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.CanvasGraphics=void 0
var n=r(5),i=r(208)
function a(e,t){var r
if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return
if("string"==typeof e)return o(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r)
var n=0,i=function(){}
return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,u=!1
return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next()
return s=e.done,e},e:function(e){u=!0,a=e},f:function(){try{s||null==r.return||r.return()}finally{if(u)throw a}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}var s=4096,u=.65,c=16
function l(e){e.mozCurrentTransform||(e._originalSave=e.save,e._originalRestore=e.restore,e._originalRotate=e.rotate,e._originalScale=e.scale,e._originalTranslate=e.translate,e._originalTransform=e.transform,e._originalSetTransform=e.setTransform,e._transformMatrix=e._transformMatrix||[1,0,0,1,0,0],e._transformStack=[],Object.defineProperty(e,"mozCurrentTransform",{get:function(){return this._transformMatrix}}),Object.defineProperty(e,"mozCurrentTransformInverse",{get:function(){var e=this._transformMatrix,t=e[0],r=e[1],n=e[2],i=e[3],a=e[4],o=e[5],s=t*i-r*n,u=r*n-t*i
return[i/s,r/u,n/u,t/s,(i*a-n*o)/u,(r*a-t*o)/s]}}),e.save=function(){var e=this._transformMatrix
this._transformStack.push(e),this._transformMatrix=e.slice(0,6),this._originalSave()},e.restore=function(){var e=this._transformStack.pop()
e&&(this._transformMatrix=e,this._originalRestore())},e.translate=function(e,t){var r=this._transformMatrix
r[4]=r[0]*e+r[2]*t+r[4],r[5]=r[1]*e+r[3]*t+r[5],this._originalTranslate(e,t)},e.scale=function(e,t){var r=this._transformMatrix
r[0]=r[0]*e,r[1]=r[1]*e,r[2]=r[2]*t,r[3]=r[3]*t,this._originalScale(e,t)},e.transform=function(t,r,n,i,a,o){var s=this._transformMatrix
this._transformMatrix=[s[0]*t+s[2]*r,s[1]*t+s[3]*r,s[0]*n+s[2]*i,s[1]*n+s[3]*i,s[0]*a+s[2]*o+s[4],s[1]*a+s[3]*o+s[5]],e._originalTransform(t,r,n,i,a,o)},e.setTransform=function(t,r,n,i,a,o){this._transformMatrix=[t,r,n,i,a,o],e._originalSetTransform(t,r,n,i,a,o)},e.rotate=function(e){var t=Math.cos(e),r=Math.sin(e),n=this._transformMatrix
this._transformMatrix=[n[0]*t+n[2]*r,n[1]*t+n[3]*r,n[0]*-r+n[2]*t,n[1]*-r+n[3]*t,n[4],n[5]],this._originalRotate(e)})}var f=function(){function e(e){this.canvasFactory=e,this.cache=Object.create(null)}return e.prototype={getCanvas:function(e,t,r,n){var i
return void 0!==this.cache[e]?(i=this.cache[e],this.canvasFactory.reset(i,t,r),i.context.setTransform(1,0,0,1,0,0)):(i=this.canvasFactory.create(t,r),this.cache[e]=i),n&&l(i.context),i},clear:function(){for(var e in this.cache){var t=this.cache[e]
this.canvasFactory.destroy(t),delete this.cache[e]}}},e}()
var h=function(){function e(){this.alphaIsShape=!1,this.fontSize=0,this.fontSizeScale=1,this.textMatrix=n.IDENTITY_MATRIX,this.textMatrixScale=1,this.fontMatrix=n.FONT_IDENTITY_MATRIX,this.leading=0,this.x=0,this.y=0,this.lineX=0,this.lineY=0,this.charSpacing=0,this.wordSpacing=0,this.textHScale=1,this.textRenderingMode=n.TextRenderingMode.FILL,this.textRise=0,this.fillColor="#000000",this.strokeColor="#000000",this.patternFill=!1,this.fillAlpha=1,this.strokeAlpha=1,this.lineWidth=1,this.activeSMask=null,this.resumeSMaskCtx=null,this.transferMaps=null}return e.prototype={clone:function(){return Object.create(this)},setCurrentPoint:function(e,t){this.x=e,this.y=t}},e}(),d=function(){function e(e,t,r,n,i,a,o){this.ctx=e,this.current=new h,this.stateStack=[],this.pendingClip=null,this.pendingEOFill=!1,this.res=null,this.xobjs=null,this.commonObjs=t,this.objs=r,this.canvasFactory=n,this.webGLContext=i,this.imageLayer=a,this.groupStack=[],this.processingType3=null,this.baseTransform=null,this.baseTransformStack=[],this.groupLevel=0,this.smaskStack=[],this.smaskCounter=0,this.tempSMask=null,this.contentVisible=!0,this.markedContentStack=[],this.optionalContentConfig=o,this.cachedCanvases=new f(this.canvasFactory),e&&l(e),this._cachedGetSinglePixelWidth=null}function t(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null
if("undefined"!=typeof ImageData&&t instanceof ImageData)e.putImageData(t,0,0)
else{var i,a,o,s,u,l,f,h,d,p=t.height,v=t.width,y=p%c,g=(p-y)/c,m=0===y?g:g+1,b=e.createImageData(v,c),_=0,A=t.data,S=b.data
if(r)switch(r.length){case 1:l=r[0],f=r[0],h=r[0],d=r[0]
break
case 4:l=r[0],f=r[1],h=r[2],d=r[3]}if(t.kind===n.ImageKind.GRAYSCALE_1BPP){var w=A.byteLength,k=new Uint32Array(S.buffer,0,S.byteLength>>2),x=k.length,C=v+7>>3,R=4294967295,P=n.IsLittleEndianCached.value?4278190080:255
if(d&&255===d[0]&&0===d[255]){var T=[P,R]
R=T[0],P=T[1]}for(a=0;a<m;a++){for(s=a<g?c:y,i=0,o=0;o<s;o++){for(var E=w-_,O=0,F=E>C?v:8*E-7,L=-8&F,I=0,M=0;O<L;O+=8)M=A[_++],k[i++]=128&M?R:P,k[i++]=64&M?R:P,k[i++]=32&M?R:P,k[i++]=16&M?R:P,k[i++]=8&M?R:P,k[i++]=4&M?R:P,k[i++]=2&M?R:P,k[i++]=1&M?R:P
for(;O<F;O++)0===I&&(M=A[_++],I=128),k[i++]=M&I?R:P,I>>=1}for(;i<x;)k[i++]=0
e.putImageData(b,0,a*c)}}else if(t.kind===n.ImageKind.RGBA_32BPP){var j=!!(l||f||h)
for(o=0,u=v*c*4,a=0;a<g;a++){if(S.set(A.subarray(_,_+u)),_+=u,j)for(var D=0;D<u;D+=4)l&&(S[D+0]=l[S[D+0]]),f&&(S[D+1]=f[S[D+1]]),h&&(S[D+2]=h[S[D+2]])
e.putImageData(b,0,o),o+=c}if(a<m){if(u=v*y*4,S.set(A.subarray(_,_+u)),j)for(var N=0;N<u;N+=4)l&&(S[N+0]=l[S[N+0]]),f&&(S[N+1]=f[S[N+1]]),h&&(S[N+2]=h[S[N+2]])
e.putImageData(b,0,o)}}else{if(t.kind!==n.ImageKind.RGB_24BPP)throw new Error("bad image kind: ".concat(t.kind))
var q=!!(l||f||h)
for(u=v*(s=c),a=0;a<m;a++){for(a>=g&&(u=v*(s=y)),i=0,o=u;o--;)S[i++]=A[_++],S[i++]=A[_++],S[i++]=A[_++],S[i++]=255
if(q)for(var U=0;U<i;U+=4)l&&(S[U+0]=l[S[U+0]]),f&&(S[U+1]=f[S[U+1]]),h&&(S[U+2]=h[S[U+2]])
e.putImageData(b,0,a*c)}}}}function r(e,t){for(var r=t.height,n=t.width,i=r%c,a=(r-i)/c,o=0===i?a:a+1,s=e.createImageData(n,c),u=0,l=t.data,f=s.data,h=0;h<o;h++){for(var d=h<a?c:i,p=3,v=0;v<d;v++)for(var y=0,g=0;g<n;g++){if(!y){var m=l[u++]
y=128}f[p]=m&y?0:255,p+=4,y>>=1}e.putImageData(s,0,h*c)}}function o(e,t){for(var r=["strokeStyle","fillStyle","fillRule","globalAlpha","lineWidth","lineCap","lineJoin","miterLimit","globalCompositeOperation","font"],n=0,i=r.length;n<i;n++){var a=r[n]
void 0!==e[a]&&(t[a]=e[a])}void 0!==e.setLineDash&&(t.setLineDash(e.getLineDash()),t.lineDashOffset=e.lineDashOffset)}function d(e){e.strokeStyle="#000000",e.fillStyle="#000000",e.fillRule="nonzero",e.globalAlpha=1,e.lineWidth=1,e.lineCap="butt",e.lineJoin="miter",e.miterLimit=10,e.globalCompositeOperation="source-over",e.font="10px sans-serif",void 0!==e.setLineDash&&(e.setLineDash([]),e.lineDashOffset=0)}function p(e,t,r,n){for(var i=e.length,a=3;a<i;a+=4){var o=e[a]
if(0===o)e[a-3]=t,e[a-2]=r,e[a-1]=n
else if(o<255){var s=255-o
e[a-3]=e[a-3]*o+t*s>>8,e[a-2]=e[a-2]*o+r*s>>8,e[a-1]=e[a-1]*o+n*s>>8}}}function v(e,t,r){for(var n=e.length,i=3;i<n;i+=4){var a=r?r[e[i]]:e[i]
t[i]=t[i]*a*.00392156862745098|0}}function y(e,t,r){for(var n=e.length,i=3;i<n;i+=4){var a=77*e[i-3]+152*e[i-2]+28*e[i-1]
t[i]=r?t[i]*r[a>>8]>>8:t[i]*a>>16}}function g(e,t,r,n){var i=t.canvas,a=t.context
e.setTransform(t.scaleX,0,0,t.scaleY,t.offsetX,t.offsetY)
var o=t.backdrop||null
if(!t.transferMap&&n.isEnabled){var s=n.composeSMask({layer:r.canvas,mask:i,properties:{subtype:t.subtype,backdrop:o}})
return e.setTransform(1,0,0,1,0,0),void e.drawImage(s,t.offsetX,t.offsetY)}(function(e,t,r,n,i,a,o){var s,u=!!a,c=u?a[0]:0,l=u?a[1]:0,f=u?a[2]:0
s="Luminosity"===i?y:v
for(var h=Math.min(n,Math.ceil(1048576/r)),d=0;d<n;d+=h){var g=Math.min(h,n-d),m=e.getImageData(0,d,r,g),b=t.getImageData(0,d,r,g)
u&&p(m.data,c,l,f),s(m.data,b.data,o),e.putImageData(b,0,d)}})(a,r,i.width,i.height,t.subtype,o,t.transferMap),e.drawImage(i,0,0)}var m=["butt","round","square"],b=["miter","round","bevel"],_={},A={}
for(var S in e.prototype={beginDrawing:function(e){var t=e.transform,r=e.viewport,n=e.transparency,i=void 0!==n&&n,a=e.background,o=void 0===a?null:a,s=this.ctx.canvas.width,u=this.ctx.canvas.height
if(this.ctx.save(),this.ctx.fillStyle=o||"rgb(255, 255, 255)",this.ctx.fillRect(0,0,s,u),this.ctx.restore(),i){var c=this.cachedCanvases.getCanvas("transparent",s,u,!0)
this.compositeCtx=this.ctx,this.transparentCanvas=c.canvas,this.ctx=c.context,this.ctx.save(),this.ctx.transform.apply(this.ctx,this.compositeCtx.mozCurrentTransform)}this.ctx.save(),d(this.ctx),t&&this.ctx.transform.apply(this.ctx,t),this.ctx.transform.apply(this.ctx,r.transform),this.baseTransform=this.ctx.mozCurrentTransform.slice(),this.imageLayer&&this.imageLayer.beginLayout()},executeOperatorList:function(e,t,r,i){var o=e.argsArray,s=e.fnArray,u=t||0,c=o.length
if(c===u)return u
for(var l,f=c-u>10&&"function"==typeof r,h=f?Date.now()+15:0,d=0,p=this.commonObjs,v=this.objs;;){if(void 0!==i&&u===i.nextBreakPoint)return i.breakIt(u,r),u
if((l=s[u])!==n.OPS.dependency)this[l].apply(this,o[u])
else{var y,g=a(o[u])
try{for(g.s();!(y=g.n()).done;){var m=y.value,b=m.startsWith("g_")?p:v
if(!b.has(m))return b.get(m,r),u}}catch(_){g.e(_)}finally{g.f()}}if(++u===c)return u
if(f&&++d>10){if(Date.now()>h)return r(),u
d=0}}},endDrawing:function(){null!==this.current.activeSMask&&this.endSMaskGroup(),this.ctx.restore(),this.transparentCanvas&&(this.ctx=this.compositeCtx,this.ctx.save(),this.ctx.setTransform(1,0,0,1,0,0),this.ctx.drawImage(this.transparentCanvas,0,0),this.ctx.restore(),this.transparentCanvas=null),this.cachedCanvases.clear(),this.webGLContext.clear(),this.imageLayer&&this.imageLayer.endLayout()},setLineWidth:function(e){this.current.lineWidth=e,this.ctx.lineWidth=e},setLineCap:function(e){this.ctx.lineCap=m[e]},setLineJoin:function(e){this.ctx.lineJoin=b[e]},setMiterLimit:function(e){this.ctx.miterLimit=e},setDash:function(e,t){var r=this.ctx
void 0!==r.setLineDash&&(r.setLineDash(e),r.lineDashOffset=t)},setRenderingIntent:function(e){},setFlatness:function(e){},setGState:function(e){for(var t=0,r=e.length;t<r;t++){var n=e[t],i=n[0],a=n[1]
switch(i){case"LW":this.setLineWidth(a)
break
case"LC":this.setLineCap(a)
break
case"LJ":this.setLineJoin(a)
break
case"ML":this.setMiterLimit(a)
break
case"D":this.setDash(a[0],a[1])
break
case"RI":this.setRenderingIntent(a)
break
case"FL":this.setFlatness(a)
break
case"Font":this.setFont(a[0],a[1])
break
case"CA":this.current.strokeAlpha=n[1]
break
case"ca":this.current.fillAlpha=n[1],this.ctx.globalAlpha=n[1]
break
case"BM":this.ctx.globalCompositeOperation=a
break
case"SMask":this.current.activeSMask&&(this.stateStack.length>0&&this.stateStack[this.stateStack.length-1].activeSMask===this.current.activeSMask?this.suspendSMaskGroup():this.endSMaskGroup()),this.current.activeSMask=a?this.tempSMask:null,this.current.activeSMask&&this.beginSMaskGroup(),this.tempSMask=null
break
case"TR":this.current.transferMaps=a}}},beginSMaskGroup:function(){var e=this.current.activeSMask,t=e.canvas.width,r=e.canvas.height,n="smaskGroupAt"+this.groupLevel,i=this.cachedCanvases.getCanvas(n,t,r,!0),a=this.ctx,s=a.mozCurrentTransform
this.ctx.save()
var u=i.context
u.scale(1/e.scaleX,1/e.scaleY),u.translate(-e.offsetX,-e.offsetY),u.transform.apply(u,s),e.startTransformInverse=u.mozCurrentTransformInverse,o(a,u),this.ctx=u,this.setGState([["BM","source-over"],["ca",1],["CA",1]]),this.groupStack.push(a),this.groupLevel++},suspendSMaskGroup:function(){var e=this.ctx
this.groupLevel--,this.ctx=this.groupStack.pop(),g(this.ctx,this.current.activeSMask,e,this.webGLContext),this.ctx.restore(),this.ctx.save(),o(e,this.ctx),this.current.resumeSMaskCtx=e
var t=n.Util.transform(this.current.activeSMask.startTransformInverse,e.mozCurrentTransform)
this.ctx.transform.apply(this.ctx,t),e.save(),e.setTransform(1,0,0,1,0,0),e.clearRect(0,0,e.canvas.width,e.canvas.height),e.restore()},resumeSMaskGroup:function(){var e=this.current.resumeSMaskCtx,t=this.ctx
this.ctx=e,this.groupStack.push(t),this.groupLevel++},endSMaskGroup:function(){var e=this.ctx
this.groupLevel--,this.ctx=this.groupStack.pop(),g(this.ctx,this.current.activeSMask,e,this.webGLContext),this.ctx.restore(),o(e,this.ctx)
var t=n.Util.transform(this.current.activeSMask.startTransformInverse,e.mozCurrentTransform)
this.ctx.transform.apply(this.ctx,t)},save:function(){this.ctx.save()
var e=this.current
this.stateStack.push(e),this.current=e.clone(),this.current.resumeSMaskCtx=null},restore:function(){this.current.resumeSMaskCtx&&this.resumeSMaskGroup(),null===this.current.activeSMask||0!==this.stateStack.length&&this.stateStack[this.stateStack.length-1].activeSMask===this.current.activeSMask||this.endSMaskGroup(),0!==this.stateStack.length&&(this.current=this.stateStack.pop(),this.ctx.restore(),this.pendingClip=null,this._cachedGetSinglePixelWidth=null)},transform:function(e,t,r,n,i,a){this.ctx.transform(e,t,r,n,i,a),this._cachedGetSinglePixelWidth=null},constructPath:function(e,t){for(var r=this.ctx,i=this.current,a=i.x,o=i.y,s=0,u=0,c=e.length;s<c;s++)switch(0|e[s]){case n.OPS.rectangle:a=t[u++],o=t[u++]
var l=t[u++],f=t[u++]
0===l&&r.lineWidth<this.getSinglePixelWidth()&&(l=this.getSinglePixelWidth()),0===f&&r.lineWidth<this.getSinglePixelWidth()&&(f=this.getSinglePixelWidth())
var h=a+l,d=o+f
r.moveTo(a,o),r.lineTo(h,o),r.lineTo(h,d),r.lineTo(a,d),r.lineTo(a,o),r.closePath()
break
case n.OPS.moveTo:a=t[u++],o=t[u++],r.moveTo(a,o)
break
case n.OPS.lineTo:a=t[u++],o=t[u++],r.lineTo(a,o)
break
case n.OPS.curveTo:a=t[u+4],o=t[u+5],r.bezierCurveTo(t[u],t[u+1],t[u+2],t[u+3],a,o),u+=6
break
case n.OPS.curveTo2:r.bezierCurveTo(a,o,t[u],t[u+1],t[u+2],t[u+3]),a=t[u+2],o=t[u+3],u+=4
break
case n.OPS.curveTo3:a=t[u+2],o=t[u+3],r.bezierCurveTo(t[u],t[u+1],a,o,a,o),u+=4
break
case n.OPS.closePath:r.closePath()}i.setCurrentPoint(a,o)},closePath:function(){this.ctx.closePath()},stroke:function(e){e=void 0===e||e
var t=this.ctx,r=this.current.strokeColor
if(t.globalAlpha=this.current.strokeAlpha,this.contentVisible)if(r&&r.hasOwnProperty("type")&&"Pattern"===r.type){t.save()
var i=t.mozCurrentTransform,a=n.Util.singularValueDecompose2dScale(i)[0]
t.strokeStyle=r.getPattern(t,this),t.lineWidth=Math.max(this.getSinglePixelWidth()*u,this.current.lineWidth*a),t.stroke(),t.restore()}else t.lineWidth=Math.max(this.getSinglePixelWidth()*u,this.current.lineWidth),t.stroke()
e&&this.consumePath(),t.globalAlpha=this.current.fillAlpha},closeStroke:function(){this.closePath(),this.stroke()},fill:function(e){e=void 0===e||e
var t=this.ctx,r=this.current.fillColor,n=!1
this.current.patternFill&&(t.save(),this.baseTransform&&t.setTransform.apply(t,this.baseTransform),t.fillStyle=r.getPattern(t,this),n=!0),this.contentVisible&&(this.pendingEOFill?(t.fill("evenodd"),this.pendingEOFill=!1):t.fill()),n&&t.restore(),e&&this.consumePath()},eoFill:function(){this.pendingEOFill=!0,this.fill()},fillStroke:function(){this.fill(!1),this.stroke(!1),this.consumePath()},eoFillStroke:function(){this.pendingEOFill=!0,this.fillStroke()},closeFillStroke:function(){this.closePath(),this.fillStroke()},closeEOFillStroke:function(){this.pendingEOFill=!0,this.closePath(),this.fillStroke()},endPath:function(){this.consumePath()},clip:function(){this.pendingClip=_},eoClip:function(){this.pendingClip=A},beginText:function(){this.current.textMatrix=n.IDENTITY_MATRIX,this.current.textMatrixScale=1,this.current.x=this.current.lineX=0,this.current.y=this.current.lineY=0},endText:function(){var e=this.pendingTextPaths,t=this.ctx
if(void 0!==e){t.save(),t.beginPath()
for(var r=0;r<e.length;r++){var n=e[r]
t.setTransform.apply(t,n.transform),t.translate(n.x,n.y),n.addToPath(t,n.fontSize)}t.restore(),t.clip(),t.beginPath(),delete this.pendingTextPaths}else t.beginPath()},setCharSpacing:function(e){this.current.charSpacing=e},setWordSpacing:function(e){this.current.wordSpacing=e},setHScale:function(e){this.current.textHScale=e/100},setLeading:function(e){this.current.leading=-e},setFont:function(e,t){var r=this.commonObjs.get(e),i=this.current
if(!r)throw new Error("Can't find font for ".concat(e))
if(i.fontMatrix=r.fontMatrix?r.fontMatrix:n.FONT_IDENTITY_MATRIX,0!==i.fontMatrix[0]&&0!==i.fontMatrix[3]||(0,n.warn)("Invalid font matrix for font "+e),t<0?(t=-t,i.fontDirection=-1):i.fontDirection=1,this.current.font=r,this.current.fontSize=t,!r.isType3Font){var a=r.loadedName||"sans-serif",o="normal"
r.black?o="900":r.bold&&(o="bold")
var s=r.italic?"italic":"normal",u='"'.concat(a,'", ').concat(r.fallbackName),c=t
t<16?c=16:t>100&&(c=100),this.current.fontSizeScale=t/c,this.ctx.font="".concat(s," ").concat(o," ").concat(c,"px ").concat(u)}},setTextRenderingMode:function(e){this.current.textRenderingMode=e},setTextRise:function(e){this.current.textRise=e},moveText:function(e,t){this.current.x=this.current.lineX+=e,this.current.y=this.current.lineY+=t},setLeadingMoveText:function(e,t){this.setLeading(-t),this.moveText(e,t)},setTextMatrix:function(e,t,r,n,i,a){this.current.textMatrix=[e,t,r,n,i,a],this.current.textMatrixScale=Math.sqrt(e*e+t*t),this.current.x=this.current.lineX=0,this.current.y=this.current.lineY=0},nextLine:function(){this.moveText(0,this.current.leading)},paintChar:function(e,t,r,i){var a,o=this.ctx,s=this.current,u=s.font,c=s.textRenderingMode,l=s.fontSize/s.fontSizeScale,f=c&n.TextRenderingMode.FILL_STROKE_MASK,h=!!(c&n.TextRenderingMode.ADD_TO_PATH_FLAG),d=s.patternFill&&!u.missingFile;((u.disableFontFace||h||d)&&(a=u.getPathGenerator(this.commonObjs,e)),u.disableFontFace||d?(o.save(),o.translate(t,r),o.beginPath(),a(o,l),i&&o.setTransform.apply(o,i),f!==n.TextRenderingMode.FILL&&f!==n.TextRenderingMode.FILL_STROKE||o.fill(),f!==n.TextRenderingMode.STROKE&&f!==n.TextRenderingMode.FILL_STROKE||o.stroke(),o.restore()):(f!==n.TextRenderingMode.FILL&&f!==n.TextRenderingMode.FILL_STROKE||o.fillText(e,t,r),f!==n.TextRenderingMode.STROKE&&f!==n.TextRenderingMode.FILL_STROKE||o.strokeText(e,t,r)),h)&&(this.pendingTextPaths||(this.pendingTextPaths=[])).push({transform:o.mozCurrentTransform,x:t,y:r,fontSize:l,addToPath:a})},get isFontSubpixelAAEnabled(){var e=this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled",10,10).context
e.scale(1.5,1),e.fillText("I",0,10)
for(var t=e.getImageData(0,0,10,10).data,r=!1,i=3;i<t.length;i+=4)if(t[i]>0&&t[i]<255){r=!0
break}return(0,n.shadow)(this,"isFontSubpixelAAEnabled",r)},showText:function(e){var t=this.current,r=t.font
if(r.isType3Font)return this.showType3Text(e)
var i=t.fontSize
if(0!==i){var a,o=this.ctx,s=t.fontSizeScale,c=t.charSpacing,l=t.wordSpacing,f=t.fontDirection,h=t.textHScale*f,d=e.length,p=r.vertical,v=p?1:-1,y=r.defaultVMetrics,g=i*t.fontMatrix[0],m=t.textRenderingMode===n.TextRenderingMode.FILL&&!r.disableFontFace&&!t.patternFill
if(o.save(),t.patternFill){o.save()
var b=t.fillColor.getPattern(o,this)
a=o.mozCurrentTransform,o.restore(),o.fillStyle=b}o.transform.apply(o,t.textMatrix),o.translate(t.x,t.y+t.textRise),f>0?o.scale(h,-1):o.scale(h,1)
var _=t.lineWidth,A=t.textMatrixScale
if(0===A||0===_){var S=t.textRenderingMode&n.TextRenderingMode.FILL_STROKE_MASK
S!==n.TextRenderingMode.STROKE&&S!==n.TextRenderingMode.FILL_STROKE||(this._cachedGetSinglePixelWidth=null,_=this.getSinglePixelWidth()*u)}else _/=A
1!==s&&(o.scale(s,s),_/=s),o.lineWidth=_
var w,k=0
for(w=0;w<d;++w){var x=e[w]
if((0,n.isNum)(x))k+=v*x*i/1e3
else{var C,R,P,T,E,O,F,L=!1,I=(x.isSpace?l:0)+c,M=x.fontChar,j=x.accent,D=x.width
if(p)E=x.vmetric||y,O=-(O=x.vmetric?E[1]:.5*D)*g,F=E[2]*g,D=E?-E[0]:D,C=O/s,R=(k+F)/s
else C=k/s,R=0
if(r.remeasure&&D>0){var N=1e3*o.measureText(M).width/i*s
if(D<N&&this.isFontSubpixelAAEnabled){var q=D/N
L=!0,o.save(),o.scale(q,1),C/=q}else D!==N&&(C+=(D-N)/2e3*i/s)}this.contentVisible&&(x.isInFont||r.missingFile)&&(m&&!j?o.fillText(M,C,R):(this.paintChar(M,C,R,a),j&&(P=C+i*j.offset.x/s,T=R-i*j.offset.y/s,this.paintChar(j.fontChar,P,T,a)))),k+=p?D*g-I*f:D*g+I*f,L&&o.restore()}}p?t.y-=k:t.x+=k*h,o.restore()}},showType3Text:function(e){var t,r,i,a,o=this.ctx,s=this.current,u=s.font,c=s.fontSize,l=s.fontDirection,f=u.vertical?1:-1,h=s.charSpacing,d=s.wordSpacing,p=s.textHScale*l,v=s.fontMatrix||n.FONT_IDENTITY_MATRIX,y=e.length
if(!(s.textRenderingMode===n.TextRenderingMode.INVISIBLE)&&0!==c){for(this._cachedGetSinglePixelWidth=null,o.save(),o.transform.apply(o,s.textMatrix),o.translate(s.x,s.y),o.scale(p,l),t=0;t<y;++t)if(r=e[t],(0,n.isNum)(r))a=f*r*c/1e3,this.ctx.translate(a,0),s.x+=a*p
else{var g=(r.isSpace?d:0)+h,m=u.charProcOperatorList[r.operatorListId]
if(m)this.contentVisible&&(this.processingType3=r,this.save(),o.scale(c,c),o.transform.apply(o,v),this.executeOperatorList(m),this.restore()),i=n.Util.applyTransform([r.width,0],v)[0]*c+g,o.translate(i,0),s.x+=i*p
else(0,n.warn)('Type3 character "'.concat(r.operatorListId,'" is not available.'))}o.restore(),this.processingType3=null}},setCharWidth:function(e,t){},setCharWidthAndBounds:function(e,t,r,n,i,a){this.ctx.rect(r,n,i-r,a-n),this.clip(),this.endPath()},getColorN_Pattern:function(t){var r,n=this
if("TilingPattern"===t[0]){var a=t[1],o=this.baseTransform||this.ctx.mozCurrentTransform.slice(),s={createCanvasGraphics:function(t){return new e(t,n.commonObjs,n.objs,n.canvasFactory,n.webGLContext)}}
r=new i.TilingPattern(t,a,this.ctx,s,o)}else r=(0,i.getShadingPatternFromIR)(t)
return r},setStrokeColorN:function(){this.current.strokeColor=this.getColorN_Pattern(arguments)},setFillColorN:function(){this.current.fillColor=this.getColorN_Pattern(arguments),this.current.patternFill=!0},setStrokeRGBColor:function(e,t,r){var i=n.Util.makeCssRgb(e,t,r)
this.ctx.strokeStyle=i,this.current.strokeColor=i},setFillRGBColor:function(e,t,r){var i=n.Util.makeCssRgb(e,t,r)
this.ctx.fillStyle=i,this.current.fillColor=i,this.current.patternFill=!1},shadingFill:function(e){if(this.contentVisible){var t=this.ctx
this.save()
var r=(0,i.getShadingPatternFromIR)(e)
t.fillStyle=r.getPattern(t,this,!0)
var a=t.mozCurrentTransformInverse
if(a){var o=t.canvas,s=o.width,u=o.height,c=n.Util.applyTransform([0,0],a),l=n.Util.applyTransform([0,u],a),f=n.Util.applyTransform([s,0],a),h=n.Util.applyTransform([s,u],a),d=Math.min(c[0],l[0],f[0],h[0]),p=Math.min(c[1],l[1],f[1],h[1]),v=Math.max(c[0],l[0],f[0],h[0]),y=Math.max(c[1],l[1],f[1],h[1])
this.ctx.fillRect(d,p,v-d,y-p)}else this.ctx.fillRect(-1e10,-1e10,2e10,2e10)
this.restore()}},beginInlineImage:function(){(0,n.unreachable)("Should not call beginInlineImage")},beginImageData:function(){(0,n.unreachable)("Should not call beginImageData")},paintFormXObjectBegin:function(e,t){if(this.contentVisible&&(this.save(),this.baseTransformStack.push(this.baseTransform),Array.isArray(e)&&6===e.length&&this.transform.apply(this,e),this.baseTransform=this.ctx.mozCurrentTransform,t)){var r=t[2]-t[0],n=t[3]-t[1]
this.ctx.rect(t[0],t[1],r,n),this.clip(),this.endPath()}},paintFormXObjectEnd:function(){this.contentVisible&&(this.restore(),this.baseTransform=this.baseTransformStack.pop())},beginGroup:function(e){if(this.contentVisible){this.save()
var t=this.ctx
e.isolated||(0,n.info)("TODO: Support non-isolated groups."),e.knockout&&(0,n.warn)("Knockout groups not supported.")
var r=t.mozCurrentTransform
if(e.matrix&&t.transform.apply(t,e.matrix),!e.bbox)throw new Error("Bounding box is required.")
var i=n.Util.getAxialAlignedBoundingBox(e.bbox,t.mozCurrentTransform),a=[0,0,t.canvas.width,t.canvas.height]
i=n.Util.intersect(i,a)||[0,0,0,0]
var u=Math.floor(i[0]),c=Math.floor(i[1]),l=Math.max(Math.ceil(i[2])-u,1),f=Math.max(Math.ceil(i[3])-c,1),h=1,d=1
l>s&&(h=l/s,l=s),f>s&&(d=f/s,f=s)
var p="groupAt"+this.groupLevel
e.smask&&(p+="_smask_"+this.smaskCounter++%2)
var v=this.cachedCanvases.getCanvas(p,l,f,!0),y=v.context
y.scale(1/h,1/d),y.translate(-u,-c),y.transform.apply(y,r),e.smask?this.smaskStack.push({canvas:v.canvas,context:y,offsetX:u,offsetY:c,scaleX:h,scaleY:d,subtype:e.smask.subtype,backdrop:e.smask.backdrop,transferMap:e.smask.transferMap||null,startTransformInverse:null}):(t.setTransform(1,0,0,1,0,0),t.translate(u,c),t.scale(h,d)),o(t,y),this.ctx=y,this.setGState([["BM","source-over"],["ca",1],["CA",1]]),this.groupStack.push(t),this.groupLevel++,this.current.activeSMask=null}},endGroup:function(e){if(this.contentVisible){this.groupLevel--
var t=this.ctx
this.ctx=this.groupStack.pop(),void 0!==this.ctx.imageSmoothingEnabled?this.ctx.imageSmoothingEnabled=!1:this.ctx.mozImageSmoothingEnabled=!1,e.smask?this.tempSMask=this.smaskStack.pop():this.ctx.drawImage(t.canvas,0,0),this.restore()}},beginAnnotations:function(){this.save(),this.baseTransform&&this.ctx.setTransform.apply(this.ctx,this.baseTransform)},endAnnotations:function(){this.restore()},beginAnnotation:function(e,t,r){if(this.save(),d(this.ctx),this.current=new h,Array.isArray(e)&&4===e.length){var n=e[2]-e[0],i=e[3]-e[1]
this.ctx.rect(e[0],e[1],n,i),this.clip(),this.endPath()}this.transform.apply(this,t),this.transform.apply(this,r)},endAnnotation:function(){this.restore()},paintImageMaskXObject:function(e){if(this.contentVisible){var t=this.ctx,n=e.width,i=e.height,a=this.current.fillColor,o=this.current.patternFill,s=this.processingType3
if(s&&void 0===s.compiled&&(s.compiled=n<=1e3&&i<=1e3?function(e){var t,r,n,i,a=e.width,o=e.height,s=a+1,u=new Uint8Array(s*(o+1)),c=new Uint8Array([0,2,4,0,1,0,5,4,8,10,0,8,0,2,1,0]),l=a+7&-8,f=e.data,h=new Uint8Array(l*o),d=0
for(t=0,i=f.length;t<i;t++)for(var p=128,v=f[t];p>0;)h[d++]=v&p?0:255,p>>=1
var y=0
for(0!==h[d=0]&&(u[0]=1,++y),r=1;r<a;r++)h[d]!==h[d+1]&&(u[r]=h[d]?2:1,++y),d++
for(0!==h[d]&&(u[r]=2,++y),t=1;t<o;t++){n=t*s,h[(d=t*l)-l]!==h[d]&&(u[n]=h[d]?1:8,++y)
var g=(h[d]?4:0)+(h[d-l]?8:0)
for(r=1;r<a;r++)c[g=(g>>2)+(h[d+1]?4:0)+(h[d-l+1]?8:0)]&&(u[n+r]=c[g],++y),d++
if(h[d-l]!==h[d]&&(u[n+r]=h[d]?2:4,++y),y>1e3)return null}for(n=t*s,0!==h[d=l*(o-1)]&&(u[n]=8,++y),r=1;r<a;r++)h[d]!==h[d+1]&&(u[n+r]=h[d]?4:8,++y),d++
if(0!==h[d]&&(u[n+r]=4,++y),y>1e3)return null
var m=new Int32Array([0,s,-1,0,-s,0,0,0,1]),b=[]
for(t=0;y&&t<=o;t++){for(var _=t*s,A=_+a;_<A&&!u[_];)_++
if(_!==A){var S,w=[_%s,t],k=u[_],x=_
do{var C=m[k]
do{_+=C}while(!u[_])
5!==(S=u[_])&&10!==S?(k=S,u[_]=0):(k=S&51*k>>4,u[_]&=k>>2|k<<2),w.push(_%s),w.push(_/s|0),u[_]||--y}while(x!==_)
b.push(w),--t}}return function(e){e.save(),e.scale(1/a,-1/o),e.translate(0,-o),e.beginPath()
for(var t=0,r=b.length;t<r;t++){var n=b[t]
e.moveTo(n[0],n[1])
for(var i=2,s=n.length;i<s;i+=2)e.lineTo(n[i],n[i+1])}e.fill(),e.beginPath(),e.restore()}}({data:e.data,width:n,height:i}):null),s&&s.compiled)s.compiled(t)
else{var u=this.cachedCanvases.getCanvas("maskCanvas",n,i),c=u.context
c.save(),r(c,e),c.globalCompositeOperation="source-in",c.fillStyle=o?a.getPattern(c,this):a,c.fillRect(0,0,n,i),c.restore(),this.paintInlineImageXObject(u.canvas)}}},paintImageMaskXObjectRepeat:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,a=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0
if(this.contentVisible){var s=e.width,u=e.height,c=this.current.fillColor,l=this.current.patternFill,f=this.cachedCanvases.getCanvas("maskCanvas",s,u),h=f.context
h.save(),r(h,e),h.globalCompositeOperation="source-in",h.fillStyle=l?c.getPattern(h,this):c,h.fillRect(0,0,s,u),h.restore()
for(var d=this.ctx,p=0,v=o.length;p<v;p+=2)d.save(),d.transform(t,n,i,a,o[p],o[p+1]),d.scale(1,-1),d.drawImage(f.canvas,0,0,s,u,0,-1,1,1),d.restore()}},paintImageMaskXObjectGroup:function(e){if(this.contentVisible)for(var t=this.ctx,n=this.current.fillColor,i=this.current.patternFill,a=0,o=e.length;a<o;a++){var s=e[a],u=s.width,c=s.height,l=this.cachedCanvases.getCanvas("maskCanvas",u,c),f=l.context
f.save(),r(f,s),f.globalCompositeOperation="source-in",f.fillStyle=i?n.getPattern(f,this):n,f.fillRect(0,0,u,c),f.restore(),t.save(),t.transform.apply(t,s.transform),t.scale(1,-1),t.drawImage(l.canvas,0,0,u,c,0,-1,1,1),t.restore()}},paintImageXObject:function(e){if(this.contentVisible){var t=e.startsWith("g_")?this.commonObjs.get(e):this.objs.get(e)
t?this.paintInlineImageXObject(t):(0,n.warn)("Dependent image isn't ready yet")}},paintImageXObjectRepeat:function(e,t,r,i){if(this.contentVisible){var a=e.startsWith("g_")?this.commonObjs.get(e):this.objs.get(e)
if(a){for(var o=a.width,s=a.height,u=[],c=0,l=i.length;c<l;c+=2)u.push({transform:[t,0,0,r,i[c],i[c+1]],x:0,y:0,w:o,h:s})
this.paintInlineImageXObjectGroup(a,u)}else(0,n.warn)("Dependent image isn't ready yet")}},paintInlineImageXObject:function(e){if(this.contentVisible){var r=e.width,n=e.height,i=this.ctx
this.save(),i.scale(1/r,-1/n)
var a,o,s=i.mozCurrentTransformInverse,u=s[0],c=s[1],l=Math.max(Math.sqrt(u*u+c*c),1),f=s[2],h=s[3],d=Math.max(Math.sqrt(f*f+h*h),1)
if("function"==typeof HTMLElement&&e instanceof HTMLElement||!e.data)a=e
else{var p=(o=this.cachedCanvases.getCanvas("inlineImage",r,n)).context
t(p,e,this.current.transferMaps),a=o.canvas}for(var v=r,y=n,g="prescale1";l>2&&v>1||d>2&&y>1;){var m=v,b=y
l>2&&v>1&&(l/=v/(m=Math.ceil(v/2))),d>2&&y>1&&(d/=y/(b=Math.ceil(y/2))),(p=(o=this.cachedCanvases.getCanvas(g,m,b)).context).clearRect(0,0,m,b),p.drawImage(a,0,0,v,y,0,0,m,b),a=o.canvas,v=m,y=b,g="prescale1"===g?"prescale2":"prescale1"}if(i.drawImage(a,0,0,v,y,0,-n,r,n),this.imageLayer){var _=this.getCanvasPosition(0,-n)
this.imageLayer.appendImage({imgData:e,left:_[0],top:_[1],width:r/s[0],height:n/s[3]})}this.restore()}},paintInlineImageXObjectGroup:function(e,r){if(this.contentVisible){var n=this.ctx,i=e.width,a=e.height,o=this.cachedCanvases.getCanvas("inlineImage",i,a)
t(o.context,e,this.current.transferMaps)
for(var s=0,u=r.length;s<u;s++){var c=r[s]
if(n.save(),n.transform.apply(n,c.transform),n.scale(1,-1),n.drawImage(o.canvas,c.x,c.y,c.w,c.h,0,-1,1,1),this.imageLayer){var l=this.getCanvasPosition(c.x,c.y)
this.imageLayer.appendImage({imgData:e,left:l[0],top:l[1],width:i,height:a})}n.restore()}}},paintSolidColorImageMask:function(){this.contentVisible&&this.ctx.fillRect(0,0,1,1)},markPoint:function(e){},markPointProps:function(e,t){},beginMarkedContent:function(e){this.markedContentStack.push({visible:!0})},beginMarkedContentProps:function(e,t){"OC"===e?this.markedContentStack.push({visible:this.optionalContentConfig.isVisible(t)}):this.markedContentStack.push({visible:!0}),this.contentVisible=this.isContentVisible()},endMarkedContent:function(){this.markedContentStack.pop(),this.contentVisible=this.isContentVisible()},beginCompat:function(){},endCompat:function(){},consumePath:function(){var e=this.ctx
this.pendingClip&&(this.pendingClip===A?e.clip("evenodd"):e.clip(),this.pendingClip=null),e.beginPath()},getSinglePixelWidth:function(e){if(null===this._cachedGetSinglePixelWidth){var t=this.ctx.mozCurrentTransformInverse
this._cachedGetSinglePixelWidth=Math.sqrt(Math.max(t[0]*t[0]+t[1]*t[1],t[2]*t[2]+t[3]*t[3]))}return this._cachedGetSinglePixelWidth},getCanvasPosition:function(e,t){var r=this.ctx.mozCurrentTransform
return[r[0]*e+r[2]*t+r[4],r[1]*e+r[3]*t+r[5]]},isContentVisible:function(){for(var e=this.markedContentStack.length-1;e>=0;e--)if(!this.markedContentStack[e].visible)return!1
return!0}},n.OPS)e.prototype[n.OPS[S]]=e.prototype[S]
return e}()
t.CanvasGraphics=d},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.getShadingPatternFromIR=function(e){var t=i[e[0]]
if(!t)throw new Error("Unknown IR type: ".concat(e[0]))
return t.fromIR(e)},t.TilingPattern=void 0
var n=r(5),i={}
function a(e,t){if(t&&"undefined"!=typeof Path2D){var r=t[2]-t[0],n=t[3]-t[1],i=new Path2D
i.rect(t[0],t[1],r,n),e.clip(i)}}i.RadialAxial={fromIR:function(e){var t=e[1],r=e[2],n=e[3],i=e[4],o=e[5],s=e[6],u=e[7]
return{type:"Pattern",getPattern:function(e){var c
a(e,r),"axial"===t?c=e.createLinearGradient(i[0],i[1],o[0],o[1]):"radial"===t&&(c=e.createRadialGradient(i[0],i[1],s,o[0],o[1],u))
for(var l=0,f=n.length;l<f;++l){var h=n[l]
c.addColorStop(h[0],h[1])}return c}}}}
var o=function(){function e(e,t,r,n,i,a,o,s){var u,c=t.coords,l=t.colors,f=e.data,h=4*e.width
c[r+1]>c[n+1]&&(u=r,r=n,n=u,u=a,a=o,o=u),c[n+1]>c[i+1]&&(u=n,n=i,i=u,u=o,o=s,s=u),c[r+1]>c[n+1]&&(u=r,r=n,n=u,u=a,a=o,o=u)
var d=(c[r]+t.offsetX)*t.scaleX,p=(c[r+1]+t.offsetY)*t.scaleY,v=(c[n]+t.offsetX)*t.scaleX,y=(c[n+1]+t.offsetY)*t.scaleY,g=(c[i]+t.offsetX)*t.scaleX,m=(c[i+1]+t.offsetY)*t.scaleY
if(!(p>=m))for(var b,_,A,S,w,k,x,C,R=l[a],P=l[a+1],T=l[a+2],E=l[o],O=l[o+1],F=l[o+2],L=l[s],I=l[s+1],M=l[s+2],j=Math.round(p),D=Math.round(m),N=j;N<=D;N++){if(N<y){var q=void 0
b=d-(d-v)*(q=N<p?0:p===y?1:(p-N)/(p-y)),_=R-(R-E)*q,A=P-(P-O)*q,S=T-(T-F)*q}else{var U=void 0
b=v-(v-g)*(U=N>m?1:y===m?0:(y-N)/(y-m)),_=E-(E-L)*U,A=O-(O-I)*U,S=F-(F-M)*U}var W=void 0
w=d-(d-g)*(W=N<p?0:N>m?1:(p-N)/(p-m)),k=R-(R-L)*W,x=P-(P-I)*W,C=T-(T-M)*W
for(var B=Math.round(Math.min(b,w)),G=Math.round(Math.max(b,w)),z=h*N+4*B,H=B;H<=G;H++)(W=(b-H)/(b-w))<0?W=0:W>1&&(W=1),f[z++]=_-(_-k)*W|0,f[z++]=A-(A-x)*W|0,f[z++]=S-(S-C)*W|0,f[z++]=255}}function t(t,r,n){var i,a,o=r.coords,s=r.colors
switch(r.type){case"lattice":var u=r.verticesPerRow,c=Math.floor(o.length/u)-1,l=u-1
for(i=0;i<c;i++)for(var f=i*u,h=0;h<l;h++,f++)e(t,n,o[f],o[f+1],o[f+u],s[f],s[f+1],s[f+u]),e(t,n,o[f+u+1],o[f+1],o[f+u],s[f+u+1],s[f+1],s[f+u])
break
case"triangles":for(i=0,a=o.length;i<a;i+=3)e(t,n,o[i],o[i+1],o[i+2],s[i],s[i+1],s[i+2])
break
default:throw new Error("illegal figure")}}return function(e,r,n,i,a,o,s,u){var c,l,f,h,d=Math.floor(e[0]),p=Math.floor(e[1]),v=Math.ceil(e[2])-d,y=Math.ceil(e[3])-p,g=Math.min(Math.ceil(Math.abs(v*r[0]*1.1)),3e3),m=Math.min(Math.ceil(Math.abs(y*r[1]*1.1)),3e3),b=v/g,_=y/m,A={coords:n,colors:i,offsetX:-d,offsetY:-p,scaleX:1/b,scaleY:1/_},S=g+4,w=m+4
if(u.isEnabled)c=u.drawFigures({width:g,height:m,backgroundColor:o,figures:a,context:A}),(l=s.getCanvas("mesh",S,w,!1)).context.drawImage(c,2,2),c=l.canvas
else{var k=(l=s.getCanvas("mesh",S,w,!1)).context,x=k.createImageData(g,m)
if(o){var C=x.data
for(f=0,h=C.length;f<h;f+=4)C[f]=o[0],C[f+1]=o[1],C[f+2]=o[2],C[f+3]=255}for(f=0;f<a.length;f++)t(x,a[f],A)
k.putImageData(x,2,2),c=l.canvas}return{canvas:c,offsetX:d-2*b,offsetY:p-2*_,scaleX:b,scaleY:_}}}()
i.Mesh={fromIR:function(e){var t=e[2],r=e[3],i=e[4],s=e[5],u=e[6],c=e[7],l=e[8]
return{type:"Pattern",getPattern:function(e,f,h){var d
if(a(e,c),h)d=n.Util.singularValueDecompose2dScale(e.mozCurrentTransform)
else if(d=n.Util.singularValueDecompose2dScale(f.baseTransform),u){var p=n.Util.singularValueDecompose2dScale(u)
d=[d[0]*p[0],d[1]*p[1]]}var v=o(s,d,t,r,i,h?null:l,f.cachedCanvases,f.webGLContext)
return h||(e.setTransform.apply(e,f.baseTransform),u&&e.transform.apply(e,u)),e.translate(v.offsetX,v.offsetY),e.scale(v.scaleX,v.scaleY),e.createPattern(v.canvas,"no-repeat")}}}},i.Dummy={fromIR:function(){return{type:"Pattern",getPattern:function(){return"hotpink"}}}}
var s=function(){var e=1,t=2
function r(e,t,r,n,i){this.operatorList=e[2],this.matrix=e[3]||[1,0,0,1,0,0],this.bbox=e[4],this.xstep=e[5],this.ystep=e[6],this.paintType=e[7],this.tilingType=e[8],this.color=t,this.canvasGraphicsFactory=n,this.baseTransform=i,this.type="Pattern",this.ctx=r}return r.prototype={createPatternCanvas:function(e){var t=this.operatorList,r=this.bbox,i=this.xstep,a=this.ystep,o=this.paintType,s=this.tilingType,u=this.color,c=this.canvasGraphicsFactory;(0,n.info)("TilingType: "+s)
var l=r[0],f=r[1],h=r[2],d=r[3],p=n.Util.singularValueDecompose2dScale(this.matrix),v=n.Util.singularValueDecompose2dScale(this.baseTransform),y=[p[0]*v[0],p[1]*v[1]],g=this.getSizeAndScale(i,this.ctx.canvas.width,y[0]),m=this.getSizeAndScale(a,this.ctx.canvas.height,y[1]),b=e.cachedCanvases.getCanvas("pattern",g.size,m.size,!0),_=b.context,A=c.createCanvasGraphics(_)
return A.groupLevel=e.groupLevel,this.setFillAndStrokeStyleToContext(A,o,u),A.transform(g.scale,0,0,m.scale,0,0),A.transform(1,0,0,1,-l,-f),this.clipBbox(A,r,l,f,h,d),A.executeOperatorList(t),this.ctx.transform(1,0,0,1,l,f),this.ctx.scale(1/g.scale,1/m.scale),b.canvas},getSizeAndScale:function(e,t,r){e=Math.abs(e)
var n=Math.max(3e3,t),i=Math.ceil(e*r)
return i>=n?i=n:r=i/e,{scale:r,size:i}},clipBbox:function(e,t,r,n,i,a){if(Array.isArray(t)&&4===t.length){var o=i-r,s=a-n
e.ctx.rect(r,n,o,s),e.clip(),e.endPath()}},setFillAndStrokeStyleToContext:function(r,i,a){var o=r.ctx,s=r.current
switch(i){case e:var u=this.ctx
o.fillStyle=u.fillStyle,o.strokeStyle=u.strokeStyle,s.fillColor=u.fillStyle,s.strokeColor=u.strokeStyle
break
case t:var c=n.Util.makeCssRgb(a[0],a[1],a[2])
o.fillStyle=c,o.strokeStyle=c,s.fillColor=c,s.strokeColor=c
break
default:throw new n.FormatError("Unsupported paint type: ".concat(i))}},getPattern:function(e,t){(e=this.ctx).setTransform.apply(e,this.baseTransform),e.transform.apply(e,this.matrix)
var r=this.createPatternCanvas(t)
return e.createPattern(r,"repeat")}},r}()
t.TilingPattern=s},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.GlobalWorkerOptions=void 0
var n=Object.create(null)
t.GlobalWorkerOptions=n,n.workerPort=void 0===n.workerPort?null:n.workerPort,n.workerSrc=void 0===n.workerSrc?"":n.workerSrc},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.MessageHandler=void 0
var n,i=(n=r(2))&&n.__esModule?n:{default:n},a=r(5)
function o(e,t,r,n,i,a,o){try{var s=e[a](o),u=s.value}catch(c){return void r(c)}s.done?t(u):Promise.resolve(u).then(n,i)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var c=1,l=2,f=1,h=2,d=3,p=4,v=5,y=6,g=7,m=8
function b(e){if("object"!==u(e)||null===e)return e
switch(e.name){case"AbortException":return new a.AbortException(e.message)
case"MissingPDFException":return new a.MissingPDFException(e.message)
case"UnexpectedResponseException":return new a.UnexpectedResponseException(e.message,e.status)
case"UnknownErrorException":return new a.UnknownErrorException(e.message,e.details)
default:return new a.UnknownErrorException(e.message,e.toString())}}var _=function(){function e(t,r,n){var i=this;(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.sourceName=t,this.targetName=r,this.comObj=n,this.callbackId=1,this.streamId=1,this.postMessageTransfers=!0,this.streamSinks=Object.create(null),this.streamControllers=Object.create(null),this.callbackCapabilities=Object.create(null),this.actionHandler=Object.create(null),this._onComObjOnMessage=function(e){var t=e.data
if(t.targetName===i.sourceName)if(t.stream)i._processStreamMessage(t)
else if(t.callback){var r=t.callbackId,a=i.callbackCapabilities[r]
if(!a)throw new Error("Cannot resolve callback ".concat(r))
if(delete i.callbackCapabilities[r],t.callback===c)a.resolve(t.data)
else{if(t.callback!==l)throw new Error("Unexpected callback case")
a.reject(b(t.reason))}}else{var o=i.actionHandler[t.action]
if(!o)throw new Error("Unknown action from worker: ".concat(t.action))
if(t.callbackId){var s=i.sourceName,u=t.sourceName
new Promise((function(e){e(o(t.data))})).then((function(e){n.postMessage({sourceName:s,targetName:u,callback:c,callbackId:t.callbackId,data:e})}),(function(e){n.postMessage({sourceName:s,targetName:u,callback:l,callbackId:t.callbackId,reason:b(e)})}))}else t.streamId?i._createStreamSink(t):o(t.data)}},n.addEventListener("message",this._onComObjOnMessage)}var t,r,n,u,_
return t=e,(r=[{key:"on",value:function(e,t){var r=this.actionHandler
if(r[e])throw new Error('There is already an actionName called "'.concat(e,'"'))
r[e]=t}},{key:"send",value:function(e,t,r){this._postMessage({sourceName:this.sourceName,targetName:this.targetName,action:e,data:t},r)}},{key:"sendWithPromise",value:function(e,t,r){var n=this.callbackId++,i=(0,a.createPromiseCapability)()
this.callbackCapabilities[n]=i
try{this._postMessage({sourceName:this.sourceName,targetName:this.targetName,action:e,callbackId:n,data:t},r)}catch(o){i.reject(o)}return i.promise}},{key:"sendWithStream",value:function(e,t,r,n){var i=this,o=this.streamId++,s=this.sourceName,u=this.targetName,c=this.comObj
return new ReadableStream({start:function(r){var c=(0,a.createPromiseCapability)()
return i.streamControllers[o]={controller:r,startCall:c,pullCall:null,cancelCall:null,isClosed:!1},i._postMessage({sourceName:s,targetName:u,action:e,streamId:o,data:t,desiredSize:r.desiredSize},n),c.promise},pull:function(e){var t=(0,a.createPromiseCapability)()
return i.streamControllers[o].pullCall=t,c.postMessage({sourceName:s,targetName:u,stream:y,streamId:o,desiredSize:e.desiredSize}),t.promise},cancel:function(e){(0,a.assert)(e instanceof Error,"cancel must have a valid reason")
var t=(0,a.createPromiseCapability)()
return i.streamControllers[o].cancelCall=t,i.streamControllers[o].isClosed=!0,c.postMessage({sourceName:s,targetName:u,stream:f,streamId:o,reason:b(e)}),t.promise}},r)}},{key:"_createStreamSink",value:function(e){var t=this,r=this.actionHandler[e.action],n=e.streamId,i=this.sourceName,o=e.sourceName,s=this.comObj,u={enqueue:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,s=arguments.length>2?arguments[2]:void 0
if(!this.isCancelled){var u=this.desiredSize
this.desiredSize-=r,u>0&&this.desiredSize<=0&&(this.sinkCapability=(0,a.createPromiseCapability)(),this.ready=this.sinkCapability.promise),t._postMessage({sourceName:i,targetName:o,stream:p,streamId:n,chunk:e},s)}},close:function(){this.isCancelled||(this.isCancelled=!0,s.postMessage({sourceName:i,targetName:o,stream:d,streamId:n}),delete t.streamSinks[n])},error:function(e){(0,a.assert)(e instanceof Error,"error must have a valid reason"),this.isCancelled||(this.isCancelled=!0,s.postMessage({sourceName:i,targetName:o,stream:v,streamId:n,reason:b(e)}))},sinkCapability:(0,a.createPromiseCapability)(),onPull:null,onCancel:null,isCancelled:!1,desiredSize:e.desiredSize,ready:null}
u.sinkCapability.resolve(),u.ready=u.sinkCapability.promise,this.streamSinks[n]=u,new Promise((function(t){t(r(e.data,u))})).then((function(){s.postMessage({sourceName:i,targetName:o,stream:m,streamId:n,success:!0})}),(function(e){s.postMessage({sourceName:i,targetName:o,stream:m,streamId:n,reason:b(e)})}))}},{key:"_processStreamMessage",value:function(e){var t=e.streamId,r=this.sourceName,n=e.sourceName,i=this.comObj
switch(e.stream){case m:e.success?this.streamControllers[t].startCall.resolve():this.streamControllers[t].startCall.reject(b(e.reason))
break
case g:e.success?this.streamControllers[t].pullCall.resolve():this.streamControllers[t].pullCall.reject(b(e.reason))
break
case y:if(!this.streamSinks[t]){i.postMessage({sourceName:r,targetName:n,stream:g,streamId:t,success:!0})
break}this.streamSinks[t].desiredSize<=0&&e.desiredSize>0&&this.streamSinks[t].sinkCapability.resolve(),this.streamSinks[t].desiredSize=e.desiredSize
var o=this.streamSinks[e.streamId].onPull
new Promise((function(e){e(o&&o())})).then((function(){i.postMessage({sourceName:r,targetName:n,stream:g,streamId:t,success:!0})}),(function(e){i.postMessage({sourceName:r,targetName:n,stream:g,streamId:t,reason:b(e)})}))
break
case p:if((0,a.assert)(this.streamControllers[t],"enqueue should have stream controller"),this.streamControllers[t].isClosed)break
this.streamControllers[t].controller.enqueue(e.chunk)
break
case d:if((0,a.assert)(this.streamControllers[t],"close should have stream controller"),this.streamControllers[t].isClosed)break
this.streamControllers[t].isClosed=!0,this.streamControllers[t].controller.close(),this._deleteStreamController(t)
break
case v:(0,a.assert)(this.streamControllers[t],"error should have stream controller"),this.streamControllers[t].controller.error(b(e.reason)),this._deleteStreamController(t)
break
case h:e.success?this.streamControllers[t].cancelCall.resolve():this.streamControllers[t].cancelCall.reject(b(e.reason)),this._deleteStreamController(t)
break
case f:if(!this.streamSinks[t])break
var s=this.streamSinks[e.streamId].onCancel
new Promise((function(t){t(s&&s(b(e.reason)))})).then((function(){i.postMessage({sourceName:r,targetName:n,stream:h,streamId:t,success:!0})}),(function(e){i.postMessage({sourceName:r,targetName:n,stream:h,streamId:t,reason:b(e)})})),this.streamSinks[t].sinkCapability.reject(b(e.reason)),this.streamSinks[t].isCancelled=!0,delete this.streamSinks[t]
break
default:throw new Error("Unexpected stream case")}}},{key:"_deleteStreamController",value:(u=i.default.mark((function e(t){return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.allSettled([this.streamControllers[t].startCall,this.streamControllers[t].pullCall,this.streamControllers[t].cancelCall].map((function(e){return e&&e.promise})))
case 2:delete this.streamControllers[t]
case 3:case"end":return e.stop()}}),e,this)})),_=function(){var e=this,t=arguments
return new Promise((function(r,n){var i=u.apply(e,t)
function a(e){o(i,r,n,a,s,"next",e)}function s(e){o(i,r,n,a,s,"throw",e)}a(void 0)}))},function(e){return _.apply(this,arguments)})},{key:"_postMessage",value:function(e,t){t&&this.postMessageTransfers?this.comObj.postMessage(e,t):this.comObj.postMessage(e)}},{key:"destroy",value:function(){this.comObj.removeEventListener("message",this._onComObjOnMessage)}}])&&s(t.prototype,r),n&&s(t,n),e}()
t.MessageHandler=_},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.Metadata=void 0
var n=r(5),i=r(212)
function a(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o=function(){function e(t){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),(0,n.assert)("string"==typeof t,"Metadata: input is not a string"),t=this._repair(t)
var r=(new i.SimpleXMLParser).parseFromString(t)
this._metadataMap=new Map,r&&this._parse(r)}var t,r,o
return t=e,(r=[{key:"_repair",value:function(e){return e.replace(/^[^<]+/,"").replace(/>\\376\\377([^<]+)/g,(function(e,t){for(var r=t.replace(/\\([0-3])([0-7])([0-7])/g,(function(e,t,r,n){return String.fromCharCode(64*t+8*r+1*n)})).replace(/&(amp|apos|gt|lt|quot);/g,(function(e,t){switch(t){case"amp":return"&"
case"apos":return"'"
case"gt":return">"
case"lt":return"<"
case"quot":return'"'}throw new Error("_repair: ".concat(t," isn't defined."))})),n="",i=0,a=r.length;i<a;i+=2){var o=256*r.charCodeAt(i)+r.charCodeAt(i+1)
n+=o>=32&&o<127&&60!==o&&62!==o&&38!==o?String.fromCharCode(o):"&#x"+(65536+o).toString(16).substring(1)+";"}return">"+n}))}},{key:"_parse",value:function(e){var t=e.documentElement
if("rdf:rdf"!==t.nodeName.toLowerCase())for(t=t.firstChild;t&&"rdf:rdf"!==t.nodeName.toLowerCase();)t=t.nextSibling
var r=t?t.nodeName.toLowerCase():null
if(t&&"rdf:rdf"===r&&t.hasChildNodes())for(var n=t.childNodes,i=0,a=n.length;i<a;i++){var o=n[i]
if("rdf:description"===o.nodeName.toLowerCase())for(var s=0,u=o.childNodes.length;s<u;s++)if("#text"!==o.childNodes[s].nodeName.toLowerCase()){var c=o.childNodes[s],l=c.nodeName.toLowerCase()
this._metadataMap.set(l,c.textContent.trim())}}}},{key:"get",value:function(e){return this._metadataMap.has(e)?this._metadataMap.get(e):null}},{key:"getAll",value:function(){return Object.fromEntries(this._metadataMap)}},{key:"has",value:function(e){return this._metadataMap.has(e)}}])&&a(t.prototype,r),o&&a(t,o),e}()
t.Metadata=o},function(e,t,r){"use strict"
function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return
var r=[],n=!0,i=!1,a=void 0
try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(u){i=!0,a=u}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}return r}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return a(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function o(e,t,r){return(o="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=l(e)););return e}(e,t)
if(n){var i=Object.getOwnPropertyDescriptor(n,t)
return i.get?i.get.call(r):i.value}})(e,t,r||e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=l(e)
if(t){var i=l(this).constructor
r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments)
return c(this,r)}}function c(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t,r){return t&&h(e.prototype,t),r&&h(e,r),e}Object.defineProperty(t,"__esModule",{value:!0}),t.SimpleXMLParser=void 0
var p=0,v=-2,y=-3,g=-4,m=-5,b=-6,_=-9
function A(e,t){var r=e[t]
return" "===r||"\n"===r||"\r"===r||"\t"===r}var S=function(){function e(){f(this,e)}return d(e,[{key:"_resolveEntities",value:function(e){var t=this
return e.replace(/&([^;]+);/g,(function(e,r){if("#x"===r.substring(0,2))return String.fromCharCode(parseInt(r.substring(2),16))
if("#"===r.substring(0,1))return String.fromCharCode(parseInt(r.substring(1),10))
switch(r){case"lt":return"<"
case"gt":return">"
case"amp":return"&"
case"quot":return'"'}return t.onResolveEntity(r)}))}},{key:"_parseContent",value:function(e,t){var r=[],n=t
function i(){for(;n<e.length&&A(e,n);)++n}for(;n<e.length&&!A(e,n)&&">"!==e[n]&&"/"!==e[n];)++n
var a=e.substring(t,n)
for(i();n<e.length&&">"!==e[n]&&"/"!==e[n]&&"?"!==e[n];){i()
for(var o,s="";n<e.length&&!A(e,n)&&"="!==e[n];)s+=e[n],++n
if(i(),"="!==e[n])return null;++n,i()
var u=e[n]
if('"'!==u&&"'"!==u)return null
var c=e.indexOf(u,++n)
if(c<0)return null
o=e.substring(n,c),r.push({name:s,value:this._resolveEntities(o)}),n=c+1,i()}return{name:a,attributes:r,parsed:n-t}}},{key:"_parseProcessingInstruction",value:function(e,t){var r=t
for(;r<e.length&&!A(e,r)&&">"!==e[r]&&"/"!==e[r];)++r
var n=e.substring(t,r);(function(){for(;r<e.length&&A(e,r);)++r})()
for(var i=r;r<e.length&&("?"!==e[r]||">"!==e[r+1]);)++r
return{name:n,value:e.substring(i,r),parsed:r-t}}},{key:"parseXml",value:function(e){for(var t=0;t<e.length;){var r=t
if("<"===e[t]){var n=void 0
switch(e[++r]){case"/":if(++r,(n=e.indexOf(">",r))<0)return void this.onError(_)
this.onEndElement(e.substring(r,n)),r=n+1
break
case"?":++r
var i=this._parseProcessingInstruction(e,r)
if("?>"!==e.substring(r+i.parsed,r+i.parsed+2))return void this.onError(y)
this.onPi(i.name,i.value),r+=i.parsed+2
break
case"!":if("--"===e.substring(r+1,r+3)){if((n=e.indexOf("--\x3e",r+3))<0)return void this.onError(m)
this.onComment(e.substring(r+3,n)),r=n+3}else if("[CDATA["===e.substring(r+1,r+8)){if((n=e.indexOf("]]>",r+8))<0)return void this.onError(v)
this.onCdata(e.substring(r+8,n)),r=n+3}else{if("DOCTYPE"!==e.substring(r+1,r+8))return void this.onError(b)
var a=e.indexOf("[",r+8),o=!1
if((n=e.indexOf(">",r+8))<0)return void this.onError(g)
if(a>0&&n>a){if((n=e.indexOf("]>",r+8))<0)return void this.onError(g)
o=!0}var s=e.substring(r+8,n+(o?1:0))
this.onDoctype(s),r=n+(o?2:1)}break
default:var u=this._parseContent(e,r)
if(null===u)return void this.onError(b)
var c=!1
if("/>"===e.substring(r+u.parsed,r+u.parsed+2))c=!0
else if(">"!==e.substring(r+u.parsed,r+u.parsed+1))return void this.onError(_)
this.onBeginElement(u.name,u.attributes,c),r+=u.parsed+(c?2:1)}}else{for(;r<e.length&&"<"!==e[r];)r++
var l=e.substring(t,r)
this.onText(this._resolveEntities(l))}t=r}}},{key:"onResolveEntity",value:function(e){return"&".concat(e,";")}},{key:"onPi",value:function(e,t){}},{key:"onComment",value:function(e){}},{key:"onCdata",value:function(e){}},{key:"onDoctype",value:function(e){}},{key:"onText",value:function(e){}},{key:"onBeginElement",value:function(e,t,r){}},{key:"onEndElement",value:function(e){}},{key:"onError",value:function(e){}}]),e}(),w=function(){function e(t,r){f(this,e),this.nodeName=t,this.nodeValue=r,Object.defineProperty(this,"parentNode",{value:null,writable:!0})}return d(e,[{key:"hasChildNodes",value:function(){return this.childNodes&&this.childNodes.length>0}},{key:"firstChild",get:function(){return this.childNodes&&this.childNodes[0]}},{key:"nextSibling",get:function(){var e=this.parentNode.childNodes
if(e){var t=e.indexOf(this)
if(-1!==t)return e[t+1]}}},{key:"textContent",get:function(){return this.childNodes?this.childNodes.map((function(e){return e.textContent})).join(""):this.nodeValue||""}}]),e}(),k=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)})(r,e)
var t=u(r)
function r(){var e
return f(this,r),(e=t.call(this))._currentFragment=null,e._stack=null,e._errorCode=p,e}return d(r,[{key:"parseFromString",value:function(e){if(this._currentFragment=[],this._stack=[],this._errorCode=p,this.parseXml(e),this._errorCode===p){var t=i(this._currentFragment,1)[0]
if(t)return{documentElement:t}}}},{key:"onResolveEntity",value:function(e){switch(e){case"apos":return"'"}return o(l(r.prototype),"onResolveEntity",this).call(this,e)}},{key:"onText",value:function(e){if(!function(e){for(var t=0,r=e.length;t<r;t++)if(!A(e,t))return!1
return!0}(e)){var t=new w("#text",e)
this._currentFragment.push(t)}}},{key:"onCdata",value:function(e){var t=new w("#text",e)
this._currentFragment.push(t)}},{key:"onBeginElement",value:function(e,t,r){var n=new w(e)
n.childNodes=[],this._currentFragment.push(n),r||(this._stack.push(this._currentFragment),this._currentFragment=n.childNodes)}},{key:"onEndElement",value:function(e){this._currentFragment=this._stack.pop()||[]
var t=this._currentFragment[this._currentFragment.length-1]
if(t)for(var r=0,n=t.childNodes.length;r<n;r++)t.childNodes[r].parentNode=t}},{key:"onError",value:function(e){this._errorCode=e}}]),r}(S)
t.SimpleXMLParser=k},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.OptionalContentConfig=void 0
var n=r(5)
function i(e,t){var r
if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return
if("string"==typeof e)return a(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r)
var n=0,i=function(){}
return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,u=!1
return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next()
return s=e.done,e},e:function(e){u=!0,o=e},f:function(){try{s||null==r.return||r.return()}finally{if(u)throw o}}}}function a(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var u=function e(t,r){s(this,e),this.visible=!0,this.name=t,this.intent=r},c=function(){function e(t){if(s(this,e),this.name=null,this.creator=null,this._order=null,this._groups=new Map,null!==t){this.name=t.name,this.creator=t.creator,this._order=t.order
var r,n=i(t.groups)
try{for(n.s();!(r=n.n()).done;){var a=r.value
this._groups.set(a.id,new u(a.name,a.intent))}}catch(y){n.e(y)}finally{n.f()}if("OFF"===t.baseState){var o,c=i(this._groups)
try{for(c.s();!(o=c.n()).done;){o.value.visible=!1}}catch(y){c.e(y)}finally{c.f()}}var l,f=i(t.on)
try{for(f.s();!(l=f.n()).done;){var h=l.value
this._groups.get(h).visible=!0}}catch(y){f.e(y)}finally{f.f()}var d,p=i(t.off)
try{for(p.s();!(d=p.n()).done;){var v=d.value
this._groups.get(v).visible=!1}}catch(y){p.e(y)}finally{p.f()}}}var t,r,a
return t=e,(r=[{key:"isVisible",value:function(e){if("OCG"===e.type)return this._groups.has(e.id)?this._groups.get(e.id).visible:((0,n.warn)("Optional content group not found: ".concat(e.id)),!0)
if("OCMD"===e.type){if(e.expression&&(0,n.warn)("Visibility expression not supported yet."),!e.policy||"AnyOn"===e.policy){var t,r=i(e.ids)
try{for(r.s();!(t=r.n()).done;){var a=t.value
if(!this._groups.has(a))return(0,n.warn)("Optional content group not found: ".concat(a)),!0
if(this._groups.get(a).visible)return!0}}catch(v){r.e(v)}finally{r.f()}return!1}if("AllOn"===e.policy){var o,s=i(e.ids)
try{for(s.s();!(o=s.n()).done;){var u=o.value
if(!this._groups.has(u))return(0,n.warn)("Optional content group not found: ".concat(u)),!0
if(!this._groups.get(u).visible)return!1}}catch(v){s.e(v)}finally{s.f()}return!0}if("AnyOff"===e.policy){var c,l=i(e.ids)
try{for(l.s();!(c=l.n()).done;){var f=c.value
if(!this._groups.has(f))return(0,n.warn)("Optional content group not found: ".concat(f)),!0
if(!this._groups.get(f).visible)return!0}}catch(v){l.e(v)}finally{l.f()}return!1}if("AllOff"===e.policy){var h,d=i(e.ids)
try{for(d.s();!(h=d.n()).done;){var p=h.value
if(!this._groups.has(p))return(0,n.warn)("Optional content group not found: ".concat(p)),!0
if(this._groups.get(p).visible)return!1}}catch(v){d.e(v)}finally{d.f()}return!0}return(0,n.warn)("Unknown optional content policy ".concat(e.policy,".")),!0}return(0,n.warn)("Unknown group type ".concat(e.type,".")),!0}},{key:"setVisibility",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
this._groups.has(e)?this._groups.get(e).visible=!!t:(0,n.warn)("Optional content group not found: ".concat(e))}},{key:"getOrder",value:function(){return this._groups.size?this._order?this._order.slice():Array.from(this._groups.keys()):null}},{key:"getGroups",value:function(){return this._groups.size?Object.fromEntries(this._groups):null}},{key:"getGroup",value:function(e){return this._groups.get(e)||null}}])&&o(t.prototype,r),a&&o(t,a),e}()
t.OptionalContentConfig=c},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.PDFDataTransportStream=void 0
var n,i=(n=r(2))&&n.__esModule?n:{default:n},a=r(5)
function o(e,t,r,n,i,a,o){try{var s=e[a](o),u=s.value}catch(c){return void r(c)}s.done?t(u):Promise.resolve(u).then(n,i)}function s(e){return function(){var t=this,r=arguments
return new Promise((function(n,i){var a=e.apply(t,r)
function s(e){o(a,n,i,s,u,"next",e)}function u(e){o(a,n,i,s,u,"throw",e)}s(void 0)}))}}function u(e,t){var r
if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return
if("string"==typeof e)return c(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r)
var n=0,i=function(){}
return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,s=!1
return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next()
return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||null==r.return||r.return()}finally{if(s)throw a}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,t,r){return t&&f(e.prototype,t),r&&f(e,r),e}var d=function(){function e(t,r){var n=this
l(this,e),(0,a.assert)(r,'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.'),this._queuedChunks=[],this._progressiveDone=t.progressiveDone||!1
var i=t.initialData
if(i&&i.length>0){var o=new Uint8Array(i).buffer
this._queuedChunks.push(o)}this._pdfDataRangeTransport=r,this._isStreamingSupported=!t.disableStream,this._isRangeSupported=!t.disableRange,this._contentLength=t.length,this._fullRequestReader=null,this._rangeReaders=[],this._pdfDataRangeTransport.addRangeListener((function(e,t){n._onReceiveData({begin:e,chunk:t})})),this._pdfDataRangeTransport.addProgressListener((function(e,t){n._onProgress({loaded:e,total:t})})),this._pdfDataRangeTransport.addProgressiveReadListener((function(e){n._onReceiveData({chunk:e})})),this._pdfDataRangeTransport.addProgressiveDoneListener((function(){n._onProgressiveDone()})),this._pdfDataRangeTransport.transportReady()}return h(e,[{key:"_onReceiveData",value:function(e){var t=new Uint8Array(e.chunk).buffer
if(void 0===e.begin)this._fullRequestReader?this._fullRequestReader._enqueue(t):this._queuedChunks.push(t)
else{var r=this._rangeReaders.some((function(r){return r._begin===e.begin&&(r._enqueue(t),!0)}));(0,a.assert)(r,"_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.")}}},{key:"_onProgress",value:function(e){if(void 0===e.total){var t=this._rangeReaders[0]
t&&t.onProgress&&t.onProgress({loaded:e.loaded})}else{var r=this._fullRequestReader
r&&r.onProgress&&r.onProgress({loaded:e.loaded,total:e.total})}}},{key:"_onProgressiveDone",value:function(){this._fullRequestReader&&this._fullRequestReader.progressiveDone(),this._progressiveDone=!0}},{key:"_removeRangeReader",value:function(e){var t=this._rangeReaders.indexOf(e)
t>=0&&this._rangeReaders.splice(t,1)}},{key:"getFullReader",value:function(){(0,a.assert)(!this._fullRequestReader,"PDFDataTransportStream.getFullReader can only be called once.")
var e=this._queuedChunks
return this._queuedChunks=null,new p(this,e,this._progressiveDone)}},{key:"getRangeReader",value:function(e,t){if(t<=this._progressiveDataLength)return null
var r=new v(this,e,t)
return this._pdfDataRangeTransport.requestDataRange(e,t),this._rangeReaders.push(r),r}},{key:"cancelAllRequests",value:function(e){this._fullRequestReader&&this._fullRequestReader.cancel(e),this._rangeReaders.slice(0).forEach((function(t){t.cancel(e)})),this._pdfDataRangeTransport.abort()}},{key:"_progressiveDataLength",get:function(){return this._fullRequestReader?this._fullRequestReader._loaded:0}}]),e}()
t.PDFDataTransportStream=d
var p=function(){function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2]
l(this,e),this._stream=t,this._done=n||!1,this._filename=null,this._queuedChunks=r||[],this._loaded=0
var i,a=u(this._queuedChunks)
try{for(a.s();!(i=a.n()).done;){var o=i.value
this._loaded+=o.byteLength}}catch(s){a.e(s)}finally{a.f()}this._requests=[],this._headersReady=Promise.resolve(),t._fullRequestReader=this,this.onProgress=null}var t
return h(e,[{key:"_enqueue",value:function(e){if(!this._done){if(this._requests.length>0)this._requests.shift().resolve({value:e,done:!1})
else this._queuedChunks.push(e)
this._loaded+=e.byteLength}}},{key:"read",value:(t=s(i.default.mark((function e(){var t,r
return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(this._queuedChunks.length>0)){e.next=3
break}return t=this._queuedChunks.shift(),e.abrupt("return",{value:t,done:!1})
case 3:if(!this._done){e.next=5
break}return e.abrupt("return",{value:void 0,done:!0})
case 5:return r=(0,a.createPromiseCapability)(),this._requests.push(r),e.abrupt("return",r.promise)
case 8:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"cancel",value:function(e){this._done=!0,this._requests.forEach((function(e){e.resolve({value:void 0,done:!0})})),this._requests=[]}},{key:"progressiveDone",value:function(){this._done||(this._done=!0)}},{key:"headersReady",get:function(){return this._headersReady}},{key:"filename",get:function(){return this._filename}},{key:"isRangeSupported",get:function(){return this._stream._isRangeSupported}},{key:"isStreamingSupported",get:function(){return this._stream._isStreamingSupported}},{key:"contentLength",get:function(){return this._stream._contentLength}}]),e}(),v=function(){function e(t,r,n){l(this,e),this._stream=t,this._begin=r,this._end=n,this._queuedChunk=null,this._requests=[],this._done=!1,this.onProgress=null}var t
return h(e,[{key:"_enqueue",value:function(e){if(!this._done){if(0===this._requests.length)this._queuedChunk=e
else this._requests.shift().resolve({value:e,done:!1}),this._requests.forEach((function(e){e.resolve({value:void 0,done:!0})})),this._requests=[]
this._done=!0,this._stream._removeRangeReader(this)}}},{key:"read",value:(t=s(i.default.mark((function e(){var t,r
return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._queuedChunk){e.next=4
break}return t=this._queuedChunk,this._queuedChunk=null,e.abrupt("return",{value:t,done:!1})
case 4:if(!this._done){e.next=6
break}return e.abrupt("return",{value:void 0,done:!0})
case 6:return r=(0,a.createPromiseCapability)(),this._requests.push(r),e.abrupt("return",r.promise)
case 9:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"cancel",value:function(e){this._done=!0,this._requests.forEach((function(e){e.resolve({value:void 0,done:!0})})),this._requests=[],this._stream._removeRangeReader(this)}},{key:"isStreamingSupported",get:function(){return!1}}]),e}()},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.WebGLContext=void 0
var n=r(5)
function i(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var a=function(){function e(t){var r=t.enable,n=void 0!==r&&r;(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this._enabled=!0===n}var t,r,a
return t=e,(r=[{key:"composeSMask",value:function(e){var t=e.layer,r=e.mask,n=e.properties
return o.composeSMask(t,r,n)}},{key:"drawFigures",value:function(e){var t=e.width,r=e.height,n=e.backgroundColor,i=e.figures,a=e.context
return o.drawFigures(t,r,n,i,a)}},{key:"clear",value:function(){o.cleanup()}},{key:"isEnabled",get:function(){var e=this._enabled
return e&&(e=o.tryInitGL()),(0,n.shadow)(this,"isEnabled",e)}}])&&i(t.prototype,r),a&&i(t,a),e}()
t.WebGLContext=a
var o=function(){function e(e,t,r){var n=e.createShader(r)
if(e.shaderSource(n,t),e.compileShader(n),!e.getShaderParameter(n,e.COMPILE_STATUS)){var i=e.getShaderInfoLog(n)
throw new Error("Error during shader compilation: "+i)}return n}function t(t,r){return e(t,r,t.VERTEX_SHADER)}function r(t,r){return e(t,r,t.FRAGMENT_SHADER)}function n(e,t){for(var r=e.createProgram(),n=0,i=t.length;n<i;++n)e.attachShader(r,t[n])
if(e.linkProgram(r),!e.getProgramParameter(r,e.LINK_STATUS)){var a=e.getProgramInfoLog(r)
throw new Error("Error during program linking: "+a)}return r}function i(e,t,r){e.activeTexture(r)
var n=e.createTexture()
return e.bindTexture(e.TEXTURE_2D,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,t),n}var a,o
function s(){a||(o=document.createElement("canvas"),a=o.getContext("webgl",{premultipliedalpha:!1}))}var u=null
var c=null
return{tryInitGL:function(){try{return s(),!!a}catch(e){}return!1},composeSMask:function(e,c,l){var f=e.width,h=e.height
u||function(){var e,i
s(),e=o,o=null,i=a,a=null
var c=n(i,[t(i,"  attribute vec2 a_position;                                      attribute vec2 a_texCoord;                                                                                                      uniform vec2 u_resolution;                                                                                                      varying vec2 v_texCoord;                                                                                                        void main() {                                                     vec2 clipSpace = (a_position / u_resolution) * 2.0 - 1.0;       gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);                                                                              v_texCoord = a_texCoord;                                      }                                                             "),r(i,"  precision mediump float;                                                                                                        uniform vec4 u_backdrop;                                        uniform int u_subtype;                                          uniform sampler2D u_image;                                      uniform sampler2D u_mask;                                                                                                       varying vec2 v_texCoord;                                                                                                        void main() {                                                     vec4 imageColor = texture2D(u_image, v_texCoord);               vec4 maskColor = texture2D(u_mask, v_texCoord);                 if (u_backdrop.a > 0.0) {                                         maskColor.rgb = maskColor.rgb * maskColor.a +                                   u_backdrop.rgb * (1.0 - maskColor.a);         }                                                               float lum;                                                      if (u_subtype == 0) {                                             lum = maskColor.a;                                            } else {                                                          lum = maskColor.r * 0.3 + maskColor.g * 0.59 +                        maskColor.b * 0.11;                                     }                                                               imageColor.a *= lum;                                            imageColor.rgb *= imageColor.a;                                 gl_FragColor = imageColor;                                    }                                                             ")])
i.useProgram(c)
var l={}
l.gl=i,l.canvas=e,l.resolutionLocation=i.getUniformLocation(c,"u_resolution"),l.positionLocation=i.getAttribLocation(c,"a_position"),l.backdropLocation=i.getUniformLocation(c,"u_backdrop"),l.subtypeLocation=i.getUniformLocation(c,"u_subtype")
var f=i.getAttribLocation(c,"a_texCoord"),h=i.getUniformLocation(c,"u_image"),d=i.getUniformLocation(c,"u_mask"),p=i.createBuffer()
i.bindBuffer(i.ARRAY_BUFFER,p),i.bufferData(i.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,0,1,1,0,1,1]),i.STATIC_DRAW),i.enableVertexAttribArray(f),i.vertexAttribPointer(f,2,i.FLOAT,!1,0,0),i.uniform1i(h,0),i.uniform1i(d,1),u=l}()
var d=u,p=d.canvas,v=d.gl
p.width=f,p.height=h,v.viewport(0,0,v.drawingBufferWidth,v.drawingBufferHeight),v.uniform2f(d.resolutionLocation,f,h),l.backdrop?v.uniform4f(d.resolutionLocation,l.backdrop[0],l.backdrop[1],l.backdrop[2],1):v.uniform4f(d.resolutionLocation,0,0,0,0),v.uniform1i(d.subtypeLocation,"Luminosity"===l.subtype?1:0)
var y=i(v,e,v.TEXTURE0),g=i(v,c,v.TEXTURE1),m=v.createBuffer()
return v.bindBuffer(v.ARRAY_BUFFER,m),v.bufferData(v.ARRAY_BUFFER,new Float32Array([0,0,f,0,0,h,0,h,f,0,f,h]),v.STATIC_DRAW),v.enableVertexAttribArray(d.positionLocation),v.vertexAttribPointer(d.positionLocation,2,v.FLOAT,!1,0,0),v.clearColor(0,0,0,0),v.enable(v.BLEND),v.blendFunc(v.ONE,v.ONE_MINUS_SRC_ALPHA),v.clear(v.COLOR_BUFFER_BIT),v.drawArrays(v.TRIANGLES,0,6),v.flush(),v.deleteTexture(y),v.deleteTexture(g),v.deleteBuffer(m),p},drawFigures:function(e,i,u,l,f){c||function(){var e,i
s(),e=o,o=null,i=a,a=null
var u=n(i,[t(i,"  attribute vec2 a_position;                                      attribute vec3 a_color;                                                                                                         uniform vec2 u_resolution;                                      uniform vec2 u_scale;                                           uniform vec2 u_offset;                                                                                                          varying vec4 v_color;                                                                                                           void main() {                                                     vec2 position = (a_position + u_offset) * u_scale;              vec2 clipSpace = (position / u_resolution) * 2.0 - 1.0;         gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);                                                                              v_color = vec4(a_color / 255.0, 1.0);                         }                                                             "),r(i,"  precision mediump float;                                                                                                        varying vec4 v_color;                                                                                                           void main() {                                                     gl_FragColor = v_color;                                       }                                                             ")])
i.useProgram(u)
var l={}
l.gl=i,l.canvas=e,l.resolutionLocation=i.getUniformLocation(u,"u_resolution"),l.scaleLocation=i.getUniformLocation(u,"u_scale"),l.offsetLocation=i.getUniformLocation(u,"u_offset"),l.positionLocation=i.getAttribLocation(u,"a_position"),l.colorLocation=i.getAttribLocation(u,"a_color"),c=l}()
var h=c,d=h.canvas,p=h.gl
d.width=e,d.height=i,p.viewport(0,0,p.drawingBufferWidth,p.drawingBufferHeight),p.uniform2f(h.resolutionLocation,e,i)
var v,y,g,m=0
for(v=0,y=l.length;v<y;v++)switch(l[v].type){case"lattice":m+=((g=l[v].coords.length/l[v].verticesPerRow|0)-1)*(l[v].verticesPerRow-1)*6
break
case"triangles":m+=l[v].coords.length}var b=new Float32Array(2*m),_=new Uint8Array(3*m),A=f.coords,S=f.colors,w=0,k=0
for(v=0,y=l.length;v<y;v++){var x=l[v],C=x.coords,R=x.colors
switch(x.type){case"lattice":var P=x.verticesPerRow
g=C.length/P|0
for(var T=1;T<g;T++)for(var E=T*P+1,O=1;O<P;O++,E++){b[w]=A[C[E-P-1]],b[w+1]=A[C[E-P-1]+1],b[w+2]=A[C[E-P]],b[w+3]=A[C[E-P]+1],b[w+4]=A[C[E-1]],b[w+5]=A[C[E-1]+1],_[k]=S[R[E-P-1]],_[k+1]=S[R[E-P-1]+1],_[k+2]=S[R[E-P-1]+2],_[k+3]=S[R[E-P]],_[k+4]=S[R[E-P]+1],_[k+5]=S[R[E-P]+2],_[k+6]=S[R[E-1]],_[k+7]=S[R[E-1]+1],_[k+8]=S[R[E-1]+2],b[w+6]=b[w+2],b[w+7]=b[w+3],b[w+8]=b[w+4],b[w+9]=b[w+5],b[w+10]=A[C[E]],b[w+11]=A[C[E]+1],_[k+9]=_[k+3],_[k+10]=_[k+4],_[k+11]=_[k+5],_[k+12]=_[k+6],_[k+13]=_[k+7],_[k+14]=_[k+8],_[k+15]=S[R[E]],_[k+16]=S[R[E]+1],_[k+17]=S[R[E]+2]
w+=12,k+=18}break
case"triangles":for(var F=0,L=C.length;F<L;F++)b[w]=A[C[F]],b[w+1]=A[C[F]+1],_[k]=S[R[F]],_[k+1]=S[R[F]+1],_[k+2]=S[R[F]+2],w+=2,k+=3}}u?p.clearColor(u[0]/255,u[1]/255,u[2]/255,1):p.clearColor(0,0,0,0),p.clear(p.COLOR_BUFFER_BIT)
var I=p.createBuffer()
p.bindBuffer(p.ARRAY_BUFFER,I),p.bufferData(p.ARRAY_BUFFER,b,p.STATIC_DRAW),p.enableVertexAttribArray(h.positionLocation),p.vertexAttribPointer(h.positionLocation,2,p.FLOAT,!1,0,0)
var M=p.createBuffer()
return p.bindBuffer(p.ARRAY_BUFFER,M),p.bufferData(p.ARRAY_BUFFER,_,p.STATIC_DRAW),p.enableVertexAttribArray(h.colorLocation),p.vertexAttribPointer(h.colorLocation,3,p.UNSIGNED_BYTE,!1,0,0),p.uniform2f(h.scaleLocation,f.scaleX,f.scaleY),p.uniform2f(h.offsetLocation,f.offsetX,f.offsetY),p.drawArrays(p.TRIANGLES,0,m),p.flush(),p.deleteBuffer(I),p.deleteBuffer(M),d},cleanup:function(){u&&u.canvas&&(u.canvas.width=0,u.canvas.height=0),c&&c.canvas&&(c.canvas.width=0,c.canvas.height=0),u=null,c=null}}}()},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.AnnotationLayer=void 0
var n=r(1),i=r(5),a=r(205)
function o(e,t,r){return(o="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=v(e)););return e}(e,t)
if(n){var i=Object.getOwnPropertyDescriptor(n,t)
return i.get?i.get.call(r):i.value}})(e,t,r||e)}function s(e,t){var r
if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return
if("string"==typeof e)return u(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r)
var n=0,i=function(){}
return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,s=!1
return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next()
return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||null==r.return||r.return()}finally{if(s)throw a}}}}function u(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=v(e)
if(t){var i=v(this).constructor
r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments)
return d(this,r)}}function d(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?p(e):t}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t,r){return t&&g(e.prototype,t),r&&g(e,r),e}var b=function(){function e(){y(this,e)}return m(e,null,[{key:"create",value:function(e){switch(e.data.annotationType){case i.AnnotationType.LINK:return new A(e)
case i.AnnotationType.TEXT:return new S(e)
case i.AnnotationType.WIDGET:switch(e.data.fieldType){case"Tx":return new k(e)
case"Btn":return e.data.radioButton?new C(e):e.data.checkBox?new x(e):new R(e)
case"Ch":return new P(e)}return new w(e)
case i.AnnotationType.POPUP:return new T(e)
case i.AnnotationType.FREETEXT:return new O(e)
case i.AnnotationType.LINE:return new F(e)
case i.AnnotationType.SQUARE:return new L(e)
case i.AnnotationType.CIRCLE:return new I(e)
case i.AnnotationType.POLYLINE:return new M(e)
case i.AnnotationType.CARET:return new D(e)
case i.AnnotationType.INK:return new N(e)
case i.AnnotationType.POLYGON:return new j(e)
case i.AnnotationType.HIGHLIGHT:return new q(e)
case i.AnnotationType.UNDERLINE:return new U(e)
case i.AnnotationType.SQUIGGLY:return new W(e)
case i.AnnotationType.STRIKEOUT:return new B(e)
case i.AnnotationType.STAMP:return new G(e)
case i.AnnotationType.FILEATTACHMENT:return new z(e)
default:return new _(e)}}}]),e}(),_=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2]
y(this,e),this.isRenderable=r,this.data=t.data,this.layer=t.layer,this.page=t.page,this.viewport=t.viewport,this.linkService=t.linkService,this.downloadManager=t.downloadManager,this.imageResourcesPath=t.imageResourcesPath,this.renderInteractiveForms=t.renderInteractiveForms,this.svgFactory=t.svgFactory,this.annotationStorage=t.annotationStorage,r&&(this.container=this._createContainer(n))}return m(e,[{key:"_createContainer",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this.data,r=this.page,n=this.viewport,a=document.createElement("section"),o=t.rect[2]-t.rect[0],s=t.rect[3]-t.rect[1]
a.setAttribute("data-annotation-id",t.id)
var u=i.Util.normalizeRect([t.rect[0],r.view[3]-t.rect[1]+r.view[1],t.rect[2],r.view[3]-t.rect[3]+r.view[1]])
if(a.style.transform="matrix(".concat(n.transform.join(","),")"),a.style.transformOrigin="-".concat(u[0],"px -").concat(u[1],"px"),!e&&t.borderStyle.width>0){a.style.borderWidth="".concat(t.borderStyle.width,"px"),t.borderStyle.style!==i.AnnotationBorderStyleType.UNDERLINE&&(o-=2*t.borderStyle.width,s-=2*t.borderStyle.width)
var c=t.borderStyle.horizontalCornerRadius,l=t.borderStyle.verticalCornerRadius
if(c>0||l>0){var f="".concat(c,"px / ").concat(l,"px")
a.style.borderRadius=f}switch(t.borderStyle.style){case i.AnnotationBorderStyleType.SOLID:a.style.borderStyle="solid"
break
case i.AnnotationBorderStyleType.DASHED:a.style.borderStyle="dashed"
break
case i.AnnotationBorderStyleType.BEVELED:(0,i.warn)("Unimplemented border style: beveled")
break
case i.AnnotationBorderStyleType.INSET:(0,i.warn)("Unimplemented border style: inset")
break
case i.AnnotationBorderStyleType.UNDERLINE:a.style.borderBottomStyle="solid"}t.color?a.style.borderColor=i.Util.makeCssRgb(0|t.color[0],0|t.color[1],0|t.color[2]):a.style.borderWidth=0}return a.style.left="".concat(u[0],"px"),a.style.top="".concat(u[1],"px"),a.style.width="".concat(o,"px"),a.style.height="".concat(s,"px"),a}},{key:"_createPopup",value:function(e,t,r){t||((t=document.createElement("div")).style.height=e.style.height,t.style.width=e.style.width,e.appendChild(t))
var n=new E({container:e,trigger:t,color:r.color,title:r.title,modificationDate:r.modificationDate,contents:r.contents,hideWrapper:!0}).render()
n.style.left=e.style.width,e.appendChild(n)}},{key:"render",value:function(){(0,i.unreachable)("Abstract method `AnnotationElement.render` called")}}]),e}(),A=function(e){l(r,e)
var t=h(r)
function r(e){y(this,r)
var n=!!(e.data.url||e.data.dest||e.data.action)
return t.call(this,e,n)}return m(r,[{key:"render",value:function(){this.container.className="linkAnnotation"
var e=this.data,t=this.linkService,r=document.createElement("a")
return e.url?(0,n.addLinkAttributes)(r,{url:e.url,target:e.newWindow?n.LinkTarget.BLANK:t.externalLinkTarget,rel:t.externalLinkRel,enabled:t.externalLinkEnabled}):e.action?this._bindNamedAction(r,e.action):this._bindLink(r,e.dest),this.container.appendChild(r),this.container}},{key:"_bindLink",value:function(e,t){var r=this
e.href=this.linkService.getDestinationHash(t),e.onclick=function(){return t&&r.linkService.navigateTo(t),!1},t&&(e.className="internalLink")}},{key:"_bindNamedAction",value:function(e,t){var r=this
e.href=this.linkService.getAnchorUrl(""),e.onclick=function(){return r.linkService.executeNamedAction(t),!1},e.className="internalLink"}}]),r}(_),S=function(e){l(r,e)
var t=h(r)
function r(e){y(this,r)
var n=!!(e.data.hasPopup||e.data.title||e.data.contents)
return t.call(this,e,n)}return m(r,[{key:"render",value:function(){this.container.className="textAnnotation"
var e=document.createElement("img")
return e.style.height=this.container.style.height,e.style.width=this.container.style.width,e.src=this.imageResourcesPath+"annotation-"+this.data.name.toLowerCase()+".svg",e.alt="[{{type}} Annotation]",e.dataset.l10nId="text_annotation_type",e.dataset.l10nArgs=JSON.stringify({type:this.data.name}),this.data.hasPopup||this._createPopup(this.container,e,this.data),this.container.appendChild(e),this.container}}]),r}(_),w=function(e){l(r,e)
var t=h(r)
function r(){return y(this,r),t.apply(this,arguments)}return m(r,[{key:"render",value:function(){return this.container}}]),r}(_),k=function(e){l(r,e)
var t=h(r)
function r(e){y(this,r)
var n=e.renderInteractiveForms||!e.data.hasAppearance&&!!e.data.fieldValue
return t.call(this,e,n)}return m(r,[{key:"render",value:function(){var e=this.annotationStorage,t=this.data.id
this.container.className="textWidgetAnnotation"
var r=null
if(this.renderInteractiveForms){var n=e.getOrCreateValue(t,this.data.fieldValue)
if(this.data.multiLine?(r=document.createElement("textarea")).textContent=n:((r=document.createElement("input")).type="text",r.setAttribute("value",n)),r.addEventListener("input",(function(r){e.setValue(t,r.target.value)})),r.disabled=this.data.readOnly,r.name=this.data.fieldName,null!==this.data.maxLen&&(r.maxLength=this.data.maxLen),this.data.comb){var i=(this.data.rect[2]-this.data.rect[0])/this.data.maxLen
r.classList.add("comb"),r.style.letterSpacing="calc(".concat(i,"px - 1ch)")}}else{(r=document.createElement("div")).textContent=this.data.fieldValue,r.style.verticalAlign="middle",r.style.display="table-cell"
var a=null
this.data.fontRefName&&this.page.commonObjs.has(this.data.fontRefName)&&(a=this.page.commonObjs.get(this.data.fontRefName)),this._setTextStyle(r,a)}return null!==this.data.textAlignment&&(r.style.textAlign=["left","center","right"][this.data.textAlignment]),this.container.appendChild(r),this.container}},{key:"_setTextStyle",value:function(e,t){var r=e.style
if(r.fontSize="".concat(this.data.fontSize,"px"),r.direction=this.data.fontDirection<0?"rtl":"ltr",t){var n="normal"
t.black?n="900":t.bold&&(n="bold"),r.fontWeight=n,r.fontStyle=t.italic?"italic":"normal"
var i=t.loadedName?'"'.concat(t.loadedName,'", '):"",a=t.fallbackName||"Helvetica, sans-serif"
r.fontFamily=i+a}}}]),r}(w),x=function(e){l(r,e)
var t=h(r)
function r(e){return y(this,r),t.call(this,e,e.renderInteractiveForms)}return m(r,[{key:"render",value:function(){var e=this.annotationStorage,t=this.data,r=t.id,n=e.getOrCreateValue(r,t.fieldValue&&"Off"!==t.fieldValue)
this.container.className="buttonWidgetAnnotation checkBox"
var i=document.createElement("input")
return i.disabled=t.readOnly,i.type="checkbox",i.name=this.data.fieldName,n&&i.setAttribute("checked",!0),i.addEventListener("change",(function(t){e.setValue(r,t.target.checked)})),this.container.appendChild(i),this.container}}]),r}(w),C=function(e){l(r,e)
var t=h(r)
function r(e){return y(this,r),t.call(this,e,e.renderInteractiveForms)}return m(r,[{key:"render",value:function(){this.container.className="buttonWidgetAnnotation radioButton"
var e=this.annotationStorage,t=this.data,r=t.id,n=e.getOrCreateValue(r,t.fieldValue===t.buttonValue),i=document.createElement("input")
return i.disabled=t.readOnly,i.type="radio",i.name=t.fieldName,n&&i.setAttribute("checked",!0),i.addEventListener("change",(function(t){var n,i=t.target.name,a=s(document.getElementsByName(i))
try{for(a.s();!(n=a.n()).done;){var o=n.value
o!==t.target&&e.setValue(o.parentNode.getAttribute("data-annotation-id"),!1)}}catch(u){a.e(u)}finally{a.f()}e.setValue(r,t.target.checked)})),this.container.appendChild(i),this.container}}]),r}(w),R=function(e){l(r,e)
var t=h(r)
function r(){return y(this,r),t.apply(this,arguments)}return m(r,[{key:"render",value:function(){var e=o(v(r.prototype),"render",this).call(this)
return e.className="buttonWidgetAnnotation pushButton",e}}]),r}(A),P=function(e){l(r,e)
var t=h(r)
function r(e){return y(this,r),t.call(this,e,e.renderInteractiveForms)}return m(r,[{key:"render",value:function(){this.container.className="choiceWidgetAnnotation"
var e=this.annotationStorage,t=this.data.id
e.getOrCreateValue(t,this.data.fieldValue.length>0?this.data.fieldValue[0]:null)
var r=document.createElement("select")
r.disabled=this.data.readOnly,r.name=this.data.fieldName,this.data.combo||(r.size=this.data.options.length,this.data.multiSelect&&(r.multiple=!0))
var n,i=s(this.data.options)
try{for(i.s();!(n=i.n()).done;){var a=n.value,o=document.createElement("option")
o.textContent=a.displayValue,o.value=a.exportValue,this.data.fieldValue.includes(a.exportValue)&&o.setAttribute("selected",!0),r.appendChild(o)}}catch(u){i.e(u)}finally{i.f()}return r.addEventListener("input",(function(r){var n=r.target.options,i=n[n.selectedIndex].value
e.setValue(t,i)})),this.container.appendChild(r),this.container}}]),r}(w),T=function(e){l(r,e)
var t=h(r)
function r(e){y(this,r)
var n=!(!e.data.title&&!e.data.contents)
return t.call(this,e,n)}return m(r,[{key:"render",value:function(){if(this.container.className="popupAnnotation",["Line","Square","Circle","PolyLine","Polygon","Ink"].includes(this.data.parentType))return this.container
var e='[data-annotation-id="'.concat(this.data.parentId,'"]'),t=this.layer.querySelector(e)
if(!t)return this.container
var r=new E({container:this.container,trigger:t,color:this.data.color,title:this.data.title,modificationDate:this.data.modificationDate,contents:this.data.contents}),n=parseFloat(t.style.left),i=parseFloat(t.style.width)
return this.container.style.transformOrigin="-".concat(n+i,"px -").concat(t.style.top),this.container.style.left="".concat(n+i,"px"),this.container.appendChild(r.render()),this.container}}]),r}(_),E=function(){function e(t){y(this,e),this.container=t.container,this.trigger=t.trigger,this.color=t.color,this.title=t.title,this.modificationDate=t.modificationDate,this.contents=t.contents,this.hideWrapper=t.hideWrapper||!1,this.pinned=!1}return m(e,[{key:"render",value:function(){var e=document.createElement("div")
e.className="popupWrapper",this.hideElement=this.hideWrapper?e:this.container,this.hideElement.setAttribute("hidden",!0)
var t=document.createElement("div")
t.className="popup"
var r=this.color
if(r){var a=.7*(255-r[0])+r[0],o=.7*(255-r[1])+r[1],s=.7*(255-r[2])+r[2]
t.style.backgroundColor=i.Util.makeCssRgb(0|a,0|o,0|s)}var u=document.createElement("h1")
u.textContent=this.title,t.appendChild(u)
var c=n.PDFDateString.toDateObject(this.modificationDate)
if(c){var l=document.createElement("span")
l.textContent="{{date}}, {{time}}",l.dataset.l10nId="annotation_date_string",l.dataset.l10nArgs=JSON.stringify({date:c.toLocaleDateString(),time:c.toLocaleTimeString()}),t.appendChild(l)}var f=this._formatContents(this.contents)
return t.appendChild(f),this.trigger.addEventListener("click",this._toggle.bind(this)),this.trigger.addEventListener("mouseover",this._show.bind(this,!1)),this.trigger.addEventListener("mouseout",this._hide.bind(this,!1)),t.addEventListener("click",this._hide.bind(this,!0)),e.appendChild(t),e}},{key:"_formatContents",value:function(e){for(var t=document.createElement("p"),r=e.split(/(?:\r\n?|\n)/),n=0,i=r.length;n<i;++n){var a=r[n]
t.appendChild(document.createTextNode(a)),n<i-1&&t.appendChild(document.createElement("br"))}return t}},{key:"_toggle",value:function(){this.pinned?this._hide(!0):this._show(!0)}},{key:"_show",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
e&&(this.pinned=!0),this.hideElement.hasAttribute("hidden")&&(this.hideElement.removeAttribute("hidden"),this.container.style.zIndex+=1)}},{key:"_hide",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0]
e&&(this.pinned=!1),this.hideElement.hasAttribute("hidden")||this.pinned||(this.hideElement.setAttribute("hidden",!0),this.container.style.zIndex-=1)}}]),e}(),O=function(e){l(r,e)
var t=h(r)
function r(e){y(this,r)
var n=!!(e.data.hasPopup||e.data.title||e.data.contents)
return t.call(this,e,n,!0)}return m(r,[{key:"render",value:function(){return this.container.className="freeTextAnnotation",this.data.hasPopup||this._createPopup(this.container,null,this.data),this.container}}]),r}(_),F=function(e){l(r,e)
var t=h(r)
function r(e){y(this,r)
var n=!!(e.data.hasPopup||e.data.title||e.data.contents)
return t.call(this,e,n,!0)}return m(r,[{key:"render",value:function(){this.container.className="lineAnnotation"
var e=this.data,t=e.rect[2]-e.rect[0],r=e.rect[3]-e.rect[1],n=this.svgFactory.create(t,r),i=this.svgFactory.createElement("svg:line")
return i.setAttribute("x1",e.rect[2]-e.lineCoordinates[0]),i.setAttribute("y1",e.rect[3]-e.lineCoordinates[1]),i.setAttribute("x2",e.rect[2]-e.lineCoordinates[2]),i.setAttribute("y2",e.rect[3]-e.lineCoordinates[3]),i.setAttribute("stroke-width",e.borderStyle.width||1),i.setAttribute("stroke","transparent"),n.appendChild(i),this.container.append(n),this._createPopup(this.container,i,e),this.container}}]),r}(_),L=function(e){l(r,e)
var t=h(r)
function r(e){y(this,r)
var n=!!(e.data.hasPopup||e.data.title||e.data.contents)
return t.call(this,e,n,!0)}return m(r,[{key:"render",value:function(){this.container.className="squareAnnotation"
var e=this.data,t=e.rect[2]-e.rect[0],r=e.rect[3]-e.rect[1],n=this.svgFactory.create(t,r),i=e.borderStyle.width,a=this.svgFactory.createElement("svg:rect")
return a.setAttribute("x",i/2),a.setAttribute("y",i/2),a.setAttribute("width",t-i),a.setAttribute("height",r-i),a.setAttribute("stroke-width",i||1),a.setAttribute("stroke","transparent"),a.setAttribute("fill","none"),n.appendChild(a),this.container.append(n),this._createPopup(this.container,a,e),this.container}}]),r}(_),I=function(e){l(r,e)
var t=h(r)
function r(e){y(this,r)
var n=!!(e.data.hasPopup||e.data.title||e.data.contents)
return t.call(this,e,n,!0)}return m(r,[{key:"render",value:function(){this.container.className="circleAnnotation"
var e=this.data,t=e.rect[2]-e.rect[0],r=e.rect[3]-e.rect[1],n=this.svgFactory.create(t,r),i=e.borderStyle.width,a=this.svgFactory.createElement("svg:ellipse")
return a.setAttribute("cx",t/2),a.setAttribute("cy",r/2),a.setAttribute("rx",t/2-i/2),a.setAttribute("ry",r/2-i/2),a.setAttribute("stroke-width",i||1),a.setAttribute("stroke","transparent"),a.setAttribute("fill","none"),n.appendChild(a),this.container.append(n),this._createPopup(this.container,a,e),this.container}}]),r}(_),M=function(e){l(r,e)
var t=h(r)
function r(e){var n
y(this,r)
var i=!!(e.data.hasPopup||e.data.title||e.data.contents)
return(n=t.call(this,e,i,!0)).containerClassName="polylineAnnotation",n.svgElementName="svg:polyline",n}return m(r,[{key:"render",value:function(){this.container.className=this.containerClassName
var e,t=this.data,r=t.rect[2]-t.rect[0],n=t.rect[3]-t.rect[1],i=this.svgFactory.create(r,n),a=[],o=s(t.vertices)
try{for(o.s();!(e=o.n()).done;){var u=e.value,c=u.x-t.rect[0],l=t.rect[3]-u.y
a.push(c+","+l)}}catch(h){o.e(h)}finally{o.f()}a=a.join(" ")
var f=this.svgFactory.createElement(this.svgElementName)
return f.setAttribute("points",a),f.setAttribute("stroke-width",t.borderStyle.width||1),f.setAttribute("stroke","transparent"),f.setAttribute("fill","none"),i.appendChild(f),this.container.append(i),this._createPopup(this.container,f,t),this.container}}]),r}(_),j=function(e){l(r,e)
var t=h(r)
function r(e){var n
return y(this,r),(n=t.call(this,e)).containerClassName="polygonAnnotation",n.svgElementName="svg:polygon",n}return r}(M),D=function(e){l(r,e)
var t=h(r)
function r(e){y(this,r)
var n=!!(e.data.hasPopup||e.data.title||e.data.contents)
return t.call(this,e,n,!0)}return m(r,[{key:"render",value:function(){return this.container.className="caretAnnotation",this.data.hasPopup||this._createPopup(this.container,null,this.data),this.container}}]),r}(_),N=function(e){l(r,e)
var t=h(r)
function r(e){var n
y(this,r)
var i=!!(e.data.hasPopup||e.data.title||e.data.contents)
return(n=t.call(this,e,i,!0)).containerClassName="inkAnnotation",n.svgElementName="svg:polyline",n}return m(r,[{key:"render",value:function(){this.container.className=this.containerClassName
var e,t=this.data,r=t.rect[2]-t.rect[0],n=t.rect[3]-t.rect[1],i=this.svgFactory.create(r,n),a=s(t.inkLists)
try{for(a.s();!(e=a.n()).done;){var o,u=e.value,c=[],l=s(u)
try{for(l.s();!(o=l.n()).done;){var f=o.value,h=f.x-t.rect[0],d=t.rect[3]-f.y
c.push("".concat(h,",").concat(d))}}catch(v){l.e(v)}finally{l.f()}c=c.join(" ")
var p=this.svgFactory.createElement(this.svgElementName)
p.setAttribute("points",c),p.setAttribute("stroke-width",t.borderStyle.width||1),p.setAttribute("stroke","transparent"),p.setAttribute("fill","none"),this._createPopup(this.container,p,t),i.appendChild(p)}}catch(v){a.e(v)}finally{a.f()}return this.container.append(i),this.container}}]),r}(_),q=function(e){l(r,e)
var t=h(r)
function r(e){y(this,r)
var n=!!(e.data.hasPopup||e.data.title||e.data.contents)
return t.call(this,e,n,!0)}return m(r,[{key:"render",value:function(){return this.container.className="highlightAnnotation",this.data.hasPopup||this._createPopup(this.container,null,this.data),this.container}}]),r}(_),U=function(e){l(r,e)
var t=h(r)
function r(e){y(this,r)
var n=!!(e.data.hasPopup||e.data.title||e.data.contents)
return t.call(this,e,n,!0)}return m(r,[{key:"render",value:function(){return this.container.className="underlineAnnotation",this.data.hasPopup||this._createPopup(this.container,null,this.data),this.container}}]),r}(_),W=function(e){l(r,e)
var t=h(r)
function r(e){y(this,r)
var n=!!(e.data.hasPopup||e.data.title||e.data.contents)
return t.call(this,e,n,!0)}return m(r,[{key:"render",value:function(){return this.container.className="squigglyAnnotation",this.data.hasPopup||this._createPopup(this.container,null,this.data),this.container}}]),r}(_),B=function(e){l(r,e)
var t=h(r)
function r(e){y(this,r)
var n=!!(e.data.hasPopup||e.data.title||e.data.contents)
return t.call(this,e,n,!0)}return m(r,[{key:"render",value:function(){return this.container.className="strikeoutAnnotation",this.data.hasPopup||this._createPopup(this.container,null,this.data),this.container}}]),r}(_),G=function(e){l(r,e)
var t=h(r)
function r(e){y(this,r)
var n=!!(e.data.hasPopup||e.data.title||e.data.contents)
return t.call(this,e,n,!0)}return m(r,[{key:"render",value:function(){return this.container.className="stampAnnotation",this.data.hasPopup||this._createPopup(this.container,null,this.data),this.container}}]),r}(_),z=function(e){l(r,e)
var t=h(r)
function r(e){var a
y(this,r)
var o=(a=t.call(this,e,!0)).data.file,s=o.filename,u=o.content
return a.filename=(0,n.getFilenameFromUrl)(s),a.content=u,a.linkService.eventBus&&a.linkService.eventBus.dispatch("fileattachmentannotation",{source:p(a),id:(0,i.stringToPDFString)(s),filename:s,content:u}),a}return m(r,[{key:"render",value:function(){this.container.className="fileAttachmentAnnotation"
var e=document.createElement("div")
return e.style.height=this.container.style.height,e.style.width=this.container.style.width,e.addEventListener("dblclick",this._download.bind(this)),this.data.hasPopup||!this.data.title&&!this.data.contents||this._createPopup(this.container,e,this.data),this.container.appendChild(e),this.container}},{key:"_download",value:function(){this.downloadManager?this.downloadManager.downloadData(this.content,this.filename,""):(0,i.warn)("Download cannot be started due to unavailable download manager")}}]),r}(_),H=function(){function e(){y(this,e)}return m(e,null,[{key:"render",value:function(e){var t,r=[],o=[],u=s(e.annotations)
try{for(u.s();!(t=u.n()).done;){var c=t.value
c&&(c.annotationType!==i.AnnotationType.POPUP?r.push(c):o.push(c))}}catch(p){u.e(p)}finally{u.f()}o.length&&r.push.apply(r,o)
for(var l=0,f=r;l<f.length;l++){var h=f[l],d=b.create({data:h,layer:e.div,page:e.page,viewport:e.viewport,linkService:e.linkService,downloadManager:e.downloadManager,imageResourcesPath:e.imageResourcesPath||"",renderInteractiveForms:"boolean"!=typeof e.renderInteractiveForms||e.renderInteractiveForms,svgFactory:new n.DOMSVGFactory,annotationStorage:e.annotationStorage||new a.AnnotationStorage})
d.isRenderable&&e.div.appendChild(d.render())}}},{key:"update",value:function(e){var t,r=s(e.annotations)
try{for(r.s();!(t=r.n()).done;){var n=t.value,i=e.div.querySelector('[data-annotation-id="'.concat(n.id,'"]'))
i&&(i.style.transform="matrix(".concat(e.viewport.transform.join(","),")"))}}catch(a){r.e(a)}finally{r.f()}e.div.removeAttribute("hidden")}}]),e}()
t.AnnotationLayer=H},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.renderTextLayer=void 0
var n=r(5),i=function(){var e=/\S/
function t(t,r,i){var a,o=document.createElement("span"),s={angle:0,canvasWidth:0,isWhitespace:!1,originalTransform:null,paddingBottom:0,paddingLeft:0,paddingRight:0,paddingTop:0,scale:1}
if(t._textDivs.push(o),a=r.str,!e.test(a))return s.isWhitespace=!0,void t._textDivProperties.set(o,s)
var u=n.Util.transform(t._viewport.transform,r.transform),c=Math.atan2(u[1],u[0]),l=i[r.fontName]
l.vertical&&(c+=Math.PI/2)
var f,h,d=Math.sqrt(u[2]*u[2]+u[3]*u[3]),p=d
l.ascent?p=l.ascent*p:l.descent&&(p=(1+l.descent)*p),0===c?(f=u[4],h=u[5]-p):(f=u[4]+p*Math.sin(c),h=u[5]-p*Math.cos(c)),o.style.left="".concat(f,"px"),o.style.top="".concat(h,"px"),o.style.fontSize="".concat(d,"px"),o.style.fontFamily=l.fontFamily,o.textContent=r.str,t._fontInspectorEnabled&&(o.dataset.fontName=r.fontName),0!==c&&(s.angle=c*(180/Math.PI))
var v=!1
if(r.str.length>1)v=!0
else if(r.transform[0]!==r.transform[3]){var y=Math.abs(r.transform[0]),g=Math.abs(r.transform[3])
y!==g&&Math.max(y,g)/Math.min(y,g)>1.5&&(v=!0)}if(v&&(l.vertical?s.canvasWidth=r.height*t._viewport.scale:s.canvasWidth=r.width*t._viewport.scale),t._textDivProperties.set(o,s),t._textContentStream&&t._layoutText(o),t._enhanceTextSelection){var m=1,b=0
0!==c&&(m=Math.cos(c),b=Math.sin(c))
var _,A,S=(l.vertical?r.height:r.width)*t._viewport.scale,w=d
0!==c?(_=[m,b,-b,m,f,h],A=n.Util.getAxialAlignedBoundingBox([0,0,S,w],_)):A=[f,h,f+S,h+w],t._bounds.push({left:A[0],top:A[1],right:A[2],bottom:A[3],div:o,size:[S,w],m:_})}}function r(e){if(!e._canceled){var t=e._textDivs,r=e._capability,n=t.length
if(n>1e5)return e._renderingDone=!0,void r.resolve()
if(!e._textContentStream)for(var i=0;i<n;i++)e._layoutText(t[i])
e._renderingDone=!0,r.resolve()}}function i(e,t,r){for(var n=0,i=0;i<r;i++){var a=e[t++]
a>0&&(n=n?Math.min(a,n):a)}return n}function a(e){for(var t=e._bounds,r=e._viewport,a=function(e,t,r){var n=r.map((function(e,t){return{x1:e.left,y1:e.top,x2:e.right,y2:e.bottom,index:t,x1New:void 0,x2New:void 0}}))
o(e,n)
var i=new Array(r.length)
return n.forEach((function(e){var t=e.index
i[t]={left:e.x1New,top:0,right:e.x2New,bottom:0}})),r.map((function(t,r){var a=i[r],o=n[r]
o.x1=t.top,o.y1=e-a.right,o.x2=t.bottom,o.y2=e-a.left,o.index=r,o.x1New=void 0,o.x2New=void 0})),o(t,n),n.forEach((function(e){var t=e.index
i[t].top=e.x1New,i[t].bottom=e.x2New})),i}(r.width,r.height,t),s=0;s<a.length;s++){var u=t[s].div,c=e._textDivProperties.get(u)
if(0!==c.angle){var l=a[s],f=t[s],h=f.m,d=h[0],p=h[1],v=[[0,0],[0,f.size[1]],[f.size[0],0],f.size],y=new Float64Array(64)
v.forEach((function(e,t){var r=n.Util.applyTransform(e,h)
y[t+0]=d&&(l.left-r[0])/d,y[t+4]=p&&(l.top-r[1])/p,y[t+8]=d&&(l.right-r[0])/d,y[t+12]=p&&(l.bottom-r[1])/p,y[t+16]=p&&(l.left-r[0])/-p,y[t+20]=d&&(l.top-r[1])/d,y[t+24]=p&&(l.right-r[0])/-p,y[t+28]=d&&(l.bottom-r[1])/d,y[t+32]=d&&(l.left-r[0])/-d,y[t+36]=p&&(l.top-r[1])/-p,y[t+40]=d&&(l.right-r[0])/-d,y[t+44]=p&&(l.bottom-r[1])/-p,y[t+48]=p&&(l.left-r[0])/p,y[t+52]=d&&(l.top-r[1])/-d,y[t+56]=p&&(l.right-r[0])/p,y[t+60]=d&&(l.bottom-r[1])/-d}))
var g=1+Math.min(Math.abs(d),Math.abs(p))
c.paddingLeft=i(y,32,16)/g,c.paddingTop=i(y,48,16)/g,c.paddingRight=i(y,0,16)/g,c.paddingBottom=i(y,16,16)/g,e._textDivProperties.set(u,c)}else c.paddingLeft=t[s].left-a[s].left,c.paddingTop=t[s].top-a[s].top,c.paddingRight=a[s].right-t[s].right,c.paddingBottom=a[s].bottom-t[s].bottom,e._textDivProperties.set(u,c)}}function o(e,t){t.sort((function(e,t){return e.x1-t.x1||e.index-t.index}))
var r=[{start:-1/0,end:1/0,boundary:{x1:-1/0,y1:-1/0,x2:0,y2:1/0,index:-1,x1New:0,x2New:0}}]
t.forEach((function(e){for(var t=0;t<r.length&&r[t].end<=e.y1;)t++
for(var n,i,a=r.length-1;a>=0&&r[a].start>=e.y2;)a--
var o,s,u=-1/0
for(o=t;o<=a;o++){var c;(c=(i=(n=r[o]).boundary).x2>e.x1?i.index>e.index?i.x1New:e.x1:void 0===i.x2New?(i.x2+e.x1)/2:i.x2New)>u&&(u=c)}for(e.x1New=u,o=t;o<=a;o++)void 0===(i=(n=r[o]).boundary).x2New?i.x2>e.x1?i.index>e.index&&(i.x2New=i.x2):i.x2New=u:i.x2New>u&&(i.x2New=Math.max(u,i.x2))
var l=[],f=null
for(o=t;o<=a;o++){var h=(i=(n=r[o]).boundary).x2>e.x2?i:e
f===h?l[l.length-1].end=n.end:(l.push({start:n.start,end:n.end,boundary:h}),f=h)}for(r[t].start<e.y1&&(l[0].start=e.y1,l.unshift({start:r[t].start,end:e.y1,boundary:r[t].boundary})),e.y2<r[a].end&&(l[l.length-1].end=e.y2,l.push({start:e.y2,end:r[a].end,boundary:r[a].boundary})),o=t;o<=a;o++)if(void 0===(i=(n=r[o]).boundary).x2New){var d=!1
for(s=t-1;!d&&s>=0&&r[s].start>=i.y1;s--)d=r[s].boundary===i
for(s=a+1;!d&&s<r.length&&r[s].end<=i.y2;s++)d=r[s].boundary===i
for(s=0;!d&&s<l.length;s++)d=l[s].boundary===i
d||(i.x2New=u)}Array.prototype.splice.apply(r,[t,a-t+1].concat(l))})),r.forEach((function(t){var r=t.boundary
void 0===r.x2New&&(r.x2New=Math.max(e,r.x2))}))}function s(e){var t=this,r=e.textContent,i=e.textContentStream,a=e.container,o=e.viewport,s=e.textDivs,u=e.textContentItemsStr,c=e.enhanceTextSelection
this._textContent=r,this._textContentStream=i,this._container=a,this._document=a.ownerDocument,this._viewport=o,this._textDivs=s||[],this._textContentItemsStr=u||[],this._enhanceTextSelection=!!c,this._fontInspectorEnabled=!(!globalThis.FontInspector||!globalThis.FontInspector.enabled),this._reader=null,this._layoutTextLastFontSize=null,this._layoutTextLastFontFamily=null,this._layoutTextCtx=null,this._textDivProperties=new WeakMap,this._renderingDone=!1,this._canceled=!1,this._capability=(0,n.createPromiseCapability)(),this._renderTimer=null,this._bounds=[],this._capability.promise.finally((function(){t._layoutTextCtx&&(t._layoutTextCtx.canvas.width=0,t._layoutTextCtx.canvas.height=0,t._layoutTextCtx=null)})).catch((function(){}))}return s.prototype={get promise(){return this._capability.promise},cancel:function(){this._canceled=!0,this._reader&&(this._reader.cancel(new n.AbortException("TextLayer task cancelled.")),this._reader=null),null!==this._renderTimer&&(clearTimeout(this._renderTimer),this._renderTimer=null),this._capability.reject(new Error("TextLayer task cancelled."))},_processItems:function(e,r){for(var n=0,i=e.length;n<i;n++)this._textContentItemsStr.push(e[n].str),t(this,e[n],r)},_layoutText:function(e){var t=this._textDivProperties.get(e)
if(!t.isWhitespace){var r=""
if(0!==t.canvasWidth){var n=e.style,i=n.fontSize,a=n.fontFamily
i===this._layoutTextLastFontSize&&a===this._layoutTextLastFontFamily||(this._layoutTextCtx.font="".concat(i," ").concat(a),this._layoutTextLastFontSize=i,this._layoutTextLastFontFamily=a)
var o=this._layoutTextCtx.measureText(e.textContent).width
o>0&&(t.scale=t.canvasWidth/o,r="scaleX(".concat(t.scale,")"))}0!==t.angle&&(r="rotate(".concat(t.angle,"deg) ").concat(r)),r.length>0&&(this._enhanceTextSelection&&(t.originalTransform=r),e.style.transform=r),this._textDivProperties.set(e,t),this._container.appendChild(e)}},_render:function(e){var t=this,i=(0,n.createPromiseCapability)(),a=Object.create(null),o=this._document.createElement("canvas")
if(o.mozOpaque=!0,this._layoutTextCtx=o.getContext("2d",{alpha:!1}),this._textContent){var s=this._textContent.items,u=this._textContent.styles
this._processItems(s,u),i.resolve()}else{if(!this._textContentStream)throw new Error('Neither "textContent" nor "textContentStream" parameters specified.')
this._reader=this._textContentStream.getReader(),function e(){t._reader.read().then((function(r){var n=r.value
r.done?i.resolve():(Object.assign(a,n.styles),t._processItems(n.items,a),e())}),i.reject)}()}i.promise.then((function(){a=null,e?t._renderTimer=setTimeout((function(){r(t),t._renderTimer=null}),e):r(t)}),this._capability.reject)},expandTextDivs:function(e){if(this._enhanceTextSelection&&this._renderingDone){null!==this._bounds&&(a(this),this._bounds=null)
for(var t=[],r=[],n=0,i=this._textDivs.length;n<i;n++){var o=this._textDivs[n],s=this._textDivProperties.get(o)
s.isWhitespace||(e?(t.length=0,r.length=0,s.originalTransform&&t.push(s.originalTransform),s.paddingTop>0?(r.push("".concat(s.paddingTop,"px")),t.push("translateY(".concat(-s.paddingTop,"px)"))):r.push(0),s.paddingRight>0?r.push("".concat(s.paddingRight/s.scale,"px")):r.push(0),s.paddingBottom>0?r.push("".concat(s.paddingBottom,"px")):r.push(0),s.paddingLeft>0?(r.push("".concat(s.paddingLeft/s.scale,"px")),t.push("translateX(".concat(-s.paddingLeft/s.scale,"px)"))):r.push(0),o.style.padding=r.join(" "),t.length&&(o.style.transform=t.join(" "))):(o.style.padding=null,o.style.transform=s.originalTransform))}}}},function(e){var t=new s({textContent:e.textContent,textContentStream:e.textContentStream,container:e.container,viewport:e.viewport,textDivs:e.textDivs,textContentItemsStr:e.textContentItemsStr,enhanceTextSelection:e.enhanceTextSelection})
return t._render(e.timeout),t}}()
t.renderTextLayer=i},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.SVGGraphics=void 0
var n=r(5),i=r(1),a=r(7)
function o(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||c(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return
var r=[],n=!0,i=!1,a=void 0
try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(u){i=!0,a=u}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}return r}(e,t)||c(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){var r
if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=c(e))||t&&e&&"number"==typeof e.length){r&&(e=r)
var n=0,i=function(){}
return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,s=!1
return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next()
return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||null==r.return||r.return()}finally{if(s)throw a}}}}function c(e,t){if(e){if("string"==typeof e)return l(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t,r){return t&&h(e.prototype,t),r&&h(e,r),e}var p=function(){throw new Error("Not implemented: SVGGraphics")}
t.SVGGraphics=p
var v=function(e){if(Number.isInteger(e))return e.toString()
var t=e.toFixed(10),r=t.length-1
if("0"!==t[r])return t
do{r--}while("0"===t[r])
return t.substring(0,"."===t[r]?r:r+1)},y=function(e){if(0===e[4]&&0===e[5]){if(0===e[1]&&0===e[2])return 1===e[0]&&1===e[3]?"":"scale(".concat(v(e[0])," ").concat(v(e[3]),")")
if(e[0]===e[3]&&e[1]===-e[2]){var t=180*Math.acos(e[0])/Math.PI
return"rotate(".concat(v(t),")")}}else if(1===e[0]&&0===e[1]&&0===e[2]&&1===e[3])return"translate(".concat(v(e[4])," ").concat(v(e[5]),")")
return"matrix(".concat(v(e[0])," ").concat(v(e[1])," ").concat(v(e[2])," ").concat(v(e[3])," ").concat(v(e[4])," ")+"".concat(v(e[5]),")")},g={fontStyle:"normal",fontWeight:"normal",fillColor:"#000000"},m=["butt","round","square"],b=["miter","round","bevel"],_=function(){for(var e=new Uint8Array([137,80,78,71,13,10,26,10]),t=new Int32Array(256),r=0;r<256;r++){for(var i=r,o=0;o<8;o++)i=1&i?3988292384^i>>1&2147483647:i>>1&2147483647
t[r]=i}function s(e,r,n,i){var a=i,o=r.length
n[a]=o>>24&255,n[a+1]=o>>16&255,n[a+2]=o>>8&255,n[a+3]=255&o,n[a+=4]=255&e.charCodeAt(0),n[a+1]=255&e.charCodeAt(1),n[a+2]=255&e.charCodeAt(2),n[a+3]=255&e.charCodeAt(3),a+=4,n.set(r,a)
var s=function(e,r,n){for(var i=-1,a=r;a<n;a++){var o=255&(i^e[a])
i=i>>>8^t[o]}return-1^i}(n,i+4,a+=r.length)
n[a]=s>>24&255,n[a+1]=s>>16&255,n[a+2]=s>>8&255,n[a+3]=255&s}function u(e){var t=e.length,r=65535,n=Math.ceil(t/r),i=new Uint8Array(2+t+5*n+4),a=0
i[a++]=120,i[a++]=156
for(var o=0;t>r;)i[a++]=0,i[a++]=255,i[a++]=255,i[a++]=0,i[a++]=0,i.set(e.subarray(o,o+r),a),a+=r,o+=r,t-=r
i[a++]=1,i[a++]=255&t,i[a++]=t>>8&255,i[a++]=255&~t,i[a++]=(65535&~t)>>8&255,i.set(e.subarray(o),a),a+=e.length-o
var s=function(e,t,r){for(var n=1,i=0,a=t;a<r;++a)i=(i+(n=(n+(255&e[a]))%65521))%65521
return i<<16|n}(e,0,e.length)
return i[a++]=s>>24&255,i[a++]=s>>16&255,i[a++]=s>>8&255,i[a++]=255&s,i}function c(t,r,i,o){var c,l,f,h=t.width,d=t.height,p=t.data
switch(r){case n.ImageKind.GRAYSCALE_1BPP:l=0,c=1,f=h+7>>3
break
case n.ImageKind.RGB_24BPP:l=2,c=8,f=3*h
break
case n.ImageKind.RGBA_32BPP:l=6,c=8,f=4*h
break
default:throw new Error("invalid format")}for(var v=new Uint8Array((1+f)*d),y=0,g=0,m=0;m<d;++m)v[y++]=0,v.set(p.subarray(g,g+f),y),g+=f,y+=f
if(r===n.ImageKind.GRAYSCALE_1BPP&&o){y=0
for(var b=0;b<d;b++){y++
for(var _=0;_<f;_++)v[y++]^=255}}var A=new Uint8Array([h>>24&255,h>>16&255,h>>8&255,255&h,d>>24&255,d>>16&255,d>>8&255,255&d,c,l,0,0,0]),S=function(e){if(!a.isNodeJS)return u(e)
try{var t
t=parseInt(process.versions.node)>=8?e:Buffer.from(e)
var r=require("zlib").deflateSync(t,{level:9})
return r instanceof Uint8Array?r:new Uint8Array(r)}catch(i){(0,n.warn)("Not compressing PNG because zlib.deflateSync is unavailable: "+i)}return u(e)}(v),w=e.length+36+A.length+S.length,k=new Uint8Array(w),x=0
return k.set(e,x),s("IHDR",A,k,x+=e.length),s("IDATA",S,k,x+=12+A.length),x+=12+S.length,s("IEND",new Uint8Array(0),k,x),(0,n.createObjectURL)(k,"image/png",i)}return function(e,t,r){return c(e,void 0===e.kind?n.ImageKind.GRAYSCALE_1BPP:e.kind,t,r)}}(),A=function(){function e(){f(this,e),this.fontSizeScale=1,this.fontWeight=g.fontWeight,this.fontSize=0,this.textMatrix=n.IDENTITY_MATRIX,this.fontMatrix=n.FONT_IDENTITY_MATRIX,this.leading=0,this.textRenderingMode=n.TextRenderingMode.FILL,this.textMatrixScale=1,this.x=0,this.y=0,this.lineX=0,this.lineY=0,this.charSpacing=0,this.wordSpacing=0,this.textHScale=1,this.textRise=0,this.fillColor=g.fillColor,this.strokeColor="#000000",this.fillAlpha=1,this.strokeAlpha=1,this.lineWidth=1,this.lineJoin="",this.lineCap="",this.miterLimit=0,this.dashArray=[],this.dashPhase=0,this.dependencies=[],this.activeClipUrl=null,this.clipGroup=null
this.maskId=""}return d(e,[{key:"clone",value:function(){return Object.create(this)}},{key:"setCurrentPoint",value:function(e,t){this.x=e,this.y=t}}]),e}(),S=0,w=0,k=0
t.SVGGraphics=p=function(){function e(t,r){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2]
for(var o in f(this,e),this.svgFactory=new i.DOMSVGFactory,this.current=new A,this.transformMatrix=n.IDENTITY_MATRIX,this.transformStack=[],this.extraStack=[],this.commonObjs=t,this.objs=r,this.pendingClip=null,this.pendingEOFill=!1,this.embedFonts=!1,this.embeddedFonts=Object.create(null),this.cssStyle=null,this.forceDataSchema=!!a,this._operatorIdMapping=[],n.OPS)this._operatorIdMapping[n.OPS[o]]=o}return d(e,[{key:"save",value:function(){this.transformStack.push(this.transformMatrix)
var e=this.current
this.extraStack.push(e),this.current=e.clone()}},{key:"restore",value:function(){this.transformMatrix=this.transformStack.pop(),this.current=this.extraStack.pop(),this.pendingClip=null,this.tgrp=null}},{key:"group",value:function(e){this.save(),this.executeOpTree(e),this.restore()}},{key:"loadDependencies",value:function(e){for(var t=this,r=e.fnArray,i=e.argsArray,a=0,o=r.length;a<o;a++)if(r[a]===n.OPS.dependency){var s,c=u(i[a])
try{var l=function(){var e=s.value,r=e.startsWith("g_")?t.commonObjs:t.objs,n=new Promise((function(t){r.get(e,t)}))
t.current.dependencies.push(n)}
for(c.s();!(s=c.n()).done;)l()}catch(f){c.e(f)}finally{c.f()}}return Promise.all(this.current.dependencies)}},{key:"transform",value:function(e,t,r,i,a,o){var s=[e,t,r,i,a,o]
this.transformMatrix=n.Util.transform(this.transformMatrix,s),this.tgrp=null}},{key:"getSVG",value:function(e,t){var r=this
this.viewport=t
var i=this._initialize(t)
return this.loadDependencies(e).then((function(){return r.transformMatrix=n.IDENTITY_MATRIX,r.executeOpTree(r.convertOpList(e)),i}))}},{key:"convertOpList",value:function(e){for(var t=this._operatorIdMapping,r=e.argsArray,n=e.fnArray,i=[],a=0,o=n.length;a<o;a++){var s=n[a]
i.push({fnId:s,fn:t[s],args:r[a]})}return function(e){var t,r=[],n=[],i=u(e)
try{for(i.s();!(t=i.n()).done;){var a=t.value
"save"!==a.fn?"restore"===a.fn?r=n.pop():r.push(a):(r.push({fnId:92,fn:"group",items:[]}),n.push(r),r=r[r.length-1].items)}}catch(o){i.e(o)}finally{i.f()}return r}(i)}},{key:"executeOpTree",value:function(e){var t,r=u(e)
try{for(r.s();!(t=r.n()).done;){var i=t.value,a=i.fn,o=i.fnId,s=i.args
switch(0|o){case n.OPS.beginText:this.beginText()
break
case n.OPS.dependency:break
case n.OPS.setLeading:this.setLeading(s)
break
case n.OPS.setLeadingMoveText:this.setLeadingMoveText(s[0],s[1])
break
case n.OPS.setFont:this.setFont(s)
break
case n.OPS.showText:case n.OPS.showSpacedText:this.showText(s[0])
break
case n.OPS.endText:this.endText()
break
case n.OPS.moveText:this.moveText(s[0],s[1])
break
case n.OPS.setCharSpacing:this.setCharSpacing(s[0])
break
case n.OPS.setWordSpacing:this.setWordSpacing(s[0])
break
case n.OPS.setHScale:this.setHScale(s[0])
break
case n.OPS.setTextMatrix:this.setTextMatrix(s[0],s[1],s[2],s[3],s[4],s[5])
break
case n.OPS.setTextRise:this.setTextRise(s[0])
break
case n.OPS.setTextRenderingMode:this.setTextRenderingMode(s[0])
break
case n.OPS.setLineWidth:this.setLineWidth(s[0])
break
case n.OPS.setLineJoin:this.setLineJoin(s[0])
break
case n.OPS.setLineCap:this.setLineCap(s[0])
break
case n.OPS.setMiterLimit:this.setMiterLimit(s[0])
break
case n.OPS.setFillRGBColor:this.setFillRGBColor(s[0],s[1],s[2])
break
case n.OPS.setStrokeRGBColor:this.setStrokeRGBColor(s[0],s[1],s[2])
break
case n.OPS.setStrokeColorN:this.setStrokeColorN(s)
break
case n.OPS.setFillColorN:this.setFillColorN(s)
break
case n.OPS.shadingFill:this.shadingFill(s[0])
break
case n.OPS.setDash:this.setDash(s[0],s[1])
break
case n.OPS.setRenderingIntent:this.setRenderingIntent(s[0])
break
case n.OPS.setFlatness:this.setFlatness(s[0])
break
case n.OPS.setGState:this.setGState(s[0])
break
case n.OPS.fill:this.fill()
break
case n.OPS.eoFill:this.eoFill()
break
case n.OPS.stroke:this.stroke()
break
case n.OPS.fillStroke:this.fillStroke()
break
case n.OPS.eoFillStroke:this.eoFillStroke()
break
case n.OPS.clip:this.clip("nonzero")
break
case n.OPS.eoClip:this.clip("evenodd")
break
case n.OPS.paintSolidColorImageMask:this.paintSolidColorImageMask()
break
case n.OPS.paintImageXObject:this.paintImageXObject(s[0])
break
case n.OPS.paintInlineImageXObject:this.paintInlineImageXObject(s[0])
break
case n.OPS.paintImageMaskXObject:this.paintImageMaskXObject(s[0])
break
case n.OPS.paintFormXObjectBegin:this.paintFormXObjectBegin(s[0],s[1])
break
case n.OPS.paintFormXObjectEnd:this.paintFormXObjectEnd()
break
case n.OPS.closePath:this.closePath()
break
case n.OPS.closeStroke:this.closeStroke()
break
case n.OPS.closeFillStroke:this.closeFillStroke()
break
case n.OPS.closeEOFillStroke:this.closeEOFillStroke()
break
case n.OPS.nextLine:this.nextLine()
break
case n.OPS.transform:this.transform(s[0],s[1],s[2],s[3],s[4],s[5])
break
case n.OPS.constructPath:this.constructPath(s[0],s[1])
break
case n.OPS.endPath:this.endPath()
break
case 92:this.group(i.items)
break
default:(0,n.warn)("Unimplemented operator ".concat(a))}}}catch(c){r.e(c)}finally{r.f()}}},{key:"setWordSpacing",value:function(e){this.current.wordSpacing=e}},{key:"setCharSpacing",value:function(e){this.current.charSpacing=e}},{key:"nextLine",value:function(){this.moveText(0,this.current.leading)}},{key:"setTextMatrix",value:function(e,t,r,n,i,a){var o=this.current
o.textMatrix=o.lineMatrix=[e,t,r,n,i,a],o.textMatrixScale=Math.sqrt(e*e+t*t),o.x=o.lineX=0,o.y=o.lineY=0,o.xcoords=[],o.ycoords=[],o.tspan=this.svgFactory.createElement("svg:tspan"),o.tspan.setAttributeNS(null,"font-family",o.fontFamily),o.tspan.setAttributeNS(null,"font-size","".concat(v(o.fontSize),"px")),o.tspan.setAttributeNS(null,"y",v(-o.y)),o.txtElement=this.svgFactory.createElement("svg:text"),o.txtElement.appendChild(o.tspan)}},{key:"beginText",value:function(){var e=this.current
e.x=e.lineX=0,e.y=e.lineY=0,e.textMatrix=n.IDENTITY_MATRIX,e.lineMatrix=n.IDENTITY_MATRIX,e.textMatrixScale=1,e.tspan=this.svgFactory.createElement("svg:tspan"),e.txtElement=this.svgFactory.createElement("svg:text"),e.txtgrp=this.svgFactory.createElement("svg:g"),e.xcoords=[],e.ycoords=[]}},{key:"moveText",value:function(e,t){var r=this.current
r.x=r.lineX+=e,r.y=r.lineY+=t,r.xcoords=[],r.ycoords=[],r.tspan=this.svgFactory.createElement("svg:tspan"),r.tspan.setAttributeNS(null,"font-family",r.fontFamily),r.tspan.setAttributeNS(null,"font-size","".concat(v(r.fontSize),"px")),r.tspan.setAttributeNS(null,"y",v(-r.y))}},{key:"showText",value:function(e){var t=this.current,r=t.font,i=t.fontSize
if(0!==i){var a,o=t.fontSizeScale,s=t.charSpacing,c=t.wordSpacing,l=t.fontDirection,f=t.textHScale*l,h=r.vertical,d=h?1:-1,p=r.defaultVMetrics,m=i*t.fontMatrix[0],b=0,_=u(e)
try{for(_.s();!(a=_.n()).done;){var A=a.value
if(null!==A)if((0,n.isNum)(A))b+=d*A*i/1e3
else{var S=(A.isSpace?c:0)+s,w=A.fontChar,k=void 0,x=void 0,C=A.width
if(h){var R=void 0,P=A.vmetric||p
R=-(R=A.vmetric?P[1]:.5*C)*m
var T=P[2]*m
C=P?-P[0]:C,k=R/o,x=(b+T)/o}else k=b/o,x=0;(A.isInFont||r.missingFile)&&(t.xcoords.push(t.x+k),h&&t.ycoords.push(-t.y+x),t.tspan.textContent+=w)
b+=h?C*m-S*l:C*m+S*l}else b+=l*c}}catch(L){_.e(L)}finally{_.f()}t.tspan.setAttributeNS(null,"x",t.xcoords.map(v).join(" ")),h?t.tspan.setAttributeNS(null,"y",t.ycoords.map(v).join(" ")):t.tspan.setAttributeNS(null,"y",v(-t.y)),h?t.y-=b:t.x+=b*f,t.tspan.setAttributeNS(null,"font-family",t.fontFamily),t.tspan.setAttributeNS(null,"font-size","".concat(v(t.fontSize),"px")),t.fontStyle!==g.fontStyle&&t.tspan.setAttributeNS(null,"font-style",t.fontStyle),t.fontWeight!==g.fontWeight&&t.tspan.setAttributeNS(null,"font-weight",t.fontWeight)
var E=t.textRenderingMode&n.TextRenderingMode.FILL_STROKE_MASK
if(E===n.TextRenderingMode.FILL||E===n.TextRenderingMode.FILL_STROKE?(t.fillColor!==g.fillColor&&t.tspan.setAttributeNS(null,"fill",t.fillColor),t.fillAlpha<1&&t.tspan.setAttributeNS(null,"fill-opacity",t.fillAlpha)):t.textRenderingMode===n.TextRenderingMode.ADD_TO_PATH?t.tspan.setAttributeNS(null,"fill","transparent"):t.tspan.setAttributeNS(null,"fill","none"),E===n.TextRenderingMode.STROKE||E===n.TextRenderingMode.FILL_STROKE){var O=1/(t.textMatrixScale||1)
this._setStrokeAttributes(t.tspan,O)}var F=t.textMatrix
0!==t.textRise&&((F=F.slice())[5]+=t.textRise),t.txtElement.setAttributeNS(null,"transform","".concat(y(F)," scale(").concat(v(f),", -1)")),t.txtElement.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),t.txtElement.appendChild(t.tspan),t.txtgrp.appendChild(t.txtElement),this._ensureTransformGroup().appendChild(t.txtElement)}}},{key:"setLeadingMoveText",value:function(e,t){this.setLeading(-t),this.moveText(e,t)}},{key:"addFontStyle",value:function(e){if(!e.data)throw new Error('addFontStyle: No font data available, ensure that the "fontExtraProperties" API parameter is set.')
this.cssStyle||(this.cssStyle=this.svgFactory.createElement("svg:style"),this.cssStyle.setAttributeNS(null,"type","text/css"),this.defs.appendChild(this.cssStyle))
var t=(0,n.createObjectURL)(e.data,e.mimetype,this.forceDataSchema)
this.cssStyle.textContent+='@font-face { font-family: "'.concat(e.loadedName,'";')+" src: url(".concat(t,"); }\n")}},{key:"setFont",value:function(e){var t=this.current,r=this.commonObjs.get(e[0]),i=e[1]
t.font=r,!this.embedFonts||r.missingFile||this.embeddedFonts[r.loadedName]||(this.addFontStyle(r),this.embeddedFonts[r.loadedName]=r),t.fontMatrix=r.fontMatrix?r.fontMatrix:n.FONT_IDENTITY_MATRIX
var a="normal"
r.black?a="900":r.bold&&(a="bold")
var o=r.italic?"italic":"normal"
i<0?(i=-i,t.fontDirection=-1):t.fontDirection=1,t.fontSize=i,t.fontFamily=r.loadedName,t.fontWeight=a,t.fontStyle=o,t.tspan=this.svgFactory.createElement("svg:tspan"),t.tspan.setAttributeNS(null,"y",v(-t.y)),t.xcoords=[],t.ycoords=[]}},{key:"endText",value:function(){var e=this.current
e.textRenderingMode&n.TextRenderingMode.ADD_TO_PATH_FLAG&&e.txtElement&&e.txtElement.hasChildNodes()&&(e.element=e.txtElement,this.clip("nonzero"),this.endPath())}},{key:"setLineWidth",value:function(e){e>0&&(this.current.lineWidth=e)}},{key:"setLineCap",value:function(e){this.current.lineCap=m[e]}},{key:"setLineJoin",value:function(e){this.current.lineJoin=b[e]}},{key:"setMiterLimit",value:function(e){this.current.miterLimit=e}},{key:"setStrokeAlpha",value:function(e){this.current.strokeAlpha=e}},{key:"setStrokeRGBColor",value:function(e,t,r){this.current.strokeColor=n.Util.makeCssRgb(e,t,r)}},{key:"setFillAlpha",value:function(e){this.current.fillAlpha=e}},{key:"setFillRGBColor",value:function(e,t,r){this.current.fillColor=n.Util.makeCssRgb(e,t,r),this.current.tspan=this.svgFactory.createElement("svg:tspan"),this.current.xcoords=[],this.current.ycoords=[]}},{key:"setStrokeColorN",value:function(e){this.current.strokeColor=this._makeColorN_Pattern(e)}},{key:"setFillColorN",value:function(e){this.current.fillColor=this._makeColorN_Pattern(e)}},{key:"shadingFill",value:function(e){var t=this.viewport.width,r=this.viewport.height,i=n.Util.inverseTransform(this.transformMatrix),a=n.Util.applyTransform([0,0],i),o=n.Util.applyTransform([0,r],i),s=n.Util.applyTransform([t,0],i),u=n.Util.applyTransform([t,r],i),c=Math.min(a[0],o[0],s[0],u[0]),l=Math.min(a[1],o[1],s[1],u[1]),f=Math.max(a[0],o[0],s[0],u[0]),h=Math.max(a[1],o[1],s[1],u[1]),d=this.svgFactory.createElement("svg:rect")
d.setAttributeNS(null,"x",c),d.setAttributeNS(null,"y",l),d.setAttributeNS(null,"width",f-c),d.setAttributeNS(null,"height",h-l),d.setAttributeNS(null,"fill",this._makeShadingPattern(e)),this.current.fillAlpha<1&&d.setAttributeNS(null,"fill-opacity",this.current.fillAlpha),this._ensureTransformGroup().appendChild(d)}},{key:"_makeColorN_Pattern",value:function(e){return"TilingPattern"===e[0]?this._makeTilingPattern(e):this._makeShadingPattern(e)}},{key:"_makeTilingPattern",value:function(e){var t=e[1],r=e[2],i=e[3]||n.IDENTITY_MATRIX,a=s(e[4],4),u=a[0],c=a[1],l=a[2],f=a[3],h=e[5],d=e[6],p=e[7],v="shading".concat(k++),y=s(n.Util.applyTransform([u,c],i),2),g=y[0],m=y[1],b=s(n.Util.applyTransform([l,f],i),2),_=b[0],A=b[1],S=s(n.Util.singularValueDecompose2dScale(i),2),w=h*S[0],x=d*S[1],C=this.svgFactory.createElement("svg:pattern")
C.setAttributeNS(null,"id",v),C.setAttributeNS(null,"patternUnits","userSpaceOnUse"),C.setAttributeNS(null,"width",w),C.setAttributeNS(null,"height",x),C.setAttributeNS(null,"x","".concat(g)),C.setAttributeNS(null,"y","".concat(m))
var R=this.svg,P=this.transformMatrix,T=this.current.fillColor,E=this.current.strokeColor,O=this.svgFactory.create(_-g,A-m)
if(this.svg=O,this.transformMatrix=i,2===p){var F=n.Util.makeCssRgb.apply(n.Util,o(t))
this.current.fillColor=F,this.current.strokeColor=F}return this.executeOpTree(this.convertOpList(r)),this.svg=R,this.transformMatrix=P,this.current.fillColor=T,this.current.strokeColor=E,C.appendChild(O.childNodes[0]),this.defs.appendChild(C),"url(#".concat(v,")")}},{key:"_makeShadingPattern",value:function(e){switch(e[0]){case"RadialAxial":var t,r="shading".concat(k++),i=e[3]
switch(e[1]){case"axial":var a=e[4],o=e[5];(t=this.svgFactory.createElement("svg:linearGradient")).setAttributeNS(null,"id",r),t.setAttributeNS(null,"gradientUnits","userSpaceOnUse"),t.setAttributeNS(null,"x1",a[0]),t.setAttributeNS(null,"y1",a[1]),t.setAttributeNS(null,"x2",o[0]),t.setAttributeNS(null,"y2",o[1])
break
case"radial":var s=e[4],c=e[5],l=e[6],f=e[7];(t=this.svgFactory.createElement("svg:radialGradient")).setAttributeNS(null,"id",r),t.setAttributeNS(null,"gradientUnits","userSpaceOnUse"),t.setAttributeNS(null,"cx",c[0]),t.setAttributeNS(null,"cy",c[1]),t.setAttributeNS(null,"r",f),t.setAttributeNS(null,"fx",s[0]),t.setAttributeNS(null,"fy",s[1]),t.setAttributeNS(null,"fr",l)
break
default:throw new Error("Unknown RadialAxial type: ".concat(e[1]))}var h,d=u(i)
try{for(d.s();!(h=d.n()).done;){var p=h.value,v=this.svgFactory.createElement("svg:stop")
v.setAttributeNS(null,"offset",p[0]),v.setAttributeNS(null,"stop-color",p[1]),t.appendChild(v)}}catch(y){d.e(y)}finally{d.f()}return this.defs.appendChild(t),"url(#".concat(r,")")
case"Mesh":return(0,n.warn)("Unimplemented pattern Mesh"),null
case"Dummy":return"hotpink"
default:throw new Error("Unknown IR type: ".concat(e[0]))}}},{key:"setDash",value:function(e,t){this.current.dashArray=e,this.current.dashPhase=t}},{key:"constructPath",value:function(e,t){var r,i=this.current,a=i.x,o=i.y,s=[],c=0,l=u(e)
try{for(l.s();!(r=l.n()).done;){switch(0|r.value){case n.OPS.rectangle:a=t[c++],o=t[c++]
var f=t[c++],h=t[c++],d=a+f,p=o+h
s.push("M",v(a),v(o),"L",v(d),v(o),"L",v(d),v(p),"L",v(a),v(p),"Z")
break
case n.OPS.moveTo:a=t[c++],o=t[c++],s.push("M",v(a),v(o))
break
case n.OPS.lineTo:a=t[c++],o=t[c++],s.push("L",v(a),v(o))
break
case n.OPS.curveTo:a=t[c+4],o=t[c+5],s.push("C",v(t[c]),v(t[c+1]),v(t[c+2]),v(t[c+3]),v(a),v(o)),c+=6
break
case n.OPS.curveTo2:s.push("C",v(a),v(o),v(t[c]),v(t[c+1]),v(t[c+2]),v(t[c+3])),a=t[c+2],o=t[c+3],c+=4
break
case n.OPS.curveTo3:a=t[c+2],o=t[c+3],s.push("C",v(t[c]),v(t[c+1]),v(a),v(o),v(a),v(o)),c+=4
break
case n.OPS.closePath:s.push("Z")}}}catch(y){l.e(y)}finally{l.f()}s=s.join(" "),i.path&&e.length>0&&e[0]!==n.OPS.rectangle&&e[0]!==n.OPS.moveTo?s=i.path.getAttributeNS(null,"d")+s:(i.path=this.svgFactory.createElement("svg:path"),this._ensureTransformGroup().appendChild(i.path)),i.path.setAttributeNS(null,"d",s),i.path.setAttributeNS(null,"fill","none"),i.element=i.path,i.setCurrentPoint(a,o)}},{key:"endPath",value:function(){var e=this.current
if(e.path=null,this.pendingClip)if(e.element){var t="clippath".concat(S++),r=this.svgFactory.createElement("svg:clipPath")
r.setAttributeNS(null,"id",t),r.setAttributeNS(null,"transform",y(this.transformMatrix))
var n=e.element.cloneNode(!0)
"evenodd"===this.pendingClip?n.setAttributeNS(null,"clip-rule","evenodd"):n.setAttributeNS(null,"clip-rule","nonzero"),this.pendingClip=null,r.appendChild(n),this.defs.appendChild(r),e.activeClipUrl&&(e.clipGroup=null,this.extraStack.forEach((function(e){e.clipGroup=null})),r.setAttributeNS(null,"clip-path",e.activeClipUrl)),e.activeClipUrl="url(#".concat(t,")"),this.tgrp=null}else this.pendingClip=null}},{key:"clip",value:function(e){this.pendingClip=e}},{key:"closePath",value:function(){var e=this.current
if(e.path){var t="".concat(e.path.getAttributeNS(null,"d"),"Z")
e.path.setAttributeNS(null,"d",t)}}},{key:"setLeading",value:function(e){this.current.leading=-e}},{key:"setTextRise",value:function(e){this.current.textRise=e}},{key:"setTextRenderingMode",value:function(e){this.current.textRenderingMode=e}},{key:"setHScale",value:function(e){this.current.textHScale=e/100}},{key:"setRenderingIntent",value:function(e){}},{key:"setFlatness",value:function(e){}},{key:"setGState",value:function(e){var t,r=u(e)
try{for(r.s();!(t=r.n()).done;){var i=s(t.value,2),a=i[0],o=i[1]
switch(a){case"LW":this.setLineWidth(o)
break
case"LC":this.setLineCap(o)
break
case"LJ":this.setLineJoin(o)
break
case"ML":this.setMiterLimit(o)
break
case"D":this.setDash(o[0],o[1])
break
case"RI":this.setRenderingIntent(o)
break
case"FL":this.setFlatness(o)
break
case"Font":this.setFont(o)
break
case"CA":this.setStrokeAlpha(o)
break
case"ca":this.setFillAlpha(o)
break
default:(0,n.warn)("Unimplemented graphic state operator ".concat(a))}}}catch(c){r.e(c)}finally{r.f()}}},{key:"fill",value:function(){var e=this.current
e.element&&(e.element.setAttributeNS(null,"fill",e.fillColor),e.element.setAttributeNS(null,"fill-opacity",e.fillAlpha),this.endPath())}},{key:"stroke",value:function(){var e=this.current
e.element&&(this._setStrokeAttributes(e.element),e.element.setAttributeNS(null,"fill","none"),this.endPath())}},{key:"_setStrokeAttributes",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=this.current,n=r.dashArray
1!==t&&n.length>0&&(n=n.map((function(e){return t*e}))),e.setAttributeNS(null,"stroke",r.strokeColor),e.setAttributeNS(null,"stroke-opacity",r.strokeAlpha),e.setAttributeNS(null,"stroke-miterlimit",v(r.miterLimit)),e.setAttributeNS(null,"stroke-linecap",r.lineCap),e.setAttributeNS(null,"stroke-linejoin",r.lineJoin),e.setAttributeNS(null,"stroke-width",v(t*r.lineWidth)+"px"),e.setAttributeNS(null,"stroke-dasharray",n.map(v).join(" ")),e.setAttributeNS(null,"stroke-dashoffset",v(t*r.dashPhase)+"px")}},{key:"eoFill",value:function(){this.current.element&&this.current.element.setAttributeNS(null,"fill-rule","evenodd"),this.fill()}},{key:"fillStroke",value:function(){this.stroke(),this.fill()}},{key:"eoFillStroke",value:function(){this.current.element&&this.current.element.setAttributeNS(null,"fill-rule","evenodd"),this.fillStroke()}},{key:"closeStroke",value:function(){this.closePath(),this.stroke()}},{key:"closeFillStroke",value:function(){this.closePath(),this.fillStroke()}},{key:"closeEOFillStroke",value:function(){this.closePath(),this.eoFillStroke()}},{key:"paintSolidColorImageMask",value:function(){var e=this.svgFactory.createElement("svg:rect")
e.setAttributeNS(null,"x","0"),e.setAttributeNS(null,"y","0"),e.setAttributeNS(null,"width","1px"),e.setAttributeNS(null,"height","1px"),e.setAttributeNS(null,"fill",this.current.fillColor),this._ensureTransformGroup().appendChild(e)}},{key:"paintImageXObject",value:function(e){var t=e.startsWith("g_")?this.commonObjs.get(e):this.objs.get(e)
t?this.paintInlineImageXObject(t):(0,n.warn)("Dependent image with object ID ".concat(e," is not ready yet"))}},{key:"paintInlineImageXObject",value:function(e,t){var r=e.width,n=e.height,i=_(e,this.forceDataSchema,!!t),a=this.svgFactory.createElement("svg:rect")
a.setAttributeNS(null,"x","0"),a.setAttributeNS(null,"y","0"),a.setAttributeNS(null,"width",v(r)),a.setAttributeNS(null,"height",v(n)),this.current.element=a,this.clip("nonzero")
var o=this.svgFactory.createElement("svg:image")
o.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i),o.setAttributeNS(null,"x","0"),o.setAttributeNS(null,"y",v(-n)),o.setAttributeNS(null,"width",v(r)+"px"),o.setAttributeNS(null,"height",v(n)+"px"),o.setAttributeNS(null,"transform","scale(".concat(v(1/r)," ").concat(v(-1/n),")")),t?t.appendChild(o):this._ensureTransformGroup().appendChild(o)}},{key:"paintImageMaskXObject",value:function(e){var t=this.current,r=e.width,n=e.height,i=t.fillColor
t.maskId="mask".concat(w++)
var a=this.svgFactory.createElement("svg:mask")
a.setAttributeNS(null,"id",t.maskId)
var o=this.svgFactory.createElement("svg:rect")
o.setAttributeNS(null,"x","0"),o.setAttributeNS(null,"y","0"),o.setAttributeNS(null,"width",v(r)),o.setAttributeNS(null,"height",v(n)),o.setAttributeNS(null,"fill",i),o.setAttributeNS(null,"mask","url(#".concat(t.maskId,")")),this.defs.appendChild(a),this._ensureTransformGroup().appendChild(o),this.paintInlineImageXObject(e,a)}},{key:"paintFormXObjectBegin",value:function(e,t){if(Array.isArray(e)&&6===e.length&&this.transform(e[0],e[1],e[2],e[3],e[4],e[5]),t){var r=t[2]-t[0],n=t[3]-t[1],i=this.svgFactory.createElement("svg:rect")
i.setAttributeNS(null,"x",t[0]),i.setAttributeNS(null,"y",t[1]),i.setAttributeNS(null,"width",v(r)),i.setAttributeNS(null,"height",v(n)),this.current.element=i,this.clip("nonzero"),this.endPath()}}},{key:"paintFormXObjectEnd",value:function(){}},{key:"_initialize",value:function(e){var t=this.svgFactory.create(e.width,e.height),r=this.svgFactory.createElement("svg:defs")
t.appendChild(r),this.defs=r
var n=this.svgFactory.createElement("svg:g")
return n.setAttributeNS(null,"transform",y(e.transform)),t.appendChild(n),this.svg=n,t}},{key:"_ensureClipGroup",value:function(){if(!this.current.clipGroup){var e=this.svgFactory.createElement("svg:g")
e.setAttributeNS(null,"clip-path",this.current.activeClipUrl),this.svg.appendChild(e),this.current.clipGroup=e}return this.current.clipGroup}},{key:"_ensureTransformGroup",value:function(){return this.tgrp||(this.tgrp=this.svgFactory.createElement("svg:g"),this.tgrp.setAttributeNS(null,"transform",y(this.transformMatrix)),this.current.activeClipUrl?this._ensureClipGroup().appendChild(this.tgrp):this.svg.appendChild(this.tgrp)),this.tgrp}}]),e}()},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.PDFNodeStream=void 0
var n,i=(n=r(2))&&n.__esModule?n:{default:n},a=r(5),o=r(220)
function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=h(e)
if(t){var i=h(this).constructor
r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments)
return f(this,r)}}function f(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t,r,n,i,a,o){try{var s=e[a](o),u=s.value}catch(c){return void r(c)}s.done?t(u):Promise.resolve(u).then(n,i)}function p(e){return function(){var t=this,r=arguments
return new Promise((function(n,i){var a=e.apply(t,r)
function o(e){d(a,n,i,o,s,"next",e)}function s(e){d(a,n,i,o,s,"throw",e)}o(void 0)}))}}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function g(e,t,r){return t&&y(e.prototype,t),r&&y(e,r),e}var m=require("fs"),b=require("http"),_=require("https"),A=require("url"),S=/^file:\/\/\/[a-zA-Z]:\//
var w=function(){function e(t){var r,n
v(this,e),this.source=t,this.url=(r=t.url,"file:"===(n=A.parse(r)).protocol||n.host?n:/^[a-z]:[/\\]/i.test(r)?A.parse("file:///".concat(r)):(n.host||(n.protocol="file:"),n)),this.isHttp="http:"===this.url.protocol||"https:"===this.url.protocol,this.isFsUrl="file:"===this.url.protocol,this.httpHeaders=this.isHttp&&t.httpHeaders||{},this._fullRequestReader=null,this._rangeRequestReaders=[]}return g(e,[{key:"getFullReader",value:function(){return(0,a.assert)(!this._fullRequestReader,"PDFNodeStream.getFullReader can only be called once."),this._fullRequestReader=this.isFsUrl?new T(this):new R(this),this._fullRequestReader}},{key:"getRangeReader",value:function(e,t){if(t<=this._progressiveDataLength)return null
var r=this.isFsUrl?new E(this,e,t):new P(this,e,t)
return this._rangeRequestReaders.push(r),r}},{key:"cancelAllRequests",value:function(e){this._fullRequestReader&&this._fullRequestReader.cancel(e),this._rangeRequestReaders.slice(0).forEach((function(t){t.cancel(e)}))}},{key:"_progressiveDataLength",get:function(){return this._fullRequestReader?this._fullRequestReader._loaded:0}}]),e}()
t.PDFNodeStream=w
var k=function(){function e(t){v(this,e),this._url=t.url,this._done=!1,this._storedError=null,this.onProgress=null
var r=t.source
this._contentLength=r.length,this._loaded=0,this._filename=null,this._disableRange=r.disableRange||!1,this._rangeChunkSize=r.rangeChunkSize,this._rangeChunkSize||this._disableRange||(this._disableRange=!0),this._isStreamingSupported=!r.disableStream,this._isRangeSupported=!r.disableRange,this._readableStream=null,this._readCapability=(0,a.createPromiseCapability)(),this._headersCapability=(0,a.createPromiseCapability)()}var t
return g(e,[{key:"read",value:(t=p(i.default.mark((function e(){var t,r
return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._readCapability.promise
case 2:if(!this._done){e.next=4
break}return e.abrupt("return",{value:void 0,done:!0})
case 4:if(!this._storedError){e.next=6
break}throw this._storedError
case 6:if(null!==(t=this._readableStream.read())){e.next=10
break}return this._readCapability=(0,a.createPromiseCapability)(),e.abrupt("return",this.read())
case 10:return this._loaded+=t.length,this.onProgress&&this.onProgress({loaded:this._loaded,total:this._contentLength}),r=new Uint8Array(t).buffer,e.abrupt("return",{value:r,done:!1})
case 14:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"cancel",value:function(e){this._readableStream?this._readableStream.destroy(e):this._error(e)}},{key:"_error",value:function(e){this._storedError=e,this._readCapability.resolve()}},{key:"_setReadableStream",value:function(e){var t=this
this._readableStream=e,e.on("readable",(function(){t._readCapability.resolve()})),e.on("end",(function(){e.destroy(),t._done=!0,t._readCapability.resolve()})),e.on("error",(function(e){t._error(e)})),!this._isStreamingSupported&&this._isRangeSupported&&this._error(new a.AbortException("streaming is disabled")),this._storedError&&this._readableStream.destroy(this._storedError)}},{key:"headersReady",get:function(){return this._headersCapability.promise}},{key:"filename",get:function(){return this._filename}},{key:"contentLength",get:function(){return this._contentLength}},{key:"isRangeSupported",get:function(){return this._isRangeSupported}},{key:"isStreamingSupported",get:function(){return this._isStreamingSupported}}]),e}(),x=function(){function e(t){v(this,e),this._url=t.url,this._done=!1,this._storedError=null,this.onProgress=null,this._loaded=0,this._readableStream=null,this._readCapability=(0,a.createPromiseCapability)()
var r=t.source
this._isStreamingSupported=!r.disableStream}var t
return g(e,[{key:"read",value:(t=p(i.default.mark((function e(){var t,r
return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._readCapability.promise
case 2:if(!this._done){e.next=4
break}return e.abrupt("return",{value:void 0,done:!0})
case 4:if(!this._storedError){e.next=6
break}throw this._storedError
case 6:if(null!==(t=this._readableStream.read())){e.next=10
break}return this._readCapability=(0,a.createPromiseCapability)(),e.abrupt("return",this.read())
case 10:return this._loaded+=t.length,this.onProgress&&this.onProgress({loaded:this._loaded}),r=new Uint8Array(t).buffer,e.abrupt("return",{value:r,done:!1})
case 14:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"cancel",value:function(e){this._readableStream?this._readableStream.destroy(e):this._error(e)}},{key:"_error",value:function(e){this._storedError=e,this._readCapability.resolve()}},{key:"_setReadableStream",value:function(e){var t=this
this._readableStream=e,e.on("readable",(function(){t._readCapability.resolve()})),e.on("end",(function(){e.destroy(),t._done=!0,t._readCapability.resolve()})),e.on("error",(function(e){t._error(e)})),this._storedError&&this._readableStream.destroy(this._storedError)}},{key:"isStreamingSupported",get:function(){return this._isStreamingSupported}}]),e}()
function C(e,t){return{protocol:e.protocol,auth:e.auth,host:e.hostname,port:e.port,path:e.path,method:"GET",headers:t}}var R=function(e){u(r,e)
var t=l(r)
function r(e){var n
v(this,r)
var i=function(t){if(404===t.statusCode){var r=new a.MissingPDFException('Missing PDF "'.concat(n._url,'".'))
return n._storedError=r,void n._headersCapability.reject(r)}n._headersCapability.resolve(),n._setReadableStream(t)
var i=function(e){return n._readableStream.headers[e.toLowerCase()]},s=(0,o.validateRangeRequestCapabilities)({getResponseHeader:i,isHttp:e.isHttp,rangeChunkSize:n._rangeChunkSize,disableRange:n._disableRange}),u=s.allowRangeRequests,c=s.suggestedLength
n._isRangeSupported=u,n._contentLength=c||n._contentLength,n._filename=(0,o.extractFilenameFromHeader)(i)}
return(n=t.call(this,e))._request=null,"http:"===n._url.protocol?n._request=b.request(C(n._url,e.httpHeaders),i):n._request=_.request(C(n._url,e.httpHeaders),i),n._request.on("error",(function(e){n._storedError=e,n._headersCapability.reject(e)})),n._request.end(),n}return r}(k),P=function(e){u(r,e)
var t=l(r)
function r(e,n,i){var o
for(var s in v(this,r),(o=t.call(this,e))._httpHeaders={},e.httpHeaders){var u=e.httpHeaders[s]
void 0!==u&&(o._httpHeaders[s]=u)}o._httpHeaders.Range="bytes=".concat(n,"-").concat(i-1)
var c=function(e){if(404!==e.statusCode)o._setReadableStream(e)
else{var t=new a.MissingPDFException('Missing PDF "'.concat(o._url,'".'))
o._storedError=t}}
return o._request=null,"http:"===o._url.protocol?o._request=b.request(C(o._url,o._httpHeaders),c):o._request=_.request(C(o._url,o._httpHeaders),c),o._request.on("error",(function(e){o._storedError=e})),o._request.end(),o}return r}(x),T=function(e){u(r,e)
var t=l(r)
function r(e){var n
v(this,r),n=t.call(this,e)
var i=decodeURIComponent(n._url.path)
return S.test(n._url.href)&&(i=i.replace(/^\//,"")),m.lstat(i,(function(e,t){if(e)return"ENOENT"===e.code&&(e=new a.MissingPDFException('Missing PDF "'.concat(i,'".'))),n._storedError=e,void n._headersCapability.reject(e)
n._contentLength=t.size,n._setReadableStream(m.createReadStream(i)),n._headersCapability.resolve()})),n}return r}(k),E=function(e){u(r,e)
var t=l(r)
function r(e,n,i){var a
v(this,r),a=t.call(this,e)
var o=decodeURIComponent(a._url.path)
return S.test(a._url.href)&&(o=o.replace(/^\//,"")),a._setReadableStream(m.createReadStream(o,{start:n,end:i-1})),a}return r}(x)},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.createResponseStatusError=function(e,t){if(404===e||0===e&&t.startsWith("file:"))return new n.MissingPDFException('Missing PDF "'+t+'".')
return new n.UnexpectedResponseException("Unexpected server response ("+e+') while retrieving PDF "'+t+'".',e)},t.extractFilenameFromHeader=function(e){var t=e("Content-Disposition")
if(t){var r=(0,i.getFilenameFromContentDispositionHeader)(t)
if(r.includes("%"))try{r=decodeURIComponent(r)}catch(n){}if(/\.pdf$/i.test(r))return r}return null},t.validateRangeRequestCapabilities=function(e){var t=e.getResponseHeader,r=e.isHttp,i=e.rangeChunkSize,a=e.disableRange;(0,n.assert)(i>0,"Range chunk size must be larger than zero")
var o={allowRangeRequests:!1,suggestedLength:void 0},s=parseInt(t("Content-Length"),10)
if(!Number.isInteger(s))return o
if(o.suggestedLength=s,s<=2*i)return o
if(a||!r)return o
if("bytes"!==t("Accept-Ranges"))return o
if("identity"!==(t("Content-Encoding")||"identity"))return o
return o.allowRangeRequests=!0,o},t.validateResponseStatus=function(e){return 200===e||206===e}
var n=r(5),i=r(221)},function(e,t,r){"use strict"
function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return
var r=[],n=!0,i=!1,a=void 0
try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(u){i=!0,a=u}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}return r}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return i(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}Object.defineProperty(t,"__esModule",{value:!0}),t.getFilenameFromContentDispositionHeader=function(e){var t=!0,r=o("filename\\*","i").exec(e)
if(r){var i=c(r=r[1])
return u(i=f(i=l(i=unescape(i))))}if(r=function(e){var t,r=[],i=o("filename\\*((?!0\\d)\\d+)(\\*?)","ig")
for(;null!==(t=i.exec(e));){var a=n(t,4),s=a[1],u=a[2],f=a[3]
if((s=parseInt(s,10))in r){if(0===s)break}else r[s]=[u,f]}for(var h=[],d=0;d<r.length&&d in r;++d){var p=n(r[d],2),v=p[0],y=p[1]
y=c(y),v&&(y=unescape(y),0===d&&(y=l(y))),h.push(y)}return h.join("")}(e)){return u(f(r))}if(r=o("filename","i").exec(e)){var a=c(r=r[1])
return u(a=f(a))}function o(e,t){return new RegExp("(?:^|;)\\s*"+e+'\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)',t)}function s(e,r){if(e){if(!/^[\x00-\xFF]+$/.test(r))return r
try{var n=new TextDecoder(e,{fatal:!0}),i=Array.from(r,(function(e){return 255&e.charCodeAt(0)}))
r=n.decode(new Uint8Array(i)),t=!1}catch(a){if(/^utf-?8$/i.test(e))try{r=decodeURIComponent(escape(r)),t=!1}catch(o){}}}return r}function u(e){return t&&/[\x80-\xff]/.test(e)&&(e=s("utf-8",e),t&&(e=s("iso-8859-1",e))),e}function c(e){if(e.startsWith('"')){for(var t=e.slice(1).split('\\"'),r=0;r<t.length;++r){var n=t[r].indexOf('"');-1!==n&&(t[r]=t[r].slice(0,n),t.length=r+1),t[r]=t[r].replace(/\\(.)/g,"$1")}e=t.join('"')}return e}function l(e){var t=e.indexOf("'")
return-1===t?e:s(e.slice(0,t),e.slice(t+1).replace(/^[^']*'/,""))}function f(e){return!e.startsWith("=?")||/[\x00-\x19\x80-\xff]/.test(e)?e:e.replace(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g,(function(e,t,r,n){if("q"===r||"Q"===r)return s(t,n=(n=n.replace(/_/g," ")).replace(/=([0-9a-fA-F]{2})/g,(function(e,t){return String.fromCharCode(parseInt(t,16))})))
try{n=atob(n)}catch(i){}return s(t,n)}))}return""}},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.PDFNetworkStream=void 0
var n,i=(n=r(2))&&n.__esModule?n:{default:n},a=r(5),o=r(220)
function s(e,t,r,n,i,a,o){try{var s=e[a](o),u=s.value}catch(c){return void r(c)}s.done?t(u):Promise.resolve(u).then(n,i)}function u(e){return function(){var t=this,r=arguments
return new Promise((function(n,i){var a=e.apply(t,r)
function o(e){s(a,n,i,o,u,"next",e)}function u(e){s(a,n,i,o,u,"throw",e)}o(void 0)}))}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t,r){return t&&l(e.prototype,t),r&&l(e,r),e}var h=function(){function e(t,r){c(this,e),this.url=t,r=r||{},this.isHttp=/^https?:/i.test(t),this.httpHeaders=this.isHttp&&r.httpHeaders||{},this.withCredentials=r.withCredentials||!1,this.getXhr=r.getXhr||function(){return new XMLHttpRequest},this.currXhrId=0,this.pendingRequests=Object.create(null)}return f(e,[{key:"requestRange",value:function(e,t,r){var n={begin:e,end:t}
for(var i in r)n[i]=r[i]
return this.request(n)}},{key:"requestFull",value:function(e){return this.request(e)}},{key:"request",value:function(e){var t=this.getXhr(),r=this.currXhrId++,n=this.pendingRequests[r]={xhr:t}
for(var i in t.open("GET",this.url),t.withCredentials=this.withCredentials,this.httpHeaders){var a=this.httpHeaders[i]
void 0!==a&&t.setRequestHeader(i,a)}return this.isHttp&&"begin"in e&&"end"in e?(t.setRequestHeader("Range","bytes=".concat(e.begin,"-").concat(e.end-1)),n.expectedStatus=206):n.expectedStatus=200,t.responseType="arraybuffer",e.onError&&(t.onerror=function(r){e.onError(t.status)}),t.onreadystatechange=this.onStateChange.bind(this,r),t.onprogress=this.onProgress.bind(this,r),n.onHeadersReceived=e.onHeadersReceived,n.onDone=e.onDone,n.onError=e.onError,n.onProgress=e.onProgress,t.send(null),r}},{key:"onProgress",value:function(e,t){var r=this.pendingRequests[e]
r&&r.onProgress&&r.onProgress(t)}},{key:"onStateChange",value:function(e,t){var r=this.pendingRequests[e]
if(r){var n=r.xhr
if(n.readyState>=2&&r.onHeadersReceived&&(r.onHeadersReceived(),delete r.onHeadersReceived),4===n.readyState&&e in this.pendingRequests)if(delete this.pendingRequests[e],0===n.status&&this.isHttp)r.onError&&r.onError(n.status)
else{var i=n.status||200
if(200===i&&206===r.expectedStatus||i===r.expectedStatus){var o=function(e){var t=e.response
return"string"!=typeof t?t:(0,a.stringToBytes)(t).buffer}(n)
if(206===i){var s=n.getResponseHeader("Content-Range"),u=/bytes (\d+)-(\d+)\/(\d+)/.exec(s)
r.onDone({begin:parseInt(u[1],10),chunk:o})}else o?r.onDone({begin:0,chunk:o}):r.onError&&r.onError(n.status)}else r.onError&&r.onError(n.status)}}}},{key:"getRequestXhr",value:function(e){return this.pendingRequests[e].xhr}},{key:"isPendingRequest",value:function(e){return e in this.pendingRequests}},{key:"abortRequest",value:function(e){var t=this.pendingRequests[e].xhr
delete this.pendingRequests[e],t.abort()}}]),e}(),d=function(){function e(t){c(this,e),this._source=t,this._manager=new h(t.url,{httpHeaders:t.httpHeaders,withCredentials:t.withCredentials}),this._rangeChunkSize=t.rangeChunkSize,this._fullRequestReader=null,this._rangeRequestReaders=[]}return f(e,[{key:"_onRangeRequestReaderClosed",value:function(e){var t=this._rangeRequestReaders.indexOf(e)
t>=0&&this._rangeRequestReaders.splice(t,1)}},{key:"getFullReader",value:function(){return(0,a.assert)(!this._fullRequestReader,"PDFNetworkStream.getFullReader can only be called once."),this._fullRequestReader=new p(this._manager,this._source),this._fullRequestReader}},{key:"getRangeReader",value:function(e,t){var r=new v(this._manager,e,t)
return r.onClosed=this._onRangeRequestReaderClosed.bind(this),this._rangeRequestReaders.push(r),r}},{key:"cancelAllRequests",value:function(e){this._fullRequestReader&&this._fullRequestReader.cancel(e),this._rangeRequestReaders.slice(0).forEach((function(t){t.cancel(e)}))}}]),e}()
t.PDFNetworkStream=d
var p=function(){function e(t,r){c(this,e),this._manager=t
var n={onHeadersReceived:this._onHeadersReceived.bind(this),onDone:this._onDone.bind(this),onError:this._onError.bind(this),onProgress:this._onProgress.bind(this)}
this._url=r.url,this._fullRequestId=t.requestFull(n),this._headersReceivedCapability=(0,a.createPromiseCapability)(),this._disableRange=r.disableRange||!1,this._contentLength=r.length,this._rangeChunkSize=r.rangeChunkSize,this._rangeChunkSize||this._disableRange||(this._disableRange=!0),this._isStreamingSupported=!1,this._isRangeSupported=!1,this._cachedChunks=[],this._requests=[],this._done=!1,this._storedError=void 0,this._filename=null,this.onProgress=null}var t
return f(e,[{key:"_onHeadersReceived",value:function(){var e=this._fullRequestId,t=this._manager.getRequestXhr(e),r=function(e){return t.getResponseHeader(e)},n=(0,o.validateRangeRequestCapabilities)({getResponseHeader:r,isHttp:this._manager.isHttp,rangeChunkSize:this._rangeChunkSize,disableRange:this._disableRange}),i=n.allowRangeRequests,a=n.suggestedLength
i&&(this._isRangeSupported=!0),this._contentLength=a||this._contentLength,this._filename=(0,o.extractFilenameFromHeader)(r),this._isRangeSupported&&this._manager.abortRequest(e),this._headersReceivedCapability.resolve()}},{key:"_onDone",value:function(e){e&&(this._requests.length>0?this._requests.shift().resolve({value:e.chunk,done:!1}):this._cachedChunks.push(e.chunk))
this._done=!0,this._cachedChunks.length>0||(this._requests.forEach((function(e){e.resolve({value:void 0,done:!0})})),this._requests=[])}},{key:"_onError",value:function(e){var t=this._url,r=(0,o.createResponseStatusError)(e,t)
this._storedError=r,this._headersReceivedCapability.reject(r),this._requests.forEach((function(e){e.reject(r)})),this._requests=[],this._cachedChunks=[]}},{key:"_onProgress",value:function(e){this.onProgress&&this.onProgress({loaded:e.loaded,total:e.lengthComputable?e.total:this._contentLength})}},{key:"read",value:(t=u(i.default.mark((function e(){var t,r
return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._storedError){e.next=2
break}throw this._storedError
case 2:if(!(this._cachedChunks.length>0)){e.next=5
break}return t=this._cachedChunks.shift(),e.abrupt("return",{value:t,done:!1})
case 5:if(!this._done){e.next=7
break}return e.abrupt("return",{value:void 0,done:!0})
case 7:return r=(0,a.createPromiseCapability)(),this._requests.push(r),e.abrupt("return",r.promise)
case 10:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"cancel",value:function(e){this._done=!0,this._headersReceivedCapability.reject(e),this._requests.forEach((function(e){e.resolve({value:void 0,done:!0})})),this._requests=[],this._manager.isPendingRequest(this._fullRequestId)&&this._manager.abortRequest(this._fullRequestId),this._fullRequestReader=null}},{key:"filename",get:function(){return this._filename}},{key:"isRangeSupported",get:function(){return this._isRangeSupported}},{key:"isStreamingSupported",get:function(){return this._isStreamingSupported}},{key:"contentLength",get:function(){return this._contentLength}},{key:"headersReady",get:function(){return this._headersReceivedCapability.promise}}]),e}(),v=function(){function e(t,r,n){c(this,e),this._manager=t
var i={onDone:this._onDone.bind(this),onProgress:this._onProgress.bind(this)}
this._requestId=t.requestRange(r,n,i),this._requests=[],this._queuedChunk=null,this._done=!1,this.onProgress=null,this.onClosed=null}var t
return f(e,[{key:"_close",value:function(){this.onClosed&&this.onClosed(this)}},{key:"_onDone",value:function(e){var t=e.chunk
this._requests.length>0?this._requests.shift().resolve({value:t,done:!1}):this._queuedChunk=t
this._done=!0,this._requests.forEach((function(e){e.resolve({value:void 0,done:!0})})),this._requests=[],this._close()}},{key:"_onProgress",value:function(e){!this.isStreamingSupported&&this.onProgress&&this.onProgress({loaded:e.loaded})}},{key:"read",value:(t=u(i.default.mark((function e(){var t,r
return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===this._queuedChunk){e.next=4
break}return t=this._queuedChunk,this._queuedChunk=null,e.abrupt("return",{value:t,done:!1})
case 4:if(!this._done){e.next=6
break}return e.abrupt("return",{value:void 0,done:!0})
case 6:return r=(0,a.createPromiseCapability)(),this._requests.push(r),e.abrupt("return",r.promise)
case 9:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"cancel",value:function(e){this._done=!0,this._requests.forEach((function(e){e.resolve({value:void 0,done:!0})})),this._requests=[],this._manager.isPendingRequest(this._requestId)&&this._manager.abortRequest(this._requestId),this._close()}},{key:"isStreamingSupported",get:function(){return!1}}]),e}()},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.PDFFetchStream=void 0
var n,i=(n=r(2))&&n.__esModule?n:{default:n},a=r(5),o=r(220)
function s(e,t,r,n,i,a,o){try{var s=e[a](o),u=s.value}catch(c){return void r(c)}s.done?t(u):Promise.resolve(u).then(n,i)}function u(e){return function(){var t=this,r=arguments
return new Promise((function(n,i){var a=e.apply(t,r)
function o(e){s(a,n,i,o,u,"next",e)}function u(e){s(a,n,i,o,u,"throw",e)}o(void 0)}))}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t,r){return t&&l(e.prototype,t),r&&l(e,r),e}function h(e,t,r){return{method:"GET",headers:e,signal:r&&r.signal,mode:"cors",credentials:t?"include":"same-origin",redirect:"follow"}}function d(e){var t=new Headers
for(var r in e){var n=e[r]
void 0!==n&&t.append(r,n)}return t}var p=function(){function e(t){c(this,e),this.source=t,this.isHttp=/^https?:/i.test(t.url),this.httpHeaders=this.isHttp&&t.httpHeaders||{},this._fullRequestReader=null,this._rangeRequestReaders=[]}return f(e,[{key:"getFullReader",value:function(){return(0,a.assert)(!this._fullRequestReader,"PDFFetchStream.getFullReader can only be called once."),this._fullRequestReader=new v(this),this._fullRequestReader}},{key:"getRangeReader",value:function(e,t){if(t<=this._progressiveDataLength)return null
var r=new y(this,e,t)
return this._rangeRequestReaders.push(r),r}},{key:"cancelAllRequests",value:function(e){this._fullRequestReader&&this._fullRequestReader.cancel(e),this._rangeRequestReaders.slice(0).forEach((function(t){t.cancel(e)}))}},{key:"_progressiveDataLength",get:function(){return this._fullRequestReader?this._fullRequestReader._loaded:0}}]),e}()
t.PDFFetchStream=p
var v=function(){function e(t){var r=this
c(this,e),this._stream=t,this._reader=null,this._loaded=0,this._filename=null
var n=t.source
this._withCredentials=n.withCredentials||!1,this._contentLength=n.length,this._headersCapability=(0,a.createPromiseCapability)(),this._disableRange=n.disableRange||!1,this._rangeChunkSize=n.rangeChunkSize,this._rangeChunkSize||this._disableRange||(this._disableRange=!0),"undefined"!=typeof AbortController&&(this._abortController=new AbortController),this._isStreamingSupported=!n.disableStream,this._isRangeSupported=!n.disableRange,this._headers=d(this._stream.httpHeaders)
var i=n.url
fetch(i,h(this._headers,this._withCredentials,this._abortController)).then((function(e){if(!(0,o.validateResponseStatus)(e.status))throw(0,o.createResponseStatusError)(e.status,i)
r._reader=e.body.getReader(),r._headersCapability.resolve()
var t=function(t){return e.headers.get(t)},n=(0,o.validateRangeRequestCapabilities)({getResponseHeader:t,isHttp:r._stream.isHttp,rangeChunkSize:r._rangeChunkSize,disableRange:r._disableRange}),s=n.allowRangeRequests,u=n.suggestedLength
r._isRangeSupported=s,r._contentLength=u||r._contentLength,r._filename=(0,o.extractFilenameFromHeader)(t),!r._isStreamingSupported&&r._isRangeSupported&&r.cancel(new a.AbortException("Streaming is disabled."))})).catch(this._headersCapability.reject),this.onProgress=null}var t
return f(e,[{key:"read",value:(t=u(i.default.mark((function e(){var t,r,n,a
return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._headersCapability.promise
case 2:return e.next=4,this._reader.read()
case 4:if(t=e.sent,r=t.value,!(n=t.done)){e.next=9
break}return e.abrupt("return",{value:r,done:n})
case 9:return this._loaded+=r.byteLength,this.onProgress&&this.onProgress({loaded:this._loaded,total:this._contentLength}),a=new Uint8Array(r).buffer,e.abrupt("return",{value:a,done:!1})
case 13:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"cancel",value:function(e){this._reader&&this._reader.cancel(e),this._abortController&&this._abortController.abort()}},{key:"headersReady",get:function(){return this._headersCapability.promise}},{key:"filename",get:function(){return this._filename}},{key:"contentLength",get:function(){return this._contentLength}},{key:"isRangeSupported",get:function(){return this._isRangeSupported}},{key:"isStreamingSupported",get:function(){return this._isStreamingSupported}}]),e}(),y=function(){function e(t,r,n){var i=this
c(this,e),this._stream=t,this._reader=null,this._loaded=0
var s=t.source
this._withCredentials=s.withCredentials||!1,this._readCapability=(0,a.createPromiseCapability)(),this._isStreamingSupported=!s.disableStream,"undefined"!=typeof AbortController&&(this._abortController=new AbortController),this._headers=d(this._stream.httpHeaders),this._headers.append("Range","bytes=".concat(r,"-").concat(n-1))
var u=s.url
fetch(u,h(this._headers,this._withCredentials,this._abortController)).then((function(e){if(!(0,o.validateResponseStatus)(e.status))throw(0,o.createResponseStatusError)(e.status,u)
i._readCapability.resolve(),i._reader=e.body.getReader()})).catch((function(e){if(!e||"AbortError"!==e.name)throw e})),this.onProgress=null}var t
return f(e,[{key:"read",value:(t=u(i.default.mark((function e(){var t,r,n,a
return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._readCapability.promise
case 2:return e.next=4,this._reader.read()
case 4:if(t=e.sent,r=t.value,!(n=t.done)){e.next=9
break}return e.abrupt("return",{value:r,done:n})
case 9:return this._loaded+=r.byteLength,this.onProgress&&this.onProgress({loaded:this._loaded}),a=new Uint8Array(r).buffer,e.abrupt("return",{value:a,done:!1})
case 13:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"cancel",value:function(e){this._reader&&this._reader.cancel(e),this._abortController&&this._abortController.abort()}},{key:"isStreamingSupported",get:function(){return this._isStreamingSupported}}]),e}()}])}))
