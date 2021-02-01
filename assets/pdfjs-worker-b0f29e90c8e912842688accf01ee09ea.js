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
(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("pdfjs-dist/build/pdf.worker",[],t):"object"==typeof exports?exports["pdfjs-dist/build/pdf.worker"]=t():e["pdfjs-dist/build/pdf.worker"]=e.pdfjsWorker=t()})(this,(function(){return function(e){var t={}
function r(a){if(t[a])return t[a].exports
var n=t[a]={i:a,l:!1,exports:{}}
return e[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e
if(4&t&&"object"==typeof e&&e&&e.__esModule)return e
var a=Object.create(null)
if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n))
return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e}
return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"WorkerMessageHandler",{enumerable:!0,get:function(){return a.WorkerMessageHandler}})
var a=r(1)},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.WorkerMessageHandler=t.WorkerTask=void 0
var a,n=(a=r(2))&&a.__esModule?a:{default:a},i=r(5),o=r(202),s=r(203),c=r(224),l=r(7),u=r(243),h=r(244),f=r(205)
function d(e){return b(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||m(e)||g()}function p(e,t){return b(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return
var r=[],a=!0,n=!1,i=void 0
try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);a=!0);}catch(c){n=!0,i=c}finally{try{a||null==s.return||s.return()}finally{if(n)throw i}}return r}(e,t)||m(e,t)||g()}function g(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,t){if(e){if("string"==typeof e)return v(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?v(e,t):void 0}}function v(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r]
return a}function b(e){if(Array.isArray(e))return e}function y(e,t,r,a,n,i,o){try{var s=e[i](o),c=s.value}catch(l){return void r(l)}s.done?t(c):Promise.resolve(c).then(a,n)}function w(e){return function(){var t=this,r=arguments
return new Promise((function(a,n){var i=e.apply(t,r)
function o(e){y(i,a,n,o,s,"next",e)}function s(e){y(i,a,n,o,s,"throw",e)}o(void 0)}))}}function k(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function S(e,t){for(var r=0;r<t.length;r++){var a=t[r]
a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function x(e,t,r){return t&&S(e.prototype,t),r&&S(e,r),e}var C=function(){function e(t){k(this,e),this.name=t,this.terminated=!1,this._capability=(0,i.createPromiseCapability)()}return x(e,[{key:"finish",value:function(){this._capability.resolve()}},{key:"terminate",value:function(){this.terminated=!0}},{key:"ensureNotTerminated",value:function(){if(this.terminated)throw new Error("Worker task was terminated")}},{key:"finished",get:function(){return this._capability.promise}}]),e}()
t.WorkerTask=C
var A,O=function(){function e(){k(this,e)}return x(e,null,[{key:"setup",value:function(t,r){var a=!1
t.on("test",(function(e){if(!a)if(a=!0,e instanceof Uint8Array){var r=255===e[0]
t.postMessageTransfers=r,t.send("test",{supportTransfers:r})}else t.send("test",null)})),t.on("configure",(function(e){(0,i.setVerbosityLevel)(e.verbosity)})),t.on("GetDocRequest",(function(t){return e.createDocumentHandler(t,r)}))}},{key:"createDocumentHandler",value:function(e,t){var r,a=!1,l=null,g=[],v=(0,i.getVerbosityLevel)(),b=e.apiVersion,y="2.6.347"
if(b!==y)throw new Error('The API version "'.concat(b,'" does not match ')+'the Worker version "'.concat(y,'".'))
var k=[]
for(var S in[])k.push(S)
if(k.length)throw new Error("The `Array.prototype` contains unexpected enumerable properties: "+k.join(", ")+"; thus breaking e.g. `for...in` iteration of `Array`s.")
var x=e.docId,A=e.docBaseUrl,O=e.docId+"_worker",T=new u.MessageHandler(O,x,t)
function I(){if(a)throw new Error("Worker was terminated")}function E(e){g.push(e)}function P(e){e.finish()
var t=g.indexOf(e)
g.splice(t,1)}function _(e){return F.apply(this,arguments)}function F(){return(F=w(n.default.mark((function e(t){var a,i,o,s
return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.ensureDoc("checkHeader")
case 2:return e.next=4,r.ensureDoc("parseStartXRef")
case 4:return e.next=6,r.ensureDoc("parse",[t])
case 6:if(t){e.next=9
break}return e.next=9,r.ensureDoc("checkFirstPage")
case 9:return e.next=11,Promise.all([r.ensureDoc("numPages"),r.ensureDoc("fingerprint")])
case 11:return a=e.sent,i=p(a,2),o=i[0],s=i[1],e.abrupt("return",{numPages:o,fingerprint:s})
case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(e,t){var r,a=(0,i.createPromiseCapability)(),n=e.source
if(n.data){try{r=new s.LocalPdfManager(x,n.data,n.password,t,A),a.resolve(r)}catch(d){a.reject(d)}return a.promise}var o,c=[]
try{o=new h.PDFWorkerStream(T)}catch(d){return a.reject(d),a.promise}var u=o.getFullReader()
u.headersReady.then((function(){if(u.isRangeSupported){var e=n.disableAutoFetch||u.isStreamingSupported
r=new s.NetworkPdfManager(x,o,{msgHandler:T,password:n.password,length:u.contentLength,disableAutoFetch:e,rangeChunkSize:n.rangeChunkSize},t,A)
for(var i=0;i<c.length;i++)r.sendProgressiveData(c[i])
c=[],a.resolve(r),l=null}})).catch((function(e){a.reject(e),l=null}))
var f=0
return new Promise((function(e,o){u.read().then((function e(h){var p=h.value,g=h.done
try{if(I(),g)return r||function(){var e=(0,i.arraysToBytes)(c)
n.length&&e.length!==n.length&&(0,i.warn)("reported HTTP length is different from actual")
try{r=new s.LocalPdfManager(x,e,n.password,t,A),a.resolve(r)}catch(d){a.reject(d)}c=[]}(),void(l=null)
f+=(0,i.arrayByteLength)(p),u.isStreamingSupported||T.send("DocProgress",{loaded:f,total:Math.max(f,u.contentLength||0)}),r?r.sendProgressiveData(p):c.push(p),u.read().then(e,o)}catch(m){o(m)}}),o)})).catch((function(e){a.reject(e),l=null})),l=function(e){o.cancelAllRequests(e)},a.promise}return T.postMessageTransfers=e.postMessageTransfers,T.on("GetPage",(function(e){return r.getPage(e.pageIndex).then((function(e){return Promise.all([r.ensure(e,"rotate"),r.ensure(e,"ref"),r.ensure(e,"userUnit"),r.ensure(e,"view")]).then((function(e){var t=p(e,4)
return{rotate:t[0],ref:t[1],userUnit:t[2],view:t[3]}}))}))})),T.on("GetPageIndex",(function(e){var t=e.ref,a=o.Ref.get(t.num,t.gen)
return r.ensureCatalog("getPageIndex",[a])})),T.on("GetDestinations",(function(e){return r.ensureCatalog("destinations")})),T.on("GetDestination",(function(e){return r.ensureCatalog("getDestination",[e.id])})),T.on("GetPageLabels",(function(e){return r.ensureCatalog("pageLabels")})),T.on("GetPageLayout",(function(e){return r.ensureCatalog("pageLayout")})),T.on("GetPageMode",(function(e){return r.ensureCatalog("pageMode")})),T.on("GetViewerPreferences",(function(e){return r.ensureCatalog("viewerPreferences")})),T.on("GetOpenAction",(function(e){return r.ensureCatalog("openAction")})),T.on("GetAttachments",(function(e){return r.ensureCatalog("attachments")})),T.on("GetJavaScript",(function(e){return r.ensureCatalog("javaScript")})),T.on("GetOutline",(function(e){return r.ensureCatalog("documentOutline")})),T.on("GetOptionalContentConfig",(function(e){return r.ensureCatalog("optionalContentConfig")})),T.on("GetPermissions",(function(e){return r.ensureCatalog("permissions")})),T.on("GetMetadata",(function(e){return Promise.all([r.ensureDoc("documentInfo"),r.ensureCatalog("metadata")])})),T.on("GetData",(function(e){return r.requestLoadedStream(),r.onLoadedStream().then((function(e){return e.bytes}))})),T.on("GetStats",(function(e){return r.ensureXRef("stats")})),T.on("GetAnnotations",(function(e){var t=e.pageIndex,a=e.intent
return r.getPage(t).then((function(e){return e.getAnnotationsData(a)}))})),T.on("SaveDocument",(function(e){var t=e.numPages,a=e.annotationStorage,n=e.filename
r.requestLoadedStream()
for(var o=[r.onLoadedStream()],s=r.pdfDocument,l=function(e){o.push(r.getPage(e).then((function(t){var r=new C("Save: page ".concat(e))
return t.save(T,r,a)})))},u=0;u<t;u++)l(u)
return Promise.all(o).then((function(e){var t,r=d(e),a=r[0],o=[],l=function(e,t){var r
if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=m(e))||t&&e&&"number"==typeof e.length){r&&(e=r)
var a=0,n=function(){}
return{s:n,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1
return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next()
return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==r.return||r.return()}finally{if(s)throw i}}}}(r.slice(1))
try{for(l.s();!(t=l.n()).done;){o=t.value.filter((function(e){return null!==e})).reduce((function(e,t){return e.concat(t)}),o)}}catch(g){l.e(g)}finally{l.f()}if(0===o.length)return a.bytes
var u=s.xref,h=Object.create(null)
if(u.trailer){var f=Object.create(null),p=u.trailer.get("Info")||null
p&&p.forEach((function(e,t){(0,i.isString)(e)&&(0,i.isString)(t)&&(f[e]=(0,i.stringToPDFString)(t))})),h={rootRef:u.trailer.getRaw("Root")||null,encrypt:u.trailer.getRaw("Encrypt")||null,newRef:u.getNewRef(),infoRef:u.trailer.getRaw("Info")||null,info:f,fileIds:u.trailer.getRaw("ID")||null,startXRef:s.startXRef,filename:n}}return u.resetNewRef(),(0,c.incrementalUpdate)(a.bytes,h,o)}))})),T.on("GetOperatorList",(function(e,t){var a=e.pageIndex
r.getPage(a).then((function(r){var n=new C("GetOperatorList: page ".concat(a))
E(n)
var o=v>=i.VerbosityLevel.INFOS?Date.now():0
r.getOperatorList({handler:T,sink:t,task:n,intent:e.intent,renderInteractiveForms:e.renderInteractiveForms,annotationStorage:e.annotationStorage}).then((function(e){P(n),o&&(0,i.info)("page=".concat(a+1," - getOperatorList: time=")+"".concat(Date.now()-o,"ms, len=").concat(e.length)),t.close()}),(function(e){P(n),n.terminated||(T.send("UnsupportedFeature",{featureId:i.UNSUPPORTED_FEATURES.errorOperatorList}),t.error(e))}))}))}),this),T.on("GetTextContent",(function(e,t){var a=e.pageIndex
t.onPull=function(e){},t.onCancel=function(e){},r.getPage(a).then((function(r){var n=new C("GetTextContent: page "+a)
E(n)
var o=v>=i.VerbosityLevel.INFOS?Date.now():0
r.extractTextContent({handler:T,task:n,sink:t,normalizeWhitespace:e.normalizeWhitespace,combineTextItems:e.combineTextItems}).then((function(){P(n),o&&(0,i.info)("page=".concat(a+1," - getTextContent: time=")+"".concat(Date.now()-o,"ms")),t.close()}),(function(e){P(n),n.terminated||t.error(e)}))}))})),T.on("FontFallback",(function(e){return r.fontFallback(e.id,T)})),T.on("Cleanup",(function(e){return r.cleanup(!0)})),T.on("Terminate",(function(e){a=!0
var t=[]
if(r){r.terminate(new i.AbortException("Worker was terminated."))
var n=r.cleanup()
t.push(n),r=null}else(0,o.clearPrimitiveCaches)()
return l&&l(new i.AbortException("Worker was terminated.")),g.forEach((function(e){t.push(e.finished),e.terminate()})),Promise.all(t).then((function(){T.destroy(),T=null}))})),T.on("Ready",(function(t){(function(e){function t(e){I(),T.send("GetDoc",{pdfInfo:e})}function n(e){if(I(),e instanceof i.PasswordException){var t=new C("PasswordException: response ".concat(e.code))
E(t),T.sendWithPromise("PasswordRequest",e).then((function(e){var a=e.password
P(t),r.updatePassword(a),o()})).catch((function(){P(t),T.send("DocException",e)}))}else e instanceof i.InvalidPDFException||e instanceof i.MissingPDFException||e instanceof i.UnexpectedResponseException||e instanceof i.UnknownErrorException?T.send("DocException",e):T.send("DocException",new i.UnknownErrorException(e.message,e.toString()))}function o(){I(),_(!1).then(t,(function(e){I(),e instanceof f.XRefParseException?(r.requestLoadedStream(),r.onLoadedStream().then((function(){I(),_(!0).then(t,n)}))):n(e)}))}I(),R(e,{maxImageSize:e.maxImageSize,disableFontFace:e.disableFontFace,ignoreErrors:e.ignoreErrors,isEvalSupported:e.isEvalSupported,fontExtraProperties:e.fontExtraProperties}).then((function(e){if(a)throw e.terminate(new i.AbortException("Worker was terminated.")),new Error("Worker was terminated");(r=e).onLoadedStream().then((function(e){T.send("DataLoaded",{length:e.bytes.byteLength})}))})).then(o,n)})(e),e=null})),O}},{key:"initializeFromPort",value:function(t){var r=new u.MessageHandler("worker","main",t)
e.setup(r,t),r.send("ready",null)}}]),e}()
t.WorkerMessageHandler=O,"undefined"==typeof window&&!l.isNodeJS&&"undefined"!=typeof self&&("function"==typeof(A=self).postMessage&&"onmessage"in A)&&O.initializeFromPort(self)},function(e,t,r){"use strict"
e.exports=r(3)},function(e,t,r){"use strict";(function(e){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var r=function(e){var r,a=Object.prototype,n=a.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag"
function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(F){l=function(e,t,r){return e[t]=r}}function u(e,t,r,a){var n=t&&t.prototype instanceof v?t:v,i=Object.create(n.prototype),o=new E(a||[])
return i._invoke=function(e,t,r){var a=f
return function(n,i){if(a===p)throw new Error("Generator is already running")
if(a===g){if("throw"===n)throw i
return _()}for(r.method=n,r.arg=i;;){var o=r.delegate
if(o){var s=O(o,r)
if(s){if(s===m)continue
return s}}if("next"===r.method)r.sent=r._sent=r.arg
else if("throw"===r.method){if(a===f)throw a=g,r.arg
r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg)
a=p
var c=h(e,t,r)
if("normal"===c.type){if(a=r.done?g:d,c.arg===m)continue
return{value:c.arg,done:r.done}}"throw"===c.type&&(a=g,r.method="throw",r.arg=c.arg)}}}(e,r,o),i}function h(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(F){return{type:"throw",arg:F}}}e.wrap=u
var f="suspendedStart",d="suspendedYield",p="executing",g="completed",m={}
function v(){}function b(){}function y(){}var w={}
w[o]=function(){return this}
var k=Object.getPrototypeOf,S=k&&k(k(P([])))
S&&S!==a&&n.call(S,o)&&(w=S)
var x=y.prototype=v.prototype=Object.create(w)
function C(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function A(e,r){function a(i,o,s,c){var l=h(e[i],e,o)
if("throw"!==l.type){var u=l.arg,f=u.value
return f&&"object"===t(f)&&n.call(f,"__await")?r.resolve(f.__await).then((function(e){a("next",e,s,c)}),(function(e){a("throw",e,s,c)})):r.resolve(f).then((function(e){u.value=e,s(u)}),(function(e){return a("throw",e,s,c)}))}c(l.arg)}var i
this._invoke=function(e,t){function n(){return new r((function(r,n){a(e,t,r,n)}))}return i=i?i.then(n,n):n()}}function O(e,t){var a=e.iterator[t.method]
if(a===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=r,O(e,t),"throw"===t.method))return m
t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var n=h(a,e.iterator,t.arg)
if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,m
var i=n.arg
return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=r),t.delegate=null,m):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function T(e){var t={tryLoc:e[0]}
1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function I(e){var t=e.completion||{}
t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function P(e){if(e){var t=e[o]
if(t)return t.call(e)
if("function"==typeof e.next)return e
if(!isNaN(e.length)){var a=-1,i=function t(){for(;++a<e.length;)if(n.call(e,a))return t.value=e[a],t.done=!1,t
return t.value=r,t.done=!0,t}
return i.next=i}}return{next:_}}function _(){return{value:r,done:!0}}return b.prototype=x.constructor=y,y.constructor=b,b.displayName=l(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor
return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,l(e,c,"GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},C(A.prototype),A.prototype[s]=function(){return this},e.AsyncIterator=A,e.async=function(t,r,a,n,i){void 0===i&&(i=Promise)
var o=new A(u(t,r,a,n),i)
return e.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},C(x),l(x,c,"Generator"),x[o]=function(){return this},x.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[]
for(var r in e)t.push(r)
return t.reverse(),function r(){for(;t.length;){var a=t.pop()
if(a in e)return r.value=a,r.done=!1,r}return r.done=!0,r}},e.values=P,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(I),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=r)},stop:function(){this.done=!0
var e=this.tryEntries[0].completion
if("throw"===e.type)throw e.arg
return this.rval},dispatchException:function(e){if(this.done)throw e
var t=this
function a(a,n){return s.type="throw",s.arg=e,t.next=a,n&&(t.method="next",t.arg=r),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],s=o.completion
if("root"===o.tryLoc)return a("end")
if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc")
if(c&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)
if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally")
if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r]
if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a
break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null)
var o=i?i.completion:{}
return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg
return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t]
if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),I(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t]
if(r.tryLoc===e){var a=r.completion
if("throw"===a.type){var n=a.arg
I(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:P(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=r),m}},e}("object"===t(e)?e.exports:{})
try{regeneratorRuntime=r}catch(a){Function("r","regeneratorRuntime = r")(r)}}).call(this,r(4)(e))},function(e,t,r){"use strict"
e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,r){"use strict"
function a(e,t){for(var r=0;r<t.length;r++){var a=t[r]
a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,a=u(e)
if(t){var n=u(this).constructor
r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments)
return l(this,r)}}function l(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.arrayByteLength=T,t.arraysToBytes=function(e){var t=e.length
if(1===t&&e[0]instanceof Uint8Array)return e[0]
for(var r=0,a=0;a<t;a++)r+=T(e[a])
for(var n=0,i=new Uint8Array(r),o=0;o<t;o++){var s=e[o]
s instanceof Uint8Array||(s="string"==typeof s?O(s):new Uint8Array(s))
var c=s.byteLength
i.set(s,n),n+=c}return i},t.assert=g,t.bytesToString=function(e){g(null!==e&&"object"===n(e)&&void 0!==e.length,"Invalid argument for bytesToString")
var t=e.length,r=8192
if(t<r)return String.fromCharCode.apply(null,e)
for(var a=[],i=0;i<t;i+=r){var o=Math.min(i+r,t),s=e.subarray(i,o)
a.push(String.fromCharCode.apply(null,s))}return a.join("")},t.createPromiseCapability=function(){var e=Object.create(null),t=!1
return Object.defineProperty(e,"settled",{get:function(){return t}}),e.promise=new Promise((function(r,a){e.resolve=function(e){t=!0,r(e)},e.reject=function(e){t=!0,a(e)}})),e},t.escapeString=function(e){return e.replace(/([\(\)\\])/g,"\\$1")},t.getModificationDate=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date(Date.now()),t=[e.getUTCFullYear().toString(),(e.getUTCMonth()+1).toString().padStart(2,"0"),(e.getUTCDate()+1).toString().padStart(2,"0"),e.getUTCHours().toString().padStart(2,"0"),e.getUTCMinutes().toString().padStart(2,"0"),e.getUTCSeconds().toString().padStart(2,"0")]
return t.join("")},t.getVerbosityLevel=function(){return f},t.info=function(e){f>=h.INFOS&&console.log("Info: ".concat(e))},t.isArrayBuffer=function(e){return"object"===n(e)&&null!==e&&void 0!==e.byteLength},t.isArrayEqual=function(e,t){if(e.length!==t.length)return!1
return e.every((function(e,r){return e===t[r]}))},t.isBool=function(e){return"boolean"==typeof e},t.isNum=function(e){return"number"==typeof e},t.isString=function(e){return"string"==typeof e},t.isSameOrigin=function(e,t){var r
try{if(!(r=new URL(e)).origin||"null"===r.origin)return!1}catch(n){return!1}var a=new URL(t,r)
return r.origin===a.origin},t.createValidAbsoluteUrl=function(e,t){if(!e)return null
try{var r=t?new URL(e,t):new URL(e)
if(function(e){if(!e)return!1
switch(e.protocol){case"http:":case"https:":case"ftp:":case"mailto:":case"tel:":return!0
default:return!1}}(r))return r}catch(a){}return null},t.removeNullCharacters=function(e){if("string"!=typeof e)return d("The argument for removeNullCharacters must be a string."),e
return e.replace(A,"")},t.setVerbosityLevel=function(e){Number.isInteger(e)&&(f=e)},t.shadow=m,t.string32=function(e){return String.fromCharCode(e>>24&255,e>>16&255,e>>8&255,255&e)},t.stringToBytes=O,t.stringToPDFString=function(e){var t=e.length,r=[]
if("þ"===e[0]&&"ÿ"===e[1])for(var a=2;a<t;a+=2)r.push(String.fromCharCode(e.charCodeAt(a)<<8|e.charCodeAt(a+1)))
else if("ÿ"===e[0]&&"þ"===e[1])for(var n=2;n<t;n+=2)r.push(String.fromCharCode(e.charCodeAt(n+1)<<8|e.charCodeAt(n)))
else for(var i=0;i<t;++i){var o=F[e.charCodeAt(i)]
r.push(o?String.fromCharCode(o):e.charAt(i))}return r.join("")},t.stringToUTF8String=function(e){return decodeURIComponent(escape(e))},t.utf8StringToString=function(e){return unescape(encodeURIComponent(e))},t.warn=d,t.unreachable=p,t.IsEvalSupportedCached=t.IsLittleEndianCached=t.createObjectURL=t.FormatError=t.Util=t.UnknownErrorException=t.UnexpectedResponseException=t.TextRenderingMode=t.StreamType=t.PermissionFlag=t.PasswordResponses=t.PasswordException=t.MissingPDFException=t.InvalidPDFException=t.AbortException=t.CMapCompressionType=t.ImageKind=t.FontType=t.AnnotationType=t.AnnotationStateModelType=t.AnnotationReviewState=t.AnnotationReplyType=t.AnnotationMarkedState=t.AnnotationFlag=t.AnnotationFieldFlag=t.AnnotationBorderStyleType=t.UNSUPPORTED_FEATURES=t.VerbosityLevel=t.OPS=t.IDENTITY_MATRIX=t.FONT_IDENTITY_MATRIX=t.BaseException=void 0,r(6)
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
var h={ERRORS:0,WARNINGS:1,INFOS:5}
t.VerbosityLevel=h
t.CMapCompressionType={NONE:0,BINARY:1,STREAM:2}
t.OPS={dependency:1,setLineWidth:2,setLineCap:3,setLineJoin:4,setMiterLimit:5,setDash:6,setRenderingIntent:7,setFlatness:8,setGState:9,save:10,restore:11,transform:12,moveTo:13,lineTo:14,curveTo:15,curveTo2:16,curveTo3:17,closePath:18,rectangle:19,stroke:20,closeStroke:21,fill:22,eoFill:23,fillStroke:24,eoFillStroke:25,closeFillStroke:26,closeEOFillStroke:27,endPath:28,clip:29,eoClip:30,beginText:31,endText:32,setCharSpacing:33,setWordSpacing:34,setHScale:35,setLeading:36,setFont:37,setTextRenderingMode:38,setTextRise:39,moveText:40,setLeadingMoveText:41,setTextMatrix:42,nextLine:43,showText:44,showSpacedText:45,nextLineShowText:46,nextLineSetSpacingShowText:47,setCharWidth:48,setCharWidthAndBounds:49,setStrokeColorSpace:50,setFillColorSpace:51,setStrokeColor:52,setStrokeColorN:53,setFillColor:54,setFillColorN:55,setStrokeGray:56,setFillGray:57,setStrokeRGBColor:58,setFillRGBColor:59,setStrokeCMYKColor:60,setFillCMYKColor:61,shadingFill:62,beginInlineImage:63,beginImageData:64,endInlineImage:65,paintXObject:66,markPoint:67,markPointProps:68,beginMarkedContent:69,beginMarkedContentProps:70,endMarkedContent:71,beginCompat:72,endCompat:73,paintFormXObjectBegin:74,paintFormXObjectEnd:75,beginGroup:76,endGroup:77,beginAnnotations:78,endAnnotations:79,beginAnnotation:80,endAnnotation:81,paintJpegXObject:82,paintImageMaskXObject:83,paintImageMaskXObjectGroup:84,paintImageXObject:85,paintInlineImageXObject:86,paintInlineImageXObjectGroup:87,paintImageXObjectRepeat:88,paintImageMaskXObjectRepeat:89,paintSolidColorImageMask:90,constructPath:91}
t.UNSUPPORTED_FEATURES={unknown:"unknown",forms:"forms",javaScript:"javaScript",smask:"smask",shadingPattern:"shadingPattern",font:"font",errorTilingPattern:"errorTilingPattern",errorExtGState:"errorExtGState",errorXObject:"errorXObject",errorFontLoadType3:"errorFontLoadType3",errorFontState:"errorFontState",errorFontMissing:"errorFontMissing",errorFontTranslate:"errorFontTranslate",errorColorSpace:"errorColorSpace",errorOperatorList:"errorOperatorList",errorFontToUnicode:"errorFontToUnicode",errorFontLoadNative:"errorFontLoadNative",errorFontGetPath:"errorFontGetPath",errorMarkedContent:"errorMarkedContent"}
t.PasswordResponses={NEED_PASSWORD:1,INCORRECT_PASSWORD:2}
var f=h.WARNINGS
function d(e){f>=h.WARNINGS&&console.log("Warning: ".concat(e))}function p(e){throw new Error(e)}function g(e,t){e||p(t)}function m(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!1}),r}var v=function(){function e(t){this.constructor===e&&p("Cannot initialize BaseException."),this.message=t,this.name=this.constructor.name}return e.prototype=new Error,e.constructor=e,e}()
t.BaseException=v
var b=function(e){o(r,e)
var t=c(r)
function r(e,a){var n
return i(this,r),(n=t.call(this,e)).code=a,n}return r}(v)
t.PasswordException=b
var y=function(e){o(r,e)
var t=c(r)
function r(e,a){var n
return i(this,r),(n=t.call(this,e)).details=a,n}return r}(v)
t.UnknownErrorException=y
var w=function(e){o(r,e)
var t=c(r)
function r(){return i(this,r),t.apply(this,arguments)}return r}(v)
t.InvalidPDFException=w
var k=function(e){o(r,e)
var t=c(r)
function r(){return i(this,r),t.apply(this,arguments)}return r}(v)
t.MissingPDFException=k
var S=function(e){o(r,e)
var t=c(r)
function r(e,a){var n
return i(this,r),(n=t.call(this,e)).status=a,n}return r}(v)
t.UnexpectedResponseException=S
var x=function(e){o(r,e)
var t=c(r)
function r(){return i(this,r),t.apply(this,arguments)}return r}(v)
t.FormatError=x
var C=function(e){o(r,e)
var t=c(r)
function r(){return i(this,r),t.apply(this,arguments)}return r}(v)
t.AbortException=C
var A=/\x00/g
function O(e){g("string"==typeof e,"Invalid argument for stringToBytes")
for(var t=e.length,r=new Uint8Array(t),a=0;a<t;++a)r[a]=255&e.charCodeAt(a)
return r}function T(e){return void 0!==e.length?e.length:(g(void 0!==e.byteLength,"arrayByteLength - invalid argument."),e.byteLength)}var I={get value(){return m(this,"value",((e=new Uint8Array(4))[0]=1,1===new Uint32Array(e.buffer,0,1)[0]))
var e}}
t.IsLittleEndianCached=I
var E={get value(){return m(this,"value",function(){try{return new Function(""),!0}catch(e){return!1}}())}}
t.IsEvalSupportedCached=E
var P=["rgb(",0,",",0,",",0,")"],_=function(){function e(){i(this,e)}var t,r,n
return t=e,n=[{key:"makeCssRgb",value:function(e,t,r){return P[1]=e,P[3]=t,P[5]=r,P.join("")}},{key:"transform",value:function(e,t){return[e[0]*t[0]+e[2]*t[1],e[1]*t[0]+e[3]*t[1],e[0]*t[2]+e[2]*t[3],e[1]*t[2]+e[3]*t[3],e[0]*t[4]+e[2]*t[5]+e[4],e[1]*t[4]+e[3]*t[5]+e[5]]}},{key:"applyTransform",value:function(e,t){return[e[0]*t[0]+e[1]*t[2]+t[4],e[0]*t[1]+e[1]*t[3]+t[5]]}},{key:"applyInverseTransform",value:function(e,t){var r=t[0]*t[3]-t[1]*t[2]
return[(e[0]*t[3]-e[1]*t[2]+t[2]*t[5]-t[4]*t[3])/r,(-e[0]*t[1]+e[1]*t[0]+t[4]*t[1]-t[5]*t[0])/r]}},{key:"getAxialAlignedBoundingBox",value:function(t,r){var a=e.applyTransform(t,r),n=e.applyTransform(t.slice(2,4),r),i=e.applyTransform([t[0],t[3]],r),o=e.applyTransform([t[2],t[1]],r)
return[Math.min(a[0],n[0],i[0],o[0]),Math.min(a[1],n[1],i[1],o[1]),Math.max(a[0],n[0],i[0],o[0]),Math.max(a[1],n[1],i[1],o[1])]}},{key:"inverseTransform",value:function(e){var t=e[0]*e[3]-e[1]*e[2]
return[e[3]/t,-e[1]/t,-e[2]/t,e[0]/t,(e[2]*e[5]-e[4]*e[3])/t,(e[4]*e[1]-e[5]*e[0])/t]}},{key:"apply3dTransform",value:function(e,t){return[e[0]*t[0]+e[1]*t[1]+e[2]*t[2],e[3]*t[0]+e[4]*t[1]+e[5]*t[2],e[6]*t[0]+e[7]*t[1]+e[8]*t[2]]}},{key:"singularValueDecompose2dScale",value:function(e){var t=[e[0],e[2],e[1],e[3]],r=e[0]*t[0]+e[1]*t[2],a=e[0]*t[1]+e[1]*t[3],n=e[2]*t[0]+e[3]*t[2],i=e[2]*t[1]+e[3]*t[3],o=(r+i)/2,s=Math.sqrt((r+i)*(r+i)-4*(r*i-n*a))/2,c=o+s||1,l=o-s||1
return[Math.sqrt(c),Math.sqrt(l)]}},{key:"normalizeRect",value:function(e){var t=e.slice(0)
return e[0]>e[2]&&(t[0]=e[2],t[2]=e[0]),e[1]>e[3]&&(t[1]=e[3],t[3]=e[1]),t}},{key:"intersect",value:function(t,r){function a(e,t){return e-t}var n=[t[0],t[2],r[0],r[2]].sort(a),i=[t[1],t[3],r[1],r[3]].sort(a),o=[]
return t=e.normalizeRect(t),r=e.normalizeRect(r),n[0]===t[0]&&n[1]===r[0]||n[0]===r[0]&&n[1]===t[0]?(o[0]=n[1],o[2]=n[2],i[0]===t[1]&&i[1]===r[1]||i[0]===r[1]&&i[1]===t[1]?(o[1]=i[1],o[3]=i[2],o):null):null}}],(r=null)&&a(t.prototype,r),n&&a(t,n),e}()
t.Util=_
var F=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,728,711,710,729,733,731,730,732,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8226,8224,8225,8230,8212,8211,402,8260,8249,8250,8722,8240,8222,8220,8221,8216,8217,8218,8482,64257,64258,321,338,352,376,381,305,322,339,353,382,0,8364]
var R,B=(R="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2]
if(!r&&URL.createObjectURL){var a=new Blob([e],{type:t})
return URL.createObjectURL(a)}for(var n="data:".concat(t,";base64,"),i=0,o=e.length;i<o;i+=3){var s=255&e[i],c=255&e[i+1],l=255&e[i+2],u=s>>2,h=(3&s)<<4|c>>4,f=i+1<o?(15&c)<<2|l>>6:64,d=i+2<o?63&l:64
n+=R[u]+R[h]+R[f]+R[d]}return n})
t.createObjectURL=B},function(e,t,r){"use strict"
var a=r(7)
function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}if("undefined"==typeof globalThis||!globalThis._pdfjsCompatibilityChecked){"undefined"!=typeof globalThis&&globalThis.Math===Math||(globalThis=r(8)),globalThis._pdfjsCompatibilityChecked=!0
var i="object"===("undefined"==typeof window?"undefined":n(window))&&"object"===("undefined"==typeof document?"undefined":n(document)),o="undefined"!=typeof navigator&&navigator.userAgent||"",s=/Trident/.test(o)
!globalThis.btoa&&a.isNodeJS&&(globalThis.btoa=function(e){return Buffer.from(e,"binary").toString("base64")}),!globalThis.atob&&a.isNodeJS&&(globalThis.atob=function(e){return Buffer.from(e,"base64").toString("binary")}),i&&void 0===Element.prototype.remove&&(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)}),function(){if(i&&!a.isNodeJS){var e=document.createElement("div")
if(e.classList.add("testOne","testTwo"),!0!==e.classList.contains("testOne")||!0!==e.classList.contains("testTwo")){var t=DOMTokenList.prototype.add,r=DOMTokenList.prototype.remove
DOMTokenList.prototype.add=function(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a]
for(var n=0,i=r;n<i.length;n++){var o=i[n]
t.call(this,o)}},DOMTokenList.prototype.remove=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a]
for(var n=0,i=t;n<i.length;n++){var o=i[n]
r.call(this,o)}}}}}(),i&&!a.isNodeJS&&!1!==document.createElement("div").classList.toggle("test",0)&&(DOMTokenList.prototype.toggle=function(e){var t=arguments.length>1?!!arguments[1]:!this.contains(e)
return this[t?"add":"remove"](e),t}),function(){if(i&&s){var e=window.history.pushState,t=window.history.replaceState
window.history.pushState=function(t,r,a){var n=void 0===a?[t,r]:[t,r,a]
e.apply(this,n)},window.history.replaceState=function(e,r,a){var n=void 0===a?[e,r]:[e,r,a]
t.apply(this,n)}}}(),String.prototype.startsWith||r(53),String.prototype.endsWith||r(64),String.prototype.includes||r(66),Array.prototype.includes||r(68),Array.from||r(76),Object.assign||r(98),Object.fromEntries||r(101),Math.log2||(Math.log2=r(105)),Number.isNaN||(Number.isNaN=r(107)),Number.isInteger||(Number.isInteger=r(109)),Uint8Array.prototype.slice||r(112),globalThis.Promise&&globalThis.Promise.allSettled||(globalThis.Promise=r(117)),globalThis.URL=r(138),function(){var e=!1
if("undefined"!=typeof ReadableStream)try{new ReadableStream({start:function(e){e.close()}}),e=!0}catch(t){}e||(globalThis.ReadableStream=r(145).ReadableStream)}(),globalThis.Map&&globalThis.Map.prototype.entries||(globalThis.Map=r(146)),globalThis.Set&&globalThis.Set.prototype.entries||(globalThis.Set=r(153)),globalThis.WeakMap||(globalThis.WeakMap=r(155)),globalThis.WeakSet||(globalThis.WeakSet=r(161)),String.prototype.codePointAt||r(163),String.fromCodePoint||(String.fromCodePoint=r(165)),globalThis.Symbol||r(167),String.prototype.padStart||r(190),String.prototype.padEnd||r(195),Object.values||(Object.values=r(197))
Object.entries||(Object.entries=r(200))}},function(e,t,r){"use strict"
function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.isNodeJS=void 0
var n=!("object"!==("undefined"==typeof process?"undefined":a(process))||process+""!="[object process]"||process.versions.nw||process.versions.electron&&process.type&&"browser"!==process.type)
t.isNodeJS=n},function(e,t,r){r(9),e.exports=r(11)},function(e,t,r){r(10)({global:!0},{globalThis:r(11)})},function(e,t,r){var a=r(11),n=r(12).f,i=r(26),o=r(29),s=r(30),c=r(40),l=r(52)
e.exports=function(e,t){var r,u,h,f,d,p=e.target,g=e.global,m=e.stat
if(r=g?a:m?a[p]||s(p,{}):(a[p]||{}).prototype)for(u in t){if(f=t[u],h=e.noTargetGet?(d=n(r,u))&&d.value:r[u],!l(g?u:p+(m?".":"#")+u,e.forced)&&void 0!==h){if(typeof f==typeof h)continue
c(f,h)}(e.sham||h&&h.sham)&&i(f,"sham",!0),o(r,u,f,e)}}},function(e,t){var r=function(e){return e&&e.Math==Math&&e}
e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof global&&global)||Function("return this")()},function(e,t,r){var a=r(13),n=r(15),i=r(16),o=r(17),s=r(21),c=r(23),l=r(24),u=Object.getOwnPropertyDescriptor
t.f=a?u:function(e,t){if(e=o(e),t=s(t,!0),l)try{return u(e,t)}catch(r){}if(c(e,t))return i(!n.f.call(e,t),e[t])}},function(e,t,r){var a=r(14)
e.exports=!a((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},function(e,t,r){"use strict"
var a={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,i=n&&!a.call({1:2},1)
t.f=i?function(e){var t=n(this,e)
return!!t&&t.enumerable}:a},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,r){var a=r(18),n=r(20)
e.exports=function(e){return a(n(e))}},function(e,t,r){var a=r(14),n=r(19),i="".split
e.exports=a((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==n(e)?i.call(e,""):Object(e)}:Object},function(e,t){var r={}.toString
e.exports=function(e){return r.call(e).slice(8,-1)}},function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on "+e)
return e}},function(e,t,r){var a=r(22)
e.exports=function(e,t){if(!a(e))return e
var r,n
if(t&&"function"==typeof(r=e.toString)&&!a(n=r.call(e)))return n
if("function"==typeof(r=e.valueOf)&&!a(n=r.call(e)))return n
if(!t&&"function"==typeof(r=e.toString)&&!a(n=r.call(e)))return n
throw TypeError("Can't convert object to primitive value")}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t){var r={}.hasOwnProperty
e.exports=function(e,t){return r.call(e,t)}},function(e,t,r){var a=r(13),n=r(14),i=r(25)
e.exports=!a&&!n((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(e,t,r){var a=r(11),n=r(22),i=a.document,o=n(i)&&n(i.createElement)
e.exports=function(e){return o?i.createElement(e):{}}},function(e,t,r){var a=r(13),n=r(27),i=r(16)
e.exports=a?function(e,t,r){return n.f(e,t,i(1,r))}:function(e,t,r){return e[t]=r,e}},function(e,t,r){var a=r(13),n=r(24),i=r(28),o=r(21),s=Object.defineProperty
t.f=a?s:function(e,t,r){if(i(e),t=o(t,!0),i(r),n)try{return s(e,t,r)}catch(a){}if("get"in r||"set"in r)throw TypeError("Accessors not supported")
return"value"in r&&(e[t]=r.value),e}},function(e,t,r){var a=r(22)
e.exports=function(e){if(!a(e))throw TypeError(String(e)+" is not an object")
return e}},function(e,t,r){var a=r(11),n=r(26),i=r(23),o=r(30),s=r(31),c=r(33),l=c.get,u=c.enforce,h=String(String).split("String");(e.exports=function(e,t,r,s){var c=!!s&&!!s.unsafe,l=!!s&&!!s.enumerable,f=!!s&&!!s.noTargetGet
"function"==typeof r&&("string"!=typeof t||i(r,"name")||n(r,"name",t),u(r).source=h.join("string"==typeof t?t:"")),e!==a?(c?!f&&e[t]&&(l=!0):delete e[t],l?e[t]=r:n(e,t,r)):l?e[t]=r:o(t,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&l(this).source||s(this)}))},function(e,t,r){var a=r(11),n=r(26)
e.exports=function(e,t){try{n(a,e,t)}catch(r){a[e]=t}return t}},function(e,t,r){var a=r(32),n=Function.toString
"function"!=typeof a.inspectSource&&(a.inspectSource=function(e){return n.call(e)}),e.exports=a.inspectSource},function(e,t,r){var a=r(11),n=r(30),i="__core-js_shared__",o=a[i]||n(i,{})
e.exports=o},function(e,t,r){var a,n,i,o=r(34),s=r(11),c=r(22),l=r(26),u=r(23),h=r(35),f=r(39),d=s.WeakMap
if(o){var p=new d,g=p.get,m=p.has,v=p.set
a=function(e,t){return v.call(p,e,t),t},n=function(e){return g.call(p,e)||{}},i=function(e){return m.call(p,e)}}else{var b=h("state")
f[b]=!0,a=function(e,t){return l(e,b,t),t},n=function(e){return u(e,b)?e[b]:{}},i=function(e){return u(e,b)}}e.exports={set:a,get:n,has:i,enforce:function(e){return i(e)?n(e):a(e,{})},getterFor:function(e){return function(t){var r
if(!c(t)||(r=n(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required")
return r}}}},function(e,t,r){var a=r(11),n=r(31),i=a.WeakMap
e.exports="function"==typeof i&&/native code/.test(n(i))},function(e,t,r){var a=r(36),n=r(38),i=a("keys")
e.exports=function(e){return i[e]||(i[e]=n(e))}},function(e,t,r){var a=r(37),n=r(32);(e.exports=function(e,t){return n[e]||(n[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.6.5",mode:a?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(e,t){e.exports=!1},function(e,t){var r=0,a=Math.random()
e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++r+a).toString(36)}},function(e,t){e.exports={}},function(e,t,r){var a=r(23),n=r(41),i=r(12),o=r(27)
e.exports=function(e,t){for(var r=n(t),s=o.f,c=i.f,l=0;l<r.length;l++){var u=r[l]
a(e,u)||s(e,u,c(t,u))}}},function(e,t,r){var a=r(42),n=r(44),i=r(51),o=r(28)
e.exports=a("Reflect","ownKeys")||function(e){var t=n.f(o(e)),r=i.f
return r?t.concat(r(e)):t}},function(e,t,r){var a=r(43),n=r(11),i=function(e){return"function"==typeof e?e:void 0}
e.exports=function(e,t){return arguments.length<2?i(a[e])||i(n[e]):a[e]&&a[e][t]||n[e]&&n[e][t]}},function(e,t,r){var a=r(11)
e.exports=a},function(e,t,r){var a=r(45),n=r(50).concat("length","prototype")
t.f=Object.getOwnPropertyNames||function(e){return a(e,n)}},function(e,t,r){var a=r(23),n=r(17),i=r(46).indexOf,o=r(39)
e.exports=function(e,t){var r,s=n(e),c=0,l=[]
for(r in s)!a(o,r)&&a(s,r)&&l.push(r)
for(;t.length>c;)a(s,r=t[c++])&&(~i(l,r)||l.push(r))
return l}},function(e,t,r){var a=r(17),n=r(47),i=r(49),o=function(e){return function(t,r,o){var s,c=a(t),l=n(c.length),u=i(o,l)
if(e&&r!=r){for(;l>u;)if((s=c[u++])!=s)return!0}else for(;l>u;u++)if((e||u in c)&&c[u]===r)return e||u||0
return!e&&-1}}
e.exports={includes:o(!0),indexOf:o(!1)}},function(e,t,r){var a=r(48),n=Math.min
e.exports=function(e){return e>0?n(a(e),9007199254740991):0}},function(e,t){var r=Math.ceil,a=Math.floor
e.exports=function(e){return isNaN(e=+e)?0:(e>0?a:r)(e)}},function(e,t,r){var a=r(48),n=Math.max,i=Math.min
e.exports=function(e,t){var r=a(e)
return r<0?n(r+t,0):i(r,t)}},function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(e,t){t.f=Object.getOwnPropertySymbols},function(e,t,r){var a=r(14),n=/#|\.prototype\./,i=function(e,t){var r=s[o(e)]
return r==l||r!=c&&("function"==typeof t?a(t):!!t)},o=i.normalize=function(e){return String(e).replace(n,".").toLowerCase()},s=i.data={},c=i.NATIVE="N",l=i.POLYFILL="P"
e.exports=i},function(e,t,r){r(54)
var a=r(61)
e.exports=a("String","startsWith")},function(e,t,r){"use strict"
var a,n=r(10),i=r(12).f,o=r(47),s=r(55),c=r(20),l=r(60),u=r(37),h="".startsWith,f=Math.min,d=l("startsWith")
n({target:"String",proto:!0,forced:!!(u||d||(a=i(String.prototype,"startsWith"),!a||a.writable))&&!d},{startsWith:function(e){var t=String(c(this))
s(e)
var r=o(f(arguments.length>1?arguments[1]:void 0,t.length)),a=String(e)
return h?h.call(t,a,r):t.slice(r,r+a.length)===a}})},function(e,t,r){var a=r(56)
e.exports=function(e){if(a(e))throw TypeError("The method doesn't accept regular expressions")
return e}},function(e,t,r){var a=r(22),n=r(19),i=r(57)("match")
e.exports=function(e){var t
return a(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==n(e))}},function(e,t,r){var a=r(11),n=r(36),i=r(23),o=r(38),s=r(58),c=r(59),l=n("wks"),u=a.Symbol,h=c?u:u&&u.withoutSetter||o
e.exports=function(e){return i(l,e)||(s&&i(u,e)?l[e]=u[e]:l[e]=h("Symbol."+e)),l[e]}},function(e,t,r){var a=r(14)
e.exports=!!Object.getOwnPropertySymbols&&!a((function(){return!String(Symbol())}))},function(e,t,r){var a=r(58)
e.exports=a&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(e,t,r){var a=r(57)("match")
e.exports=function(e){var t=/./
try{"/./"[e](t)}catch(r){try{return t[a]=!1,"/./"[e](t)}catch(n){}}return!1}},function(e,t,r){var a=r(11),n=r(62),i=Function.call
e.exports=function(e,t,r){return n(i,a[e].prototype[t],r)}},function(e,t,r){var a=r(63)
e.exports=function(e,t,r){if(a(e),void 0===t)return e
switch(r){case 0:return function(){return e.call(t)}
case 1:return function(r){return e.call(t,r)}
case 2:return function(r,a){return e.call(t,r,a)}
case 3:return function(r,a,n){return e.call(t,r,a,n)}}return function(){return e.apply(t,arguments)}}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function")
return e}},function(e,t,r){r(65)
var a=r(61)
e.exports=a("String","endsWith")},function(e,t,r){"use strict"
var a,n=r(10),i=r(12).f,o=r(47),s=r(55),c=r(20),l=r(60),u=r(37),h="".endsWith,f=Math.min,d=l("endsWith")
n({target:"String",proto:!0,forced:!!(u||d||(a=i(String.prototype,"endsWith"),!a||a.writable))&&!d},{endsWith:function(e){var t=String(c(this))
s(e)
var r=arguments.length>1?arguments[1]:void 0,a=o(t.length),n=void 0===r?a:f(o(r),a),i=String(e)
return h?h.call(t,i,n):t.slice(n-i.length,n)===i}})},function(e,t,r){r(67)
var a=r(61)
e.exports=a("String","includes")},function(e,t,r){"use strict"
var a=r(10),n=r(55),i=r(20)
a({target:"String",proto:!0,forced:!r(60)("includes")},{includes:function(e){return!!~String(i(this)).indexOf(n(e),arguments.length>1?arguments[1]:void 0)}})},function(e,t,r){r(69)
var a=r(61)
e.exports=a("Array","includes")},function(e,t,r){"use strict"
var a=r(10),n=r(46).includes,i=r(70)
a({target:"Array",proto:!0,forced:!r(75)("indexOf",{ACCESSORS:!0,1:0})},{includes:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),i("includes")},function(e,t,r){var a=r(57),n=r(71),i=r(27),o=a("unscopables"),s=Array.prototype
null==s[o]&&i.f(s,o,{configurable:!0,value:n(null)}),e.exports=function(e){s[o][e]=!0}},function(e,t,r){var a,n=r(28),i=r(72),o=r(50),s=r(39),c=r(74),l=r(25),u=r(35),h=u("IE_PROTO"),f=function(){},d=function(e){return"<script>"+e+"</"+"script>"},p=function(){try{a=document.domain&&new ActiveXObject("htmlfile")}catch(n){}var e,t
p=a?function(e){e.write(d("")),e.close()
var t=e.parentWindow.Object
return e=null,t}(a):((t=l("iframe")).style.display="none",c.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(d("document.F=Object")),e.close(),e.F)
for(var r=o.length;r--;)delete p.prototype[o[r]]
return p()}
s[h]=!0,e.exports=Object.create||function(e,t){var r
return null!==e?(f.prototype=n(e),r=new f,f.prototype=null,r[h]=e):r=p(),void 0===t?r:i(r,t)}},function(e,t,r){var a=r(13),n=r(27),i=r(28),o=r(73)
e.exports=a?Object.defineProperties:function(e,t){i(e)
for(var r,a=o(t),s=a.length,c=0;s>c;)n.f(e,r=a[c++],t[r])
return e}},function(e,t,r){var a=r(45),n=r(50)
e.exports=Object.keys||function(e){return a(e,n)}},function(e,t,r){var a=r(42)
e.exports=a("document","documentElement")},function(e,t,r){var a=r(13),n=r(14),i=r(23),o=Object.defineProperty,s={},c=function(e){throw e}
e.exports=function(e,t){if(i(s,e))return s[e]
t||(t={})
var r=[][e],l=!!i(t,"ACCESSORS")&&t.ACCESSORS,u=i(t,0)?t[0]:c,h=i(t,1)?t[1]:void 0
return s[e]=!!r&&!n((function(){if(l&&!a)return!0
var e={length:-1}
l?o(e,1,{enumerable:!0,get:c}):e[1]=1,r.call(e,u,h)}))}},function(e,t,r){r(77),r(89)
var a=r(43)
e.exports=a.Array.from},function(e,t,r){"use strict"
var a=r(78).charAt,n=r(33),i=r(79),o="String Iterator",s=n.set,c=n.getterFor(o)
i(String,"String",(function(e){s(this,{type:o,string:String(e),index:0})}),(function(){var e,t=c(this),r=t.string,n=t.index
return n>=r.length?{value:void 0,done:!0}:(e=a(r,n),t.index+=e.length,{value:e,done:!1})}))},function(e,t,r){var a=r(48),n=r(20),i=function(e){return function(t,r){var i,o,s=String(n(t)),c=a(r),l=s.length
return c<0||c>=l?e?"":void 0:(i=s.charCodeAt(c))<55296||i>56319||c+1===l||(o=s.charCodeAt(c+1))<56320||o>57343?e?s.charAt(c):i:e?s.slice(c,c+2):o-56320+(i-55296<<10)+65536}}
e.exports={codeAt:i(!1),charAt:i(!0)}},function(e,t,r){"use strict"
var a=r(10),n=r(80),i=r(82),o=r(87),s=r(85),c=r(26),l=r(29),u=r(57),h=r(37),f=r(86),d=r(81),p=d.IteratorPrototype,g=d.BUGGY_SAFARI_ITERATORS,m=u("iterator"),v="keys",b="values",y="entries",w=function(){return this}
e.exports=function(e,t,r,u,d,k,S){n(r,t,u)
var x,C,A,O=function(e){if(e===d&&_)return _
if(!g&&e in E)return E[e]
switch(e){case v:case b:case y:return function(){return new r(this,e)}}return function(){return new r(this)}},T=t+" Iterator",I=!1,E=e.prototype,P=E[m]||E["@@iterator"]||d&&E[d],_=!g&&P||O(d),F="Array"==t&&E.entries||P
if(F&&(x=i(F.call(new e)),p!==Object.prototype&&x.next&&(h||i(x)===p||(o?o(x,p):"function"!=typeof x[m]&&c(x,m,w)),s(x,T,!0,!0),h&&(f[T]=w))),d==b&&P&&P.name!==b&&(I=!0,_=function(){return P.call(this)}),h&&!S||E[m]===_||c(E,m,_),f[t]=_,d)if(C={values:O(b),keys:k?_:O(v),entries:O(y)},S)for(A in C)(g||I||!(A in E))&&l(E,A,C[A])
else a({target:t,proto:!0,forced:g||I},C)
return C}},function(e,t,r){"use strict"
var a=r(81).IteratorPrototype,n=r(71),i=r(16),o=r(85),s=r(86),c=function(){return this}
e.exports=function(e,t,r){var l=t+" Iterator"
return e.prototype=n(a,{next:i(1,r)}),o(e,l,!1,!0),s[l]=c,e}},function(e,t,r){"use strict"
var a,n,i,o=r(82),s=r(26),c=r(23),l=r(57),u=r(37),h=l("iterator"),f=!1;[].keys&&("next"in(i=[].keys())?(n=o(o(i)))!==Object.prototype&&(a=n):f=!0),null==a&&(a={}),u||c(a,h)||s(a,h,(function(){return this})),e.exports={IteratorPrototype:a,BUGGY_SAFARI_ITERATORS:f}},function(e,t,r){var a=r(23),n=r(83),i=r(35),o=r(84),s=i("IE_PROTO"),c=Object.prototype
e.exports=o?Object.getPrototypeOf:function(e){return e=n(e),a(e,s)?e[s]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?c:null}},function(e,t,r){var a=r(20)
e.exports=function(e){return Object(a(e))}},function(e,t,r){var a=r(14)
e.exports=!a((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},function(e,t,r){var a=r(27).f,n=r(23),i=r(57)("toStringTag")
e.exports=function(e,t,r){e&&!n(e=r?e:e.prototype,i)&&a(e,i,{configurable:!0,value:t})}},function(e,t){e.exports={}},function(e,t,r){var a=r(28),n=r(88)
e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,r={}
try{(e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(r,[]),t=r instanceof Array}catch(i){}return function(r,i){return a(r),n(i),t?e.call(r,i):r.__proto__=i,r}}():void 0)},function(e,t,r){var a=r(22)
e.exports=function(e){if(!a(e)&&null!==e)throw TypeError("Can't set "+String(e)+" as a prototype")
return e}},function(e,t,r){var a=r(10),n=r(90)
a({target:"Array",stat:!0,forced:!r(97)((function(e){Array.from(e)}))},{from:n})},function(e,t,r){"use strict"
var a=r(62),n=r(83),i=r(91),o=r(92),s=r(47),c=r(93),l=r(94)
e.exports=function(e){var t,r,u,h,f,d,p=n(e),g="function"==typeof this?this:Array,m=arguments.length,v=m>1?arguments[1]:void 0,b=void 0!==v,y=l(p),w=0
if(b&&(v=a(v,m>2?arguments[2]:void 0,2)),null==y||g==Array&&o(y))for(r=new g(t=s(p.length));t>w;w++)d=b?v(p[w],w):p[w],c(r,w,d)
else for(f=(h=y.call(p)).next,r=new g;!(u=f.call(h)).done;w++)d=b?i(h,v,[u.value,w],!0):u.value,c(r,w,d)
return r.length=w,r}},function(e,t,r){var a=r(28)
e.exports=function(e,t,r,n){try{return n?t(a(r)[0],r[1]):t(r)}catch(o){var i=e.return
throw void 0!==i&&a(i.call(e)),o}}},function(e,t,r){var a=r(57),n=r(86),i=a("iterator"),o=Array.prototype
e.exports=function(e){return void 0!==e&&(n.Array===e||o[i]===e)}},function(e,t,r){"use strict"
var a=r(21),n=r(27),i=r(16)
e.exports=function(e,t,r){var o=a(t)
o in e?n.f(e,o,i(0,r)):e[o]=r}},function(e,t,r){var a=r(95),n=r(86),i=r(57)("iterator")
e.exports=function(e){if(null!=e)return e[i]||e["@@iterator"]||n[a(e)]}},function(e,t,r){var a=r(96),n=r(19),i=r(57)("toStringTag"),o="Arguments"==n(function(){return arguments}())
e.exports=a?n:function(e){var t,r,a
return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=function(e,t){try{return e[t]}catch(r){}}(t=Object(e),i))?r:o?n(t):"Object"==(a=n(t))&&"function"==typeof t.callee?"Arguments":a}},function(e,t,r){var a={}
a[r(57)("toStringTag")]="z",e.exports="[object z]"===String(a)},function(e,t,r){var a=r(57)("iterator"),n=!1
try{var i=0,o={next:function(){return{done:!!i++}},return:function(){n=!0}}
o[a]=function(){return this},Array.from(o,(function(){throw 2}))}catch(s){}e.exports=function(e,t){if(!t&&!n)return!1
var r=!1
try{var i={}
i[a]=function(){return{next:function(){return{done:r=!0}}}},e(i)}catch(s){}return r}},function(e,t,r){r(99)
var a=r(43)
e.exports=a.Object.assign},function(e,t,r){var a=r(10),n=r(100)
a({target:"Object",stat:!0,forced:Object.assign!==n},{assign:n})},function(e,t,r){"use strict"
var a=r(13),n=r(14),i=r(73),o=r(51),s=r(15),c=r(83),l=r(18),u=Object.assign,h=Object.defineProperty
e.exports=!u||n((function(){if(a&&1!==u({b:1},u(h({},"a",{enumerable:!0,get:function(){h(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0
var e={},t={},r=Symbol(),n="abcdefghijklmnopqrst"
return e[r]=7,n.split("").forEach((function(e){t[e]=e})),7!=u({},e)[r]||i(u({},t)).join("")!=n}))?function(e,t){for(var r=c(e),n=arguments.length,u=1,h=o.f,f=s.f;n>u;)for(var d,p=l(arguments[u++]),g=h?i(p).concat(h(p)):i(p),m=g.length,v=0;m>v;)d=g[v++],a&&!f.call(p,d)||(r[d]=p[d])
return r}:u},function(e,t,r){r(102),r(103)
var a=r(43)
e.exports=a.Object.fromEntries},function(e,t,r){"use strict"
var a=r(17),n=r(70),i=r(86),o=r(33),s=r(79),c="Array Iterator",l=o.set,u=o.getterFor(c)
e.exports=s(Array,"Array",(function(e,t){l(this,{type:c,target:a(e),index:0,kind:t})}),(function(){var e=u(this),t=e.target,r=e.kind,a=e.index++
return!t||a>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==r?{value:a,done:!1}:"values"==r?{value:t[a],done:!1}:{value:[a,t[a]],done:!1}}),"values"),i.Arguments=i.Array,n("keys"),n("values"),n("entries")},function(e,t,r){var a=r(10),n=r(104),i=r(93)
a({target:"Object",stat:!0},{fromEntries:function(e){var t={}
return n(e,(function(e,r){i(t,e,r)}),void 0,!0),t}})},function(e,t,r){var a=r(28),n=r(92),i=r(47),o=r(62),s=r(94),c=r(91),l=function(e,t){this.stopped=e,this.result=t};(e.exports=function(e,t,r,u,h){var f,d,p,g,m,v,b,y=o(t,r,u?2:1)
if(h)f=e
else{if("function"!=typeof(d=s(e)))throw TypeError("Target is not iterable")
if(n(d)){for(p=0,g=i(e.length);g>p;p++)if((m=u?y(a(b=e[p])[0],b[1]):y(e[p]))&&m instanceof l)return m
return new l(!1)}f=d.call(e)}for(v=f.next;!(b=v.call(f)).done;)if("object"==typeof(m=c(f,y,b.value,u))&&m&&m instanceof l)return m
return new l(!1)}).stop=function(e){return new l(!0,e)}},function(e,t,r){r(106)
var a=r(43)
e.exports=a.Math.log2},function(e,t,r){var a=r(10),n=Math.log,i=Math.LN2
a({target:"Math",stat:!0},{log2:function(e){return n(e)/i}})},function(e,t,r){r(108)
var a=r(43)
e.exports=a.Number.isNaN},function(e,t,r){r(10)({target:"Number",stat:!0},{isNaN:function(e){return e!=e}})},function(e,t,r){r(110)
var a=r(43)
e.exports=a.Number.isInteger},function(e,t,r){r(10)({target:"Number",stat:!0},{isInteger:r(111)})},function(e,t,r){var a=r(22),n=Math.floor
e.exports=function(e){return!a(e)&&isFinite(e)&&n(e)===e}},function(e,t,r){r(113)},function(e,t,r){"use strict"
var a=r(114),n=r(116),i=r(14),o=a.aTypedArray,s=a.aTypedArrayConstructor,c=a.exportTypedArrayMethod,l=[].slice
c("slice",(function(e,t){for(var r=l.call(o(this),e,t),a=n(this,this.constructor),i=0,c=r.length,u=new(s(a))(c);c>i;)u[i]=r[i++]
return u}),i((function(){new Int8Array(1).slice()})))},function(e,t,r){"use strict"
var a,n=r(115),i=r(13),o=r(11),s=r(22),c=r(23),l=r(95),u=r(26),h=r(29),f=r(27).f,d=r(82),p=r(87),g=r(57),m=r(38),v=o.Int8Array,b=v&&v.prototype,y=o.Uint8ClampedArray,w=y&&y.prototype,k=v&&d(v),S=b&&d(b),x=Object.prototype,C=x.isPrototypeOf,A=g("toStringTag"),O=m("TYPED_ARRAY_TAG"),T=n&&!!p&&"Opera"!==l(o.opera),I=!1,E={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},P=function(e){return s(e)&&c(E,l(e))}
for(a in E)o[a]||(T=!1)
if((!T||"function"!=typeof k||k===Function.prototype)&&(k=function(){throw TypeError("Incorrect invocation")},T))for(a in E)o[a]&&p(o[a],k)
if((!T||!S||S===x)&&(S=k.prototype,T))for(a in E)o[a]&&p(o[a].prototype,S)
if(T&&d(w)!==S&&p(w,S),i&&!c(S,A))for(a in I=!0,f(S,A,{get:function(){return s(this)?this[O]:void 0}}),E)o[a]&&u(o[a],O,a)
e.exports={NATIVE_ARRAY_BUFFER_VIEWS:T,TYPED_ARRAY_TAG:I&&O,aTypedArray:function(e){if(P(e))return e
throw TypeError("Target is not a typed array")},aTypedArrayConstructor:function(e){if(p){if(C.call(k,e))return e}else for(var t in E)if(c(E,a)){var r=o[t]
if(r&&(e===r||C.call(r,e)))return e}throw TypeError("Target is not a typed array constructor")},exportTypedArrayMethod:function(e,t,r){if(i){if(r)for(var a in E){var n=o[a]
n&&c(n.prototype,e)&&delete n.prototype[e]}S[e]&&!r||h(S,e,r?t:T&&b[e]||t)}},exportTypedArrayStaticMethod:function(e,t,r){var a,n
if(i){if(p){if(r)for(a in E)(n=o[a])&&c(n,e)&&delete n[e]
if(k[e]&&!r)return
try{return h(k,e,r?t:T&&v[e]||t)}catch(s){}}for(a in E)!(n=o[a])||n[e]&&!r||h(n,e,t)}},isView:function(e){var t=l(e)
return"DataView"===t||c(E,t)},isTypedArray:P,TypedArray:k,TypedArrayPrototype:S}},function(e,t){e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},function(e,t,r){var a=r(28),n=r(63),i=r(57)("species")
e.exports=function(e,t){var r,o=a(e).constructor
return void 0===o||null==(r=a(o)[i])?t:n(r)}},function(e,t,r){r(118),r(77),r(120),r(122),r(136),r(137)
var a=r(43)
e.exports=a.Promise},function(e,t,r){var a=r(96),n=r(29),i=r(119)
a||n(Object.prototype,"toString",i,{unsafe:!0})},function(e,t,r){"use strict"
var a=r(96),n=r(95)
e.exports=a?{}.toString:function(){return"[object "+n(this)+"]"}},function(e,t,r){var a=r(11),n=r(121),i=r(102),o=r(26),s=r(57),c=s("iterator"),l=s("toStringTag"),u=i.values
for(var h in n){var f=a[h],d=f&&f.prototype
if(d){if(d[c]!==u)try{o(d,c,u)}catch(g){d[c]=u}if(d[l]||o(d,l,h),n[h])for(var p in i)if(d[p]!==i[p])try{o(d,p,i[p])}catch(g){d[p]=i[p]}}}},function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(e,t,r){"use strict"
var a,n,i,o,s=r(10),c=r(37),l=r(11),u=r(42),h=r(123),f=r(29),d=r(124),p=r(85),g=r(125),m=r(22),v=r(63),b=r(126),y=r(19),w=r(31),k=r(104),S=r(97),x=r(116),C=r(127).set,A=r(130),O=r(131),T=r(133),I=r(132),E=r(134),P=r(33),_=r(52),F=r(57),R=r(135),B=F("species"),M="Promise",D=P.get,L=P.set,N=P.getterFor(M),U=h,j=l.TypeError,q=l.document,z=l.process,G=u("fetch"),H=I.f,W=H,X="process"==y(z),V=!!(q&&q.createEvent&&l.dispatchEvent),Y="unhandledrejection",K=_(M,(function(){if(!(w(U)!==String(U))){if(66===R)return!0
if(!X&&"function"!=typeof PromiseRejectionEvent)return!0}if(c&&!U.prototype.finally)return!0
if(R>=51&&/native code/.test(U))return!1
var e=U.resolve(1),t=function(e){e((function(){}),(function(){}))}
return(e.constructor={})[B]=t,!(e.then((function(){}))instanceof t)})),J=K||!S((function(e){U.all(e).catch((function(){}))})),Z=function(e){var t
return!(!m(e)||"function"!=typeof(t=e.then))&&t},Q=function(e,t,r){if(!t.notified){t.notified=!0
var a=t.reactions
A((function(){for(var n=t.value,i=1==t.state,o=0;a.length>o;){var s,c,l,u=a[o++],h=i?u.ok:u.fail,f=u.resolve,d=u.reject,p=u.domain
try{h?(i||(2===t.rejection&&re(e,t),t.rejection=1),!0===h?s=n:(p&&p.enter(),s=h(n),p&&(p.exit(),l=!0)),s===u.promise?d(j("Promise-chain cycle")):(c=Z(s))?c.call(s,f,d):f(s)):d(n)}catch(g){p&&!l&&p.exit(),d(g)}}t.reactions=[],t.notified=!1,r&&!t.rejection&&ee(e,t)}))}},$=function(e,t,r){var a,n
V?((a=q.createEvent("Event")).promise=t,a.reason=r,a.initEvent(e,!1,!0),l.dispatchEvent(a)):a={promise:t,reason:r},(n=l["on"+e])?n(a):e===Y&&T("Unhandled promise rejection",r)},ee=function(e,t){C.call(l,(function(){var r,a=t.value
if(te(t)&&(r=E((function(){X?z.emit("unhandledRejection",a,e):$(Y,e,a)})),t.rejection=X||te(t)?2:1,r.error))throw r.value}))},te=function(e){return 1!==e.rejection&&!e.parent},re=function(e,t){C.call(l,(function(){X?z.emit("rejectionHandled",e):$("rejectionhandled",e,t.value)}))},ae=function(e,t,r,a){return function(n){e(t,r,n,a)}},ne=function(e,t,r,a){t.done||(t.done=!0,a&&(t=a),t.value=r,t.state=2,Q(e,t,!0))},ie=function(e,t,r,a){if(!t.done){t.done=!0,a&&(t=a)
try{if(e===r)throw j("Promise can't be resolved itself")
var n=Z(r)
n?A((function(){var a={done:!1}
try{n.call(r,ae(ie,e,a,t),ae(ne,e,a,t))}catch(i){ne(e,a,i,t)}})):(t.value=r,t.state=1,Q(e,t,!1))}catch(i){ne(e,{done:!1},i,t)}}}
K&&(U=function(e){b(this,U,M),v(e),a.call(this)
var t=D(this)
try{e(ae(ie,this,t),ae(ne,this,t))}catch(r){ne(this,t,r)}},(a=function(e){L(this,{type:M,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=d(U.prototype,{then:function(e,t){var r=N(this),a=H(x(this,U))
return a.ok="function"!=typeof e||e,a.fail="function"==typeof t&&t,a.domain=X?z.domain:void 0,r.parent=!0,r.reactions.push(a),0!=r.state&&Q(this,r,!1),a.promise},catch:function(e){return this.then(void 0,e)}}),n=function(){var e=new a,t=D(e)
this.promise=e,this.resolve=ae(ie,e,t),this.reject=ae(ne,e,t)},I.f=H=function(e){return e===U||e===i?new n(e):W(e)},c||"function"!=typeof h||(o=h.prototype.then,f(h.prototype,"then",(function(e,t){var r=this
return new U((function(e,t){o.call(r,e,t)})).then(e,t)}),{unsafe:!0}),"function"==typeof G&&s({global:!0,enumerable:!0,forced:!0},{fetch:function(e){return O(U,G.apply(l,arguments))}}))),s({global:!0,wrap:!0,forced:K},{Promise:U}),p(U,M,!1,!0),g(M),i=u(M),s({target:M,stat:!0,forced:K},{reject:function(e){var t=H(this)
return t.reject.call(void 0,e),t.promise}}),s({target:M,stat:!0,forced:c||K},{resolve:function(e){return O(c&&this===i?U:this,e)}}),s({target:M,stat:!0,forced:J},{all:function(e){var t=this,r=H(t),a=r.resolve,n=r.reject,i=E((function(){var r=v(t.resolve),i=[],o=0,s=1
k(e,(function(e){var c=o++,l=!1
i.push(void 0),s++,r.call(t,e).then((function(e){l||(l=!0,i[c]=e,--s||a(i))}),n)})),--s||a(i)}))
return i.error&&n(i.value),r.promise},race:function(e){var t=this,r=H(t),a=r.reject,n=E((function(){var n=v(t.resolve)
k(e,(function(e){n.call(t,e).then(r.resolve,a)}))}))
return n.error&&a(n.value),r.promise}})},function(e,t,r){var a=r(11)
e.exports=a.Promise},function(e,t,r){var a=r(29)
e.exports=function(e,t,r){for(var n in t)a(e,n,t[n],r)
return e}},function(e,t,r){"use strict"
var a=r(42),n=r(27),i=r(57),o=r(13),s=i("species")
e.exports=function(e){var t=a(e),r=n.f
o&&t&&!t[s]&&r(t,s,{configurable:!0,get:function(){return this}})}},function(e,t){e.exports=function(e,t,r){if(!(e instanceof t))throw TypeError("Incorrect "+(r?r+" ":"")+"invocation")
return e}},function(e,t,r){var a,n,i,o=r(11),s=r(14),c=r(19),l=r(62),u=r(74),h=r(25),f=r(128),d=o.location,p=o.setImmediate,g=o.clearImmediate,m=o.process,v=o.MessageChannel,b=o.Dispatch,y=0,w={},k="onreadystatechange",S=function(e){if(w.hasOwnProperty(e)){var t=w[e]
delete w[e],t()}},x=function(e){return function(){S(e)}},C=function(e){S(e.data)},A=function(e){o.postMessage(e+"",d.protocol+"//"+d.host)}
p&&g||(p=function(e){for(var t=[],r=1;arguments.length>r;)t.push(arguments[r++])
return w[++y]=function(){("function"==typeof e?e:Function(e)).apply(void 0,t)},a(y),y},g=function(e){delete w[e]},"process"==c(m)?a=function(e){m.nextTick(x(e))}:b&&b.now?a=function(e){b.now(x(e))}:v&&!f?(i=(n=new v).port2,n.port1.onmessage=C,a=l(i.postMessage,i,1)):!o.addEventListener||"function"!=typeof postMessage||o.importScripts||s(A)||"file:"===d.protocol?a=k in h("script")?function(e){u.appendChild(h("script")).onreadystatechange=function(){u.removeChild(this),S(e)}}:function(e){setTimeout(x(e),0)}:(a=A,o.addEventListener("message",C,!1))),e.exports={set:p,clear:g}},function(e,t,r){var a=r(129)
e.exports=/(iphone|ipod|ipad).*applewebkit/i.test(a)},function(e,t,r){var a=r(42)
e.exports=a("navigator","userAgent")||""},function(e,t,r){var a,n,i,o,s,c,l,u,h=r(11),f=r(12).f,d=r(19),p=r(127).set,g=r(128),m=h.MutationObserver||h.WebKitMutationObserver,v=h.process,b=h.Promise,y="process"==d(v),w=f(h,"queueMicrotask"),k=w&&w.value
k||(a=function(){var e,t
for(y&&(e=v.domain)&&e.exit();n;){t=n.fn,n=n.next
try{t()}catch(r){throw n?o():i=void 0,r}}i=void 0,e&&e.enter()},y?o=function(){v.nextTick(a)}:m&&!g?(s=!0,c=document.createTextNode(""),new m(a).observe(c,{characterData:!0}),o=function(){c.data=s=!s}):b&&b.resolve?(l=b.resolve(void 0),u=l.then,o=function(){u.call(l,a)}):o=function(){p.call(h,a)}),e.exports=k||function(e){var t={fn:e,next:void 0}
i&&(i.next=t),n||(n=t,o()),i=t}},function(e,t,r){var a=r(28),n=r(22),i=r(132)
e.exports=function(e,t){if(a(e),n(t)&&t.constructor===e)return t
var r=i.f(e)
return(0,r.resolve)(t),r.promise}},function(e,t,r){"use strict"
var a=r(63),n=function(e){var t,r
this.promise=new e((function(e,a){if(void 0!==t||void 0!==r)throw TypeError("Bad Promise constructor")
t=e,r=a})),this.resolve=a(t),this.reject=a(r)}
e.exports.f=function(e){return new n(e)}},function(e,t,r){var a=r(11)
e.exports=function(e,t){var r=a.console
r&&r.error&&(1===arguments.length?r.error(e):r.error(e,t))}},function(e,t){e.exports=function(e){try{return{error:!1,value:e()}}catch(t){return{error:!0,value:t}}}},function(e,t,r){var a,n,i=r(11),o=r(129),s=i.process,c=s&&s.versions,l=c&&c.v8
l?n=(a=l.split("."))[0]+a[1]:o&&(!(a=o.match(/Edge\/(\d+)/))||a[1]>=74)&&(a=o.match(/Chrome\/(\d+)/))&&(n=a[1]),e.exports=n&&+n},function(e,t,r){"use strict"
var a=r(10),n=r(63),i=r(132),o=r(134),s=r(104)
a({target:"Promise",stat:!0},{allSettled:function(e){var t=this,r=i.f(t),a=r.resolve,c=r.reject,l=o((function(){var r=n(t.resolve),i=[],o=0,c=1
s(e,(function(e){var n=o++,s=!1
i.push(void 0),c++,r.call(t,e).then((function(e){s||(s=!0,i[n]={status:"fulfilled",value:e},--c||a(i))}),(function(e){s||(s=!0,i[n]={status:"rejected",reason:e},--c||a(i))}))})),--c||a(i)}))
return l.error&&c(l.value),r.promise}})},function(e,t,r){"use strict"
var a=r(10),n=r(37),i=r(123),o=r(14),s=r(42),c=r(116),l=r(131),u=r(29)
a({target:"Promise",proto:!0,real:!0,forced:!!i&&o((function(){i.prototype.finally.call({then:function(){}},(function(){}))}))},{finally:function(e){var t=c(this,s("Promise")),r="function"==typeof e
return this.then(r?function(r){return l(t,e()).then((function(){return r}))}:e,r?function(r){return l(t,e()).then((function(){throw r}))}:e)}}),n||"function"!=typeof i||i.prototype.finally||u(i.prototype,"finally",s("Promise").prototype.finally)},function(e,t,r){r(139),r(144),r(142)
var a=r(43)
e.exports=a.URL},function(e,t,r){"use strict"
r(77)
var a,n=r(10),i=r(13),o=r(140),s=r(11),c=r(72),l=r(29),u=r(126),h=r(23),f=r(100),d=r(90),p=r(78).codeAt,g=r(141),m=r(85),v=r(142),b=r(33),y=s.URL,w=v.URLSearchParams,k=v.getState,S=b.set,x=b.getterFor("URL"),C=Math.floor,A=Math.pow,O="Invalid scheme",T="Invalid host",I="Invalid port",E=/[A-Za-z]/,P=/[\d+-.A-Za-z]/,_=/\d/,F=/^(0x|0X)/,R=/^[0-7]+$/,B=/^\d+$/,M=/^[\dA-Fa-f]+$/,D=/[\u0000\u0009\u000A\u000D #%/:?@[\\]]/,L=/[\u0000\u0009\u000A\u000D #/:?@[\\]]/,N=/^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,U=/[\u0009\u000A\u000D]/g,j=function(e,t){var r,a,n
if("["==t.charAt(0)){if("]"!=t.charAt(t.length-1))return T
if(!(r=z(t.slice(1,-1))))return T
e.host=r}else if(J(e)){if(t=g(t),D.test(t))return T
if(null===(r=q(t)))return T
e.host=r}else{if(L.test(t))return T
for(r="",a=d(t),n=0;n<a.length;n++)r+=Y(a[n],H)
e.host=r}},q=function(e){var t,r,a,n,i,o,s,c=e.split(".")
if(c.length&&""==c[c.length-1]&&c.pop(),(t=c.length)>4)return e
for(r=[],a=0;a<t;a++){if(""==(n=c[a]))return e
if(i=10,n.length>1&&"0"==n.charAt(0)&&(i=F.test(n)?16:8,n=n.slice(8==i?1:2)),""===n)o=0
else{if(!(10==i?B:8==i?R:M).test(n))return e
o=parseInt(n,i)}r.push(o)}for(a=0;a<t;a++)if(o=r[a],a==t-1){if(o>=A(256,5-t))return null}else if(o>255)return null
for(s=r.pop(),a=0;a<r.length;a++)s+=r[a]*A(256,3-a)
return s},z=function(e){var t,r,a,n,i,o,s,c=[0,0,0,0,0,0,0,0],l=0,u=null,h=0,f=function(){return e.charAt(h)}
if(":"==f()){if(":"!=e.charAt(1))return
h+=2,u=++l}for(;f();){if(8==l)return
if(":"!=f()){for(t=r=0;r<4&&M.test(f());)t=16*t+parseInt(f(),16),h++,r++
if("."==f()){if(0==r)return
if(h-=r,l>6)return
for(a=0;f();){if(n=null,a>0){if(!("."==f()&&a<4))return
h++}if(!_.test(f()))return
for(;_.test(f());){if(i=parseInt(f(),10),null===n)n=i
else{if(0==n)return
n=10*n+i}if(n>255)return
h++}c[l]=256*c[l]+n,2!=++a&&4!=a||l++}if(4!=a)return
break}if(":"==f()){if(h++,!f())return}else if(f())return
c[l++]=t}else{if(null!==u)return
h++,u=++l}}if(null!==u)for(o=l-u,l=7;0!=l&&o>0;)s=c[l],c[l--]=c[u+o-1],c[u+--o]=s
else if(8!=l)return
return c},G=function(e){var t,r,a,n
if("number"==typeof e){for(t=[],r=0;r<4;r++)t.unshift(e%256),e=C(e/256)
return t.join(".")}if("object"==typeof e){for(t="",a=function(e){for(var t=null,r=1,a=null,n=0,i=0;i<8;i++)0!==e[i]?(n>r&&(t=a,r=n),a=null,n=0):(null===a&&(a=i),++n)
return n>r&&(t=a,r=n),t}(e),r=0;r<8;r++)n&&0===e[r]||(n&&(n=!1),a===r?(t+=r?":":"::",n=!0):(t+=e[r].toString(16),r<7&&(t+=":")))
return"["+t+"]"}return e},H={},W=f({},H,{" ":1,'"':1,"<":1,">":1,"`":1}),X=f({},W,{"#":1,"?":1,"{":1,"}":1}),V=f({},X,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),Y=function(e,t){var r=p(e,0)
return r>32&&r<127&&!h(t,e)?e:encodeURIComponent(e)},K={ftp:21,file:null,http:80,https:443,ws:80,wss:443},J=function(e){return h(K,e.scheme)},Z=function(e){return""!=e.username||""!=e.password},Q=function(e){return!e.host||e.cannotBeABaseURL||"file"==e.scheme},$=function(e,t){var r
return 2==e.length&&E.test(e.charAt(0))&&(":"==(r=e.charAt(1))||!t&&"|"==r)},ee=function(e){var t
return e.length>1&&$(e.slice(0,2))&&(2==e.length||"/"===(t=e.charAt(2))||"\\"===t||"?"===t||"#"===t)},te=function(e){var t=e.path,r=t.length
!r||"file"==e.scheme&&1==r&&$(t[0],!0)||t.pop()},re=function(e){return"."===e||"%2e"===e.toLowerCase()},ae={},ne={},ie={},oe={},se={},ce={},le={},ue={},he={},fe={},de={},pe={},ge={},me={},ve={},be={},ye={},we={},ke={},Se={},xe={},Ce=function(e,t,r,n){var i,o,s,c,l,u=r||ae,f=0,p="",g=!1,m=!1,v=!1
for(r||(e.scheme="",e.username="",e.password="",e.host=null,e.port=null,e.path=[],e.query=null,e.fragment=null,e.cannotBeABaseURL=!1,t=t.replace(N,"")),t=t.replace(U,""),i=d(t);f<=i.length;){switch(o=i[f],u){case ae:if(!o||!E.test(o)){if(r)return O
u=ie
continue}p+=o.toLowerCase(),u=ne
break
case ne:if(o&&(P.test(o)||"+"==o||"-"==o||"."==o))p+=o.toLowerCase()
else{if(":"!=o){if(r)return O
p="",u=ie,f=0
continue}if(r&&(J(e)!=h(K,p)||"file"==p&&(Z(e)||null!==e.port)||"file"==e.scheme&&!e.host))return
if(e.scheme=p,r)return void(J(e)&&K[e.scheme]==e.port&&(e.port=null))
p="","file"==e.scheme?u=me:J(e)&&n&&n.scheme==e.scheme?u=oe:J(e)?u=ue:"/"==i[f+1]?(u=se,f++):(e.cannotBeABaseURL=!0,e.path.push(""),u=ke)}break
case ie:if(!n||n.cannotBeABaseURL&&"#"!=o)return O
if(n.cannotBeABaseURL&&"#"==o){e.scheme=n.scheme,e.path=n.path.slice(),e.query=n.query,e.fragment="",e.cannotBeABaseURL=!0,u=xe
break}u="file"==n.scheme?me:ce
continue
case oe:if("/"!=o||"/"!=i[f+1]){u=ce
continue}u=he,f++
break
case se:if("/"==o){u=fe
break}u=we
continue
case ce:if(e.scheme=n.scheme,o==a)e.username=n.username,e.password=n.password,e.host=n.host,e.port=n.port,e.path=n.path.slice(),e.query=n.query
else if("/"==o||"\\"==o&&J(e))u=le
else if("?"==o)e.username=n.username,e.password=n.password,e.host=n.host,e.port=n.port,e.path=n.path.slice(),e.query="",u=Se
else{if("#"!=o){e.username=n.username,e.password=n.password,e.host=n.host,e.port=n.port,e.path=n.path.slice(),e.path.pop(),u=we
continue}e.username=n.username,e.password=n.password,e.host=n.host,e.port=n.port,e.path=n.path.slice(),e.query=n.query,e.fragment="",u=xe}break
case le:if(!J(e)||"/"!=o&&"\\"!=o){if("/"!=o){e.username=n.username,e.password=n.password,e.host=n.host,e.port=n.port,u=we
continue}u=fe}else u=he
break
case ue:if(u=he,"/"!=o||"/"!=p.charAt(f+1))continue
f++
break
case he:if("/"!=o&&"\\"!=o){u=fe
continue}break
case fe:if("@"==o){g&&(p="%40"+p),g=!0,s=d(p)
for(var b=0;b<s.length;b++){var y=s[b]
if(":"!=y||v){var w=Y(y,V)
v?e.password+=w:e.username+=w}else v=!0}p=""}else if(o==a||"/"==o||"?"==o||"#"==o||"\\"==o&&J(e)){if(g&&""==p)return"Invalid authority"
f-=d(p).length+1,p="",u=de}else p+=o
break
case de:case pe:if(r&&"file"==e.scheme){u=be
continue}if(":"!=o||m){if(o==a||"/"==o||"?"==o||"#"==o||"\\"==o&&J(e)){if(J(e)&&""==p)return T
if(r&&""==p&&(Z(e)||null!==e.port))return
if(c=j(e,p))return c
if(p="",u=ye,r)return
continue}"["==o?m=!0:"]"==o&&(m=!1),p+=o}else{if(""==p)return T
if(c=j(e,p))return c
if(p="",u=ge,r==pe)return}break
case ge:if(!_.test(o)){if(o==a||"/"==o||"?"==o||"#"==o||"\\"==o&&J(e)||r){if(""!=p){var k=parseInt(p,10)
if(k>65535)return I
e.port=J(e)&&k===K[e.scheme]?null:k,p=""}if(r)return
u=ye
continue}return I}p+=o
break
case me:if(e.scheme="file","/"==o||"\\"==o)u=ve
else{if(!n||"file"!=n.scheme){u=we
continue}if(o==a)e.host=n.host,e.path=n.path.slice(),e.query=n.query
else if("?"==o)e.host=n.host,e.path=n.path.slice(),e.query="",u=Se
else{if("#"!=o){ee(i.slice(f).join(""))||(e.host=n.host,e.path=n.path.slice(),te(e)),u=we
continue}e.host=n.host,e.path=n.path.slice(),e.query=n.query,e.fragment="",u=xe}}break
case ve:if("/"==o||"\\"==o){u=be
break}n&&"file"==n.scheme&&!ee(i.slice(f).join(""))&&($(n.path[0],!0)?e.path.push(n.path[0]):e.host=n.host),u=we
continue
case be:if(o==a||"/"==o||"\\"==o||"?"==o||"#"==o){if(!r&&$(p))u=we
else if(""==p){if(e.host="",r)return
u=ye}else{if(c=j(e,p))return c
if("localhost"==e.host&&(e.host=""),r)return
p="",u=ye}continue}p+=o
break
case ye:if(J(e)){if(u=we,"/"!=o&&"\\"!=o)continue}else if(r||"?"!=o)if(r||"#"!=o){if(o!=a&&(u=we,"/"!=o))continue}else e.fragment="",u=xe
else e.query="",u=Se
break
case we:if(o==a||"/"==o||"\\"==o&&J(e)||!r&&("?"==o||"#"==o)){if(".."===(l=(l=p).toLowerCase())||"%2e."===l||".%2e"===l||"%2e%2e"===l?(te(e),"/"==o||"\\"==o&&J(e)||e.path.push("")):re(p)?"/"==o||"\\"==o&&J(e)||e.path.push(""):("file"==e.scheme&&!e.path.length&&$(p)&&(e.host&&(e.host=""),p=p.charAt(0)+":"),e.path.push(p)),p="","file"==e.scheme&&(o==a||"?"==o||"#"==o))for(;e.path.length>1&&""===e.path[0];)e.path.shift()
"?"==o?(e.query="",u=Se):"#"==o&&(e.fragment="",u=xe)}else p+=Y(o,X)
break
case ke:"?"==o?(e.query="",u=Se):"#"==o?(e.fragment="",u=xe):o!=a&&(e.path[0]+=Y(o,H))
break
case Se:r||"#"!=o?o!=a&&("'"==o&&J(e)?e.query+="%27":e.query+="#"==o?"%23":Y(o,H)):(e.fragment="",u=xe)
break
case xe:o!=a&&(e.fragment+=Y(o,W))}f++}},Ae=function(e){var t,r,a=u(this,Ae,"URL"),n=arguments.length>1?arguments[1]:void 0,o=String(e),s=S(a,{type:"URL"})
if(void 0!==n)if(n instanceof Ae)t=x(n)
else if(r=Ce(t={},String(n)))throw TypeError(r)
if(r=Ce(s,o,null,t))throw TypeError(r)
var c=s.searchParams=new w,l=k(c)
l.updateSearchParams(s.query),l.updateURL=function(){s.query=String(c)||null},i||(a.href=Te.call(a),a.origin=Ie.call(a),a.protocol=Ee.call(a),a.username=Pe.call(a),a.password=_e.call(a),a.host=Fe.call(a),a.hostname=Re.call(a),a.port=Be.call(a),a.pathname=Me.call(a),a.search=De.call(a),a.searchParams=Le.call(a),a.hash=Ne.call(a))},Oe=Ae.prototype,Te=function(){var e=x(this),t=e.scheme,r=e.username,a=e.password,n=e.host,i=e.port,o=e.path,s=e.query,c=e.fragment,l=t+":"
return null!==n?(l+="//",Z(e)&&(l+=r+(a?":"+a:"")+"@"),l+=G(n),null!==i&&(l+=":"+i)):"file"==t&&(l+="//"),l+=e.cannotBeABaseURL?o[0]:o.length?"/"+o.join("/"):"",null!==s&&(l+="?"+s),null!==c&&(l+="#"+c),l},Ie=function(){var e=x(this),t=e.scheme,r=e.port
if("blob"==t)try{return new URL(t.path[0]).origin}catch(a){return"null"}return"file"!=t&&J(e)?t+"://"+G(e.host)+(null!==r?":"+r:""):"null"},Ee=function(){return x(this).scheme+":"},Pe=function(){return x(this).username},_e=function(){return x(this).password},Fe=function(){var e=x(this),t=e.host,r=e.port
return null===t?"":null===r?G(t):G(t)+":"+r},Re=function(){var e=x(this).host
return null===e?"":G(e)},Be=function(){var e=x(this).port
return null===e?"":String(e)},Me=function(){var e=x(this),t=e.path
return e.cannotBeABaseURL?t[0]:t.length?"/"+t.join("/"):""},De=function(){var e=x(this).query
return e?"?"+e:""},Le=function(){return x(this).searchParams},Ne=function(){var e=x(this).fragment
return e?"#"+e:""},Ue=function(e,t){return{get:e,set:t,configurable:!0,enumerable:!0}}
if(i&&c(Oe,{href:Ue(Te,(function(e){var t=x(this),r=String(e),a=Ce(t,r)
if(a)throw TypeError(a)
k(t.searchParams).updateSearchParams(t.query)})),origin:Ue(Ie),protocol:Ue(Ee,(function(e){var t=x(this)
Ce(t,String(e)+":",ae)})),username:Ue(Pe,(function(e){var t=x(this),r=d(String(e))
if(!Q(t)){t.username=""
for(var a=0;a<r.length;a++)t.username+=Y(r[a],V)}})),password:Ue(_e,(function(e){var t=x(this),r=d(String(e))
if(!Q(t)){t.password=""
for(var a=0;a<r.length;a++)t.password+=Y(r[a],V)}})),host:Ue(Fe,(function(e){var t=x(this)
t.cannotBeABaseURL||Ce(t,String(e),de)})),hostname:Ue(Re,(function(e){var t=x(this)
t.cannotBeABaseURL||Ce(t,String(e),pe)})),port:Ue(Be,(function(e){var t=x(this)
Q(t)||(""==(e=String(e))?t.port=null:Ce(t,e,ge))})),pathname:Ue(Me,(function(e){var t=x(this)
t.cannotBeABaseURL||(t.path=[],Ce(t,e+"",ye))})),search:Ue(De,(function(e){var t=x(this)
""==(e=String(e))?t.query=null:("?"==e.charAt(0)&&(e=e.slice(1)),t.query="",Ce(t,e,Se)),k(t.searchParams).updateSearchParams(t.query)})),searchParams:Ue(Le),hash:Ue(Ne,(function(e){var t=x(this)
""!=(e=String(e))?("#"==e.charAt(0)&&(e=e.slice(1)),t.fragment="",Ce(t,e,xe)):t.fragment=null}))}),l(Oe,"toJSON",(function(){return Te.call(this)}),{enumerable:!0}),l(Oe,"toString",(function(){return Te.call(this)}),{enumerable:!0}),y){var je=y.createObjectURL,qe=y.revokeObjectURL
je&&l(Ae,"createObjectURL",(function(e){return je.apply(y,arguments)})),qe&&l(Ae,"revokeObjectURL",(function(e){return qe.apply(y,arguments)}))}m(Ae,"URL"),n({global:!0,forced:!o,sham:!i},{URL:Ae})},function(e,t,r){var a=r(14),n=r(57),i=r(37),o=n("iterator")
e.exports=!a((function(){var e=new URL("b?a=1&b=2&c=3","http://a"),t=e.searchParams,r=""
return e.pathname="c%20d",t.forEach((function(e,a){t.delete("b"),r+=a+e})),i&&!e.toJSON||!t.sort||"http://a/c%20d?a=1&c=3"!==e.href||"3"!==t.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!t[o]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==r||"x"!==new URL("http://x",void 0).host}))},function(e,t,r){"use strict"
var a=2147483647,n=/[^\0-\u007E]/,i=/[.\u3002\uFF0E\uFF61]/g,o="Overflow: input needs wider integers to process",s=Math.floor,c=String.fromCharCode,l=function(e){return e+22+75*(e<26)},u=function(e,t,r){var a=0
for(e=r?s(e/700):e>>1,e+=s(e/t);e>455;a+=36)e=s(e/35)
return s(a+36*e/(e+38))},h=function(e){var t,r,n=[],i=(e=function(e){for(var t=[],r=0,a=e.length;r<a;){var n=e.charCodeAt(r++)
if(n>=55296&&n<=56319&&r<a){var i=e.charCodeAt(r++)
56320==(64512&i)?t.push(((1023&n)<<10)+(1023&i)+65536):(t.push(n),r--)}else t.push(n)}return t}(e)).length,h=128,f=0,d=72
for(t=0;t<e.length;t++)(r=e[t])<128&&n.push(c(r))
var p=n.length,g=p
for(p&&n.push("-");g<i;){var m=a
for(t=0;t<e.length;t++)(r=e[t])>=h&&r<m&&(m=r)
var v=g+1
if(m-h>s((a-f)/v))throw RangeError(o)
for(f+=(m-h)*v,h=m,t=0;t<e.length;t++){if((r=e[t])<h&&++f>a)throw RangeError(o)
if(r==h){for(var b=f,y=36;;y+=36){var w=y<=d?1:y>=d+26?26:y-d
if(b<w)break
var k=b-w,S=36-w
n.push(c(l(w+k%S))),b=s(k/S)}n.push(c(l(b))),d=u(f,v,g==p),f=0,++g}}++f,++h}return n.join("")}
e.exports=function(e){var t,r,a=[],o=e.toLowerCase().replace(i,".").split(".")
for(t=0;t<o.length;t++)r=o[t],a.push(n.test(r)?"xn--"+h(r):r)
return a.join(".")}},function(e,t,r){"use strict"
r(102)
var a=r(10),n=r(42),i=r(140),o=r(29),s=r(124),c=r(85),l=r(80),u=r(33),h=r(126),f=r(23),d=r(62),p=r(95),g=r(28),m=r(22),v=r(71),b=r(16),y=r(143),w=r(94),k=r(57),S=n("fetch"),x=n("Headers"),C=k("iterator"),A="URLSearchParams",O="URLSearchParamsIterator",T=u.set,I=u.getterFor(A),E=u.getterFor(O),P=/\+/g,_=Array(4),F=function(e){return _[e-1]||(_[e-1]=RegExp("((?:%[\\da-f]{2}){"+e+"})","gi"))},R=function(e){try{return decodeURIComponent(e)}catch(t){return e}},B=function(e){var t=e.replace(P," "),r=4
try{return decodeURIComponent(t)}catch(a){for(;r;)t=t.replace(F(r--),R)
return t}},M=/[!'()~]|%20/g,D={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},L=function(e){return D[e]},N=function(e){return encodeURIComponent(e).replace(M,L)},U=function(e,t){if(t)for(var r,a,n=t.split("&"),i=0;i<n.length;)(r=n[i++]).length&&(a=r.split("="),e.push({key:B(a.shift()),value:B(a.join("="))}))},j=function(e){this.entries.length=0,U(this.entries,e)},q=function(e,t){if(e<t)throw TypeError("Not enough arguments")},z=l((function(e,t){T(this,{type:O,iterator:y(I(e).entries),kind:t})}),"Iterator",(function(){var e=E(this),t=e.kind,r=e.iterator.next(),a=r.value
return r.done||(r.value="keys"===t?a.key:"values"===t?a.value:[a.key,a.value]),r})),G=function(){h(this,G,A)
var e,t,r,a,n,i,o,s,c,l=arguments.length>0?arguments[0]:void 0,u=this,d=[]
if(T(u,{type:A,entries:d,updateURL:function(){},updateSearchParams:j}),void 0!==l)if(m(l))if("function"==typeof(e=w(l)))for(r=(t=e.call(l)).next;!(a=r.call(t)).done;){if((o=(i=(n=y(g(a.value))).next).call(n)).done||(s=i.call(n)).done||!i.call(n).done)throw TypeError("Expected sequence with length 2")
d.push({key:o.value+"",value:s.value+""})}else for(c in l)f(l,c)&&d.push({key:c,value:l[c]+""})
else U(d,"string"==typeof l?"?"===l.charAt(0)?l.slice(1):l:l+"")},H=G.prototype
s(H,{append:function(e,t){q(arguments.length,2)
var r=I(this)
r.entries.push({key:e+"",value:t+""}),r.updateURL()},delete:function(e){q(arguments.length,1)
for(var t=I(this),r=t.entries,a=e+"",n=0;n<r.length;)r[n].key===a?r.splice(n,1):n++
t.updateURL()},get:function(e){q(arguments.length,1)
for(var t=I(this).entries,r=e+"",a=0;a<t.length;a++)if(t[a].key===r)return t[a].value
return null},getAll:function(e){q(arguments.length,1)
for(var t=I(this).entries,r=e+"",a=[],n=0;n<t.length;n++)t[n].key===r&&a.push(t[n].value)
return a},has:function(e){q(arguments.length,1)
for(var t=I(this).entries,r=e+"",a=0;a<t.length;)if(t[a++].key===r)return!0
return!1},set:function(e,t){q(arguments.length,1)
for(var r,a=I(this),n=a.entries,i=!1,o=e+"",s=t+"",c=0;c<n.length;c++)(r=n[c]).key===o&&(i?n.splice(c--,1):(i=!0,r.value=s))
i||n.push({key:o,value:s}),a.updateURL()},sort:function(){var e,t,r,a=I(this),n=a.entries,i=n.slice()
for(n.length=0,r=0;r<i.length;r++){for(e=i[r],t=0;t<r;t++)if(n[t].key>e.key){n.splice(t,0,e)
break}t===r&&n.push(e)}a.updateURL()},forEach:function(e){for(var t,r=I(this).entries,a=d(e,arguments.length>1?arguments[1]:void 0,3),n=0;n<r.length;)a((t=r[n++]).value,t.key,this)},keys:function(){return new z(this,"keys")},values:function(){return new z(this,"values")},entries:function(){return new z(this,"entries")}},{enumerable:!0}),o(H,C,H.entries),o(H,"toString",(function(){for(var e,t=I(this).entries,r=[],a=0;a<t.length;)e=t[a++],r.push(N(e.key)+"="+N(e.value))
return r.join("&")}),{enumerable:!0}),c(G,A),a({global:!0,forced:!i},{URLSearchParams:G}),i||"function"!=typeof S||"function"!=typeof x||a({global:!0,enumerable:!0,forced:!0},{fetch:function(e){var t,r,a,n=[e]
return arguments.length>1&&(m(t=arguments[1])&&(r=t.body,p(r)===A&&((a=t.headers?new x(t.headers):new x).has("content-type")||a.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"),t=v(t,{body:b(0,String(r)),headers:b(0,a)}))),n.push(t)),S.apply(this,n)}}),e.exports={URLSearchParams:G,getState:I}},function(e,t,r){var a=r(28),n=r(94)
e.exports=function(e){var t=n(e)
if("function"!=typeof t)throw TypeError(String(e)+" is not iterable")
return a(t.call(e))}},function(e,t,r){"use strict"
r(10)({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return URL.prototype.toString.call(this)}})},function(e,t,r){!function(e){"use strict"
var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?Symbol:function(e){return"Symbol("+e+")"}
function r(){}var a=Number.isNaN||function(e){return e!=e},n=r
function i(e){return"object"==typeof e&&null!==e||"function"==typeof e}function o(e){return e.slice()}function s(e,t,r,a,n){new Uint8Array(e).set(new Uint8Array(r,a,n),t)}function c(e){return!1!==l(e)&&e!==1/0}function l(e){return!("number"!=typeof e||a(e)||e<0)}function u(e,t,r){if("function"!=typeof e)throw new TypeError("Argument is not a function")
return Function.prototype.apply.call(e,t,r)}function h(e,t,r,a){var n=e[t]
if(void 0!==n){if("function"!=typeof n)throw new TypeError(n+" is not a method")
switch(r){case 0:return function(){return d(n,e,a)}
case 1:return function(t){var r=[t].concat(a)
return d(n,e,r)}}}return function(){return x(void 0)}}function f(e,t,r){var a=e[t]
if(void 0!==a)return u(a,e,r)}function d(e,t,r){try{return x(u(e,t,r))}catch(a){return C(a)}}function p(e){return e}function g(e){return!1}function m(e){if(e=Number(e),a(e)||e<0)throw new RangeError("highWaterMark property of a queuing strategy must be non-negative and non-NaN")
return e}function v(e){if(void 0===e)return function(){return 1}
if("function"!=typeof e)throw new TypeError("size property of a queuing strategy must be a function")
return function(t){return e(t)}}var b=Promise,y=Promise.prototype.then,w=Promise.resolve.bind(b),k=Promise.reject.bind(b)
function S(e){return new b(e)}function x(e){return w(e)}function C(e){return k(e)}function A(e,t,r){return y.call(e,t,r)}function O(e,t,r){A(A(e,t,r),void 0,n)}function T(e,t){O(e,t)}function I(e,t){O(e,void 0,t)}function E(e,t,r){return A(e,t,r)}function P(e){A(e,void 0,n)}var _=16384,F=function(){function e(){this._cursor=0,this._size=0,this._front={_elements:[],_next:void 0},this._back=this._front,this._cursor=0,this._size=0}return Object.defineProperty(e.prototype,"length",{get:function(){return this._size},enumerable:!0,configurable:!0}),e.prototype.push=function(e){var t=this._back,r=t
t._elements.length===_-1&&(r={_elements:[],_next:void 0}),t._elements.push(e),r!==t&&(this._back=r,t._next=r),++this._size},e.prototype.shift=function(){var e=this._front,t=e,r=this._cursor,a=r+1,n=e._elements,i=n[r]
return a===_&&(t=e._next,a=0),--this._size,this._cursor=a,e!==t&&(this._front=t),n[r]=void 0,i},e.prototype.forEach=function(e){for(var t=this._cursor,r=this._front,a=r._elements;!(t===a.length&&void 0===r._next||t===a.length&&(t=0,0===(a=(r=r._next)._elements).length));)e(a[t]),++t},e.prototype.peek=function(){var e=this._front,t=this._cursor
return e._elements[t]},e}()
function R(e,t,r){var a=null
!0===r&&(a=Object.prototype)
var n=Object.create(a)
return n.value=e,n.done=t,n}function B(e,t){e._forAuthorCode=!0,e._ownerReadableStream=t,t._reader=e,"readable"===t._state?N(e):"closed"===t._state?j(e):U(e,t._storedError)}function M(e,t){return Dr(e._ownerReadableStream,t)}function D(e){"readable"===e._ownerReadableStream._state?q(e,new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")):z(e,new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")),e._ownerReadableStream._reader=void 0,e._ownerReadableStream=void 0}function L(e){return new TypeError("Cannot "+e+" a stream using a released reader")}function N(e){e._closedPromise=S((function(t,r){e._closedPromise_resolve=t,e._closedPromise_reject=r}))}function U(e,t){N(e),q(e,t)}function j(e){N(e),G(e)}function q(e,t){P(e._closedPromise),e._closedPromise_reject(t),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0}function z(e,t){U(e,t)}function G(e){e._closedPromise_resolve(void 0),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0}var H=t("[[CancelSteps]]"),W=t("[[PullSteps]]")
function X(e,t){void 0===t&&(t=!1)
var r=new $(e)
return r._forAuthorCode=t,r}function V(e){return S((function(t,r){var a={_resolve:t,_reject:r}
e._reader._readRequests.push(a)}))}function Y(e,t,r){var a=e._reader
a._readRequests.shift()._resolve(R(t,r,a._forAuthorCode))}function K(e){return e._reader._readRequests.length}function J(e){var t=e._reader
return void 0!==t&&!!ee(t)}var Z,Q,$=function(){function e(e){if(!1===Br(e))throw new TypeError("ReadableStreamDefaultReader can only be constructed with a ReadableStream instance")
if(!0===Mr(e))throw new TypeError("This stream has already been locked for exclusive reading by another reader")
B(this,e),this._readRequests=new F}return Object.defineProperty(e.prototype,"closed",{get:function(){return ee(this)?this._closedPromise:C(re("closed"))},enumerable:!0,configurable:!0}),e.prototype.cancel=function(e){return ee(this)?void 0===this._ownerReadableStream?C(L("cancel")):M(this,e):C(re("cancel"))},e.prototype.read=function(){return ee(this)?void 0===this._ownerReadableStream?C(L("read from")):te(this):C(re("read"))},e.prototype.releaseLock=function(){if(!ee(this))throw re("releaseLock")
if(void 0!==this._ownerReadableStream){if(this._readRequests.length>0)throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled")
D(this)}},e}()
function ee(e){return!!i(e)&&!!Object.prototype.hasOwnProperty.call(e,"_readRequests")}function te(e){var t=e._ownerReadableStream
return t._disturbed=!0,"closed"===t._state?x(R(void 0,!0,e._forAuthorCode)):"errored"===t._state?C(t._storedError):t._readableStreamController[W]()}function re(e){return new TypeError("ReadableStreamDefaultReader.prototype."+e+" can only be used on a ReadableStreamDefaultReader")}"symbol"==typeof t.asyncIterator&&((Z={})[t.asyncIterator]=function(){return this},Q=Z,Object.defineProperty(Q,t.asyncIterator,{enumerable:!1}))
var ae={next:function(){if(!1===ie(this))return C(oe("next"))
var e=this._asyncIteratorReader
return void 0===e._ownerReadableStream?C(L("iterate")):E(te(e),(function(t){var r=t.done
return r&&D(e),R(t.value,r,!0)}))},return:function(e){if(!1===ie(this))return C(oe("next"))
var t=this._asyncIteratorReader
if(void 0===t._ownerReadableStream)return C(L("finish iterating"))
if(t._readRequests.length>0)return C(new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled"))
if(!1===this._preventCancel){var r=M(t,e)
return D(t),E(r,(function(){return R(e,!0,!0)}))}return D(t),x(R(e,!0,!0))}}
function ne(e,t){void 0===t&&(t=!1)
var r=X(e),a=Object.create(ae)
return a._asyncIteratorReader=r,a._preventCancel=Boolean(t),a}function ie(e){return!!i(e)&&!!Object.prototype.hasOwnProperty.call(e,"_asyncIteratorReader")}function oe(e){return new TypeError("ReadableStreamAsyncIterator."+e+" can only be used on a ReadableSteamAsyncIterator")}function se(e){var t=e._queue.shift()
return e._queueTotalSize-=t.size,e._queueTotalSize<0&&(e._queueTotalSize=0),t.value}function ce(e,t,r){if(!c(r=Number(r)))throw new RangeError("Size must be a finite, non-NaN, non-negative number.")
e._queue.push({value:t,size:r}),e._queueTotalSize+=r}function le(e){return e._queue.peek().value}function ue(e){e._queue=new F,e._queueTotalSize=0}void 0!==Q&&Object.setPrototypeOf(ae,Q),Object.defineProperty(ae,"next",{enumerable:!1}),Object.defineProperty(ae,"return",{enumerable:!1})
var he=t("[[AbortSteps]]"),fe=t("[[ErrorSteps]]"),de=function(){function e(e,t){void 0===e&&(e={}),void 0===t&&(t={}),me(this)
var r=t.size,a=t.highWaterMark
if(void 0!==e.type)throw new RangeError("Invalid type is specified")
var n=v(r)
void 0===a&&(a=1),Ye(this,e,a=m(a),n)}return Object.defineProperty(e.prototype,"locked",{get:function(){if(!1===ve(this))throw ot("locked")
return be(this)},enumerable:!0,configurable:!0}),e.prototype.abort=function(e){return!1===ve(this)?C(ot("abort")):!0===be(this)?C(new TypeError("Cannot abort a stream that already has a writer")):ye(this,e)},e.prototype.close=function(){return!1===ve(this)?C(ot("close")):!0===be(this)?C(new TypeError("Cannot close a stream that already has a writer")):!0===Ee(this)?C(new TypeError("Cannot close an already-closing stream")):we(this)},e.prototype.getWriter=function(){if(!1===ve(this))throw ot("getWriter")
return pe(this)},e}()
function pe(e){return new Me(e)}function ge(e,t,r,a,n,i){void 0===n&&(n=1),void 0===i&&(i=function(){return 1})
var o=Object.create(de.prototype)
return me(o),Ve(o,Object.create(We.prototype),e,t,r,a,n,i),o}function me(e){e._state="writable",e._storedError=void 0,e._writer=void 0,e._writableStreamController=void 0,e._writeRequests=new F,e._inFlightWriteRequest=void 0,e._closeRequest=void 0,e._inFlightCloseRequest=void 0,e._pendingAbortRequest=void 0,e._backpressure=!1}function ve(e){return!!i(e)&&!!Object.prototype.hasOwnProperty.call(e,"_writableStreamController")}function be(e){return void 0!==e._writer}function ye(e,t){var r=e._state
if("closed"===r||"errored"===r)return x(void 0)
if(void 0!==e._pendingAbortRequest)return e._pendingAbortRequest._promise
var a=!1
"erroring"===r&&(a=!0,t=void 0)
var n=S((function(r,n){e._pendingAbortRequest={_promise:void 0,_resolve:r,_reject:n,_reason:t,_wasAlreadyErroring:a}}))
return e._pendingAbortRequest._promise=n,!1===a&&xe(e,t),n}function we(e){var t=e._state
if("closed"===t||"errored"===t)return C(new TypeError("The stream (in "+t+" state) is not in the writable state and cannot be closed"))
var r=S((function(t,r){var a={_resolve:t,_reject:r}
e._closeRequest=a})),a=e._writer
return void 0!==a&&!0===e._backpressure&&"writable"===t&&kt(a),Je(e._writableStreamController),r}function ke(e){return S((function(t,r){var a={_resolve:t,_reject:r}
e._writeRequests.push(a)}))}function Se(e,t){"writable"!==e._state?Ce(e):xe(e,t)}function xe(e,t){var r=e._writableStreamController
e._state="erroring",e._storedError=t
var a=e._writer
void 0!==a&&qe(a,t),!1===Pe(e)&&!0===r._started&&Ce(e)}function Ce(e){e._state="errored",e._writableStreamController[fe]()
var t=e._storedError
if(e._writeRequests.forEach((function(e){e._reject(t)})),e._writeRequests=new F,void 0!==e._pendingAbortRequest){var r=e._pendingAbortRequest
if(e._pendingAbortRequest=void 0,!0===r._wasAlreadyErroring)return r._reject(t),void Re(e)
O(e._writableStreamController[he](r._reason),(function(){r._resolve(),Re(e)}),(function(t){r._reject(t),Re(e)}))}else Re(e)}function Ae(e){e._inFlightWriteRequest._resolve(void 0),e._inFlightWriteRequest=void 0}function Oe(e,t){e._inFlightWriteRequest._reject(t),e._inFlightWriteRequest=void 0,Se(e,t)}function Te(e){e._inFlightCloseRequest._resolve(void 0),e._inFlightCloseRequest=void 0,"erroring"===e._state&&(e._storedError=void 0,void 0!==e._pendingAbortRequest&&(e._pendingAbortRequest._resolve(),e._pendingAbortRequest=void 0)),e._state="closed"
var t=e._writer
void 0!==t&&pt(t)}function Ie(e,t){e._inFlightCloseRequest._reject(t),e._inFlightCloseRequest=void 0,void 0!==e._pendingAbortRequest&&(e._pendingAbortRequest._reject(t),e._pendingAbortRequest=void 0),Se(e,t)}function Ee(e){return void 0!==e._closeRequest||void 0!==e._inFlightCloseRequest}function Pe(e){return void 0!==e._inFlightWriteRequest||void 0!==e._inFlightCloseRequest}function _e(e){e._inFlightCloseRequest=e._closeRequest,e._closeRequest=void 0}function Fe(e){e._inFlightWriteRequest=e._writeRequests.shift()}function Re(e){void 0!==e._closeRequest&&(e._closeRequest._reject(e._storedError),e._closeRequest=void 0)
var t=e._writer
void 0!==t&&ft(t,e._storedError)}function Be(e,t){var r=e._writer
void 0!==r&&t!==e._backpressure&&(!0===t?yt(r):kt(r)),e._backpressure=t}var Me=function(){function e(e){if(!1===ve(e))throw new TypeError("WritableStreamDefaultWriter can only be constructed with a WritableStream instance")
if(!0===be(e))throw new TypeError("This stream has already been locked for exclusive writing by another writer")
this._ownerWritableStream=e,e._writer=this
var t=e._state
if("writable"===t)!1===Ee(e)&&!0===e._backpressure?gt(this):vt(this),lt(this)
else if("erroring"===t)mt(this,e._storedError),lt(this)
else if("closed"===t)vt(this),ht(this)
else{var r=e._storedError
mt(this,r),ut(this,r)}}return Object.defineProperty(e.prototype,"closed",{get:function(){return!1===De(this)?C(st("closed")):this._closedPromise},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"desiredSize",{get:function(){if(!1===De(this))throw st("desiredSize")
if(void 0===this._ownerWritableStream)throw ct("desiredSize")
return ze(this)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"ready",{get:function(){return!1===De(this)?C(st("ready")):this._readyPromise},enumerable:!0,configurable:!0}),e.prototype.abort=function(e){return!1===De(this)?C(st("abort")):void 0===this._ownerWritableStream?C(ct("abort")):Le(this,e)},e.prototype.close=function(){if(!1===De(this))return C(st("close"))
var e=this._ownerWritableStream
return void 0===e?C(ct("close")):!0===Ee(e)?C(new TypeError("Cannot close an already-closing stream")):Ne(this)},e.prototype.releaseLock=function(){if(!1===De(this))throw st("releaseLock")
void 0!==this._ownerWritableStream&&Ge(this)},e.prototype.write=function(e){return!1===De(this)?C(st("write")):void 0===this._ownerWritableStream?C(ct("write to")):He(this,e)},e}()
function De(e){return!!i(e)&&!!Object.prototype.hasOwnProperty.call(e,"_ownerWritableStream")}function Le(e,t){return ye(e._ownerWritableStream,t)}function Ne(e){return we(e._ownerWritableStream)}function Ue(e){var t=e._ownerWritableStream,r=t._state
return!0===Ee(t)||"closed"===r?x(void 0):"errored"===r?C(t._storedError):Ne(e)}function je(e,t){"pending"===e._closedPromiseState?ft(e,t):dt(e,t)}function qe(e,t){"pending"===e._readyPromiseState?bt(e,t):wt(e,t)}function ze(e){var t=e._ownerWritableStream,r=t._state
return"errored"===r||"erroring"===r?null:"closed"===r?0:Qe(t._writableStreamController)}function Ge(e){var t=e._ownerWritableStream,r=new TypeError("Writer was released and can no longer be used to monitor the stream's closedness")
qe(e,r),je(e,r),t._writer=void 0,e._ownerWritableStream=void 0}function He(e,t){var r=e._ownerWritableStream,a=r._writableStreamController,n=Ze(a,t)
if(r!==e._ownerWritableStream)return C(ct("write to"))
var i=r._state
if("errored"===i)return C(r._storedError)
if(!0===Ee(r)||"closed"===i)return C(new TypeError("The stream is closing or closed and cannot be written to"))
if("erroring"===i)return C(r._storedError)
var o=ke(r)
return $e(a,t,n),o}var We=function(){function e(){throw new TypeError("WritableStreamDefaultController cannot be constructed explicitly")}return e.prototype.error=function(e){if(!1===Xe(this))throw new TypeError("WritableStreamDefaultController.prototype.error can only be used on a WritableStreamDefaultController")
"writable"===this._controlledWritableStream._state&&it(this,e)},e.prototype[he]=function(e){var t=this._abortAlgorithm(e)
return Ke(this),t},e.prototype[fe]=function(){ue(this)},e}()
function Xe(e){return!!i(e)&&!!Object.prototype.hasOwnProperty.call(e,"_controlledWritableStream")}function Ve(e,t,r,a,n,i,o,s){t._controlledWritableStream=e,e._writableStreamController=t,t._queue=void 0,t._queueTotalSize=void 0,ue(t),t._started=!1,t._strategySizeAlgorithm=s,t._strategyHWM=o,t._writeAlgorithm=a,t._closeAlgorithm=n,t._abortAlgorithm=i
var c=nt(t)
Be(e,c),O(x(r()),(function(){t._started=!0,et(t)}),(function(r){t._started=!0,Se(e,r)}))}function Ye(e,t,r,a){var n=Object.create(We.prototype)
function i(){return f(t,"start",[n])}var o=h(t,"write",1,[n]),s=h(t,"close",0,[]),c=h(t,"abort",1,[])
Ve(e,n,i,o,s,c,r,a)}function Ke(e){e._writeAlgorithm=void 0,e._closeAlgorithm=void 0,e._abortAlgorithm=void 0,e._strategySizeAlgorithm=void 0}function Je(e){ce(e,"close",0),et(e)}function Ze(e,t){try{return e._strategySizeAlgorithm(t)}catch(r){return tt(e,r),1}}function Qe(e){return e._strategyHWM-e._queueTotalSize}function $e(e,t,r){var a={chunk:t}
try{ce(e,a,r)}catch(i){return void tt(e,i)}var n=e._controlledWritableStream
!1===Ee(n)&&"writable"===n._state&&Be(n,nt(e)),et(e)}function et(e){var t=e._controlledWritableStream
if(!1!==e._started&&void 0===t._inFlightWriteRequest)if("erroring"!==t._state){if(0!==e._queue.length){var r=le(e)
"close"===r?rt(e):at(e,r.chunk)}}else Ce(t)}function tt(e,t){"writable"===e._controlledWritableStream._state&&it(e,t)}function rt(e){var t=e._controlledWritableStream
_e(t),se(e)
var r=e._closeAlgorithm()
Ke(e),O(r,(function(){Te(t)}),(function(e){Ie(t,e)}))}function at(e,t){var r=e._controlledWritableStream
Fe(r),O(e._writeAlgorithm(t),(function(){Ae(r)
var t=r._state
if(se(e),!1===Ee(r)&&"writable"===t){var a=nt(e)
Be(r,a)}et(e)}),(function(t){"writable"===r._state&&Ke(e),Oe(r,t)}))}function nt(e){return Qe(e)<=0}function it(e,t){var r=e._controlledWritableStream
Ke(e),xe(r,t)}function ot(e){return new TypeError("WritableStream.prototype."+e+" can only be used on a WritableStream")}function st(e){return new TypeError("WritableStreamDefaultWriter.prototype."+e+" can only be used on a WritableStreamDefaultWriter")}function ct(e){return new TypeError("Cannot "+e+" a stream using a released writer")}function lt(e){e._closedPromise=S((function(t,r){e._closedPromise_resolve=t,e._closedPromise_reject=r,e._closedPromiseState="pending"}))}function ut(e,t){lt(e),ft(e,t)}function ht(e){lt(e),pt(e)}function ft(e,t){P(e._closedPromise),e._closedPromise_reject(t),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0,e._closedPromiseState="rejected"}function dt(e,t){ut(e,t)}function pt(e){e._closedPromise_resolve(void 0),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0,e._closedPromiseState="resolved"}function gt(e){e._readyPromise=S((function(t,r){e._readyPromise_resolve=t,e._readyPromise_reject=r})),e._readyPromiseState="pending"}function mt(e,t){gt(e),bt(e,t)}function vt(e){gt(e),kt(e)}function bt(e,t){P(e._readyPromise),e._readyPromise_reject(t),e._readyPromise_resolve=void 0,e._readyPromise_reject=void 0,e._readyPromiseState="rejected"}function yt(e){gt(e)}function wt(e,t){mt(e,t)}function kt(e){e._readyPromise_resolve(void 0),e._readyPromise_resolve=void 0,e._readyPromise_reject=void 0,e._readyPromiseState="fulfilled"}function St(e){if("object"!=typeof e||null===e)return!1
try{return"boolean"==typeof e.aborted}catch(Z){return!1}}var xt="undefined"!=typeof DOMException?DOMException:void 0
function Ct(e){if("function"!=typeof e&&"object"!=typeof e)return!1
try{return new e,!0}catch(Z){return!1}}function At(){var e=function(e,t){this.message=e||"",this.name=t||"Error",Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}
return e.prototype=Object.create(Error.prototype),Object.defineProperty(e.prototype,"constructor",{value:e,writable:!0,configurable:!0}),e}var Ot=Ct(xt)?xt:At()
function Tt(e,t,a,n,i,o){var s=X(e),c=pe(t)
e._disturbed=!0
var l=!1,u=x(void 0)
return S((function(h,f){var d
if(void 0!==o){if(d=function(){var r=new Ot("Aborted","AbortError"),a=[]
!1===n&&a.push((function(){return"writable"===t._state?ye(t,r):x(void 0)})),!1===i&&a.push((function(){return"readable"===e._state?Dr(e,r):x(void 0)})),w((function(){return Promise.all(a.map((function(e){return e()})))}),!0,r)},!0===o.aborted)return void d()
o.addEventListener("abort",d)}function p(){return S((function(e,t){function r(a){a?e():A(g(),r,t)}r(!1)}))}function g(){return!0===l?x(!0):A(c._readyPromise,(function(){return A(te(s),(function(e){return!0===e.done||(u=A(He(c,e.value),void 0,r),!1)}))}))}if(b(e,s._closedPromise,(function(e){!1===n?w((function(){return ye(t,e)}),!0,e):k(!0,e)})),b(t,c._closedPromise,(function(t){!1===i?w((function(){return Dr(e,t)}),!0,t):k(!0,t)})),y(e,s._closedPromise,(function(){!1===a?w((function(){return Ue(c)})):k()})),!0===Ee(t)||"closed"===t._state){var m=new TypeError("the destination writable stream closed before all data could be piped to it")
!1===i?w((function(){return Dr(e,m)}),!0,m):k(!0,m)}function v(){var e=u
return A(u,(function(){return e!==u?v():void 0}))}function b(e,t,r){"errored"===e._state?r(e._storedError):I(t,r)}function y(e,t,r){"closed"===e._state?r():T(t,r)}function w(e,r,a){function n(){O(e(),(function(){return C(r,a)}),(function(e){return C(!0,e)}))}!0!==l&&(l=!0,"writable"===t._state&&!1===Ee(t)?T(v(),n):n())}function k(e,r){!0!==l&&(l=!0,"writable"===t._state&&!1===Ee(t)?T(v(),(function(){return C(e,r)})):C(e,r))}function C(e,t){Ge(c),D(s),void 0!==o&&o.removeEventListener("abort",d),e?f(t):h(void 0)}P(p())}))}var It=function(){function e(){throw new TypeError}return Object.defineProperty(e.prototype,"desiredSize",{get:function(){if(!1===Et(this))throw qt("desiredSize")
return Dt(this)},enumerable:!0,configurable:!0}),e.prototype.close=function(){if(!1===Et(this))throw qt("close")
if(!1===Nt(this))throw new TypeError("The stream is not in a state that permits close")
Rt(this)},e.prototype.enqueue=function(e){if(!1===Et(this))throw qt("enqueue")
if(!1===Nt(this))throw new TypeError("The stream is not in a state that permits enqueue")
return Bt(this,e)},e.prototype.error=function(e){if(!1===Et(this))throw qt("error")
Mt(this,e)},e.prototype[H]=function(e){ue(this)
var t=this._cancelAlgorithm(e)
return Ft(this),t},e.prototype[W]=function(){var e=this._controlledReadableStream
if(this._queue.length>0){var t=se(this)
return!0===this._closeRequested&&0===this._queue.length?(Ft(this),Lr(e)):Pt(this),x(R(t,!1,e._reader._forAuthorCode))}var r=V(e)
return Pt(this),r},e}()
function Et(e){return!!i(e)&&!!Object.prototype.hasOwnProperty.call(e,"_controlledReadableStream")}function Pt(e){!1!==_t(e)&&(!0!==e._pulling?(e._pulling=!0,O(e._pullAlgorithm(),(function(){e._pulling=!1,!0===e._pullAgain&&(e._pullAgain=!1,Pt(e))}),(function(t){Mt(e,t)}))):e._pullAgain=!0)}function _t(e){var t=e._controlledReadableStream
return!1!==Nt(e)&&!1!==e._started&&(!0===Mr(t)&&K(t)>0||Dt(e)>0)}function Ft(e){e._pullAlgorithm=void 0,e._cancelAlgorithm=void 0,e._strategySizeAlgorithm=void 0}function Rt(e){var t=e._controlledReadableStream
e._closeRequested=!0,0===e._queue.length&&(Ft(e),Lr(t))}function Bt(e,t){var r=e._controlledReadableStream
if(!0===Mr(r)&&K(r)>0)Y(r,t,!1)
else{var a=void 0
try{a=e._strategySizeAlgorithm(t)}catch(n){throw Mt(e,n),n}try{ce(e,t,a)}catch(i){throw Mt(e,i),i}}Pt(e)}function Mt(e,t){var r=e._controlledReadableStream
"readable"===r._state&&(ue(e),Ft(e),Nr(r,t))}function Dt(e){var t=e._controlledReadableStream._state
return"errored"===t?null:"closed"===t?0:e._strategyHWM-e._queueTotalSize}function Lt(e){return!0!==_t(e)}function Nt(e){var t=e._controlledReadableStream._state
return!1===e._closeRequested&&"readable"===t}function Ut(e,t,r,a,n,i,o){t._controlledReadableStream=e,t._queue=void 0,t._queueTotalSize=void 0,ue(t),t._started=!1,t._closeRequested=!1,t._pullAgain=!1,t._pulling=!1,t._strategySizeAlgorithm=o,t._strategyHWM=i,t._pullAlgorithm=a,t._cancelAlgorithm=n,e._readableStreamController=t,O(x(r()),(function(){t._started=!0,Pt(t)}),(function(e){Mt(t,e)}))}function jt(e,t,r,a){var n=Object.create(It.prototype)
function i(){return f(t,"start",[n])}var o=h(t,"pull",0,[n]),s=h(t,"cancel",1,[])
Ut(e,n,i,o,s,r,a)}function qt(e){return new TypeError("ReadableStreamDefaultController.prototype."+e+" can only be used on a ReadableStreamDefaultController")}function zt(e,t){var r,a,n,i,s,c=X(e),l=!1,u=!1,h=!1,f=S((function(e){s=e}))
function d(){return!0===l||(l=!0,P(E(te(c),(function(e){if(l=!1,!0===e.done)return!1===u&&Rt(n._readableStreamController),void(!1===h&&Rt(i._readableStreamController))
var t=e.value,r=t,a=t
!1===u&&Bt(n._readableStreamController,r),!1===h&&Bt(i._readableStreamController,a)})))),x(void 0)}function p(t){if(u=!0,r=t,!0===h){var n=o([r,a]),i=Dr(e,n)
s(i)}return f}function g(t){if(h=!0,a=t,!0===u){var n=o([r,a]),i=Dr(e,n)
s(i)}return f}function m(){}return n=Fr(m,d,p),i=Fr(m,d,g),I(c._closedPromise,(function(e){Mt(n._readableStreamController,e),Mt(i._readableStreamController,e)})),[n,i]}var Gt=Number.isInteger||function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e},Ht=function(){function e(){throw new TypeError("ReadableStreamBYOBRequest cannot be used directly")}return Object.defineProperty(e.prototype,"view",{get:function(){if(!1===Vt(this))throw wr("view")
return this._view},enumerable:!0,configurable:!0}),e.prototype.respond=function(e){if(!1===Vt(this))throw wr("respond")
if(void 0===this._associatedReadableByteStreamController)throw new TypeError("This BYOB request has been invalidated")
g(this._view.buffer),gr(this._associatedReadableByteStreamController,e)},e.prototype.respondWithNewView=function(e){if(!1===Vt(this))throw wr("respond")
if(void 0===this._associatedReadableByteStreamController)throw new TypeError("This BYOB request has been invalidated")
if(!ArrayBuffer.isView(e))throw new TypeError("You can only respond with array buffer views")
g(e.buffer),mr(this._associatedReadableByteStreamController,e)},e}(),Wt=function(){function e(){throw new TypeError("ReadableByteStreamController constructor cannot be used directly")}return Object.defineProperty(e.prototype,"byobRequest",{get:function(){if(!1===Xt(this))throw kr("byobRequest")
if(void 0===this._byobRequest&&this._pendingPullIntos.length>0){var e=this._pendingPullIntos.peek(),t=new Uint8Array(e.buffer,e.byteOffset+e.bytesFilled,e.byteLength-e.bytesFilled),r=Object.create(Ht.prototype)
yr(r,this,t),this._byobRequest=r}return this._byobRequest},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"desiredSize",{get:function(){if(!1===Xt(this))throw kr("desiredSize")
return pr(this)},enumerable:!0,configurable:!0}),e.prototype.close=function(){if(!1===Xt(this))throw kr("close")
if(!0===this._closeRequested)throw new TypeError("The stream has already been closed; do not close it again!")
var e=this._controlledReadableByteStream._state
if("readable"!==e)throw new TypeError("The stream (in "+e+" state) is not in the readable state and cannot be closed")
hr(this)},e.prototype.enqueue=function(e){if(!1===Xt(this))throw kr("enqueue")
if(!0===this._closeRequested)throw new TypeError("stream is closed or draining")
var t=this._controlledReadableByteStream._state
if("readable"!==t)throw new TypeError("The stream (in "+t+" state) is not in the readable state and cannot be enqueued to")
if(!ArrayBuffer.isView(e))throw new TypeError("You can only enqueue array buffer views when using a ReadableByteStreamController")
g(e.buffer),fr(this,e)},e.prototype.error=function(e){if(!1===Xt(this))throw kr("error")
dr(this,e)},e.prototype[H]=function(e){this._pendingPullIntos.length>0&&(this._pendingPullIntos.peek().bytesFilled=0),ue(this)
var t=this._cancelAlgorithm(e)
return ur(this),t},e.prototype[W]=function(){var e=this._controlledReadableByteStream
if(this._queueTotalSize>0){var t=this._queue.shift()
this._queueTotalSize-=t.byteLength,tr(this)
var r=void 0
try{r=new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}catch(s){return C(s)}return x(R(r,!1,e._reader._forAuthorCode))}var a=this._autoAllocateChunkSize
if(void 0!==a){var n=void 0
try{n=new ArrayBuffer(a)}catch(c){return C(c)}var i={buffer:n,byteOffset:0,byteLength:a,bytesFilled:0,elementSize:1,ctor:Uint8Array,readerType:"default"}
this._pendingPullIntos.push(i)}var o=V(e)
return Yt(this),o},e}()
function Xt(e){return!!i(e)&&!!Object.prototype.hasOwnProperty.call(e,"_controlledReadableByteStream")}function Vt(e){return!!i(e)&&!!Object.prototype.hasOwnProperty.call(e,"_associatedReadableByteStreamController")}function Yt(e){!1!==lr(e)&&(!0!==e._pulling?(e._pulling=!0,O(e._pullAlgorithm(),(function(){e._pulling=!1,!0===e._pullAgain&&(e._pullAgain=!1,Yt(e))}),(function(t){dr(e,t)}))):e._pullAgain=!0)}function Kt(e){rr(e),e._pendingPullIntos=new F}function Jt(e,t){var r=!1
"closed"===e._state&&(r=!0)
var a=Zt(t)
"default"===t.readerType?Y(e,a,r):Cr(e,a,r)}function Zt(e){var t=e.bytesFilled,r=e.elementSize
return new e.ctor(e.buffer,e.byteOffset,t/r)}function Qt(e,t,r,a){e._queue.push({buffer:t,byteOffset:r,byteLength:a}),e._queueTotalSize+=a}function $t(e,t){var r=t.elementSize,a=t.bytesFilled-t.bytesFilled%r,n=Math.min(e._queueTotalSize,t.byteLength-t.bytesFilled),i=t.bytesFilled+n,o=i-i%r,c=n,l=!1
o>a&&(c=o-t.bytesFilled,l=!0)
for(var u=e._queue;c>0;){var h=u.peek(),f=Math.min(c,h.byteLength),d=t.byteOffset+t.bytesFilled
s(t.buffer,d,h.buffer,h.byteOffset,f),h.byteLength===f?u.shift():(h.byteOffset+=f,h.byteLength-=f),e._queueTotalSize-=f,er(e,f,t),c-=f}return l}function er(e,t,r){rr(e),r.bytesFilled+=t}function tr(e){0===e._queueTotalSize&&!0===e._closeRequested?(ur(e),Lr(e._controlledReadableByteStream)):Yt(e)}function rr(e){void 0!==e._byobRequest&&(e._byobRequest._associatedReadableByteStreamController=void 0,e._byobRequest._view=void 0,e._byobRequest=void 0)}function ar(e){for(;e._pendingPullIntos.length>0;){if(0===e._queueTotalSize)return
var t=e._pendingPullIntos.peek()
!0===$t(e,t)&&(cr(e),Jt(e._controlledReadableByteStream,t))}}function nr(e,t){var r=e._controlledReadableByteStream,a=1
t.constructor!==DataView&&(a=t.constructor.BYTES_PER_ELEMENT)
var n=t.constructor,i={buffer:p(t.buffer),byteOffset:t.byteOffset,byteLength:t.byteLength,bytesFilled:0,elementSize:a,ctor:n,readerType:"byob"}
if(e._pendingPullIntos.length>0)return e._pendingPullIntos.push(i),xr(r)
if("closed"===r._state)return x(R(new n(i.buffer,i.byteOffset,0),!0,r._reader._forAuthorCode))
if(e._queueTotalSize>0){if(!0===$t(e,i)){var o=Zt(i)
return tr(e),x(R(o,!1,r._reader._forAuthorCode))}if(!0===e._closeRequested){var s=new TypeError("Insufficient bytes to fill elements in the given buffer")
return dr(e,s),C(s)}}e._pendingPullIntos.push(i)
var c=xr(r)
return Yt(e),c}function ir(e,t){t.buffer=p(t.buffer)
var r=e._controlledReadableByteStream
if(!0===Or(r))for(;Ar(r)>0;)Jt(r,cr(e))}function or(e,t,r){if(r.bytesFilled+t>r.byteLength)throw new RangeError("bytesWritten out of range")
if(er(e,t,r),!(r.bytesFilled<r.elementSize)){cr(e)
var a=r.bytesFilled%r.elementSize
if(a>0){var n=r.byteOffset+r.bytesFilled,i=r.buffer.slice(n-a,n)
Qt(e,i,0,i.byteLength)}r.buffer=p(r.buffer),r.bytesFilled-=a,Jt(e._controlledReadableByteStream,r),ar(e)}}function sr(e,t){var r=e._pendingPullIntos.peek()
if("closed"===e._controlledReadableByteStream._state){if(0!==t)throw new TypeError("bytesWritten must be 0 when calling respond() on a closed stream")
ir(e,r)}else or(e,t,r)
Yt(e)}function cr(e){var t=e._pendingPullIntos.shift()
return rr(e),t}function lr(e){var t=e._controlledReadableByteStream
return"readable"===t._state&&!0!==e._closeRequested&&!1!==e._started&&(!0===J(t)&&K(t)>0||!0===Or(t)&&Ar(t)>0||pr(e)>0)}function ur(e){e._pullAlgorithm=void 0,e._cancelAlgorithm=void 0}function hr(e){var t=e._controlledReadableByteStream
if(e._queueTotalSize>0)e._closeRequested=!0
else{if(e._pendingPullIntos.length>0&&e._pendingPullIntos.peek().bytesFilled>0){var r=new TypeError("Insufficient bytes to fill elements in the given buffer")
throw dr(e,r),r}ur(e),Lr(t)}}function fr(e,t){var r=e._controlledReadableByteStream,a=t.buffer,n=t.byteOffset,i=t.byteLength,o=p(a)
!0===J(r)?0===K(r)?Qt(e,o,n,i):Y(r,new Uint8Array(o,n,i),!1):!0===Or(r)?(Qt(e,o,n,i),ar(e)):Qt(e,o,n,i),Yt(e)}function dr(e,t){var r=e._controlledReadableByteStream
"readable"===r._state&&(Kt(e),ue(e),ur(e),Nr(r,t))}function pr(e){var t=e._controlledReadableByteStream._state
return"errored"===t?null:"closed"===t?0:e._strategyHWM-e._queueTotalSize}function gr(e,t){if(!1===c(t=Number(t)))throw new RangeError("bytesWritten must be a finite")
sr(e,t)}function mr(e,t){var r=e._pendingPullIntos.peek()
if(r.byteOffset+r.bytesFilled!==t.byteOffset)throw new RangeError("The region specified by view does not match byobRequest")
if(r.byteLength!==t.byteLength)throw new RangeError("The buffer of view has different capacity than byobRequest")
r.buffer=t.buffer,sr(e,t.byteLength)}function vr(e,t,r,a,n,i,o){t._controlledReadableByteStream=e,t._pullAgain=!1,t._pulling=!1,t._byobRequest=void 0,t._queue=t._queueTotalSize=void 0,ue(t),t._closeRequested=!1,t._started=!1,t._strategyHWM=m(i),t._pullAlgorithm=a,t._cancelAlgorithm=n,t._autoAllocateChunkSize=o,t._pendingPullIntos=new F,e._readableStreamController=t,O(x(r()),(function(){t._started=!0,Yt(t)}),(function(e){dr(t,e)}))}function br(e,t,r){var a=Object.create(Wt.prototype)
function n(){return f(t,"start",[a])}var i=h(t,"pull",0,[a]),o=h(t,"cancel",1,[]),s=t.autoAllocateChunkSize
if(void 0!==s&&(s=Number(s),!1===Gt(s)||s<=0))throw new RangeError("autoAllocateChunkSize must be a positive integer")
vr(e,a,n,i,o,r,s)}function yr(e,t,r){e._associatedReadableByteStreamController=t,e._view=r}function wr(e){return new TypeError("ReadableStreamBYOBRequest.prototype."+e+" can only be used on a ReadableStreamBYOBRequest")}function kr(e){return new TypeError("ReadableByteStreamController.prototype."+e+" can only be used on a ReadableByteStreamController")}function Sr(e,t){void 0===t&&(t=!1)
var r=new Tr(e)
return r._forAuthorCode=t,r}function xr(e){return S((function(t,r){var a={_resolve:t,_reject:r}
e._reader._readIntoRequests.push(a)}))}function Cr(e,t,r){var a=e._reader
a._readIntoRequests.shift()._resolve(R(t,r,a._forAuthorCode))}function Ar(e){return e._reader._readIntoRequests.length}function Or(e){var t=e._reader
return void 0!==t&&!!Ir(t)}var Tr=function(){function e(e){if(!Br(e))throw new TypeError("ReadableStreamBYOBReader can only be constructed with a ReadableStream instance given a byte source")
if(!1===Xt(e._readableStreamController))throw new TypeError("Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source")
if(Mr(e))throw new TypeError("This stream has already been locked for exclusive reading by another reader")
B(this,e),this._readIntoRequests=new F}return Object.defineProperty(e.prototype,"closed",{get:function(){return Ir(this)?this._closedPromise:C(Pr("closed"))},enumerable:!0,configurable:!0}),e.prototype.cancel=function(e){return Ir(this)?void 0===this._ownerReadableStream?C(L("cancel")):M(this,e):C(Pr("cancel"))},e.prototype.read=function(e){return Ir(this)?void 0===this._ownerReadableStream?C(L("read from")):ArrayBuffer.isView(e)?(g(e.buffer),0===e.byteLength?C(new TypeError("view must have non-zero byteLength")):Er(this,e)):C(new TypeError("view must be an array buffer view")):C(Pr("read"))},e.prototype.releaseLock=function(){if(!Ir(this))throw Pr("releaseLock")
if(void 0!==this._ownerReadableStream){if(this._readIntoRequests.length>0)throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled")
D(this)}},e}()
function Ir(e){return!!i(e)&&!!Object.prototype.hasOwnProperty.call(e,"_readIntoRequests")}function Er(e,t){var r=e._ownerReadableStream
return r._disturbed=!0,"errored"===r._state?C(r._storedError):nr(r._readableStreamController,t)}function Pr(e){return new TypeError("ReadableStreamBYOBReader.prototype."+e+" can only be used on a ReadableStreamBYOBReader")}var _r=function(){function e(e,t){void 0===e&&(e={}),void 0===t&&(t={}),Rr(this)
var r=t.size,a=t.highWaterMark,n=e.type
if("bytes"===String(n)){if(void 0!==r)throw new RangeError("The strategy for a byte stream cannot have a size function")
void 0===a&&(a=0),br(this,e,a=m(a))}else{if(void 0!==n)throw new RangeError("Invalid type is specified")
var i=v(r)
void 0===a&&(a=1),jt(this,e,a=m(a),i)}}return Object.defineProperty(e.prototype,"locked",{get:function(){if(!1===Br(this))throw Ur("locked")
return Mr(this)},enumerable:!0,configurable:!0}),e.prototype.cancel=function(e){return!1===Br(this)?C(Ur("cancel")):!0===Mr(this)?C(new TypeError("Cannot cancel a stream that already has a reader")):Dr(this,e)},e.prototype.getReader=function(e){var t=(void 0===e?{}:e).mode
if(!1===Br(this))throw Ur("getReader")
if(void 0===t)return X(this,!0)
if("byob"===(t=String(t)))return Sr(this,!0)
throw new RangeError("Invalid mode is specified")},e.prototype.pipeThrough=function(e,t){var r=e.writable,a=e.readable,n=void 0===t?{}:t,i=n.preventClose,o=n.preventAbort,s=n.preventCancel,c=n.signal
if(!1===Br(this))throw Ur("pipeThrough")
if(!1===ve(r))throw new TypeError("writable argument to pipeThrough must be a WritableStream")
if(!1===Br(a))throw new TypeError("readable argument to pipeThrough must be a ReadableStream")
if(i=Boolean(i),o=Boolean(o),s=Boolean(s),void 0!==c&&!St(c))throw new TypeError("ReadableStream.prototype.pipeThrough's signal option must be an AbortSignal")
if(!0===Mr(this))throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream")
if(!0===be(r))throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream")
return P(Tt(this,r,i,o,s,c)),a},e.prototype.pipeTo=function(e,t){var r=void 0===t?{}:t,a=r.preventClose,n=r.preventAbort,i=r.preventCancel,o=r.signal
return!1===Br(this)?C(Ur("pipeTo")):!1===ve(e)?C(new TypeError("ReadableStream.prototype.pipeTo's first argument must be a WritableStream")):(a=Boolean(a),n=Boolean(n),i=Boolean(i),void 0===o||St(o)?!0===Mr(this)?C(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream")):!0===be(e)?C(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream")):Tt(this,e,a,n,i,o):C(new TypeError("ReadableStream.prototype.pipeTo's signal option must be an AbortSignal")))},e.prototype.tee=function(){if(!1===Br(this))throw Ur("tee")
return o(zt(this))},e.prototype.getIterator=function(e){var t=(void 0===e?{}:e).preventCancel,r=void 0!==t&&t
if(!1===Br(this))throw Ur("getIterator")
return ne(this,r)},e}()
function Fr(e,t,r,a,n){void 0===a&&(a=1),void 0===n&&(n=function(){return 1})
var i=Object.create(_r.prototype)
return Rr(i),Ut(i,Object.create(It.prototype),e,t,r,a,n),i}function Rr(e){e._state="readable",e._reader=void 0,e._storedError=void 0,e._disturbed=!1}function Br(e){return!!i(e)&&!!Object.prototype.hasOwnProperty.call(e,"_readableStreamController")}function Mr(e){return void 0!==e._reader}function Dr(e,t){return e._disturbed=!0,"closed"===e._state?x(void 0):"errored"===e._state?C(e._storedError):(Lr(e),E(e._readableStreamController[H](t),r))}function Lr(e){e._state="closed"
var t=e._reader
void 0!==t&&(ee(t)&&(t._readRequests.forEach((function(e){e._resolve(R(void 0,!0,t._forAuthorCode))})),t._readRequests=new F),G(t))}function Nr(e,t){e._state="errored",e._storedError=t
var r=e._reader
void 0!==r&&(ee(r)?(r._readRequests.forEach((function(e){e._reject(t)})),r._readRequests=new F):(r._readIntoRequests.forEach((function(e){e._reject(t)})),r._readIntoRequests=new F),q(r,t))}function Ur(e){return new TypeError("ReadableStream.prototype."+e+" can only be used on a ReadableStream")}"symbol"==typeof t.asyncIterator&&Object.defineProperty(_r.prototype,t.asyncIterator,{value:_r.prototype.getIterator,enumerable:!1,writable:!0,configurable:!0})
var jr=function(){function e(e){var t=e.highWaterMark
this.highWaterMark=t}return e.prototype.size=function(e){return e.byteLength},e}(),qr=function(){function e(e){var t=e.highWaterMark
this.highWaterMark=t}return e.prototype.size=function(){return 1},e}(),zr=function(){function e(e,t,r){void 0===e&&(e={}),void 0===t&&(t={}),void 0===r&&(r={})
var a=t.size,n=t.highWaterMark,i=r.size,o=r.highWaterMark
if(void 0!==e.writableType)throw new RangeError("Invalid writable type specified")
var s=v(a)
if(void 0===n&&(n=1),n=m(n),void 0!==e.readableType)throw new RangeError("Invalid readable type specified")
var c,l=v(i)
void 0===o&&(o=0),o=m(o),Gr(this,S((function(e){c=e})),n,s,o,l),Zr(this,e)
var u=f(e,"start",[this._transformStreamController])
c(u)}return Object.defineProperty(e.prototype,"readable",{get:function(){if(!1===Hr(this))throw ca("readable")
return this._readable},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"writable",{get:function(){if(!1===Hr(this))throw ca("writable")
return this._writable},enumerable:!0,configurable:!0}),e}()
function Gr(e,t,r,a,n,i){function o(){return t}function s(t){return aa(e,t)}function c(t){return na(e,t)}function l(){return ia(e)}function u(){return oa(e)}function h(t){return Xr(e,t),x(void 0)}e._writable=ge(o,s,l,c,r,a),e._readable=Fr(o,u,h,n,i),e._backpressure=void 0,e._backpressureChangePromise=void 0,e._backpressureChangePromise_resolve=void 0,Vr(e,!0),e._transformStreamController=void 0}function Hr(e){return!!i(e)&&!!Object.prototype.hasOwnProperty.call(e,"_transformStreamController")}function Wr(e,t){Mt(e._readable._readableStreamController,t),Xr(e,t)}function Xr(e,t){Qr(e._transformStreamController),tt(e._writable._writableStreamController,t),!0===e._backpressure&&Vr(e,!1)}function Vr(e,t){void 0!==e._backpressureChangePromise&&e._backpressureChangePromise_resolve(),e._backpressureChangePromise=S((function(t){e._backpressureChangePromise_resolve=t})),e._backpressure=t}var Yr=function(){function e(){throw new TypeError("TransformStreamDefaultController instances cannot be created directly")}return Object.defineProperty(e.prototype,"desiredSize",{get:function(){if(!1===Kr(this))throw sa("desiredSize")
return Dt(this._controlledTransformStream._readable._readableStreamController)},enumerable:!0,configurable:!0}),e.prototype.enqueue=function(e){if(!1===Kr(this))throw sa("enqueue")
$r(this,e)},e.prototype.error=function(e){if(!1===Kr(this))throw sa("error")
ea(this,e)},e.prototype.terminate=function(){if(!1===Kr(this))throw sa("terminate")
ra(this)},e}()
function Kr(e){return!!i(e)&&!!Object.prototype.hasOwnProperty.call(e,"_controlledTransformStream")}function Jr(e,t,r,a){t._controlledTransformStream=e,e._transformStreamController=t,t._transformAlgorithm=r,t._flushAlgorithm=a}function Zr(e,t){var r=Object.create(Yr.prototype),a=function(e){try{return $r(r,e),x(void 0)}catch(t){return C(t)}},n=t.transform
if(void 0!==n){if("function"!=typeof n)throw new TypeError("transform is not a method")
a=function(e){return d(n,t,[e,r])}}var i=h(t,"flush",0,[r])
Jr(e,r,a,i)}function Qr(e){e._transformAlgorithm=void 0,e._flushAlgorithm=void 0}function $r(e,t){var r=e._controlledTransformStream,a=r._readable._readableStreamController
if(!1===Nt(a))throw new TypeError("Readable side is not in a state that permits enqueue")
try{Bt(a,t)}catch(n){throw Xr(r,n),r._readable._storedError}Lt(a)!==r._backpressure&&Vr(r,!0)}function ea(e,t){Wr(e._controlledTransformStream,t)}function ta(e,t){return E(e._transformAlgorithm(t),void 0,(function(t){throw Wr(e._controlledTransformStream,t),t}))}function ra(e){var t=e._controlledTransformStream,r=t._readable._readableStreamController
!0===Nt(r)&&Rt(r),Xr(t,new TypeError("TransformStream terminated"))}function aa(e,t){var r=e._transformStreamController
return!0===e._backpressure?E(e._backpressureChangePromise,(function(){var a=e._writable
if("erroring"===a._state)throw a._storedError
return ta(r,t)})):ta(r,t)}function na(e,t){return Wr(e,t),x(void 0)}function ia(e){var t=e._readable,r=e._transformStreamController,a=r._flushAlgorithm()
return Qr(r),E(a,(function(){if("errored"===t._state)throw t._storedError
var e=t._readableStreamController
!0===Nt(e)&&Rt(e)}),(function(r){throw Wr(e,r),t._storedError}))}function oa(e){return Vr(e,!1),e._backpressureChangePromise}function sa(e){return new TypeError("TransformStreamDefaultController.prototype."+e+" can only be used on a TransformStreamDefaultController")}function ca(e){return new TypeError("TransformStream.prototype."+e+" can only be used on a TransformStream")}e.ByteLengthQueuingStrategy=jr,e.CountQueuingStrategy=qr,e.ReadableStream=_r,e.TransformStream=zr,e.WritableStream=de,Object.defineProperty(e,"__esModule",{value:!0})}(t)},function(e,t,r){r(147),r(118),r(77),r(120)
var a=r(43)
e.exports=a.Map},function(e,t,r){"use strict"
var a=r(148),n=r(152)
e.exports=a("Map",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),n)},function(e,t,r){"use strict"
var a=r(10),n=r(11),i=r(52),o=r(29),s=r(149),c=r(104),l=r(126),u=r(22),h=r(14),f=r(97),d=r(85),p=r(151)
e.exports=function(e,t,r){var g=-1!==e.indexOf("Map"),m=-1!==e.indexOf("Weak"),v=g?"set":"add",b=n[e],y=b&&b.prototype,w=b,k={},S=function(e){var t=y[e]
o(y,e,"add"==e?function(e){return t.call(this,0===e?0:e),this}:"delete"==e?function(e){return!(m&&!u(e))&&t.call(this,0===e?0:e)}:"get"==e?function(e){return m&&!u(e)?void 0:t.call(this,0===e?0:e)}:"has"==e?function(e){return!(m&&!u(e))&&t.call(this,0===e?0:e)}:function(e,r){return t.call(this,0===e?0:e,r),this})}
if(i(e,"function"!=typeof b||!(m||y.forEach&&!h((function(){(new b).entries().next()})))))w=r.getConstructor(t,e,g,v),s.REQUIRED=!0
else if(i(e,!0)){var x=new w,C=x[v](m?{}:-0,1)!=x,A=h((function(){x.has(1)})),O=f((function(e){new b(e)})),T=!m&&h((function(){for(var e=new b,t=5;t--;)e[v](t,t)
return!e.has(-0)}))
O||((w=t((function(t,r){l(t,w,e)
var a=p(new b,t,w)
return null!=r&&c(r,a[v],a,g),a}))).prototype=y,y.constructor=w),(A||T)&&(S("delete"),S("has"),g&&S("get")),(T||C)&&S(v),m&&y.clear&&delete y.clear}return k[e]=w,a({global:!0,forced:w!=b},k),d(w,e),m||r.setStrong(w,e,g),w}},function(e,t,r){var a=r(39),n=r(22),i=r(23),o=r(27).f,s=r(38),c=r(150),l=s("meta"),u=0,h=Object.isExtensible||function(){return!0},f=function(e){o(e,l,{value:{objectID:"O"+ ++u,weakData:{}}})},d=e.exports={REQUIRED:!1,fastKey:function(e,t){if(!n(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e
if(!i(e,l)){if(!h(e))return"F"
if(!t)return"E"
f(e)}return e[l].objectID},getWeakData:function(e,t){if(!i(e,l)){if(!h(e))return!0
if(!t)return!1
f(e)}return e[l].weakData},onFreeze:function(e){return c&&d.REQUIRED&&h(e)&&!i(e,l)&&f(e),e}}
a[l]=!0},function(e,t,r){var a=r(14)
e.exports=!a((function(){return Object.isExtensible(Object.preventExtensions({}))}))},function(e,t,r){var a=r(22),n=r(87)
e.exports=function(e,t,r){var i,o
return n&&"function"==typeof(i=t.constructor)&&i!==r&&a(o=i.prototype)&&o!==r.prototype&&n(e,o),e}},function(e,t,r){"use strict"
var a=r(27).f,n=r(71),i=r(124),o=r(62),s=r(126),c=r(104),l=r(79),u=r(125),h=r(13),f=r(149).fastKey,d=r(33),p=d.set,g=d.getterFor
e.exports={getConstructor:function(e,t,r,l){var u=e((function(e,a){s(e,u,t),p(e,{type:t,index:n(null),first:void 0,last:void 0,size:0}),h||(e.size=0),null!=a&&c(a,e[l],e,r)})),d=g(t),m=function(e,t,r){var a,n,i=d(e),o=v(e,t)
return o?o.value=r:(i.last=o={index:n=f(t,!0),key:t,value:r,previous:a=i.last,next:void 0,removed:!1},i.first||(i.first=o),a&&(a.next=o),h?i.size++:e.size++,"F"!==n&&(i.index[n]=o)),e},v=function(e,t){var r,a=d(e),n=f(t)
if("F"!==n)return a.index[n]
for(r=a.first;r;r=r.next)if(r.key==t)return r}
return i(u.prototype,{clear:function(){for(var e=d(this),t=e.index,r=e.first;r;)r.removed=!0,r.previous&&(r.previous=r.previous.next=void 0),delete t[r.index],r=r.next
e.first=e.last=void 0,h?e.size=0:this.size=0},delete:function(e){var t=this,r=d(t),a=v(t,e)
if(a){var n=a.next,i=a.previous
delete r.index[a.index],a.removed=!0,i&&(i.next=n),n&&(n.previous=i),r.first==a&&(r.first=n),r.last==a&&(r.last=i),h?r.size--:t.size--}return!!a},forEach:function(e){for(var t,r=d(this),a=o(e,arguments.length>1?arguments[1]:void 0,3);t=t?t.next:r.first;)for(a(t.value,t.key,this);t&&t.removed;)t=t.previous},has:function(e){return!!v(this,e)}}),i(u.prototype,r?{get:function(e){var t=v(this,e)
return t&&t.value},set:function(e,t){return m(this,0===e?0:e,t)}}:{add:function(e){return m(this,e=0===e?0:e,e)}}),h&&a(u.prototype,"size",{get:function(){return d(this).size}}),u},setStrong:function(e,t,r){var a=t+" Iterator",n=g(t),i=g(a)
l(e,t,(function(e,t){p(this,{type:a,target:e,state:n(e),kind:t,last:void 0})}),(function(){for(var e=i(this),t=e.kind,r=e.last;r&&r.removed;)r=r.previous
return e.target&&(e.last=r=r?r.next:e.state.first)?"keys"==t?{value:r.key,done:!1}:"values"==t?{value:r.value,done:!1}:{value:[r.key,r.value],done:!1}:(e.target=void 0,{value:void 0,done:!0})}),r?"entries":"values",!r,!0),u(t)}}},function(e,t,r){r(154),r(118),r(77),r(120)
var a=r(43)
e.exports=a.Set},function(e,t,r){"use strict"
var a=r(148),n=r(152)
e.exports=a("Set",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),n)},function(e,t,r){r(118),r(156),r(120)
var a=r(43)
e.exports=a.WeakMap},function(e,t,r){"use strict"
var a,n=r(11),i=r(124),o=r(149),s=r(148),c=r(157),l=r(22),u=r(33).enforce,h=r(34),f=!n.ActiveXObject&&"ActiveXObject"in n,d=Object.isExtensible,p=function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}},g=e.exports=s("WeakMap",p,c)
if(h&&f){a=c.getConstructor(p,"WeakMap",!0),o.REQUIRED=!0
var m=g.prototype,v=m.delete,b=m.has,y=m.get,w=m.set
i(m,{delete:function(e){if(l(e)&&!d(e)){var t=u(this)
return t.frozen||(t.frozen=new a),v.call(this,e)||t.frozen.delete(e)}return v.call(this,e)},has:function(e){if(l(e)&&!d(e)){var t=u(this)
return t.frozen||(t.frozen=new a),b.call(this,e)||t.frozen.has(e)}return b.call(this,e)},get:function(e){if(l(e)&&!d(e)){var t=u(this)
return t.frozen||(t.frozen=new a),b.call(this,e)?y.call(this,e):t.frozen.get(e)}return y.call(this,e)},set:function(e,t){if(l(e)&&!d(e)){var r=u(this)
r.frozen||(r.frozen=new a),b.call(this,e)?w.call(this,e,t):r.frozen.set(e,t)}else w.call(this,e,t)
return this}})}},function(e,t,r){"use strict"
var a=r(124),n=r(149).getWeakData,i=r(28),o=r(22),s=r(126),c=r(104),l=r(158),u=r(23),h=r(33),f=h.set,d=h.getterFor,p=l.find,g=l.findIndex,m=0,v=function(e){return e.frozen||(e.frozen=new b)},b=function(){this.entries=[]},y=function(e,t){return p(e.entries,(function(e){return e[0]===t}))}
b.prototype={get:function(e){var t=y(this,e)
if(t)return t[1]},has:function(e){return!!y(this,e)},set:function(e,t){var r=y(this,e)
r?r[1]=t:this.entries.push([e,t])},delete:function(e){var t=g(this.entries,(function(t){return t[0]===e}))
return~t&&this.entries.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,r,l){var h=e((function(e,a){s(e,h,t),f(e,{type:t,id:m++,frozen:void 0}),null!=a&&c(a,e[l],e,r)})),p=d(t),g=function(e,t,r){var a=p(e),o=n(i(t),!0)
return!0===o?v(a).set(t,r):o[a.id]=r,e}
return a(h.prototype,{delete:function(e){var t=p(this)
if(!o(e))return!1
var r=n(e)
return!0===r?v(t).delete(e):r&&u(r,t.id)&&delete r[t.id]},has:function(e){var t=p(this)
if(!o(e))return!1
var r=n(e)
return!0===r?v(t).has(e):r&&u(r,t.id)}}),a(h.prototype,r?{get:function(e){var t=p(this)
if(o(e)){var r=n(e)
return!0===r?v(t).get(e):r?r[t.id]:void 0}},set:function(e,t){return g(this,e,t)}}:{add:function(e){return g(this,e,!0)}}),h}}},function(e,t,r){var a=r(62),n=r(18),i=r(83),o=r(47),s=r(159),c=[].push,l=function(e){var t=1==e,r=2==e,l=3==e,u=4==e,h=6==e,f=5==e||h
return function(d,p,g,m){for(var v,b,y=i(d),w=n(y),k=a(p,g,3),S=o(w.length),x=0,C=m||s,A=t?C(d,S):r?C(d,0):void 0;S>x;x++)if((f||x in w)&&(b=k(v=w[x],x,y),e))if(t)A[x]=b
else if(b)switch(e){case 3:return!0
case 5:return v
case 6:return x
case 2:c.call(A,v)}else if(u)return!1
return h?-1:l||u?u:A}}
e.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},function(e,t,r){var a=r(22),n=r(160),i=r(57)("species")
e.exports=function(e,t){var r
return n(e)&&("function"!=typeof(r=e.constructor)||r!==Array&&!n(r.prototype)?a(r)&&null===(r=r[i])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===t?0:t)}},function(e,t,r){var a=r(19)
e.exports=Array.isArray||function(e){return"Array"==a(e)}},function(e,t,r){r(118),r(162),r(120)
var a=r(43)
e.exports=a.WeakSet},function(e,t,r){"use strict"
r(148)("WeakSet",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),r(157))},function(e,t,r){r(164)
var a=r(61)
e.exports=a("String","codePointAt")},function(e,t,r){"use strict"
var a=r(10),n=r(78).codeAt
a({target:"String",proto:!0},{codePointAt:function(e){return n(this,e)}})},function(e,t,r){r(166)
var a=r(43)
e.exports=a.String.fromCodePoint},function(e,t,r){var a=r(10),n=r(49),i=String.fromCharCode,o=String.fromCodePoint
a({target:"String",stat:!0,forced:!!o&&1!=o.length},{fromCodePoint:function(e){for(var t,r=[],a=arguments.length,o=0;a>o;){if(t=+arguments[o++],n(t,1114111)!==t)throw RangeError(t+" is not a valid code point")
r.push(t<65536?i(t):i(55296+((t-=65536)>>10),t%1024+56320))}return r.join("")}})},function(e,t,r){r(168),r(118),r(170),r(174),r(175),r(176),r(177),r(178),r(179),r(180),r(181),r(182),r(183),r(184),r(185),r(186),r(187),r(188),r(189)
var a=r(43)
e.exports=a.Symbol},function(e,t,r){"use strict"
var a=r(10),n=r(14),i=r(160),o=r(22),s=r(83),c=r(47),l=r(93),u=r(159),h=r(169),f=r(57),d=r(135),p=f("isConcatSpreadable"),g=9007199254740991,m="Maximum allowed index exceeded",v=d>=51||!n((function(){var e=[]
return e[p]=!1,e.concat()[0]!==e})),b=h("concat"),y=function(e){if(!o(e))return!1
var t=e[p]
return void 0!==t?!!t:i(e)}
a({target:"Array",proto:!0,forced:!v||!b},{concat:function(e){var t,r,a,n,i,o=s(this),h=u(o,0),f=0
for(t=-1,a=arguments.length;t<a;t++)if(y(i=-1===t?o:arguments[t])){if(f+(n=c(i.length))>g)throw TypeError(m)
for(r=0;r<n;r++,f++)r in i&&l(h,f,i[r])}else{if(f>=g)throw TypeError(m)
l(h,f++,i)}return h.length=f,h}})},function(e,t,r){var a=r(14),n=r(57),i=r(135),o=n("species")
e.exports=function(e){return i>=51||!a((function(){var t=[]
return(t.constructor={})[o]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},function(e,t,r){"use strict"
var a=r(10),n=r(11),i=r(42),o=r(37),s=r(13),c=r(58),l=r(59),u=r(14),h=r(23),f=r(160),d=r(22),p=r(28),g=r(83),m=r(17),v=r(21),b=r(16),y=r(71),w=r(73),k=r(44),S=r(171),x=r(51),C=r(12),A=r(27),O=r(15),T=r(26),I=r(29),E=r(36),P=r(35),_=r(39),F=r(38),R=r(57),B=r(172),M=r(173),D=r(85),L=r(33),N=r(158).forEach,U=P("hidden"),j="Symbol",q=R("toPrimitive"),z=L.set,G=L.getterFor(j),H=Object.prototype,W=n.Symbol,X=i("JSON","stringify"),V=C.f,Y=A.f,K=S.f,J=O.f,Z=E("symbols"),Q=E("op-symbols"),$=E("string-to-symbol-registry"),ee=E("symbol-to-string-registry"),te=E("wks"),re=n.QObject,ae=!re||!re.prototype||!re.prototype.findChild,ne=s&&u((function(){return 7!=y(Y({},"a",{get:function(){return Y(this,"a",{value:7}).a}})).a}))?function(e,t,r){var a=V(H,t)
a&&delete H[t],Y(e,t,r),a&&e!==H&&Y(H,t,a)}:Y,ie=function(e,t){var r=Z[e]=y(W.prototype)
return z(r,{type:j,tag:e,description:t}),s||(r.description=t),r},oe=l?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof W},se=function(e,t,r){e===H&&se(Q,t,r),p(e)
var a=v(t,!0)
return p(r),h(Z,a)?(r.enumerable?(h(e,U)&&e[U][a]&&(e[U][a]=!1),r=y(r,{enumerable:b(0,!1)})):(h(e,U)||Y(e,U,b(1,{})),e[U][a]=!0),ne(e,a,r)):Y(e,a,r)},ce=function(e,t){p(e)
var r=m(t),a=w(r).concat(fe(r))
return N(a,(function(t){s&&!le.call(r,t)||se(e,t,r[t])})),e},le=function(e){var t=v(e,!0),r=J.call(this,t)
return!(this===H&&h(Z,t)&&!h(Q,t))&&(!(r||!h(this,t)||!h(Z,t)||h(this,U)&&this[U][t])||r)},ue=function(e,t){var r=m(e),a=v(t,!0)
if(r!==H||!h(Z,a)||h(Q,a)){var n=V(r,a)
return!n||!h(Z,a)||h(r,U)&&r[U][a]||(n.enumerable=!0),n}},he=function(e){var t=K(m(e)),r=[]
return N(t,(function(e){h(Z,e)||h(_,e)||r.push(e)})),r},fe=function(e){var t=e===H,r=K(t?Q:m(e)),a=[]
return N(r,(function(e){!h(Z,e)||t&&!h(H,e)||a.push(Z[e])})),a};(c||(I((W=function(){if(this instanceof W)throw TypeError("Symbol is not a constructor")
var e=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,t=F(e),r=function(e){this===H&&r.call(Q,e),h(this,U)&&h(this[U],t)&&(this[U][t]=!1),ne(this,t,b(1,e))}
return s&&ae&&ne(H,t,{configurable:!0,set:r}),ie(t,e)}).prototype,"toString",(function(){return G(this).tag})),I(W,"withoutSetter",(function(e){return ie(F(e),e)})),O.f=le,A.f=se,C.f=ue,k.f=S.f=he,x.f=fe,B.f=function(e){return ie(R(e),e)},s&&(Y(W.prototype,"description",{configurable:!0,get:function(){return G(this).description}}),o||I(H,"propertyIsEnumerable",le,{unsafe:!0}))),a({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:W}),N(w(te),(function(e){M(e)})),a({target:j,stat:!0,forced:!c},{for:function(e){var t=String(e)
if(h($,t))return $[t]
var r=W(t)
return $[t]=r,ee[r]=t,r},keyFor:function(e){if(!oe(e))throw TypeError(e+" is not a symbol")
if(h(ee,e))return ee[e]},useSetter:function(){ae=!0},useSimple:function(){ae=!1}}),a({target:"Object",stat:!0,forced:!c,sham:!s},{create:function(e,t){return void 0===t?y(e):ce(y(e),t)},defineProperty:se,defineProperties:ce,getOwnPropertyDescriptor:ue}),a({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:he,getOwnPropertySymbols:fe}),a({target:"Object",stat:!0,forced:u((function(){x.f(1)}))},{getOwnPropertySymbols:function(e){return x.f(g(e))}}),X)&&a({target:"JSON",stat:!0,forced:!c||u((function(){var e=W()
return"[null]"!=X([e])||"{}"!=X({a:e})||"{}"!=X(Object(e))}))},{stringify:function(e,t,r){for(var a,n=[e],i=1;arguments.length>i;)n.push(arguments[i++])
if(a=t,(d(t)||void 0!==e)&&!oe(e))return f(t)||(t=function(e,t){if("function"==typeof a&&(t=a.call(this,e,t)),!oe(t))return t}),n[1]=t,X.apply(null,n)}})
W.prototype[q]||T(W.prototype,q,W.prototype.valueOf),D(W,j),_[U]=!0},function(e,t,r){var a=r(17),n=r(44).f,i={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[]
e.exports.f=function(e){return o&&"[object Window]"==i.call(e)?function(e){try{return n(e)}catch(t){return o.slice()}}(e):n(a(e))}},function(e,t,r){var a=r(57)
t.f=a},function(e,t,r){var a=r(43),n=r(23),i=r(172),o=r(27).f
e.exports=function(e){var t=a.Symbol||(a.Symbol={})
n(t,e)||o(t,e,{value:i.f(e)})}},function(e,t,r){r(173)("asyncIterator")},function(e,t,r){"use strict"
var a=r(10),n=r(13),i=r(11),o=r(23),s=r(22),c=r(27).f,l=r(40),u=i.Symbol
if(n&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var h={},f=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof f?new u(e):void 0===e?u():u(e)
return""===e&&(h[t]=!0),t}
l(f,u)
var d=f.prototype=u.prototype
d.constructor=f
var p=d.toString,g="Symbol(test)"==String(u("test")),m=/^Symbol\((.*)\)[^)]+$/
c(d,"description",{configurable:!0,get:function(){var e=s(this)?this.valueOf():this,t=p.call(e)
if(o(h,e))return""
var r=g?t.slice(7,-1):t.replace(m,"$1")
return""===r?void 0:r}}),a({global:!0,forced:!0},{Symbol:f})}},function(e,t,r){r(173)("hasInstance")},function(e,t,r){r(173)("isConcatSpreadable")},function(e,t,r){r(173)("iterator")},function(e,t,r){r(173)("match")},function(e,t,r){r(173)("matchAll")},function(e,t,r){r(173)("replace")},function(e,t,r){r(173)("search")},function(e,t,r){r(173)("species")},function(e,t,r){r(173)("split")},function(e,t,r){r(173)("toPrimitive")},function(e,t,r){r(173)("toStringTag")},function(e,t,r){r(173)("unscopables")},function(e,t,r){r(85)(Math,"Math",!0)},function(e,t,r){var a=r(11)
r(85)(a.JSON,"JSON",!0)},function(e,t,r){r(191)
var a=r(61)
e.exports=a("String","padStart")},function(e,t,r){"use strict"
var a=r(10),n=r(192).start
a({target:"String",proto:!0,forced:r(194)},{padStart:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},function(e,t,r){var a=r(47),n=r(193),i=r(20),o=Math.ceil,s=function(e){return function(t,r,s){var c,l,u=String(i(t)),h=u.length,f=void 0===s?" ":String(s),d=a(r)
return d<=h||""==f?u:(c=d-h,(l=n.call(f,o(c/f.length))).length>c&&(l=l.slice(0,c)),e?u+l:l+u)}}
e.exports={start:s(!1),end:s(!0)}},function(e,t,r){"use strict"
var a=r(48),n=r(20)
e.exports="".repeat||function(e){var t=String(n(this)),r="",i=a(e)
if(i<0||i==1/0)throw RangeError("Wrong number of repetitions")
for(;i>0;(i>>>=1)&&(t+=t))1&i&&(r+=t)
return r}},function(e,t,r){var a=r(129)
e.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(a)},function(e,t,r){r(196)
var a=r(61)
e.exports=a("String","padEnd")},function(e,t,r){"use strict"
var a=r(10),n=r(192).end
a({target:"String",proto:!0,forced:r(194)},{padEnd:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},function(e,t,r){r(198)
var a=r(43)
e.exports=a.Object.values},function(e,t,r){var a=r(10),n=r(199).values
a({target:"Object",stat:!0},{values:function(e){return n(e)}})},function(e,t,r){var a=r(13),n=r(73),i=r(17),o=r(15).f,s=function(e){return function(t){for(var r,s=i(t),c=n(s),l=c.length,u=0,h=[];l>u;)r=c[u++],a&&!o.call(s,r)||h.push(e?[r,s[r]]:s[r])
return h}}
e.exports={entries:s(!0),values:s(!1)}},function(e,t,r){r(201)
var a=r(43)
e.exports=a.Object.entries},function(e,t,r){var a=r(10),n=r(199).entries
a({target:"Object",stat:!0},{entries:function(e){return n(e)}})},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.clearPrimitiveCaches=function(){m._clearCache(),g._clearCache(),b._clearCache()},t.isEOF=function(e){return e===p},t.isCmd=function(e,t){return e instanceof m&&(void 0===t||e.cmd===t)},t.isDict=function(e,t){return e instanceof v&&(void 0===t||k(e.get("Type"),t))},t.isName=k,t.isRef=function(e){return e instanceof b},t.isRefsEqual=function(e,t){return e.num===t.num&&e.gen===t.gen},t.isStream=function(e){return"object"===i(e)&&null!==e&&void 0!==e.getBytes},t.RefSetCache=t.RefSet=t.Ref=t.Name=t.Dict=t.Cmd=t.EOF=void 0
var a,n=(a=r(2))&&a.__esModule?a:{default:a}
r(5)
function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var a=t[r]
a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function c(e,t,r){return t&&s(e.prototype,t),r&&s(e,r),e}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return
var r=[],a=!0,n=!1,i=void 0
try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);a=!0);}catch(c){n=!0,i=c}finally{try{a||null==s.return||s.return()}finally{if(n)throw i}}return r}(e,t)||h(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){var r
if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=h(e))||t&&e&&"number"==typeof e.length){r&&(e=r)
var a=0,n=function(){}
return{s:n,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1
return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next()
return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==r.return||r.return()}finally{if(s)throw i}}}}function h(e,t){if(e){if("string"==typeof e)return f(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(e,t):void 0}}function f(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r]
return a}function d(e,t,r,a,n,i,o){try{var s=e[i](o),c=s.value}catch(l){return void r(l)}s.done?t(c):Promise.resolve(c).then(a,n)}var p={}
t.EOF=p
var g=function(){var e=Object.create(null)
function t(e){this.name=e}return t.prototype={},t.get=function(r){var a=e[r]
return a||(e[r]=new t(r))},t._clearCache=function(){e=Object.create(null)},t}()
t.Name=g
var m=function(){var e=Object.create(null)
function t(e){this.cmd=e}return t.prototype={},t.get=function(r){var a=e[r]
return a||(e[r]=new t(r))},t._clearCache=function(){e=Object.create(null)},t}()
t.Cmd=m
var v=function(){var e=function(){return e}
function t(t){this._map=Object.create(null),this.xref=t,this.objId=null,this.suppressEncryption=!1,this.__nonSerializable__=e}return t.prototype={assignXref:function(e){this.xref=e},get size(){return Object.keys(this._map).length},get:function(e,t,r){var a=this._map[e]
return void 0===a&&void 0!==t&&void 0===(a=this._map[t])&&void 0!==r&&(a=this._map[r]),a instanceof b&&this.xref?this.xref.fetch(a,this.suppressEncryption):a},getAsync:function(e,t,r){var a,i=this
return(a=n.default.mark((function a(){var o
return n.default.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(void 0===(o=i._map[e])&&void 0!==t&&void 0===(o=i._map[t])&&void 0!==r&&(o=i._map[r]),!(o instanceof b&&i.xref)){a.next=4
break}return a.abrupt("return",i.xref.fetchAsync(o,i.suppressEncryption))
case 4:return a.abrupt("return",o)
case 5:case"end":return a.stop()}}),a)})),function(){var e=this,t=arguments
return new Promise((function(r,n){var i=a.apply(e,t)
function o(e){d(i,r,n,o,s,"next",e)}function s(e){d(i,r,n,o,s,"throw",e)}o(void 0)}))})()},getArray:function(e,t,r){var a=this.get(e,t,r)
if(!Array.isArray(a)||!this.xref)return a
for(var n=0,i=(a=a.slice()).length;n<i;n++)a[n]instanceof b&&(a[n]=this.xref.fetch(a[n],this.suppressEncryption))
return a},getRaw:function(e){return this._map[e]},getKeys:function(){return Object.keys(this._map)},getRawValues:function(){return Object.values(this._map)},set:function(e,t){this._map[e]=t},has:function(e){return void 0!==this._map[e]},forEach:function(e){for(var t in this._map)e(t,this.get(t))}},t.empty=new t(null),t.merge=function(e){var r=e.xref,a=e.dictArray,n=e.mergeSubDicts,i=void 0!==n&&n,o=new t(r)
if(!i){var s,c=u(a)
try{for(c.s();!(s=c.n()).done;){var h=s.value
if(h instanceof t)for(var f=0,d=Object.entries(h._map);f<d.length;f++){var p=l(d[f],2),g=p[0],m=p[1]
void 0===o._map[g]&&(o._map[g]=m)}}}catch(q){c.e(q)}finally{c.f()}return o.size>0?o:t.empty}var v,b=new Map,y=u(a)
try{for(y.s();!(v=y.n()).done;){var w=v.value
if(w instanceof t)for(var k=0,S=Object.entries(w._map);k<S.length;k++){var x=l(S[k],2),C=x[0],A=x[1],O=b.get(C)
void 0===O&&(O=[],b.set(C,O)),O.push(A)}}}catch(q){y.e(q)}finally{y.f()}var T,I=u(b)
try{for(I.s();!(T=I.n()).done;){var E=l(T.value,2),P=E[0],_=E[1]
if(1!==_.length&&_[0]instanceof t){var F,R=new t(r),B=u(_)
try{for(B.s();!(F=B.n()).done;){var M=F.value
if(M instanceof t)for(var D=0,L=Object.entries(M._map);D<L.length;D++){var N=l(L[D],2),U=N[0],j=N[1]
void 0===R._map[U]&&(R._map[U]=j)}}}catch(q){B.e(q)}finally{B.f()}R.size>0&&(o._map[P]=R)}else o._map[P]=_[0]}}catch(q){I.e(q)}finally{I.f()}return b.clear(),o.size>0?o:t.empty},t}()
t.Dict=v
var b=function(){var e=Object.create(null)
function t(e,t){this.num=e,this.gen=t}return t.prototype={toString:function(){return 0===this.gen?"".concat(this.num,"R"):"".concat(this.num,"R").concat(this.gen)}},t.get=function(r,a){var n=0===a?"".concat(r,"R"):"".concat(r,"R").concat(a),i=e[n]
return i||(e[n]=new t(r,a))},t._clearCache=function(){e=Object.create(null)},t}()
t.Ref=b
var y=function(){function e(){o(this,e),this._set=new Set}return c(e,[{key:"has",value:function(e){return this._set.has(e.toString())}},{key:"put",value:function(e){this._set.add(e.toString())}},{key:"remove",value:function(e){this._set.delete(e.toString())}}]),e}()
t.RefSet=y
var w=function(){function e(){o(this,e),this._map=new Map}return c(e,[{key:"get",value:function(e){return this._map.get(e.toString())}},{key:"has",value:function(e){return this._map.has(e.toString())}},{key:"put",value:function(e,t){this._map.set(e.toString(),t)}},{key:"putAlias",value:function(e,t){this._map.set(e.toString(),this.get(t))}},{key:"forEach",value:function(e){var t,r=u(this._map.values())
try{for(r.s();!(t=r.n()).done;){e(t.value)}}catch(a){r.e(a)}finally{r.f()}}},{key:"clear",value:function(){this._map.clear()}},{key:"size",get:function(){return this._map.size}}]),e}()
function k(e,t){return e instanceof g&&(void 0===t||e.name===t)}t.RefSetCache=w},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.NetworkPdfManager=t.LocalPdfManager=void 0
var a,n=(a=r(2))&&a.__esModule?a:{default:a},i=r(5),o=r(204),s=r(205),c=r(206),l=r(209)
function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,a=m(e)
if(t){var n=m(this).constructor
r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments)
return p(this,r)}}function p(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?g(e):t}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,r,a,n,i,o){try{var s=e[i](o),c=s.value}catch(l){return void r(l)}s.done?t(c):Promise.resolve(c).then(a,n)}function b(e){return function(){var t=this,r=arguments
return new Promise((function(a,n){var i=e.apply(t,r)
function o(e){v(i,a,n,o,s,"next",e)}function s(e){v(i,a,n,o,s,"throw",e)}o(void 0)}))}}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){for(var r=0;r<t.length;r++){var a=t[r]
a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function k(e,t,r){return t&&w(e.prototype,t),r&&w(e,r),e}var S=function(){function e(){y(this,e),this.constructor===e&&(0,i.unreachable)("Cannot initialize BasePdfManager.")}var t
return k(e,[{key:"onLoadedStream",value:function(){(0,i.unreachable)("Abstract method `onLoadedStream` called")}},{key:"ensureDoc",value:function(e,t){return this.ensure(this.pdfDocument,e,t)}},{key:"ensureXRef",value:function(e,t){return this.ensure(this.pdfDocument.xref,e,t)}},{key:"ensureCatalog",value:function(e,t){return this.ensure(this.pdfDocument.catalog,e,t)}},{key:"getPage",value:function(e){return this.pdfDocument.getPage(e)}},{key:"fontFallback",value:function(e,t){return this.pdfDocument.fontFallback(e,t)}},{key:"cleanup",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
return this.pdfDocument.cleanup(e)}},{key:"ensure",value:(t=b(n.default.mark((function e(t,r,a){return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,i.unreachable)("Abstract method `ensure` called")
case 1:case"end":return e.stop()}}),e)}))),function(e,r,a){return t.apply(this,arguments)})},{key:"requestRange",value:function(e,t){(0,i.unreachable)("Abstract method `requestRange` called")}},{key:"requestLoadedStream",value:function(){(0,i.unreachable)("Abstract method `requestLoadedStream` called")}},{key:"sendProgressiveData",value:function(e){(0,i.unreachable)("Abstract method `sendProgressiveData` called")}},{key:"updatePassword",value:function(e){this._password=e}},{key:"terminate",value:function(e){(0,i.unreachable)("Abstract method `terminate` called")}},{key:"docId",get:function(){return this._docId}},{key:"password",get:function(){return this._password}},{key:"docBaseUrl",get:function(){var e=null
if(this._docBaseUrl){var t=(0,i.createValidAbsoluteUrl)(this._docBaseUrl)
t?e=t.href:(0,i.warn)('Invalid absolute docBaseUrl: "'.concat(this._docBaseUrl,'".'))}return(0,i.shadow)(this,"docBaseUrl",e)}}]),e}(),x=function(e){h(a,e)
var t,r=d(a)
function a(e,t,n,i,o){var s
y(this,a),(s=r.call(this))._docId=e,s._password=n,s._docBaseUrl=o,s.evaluatorOptions=i
var u=new l.Stream(t)
return s.pdfDocument=new c.PDFDocument(g(s),u),s._loadedStreamPromise=Promise.resolve(u),s}return k(a,[{key:"ensure",value:(t=b(n.default.mark((function e(t,r,a){var i
return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("function"!=typeof(i=t[r])){e.next=3
break}return e.abrupt("return",i.apply(t,a))
case 3:return e.abrupt("return",i)
case 4:case"end":return e.stop()}}),e)}))),function(e,r,a){return t.apply(this,arguments)})},{key:"requestRange",value:function(e,t){return Promise.resolve()}},{key:"requestLoadedStream",value:function(){}},{key:"onLoadedStream",value:function(){return this._loadedStreamPromise}},{key:"terminate",value:function(e){}}]),a}(S)
t.LocalPdfManager=x
var C=function(e){h(a,e)
var t,r=d(a)
function a(e,t,n,i,s){var l
return y(this,a),(l=r.call(this))._docId=e,l._password=n.password,l._docBaseUrl=s,l.msgHandler=n.msgHandler,l.evaluatorOptions=i,l.streamManager=new o.ChunkedStreamManager(t,{msgHandler:n.msgHandler,length:n.length,disableAutoFetch:n.disableAutoFetch,rangeChunkSize:n.rangeChunkSize}),l.pdfDocument=new c.PDFDocument(g(l),l.streamManager.getStream()),l}return k(a,[{key:"ensure",value:(t=b(n.default.mark((function e(t,r,a){var i
return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"function"!=typeof(i=t[r])){e.next=4
break}return e.abrupt("return",i.apply(t,a))
case 4:return e.abrupt("return",i)
case 7:if(e.prev=7,e.t0=e.catch(0),e.t0 instanceof s.MissingDataException){e.next=11
break}throw e.t0
case 11:return e.next=13,this.requestRange(e.t0.begin,e.t0.end)
case 13:return e.abrupt("return",this.ensure(t,r,a))
case 14:case"end":return e.stop()}}),e,this,[[0,7]])}))),function(e,r,a){return t.apply(this,arguments)})},{key:"requestRange",value:function(e,t){return this.streamManager.requestRange(e,t)}},{key:"requestLoadedStream",value:function(){this.streamManager.requestAllChunks()}},{key:"sendProgressiveData",value:function(e){this.streamManager.onReceiveData({chunk:e})}},{key:"onLoadedStream",value:function(){return this.streamManager.onLoadedStream()}},{key:"terminate",value:function(e){this.streamManager.abort(e)}}]),a}(S)
t.NetworkPdfManager=C},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.ChunkedStreamManager=t.ChunkedStream=void 0
var a=r(5),n=r(205)
function i(e,t){var r
if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return
if("string"==typeof e)return o(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r)
var a=0,n=function(){}
return{s:n,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,c=!1
return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next()
return s=e.done,e},e:function(e){c=!0,i=e},f:function(){try{s||null==r.return||r.return()}finally{if(c)throw i}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r]
return a}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var r=0;r<t.length;r++){var a=t[r]
a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function l(e,t,r){return t&&c(e.prototype,t),r&&c(e,r),e}var u=function(){function e(t,r,a){s(this,e),this.bytes=new Uint8Array(t),this.start=0,this.pos=0,this.end=t,this.chunkSize=r,this._loadedChunks=new Set,this.numChunks=Math.ceil(t/r),this.manager=a,this.progressiveDataLength=0,this.lastSuccessfulEnsureByteChunk=-1}return l(e,[{key:"getMissingChunks",value:function(){for(var e=[],t=0,r=this.numChunks;t<r;++t)this._loadedChunks.has(t)||e.push(t)
return e}},{key:"getBaseStreams",value:function(){return[this]}},{key:"allChunksLoaded",value:function(){return this.numChunksLoaded===this.numChunks}},{key:"onReceiveData",value:function(e,t){var r=this.chunkSize
if(e%r!=0)throw new Error("Bad begin offset: ".concat(e))
var a=e+t.byteLength
if(a%r!=0&&a!==this.bytes.length)throw new Error("Bad end offset: ".concat(a))
this.bytes.set(new Uint8Array(t),e)
for(var n=Math.floor(e/r),i=Math.floor((a-1)/r)+1,o=n;o<i;++o)this._loadedChunks.add(o)}},{key:"onReceiveProgressiveData",value:function(e){var t=this.progressiveDataLength,r=Math.floor(t/this.chunkSize)
this.bytes.set(new Uint8Array(e),t),t+=e.byteLength,this.progressiveDataLength=t
for(var a=t>=this.end?this.numChunks:Math.floor(t/this.chunkSize),n=r;n<a;++n)this._loadedChunks.add(n)}},{key:"ensureByte",value:function(e){if(!(e<this.progressiveDataLength)){var t=Math.floor(e/this.chunkSize)
if(t!==this.lastSuccessfulEnsureByteChunk){if(!this._loadedChunks.has(t))throw new n.MissingDataException(e,e+1)
this.lastSuccessfulEnsureByteChunk=t}}}},{key:"ensureRange",value:function(e,t){if(!(e>=t||t<=this.progressiveDataLength))for(var r=this.chunkSize,a=Math.floor(e/r),i=Math.floor((t-1)/r)+1,o=a;o<i;++o)if(!this._loadedChunks.has(o))throw new n.MissingDataException(e,t)}},{key:"nextEmptyChunk",value:function(e){for(var t=this.numChunks,r=0;r<t;++r){var a=(e+r)%t
if(!this._loadedChunks.has(a))return a}return null}},{key:"hasChunk",value:function(e){return this._loadedChunks.has(e)}},{key:"getByte",value:function(){var e=this.pos
return e>=this.end?-1:(e>=this.progressiveDataLength&&this.ensureByte(e),this.bytes[this.pos++])}},{key:"getUint16",value:function(){var e=this.getByte(),t=this.getByte()
return-1===e||-1===t?-1:(e<<8)+t}},{key:"getInt32",value:function(){return(this.getByte()<<24)+(this.getByte()<<16)+(this.getByte()<<8)+this.getByte()}},{key:"getBytes",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this.bytes,a=this.pos,n=this.end
if(!e){n>this.progressiveDataLength&&this.ensureRange(a,n)
var i=r.subarray(a,n)
return t?new Uint8ClampedArray(i):i}var o=a+e
o>n&&(o=n),o>this.progressiveDataLength&&this.ensureRange(a,o),this.pos=o
var s=r.subarray(a,o)
return t?new Uint8ClampedArray(s):s}},{key:"peekByte",value:function(){var e=this.getByte()
return-1!==e&&this.pos--,e}},{key:"peekBytes",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this.getBytes(e,t)
return this.pos-=r.length,r}},{key:"getByteRange",value:function(e,t){return e<0&&(e=0),t>this.end&&(t=this.end),t>this.progressiveDataLength&&this.ensureRange(e,t),this.bytes.subarray(e,t)}},{key:"skip",value:function(e){e||(e=1),this.pos+=e}},{key:"reset",value:function(){this.pos=this.start}},{key:"moveStart",value:function(){this.start=this.pos}},{key:"makeSubStream",value:function(e,t,r){function a(){}t?e+t>this.progressiveDataLength&&this.ensureRange(e,e+t):e>=this.progressiveDataLength&&this.ensureByte(e),a.prototype=Object.create(this),a.prototype.getMissingChunks=function(){for(var e=this.chunkSize,t=Math.floor(this.start/e),r=Math.floor((this.end-1)/e)+1,a=[],n=t;n<r;++n)this._loadedChunks.has(n)||a.push(n)
return a},a.prototype.allChunksLoaded=function(){return this.numChunksLoaded===this.numChunks||0===this.getMissingChunks().length}
var n=new a
return n.pos=n.start=e,n.end=e+t||this.end,n.dict=r,n}},{key:"numChunksLoaded",get:function(){return this._loadedChunks.size}},{key:"length",get:function(){return this.end-this.start}},{key:"isEmpty",get:function(){return 0===this.length}}]),e}()
t.ChunkedStream=u
var h=function(){function e(t,r){s(this,e),this.length=r.length,this.chunkSize=r.rangeChunkSize,this.stream=new u(this.length,this.chunkSize,this),this.pdfNetworkStream=t,this.disableAutoFetch=r.disableAutoFetch,this.msgHandler=r.msgHandler,this.currRequestId=0,this._chunksNeededByRequest=new Map,this._requestsByChunk=new Map,this._promisesByRequest=new Map,this.progressiveDataLength=0,this.aborted=!1,this._loadedStreamCapability=(0,a.createPromiseCapability)()}return l(e,[{key:"onLoadedStream",value:function(){return this._loadedStreamCapability.promise}},{key:"sendRequest",value:function(e,t){var r=this,n=this.pdfNetworkStream.getRangeReader(e,t)
n.isStreamingSupported||(n.onProgress=this.onProgress.bind(this))
var i=[],o=0
new Promise((function(e,t){n.read().then((function s(c){try{if(!c.done){var l=c.value
return i.push(l),o+=(0,a.arrayByteLength)(l),n.isStreamingSupported&&r.onProgress({loaded:o}),void n.read().then(s,t)}var u=(0,a.arraysToBytes)(i)
i=null,e(u)}catch(h){t(h)}}),t)})).then((function(t){r.aborted||r.onReceiveData({chunk:t,begin:e})}))}},{key:"requestAllChunks",value:function(){var e=this.stream.getMissingChunks()
return this._requestChunks(e),this._loadedStreamCapability.promise}},{key:"_requestChunks",value:function(e){var t=this,r=this.currRequestId++,n=new Set
this._chunksNeededByRequest.set(r,n)
var o,s=i(e)
try{for(s.s();!(o=s.n()).done;){var c=o.value
this.stream.hasChunk(c)||n.add(c)}}catch(w){s.e(w)}finally{s.f()}if(0===n.size)return Promise.resolve()
var l=(0,a.createPromiseCapability)()
this._promisesByRequest.set(r,l)
var u,h=[],f=i(n)
try{for(f.s();!(u=f.n()).done;){var d=u.value,p=this._requestsByChunk.get(d)
p||(p=[],this._requestsByChunk.set(d,p),h.push(d)),p.push(r)}}catch(w){f.e(w)}finally{f.f()}if(h.length>0){var g,m=i(this.groupChunks(h))
try{for(m.s();!(g=m.n()).done;){var v=g.value,b=v.beginChunk*this.chunkSize,y=Math.min(v.endChunk*this.chunkSize,this.length)
this.sendRequest(b,y)}}catch(w){m.e(w)}finally{m.f()}}return l.promise.catch((function(e){if(!t.aborted)throw e}))}},{key:"getStream",value:function(){return this.stream}},{key:"requestRange",value:function(e,t){t=Math.min(t,this.length)
for(var r=this.getBeginChunk(e),a=this.getEndChunk(t),n=[],i=r;i<a;++i)n.push(i)
return this._requestChunks(n)}},{key:"requestRanges",value:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=[],a=i(t)
try{for(a.s();!(e=a.n()).done;)for(var n=e.value,o=this.getBeginChunk(n.begin),s=this.getEndChunk(n.end),c=o;c<s;++c)r.includes(c)||r.push(c)}catch(l){a.e(l)}finally{a.f()}return r.sort((function(e,t){return e-t})),this._requestChunks(r)}},{key:"groupChunks",value:function(e){for(var t=[],r=-1,a=-1,n=0,i=e.length;n<i;++n){var o=e[n]
r<0&&(r=o),a>=0&&a+1!==o&&(t.push({beginChunk:r,endChunk:a+1}),r=o),n+1===e.length&&t.push({beginChunk:r,endChunk:o+1}),a=o}return t}},{key:"onProgress",value:function(e){this.msgHandler.send("DocProgress",{loaded:this.stream.numChunksLoaded*this.chunkSize+e.loaded,total:this.length})}},{key:"onReceiveData",value:function(e){var t=e.chunk,r=void 0===e.begin,a=r?this.progressiveDataLength:e.begin,n=a+t.byteLength,o=Math.floor(a/this.chunkSize),s=n<this.length?Math.floor(n/this.chunkSize):Math.ceil(n/this.chunkSize)
r?(this.stream.onReceiveProgressiveData(t),this.progressiveDataLength=n):this.stream.onReceiveData(a,t),this.stream.allChunksLoaded()&&this._loadedStreamCapability.resolve(this.stream)
for(var c=[],l=o;l<s;++l){var u=this._requestsByChunk.get(l)
if(u){this._requestsByChunk.delete(l)
var h,f=i(u)
try{for(f.s();!(h=f.n()).done;){var d=h.value,p=this._chunksNeededByRequest.get(d)
p.has(l)&&p.delete(l),p.size>0||c.push(d)}}catch(k){f.e(k)}finally{f.f()}}}if(!this.disableAutoFetch&&0===this._requestsByChunk.size){var g
if(1===this.stream.numChunksLoaded){var m=this.stream.numChunks-1
this.stream.hasChunk(m)||(g=m)}else g=this.stream.nextEmptyChunk(s)
Number.isInteger(g)&&this._requestChunks([g])}for(var v=0,b=c;v<b.length;v++){var y=b[v],w=this._promisesByRequest.get(y)
this._promisesByRequest.delete(y),w.resolve()}this.msgHandler.send("DocProgress",{loaded:this.stream.numChunksLoaded*this.chunkSize,total:this.length})}},{key:"onError",value:function(e){this._loadedStreamCapability.reject(e)}},{key:"getBeginChunk",value:function(e){return Math.floor(e/this.chunkSize)}},{key:"getEndChunk",value:function(e){return Math.floor((e-1)/this.chunkSize)+1}},{key:"abort",value:function(e){this.aborted=!0,this.pdfNetworkStream&&this.pdfNetworkStream.cancelAllRequests(e)
var t,r=i(this._promisesByRequest.values())
try{for(r.s();!(t=r.n()).done;){t.value.reject(e)}}catch(a){r.e(a)}finally{r.f()}}}]),e}()
t.ChunkedStreamManager=h},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.getLookupTableFactory=function(e){var t
return function(){return e&&(t=Object.create(null),e(t),e=null),t}},t.getInheritableProperty=function(e){var t,r=e.dict,n=e.key,i=e.getArray,o=void 0!==i&&i,s=e.stopWhenFound,c=void 0===s||s,l=0
for(;r;){var u=o?r.getArray(n):r.get(n)
if(void 0!==u){if(c)return u
t||(t=[]),t.push(u)}if(++l>100){(0,a.warn)('getInheritableProperty: maximum loop count exceeded for "'.concat(n,'"'))
break}r=r.get("Parent")}return t},t.toRomanNumerals=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];(0,a.assert)(Number.isInteger(e)&&e>0,"The number should be a positive integer.")
var r,n=[]
for(;e>=1e3;)e-=1e3,n.push("M")
r=e/100|0,e%=100,n.push(p[r]),r=e/10|0,e%=10,n.push(p[10+r]),n.push(p[20+e])
var i=n.join("")
return t?i.toLowerCase():i},t.log2=function(e){if(e<=0)return 0
return Math.ceil(Math.log2(e))},t.readInt8=function(e,t){return e[t]<<24>>24},t.readUint16=function(e,t){return e[t]<<8|e[t+1]},t.readUint32=function(e,t){return(e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3])>>>0},t.isWhiteSpace=function(e){return 32===e||9===e||13===e||10===e},t.XRefParseException=t.XRefEntryException=t.MissingDataException=void 0
var a=r(5)
function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,a=u(e)
if(t){var n=u(this).constructor
r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments)
return l(this,r)}}function l(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=function(e){o(r,e)
var t=c(r)
function r(e,a){var n
return i(this,r),(n=t.call(this,"Missing data [".concat(e,", ").concat(a,")"))).begin=e,n.end=a,n}return r}(a.BaseException)
t.MissingDataException=h
var f=function(e){o(r,e)
var t=c(r)
function r(){return i(this,r),t.apply(this,arguments)}return r}(a.BaseException)
t.XRefEntryException=f
var d=function(e){o(r,e)
var t=c(r)
function r(){return i(this,r),t.apply(this,arguments)}return r}(a.BaseException)
t.XRefParseException=d
var p=["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM","","X","XX","XXX","XL","L","LX","LXX","LXXX","XC","","I","II","III","IV","V","VI","VII","VIII","IX"]},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.PDFDocument=t.Page=void 0
var a,n=(a=r(2))&&a.__esModule?a:{default:a},i=r(5),o=r(207),s=r(202),c=r(205),l=r(209),u=r(222),h=r(219),f=r(208),d=r(223),p=r(225)
function g(e,t,r,a,n,i,o){try{var s=e[i](o),c=s.value}catch(l){return void r(l)}s.done?t(c):Promise.resolve(c).then(a,n)}function m(e){return function(){var t=this,r=arguments
return new Promise((function(a,n){var i=e.apply(t,r)
function o(e){g(i,a,n,o,s,"next",e)}function s(e){g(i,a,n,o,s,"throw",e)}o(void 0)}))}}function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return
var r=[],a=!0,n=!1,i=void 0
try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);a=!0);}catch(c){n=!0,i=c}finally{try{a||null==s.return||s.return()}finally{if(n)throw i}}return r}(e,t)||w(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){var r
if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=w(e))||t&&e&&"number"==typeof e.length){r&&(e=r)
var a=0,n=function(){}
return{s:n,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1
return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next()
return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==r.return||r.return()}finally{if(s)throw i}}}}function w(e,t){if(e){if("string"==typeof e)return k(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?k(e,t):void 0}}function k(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r]
return a}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,a=A(e)
if(t){var n=A(this).constructor
r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments)
return C(this,r)}}function C(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function T(e,t){for(var r=0;r<t.length;r++){var a=t[r]
a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function I(e,t,r){return t&&T(e.prototype,t),r&&T(e,r),e}var E=[0,0,612,792]
function P(e,t){return"display"===t&&e.viewable||"print"===t&&e.printable}var _=function(){function e(t){var r=t.pdfManager,a=t.xref,n=t.pageIndex,i=t.pageDict,o=t.ref,s=t.globalIdFactory,c=t.fontCache,l=t.builtInCMapCache,u=t.globalImageCache
O(this,e),this.pdfManager=r,this.pageIndex=n,this.pageDict=i,this.xref=a,this.ref=o,this.fontCache=c,this.builtInCMapCache=l,this.globalImageCache=u,this.evaluatorOptions=r.evaluatorOptions,this.resourcesPromise=null
var h={obj:0}
this._localIdFactory=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)})(r,e)
var t=x(r)
function r(){return O(this,r),t.apply(this,arguments)}return I(r,null,[{key:"createObjId",value:function(){return"p".concat(n,"_").concat(++h.obj)}}]),r}(s)}return I(e,[{key:"_getInheritableProperty",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=(0,c.getInheritableProperty)({dict:this.pageDict,key:e,getArray:t,stopWhenFound:!1})
return Array.isArray(r)?1!==r.length&&(0,s.isDict)(r[0])?s.Dict.merge({xref:this.xref,dictArray:r}):r[0]:r}},{key:"_getBoundingBox",value:function(e){var t=this._getInheritableProperty(e,!0)
if(Array.isArray(t)&&4===t.length){if(t[2]-t[0]!=0&&t[3]-t[1]!=0)return t;(0,i.warn)("Empty /".concat(e," entry."))}return null}},{key:"getContentStream",value:function(){var e,t=this.content
if(Array.isArray(t)){var r,a=this.xref,n=[],i=y(t)
try{for(i.s();!(r=i.n()).done;){var o=r.value
n.push(a.fetchIfRef(o))}}catch(c){i.e(c)}finally{i.f()}e=new l.StreamsSequenceStream(n)}else e=(0,s.isStream)(t)?t:new l.NullStream
return e}},{key:"save",value:function(e,t,r){var a=new p.PartialEvaluator({xref:this.xref,handler:e,pageIndex:this.pageIndex,idFactory:this._localIdFactory,fontCache:this.fontCache,builtInCMapCache:this.builtInCMapCache,globalImageCache:this.globalImageCache,options:this.evaluatorOptions})
return this._parsedAnnotations.then((function(e){var n,o=[],s=y(e)
try{for(s.s();!(n=s.n()).done;){var c=n.value
P(c,"print")&&o.push(c.save(a,t,r).catch((function(e){return(0,i.warn)("save - ignoring annotation data during "+'"'.concat(t.name,'" task: "').concat(e,'".')),null})))}}catch(l){s.e(l)}finally{s.f()}return Promise.all(o)}))}},{key:"loadResources",value:function(e){var t=this
return this.resourcesPromise||(this.resourcesPromise=this.pdfManager.ensure(this,"resources")),this.resourcesPromise.then((function(){return new o.ObjectLoader(t.resources,e,t.xref).load()}))}},{key:"getOperatorList",value:function(e){var t=this,r=e.handler,a=e.sink,n=e.task,o=e.intent,s=e.renderInteractiveForms,c=e.annotationStorage,l=this.pdfManager.ensure(this,"getContentStream"),u=this.loadResources(["ExtGState","ColorSpace","Pattern","Shading","XObject","Font"]),h=new p.PartialEvaluator({xref:this.xref,handler:r,pageIndex:this.pageIndex,idFactory:this._localIdFactory,fontCache:this.fontCache,builtInCMapCache:this.builtInCMapCache,globalImageCache:this.globalImageCache,options:this.evaluatorOptions}),f=Promise.all([l,u]).then((function(e){var i=b(e,1)[0],s=new d.OperatorList(o,a)
return r.send("StartRenderPage",{transparency:h.hasBlendModes(t.resources),pageIndex:t.pageIndex,intent:o}),h.getOperatorList({stream:i,task:n,resources:t.resources,operatorList:s}).then((function(){return s}))}))
return Promise.all([f,this._parsedAnnotations]).then((function(e){var t=b(e,2),r=t[0],a=t[1]
if(0===a.length)return r.flush(!0),{length:r.totalLength}
var l,u=[],f=y(a)
try{for(f.s();!(l=f.n()).done;){var d=l.value
P(d,o)&&u.push(d.getOperatorList(h,n,s,c).catch((function(e){return(0,i.warn)("getOperatorList - ignoring annotation data during "+'"'.concat(n.name,'" task: "').concat(e,'".')),null})))}}catch(p){f.e(p)}finally{f.f()}return Promise.all(u).then((function(e){r.addOp(i.OPS.beginAnnotations,[])
var t,a=y(e)
try{for(a.s();!(t=a.n()).done;){var n=t.value
r.addOpList(n)}}catch(p){a.e(p)}finally{a.f()}return r.addOp(i.OPS.endAnnotations,[]),r.flush(!0),{length:r.totalLength}}))}))}},{key:"extractTextContent",value:function(e){var t=this,r=e.handler,a=e.task,n=e.normalizeWhitespace,i=e.sink,o=e.combineTextItems,s=this.pdfManager.ensure(this,"getContentStream"),c=this.loadResources(["ExtGState","XObject","Font"])
return Promise.all([s,c]).then((function(e){var s=b(e,1)[0]
return new p.PartialEvaluator({xref:t.xref,handler:r,pageIndex:t.pageIndex,idFactory:t._localIdFactory,fontCache:t.fontCache,builtInCMapCache:t.builtInCMapCache,globalImageCache:t.globalImageCache,options:t.evaluatorOptions}).getTextContent({stream:s,task:a,resources:t.resources,normalizeWhitespace:n,combineTextItems:o,sink:i})}))}},{key:"getAnnotationsData",value:function(e){return this._parsedAnnotations.then((function(t){for(var r=[],a=0,n=t.length;a<n;a++)e&&!P(t[a],e)||r.push(t[a].data)
return r}))}},{key:"content",get:function(){return this.pageDict.get("Contents")}},{key:"resources",get:function(){return(0,i.shadow)(this,"resources",this._getInheritableProperty("Resources")||s.Dict.empty)}},{key:"mediaBox",get:function(){return(0,i.shadow)(this,"mediaBox",this._getBoundingBox("MediaBox")||E)}},{key:"cropBox",get:function(){return(0,i.shadow)(this,"cropBox",this._getBoundingBox("CropBox")||this.mediaBox)}},{key:"userUnit",get:function(){var e=this.pageDict.get("UserUnit")
return(!(0,i.isNum)(e)||e<=0)&&(e=1),(0,i.shadow)(this,"userUnit",e)}},{key:"view",get:function(){var e,t=this.cropBox,r=this.mediaBox
if(t===r||(0,i.isArrayEqual)(t,r))e=r
else{var a=i.Util.intersect(t,r)
a&&a[2]-a[0]!=0&&a[3]-a[1]!=0?e=a:(0,i.warn)("Empty /CropBox and /MediaBox intersection.")}return(0,i.shadow)(this,"view",e||r)}},{key:"rotate",get:function(){var e=this._getInheritableProperty("Rotate")||0
return e%90!=0?e=0:e>=360?e%=360:e<0&&(e=(e%360+360)%360),(0,i.shadow)(this,"rotate",e)}},{key:"annotations",get:function(){return(0,i.shadow)(this,"annotations",this._getInheritableProperty("Annots")||[])}},{key:"_parsedAnnotations",get:function(){var e=this,t=this.pdfManager.ensure(this,"annotations").then((function(){var t,r=[],a=y(e.annotations)
try{for(a.s();!(t=a.n()).done;){var n=t.value
r.push(u.AnnotationFactory.create(e.xref,n,e.pdfManager,e._localIdFactory).catch((function(e){return(0,i.warn)('_parsedAnnotations: "'.concat(e,'".')),null})))}}catch(o){a.e(o)}finally{a.f()}return Promise.all(r).then((function(e){return e.filter((function(e){return!!e}))}))}))
return(0,i.shadow)(this,"_parsedAnnotations",t)}}]),e}()
t.Page=_
var F=new Uint8Array([37,80,68,70,45]),R=new Uint8Array([115,116,97,114,116,120,114,101,102]),B=new Uint8Array([101,110,100,111,98,106]),M=/^[1-9]\.[0-9]$/
function D(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1024,a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],n=t.length,i=e.peekBytes(r),o=i.length-n
if(o<=0)return!1
if(a)for(var s=n-1,c=i.length-1;c>=s;){for(var l=0;l<n&&i[c-l]===t[s-l];)l++
if(l>=n)return e.pos+=c-s,!0
c--}else for(var u=0;u<=o;){for(var h=0;h<n&&i[u+h]===t[h];)h++
if(h>=n)return e.pos+=u,!0
u++}return!1}var L=function(){function e(t,r){var a
if(O(this,e),(0,s.isStream)(r))a=r
else{if(!(0,i.isArrayBuffer)(r))throw new Error("PDFDocument: Unknown argument type")
a=new l.Stream(r)}if(a.length<=0)throw new i.InvalidPDFException("The PDF file is empty, i.e. its size is zero bytes.")
this.pdfManager=t,this.stream=a,this.xref=new o.XRef(a,t),this._pagePromises=[],this._version=null
var n={font:0}
this._globalIdFactory=function(){function e(){O(this,e)}return I(e,null,[{key:"getDocId",value:function(){return"g_".concat(t.docId)}},{key:"createFontId",value:function(){return"f".concat(++n.font)}},{key:"createObjId",value:function(){(0,i.unreachable)("Abstract method `createObjId` called.")}}]),e}()}var t
return I(e,[{key:"parse",value:function(e){this.xref.parse(e),this.catalog=new o.Catalog(this.pdfManager,this.xref),this.catalog.version&&(this._version=this.catalog.version)}},{key:"checkHeader",value:function(){var e=this.stream
if(e.reset(),D(e,F)){e.moveStart()
for(var t,r="";(t=e.getByte())>32&&!(r.length>=12);)r+=String.fromCharCode(t)
this._version||(this._version=r.substring(5))}}},{key:"parseStartXRef",value:function(){this.xref.setStartXRef(this.startXRef)}},{key:"_hasOnlyDocumentSignatures",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=10
return e.every((function(e){if((e=t.xref.fetchIfRef(e)).has("Kids"))return++r>a?((0,i.warn)("_hasOnlyDocumentSignatures: maximum recursion depth reached"),!1):t._hasOnlyDocumentSignatures(e.get("Kids"),r)
var n=(0,s.isName)(e.get("FT"),"Sig"),o=e.get("Rect"),c=Array.isArray(o)&&o.every((function(e){return 0===e}))
return n&&c}))}},{key:"_getLinearizationPage",value:function(e){var t=this.catalog,r=this.linearization,a=s.Ref.get(r.objectNumberFirst,0)
return this.xref.fetchAsync(a).then((function(e){if((0,s.isDict)(e,"Page")||(0,s.isDict)(e)&&!e.has("Type")&&e.has("Contents"))return a&&!t.pageKidsCountCache.has(a)&&t.pageKidsCountCache.put(a,1),[e,a]
throw new i.FormatError("The Linearization dictionary doesn't point to a valid Page dictionary.")})).catch((function(r){return(0,i.info)(r),t.getPageDict(e)}))}},{key:"getPage",value:function(e){var t=this
if(void 0!==this._pagePromises[e])return this._pagePromises[e]
var r=this.catalog,a=this.linearization,n=a&&a.pageFirst===e?this._getLinearizationPage(e):r.getPageDict(e)
return this._pagePromises[e]=n.then((function(a){var n=b(a,2),i=n[0],o=n[1]
return new _({pdfManager:t.pdfManager,xref:t.xref,pageIndex:e,pageDict:i,ref:o,globalIdFactory:t._globalIdFactory,fontCache:r.fontCache,builtInCMapCache:r.builtInCMapCache,globalImageCache:r.globalImageCache})}))}},{key:"checkFirstPage",value:function(){var e=this
return this.getPage(0).catch(function(){var t=m(n.default.mark((function t(r){return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(r instanceof c.XRefEntryException)){t.next=5
break}return e._pagePromises.length=0,t.next=4,e.cleanup()
case 4:throw new c.XRefParseException
case 5:case"end":return t.stop()}}),t)})))
return function(e){return t.apply(this,arguments)}}())}},{key:"fontFallback",value:function(e,t){return this.catalog.fontFallback(e,t)}},{key:"cleanup",value:(t=m(n.default.mark((function e(){var t,r=arguments
return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]&&r[0],e.abrupt("return",this.catalog?this.catalog.cleanup(t):(0,s.clearPrimitiveCaches)())
case 2:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"linearization",get:function(){var e=null
try{e=f.Linearization.create(this.stream)}catch(t){if(t instanceof c.MissingDataException)throw t;(0,i.info)(t)}return(0,i.shadow)(this,"linearization",e)}},{key:"startXRef",get:function(){var e=this.stream,t=0
if(this.linearization)e.reset(),D(e,B)&&(t=e.pos+6-e.start)
else{for(var r=R.length,a=!1,n=e.end;!a&&n>0;)(n-=1024-r)<0&&(n=0),e.pos=n,a=D(e,R,1024,!0)
if(a){var o
e.skip(9)
do{o=e.getByte()}while((0,c.isWhiteSpace)(o))
for(var s="";o>=32&&o<=57;)s+=String.fromCharCode(o),o=e.getByte()
t=parseInt(s,10),isNaN(t)&&(t=0)}}return(0,i.shadow)(this,"startXRef",t)}},{key:"numPages",get:function(){var e=this.linearization,t=e?e.numPages:this.catalog.numPages
return(0,i.shadow)(this,"numPages",t)}},{key:"formInfo",get:function(){var e={hasAcroForm:!1,hasXfa:!1},t=this.catalog.acroForm
if(!t)return(0,i.shadow)(this,"formInfo",e)
try{var r=t.get("XFA"),a=Array.isArray(r)&&r.length>0||(0,s.isStream)(r)&&!r.isEmpty
e.hasXfa=a
var n=t.get("Fields"),o=Array.isArray(n)&&n.length>0,l=!!(1&t.get("SigFlags"))&&this._hasOnlyDocumentSignatures(n)
e.hasAcroForm=o&&!l}catch(u){if(u instanceof c.MissingDataException)throw u;(0,i.info)("Cannot fetch form information.")}return(0,i.shadow)(this,"formInfo",e)}},{key:"documentInfo",get:function(){var e={Title:i.isString,Author:i.isString,Subject:i.isString,Keywords:i.isString,Creator:i.isString,Producer:i.isString,CreationDate:i.isString,ModDate:i.isString,Trapped:s.isName},t=this._version
"string"==typeof t&&M.test(t)||((0,i.warn)("Invalid PDF header version number: ".concat(t)),t=null)
var r,a={PDFFormatVersion:t,IsLinearized:!!this.linearization,IsAcroFormPresent:this.formInfo.hasAcroForm,IsXFAPresent:this.formInfo.hasXfa,IsCollectionPresent:!!this.catalog.collection}
try{r=this.xref.trailer.get("Info")}catch(f){if(f instanceof c.MissingDataException)throw f;(0,i.info)("The document information dictionary is invalid.")}if((0,s.isDict)(r)){var n,o=y(r.getKeys())
try{for(o.s();!(n=o.n()).done;){var l=n.value,u=r.get(l)
if(e[l])e[l](u)?a[l]="string"!=typeof u?u:(0,i.stringToPDFString)(u):(0,i.info)('Bad value in document info for "'.concat(l,'".'))
else if("string"==typeof l){var h=void 0
if((0,i.isString)(u))h=(0,i.stringToPDFString)(u)
else{if(!((0,s.isName)(u)||(0,i.isNum)(u)||(0,i.isBool)(u))){(0,i.info)('Unsupported value in document info for (custom) "'.concat(l,'".'))
continue}h=u}a.Custom||(a.Custom=Object.create(null)),a.Custom[l]=h}}}catch(f){o.e(f)}finally{o.f()}}return(0,i.shadow)(this,"documentInfo",a)}},{key:"fingerprint",get:function(){for(var e,t=this.xref.trailer.get("ID"),r=[],a=0,n=(e=Array.isArray(t)&&t[0]&&(0,i.isString)(t[0])&&"\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0"!==t[0]?(0,i.stringToBytes)(t[0]):(0,h.calculateMD5)(this.stream.getByteRange(0,1024),0,1024)).length;a<n;a++){var o=e[a].toString(16)
r.push(o.padStart(2,"0"))}return(0,i.shadow)(this,"fingerprint",r.join(""))}}]),e}()
t.PDFDocument=L},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.FileSpec=t.XRef=t.ObjectLoader=t.Catalog=void 0
var a,n=(a=r(2))&&a.__esModule?a:{default:a},i=r(5),o=r(202),s=r(208),c=r(205),l=r(219),u=r(220),h=r(221)
function f(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,a=m(e)
if(t){var n=m(this).constructor
r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments)
return g(this,r)}}function g(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,r,a,n,i,o){try{var s=e[i](o),c=s.value}catch(l){return void r(l)}s.done?t(c):Promise.resolve(c).then(a,n)}function b(e){return function(){var t=this,r=arguments
return new Promise((function(a,n){var i=e.apply(t,r)
function o(e){v(i,a,n,o,s,"next",e)}function s(e){v(i,a,n,o,s,"throw",e)}o(void 0)}))}}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return
var r=[],a=!0,n=!1,i=void 0
try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);a=!0);}catch(c){n=!0,i=c}finally{try{a||null==s.return||s.return()}finally{if(n)throw i}}return r}(e,t)||S(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,t){var r
if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=S(e))||t&&e&&"number"==typeof e.length){r&&(e=r)
var a=0,n=function(){}
return{s:n,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1
return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next()
return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==r.return||r.return()}finally{if(s)throw i}}}}function S(e,t){if(e){if("string"==typeof e)return x(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?x(e,t):void 0}}function x(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r]
return a}function C(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function A(e,t){for(var r=0;r<t.length;r++){var a=t[r]
a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function O(e,t,r){return t&&A(e.prototype,t),r&&A(e,r),e}function T(e){return(0,o.isDict)(e)?e.get("D"):e}var I=function(){function e(t,r){if(C(this,e),this.pdfManager=t,this.xref=r,this._catDict=r.getCatalogObj(),!(0,o.isDict)(this._catDict))throw new i.FormatError("Catalog object is not a dictionary.")
this.fontCache=new o.RefSetCache,this.builtInCMapCache=new Map,this.globalImageCache=new h.GlobalImageCache,this.pageKidsCountCache=new o.RefSetCache}return O(e,[{key:"_readDocumentOutline",value:function(){var t=this._catDict.get("Outlines")
if(!(0,o.isDict)(t))return null
if(t=t.getRaw("First"),!(0,o.isRef)(t))return null
var r={items:[]},a=[{obj:t,parent:r}],n=new o.RefSet
n.put(t)
for(var s=this.xref,c=new Uint8ClampedArray(3);a.length>0;){var l=a.shift(),h=s.fetchIfRef(l.obj)
if(null!==h){if(!h.has("Title"))throw new i.FormatError("Invalid outline item encountered.")
var f={url:null,dest:null}
e.parseDestDictionary({destDict:h,resultObj:f,docBaseUrl:this.pdfManager.docBaseUrl})
var d=h.get("Title"),p=h.get("F")||0,g=h.getArray("C"),m=h.get("Count"),v=c
!Array.isArray(g)||3!==g.length||0===g[0]&&0===g[1]&&0===g[2]||(v=u.ColorSpace.singletons.rgb.getRgb(g,0))
var b={dest:f.dest,url:f.url,unsafeUrl:f.unsafeUrl,newWindow:f.newWindow,title:(0,i.stringToPDFString)(d),color:v,count:Number.isInteger(m)?m:void 0,bold:!!(2&p),italic:!!(1&p),items:[]}
l.parent.items.push(b),t=h.getRaw("First"),(0,o.isRef)(t)&&!n.has(t)&&(a.push({obj:t,parent:b}),n.put(t)),t=h.getRaw("Next"),(0,o.isRef)(t)&&!n.has(t)&&(a.push({obj:t,parent:l.parent}),n.put(t))}}return r.items.length>0?r.items:null}},{key:"_readPermissions",value:function(){var e=this.xref.trailer.get("Encrypt")
if(!(0,o.isDict)(e))return null
var t=e.get("P")
if(!(0,i.isNum)(t))return null
t+=Math.pow(2,32)
var r=[]
for(var a in i.PermissionFlag){var n=i.PermissionFlag[a]
t&n&&r.push(n)}return r}},{key:"_readOptionalContentConfig",value:function(e,t){function r(e){var r=[]
if(Array.isArray(e)){var a,n=k(e)
try{for(n.s();!(a=n.n()).done;){var i=a.value;(0,o.isRef)(i)&&(t.includes(i)&&r.push(i.toString()))}}catch(s){n.e(s)}finally{n.f()}}return r}function a(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
if(!Array.isArray(e))return null
var a,i=[],s=k(e)
try{for(s.s();!(a=s.n()).done;){var l=a.value
if((0,o.isRef)(l)&&t.includes(l))c.put(l),i.push(l.toString())
else{var u=n(l,r)
u&&i.push(u)}}}catch(g){s.e(g)}finally{s.f()}if(r>0)return i
var h,f=[],d=k(t)
try{for(d.s();!(h=d.n()).done;){var p=h.value
c.has(p)||f.push(p.toString())}}catch(g){d.e(g)}finally{d.f()}return f.length&&i.push({name:null,order:f}),i}function n(e,t){if(++t>l)return(0,i.warn)("parseNestedOrder - reached MAX_NESTED_LEVELS."),null
var r=s.fetchIfRef(e)
if(!Array.isArray(r))return null
var n=s.fetchIfRef(r[0])
if("string"!=typeof n)return null
var o=a(r.slice(1),t)
return o&&o.length?{name:(0,i.stringToPDFString)(n),order:o}:null}var s=this.xref,c=new o.RefSet,l=10
return{name:(0,i.isString)(e.get("Name"))?(0,i.stringToPDFString)(e.get("Name")):null,creator:(0,i.isString)(e.get("Creator"))?(0,i.stringToPDFString)(e.get("Creator")):null,baseState:(0,o.isName)(e.get("BaseState"))?e.get("BaseState").name:null,on:r(e.get("ON")),off:r(e.get("OFF")),order:a(e.get("Order")),groups:null}}},{key:"getDestination",value:function(e){var t=this._readDests()
return t instanceof _||t instanceof o.Dict?T(t.get(e)||null):null}},{key:"_readDests",value:function(){var e=this._catDict.get("Names")
return e&&e.has("Dests")?new _(e.getRaw("Dests"),this.xref):this._catDict.has("Dests")?this._catDict.get("Dests"):void 0}},{key:"_readPageLabels",value:function(){var e=this._catDict.getRaw("PageLabels")
if(!e)return null
for(var t=new Array(this.numPages),r=null,a="",n=new F(e,this.xref).getAll(),s="",l=1,u=0,h=this.numPages;u<h;u++){if(u in n){var f=n[u]
if(!(0,o.isDict)(f))throw new i.FormatError("PageLabel is not a dictionary.")
if(f.has("Type")&&!(0,o.isName)(f.get("Type"),"PageLabel"))throw new i.FormatError("Invalid type in PageLabel dictionary.")
if(f.has("S")){var d=f.get("S")
if(!(0,o.isName)(d))throw new i.FormatError("Invalid style in PageLabel dictionary.")
r=d.name}else r=null
if(f.has("P")){var p=f.get("P")
if(!(0,i.isString)(p))throw new i.FormatError("Invalid prefix in PageLabel dictionary.")
a=(0,i.stringToPDFString)(p)}else a=""
if(f.has("St")){var g=f.get("St")
if(!(Number.isInteger(g)&&g>=1))throw new i.FormatError("Invalid start in PageLabel dictionary.")
l=g}else l=1}switch(r){case"D":s=l
break
case"R":case"r":s=(0,c.toRomanNumerals)(l,"r"===r)
break
case"A":case"a":for(var m="a"===r?97:65,v=l-1,b=String.fromCharCode(m+v%26),y=[],w=0,k=v/26|0;w<=k;w++)y.push(b)
s=y.join("")
break
default:if(r)throw new i.FormatError('Invalid style "'.concat(r,'" in PageLabel dictionary.'))
s=""}t[u]=a+s,l++}return t}},{key:"fontFallback",value:function(e,t){var r=[]
return this.fontCache.forEach((function(e){r.push(e)})),Promise.all(r).then((function(r){var a,n=k(r)
try{for(n.s();!(a=n.n()).done;){var i=a.value
if(i.loadedName===e)return void i.fallback(t)}}catch(o){n.e(o)}finally{n.f()}}))}},{key:"cleanup",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(0,o.clearPrimitiveCaches)(),this.globalImageCache.clear(t),this.pageKidsCountCache.clear()
var r=[]
return this.fontCache.forEach((function(e){r.push(e)})),Promise.all(r).then((function(t){var r,a=k(t)
try{for(a.s();!(r=a.n()).done;){delete r.value.dict.translated}}catch(n){a.e(n)}finally{a.f()}e.fontCache.clear(),e.builtInCMapCache.clear()}))}},{key:"getPageDict",value:function(e){var t,r=(0,i.createPromiseCapability)(),a=[this._catDict.getRaw("Pages")],n=new o.RefSet,s=this.xref,c=this.pageKidsCountCache,l=0
return function u(){for(var h=function(){var h=a.pop()
if((0,o.isRef)(h))return(t=c.get(h))>0&&l+t<e?(l+=t,"continue"):n.has(h)?(r.reject(new i.FormatError("Pages tree contains circular reference.")),{v:void 0}):(n.put(h),s.fetchAsync(h).then((function(t){(0,o.isDict)(t,"Page")||(0,o.isDict)(t)&&!t.has("Kids")?e===l?(h&&!c.has(h)&&c.put(h,1),r.resolve([t,h])):(l++,u()):(a.push(t),u())}),r.reject),{v:void 0})
if(!(0,o.isDict)(h))return r.reject(new i.FormatError("Page dictionary kid reference points to wrong type of object.")),{v:void 0}
if(t=h.get("Count"),Number.isInteger(t)&&t>=0){var f=h.objId
if(f&&!c.has(f)&&c.put(f,t),l+t<=e)return l+=t,"continue"}var d=h.get("Kids")
if(!Array.isArray(d))return(0,o.isName)(h.get("Type"),"Page")||!h.has("Type")&&h.has("Contents")?l===e?(r.resolve([h,null]),{v:void 0}):(l++,"continue"):(r.reject(new i.FormatError("Page dictionary kids object is not an array.")),{v:void 0})
for(var p=d.length-1;p>=0;p--)a.push(d[p])};a.length;){var f=h()
if("continue"!==f&&"object"===w(f))return f.v}r.reject(new Error("Page index ".concat(e," not found.")))}(),r.promise}},{key:"getPageIndex",value:function(e){var t=this.xref
var r=0
return function a(n){return function(r){var a,n=0
return t.fetchAsync(r).then((function(t){if((0,o.isRefsEqual)(r,e)&&!(0,o.isDict)(t,"Page")&&(!(0,o.isDict)(t)||t.has("Type")||!t.has("Contents")))throw new i.FormatError("The reference does not point to a /Page dictionary.")
if(!t)return null
if(!(0,o.isDict)(t))throw new i.FormatError("Node must be a dictionary.")
return a=t.getRaw("Parent"),t.getAsync("Parent")})).then((function(e){if(!e)return null
if(!(0,o.isDict)(e))throw new i.FormatError("Parent must be a dictionary.")
return e.getAsync("Kids")})).then((function(e){if(!e)return null
for(var s=[],c=!1,l=0,u=e.length;l<u;l++){var h=e[l]
if(!(0,o.isRef)(h))throw new i.FormatError("Kid must be a reference.")
if((0,o.isRefsEqual)(h,r)){c=!0
break}s.push(t.fetchAsync(h).then((function(e){if(!(0,o.isDict)(e))throw new i.FormatError("Kid node must be a dictionary.")
e.has("Count")?n+=e.get("Count"):n++})))}if(!c)throw new i.FormatError("Kid reference not found in parent's kids.")
return Promise.all(s).then((function(){return[n,a]}))}))}(n).then((function(e){if(!e)return r
var t=y(e,2),n=t[0],i=t[1]
return r+=n,a(i)}))}(e)}},{key:"version",get:function(){var e=this._catDict.get("Version")
return(0,o.isName)(e)?(0,i.shadow)(this,"version",e.name):(0,i.shadow)(this,"version",null)}},{key:"collection",get:function(){var e=null
try{var t=this._catDict.get("Collection");(0,o.isDict)(t)&&t.size>0&&(e=t)}catch(r){if(r instanceof c.MissingDataException)throw r;(0,i.info)("Cannot fetch Collection entry; assuming no collection is present.")}return(0,i.shadow)(this,"collection",e)}},{key:"acroForm",get:function(){var e=null
try{var t=this._catDict.get("AcroForm");(0,o.isDict)(t)&&t.size>0&&(e=t)}catch(r){if(r instanceof c.MissingDataException)throw r;(0,i.info)("Cannot fetch AcroForm entry; assuming no forms are present.")}return(0,i.shadow)(this,"acroForm",e)}},{key:"metadata",get:function(){var e=this._catDict.getRaw("Metadata")
if(!(0,o.isRef)(e))return(0,i.shadow)(this,"metadata",null)
var t,r=!(this.xref.encrypt&&this.xref.encrypt.encryptMetadata),a=this.xref.fetch(e,r)
if(a&&(0,o.isDict)(a.dict)){var n=a.dict.get("Type"),s=a.dict.get("Subtype")
if((0,o.isName)(n,"Metadata")&&(0,o.isName)(s,"XML"))try{t=(0,i.stringToUTF8String)((0,i.bytesToString)(a.getBytes()))}catch(l){if(l instanceof c.MissingDataException)throw l;(0,i.info)("Skipping invalid metadata.")}}return(0,i.shadow)(this,"metadata",t)}},{key:"toplevelPagesDict",get:function(){var e=this._catDict.get("Pages")
if(!(0,o.isDict)(e))throw new i.FormatError("Invalid top-level pages dictionary.")
return(0,i.shadow)(this,"toplevelPagesDict",e)}},{key:"documentOutline",get:function(){var e=null
try{e=this._readDocumentOutline()}catch(t){if(t instanceof c.MissingDataException)throw t;(0,i.warn)("Unable to read document outline.")}return(0,i.shadow)(this,"documentOutline",e)}},{key:"permissions",get:function(){var e=null
try{e=this._readPermissions()}catch(t){if(t instanceof c.MissingDataException)throw t;(0,i.warn)("Unable to read permissions.")}return(0,i.shadow)(this,"permissions",e)}},{key:"optionalContentConfig",get:function(){var e=null
try{var t=this._catDict.get("OCProperties")
if(!t)return(0,i.shadow)(this,"optionalContentConfig",null)
var r=t.get("D")
if(!r)return(0,i.shadow)(this,"optionalContentConfig",null)
var a=t.get("OCGs")
if(!Array.isArray(a))return(0,i.shadow)(this,"optionalContentConfig",null)
var n,s=[],l=[],u=k(a)
try{for(u.s();!(n=u.n()).done;){var h=n.value
if((0,o.isRef)(h)){l.push(h)
var f=this.xref.fetchIfRef(h)
s.push({id:h.toString(),name:(0,i.isString)(f.get("Name"))?(0,i.stringToPDFString)(f.get("Name")):null,intent:(0,i.isString)(f.get("Intent"))?(0,i.stringToPDFString)(f.get("Intent")):null})}}}catch(d){u.e(d)}finally{u.f()}(e=this._readOptionalContentConfig(r,l)).groups=s}catch(p){if(p instanceof c.MissingDataException)throw p;(0,i.warn)("Unable to read optional content config: ".concat(p))}return(0,i.shadow)(this,"optionalContentConfig",e)}},{key:"numPages",get:function(){var e=this.toplevelPagesDict.get("Count")
if(!Number.isInteger(e))throw new i.FormatError("Page count in top-level pages dictionary is not an integer.")
return(0,i.shadow)(this,"numPages",e)}},{key:"destinations",get:function(){var e=this._readDests(),t=Object.create(null)
if(e instanceof _){var r=e.getAll()
for(var a in r)t[a]=T(r[a])}else e instanceof o.Dict&&e.forEach((function(e,r){r&&(t[e]=T(r))}))
return(0,i.shadow)(this,"destinations",t)}},{key:"pageLabels",get:function(){var e=null
try{e=this._readPageLabels()}catch(t){if(t instanceof c.MissingDataException)throw t;(0,i.warn)("Unable to read page labels.")}return(0,i.shadow)(this,"pageLabels",e)}},{key:"pageLayout",get:function(){var e=this._catDict.get("PageLayout"),t=""
if((0,o.isName)(e))switch(e.name){case"SinglePage":case"OneColumn":case"TwoColumnLeft":case"TwoColumnRight":case"TwoPageLeft":case"TwoPageRight":t=e.name}return(0,i.shadow)(this,"pageLayout",t)}},{key:"pageMode",get:function(){var e=this._catDict.get("PageMode"),t="UseNone"
if((0,o.isName)(e))switch(e.name){case"UseNone":case"UseOutlines":case"UseThumbs":case"FullScreen":case"UseOC":case"UseAttachments":t=e.name}return(0,i.shadow)(this,"pageMode",t)}},{key:"viewerPreferences",get:function(){var e=this,t={HideToolbar:i.isBool,HideMenubar:i.isBool,HideWindowUI:i.isBool,FitWindow:i.isBool,CenterWindow:i.isBool,DisplayDocTitle:i.isBool,NonFullScreenPageMode:o.isName,Direction:o.isName,ViewArea:o.isName,ViewClip:o.isName,PrintArea:o.isName,PrintClip:o.isName,PrintScaling:o.isName,Duplex:o.isName,PickTrayByPDFSize:i.isBool,PrintPageRange:Array.isArray,NumCopies:Number.isInteger},r=this._catDict.get("ViewerPreferences"),a=null
if((0,o.isDict)(r))for(var n in t)if(r.has(n)){var s=r.get(n)
if(t[n](s)){var c=void 0
switch(n){case"NonFullScreenPageMode":switch(s.name){case"UseNone":case"UseOutlines":case"UseThumbs":case"UseOC":c=s.name
break
default:c="UseNone"}break
case"Direction":switch(s.name){case"L2R":case"R2L":c=s.name
break
default:c="L2R"}break
case"ViewArea":case"ViewClip":case"PrintArea":case"PrintClip":switch(s.name){case"MediaBox":case"CropBox":case"BleedBox":case"TrimBox":case"ArtBox":c=s.name
break
default:c="CropBox"}break
case"PrintScaling":switch(s.name){case"None":case"AppDefault":c=s.name
break
default:c="AppDefault"}break
case"Duplex":switch(s.name){case"Simplex":case"DuplexFlipShortEdge":case"DuplexFlipLongEdge":c=s.name
break
default:c="None"}break
case"PrintPageRange":if(s.length%2!=0)break
s.every((function(t,r,a){return Number.isInteger(t)&&t>0&&(0===r||t>=a[r-1])&&t<=e.numPages}))&&(c=s)
break
case"NumCopies":s>0&&(c=s)
break
default:if("boolean"!=typeof s)throw new i.FormatError("viewerPreferences - expected a boolean value for: ".concat(n))
c=s}void 0!==c?(a||(a=Object.create(null)),a[n]=c):(0,i.info)('Bad value in ViewerPreferences for "'.concat(n,'".'))}else(0,i.info)('Bad value in ViewerPreferences for "'.concat(n,'".'))}return(0,i.shadow)(this,"viewerPreferences",a)}},{key:"openAction",get:function(){var t=this._catDict.get("OpenAction"),r=null
if((0,o.isDict)(t)){var a=new o.Dict(this.xref)
a.set("A",t)
var n={url:null,dest:null,action:null}
e.parseDestDictionary({destDict:a,resultObj:n}),Array.isArray(n.dest)?(r||(r=Object.create(null)),r.dest=n.dest):n.action&&(r||(r=Object.create(null)),r.action=n.action)}else Array.isArray(t)&&(r||(r=Object.create(null)),r.dest=t)
return(0,i.shadow)(this,"openAction",r)}},{key:"attachments",get:function(){var e=this._catDict.get("Names"),t=null
if(e&&e.has("EmbeddedFiles")){var r=new _(e.getRaw("EmbeddedFiles"),this.xref).getAll()
for(var a in r){var n=new R(r[a],this.xref)
t||(t=Object.create(null)),t[(0,i.stringToPDFString)(a)]=n.serializable}}return(0,i.shadow)(this,"attachments",t)}},{key:"javaScript",get:function(){var e=this._catDict.get("Names"),t=null
function r(e){var r=e.get("S")
if((0,o.isName)(r,"JavaScript")){var a=e.get("JS")
if((0,o.isStream)(a))a=(0,i.bytesToString)(a.getBytes())
else if(!(0,i.isString)(a))return
t||(t=[]),t.push((0,i.stringToPDFString)(a))}}if(e&&e.has("JavaScript")){var a=new _(e.getRaw("JavaScript"),this.xref).getAll()
for(var n in a){var s=a[n];(0,o.isDict)(s)&&r(s)}}var c=this._catDict.get("OpenAction")
return(0,o.isDict)(c)&&(0,o.isName)(c.get("S"),"JavaScript")&&r(c),(0,i.shadow)(this,"javaScript",t)}}],[{key:"parseDestDictionary",value:function(e){var t=e.destDict
if((0,o.isDict)(t)){var r=e.resultObj
if("object"===w(r)){var a,n,s=e.docBaseUrl||null,c=t.get("A")
if(!(0,o.isDict)(c)&&t.has("Dest")&&(c=t.get("Dest")),(0,o.isDict)(c)){var l=c.get("S")
if(!(0,o.isName)(l))return void(0,i.warn)("parseDestDictionary: Invalid type in Action dictionary.")
var u=l.name
switch(u){case"URI":a=c.get("URI"),(0,o.isName)(a)?a="/"+a.name:(0,i.isString)(a)&&(a=function(e){return e.startsWith("www.")?"http://".concat(e):e}(a))
break
case"GoTo":n=c.get("D")
break
case"Launch":case"GoToR":var h=c.get("F");(0,o.isDict)(h)?a=h.get("F")||null:(0,i.isString)(h)&&(a=h)
var f=c.get("D")
if(f&&((0,o.isName)(f)&&(f=f.name),(0,i.isString)(a))){var d=a.split("#")[0];(0,i.isString)(f)?a=d+"#"+f:Array.isArray(f)&&(a=d+"#"+JSON.stringify(f))}var p=c.get("NewWindow");(0,i.isBool)(p)&&(r.newWindow=p)
break
case"Named":var g=c.get("N");(0,o.isName)(g)&&(r.action=g.name)
break
case"JavaScript":var m,v=c.get("JS")
if((0,o.isStream)(v)?m=(0,i.bytesToString)(v.getBytes()):(0,i.isString)(v)&&(m=v),m){var b=new RegExp("^\\s*("+["app.launchURL","window.open"].join("|").split(".").join("\\.")+")\\((?:'|\")([^'\"]*)(?:'|\")(?:,\\s*(\\w+)\\)|\\))","i").exec((0,i.stringToPDFString)(m))
if(b&&b[2]){a=b[2],"true"===b[3]&&"app.launchURL"===b[1]&&(r.newWindow=!0)
break}}default:(0,i.warn)('parseDestDictionary: unsupported action type "'.concat(u,'".'))}}else t.has("Dest")&&(n=t.get("Dest"))
if((0,i.isString)(a)){a=function(e){try{return(0,i.stringToUTF8String)(e)}catch(t){return e}}(a)
var y=(0,i.createValidAbsoluteUrl)(a,s)
y&&(r.url=y.href),r.unsafeUrl=a}n&&((0,o.isName)(n)&&(n=n.name),((0,i.isString)(n)||Array.isArray(n))&&(r.dest=n))}else(0,i.warn)("parseDestDictionary: `resultObj` must be an object.")}else(0,i.warn)("parseDestDictionary: `destDict` must be a dictionary.")}}]),e}()
t.Catalog=I
var E=function(){function e(e,t){this.stream=e,this.pdfManager=t,this.entries=[],this.xrefstms=Object.create(null),this._cacheMap=new Map,this.stats={streamTypes:Object.create(null),fontTypes:Object.create(null)},this._newRefNum=null}return e.prototype={getNewRef:function(){return null===this._newRefNum&&(this._newRefNum=this.entries.length),o.Ref.get(this._newRefNum++,0)},resetNewRef:function(){this._newRefNum=null},setStartXRef:function(e){this.startXRefQueue=[e]},parse:function(e){var t,r,a
e?((0,i.warn)("Indexing all PDF objects"),t=this.indexObjects()):t=this.readXRef(),t.assignXref(this),this.trailer=t
try{r=t.get("Encrypt")}catch(u){if(u instanceof c.MissingDataException)throw u;(0,i.warn)('XRef.parse - Invalid "Encrypt" reference: "'.concat(u,'".'))}if((0,o.isDict)(r)){var n=t.get("ID"),s=n&&n.length?n[0]:""
r.suppressEncryption=!0,this.encrypt=new l.CipherTransformFactory(r,s,this.pdfManager.password)}try{a=t.get("Root")}catch(u){if(u instanceof c.MissingDataException)throw u;(0,i.warn)('XRef.parse - Invalid "Root" reference: "'.concat(u,'".'))}if(!(0,o.isDict)(a)||!a.has("Pages")){if(!e)throw new c.XRefParseException
throw new i.FormatError("Invalid root reference")}this.root=a},processXRefTable:function(e){"tableState"in this||(this.tableState={entryNum:0,streamPos:e.lexer.stream.pos,parserBuf1:e.buf1,parserBuf2:e.buf2})
var t=this.readXRefTable(e)
if(!(0,o.isCmd)(t,"trailer"))throw new i.FormatError("Invalid XRef table: could not find trailer dictionary")
var r=e.getObj()
if(!(0,o.isDict)(r)&&r.dict&&(r=r.dict),!(0,o.isDict)(r))throw new i.FormatError("Invalid XRef table: could not parse trailer dictionary")
return delete this.tableState,r},readXRefTable:function(e){var t,r=e.lexer.stream,a=this.tableState
for(r.pos=a.streamPos,e.buf1=a.parserBuf1,e.buf2=a.parserBuf2;;){if(!("firstEntryNum"in a)||!("entryCount"in a)){if((0,o.isCmd)(t=e.getObj(),"trailer"))break
a.firstEntryNum=t,a.entryCount=e.getObj()}var n=a.firstEntryNum,s=a.entryCount
if(!Number.isInteger(n)||!Number.isInteger(s))throw new i.FormatError("Invalid XRef table: wrong types in subsection header")
for(var c=a.entryNum;c<s;c++){a.streamPos=r.pos,a.entryNum=c,a.parserBuf1=e.buf1,a.parserBuf2=e.buf2
var l={}
l.offset=e.getObj(),l.gen=e.getObj()
var u=e.getObj()
if(u instanceof o.Cmd)switch(u.cmd){case"f":l.free=!0
break
case"n":l.uncompressed=!0}if(!Number.isInteger(l.offset)||!Number.isInteger(l.gen)||!l.free&&!l.uncompressed)throw new i.FormatError("Invalid entry in XRef subsection: ".concat(n,", ").concat(s))
0===c&&l.free&&1===n&&(n=0),this.entries[c+n]||(this.entries[c+n]=l)}a.entryNum=0,a.streamPos=r.pos,a.parserBuf1=e.buf1,a.parserBuf2=e.buf2,delete a.firstEntryNum,delete a.entryCount}if(this.entries[0]&&!this.entries[0].free)throw new i.FormatError("Invalid XRef table: unexpected first object")
return t},processXRefStream:function(e){if(!("streamState"in this)){var t=e.dict,r=t.get("W"),a=t.get("Index")
a||(a=[0,t.get("Size")]),this.streamState={entryRanges:a,byteWidths:r,entryNum:0,streamPos:e.pos}}return this.readXRefStream(e),delete this.streamState,e.dict},readXRefStream:function(e){var t,r,a=this.streamState
e.pos=a.streamPos
for(var n=a.byteWidths,o=n[0],s=n[1],c=n[2],l=a.entryRanges;l.length>0;){var u=l[0],h=l[1]
if(!Number.isInteger(u)||!Number.isInteger(h))throw new i.FormatError("Invalid XRef range fields: ".concat(u,", ").concat(h))
if(!Number.isInteger(o)||!Number.isInteger(s)||!Number.isInteger(c))throw new i.FormatError("Invalid XRef entry fields length: ".concat(u,", ").concat(h))
for(t=a.entryNum;t<h;++t){a.entryNum=t,a.streamPos=e.pos
var f=0,d=0,p=0
for(r=0;r<o;++r)f=f<<8|e.getByte()
for(0===o&&(f=1),r=0;r<s;++r)d=d<<8|e.getByte()
for(r=0;r<c;++r)p=p<<8|e.getByte()
var g={}
switch(g.offset=d,g.gen=p,f){case 0:g.free=!0
break
case 1:g.uncompressed=!0
break
case 2:break
default:throw new i.FormatError("Invalid XRef entry type: ".concat(f))}this.entries[u+t]||(this.entries[u+t]=g)}a.entryNum=0,a.streamPos=e.pos,l.splice(0,2)}},indexObjects:function(){function e(e,t){for(var r="",a=e[t];10!==a&&13!==a&&60!==a&&!(++t>=e.length);)r+=String.fromCharCode(a),a=e[t]
return r}function t(e,t,r){for(var a=r.length,n=e.length,i=0;t<n;){for(var o=0;o<a&&e[t+o]===r[o];)++o
if(o>=a)break
t++,i++}return i}var r=/^(\d+)\s+(\d+)\s+obj\b/,a=/\bendobj[\b\s]$/,n=/\s+(\d+\s+\d+\s+obj[\b\s<])$/,l=new Uint8Array([116,114,97,105,108,101,114]),u=new Uint8Array([115,116,97,114,116,120,114,101,102]),h=new Uint8Array([111,98,106]),f=new Uint8Array([47,88,82,101,102])
this.entries.length=0
var d=this.stream
d.pos=0
for(var p,g,m,v=d.getBytes(),b=d.start,y=v.length,w=[],k=[];b<y;){var S=v[b]
if(9!==S&&10!==S&&13!==S&&32!==S)if(37!==S){var x,C=e(v,b)
if(C.startsWith("xref")&&(4===C.length||/\s/.test(C[4])))b+=t(v,b,l),w.push(b),b+=t(v,b,u)
else if(x=r.exec(C)){var A=0|x[1],O=0|x[2]
this.entries[A]&&this.entries[A].gen!==O||(this.entries[A]={offset:b-d.start,gen:O,uncompressed:!0})
for(var T=void 0,I=b+C.length;I<v.length;){var E=I+t(v,I,h)+4
T=E-b
var P=Math.max(E-25,I),_=(0,i.bytesToString)(v.subarray(P,E))
if(a.test(_))break
var F=n.exec(_)
if(F&&F[1]){(0,i.warn)('indexObjects: Found new "obj" inside of another "obj", caused by missing "endobj" -- trying to recover.'),T-=F[1].length
break}I=E}var R=v.subarray(b,b+T),B=t(R,0,f)
B<T&&R[B+5]<64&&(k.push(b-d.start),this.xrefstms[b-d.start]=1),b+=T}else C.startsWith("trailer")&&(7===C.length||/\s/.test(C[7]))?(w.push(b),b+=t(v,b,u)):b+=C.length+1}else do{if(++b>=y)break
S=v[b]}while(10!==S&&13!==S)
else++b}for(p=0,g=k.length;p<g;++p)this.startXRefQueue.push(k[p]),this.readXRef(!0)
for(p=0,g=w.length;p<g;++p){d.pos=w[p]
var M=new s.Parser({lexer:new s.Lexer(d),xref:this,allowStreams:!0,recoveryMode:!0}),D=M.getObj()
if((0,o.isCmd)(D,"trailer")){var L=M.getObj()
if((0,o.isDict)(L)){var N=void 0
try{N=L.get("Root")}catch(U){if(U instanceof c.MissingDataException)throw U
continue}if((0,o.isDict)(N)&&N.has("Pages")){if(L.has("ID"))return L
m=L}}}}if(m)return m
throw new i.InvalidPDFException("Invalid PDF structure.")},readXRef:function(e){var t=this.stream,r=Object.create(null)
try{for(;this.startXRefQueue.length;){var a=this.startXRefQueue[0]
if(r[a])(0,i.warn)("readXRef - skipping XRef table since it was already parsed."),this.startXRefQueue.shift()
else{r[a]=!0,t.pos=a+t.start
var n,l=new s.Parser({lexer:new s.Lexer(t),xref:this,allowStreams:!0}),u=l.getObj()
if((0,o.isCmd)(u,"xref")){if(n=this.processXRefTable(l),this.topDict||(this.topDict=n),u=n.get("XRefStm"),Number.isInteger(u)){var h=u
h in this.xrefstms||(this.xrefstms[h]=1,this.startXRefQueue.push(h))}}else{if(!Number.isInteger(u))throw new i.FormatError("Invalid XRef stream header")
if(!Number.isInteger(l.getObj())||!(0,o.isCmd)(l.getObj(),"obj")||!(0,o.isStream)(u=l.getObj()))throw new i.FormatError("Invalid XRef stream")
if(n=this.processXRefStream(u),this.topDict||(this.topDict=n),!n)throw new i.FormatError("Failed to read XRef stream")}u=n.get("Prev"),Number.isInteger(u)?this.startXRefQueue.push(u):(0,o.isRef)(u)&&this.startXRefQueue.push(u.num),this.startXRefQueue.shift()}}return this.topDict}catch(f){if(f instanceof c.MissingDataException)throw f;(0,i.info)("(while reading XRef): "+f)}if(!e)throw new c.XRefParseException},getEntry:function(e){var t=this.entries[e]
return t&&!t.free&&t.offset?t:null},fetchIfRef:function(e,t){return e instanceof o.Ref?this.fetch(e,t):e},fetch:function(e,t){if(!(e instanceof o.Ref))throw new Error("ref object is not a reference")
var r=e.num,a=this._cacheMap.get(r)
if(void 0!==a)return a instanceof o.Dict&&!a.objId&&(a.objId=e.toString()),a
var n=this.getEntry(r)
return null===n?(this._cacheMap.set(r,n),n):(n=n.uncompressed?this.fetchUncompressed(e,n,t):this.fetchCompressed(e,n,t),(0,o.isDict)(n)?n.objId=e.toString():(0,o.isStream)(n)&&(n.dict.objId=e.toString()),n)},fetchUncompressed:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=e.gen,n=e.num
if(t.gen!==a)throw new c.XRefEntryException("Inconsistent generation in XRef: ".concat(e))
var i=this.stream.makeSubStream(t.offset+this.stream.start),l=new s.Parser({lexer:new s.Lexer(i),xref:this,allowStreams:!0}),u=l.getObj(),h=l.getObj(),f=l.getObj()
if(u!==n||h!==a||!(f instanceof o.Cmd))throw new c.XRefEntryException("Bad (uncompressed) XRef entry: ".concat(e))
if("obj"!==f.cmd){if(f.cmd.startsWith("obj")&&(n=parseInt(f.cmd.substring(3),10),!Number.isNaN(n)))return n
throw new c.XRefEntryException("Bad (uncompressed) XRef entry: ".concat(e))}return t=this.encrypt&&!r?l.getObj(this.encrypt.createCipherTransform(n,a)):l.getObj(),(0,o.isStream)(t)||this._cacheMap.set(n,t),t},fetchCompressed:function(e,t){var r=t.offset,a=this.fetch(o.Ref.get(r,0))
if(!(0,o.isStream)(a))throw new i.FormatError("bad ObjStm stream")
var n=a.dict.get("First"),l=a.dict.get("N")
if(!Number.isInteger(n)||!Number.isInteger(l))throw new i.FormatError("invalid first and n parameters for ObjStm stream")
for(var u=new s.Parser({lexer:new s.Lexer(a),xref:this,allowStreams:!0}),h=new Array(l),f=0;f<l;++f){var d=u.getObj()
if(!Number.isInteger(d))throw new i.FormatError("invalid object number in the ObjStm stream: ".concat(d))
var p=u.getObj()
if(!Number.isInteger(p))throw new i.FormatError("invalid object offset in the ObjStm stream: ".concat(p))
h[f]=d}for(var g=new Array(l),m=0;m<l;++m){var v=u.getObj()
if(g[m]=v,u.buf1 instanceof o.Cmd&&"endobj"===u.buf1.cmd&&u.shift(),!(0,o.isStream)(v)){var b=h[m],y=this.entries[b]
y&&y.offset===r&&y.gen===m&&this._cacheMap.set(b,v)}}if(void 0===(t=g[t.gen]))throw new c.XRefEntryException("Bad (compressed) XRef entry: ".concat(e))
return t},fetchIfRefAsync:function(e,t){var r=this
return b(n.default.mark((function a(){return n.default.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!(e instanceof o.Ref)){a.next=2
break}return a.abrupt("return",r.fetchAsync(e,t))
case 2:return a.abrupt("return",e)
case 3:case"end":return a.stop()}}),a)})))()},fetchAsync:function(e,t){var r=this
return b(n.default.mark((function a(){return n.default.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.abrupt("return",r.fetch(e,t))
case 4:if(a.prev=4,a.t0=a.catch(0),a.t0 instanceof c.MissingDataException){a.next=8
break}throw a.t0
case 8:return a.next=10,r.pdfManager.requestRange(a.t0.begin,a.t0.end)
case 10:return a.abrupt("return",r.fetchAsync(e,t))
case 11:case"end":return a.stop()}}),a,null,[[0,4]])})))()},getCatalogObj:function(){return this.root}},e}()
t.XRef=E
var P=function(){function e(t,r,a){C(this,e),this.constructor===e&&(0,i.unreachable)("Cannot initialize NameOrNumberTree."),this.root=t,this.xref=r,this._type=a}return O(e,[{key:"getAll",value:function(){var e=Object.create(null)
if(!this.root)return e
var t=this.xref,r=new o.RefSet
r.put(this.root)
for(var a=[this.root];a.length>0;){var n=t.fetchIfRef(a.shift())
if((0,o.isDict)(n))if(n.has("Kids"))for(var s=n.get("Kids"),c=0,l=s.length;c<l;c++){var u=s[c]
if(r.has(u))throw new i.FormatError('Duplicate entry in "'.concat(this._type,'" tree.'))
a.push(u),r.put(u)}else{var h=n.get(this._type)
if(Array.isArray(h))for(var f=0,d=h.length;f<d;f+=2)e[t.fetchIfRef(h[f])]=t.fetchIfRef(h[f+1])}}return e}},{key:"get",value:function(e){if(!this.root)return null
for(var t=this.xref,r=t.fetchIfRef(this.root),a=0;r.has("Kids");){if(++a>10)return(0,i.warn)('Search depth limit reached for "'.concat(this._type,'" tree.')),null
var n=r.get("Kids")
if(!Array.isArray(n))return null
for(var o=0,s=n.length-1;o<=s;){var c=o+s>>1,l=t.fetchIfRef(n[c]).get("Limits")
if(e<t.fetchIfRef(l[0]))s=c-1
else{if(!(e>t.fetchIfRef(l[1]))){r=t.fetchIfRef(n[c])
break}o=c+1}}if(o>s)return null}var u=r.get(this._type)
if(Array.isArray(u)){for(var h=0,f=u.length-2;h<=f;){var d=h+f>>1,p=d+(1&d),g=t.fetchIfRef(u[p])
if(e<g)f=p-2
else{if(!(e>g))return t.fetchIfRef(u[p+1])
h=p+2}}(0,i.info)('Falling back to an exhaustive search, for key "'.concat(e,'", ')+'in "'.concat(this._type,'" tree.'))
for(var m=0,v=u.length;m<v;m+=2){if(t.fetchIfRef(u[m])===e)return(0,i.warn)('The "'.concat(e,'" key was found at an incorrect, ')+'i.e. out-of-order, position in "'.concat(this._type,'" tree.')),t.fetchIfRef(u[m+1])}}return null}}]),e}(),_=function(e){f(r,e)
var t=p(r)
function r(e,a){return C(this,r),t.call(this,e,a,"Names")}return r}(P),F=function(e){f(r,e)
var t=p(r)
function r(e,a){return C(this,r),t.call(this,e,a,"Nums")}return r}(P),R=function(){function e(e,t){e&&(0,o.isDict)(e)&&(this.xref=t,this.root=e,e.has("FS")&&(this.fs=e.get("FS")),this.description=e.has("Desc")?(0,i.stringToPDFString)(e.get("Desc")):"",e.has("RF")&&(0,i.warn)("Related file specifications are not supported"),this.contentAvailable=!0,e.has("EF")||(this.contentAvailable=!1,(0,i.warn)("Non-embedded file specifications are not supported")))}function t(e){return e.has("UF")?e.get("UF"):e.has("F")?e.get("F"):e.has("Unix")?e.get("Unix"):e.has("Mac")?e.get("Mac"):e.has("DOS")?e.get("DOS"):null}return e.prototype={get filename(){if(!this._filename&&this.root){var e=t(this.root)||"unnamed"
this._filename=(0,i.stringToPDFString)(e).replace(/\\\\/g,"\\").replace(/\\\//g,"/").replace(/\\/g,"/")}return this._filename},get content(){if(!this.contentAvailable)return null
!this.contentRef&&this.root&&(this.contentRef=t(this.root.get("EF")))
var e=null
if(this.contentRef){var r=this.xref.fetchIfRef(this.contentRef)
r&&(0,o.isStream)(r)?e=r.getBytes():(0,i.warn)("Embedded file specification points to non-existing/invalid content")}else(0,i.warn)("Embedded file specification does not have a content")
return e},get serializable(){return{filename:this.filename,content:this.content}}},e}()
t.FileSpec=R
var B=function(){function e(e,t){if(e instanceof o.Dict)e=e.getRawValues()
else if((0,o.isStream)(e))e=e.dict.getRawValues()
else if(!Array.isArray(e))return
var r,a,n=k(e)
try{for(n.s();!(r=n.n()).done;){var i=r.value;((a=i)instanceof o.Ref||a instanceof o.Dict||Array.isArray(a)||(0,o.isStream)(a))&&t.push(i)}}catch(s){n.e(s)}finally{n.f()}}function t(e,t,r){this.dict=e,this.keys=t,this.xref=r,this.refSet=null}return t.prototype={load:function(){var e=this
return b(n.default.mark((function t(){var r,a,i,s,c,l
return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.xref.stream.allChunksLoaded&&!e.xref.stream.allChunksLoaded()){t.next=2
break}return t.abrupt("return",void 0)
case 2:for(r=e.keys,a=e.dict,e.refSet=new o.RefSet,i=[],s=0,c=r.length;s<c;s++)void 0!==(l=a.getRaw(r[s]))&&i.push(l)
return t.abrupt("return",e._walk(i))
case 7:case"end":return t.stop()}}),t)})))()},_walk:function(t){var r=this
return b(n.default.mark((function a(){var i,s,l,u,h,f,d,p,g,m,v
return n.default.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:i=[],s=[]
case 2:if(!t.length){a.next=22
break}if(!((l=t.pop())instanceof o.Ref)){a.next=18
break}if(!r.refSet.has(l)){a.next=7
break}return a.abrupt("continue",2)
case 7:a.prev=7,r.refSet.put(l),l=r.xref.fetch(l),a.next=18
break
case 12:if(a.prev=12,a.t0=a.catch(7),a.t0 instanceof c.MissingDataException){a.next=16
break}throw a.t0
case 16:i.push(l),s.push({begin:a.t0.begin,end:a.t0.end})
case 18:if(l&&l.getBaseStreams){for(u=l.getBaseStreams(),h=!1,f=0,d=u.length;f<d;f++)(p=u[f]).allChunksLoaded&&!p.allChunksLoaded()&&(h=!0,s.push({begin:p.start,end:p.end}))
h&&i.push(l)}e(l,t),a.next=2
break
case 22:if(!s.length){a.next=27
break}return a.next=25,r.xref.stream.manager.requestRanges(s)
case 25:for(g=0,m=i.length;g<m;g++)(v=i[g])instanceof o.Ref&&r.refSet.remove(v)
return a.abrupt("return",r._walk(i))
case 27:return r.refSet=null,a.abrupt("return",void 0)
case 29:case"end":return a.stop()}}),a,null,[[7,12]])})))()}},t}()
t.ObjectLoader=B},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.Parser=t.Linearization=t.Lexer=void 0
var a=r(209),n=r(5),i=r(202),o=r(205),s=r(210),c=r(212),l=r(215),u=r(217)
function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var a=t[r]
a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function d(e,t,r){return t&&f(e.prototype,t),r&&f(e,r),e}function p(e){for(var t=e.length,r=1,a=0,n=0;n<t;++n)a+=r+=255&e[n]
return a%65521<<16|r%65521}var g=function(){function e(t){var r=t.lexer,a=t.xref,n=t.allowStreams,i=void 0!==n&&n,o=t.recoveryMode,s=void 0!==o&&o
h(this,e),this.lexer=r,this.xref=a,this.allowStreams=i,this.recoveryMode=s,this.imageCache=Object.create(null),this.refill()}return d(e,[{key:"refill",value:function(){this.buf1=this.lexer.getObj(),this.buf2=this.lexer.getObj()}},{key:"shift",value:function(){this.buf2 instanceof i.Cmd&&"ID"===this.buf2.cmd?(this.buf1=this.buf2,this.buf2=null):(this.buf1=this.buf2,this.buf2=this.lexer.getObj())}},{key:"tryShift",value:function(){try{return this.shift(),!0}catch(e){if(e instanceof o.MissingDataException)throw e
return!1}}},{key:"getObj",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=this.buf1
if(this.shift(),t instanceof i.Cmd)switch(t.cmd){case"BI":return this.makeInlineImage(e)
case"[":for(var r=[];!(0,i.isCmd)(this.buf1,"]")&&!(0,i.isEOF)(this.buf1);)r.push(this.getObj(e))
if((0,i.isEOF)(this.buf1)){if(!this.recoveryMode)throw new n.FormatError("End of file inside array")
return r}return this.shift(),r
case"<<":for(var a=new i.Dict(this.xref);!(0,i.isCmd)(this.buf1,">>")&&!(0,i.isEOF)(this.buf1);)if((0,i.isName)(this.buf1)){var o=this.buf1.name
if(this.shift(),(0,i.isEOF)(this.buf1))break
a.set(o,this.getObj(e))}else(0,n.info)("Malformed dictionary: key must be a name object"),this.shift()
if((0,i.isEOF)(this.buf1)){if(!this.recoveryMode)throw new n.FormatError("End of file inside dictionary")
return a}return(0,i.isCmd)(this.buf2,"stream")?this.allowStreams?this.makeStream(a,e):a:(this.shift(),a)
default:return t}if(Number.isInteger(t)){if(Number.isInteger(this.buf1)&&(0,i.isCmd)(this.buf2,"R")){var s=i.Ref.get(t,this.buf1)
return this.shift(),this.shift(),s}return t}return"string"==typeof t&&e?e.decryptString(t):t}},{key:"findDefaultInlineStreamEnd",value:function(e){for(var t,r,a=this.lexer,s=e.pos,c=0;-1!==(t=e.getByte());)if(0===c)c=69===t?1:0
else if(1===c)c=73===t?2:0
else if((0,n.assert)(2===c,"findDefaultInlineStreamEnd - invalid state."),32===t||10===t||13===t){r=e.pos
for(var l=e.peekBytes(10),u=0,h=l.length;u<h;u++)if((0!==(t=l[u])||0===l[u+1])&&10!==t&&13!==t&&(t<32||t>127)){c=0
break}if(2!==c)continue
if(a.knownCommands){var f=a.peekObj()
f instanceof i.Cmd&&!a.knownCommands[f.cmd]&&(c=0)}else(0,n.warn)("findDefaultInlineStreamEnd - `lexer.knownCommands` is undefined.")
if(2===c)break}else c=0;-1===t&&((0,n.warn)("findDefaultInlineStreamEnd: Reached the end of the stream without finding a valid EI marker"),r&&((0,n.warn)('... trying to recover by using the last "EI" occurrence.'),e.skip(-(e.pos-r))))
var d=4
return e.skip(-d),t=e.peekByte(),e.skip(d),(0,o.isWhiteSpace)(t)||d--,e.pos-d-s}},{key:"findDCTDecodeInlineStreamEnd",value:function(e){for(var t,r,a=e.pos,i=!1;-1!==(t=e.getByte());)if(255===t){switch(e.getByte()){case 0:break
case 255:e.skip(-1)
break
case 217:i=!0
break
case 192:case 193:case 194:case 195:case 197:case 198:case 199:case 201:case 202:case 203:case 205:case 206:case 207:case 196:case 204:case 218:case 219:case 220:case 221:case 222:case 223:case 224:case 225:case 226:case 227:case 228:case 229:case 230:case 231:case 232:case 233:case 234:case 235:case 236:case 237:case 238:case 239:case 254:(r=e.getUint16())>2?e.skip(r-2):e.skip(-2)}if(i)break}var o=e.pos-a
return-1===t?((0,n.warn)("Inline DCTDecode image stream: EOI marker not found, searching for /EI/ instead."),e.skip(-o),this.findDefaultInlineStreamEnd(e)):(this.inlineStreamSkipEI(e),o)}},{key:"findASCII85DecodeInlineStreamEnd",value:function(e){for(var t,r=e.pos;-1!==(t=e.getByte());)if(126===t){var a=e.pos
for(t=e.peekByte();(0,o.isWhiteSpace)(t);)e.skip(),t=e.peekByte()
if(62===t){e.skip()
break}if(e.pos>a){var i=e.peekBytes(2)
if(69===i[0]&&73===i[1])break}}var s=e.pos-r
return-1===t?((0,n.warn)("Inline ASCII85Decode image stream: EOD marker not found, searching for /EI/ instead."),e.skip(-s),this.findDefaultInlineStreamEnd(e)):(this.inlineStreamSkipEI(e),s)}},{key:"findASCIIHexDecodeInlineStreamEnd",value:function(e){for(var t,r=e.pos;-1!==(t=e.getByte())&&62!==t;);var a=e.pos-r
return-1===t?((0,n.warn)("Inline ASCIIHexDecode image stream: EOD marker not found, searching for /EI/ instead."),e.skip(-a),this.findDefaultInlineStreamEnd(e)):(this.inlineStreamSkipEI(e),a)}},{key:"inlineStreamSkipEI",value:function(e){for(var t,r=0;-1!==(t=e.getByte());)if(0===r)r=69===t?1:0
else if(1===r)r=73===t?2:0
else if(2===r)break}},{key:"makeInlineImage",value:function(e){for(var t,r=this.lexer,a=r.stream,o=new i.Dict(this.xref);!(0,i.isCmd)(this.buf1,"ID")&&!(0,i.isEOF)(this.buf1);){if(!(0,i.isName)(this.buf1))throw new n.FormatError("Dictionary key must be a name object")
var s=this.buf1.name
if(this.shift(),(0,i.isEOF)(this.buf1))break
o.set(s,this.getObj(e))}-1!==r.beginInlineImagePos&&(t=a.pos-r.beginInlineImagePos)
var c,l=o.get("Filter","F")
if((0,i.isName)(l))c=l.name
else if(Array.isArray(l)){var u=this.xref.fetchIfRef(l[0]);(0,i.isName)(u)&&(c=u.name)}var h,f=a.pos
h="DCTDecode"===c||"DCT"===c?this.findDCTDecodeInlineStreamEnd(a):"ASCII85Decode"===c||"A85"===c?this.findASCII85DecodeInlineStreamEnd(a):"ASCIIHexDecode"===c||"AHx"===c?this.findASCIIHexDecodeInlineStreamEnd(a):this.findDefaultInlineStreamEnd(a)
var d,g=a.makeSubStream(f,h,o)
if(h<1e3&&t<5552){var m=g.getBytes()
g.reset()
var v=a.pos
a.pos=r.beginInlineImagePos
var b=a.getBytes(t)
a.pos=v,d=p(m)+"_"+p(b)
var y=this.imageCache[d]
if(void 0!==y)return this.buf2=i.Cmd.get("EI"),this.shift(),y.reset(),y}return e&&(g=e.createStream(g,h)),(g=this.filter(g,o,h)).dict=o,void 0!==d&&(g.cacheKey="inline_".concat(h,"_").concat(d),this.imageCache[d]=g),this.buf2=i.Cmd.get("EI"),this.shift(),g}},{key:"_findStreamLength",value:function(e,t){var r=this.lexer.stream
r.pos=e
for(var a=t.length;r.pos<r.end;){var n=r.peekBytes(2048),i=n.length-a
if(i<=0)break
for(var o=0;o<i;){for(var s=0;s<a&&n[o+s]===t[s];)s++
if(s>=a)return r.pos+=o,r.pos-e
o++}r.pos+=i}return-1}},{key:"makeStream",value:function(e,t){var r=this.lexer,a=r.stream
r.skipToNextLine()
var s=a.pos-1,c=e.get("Length")
if(Number.isInteger(c)||((0,n.info)('Bad length "'.concat(c,'" in stream')),c=0),a.pos=s+c,r.nextChar(),this.tryShift()&&(0,i.isCmd)(this.buf2,"endstream"))this.shift()
else{var l=new Uint8Array([101,110,100,115,116,114,101,97,109]),u=this._findStreamLength(s,l)
if(u<0){for(var h=1;h<=1;h++){var f=l.length-h,d=l.slice(0,f),p=this._findStreamLength(s,d)
if(p>=0){var g=a.peekBytes(f+1)[f]
if(!(0,o.isWhiteSpace)(g))break;(0,n.info)('Found "'.concat((0,n.bytesToString)(d),'" when ')+"searching for endstream command."),u=p
break}}if(u<0)throw new n.FormatError("Missing endstream command.")}c=u,r.nextChar(),this.shift(),this.shift()}return this.shift(),a=a.makeSubStream(s,c,e),t&&(a=t.createStream(a,c)),(a=this.filter(a,e,c)).dict=e,a}},{key:"filter",value:function(e,t,r){var a=t.get("Filter","F"),o=t.get("DecodeParms","DP")
if((0,i.isName)(a))return Array.isArray(o)&&(0,n.warn)("/DecodeParms should not contain an Array, when /Filter contains a Name."),this.makeFilter(e,a.name,r,o)
var s=r
if(Array.isArray(a))for(var c=a,l=o,u=0,h=c.length;u<h;++u){if(a=this.xref.fetchIfRef(c[u]),!(0,i.isName)(a))throw new n.FormatError('Bad filter name "'.concat(a,'"'))
o=null,Array.isArray(l)&&u in l&&(o=this.xref.fetchIfRef(l[u])),e=this.makeFilter(e,a.name,s,o),s=null}return e}},{key:"makeFilter",value:function(e,t,r,i){if(0===r)return(0,n.warn)('Empty "'.concat(t,'" stream.')),new a.NullStream
try{var h=this.xref.stats.streamTypes
if("FlateDecode"===t||"Fl"===t)return h[n.StreamType.FLATE]=!0,i?new a.PredictorStream(new a.FlateStream(e,r),r,i):new a.FlateStream(e,r)
if("LZWDecode"===t||"LZW"===t){h[n.StreamType.LZW]=!0
var f=1
return i?(i.has("EarlyChange")&&(f=i.get("EarlyChange")),new a.PredictorStream(new a.LZWStream(e,r,f),r,i)):new a.LZWStream(e,r,f)}return"DCTDecode"===t||"DCT"===t?(h[n.StreamType.DCT]=!0,new l.JpegStream(e,r,e.dict,i)):"JPXDecode"===t||"JPX"===t?(h[n.StreamType.JPX]=!0,new u.JpxStream(e,r,e.dict,i)):"ASCII85Decode"===t||"A85"===t?(h[n.StreamType.A85]=!0,new a.Ascii85Stream(e,r)):"ASCIIHexDecode"===t||"AHx"===t?(h[n.StreamType.AHX]=!0,new a.AsciiHexStream(e,r)):"CCITTFaxDecode"===t||"CCF"===t?(h[n.StreamType.CCF]=!0,new s.CCITTFaxStream(e,r,i)):"RunLengthDecode"===t||"RL"===t?(h[n.StreamType.RLX]=!0,new a.RunLengthStream(e,r)):"JBIG2Decode"===t?(h[n.StreamType.JBIG]=!0,new c.Jbig2Stream(e,r,e.dict,i)):((0,n.warn)('Filter "'.concat(t,'" is not supported.')),e)}catch(d){if(d instanceof o.MissingDataException)throw d
return(0,n.warn)('Invalid stream: "'.concat(d,'"')),new a.NullStream}}}]),e}()
t.Parser=g
var m=[1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,2,0,0,2,2,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
function v(e){return e>=48&&e<=57?15&e:e>=65&&e<=70||e>=97&&e<=102?9+(15&e):-1}var b=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null
h(this,e),this.stream=t,this.nextChar(),this.strBuf=[],this.knownCommands=r,this._hexStringNumWarn=0,this.beginInlineImagePos=-1}return d(e,[{key:"nextChar",value:function(){return this.currentChar=this.stream.getByte()}},{key:"peekChar",value:function(){return this.stream.peekByte()}},{key:"getNumber",value:function(){var e=this.currentChar,t=!1,r=0,a=0
if(45===e?(a=-1,45===(e=this.nextChar())&&(e=this.nextChar())):43===e&&(a=1,e=this.nextChar()),10===e||13===e)do{e=this.nextChar()}while(10===e||13===e)
if(46===e&&(r=10,e=this.nextChar()),e<48||e>57){if(10===r&&0===a&&((0,o.isWhiteSpace)(e)||-1===e))return(0,n.warn)("Lexer.getNumber - treating a single decimal point as zero."),0
throw new n.FormatError("Invalid number: ".concat(String.fromCharCode(e)," (charCode ").concat(e,")"))}a=a||1
for(var i=e-48,s=0,c=1;(e=this.nextChar())>=0;)if(e>=48&&e<=57){var l=e-48
t?s=10*s+l:(0!==r&&(r*=10),i=10*i+l)}else if(46===e){if(0!==r)break
r=1}else if(45===e)(0,n.warn)("Badly formatted number: minus sign in the middle")
else{if(69!==e&&101!==e)break
if(43===(e=this.peekChar())||45===e)c=45===e?-1:1,this.nextChar()
else if(e<48||e>57)break
t=!0}return 0!==r&&(i/=r),t&&(i*=Math.pow(10,c*s)),a*i}},{key:"getString",value:function(){var e=1,t=!1,r=this.strBuf
r.length=0
for(var a=this.nextChar();;){var i=!1
switch(0|a){case-1:(0,n.warn)("Unterminated string"),t=!0
break
case 40:++e,r.push("(")
break
case 41:0==--e?(this.nextChar(),t=!0):r.push(")")
break
case 92:switch(a=this.nextChar()){case-1:(0,n.warn)("Unterminated string"),t=!0
break
case 110:r.push("\n")
break
case 114:r.push("\r")
break
case 116:r.push("\t")
break
case 98:r.push("\b")
break
case 102:r.push("\f")
break
case 92:case 40:case 41:r.push(String.fromCharCode(a))
break
case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:var o=15&a
i=!0,(a=this.nextChar())>=48&&a<=55&&(o=(o<<3)+(15&a),(a=this.nextChar())>=48&&a<=55&&(i=!1,o=(o<<3)+(15&a))),r.push(String.fromCharCode(o))
break
case 13:10===this.peekChar()&&this.nextChar()
break
case 10:break
default:r.push(String.fromCharCode(a))}break
default:r.push(String.fromCharCode(a))}if(t)break
i||(a=this.nextChar())}return r.join("")}},{key:"getName",value:function(){var e,t,r=this.strBuf
for(r.length=0;(e=this.nextChar())>=0&&!m[e];)if(35===e){if(e=this.nextChar(),m[e]){(0,n.warn)("Lexer_getName: NUMBER SIGN (#) should be followed by a hexadecimal number."),r.push("#")
break}var a=v(e)
if(-1!==a){t=e
var o=v(e=this.nextChar())
if(-1===o){if((0,n.warn)("Lexer_getName: Illegal digit (".concat(String.fromCharCode(e),") ")+"in hexadecimal number."),r.push("#",String.fromCharCode(t)),m[e])break
r.push(String.fromCharCode(e))
continue}r.push(String.fromCharCode(a<<4|o))}else r.push("#",String.fromCharCode(e))}else r.push(String.fromCharCode(e))
return r.length>127&&(0,n.warn)("Name token is longer than allowed by the spec: ".concat(r.length)),i.Name.get(r.join(""))}},{key:"_hexStringWarn",value:function(e){5!=this._hexStringNumWarn++?this._hexStringNumWarn>5||(0,n.warn)("getHexString - ignoring invalid character: ".concat(e)):(0,n.warn)("getHexString - ignoring additional invalid characters.")}},{key:"getHexString",value:function(){var e=this.strBuf
e.length=0
var t,r,a=this.currentChar,i=!0
for(this._hexStringNumWarn=0;;){if(a<0){(0,n.warn)("Unterminated hex string")
break}if(62===a){this.nextChar()
break}if(1!==m[a]){if(i){if(-1===(t=v(a))){this._hexStringWarn(a),a=this.nextChar()
continue}}else{if(-1===(r=v(a))){this._hexStringWarn(a),a=this.nextChar()
continue}e.push(String.fromCharCode(t<<4|r))}i=!i,a=this.nextChar()}else a=this.nextChar()}return e.join("")}},{key:"getObj",value:function(){for(var e=!1,t=this.currentChar;;){if(t<0)return i.EOF
if(e)10!==t&&13!==t||(e=!1)
else if(37===t)e=!0
else if(1!==m[t])break
t=this.nextChar()}switch(0|t){case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:case 43:case 45:case 46:return this.getNumber()
case 40:return this.getString()
case 47:return this.getName()
case 91:return this.nextChar(),i.Cmd.get("[")
case 93:return this.nextChar(),i.Cmd.get("]")
case 60:return 60===(t=this.nextChar())?(this.nextChar(),i.Cmd.get("<<")):this.getHexString()
case 62:return 62===(t=this.nextChar())?(this.nextChar(),i.Cmd.get(">>")):i.Cmd.get(">")
case 123:return this.nextChar(),i.Cmd.get("{")
case 125:return this.nextChar(),i.Cmd.get("}")
case 41:throw this.nextChar(),new n.FormatError("Illegal character: ".concat(t))}for(var r=String.fromCharCode(t),a=this.knownCommands,o=a&&void 0!==a[r];(t=this.nextChar())>=0&&!m[t];){var s=r+String.fromCharCode(t)
if(o&&void 0===a[s])break
if(128===r.length)throw new n.FormatError("Command token too long: ".concat(r.length))
r=s,o=a&&void 0!==a[r]}return"true"===r||"false"!==r&&("null"===r?null:("BI"===r&&(this.beginInlineImagePos=this.stream.pos),i.Cmd.get(r)))}},{key:"peekObj",value:function(){var e,t=this.stream.pos,r=this.currentChar,a=this.beginInlineImagePos
try{e=this.getObj()}catch(i){if(i instanceof o.MissingDataException)throw i;(0,n.warn)("peekObj: ".concat(i))}return this.stream.pos=t,this.currentChar=r,this.beginInlineImagePos=a,e}},{key:"skipToNextLine",value:function(){for(var e=this.currentChar;e>=0;){if(13===e){10===(e=this.nextChar())&&this.nextChar()
break}if(10===e){this.nextChar()
break}e=this.nextChar()}}}]),e}()
t.Lexer=b
var y=function(){function e(){h(this,e)}return d(e,null,[{key:"create",value:function(e){function t(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=e.get(t)
if(Number.isInteger(a)&&(r?a>=0:a>0))return a
throw new Error('The "'.concat(t,'" parameter in the linearization ')+"dictionary is invalid.")}var r,a,o=new g({lexer:new b(e),xref:null}),s=o.getObj(),c=o.getObj(),l=o.getObj(),u=o.getObj()
if(!(Number.isInteger(s)&&Number.isInteger(c)&&(0,i.isCmd)(l,"obj")&&(0,i.isDict)(u)&&(0,n.isNum)(r=u.get("Linearized"))&&r>0))return null
if((a=t(u,"L"))!==e.length)throw new Error('The "L" parameter in the linearization dictionary does not equal the stream length.')
return{length:a,hints:function(e){var t,r=e.get("H")
if(Array.isArray(r)&&(2===(t=r.length)||4===t)){for(var a=0;a<t;a++){var n=r[a]
if(!(Number.isInteger(n)&&n>0))throw new Error("Hint (".concat(a,") in the linearization dictionary is invalid."))}return r}throw new Error("Hint array in the linearization dictionary is invalid.")}(u),objectNumberFirst:t(u,"O"),endFirst:t(u,"E"),numPages:t(u,"N"),mainXRefEntriesOffset:t(u,"T"),pageFirst:u.has("P")?t(u,"P",!0):0}}}]),e}()
t.Linearization=y},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.LZWStream=t.StringStream=t.StreamsSequenceStream=t.Stream=t.RunLengthStream=t.PredictorStream=t.NullStream=t.FlateStream=t.DecodeStream=t.DecryptStream=t.AsciiHexStream=t.Ascii85Stream=void 0
var a=r(5),n=r(202),i=r(205)
function o(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return
if("string"==typeof e)return s(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r]
return a}var c=function(){function e(e,t,r,a){this.bytes=e instanceof Uint8Array?e:new Uint8Array(e),this.start=t||0,this.pos=this.start,this.end=t+r||this.bytes.length,this.dict=a}return e.prototype={get length(){return this.end-this.start},get isEmpty(){return 0===this.length},getByte:function(){return this.pos>=this.end?-1:this.bytes[this.pos++]},getUint16:function(){var e=this.getByte(),t=this.getByte()
return-1===e||-1===t?-1:(e<<8)+t},getInt32:function(){return(this.getByte()<<24)+(this.getByte()<<16)+(this.getByte()<<8)+this.getByte()},getBytes:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this.bytes,a=this.pos,n=this.end
if(!e){var i=r.subarray(a,n)
return t?new Uint8ClampedArray(i):i}var o=a+e
o>n&&(o=n),this.pos=o
var s=r.subarray(a,o)
return t?new Uint8ClampedArray(s):s},peekByte:function(){var e=this.getByte()
return-1!==e&&this.pos--,e},peekBytes:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this.getBytes(e,t)
return this.pos-=r.length,r},getByteRange:function(e,t){return e<0&&(e=0),t>this.end&&(t=this.end),this.bytes.subarray(e,t)},skip:function(e){e||(e=1),this.pos+=e},reset:function(){this.pos=this.start},moveStart:function(){this.start=this.pos},makeSubStream:function(t,r,a){return new e(this.bytes.buffer,t,r,a)}},e}()
t.Stream=c
var l=function(){function e(e){var t=(0,a.stringToBytes)(e)
c.call(this,t)}return e.prototype=c.prototype,e}()
t.StringStream=l
var u=function(){var e=new Uint8Array(0)
function t(t){if(this._rawMinBufferLength=t||0,this.pos=0,this.bufferLength=0,this.eof=!1,this.buffer=e,this.minBufferLength=512,t)for(;this.minBufferLength<t;)this.minBufferLength*=2}return t.prototype={get isEmpty(){for(;!this.eof&&0===this.bufferLength;)this.readBlock()
return 0===this.bufferLength},ensureBuffer:function(e){var t=this.buffer
if(e<=t.byteLength)return t
for(var r=this.minBufferLength;r<e;)r*=2
var a=new Uint8Array(r)
return a.set(t),this.buffer=a},getByte:function(){for(var e=this.pos;this.bufferLength<=e;){if(this.eof)return-1
this.readBlock()}return this.buffer[this.pos++]},getUint16:function(){var e=this.getByte(),t=this.getByte()
return-1===e||-1===t?-1:(e<<8)+t},getInt32:function(){return(this.getByte()<<24)+(this.getByte()<<16)+(this.getByte()<<8)+this.getByte()},getBytes:function(e){var t,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=this.pos
if(e){for(this.ensureBuffer(a+e),t=a+e;!this.eof&&this.bufferLength<t;)this.readBlock()
var n=this.bufferLength
t>n&&(t=n)}else{for(;!this.eof;)this.readBlock()
t=this.bufferLength}this.pos=t
var i=this.buffer.subarray(a,t)
return!r||i instanceof Uint8ClampedArray?i:new Uint8ClampedArray(i)},peekByte:function(){var e=this.getByte()
return-1!==e&&this.pos--,e},peekBytes:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this.getBytes(e,t)
return this.pos-=r.length,r},makeSubStream:function(e,t,r){for(var a=e+t;this.bufferLength<=a&&!this.eof;)this.readBlock()
return new c(this.buffer,e,t,r)},getByteRange:function(e,t){(0,a.unreachable)("Should not call DecodeStream.getByteRange")},skip:function(e){e||(e=1),this.pos+=e},reset:function(){this.pos=0},getBaseStreams:function(){return this.str&&this.str.getBaseStreams?this.str.getBaseStreams():[]}},t}()
t.DecodeStream=u
var h=function(){function e(e){this.streams=e
for(var t=0,r=0,a=e.length;r<a;r++){var n=e[r]
t+=n instanceof u?n._rawMinBufferLength:n.length}u.call(this,t)}return e.prototype=Object.create(u.prototype),e.prototype.readBlock=function(){var e=this.streams
if(0!==e.length){var t=e.shift().getBytes(),r=this.bufferLength,a=r+t.length
this.ensureBuffer(a).set(t,r),this.bufferLength=a}else this.eof=!0},e.prototype.getBaseStreams=function(){for(var e=[],t=0,r=this.streams.length;t<r;t++){var a=this.streams[t]
a.getBaseStreams&&e.push.apply(e,o(a.getBaseStreams()))}return e},e}()
t.StreamsSequenceStream=h
var f=function(){var e=new Int32Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),t=new Int32Array([3,4,5,6,7,8,9,10,65547,65549,65551,65553,131091,131095,131099,131103,196643,196651,196659,196667,262211,262227,262243,262259,327811,327843,327875,327907,258,258,258]),r=new Int32Array([1,2,3,4,65541,65543,131081,131085,196625,196633,262177,262193,327745,327777,393345,393409,459009,459137,524801,525057,590849,591361,657409,658433,724993,727041,794625,798721,868353,876545]),n=[new Int32Array([459008,524368,524304,524568,459024,524400,524336,590016,459016,524384,524320,589984,524288,524416,524352,590048,459012,524376,524312,589968,459028,524408,524344,590032,459020,524392,524328,59e4,524296,524424,524360,590064,459010,524372,524308,524572,459026,524404,524340,590024,459018,524388,524324,589992,524292,524420,524356,590056,459014,524380,524316,589976,459030,524412,524348,590040,459022,524396,524332,590008,524300,524428,524364,590072,459009,524370,524306,524570,459025,524402,524338,590020,459017,524386,524322,589988,524290,524418,524354,590052,459013,524378,524314,589972,459029,524410,524346,590036,459021,524394,524330,590004,524298,524426,524362,590068,459011,524374,524310,524574,459027,524406,524342,590028,459019,524390,524326,589996,524294,524422,524358,590060,459015,524382,524318,589980,459031,524414,524350,590044,459023,524398,524334,590012,524302,524430,524366,590076,459008,524369,524305,524569,459024,524401,524337,590018,459016,524385,524321,589986,524289,524417,524353,590050,459012,524377,524313,589970,459028,524409,524345,590034,459020,524393,524329,590002,524297,524425,524361,590066,459010,524373,524309,524573,459026,524405,524341,590026,459018,524389,524325,589994,524293,524421,524357,590058,459014,524381,524317,589978,459030,524413,524349,590042,459022,524397,524333,590010,524301,524429,524365,590074,459009,524371,524307,524571,459025,524403,524339,590022,459017,524387,524323,589990,524291,524419,524355,590054,459013,524379,524315,589974,459029,524411,524347,590038,459021,524395,524331,590006,524299,524427,524363,590070,459011,524375,524311,524575,459027,524407,524343,590030,459019,524391,524327,589998,524295,524423,524359,590062,459015,524383,524319,589982,459031,524415,524351,590046,459023,524399,524335,590014,524303,524431,524367,590078,459008,524368,524304,524568,459024,524400,524336,590017,459016,524384,524320,589985,524288,524416,524352,590049,459012,524376,524312,589969,459028,524408,524344,590033,459020,524392,524328,590001,524296,524424,524360,590065,459010,524372,524308,524572,459026,524404,524340,590025,459018,524388,524324,589993,524292,524420,524356,590057,459014,524380,524316,589977,459030,524412,524348,590041,459022,524396,524332,590009,524300,524428,524364,590073,459009,524370,524306,524570,459025,524402,524338,590021,459017,524386,524322,589989,524290,524418,524354,590053,459013,524378,524314,589973,459029,524410,524346,590037,459021,524394,524330,590005,524298,524426,524362,590069,459011,524374,524310,524574,459027,524406,524342,590029,459019,524390,524326,589997,524294,524422,524358,590061,459015,524382,524318,589981,459031,524414,524350,590045,459023,524398,524334,590013,524302,524430,524366,590077,459008,524369,524305,524569,459024,524401,524337,590019,459016,524385,524321,589987,524289,524417,524353,590051,459012,524377,524313,589971,459028,524409,524345,590035,459020,524393,524329,590003,524297,524425,524361,590067,459010,524373,524309,524573,459026,524405,524341,590027,459018,524389,524325,589995,524293,524421,524357,590059,459014,524381,524317,589979,459030,524413,524349,590043,459022,524397,524333,590011,524301,524429,524365,590075,459009,524371,524307,524571,459025,524403,524339,590023,459017,524387,524323,589991,524291,524419,524355,590055,459013,524379,524315,589975,459029,524411,524347,590039,459021,524395,524331,590007,524299,524427,524363,590071,459011,524375,524311,524575,459027,524407,524343,590031,459019,524391,524327,589999,524295,524423,524359,590063,459015,524383,524319,589983,459031,524415,524351,590047,459023,524399,524335,590015,524303,524431,524367,590079]),9],i=[new Int32Array([327680,327696,327688,327704,327684,327700,327692,327708,327682,327698,327690,327706,327686,327702,327694,0,327681,327697,327689,327705,327685,327701,327693,327709,327683,327699,327691,327707,327687,327703,327695,0]),5]
function o(e,t){this.str=e,this.dict=e.dict
var r=e.getByte(),n=e.getByte()
if(-1===r||-1===n)throw new a.FormatError("Invalid header in flate stream: ".concat(r,", ").concat(n))
if(8!=(15&r))throw new a.FormatError("Unknown compression method in flate stream: ".concat(r,", ").concat(n))
if(((r<<8)+n)%31!=0)throw new a.FormatError("Bad FCHECK in flate stream: ".concat(r,", ").concat(n))
if(32&n)throw new a.FormatError("FDICT bit set in flate stream: ".concat(r,", ").concat(n))
this.codeSize=0,this.codeBuf=0,u.call(this,t)}return o.prototype=Object.create(u.prototype),o.prototype.getBits=function(e){for(var t,r=this.str,n=this.codeSize,i=this.codeBuf;n<e;){if(-1===(t=r.getByte()))throw new a.FormatError("Bad encoding in flate stream")
i|=t<<n,n+=8}return t=i&(1<<e)-1,this.codeBuf=i>>e,this.codeSize=n-=e,t},o.prototype.getCode=function(e){for(var t,r=this.str,n=e[0],i=e[1],o=this.codeSize,s=this.codeBuf;o<i&&-1!==(t=r.getByte());)s|=t<<o,o+=8
var c=n[s&(1<<i)-1],l=c>>16,u=65535&c
if(l<1||o<l)throw new a.FormatError("Bad encoding in flate stream")
return this.codeBuf=s>>l,this.codeSize=o-l,u},o.prototype.generateHuffmanTable=function(e){var t,r=e.length,a=0
for(t=0;t<r;++t)e[t]>a&&(a=e[t])
for(var n=1<<a,i=new Int32Array(n),o=1,s=0,c=2;o<=a;++o,s<<=1,c<<=1)for(var l=0;l<r;++l)if(e[l]===o){var u=0,h=s
for(t=0;t<o;++t)u=u<<1|1&h,h>>=1
for(t=u;t<n;t+=c)i[t]=o<<16|l;++s}return[i,a]},o.prototype.readBlock=function(){var o,s,c=this.str,l=this.getBits(3)
if(1&l&&(this.eof=!0),0!==(l>>=1)){var u,h
if(1===l)u=n,h=i
else{if(2!==l)throw new a.FormatError("Unknown block type in flate stream")
var f,d=this.getBits(5)+257,p=this.getBits(5)+1,g=this.getBits(4)+4,m=new Uint8Array(e.length)
for(f=0;f<g;++f)m[e[f]]=this.getBits(3)
var v=this.generateHuffmanTable(m)
s=0,f=0
for(var b,y,w,k=d+p,S=new Uint8Array(k);f<k;){var x=this.getCode(v)
if(16===x)b=2,y=3,w=s
else if(17===x)b=3,y=3,w=s=0
else{if(18!==x){S[f++]=s=x
continue}b=7,y=11,w=s=0}for(var C=this.getBits(b)+y;C-- >0;)S[f++]=w}u=this.generateHuffmanTable(S.subarray(0,d)),h=this.generateHuffmanTable(S.subarray(d,k))}for(var A=(o=this.buffer)?o.length:0,O=this.bufferLength;;){var T=this.getCode(u)
if(T<256)O+1>=A&&(A=(o=this.ensureBuffer(O+1)).length),o[O++]=T
else{if(256===T)return void(this.bufferLength=O)
var I=(T=t[T-=257])>>16
I>0&&(I=this.getBits(I)),s=(65535&T)+I,T=this.getCode(h),(I=(T=r[T])>>16)>0&&(I=this.getBits(I))
var E=(65535&T)+I
O+s>=A&&(A=(o=this.ensureBuffer(O+s)).length)
for(var P=0;P<s;++P,++O)o[O]=o[O-E]}}}else{var _
if(-1===(_=c.getByte()))throw new a.FormatError("Bad block header in flate stream")
var F=_
if(-1===(_=c.getByte()))throw new a.FormatError("Bad block header in flate stream")
if(F|=_<<8,-1===(_=c.getByte()))throw new a.FormatError("Bad block header in flate stream")
var R=_
if(-1===(_=c.getByte()))throw new a.FormatError("Bad block header in flate stream")
if((R|=_<<8)!==(65535&~F)&&(0!==F||0!==R))throw new a.FormatError("Bad uncompressed block length in flate stream")
this.codeBuf=0,this.codeSize=0
var B=this.bufferLength,M=B+F
if(o=this.ensureBuffer(M),this.bufferLength=M,0===F)-1===c.peekByte()&&(this.eof=!0)
else{var D=c.getBytes(F)
o.set(D,B),D.length<F&&(this.eof=!0)}}},o}()
t.FlateStream=f
var d=function(){function e(e,t,r){if(!(0,n.isDict)(r))return e
var i=this.predictor=r.get("Predictor")||1
if(i<=1)return e
if(2!==i&&(i<10||i>15))throw new a.FormatError("Unsupported predictor: ".concat(i))
this.readBlock=2===i?this.readBlockTiff:this.readBlockPng,this.str=e,this.dict=e.dict
var o=this.colors=r.get("Colors")||1,s=this.bits=r.get("BitsPerComponent")||8,c=this.columns=r.get("Columns")||1
return this.pixBytes=o*s+7>>3,this.rowBytes=c*o*s+7>>3,u.call(this,t),this}return e.prototype=Object.create(u.prototype),e.prototype.readBlockTiff=function(){var e=this.rowBytes,t=this.bufferLength,r=this.ensureBuffer(t+e),a=this.bits,n=this.colors,i=this.str.getBytes(e)
if(this.eof=!i.length,!this.eof){var o,s=0,c=0,l=0,u=0,h=t
if(1===a&&1===n)for(o=0;o<e;++o){var f=i[o]^s
f^=f>>1,f^=f>>2,s=(1&(f^=f>>4))<<7,r[h++]=f}else if(8===a){for(o=0;o<n;++o)r[h++]=i[o]
for(;o<e;++o)r[h]=r[h-n]+i[o],h++}else if(16===a){var d=2*n
for(o=0;o<d;++o)r[h++]=i[o]
for(;o<e;o+=2){var p=((255&i[o])<<8)+(255&i[o+1])+((255&r[h-d])<<8)+(255&r[h-d+1])
r[h++]=p>>8&255,r[h++]=255&p}}else{var g=new Uint8Array(n+1),m=(1<<a)-1,v=0,b=t,y=this.columns
for(o=0;o<y;++o)for(var w=0;w<n;++w)l<a&&(s=s<<8|255&i[v++],l+=8),g[w]=g[w]+(s>>l-a)&m,l-=a,c=c<<a|g[w],(u+=a)>=8&&(r[b++]=c>>u-8&255,u-=8)
u>0&&(r[b++]=(c<<8-u)+(s&(1<<8-u)-1))}this.bufferLength+=e}},e.prototype.readBlockPng=function(){var e=this.rowBytes,t=this.pixBytes,r=this.str.getByte(),n=this.str.getBytes(e)
if(this.eof=!n.length,!this.eof){var i=this.bufferLength,o=this.ensureBuffer(i+e),s=o.subarray(i-e,i)
0===s.length&&(s=new Uint8Array(e))
var c,l,u,h=i
switch(r){case 0:for(c=0;c<e;++c)o[h++]=n[c]
break
case 1:for(c=0;c<t;++c)o[h++]=n[c]
for(;c<e;++c)o[h]=o[h-t]+n[c]&255,h++
break
case 2:for(c=0;c<e;++c)o[h++]=s[c]+n[c]&255
break
case 3:for(c=0;c<t;++c)o[h++]=(s[c]>>1)+n[c]
for(;c<e;++c)o[h]=(s[c]+o[h-t]>>1)+n[c]&255,h++
break
case 4:for(c=0;c<t;++c)l=s[c],u=n[c],o[h++]=l+u
for(;c<e;++c){l=s[c]
var f=s[c-t],d=o[h-t],p=d+l-f,g=p-d
g<0&&(g=-g)
var m=p-l
m<0&&(m=-m)
var v=p-f
v<0&&(v=-v),u=n[c],o[h++]=g<=m&&g<=v?d+u:m<=v?l+u:f+u}break
default:throw new a.FormatError("Unsupported predictor: ".concat(r))}this.bufferLength+=e}},e}()
t.PredictorStream=d
var p=function(){function e(e,t,r){this.str=e,this.dict=e.dict,this.decrypt=r,this.nextChunk=null,this.initialized=!1,u.call(this,t)}return e.prototype=Object.create(u.prototype),e.prototype.readBlock=function(){var e
if(this.initialized?e=this.nextChunk:(e=this.str.getBytes(512),this.initialized=!0),e&&0!==e.length){this.nextChunk=this.str.getBytes(512)
var t=this.nextChunk&&this.nextChunk.length>0
e=(0,this.decrypt)(e,!t)
var r,a=this.bufferLength,n=e.length,i=this.ensureBuffer(a+n)
for(r=0;r<n;r++)i[a++]=e[r]
this.bufferLength=a}else this.eof=!0},e}()
t.DecryptStream=p
var g=function(){function e(e,t){this.str=e,this.dict=e.dict,this.input=new Uint8Array(5),t&&(t*=.8),u.call(this,t)}return e.prototype=Object.create(u.prototype),e.prototype.readBlock=function(){for(var e=this.str,t=e.getByte();(0,i.isWhiteSpace)(t);)t=e.getByte()
if(-1!==t&&126!==t){var r,a,n=this.bufferLength
if(122===t){for(r=this.ensureBuffer(n+4),a=0;a<4;++a)r[n+a]=0
this.bufferLength+=4}else{var o=this.input
for(o[0]=t,a=1;a<5;++a){for(t=e.getByte();(0,i.isWhiteSpace)(t);)t=e.getByte()
if(o[a]=t,-1===t||126===t)break}if(r=this.ensureBuffer(n+a-1),this.bufferLength+=a-1,a<5){for(;a<5;++a)o[a]=117
this.eof=!0}var s=0
for(a=0;a<5;++a)s=85*s+(o[a]-33)
for(a=3;a>=0;--a)r[n+a]=255&s,s>>=8}}else this.eof=!0},e}()
t.Ascii85Stream=g
var m=function(){function e(e,t){this.str=e,this.dict=e.dict,this.firstDigit=-1,t&&(t*=.5),u.call(this,t)}return e.prototype=Object.create(u.prototype),e.prototype.readBlock=function(){var e=this.str.getBytes(8e3)
if(e.length){for(var t=e.length+1>>1,r=this.ensureBuffer(this.bufferLength+t),a=this.bufferLength,n=this.firstDigit,i=0,o=e.length;i<o;i++){var s,c=e[i]
if(c>=48&&c<=57)s=15&c
else{if(!(c>=65&&c<=70||c>=97&&c<=102)){if(62===c){this.eof=!0
break}continue}s=9+(15&c)}n<0?n=s:(r[a++]=n<<4|s,n=-1)}n>=0&&this.eof&&(r[a++]=n<<4,n=-1),this.firstDigit=n,this.bufferLength=a}else this.eof=!0},e}()
t.AsciiHexStream=m
var v=function(){function e(e,t){this.str=e,this.dict=e.dict,u.call(this,t)}return e.prototype=Object.create(u.prototype),e.prototype.readBlock=function(){var e=this.str.getBytes(2)
if(!e||e.length<2||128===e[0])this.eof=!0
else{var t,r=this.bufferLength,a=e[0]
if(a<128){if((t=this.ensureBuffer(r+a+1))[r++]=e[1],a>0){var n=this.str.getBytes(a)
t.set(n,r),r+=a}}else{a=257-a
var i=e[1]
t=this.ensureBuffer(r+a+1)
for(var o=0;o<a;o++)t[r++]=i}this.bufferLength=r}},e}()
t.RunLengthStream=v
var b=function(){function e(e,t,r){this.str=e,this.dict=e.dict,this.cachedData=0,this.bitsCached=0
for(var a=4096,n={earlyChange:r,codeLength:9,nextCode:258,dictionaryValues:new Uint8Array(a),dictionaryLengths:new Uint16Array(a),dictionaryPrevCodes:new Uint16Array(a),currentSequence:new Uint8Array(a),currentSequenceLength:0},i=0;i<256;++i)n.dictionaryValues[i]=i,n.dictionaryLengths[i]=1
this.lzwState=n,u.call(this,t)}return e.prototype=Object.create(u.prototype),e.prototype.readBits=function(e){for(var t=this.bitsCached,r=this.cachedData;t<e;){var a=this.str.getByte()
if(-1===a)return this.eof=!0,null
r=r<<8|a,t+=8}return this.bitsCached=t-=e,this.cachedData=r,this.lastCode=null,r>>>t&(1<<e)-1},e.prototype.readBlock=function(){var e,t,r,a=1024,n=this.lzwState
if(n){var i=n.earlyChange,o=n.nextCode,s=n.dictionaryValues,c=n.dictionaryLengths,l=n.dictionaryPrevCodes,u=n.codeLength,h=n.prevCode,f=n.currentSequence,d=n.currentSequenceLength,p=0,g=this.bufferLength,m=this.ensureBuffer(this.bufferLength+a)
for(e=0;e<512;e++){var v=this.readBits(u),b=d>0
if(v<256)f[0]=v,d=1
else{if(!(v>=258)){if(256===v){u=9,o=258,d=0
continue}this.eof=!0,delete this.lzwState
break}if(v<o)for(t=(d=c[v])-1,r=v;t>=0;t--)f[t]=s[r],r=l[r]
else f[d++]=f[0]}if(b&&(l[o]=h,c[o]=c[h]+1,s[o]=f[0],u=++o+i&o+i-1?u:0|Math.min(Math.log(o+i)/.6931471805599453+1,12)),h=v,a<(p+=d)){do{a+=512}while(a<p)
m=this.ensureBuffer(this.bufferLength+a)}for(t=0;t<d;t++)m[g++]=f[t]}n.nextCode=o,n.codeLength=u,n.prevCode=h,n.currentSequenceLength=d,this.bufferLength=g}},e}()
t.LZWStream=b
var y=function(){function e(){c.call(this,new Uint8Array(0))}return e.prototype=c.prototype,e}()
t.NullStream=y},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.CCITTFaxStream=void 0
var a=r(202),n=r(211),i=r(209),o=function(){function e(e,t,r){this.str=e,this.dict=e.dict,(0,a.isDict)(r)||(r=a.Dict.empty)
var o={next:function(){return e.getByte()}}
this.ccittFaxDecoder=new n.CCITTFaxDecoder(o,{K:r.get("K"),EndOfLine:r.get("EndOfLine"),EncodedByteAlign:r.get("EncodedByteAlign"),Columns:r.get("Columns"),Rows:r.get("Rows"),EndOfBlock:r.get("EndOfBlock"),BlackIs1:r.get("BlackIs1")}),i.DecodeStream.call(this,t)}return e.prototype=Object.create(i.DecodeStream.prototype),e.prototype.readBlock=function(){for(;!this.eof;){var e=this.ccittFaxDecoder.readNextChar()
if(-1===e)return void(this.eof=!0)
this.ensureBuffer(this.bufferLength+1),this.buffer[this.bufferLength++]=e}},e}()
t.CCITTFaxStream=o},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.CCITTFaxDecoder=void 0
var a=r(5),n=function(){var e=-1,t=[[-1,-1],[-1,-1],[7,8],[7,7],[6,6],[6,6],[6,5],[6,5],[4,0],[4,0],[4,0],[4,0],[4,0],[4,0],[4,0],[4,0],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,3],[3,3],[3,3],[3,3],[3,3],[3,3],[3,3],[3,3],[3,3],[3,3],[3,3],[3,3],[3,3],[3,3],[3,3],[3,3],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2]],r=[[-1,-1],[12,-2],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[11,1792],[11,1792],[12,1984],[12,2048],[12,2112],[12,2176],[12,2240],[12,2304],[11,1856],[11,1856],[11,1920],[11,1920],[12,2368],[12,2432],[12,2496],[12,2560]],n=[[-1,-1],[-1,-1],[-1,-1],[-1,-1],[8,29],[8,29],[8,30],[8,30],[8,45],[8,45],[8,46],[8,46],[7,22],[7,22],[7,22],[7,22],[7,23],[7,23],[7,23],[7,23],[8,47],[8,47],[8,48],[8,48],[6,13],[6,13],[6,13],[6,13],[6,13],[6,13],[6,13],[6,13],[7,20],[7,20],[7,20],[7,20],[8,33],[8,33],[8,34],[8,34],[8,35],[8,35],[8,36],[8,36],[8,37],[8,37],[8,38],[8,38],[7,19],[7,19],[7,19],[7,19],[8,31],[8,31],[8,32],[8,32],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,12],[6,12],[6,12],[6,12],[6,12],[6,12],[6,12],[6,12],[8,53],[8,53],[8,54],[8,54],[7,26],[7,26],[7,26],[7,26],[8,39],[8,39],[8,40],[8,40],[8,41],[8,41],[8,42],[8,42],[8,43],[8,43],[8,44],[8,44],[7,21],[7,21],[7,21],[7,21],[7,28],[7,28],[7,28],[7,28],[8,61],[8,61],[8,62],[8,62],[8,63],[8,63],[8,0],[8,0],[8,320],[8,320],[8,384],[8,384],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[7,27],[7,27],[7,27],[7,27],[8,59],[8,59],[8,60],[8,60],[9,1472],[9,1536],[9,1600],[9,1728],[7,18],[7,18],[7,18],[7,18],[7,24],[7,24],[7,24],[7,24],[8,49],[8,49],[8,50],[8,50],[8,51],[8,51],[8,52],[8,52],[7,25],[7,25],[7,25],[7,25],[8,55],[8,55],[8,56],[8,56],[8,57],[8,57],[8,58],[8,58],[6,192],[6,192],[6,192],[6,192],[6,192],[6,192],[6,192],[6,192],[6,1664],[6,1664],[6,1664],[6,1664],[6,1664],[6,1664],[6,1664],[6,1664],[8,448],[8,448],[8,512],[8,512],[9,704],[9,768],[8,640],[8,640],[8,576],[8,576],[9,832],[9,896],[9,960],[9,1024],[9,1088],[9,1152],[9,1216],[9,1280],[9,1344],[9,1408],[7,256],[7,256],[7,256],[7,256],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[6,16],[6,16],[6,16],[6,16],[6,16],[6,16],[6,16],[6,16],[6,17],[6,17],[6,17],[6,17],[6,17],[6,17],[6,17],[6,17],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[6,14],[6,14],[6,14],[6,14],[6,14],[6,14],[6,14],[6,14],[6,15],[6,15],[6,15],[6,15],[6,15],[6,15],[6,15],[6,15],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7]],i=[[-1,-1],[-1,-1],[12,-2],[12,-2],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[11,1792],[11,1792],[11,1792],[11,1792],[12,1984],[12,1984],[12,2048],[12,2048],[12,2112],[12,2112],[12,2176],[12,2176],[12,2240],[12,2240],[12,2304],[12,2304],[11,1856],[11,1856],[11,1856],[11,1856],[11,1920],[11,1920],[11,1920],[11,1920],[12,2368],[12,2368],[12,2432],[12,2432],[12,2496],[12,2496],[12,2560],[12,2560],[10,18],[10,18],[10,18],[10,18],[10,18],[10,18],[10,18],[10,18],[12,52],[12,52],[13,640],[13,704],[13,768],[13,832],[12,55],[12,55],[12,56],[12,56],[13,1280],[13,1344],[13,1408],[13,1472],[12,59],[12,59],[12,60],[12,60],[13,1536],[13,1600],[11,24],[11,24],[11,24],[11,24],[11,25],[11,25],[11,25],[11,25],[13,1664],[13,1728],[12,320],[12,320],[12,384],[12,384],[12,448],[12,448],[13,512],[13,576],[12,53],[12,53],[12,54],[12,54],[13,896],[13,960],[13,1024],[13,1088],[13,1152],[13,1216],[10,64],[10,64],[10,64],[10,64],[10,64],[10,64],[10,64],[10,64]],o=[[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[11,23],[11,23],[12,50],[12,51],[12,44],[12,45],[12,46],[12,47],[12,57],[12,58],[12,61],[12,256],[10,16],[10,16],[10,16],[10,16],[10,17],[10,17],[10,17],[10,17],[12,48],[12,49],[12,62],[12,63],[12,30],[12,31],[12,32],[12,33],[12,40],[12,41],[11,22],[11,22],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[9,15],[9,15],[9,15],[9,15],[9,15],[9,15],[9,15],[9,15],[12,128],[12,192],[12,26],[12,27],[12,28],[12,29],[11,19],[11,19],[11,20],[11,20],[12,34],[12,35],[12,36],[12,37],[12,38],[12,39],[11,21],[11,21],[12,42],[12,43],[10,0],[10,0],[10,0],[10,0],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12]],s=[[-1,-1],[-1,-1],[-1,-1],[-1,-1],[6,9],[6,8],[5,7],[5,7],[4,6],[4,6],[4,6],[4,6],[4,5],[4,5],[4,5],[4,5],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2]]
function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if(!e||"function"!=typeof e.next)throw new Error('CCITTFaxDecoder - invalid "source" parameter.')
this.source=e,this.eof=!1,this.encoding=t.K||0,this.eoline=t.EndOfLine||!1,this.byteAlign=t.EncodedByteAlign||!1,this.columns=t.Columns||1728,this.rows=t.Rows||0
var r,a=t.EndOfBlock
for(null==a&&(a=!0),this.eoblock=a,this.black=t.BlackIs1||!1,this.codingLine=new Uint32Array(this.columns+1),this.refLine=new Uint32Array(this.columns+2),this.codingLine[0]=this.columns,this.codingPos=0,this.row=0,this.nextLine2D=this.encoding<0,this.inputBits=0,this.inputBuf=0,this.outputBits=0,this.rowsDone=!1;0===(r=this._lookBits(12));)this._eatBits(1)
1===r&&this._eatBits(12),this.encoding>0&&(this.nextLine2D=!this._lookBits(1),this._eatBits(1))}return c.prototype={readNextChar:function(){if(this.eof)return-1
var t,r,n,i,o,s=this.refLine,c=this.codingLine,l=this.columns
if(0===this.outputBits){if(this.rowsDone&&(this.eof=!0),this.eof)return-1
var u,h,f
if(this.err=!1,this.nextLine2D){for(i=0;c[i]<l;++i)s[i]=c[i]
for(s[i++]=l,s[i]=l,c[0]=0,this.codingPos=0,t=0,r=0;c[this.codingPos]<l;)switch(u=this._getTwoDimCode()){case 0:this._addPixels(s[t+1],r),s[t+1]<l&&(t+=2)
break
case 1:if(u=h=0,r){do{u+=f=this._getBlackCode()}while(f>=64)
do{h+=f=this._getWhiteCode()}while(f>=64)}else{do{u+=f=this._getWhiteCode()}while(f>=64)
do{h+=f=this._getBlackCode()}while(f>=64)}for(this._addPixels(c[this.codingPos]+u,r),c[this.codingPos]<l&&this._addPixels(c[this.codingPos]+h,1^r);s[t]<=c[this.codingPos]&&s[t]<l;)t+=2
break
case 7:if(this._addPixels(s[t]+3,r),r^=1,c[this.codingPos]<l)for(++t;s[t]<=c[this.codingPos]&&s[t]<l;)t+=2
break
case 5:if(this._addPixels(s[t]+2,r),r^=1,c[this.codingPos]<l)for(++t;s[t]<=c[this.codingPos]&&s[t]<l;)t+=2
break
case 3:if(this._addPixels(s[t]+1,r),r^=1,c[this.codingPos]<l)for(++t;s[t]<=c[this.codingPos]&&s[t]<l;)t+=2
break
case 2:if(this._addPixels(s[t],r),r^=1,c[this.codingPos]<l)for(++t;s[t]<=c[this.codingPos]&&s[t]<l;)t+=2
break
case 8:if(this._addPixelsNeg(s[t]-3,r),r^=1,c[this.codingPos]<l)for(t>0?--t:++t;s[t]<=c[this.codingPos]&&s[t]<l;)t+=2
break
case 6:if(this._addPixelsNeg(s[t]-2,r),r^=1,c[this.codingPos]<l)for(t>0?--t:++t;s[t]<=c[this.codingPos]&&s[t]<l;)t+=2
break
case 4:if(this._addPixelsNeg(s[t]-1,r),r^=1,c[this.codingPos]<l)for(t>0?--t:++t;s[t]<=c[this.codingPos]&&s[t]<l;)t+=2
break
case e:this._addPixels(l,0),this.eof=!0
break
default:(0,a.info)("bad 2d code"),this._addPixels(l,0),this.err=!0}}else for(c[0]=0,this.codingPos=0,r=0;c[this.codingPos]<l;){if(u=0,r)do{u+=f=this._getBlackCode()}while(f>=64)
else do{u+=f=this._getWhiteCode()}while(f>=64)
this._addPixels(c[this.codingPos]+u,r),r^=1}var d=!1
if(this.byteAlign&&(this.inputBits&=-8),this.eoblock||this.row!==this.rows-1){if(u=this._lookBits(12),this.eoline)for(;u!==e&&1!==u;)this._eatBits(1),u=this._lookBits(12)
else for(;0===u;)this._eatBits(1),u=this._lookBits(12)
1===u?(this._eatBits(12),d=!0):u===e&&(this.eof=!0)}else this.rowsDone=!0
if(!this.eof&&this.encoding>0&&!this.rowsDone&&(this.nextLine2D=!this._lookBits(1),this._eatBits(1)),this.eoblock&&d&&this.byteAlign){if(1===(u=this._lookBits(12))){if(this._eatBits(12),this.encoding>0&&(this._lookBits(1),this._eatBits(1)),this.encoding>=0)for(i=0;i<4;++i)1!==(u=this._lookBits(12))&&(0,a.info)("bad rtc code: "+u),this._eatBits(12),this.encoding>0&&(this._lookBits(1),this._eatBits(1))
this.eof=!0}}else if(this.err&&this.eoline){for(;;){if((u=this._lookBits(13))===e)return this.eof=!0,-1
if(u>>1==1)break
this._eatBits(1)}this._eatBits(12),this.encoding>0&&(this._eatBits(1),this.nextLine2D=!(1&u))}c[0]>0?this.outputBits=c[this.codingPos=0]:this.outputBits=c[this.codingPos=1],this.row++}if(this.outputBits>=8)o=1&this.codingPos?0:255,this.outputBits-=8,0===this.outputBits&&c[this.codingPos]<l&&(this.codingPos++,this.outputBits=c[this.codingPos]-c[this.codingPos-1])
else{n=8,o=0
do{this.outputBits>n?(o<<=n,1&this.codingPos||(o|=255>>8-n),this.outputBits-=n,n=0):(o<<=this.outputBits,1&this.codingPos||(o|=255>>8-this.outputBits),n-=this.outputBits,this.outputBits=0,c[this.codingPos]<l?(this.codingPos++,this.outputBits=c[this.codingPos]-c[this.codingPos-1]):n>0&&(o<<=n,n=0))}while(n)}return this.black&&(o^=255),o},_addPixels:function(e,t){var r=this.codingLine,n=this.codingPos
e>r[n]&&(e>this.columns&&((0,a.info)("row is wrong length"),this.err=!0,e=this.columns),1&n^t&&++n,r[n]=e),this.codingPos=n},_addPixelsNeg:function(e,t){var r=this.codingLine,n=this.codingPos
if(e>r[n])e>this.columns&&((0,a.info)("row is wrong length"),this.err=!0,e=this.columns),1&n^t&&++n,r[n]=e
else if(e<r[n]){for(e<0&&((0,a.info)("invalid code"),this.err=!0,e=0);n>0&&e<r[n-1];)--n
r[n]=e}this.codingPos=n},_findTableCode:function(t,r,a,n){for(var i=n||0,o=t;o<=r;++o){var s=this._lookBits(o)
if(s===e)return[!0,1,!1]
if(o<r&&(s<<=r-o),!i||s>=i){var c=a[s-i]
if(c[0]===o)return this._eatBits(o),[!0,c[1],!0]}}return[!1,0,!1]},_getTwoDimCode:function(){var r,n=0
if(this.eoblock){if(n=this._lookBits(7),(r=t[n])&&r[0]>0)return this._eatBits(r[0]),r[1]}else{var i=this._findTableCode(1,7,t)
if(i[0]&&i[2])return i[1]}return(0,a.info)("Bad two dim code"),e},_getWhiteCode:function(){var t,i=0
if(this.eoblock){if((i=this._lookBits(12))===e)return 1
if((t=i>>5==0?r[i]:n[i>>3])[0]>0)return this._eatBits(t[0]),t[1]}else{var o=this._findTableCode(1,9,n)
if(o[0])return o[1]
if((o=this._findTableCode(11,12,r))[0])return o[1]}return(0,a.info)("bad white code"),this._eatBits(1),1},_getBlackCode:function(){var t,r
if(this.eoblock){if((t=this._lookBits(13))===e)return 1
if((r=t>>7==0?i[t]:t>>9==0&&t>>7!=0?o[(t>>1)-64]:s[t>>7])[0]>0)return this._eatBits(r[0]),r[1]}else{var n=this._findTableCode(2,6,s)
if(n[0])return n[1]
if((n=this._findTableCode(7,12,o,64))[0])return n[1]
if((n=this._findTableCode(10,13,i))[0])return n[1]}return(0,a.info)("bad black code"),this._eatBits(1),1},_lookBits:function(t){for(var r;this.inputBits<t;){if(-1===(r=this.source.next()))return 0===this.inputBits?e:this.inputBuf<<t-this.inputBits&65535>>16-t
this.inputBuf=this.inputBuf<<8|r,this.inputBits+=8}return this.inputBuf>>this.inputBits-t&65535>>16-t},_eatBits:function(e){(this.inputBits-=e)<0&&(this.inputBits=0)}},c}()
t.CCITTFaxDecoder=n},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.Jbig2Stream=void 0
var a=r(202),n=r(209),i=r(213),o=r(5),s=function(){function e(e,t,r,a){this.stream=e,this.maybeLength=t,this.dict=r,this.params=a,n.DecodeStream.call(this,t)}return e.prototype=Object.create(n.DecodeStream.prototype),Object.defineProperty(e.prototype,"bytes",{get:function(){return(0,o.shadow)(this,"bytes",this.stream.getBytes(this.maybeLength))},configurable:!0}),e.prototype.ensureBuffer=function(e){},e.prototype.readBlock=function(){if(!this.eof){var e=new i.Jbig2Image,t=[]
if((0,a.isDict)(this.params)){var r=this.params.get("JBIG2Globals")
if((0,a.isStream)(r)){var n=r.getBytes()
t.push({data:n,start:0,end:n.length})}}t.push({data:this.bytes,start:0,end:this.bytes.length})
for(var o=e.parseChunks(t),s=o.length,c=0;c<s;c++)o[c]^=255
this.buffer=o,this.bufferLength=s,this.eof=!0}},e}()
t.Jbig2Stream=s},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.Jbig2Image=void 0
var a=r(5),n=r(205),i=r(214),o=r(211)
function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,a=h(e)
if(t){var n=h(this).constructor
r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments)
return u(this,r)}}function u(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var f=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)})(r,e)
var t=l(r)
function r(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),t.call(this,"JBIG2 error: ".concat(e))}return r}(a.BaseException),d=function(){function e(){}function t(e,t,r){this.data=e,this.start=t,this.end=r}function r(e,t,r){var a=e.getContexts(t),n=1
function i(e){for(var t=0,i=0;i<e;i++){var o=r.readBit(a,n)
n=n<256?n<<1|o:511&(n<<1|o)|256,t=t<<1|o}return t>>>0}var o=i(1),s=i(1)?i(1)?i(1)?i(1)?i(1)?i(32)+4436:i(12)+340:i(8)+84:i(6)+20:i(4)+4:i(2)
return 0===o?s:s>0?-s:null}function s(e,t,r){for(var a=e.getContexts("IAID"),n=1,i=0;i<r;i++){n=n<<1|t.readBit(a,n)}return r<31?n&(1<<r)-1:2147483647&n}e.prototype={getContexts:function(e){return e in this?this[e]:this[e]=new Int8Array(65536)}},t.prototype={get decoder(){var e=new i.ArithmeticDecoder(this.data,this.start,this.end)
return(0,a.shadow)(this,"decoder",e)},get contextCache(){var t=new e
return(0,a.shadow)(this,"contextCache",t)}}
var c=["SymbolDictionary",null,null,null,"IntermediateTextRegion",null,"ImmediateTextRegion","ImmediateLosslessTextRegion",null,null,null,null,null,null,null,null,"PatternDictionary",null,null,null,"IntermediateHalftoneRegion",null,"ImmediateHalftoneRegion","ImmediateLosslessHalftoneRegion",null,null,null,null,null,null,null,null,null,null,null,null,"IntermediateGenericRegion",null,"ImmediateGenericRegion","ImmediateLosslessGenericRegion","IntermediateGenericRefinementRegion",null,"ImmediateGenericRefinementRegion","ImmediateLosslessGenericRefinementRegion",null,null,null,null,"PageInformation","EndOfPage","EndOfStripe","EndOfFile","Profiles","Tables",null,null,null,null,null,null,null,null,"Extension"],l=[[{x:-1,y:-2},{x:0,y:-2},{x:1,y:-2},{x:-2,y:-1},{x:-1,y:-1},{x:0,y:-1},{x:1,y:-1},{x:2,y:-1},{x:-4,y:0},{x:-3,y:0},{x:-2,y:0},{x:-1,y:0}],[{x:-1,y:-2},{x:0,y:-2},{x:1,y:-2},{x:2,y:-2},{x:-2,y:-1},{x:-1,y:-1},{x:0,y:-1},{x:1,y:-1},{x:2,y:-1},{x:-3,y:0},{x:-2,y:0},{x:-1,y:0}],[{x:-1,y:-2},{x:0,y:-2},{x:1,y:-2},{x:-2,y:-1},{x:-1,y:-1},{x:0,y:-1},{x:1,y:-1},{x:-2,y:0},{x:-1,y:0}],[{x:-3,y:-1},{x:-2,y:-1},{x:-1,y:-1},{x:0,y:-1},{x:1,y:-1},{x:-4,y:0},{x:-3,y:0},{x:-2,y:0},{x:-1,y:0}]],u=[{coding:[{x:0,y:-1},{x:1,y:-1},{x:-1,y:0}],reference:[{x:0,y:-1},{x:1,y:-1},{x:-1,y:0},{x:0,y:0},{x:1,y:0},{x:-1,y:1},{x:0,y:1},{x:1,y:1}]},{coding:[{x:-1,y:-1},{x:0,y:-1},{x:1,y:-1},{x:-1,y:0}],reference:[{x:0,y:-1},{x:-1,y:0},{x:0,y:0},{x:1,y:0},{x:0,y:1},{x:1,y:1}]}],h=[39717,1941,229,405],d=[32,8]
function p(e,t,r,a,n,i,o,s){if(e)return F(new E(s.data,s.start,s.end),t,r,!1)
if(0===a&&!i&&!n&&4===o.length&&3===o[0].x&&-1===o[0].y&&-3===o[1].x&&-1===o[1].y&&2===o[2].x&&-2===o[2].y&&-2===o[3].x&&-2===o[3].y)return function(e,t,r){var a,n,i,o,s,c,l,u=r.decoder,h=r.contextCache.getContexts("GB"),f=[]
for(n=0;n<t;n++)for(s=f[n]=new Uint8Array(e),c=n<1?s:f[n-1],a=(l=n<2?s:f[n-2])[0]<<13|l[1]<<12|l[2]<<11|c[0]<<7|c[1]<<6|c[2]<<5|c[3]<<4,i=0;i<e;i++)s[i]=o=u.readBit(h,a),a=(31735&a)<<1|(i+3<e?l[i+3]<<11:0)|(i+4<e?c[i+4]<<4:0)|o
return f}(t,r,s)
var c=!!i,u=l[a].concat(o)
u.sort((function(e,t){return e.y-t.y||e.x-t.x}))
var f,d,p=u.length,g=new Int8Array(p),m=new Int8Array(p),v=[],b=0,y=0,w=0,k=0
for(d=0;d<p;d++)g[d]=u[d].x,m[d]=u[d].y,y=Math.min(y,u[d].x),w=Math.max(w,u[d].x),k=Math.min(k,u[d].y),d<p-1&&u[d].y===u[d+1].y&&u[d].x===u[d+1].x-1?b|=1<<p-1-d:v.push(d)
var S=v.length,x=new Int8Array(S),C=new Int8Array(S),A=new Uint16Array(S)
for(f=0;f<S;f++)d=v[f],x[f]=u[d].x,C[f]=u[d].y,A[f]=1<<p-1-d
for(var O,T,I,P,_,R=-y,B=-k,M=t-w,D=h[a],L=new Uint8Array(t),N=[],U=s.decoder,j=s.contextCache.getContexts("GB"),q=0,z=0,G=0;G<r;G++){if(n)if(q^=U.readBit(j,D)){N.push(L)
continue}for(L=new Uint8Array(L),N.push(L),O=0;O<t;O++)if(c&&i[G][O])L[O]=0
else{if(O>=R&&O<M&&G>=B)for(z=z<<1&b,d=0;d<S;d++)T=G+C[d],I=O+x[d],(P=N[T][I])&&(z|=P=A[d])
else for(z=0,_=p-1,d=0;d<p;d++,_--)(I=O+g[d])>=0&&I<t&&(T=G+m[d])>=0&&(P=N[T][I])&&(z|=P<<_)
var H=U.readBit(j,z)
L[O]=H}}return N}function g(e,t,r,a,n,i,o,s,c){var l=u[r].coding
0===r&&(l=l.concat([s[0]]))
var h,p=l.length,g=new Int32Array(p),m=new Int32Array(p)
for(h=0;h<p;h++)g[h]=l[h].x,m[h]=l[h].y
var v=u[r].reference
0===r&&(v=v.concat([s[1]]))
var b=v.length,y=new Int32Array(b),w=new Int32Array(b)
for(h=0;h<b;h++)y[h]=v[h].x,w[h]=v[h].y
for(var k=a[0].length,S=a.length,x=d[r],C=[],A=c.decoder,O=c.contextCache.getContexts("GR"),T=0,I=0;I<t;I++){if(o)if(T^=A.readBit(O,x))throw new f("prediction is not supported")
var E=new Uint8Array(e)
C.push(E)
for(var P=0;P<e;P++){var _,F,R=0
for(h=0;h<p;h++)_=I+m[h],F=P+g[h],_<0||F<0||F>=e?R<<=1:R=R<<1|C[_][F]
for(h=0;h<b;h++)_=I+w[h]-i,F=P+y[h]-n,_<0||_>=S||F<0||F>=k?R<<=1:R=R<<1|a[_][F]
var B=A.readBit(O,R)
E[P]=B}}return C}function m(e,t,a,n,i,o,c,l,u,h,d,p,m,v,b,y,w,k,S){if(e&&t)throw new f("refinement with Huffman is not supported")
var x,C,A=[]
for(x=0;x<n;x++){if(C=new Uint8Array(a),i)for(var O=0;O<a;O++)C[O]=i
A.push(C)}var T=w.decoder,I=w.contextCache,E=e?-v.tableDeltaT.decode(S):-r(I,"IADT",T),P=0
for(x=0;x<o;){E+=e?v.tableDeltaT.decode(S):r(I,"IADT",T)
for(var _=P+=e?v.tableFirstS.decode(S):r(I,"IAFS",T);;){var F=0
c>1&&(F=e?S.readBits(k):r(I,"IAIT",T))
var R=c*E+F,B=e?v.symbolIDTable.decode(S):s(I,T,u),M=t&&(e?S.readBit():r(I,"IARI",T)),D=l[B],L=D[0].length,N=D.length
if(M){var U=r(I,"IARDW",T),j=r(I,"IARDH",T)
D=g(L+=U,N+=j,b,D,(U>>1)+r(I,"IARDX",T),(j>>1)+r(I,"IARDY",T),!1,y,w)}var q,z,G,H=R-(1&p?0:N-1),W=_-(2&p?L-1:0)
if(h){for(q=0;q<N;q++)if(C=A[W+q]){G=D[q]
var X=Math.min(a-H,L)
switch(m){case 0:for(z=0;z<X;z++)C[H+z]|=G[z]
break
case 2:for(z=0;z<X;z++)C[H+z]^=G[z]
break
default:throw new f("operator ".concat(m," is not supported"))}}_+=N-1}else{for(z=0;z<N;z++)if(C=A[H+z])switch(G=D[z],m){case 0:for(q=0;q<L;q++)C[W+q]|=G[q]
break
case 2:for(q=0;q<L;q++)C[W+q]^=G[q]
break
default:throw new f("operator ".concat(m," is not supported"))}_+=L-1}x++
var V=e?v.tableDeltaS.decode(S):r(I,"IADS",T)
if(null===V)break
_+=V+d}}return A}function v(e,t){var r={}
r.number=(0,n.readUint32)(e,t)
var a=e[t+4],i=63&a
if(!c[i])throw new f("invalid segment type: "+i)
r.type=i,r.typeName=c[i],r.deferredNonRetain=!!(128&a)
var o=!!(64&a),s=e[t+5],l=s>>5&7,u=[31&s],h=t+6
if(7===s){l=536870911&(0,n.readUint32)(e,h-1),h+=3
var d=l+7>>3
for(u[0]=e[h++];--d>0;)u.push(e[h++])}else if(5===s||6===s)throw new f("invalid referred-to flags")
r.retainBits=u
var p=4
r.number<=256?p=1:r.number<=65536&&(p=2)
var g,m,v=[]
for(g=0;g<l;g++){var b=void 0
b=1===p?e[h]:2===p?(0,n.readUint16)(e,h):(0,n.readUint32)(e,h),v.push(b),h+=p}if(r.referredTo=v,o?(r.pageAssociation=(0,n.readUint32)(e,h),h+=4):r.pageAssociation=e[h++],r.length=(0,n.readUint32)(e,h),h+=4,4294967295===r.length){if(38!==i)throw new f("invalid unknown segment length")
var k=y(e,h),S=!!(1&e[h+w]),x=new Uint8Array(6)
for(S||(x[0]=255,x[1]=172),x[2]=k.height>>>24&255,x[3]=k.height>>16&255,x[4]=k.height>>8&255,x[5]=255&k.height,g=h,m=e.length;g<m;g++){for(var C=0;C<6&&x[C]===e[g+C];)C++
if(6===C){r.length=g+6
break}}if(4294967295===r.length)throw new f("segment end was not found")}return r.headerEnd=h,r}function b(e,t,r,a){for(var n=[],i=r;i<a;){var o=v(t,i)
i=o.headerEnd
var s={header:o,data:t}
if(e.randomAccess||(s.start=i,i+=o.length,s.end=i),n.push(s),51===o.type)break}if(e.randomAccess)for(var c=0,l=n.length;c<l;c++)n[c].start=i,i+=n[c].header.length,n[c].end=i
return n}function y(e,t){return{width:(0,n.readUint32)(e,t),height:(0,n.readUint32)(e,t+4),x:(0,n.readUint32)(e,t+8),y:(0,n.readUint32)(e,t+12),combinationOperator:7&e[t+16]}}var w=17
function k(e,t){var r,a,i,o,s=e.header,c=e.data,l=e.start,u=e.end
switch(s.type){case 0:var h={},d=(0,n.readUint16)(c,l)
if(h.huffman=!!(1&d),h.refinement=!!(2&d),h.huffmanDHSelector=d>>2&3,h.huffmanDWSelector=d>>4&3,h.bitmapSizeSelector=d>>6&1,h.aggregationInstancesSelector=d>>7&1,h.bitmapCodingContextUsed=!!(256&d),h.bitmapCodingContextRetained=!!(512&d),h.template=d>>10&3,h.refinementTemplate=d>>12&1,l+=2,!h.huffman){for(o=0===h.template?4:1,a=[],i=0;i<o;i++)a.push({x:(0,n.readInt8)(c,l),y:(0,n.readInt8)(c,l+1)}),l+=2
h.at=a}if(h.refinement&&!h.refinementTemplate){for(a=[],i=0;i<2;i++)a.push({x:(0,n.readInt8)(c,l),y:(0,n.readInt8)(c,l+1)}),l+=2
h.refinementAt=a}h.numberOfExportedSymbols=(0,n.readUint32)(c,l),l+=4,h.numberOfNewSymbols=(0,n.readUint32)(c,l),l+=4,r=[h,s.number,s.referredTo,c,l,u]
break
case 6:case 7:var p={}
p.info=y(c,l),l+=w
var g=(0,n.readUint16)(c,l)
if(l+=2,p.huffman=!!(1&g),p.refinement=!!(2&g),p.logStripSize=g>>2&3,p.stripSize=1<<p.logStripSize,p.referenceCorner=g>>4&3,p.transposed=!!(64&g),p.combinationOperator=g>>7&3,p.defaultPixelValue=g>>9&1,p.dsOffset=g<<17>>27,p.refinementTemplate=g>>15&1,p.huffman){var m=(0,n.readUint16)(c,l)
l+=2,p.huffmanFS=3&m,p.huffmanDS=m>>2&3,p.huffmanDT=m>>4&3,p.huffmanRefinementDW=m>>6&3,p.huffmanRefinementDH=m>>8&3,p.huffmanRefinementDX=m>>10&3,p.huffmanRefinementDY=m>>12&3,p.huffmanRefinementSizeSelector=!!(16384&m)}if(p.refinement&&!p.refinementTemplate){for(a=[],i=0;i<2;i++)a.push({x:(0,n.readInt8)(c,l),y:(0,n.readInt8)(c,l+1)}),l+=2
p.refinementAt=a}p.numberOfSymbolInstances=(0,n.readUint32)(c,l),l+=4,r=[p,s.referredTo,c,l,u]
break
case 16:var v={},b=c[l++]
v.mmr=!!(1&b),v.template=b>>1&3,v.patternWidth=c[l++],v.patternHeight=c[l++],v.maxPatternIndex=(0,n.readUint32)(c,l),l+=4,r=[v,s.number,c,l,u]
break
case 22:case 23:var k={}
k.info=y(c,l),l+=w
var S=c[l++]
k.mmr=!!(1&S),k.template=S>>1&3,k.enableSkip=!!(8&S),k.combinationOperator=S>>4&7,k.defaultPixelValue=S>>7&1,k.gridWidth=(0,n.readUint32)(c,l),l+=4,k.gridHeight=(0,n.readUint32)(c,l),l+=4,k.gridOffsetX=4294967295&(0,n.readUint32)(c,l),l+=4,k.gridOffsetY=4294967295&(0,n.readUint32)(c,l),l+=4,k.gridVectorX=(0,n.readUint16)(c,l),l+=2,k.gridVectorY=(0,n.readUint16)(c,l),l+=2,r=[k,s.referredTo,c,l,u]
break
case 38:case 39:var x={}
x.info=y(c,l),l+=w
var C=c[l++]
if(x.mmr=!!(1&C),x.template=C>>1&3,x.prediction=!!(8&C),!x.mmr){for(o=0===x.template?4:1,a=[],i=0;i<o;i++)a.push({x:(0,n.readInt8)(c,l),y:(0,n.readInt8)(c,l+1)}),l+=2
x.at=a}r=[x,c,l,u]
break
case 48:var A={width:(0,n.readUint32)(c,l),height:(0,n.readUint32)(c,l+4),resolutionX:(0,n.readUint32)(c,l+8),resolutionY:(0,n.readUint32)(c,l+12)}
4294967295===A.height&&delete A.height
var O=c[l+16];(0,n.readUint16)(c,l+17),A.lossless=!!(1&O),A.refinement=!!(2&O),A.defaultPixelValue=O>>2&1,A.combinationOperator=O>>3&3,A.requiresBuffer=!!(32&O),A.combinationOperatorOverride=!!(64&O),r=[A]
break
case 49:case 50:case 51:break
case 53:r=[s.number,c,l,u]
break
case 62:break
default:throw new f("segment type ".concat(s.typeName,"(").concat(s.type,")")+" is not implemented")}var T="on"+s.typeName
T in t&&t[T].apply(t,r)}function S(e,t){for(var r=0,a=e.length;r<a;r++)k(e[r],t)}function x(){}function C(e){2===e.length?(this.isOOB=!0,this.rangeLow=0,this.prefixLength=e[0],this.rangeLength=0,this.prefixCode=e[1],this.isLowerRange=!1):(this.isOOB=!1,this.rangeLow=e[0],this.prefixLength=e[1],this.rangeLength=e[2],this.prefixCode=e[3],this.isLowerRange="lower"===e[4])}function A(e){this.children=[],e?(this.isLeaf=!0,this.rangeLength=e.rangeLength,this.rangeLow=e.rangeLow,this.isLowerRange=e.isLowerRange,this.isOOB=e.isOOB):this.isLeaf=!1}function O(e,t){t||this.assignPrefixCodes(e),this.rootNode=new A(null)
for(var r=0,a=e.length;r<a;r++){var n=e[r]
n.prefixLength>0&&this.rootNode.buildTree(n,n.prefixLength-1)}}x.prototype={onPageInformation:function(e){this.currentPageInfo=e
var t=e.width+7>>3,r=new Uint8ClampedArray(t*e.height)
if(e.defaultPixelValue)for(var a=0,n=r.length;a<n;a++)r[a]=255
this.buffer=r},drawBitmap:function(e,t){var r,a,n,i,o=this.currentPageInfo,s=e.width,c=e.height,l=o.width+7>>3,u=o.combinationOperatorOverride?e.combinationOperator:o.combinationOperator,h=this.buffer,d=128>>(7&e.x),p=e.y*l+(e.x>>3)
switch(u){case 0:for(r=0;r<c;r++){for(n=d,i=p,a=0;a<s;a++)t[r][a]&&(h[i]|=n),(n>>=1)||(n=128,i++)
p+=l}break
case 2:for(r=0;r<c;r++){for(n=d,i=p,a=0;a<s;a++)t[r][a]&&(h[i]^=n),(n>>=1)||(n=128,i++)
p+=l}break
default:throw new f("operator ".concat(u," is not supported"))}},onImmediateGenericRegion:function(e,r,a,n){var i=e.info,o=new t(r,a,n),s=p(e.mmr,i.width,i.height,e.template,e.prediction,null,e.at,o)
this.drawBitmap(i,s)},onImmediateLosslessGenericRegion:function(){this.onImmediateGenericRegion.apply(this,arguments)},onSymbolDictionary:function(e,a,i,o,c,l){var u,h
e.huffman&&(u=function(e,t,r){var a,n,i,o,s=0
switch(e.huffmanDHSelector){case 0:case 1:a=I(e.huffmanDHSelector+4)
break
case 3:a=P(s,t,r),s++
break
default:throw new f("invalid Huffman DH selector")}switch(e.huffmanDWSelector){case 0:case 1:n=I(e.huffmanDWSelector+2)
break
case 3:n=P(s,t,r),s++
break
default:throw new f("invalid Huffman DW selector")}e.bitmapSizeSelector?(i=P(s,t,r),s++):i=I(1)
o=e.aggregationInstancesSelector?P(s,t,r):I(1)
return{tableDeltaHeight:a,tableDeltaWidth:n,tableBitmapSize:i,tableAggregateInstances:o}}(e,i,this.customTables),h=new E(o,c,l))
var d=this.symbols
d||(this.symbols=d={})
for(var v=[],b=0,y=i.length;b<y;b++){var w=d[i[b]]
w&&(v=v.concat(w))}var k=new t(o,c,l)
d[a]=function(e,t,a,i,o,c,l,u,h,d,v,b){if(e&&t)throw new f("symbol refinement with Huffman is not supported")
var y,w,k=[],S=0,x=(0,n.log2)(a.length+i),C=v.decoder,A=v.contextCache
for(e&&(y=I(1),w=[],x=Math.max(x,1));k.length<i;){S+=e?c.tableDeltaHeight.decode(b):r(A,"IADH",C)
for(var O=0,T=0,E=e?w.length:0;;){var P,R=e?c.tableDeltaWidth.decode(b):r(A,"IADW",C)
if(null===R)break
if(T+=O+=R,t){var B=r(A,"IAAI",C)
if(B>1)P=m(e,t,O,S,0,B,1,a.concat(k),x,0,0,1,0,c,h,d,v,0,b)
else{var M=s(A,C,x),D=r(A,"IARDX",C),L=r(A,"IARDY",C)
P=g(O,S,h,M<a.length?a[M]:k[M-a.length],D,L,!1,d,v)}k.push(P)}else e?w.push(O):(P=p(!1,O,S,l,!1,null,u,v),k.push(P))}if(e&&!t){var N=c.tableBitmapSize.decode(b)
b.byteAlign()
var U=void 0
if(0===N)U=_(b,T,S)
else{var j=b.end,q=b.position+N
b.end=q,U=F(b,T,S,!1),b.end=j,b.position=q}var z=w.length
if(E===z-1)k.push(U)
else{var G=void 0,H=void 0,W=0,X=void 0,V=void 0
for(G=E;G<z;G++){for(X=W+w[G],V=[],H=0;H<S;H++)V.push(U[H].subarray(W,X))
k.push(V),W=X}}}}for(var Y=[],K=[],J=!1,Z=a.length+i;K.length<Z;){for(var Q=e?y.decode(b):r(A,"IAEX",C);Q--;)K.push(J)
J=!J}for(var $=0,ee=a.length;$<ee;$++)K[$]&&Y.push(a[$])
for(var te=0;te<i;$++,te++)K[$]&&Y.push(k[te])
return Y}(e.huffman,e.refinement,v,e.numberOfNewSymbols,e.numberOfExportedSymbols,u,e.template,e.at,e.refinementTemplate,e.refinementAt,k,h)},onImmediateTextRegion:function(e,r,a,i,o){for(var s,c,l=e.info,u=this.symbols,h=[],d=0,p=r.length;d<p;d++){var g=u[r[d]]
g&&(h=h.concat(g))}var v=(0,n.log2)(h.length)
e.huffman&&(c=new E(a,i,o),s=function(e,t,r,a,n){for(var i=[],o=0;o<=34;o++){var s=n.readBits(4)
i.push(new C([o,s,0,0]))}var c=new O(i,!1)
i.length=0
for(var l=0;l<a;){var u=c.decode(n)
if(u>=32){var h=void 0,d=void 0,p=void 0
switch(u){case 32:if(0===l)throw new f("no previous value in symbol ID table")
d=n.readBits(2)+3,h=i[l-1].prefixLength
break
case 33:d=n.readBits(3)+3,h=0
break
case 34:d=n.readBits(7)+11,h=0
break
default:throw new f("invalid code length in symbol ID table")}for(p=0;p<d;p++)i.push(new C([l,h,0,0])),l++}else i.push(new C([l,u,0,0])),l++}n.byteAlign()
var g,m,v,b=new O(i,!1),y=0
switch(e.huffmanFS){case 0:case 1:g=I(e.huffmanFS+6)
break
case 3:g=P(y,t,r),y++
break
default:throw new f("invalid Huffman FS selector")}switch(e.huffmanDS){case 0:case 1:case 2:m=I(e.huffmanDS+8)
break
case 3:m=P(y,t,r),y++
break
default:throw new f("invalid Huffman DS selector")}switch(e.huffmanDT){case 0:case 1:case 2:v=I(e.huffmanDT+11)
break
case 3:v=P(y,t,r),y++
break
default:throw new f("invalid Huffman DT selector")}if(e.refinement)throw new f("refinement with Huffman is not supported")
return{symbolIDTable:b,tableFirstS:g,tableDeltaS:m,tableDeltaT:v}}(e,r,this.customTables,h.length,c))
var b=new t(a,i,o),y=m(e.huffman,e.refinement,l.width,l.height,e.defaultPixelValue,e.numberOfSymbolInstances,e.stripSize,h,v,e.transposed,e.dsOffset,e.referenceCorner,e.combinationOperator,s,e.refinementTemplate,e.refinementAt,b,e.logStripSize,c)
this.drawBitmap(l,y)},onImmediateLosslessTextRegion:function(){this.onImmediateTextRegion.apply(this,arguments)},onPatternDictionary:function(e,r,a,n,i){var o=this.patterns
o||(this.patterns=o={})
var s=new t(a,n,i)
o[r]=function(e,t,r,a,n,i){var o=[]
e||(o.push({x:-t,y:0}),0===n&&(o.push({x:-3,y:-1}),o.push({x:2,y:-2}),o.push({x:-2,y:-2})))
for(var s=p(e,(a+1)*t,r,n,!1,null,o,i),c=[],l=0;l<=a;l++){for(var u=[],h=t*l,f=h+t,d=0;d<r;d++)u.push(s[d].subarray(h,f))
c.push(u)}return c}(e.mmr,e.patternWidth,e.patternHeight,e.maxPatternIndex,e.template,s)},onImmediateHalftoneRegion:function(e,r,a,i,o){var s=this.patterns[r[0]],c=e.info,l=new t(a,i,o),u=function(e,t,r,a,i,o,s,c,l,u,h,d,g,m,v){if(s)throw new f("skip is not supported")
if(0!==c)throw new f("operator "+c+" is not supported in halftone region")
var b,y,w,k=[]
for(b=0;b<i;b++){if(w=new Uint8Array(a),o)for(y=0;y<a;y++)w[y]=o
k.push(w)}var S=t.length,x=t[0],C=x[0].length,A=x.length,O=(0,n.log2)(S),T=[]
e||(T.push({x:r<=1?3:2,y:-1}),0===r&&(T.push({x:-3,y:-1}),T.push({x:2,y:-2}),T.push({x:-2,y:-2})))
var I,P,_,R,B,M,D,L,N,U,j,q=[]
for(e&&(I=new E(v.data,v.start,v.end)),b=O-1;b>=0;b--)P=e?F(I,l,u,!0):p(!1,l,u,r,!1,null,T,v),q[b]=P
for(_=0;_<u;_++)for(R=0;R<l;R++){for(B=0,M=0,y=O-1;y>=0;y--)M|=(B=q[y][_][R]^B)<<y
if(D=t[M],N=d+_*g-R*m>>8,(L=h+_*m+R*g>>8)>=0&&L+C<=a&&N>=0&&N+A<=i)for(b=0;b<A;b++)for(j=k[N+b],U=D[b],y=0;y<C;y++)j[L+y]|=U[y]
else{var z=void 0,G=void 0
for(b=0;b<A;b++)if(!((G=N+b)<0||G>=i))for(j=k[G],U=D[b],y=0;y<C;y++)(z=L+y)>=0&&z<a&&(j[z]|=U[y])}}return k}(e.mmr,s,e.template,c.width,c.height,e.defaultPixelValue,e.enableSkip,e.combinationOperator,e.gridWidth,e.gridHeight,e.gridOffsetX,e.gridOffsetY,e.gridVectorX,e.gridVectorY,l)
this.drawBitmap(c,u)},onImmediateLosslessHalftoneRegion:function(){this.onImmediateHalftoneRegion.apply(this,arguments)},onTables:function(e,t,r,a){var i=this.customTables
i||(this.customTables=i={}),i[e]=function(e,t,r){var a,i,o=e[t],s=4294967295&(0,n.readUint32)(e,t+1),c=4294967295&(0,n.readUint32)(e,t+5),l=new E(e,t+9,r),u=1+(o>>1&7),h=1+(o>>4&7),f=[],d=s
do{a=l.readBits(u),i=l.readBits(h),f.push(new C([d,a,i,0])),d+=1<<i}while(d<c)
a=l.readBits(u),f.push(new C([s-1,a,32,0,"lower"])),a=l.readBits(u),f.push(new C([c,a,32,0])),1&o&&(a=l.readBits(u),f.push(new C([a,0])))
return new O(f,!1)}(t,r,a)}},A.prototype={buildTree:function(e,t){var r=e.prefixCode>>t&1
if(t<=0)this.children[r]=new A(e)
else{var a=this.children[r]
a||(this.children[r]=a=new A(null)),a.buildTree(e,t-1)}},decodeNode:function(e){if(this.isLeaf){if(this.isOOB)return null
var t=e.readBits(this.rangeLength)
return this.rangeLow+(this.isLowerRange?-t:t)}var r=this.children[e.readBit()]
if(!r)throw new f("invalid Huffman data")
return r.decodeNode(e)}},O.prototype={decode:function(e){return this.rootNode.decodeNode(e)},assignPrefixCodes:function(e){for(var t=e.length,r=0,a=0;a<t;a++)r=Math.max(r,e[a].prefixLength)
for(var n=new Uint32Array(r+1),i=0;i<t;i++)n[e[i].prefixLength]++
var o,s,c,l=1,u=0
for(n[0]=0;l<=r;){for(o=u=u+n[l-1]<<1,s=0;s<t;)(c=e[s]).prefixLength===l&&(c.prefixCode=o,o++),s++
l++}}}
var T={}
function I(e){var t,r=T[e]
if(r)return r
switch(e){case 1:t=[[0,1,4,0],[16,2,8,2],[272,3,16,6],[65808,3,32,7]]
break
case 2:t=[[0,1,0,0],[1,2,0,2],[2,3,0,6],[3,4,3,14],[11,5,6,30],[75,6,32,62],[6,63]]
break
case 3:t=[[-256,8,8,254],[0,1,0,0],[1,2,0,2],[2,3,0,6],[3,4,3,14],[11,5,6,30],[-257,8,32,255,"lower"],[75,7,32,126],[6,62]]
break
case 4:t=[[1,1,0,0],[2,2,0,2],[3,3,0,6],[4,4,3,14],[12,5,6,30],[76,5,32,31]]
break
case 5:t=[[-255,7,8,126],[1,1,0,0],[2,2,0,2],[3,3,0,6],[4,4,3,14],[12,5,6,30],[-256,7,32,127,"lower"],[76,6,32,62]]
break
case 6:t=[[-2048,5,10,28],[-1024,4,9,8],[-512,4,8,9],[-256,4,7,10],[-128,5,6,29],[-64,5,5,30],[-32,4,5,11],[0,2,7,0],[128,3,7,2],[256,3,8,3],[512,4,9,12],[1024,4,10,13],[-2049,6,32,62,"lower"],[2048,6,32,63]]
break
case 7:t=[[-1024,4,9,8],[-512,3,8,0],[-256,4,7,9],[-128,5,6,26],[-64,5,5,27],[-32,4,5,10],[0,4,5,11],[32,5,5,28],[64,5,6,29],[128,4,7,12],[256,3,8,1],[512,3,9,2],[1024,3,10,3],[-1025,5,32,30,"lower"],[2048,5,32,31]]
break
case 8:t=[[-15,8,3,252],[-7,9,1,508],[-5,8,1,253],[-3,9,0,509],[-2,7,0,124],[-1,4,0,10],[0,2,1,0],[2,5,0,26],[3,6,0,58],[4,3,4,4],[20,6,1,59],[22,4,4,11],[38,4,5,12],[70,5,6,27],[134,5,7,28],[262,6,7,60],[390,7,8,125],[646,6,10,61],[-16,9,32,510,"lower"],[1670,9,32,511],[2,1]]
break
case 9:t=[[-31,8,4,252],[-15,9,2,508],[-11,8,2,253],[-7,9,1,509],[-5,7,1,124],[-3,4,1,10],[-1,3,1,2],[1,3,1,3],[3,5,1,26],[5,6,1,58],[7,3,5,4],[39,6,2,59],[43,4,5,11],[75,4,6,12],[139,5,7,27],[267,5,8,28],[523,6,8,60],[779,7,9,125],[1291,6,11,61],[-32,9,32,510,"lower"],[3339,9,32,511],[2,0]]
break
case 10:t=[[-21,7,4,122],[-5,8,0,252],[-4,7,0,123],[-3,5,0,24],[-2,2,2,0],[2,5,0,25],[3,6,0,54],[4,7,0,124],[5,8,0,253],[6,2,6,1],[70,5,5,26],[102,6,5,55],[134,6,6,56],[198,6,7,57],[326,6,8,58],[582,6,9,59],[1094,6,10,60],[2118,7,11,125],[-22,8,32,254,"lower"],[4166,8,32,255],[2,2]]
break
case 11:t=[[1,1,0,0],[2,2,1,2],[4,4,0,12],[5,4,1,13],[7,5,1,28],[9,5,2,29],[13,6,2,60],[17,7,2,122],[21,7,3,123],[29,7,4,124],[45,7,5,125],[77,7,6,126],[141,7,32,127]]
break
case 12:t=[[1,1,0,0],[2,2,0,2],[3,3,1,6],[5,5,0,28],[6,5,1,29],[8,6,1,60],[10,7,0,122],[11,7,1,123],[13,7,2,124],[17,7,3,125],[25,7,4,126],[41,8,5,254],[73,8,32,255]]
break
case 13:t=[[1,1,0,0],[2,3,0,4],[3,4,0,12],[4,5,0,28],[5,4,1,13],[7,3,3,5],[15,6,1,58],[17,6,2,59],[21,6,3,60],[29,6,4,61],[45,6,5,62],[77,7,6,126],[141,7,32,127]]
break
case 14:t=[[-2,3,0,4],[-1,3,0,5],[0,1,0,0],[1,3,0,6],[2,3,0,7]]
break
case 15:t=[[-24,7,4,124],[-8,6,2,60],[-4,5,1,28],[-2,4,0,12],[-1,3,0,4],[0,1,0,0],[1,3,0,5],[2,4,0,13],[3,5,1,29],[5,6,2,61],[9,7,4,125],[-25,7,32,126,"lower"],[25,7,32,127]]
break
default:throw new f("standard table B.".concat(e," does not exist"))}for(var a=0,n=t.length;a<n;a++)t[a]=new C(t[a])
return r=new O(t,!0),T[e]=r,r}function E(e,t,r){this.data=e,this.start=t,this.end=r,this.position=t,this.shift=-1,this.currentByte=0}function P(e,t,r){for(var a=0,n=0,i=t.length;n<i;n++){var o=r[t[n]]
if(o){if(e===a)return o
a++}}throw new f("can't find custom Huffman table")}function _(e,t,r){for(var a=[],n=0;n<r;n++){var i=new Uint8Array(t)
a.push(i)
for(var o=0;o<t;o++)i[o]=e.readBit()
e.byteAlign()}return a}function F(e,t,r,a){for(var n,i={K:-1,Columns:t,Rows:r,BlackIs1:!0,EndOfBlock:a},s=new o.CCITTFaxDecoder(e,i),c=[],l=!1,u=0;u<r;u++){var h=new Uint8Array(t)
c.push(h)
for(var f=-1,d=0;d<t;d++)f<0&&(-1===(n=s.readNextChar())&&(n=0,l=!0),f=7),h[d]=n>>f&1,f--}if(a&&!l)for(var p=0;p<5&&-1!==s.readNextChar();p++);return c}function R(){}return E.prototype={readBit:function(){if(this.shift<0){if(this.position>=this.end)throw new f("end of data while reading bit")
this.currentByte=this.data[this.position++],this.shift=7}var e=this.currentByte>>this.shift&1
return this.shift--,e},readBits:function(e){var t,r=0
for(t=e-1;t>=0;t--)r|=this.readBit()<<t
return r},byteAlign:function(){this.shift=-1},next:function(){return this.position>=this.end?-1:this.data[this.position++]}},R.prototype={parseChunks:function(e){return function(e){for(var t=new x,r=0,a=e.length;r<a;r++){var n=e[r]
S(b({},n.data,n.start,n.end),t)}return t.buffer}(e)},parse:function(e){var t=function(e){var t=e.length,r=0
if(151!==e[r]||74!==e[r+1]||66!==e[r+2]||50!==e[r+3]||13!==e[r+4]||10!==e[r+5]||26!==e[r+6]||10!==e[r+7])throw new f("parseJbig2 - invalid header.")
var a=Object.create(null)
r+=8
var i=e[r++]
a.randomAccess=!(1&i),2&i||(a.numberOfPages=(0,n.readUint32)(e,r),r+=4)
var o=b(a,e,r,t),s=new x
S(o,s)
for(var c=s.currentPageInfo,l=c.width,u=c.height,h=s.buffer,d=new Uint8ClampedArray(l*u),p=0,g=0,m=0;m<u;m++)for(var v=0,y=void 0,w=0;w<l;w++)v||(v=128,y=h[g++]),d[p++]=y&v?0:255,v>>=1
return{imgData:d,width:l,height:u}}(e),r=t.imgData,a=t.width,i=t.height
return this.width=a,this.height=i,r}},R}()
t.Jbig2Image=d},function(e,t,r){"use strict"
function a(e,t){for(var r=0;r<t.length;r++){var a=t[r]
a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}Object.defineProperty(t,"__esModule",{value:!0}),t.ArithmeticDecoder=void 0
var n=[{qe:22017,nmps:1,nlps:1,switchFlag:1},{qe:13313,nmps:2,nlps:6,switchFlag:0},{qe:6145,nmps:3,nlps:9,switchFlag:0},{qe:2753,nmps:4,nlps:12,switchFlag:0},{qe:1313,nmps:5,nlps:29,switchFlag:0},{qe:545,nmps:38,nlps:33,switchFlag:0},{qe:22017,nmps:7,nlps:6,switchFlag:1},{qe:21505,nmps:8,nlps:14,switchFlag:0},{qe:18433,nmps:9,nlps:14,switchFlag:0},{qe:14337,nmps:10,nlps:14,switchFlag:0},{qe:12289,nmps:11,nlps:17,switchFlag:0},{qe:9217,nmps:12,nlps:18,switchFlag:0},{qe:7169,nmps:13,nlps:20,switchFlag:0},{qe:5633,nmps:29,nlps:21,switchFlag:0},{qe:22017,nmps:15,nlps:14,switchFlag:1},{qe:21505,nmps:16,nlps:14,switchFlag:0},{qe:20737,nmps:17,nlps:15,switchFlag:0},{qe:18433,nmps:18,nlps:16,switchFlag:0},{qe:14337,nmps:19,nlps:17,switchFlag:0},{qe:13313,nmps:20,nlps:18,switchFlag:0},{qe:12289,nmps:21,nlps:19,switchFlag:0},{qe:10241,nmps:22,nlps:19,switchFlag:0},{qe:9217,nmps:23,nlps:20,switchFlag:0},{qe:8705,nmps:24,nlps:21,switchFlag:0},{qe:7169,nmps:25,nlps:22,switchFlag:0},{qe:6145,nmps:26,nlps:23,switchFlag:0},{qe:5633,nmps:27,nlps:24,switchFlag:0},{qe:5121,nmps:28,nlps:25,switchFlag:0},{qe:4609,nmps:29,nlps:26,switchFlag:0},{qe:4353,nmps:30,nlps:27,switchFlag:0},{qe:2753,nmps:31,nlps:28,switchFlag:0},{qe:2497,nmps:32,nlps:29,switchFlag:0},{qe:2209,nmps:33,nlps:30,switchFlag:0},{qe:1313,nmps:34,nlps:31,switchFlag:0},{qe:1089,nmps:35,nlps:32,switchFlag:0},{qe:673,nmps:36,nlps:33,switchFlag:0},{qe:545,nmps:37,nlps:34,switchFlag:0},{qe:321,nmps:38,nlps:35,switchFlag:0},{qe:273,nmps:39,nlps:36,switchFlag:0},{qe:133,nmps:40,nlps:37,switchFlag:0},{qe:73,nmps:41,nlps:38,switchFlag:0},{qe:37,nmps:42,nlps:39,switchFlag:0},{qe:21,nmps:43,nlps:40,switchFlag:0},{qe:9,nmps:44,nlps:41,switchFlag:0},{qe:5,nmps:45,nlps:42,switchFlag:0},{qe:1,nmps:45,nlps:43,switchFlag:0},{qe:22017,nmps:46,nlps:46,switchFlag:0}],i=function(){function e(t,r,a){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.data=t,this.bp=r,this.dataEnd=a,this.chigh=t[r],this.clow=0,this.byteIn(),this.chigh=this.chigh<<7&65535|this.clow>>9&127,this.clow=this.clow<<7&65535,this.ct-=7,this.a=32768}var t,r,i
return t=e,(r=[{key:"byteIn",value:function(){var e=this.data,t=this.bp
255===e[t]?e[t+1]>143?(this.clow+=65280,this.ct=8):(t++,this.clow+=e[t]<<9,this.ct=7,this.bp=t):(t++,this.clow+=t<this.dataEnd?e[t]<<8:65280,this.ct=8,this.bp=t),this.clow>65535&&(this.chigh+=this.clow>>16,this.clow&=65535)}},{key:"readBit",value:function(e,t){var r,a=e[t]>>1,i=1&e[t],o=n[a],s=o.qe,c=this.a-s
if(this.chigh<s)c<s?(c=s,r=i,a=o.nmps):(c=s,r=1^i,1===o.switchFlag&&(i=r),a=o.nlps)
else{if(this.chigh-=s,0!=(32768&c))return this.a=c,i
c<s?(r=1^i,1===o.switchFlag&&(i=r),a=o.nlps):(r=i,a=o.nmps)}do{0===this.ct&&this.byteIn(),c<<=1,this.chigh=this.chigh<<1&65535|this.clow>>15&1,this.clow=this.clow<<1&65535,this.ct--}while(0==(32768&c))
return this.a=c,e[t]=a<<1|i,r}}])&&a(t.prototype,r),i&&a(t,i),e}()
t.ArithmeticDecoder=i},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.JpegStream=void 0
var a=r(209),n=r(202),i=r(216),o=r(5),s=function(){function e(e,t,r,n){for(var i;-1!==(i=e.getByte());)if(255===i){e.skip(-1)
break}this.stream=e,this.maybeLength=t,this.dict=r,this.params=n,a.DecodeStream.call(this,t)}return e.prototype=Object.create(a.DecodeStream.prototype),Object.defineProperty(e.prototype,"bytes",{get:function(){return(0,o.shadow)(this,"bytes",this.stream.getBytes(this.maybeLength))},configurable:!0}),e.prototype.ensureBuffer=function(e){},e.prototype.readBlock=function(){if(!this.eof){var e={decodeTransform:void 0,colorTransform:void 0},t=this.dict.getArray("Decode","D")
if(this.forceRGB&&Array.isArray(t)){for(var r=this.dict.get("BitsPerComponent")||8,a=t.length,o=new Int32Array(a),s=!1,c=(1<<r)-1,l=0;l<a;l+=2)o[l]=256*(t[l+1]-t[l])|0,o[l+1]=t[l]*c|0,256===o[l]&&0===o[l+1]||(s=!0)
s&&(e.decodeTransform=o)}if((0,n.isDict)(this.params)){var u=this.params.get("ColorTransform")
Number.isInteger(u)&&(e.colorTransform=u)}var h=new i.JpegImage(e)
h.parse(this.bytes)
var f=h.getData({width:this.drawWidth,height:this.drawHeight,forceRGB:this.forceRGB,isSourcePDF:!0})
this.buffer=f,this.bufferLength=f.length,this.eof=!0}},e}()
t.JpegStream=s},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.JpegImage=void 0
var a=r(5),n=r(205)
function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,a=h(e)
if(t){var n=h(this).constructor
r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments)
return u(this,r)}}function u(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var f=function(e){s(r,e)
var t=l(r)
function r(e){return o(this,r),t.call(this,"JPEG error: ".concat(e))}return r}(a.BaseException),d=function(e){s(r,e)
var t=l(r)
function r(e,a){var n
return o(this,r),(n=t.call(this,e)).scanLines=a,n}return r}(a.BaseException),p=function(e){s(r,e)
var t=l(r)
function r(){return o(this,r),t.apply(this,arguments)}return r}(a.BaseException),g=function(){var e=new Uint8Array([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63]),t=4017,r=799,o=3406,s=2276,c=1567,l=3784,u=5793,h=2896
function g(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.decodeTransform,r=void 0===t?null:t,a=e.colorTransform,n=void 0===a?-1:a
this._decodeTransform=r,this._colorTransform=n}function m(e,t){for(var r,a,n=0,i=[],o=16;o>0&&!e[o-1];)o--
i.push({children:[],index:0})
var s,c=i[0]
for(r=0;r<o;r++){for(a=0;a<e[r];a++){for((c=i.pop()).children[c.index]=t[n];c.index>0;)c=i.pop()
for(c.index++,i.push(c);i.length<=r;)i.push(s={children:[],index:0}),c.children[c.index]=s.children,c=s
n++}r+1<o&&(i.push(s={children:[],index:0}),c.children[c.index]=s.children,c=s)}return i[0].children}function v(e,t,r){return 64*((e.blocksPerLine+1)*t+r)}function b(t,r,o,s,c,l,u,h,g){var m=arguments.length>9&&void 0!==arguments[9]&&arguments[9],b=o.mcusPerLine,y=o.progressive,w=r,S=0,x=0
function C(){if(x>0)return x--,S>>x&1
if(255===(S=t[r++])){var e=t[r++]
if(e){if(220===e&&m){r+=2
var a=(0,n.readUint16)(t,r)
if(r+=2,a>0&&a!==o.scanLines)throw new d("Found DNL marker (0xFFDC) while parsing scan data",a)}else if(217===e){if(m){var i=D*(8===o.precision?8:0)
if(i>0&&Math.round(o.scanLines/i)>=10)throw new d("Found EOI marker (0xFFD9) while parsing scan data, possibly caused by incorrect `scanLines` parameter",i)}throw new p("Found EOI marker (0xFFD9) while parsing scan data")}throw new f("unexpected marker ".concat((S<<8|e).toString(16)))}}return x=7,S>>>7}function A(e){for(var t=e;;){switch(i(t=t[C()])){case"number":return t
case"object":continue}throw new f("invalid huffman sequence")}}function O(e){for(var t=0;e>0;)t=t<<1|C(),e--
return t}function T(e){if(1===e)return 1===C()?1:-1
var t=O(e)
return t>=1<<e-1?t:t+(-1<<e)+1}function I(t,r){var a=A(t.huffmanTableDC),n=0===a?0:T(a)
t.blockData[r]=t.pred+=n
for(var i=1;i<64;){var o=A(t.huffmanTableAC),s=15&o,c=o>>4
if(0!==s){var l=e[i+=c]
t.blockData[r+l]=T(s),i++}else{if(c<15)break
i+=16}}}function E(e,t){var r=A(e.huffmanTableDC),a=0===r?0:T(r)<<g
e.blockData[t]=e.pred+=a}function P(e,t){e.blockData[t]|=C()<<g}var _=0
function F(t,r){if(_>0)_--
else for(var a=l,n=u;a<=n;){var i=A(t.huffmanTableAC),o=15&i,s=i>>4
if(0!==o){var c=e[a+=s]
t.blockData[r+c]=T(o)*(1<<g),a++}else{if(s<15){_=O(s)+(1<<s)-1
break}a+=16}}}var R,B=0
function M(t,r){for(var a,n,i=l,o=u,s=0;i<=o;){var c=r+e[i],h=t.blockData[c]<0?-1:1
switch(B){case 0:if(s=(n=A(t.huffmanTableAC))>>4,0===(a=15&n))s<15?(_=O(s)+(1<<s),B=4):(s=16,B=1)
else{if(1!==a)throw new f("invalid ACn encoding")
R=T(a),B=s?2:3}continue
case 1:case 2:t.blockData[c]?t.blockData[c]+=h*(C()<<g):0===--s&&(B=2===B?3:0)
break
case 3:t.blockData[c]?t.blockData[c]+=h*(C()<<g):(t.blockData[c]=R<<g,B=0)
break
case 4:t.blockData[c]&&(t.blockData[c]+=h*(C()<<g))}i++}4===B&&0===--_&&(B=0)}var D=0
function L(e,t,r,a,n){var i=r%b
D=(r/b|0)*e.v+a
var o=i*e.h+n
t(e,v(e,D,o))}function N(e,t,r){D=r/e.blocksPerLine|0
var a=r%e.blocksPerLine
t(e,v(e,D,a))}var U,j,q,z,G,H,W=s.length
H=y?0===l?0===h?E:P:0===h?F:M:I
var X,V,Y,K,J=0
for(V=1===W?s[0].blocksPerLine*s[0].blocksPerColumn:b*o.mcusPerColumn;J<=V;){var Z=c?Math.min(V-J,c):V
if(Z>0){for(j=0;j<W;j++)s[j].pred=0
if(_=0,1===W)for(U=s[0],G=0;G<Z;G++)N(U,H,J),J++
else for(G=0;G<Z;G++){for(j=0;j<W;j++)for(Y=(U=s[j]).h,K=U.v,q=0;q<K;q++)for(z=0;z<Y;z++)L(U,H,J,q,z)
J++}}if(x=0,!(X=k(t,r)))break
if(X.invalid){var Q=Z>0?"unexpected":"excessive";(0,a.warn)("decodeScan - ".concat(Q," MCU data, current marker is: ").concat(X.invalid)),r=X.offset}if(!(X.marker>=65488&&X.marker<=65495))break
r+=2}return r-w}function y(e,a,n){var i,d,p,g,m,v,b,y,w,k,S,x,C,A,O,T,I,E=e.quantizationTable,P=e.blockData
if(!E)throw new f("missing required Quantization Table.")
for(var _=0;_<64;_+=8)w=P[a+_],k=P[a+_+1],S=P[a+_+2],x=P[a+_+3],C=P[a+_+4],A=P[a+_+5],O=P[a+_+6],T=P[a+_+7],w*=E[_],0!=(k|S|x|C|A|O|T)?(k*=E[_+1],S*=E[_+2],x*=E[_+3],C*=E[_+4],A*=E[_+5],O*=E[_+6],T*=E[_+7],d=(i=(i=u*w+128>>8)+(d=u*C+128>>8)+1>>1)-d,I=(p=S)*l+(g=O)*c+128>>8,p=p*c-g*l+128>>8,b=(m=(m=h*(k-T)+128>>8)+(b=A<<4)+1>>1)-b,v=(y=(y=h*(k+T)+128>>8)+(v=x<<4)+1>>1)-v,g=(i=i+(g=I)+1>>1)-g,p=(d=d+p+1>>1)-p,I=m*s+y*o+2048>>12,m=m*o-y*s+2048>>12,y=I,I=v*r+b*t+2048>>12,v=v*t-b*r+2048>>12,b=I,n[_]=i+y,n[_+7]=i-y,n[_+1]=d+b,n[_+6]=d-b,n[_+2]=p+v,n[_+5]=p-v,n[_+3]=g+m,n[_+4]=g-m):(I=u*w+512>>10,n[_]=I,n[_+1]=I,n[_+2]=I,n[_+3]=I,n[_+4]=I,n[_+5]=I,n[_+6]=I,n[_+7]=I)
for(var F=0;F<8;++F)w=n[F],0!=((k=n[F+8])|(S=n[F+16])|(x=n[F+24])|(C=n[F+32])|(A=n[F+40])|(O=n[F+48])|(T=n[F+56]))?(d=(i=4112+((i=u*w+2048>>12)+(d=u*C+2048>>12)+1>>1))-d,I=(p=S)*l+(g=O)*c+2048>>12,p=p*c-g*l+2048>>12,g=I,b=(m=(m=h*(k-T)+2048>>12)+(b=A)+1>>1)-b,v=(y=(y=h*(k+T)+2048>>12)+(v=x)+1>>1)-v,I=m*s+y*o+2048>>12,m=m*o-y*s+2048>>12,y=I,I=v*r+b*t+2048>>12,v=v*t-b*r+2048>>12,(w=(i=i+g+1>>1)+y)<16?w=0:w>=4080?w=255:w>>=4,(k=(d=d+p+1>>1)+(b=I))<16?k=0:k>=4080?k=255:k>>=4,(S=(p=d-p)+v)<16?S=0:S>=4080?S=255:S>>=4,(x=(g=i-g)+m)<16?x=0:x>=4080?x=255:x>>=4,(C=g-m)<16?C=0:C>=4080?C=255:C>>=4,(A=p-v)<16?A=0:A>=4080?A=255:A>>=4,(O=d-b)<16?O=0:O>=4080?O=255:O>>=4,(T=i-y)<16?T=0:T>=4080?T=255:T>>=4,P[a+F]=w,P[a+F+8]=k,P[a+F+16]=S,P[a+F+24]=x,P[a+F+32]=C,P[a+F+40]=A,P[a+F+48]=O,P[a+F+56]=T):(I=(I=u*w+8192>>14)<-2040?0:I>=2024?255:I+2056>>4,P[a+F]=I,P[a+F+8]=I,P[a+F+16]=I,P[a+F+24]=I,P[a+F+32]=I,P[a+F+40]=I,P[a+F+48]=I,P[a+F+56]=I)}function w(e,t){for(var r=t.blocksPerLine,a=t.blocksPerColumn,n=new Int16Array(64),i=0;i<a;i++)for(var o=0;o<r;o++){y(t,v(t,i,o),n)}return t.blockData}function k(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,a=e.length-1,i=r<t?r:t
if(t>=a)return null
var o=(0,n.readUint16)(e,t)
if(o>=65472&&o<=65534)return{invalid:null,marker:o,offset:t}
for(var s=(0,n.readUint16)(e,i);!(s>=65472&&s<=65534);){if(++i>=a)return null
s=(0,n.readUint16)(e,i)}return{invalid:o.toString(16),marker:s,offset:i}}return g.prototype={parse:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=r.dnlScanLines,o=void 0===i?null:i
function s(){var e=(0,n.readUint16)(t,h),r=(h+=2)+e-2,i=k(t,r,h)
i&&i.invalid&&((0,a.warn)("readDataBlock - incorrect length, current marker is: "+i.invalid),r=i.offset)
var o=t.subarray(h,r)
return h+=o.length,o}function c(e){for(var t=Math.ceil(e.samplesPerLine/8/e.maxH),r=Math.ceil(e.scanLines/8/e.maxV),a=0;a<e.components.length;a++){Y=e.components[a]
var n=Math.ceil(Math.ceil(e.samplesPerLine/8)*Y.h/e.maxH),i=Math.ceil(Math.ceil(e.scanLines/8)*Y.v/e.maxV),o=t*Y.h,s=64*(r*Y.v)*(o+1)
Y.blockData=new Int16Array(s),Y.blocksPerLine=n,Y.blocksPerColumn=i}e.mcusPerLine=t,e.mcusPerColumn=r}var l,u,h=0,g=null,v=null,y=0,S=[],x=[],C=[],A=(0,n.readUint16)(t,h)
if(h+=2,65496!==A)throw new f("SOI not found")
A=(0,n.readUint16)(t,h),h+=2
e:for(;65497!==A;){var O,T,I
switch(A){case 65504:case 65505:case 65506:case 65507:case 65508:case 65509:case 65510:case 65511:case 65512:case 65513:case 65514:case 65515:case 65516:case 65517:case 65518:case 65519:case 65534:var E=s()
65504===A&&74===E[0]&&70===E[1]&&73===E[2]&&70===E[3]&&0===E[4]&&(g={version:{major:E[5],minor:E[6]},densityUnits:E[7],xDensity:E[8]<<8|E[9],yDensity:E[10]<<8|E[11],thumbWidth:E[12],thumbHeight:E[13],thumbData:E.subarray(14,14+3*E[12]*E[13])}),65518===A&&65===E[0]&&100===E[1]&&111===E[2]&&98===E[3]&&101===E[4]&&(v={version:E[5]<<8|E[6],flags0:E[7]<<8|E[8],flags1:E[9]<<8|E[10],transformCode:E[11]})
break
case 65499:for(var P=(0,n.readUint16)(t,h),_=P+(h+=2)-2;h<_;){var F=t[h++],R=new Uint16Array(64)
if(F>>4==0)for(T=0;T<64;T++)R[e[T]]=t[h++]
else{if(F>>4!=1)throw new f("DQT - invalid table spec")
for(T=0;T<64;T++)R[e[T]]=(0,n.readUint16)(t,h),h+=2}S[15&F]=R}break
case 65472:case 65473:case 65474:if(l)throw new f("Only single frame JPEGs supported")
h+=2,(l={}).extended=65473===A,l.progressive=65474===A,l.precision=t[h++]
var B=(0,n.readUint16)(t,h)
h+=2,l.scanLines=o||B,l.samplesPerLine=(0,n.readUint16)(t,h),h+=2,l.components=[],l.componentIds={}
var M,D=t[h++],L=0,N=0
for(O=0;O<D;O++){M=t[h]
var U=t[h+1]>>4,j=15&t[h+1]
L<U&&(L=U),N<j&&(N=j)
var q=t[h+2]
I=l.components.push({h:U,v:j,quantizationId:q,quantizationTable:null}),l.componentIds[M]=I-1,h+=3}l.maxH=L,l.maxV=N,c(l)
break
case 65476:var z=(0,n.readUint16)(t,h)
for(h+=2,O=2;O<z;){var G=t[h++],H=new Uint8Array(16),W=0
for(T=0;T<16;T++,h++)W+=H[T]=t[h]
var X=new Uint8Array(W)
for(T=0;T<W;T++,h++)X[T]=t[h]
O+=17+W,(G>>4==0?C:x)[15&G]=m(H,X)}break
case 65501:h+=2,u=(0,n.readUint16)(t,h),h+=2
break
case 65498:var V=1==++y&&!o
h+=2
var Y,K=t[h++],J=[]
for(O=0;O<K;O++){var Z=t[h++],Q=l.componentIds[Z];(Y=l.components[Q]).index=Z
var $=t[h++]
Y.huffmanTableDC=C[$>>4],Y.huffmanTableAC=x[15&$],J.push(Y)}var ee=t[h++],te=t[h++],re=t[h++]
try{var ae=b(t,h,l,J,u,ee,te,re>>4,15&re,V)
h+=ae}catch(oe){if(oe instanceof d)return(0,a.warn)("".concat(oe.message," -- attempting to re-parse the JPEG image.")),this.parse(t,{dnlScanLines:oe.scanLines})
if(oe instanceof p){(0,a.warn)("".concat(oe.message," -- ignoring the rest of the image data."))
break e}throw oe}break
case 65500:h+=4
break
case 65535:255!==t[h]&&h--
break
default:var ne=k(t,h-2,h-3)
if(ne&&ne.invalid){(0,a.warn)("JpegImage.parse - unexpected data, current marker is: "+ne.invalid),h=ne.offset
break}if(h>=t.length-1){(0,a.warn)("JpegImage.parse - reached the end of the image data without finding an EOI marker (0xFFD9).")
break e}throw new f("JpegImage.parse - unknown marker: "+A.toString(16))}A=(0,n.readUint16)(t,h),h+=2}for(this.width=l.samplesPerLine,this.height=l.scanLines,this.jfif=g,this.adobe=v,this.components=[],O=0;O<l.components.length;O++){var ie=S[(Y=l.components[O]).quantizationId]
ie&&(Y.quantizationTable=ie),this.components.push({index:Y.index,output:w(0,Y),scaleX:Y.h/l.maxH,scaleY:Y.v/l.maxV,blocksPerLine:Y.blocksPerLine,blocksPerColumn:Y.blocksPerColumn})}this.numComponents=this.components.length},_getLinearizedBlockData:function(e,t){var r,a,n,i,o,s,c,l,u,h,f,d,p=arguments.length>2&&void 0!==arguments[2]&&arguments[2],g=this.width/e,m=this.height/t,v=0,b=this.components.length,y=e*t*b,w=new Uint8ClampedArray(y),k=new Uint32Array(e),S=4294967288
for(c=0;c<b;c++){if(a=(r=this.components[c]).scaleX*g,n=r.scaleY*m,v=c,f=r.output,i=r.blocksPerLine+1<<3,a!==d){for(o=0;o<e;o++)l=0|o*a,k[o]=(l&S)<<3|7&l
d=a}for(s=0;s<t;s++)for(h=i*((l=0|s*n)&S)|(7&l)<<3,o=0;o<e;o++)w[v]=f[h+k[o]],v+=b}var x=this._decodeTransform
if(p||4!==b||x||(x=new Int32Array([-256,255,-256,255,-256,255,-256,255])),x)for(c=0;c<y;)for(l=0,u=0;l<b;l++,c++,u+=2)w[c]=(w[c]*x[u]>>8)+x[u+1]
return w},get _isColorConversionNeeded(){return this.adobe?!!this.adobe.transformCode:3===this.numComponents?0!==this._colorTransform&&(82!==this.components[0].index||71!==this.components[1].index||66!==this.components[2].index):1===this._colorTransform},_convertYccToRgb:function(e){for(var t,r,a,n=0,i=e.length;n<i;n+=3)t=e[n],r=e[n+1],a=e[n+2],e[n]=t-179.456+1.402*a,e[n+1]=t+135.459-.344*r-.714*a,e[n+2]=t-226.816+1.772*r
return e},_convertYcckToRgb:function(e){for(var t,r,a,n,i=0,o=0,s=e.length;o<s;o+=4)t=e[o],r=e[o+1],a=e[o+2],n=e[o+3],e[i++]=r*(-660635669420364e-19*r+.000437130475926232*a-54080610064599e-18*t+.00048449797120281*n-.154362151871126)-122.67195406894+a*(-.000957964378445773*a+.000817076911346625*t-.00477271405408747*n+1.53380253221734)+t*(.000961250184130688*t-.00266257332283933*n+.48357088451265)+n*(-.000336197177618394*n+.484791561490776),e[i++]=107.268039397724+r*(219927104525741e-19*r-.000640992018297945*a+.000659397001245577*t+.000426105652938837*n-.176491792462875)+a*(-.000778269941513683*a+.00130872261408275*t+.000770482631801132*n-.151051492775562)+t*(.00126935368114843*t-.00265090189010898*n+.25802910206845)+n*(-.000318913117588328*n-.213742400323665),e[i++]=r*(-.000570115196973677*r-263409051004589e-19*a+.0020741088115012*t-.00288260236853442*n+.814272968359295)-20.810012546947+a*(-153496057440975e-19*a-.000132689043961446*t+.000560833691242812*n-.195152027534049)+t*(.00174418132927582*t-.00255243321439347*n+.116935020465145)+n*(-.000343531996510555*n+.24165260232407)
return e.subarray(0,i)},_convertYcckToCmyk:function(e){for(var t,r,a,n=0,i=e.length;n<i;n+=4)t=e[n],r=e[n+1],a=e[n+2],e[n]=434.456-t-1.402*a,e[n+1]=119.541-t+.344*r+.714*a,e[n+2]=481.816-t-1.772*r
return e},_convertCmykToRgb:function(e){for(var t,r,a,n,i=0,o=0,s=e.length;o<s;o+=4)t=e[o],r=e[o+1],a=e[o+2],n=e[o+3],e[i++]=255+t*(-6747147073602441e-20*t+.0008379262121013727*r+.0002894718188643294*a+.003264231057537806*n-1.1185611867203937)+r*(26374107616089405e-21*r-8626949158638572e-20*a-.0002748769067499491*n-.02155688794978967)+a*(-3878099212869363e-20*a-.0003267808279485286*n+.0686742238595345)-n*(.0003361971776183937*n+.7430659151342254),e[i++]=255+t*(.00013596372813588848*t+.000924537132573585*r+.00010567359618683593*a+.0004791864687436512*n-.3109689587515875)+r*(-.00023545346108370344*r+.0002702845253534714*a+.0020200308977307156*n-.7488052167015494)+a*(6834815998235662e-20*a+.00015168452363460973*n-.09751927774728933)-n*(.0003189131175883281*n+.7364883807733168),e[i++]=255+t*(13598650411385307e-21*t+.00012423956175490851*r+.0004751985097583589*a-36729317476630422e-22*n-.05562186980264034)+r*(.00016141380598724676*r+.0009692239130725186*a+.0007782692450036253*n-.44015232367526463)+a*(5.068882914068769e-7*a+.0017778369011375071*n-.7591454649749609)-n*(.0003435319965105553*n+.7063770186160144)
return e.subarray(0,i)},getData:function(e){var t=e.width,r=e.height,a=e.forceRGB,n=void 0!==a&&a,i=e.isSourcePDF,o=void 0!==i&&i
if(this.numComponents>4)throw new f("Unsupported color mode")
var s=this._getLinearizedBlockData(t,r,o)
if(1===this.numComponents&&n){for(var c=s.length,l=new Uint8ClampedArray(3*c),u=0,h=0;h<c;h++){var d=s[h]
l[u++]=d,l[u++]=d,l[u++]=d}return l}if(3===this.numComponents&&this._isColorConversionNeeded)return this._convertYccToRgb(s)
if(4===this.numComponents){if(this._isColorConversionNeeded)return n?this._convertYcckToRgb(s):this._convertYcckToCmyk(s)
if(n)return this._convertCmykToRgb(s)}return s}},g}()
t.JpegImage=g},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.JpxStream=void 0
var a=r(209),n=r(218),i=r(5),o=function(){function e(e,t,r,n){this.stream=e,this.maybeLength=t,this.dict=r,this.params=n,a.DecodeStream.call(this,t)}return e.prototype=Object.create(a.DecodeStream.prototype),Object.defineProperty(e.prototype,"bytes",{get:function(){return(0,i.shadow)(this,"bytes",this.stream.getBytes(this.maybeLength))},configurable:!0}),e.prototype.ensureBuffer=function(e){},e.prototype.readBlock=function(){if(!this.eof){var e=new n.JpxImage
e.parse(this.bytes)
var t=e.width,r=e.height,a=e.componentsCount,i=e.tiles.length
if(1===i)this.buffer=e.tiles[0].items
else{for(var o=new Uint8ClampedArray(t*r*a),s=0;s<i;s++)for(var c=e.tiles[s],l=c.width,u=c.height,h=c.left,f=c.top,d=c.items,p=0,g=(t*f+h)*a,m=t*a,v=l*a,b=0;b<u;b++){var y=d.subarray(p,p+v)
o.set(y,g),p+=v,g+=m}this.buffer=o}this.bufferLength=this.buffer.length,this.eof=!0}},e}()
t.JpxStream=o},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.JpxImage=void 0
var a=r(5),n=r(205),i=r(214)
function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,a=u(e)
if(t){var n=u(this).constructor
r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments)
return l(this,r)}}function l(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)})(r,e)
var t=c(r)
function r(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),t.call(this,"JPX error: ".concat(e))}return r}(a.BaseException),f=function(){var e={LL:0,LH:1,HL:1,HH:2}
function t(){this.failOnCorruptedImage=!1}function r(e,t){e.x0=Math.ceil(t.XOsiz/e.XRsiz),e.x1=Math.ceil(t.Xsiz/e.XRsiz),e.y0=Math.ceil(t.YOsiz/e.YRsiz),e.y1=Math.ceil(t.Ysiz/e.YRsiz),e.width=e.x1-e.x0,e.height=e.y1-e.y0}function o(e,t){for(var r,a=e.SIZ,n=[],i=Math.ceil((a.Xsiz-a.XTOsiz)/a.XTsiz),o=Math.ceil((a.Ysiz-a.YTOsiz)/a.YTsiz),s=0;s<o;s++)for(var c=0;c<i;c++)(r={}).tx0=Math.max(a.XTOsiz+c*a.XTsiz,a.XOsiz),r.ty0=Math.max(a.YTOsiz+s*a.YTsiz,a.YOsiz),r.tx1=Math.min(a.XTOsiz+(c+1)*a.XTsiz,a.Xsiz),r.ty1=Math.min(a.YTOsiz+(s+1)*a.YTsiz,a.Ysiz),r.width=r.tx1-r.tx0,r.height=r.ty1-r.ty0,r.components=[],n.push(r)
e.tiles=n
for(var l=0,u=a.Csiz;l<u;l++)for(var h=t[l],f=0,d=n.length;f<d;f++){var p={}
r=n[f],p.tcx0=Math.ceil(r.tx0/h.XRsiz),p.tcy0=Math.ceil(r.ty0/h.YRsiz),p.tcx1=Math.ceil(r.tx1/h.XRsiz),p.tcy1=Math.ceil(r.ty1/h.YRsiz),p.width=p.tcx1-p.tcx0,p.height=p.tcy1-p.tcy0,r.components[l]=p}}function s(e,t,r){var a=t.codingStyleParameters,n={}
return a.entropyCoderWithCustomPrecincts?(n.PPx=a.precinctsSizes[r].PPx,n.PPy=a.precinctsSizes[r].PPy):(n.PPx=15,n.PPy=15),n.xcb_=r>0?Math.min(a.xcb,n.PPx-1):Math.min(a.xcb,n.PPx),n.ycb_=r>0?Math.min(a.ycb,n.PPy-1):Math.min(a.ycb,n.PPy),n}function c(e,t,r){var a=1<<r.PPx,n=1<<r.PPy,i=0===t.resLevel,o=1<<r.PPx+(i?0:-1),s=1<<r.PPy+(i?0:-1),c=t.trx1>t.trx0?Math.ceil(t.trx1/a)-Math.floor(t.trx0/a):0,l=t.try1>t.try0?Math.ceil(t.try1/n)-Math.floor(t.try0/n):0,u=c*l
t.precinctParameters={precinctWidth:a,precinctHeight:n,numprecinctswide:c,numprecinctshigh:l,numprecincts:u,precinctWidthInSubband:o,precinctHeightInSubband:s}}function l(e,t,r){var a,n,i,o,s=r.xcb_,c=r.ycb_,l=1<<s,u=1<<c,h=t.tbx0>>s,f=t.tby0>>c,d=t.tbx1+l-1>>s,p=t.tby1+u-1>>c,g=t.resolution.precinctParameters,m=[],v=[]
for(n=f;n<p;n++)for(a=h;a<d;a++){if((i={cbx:a,cby:n,tbx0:l*a,tby0:u*n,tbx1:l*(a+1),tby1:u*(n+1)}).tbx0_=Math.max(t.tbx0,i.tbx0),i.tby0_=Math.max(t.tby0,i.tby0),i.tbx1_=Math.min(t.tbx1,i.tbx1),i.tby1_=Math.min(t.tby1,i.tby1),o=Math.floor((i.tbx0_-t.tbx0)/g.precinctWidthInSubband)+Math.floor((i.tby0_-t.tby0)/g.precinctHeightInSubband)*g.numprecinctswide,i.precinctNumber=o,i.subbandType=t.type,i.Lblock=3,!(i.tbx1_<=i.tbx0_||i.tby1_<=i.tby0_)){m.push(i)
var b=v[o]
void 0!==b?(a<b.cbxMin?b.cbxMin=a:a>b.cbxMax&&(b.cbxMax=a),n<b.cbyMin?b.cbxMin=n:n>b.cbyMax&&(b.cbyMax=n)):v[o]=b={cbxMin:a,cbyMin:n,cbxMax:a,cbyMax:n},i.precinct=b}}t.codeblockParameters={codeblockWidth:s,codeblockHeight:c,numcodeblockwide:d-h+1,numcodeblockhigh:p-f+1},t.codeblocks=m,t.precincts=v}function u(e,t,r){for(var a=[],n=e.subbands,i=0,o=n.length;i<o;i++)for(var s=n[i].codeblocks,c=0,l=s.length;c<l;c++){var u=s[c]
u.precinctNumber===t&&a.push(u)}return{layerNumber:r,codeblocks:a}}function f(e){for(var t=e.SIZ,r=e.currentTile.index,a=e.tiles[r],n=a.codingStyleDefaultParameters.layersCount,i=t.Csiz,o=0,s=0;s<i;s++)o=Math.max(o,a.components[s].codingStyleParameters.decompositionLevelsCount)
var c=0,l=0,f=0,d=0
this.nextPacket=function(){for(;c<n;c++){for(;l<=o;l++){for(;f<i;f++){var e=a.components[f]
if(!(l>e.codingStyleParameters.decompositionLevelsCount)){for(var t=e.resolutions[l],r=t.precinctParameters.numprecincts;d<r;){var s=u(t,d,c)
return d++,s}d=0}}f=0}l=0}throw new h("Out of packets")}}function d(e){for(var t=e.SIZ,r=e.currentTile.index,a=e.tiles[r],n=a.codingStyleDefaultParameters.layersCount,i=t.Csiz,o=0,s=0;s<i;s++)o=Math.max(o,a.components[s].codingStyleParameters.decompositionLevelsCount)
var c=0,l=0,f=0,d=0
this.nextPacket=function(){for(;c<=o;c++){for(;l<n;l++){for(;f<i;f++){var e=a.components[f]
if(!(c>e.codingStyleParameters.decompositionLevelsCount)){for(var t=e.resolutions[c],r=t.precinctParameters.numprecincts;d<r;){var s=u(t,d,l)
return d++,s}d=0}}f=0}l=0}throw new h("Out of packets")}}function p(e){var t,r,a,n,i=e.SIZ,o=e.currentTile.index,s=e.tiles[o],c=s.codingStyleDefaultParameters.layersCount,l=i.Csiz,f=0
for(a=0;a<l;a++){var d=s.components[a]
f=Math.max(f,d.codingStyleParameters.decompositionLevelsCount)}var p=new Int32Array(f+1)
for(r=0;r<=f;++r){var g=0
for(a=0;a<l;++a){var m=s.components[a].resolutions
r<m.length&&(g=Math.max(g,m[r].precinctParameters.numprecincts))}p[r]=g}t=0,r=0,a=0,n=0,this.nextPacket=function(){for(;r<=f;r++){for(;n<p[r];n++){for(;a<l;a++){var e=s.components[a]
if(!(r>e.codingStyleParameters.decompositionLevelsCount)){var i=e.resolutions[r],o=i.precinctParameters.numprecincts
if(!(n>=o)){for(;t<c;){var d=u(i,n,t)
return t++,d}t=0}}}a=0}n=0}throw new h("Out of packets")}}function g(e){var t=e.SIZ,r=e.currentTile.index,a=e.tiles[r],n=a.codingStyleDefaultParameters.layersCount,i=t.Csiz,o=b(a),s=o,c=0,l=0,f=0,d=0,p=0
this.nextPacket=function(){for(;p<s.maxNumHigh;p++){for(;d<s.maxNumWide;d++){for(;f<i;f++){for(var e=a.components[f],t=e.codingStyleParameters.decompositionLevelsCount;l<=t;l++){var r=e.resolutions[l],g=o.components[f].resolutions[l],m=v(d,p,g,s,r)
if(null!==m){for(;c<n;){var b=u(r,m,c)
return c++,b}c=0}}l=0}f=0}d=0}throw new h("Out of packets")}}function m(e){var t=e.SIZ,r=e.currentTile.index,a=e.tiles[r],n=a.codingStyleDefaultParameters.layersCount,i=t.Csiz,o=b(a),s=0,c=0,l=0,f=0,d=0
this.nextPacket=function(){for(;l<i;++l){for(var e=a.components[l],t=o.components[l],r=e.codingStyleParameters.decompositionLevelsCount;d<t.maxNumHigh;d++){for(;f<t.maxNumWide;f++){for(;c<=r;c++){var p=e.resolutions[c],g=t.resolutions[c],m=v(f,d,g,t,p)
if(null!==m){for(;s<n;){var b=u(p,m,s)
return s++,b}s=0}}c=0}f=0}d=0}throw new h("Out of packets")}}function v(e,t,r,a,n){var i=e*a.minWidth,o=t*a.minHeight
if(i%r.width!=0||o%r.height!=0)return null
var s=o/r.width*n.precinctParameters.numprecinctswide
return i/r.height+s}function b(e){for(var t=e.components.length,r=Number.MAX_VALUE,a=Number.MAX_VALUE,n=0,i=0,o=new Array(t),s=0;s<t;s++){for(var c=e.components[s],l=c.codingStyleParameters.decompositionLevelsCount,u=new Array(l+1),h=Number.MAX_VALUE,f=Number.MAX_VALUE,d=0,p=0,g=1,m=l;m>=0;--m){var v=c.resolutions[m],b=g*v.precinctParameters.precinctWidth,y=g*v.precinctParameters.precinctHeight
h=Math.min(h,b),f=Math.min(f,y),d=Math.max(d,v.precinctParameters.numprecinctswide),p=Math.max(p,v.precinctParameters.numprecinctshigh),u[m]={width:b,height:y},g<<=1}r=Math.min(r,h),a=Math.min(a,f),n=Math.max(n,d),i=Math.max(i,p),o[s]={resolutions:u,minWidth:h,minHeight:f,maxNumWide:d,maxNumHigh:p}}return{components:o,minWidth:r,minHeight:a,maxNumWide:n,maxNumHigh:i}}function y(e){for(var t=e.SIZ,r=e.currentTile.index,a=e.tiles[r],n=t.Csiz,i=0;i<n;i++){for(var o=a.components[i],u=o.codingStyleParameters.decompositionLevelsCount,v=[],b=[],y=0;y<=u;y++){var w,k=s(0,o,y),S={},x=1<<u-y
if(S.trx0=Math.ceil(o.tcx0/x),S.try0=Math.ceil(o.tcy0/x),S.trx1=Math.ceil(o.tcx1/x),S.try1=Math.ceil(o.tcy1/x),S.resLevel=y,c(0,S,k),v.push(S),0===y)(w={}).type="LL",w.tbx0=Math.ceil(o.tcx0/x),w.tby0=Math.ceil(o.tcy0/x),w.tbx1=Math.ceil(o.tcx1/x),w.tby1=Math.ceil(o.tcy1/x),w.resolution=S,l(0,w,k),b.push(w),S.subbands=[w]
else{var C=1<<u-y+1,A=[];(w={}).type="HL",w.tbx0=Math.ceil(o.tcx0/C-.5),w.tby0=Math.ceil(o.tcy0/C),w.tbx1=Math.ceil(o.tcx1/C-.5),w.tby1=Math.ceil(o.tcy1/C),w.resolution=S,l(0,w,k),b.push(w),A.push(w),(w={}).type="LH",w.tbx0=Math.ceil(o.tcx0/C),w.tby0=Math.ceil(o.tcy0/C-.5),w.tbx1=Math.ceil(o.tcx1/C),w.tby1=Math.ceil(o.tcy1/C-.5),w.resolution=S,l(0,w,k),b.push(w),A.push(w),(w={}).type="HH",w.tbx0=Math.ceil(o.tcx0/C-.5),w.tby0=Math.ceil(o.tcy0/C-.5),w.tbx1=Math.ceil(o.tcx1/C-.5),w.tby1=Math.ceil(o.tcy1/C-.5),w.resolution=S,l(0,w,k),b.push(w),A.push(w),S.subbands=A}}o.resolutions=v,o.subbands=b}var O=a.codingStyleDefaultParameters.progressionOrder
switch(O){case 0:a.packetsIterator=new f(e)
break
case 1:a.packetsIterator=new d(e)
break
case 2:a.packetsIterator=new p(e)
break
case 3:a.packetsIterator=new g(e)
break
case 4:a.packetsIterator=new m(e)
break
default:throw new h("Unsupported progression order ".concat(O))}}function w(e,t,r,a){var i,o=0,s=0,c=!1
function l(e){for(;s<e;){var a=t[r+o]
o++,c?(i=i<<7|a,s+=7,c=!1):(i=i<<8|a,s+=8),255===a&&(c=!0)}return i>>>(s-=e)&(1<<e)-1}function u(e){return 255===t[r+o-1]&&t[r+o]===e?(h(1),!0):255===t[r+o]&&t[r+o+1]===e&&(h(2),!0)}function h(e){o+=e}function f(){s=0,c&&(o++,c=!1)}function d(){if(0===l(1))return 1
if(0===l(1))return 2
var e=l(2)
return e<3?e+3:(e=l(5))<31?e+6:(e=l(7))+37}for(var p=e.currentTile.index,g=e.tiles[p],m=e.COD.sopMarkerUsed,v=e.COD.ephMarkerUsed,b=g.packetsIterator;o<a;){f(),m&&u(145)&&h(4)
var y=b.nextPacket()
if(l(1)){for(var w,k=y.layerNumber,S=[],x=0,O=y.codeblocks.length;x<O;x++){var T=(w=y.codeblocks[x]).precinct,I=w.cbx-T.cbxMin,E=w.cby-T.cbyMin,P=!1,_=!1
if(void 0!==w.included)P=!!l(1)
else{var F,R
if(void 0!==(T=w.precinct).inclusionTree)F=T.inclusionTree
else{var B=T.cbxMax-T.cbxMin+1,M=T.cbyMax-T.cbyMin+1
F=new A(B,M,k),R=new C(B,M),T.inclusionTree=F,T.zeroBitPlanesTree=R}if(F.reset(I,E,k))for(;;){if(!l(1)){F.incrementValue(k)
break}if(!F.nextLevel()){w.included=!0,P=_=!0
break}}}if(P){if(_){for((R=T.zeroBitPlanesTree).reset(I,E);;)if(l(1)){if(!R.nextLevel())break}else R.incrementValue()
w.zeroBitPlanes=R.value}for(var D=d();l(1);)w.Lblock++
var L=(0,n.log2)(D),N=l((D<1<<L?L-1:L)+w.Lblock)
S.push({codeblock:w,codingpasses:D,dataLength:N})}}for(f(),v&&u(146);S.length>0;){var U=S.shift()
void 0===(w=U.codeblock).data&&(w.data=[]),w.data.push({data:t,start:r+o,end:r+o+U.dataLength,codingpasses:U.codingpasses}),o+=U.dataLength}}}return o}function k(e,t,r,a,n,o,s,c){for(var l=a.tbx0,u=a.tby0,h=a.tbx1-a.tbx0,f=a.codeblocks,d="H"===a.type.charAt(0)?1:0,p="H"===a.type.charAt(1)?t:0,g=0,m=f.length;g<m;++g){var v=f[g],b=v.tbx1_-v.tbx0_,y=v.tby1_-v.tby0_
if(0!==b&&0!==y&&void 0!==v.data){var w,k
w=new O(b,y,v.subbandType,v.zeroBitPlanes,o),k=2
var S,x,C,A=v.data,T=0,I=0
for(S=0,x=A.length;S<x;S++)T+=(C=A[S]).end-C.start,I+=C.codingpasses
var E=new Uint8Array(T),P=0
for(S=0,x=A.length;S<x;S++){var _=(C=A[S]).data.subarray(C.start,C.end)
E.set(_,P),P+=_.length}var F=new i.ArithmeticDecoder(E,0,T)
for(w.setDecoder(F),S=0;S<I;S++){switch(k){case 0:w.runSignificancePropagationPass()
break
case 1:w.runMagnitudeRefinementPass()
break
case 2:w.runCleanupPass(),c&&w.checkSegmentationSymbol()}k=(k+1)%3}var R,B,M,D=v.tbx0_-l+(v.tby0_-u)*h,L=w.coefficentsSign,N=w.coefficentsMagnitude,U=w.bitsDecoded,j=s?0:.5
P=0
var q="LL"!==a.type
for(S=0;S<y;S++){var z=2*(D/h|0)*(t-h)+d+p
for(R=0;R<b;R++){if(0!==(B=N[P])){B=(B+j)*n,0!==L[P]&&(B=-B),M=U[P]
var G=q?z+(D<<1):D
e[G]=s&&M>=o?B:B*(1<<o-M)}D++,P++}D+=h-b}}}}function S(t,r,a){for(var n=r.components[a],i=n.codingStyleParameters,o=n.quantizationParameters,s=i.decompositionLevelsCount,c=o.SPqcds,l=o.scalarExpounded,u=o.guardBits,h=i.segmentationSymbolUsed,f=t.components[a].precision,d=i.reversibleTransformation,p=d?new E:new I,g=[],m=0,v=0;v<=s;v++){for(var b=n.resolutions[v],y=b.trx1-b.trx0,w=b.try1-b.try0,S=new Float32Array(y*w),x=0,C=b.subbands.length;x<C;x++){var A,O
l?(A=c[m].mu,O=c[m].epsilon,m++):(A=c[0].mu,O=c[0].epsilon+(v>0?1-v:0))
var T=b.subbands[x],P=e[T.type]
k(S,y,0,T,d?1:Math.pow(2,f+P-O)*(1+A/2048),u+O-1,d,h)}g.push({width:y,height:w,items:S})}var _=p.calculate(g,n.tcx0,n.tcy0)
return{left:n.tcx0,top:n.tcy0,width:_.width,height:_.height,items:_.items}}function x(e,t){for(var r=e.SIZ.Csiz,a=e.tiles[t],n=0;n<r;n++){var i=a.components[n],o=void 0!==e.currentTile.QCC[n]?e.currentTile.QCC[n]:e.currentTile.QCD
i.quantizationParameters=o
var s=void 0!==e.currentTile.COC[n]?e.currentTile.COC[n]:e.currentTile.COD
i.codingStyleParameters=s}a.codingStyleDefaultParameters=e.currentTile.COD}t.prototype={parse:function(e){if(65359!==(0,n.readUint16)(e,0))for(var t=0,r=e.length;t<r;){var i=8,o=(0,n.readUint32)(e,t),s=(0,n.readUint32)(e,t+4)
if(t+=i,1===o&&(o=4294967296*(0,n.readUint32)(e,t)+(0,n.readUint32)(e,t+4),t+=8,i+=8),0===o&&(o=r-t+i),o<i)throw new h("Invalid box field size")
var c=o-i,l=!0
switch(s){case 1785737832:l=!1
break
case 1668246642:var u=e[t]
if(1===u){var f=(0,n.readUint32)(e,t+3)
switch(f){case 16:case 17:case 18:break
default:(0,a.warn)("Unknown colorspace "+f)}}else 2===u&&(0,a.info)("ICC profile not supported")
break
case 1785737827:this.parseCodestream(e,t,t+c)
break
case 1783636e3:218793738!==(0,n.readUint32)(e,t)&&(0,a.warn)("Invalid JP2 signature")
break
case 1783634458:case 1718909296:case 1920099697:case 1919251232:case 1768449138:break
default:var d=String.fromCharCode(s>>24&255,s>>16&255,s>>8&255,255&s);(0,a.warn)("Unsupported header type "+s+" ("+d+")")}l&&(t+=c)}else this.parseCodestream(e,0,e.length)},parseImageProperties:function(e){for(var t=e.getByte();t>=0;){if(65361===(t<<8|(t=e.getByte()))){e.skip(4)
var r=e.getInt32()>>>0,a=e.getInt32()>>>0,n=e.getInt32()>>>0,i=e.getInt32()>>>0
e.skip(16)
var o=e.getUint16()
return this.width=r-n,this.height=a-i,this.componentsCount=o,void(this.bitsPerComponent=8)}}throw new h("No size marker found in JPX stream")},parseCodestream:function(e,t,i){var s={},c=!1
try{for(var l=t;l+1<i;){var u=(0,n.readUint16)(e,l)
l+=2
var f,d,p,g,m,v,b=0
switch(u){case 65359:s.mainHeader=!0
break
case 65497:break
case 65361:b=(0,n.readUint16)(e,l)
var k={}
k.Xsiz=(0,n.readUint32)(e,l+4),k.Ysiz=(0,n.readUint32)(e,l+8),k.XOsiz=(0,n.readUint32)(e,l+12),k.YOsiz=(0,n.readUint32)(e,l+16),k.XTsiz=(0,n.readUint32)(e,l+20),k.YTsiz=(0,n.readUint32)(e,l+24),k.XTOsiz=(0,n.readUint32)(e,l+28),k.YTOsiz=(0,n.readUint32)(e,l+32)
var C=(0,n.readUint16)(e,l+36)
k.Csiz=C
var A=[]
f=l+38
for(var O=0;O<C;O++){var T={precision:1+(127&e[f]),isSigned:!!(128&e[f]),XRsiz:e[f+1],YRsiz:e[f+2]}
f+=3,r(T,k),A.push(T)}s.SIZ=k,s.components=A,o(s,A),s.QCC=[],s.COC=[]
break
case 65372:b=(0,n.readUint16)(e,l)
var I={}
switch(f=l+2,31&(d=e[f++])){case 0:g=8,m=!0
break
case 1:g=16,m=!1
break
case 2:g=16,m=!0
break
default:throw new Error("Invalid SQcd value "+d)}for(I.noQuantization=8===g,I.scalarExpounded=m,I.guardBits=d>>5,p=[];f<b+l;){var E={}
8===g?(E.epsilon=e[f++]>>3,E.mu=0):(E.epsilon=e[f]>>3,E.mu=(7&e[f])<<8|e[f+1],f+=2),p.push(E)}I.SPqcds=p,s.mainHeader?s.QCD=I:(s.currentTile.QCD=I,s.currentTile.QCC=[])
break
case 65373:b=(0,n.readUint16)(e,l)
var P,_={}
switch(f=l+2,s.SIZ.Csiz<257?P=e[f++]:(P=(0,n.readUint16)(e,f),f+=2),31&(d=e[f++])){case 0:g=8,m=!0
break
case 1:g=16,m=!1
break
case 2:g=16,m=!0
break
default:throw new Error("Invalid SQcd value "+d)}for(_.noQuantization=8===g,_.scalarExpounded=m,_.guardBits=d>>5,p=[];f<b+l;)E={},8===g?(E.epsilon=e[f++]>>3,E.mu=0):(E.epsilon=e[f]>>3,E.mu=(7&e[f])<<8|e[f+1],f+=2),p.push(E)
_.SPqcds=p,s.mainHeader?s.QCC[P]=_:s.currentTile.QCC[P]=_
break
case 65362:b=(0,n.readUint16)(e,l)
var F={}
f=l+2
var R=e[f++]
F.entropyCoderWithCustomPrecincts=!!(1&R),F.sopMarkerUsed=!!(2&R),F.ephMarkerUsed=!!(4&R),F.progressionOrder=e[f++],F.layersCount=(0,n.readUint16)(e,f),f+=2,F.multipleComponentTransform=e[f++],F.decompositionLevelsCount=e[f++],F.xcb=2+(15&e[f++]),F.ycb=2+(15&e[f++])
var B=e[f++]
if(F.selectiveArithmeticCodingBypass=!!(1&B),F.resetContextProbabilities=!!(2&B),F.terminationOnEachCodingPass=!!(4&B),F.verticallyStripe=!!(8&B),F.predictableTermination=!!(16&B),F.segmentationSymbolUsed=!!(32&B),F.reversibleTransformation=e[f++],F.entropyCoderWithCustomPrecincts){for(var M=[];f<b+l;){var D=e[f++]
M.push({PPx:15&D,PPy:D>>4})}F.precinctsSizes=M}var L=[]
if(F.selectiveArithmeticCodingBypass&&L.push("selectiveArithmeticCodingBypass"),F.resetContextProbabilities&&L.push("resetContextProbabilities"),F.terminationOnEachCodingPass&&L.push("terminationOnEachCodingPass"),F.verticallyStripe&&L.push("verticallyStripe"),F.predictableTermination&&L.push("predictableTermination"),L.length>0)throw c=!0,new Error("Unsupported COD options ("+L.join(", ")+")")
s.mainHeader?s.COD=F:(s.currentTile.COD=F,s.currentTile.COC=[])
break
case 65424:b=(0,n.readUint16)(e,l),(v={}).index=(0,n.readUint16)(e,l+2),v.length=(0,n.readUint32)(e,l+4),v.dataEnd=v.length+l-2,v.partIndex=e[l+8],v.partsCount=e[l+9],s.mainHeader=!1,0===v.partIndex&&(v.COD=s.COD,v.COC=s.COC.slice(0),v.QCD=s.QCD,v.QCC=s.QCC.slice(0)),s.currentTile=v
break
case 65427:0===(v=s.currentTile).partIndex&&(x(s,v.index),y(s)),w(s,e,l,b=v.dataEnd-l)
break
case 65365:case 65367:case 65368:case 65380:b=(0,n.readUint16)(e,l)
break
case 65363:throw new Error("Codestream code 0xFF53 (COC) is not implemented")
default:throw new Error("Unknown codestream code: "+u.toString(16))}l+=b}}catch(N){if(c||this.failOnCorruptedImage)throw new h(N.message);(0,a.warn)("JPX: Trying to recover from: "+N.message)}this.tiles=function(e){for(var t=e.SIZ,r=e.components,a=t.Csiz,n=[],i=0,o=e.tiles.length;i<o;i++){var s,c=e.tiles[i],l=[]
for(s=0;s<a;s++)l[s]=S(e,c,s)
var u,h,f,d,p,g,m,v=l[0],b=new Uint8ClampedArray(v.items.length*a),y={left:v.left,top:v.top,width:v.width,height:v.height,items:b},w=0
if(c.codingStyleDefaultParameters.multipleComponentTransform){var k=4===a,x=l[0].items,C=l[1].items,A=l[2].items,O=k?l[3].items:null
h=.5+(128<<(u=r[0].precision-8))
var T=c.components[0],I=a-3
if(d=x.length,T.codingStyleParameters.reversibleTransformation)for(f=0;f<d;f++,w+=I){p=x[f]+h,g=C[f]
var E=p-((m=A[f])+g>>2)
b[w++]=E+m>>u,b[w++]=E>>u,b[w++]=E+g>>u}else for(f=0;f<d;f++,w+=I)p=x[f]+h,g=C[f],m=A[f],b[w++]=p+1.402*m>>u,b[w++]=p-.34413*g-.71414*m>>u,b[w++]=p+1.772*g>>u
if(k)for(f=0,w=3;f<d;f++,w+=4)b[w]=O[f]+h>>u}else for(s=0;s<a;s++){var P=l[s].items
for(h=.5+(128<<(u=r[s].precision-8)),w=s,f=0,d=P.length;f<d;f++)b[w]=P[f]+h>>u,w+=a}n.push(y)}return n}(s),this.width=s.SIZ.Xsiz-s.SIZ.XOsiz,this.height=s.SIZ.Ysiz-s.SIZ.YOsiz,this.componentsCount=s.SIZ.Csiz}}
var C=function(){function e(e,t){var r=(0,n.log2)(Math.max(e,t))+1
this.levels=[]
for(var a=0;a<r;a++){var i={width:e,height:t,items:[]}
this.levels.push(i),e=Math.ceil(e/2),t=Math.ceil(t/2)}}return e.prototype={reset:function(e,t){for(var r,a=0,n=0;a<this.levels.length;){var i=e+t*(r=this.levels[a]).width
if(void 0!==r.items[i]){n=r.items[i]
break}r.index=i,e>>=1,t>>=1,a++}a--,(r=this.levels[a]).items[r.index]=n,this.currentLevel=a,delete this.value},incrementValue:function(){var e=this.levels[this.currentLevel]
e.items[e.index]++},nextLevel:function(){var e=this.currentLevel,t=this.levels[e],r=t.items[t.index]
return--e<0?(this.value=r,!1):(this.currentLevel=e,(t=this.levels[e]).items[t.index]=r,!0)}},e}(),A=function(){function e(e,t,r){var a=(0,n.log2)(Math.max(e,t))+1
this.levels=[]
for(var i=0;i<a;i++){for(var o=new Uint8Array(e*t),s=0,c=o.length;s<c;s++)o[s]=r
var l={width:e,height:t,items:o}
this.levels.push(l),e=Math.ceil(e/2),t=Math.ceil(t/2)}}return e.prototype={reset:function(e,t,r){for(var a=0;a<this.levels.length;){var n=this.levels[a],i=e+t*n.width
n.index=i
var o=n.items[i]
if(255===o)break
if(o>r)return this.currentLevel=a,this.propagateValues(),!1
e>>=1,t>>=1,a++}return this.currentLevel=a-1,!0},incrementValue:function(e){var t=this.levels[this.currentLevel]
t.items[t.index]=e+1,this.propagateValues()},propagateValues:function(){for(var e=this.currentLevel,t=this.levels[e],r=t.items[t.index];--e>=0;)(t=this.levels[e]).items[t.index]=r},nextLevel:function(){var e=this.currentLevel,t=this.levels[e],r=t.items[t.index]
return t.items[t.index]=255,!(--e<0)&&(this.currentLevel=e,(t=this.levels[e]).items[t.index]=r,!0)}},e}(),O=function(){var e=17,t=new Uint8Array([0,5,8,0,3,7,8,0,4,7,8,0,0,0,0,0,1,6,8,0,3,7,8,0,4,7,8,0,0,0,0,0,2,6,8,0,3,7,8,0,4,7,8,0,0,0,0,0,2,6,8,0,3,7,8,0,4,7,8,0,0,0,0,0,2,6,8,0,3,7,8,0,4,7,8]),r=new Uint8Array([0,3,4,0,5,7,7,0,8,8,8,0,0,0,0,0,1,3,4,0,6,7,7,0,8,8,8,0,0,0,0,0,2,3,4,0,6,7,7,0,8,8,8,0,0,0,0,0,2,3,4,0,6,7,7,0,8,8,8,0,0,0,0,0,2,3,4,0,6,7,7,0,8,8,8]),a=new Uint8Array([0,1,2,0,1,2,2,0,2,2,2,0,0,0,0,0,3,4,5,0,4,5,5,0,5,5,5,0,0,0,0,0,6,7,7,0,7,7,7,0,7,7,7,0,0,0,0,0,8,8,8,0,8,8,8,0,8,8,8,0,0,0,0,0,8,8,8,0,8,8,8,0,8,8,8])
function n(e,n,i,o,s){var c
this.width=e,this.height=n,c="HH"===i?a:"HL"===i?r:t,this.contextLabelTable=c
var l,u=e*n
this.neighborsSignificance=new Uint8Array(u),this.coefficentsSign=new Uint8Array(u),l=s>14?new Uint32Array(u):s>6?new Uint16Array(u):new Uint8Array(u),this.coefficentsMagnitude=l,this.processingFlags=new Uint8Array(u)
var h=new Uint8Array(u)
if(0!==o)for(var f=0;f<u;f++)h[f]=o
this.bitsDecoded=h,this.reset()}return n.prototype={setDecoder:function(e){this.decoder=e},reset:function(){this.contexts=new Int8Array(19),this.contexts[0]=8,this.contexts[17]=92,this.contexts[18]=6},setNeighborsSignificance:function(e,t,r){var a,n=this.neighborsSignificance,i=this.width,o=this.height,s=t>0,c=t+1<i
e>0&&(a=r-i,s&&(n[a-1]+=16),c&&(n[a+1]+=16),n[a]+=4),e+1<o&&(a=r+i,s&&(n[a-1]+=16),c&&(n[a+1]+=16),n[a]+=4),s&&(n[r-1]+=1),c&&(n[r+1]+=1),n[r]|=128},runSignificancePropagationPass:function(){for(var e=this.decoder,t=this.width,r=this.height,a=this.coefficentsMagnitude,n=this.coefficentsSign,i=this.neighborsSignificance,o=this.processingFlags,s=this.contexts,c=this.contextLabelTable,l=this.bitsDecoded,u=0;u<r;u+=4)for(var h=0;h<t;h++)for(var f=u*t+h,d=0;d<4;d++,f+=t){var p=u+d
if(p>=r)break
if(o[f]&=-2,!a[f]&&i[f]){var g=c[i[f]]
if(e.readBit(s,g)){var m=this.decodeSignBit(p,h,f)
n[f]=m,a[f]=1,this.setNeighborsSignificance(p,h,f),o[f]|=2}l[f]++,o[f]|=1}}},decodeSignBit:function(e,t,r){var a,n,i,o,s,c,l=this.width,u=this.height,h=this.coefficentsMagnitude,f=this.coefficentsSign
o=t>0&&0!==h[r-1],t+1<l&&0!==h[r+1]?(i=f[r+1],a=o?1-i-(n=f[r-1]):1-i-i):a=o?1-(n=f[r-1])-n:0
var d=3*a
return o=e>0&&0!==h[r-l],e+1<u&&0!==h[r+l]?(i=f[r+l],a=o?1-i-(n=f[r-l])+d:1-i-i+d):a=o?1-(n=f[r-l])-n+d:d,a>=0?(s=9+a,c=this.decoder.readBit(this.contexts,s)):(s=9-a,c=1^this.decoder.readBit(this.contexts,s)),c},runMagnitudeRefinementPass:function(){for(var e,t=this.decoder,r=this.width,a=this.height,n=this.coefficentsMagnitude,i=this.neighborsSignificance,o=this.contexts,s=this.bitsDecoded,c=this.processingFlags,l=r*a,u=4*r,h=0;h<l;h=e){e=Math.min(l,h+u)
for(var f=0;f<r;f++)for(var d=h+f;d<e;d+=r)if(n[d]&&0==(1&c[d])){var p=16
if(0!=(2&c[d]))c[d]^=2,p=0===(127&i[d])?15:14
var g=t.readBit(o,p)
n[d]=n[d]<<1|g,s[d]++,c[d]|=1}}},runCleanupPass:function(){for(var t,r=this.decoder,a=this.width,n=this.height,i=this.neighborsSignificance,o=this.coefficentsMagnitude,s=this.coefficentsSign,c=this.contexts,l=this.contextLabelTable,u=this.bitsDecoded,h=this.processingFlags,f=a,d=2*a,p=3*a,g=0;g<n;g=t){t=Math.min(g+4,n)
for(var m=g*a,v=g+3<n,b=0;b<a;b++){var y,w=m+b,k=0,S=w,x=g
if(v&&0===h[w]&&0===h[w+f]&&0===h[w+d]&&0===h[w+p]&&0===i[w]&&0===i[w+f]&&0===i[w+d]&&0===i[w+p]){if(!r.readBit(c,18)){u[w]++,u[w+f]++,u[w+d]++,u[w+p]++
continue}0!==(k=r.readBit(c,e)<<1|r.readBit(c,e))&&(x=g+k,S+=k*a),y=this.decodeSignBit(x,b,S),s[S]=y,o[S]=1,this.setNeighborsSignificance(x,b,S),h[S]|=2,S=w
for(var C=g;C<=x;C++,S+=a)u[S]++
k++}for(x=g+k;x<t;x++,S+=a)if(!o[S]&&0==(1&h[S])){var A=l[i[S]]
1===r.readBit(c,A)&&(y=this.decodeSignBit(x,b,S),s[S]=y,o[S]=1,this.setNeighborsSignificance(x,b,S),h[S]|=2),u[S]++}}}},checkSegmentationSymbol:function(){var t=this.decoder,r=this.contexts
if(10!==(t.readBit(r,e)<<3|t.readBit(r,e)<<2|t.readBit(r,e)<<1|t.readBit(r,e)))throw new h("Invalid segmentation symbol")}},n}(),T=function(){function e(){}return e.prototype.calculate=function(e,t,r){for(var a=e[0],n=1,i=e.length;n<i;n++)a=this.iterate(a,e[n],t,r)
return a},e.prototype.extend=function(e,t,r){var a=t-1,n=t+1,i=t+r-2,o=t+r
e[a--]=e[n++],e[o++]=e[i--],e[a--]=e[n++],e[o++]=e[i--],e[a--]=e[n++],e[o++]=e[i--],e[a]=e[n],e[o]=e[i]},e.prototype.iterate=function(e,t,r,a){var n,i,o,s,c,l,u=e.width,h=e.height,f=e.items,d=t.width,p=t.height,g=t.items
for(o=0,n=0;n<h;n++)for(s=2*n*d,i=0;i<u;i++,o++,s+=2)g[s]=f[o]
f=e.items=null
var m=new Float32Array(d+8)
if(1===d){if(0!=(1&r))for(l=0,o=0;l<p;l++,o+=d)g[o]*=.5}else for(l=0,o=0;l<p;l++,o+=d)m.set(g.subarray(o,o+d),4),this.extend(m,4,d),this.filter(m,4,d),g.set(m.subarray(4,4+d),o)
var v=16,b=[]
for(n=0;n<v;n++)b.push(new Float32Array(p+8))
var y,w=0
if(e=4+p,1===p){if(0!=(1&a))for(c=0;c<d;c++)g[c]*=.5}else for(c=0;c<d;c++){if(0===w){for(v=Math.min(d-c,v),o=c,s=4;s<e;o+=d,s++)for(y=0;y<v;y++)b[y][s]=g[o+y]
w=v}var k=b[--w]
if(this.extend(k,4,p),this.filter(k,4,p),0===w)for(o=c-v+1,s=4;s<e;o+=d,s++)for(y=0;y<v;y++)g[o+y]=b[y][s]}return{width:d,height:p,items:g}},e}(),I=function(){function e(){T.call(this)}return e.prototype=Object.create(T.prototype),e.prototype.filter=function(e,t,r){var a,n,i,o,s=r>>1,c=-1.586134342059924,l=-.052980118572961,u=.882911075530934,h=.443506852043971,f=1.230174104914001
for(a=(t|=0)-3,n=s+4;n--;a+=2)e[a]*=.8128930661159609
for(i=h*e[(a=t-2)-1],n=s+3;n--&&(o=h*e[a+1],e[a]=f*e[a]-i-o,n--);a+=2)i=h*e[(a+=2)+1],e[a]=f*e[a]-i-o
for(i=u*e[(a=t-1)-1],n=s+2;n--&&(o=u*e[a+1],e[a]-=i+o,n--);a+=2)i=u*e[(a+=2)+1],e[a]-=i+o
for(i=l*e[(a=t)-1],n=s+1;n--&&(o=l*e[a+1],e[a]-=i+o,n--);a+=2)i=l*e[(a+=2)+1],e[a]-=i+o
if(0!==s)for(i=c*e[(a=t+1)-1],n=s;n--&&(o=c*e[a+1],e[a]-=i+o,n--);a+=2)i=c*e[(a+=2)+1],e[a]-=i+o},e}(),E=function(){function e(){T.call(this)}return e.prototype=Object.create(T.prototype),e.prototype.filter=function(e,t,r){var a,n,i=r>>1
for(a=t|=0,n=i+1;n--;a+=2)e[a]-=e[a-1]+e[a+1]+2>>2
for(a=t+1,n=i;n--;a+=2)e[a]+=e[a-1]+e[a+1]>>1},e}()
return t}()
t.JpxImage=f},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.calculateSHA512=t.calculateSHA384=t.calculateSHA256=t.calculateMD5=t.PDF20=t.PDF17=t.CipherTransformFactory=t.ARCFourCipher=t.AES256Cipher=t.AES128Cipher=void 0
var a=r(5),n=r(202),i=r(209)
function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,a=h(e)
if(t){var n=h(this).constructor
r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments)
return u(this,r)}}function u(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var r=0;r<t.length;r++){var a=t[r]
a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function p(e,t,r){return t&&d(e.prototype,t),r&&d(e,r),e}var g=function(){function e(e){this.a=0,this.b=0
var t,r,a=new Uint8Array(256),n=0,i=e.length
for(t=0;t<256;++t)a[t]=t
for(t=0;t<256;++t)n=n+(r=a[t])+e[t%i]&255,a[t]=a[n],a[n]=r
this.s=a}return e.prototype={encryptBlock:function(e){var t,r,a,n=e.length,i=this.a,o=this.b,s=this.s,c=new Uint8Array(n)
for(t=0;t<n;++t)a=s[o=o+(r=s[i=i+1&255])&255],s[i]=a,s[o]=r,c[t]=e[t]^s[r+a&255]
return this.a=i,this.b=o,c}},e.prototype.decryptBlock=e.prototype.encryptBlock,e.prototype.encrypt=e.prototype.encryptBlock,e}()
t.ARCFourCipher=g
var m,v,b=(m=new Uint8Array([7,12,17,22,7,12,17,22,7,12,17,22,7,12,17,22,5,9,14,20,5,9,14,20,5,9,14,20,5,9,14,20,4,11,16,23,4,11,16,23,4,11,16,23,4,11,16,23,6,10,15,21,6,10,15,21,6,10,15,21,6,10,15,21]),v=new Int32Array([-680876936,-389564586,606105819,-1044525330,-176418897,1200080426,-1473231341,-45705983,1770035416,-1958414417,-42063,-1990404162,1804603682,-40341101,-1502002290,1236535329,-165796510,-1069501632,643717713,-373897302,-701558691,38016083,-660478335,-405537848,568446438,-1019803690,-187363961,1163531501,-1444681467,-51403784,1735328473,-1926607734,-378558,-2022574463,1839030562,-35309556,-1530992060,1272893353,-155497632,-1094730640,681279174,-358537222,-722521979,76029189,-640364487,-421815835,530742520,-995338651,-198630844,1126891415,-1416354905,-57434055,1700485571,-1894986606,-1051523,-2054922799,1873313359,-30611744,-1560198380,1309151649,-145523070,-1120210379,718787259,-343485551]),function(e,t,r){var a,n,i,o=1732584193,s=-271733879,c=-1732584194,l=271733878,u=r+72&-64,h=new Uint8Array(u)
for(a=0;a<r;++a)h[a]=e[t++]
for(h[a++]=128,i=u-8;a<i;)h[a++]=0
h[a++]=r<<3&255,h[a++]=r>>5&255,h[a++]=r>>13&255,h[a++]=r>>21&255,h[a++]=r>>>29&255,h[a++]=0,h[a++]=0,h[a++]=0
var f=new Int32Array(16)
for(a=0;a<u;){for(n=0;n<16;++n,a+=4)f[n]=h[a]|h[a+1]<<8|h[a+2]<<16|h[a+3]<<24
var d,p,g=o,b=s,y=c,w=l
for(n=0;n<64;++n){n<16?(d=b&y|~b&w,p=n):n<32?(d=w&b|~w&y,p=5*n+1&15):n<48?(d=b^y^w,p=3*n+5&15):(d=y^(b|~w),p=7*n&15)
var k=w,S=g+d+v[n]+f[p]|0,x=m[n]
w=y,y=b,b=b+(S<<x|S>>>32-x)|0,g=k}o=o+g|0,s=s+b|0,c=c+y|0,l=l+w|0}return new Uint8Array([255&o,o>>8&255,o>>16&255,o>>>24&255,255&s,s>>8&255,s>>16&255,s>>>24&255,255&c,c>>8&255,c>>16&255,c>>>24&255,255&l,l>>8&255,l>>16&255,l>>>24&255])})
t.calculateMD5=b
var y=function(){function e(e,t){this.high=0|e,this.low=0|t}return e.prototype={and:function(e){this.high&=e.high,this.low&=e.low},xor:function(e){this.high^=e.high,this.low^=e.low},or:function(e){this.high|=e.high,this.low|=e.low},shiftRight:function(e){e>=32?(this.low=this.high>>>e-32|0,this.high=0):(this.low=this.low>>>e|this.high<<32-e,this.high=this.high>>>e|0)},shiftLeft:function(e){e>=32?(this.high=this.low<<e-32,this.low=0):(this.high=this.high<<e|this.low>>>32-e,this.low=this.low<<e)},rotateRight:function(e){var t,r
32&e?(r=this.low,t=this.high):(t=this.low,r=this.high),e&=31,this.low=t>>>e|r<<32-e,this.high=r>>>e|t<<32-e},not:function(){this.high=~this.high,this.low=~this.low},add:function(e){var t=(this.low>>>0)+(e.low>>>0),r=(this.high>>>0)+(e.high>>>0)
t>4294967295&&(r+=1),this.low=0|t,this.high=0|r},copyTo:function(e,t){e[t]=this.high>>>24&255,e[t+1]=this.high>>16&255,e[t+2]=this.high>>8&255,e[t+3]=255&this.high,e[t+4]=this.low>>>24&255,e[t+5]=this.low>>16&255,e[t+6]=this.low>>8&255,e[t+7]=255&this.low},assign:function(e){this.high=e.high,this.low=e.low}},e}(),w=function(){function e(e,t){return e>>>t|e<<32-t}function t(e,t,r){return e&t^~e&r}function r(e,t,r){return e&t^e&r^t&r}function a(t){return e(t,2)^e(t,13)^e(t,22)}function n(t){return e(t,6)^e(t,11)^e(t,25)}function i(t){return e(t,7)^e(t,18)^t>>>3}var o=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]
return function(s,c,l){var u,h,f,d=1779033703,p=3144134277,g=1013904242,m=2773480762,v=1359893119,b=2600822924,y=528734635,w=1541459225,k=64*Math.ceil((l+9)/64),S=new Uint8Array(k)
for(u=0;u<l;++u)S[u]=s[c++]
for(S[u++]=128,f=k-8;u<f;)S[u++]=0
S[u++]=0,S[u++]=0,S[u++]=0,S[u++]=l>>>29&255,S[u++]=l>>21&255,S[u++]=l>>13&255,S[u++]=l>>5&255,S[u++]=l<<3&255
var x,C=new Uint32Array(64)
for(u=0;u<k;){for(h=0;h<16;++h)C[h]=S[u]<<24|S[u+1]<<16|S[u+2]<<8|S[u+3],u+=4
for(h=16;h<64;++h)C[h]=0|(e(x=C[h-2],17)^e(x,19)^x>>>10)+C[h-7]+i(C[h-15])+C[h-16]
var A,O,T=d,I=p,E=g,P=m,_=v,F=b,R=y,B=w
for(h=0;h<64;++h)A=B+n(_)+t(_,F,R)+o[h]+C[h],O=a(T)+r(T,I,E),B=R,R=F,F=_,_=P+A|0,P=E,E=I,I=T,T=A+O|0
d=d+T|0,p=p+I|0,g=g+E|0,m=m+P|0,v=v+_|0,b=b+F|0,y=y+R|0,w=w+B|0}return new Uint8Array([d>>24&255,d>>16&255,d>>8&255,255&d,p>>24&255,p>>16&255,p>>8&255,255&p,g>>24&255,g>>16&255,g>>8&255,255&g,m>>24&255,m>>16&255,m>>8&255,255&m,v>>24&255,v>>16&255,v>>8&255,255&v,b>>24&255,b>>16&255,b>>8&255,255&b,y>>24&255,y>>16&255,y>>8&255,255&y,w>>24&255,w>>16&255,w>>8&255,255&w])}}()
t.calculateSHA256=w
var k=function(){function e(e,t,r,a,n){e.assign(t),e.and(r),n.assign(t),n.not(),n.and(a),e.xor(n)}function t(e,t,r,a,n){e.assign(t),e.and(r),n.assign(t),n.and(a),e.xor(n),n.assign(r),n.and(a),e.xor(n)}function r(e,t,r){e.assign(t),e.rotateRight(28),r.assign(t),r.rotateRight(34),e.xor(r),r.assign(t),r.rotateRight(39),e.xor(r)}function a(e,t,r){e.assign(t),e.rotateRight(14),r.assign(t),r.rotateRight(18),e.xor(r),r.assign(t),r.rotateRight(41),e.xor(r)}function n(e,t,r){e.assign(t),e.rotateRight(1),r.assign(t),r.rotateRight(8),e.xor(r),r.assign(t),r.shiftRight(7),e.xor(r)}function i(e,t,r){e.assign(t),e.rotateRight(19),r.assign(t),r.rotateRight(61),e.xor(r),r.assign(t),r.shiftRight(6),e.xor(r)}var o=[new y(1116352408,3609767458),new y(1899447441,602891725),new y(3049323471,3964484399),new y(3921009573,2173295548),new y(961987163,4081628472),new y(1508970993,3053834265),new y(2453635748,2937671579),new y(2870763221,3664609560),new y(3624381080,2734883394),new y(310598401,1164996542),new y(607225278,1323610764),new y(1426881987,3590304994),new y(1925078388,4068182383),new y(2162078206,991336113),new y(2614888103,633803317),new y(3248222580,3479774868),new y(3835390401,2666613458),new y(4022224774,944711139),new y(264347078,2341262773),new y(604807628,2007800933),new y(770255983,1495990901),new y(1249150122,1856431235),new y(1555081692,3175218132),new y(1996064986,2198950837),new y(2554220882,3999719339),new y(2821834349,766784016),new y(2952996808,2566594879),new y(3210313671,3203337956),new y(3336571891,1034457026),new y(3584528711,2466948901),new y(113926993,3758326383),new y(338241895,168717936),new y(666307205,1188179964),new y(773529912,1546045734),new y(1294757372,1522805485),new y(1396182291,2643833823),new y(1695183700,2343527390),new y(1986661051,1014477480),new y(2177026350,1206759142),new y(2456956037,344077627),new y(2730485921,1290863460),new y(2820302411,3158454273),new y(3259730800,3505952657),new y(3345764771,106217008),new y(3516065817,3606008344),new y(3600352804,1432725776),new y(4094571909,1467031594),new y(275423344,851169720),new y(430227734,3100823752),new y(506948616,1363258195),new y(659060556,3750685593),new y(883997877,3785050280),new y(958139571,3318307427),new y(1322822218,3812723403),new y(1537002063,2003034995),new y(1747873779,3602036899),new y(1955562222,1575990012),new y(2024104815,1125592928),new y(2227730452,2716904306),new y(2361852424,442776044),new y(2428436474,593698344),new y(2756734187,3733110249),new y(3204031479,2999351573),new y(3329325298,3815920427),new y(3391569614,3928383900),new y(3515267271,566280711),new y(3940187606,3454069534),new y(4118630271,4000239992),new y(116418474,1914138554),new y(174292421,2731055270),new y(289380356,3203993006),new y(460393269,320620315),new y(685471733,587496836),new y(852142971,1086792851),new y(1017036298,365543100),new y(1126000580,2618297676),new y(1288033470,3409855158),new y(1501505948,4234509866),new y(1607167915,987167468),new y(1816402316,1246189591)]
return function(s,c,l,u){var h,f,d,p,g,m,v,b;(u=!!u)?(h=new y(3418070365,3238371032),f=new y(1654270250,914150663),d=new y(2438529370,812702999),p=new y(355462360,4144912697),g=new y(1731405415,4290775857),m=new y(2394180231,1750603025),v=new y(3675008525,1694076839),b=new y(1203062813,3204075428)):(h=new y(1779033703,4089235720),f=new y(3144134277,2227873595),d=new y(1013904242,4271175723),p=new y(2773480762,1595750129),g=new y(1359893119,2917565137),m=new y(2600822924,725511199),v=new y(528734635,4215389547),b=new y(1541459225,327033209))
var w,k,S,x=128*Math.ceil((l+17)/128),C=new Uint8Array(x)
for(w=0;w<l;++w)C[w]=s[c++]
for(C[w++]=128,S=x-16;w<S;)C[w++]=0
C[w++]=0,C[w++]=0,C[w++]=0,C[w++]=0,C[w++]=0,C[w++]=0,C[w++]=0,C[w++]=0,C[w++]=0,C[w++]=0,C[w++]=0,C[w++]=l>>>29&255,C[w++]=l>>21&255,C[w++]=l>>13&255,C[w++]=l>>5&255,C[w++]=l<<3&255
var A=new Array(80)
for(w=0;w<80;w++)A[w]=new y(0,0)
var O,T,I=new y(0,0),E=new y(0,0),P=new y(0,0),_=new y(0,0),F=new y(0,0),R=new y(0,0),B=new y(0,0),M=new y(0,0),D=new y(0,0),L=new y(0,0),N=new y(0,0),U=new y(0,0)
for(w=0;w<x;){for(k=0;k<16;++k)A[k].high=C[w]<<24|C[w+1]<<16|C[w+2]<<8|C[w+3],A[k].low=C[w+4]<<24|C[w+5]<<16|C[w+6]<<8|C[w+7],w+=8
for(k=16;k<80;++k)i(O=A[k],A[k-2],U),O.add(A[k-7]),n(N,A[k-15],U),O.add(N),O.add(A[k-16])
for(I.assign(h),E.assign(f),P.assign(d),_.assign(p),F.assign(g),R.assign(m),B.assign(v),M.assign(b),k=0;k<80;++k)D.assign(M),a(N,F,U),D.add(N),e(N,F,R,B,U),D.add(N),D.add(o[k]),D.add(A[k]),r(L,I,U),t(N,I,E,P,U),L.add(N),O=M,M=B,B=R,R=F,_.add(D),F=_,_=P,P=E,E=I,O.assign(D),O.add(L),I=O
h.add(I),f.add(E),d.add(P),p.add(_),g.add(F),m.add(R),v.add(B),b.add(M)}return u?(T=new Uint8Array(48),h.copyTo(T,0),f.copyTo(T,8),d.copyTo(T,16),p.copyTo(T,24),g.copyTo(T,32),m.copyTo(T,40)):(T=new Uint8Array(64),h.copyTo(T,0),f.copyTo(T,8),d.copyTo(T,16),p.copyTo(T,24),g.copyTo(T,32),m.copyTo(T,40),v.copyTo(T,48),b.copyTo(T,56)),T}}()
t.calculateSHA512=k
var S=function(e,t,r){return k(e,t,r,!0)}
t.calculateSHA384=S
var x=function(){function e(){}return e.prototype={decryptBlock:function(e){return e},encrypt:function(e){return e}},e}(),C=function(){function e(){f(this,e),this.constructor===e&&(0,a.unreachable)("Cannot initialize AESBaseCipher."),this._s=new Uint8Array([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22]),this._inv_s=new Uint8Array([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125]),this._mix=new Uint32Array([0,235474187,470948374,303765277,941896748,908933415,607530554,708780849,1883793496,2118214995,1817866830,1649639237,1215061108,1181045119,1417561698,1517767529,3767586992,4003061179,4236429990,4069246893,3635733660,3602770327,3299278474,3400528769,2430122216,2664543715,2362090238,2193862645,2835123396,2801107407,3035535058,3135740889,3678124923,3576870512,3341394285,3374361702,3810496343,3977675356,4279080257,4043610186,2876494627,2776292904,3076639029,3110650942,2472011535,2640243204,2403728665,2169303058,1001089995,899835584,666464733,699432150,59727847,226906860,530400753,294930682,1273168787,1172967064,1475418501,1509430414,1942435775,2110667444,1876241833,1641816226,2910219766,2743034109,2976151520,3211623147,2505202138,2606453969,2302690252,2269728455,3711829422,3543599269,3240894392,3475313331,3843699074,3943906441,4178062228,4144047775,1306967366,1139781709,1374988112,1610459739,1975683434,2076935265,1775276924,1742315127,1034867998,866637845,566021896,800440835,92987698,193195065,429456164,395441711,1984812685,2017778566,1784663195,1683407248,1315562145,1080094634,1383856311,1551037884,101039829,135050206,437757123,337553864,1042385657,807962610,573804783,742039012,2531067453,2564033334,2328828971,2227573024,2935566865,2700099354,3001755655,3168937228,3868552805,3902563182,4203181171,4102977912,3736164937,3501741890,3265478751,3433712980,1106041591,1340463100,1576976609,1408749034,2043211483,2009195472,1708848333,1809054150,832877231,1068351396,766945465,599762354,159417987,126454664,361929877,463180190,2709260871,2943682380,3178106961,3009879386,2572697195,2538681184,2236228733,2336434550,3509871135,3745345300,3441850377,3274667266,3910161971,3877198648,4110568485,4211818798,2597806476,2497604743,2261089178,2295101073,2733856160,2902087851,3202437046,2968011453,3936291284,3835036895,4136440770,4169408201,3535486456,3702665459,3467192302,3231722213,2051518780,1951317047,1716890410,1750902305,1113818384,1282050075,1584504582,1350078989,168810852,67556463,371049330,404016761,841739592,1008918595,775550814,540080725,3969562369,3801332234,4035489047,4269907996,3569255213,3669462566,3366754619,3332740144,2631065433,2463879762,2160117071,2395588676,2767645557,2868897406,3102011747,3069049960,202008497,33778362,270040487,504459436,875451293,975658646,675039627,641025152,2084704233,1917518562,1615861247,1851332852,1147550661,1248802510,1484005843,1451044056,933301370,967311729,733156972,632953703,260388950,25965917,328671808,496906059,1206477858,1239443753,1543208500,1441952575,2144161806,1908694277,1675577880,1842759443,3610369226,3644379585,3408119516,3307916247,4011190502,3776767469,4077384432,4245618683,2809771154,2842737049,3144396420,3043140495,2673705150,2438237621,2203032232,2370213795]),this._mixCol=new Uint8Array(256)
for(var t=0;t<256;t++)this._mixCol[t]=t<128?t<<1:t<<1^27
this.buffer=new Uint8Array(16),this.bufferPosition=0}return p(e,[{key:"_expandKey",value:function(e){(0,a.unreachable)("Cannot call `_expandKey` on the base class")}},{key:"_decrypt",value:function(e,t){var r,a,n,i=new Uint8Array(16)
i.set(e)
for(var o=0,s=this._keySize;o<16;++o,++s)i[o]^=t[s]
for(var c=this._cyclesOfRepetition-1;c>=1;--c){r=i[13],i[13]=i[9],i[9]=i[5],i[5]=i[1],i[1]=r,r=i[14],a=i[10],i[14]=i[6],i[10]=i[2],i[6]=r,i[2]=a,r=i[15],a=i[11],n=i[7],i[15]=i[3],i[11]=r,i[7]=a,i[3]=n
for(var l=0;l<16;++l)i[l]=this._inv_s[i[l]]
for(var u=0,h=16*c;u<16;++u,++h)i[u]^=t[h]
for(var f=0;f<16;f+=4){var d=this._mix[i[f]],p=this._mix[i[f+1]],g=this._mix[i[f+2]],m=this._mix[i[f+3]]
r=d^p>>>8^p<<24^g>>>16^g<<16^m>>>24^m<<8,i[f]=r>>>24&255,i[f+1]=r>>16&255,i[f+2]=r>>8&255,i[f+3]=255&r}}r=i[13],i[13]=i[9],i[9]=i[5],i[5]=i[1],i[1]=r,r=i[14],a=i[10],i[14]=i[6],i[10]=i[2],i[6]=r,i[2]=a,r=i[15],a=i[11],n=i[7],i[15]=i[3],i[11]=r,i[7]=a,i[3]=n
for(var v=0;v<16;++v)i[v]=this._inv_s[i[v]],i[v]^=t[v]
return i}},{key:"_encrypt",value:function(e,t){var r,a,n,i=this._s,o=new Uint8Array(16)
o.set(e)
for(var s=0;s<16;++s)o[s]^=t[s]
for(var c=1;c<this._cyclesOfRepetition;c++){for(var l=0;l<16;++l)o[l]=i[o[l]]
n=o[1],o[1]=o[5],o[5]=o[9],o[9]=o[13],o[13]=n,n=o[2],a=o[6],o[2]=o[10],o[6]=o[14],o[10]=n,o[14]=a,n=o[3],a=o[7],r=o[11],o[3]=o[15],o[7]=n,o[11]=a,o[15]=r
for(var u=0;u<16;u+=4){var h=o[u+0],f=o[u+1],d=o[u+2],p=o[u+3]
r=h^f^d^p,o[u+0]^=r^this._mixCol[h^f],o[u+1]^=r^this._mixCol[f^d],o[u+2]^=r^this._mixCol[d^p],o[u+3]^=r^this._mixCol[p^h]}for(var g=0,m=16*c;g<16;++g,++m)o[g]^=t[m]}for(var v=0;v<16;++v)o[v]=i[o[v]]
n=o[1],o[1]=o[5],o[5]=o[9],o[9]=o[13],o[13]=n,n=o[2],a=o[6],o[2]=o[10],o[6]=o[14],o[10]=n,o[14]=a,n=o[3],a=o[7],r=o[11],o[3]=o[15],o[7]=n,o[11]=a,o[15]=r
for(var b=0,y=this._keySize;b<16;++b,++y)o[b]^=t[y]
return o}},{key:"_decryptBlock2",value:function(e,t){for(var r=e.length,a=this.buffer,n=this.bufferPosition,i=[],o=this.iv,s=0;s<r;++s)if(a[n]=e[s],!(++n<16)){for(var c=this._decrypt(a,this._key),l=0;l<16;++l)c[l]^=o[l]
o=a,i.push(c),a=new Uint8Array(16),n=0}if(this.buffer=a,this.bufferLength=n,this.iv=o,0===i.length)return new Uint8Array(0)
var u=16*i.length
if(t){var h=i[i.length-1],f=h[15]
if(f<=16){for(var d=15,p=16-f;d>=p;--d)if(h[d]!==f){f=0
break}u-=f,i[i.length-1]=h.subarray(0,16-f)}}for(var g=new Uint8Array(u),m=0,v=0,b=i.length;m<b;++m,v+=16)g.set(i[m],v)
return g}},{key:"decryptBlock",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=e.length,n=this.buffer,i=this.bufferPosition
if(r)this.iv=r
else{for(var o=0;i<16&&o<a;++o,++i)n[i]=e[o]
if(i<16)return this.bufferLength=i,new Uint8Array(0)
this.iv=n,e=e.subarray(16)}return this.buffer=new Uint8Array(16),this.bufferLength=0,this.decryptBlock=this._decryptBlock2,this.decryptBlock(e,t)}},{key:"encrypt",value:function(e,t){var r=e.length,a=this.buffer,n=this.bufferPosition,i=[]
t||(t=new Uint8Array(16))
for(var o=0;o<r;++o)if(a[n]=e[o],!(++n<16)){for(var s=0;s<16;++s)a[s]^=t[s]
var c=this._encrypt(a,this._key)
t=c,i.push(c),a=new Uint8Array(16),n=0}if(this.buffer=a,this.bufferLength=n,this.iv=t,0===i.length)return new Uint8Array(0)
for(var l=16*i.length,u=new Uint8Array(l),h=0,f=0,d=i.length;h<d;++h,f+=16)u.set(i[h],f)
return u}}]),e}(),A=function(e){s(r,e)
var t=l(r)
function r(e){var a
return f(this,r),(a=t.call(this))._cyclesOfRepetition=10,a._keySize=160,a._rcon=new Uint8Array([141,1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145,57,114,228,211,189,97,194,159,37,74,148,51,102,204,131,29,58,116,232,203,141,1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145,57,114,228,211,189,97,194,159,37,74,148,51,102,204,131,29,58,116,232,203,141,1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145,57,114,228,211,189,97,194,159,37,74,148,51,102,204,131,29,58,116,232,203,141,1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145,57,114,228,211,189,97,194,159,37,74,148,51,102,204,131,29,58,116,232,203,141,1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145,57,114,228,211,189,97,194,159,37,74,148,51,102,204,131,29,58,116,232,203,141]),a._key=a._expandKey(e),a}return p(r,[{key:"_expandKey",value:function(e){var t=this._s,r=this._rcon,a=new Uint8Array(176)
a.set(e)
for(var n=16,i=1;n<176;++i){var o=a[n-3],s=a[n-2],c=a[n-1],l=a[n-4]
o=t[o],s=t[s],c=t[c],l=t[l],o^=r[i]
for(var u=0;u<4;++u)a[n]=o^=a[n-16],a[++n]=s^=a[n-16],a[++n]=c^=a[n-16],a[++n]=l^=a[n-16],n++}return a}}]),r}(C)
t.AES128Cipher=A
var O=function(e){s(r,e)
var t=l(r)
function r(e){var a
return f(this,r),(a=t.call(this))._cyclesOfRepetition=14,a._keySize=224,a._key=a._expandKey(e),a}return p(r,[{key:"_expandKey",value:function(e){var t=this._s,r=new Uint8Array(240)
r.set(e)
for(var a,n,i,o,s=1,c=32,l=1;c<240;++l){c%32==16?(a=t[a],n=t[n],i=t[i],o=t[o]):c%32==0&&(a=r[c-3],n=r[c-2],i=r[c-1],o=r[c-4],a=t[a],n=t[n],i=t[i],o=t[o],a^=s,(s<<=1)>=256&&(s=255&(27^s)))
for(var u=0;u<4;++u)r[c]=a^=r[c-32],r[++c]=n^=r[c-32],r[++c]=i^=r[c-32],r[++c]=o^=r[c-32],c++}return r}}]),r}(C)
t.AES256Cipher=O
var T=function(){function e(e,t){if(e.length!==t.length)return!1
for(var r=0;r<e.length;r++)if(e[r]!==t[r])return!1
return!0}function t(){}return t.prototype={checkOwnerPassword:function(t,r,a,n){var i=new Uint8Array(t.length+56)
return i.set(t,0),i.set(r,t.length),i.set(a,t.length+r.length),e(w(i,0,i.length),n)},checkUserPassword:function(t,r,a){var n=new Uint8Array(t.length+8)
return n.set(t,0),n.set(r,t.length),e(w(n,0,n.length),a)},getOwnerKey:function(e,t,r,a){var n=new Uint8Array(e.length+56)
n.set(e,0),n.set(t,e.length),n.set(r,e.length+t.length)
var i=w(n,0,n.length)
return new O(i).decryptBlock(a,!1,new Uint8Array(16))},getUserKey:function(e,t,r){var a=new Uint8Array(e.length+8)
a.set(e,0),a.set(t,e.length)
var n=w(a,0,a.length)
return new O(n).decryptBlock(r,!1,new Uint8Array(16))}},t}()
t.PDF17=T
var I=function(){function e(e,t){var r=new Uint8Array(e.length+t.length)
return r.set(e,0),r.set(t,e.length),r}function t(t,r,a){for(var n=w(r,0,r.length).subarray(0,32),i=[0],o=0;o<64||i[i.length-1]>o-32;){var s=t.length+n.length+a.length,c=new Uint8Array(64*s),l=e(t,n)
l=e(l,a)
for(var u=0,h=0;u<64;u++,h+=s)c.set(l,h)
i=new A(n.subarray(0,16)).encrypt(c,n.subarray(16,32))
for(var f=0,d=0;d<16;d++)f*=1,f%=3,f+=(i[d]>>>0)%3,f%=3
0===f?n=w(i,0,i.length):1===f?n=S(i,0,i.length):2===f&&(n=k(i,0,i.length)),o++}return n.subarray(0,32)}function r(){}function a(e,t){if(e.length!==t.length)return!1
for(var r=0;r<e.length;r++)if(e[r]!==t[r])return!1
return!0}return r.prototype={hash:function(e,r,a){return t(e,r,a)},checkOwnerPassword:function(e,r,n,i){var o=new Uint8Array(e.length+56)
return o.set(e,0),o.set(r,e.length),o.set(n,e.length+r.length),a(t(e,o,n),i)},checkUserPassword:function(e,r,n){var i=new Uint8Array(e.length+8)
return i.set(e,0),i.set(r,e.length),a(t(e,i,[]),n)},getOwnerKey:function(e,r,a,n){var i=new Uint8Array(e.length+56)
i.set(e,0),i.set(r,e.length),i.set(a,e.length+r.length)
var o=t(e,i,a)
return new O(o).decryptBlock(n,!1,new Uint8Array(16))},getUserKey:function(e,r,a){var n=new Uint8Array(e.length+8)
n.set(e,0),n.set(r,e.length)
var i=t(e,n,[])
return new O(i).decryptBlock(a,!1,new Uint8Array(16))}},r}()
t.PDF20=I
var E=function(){function e(e,t){this.StringCipherConstructor=e,this.StreamCipherConstructor=t}return e.prototype={createStream:function(e,t){var r=new this.StreamCipherConstructor
return new i.DecryptStream(e,t,(function(e,t){return r.decryptBlock(e,t)}))},decryptString:function(e){var t=new this.StringCipherConstructor,r=(0,a.stringToBytes)(e)
return r=t.decryptBlock(r,!0),(0,a.bytesToString)(r)},encryptString:function(e){var t=new this.StringCipherConstructor
if(t instanceof C){var r=e.length,n=16-r%16
16!==n&&(e=e.padEnd(16*Math.ceil(r/16),String.fromCharCode(n)))
var i=new Uint8Array(16)
if("undefined"!=typeof crypto)crypto.getRandomValues(i)
else for(var o=0;o<16;o++)i[o]=Math.floor(256*Math.random())
var s=(0,a.stringToBytes)(e)
s=t.encrypt(s,i)
var c=new Uint8Array(16+s.length)
return c.set(i),c.set(s,16),(0,a.bytesToString)(c)}var l=(0,a.stringToBytes)(e)
return l=t.encrypt(l),(0,a.bytesToString)(l)}},e}(),P=function(){var e=new Uint8Array([40,191,78,94,78,117,138,65,100,0,78,86,255,250,1,8,46,46,0,182,208,104,62,128,47,12,169,254,100,83,105,122])
function t(t,r,a,n,i,o,s,c){var l,u,h=40+a.length+t.length,f=new Uint8Array(h),d=0
if(r)for(u=Math.min(32,r.length);d<u;++d)f[d]=r[d]
for(l=0;d<32;)f[d++]=e[l++]
for(l=0,u=a.length;l<u;++l)f[d++]=a[l]
for(f[d++]=255&i,f[d++]=i>>8&255,f[d++]=i>>16&255,f[d++]=i>>>24&255,l=0,u=t.length;l<u;++l)f[d++]=t[l]
o>=4&&!c&&(f[d++]=255,f[d++]=255,f[d++]=255,f[d++]=255)
var p=b(f,0,d),m=s>>3
if(o>=3)for(l=0;l<50;++l)p=b(p,0,m)
var v,y=p.subarray(0,m)
if(o>=3){for(d=0;d<32;++d)f[d]=e[d]
for(l=0,u=t.length;l<u;++l)f[d++]=t[l]
v=new g(y).encryptBlock(b(f,0,d)),u=y.length
var w,k=new Uint8Array(u)
for(l=1;l<=19;++l){for(w=0;w<u;++w)k[w]=y[w]^l
v=new g(k).encryptBlock(v)}for(l=0,u=v.length;l<u;++l)if(n[l]!==v[l])return null}else for(l=0,u=(v=new g(y).encryptBlock(e)).length;l<u;++l)if(n[l]!==v[l])return null
return y}var r=n.Name.get("Identity")
function i(i,o,s){var c=i.get("Filter")
if(!(0,n.isName)(c,"Standard"))throw new a.FormatError("unknown encryption method")
this.dict=i
var l=i.get("V")
if(!Number.isInteger(l)||1!==l&&2!==l&&4!==l&&5!==l)throw new a.FormatError("unsupported encryption algorithm")
this.algorithm=l
var u=i.get("Length")
if(!u)if(l<=3)u=40
else{var h=i.get("CF"),f=i.get("StmF")
if((0,n.isDict)(h)&&(0,n.isName)(f)){h.suppressEncryption=!0
var d=h.get(f.name);(u=d&&d.get("Length")||128)<40&&(u<<=3)}}if(!Number.isInteger(u)||u<40||u%8!=0)throw new a.FormatError("invalid key length")
var p=(0,a.stringToBytes)(i.get("O")).subarray(0,32),m=(0,a.stringToBytes)(i.get("U")).subarray(0,32),v=i.get("P"),y=i.get("R"),w=(4===l||5===l)&&!1!==i.get("EncryptMetadata")
this.encryptMetadata=w
var k,S,x=(0,a.stringToBytes)(o)
if(s){if(6===y)try{s=(0,a.utf8StringToString)(s)}catch(B){(0,a.warn)("CipherTransformFactory: Unable to convert UTF8 encoded password.")}k=(0,a.stringToBytes)(s)}if(5!==l)S=t(x,k,p,m,v,y,u,w)
else{var C=(0,a.stringToBytes)(i.get("O")).subarray(32,40),A=(0,a.stringToBytes)(i.get("O")).subarray(40,48),O=(0,a.stringToBytes)(i.get("U")).subarray(0,48),E=(0,a.stringToBytes)(i.get("U")).subarray(32,40),P=(0,a.stringToBytes)(i.get("U")).subarray(40,48),_=(0,a.stringToBytes)(i.get("OE")),F=(0,a.stringToBytes)(i.get("UE"));(0,a.stringToBytes)(i.get("Perms"))
S=function(e,t,r,a,n,i,o,s,c,l,u,h){if(t){var f=Math.min(127,t.length)
t=t.subarray(0,f)}else t=[]
var d
return(d=6===e?new I:new T).checkUserPassword(t,s,o)?d.getUserKey(t,c,u):t.length&&d.checkOwnerPassword(t,a,i,r)?d.getOwnerKey(t,n,i,l):null}(y,k,p,C,A,O,m,E,P,_,F)}if(!S&&!s)throw new a.PasswordException("No password given",a.PasswordResponses.NEED_PASSWORD)
if(!S&&s&&(S=t(x,function(t,r,a,n){var i,o,s=new Uint8Array(32),c=0
for(o=Math.min(32,t.length);c<o;++c)s[c]=t[c]
for(i=0;c<32;)s[c++]=e[i++]
var l,u=b(s,0,c),h=n>>3
if(a>=3)for(i=0;i<50;++i)u=b(u,0,u.length)
if(a>=3){l=r
var f,d=new Uint8Array(h)
for(i=19;i>=0;i--){for(f=0;f<h;++f)d[f]=u[f]^i
l=new g(d).encryptBlock(l)}}else l=new g(u.subarray(0,h)).encryptBlock(r)
return l}(k,p,y,u),p,m,v,y,u,w)),!S)throw new a.PasswordException("Incorrect Password",a.PasswordResponses.INCORRECT_PASSWORD)
if(this.encryptionKey=S,l>=4){var R=i.get("CF");(0,n.isDict)(R)&&(R.suppressEncryption=!0),this.cf=R,this.stmf=i.get("StmF")||r,this.strf=i.get("StrF")||r,this.eff=i.get("EFF")||this.stmf}}function o(e,t,r,a){var n,i,o=new Uint8Array(r.length+9)
for(n=0,i=r.length;n<i;++n)o[n]=r[n]
return o[n++]=255&e,o[n++]=e>>8&255,o[n++]=e>>16&255,o[n++]=255&t,o[n++]=t>>8&255,a&&(o[n++]=115,o[n++]=65,o[n++]=108,o[n++]=84),b(o,0,n).subarray(0,Math.min(r.length+5,16))}function s(e,t,r,i,s){if(!(0,n.isName)(t))throw new a.FormatError("Invalid crypt filter name.")
var c,l=e.get(t.name)
if(null!=l&&(c=l.get("CFM")),!c||"None"===c.name)return function(){return new x}
if("V2"===c.name)return function(){return new g(o(r,i,s,!1))}
if("AESV2"===c.name)return function(){return new A(o(r,i,s,!0))}
if("AESV3"===c.name)return function(){return new O(s)}
throw new a.FormatError("Unknown crypto method")}return i.prototype={createCipherTransform:function(e,t){if(4===this.algorithm||5===this.algorithm)return new E(s(this.cf,this.stmf,e,t,this.encryptionKey),s(this.cf,this.strf,e,t,this.encryptionKey))
var r=o(e,t,this.encryptionKey,!1),a=function(){return new g(r)}
return new E(a,a)}},i}()
t.CipherTransformFactory=P},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.ColorSpace=void 0
var a,n=(a=r(2))&&a.__esModule?a:{default:a},i=r(5),o=r(202),s=r(205)
function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,a=d(e)
if(t){var n=d(this).constructor
r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments)
return f(this,r)}}function f(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t,r,a,n,i,o){try{var s=e[i](o),c=s.value}catch(l){return void r(l)}s.done?t(c):Promise.resolve(c).then(a,n)}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var r=0;r<t.length;r++){var a=t[r]
a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function v(e,t,r){return t&&m(e.prototype,t),r&&m(e,r),e}var b=function(){function e(t,r){g(this,e),this.constructor===e&&(0,i.unreachable)("Cannot initialize ColorSpace."),this.name=t,this.numComps=r}var t,r
return v(e,[{key:"getRgb",value:function(e,t){var r=new Uint8ClampedArray(3)
return this.getRgbItem(e,t,r,0),r}},{key:"getRgbItem",value:function(e,t,r,a){(0,i.unreachable)("Should not call ColorSpace.getRgbItem")}},{key:"getRgbBuffer",value:function(e,t,r,a,n,o,s){(0,i.unreachable)("Should not call ColorSpace.getRgbBuffer")}},{key:"getOutputLength",value:function(e,t){(0,i.unreachable)("Should not call ColorSpace.getOutputLength")}},{key:"isPassthrough",value:function(e){return!1}},{key:"isDefaultDecode",value:function(t,r){return e.isDefaultDecode(t,this.numComps)}},{key:"fillRgb",value:function(e,t,r,a,n,i,o,s,c){var l=t*r,u=null,h=1<<o,f=r!==n||t!==a
if(this.isPassthrough(o))u=s
else if(1===this.numComps&&l>h&&"DeviceGray"!==this.name&&"DeviceRGB"!==this.name){for(var d=o<=8?new Uint8Array(h):new Uint16Array(h),p=0;p<h;p++)d[p]=p
var g=new Uint8ClampedArray(3*h)
if(this.getRgbBuffer(d,0,h,g,0,o,0),f){u=new Uint8Array(3*l)
for(var m=0,v=0;v<l;++v){var b=3*s[v]
u[m++]=g[b],u[m++]=g[b+1],u[m++]=g[b+2]}}else for(var y=0,w=0;w<l;++w){var k=3*s[w]
e[y++]=g[k],e[y++]=g[k+1],e[y++]=g[k+2],y+=c}}else f?(u=new Uint8ClampedArray(3*l),this.getRgbBuffer(s,0,l,u,0,o,0)):this.getRgbBuffer(s,0,a*i,e,0,o,c)
if(u)if(f)(function(e,t,r,a,n,i,o){o=1!==o?0:o
for(var s,c=r/n,l=a/i,u=0,h=new Uint16Array(n),f=3*r,d=0;d<n;d++)h[d]=3*Math.floor(d*c)
for(var p=0;p<i;p++)for(var g=Math.floor(p*l)*f,m=0;m<n;m++)s=g+h[m],t[u++]=e[s++],t[u++]=e[s++],t[u++]=e[s++],u+=o})(u,e,t,r,a,n,c)
else for(var S=0,x=0,C=0,A=a*i;C<A;C++)e[S++]=u[x++],e[S++]=u[x++],e[S++]=u[x++],S+=c}},{key:"usesZeroToOneRange",get:function(){return(0,i.shadow)(this,"usesZeroToOneRange",!0)}}],[{key:"_cache",value:function(e,t,r,a){if(!r)throw new Error('ColorSpace._cache - expected "localColorSpaceCache" argument.')
if(!a)throw new Error('ColorSpace._cache - expected "parsedColorSpace" argument.')
var n,i
e instanceof o.Ref&&(i=e,e=t.fetch(e)),e instanceof o.Name&&(n=e.name),(n||i)&&r.set(n,i,a)}},{key:"getCached",value:function(e,t,r){if(!r)throw new Error('ColorSpace.getCached - expected "localColorSpaceCache" argument.')
if(e instanceof o.Ref){var a=r.getByRef(e)
if(a)return a
try{e=t.fetch(e)}catch(i){if(i instanceof s.MissingDataException)throw i}}if(e instanceof o.Name){var n=r.getByName(e.name)
if(n)return n}return null}},{key:"parseAsync",value:(t=n.default.mark((function e(t){var r,a,i,o,s,c,l
return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.cs,a=t.xref,i=t.resources,o=void 0===i?null:i,s=t.pdfFunctionFactory,c=t.localColorSpaceCache,l=this._parse(r,a,o,s),this._cache(r,a,c,l),e.abrupt("return",l)
case 4:case"end":return e.stop()}}),e,this)})),r=function(){var e=this,r=arguments
return new Promise((function(a,n){var i=t.apply(e,r)
function o(e){p(i,a,n,o,s,"next",e)}function s(e){p(i,a,n,o,s,"throw",e)}o(void 0)}))},function(e){return r.apply(this,arguments)})},{key:"parse",value:function(e){var t=e.cs,r=e.xref,a=e.resources,n=void 0===a?null:a,i=e.pdfFunctionFactory,o=e.localColorSpaceCache,s=this.getCached(t,r,o)
if(s)return s
var c=this._parse(t,r,n,i)
return this._cache(t,r,o,c),c}},{key:"_parse",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3?arguments[3]:void 0
if(e=t.fetchIfRef(e),(0,o.isName)(e))switch(e.name){case"DeviceGray":case"G":return this.singletons.gray
case"DeviceRGB":case"RGB":return this.singletons.rgb
case"DeviceCMYK":case"CMYK":return this.singletons.cmyk
case"Pattern":return new w(null)
default:if((0,o.isDict)(r)){var n=r.get("ColorSpace")
if((0,o.isDict)(n)){var s=n.get(e.name)
if(s){if((0,o.isName)(s))return this._parse(s,t,r,a)
e=s
break}}}throw new i.FormatError("Unrecognized ColorSpace: ".concat(e.name))}if(Array.isArray(e)){var c,l,u,h,f,d,p=t.fetchIfRef(e[0]).name
switch(p){case"DeviceGray":case"G":return this.singletons.gray
case"DeviceRGB":case"RGB":return this.singletons.rgb
case"DeviceCMYK":case"CMYK":return this.singletons.cmyk
case"CalGray":return h=(c=t.fetchIfRef(e[1])).getArray("WhitePoint"),f=c.getArray("BlackPoint"),d=c.get("Gamma"),new A(h,f,d)
case"CalRGB":h=(c=t.fetchIfRef(e[1])).getArray("WhitePoint"),f=c.getArray("BlackPoint"),d=c.getArray("Gamma")
var g=c.getArray("Matrix")
return new O(h,f,d,g)
case"ICCBased":var m=t.fetchIfRef(e[1]),v=m.dict
l=v.get("N")
var b=v.get("Alternate")
if(b){var S=this._parse(b,t,r,a)
if(S.numComps===l)return S;(0,i.warn)("ICCBased color space: Ignoring incorrect /Alternate entry.")}if(1===l)return this.singletons.gray
if(3===l)return this.singletons.rgb
if(4===l)return this.singletons.cmyk
break
case"Pattern":return(u=e[1]||null)&&(u=this._parse(u,t,r,a)),new w(u)
case"Indexed":case"I":u=this._parse(e[1],t,r,a)
var x=t.fetchIfRef(e[2])+1,C=t.fetchIfRef(e[3])
return new k(u,x,C)
case"Separation":case"DeviceN":var I=t.fetchIfRef(e[1])
l=Array.isArray(I)?I.length:1,u=this._parse(e[2],t,r,a)
var E=a.create(e[3])
return new y(l,u,E)
case"Lab":h=(c=t.fetchIfRef(e[1])).getArray("WhitePoint"),f=c.getArray("BlackPoint")
var P=c.getArray("Range")
return new T(h,f,P)
default:throw new i.FormatError("Unimplemented ColorSpace object: ".concat(p))}}throw new i.FormatError("Unrecognized ColorSpace object: ".concat(e))}},{key:"isDefaultDecode",value:function(e,t){if(!Array.isArray(e))return!0
if(2*t!==e.length)return(0,i.warn)("The decode map is not the correct length"),!0
for(var r=0,a=e.length;r<a;r+=2)if(0!==e[r]||1!==e[r+1])return!1
return!0}},{key:"singletons",get:function(){return(0,i.shadow)(this,"singletons",{get gray(){return(0,i.shadow)(this,"gray",new S)},get rgb(){return(0,i.shadow)(this,"rgb",new x)},get cmyk(){return(0,i.shadow)(this,"cmyk",new C)}})}}]),e}()
t.ColorSpace=b
var y=function(e){l(r,e)
var t=h(r)
function r(e,a,n){var i
return g(this,r),(i=t.call(this,"Alternate",e)).base=a,i.tintFn=n,i.tmpBuf=new Float32Array(a.numComps),i}return v(r,[{key:"getRgbItem",value:function(e,t,r,a){var n=this.tmpBuf
this.tintFn(e,t,n,0),this.base.getRgbItem(n,0,r,a)}},{key:"getRgbBuffer",value:function(e,t,r,a,n,i,o){var s,c,l=this.tintFn,u=this.base,h=1/((1<<i)-1),f=u.numComps,d=u.usesZeroToOneRange,p=(u.isPassthrough(8)||!d)&&0===o,g=p?n:0,m=p?a:new Uint8ClampedArray(f*r),v=this.numComps,b=new Float32Array(v),y=new Float32Array(f)
for(s=0;s<r;s++){for(c=0;c<v;c++)b[c]=e[t++]*h
if(l(b,0,y,0),d)for(c=0;c<f;c++)m[g++]=255*y[c]
else u.getRgbItem(y,0,m,g),g+=f}p||u.getRgbBuffer(m,0,r,a,n,8,o)}},{key:"getOutputLength",value:function(e,t){return this.base.getOutputLength(e*this.base.numComps/this.numComps,t)}}]),r}(b),w=function(e){l(r,e)
var t=h(r)
function r(e){var a
return g(this,r),(a=t.call(this,"Pattern",null)).base=e,a}return v(r,[{key:"isDefaultDecode",value:function(e,t){(0,i.unreachable)("Should not call PatternCS.isDefaultDecode")}}]),r}(b),k=function(e){l(r,e)
var t=h(r)
function r(e,a,n){var s
g(this,r),(s=t.call(this,"Indexed",1)).base=e,s.highVal=a
var c=e.numComps*a
if(s.lookup=new Uint8Array(c),(0,o.isStream)(n)){var l=n.getBytes(c)
s.lookup.set(l)}else{if("string"!=typeof n)throw new i.FormatError("IndexedCS - unrecognized lookup table: ".concat(n))
for(var u=0;u<c;++u)s.lookup[u]=255&n.charCodeAt(u)}return s}return v(r,[{key:"getRgbItem",value:function(e,t,r,a){var n=this.base.numComps,i=e[t]*n
this.base.getRgbBuffer(this.lookup,i,1,r,a,8,0)}},{key:"getRgbBuffer",value:function(e,t,r,a,n,i,o){for(var s=this.base,c=s.numComps,l=s.getOutputLength(c,o),u=this.lookup,h=0;h<r;++h){var f=e[t++]*c
s.getRgbBuffer(u,f,1,a,n,8,o),n+=l}}},{key:"getOutputLength",value:function(e,t){return this.base.getOutputLength(e*this.base.numComps,t)}},{key:"isDefaultDecode",value:function(e,t){return!Array.isArray(e)||(2!==e.length?((0,i.warn)("Decode map length is not correct"),!0):!Number.isInteger(t)||t<1?((0,i.warn)("Bits per component is not correct"),!0):0===e[0]&&e[1]===(1<<t)-1)}}]),r}(b),S=function(e){l(r,e)
var t=h(r)
function r(){return g(this,r),t.call(this,"DeviceGray",1)}return v(r,[{key:"getRgbItem",value:function(e,t,r,a){var n=255*e[t]
r[a]=r[a+1]=r[a+2]=n}},{key:"getRgbBuffer",value:function(e,t,r,a,n,i,o){for(var s=255/((1<<i)-1),c=t,l=n,u=0;u<r;++u){var h=s*e[c++]
a[l++]=h,a[l++]=h,a[l++]=h,l+=o}}},{key:"getOutputLength",value:function(e,t){return e*(3+t)}}]),r}(b),x=function(e){l(r,e)
var t=h(r)
function r(){return g(this,r),t.call(this,"DeviceRGB",3)}return v(r,[{key:"getRgbItem",value:function(e,t,r,a){r[a]=255*e[t],r[a+1]=255*e[t+1],r[a+2]=255*e[t+2]}},{key:"getRgbBuffer",value:function(e,t,r,a,n,i,o){if(8!==i||0!==o)for(var s=255/((1<<i)-1),c=t,l=n,u=0;u<r;++u)a[l++]=s*e[c++],a[l++]=s*e[c++],a[l++]=s*e[c++],l+=o
else a.set(e.subarray(t,t+3*r),n)}},{key:"getOutputLength",value:function(e,t){return e*(3+t)/3|0}},{key:"isPassthrough",value:function(e){return 8===e}}]),r}(b),C=function(){function e(e,t,r,a,n){var i=e[t]*r,o=e[t+1]*r,s=e[t+2]*r,c=e[t+3]*r
a[n]=255+i*(-4.387332384609988*i+54.48615194189176*o+18.82290502165302*s+212.25662451639585*c-285.2331026137004)+o*(1.7149763477362134*o-5.6096736904047315*s+-17.873870861415444*c-5.497006427196366)+s*(-2.5217340131683033*s-21.248923337353073*c+17.5119270841813)+c*(-21.86122147463605*c-189.48180835922747),a[n+1]=255+i*(8.841041422036149*i+60.118027045597366*o+6.871425592049007*s+31.159100130055922*c-79.2970844816548)+o*(-15.310361306967817*o+17.575251261109482*s+131.35250912493976*c-190.9453302588951)+s*(4.444339102852739*s+9.8632861493405*c-24.86741582555878)+c*(-20.737325471181034*c-187.80453709719578),a[n+2]=255+i*(.8842522430003296*i+8.078677503112928*o+30.89978309703729*s-.23883238689178934*c-14.183576799673286)+o*(10.49593273432072*o+63.02378494754052*s+50.606957656360734*c-112.23884253719248)+s*(.03296041114873217*s+115.60384449646641*c-193.58209356861505)+c*(-22.33816807309886*c-180.12613974708367)}return function(t){l(a,t)
var r=h(a)
function a(){return g(this,a),r.call(this,"DeviceCMYK",4)}return v(a,[{key:"getRgbItem",value:function(t,r,a,n){e(t,r,1,a,n)}},{key:"getRgbBuffer",value:function(t,r,a,n,i,o,s){for(var c=1/((1<<o)-1),l=0;l<a;l++)e(t,r,c,n,i),r+=4,i+=3+s}},{key:"getOutputLength",value:function(e,t){return e/4*(3+t)|0}}]),a}(b)}(),A=function(){function e(e,t,r,a,n,i){var o=t[r]*i,s=Math.pow(o,e.G),c=e.YW*s,l=Math.max(295.8*Math.pow(c,.3333333333333333)-40.8,0)
a[n]=l,a[n+1]=l,a[n+2]=l}return function(t){l(a,t)
var r=h(a)
function a(e,t,n){var o
if(g(this,a),o=r.call(this,"CalGray",1),!e)throw new i.FormatError("WhitePoint missing - required for color space CalGray")
if(t=t||[0,0,0],n=n||1,o.XW=e[0],o.YW=e[1],o.ZW=e[2],o.XB=t[0],o.YB=t[1],o.ZB=t[2],o.G=n,o.XW<0||o.ZW<0||1!==o.YW)throw new i.FormatError("Invalid WhitePoint components for ".concat(o.name)+", no fallback available")
return(o.XB<0||o.YB<0||o.ZB<0)&&((0,i.info)("Invalid BlackPoint for ".concat(o.name,", falling back to default.")),o.XB=o.YB=o.ZB=0),0===o.XB&&0===o.YB&&0===o.ZB||(0,i.warn)("".concat(o.name,", BlackPoint: XB: ").concat(o.XB,", YB: ").concat(o.YB,", ")+"ZB: ".concat(o.ZB,", only default values are supported.")),o.G<1&&((0,i.info)("Invalid Gamma: ".concat(o.G," for ").concat(o.name,", ")+"falling back to default."),o.G=1),o}return v(a,[{key:"getRgbItem",value:function(t,r,a,n){e(this,t,r,a,n,1)}},{key:"getRgbBuffer",value:function(t,r,a,n,i,o,s){for(var c=1/((1<<o)-1),l=0;l<a;++l)e(this,t,r,n,i,c),r+=1,i+=3+s}},{key:"getOutputLength",value:function(e,t){return e*(3+t)}}]),a}(b)}(),O=function(){var e=new Float32Array([.8951,.2664,-.1614,-.7502,1.7135,.0367,.0389,-.0685,1.0296]),t=new Float32Array([.9869929,-.1470543,.1599627,.4323053,.5183603,.0492912,-.0085287,.0400428,.9684867]),r=new Float32Array([3.2404542,-1.5371385,-.4985314,-.969266,1.8760108,.041556,.0556434,-.2040259,1.0572252]),a=new Float32Array([1,1,1]),n=new Float32Array(3),o=new Float32Array(3),s=new Float32Array(3),c=Math.pow(24/116,3)/8
function u(e,t,r){r[0]=e[0]*t[0]+e[1]*t[1]+e[2]*t[2],r[1]=e[3]*t[0]+e[4]*t[1]+e[5]*t[2],r[2]=e[6]*t[0]+e[7]*t[1]+e[8]*t[2]}function f(e){return e<=.0031308?d(0,1,12.92*e):e>=.99554525?1:d(0,1,1.055*Math.pow(e,1/2.4)-.055)}function d(e,t,r){return Math.max(e,Math.min(t,r))}function p(e){return e<0?-p(-e):e>8?Math.pow((e+16)/116,3):e*c}function m(i,c,l,h,g,m){var v=d(0,1,c[l]*m),b=d(0,1,c[l+1]*m),y=d(0,1,c[l+2]*m),w=1===v?1:Math.pow(v,i.GR),k=1===b?1:Math.pow(b,i.GG),S=1===y?1:Math.pow(y,i.GB),x=i.MXA*w+i.MXB*k+i.MXC*S,C=i.MYA*w+i.MYB*k+i.MYC*S,A=i.MZA*w+i.MZB*k+i.MZC*S,O=o
O[0]=x,O[1]=C,O[2]=A
var T=s;(function(r,a,i){if(1===r[0]&&1===r[2])return i[0]=a[0],i[1]=a[1],void(i[2]=a[2])
var o=i
u(e,a,o)
var s=n;(function(e,t,r){r[0]=1*t[0]/e[0],r[1]=1*t[1]/e[1],r[2]=1*t[2]/e[2]})(r,o,s),u(t,s,i)})(i.whitePoint,O,T)
var I=o;(function(e,t,r){if(0===e[0]&&0===e[1]&&0===e[2])return r[0]=t[0],r[1]=t[1],void(r[2]=t[2])
var a=p(0),n=(1-a)/(1-p(e[0])),i=1-n,o=(1-a)/(1-p(e[1])),s=1-o,c=(1-a)/(1-p(e[2])),l=1-c
r[0]=t[0]*n+i,r[1]=t[1]*o+s,r[2]=t[2]*c+l})(i.blackPoint,T,I)
var E=s;(function(r,a,i){var o=i
u(e,a,o)
var s=n;(function(e,t,r){r[0]=.95047*t[0]/e[0],r[1]=1*t[1]/e[1],r[2]=1.08883*t[2]/e[2]})(r,o,s),u(t,s,i)})(a,I,E)
var P=o
u(r,E,P),h[g]=255*f(P[0]),h[g+1]=255*f(P[1]),h[g+2]=255*f(P[2])}return function(e){l(r,e)
var t=h(r)
function r(e,a,n,o){var s
if(g(this,r),s=t.call(this,"CalRGB",3),!e)throw new i.FormatError("WhitePoint missing - required for color space CalRGB")
a=a||new Float32Array(3),n=n||new Float32Array([1,1,1]),o=o||new Float32Array([1,0,0,0,1,0,0,0,1])
var c=e[0],l=e[1],u=e[2]
s.whitePoint=e
var h=a[0],f=a[1],d=a[2]
if(s.blackPoint=a,s.GR=n[0],s.GG=n[1],s.GB=n[2],s.MXA=o[0],s.MYA=o[1],s.MZA=o[2],s.MXB=o[3],s.MYB=o[4],s.MZB=o[5],s.MXC=o[6],s.MYC=o[7],s.MZC=o[8],c<0||u<0||1!==l)throw new i.FormatError("Invalid WhitePoint components for ".concat(s.name)+", no fallback available")
return(h<0||f<0||d<0)&&((0,i.info)("Invalid BlackPoint for ".concat(s.name," [").concat(h,", ").concat(f,", ").concat(d,"], ")+"falling back to default."),s.blackPoint=new Float32Array(3)),(s.GR<0||s.GG<0||s.GB<0)&&((0,i.info)("Invalid Gamma [".concat(s.GR,", ").concat(s.GG,", ").concat(s.GB,"] for ")+"".concat(s.name,", falling back to default.")),s.GR=s.GG=s.GB=1),s}return v(r,[{key:"getRgbItem",value:function(e,t,r,a){m(this,e,t,r,a,1)}},{key:"getRgbBuffer",value:function(e,t,r,a,n,i,o){for(var s=1/((1<<i)-1),c=0;c<r;++c)m(this,e,t,a,n,s),t+=3,n+=3+o}},{key:"getOutputLength",value:function(e,t){return e*(3+t)/3|0}}]),r}(b)}(),T=function(){function e(e){return e>=6/29?e*e*e:108/841*(e-4/29)}function t(e,t,r,a){return r+e*(a-r)/t}function r(r,a,n,i,o,s){var c=a[n],l=a[n+1],u=a[n+2]
!1!==i&&(c=t(c,i,0,100),l=t(l,i,r.amin,r.amax),u=t(u,i,r.bmin,r.bmax)),l>r.amax?l=r.amax:l<r.amin&&(l=r.amin),u>r.bmax?u=r.bmax:u<r.bmin&&(u=r.bmin)
var h,f,d,p=(c+16)/116,g=p+l/500,m=p-u/200,v=r.XW*e(g),b=r.YW*e(p),y=r.ZW*e(m)
r.ZW<1?(h=3.1339*v+-1.617*b+-.4906*y,f=-.9785*v+1.916*b+.0333*y,d=.072*v+-.229*b+1.4057*y):(h=3.2406*v+-1.5372*b+-.4986*y,f=-.9689*v+1.8758*b+.0415*y,d=.0557*v+-.204*b+1.057*y),o[s]=255*Math.sqrt(h),o[s+1]=255*Math.sqrt(f),o[s+2]=255*Math.sqrt(d)}return function(e){l(a,e)
var t=h(a)
function a(e,r,n){var o
if(g(this,a),o=t.call(this,"Lab",3),!e)throw new i.FormatError("WhitePoint missing - required for color space Lab")
if(r=r||[0,0,0],n=n||[-100,100,-100,100],o.XW=e[0],o.YW=e[1],o.ZW=e[2],o.amin=n[0],o.amax=n[1],o.bmin=n[2],o.bmax=n[3],o.XB=r[0],o.YB=r[1],o.ZB=r[2],o.XW<0||o.ZW<0||1!==o.YW)throw new i.FormatError("Invalid WhitePoint components, no fallback available")
return(o.XB<0||o.YB<0||o.ZB<0)&&((0,i.info)("Invalid BlackPoint, falling back to default"),o.XB=o.YB=o.ZB=0),(o.amin>o.amax||o.bmin>o.bmax)&&((0,i.info)("Invalid Range, falling back to defaults"),o.amin=-100,o.amax=100,o.bmin=-100,o.bmax=100),o}return v(a,[{key:"getRgbItem",value:function(e,t,a,n){r(this,e,t,!1,a,n)}},{key:"getRgbBuffer",value:function(e,t,a,n,i,o,s){for(var c=(1<<o)-1,l=0;l<a;l++)r(this,e,t,c,n,i),t+=3,i+=3+s}},{key:"getOutputLength",value:function(e,t){return e*(3+t)/3|0}},{key:"isDefaultDecode",value:function(e,t){return!0}},{key:"usesZeroToOneRange",get:function(){return(0,i.shadow)(this,"usesZeroToOneRange",!1)}}]),a}(b)}()},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.GlobalImageCache=t.LocalGStateCache=t.LocalFunctionCache=t.LocalColorSpaceCache=t.LocalImageCache=void 0
var a=r(5),n=r(202)
function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,a=u(e)
if(t){var n=u(this).constructor
r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments)
return l(this,r)}}function l(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var a=t[r]
a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function d(e,t,r){return t&&f(e.prototype,t),r&&f(e,r),e}var p=function(){function e(t){h(this,e),this.constructor===e&&(0,a.unreachable)("Cannot initialize BaseLocalCache."),t&&t.onlyRefs||(this._nameRefMap=new Map,this._imageMap=new Map),this._imageCache=new n.RefSetCache}return d(e,[{key:"getByName",value:function(e){var t=this._nameRefMap.get(e)
return t?this.getByRef(t):this._imageMap.get(e)||null}},{key:"getByRef",value:function(e){return this._imageCache.get(e)||null}},{key:"set",value:function(e,t,r){(0,a.unreachable)("Abstract method `set` called.")}}]),e}(),g=function(e){o(r,e)
var t=c(r)
function r(){return h(this,r),t.apply(this,arguments)}return d(r,[{key:"set",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2?arguments[2]:void 0
if(!e)throw new Error('LocalImageCache.set - expected "name" argument.')
if(t){if(this._imageCache.has(t))return
return this._nameRefMap.set(e,t),void this._imageCache.put(t,r)}this._imageMap.has(e)||this._imageMap.set(e,r)}}]),r}(p)
t.LocalImageCache=g
var m=function(e){o(r,e)
var t=c(r)
function r(){return h(this,r),t.apply(this,arguments)}return d(r,[{key:"set",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2?arguments[2]:void 0
if(!e&&!t)throw new Error('LocalColorSpaceCache.set - expected "name" and/or "ref" argument.')
if(t){if(this._imageCache.has(t))return
return e&&this._nameRefMap.set(e,t),void this._imageCache.put(t,r)}this._imageMap.has(e)||this._imageMap.set(e,r)}}]),r}(p)
t.LocalColorSpaceCache=m
var v=function(e){o(r,e)
var t=c(r)
function r(e){return h(this,r),t.call(this,{onlyRefs:!0})}return d(r,[{key:"getByName",value:function(e){(0,a.unreachable)("Should not call `getByName` method.")}},{key:"set",value:function(){var e=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0
if(!e)throw new Error('LocalFunctionCache.set - expected "ref" argument.')
this._imageCache.has(e)||this._imageCache.put(e,t)}}]),r}(p)
t.LocalFunctionCache=v
var b=function(e){o(r,e)
var t=c(r)
function r(){return h(this,r),t.apply(this,arguments)}return d(r,[{key:"set",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2?arguments[2]:void 0
if(!e)throw new Error('LocalGStateCache.set - expected "name" argument.')
if(t){if(this._imageCache.has(t))return
return this._nameRefMap.set(e,t),void this._imageCache.put(t,r)}this._imageMap.has(e)||this._imageMap.set(e,r)}}]),r}(p)
t.LocalGStateCache=b
var y=function(){function e(){h(this,e),this._refCache=new n.RefSetCache,this._imageCache=new n.RefSetCache}return d(e,null,[{key:"NUM_PAGES_THRESHOLD",get:function(){return(0,a.shadow)(this,"NUM_PAGES_THRESHOLD",2)}},{key:"MAX_IMAGES_TO_CACHE",get:function(){return(0,a.shadow)(this,"MAX_IMAGES_TO_CACHE",10)}}]),d(e,[{key:"shouldCache",value:function(t,r){var a=this._refCache.get(t)
return!((a?a.size+(a.has(r)?0:1):1)<e.NUM_PAGES_THRESHOLD)&&!(!this._imageCache.has(t)&&this._imageCache.size>=e.MAX_IMAGES_TO_CACHE)}},{key:"addPageIndex",value:function(e,t){var r=this._refCache.get(e)
r||(r=new Set,this._refCache.put(e,r)),r.add(t)}},{key:"getData",value:function(t,r){var a=this._refCache.get(t)
return a?a.size<e.NUM_PAGES_THRESHOLD?null:this._imageCache.has(t)?(a.add(r),this._imageCache.get(t)):null:null}},{key:"setData",value:function(t,r){if(!this._refCache.has(t))throw new Error('GlobalImageCache.setData - expected "addPageIndex" to have been called.')
this._imageCache.has(t)||(this._imageCache.size>=e.MAX_IMAGES_TO_CACHE?(0,a.info)("GlobalImageCache.setData - ignoring image above MAX_IMAGES_TO_CACHE."):this._imageCache.put(t,r))}},{key:"clear",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
e||this._refCache.clear(),this._imageCache.clear()}}]),e}()
t.GlobalImageCache=y},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.getQuadPoints=P,t.MarkupAnnotation=t.AnnotationFactory=t.AnnotationBorderStyle=t.Annotation=void 0
var a,n=(a=r(2))&&a.__esModule?a:{default:a},i=r(5),o=r(207),s=r(202),c=r(220),l=r(205),u=r(223),h=r(209),f=r(224)
function d(e,t,r){return(d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var a=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=y(e)););return e}(e,t)
if(a){var n=Object.getOwnPropertyDescriptor(a,t)
return n.get?n.get.call(r):n.value}})(e,t,r||e)}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,a=y(e)
if(t){var n=y(this).constructor
r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments)
return b(this,r)}}function b(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){var r
if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=C(e))||t&&e&&"number"==typeof e.length){r&&(e=r)
var a=0,n=function(){}
return{s:n,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1
return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next()
return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==r.return||r.return()}finally{if(s)throw i}}}}function k(e,t,r,a,n,i,o){try{var s=e[i](o),c=s.value}catch(l){return void r(l)}s.done?t(c):Promise.resolve(c).then(a,n)}function S(e){return function(){var t=this,r=arguments
return new Promise((function(a,n){var i=e.apply(t,r)
function o(e){k(i,a,n,o,s,"next",e)}function s(e){k(i,a,n,o,s,"throw",e)}o(void 0)}))}}function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return
var r=[],a=!0,n=!1,i=void 0
try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);a=!0);}catch(c){n=!0,i=c}finally{try{a||null==s.return||s.return()}finally{if(n)throw i}}return r}(e,t)||C(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,t){if(e){if("string"==typeof e)return A(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?A(e,t):void 0}}function A(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r]
return a}function O(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function T(e,t){for(var r=0;r<t.length;r++){var a=t[r]
a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function I(e,t,r){return t&&T(e.prototype,t),r&&T(e,r),e}var E=function(){function e(){O(this,e)}return I(e,null,[{key:"create",value:function(e,t,r,a){var n=this
return r.ensureCatalog("acroForm").then((function(i){return r.ensure(n,"_create",[e,t,r,a,i])}))}},{key:"_create",value:function(e,t,r,a,n){var o=e.fetchIfRef(t)
if((0,s.isDict)(o)){var c=(0,s.isRef)(t)?t.toString():"annot_".concat(a.createObjId()),u=o.get("Subtype"),h={xref:e,ref:t,dict:o,subtype:u=(0,s.isName)(u)?u.name:null,id:c,pdfManager:r,acroForm:n instanceof s.Dict?n:s.Dict.empty}
switch(u){case"Link":return new j(h)
case"Text":return new U(h)
case"Widget":var f=(0,l.getInheritableProperty)({dict:o,key:"FT"})
switch(f=(0,s.isName)(f)?f.name:null){case"Tx":return new D(h)
case"Btn":return new L(h)
case"Ch":return new N(h)}return(0,i.warn)('Unimplemented widget field type "'+f+'", falling back to base field type.'),new M(h)
case"Popup":return new q(h)
case"FreeText":return new z(h)
case"Line":return new G(h)
case"Square":return new H(h)
case"Circle":return new W(h)
case"PolyLine":return new X(h)
case"Polygon":return new V(h)
case"Caret":return new Y(h)
case"Ink":return new K(h)
case"Highlight":return new J(h)
case"Underline":return new Z(h)
case"Squiggly":return new Q(h)
case"StrikeOut":return new $(h)
case"Stamp":return new ee(h)
case"FileAttachment":return new te(h)
default:return u?(0,i.warn)('Unimplemented annotation type "'+u+'", falling back to base annotation.'):(0,i.warn)("Annotation is missing the required /Subtype."),new F(h)}}}}]),e}()
function P(e,t){if(!e.has("QuadPoints"))return null
var r=e.getArray("QuadPoints")
if(!Array.isArray(r)||r.length%8>0)return null
for(var a=[],n=0,i=r.length/8;n<i;n++){a.push([])
for(var o=8*n,s=8*n+8;o<s;o+=2){var c=r[o],l=r[o+1]
if(c<t[0]||c>t[2]||l<t[1]||l>t[3])return null
a[n].push({x:c,y:l})}}return a}function _(e,t,r){var a=x(i.Util.getAxialAlignedBoundingBox(t,r),4),n=a[0],o=a[1],s=a[2],c=a[3]
if(n===s||o===c)return[1,0,0,1,e[0],e[1]]
var l=(e[2]-e[0])/(s-n),u=(e[3]-e[1])/(c-o)
return[l,0,0,u,e[0]-n*l,e[1]-o*u]}t.AnnotationFactory=E
var F=function(){function e(t){O(this,e)
var r=t.dict
this.setContents(r.get("Contents")),this.setModificationDate(r.get("M")),this.setFlags(r.get("F")),this.setRectangle(r.getArray("Rect")),this.setColor(r.getArray("C")),this.setBorderStyle(r),this.setAppearance(r),this.data={annotationFlags:this.flags,borderStyle:this.borderStyle,color:this.color,contents:this.contents,hasAppearance:!!this.appearance,id:t.id,modificationDate:this.modificationDate,rect:this.rectangle,subtype:t.subtype}}var t
return I(e,[{key:"_hasFlag",value:function(e,t){return!!(e&t)}},{key:"_isViewable",value:function(e){return!this._hasFlag(e,i.AnnotationFlag.INVISIBLE)&&!this._hasFlag(e,i.AnnotationFlag.HIDDEN)&&!this._hasFlag(e,i.AnnotationFlag.NOVIEW)}},{key:"_isPrintable",value:function(e){return this._hasFlag(e,i.AnnotationFlag.PRINT)&&!this._hasFlag(e,i.AnnotationFlag.INVISIBLE)&&!this._hasFlag(e,i.AnnotationFlag.HIDDEN)}},{key:"setContents",value:function(e){this.contents=(0,i.stringToPDFString)(e||"")}},{key:"setModificationDate",value:function(e){this.modificationDate=(0,i.isString)(e)?e:null}},{key:"setFlags",value:function(e){this.flags=Number.isInteger(e)&&e>0?e:0}},{key:"hasFlag",value:function(e){return this._hasFlag(this.flags,e)}},{key:"setRectangle",value:function(e){Array.isArray(e)&&4===e.length?this.rectangle=i.Util.normalizeRect(e):this.rectangle=[0,0,0,0]}},{key:"setColor",value:function(e){var t=new Uint8ClampedArray(3)
if(Array.isArray(e))switch(e.length){case 0:this.color=null
break
case 1:c.ColorSpace.singletons.gray.getRgbItem(e,0,t,0),this.color=t
break
case 3:c.ColorSpace.singletons.rgb.getRgbItem(e,0,t,0),this.color=t
break
case 4:c.ColorSpace.singletons.cmyk.getRgbItem(e,0,t,0),this.color=t
break
default:this.color=t}else this.color=t}},{key:"setBorderStyle",value:function(e){if(this.borderStyle=new R,(0,s.isDict)(e))if(e.has("BS")){var t=e.get("BS"),r=t.get("Type")
r&&!(0,s.isName)(r,"Border")||(this.borderStyle.setWidth(t.get("W"),this.rectangle),this.borderStyle.setStyle(t.get("S")),this.borderStyle.setDashArray(t.getArray("D")))}else if(e.has("Border")){var a=e.getArray("Border")
Array.isArray(a)&&a.length>=3&&(this.borderStyle.setHorizontalCornerRadius(a[0]),this.borderStyle.setVerticalCornerRadius(a[1]),this.borderStyle.setWidth(a[2],this.rectangle),4===a.length&&this.borderStyle.setDashArray(a[3]))}else this.borderStyle.setWidth(0)}},{key:"setAppearance",value:function(e){this.appearance=null
var t=e.get("AP")
if((0,s.isDict)(t)){var r=t.get("N")
if((0,s.isStream)(r))this.appearance=r
else if((0,s.isDict)(r)){var a=e.get("AS");(0,s.isName)(a)&&r.has(a.name)&&(this.appearance=r.get(a.name))}}}},{key:"loadResources",value:function(e){return this.appearance.dict.getAsync("Resources").then((function(t){if(t)return new o.ObjectLoader(t,e,t.xref).load().then((function(){return t}))}))}},{key:"getOperatorList",value:function(e,t,r,a){if(!this.appearance)return Promise.resolve(new u.OperatorList)
var n=this.appearance,o=this.data,s=n.dict,c=this.loadResources(["ExtGState","ColorSpace","Pattern","Shading","XObject","Font"]),l=s.getArray("BBox")||[0,0,1,1],h=s.getArray("Matrix")||[1,0,0,1,0,0],f=_(o.rect,l,h)
return c.then((function(r){var a=new u.OperatorList
return a.addOp(i.OPS.beginAnnotation,[o.rect,f,h]),e.getOperatorList({stream:n,task:t,resources:r,operatorList:a}).then((function(){return a.addOp(i.OPS.endAnnotation,[]),n.reset(),a}))}))}},{key:"save",value:(t=S(n.default.mark((function e(t,r,a){return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",null)
case 1:case"end":return e.stop()}}),e)}))),function(e,r,a){return t.apply(this,arguments)})},{key:"viewable",get:function(){return 0===this.flags||this._isViewable(this.flags)}},{key:"printable",get:function(){return 0!==this.flags&&this._isPrintable(this.flags)}}]),e}()
t.Annotation=F
var R=function(){function e(){O(this,e),this.width=1,this.style=i.AnnotationBorderStyleType.SOLID,this.dashArray=[3],this.horizontalCornerRadius=0,this.verticalCornerRadius=0}return I(e,[{key:"setWidth",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[0,0,0,0]
if((0,s.isName)(e))this.width=0
else if(Number.isInteger(e)){if(e>0){var r=(t[2]-t[0])/2,a=(t[3]-t[1])/2
r>0&&a>0&&(e>r||e>a)&&((0,i.warn)("AnnotationBorderStyle.setWidth - ignoring width: ".concat(e)),e=1)}this.width=e}}},{key:"setStyle",value:function(e){if((0,s.isName)(e))switch(e.name){case"S":this.style=i.AnnotationBorderStyleType.SOLID
break
case"D":this.style=i.AnnotationBorderStyleType.DASHED
break
case"B":this.style=i.AnnotationBorderStyleType.BEVELED
break
case"I":this.style=i.AnnotationBorderStyleType.INSET
break
case"U":this.style=i.AnnotationBorderStyleType.UNDERLINE}}},{key:"setDashArray",value:function(e){if(Array.isArray(e)&&e.length>0){var t,r=!0,a=!0,n=w(e)
try{for(n.s();!(t=n.n()).done;){var i=t.value
if(!(+i>=0)){r=!1
break}i>0&&(a=!1)}}catch(o){n.e(o)}finally{n.f()}r&&!a?this.dashArray=e:this.width=0}else e&&(this.width=0)}},{key:"setHorizontalCornerRadius",value:function(e){Number.isInteger(e)&&(this.horizontalCornerRadius=e)}},{key:"setVerticalCornerRadius",value:function(e){Number.isInteger(e)&&(this.verticalCornerRadius=e)}}]),e}()
t.AnnotationBorderStyle=R
var B=function(e){g(r,e)
var t=v(r)
function r(e){var a
O(this,r),a=t.call(this,e)
var n=e.dict
if(n.has("IRT")){var o=n.getRaw("IRT")
a.data.inReplyTo=(0,s.isRef)(o)?o.toString():null
var c=n.get("RT")
a.data.replyType=(0,s.isName)(c)?c.name:i.AnnotationReplyType.REPLY}if(a.data.replyType===i.AnnotationReplyType.GROUP){var l=n.get("IRT")
a.data.title=(0,i.stringToPDFString)(l.get("T")||""),a.setContents(l.get("Contents")),a.data.contents=a.contents,l.has("CreationDate")?(a.setCreationDate(l.get("CreationDate")),a.data.creationDate=a.creationDate):a.data.creationDate=null,l.has("M")?(a.setModificationDate(l.get("M")),a.data.modificationDate=a.modificationDate):a.data.modificationDate=null,a.data.hasPopup=l.has("Popup"),l.has("C")?(a.setColor(l.getArray("C")),a.data.color=a.color):a.data.color=null}else a.data.title=(0,i.stringToPDFString)(n.get("T")||""),a.setCreationDate(n.get("CreationDate")),a.data.creationDate=a.creationDate,a.data.hasPopup=n.has("Popup"),n.has("C")||(a.data.color=null)
return a}return I(r,[{key:"setCreationDate",value:function(e){this.creationDate=(0,i.isString)(e)?e:null}}]),r}(F)
t.MarkupAnnotation=B
var M=function(e){g(c,e)
var t,r,a,o=v(c)
function c(e){var t
O(this,c),t=o.call(this,e)
var r=e.dict,a=t.data
t.ref=e.ref,a.annotationType=i.AnnotationType.WIDGET,a.fieldName=t._constructFieldName(r)
var n=(0,l.getInheritableProperty)({dict:r,key:"V",getArray:!0})
a.fieldValue=t._decodeFormValue(n),a.alternativeText=(0,i.stringToPDFString)(r.get("TU")||""),a.defaultAppearance=(0,l.getInheritableProperty)({dict:r,key:"DA"})||e.acroForm.get("DA")||""
var u=(0,l.getInheritableProperty)({dict:r,key:"FT"})
return a.fieldType=(0,s.isName)(u)?u.name:null,t.fieldResources=(0,l.getInheritableProperty)({dict:r,key:"DR"})||e.acroForm.get("DR")||s.Dict.empty,a.fieldFlags=(0,l.getInheritableProperty)({dict:r,key:"Ff"}),(!Number.isInteger(a.fieldFlags)||a.fieldFlags<0)&&(a.fieldFlags=0),a.readOnly=t.hasFieldFlag(i.AnnotationFieldFlag.READONLY),"Sig"===a.fieldType&&(a.fieldValue=null,t.setFlags(i.AnnotationFlag.HIDDEN)),t}return I(c,[{key:"_constructFieldName",value:function(e){if(!e.has("T")&&!e.has("Parent"))return(0,i.warn)("Unknown field name, falling back to empty field name."),""
if(!e.has("Parent"))return(0,i.stringToPDFString)(e.get("T"))
var t=[]
e.has("T")&&t.unshift((0,i.stringToPDFString)(e.get("T")))
for(var r=e;r.has("Parent")&&(r=r.get("Parent"),(0,s.isDict)(r));)r.has("T")&&t.unshift((0,i.stringToPDFString)(r.get("T")))
return t.join(".")}},{key:"_decodeFormValue",value:function(e){return Array.isArray(e)?e.filter((function(e){return(0,i.isString)(e)})).map((function(e){return(0,i.stringToPDFString)(e)})):(0,s.isName)(e)?(0,i.stringToPDFString)(e.name):(0,i.isString)(e)?(0,i.stringToPDFString)(e):null}},{key:"hasFieldFlag",value:function(e){return!!(this.data.fieldFlags&e)}},{key:"getOperatorList",value:function(e,t,r,a){var n=this
return r?Promise.resolve(new u.OperatorList):this._hasText?this._getAppearance(e,t,a).then((function(o){if(n.appearance&&null===o)return d(y(c.prototype),"getOperatorList",n).call(n,e,t,r,a)
var s=new u.OperatorList
if(!n.data.defaultAppearance||null===o)return s
var l=[1,0,0,1,0,0],f=[0,0,n.data.rect[2]-n.data.rect[0],n.data.rect[3]-n.data.rect[1]],p=_(n.data.rect,f,l)
s.addOp(i.OPS.beginAnnotation,[n.data.rect,p,l])
var g=new h.StringStream(o)
return e.getOperatorList({stream:g,task:t,resources:n.fieldResources,operatorList:s}).then((function(){return s.addOp(i.OPS.endAnnotation,[]),s}))})):d(y(c.prototype),"getOperatorList",this).call(this,e,t,r,a)}},{key:"save",value:(a=S(n.default.mark((function e(t,r,a){var o,c,l,u,h,d,p,g,m,v,b,y
return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.data.fieldValue!==a[this.data.id]){e.next=2
break}return e.abrupt("return",null)
case 2:return e.next=4,this._getAppearance(t,r,a)
case 4:if(null!==(o=e.sent)){e.next=7
break}return e.abrupt("return",null)
case 7:if(c=t.xref.fetchIfRef(this.ref),(0,s.isDict)(c)){e.next=10
break}return e.abrupt("return",null)
case 10:return l=[0,0,this.data.rect[2]-this.data.rect[0],this.data.rect[3]-this.data.rect[1]],u=t.xref.getNewRef(),(h=new s.Dict(t.xref)).set("N",u),d=a[this.data.id],p=t.xref.encrypt,g=null,m=null,p&&(g=p.createCipherTransform(this.ref.num,this.ref.gen),m=p.createCipherTransform(u.num,u.gen),o=m.encryptString(o)),c.set("V",d),c.set("AP",h),c.set("M","D:".concat((0,i.getModificationDate)())),(v=new s.Dict(t.xref)).set("Length",o.length),v.set("Subtype",s.Name.get("Form")),v.set("Resources",this.fieldResources),v.set("BBox",l),b=["".concat(this.ref.num," ").concat(this.ref.gen," obj\n")],(0,f.writeDict)(c,b,g),b.push("\nendobj\n"),y=["".concat(u.num," ").concat(u.gen," obj\n")],(0,f.writeDict)(v,y,m),y.push(" stream\n"),y.push(o),y.push("\nendstream\nendobj\n"),e.abrupt("return",[{ref:this.ref,data:b.join("")},{ref:u,data:y.join("")}])
case 36:case"end":return e.stop()}}),e,this)}))),function(e,t,r){return a.apply(this,arguments)})},{key:"_getAppearance",value:(r=S(n.default.mark((function e(t,r,a){var o,s,c,l,u,h,f,d,p,g,m,v,b,y,w,k
return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=this.hasFieldFlag(i.AnnotationFieldFlag.PASSWORD),a&&!o){e.next=3
break}return e.abrupt("return",null)
case 3:if(""!==(s=a[this.data.id])){e.next=6
break}return e.abrupt("return","")
case 6:return l=c=2,u=this.data.rect[3]-this.data.rect[1],h=this.data.rect[2]-this.data.rect[0],e.next=12,this._getFontData(t,r)
case 12:if(f=e.sent,d=x(f,2),p=d[0],g=d[1],m=f[2],m=this._computeFontSize(p,g,m,u),v=p.descent,isNaN(v)&&(v=0),b=c+Math.abs(v)*m,y=this.data.defaultAppearance,w=this.data.textAlignment,!this.data.comb){e.next=23
break}return e.abrupt("return",this._getCombAppearance(y,s,h,l,b))
case 23:if(!this.data.multiLine){e.next=25
break}return e.abrupt("return",this._getMultilineAppearance(y,s,p,m,h,u,w,l,b))
case 25:if(!(0===w||w>2)){e.next=27
break}return e.abrupt("return","/Tx BMC q BT "+y+" 1 0 0 1 ".concat(l," ").concat(b," Tm (").concat((0,i.escapeString)(s),") Tj")+" ET Q EMC")
case 27:return k=this._renderText(s,p,m,h,w,l,b),e.abrupt("return","/Tx BMC q BT "+y+" 1 0 0 1 0 0 Tm ".concat(k)+" ET Q EMC")
case 29:case"end":return e.stop()}}),e,this)}))),function(e,t,a){return r.apply(this,arguments)})},{key:"_getFontData",value:(t=S(n.default.mark((function e(t,r){var a,i
return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new u.OperatorList,i={fontSize:0,font:null,fontName:null,clone:function(){return this}},e.next=4,t.getOperatorList({stream:new h.StringStream(this.data.defaultAppearance),task:r,resources:this.fieldResources,operatorList:a,initialState:i})
case 4:return e.abrupt("return",[i.font,i.fontName,i.fontSize])
case 5:case"end":return e.stop()}}),e,this)}))),function(e,r){return t.apply(this,arguments)})},{key:"_computeFontSize",value:function(e,t,r,a){if(null===r||0===r){var n=.7*(e.charsToGlyphs("M",!0)[0].width/1e3)
r=Math.max(1,Math.floor(a/(1.5*n)))
var i=new RegExp("/".concat(t,"\\s+[0-9.]+\\s+Tf"));-1===this.data.defaultAppearance.search(i)&&(i=new RegExp("/".concat(t,"\\s+Tf"))),this.data.defaultAppearance=this.data.defaultAppearance.replace(i,"/".concat(t," ").concat(r," Tf"))}return r}},{key:"_renderText",value:function(e,t,r,a,n,o,s){var c,l,u=r/1e3,h=0,f=w(t.charsToGlyphs(e))
try{for(f.s();!(c=f.n()).done;){h+=c.value.width*u}}catch(d){f.e(d)}finally{f.f()}return l=(l=1===n?(a-h)/2:2===n?a-h-o:o).toFixed(2),s=s.toFixed(2),"".concat(l," ").concat(s," Td (").concat((0,i.escapeString)(e),") Tj")}}]),c}(F),D=function(e){g(r,e)
var t=v(r)
function r(e){var a
O(this,r),(a=t.call(this,e))._hasText=!0
var n=e.dict;(0,i.isString)(a.data.fieldValue)||(a.data.fieldValue="")
var o=(0,l.getInheritableProperty)({dict:n,key:"Q"});(!Number.isInteger(o)||o<0||o>2)&&(o=null),a.data.textAlignment=o
var s=(0,l.getInheritableProperty)({dict:n,key:"MaxLen"})
return(!Number.isInteger(s)||s<0)&&(s=null),a.data.maxLen=s,a.data.multiLine=a.hasFieldFlag(i.AnnotationFieldFlag.MULTILINE),a.data.comb=a.hasFieldFlag(i.AnnotationFieldFlag.COMB)&&!a.hasFieldFlag(i.AnnotationFieldFlag.MULTILINE)&&!a.hasFieldFlag(i.AnnotationFieldFlag.PASSWORD)&&!a.hasFieldFlag(i.AnnotationFieldFlag.FILESELECT)&&null!==a.data.maxLen,a}return I(r,[{key:"_getCombAppearance",value:function(e,t,r,a,n){var o,s=(r/this.data.maxLen).toFixed(2),c=[],l=w(t)
try{for(l.s();!(o=l.n()).done;){var u=o.value
c.push("(".concat((0,i.escapeString)(u),") Tj"))}}catch(f){l.e(f)}finally{l.f()}var h=c.join(" ".concat(s," 0 Td "))
return"/Tx BMC q BT "+e+" 1 0 0 1 ".concat(a," ").concat(n," Tm ").concat(h)+" ET Q EMC"}},{key:"_getMultilineAppearance",value:function(e,t,r,a,n,i,o,s,c){var l,u=[],h=n-2*s,f=w(t.split(/\r\n|\r|\n/))
try{for(f.s();!(l=f.n()).done;){var d,p=l.value,g=w(this._splitLine(p,r,a,h))
try{for(g.s();!(d=g.n()).done;){var m=d.value,v=0===u.length?s:0
u.push(this._renderText(m,r,a,n,o,v,-a))}}catch(y){g.e(y)}finally{g.f()}}}catch(y){f.e(y)}finally{f.f()}var b=u.join("\n")
return"/Tx BMC q BT "+e+" 1 0 0 1 0 ".concat(i," Tm ").concat(b)+" ET Q EMC"}},{key:"_splitLine",value:function(e,t,r,a){if(e.length<=1)return[e]
for(var n=r/1e3,i=t.charsToGlyphs(" ",!0)[0].width*n,o=[],s=-1,c=0,l=0,u=0,h=e.length;u<h;u++){var f=e.charAt(u)
if(" "===f)l+i>a?(o.push(e.substring(c,u)),c=u,l=i,s=-1):(l+=i,s=u)
else{var d=t.charsToGlyphs(f,!1)[0].width*n
l+d>a?-1!==s?(o.push(e.substring(c,s+1)),c=u=s+1,s=-1,l=0):(o.push(e.substring(c,u)),c=u,l=d):l+=d}}return c<e.length&&o.push(e.substring(c,e.length)),o}}]),r}(M),L=function(e){g(l,e)
var t,r,a,c=v(l)
function l(e){var t
return O(this,l),(t=c.call(this,e)).checkedAppearance=null,t.uncheckedAppearance=null,t.data.checkBox=!t.hasFieldFlag(i.AnnotationFieldFlag.RADIO)&&!t.hasFieldFlag(i.AnnotationFieldFlag.PUSHBUTTON),t.data.radioButton=t.hasFieldFlag(i.AnnotationFieldFlag.RADIO)&&!t.hasFieldFlag(i.AnnotationFieldFlag.PUSHBUTTON),t.data.pushButton=t.hasFieldFlag(i.AnnotationFieldFlag.PUSHBUTTON),t.data.checkBox?t._processCheckBox(e):t.data.radioButton?t._processRadioButton(e):t.data.pushButton?t._processPushButton(e):(0,i.warn)("Invalid field flags for button widget annotation"),t}return I(l,[{key:"getOperatorList",value:function(e,t,r,a){if(this.data.pushButton)return d(y(l.prototype),"getOperatorList",this).call(this,e,t,!1,a)
if(a){var n
if(n=a[this.data.id]||!1?this.checkedAppearance:this.uncheckedAppearance){var i=this.appearance
this.appearance=n
var o=d(y(l.prototype),"getOperatorList",this).call(this,e,t,r,a)
return this.appearance=i,o}return Promise.resolve(new u.OperatorList)}return d(y(l.prototype),"getOperatorList",this).call(this,e,t,r,a)}},{key:"save",value:(a=S(n.default.mark((function e(t,r,a){return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.data.checkBox){e.next=2
break}return e.abrupt("return",this._saveCheckbox(t,r,a))
case 2:if(!this.data.radioButton){e.next=4
break}return e.abrupt("return",this._saveRadioButton(t,r,a))
case 4:return e.abrupt("return",d(y(l.prototype),"save",this).call(this,t,r,a))
case 5:case"end":return e.stop()}}),e,this)}))),function(e,t,r){return a.apply(this,arguments)})},{key:"_saveCheckbox",value:(r=S(n.default.mark((function e(t,r,a){var o,c,l,u,h,d,p
return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=this.data.fieldValue&&"Off"!==this.data.fieldValue,c=a[this.data.id],o!==c){e.next=4
break}return e.abrupt("return",null)
case 4:if(l=t.xref.fetchIfRef(this.ref),(0,s.isDict)(l)){e.next=7
break}return e.abrupt("return",null)
case 7:return u=s.Name.get(c?this.data.exportValue:"Off"),l.set("V",u),l.set("AS",u),l.set("M","D:".concat((0,i.getModificationDate)())),h=t.xref.encrypt,d=null,h&&(d=h.createCipherTransform(this.ref.num,this.ref.gen)),p=["".concat(this.ref.num," ").concat(this.ref.gen," obj\n")],(0,f.writeDict)(l,p,d),p.push("\nendobj\n"),e.abrupt("return",[{ref:this.ref,data:p.join("")}])
case 18:case"end":return e.stop()}}),e,this)}))),function(e,t,a){return r.apply(this,arguments)})},{key:"_saveRadioButton",value:(t=S(n.default.mark((function e(t,r,a){var o,c,l,u,h,d,p,g,m,v,b
return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=this.data.fieldValue===this.data.buttonValue,c=a[this.data.id],o!==c){e.next=4
break}return e.abrupt("return",null)
case 4:if(l=t.xref.fetchIfRef(this.ref),(0,s.isDict)(l)){e.next=7
break}return e.abrupt("return",null)
case 7:return u=s.Name.get(c?this.data.buttonValue:"Off"),h=null,d=t.xref.encrypt,c&&((0,s.isRef)(this.parent)?(p=t.xref.fetch(this.parent),g=null,d&&(g=d.createCipherTransform(this.parent.num,this.parent.gen)),p.set("V",u),h=["".concat(this.parent.num," ").concat(this.parent.gen," obj\n")],(0,f.writeDict)(p,h,g),h.push("\nendobj\n")):(0,s.isDict)(this.parent)&&this.parent.set("V",u)),l.set("AS",u),l.set("M","D:".concat((0,i.getModificationDate)())),m=null,d&&(m=d.createCipherTransform(this.ref.num,this.ref.gen)),v=["".concat(this.ref.num," ").concat(this.ref.gen," obj\n")],(0,f.writeDict)(l,v,m),v.push("\nendobj\n"),b=[{ref:this.ref,data:v.join("")}],null!==h&&b.push({ref:this.parent,data:h.join("")}),e.abrupt("return",b)
case 21:case"end":return e.stop()}}),e,this)}))),function(e,r,a){return t.apply(this,arguments)})},{key:"_processCheckBox",value:function(e){var t=e.dict.get("AP")
if((0,s.isDict)(t)){var r=t.get("N")
if((0,s.isDict)(r)){var a=r.getKeys()
a.includes("Off")||a.push("Off"),2===a.length&&(this.data.exportValue="Off"===a[0]?a[1]:a[0],this.checkedAppearance=r.get(this.data.exportValue),this.uncheckedAppearance=r.get("Off")||null)}}}},{key:"_processRadioButton",value:function(e){this.data.fieldValue=this.data.buttonValue=null
var t=e.dict.get("Parent")
if((0,s.isDict)(t)&&t.has("V")){var r=t.get("V");(0,s.isName)(r)&&(this.parent=e.dict.getRaw("Parent"),this.data.fieldValue=this._decodeFormValue(r))}var a=e.dict.get("AP")
if((0,s.isDict)(a)){var n=a.get("N")
if((0,s.isDict)(n)){var i,o=w(n.getKeys())
try{for(o.s();!(i=o.n()).done;){var c=i.value
if("Off"!==c){this.data.buttonValue=c
break}}}catch(l){o.e(l)}finally{o.f()}this.checkedAppearance=n.get(this.data.buttonValue),this.uncheckedAppearance=n.get("Off")||null}}}},{key:"_processPushButton",value:function(e){e.dict.has("A")?o.Catalog.parseDestDictionary({destDict:e.dict,resultObj:this.data,docBaseUrl:e.pdfManager.docBaseUrl}):(0,i.warn)("Push buttons without action dictionaries are not supported")}}]),l}(M),N=function(e){g(r,e)
var t=v(r)
function r(e){var a
O(this,r),(a=t.call(this,e)).data.options=[]
var n=(0,l.getInheritableProperty)({dict:e.dict,key:"Opt"})
if(Array.isArray(n))for(var o=e.xref,s=0,c=n.length;s<c;s++){var u=o.fetchIfRef(n[s]),h=Array.isArray(u)
a.data.options[s]={exportValue:a._decodeFormValue(h?o.fetchIfRef(u[0]):u),displayValue:a._decodeFormValue(h?o.fetchIfRef(u[1]):u)}}return(0,i.isString)(a.data.fieldValue)?a.data.fieldValue=[a.data.fieldValue]:a.data.fieldValue||(a.data.fieldValue=[]),a.data.combo=a.hasFieldFlag(i.AnnotationFieldFlag.COMBO),a.data.multiSelect=a.hasFieldFlag(i.AnnotationFieldFlag.MULTISELECT),a._hasText=!0,a}return r}(M),U=function(e){g(r,e)
var t=v(r)
function r(e){var a
O(this,r)
a=t.call(this,e)
var n=e.dict
return a.data.annotationType=i.AnnotationType.TEXT,a.data.hasAppearance?a.data.name="NoIcon":(a.data.rect[1]=a.data.rect[3]-22,a.data.rect[2]=a.data.rect[0]+22,a.data.name=n.has("Name")?n.get("Name").name:"Note"),n.has("State")?(a.data.state=n.get("State")||null,a.data.stateModel=n.get("StateModel")||null):(a.data.state=null,a.data.stateModel=null),a}return r}(B),j=function(e){g(r,e)
var t=v(r)
function r(e){var a
O(this,r),(a=t.call(this,e)).data.annotationType=i.AnnotationType.LINK
var n=P(e.dict,a.rectangle)
return n&&(a.data.quadPoints=n),o.Catalog.parseDestDictionary({destDict:e.dict,resultObj:a.data,docBaseUrl:e.pdfManager.docBaseUrl}),a}return r}(F),q=function(e){g(r,e)
var t=v(r)
function r(e){var a
O(this,r),(a=t.call(this,e)).data.annotationType=i.AnnotationType.POPUP
var n=e.dict.get("Parent")
if(!n)return(0,i.warn)("Popup annotation has a missing or invalid parent annotation."),b(a)
var o=n.get("Subtype")
a.data.parentType=(0,s.isName)(o)?o.name:null
var c=e.dict.getRaw("Parent")
a.data.parentId=(0,s.isRef)(c)?c.toString():null
var l=n.get("RT")
if((0,s.isName)(l,i.AnnotationReplyType.GROUP)&&(n=n.get("IRT")),n.has("M")?(a.setModificationDate(n.get("M")),a.data.modificationDate=a.modificationDate):a.data.modificationDate=null,n.has("C")?(a.setColor(n.getArray("C")),a.data.color=a.color):a.data.color=null,!a.viewable){var u=n.get("F")
a._isViewable(u)&&a.setFlags(u)}return a.data.title=(0,i.stringToPDFString)(n.get("T")||""),a.data.contents=(0,i.stringToPDFString)(n.get("Contents")||""),a}return r}(F),z=function(e){g(r,e)
var t=v(r)
function r(e){var a
return O(this,r),(a=t.call(this,e)).data.annotationType=i.AnnotationType.FREETEXT,a}return r}(B),G=function(e){g(r,e)
var t=v(r)
function r(e){var a
return O(this,r),(a=t.call(this,e)).data.annotationType=i.AnnotationType.LINE,a.data.lineCoordinates=i.Util.normalizeRect(e.dict.getArray("L")),a}return r}(B),H=function(e){g(r,e)
var t=v(r)
function r(e){var a
return O(this,r),(a=t.call(this,e)).data.annotationType=i.AnnotationType.SQUARE,a}return r}(B),W=function(e){g(r,e)
var t=v(r)
function r(e){var a
return O(this,r),(a=t.call(this,e)).data.annotationType=i.AnnotationType.CIRCLE,a}return r}(B),X=function(e){g(r,e)
var t=v(r)
function r(e){var a
O(this,r),(a=t.call(this,e)).data.annotationType=i.AnnotationType.POLYLINE
var n=e.dict.getArray("Vertices")
a.data.vertices=[]
for(var o=0,s=n.length;o<s;o+=2)a.data.vertices.push({x:n[o],y:n[o+1]})
return a}return r}(B),V=function(e){g(r,e)
var t=v(r)
function r(e){var a
return O(this,r),(a=t.call(this,e)).data.annotationType=i.AnnotationType.POLYGON,a}return r}(X),Y=function(e){g(r,e)
var t=v(r)
function r(e){var a
return O(this,r),(a=t.call(this,e)).data.annotationType=i.AnnotationType.CARET,a}return r}(B),K=function(e){g(r,e)
var t=v(r)
function r(e){var a
O(this,r),(a=t.call(this,e)).data.annotationType=i.AnnotationType.INK
var n=e.xref,o=e.dict.getArray("InkList")
a.data.inkLists=[]
for(var s=0,c=o.length;s<c;++s){a.data.inkLists.push([])
for(var l=0,u=o[s].length;l<u;l+=2)a.data.inkLists[s].push({x:n.fetchIfRef(o[s][l]),y:n.fetchIfRef(o[s][l+1])})}return a}return r}(B),J=function(e){g(r,e)
var t=v(r)
function r(e){var a
O(this,r),(a=t.call(this,e)).data.annotationType=i.AnnotationType.HIGHLIGHT
var n=P(e.dict,a.rectangle)
return n&&(a.data.quadPoints=n),a}return r}(B),Z=function(e){g(r,e)
var t=v(r)
function r(e){var a
O(this,r),(a=t.call(this,e)).data.annotationType=i.AnnotationType.UNDERLINE
var n=P(e.dict,a.rectangle)
return n&&(a.data.quadPoints=n),a}return r}(B),Q=function(e){g(r,e)
var t=v(r)
function r(e){var a
O(this,r),(a=t.call(this,e)).data.annotationType=i.AnnotationType.SQUIGGLY
var n=P(e.dict,a.rectangle)
return n&&(a.data.quadPoints=n),a}return r}(B),$=function(e){g(r,e)
var t=v(r)
function r(e){var a
O(this,r),(a=t.call(this,e)).data.annotationType=i.AnnotationType.STRIKEOUT
var n=P(e.dict,a.rectangle)
return n&&(a.data.quadPoints=n),a}return r}(B),ee=function(e){g(r,e)
var t=v(r)
function r(e){var a
return O(this,r),(a=t.call(this,e)).data.annotationType=i.AnnotationType.STAMP,a}return r}(B),te=function(e){g(r,e)
var t=v(r)
function r(e){var a
O(this,r),a=t.call(this,e)
var n=new o.FileSpec(e.dict.get("FS"),e.xref)
return a.data.annotationType=i.AnnotationType.FILEATTACHMENT,a.data.file=n.serializable,a}return r}(B)},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.OperatorList=void 0
var a=r(5)
function n(e,t){var r
if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return
if("string"==typeof e)return i(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r)
var a=0,n=function(){}
return{s:n,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,c=!1
return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next()
return s=e.done,e},e:function(e){c=!0,o=e},f:function(){try{s||null==r.return||r.return()}finally{if(c)throw o}}}}function i(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r]
return a}var o=function(){function e(e,t,r,a,n){for(var i=e,o=0,s=t.length-1;o<s;o++){var c=t[o]
i=i[c]||(i[c]=[])}i[t[t.length-1]]={checkFn:r,iterateFn:a,processFn:n}}var t=[]
function r(e){this.queue=e,this.state=null,this.context={iCurr:0,fnArray:e.fnArray,argsArray:e.argsArray},this.match=null,this.lastProcessed=0}return e(t,[a.OPS.save,a.OPS.transform,a.OPS.paintInlineImageXObject,a.OPS.restore],null,(function(e,t){var r=e.fnArray,n=(t-(e.iCurr-3))%4
switch(n){case 0:return r[t]===a.OPS.save
case 1:return r[t]===a.OPS.transform
case 2:return r[t]===a.OPS.paintInlineImageXObject
case 3:return r[t]===a.OPS.restore}throw new Error("iterateInlineImageGroup - invalid pos: ".concat(n))}),(function(e,t){var r=e.fnArray,n=e.argsArray,i=e.iCurr,o=i-3,s=i-2,c=i-1,l=Math.min(Math.floor((t-o)/4),200)
if(l<10)return t-(t-o)%4
var u,h=0,f=[],d=0,p=1,g=1
for(u=0;u<l;u++){var m=n[s+(u<<2)],v=n[c+(u<<2)][0]
p+v.width>1e3&&(h=Math.max(h,p),g+=d+2,p=0,d=0),f.push({transform:m,x:p,y:g,w:v.width,h:v.height}),p+=v.width+2,d=Math.max(d,v.height)}var b=Math.max(h,p)+1,y=g+d+1,w=new Uint8ClampedArray(b*y*4),k=b<<2
for(u=0;u<l;u++){var S=n[c+(u<<2)][0].data,x=f[u].w<<2,C=0,A=f[u].x+f[u].y*b<<2
w.set(S.subarray(0,x),A-k)
for(var O=0,T=f[u].h;O<T;O++)w.set(S.subarray(C,C+x),A),C+=x,A+=k
for(w.set(S.subarray(C-x,C),A);A>=0;)S[A-4]=S[A],S[A-3]=S[A+1],S[A-2]=S[A+2],S[A-1]=S[A+3],S[A+x]=S[A+x-4],S[A+x+1]=S[A+x-3],S[A+x+2]=S[A+x-2],S[A+x+3]=S[A+x-1],A-=k}return r.splice(o,4*l,a.OPS.paintInlineImageXObjectGroup),n.splice(o,4*l,[{width:b,height:y,kind:a.ImageKind.RGBA_32BPP,data:w},f]),o+1})),e(t,[a.OPS.save,a.OPS.transform,a.OPS.paintImageMaskXObject,a.OPS.restore],null,(function(e,t){var r=e.fnArray,n=(t-(e.iCurr-3))%4
switch(n){case 0:return r[t]===a.OPS.save
case 1:return r[t]===a.OPS.transform
case 2:return r[t]===a.OPS.paintImageMaskXObject
case 3:return r[t]===a.OPS.restore}throw new Error("iterateImageMaskGroup - invalid pos: ".concat(n))}),(function(e,t){var r,n=e.fnArray,i=e.argsArray,o=e.iCurr,s=o-3,c=o-2,l=o-1,u=Math.floor((t-s)/4)
if((u=function(e,t,r,n){for(var i=e+2,o=0;o<t;o++){var s=n[i+4*o],c=1===s.length&&s[0]
if(!c||1!==c.width||1!==c.height||c.data.length&&(1!==c.data.length||0!==c.data[0]))break
r[i+4*o]=a.OPS.paintSolidColorImageMask}return t-o}(s,u,n,i))<10)return t-(t-s)%4
var h,f,d=!1,p=i[l][0],g=i[c][0],m=i[c][1],v=i[c][2],b=i[c][3]
if(m===v){d=!0,h=c+4
var y=l+4
for(r=1;r<u;r++,h+=4,y+=4)if(f=i[h],i[y][0]!==p||f[0]!==g||f[1]!==m||f[2]!==v||f[3]!==b){r<10?d=!1:u=r
break}}if(d){u=Math.min(u,1e3)
var w=new Float32Array(2*u)
for(h=c,r=0;r<u;r++,h+=4)f=i[h],w[r<<1]=f[4],w[1+(r<<1)]=f[5]
n.splice(s,4*u,a.OPS.paintImageMaskXObjectRepeat),i.splice(s,4*u,[p,g,m,v,b,w])}else{u=Math.min(u,100)
var k=[]
for(r=0;r<u;r++){f=i[c+(r<<2)]
var S=i[l+(r<<2)][0]
k.push({data:S.data,width:S.width,height:S.height,transform:f})}n.splice(s,4*u,a.OPS.paintImageMaskXObjectGroup),i.splice(s,4*u,[k])}return s+1})),e(t,[a.OPS.save,a.OPS.transform,a.OPS.paintImageXObject,a.OPS.restore],(function(e){var t=e.argsArray,r=e.iCurr-2
return 0===t[r][1]&&0===t[r][2]}),(function(e,t){var r=e.fnArray,n=e.argsArray,i=(t-(e.iCurr-3))%4
switch(i){case 0:return r[t]===a.OPS.save
case 1:if(r[t]!==a.OPS.transform)return!1
var o=e.iCurr-2,s=n[o][0],c=n[o][3]
return n[t][0]===s&&0===n[t][1]&&0===n[t][2]&&n[t][3]===c
case 2:if(r[t]!==a.OPS.paintImageXObject)return!1
var l=n[e.iCurr-1][0]
return n[t][0]===l
case 3:return r[t]===a.OPS.restore}throw new Error("iterateImageGroup - invalid pos: ".concat(i))}),(function(e,t){var r=e.fnArray,n=e.argsArray,i=e.iCurr,o=i-3,s=i-2,c=n[i-1][0],l=n[s][0],u=n[s][3],h=Math.min(Math.floor((t-o)/4),1e3)
if(h<3)return t-(t-o)%4
for(var f=new Float32Array(2*h),d=s,p=0;p<h;p++,d+=4){var g=n[d]
f[p<<1]=g[4],f[1+(p<<1)]=g[5]}var m=[c,l,u,f]
return r.splice(o,4*h,a.OPS.paintImageXObjectRepeat),n.splice(o,4*h,m),o+1})),e(t,[a.OPS.beginText,a.OPS.setFont,a.OPS.setTextMatrix,a.OPS.showText,a.OPS.endText],null,(function(e,t){var r=e.fnArray,n=e.argsArray,i=(t-(e.iCurr-4))%5
switch(i){case 0:return r[t]===a.OPS.beginText
case 1:return r[t]===a.OPS.setFont
case 2:return r[t]===a.OPS.setTextMatrix
case 3:if(r[t]!==a.OPS.showText)return!1
var o=e.iCurr-3,s=n[o][0],c=n[o][1]
return n[t][0]===s&&n[t][1]===c
case 4:return r[t]===a.OPS.endText}throw new Error("iterateShowTextGroup - invalid pos: ".concat(i))}),(function(e,t){var r=e.fnArray,a=e.argsArray,n=e.iCurr,i=n-4,o=n-3,s=n-2,c=n-1,l=n,u=a[o][0],h=a[o][1],f=Math.min(Math.floor((t-i)/5),1e3)
if(f<3)return t-(t-i)%5
var d=i
i>=4&&r[i-4]===r[o]&&r[i-3]===r[s]&&r[i-2]===r[c]&&r[i-1]===r[l]&&a[i-4][0]===u&&a[i-4][1]===h&&(f++,d-=5)
for(var p=d+4,g=1;g<f;g++)r.splice(p,3),a.splice(p,3),p+=2
return p+1})),r.prototype={_optimize:function(){var e=this.queue.fnArray,r=this.lastProcessed,a=e.length,n=this.state,i=this.match
if(n||i||r+1!==a||t[e[r]]){for(var o=this.context;r<a;){if(i){if((0,i.iterateFn)(o,r)){r++
continue}if(r=(0,i.processFn)(o,r+1),i=null,n=null,r>=(a=e.length))break}(n=(n||t)[e[r]])&&!Array.isArray(n)?(o.iCurr=r,r++,!n.checkFn||(0,n.checkFn)(o)?(i=n,n=null):n=null):r++}this.state=n,this.match=i,this.lastProcessed=r}else this.lastProcessed=a},push:function(e,t){this.queue.fnArray.push(e),this.queue.argsArray.push(t),this._optimize()},flush:function(){for(;this.match;){var e=this.queue.fnArray.length
this.lastProcessed=(0,this.match.processFn)(this.context,e),this.match=null,this.state=null,this._optimize()}},reset:function(){this.state=null,this.match=null,this.lastProcessed=0}},r}(),s=function(){function e(e){this.queue=e}return e.prototype={push:function(e,t){this.queue.fnArray.push(e),this.queue.argsArray.push(t)},flush:function(){},reset:function(){}},e}(),c=function(){function e(e,t){this._streamSink=t,this.fnArray=[],this.argsArray=[],this.optimizer=t&&"oplist"!==e?new o(this):new s(this),this.dependencies=new Set,this._totalLength=0,this.weight=0,this._resolved=t?null:Promise.resolve()}return e.prototype={get length(){return this.argsArray.length},get ready(){return this._resolved||this._streamSink.ready},get totalLength(){return this._totalLength+this.length},addOp:function(e,t){this.optimizer.push(e,t),this.weight++,this._streamSink&&(this.weight>=1e3||this.weight>=995&&(e===a.OPS.restore||e===a.OPS.endText))&&this.flush()},addDependency:function(e){this.dependencies.has(e)||(this.dependencies.add(e),this.addOp(a.OPS.dependency,[e]))},addDependencies:function(e){var t,r=n(e)
try{for(r.s();!(t=r.n()).done;){var a=t.value
this.addDependency(a)}}catch(i){r.e(i)}finally{r.f()}},addOpList:function(t){if(t instanceof e){var r,i=n(t.dependencies)
try{for(i.s();!(r=i.n()).done;){var o=r.value
this.dependencies.add(o)}}catch(l){i.e(l)}finally{i.f()}for(var s=0,c=t.length;s<c;s++)this.addOp(t.fnArray[s],t.argsArray[s])}else(0,a.warn)('addOpList - ignoring invalid "opList" parameter.')},getIR:function(){return{fnArray:this.fnArray,argsArray:this.argsArray,length:this.length}},get _transfers(){for(var e=[],t=this.fnArray,r=this.argsArray,n=this.length,i=0;i<n;i++)switch(t[i]){case a.OPS.paintInlineImageXObject:case a.OPS.paintInlineImageXObjectGroup:case a.OPS.paintImageMaskXObject:var o=r[i][0]
o.cached||e.push(o.data.buffer)}return e},flush:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
this.optimizer.flush()
var t=this.length
this._totalLength+=t,this._streamSink.enqueue({fnArray:this.fnArray,argsArray:this.argsArray,lastChunk:e,length:t},1,this._transfers),this.dependencies.clear(),this.fnArray.length=0,this.argsArray.length=0,this.weight=0,this.optimizer.reset()}},e}()
t.OperatorList=c},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.writeDict=l,t.incrementalUpdate=function(e,t,r){var c,u,d=new n.Dict(null),p=t.newRef,g=e[e.length-1]
10===g||13===g?(c=[],u=e.length):(c=["\n"],u=e.length+1)
d.set("Size",p.num+1),d.set("Prev",t.startXRef),d.set("Type",n.Name.get("XRef")),null!==t.rootRef&&d.set("Root",t.rootRef)
null!==t.infoRef&&d.set("Info",t.infoRef)
null!==t.encrypt&&d.set("Encrypt",t.encrypt)
r.push({ref:p,data:""}),r=r.sort((function(e,t){return e.ref.num-t.ref.num}))
var m,v=[[0,1,65535]],b=[0,1],y=0,w=o(r)
try{for(w.s();!(m=w.n()).done;){var k=m.value,S=k.ref,x=k.data
y=Math.max(y,u),v.push([1,u,Math.min(S.gen,65535)]),u+=x.length,b.push(S.num),b.push(1),c.push(x)}}catch(z){w.e(z)}finally{w.f()}if(d.set("Index",b),0!==t.fileIds.length){var C=function(e,t){for(var r=Math.floor(Date.now()/1e3),n=t.filename||"",o=[r.toString(),n,e.toString()],s=o.reduce((function(e,t){return e+t.length}),0),c=0,l=Object.values(t.info);c<l.length;c++){var u=l[c]
o.push(u),s+=u.length}for(var h=new Uint8Array(s),d=0,p=0,g=o;p<g.length;p++){var m=g[p]
f(m,d,h),d+=m.length}return(0,a.bytesToString)((0,i.calculateMD5)(h))}(u,t)
d.set("ID",[t.fileIds[0],C])}var A=[1,Math.ceil(Math.log2(y)/8),2],O=(A[0]+A[1]+A[2])*v.length
d.set("W",A),d.set("Length",O),c.push("".concat(p.num," ").concat(p.gen," obj\n")),l(d,c,null),c.push(" stream\n")
var T=c.reduce((function(e,t){return e+t.length}),0),I="\nendstream\nendobj\nstartxref\n".concat(u,"\n%%EOF\n"),E=new Uint8Array(e.length+T+O+I.length)
E.set(e)
var P,_=e.length,F=o(c)
try{for(F.s();!(P=F.n()).done;){var R=P.value
f(R,_,E),_+=R.length}}catch(z){F.e(z)}finally{F.f()}for(var B=0,M=v;B<M.length;B++){var D=(j=M[B],q=3,function(e){if(Array.isArray(e))return e}(j)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return
var r=[],a=!0,n=!1,i=void 0
try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);a=!0);}catch(z){n=!0,i=z}finally{try{a||null==s.return||s.return()}finally{if(n)throw i}}return r}(j,q)||s(j,q)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),L=D[0],N=D[1],U=D[2]
_=h(L,A[0],_,E),_=h(N,A[1],_,E),_=h(U,A[2],_,E)}var j,q
return f(I,_,E),E}
var a=r(5),n=r(202),i=r(219)
function o(e,t){var r
if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=s(e))||t&&e&&"number"==typeof e.length){r&&(e=r)
var a=0,n=function(){}
return{s:n,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,c=!1
return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next()
return o=e.done,e},e:function(e){c=!0,i=e},f:function(){try{o||null==r.return||r.return()}finally{if(c)throw i}}}}function s(e,t){if(e){if("string"==typeof e)return c(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(e,t):void 0}}function c(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r]
return a}function l(e,t,r){t.push("<<")
var a,n=o(e.getKeys())
try{for(n.s();!(a=n.n()).done;){var i=a.value
t.push(" /".concat(i," ")),u(e.getRaw(i),t,r)}}catch(s){n.e(s)}finally{n.f()}t.push(">>")}function u(e,t,r){(0,n.isName)(e)?t.push("/".concat(e.name)):(0,n.isRef)(e)?t.push("".concat(e.num," ").concat(e.gen," R")):Array.isArray(e)?function(e,t,r){t.push("[")
var a,n=!0,i=o(e)
try{for(i.s();!(a=i.n()).done;){var s=a.value
n?n=!1:t.push(" "),u(s,t,r)}}catch(c){i.e(c)}finally{i.f()}t.push("]")}(e,t,r):"string"==typeof e?(null!==r&&(e=r.encryptString(e)),t.push("(".concat((0,a.escapeString)(e),")"))):"number"==typeof e?t.push(function(e){if(Number.isInteger(e))return e.toString()
var t=Math.round(100*e)
return t%100==0?(t/100).toString():t%10==0?e.toFixed(1):e.toFixed(2)}(e)):(0,n.isDict)(e)?l(e,t,r):(0,n.isStream)(e)&&function(e,t,r){l(e.dict,t,r),t.push(" stream\n")
var n=(0,a.bytesToString)(e.getBytes())
null!==r&&(n=r.encryptString(n)),t.push(n),t.push("\nendstream\n")}(e,t,r)}function h(e,t,r,a){for(var n=t+r-1;n>r-1;n--)a[n]=255&e,e>>=8
return r+t}function f(e,t,r){for(var a=0,n=e.length;a<n;a++)r[t+a]=255&e.charCodeAt(a)}},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.PartialEvaluator=void 0
var a,n=(a=r(2))&&a.__esModule?a:{default:a},i=r(5),o=r(226),s=r(202),c=r(227),l=r(230),u=r(205),h=r(233),f=r(232),d=r(236),p=r(237),g=r(208),m=r(221),v=r(239),b=r(220),y=r(209),w=r(231),k=r(240),S=r(241),x=r(223),C=r(242)
function A(e,t,r,a,n,i,o){try{var s=e[i](o),c=s.value}catch(l){return void r(l)}s.done?t(c):Promise.resolve(c).then(a,n)}function O(e){return function(){var t=this,r=arguments
return new Promise((function(a,n){var i=e.apply(t,r)
function o(e){A(i,a,n,o,s,"next",e)}function s(e){A(i,a,n,o,s,"throw",e)}o(void 0)}))}}function T(e,t){var r
if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return
if("string"==typeof e)return I(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return I(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r)
var a=0,n=function(){}
return{s:n,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1
return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next()
return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==r.return||r.return()}finally{if(s)throw i}}}}function I(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r]
return a}function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function P(e,t){for(var r=0;r<t.length;r++){var a=t[r]
a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _(e,t,r){return t&&P(e.prototype,t),r&&P(e,r),e}var F=Object.freeze({maxImageSize:-1,disableFontFace:!1,ignoreErrors:!1,isEvalSupported:!0,fontExtraProperties:!1}),R=1,B=2,M=Promise.resolve()
function D(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
if(Array.isArray(e)){for(var r=0,a=e.length;r<a;r++){var n=D(e[r],!0)
if(n)return n}return(0,i.warn)("Unsupported blend mode Array: ".concat(e)),"source-over"}if(!(0,s.isName)(e))return t?null:"source-over"
switch(e.name){case"Normal":case"Compatible":return"source-over"
case"Multiply":return"multiply"
case"Screen":return"screen"
case"Overlay":return"overlay"
case"Darken":return"darken"
case"Lighten":return"lighten"
case"ColorDodge":return"color-dodge"
case"ColorBurn":return"color-burn"
case"HardLight":return"hard-light"
case"SoftLight":return"soft-light"
case"Difference":return"difference"
case"Exclusion":return"exclusion"
case"Hue":return"hue"
case"Saturation":return"saturation"
case"Color":return"color"
case"Luminosity":return"luminosity"}return t?null:((0,i.warn)("Unsupported blend mode: ".concat(e.name)),"source-over")}var L=function(){function e(){E(this,e),this.reset()}return _(e,null,[{key:"TIME_SLOT_DURATION_MS",get:function(){return(0,i.shadow)(this,"TIME_SLOT_DURATION_MS",20)}},{key:"CHECK_TIME_EVERY",get:function(){return(0,i.shadow)(this,"CHECK_TIME_EVERY",100)}}]),_(e,[{key:"check",value:function(){return!(++this.checked<e.CHECK_TIME_EVERY)&&(this.checked=0,this.endTime<=Date.now())}},{key:"reset",value:function(){this.endTime=Date.now()+e.TIME_SLOT_DURATION_MS,this.checked=0}}]),e}(),N=function(){function e(t){var r=t.xref,a=t.handler,n=t.pageIndex,i=t.idFactory,o=t.fontCache,s=t.builtInCMapCache,c=t.globalImageCache,l=t.options,u=void 0===l?null:l
E(this,e),this.xref=r,this.handler=a,this.pageIndex=n,this.idFactory=i,this.fontCache=o,this.builtInCMapCache=s,this.globalImageCache=c,this.options=u||F,this.parsingType3Font=!1,this._fetchBuiltInCMapBound=this.fetchBuiltInCMap.bind(this)}var t,r,a,g,A,I
return _(e,[{key:"clone",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=Object.create(this)
return t.options=e,t}},{key:"hasBlendModes",value:function(e){if(!(e instanceof s.Dict))return!1
var t=new s.RefSet
e.objId&&t.put(e.objId)
for(var r=[e],a=this.xref;r.length;){var n=r.shift(),o=n.get("ExtGState")
if(o instanceof s.Dict){var c,l=T(o.getRawValues())
try{for(l.s();!(c=l.n()).done;){var h=c.value
if(h instanceof s.Ref){if(t.has(h))continue
try{h=a.fetch(h)}catch(k){if(k instanceof u.MissingDataException)throw k
t.put(h),(0,i.info)('hasBlendModes - ignoring ExtGState: "'.concat(k,'".'))
continue}}if(h instanceof s.Dict){h.objId&&t.put(h.objId)
var f=h.get("BM")
if(f instanceof s.Name){if("Normal"!==f.name)return!0}else if(void 0!==f&&Array.isArray(f)){var d,p=T(f)
try{for(p.s();!(d=p.n()).done;){var g=d.value
if(g instanceof s.Name&&"Normal"!==g.name)return!0}}catch(S){p.e(S)}finally{p.f()}}}}}catch(S){l.e(S)}finally{l.f()}}var m=n.get("XObject")
if(m instanceof s.Dict){var v,b=T(m.getRawValues())
try{for(b.s();!(v=b.n()).done;){var y=v.value
if(y instanceof s.Ref){if(t.has(y))continue
try{y=a.fetch(y)}catch(k){if(k instanceof u.MissingDataException)throw k
t.put(y),(0,i.info)('hasBlendModes - ignoring XObject: "'.concat(k,'".'))
continue}}if((0,s.isStream)(y)){y.dict.objId&&t.put(y.dict.objId)
var w=y.dict.get("Resources")
w instanceof s.Dict&&(w.objId&&t.has(w.objId)||(r.push(w),w.objId&&t.put(w.objId)))}}}catch(S){b.e(S)}finally{b.f()}}}return!1}},{key:"fetchBuiltInCMap",value:(I=O(n.default.mark((function e(t){var r,a,o,s
return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=this.builtInCMapCache.get(t))){e.next=3
break}return e.abrupt("return",r)
case 3:return a=this.handler.sendWithStream("FetchBuiltInCMap",{name:t}),o=a.getReader(),e.next=7,new Promise((function(e,t){(function r(){o.read().then((function(t){var a=t.value
t.done||(e(a),r())}),t)})()}))
case 7:return(s=e.sent).compressionType!==i.CMapCompressionType.NONE&&this.builtInCMapCache.set(t,s),e.abrupt("return",s)
case 10:case"end":return e.stop()}}),e,this)}))),function(e){return I.apply(this,arguments)})},{key:"buildFormXObject",value:(A=O(n.default.mark((function e(t,r,a,o,c,l,u){var h,f,d,p,g,m,v,y,w,k
return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(h=r.dict,f=h.getArray("Matrix"),d=h.getArray("BBox"),d=Array.isArray(d)&&4===d.length?i.Util.normalizeRect(d):null,p=null,!h.has("OC")){e.next=10
break}return e.next=8,this.parseMarkedContentProps(h.get("OC"),t)
case 8:p=e.sent,o.addOp(i.OPS.beginMarkedContentProps,["OC",p])
case 10:if(!(g=h.get("Group"))){e.next=30
break}if(m={matrix:f,bbox:d,smask:a,isolated:!1,knockout:!1},v=g.get("S"),y=null,!(0,s.isName)(v,"Transparency")){e.next=28
break}if(m.isolated=g.get("I")||!1,m.knockout=g.get("K")||!1,!g.has("CS")){e.next=28
break}if(w=g.getRaw("CS"),!(k=b.ColorSpace.getCached(w,this.xref,u))){e.next=25
break}y=k,e.next=28
break
case 25:return e.next=27,this.parseColorSpace({cs:w,resources:t,localColorSpaceCache:u})
case 27:y=e.sent
case 28:a&&a.backdrop&&(y=y||b.ColorSpace.singletons.rgb,a.backdrop=y.getRgb(a.backdrop,0)),o.addOp(i.OPS.beginGroup,[m])
case 30:return o.addOp(i.OPS.paintFormXObjectBegin,[f,d]),e.abrupt("return",this.getOperatorList({stream:r,task:c,resources:h.get("Resources")||t,operatorList:o,initialState:l}).then((function(){o.addOp(i.OPS.paintFormXObjectEnd,[]),g&&o.addOp(i.OPS.endGroup,[m]),p&&o.addOp(i.OPS.endMarkedContent,[])})))
case 32:case"end":return e.stop()}}),e,this)}))),function(e,t,r,a,n,i,o){return A.apply(this,arguments)})},{key:"_sendImgData",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=t?[t.data.buffer]:null
return this.parsingType3Font||r?this.handler.send("commonobj",[e,"Image",t],a):this.handler.send("obj",[e,this.pageIndex,"Image",t],a)}},{key:"buildPaintImageXObject",value:(g=O(n.default.mark((function e(t){var r,a,o,s,c,l,u,h,f,d,p,g,m,v,b,w,k,S,x,A,O,T,I,E,P,_=this
return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.resources,a=t.image,o=t.isInline,s=void 0!==o&&o,c=t.operatorList,l=t.cacheKey,u=t.localImageCache,h=t.localColorSpaceCache,f=a.dict,d=f.objId,p=f.get("Width","W"),g=f.get("Height","H"),p&&(0,i.isNum)(p)&&g&&(0,i.isNum)(g)){e.next=8
break}return(0,i.warn)("Image dimensions are missing, or not numbers."),e.abrupt("return",void 0)
case 8:if(!(-1!==(m=this.options.maxImageSize)&&p*g>m)){e.next=12
break}return(0,i.warn)("Image exceeded maximum allowed size and was removed."),e.abrupt("return",void 0)
case 12:if(!f.get("ImageMask","IM")){e.next=25
break}return w=f.get("Width","W"),k=f.get("Height","H"),S=w+7>>3,x=a.getBytes(S*k,!0),A=f.getArray("Decode","D"),(v=C.PDFImage.createMask({imgArray:x,width:w,height:k,imageIsFromDecodeStream:a instanceof y.DecodeStream,inverseDecode:!!A&&A[0]>0})).cached=!!l,b=[v],c.addOp(i.OPS.paintImageMaskXObject,b),l&&u.set(l,d,{fn:i.OPS.paintImageMaskXObject,args:b}),e.abrupt("return",void 0)
case 25:if(O=f.get("SMask","SM")||!1,T=f.get("Mask")||!1,!s||O||T||!(p+g<200)){e.next=33
break}return I=new C.PDFImage({xref:this.xref,res:r,image:a,isInline:s,pdfFunctionFactory:this._pdfFunctionFactory,localColorSpaceCache:h}),v=I.createImageData(!0),c.addOp(i.OPS.paintInlineImageXObject,[v]),e.abrupt("return",void 0)
case 33:return E="img_".concat(this.idFactory.createObjId()),P=!1,this.parsingType3Font?E="".concat(this.idFactory.getDocId(),"_type3_").concat(E):d&&(P=this.globalImageCache.shouldCache(d,this.pageIndex))&&(E="".concat(this.idFactory.getDocId(),"_").concat(E)),c.addDependency(E),b=[E,p,g],C.PDFImage.buildImage({xref:this.xref,res:r,image:a,isInline:s,pdfFunctionFactory:this._pdfFunctionFactory,localColorSpaceCache:h}).then((function(e){return v=e.createImageData(!1),_._sendImgData(E,v,P)})).catch((function(e){return(0,i.warn)('Unable to decode image "'.concat(E,'": "').concat(e,'".')),_._sendImgData(E,null,P)})),c.addOp(i.OPS.paintImageXObject,b),l&&(u.set(l,d,{fn:i.OPS.paintImageXObject,args:b}),d&&((0,i.assert)(!s,"Cannot cache an inline image globally."),this.globalImageCache.addPageIndex(d,this.pageIndex),P&&this.globalImageCache.setData(d,{objId:E,fn:i.OPS.paintImageXObject,args:b}))),e.abrupt("return",void 0)
case 41:case"end":return e.stop()}}),e,this)}))),function(e){return g.apply(this,arguments)})},{key:"handleSMask",value:function(e,t,r,a,n,i){var o=e.get("G"),s={subtype:e.get("S").name,backdrop:e.get("BC")},c=e.get("TR")
if((0,p.isPDFFunction)(c)){for(var l=this._pdfFunctionFactory.create(c),u=new Uint8Array(256),h=new Float32Array(1),f=0;f<256;f++)h[0]=f/255,l(h,0,h,0),u[f]=255*h[0]|0
s.transferMap=u}return this.buildFormXObject(t,o,s,r,a,n.state.clone(),i)}},{key:"handleTransferFunction",value:function(e){var t
if(Array.isArray(e))t=e
else{if(!(0,p.isPDFFunction)(e))return null
t=[e]}var r,a=[],n=0,i=0,o=T(t)
try{for(o.s();!(r=o.n()).done;){var c=r.value,l=this.xref.fetchIfRef(c)
if(n++,(0,s.isName)(l,"Identity"))a.push(null)
else{if(!(0,p.isPDFFunction)(l))return null
for(var u=this._pdfFunctionFactory.create(l),h=new Uint8Array(256),f=new Float32Array(1),d=0;d<256;d++)f[0]=d/255,u(f,0,f,0),h[d]=255*f[0]|0
a.push(h),i++}}}catch(g){o.e(g)}finally{o.f()}return 1!==n&&4!==n||0===i?null:a}},{key:"handleTilingType",value:function(e,t,r,a,n,o,c){var l=this,u=new x.OperatorList,h=s.Dict.merge({xref:this.xref,dictArray:[n.get("Resources"),r]})
return this.getOperatorList({stream:a,task:c,resources:h,operatorList:u}).then((function(){return(0,d.getTilingPatternIR)({fnArray:u.fnArray,argsArray:u.argsArray},n,t)})).then((function(t){o.addDependencies(u.dependencies),o.addOp(e,t)}),(function(e){if(!(e instanceof i.AbortException)){if(l.options.ignoreErrors)return l.handler.send("UnsupportedFeature",{featureId:i.UNSUPPORTED_FEATURES.errorTilingPattern}),void(0,i.warn)('handleTilingType - ignoring pattern: "'.concat(e,'".'))
throw e}}))}},{key:"handleSetFont",value:function(e,t,r,a,n,o){var s,l=this,u=0
return t&&(t=t.slice(),s=t[0].name,u=t[1]),this.loadFont(s,r,e).then((function(t){return t.font.isType3Font?t.loadType3Data(l,e,n).then((function(){return a.addDependencies(t.type3Dependencies),t})).catch((function(e){return l.handler.send("UnsupportedFeature",{featureId:i.UNSUPPORTED_FEATURES.errorFontLoadType3}),new U({loadedName:"g_font_error",font:new c.ErrorFont("Type3 font load error: ".concat(e)),dict:t.font,extraProperties:l.options.fontExtraProperties})})):t})).then((function(e){return o.font=e.font,o.fontSize=u,o.fontName=s,e.send(l.handler),e.loadedName}))}},{key:"handleText",value:function(t,r){var a=r.font,n=a.charsToGlyphs(t)
a.data&&((!!(r.textRenderingMode&i.TextRenderingMode.ADD_TO_PATH_FLAG)||"Pattern"===r.fillColorSpace.name||a.disableFontFace||this.options.disableFontFace)&&e.buildFontPaths(a,n,this.handler))
return n}},{key:"ensureStateFont",value:function(e){if(!e.font){var t=new i.FormatError("Missing setFont (Tf) operator before text rendering operator.")
if(this.options.ignoreErrors)return this.handler.send("UnsupportedFeature",{featureId:i.UNSUPPORTED_FEATURES.errorFontState}),void(0,i.warn)('ensureStateFont: "'.concat(t,'".'))
throw t}}},{key:"setGState",value:(a=O(n.default.mark((function e(t){var r,a,o,c,l,u,h,f,d,p,g,m,v,b,y,w,k=this
return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(r=t.resources,a=t.gState,o=t.operatorList,c=t.cacheKey,l=t.task,u=t.stateManager,h=t.localGStateCache,f=t.localColorSpaceCache,d=a.objId,p=!0,g=[],m=a.getKeys(),v=Promise.resolve(),b=function(){var e=m[y],t=a.get(e)
switch(e){case"Type":break
case"LW":case"LC":case"LJ":case"ML":case"D":case"RI":case"FL":case"CA":case"ca":g.push([e,t])
break
case"Font":p=!1,v=v.then((function(){return k.handleSetFont(r,null,t[0],o,l,u.state).then((function(r){o.addDependency(r),g.push([e,[r,t[1]]])}))}))
break
case"BM":g.push([e,D(t)])
break
case"SMask":if((0,s.isName)(t,"None")){g.push([e,!1])
break}(0,s.isDict)(t)?(p=!1,v=v.then((function(){return k.handleSMask(t,r,o,l,u,f)})),g.push([e,!0])):(0,i.warn)("Unsupported SMask type")
break
case"TR":var n=k.handleTransferFunction(t)
g.push([e,n])
break
case"OP":case"op":case"OPM":case"BG":case"BG2":case"UCR":case"UCR2":case"TR2":case"HT":case"SM":case"SA":case"AIS":case"TK":(0,i.info)("graphic state operator "+e)
break
default:(0,i.info)("Unknown graphic state operator "+e)}},y=0,w=m.length;y<w;y++)b()
return e.abrupt("return",v.then((function(){g.length>0&&o.addOp(i.OPS.setGState,[g]),p&&h.set(c,d,g)})))
case 9:case"end":return e.stop()}}),e)}))),function(e){return a.apply(this,arguments)})},{key:"loadFont",value:function(t,r,a){var n,o=this,l=function(){return Promise.resolve(new U({loadedName:"g_font_error",font:new c.ErrorFont('Font "'.concat(t,'" is not available.')),dict:r,extraProperties:o.options.fontExtraProperties}))},u=this.xref
if(r){if(!(0,s.isRef)(r))throw new i.FormatError('The "font" object should be a reference.')
n=r}else{var h=a.get("Font")
h&&(n=h.getRaw(t))}if(!n){var f='Font "'.concat(t||r&&r.toString(),'" is not available')
if(!this.options.ignoreErrors&&!this.parsingType3Font)return(0,i.warn)("".concat(f,".")),l()
this.handler.send("UnsupportedFeature",{featureId:i.UNSUPPORTED_FEATURES.errorFontMissing}),(0,i.warn)("".concat(f," -- attempting to fallback to a default font.")),n=e.fallbackFontDict}if(this.fontCache.has(n))return this.fontCache.get(n)
if(r=u.fetchIfRef(n),!(0,s.isDict)(r))return l()
if(r.translated)return r.translated
var d,p,g=(0,i.createPromiseCapability)(),m=this.preEvaluateFont(r),v=m.descriptor,b=m.hash,y=(0,s.isRef)(n)
if(y&&(d="f".concat(n.toString())),b&&(0,s.isDict)(v)){v.fontAliases||(v.fontAliases=Object.create(null))
var w=v.fontAliases
if(w[b]){var k=w[b].aliasRef
if(y&&k&&this.fontCache.has(k))return this.fontCache.putAlias(n,k),this.fontCache.get(n)}else w[b]={fontID:this.idFactory.createFontId()}
y&&(w[b].aliasRef=n),d=w[b].fontID}y?this.fontCache.put(n,g.promise):(d||(d=this.idFactory.createFontId()),this.fontCache.put("id_".concat(d),g.promise)),(0,i.assert)(d&&d.startsWith("f"),'The "fontID" must be (correctly) defined.'),r.loadedName="".concat(this.idFactory.getDocId(),"_").concat(d),r.translated=g.promise
try{p=this.translateFont(m)}catch(S){p=Promise.reject(S)}return p.then((function(e){void 0!==e.fontType&&(u.stats.fontTypes[e.fontType]=!0)
g.resolve(new U({loadedName:r.loadedName,font:e,dict:r,extraProperties:o.options.fontExtraProperties}))})).catch((function(e){o.handler.send("UnsupportedFeature",{featureId:i.UNSUPPORTED_FEATURES.errorFontTranslate})
try{var t=v&&v.get("FontFile3"),a=t&&t.get("Subtype"),n=(0,c.getFontType)(m.type,a&&a.name)
u.stats.fontTypes[n]=!0}catch(s){}g.resolve(new U({loadedName:r.loadedName,font:new c.ErrorFont(e instanceof Error?e.message:e),dict:r,extraProperties:o.options.fontExtraProperties}))})),g.promise}},{key:"buildPath",value:function(e,t,r){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],n=e.length-1
if(r||(r=[]),n<0||e.fnArray[n]!==i.OPS.constructPath)a&&((0,i.warn)('Encountered path operator "'.concat(t,'" inside of a text object.')),e.addOp(i.OPS.save,null)),e.addOp(i.OPS.constructPath,[[t],r]),a&&e.addOp(i.OPS.restore,null)
else{var o=e.argsArray[n]
o[0].push(t),Array.prototype.push.apply(o[1],r)}}},{key:"parseColorSpace",value:function(e){var t=this,r=e.cs,a=e.resources,n=e.localColorSpaceCache
return b.ColorSpace.parseAsync({cs:r,xref:this.xref,resources:a,pdfFunctionFactory:this._pdfFunctionFactory,localColorSpaceCache:n}).catch((function(e){if(e instanceof i.AbortException)return null
if(t.options.ignoreErrors)return t.handler.send("UnsupportedFeature",{featureId:i.UNSUPPORTED_FEATURES.errorColorSpace}),(0,i.warn)('parseColorSpace - ignoring ColorSpace: "'.concat(e,'".')),null
throw e}))}},{key:"handleColorN",value:(r=O(n.default.mark((function e(t,r,a,o,c,l,u,h){var f,p,g,m,v,b,y
return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f=a[a.length-1],!(0,s.isName)(f)||!(p=c.get(f.name))){e.next=16
break}if(g=(0,s.isStream)(p)?p.dict:p,(m=g.get("PatternType"))!==R){e.next=9
break}return v=o.base?o.base.getRgb(a,0):null,e.abrupt("return",this.handleTilingType(r,v,l,p,g,t,u))
case 9:if(m!==B){e.next=15
break}return b=g.get("Shading"),y=g.getArray("Matrix"),p=d.Pattern.parseShading(b,y,this.xref,l,this.handler,this._pdfFunctionFactory,h),t.addOp(r,p.getIR()),e.abrupt("return",void 0)
case 15:throw new i.FormatError("Unknown PatternType: ".concat(m))
case 16:throw new i.FormatError("Unknown PatternName: ".concat(f))
case 17:case"end":return e.stop()}}),e,this)}))),function(e,t,a,n,i,o,s,c){return r.apply(this,arguments)})},{key:"parseMarkedContentProps",value:(t=O(n.default.mark((function e(t,r){var a,o,c,l,u,h
return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(0,s.isName)(t)){e.next=5
break}o=r.get("Properties"),a=o.get(t.name),e.next=10
break
case 5:if(!(0,s.isDict)(t)){e.next=9
break}a=t,e.next=10
break
case 9:throw new i.FormatError("Optional content properties malformed.")
case 10:if("OCG"!==(c=a.get("Type").name)){e.next=15
break}return e.abrupt("return",{type:c,id:a.objId})
case 15:if("OCMD"!==c){e.next=27
break}if(l=a.get("OCGs"),!Array.isArray(l)&&!(0,s.isDict)(l)){e.next=25
break}return u=[],Array.isArray(l)?a.get("OCGs").forEach((function(e){u.push(e.toString())})):u.push(l.objId),h=null,a.get("VE")&&(h=!0),e.abrupt("return",{type:c,ids:u,policy:(0,s.isName)(a.get("P"))?a.get("P").name:null,expression:h})
case 25:if(!(0,s.isRef)(l)){e.next=27
break}return e.abrupt("return",{type:c,id:l.toString()})
case 27:return e.abrupt("return",null)
case 28:case"end":return e.stop()}}),e)}))),function(e,r){return t.apply(this,arguments)})},{key:"getOperatorList",value:function(e){var t=this,r=e.stream,a=e.task,n=e.resources,o=e.operatorList,c=e.initialState,l=void 0===c?null:c
if(n=n||s.Dict.empty,l=l||new z,!o)throw new Error('getOperatorList: missing "operatorList" parameter')
var u=this,h=this.xref,f=!1,p=new m.LocalImageCache,g=new m.LocalColorSpaceCache,v=new m.LocalGStateCache,y=n.get("XObject")||s.Dict.empty,w=n.get("Pattern")||s.Dict.empty,k=new j(l),S=new G(r,h,k),x=new L
function C(e){for(var t=0,r=S.savedStatesDepth;t<r;t++)o.addOp(i.OPS.restore,[])}return new Promise((function e(t,r){var c=function(a){Promise.all([a,o.ready]).then((function(){try{e(t,r)}catch(a){r(a)}}),r)}
a.ensureNotTerminated(),x.reset()
for(var l,m,A,O,T,I={};!(l=x.check())&&(I.args=null,S.read(I));){var E=I.args,P=I.fn
switch(0|P){case i.OPS.paintXObject:if(T=E[0].name){var _=p.getByName(T)
if(_){o.addOp(_.fn,_.args),E=null
continue}}return void c(new Promise((function(e,t){if(!T)throw new i.FormatError("XObject must be referred to by name.")
var r=y.getRaw(T)
if(r instanceof s.Ref){var c=p.getByRef(r)
if(c)return o.addOp(c.fn,c.args),void e()
var l=u.globalImageCache.getData(r,u.pageIndex)
if(l)return o.addDependency(l.objId),o.addOp(l.fn,l.args),void e()
r=h.fetch(r)}if(!(0,s.isStream)(r))throw new i.FormatError("XObject should be a stream")
var f=r.dict.get("Subtype")
if(!(0,s.isName)(f))throw new i.FormatError("XObject should have a Name subtype")
if("Form"===f.name)return k.save(),void u.buildFormXObject(n,r,null,o,a,k.state.clone(),g).then((function(){k.restore(),e()}),t)
if("Image"!==f.name){if("PS"!==f.name)throw new i.FormatError("Unhandled XObject subtype ".concat(f.name));(0,i.info)("Ignored XObject subtype PS"),e()}else u.buildPaintImageXObject({resources:n,image:r,operatorList:o,cacheKey:T,localImageCache:p,localColorSpaceCache:g}).then(e,t)})).catch((function(e){if(!(e instanceof i.AbortException)){if(u.options.ignoreErrors)return u.handler.send("UnsupportedFeature",{featureId:i.UNSUPPORTED_FEATURES.errorXObject}),void(0,i.warn)('getOperatorList - ignoring XObject: "'.concat(e,'".'))
throw e}})))
case i.OPS.setFont:var F=E[1]
return void c(u.handleSetFont(n,E,null,o,a,k.state).then((function(e){o.addDependency(e),o.addOp(i.OPS.setFont,[e,F])})))
case i.OPS.beginText:f=!0
break
case i.OPS.endText:f=!1
break
case i.OPS.endInlineImage:var R=E[0].cacheKey
if(R){var B=p.getByName(R)
if(B){o.addOp(B.fn,B.args),E=null
continue}}return void c(u.buildPaintImageXObject({resources:n,image:E[0],isInline:!0,operatorList:o,cacheKey:R,localImageCache:p,localColorSpaceCache:g}))
case i.OPS.showText:if(!k.state.font){u.ensureStateFont(k.state)
continue}E[0]=u.handleText(E[0],k.state)
break
case i.OPS.showSpacedText:if(!k.state.font){u.ensureStateFont(k.state)
continue}var D=E[0],L=[],N=D.length,U=k.state
for(m=0;m<N;++m){var j=D[m];(0,i.isString)(j)?Array.prototype.push.apply(L,u.handleText(j,U)):(0,i.isNum)(j)&&L.push(j)}E[0]=L,P=i.OPS.showText
break
case i.OPS.nextLineShowText:if(!k.state.font){u.ensureStateFont(k.state)
continue}o.addOp(i.OPS.nextLine),E[0]=u.handleText(E[0],k.state),P=i.OPS.showText
break
case i.OPS.nextLineSetSpacingShowText:if(!k.state.font){u.ensureStateFont(k.state)
continue}o.addOp(i.OPS.nextLine),o.addOp(i.OPS.setWordSpacing,[E.shift()]),o.addOp(i.OPS.setCharSpacing,[E.shift()]),E[0]=u.handleText(E[0],k.state),P=i.OPS.showText
break
case i.OPS.setTextRenderingMode:k.state.textRenderingMode=E[0]
break
case i.OPS.setFillColorSpace:var q=b.ColorSpace.getCached(E[0],h,g)
if(q){k.state.fillColorSpace=q
continue}return void c(u.parseColorSpace({cs:E[0],resources:n,localColorSpaceCache:g}).then((function(e){e&&(k.state.fillColorSpace=e)})))
case i.OPS.setStrokeColorSpace:var z=b.ColorSpace.getCached(E[0],h,g)
if(z){k.state.strokeColorSpace=z
continue}return void c(u.parseColorSpace({cs:E[0],resources:n,localColorSpaceCache:g}).then((function(e){e&&(k.state.strokeColorSpace=e)})))
case i.OPS.setFillColor:E=(O=k.state.fillColorSpace).getRgb(E,0),P=i.OPS.setFillRGBColor
break
case i.OPS.setStrokeColor:E=(O=k.state.strokeColorSpace).getRgb(E,0),P=i.OPS.setStrokeRGBColor
break
case i.OPS.setFillGray:k.state.fillColorSpace=b.ColorSpace.singletons.gray,E=b.ColorSpace.singletons.gray.getRgb(E,0),P=i.OPS.setFillRGBColor
break
case i.OPS.setStrokeGray:k.state.strokeColorSpace=b.ColorSpace.singletons.gray,E=b.ColorSpace.singletons.gray.getRgb(E,0),P=i.OPS.setStrokeRGBColor
break
case i.OPS.setFillCMYKColor:k.state.fillColorSpace=b.ColorSpace.singletons.cmyk,E=b.ColorSpace.singletons.cmyk.getRgb(E,0),P=i.OPS.setFillRGBColor
break
case i.OPS.setStrokeCMYKColor:k.state.strokeColorSpace=b.ColorSpace.singletons.cmyk,E=b.ColorSpace.singletons.cmyk.getRgb(E,0),P=i.OPS.setStrokeRGBColor
break
case i.OPS.setFillRGBColor:k.state.fillColorSpace=b.ColorSpace.singletons.rgb,E=b.ColorSpace.singletons.rgb.getRgb(E,0)
break
case i.OPS.setStrokeRGBColor:k.state.strokeColorSpace=b.ColorSpace.singletons.rgb,E=b.ColorSpace.singletons.rgb.getRgb(E,0)
break
case i.OPS.setFillColorN:if("Pattern"===(O=k.state.fillColorSpace).name)return void c(u.handleColorN(o,i.OPS.setFillColorN,E,O,w,n,a,g))
E=O.getRgb(E,0),P=i.OPS.setFillRGBColor
break
case i.OPS.setStrokeColorN:if("Pattern"===(O=k.state.strokeColorSpace).name)return void c(u.handleColorN(o,i.OPS.setStrokeColorN,E,O,w,n,a,g))
E=O.getRgb(E,0),P=i.OPS.setStrokeRGBColor
break
case i.OPS.shadingFill:var G=n.get("Shading")
if(!G)throw new i.FormatError("No shading resource found")
var H=G.get(E[0].name)
if(!H)throw new i.FormatError("No shading object found")
E=[d.Pattern.parseShading(H,null,h,n,u.handler,u._pdfFunctionFactory,g).getIR()],P=i.OPS.shadingFill
break
case i.OPS.setGState:if(T=E[0].name){var W=v.getByName(T)
if(W){W.length>0&&o.addOp(i.OPS.setGState,[W]),E=null
continue}}return void c(new Promise((function(e,t){if(!T)throw new i.FormatError("GState must be referred to by name.")
var r=n.get("ExtGState")
if(!(r instanceof s.Dict))throw new i.FormatError("ExtGState should be a dictionary.")
var c=r.get(T)
if(!(c instanceof s.Dict))throw new i.FormatError("GState should be a dictionary.")
u.setGState({resources:n,gState:c,operatorList:o,cacheKey:T,task:a,stateManager:k,localGStateCache:v,localColorSpaceCache:g}).then(e,t)})).catch((function(e){if(!(e instanceof i.AbortException)){if(u.options.ignoreErrors)return u.handler.send("UnsupportedFeature",{featureId:i.UNSUPPORTED_FEATURES.errorExtGState}),void(0,i.warn)('getOperatorList - ignoring ExtGState: "'.concat(e,'".'))
throw e}})))
case i.OPS.moveTo:case i.OPS.lineTo:case i.OPS.curveTo:case i.OPS.curveTo2:case i.OPS.curveTo3:case i.OPS.closePath:case i.OPS.rectangle:u.buildPath(o,P,E,f)
continue
case i.OPS.markPoint:case i.OPS.markPointProps:case i.OPS.beginCompat:case i.OPS.endCompat:continue
case i.OPS.beginMarkedContentProps:if(!(0,s.isName)(E[0])){(0,i.warn)("Expected name for beginMarkedContentProps arg0=".concat(E[0]))
continue}if("OC"===E[0].name)return void c(u.parseMarkedContentProps(E[1],n).then((function(e){o.addOp(i.OPS.beginMarkedContentProps,["OC",e])})).catch((function(e){if(!(e instanceof i.AbortException)){if(u.options.ignoreErrors)return u.handler.send("UnsupportedFeature",{featureId:i.UNSUPPORTED_FEATURES.errorMarkedContent}),void(0,i.warn)('getOperatorList - ignoring beginMarkedContentProps: "'.concat(e,'".'))
throw e}})))
E=[E[0].name]
break
case i.OPS.beginMarkedContent:case i.OPS.endMarkedContent:default:if(null!==E){for(m=0,A=E.length;m<A&&!(E[m]instanceof s.Dict);m++);if(m<A){(0,i.warn)("getOperatorList - ignoring operator: "+P)
continue}}}o.addOp(P,E)}l?c(M):(C(),t())})).catch((function(e){if(!(e instanceof i.AbortException)){if(t.options.ignoreErrors)return t.handler.send("UnsupportedFeature",{featureId:i.UNSUPPORTED_FEATURES.errorOperatorList}),(0,i.warn)('getOperatorList - ignoring errors during "'.concat(a.name,'" ')+'task: "'.concat(e,'".')),void C()
throw e}}))}},{key:"getTextContent",value:function(e){var t=this,r=e.stream,a=e.task,n=e.resources,o=e.stateManager,c=void 0===o?null:o,l=e.normalizeWhitespace,u=void 0!==l&&l,f=e.combineTextItems,d=void 0!==f&&f,p=e.sink,g=e.seenStyles,b=void 0===g?Object.create(null):g
n=n||s.Dict.empty,c=c||new j(new q)
var y,w=/\s/g,k={items:[],styles:Object.create(null)},S={initialized:!1,str:[],width:0,height:0,vertical:!1,lastAdvanceWidth:0,lastAdvanceHeight:0,textAdvanceScale:0,spaceWidth:0,fakeSpaceMin:1/0,fakeMultiSpaceMin:1/0,fakeMultiSpaceMax:-0,textRunBreakAllowed:!1,transform:null,fontName:null},x=this,C=this.xref,A=null,O=new m.LocalImageCache,T=new m.LocalGStateCache,I=new G(r,C,c)
function E(){if(S.initialized)return S
var e=y.font
e.loadedName in b||(b[e.loadedName]=!0,k.styles[e.loadedName]={fontFamily:e.fallbackName,ascent:e.ascent,descent:e.descent,vertical:e.vertical}),S.fontName=e.loadedName
var t=[y.fontSize*y.textHScale,0,0,y.fontSize,0,y.textRise]
if(e.isType3Font&&y.fontSize<=1&&!(0,i.isArrayEqual)(y.fontMatrix,i.FONT_IDENTITY_MATRIX)){var r=e.bbox[3]-e.bbox[1]
r>0&&(t[3]*=r*y.fontMatrix[3])}var a=i.Util.transform(y.ctm,i.Util.transform(y.textMatrix,t))
S.transform=a,e.vertical?(S.width=Math.sqrt(a[0]*a[0]+a[1]*a[1]),S.height=0,S.vertical=!0):(S.width=0,S.height=Math.sqrt(a[2]*a[2]+a[3]*a[3]),S.vertical=!1)
var n=y.textLineMatrix[0],o=y.textLineMatrix[1],s=Math.sqrt(n*n+o*o)
n=y.ctm[0],o=y.ctm[1]
var c=Math.sqrt(n*n+o*o)
S.textAdvanceScale=c*s,S.lastAdvanceWidth=0,S.lastAdvanceHeight=0
var l=e.spaceWidth/1e3*y.fontSize
return l?(S.spaceWidth=l,S.fakeSpaceMin=.3*l,S.fakeMultiSpaceMin=1.5*l,S.fakeMultiSpaceMax=4*l,S.textRunBreakAllowed=!e.isMonospace):(S.spaceWidth=0,S.fakeSpaceMin=1/0,S.fakeMultiSpaceMin=1/0,S.fakeMultiSpaceMax=0,S.textRunBreakAllowed=!1),S.initialized=!0,S}function P(e){for(var t,r=0,a=e.length;r<a&&(t=e.charCodeAt(r))>=32&&t<=127;)r++
return r<a?e.replace(w," "):e}function _(e,t){return x.loadFont(e,t,n).then((function(e){y.font=e.font,y.fontMatrix=e.font.fontMatrix||i.FONT_IDENTITY_MATRIX}))}function F(e){for(var t=y.font,r=E(),a=0,n=0,i=t.charsToGlyphs(e),o=0;o<i.length;o++){var s=i[o],c=null
c=t.vertical&&s.vmetric?s.vmetric[0]:s.width
var l=s.unicode,u=(0,h.getNormalizedUnicodes)()
void 0!==u[l]&&(l=u[l]),l=(0,h.reverseIfRtl)(l)
var f=y.charSpacing
if(s.isSpace){var d=y.wordSpacing
f+=d,d>0&&R(d,r.str)}var p=0,g=0
if(t.vertical)n+=g=c*y.fontMatrix[0]*y.fontSize+f
else a+=p=(c*y.fontMatrix[0]*y.fontSize+f)*y.textHScale
y.translateTextMatrix(p,g),r.str.push(l)}return t.vertical?(r.lastAdvanceHeight=n,r.height+=Math.abs(n)):(r.lastAdvanceWidth=a,r.width+=a),r}function R(e,t){if(!(e<S.fakeSpaceMin))if(e<S.fakeMultiSpaceMin)t.push(" ")
else for(var r=Math.round(e/S.spaceWidth);r-- >0;)t.push(" ")}function B(){var e,t,r
S.initialized&&(S.vertical?S.height*=S.textAdvanceScale:S.width*=S.textAdvanceScale,k.items.push((t=(e=S).str.join(""),r=(0,v.bidi)(t,-1,e.vertical),{str:u?P(r.str):r.str,dir:r.dir,width:e.width,height:e.height,transform:e.transform,fontName:e.fontName})),S.initialized=!1,S.str.length=0)}function D(){var e=k.items.length
e>0&&(p.enqueue(k,e),k.items=[],k.styles=Object.create(null))}var N=new L
return new Promise((function e(t,r){var o=function(a){D(),Promise.all([a,p.ready]).then((function(){try{e(t,r)}catch(a){r(a)}}),r)}
a.ensureNotTerminated(),N.reset()
for(var l,h={},f=[];!(l=N.check())&&(f.length=0,h.args=f,I.read(h));){y=c.state
var g,m=h.fn
switch(f=h.args,0|m){case i.OPS.setFont:var v=f[0].name,w=f[1]
if(y.font&&v===y.fontName&&w===y.fontSize)break
return B(),y.fontName=v,y.fontSize=w,void o(_(v,null))
case i.OPS.setTextRise:B(),y.textRise=f[0]
break
case i.OPS.setHScale:B(),y.textHScale=f[0]/100
break
case i.OPS.setLeading:B(),y.leading=f[0]
break
case i.OPS.moveText:var P=!!y.font&&0===(y.font.vertical?f[0]:f[1])
if(g=f[0]-f[1],d&&P&&S.initialized&&g>0&&g<=S.fakeMultiSpaceMax){y.translateTextLineMatrix(f[0],f[1]),S.width+=f[0]-S.lastAdvanceWidth,S.height+=f[1]-S.lastAdvanceHeight,R(f[0]-S.lastAdvanceWidth-(f[1]-S.lastAdvanceHeight),S.str)
break}B(),y.translateTextLineMatrix(f[0],f[1]),y.textMatrix=y.textLineMatrix.slice()
break
case i.OPS.setLeadingMoveText:B(),y.leading=-f[1],y.translateTextLineMatrix(f[0],f[1]),y.textMatrix=y.textLineMatrix.slice()
break
case i.OPS.nextLine:B(),y.carriageReturn()
break
case i.OPS.setTextMatrix:if(g=y.calcTextLineMatrixAdvance(f[0],f[1],f[2],f[3],f[4],f[5]),d&&null!==g&&S.initialized&&g.value>0&&g.value<=S.fakeMultiSpaceMax){y.translateTextLineMatrix(g.width,g.height),S.width+=g.width-S.lastAdvanceWidth,S.height+=g.height-S.lastAdvanceHeight,R(g.width-S.lastAdvanceWidth-(g.height-S.lastAdvanceHeight),S.str)
break}B(),y.setTextMatrix(f[0],f[1],f[2],f[3],f[4],f[5]),y.setTextLineMatrix(f[0],f[1],f[2],f[3],f[4],f[5])
break
case i.OPS.setCharSpacing:y.charSpacing=f[0]
break
case i.OPS.setWordSpacing:y.wordSpacing=f[0]
break
case i.OPS.beginText:B(),y.textMatrix=i.IDENTITY_MATRIX.slice(),y.textLineMatrix=i.IDENTITY_MATRIX.slice()
break
case i.OPS.showSpacedText:if(!c.state.font){x.ensureStateFont(c.state)
continue}for(var L,U=f[0],q=0,z=U.length;q<z;q++)if("string"==typeof U[q])F(U[q])
else if((0,i.isNum)(U[q])){E(),g=U[q]*y.fontSize/1e3
var G=!1
y.font.vertical?(L=g,y.translateTextMatrix(0,L),(G=S.textRunBreakAllowed&&g>S.fakeMultiSpaceMax)||(S.height+=L)):(L=(g=-g)*y.textHScale,y.translateTextMatrix(L,0),(G=S.textRunBreakAllowed&&g>S.fakeMultiSpaceMax)||(S.width+=L)),G?B():g>0&&R(g,S.str)}break
case i.OPS.showText:if(!c.state.font){x.ensureStateFont(c.state)
continue}F(f[0])
break
case i.OPS.nextLineShowText:if(!c.state.font){x.ensureStateFont(c.state)
continue}B(),y.carriageReturn(),F(f[0])
break
case i.OPS.nextLineSetSpacingShowText:if(!c.state.font){x.ensureStateFont(c.state)
continue}B(),y.wordSpacing=f[0],y.charSpacing=f[1],y.carriageReturn(),F(f[2])
break
case i.OPS.paintXObject:B(),A||(A=n.get("XObject")||s.Dict.empty)
var H=f[0].name
if(H&&O.getByName(H))break
return void o(new Promise((function(e,t){if(!H)throw new i.FormatError("XObject must be referred to by name.")
var r=A.getRaw(H)
if(r instanceof s.Ref){if(O.getByRef(r))return void e()
r=C.fetch(r)}if(!(0,s.isStream)(r))throw new i.FormatError("XObject should be a stream")
var o=r.dict.get("Subtype")
if(!(0,s.isName)(o))throw new i.FormatError("XObject should have a Name subtype")
if("Form"!==o.name)return O.set(H,r.dict.objId,!0),void e()
var l=c.state.clone(),h=new j(l),f=r.dict.getArray("Matrix")
Array.isArray(f)&&6===f.length&&h.transform(f),D()
var g={enqueueInvoked:!1,enqueue:function(e,t){this.enqueueInvoked=!0,p.enqueue(e,t)},get desiredSize(){return p.desiredSize},get ready(){return p.ready}}
x.getTextContent({stream:r,task:a,resources:r.dict.get("Resources")||n,stateManager:h,normalizeWhitespace:u,combineTextItems:d,sink:g,seenStyles:b}).then((function(){g.enqueueInvoked||O.set(H,r.dict.objId,!0),e()}),t)})).catch((function(e){if(!(e instanceof i.AbortException)){if(!x.options.ignoreErrors)throw e;(0,i.warn)('getTextContent - ignoring XObject: "'.concat(e,'".'))}})))
case i.OPS.setGState:if((H=f[0].name)&&T.getByName(H))break
return void o(new Promise((function(e,t){if(!H)throw new i.FormatError("GState must be referred to by name.")
var r=n.get("ExtGState")
if(!(r instanceof s.Dict))throw new i.FormatError("ExtGState should be a dictionary.")
var a=r.get(H)
if(!(a instanceof s.Dict))throw new i.FormatError("GState should be a dictionary.")
var o=a.get("Font")
if(!o)return T.set(H,a.objId,!0),void e()
B(),y.fontName=null,y.fontSize=o[1],_(null,o[0]).then(e,t)})).catch((function(e){if(!(e instanceof i.AbortException)){if(!x.options.ignoreErrors)throw e;(0,i.warn)('getTextContent - ignoring ExtGState: "'.concat(e,'".'))}})))}if(k.items.length>=p.desiredSize){l=!0
break}}l?o(M):(B(),D(),t())})).catch((function(e){if(!(e instanceof i.AbortException)){if(t.options.ignoreErrors)return(0,i.warn)('getTextContent - ignoring errors during "'.concat(a.name,'" ')+'task: "'.concat(e,'".')),B(),void D()
throw e}}))}},{key:"extractDataStructures",value:function(e,t,r){var a,n=this,o=this.xref,u=e.get("ToUnicode")||t.get("ToUnicode"),h=u?this.readToUnicode(u):Promise.resolve(void 0)
if(r.composite){var f=e.get("CIDSystemInfo");(0,s.isDict)(f)&&(r.cidSystemInfo={registry:(0,i.stringToPDFString)(f.get("Registry")),ordering:(0,i.stringToPDFString)(f.get("Ordering")),supplement:f.get("Supplement")})
var d=e.get("CIDToGIDMap");(0,s.isStream)(d)&&(a=d.getBytes())}var p,g=[],m=null
if(e.has("Encoding")){if(p=e.get("Encoding"),(0,s.isDict)(p)){if(m=p.get("BaseEncoding"),m=(0,s.isName)(m)?m.name:null,p.has("Differences"))for(var v=p.get("Differences"),b=0,y=0,w=v.length;y<w;y++){var k=o.fetchIfRef(v[y])
if((0,i.isNum)(k))b=k
else{if(!(0,s.isName)(k))throw new i.FormatError("Invalid entry in 'Differences' array: ".concat(k))
g[b++]=k.name}}}else{if(!(0,s.isName)(p))throw new i.FormatError("Encoding is not a Name nor a Dict")
m=p.name}"MacRomanEncoding"!==m&&"MacExpertEncoding"!==m&&"WinAnsiEncoding"!==m&&(m=null)}if(m)r.defaultEncoding=(0,l.getEncoding)(m).slice()
else{var S=!!(r.flags&c.FontFlags.Symbolic),x=!!(r.flags&c.FontFlags.Nonsymbolic)
p=l.StandardEncoding,"TrueType"!==r.type||x||(p=l.WinAnsiEncoding),S&&(p=l.MacRomanEncoding,r.file||(/Symbol/i.test(r.name)?p=l.SymbolSetEncoding:/Dingbats|Wingdings/i.test(r.name)&&(p=l.ZapfDingbatsEncoding))),r.defaultEncoding=p}return r.differences=g,r.baseEncodingName=m,r.hasEncoding=!!m||g.length>0,r.dict=e,h.then((function(e){return r.toUnicode=e,n.buildToUnicode(r)})).then((function(e){return r.toUnicode=e,a&&(r.cidToGidMap=n.readCidToGidMap(a,e)),r}))}},{key:"_buildSimpleFontToUnicode",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];(0,i.assert)(!e.composite,"Must be a simple font.")
var r=[],a=e.defaultEncoding.slice(),n=e.baseEncodingName,o=e.differences
for(var s in o){var u=o[s]
".notdef"!==u&&(a[s]=u)}var f=(0,w.getGlyphsUnicode)()
for(var d in a){var p=a[d]
if(""!==p)if(void 0!==f[p])r[d]=String.fromCharCode(f[p])
else{var g=0
switch(p[0]){case"G":3===p.length&&(g=parseInt(p.substring(1),16))
break
case"g":5===p.length&&(g=parseInt(p.substring(1),16))
break
case"C":case"c":if(p.length>=3&&p.length<=4){var m=p.substring(1)
if(t){g=parseInt(m,16)
break}if(g=+m,Number.isNaN(g)&&Number.isInteger(parseInt(m,16)))return this._buildSimpleFontToUnicode(e,!0)}break
default:var v=(0,h.getUnicodeForGlyph)(p,f);-1!==v&&(g=v)}if(g>0&&g<=1114111&&Number.isInteger(g)){if(n&&g===+d){var b=(0,l.getEncoding)(n)
if(b&&(p=b[d])){r[d]=String.fromCharCode(f[p])
continue}}r[d]=String.fromCodePoint(g)}}}return new c.ToUnicodeMap(r)}},{key:"buildToUnicode",value:function(e){if(e.hasIncludedToUnicodeMap=!!e.toUnicode&&e.toUnicode.length>0,e.hasIncludedToUnicodeMap)return!e.composite&&e.hasEncoding&&(e.fallbackToUnicode=this._buildSimpleFontToUnicode(e)),Promise.resolve(e.toUnicode)
if(!e.composite)return Promise.resolve(this._buildSimpleFontToUnicode(e))
if(e.composite&&(e.cMap.builtInCMap&&!(e.cMap instanceof o.IdentityCMap)||"Adobe"===e.cidSystemInfo.registry&&("GB1"===e.cidSystemInfo.ordering||"CNS1"===e.cidSystemInfo.ordering||"Japan1"===e.cidSystemInfo.ordering||"Korea1"===e.cidSystemInfo.ordering))){var t=e.cidSystemInfo.registry,r=e.cidSystemInfo.ordering,a=s.Name.get(t+"-"+r+"-UCS2")
return o.CMapFactory.create({encoding:a,fetchBuiltInCMap:this._fetchBuiltInCMapBound,useCMap:null}).then((function(t){var r=e.cMap,a=[]
return r.forEach((function(e,r){if(r>65535)throw new i.FormatError("Max size of CID is 65,535")
var n=t.lookup(r)
n&&(a[e]=String.fromCharCode((n.charCodeAt(0)<<8)+n.charCodeAt(1)))})),new c.ToUnicodeMap(a)}))}return Promise.resolve(new c.IdentityToUnicodeMap(e.firstChar,e.lastChar))}},{key:"readToUnicode",value:function(e){var t=this,r=e
return(0,s.isName)(r)?o.CMapFactory.create({encoding:r,fetchBuiltInCMap:this._fetchBuiltInCMapBound,useCMap:null}).then((function(e){return e instanceof o.IdentityCMap?new c.IdentityToUnicodeMap(0,65535):new c.ToUnicodeMap(e.getMap())})):(0,s.isStream)(r)?o.CMapFactory.create({encoding:r,fetchBuiltInCMap:this._fetchBuiltInCMapBound,useCMap:null}).then((function(e){if(e instanceof o.IdentityCMap)return new c.IdentityToUnicodeMap(0,65535)
var t=new Array(e.length)
return e.forEach((function(e,r){for(var a=[],n=0;n<r.length;n+=2){var i=r.charCodeAt(n)<<8|r.charCodeAt(n+1)
if(55296==(63488&i)){n+=2
var o=r.charCodeAt(n)<<8|r.charCodeAt(n+1)
a.push(((1023&i)<<10)+(1023&o)+65536)}else a.push(i)}t[e]=String.fromCodePoint.apply(String,a)})),new c.ToUnicodeMap(t)}),(function(e){if(e instanceof i.AbortException)return null
if(t.options.ignoreErrors)return t.handler.send("UnsupportedFeature",{featureId:i.UNSUPPORTED_FEATURES.errorFontToUnicode}),(0,i.warn)('readToUnicode - ignoring ToUnicode data: "'.concat(e,'".')),null
throw e})):Promise.resolve(null)}},{key:"readCidToGidMap",value:function(e,t){for(var r=[],a=0,n=e.length;a<n;a++){var i=e[a++]<<8|e[a],o=a>>1;(0!==i||t.has(o))&&(r[o]=i)}return r}},{key:"extractWidths",value:function(e,t,r){var a,n,i,o,l,u,h,f,d=this.xref,p=[],g=0,m=[]
if(r.composite){if(g=e.has("DW")?e.get("DW"):1e3,f=e.get("W"))for(n=0,i=f.length;n<i;n++)if(u=d.fetchIfRef(f[n++]),h=d.fetchIfRef(f[n]),Array.isArray(h))for(o=0,l=h.length;o<l;o++)p[u++]=d.fetchIfRef(h[o])
else{var v=d.fetchIfRef(f[++n])
for(o=u;o<=h;o++)p[o]=v}if(r.vertical){var b=e.getArray("DW2")||[880,-1e3]
if(a=[b[1],.5*g,b[0]],b=e.get("W2"))for(n=0,i=b.length;n<i;n++)if(u=d.fetchIfRef(b[n++]),h=d.fetchIfRef(b[n]),Array.isArray(h))for(o=0,l=h.length;o<l;o++)m[u++]=[d.fetchIfRef(h[o++]),d.fetchIfRef(h[o++]),d.fetchIfRef(h[o])]
else{var y=[d.fetchIfRef(b[++n]),d.fetchIfRef(b[++n]),d.fetchIfRef(b[++n])]
for(o=u;o<=h;o++)m[o]=y}}}else{var w=r.firstChar
if(f=e.get("Widths")){for(o=w,n=0,i=f.length;n<i;n++)p[o++]=d.fetchIfRef(f[n])
g=parseFloat(t.get("MissingWidth"))||0}else{var k=e.get("BaseFont")
if((0,s.isName)(k)){var S=this.getBaseFontMetrics(k.name)
p=this.buildCharCodeToWidth(S.widths,r),g=S.defaultWidth}}}var x=!0,C=g
for(var A in p){var O=p[A]
if(O)if(C){if(C!==O){x=!1
break}}else C=O}x&&(r.flags|=c.FontFlags.FixedPitch),r.defaultWidth=g,r.widths=p,r.defaultVMetrics=a,r.vmetrics=m}},{key:"isSerifFont",value:function(e){var t=e.split("-")[0]
return t in(0,f.getSerifFonts)()||-1!==t.search(/serif/gi)}},{key:"getBaseFontMetrics",value:function(e){var t=0,r=[],a=!1,n=(0,f.getStdFontMap)()[e]||e,o=(0,k.getMetrics)()
n in o||(n=this.isSerifFont(e)?"Times-Roman":"Helvetica")
var s=o[n]
return(0,i.isNum)(s)?(t=s,a=!0):r=s(),{defaultWidth:t,monospace:a,widths:r}}},{key:"buildCharCodeToWidth",value:function(e,t){for(var r=Object.create(null),a=t.differences,n=t.defaultEncoding,i=0;i<256;i++)i in a&&e[a[i]]?r[i]=e[a[i]]:i in n&&e[n[i]]&&(r[i]=e[n[i]])
return r}},{key:"preEvaluateFont",value:function(e){var t=e,r=e.get("Subtype")
if(!(0,s.isName)(r))throw new i.FormatError("invalid font Subtype")
var a,n=!1
if("Type0"===r.name){var o=e.get("DescendantFonts")
if(!o)throw new i.FormatError("Descendant fonts are not specified")
if(r=(e=Array.isArray(o)?this.xref.fetchIfRef(o[0]):o).get("Subtype"),!(0,s.isName)(r))throw new i.FormatError("invalid font Subtype")
n=!0}var c=e.get("FontDescriptor")
if(c){var l=new S.MurmurHash3_64,u=t.getRaw("Encoding")
if((0,s.isName)(u))l.update(u.name)
else if((0,s.isRef)(u))l.update(u.toString())
else if((0,s.isDict)(u)){var h,f=T(u.getRawValues())
try{for(f.s();!(h=f.n()).done;){var d=h.value
if((0,s.isName)(d))l.update(d.name)
else if((0,s.isRef)(d))l.update(d.toString())
else if(Array.isArray(d)){for(var p=d.length,g=new Array(p),m=0;m<p;m++){var v=d[m];(0,s.isName)(v)?g[m]=v.name:((0,i.isNum)(v)||(0,s.isRef)(v))&&(g[m]=v.toString())}l.update(g.join())}}}catch(C){f.e(C)}finally{f.f()}}var b=e.get("FirstChar")||0,y=e.get("LastChar")||(n?65535:255)
l.update("".concat(b,"-").concat(y))
var w=e.get("ToUnicode")||t.get("ToUnicode")
if((0,s.isStream)(w)){var k=w.str||w
a=k.buffer?new Uint8Array(k.buffer.buffer,0,k.bufferLength):new Uint8Array(k.bytes.buffer,k.start,k.end-k.start),l.update(a)}else(0,s.isName)(w)&&l.update(w.name)
var x=e.get("Widths")||t.get("Widths")
x&&(a=new Uint8Array(new Uint32Array(x).buffer),l.update(a))}return{descriptor:c,dict:e,baseDict:t,composite:n,type:r.name,hash:l?l.hexdigest():""}}},{key:"translateFont",value:function(e){var t,r=this,a=e.baseDict,n=e.dict,l=e.composite,u=e.descriptor,h=e.type,d=l?65535:255,p=n.get("FirstChar")||0,g=n.get("LastChar")||d
if(!u){if("Type3"!==h){var m=n.get("BaseFont")
if(!(0,s.isName)(m))throw new i.FormatError("Base font is not specified")
m=m.name.replace(/[,_]/g,"-")
var v=this.getBaseFontMetrics(m),b=m.split("-")[0],y=(this.isSerifFont(b)?c.FontFlags.Serif:0)|(v.monospace?c.FontFlags.FixedPitch:0)|((0,f.getSymbolsFonts)()[b]?c.FontFlags.Symbolic:c.FontFlags.Nonsymbolic)
t={type:h,name:m,widths:v.widths,defaultWidth:v.defaultWidth,flags:y,firstChar:p,lastChar:g}
var w=n.get("Widths")
return this.extractDataStructures(n,n,t).then((function(e){if(w){for(var t=[],a=p,n=0,i=w.length;n<i;n++)t[a++]=r.xref.fetchIfRef(w[n])
e.widths=t}else e.widths=r.buildCharCodeToWidth(v.widths,e)
return new c.Font(m,null,e)}))}(u=new s.Dict(null)).set("FontName",s.Name.get(h)),u.set("FontBBox",n.getArray("FontBBox")||[0,0,0,0])}var k=u.get("FontName"),S=n.get("BaseFont")
if((0,i.isString)(k)&&(k=s.Name.get(k)),(0,i.isString)(S)&&(S=s.Name.get(S)),"Type3"!==h){var x=k&&k.name,C=S&&S.name
x!==C&&((0,i.info)("The FontDescriptor's FontName is \"".concat(x,'" but ')+"should be the same as the Font's BaseFont \"".concat(C,'".')),x&&C&&C.startsWith(x)&&(k=S))}if(k=k||S,!(0,s.isName)(k))throw new i.FormatError("invalid font name")
var A,O=u.get("FontFile","FontFile2","FontFile3")
if(O&&O.dict){var T=O.dict.get("Subtype")
T&&(T=T.name)
var I=O.dict.get("Length1"),E=O.dict.get("Length2"),P=O.dict.get("Length3")}if(t={type:h,name:k.name,subtype:T,file:O,length1:I,length2:E,length3:P,loadedName:a.loadedName,composite:l,fixedPitch:!1,fontMatrix:n.getArray("FontMatrix")||i.FONT_IDENTITY_MATRIX,firstChar:p||0,lastChar:g||d,bbox:u.getArray("FontBBox"),ascent:u.get("Ascent"),descent:u.get("Descent"),xHeight:u.get("XHeight"),capHeight:u.get("CapHeight"),flags:u.get("Flags"),italicAngle:u.get("ItalicAngle"),isType3Font:!1},l){var _=a.get("Encoding");(0,s.isName)(_)&&(t.cidEncoding=_.name),A=o.CMapFactory.create({encoding:_,fetchBuiltInCMap:this._fetchBuiltInCMapBound,useCMap:null}).then((function(e){t.cMap=e,t.vertical=t.cMap.vertical}))}else A=Promise.resolve(void 0)
return A.then((function(){return r.extractDataStructures(n,a,t)})).then((function(e){return r.extractWidths(n,u,e),"Type3"===h&&(e.isType3Font=!0),new c.Font(k.name,O,e)}))}},{key:"_pdfFunctionFactory",get:function(){var e=new p.PDFFunctionFactory({xref:this.xref,isEvalSupported:this.options.isEvalSupported})
return(0,i.shadow)(this,"_pdfFunctionFactory",e)}}],[{key:"buildFontPaths",value:function(e,t,r){function a(t){e.renderer.hasBuiltPath(t)||r.send("commonobj",["".concat(e.loadedName,"_path_").concat(t),"FontPath",e.renderer.getPathJs(t)])}var n,i=T(t)
try{for(i.s();!(n=i.n()).done;){var o=n.value
a(o.fontChar)
var s=o.accent
s&&s.fontChar&&a(s.fontChar)}}catch(c){i.e(c)}finally{i.f()}}},{key:"fallbackFontDict",get:function(){var e=new s.Dict
return e.set("BaseFont",s.Name.get("PDFJS-FallbackFont")),e.set("Type",s.Name.get("FallbackType")),e.set("Subtype",s.Name.get("FallbackType")),e.set("Encoding",s.Name.get("WinAnsiEncoding")),(0,i.shadow)(this,"fallbackFontDict",e)}}]),e}()
t.PartialEvaluator=N
var U=function(){function e(t){var r=t.loadedName,a=t.font,n=t.dict,i=t.extraProperties,o=void 0!==i&&i
E(this,e),this.loadedName=r,this.font=a,this.dict=n,this._extraProperties=o,this.type3Loaded=null,this.type3Dependencies=a.isType3Font?new Set:null,this.sent=!1}return _(e,[{key:"send",value:function(e){this.sent||(this.sent=!0,e.send("commonobj",[this.loadedName,"Font",this.font.exportData(this._extraProperties)]))}},{key:"fallback",value:function(e){if(this.font.data){this.font.disableFontFace=!0
var t=this.font.glyphCacheValues
N.buildFontPaths(this.font,t,e)}}},{key:"loadType3Data",value:function(e,t,r){if(this.type3Loaded)return this.type3Loaded
if(!this.font.isType3Font)throw new Error("Must be a Type3 font.")
var a=Object.create(e.options)
a.ignoreErrors=!1
var n=e.clone(a)
n.parsingType3Font=!0
var o,s=this.font,c=this.type3Dependencies,l=Promise.resolve(),u=this.dict.get("CharProcs"),h=this.dict.get("Resources")||t,f=Object.create(null),d=T(u.getKeys())
try{var p=function(){var e=o.value
l=l.then((function(){var t=u.get(e),a=new x.OperatorList
return n.getOperatorList({stream:t,task:r,resources:h,operatorList:a}).then((function(){f[e]=a.getIR()
var t,r=T(a.dependencies)
try{for(r.s();!(t=r.n()).done;){var n=t.value
c.add(n)}}catch(i){r.e(i)}finally{r.f()}})).catch((function(t){(0,i.warn)('Type3 font resource "'.concat(e,'" is not available.'))
var r=new x.OperatorList
f[e]=r.getIR()}))}))}
for(d.s();!(o=d.n()).done;)p()}catch(g){d.e(g)}finally{d.f()}return this.type3Loaded=l.then((function(){s.charProcOperatorList=f})),this.type3Loaded}}]),e}(),j=function(){function e(t){E(this,e),this.state=t,this.stateStack=[]}return _(e,[{key:"save",value:function(){var e=this.state
this.stateStack.push(this.state),this.state=e.clone()}},{key:"restore",value:function(){var e=this.stateStack.pop()
e&&(this.state=e)}},{key:"transform",value:function(e){this.state.ctm=i.Util.transform(this.state.ctm,e)}}]),e}(),q=function(){function e(){E(this,e),this.ctm=new Float32Array(i.IDENTITY_MATRIX),this.fontName=null,this.fontSize=0,this.font=null,this.fontMatrix=i.FONT_IDENTITY_MATRIX,this.textMatrix=i.IDENTITY_MATRIX.slice(),this.textLineMatrix=i.IDENTITY_MATRIX.slice(),this.charSpacing=0,this.wordSpacing=0,this.leading=0,this.textHScale=1,this.textRise=0}return _(e,[{key:"setTextMatrix",value:function(e,t,r,a,n,i){var o=this.textMatrix
o[0]=e,o[1]=t,o[2]=r,o[3]=a,o[4]=n,o[5]=i}},{key:"setTextLineMatrix",value:function(e,t,r,a,n,i){var o=this.textLineMatrix
o[0]=e,o[1]=t,o[2]=r,o[3]=a,o[4]=n,o[5]=i}},{key:"translateTextMatrix",value:function(e,t){var r=this.textMatrix
r[4]=r[0]*e+r[2]*t+r[4],r[5]=r[1]*e+r[3]*t+r[5]}},{key:"translateTextLineMatrix",value:function(e,t){var r=this.textLineMatrix
r[4]=r[0]*e+r[2]*t+r[4],r[5]=r[1]*e+r[3]*t+r[5]}},{key:"calcTextLineMatrixAdvance",value:function(e,t,r,a,n,i){var o=this.font
if(!o)return null
var s=this.textLineMatrix
if(e!==s[0]||t!==s[1]||r!==s[2]||a!==s[3])return null
var c=n-s[4],l=i-s[5]
if(o.vertical&&0!==c||!o.vertical&&0!==l)return null
var u,h,f=e*a-t*r
return o.vertical?(u=-l*r/f,h=l*e/f):(u=c*a/f,h=-c*t/f),{width:u,height:h,value:o.vertical?h:u}}},{key:"calcRenderMatrix",value:function(e){var t=[this.fontSize*this.textHScale,0,0,this.fontSize,0,this.textRise]
return i.Util.transform(e,i.Util.transform(this.textMatrix,t))}},{key:"carriageReturn",value:function(){this.translateTextLineMatrix(0,-this.leading),this.textMatrix=this.textLineMatrix.slice()}},{key:"clone",value:function(){var e=Object.create(this)
return e.textMatrix=this.textMatrix.slice(),e.textLineMatrix=this.textLineMatrix.slice(),e.fontMatrix=this.fontMatrix.slice(),e}}]),e}(),z=function(){function e(){E(this,e),this.ctm=new Float32Array(i.IDENTITY_MATRIX),this.font=null,this.textRenderingMode=i.TextRenderingMode.FILL,this.fillColorSpace=b.ColorSpace.singletons.gray,this.strokeColorSpace=b.ColorSpace.singletons.gray}return _(e,[{key:"clone",value:function(){return Object.create(this)}}]),e}(),G=function(){function e(t,r,a){E(this,e),this.parser=new g.Parser({lexer:new g.Lexer(t,e.opMap),xref:r}),this.stateManager=a,this.nonProcessedArgs=[],this._numInvalidPathOPS=0}return _(e,null,[{key:"opMap",get:function(){var e=(0,u.getLookupTableFactory)((function(e){e.w={id:i.OPS.setLineWidth,numArgs:1,variableArgs:!1},e.J={id:i.OPS.setLineCap,numArgs:1,variableArgs:!1},e.j={id:i.OPS.setLineJoin,numArgs:1,variableArgs:!1},e.M={id:i.OPS.setMiterLimit,numArgs:1,variableArgs:!1},e.d={id:i.OPS.setDash,numArgs:2,variableArgs:!1},e.ri={id:i.OPS.setRenderingIntent,numArgs:1,variableArgs:!1},e.i={id:i.OPS.setFlatness,numArgs:1,variableArgs:!1},e.gs={id:i.OPS.setGState,numArgs:1,variableArgs:!1},e.q={id:i.OPS.save,numArgs:0,variableArgs:!1},e.Q={id:i.OPS.restore,numArgs:0,variableArgs:!1},e.cm={id:i.OPS.transform,numArgs:6,variableArgs:!1},e.m={id:i.OPS.moveTo,numArgs:2,variableArgs:!1},e.l={id:i.OPS.lineTo,numArgs:2,variableArgs:!1},e.c={id:i.OPS.curveTo,numArgs:6,variableArgs:!1},e.v={id:i.OPS.curveTo2,numArgs:4,variableArgs:!1},e.y={id:i.OPS.curveTo3,numArgs:4,variableArgs:!1},e.h={id:i.OPS.closePath,numArgs:0,variableArgs:!1},e.re={id:i.OPS.rectangle,numArgs:4,variableArgs:!1},e.S={id:i.OPS.stroke,numArgs:0,variableArgs:!1},e.s={id:i.OPS.closeStroke,numArgs:0,variableArgs:!1},e.f={id:i.OPS.fill,numArgs:0,variableArgs:!1},e.F={id:i.OPS.fill,numArgs:0,variableArgs:!1},e["f*"]={id:i.OPS.eoFill,numArgs:0,variableArgs:!1},e.B={id:i.OPS.fillStroke,numArgs:0,variableArgs:!1},e["B*"]={id:i.OPS.eoFillStroke,numArgs:0,variableArgs:!1},e.b={id:i.OPS.closeFillStroke,numArgs:0,variableArgs:!1},e["b*"]={id:i.OPS.closeEOFillStroke,numArgs:0,variableArgs:!1},e.n={id:i.OPS.endPath,numArgs:0,variableArgs:!1},e.W={id:i.OPS.clip,numArgs:0,variableArgs:!1},e["W*"]={id:i.OPS.eoClip,numArgs:0,variableArgs:!1}
e.BT={id:i.OPS.beginText,numArgs:0,variableArgs:!1},e.ET={id:i.OPS.endText,numArgs:0,variableArgs:!1},e.Tc={id:i.OPS.setCharSpacing,numArgs:1,variableArgs:!1},e.Tw={id:i.OPS.setWordSpacing,numArgs:1,variableArgs:!1},e.Tz={id:i.OPS.setHScale,numArgs:1,variableArgs:!1},e.TL={id:i.OPS.setLeading,numArgs:1,variableArgs:!1},e.Tf={id:i.OPS.setFont,numArgs:2,variableArgs:!1},e.Tr={id:i.OPS.setTextRenderingMode,numArgs:1,variableArgs:!1},e.Ts={id:i.OPS.setTextRise,numArgs:1,variableArgs:!1},e.Td={id:i.OPS.moveText,numArgs:2,variableArgs:!1},e.TD={id:i.OPS.setLeadingMoveText,numArgs:2,variableArgs:!1},e.Tm={id:i.OPS.setTextMatrix,numArgs:6,variableArgs:!1},e["T*"]={id:i.OPS.nextLine,numArgs:0,variableArgs:!1},e.Tj={id:i.OPS.showText,numArgs:1,variableArgs:!1},e.TJ={id:i.OPS.showSpacedText,numArgs:1,variableArgs:!1},e["'"]={id:i.OPS.nextLineShowText,numArgs:1,variableArgs:!1},e['"']={id:i.OPS.nextLineSetSpacingShowText,numArgs:3,variableArgs:!1},e.d0={id:i.OPS.setCharWidth,numArgs:2,variableArgs:!1},e.d1={id:i.OPS.setCharWidthAndBounds,numArgs:6,variableArgs:!1},e.CS={id:i.OPS.setStrokeColorSpace,numArgs:1,variableArgs:!1},e.cs={id:i.OPS.setFillColorSpace,numArgs:1,variableArgs:!1},e.SC={id:i.OPS.setStrokeColor,numArgs:4,variableArgs:!0},e.SCN={id:i.OPS.setStrokeColorN,numArgs:33,variableArgs:!0},e.sc={id:i.OPS.setFillColor,numArgs:4,variableArgs:!0},e.scn={id:i.OPS.setFillColorN,numArgs:33,variableArgs:!0},e.G={id:i.OPS.setStrokeGray,numArgs:1,variableArgs:!1},e.g={id:i.OPS.setFillGray,numArgs:1,variableArgs:!1},e.RG={id:i.OPS.setStrokeRGBColor,numArgs:3,variableArgs:!1},e.rg={id:i.OPS.setFillRGBColor,numArgs:3,variableArgs:!1},e.K={id:i.OPS.setStrokeCMYKColor,numArgs:4,variableArgs:!1}
e.k={id:i.OPS.setFillCMYKColor,numArgs:4,variableArgs:!1},e.sh={id:i.OPS.shadingFill,numArgs:1,variableArgs:!1},e.BI={id:i.OPS.beginInlineImage,numArgs:0,variableArgs:!1},e.ID={id:i.OPS.beginImageData,numArgs:0,variableArgs:!1},e.EI={id:i.OPS.endInlineImage,numArgs:1,variableArgs:!1},e.Do={id:i.OPS.paintXObject,numArgs:1,variableArgs:!1},e.MP={id:i.OPS.markPoint,numArgs:1,variableArgs:!1},e.DP={id:i.OPS.markPointProps,numArgs:2,variableArgs:!1},e.BMC={id:i.OPS.beginMarkedContent,numArgs:1,variableArgs:!1},e.BDC={id:i.OPS.beginMarkedContentProps,numArgs:2,variableArgs:!1},e.EMC={id:i.OPS.endMarkedContent,numArgs:0,variableArgs:!1},e.BX={id:i.OPS.beginCompat,numArgs:0,variableArgs:!1},e.EX={id:i.OPS.endCompat,numArgs:0,variableArgs:!1},e.BM=null,e.BD=null,e.true=null,e.fa=null,e.fal=null,e.fals=null,e.false=null,e.nu=null,e.nul=null,e.null=null}))
return(0,i.shadow)(this,"opMap",e())}},{key:"MAX_INVALID_PATH_OPS",get:function(){return(0,i.shadow)(this,"MAX_INVALID_PATH_OPS",20)}}]),_(e,[{key:"read",value:function(t){for(var r=t.args;;){var a=this.parser.getObj()
if(a instanceof s.Cmd){var n=a.cmd,o=e.opMap[n]
if(!o){(0,i.warn)('Unknown command "'.concat(n,'".'))
continue}var c=o.id,l=o.numArgs,u=null!==r?r.length:0
if(o.variableArgs)u>l&&(0,i.info)("Command ".concat(n,": expected [0, ").concat(l,"] args, ")+"but received ".concat(u," args."))
else{if(u!==l){for(var h=this.nonProcessedArgs;u>l;)h.push(r.shift()),u--
for(;u<l&&0!==h.length;)null===r&&(r=[]),r.unshift(h.pop()),u++}if(u<l){var f="command ".concat(n,": expected ").concat(l," args, ")+"but received ".concat(u," args.")
if(c>=i.OPS.moveTo&&c<=i.OPS.endPath&&++this._numInvalidPathOPS>e.MAX_INVALID_PATH_OPS)throw new i.FormatError("Invalid ".concat(f));(0,i.warn)("Skipping ".concat(f)),null!==r&&(r.length=0)
continue}}return this.preprocessCommand(c,r),t.fn=c,t.args=r,!0}if(a===s.EOF)return!1
if(null!==a&&(null===r&&(r=[]),r.push(a),r.length>33))throw new i.FormatError("Too many arguments")}}},{key:"preprocessCommand",value:function(e,t){switch(0|e){case i.OPS.save:this.stateManager.save()
break
case i.OPS.restore:this.stateManager.restore()
break
case i.OPS.transform:this.stateManager.transform(t)}}},{key:"savedStatesDepth",get:function(){return this.stateManager.stateStack.length}}]),e}()},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.CMapFactory=t.IdentityCMap=t.CMap=void 0
var a,n=(a=r(2))&&a.__esModule?a:{default:a},i=r(5),o=r(202),s=r(208),c=r(205),l=r(209)
function u(e,t,r,a,n,i,o){try{var s=e[i](o),c=s.value}catch(l){return void r(l)}s.done?t(c):Promise.resolve(c).then(a,n)}function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,a=g(e)
if(t){var n=g(this).constructor
r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments)
return p(this,r)}}function p(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var r=0;r<t.length;r++){var a=t[r]
a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function b(e,t,r){return t&&v(e.prototype,t),r&&v(e,r),e}var y=["Adobe-GB1-UCS2","Adobe-CNS1-UCS2","Adobe-Japan1-UCS2","Adobe-Korea1-UCS2","78-EUC-H","78-EUC-V","78-H","78-RKSJ-H","78-RKSJ-V","78-V","78ms-RKSJ-H","78ms-RKSJ-V","83pv-RKSJ-H","90ms-RKSJ-H","90ms-RKSJ-V","90msp-RKSJ-H","90msp-RKSJ-V","90pv-RKSJ-H","90pv-RKSJ-V","Add-H","Add-RKSJ-H","Add-RKSJ-V","Add-V","Adobe-CNS1-0","Adobe-CNS1-1","Adobe-CNS1-2","Adobe-CNS1-3","Adobe-CNS1-4","Adobe-CNS1-5","Adobe-CNS1-6","Adobe-GB1-0","Adobe-GB1-1","Adobe-GB1-2","Adobe-GB1-3","Adobe-GB1-4","Adobe-GB1-5","Adobe-Japan1-0","Adobe-Japan1-1","Adobe-Japan1-2","Adobe-Japan1-3","Adobe-Japan1-4","Adobe-Japan1-5","Adobe-Japan1-6","Adobe-Korea1-0","Adobe-Korea1-1","Adobe-Korea1-2","B5-H","B5-V","B5pc-H","B5pc-V","CNS-EUC-H","CNS-EUC-V","CNS1-H","CNS1-V","CNS2-H","CNS2-V","ETHK-B5-H","ETHK-B5-V","ETen-B5-H","ETen-B5-V","ETenms-B5-H","ETenms-B5-V","EUC-H","EUC-V","Ext-H","Ext-RKSJ-H","Ext-RKSJ-V","Ext-V","GB-EUC-H","GB-EUC-V","GB-H","GB-V","GBK-EUC-H","GBK-EUC-V","GBK2K-H","GBK2K-V","GBKp-EUC-H","GBKp-EUC-V","GBT-EUC-H","GBT-EUC-V","GBT-H","GBT-V","GBTpc-EUC-H","GBTpc-EUC-V","GBpc-EUC-H","GBpc-EUC-V","H","HKdla-B5-H","HKdla-B5-V","HKdlb-B5-H","HKdlb-B5-V","HKgccs-B5-H","HKgccs-B5-V","HKm314-B5-H","HKm314-B5-V","HKm471-B5-H","HKm471-B5-V","HKscs-B5-H","HKscs-B5-V","Hankaku","Hiragana","KSC-EUC-H","KSC-EUC-V","KSC-H","KSC-Johab-H","KSC-Johab-V","KSC-V","KSCms-UHC-H","KSCms-UHC-HW-H","KSCms-UHC-HW-V","KSCms-UHC-V","KSCpc-EUC-H","KSCpc-EUC-V","Katakana","NWP-H","NWP-V","RKSJ-H","RKSJ-V","Roman","UniCNS-UCS2-H","UniCNS-UCS2-V","UniCNS-UTF16-H","UniCNS-UTF16-V","UniCNS-UTF32-H","UniCNS-UTF32-V","UniCNS-UTF8-H","UniCNS-UTF8-V","UniGB-UCS2-H","UniGB-UCS2-V","UniGB-UTF16-H","UniGB-UTF16-V","UniGB-UTF32-H","UniGB-UTF32-V","UniGB-UTF8-H","UniGB-UTF8-V","UniJIS-UCS2-H","UniJIS-UCS2-HW-H","UniJIS-UCS2-HW-V","UniJIS-UCS2-V","UniJIS-UTF16-H","UniJIS-UTF16-V","UniJIS-UTF32-H","UniJIS-UTF32-V","UniJIS-UTF8-H","UniJIS-UTF8-V","UniJIS2004-UTF16-H","UniJIS2004-UTF16-V","UniJIS2004-UTF32-H","UniJIS2004-UTF32-V","UniJIS2004-UTF8-H","UniJIS2004-UTF8-V","UniJISPro-UCS2-HW-V","UniJISPro-UCS2-V","UniJISPro-UTF8-V","UniJISX0213-UTF32-H","UniJISX0213-UTF32-V","UniJISX02132004-UTF32-H","UniJISX02132004-UTF32-V","UniKS-UCS2-H","UniKS-UCS2-V","UniKS-UTF16-H","UniKS-UTF16-V","UniKS-UTF32-H","UniKS-UTF32-V","UniKS-UTF8-H","UniKS-UTF8-V","V","WP-Symbol"],w=Math.pow(2,24)-1,k=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
m(this,e),this.codespaceRanges=[[],[],[],[]],this.numCodespaceRanges=0,this._map=[],this.name="",this.vertical=!1,this.useCMap=null,this.builtInCMap=t}return b(e,[{key:"addCodespaceRange",value:function(e,t,r){this.codespaceRanges[e-1].push(t,r),this.numCodespaceRanges++}},{key:"mapCidRange",value:function(e,t,r){if(t-e>w)throw new Error("mapCidRange - ignoring data above MAX_MAP_RANGE.")
for(;e<=t;)this._map[e++]=r++}},{key:"mapBfRange",value:function(e,t,r){if(t-e>w)throw new Error("mapBfRange - ignoring data above MAX_MAP_RANGE.")
for(var a=r.length-1;e<=t;)this._map[e++]=r,r=r.substring(0,a)+String.fromCharCode(r.charCodeAt(a)+1)}},{key:"mapBfRangeToArray",value:function(e,t,r){if(t-e>w)throw new Error("mapBfRangeToArray - ignoring data above MAX_MAP_RANGE.")
for(var a=r.length,n=0;e<=t&&n<a;)this._map[e]=r[n++],++e}},{key:"mapOne",value:function(e,t){this._map[e]=t}},{key:"lookup",value:function(e){return this._map[e]}},{key:"contains",value:function(e){return void 0!==this._map[e]}},{key:"forEach",value:function(e){var t=this._map,r=t.length
if(r<=65536)for(var a=0;a<r;a++)void 0!==t[a]&&e(a,t[a])
else for(var n in t)e(n,t[n])}},{key:"charCodeOf",value:function(e){var t=this._map
if(t.length<=65536)return t.indexOf(e)
for(var r in t)if(t[r]===e)return 0|r
return-1}},{key:"getMap",value:function(){return this._map}},{key:"readCharCode",value:function(e,t,r){for(var a=0,n=this.codespaceRanges,i=0,o=n.length;i<o;i++){a=(a<<8|e.charCodeAt(t+i))>>>0
for(var s=n[i],c=0,l=s.length;c<l;){var u=s[c++],h=s[c++]
if(a>=u&&a<=h)return r.charcode=a,void(r.length=i+1)}}r.charcode=0,r.length=1}},{key:"length",get:function(){return this._map.length}},{key:"isIdentityCMap",get:function(){if("Identity-H"!==this.name&&"Identity-V"!==this.name)return!1
if(65536!==this._map.length)return!1
for(var e=0;e<65536;e++)if(this._map[e]!==e)return!1
return!0}}]),e}()
t.CMap=k
var S=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)})(r,e)
var t=d(r)
function r(e,a){var n
return m(this,r),(n=t.call(this)).vertical=e,n.addCodespaceRange(a,0,65535),n}return b(r,[{key:"mapCidRange",value:function(e,t,r){(0,i.unreachable)("should not call mapCidRange")}},{key:"mapBfRange",value:function(e,t,r){(0,i.unreachable)("should not call mapBfRange")}},{key:"mapBfRangeToArray",value:function(e,t,r){(0,i.unreachable)("should not call mapBfRangeToArray")}},{key:"mapOne",value:function(e,t){(0,i.unreachable)("should not call mapCidOne")}},{key:"lookup",value:function(e){return Number.isInteger(e)&&e<=65535?e:void 0}},{key:"contains",value:function(e){return Number.isInteger(e)&&e<=65535}},{key:"forEach",value:function(e){for(var t=0;t<=65535;t++)e(t,t)}},{key:"charCodeOf",value:function(e){return Number.isInteger(e)&&e<=65535?e:-1}},{key:"getMap",value:function(){for(var e=new Array(65536),t=0;t<=65535;t++)e[t]=t
return e}},{key:"length",get:function(){return 65536}},{key:"isIdentityCMap",get:function(){(0,i.unreachable)("should not access .isIdentityCMap")}}]),r}(k)
t.IdentityCMap=S
var x=function(){function e(e,t){for(var r=0,a=0;a<=t;a++)r=r<<8|e[a]
return r>>>0}function t(e,t){return 1===t?String.fromCharCode(e[0],e[1]):3===t?String.fromCharCode(e[0],e[1],e[2],e[3]):String.fromCharCode.apply(null,e.subarray(0,t+1))}function r(e,t,r){for(var a=0,n=r;n>=0;n--)a+=e[n]+t[n],e[n]=255&a,a>>=8}function a(e,t){for(var r=1,a=t;a>=0&&r>0;a--)r+=e[a],e[a]=255&r,r>>=8}var n=16
function o(e){this.buffer=e,this.pos=0,this.end=e.length,this.tmpBuf=new Uint8Array(19)}function s(){}return o.prototype={readByte:function(){return this.pos>=this.end?-1:this.buffer[this.pos++]},readNumber:function(){var e,t=0
do{var r=this.readByte()
if(r<0)throw new i.FormatError("unexpected EOF in bcmap")
e=!(128&r),t=t<<7|127&r}while(!e)
return t},readSigned:function(){var e=this.readNumber()
return 1&e?~(e>>>1):e>>>1},readHex:function(e,t){e.set(this.buffer.subarray(this.pos,this.pos+t+1)),this.pos+=t+1},readHexNumber:function(e,t){var r,a=this.tmpBuf,n=0
do{var o=this.readByte()
if(o<0)throw new i.FormatError("unexpected EOF in bcmap")
r=!(128&o),a[n++]=127&o}while(!r)
for(var s=t,c=0,l=0;s>=0;){for(;l<8&&a.length>0;)c=a[--n]<<l|c,l+=7
e[s]=255&c,s--,c>>=8,l-=8}},readHexSigned:function(e,t){this.readHexNumber(e,t)
for(var r=1&e[t]?255:0,a=0,n=0;n<=t;n++)a=(1&a)<<8|e[n],e[n]=a>>1^r},readString:function(){for(var e=this.readNumber(),t="",r=0;r<e;r++)t+=String.fromCharCode(this.readNumber())
return t}},s.prototype={process:function(i,s,c){return new Promise((function(l,u){var h=new o(i),f=h.readByte()
s.vertical=!!(1&f)
for(var d,p,g=null,m=new Uint8Array(n),v=new Uint8Array(n),b=new Uint8Array(n),y=new Uint8Array(n),w=new Uint8Array(n);(p=h.readByte())>=0;){var k=p>>5
if(7!==k){var S=!!(16&p),x=15&p
if(x+1>n)throw new Error("processBinaryCMap: Invalid dataSize.")
var C,A=h.readNumber()
switch(k){case 0:for(h.readHex(m,x),h.readHexNumber(v,x),r(v,m,x),s.addCodespaceRange(x+1,e(m,x),e(v,x)),C=1;C<A;C++)a(v,x),h.readHexNumber(m,x),r(m,v,x),h.readHexNumber(v,x),r(v,m,x),s.addCodespaceRange(x+1,e(m,x),e(v,x))
break
case 1:for(h.readHex(m,x),h.readHexNumber(v,x),r(v,m,x),h.readNumber(),C=1;C<A;C++)a(v,x),h.readHexNumber(m,x),r(m,v,x),h.readHexNumber(v,x),r(v,m,x),h.readNumber()
break
case 2:for(h.readHex(b,x),d=h.readNumber(),s.mapOne(e(b,x),d),C=1;C<A;C++)a(b,x),S||(h.readHexNumber(w,x),r(b,w,x)),d=h.readSigned()+(d+1),s.mapOne(e(b,x),d)
break
case 3:for(h.readHex(m,x),h.readHexNumber(v,x),r(v,m,x),d=h.readNumber(),s.mapCidRange(e(m,x),e(v,x),d),C=1;C<A;C++)a(v,x),S?m.set(v):(h.readHexNumber(m,x),r(m,v,x)),h.readHexNumber(v,x),r(v,m,x),d=h.readNumber(),s.mapCidRange(e(m,x),e(v,x),d)
break
case 4:for(h.readHex(b,1),h.readHex(y,x),s.mapOne(e(b,1),t(y,x)),C=1;C<A;C++)a(b,1),S||(h.readHexNumber(w,1),r(b,w,1)),a(y,x),h.readHexSigned(w,x),r(y,w,x),s.mapOne(e(b,1),t(y,x))
break
case 5:for(h.readHex(m,1),h.readHexNumber(v,1),r(v,m,1),h.readHex(y,x),s.mapBfRange(e(m,1),e(v,1),t(y,x)),C=1;C<A;C++)a(v,1),S?m.set(v):(h.readHexNumber(m,1),r(m,v,1)),h.readHexNumber(v,1),r(v,m,1),h.readHex(y,x),s.mapBfRange(e(m,1),e(v,1),t(y,x))
break
default:return void u(new Error("processBinaryCMap: Unknown type: "+k))}}else switch(31&p){case 0:h.readString()
break
case 1:g=h.readString()}}l(g?c(g):s)}))}},s}(),C=function(){function e(e){for(var t=0,r=0;r<e.length;r++)t=t<<8|e.charCodeAt(r)
return t>>>0}function t(e){if(!(0,i.isString)(e))throw new i.FormatError("Malformed CMap: expected string.")}function r(e){if(!Number.isInteger(e))throw new i.FormatError("Malformed CMap: expected int.")}function a(r,a){for(;;){var n=a.getObj()
if((0,o.isEOF)(n))break
if((0,o.isCmd)(n,"endbfchar"))return
t(n)
var i=e(n)
t(n=a.getObj())
var s=n
r.mapOne(i,s)}}function h(r,a){for(;;){var n=a.getObj()
if((0,o.isEOF)(n))break
if((0,o.isCmd)(n,"endbfrange"))return
t(n)
var s=e(n)
t(n=a.getObj())
var c=e(n)
if(n=a.getObj(),Number.isInteger(n)||(0,i.isString)(n)){var l=Number.isInteger(n)?String.fromCharCode(n):n
r.mapBfRange(s,c,l)}else{if(!(0,o.isCmd)(n,"["))break
n=a.getObj()
for(var u=[];!(0,o.isCmd)(n,"]")&&!(0,o.isEOF)(n);)u.push(n),n=a.getObj()
r.mapBfRangeToArray(s,c,u)}}throw new i.FormatError("Invalid bf range.")}function f(a,n){for(;;){var i=n.getObj()
if((0,o.isEOF)(i))break
if((0,o.isCmd)(i,"endcidchar"))return
t(i)
var s=e(i)
r(i=n.getObj())
var c=i
a.mapOne(s,c)}}function d(a,n){for(;;){var i=n.getObj()
if((0,o.isEOF)(i))break
if((0,o.isCmd)(i,"endcidrange"))return
t(i)
var s=e(i)
t(i=n.getObj())
var c=e(i)
r(i=n.getObj())
var l=i
a.mapCidRange(s,c,l)}}function p(t,r){for(;;){var a=r.getObj()
if((0,o.isEOF)(a))break
if((0,o.isCmd)(a,"endcodespacerange"))return
if(!(0,i.isString)(a))break
var n=e(a)
if(a=r.getObj(),!(0,i.isString)(a))break
var s=e(a)
t.addCodespaceRange(a.length,n,s)}throw new i.FormatError("Invalid codespace range.")}function g(e,t){var r=t.getObj()
Number.isInteger(r)&&(e.vertical=!!r)}function m(e,t){var r=t.getObj();(0,o.isName)(r)&&(0,i.isString)(r.name)&&(e.name=r.name)}function v(e,t,r,n){var s,l
e:for(;;)try{var u=t.getObj()
if((0,o.isEOF)(u))break
if((0,o.isName)(u))"WMode"===u.name?g(e,t):"CMapName"===u.name&&m(e,t),s=u
else if((0,o.isCmd)(u))switch(u.cmd){case"endcmap":break e
case"usecmap":(0,o.isName)(s)&&(l=s.name)
break
case"begincodespacerange":p(e,t)
break
case"beginbfchar":a(e,t)
break
case"begincidchar":f(e,t)
break
case"beginbfrange":h(e,t)
break
case"begincidrange":d(e,t)}}catch(v){if(v instanceof c.MissingDataException)throw v;(0,i.warn)("Invalid cMap data: "+v)
continue}return!n&&l&&(n=l),n?b(e,r,n):Promise.resolve(e)}function b(e,t,r){return w(r,t).then((function(t){if(e.useCMap=t,0===e.numCodespaceRanges){for(var r=e.useCMap.codespaceRanges,a=0;a<r.length;a++)e.codespaceRanges[a]=r[a].slice()
e.numCodespaceRanges=e.useCMap.numCodespaceRanges}return e.useCMap.forEach((function(t,r){e.contains(t)||e.mapOne(t,e.useCMap.lookup(t))})),e}))}function w(e,t){return"Identity-H"===e?Promise.resolve(new S(!1,2)):"Identity-V"===e?Promise.resolve(new S(!0,2)):y.includes(e)?t?t(e).then((function(e){var r=e.cMapData,a=e.compressionType,n=new k(!0)
if(a===i.CMapCompressionType.BINARY)return(new x).process(r,n,(function(e){return b(n,t,e)}))
if(a===i.CMapCompressionType.NONE){var o=new s.Lexer(new l.Stream(r))
return v(n,o,t,null)}return Promise.reject(new Error("TODO: Only BINARY/NONE CMap compression is currently supported."))})):Promise.reject(new Error("Built-in CMap parameters are not provided.")):Promise.reject(new Error("Unknown CMap name: "+e))}return{create:function(e){return(t=n.default.mark((function t(){var r,a,i,c,l
return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.encoding,a=e.fetchBuiltInCMap,i=e.useCMap,!(0,o.isName)(r)){t.next=7
break}return t.abrupt("return",w(r.name,a))
case 7:if(!(0,o.isStream)(r)){t.next=11
break}return c=new k,l=new s.Lexer(r),t.abrupt("return",v(c,l,a,i).then((function(e){return e.isIdentityCMap?w(e.name,a):e})))
case 11:throw new Error("Encoding required.")
case 12:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments
return new Promise((function(a,n){var i=t.apply(e,r)
function o(e){u(i,a,n,o,s,"next",e)}function s(e){u(i,a,n,o,s,"throw",e)}o(void 0)}))})()
var t}}}()
t.CMapFactory=C},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.getFontType=O,t.IdentityToUnicodeMap=t.ToUnicodeMap=t.FontFlags=t.Font=t.ErrorFont=t.SEAC_ANALYSIS_ENABLED=void 0
var a=r(5),n=r(228),i=r(231),o=r(230),s=r(232),c=r(233),l=r(205),u=r(234),h=r(226),f=r(209),d=r(235)
function p(e,t){var r
if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=m(e))||t&&e&&"number"==typeof e.length){r&&(e=r)
var a=0,n=function(){}
return{s:n,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1
return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next()
return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==r.return||r.return()}finally{if(s)throw i}}}}function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return
var r=[],a=!0,n=!1,i=void 0
try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);a=!0);}catch(c){n=!0,i=c}finally{try{a||null==s.return||s.return()}finally{if(n)throw i}}return r}(e,t)||m(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){if(e){if("string"==typeof e)return v(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?v(e,t):void 0}}function v(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r]
return a}var b=[[57344,63743],[1048576,1114109]],y=1e3,w=!0
t.SEAC_ANALYSIS_ENABLED=w
var k=["ascent","bbox","black","bold","charProcOperatorList","composite","data","defaultVMetrics","defaultWidth","descent","fallbackName","fontMatrix","fontType","isMonospace","isSerifFont","isType3Font","italic","loadedName","mimetype","missingFile","name","remeasure","subtype","type","vertical"],S=["cMap","defaultEncoding","differences","isSymbolicFont","seacMap","toFontChar","toUnicode","vmetrics","widths"],x={FixedPitch:1,Serif:2,Symbolic:4,Script:8,Nonsymbolic:32,Italic:64,AllCap:65536,SmallCap:131072,ForceBold:262144}
t.FontFlags=x
var C=[".notdef",".null","nonmarkingreturn","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quotesingle","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","grave","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","Adieresis","Aring","Ccedilla","Eacute","Ntilde","Odieresis","Udieresis","aacute","agrave","acircumflex","adieresis","atilde","aring","ccedilla","eacute","egrave","ecircumflex","edieresis","iacute","igrave","icircumflex","idieresis","ntilde","oacute","ograve","ocircumflex","odieresis","otilde","uacute","ugrave","ucircumflex","udieresis","dagger","degree","cent","sterling","section","bullet","paragraph","germandbls","registered","copyright","trademark","acute","dieresis","notequal","AE","Oslash","infinity","plusminus","lessequal","greaterequal","yen","mu","partialdiff","summation","product","pi","integral","ordfeminine","ordmasculine","Omega","ae","oslash","questiondown","exclamdown","logicalnot","radical","florin","approxequal","Delta","guillemotleft","guillemotright","ellipsis","nonbreakingspace","Agrave","Atilde","Otilde","OE","oe","endash","emdash","quotedblleft","quotedblright","quoteleft","quoteright","divide","lozenge","ydieresis","Ydieresis","fraction","currency","guilsinglleft","guilsinglright","fi","fl","daggerdbl","periodcentered","quotesinglbase","quotedblbase","perthousand","Acircumflex","Ecircumflex","Aacute","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Oacute","Ocircumflex","apple","Ograve","Uacute","Ucircumflex","Ugrave","dotlessi","circumflex","tilde","macron","breve","dotaccent","ring","cedilla","hungarumlaut","ogonek","caron","Lslash","lslash","Scaron","scaron","Zcaron","zcaron","brokenbar","Eth","eth","Yacute","yacute","Thorn","thorn","minus","multiply","onesuperior","twosuperior","threesuperior","onehalf","onequarter","threequarters","franc","Gbreve","gbreve","Idotaccent","Scedilla","scedilla","Cacute","cacute","Ccaron","ccaron","dcroat"]
function A(e){if(e.fontMatrix&&e.fontMatrix[0]!==a.FONT_IDENTITY_MATRIX[0]){var t=.001/e.fontMatrix[0],r=e.widths
for(var n in r)r[n]*=t
e.defaultWidth*=t}}function O(e,t){switch(e){case"Type1":return"Type1C"===t?a.FontType.TYPE1C:a.FontType.TYPE1
case"CIDFontType0":return"CIDFontType0C"===t?a.FontType.CIDFONTTYPE0C:a.FontType.CIDFONTTYPE0
case"OpenType":return a.FontType.OPENTYPE
case"TrueType":return a.FontType.TRUETYPE
case"CIDFontType2":return a.FontType.CIDFONTTYPE2
case"MMType1":return a.FontType.MMTYPE1
case"Type0":return a.FontType.TYPE0
default:return a.FontType.UNKNOWN}}function T(e,t){if(void 0!==t[e])return e
var r=(0,c.getUnicodeForGlyph)(e,t)
if(-1!==r)for(var n in t)if(t[n]===r)return n
return(0,a.info)("Unable to recover a standard glyph name for: "+e),e}var I=function(){function e(e,t,r,a,n,i,o,s){this.fontChar=e,this.unicode=t,this.accent=r,this.width=a,this.vmetric=n,this.operatorListId=i,this.isSpace=o,this.isInFont=s}return e.prototype.matchesForCache=function(e,t,r,a,n,i,o,s){return this.fontChar===e&&this.unicode===t&&this.accent===r&&this.width===a&&this.vmetric===n&&this.operatorListId===i&&this.isSpace===o&&this.isInFont===s},e}(),E=function(){function e(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]
this._map=e}return e.prototype={get length(){return this._map.length},forEach:function(e){for(var t in this._map)e(t,this._map[t].charCodeAt(0))},has:function(e){return void 0!==this._map[e]},get:function(e){return this._map[e]},charCodeOf:function(e){var t=this._map
if(t.length<=65536)return t.indexOf(e)
for(var r in t)if(t[r]===e)return 0|r
return-1},amend:function(e){for(var t in e)this._map[t]=e[t]}},e}()
t.ToUnicodeMap=E
var P=function(){function e(e,t){this.firstChar=e,this.lastChar=t}return e.prototype={get length(){return this.lastChar+1-this.firstChar},forEach:function(e){for(var t=this.firstChar,r=this.lastChar;t<=r;t++)e(t,t)},has:function(e){return this.firstChar<=e&&e<=this.lastChar},get:function(e){if(this.firstChar<=e&&e<=this.lastChar)return String.fromCharCode(e)},charCodeOf:function(e){return Number.isInteger(e)&&e>=this.firstChar&&e<=this.lastChar?e:-1},amend:function(e){(0,a.unreachable)("Should not call amend()")}},e}()
t.IdentityToUnicodeMap=P
var _=function(){function e(e,t,r){e[t]=r>>8&255,e[t+1]=255&r}function t(e,t,r){e[t]=r>>24&255,e[t+1]=r>>16&255,e[t+2]=r>>8&255,e[t+3]=255&r}function r(e,t,r){var a,n
if(r instanceof Uint8Array)e.set(r,t)
else if("string"==typeof r)for(a=0,n=r.length;a<n;a++)e[t++]=255&r.charCodeAt(a)
else for(a=0,n=r.length;a<n;a++)e[t++]=255&r[a]}function n(e){this.sfnt=e,this.tables=Object.create(null)}n.getSearchParams=function(e,t){for(var r=1,a=0;(r^e)>r;)r<<=1,a++
var n=r*t
return{range:n,entry:a,rangeShift:t*e-n}}
return n.prototype={toArray:function(){var i=this.sfnt,o=this.tables,s=Object.keys(o)
s.sort()
var c,u,h,f,d,p=s.length,g=12+16*p,m=[g]
for(c=0;c<p;c++){g+=((f=o[s[c]]).length+3&-4)>>>0,m.push(g)}var v=new Uint8Array(g)
for(c=0;c<p;c++)f=o[s[c]],r(v,m[c],f)
"true"===i&&(i=(0,a.string32)(65536)),v[0]=255&i.charCodeAt(0),v[1]=255&i.charCodeAt(1),v[2]=255&i.charCodeAt(2),v[3]=255&i.charCodeAt(3),e(v,4,p)
var b=n.getSearchParams(p,16)
for(e(v,6,b.range),e(v,8,b.entry),e(v,10,b.rangeShift),g=12,c=0;c<p;c++){d=s[c],v[g]=255&d.charCodeAt(0),v[g+1]=255&d.charCodeAt(1),v[g+2]=255&d.charCodeAt(2),v[g+3]=255&d.charCodeAt(3)
var y=0
for(u=m[c],h=m[c+1];u<h;u+=4){y=y+(0,l.readUint32)(v,u)>>>0}t(v,g+4,y),t(v,g+8,m[c]),t(v,g+12,o[d].length),g+=16}return v},addTable:function(e,t){if(e in this.tables)throw new Error("Table "+e+" already exists")
this.tables[e]=t}},n}(),F=function(){function e(e,t,r){var n
this.name=e,this.loadedName=r.loadedName,this.isType3Font=r.isType3Font,this.missingFile=!1,this.glyphCache=Object.create(null),this.isSerifFont=!!(r.flags&x.Serif),this.isSymbolicFont=!!(r.flags&x.Symbolic),this.isMonospace=!!(r.flags&x.FixedPitch)
var i=r.type,o=r.subtype
this.type=i,this.subtype=o
var s="sans-serif"
if(this.isMonospace?s="monospace":this.isSerifFont&&(s="serif"),this.fallbackName=s,this.differences=r.differences,this.widths=r.widths,this.defaultWidth=r.defaultWidth,this.composite=r.composite,this.cMap=r.cMap,this.ascent=r.ascent/y,this.descent=r.descent/y,this.fontMatrix=r.fontMatrix,this.bbox=r.bbox,this.defaultEncoding=r.defaultEncoding,this.toUnicode=r.toUnicode,this.fallbackToUnicode=r.fallbackToUnicode||new E,this.toFontChar=[],"Type3"!==r.type){if(this.cidEncoding=r.cidEncoding,this.vertical=!!r.vertical,this.vertical&&(this.vmetrics=r.vmetrics,this.defaultVMetrics=r.defaultVMetrics),!t||t.isEmpty)return t&&(0,a.warn)('Font file is empty in "'+e+'" ('+this.loadedName+")"),void this.fallbackToSystemFont()
var c=g(function(e,t){var r,n,i=t.type,o=t.subtype,s=t.composite;(function(e){var t=e.peekBytes(4)
return 65536===(0,l.readUint32)(t,0)||"true"===(0,a.bytesToString)(t)})(e)||v(e)?r=s?"CIDFontType2":"TrueType":!function(e){var t=e.peekBytes(4)
return"OTTO"===(0,a.bytesToString)(t)}(e)?!function(e){var t=e.peekBytes(2)
if(37===t[0]&&33===t[1])return!0
if(128===t[0]&&1===t[1])return!0
return!1}(e)?!function(e){var t=e.peekBytes(4)
if(t[0]>=1&&t[3]>=1&&t[3]<=4)return!0
return!1}(e)?((0,a.warn)("getFontFileType: Unable to detect correct font file Type/Subtype."),r=i,n=o):s?(r="CIDFontType0",n="CIDFontType0C"):(r="MMType1"===i?"MMType1":"Type1",n="Type1C"):r=s?"CIDFontType0":"MMType1"===i?"MMType1":"Type1":r=s?"CIDFontType2":"OpenType"
return[r,n]}(t,r),2)
i=c[0],o=c[1],i===this.type&&o===this.subtype||(0,a.info)("Inconsistent font file Type/SubType, expected: "+"".concat(this.type,"/").concat(this.subtype," but found: ").concat(i,"/").concat(o,"."))
try{var u
switch(i){case"MMType1":(0,a.info)("MMType1 font ("+e+"), falling back to Type1.")
case"Type1":case"CIDFontType0":this.mimetype="font/opentype"
var h="Type1C"===o||"CIDFontType0C"===o?new D(t,r):new M(e,t,r)
A(r),u=this.convert(e,h,r)
break
case"OpenType":case"TrueType":case"CIDFontType2":this.mimetype="font/opentype",u=this.checkAndRepair(e,t,r),this.isOpenType&&(A(r),i="OpenType")
break
default:throw new a.FormatError("Font ".concat(i," is not supported"))}}catch(f){return(0,a.warn)(f),void this.fallbackToSystemFont()}this.data=u,this.fontType=O(i,o),this.fontMatrix=r.fontMatrix,this.widths=r.widths,this.defaultWidth=r.defaultWidth,this.toUnicode=r.toUnicode,this.seacMap=r.seacMap}else{for(n=0;n<256;n++)this.toFontChar[n]=this.differences[n]||r.defaultEncoding[n]
this.fontType=a.FontType.TYPE3}}function t(e,t){return(e<<8)+t}function r(e,t){var r=(e<<8)+t
return 32768&r?r-65536:r}function d(e){return String.fromCharCode(e>>8&255,255&e)}function m(e){return e>32767?e=32767:e<-32768&&(e=-32768),String.fromCharCode(e>>8&255,255&e)}function v(e){var t=e.peekBytes(4)
return"ttcf"===(0,a.bytesToString)(t)}function F(e,t,r){for(var a,n=[],i=0,o=e.length;i<o;i++)-1!==(a=(0,c.getUnicodeForGlyph)(e[i],t))&&(n[i]=a)
for(var s in r)-1!==(a=(0,c.getUnicodeForGlyph)(r[s],t))&&(n[+s]=a)
return n}function R(e,t,r){var n=Object.create(null),i=[],o=0,s=b[o][0],c=b[o][1]
for(var l in e){var u=e[l|=0]
if(t(u)){if(s>c){if(++o>=b.length){(0,a.warn)("Ran out of space in font private use area.")
break}s=b[o][0],c=b[o][1]}var h=s++
0===u&&(u=r),n[h]=u,i[l]=h}}return{toFontChar:i,charCodeToGlyphId:n,nextAvailableFontCharCode:s}}function B(e,t){var r,n,i,o,s=function(e,t){var r=[]
for(var a in e)e[a]>=t||r.push({fontCharCode:0|a,glyphId:e[a]})
0===r.length&&r.push({fontCharCode:0,glyphId:0}),r.sort((function(e,t){return e.fontCharCode-t.fontCharCode}))
for(var n=[],i=r.length,o=0;o<i;){var s=r[o].fontCharCode,c=[r[o].glyphId];++o
for(var l=s;o<i&&l+1===r[o].fontCharCode&&(c.push(r[o].glyphId),++o,65535!=++l););n.push([s,l,c])}return n}(e,t),c=s[s.length-1][1]>65535?2:1,l="\0\0"+d(c)+"\0\0"+(0,a.string32)(4+8*c)
for(r=s.length-1;r>=0&&!(s[r][0]<=65535);--r);var u=r+1
s[r][0]<65535&&65535===s[r][1]&&(s[r][1]=65534)
var h,f,p,g,m=s[r][1]<65535?1:0,v=u+m,b=_.getSearchParams(v,2),y="",w="",k="",S="",x="",C=0
for(r=0,n=u;r<n;r++){f=(h=s[r])[0],p=h[1],y+=d(f),w+=d(p)
var A=!0
for(i=1,o=(g=h[2]).length;i<o;++i)if(g[i]!==g[i-1]+1){A=!1
break}if(A){k+=d(g[0]-f&65535),S+=d(0)}else{var O=2*(v-r)+2*C
for(C+=p-f+1,k+=d(0),S+=d(O),i=0,o=g.length;i<o;++i)x+=d(g[i])}}m>0&&(w+="ÿÿ",y+="ÿÿ",k+="\0",S+="\0\0")
var T="\0\0"+d(2*v)+d(b.range)+d(b.entry)+d(b.rangeShift)+w+"\0\0"+y+k+S+x,I="",E=""
if(c>1){for(l+="\0\0\n"+(0,a.string32)(4+8*c+4+T.length),I="",r=0,n=s.length;r<n;r++){f=(h=s[r])[0]
var P=(g=h[2])[0]
for(i=1,o=g.length;i<o;++i)g[i]!==g[i-1]+1&&(p=h[0]+i-1,I+=(0,a.string32)(f)+(0,a.string32)(p)+(0,a.string32)(P),f=p+1,P=g[i])
I+=(0,a.string32)(f)+(0,a.string32)(h[1])+(0,a.string32)(P)}E="\0\f\0\0"+(0,a.string32)(I.length+16)+"\0\0\0\0"+(0,a.string32)(I.length/12)}return l+"\0"+d(T.length+4)+T+E+I}function L(e,t,r){r=r||{unitsPerEm:0,yMax:0,yMin:0,ascent:0,descent:0}
var n=0,i=0,o=0,s=0,l=null,u=0
if(t){for(var h in t){(l>(h|=0)||!l)&&(l=h),u<h&&(u=h)
var f=(0,c.getUnicodeRangeFor)(h)
if(f<32)n|=1<<f
else if(f<64)i|=1<<f-32
else if(f<96)o|=1<<f-64
else{if(!(f<123))throw new a.FormatError("Unicode ranges Bits > 123 are reserved for internal usage")
s|=1<<f-96}}u>65535&&(u=65535)}else l=0,u=255
var p=e.bbox||[0,0,0,0],g=r.unitsPerEm||1/(e.fontMatrix||a.FONT_IDENTITY_MATRIX)[0],m=e.ascentScaled?1:g/y,v=r.ascent||Math.round(m*(e.ascent||p[3])),b=r.descent||Math.round(m*(e.descent||p[1]))
b>0&&e.descent>0&&p[1]<0&&(b=-b)
var w=r.yMax||v,k=-r.yMin||-b
return"\0$ô\0\0\0»\0\0\0»\0\0ß\x001\0\0\0\0"+String.fromCharCode(e.fixedPitch?9:0)+"\0\0\0\0\0\0"+(0,a.string32)(n)+(0,a.string32)(i)+(0,a.string32)(o)+(0,a.string32)(s)+"*21*"+d(e.italicAngle?1:0)+d(l||e.firstChar)+d(u||e.lastChar)+d(v)+d(b)+"\0d"+d(w)+d(k)+"\0\0\0\0\0\0\0\0"+d(e.xHeight)+d(e.capHeight)+d(0)+d(l||e.firstChar)+"\0"}function N(e){var t=Math.floor(e.italicAngle*Math.pow(2,16))
return"\0\0\0"+(0,a.string32)(t)+"\0\0\0\0"+(0,a.string32)(e.fixedPitch)+"\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0"}function U(e,t){t||(t=[[],[]])
var r,a,n,i,o,s=[t[0][0]||"Original licence",t[0][1]||e,t[0][2]||"Unknown",t[0][3]||"uniqueID",t[0][4]||e,t[0][5]||"Version 0.11",t[0][6]||"",t[0][7]||"Unknown",t[0][8]||"Unknown",t[0][9]||"Unknown"],c=[]
for(r=0,a=s.length;r<a;r++){var l=[]
for(n=0,i=(o=t[1][r]||s[r]).length;n<i;n++)l.push(d(o.charCodeAt(n)))
c.push(l.join(""))}var u=[s,c],h=["\0","\0"],f=["\0\0","\0"],p=["\0\0","\t"],g=s.length*h.length,m="\0\0"+d(g)+d(12*g+6),v=0
for(r=0,a=h.length;r<a;r++){var b=u[r]
for(n=0,i=b.length;n<i;n++){o=b[n],m+=h[r]+f[r]+p[r]+d(n)+d(o.length)+d(v),v+=o.length}}return m+=s.join("")+c.join("")}return e.prototype={name:null,font:null,mimetype:null,disableFontFace:!1,get renderer(){var e=u.FontRendererFactory.create(this,w)
return(0,a.shadow)(this,"renderer",e)},exportData:function(){var e,t,r,a=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=a?[].concat(k,S):k,i=Object.create(null),o=p(n)
try{for(o.s();!(r=o.n()).done;)void 0!==(t=this[e=r.value])&&(i[e]=t)}catch(s){o.e(s)}finally{o.f()}return i},fallbackToSystemFont:function(){var e=this
this.missingFile=!0
var t=this.name,r=this.type,n=this.subtype,l=t.replace(/[,_]/g,"-").replace(/\s/g,""),u=(0,s.getStdFontMap)(),h=(0,s.getNonStdFontMap)(),f=!!u[l]||!(!h[l]||!u[h[l]])
if(l=u[l]||h[l]||l,this.bold=-1!==l.search(/bold/gi),this.italic=-1!==l.search(/oblique/gi)||-1!==l.search(/italic/gi),this.black=-1!==t.search(/Black/g),this.remeasure=Object.keys(this.widths).length>0,f&&"CIDFontType2"===r&&this.cidEncoding.startsWith("Identity-")){var d=(0,s.getGlyphMapForStandardFonts)(),p=[]
for(var g in d)p[+g]=d[g]
if(/Arial-?Black/i.test(t)){var m=(0,s.getSupplementalGlyphMapForArialBlack)()
for(var v in m)p[+v]=m[v]}else if(/Calibri/i.test(t)){var b=(0,s.getSupplementalGlyphMapForCalibri)()
for(var y in b)p[+y]=b[y]}this.toUnicode instanceof P||this.toUnicode.forEach((function(e,t){p[+e]=t})),this.toFontChar=p,this.toUnicode=new E(p)}else if(/Symbol/i.test(l))this.toFontChar=F(o.SymbolSetEncoding,(0,i.getGlyphsUnicode)(),this.differences)
else if(/Dingbats/i.test(l))/Wingdings/i.test(t)&&(0,a.warn)("Non-embedded Wingdings font, falling back to ZapfDingbats."),this.toFontChar=F(o.ZapfDingbatsEncoding,(0,i.getDingbatsGlyphsUnicode)(),this.differences)
else if(f)this.toFontChar=F(this.defaultEncoding,(0,i.getGlyphsUnicode)(),this.differences)
else{var w=(0,i.getGlyphsUnicode)(),k=[]
if(this.toUnicode.forEach((function(t,r){if(!e.composite){var a=e.differences[t]||e.defaultEncoding[t],n=(0,c.getUnicodeForGlyph)(a,w);-1!==n&&(r=n)}k[+t]=r})),this.composite&&this.toUnicode instanceof P&&/Verdana/i.test(t)){var S=(0,s.getGlyphMapForStandardFonts)()
for(var x in S)k[+x]=S[x]}this.toFontChar=k}this.loadedName=l.split("-")[0],this.fontType=O(r,n)},checkAndRepair:function(e,s,c){var l=["OS/2","cmap","head","hhea","hmtx","maxp","name","post","loca","glyf","fpgm","prep","cvt ","CFF "]
function u(e,t){var r=Object.create(null)
r["OS/2"]=null,r.cmap=null,r.head=null,r.hhea=null,r.hmtx=null,r.maxp=null,r.name=null,r.post=null
for(var a=0;a<t;a++){var n=d(e)
l.includes(n.tag)&&(0!==n.length&&(r[n.tag]=n))}return r}function d(e){var t=(0,a.bytesToString)(e.getBytes(4)),r=e.getInt32()>>>0,n=e.getInt32()>>>0,i=e.getInt32()>>>0,o=e.pos
e.pos=e.start?e.start:0,e.skip(n)
var s=e.getBytes(i)
return e.pos=o,"head"===t&&(s[8]=s[9]=s[10]=s[11]=0,s[17]|=32),{tag:t,checksum:r,length:i,offset:n,data:s}}function p(e){return{version:(0,a.bytesToString)(e.getBytes(4)),numTables:e.getUint16(),searchRange:e.getUint16(),entrySelector:e.getUint16(),rangeShift:e.getUint16()}}function g(e,t,a,n,i,o){var s={length:0,sizeOfInstructions:0}
if(a-t<=12)return s
var c,l,u,h=e.subarray(t,a),f=r(h[0],h[1])
if(f<0)return u=f=-1,(c=h)[(l=0)+1]=u,c[l]=u>>>8,n.set(h,i),s.length=h.length,s
var d,p=10,g=0
for(d=0;d<f;d++){g=(h[p]<<8|h[p+1])+1,p+=2}var m=p,v=h[p]<<8|h[p+1]
s.sizeOfInstructions=v
var b=p+=2+v,y=0
for(d=0;d<g;d++){var w=h[p++]
192&w&&(h[p-1]=63&w)
var k=2
2&w?k=1:16&w&&(k=0)
var S=2
4&w?S=1:32&w&&(S=0)
var x=k+S
if(y+=x,8&w){var C=h[p++]
d+=C,y+=C*x}}if(0===y)return s
var A=p+y
return A>h.length?s:!o&&v>0?(n.set(h.subarray(0,m),i),n.set([0,0],i+m),n.set(h.subarray(b,A),i+m+2),A-=v,h.length-A>3&&(A=A+3&-4),s.length=A,s):h.length-A>3?(A=A+3&-4,n.set(h.subarray(0,A),i),s.length=A,s):(n.set(h,i),s.length=h.length,s)}function m(e){var t=(s.start?s.start:0)+e.offset
s.pos=t
var r=[[],[]],n=e.length,i=t+n
if(0!==s.getUint16()||n<6)return r
var o,c,l=s.getUint16(),u=s.getUint16(),h=[]
for(o=0;o<l&&s.pos+12<=i;o++){var f={platform:s.getUint16(),encoding:s.getUint16(),language:s.getUint16(),name:s.getUint16(),length:s.getUint16(),offset:s.getUint16()};(1===f.platform&&0===f.encoding&&0===f.language||3===f.platform&&1===f.encoding&&1033===f.language)&&h.push(f)}for(o=0,c=h.length;o<c;o++){var d=h[o]
if(!(d.length<=0)){var p=t+u+d.offset
if(!(p+d.length>i)){s.pos=p
var g=d.name
if(d.encoding){for(var m="",v=0,b=d.length;v<b;v+=2)m+=String.fromCharCode(s.getUint16())
r[1][g]=m}else r[0][g]=(0,a.bytesToString)(s.getBytes(d.length))}}}return r}var b,y,k,S,x=[0,0,0,0,0,0,0,0,-2,-2,-2,-2,0,0,-2,-5,-1,-1,-1,-1,-1,-1,-1,-1,0,0,-1,0,-1,-1,-1,-1,1,-1,-999,0,1,0,-1,-2,0,-1,-2,-1,-1,0,-1,-1,0,0,-999,-999,-1,-1,-1,-1,-2,-999,-2,-2,-999,0,-2,-2,0,0,-2,0,-2,0,0,0,-2,-1,-1,1,1,0,0,-1,-1,-1,-1,-1,-1,-1,0,0,-1,0,-1,-1,0,-999,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,0,0,0,0,0,-2,-999,-999,-999,-999,-999,-1,-1,-2,-2,0,0,0,0,-1,-1,-999,-2,-2,0,0,-1,-2,-2,0,0,0,-1,-1,-1,-2]
function O(e,t){for(var r,n,i,o,s,c=e.data,l=0,u=0,h=0,f=[],d=[],p=[],g=t.tooComplexToFollowFunctions,m=!1,v=0,b=0,y=c.length;l<y;){var w=c[l++]
if(64===w)if(n=c[l++],m||b)l+=n
else for(r=0;r<n;r++)f.push(c[l++])
else if(65===w)if(n=c[l++],m||b)l+=2*n
else for(r=0;r<n;r++)i=c[l++],f.push(i<<8|c[l++])
else if(176==(248&w))if(n=w-176+1,m||b)l+=n
else for(r=0;r<n;r++)f.push(c[l++])
else if(184==(248&w))if(n=w-184+1,m||b)l+=2*n
else for(r=0;r<n;r++)i=c[l++],f.push(i<<8|c[l++])
else if(43!==w||g)if(44!==w||g){if(45===w)if(m)m=!1,u=l
else{if(!(s=d.pop()))return(0,a.warn)("TT: ENDF bad stack"),void(t.hintsValid=!1)
o=p.pop(),c=s.data,l=s.i,t.functionsStackDeltas[o]=f.length-s.stackTop}else if(137===w)(m||b)&&((0,a.warn)("TT: nested IDEFs not allowed"),g=!0),m=!0,h=l
else if(88===w)++v
else if(27===w)b=v
else if(89===w)b===v&&(b=0),--v
else if(28===w&&!m&&!b){var k=f[f.length-1]
k>0&&(l+=k-1)}}else(m||b)&&((0,a.warn)("TT: nested FDEFs not allowed"),g=!0),m=!0,h=l,o=f.pop(),t.functionsDefined[o]={data:c,i:l}
else if(!m&&!b)if(o=f[f.length-1],isNaN(o))(0,a.info)("TT: CALL empty stack (or invalid entry).")
else if(t.functionsUsed[o]=!0,o in t.functionsStackDeltas){var S=f.length+t.functionsStackDeltas[o]
if(S<0)return(0,a.warn)("TT: CALL invalid functions stack delta."),void(t.hintsValid=!1)
f.length=S}else if(o in t.functionsDefined&&!p.includes(o)){if(d.push({data:c,i:l,stackTop:f.length-1}),p.push(o),!(s=t.functionsDefined[o]))return(0,a.warn)("TT: CALL non-existent function"),void(t.hintsValid=!1)
c=s.data,l=s.i}if(!m&&!b){var C=0
for(w<=142?C=x[w]:w>=192&&w<=223?C=-1:w>=224&&(C=-2),w>=113&&w<=117&&(n=f.pop(),isNaN(n)||(C=2*-n));C<0&&f.length>0;)f.pop(),C++
for(;C>0;)f.push(NaN),C--}}t.tooComplexToFollowFunctions=g
var A=[c]
l>c.length&&A.push(new Uint8Array(l-c.length)),h>u&&((0,a.warn)("TT: complementing a missing function tail"),A.push(new Uint8Array([34,45]))),function(e,t){if(t.length>1){var r,a,n=0
for(r=0,a=t.length;r<a;r++)n+=t[r].length
n=n+3&-4
var i=new Uint8Array(n),o=0
for(r=0,a=t.length;r<a;r++)i.set(t[r],o),o+=t[r].length
e.data=i,e.length=n}}(e,A)}if(v(s=new f.Stream(new Uint8Array(s.getBytes())))){var I=function(e,t){for(var r=function(e){var t=(0,a.bytesToString)(e.getBytes(4));(0,a.assert)("ttcf"===t,"Must be a TrueType Collection font.")
for(var r=e.getUint16(),n=e.getUint16(),i=e.getInt32()>>>0,o=[],s=0;s<i;s++)o.push(e.getInt32()>>>0)
var c={ttcTag:t,majorVersion:r,minorVersion:n,numFonts:i,offsetTable:o}
switch(r){case 1:return c
case 2:return c.dsigTag=e.getInt32()>>>0,c.dsigLength=e.getInt32()>>>0,c.dsigOffset=e.getInt32()>>>0,c}throw new a.FormatError("Invalid TrueType Collection majorVersion: ".concat(r,"."))}(e),n=r.numFonts,i=r.offsetTable,o=0;o<n;o++){e.pos=(e.start||0)+i[o]
var s=p(e),c=u(e,s.numTables)
if(!c.name)throw new a.FormatError('TrueType Collection font must contain a "name" table.')
for(var l=m(c.name),h=0,f=l.length;h<f;h++)for(var d=0,g=l[h].length;d<g;d++){var v=l[h][d]
if(v&&v.replace(/\s/g,"")===t)return{header:s,tables:c}}}throw new a.FormatError('TrueType Collection does not contain "'.concat(t,'" font.'))}(s,this.name)
b=I.header,y=I.tables}else b=p(s),y=u(s,b.numTables)
var E=!y["CFF "]
if(E){if(!y.loca)throw new a.FormatError('Required "loca" table is not found')
y.glyf||((0,a.warn)('Required "glyf" table is not found -- trying to recover.'),y.glyf={tag:"glyf",data:new Uint8Array(0)}),this.isOpenType=!1}else{var P=c.composite&&((c.cidToGidMap||[]).length>0||!(c.cMap instanceof h.IdentityCMap))
if("OTTO"===b.version&&!P||!y.head||!y.hhea||!y.maxp||!y.post)return S=new f.Stream(y["CFF "].data),k=new D(S,c),A(c),this.convert(e,k,c)
delete y.glyf,delete y.loca,delete y.fpgm,delete y.prep,delete y["cvt "],this.isOpenType=!0}if(!y.maxp)throw new a.FormatError('Required "maxp" table is not found')
s.pos=(s.start||0)+y.maxp.offset
var F=s.getInt32(),M=s.getUint16(),j=M+1,q=!0
j>65535&&(q=!1,j=M,(0,a.warn)("Not enough space in glyfs to duplicate first glyph."))
var z=0,G=0
F>=65536&&y.maxp.length>=22&&(s.pos+=8,s.getUint16()>2&&(y.maxp.data[14]=0,y.maxp.data[15]=2),s.pos+=4,z=s.getUint16(),s.pos+=4,G=s.getUint16())
y.maxp.data[4]=j>>8,y.maxp.data[5]=255&j
var H=function(e,t,r,n){var i={functionsDefined:[],functionsUsed:[],functionsStackDeltas:[],tooComplexToFollowFunctions:!1,hintsValid:!0}
if(e&&O(e,i),t&&O(t,i),e&&function(e,t){if(!e.tooComplexToFollowFunctions){if(e.functionsDefined.length>t)return(0,a.warn)("TT: more functions defined than expected"),void(e.hintsValid=!1)
for(var r=0,n=e.functionsUsed.length;r<n;r++){if(r>t)return(0,a.warn)("TT: invalid function id: "+r),void(e.hintsValid=!1)
if(e.functionsUsed[r]&&!e.functionsDefined[r])return(0,a.warn)("TT: undefined function: "+r),void(e.hintsValid=!1)}}}(i,n),r&&1&r.length){var o=new Uint8Array(r.length+1)
o.set(r.data),r.data=o}return i.hintsValid}(y.fpgm,y.prep,y["cvt "],z)
if(H||(delete y.fpgm,delete y.prep,delete y["cvt "]),function(e,t,r,n,i){if(t){e.pos=(e.start?e.start:0)+t.offset,e.pos+=4,e.pos+=2,e.pos+=2,e.pos+=2,e.pos+=2,e.pos+=2,e.pos+=2,e.pos+=2,e.pos+=2,e.pos+=2,e.pos+=2,e.pos+=8,e.pos+=2
var o=e.getUint16()
o>n&&((0,a.info)("The numOfMetrics ("+o+") should not be greater than the numGlyphs ("+n+")"),o=n,t.data[34]=(65280&o)>>8,t.data[35]=255&o)
var s=n-o-(r.length-4*o>>1)
if(s>0){var c=new Uint8Array(r.length+2*s)
c.set(r.data),i&&(c[r.length]=r.data[2],c[r.length+1]=r.data[3]),r.data=c}}else r&&(r.data=null)}(s,y.hhea,y.hmtx,j,q),!y.head)throw new a.FormatError('Required "head" table is not found');(function(e,r,n){var i,o,s,c,l=e.data,u=(i=l[0],o=l[1],s=l[2],c=l[3],(i<<24)+(o<<16)+(s<<8)+c)
u>>16!=1&&((0,a.info)("Attempting to fix invalid version in head table: "+u),l[0]=0,l[1]=1,l[2]=0,l[3]=0)
var h=t(l[50],l[51])
if(h<0||h>1){(0,a.info)("Attempting to fix invalid indexToLocFormat in head table: "+h)
var f=r+1
if(n===f<<1)l[50]=0,l[51]=0
else{if(n!==f<<2)throw new a.FormatError("Could not fix indexToLocFormat: "+h)
l[50]=0,l[51]=1}}})(y.head,M,E?y.loca.length:0)
var W=Object.create(null)
if(E){var X=t(y.head.data[50],y.head.data[51]),V=function(e,t,r,a,n,i,o){var s,c,l
a?(s=4,c=function(e,t){return e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3]},l=function(e,t,r){e[t]=r>>>24&255,e[t+1]=r>>16&255,e[t+2]=r>>8&255,e[t+3]=255&r}):(s=2,c=function(e,t){return e[t]<<9|e[t+1]<<1},l=function(e,t,r){e[t]=r>>9&255,e[t+1]=r>>1&255})
var u=i?r+1:r,h=s*(1+u),f=new Uint8Array(h)
f.set(e.data.subarray(0,h)),e.data=f
var d,p,m=t.data,v=m.length,b=new Uint8Array(v),y=[]
for(d=0,p=0;d<r+1;d++,p+=s){var w=c(f,p)
w>v&&(w=v),y.push({index:d,offset:w,endOffset:0})}for(y.sort((function(e,t){return e.offset-t.offset})),d=0;d<r;d++)y[d].endOffset=y[d+1].offset
y.sort((function(e,t){return e.index-t.index}))
var k=Object.create(null),S=0
for(l(f,0,S),d=0,p=s;d<r;d++,p+=s){var x=g(m,y[d].offset,y[d].endOffset,b,S,n),C=x.length
0===C&&(k[d]=!0),x.sizeOfInstructions>o&&(o=x.sizeOfInstructions),l(f,p,S+=C)}if(0===S){var A=new Uint8Array([0,1,0,0,0,0,0,0,0,0,0,0,0,0,49,0])
for(d=0,p=s;d<u;d++,p+=s)l(f,p,A.length)
t.data=A}else if(i){var O=c(f,s)
b.length>O+S?t.data=b.subarray(0,O+S):(t.data=new Uint8Array(O+S),t.data.set(b.subarray(0,S))),t.data.set(b.subarray(0,O),S),l(e.data,f.length-s,S+O)}else t.data=b.subarray(0,S)
return{missingGlyphs:k,maxSizeOfInstructions:o}}(y.loca,y.glyf,M,X,H,q,G)
W=V.missingGlyphs,F>=65536&&y.maxp.length>=22&&(y.maxp.data[26]=V.maxSizeOfInstructions>>8,y.maxp.data[27]=255&V.maxSizeOfInstructions)}if(!y.hhea)throw new a.FormatError('Required "hhea" table is not found')
0===y.hhea.data[10]&&0===y.hhea.data[11]&&(y.hhea.data[10]=255,y.hhea.data[11]=255)
var Y={unitsPerEm:t(y.head.data[18],y.head.data[19]),yMax:t(y.head.data[42],y.head.data[43]),yMin:r(y.head.data[38],y.head.data[39]),ascent:t(y.hhea.data[4],y.hhea.data[5]),descent:r(y.hhea.data[6],y.hhea.data[7])}
this.ascent=Y.ascent/Y.unitsPerEm,this.descent=Y.descent/Y.unitsPerEm,y.post&&function(e,t,r){var n=(s.start?s.start:0)+e.offset
s.pos=n
var i,o=n+e.length,c=s.getInt32()
s.skip(28)
var l,u=!0
switch(c){case 65536:i=C
break
case 131072:var h=s.getUint16()
if(h!==r){u=!1
break}var f=[]
for(l=0;l<h;++l){var d=s.getUint16()
if(d>=32768){u=!1
break}f.push(d)}if(!u)break
for(var p=[],g=[];s.pos<o;){var m=s.getByte()
for(g.length=m,l=0;l<m;++l)g[l]=String.fromCharCode(s.getByte())
p.push(g.join(""))}for(i=[],l=0;l<h;++l){var v=f[l]
v<258?i.push(C[v]):i.push(p[v-258])}break
case 196608:break
default:(0,a.warn)("Unknown/unsupported post table version "+c),u=!1,t.defaultEncoding&&(i=t.defaultEncoding)}t.glyphNames=i}(y.post,c,M),y.post={tag:"post",data:N(c)}
var K=[]
function J(e){return!W[e]}if(c.composite){var Z=c.cidToGidMap||[],Q=0===Z.length
c.cMap.forEach((function(e,t){if(t>65535)throw new a.FormatError("Max size of CID is 65,535")
var r=-1
Q?r=t:void 0!==Z[t]&&(r=Z[t]),r>=0&&r<M&&J(r)&&(K[e]=r)}))}else{var $=function(e,t,r,n){if(!e)return(0,a.warn)("No cmap table available."),{platformId:-1,encodingId:-1,mappings:[],hasShortCmap:!1}
var i,o=(t.start?t.start:0)+e.offset
t.pos=o,t.skip(2)
for(var s,c=t.getUint16(),l=!1,u=0;u<c;u++){var h=t.getUint16(),f=t.getUint16(),d=t.getInt32()>>>0,p=!1
if((!s||s.platformId!==h||s.encodingId!==f)&&(0!==h||0!==f&&1!==f&&3!==f?1===h&&0===f?p=!0:3!==h||1!==f||!n&&s?r&&3===h&&0===f&&(p=!0,l=!0):(p=!0,r||(l=!0)):p=!0,p&&(s={platformId:h,encodingId:f,offset:d}),l))break}if(s&&(t.pos=o+s.offset),!s||-1===t.peekByte())return(0,a.warn)("Could not find a preferred cmap table."),{platformId:-1,encodingId:-1,mappings:[],hasShortCmap:!1}
var g=t.getUint16()
t.skip(4)
var m,v,b=!1,y=[]
if(0===g){for(m=0;m<256;m++){var w=t.getByte()
w&&y.push({charCode:m,glyphId:w})}b=!0}else if(4===g){var k=t.getUint16()>>1
t.skip(6)
var S,x=[]
for(S=0;S<k;S++)x.push({end:t.getUint16()})
for(t.skip(2),S=0;S<k;S++)x[S].start=t.getUint16()
for(S=0;S<k;S++)x[S].delta=t.getUint16()
var C=0
for(S=0;S<k;S++){i=x[S]
var A=t.getUint16()
if(A){var O=(A>>1)-(k-S)
i.offsetIndex=O,C=Math.max(C,O+i.end-i.start+1)}else i.offsetIndex=-1}var T=[]
for(m=0;m<C;m++)T.push(t.getUint16())
for(S=0;S<k;S++){o=(i=x[S]).start
var I=i.end,E=i.delta
for(O=i.offsetIndex,m=o;m<=I;m++)65535!==m&&(v=(v=O<0?m:T[O+m-o])+E&65535,y.push({charCode:m,glyphId:v}))}}else{if(6!==g)return(0,a.warn)("cmap table has unsupported format: "+g),{platformId:-1,encodingId:-1,mappings:[],hasShortCmap:!1}
var P=t.getUint16(),_=t.getUint16()
for(m=0;m<_;m++){v=t.getUint16()
var F=P+m
y.push({charCode:F,glyphId:v})}}for(y.sort((function(e,t){return e.charCode-t.charCode})),u=1;u<y.length;u++)y[u-1].charCode===y[u].charCode&&(y.splice(u,1),u--)
return{platformId:s.platformId,encodingId:s.encodingId,mappings:y,hasShortCmap:b}}(y.cmap,s,this.isSymbolicFont,c.hasEncoding),ee=$.platformId,te=$.encodingId,re=$.mappings,ae=re.length,ne=[]
if(!c.hasEncoding||"MacRomanEncoding"!==c.baseEncodingName&&"WinAnsiEncoding"!==c.baseEncodingName||(ne=(0,o.getEncoding)(c.baseEncodingName)),c.hasEncoding&&!this.isSymbolicFont&&(3===ee&&1===te||1===ee&&0===te))for(var ie=(0,i.getGlyphsUnicode)(),oe=0;oe<256;oe++){var se,ce
if(se=this.differences&&oe in this.differences?this.differences[oe]:oe in ne&&""!==ne[oe]?ne[oe]:o.StandardEncoding[oe]){var le
ce=T(se,ie),3===ee&&1===te?le=ie[ce]:1===ee&&0===te&&(le=o.MacRomanEncoding.indexOf(ce))
for(var ue=0;ue<ae;++ue)if(re[ue].charCode===le){K[oe]=re[ue].glyphId
break}}}else if(0===ee)for(var he=0;he<ae;++he)K[re[he].charCode]=re[he].glyphId
else for(var fe=0;fe<ae;++fe){var de=re[fe].charCode
3===ee&&de>=61440&&de<=61695&&(de&=255),K[de]=re[fe].glyphId}if(c.glyphNames&&ne.length)for(var pe=0;pe<256;++pe)if(void 0===K[pe]&&ne[pe]){se=ne[pe]
var ge=c.glyphNames.indexOf(se)
ge>0&&J(ge)&&(K[pe]=ge)}}0===K.length&&(K[0]=0)
var me=j-1
q||(me=0)
var ve=R(K,J,me)
if(this.toFontChar=ve.toFontChar,y.cmap={tag:"cmap",data:B(ve.charCodeToGlyphId,j)},y["OS/2"]&&function(e,t){t.pos=(t.start||0)+e.offset
var r=t.getUint16()
t.skip(60)
var a=t.getUint16()
return!(r<4&&768&a||t.getUint16()>t.getUint16()||(t.skip(6),0===t.getUint16()||(e.data[8]=e.data[9]=0,0)))}(y["OS/2"],s)||(y["OS/2"]={tag:"OS/2",data:L(c,ve.charCodeToGlyphId,Y)}),!E)try{S=new f.Stream(y["CFF "].data),(k=new n.CFFParser(S,c,w).parse()).duplicateFirstGlyph()
var be=new n.CFFCompiler(k)
y["CFF "].data=be.compile()}catch(Se){(0,a.warn)("Failed to compile font "+c.loadedName)}if(y.name){var ye=m(y.name)
y.name.data=U(e,ye)}else y.name={tag:"name",data:U(this.name)}
var we=new _(b.version)
for(var ke in y)we.addTable(ke,y[ke].data)
return we.toArray()},convert:function(e,t,r){r.fixedPitch=!1,r.builtInEncoding&&function(e,t){if(!e.hasIncludedToUnicodeMap&&!(e.hasEncoding||t===e.defaultEncoding||e.toUnicode instanceof P)){var r=[],a=(0,i.getGlyphsUnicode)()
for(var n in t){var o=t[n],s=(0,c.getUnicodeForGlyph)(o,a);-1!==s&&(r[n]=String.fromCharCode(s))}e.toUnicode.amend(r)}}(r,r.builtInEncoding)
var n=1
t instanceof D&&(n=t.numGlyphs-1)
var s=t.getGlyphMapping(r),l=R(s,t.hasGlyphId.bind(t),n)
this.toFontChar=l.toFontChar
var u=t.numGlyphs
function h(e,t){var r=null
for(var a in e)t===e[a]&&(r||(r=[]),r.push(0|a))
return r}function f(e,t){for(var r in e)if(t===e[r])return 0|r
return l.charCodeToGlyphId[l.nextAvailableFontCharCode]=t,l.nextAvailableFontCharCode++}var p=t.seacs
if(p&&p.length){var g=r.fontMatrix||a.FONT_IDENTITY_MATRIX,v=t.getCharset(),b=Object.create(null)
for(var y in p){var w=p[y|=0],k=o.StandardEncoding[w[2]],S=o.StandardEncoding[w[3]],x=v.indexOf(k),C=v.indexOf(S)
if(!(x<0||C<0)){var A={x:w[0]*g[0]+w[1]*g[2]+g[4],y:w[0]*g[1]+w[1]*g[3]+g[5]},O=h(s,y)
if(O)for(var T=0,I=O.length;T<I;T++){var E=O[T],F=l.charCodeToGlyphId,M=f(F,x),j=f(F,C)
b[E]={baseFontCharCode:M,accentFontCharCode:j,accentOffset:A}}}}r.seacMap=b}var q=1/(r.fontMatrix||a.FONT_IDENTITY_MATRIX)[0],z=new _("OTTO")
return z.addTable("CFF ",t.data),z.addTable("OS/2",L(r,l.charCodeToGlyphId)),z.addTable("cmap",B(l.charCodeToGlyphId,u)),z.addTable("head","\0\0\0\0\0\0\0\0\0\0_<õ\0\0"+m(q)+"\0\0\0\0\v~'\0\0\0\0\v~'\0\0"+m(r.descent)+"ÿ"+m(r.ascent)+d(r.italicAngle?2:0)+"\0\0\0\0\0\0\0"),z.addTable("hhea","\0\0\0"+m(r.ascent)+m(r.descent)+"\0\0ÿÿ\0\0\0\0\0\0"+m(r.capHeight)+m(Math.tan(r.italicAngle)*r.xHeight)+"\0\0\0\0\0\0\0\0\0\0\0\0"+d(u)),z.addTable("hmtx",function(){for(var e=t.charstrings,r=t.cff?t.cff.widths:null,a="\0\0\0\0",n=1,i=u;n<i;n++){var o=0
if(e){var s=e[n-1]
o="width"in s?s.width:0}else r&&(o=Math.ceil(r[n]||0))
a+=d(o)+d(0)}return a}()),z.addTable("maxp","\0\0P\0"+d(u)),z.addTable("name",U(e)),z.addTable("post",N(r)),z.toArray()},get spaceWidth(){for(var e,t=["space","minus","one","i","I"],r=0,n=t.length;r<n;r++){var o=t[r]
if(o in this.widths){e=this.widths[o]
break}var s=(0,i.getGlyphsUnicode)()[o],c=0
if(this.composite&&this.cMap.contains(s)&&(c=this.cMap.lookup(s)),!c&&this.toUnicode&&(c=this.toUnicode.charCodeOf(s)),c<=0&&(c=s),e=this.widths[c])break}return e=e||this.defaultWidth,(0,a.shadow)(this,"spaceWidth",e)},charToGlyph:function(e,t){var r,n,i,o=e
this.cMap&&this.cMap.contains(e)&&(o=this.cMap.lookup(e)),n=this.widths[o],n=(0,a.isNum)(n)?n:this.defaultWidth
var s=this.vmetrics&&this.vmetrics[o],l=this.toUnicode.get(e)||this.fallbackToUnicode.get(e)||e
"number"==typeof l&&(l=String.fromCharCode(l))
var u=e in this.toFontChar
if(r=this.toFontChar[e]||e,this.missingFile){var h=this.differences[e]||this.defaultEncoding[e]
".notdef"!==h&&""!==h||"Type1"!==this.type||(r=32),r=(0,c.mapSpecialUnicodeValues)(r)}this.isType3Font&&(i=r)
var f=null
if(this.seacMap&&this.seacMap[e]){u=!0
var d=this.seacMap[e]
r=d.baseFontCharCode,f={fontChar:String.fromCodePoint(d.accentFontCharCode),offset:d.accentOffset}}var p=""
"number"==typeof r&&(r<=1114111?p=String.fromCodePoint(r):(0,a.warn)("charToGlyph - invalid fontCharCode: ".concat(r)))
var g=this.glyphCache[e]
return g&&g.matchesForCache(p,l,f,n,s,i,t,u)||(g=new I(p,l,f,n,s,i,t,u),this.glyphCache[e]=g),g},charsToGlyphs:function(e){var t,r,a,n=this.charsCache
if(n&&(t=n[e]))return t
n||(n=this.charsCache=Object.create(null)),t=[]
var i,o=e,s=0
if(this.cMap)for(var c=Object.create(null);s<e.length;){this.cMap.readCharCode(e,s,c),a=c.charcode
var l=c.length
s+=l
var u=1===l&&32===e.charCodeAt(s-1)
r=this.charToGlyph(a,u),t.push(r)}else for(s=0,i=e.length;s<i;++s)a=e.charCodeAt(s),r=this.charToGlyph(a,32===a),t.push(r)
return n[o]=t},get glyphCacheValues(){return Object.values(this.glyphCache)}},e}()
t.Font=F
var R=function(){function e(e){this.error=e,this.loadedName="g_font_error",this.missingFile=!0}return e.prototype={charsToGlyphs:function(){return[]},exportData:function(){return{error:this.error}}},e}()
function B(e,t,r){var a,n,s,c=Object.create(null),l=!!(e.flags&x.Symbolic)
if(e.baseEncodingName)for(s=(0,o.getEncoding)(e.baseEncodingName),n=0;n<s.length;n++)a=r.indexOf(s[n]),c[n]=a>=0?a:0
else if(l)for(n in t)c[n]=t[n]
else for(s=o.StandardEncoding,n=0;n<s.length;n++)a=r.indexOf(s[n]),c[n]=a>=0?a:0
var u,h=e.differences
if(h)for(n in h){var f=h[n]
if(-1===(a=r.indexOf(f))){u||(u=(0,i.getGlyphsUnicode)())
var d=T(f,u)
d!==f&&(a=r.indexOf(d))}c[n]=a>=0?a:0}return c}t.ErrorFont=R
var M=function(){function e(e,t,r){for(var a,n=e.length,i=t.length,o=n-i,s=r,c=!1;s<o;){for(a=0;a<i&&e[s+a]===t[a];)a++
if(a>=i){for(s+=a;s<n&&(0,l.isWhiteSpace)(e[s]);)s++
c=!0
break}s++}return{found:c,length:s}}function t(t,r,n){var i=n.length1,o=(n.length2,r.peekBytes(6)),s=128===o[0]&&1===o[1]
s&&(r.skip(6),i=o[5]<<24|o[4]<<16|o[3]<<8|o[2])
var c=function(t,r){var n,i,o,s,c=[101,101,120,101,99],u=t.pos
try{i=(n=t.getBytes(r)).length}catch(h){if(h instanceof l.MissingDataException)throw h}if(i===r&&(o=e(n,c,r-2*c.length)).found&&o.length===r)return{stream:new f.Stream(n),length:r}
for((0,a.warn)('Invalid "Length1" property in Type1 font -- trying to recover.'),t.pos=u;0!==(o=e(t.peekBytes(2048),c,0)).length;)if(t.pos+=o.length,o.found){s=t.pos-u
break}return t.pos=u,s?{stream:new f.Stream(t.getBytes(s)),length:s}:((0,a.warn)('Unable to recover "Length1" property in Type1 font -- using as is.'),{stream:new f.Stream(t.getBytes(r)),length:r})}(r,i)
new d.Type1Parser(c.stream,!1,w).extractFontHeader(n),s&&((o=r.getBytes(6))[5],o[4],o[3],o[2])
var u,h=(u=r.getBytes(),{stream:new f.Stream(u),length:u.length}),p=new d.Type1Parser(h.stream,!0,w).extractFontProgram(n)
for(var g in p.properties)n[g]=p.properties[g]
var m=p.charstrings,v=this.getType2Charstrings(m),b=this.getType2Subrs(p.subrs)
this.charstrings=m,this.data=this.wrap(t,v,this.charstrings,b,n),this.seacs=this.getSeacs(p.charstrings)}return t.prototype={get numGlyphs(){return this.charstrings.length+1},getCharset:function(){for(var e=[".notdef"],t=this.charstrings,r=0;r<t.length;r++)e.push(t[r].glyphName)
return e},getGlyphMapping:function(e){var t=this.charstrings
if(e.composite){for(var r=Object.create(null),a=0,n=t.length;a<n;a++){r[e.cMap.charCodeOf(a)]=a+1}return r}var i,o=[".notdef"]
for(i=0;i<t.length;i++)o.push(t[i].glyphName)
var s=e.builtInEncoding
if(s){var c=Object.create(null)
for(var l in s)(i=o.indexOf(s[l]))>=0&&(c[l]=i)}return B(e,c,o)},hasGlyphId:function(e){return!(e<0||e>=this.numGlyphs)&&(0===e||this.charstrings[e-1].charstring.length>0)},getSeacs:function(e){var t,r,a=[]
for(t=0,r=e.length;t<r;t++){var n=e[t]
n.seac&&(a[t+1]=n.seac)}return a},getType2Charstrings:function(e){for(var t=[],r=0,a=e.length;r<a;r++)t.push(e[r].charstring)
return t},getType2Subrs:function(e){var t=0,r=e.length
t=r<1133?107:r<33769?1131:32768
var a,n=[]
for(a=0;a<t;a++)n.push([11])
for(a=0;a<r;a++)n.push(e[a])
return n},wrap:function(e,t,r,a,i){var o=new n.CFF
o.header=new n.CFFHeader(1,0,4,4),o.names=[e]
var s=new n.CFFTopDict
s.setByName("version",391),s.setByName("Notice",392),s.setByName("FullName",393),s.setByName("FamilyName",394),s.setByName("Weight",395),s.setByName("Encoding",null),s.setByName("FontMatrix",i.fontMatrix),s.setByName("FontBBox",i.bbox),s.setByName("charset",null),s.setByName("CharStrings",null),s.setByName("Private",null),o.topDict=s
var c=new n.CFFStrings
c.add("Version 0.11"),c.add("See original notice"),c.add(e),c.add(e),c.add("Medium"),o.strings=c,o.globalSubrIndex=new n.CFFIndex
var l,u,h=t.length,f=[".notdef"]
for(l=0;l<h;l++){var d=r[l].glyphName;-1===n.CFFStandardStrings.indexOf(d)&&c.add(d),f.push(d)}o.charset=new n.CFFCharset(!1,0,f)
var p=new n.CFFIndex
for(p.add([139,14]),l=0;l<h;l++)p.add(t[l])
o.charStrings=p
var g=new n.CFFPrivateDict
g.setByName("Subrs",null)
var m=["BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StemSnapH","StemSnapV","BlueShift","BlueFuzz","BlueScale","LanguageGroup","ExpansionFactor","ForceBold","StdHW","StdVW"]
for(l=0,u=m.length;l<u;l++){var v=m[l]
if(v in i.privateData){var b=i.privateData[v]
if(Array.isArray(b))for(var y=b.length-1;y>0;y--)b[y]-=b[y-1]
g.setByName(v,b)}}o.topDict.privateDict=g
var w=new n.CFFIndex
for(l=0,u=a.length;l<u;l++)w.add(a[l])
return g.subrsIndex=w,new n.CFFCompiler(o).compile()}},t}(),D=function(){function e(e,t){this.properties=t
var r=new n.CFFParser(e,t,w)
this.cff=r.parse(),this.cff.duplicateFirstGlyph()
var i=new n.CFFCompiler(this.cff)
this.seacs=this.cff.seacs
try{this.data=i.compile()}catch(o){(0,a.warn)("Failed to compile font "+t.loadedName),this.data=e}}return e.prototype={get numGlyphs(){return this.cff.charStrings.count},getCharset:function(){return this.cff.charset.charset},getGlyphMapping:function(){var e,t,r=this.cff,a=this.properties,n=r.charset.charset
if(a.composite){if(e=Object.create(null),r.isCIDFont)for(t=0;t<n.length;t++){var i=n[t]
e[a.cMap.charCodeOf(i)]=t}else for(t=0;t<r.charStrings.count;t++)e[a.cMap.charCodeOf(t)]=t
return e}return e=B(a,r.encoding?r.encoding.encoding:null,n)},hasGlyphId:function(e){return this.cff.hasGlyphId(e)}},e}()},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.CFFFDSelect=t.CFFCompiler=t.CFFPrivateDict=t.CFFTopDict=t.CFFCharset=t.CFFIndex=t.CFFStrings=t.CFFHeader=t.CFF=t.CFFParser=t.CFFStandardStrings=void 0
var a=r(5),n=r(229),i=r(230)
function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,a=h(e)
if(t){var n=h(this).constructor
r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments)
return u(this,r)}}function u(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var r=0;r<t.length;r++){var a=t[r]
a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function p(e,t,r){return t&&d(e.prototype,t),r&&d(e,r),e}var g=[".notdef","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","endash","dagger","daggerdbl","periodcentered","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","questiondown","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","ring","cedilla","hungarumlaut","ogonek","caron","emdash","AE","ordfeminine","Lslash","Oslash","OE","ordmasculine","ae","dotlessi","lslash","oslash","oe","germandbls","onesuperior","logicalnot","mu","trademark","Eth","onehalf","plusminus","Thorn","onequarter","divide","brokenbar","degree","thorn","threequarters","twosuperior","registered","minus","eth","multiply","threesuperior","copyright","Aacute","Acircumflex","Adieresis","Agrave","Aring","Atilde","Ccedilla","Eacute","Ecircumflex","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Ntilde","Oacute","Ocircumflex","Odieresis","Ograve","Otilde","Scaron","Uacute","Ucircumflex","Udieresis","Ugrave","Yacute","Ydieresis","Zcaron","aacute","acircumflex","adieresis","agrave","aring","atilde","ccedilla","eacute","ecircumflex","edieresis","egrave","iacute","icircumflex","idieresis","igrave","ntilde","oacute","ocircumflex","odieresis","ograve","otilde","scaron","uacute","ucircumflex","udieresis","ugrave","yacute","ydieresis","zcaron","exclamsmall","Hungarumlautsmall","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","twodotenleader","onedotenleader","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","commasuperior","threequartersemdash","periodsuperior","questionsmall","asuperior","bsuperior","centsuperior","dsuperior","esuperior","isuperior","lsuperior","msuperior","nsuperior","osuperior","rsuperior","ssuperior","tsuperior","ff","ffi","ffl","parenleftinferior","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","exclamdownsmall","centoldstyle","Lslashsmall","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","Dotaccentsmall","Macronsmall","figuredash","hypheninferior","Ogoneksmall","Ringsmall","Cedillasmall","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","zerosuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall","001.000","001.001","001.002","001.003","Black","Bold","Book","Light","Medium","Regular","Roman","Semibold"]
t.CFFStandardStrings=g
var m,v,b=391,y=(m=[null,{id:"hstem",min:2,stackClearing:!0,stem:!0},null,{id:"vstem",min:2,stackClearing:!0,stem:!0},{id:"vmoveto",min:1,stackClearing:!0},{id:"rlineto",min:2,resetStack:!0},{id:"hlineto",min:1,resetStack:!0},{id:"vlineto",min:1,resetStack:!0},{id:"rrcurveto",min:6,resetStack:!0},null,{id:"callsubr",min:1,undefStack:!0},{id:"return",min:0,undefStack:!0},null,null,{id:"endchar",min:0,stackClearing:!0},null,null,null,{id:"hstemhm",min:2,stackClearing:!0,stem:!0},{id:"hintmask",min:0,stackClearing:!0},{id:"cntrmask",min:0,stackClearing:!0},{id:"rmoveto",min:2,stackClearing:!0},{id:"hmoveto",min:1,stackClearing:!0},{id:"vstemhm",min:2,stackClearing:!0,stem:!0},{id:"rcurveline",min:8,resetStack:!0},{id:"rlinecurve",min:8,resetStack:!0},{id:"vvcurveto",min:4,resetStack:!0},{id:"hhcurveto",min:4,resetStack:!0},null,{id:"callgsubr",min:1,undefStack:!0},{id:"vhcurveto",min:4,resetStack:!0},{id:"hvcurveto",min:4,resetStack:!0}],v=[null,null,null,{id:"and",min:2,stackDelta:-1},{id:"or",min:2,stackDelta:-1},{id:"not",min:1,stackDelta:0},null,null,null,{id:"abs",min:1,stackDelta:0},{id:"add",min:2,stackDelta:-1,stackFn:function(e,t){e[t-2]=e[t-2]+e[t-1]}},{id:"sub",min:2,stackDelta:-1,stackFn:function(e,t){e[t-2]=e[t-2]-e[t-1]}},{id:"div",min:2,stackDelta:-1,stackFn:function(e,t){e[t-2]=e[t-2]/e[t-1]}},null,{id:"neg",min:1,stackDelta:0,stackFn:function(e,t){e[t-1]=-e[t-1]}},{id:"eq",min:2,stackDelta:-1},null,null,{id:"drop",min:1,stackDelta:-1},null,{id:"put",min:2,stackDelta:-2},{id:"get",min:1,stackDelta:0},{id:"ifelse",min:4,stackDelta:-3},{id:"random",min:0,stackDelta:1},{id:"mul",min:2,stackDelta:-1,stackFn:function(e,t){e[t-2]=e[t-2]*e[t-1]}},null,{id:"sqrt",min:1,stackDelta:0},{id:"dup",min:1,stackDelta:1},{id:"exch",min:2,stackDelta:0},{id:"index",min:2,stackDelta:0},{id:"roll",min:3,stackDelta:-2},null,null,null,{id:"hflex",min:7,resetStack:!0},{id:"flex",min:13,resetStack:!0},{id:"hflex1",min:9,resetStack:!0},{id:"flex1",min:11,resetStack:!0}],function(){function e(t,r,a){f(this,e),this.bytes=t.getBytes(),this.properties=r,this.seacAnalysisEnabled=!!a}return p(e,[{key:"parse",value:function(){var e=this.properties,t=new w
this.cff=t
var r=this.parseHeader(),a=this.parseIndex(r.endPos),n=this.parseIndex(a.endPos),i=this.parseIndex(n.endPos),o=this.parseIndex(i.endPos),s=this.parseDict(n.obj.get(0)),c=this.createDict(T,s,t.strings)
t.header=r.obj,t.names=this.parseNameIndex(a.obj),t.strings=this.parseStringIndex(i.obj),t.topDict=c,t.globalSubrIndex=o.obj,this.parsePrivateDict(t.topDict),t.isCIDFont=c.hasName("ROS")
var l=c.getByName("CharStrings"),u=this.parseIndex(l).obj,h=c.getByName("FontMatrix")
h&&(e.fontMatrix=h)
var f,d,p=c.getByName("FontBBox")
if(p&&(e.ascent=Math.max(p[3],p[1]),e.descent=Math.min(p[1],p[3]),e.ascentScaled=!0),t.isCIDFont){for(var g=this.parseIndex(c.getByName("FDArray")).obj,m=0,v=g.count;m<v;++m){var b=g.get(m),y=this.createDict(T,this.parseDict(b),t.strings)
this.parsePrivateDict(y),t.fdArray.push(y)}d=null,f=this.parseCharsets(c.getByName("charset"),u.count,t.strings,!0),t.fdSelect=this.parseFDSelect(c.getByName("FDSelect"),u.count)}else f=this.parseCharsets(c.getByName("charset"),u.count,t.strings,!1),d=this.parseEncoding(c.getByName("Encoding"),e,t.strings,f.charset)
t.charset=f,t.encoding=d
var k=this.parseCharStrings({charStrings:u,localSubrIndex:c.privateDict.subrsIndex,globalSubrIndex:o.obj,fdSelect:t.fdSelect,fdArray:t.fdArray,privateDict:c.privateDict})
return t.charStrings=k.charStrings,t.seacs=k.seacs,t.widths=k.widths,t}},{key:"parseHeader",value:function(){for(var e=this.bytes,t=e.length,r=0;r<t&&1!==e[r];)++r
if(r>=t)throw new a.FormatError("Invalid CFF header")
0!==r&&((0,a.info)("cff data is shifted"),e=e.subarray(r),this.bytes=e)
var n=e[0],i=e[1],o=e[2],s=e[3]
return{obj:new k(n,i,o,s),endPos:o}}},{key:"parseDict",value:function(e){var t=0
function r(){var r=e[t++]
return 30===r?function(){for(var r="",a=15,n=["0","1","2","3","4","5","6","7","8","9",".","E","E-",null,"-"],i=e.length;t<i;){var o=e[t++],s=o>>4,c=15&o
if(s===a)break
if(r+=n[s],c===a)break
r+=n[c]}return parseFloat(r)}():28===r?r=((r=e[t++])<<24|e[t++]<<16)>>16:29===r?r=(r=(r=(r=e[t++])<<8|e[t++])<<8|e[t++])<<8|e[t++]:r>=32&&r<=246?r-139:r>=247&&r<=250?256*(r-247)+e[t++]+108:r>=251&&r<=254?-256*(r-251)-e[t++]-108:((0,a.warn)('CFFParser_parseDict: "'+r+'" is a reserved command.'),NaN)}var n=[],i=[]
t=0
for(var o=e.length;t<o;){var s=e[t]
s<=21?(12===s&&(s=s<<8|e[++t]),i.push([s,n]),n=[],++t):n.push(r())}return i}},{key:"parseIndex",value:function(e){var t,r,a=new x,n=this.bytes,i=n[e++]<<8|n[e++],o=[],s=e
if(0!==i){var c=n[e++],l=e+(i+1)*c-1
for(t=0,r=i+1;t<r;++t){for(var u=0,h=0;h<c;++h)u<<=8,u+=n[e++]
o.push(l+u)}s=o[i]}for(t=0,r=o.length-1;t<r;++t){var f=o[t],d=o[t+1]
a.add(n.subarray(f,d))}return{obj:a,endPos:s}}},{key:"parseNameIndex",value:function(e){for(var t=[],r=0,n=e.count;r<n;++r){var i=e.get(r)
t.push((0,a.bytesToString)(i))}return t}},{key:"parseStringIndex",value:function(e){for(var t=new S,r=0,n=e.count;r<n;++r){var i=e.get(r)
t.add((0,a.bytesToString)(i))}return t}},{key:"createDict",value:function(e,t,r){for(var a=new e(r),n=0,i=t.length;n<i;++n){var o=t[n],s=o[0],c=o[1]
a.setByKey(s,c)}return a}},{key:"parseCharString",value:function(e,t,r,n){if(!t||e.callDepth>10)return!1
for(var i=e.stackSize,o=e.stack,s=t.length,c=0;c<s;){var l=t[c++],u=null
if(12===l){var h=t[c++]
0===h?(t[c-2]=139,t[c-1]=22,i=0):u=v[h]}else if(28===l)o[i]=(t[c]<<24|t[c+1]<<16)>>16,c+=2,i++
else if(14===l){if(i>=4&&(i-=4,this.seacAnalysisEnabled))return e.seac=o.slice(i,i+4),!1
u=m[l]}else if(l>=32&&l<=246)o[i]=l-139,i++
else if(l>=247&&l<=254)o[i]=l<251?(l-247<<8)+t[c]+108:-(l-251<<8)-t[c]-108,c++,i++
else if(255===l)o[i]=(t[c]<<24|t[c+1]<<16|t[c+2]<<8|t[c+3])/65536,c+=4,i++
else if(19===l||20===l)e.hints+=i>>1,c+=e.hints+7>>3,i%=2,u=m[l]
else{if(10===l||29===l){var f
if(!(f=10===l?r:n))return u=m[l],(0,a.warn)("Missing subrsIndex for "+u.id),!1
var d=32768
f.count<1240?d=107:f.count<33900&&(d=1131)
var p=o[--i]+d
if(p<0||p>=f.count||isNaN(p))return u=m[l],(0,a.warn)("Out of bounds subrIndex for "+u.id),!1
if(e.stackSize=i,e.callDepth++,!this.parseCharString(e,f.get(p),r,n))return!1
e.callDepth--,i=e.stackSize
continue}if(11===l)return e.stackSize=i,!0
u=m[l]}if(u){if(u.stem&&(e.hints+=i>>1,3===l||23===l?e.hasVStems=!0:!e.hasVStems||1!==l&&18!==l||((0,a.warn)("CFF stem hints are in wrong order"),t[c-1]=1===l?3:23)),"min"in u&&!e.undefStack&&i<u.min)return(0,a.warn)("Not enough parameters for "+u.id+"; actual: "+i+", expected: "+u.min),!1
e.firstStackClearing&&u.stackClearing&&(e.firstStackClearing=!1,(i-=u.min)>=2&&u.stem?i%=2:i>1&&(0,a.warn)("Found too many parameters for stack-clearing command"),i>0&&o[i-1]>=0&&(e.width=o[i-1])),"stackDelta"in u?("stackFn"in u&&u.stackFn(o,i),i+=u.stackDelta):u.stackClearing?i=0:u.resetStack?(i=0,e.undefStack=!1):u.undefStack&&(i=0,e.undefStack=!0,e.firstStackClearing=!1)}}return e.stackSize=i,!0}},{key:"parseCharStrings",value:function(e){for(var t=e.charStrings,r=e.localSubrIndex,n=e.globalSubrIndex,i=e.fdSelect,o=e.fdArray,s=e.privateDict,c=[],l=[],u=t.count,h=0;h<u;h++){var f=t.get(h),d={callDepth:0,stackSize:0,stack:[],undefStack:!0,hints:0,firstStackClearing:!0,seac:null,width:null,hasVStems:!1},p=!0,g=null,m=s
if(i&&o.length){var v=i.getFDIndex(h);-1===v&&((0,a.warn)("Glyph index is not in fd select."),p=!1),v>=o.length&&((0,a.warn)("Invalid fd index for glyph index."),p=!1),p&&(g=(m=o[v].privateDict).subrsIndex)}else r&&(g=r)
if(p&&(p=this.parseCharString(d,f,g,n)),null!==d.width){var b=m.getByName("nominalWidthX")
l[h]=b+d.width}else{var y=m.getByName("defaultWidthX")
l[h]=y}null!==d.seac&&(c[h]=d.seac),p||t.set(h,new Uint8Array([14]))}return{charStrings:t,seacs:c,widths:l}}},{key:"emptyPrivateDictionary",value:function(e){var t=this.createDict(I,[],e.strings)
e.setByKey(18,[0,0]),e.privateDict=t}},{key:"parsePrivateDict",value:function(e){if(e.hasName("Private")){var t=e.getByName("Private")
if(Array.isArray(t)&&2===t.length){var r=t[0],a=t[1]
if(0===r||a>=this.bytes.length)this.emptyPrivateDictionary(e)
else{var n=a+r,i=this.bytes.subarray(a,n),o=this.parseDict(i),s=this.createDict(I,o,e.strings)
if(e.privateDict=s,s.getByName("Subrs")){var c=s.getByName("Subrs"),l=a+c
if(0===c||l>=this.bytes.length)this.emptyPrivateDictionary(e)
else{var u=this.parseIndex(l)
s.subrsIndex=u.obj}}}}else e.removeByName("Private")}else this.emptyPrivateDictionary(e)}},{key:"parseCharsets",value:function(e,t,r,i){if(0===e)return new P(!0,E.ISO_ADOBE,n.ISOAdobeCharset)
if(1===e)return new P(!0,E.EXPERT,n.ExpertCharset)
if(2===e)return new P(!0,E.EXPERT_SUBSET,n.ExpertSubsetCharset)
var o,s,c,l=this.bytes,u=e,h=l[e++],f=[i?0:".notdef"]
switch(t-=1,h){case 0:for(c=0;c<t;c++)o=l[e++]<<8|l[e++],f.push(i?o:r.get(o))
break
case 1:for(;f.length<=t;)for(o=l[e++]<<8|l[e++],s=l[e++],c=0;c<=s;c++)f.push(i?o++:r.get(o++))
break
case 2:for(;f.length<=t;)for(o=l[e++]<<8|l[e++],s=l[e++]<<8|l[e++],c=0;c<=s;c++)f.push(i?o++:r.get(o++))
break
default:throw new a.FormatError("Unknown charset format")}var d=e,p=l.subarray(u,d)
return new P(!1,h,f,p)}},{key:"parseEncoding",value:function(e,t,r,n){var o,s,c,l=Object.create(null),u=this.bytes,h=!1,f=null
if(0===e||1===e){h=!0,o=e
var d=e?i.ExpertEncoding:i.StandardEncoding
for(s=0,c=n.length;s<c;s++){var p=d.indexOf(n[s]);-1!==p&&(l[p]=s)}}else{var g=e
switch(127&(o=u[e++])){case 0:var m=u[e++]
for(s=1;s<=m;s++)l[u[e++]]=s
break
case 1:var v=u[e++],b=1
for(s=0;s<v;s++)for(var y=u[e++],w=u[e++],k=y;k<=y+w;k++)l[k]=b++
break
default:throw new a.FormatError("Unknown encoding format: ".concat(o," in CFF"))}var S=e
128&o&&(u[g]&=127,function(){var t=u[e++]
for(s=0;s<t;s++){var a=u[e++],i=(u[e++]<<8)+(255&u[e++])
l[a]=n.indexOf(r.get(i))}}()),f=u.subarray(g,S)}return new _(h,o&=127,l,f)}},{key:"parseFDSelect",value:function(e,t){var r,n=this.bytes,i=n[e++],o=[]
switch(i){case 0:for(r=0;r<t;++r){var s=n[e++]
o.push(s)}break
case 3:var c=n[e++]<<8|n[e++]
for(r=0;r<c;++r){var l=n[e++]<<8|n[e++]
0===r&&0!==l&&((0,a.warn)("parseFDSelect: The first range must have a first GID of 0 -- trying to recover."),l=0)
for(var u=n[e++],h=n[e]<<8|n[e+1],f=l;f<h;++f)o.push(u)}e+=2
break
default:throw new a.FormatError('parseFDSelect: Unknown format "'.concat(i,'".'))}if(o.length!==t)throw new a.FormatError("parseFDSelect: Invalid font data.")
return new F(i,o)}}]),e}())
t.CFFParser=y
var w=function(){function e(){f(this,e),this.header=null,this.names=[],this.topDict=null,this.strings=new S,this.globalSubrIndex=null,this.encoding=null,this.charset=null,this.charStrings=null,this.fdArray=[],this.fdSelect=null,this.isCIDFont=!1}return p(e,[{key:"duplicateFirstGlyph",value:function(){if(this.charStrings.count>=65535)(0,a.warn)("Not enough space in charstrings to duplicate first glyph.")
else{var e=this.charStrings.get(0)
this.charStrings.add(e),this.isCIDFont&&this.fdSelect.fdSelect.push(this.fdSelect.fdSelect[0])}}},{key:"hasGlyphId",value:function(e){return!(e<0||e>=this.charStrings.count)&&this.charStrings.get(e).length>0}}]),e}()
t.CFF=w
var k=function e(t,r,a,n){f(this,e),this.major=t,this.minor=r,this.hdrSize=a,this.offSize=n}
t.CFFHeader=k
var S=function(){function e(){f(this,e),this.strings=[]}return p(e,[{key:"get",value:function(e){return e>=0&&e<=390?g[e]:e-b<=this.strings.length?this.strings[e-b]:g[0]}},{key:"getSID",value:function(e){var t=g.indexOf(e)
return-1!==t?t:-1!==(t=this.strings.indexOf(e))?t+b:-1}},{key:"add",value:function(e){this.strings.push(e)}},{key:"count",get:function(){return this.strings.length}}]),e}()
t.CFFStrings=S
var x=function(){function e(){f(this,e),this.objects=[],this.length=0}return p(e,[{key:"add",value:function(e){this.length+=e.length,this.objects.push(e)}},{key:"set",value:function(e,t){this.length+=t.length-this.objects[e].length,this.objects[e]=t}},{key:"get",value:function(e){return this.objects[e]}},{key:"count",get:function(){return this.objects.length}}]),e}()
t.CFFIndex=x
var C,A,O=function(){function e(t,r){f(this,e),this.keyToNameMap=t.keyToNameMap,this.nameToKeyMap=t.nameToKeyMap,this.defaults=t.defaults,this.types=t.types,this.opcodes=t.opcodes,this.order=t.order,this.strings=r,this.values=Object.create(null)}return p(e,[{key:"setByKey",value:function(e,t){if(!(e in this.keyToNameMap))return!1
var r=t.length
if(0===r)return!0
for(var n=0;n<r;n++)if(isNaN(t[n]))return(0,a.warn)('Invalid CFFDict value: "'+t+'" for key "'+e+'".'),!0
var i=this.types[e]
return"num"!==i&&"sid"!==i&&"offset"!==i||(t=t[0]),this.values[e]=t,!0}},{key:"setByName",value:function(e,t){if(!(e in this.nameToKeyMap))throw new a.FormatError('Invalid dictionary name "'.concat(e,'"'))
this.values[this.nameToKeyMap[e]]=t}},{key:"hasName",value:function(e){return this.nameToKeyMap[e]in this.values}},{key:"getByName",value:function(e){if(!(e in this.nameToKeyMap))throw new a.FormatError("Invalid dictionary name ".concat(e,'"'))
var t=this.nameToKeyMap[e]
return t in this.values?this.values[t]:this.defaults[t]}},{key:"removeByName",value:function(e){delete this.values[this.nameToKeyMap[e]]}}],[{key:"createTables",value:function(e){for(var t={keyToNameMap:{},nameToKeyMap:{},defaults:{},types:{},opcodes:{},order:[]},r=0,a=e.length;r<a;++r){var n=e[r],i=Array.isArray(n[0])?(n[0][0]<<8)+n[0][1]:n[0]
t.keyToNameMap[i]=n[1],t.nameToKeyMap[n[1]]=i,t.types[i]=n[2],t.defaults[i]=n[3],t.opcodes[i]=Array.isArray(n[0])?n[0]:[n[0]],t.order.push(i)}return t}}]),e}(),T=(C=[[[12,30],"ROS",["sid","sid","num"],null],[[12,20],"SyntheticBase","num",null],[0,"version","sid",null],[1,"Notice","sid",null],[[12,0],"Copyright","sid",null],[2,"FullName","sid",null],[3,"FamilyName","sid",null],[4,"Weight","sid",null],[[12,1],"isFixedPitch","num",0],[[12,2],"ItalicAngle","num",0],[[12,3],"UnderlinePosition","num",-100],[[12,4],"UnderlineThickness","num",50],[[12,5],"PaintType","num",0],[[12,6],"CharstringType","num",2],[[12,7],"FontMatrix",["num","num","num","num","num","num"],[.001,0,0,.001,0,0]],[13,"UniqueID","num",null],[5,"FontBBox",["num","num","num","num"],[0,0,0,0]],[[12,8],"StrokeWidth","num",0],[14,"XUID","array",null],[15,"charset","offset",0],[16,"Encoding","offset",0],[17,"CharStrings","offset",0],[18,"Private",["offset","offset"],null],[[12,21],"PostScript","sid",null],[[12,22],"BaseFontName","sid",null],[[12,23],"BaseFontBlend","delta",null],[[12,31],"CIDFontVersion","num",0],[[12,32],"CIDFontRevision","num",0],[[12,33],"CIDFontType","num",0],[[12,34],"CIDCount","num",8720],[[12,35],"UIDBase","num",null],[[12,37],"FDSelect","offset",null],[[12,36],"FDArray","offset",null],[[12,38],"FontName","sid",null]],A=null,function(e){s(r,e)
var t=l(r)
function r(e){var a
return f(this,r),null===A&&(A=O.createTables(C)),(a=t.call(this,A,e)).privateDict=null,a}return r}(O))
t.CFFTopDict=T
var I=function(){var e=[[6,"BlueValues","delta",null],[7,"OtherBlues","delta",null],[8,"FamilyBlues","delta",null],[9,"FamilyOtherBlues","delta",null],[[12,9],"BlueScale","num",.039625],[[12,10],"BlueShift","num",7],[[12,11],"BlueFuzz","num",1],[10,"StdHW","num",null],[11,"StdVW","num",null],[[12,12],"StemSnapH","delta",null],[[12,13],"StemSnapV","delta",null],[[12,14],"ForceBold","num",0],[[12,17],"LanguageGroup","num",0],[[12,18],"ExpansionFactor","num",.06],[[12,19],"initialRandomSeed","num",0],[20,"defaultWidthX","num",0],[21,"nominalWidthX","num",0],[19,"Subrs","offset",null]],t=null
return function(r){s(n,r)
var a=l(n)
function n(r){var i
return f(this,n),null===t&&(t=O.createTables(e)),(i=a.call(this,t,r)).subrsIndex=null,i}return n}(O)}()
t.CFFPrivateDict=I
var E={ISO_ADOBE:0,EXPERT:1,EXPERT_SUBSET:2},P=function e(t,r,a,n){f(this,e),this.predefined=t,this.format=r,this.charset=a,this.raw=n}
t.CFFCharset=P
var _=function e(t,r,a,n){f(this,e),this.predefined=t,this.format=r,this.encoding=a,this.raw=n},F=function(){function e(t,r){f(this,e),this.format=t,this.fdSelect=r}return p(e,[{key:"getFDIndex",value:function(e){return e<0||e>=this.fdSelect.length?-1:this.fdSelect[e]}}]),e}()
t.CFFFDSelect=F
var R=function(){function e(){f(this,e),this.offsets=Object.create(null)}return p(e,[{key:"isTracking",value:function(e){return e in this.offsets}},{key:"track",value:function(e,t){if(e in this.offsets)throw new a.FormatError("Already tracking location of ".concat(e))
this.offsets[e]=t}},{key:"offset",value:function(e){for(var t in this.offsets)this.offsets[t]+=e}},{key:"setEntryLocation",value:function(e,t,r){if(!(e in this.offsets))throw new a.FormatError("Not tracking location of ".concat(e))
for(var n=r.data,i=this.offsets[e],o=0,s=t.length;o<s;++o){var c=5*o+i,l=c+1,u=c+2,h=c+3,f=c+4
if(29!==n[c]||0!==n[l]||0!==n[u]||0!==n[h]||0!==n[f])throw new a.FormatError("writing to an offset that is not empty")
var d=t[o]
n[c]=29,n[l]=d>>24&255,n[u]=d>>16&255,n[h]=d>>8&255,n[f]=255&d}}}]),e}(),B=function(){function e(t){f(this,e),this.cff=t}return p(e,[{key:"compile",value:function(){var e=this.cff,t={data:[],length:0,add:function(e){this.data=this.data.concat(e),this.length=this.data.length}},r=this.compileHeader(e.header)
t.add(r)
var n=this.compileNameIndex(e.names)
if(t.add(n),e.isCIDFont&&e.topDict.hasName("FontMatrix")){var i=e.topDict.getByName("FontMatrix")
e.topDict.removeByName("FontMatrix")
for(var o=0,s=e.fdArray.length;o<s;o++){var c=e.fdArray[o],l=i.slice(0)
c.hasName("FontMatrix")&&(l=a.Util.transform(l,c.getByName("FontMatrix"))),c.setByName("FontMatrix",l)}}e.topDict.setByName("charset",0)
var u=this.compileTopDicts([e.topDict],t.length,e.isCIDFont)
t.add(u.output)
var h=u.trackers[0],f=this.compileStringIndex(e.strings.strings)
t.add(f)
var d=this.compileIndex(e.globalSubrIndex)
if(t.add(d),e.encoding&&e.topDict.hasName("Encoding"))if(e.encoding.predefined)h.setEntryLocation("Encoding",[e.encoding.format],t)
else{var p=this.compileEncoding(e.encoding)
h.setEntryLocation("Encoding",[t.length],t),t.add(p)}var g=this.compileCharset(e.charset,e.charStrings.count,e.strings,e.isCIDFont)
h.setEntryLocation("charset",[t.length],t),t.add(g)
var m=this.compileCharStrings(e.charStrings)
if(h.setEntryLocation("CharStrings",[t.length],t),t.add(m),e.isCIDFont){h.setEntryLocation("FDSelect",[t.length],t)
var v=this.compileFDSelect(e.fdSelect)
t.add(v),u=this.compileTopDicts(e.fdArray,t.length,!0),h.setEntryLocation("FDArray",[t.length],t),t.add(u.output)
var b=u.trackers
this.compilePrivateDicts(e.fdArray,b,t)}return this.compilePrivateDicts([e.topDict],[h],t),t.add([0]),t.data}},{key:"encodeNumber",value:function(e){return Number.isInteger(e)?this.encodeInteger(e):this.encodeFloat(e)}},{key:"encodeFloat",value:function(t){var r=t.toString(),a=e.EncodeFloatRegExp.exec(r)
if(a){var n=parseFloat("1e"+((a[2]?+a[2]:0)+a[1].length))
r=(Math.round(t*n)/n).toString()}var i,o,s=""
for(i=0,o=r.length;i<o;++i){var c=r[i]
s+="e"===c?"-"===r[++i]?"c":"b":"."===c?"a":"-"===c?"e":c}var l=[30]
for(i=0,o=(s+=1&s.length?"f":"ff").length;i<o;i+=2)l.push(parseInt(s.substring(i,i+2),16))
return l}},{key:"encodeInteger",value:function(e){return e>=-107&&e<=107?[e+139]:e>=108&&e<=1131?[247+((e-=108)>>8),255&e]:e>=-1131&&e<=-108?[251+((e=-e-108)>>8),255&e]:e>=-32768&&e<=32767?[28,e>>8&255,255&e]:[29,e>>24&255,e>>16&255,e>>8&255,255&e]}},{key:"compileHeader",value:function(e){return[e.major,e.minor,e.hdrSize,e.offSize]}},{key:"compileNameIndex",value:function(e){for(var t=new x,r=0,n=e.length;r<n;++r){for(var i=e[r],o=Math.min(i.length,127),s=new Array(o),c=0;c<o;c++){var l=i[c];(l<"!"||l>"~"||"["===l||"]"===l||"("===l||")"===l||"{"===l||"}"===l||"<"===l||">"===l||"/"===l||"%"===l)&&(l="_"),s[c]=l}""===(s=s.join(""))&&(s="Bad_Font_Name"),t.add((0,a.stringToBytes)(s))}return this.compileIndex(t)}},{key:"compileTopDicts",value:function(e,t,r){for(var a=[],n=new x,i=0,o=e.length;i<o;++i){var s=e[i]
r&&(s.removeByName("CIDFontVersion"),s.removeByName("CIDFontRevision"),s.removeByName("CIDFontType"),s.removeByName("CIDCount"),s.removeByName("UIDBase"))
var c=new R,l=this.compileDict(s,c)
a.push(c),n.add(l),c.offset(t)}return{trackers:a,output:n=this.compileIndex(n,a)}}},{key:"compilePrivateDicts",value:function(e,t,r){for(var n=0,i=e.length;n<i;++n){var o=e[n],s=o.privateDict
if(!s||!o.hasName("Private"))throw new a.FormatError("There must be a private dictionary.")
var c=new R,l=this.compileDict(s,c),u=r.length
if(c.offset(u),l.length||(u=0),t[n].setEntryLocation("Private",[l.length,u],r),r.add(l),s.subrsIndex&&s.hasName("Subrs")){var h=this.compileIndex(s.subrsIndex)
c.setEntryLocation("Subrs",[l.length],r),r.add(h)}}}},{key:"compileDict",value:function(e,t){for(var r=[],n=e.order,i=0;i<n.length;++i){var o=n[i]
if(o in e.values){var s=e.values[o],c=e.types[o]
if(Array.isArray(c)||(c=[c]),Array.isArray(s)||(s=[s]),0!==s.length){for(var l=0,u=c.length;l<u;++l){var h=c[l],f=s[l]
switch(h){case"num":case"sid":r=r.concat(this.encodeNumber(f))
break
case"offset":var d=e.keyToNameMap[o]
t.isTracking(d)||t.track(d,r.length),r=r.concat([29,0,0,0,0])
break
case"array":case"delta":r=r.concat(this.encodeNumber(f))
for(var p=1,g=s.length;p<g;++p)r=r.concat(this.encodeNumber(s[p]))
break
default:throw new a.FormatError("Unknown data type of ".concat(h))}}r=r.concat(e.opcodes[o])}}}return r}},{key:"compileStringIndex",value:function(e){for(var t=new x,r=0,n=e.length;r<n;++r)t.add((0,a.stringToBytes)(e[r]))
return this.compileIndex(t)}},{key:"compileGlobalSubrIndex",value:function(){var e=this.cff.globalSubrIndex
this.out.writeByteArray(this.compileIndex(e))}},{key:"compileCharStrings",value:function(e){for(var t=new x,r=0;r<e.count;r++){var a=e.get(r)
0!==a.length?t.add(a):t.add(new Uint8Array([139,14]))}return this.compileIndex(t)}},{key:"compileCharset",value:function(e,t,r,n){var i,o=t-1
if(n)i=new Uint8Array([2,0,0,o>>8&255,255&o])
else{(i=new Uint8Array(1+2*o))[0]=0
for(var s=0,c=e.charset.length,l=!1,u=1;u<i.length;u+=2){var h=0
if(s<c){var f=e.charset[s++];-1===(h=r.getSID(f))&&(h=0,l||(l=!0,(0,a.warn)("Couldn't find ".concat(f," in CFF strings"))))}i[u]=h>>8&255,i[u+1]=255&h}}return this.compileTypedArray(i)}},{key:"compileEncoding",value:function(e){return this.compileTypedArray(e.raw)}},{key:"compileFDSelect",value:function(e){var t,r,a=e.format
switch(a){case 0:for((t=new Uint8Array(1+e.fdSelect.length))[0]=a,r=0;r<e.fdSelect.length;r++)t[r+1]=e.fdSelect[r]
break
case 3:var n=e.fdSelect[0],i=[a,0,0,0,0,n]
for(r=1;r<e.fdSelect.length;r++){var o=e.fdSelect[r]
o!==n&&(i.push(r>>8&255,255&r,o),n=o)}var s=(i.length-3)/3
i[1]=s>>8&255,i[2]=255&s,i.push(r>>8&255,255&r),t=new Uint8Array(i)}return this.compileTypedArray(t)}},{key:"compileTypedArray",value:function(e){for(var t=[],r=0,a=e.length;r<a;++r)t[r]=e[r]
return t}},{key:"compileIndex",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=e.objects,a=r.length
if(0===a)return[0,0,0]
var n,i,o=[a>>8&255,255&a],s=1
for(n=0;n<a;++n)s+=r[n].length
i=s<256?1:s<65536?2:s<16777216?3:4,o.push(i)
var c=1
for(n=0;n<a+1;n++)1===i?o.push(255&c):2===i?o.push(c>>8&255,255&c):3===i?o.push(c>>16&255,c>>8&255,255&c):o.push(c>>>24&255,c>>16&255,c>>8&255,255&c),r[n]&&(c+=r[n].length)
for(n=0;n<a;n++){t[n]&&t[n].offset(o.length)
for(var l=0,u=r[n].length;l<u;l++)o.push(r[n][l])}return o}}],[{key:"EncodeFloatRegExp",get:function(){return(0,a.shadow)(this,"EncodeFloatRegExp",/\.(\d*?)(?:9{5,20}|0{5,20})\d{0,2}(?:e(.+)|$)/)}}]),e}()
t.CFFCompiler=B},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.ExpertSubsetCharset=t.ExpertCharset=t.ISOAdobeCharset=void 0
t.ISOAdobeCharset=[".notdef","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","endash","dagger","daggerdbl","periodcentered","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","questiondown","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","ring","cedilla","hungarumlaut","ogonek","caron","emdash","AE","ordfeminine","Lslash","Oslash","OE","ordmasculine","ae","dotlessi","lslash","oslash","oe","germandbls","onesuperior","logicalnot","mu","trademark","Eth","onehalf","plusminus","Thorn","onequarter","divide","brokenbar","degree","thorn","threequarters","twosuperior","registered","minus","eth","multiply","threesuperior","copyright","Aacute","Acircumflex","Adieresis","Agrave","Aring","Atilde","Ccedilla","Eacute","Ecircumflex","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Ntilde","Oacute","Ocircumflex","Odieresis","Ograve","Otilde","Scaron","Uacute","Ucircumflex","Udieresis","Ugrave","Yacute","Ydieresis","Zcaron","aacute","acircumflex","adieresis","agrave","aring","atilde","ccedilla","eacute","ecircumflex","edieresis","egrave","iacute","icircumflex","idieresis","igrave","ntilde","oacute","ocircumflex","odieresis","ograve","otilde","scaron","uacute","ucircumflex","udieresis","ugrave","yacute","ydieresis","zcaron"]
t.ExpertCharset=[".notdef","space","exclamsmall","Hungarumlautsmall","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","twodotenleader","onedotenleader","comma","hyphen","period","fraction","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","colon","semicolon","commasuperior","threequartersemdash","periodsuperior","questionsmall","asuperior","bsuperior","centsuperior","dsuperior","esuperior","isuperior","lsuperior","msuperior","nsuperior","osuperior","rsuperior","ssuperior","tsuperior","ff","fi","fl","ffi","ffl","parenleftinferior","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","exclamdownsmall","centoldstyle","Lslashsmall","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","Dotaccentsmall","Macronsmall","figuredash","hypheninferior","Ogoneksmall","Ringsmall","Cedillasmall","onequarter","onehalf","threequarters","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","zerosuperior","onesuperior","twosuperior","threesuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall"]
t.ExpertSubsetCharset=[".notdef","space","dollaroldstyle","dollarsuperior","parenleftsuperior","parenrightsuperior","twodotenleader","onedotenleader","comma","hyphen","period","fraction","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","colon","semicolon","commasuperior","threequartersemdash","periodsuperior","asuperior","bsuperior","centsuperior","dsuperior","esuperior","isuperior","lsuperior","msuperior","nsuperior","osuperior","rsuperior","ssuperior","tsuperior","ff","fi","fl","ffi","ffl","parenleftinferior","parenrightinferior","hyphensuperior","colonmonetary","onefitted","rupiah","centoldstyle","figuredash","hypheninferior","onequarter","onehalf","threequarters","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","zerosuperior","onesuperior","twosuperior","threesuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior"]},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.getEncoding=function(e){switch(e){case"WinAnsiEncoding":return s
case"StandardEncoding":return o
case"MacRomanEncoding":return i
case"SymbolSetEncoding":return c
case"ZapfDingbatsEncoding":return l
case"ExpertEncoding":return a
case"MacExpertEncoding":return n
default:return null}},t.ExpertEncoding=t.ZapfDingbatsEncoding=t.SymbolSetEncoding=t.MacRomanEncoding=t.StandardEncoding=t.WinAnsiEncoding=void 0
var a=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclamsmall","Hungarumlautsmall","","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","twodotenleader","onedotenleader","comma","hyphen","period","fraction","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","colon","semicolon","commasuperior","threequartersemdash","periodsuperior","questionsmall","","asuperior","bsuperior","centsuperior","dsuperior","esuperior","","","","isuperior","","","lsuperior","msuperior","nsuperior","osuperior","","","rsuperior","ssuperior","tsuperior","","ff","fi","fl","ffi","ffl","parenleftinferior","","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","exclamdownsmall","centoldstyle","Lslashsmall","","","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","","Dotaccentsmall","","","Macronsmall","","","figuredash","hypheninferior","","","Ogoneksmall","Ringsmall","Cedillasmall","","","","onequarter","onehalf","threequarters","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","","","zerosuperior","onesuperior","twosuperior","threesuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall"]
t.ExpertEncoding=a
var n=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclamsmall","Hungarumlautsmall","centoldstyle","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","twodotenleader","onedotenleader","comma","hyphen","period","fraction","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","colon","semicolon","","threequartersemdash","","questionsmall","","","","","Ethsmall","","","onequarter","onehalf","threequarters","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","","","","","","","ff","fi","fl","ffi","ffl","parenleftinferior","","parenrightinferior","Circumflexsmall","hypheninferior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","","","asuperior","centsuperior","","","","","Aacutesmall","Agravesmall","Acircumflexsmall","Adieresissmall","Atildesmall","Aringsmall","Ccedillasmall","Eacutesmall","Egravesmall","Ecircumflexsmall","Edieresissmall","Iacutesmall","Igravesmall","Icircumflexsmall","Idieresissmall","Ntildesmall","Oacutesmall","Ogravesmall","Ocircumflexsmall","Odieresissmall","Otildesmall","Uacutesmall","Ugravesmall","Ucircumflexsmall","Udieresissmall","","eightsuperior","fourinferior","threeinferior","sixinferior","eightinferior","seveninferior","Scaronsmall","","centinferior","twoinferior","","Dieresissmall","","Caronsmall","osuperior","fiveinferior","","commainferior","periodinferior","Yacutesmall","","dollarinferior","","","Thornsmall","","nineinferior","zeroinferior","Zcaronsmall","AEsmall","Oslashsmall","questiondownsmall","oneinferior","Lslashsmall","","","","","","","Cedillasmall","","","","","","OEsmall","figuredash","hyphensuperior","","","","","exclamdownsmall","","Ydieresissmall","","onesuperior","twosuperior","threesuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","ninesuperior","zerosuperior","","esuperior","rsuperior","tsuperior","","","isuperior","ssuperior","dsuperior","","","","","","lsuperior","Ogoneksmall","Brevesmall","Macronsmall","bsuperior","nsuperior","msuperior","commasuperior","periodsuperior","Dotaccentsmall","Ringsmall","","","",""],i=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quotesingle","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","grave","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","","Adieresis","Aring","Ccedilla","Eacute","Ntilde","Odieresis","Udieresis","aacute","agrave","acircumflex","adieresis","atilde","aring","ccedilla","eacute","egrave","ecircumflex","edieresis","iacute","igrave","icircumflex","idieresis","ntilde","oacute","ograve","ocircumflex","odieresis","otilde","uacute","ugrave","ucircumflex","udieresis","dagger","degree","cent","sterling","section","bullet","paragraph","germandbls","registered","copyright","trademark","acute","dieresis","notequal","AE","Oslash","infinity","plusminus","lessequal","greaterequal","yen","mu","partialdiff","summation","product","pi","integral","ordfeminine","ordmasculine","Omega","ae","oslash","questiondown","exclamdown","logicalnot","radical","florin","approxequal","Delta","guillemotleft","guillemotright","ellipsis","space","Agrave","Atilde","Otilde","OE","oe","endash","emdash","quotedblleft","quotedblright","quoteleft","quoteright","divide","lozenge","ydieresis","Ydieresis","fraction","currency","guilsinglleft","guilsinglright","fi","fl","daggerdbl","periodcentered","quotesinglbase","quotedblbase","perthousand","Acircumflex","Ecircumflex","Aacute","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Oacute","Ocircumflex","apple","Ograve","Uacute","Ucircumflex","Ugrave","dotlessi","circumflex","tilde","macron","breve","dotaccent","ring","cedilla","hungarumlaut","ogonek","caron"]
t.MacRomanEncoding=i
var o=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","","endash","dagger","daggerdbl","periodcentered","","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","","questiondown","","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","","ring","cedilla","","hungarumlaut","ogonek","caron","emdash","","","","","","","","","","","","","","","","","AE","","ordfeminine","","","","","Lslash","Oslash","OE","ordmasculine","","","","","","ae","","","","dotlessi","","","lslash","oslash","oe","germandbls","","","",""]
t.StandardEncoding=o
var s=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quotesingle","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","grave","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","bullet","Euro","bullet","quotesinglbase","florin","quotedblbase","ellipsis","dagger","daggerdbl","circumflex","perthousand","Scaron","guilsinglleft","OE","bullet","Zcaron","bullet","bullet","quoteleft","quoteright","quotedblleft","quotedblright","bullet","endash","emdash","tilde","trademark","scaron","guilsinglright","oe","bullet","zcaron","Ydieresis","space","exclamdown","cent","sterling","currency","yen","brokenbar","section","dieresis","copyright","ordfeminine","guillemotleft","logicalnot","hyphen","registered","macron","degree","plusminus","twosuperior","threesuperior","acute","mu","paragraph","periodcentered","cedilla","onesuperior","ordmasculine","guillemotright","onequarter","onehalf","threequarters","questiondown","Agrave","Aacute","Acircumflex","Atilde","Adieresis","Aring","AE","Ccedilla","Egrave","Eacute","Ecircumflex","Edieresis","Igrave","Iacute","Icircumflex","Idieresis","Eth","Ntilde","Ograve","Oacute","Ocircumflex","Otilde","Odieresis","multiply","Oslash","Ugrave","Uacute","Ucircumflex","Udieresis","Yacute","Thorn","germandbls","agrave","aacute","acircumflex","atilde","adieresis","aring","ae","ccedilla","egrave","eacute","ecircumflex","edieresis","igrave","iacute","icircumflex","idieresis","eth","ntilde","ograve","oacute","ocircumflex","otilde","odieresis","divide","oslash","ugrave","uacute","ucircumflex","udieresis","yacute","thorn","ydieresis"]
t.WinAnsiEncoding=s
var c=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclam","universal","numbersign","existential","percent","ampersand","suchthat","parenleft","parenright","asteriskmath","plus","comma","minus","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","congruent","Alpha","Beta","Chi","Delta","Epsilon","Phi","Gamma","Eta","Iota","theta1","Kappa","Lambda","Mu","Nu","Omicron","Pi","Theta","Rho","Sigma","Tau","Upsilon","sigma1","Omega","Xi","Psi","Zeta","bracketleft","therefore","bracketright","perpendicular","underscore","radicalex","alpha","beta","chi","delta","epsilon","phi","gamma","eta","iota","phi1","kappa","lambda","mu","nu","omicron","pi","theta","rho","sigma","tau","upsilon","omega1","omega","xi","psi","zeta","braceleft","bar","braceright","similar","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Euro","Upsilon1","minute","lessequal","fraction","infinity","florin","club","diamond","heart","spade","arrowboth","arrowleft","arrowup","arrowright","arrowdown","degree","plusminus","second","greaterequal","multiply","proportional","partialdiff","bullet","divide","notequal","equivalence","approxequal","ellipsis","arrowvertex","arrowhorizex","carriagereturn","aleph","Ifraktur","Rfraktur","weierstrass","circlemultiply","circleplus","emptyset","intersection","union","propersuperset","reflexsuperset","notsubset","propersubset","reflexsubset","element","notelement","angle","gradient","registerserif","copyrightserif","trademarkserif","product","radical","dotmath","logicalnot","logicaland","logicalor","arrowdblboth","arrowdblleft","arrowdblup","arrowdblright","arrowdbldown","lozenge","angleleft","registersans","copyrightsans","trademarksans","summation","parenlefttp","parenleftex","parenleftbt","bracketlefttp","bracketleftex","bracketleftbt","bracelefttp","braceleftmid","braceleftbt","braceex","","angleright","integral","integraltp","integralex","integralbt","parenrighttp","parenrightex","parenrightbt","bracketrighttp","bracketrightex","bracketrightbt","bracerighttp","bracerightmid","bracerightbt",""]
t.SymbolSetEncoding=c
var l=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","a1","a2","a202","a3","a4","a5","a119","a118","a117","a11","a12","a13","a14","a15","a16","a105","a17","a18","a19","a20","a21","a22","a23","a24","a25","a26","a27","a28","a6","a7","a8","a9","a10","a29","a30","a31","a32","a33","a34","a35","a36","a37","a38","a39","a40","a41","a42","a43","a44","a45","a46","a47","a48","a49","a50","a51","a52","a53","a54","a55","a56","a57","a58","a59","a60","a61","a62","a63","a64","a65","a66","a67","a68","a69","a70","a71","a72","a73","a74","a203","a75","a204","a76","a77","a78","a79","a81","a82","a83","a84","a97","a98","a99","a100","","a89","a90","a93","a94","a91","a92","a205","a85","a206","a86","a87","a88","a95","a96","","","","","","","","","","","","","","","","","","","","a101","a102","a103","a104","a106","a107","a108","a112","a111","a110","a109","a120","a121","a122","a123","a124","a125","a126","a127","a128","a129","a130","a131","a132","a133","a134","a135","a136","a137","a138","a139","a140","a141","a142","a143","a144","a145","a146","a147","a148","a149","a150","a151","a152","a153","a154","a155","a156","a157","a158","a159","a160","a161","a163","a164","a196","a165","a192","a166","a167","a168","a169","a170","a171","a172","a173","a162","a174","a175","a176","a177","a178","a179","a193","a180","a199","a181","a200","a182","","a201","a183","a184","a197","a185","a194","a198","a186","a195","a187","a188","a189","a190","a191",""]
t.ZapfDingbatsEncoding=l},function(e,t,r){var a=r(205).getLookupTableFactory,n=a((function(e){e.A=65,e.AE=198,e.AEacute=508,e.AEmacron=482,e.AEsmall=63462,e.Aacute=193,e.Aacutesmall=63457,e.Abreve=258,e.Abreveacute=7854,e.Abrevecyrillic=1232,e.Abrevedotbelow=7862,e.Abrevegrave=7856,e.Abrevehookabove=7858,e.Abrevetilde=7860,e.Acaron=461,e.Acircle=9398,e.Acircumflex=194,e.Acircumflexacute=7844,e.Acircumflexdotbelow=7852,e.Acircumflexgrave=7846,e.Acircumflexhookabove=7848,e.Acircumflexsmall=63458,e.Acircumflextilde=7850,e.Acute=63177,e.Acutesmall=63412,e.Acyrillic=1040,e.Adblgrave=512,e.Adieresis=196,e.Adieresiscyrillic=1234,e.Adieresismacron=478
e.Adieresissmall=63460,e.Adotbelow=7840,e.Adotmacron=480,e.Agrave=192,e.Agravesmall=63456,e.Ahookabove=7842,e.Aiecyrillic=1236,e.Ainvertedbreve=514,e.Alpha=913,e.Alphatonos=902,e.Amacron=256,e.Amonospace=65313,e.Aogonek=260,e.Aring=197,e.Aringacute=506,e.Aringbelow=7680,e.Aringsmall=63461,e.Asmall=63329,e.Atilde=195,e.Atildesmall=63459,e.Aybarmenian=1329,e.B=66,e.Bcircle=9399,e.Bdotaccent=7682,e.Bdotbelow=7684,e.Becyrillic=1041,e.Benarmenian=1330,e.Beta=914,e.Bhook=385,e.Blinebelow=7686
e.Bmonospace=65314,e.Brevesmall=63220,e.Bsmall=63330,e.Btopbar=386,e.C=67,e.Caarmenian=1342,e.Cacute=262,e.Caron=63178,e.Caronsmall=63221,e.Ccaron=268,e.Ccedilla=199,e.Ccedillaacute=7688,e.Ccedillasmall=63463,e.Ccircle=9400,e.Ccircumflex=264,e.Cdot=266,e.Cdotaccent=266,e.Cedillasmall=63416,e.Chaarmenian=1353,e.Cheabkhasiancyrillic=1212,e.Checyrillic=1063,e.Chedescenderabkhasiancyrillic=1214,e.Chedescendercyrillic=1206,e.Chedieresiscyrillic=1268,e.Cheharmenian=1347,e.Chekhakassiancyrillic=1227,e.Cheverticalstrokecyrillic=1208,e.Chi=935,e.Chook=391,e.Circumflexsmall=63222
e.Cmonospace=65315,e.Coarmenian=1361,e.Csmall=63331,e.D=68,e.DZ=497,e.DZcaron=452,e.Daarmenian=1332,e.Dafrican=393,e.Dcaron=270,e.Dcedilla=7696,e.Dcircle=9401,e.Dcircumflexbelow=7698,e.Dcroat=272,e.Ddotaccent=7690,e.Ddotbelow=7692,e.Decyrillic=1044,e.Deicoptic=1006,e.Delta=8710,e.Deltagreek=916,e.Dhook=394,e.Dieresis=63179,e.DieresisAcute=63180,e.DieresisGrave=63181,e.Dieresissmall=63400,e.Digammagreek=988,e.Djecyrillic=1026,e.Dlinebelow=7694,e.Dmonospace=65316,e.Dotaccentsmall=63223,e.Dslash=272
e.Dsmall=63332,e.Dtopbar=395,e.Dz=498,e.Dzcaron=453,e.Dzeabkhasiancyrillic=1248,e.Dzecyrillic=1029,e.Dzhecyrillic=1039,e.E=69,e.Eacute=201,e.Eacutesmall=63465,e.Ebreve=276,e.Ecaron=282,e.Ecedillabreve=7708,e.Echarmenian=1333,e.Ecircle=9402,e.Ecircumflex=202,e.Ecircumflexacute=7870,e.Ecircumflexbelow=7704,e.Ecircumflexdotbelow=7878,e.Ecircumflexgrave=7872,e.Ecircumflexhookabove=7874,e.Ecircumflexsmall=63466,e.Ecircumflextilde=7876,e.Ecyrillic=1028,e.Edblgrave=516,e.Edieresis=203,e.Edieresissmall=63467,e.Edot=278,e.Edotaccent=278,e.Edotbelow=7864
e.Efcyrillic=1060,e.Egrave=200,e.Egravesmall=63464,e.Eharmenian=1335,e.Ehookabove=7866,e.Eightroman=8551,e.Einvertedbreve=518,e.Eiotifiedcyrillic=1124,e.Elcyrillic=1051,e.Elevenroman=8554,e.Emacron=274,e.Emacronacute=7702,e.Emacrongrave=7700,e.Emcyrillic=1052,e.Emonospace=65317,e.Encyrillic=1053,e.Endescendercyrillic=1186,e.Eng=330,e.Enghecyrillic=1188,e.Enhookcyrillic=1223,e.Eogonek=280,e.Eopen=400,e.Epsilon=917,e.Epsilontonos=904,e.Ercyrillic=1056,e.Ereversed=398,e.Ereversedcyrillic=1069,e.Escyrillic=1057,e.Esdescendercyrillic=1194,e.Esh=425
e.Esmall=63333,e.Eta=919,e.Etarmenian=1336,e.Etatonos=905,e.Eth=208,e.Ethsmall=63472,e.Etilde=7868,e.Etildebelow=7706,e.Euro=8364,e.Ezh=439,e.Ezhcaron=494,e.Ezhreversed=440,e.F=70,e.Fcircle=9403,e.Fdotaccent=7710,e.Feharmenian=1366,e.Feicoptic=996,e.Fhook=401,e.Fitacyrillic=1138,e.Fiveroman=8548,e.Fmonospace=65318,e.Fourroman=8547,e.Fsmall=63334,e.G=71,e.GBsquare=13191,e.Gacute=500,e.Gamma=915,e.Gammaafrican=404,e.Gangiacoptic=1002,e.Gbreve=286
e.Gcaron=486,e.Gcedilla=290,e.Gcircle=9404,e.Gcircumflex=284,e.Gcommaaccent=290,e.Gdot=288,e.Gdotaccent=288,e.Gecyrillic=1043,e.Ghadarmenian=1346,e.Ghemiddlehookcyrillic=1172,e.Ghestrokecyrillic=1170,e.Gheupturncyrillic=1168,e.Ghook=403,e.Gimarmenian=1331,e.Gjecyrillic=1027,e.Gmacron=7712,e.Gmonospace=65319,e.Grave=63182,e.Gravesmall=63328,e.Gsmall=63335,e.Gsmallhook=667,e.Gstroke=484,e.H=72,e.H18533=9679,e.H18543=9642,e.H18551=9643,e.H22073=9633,e.HPsquare=13259,e.Haabkhasiancyrillic=1192,e.Hadescendercyrillic=1202
e.Hardsigncyrillic=1066,e.Hbar=294,e.Hbrevebelow=7722,e.Hcedilla=7720,e.Hcircle=9405,e.Hcircumflex=292,e.Hdieresis=7718,e.Hdotaccent=7714,e.Hdotbelow=7716,e.Hmonospace=65320,e.Hoarmenian=1344,e.Horicoptic=1e3,e.Hsmall=63336,e.Hungarumlaut=63183,e.Hungarumlautsmall=63224,e.Hzsquare=13200,e.I=73,e.IAcyrillic=1071,e.IJ=306,e.IUcyrillic=1070,e.Iacute=205,e.Iacutesmall=63469,e.Ibreve=300,e.Icaron=463,e.Icircle=9406,e.Icircumflex=206,e.Icircumflexsmall=63470,e.Icyrillic=1030,e.Idblgrave=520,e.Idieresis=207
e.Idieresisacute=7726,e.Idieresiscyrillic=1252,e.Idieresissmall=63471,e.Idot=304,e.Idotaccent=304,e.Idotbelow=7882,e.Iebrevecyrillic=1238,e.Iecyrillic=1045,e.Ifraktur=8465,e.Igrave=204,e.Igravesmall=63468,e.Ihookabove=7880,e.Iicyrillic=1048,e.Iinvertedbreve=522,e.Iishortcyrillic=1049,e.Imacron=298,e.Imacroncyrillic=1250,e.Imonospace=65321,e.Iniarmenian=1339,e.Iocyrillic=1025,e.Iogonek=302,e.Iota=921,e.Iotaafrican=406,e.Iotadieresis=938,e.Iotatonos=906,e.Ismall=63337,e.Istroke=407,e.Itilde=296,e.Itildebelow=7724,e.Izhitsacyrillic=1140
e.Izhitsadblgravecyrillic=1142,e.J=74,e.Jaarmenian=1345,e.Jcircle=9407,e.Jcircumflex=308,e.Jecyrillic=1032,e.Jheharmenian=1355,e.Jmonospace=65322,e.Jsmall=63338,e.K=75,e.KBsquare=13189,e.KKsquare=13261,e.Kabashkircyrillic=1184,e.Kacute=7728,e.Kacyrillic=1050,e.Kadescendercyrillic=1178,e.Kahookcyrillic=1219,e.Kappa=922,e.Kastrokecyrillic=1182,e.Kaverticalstrokecyrillic=1180,e.Kcaron=488,e.Kcedilla=310,e.Kcircle=9408,e.Kcommaaccent=310,e.Kdotbelow=7730,e.Keharmenian=1364,e.Kenarmenian=1343,e.Khacyrillic=1061,e.Kheicoptic=998,e.Khook=408
e.Kjecyrillic=1036,e.Klinebelow=7732,e.Kmonospace=65323,e.Koppacyrillic=1152,e.Koppagreek=990,e.Ksicyrillic=1134,e.Ksmall=63339,e.L=76,e.LJ=455,e.LL=63167,e.Lacute=313,e.Lambda=923,e.Lcaron=317,e.Lcedilla=315,e.Lcircle=9409,e.Lcircumflexbelow=7740,e.Lcommaaccent=315,e.Ldot=319,e.Ldotaccent=319,e.Ldotbelow=7734,e.Ldotbelowmacron=7736,e.Liwnarmenian=1340,e.Lj=456,e.Ljecyrillic=1033,e.Llinebelow=7738,e.Lmonospace=65324,e.Lslash=321,e.Lslashsmall=63225,e.Lsmall=63340,e.M=77
e.MBsquare=13190,e.Macron=63184,e.Macronsmall=63407,e.Macute=7742,e.Mcircle=9410,e.Mdotaccent=7744,e.Mdotbelow=7746,e.Menarmenian=1348,e.Mmonospace=65325,e.Msmall=63341,e.Mturned=412,e.Mu=924,e.N=78,e.NJ=458,e.Nacute=323,e.Ncaron=327,e.Ncedilla=325,e.Ncircle=9411,e.Ncircumflexbelow=7754,e.Ncommaaccent=325,e.Ndotaccent=7748,e.Ndotbelow=7750,e.Nhookleft=413,e.Nineroman=8552,e.Nj=459,e.Njecyrillic=1034,e.Nlinebelow=7752,e.Nmonospace=65326,e.Nowarmenian=1350,e.Nsmall=63342
e.Ntilde=209,e.Ntildesmall=63473,e.Nu=925,e.O=79,e.OE=338,e.OEsmall=63226,e.Oacute=211,e.Oacutesmall=63475,e.Obarredcyrillic=1256,e.Obarreddieresiscyrillic=1258,e.Obreve=334,e.Ocaron=465,e.Ocenteredtilde=415,e.Ocircle=9412,e.Ocircumflex=212,e.Ocircumflexacute=7888,e.Ocircumflexdotbelow=7896,e.Ocircumflexgrave=7890,e.Ocircumflexhookabove=7892,e.Ocircumflexsmall=63476,e.Ocircumflextilde=7894,e.Ocyrillic=1054,e.Odblacute=336,e.Odblgrave=524,e.Odieresis=214,e.Odieresiscyrillic=1254,e.Odieresissmall=63478,e.Odotbelow=7884,e.Ogoneksmall=63227,e.Ograve=210
e.Ogravesmall=63474,e.Oharmenian=1365,e.Ohm=8486,e.Ohookabove=7886,e.Ohorn=416,e.Ohornacute=7898,e.Ohorndotbelow=7906,e.Ohorngrave=7900,e.Ohornhookabove=7902,e.Ohorntilde=7904,e.Ohungarumlaut=336,e.Oi=418,e.Oinvertedbreve=526,e.Omacron=332,e.Omacronacute=7762,e.Omacrongrave=7760,e.Omega=8486,e.Omegacyrillic=1120,e.Omegagreek=937,e.Omegaroundcyrillic=1146,e.Omegatitlocyrillic=1148,e.Omegatonos=911,e.Omicron=927,e.Omicrontonos=908,e.Omonospace=65327,e.Oneroman=8544,e.Oogonek=490,e.Oogonekmacron=492,e.Oopen=390,e.Oslash=216
e.Oslashacute=510,e.Oslashsmall=63480,e.Osmall=63343,e.Ostrokeacute=510,e.Otcyrillic=1150,e.Otilde=213,e.Otildeacute=7756,e.Otildedieresis=7758,e.Otildesmall=63477,e.P=80,e.Pacute=7764,e.Pcircle=9413,e.Pdotaccent=7766,e.Pecyrillic=1055,e.Peharmenian=1354,e.Pemiddlehookcyrillic=1190,e.Phi=934,e.Phook=420,e.Pi=928,e.Piwrarmenian=1363,e.Pmonospace=65328,e.Psi=936,e.Psicyrillic=1136,e.Psmall=63344,e.Q=81,e.Qcircle=9414,e.Qmonospace=65329,e.Qsmall=63345,e.R=82,e.Raarmenian=1356
e.Racute=340,e.Rcaron=344,e.Rcedilla=342,e.Rcircle=9415,e.Rcommaaccent=342,e.Rdblgrave=528,e.Rdotaccent=7768,e.Rdotbelow=7770,e.Rdotbelowmacron=7772,e.Reharmenian=1360,e.Rfraktur=8476,e.Rho=929,e.Ringsmall=63228,e.Rinvertedbreve=530,e.Rlinebelow=7774,e.Rmonospace=65330,e.Rsmall=63346,e.Rsmallinverted=641,e.Rsmallinvertedsuperior=694,e.S=83,e.SF010000=9484,e.SF020000=9492,e.SF030000=9488,e.SF040000=9496,e.SF050000=9532,e.SF060000=9516,e.SF070000=9524,e.SF080000=9500,e.SF090000=9508,e.SF100000=9472
e.SF110000=9474,e.SF190000=9569,e.SF200000=9570,e.SF210000=9558,e.SF220000=9557,e.SF230000=9571,e.SF240000=9553,e.SF250000=9559,e.SF260000=9565,e.SF270000=9564,e.SF280000=9563,e.SF360000=9566,e.SF370000=9567,e.SF380000=9562,e.SF390000=9556,e.SF400000=9577,e.SF410000=9574,e.SF420000=9568,e.SF430000=9552,e.SF440000=9580,e.SF450000=9575,e.SF460000=9576,e.SF470000=9572,e.SF480000=9573,e.SF490000=9561,e.SF500000=9560,e.SF510000=9554,e.SF520000=9555,e.SF530000=9579,e.SF540000=9578
e.Sacute=346,e.Sacutedotaccent=7780,e.Sampigreek=992,e.Scaron=352,e.Scarondotaccent=7782,e.Scaronsmall=63229,e.Scedilla=350,e.Schwa=399,e.Schwacyrillic=1240,e.Schwadieresiscyrillic=1242,e.Scircle=9416,e.Scircumflex=348,e.Scommaaccent=536,e.Sdotaccent=7776,e.Sdotbelow=7778,e.Sdotbelowdotaccent=7784,e.Seharmenian=1357,e.Sevenroman=8550,e.Shaarmenian=1351,e.Shacyrillic=1064,e.Shchacyrillic=1065,e.Sheicoptic=994,e.Shhacyrillic=1210,e.Shimacoptic=1004,e.Sigma=931,e.Sixroman=8549,e.Smonospace=65331,e.Softsigncyrillic=1068,e.Ssmall=63347,e.Stigmagreek=986
e.T=84,e.Tau=932,e.Tbar=358,e.Tcaron=356,e.Tcedilla=354,e.Tcircle=9417,e.Tcircumflexbelow=7792,e.Tcommaaccent=354,e.Tdotaccent=7786,e.Tdotbelow=7788,e.Tecyrillic=1058,e.Tedescendercyrillic=1196,e.Tenroman=8553,e.Tetsecyrillic=1204,e.Theta=920,e.Thook=428,e.Thorn=222,e.Thornsmall=63486,e.Threeroman=8546,e.Tildesmall=63230,e.Tiwnarmenian=1359,e.Tlinebelow=7790,e.Tmonospace=65332,e.Toarmenian=1337,e.Tonefive=444,e.Tonesix=388,e.Tonetwo=423,e.Tretroflexhook=430,e.Tsecyrillic=1062,e.Tshecyrillic=1035
e.Tsmall=63348,e.Twelveroman=8555,e.Tworoman=8545,e.U=85,e.Uacute=218,e.Uacutesmall=63482,e.Ubreve=364,e.Ucaron=467,e.Ucircle=9418,e.Ucircumflex=219,e.Ucircumflexbelow=7798,e.Ucircumflexsmall=63483,e.Ucyrillic=1059,e.Udblacute=368,e.Udblgrave=532,e.Udieresis=220,e.Udieresisacute=471,e.Udieresisbelow=7794,e.Udieresiscaron=473,e.Udieresiscyrillic=1264,e.Udieresisgrave=475,e.Udieresismacron=469,e.Udieresissmall=63484,e.Udotbelow=7908,e.Ugrave=217,e.Ugravesmall=63481,e.Uhookabove=7910,e.Uhorn=431,e.Uhornacute=7912,e.Uhorndotbelow=7920
e.Uhorngrave=7914,e.Uhornhookabove=7916,e.Uhorntilde=7918,e.Uhungarumlaut=368,e.Uhungarumlautcyrillic=1266,e.Uinvertedbreve=534,e.Ukcyrillic=1144,e.Umacron=362,e.Umacroncyrillic=1262,e.Umacrondieresis=7802,e.Umonospace=65333,e.Uogonek=370,e.Upsilon=933,e.Upsilon1=978,e.Upsilonacutehooksymbolgreek=979,e.Upsilonafrican=433,e.Upsilondieresis=939,e.Upsilondieresishooksymbolgreek=980,e.Upsilonhooksymbol=978,e.Upsilontonos=910,e.Uring=366,e.Ushortcyrillic=1038,e.Usmall=63349,e.Ustraightcyrillic=1198,e.Ustraightstrokecyrillic=1200,e.Utilde=360,e.Utildeacute=7800,e.Utildebelow=7796,e.V=86,e.Vcircle=9419
e.Vdotbelow=7806,e.Vecyrillic=1042,e.Vewarmenian=1358,e.Vhook=434,e.Vmonospace=65334,e.Voarmenian=1352,e.Vsmall=63350,e.Vtilde=7804,e.W=87,e.Wacute=7810,e.Wcircle=9420,e.Wcircumflex=372,e.Wdieresis=7812,e.Wdotaccent=7814,e.Wdotbelow=7816,e.Wgrave=7808,e.Wmonospace=65335,e.Wsmall=63351,e.X=88,e.Xcircle=9421,e.Xdieresis=7820,e.Xdotaccent=7818,e.Xeharmenian=1341,e.Xi=926,e.Xmonospace=65336,e.Xsmall=63352,e.Y=89,e.Yacute=221,e.Yacutesmall=63485,e.Yatcyrillic=1122
e.Ycircle=9422,e.Ycircumflex=374,e.Ydieresis=376,e.Ydieresissmall=63487,e.Ydotaccent=7822,e.Ydotbelow=7924,e.Yericyrillic=1067,e.Yerudieresiscyrillic=1272,e.Ygrave=7922,e.Yhook=435,e.Yhookabove=7926,e.Yiarmenian=1349,e.Yicyrillic=1031,e.Yiwnarmenian=1362,e.Ymonospace=65337,e.Ysmall=63353,e.Ytilde=7928,e.Yusbigcyrillic=1130,e.Yusbigiotifiedcyrillic=1132,e.Yuslittlecyrillic=1126,e.Yuslittleiotifiedcyrillic=1128,e.Z=90,e.Zaarmenian=1334,e.Zacute=377,e.Zcaron=381,e.Zcaronsmall=63231,e.Zcircle=9423,e.Zcircumflex=7824,e.Zdot=379,e.Zdotaccent=379
e.Zdotbelow=7826,e.Zecyrillic=1047,e.Zedescendercyrillic=1176,e.Zedieresiscyrillic=1246,e.Zeta=918,e.Zhearmenian=1338,e.Zhebrevecyrillic=1217,e.Zhecyrillic=1046,e.Zhedescendercyrillic=1174,e.Zhedieresiscyrillic=1244,e.Zlinebelow=7828,e.Zmonospace=65338,e.Zsmall=63354,e.Zstroke=437,e.a=97,e.aabengali=2438,e.aacute=225,e.aadeva=2310,e.aagujarati=2694,e.aagurmukhi=2566,e.aamatragurmukhi=2622,e.aarusquare=13059,e.aavowelsignbengali=2494,e.aavowelsigndeva=2366,e.aavowelsigngujarati=2750,e.abbreviationmarkarmenian=1375,e.abbreviationsigndeva=2416,e.abengali=2437,e.abopomofo=12570,e.abreve=259
e.abreveacute=7855,e.abrevecyrillic=1233,e.abrevedotbelow=7863,e.abrevegrave=7857,e.abrevehookabove=7859,e.abrevetilde=7861,e.acaron=462,e.acircle=9424,e.acircumflex=226,e.acircumflexacute=7845,e.acircumflexdotbelow=7853,e.acircumflexgrave=7847,e.acircumflexhookabove=7849,e.acircumflextilde=7851,e.acute=180,e.acutebelowcmb=791,e.acutecmb=769,e.acutecomb=769,e.acutedeva=2388,e.acutelowmod=719,e.acutetonecmb=833,e.acyrillic=1072,e.adblgrave=513,e.addakgurmukhi=2673,e.adeva=2309,e.adieresis=228,e.adieresiscyrillic=1235,e.adieresismacron=479,e.adotbelow=7841,e.adotmacron=481
e.ae=230,e.aeacute=509,e.aekorean=12624,e.aemacron=483,e.afii00208=8213,e.afii08941=8356,e.afii10017=1040,e.afii10018=1041,e.afii10019=1042,e.afii10020=1043,e.afii10021=1044,e.afii10022=1045,e.afii10023=1025,e.afii10024=1046,e.afii10025=1047,e.afii10026=1048,e.afii10027=1049,e.afii10028=1050,e.afii10029=1051,e.afii10030=1052,e.afii10031=1053,e.afii10032=1054,e.afii10033=1055,e.afii10034=1056,e.afii10035=1057,e.afii10036=1058,e.afii10037=1059,e.afii10038=1060,e.afii10039=1061,e.afii10040=1062
e.afii10041=1063,e.afii10042=1064,e.afii10043=1065,e.afii10044=1066,e.afii10045=1067,e.afii10046=1068,e.afii10047=1069,e.afii10048=1070,e.afii10049=1071,e.afii10050=1168,e.afii10051=1026,e.afii10052=1027,e.afii10053=1028,e.afii10054=1029,e.afii10055=1030,e.afii10056=1031,e.afii10057=1032,e.afii10058=1033,e.afii10059=1034,e.afii10060=1035,e.afii10061=1036,e.afii10062=1038,e.afii10063=63172,e.afii10064=63173,e.afii10065=1072,e.afii10066=1073,e.afii10067=1074,e.afii10068=1075,e.afii10069=1076,e.afii10070=1077
e.afii10071=1105,e.afii10072=1078,e.afii10073=1079,e.afii10074=1080,e.afii10075=1081,e.afii10076=1082,e.afii10077=1083,e.afii10078=1084,e.afii10079=1085,e.afii10080=1086,e.afii10081=1087,e.afii10082=1088,e.afii10083=1089,e.afii10084=1090,e.afii10085=1091,e.afii10086=1092,e.afii10087=1093,e.afii10088=1094,e.afii10089=1095,e.afii10090=1096,e.afii10091=1097,e.afii10092=1098,e.afii10093=1099,e.afii10094=1100,e.afii10095=1101,e.afii10096=1102,e.afii10097=1103,e.afii10098=1169,e.afii10099=1106,e.afii10100=1107
e.afii10101=1108,e.afii10102=1109,e.afii10103=1110,e.afii10104=1111,e.afii10105=1112,e.afii10106=1113,e.afii10107=1114,e.afii10108=1115,e.afii10109=1116,e.afii10110=1118,e.afii10145=1039,e.afii10146=1122,e.afii10147=1138,e.afii10148=1140,e.afii10192=63174,e.afii10193=1119,e.afii10194=1123,e.afii10195=1139,e.afii10196=1141,e.afii10831=63175,e.afii10832=63176,e.afii10846=1241,e.afii299=8206,e.afii300=8207,e.afii301=8205,e.afii57381=1642,e.afii57388=1548,e.afii57392=1632,e.afii57393=1633,e.afii57394=1634
e.afii57395=1635,e.afii57396=1636,e.afii57397=1637,e.afii57398=1638,e.afii57399=1639,e.afii57400=1640,e.afii57401=1641,e.afii57403=1563,e.afii57407=1567,e.afii57409=1569,e.afii57410=1570,e.afii57411=1571,e.afii57412=1572,e.afii57413=1573,e.afii57414=1574,e.afii57415=1575,e.afii57416=1576,e.afii57417=1577,e.afii57418=1578,e.afii57419=1579,e.afii57420=1580,e.afii57421=1581,e.afii57422=1582,e.afii57423=1583,e.afii57424=1584,e.afii57425=1585,e.afii57426=1586,e.afii57427=1587,e.afii57428=1588,e.afii57429=1589
e.afii57430=1590,e.afii57431=1591,e.afii57432=1592,e.afii57433=1593,e.afii57434=1594,e.afii57440=1600,e.afii57441=1601,e.afii57442=1602,e.afii57443=1603,e.afii57444=1604,e.afii57445=1605,e.afii57446=1606,e.afii57448=1608,e.afii57449=1609,e.afii57450=1610,e.afii57451=1611,e.afii57452=1612,e.afii57453=1613,e.afii57454=1614,e.afii57455=1615,e.afii57456=1616,e.afii57457=1617,e.afii57458=1618,e.afii57470=1607,e.afii57505=1700,e.afii57506=1662,e.afii57507=1670,e.afii57508=1688,e.afii57509=1711,e.afii57511=1657
e.afii57512=1672,e.afii57513=1681,e.afii57514=1722,e.afii57519=1746,e.afii57534=1749,e.afii57636=8362,e.afii57645=1470,e.afii57658=1475,e.afii57664=1488,e.afii57665=1489,e.afii57666=1490,e.afii57667=1491,e.afii57668=1492,e.afii57669=1493,e.afii57670=1494,e.afii57671=1495,e.afii57672=1496,e.afii57673=1497,e.afii57674=1498,e.afii57675=1499,e.afii57676=1500,e.afii57677=1501,e.afii57678=1502,e.afii57679=1503,e.afii57680=1504,e.afii57681=1505,e.afii57682=1506,e.afii57683=1507,e.afii57684=1508,e.afii57685=1509
e.afii57686=1510,e.afii57687=1511,e.afii57688=1512,e.afii57689=1513,e.afii57690=1514,e.afii57694=64298,e.afii57695=64299,e.afii57700=64331,e.afii57705=64287,e.afii57716=1520,e.afii57717=1521,e.afii57718=1522,e.afii57723=64309,e.afii57793=1460,e.afii57794=1461,e.afii57795=1462,e.afii57796=1467,e.afii57797=1464,e.afii57798=1463,e.afii57799=1456,e.afii57800=1458,e.afii57801=1457,e.afii57802=1459,e.afii57803=1474,e.afii57804=1473,e.afii57806=1465,e.afii57807=1468,e.afii57839=1469,e.afii57841=1471,e.afii57842=1472
e.afii57929=700,e.afii61248=8453,e.afii61289=8467,e.afii61352=8470,e.afii61573=8236,e.afii61574=8237,e.afii61575=8238,e.afii61664=8204,e.afii63167=1645,e.afii64937=701,e.agrave=224,e.agujarati=2693,e.agurmukhi=2565,e.ahiragana=12354,e.ahookabove=7843,e.aibengali=2448,e.aibopomofo=12574,e.aideva=2320,e.aiecyrillic=1237,e.aigujarati=2704,e.aigurmukhi=2576,e.aimatragurmukhi=2632,e.ainarabic=1593,e.ainfinalarabic=65226,e.aininitialarabic=65227,e.ainmedialarabic=65228,e.ainvertedbreve=515,e.aivowelsignbengali=2504,e.aivowelsigndeva=2376,e.aivowelsigngujarati=2760
e.akatakana=12450,e.akatakanahalfwidth=65393,e.akorean=12623,e.alef=1488,e.alefarabic=1575,e.alefdageshhebrew=64304,e.aleffinalarabic=65166,e.alefhamzaabovearabic=1571,e.alefhamzaabovefinalarabic=65156,e.alefhamzabelowarabic=1573,e.alefhamzabelowfinalarabic=65160,e.alefhebrew=1488,e.aleflamedhebrew=64335,e.alefmaddaabovearabic=1570,e.alefmaddaabovefinalarabic=65154,e.alefmaksuraarabic=1609,e.alefmaksurafinalarabic=65264,e.alefmaksurainitialarabic=65267,e.alefmaksuramedialarabic=65268,e.alefpatahhebrew=64302,e.alefqamatshebrew=64303,e.aleph=8501,e.allequal=8780,e.alpha=945,e.alphatonos=940,e.amacron=257,e.amonospace=65345,e.ampersand=38,e.ampersandmonospace=65286,e.ampersandsmall=63270
e.amsquare=13250,e.anbopomofo=12578,e.angbopomofo=12580,e.angbracketleft=12296,e.angbracketright=12297,e.angkhankhuthai=3674,e.angle=8736,e.anglebracketleft=12296,e.anglebracketleftvertical=65087,e.anglebracketright=12297,e.anglebracketrightvertical=65088,e.angleleft=9001,e.angleright=9002,e.angstrom=8491,e.anoteleia=903,e.anudattadeva=2386,e.anusvarabengali=2434,e.anusvaradeva=2306,e.anusvaragujarati=2690,e.aogonek=261,e.apaatosquare=13056,e.aparen=9372,e.apostrophearmenian=1370,e.apostrophemod=700,e.apple=63743,e.approaches=8784,e.approxequal=8776,e.approxequalorimage=8786,e.approximatelyequal=8773,e.araeaekorean=12686
e.araeakorean=12685,e.arc=8978,e.arighthalfring=7834,e.aring=229,e.aringacute=507,e.aringbelow=7681,e.arrowboth=8596,e.arrowdashdown=8675,e.arrowdashleft=8672,e.arrowdashright=8674,e.arrowdashup=8673,e.arrowdblboth=8660,e.arrowdbldown=8659,e.arrowdblleft=8656,e.arrowdblright=8658,e.arrowdblup=8657,e.arrowdown=8595,e.arrowdownleft=8601,e.arrowdownright=8600,e.arrowdownwhite=8681,e.arrowheaddownmod=709,e.arrowheadleftmod=706,e.arrowheadrightmod=707,e.arrowheadupmod=708,e.arrowhorizex=63719,e.arrowleft=8592,e.arrowleftdbl=8656,e.arrowleftdblstroke=8653,e.arrowleftoverright=8646,e.arrowleftwhite=8678
e.arrowright=8594,e.arrowrightdblstroke=8655,e.arrowrightheavy=10142,e.arrowrightoverleft=8644,e.arrowrightwhite=8680,e.arrowtableft=8676,e.arrowtabright=8677,e.arrowup=8593,e.arrowupdn=8597,e.arrowupdnbse=8616,e.arrowupdownbase=8616,e.arrowupleft=8598,e.arrowupleftofdown=8645,e.arrowupright=8599,e.arrowupwhite=8679,e.arrowvertex=63718,e.asciicircum=94,e.asciicircummonospace=65342,e.asciitilde=126,e.asciitildemonospace=65374,e.ascript=593,e.ascriptturned=594,e.asmallhiragana=12353,e.asmallkatakana=12449,e.asmallkatakanahalfwidth=65383,e.asterisk=42,e.asteriskaltonearabic=1645,e.asteriskarabic=1645,e.asteriskmath=8727,e.asteriskmonospace=65290
e.asterisksmall=65121,e.asterism=8258,e.asuperior=63209,e.asymptoticallyequal=8771,e.at=64,e.atilde=227,e.atmonospace=65312,e.atsmall=65131,e.aturned=592,e.aubengali=2452,e.aubopomofo=12576,e.audeva=2324,e.augujarati=2708,e.augurmukhi=2580,e.aulengthmarkbengali=2519,e.aumatragurmukhi=2636,e.auvowelsignbengali=2508,e.auvowelsigndeva=2380,e.auvowelsigngujarati=2764,e.avagrahadeva=2365,e.aybarmenian=1377,e.ayin=1506,e.ayinaltonehebrew=64288,e.ayinhebrew=1506,e.b=98,e.babengali=2476,e.backslash=92,e.backslashmonospace=65340,e.badeva=2348,e.bagujarati=2732
e.bagurmukhi=2604,e.bahiragana=12400,e.bahtthai=3647,e.bakatakana=12496,e.bar=124,e.barmonospace=65372,e.bbopomofo=12549,e.bcircle=9425,e.bdotaccent=7683,e.bdotbelow=7685,e.beamedsixteenthnotes=9836,e.because=8757,e.becyrillic=1073,e.beharabic=1576,e.behfinalarabic=65168,e.behinitialarabic=65169,e.behiragana=12409,e.behmedialarabic=65170,e.behmeeminitialarabic=64671,e.behmeemisolatedarabic=64520,e.behnoonfinalarabic=64621,e.bekatakana=12505,e.benarmenian=1378,e.bet=1489,e.beta=946,e.betasymbolgreek=976,e.betdagesh=64305,e.betdageshhebrew=64305,e.bethebrew=1489,e.betrafehebrew=64332
e.bhabengali=2477,e.bhadeva=2349,e.bhagujarati=2733,e.bhagurmukhi=2605,e.bhook=595,e.bihiragana=12403,e.bikatakana=12499,e.bilabialclick=664,e.bindigurmukhi=2562,e.birusquare=13105,e.blackcircle=9679,e.blackdiamond=9670,e.blackdownpointingtriangle=9660,e.blackleftpointingpointer=9668,e.blackleftpointingtriangle=9664,e.blacklenticularbracketleft=12304,e.blacklenticularbracketleftvertical=65083,e.blacklenticularbracketright=12305,e.blacklenticularbracketrightvertical=65084,e.blacklowerlefttriangle=9699,e.blacklowerrighttriangle=9698,e.blackrectangle=9644,e.blackrightpointingpointer=9658,e.blackrightpointingtriangle=9654,e.blacksmallsquare=9642,e.blacksmilingface=9787,e.blacksquare=9632,e.blackstar=9733,e.blackupperlefttriangle=9700,e.blackupperrighttriangle=9701
e.blackuppointingsmalltriangle=9652,e.blackuppointingtriangle=9650,e.blank=9251,e.blinebelow=7687,e.block=9608,e.bmonospace=65346,e.bobaimaithai=3610,e.bohiragana=12412,e.bokatakana=12508,e.bparen=9373,e.bqsquare=13251,e.braceex=63732,e.braceleft=123,e.braceleftbt=63731,e.braceleftmid=63730,e.braceleftmonospace=65371,e.braceleftsmall=65115,e.bracelefttp=63729,e.braceleftvertical=65079,e.braceright=125,e.bracerightbt=63742,e.bracerightmid=63741,e.bracerightmonospace=65373,e.bracerightsmall=65116,e.bracerighttp=63740,e.bracerightvertical=65080,e.bracketleft=91,e.bracketleftbt=63728,e.bracketleftex=63727,e.bracketleftmonospace=65339
e.bracketlefttp=63726,e.bracketright=93,e.bracketrightbt=63739,e.bracketrightex=63738,e.bracketrightmonospace=65341,e.bracketrighttp=63737,e.breve=728,e.brevebelowcmb=814,e.brevecmb=774,e.breveinvertedbelowcmb=815,e.breveinvertedcmb=785,e.breveinverteddoublecmb=865,e.bridgebelowcmb=810,e.bridgeinvertedbelowcmb=826,e.brokenbar=166,e.bstroke=384,e.bsuperior=63210,e.btopbar=387,e.buhiragana=12406,e.bukatakana=12502,e.bullet=8226,e.bulletinverse=9688,e.bulletoperator=8729,e.bullseye=9678,e.c=99,e.caarmenian=1390,e.cabengali=2458,e.cacute=263,e.cadeva=2330,e.cagujarati=2714
e.cagurmukhi=2586,e.calsquare=13192,e.candrabindubengali=2433,e.candrabinducmb=784,e.candrabindudeva=2305,e.candrabindugujarati=2689,e.capslock=8682,e.careof=8453,e.caron=711,e.caronbelowcmb=812,e.caroncmb=780,e.carriagereturn=8629,e.cbopomofo=12568,e.ccaron=269,e.ccedilla=231,e.ccedillaacute=7689,e.ccircle=9426,e.ccircumflex=265,e.ccurl=597,e.cdot=267,e.cdotaccent=267,e.cdsquare=13253,e.cedilla=184,e.cedillacmb=807,e.cent=162,e.centigrade=8451,e.centinferior=63199,e.centmonospace=65504,e.centoldstyle=63394,e.centsuperior=63200
e.chaarmenian=1401,e.chabengali=2459,e.chadeva=2331,e.chagujarati=2715,e.chagurmukhi=2587,e.chbopomofo=12564,e.cheabkhasiancyrillic=1213,e.checkmark=10003,e.checyrillic=1095,e.chedescenderabkhasiancyrillic=1215,e.chedescendercyrillic=1207,e.chedieresiscyrillic=1269,e.cheharmenian=1395,e.chekhakassiancyrillic=1228,e.cheverticalstrokecyrillic=1209,e.chi=967,e.chieuchacirclekorean=12919,e.chieuchaparenkorean=12823,e.chieuchcirclekorean=12905,e.chieuchkorean=12618,e.chieuchparenkorean=12809,e.chochangthai=3594,e.chochanthai=3592,e.chochingthai=3593,e.chochoethai=3596,e.chook=392,e.cieucacirclekorean=12918,e.cieucaparenkorean=12822,e.cieuccirclekorean=12904,e.cieuckorean=12616
e.cieucparenkorean=12808,e.cieucuparenkorean=12828,e.circle=9675,e.circlecopyrt=169,e.circlemultiply=8855,e.circleot=8857,e.circleplus=8853,e.circlepostalmark=12342,e.circlewithlefthalfblack=9680,e.circlewithrighthalfblack=9681,e.circumflex=710,e.circumflexbelowcmb=813,e.circumflexcmb=770,e.clear=8999,e.clickalveolar=450,e.clickdental=448,e.clicklateral=449,e.clickretroflex=451,e.club=9827,e.clubsuitblack=9827,e.clubsuitwhite=9831,e.cmcubedsquare=13220,e.cmonospace=65347,e.cmsquaredsquare=13216,e.coarmenian=1409,e.colon=58,e.colonmonetary=8353,e.colonmonospace=65306,e.colonsign=8353,e.colonsmall=65109
e.colontriangularhalfmod=721,e.colontriangularmod=720,e.comma=44,e.commaabovecmb=787,e.commaaboverightcmb=789,e.commaaccent=63171,e.commaarabic=1548,e.commaarmenian=1373,e.commainferior=63201,e.commamonospace=65292,e.commareversedabovecmb=788,e.commareversedmod=701,e.commasmall=65104,e.commasuperior=63202,e.commaturnedabovecmb=786,e.commaturnedmod=699,e.compass=9788,e.congruent=8773,e.contourintegral=8750,e.control=8963,e.controlACK=6,e.controlBEL=7,e.controlBS=8,e.controlCAN=24,e.controlCR=13,e.controlDC1=17,e.controlDC2=18,e.controlDC3=19,e.controlDC4=20,e.controlDEL=127
e.controlDLE=16,e.controlEM=25,e.controlENQ=5,e.controlEOT=4,e.controlESC=27,e.controlETB=23,e.controlETX=3,e.controlFF=12,e.controlFS=28,e.controlGS=29,e.controlHT=9,e.controlLF=10,e.controlNAK=21,e.controlNULL=0,e.controlRS=30,e.controlSI=15,e.controlSO=14,e.controlSOT=2,e.controlSTX=1,e.controlSUB=26,e.controlSYN=22,e.controlUS=31,e.controlVT=11,e.copyright=169,e.copyrightsans=63721,e.copyrightserif=63193,e.cornerbracketleft=12300,e.cornerbracketlefthalfwidth=65378,e.cornerbracketleftvertical=65089,e.cornerbracketright=12301
e.cornerbracketrighthalfwidth=65379,e.cornerbracketrightvertical=65090,e.corporationsquare=13183,e.cosquare=13255,e.coverkgsquare=13254,e.cparen=9374,e.cruzeiro=8354,e.cstretched=663,e.curlyand=8911,e.curlyor=8910,e.currency=164,e.cyrBreve=63185,e.cyrFlex=63186,e.cyrbreve=63188,e.cyrflex=63189,e.d=100,e.daarmenian=1380,e.dabengali=2470,e.dadarabic=1590,e.dadeva=2342,e.dadfinalarabic=65214,e.dadinitialarabic=65215,e.dadmedialarabic=65216,e.dagesh=1468,e.dageshhebrew=1468,e.dagger=8224,e.daggerdbl=8225,e.dagujarati=2726,e.dagurmukhi=2598,e.dahiragana=12384
e.dakatakana=12480,e.dalarabic=1583,e.dalet=1491,e.daletdagesh=64307,e.daletdageshhebrew=64307,e.dalethebrew=1491,e.dalfinalarabic=65194,e.dammaarabic=1615,e.dammalowarabic=1615,e.dammatanaltonearabic=1612,e.dammatanarabic=1612,e.danda=2404,e.dargahebrew=1447,e.dargalefthebrew=1447,e.dasiapneumatacyrilliccmb=1157,e.dblGrave=63187,e.dblanglebracketleft=12298,e.dblanglebracketleftvertical=65085,e.dblanglebracketright=12299,e.dblanglebracketrightvertical=65086,e.dblarchinvertedbelowcmb=811,e.dblarrowleft=8660,e.dblarrowright=8658,e.dbldanda=2405,e.dblgrave=63190,e.dblgravecmb=783,e.dblintegral=8748,e.dbllowline=8215,e.dbllowlinecmb=819,e.dbloverlinecmb=831
e.dblprimemod=698,e.dblverticalbar=8214,e.dblverticallineabovecmb=782,e.dbopomofo=12553,e.dbsquare=13256,e.dcaron=271,e.dcedilla=7697,e.dcircle=9427,e.dcircumflexbelow=7699,e.dcroat=273,e.ddabengali=2465,e.ddadeva=2337,e.ddagujarati=2721,e.ddagurmukhi=2593,e.ddalarabic=1672,e.ddalfinalarabic=64393,e.dddhadeva=2396,e.ddhabengali=2466,e.ddhadeva=2338,e.ddhagujarati=2722,e.ddhagurmukhi=2594,e.ddotaccent=7691,e.ddotbelow=7693,e.decimalseparatorarabic=1643,e.decimalseparatorpersian=1643,e.decyrillic=1076,e.degree=176,e.dehihebrew=1453,e.dehiragana=12391,e.deicoptic=1007
e.dekatakana=12487,e.deleteleft=9003,e.deleteright=8998,e.delta=948,e.deltaturned=397,e.denominatorminusonenumeratorbengali=2552,e.dezh=676,e.dhabengali=2471,e.dhadeva=2343,e.dhagujarati=2727,e.dhagurmukhi=2599,e.dhook=599,e.dialytikatonos=901,e.dialytikatonoscmb=836,e.diamond=9830,e.diamondsuitwhite=9826,e.dieresis=168,e.dieresisacute=63191,e.dieresisbelowcmb=804,e.dieresiscmb=776,e.dieresisgrave=63192,e.dieresistonos=901,e.dihiragana=12386,e.dikatakana=12482,e.dittomark=12291,e.divide=247,e.divides=8739,e.divisionslash=8725,e.djecyrillic=1106,e.dkshade=9619
e.dlinebelow=7695,e.dlsquare=13207,e.dmacron=273,e.dmonospace=65348,e.dnblock=9604,e.dochadathai=3598,e.dodekthai=3604,e.dohiragana=12393,e.dokatakana=12489,e.dollar=36,e.dollarinferior=63203,e.dollarmonospace=65284,e.dollaroldstyle=63268,e.dollarsmall=65129,e.dollarsuperior=63204,e.dong=8363,e.dorusquare=13094,e.dotaccent=729,e.dotaccentcmb=775,e.dotbelowcmb=803,e.dotbelowcomb=803,e.dotkatakana=12539,e.dotlessi=305,e.dotlessj=63166,e.dotlessjstrokehook=644,e.dotmath=8901,e.dottedcircle=9676,e.doubleyodpatah=64287,e.doubleyodpatahhebrew=64287,e.downtackbelowcmb=798
e.downtackmod=725,e.dparen=9375,e.dsuperior=63211,e.dtail=598,e.dtopbar=396,e.duhiragana=12389,e.dukatakana=12485,e.dz=499,e.dzaltone=675,e.dzcaron=454,e.dzcurl=677,e.dzeabkhasiancyrillic=1249,e.dzecyrillic=1109,e.dzhecyrillic=1119,e.e=101,e.eacute=233,e.earth=9793,e.ebengali=2447,e.ebopomofo=12572,e.ebreve=277,e.ecandradeva=2317,e.ecandragujarati=2701,e.ecandravowelsigndeva=2373,e.ecandravowelsigngujarati=2757,e.ecaron=283,e.ecedillabreve=7709,e.echarmenian=1381,e.echyiwnarmenian=1415,e.ecircle=9428,e.ecircumflex=234
e.ecircumflexacute=7871,e.ecircumflexbelow=7705,e.ecircumflexdotbelow=7879,e.ecircumflexgrave=7873,e.ecircumflexhookabove=7875,e.ecircumflextilde=7877,e.ecyrillic=1108,e.edblgrave=517,e.edeva=2319,e.edieresis=235,e.edot=279,e.edotaccent=279,e.edotbelow=7865,e.eegurmukhi=2575,e.eematragurmukhi=2631,e.efcyrillic=1092,e.egrave=232,e.egujarati=2703,e.eharmenian=1383,e.ehbopomofo=12573,e.ehiragana=12360,e.ehookabove=7867,e.eibopomofo=12575,e.eight=56,e.eightarabic=1640,e.eightbengali=2542,e.eightcircle=9319,e.eightcircleinversesansserif=10129,e.eightdeva=2414,e.eighteencircle=9329
e.eighteenparen=9349,e.eighteenperiod=9369,e.eightgujarati=2798,e.eightgurmukhi=2670,e.eighthackarabic=1640,e.eighthangzhou=12328,e.eighthnotebeamed=9835,e.eightideographicparen=12839,e.eightinferior=8328,e.eightmonospace=65304,e.eightoldstyle=63288,e.eightparen=9339,e.eightperiod=9359,e.eightpersian=1784,e.eightroman=8567,e.eightsuperior=8312,e.eightthai=3672,e.einvertedbreve=519,e.eiotifiedcyrillic=1125,e.ekatakana=12456,e.ekatakanahalfwidth=65396,e.ekonkargurmukhi=2676,e.ekorean=12628,e.elcyrillic=1083,e.element=8712,e.elevencircle=9322,e.elevenparen=9342,e.elevenperiod=9362,e.elevenroman=8570,e.ellipsis=8230
e.ellipsisvertical=8942,e.emacron=275,e.emacronacute=7703,e.emacrongrave=7701,e.emcyrillic=1084,e.emdash=8212,e.emdashvertical=65073,e.emonospace=65349,e.emphasismarkarmenian=1371,e.emptyset=8709,e.enbopomofo=12579,e.encyrillic=1085,e.endash=8211,e.endashvertical=65074,e.endescendercyrillic=1187,e.eng=331,e.engbopomofo=12581,e.enghecyrillic=1189,e.enhookcyrillic=1224,e.enspace=8194,e.eogonek=281,e.eokorean=12627,e.eopen=603,e.eopenclosed=666,e.eopenreversed=604,e.eopenreversedclosed=606,e.eopenreversedhook=605,e.eparen=9376,e.epsilon=949,e.epsilontonos=941
e.equal=61,e.equalmonospace=65309,e.equalsmall=65126,e.equalsuperior=8316,e.equivalence=8801,e.erbopomofo=12582,e.ercyrillic=1088,e.ereversed=600,e.ereversedcyrillic=1101,e.escyrillic=1089,e.esdescendercyrillic=1195,e.esh=643,e.eshcurl=646,e.eshortdeva=2318,e.eshortvowelsigndeva=2374,e.eshreversedloop=426,e.eshsquatreversed=645,e.esmallhiragana=12359,e.esmallkatakana=12455,e.esmallkatakanahalfwidth=65386,e.estimated=8494,e.esuperior=63212,e.eta=951,e.etarmenian=1384,e.etatonos=942,e.eth=240,e.etilde=7869,e.etildebelow=7707,e.etnahtafoukhhebrew=1425,e.etnahtafoukhlefthebrew=1425
e.etnahtahebrew=1425,e.etnahtalefthebrew=1425,e.eturned=477,e.eukorean=12641,e.euro=8364,e.evowelsignbengali=2503,e.evowelsigndeva=2375,e.evowelsigngujarati=2759,e.exclam=33,e.exclamarmenian=1372,e.exclamdbl=8252,e.exclamdown=161,e.exclamdownsmall=63393,e.exclammonospace=65281,e.exclamsmall=63265,e.existential=8707,e.ezh=658,e.ezhcaron=495,e.ezhcurl=659,e.ezhreversed=441,e.ezhtail=442,e.f=102,e.fadeva=2398,e.fagurmukhi=2654,e.fahrenheit=8457,e.fathaarabic=1614,e.fathalowarabic=1614,e.fathatanarabic=1611,e.fbopomofo=12552,e.fcircle=9429
e.fdotaccent=7711,e.feharabic=1601,e.feharmenian=1414,e.fehfinalarabic=65234,e.fehinitialarabic=65235,e.fehmedialarabic=65236,e.feicoptic=997,e.female=9792,e.ff=64256,e.f_f=64256,e.ffi=64259,e.ffl=64260,e.fi=64257,e.fifteencircle=9326,e.fifteenparen=9346,e.fifteenperiod=9366,e.figuredash=8210,e.filledbox=9632,e.filledrect=9644,e.finalkaf=1498,e.finalkafdagesh=64314,e.finalkafdageshhebrew=64314,e.finalkafhebrew=1498,e.finalmem=1501,e.finalmemhebrew=1501,e.finalnun=1503,e.finalnunhebrew=1503,e.finalpe=1507,e.finalpehebrew=1507,e.finaltsadi=1509
e.finaltsadihebrew=1509,e.firsttonechinese=713,e.fisheye=9673,e.fitacyrillic=1139,e.five=53,e.fivearabic=1637,e.fivebengali=2539,e.fivecircle=9316,e.fivecircleinversesansserif=10126,e.fivedeva=2411,e.fiveeighths=8541,e.fivegujarati=2795,e.fivegurmukhi=2667,e.fivehackarabic=1637,e.fivehangzhou=12325,e.fiveideographicparen=12836,e.fiveinferior=8325,e.fivemonospace=65301,e.fiveoldstyle=63285,e.fiveparen=9336,e.fiveperiod=9356,e.fivepersian=1781,e.fiveroman=8564,e.fivesuperior=8309,e.fivethai=3669,e.fl=64258,e.florin=402,e.fmonospace=65350,e.fmsquare=13209,e.fofanthai=3615
e.fofathai=3613,e.fongmanthai=3663,e.forall=8704,e.four=52,e.fourarabic=1636,e.fourbengali=2538,e.fourcircle=9315,e.fourcircleinversesansserif=10125,e.fourdeva=2410,e.fourgujarati=2794,e.fourgurmukhi=2666,e.fourhackarabic=1636,e.fourhangzhou=12324,e.fourideographicparen=12835,e.fourinferior=8324,e.fourmonospace=65300,e.fournumeratorbengali=2551,e.fouroldstyle=63284,e.fourparen=9335,e.fourperiod=9355,e.fourpersian=1780,e.fourroman=8563,e.foursuperior=8308,e.fourteencircle=9325,e.fourteenparen=9345,e.fourteenperiod=9365,e.fourthai=3668,e.fourthtonechinese=715,e.fparen=9377,e.fraction=8260
e.franc=8355,e.g=103,e.gabengali=2455,e.gacute=501,e.gadeva=2327,e.gafarabic=1711,e.gaffinalarabic=64403,e.gafinitialarabic=64404,e.gafmedialarabic=64405,e.gagujarati=2711,e.gagurmukhi=2583,e.gahiragana=12364,e.gakatakana=12460,e.gamma=947,e.gammalatinsmall=611,e.gammasuperior=736,e.gangiacoptic=1003,e.gbopomofo=12557,e.gbreve=287,e.gcaron=487,e.gcedilla=291,e.gcircle=9430,e.gcircumflex=285,e.gcommaaccent=291,e.gdot=289,e.gdotaccent=289,e.gecyrillic=1075,e.gehiragana=12370,e.gekatakana=12466,e.geometricallyequal=8785
e.gereshaccenthebrew=1436,e.gereshhebrew=1523,e.gereshmuqdamhebrew=1437,e.germandbls=223,e.gershayimaccenthebrew=1438,e.gershayimhebrew=1524,e.getamark=12307,e.ghabengali=2456,e.ghadarmenian=1394,e.ghadeva=2328,e.ghagujarati=2712,e.ghagurmukhi=2584,e.ghainarabic=1594,e.ghainfinalarabic=65230,e.ghaininitialarabic=65231,e.ghainmedialarabic=65232,e.ghemiddlehookcyrillic=1173,e.ghestrokecyrillic=1171,e.gheupturncyrillic=1169,e.ghhadeva=2394,e.ghhagurmukhi=2650,e.ghook=608,e.ghzsquare=13203,e.gihiragana=12366,e.gikatakana=12462,e.gimarmenian=1379,e.gimel=1490,e.gimeldagesh=64306,e.gimeldageshhebrew=64306,e.gimelhebrew=1490
e.gjecyrillic=1107,e.glottalinvertedstroke=446,e.glottalstop=660,e.glottalstopinverted=662,e.glottalstopmod=704,e.glottalstopreversed=661,e.glottalstopreversedmod=705,e.glottalstopreversedsuperior=740,e.glottalstopstroke=673,e.glottalstopstrokereversed=674,e.gmacron=7713,e.gmonospace=65351,e.gohiragana=12372,e.gokatakana=12468,e.gparen=9378,e.gpasquare=13228,e.gradient=8711,e.grave=96,e.gravebelowcmb=790,e.gravecmb=768,e.gravecomb=768,e.gravedeva=2387,e.gravelowmod=718,e.gravemonospace=65344,e.gravetonecmb=832,e.greater=62,e.greaterequal=8805,e.greaterequalorless=8923,e.greatermonospace=65310,e.greaterorequivalent=8819
e.greaterorless=8823,e.greateroverequal=8807,e.greatersmall=65125,e.gscript=609,e.gstroke=485,e.guhiragana=12368,e.guillemotleft=171,e.guillemotright=187,e.guilsinglleft=8249,e.guilsinglright=8250,e.gukatakana=12464,e.guramusquare=13080,e.gysquare=13257,e.h=104,e.haabkhasiancyrillic=1193,e.haaltonearabic=1729,e.habengali=2489,e.hadescendercyrillic=1203,e.hadeva=2361,e.hagujarati=2745,e.hagurmukhi=2617,e.haharabic=1581,e.hahfinalarabic=65186,e.hahinitialarabic=65187,e.hahiragana=12399,e.hahmedialarabic=65188,e.haitusquare=13098,e.hakatakana=12495,e.hakatakanahalfwidth=65418,e.halantgurmukhi=2637
e.hamzaarabic=1569,e.hamzalowarabic=1569,e.hangulfiller=12644,e.hardsigncyrillic=1098,e.harpoonleftbarbup=8636,e.harpoonrightbarbup=8640,e.hasquare=13258,e.hatafpatah=1458,e.hatafpatah16=1458,e.hatafpatah23=1458,e.hatafpatah2f=1458,e.hatafpatahhebrew=1458,e.hatafpatahnarrowhebrew=1458,e.hatafpatahquarterhebrew=1458,e.hatafpatahwidehebrew=1458,e.hatafqamats=1459,e.hatafqamats1b=1459,e.hatafqamats28=1459,e.hatafqamats34=1459,e.hatafqamatshebrew=1459,e.hatafqamatsnarrowhebrew=1459,e.hatafqamatsquarterhebrew=1459,e.hatafqamatswidehebrew=1459,e.hatafsegol=1457,e.hatafsegol17=1457,e.hatafsegol24=1457,e.hatafsegol30=1457,e.hatafsegolhebrew=1457,e.hatafsegolnarrowhebrew=1457,e.hatafsegolquarterhebrew=1457
e.hatafsegolwidehebrew=1457,e.hbar=295,e.hbopomofo=12559,e.hbrevebelow=7723,e.hcedilla=7721,e.hcircle=9431,e.hcircumflex=293,e.hdieresis=7719,e.hdotaccent=7715,e.hdotbelow=7717,e.he=1492,e.heart=9829,e.heartsuitblack=9829,e.heartsuitwhite=9825,e.hedagesh=64308,e.hedageshhebrew=64308,e.hehaltonearabic=1729,e.heharabic=1607,e.hehebrew=1492,e.hehfinalaltonearabic=64423,e.hehfinalalttwoarabic=65258,e.hehfinalarabic=65258,e.hehhamzaabovefinalarabic=64421,e.hehhamzaaboveisolatedarabic=64420,e.hehinitialaltonearabic=64424,e.hehinitialarabic=65259,e.hehiragana=12408,e.hehmedialaltonearabic=64425,e.hehmedialarabic=65260,e.heiseierasquare=13179
e.hekatakana=12504,e.hekatakanahalfwidth=65421,e.hekutaarusquare=13110,e.henghook=615,e.herutusquare=13113,e.het=1495,e.hethebrew=1495,e.hhook=614,e.hhooksuperior=689,e.hieuhacirclekorean=12923,e.hieuhaparenkorean=12827,e.hieuhcirclekorean=12909,e.hieuhkorean=12622,e.hieuhparenkorean=12813,e.hihiragana=12402,e.hikatakana=12498,e.hikatakanahalfwidth=65419,e.hiriq=1460,e.hiriq14=1460,e.hiriq21=1460,e.hiriq2d=1460,e.hiriqhebrew=1460,e.hiriqnarrowhebrew=1460,e.hiriqquarterhebrew=1460,e.hiriqwidehebrew=1460,e.hlinebelow=7830,e.hmonospace=65352,e.hoarmenian=1392,e.hohipthai=3627,e.hohiragana=12411
e.hokatakana=12507,e.hokatakanahalfwidth=65422,e.holam=1465,e.holam19=1465,e.holam26=1465,e.holam32=1465,e.holamhebrew=1465,e.holamnarrowhebrew=1465,e.holamquarterhebrew=1465,e.holamwidehebrew=1465,e.honokhukthai=3630,e.hookabovecomb=777,e.hookcmb=777,e.hookpalatalizedbelowcmb=801,e.hookretroflexbelowcmb=802,e.hoonsquare=13122,e.horicoptic=1001,e.horizontalbar=8213,e.horncmb=795,e.hotsprings=9832,e.house=8962,e.hparen=9379,e.hsuperior=688,e.hturned=613,e.huhiragana=12405,e.huiitosquare=13107,e.hukatakana=12501,e.hukatakanahalfwidth=65420,e.hungarumlaut=733,e.hungarumlautcmb=779
e.hv=405,e.hyphen=45,e.hypheninferior=63205,e.hyphenmonospace=65293,e.hyphensmall=65123,e.hyphensuperior=63206,e.hyphentwo=8208,e.i=105,e.iacute=237,e.iacyrillic=1103,e.ibengali=2439,e.ibopomofo=12583,e.ibreve=301,e.icaron=464,e.icircle=9432,e.icircumflex=238,e.icyrillic=1110,e.idblgrave=521,e.ideographearthcircle=12943,e.ideographfirecircle=12939,e.ideographicallianceparen=12863,e.ideographiccallparen=12858,e.ideographiccentrecircle=12965,e.ideographicclose=12294,e.ideographiccomma=12289,e.ideographiccommaleft=65380,e.ideographiccongratulationparen=12855,e.ideographiccorrectcircle=12963,e.ideographicearthparen=12847,e.ideographicenterpriseparen=12861
e.ideographicexcellentcircle=12957,e.ideographicfestivalparen=12864,e.ideographicfinancialcircle=12950,e.ideographicfinancialparen=12854,e.ideographicfireparen=12843,e.ideographichaveparen=12850,e.ideographichighcircle=12964,e.ideographiciterationmark=12293,e.ideographiclaborcircle=12952,e.ideographiclaborparen=12856,e.ideographicleftcircle=12967,e.ideographiclowcircle=12966,e.ideographicmedicinecircle=12969,e.ideographicmetalparen=12846,e.ideographicmoonparen=12842,e.ideographicnameparen=12852,e.ideographicperiod=12290,e.ideographicprintcircle=12958,e.ideographicreachparen=12867,e.ideographicrepresentparen=12857,e.ideographicresourceparen=12862,e.ideographicrightcircle=12968,e.ideographicsecretcircle=12953,e.ideographicselfparen=12866,e.ideographicsocietyparen=12851,e.ideographicspace=12288,e.ideographicspecialparen=12853,e.ideographicstockparen=12849,e.ideographicstudyparen=12859,e.ideographicsunparen=12848
e.ideographicsuperviseparen=12860,e.ideographicwaterparen=12844,e.ideographicwoodparen=12845,e.ideographiczero=12295,e.ideographmetalcircle=12942,e.ideographmooncircle=12938,e.ideographnamecircle=12948,e.ideographsuncircle=12944,e.ideographwatercircle=12940,e.ideographwoodcircle=12941,e.ideva=2311,e.idieresis=239,e.idieresisacute=7727,e.idieresiscyrillic=1253,e.idotbelow=7883,e.iebrevecyrillic=1239,e.iecyrillic=1077,e.ieungacirclekorean=12917,e.ieungaparenkorean=12821,e.ieungcirclekorean=12903,e.ieungkorean=12615,e.ieungparenkorean=12807,e.igrave=236,e.igujarati=2695,e.igurmukhi=2567,e.ihiragana=12356,e.ihookabove=7881,e.iibengali=2440,e.iicyrillic=1080,e.iideva=2312
e.iigujarati=2696,e.iigurmukhi=2568,e.iimatragurmukhi=2624,e.iinvertedbreve=523,e.iishortcyrillic=1081,e.iivowelsignbengali=2496,e.iivowelsigndeva=2368,e.iivowelsigngujarati=2752,e.ij=307,e.ikatakana=12452,e.ikatakanahalfwidth=65394,e.ikorean=12643,e.ilde=732,e.iluyhebrew=1452,e.imacron=299,e.imacroncyrillic=1251,e.imageorapproximatelyequal=8787,e.imatragurmukhi=2623,e.imonospace=65353,e.increment=8710,e.infinity=8734,e.iniarmenian=1387,e.integral=8747,e.integralbottom=8993,e.integralbt=8993,e.integralex=63733,e.integraltop=8992,e.integraltp=8992,e.intersection=8745,e.intisquare=13061
e.invbullet=9688,e.invcircle=9689,e.invsmileface=9787,e.iocyrillic=1105,e.iogonek=303,e.iota=953,e.iotadieresis=970,e.iotadieresistonos=912,e.iotalatin=617,e.iotatonos=943,e.iparen=9380,e.irigurmukhi=2674,e.ismallhiragana=12355,e.ismallkatakana=12451,e.ismallkatakanahalfwidth=65384,e.issharbengali=2554,e.istroke=616,e.isuperior=63213,e.iterationhiragana=12445,e.iterationkatakana=12541,e.itilde=297,e.itildebelow=7725,e.iubopomofo=12585,e.iucyrillic=1102,e.ivowelsignbengali=2495,e.ivowelsigndeva=2367,e.ivowelsigngujarati=2751,e.izhitsacyrillic=1141,e.izhitsadblgravecyrillic=1143,e.j=106
e.jaarmenian=1393,e.jabengali=2460,e.jadeva=2332,e.jagujarati=2716,e.jagurmukhi=2588,e.jbopomofo=12560,e.jcaron=496,e.jcircle=9433,e.jcircumflex=309,e.jcrossedtail=669,e.jdotlessstroke=607,e.jecyrillic=1112,e.jeemarabic=1580,e.jeemfinalarabic=65182,e.jeeminitialarabic=65183,e.jeemmedialarabic=65184,e.jeharabic=1688,e.jehfinalarabic=64395,e.jhabengali=2461,e.jhadeva=2333,e.jhagujarati=2717,e.jhagurmukhi=2589,e.jheharmenian=1403,e.jis=12292,e.jmonospace=65354,e.jparen=9381,e.jsuperior=690,e.k=107,e.kabashkircyrillic=1185,e.kabengali=2453
e.kacute=7729,e.kacyrillic=1082,e.kadescendercyrillic=1179,e.kadeva=2325,e.kaf=1499,e.kafarabic=1603,e.kafdagesh=64315,e.kafdageshhebrew=64315,e.kaffinalarabic=65242,e.kafhebrew=1499,e.kafinitialarabic=65243,e.kafmedialarabic=65244,e.kafrafehebrew=64333,e.kagujarati=2709,e.kagurmukhi=2581,e.kahiragana=12363,e.kahookcyrillic=1220,e.kakatakana=12459,e.kakatakanahalfwidth=65398,e.kappa=954,e.kappasymbolgreek=1008,e.kapyeounmieumkorean=12657,e.kapyeounphieuphkorean=12676,e.kapyeounpieupkorean=12664,e.kapyeounssangpieupkorean=12665,e.karoriisquare=13069,e.kashidaautoarabic=1600,e.kashidaautonosidebearingarabic=1600,e.kasmallkatakana=12533,e.kasquare=13188
e.kasraarabic=1616,e.kasratanarabic=1613,e.kastrokecyrillic=1183,e.katahiraprolongmarkhalfwidth=65392,e.kaverticalstrokecyrillic=1181,e.kbopomofo=12558,e.kcalsquare=13193,e.kcaron=489,e.kcedilla=311,e.kcircle=9434,e.kcommaaccent=311,e.kdotbelow=7731,e.keharmenian=1412,e.kehiragana=12369,e.kekatakana=12465,e.kekatakanahalfwidth=65401,e.kenarmenian=1391,e.kesmallkatakana=12534,e.kgreenlandic=312,e.khabengali=2454,e.khacyrillic=1093,e.khadeva=2326,e.khagujarati=2710,e.khagurmukhi=2582,e.khaharabic=1582,e.khahfinalarabic=65190,e.khahinitialarabic=65191,e.khahmedialarabic=65192,e.kheicoptic=999,e.khhadeva=2393
e.khhagurmukhi=2649,e.khieukhacirclekorean=12920,e.khieukhaparenkorean=12824,e.khieukhcirclekorean=12906,e.khieukhkorean=12619,e.khieukhparenkorean=12810,e.khokhaithai=3586,e.khokhonthai=3589,e.khokhuatthai=3587,e.khokhwaithai=3588,e.khomutthai=3675,e.khook=409,e.khorakhangthai=3590,e.khzsquare=13201,e.kihiragana=12365,e.kikatakana=12461,e.kikatakanahalfwidth=65399,e.kiroguramusquare=13077,e.kiromeetorusquare=13078,e.kirosquare=13076,e.kiyeokacirclekorean=12910,e.kiyeokaparenkorean=12814,e.kiyeokcirclekorean=12896,e.kiyeokkorean=12593,e.kiyeokparenkorean=12800,e.kiyeoksioskorean=12595,e.kjecyrillic=1116,e.klinebelow=7733,e.klsquare=13208,e.kmcubedsquare=13222
e.kmonospace=65355,e.kmsquaredsquare=13218,e.kohiragana=12371,e.kohmsquare=13248,e.kokaithai=3585,e.kokatakana=12467,e.kokatakanahalfwidth=65402,e.kooposquare=13086,e.koppacyrillic=1153,e.koreanstandardsymbol=12927,e.koroniscmb=835,e.kparen=9382,e.kpasquare=13226,e.ksicyrillic=1135,e.ktsquare=13263,e.kturned=670,e.kuhiragana=12367,e.kukatakana=12463,e.kukatakanahalfwidth=65400,e.kvsquare=13240,e.kwsquare=13246,e.l=108,e.labengali=2482,e.lacute=314,e.ladeva=2354,e.lagujarati=2738,e.lagurmukhi=2610,e.lakkhangyaothai=3653,e.lamaleffinalarabic=65276,e.lamalefhamzaabovefinalarabic=65272
e.lamalefhamzaaboveisolatedarabic=65271,e.lamalefhamzabelowfinalarabic=65274,e.lamalefhamzabelowisolatedarabic=65273,e.lamalefisolatedarabic=65275,e.lamalefmaddaabovefinalarabic=65270,e.lamalefmaddaaboveisolatedarabic=65269,e.lamarabic=1604,e.lambda=955,e.lambdastroke=411,e.lamed=1500,e.lameddagesh=64316,e.lameddageshhebrew=64316,e.lamedhebrew=1500,e.lamfinalarabic=65246,e.lamhahinitialarabic=64714,e.laminitialarabic=65247,e.lamjeeminitialarabic=64713,e.lamkhahinitialarabic=64715,e.lamlamhehisolatedarabic=65010,e.lammedialarabic=65248,e.lammeemhahinitialarabic=64904,e.lammeeminitialarabic=64716,e.largecircle=9711,e.lbar=410,e.lbelt=620,e.lbopomofo=12556,e.lcaron=318,e.lcedilla=316,e.lcircle=9435,e.lcircumflexbelow=7741
e.lcommaaccent=316,e.ldot=320,e.ldotaccent=320,e.ldotbelow=7735,e.ldotbelowmacron=7737,e.leftangleabovecmb=794,e.lefttackbelowcmb=792,e.less=60,e.lessequal=8804,e.lessequalorgreater=8922,e.lessmonospace=65308,e.lessorequivalent=8818,e.lessorgreater=8822,e.lessoverequal=8806,e.lesssmall=65124,e.lezh=622,e.lfblock=9612,e.lhookretroflex=621,e.lira=8356,e.liwnarmenian=1388,e.lj=457,e.ljecyrillic=1113,e.ll=63168,e.lladeva=2355,e.llagujarati=2739,e.llinebelow=7739,e.llladeva=2356,e.llvocalicbengali=2529,e.llvocalicdeva=2401,e.llvocalicvowelsignbengali=2531
e.llvocalicvowelsigndeva=2403,e.lmiddletilde=619,e.lmonospace=65356,e.lmsquare=13264,e.lochulathai=3628,e.logicaland=8743,e.logicalnot=172,e.logicalnotreversed=8976,e.logicalor=8744,e.lolingthai=3621,e.longs=383,e.lowlinecenterline=65102,e.lowlinecmb=818,e.lowlinedashed=65101,e.lozenge=9674,e.lparen=9383,e.lslash=322,e.lsquare=8467,e.lsuperior=63214,e.ltshade=9617,e.luthai=3622,e.lvocalicbengali=2444,e.lvocalicdeva=2316,e.lvocalicvowelsignbengali=2530,e.lvocalicvowelsigndeva=2402,e.lxsquare=13267,e.m=109,e.mabengali=2478,e.macron=175,e.macronbelowcmb=817
e.macroncmb=772,e.macronlowmod=717,e.macronmonospace=65507,e.macute=7743,e.madeva=2350,e.magujarati=2734,e.magurmukhi=2606,e.mahapakhhebrew=1444,e.mahapakhlefthebrew=1444,e.mahiragana=12414,e.maichattawalowleftthai=63637,e.maichattawalowrightthai=63636,e.maichattawathai=3659,e.maichattawaupperleftthai=63635,e.maieklowleftthai=63628,e.maieklowrightthai=63627,e.maiekthai=3656,e.maiekupperleftthai=63626,e.maihanakatleftthai=63620,e.maihanakatthai=3633,e.maitaikhuleftthai=63625,e.maitaikhuthai=3655,e.maitholowleftthai=63631,e.maitholowrightthai=63630,e.maithothai=3657,e.maithoupperleftthai=63629,e.maitrilowleftthai=63634,e.maitrilowrightthai=63633,e.maitrithai=3658,e.maitriupperleftthai=63632
e.maiyamokthai=3654,e.makatakana=12510,e.makatakanahalfwidth=65423,e.male=9794,e.mansyonsquare=13127,e.maqafhebrew=1470,e.mars=9794,e.masoracirclehebrew=1455,e.masquare=13187,e.mbopomofo=12551,e.mbsquare=13268,e.mcircle=9436,e.mcubedsquare=13221,e.mdotaccent=7745,e.mdotbelow=7747,e.meemarabic=1605,e.meemfinalarabic=65250,e.meeminitialarabic=65251,e.meemmedialarabic=65252,e.meemmeeminitialarabic=64721,e.meemmeemisolatedarabic=64584,e.meetorusquare=13133,e.mehiragana=12417,e.meizierasquare=13182,e.mekatakana=12513,e.mekatakanahalfwidth=65426,e.mem=1502,e.memdagesh=64318,e.memdageshhebrew=64318,e.memhebrew=1502
e.menarmenian=1396,e.merkhahebrew=1445,e.merkhakefulahebrew=1446,e.merkhakefulalefthebrew=1446,e.merkhalefthebrew=1445,e.mhook=625,e.mhzsquare=13202,e.middledotkatakanahalfwidth=65381,e.middot=183,e.mieumacirclekorean=12914,e.mieumaparenkorean=12818,e.mieumcirclekorean=12900,e.mieumkorean=12609,e.mieumpansioskorean=12656,e.mieumparenkorean=12804,e.mieumpieupkorean=12654,e.mieumsioskorean=12655,e.mihiragana=12415,e.mikatakana=12511,e.mikatakanahalfwidth=65424,e.minus=8722,e.minusbelowcmb=800,e.minuscircle=8854,e.minusmod=727,e.minusplus=8723,e.minute=8242,e.miribaarusquare=13130,e.mirisquare=13129,e.mlonglegturned=624,e.mlsquare=13206
e.mmcubedsquare=13219,e.mmonospace=65357,e.mmsquaredsquare=13215,e.mohiragana=12418,e.mohmsquare=13249,e.mokatakana=12514,e.mokatakanahalfwidth=65427,e.molsquare=13270,e.momathai=3617,e.moverssquare=13223,e.moverssquaredsquare=13224,e.mparen=9384,e.mpasquare=13227,e.mssquare=13235,e.msuperior=63215,e.mturned=623,e.mu=181,e.mu1=181,e.muasquare=13186,e.muchgreater=8811,e.muchless=8810,e.mufsquare=13196,e.mugreek=956,e.mugsquare=13197,e.muhiragana=12416,e.mukatakana=12512,e.mukatakanahalfwidth=65425,e.mulsquare=13205,e.multiply=215,e.mumsquare=13211
e.munahhebrew=1443,e.munahlefthebrew=1443,e.musicalnote=9834,e.musicalnotedbl=9835,e.musicflatsign=9837,e.musicsharpsign=9839,e.mussquare=13234,e.muvsquare=13238,e.muwsquare=13244,e.mvmegasquare=13241,e.mvsquare=13239,e.mwmegasquare=13247,e.mwsquare=13245,e.n=110,e.nabengali=2472,e.nabla=8711,e.nacute=324,e.nadeva=2344,e.nagujarati=2728,e.nagurmukhi=2600,e.nahiragana=12394,e.nakatakana=12490,e.nakatakanahalfwidth=65413,e.napostrophe=329,e.nasquare=13185,e.nbopomofo=12555,e.nbspace=160,e.ncaron=328,e.ncedilla=326,e.ncircle=9437
e.ncircumflexbelow=7755,e.ncommaaccent=326,e.ndotaccent=7749,e.ndotbelow=7751,e.nehiragana=12397,e.nekatakana=12493,e.nekatakanahalfwidth=65416,e.newsheqelsign=8362,e.nfsquare=13195,e.ngabengali=2457,e.ngadeva=2329,e.ngagujarati=2713,e.ngagurmukhi=2585,e.ngonguthai=3591,e.nhiragana=12435,e.nhookleft=626,e.nhookretroflex=627,e.nieunacirclekorean=12911,e.nieunaparenkorean=12815,e.nieuncieuckorean=12597,e.nieuncirclekorean=12897,e.nieunhieuhkorean=12598,e.nieunkorean=12596,e.nieunpansioskorean=12648,e.nieunparenkorean=12801,e.nieunsioskorean=12647,e.nieuntikeutkorean=12646,e.nihiragana=12395,e.nikatakana=12491,e.nikatakanahalfwidth=65414
e.nikhahitleftthai=63641,e.nikhahitthai=3661,e.nine=57,e.ninearabic=1641,e.ninebengali=2543,e.ninecircle=9320,e.ninecircleinversesansserif=10130,e.ninedeva=2415,e.ninegujarati=2799,e.ninegurmukhi=2671,e.ninehackarabic=1641,e.ninehangzhou=12329,e.nineideographicparen=12840,e.nineinferior=8329,e.ninemonospace=65305,e.nineoldstyle=63289,e.nineparen=9340,e.nineperiod=9360,e.ninepersian=1785,e.nineroman=8568,e.ninesuperior=8313,e.nineteencircle=9330,e.nineteenparen=9350,e.nineteenperiod=9370,e.ninethai=3673,e.nj=460,e.njecyrillic=1114,e.nkatakana=12531,e.nkatakanahalfwidth=65437,e.nlegrightlong=414
e.nlinebelow=7753,e.nmonospace=65358,e.nmsquare=13210,e.nnabengali=2467,e.nnadeva=2339,e.nnagujarati=2723,e.nnagurmukhi=2595,e.nnnadeva=2345,e.nohiragana=12398,e.nokatakana=12494,e.nokatakanahalfwidth=65417,e.nonbreakingspace=160,e.nonenthai=3603,e.nonuthai=3609,e.noonarabic=1606,e.noonfinalarabic=65254,e.noonghunnaarabic=1722,e.noonghunnafinalarabic=64415,e.nooninitialarabic=65255,e.noonjeeminitialarabic=64722,e.noonjeemisolatedarabic=64587,e.noonmedialarabic=65256,e.noonmeeminitialarabic=64725,e.noonmeemisolatedarabic=64590,e.noonnoonfinalarabic=64653,e.notcontains=8716,e.notelement=8713,e.notelementof=8713,e.notequal=8800,e.notgreater=8815
e.notgreaternorequal=8817,e.notgreaternorless=8825,e.notidentical=8802,e.notless=8814,e.notlessnorequal=8816,e.notparallel=8742,e.notprecedes=8832,e.notsubset=8836,e.notsucceeds=8833,e.notsuperset=8837,e.nowarmenian=1398,e.nparen=9385,e.nssquare=13233,e.nsuperior=8319,e.ntilde=241,e.nu=957,e.nuhiragana=12396,e.nukatakana=12492,e.nukatakanahalfwidth=65415,e.nuktabengali=2492,e.nuktadeva=2364,e.nuktagujarati=2748,e.nuktagurmukhi=2620,e.numbersign=35,e.numbersignmonospace=65283,e.numbersignsmall=65119,e.numeralsigngreek=884,e.numeralsignlowergreek=885,e.numero=8470,e.nun=1504
e.nundagesh=64320,e.nundageshhebrew=64320,e.nunhebrew=1504,e.nvsquare=13237,e.nwsquare=13243,e.nyabengali=2462,e.nyadeva=2334,e.nyagujarati=2718,e.nyagurmukhi=2590,e.o=111,e.oacute=243,e.oangthai=3629,e.obarred=629,e.obarredcyrillic=1257,e.obarreddieresiscyrillic=1259,e.obengali=2451,e.obopomofo=12571,e.obreve=335,e.ocandradeva=2321,e.ocandragujarati=2705,e.ocandravowelsigndeva=2377,e.ocandravowelsigngujarati=2761,e.ocaron=466,e.ocircle=9438,e.ocircumflex=244,e.ocircumflexacute=7889,e.ocircumflexdotbelow=7897,e.ocircumflexgrave=7891,e.ocircumflexhookabove=7893,e.ocircumflextilde=7895
e.ocyrillic=1086,e.odblacute=337,e.odblgrave=525,e.odeva=2323,e.odieresis=246,e.odieresiscyrillic=1255,e.odotbelow=7885,e.oe=339,e.oekorean=12634,e.ogonek=731,e.ogonekcmb=808,e.ograve=242,e.ogujarati=2707,e.oharmenian=1413,e.ohiragana=12362,e.ohookabove=7887,e.ohorn=417,e.ohornacute=7899,e.ohorndotbelow=7907,e.ohorngrave=7901,e.ohornhookabove=7903,e.ohorntilde=7905,e.ohungarumlaut=337,e.oi=419,e.oinvertedbreve=527,e.okatakana=12458,e.okatakanahalfwidth=65397,e.okorean=12631,e.olehebrew=1451,e.omacron=333
e.omacronacute=7763,e.omacrongrave=7761,e.omdeva=2384,e.omega=969,e.omega1=982,e.omegacyrillic=1121,e.omegalatinclosed=631,e.omegaroundcyrillic=1147,e.omegatitlocyrillic=1149,e.omegatonos=974,e.omgujarati=2768,e.omicron=959,e.omicrontonos=972,e.omonospace=65359,e.one=49,e.onearabic=1633,e.onebengali=2535,e.onecircle=9312,e.onecircleinversesansserif=10122,e.onedeva=2407,e.onedotenleader=8228,e.oneeighth=8539,e.onefitted=63196,e.onegujarati=2791,e.onegurmukhi=2663,e.onehackarabic=1633,e.onehalf=189,e.onehangzhou=12321,e.oneideographicparen=12832,e.oneinferior=8321
e.onemonospace=65297,e.onenumeratorbengali=2548,e.oneoldstyle=63281,e.oneparen=9332,e.oneperiod=9352,e.onepersian=1777,e.onequarter=188,e.oneroman=8560,e.onesuperior=185,e.onethai=3665,e.onethird=8531,e.oogonek=491,e.oogonekmacron=493,e.oogurmukhi=2579,e.oomatragurmukhi=2635,e.oopen=596,e.oparen=9386,e.openbullet=9702,e.option=8997,e.ordfeminine=170,e.ordmasculine=186,e.orthogonal=8735,e.oshortdeva=2322,e.oshortvowelsigndeva=2378,e.oslash=248,e.oslashacute=511,e.osmallhiragana=12361,e.osmallkatakana=12457,e.osmallkatakanahalfwidth=65387,e.ostrokeacute=511
e.osuperior=63216,e.otcyrillic=1151,e.otilde=245,e.otildeacute=7757,e.otildedieresis=7759,e.oubopomofo=12577,e.overline=8254,e.overlinecenterline=65098,e.overlinecmb=773,e.overlinedashed=65097,e.overlinedblwavy=65100,e.overlinewavy=65099,e.overscore=175,e.ovowelsignbengali=2507,e.ovowelsigndeva=2379,e.ovowelsigngujarati=2763,e.p=112,e.paampssquare=13184,e.paasentosquare=13099,e.pabengali=2474,e.pacute=7765,e.padeva=2346,e.pagedown=8671,e.pageup=8670,e.pagujarati=2730,e.pagurmukhi=2602,e.pahiragana=12401,e.paiyannoithai=3631,e.pakatakana=12497,e.palatalizationcyrilliccmb=1156
e.palochkacyrillic=1216,e.pansioskorean=12671,e.paragraph=182,e.parallel=8741,e.parenleft=40,e.parenleftaltonearabic=64830,e.parenleftbt=63725,e.parenleftex=63724,e.parenleftinferior=8333,e.parenleftmonospace=65288,e.parenleftsmall=65113,e.parenleftsuperior=8317,e.parenlefttp=63723,e.parenleftvertical=65077,e.parenright=41,e.parenrightaltonearabic=64831,e.parenrightbt=63736,e.parenrightex=63735,e.parenrightinferior=8334,e.parenrightmonospace=65289,e.parenrightsmall=65114,e.parenrightsuperior=8318,e.parenrighttp=63734,e.parenrightvertical=65078,e.partialdiff=8706,e.paseqhebrew=1472,e.pashtahebrew=1433,e.pasquare=13225,e.patah=1463,e.patah11=1463
e.patah1d=1463,e.patah2a=1463,e.patahhebrew=1463,e.patahnarrowhebrew=1463,e.patahquarterhebrew=1463,e.patahwidehebrew=1463,e.pazerhebrew=1441,e.pbopomofo=12550,e.pcircle=9439,e.pdotaccent=7767,e.pe=1508,e.pecyrillic=1087,e.pedagesh=64324,e.pedageshhebrew=64324,e.peezisquare=13115,e.pefinaldageshhebrew=64323,e.peharabic=1662,e.peharmenian=1402,e.pehebrew=1508,e.pehfinalarabic=64343,e.pehinitialarabic=64344,e.pehiragana=12410,e.pehmedialarabic=64345,e.pekatakana=12506,e.pemiddlehookcyrillic=1191,e.perafehebrew=64334,e.percent=37,e.percentarabic=1642,e.percentmonospace=65285,e.percentsmall=65130
e.period=46,e.periodarmenian=1417,e.periodcentered=183,e.periodhalfwidth=65377,e.periodinferior=63207,e.periodmonospace=65294,e.periodsmall=65106,e.periodsuperior=63208,e.perispomenigreekcmb=834,e.perpendicular=8869,e.perthousand=8240,e.peseta=8359,e.pfsquare=13194,e.phabengali=2475,e.phadeva=2347,e.phagujarati=2731,e.phagurmukhi=2603,e.phi=966,e.phi1=981,e.phieuphacirclekorean=12922,e.phieuphaparenkorean=12826,e.phieuphcirclekorean=12908,e.phieuphkorean=12621,e.phieuphparenkorean=12812,e.philatin=632,e.phinthuthai=3642,e.phisymbolgreek=981,e.phook=421,e.phophanthai=3614,e.phophungthai=3612
e.phosamphaothai=3616,e.pi=960,e.pieupacirclekorean=12915,e.pieupaparenkorean=12819,e.pieupcieuckorean=12662,e.pieupcirclekorean=12901,e.pieupkiyeokkorean=12658,e.pieupkorean=12610,e.pieupparenkorean=12805,e.pieupsioskiyeokkorean=12660,e.pieupsioskorean=12612,e.pieupsiostikeutkorean=12661,e.pieupthieuthkorean=12663,e.pieuptikeutkorean=12659,e.pihiragana=12404,e.pikatakana=12500,e.pisymbolgreek=982,e.piwrarmenian=1411,e.plus=43,e.plusbelowcmb=799,e.pluscircle=8853,e.plusminus=177,e.plusmod=726,e.plusmonospace=65291,e.plussmall=65122,e.plussuperior=8314,e.pmonospace=65360,e.pmsquare=13272,e.pohiragana=12413,e.pointingindexdownwhite=9759
e.pointingindexleftwhite=9756,e.pointingindexrightwhite=9758,e.pointingindexupwhite=9757,e.pokatakana=12509,e.poplathai=3611,e.postalmark=12306,e.postalmarkface=12320,e.pparen=9387,e.precedes=8826,e.prescription=8478,e.primemod=697,e.primereversed=8245,e.product=8719,e.projective=8965,e.prolongedkana=12540,e.propellor=8984,e.propersubset=8834,e.propersuperset=8835,e.proportion=8759,e.proportional=8733,e.psi=968,e.psicyrillic=1137,e.psilipneumatacyrilliccmb=1158,e.pssquare=13232,e.puhiragana=12407,e.pukatakana=12503,e.pvsquare=13236,e.pwsquare=13242,e.q=113,e.qadeva=2392
e.qadmahebrew=1448,e.qafarabic=1602,e.qaffinalarabic=65238,e.qafinitialarabic=65239,e.qafmedialarabic=65240,e.qamats=1464,e.qamats10=1464,e.qamats1a=1464,e.qamats1c=1464,e.qamats27=1464,e.qamats29=1464,e.qamats33=1464,e.qamatsde=1464,e.qamatshebrew=1464,e.qamatsnarrowhebrew=1464,e.qamatsqatanhebrew=1464,e.qamatsqatannarrowhebrew=1464,e.qamatsqatanquarterhebrew=1464,e.qamatsqatanwidehebrew=1464,e.qamatsquarterhebrew=1464,e.qamatswidehebrew=1464,e.qarneyparahebrew=1439,e.qbopomofo=12561,e.qcircle=9440,e.qhook=672,e.qmonospace=65361,e.qof=1511,e.qofdagesh=64327,e.qofdageshhebrew=64327,e.qofhebrew=1511
e.qparen=9388,e.quarternote=9833,e.qubuts=1467,e.qubuts18=1467,e.qubuts25=1467,e.qubuts31=1467,e.qubutshebrew=1467,e.qubutsnarrowhebrew=1467,e.qubutsquarterhebrew=1467,e.qubutswidehebrew=1467,e.question=63,e.questionarabic=1567,e.questionarmenian=1374,e.questiondown=191,e.questiondownsmall=63423,e.questiongreek=894,e.questionmonospace=65311,e.questionsmall=63295,e.quotedbl=34,e.quotedblbase=8222,e.quotedblleft=8220,e.quotedblmonospace=65282,e.quotedblprime=12318,e.quotedblprimereversed=12317,e.quotedblright=8221,e.quoteleft=8216,e.quoteleftreversed=8219,e.quotereversed=8219,e.quoteright=8217,e.quoterightn=329
e.quotesinglbase=8218,e.quotesingle=39,e.quotesinglemonospace=65287,e.r=114,e.raarmenian=1404,e.rabengali=2480,e.racute=341,e.radeva=2352,e.radical=8730,e.radicalex=63717,e.radoverssquare=13230,e.radoverssquaredsquare=13231,e.radsquare=13229,e.rafe=1471,e.rafehebrew=1471,e.ragujarati=2736,e.ragurmukhi=2608,e.rahiragana=12425,e.rakatakana=12521,e.rakatakanahalfwidth=65431,e.ralowerdiagonalbengali=2545,e.ramiddlediagonalbengali=2544,e.ramshorn=612,e.ratio=8758,e.rbopomofo=12566,e.rcaron=345,e.rcedilla=343,e.rcircle=9441,e.rcommaaccent=343,e.rdblgrave=529
e.rdotaccent=7769,e.rdotbelow=7771,e.rdotbelowmacron=7773,e.referencemark=8251,e.reflexsubset=8838,e.reflexsuperset=8839,e.registered=174,e.registersans=63720,e.registerserif=63194,e.reharabic=1585,e.reharmenian=1408,e.rehfinalarabic=65198,e.rehiragana=12428,e.rekatakana=12524,e.rekatakanahalfwidth=65434,e.resh=1512,e.reshdageshhebrew=64328,e.reshhebrew=1512,e.reversedtilde=8765,e.reviahebrew=1431,e.reviamugrashhebrew=1431,e.revlogicalnot=8976,e.rfishhook=638,e.rfishhookreversed=639,e.rhabengali=2525,e.rhadeva=2397,e.rho=961,e.rhook=637,e.rhookturned=635,e.rhookturnedsuperior=693
e.rhosymbolgreek=1009,e.rhotichookmod=734,e.rieulacirclekorean=12913,e.rieulaparenkorean=12817,e.rieulcirclekorean=12899,e.rieulhieuhkorean=12608,e.rieulkiyeokkorean=12602,e.rieulkiyeoksioskorean=12649,e.rieulkorean=12601,e.rieulmieumkorean=12603,e.rieulpansioskorean=12652,e.rieulparenkorean=12803,e.rieulphieuphkorean=12607,e.rieulpieupkorean=12604,e.rieulpieupsioskorean=12651,e.rieulsioskorean=12605,e.rieulthieuthkorean=12606,e.rieultikeutkorean=12650,e.rieulyeorinhieuhkorean=12653,e.rightangle=8735,e.righttackbelowcmb=793,e.righttriangle=8895,e.rihiragana=12426,e.rikatakana=12522,e.rikatakanahalfwidth=65432,e.ring=730,e.ringbelowcmb=805,e.ringcmb=778,e.ringhalfleft=703,e.ringhalfleftarmenian=1369
e.ringhalfleftbelowcmb=796,e.ringhalfleftcentered=723,e.ringhalfright=702,e.ringhalfrightbelowcmb=825,e.ringhalfrightcentered=722,e.rinvertedbreve=531,e.rittorusquare=13137,e.rlinebelow=7775,e.rlongleg=636,e.rlonglegturned=634,e.rmonospace=65362,e.rohiragana=12429,e.rokatakana=12525,e.rokatakanahalfwidth=65435,e.roruathai=3619,e.rparen=9389,e.rrabengali=2524,e.rradeva=2353,e.rragurmukhi=2652,e.rreharabic=1681,e.rrehfinalarabic=64397,e.rrvocalicbengali=2528,e.rrvocalicdeva=2400,e.rrvocalicgujarati=2784,e.rrvocalicvowelsignbengali=2500,e.rrvocalicvowelsigndeva=2372,e.rrvocalicvowelsigngujarati=2756,e.rsuperior=63217,e.rtblock=9616,e.rturned=633
e.rturnedsuperior=692,e.ruhiragana=12427,e.rukatakana=12523,e.rukatakanahalfwidth=65433,e.rupeemarkbengali=2546,e.rupeesignbengali=2547,e.rupiah=63197,e.ruthai=3620,e.rvocalicbengali=2443,e.rvocalicdeva=2315,e.rvocalicgujarati=2699,e.rvocalicvowelsignbengali=2499,e.rvocalicvowelsigndeva=2371,e.rvocalicvowelsigngujarati=2755,e.s=115,e.sabengali=2488,e.sacute=347,e.sacutedotaccent=7781,e.sadarabic=1589,e.sadeva=2360,e.sadfinalarabic=65210,e.sadinitialarabic=65211,e.sadmedialarabic=65212,e.sagujarati=2744,e.sagurmukhi=2616,e.sahiragana=12373,e.sakatakana=12469,e.sakatakanahalfwidth=65403,e.sallallahoualayhewasallamarabic=65018,e.samekh=1505
e.samekhdagesh=64321,e.samekhdageshhebrew=64321,e.samekhhebrew=1505,e.saraaathai=3634,e.saraaethai=3649,e.saraaimaimalaithai=3652,e.saraaimaimuanthai=3651,e.saraamthai=3635,e.saraathai=3632,e.saraethai=3648,e.saraiileftthai=63622,e.saraiithai=3637,e.saraileftthai=63621,e.saraithai=3636,e.saraothai=3650,e.saraueeleftthai=63624,e.saraueethai=3639,e.saraueleftthai=63623,e.sarauethai=3638,e.sarauthai=3640,e.sarauuthai=3641,e.sbopomofo=12569,e.scaron=353,e.scarondotaccent=7783,e.scedilla=351,e.schwa=601,e.schwacyrillic=1241,e.schwadieresiscyrillic=1243,e.schwahook=602,e.scircle=9442
e.scircumflex=349,e.scommaaccent=537,e.sdotaccent=7777,e.sdotbelow=7779,e.sdotbelowdotaccent=7785,e.seagullbelowcmb=828,e.second=8243,e.secondtonechinese=714,e.section=167,e.seenarabic=1587,e.seenfinalarabic=65202,e.seeninitialarabic=65203,e.seenmedialarabic=65204,e.segol=1462,e.segol13=1462,e.segol1f=1462,e.segol2c=1462,e.segolhebrew=1462,e.segolnarrowhebrew=1462,e.segolquarterhebrew=1462,e.segoltahebrew=1426,e.segolwidehebrew=1462,e.seharmenian=1405,e.sehiragana=12379,e.sekatakana=12475,e.sekatakanahalfwidth=65406,e.semicolon=59,e.semicolonarabic=1563,e.semicolonmonospace=65307,e.semicolonsmall=65108
e.semivoicedmarkkana=12444,e.semivoicedmarkkanahalfwidth=65439,e.sentisquare=13090,e.sentosquare=13091,e.seven=55,e.sevenarabic=1639,e.sevenbengali=2541,e.sevencircle=9318,e.sevencircleinversesansserif=10128,e.sevendeva=2413,e.seveneighths=8542,e.sevengujarati=2797,e.sevengurmukhi=2669,e.sevenhackarabic=1639,e.sevenhangzhou=12327,e.sevenideographicparen=12838,e.seveninferior=8327,e.sevenmonospace=65303,e.sevenoldstyle=63287,e.sevenparen=9338,e.sevenperiod=9358,e.sevenpersian=1783,e.sevenroman=8566,e.sevensuperior=8311,e.seventeencircle=9328,e.seventeenparen=9348,e.seventeenperiod=9368,e.seventhai=3671,e.sfthyphen=173,e.shaarmenian=1399
e.shabengali=2486,e.shacyrillic=1096,e.shaddaarabic=1617,e.shaddadammaarabic=64609,e.shaddadammatanarabic=64606,e.shaddafathaarabic=64608,e.shaddakasraarabic=64610,e.shaddakasratanarabic=64607,e.shade=9618,e.shadedark=9619,e.shadelight=9617,e.shademedium=9618,e.shadeva=2358,e.shagujarati=2742,e.shagurmukhi=2614,e.shalshelethebrew=1427,e.shbopomofo=12565,e.shchacyrillic=1097,e.sheenarabic=1588,e.sheenfinalarabic=65206,e.sheeninitialarabic=65207,e.sheenmedialarabic=65208,e.sheicoptic=995,e.sheqel=8362,e.sheqelhebrew=8362,e.sheva=1456,e.sheva115=1456,e.sheva15=1456,e.sheva22=1456,e.sheva2e=1456
e.shevahebrew=1456,e.shevanarrowhebrew=1456,e.shevaquarterhebrew=1456,e.shevawidehebrew=1456,e.shhacyrillic=1211,e.shimacoptic=1005,e.shin=1513,e.shindagesh=64329,e.shindageshhebrew=64329,e.shindageshshindot=64300,e.shindageshshindothebrew=64300,e.shindageshsindot=64301,e.shindageshsindothebrew=64301,e.shindothebrew=1473,e.shinhebrew=1513,e.shinshindot=64298,e.shinshindothebrew=64298,e.shinsindot=64299,e.shinsindothebrew=64299,e.shook=642,e.sigma=963,e.sigma1=962,e.sigmafinal=962,e.sigmalunatesymbolgreek=1010,e.sihiragana=12375,e.sikatakana=12471,e.sikatakanahalfwidth=65404,e.siluqhebrew=1469,e.siluqlefthebrew=1469,e.similar=8764
e.sindothebrew=1474,e.siosacirclekorean=12916,e.siosaparenkorean=12820,e.sioscieuckorean=12670,e.sioscirclekorean=12902,e.sioskiyeokkorean=12666,e.sioskorean=12613,e.siosnieunkorean=12667,e.siosparenkorean=12806,e.siospieupkorean=12669,e.siostikeutkorean=12668,e.six=54,e.sixarabic=1638,e.sixbengali=2540,e.sixcircle=9317,e.sixcircleinversesansserif=10127,e.sixdeva=2412,e.sixgujarati=2796,e.sixgurmukhi=2668,e.sixhackarabic=1638,e.sixhangzhou=12326,e.sixideographicparen=12837,e.sixinferior=8326,e.sixmonospace=65302,e.sixoldstyle=63286,e.sixparen=9337,e.sixperiod=9357,e.sixpersian=1782,e.sixroman=8565,e.sixsuperior=8310
e.sixteencircle=9327,e.sixteencurrencydenominatorbengali=2553,e.sixteenparen=9347,e.sixteenperiod=9367,e.sixthai=3670,e.slash=47,e.slashmonospace=65295,e.slong=383,e.slongdotaccent=7835,e.smileface=9786,e.smonospace=65363,e.sofpasuqhebrew=1475,e.softhyphen=173,e.softsigncyrillic=1100,e.sohiragana=12381,e.sokatakana=12477,e.sokatakanahalfwidth=65407,e.soliduslongoverlaycmb=824,e.solidusshortoverlaycmb=823,e.sorusithai=3625,e.sosalathai=3624,e.sosothai=3595,e.sosuathai=3626,e.space=32,e.spacehackarabic=32,e.spade=9824,e.spadesuitblack=9824,e.spadesuitwhite=9828,e.sparen=9390,e.squarebelowcmb=827
e.squarecc=13252,e.squarecm=13213,e.squarediagonalcrosshatchfill=9641,e.squarehorizontalfill=9636,e.squarekg=13199,e.squarekm=13214,e.squarekmcapital=13262,e.squareln=13265,e.squarelog=13266,e.squaremg=13198,e.squaremil=13269,e.squaremm=13212,e.squaremsquared=13217,e.squareorthogonalcrosshatchfill=9638,e.squareupperlefttolowerrightfill=9639,e.squareupperrighttolowerleftfill=9640,e.squareverticalfill=9637,e.squarewhitewithsmallblack=9635,e.srsquare=13275,e.ssabengali=2487,e.ssadeva=2359,e.ssagujarati=2743,e.ssangcieuckorean=12617,e.ssanghieuhkorean=12677,e.ssangieungkorean=12672,e.ssangkiyeokkorean=12594,e.ssangnieunkorean=12645,e.ssangpieupkorean=12611,e.ssangsioskorean=12614,e.ssangtikeutkorean=12600
e.ssuperior=63218,e.sterling=163,e.sterlingmonospace=65505,e.strokelongoverlaycmb=822,e.strokeshortoverlaycmb=821,e.subset=8834,e.subsetnotequal=8842,e.subsetorequal=8838,e.succeeds=8827,e.suchthat=8715,e.suhiragana=12377,e.sukatakana=12473,e.sukatakanahalfwidth=65405,e.sukunarabic=1618,e.summation=8721,e.sun=9788,e.superset=8835,e.supersetnotequal=8843,e.supersetorequal=8839,e.svsquare=13276,e.syouwaerasquare=13180,e.t=116,e.tabengali=2468,e.tackdown=8868,e.tackleft=8867,e.tadeva=2340,e.tagujarati=2724,e.tagurmukhi=2596,e.taharabic=1591,e.tahfinalarabic=65218
e.tahinitialarabic=65219,e.tahiragana=12383,e.tahmedialarabic=65220,e.taisyouerasquare=13181,e.takatakana=12479,e.takatakanahalfwidth=65408,e.tatweelarabic=1600,e.tau=964,e.tav=1514,e.tavdages=64330,e.tavdagesh=64330,e.tavdageshhebrew=64330,e.tavhebrew=1514,e.tbar=359,e.tbopomofo=12554,e.tcaron=357,e.tccurl=680,e.tcedilla=355,e.tcheharabic=1670,e.tchehfinalarabic=64379,e.tchehinitialarabic=64380,e.tchehmedialarabic=64381,e.tcircle=9443,e.tcircumflexbelow=7793,e.tcommaaccent=355,e.tdieresis=7831,e.tdotaccent=7787,e.tdotbelow=7789,e.tecyrillic=1090,e.tedescendercyrillic=1197
e.teharabic=1578,e.tehfinalarabic=65174,e.tehhahinitialarabic=64674,e.tehhahisolatedarabic=64524,e.tehinitialarabic=65175,e.tehiragana=12390,e.tehjeeminitialarabic=64673,e.tehjeemisolatedarabic=64523,e.tehmarbutaarabic=1577,e.tehmarbutafinalarabic=65172,e.tehmedialarabic=65176,e.tehmeeminitialarabic=64676,e.tehmeemisolatedarabic=64526,e.tehnoonfinalarabic=64627,e.tekatakana=12486,e.tekatakanahalfwidth=65411,e.telephone=8481,e.telephoneblack=9742,e.telishagedolahebrew=1440,e.telishaqetanahebrew=1449,e.tencircle=9321,e.tenideographicparen=12841,e.tenparen=9341,e.tenperiod=9361,e.tenroman=8569,e.tesh=679,e.tet=1496,e.tetdagesh=64312,e.tetdageshhebrew=64312,e.tethebrew=1496
e.tetsecyrillic=1205,e.tevirhebrew=1435,e.tevirlefthebrew=1435,e.thabengali=2469,e.thadeva=2341,e.thagujarati=2725,e.thagurmukhi=2597,e.thalarabic=1584,e.thalfinalarabic=65196,e.thanthakhatlowleftthai=63640,e.thanthakhatlowrightthai=63639,e.thanthakhatthai=3660,e.thanthakhatupperleftthai=63638,e.theharabic=1579,e.thehfinalarabic=65178,e.thehinitialarabic=65179,e.thehmedialarabic=65180,e.thereexists=8707,e.therefore=8756,e.theta=952,e.theta1=977,e.thetasymbolgreek=977,e.thieuthacirclekorean=12921,e.thieuthaparenkorean=12825,e.thieuthcirclekorean=12907,e.thieuthkorean=12620,e.thieuthparenkorean=12811,e.thirteencircle=9324,e.thirteenparen=9344,e.thirteenperiod=9364
e.thonangmonthothai=3601,e.thook=429,e.thophuthaothai=3602,e.thorn=254,e.thothahanthai=3607,e.thothanthai=3600,e.thothongthai=3608,e.thothungthai=3606,e.thousandcyrillic=1154,e.thousandsseparatorarabic=1644,e.thousandsseparatorpersian=1644,e.three=51,e.threearabic=1635,e.threebengali=2537,e.threecircle=9314,e.threecircleinversesansserif=10124,e.threedeva=2409,e.threeeighths=8540,e.threegujarati=2793,e.threegurmukhi=2665,e.threehackarabic=1635,e.threehangzhou=12323,e.threeideographicparen=12834,e.threeinferior=8323,e.threemonospace=65299,e.threenumeratorbengali=2550,e.threeoldstyle=63283,e.threeparen=9334,e.threeperiod=9354,e.threepersian=1779
e.threequarters=190,e.threequartersemdash=63198,e.threeroman=8562,e.threesuperior=179,e.threethai=3667,e.thzsquare=13204,e.tihiragana=12385,e.tikatakana=12481,e.tikatakanahalfwidth=65409,e.tikeutacirclekorean=12912,e.tikeutaparenkorean=12816,e.tikeutcirclekorean=12898,e.tikeutkorean=12599,e.tikeutparenkorean=12802,e.tilde=732,e.tildebelowcmb=816,e.tildecmb=771,e.tildecomb=771,e.tildedoublecmb=864,e.tildeoperator=8764,e.tildeoverlaycmb=820,e.tildeverticalcmb=830,e.timescircle=8855,e.tipehahebrew=1430,e.tipehalefthebrew=1430,e.tippigurmukhi=2672,e.titlocyrilliccmb=1155,e.tiwnarmenian=1407,e.tlinebelow=7791,e.tmonospace=65364
e.toarmenian=1385,e.tohiragana=12392,e.tokatakana=12488,e.tokatakanahalfwidth=65412,e.tonebarextrahighmod=741,e.tonebarextralowmod=745,e.tonebarhighmod=742,e.tonebarlowmod=744,e.tonebarmidmod=743,e.tonefive=445,e.tonesix=389,e.tonetwo=424,e.tonos=900,e.tonsquare=13095,e.topatakthai=3599,e.tortoiseshellbracketleft=12308,e.tortoiseshellbracketleftsmall=65117,e.tortoiseshellbracketleftvertical=65081,e.tortoiseshellbracketright=12309,e.tortoiseshellbracketrightsmall=65118,e.tortoiseshellbracketrightvertical=65082,e.totaothai=3605,e.tpalatalhook=427,e.tparen=9391,e.trademark=8482,e.trademarksans=63722,e.trademarkserif=63195,e.tretroflexhook=648,e.triagdn=9660,e.triaglf=9668
e.triagrt=9658,e.triagup=9650,e.ts=678,e.tsadi=1510,e.tsadidagesh=64326,e.tsadidageshhebrew=64326,e.tsadihebrew=1510,e.tsecyrillic=1094,e.tsere=1461,e.tsere12=1461,e.tsere1e=1461,e.tsere2b=1461,e.tserehebrew=1461,e.tserenarrowhebrew=1461,e.tserequarterhebrew=1461,e.tserewidehebrew=1461,e.tshecyrillic=1115,e.tsuperior=63219,e.ttabengali=2463,e.ttadeva=2335,e.ttagujarati=2719,e.ttagurmukhi=2591,e.tteharabic=1657,e.ttehfinalarabic=64359,e.ttehinitialarabic=64360,e.ttehmedialarabic=64361,e.tthabengali=2464,e.tthadeva=2336,e.tthagujarati=2720,e.tthagurmukhi=2592
e.tturned=647,e.tuhiragana=12388,e.tukatakana=12484,e.tukatakanahalfwidth=65410,e.tusmallhiragana=12387,e.tusmallkatakana=12483,e.tusmallkatakanahalfwidth=65391,e.twelvecircle=9323,e.twelveparen=9343,e.twelveperiod=9363,e.twelveroman=8571,e.twentycircle=9331,e.twentyhangzhou=21316,e.twentyparen=9351,e.twentyperiod=9371,e.two=50,e.twoarabic=1634,e.twobengali=2536,e.twocircle=9313,e.twocircleinversesansserif=10123,e.twodeva=2408,e.twodotenleader=8229,e.twodotleader=8229,e.twodotleadervertical=65072,e.twogujarati=2792,e.twogurmukhi=2664,e.twohackarabic=1634,e.twohangzhou=12322,e.twoideographicparen=12833,e.twoinferior=8322
e.twomonospace=65298,e.twonumeratorbengali=2549,e.twooldstyle=63282,e.twoparen=9333,e.twoperiod=9353,e.twopersian=1778,e.tworoman=8561,e.twostroke=443,e.twosuperior=178,e.twothai=3666,e.twothirds=8532,e.u=117,e.uacute=250,e.ubar=649,e.ubengali=2441,e.ubopomofo=12584,e.ubreve=365,e.ucaron=468,e.ucircle=9444,e.ucircumflex=251,e.ucircumflexbelow=7799,e.ucyrillic=1091,e.udattadeva=2385,e.udblacute=369,e.udblgrave=533,e.udeva=2313,e.udieresis=252,e.udieresisacute=472,e.udieresisbelow=7795,e.udieresiscaron=474
e.udieresiscyrillic=1265,e.udieresisgrave=476,e.udieresismacron=470,e.udotbelow=7909,e.ugrave=249,e.ugujarati=2697,e.ugurmukhi=2569,e.uhiragana=12358,e.uhookabove=7911,e.uhorn=432,e.uhornacute=7913,e.uhorndotbelow=7921,e.uhorngrave=7915,e.uhornhookabove=7917,e.uhorntilde=7919,e.uhungarumlaut=369,e.uhungarumlautcyrillic=1267,e.uinvertedbreve=535,e.ukatakana=12454,e.ukatakanahalfwidth=65395,e.ukcyrillic=1145,e.ukorean=12636,e.umacron=363,e.umacroncyrillic=1263,e.umacrondieresis=7803,e.umatragurmukhi=2625,e.umonospace=65365,e.underscore=95,e.underscoredbl=8215,e.underscoremonospace=65343
e.underscorevertical=65075,e.underscorewavy=65103,e.union=8746,e.universal=8704,e.uogonek=371,e.uparen=9392,e.upblock=9600,e.upperdothebrew=1476,e.upsilon=965,e.upsilondieresis=971,e.upsilondieresistonos=944,e.upsilonlatin=650,e.upsilontonos=973,e.uptackbelowcmb=797,e.uptackmod=724,e.uragurmukhi=2675,e.uring=367,e.ushortcyrillic=1118,e.usmallhiragana=12357,e.usmallkatakana=12453,e.usmallkatakanahalfwidth=65385,e.ustraightcyrillic=1199,e.ustraightstrokecyrillic=1201,e.utilde=361,e.utildeacute=7801,e.utildebelow=7797,e.uubengali=2442,e.uudeva=2314,e.uugujarati=2698,e.uugurmukhi=2570
e.uumatragurmukhi=2626,e.uuvowelsignbengali=2498,e.uuvowelsigndeva=2370,e.uuvowelsigngujarati=2754,e.uvowelsignbengali=2497,e.uvowelsigndeva=2369,e.uvowelsigngujarati=2753,e.v=118,e.vadeva=2357,e.vagujarati=2741,e.vagurmukhi=2613,e.vakatakana=12535,e.vav=1493,e.vavdagesh=64309,e.vavdagesh65=64309,e.vavdageshhebrew=64309,e.vavhebrew=1493,e.vavholam=64331,e.vavholamhebrew=64331,e.vavvavhebrew=1520,e.vavyodhebrew=1521,e.vcircle=9445,e.vdotbelow=7807,e.vecyrillic=1074,e.veharabic=1700,e.vehfinalarabic=64363,e.vehinitialarabic=64364,e.vehmedialarabic=64365,e.vekatakana=12537,e.venus=9792
e.verticalbar=124,e.verticallineabovecmb=781,e.verticallinebelowcmb=809,e.verticallinelowmod=716,e.verticallinemod=712,e.vewarmenian=1406,e.vhook=651,e.vikatakana=12536,e.viramabengali=2509,e.viramadeva=2381,e.viramagujarati=2765,e.visargabengali=2435,e.visargadeva=2307,e.visargagujarati=2691,e.vmonospace=65366,e.voarmenian=1400,e.voicediterationhiragana=12446,e.voicediterationkatakana=12542,e.voicedmarkkana=12443,e.voicedmarkkanahalfwidth=65438,e.vokatakana=12538,e.vparen=9393,e.vtilde=7805,e.vturned=652,e.vuhiragana=12436,e.vukatakana=12532,e.w=119,e.wacute=7811,e.waekorean=12633,e.wahiragana=12431
e.wakatakana=12527,e.wakatakanahalfwidth=65436,e.wakorean=12632,e.wasmallhiragana=12430,e.wasmallkatakana=12526,e.wattosquare=13143,e.wavedash=12316,e.wavyunderscorevertical=65076,e.wawarabic=1608,e.wawfinalarabic=65262,e.wawhamzaabovearabic=1572,e.wawhamzaabovefinalarabic=65158,e.wbsquare=13277,e.wcircle=9446,e.wcircumflex=373,e.wdieresis=7813,e.wdotaccent=7815,e.wdotbelow=7817,e.wehiragana=12433,e.weierstrass=8472,e.wekatakana=12529,e.wekorean=12638,e.weokorean=12637,e.wgrave=7809,e.whitebullet=9702,e.whitecircle=9675,e.whitecircleinverse=9689,e.whitecornerbracketleft=12302,e.whitecornerbracketleftvertical=65091,e.whitecornerbracketright=12303
e.whitecornerbracketrightvertical=65092,e.whitediamond=9671,e.whitediamondcontainingblacksmalldiamond=9672,e.whitedownpointingsmalltriangle=9663,e.whitedownpointingtriangle=9661,e.whiteleftpointingsmalltriangle=9667,e.whiteleftpointingtriangle=9665,e.whitelenticularbracketleft=12310,e.whitelenticularbracketright=12311,e.whiterightpointingsmalltriangle=9657,e.whiterightpointingtriangle=9655,e.whitesmallsquare=9643,e.whitesmilingface=9786,e.whitesquare=9633,e.whitestar=9734,e.whitetelephone=9743,e.whitetortoiseshellbracketleft=12312,e.whitetortoiseshellbracketright=12313,e.whiteuppointingsmalltriangle=9653,e.whiteuppointingtriangle=9651,e.wihiragana=12432,e.wikatakana=12528,e.wikorean=12639,e.wmonospace=65367,e.wohiragana=12434,e.wokatakana=12530,e.wokatakanahalfwidth=65382,e.won=8361,e.wonmonospace=65510,e.wowaenthai=3623
e.wparen=9394,e.wring=7832,e.wsuperior=695,e.wturned=653,e.wynn=447,e.x=120,e.xabovecmb=829,e.xbopomofo=12562,e.xcircle=9447,e.xdieresis=7821,e.xdotaccent=7819,e.xeharmenian=1389,e.xi=958,e.xmonospace=65368,e.xparen=9395,e.xsuperior=739,e.y=121,e.yaadosquare=13134,e.yabengali=2479,e.yacute=253,e.yadeva=2351,e.yaekorean=12626,e.yagujarati=2735,e.yagurmukhi=2607,e.yahiragana=12420,e.yakatakana=12516,e.yakatakanahalfwidth=65428,e.yakorean=12625,e.yamakkanthai=3662,e.yasmallhiragana=12419
e.yasmallkatakana=12515,e.yasmallkatakanahalfwidth=65388,e.yatcyrillic=1123,e.ycircle=9448,e.ycircumflex=375,e.ydieresis=255,e.ydotaccent=7823,e.ydotbelow=7925,e.yeharabic=1610,e.yehbarreearabic=1746,e.yehbarreefinalarabic=64431,e.yehfinalarabic=65266,e.yehhamzaabovearabic=1574,e.yehhamzaabovefinalarabic=65162,e.yehhamzaaboveinitialarabic=65163,e.yehhamzaabovemedialarabic=65164,e.yehinitialarabic=65267,e.yehmedialarabic=65268,e.yehmeeminitialarabic=64733,e.yehmeemisolatedarabic=64600,e.yehnoonfinalarabic=64660,e.yehthreedotsbelowarabic=1745,e.yekorean=12630,e.yen=165,e.yenmonospace=65509,e.yeokorean=12629,e.yeorinhieuhkorean=12678,e.yerahbenyomohebrew=1450,e.yerahbenyomolefthebrew=1450,e.yericyrillic=1099
e.yerudieresiscyrillic=1273,e.yesieungkorean=12673,e.yesieungpansioskorean=12675,e.yesieungsioskorean=12674,e.yetivhebrew=1434,e.ygrave=7923,e.yhook=436,e.yhookabove=7927,e.yiarmenian=1397,e.yicyrillic=1111,e.yikorean=12642,e.yinyang=9775,e.yiwnarmenian=1410,e.ymonospace=65369,e.yod=1497,e.yoddagesh=64313,e.yoddageshhebrew=64313,e.yodhebrew=1497,e.yodyodhebrew=1522,e.yodyodpatahhebrew=64287,e.yohiragana=12424,e.yoikorean=12681,e.yokatakana=12520,e.yokatakanahalfwidth=65430,e.yokorean=12635,e.yosmallhiragana=12423,e.yosmallkatakana=12519,e.yosmallkatakanahalfwidth=65390,e.yotgreek=1011,e.yoyaekorean=12680
e.yoyakorean=12679,e.yoyakthai=3618,e.yoyingthai=3597,e.yparen=9396,e.ypogegrammeni=890,e.ypogegrammenigreekcmb=837,e.yr=422,e.yring=7833,e.ysuperior=696,e.ytilde=7929,e.yturned=654,e.yuhiragana=12422,e.yuikorean=12684,e.yukatakana=12518,e.yukatakanahalfwidth=65429,e.yukorean=12640,e.yusbigcyrillic=1131,e.yusbigiotifiedcyrillic=1133,e.yuslittlecyrillic=1127,e.yuslittleiotifiedcyrillic=1129,e.yusmallhiragana=12421,e.yusmallkatakana=12517,e.yusmallkatakanahalfwidth=65389,e.yuyekorean=12683,e.yuyeokorean=12682,e.yyabengali=2527,e.yyadeva=2399,e.z=122,e.zaarmenian=1382,e.zacute=378
e.zadeva=2395,e.zagurmukhi=2651,e.zaharabic=1592,e.zahfinalarabic=65222,e.zahinitialarabic=65223,e.zahiragana=12374,e.zahmedialarabic=65224,e.zainarabic=1586,e.zainfinalarabic=65200,e.zakatakana=12470,e.zaqefgadolhebrew=1429,e.zaqefqatanhebrew=1428,e.zarqahebrew=1432,e.zayin=1494,e.zayindagesh=64310,e.zayindageshhebrew=64310,e.zayinhebrew=1494,e.zbopomofo=12567,e.zcaron=382,e.zcircle=9449,e.zcircumflex=7825,e.zcurl=657,e.zdot=380,e.zdotaccent=380,e.zdotbelow=7827,e.zecyrillic=1079,e.zedescendercyrillic=1177,e.zedieresiscyrillic=1247,e.zehiragana=12380,e.zekatakana=12476
e.zero=48,e.zeroarabic=1632,e.zerobengali=2534,e.zerodeva=2406,e.zerogujarati=2790,e.zerogurmukhi=2662,e.zerohackarabic=1632,e.zeroinferior=8320,e.zeromonospace=65296,e.zerooldstyle=63280,e.zeropersian=1776,e.zerosuperior=8304,e.zerothai=3664,e.zerowidthjoiner=65279,e.zerowidthnonjoiner=8204,e.zerowidthspace=8203,e.zeta=950,e.zhbopomofo=12563,e.zhearmenian=1386,e.zhebrevecyrillic=1218,e.zhecyrillic=1078,e.zhedescendercyrillic=1175,e.zhedieresiscyrillic=1245,e.zihiragana=12376,e.zikatakana=12472,e.zinorhebrew=1454,e.zlinebelow=7829,e.zmonospace=65370,e.zohiragana=12382,e.zokatakana=12478
e.zparen=9397,e.zretroflexhook=656,e.zstroke=438,e.zuhiragana=12378,e.zukatakana=12474,e[".notdef"]=0,e.angbracketleftbig=9001,e.angbracketleftBig=9001,e.angbracketleftbigg=9001,e.angbracketleftBigg=9001,e.angbracketrightBig=9002,e.angbracketrightbig=9002,e.angbracketrightBigg=9002,e.angbracketrightbigg=9002,e.arrowhookleft=8618,e.arrowhookright=8617,e.arrowlefttophalf=8636,e.arrowleftbothalf=8637,e.arrownortheast=8599,e.arrownorthwest=8598,e.arrowrighttophalf=8640,e.arrowrightbothalf=8641,e.arrowsoutheast=8600,e.arrowsouthwest=8601,e.backslashbig=8726,e.backslashBig=8726,e.backslashBigg=8726,e.backslashbigg=8726,e.bardbl=8214,e.bracehtipdownleft=65079
e.bracehtipdownright=65079,e.bracehtipupleft=65080,e.bracehtipupright=65080,e.braceleftBig=123,e.braceleftbig=123,e.braceleftbigg=123,e.braceleftBigg=123,e.bracerightBig=125,e.bracerightbig=125,e.bracerightbigg=125,e.bracerightBigg=125,e.bracketleftbig=91,e.bracketleftBig=91,e.bracketleftbigg=91,e.bracketleftBigg=91,e.bracketrightBig=93,e.bracketrightbig=93,e.bracketrightbigg=93,e.bracketrightBigg=93,e.ceilingleftbig=8968,e.ceilingleftBig=8968,e.ceilingleftBigg=8968,e.ceilingleftbigg=8968,e.ceilingrightbig=8969,e.ceilingrightBig=8969,e.ceilingrightbigg=8969,e.ceilingrightBigg=8969,e.circledotdisplay=8857,e.circledottext=8857,e.circlemultiplydisplay=8855
e.circlemultiplytext=8855,e.circleplusdisplay=8853,e.circleplustext=8853,e.contintegraldisplay=8750,e.contintegraltext=8750,e.coproductdisplay=8720,e.coproducttext=8720,e.floorleftBig=8970,e.floorleftbig=8970,e.floorleftbigg=8970,e.floorleftBigg=8970,e.floorrightbig=8971,e.floorrightBig=8971,e.floorrightBigg=8971,e.floorrightbigg=8971,e.hatwide=770,e.hatwider=770,e.hatwidest=770,e.intercal=7488,e.integraldisplay=8747,e.integraltext=8747,e.intersectiondisplay=8898,e.intersectiontext=8898,e.logicalanddisplay=8743,e.logicalandtext=8743,e.logicalordisplay=8744,e.logicalortext=8744,e.parenleftBig=40,e.parenleftbig=40,e.parenleftBigg=40
e.parenleftbigg=40,e.parenrightBig=41,e.parenrightbig=41,e.parenrightBigg=41,e.parenrightbigg=41,e.prime=8242,e.productdisplay=8719,e.producttext=8719,e.radicalbig=8730,e.radicalBig=8730,e.radicalBigg=8730,e.radicalbigg=8730,e.radicalbt=8730,e.radicaltp=8730,e.radicalvertex=8730,e.slashbig=47,e.slashBig=47,e.slashBigg=47,e.slashbigg=47,e.summationdisplay=8721,e.summationtext=8721,e.tildewide=732,e.tildewider=732,e.tildewidest=732,e.uniondisplay=8899,e.unionmultidisplay=8846,e.unionmultitext=8846,e.unionsqdisplay=8852,e.unionsqtext=8852,e.uniontext=8899
e.vextenddouble=8741,e.vextendsingle=8739})),i=a((function(e){e.space=32,e.a1=9985,e.a2=9986,e.a202=9987,e.a3=9988,e.a4=9742,e.a5=9990,e.a119=9991,e.a118=9992,e.a117=9993,e.a11=9755,e.a12=9758,e.a13=9996,e.a14=9997,e.a15=9998,e.a16=9999,e.a105=1e4,e.a17=10001,e.a18=10002,e.a19=10003,e.a20=10004,e.a21=10005,e.a22=10006,e.a23=10007,e.a24=10008,e.a25=10009,e.a26=10010,e.a27=10011,e.a28=10012,e.a6=10013
e.a7=10014,e.a8=10015,e.a9=10016,e.a10=10017,e.a29=10018,e.a30=10019,e.a31=10020,e.a32=10021,e.a33=10022,e.a34=10023,e.a35=9733,e.a36=10025,e.a37=10026,e.a38=10027,e.a39=10028,e.a40=10029,e.a41=10030,e.a42=10031,e.a43=10032,e.a44=10033,e.a45=10034,e.a46=10035,e.a47=10036,e.a48=10037,e.a49=10038,e.a50=10039,e.a51=10040,e.a52=10041,e.a53=10042,e.a54=10043
e.a55=10044,e.a56=10045,e.a57=10046,e.a58=10047,e.a59=10048,e.a60=10049,e.a61=10050,e.a62=10051,e.a63=10052,e.a64=10053,e.a65=10054,e.a66=10055,e.a67=10056,e.a68=10057,e.a69=10058,e.a70=10059,e.a71=9679,e.a72=10061,e.a73=9632,e.a74=10063,e.a203=10064,e.a75=10065,e.a204=10066,e.a76=9650,e.a77=9660,e.a78=9670,e.a79=10070,e.a81=9687,e.a82=10072,e.a83=10073
e.a84=10074,e.a97=10075,e.a98=10076,e.a99=10077,e.a100=10078,e.a101=10081,e.a102=10082,e.a103=10083,e.a104=10084,e.a106=10085,e.a107=10086,e.a108=10087,e.a112=9827,e.a111=9830,e.a110=9829,e.a109=9824,e.a120=9312,e.a121=9313,e.a122=9314,e.a123=9315,e.a124=9316,e.a125=9317,e.a126=9318,e.a127=9319,e.a128=9320,e.a129=9321,e.a130=10102,e.a131=10103,e.a132=10104,e.a133=10105
e.a134=10106,e.a135=10107,e.a136=10108,e.a137=10109,e.a138=10110,e.a139=10111,e.a140=10112,e.a141=10113,e.a142=10114,e.a143=10115,e.a144=10116,e.a145=10117,e.a146=10118,e.a147=10119,e.a148=10120,e.a149=10121,e.a150=10122,e.a151=10123,e.a152=10124,e.a153=10125,e.a154=10126,e.a155=10127,e.a156=10128,e.a157=10129,e.a158=10130,e.a159=10131,e.a160=10132,e.a161=8594,e.a163=8596,e.a164=8597
e.a196=10136,e.a165=10137,e.a192=10138,e.a166=10139,e.a167=10140,e.a168=10141,e.a169=10142,e.a170=10143,e.a171=10144,e.a172=10145,e.a173=10146,e.a162=10147,e.a174=10148,e.a175=10149,e.a176=10150,e.a177=10151,e.a178=10152,e.a179=10153,e.a193=10154,e.a180=10155,e.a199=10156,e.a181=10157,e.a200=10158,e.a182=10159,e.a201=10161,e.a183=10162,e.a184=10163,e.a197=10164,e.a185=10165,e.a194=10166
e.a198=10167,e.a186=10168,e.a195=10169,e.a187=10170,e.a188=10171,e.a189=10172,e.a190=10173,e.a191=10174,e.a89=10088,e.a90=10089,e.a93=10090,e.a94=10091,e.a91=10092,e.a92=10093,e.a205=10094,e.a85=10095,e.a206=10096,e.a86=10097,e.a87=10098,e.a88=10099,e.a95=10100,e.a96=10101,e[".notdef"]=0}))
t.getGlyphsUnicode=n,t.getDingbatsGlyphsUnicode=i},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.getSupplementalGlyphMapForCalibri=t.getSupplementalGlyphMapForArialBlack=t.getGlyphMapForStandardFonts=t.getSymbolsFonts=t.getSerifFonts=t.getNonStdFontMap=t.getStdFontMap=void 0
var a=r(205),n=(0,a.getLookupTableFactory)((function(e){e.ArialNarrow="Helvetica",e["ArialNarrow-Bold"]="Helvetica-Bold",e["ArialNarrow-BoldItalic"]="Helvetica-BoldOblique",e["ArialNarrow-Italic"]="Helvetica-Oblique",e.ArialBlack="Helvetica",e["ArialBlack-Bold"]="Helvetica-Bold",e["ArialBlack-BoldItalic"]="Helvetica-BoldOblique",e["ArialBlack-Italic"]="Helvetica-Oblique",e["Arial-Black"]="Helvetica",e["Arial-Black-Bold"]="Helvetica-Bold",e["Arial-Black-BoldItalic"]="Helvetica-BoldOblique",e["Arial-Black-Italic"]="Helvetica-Oblique",e.Arial="Helvetica",e["Arial-Bold"]="Helvetica-Bold",e["Arial-BoldItalic"]="Helvetica-BoldOblique",e["Arial-Italic"]="Helvetica-Oblique",e["Arial-BoldItalicMT"]="Helvetica-BoldOblique",e["Arial-BoldMT"]="Helvetica-Bold",e["Arial-ItalicMT"]="Helvetica-Oblique",e.ArialMT="Helvetica",e["Courier-Bold"]="Courier-Bold",e["Courier-BoldItalic"]="Courier-BoldOblique",e["Courier-Italic"]="Courier-Oblique",e.CourierNew="Courier",e["CourierNew-Bold"]="Courier-Bold",e["CourierNew-BoldItalic"]="Courier-BoldOblique",e["CourierNew-Italic"]="Courier-Oblique",e["CourierNewPS-BoldItalicMT"]="Courier-BoldOblique",e["CourierNewPS-BoldMT"]="Courier-Bold",e["CourierNewPS-ItalicMT"]="Courier-Oblique"
e.CourierNewPSMT="Courier",e.Helvetica="Helvetica",e["Helvetica-Bold"]="Helvetica-Bold",e["Helvetica-BoldItalic"]="Helvetica-BoldOblique",e["Helvetica-BoldOblique"]="Helvetica-BoldOblique",e["Helvetica-Italic"]="Helvetica-Oblique",e["Helvetica-Oblique"]="Helvetica-Oblique",e["Symbol-Bold"]="Symbol",e["Symbol-BoldItalic"]="Symbol",e["Symbol-Italic"]="Symbol",e.TimesNewRoman="Times-Roman",e["TimesNewRoman-Bold"]="Times-Bold",e["TimesNewRoman-BoldItalic"]="Times-BoldItalic",e["TimesNewRoman-Italic"]="Times-Italic",e.TimesNewRomanPS="Times-Roman",e["TimesNewRomanPS-Bold"]="Times-Bold",e["TimesNewRomanPS-BoldItalic"]="Times-BoldItalic",e["TimesNewRomanPS-BoldItalicMT"]="Times-BoldItalic",e["TimesNewRomanPS-BoldMT"]="Times-Bold",e["TimesNewRomanPS-Italic"]="Times-Italic",e["TimesNewRomanPS-ItalicMT"]="Times-Italic",e.TimesNewRomanPSMT="Times-Roman",e["TimesNewRomanPSMT-Bold"]="Times-Bold",e["TimesNewRomanPSMT-BoldItalic"]="Times-BoldItalic",e["TimesNewRomanPSMT-Italic"]="Times-Italic"}))
t.getStdFontMap=n
var i=(0,a.getLookupTableFactory)((function(e){e.Calibri="Helvetica",e["Calibri-Bold"]="Helvetica-Bold",e["Calibri-BoldItalic"]="Helvetica-BoldOblique",e["Calibri-Italic"]="Helvetica-Oblique",e.CenturyGothic="Helvetica",e["CenturyGothic-Bold"]="Helvetica-Bold",e["CenturyGothic-BoldItalic"]="Helvetica-BoldOblique",e["CenturyGothic-Italic"]="Helvetica-Oblique",e.ComicSansMS="Comic Sans MS",e["ComicSansMS-Bold"]="Comic Sans MS-Bold",e["ComicSansMS-BoldItalic"]="Comic Sans MS-BoldItalic",e["ComicSansMS-Italic"]="Comic Sans MS-Italic",e.LucidaConsole="Courier",e["LucidaConsole-Bold"]="Courier-Bold",e["LucidaConsole-BoldItalic"]="Courier-BoldOblique",e["LucidaConsole-Italic"]="Courier-Oblique",e["LucidaSans-Demi"]="Helvetica-Bold",e["MS-Gothic"]="MS Gothic",e["MS-Gothic-Bold"]="MS Gothic-Bold",e["MS-Gothic-BoldItalic"]="MS Gothic-BoldItalic",e["MS-Gothic-Italic"]="MS Gothic-Italic",e["MS-Mincho"]="MS Mincho",e["MS-Mincho-Bold"]="MS Mincho-Bold",e["MS-Mincho-BoldItalic"]="MS Mincho-BoldItalic",e["MS-Mincho-Italic"]="MS Mincho-Italic",e["MS-PGothic"]="MS PGothic",e["MS-PGothic-Bold"]="MS PGothic-Bold",e["MS-PGothic-BoldItalic"]="MS PGothic-BoldItalic",e["MS-PGothic-Italic"]="MS PGothic-Italic",e["MS-PMincho"]="MS PMincho"
e["MS-PMincho-Bold"]="MS PMincho-Bold",e["MS-PMincho-BoldItalic"]="MS PMincho-BoldItalic",e["MS-PMincho-Italic"]="MS PMincho-Italic",e.NuptialScript="Times-Italic",e.SegoeUISymbol="Helvetica",e.Wingdings="ZapfDingbats",e["Wingdings-Regular"]="ZapfDingbats"}))
t.getNonStdFontMap=i
var o=(0,a.getLookupTableFactory)((function(e){e["Adobe Jenson"]=!0,e["Adobe Text"]=!0,e.Albertus=!0,e.Aldus=!0,e.Alexandria=!0,e.Algerian=!0,e["American Typewriter"]=!0,e.Antiqua=!0,e.Apex=!0,e.Arno=!0,e.Aster=!0,e.Aurora=!0,e.Baskerville=!0,e.Bell=!0,e.Bembo=!0,e["Bembo Schoolbook"]=!0,e.Benguiat=!0,e["Berkeley Old Style"]=!0,e["Bernhard Modern"]=!0,e["Berthold City"]=!0,e.Bodoni=!0,e["Bauer Bodoni"]=!0,e["Book Antiqua"]=!0,e.Bookman=!0,e["Bordeaux Roman"]=!0,e["Californian FB"]=!0,e.Calisto=!0,e.Calvert=!0,e.Capitals=!0,e.Cambria=!0
e.Cartier=!0,e.Caslon=!0,e.Catull=!0,e.Centaur=!0,e["Century Old Style"]=!0,e["Century Schoolbook"]=!0,e.Chaparral=!0,e["Charis SIL"]=!0,e.Cheltenham=!0,e["Cholla Slab"]=!0,e.Clarendon=!0,e.Clearface=!0,e.Cochin=!0,e.Colonna=!0,e["Computer Modern"]=!0,e["Concrete Roman"]=!0,e.Constantia=!0,e["Cooper Black"]=!0,e.Corona=!0,e.Ecotype=!0,e.Egyptienne=!0,e.Elephant=!0,e.Excelsior=!0,e.Fairfield=!0,e["FF Scala"]=!0,e.Folkard=!0,e.Footlight=!0,e.FreeSerif=!0,e["Friz Quadrata"]=!0,e.Garamond=!0
e.Gentium=!0,e.Georgia=!0,e.Gloucester=!0,e["Goudy Old Style"]=!0,e["Goudy Schoolbook"]=!0,e["Goudy Pro Font"]=!0,e.Granjon=!0,e["Guardian Egyptian"]=!0,e.Heather=!0,e.Hercules=!0,e["High Tower Text"]=!0,e.Hiroshige=!0,e["Hoefler Text"]=!0,e["Humana Serif"]=!0,e.Imprint=!0,e["Ionic No. 5"]=!0,e.Janson=!0,e.Joanna=!0,e.Korinna=!0,e.Lexicon=!0,e["Liberation Serif"]=!0,e["Linux Libertine"]=!0,e.Literaturnaya=!0,e.Lucida=!0,e["Lucida Bright"]=!0,e.Melior=!0,e.Memphis=!0,e.Miller=!0,e.Minion=!0,e.Modern=!0
e["Mona Lisa"]=!0,e["Mrs Eaves"]=!0,e["MS Serif"]=!0,e["Museo Slab"]=!0,e["New York"]=!0,e["Nimbus Roman"]=!0,e["NPS Rawlinson Roadway"]=!0,e.NuptialScript=!0,e.Palatino=!0,e.Perpetua=!0,e.Plantin=!0,e["Plantin Schoolbook"]=!0,e.Playbill=!0,e["Poor Richard"]=!0,e["Rawlinson Roadway"]=!0,e.Renault=!0,e.Requiem=!0,e.Rockwell=!0,e.Roman=!0,e["Rotis Serif"]=!0,e.Sabon=!0,e.Scala=!0,e.Seagull=!0,e.Sistina=!0,e.Souvenir=!0,e.STIX=!0,e["Stone Informal"]=!0,e["Stone Serif"]=!0,e.Sylfaen=!0,e.Times=!0
e.Trajan=!0,e["Trinité"]=!0,e["Trump Mediaeval"]=!0,e.Utopia=!0,e["Vale Type"]=!0,e["Bitstream Vera"]=!0,e["Vera Serif"]=!0,e.Versailles=!0,e.Wanted=!0,e.Weiss=!0,e["Wide Latin"]=!0,e.Windsor=!0,e.XITS=!0}))
t.getSerifFonts=o
var s=(0,a.getLookupTableFactory)((function(e){e.Dingbats=!0,e.Symbol=!0,e.ZapfDingbats=!0}))
t.getSymbolsFonts=s
var c=(0,a.getLookupTableFactory)((function(e){e[2]=10,e[3]=32,e[4]=33,e[5]=34,e[6]=35,e[7]=36,e[8]=37,e[9]=38,e[10]=39,e[11]=40,e[12]=41,e[13]=42,e[14]=43,e[15]=44,e[16]=45,e[17]=46,e[18]=47,e[19]=48,e[20]=49,e[21]=50,e[22]=51,e[23]=52,e[24]=53,e[25]=54,e[26]=55,e[27]=56,e[28]=57,e[29]=58,e[30]=894,e[31]=60
e[32]=61,e[33]=62,e[34]=63,e[35]=64,e[36]=65,e[37]=66,e[38]=67,e[39]=68,e[40]=69,e[41]=70,e[42]=71,e[43]=72,e[44]=73,e[45]=74,e[46]=75,e[47]=76,e[48]=77,e[49]=78,e[50]=79,e[51]=80,e[52]=81,e[53]=82,e[54]=83,e[55]=84,e[56]=85,e[57]=86,e[58]=87,e[59]=88,e[60]=89,e[61]=90
e[62]=91,e[63]=92,e[64]=93,e[65]=94,e[66]=95,e[67]=96,e[68]=97,e[69]=98,e[70]=99,e[71]=100,e[72]=101,e[73]=102,e[74]=103,e[75]=104,e[76]=105,e[77]=106,e[78]=107,e[79]=108,e[80]=109,e[81]=110,e[82]=111,e[83]=112,e[84]=113,e[85]=114,e[86]=115,e[87]=116,e[88]=117,e[89]=118,e[90]=119,e[91]=120
e[92]=121,e[93]=122,e[94]=123,e[95]=124,e[96]=125,e[97]=126,e[98]=196,e[99]=197,e[100]=199,e[101]=201,e[102]=209,e[103]=214,e[104]=220,e[105]=225,e[106]=224,e[107]=226,e[108]=228,e[109]=227,e[110]=229,e[111]=231,e[112]=233,e[113]=232,e[114]=234,e[115]=235,e[116]=237,e[117]=236,e[118]=238,e[119]=239,e[120]=241,e[121]=243
e[122]=242,e[123]=244,e[124]=246,e[125]=245,e[126]=250,e[127]=249,e[128]=251,e[129]=252,e[130]=8224,e[131]=176,e[132]=162,e[133]=163,e[134]=167,e[135]=8226,e[136]=182,e[137]=223,e[138]=174,e[139]=169,e[140]=8482,e[141]=180,e[142]=168,e[143]=8800,e[144]=198,e[145]=216,e[146]=8734,e[147]=177,e[148]=8804,e[149]=8805,e[150]=165,e[151]=181
e[152]=8706,e[153]=8721,e[154]=8719,e[156]=8747,e[157]=170,e[158]=186,e[159]=8486,e[160]=230,e[161]=248,e[162]=191,e[163]=161,e[164]=172,e[165]=8730,e[166]=402,e[167]=8776,e[168]=8710,e[169]=171,e[170]=187,e[171]=8230,e[210]=218,e[223]=711,e[224]=321,e[225]=322,e[227]=353,e[229]=382,e[234]=253,e[252]=263,e[253]=268,e[254]=269,e[258]=258
e[260]=260,e[261]=261,e[265]=280,e[266]=281,e[268]=283,e[269]=313,e[275]=323,e[276]=324,e[278]=328,e[284]=345,e[285]=346,e[286]=347,e[292]=367,e[295]=377,e[296]=378,e[298]=380,e[305]=963,e[306]=964,e[307]=966,e[308]=8215,e[309]=8252,e[310]=8319,e[311]=8359,e[312]=8592,e[313]=8593,e[337]=9552,e[493]=1039,e[494]=1040,e[705]=1524,e[706]=8362
e[710]=64288,e[711]=64298,e[759]=1617,e[761]=1776,e[763]=1778,e[775]=1652,e[777]=1764,e[778]=1780,e[779]=1781,e[780]=1782,e[782]=771,e[783]=64726,e[786]=8363,e[788]=8532,e[790]=768,e[791]=769,e[792]=768,e[795]=803,e[797]=64336,e[798]=64337,e[799]=64342,e[800]=64343,e[801]=64344,e[802]=64345,e[803]=64362,e[804]=64363,e[805]=64364,e[2424]=7821,e[2425]=7822,e[2426]=7823
e[2427]=7824,e[2428]=7825,e[2429]=7826,e[2430]=7827,e[2433]=7682,e[2678]=8045,e[2679]=8046,e[2830]=1552,e[2838]=686,e[2840]=751,e[2842]=753,e[2843]=754,e[2844]=755,e[2846]=757,e[2856]=767,e[2857]=848,e[2858]=849,e[2862]=853,e[2863]=854,e[2864]=855,e[2865]=861,e[2866]=862,e[2906]=7460,e[2908]=7462,e[2909]=7463,e[2910]=7464,e[2912]=7466,e[2913]=7467,e[2914]=7468,e[2916]=7470
e[2917]=7471,e[2918]=7472,e[2920]=7474,e[2921]=7475,e[2922]=7476,e[2924]=7478,e[2925]=7479,e[2926]=7480,e[2928]=7482,e[2929]=7483,e[2930]=7484,e[2932]=7486,e[2933]=7487,e[2934]=7488,e[2936]=7490,e[2937]=7491,e[2938]=7492,e[2940]=7494,e[2941]=7495,e[2942]=7496,e[2944]=7498,e[2946]=7500,e[2948]=7502,e[2950]=7504,e[2951]=7505,e[2952]=7506,e[2954]=7508,e[2955]=7509,e[2956]=7510,e[2958]=7512
e[2959]=7513,e[2960]=7514,e[2962]=7516,e[2963]=7517,e[2964]=7518,e[2966]=7520,e[2967]=7521,e[2968]=7522,e[2970]=7524,e[2971]=7525,e[2972]=7526,e[2974]=7528,e[2975]=7529,e[2976]=7530,e[2978]=1537,e[2979]=1538,e[2980]=1539,e[2982]=1549,e[2983]=1551,e[2984]=1552,e[2986]=1554,e[2987]=1555,e[2988]=1556,e[2990]=1623,e[2991]=1624,e[2995]=1775,e[2999]=1791,e[3002]=64290,e[3003]=64291,e[3004]=64292
e[3006]=64294,e[3007]=64295,e[3008]=64296,e[3011]=1900,e[3014]=8223,e[3015]=8244,e[3017]=7532,e[3018]=7533,e[3019]=7534,e[3075]=7590,e[3076]=7591,e[3079]=7594,e[3080]=7595,e[3083]=7598,e[3084]=7599,e[3087]=7602,e[3088]=7603,e[3091]=7606,e[3092]=7607,e[3095]=7610,e[3096]=7611,e[3099]=7614,e[3100]=7615,e[3103]=7618,e[3104]=7619,e[3107]=8337,e[3108]=8338,e[3116]=1884,e[3119]=1885,e[3120]=1885
e[3123]=1886,e[3124]=1886,e[3127]=1887,e[3128]=1887,e[3131]=1888,e[3132]=1888,e[3135]=1889,e[3136]=1889,e[3139]=1890,e[3140]=1890,e[3143]=1891,e[3144]=1891,e[3147]=1892,e[3148]=1892,e[3153]=580,e[3154]=581,e[3157]=584,e[3158]=585,e[3161]=588,e[3162]=589,e[3165]=891,e[3166]=892,e[3169]=1274,e[3170]=1275,e[3173]=1278,e[3174]=1279,e[3181]=7622,e[3182]=7623,e[3282]=11799,e[3316]=578
e[3379]=42785,e[3393]=1159,e[3416]=8377}))
t.getGlyphMapForStandardFonts=c
var l=(0,a.getLookupTableFactory)((function(e){e[227]=322,e[264]=261,e[291]=346}))
t.getSupplementalGlyphMapForArialBlack=l
var u=(0,a.getLookupTableFactory)((function(e){e[1]=32,e[4]=65,e[17]=66,e[18]=67,e[24]=68,e[28]=69,e[38]=70,e[39]=71,e[44]=72,e[47]=73,e[58]=74,e[60]=75,e[62]=76,e[68]=77,e[69]=78,e[75]=79,e[87]=80,e[89]=81,e[90]=82,e[94]=83,e[100]=84,e[104]=85,e[115]=86,e[116]=87,e[121]=88,e[122]=89,e[127]=90,e[258]=97,e[268]=261,e[271]=98
e[272]=99,e[273]=263,e[282]=100,e[286]=101,e[295]=281,e[296]=102,e[336]=103,e[346]=104,e[349]=105,e[361]=106,e[364]=107,e[367]=108,e[371]=322,e[373]=109,e[374]=110,e[381]=111,e[383]=243,e[393]=112,e[395]=113,e[396]=114,e[400]=115,e[401]=347,e[410]=116,e[437]=117,e[448]=118,e[449]=119,e[454]=120,e[455]=121,e[460]=122,e[463]=380
e[853]=44,e[855]=58,e[856]=46,e[876]=47,e[878]=45,e[882]=45,e[894]=40,e[895]=41,e[896]=91,e[897]=93,e[923]=64,e[1004]=48,e[1005]=49,e[1006]=50,e[1007]=51,e[1008]=52,e[1009]=53,e[1010]=54,e[1011]=55,e[1012]=56,e[1013]=57,e[1081]=37,e[1085]=43,e[1086]=45}))
t.getSupplementalGlyphMapForCalibri=u},function(e,t,r){var a=r(205).getLookupTableFactory,n=a((function(e){e[63721]=169,e[63193]=169,e[63720]=174,e[63194]=174,e[63722]=8482,e[63195]=8482,e[63729]=9127,e[63730]=9128,e[63731]=9129,e[63740]=9131,e[63741]=9132,e[63742]=9133,e[63726]=9121,e[63727]=9122,e[63728]=9123,e[63737]=9124,e[63738]=9125,e[63739]=9126,e[63723]=9115,e[63724]=9116,e[63725]=9117,e[63734]=9118,e[63735]=9119,e[63736]=9120}))
var i=[{begin:0,end:127},{begin:128,end:255},{begin:256,end:383},{begin:384,end:591},{begin:592,end:687},{begin:688,end:767},{begin:768,end:879},{begin:880,end:1023},{begin:11392,end:11519},{begin:1024,end:1279},{begin:1328,end:1423},{begin:1424,end:1535},{begin:42240,end:42559},{begin:1536,end:1791},{begin:1984,end:2047},{begin:2304,end:2431},{begin:2432,end:2559},{begin:2560,end:2687},{begin:2688,end:2815},{begin:2816,end:2943},{begin:2944,end:3071},{begin:3072,end:3199},{begin:3200,end:3327},{begin:3328,end:3455},{begin:3584,end:3711},{begin:3712,end:3839},{begin:4256,end:4351},{begin:6912,end:7039},{begin:4352,end:4607},{begin:7680,end:7935},{begin:7936,end:8191},{begin:8192,end:8303},{begin:8304,end:8351},{begin:8352,end:8399},{begin:8400,end:8447},{begin:8448,end:8527},{begin:8528,end:8591},{begin:8592,end:8703},{begin:8704,end:8959},{begin:8960,end:9215},{begin:9216,end:9279},{begin:9280,end:9311},{begin:9312,end:9471},{begin:9472,end:9599},{begin:9600,end:9631},{begin:9632,end:9727},{begin:9728,end:9983},{begin:9984,end:10175},{begin:12288,end:12351},{begin:12352,end:12447},{begin:12448,end:12543},{begin:12544,end:12591},{begin:12592,end:12687},{begin:43072,end:43135},{begin:12800,end:13055},{begin:13056,end:13311},{begin:44032,end:55215},{begin:55296,end:57343},{begin:67840,end:67871},{begin:19968,end:40959},{begin:57344,end:63743},{begin:12736,end:12783},{begin:64256,end:64335},{begin:64336,end:65023},{begin:65056,end:65071},{begin:65040,end:65055},{begin:65104,end:65135},{begin:65136,end:65279},{begin:65280,end:65519},{begin:65520,end:65535},{begin:3840,end:4095},{begin:1792,end:1871},{begin:1920,end:1983},{begin:3456,end:3583},{begin:4096,end:4255},{begin:4608,end:4991},{begin:5024,end:5119},{begin:5120,end:5759},{begin:5760,end:5791},{begin:5792,end:5887},{begin:6016,end:6143},{begin:6144,end:6319},{begin:10240,end:10495},{begin:40960,end:42127},{begin:5888,end:5919},{begin:66304,end:66351},{begin:66352,end:66383},{begin:66560,end:66639},{begin:118784,end:119039},{begin:119808,end:120831},{begin:1044480,end:1048573},{begin:65024,end:65039},{begin:917504,end:917631},{begin:6400,end:6479},{begin:6480,end:6527},{begin:6528,end:6623},{begin:6656,end:6687},{begin:11264,end:11359},{begin:11568,end:11647},{begin:19904,end:19967},{begin:43008,end:43055},{begin:65536,end:65663},{begin:65856,end:65935},{begin:66432,end:66463},{begin:66464,end:66527},{begin:66640,end:66687},{begin:66688,end:66735},{begin:67584,end:67647},{begin:68096,end:68191},{begin:119552,end:119647},{begin:73728,end:74751},{begin:119648,end:119679},{begin:7040,end:7103},{begin:7168,end:7247},{begin:7248,end:7295},{begin:43136,end:43231},{begin:43264,end:43311},{begin:43312,end:43359},{begin:43520,end:43615},{begin:65936,end:65999},{begin:66e3,end:66047},{begin:66208,end:66271},{begin:127024,end:127135}]
var o=a((function(e){e["¨"]=" ̈",e["¯"]=" ̄",e["´"]=" ́",e["µ"]="μ",e["¸"]=" ̧",e["Ĳ"]="IJ",e["ĳ"]="ij",e["Ŀ"]="L·",e["ŀ"]="l·",e["ŉ"]="ʼn",e["ſ"]="s",e["Ǆ"]="DŽ",e["ǅ"]="Dž",e["ǆ"]="dž",e["Ǉ"]="LJ",e["ǈ"]="Lj",e["ǉ"]="lj",e["Ǌ"]="NJ",e["ǋ"]="Nj",e["ǌ"]="nj",e["Ǳ"]="DZ",e["ǲ"]="Dz",e["ǳ"]="dz",e["˘"]=" ̆",e["˙"]=" ̇",e["˚"]=" ̊",e["˛"]=" ̨",e["˜"]=" ̃",e["˝"]=" ̋",e["ͺ"]=" ͅ"
e["΄"]=" ́",e["ϐ"]="β",e["ϑ"]="θ",e["ϒ"]="Υ",e["ϕ"]="φ",e["ϖ"]="π",e["ϰ"]="κ",e["ϱ"]="ρ",e["ϲ"]="ς",e["ϴ"]="Θ",e["ϵ"]="ε",e["Ϲ"]="Σ",e["և"]="եւ",e["ٵ"]="اٴ",e["ٶ"]="وٴ",e["ٷ"]="ۇٴ",e["ٸ"]="يٴ",e["ำ"]="ํา",e["ຳ"]="ໍາ",e["ໜ"]="ຫນ",e["ໝ"]="ຫມ",e["ཷ"]="ྲཱྀ",e["ཹ"]="ླཱྀ",e["ẚ"]="aʾ",e["᾽"]=" ̓",e["᾿"]=" ̓",e["῀"]=" ͂",e["῾"]=" ̔",e[" "]=" ",e[" "]=" "
e[" "]=" ",e[" "]=" ",e[" "]=" ",e[" "]=" ",e[" "]=" ",e[" "]=" ",e["‗"]=" ̳",e["․"]=".",e["‥"]="..",e["…"]="...",e["″"]="′′",e["‴"]="′′′",e["‶"]="‵‵",e["‷"]="‵‵‵",e["‼"]="!!",e["‾"]=" ̅",e["⁇"]="??",e["⁈"]="?!",e["⁉"]="!?",e["⁗"]="′′′′",e[" "]=" ",e["₨"]="Rs",e["℀"]="a/c",e["℁"]="a/s",e["℃"]="°C",e["℅"]="c/o",e["℆"]="c/u",e["ℇ"]="Ɛ",e["℉"]="°F",e["№"]="No"
e["℡"]="TEL",e["ℵ"]="א",e["ℶ"]="ב",e["ℷ"]="ג",e["ℸ"]="ד",e["℻"]="FAX",e["Ⅰ"]="I",e["Ⅱ"]="II",e["Ⅲ"]="III",e["Ⅳ"]="IV",e["Ⅴ"]="V",e["Ⅵ"]="VI",e["Ⅶ"]="VII",e["Ⅷ"]="VIII",e["Ⅸ"]="IX",e["Ⅹ"]="X",e["Ⅺ"]="XI",e["Ⅻ"]="XII",e["Ⅼ"]="L",e["Ⅽ"]="C",e["Ⅾ"]="D",e["Ⅿ"]="M",e["ⅰ"]="i",e["ⅱ"]="ii",e["ⅲ"]="iii",e["ⅳ"]="iv",e["ⅴ"]="v",e["ⅵ"]="vi",e["ⅶ"]="vii",e["ⅷ"]="viii"
e["ⅸ"]="ix",e["ⅹ"]="x",e["ⅺ"]="xi",e["ⅻ"]="xii",e["ⅼ"]="l",e["ⅽ"]="c",e["ⅾ"]="d",e["ⅿ"]="m",e["∬"]="∫∫",e["∭"]="∫∫∫",e["∯"]="∮∮",e["∰"]="∮∮∮",e["⑴"]="(1)",e["⑵"]="(2)",e["⑶"]="(3)",e["⑷"]="(4)",e["⑸"]="(5)",e["⑹"]="(6)",e["⑺"]="(7)",e["⑻"]="(8)",e["⑼"]="(9)",e["⑽"]="(10)",e["⑾"]="(11)",e["⑿"]="(12)",e["⒀"]="(13)",e["⒁"]="(14)",e["⒂"]="(15)",e["⒃"]="(16)",e["⒄"]="(17)",e["⒅"]="(18)"
e["⒆"]="(19)",e["⒇"]="(20)",e["⒈"]="1.",e["⒉"]="2.",e["⒊"]="3.",e["⒋"]="4.",e["⒌"]="5.",e["⒍"]="6.",e["⒎"]="7.",e["⒏"]="8.",e["⒐"]="9.",e["⒑"]="10.",e["⒒"]="11.",e["⒓"]="12.",e["⒔"]="13.",e["⒕"]="14.",e["⒖"]="15.",e["⒗"]="16.",e["⒘"]="17.",e["⒙"]="18.",e["⒚"]="19.",e["⒛"]="20.",e["⒜"]="(a)",e["⒝"]="(b)",e["⒞"]="(c)",e["⒟"]="(d)",e["⒠"]="(e)",e["⒡"]="(f)",e["⒢"]="(g)",e["⒣"]="(h)"
e["⒤"]="(i)",e["⒥"]="(j)",e["⒦"]="(k)",e["⒧"]="(l)",e["⒨"]="(m)",e["⒩"]="(n)",e["⒪"]="(o)",e["⒫"]="(p)",e["⒬"]="(q)",e["⒭"]="(r)",e["⒮"]="(s)",e["⒯"]="(t)",e["⒰"]="(u)",e["⒱"]="(v)",e["⒲"]="(w)",e["⒳"]="(x)",e["⒴"]="(y)",e["⒵"]="(z)",e["⨌"]="∫∫∫∫",e["⩴"]="::=",e["⩵"]="==",e["⩶"]="===",e["⺟"]="母",e["⻳"]="龟",e["⼀"]="一",e["⼁"]="丨",e["⼂"]="丶",e["⼃"]="丿",e["⼄"]="乙",e["⼅"]="亅"
e["⼆"]="二",e["⼇"]="亠",e["⼈"]="人",e["⼉"]="儿",e["⼊"]="入",e["⼋"]="八",e["⼌"]="冂",e["⼍"]="冖",e["⼎"]="冫",e["⼏"]="几",e["⼐"]="凵",e["⼑"]="刀",e["⼒"]="力",e["⼓"]="勹",e["⼔"]="匕",e["⼕"]="匚",e["⼖"]="匸",e["⼗"]="十",e["⼘"]="卜",e["⼙"]="卩",e["⼚"]="厂",e["⼛"]="厶",e["⼜"]="又",e["⼝"]="口",e["⼞"]="囗",e["⼟"]="土",e["⼠"]="士",e["⼡"]="夂",e["⼢"]="夊",e["⼣"]="夕"
e["⼤"]="大",e["⼥"]="女",e["⼦"]="子",e["⼧"]="宀",e["⼨"]="寸",e["⼩"]="小",e["⼪"]="尢",e["⼫"]="尸",e["⼬"]="屮",e["⼭"]="山",e["⼮"]="巛",e["⼯"]="工",e["⼰"]="己",e["⼱"]="巾",e["⼲"]="干",e["⼳"]="幺",e["⼴"]="广",e["⼵"]="廴",e["⼶"]="廾",e["⼷"]="弋",e["⼸"]="弓",e["⼹"]="彐",e["⼺"]="彡",e["⼻"]="彳",e["⼼"]="心",e["⼽"]="戈",e["⼾"]="戶",e["⼿"]="手",e["⽀"]="支",e["⽁"]="攴"
e["⽂"]="文",e["⽃"]="斗",e["⽄"]="斤",e["⽅"]="方",e["⽆"]="无",e["⽇"]="日",e["⽈"]="曰",e["⽉"]="月",e["⽊"]="木",e["⽋"]="欠",e["⽌"]="止",e["⽍"]="歹",e["⽎"]="殳",e["⽏"]="毋",e["⽐"]="比",e["⽑"]="毛",e["⽒"]="氏",e["⽓"]="气",e["⽔"]="水",e["⽕"]="火",e["⽖"]="爪",e["⽗"]="父",e["⽘"]="爻",e["⽙"]="爿",e["⽚"]="片",e["⽛"]="牙",e["⽜"]="牛",e["⽝"]="犬",e["⽞"]="玄",e["⽟"]="玉"
e["⽠"]="瓜",e["⽡"]="瓦",e["⽢"]="甘",e["⽣"]="生",e["⽤"]="用",e["⽥"]="田",e["⽦"]="疋",e["⽧"]="疒",e["⽨"]="癶",e["⽩"]="白",e["⽪"]="皮",e["⽫"]="皿",e["⽬"]="目",e["⽭"]="矛",e["⽮"]="矢",e["⽯"]="石",e["⽰"]="示",e["⽱"]="禸",e["⽲"]="禾",e["⽳"]="穴",e["⽴"]="立",e["⽵"]="竹",e["⽶"]="米",e["⽷"]="糸",e["⽸"]="缶",e["⽹"]="网",e["⽺"]="羊",e["⽻"]="羽",e["⽼"]="老",e["⽽"]="而"
e["⽾"]="耒",e["⽿"]="耳",e["⾀"]="聿",e["⾁"]="肉",e["⾂"]="臣",e["⾃"]="自",e["⾄"]="至",e["⾅"]="臼",e["⾆"]="舌",e["⾇"]="舛",e["⾈"]="舟",e["⾉"]="艮",e["⾊"]="色",e["⾋"]="艸",e["⾌"]="虍",e["⾍"]="虫",e["⾎"]="血",e["⾏"]="行",e["⾐"]="衣",e["⾑"]="襾",e["⾒"]="見",e["⾓"]="角",e["⾔"]="言",e["⾕"]="谷",e["⾖"]="豆",e["⾗"]="豕",e["⾘"]="豸",e["⾙"]="貝",e["⾚"]="赤",e["⾛"]="走"
e["⾜"]="足",e["⾝"]="身",e["⾞"]="車",e["⾟"]="辛",e["⾠"]="辰",e["⾡"]="辵",e["⾢"]="邑",e["⾣"]="酉",e["⾤"]="釆",e["⾥"]="里",e["⾦"]="金",e["⾧"]="長",e["⾨"]="門",e["⾩"]="阜",e["⾪"]="隶",e["⾫"]="隹",e["⾬"]="雨",e["⾭"]="靑",e["⾮"]="非",e["⾯"]="面",e["⾰"]="革",e["⾱"]="韋",e["⾲"]="韭",e["⾳"]="音",e["⾴"]="頁",e["⾵"]="風",e["⾶"]="飛",e["⾷"]="食",e["⾸"]="首",e["⾹"]="香"
e["⾺"]="馬",e["⾻"]="骨",e["⾼"]="高",e["⾽"]="髟",e["⾾"]="鬥",e["⾿"]="鬯",e["⿀"]="鬲",e["⿁"]="鬼",e["⿂"]="魚",e["⿃"]="鳥",e["⿄"]="鹵",e["⿅"]="鹿",e["⿆"]="麥",e["⿇"]="麻",e["⿈"]="黃",e["⿉"]="黍",e["⿊"]="黑",e["⿋"]="黹",e["⿌"]="黽",e["⿍"]="鼎",e["⿎"]="鼓",e["⿏"]="鼠",e["⿐"]="鼻",e["⿑"]="齊",e["⿒"]="齒",e["⿓"]="龍",e["⿔"]="龜",e["⿕"]="龠",e["〶"]="〒",e["〸"]="十"
e["〹"]="卄",e["〺"]="卅",e["゛"]=" ゙",e["゜"]=" ゚",e["ㄱ"]="ᄀ",e["ㄲ"]="ᄁ",e["ㄳ"]="ᆪ",e["ㄴ"]="ᄂ",e["ㄵ"]="ᆬ",e["ㄶ"]="ᆭ",e["ㄷ"]="ᄃ",e["ㄸ"]="ᄄ",e["ㄹ"]="ᄅ",e["ㄺ"]="ᆰ",e["ㄻ"]="ᆱ",e["ㄼ"]="ᆲ",e["ㄽ"]="ᆳ",e["ㄾ"]="ᆴ",e["ㄿ"]="ᆵ",e["ㅀ"]="ᄚ",e["ㅁ"]="ᄆ",e["ㅂ"]="ᄇ",e["ㅃ"]="ᄈ",e["ㅄ"]="ᄡ",e["ㅅ"]="ᄉ",e["ㅆ"]="ᄊ",e["ㅇ"]="ᄋ",e["ㅈ"]="ᄌ",e["ㅉ"]="ᄍ",e["ㅊ"]="ᄎ"
e["ㅋ"]="ᄏ",e["ㅌ"]="ᄐ",e["ㅍ"]="ᄑ",e["ㅎ"]="ᄒ",e["ㅏ"]="ᅡ",e["ㅐ"]="ᅢ",e["ㅑ"]="ᅣ",e["ㅒ"]="ᅤ",e["ㅓ"]="ᅥ",e["ㅔ"]="ᅦ",e["ㅕ"]="ᅧ",e["ㅖ"]="ᅨ",e["ㅗ"]="ᅩ",e["ㅘ"]="ᅪ",e["ㅙ"]="ᅫ",e["ㅚ"]="ᅬ",e["ㅛ"]="ᅭ",e["ㅜ"]="ᅮ",e["ㅝ"]="ᅯ",e["ㅞ"]="ᅰ",e["ㅟ"]="ᅱ",e["ㅠ"]="ᅲ",e["ㅡ"]="ᅳ",e["ㅢ"]="ᅴ",e["ㅣ"]="ᅵ",e["ㅤ"]="ᅠ",e["ㅥ"]="ᄔ",e["ㅦ"]="ᄕ",e["ㅧ"]="ᇇ",e["ㅨ"]="ᇈ"
e["ㅩ"]="ᇌ",e["ㅪ"]="ᇎ",e["ㅫ"]="ᇓ",e["ㅬ"]="ᇗ",e["ㅭ"]="ᇙ",e["ㅮ"]="ᄜ",e["ㅯ"]="ᇝ",e["ㅰ"]="ᇟ",e["ㅱ"]="ᄝ",e["ㅲ"]="ᄞ",e["ㅳ"]="ᄠ",e["ㅴ"]="ᄢ",e["ㅵ"]="ᄣ",e["ㅶ"]="ᄧ",e["ㅷ"]="ᄩ",e["ㅸ"]="ᄫ",e["ㅹ"]="ᄬ",e["ㅺ"]="ᄭ",e["ㅻ"]="ᄮ",e["ㅼ"]="ᄯ",e["ㅽ"]="ᄲ",e["ㅾ"]="ᄶ",e["ㅿ"]="ᅀ",e["ㆀ"]="ᅇ",e["ㆁ"]="ᅌ",e["ㆂ"]="ᇱ",e["ㆃ"]="ᇲ",e["ㆄ"]="ᅗ",e["ㆅ"]="ᅘ",e["ㆆ"]="ᅙ"
e["ㆇ"]="ᆄ",e["ㆈ"]="ᆅ",e["ㆉ"]="ᆈ",e["ㆊ"]="ᆑ",e["ㆋ"]="ᆒ",e["ㆌ"]="ᆔ",e["ㆍ"]="ᆞ",e["ㆎ"]="ᆡ",e["㈀"]="(ᄀ)",e["㈁"]="(ᄂ)",e["㈂"]="(ᄃ)",e["㈃"]="(ᄅ)",e["㈄"]="(ᄆ)",e["㈅"]="(ᄇ)",e["㈆"]="(ᄉ)",e["㈇"]="(ᄋ)",e["㈈"]="(ᄌ)",e["㈉"]="(ᄎ)",e["㈊"]="(ᄏ)",e["㈋"]="(ᄐ)",e["㈌"]="(ᄑ)",e["㈍"]="(ᄒ)",e["㈎"]="(가)",e["㈏"]="(나)",e["㈐"]="(다)",e["㈑"]="(라)",e["㈒"]="(마)",e["㈓"]="(바)",e["㈔"]="(사)",e["㈕"]="(아)"
e["㈖"]="(자)",e["㈗"]="(차)",e["㈘"]="(카)",e["㈙"]="(타)",e["㈚"]="(파)",e["㈛"]="(하)",e["㈜"]="(주)",e["㈝"]="(오전)",e["㈞"]="(오후)",e["㈠"]="(一)",e["㈡"]="(二)",e["㈢"]="(三)",e["㈣"]="(四)",e["㈤"]="(五)",e["㈥"]="(六)",e["㈦"]="(七)",e["㈧"]="(八)",e["㈨"]="(九)",e["㈩"]="(十)",e["㈪"]="(月)",e["㈫"]="(火)",e["㈬"]="(水)",e["㈭"]="(木)",e["㈮"]="(金)",e["㈯"]="(土)",e["㈰"]="(日)",e["㈱"]="(株)",e["㈲"]="(有)",e["㈳"]="(社)",e["㈴"]="(名)"
e["㈵"]="(特)",e["㈶"]="(財)",e["㈷"]="(祝)",e["㈸"]="(労)",e["㈹"]="(代)",e["㈺"]="(呼)",e["㈻"]="(学)",e["㈼"]="(監)",e["㈽"]="(企)",e["㈾"]="(資)",e["㈿"]="(協)",e["㉀"]="(祭)",e["㉁"]="(休)",e["㉂"]="(自)",e["㉃"]="(至)",e["㋀"]="1月",e["㋁"]="2月",e["㋂"]="3月",e["㋃"]="4月",e["㋄"]="5月",e["㋅"]="6月",e["㋆"]="7月",e["㋇"]="8月",e["㋈"]="9月",e["㋉"]="10月",e["㋊"]="11月",e["㋋"]="12月",e["㍘"]="0点",e["㍙"]="1点",e["㍚"]="2点"
e["㍛"]="3点",e["㍜"]="4点",e["㍝"]="5点",e["㍞"]="6点",e["㍟"]="7点",e["㍠"]="8点",e["㍡"]="9点",e["㍢"]="10点",e["㍣"]="11点",e["㍤"]="12点",e["㍥"]="13点",e["㍦"]="14点",e["㍧"]="15点",e["㍨"]="16点",e["㍩"]="17点",e["㍪"]="18点",e["㍫"]="19点",e["㍬"]="20点",e["㍭"]="21点",e["㍮"]="22点",e["㍯"]="23点",e["㍰"]="24点",e["㏠"]="1日",e["㏡"]="2日",e["㏢"]="3日",e["㏣"]="4日",e["㏤"]="5日",e["㏥"]="6日",e["㏦"]="7日",e["㏧"]="8日"
e["㏨"]="9日",e["㏩"]="10日",e["㏪"]="11日",e["㏫"]="12日",e["㏬"]="13日",e["㏭"]="14日",e["㏮"]="15日",e["㏯"]="16日",e["㏰"]="17日",e["㏱"]="18日",e["㏲"]="19日",e["㏳"]="20日",e["㏴"]="21日",e["㏵"]="22日",e["㏶"]="23日",e["㏷"]="24日",e["㏸"]="25日",e["㏹"]="26日",e["㏺"]="27日",e["㏻"]="28日",e["㏼"]="29日",e["㏽"]="30日",e["㏾"]="31日",e["ﬀ"]="ff",e["ﬁ"]="fi",e["ﬂ"]="fl",e["ﬃ"]="ffi",e["ﬄ"]="ffl",e["ﬅ"]="ſt",e["ﬆ"]="st"
e["ﬓ"]="մն",e["ﬔ"]="մե",e["ﬕ"]="մի",e["ﬖ"]="վն",e["ﬗ"]="մխ",e["ﭏ"]="אל",e["ﭐ"]="ٱ",e["ﭑ"]="ٱ",e["ﭒ"]="ٻ",e["ﭓ"]="ٻ",e["ﭔ"]="ٻ",e["ﭕ"]="ٻ",e["ﭖ"]="پ",e["ﭗ"]="پ",e["ﭘ"]="پ",e["ﭙ"]="پ",e["ﭚ"]="ڀ",e["ﭛ"]="ڀ",e["ﭜ"]="ڀ",e["ﭝ"]="ڀ",e["ﭞ"]="ٺ",e["ﭟ"]="ٺ",e["ﭠ"]="ٺ",e["ﭡ"]="ٺ",e["ﭢ"]="ٿ",e["ﭣ"]="ٿ",e["ﭤ"]="ٿ",e["ﭥ"]="ٿ",e["ﭦ"]="ٹ",e["ﭧ"]="ٹ"
e["ﭨ"]="ٹ",e["ﭩ"]="ٹ",e["ﭪ"]="ڤ",e["ﭫ"]="ڤ",e["ﭬ"]="ڤ",e["ﭭ"]="ڤ",e["ﭮ"]="ڦ",e["ﭯ"]="ڦ",e["ﭰ"]="ڦ",e["ﭱ"]="ڦ",e["ﭲ"]="ڄ",e["ﭳ"]="ڄ",e["ﭴ"]="ڄ",e["ﭵ"]="ڄ",e["ﭶ"]="ڃ",e["ﭷ"]="ڃ",e["ﭸ"]="ڃ",e["ﭹ"]="ڃ",e["ﭺ"]="چ",e["ﭻ"]="چ",e["ﭼ"]="چ",e["ﭽ"]="چ",e["ﭾ"]="ڇ",e["ﭿ"]="ڇ",e["ﮀ"]="ڇ",e["ﮁ"]="ڇ",e["ﮂ"]="ڍ",e["ﮃ"]="ڍ",e["ﮄ"]="ڌ",e["ﮅ"]="ڌ"
e["ﮆ"]="ڎ",e["ﮇ"]="ڎ",e["ﮈ"]="ڈ",e["ﮉ"]="ڈ",e["ﮊ"]="ژ",e["ﮋ"]="ژ",e["ﮌ"]="ڑ",e["ﮍ"]="ڑ",e["ﮎ"]="ک",e["ﮏ"]="ک",e["ﮐ"]="ک",e["ﮑ"]="ک",e["ﮒ"]="گ",e["ﮓ"]="گ",e["ﮔ"]="گ",e["ﮕ"]="گ",e["ﮖ"]="ڳ",e["ﮗ"]="ڳ",e["ﮘ"]="ڳ",e["ﮙ"]="ڳ",e["ﮚ"]="ڱ",e["ﮛ"]="ڱ",e["ﮜ"]="ڱ",e["ﮝ"]="ڱ",e["ﮞ"]="ں",e["ﮟ"]="ں",e["ﮠ"]="ڻ",e["ﮡ"]="ڻ",e["ﮢ"]="ڻ",e["ﮣ"]="ڻ"
e["ﮤ"]="ۀ",e["ﮥ"]="ۀ",e["ﮦ"]="ہ",e["ﮧ"]="ہ",e["ﮨ"]="ہ",e["ﮩ"]="ہ",e["ﮪ"]="ھ",e["ﮫ"]="ھ",e["ﮬ"]="ھ",e["ﮭ"]="ھ",e["ﮮ"]="ے",e["ﮯ"]="ے",e["ﮰ"]="ۓ",e["ﮱ"]="ۓ",e["ﯓ"]="ڭ",e["ﯔ"]="ڭ",e["ﯕ"]="ڭ",e["ﯖ"]="ڭ",e["ﯗ"]="ۇ",e["ﯘ"]="ۇ",e["ﯙ"]="ۆ",e["ﯚ"]="ۆ",e["ﯛ"]="ۈ",e["ﯜ"]="ۈ",e["ﯝ"]="ٷ",e["ﯞ"]="ۋ",e["ﯟ"]="ۋ",e["ﯠ"]="ۅ",e["ﯡ"]="ۅ",e["ﯢ"]="ۉ"
e["ﯣ"]="ۉ",e["ﯤ"]="ې",e["ﯥ"]="ې",e["ﯦ"]="ې",e["ﯧ"]="ې",e["ﯨ"]="ى",e["ﯩ"]="ى",e["ﯪ"]="ئا",e["ﯫ"]="ئا",e["ﯬ"]="ئە",e["ﯭ"]="ئە",e["ﯮ"]="ئو",e["ﯯ"]="ئو",e["ﯰ"]="ئۇ",e["ﯱ"]="ئۇ",e["ﯲ"]="ئۆ",e["ﯳ"]="ئۆ",e["ﯴ"]="ئۈ",e["ﯵ"]="ئۈ",e["ﯶ"]="ئې",e["ﯷ"]="ئې",e["ﯸ"]="ئې",e["ﯹ"]="ئى",e["ﯺ"]="ئى",e["ﯻ"]="ئى",e["ﯼ"]="ی",e["ﯽ"]="ی",e["ﯾ"]="ی",e["ﯿ"]="ی",e["ﰀ"]="ئج"
e["ﰁ"]="ئح",e["ﰂ"]="ئم",e["ﰃ"]="ئى",e["ﰄ"]="ئي",e["ﰅ"]="بج",e["ﰆ"]="بح",e["ﰇ"]="بخ",e["ﰈ"]="بم",e["ﰉ"]="بى",e["ﰊ"]="بي",e["ﰋ"]="تج",e["ﰌ"]="تح",e["ﰍ"]="تخ",e["ﰎ"]="تم",e["ﰏ"]="تى",e["ﰐ"]="تي",e["ﰑ"]="ثج",e["ﰒ"]="ثم",e["ﰓ"]="ثى",e["ﰔ"]="ثي",e["ﰕ"]="جح",e["ﰖ"]="جم",e["ﰗ"]="حج",e["ﰘ"]="حم",e["ﰙ"]="خج",e["ﰚ"]="خح",e["ﰛ"]="خم",e["ﰜ"]="سج",e["ﰝ"]="سح",e["ﰞ"]="سخ"
e["ﰟ"]="سم",e["ﰠ"]="صح",e["ﰡ"]="صم",e["ﰢ"]="ضج",e["ﰣ"]="ضح",e["ﰤ"]="ضخ",e["ﰥ"]="ضم",e["ﰦ"]="طح",e["ﰧ"]="طم",e["ﰨ"]="ظم",e["ﰩ"]="عج",e["ﰪ"]="عم",e["ﰫ"]="غج",e["ﰬ"]="غم",e["ﰭ"]="فج",e["ﰮ"]="فح",e["ﰯ"]="فخ",e["ﰰ"]="فم",e["ﰱ"]="فى",e["ﰲ"]="في",e["ﰳ"]="قح",e["ﰴ"]="قم",e["ﰵ"]="قى",e["ﰶ"]="قي",e["ﰷ"]="كا",e["ﰸ"]="كج",e["ﰹ"]="كح",e["ﰺ"]="كخ",e["ﰻ"]="كل",e["ﰼ"]="كم"
e["ﰽ"]="كى",e["ﰾ"]="كي",e["ﰿ"]="لج",e["ﱀ"]="لح",e["ﱁ"]="لخ",e["ﱂ"]="لم",e["ﱃ"]="لى",e["ﱄ"]="لي",e["ﱅ"]="مج",e["ﱆ"]="مح",e["ﱇ"]="مخ",e["ﱈ"]="مم",e["ﱉ"]="مى",e["ﱊ"]="مي",e["ﱋ"]="نج",e["ﱌ"]="نح",e["ﱍ"]="نخ",e["ﱎ"]="نم",e["ﱏ"]="نى",e["ﱐ"]="ني",e["ﱑ"]="هج",e["ﱒ"]="هم",e["ﱓ"]="هى",e["ﱔ"]="هي",e["ﱕ"]="يج",e["ﱖ"]="يح",e["ﱗ"]="يخ",e["ﱘ"]="يم",e["ﱙ"]="يى",e["ﱚ"]="يي"
e["ﱛ"]="ذٰ",e["ﱜ"]="رٰ",e["ﱝ"]="ىٰ",e["ﱞ"]=" ٌّ",e["ﱟ"]=" ٍّ",e["ﱠ"]=" َّ",e["ﱡ"]=" ُّ",e["ﱢ"]=" ِّ",e["ﱣ"]=" ّٰ",e["ﱤ"]="ئر",e["ﱥ"]="ئز",e["ﱦ"]="ئم",e["ﱧ"]="ئن",e["ﱨ"]="ئى",e["ﱩ"]="ئي",e["ﱪ"]="بر",e["ﱫ"]="بز",e["ﱬ"]="بم",e["ﱭ"]="بن",e["ﱮ"]="بى",e["ﱯ"]="بي",e["ﱰ"]="تر",e["ﱱ"]="تز",e["ﱲ"]="تم",e["ﱳ"]="تن",e["ﱴ"]="تى",e["ﱵ"]="تي",e["ﱶ"]="ثر",e["ﱷ"]="ثز",e["ﱸ"]="ثم"
e["ﱹ"]="ثن",e["ﱺ"]="ثى",e["ﱻ"]="ثي",e["ﱼ"]="فى",e["ﱽ"]="في",e["ﱾ"]="قى",e["ﱿ"]="قي",e["ﲀ"]="كا",e["ﲁ"]="كل",e["ﲂ"]="كم",e["ﲃ"]="كى",e["ﲄ"]="كي",e["ﲅ"]="لم",e["ﲆ"]="لى",e["ﲇ"]="لي",e["ﲈ"]="ما",e["ﲉ"]="مم",e["ﲊ"]="نر",e["ﲋ"]="نز",e["ﲌ"]="نم",e["ﲍ"]="نن",e["ﲎ"]="نى",e["ﲏ"]="ني",e["ﲐ"]="ىٰ",e["ﲑ"]="ير",e["ﲒ"]="يز",e["ﲓ"]="يم",e["ﲔ"]="ين",e["ﲕ"]="يى",e["ﲖ"]="يي"
e["ﲗ"]="ئج",e["ﲘ"]="ئح",e["ﲙ"]="ئخ",e["ﲚ"]="ئم",e["ﲛ"]="ئه",e["ﲜ"]="بج",e["ﲝ"]="بح",e["ﲞ"]="بخ",e["ﲟ"]="بم",e["ﲠ"]="به",e["ﲡ"]="تج",e["ﲢ"]="تح",e["ﲣ"]="تخ",e["ﲤ"]="تم",e["ﲥ"]="ته",e["ﲦ"]="ثم",e["ﲧ"]="جح",e["ﲨ"]="جم",e["ﲩ"]="حج",e["ﲪ"]="حم",e["ﲫ"]="خج",e["ﲬ"]="خم",e["ﲭ"]="سج",e["ﲮ"]="سح",e["ﲯ"]="سخ",e["ﲰ"]="سم",e["ﲱ"]="صح",e["ﲲ"]="صخ",e["ﲳ"]="صم",e["ﲴ"]="ضج"
e["ﲵ"]="ضح",e["ﲶ"]="ضخ",e["ﲷ"]="ضم",e["ﲸ"]="طح",e["ﲹ"]="ظم",e["ﲺ"]="عج",e["ﲻ"]="عم",e["ﲼ"]="غج",e["ﲽ"]="غم",e["ﲾ"]="فج",e["ﲿ"]="فح",e["ﳀ"]="فخ",e["ﳁ"]="فم",e["ﳂ"]="قح",e["ﳃ"]="قم",e["ﳄ"]="كج",e["ﳅ"]="كح",e["ﳆ"]="كخ",e["ﳇ"]="كل",e["ﳈ"]="كم",e["ﳉ"]="لج",e["ﳊ"]="لح",e["ﳋ"]="لخ",e["ﳌ"]="لم",e["ﳍ"]="له",e["ﳎ"]="مج",e["ﳏ"]="مح",e["ﳐ"]="مخ",e["ﳑ"]="مم",e["ﳒ"]="نج"
e["ﳓ"]="نح",e["ﳔ"]="نخ",e["ﳕ"]="نم",e["ﳖ"]="نه",e["ﳗ"]="هج",e["ﳘ"]="هم",e["ﳙ"]="هٰ",e["ﳚ"]="يج",e["ﳛ"]="يح",e["ﳜ"]="يخ",e["ﳝ"]="يم",e["ﳞ"]="يه",e["ﳟ"]="ئم",e["ﳠ"]="ئه",e["ﳡ"]="بم",e["ﳢ"]="به",e["ﳣ"]="تم",e["ﳤ"]="ته",e["ﳥ"]="ثم",e["ﳦ"]="ثه",e["ﳧ"]="سم",e["ﳨ"]="سه",e["ﳩ"]="شم",e["ﳪ"]="شه",e["ﳫ"]="كل",e["ﳬ"]="كم",e["ﳭ"]="لم",e["ﳮ"]="نم",e["ﳯ"]="نه",e["ﳰ"]="يم"
e["ﳱ"]="يه",e["ﳲ"]="ـَّ",e["ﳳ"]="ـُّ",e["ﳴ"]="ـِّ",e["ﳵ"]="طى",e["ﳶ"]="طي",e["ﳷ"]="عى",e["ﳸ"]="عي",e["ﳹ"]="غى",e["ﳺ"]="غي",e["ﳻ"]="سى",e["ﳼ"]="سي",e["ﳽ"]="شى",e["ﳾ"]="شي",e["ﳿ"]="حى",e["ﴀ"]="حي",e["ﴁ"]="جى",e["ﴂ"]="جي",e["ﴃ"]="خى",e["ﴄ"]="خي",e["ﴅ"]="صى",e["ﴆ"]="صي",e["ﴇ"]="ضى",e["ﴈ"]="ضي",e["ﴉ"]="شج",e["ﴊ"]="شح",e["ﴋ"]="شخ",e["ﴌ"]="شم",e["ﴍ"]="شر",e["ﴎ"]="سر"
e["ﴏ"]="صر",e["ﴐ"]="ضر",e["ﴑ"]="طى",e["ﴒ"]="طي",e["ﴓ"]="عى",e["ﴔ"]="عي",e["ﴕ"]="غى",e["ﴖ"]="غي",e["ﴗ"]="سى",e["ﴘ"]="سي",e["ﴙ"]="شى",e["ﴚ"]="شي",e["ﴛ"]="حى",e["ﴜ"]="حي",e["ﴝ"]="جى",e["ﴞ"]="جي",e["ﴟ"]="خى",e["ﴠ"]="خي",e["ﴡ"]="صى",e["ﴢ"]="صي",e["ﴣ"]="ضى",e["ﴤ"]="ضي",e["ﴥ"]="شج",e["ﴦ"]="شح",e["ﴧ"]="شخ",e["ﴨ"]="شم",e["ﴩ"]="شر",e["ﴪ"]="سر",e["ﴫ"]="صر",e["ﴬ"]="ضر"
e["ﴭ"]="شج",e["ﴮ"]="شح",e["ﴯ"]="شخ",e["ﴰ"]="شم",e["ﴱ"]="سه",e["ﴲ"]="شه",e["ﴳ"]="طم",e["ﴴ"]="سج",e["ﴵ"]="سح",e["ﴶ"]="سخ",e["ﴷ"]="شج",e["ﴸ"]="شح",e["ﴹ"]="شخ",e["ﴺ"]="طم",e["ﴻ"]="ظم",e["ﴼ"]="اً",e["ﴽ"]="اً",e["ﵐ"]="تجم",e["ﵑ"]="تحج",e["ﵒ"]="تحج",e["ﵓ"]="تحم",e["ﵔ"]="تخم",e["ﵕ"]="تمج",e["ﵖ"]="تمح",e["ﵗ"]="تمخ",e["ﵘ"]="جمح",e["ﵙ"]="جمح",e["ﵚ"]="حمي",e["ﵛ"]="حمى",e["ﵜ"]="سحج"
e["ﵝ"]="سجح",e["ﵞ"]="سجى",e["ﵟ"]="سمح",e["ﵠ"]="سمح",e["ﵡ"]="سمج",e["ﵢ"]="سمم",e["ﵣ"]="سمم",e["ﵤ"]="صحح",e["ﵥ"]="صحح",e["ﵦ"]="صمم",e["ﵧ"]="شحم",e["ﵨ"]="شحم",e["ﵩ"]="شجي",e["ﵪ"]="شمخ",e["ﵫ"]="شمخ",e["ﵬ"]="شمم",e["ﵭ"]="شمم",e["ﵮ"]="ضحى",e["ﵯ"]="ضخم",e["ﵰ"]="ضخم",e["ﵱ"]="طمح",e["ﵲ"]="طمح",e["ﵳ"]="طمم",e["ﵴ"]="طمي",e["ﵵ"]="عجم",e["ﵶ"]="عمم",e["ﵷ"]="عمم",e["ﵸ"]="عمى",e["ﵹ"]="غمم",e["ﵺ"]="غمي"
e["ﵻ"]="غمى",e["ﵼ"]="فخم",e["ﵽ"]="فخم",e["ﵾ"]="قمح",e["ﵿ"]="قمم",e["ﶀ"]="لحم",e["ﶁ"]="لحي",e["ﶂ"]="لحى",e["ﶃ"]="لجج",e["ﶄ"]="لجج",e["ﶅ"]="لخم",e["ﶆ"]="لخم",e["ﶇ"]="لمح",e["ﶈ"]="لمح",e["ﶉ"]="محج",e["ﶊ"]="محم",e["ﶋ"]="محي",e["ﶌ"]="مجح",e["ﶍ"]="مجم",e["ﶎ"]="مخج",e["ﶏ"]="مخم",e["ﶒ"]="مجخ",e["ﶓ"]="همج",e["ﶔ"]="همم",e["ﶕ"]="نحم",e["ﶖ"]="نحى",e["ﶗ"]="نجم",e["ﶘ"]="نجم",e["ﶙ"]="نجى",e["ﶚ"]="نمي"
e["ﶛ"]="نمى",e["ﶜ"]="يمم",e["ﶝ"]="يمم",e["ﶞ"]="بخي",e["ﶟ"]="تجي",e["ﶠ"]="تجى",e["ﶡ"]="تخي",e["ﶢ"]="تخى",e["ﶣ"]="تمي",e["ﶤ"]="تمى",e["ﶥ"]="جمي",e["ﶦ"]="جحى",e["ﶧ"]="جمى",e["ﶨ"]="سخى",e["ﶩ"]="صحي",e["ﶪ"]="شحي",e["ﶫ"]="ضحي",e["ﶬ"]="لجي",e["ﶭ"]="لمي",e["ﶮ"]="يحي",e["ﶯ"]="يجي",e["ﶰ"]="يمي",e["ﶱ"]="ممي",e["ﶲ"]="قمي",e["ﶳ"]="نحي",e["ﶴ"]="قمح",e["ﶵ"]="لحم",e["ﶶ"]="عمي",e["ﶷ"]="كمي",e["ﶸ"]="نجح"
e["ﶹ"]="مخي",e["ﶺ"]="لجم",e["ﶻ"]="كمم",e["ﶼ"]="لجم",e["ﶽ"]="نجح",e["ﶾ"]="جحي",e["ﶿ"]="حجي",e["ﷀ"]="مجي",e["ﷁ"]="فمي",e["ﷂ"]="بحي",e["ﷃ"]="كمم",e["ﷄ"]="عجم",e["ﷅ"]="صمم",e["ﷆ"]="سخي",e["ﷇ"]="نجي",e["﹉"]="‾",e["﹊"]="‾",e["﹋"]="‾",e["﹌"]="‾",e["﹍"]="_",e["﹎"]="_",e["﹏"]="_",e["ﺀ"]="ء",e["ﺁ"]="آ",e["ﺂ"]="آ",e["ﺃ"]="أ",e["ﺄ"]="أ",e["ﺅ"]="ؤ",e["ﺆ"]="ؤ",e["ﺇ"]="إ"
e["ﺈ"]="إ",e["ﺉ"]="ئ",e["ﺊ"]="ئ",e["ﺋ"]="ئ",e["ﺌ"]="ئ",e["ﺍ"]="ا",e["ﺎ"]="ا",e["ﺏ"]="ب",e["ﺐ"]="ب",e["ﺑ"]="ب",e["ﺒ"]="ب",e["ﺓ"]="ة",e["ﺔ"]="ة",e["ﺕ"]="ت",e["ﺖ"]="ت",e["ﺗ"]="ت",e["ﺘ"]="ت",e["ﺙ"]="ث",e["ﺚ"]="ث",e["ﺛ"]="ث",e["ﺜ"]="ث",e["ﺝ"]="ج",e["ﺞ"]="ج",e["ﺟ"]="ج",e["ﺠ"]="ج",e["ﺡ"]="ح",e["ﺢ"]="ح",e["ﺣ"]="ح",e["ﺤ"]="ح",e["ﺥ"]="خ"
e["ﺦ"]="خ",e["ﺧ"]="خ",e["ﺨ"]="خ",e["ﺩ"]="د",e["ﺪ"]="د",e["ﺫ"]="ذ",e["ﺬ"]="ذ",e["ﺭ"]="ر",e["ﺮ"]="ر",e["ﺯ"]="ز",e["ﺰ"]="ز",e["ﺱ"]="س",e["ﺲ"]="س",e["ﺳ"]="س",e["ﺴ"]="س",e["ﺵ"]="ش",e["ﺶ"]="ش",e["ﺷ"]="ش",e["ﺸ"]="ش",e["ﺹ"]="ص",e["ﺺ"]="ص",e["ﺻ"]="ص",e["ﺼ"]="ص",e["ﺽ"]="ض",e["ﺾ"]="ض",e["ﺿ"]="ض",e["ﻀ"]="ض",e["ﻁ"]="ط",e["ﻂ"]="ط",e["ﻃ"]="ط"
e["ﻄ"]="ط",e["ﻅ"]="ظ",e["ﻆ"]="ظ",e["ﻇ"]="ظ",e["ﻈ"]="ظ",e["ﻉ"]="ع",e["ﻊ"]="ع",e["ﻋ"]="ع",e["ﻌ"]="ع",e["ﻍ"]="غ",e["ﻎ"]="غ",e["ﻏ"]="غ",e["ﻐ"]="غ",e["ﻑ"]="ف",e["ﻒ"]="ف",e["ﻓ"]="ف",e["ﻔ"]="ف",e["ﻕ"]="ق",e["ﻖ"]="ق",e["ﻗ"]="ق",e["ﻘ"]="ق",e["ﻙ"]="ك",e["ﻚ"]="ك",e["ﻛ"]="ك",e["ﻜ"]="ك",e["ﻝ"]="ل",e["ﻞ"]="ل",e["ﻟ"]="ل",e["ﻠ"]="ل",e["ﻡ"]="م"
e["ﻢ"]="م",e["ﻣ"]="م",e["ﻤ"]="م",e["ﻥ"]="ن",e["ﻦ"]="ن",e["ﻧ"]="ن",e["ﻨ"]="ن",e["ﻩ"]="ه",e["ﻪ"]="ه",e["ﻫ"]="ه",e["ﻬ"]="ه",e["ﻭ"]="و",e["ﻮ"]="و",e["ﻯ"]="ى",e["ﻰ"]="ى",e["ﻱ"]="ي",e["ﻲ"]="ي",e["ﻳ"]="ي",e["ﻴ"]="ي",e["ﻵ"]="لآ",e["ﻶ"]="لآ",e["ﻷ"]="لأ",e["ﻸ"]="لأ",e["ﻹ"]="لإ",e["ﻺ"]="لإ",e["ﻻ"]="لا",e["ﻼ"]="لا"}))
t.mapSpecialUnicodeValues=function(e){return e>=65520&&e<=65535?0:e>=62976&&e<=63743?n()[e]||e:173===e?45:e},t.reverseIfRtl=function(e){var t,r,a=e.length
if(a<=1||!((t=e.charCodeAt(0))>=(r=i[13]).begin&&t<r.end||t>=(r=i[11]).begin&&t<r.end))return e
for(var n="",o=a-1;o>=0;o--)n+=e[o]
return n},t.getUnicodeRangeFor=function(e){for(var t=0,r=i.length;t<r;t++){var a=i[t]
if(e>=a.begin&&e<a.end)return t}return-1},t.getNormalizedUnicodes=o,t.getUnicodeForGlyph=function(e,t){var r=t[e]
if(void 0!==r)return r
if(!e)return-1
if("u"===e[0]){var a,n=e.length
if(7===n&&"n"===e[1]&&"i"===e[2])a=e.substring(3)
else{if(!(n>=5&&n<=7))return-1
a=e.substring(1)}if(a===a.toUpperCase()&&(r=parseInt(a,16))>=0)return r}return-1}},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.FontRendererFactory=void 0
var a=r(5),n=r(228),i=r(231),o=r(230),s=r(209)
function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,a=d(e)
if(t){var n=d(this).constructor
r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments)
return f(this,r)}}function f(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var r=0;r<t.length;r++){var a=t[r]
a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function m(e,t,r){return t&&g(e.prototype,t),r&&g(e,r),e}var v=function(){function e(e,t){return e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3]}function t(e,t){return e[t]<<8|e[t+1]}function r(e){var t=e.length,r=32768
return t<1240?r=107:t<33900&&(r=1131),r}function c(r,n,i){var o,s,c,l=1===t(r,n+2)?e(r,n+8):e(r,n+16),u=t(r,n+l)
if(4===u){t(r,n+l+2)
var h=t(r,n+l+6)>>1
for(s=n+l+14,o=[],c=0;c<h;c++,s+=2)o[c]={end:t(r,s)}
for(s+=2,c=0;c<h;c++,s+=2)o[c].start=t(r,s)
for(c=0;c<h;c++,s+=2)o[c].idDelta=t(r,s)
for(c=0;c<h;c++,s+=2){var f=t(r,s)
if(0!==f){o[c].ids=[]
for(var d=0,p=o[c].end-o[c].start+1;d<p;d++)o[c].ids[d]=t(r,s+f),f+=2}}return o}if(12===u){e(r,n+l+4)
var g=e(r,n+l+12)
for(s=n+l+16,o=[],c=0;c<g;c++)o.push({start:e(r,s),end:e(r,s+4),idDelta:e(r,s+8)-e(r,s)}),s+=12
return o}throw new a.FormatError("unsupported cmap: ".concat(u))}function u(e,t,r,a){var i=new n.CFFParser(new s.Stream(e,t,r-t),{},a).parse()
return{glyphs:i.charStrings.objects,subrs:i.topDict.privateDict&&i.topDict.privateDict.subrsIndex&&i.topDict.privateDict.subrsIndex.objects,gsubrs:i.globalSubrIndex&&i.globalSubrIndex.objects,isCFFCIDFont:i.isCIDFont,fdSelect:i.fdSelect,fdArray:i.fdArray}}function f(e,t){for(var r=t.codePointAt(0),a=0,n=0,i=e.length-1;n<i;){var o=n+i+1>>1
r<e[o].start?i=o-1:n=o}return e[n].start<=r&&r<=e[n].end&&(a=e[n].idDelta+(e[n].ids?e[n].ids[r-e[n].start]:r)&65535),{charCode:r,glyphId:a}}function d(e,t,r){function a(e,r){t.push({cmd:"moveTo",args:[e,r]})}function n(e,r){t.push({cmd:"lineTo",args:[e,r]})}function i(e,r,a,n){t.push({cmd:"quadraticCurveTo",args:[e,r,a,n]})}var o,s=0,c=(e[s]<<24|e[s+1]<<16)>>16,l=0,u=0
if(s+=10,c<0)do{o=e[s]<<8|e[s+1]
var h,f,p=e[s+2]<<8|e[s+3]
s+=4,1&o?(h=(e[s]<<24|e[s+1]<<16)>>16,f=(e[s+2]<<24|e[s+3]<<16)>>16,s+=4):(h=e[s++],f=e[s++]),2&o?(l=h,u=f):(l=0,u=0)
var g=1,m=1,v=0,b=0
8&o?(g=m=(e[s]<<24|e[s+1]<<16)/1073741824,s+=2):64&o?(g=(e[s]<<24|e[s+1]<<16)/1073741824,m=(e[s+2]<<24|e[s+3]<<16)/1073741824,s+=4):128&o&&(g=(e[s]<<24|e[s+1]<<16)/1073741824,v=(e[s+2]<<24|e[s+3]<<16)/1073741824,b=(e[s+4]<<24|e[s+5]<<16)/1073741824,m=(e[s+6]<<24|e[s+7]<<16)/1073741824,s+=8)
var y=r.glyphs[p]
y&&(t.push({cmd:"save"}),t.push({cmd:"transform",args:[g,v,b,m,l,u]}),d(y,t,r),t.push({cmd:"restore"}))}while(32&o)
else{var w,k,S=[]
for(w=0;w<c;w++)S.push(e[s]<<8|e[s+1]),s+=2
s+=2+(e[s]<<8|e[s+1])
for(var x=S[S.length-1]+1,C=[];C.length<x;){var A=1
for(8&(o=e[s++])&&(A+=e[s++]);A-- >0;)C.push({flags:o})}for(w=0;w<x;w++){switch(18&C[w].flags){case 0:l+=(e[s]<<24|e[s+1]<<16)>>16,s+=2
break
case 2:l-=e[s++]
break
case 18:l+=e[s++]}C[w].x=l}for(w=0;w<x;w++){switch(36&C[w].flags){case 0:u+=(e[s]<<24|e[s+1]<<16)>>16,s+=2
break
case 4:u-=e[s++]
break
case 36:u+=e[s++]}C[w].y=u}var O=0
for(s=0;s<c;s++){var T=S[s],I=C.slice(O,T+1)
if(1&I[0].flags)I.push(I[0])
else if(1&I[I.length-1].flags)I.unshift(I[I.length-1])
else{var E={flags:1,x:(I[0].x+I[I.length-1].x)/2,y:(I[0].y+I[I.length-1].y)/2}
I.unshift(E),I.push(E)}for(a(I[0].x,I[0].y),w=1,k=I.length;w<k;w++)1&I[w].flags?n(I[w].x,I[w].y):1&I[w+1].flags?(i(I[w].x,I[w].y,I[w+1].x,I[w+1].y),w++):i(I[w].x,I[w].y,(I[w].x+I[w+1].x)/2,(I[w].y+I[w+1].y)/2)
O=T+1}}}function g(e,t,n,i){function s(e,r){t.push({cmd:"moveTo",args:[e,r]})}function c(e,r){t.push({cmd:"lineTo",args:[e,r]})}function l(e,r,a,n,i,o){t.push({cmd:"bezierCurveTo",args:[e,r,a,n,i,o]})}var u=[],h=0,d=0,p=0;(function e(m){for(var v=0;v<m.length;){var b,y,w,k,S,x,C,A,O=!1,T=m[v++]
switch(T){case 1:case 3:p+=u.length>>1,O=!0
break
case 4:d+=u.pop(),s(h,d),O=!0
break
case 5:for(;u.length>0;)h+=u.shift(),d+=u.shift(),c(h,d)
break
case 6:for(;u.length>0&&(c(h+=u.shift(),d),0!==u.length);)d+=u.shift(),c(h,d)
break
case 7:for(;u.length>0&&(d+=u.shift(),c(h,d),0!==u.length);)c(h+=u.shift(),d)
break
case 8:for(;u.length>0;)b=h+u.shift(),w=d+u.shift(),y=b+u.shift(),k=w+u.shift(),h=y+u.shift(),d=k+u.shift(),l(b,w,y,k,h,d)
break
case 10:if(C=u.pop(),A=null,n.isCFFCIDFont){var I=n.fdSelect.getFDIndex(i)
if(I>=0&&I<n.fdArray.length){var E=n.fdArray[I],P=void 0
E.privateDict&&E.privateDict.subrsIndex&&(P=E.privateDict.subrsIndex.objects),P&&(A=P[C+=r(P)])}else(0,a.warn)("Invalid fd index for glyph index.")}else A=n.subrs[C+n.subrsBias]
A&&e(A)
break
case 11:return
case 12:switch(T=m[v++]){case 34:y=(b=h+u.shift())+u.shift(),S=d+u.shift(),h=y+u.shift(),l(b,d,y,S,h,S),y=(b=h+u.shift())+u.shift(),h=y+u.shift(),l(b,S,y,d,h,d)
break
case 35:b=h+u.shift(),w=d+u.shift(),y=b+u.shift(),k=w+u.shift(),h=y+u.shift(),d=k+u.shift(),l(b,w,y,k,h,d),b=h+u.shift(),w=d+u.shift(),y=b+u.shift(),k=w+u.shift(),h=y+u.shift(),d=k+u.shift(),l(b,w,y,k,h,d),u.pop()
break
case 36:l(b=h+u.shift(),S=d+u.shift(),y=b+u.shift(),x=S+u.shift(),h=y+u.shift(),x),l(b=h+u.shift(),x,y=b+u.shift(),x+u.shift(),h=y+u.shift(),d)
break
case 37:var _=h,F=d
b=h+u.shift(),w=d+u.shift(),y=b+u.shift(),k=w+u.shift(),h=y+u.shift(),d=k+u.shift(),l(b,w,y,k,h,d),b=h+u.shift(),w=d+u.shift(),y=b+u.shift(),k=w+u.shift(),h=y,d=k,Math.abs(h-_)>Math.abs(d-F)?h+=u.shift():d+=u.shift(),l(b,w,y,k,h,d)
break
default:throw new a.FormatError("unknown operator: 12 ".concat(T))}break
case 14:if(u.length>=4){var R=u.pop(),B=u.pop()
d=u.pop(),h=u.pop(),t.push({cmd:"save"}),t.push({cmd:"translate",args:[h,d]})
var M=f(n.cmap,String.fromCharCode(n.glyphNameMap[o.StandardEncoding[R]]))
g(n.glyphs[M.glyphId],t,n,M.glyphId),t.push({cmd:"restore"}),M=f(n.cmap,String.fromCharCode(n.glyphNameMap[o.StandardEncoding[B]])),g(n.glyphs[M.glyphId],t,n,M.glyphId)}return
case 18:p+=u.length>>1,O=!0
break
case 19:case 20:v+=(p+=u.length>>1)+7>>3,O=!0
break
case 21:d+=u.pop(),s(h+=u.pop(),d),O=!0
break
case 22:s(h+=u.pop(),d),O=!0
break
case 23:p+=u.length>>1,O=!0
break
case 24:for(;u.length>2;)b=h+u.shift(),w=d+u.shift(),y=b+u.shift(),k=w+u.shift(),h=y+u.shift(),d=k+u.shift(),l(b,w,y,k,h,d)
h+=u.shift(),d+=u.shift(),c(h,d)
break
case 25:for(;u.length>6;)h+=u.shift(),d+=u.shift(),c(h,d)
b=h+u.shift(),w=d+u.shift(),y=b+u.shift(),k=w+u.shift(),h=y+u.shift(),d=k+u.shift(),l(b,w,y,k,h,d)
break
case 26:for(u.length%2&&(h+=u.shift());u.length>0;)b=h,w=d+u.shift(),y=b+u.shift(),k=w+u.shift(),h=y,d=k+u.shift(),l(b,w,y,k,h,d)
break
case 27:for(u.length%2&&(d+=u.shift());u.length>0;)l(b=h+u.shift(),w=d,y=b+u.shift(),k=w+u.shift(),h=y+u.shift(),d=k)
break
case 28:u.push((m[v]<<24|m[v+1]<<16)>>16),v+=2
break
case 29:C=u.pop()+n.gsubrsBias,(A=n.gsubrs[C])&&e(A)
break
case 30:for(;u.length>0&&(b=h,w=d+u.shift(),y=b+u.shift(),k=w+u.shift(),h=y+u.shift(),d=k+(1===u.length?u.shift():0),l(b,w,y,k,h,d),0!==u.length);)b=h+u.shift(),w=d,y=b+u.shift(),k=w+u.shift(),d=k+u.shift(),l(b,w,y,k,h=y+(1===u.length?u.shift():0),d)
break
case 31:for(;u.length>0&&(b=h+u.shift(),w=d,y=b+u.shift(),k=w+u.shift(),d=k+u.shift(),l(b,w,y,k,h=y+(1===u.length?u.shift():0),d),0!==u.length);)b=h,w=d+u.shift(),y=b+u.shift(),k=w+u.shift(),h=y+u.shift(),d=k+(1===u.length?u.shift():0),l(b,w,y,k,h,d)
break
default:if(T<32)throw new a.FormatError("unknown operator: ".concat(T))
T<247?u.push(T-139):T<251?u.push(256*(T-247)+m[v++]+108):T<255?u.push(256*-(T-251)-m[v++]-108):(u.push((m[v]<<24|m[v+1]<<16|m[v+2]<<8|m[v+3])/65536),v+=4)}O&&(u.length=0)}})(e)}var v=[],b=function(){function e(t){p(this,e),this.constructor===e&&(0,a.unreachable)("Cannot initialize CompiledFont."),this.fontMatrix=t,this.compiledGlyphs=Object.create(null),this.compiledCharCodeToGlyphId=Object.create(null)}return m(e,[{key:"getPathJs",value:function(e){var t=f(this.cmap,e),r=this.compiledGlyphs[t.glyphId]
return r||(r=this.compileGlyph(this.glyphs[t.glyphId],t.glyphId),this.compiledGlyphs[t.glyphId]=r),void 0===this.compiledCharCodeToGlyphId[t.charCode]&&(this.compiledCharCodeToGlyphId[t.charCode]=t.glyphId),r}},{key:"compileGlyph",value:function(e,t){if(!e||0===e.length||14===e[0])return v
var r=this.fontMatrix
if(this.isCFFCIDFont){var n=this.fdSelect.getFDIndex(t)
if(n>=0&&n<this.fdArray.length)r=this.fdArray[n].getByName("FontMatrix")||a.FONT_IDENTITY_MATRIX
else(0,a.warn)("Invalid fd index for glyph index.")}var i=[]
return i.push({cmd:"save"}),i.push({cmd:"transform",args:r.slice()}),i.push({cmd:"scale",args:["size","-size"]}),this.compileGlyphImpl(e,i,t),i.push({cmd:"restore"}),i}},{key:"compileGlyphImpl",value:function(){(0,a.unreachable)("Children classes should implement this.")}},{key:"hasBuiltPath",value:function(e){var t=f(this.cmap,e)
return void 0!==this.compiledGlyphs[t.glyphId]&&void 0!==this.compiledCharCodeToGlyphId[t.charCode]}}]),e}(),y=function(e){l(r,e)
var t=h(r)
function r(e,a,n){var i
return p(this,r),(i=t.call(this,n||[488e-6,0,0,488e-6,0,0])).glyphs=e,i.cmap=a,i}return m(r,[{key:"compileGlyphImpl",value:function(e,t){d(e,t,this)}}]),r}(b),w=function(e){l(a,e)
var t=h(a)
function a(e,n,o,s){var c
return p(this,a),(c=t.call(this,o||[.001,0,0,.001,0,0])).glyphs=e.glyphs,c.gsubrs=e.gsubrs||[],c.subrs=e.subrs||[],c.cmap=n,c.glyphNameMap=s||(0,i.getGlyphsUnicode)(),c.gsubrsBias=r(c.gsubrs),c.subrsBias=r(c.subrs),c.isCFFCIDFont=e.isCFFCIDFont,c.fdSelect=e.fdSelect,c.fdArray=e.fdArray,c}return m(a,[{key:"compileGlyphImpl",value:function(e,t,r){g(e,t,this,r)}}]),a}(b)
return{create:function(r,n){for(var i,o,s,l,h,f,d=new Uint8Array(r.data),p=t(d,4),g=0,m=12;g<p;g++,m+=16){var v=(0,a.bytesToString)(d.subarray(m,m+4)),b=e(d,m+8),k=e(d,m+12)
switch(v){case"cmap":i=c(d,b)
break
case"glyf":o=d.subarray(b,b+k)
break
case"loca":s=d.subarray(b,b+k)
break
case"head":f=t(d,b+18),h=t(d,b+50)
break
case"CFF ":l=u(d,b,b+k,n)}}if(o){var S=f?[1/f,0,0,1/f,0,0]:r.fontMatrix
return new y(function(e,t,r){var a,n
r?(a=4,n=function(e,t){return e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3]}):(a=2,n=function(e,t){return e[t]<<9|e[t+1]<<1})
for(var i=[],o=n(t,0),s=a;s<t.length;s+=a){var c=n(t,s)
i.push(e.subarray(o,c)),o=c}return i}(o,s,h),i,S)}return new w(l,i,r.fontMatrix,r.glyphNameMap)}}}()
t.FontRendererFactory=v},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.Type1Parser=void 0
var a=r(230),n=r(205),i=r(209),o=r(5),s=function(){var e=[4],t=[5],r=[6],a=[7],n=[8],i=[12,35],s=[14],c=[21],l=[22],u=[30],h=[31]
function f(){this.width=0,this.lsb=0,this.flexing=!1,this.output=[],this.stack=[]}return f.prototype={convert:function(f,d,p){for(var g,m,v,b=f.length,y=!1,w=0;w<b;w++){var k=f[w]
if(k<32){switch(12===k&&(k=(k<<8)+f[++w]),k){case 1:case 3:this.stack=[]
break
case 4:if(this.flexing){if(this.stack.length<1){y=!0
break}var S=this.stack.pop()
this.stack.push(0,S)
break}y=this.executeCommand(1,e)
break
case 5:y=this.executeCommand(2,t)
break
case 6:y=this.executeCommand(1,r)
break
case 7:y=this.executeCommand(1,a)
break
case 8:y=this.executeCommand(6,n)
break
case 9:this.stack=[]
break
case 10:if(this.stack.length<1){y=!0
break}if(!d[v=this.stack.pop()]){y=!0
break}y=this.convert(d[v],d,p)
break
case 11:return y
case 13:if(this.stack.length<2){y=!0
break}g=this.stack.pop(),m=this.stack.pop(),this.lsb=m,this.width=g,this.stack.push(g,m),y=this.executeCommand(2,l)
break
case 14:this.output.push(s[0])
break
case 21:if(this.flexing)break
y=this.executeCommand(2,c)
break
case 22:if(this.flexing){this.stack.push(0)
break}y=this.executeCommand(1,l)
break
case 30:y=this.executeCommand(4,u)
break
case 31:y=this.executeCommand(4,h)
break
case 3072:case 3073:case 3074:this.stack=[]
break
case 3078:if(p){var x=this.stack[this.stack.length-5]
this.seac=this.stack.splice(-4,4),this.seac[0]+=this.lsb-x,y=this.executeCommand(0,s)}else y=this.executeCommand(4,s)
break
case 3079:if(this.stack.length<4){y=!0
break}this.stack.pop(),g=this.stack.pop()
var C=this.stack.pop()
m=this.stack.pop(),this.lsb=m,this.width=g,this.stack.push(g,m,C),y=this.executeCommand(3,c)
break
case 3084:if(this.stack.length<2){y=!0
break}var A=this.stack.pop(),O=this.stack.pop()
this.stack.push(O/A)
break
case 3088:if(this.stack.length<2){y=!0
break}v=this.stack.pop()
var T=this.stack.pop()
if(0===v&&3===T){var I=this.stack.splice(this.stack.length-17,17)
this.stack.push(I[2]+I[0],I[3]+I[1],I[4],I[5],I[6],I[7],I[8],I[9],I[10],I[11],I[12],I[13],I[14]),y=this.executeCommand(13,i,!0),this.flexing=!1,this.stack.push(I[15],I[16])}else 1===v&&0===T&&(this.flexing=!0)
break
case 3089:break
case 3105:this.stack=[]
break
default:(0,o.warn)('Unknown type 1 charstring command of "'+k+'"')}if(y)break}else k<=246?k-=139:k=k<=250?256*(k-247)+f[++w]+108:k<=254?-256*(k-251)-f[++w]-108:(255&f[++w])<<24|(255&f[++w])<<16|(255&f[++w])<<8|(255&f[++w])<<0,this.stack.push(k)}return y},executeCommand:function(e,t,r){var a=this.stack.length
if(e>a)return!0
for(var n=a-e,i=n;i<a;i++){var o=this.stack[i]
Number.isInteger(o)?this.output.push(28,o>>8&255,255&o):(o=65536*o|0,this.output.push(255,o>>24&255,o>>16&255,o>>8&255,255&o))}return this.output.push.apply(this.output,t),r?this.stack.splice(n,e):this.stack.length=0,!1}},f}(),c=function(){function e(e){return e>=48&&e<=57||e>=65&&e<=70||e>=97&&e<=102}function t(e,t,r){if(r>=e.length)return new Uint8Array(0)
var a,n,i=0|t
for(a=0;a<r;a++)i=52845*(e[a]+i)+22719&65535
var o=e.length-r,s=new Uint8Array(o)
for(a=r,n=0;n<o;a++,n++){var c=e[a]
s[n]=c^i>>8,i=52845*(c+i)+22719&65535}return s}function r(e){return 47===e||91===e||93===e||123===e||125===e||40===e||41===e}function o(r,a,o){if(a){var s=r.getBytes(),c=!((e(s[0])||(0,n.isWhiteSpace)(s[0]))&&e(s[1])&&e(s[2])&&e(s[3])&&e(s[4])&&e(s[5])&&e(s[6])&&e(s[7]))
r=new i.Stream(c?t(s,55665,4):function(t,r,a){var n,i,o=0|r,s=t.length,c=new Uint8Array(s>>>1)
for(n=0,i=0;n<s;n++){var l=t[n]
if(e(l)){var u
for(n++;n<s&&!e(u=t[n]);)n++
if(n<s){var h=parseInt(String.fromCharCode(l,u),16)
c[i++]=h^o>>8,o=52845*(h+o)+22719&65535}}}return c.slice(a,i)}(s,55665,4))}this.seacAnalysisEnabled=!!o,this.stream=r,this.nextChar()}return o.prototype={readNumberArray:function(){this.getToken()
for(var e=[];;){var t=this.getToken()
if(null===t||"]"===t||"}"===t)break
e.push(parseFloat(t||0))}return e},readNumber:function(){var e=this.getToken()
return parseFloat(e||0)},readInt:function(){var e=this.getToken()
return 0|parseInt(e||0,10)},readBoolean:function(){return"true"===this.getToken()?1:0},nextChar:function(){return this.currentChar=this.stream.getByte()},getToken:function(){for(var e=!1,t=this.currentChar;;){if(-1===t)return null
if(e)10!==t&&13!==t||(e=!1)
else if(37===t)e=!0
else if(!(0,n.isWhiteSpace)(t))break
t=this.nextChar()}if(r(t))return this.nextChar(),String.fromCharCode(t)
var a=""
do{a+=String.fromCharCode(t),t=this.nextChar()}while(t>=0&&!(0,n.isWhiteSpace)(t)&&!r(t))
return a},readCharStrings:function(e,r){return-1===r?e:t(e,4330,r)},extractFontProgram:function(e){var t=this.stream,r=[],a=[],n=Object.create(null)
n.lenIV=4
for(var i,o,c,l,u,h={subrs:[],charstrings:[],properties:{privateData:n}};null!==(i=this.getToken());)if("/"===i)switch(i=this.getToken()){case"CharStrings":for(this.getToken(),this.getToken(),this.getToken(),this.getToken();null!==(i=this.getToken())&&"end"!==i;)if("/"===i){var f=this.getToken()
o=this.readInt(),this.getToken(),c=o>0?t.getBytes(o):new Uint8Array(0),l=h.properties.privateData.lenIV,u=this.readCharStrings(c,l),this.nextChar(),"noaccess"===(i=this.getToken())&&this.getToken(),a.push({glyph:f,encoded:u})}break
case"Subrs":for(this.readInt(),this.getToken();"dup"===this.getToken();){var d=this.readInt()
o=this.readInt(),this.getToken(),c=o>0?t.getBytes(o):new Uint8Array(0),l=h.properties.privateData.lenIV,u=this.readCharStrings(c,l),this.nextChar(),"noaccess"===(i=this.getToken())&&this.getToken(),r[d]=u}break
case"BlueValues":case"OtherBlues":case"FamilyBlues":case"FamilyOtherBlues":var p=this.readNumberArray()
p.length>0&&p.length,0
break
case"StemSnapH":case"StemSnapV":h.properties.privateData[i]=this.readNumberArray()
break
case"StdHW":case"StdVW":h.properties.privateData[i]=this.readNumberArray()[0]
break
case"BlueShift":case"lenIV":case"BlueFuzz":case"BlueScale":case"LanguageGroup":case"ExpansionFactor":h.properties.privateData[i]=this.readNumber()
break
case"ForceBold":h.properties.privateData[i]=this.readBoolean()}for(var g=0;g<a.length;g++){f=a[g].glyph,u=a[g].encoded
var m=new s,v=m.convert(u,r,this.seacAnalysisEnabled),b=m.output
v&&(b=[14])
var y={glyphName:f,charstring:b,width:m.width,lsb:m.lsb,seac:m.seac}
if(".notdef"===f?h.charstrings.unshift(y):h.charstrings.push(y),e.builtInEncoding){var w=e.builtInEncoding.indexOf(f)
w>-1&&void 0===e.widths[w]&&w>=e.firstChar&&w<=e.lastChar&&(e.widths[w]=m.width)}}return h},extractFontHeader:function(e){for(var t;null!==(t=this.getToken());)if("/"===t)switch(t=this.getToken()){case"FontMatrix":var r=this.readNumberArray()
e.fontMatrix=r
break
case"Encoding":var n,i=this.getToken()
if(/^\d+$/.test(i)){n=[]
var o=0|parseInt(i,10)
this.getToken()
for(var s=0;s<o;s++){for(t=this.getToken();"dup"!==t&&"def"!==t;)if(null===(t=this.getToken()))return
if("def"===t)break
var c=this.readInt()
this.getToken()
var l=this.getToken()
n[c]=l,this.getToken()}}else n=(0,a.getEncoding)(i)
e.builtInEncoding=n
break
case"FontBBox":var u=this.readNumberArray()
e.ascent=Math.max(u[3],u[1]),e.descent=Math.min(u[1],u[3]),e.ascentScaled=!0}}},o}()
t.Type1Parser=c},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.getTilingPatternIR=function(e,t,r){var n=t.getArray("Matrix"),i=a.Util.normalizeRect(t.getArray("BBox")),o=t.get("XStep"),s=t.get("YStep"),c=t.get("PaintType"),l=t.get("TilingType")
if(i[2]-i[0]==0||i[3]-i[1]==0)throw new a.FormatError("Invalid getTilingPatternIR /BBox array: [".concat(i,"]."))
return["TilingPattern",r,e,n,i,o,s,c,l]},t.Pattern=void 0
var a=r(5),n=r(220),i=r(202),o=r(205),s=2,c=3,l=4,u=5,h=6,f=7,d=function(){function e(){(0,a.unreachable)("should not call Pattern constructor")}return e.prototype={getPattern:function(e){(0,a.unreachable)("Should not call Pattern.getStyle: ".concat(e))}},e.parseShading=function(e,t,r,n,d,g,m){var v=(0,i.isStream)(e)?e.dict:e,b=v.get("ShadingType")
try{switch(b){case s:case c:return new p.RadialAxial(v,t,r,n,g,m)
case l:case u:case h:case f:return new p.Mesh(e,t,r,n,g,m)
default:throw new a.FormatError("Unsupported ShadingType: "+b)}}catch(y){if(y instanceof o.MissingDataException)throw y
return d.send("UnsupportedFeature",{featureId:a.UNSUPPORTED_FEATURES.shadingPattern}),(0,a.warn)(y),new p.Dummy}},e}()
t.Pattern=d
var p={}
p.SMALL_NUMBER=1e-6,p.RadialAxial=function(){function e(e,t,r,i,o,s){this.matrix=t,this.coordsArr=e.getArray("Coords"),this.shadingType=e.get("ShadingType"),this.type="Pattern"
var l=n.ColorSpace.parse({cs:e.getRaw("ColorSpace")||e.getRaw("CS"),xref:r,resources:i,pdfFunctionFactory:o,localColorSpaceCache:s})
this.cs=l
var u=e.getArray("BBox")
Array.isArray(u)&&4===u.length?this.bbox=a.Util.normalizeRect(u):this.bbox=null
var h=0,f=1
if(e.has("Domain")){var d=e.getArray("Domain")
h=d[0],f=d[1]}var g=!1,m=!1
if(e.has("Extend")){var v=e.getArray("Extend")
g=v[0],m=v[1]}if(!(this.shadingType!==c||g&&m)){var b=this.coordsArr[0],y=this.coordsArr[1],w=this.coordsArr[2],k=this.coordsArr[3],S=this.coordsArr[4],x=this.coordsArr[5],C=Math.sqrt((b-k)*(b-k)+(y-S)*(y-S))
w<=x+C&&x<=w+C&&(0,a.warn)("Unsupported radial gradient.")}this.extendStart=g,this.extendEnd=m
var A=e.getRaw("Function"),O=o.createFromArray(A),T=(f-h)/10,I=this.colorStops=[]
if(h>=f||T<=0)(0,a.info)("Bad shading domain.")
else{for(var E,P=new Float32Array(l.numComps),_=new Float32Array(1),F=0;F<=10;F++){_[0]=h+F*T,O(_,0,P,0),E=l.getRgb(P,0)
var R=a.Util.makeCssRgb(E[0],E[1],E[2])
I.push([F/10,R])}var B="transparent"
e.has("Background")&&(E=l.getRgb(e.get("Background"),0),B=a.Util.makeCssRgb(E[0],E[1],E[2])),g||(I.unshift([0,B]),I[1][0]+=p.SMALL_NUMBER),m||(I[I.length-1][0]-=p.SMALL_NUMBER,I.push([1,B])),this.colorStops=I}}return e.prototype={getIR:function(){var e,t,r,n,i,o=this.coordsArr,l=this.shadingType
l===s?(t=[o[0],o[1]],r=[o[2],o[3]],n=null,i=null,e="axial"):l===c?(t=[o[0],o[1]],r=[o[3],o[4]],n=o[2],i=o[5],e="radial"):(0,a.unreachable)("getPattern type unknown: ".concat(l))
var u=this.matrix
if(u&&(t=a.Util.applyTransform(t,u),r=a.Util.applyTransform(r,u),l===c)){var h=a.Util.singularValueDecompose2dScale(u)
n*=h[0],i*=h[1]}return["RadialAxial",e,this.bbox,this.colorStops,t,r,n,i]}},e}(),p.Mesh=function(){function e(e,t){this.stream=e,this.context=t,this.buffer=0,this.bufferLength=0
var r=t.numComps
this.tmpCompsBuf=new Float32Array(r)
var a=t.colorSpace.numComps
this.tmpCsCompsBuf=t.colorFn?new Float32Array(a):this.tmpCompsBuf}e.prototype={get hasData(){if(this.stream.end)return this.stream.pos<this.stream.end
if(this.bufferLength>0)return!0
var e=this.stream.getByte()
return!(e<0)&&(this.buffer=e,this.bufferLength=8,!0)},readBits:function(e){var t=this.buffer,r=this.bufferLength
if(32===e){if(0===r)return(this.stream.getByte()<<24|this.stream.getByte()<<16|this.stream.getByte()<<8|this.stream.getByte())>>>0
t=t<<24|this.stream.getByte()<<16|this.stream.getByte()<<8|this.stream.getByte()
var a=this.stream.getByte()
return this.buffer=a&(1<<r)-1,(t<<8-r|(255&a)>>r)>>>0}if(8===e&&0===r)return this.stream.getByte()
for(;r<e;)t=t<<8|this.stream.getByte(),r+=8
return r-=e,this.bufferLength=r,this.buffer=t&(1<<r)-1,t>>r},align:function(){this.buffer=0,this.bufferLength=0},readFlag:function(){return this.readBits(this.context.bitsPerFlag)},readCoordinate:function(){var e=this.context.bitsPerCoordinate,t=this.readBits(e),r=this.readBits(e),a=this.context.decode,n=e<32?1/((1<<e)-1):2.3283064365386963e-10
return[t*n*(a[1]-a[0])+a[0],r*n*(a[3]-a[2])+a[2]]},readComponents:function(){for(var e=this.context.numComps,t=this.context.bitsPerComponent,r=t<32?1/((1<<t)-1):2.3283064365386963e-10,a=this.context.decode,n=this.tmpCompsBuf,i=0,o=4;i<e;i++,o+=2){var s=this.readBits(t)
n[i]=s*r*(a[o+1]-a[o])+a[o]}var c=this.tmpCsCompsBuf
return this.context.colorFn&&this.context.colorFn(n,0,c,0),this.context.colorSpace.getRgb(c,0)}}
var t,r=(t=[],function(e){return t[e]||(t[e]=function(e){for(var t=[],r=0;r<=e;r++){var a=r/e,n=1-a
t.push(new Float32Array([n*n*n,3*a*n*n,3*a*a*n,a*a*a]))}return t}(e)),t[e]})
function o(e,t){var n=e.figures[t];(0,a.assert)("patch"===n.type,"Unexpected patch mesh figure")
var i=e.coords,o=e.colors,s=n.coords,c=n.colors,l=Math.min(i[s[0]][0],i[s[3]][0],i[s[12]][0],i[s[15]][0]),u=Math.min(i[s[0]][1],i[s[3]][1],i[s[12]][1],i[s[15]][1]),h=Math.max(i[s[0]][0],i[s[3]][0],i[s[12]][0],i[s[15]][0]),f=Math.max(i[s[0]][1],i[s[3]][1],i[s[12]][1],i[s[15]][1]),d=Math.ceil(20*(h-l)/(e.bounds[2]-e.bounds[0]))
d=Math.max(3,Math.min(20,d))
var p=Math.ceil(20*(f-u)/(e.bounds[3]-e.bounds[1]))
p=Math.max(3,Math.min(20,p))
for(var g=d+1,m=new Int32Array((p+1)*g),v=new Int32Array((p+1)*g),b=0,y=new Uint8Array(3),w=new Uint8Array(3),k=o[c[0]],S=o[c[1]],x=o[c[2]],C=o[c[3]],A=r(p),O=r(d),T=0;T<=p;T++){y[0]=(k[0]*(p-T)+x[0]*T)/p|0,y[1]=(k[1]*(p-T)+x[1]*T)/p|0,y[2]=(k[2]*(p-T)+x[2]*T)/p|0,w[0]=(S[0]*(p-T)+C[0]*T)/p|0,w[1]=(S[1]*(p-T)+C[1]*T)/p|0,w[2]=(S[2]*(p-T)+C[2]*T)/p|0
for(var I=0;I<=d;I++,b++)if(0!==T&&T!==p||0!==I&&I!==d){for(var E=0,P=0,_=0,F=0;F<=3;F++)for(var R=0;R<=3;R++,_++){var B=A[T][F]*O[I][R]
E+=i[s[_]][0]*B,P+=i[s[_]][1]*B}m[b]=i.length,i.push([E,P]),v[b]=o.length
var M=new Uint8Array(3)
M[0]=(y[0]*(d-I)+w[0]*I)/d|0,M[1]=(y[1]*(d-I)+w[1]*I)/d|0,M[2]=(y[2]*(d-I)+w[2]*I)/d|0,o.push(M)}}m[0]=s[0],v[0]=c[0],m[d]=s[3],v[d]=c[1],m[g*p]=s[12],v[g*p]=c[2],m[g*p+d]=s[15],v[g*p+d]=c[3],e.figures[t]={type:"lattice",coords:m,colors:v,verticesPerRow:g}}function s(e){for(var t=e.coords[0][0],r=e.coords[0][1],a=t,n=r,i=1,o=e.coords.length;i<o;i++){var s=e.coords[i][0],c=e.coords[i][1]
t=t>s?s:t,r=r>c?c:r,a=a<s?s:a,n=n<c?c:n}e.bounds=[t,r,a,n]}function c(t,r,c,d,p,g){if(!(0,i.isStream)(t))throw new a.FormatError("Mesh data is not a stream")
var m=t.dict
this.matrix=r,this.shadingType=m.get("ShadingType"),this.type="Pattern"
var v=m.getArray("BBox")
Array.isArray(v)&&4===v.length?this.bbox=a.Util.normalizeRect(v):this.bbox=null
var b=n.ColorSpace.parse({cs:m.getRaw("ColorSpace")||m.getRaw("CS"),xref:c,resources:d,pdfFunctionFactory:p,localColorSpaceCache:g})
this.cs=b,this.background=m.has("Background")?b.getRgb(m.get("Background"),0):null
var y=m.getRaw("Function"),w=y?p.createFromArray(y):null
this.coords=[],this.colors=[],this.figures=[]
var k=new e(t,{bitsPerCoordinate:m.get("BitsPerCoordinate"),bitsPerComponent:m.get("BitsPerComponent"),bitsPerFlag:m.get("BitsPerFlag"),decode:m.getArray("Decode"),colorFn:w,colorSpace:b,numComps:w?1:b.numComps}),S=!1
switch(this.shadingType){case l:(function(e,t){for(var r=e.coords,n=e.colors,i=[],o=[],s=0;t.hasData;){var c=t.readFlag(),l=t.readCoordinate(),u=t.readComponents()
if(0===s){if(!(0<=c&&c<=2))throw new a.FormatError("Unknown type4 flag")
switch(c){case 0:s=3
break
case 1:o.push(o[o.length-2],o[o.length-1]),s=1
break
case 2:o.push(o[o.length-3],o[o.length-1]),s=1}i.push(c)}o.push(r.length),r.push(l),n.push(u),s--,t.align()}e.figures.push({type:"triangles",coords:new Int32Array(o),colors:new Int32Array(o)})})(this,k)
break
case u:var x=0|m.get("VerticesPerRow")
if(x<2)throw new a.FormatError("Invalid VerticesPerRow");(function(e,t,r){for(var a=e.coords,n=e.colors,i=[];t.hasData;){var o=t.readCoordinate(),s=t.readComponents()
i.push(a.length),a.push(o),n.push(s)}e.figures.push({type:"lattice",coords:new Int32Array(i),colors:new Int32Array(i),verticesPerRow:r})})(this,k,x)
break
case h:(function(e,t){for(var r=e.coords,n=e.colors,i=new Int32Array(16),o=new Int32Array(4);t.hasData;){var s,c,l=t.readFlag()
if(!(0<=l&&l<=3))throw new a.FormatError("Unknown type6 flag")
var u=r.length
for(s=0,c=0!==l?8:12;s<c;s++)r.push(t.readCoordinate())
var h,f,d,p,g=n.length
for(s=0,c=0!==l?2:4;s<c;s++)n.push(t.readComponents())
switch(l){case 0:i[12]=u+3,i[13]=u+4,i[14]=u+5,i[15]=u+6,i[8]=u+2,i[11]=u+7,i[4]=u+1,i[7]=u+8,i[0]=u,i[1]=u+11,i[2]=u+10,i[3]=u+9,o[2]=g+1,o[3]=g+2,o[0]=g,o[1]=g+3
break
case 1:h=i[12],f=i[13],d=i[14],p=i[15],i[12]=p,i[13]=u+0,i[14]=u+1,i[15]=u+2,i[8]=d,i[11]=u+3,i[4]=f,i[7]=u+4,i[0]=h,i[1]=u+7,i[2]=u+6,i[3]=u+5,h=o[2],f=o[3],o[2]=f,o[3]=g,o[0]=h,o[1]=g+1
break
case 2:h=i[15],f=i[11],i[12]=i[3],i[13]=u+0,i[14]=u+1,i[15]=u+2,i[8]=i[7],i[11]=u+3,i[4]=f,i[7]=u+4,i[0]=h,i[1]=u+7,i[2]=u+6,i[3]=u+5,h=o[3],o[2]=o[1],o[3]=g,o[0]=h,o[1]=g+1
break
case 3:i[12]=i[0],i[13]=u+0,i[14]=u+1,i[15]=u+2,i[8]=i[1],i[11]=u+3,i[4]=i[2],i[7]=u+4,i[0]=i[3],i[1]=u+7,i[2]=u+6,i[3]=u+5,o[2]=o[0],o[3]=g,o[0]=o[1],o[1]=g+1}i[5]=r.length,r.push([(-4*r[i[0]][0]-r[i[15]][0]+6*(r[i[4]][0]+r[i[1]][0])-2*(r[i[12]][0]+r[i[3]][0])+3*(r[i[13]][0]+r[i[7]][0]))/9,(-4*r[i[0]][1]-r[i[15]][1]+6*(r[i[4]][1]+r[i[1]][1])-2*(r[i[12]][1]+r[i[3]][1])+3*(r[i[13]][1]+r[i[7]][1]))/9]),i[6]=r.length,r.push([(-4*r[i[3]][0]-r[i[12]][0]+6*(r[i[2]][0]+r[i[7]][0])-2*(r[i[0]][0]+r[i[15]][0])+3*(r[i[4]][0]+r[i[14]][0]))/9,(-4*r[i[3]][1]-r[i[12]][1]+6*(r[i[2]][1]+r[i[7]][1])-2*(r[i[0]][1]+r[i[15]][1])+3*(r[i[4]][1]+r[i[14]][1]))/9]),i[9]=r.length,r.push([(-4*r[i[12]][0]-r[i[3]][0]+6*(r[i[8]][0]+r[i[13]][0])-2*(r[i[0]][0]+r[i[15]][0])+3*(r[i[11]][0]+r[i[1]][0]))/9,(-4*r[i[12]][1]-r[i[3]][1]+6*(r[i[8]][1]+r[i[13]][1])-2*(r[i[0]][1]+r[i[15]][1])+3*(r[i[11]][1]+r[i[1]][1]))/9]),i[10]=r.length,r.push([(-4*r[i[15]][0]-r[i[0]][0]+6*(r[i[11]][0]+r[i[14]][0])-2*(r[i[12]][0]+r[i[3]][0])+3*(r[i[2]][0]+r[i[8]][0]))/9,(-4*r[i[15]][1]-r[i[0]][1]+6*(r[i[11]][1]+r[i[14]][1])-2*(r[i[12]][1]+r[i[3]][1])+3*(r[i[2]][1]+r[i[8]][1]))/9]),e.figures.push({type:"patch",coords:new Int32Array(i),colors:new Int32Array(o)})}})(this,k),S=!0
break
case f:(function(e,t){for(var r=e.coords,n=e.colors,i=new Int32Array(16),o=new Int32Array(4);t.hasData;){var s,c,l=t.readFlag()
if(!(0<=l&&l<=3))throw new a.FormatError("Unknown type7 flag")
var u=r.length
for(s=0,c=0!==l?12:16;s<c;s++)r.push(t.readCoordinate())
var h,f,d,p,g=n.length
for(s=0,c=0!==l?2:4;s<c;s++)n.push(t.readComponents())
switch(l){case 0:i[12]=u+3,i[13]=u+4,i[14]=u+5,i[15]=u+6,i[8]=u+2,i[9]=u+13,i[10]=u+14,i[11]=u+7,i[4]=u+1,i[5]=u+12,i[6]=u+15,i[7]=u+8,i[0]=u,i[1]=u+11,i[2]=u+10,i[3]=u+9,o[2]=g+1,o[3]=g+2,o[0]=g,o[1]=g+3
break
case 1:h=i[12],f=i[13],d=i[14],p=i[15],i[12]=p,i[13]=u+0,i[14]=u+1,i[15]=u+2,i[8]=d,i[9]=u+9,i[10]=u+10,i[11]=u+3,i[4]=f,i[5]=u+8,i[6]=u+11,i[7]=u+4,i[0]=h,i[1]=u+7,i[2]=u+6,i[3]=u+5,h=o[2],f=o[3],o[2]=f,o[3]=g,o[0]=h,o[1]=g+1
break
case 2:h=i[15],f=i[11],i[12]=i[3],i[13]=u+0,i[14]=u+1,i[15]=u+2,i[8]=i[7],i[9]=u+9,i[10]=u+10,i[11]=u+3,i[4]=f,i[5]=u+8,i[6]=u+11,i[7]=u+4,i[0]=h,i[1]=u+7,i[2]=u+6,i[3]=u+5,h=o[3],o[2]=o[1],o[3]=g,o[0]=h,o[1]=g+1
break
case 3:i[12]=i[0],i[13]=u+0,i[14]=u+1,i[15]=u+2,i[8]=i[1],i[9]=u+9,i[10]=u+10,i[11]=u+3,i[4]=i[2],i[5]=u+8,i[6]=u+11,i[7]=u+4,i[0]=i[3],i[1]=u+7,i[2]=u+6,i[3]=u+5,o[2]=o[0],o[3]=g,o[0]=o[1],o[1]=g+1}e.figures.push({type:"patch",coords:new Int32Array(i),colors:new Int32Array(o)})}})(this,k),S=!0
break
default:(0,a.unreachable)("Unsupported mesh type.")}if(S){s(this)
for(var C=0,A=this.figures.length;C<A;C++)o(this,C)}s(this),function(e){var t,r,a,n,i=e.coords,o=new Float32Array(2*i.length)
for(t=0,a=0,r=i.length;t<r;t++){var s=i[t]
o[a++]=s[0],o[a++]=s[1]}e.coords=o
var c=e.colors,l=new Uint8Array(3*c.length)
for(t=0,a=0,r=c.length;t<r;t++){var u=c[t]
l[a++]=u[0],l[a++]=u[1],l[a++]=u[2]}e.colors=l
var h=e.figures
for(t=0,r=h.length;t<r;t++){var f=h[t],d=f.coords,p=f.colors
for(a=0,n=d.length;a<n;a++)d[a]*=2,p[a]*=3}}(this)}return c.prototype={getIR:function(){return["Mesh",this.shadingType,this.coords,this.colors,this.figures,this.bounds,this.matrix,this.bbox,this.background]}},c}(),p.Dummy=function(){function e(){this.type="Pattern"}return e.prototype={getIR:function(){return["Dummy"]}},e}()},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.isPDFFunction=function(e){var t
if("object"!==s(e))return!1
if((0,a.isDict)(e))t=e
else{if(!(0,a.isStream)(e))return!1
t=e.dict}return t.has("FunctionType")},t.PostScriptCompiler=t.PostScriptEvaluator=t.PDFFunctionFactory=void 0
var a=r(202),n=r(5),i=r(238),o=r(221)
function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var r=0;r<t.length;r++){var a=t[r]
a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var l=function(){function e(t){var r=t.xref,a=t.isEvalSupported,n=void 0===a||a;(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.xref=r,this.isEvalSupported=!1!==n,this._localFunctionCache=null}var t,r,n
return t=e,(r=[{key:"create",value:function(e){var t=this.getCached(e)
if(t)return t
var r=h.parse({xref:this.xref,isEvalSupported:this.isEvalSupported,fn:e instanceof a.Ref?this.xref.fetch(e):e})
return this._cache(e,r),r}},{key:"createFromArray",value:function(e){var t=this.getCached(e)
if(t)return t
var r=h.parseArray({xref:this.xref,isEvalSupported:this.isEvalSupported,fnObj:e instanceof a.Ref?this.xref.fetch(e):e})
return this._cache(e,r),r}},{key:"getCached",value:function(e){var t
if(e instanceof a.Ref?t=e:e instanceof a.Dict?t=e.objId:(0,a.isStream)(e)&&(t=e.dict&&e.dict.objId),t){this._localFunctionCache||(this._localFunctionCache=new o.LocalFunctionCache)
var r=this._localFunctionCache.getByRef(t)
if(r)return r}return null}},{key:"_cache",value:function(e,t){if(!t)throw new Error('PDFFunctionFactory._cache - expected "parsedFunction" argument.')
var r
e instanceof a.Ref?r=e:e instanceof a.Dict?r=e.objId:(0,a.isStream)(e)&&(r=e.dict&&e.dict.objId),r&&(this._localFunctionCache||(this._localFunctionCache=new o.LocalFunctionCache),this._localFunctionCache.set(null,r,t))}}])&&c(t.prototype,r),n&&c(t,n),e}()
function u(e){if(!Array.isArray(e))return null
for(var t=e.length,r=0;r<t;r++)if("number"!=typeof e[r]){for(var a=new Array(t),n=0;n<t;n++)a[n]=+e[n]
return a}return e}t.PDFFunctionFactory=l
var h={getSampleArray:function(e,t,r,a){var n,i,o=1
for(n=0,i=e.length;n<i;n++)o*=e[n]
o*=t
var s=new Array(o),c=0,l=0,u=1/(Math.pow(2,r)-1),h=a.getBytes((o*r+7)/8),f=0
for(n=0;n<o;n++){for(;c<r;)l<<=8,l|=h[f++],c+=8
c-=r,s[n]=(l>>c)*u,l&=(1<<c)-1}return s},getIR:function(e){var t=e.xref,r=e.isEvalSupported,a=e.fn,i=a.dict
i||(i=a)
var o=[this.constructSampled,null,this.constructInterpolated,this.constructStiched,this.constructPostScript][i.get("FunctionType")]
if(!o)throw new n.FormatError("Unknown type of function")
return o.call(this,{xref:t,isEvalSupported:r,fn:a,dict:i})},fromIR:function(e){var t=e.xref,r=e.isEvalSupported,a=e.IR
switch(a[0]){case 0:return this.constructSampledFromIR({xref:t,isEvalSupported:r,IR:a})
case 2:return this.constructInterpolatedFromIR({xref:t,isEvalSupported:r,IR:a})
case 3:return this.constructStichedFromIR({xref:t,isEvalSupported:r,IR:a})
default:return this.constructPostScriptFromIR({xref:t,isEvalSupported:r,IR:a})}},parse:function(e){var t=e.xref,r=e.isEvalSupported,a=e.fn,n=this.getIR({xref:t,isEvalSupported:r,fn:a})
return this.fromIR({xref:t,isEvalSupported:r,IR:n})},parseArray:function(e){var t=e.xref,r=e.isEvalSupported,a=e.fnObj
if(!Array.isArray(a))return this.parse({xref:t,isEvalSupported:r,fn:a})
for(var n=[],i=0,o=a.length;i<o;i++)n.push(this.parse({xref:t,isEvalSupported:r,fn:t.fetchIfRef(a[i])}))
return function(e,t,r,a){for(var i=0,o=n.length;i<o;i++)n[i](e,t,r,a+i)}},constructSampled:function(e){e.xref,e.isEvalSupported
var t=e.fn,r=e.dict
function a(e){for(var t=e.length,r=[],a=0,n=0;n<t;n+=2)r[a]=[e[n],e[n+1]],++a
return r}var i=u(r.getArray("Domain")),o=u(r.getArray("Range"))
if(!i||!o)throw new n.FormatError("No domain or range")
var s=i.length/2,c=o.length/2
i=a(i),o=a(o)
var l=u(r.getArray("Size")),h=r.get("BitsPerSample"),f=r.get("Order")||1
1!==f&&(0,n.info)("No support for cubic spline interpolation: "+f)
var d=u(r.getArray("Encode"))
if(d)d=a(d)
else{d=[]
for(var p=0;p<s;++p)d.push([0,l[p]-1])}var g=u(r.getArray("Decode"))
return[0,s,i,d,g=g?a(g):o,this.getSampleArray(l,c,h,t),l,c,Math.pow(2,h)-1,o]},constructSampledFromIR:function(e){e.xref,e.isEvalSupported
var t=e.IR
function r(e,t,r,a,n){return a+(n-a)/(r-t)*(e-t)}return function(e,a,n,i){var o,s,c=t[1],l=t[2],u=t[3],h=t[4],f=t[5],d=t[6],p=t[7],g=t[9],m=1<<c,v=new Float64Array(m),b=new Uint32Array(m)
for(s=0;s<m;s++)v[s]=1
var y=p,w=1
for(o=0;o<c;++o){var k=l[o][0],S=l[o][1],x=r(Math.min(Math.max(e[a+o],k),S),k,S,u[o][0],u[o][1]),C=d[o],A=(x=Math.min(Math.max(x,0),C-1))<C-1?Math.floor(x):x-1,O=A+1-x,T=x-A,I=A*y,E=I+y
for(s=0;s<m;s++)s&w?(v[s]*=T,b[s]+=E):(v[s]*=O,b[s]+=I)
y*=C,w<<=1}for(s=0;s<p;++s){var P=0
for(o=0;o<m;o++)P+=f[b[o]+s]*v[o]
P=r(P,0,1,h[s][0],h[s][1]),n[i+s]=Math.min(Math.max(P,g[s][0]),g[s][1])}}},constructInterpolated:function(e){e.xref,e.isEvalSupported,e.fn
for(var t=e.dict,r=u(t.getArray("C0"))||[0],a=u(t.getArray("C1"))||[1],n=t.get("N"),i=r.length,o=[],s=0;s<i;++s)o.push(a[s]-r[s])
return[2,r,o,n]},constructInterpolatedFromIR:function(e){e.xref,e.isEvalSupported
var t=e.IR,r=t[1],a=t[2],n=t[3],i=a.length
return function(e,t,o,s){for(var c=1===n?e[t]:Math.pow(e[t],n),l=0;l<i;++l)o[s+l]=r[l]+c*a[l]}},constructStiched:function(e){var t=e.xref,r=e.isEvalSupported,a=(e.fn,e.dict),i=u(a.getArray("Domain"))
if(!i)throw new n.FormatError("No domain")
if(1!=i.length/2)throw new n.FormatError("Bad domain for stiched function")
for(var o=a.get("Functions"),s=[],c=0,l=o.length;c<l;++c)s.push(this.parse({xref:t,isEvalSupported:r,fn:t.fetchIfRef(o[c])}))
return[3,i,u(a.getArray("Bounds")),u(a.getArray("Encode")),s]},constructStichedFromIR:function(e){e.xref,e.isEvalSupported
var t=e.IR,r=t[1],a=t[2],n=t[3],i=t[4],o=new Float32Array(1)
return function(e,t,s,c){for(var l=function(e,t,r){return e>r?e=r:e<t&&(e=t),e}(e[t],r[0],r[1]),u=0,h=a.length;u<h&&!(l<a[u]);++u);var f=r[0]
u>0&&(f=a[u-1])
var d=r[1]
u<a.length&&(d=a[u])
var p=n[2*u],g=n[2*u+1]
o[0]=f===d?p:p+(l-f)*(g-p)/(d-f),i[u](o,0,s,c)}},constructPostScript:function(e){e.xref,e.isEvalSupported
var t=e.fn,r=e.dict,a=u(r.getArray("Domain")),o=u(r.getArray("Range"))
if(!a)throw new n.FormatError("No domain.")
if(!o)throw new n.FormatError("No range.")
var s=new i.PostScriptLexer(t)
return[4,a,o,new i.PostScriptParser(s).parse()]},constructPostScriptFromIR:function(e){e.xref
var t=e.isEvalSupported,r=e.IR,a=r[1],i=r[2],o=r[3]
if(t&&n.IsEvalSupportedCached.value){var s=(new p).compile(o,a,i)
if(s)return new Function("src","srcOffset","dest","destOffset",s)}(0,n.info)("Unable to compile PS function")
var c=i.length>>1,l=a.length>>1,u=new d(o),h=Object.create(null),f=8192,g=new Float32Array(l)
return function(e,t,r,a){var n,o,s="",d=g
for(n=0;n<l;n++)o=e[t+n],d[n]=o,s+=o+"_"
var p=h[s]
if(void 0===p){var m=new Float32Array(c),v=u.execute(d),b=v.length-c
for(n=0;n<c;n++){o=v[b+n]
var y=i[2*n];(o<y||o>(y=i[2*n+1]))&&(o=y),m[n]=o}f>0&&(f--,h[s]=m),r.set(m,a)}else r.set(p,a)}}}
var f=function(){function e(e){this.stack=e?Array.prototype.slice.call(e,0):[]}return e.prototype={push:function(e){if(this.stack.length>=100)throw new Error("PostScript function stack overflow.")
this.stack.push(e)},pop:function(){if(this.stack.length<=0)throw new Error("PostScript function stack underflow.")
return this.stack.pop()},copy:function(e){if(this.stack.length+e>=100)throw new Error("PostScript function stack overflow.")
for(var t=this.stack,r=t.length-e,a=e-1;a>=0;a--,r++)t.push(t[r])},index:function(e){this.push(this.stack[this.stack.length-e-1])},roll:function(e,t){var r,a,n,i=this.stack,o=i.length-e,s=i.length-1,c=o+(t-Math.floor(t/e)*e)
for(r=o,a=s;r<a;r++,a--)n=i[r],i[r]=i[a],i[a]=n
for(r=o,a=c-1;r<a;r++,a--)n=i[r],i[r]=i[a],i[a]=n
for(r=c,a=s;r<a;r++,a--)n=i[r],i[r]=i[a],i[a]=n}},e}(),d=function(){function e(e){this.operators=e}return e.prototype={execute:function(e){for(var t,r,a,i=new f(e),o=0,s=this.operators,c=s.length;o<c;)if("number"!=typeof(t=s[o++]))switch(t){case"jz":a=i.pop(),(r=i.pop())||(o=a)
break
case"j":o=r=i.pop()
break
case"abs":r=i.pop(),i.push(Math.abs(r))
break
case"add":a=i.pop(),r=i.pop(),i.push(r+a)
break
case"and":a=i.pop(),r=i.pop(),(0,n.isBool)(r)&&(0,n.isBool)(a)?i.push(r&&a):i.push(r&a)
break
case"atan":r=i.pop(),i.push(Math.atan(r))
break
case"bitshift":a=i.pop(),(r=i.pop())>0?i.push(r<<a):i.push(r>>a)
break
case"ceiling":r=i.pop(),i.push(Math.ceil(r))
break
case"copy":r=i.pop(),i.copy(r)
break
case"cos":r=i.pop(),i.push(Math.cos(r))
break
case"cvi":r=0|i.pop(),i.push(r)
break
case"cvr":break
case"div":a=i.pop(),r=i.pop(),i.push(r/a)
break
case"dup":i.copy(1)
break
case"eq":a=i.pop(),r=i.pop(),i.push(r===a)
break
case"exch":i.roll(2,1)
break
case"exp":a=i.pop(),r=i.pop(),i.push(Math.pow(r,a))
break
case"false":i.push(!1)
break
case"floor":r=i.pop(),i.push(Math.floor(r))
break
case"ge":a=i.pop(),r=i.pop(),i.push(r>=a)
break
case"gt":a=i.pop(),r=i.pop(),i.push(r>a)
break
case"idiv":a=i.pop(),r=i.pop(),i.push(r/a|0)
break
case"index":r=i.pop(),i.index(r)
break
case"le":a=i.pop(),r=i.pop(),i.push(r<=a)
break
case"ln":r=i.pop(),i.push(Math.log(r))
break
case"log":r=i.pop(),i.push(Math.log(r)/Math.LN10)
break
case"lt":a=i.pop(),r=i.pop(),i.push(r<a)
break
case"mod":a=i.pop(),r=i.pop(),i.push(r%a)
break
case"mul":a=i.pop(),r=i.pop(),i.push(r*a)
break
case"ne":a=i.pop(),r=i.pop(),i.push(r!==a)
break
case"neg":r=i.pop(),i.push(-r)
break
case"not":r=i.pop(),(0,n.isBool)(r)?i.push(!r):i.push(~r)
break
case"or":a=i.pop(),r=i.pop(),(0,n.isBool)(r)&&(0,n.isBool)(a)?i.push(r||a):i.push(r|a)
break
case"pop":i.pop()
break
case"roll":a=i.pop(),r=i.pop(),i.roll(r,a)
break
case"round":r=i.pop(),i.push(Math.round(r))
break
case"sin":r=i.pop(),i.push(Math.sin(r))
break
case"sqrt":r=i.pop(),i.push(Math.sqrt(r))
break
case"sub":a=i.pop(),r=i.pop(),i.push(r-a)
break
case"true":i.push(!0)
break
case"truncate":r=(r=i.pop())<0?Math.ceil(r):Math.floor(r),i.push(r)
break
case"xor":a=i.pop(),r=i.pop(),(0,n.isBool)(r)&&(0,n.isBool)(a)?i.push(r!==a):i.push(r^a)
break
default:throw new n.FormatError("Unknown operator ".concat(t))}else i.push(t)
return i.stack}},e}()
t.PostScriptEvaluator=d
var p=function(){function e(e){this.type=e}function t(t,r,a){e.call(this,"args"),this.index=t,this.min=r,this.max=a}function r(t){e.call(this,"literal"),this.number=t,this.min=t,this.max=t}function a(t,r,a,n,i){e.call(this,"binary"),this.op=t,this.arg1=r,this.arg2=a,this.min=n,this.max=i}function i(t,r){e.call(this,"max"),this.arg=t,this.min=t.min,this.max=r}function o(t,r,a){e.call(this,"var"),this.index=t,this.min=r,this.max=a}function s(t,r){e.call(this,"definition"),this.variable=t,this.arg=r}function c(){this.parts=[]}function l(e,t){return"literal"===t.type&&0===t.number?e:"literal"===e.type&&0===e.number?t:"literal"===t.type&&"literal"===e.type?new r(e.number+t.number):new a("+",e,t,e.min+t.min,e.max+t.max)}function u(e,t){if("literal"===t.type){if(0===t.number)return new r(0)
if(1===t.number)return e
if("literal"===e.type)return new r(e.number*t.number)}if("literal"===e.type){if(0===e.number)return new r(0)
if(1===e.number)return t}return new a("*",e,t,Math.min(e.min*t.min,e.min*t.max,e.max*t.min,e.max*t.max),Math.max(e.min*t.min,e.min*t.max,e.max*t.min,e.max*t.max))}function h(e,t){if("literal"===t.type){if(0===t.number)return e
if("literal"===e.type)return new r(e.number-t.number)}return"binary"===t.type&&"-"===t.op&&"literal"===e.type&&1===e.number&&"literal"===t.arg1.type&&1===t.arg1.number?t.arg2:new a("-",e,t,e.min-t.max,e.max-t.min)}function f(e,t){return e.min>=t?new r(t):e.max<=t?e:new i(e,t)}function d(){}return e.prototype.visit=function(e){(0,n.unreachable)("abstract method")},t.prototype=Object.create(e.prototype),t.prototype.visit=function(e){e.visitArgument(this)},r.prototype=Object.create(e.prototype),r.prototype.visit=function(e){e.visitLiteral(this)},a.prototype=Object.create(e.prototype),a.prototype.visit=function(e){e.visitBinaryOperation(this)},i.prototype=Object.create(e.prototype),i.prototype.visit=function(e){e.visitMin(this)},o.prototype=Object.create(e.prototype),o.prototype.visit=function(e){e.visitVariable(this)},s.prototype=Object.create(e.prototype),s.prototype.visit=function(e){e.visitVariableDefinition(this)},c.prototype={visitArgument:function(e){this.parts.push("Math.max(",e.min,", Math.min(",e.max,", src[srcOffset + ",e.index,"]))")},visitVariable:function(e){this.parts.push("v",e.index)},visitLiteral:function(e){this.parts.push(e.number)},visitBinaryOperation:function(e){this.parts.push("("),e.arg1.visit(this),this.parts.push(" ",e.op," "),e.arg2.visit(this),this.parts.push(")")},visitVariableDefinition:function(e){this.parts.push("var "),e.variable.visit(this),this.parts.push(" = "),e.arg.visit(this),this.parts.push(";")},visitMin:function(e){this.parts.push("Math.min("),e.arg.visit(this),this.parts.push(", ",e.max,")")},toString:function(){return this.parts.join("")}},d.prototype={compile:function(e,a,n){for(var i,d,p,g,m,v,b,y,w=[],k=[],S=a.length>>1,x=n.length>>1,C=0,A=0;A<S;A++)w.push(new t(A,a[2*A],a[2*A+1]))
for(var O=0,T=e.length;O<T;O++)if("number"!=typeof(y=e[O]))switch(y){case"add":if(w.length<2)return null
g=w.pop(),p=w.pop(),w.push(l(p,g))
break
case"cvr":if(w.length<1)return null
break
case"mul":if(w.length<2)return null
g=w.pop(),p=w.pop(),w.push(u(p,g))
break
case"sub":if(w.length<2)return null
g=w.pop(),p=w.pop(),w.push(h(p,g))
break
case"exch":if(w.length<2)return null
m=w.pop(),v=w.pop(),w.push(m,v)
break
case"pop":if(w.length<1)return null
w.pop()
break
case"index":if(w.length<1)return null
if("literal"!==(p=w.pop()).type)return null
if((i=p.number)<0||!Number.isInteger(i)||w.length<i)return null
if("literal"===(m=w[w.length-i-1]).type||"var"===m.type){w.push(m)
break}b=new o(C++,m.min,m.max),w[w.length-i-1]=b,w.push(b),k.push(new s(b,m))
break
case"dup":if(w.length<1)return null
if("number"==typeof e[O+1]&&"gt"===e[O+2]&&e[O+3]===O+7&&"jz"===e[O+4]&&"pop"===e[O+5]&&e[O+6]===e[O+1]){p=w.pop(),w.push(f(p,e[O+1])),O+=6
break}if("literal"===(m=w[w.length-1]).type||"var"===m.type){w.push(m)
break}b=new o(C++,m.min,m.max),w[w.length-1]=b,w.push(b),k.push(new s(b,m))
break
case"roll":if(w.length<2)return null
if(g=w.pop(),p=w.pop(),"literal"!==g.type||"literal"!==p.type)return null
if(d=g.number,(i=p.number)<=0||!Number.isInteger(i)||!Number.isInteger(d)||w.length<i)return null
if(0===(d=(d%i+i)%i))break
Array.prototype.push.apply(w,w.splice(w.length-i,i-d))
break
default:return null}else w.push(new r(y))
if(w.length!==x)return null
var I=[]
return k.forEach((function(e){var t=new c
e.visit(t),I.push(t.toString())})),w.forEach((function(e,t){var r=new c
e.visit(r)
var a=n[2*t],i=n[2*t+1],o=[r.toString()]
a>e.min&&(o.unshift("Math.max(",a,", "),o.push(")")),i<e.max&&(o.unshift("Math.min(",i,", "),o.push(")")),o.unshift("dest[destOffset + ",t,"] = "),o.push(";"),I.push(o.join(""))})),I.join("\n")}},d}()
t.PostScriptCompiler=p},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.PostScriptParser=t.PostScriptLexer=void 0
var a=r(5),n=r(202),i=r(205)
function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var a=t[r]
a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function c(e,t,r){return t&&s(e.prototype,t),r&&s(e,r),e}var l=function(){function e(t){o(this,e),this.lexer=t,this.operators=[],this.token=null,this.prev=null}return c(e,[{key:"nextToken",value:function(){this.prev=this.token,this.token=this.lexer.getToken()}},{key:"accept",value:function(e){return this.token.type===e&&(this.nextToken(),!0)}},{key:"expect",value:function(e){if(this.accept(e))return!0
throw new a.FormatError("Unexpected symbol: found ".concat(this.token.type," expected ").concat(e,"."))}},{key:"parse",value:function(){return this.nextToken(),this.expect(h.LBRACE),this.parseBlock(),this.expect(h.RBRACE),this.operators}},{key:"parseBlock",value:function(){for(;;)if(this.accept(h.NUMBER))this.operators.push(this.prev.value)
else if(this.accept(h.OPERATOR))this.operators.push(this.prev.value)
else{if(!this.accept(h.LBRACE))return
this.parseCondition()}}},{key:"parseCondition",value:function(){var e=this.operators.length
if(this.operators.push(null,null),this.parseBlock(),this.expect(h.RBRACE),this.accept(h.IF))this.operators[e]=this.operators.length,this.operators[e+1]="jz"
else{if(!this.accept(h.LBRACE))throw new a.FormatError("PS Function: error parsing conditional.")
var t=this.operators.length
this.operators.push(null,null)
var r=this.operators.length
this.parseBlock(),this.expect(h.RBRACE),this.expect(h.IFELSE),this.operators[t]=this.operators.length,this.operators[t+1]="j",this.operators[e]=r,this.operators[e+1]="jz"}}}]),e}()
t.PostScriptParser=l
var u,h={LBRACE:0,RBRACE:1,NUMBER:2,OPERATOR:3,IF:4,IFELSE:5},f=(u=Object.create(null),function(){function e(t,r){o(this,e),this.type=t,this.value=r}return c(e,null,[{key:"getOperator",value:function(t){var r=u[t]
return r||(u[t]=new e(h.OPERATOR,t))}},{key:"LBRACE",get:function(){return(0,a.shadow)(this,"LBRACE",new e(h.LBRACE,"{"))}},{key:"RBRACE",get:function(){return(0,a.shadow)(this,"RBRACE",new e(h.RBRACE,"}"))}},{key:"IF",get:function(){return(0,a.shadow)(this,"IF",new e(h.IF,"IF"))}},{key:"IFELSE",get:function(){return(0,a.shadow)(this,"IFELSE",new e(h.IFELSE,"IFELSE"))}}]),e}()),d=function(){function e(t){o(this,e),this.stream=t,this.nextChar(),this.strBuf=[]}return c(e,[{key:"nextChar",value:function(){return this.currentChar=this.stream.getByte()}},{key:"getToken",value:function(){for(var e=!1,t=this.currentChar;;){if(t<0)return n.EOF
if(e)10!==t&&13!==t||(e=!1)
else if(37===t)e=!0
else if(!(0,i.isWhiteSpace)(t))break
t=this.nextChar()}switch(0|t){case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:case 43:case 45:case 46:return new f(h.NUMBER,this.getNumber())
case 123:return this.nextChar(),f.LBRACE
case 125:return this.nextChar(),f.RBRACE}var r=this.strBuf
for(r.length=0,r[0]=String.fromCharCode(t);(t=this.nextChar())>=0&&(t>=65&&t<=90||t>=97&&t<=122);)r.push(String.fromCharCode(t))
var a=r.join("")
switch(a.toLowerCase()){case"if":return f.IF
case"ifelse":return f.IFELSE
default:return f.getOperator(a)}}},{key:"getNumber",value:function(){var e=this.currentChar,t=this.strBuf
for(t.length=0,t[0]=String.fromCharCode(e);(e=this.nextChar())>=0&&(e>=48&&e<=57||45===e||46===e);)t.push(String.fromCharCode(e))
var r=parseFloat(t.join(""))
if(isNaN(r))throw new a.FormatError("Invalid floating point number: ".concat(r))
return r}}]),e}()
t.PostScriptLexer=d},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.bidi=function(e,t,r){var p=!0,g=e.length
if(0===g||r)return h(e,p,r)
f.length=g,d.length=g
var m,v,b=0
for(m=0;m<g;++m){f[m]=e.charAt(m)
var y=e.charCodeAt(m),w="L"
y<=255?w=n[y]:1424<=y&&y<=1524?w="R":1536<=y&&y<=1791?(w=i[255&y])||(0,a.warn)("Bidi: invalid Unicode character "+y.toString(16)):1792<=y&&y<=2220&&(w="AL"),"R"!==w&&"AL"!==w&&"AN"!==w||b++,d[m]=w}if(0===b)return h(e,p=!0);-1===t&&(b/g<.3?(p=!0,t=0):(p=!1,t=1))
var k=[]
for(m=0;m<g;++m)k[m]=t
var S,x=o(t)?"R":"L",C=x,A=C,O=C
for(m=0;m<g;++m)"NSM"===d[m]?d[m]=O:O=d[m]
for(O=C,m=0;m<g;++m)"EN"===(S=d[m])?d[m]="AL"===O?"AN":"EN":"R"!==S&&"L"!==S&&"AL"!==S||(O=S)
for(m=0;m<g;++m)"AL"===(S=d[m])&&(d[m]="R")
for(m=1;m<g-1;++m)"ES"===d[m]&&"EN"===d[m-1]&&"EN"===d[m+1]&&(d[m]="EN"),"CS"!==d[m]||"EN"!==d[m-1]&&"AN"!==d[m-1]||d[m+1]!==d[m-1]||(d[m]=d[m-1])
for(m=0;m<g;++m)if("EN"===d[m]){var T
for(T=m-1;T>=0&&"ET"===d[T];--T)d[T]="EN"
for(T=m+1;T<g&&"ET"===d[T];++T)d[T]="EN"}for(m=0;m<g;++m)"WS"!==(S=d[m])&&"ES"!==S&&"ET"!==S&&"CS"!==S||(d[m]="ON")
for(O=C,m=0;m<g;++m)"EN"===(S=d[m])?d[m]="L"===O?"L":"EN":"R"!==S&&"L"!==S||(O=S)
for(m=0;m<g;++m)if("ON"===d[m]){var I=c(d,m+1,"ON"),E=C
m>0&&(E=d[m-1])
var P=A
I+1<g&&(P=d[I+1]),"L"!==E&&(E="R"),"L"!==P&&(P="R"),E===P&&l(d,m,I,E),m=I-1}for(m=0;m<g;++m)"ON"===d[m]&&(d[m]=x)
for(m=0;m<g;++m)S=d[m],s(k[m])?"R"===S?k[m]+=1:"AN"!==S&&"EN"!==S||(k[m]+=2):"L"!==S&&"AN"!==S&&"EN"!==S||(k[m]+=1)
var _,F=-1,R=99
for(m=0,v=k.length;m<v;++m)_=k[m],F<_&&(F=_),R>_&&o(_)&&(R=_)
for(_=F;_>=R;--_){var B=-1
for(m=0,v=k.length;m<v;++m)k[m]<_?B>=0&&(u(f,B,m),B=-1):B<0&&(B=m)
B>=0&&u(f,B,k.length)}for(m=0,v=f.length;m<v;++m){var M=f[m]
"<"!==M&&">"!==M||(f[m]="")}return h(f.join(""),p)}
var a=r(5),n=["BN","BN","BN","BN","BN","BN","BN","BN","BN","S","B","S","WS","B","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","B","B","B","S","WS","ON","ON","ET","ET","ET","ON","ON","ON","ON","ON","ES","CS","ES","CS","CS","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","CS","ON","ON","ON","ON","ON","ON","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","ON","ON","ON","ON","ON","ON","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","ON","ON","ON","ON","BN","BN","BN","BN","BN","BN","B","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","CS","ON","ET","ET","ET","ET","ON","ON","ON","ON","L","ON","ON","BN","ON","ON","ET","ET","EN","EN","ON","L","ON","ON","ON","EN","L","ON","ON","ON","ON","ON","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","ON","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","ON","L","L","L","L","L","L","L","L"],i=["AN","AN","AN","AN","AN","AN","ON","ON","AL","ET","ET","AL","CS","AL","ON","ON","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AL","AL","","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AN","AN","AN","AN","AN","AN","AN","AN","AN","AN","ET","AN","AN","AL","AL","AL","NSM","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AN","ON","NSM","NSM","NSM","NSM","NSM","NSM","AL","AL","NSM","NSM","ON","NSM","NSM","NSM","NSM","AL","AL","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","AL","AL","AL","AL","AL","AL"]
function o(e){return 0!=(1&e)}function s(e){return 0==(1&e)}function c(e,t,r){for(var a=t,n=e.length;a<n;++a)if(e[a]!==r)return a
return a}function l(e,t,r,a){for(var n=t;n<r;++n)e[n]=a}function u(e,t,r){for(var a=t,n=r-1;a<n;++a,--n){var i=e[a]
e[a]=e[n],e[n]=i}}function h(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a="ltr"
return r?a="ttb":t||(a="rtl"),{str:e,dir:a}}var f=[],d=[]},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.getMetrics=void 0
var a=r(205),n=(0,a.getLookupTableFactory)((function(e){e.Courier=600,e["Courier-Bold"]=600,e["Courier-BoldOblique"]=600,e["Courier-Oblique"]=600,e.Helvetica=(0,a.getLookupTableFactory)((function(e){e.space=278,e.exclam=278,e.quotedbl=355,e.numbersign=556,e.dollar=556,e.percent=889,e.ampersand=667,e.quoteright=222,e.parenleft=333,e.parenright=333,e.asterisk=389,e.plus=584,e.comma=278,e.hyphen=333,e.period=278,e.slash=278,e.zero=556,e.one=556,e.two=556,e.three=556,e.four=556,e.five=556,e.six=556,e.seven=556,e.eight=556,e.nine=556,e.colon=278,e.semicolon=278,e.less=584,e.equal=584
e.greater=584,e.question=556,e.at=1015,e.A=667,e.B=667,e.C=722,e.D=722,e.E=667,e.F=611,e.G=778,e.H=722,e.I=278,e.J=500,e.K=667,e.L=556,e.M=833,e.N=722,e.O=778,e.P=667,e.Q=778,e.R=722,e.S=667,e.T=611,e.U=722,e.V=667,e.W=944,e.X=667,e.Y=667,e.Z=611,e.bracketleft=278
e.backslash=278,e.bracketright=278,e.asciicircum=469,e.underscore=556,e.quoteleft=222,e.a=556,e.b=556,e.c=500,e.d=556,e.e=556,e.f=278,e.g=556,e.h=556,e.i=222,e.j=222,e.k=500,e.l=222,e.m=833,e.n=556,e.o=556,e.p=556,e.q=556,e.r=333,e.s=500,e.t=278,e.u=556,e.v=500,e.w=722,e.x=500,e.y=500
e.z=500,e.braceleft=334,e.bar=260,e.braceright=334,e.asciitilde=584,e.exclamdown=333,e.cent=556,e.sterling=556,e.fraction=167,e.yen=556,e.florin=556,e.section=556,e.currency=556,e.quotesingle=191,e.quotedblleft=333,e.guillemotleft=556,e.guilsinglleft=333,e.guilsinglright=333,e.fi=500,e.fl=500,e.endash=556,e.dagger=556,e.daggerdbl=556,e.periodcentered=278,e.paragraph=537,e.bullet=350,e.quotesinglbase=222,e.quotedblbase=333,e.quotedblright=333,e.guillemotright=556
e.ellipsis=1e3,e.perthousand=1e3,e.questiondown=611,e.grave=333,e.acute=333,e.circumflex=333,e.tilde=333,e.macron=333,e.breve=333,e.dotaccent=333,e.dieresis=333,e.ring=333,e.cedilla=333,e.hungarumlaut=333,e.ogonek=333,e.caron=333,e.emdash=1e3,e.AE=1e3,e.ordfeminine=370,e.Lslash=556,e.Oslash=778,e.OE=1e3,e.ordmasculine=365,e.ae=889,e.dotlessi=278,e.lslash=222,e.oslash=611,e.oe=944,e.germandbls=611,e.Idieresis=278
e.eacute=556,e.abreve=556,e.uhungarumlaut=556,e.ecaron=556,e.Ydieresis=667,e.divide=584,e.Yacute=667,e.Acircumflex=667,e.aacute=556,e.Ucircumflex=722,e.yacute=500,e.scommaaccent=500,e.ecircumflex=556,e.Uring=722,e.Udieresis=722,e.aogonek=556,e.Uacute=722,e.uogonek=556,e.Edieresis=667,e.Dcroat=722,e.commaaccent=250,e.copyright=737,e.Emacron=667,e.ccaron=500,e.aring=556,e.Ncommaaccent=722,e.lacute=222,e.agrave=556,e.Tcommaaccent=611,e.Cacute=722
e.atilde=556,e.Edotaccent=667,e.scaron=500,e.scedilla=500,e.iacute=278,e.lozenge=471,e.Rcaron=722,e.Gcommaaccent=778,e.ucircumflex=556,e.acircumflex=556,e.Amacron=667,e.rcaron=333,e.ccedilla=500,e.Zdotaccent=611,e.Thorn=667,e.Omacron=778,e.Racute=722,e.Sacute=667,e.dcaron=643,e.Umacron=722,e.uring=556,e.threesuperior=333,e.Ograve=778,e.Agrave=667,e.Abreve=667,e.multiply=584,e.uacute=556,e.Tcaron=611,e.partialdiff=476,e.ydieresis=500
e.Nacute=722,e.icircumflex=278,e.Ecircumflex=667,e.adieresis=556,e.edieresis=556,e.cacute=500,e.nacute=556,e.umacron=556,e.Ncaron=722,e.Iacute=278,e.plusminus=584,e.brokenbar=260,e.registered=737,e.Gbreve=778,e.Idotaccent=278,e.summation=600,e.Egrave=667,e.racute=333,e.omacron=556,e.Zacute=611,e.Zcaron=611,e.greaterequal=549,e.Eth=722,e.Ccedilla=722,e.lcommaaccent=222,e.tcaron=317,e.eogonek=556,e.Uogonek=722,e.Aacute=667,e.Adieresis=667
e.egrave=556,e.zacute=500,e.iogonek=222,e.Oacute=778,e.oacute=556,e.amacron=556,e.sacute=500,e.idieresis=278,e.Ocircumflex=778,e.Ugrave=722,e.Delta=612,e.thorn=556,e.twosuperior=333,e.Odieresis=778,e.mu=556,e.igrave=278,e.ohungarumlaut=556,e.Eogonek=667,e.dcroat=556,e.threequarters=834,e.Scedilla=667,e.lcaron=299,e.Kcommaaccent=667,e.Lacute=556,e.trademark=1e3,e.edotaccent=556,e.Igrave=278,e.Imacron=278,e.Lcaron=556,e.onehalf=834
e.lessequal=549,e.ocircumflex=556,e.ntilde=556,e.Uhungarumlaut=722,e.Eacute=667,e.emacron=556,e.gbreve=556,e.onequarter=834,e.Scaron=667,e.Scommaaccent=667,e.Ohungarumlaut=778,e.degree=400,e.ograve=556,e.Ccaron=722,e.ugrave=556,e.radical=453,e.Dcaron=722,e.rcommaaccent=333,e.Ntilde=722,e.otilde=556,e.Rcommaaccent=722,e.Lcommaaccent=556,e.Atilde=667,e.Aogonek=667,e.Aring=667,e.Otilde=778,e.zdotaccent=500,e.Ecaron=667,e.Iogonek=278,e.kcommaaccent=500
e.minus=584,e.Icircumflex=278,e.ncaron=556,e.tcommaaccent=278,e.logicalnot=584,e.odieresis=556,e.udieresis=556,e.notequal=549,e.gcommaaccent=556,e.eth=556,e.zcaron=500,e.ncommaaccent=556,e.onesuperior=333,e.imacron=278,e.Euro=556})),e["Helvetica-Bold"]=(0,a.getLookupTableFactory)((function(e){e.space=278,e.exclam=333,e.quotedbl=474,e.numbersign=556,e.dollar=556,e.percent=889,e.ampersand=722,e.quoteright=278,e.parenleft=333,e.parenright=333,e.asterisk=389,e.plus=584,e.comma=278,e.hyphen=333,e.period=278,e.slash=278,e.zero=556,e.one=556,e.two=556,e.three=556,e.four=556,e.five=556,e.six=556,e.seven=556,e.eight=556,e.nine=556,e.colon=333,e.semicolon=333,e.less=584,e.equal=584
e.greater=584,e.question=611,e.at=975,e.A=722,e.B=722,e.C=722,e.D=722,e.E=667,e.F=611,e.G=778,e.H=722,e.I=278,e.J=556,e.K=722,e.L=611,e.M=833,e.N=722,e.O=778,e.P=667,e.Q=778,e.R=722,e.S=667,e.T=611,e.U=722,e.V=667,e.W=944,e.X=667,e.Y=667,e.Z=611,e.bracketleft=333
e.backslash=278,e.bracketright=333,e.asciicircum=584,e.underscore=556,e.quoteleft=278,e.a=556,e.b=611,e.c=556,e.d=611,e.e=556,e.f=333,e.g=611,e.h=611,e.i=278,e.j=278,e.k=556,e.l=278,e.m=889,e.n=611,e.o=611,e.p=611,e.q=611,e.r=389,e.s=556,e.t=333,e.u=611,e.v=556,e.w=778,e.x=556,e.y=556
e.z=500,e.braceleft=389,e.bar=280,e.braceright=389,e.asciitilde=584,e.exclamdown=333,e.cent=556,e.sterling=556,e.fraction=167,e.yen=556,e.florin=556,e.section=556,e.currency=556,e.quotesingle=238,e.quotedblleft=500,e.guillemotleft=556,e.guilsinglleft=333,e.guilsinglright=333,e.fi=611,e.fl=611,e.endash=556,e.dagger=556,e.daggerdbl=556,e.periodcentered=278,e.paragraph=556,e.bullet=350,e.quotesinglbase=278,e.quotedblbase=500,e.quotedblright=500,e.guillemotright=556
e.ellipsis=1e3,e.perthousand=1e3,e.questiondown=611,e.grave=333,e.acute=333,e.circumflex=333,e.tilde=333,e.macron=333,e.breve=333,e.dotaccent=333,e.dieresis=333,e.ring=333,e.cedilla=333,e.hungarumlaut=333,e.ogonek=333,e.caron=333,e.emdash=1e3,e.AE=1e3,e.ordfeminine=370,e.Lslash=611,e.Oslash=778,e.OE=1e3,e.ordmasculine=365,e.ae=889,e.dotlessi=278,e.lslash=278,e.oslash=611,e.oe=944,e.germandbls=611,e.Idieresis=278
e.eacute=556,e.abreve=556,e.uhungarumlaut=611,e.ecaron=556,e.Ydieresis=667,e.divide=584,e.Yacute=667,e.Acircumflex=722,e.aacute=556,e.Ucircumflex=722,e.yacute=556,e.scommaaccent=556,e.ecircumflex=556,e.Uring=722,e.Udieresis=722,e.aogonek=556,e.Uacute=722,e.uogonek=611,e.Edieresis=667,e.Dcroat=722,e.commaaccent=250,e.copyright=737,e.Emacron=667,e.ccaron=556,e.aring=556,e.Ncommaaccent=722,e.lacute=278,e.agrave=556,e.Tcommaaccent=611,e.Cacute=722
e.atilde=556,e.Edotaccent=667,e.scaron=556,e.scedilla=556,e.iacute=278,e.lozenge=494,e.Rcaron=722,e.Gcommaaccent=778,e.ucircumflex=611,e.acircumflex=556,e.Amacron=722,e.rcaron=389,e.ccedilla=556,e.Zdotaccent=611,e.Thorn=667,e.Omacron=778,e.Racute=722,e.Sacute=667,e.dcaron=743,e.Umacron=722,e.uring=611,e.threesuperior=333,e.Ograve=778,e.Agrave=722,e.Abreve=722,e.multiply=584,e.uacute=611,e.Tcaron=611,e.partialdiff=494,e.ydieresis=556
e.Nacute=722,e.icircumflex=278,e.Ecircumflex=667,e.adieresis=556,e.edieresis=556,e.cacute=556,e.nacute=611,e.umacron=611,e.Ncaron=722,e.Iacute=278,e.plusminus=584,e.brokenbar=280,e.registered=737,e.Gbreve=778,e.Idotaccent=278,e.summation=600,e.Egrave=667,e.racute=389,e.omacron=611,e.Zacute=611,e.Zcaron=611,e.greaterequal=549,e.Eth=722,e.Ccedilla=722,e.lcommaaccent=278,e.tcaron=389,e.eogonek=556,e.Uogonek=722,e.Aacute=722,e.Adieresis=722
e.egrave=556,e.zacute=500,e.iogonek=278,e.Oacute=778,e.oacute=611,e.amacron=556,e.sacute=556,e.idieresis=278,e.Ocircumflex=778,e.Ugrave=722,e.Delta=612,e.thorn=611,e.twosuperior=333,e.Odieresis=778,e.mu=611,e.igrave=278,e.ohungarumlaut=611,e.Eogonek=667,e.dcroat=611,e.threequarters=834,e.Scedilla=667,e.lcaron=400,e.Kcommaaccent=722,e.Lacute=611,e.trademark=1e3,e.edotaccent=556,e.Igrave=278,e.Imacron=278,e.Lcaron=611,e.onehalf=834
e.lessequal=549,e.ocircumflex=611,e.ntilde=611,e.Uhungarumlaut=722,e.Eacute=667,e.emacron=556,e.gbreve=611,e.onequarter=834,e.Scaron=667,e.Scommaaccent=667,e.Ohungarumlaut=778,e.degree=400,e.ograve=611,e.Ccaron=722,e.ugrave=611,e.radical=549,e.Dcaron=722,e.rcommaaccent=389,e.Ntilde=722,e.otilde=611,e.Rcommaaccent=722,e.Lcommaaccent=611,e.Atilde=722,e.Aogonek=722,e.Aring=722,e.Otilde=778,e.zdotaccent=500,e.Ecaron=667,e.Iogonek=278,e.kcommaaccent=556
e.minus=584,e.Icircumflex=278,e.ncaron=611,e.tcommaaccent=333,e.logicalnot=584,e.odieresis=611,e.udieresis=611,e.notequal=549,e.gcommaaccent=611,e.eth=611,e.zcaron=500,e.ncommaaccent=611,e.onesuperior=333,e.imacron=278,e.Euro=556})),e["Helvetica-BoldOblique"]=(0,a.getLookupTableFactory)((function(e){e.space=278,e.exclam=333,e.quotedbl=474,e.numbersign=556,e.dollar=556,e.percent=889,e.ampersand=722,e.quoteright=278,e.parenleft=333,e.parenright=333,e.asterisk=389,e.plus=584,e.comma=278,e.hyphen=333,e.period=278,e.slash=278,e.zero=556,e.one=556,e.two=556,e.three=556,e.four=556,e.five=556,e.six=556,e.seven=556,e.eight=556,e.nine=556,e.colon=333,e.semicolon=333,e.less=584,e.equal=584
e.greater=584,e.question=611,e.at=975,e.A=722,e.B=722,e.C=722,e.D=722,e.E=667,e.F=611,e.G=778,e.H=722,e.I=278,e.J=556,e.K=722,e.L=611,e.M=833,e.N=722,e.O=778,e.P=667,e.Q=778,e.R=722,e.S=667,e.T=611,e.U=722,e.V=667,e.W=944,e.X=667,e.Y=667,e.Z=611,e.bracketleft=333
e.backslash=278,e.bracketright=333,e.asciicircum=584,e.underscore=556,e.quoteleft=278,e.a=556,e.b=611,e.c=556,e.d=611,e.e=556,e.f=333,e.g=611,e.h=611,e.i=278,e.j=278,e.k=556,e.l=278,e.m=889,e.n=611,e.o=611,e.p=611,e.q=611,e.r=389,e.s=556,e.t=333,e.u=611,e.v=556,e.w=778,e.x=556,e.y=556
e.z=500,e.braceleft=389,e.bar=280,e.braceright=389,e.asciitilde=584,e.exclamdown=333,e.cent=556,e.sterling=556,e.fraction=167,e.yen=556,e.florin=556,e.section=556,e.currency=556,e.quotesingle=238,e.quotedblleft=500,e.guillemotleft=556,e.guilsinglleft=333,e.guilsinglright=333,e.fi=611,e.fl=611,e.endash=556,e.dagger=556,e.daggerdbl=556,e.periodcentered=278,e.paragraph=556,e.bullet=350,e.quotesinglbase=278,e.quotedblbase=500,e.quotedblright=500,e.guillemotright=556
e.ellipsis=1e3,e.perthousand=1e3,e.questiondown=611,e.grave=333,e.acute=333,e.circumflex=333,e.tilde=333,e.macron=333,e.breve=333,e.dotaccent=333,e.dieresis=333,e.ring=333,e.cedilla=333,e.hungarumlaut=333,e.ogonek=333,e.caron=333,e.emdash=1e3,e.AE=1e3,e.ordfeminine=370,e.Lslash=611,e.Oslash=778,e.OE=1e3,e.ordmasculine=365,e.ae=889,e.dotlessi=278,e.lslash=278,e.oslash=611,e.oe=944,e.germandbls=611,e.Idieresis=278
e.eacute=556,e.abreve=556,e.uhungarumlaut=611,e.ecaron=556,e.Ydieresis=667,e.divide=584,e.Yacute=667,e.Acircumflex=722,e.aacute=556,e.Ucircumflex=722,e.yacute=556,e.scommaaccent=556,e.ecircumflex=556,e.Uring=722,e.Udieresis=722,e.aogonek=556,e.Uacute=722,e.uogonek=611,e.Edieresis=667,e.Dcroat=722,e.commaaccent=250,e.copyright=737,e.Emacron=667,e.ccaron=556,e.aring=556,e.Ncommaaccent=722,e.lacute=278,e.agrave=556,e.Tcommaaccent=611,e.Cacute=722
e.atilde=556,e.Edotaccent=667,e.scaron=556,e.scedilla=556,e.iacute=278,e.lozenge=494,e.Rcaron=722,e.Gcommaaccent=778,e.ucircumflex=611,e.acircumflex=556,e.Amacron=722,e.rcaron=389,e.ccedilla=556,e.Zdotaccent=611,e.Thorn=667,e.Omacron=778,e.Racute=722,e.Sacute=667,e.dcaron=743,e.Umacron=722,e.uring=611,e.threesuperior=333,e.Ograve=778,e.Agrave=722,e.Abreve=722,e.multiply=584,e.uacute=611,e.Tcaron=611,e.partialdiff=494,e.ydieresis=556
e.Nacute=722,e.icircumflex=278,e.Ecircumflex=667,e.adieresis=556,e.edieresis=556,e.cacute=556,e.nacute=611,e.umacron=611,e.Ncaron=722,e.Iacute=278,e.plusminus=584,e.brokenbar=280,e.registered=737,e.Gbreve=778,e.Idotaccent=278,e.summation=600,e.Egrave=667,e.racute=389,e.omacron=611,e.Zacute=611,e.Zcaron=611,e.greaterequal=549,e.Eth=722,e.Ccedilla=722,e.lcommaaccent=278,e.tcaron=389,e.eogonek=556,e.Uogonek=722,e.Aacute=722,e.Adieresis=722
e.egrave=556,e.zacute=500,e.iogonek=278,e.Oacute=778,e.oacute=611,e.amacron=556,e.sacute=556,e.idieresis=278,e.Ocircumflex=778,e.Ugrave=722,e.Delta=612,e.thorn=611,e.twosuperior=333,e.Odieresis=778,e.mu=611,e.igrave=278,e.ohungarumlaut=611,e.Eogonek=667,e.dcroat=611,e.threequarters=834,e.Scedilla=667,e.lcaron=400,e.Kcommaaccent=722,e.Lacute=611,e.trademark=1e3,e.edotaccent=556,e.Igrave=278,e.Imacron=278,e.Lcaron=611,e.onehalf=834
e.lessequal=549,e.ocircumflex=611,e.ntilde=611,e.Uhungarumlaut=722,e.Eacute=667,e.emacron=556,e.gbreve=611,e.onequarter=834,e.Scaron=667,e.Scommaaccent=667,e.Ohungarumlaut=778,e.degree=400,e.ograve=611,e.Ccaron=722,e.ugrave=611,e.radical=549,e.Dcaron=722,e.rcommaaccent=389,e.Ntilde=722,e.otilde=611,e.Rcommaaccent=722,e.Lcommaaccent=611,e.Atilde=722,e.Aogonek=722,e.Aring=722,e.Otilde=778,e.zdotaccent=500,e.Ecaron=667,e.Iogonek=278,e.kcommaaccent=556
e.minus=584,e.Icircumflex=278,e.ncaron=611,e.tcommaaccent=333,e.logicalnot=584,e.odieresis=611,e.udieresis=611,e.notequal=549,e.gcommaaccent=611,e.eth=611,e.zcaron=500,e.ncommaaccent=611,e.onesuperior=333,e.imacron=278,e.Euro=556})),e["Helvetica-Oblique"]=(0,a.getLookupTableFactory)((function(e){e.space=278,e.exclam=278,e.quotedbl=355,e.numbersign=556,e.dollar=556,e.percent=889,e.ampersand=667,e.quoteright=222,e.parenleft=333,e.parenright=333,e.asterisk=389,e.plus=584,e.comma=278,e.hyphen=333,e.period=278,e.slash=278,e.zero=556,e.one=556,e.two=556,e.three=556,e.four=556,e.five=556,e.six=556,e.seven=556,e.eight=556,e.nine=556,e.colon=278,e.semicolon=278,e.less=584,e.equal=584
e.greater=584,e.question=556,e.at=1015,e.A=667,e.B=667,e.C=722,e.D=722,e.E=667,e.F=611,e.G=778,e.H=722,e.I=278,e.J=500,e.K=667,e.L=556,e.M=833,e.N=722,e.O=778,e.P=667,e.Q=778,e.R=722,e.S=667,e.T=611,e.U=722,e.V=667,e.W=944,e.X=667,e.Y=667,e.Z=611,e.bracketleft=278
e.backslash=278,e.bracketright=278,e.asciicircum=469,e.underscore=556,e.quoteleft=222,e.a=556,e.b=556,e.c=500,e.d=556,e.e=556,e.f=278,e.g=556,e.h=556,e.i=222,e.j=222,e.k=500,e.l=222,e.m=833,e.n=556,e.o=556,e.p=556,e.q=556,e.r=333,e.s=500,e.t=278,e.u=556,e.v=500,e.w=722,e.x=500,e.y=500
e.z=500,e.braceleft=334,e.bar=260,e.braceright=334,e.asciitilde=584,e.exclamdown=333,e.cent=556,e.sterling=556,e.fraction=167,e.yen=556,e.florin=556,e.section=556,e.currency=556,e.quotesingle=191,e.quotedblleft=333,e.guillemotleft=556,e.guilsinglleft=333,e.guilsinglright=333,e.fi=500,e.fl=500,e.endash=556,e.dagger=556,e.daggerdbl=556,e.periodcentered=278,e.paragraph=537,e.bullet=350,e.quotesinglbase=222,e.quotedblbase=333,e.quotedblright=333,e.guillemotright=556
e.ellipsis=1e3,e.perthousand=1e3,e.questiondown=611,e.grave=333,e.acute=333,e.circumflex=333,e.tilde=333,e.macron=333,e.breve=333,e.dotaccent=333,e.dieresis=333,e.ring=333,e.cedilla=333,e.hungarumlaut=333,e.ogonek=333,e.caron=333,e.emdash=1e3,e.AE=1e3,e.ordfeminine=370,e.Lslash=556,e.Oslash=778,e.OE=1e3,e.ordmasculine=365,e.ae=889,e.dotlessi=278,e.lslash=222,e.oslash=611,e.oe=944,e.germandbls=611,e.Idieresis=278
e.eacute=556,e.abreve=556,e.uhungarumlaut=556,e.ecaron=556,e.Ydieresis=667,e.divide=584,e.Yacute=667,e.Acircumflex=667,e.aacute=556,e.Ucircumflex=722,e.yacute=500,e.scommaaccent=500,e.ecircumflex=556,e.Uring=722,e.Udieresis=722,e.aogonek=556,e.Uacute=722,e.uogonek=556,e.Edieresis=667,e.Dcroat=722,e.commaaccent=250,e.copyright=737,e.Emacron=667,e.ccaron=500,e.aring=556,e.Ncommaaccent=722,e.lacute=222,e.agrave=556,e.Tcommaaccent=611,e.Cacute=722
e.atilde=556,e.Edotaccent=667,e.scaron=500,e.scedilla=500,e.iacute=278,e.lozenge=471,e.Rcaron=722,e.Gcommaaccent=778,e.ucircumflex=556,e.acircumflex=556,e.Amacron=667,e.rcaron=333,e.ccedilla=500,e.Zdotaccent=611,e.Thorn=667,e.Omacron=778,e.Racute=722,e.Sacute=667,e.dcaron=643,e.Umacron=722,e.uring=556,e.threesuperior=333,e.Ograve=778,e.Agrave=667,e.Abreve=667,e.multiply=584,e.uacute=556,e.Tcaron=611,e.partialdiff=476,e.ydieresis=500
e.Nacute=722,e.icircumflex=278,e.Ecircumflex=667,e.adieresis=556,e.edieresis=556,e.cacute=500,e.nacute=556,e.umacron=556,e.Ncaron=722,e.Iacute=278,e.plusminus=584,e.brokenbar=260,e.registered=737,e.Gbreve=778,e.Idotaccent=278,e.summation=600,e.Egrave=667,e.racute=333,e.omacron=556,e.Zacute=611,e.Zcaron=611,e.greaterequal=549,e.Eth=722,e.Ccedilla=722,e.lcommaaccent=222,e.tcaron=317,e.eogonek=556,e.Uogonek=722,e.Aacute=667,e.Adieresis=667
e.egrave=556,e.zacute=500,e.iogonek=222,e.Oacute=778,e.oacute=556,e.amacron=556,e.sacute=500,e.idieresis=278,e.Ocircumflex=778,e.Ugrave=722,e.Delta=612,e.thorn=556,e.twosuperior=333,e.Odieresis=778,e.mu=556,e.igrave=278,e.ohungarumlaut=556,e.Eogonek=667,e.dcroat=556,e.threequarters=834,e.Scedilla=667,e.lcaron=299,e.Kcommaaccent=667,e.Lacute=556,e.trademark=1e3,e.edotaccent=556,e.Igrave=278,e.Imacron=278,e.Lcaron=556,e.onehalf=834
e.lessequal=549,e.ocircumflex=556,e.ntilde=556,e.Uhungarumlaut=722,e.Eacute=667,e.emacron=556,e.gbreve=556,e.onequarter=834,e.Scaron=667,e.Scommaaccent=667,e.Ohungarumlaut=778,e.degree=400,e.ograve=556,e.Ccaron=722,e.ugrave=556,e.radical=453,e.Dcaron=722,e.rcommaaccent=333,e.Ntilde=722,e.otilde=556,e.Rcommaaccent=722,e.Lcommaaccent=556,e.Atilde=667,e.Aogonek=667,e.Aring=667,e.Otilde=778,e.zdotaccent=500,e.Ecaron=667,e.Iogonek=278,e.kcommaaccent=500
e.minus=584,e.Icircumflex=278,e.ncaron=556,e.tcommaaccent=278,e.logicalnot=584,e.odieresis=556,e.udieresis=556,e.notequal=549,e.gcommaaccent=556,e.eth=556,e.zcaron=500,e.ncommaaccent=556,e.onesuperior=333,e.imacron=278,e.Euro=556})),e.Symbol=(0,a.getLookupTableFactory)((function(e){e.space=250,e.exclam=333,e.universal=713,e.numbersign=500,e.existential=549,e.percent=833,e.ampersand=778,e.suchthat=439,e.parenleft=333,e.parenright=333,e.asteriskmath=500,e.plus=549,e.comma=250,e.minus=549,e.period=250,e.slash=278,e.zero=500,e.one=500,e.two=500,e.three=500,e.four=500,e.five=500,e.six=500,e.seven=500,e.eight=500,e.nine=500,e.colon=278,e.semicolon=278,e.less=549,e.equal=549
e.greater=549,e.question=444,e.congruent=549,e.Alpha=722,e.Beta=667,e.Chi=722,e.Delta=612,e.Epsilon=611,e.Phi=763,e.Gamma=603,e.Eta=722,e.Iota=333,e.theta1=631,e.Kappa=722,e.Lambda=686,e.Mu=889,e.Nu=722,e.Omicron=722,e.Pi=768,e.Theta=741,e.Rho=556,e.Sigma=592,e.Tau=611,e.Upsilon=690,e.sigma1=439,e.Omega=768,e.Xi=645,e.Psi=795,e.Zeta=611,e.bracketleft=333
e.therefore=863,e.bracketright=333,e.perpendicular=658,e.underscore=500,e.radicalex=500,e.alpha=631,e.beta=549,e.chi=549,e.delta=494,e.epsilon=439,e.phi=521,e.gamma=411,e.eta=603,e.iota=329,e.phi1=603,e.kappa=549,e.lambda=549,e.mu=576,e.nu=521,e.omicron=549,e.pi=549,e.theta=521,e.rho=549,e.sigma=603,e.tau=439,e.upsilon=576,e.omega1=713,e.omega=686,e.xi=493,e.psi=686
e.zeta=494,e.braceleft=480,e.bar=200,e.braceright=480,e.similar=549,e.Euro=750,e.Upsilon1=620,e.minute=247,e.lessequal=549,e.fraction=167,e.infinity=713,e.florin=500,e.club=753,e.diamond=753,e.heart=753,e.spade=753,e.arrowboth=1042,e.arrowleft=987,e.arrowup=603,e.arrowright=987,e.arrowdown=603,e.degree=400,e.plusminus=549,e.second=411,e.greaterequal=549,e.multiply=549,e.proportional=713,e.partialdiff=494,e.bullet=460,e.divide=549
e.notequal=549,e.equivalence=549,e.approxequal=549,e.ellipsis=1e3,e.arrowvertex=603,e.arrowhorizex=1e3,e.carriagereturn=658,e.aleph=823,e.Ifraktur=686,e.Rfraktur=795,e.weierstrass=987,e.circlemultiply=768,e.circleplus=768,e.emptyset=823,e.intersection=768,e.union=768,e.propersuperset=713,e.reflexsuperset=713,e.notsubset=713,e.propersubset=713,e.reflexsubset=713,e.element=713,e.notelement=713,e.angle=768,e.gradient=713,e.registerserif=790,e.copyrightserif=790,e.trademarkserif=890,e.product=823,e.radical=549
e.dotmath=250,e.logicalnot=713,e.logicaland=603,e.logicalor=603,e.arrowdblboth=1042,e.arrowdblleft=987,e.arrowdblup=603,e.arrowdblright=987,e.arrowdbldown=603,e.lozenge=494,e.angleleft=329,e.registersans=790,e.copyrightsans=790,e.trademarksans=786,e.summation=713,e.parenlefttp=384,e.parenleftex=384,e.parenleftbt=384,e.bracketlefttp=384,e.bracketleftex=384,e.bracketleftbt=384,e.bracelefttp=494,e.braceleftmid=494,e.braceleftbt=494,e.braceex=494,e.angleright=329,e.integral=274,e.integraltp=686,e.integralex=686,e.integralbt=686
e.parenrighttp=384,e.parenrightex=384,e.parenrightbt=384,e.bracketrighttp=384,e.bracketrightex=384,e.bracketrightbt=384,e.bracerighttp=494,e.bracerightmid=494,e.bracerightbt=494,e.apple=790})),e["Times-Roman"]=(0,a.getLookupTableFactory)((function(e){e.space=250,e.exclam=333,e.quotedbl=408,e.numbersign=500,e.dollar=500,e.percent=833,e.ampersand=778,e.quoteright=333,e.parenleft=333,e.parenright=333,e.asterisk=500,e.plus=564,e.comma=250,e.hyphen=333,e.period=250,e.slash=278,e.zero=500,e.one=500,e.two=500,e.three=500,e.four=500,e.five=500,e.six=500,e.seven=500,e.eight=500,e.nine=500,e.colon=278,e.semicolon=278,e.less=564,e.equal=564
e.greater=564,e.question=444,e.at=921,e.A=722,e.B=667,e.C=667,e.D=722,e.E=611,e.F=556,e.G=722,e.H=722,e.I=333,e.J=389,e.K=722,e.L=611,e.M=889,e.N=722,e.O=722,e.P=556,e.Q=722,e.R=667,e.S=556,e.T=611,e.U=722,e.V=722,e.W=944,e.X=722,e.Y=722,e.Z=611,e.bracketleft=333
e.backslash=278,e.bracketright=333,e.asciicircum=469,e.underscore=500,e.quoteleft=333,e.a=444,e.b=500,e.c=444,e.d=500,e.e=444,e.f=333,e.g=500,e.h=500,e.i=278,e.j=278,e.k=500,e.l=278,e.m=778,e.n=500,e.o=500,e.p=500,e.q=500,e.r=333,e.s=389,e.t=278,e.u=500,e.v=500,e.w=722,e.x=500,e.y=500
e.z=444,e.braceleft=480,e.bar=200,e.braceright=480,e.asciitilde=541,e.exclamdown=333,e.cent=500,e.sterling=500,e.fraction=167,e.yen=500,e.florin=500,e.section=500,e.currency=500,e.quotesingle=180,e.quotedblleft=444,e.guillemotleft=500,e.guilsinglleft=333,e.guilsinglright=333,e.fi=556,e.fl=556,e.endash=500,e.dagger=500,e.daggerdbl=500,e.periodcentered=250,e.paragraph=453,e.bullet=350,e.quotesinglbase=333,e.quotedblbase=444,e.quotedblright=444,e.guillemotright=500
e.ellipsis=1e3,e.perthousand=1e3,e.questiondown=444,e.grave=333,e.acute=333,e.circumflex=333,e.tilde=333,e.macron=333,e.breve=333,e.dotaccent=333,e.dieresis=333,e.ring=333,e.cedilla=333,e.hungarumlaut=333,e.ogonek=333,e.caron=333,e.emdash=1e3,e.AE=889,e.ordfeminine=276,e.Lslash=611,e.Oslash=722,e.OE=889,e.ordmasculine=310,e.ae=667,e.dotlessi=278,e.lslash=278,e.oslash=500,e.oe=722,e.germandbls=500,e.Idieresis=333
e.eacute=444,e.abreve=444,e.uhungarumlaut=500,e.ecaron=444,e.Ydieresis=722,e.divide=564,e.Yacute=722,e.Acircumflex=722,e.aacute=444,e.Ucircumflex=722,e.yacute=500,e.scommaaccent=389,e.ecircumflex=444,e.Uring=722,e.Udieresis=722,e.aogonek=444,e.Uacute=722,e.uogonek=500,e.Edieresis=611,e.Dcroat=722,e.commaaccent=250,e.copyright=760,e.Emacron=611,e.ccaron=444,e.aring=444,e.Ncommaaccent=722,e.lacute=278,e.agrave=444,e.Tcommaaccent=611,e.Cacute=667
e.atilde=444,e.Edotaccent=611,e.scaron=389,e.scedilla=389,e.iacute=278,e.lozenge=471,e.Rcaron=667,e.Gcommaaccent=722,e.ucircumflex=500,e.acircumflex=444,e.Amacron=722,e.rcaron=333,e.ccedilla=444,e.Zdotaccent=611,e.Thorn=556,e.Omacron=722,e.Racute=667,e.Sacute=556,e.dcaron=588,e.Umacron=722,e.uring=500,e.threesuperior=300,e.Ograve=722,e.Agrave=722,e.Abreve=722,e.multiply=564,e.uacute=500,e.Tcaron=611,e.partialdiff=476,e.ydieresis=500
e.Nacute=722,e.icircumflex=278,e.Ecircumflex=611,e.adieresis=444,e.edieresis=444,e.cacute=444,e.nacute=500,e.umacron=500,e.Ncaron=722,e.Iacute=333,e.plusminus=564,e.brokenbar=200,e.registered=760,e.Gbreve=722,e.Idotaccent=333,e.summation=600,e.Egrave=611,e.racute=333,e.omacron=500,e.Zacute=611,e.Zcaron=611,e.greaterequal=549,e.Eth=722,e.Ccedilla=667,e.lcommaaccent=278,e.tcaron=326,e.eogonek=444,e.Uogonek=722,e.Aacute=722,e.Adieresis=722
e.egrave=444,e.zacute=444,e.iogonek=278,e.Oacute=722,e.oacute=500,e.amacron=444,e.sacute=389,e.idieresis=278,e.Ocircumflex=722,e.Ugrave=722,e.Delta=612,e.thorn=500,e.twosuperior=300,e.Odieresis=722,e.mu=500,e.igrave=278,e.ohungarumlaut=500,e.Eogonek=611,e.dcroat=500,e.threequarters=750,e.Scedilla=556,e.lcaron=344,e.Kcommaaccent=722,e.Lacute=611,e.trademark=980,e.edotaccent=444,e.Igrave=333,e.Imacron=333,e.Lcaron=611,e.onehalf=750
e.lessequal=549,e.ocircumflex=500,e.ntilde=500,e.Uhungarumlaut=722,e.Eacute=611,e.emacron=444,e.gbreve=500,e.onequarter=750,e.Scaron=556,e.Scommaaccent=556,e.Ohungarumlaut=722,e.degree=400,e.ograve=500,e.Ccaron=667,e.ugrave=500,e.radical=453,e.Dcaron=722,e.rcommaaccent=333,e.Ntilde=722,e.otilde=500,e.Rcommaaccent=667,e.Lcommaaccent=611,e.Atilde=722,e.Aogonek=722,e.Aring=722,e.Otilde=722,e.zdotaccent=444,e.Ecaron=611,e.Iogonek=333,e.kcommaaccent=500
e.minus=564,e.Icircumflex=333,e.ncaron=500,e.tcommaaccent=278,e.logicalnot=564,e.odieresis=500,e.udieresis=500,e.notequal=549,e.gcommaaccent=500,e.eth=500,e.zcaron=444,e.ncommaaccent=500,e.onesuperior=300,e.imacron=278,e.Euro=500})),e["Times-Bold"]=(0,a.getLookupTableFactory)((function(e){e.space=250,e.exclam=333,e.quotedbl=555,e.numbersign=500,e.dollar=500,e.percent=1e3,e.ampersand=833,e.quoteright=333,e.parenleft=333,e.parenright=333,e.asterisk=500,e.plus=570,e.comma=250,e.hyphen=333,e.period=250,e.slash=278,e.zero=500,e.one=500,e.two=500,e.three=500,e.four=500,e.five=500,e.six=500,e.seven=500,e.eight=500,e.nine=500,e.colon=333,e.semicolon=333,e.less=570,e.equal=570
e.greater=570,e.question=500,e.at=930,e.A=722,e.B=667,e.C=722,e.D=722,e.E=667,e.F=611,e.G=778,e.H=778,e.I=389,e.J=500,e.K=778,e.L=667,e.M=944,e.N=722,e.O=778,e.P=611,e.Q=778,e.R=722,e.S=556,e.T=667,e.U=722,e.V=722,e.W=1e3,e.X=722,e.Y=722,e.Z=667,e.bracketleft=333
e.backslash=278,e.bracketright=333,e.asciicircum=581,e.underscore=500,e.quoteleft=333,e.a=500,e.b=556,e.c=444,e.d=556,e.e=444,e.f=333,e.g=500,e.h=556,e.i=278,e.j=333,e.k=556,e.l=278,e.m=833,e.n=556,e.o=500,e.p=556,e.q=556,e.r=444,e.s=389,e.t=333,e.u=556,e.v=500,e.w=722,e.x=500,e.y=500
e.z=444,e.braceleft=394,e.bar=220,e.braceright=394,e.asciitilde=520,e.exclamdown=333,e.cent=500,e.sterling=500,e.fraction=167,e.yen=500,e.florin=500,e.section=500,e.currency=500,e.quotesingle=278,e.quotedblleft=500,e.guillemotleft=500,e.guilsinglleft=333,e.guilsinglright=333,e.fi=556,e.fl=556,e.endash=500,e.dagger=500,e.daggerdbl=500,e.periodcentered=250,e.paragraph=540,e.bullet=350,e.quotesinglbase=333,e.quotedblbase=500,e.quotedblright=500,e.guillemotright=500
e.ellipsis=1e3,e.perthousand=1e3,e.questiondown=500,e.grave=333,e.acute=333,e.circumflex=333,e.tilde=333,e.macron=333,e.breve=333,e.dotaccent=333,e.dieresis=333,e.ring=333,e.cedilla=333,e.hungarumlaut=333,e.ogonek=333,e.caron=333,e.emdash=1e3,e.AE=1e3,e.ordfeminine=300,e.Lslash=667,e.Oslash=778,e.OE=1e3,e.ordmasculine=330,e.ae=722,e.dotlessi=278,e.lslash=278,e.oslash=500,e.oe=722,e.germandbls=556,e.Idieresis=389
e.eacute=444,e.abreve=500,e.uhungarumlaut=556,e.ecaron=444,e.Ydieresis=722,e.divide=570,e.Yacute=722,e.Acircumflex=722,e.aacute=500,e.Ucircumflex=722,e.yacute=500,e.scommaaccent=389,e.ecircumflex=444,e.Uring=722,e.Udieresis=722,e.aogonek=500,e.Uacute=722,e.uogonek=556,e.Edieresis=667,e.Dcroat=722,e.commaaccent=250,e.copyright=747,e.Emacron=667,e.ccaron=444,e.aring=500,e.Ncommaaccent=722,e.lacute=278,e.agrave=500,e.Tcommaaccent=667,e.Cacute=722
e.atilde=500,e.Edotaccent=667,e.scaron=389,e.scedilla=389,e.iacute=278,e.lozenge=494,e.Rcaron=722,e.Gcommaaccent=778,e.ucircumflex=556,e.acircumflex=500,e.Amacron=722,e.rcaron=444,e.ccedilla=444,e.Zdotaccent=667,e.Thorn=611,e.Omacron=778,e.Racute=722,e.Sacute=556,e.dcaron=672,e.Umacron=722,e.uring=556,e.threesuperior=300,e.Ograve=778,e.Agrave=722,e.Abreve=722,e.multiply=570,e.uacute=556,e.Tcaron=667,e.partialdiff=494,e.ydieresis=500
e.Nacute=722,e.icircumflex=278,e.Ecircumflex=667,e.adieresis=500,e.edieresis=444,e.cacute=444,e.nacute=556,e.umacron=556,e.Ncaron=722,e.Iacute=389,e.plusminus=570,e.brokenbar=220,e.registered=747,e.Gbreve=778,e.Idotaccent=389,e.summation=600,e.Egrave=667,e.racute=444,e.omacron=500,e.Zacute=667,e.Zcaron=667,e.greaterequal=549,e.Eth=722,e.Ccedilla=722,e.lcommaaccent=278,e.tcaron=416,e.eogonek=444,e.Uogonek=722,e.Aacute=722,e.Adieresis=722
e.egrave=444,e.zacute=444,e.iogonek=278,e.Oacute=778,e.oacute=500,e.amacron=500,e.sacute=389,e.idieresis=278,e.Ocircumflex=778,e.Ugrave=722,e.Delta=612,e.thorn=556,e.twosuperior=300,e.Odieresis=778,e.mu=556,e.igrave=278,e.ohungarumlaut=500,e.Eogonek=667,e.dcroat=556,e.threequarters=750,e.Scedilla=556,e.lcaron=394,e.Kcommaaccent=778,e.Lacute=667,e.trademark=1e3,e.edotaccent=444,e.Igrave=389,e.Imacron=389,e.Lcaron=667,e.onehalf=750
e.lessequal=549,e.ocircumflex=500,e.ntilde=556,e.Uhungarumlaut=722,e.Eacute=667,e.emacron=444,e.gbreve=500,e.onequarter=750,e.Scaron=556,e.Scommaaccent=556,e.Ohungarumlaut=778,e.degree=400,e.ograve=500,e.Ccaron=722,e.ugrave=556,e.radical=549,e.Dcaron=722,e.rcommaaccent=444,e.Ntilde=722,e.otilde=500,e.Rcommaaccent=722,e.Lcommaaccent=667,e.Atilde=722,e.Aogonek=722,e.Aring=722,e.Otilde=778,e.zdotaccent=444,e.Ecaron=667,e.Iogonek=389,e.kcommaaccent=556
e.minus=570,e.Icircumflex=389,e.ncaron=556,e.tcommaaccent=333,e.logicalnot=570,e.odieresis=500,e.udieresis=556,e.notequal=549,e.gcommaaccent=500,e.eth=500,e.zcaron=444,e.ncommaaccent=556,e.onesuperior=300,e.imacron=278,e.Euro=500})),e["Times-BoldItalic"]=(0,a.getLookupTableFactory)((function(e){e.space=250,e.exclam=389,e.quotedbl=555,e.numbersign=500,e.dollar=500,e.percent=833,e.ampersand=778,e.quoteright=333,e.parenleft=333,e.parenright=333,e.asterisk=500,e.plus=570,e.comma=250,e.hyphen=333,e.period=250,e.slash=278,e.zero=500,e.one=500,e.two=500,e.three=500,e.four=500,e.five=500,e.six=500,e.seven=500,e.eight=500,e.nine=500,e.colon=333,e.semicolon=333,e.less=570,e.equal=570
e.greater=570,e.question=500,e.at=832,e.A=667,e.B=667,e.C=667,e.D=722,e.E=667,e.F=667,e.G=722,e.H=778,e.I=389,e.J=500,e.K=667,e.L=611,e.M=889,e.N=722,e.O=722,e.P=611,e.Q=722,e.R=667,e.S=556,e.T=611,e.U=722,e.V=667,e.W=889,e.X=667,e.Y=611,e.Z=611,e.bracketleft=333
e.backslash=278,e.bracketright=333,e.asciicircum=570,e.underscore=500,e.quoteleft=333,e.a=500,e.b=500,e.c=444,e.d=500,e.e=444,e.f=333,e.g=500,e.h=556,e.i=278,e.j=278,e.k=500,e.l=278,e.m=778,e.n=556,e.o=500,e.p=500,e.q=500,e.r=389,e.s=389,e.t=278,e.u=556,e.v=444,e.w=667,e.x=500,e.y=444
e.z=389,e.braceleft=348,e.bar=220,e.braceright=348,e.asciitilde=570,e.exclamdown=389,e.cent=500,e.sterling=500,e.fraction=167,e.yen=500,e.florin=500,e.section=500,e.currency=500,e.quotesingle=278,e.quotedblleft=500,e.guillemotleft=500,e.guilsinglleft=333,e.guilsinglright=333,e.fi=556,e.fl=556,e.endash=500,e.dagger=500,e.daggerdbl=500,e.periodcentered=250,e.paragraph=500,e.bullet=350,e.quotesinglbase=333,e.quotedblbase=500,e.quotedblright=500,e.guillemotright=500
e.ellipsis=1e3,e.perthousand=1e3,e.questiondown=500,e.grave=333,e.acute=333,e.circumflex=333,e.tilde=333,e.macron=333,e.breve=333,e.dotaccent=333,e.dieresis=333,e.ring=333,e.cedilla=333,e.hungarumlaut=333,e.ogonek=333,e.caron=333,e.emdash=1e3,e.AE=944,e.ordfeminine=266,e.Lslash=611,e.Oslash=722,e.OE=944,e.ordmasculine=300,e.ae=722,e.dotlessi=278,e.lslash=278,e.oslash=500,e.oe=722,e.germandbls=500,e.Idieresis=389
e.eacute=444,e.abreve=500,e.uhungarumlaut=556,e.ecaron=444,e.Ydieresis=611,e.divide=570,e.Yacute=611,e.Acircumflex=667,e.aacute=500,e.Ucircumflex=722,e.yacute=444,e.scommaaccent=389,e.ecircumflex=444,e.Uring=722,e.Udieresis=722,e.aogonek=500,e.Uacute=722,e.uogonek=556,e.Edieresis=667,e.Dcroat=722,e.commaaccent=250,e.copyright=747,e.Emacron=667,e.ccaron=444,e.aring=500,e.Ncommaaccent=722,e.lacute=278,e.agrave=500,e.Tcommaaccent=611,e.Cacute=667
e.atilde=500,e.Edotaccent=667,e.scaron=389,e.scedilla=389,e.iacute=278,e.lozenge=494,e.Rcaron=667,e.Gcommaaccent=722,e.ucircumflex=556,e.acircumflex=500,e.Amacron=667,e.rcaron=389,e.ccedilla=444,e.Zdotaccent=611,e.Thorn=611,e.Omacron=722,e.Racute=667,e.Sacute=556,e.dcaron=608,e.Umacron=722,e.uring=556,e.threesuperior=300,e.Ograve=722,e.Agrave=667,e.Abreve=667,e.multiply=570,e.uacute=556,e.Tcaron=611,e.partialdiff=494,e.ydieresis=444
e.Nacute=722,e.icircumflex=278,e.Ecircumflex=667,e.adieresis=500,e.edieresis=444,e.cacute=444,e.nacute=556,e.umacron=556,e.Ncaron=722,e.Iacute=389,e.plusminus=570,e.brokenbar=220,e.registered=747,e.Gbreve=722,e.Idotaccent=389,e.summation=600,e.Egrave=667,e.racute=389,e.omacron=500,e.Zacute=611,e.Zcaron=611,e.greaterequal=549,e.Eth=722,e.Ccedilla=667,e.lcommaaccent=278,e.tcaron=366,e.eogonek=444,e.Uogonek=722,e.Aacute=667,e.Adieresis=667
e.egrave=444,e.zacute=389,e.iogonek=278,e.Oacute=722,e.oacute=500,e.amacron=500,e.sacute=389,e.idieresis=278,e.Ocircumflex=722,e.Ugrave=722,e.Delta=612,e.thorn=500,e.twosuperior=300,e.Odieresis=722,e.mu=576,e.igrave=278,e.ohungarumlaut=500,e.Eogonek=667,e.dcroat=500,e.threequarters=750,e.Scedilla=556,e.lcaron=382,e.Kcommaaccent=667,e.Lacute=611,e.trademark=1e3,e.edotaccent=444,e.Igrave=389,e.Imacron=389,e.Lcaron=611,e.onehalf=750
e.lessequal=549,e.ocircumflex=500,e.ntilde=556,e.Uhungarumlaut=722,e.Eacute=667,e.emacron=444,e.gbreve=500,e.onequarter=750,e.Scaron=556,e.Scommaaccent=556,e.Ohungarumlaut=722,e.degree=400,e.ograve=500,e.Ccaron=667,e.ugrave=556,e.radical=549,e.Dcaron=722,e.rcommaaccent=389,e.Ntilde=722,e.otilde=500,e.Rcommaaccent=667,e.Lcommaaccent=611,e.Atilde=667,e.Aogonek=667,e.Aring=667,e.Otilde=722,e.zdotaccent=389,e.Ecaron=667,e.Iogonek=389,e.kcommaaccent=500
e.minus=606,e.Icircumflex=389,e.ncaron=556,e.tcommaaccent=278,e.logicalnot=606,e.odieresis=500,e.udieresis=556,e.notequal=549,e.gcommaaccent=500,e.eth=500,e.zcaron=389,e.ncommaaccent=556,e.onesuperior=300,e.imacron=278,e.Euro=500})),e["Times-Italic"]=(0,a.getLookupTableFactory)((function(e){e.space=250,e.exclam=333,e.quotedbl=420,e.numbersign=500,e.dollar=500,e.percent=833,e.ampersand=778,e.quoteright=333,e.parenleft=333,e.parenright=333,e.asterisk=500,e.plus=675,e.comma=250,e.hyphen=333,e.period=250,e.slash=278,e.zero=500,e.one=500,e.two=500,e.three=500,e.four=500,e.five=500,e.six=500,e.seven=500,e.eight=500,e.nine=500,e.colon=333,e.semicolon=333,e.less=675,e.equal=675
e.greater=675,e.question=500,e.at=920,e.A=611,e.B=611,e.C=667,e.D=722,e.E=611,e.F=611,e.G=722,e.H=722,e.I=333,e.J=444,e.K=667,e.L=556,e.M=833,e.N=667,e.O=722,e.P=611,e.Q=722,e.R=611,e.S=500,e.T=556,e.U=722,e.V=611,e.W=833,e.X=611,e.Y=556,e.Z=556,e.bracketleft=389
e.backslash=278,e.bracketright=389,e.asciicircum=422,e.underscore=500,e.quoteleft=333,e.a=500,e.b=500,e.c=444,e.d=500,e.e=444,e.f=278,e.g=500,e.h=500,e.i=278,e.j=278,e.k=444,e.l=278,e.m=722,e.n=500,e.o=500,e.p=500,e.q=500,e.r=389,e.s=389,e.t=278,e.u=500,e.v=444,e.w=667,e.x=444,e.y=444
e.z=389,e.braceleft=400,e.bar=275,e.braceright=400,e.asciitilde=541,e.exclamdown=389,e.cent=500,e.sterling=500,e.fraction=167,e.yen=500,e.florin=500,e.section=500,e.currency=500,e.quotesingle=214,e.quotedblleft=556,e.guillemotleft=500,e.guilsinglleft=333,e.guilsinglright=333,e.fi=500,e.fl=500,e.endash=500,e.dagger=500,e.daggerdbl=500,e.periodcentered=250,e.paragraph=523,e.bullet=350,e.quotesinglbase=333,e.quotedblbase=556,e.quotedblright=556,e.guillemotright=500
e.ellipsis=889,e.perthousand=1e3,e.questiondown=500,e.grave=333,e.acute=333,e.circumflex=333,e.tilde=333,e.macron=333,e.breve=333,e.dotaccent=333,e.dieresis=333,e.ring=333,e.cedilla=333,e.hungarumlaut=333,e.ogonek=333,e.caron=333,e.emdash=889,e.AE=889,e.ordfeminine=276,e.Lslash=556,e.Oslash=722,e.OE=944,e.ordmasculine=310,e.ae=667,e.dotlessi=278,e.lslash=278,e.oslash=500,e.oe=667,e.germandbls=500,e.Idieresis=333
e.eacute=444,e.abreve=500,e.uhungarumlaut=500,e.ecaron=444,e.Ydieresis=556,e.divide=675,e.Yacute=556,e.Acircumflex=611,e.aacute=500,e.Ucircumflex=722,e.yacute=444,e.scommaaccent=389,e.ecircumflex=444,e.Uring=722,e.Udieresis=722,e.aogonek=500,e.Uacute=722,e.uogonek=500,e.Edieresis=611,e.Dcroat=722,e.commaaccent=250,e.copyright=760,e.Emacron=611,e.ccaron=444,e.aring=500,e.Ncommaaccent=667,e.lacute=278,e.agrave=500,e.Tcommaaccent=556,e.Cacute=667
e.atilde=500,e.Edotaccent=611,e.scaron=389,e.scedilla=389,e.iacute=278,e.lozenge=471,e.Rcaron=611,e.Gcommaaccent=722,e.ucircumflex=500,e.acircumflex=500,e.Amacron=611,e.rcaron=389,e.ccedilla=444,e.Zdotaccent=556,e.Thorn=611,e.Omacron=722,e.Racute=611,e.Sacute=500,e.dcaron=544,e.Umacron=722,e.uring=500,e.threesuperior=300,e.Ograve=722,e.Agrave=611,e.Abreve=611,e.multiply=675,e.uacute=500,e.Tcaron=556,e.partialdiff=476,e.ydieresis=444
e.Nacute=667,e.icircumflex=278,e.Ecircumflex=611,e.adieresis=500,e.edieresis=444,e.cacute=444,e.nacute=500,e.umacron=500,e.Ncaron=667,e.Iacute=333,e.plusminus=675,e.brokenbar=275,e.registered=760,e.Gbreve=722,e.Idotaccent=333,e.summation=600,e.Egrave=611,e.racute=389,e.omacron=500,e.Zacute=556,e.Zcaron=556,e.greaterequal=549,e.Eth=722,e.Ccedilla=667,e.lcommaaccent=278,e.tcaron=300,e.eogonek=444,e.Uogonek=722,e.Aacute=611,e.Adieresis=611
e.egrave=444,e.zacute=389,e.iogonek=278,e.Oacute=722,e.oacute=500,e.amacron=500,e.sacute=389,e.idieresis=278,e.Ocircumflex=722,e.Ugrave=722,e.Delta=612,e.thorn=500,e.twosuperior=300,e.Odieresis=722,e.mu=500,e.igrave=278,e.ohungarumlaut=500,e.Eogonek=611,e.dcroat=500,e.threequarters=750,e.Scedilla=500,e.lcaron=300,e.Kcommaaccent=667,e.Lacute=556,e.trademark=980,e.edotaccent=444,e.Igrave=333,e.Imacron=333,e.Lcaron=611,e.onehalf=750
e.lessequal=549,e.ocircumflex=500,e.ntilde=500,e.Uhungarumlaut=722,e.Eacute=611,e.emacron=444,e.gbreve=500,e.onequarter=750,e.Scaron=500,e.Scommaaccent=500,e.Ohungarumlaut=722,e.degree=400,e.ograve=500,e.Ccaron=667,e.ugrave=500,e.radical=453,e.Dcaron=722,e.rcommaaccent=389,e.Ntilde=667,e.otilde=500,e.Rcommaaccent=611,e.Lcommaaccent=556,e.Atilde=611,e.Aogonek=611,e.Aring=611,e.Otilde=722,e.zdotaccent=389,e.Ecaron=611,e.Iogonek=333,e.kcommaaccent=444
e.minus=675,e.Icircumflex=333,e.ncaron=500,e.tcommaaccent=278,e.logicalnot=675,e.odieresis=500,e.udieresis=500,e.notequal=549,e.gcommaaccent=500,e.eth=500,e.zcaron=389,e.ncommaaccent=500,e.onesuperior=300,e.imacron=278,e.Euro=500})),e.ZapfDingbats=(0,a.getLookupTableFactory)((function(e){e.space=278,e.a1=974,e.a2=961,e.a202=974,e.a3=980,e.a4=719,e.a5=789,e.a119=790,e.a118=791,e.a117=690,e.a11=960,e.a12=939,e.a13=549,e.a14=855,e.a15=911,e.a16=933,e.a105=911,e.a17=945,e.a18=974,e.a19=755,e.a20=846,e.a21=762,e.a22=761,e.a23=571,e.a24=677,e.a25=763,e.a26=760,e.a27=759,e.a28=754,e.a6=494
e.a7=552,e.a8=537,e.a9=577,e.a10=692,e.a29=786,e.a30=788,e.a31=788,e.a32=790,e.a33=793,e.a34=794,e.a35=816,e.a36=823,e.a37=789,e.a38=841,e.a39=823,e.a40=833,e.a41=816,e.a42=831,e.a43=923,e.a44=744,e.a45=723,e.a46=749,e.a47=790,e.a48=792,e.a49=695,e.a50=776,e.a51=768,e.a52=792,e.a53=759,e.a54=707
e.a55=708,e.a56=682,e.a57=701,e.a58=826,e.a59=815,e.a60=789,e.a61=789,e.a62=707,e.a63=687,e.a64=696,e.a65=689,e.a66=786,e.a67=787,e.a68=713,e.a69=791,e.a70=785,e.a71=791,e.a72=873,e.a73=761,e.a74=762,e.a203=762,e.a75=759,e.a204=759,e.a76=892,e.a77=892,e.a78=788,e.a79=784,e.a81=438,e.a82=138,e.a83=277
e.a84=415,e.a97=392,e.a98=392,e.a99=668,e.a100=668,e.a89=390,e.a90=390,e.a93=317,e.a94=317,e.a91=276,e.a92=276,e.a205=509,e.a85=509,e.a206=410,e.a86=410,e.a87=234,e.a88=234,e.a95=334,e.a96=334,e.a101=732,e.a102=544,e.a103=544,e.a104=910,e.a106=667,e.a107=760,e.a108=760,e.a112=776,e.a111=595,e.a110=694,e.a109=626
e.a120=788,e.a121=788,e.a122=788,e.a123=788,e.a124=788,e.a125=788,e.a126=788,e.a127=788,e.a128=788,e.a129=788,e.a130=788,e.a131=788,e.a132=788,e.a133=788,e.a134=788,e.a135=788,e.a136=788,e.a137=788,e.a138=788,e.a139=788,e.a140=788,e.a141=788,e.a142=788,e.a143=788,e.a144=788,e.a145=788,e.a146=788,e.a147=788,e.a148=788,e.a149=788
e.a150=788,e.a151=788,e.a152=788,e.a153=788,e.a154=788,e.a155=788,e.a156=788,e.a157=788,e.a158=788,e.a159=788,e.a160=894,e.a161=838,e.a163=1016,e.a164=458,e.a196=748,e.a165=924,e.a192=748,e.a166=918,e.a167=927,e.a168=928,e.a169=928,e.a170=834,e.a171=873,e.a172=828,e.a173=924,e.a162=924,e.a174=917,e.a175=930,e.a176=931,e.a177=463
e.a178=883,e.a179=836,e.a193=836,e.a180=867,e.a199=867,e.a181=696,e.a200=696,e.a182=874,e.a201=874,e.a183=760,e.a184=946,e.a197=771,e.a185=865,e.a194=771,e.a198=888,e.a186=967,e.a195=888,e.a187=831,e.a188=873,e.a189=927,e.a190=970,e.a191=918}))}))
t.getMetrics=n},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.MurmurHash3_64=void 0
var a=r(5)
function n(e,t){for(var r=0;r<t.length;r++){var a=t[r]
a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var i=3285377520,o=4294901760,s=65535,c=function(){function e(t){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.h1=t?4294967295&t:i,this.h2=t?4294967295&t:i}var t,r,c
return t=e,(r=[{key:"update",value:function(e){var t,r
if((0,a.isString)(e)){t=new Uint8Array(2*e.length),r=0
for(var n=0,i=e.length;n<i;n++){var c=e.charCodeAt(n)
c<=255?t[r++]=c:(t[r++]=c>>>8,t[r++]=255&c)}}else{if(!(0,a.isArrayBuffer)(e))throw new Error("Wrong data format in MurmurHash3_64_update. Input must be a string or array.")
r=(t=e).byteLength}for(var l=r>>2,u=r-4*l,h=new Uint32Array(t.buffer,0,l),f=0,d=0,p=this.h1,g=this.h2,m=3432918353,v=461845907,b=11601,y=13715,w=0;w<l;w++)1&w?p=5*(p=(p^=f=(f=(f=(f=h[w])*m&o|f*b&s)<<15|f>>>17)*v&o|f*y&s)<<13|p>>>19)+3864292196:g=5*(g=(g^=d=(d=(d=(d=h[w])*m&o|d*b&s)<<15|d>>>17)*v&o|d*y&s)<<13|g>>>19)+3864292196
switch(f=0,u){case 3:f^=t[4*l+2]<<16
case 2:f^=t[4*l+1]<<8
case 1:f=(f=(f=(f^=t[4*l])*m&o|f*b&s)<<15|f>>>17)*v&o|f*y&s,1&l?p^=f:g^=f}this.h1=p,this.h2=g}},{key:"hexdigest",value:function(){var e=this.h1,t=this.h2
e=3981806797*(e^=t>>>1)&o|36045*e&s,e=444984403*(e^=(t=4283543511*t&o|(2950163797*(t<<16|e>>>16)&o)>>>16)>>>1)&o|60499*e&s
var r=((e^=(t=3301882366*t&o|(3120437893*(t<<16|e>>>16)&o)>>>16)>>>1)>>>0).toString(16),a=(t>>>0).toString(16)
return r.padStart(8,"0")+a.padStart(8,"0")}}])&&n(t.prototype,r),c&&n(t,c),e}()
t.MurmurHash3_64=c},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.PDFImage=void 0
var a,n=(a=r(2))&&a.__esModule?a:{default:a},i=r(5),o=r(202),s=r(220),c=r(209),l=r(215),u=r(218)
function h(e,t,r,a,n,i,o){try{var s=e[i](o),c=s.value}catch(l){return void r(l)}s.done?t(c):Promise.resolve(c).then(a,n)}function f(e,t){for(var r=0;r<t.length;r++){var a=t[r]
a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function d(e,t,r,a){return(e=t+e*r)<0?e=0:e>a&&(e=a),e}function p(e,t,r,a,n,i){var o,s=n*i
o=t<=8?new Uint8Array(s):t<=16?new Uint16Array(s):new Uint32Array(s)
var c,l,u,h,f=r/n,d=a/i,p=0,g=new Uint16Array(n),m=r
for(c=0;c<n;c++)g[c]=Math.floor(c*f)
for(c=0;c<i;c++)for(u=Math.floor(c*d)*m,l=0;l<n;l++)h=u+g[l],o[p++]=e[h]
return o}var g=function(){function e(t){var r=t.xref,a=t.res,n=t.image,c=t.isInline,l=void 0!==c&&c,h=t.smask,f=void 0===h?null:h,d=t.mask,p=void 0===d?null:d,g=t.isMask,m=void 0!==g&&g,v=t.pdfFunctionFactory,b=t.localColorSpaceCache;(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.image=n
var y=n.dict,w=y.get("Filter")
if((0,o.isName)(w))switch(w.name){case"JPXDecode":var k=new u.JpxImage
k.parseImageProperties(n.stream),n.stream.reset(),n.width=k.width,n.height=k.height,n.bitsPerComponent=k.bitsPerComponent,n.numComps=k.componentsCount
break
case"JBIG2Decode":n.bitsPerComponent=1,n.numComps=1}var S=y.get("Width","W"),x=y.get("Height","H")
if(Number.isInteger(n.width)&&n.width>0&&Number.isInteger(n.height)&&n.height>0&&(n.width!==S||n.height!==x)&&((0,i.warn)("PDFImage - using the Width/Height of the image data, rather than the image dictionary."),S=n.width,x=n.height),S<1||x<1)throw new i.FormatError("Invalid image width: ".concat(S," or height: ").concat(x))
this.width=S,this.height=x,this.interpolate=y.get("Interpolate","I")||!1,this.imageMask=y.get("ImageMask","IM")||!1,this.matte=y.get("Matte")||!1
var C=n.bitsPerComponent
if(!C&&!(C=y.get("BitsPerComponent","BPC"))){if(!this.imageMask)throw new i.FormatError("Bits per component missing in image: ".concat(this.imageMask))
C=1}if(this.bpc=C,!this.imageMask){var A=y.getRaw("ColorSpace")||y.getRaw("CS")
if(!A)switch((0,i.info)("JPX images (which do not require color spaces)"),n.numComps){case 1:A=o.Name.get("DeviceGray")
break
case 3:A=o.Name.get("DeviceRGB")
break
case 4:A=o.Name.get("DeviceCMYK")
break
default:throw new Error("JPX images with ".concat(n.numComps," ")+"color components not supported.")}this.colorSpace=s.ColorSpace.parse({cs:A,xref:r,resources:l?a:null,pdfFunctionFactory:v,localColorSpaceCache:b}),this.numComps=this.colorSpace.numComps}if(this.decode=y.getArray("Decode","D"),this.needsDecode=!1,this.decode&&(this.colorSpace&&!this.colorSpace.isDefaultDecode(this.decode,C)||m&&!s.ColorSpace.isDefaultDecode(this.decode,1))){this.needsDecode=!0
var O=(1<<C)-1
this.decodeCoefficients=[],this.decodeAddends=[]
for(var T=this.colorSpace&&"Indexed"===this.colorSpace.name,I=0,E=0;I<this.decode.length;I+=2,++E){var P=this.decode[I],_=this.decode[I+1]
this.decodeCoefficients[E]=T?(_-P)/O:_-P,this.decodeAddends[E]=T?P:O*P}}if(f)this.smask=new e({xref:r,res:a,image:f,isInline:l,pdfFunctionFactory:v,localColorSpaceCache:b})
else if(p){if((0,o.isStream)(p))p.dict.get("ImageMask","IM")?this.mask=new e({xref:r,res:a,image:p,isInline:l,isMask:!0,pdfFunctionFactory:v,localColorSpaceCache:b}):(0,i.warn)("Ignoring /Mask in image without /ImageMask.")
else this.mask=p}}var t,r,a,g,m
return t=e,r=[{key:"decodeBuffer",value:function(e){var t,r,a=this.bpc,n=this.numComps,i=this.decodeAddends,o=this.decodeCoefficients,s=(1<<a)-1
if(1!==a){var c=0
for(t=0,r=this.width*this.height;t<r;t++)for(var l=0;l<n;l++)e[c]=d(e[c],i[l],o[l],s),c++}else for(t=0,r=e.length;t<r;t++)e[t]=+!e[t]}},{key:"getComponents",value:function(e){var t=this.bpc
if(8===t)return e
var r,a=this.width,n=this.height,i=this.numComps,o=a*n*i,s=0
r=t<=8?new Uint8Array(o):t<=16?new Uint16Array(o):new Uint32Array(o)
var c,l,u=a*i,h=(1<<t)-1,f=0
if(1===t)for(var d,p,g,m=0;m<n;m++){for(p=f+(-8&u),g=f+u;f<p;)l=e[s++],r[f]=l>>7&1,r[f+1]=l>>6&1,r[f+2]=l>>5&1,r[f+3]=l>>4&1,r[f+4]=l>>3&1,r[f+5]=l>>2&1,r[f+6]=l>>1&1,r[f+7]=1&l,f+=8
if(f<g)for(l=e[s++],d=128;f<g;)r[f++]=+!!(l&d),d>>=1}else{var v=0
for(l=0,f=0,c=o;f<c;++f){for(f%u==0&&(l=0,v=0);v<t;)l=l<<8|e[s++],v+=8
var b=v-t,y=l>>b
y<0?y=0:y>h&&(y=h),r[f]=y,l&=(1<<b)-1,v=b}}return r}},{key:"fillOpacity",value:function(t,r,a,n,o){var s,c,l,u,h,f,d=this.smask,g=this.mask
if(d)c=d.width,l=d.height,s=new Uint8ClampedArray(c*l),d.fillGrayBuffer(s),c===r&&l===a||(s=p(s,d.bpc,c,l,r,a))
else if(g)if(g instanceof e){for(c=g.width,l=g.height,s=new Uint8ClampedArray(c*l),g.numComps=1,g.fillGrayBuffer(s),u=0,h=c*l;u<h;++u)s[u]=255-s[u]
c===r&&l===a||(s=p(s,g.bpc,c,l,r,a))}else{if(!Array.isArray(g))throw new i.FormatError("Unknown mask format.")
s=new Uint8ClampedArray(r*a)
var m=this.numComps
for(u=0,h=r*a;u<h;++u){var v=0,b=u*m
for(f=0;f<m;++f){var y=o[b+f],w=2*f
if(y<g[w]||y>g[w+1]){v=255
break}}s[u]=v}}if(s)for(u=0,f=3,h=r*n;u<h;++u,f+=4)t[f]=s[u]
else for(u=0,f=3,h=r*n;u<h;++u,f+=4)t[f]=255}},{key:"undoPreblend",value:function(e,t,r){var a=this.smask&&this.smask.matte
if(a)for(var n=this.colorSpace.getRgb(a,0),i=n[0],o=n[1],s=n[2],c=t*r*4,l=0;l<c;l+=4){var u=e[l+3]
if(0!==u){var h=255/u
e[l]=(e[l]-i)*h+i,e[l+1]=(e[l+1]-o)*h+o,e[l+2]=(e[l+2]-s)*h+s}else e[l]=255,e[l+1]=255,e[l+2]=255}}},{key:"createImageData",value:function(){var e,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],r=this.drawWidth,a=this.drawHeight,n={width:r,height:a,kind:0,data:null},o=this.numComps,s=this.width,u=this.height,h=this.bpc,f=s*o*h+7>>3
if(!t){var d
if("DeviceGray"===this.colorSpace.name&&1===h?d=i.ImageKind.GRAYSCALE_1BPP:"DeviceRGB"!==this.colorSpace.name||8!==h||this.needsDecode||(d=i.ImageKind.RGB_24BPP),d&&!this.smask&&!this.mask&&r===s&&a===u){if(n.kind=d,e=this.getImageBytes(u*f),this.image instanceof c.DecodeStream)n.data=e
else{var p=new Uint8ClampedArray(e.length)
p.set(e),n.data=p}if(this.needsDecode){(0,i.assert)(d===i.ImageKind.GRAYSCALE_1BPP,"PDFImage.createImageData: The image must be grayscale.")
for(var g=n.data,m=0,v=g.length;m<v;m++)g[m]^=255}return n}if(this.image instanceof l.JpegStream&&!this.smask&&!this.mask){var b=u*f
switch(this.colorSpace.name){case"DeviceGray":b*=3
case"DeviceRGB":case"DeviceCMYK":return n.kind=i.ImageKind.RGB_24BPP,n.data=this.getImageBytes(b,r,a,!0),n}}}var y,w,k=0|(e=this.getImageBytes(u*f)).length/f*a/u,S=this.getComponents(e)
return t||this.smask||this.mask?(n.kind=i.ImageKind.RGBA_32BPP,n.data=new Uint8ClampedArray(r*a*4),y=1,w=!0,this.fillOpacity(n.data,r,a,k,S)):(n.kind=i.ImageKind.RGB_24BPP,n.data=new Uint8ClampedArray(r*a*3),y=0,w=!1),this.needsDecode&&this.decodeBuffer(S),this.colorSpace.fillRgb(n.data,s,u,r,a,k,h,S,y),w&&this.undoPreblend(n.data,r,k),n}},{key:"fillGrayBuffer",value:function(e){var t=this.numComps
if(1!==t)throw new i.FormatError("Reading gray scale from a color image: ".concat(t))
var r,a,n=this.width,o=this.height,s=this.bpc,c=n*t*s+7>>3,l=this.getImageBytes(o*c),u=this.getComponents(l)
if(1!==s){this.needsDecode&&this.decodeBuffer(u),a=n*o
var h=255/((1<<s)-1)
for(r=0;r<a;++r)e[r]=h*u[r]}else if(a=n*o,this.needsDecode)for(r=0;r<a;++r)e[r]=u[r]-1&255
else for(r=0;r<a;++r)e[r]=255&-u[r]}},{key:"getImageBytes",value:function(e,t,r){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3]
return this.image.reset(),this.image.drawWidth=t||this.width,this.image.drawHeight=r||this.height,this.image.forceRGB=!!a,this.image.getBytes(e,!0)}},{key:"drawWidth",get:function(){return Math.max(this.width,this.smask&&this.smask.width||0,this.mask&&this.mask.width||0)}},{key:"drawHeight",get:function(){return Math.max(this.height,this.smask&&this.smask.height||0,this.mask&&this.mask.height||0)}}],a=[{key:"buildImage",value:(g=n.default.mark((function t(r){var a,s,c,l,u,h,f,d,p,g,m,v
return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r.xref,s=r.res,c=r.image,l=r.isInline,u=void 0!==l&&l,h=r.pdfFunctionFactory,f=r.localColorSpaceCache,d=c,p=null,g=null,m=c.dict.get("SMask"),v=c.dict.get("Mask"),m?p=m:v&&((0,o.isStream)(v)||Array.isArray(v)?g=v:(0,i.warn)("Unsupported mask format.")),t.abrupt("return",new e({xref:a,res:s,image:d,isInline:u,smask:p,mask:g,pdfFunctionFactory:h,localColorSpaceCache:f}))
case 8:case"end":return t.stop()}}),t)})),m=function(){var e=this,t=arguments
return new Promise((function(r,a){var n=g.apply(e,t)
function i(e){h(n,r,a,i,o,"next",e)}function o(e){h(n,r,a,i,o,"throw",e)}i(void 0)}))},function(e){return m.apply(this,arguments)})},{key:"createMask",value:function(e){var t,r,a=e.imgArray,n=e.width,i=e.height,o=e.imageIsFromDecodeStream,s=e.inverseDecode,c=(n+7>>3)*i,l=a.byteLength
if(!o||s&&c!==l)if(s)for((t=new Uint8ClampedArray(c)).set(a),r=l;r<c;r++)t[r]=255
else(t=new Uint8ClampedArray(l)).set(a)
else t=a
if(s)for(r=0;r<l;r++)t[r]^=255
return{data:t,width:n,height:i}}}],r&&f(t.prototype,r),a&&f(t,a),e}()
t.PDFImage=g},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.MessageHandler=void 0
var a,n=(a=r(2))&&a.__esModule?a:{default:a},i=r(5)
function o(e,t,r,a,n,i,o){try{var s=e[i](o),c=s.value}catch(l){return void r(l)}s.done?t(c):Promise.resolve(c).then(a,n)}function s(e,t){for(var r=0;r<t.length;r++){var a=t[r]
a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var l=1,u=2,h=1,f=2,d=3,p=4,g=5,m=6,v=7,b=8
function y(e){if("object"!==c(e)||null===e)return e
switch(e.name){case"AbortException":return new i.AbortException(e.message)
case"MissingPDFException":return new i.MissingPDFException(e.message)
case"UnexpectedResponseException":return new i.UnexpectedResponseException(e.message,e.status)
case"UnknownErrorException":return new i.UnknownErrorException(e.message,e.details)
default:return new i.UnknownErrorException(e.message,e.toString())}}var w=function(){function e(t,r,a){var n=this;(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.sourceName=t,this.targetName=r,this.comObj=a,this.callbackId=1,this.streamId=1,this.postMessageTransfers=!0,this.streamSinks=Object.create(null),this.streamControllers=Object.create(null),this.callbackCapabilities=Object.create(null),this.actionHandler=Object.create(null),this._onComObjOnMessage=function(e){var t=e.data
if(t.targetName===n.sourceName)if(t.stream)n._processStreamMessage(t)
else if(t.callback){var r=t.callbackId,i=n.callbackCapabilities[r]
if(!i)throw new Error("Cannot resolve callback ".concat(r))
if(delete n.callbackCapabilities[r],t.callback===l)i.resolve(t.data)
else{if(t.callback!==u)throw new Error("Unexpected callback case")
i.reject(y(t.reason))}}else{var o=n.actionHandler[t.action]
if(!o)throw new Error("Unknown action from worker: ".concat(t.action))
if(t.callbackId){var s=n.sourceName,c=t.sourceName
new Promise((function(e){e(o(t.data))})).then((function(e){a.postMessage({sourceName:s,targetName:c,callback:l,callbackId:t.callbackId,data:e})}),(function(e){a.postMessage({sourceName:s,targetName:c,callback:u,callbackId:t.callbackId,reason:y(e)})}))}else t.streamId?n._createStreamSink(t):o(t.data)}},a.addEventListener("message",this._onComObjOnMessage)}var t,r,a,c,w
return t=e,(r=[{key:"on",value:function(e,t){var r=this.actionHandler
if(r[e])throw new Error('There is already an actionName called "'.concat(e,'"'))
r[e]=t}},{key:"send",value:function(e,t,r){this._postMessage({sourceName:this.sourceName,targetName:this.targetName,action:e,data:t},r)}},{key:"sendWithPromise",value:function(e,t,r){var a=this.callbackId++,n=(0,i.createPromiseCapability)()
this.callbackCapabilities[a]=n
try{this._postMessage({sourceName:this.sourceName,targetName:this.targetName,action:e,callbackId:a,data:t},r)}catch(o){n.reject(o)}return n.promise}},{key:"sendWithStream",value:function(e,t,r,a){var n=this,o=this.streamId++,s=this.sourceName,c=this.targetName,l=this.comObj
return new ReadableStream({start:function(r){var l=(0,i.createPromiseCapability)()
return n.streamControllers[o]={controller:r,startCall:l,pullCall:null,cancelCall:null,isClosed:!1},n._postMessage({sourceName:s,targetName:c,action:e,streamId:o,data:t,desiredSize:r.desiredSize},a),l.promise},pull:function(e){var t=(0,i.createPromiseCapability)()
return n.streamControllers[o].pullCall=t,l.postMessage({sourceName:s,targetName:c,stream:m,streamId:o,desiredSize:e.desiredSize}),t.promise},cancel:function(e){(0,i.assert)(e instanceof Error,"cancel must have a valid reason")
var t=(0,i.createPromiseCapability)()
return n.streamControllers[o].cancelCall=t,n.streamControllers[o].isClosed=!0,l.postMessage({sourceName:s,targetName:c,stream:h,streamId:o,reason:y(e)}),t.promise}},r)}},{key:"_createStreamSink",value:function(e){var t=this,r=this.actionHandler[e.action],a=e.streamId,n=this.sourceName,o=e.sourceName,s=this.comObj,c={enqueue:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,s=arguments.length>2?arguments[2]:void 0
if(!this.isCancelled){var c=this.desiredSize
this.desiredSize-=r,c>0&&this.desiredSize<=0&&(this.sinkCapability=(0,i.createPromiseCapability)(),this.ready=this.sinkCapability.promise),t._postMessage({sourceName:n,targetName:o,stream:p,streamId:a,chunk:e},s)}},close:function(){this.isCancelled||(this.isCancelled=!0,s.postMessage({sourceName:n,targetName:o,stream:d,streamId:a}),delete t.streamSinks[a])},error:function(e){(0,i.assert)(e instanceof Error,"error must have a valid reason"),this.isCancelled||(this.isCancelled=!0,s.postMessage({sourceName:n,targetName:o,stream:g,streamId:a,reason:y(e)}))},sinkCapability:(0,i.createPromiseCapability)(),onPull:null,onCancel:null,isCancelled:!1,desiredSize:e.desiredSize,ready:null}
c.sinkCapability.resolve(),c.ready=c.sinkCapability.promise,this.streamSinks[a]=c,new Promise((function(t){t(r(e.data,c))})).then((function(){s.postMessage({sourceName:n,targetName:o,stream:b,streamId:a,success:!0})}),(function(e){s.postMessage({sourceName:n,targetName:o,stream:b,streamId:a,reason:y(e)})}))}},{key:"_processStreamMessage",value:function(e){var t=e.streamId,r=this.sourceName,a=e.sourceName,n=this.comObj
switch(e.stream){case b:e.success?this.streamControllers[t].startCall.resolve():this.streamControllers[t].startCall.reject(y(e.reason))
break
case v:e.success?this.streamControllers[t].pullCall.resolve():this.streamControllers[t].pullCall.reject(y(e.reason))
break
case m:if(!this.streamSinks[t]){n.postMessage({sourceName:r,targetName:a,stream:v,streamId:t,success:!0})
break}this.streamSinks[t].desiredSize<=0&&e.desiredSize>0&&this.streamSinks[t].sinkCapability.resolve(),this.streamSinks[t].desiredSize=e.desiredSize
var o=this.streamSinks[e.streamId].onPull
new Promise((function(e){e(o&&o())})).then((function(){n.postMessage({sourceName:r,targetName:a,stream:v,streamId:t,success:!0})}),(function(e){n.postMessage({sourceName:r,targetName:a,stream:v,streamId:t,reason:y(e)})}))
break
case p:if((0,i.assert)(this.streamControllers[t],"enqueue should have stream controller"),this.streamControllers[t].isClosed)break
this.streamControllers[t].controller.enqueue(e.chunk)
break
case d:if((0,i.assert)(this.streamControllers[t],"close should have stream controller"),this.streamControllers[t].isClosed)break
this.streamControllers[t].isClosed=!0,this.streamControllers[t].controller.close(),this._deleteStreamController(t)
break
case g:(0,i.assert)(this.streamControllers[t],"error should have stream controller"),this.streamControllers[t].controller.error(y(e.reason)),this._deleteStreamController(t)
break
case f:e.success?this.streamControllers[t].cancelCall.resolve():this.streamControllers[t].cancelCall.reject(y(e.reason)),this._deleteStreamController(t)
break
case h:if(!this.streamSinks[t])break
var s=this.streamSinks[e.streamId].onCancel
new Promise((function(t){t(s&&s(y(e.reason)))})).then((function(){n.postMessage({sourceName:r,targetName:a,stream:f,streamId:t,success:!0})}),(function(e){n.postMessage({sourceName:r,targetName:a,stream:f,streamId:t,reason:y(e)})})),this.streamSinks[t].sinkCapability.reject(y(e.reason)),this.streamSinks[t].isCancelled=!0,delete this.streamSinks[t]
break
default:throw new Error("Unexpected stream case")}}},{key:"_deleteStreamController",value:(c=n.default.mark((function e(t){return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.allSettled([this.streamControllers[t].startCall,this.streamControllers[t].pullCall,this.streamControllers[t].cancelCall].map((function(e){return e&&e.promise})))
case 2:delete this.streamControllers[t]
case 3:case"end":return e.stop()}}),e,this)})),w=function(){var e=this,t=arguments
return new Promise((function(r,a){var n=c.apply(e,t)
function i(e){o(n,r,a,i,s,"next",e)}function s(e){o(n,r,a,i,s,"throw",e)}i(void 0)}))},function(e){return w.apply(this,arguments)})},{key:"_postMessage",value:function(e,t){t&&this.postMessageTransfers?this.comObj.postMessage(e,t):this.comObj.postMessage(e)}},{key:"destroy",value:function(){this.comObj.removeEventListener("message",this._onComObjOnMessage)}}])&&s(t.prototype,r),a&&s(t,a),e}()
t.MessageHandler=w},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.PDFWorkerStream=void 0
var a,n=(a=r(2))&&a.__esModule?a:{default:a},i=r(5)
function o(e,t,r,a,n,i,o){try{var s=e[i](o),c=s.value}catch(l){return void r(l)}s.done?t(c):Promise.resolve(c).then(a,n)}function s(e){return function(){var t=this,r=arguments
return new Promise((function(a,n){var i=e.apply(t,r)
function s(e){o(i,a,n,s,c,"next",e)}function c(e){o(i,a,n,s,c,"throw",e)}s(void 0)}))}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var a=t[r]
a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function u(e,t,r){return t&&l(e.prototype,t),r&&l(e,r),e}var h=function(){function e(t){c(this,e),this._msgHandler=t,this._contentLength=null,this._fullRequestReader=null,this._rangeRequestReaders=[]}return u(e,[{key:"getFullReader",value:function(){return(0,i.assert)(!this._fullRequestReader,"PDFWorkerStream.getFullReader can only be called once."),this._fullRequestReader=new f(this._msgHandler),this._fullRequestReader}},{key:"getRangeReader",value:function(e,t){var r=new d(e,t,this._msgHandler)
return this._rangeRequestReaders.push(r),r}},{key:"cancelAllRequests",value:function(e){this._fullRequestReader&&this._fullRequestReader.cancel(e),this._rangeRequestReaders.slice(0).forEach((function(t){t.cancel(e)}))}}]),e}()
t.PDFWorkerStream=h
var f=function(){function e(t){var r=this
c(this,e),this._msgHandler=t,this.onProgress=null,this._contentLength=null,this._isRangeSupported=!1,this._isStreamingSupported=!1
var a=this._msgHandler.sendWithStream("GetReader")
this._reader=a.getReader(),this._headersReady=this._msgHandler.sendWithPromise("ReaderHeadersReady").then((function(e){r._isStreamingSupported=e.isStreamingSupported,r._isRangeSupported=e.isRangeSupported,r._contentLength=e.contentLength}))}var t
return u(e,[{key:"read",value:(t=s(n.default.mark((function e(){var t,r
return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._reader.read()
case 2:if(t=e.sent,r=t.value,!t.done){e.next=7
break}return e.abrupt("return",{value:void 0,done:!0})
case 7:return e.abrupt("return",{value:r.buffer,done:!1})
case 8:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"cancel",value:function(e){this._reader.cancel(e)}},{key:"headersReady",get:function(){return this._headersReady}},{key:"contentLength",get:function(){return this._contentLength}},{key:"isStreamingSupported",get:function(){return this._isStreamingSupported}},{key:"isRangeSupported",get:function(){return this._isRangeSupported}}]),e}(),d=function(){function e(t,r,a){c(this,e),this._msgHandler=a,this.onProgress=null
var n=this._msgHandler.sendWithStream("GetRangeReader",{begin:t,end:r})
this._reader=n.getReader()}var t
return u(e,[{key:"read",value:(t=s(n.default.mark((function e(){var t,r
return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._reader.read()
case 2:if(t=e.sent,r=t.value,!t.done){e.next=7
break}return e.abrupt("return",{value:void 0,done:!0})
case 7:return e.abrupt("return",{value:r.buffer,done:!1})
case 8:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"cancel",value:function(e){this._reader.cancel(e)}},{key:"isStreamingSupported",get:function(){return!1}}]),e}()}])}))
