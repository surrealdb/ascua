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
(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("pdfjs-dist/build/pdf.worker",[],t):"object"==typeof exports?exports["pdfjs-dist/build/pdf.worker"]=t():e["pdfjs-dist/build/pdf.worker"]=e.pdfjsWorker=t()})(this,(function(){return(()=>{var e=[(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"WorkerMessageHandler",{enumerable:!0,get:function(){return a.WorkerMessageHandler}})
var a=r(1)},(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.WorkerTask=t.WorkerMessageHandler=void 0
var a,n=(a=r(2))&&a.__esModule?a:{default:a},i=r(4),o=r(135),s=r(136),c=r(176),l=r(6),u=r(178),h=r(179),f=r(138)
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
t.postMessageTransfers=r,t.send("test",{supportTransfers:r})}else t.send("test",null)})),t.on("configure",(function(e){(0,i.setVerbosityLevel)(e.verbosity)})),t.on("GetDocRequest",(function(t){return e.createDocumentHandler(t,r)}))}},{key:"createDocumentHandler",value:function(e,t){var r,a=!1,l=null,g=[],v=(0,i.getVerbosityLevel)(),b=e.apiVersion,y="2.7.570"
if(b!==y)throw new Error('The API version "'.concat(b,'" does not match ')+'the Worker version "'.concat(y,'".'))
var k=[]
for(var S in[])k.push(S)
if(k.length)throw new Error("The `Array.prototype` contains unexpected enumerable properties: "+k.join(", ")+"; thus breaking e.g. `for...in` iteration of `Array`s.")
var x=e.docId,A=e.docBaseUrl,O=e.docId+"_worker",T=new u.MessageHandler(O,x,t)
function I(){if(a)throw new Error("Worker was terminated")}function P(e){g.push(e)}function E(e){e.finish()
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
return r.ensureCatalog("getPageIndex",[a])})),T.on("GetDestinations",(function(e){return r.ensureCatalog("destinations")})),T.on("GetDestination",(function(e){return r.ensureCatalog("getDestination",[e.id])})),T.on("GetPageLabels",(function(e){return r.ensureCatalog("pageLabels")})),T.on("GetPageLayout",(function(e){return r.ensureCatalog("pageLayout")})),T.on("GetPageMode",(function(e){return r.ensureCatalog("pageMode")})),T.on("GetViewerPreferences",(function(e){return r.ensureCatalog("viewerPreferences")})),T.on("GetOpenAction",(function(e){return r.ensureCatalog("openAction")})),T.on("GetAttachments",(function(e){return r.ensureCatalog("attachments")})),T.on("GetJavaScript",(function(e){return r.ensureCatalog("javaScript")})),T.on("GetDocJSActions",(function(e){return r.ensureCatalog("jsActions")})),T.on("GetPageJSActions",(function(e){var t=e.pageIndex
return r.getPage(t).then((function(e){return e.jsActions}))})),T.on("GetOutline",(function(e){return r.ensureCatalog("documentOutline")})),T.on("GetOptionalContentConfig",(function(e){return r.ensureCatalog("optionalContentConfig")})),T.on("GetPermissions",(function(e){return r.ensureCatalog("permissions")})),T.on("GetMetadata",(function(e){return Promise.all([r.ensureDoc("documentInfo"),r.ensureCatalog("metadata")])})),T.on("GetMarkInfo",(function(e){return r.ensureCatalog("markInfo")})),T.on("GetData",(function(e){return r.requestLoadedStream(),r.onLoadedStream().then((function(e){return e.bytes}))})),T.on("GetStats",(function(e){return r.ensureXRef("stats")})),T.on("GetAnnotations",(function(e){var t=e.pageIndex,a=e.intent
return r.getPage(t).then((function(e){return e.getAnnotationsData(a)}))})),T.on("GetFieldObjects",(function(e){return r.ensureDoc("fieldObjects")})),T.on("HasJSActions",(function(e){return r.ensureDoc("hasJSActions")})),T.on("GetCalculationOrderIds",(function(e){return r.ensureDoc("calculationOrderIds")})),T.on("SaveDocument",(function(e){var t=e.numPages,a=e.annotationStorage,n=e.filename
r.requestLoadedStream()
for(var s=[r.onLoadedStream(),r.ensureCatalog("acroForm"),r.ensureDoc("xref"),r.ensureDoc("startXRef")],l=function(e){s.push(r.getPage(e).then((function(t){var r=new C("Save: page ".concat(e))
return P(r),t.save(T,r,a).finally((function(){E(r)}))})))},u=0;u<t;u++)l(u)
return Promise.all(s).then((function(e){var t,r=d(e),a=r[0],s=r[1],l=r[2],u=r[3],h=[],f=function(e,t){var r
if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=m(e))||t&&e&&"number"==typeof e.length){r&&(e=r)
var a=0,n=function(){}
return{s:n,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1
return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next()
return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==r.return||r.return()}finally{if(s)throw i}}}}(r.slice(4))
try{for(f.s();!(t=f.n()).done;){h=t.value.filter((function(e){return null!==e})).reduce((function(e,t){return e.concat(t)}),h)}}catch(S){f.e(S)}finally{f.f()}if(0===h.length)return a.bytes
var p=s instanceof o.Dict&&s.get("XFA")||[],g=null
if(Array.isArray(p))for(var v=0,b=p.length;v<b;v+=2)"datasets"===p[v]&&(g=p[v+1])
else(0,i.warn)("Unsupported XFA type.")
var y=Object.create(null)
if(l.trailer){var w=Object.create(null),k=l.trailer.get("Info")||null
k instanceof o.Dict&&k.forEach((function(e,t){(0,i.isString)(e)&&(0,i.isString)(t)&&(w[e]=(0,i.stringToPDFString)(t))})),y={rootRef:l.trailer.getRaw("Root")||null,encrypt:l.trailer.getRaw("Encrypt")||null,newRef:l.getNewRef(),infoRef:l.trailer.getRaw("Info")||null,info:w,fileIds:l.trailer.getRaw("ID")||null,startXRef:u,filename:n}}return l.resetNewRef(),(0,c.incrementalUpdate)({originalData:a.bytes,xrefInfo:y,newRefs:h,xref:l,datasetsRef:g})}))})),T.on("GetOperatorList",(function(e,t){var a=e.pageIndex
r.getPage(a).then((function(r){var n=new C("GetOperatorList: page ".concat(a))
P(n)
var o=v>=i.VerbosityLevel.INFOS?Date.now():0
r.getOperatorList({handler:T,sink:t,task:n,intent:e.intent,renderInteractiveForms:e.renderInteractiveForms,annotationStorage:e.annotationStorage}).then((function(e){E(n),o&&(0,i.info)("page=".concat(a+1," - getOperatorList: time=")+"".concat(Date.now()-o,"ms, len=").concat(e.length)),t.close()}),(function(e){E(n),n.terminated||(T.send("UnsupportedFeature",{featureId:i.UNSUPPORTED_FEATURES.errorOperatorList}),t.error(e))}))}))})),T.on("GetTextContent",(function(e,t){var a=e.pageIndex
t.onPull=function(e){},t.onCancel=function(e){},r.getPage(a).then((function(r){var n=new C("GetTextContent: page "+a)
P(n)
var o=v>=i.VerbosityLevel.INFOS?Date.now():0
r.extractTextContent({handler:T,task:n,sink:t,normalizeWhitespace:e.normalizeWhitespace,combineTextItems:e.combineTextItems}).then((function(){E(n),o&&(0,i.info)("page=".concat(a+1," - getTextContent: time=")+"".concat(Date.now()-o,"ms")),t.close()}),(function(e){E(n),n.terminated||t.error(e)}))}))})),T.on("FontFallback",(function(e){return r.fontFallback(e.id,T)})),T.on("Cleanup",(function(e){return r.cleanup(!0)})),T.on("Terminate",(function(e){a=!0
var t=[]
if(r){r.terminate(new i.AbortException("Worker was terminated."))
var n=r.cleanup()
t.push(n),r=null}else(0,o.clearPrimitiveCaches)()
return l&&l(new i.AbortException("Worker was terminated.")),g.forEach((function(e){t.push(e.finished),e.terminate()})),Promise.all(t).then((function(){T.destroy(),T=null}))})),T.on("Ready",(function(t){(function(e){function t(e){I(),T.send("GetDoc",{pdfInfo:e})}function n(e){if(I(),e instanceof i.PasswordException){var t=new C("PasswordException: response ".concat(e.code))
P(t),T.sendWithPromise("PasswordRequest",e).then((function(e){var a=e.password
E(t),r.updatePassword(a),o()})).catch((function(){E(t),T.send("DocException",e)}))}else e instanceof i.InvalidPDFException||e instanceof i.MissingPDFException||e instanceof i.UnexpectedResponseException||e instanceof i.UnknownErrorException?T.send("DocException",e):T.send("DocException",new i.UnknownErrorException(e.message,e.toString()))}function o(){I(),_(!1).then(t,(function(e){I(),e instanceof f.XRefParseException?(r.requestLoadedStream(),r.onLoadedStream().then((function(){I(),_(!0).then(t,n)}))):n(e)}))}I(),R(e,{maxImageSize:e.maxImageSize,disableFontFace:e.disableFontFace,ignoreErrors:e.ignoreErrors,isEvalSupported:e.isEvalSupported,fontExtraProperties:e.fontExtraProperties}).then((function(e){if(a)throw e.terminate(new i.AbortException("Worker was terminated.")),new Error("Worker was terminated");(r=e).onLoadedStream().then((function(e){T.send("DataLoaded",{length:e.bytes.byteLength})}))})).then(o,n)})(e),e=null})),O}},{key:"initializeFromPort",value:function(t){var r=new u.MessageHandler("worker","main",t)
e.setup(r,t),r.send("ready",null)}}]),e}()
t.WorkerMessageHandler=O,"undefined"==typeof window&&!l.isNodeJS&&"undefined"!=typeof self&&("function"==typeof(A=self).postMessage&&"onmessage"in A)&&O.initializeFromPort(self)},(e,t,r)=>{"use strict"
e.exports=r(3)},(e,t,r)=>{"use strict"
function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var n=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag"
function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(F){l=function(e,t,r){return e[t]=r}}function u(e,t,r,a){var n=t&&t.prototype instanceof v?t:v,i=Object.create(n.prototype),o=new P(a||[])
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
var k=Object.getPrototypeOf,S=k&&k(k(E([])))
S&&S!==r&&n.call(S,o)&&(w=S)
var x=y.prototype=v.prototype=Object.create(w)
function C(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function A(e,t){function r(i,o,s,c){var l=h(e[i],e,o)
if("throw"!==l.type){var u=l.arg,f=u.value
return f&&"object"===a(f)&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,s,c)}),(function(e){r("throw",e,s,c)})):t.resolve(f).then((function(e){u.value=e,s(u)}),(function(e){return r("throw",e,s,c)}))}c(l.arg)}var i
this._invoke=function(e,a){function n(){return new t((function(t,n){r(e,a,t,n)}))}return i=i?i.then(n,n):n()}}function O(e,r){var a=e.iterator[r.method]
if(a===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,O(e,r),"throw"===r.method))return m
r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var n=h(a,e.iterator,r.arg)
if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,m
var i=n.arg
return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function T(e){var t={tryLoc:e[0]}
1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function I(e){var t=e.completion||{}
t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function E(e){if(e){var r=e[o]
if(r)return r.call(e)
if("function"==typeof e.next)return e
if(!isNaN(e.length)){var a=-1,i=function r(){for(;++a<e.length;)if(n.call(e,a))return r.value=e[a],r.done=!1,r
return r.value=t,r.done=!0,r}
return i.next=i}}return{next:_}}function _(){return{value:t,done:!0}}return b.prototype=x.constructor=y,y.constructor=b,b.displayName=l(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor
return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,l(e,c,"GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},C(A.prototype),A.prototype[s]=function(){return this},e.AsyncIterator=A,e.async=function(t,r,a,n,i){void 0===i&&(i=Promise)
var o=new A(u(t,r,a,n),i)
return e.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},C(x),l(x,c,"Generator"),x[o]=function(){return this},x.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[]
for(var r in e)t.push(r)
return t.reverse(),function r(){for(;t.length;){var a=t.pop()
if(a in e)return r.value=a,r.done=!1,r}return r.done=!0,r}},e.values=E,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(I),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0
var e=this.tryEntries[0].completion
if("throw"===e.type)throw e.arg
return this.rval},dispatchException:function(e){if(this.done)throw e
var r=this
function a(a,n){return s.type="throw",s.arg=e,r.next=a,n&&(r.method="next",r.arg=t),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],s=o.completion
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
I(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,a){return this.delegate={iterator:E(e),resultName:r,nextLoc:a},"next"===this.method&&(this.arg=t),m}},e}("object"===a(e=r.nmd(e))?e.exports:{})
try{regeneratorRuntime=n}catch(i){Function("r","regeneratorRuntime = r")(n)}},(e,t,r)=>{"use strict"
function a(e,t){for(var r=0;r<t.length;r++){var a=t[r]
a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function n(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r]
return a}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,a=h(e)
if(t){var n=h(this).constructor
r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments)
return u(this,r)}}function u(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.arrayByteLength=I,t.arraysToBytes=function(e){var t=e.length
if(1===t&&e[0]instanceof Uint8Array)return e[0]
for(var r=0,a=0;a<t;a++)r+=I(e[a])
for(var n=0,i=new Uint8Array(r),o=0;o<t;o++){var s=e[o]
s instanceof Uint8Array||(s="string"==typeof s?T(s):new Uint8Array(s))
var c=s.byteLength
i.set(s,n),n+=c}return i},t.assert=m,t.bytesToString=function(e){m(null!==e&&"object"===i(e)&&void 0!==e.length,"Invalid argument for bytesToString")
var t=e.length,r=8192
if(t<r)return String.fromCharCode.apply(null,e)
for(var a=[],n=0;n<t;n+=r){var o=Math.min(n+r,t),s=e.subarray(n,o)
a.push(String.fromCharCode.apply(null,s))}return a.join("")},t.createPromiseCapability=function(){var e=Object.create(null),t=!1
return Object.defineProperty(e,"settled",{get:function(){return t}}),e.promise=new Promise((function(r,a){e.resolve=function(e){t=!0,r(e)},e.reject=function(e){t=!0,a(e)}})),e},t.createValidAbsoluteUrl=function(e,t){if(!e)return null
try{var r=t?new URL(e,t):new URL(e)
if(function(e){if(!e)return!1
switch(e.protocol){case"http:":case"https:":case"ftp:":case"mailto:":case"tel:":return!0
default:return!1}}(r))return r}catch(a){}return null},t.encodeToXmlString=function(e){for(var t=[],r=0,a=0,n=e.length;a<n;a++){var i=e.codePointAt(a)
if(32<=i&&i<=126){var o=L[i]
o&&(r<a&&t.push(e.substring(r,a)),t.push(o),r=a+1)}else r<a&&t.push(e.substring(r,a)),t.push("&#x".concat(i.toString(16).toUpperCase(),";")),i>55295&&(i<57344||i>65533)&&a++,r=a+1}if(0===t.length)return e
r<e.length&&t.push(e.substring(r,e.length))
return t.join("")},t.escapeString=function(e){return e.replace(/([()\\\n\r])/g,(function(e){return"\n"===e?"\\n":"\r"===e?"\\r":"\\".concat(e)}))},t.getModificationDate=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,t=[e.getUTCFullYear().toString(),(e.getUTCMonth()+1).toString().padStart(2,"0"),e.getUTCDate().toString().padStart(2,"0"),e.getUTCHours().toString().padStart(2,"0"),e.getUTCMinutes().toString().padStart(2,"0"),e.getUTCSeconds().toString().padStart(2,"0")]
return t.join("")},t.getVerbosityLevel=function(){return d},t.info=function(e){d>=f.INFOS&&console.log("Info: ".concat(e))},t.isArrayBuffer=function(e){return"object"===i(e)&&null!==e&&void 0!==e.byteLength},t.isArrayEqual=function(e,t){if(e.length!==t.length)return!1
return e.every((function(e,r){return e===t[r]}))},t.isAscii=function(e){return/^[\x00-\x7F]*$/.test(e)},t.isBool=function(e){return"boolean"==typeof e},t.isNum=function(e){return"number"==typeof e},t.isSameOrigin=function(e,t){var r
try{if(!(r=new URL(e)).origin||"null"===r.origin)return!1}catch(n){return!1}var a=new URL(t,r)
return r.origin===a.origin},t.isString=function(e){return"string"==typeof e},t.objectFromEntries=function(e){return Object.assign(Object.create(null),Object.fromEntries(e))},t.objectSize=function(e){return Object.keys(e).length},t.removeNullCharacters=function(e){if("string"!=typeof e)return p("The argument for removeNullCharacters must be a string."),e
return e.replace(O,"")},t.setVerbosityLevel=function(e){Number.isInteger(e)&&(d=e)},t.shadow=v,t.string32=function(e){return String.fromCharCode(e>>24&255,e>>16&255,e>>8&255,255&e)},t.stringToBytes=T,t.stringToPDFString=function(e){var t=e.length,r=[]
if("þ"===e[0]&&"ÿ"===e[1])for(var a=2;a<t;a+=2)r.push(String.fromCharCode(e.charCodeAt(a)<<8|e.charCodeAt(a+1)))
else if("ÿ"===e[0]&&"þ"===e[1])for(var n=2;n<t;n+=2)r.push(String.fromCharCode(e.charCodeAt(n+1)<<8|e.charCodeAt(n)))
else for(var i=0;i<t;++i){var o=B[e.charCodeAt(i)]
r.push(o?String.fromCharCode(o):e.charAt(i))}return r.join("")},t.stringToUTF16BEString=function(e){for(var t=["þÿ"],r=0,a=e.length;r<a;r++){var n=e.charCodeAt(r)
t.push(String.fromCharCode(n>>8&255)),t.push(String.fromCharCode(255&n))}return t.join("")},t.stringToUTF8String=function(e){return decodeURIComponent(escape(e))},t.unreachable=g
t.utf8StringToString=function(e){return unescape(encodeURIComponent(e))},t.warn=p,t.VerbosityLevel=t.Util=t.UNSUPPORTED_FEATURES=t.UnknownErrorException=t.UnexpectedResponseException=t.TextRenderingMode=t.StreamType=t.PermissionFlag=t.PasswordResponses=t.PasswordException=t.PageActionEventType=t.OPS=t.MissingPDFException=t.IsLittleEndianCached=t.IsEvalSupportedCached=t.InvalidPDFException=t.ImageKind=t.IDENTITY_MATRIX=t.FormatError=t.FontType=t.FONT_IDENTITY_MATRIX=t.DocumentActionEventType=t.createObjectURL=t.CMapCompressionType=t.BaseException=t.AnnotationType=t.AnnotationStateModelType=t.AnnotationReviewState=t.AnnotationReplyType=t.AnnotationMarkedState=t.AnnotationFlag=t.AnnotationFieldFlag=t.AnnotationBorderStyleType=t.AnnotationActionEventType=t.AbortException=void 0,r(5)
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
t.AnnotationActionEventType={E:"Mouse Enter",X:"Mouse Exit",D:"Mouse Down",U:"Mouse Up",Fo:"Focus",Bl:"Blur",PO:"PageOpen",PC:"PageClose",PV:"PageVisible",PI:"PageInvisible",K:"Keystroke",F:"Format",V:"Validate",C:"Calculate"}
t.DocumentActionEventType={WC:"WillClose",WS:"WillSave",DS:"DidSave",WP:"WillPrint",DP:"DidPrint"}
t.PageActionEventType={O:"PageOpen",C:"PageClose"}
t.StreamType={UNKNOWN:"UNKNOWN",FLATE:"FLATE",LZW:"LZW",DCT:"DCT",JPX:"JPX",JBIG:"JBIG",A85:"A85",AHX:"AHX",CCF:"CCF",RLX:"RLX"}
t.FontType={UNKNOWN:"UNKNOWN",TYPE1:"TYPE1",TYPE1C:"TYPE1C",CIDFONTTYPE0:"CIDFONTTYPE0",CIDFONTTYPE0C:"CIDFONTTYPE0C",TRUETYPE:"TRUETYPE",CIDFONTTYPE2:"CIDFONTTYPE2",TYPE3:"TYPE3",OPENTYPE:"OPENTYPE",TYPE0:"TYPE0",MMTYPE1:"MMTYPE1"}
var f={ERRORS:0,WARNINGS:1,INFOS:5}
t.VerbosityLevel=f
t.CMapCompressionType={NONE:0,BINARY:1,STREAM:2}
t.OPS={dependency:1,setLineWidth:2,setLineCap:3,setLineJoin:4,setMiterLimit:5,setDash:6,setRenderingIntent:7,setFlatness:8,setGState:9,save:10,restore:11,transform:12,moveTo:13,lineTo:14,curveTo:15,curveTo2:16,curveTo3:17,closePath:18,rectangle:19,stroke:20,closeStroke:21,fill:22,eoFill:23,fillStroke:24,eoFillStroke:25,closeFillStroke:26,closeEOFillStroke:27,endPath:28,clip:29,eoClip:30,beginText:31,endText:32,setCharSpacing:33,setWordSpacing:34,setHScale:35,setLeading:36,setFont:37,setTextRenderingMode:38,setTextRise:39,moveText:40,setLeadingMoveText:41,setTextMatrix:42,nextLine:43,showText:44,showSpacedText:45,nextLineShowText:46,nextLineSetSpacingShowText:47,setCharWidth:48,setCharWidthAndBounds:49,setStrokeColorSpace:50,setFillColorSpace:51,setStrokeColor:52,setStrokeColorN:53,setFillColor:54,setFillColorN:55,setStrokeGray:56,setFillGray:57,setStrokeRGBColor:58,setFillRGBColor:59,setStrokeCMYKColor:60,setFillCMYKColor:61,shadingFill:62,beginInlineImage:63,beginImageData:64,endInlineImage:65,paintXObject:66,markPoint:67,markPointProps:68,beginMarkedContent:69,beginMarkedContentProps:70,endMarkedContent:71,beginCompat:72,endCompat:73,paintFormXObjectBegin:74,paintFormXObjectEnd:75,beginGroup:76,endGroup:77,beginAnnotations:78,endAnnotations:79,beginAnnotation:80,endAnnotation:81,paintJpegXObject:82,paintImageMaskXObject:83,paintImageMaskXObjectGroup:84,paintImageXObject:85,paintInlineImageXObject:86,paintInlineImageXObjectGroup:87,paintImageXObjectRepeat:88,paintImageMaskXObjectRepeat:89,paintSolidColorImageMask:90,constructPath:91}
t.UNSUPPORTED_FEATURES={unknown:"unknown",forms:"forms",javaScript:"javaScript",smask:"smask",shadingPattern:"shadingPattern",font:"font",errorTilingPattern:"errorTilingPattern",errorExtGState:"errorExtGState",errorXObject:"errorXObject",errorFontLoadType3:"errorFontLoadType3",errorFontState:"errorFontState",errorFontMissing:"errorFontMissing",errorFontTranslate:"errorFontTranslate",errorColorSpace:"errorColorSpace",errorOperatorList:"errorOperatorList",errorFontToUnicode:"errorFontToUnicode",errorFontLoadNative:"errorFontLoadNative",errorFontGetPath:"errorFontGetPath",errorMarkedContent:"errorMarkedContent"}
t.PasswordResponses={NEED_PASSWORD:1,INCORRECT_PASSWORD:2}
var d=f.WARNINGS
function p(e){d>=f.WARNINGS&&console.log("Warning: ".concat(e))}function g(e){throw new Error(e)}function m(e,t){e||g(t)}function v(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!1}),r}var b=function(){function e(t){this.constructor===e&&g("Cannot initialize BaseException."),this.message=t,this.name=this.constructor.name}return e.prototype=new Error,e.constructor=e,e}()
t.BaseException=b
var y=function(e){s(r,e)
var t=l(r)
function r(e,a){var n
return o(this,r),(n=t.call(this,e)).code=a,n}return r}(b)
t.PasswordException=y
var w=function(e){s(r,e)
var t=l(r)
function r(e,a){var n
return o(this,r),(n=t.call(this,e)).details=a,n}return r}(b)
t.UnknownErrorException=w
var k=function(e){s(r,e)
var t=l(r)
function r(){return o(this,r),t.apply(this,arguments)}return r}(b)
t.InvalidPDFException=k
var S=function(e){s(r,e)
var t=l(r)
function r(){return o(this,r),t.apply(this,arguments)}return r}(b)
t.MissingPDFException=S
var x=function(e){s(r,e)
var t=l(r)
function r(e,a){var n
return o(this,r),(n=t.call(this,e)).status=a,n}return r}(b)
t.UnexpectedResponseException=x
var C=function(e){s(r,e)
var t=l(r)
function r(){return o(this,r),t.apply(this,arguments)}return r}(b)
t.FormatError=C
var A=function(e){s(r,e)
var t=l(r)
function r(){return o(this,r),t.apply(this,arguments)}return r}(b)
t.AbortException=A
var O=/\x00/g
function T(e){m("string"==typeof e,"Invalid argument for stringToBytes")
for(var t=e.length,r=new Uint8Array(t),a=0;a<t;++a)r[a]=255&e.charCodeAt(a)
return r}function I(e){return void 0!==e.length?e.length:(m(void 0!==e.byteLength,"arrayByteLength - invalid argument."),e.byteLength)}var P={get value(){return v(this,"value",((e=new Uint8Array(4))[0]=1,1===new Uint32Array(e.buffer,0,1)[0]))
var e}}
t.IsLittleEndianCached=P
var E={get value(){return v(this,"value",function(){try{return new Function(""),!0}catch(e){return!1}}())}}
t.IsEvalSupportedCached=E
var _,F=(_=Array(256).keys(),function(e){if(Array.isArray(e))return n(e)}(_)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(_)||function(e,t){if(e){if("string"==typeof e)return n(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(_)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){return e.toString(16).padStart(2,"0")})),R=function(){function e(){o(this,e)}var t,r,n
return t=e,n=[{key:"makeHexColor",value:function(e,t,r){return"#".concat(F[e]).concat(F[t]).concat(F[r])}},{key:"transform",value:function(e,t){return[e[0]*t[0]+e[2]*t[1],e[1]*t[0]+e[3]*t[1],e[0]*t[2]+e[2]*t[3],e[1]*t[2]+e[3]*t[3],e[0]*t[4]+e[2]*t[5]+e[4],e[1]*t[4]+e[3]*t[5]+e[5]]}},{key:"applyTransform",value:function(e,t){return[e[0]*t[0]+e[1]*t[2]+t[4],e[0]*t[1]+e[1]*t[3]+t[5]]}},{key:"applyInverseTransform",value:function(e,t){var r=t[0]*t[3]-t[1]*t[2]
return[(e[0]*t[3]-e[1]*t[2]+t[2]*t[5]-t[4]*t[3])/r,(-e[0]*t[1]+e[1]*t[0]+t[4]*t[1]-t[5]*t[0])/r]}},{key:"getAxialAlignedBoundingBox",value:function(t,r){var a=e.applyTransform(t,r),n=e.applyTransform(t.slice(2,4),r),i=e.applyTransform([t[0],t[3]],r),o=e.applyTransform([t[2],t[1]],r)
return[Math.min(a[0],n[0],i[0],o[0]),Math.min(a[1],n[1],i[1],o[1]),Math.max(a[0],n[0],i[0],o[0]),Math.max(a[1],n[1],i[1],o[1])]}},{key:"inverseTransform",value:function(e){var t=e[0]*e[3]-e[1]*e[2]
return[e[3]/t,-e[1]/t,-e[2]/t,e[0]/t,(e[2]*e[5]-e[4]*e[3])/t,(e[4]*e[1]-e[5]*e[0])/t]}},{key:"apply3dTransform",value:function(e,t){return[e[0]*t[0]+e[1]*t[1]+e[2]*t[2],e[3]*t[0]+e[4]*t[1]+e[5]*t[2],e[6]*t[0]+e[7]*t[1]+e[8]*t[2]]}},{key:"singularValueDecompose2dScale",value:function(e){var t=[e[0],e[2],e[1],e[3]],r=e[0]*t[0]+e[1]*t[2],a=e[0]*t[1]+e[1]*t[3],n=e[2]*t[0]+e[3]*t[2],i=e[2]*t[1]+e[3]*t[3],o=(r+i)/2,s=Math.sqrt((r+i)*(r+i)-4*(r*i-n*a))/2,c=o+s||1,l=o-s||1
return[Math.sqrt(c),Math.sqrt(l)]}},{key:"normalizeRect",value:function(e){var t=e.slice(0)
return e[0]>e[2]&&(t[0]=e[2],t[2]=e[0]),e[1]>e[3]&&(t[1]=e[3],t[3]=e[1]),t}},{key:"intersect",value:function(t,r){function a(e,t){return e-t}var n=[t[0],t[2],r[0],r[2]].sort(a),i=[t[1],t[3],r[1],r[3]].sort(a),o=[]
return t=e.normalizeRect(t),r=e.normalizeRect(r),n[0]===t[0]&&n[1]===r[0]||n[0]===r[0]&&n[1]===t[0]?(o[0]=n[1],o[2]=n[2],i[0]===t[1]&&i[1]===r[1]||i[0]===r[1]&&i[1]===t[1]?(o[1]=i[1],o[3]=i[2],o):null):null}}],(r=null)&&a(t.prototype,r),n&&a(t,n),e}()
t.Util=R
var B=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,728,711,710,729,733,731,730,732,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8226,8224,8225,8230,8212,8211,402,8260,8249,8250,8722,8240,8222,8220,8221,8216,8217,8218,8482,64257,64258,321,338,352,376,381,305,322,339,353,382,0,8364]
var M,D=(M="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2]
if(!r&&URL.createObjectURL){var a=new Blob([e],{type:t})
return URL.createObjectURL(a)}for(var n="data:".concat(t,";base64,"),i=0,o=e.length;i<o;i+=3){var s=255&e[i],c=255&e[i+1],l=255&e[i+2],u=s>>2,h=(3&s)<<4|c>>4,f=i+1<o?(15&c)<<2|l>>6:64,d=i+2<o?63&l:64
n+=M[u]+M[h]+M[f]+M[d]}return n})
t.createObjectURL=D
var L={60:"&lt;",62:"&gt;",38:"&amp;",34:"&quot;",39:"&apos;"}},(e,t,r)=>{"use strict"
var a=r(6)
"undefined"!=typeof globalThis&&globalThis._pdfjsCompatibilityChecked||("undefined"!=typeof globalThis&&globalThis.Math===Math||(globalThis=r(7)),globalThis._pdfjsCompatibilityChecked=!0,!globalThis.btoa&&a.isNodeJS&&(globalThis.btoa=function(e){return Buffer.from(e,"binary").toString("base64")}),!globalThis.atob&&a.isNodeJS&&(globalThis.atob=function(e){return Buffer.from(e,"base64").toString("binary")}),Object.fromEntries||r(52),globalThis.Promise.allSettled||(globalThis.Promise=r(82)),globalThis.URL=r(111),function(){var e=!1
if("undefined"!=typeof ReadableStream)try{new ReadableStream({start:function(e){e.close()}}),e=!0}catch(t){}e||(globalThis.ReadableStream=r(121).ReadableStream)}(),String.prototype.padStart||r(122),String.prototype.padEnd||r(128),Object.values||(Object.values=r(130)),Object.entries||(Object.entries=r(133)))},(e,t)=>{"use strict"
function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.isNodeJS=void 0
var a=!("object"!==("undefined"==typeof process?"undefined":r(process))||process+""!="[object process]"||process.versions.nw||process.versions.electron&&process.type&&"browser"!==process.type)
t.isNodeJS=a},(e,t,r)=>{r(8),e.exports=r(10)},(e,t,r)=>{r(9)({global:!0},{globalThis:r(10)})},(e,t,r)=>{var a=r(10),n=r(11).f,i=r(25),o=r(28),s=r(29),c=r(39),l=r(51)
e.exports=function(e,t){var r,u,h,f,d,p=e.target,g=e.global,m=e.stat
if(r=g?a:m?a[p]||s(p,{}):(a[p]||{}).prototype)for(u in t){if(f=t[u],h=e.noTargetGet?(d=n(r,u))&&d.value:r[u],!l(g?u:p+(m?".":"#")+u,e.forced)&&void 0!==h){if(typeof f==typeof h)continue
c(f,h)}(e.sham||h&&h.sham)&&i(f,"sham",!0),o(r,u,f,e)}}},e=>{var t=function(e){return e&&e.Math==Math&&e}
e.exports=t("object"==typeof globalThis&&globalThis)||t("object"==typeof window&&window)||t("object"==typeof self&&self)||t("object"==typeof global&&global)||function(){return this}()||Function("return this")()},(e,t,r)=>{var a=r(12),n=r(14),i=r(15),o=r(16),s=r(20),c=r(22),l=r(23),u=Object.getOwnPropertyDescriptor
t.f=a?u:function(e,t){if(e=o(e),t=s(t,!0),l)try{return u(e,t)}catch(r){}if(c(e,t))return i(!n.f.call(e,t),e[t])}},(e,t,r)=>{var a=r(13)
e.exports=!a((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},e=>{e.exports=function(e){try{return!!e()}catch(t){return!0}}},(e,t)=>{"use strict"
var r={}.propertyIsEnumerable,a=Object.getOwnPropertyDescriptor,n=a&&!r.call({1:2},1)
t.f=n?function(e){var t=a(this,e)
return!!t&&t.enumerable}:r},e=>{e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},(e,t,r)=>{var a=r(17),n=r(19)
e.exports=function(e){return a(n(e))}},(e,t,r)=>{var a=r(13),n=r(18),i="".split
e.exports=a((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==n(e)?i.call(e,""):Object(e)}:Object},e=>{var t={}.toString
e.exports=function(e){return t.call(e).slice(8,-1)}},e=>{e.exports=function(e){if(null==e)throw TypeError("Can't call method on "+e)
return e}},(e,t,r)=>{var a=r(21)
e.exports=function(e,t){if(!a(e))return e
var r,n
if(t&&"function"==typeof(r=e.toString)&&!a(n=r.call(e)))return n
if("function"==typeof(r=e.valueOf)&&!a(n=r.call(e)))return n
if(!t&&"function"==typeof(r=e.toString)&&!a(n=r.call(e)))return n
throw TypeError("Can't convert object to primitive value")}},e=>{e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},e=>{var t={}.hasOwnProperty
e.exports=function(e,r){return t.call(e,r)}},(e,t,r)=>{var a=r(12),n=r(13),i=r(24)
e.exports=!a&&!n((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},(e,t,r)=>{var a=r(10),n=r(21),i=a.document,o=n(i)&&n(i.createElement)
e.exports=function(e){return o?i.createElement(e):{}}},(e,t,r)=>{var a=r(12),n=r(26),i=r(15)
e.exports=a?function(e,t,r){return n.f(e,t,i(1,r))}:function(e,t,r){return e[t]=r,e}},(e,t,r)=>{var a=r(12),n=r(23),i=r(27),o=r(20),s=Object.defineProperty
t.f=a?s:function(e,t,r){if(i(e),t=o(t,!0),i(r),n)try{return s(e,t,r)}catch(a){}if("get"in r||"set"in r)throw TypeError("Accessors not supported")
return"value"in r&&(e[t]=r.value),e}},(e,t,r)=>{var a=r(21)
e.exports=function(e){if(!a(e))throw TypeError(String(e)+" is not an object")
return e}},(e,t,r)=>{var a=r(10),n=r(25),i=r(22),o=r(29),s=r(30),c=r(32),l=c.get,u=c.enforce,h=String(String).split("String");(e.exports=function(e,t,r,s){var c,l=!!s&&!!s.unsafe,f=!!s&&!!s.enumerable,d=!!s&&!!s.noTargetGet
"function"==typeof r&&("string"!=typeof t||i(r,"name")||n(r,"name",t),(c=u(r)).source||(c.source=h.join("string"==typeof t?t:""))),e!==a?(l?!d&&e[t]&&(f=!0):delete e[t],f?e[t]=r:n(e,t,r)):f?e[t]=r:o(t,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&l(this).source||s(this)}))},(e,t,r)=>{var a=r(10),n=r(25)
e.exports=function(e,t){try{n(a,e,t)}catch(r){a[e]=t}return t}},(e,t,r)=>{var a=r(31),n=Function.toString
"function"!=typeof a.inspectSource&&(a.inspectSource=function(e){return n.call(e)}),e.exports=a.inspectSource},(e,t,r)=>{var a=r(10),n=r(29),i="__core-js_shared__",o=a[i]||n(i,{})
e.exports=o},(e,t,r)=>{var a,n,i,o=r(33),s=r(10),c=r(21),l=r(25),u=r(22),h=r(31),f=r(34),d=r(38),p=s.WeakMap
if(o){var g=h.state||(h.state=new p),m=g.get,v=g.has,b=g.set
a=function(e,t){return t.facade=e,b.call(g,e,t),t},n=function(e){return m.call(g,e)||{}},i=function(e){return v.call(g,e)}}else{var y=f("state")
d[y]=!0,a=function(e,t){return t.facade=e,l(e,y,t),t},n=function(e){return u(e,y)?e[y]:{}},i=function(e){return u(e,y)}}e.exports={set:a,get:n,has:i,enforce:function(e){return i(e)?n(e):a(e,{})},getterFor:function(e){return function(t){var r
if(!c(t)||(r=n(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required")
return r}}}},(e,t,r)=>{var a=r(10),n=r(30),i=a.WeakMap
e.exports="function"==typeof i&&/native code/.test(n(i))},(e,t,r)=>{var a=r(35),n=r(37),i=a("keys")
e.exports=function(e){return i[e]||(i[e]=n(e))}},(e,t,r)=>{var a=r(36),n=r(31);(e.exports=function(e,t){return n[e]||(n[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.8.3",mode:a?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},e=>{e.exports=!1},e=>{var t=0,r=Math.random()
e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++t+r).toString(36)}},e=>{e.exports={}},(e,t,r)=>{var a=r(22),n=r(40),i=r(11),o=r(26)
e.exports=function(e,t){for(var r=n(t),s=o.f,c=i.f,l=0;l<r.length;l++){var u=r[l]
a(e,u)||s(e,u,c(t,u))}}},(e,t,r)=>{var a=r(41),n=r(43),i=r(50),o=r(27)
e.exports=a("Reflect","ownKeys")||function(e){var t=n.f(o(e)),r=i.f
return r?t.concat(r(e)):t}},(e,t,r)=>{var a=r(42),n=r(10),i=function(e){return"function"==typeof e?e:void 0}
e.exports=function(e,t){return arguments.length<2?i(a[e])||i(n[e]):a[e]&&a[e][t]||n[e]&&n[e][t]}},(e,t,r)=>{var a=r(10)
e.exports=a},(e,t,r)=>{var a=r(44),n=r(49).concat("length","prototype")
t.f=Object.getOwnPropertyNames||function(e){return a(e,n)}},(e,t,r)=>{var a=r(22),n=r(16),i=r(45).indexOf,o=r(38)
e.exports=function(e,t){var r,s=n(e),c=0,l=[]
for(r in s)!a(o,r)&&a(s,r)&&l.push(r)
for(;t.length>c;)a(s,r=t[c++])&&(~i(l,r)||l.push(r))
return l}},(e,t,r)=>{var a=r(16),n=r(46),i=r(48),o=function(e){return function(t,r,o){var s,c=a(t),l=n(c.length),u=i(o,l)
if(e&&r!=r){for(;l>u;)if((s=c[u++])!=s)return!0}else for(;l>u;u++)if((e||u in c)&&c[u]===r)return e||u||0
return!e&&-1}}
e.exports={includes:o(!0),indexOf:o(!1)}},(e,t,r)=>{var a=r(47),n=Math.min
e.exports=function(e){return e>0?n(a(e),9007199254740991):0}},e=>{var t=Math.ceil,r=Math.floor
e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:t)(e)}},(e,t,r)=>{var a=r(47),n=Math.max,i=Math.min
e.exports=function(e,t){var r=a(e)
return r<0?n(r+t,0):i(r,t)}},e=>{e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},(e,t)=>{t.f=Object.getOwnPropertySymbols},(e,t,r)=>{var a=r(13),n=/#|\.prototype\./,i=function(e,t){var r=s[o(e)]
return r==l||r!=c&&("function"==typeof t?a(t):!!t)},o=i.normalize=function(e){return String(e).replace(n,".").toLowerCase()},s=i.data={},c=i.NATIVE="N",l=i.POLYFILL="P"
e.exports=i},(e,t,r)=>{r(53),r(72)
var a=r(42)
e.exports=a.Object.fromEntries},(e,t,r)=>{"use strict"
var a=r(16),n=r(54),i=r(62),o=r(32),s=r(63),c="Array Iterator",l=o.set,u=o.getterFor(c)
e.exports=s(Array,"Array",(function(e,t){l(this,{type:c,target:a(e),index:0,kind:t})}),(function(){var e=u(this),t=e.target,r=e.kind,a=e.index++
return!t||a>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==r?{value:a,done:!1}:"values"==r?{value:t[a],done:!1}:{value:[a,t[a]],done:!1}}),"values"),i.Arguments=i.Array,n("keys"),n("values"),n("entries")},(e,t,r)=>{var a=r(55),n=r(58),i=r(26),o=a("unscopables"),s=Array.prototype
null==s[o]&&i.f(s,o,{configurable:!0,value:n(null)}),e.exports=function(e){s[o][e]=!0}},(e,t,r)=>{var a=r(10),n=r(35),i=r(22),o=r(37),s=r(56),c=r(57),l=n("wks"),u=a.Symbol,h=c?u:u&&u.withoutSetter||o
e.exports=function(e){return i(l,e)||(s&&i(u,e)?l[e]=u[e]:l[e]=h("Symbol."+e)),l[e]}},(e,t,r)=>{var a=r(13)
e.exports=!!Object.getOwnPropertySymbols&&!a((function(){return!String(Symbol())}))},(e,t,r)=>{var a=r(56)
e.exports=a&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},(e,t,r)=>{var a,n=r(27),i=r(59),o=r(49),s=r(38),c=r(61),l=r(24),u=r(34),h=u("IE_PROTO"),f=function(){},d=function(e){return"<script>"+e+"</"+"script>"},p=function(){try{a=document.domain&&new ActiveXObject("htmlfile")}catch(n){}var e,t
p=a?function(e){e.write(d("")),e.close()
var t=e.parentWindow.Object
return e=null,t}(a):((t=l("iframe")).style.display="none",c.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(d("document.F=Object")),e.close(),e.F)
for(var r=o.length;r--;)delete p.prototype[o[r]]
return p()}
s[h]=!0,e.exports=Object.create||function(e,t){var r
return null!==e?(f.prototype=n(e),r=new f,f.prototype=null,r[h]=e):r=p(),void 0===t?r:i(r,t)}},(e,t,r)=>{var a=r(12),n=r(26),i=r(27),o=r(60)
e.exports=a?Object.defineProperties:function(e,t){i(e)
for(var r,a=o(t),s=a.length,c=0;s>c;)n.f(e,r=a[c++],t[r])
return e}},(e,t,r)=>{var a=r(44),n=r(49)
e.exports=Object.keys||function(e){return a(e,n)}},(e,t,r)=>{var a=r(41)
e.exports=a("document","documentElement")},e=>{e.exports={}},(e,t,r)=>{"use strict"
var a=r(9),n=r(64),i=r(66),o=r(70),s=r(69),c=r(25),l=r(28),u=r(55),h=r(36),f=r(62),d=r(65),p=d.IteratorPrototype,g=d.BUGGY_SAFARI_ITERATORS,m=u("iterator"),v="keys",b="values",y="entries",w=function(){return this}
e.exports=function(e,t,r,u,d,k,S){n(r,t,u)
var x,C,A,O=function(e){if(e===d&&_)return _
if(!g&&e in P)return P[e]
switch(e){case v:case b:case y:return function(){return new r(this,e)}}return function(){return new r(this)}},T=t+" Iterator",I=!1,P=e.prototype,E=P[m]||P["@@iterator"]||d&&P[d],_=!g&&E||O(d),F="Array"==t&&P.entries||E
if(F&&(x=i(F.call(new e)),p!==Object.prototype&&x.next&&(h||i(x)===p||(o?o(x,p):"function"!=typeof x[m]&&c(x,m,w)),s(x,T,!0,!0),h&&(f[T]=w))),d==b&&E&&E.name!==b&&(I=!0,_=function(){return E.call(this)}),h&&!S||P[m]===_||c(P,m,_),f[t]=_,d)if(C={values:O(b),keys:k?_:O(v),entries:O(y)},S)for(A in C)(g||I||!(A in P))&&l(P,A,C[A])
else a({target:t,proto:!0,forced:g||I},C)
return C}},(e,t,r)=>{"use strict"
var a=r(65).IteratorPrototype,n=r(58),i=r(15),o=r(69),s=r(62),c=function(){return this}
e.exports=function(e,t,r){var l=t+" Iterator"
return e.prototype=n(a,{next:i(1,r)}),o(e,l,!1,!0),s[l]=c,e}},(e,t,r)=>{"use strict"
var a,n,i,o=r(13),s=r(66),c=r(25),l=r(22),u=r(55),h=r(36),f=u("iterator"),d=!1;[].keys&&("next"in(i=[].keys())?(n=s(s(i)))!==Object.prototype&&(a=n):d=!0)
var p=null==a||o((function(){var e={}
return a[f].call(e)!==e}))
p&&(a={}),h&&!p||l(a,f)||c(a,f,(function(){return this})),e.exports={IteratorPrototype:a,BUGGY_SAFARI_ITERATORS:d}},(e,t,r)=>{var a=r(22),n=r(67),i=r(34),o=r(68),s=i("IE_PROTO"),c=Object.prototype
e.exports=o?Object.getPrototypeOf:function(e){return e=n(e),a(e,s)?e[s]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?c:null}},(e,t,r)=>{var a=r(19)
e.exports=function(e){return Object(a(e))}},(e,t,r)=>{var a=r(13)
e.exports=!a((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},(e,t,r)=>{var a=r(26).f,n=r(22),i=r(55)("toStringTag")
e.exports=function(e,t,r){e&&!n(e=r?e:e.prototype,i)&&a(e,i,{configurable:!0,value:t})}},(e,t,r)=>{var a=r(27),n=r(71)
e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,r={}
try{(e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(r,[]),t=r instanceof Array}catch(i){}return function(r,i){return a(r),n(i),t?e.call(r,i):r.__proto__=i,r}}():void 0)},(e,t,r)=>{var a=r(21)
e.exports=function(e){if(!a(e)&&null!==e)throw TypeError("Can't set "+String(e)+" as a prototype")
return e}},(e,t,r)=>{var a=r(9),n=r(73),i=r(81)
a({target:"Object",stat:!0},{fromEntries:function(e){var t={}
return n(e,(function(e,r){i(t,e,r)}),{AS_ENTRIES:!0}),t}})},(e,t,r)=>{var a=r(27),n=r(74),i=r(46),o=r(75),s=r(77),c=r(80),l=function(e,t){this.stopped=e,this.result=t}
e.exports=function(e,t,r){var u,h,f,d,p,g,m,v=r&&r.that,b=!(!r||!r.AS_ENTRIES),y=!(!r||!r.IS_ITERATOR),w=!(!r||!r.INTERRUPTED),k=o(t,v,1+b+w),S=function(e){return u&&c(u),new l(!0,e)},x=function(e){return b?(a(e),w?k(e[0],e[1],S):k(e[0],e[1])):w?k(e,S):k(e)}
if(y)u=e
else{if("function"!=typeof(h=s(e)))throw TypeError("Target is not iterable")
if(n(h)){for(f=0,d=i(e.length);d>f;f++)if((p=x(e[f]))&&p instanceof l)return p
return new l(!1)}u=h.call(e)}for(g=u.next;!(m=g.call(u)).done;){try{p=x(m.value)}catch(C){throw c(u),C}if("object"==typeof p&&p&&p instanceof l)return p}return new l(!1)}},(e,t,r)=>{var a=r(55),n=r(62),i=a("iterator"),o=Array.prototype
e.exports=function(e){return void 0!==e&&(n.Array===e||o[i]===e)}},(e,t,r)=>{var a=r(76)
e.exports=function(e,t,r){if(a(e),void 0===t)return e
switch(r){case 0:return function(){return e.call(t)}
case 1:return function(r){return e.call(t,r)}
case 2:return function(r,a){return e.call(t,r,a)}
case 3:return function(r,a,n){return e.call(t,r,a,n)}}return function(){return e.apply(t,arguments)}}},e=>{e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function")
return e}},(e,t,r)=>{var a=r(78),n=r(62),i=r(55)("iterator")
e.exports=function(e){if(null!=e)return e[i]||e["@@iterator"]||n[a(e)]}},(e,t,r)=>{var a=r(79),n=r(18),i=r(55)("toStringTag"),o="Arguments"==n(function(){return arguments}())
e.exports=a?n:function(e){var t,r,a
return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=function(e,t){try{return e[t]}catch(r){}}(t=Object(e),i))?r:o?n(t):"Object"==(a=n(t))&&"function"==typeof t.callee?"Arguments":a}},(e,t,r)=>{var a={}
a[r(55)("toStringTag")]="z",e.exports="[object z]"===String(a)},(e,t,r)=>{var a=r(27)
e.exports=function(e){var t=e.return
if(void 0!==t)return a(t.call(e)).value}},(e,t,r)=>{"use strict"
var a=r(20),n=r(26),i=r(15)
e.exports=function(e,t,r){var o=a(t)
o in e?n.f(e,o,i(0,r)):e[o]=r}},(e,t,r)=>{r(83),r(84),r(86),r(104),r(105),r(106),r(107),r(109)
var a=r(42)
e.exports=a.Promise},(e,t,r)=>{"use strict"
var a=r(9),n=r(66),i=r(70),o=r(58),s=r(25),c=r(15),l=r(73),u=function(e,t){var r=this
if(!(r instanceof u))return new u(e,t)
i&&(r=i(new Error(void 0),n(r))),void 0!==t&&s(r,"message",String(t))
var a=[]
return l(e,a.push,{that:a}),s(r,"errors",a),r}
u.prototype=o(Error.prototype,{constructor:c(5,u),message:c(5,""),name:c(5,"AggregateError")}),a({global:!0},{AggregateError:u})},(e,t,r)=>{var a=r(79),n=r(28),i=r(85)
a||n(Object.prototype,"toString",i,{unsafe:!0})},(e,t,r)=>{"use strict"
var a=r(79),n=r(78)
e.exports=a?{}.toString:function(){return"[object "+n(this)+"]"}},(e,t,r)=>{"use strict"
var a,n,i,o,s=r(9),c=r(36),l=r(10),u=r(41),h=r(87),f=r(28),d=r(88),p=r(69),g=r(89),m=r(21),v=r(76),b=r(90),y=r(30),w=r(73),k=r(91),S=r(92),x=r(93).set,C=r(97),A=r(99),O=r(101),T=r(100),I=r(102),P=r(32),E=r(51),_=r(55),F=r(96),R=r(103),B=_("species"),M="Promise",D=P.get,L=P.set,N=P.getterFor(M),U=h,j=l.TypeError,q=l.document,z=l.process,G=u("fetch"),H=T.f,W=H,X=!!(q&&q.createEvent&&l.dispatchEvent),V="function"==typeof PromiseRejectionEvent,K="unhandledrejection",Y=E(M,(function(){if(!(y(U)!==String(U))){if(66===R)return!0
if(!F&&!V)return!0}if(c&&!U.prototype.finally)return!0
if(R>=51&&/native code/.test(U))return!1
var e=U.resolve(1),t=function(e){e((function(){}),(function(){}))}
return(e.constructor={})[B]=t,!(e.then((function(){}))instanceof t)})),J=Y||!k((function(e){U.all(e).catch((function(){}))})),Z=function(e){var t
return!(!m(e)||"function"!=typeof(t=e.then))&&t},Q=function(e,t){if(!e.notified){e.notified=!0
var r=e.reactions
C((function(){for(var a=e.value,n=1==e.state,i=0;r.length>i;){var o,s,c,l=r[i++],u=n?l.ok:l.fail,h=l.resolve,f=l.reject,d=l.domain
try{u?(n||(2===e.rejection&&re(e),e.rejection=1),!0===u?o=a:(d&&d.enter(),o=u(a),d&&(d.exit(),c=!0)),o===l.promise?f(j("Promise-chain cycle")):(s=Z(o))?s.call(o,h,f):h(o)):f(a)}catch(p){d&&!c&&d.exit(),f(p)}}e.reactions=[],e.notified=!1,t&&!e.rejection&&ee(e)}))}},$=function(e,t,r){var a,n
X?((a=q.createEvent("Event")).promise=t,a.reason=r,a.initEvent(e,!1,!0),l.dispatchEvent(a)):a={promise:t,reason:r},!V&&(n=l["on"+e])?n(a):e===K&&O("Unhandled promise rejection",r)},ee=function(e){x.call(l,(function(){var t,r=e.facade,a=e.value
if(te(e)&&(t=I((function(){F?z.emit("unhandledRejection",a,r):$(K,r,a)})),e.rejection=F||te(e)?2:1,t.error))throw t.value}))},te=function(e){return 1!==e.rejection&&!e.parent},re=function(e){x.call(l,(function(){var t=e.facade
F?z.emit("rejectionHandled",t):$("rejectionhandled",t,e.value)}))},ae=function(e,t,r){return function(a){e(t,a,r)}},ne=function(e,t,r){e.done||(e.done=!0,r&&(e=r),e.value=t,e.state=2,Q(e,!0))},ie=function(e,t,r){if(!e.done){e.done=!0,r&&(e=r)
try{if(e.facade===t)throw j("Promise can't be resolved itself")
var a=Z(t)
a?C((function(){var r={done:!1}
try{a.call(t,ae(ie,r,e),ae(ne,r,e))}catch(n){ne(r,n,e)}})):(e.value=t,e.state=1,Q(e,!1))}catch(n){ne({done:!1},n,e)}}}
Y&&(U=function(e){b(this,U,M),v(e),a.call(this)
var t=D(this)
try{e(ae(ie,t),ae(ne,t))}catch(r){ne(t,r)}},(a=function(e){L(this,{type:M,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=d(U.prototype,{then:function(e,t){var r=N(this),a=H(S(this,U))
return a.ok="function"!=typeof e||e,a.fail="function"==typeof t&&t,a.domain=F?z.domain:void 0,r.parent=!0,r.reactions.push(a),0!=r.state&&Q(r,!1),a.promise},catch:function(e){return this.then(void 0,e)}}),n=function(){var e=new a,t=D(e)
this.promise=e,this.resolve=ae(ie,t),this.reject=ae(ne,t)},T.f=H=function(e){return e===U||e===i?new n(e):W(e)},c||"function"!=typeof h||(o=h.prototype.then,f(h.prototype,"then",(function(e,t){var r=this
return new U((function(e,t){o.call(r,e,t)})).then(e,t)}),{unsafe:!0}),"function"==typeof G&&s({global:!0,enumerable:!0,forced:!0},{fetch:function(e){return A(U,G.apply(l,arguments))}}))),s({global:!0,wrap:!0,forced:Y},{Promise:U}),p(U,M,!1,!0),g(M),i=u(M),s({target:M,stat:!0,forced:Y},{reject:function(e){var t=H(this)
return t.reject.call(void 0,e),t.promise}}),s({target:M,stat:!0,forced:c||Y},{resolve:function(e){return A(c&&this===i?U:this,e)}}),s({target:M,stat:!0,forced:J},{all:function(e){var t=this,r=H(t),a=r.resolve,n=r.reject,i=I((function(){var r=v(t.resolve),i=[],o=0,s=1
w(e,(function(e){var c=o++,l=!1
i.push(void 0),s++,r.call(t,e).then((function(e){l||(l=!0,i[c]=e,--s||a(i))}),n)})),--s||a(i)}))
return i.error&&n(i.value),r.promise},race:function(e){var t=this,r=H(t),a=r.reject,n=I((function(){var n=v(t.resolve)
w(e,(function(e){n.call(t,e).then(r.resolve,a)}))}))
return n.error&&a(n.value),r.promise}})},(e,t,r)=>{var a=r(10)
e.exports=a.Promise},(e,t,r)=>{var a=r(28)
e.exports=function(e,t,r){for(var n in t)a(e,n,t[n],r)
return e}},(e,t,r)=>{"use strict"
var a=r(41),n=r(26),i=r(55),o=r(12),s=i("species")
e.exports=function(e){var t=a(e),r=n.f
o&&t&&!t[s]&&r(t,s,{configurable:!0,get:function(){return this}})}},e=>{e.exports=function(e,t,r){if(!(e instanceof t))throw TypeError("Incorrect "+(r?r+" ":"")+"invocation")
return e}},(e,t,r)=>{var a=r(55)("iterator"),n=!1
try{var i=0,o={next:function(){return{done:!!i++}},return:function(){n=!0}}
o[a]=function(){return this},Array.from(o,(function(){throw 2}))}catch(s){}e.exports=function(e,t){if(!t&&!n)return!1
var r=!1
try{var i={}
i[a]=function(){return{next:function(){return{done:r=!0}}}},e(i)}catch(s){}return r}},(e,t,r)=>{var a=r(27),n=r(76),i=r(55)("species")
e.exports=function(e,t){var r,o=a(e).constructor
return void 0===o||null==(r=a(o)[i])?t:n(r)}},(e,t,r)=>{var a,n,i,o=r(10),s=r(13),c=r(75),l=r(61),u=r(24),h=r(94),f=r(96),d=o.location,p=o.setImmediate,g=o.clearImmediate,m=o.process,v=o.MessageChannel,b=o.Dispatch,y=0,w={},k="onreadystatechange",S=function(e){if(w.hasOwnProperty(e)){var t=w[e]
delete w[e],t()}},x=function(e){return function(){S(e)}},C=function(e){S(e.data)},A=function(e){o.postMessage(e+"",d.protocol+"//"+d.host)}
p&&g||(p=function(e){for(var t=[],r=1;arguments.length>r;)t.push(arguments[r++])
return w[++y]=function(){("function"==typeof e?e:Function(e)).apply(void 0,t)},a(y),y},g=function(e){delete w[e]},f?a=function(e){m.nextTick(x(e))}:b&&b.now?a=function(e){b.now(x(e))}:v&&!h?(i=(n=new v).port2,n.port1.onmessage=C,a=c(i.postMessage,i,1)):o.addEventListener&&"function"==typeof postMessage&&!o.importScripts&&d&&"file:"!==d.protocol&&!s(A)?(a=A,o.addEventListener("message",C,!1)):a=k in u("script")?function(e){l.appendChild(u("script")).onreadystatechange=function(){l.removeChild(this),S(e)}}:function(e){setTimeout(x(e),0)}),e.exports={set:p,clear:g}},(e,t,r)=>{var a=r(95)
e.exports=/(iphone|ipod|ipad).*applewebkit/i.test(a)},(e,t,r)=>{var a=r(41)
e.exports=a("navigator","userAgent")||""},(e,t,r)=>{var a=r(18),n=r(10)
e.exports="process"==a(n.process)},(e,t,r)=>{var a,n,i,o,s,c,l,u,h=r(10),f=r(11).f,d=r(93).set,p=r(94),g=r(98),m=r(96),v=h.MutationObserver||h.WebKitMutationObserver,b=h.document,y=h.process,w=h.Promise,k=f(h,"queueMicrotask"),S=k&&k.value
S||(a=function(){var e,t
for(m&&(e=y.domain)&&e.exit();n;){t=n.fn,n=n.next
try{t()}catch(r){throw n?o():i=void 0,r}}i=void 0,e&&e.enter()},p||m||g||!v||!b?w&&w.resolve?(l=w.resolve(void 0),u=l.then,o=function(){u.call(l,a)}):o=m?function(){y.nextTick(a)}:function(){d.call(h,a)}:(s=!0,c=b.createTextNode(""),new v(a).observe(c,{characterData:!0}),o=function(){c.data=s=!s})),e.exports=S||function(e){var t={fn:e,next:void 0}
i&&(i.next=t),n||(n=t,o()),i=t}},(e,t,r)=>{var a=r(95)
e.exports=/web0s(?!.*chrome)/i.test(a)},(e,t,r)=>{var a=r(27),n=r(21),i=r(100)
e.exports=function(e,t){if(a(e),n(t)&&t.constructor===e)return t
var r=i.f(e)
return(0,r.resolve)(t),r.promise}},(e,t,r)=>{"use strict"
var a=r(76),n=function(e){var t,r
this.promise=new e((function(e,a){if(void 0!==t||void 0!==r)throw TypeError("Bad Promise constructor")
t=e,r=a})),this.resolve=a(t),this.reject=a(r)}
e.exports.f=function(e){return new n(e)}},(e,t,r)=>{var a=r(10)
e.exports=function(e,t){var r=a.console
r&&r.error&&(1===arguments.length?r.error(e):r.error(e,t))}},e=>{e.exports=function(e){try{return{error:!1,value:e()}}catch(t){return{error:!0,value:t}}}},(e,t,r)=>{var a,n,i=r(10),o=r(95),s=i.process,c=s&&s.versions,l=c&&c.v8
l?n=(a=l.split("."))[0]+a[1]:o&&(!(a=o.match(/Edge\/(\d+)/))||a[1]>=74)&&(a=o.match(/Chrome\/(\d+)/))&&(n=a[1]),e.exports=n&&+n},(e,t,r)=>{"use strict"
var a=r(9),n=r(76),i=r(100),o=r(102),s=r(73)
a({target:"Promise",stat:!0},{allSettled:function(e){var t=this,r=i.f(t),a=r.resolve,c=r.reject,l=o((function(){var r=n(t.resolve),i=[],o=0,c=1
s(e,(function(e){var n=o++,s=!1
i.push(void 0),c++,r.call(t,e).then((function(e){s||(s=!0,i[n]={status:"fulfilled",value:e},--c||a(i))}),(function(e){s||(s=!0,i[n]={status:"rejected",reason:e},--c||a(i))}))})),--c||a(i)}))
return l.error&&c(l.value),r.promise}})},(e,t,r)=>{"use strict"
var a=r(9),n=r(76),i=r(41),o=r(100),s=r(102),c=r(73),l="No one promise resolved"
a({target:"Promise",stat:!0},{any:function(e){var t=this,r=o.f(t),a=r.resolve,u=r.reject,h=s((function(){var r=n(t.resolve),o=[],s=0,h=1,f=!1
c(e,(function(e){var n=s++,c=!1
o.push(void 0),h++,r.call(t,e).then((function(e){c||f||(f=!0,a(e))}),(function(e){c||f||(c=!0,o[n]=e,--h||u(new(i("AggregateError"))(o,l)))}))})),--h||u(new(i("AggregateError"))(o,l))}))
return h.error&&u(h.value),r.promise}})},(e,t,r)=>{"use strict"
var a=r(9),n=r(36),i=r(87),o=r(13),s=r(41),c=r(92),l=r(99),u=r(28)
a({target:"Promise",proto:!0,real:!0,forced:!!i&&o((function(){i.prototype.finally.call({then:function(){}},(function(){}))}))},{finally:function(e){var t=c(this,s("Promise")),r="function"==typeof e
return this.then(r?function(r){return l(t,e()).then((function(){return r}))}:e,r?function(r){return l(t,e()).then((function(){throw r}))}:e)}}),n||"function"!=typeof i||i.prototype.finally||u(i.prototype,"finally",s("Promise").prototype.finally)},(e,t,r)=>{"use strict"
var a=r(108).charAt,n=r(32),i=r(63),o="String Iterator",s=n.set,c=n.getterFor(o)
i(String,"String",(function(e){s(this,{type:o,string:String(e),index:0})}),(function(){var e,t=c(this),r=t.string,n=t.index
return n>=r.length?{value:void 0,done:!0}:(e=a(r,n),t.index+=e.length,{value:e,done:!1})}))},(e,t,r)=>{var a=r(47),n=r(19),i=function(e){return function(t,r){var i,o,s=String(n(t)),c=a(r),l=s.length
return c<0||c>=l?e?"":void 0:(i=s.charCodeAt(c))<55296||i>56319||c+1===l||(o=s.charCodeAt(c+1))<56320||o>57343?e?s.charAt(c):i:e?s.slice(c,c+2):o-56320+(i-55296<<10)+65536}}
e.exports={codeAt:i(!1),charAt:i(!0)}},(e,t,r)=>{var a=r(10),n=r(110),i=r(53),o=r(25),s=r(55),c=s("iterator"),l=s("toStringTag"),u=i.values
for(var h in n){var f=a[h],d=f&&f.prototype
if(d){if(d[c]!==u)try{o(d,c,u)}catch(g){d[c]=u}if(d[l]||o(d,l,h),n[h])for(var p in i)if(d[p]!==i[p])try{o(d,p,i[p])}catch(g){d[p]=i[p]}}}},e=>{e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},(e,t,r)=>{r(112),r(120),r(118)
var a=r(42)
e.exports=a.URL},(e,t,r)=>{"use strict"
r(107)
var a,n=r(9),i=r(12),o=r(113),s=r(10),c=r(59),l=r(28),u=r(90),h=r(22),f=r(114),d=r(115),p=r(108).codeAt,g=r(117),m=r(69),v=r(118),b=r(32),y=s.URL,w=v.URLSearchParams,k=v.getState,S=b.set,x=b.getterFor("URL"),C=Math.floor,A=Math.pow,O="Invalid scheme",T="Invalid host",I="Invalid port",P=/[A-Za-z]/,E=/[\d+-.A-Za-z]/,_=/\d/,F=/^(0x|0X)/,R=/^[0-7]+$/,B=/^\d+$/,M=/^[\dA-Fa-f]+$/,D=/[\u0000\u0009\u000A\u000D #%/:?@[\\]]/,L=/[\u0000\u0009\u000A\u000D #/:?@[\\]]/,N=/^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,U=/[\u0009\u000A\u000D]/g,j=function(e,t){var r,a,n
if("["==t.charAt(0)){if("]"!=t.charAt(t.length-1))return T
if(!(r=z(t.slice(1,-1))))return T
e.host=r}else if(J(e)){if(t=g(t),D.test(t))return T
if(null===(r=q(t)))return T
e.host=r}else{if(L.test(t))return T
for(r="",a=d(t),n=0;n<a.length;n++)r+=K(a[n],H)
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
return"["+t+"]"}return e},H={},W=f({},H,{" ":1,'"':1,"<":1,">":1,"`":1}),X=f({},W,{"#":1,"?":1,"{":1,"}":1}),V=f({},X,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),K=function(e,t){var r=p(e,0)
return r>32&&r<127&&!h(t,e)?e:encodeURIComponent(e)},Y={ftp:21,file:null,http:80,https:443,ws:80,wss:443},J=function(e){return h(Y,e.scheme)},Z=function(e){return""!=e.username||""!=e.password},Q=function(e){return!e.host||e.cannotBeABaseURL||"file"==e.scheme},$=function(e,t){var r
return 2==e.length&&P.test(e.charAt(0))&&(":"==(r=e.charAt(1))||!t&&"|"==r)},ee=function(e){var t
return e.length>1&&$(e.slice(0,2))&&(2==e.length||"/"===(t=e.charAt(2))||"\\"===t||"?"===t||"#"===t)},te=function(e){var t=e.path,r=t.length
!r||"file"==e.scheme&&1==r&&$(t[0],!0)||t.pop()},re=function(e){return"."===e||"%2e"===e.toLowerCase()},ae={},ne={},ie={},oe={},se={},ce={},le={},ue={},he={},fe={},de={},pe={},ge={},me={},ve={},be={},ye={},we={},ke={},Se={},xe={},Ce=function(e,t,r,n){var i,o,s,c,l,u=r||ae,f=0,p="",g=!1,m=!1,v=!1
for(r||(e.scheme="",e.username="",e.password="",e.host=null,e.port=null,e.path=[],e.query=null,e.fragment=null,e.cannotBeABaseURL=!1,t=t.replace(N,"")),t=t.replace(U,""),i=d(t);f<=i.length;){switch(o=i[f],u){case ae:if(!o||!P.test(o)){if(r)return O
u=ie
continue}p+=o.toLowerCase(),u=ne
break
case ne:if(o&&(E.test(o)||"+"==o||"-"==o||"."==o))p+=o.toLowerCase()
else{if(":"!=o){if(r)return O
p="",u=ie,f=0
continue}if(r&&(J(e)!=h(Y,p)||"file"==p&&(Z(e)||null!==e.port)||"file"==e.scheme&&!e.host))return
if(e.scheme=p,r)return void(J(e)&&Y[e.scheme]==e.port&&(e.port=null))
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
if(":"!=y||v){var w=K(y,V)
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
e.port=J(e)&&k===Y[e.scheme]?null:k,p=""}if(r)return
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
"?"==o?(e.query="",u=Se):"#"==o&&(e.fragment="",u=xe)}else p+=K(o,X)
break
case ke:"?"==o?(e.query="",u=Se):"#"==o?(e.fragment="",u=xe):o!=a&&(e.path[0]+=K(o,H))
break
case Se:r||"#"!=o?o!=a&&("'"==o&&J(e)?e.query+="%27":e.query+="#"==o?"%23":K(o,H)):(e.fragment="",u=xe)
break
case xe:o!=a&&(e.fragment+=K(o,W))}f++}},Ae=function(e){var t,r,a=u(this,Ae,"URL"),n=arguments.length>1?arguments[1]:void 0,o=String(e),s=S(a,{type:"URL"})
if(void 0!==n)if(n instanceof Ae)t=x(n)
else if(r=Ce(t={},String(n)))throw TypeError(r)
if(r=Ce(s,o,null,t))throw TypeError(r)
var c=s.searchParams=new w,l=k(c)
l.updateSearchParams(s.query),l.updateURL=function(){s.query=String(c)||null},i||(a.href=Te.call(a),a.origin=Ie.call(a),a.protocol=Pe.call(a),a.username=Ee.call(a),a.password=_e.call(a),a.host=Fe.call(a),a.hostname=Re.call(a),a.port=Be.call(a),a.pathname=Me.call(a),a.search=De.call(a),a.searchParams=Le.call(a),a.hash=Ne.call(a))},Oe=Ae.prototype,Te=function(){var e=x(this),t=e.scheme,r=e.username,a=e.password,n=e.host,i=e.port,o=e.path,s=e.query,c=e.fragment,l=t+":"
return null!==n?(l+="//",Z(e)&&(l+=r+(a?":"+a:"")+"@"),l+=G(n),null!==i&&(l+=":"+i)):"file"==t&&(l+="//"),l+=e.cannotBeABaseURL?o[0]:o.length?"/"+o.join("/"):"",null!==s&&(l+="?"+s),null!==c&&(l+="#"+c),l},Ie=function(){var e=x(this),t=e.scheme,r=e.port
if("blob"==t)try{return new URL(t.path[0]).origin}catch(a){return"null"}return"file"!=t&&J(e)?t+"://"+G(e.host)+(null!==r?":"+r:""):"null"},Pe=function(){return x(this).scheme+":"},Ee=function(){return x(this).username},_e=function(){return x(this).password},Fe=function(){var e=x(this),t=e.host,r=e.port
return null===t?"":null===r?G(t):G(t)+":"+r},Re=function(){var e=x(this).host
return null===e?"":G(e)},Be=function(){var e=x(this).port
return null===e?"":String(e)},Me=function(){var e=x(this),t=e.path
return e.cannotBeABaseURL?t[0]:t.length?"/"+t.join("/"):""},De=function(){var e=x(this).query
return e?"?"+e:""},Le=function(){return x(this).searchParams},Ne=function(){var e=x(this).fragment
return e?"#"+e:""},Ue=function(e,t){return{get:e,set:t,configurable:!0,enumerable:!0}}
if(i&&c(Oe,{href:Ue(Te,(function(e){var t=x(this),r=String(e),a=Ce(t,r)
if(a)throw TypeError(a)
k(t.searchParams).updateSearchParams(t.query)})),origin:Ue(Ie),protocol:Ue(Pe,(function(e){var t=x(this)
Ce(t,String(e)+":",ae)})),username:Ue(Ee,(function(e){var t=x(this),r=d(String(e))
if(!Q(t)){t.username=""
for(var a=0;a<r.length;a++)t.username+=K(r[a],V)}})),password:Ue(_e,(function(e){var t=x(this),r=d(String(e))
if(!Q(t)){t.password=""
for(var a=0;a<r.length;a++)t.password+=K(r[a],V)}})),host:Ue(Fe,(function(e){var t=x(this)
t.cannotBeABaseURL||Ce(t,String(e),de)})),hostname:Ue(Re,(function(e){var t=x(this)
t.cannotBeABaseURL||Ce(t,String(e),pe)})),port:Ue(Be,(function(e){var t=x(this)
Q(t)||(""==(e=String(e))?t.port=null:Ce(t,e,ge))})),pathname:Ue(Me,(function(e){var t=x(this)
t.cannotBeABaseURL||(t.path=[],Ce(t,e+"",ye))})),search:Ue(De,(function(e){var t=x(this)
""==(e=String(e))?t.query=null:("?"==e.charAt(0)&&(e=e.slice(1)),t.query="",Ce(t,e,Se)),k(t.searchParams).updateSearchParams(t.query)})),searchParams:Ue(Le),hash:Ue(Ne,(function(e){var t=x(this)
""!=(e=String(e))?("#"==e.charAt(0)&&(e=e.slice(1)),t.fragment="",Ce(t,e,xe)):t.fragment=null}))}),l(Oe,"toJSON",(function(){return Te.call(this)}),{enumerable:!0}),l(Oe,"toString",(function(){return Te.call(this)}),{enumerable:!0}),y){var je=y.createObjectURL,qe=y.revokeObjectURL
je&&l(Ae,"createObjectURL",(function(e){return je.apply(y,arguments)})),qe&&l(Ae,"revokeObjectURL",(function(e){return qe.apply(y,arguments)}))}m(Ae,"URL"),n({global:!0,forced:!o,sham:!i},{URL:Ae})},(e,t,r)=>{var a=r(13),n=r(55),i=r(36),o=n("iterator")
e.exports=!a((function(){var e=new URL("b?a=1&b=2&c=3","http://a"),t=e.searchParams,r=""
return e.pathname="c%20d",t.forEach((function(e,a){t.delete("b"),r+=a+e})),i&&!e.toJSON||!t.sort||"http://a/c%20d?a=1&c=3"!==e.href||"3"!==t.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!t[o]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==r||"x"!==new URL("http://x",void 0).host}))},(e,t,r)=>{"use strict"
var a=r(12),n=r(13),i=r(60),o=r(50),s=r(14),c=r(67),l=r(17),u=Object.assign,h=Object.defineProperty
e.exports=!u||n((function(){if(a&&1!==u({b:1},u(h({},"a",{enumerable:!0,get:function(){h(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0
var e={},t={},r=Symbol(),n="abcdefghijklmnopqrst"
return e[r]=7,n.split("").forEach((function(e){t[e]=e})),7!=u({},e)[r]||i(u({},t)).join("")!=n}))?function(e,t){for(var r=c(e),n=arguments.length,u=1,h=o.f,f=s.f;n>u;)for(var d,p=l(arguments[u++]),g=h?i(p).concat(h(p)):i(p),m=g.length,v=0;m>v;)d=g[v++],a&&!f.call(p,d)||(r[d]=p[d])
return r}:u},(e,t,r)=>{"use strict"
var a=r(75),n=r(67),i=r(116),o=r(74),s=r(46),c=r(81),l=r(77)
e.exports=function(e){var t,r,u,h,f,d,p=n(e),g="function"==typeof this?this:Array,m=arguments.length,v=m>1?arguments[1]:void 0,b=void 0!==v,y=l(p),w=0
if(b&&(v=a(v,m>2?arguments[2]:void 0,2)),null==y||g==Array&&o(y))for(r=new g(t=s(p.length));t>w;w++)d=b?v(p[w],w):p[w],c(r,w,d)
else for(f=(h=y.call(p)).next,r=new g;!(u=f.call(h)).done;w++)d=b?i(h,v,[u.value,w],!0):u.value,c(r,w,d)
return r.length=w,r}},(e,t,r)=>{var a=r(27),n=r(80)
e.exports=function(e,t,r,i){try{return i?t(a(r)[0],r[1]):t(r)}catch(o){throw n(e),o}}},e=>{"use strict"
var t=2147483647,r=/[^\0-\u007E]/,a=/[.\u3002\uFF0E\uFF61]/g,n="Overflow: input needs wider integers to process",i=Math.floor,o=String.fromCharCode,s=function(e){return e+22+75*(e<26)},c=function(e,t,r){var a=0
for(e=r?i(e/700):e>>1,e+=i(e/t);e>455;a+=36)e=i(e/35)
return i(a+36*e/(e+38))},l=function(e){var r,a,l=[],u=(e=function(e){for(var t=[],r=0,a=e.length;r<a;){var n=e.charCodeAt(r++)
if(n>=55296&&n<=56319&&r<a){var i=e.charCodeAt(r++)
56320==(64512&i)?t.push(((1023&n)<<10)+(1023&i)+65536):(t.push(n),r--)}else t.push(n)}return t}(e)).length,h=128,f=0,d=72
for(r=0;r<e.length;r++)(a=e[r])<128&&l.push(o(a))
var p=l.length,g=p
for(p&&l.push("-");g<u;){var m=t
for(r=0;r<e.length;r++)(a=e[r])>=h&&a<m&&(m=a)
var v=g+1
if(m-h>i((t-f)/v))throw RangeError(n)
for(f+=(m-h)*v,h=m,r=0;r<e.length;r++){if((a=e[r])<h&&++f>t)throw RangeError(n)
if(a==h){for(var b=f,y=36;;y+=36){var w=y<=d?1:y>=d+26?26:y-d
if(b<w)break
var k=b-w,S=36-w
l.push(o(s(w+k%S))),b=i(k/S)}l.push(o(s(b))),d=c(f,v,g==p),f=0,++g}}++f,++h}return l.join("")}
e.exports=function(e){var t,n,i=[],o=e.toLowerCase().replace(a,".").split(".")
for(t=0;t<o.length;t++)n=o[t],i.push(r.test(n)?"xn--"+l(n):n)
return i.join(".")}},(e,t,r)=>{"use strict"
r(53)
var a=r(9),n=r(41),i=r(113),o=r(28),s=r(88),c=r(69),l=r(64),u=r(32),h=r(90),f=r(22),d=r(75),p=r(78),g=r(27),m=r(21),v=r(58),b=r(15),y=r(119),w=r(77),k=r(55),S=n("fetch"),x=n("Headers"),C=k("iterator"),A="URLSearchParams",O="URLSearchParamsIterator",T=u.set,I=u.getterFor(A),P=u.getterFor(O),E=/\+/g,_=Array(4),F=function(e){return _[e-1]||(_[e-1]=RegExp("((?:%[\\da-f]{2}){"+e+"})","gi"))},R=function(e){try{return decodeURIComponent(e)}catch(t){return e}},B=function(e){var t=e.replace(E," "),r=4
try{return decodeURIComponent(t)}catch(a){for(;r;)t=t.replace(F(r--),R)
return t}},M=/[!'()~]|%20/g,D={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},L=function(e){return D[e]},N=function(e){return encodeURIComponent(e).replace(M,L)},U=function(e,t){if(t)for(var r,a,n=t.split("&"),i=0;i<n.length;)(r=n[i++]).length&&(a=r.split("="),e.push({key:B(a.shift()),value:B(a.join("="))}))},j=function(e){this.entries.length=0,U(this.entries,e)},q=function(e,t){if(e<t)throw TypeError("Not enough arguments")},z=l((function(e,t){T(this,{type:O,iterator:y(I(e).entries),kind:t})}),"Iterator",(function(){var e=P(this),t=e.kind,r=e.iterator.next(),a=r.value
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
return arguments.length>1&&(m(t=arguments[1])&&(r=t.body,p(r)===A&&((a=t.headers?new x(t.headers):new x).has("content-type")||a.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"),t=v(t,{body:b(0,String(r)),headers:b(0,a)}))),n.push(t)),S.apply(this,n)}}),e.exports={URLSearchParams:G,getState:I}},(e,t,r)=>{var a=r(27),n=r(77)
e.exports=function(e){var t=n(e)
if("function"!=typeof t)throw TypeError(String(e)+" is not iterable")
return a(t.call(e))}},(e,t,r)=>{"use strict"
r(9)({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return URL.prototype.toString.call(this)}})},function(e,t){(function(e){"use strict"
var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?Symbol:function(e){return"Symbol("+e+")"}
function r(){}var a="undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:void 0
function n(e){return"object"==typeof e&&null!==e||"function"==typeof e}var i=r,o=Promise,s=Promise.prototype.then,c=Promise.resolve.bind(o),l=Promise.reject.bind(o)
function u(e){return new o(e)}function h(e){return c(e)}function f(e){return l(e)}function d(e,t,r){return s.call(e,t,r)}function p(e,t,r){d(d(e,t,r),void 0,i)}function g(e,t){p(e,t)}function m(e,t){p(e,void 0,t)}function v(e,t,r){return d(e,t,r)}function b(e){d(e,void 0,i)}var y=function(){var e=a&&a.queueMicrotask
if("function"==typeof e)return e
var t=h(void 0)
return function(e){return d(t,e)}}()
function w(e,t,r){if("function"!=typeof e)throw new TypeError("Argument is not a function")
return Function.prototype.apply.call(e,t,r)}function k(e,t,r){try{return h(w(e,t,r))}catch(a){return f(a)}}var S=function(){function e(){this._cursor=0,this._size=0,this._front={_elements:[],_next:void 0},this._back=this._front,this._cursor=0,this._size=0}return Object.defineProperty(e.prototype,"length",{get:function(){return this._size},enumerable:!1,configurable:!0}),e.prototype.push=function(e){var t=this._back,r=t
16383===t._elements.length&&(r={_elements:[],_next:void 0}),t._elements.push(e),r!==t&&(this._back=r,t._next=r),++this._size},e.prototype.shift=function(){var e=this._front,t=e,r=this._cursor,a=r+1,n=e._elements,i=n[r]
return 16384===a&&(t=e._next,a=0),--this._size,this._cursor=a,e!==t&&(this._front=t),n[r]=void 0,i},e.prototype.forEach=function(e){for(var t=this._cursor,r=this._front,a=r._elements;!(t===a.length&&void 0===r._next||t===a.length&&(t=0,0===(a=(r=r._next)._elements).length));)e(a[t]),++t},e.prototype.peek=function(){var e=this._front,t=this._cursor
return e._elements[t]},e}()
function x(e,t){e._ownerReadableStream=t,t._reader=e,"readable"===t._state?T(e):"closed"===t._state?function(e){T(e),E(e)}(e):I(e,t._storedError)}function C(e,t){return lr(e._ownerReadableStream,t)}function A(e){"readable"===e._ownerReadableStream._state?P(e,new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")):function(e,t){I(e,t)}(e,new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")),e._ownerReadableStream._reader=void 0,e._ownerReadableStream=void 0}function O(e){return new TypeError("Cannot "+e+" a stream using a released reader")}function T(e){e._closedPromise=u((function(t,r){e._closedPromise_resolve=t,e._closedPromise_reject=r}))}function I(e,t){T(e),P(e,t)}function P(e,t){void 0!==e._closedPromise_reject&&(b(e._closedPromise),e._closedPromise_reject(t),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0)}function E(e){void 0!==e._closedPromise_resolve&&(e._closedPromise_resolve(void 0),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0)}var _=t("[[AbortSteps]]"),F=t("[[ErrorSteps]]"),R=t("[[CancelSteps]]"),B=t("[[PullSteps]]"),M=Number.isFinite||function(e){return"number"==typeof e&&isFinite(e)},D=Math.trunc||function(e){return e<0?Math.ceil(e):Math.floor(e)}
function L(e,t){if(void 0!==e&&"object"!=typeof(r=e)&&"function"!=typeof r)throw new TypeError(t+" is not an object.")
var r}function N(e,t){if("function"!=typeof e)throw new TypeError(t+" is not a function.")}function U(e,t){if(!function(e){return"object"==typeof e&&null!==e||"function"==typeof e}(e))throw new TypeError(t+" is not an object.")}function j(e,t,r){if(void 0===e)throw new TypeError("Parameter "+t+" is required in '"+r+"'.")}function q(e,t,r){if(void 0===e)throw new TypeError(t+" is required in '"+r+"'.")}function z(e){return Number(e)}function G(e){return 0===e?0:e}function H(e,t){var r=Number.MAX_SAFE_INTEGER,a=Number(e)
if(a=G(a),!M(a))throw new TypeError(t+" is not a finite number")
if((a=function(e){return G(D(e))}(a))<0||a>r)throw new TypeError(t+" is outside the accepted range of 0 to "+r+", inclusive")
return M(a)&&0!==a?a:0}function W(e,t){if(!sr(e))throw new TypeError(t+" is not a ReadableStream.")}function X(e){return new $(e)}function V(e,t){e._reader._readRequests.push(t)}function K(e,t,r){var a=e._reader._readRequests.shift()
r?a._closeSteps():a._chunkSteps(t)}function Y(e){return e._reader._readRequests.length}function J(e){var t=e._reader
return void 0!==t&&!!ee(t)}var Z,Q,$=function(){function e(e){if(j(e,1,"ReadableStreamDefaultReader"),W(e,"First parameter"),cr(e))throw new TypeError("This stream has already been locked for exclusive reading by another reader")
x(this,e),this._readRequests=new S}return Object.defineProperty(e.prototype,"closed",{get:function(){return ee(this)?this._closedPromise:f(re("closed"))},enumerable:!1,configurable:!0}),e.prototype.cancel=function(e){return void 0===e&&(e=void 0),ee(this)?void 0===this._ownerReadableStream?f(O("cancel")):C(this,e):f(re("cancel"))},e.prototype.read=function(){if(!ee(this))return f(re("read"))
if(void 0===this._ownerReadableStream)return f(O("read from"))
var e,t,r=u((function(r,a){e=r,t=a}))
return te(this,{_chunkSteps:function(t){return e({value:t,done:!1})},_closeSteps:function(){return e({value:void 0,done:!0})},_errorSteps:function(e){return t(e)}}),r},e.prototype.releaseLock=function(){if(!ee(this))throw re("releaseLock")
if(void 0!==this._ownerReadableStream){if(this._readRequests.length>0)throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled")
A(this)}},e}()
function ee(e){return!!n(e)&&!!Object.prototype.hasOwnProperty.call(e,"_readRequests")}function te(e,t){var r=e._ownerReadableStream
r._disturbed=!0,"closed"===r._state?t._closeSteps():"errored"===r._state?t._errorSteps(r._storedError):r._readableStreamController[B](t)}function re(e){return new TypeError("ReadableStreamDefaultReader.prototype."+e+" can only be used on a ReadableStreamDefaultReader")}Object.defineProperties($.prototype,{cancel:{enumerable:!0},read:{enumerable:!0},releaseLock:{enumerable:!0},closed:{enumerable:!0}}),"symbol"==typeof t.toStringTag&&Object.defineProperty($.prototype,t.toStringTag,{value:"ReadableStreamDefaultReader",configurable:!0}),"symbol"==typeof t.asyncIterator&&((Z={})[t.asyncIterator]=function(){return this},Q=Z,Object.defineProperty(Q,t.asyncIterator,{enumerable:!1}))
var ae=function(){function e(e,t){this._ongoingPromise=void 0,this._isFinished=!1,this._reader=e,this._preventCancel=t}return e.prototype.next=function(){var e=this,t=function(){return e._nextSteps()}
return this._ongoingPromise=this._ongoingPromise?v(this._ongoingPromise,t,t):t(),this._ongoingPromise},e.prototype.return=function(e){var t=this,r=function(){return t._returnSteps(e)}
return this._ongoingPromise?v(this._ongoingPromise,r,r):r()},e.prototype._nextSteps=function(){var e=this
if(this._isFinished)return Promise.resolve({value:void 0,done:!0})
var t,r,a=this._reader
if(void 0===a._ownerReadableStream)return f(O("iterate"))
var n=u((function(e,a){t=e,r=a}))
return te(a,{_chunkSteps:function(r){e._ongoingPromise=void 0,y((function(){return t({value:r,done:!1})}))},_closeSteps:function(){e._ongoingPromise=void 0,e._isFinished=!0,A(a),t({value:void 0,done:!0})},_errorSteps:function(t){e._ongoingPromise=void 0,e._isFinished=!0,A(a),r(t)}}),n},e.prototype._returnSteps=function(e){if(this._isFinished)return Promise.resolve({value:e,done:!0})
this._isFinished=!0
var t=this._reader
if(void 0===t._ownerReadableStream)return f(O("finish iterating"))
if(!this._preventCancel){var r=C(t,e)
return A(t),v(r,(function(){return{value:e,done:!0}}))}return A(t),h({value:e,done:!0})},e}(),ne={next:function(){return ie(this)?this._asyncIteratorImpl.next():f(oe("next"))},return:function(e){return ie(this)?this._asyncIteratorImpl.return(e):f(oe("return"))}}
function ie(e){return!!n(e)&&!!Object.prototype.hasOwnProperty.call(e,"_asyncIteratorImpl")}function oe(e){return new TypeError("ReadableStreamAsyncIterator."+e+" can only be used on a ReadableSteamAsyncIterator")}void 0!==Q&&Object.setPrototypeOf(ne,Q)
var se=Number.isNaN||function(e){return e!=e}
function ce(e){return!!function(e){return"number"==typeof e&&(!se(e)&&!(e<0))}(e)&&e!==1/0}function le(e){var t=e._queue.shift()
return e._queueTotalSize-=t.size,e._queueTotalSize<0&&(e._queueTotalSize=0),t.value}function ue(e,t,r){if(!ce(r=Number(r)))throw new RangeError("Size must be a finite, non-NaN, non-negative number.")
e._queue.push({value:t,size:r}),e._queueTotalSize+=r}function he(e){e._queue=new S,e._queueTotalSize=0}function fe(e){return e.slice()}var de=function(){function e(){throw new TypeError("Illegal constructor")}return Object.defineProperty(e.prototype,"view",{get:function(){if(!me(this))throw Fe("view")
return this._view},enumerable:!1,configurable:!0}),e.prototype.respond=function(e){if(!me(this))throw Fe("respond")
if(j(e,1,"respond"),e=H(e,"First parameter"),void 0===this._associatedReadableByteStreamController)throw new TypeError("This BYOB request has been invalidated")
this._view.buffer,function(e,t){if(!ce(t=Number(t)))throw new RangeError("bytesWritten must be a finite")
Oe(e,t)}(this._associatedReadableByteStreamController,e)},e.prototype.respondWithNewView=function(e){if(!me(this))throw Fe("respondWithNewView")
if(j(e,1,"respondWithNewView"),!ArrayBuffer.isView(e))throw new TypeError("You can only respond with array buffer views")
if(0===e.byteLength)throw new TypeError("chunk must have non-zero byteLength")
if(0===e.buffer.byteLength)throw new TypeError("chunk's buffer must have non-zero byteLength")
if(void 0===this._associatedReadableByteStreamController)throw new TypeError("This BYOB request has been invalidated");(function(e,t){var r=e._pendingPullIntos.peek()
if(r.byteOffset+r.bytesFilled!==t.byteOffset)throw new RangeError("The region specified by view does not match byobRequest")
if(r.byteLength!==t.byteLength)throw new RangeError("The buffer of view has different capacity than byobRequest")
r.buffer=t.buffer,Oe(e,t.byteLength)})(this._associatedReadableByteStreamController,e)},e}()
Object.defineProperties(de.prototype,{respond:{enumerable:!0},respondWithNewView:{enumerable:!0},view:{enumerable:!0}}),"symbol"==typeof t.toStringTag&&Object.defineProperty(de.prototype,t.toStringTag,{value:"ReadableStreamBYOBRequest",configurable:!0})
var pe=function(){function e(){throw new TypeError("Illegal constructor")}return Object.defineProperty(e.prototype,"byobRequest",{get:function(){if(!ge(this))throw Re("byobRequest")
if(null===this._byobRequest&&this._pendingPullIntos.length>0){var e=this._pendingPullIntos.peek(),t=new Uint8Array(e.buffer,e.byteOffset+e.bytesFilled,e.byteLength-e.bytesFilled),r=Object.create(de.prototype);(function(e,t,r){e._associatedReadableByteStreamController=t,e._view=r})(r,this,t),this._byobRequest=r}return this._byobRequest},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"desiredSize",{get:function(){if(!ge(this))throw Re("desiredSize")
return Ee(this)},enumerable:!1,configurable:!0}),e.prototype.close=function(){if(!ge(this))throw Re("close")
if(this._closeRequested)throw new TypeError("The stream has already been closed; do not close it again!")
var e=this._controlledReadableByteStream._state
if("readable"!==e)throw new TypeError("The stream (in "+e+" state) is not in the readable state and cannot be closed");(function(e){var t=e._controlledReadableByteStream
if(!e._closeRequested&&"readable"===t._state)if(e._queueTotalSize>0)e._closeRequested=!0
else{if(e._pendingPullIntos.length>0&&e._pendingPullIntos.peek().bytesFilled>0){var r=new TypeError("Insufficient bytes to fill elements in the given buffer")
throw Pe(e,r),r}Ie(e),ur(t)}})(this)},e.prototype.enqueue=function(e){if(!ge(this))throw Re("enqueue")
if(j(e,1,"enqueue"),!ArrayBuffer.isView(e))throw new TypeError("chunk must be an array buffer view")
if(0===e.byteLength)throw new TypeError("chunk must have non-zero byteLength")
if(0===e.buffer.byteLength)throw new TypeError("chunk's buffer must have non-zero byteLength")
if(this._closeRequested)throw new TypeError("stream is closed or draining")
var t=this._controlledReadableByteStream._state
if("readable"!==t)throw new TypeError("The stream (in "+t+" state) is not in the readable state and cannot be enqueued to");(function(e,t){var r=e._controlledReadableByteStream
if(!e._closeRequested&&"readable"===r._state){var a=t.buffer,n=t.byteOffset,i=t.byteLength,o=a
J(r)?0===Y(r)?we(e,o,n,i):K(r,new Uint8Array(o,n,i),!1):De(r)?(we(e,o,n,i),Ae(e)):we(e,o,n,i),ve(e)}})(this,e)},e.prototype.error=function(e){if(void 0===e&&(e=void 0),!ge(this))throw Re("error")
Pe(this,e)},e.prototype[R]=function(e){this._pendingPullIntos.length>0&&(this._pendingPullIntos.peek().bytesFilled=0),he(this)
var t=this._cancelAlgorithm(e)
return Ie(this),t},e.prototype[B]=function(e){var t=this._controlledReadableByteStream
if(this._queueTotalSize>0){var r=this._queue.shift()
this._queueTotalSize-=r.byteLength,xe(this)
var a=new Uint8Array(r.buffer,r.byteOffset,r.byteLength)
e._chunkSteps(a)}else{var n=this._autoAllocateChunkSize
if(void 0!==n){var i=void 0
try{i=new ArrayBuffer(n)}catch(s){return void e._errorSteps(s)}var o={buffer:i,byteOffset:0,byteLength:n,bytesFilled:0,elementSize:1,viewConstructor:Uint8Array,readerType:"default"}
this._pendingPullIntos.push(o)}V(t,e),ve(this)}},e}()
function ge(e){return!!n(e)&&!!Object.prototype.hasOwnProperty.call(e,"_controlledReadableByteStream")}function me(e){return!!n(e)&&!!Object.prototype.hasOwnProperty.call(e,"_associatedReadableByteStreamController")}function ve(e){(function(e){var t=e._controlledReadableByteStream
return"readable"===t._state&&(!e._closeRequested&&(!!e._started&&(!!(J(t)&&Y(t)>0)||(!!(De(t)&&Me(t)>0)||Ee(e)>0))))})(e)&&(e._pulling?e._pullAgain=!0:(e._pulling=!0,p(e._pullAlgorithm(),(function(){e._pulling=!1,e._pullAgain&&(e._pullAgain=!1,ve(e))}),(function(t){Pe(e,t)}))))}function be(e,t){var r=!1
"closed"===e._state&&(r=!0)
var a=ye(t)
"default"===t.readerType?K(e,a,r):function(e,t,r){var a=e._reader._readIntoRequests.shift()
r?a._closeSteps(t):a._chunkSteps(t)}(e,a,r)}function ye(e){var t=e.bytesFilled,r=e.elementSize
return new e.viewConstructor(e.buffer,e.byteOffset,t/r)}function we(e,t,r,a){e._queue.push({buffer:t,byteOffset:r,byteLength:a}),e._queueTotalSize+=a}function ke(e,t){var r=t.elementSize,a=t.bytesFilled-t.bytesFilled%r,n=Math.min(e._queueTotalSize,t.byteLength-t.bytesFilled),i=t.bytesFilled+n,o=i-i%r,s=n,c=!1
o>a&&(s=o-t.bytesFilled,c=!0)
for(var l,u,h,f,d,p=e._queue;s>0;){var g=p.peek(),m=Math.min(s,g.byteLength),v=t.byteOffset+t.bytesFilled
l=t.buffer,u=v,h=g.buffer,f=g.byteOffset,d=m,new Uint8Array(l).set(new Uint8Array(h,f,d),u),g.byteLength===m?p.shift():(g.byteOffset+=m,g.byteLength-=m),e._queueTotalSize-=m,Se(e,m,t),s-=m}return c}function Se(e,t,r){Ce(e),r.bytesFilled+=t}function xe(e){0===e._queueTotalSize&&e._closeRequested?(Ie(e),ur(e._controlledReadableByteStream)):ve(e)}function Ce(e){null!==e._byobRequest&&(e._byobRequest._associatedReadableByteStreamController=void 0,e._byobRequest._view=null,e._byobRequest=null)}function Ae(e){for(;e._pendingPullIntos.length>0;){if(0===e._queueTotalSize)return
var t=e._pendingPullIntos.peek()
ke(e,t)&&(Te(e),be(e._controlledReadableByteStream,t))}}function Oe(e,t){var r=e._pendingPullIntos.peek()
if("closed"===e._controlledReadableByteStream._state){if(0!==t)throw new TypeError("bytesWritten must be 0 when calling respond() on a closed stream");(function(e,t){t.buffer=t.buffer
var r=e._controlledReadableByteStream
if(De(r))for(;Me(r)>0;)be(r,Te(e))})(e,r)}else(function(e,t,r){if(r.bytesFilled+t>r.byteLength)throw new RangeError("bytesWritten out of range")
if(Se(e,t,r),!(r.bytesFilled<r.elementSize)){Te(e)
var a=r.bytesFilled%r.elementSize
if(a>0){var n=r.byteOffset+r.bytesFilled,i=r.buffer.slice(n-a,n)
we(e,i,0,i.byteLength)}r.buffer=r.buffer,r.bytesFilled-=a,be(e._controlledReadableByteStream,r),Ae(e)}})(e,t,r)
ve(e)}function Te(e){var t=e._pendingPullIntos.shift()
return Ce(e),t}function Ie(e){e._pullAlgorithm=void 0,e._cancelAlgorithm=void 0}function Pe(e,t){var r=e._controlledReadableByteStream
"readable"===r._state&&(function(e){Ce(e),e._pendingPullIntos=new S}(e),he(e),Ie(e),hr(r,t))}function Ee(e){var t=e._controlledReadableByteStream._state
return"errored"===t?null:"closed"===t?0:e._strategyHWM-e._queueTotalSize}function _e(e,t,r){var a=Object.create(pe.prototype),n=function(){},i=function(){return h(void 0)},o=function(){return h(void 0)}
void 0!==t.start&&(n=function(){return t.start(a)}),void 0!==t.pull&&(i=function(){return t.pull(a)}),void 0!==t.cancel&&(o=function(e){return t.cancel(e)})
var s=t.autoAllocateChunkSize;(function(e,t,r,a,n,i,o){t._controlledReadableByteStream=e,t._pullAgain=!1,t._pulling=!1,t._byobRequest=null,t._queue=t._queueTotalSize=void 0,he(t),t._closeRequested=!1,t._started=!1,t._strategyHWM=i,t._pullAlgorithm=a,t._cancelAlgorithm=n,t._autoAllocateChunkSize=o,t._pendingPullIntos=new S,e._readableStreamController=t,p(h(r()),(function(){t._started=!0,ve(t)}),(function(e){Pe(t,e)}))})(e,a,n,i,o,r,s)}function Fe(e){return new TypeError("ReadableStreamBYOBRequest.prototype."+e+" can only be used on a ReadableStreamBYOBRequest")}function Re(e){return new TypeError("ReadableByteStreamController.prototype."+e+" can only be used on a ReadableByteStreamController")}function Be(e,t){e._reader._readIntoRequests.push(t)}function Me(e){return e._reader._readIntoRequests.length}function De(e){var t=e._reader
return void 0!==t&&!!Ne(t)}Object.defineProperties(pe.prototype,{close:{enumerable:!0},enqueue:{enumerable:!0},error:{enumerable:!0},byobRequest:{enumerable:!0},desiredSize:{enumerable:!0}}),"symbol"==typeof t.toStringTag&&Object.defineProperty(pe.prototype,t.toStringTag,{value:"ReadableByteStreamController",configurable:!0})
var Le=function(){function e(e){if(j(e,1,"ReadableStreamBYOBReader"),W(e,"First parameter"),cr(e))throw new TypeError("This stream has already been locked for exclusive reading by another reader")
if(!ge(e._readableStreamController))throw new TypeError("Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source")
x(this,e),this._readIntoRequests=new S}return Object.defineProperty(e.prototype,"closed",{get:function(){return Ne(this)?this._closedPromise:f(Ue("closed"))},enumerable:!1,configurable:!0}),e.prototype.cancel=function(e){return void 0===e&&(e=void 0),Ne(this)?void 0===this._ownerReadableStream?f(O("cancel")):C(this,e):f(Ue("cancel"))},e.prototype.read=function(e){if(!Ne(this))return f(Ue("read"))
if(!ArrayBuffer.isView(e))return f(new TypeError("view must be an array buffer view"))
if(0===e.byteLength)return f(new TypeError("view must have non-zero byteLength"))
if(0===e.buffer.byteLength)return f(new TypeError("view's buffer must have non-zero byteLength"))
if(void 0===this._ownerReadableStream)return f(O("read from"))
var t,r,a=u((function(e,a){t=e,r=a}))
return function(e,t,r){var a=e._ownerReadableStream
a._disturbed=!0,"errored"===a._state?r._errorSteps(a._storedError):function(e,t,r){var a=e._controlledReadableByteStream,n=1
t.constructor!==DataView&&(n=t.constructor.BYTES_PER_ELEMENT)
var i=t.constructor,o={buffer:t.buffer,byteOffset:t.byteOffset,byteLength:t.byteLength,bytesFilled:0,elementSize:n,viewConstructor:i,readerType:"byob"}
if(e._pendingPullIntos.length>0)return e._pendingPullIntos.push(o),void Be(a,r)
if("closed"!==a._state){if(e._queueTotalSize>0){if(ke(e,o)){var s=ye(o)
return xe(e),void r._chunkSteps(s)}if(e._closeRequested){var c=new TypeError("Insufficient bytes to fill elements in the given buffer")
return Pe(e,c),void r._errorSteps(c)}}e._pendingPullIntos.push(o),Be(a,r),ve(e)}else{var l=new i(o.buffer,o.byteOffset,0)
r._closeSteps(l)}}(a._readableStreamController,t,r)}(this,e,{_chunkSteps:function(e){return t({value:e,done:!1})},_closeSteps:function(e){return t({value:e,done:!0})},_errorSteps:function(e){return r(e)}}),a},e.prototype.releaseLock=function(){if(!Ne(this))throw Ue("releaseLock")
if(void 0!==this._ownerReadableStream){if(this._readIntoRequests.length>0)throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled")
A(this)}},e}()
function Ne(e){return!!n(e)&&!!Object.prototype.hasOwnProperty.call(e,"_readIntoRequests")}function Ue(e){return new TypeError("ReadableStreamBYOBReader.prototype."+e+" can only be used on a ReadableStreamBYOBReader")}function je(e,t){var r=e.highWaterMark
if(void 0===r)return t
if(se(r)||r<0)throw new RangeError("Invalid highWaterMark")
return r}function qe(e){var t=e.size
return t||function(){return 1}}function ze(e,t){L(e,t)
var r=null==e?void 0:e.highWaterMark,a=null==e?void 0:e.size
return{highWaterMark:void 0===r?void 0:z(r),size:void 0===a?void 0:Ge(a,t+" has member 'size' that")}}function Ge(e,t){return N(e,t),function(t){return z(e(t))}}function He(e,t,r){return N(e,r),function(r){return k(e,t,[r])}}function We(e,t,r){return N(e,r),function(){return k(e,t,[])}}function Xe(e,t,r){return N(e,r),function(r){return w(e,t,[r])}}function Ve(e,t,r){return N(e,r),function(r,a){return k(e,t,[r,a])}}function Ke(e,t){if(!Qe(e))throw new TypeError(t+" is not a WritableStream.")}Object.defineProperties(Le.prototype,{cancel:{enumerable:!0},read:{enumerable:!0},releaseLock:{enumerable:!0},closed:{enumerable:!0}}),"symbol"==typeof t.toStringTag&&Object.defineProperty(Le.prototype,t.toStringTag,{value:"ReadableStreamBYOBReader",configurable:!0})
var Ye=function(){function e(e,t){void 0===e&&(e={}),void 0===t&&(t={}),void 0===e?e=null:U(e,"First parameter")
var r=ze(t,"Second parameter"),a=function(e,t){L(e,t)
var r=null==e?void 0:e.abort,a=null==e?void 0:e.close,n=null==e?void 0:e.start,i=null==e?void 0:e.type,o=null==e?void 0:e.write
return{abort:void 0===r?void 0:He(r,e,t+" has member 'abort' that"),close:void 0===a?void 0:We(a,e,t+" has member 'close' that"),start:void 0===n?void 0:Xe(n,e,t+" has member 'start' that"),write:void 0===o?void 0:Ve(o,e,t+" has member 'write' that"),type:i}}(e,"First parameter")
if(Ze(this),void 0!==a.type)throw new RangeError("Invalid type is specified")
var n=qe(r);(function(e,t,r,a){var n=Object.create(mt.prototype),i=function(){},o=function(){return h(void 0)},s=function(){return h(void 0)},c=function(){return h(void 0)}
void 0!==t.start&&(i=function(){return t.start(n)}),void 0!==t.write&&(o=function(e){return t.write(e,n)}),void 0!==t.close&&(s=function(){return t.close()}),void 0!==t.abort&&(c=function(e){return t.abort(e)}),vt(e,n,i,o,s,c,r,a)})(this,a,je(r,1),n)}return Object.defineProperty(e.prototype,"locked",{get:function(){if(!Qe(this))throw Ct("locked")
return $e(this)},enumerable:!1,configurable:!0}),e.prototype.abort=function(e){return void 0===e&&(e=void 0),Qe(this)?$e(this)?f(new TypeError("Cannot abort a stream that already has a writer")):et(this,e):f(Ct("abort"))},e.prototype.close=function(){return Qe(this)?$e(this)?f(new TypeError("Cannot close a stream that already has a writer")):it(this)?f(new TypeError("Cannot close an already-closing stream")):tt(this):f(Ct("close"))},e.prototype.getWriter=function(){if(!Qe(this))throw Ct("getWriter")
return Je(this)},e}()
function Je(e){return new ct(e)}function Ze(e){e._state="writable",e._storedError=void 0,e._writer=void 0,e._writableStreamController=void 0,e._writeRequests=new S,e._inFlightWriteRequest=void 0,e._closeRequest=void 0,e._inFlightCloseRequest=void 0,e._pendingAbortRequest=void 0,e._backpressure=!1}function Qe(e){return!!n(e)&&!!Object.prototype.hasOwnProperty.call(e,"_writableStreamController")}function $e(e){return void 0!==e._writer}function et(e,t){var r=e._state
if("closed"===r||"errored"===r)return h(void 0)
if(void 0!==e._pendingAbortRequest)return e._pendingAbortRequest._promise
var a=!1
"erroring"===r&&(a=!0,t=void 0)
var n=u((function(r,n){e._pendingAbortRequest={_promise:void 0,_resolve:r,_reject:n,_reason:t,_wasAlreadyErroring:a}}))
return e._pendingAbortRequest._promise=n,a||at(e,t),n}function tt(e){var t=e._state
if("closed"===t||"errored"===t)return f(new TypeError("The stream (in "+t+" state) is not in the writable state and cannot be closed"))
var r,a=u((function(t,r){var a={_resolve:t,_reject:r}
e._closeRequest=a})),n=e._writer
return void 0!==n&&e._backpressure&&"writable"===t&&Mt(n),ue(r=e._writableStreamController,gt,0),wt(r),a}function rt(e,t){"writable"!==e._state?nt(e):at(e,t)}function at(e,t){var r=e._writableStreamController
e._state="erroring",e._storedError=t
var a=e._writer
void 0!==a&&ft(a,t),!function(e){return void 0!==e._inFlightWriteRequest||void 0!==e._inFlightCloseRequest}(e)&&r._started&&nt(e)}function nt(e){e._state="errored",e._writableStreamController[F]()
var t=e._storedError
if(e._writeRequests.forEach((function(e){e._reject(t)})),e._writeRequests=new S,void 0!==e._pendingAbortRequest){var r=e._pendingAbortRequest
if(e._pendingAbortRequest=void 0,r._wasAlreadyErroring)return r._reject(t),void ot(e)
p(e._writableStreamController[_](r._reason),(function(){r._resolve(),ot(e)}),(function(t){r._reject(t),ot(e)}))}else ot(e)}function it(e){return void 0!==e._closeRequest||void 0!==e._inFlightCloseRequest}function ot(e){void 0!==e._closeRequest&&(e._closeRequest._reject(e._storedError),e._closeRequest=void 0)
var t=e._writer
void 0!==t&&Pt(t,e._storedError)}function st(e,t){var r=e._writer
void 0!==r&&t!==e._backpressure&&(t?function(e){_t(e)}(r):Mt(r)),e._backpressure=t}Object.defineProperties(Ye.prototype,{abort:{enumerable:!0},close:{enumerable:!0},getWriter:{enumerable:!0},locked:{enumerable:!0}}),"symbol"==typeof t.toStringTag&&Object.defineProperty(Ye.prototype,t.toStringTag,{value:"WritableStream",configurable:!0})
var ct=function(){function e(e){if(j(e,1,"WritableStreamDefaultWriter"),Ke(e,"First parameter"),$e(e))throw new TypeError("This stream has already been locked for exclusive writing by another writer")
this._ownerWritableStream=e,e._writer=this
var t,r=e._state
if("writable"===r)!it(e)&&e._backpressure?_t(this):Rt(this),Tt(this)
else if("erroring"===r)Ft(this,e._storedError),Tt(this)
else if("closed"===r)Rt(this),Tt(t=this),Et(t)
else{var a=e._storedError
Ft(this,a),It(this,a)}}return Object.defineProperty(e.prototype,"closed",{get:function(){return lt(this)?this._closedPromise:f(At("closed"))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"desiredSize",{get:function(){if(!lt(this))throw At("desiredSize")
if(void 0===this._ownerWritableStream)throw Ot("desiredSize")
return e=this._ownerWritableStream,"errored"===(t=e._state)||"erroring"===t?null:"closed"===t?0:yt(e._writableStreamController)
var e,t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"ready",{get:function(){return lt(this)?this._readyPromise:f(At("ready"))},enumerable:!1,configurable:!0}),e.prototype.abort=function(e){return void 0===e&&(e=void 0),lt(this)?void 0===this._ownerWritableStream?f(Ot("abort")):function(e,t){return et(e._ownerWritableStream,t)}(this,e):f(At("abort"))},e.prototype.close=function(){if(!lt(this))return f(At("close"))
var e=this._ownerWritableStream
return void 0===e?f(Ot("close")):it(e)?f(new TypeError("Cannot close an already-closing stream")):ut(this)},e.prototype.releaseLock=function(){if(!lt(this))throw At("releaseLock")
void 0!==this._ownerWritableStream&&dt(this)},e.prototype.write=function(e){return void 0===e&&(e=void 0),lt(this)?void 0===this._ownerWritableStream?f(Ot("write to")):pt(this,e):f(At("write"))},e}()
function lt(e){return!!n(e)&&!!Object.prototype.hasOwnProperty.call(e,"_ownerWritableStream")}function ut(e){return tt(e._ownerWritableStream)}function ht(e,t){"pending"===e._closedPromiseState?Pt(e,t):function(e,t){It(e,t)}(e,t)}function ft(e,t){"pending"===e._readyPromiseState?Bt(e,t):function(e,t){Ft(e,t)}(e,t)}function dt(e){var t=e._ownerWritableStream,r=new TypeError("Writer was released and can no longer be used to monitor the stream's closedness")
ft(e,r),ht(e,r),t._writer=void 0,e._ownerWritableStream=void 0}function pt(e,t){var r=e._ownerWritableStream,a=r._writableStreamController,n=function(e,t){try{return e._strategySizeAlgorithm(t)}catch(r){return kt(e,r),1}}(a,t)
if(r!==e._ownerWritableStream)return f(Ot("write to"))
var i=r._state
if("errored"===i)return f(r._storedError)
if(it(r)||"closed"===i)return f(new TypeError("The stream is closing or closed and cannot be written to"))
if("erroring"===i)return f(r._storedError)
var o=function(e){return u((function(t,r){var a={_resolve:t,_reject:r}
e._writeRequests.push(a)}))}(r)
return function(e,t,r){try{ue(e,t,r)}catch(n){return void kt(e,n)}var a=e._controlledWritableStream
it(a)||"writable"!==a._state||st(a,St(e)),wt(e)}(a,t,n),o}Object.defineProperties(ct.prototype,{abort:{enumerable:!0},close:{enumerable:!0},releaseLock:{enumerable:!0},write:{enumerable:!0},closed:{enumerable:!0},desiredSize:{enumerable:!0},ready:{enumerable:!0}}),"symbol"==typeof t.toStringTag&&Object.defineProperty(ct.prototype,t.toStringTag,{value:"WritableStreamDefaultWriter",configurable:!0})
var gt={},mt=function(){function e(){throw new TypeError("Illegal constructor")}return e.prototype.error=function(e){if(void 0===e&&(e=void 0),!n(t=this)||!Object.prototype.hasOwnProperty.call(t,"_controlledWritableStream"))throw new TypeError("WritableStreamDefaultController.prototype.error can only be used on a WritableStreamDefaultController")
var t
"writable"===this._controlledWritableStream._state&&xt(this,e)},e.prototype[_]=function(e){var t=this._abortAlgorithm(e)
return bt(this),t},e.prototype[F]=function(){he(this)},e}()
function vt(e,t,r,a,n,i,o,s){t._controlledWritableStream=e,e._writableStreamController=t,t._queue=void 0,t._queueTotalSize=void 0,he(t),t._started=!1,t._strategySizeAlgorithm=s,t._strategyHWM=o,t._writeAlgorithm=a,t._closeAlgorithm=n,t._abortAlgorithm=i
var c=St(t)
st(e,c),p(h(r()),(function(){t._started=!0,wt(t)}),(function(r){t._started=!0,rt(e,r)}))}function bt(e){e._writeAlgorithm=void 0,e._closeAlgorithm=void 0,e._abortAlgorithm=void 0,e._strategySizeAlgorithm=void 0}function yt(e){return e._strategyHWM-e._queueTotalSize}function wt(e){var t=e._controlledWritableStream
if(e._started&&void 0===t._inFlightWriteRequest)if("erroring"!==t._state){if(0!==e._queue.length){var r=e._queue.peek().value
r===gt?function(e){var t=e._controlledWritableStream;(function(e){e._inFlightCloseRequest=e._closeRequest,e._closeRequest=void 0})(t),le(e)
var r=e._closeAlgorithm()
bt(e),p(r,(function(){(function(e){e._inFlightCloseRequest._resolve(void 0),e._inFlightCloseRequest=void 0,"erroring"===e._state&&(e._storedError=void 0,void 0!==e._pendingAbortRequest&&(e._pendingAbortRequest._resolve(),e._pendingAbortRequest=void 0)),e._state="closed"
var t=e._writer
void 0!==t&&Et(t)})(t)}),(function(e){(function(e,t){e._inFlightCloseRequest._reject(t),e._inFlightCloseRequest=void 0,void 0!==e._pendingAbortRequest&&(e._pendingAbortRequest._reject(t),e._pendingAbortRequest=void 0),rt(e,t)})(t,e)}))}(e):function(e,t){var r=e._controlledWritableStream;(function(e){e._inFlightWriteRequest=e._writeRequests.shift()})(r),p(e._writeAlgorithm(t),(function(){(function(e){e._inFlightWriteRequest._resolve(void 0),e._inFlightWriteRequest=void 0})(r)
var t=r._state
if(le(e),!it(r)&&"writable"===t){var a=St(e)
st(r,a)}wt(e)}),(function(t){"writable"===r._state&&bt(e),function(e,t){e._inFlightWriteRequest._reject(t),e._inFlightWriteRequest=void 0,rt(e,t)}(r,t)}))}(e,r)}}else nt(t)}function kt(e,t){"writable"===e._controlledWritableStream._state&&xt(e,t)}function St(e){return yt(e)<=0}function xt(e,t){var r=e._controlledWritableStream
bt(e),at(r,t)}function Ct(e){return new TypeError("WritableStream.prototype."+e+" can only be used on a WritableStream")}function At(e){return new TypeError("WritableStreamDefaultWriter.prototype."+e+" can only be used on a WritableStreamDefaultWriter")}function Ot(e){return new TypeError("Cannot "+e+" a stream using a released writer")}function Tt(e){e._closedPromise=u((function(t,r){e._closedPromise_resolve=t,e._closedPromise_reject=r,e._closedPromiseState="pending"}))}function It(e,t){Tt(e),Pt(e,t)}function Pt(e,t){void 0!==e._closedPromise_reject&&(b(e._closedPromise),e._closedPromise_reject(t),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0,e._closedPromiseState="rejected")}function Et(e){void 0!==e._closedPromise_resolve&&(e._closedPromise_resolve(void 0),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0,e._closedPromiseState="resolved")}function _t(e){e._readyPromise=u((function(t,r){e._readyPromise_resolve=t,e._readyPromise_reject=r})),e._readyPromiseState="pending"}function Ft(e,t){_t(e),Bt(e,t)}function Rt(e){_t(e),Mt(e)}function Bt(e,t){void 0!==e._readyPromise_reject&&(b(e._readyPromise),e._readyPromise_reject(t),e._readyPromise_resolve=void 0,e._readyPromise_reject=void 0,e._readyPromiseState="rejected")}function Mt(e){void 0!==e._readyPromise_resolve&&(e._readyPromise_resolve(void 0),e._readyPromise_resolve=void 0,e._readyPromise_reject=void 0,e._readyPromiseState="fulfilled")}Object.defineProperties(mt.prototype,{error:{enumerable:!0}}),"symbol"==typeof t.toStringTag&&Object.defineProperty(mt.prototype,t.toStringTag,{value:"WritableStreamDefaultController",configurable:!0})
var Dt,Lt="undefined"!=typeof DOMException?DOMException:void 0,Nt=function(e){if("function"!=typeof e&&"object"!=typeof e)return!1
try{return new e,!0}catch(Z){return!1}}(Lt)?Lt:((Dt=function(e,t){this.message=e||"",this.name=t||"Error",Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}).prototype=Object.create(Error.prototype),Object.defineProperty(Dt.prototype,"constructor",{value:Dt,writable:!0,configurable:!0}),Dt)
function Ut(e,t,a,n,i,o){var s=X(e),c=Je(t)
e._disturbed=!0
var l=!1,v=h(void 0)
return u((function(y,w){var k,S,x,C
if(void 0!==o){if(k=function(){var r=new Nt("Aborted","AbortError"),a=[]
n||a.push((function(){return"writable"===t._state?et(t,r):h(void 0)})),i||a.push((function(){return"readable"===e._state?lr(e,r):h(void 0)})),P((function(){return Promise.all(a.map((function(e){return e()})))}),!0,r)},o.aborted)return void k()
o.addEventListener("abort",k)}if(I(e,s._closedPromise,(function(e){n?E(!0,e):P((function(){return et(t,e)}),!0,e)})),I(t,c._closedPromise,(function(t){i?E(!0,t):P((function(){return lr(e,t)}),!0,t)})),S=e,x=s._closedPromise,C=function(){a?E():P((function(){return function(e){var t=e._ownerWritableStream,r=t._state
return it(t)||"closed"===r?h(void 0):"errored"===r?f(t._storedError):ut(e)}(c)}))},"closed"===S._state?C():g(x,C),it(t)||"closed"===t._state){var O=new TypeError("the destination writable stream closed before all data could be piped to it")
i?E(!0,O):P((function(){return lr(e,O)}),!0,O)}function T(){var e=v
return d(v,(function(){return e!==v?T():void 0}))}function I(e,t,r){"errored"===e._state?r(e._storedError):m(t,r)}function P(e,r,a){function n(){p(e(),(function(){return _(r,a)}),(function(e){return _(!0,e)}))}l||(l=!0,"writable"!==t._state||it(t)?n():g(T(),n))}function E(e,r){l||(l=!0,"writable"!==t._state||it(t)?_(e,r):g(T(),(function(){return _(e,r)})))}function _(e,t){dt(c),A(s),void 0!==o&&o.removeEventListener("abort",k),e?w(t):y(void 0)}b(u((function(e,t){(function a(n){n?e():d(l?h(!0):d(c._readyPromise,(function(){return u((function(e,t){te(s,{_chunkSteps:function(t){v=d(pt(c,t),void 0,r),e(!1)},_closeSteps:function(){return e(!0)},_errorSteps:t})}))})),a,t)})(!1)})))}))}var jt=function(){function e(){throw new TypeError("Illegal constructor")}return Object.defineProperty(e.prototype,"desiredSize",{get:function(){if(!qt(this))throw Zt("desiredSize")
return Kt(this)},enumerable:!1,configurable:!0}),e.prototype.close=function(){if(!qt(this))throw Zt("close")
if(!Yt(this))throw new TypeError("The stream is not in a state that permits close")
Wt(this)},e.prototype.enqueue=function(e){if(void 0===e&&(e=void 0),!qt(this))throw Zt("enqueue")
if(!Yt(this))throw new TypeError("The stream is not in a state that permits enqueue")
return Xt(this,e)},e.prototype.error=function(e){if(void 0===e&&(e=void 0),!qt(this))throw Zt("error")
Vt(this,e)},e.prototype[R]=function(e){he(this)
var t=this._cancelAlgorithm(e)
return Ht(this),t},e.prototype[B]=function(e){var t=this._controlledReadableStream
if(this._queue.length>0){var r=le(this)
this._closeRequested&&0===this._queue.length?(Ht(this),ur(t)):zt(this),e._chunkSteps(r)}else V(t,e),zt(this)},e}()
function qt(e){return!!n(e)&&!!Object.prototype.hasOwnProperty.call(e,"_controlledReadableStream")}function zt(e){Gt(e)&&(e._pulling?e._pullAgain=!0:(e._pulling=!0,p(e._pullAlgorithm(),(function(){e._pulling=!1,e._pullAgain&&(e._pullAgain=!1,zt(e))}),(function(t){Vt(e,t)}))))}function Gt(e){var t=e._controlledReadableStream
return!!Yt(e)&&!!e._started&&(!!(cr(t)&&Y(t)>0)||Kt(e)>0)}function Ht(e){e._pullAlgorithm=void 0,e._cancelAlgorithm=void 0,e._strategySizeAlgorithm=void 0}function Wt(e){if(Yt(e)){var t=e._controlledReadableStream
e._closeRequested=!0,0===e._queue.length&&(Ht(e),ur(t))}}function Xt(e,t){if(Yt(e)){var r=e._controlledReadableStream
if(cr(r)&&Y(r)>0)K(r,t,!1)
else{var a=void 0
try{a=e._strategySizeAlgorithm(t)}catch(n){throw Vt(e,n),n}try{ue(e,t,a)}catch(i){throw Vt(e,i),i}}zt(e)}}function Vt(e,t){var r=e._controlledReadableStream
"readable"===r._state&&(he(e),Ht(e),hr(r,t))}function Kt(e){var t=e._controlledReadableStream._state
return"errored"===t?null:"closed"===t?0:e._strategyHWM-e._queueTotalSize}function Yt(e){var t=e._controlledReadableStream._state
return!e._closeRequested&&"readable"===t}function Jt(e,t,r,a,n,i,o){t._controlledReadableStream=e,t._queue=void 0,t._queueTotalSize=void 0,he(t),t._started=!1,t._closeRequested=!1,t._pullAgain=!1,t._pulling=!1,t._strategySizeAlgorithm=o,t._strategyHWM=i,t._pullAlgorithm=a,t._cancelAlgorithm=n,e._readableStreamController=t,p(h(r()),(function(){t._started=!0,zt(t)}),(function(e){Vt(t,e)}))}function Zt(e){return new TypeError("ReadableStreamDefaultController.prototype."+e+" can only be used on a ReadableStreamDefaultController")}function Qt(e,t,r){return N(e,r),function(r){return k(e,t,[r])}}function $t(e,t,r){return N(e,r),function(r){return k(e,t,[r])}}function er(e,t,r){return N(e,r),function(r){return w(e,t,[r])}}function tr(e,t){if("bytes"!=(e=""+e))throw new TypeError(t+" '"+e+"' is not a valid enumeration value for ReadableStreamType")
return e}function rr(e,t){if("byob"!=(e=""+e))throw new TypeError(t+" '"+e+"' is not a valid enumeration value for ReadableStreamReaderMode")
return e}function ar(e,t){L(e,t)
var r=null==e?void 0:e.preventAbort,a=null==e?void 0:e.preventCancel,n=null==e?void 0:e.preventClose,i=null==e?void 0:e.signal
return void 0!==i&&function(e,t){if(!function(e){if("object"!=typeof e||null===e)return!1
try{return"boolean"==typeof e.aborted}catch(Z){return!1}}(e))throw new TypeError(t+" is not an AbortSignal.")}(i,t+" has member 'signal' that"),{preventAbort:Boolean(r),preventCancel:Boolean(a),preventClose:Boolean(n),signal:i}}Object.defineProperties(jt.prototype,{close:{enumerable:!0},enqueue:{enumerable:!0},error:{enumerable:!0},desiredSize:{enumerable:!0}}),"symbol"==typeof t.toStringTag&&Object.defineProperty(jt.prototype,t.toStringTag,{value:"ReadableStreamDefaultController",configurable:!0})
var nr=function(){function e(e,t){void 0===e&&(e={}),void 0===t&&(t={}),void 0===e?e=null:U(e,"First parameter")
var r=ze(t,"Second parameter"),a=function(e,t){L(e,t)
var r=e,a=null==r?void 0:r.autoAllocateChunkSize,n=null==r?void 0:r.cancel,i=null==r?void 0:r.pull,o=null==r?void 0:r.start,s=null==r?void 0:r.type
return{autoAllocateChunkSize:void 0===a?void 0:H(a,t+" has member 'autoAllocateChunkSize' that"),cancel:void 0===n?void 0:Qt(n,r,t+" has member 'cancel' that"),pull:void 0===i?void 0:$t(i,r,t+" has member 'pull' that"),start:void 0===o?void 0:er(o,r,t+" has member 'start' that"),type:void 0===s?void 0:tr(s,t+" has member 'type' that")}}(e,"First parameter")
if(or(this),"bytes"===a.type){if(void 0!==r.size)throw new RangeError("The strategy for a byte stream cannot have a size function")
_e(this,a,je(r,0))}else{var n=qe(r);(function(e,t,r,a){var n=Object.create(jt.prototype),i=function(){},o=function(){return h(void 0)},s=function(){return h(void 0)}
void 0!==t.start&&(i=function(){return t.start(n)}),void 0!==t.pull&&(o=function(){return t.pull(n)}),void 0!==t.cancel&&(s=function(e){return t.cancel(e)}),Jt(e,n,i,o,s,r,a)})(this,a,je(r,1),n)}}return Object.defineProperty(e.prototype,"locked",{get:function(){if(!sr(this))throw fr("locked")
return cr(this)},enumerable:!1,configurable:!0}),e.prototype.cancel=function(e){return void 0===e&&(e=void 0),sr(this)?cr(this)?f(new TypeError("Cannot cancel a stream that already has a reader")):lr(this,e):f(fr("cancel"))},e.prototype.getReader=function(e){if(void 0===e&&(e=void 0),!sr(this))throw fr("getReader")
return void 0===function(e,t){L(e,t)
var r=null==e?void 0:e.mode
return{mode:void 0===r?void 0:rr(r,t+" has member 'mode' that")}}(e,"First parameter").mode?X(this):new Le(this)},e.prototype.pipeThrough=function(e,t){if(void 0===t&&(t={}),!sr(this))throw fr("pipeThrough")
j(e,1,"pipeThrough")
var r=function(e,t){L(e,t)
var r=null==e?void 0:e.readable
q(r,"readable","ReadableWritablePair"),W(r,t+" has member 'readable' that")
var a=null==e?void 0:e.writable
return q(a,"writable","ReadableWritablePair"),Ke(a,t+" has member 'writable' that"),{readable:r,writable:a}}(e,"First parameter"),a=ar(t,"Second parameter")
if(cr(this))throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream")
if($e(r.writable))throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream")
return b(Ut(this,r.writable,a.preventClose,a.preventAbort,a.preventCancel,a.signal)),r.readable},e.prototype.pipeTo=function(e,t){if(void 0===t&&(t={}),!sr(this))return f(fr("pipeTo"))
if(void 0===e)return f("Parameter 1 is required in 'pipeTo'.")
if(!Qe(e))return f(new TypeError("ReadableStream.prototype.pipeTo's first argument must be a WritableStream"))
var r
try{r=ar(t,"Second parameter")}catch(a){return f(a)}return cr(this)?f(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream")):$e(e)?f(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream")):Ut(this,e,r.preventClose,r.preventAbort,r.preventCancel,r.signal)},e.prototype.tee=function(){if(!sr(this))throw fr("tee")
var e=function(e,t){var r,a,n,i,o,s=X(e),c=!1,l=!1,f=!1,d=u((function(e){o=e}))
function p(){return c||(c=!0,te(s,{_chunkSteps:function(e){y((function(){c=!1
var t=e,r=e
l||Xt(n._readableStreamController,t),f||Xt(i._readableStreamController,r),o(void 0)}))},_closeSteps:function(){c=!1,l||Wt(n._readableStreamController),f||Wt(i._readableStreamController)},_errorSteps:function(){c=!1}})),h(void 0)}function g(){}return n=ir(g,p,(function(t){if(l=!0,r=t,f){var n=fe([r,a]),i=lr(e,n)
o(i)}return d})),i=ir(g,p,(function(t){if(f=!0,a=t,l){var n=fe([r,a]),i=lr(e,n)
o(i)}return d})),m(s._closedPromise,(function(e){Vt(n._readableStreamController,e),Vt(i._readableStreamController,e),o(void 0)})),[n,i]}(this)
return fe(e)},e.prototype.values=function(e){if(void 0===e&&(e=void 0),!sr(this))throw fr("values")
var t,r,a,n,i,o=function(e,t){L(e,t)
var r=null==e?void 0:e.preventCancel
return{preventCancel:Boolean(r)}}(e,"First parameter")
return t=this,r=o.preventCancel,a=X(t),n=new ae(a,r),(i=Object.create(ne))._asyncIteratorImpl=n,i},e}()
function ir(e,t,r,a,n){void 0===a&&(a=1),void 0===n&&(n=function(){return 1})
var i=Object.create(nr.prototype)
return or(i),Jt(i,Object.create(jt.prototype),e,t,r,a,n),i}function or(e){e._state="readable",e._reader=void 0,e._storedError=void 0,e._disturbed=!1}function sr(e){return!!n(e)&&!!Object.prototype.hasOwnProperty.call(e,"_readableStreamController")}function cr(e){return void 0!==e._reader}function lr(e,t){return e._disturbed=!0,"closed"===e._state?h(void 0):"errored"===e._state?f(e._storedError):(ur(e),v(e._readableStreamController[R](t),r))}function ur(e){e._state="closed"
var t=e._reader
void 0!==t&&(ee(t)&&(t._readRequests.forEach((function(e){e._closeSteps()})),t._readRequests=new S),E(t))}function hr(e,t){e._state="errored",e._storedError=t
var r=e._reader
void 0!==r&&(ee(r)?(r._readRequests.forEach((function(e){e._errorSteps(t)})),r._readRequests=new S):(r._readIntoRequests.forEach((function(e){e._errorSteps(t)})),r._readIntoRequests=new S),P(r,t))}function fr(e){return new TypeError("ReadableStream.prototype."+e+" can only be used on a ReadableStream")}function dr(e,t){L(e,t)
var r=null==e?void 0:e.highWaterMark
return q(r,"highWaterMark","QueuingStrategyInit"),{highWaterMark:z(r)}}Object.defineProperties(nr.prototype,{cancel:{enumerable:!0},getReader:{enumerable:!0},pipeThrough:{enumerable:!0},pipeTo:{enumerable:!0},tee:{enumerable:!0},values:{enumerable:!0},locked:{enumerable:!0}}),"symbol"==typeof t.toStringTag&&Object.defineProperty(nr.prototype,t.toStringTag,{value:"ReadableStream",configurable:!0}),"symbol"==typeof t.asyncIterator&&Object.defineProperty(nr.prototype,t.asyncIterator,{value:nr.prototype.values,writable:!0,configurable:!0})
var pr=function(e){return e.byteLength},gr=function(){function e(e){j(e,1,"ByteLengthQueuingStrategy"),e=dr(e,"First parameter"),this._byteLengthQueuingStrategyHighWaterMark=e.highWaterMark}return Object.defineProperty(e.prototype,"highWaterMark",{get:function(){if(!vr(this))throw mr("highWaterMark")
return this._byteLengthQueuingStrategyHighWaterMark},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"size",{get:function(){if(!vr(this))throw mr("size")
return pr},enumerable:!1,configurable:!0}),e}()
function mr(e){return new TypeError("ByteLengthQueuingStrategy.prototype."+e+" can only be used on a ByteLengthQueuingStrategy")}function vr(e){return!!n(e)&&!!Object.prototype.hasOwnProperty.call(e,"_byteLengthQueuingStrategyHighWaterMark")}Object.defineProperties(gr.prototype,{highWaterMark:{enumerable:!0},size:{enumerable:!0}}),"symbol"==typeof t.toStringTag&&Object.defineProperty(gr.prototype,t.toStringTag,{value:"ByteLengthQueuingStrategy",configurable:!0})
var br=function(){return 1},yr=function(){function e(e){j(e,1,"CountQueuingStrategy"),e=dr(e,"First parameter"),this._countQueuingStrategyHighWaterMark=e.highWaterMark}return Object.defineProperty(e.prototype,"highWaterMark",{get:function(){if(!kr(this))throw wr("highWaterMark")
return this._countQueuingStrategyHighWaterMark},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"size",{get:function(){if(!kr(this))throw wr("size")
return br},enumerable:!1,configurable:!0}),e}()
function wr(e){return new TypeError("CountQueuingStrategy.prototype."+e+" can only be used on a CountQueuingStrategy")}function kr(e){return!!n(e)&&!!Object.prototype.hasOwnProperty.call(e,"_countQueuingStrategyHighWaterMark")}function Sr(e,t,r){return N(e,r),function(r){return k(e,t,[r])}}function xr(e,t,r){return N(e,r),function(r){return w(e,t,[r])}}function Cr(e,t,r){return N(e,r),function(r,a){return k(e,t,[r,a])}}Object.defineProperties(yr.prototype,{highWaterMark:{enumerable:!0},size:{enumerable:!0}}),"symbol"==typeof t.toStringTag&&Object.defineProperty(yr.prototype,t.toStringTag,{value:"CountQueuingStrategy",configurable:!0})
var Ar=function(){function e(e,t,r){void 0===e&&(e={}),void 0===t&&(t={}),void 0===r&&(r={}),void 0===e&&(e=null)
var a=ze(t,"Second parameter"),n=ze(r,"Third parameter"),i=function(e,t){L(e,t)
var r=null==e?void 0:e.flush,a=null==e?void 0:e.readableType,n=null==e?void 0:e.start,i=null==e?void 0:e.transform,o=null==e?void 0:e.writableType
return{flush:void 0===r?void 0:Sr(r,e,t+" has member 'flush' that"),readableType:a,start:void 0===n?void 0:xr(n,e,t+" has member 'start' that"),transform:void 0===i?void 0:Cr(i,e,t+" has member 'transform' that"),writableType:o}}(e,"First parameter")
if(void 0!==i.readableType)throw new RangeError("Invalid readableType specified")
if(void 0!==i.writableType)throw new RangeError("Invalid writableType specified")
var o,s=je(n,0),c=qe(n),l=je(a,1),d=qe(a);(function(e,t,r,a,n,i){function o(){return t}function s(t){return function(e,t){var r=e._transformStreamController
return e._backpressure?v(e._backpressureChangePromise,(function(){var a=e._writable
if("erroring"===a._state)throw a._storedError
return Br(r,t)})):Br(r,t)}(e,t)}function c(t){return function(e,t){return Tr(e,t),h(void 0)}(e,t)}function l(){return function(e){var t=e._readable,r=e._transformStreamController,a=r._flushAlgorithm()
return Fr(r),v(a,(function(){if("errored"===t._state)throw t._storedError
Wt(t._readableStreamController)}),(function(r){throw Tr(e,r),t._storedError}))}(e)}function u(){return function(e){return Pr(e,!1),e._backpressureChangePromise}(e)}function f(t){return Ir(e,t),h(void 0)}e._writable=function(e,t,r,a,n,i){void 0===n&&(n=1),void 0===i&&(i=function(){return 1})
var o=Object.create(Ye.prototype)
return Ze(o),vt(o,Object.create(mt.prototype),e,t,r,a,n,i),o}(o,s,l,c,r,a),e._readable=ir(o,u,f,n,i),e._backpressure=void 0,e._backpressureChangePromise=void 0,e._backpressureChangePromise_resolve=void 0,Pr(e,!0),e._transformStreamController=void 0})(this,u((function(e){o=e})),l,d,s,c),function(e,t){var r=Object.create(Er.prototype),a=function(e){try{return Rr(r,e),h(void 0)}catch(t){return f(t)}},n=function(){return h(void 0)}
void 0!==t.transform&&(a=function(e){return t.transform(e,r)}),void 0!==t.flush&&(n=function(){return t.flush(r)}),function(e,t,r,a){t._controlledTransformStream=e,e._transformStreamController=t,t._transformAlgorithm=r,t._flushAlgorithm=a}(e,r,a,n)}(this,i),void 0!==i.start?o(i.start(this._transformStreamController)):o(void 0)}return Object.defineProperty(e.prototype,"readable",{get:function(){if(!Or(this))throw Dr("readable")
return this._readable},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"writable",{get:function(){if(!Or(this))throw Dr("writable")
return this._writable},enumerable:!1,configurable:!0}),e}()
function Or(e){return!!n(e)&&!!Object.prototype.hasOwnProperty.call(e,"_transformStreamController")}function Tr(e,t){Vt(e._readable._readableStreamController,t),Ir(e,t)}function Ir(e,t){Fr(e._transformStreamController),kt(e._writable._writableStreamController,t),e._backpressure&&Pr(e,!1)}function Pr(e,t){void 0!==e._backpressureChangePromise&&e._backpressureChangePromise_resolve(),e._backpressureChangePromise=u((function(t){e._backpressureChangePromise_resolve=t})),e._backpressure=t}Object.defineProperties(Ar.prototype,{readable:{enumerable:!0},writable:{enumerable:!0}}),"symbol"==typeof t.toStringTag&&Object.defineProperty(Ar.prototype,t.toStringTag,{value:"TransformStream",configurable:!0})
var Er=function(){function e(){throw new TypeError("Illegal constructor")}return Object.defineProperty(e.prototype,"desiredSize",{get:function(){if(!_r(this))throw Mr("desiredSize")
return Kt(this._controlledTransformStream._readable._readableStreamController)},enumerable:!1,configurable:!0}),e.prototype.enqueue=function(e){if(void 0===e&&(e=void 0),!_r(this))throw Mr("enqueue")
Rr(this,e)},e.prototype.error=function(e){if(void 0===e&&(e=void 0),!_r(this))throw Mr("error")
var t
t=e,Tr(this._controlledTransformStream,t)},e.prototype.terminate=function(){if(!_r(this))throw Mr("terminate");(function(e){var t=e._controlledTransformStream
Wt(t._readable._readableStreamController)
var r=new TypeError("TransformStream terminated")
Ir(t,r)})(this)},e}()
function _r(e){return!!n(e)&&!!Object.prototype.hasOwnProperty.call(e,"_controlledTransformStream")}function Fr(e){e._transformAlgorithm=void 0,e._flushAlgorithm=void 0}function Rr(e,t){var r=e._controlledTransformStream,a=r._readable._readableStreamController
if(!Yt(a))throw new TypeError("Readable side is not in a state that permits enqueue")
try{Xt(a,t)}catch(n){throw Ir(r,n),r._readable._storedError}(function(e){return!Gt(e)})(a)!==r._backpressure&&Pr(r,!0)}function Br(e,t){return v(e._transformAlgorithm(t),void 0,(function(t){throw Tr(e._controlledTransformStream,t),t}))}function Mr(e){return new TypeError("TransformStreamDefaultController.prototype."+e+" can only be used on a TransformStreamDefaultController")}function Dr(e){return new TypeError("TransformStream.prototype."+e+" can only be used on a TransformStream")}Object.defineProperties(Er.prototype,{enqueue:{enumerable:!0},error:{enumerable:!0},terminate:{enumerable:!0},desiredSize:{enumerable:!0}}),"symbol"==typeof t.toStringTag&&Object.defineProperty(Er.prototype,t.toStringTag,{value:"TransformStreamDefaultController",configurable:!0}),e.ByteLengthQueuingStrategy=gr,e.CountQueuingStrategy=yr,e.ReadableByteStreamController=pe,e.ReadableStream=nr,e.ReadableStreamBYOBReader=Le,e.ReadableStreamBYOBRequest=de,e.ReadableStreamDefaultController=jt,e.ReadableStreamDefaultReader=$,e.TransformStream=Ar,e.TransformStreamDefaultController=Er,e.WritableStream=Ye,e.WritableStreamDefaultController=mt,e.WritableStreamDefaultWriter=ct,Object.defineProperty(e,"__esModule",{value:!0})})(t)},(e,t,r)=>{r(123)
var a=r(127)
e.exports=a("String","padStart")},(e,t,r)=>{"use strict"
var a=r(9),n=r(124).start
a({target:"String",proto:!0,forced:r(126)},{padStart:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},(e,t,r)=>{var a=r(46),n=r(125),i=r(19),o=Math.ceil,s=function(e){return function(t,r,s){var c,l,u=String(i(t)),h=u.length,f=void 0===s?" ":String(s),d=a(r)
return d<=h||""==f?u:(c=d-h,(l=n.call(f,o(c/f.length))).length>c&&(l=l.slice(0,c)),e?u+l:l+u)}}
e.exports={start:s(!1),end:s(!0)}},(e,t,r)=>{"use strict"
var a=r(47),n=r(19)
e.exports="".repeat||function(e){var t=String(n(this)),r="",i=a(e)
if(i<0||i==1/0)throw RangeError("Wrong number of repetitions")
for(;i>0;(i>>>=1)&&(t+=t))1&i&&(r+=t)
return r}},(e,t,r)=>{var a=r(95)
e.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(a)},(e,t,r)=>{var a=r(10),n=r(75),i=Function.call
e.exports=function(e,t,r){return n(i,a[e].prototype[t],r)}},(e,t,r)=>{r(129)
var a=r(127)
e.exports=a("String","padEnd")},(e,t,r)=>{"use strict"
var a=r(9),n=r(124).end
a({target:"String",proto:!0,forced:r(126)},{padEnd:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},(e,t,r)=>{r(131)
var a=r(42)
e.exports=a.Object.values},(e,t,r)=>{var a=r(9),n=r(132).values
a({target:"Object",stat:!0},{values:function(e){return n(e)}})},(e,t,r)=>{var a=r(12),n=r(60),i=r(16),o=r(14).f,s=function(e){return function(t){for(var r,s=i(t),c=n(s),l=c.length,u=0,h=[];l>u;)r=c[u++],a&&!o.call(s,r)||h.push(e?[r,s[r]]:s[r])
return h}}
e.exports={entries:s(!0),values:s(!1)}},(e,t,r)=>{r(134)
var a=r(42)
e.exports=a.Object.entries},(e,t,r)=>{var a=r(9),n=r(132).entries
a({target:"Object",stat:!0},{entries:function(e){return n(e)}})},(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.clearPrimitiveCaches=function(){v._clearCache(),m._clearCache(),y._clearCache()},t.isCmd=function(e,t){return e instanceof v&&(void 0===t||e.cmd===t)},t.isDict=function(e,t){return e instanceof b&&(void 0===t||S(e.get("Type"),t))},t.isEOF=function(e){return e===g},t.isName=S,t.isRef=function(e){return e instanceof y},t.isRefsEqual=function(e,t){return e.num===t.num&&e.gen===t.gen},t.isStream=function(e){return"object"===o(e)&&null!==e&&void 0!==e.getBytes},t.RefSetCache=t.RefSet=t.Ref=t.Name=t.EOF=t.Dict=t.Cmd=void 0
var a,n=(a=r(2))&&a.__esModule?a:{default:a},i=r(4)
function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var r=0;r<t.length;r++){var a=t[r]
a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function l(e,t,r){return t&&c(e.prototype,t),r&&c(e,r),e}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return
var r=[],a=!0,n=!1,i=void 0
try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);a=!0);}catch(c){n=!0,i=c}finally{try{a||null==s.return||s.return()}finally{if(n)throw i}}return r}(e,t)||f(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){var r
if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=f(e))||t&&e&&"number"==typeof e.length){r&&(e=r)
var a=0,n=function(){}
return{s:n,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1
return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next()
return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==r.return||r.return()}finally{if(s)throw i}}}}function f(e,t){if(e){if("string"==typeof e)return d(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r]
return a}function p(e,t,r,a,n,i,o){try{var s=e[i](o),c=s.value}catch(l){return void r(l)}s.done?t(c):Promise.resolve(c).then(a,n)}var g={}
t.EOF=g
var m=function(){var e=Object.create(null)
function t(e){this.name=e}return t.prototype={},t.get=function(r){var a=e[r]
return a||(e[r]=new t(r))},t._clearCache=function(){e=Object.create(null)},t}()
t.Name=m
var v=function(){var e=Object.create(null)
function t(e){this.cmd=e}return t.prototype={},t.get=function(r){var a=e[r]
return a||(e[r]=new t(r))},t._clearCache=function(){e=Object.create(null)},t}()
t.Cmd=v
var b=function(){var e,t=function(){return t}
function r(e){this._map=Object.create(null),this.xref=e,this.objId=null,this.suppressEncryption=!1,this.__nonSerializable__=t}return r.prototype={assignXref:function(e){this.xref=e},get size(){return Object.keys(this._map).length},get:function(e,t,r){var a=this._map[e]
return void 0===a&&void 0!==t&&void 0===(a=this._map[t])&&void 0!==r&&(a=this._map[r]),a instanceof y&&this.xref?this.xref.fetch(a,this.suppressEncryption):a},getAsync:function(e,t,r){var a,i=this
return(a=n.default.mark((function a(){var o
return n.default.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(void 0===(o=i._map[e])&&void 0!==t&&void 0===(o=i._map[t])&&void 0!==r&&(o=i._map[r]),!(o instanceof y&&i.xref)){a.next=4
break}return a.abrupt("return",i.xref.fetchAsync(o,i.suppressEncryption))
case 4:return a.abrupt("return",o)
case 5:case"end":return a.stop()}}),a)})),function(){var e=this,t=arguments
return new Promise((function(r,n){var i=a.apply(e,t)
function o(e){p(i,r,n,o,s,"next",e)}function s(e){p(i,r,n,o,s,"throw",e)}o(void 0)}))})()},getArray:function(e,t,r){var a=this.get(e,t,r)
if(!Array.isArray(a)||!this.xref)return a
for(var n=0,i=(a=a.slice()).length;n<i;n++)a[n]instanceof y&&(a[n]=this.xref.fetch(a[n],this.suppressEncryption))
return a},getRaw:function(e){return this._map[e]},getKeys:function(){return Object.keys(this._map)},getRawValues:function(){return Object.values(this._map)},set:function(e,t){this._map[e]=t},has:function(e){return void 0!==this._map[e]},forEach:function(e){for(var t in this._map)e(t,this.get(t))}},r.empty=((e=new r(null)).set=function(e,t){(0,i.unreachable)("Should not call `set` on the empty dictionary.")},e),r.merge=function(e){var t=e.xref,a=e.dictArray,n=e.mergeSubDicts,i=void 0!==n&&n,o=new r(t)
if(!i){var s,c=h(a)
try{for(c.s();!(s=c.n()).done;){var l=s.value
if(l instanceof r)for(var f=0,d=Object.entries(l._map);f<d.length;f++){var p=u(d[f],2),g=p[0],m=p[1]
void 0===o._map[g]&&(o._map[g]=m)}}}catch(q){c.e(q)}finally{c.f()}return o.size>0?o:r.empty}var v,b=new Map,y=h(a)
try{for(y.s();!(v=y.n()).done;){var w=v.value
if(w instanceof r)for(var k=0,S=Object.entries(w._map);k<S.length;k++){var x=u(S[k],2),C=x[0],A=x[1],O=b.get(C)
void 0===O&&(O=[],b.set(C,O)),O.push(A)}}}catch(q){y.e(q)}finally{y.f()}var T,I=h(b)
try{for(I.s();!(T=I.n()).done;){var P=u(T.value,2),E=P[0],_=P[1]
if(1!==_.length&&_[0]instanceof r){var F,R=new r(t),B=h(_)
try{for(B.s();!(F=B.n()).done;){var M=F.value
if(M instanceof r)for(var D=0,L=Object.entries(M._map);D<L.length;D++){var N=u(L[D],2),U=N[0],j=N[1]
void 0===R._map[U]&&(R._map[U]=j)}}}catch(q){B.e(q)}finally{B.f()}R.size>0&&(o._map[E]=R)}else o._map[E]=_[0]}}catch(q){I.e(q)}finally{I.f()}return b.clear(),o.size>0?o:r.empty},r}()
t.Dict=b
var y=function(){var e=Object.create(null)
function t(e,t){this.num=e,this.gen=t}return t.prototype={toString:function(){return 0===this.gen?"".concat(this.num,"R"):"".concat(this.num,"R").concat(this.gen)}},t.get=function(r,a){var n=0===a?"".concat(r,"R"):"".concat(r,"R").concat(a),i=e[n]
return i||(e[n]=new t(r,a))},t._clearCache=function(){e=Object.create(null)},t}()
t.Ref=y
var w=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null
s(this,e),this._set=new Set(t&&t._set)}return l(e,[{key:"has",value:function(e){return this._set.has(e.toString())}},{key:"put",value:function(e){this._set.add(e.toString())}},{key:"remove",value:function(e){this._set.delete(e.toString())}},{key:"forEach",value:function(e){var t,r=h(this._set.values())
try{for(r.s();!(t=r.n()).done;){e(t.value)}}catch(a){r.e(a)}finally{r.f()}}},{key:"clear",value:function(){this._set.clear()}}]),e}()
t.RefSet=w
var k=function(){function e(){s(this,e),this._map=new Map}return l(e,[{key:"get",value:function(e){return this._map.get(e.toString())}},{key:"has",value:function(e){return this._map.has(e.toString())}},{key:"put",value:function(e,t){this._map.set(e.toString(),t)}},{key:"putAlias",value:function(e,t){this._map.set(e.toString(),this.get(t))}},{key:"forEach",value:function(e){var t,r=h(this._map.values())
try{for(r.s();!(t=r.n()).done;){e(t.value)}}catch(a){r.e(a)}finally{r.f()}}},{key:"clear",value:function(){this._map.clear()}},{key:"size",get:function(){return this._map.size}}]),e}()
function S(e,t){return e instanceof m&&(void 0===t||e.name===t)}t.RefSetCache=k},(e,t,r)=>{"use strict"
function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.NetworkPdfManager=t.LocalPdfManager=void 0
var n,i=(n=r(2))&&n.__esModule?n:{default:n},o=r(4),s=r(137),c=r(138),l=r(139),u=r(142)
function h(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,a=m(e)
if(t){var n=m(this).constructor
r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments)
return p(this,r)}}function p(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?g(e):t}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,r,a,n,i,o){try{var s=e[i](o),c=s.value}catch(l){return void r(l)}s.done?t(c):Promise.resolve(c).then(a,n)}function b(e){return function(){var t=this,r=arguments
return new Promise((function(a,n){var i=e.apply(t,r)
function o(e){v(i,a,n,o,s,"next",e)}function s(e){v(i,a,n,o,s,"throw",e)}o(void 0)}))}}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){for(var r=0;r<t.length;r++){var a=t[r]
a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function k(e,t,r){return t&&w(e.prototype,t),r&&w(e,r),e}var S=function(){function e(){y(this,e),this.constructor===e&&(0,o.unreachable)("Cannot initialize BasePdfManager.")}var t
return k(e,[{key:"onLoadedStream",value:function(){(0,o.unreachable)("Abstract method `onLoadedStream` called")}},{key:"ensureDoc",value:function(e,t){return this.ensure(this.pdfDocument,e,t)}},{key:"ensureXRef",value:function(e,t){return this.ensure(this.pdfDocument.xref,e,t)}},{key:"ensureCatalog",value:function(e,t){return this.ensure(this.pdfDocument.catalog,e,t)}},{key:"getPage",value:function(e){return this.pdfDocument.getPage(e)}},{key:"fontFallback",value:function(e,t){return this.pdfDocument.fontFallback(e,t)}},{key:"cleanup",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
return this.pdfDocument.cleanup(e)}},{key:"ensure",value:(t=b(i.default.mark((function e(t,r,a){return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,o.unreachable)("Abstract method `ensure` called")
case 1:case"end":return e.stop()}}),e)}))),function(e,r,a){return t.apply(this,arguments)})},{key:"requestRange",value:function(e,t){(0,o.unreachable)("Abstract method `requestRange` called")}},{key:"requestLoadedStream",value:function(){(0,o.unreachable)("Abstract method `requestLoadedStream` called")}},{key:"sendProgressiveData",value:function(e){(0,o.unreachable)("Abstract method `sendProgressiveData` called")}},{key:"updatePassword",value:function(e){this._password=e}},{key:"terminate",value:function(e){(0,o.unreachable)("Abstract method `terminate` called")}},{key:"docId",get:function(){return this._docId}},{key:"password",get:function(){return this._password}},{key:"docBaseUrl",get:function(){var e=null
if(this._docBaseUrl){var t=(0,o.createValidAbsoluteUrl)(this._docBaseUrl)
t?e=t.href:(0,o.warn)('Invalid absolute docBaseUrl: "'.concat(this._docBaseUrl,'".'))}return(0,o.shadow)(this,"docBaseUrl",e)}}]),e}(),x=function(e){h(a,e)
var t,r=d(a)
function a(e,t,n,i,o){var s
y(this,a),(s=r.call(this))._docId=e,s._password=n,s._docBaseUrl=o,s.evaluatorOptions=i
var c=new u.Stream(t)
return s.pdfDocument=new l.PDFDocument(g(s),c),s._loadedStreamPromise=Promise.resolve(c),s}return k(a,[{key:"ensure",value:(t=b(i.default.mark((function e(t,r,a){var n
return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("function"!=typeof(n=t[r])){e.next=3
break}return e.abrupt("return",n.apply(t,a))
case 3:return e.abrupt("return",n)
case 4:case"end":return e.stop()}}),e)}))),function(e,r,a){return t.apply(this,arguments)})},{key:"requestRange",value:function(e,t){return Promise.resolve()}},{key:"requestLoadedStream",value:function(){}},{key:"onLoadedStream",value:function(){return this._loadedStreamPromise}},{key:"terminate",value:function(e){}}]),a}(S)
t.LocalPdfManager=x
var C=function(e){h(a,e)
var t,r=d(a)
function a(e,t,n,i,o){var c
return y(this,a),(c=r.call(this))._docId=e,c._password=n.password,c._docBaseUrl=o,c.msgHandler=n.msgHandler,c.evaluatorOptions=i,c.streamManager=new s.ChunkedStreamManager(t,{msgHandler:n.msgHandler,length:n.length,disableAutoFetch:n.disableAutoFetch,rangeChunkSize:n.rangeChunkSize}),c.pdfDocument=new l.PDFDocument(g(c),c.streamManager.getStream()),c}return k(a,[{key:"ensure",value:(t=b(i.default.mark((function e(t,r,a){var n
return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"function"!=typeof(n=t[r])){e.next=4
break}return e.abrupt("return",n.apply(t,a))
case 4:return e.abrupt("return",n)
case 7:if(e.prev=7,e.t0=e.catch(0),e.t0 instanceof c.MissingDataException){e.next=11
break}throw e.t0
case 11:return e.next=13,this.requestRange(e.t0.begin,e.t0.end)
case 13:return e.abrupt("return",this.ensure(t,r,a))
case 14:case"end":return e.stop()}}),e,this,[[0,7]])}))),function(e,r,a){return t.apply(this,arguments)})},{key:"requestRange",value:function(e,t){return this.streamManager.requestRange(e,t)}},{key:"requestLoadedStream",value:function(){this.streamManager.requestAllChunks()}},{key:"sendProgressiveData",value:function(e){this.streamManager.onReceiveData({chunk:e})}},{key:"onLoadedStream",value:function(){return this.streamManager.onLoadedStream()}},{key:"terminate",value:function(e){this.streamManager.abort(e)}}]),a}(S)
t.NetworkPdfManager=C},(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.ChunkedStreamManager=t.ChunkedStream=void 0
var a=r(4),n=r(138)
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
t.ChunkedStreamManager=h},(e,t,r)=>{"use strict"
function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.collectActions=function(e,t,r){var a=Object.create(null)
if(t.has("AA")){var s,c=t.get("AA"),l=o(c.getKeys())
try{for(l.s();!(s=l.n()).done;){var u=s.value,h=r[u]
if(h){var f=c.getRaw(u),d=new i.RefSet,p=[]
b(f,e,p,d),p.length>0&&(a[h]=p)}}}catch(y){l.e(y)}finally{l.f()}}if(t.has("A")){var g=t.get("A"),m=new i.RefSet,v=[]
b(g,e,v,m),v.length>0&&(a.Action=v)}return(0,n.objectSize)(a)>0?a:null},t.escapePDFName=function(e){for(var t=[],r=0,a=0,n=e.length;a<n;a++){var i=e.charCodeAt(a);(i<33||i>126||35===i||40===i||41===i||60===i||62===i||91===i||93===i||123===i||125===i||47===i||37===i)&&(r<a&&t.push(e.substring(r,a)),t.push("#".concat(i.toString(16))),r=a+1)}if(0===t.length)return e
r<e.length&&t.push(e.substring(r,e.length))
return t.join("")},t.getArrayLookupTableFactory=function(e){var t
return function(){if(e){var r=e()
e=null,t=Object.create(null)
for(var a=0,n=r.length;a<n;a+=2)t[r[a]]=r[a+1]
r=null}return t}},t.getInheritableProperty=function(e){var t,r=e.dict,a=e.key,i=e.getArray,o=void 0!==i&&i,s=e.stopWhenFound,c=void 0===s||s,l=0
for(;r;){var u=o?r.getArray(a):r.get(a)
if(void 0!==u){if(c)return u
t||(t=[]),t.push(u)}if(++l>100){(0,n.warn)('getInheritableProperty: maximum loop count exceeded for "'.concat(a,'"'))
break}r=r.get("Parent")}return t},t.getLookupTableFactory=function(e){var t
return function(){return e&&(t=Object.create(null),e(t),e=null),t}},t.isWhiteSpace=function(e){return 32===e||9===e||13===e||10===e},t.log2=function(e){if(e<=0)return 0
return Math.ceil(Math.log2(e))},t.parseXFAPath=function(e){var t=/(.+)\[([0-9]+)\]$/
return e.split(".").map((function(e){var r=e.match(t)
return r?{name:r[1],pos:parseInt(r[2],10)}:{name:e,pos:0}}))},t.readInt8=function(e,t){return e[t]<<24>>24},t.readUint16=function(e,t){return e[t]<<8|e[t+1]},t.readUint32=function(e,t){return(e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3])>>>0},t.toRomanNumerals=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];(0,n.assert)(Number.isInteger(e)&&e>0,"The number should be a positive integer.")
var r,a=[]
for(;e>=1e3;)e-=1e3,a.push("M")
r=e/100|0,e%=100,a.push(v[r]),r=e/10|0,e%=10,a.push(v[10+r]),a.push(v[20+e])
var i=a.join("")
return t?i.toLowerCase():i},t.XRefParseException=t.XRefEntryException=t.MissingDataException=void 0
var n=r(4),i=r(135)
function o(e,t){var r
if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return
if("string"==typeof e)return s(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r)
var a=0,n=function(){}
return{s:n,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,c=!1
return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next()
return o=e.done,e},e:function(e){c=!0,i=e},f:function(){try{o||null==r.return||r.return()}finally{if(c)throw i}}}}function s(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r]
return a}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,a=d(e)
if(t){var n=d(this).constructor
r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments)
return f(this,r)}}function f(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var p=function(e){l(r,e)
var t=h(r)
function r(e,a){var n
return c(this,r),(n=t.call(this,"Missing data [".concat(e,", ").concat(a,")"))).begin=e,n.end=a,n}return r}(n.BaseException)
t.MissingDataException=p
var g=function(e){l(r,e)
var t=h(r)
function r(){return c(this,r),t.apply(this,arguments)}return r}(n.BaseException)
t.XRefEntryException=g
var m=function(e){l(r,e)
var t=h(r)
function r(){return c(this,r),t.apply(this,arguments)}return r}(n.BaseException)
t.XRefParseException=m
var v=["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM","","X","XX","XXX","XL","L","LX","LXX","LXXX","XC","","I","II","III","IV","V","VI","VII","VIII","IX"]
function b(e,t,r,a){if(e){var s=null
if((0,i.isRef)(e)){if(a.has(e))return
s=e,a.put(s),e=t.fetch(e)}if(Array.isArray(e)){var c,l=o(e)
try{for(l.s();!(c=l.n()).done;){b(c.value,t,r,a)}}catch(f){l.e(f)}finally{l.f()}}else if(e instanceof i.Dict){if((0,i.isName)(e.get("S"),"JavaScript")&&e.has("JS")){var u,h=e.get("JS")
u=(0,i.isStream)(h)?(0,n.bytesToString)(h.getBytes()):h,(u=(0,n.stringToPDFString)(u))&&r.push(u)}b(e.getRaw("Next"),t,r,a)}s&&a.remove(s)}}},(e,t,r)=>{"use strict"
function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.PDFDocument=t.Page=void 0
var n,i=(n=r(2))&&n.__esModule?n:{default:n},o=r(4),s=r(140),c=r(135),l=r(138),u=r(142),h=r(155),f=r(152),d=r(141),p=r(174),g=r(157)
function m(e,t,r,a,n,i,o){try{var s=e[i](o),c=s.value}catch(l){return void r(l)}s.done?t(c):Promise.resolve(c).then(a,n)}function v(e){return function(){var t=this,r=arguments
return new Promise((function(a,n){var i=e.apply(t,r)
function o(e){m(i,a,n,o,s,"next",e)}function s(e){m(i,a,n,o,s,"throw",e)}o(void 0)}))}}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return
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
return C(this,r)}}function C(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function T(e,t){for(var r=0;r<t.length;r++){var a=t[r]
a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function I(e,t,r){return t&&T(e.prototype,t),r&&T(e,r),e}var P=[0,0,612,792]
function E(e,t){return"display"===t&&e.viewable||"print"===t&&e.printable}var _=function(){function e(t){var r=t.pdfManager,a=t.xref,n=t.pageIndex,i=t.pageDict,o=t.ref,s=t.globalIdFactory,c=t.fontCache,l=t.builtInCMapCache,u=t.globalImageCache,h=t.nonBlendModesSet
O(this,e),this.pdfManager=r,this.pageIndex=n,this.pageDict=i,this.xref=a,this.ref=o,this.fontCache=c,this.builtInCMapCache=l,this.globalImageCache=u,this.nonBlendModesSet=h,this.evaluatorOptions=r.evaluatorOptions,this.resourcesPromise=null
var f={obj:0}
this._localIdFactory=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)})(r,e)
var t=x(r)
function r(){return O(this,r),t.apply(this,arguments)}return I(r,null,[{key:"createObjId",value:function(){return"p".concat(n,"_").concat(++f.obj)}}]),r}(s)}return I(e,[{key:"_getInheritableProperty",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=(0,l.getInheritableProperty)({dict:this.pageDict,key:e,getArray:t,stopWhenFound:!1})
return Array.isArray(r)?1!==r.length&&(0,c.isDict)(r[0])?c.Dict.merge({xref:this.xref,dictArray:r}):r[0]:r}},{key:"_getBoundingBox",value:function(e){var t=this._getInheritableProperty(e,!0)
if(Array.isArray(t)&&4===t.length){if(t[2]-t[0]!=0&&t[3]-t[1]!=0)return t;(0,o.warn)("Empty /".concat(e," entry."))}return null}},{key:"getContentStream",value:function(){var e,t=this.content
if(Array.isArray(t)){var r,a=this.xref,n=[],i=y(t)
try{for(i.s();!(r=i.n()).done;){var o=r.value
n.push(a.fetchIfRef(o))}}catch(s){i.e(s)}finally{i.f()}e=new u.StreamsSequenceStream(n)}else e=(0,c.isStream)(t)?t:new u.NullStream
return e}},{key:"save",value:function(e,t,r){var a=new g.PartialEvaluator({xref:this.xref,handler:e,pageIndex:this.pageIndex,idFactory:this._localIdFactory,fontCache:this.fontCache,builtInCMapCache:this.builtInCMapCache,globalImageCache:this.globalImageCache,options:this.evaluatorOptions})
return this._parsedAnnotations.then((function(e){var n,i=[],s=y(e)
try{for(s.s();!(n=s.n()).done;){var c=n.value
E(c,"print")&&i.push(c.save(a,t,r).catch((function(e){return(0,o.warn)("save - ignoring annotation data during "+'"'.concat(t.name,'" task: "').concat(e,'".')),null})))}}catch(l){s.e(l)}finally{s.f()}return Promise.all(i)}))}},{key:"loadResources",value:function(e){var t=this
return this.resourcesPromise||(this.resourcesPromise=this.pdfManager.ensure(this,"resources")),this.resourcesPromise.then((function(){return new s.ObjectLoader(t.resources,e,t.xref).load()}))}},{key:"getOperatorList",value:function(e){var t=this,r=e.handler,a=e.sink,n=e.task,i=e.intent,s=e.renderInteractiveForms,c=e.annotationStorage,l=this.pdfManager.ensure(this,"getContentStream"),u=this.loadResources(["ExtGState","ColorSpace","Pattern","Shading","XObject","Font"]),h=new g.PartialEvaluator({xref:this.xref,handler:r,pageIndex:this.pageIndex,idFactory:this._localIdFactory,fontCache:this.fontCache,builtInCMapCache:this.builtInCMapCache,globalImageCache:this.globalImageCache,options:this.evaluatorOptions}),f=Promise.all([l,u]).then((function(e){var o=b(e,1)[0],s=new p.OperatorList(i,a)
return r.send("StartRenderPage",{transparency:h.hasBlendModes(t.resources,t.nonBlendModesSet),pageIndex:t.pageIndex,intent:i}),h.getOperatorList({stream:o,task:n,resources:t.resources,operatorList:s}).then((function(){return s}))}))
return Promise.all([f,this._parsedAnnotations]).then((function(e){var t=b(e,2),r=t[0],a=t[1]
if(0===a.length)return r.flush(!0),{length:r.totalLength}
var l,u=[],f=y(a)
try{for(f.s();!(l=f.n()).done;){var d=l.value
E(d,i)&&!d.isHidden(c)&&u.push(d.getOperatorList(h,n,s,c).catch((function(e){return(0,o.warn)("getOperatorList - ignoring annotation data during "+'"'.concat(n.name,'" task: "').concat(e,'".')),null})))}}catch(p){f.e(p)}finally{f.f()}return Promise.all(u).then((function(e){r.addOp(o.OPS.beginAnnotations,[])
var t,a=y(e)
try{for(a.s();!(t=a.n()).done;){var n=t.value
r.addOpList(n)}}catch(p){a.e(p)}finally{a.f()}return r.addOp(o.OPS.endAnnotations,[]),r.flush(!0),{length:r.totalLength}}))}))}},{key:"extractTextContent",value:function(e){var t=this,r=e.handler,a=e.task,n=e.normalizeWhitespace,i=e.sink,o=e.combineTextItems,s=this.pdfManager.ensure(this,"getContentStream"),c=this.loadResources(["ExtGState","XObject","Font"])
return Promise.all([s,c]).then((function(e){var s=b(e,1)[0]
return new g.PartialEvaluator({xref:t.xref,handler:r,pageIndex:t.pageIndex,idFactory:t._localIdFactory,fontCache:t.fontCache,builtInCMapCache:t.builtInCMapCache,globalImageCache:t.globalImageCache,options:t.evaluatorOptions}).getTextContent({stream:s,task:a,resources:t.resources,normalizeWhitespace:n,combineTextItems:o,sink:i})}))}},{key:"getAnnotationsData",value:function(e){return this._parsedAnnotations.then((function(t){for(var r=[],a=0,n=t.length;a<n;a++)e&&!E(t[a],e)||r.push(t[a].data)
return r}))}},{key:"content",get:function(){return this.pageDict.get("Contents")}},{key:"resources",get:function(){return(0,o.shadow)(this,"resources",this._getInheritableProperty("Resources")||c.Dict.empty)}},{key:"mediaBox",get:function(){return(0,o.shadow)(this,"mediaBox",this._getBoundingBox("MediaBox")||P)}},{key:"cropBox",get:function(){return(0,o.shadow)(this,"cropBox",this._getBoundingBox("CropBox")||this.mediaBox)}},{key:"userUnit",get:function(){var e=this.pageDict.get("UserUnit")
return(!(0,o.isNum)(e)||e<=0)&&(e=1),(0,o.shadow)(this,"userUnit",e)}},{key:"view",get:function(){var e,t=this.cropBox,r=this.mediaBox
if(t===r||(0,o.isArrayEqual)(t,r))e=r
else{var a=o.Util.intersect(t,r)
a&&a[2]-a[0]!=0&&a[3]-a[1]!=0?e=a:(0,o.warn)("Empty /CropBox and /MediaBox intersection.")}return(0,o.shadow)(this,"view",e||r)}},{key:"rotate",get:function(){var e=this._getInheritableProperty("Rotate")||0
return e%90!=0?e=0:e>=360?e%=360:e<0&&(e=(e%360+360)%360),(0,o.shadow)(this,"rotate",e)}},{key:"annotations",get:function(){var e=this._getInheritableProperty("Annots")
return(0,o.shadow)(this,"annotations",Array.isArray(e)?e:[])}},{key:"_parsedAnnotations",get:function(){var e=this,t=this.pdfManager.ensure(this,"annotations").then((function(){var t,r=[],a=y(e.annotations)
try{for(a.s();!(t=a.n()).done;){var n=t.value
r.push(h.AnnotationFactory.create(e.xref,n,e.pdfManager,e._localIdFactory).catch((function(e){return(0,o.warn)('_parsedAnnotations: "'.concat(e,'".')),null})))}}catch(i){a.e(i)}finally{a.f()}return Promise.all(r).then((function(e){return e.filter((function(e){return!!e}))}))}))
return(0,o.shadow)(this,"_parsedAnnotations",t)}},{key:"jsActions",get:function(){var e=(0,l.collectActions)(this.xref,this.pageDict,o.PageActionEventType)
return(0,o.shadow)(this,"jsActions",e)}}]),e}()
t.Page=_
var F=new Uint8Array([37,80,68,70,45]),R=new Uint8Array([115,116,97,114,116,120,114,101,102]),B=new Uint8Array([101,110,100,111,98,106]),M=/^[1-9]\.[0-9]$/
function D(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1024,a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],n=t.length,i=e.peekBytes(r),o=i.length-n
if(o<=0)return!1
if(a)for(var s=n-1,c=i.length-1;c>=s;){for(var l=0;l<n&&i[c-l]===t[s-l];)l++
if(l>=n)return e.pos+=c-s,!0
c--}else for(var u=0;u<=o;){for(var h=0;h<n&&i[u+h]===t[h];)h++
if(h>=n)return e.pos+=u,!0
u++}return!1}var L=function(){function e(t,r){var a
if(O(this,e),(0,c.isStream)(r))a=r
else{if(!(0,o.isArrayBuffer)(r))throw new Error("PDFDocument: Unknown argument type")
a=new u.Stream(r)}if(a.length<=0)throw new o.InvalidPDFException("The PDF file is empty, i.e. its size is zero bytes.")
this.pdfManager=t,this.stream=a,this.xref=new s.XRef(a,t),this._pagePromises=[],this._version=null
var n={font:0}
this._globalIdFactory=function(){function e(){O(this,e)}return I(e,null,[{key:"getDocId",value:function(){return"g_".concat(t.docId)}},{key:"createFontId",value:function(){return"f".concat(++n.font)}},{key:"createObjId",value:function(){(0,o.unreachable)("Abstract method `createObjId` called.")}}]),e}()}var t
return I(e,[{key:"parse",value:function(e){this.xref.parse(e),this.catalog=new s.Catalog(this.pdfManager,this.xref),this.catalog.version&&(this._version=this.catalog.version)}},{key:"checkHeader",value:function(){var e=this.stream
if(e.reset(),D(e,F)){e.moveStart()
for(var t,r="";(t=e.getByte())>32&&!(r.length>=12);)r+=String.fromCharCode(t)
this._version||(this._version=r.substring(5))}}},{key:"parseStartXRef",value:function(){this.xref.setStartXRef(this.startXRef)}},{key:"_hasOnlyDocumentSignatures",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=10
return!!Array.isArray(e)&&e.every((function(e){if(!((e=t.xref.fetchIfRef(e))instanceof c.Dict))return!1
if(e.has("Kids"))return++r>a?((0,o.warn)("_hasOnlyDocumentSignatures: maximum recursion depth reached"),!1):t._hasOnlyDocumentSignatures(e.get("Kids"),r)
var n=(0,c.isName)(e.get("FT"),"Sig"),i=e.get("Rect"),s=Array.isArray(i)&&i.every((function(e){return 0===e}))
return n&&s}))}},{key:"_getLinearizationPage",value:function(e){var t=this.catalog,r=this.linearization,a=c.Ref.get(r.objectNumberFirst,0)
return this.xref.fetchAsync(a).then((function(e){if((0,c.isDict)(e,"Page")||(0,c.isDict)(e)&&!e.has("Type")&&e.has("Contents"))return a&&!t.pageKidsCountCache.has(a)&&t.pageKidsCountCache.put(a,1),[e,a]
throw new o.FormatError("The Linearization dictionary doesn't point to a valid Page dictionary.")})).catch((function(r){return(0,o.info)(r),t.getPageDict(e)}))}},{key:"getPage",value:function(e){var t=this
if(void 0!==this._pagePromises[e])return this._pagePromises[e]
var r=this.catalog,a=this.linearization,n=a&&a.pageFirst===e?this._getLinearizationPage(e):r.getPageDict(e)
return this._pagePromises[e]=n.then((function(a){var n=b(a,2),i=n[0],o=n[1]
return new _({pdfManager:t.pdfManager,xref:t.xref,pageIndex:e,pageDict:i,ref:o,globalIdFactory:t._globalIdFactory,fontCache:r.fontCache,builtInCMapCache:r.builtInCMapCache,globalImageCache:r.globalImageCache,nonBlendModesSet:r.nonBlendModesSet})}))}},{key:"checkFirstPage",value:function(){var e=this
return this.getPage(0).catch(function(){var t=v(i.default.mark((function t(r){return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(r instanceof l.XRefEntryException)){t.next=5
break}return e._pagePromises.length=0,t.next=4,e.cleanup()
case 4:throw new l.XRefParseException
case 5:case"end":return t.stop()}}),t)})))
return function(e){return t.apply(this,arguments)}}())}},{key:"fontFallback",value:function(e,t){return this.catalog.fontFallback(e,t)}},{key:"cleanup",value:(t=v(i.default.mark((function e(){var t,r=arguments
return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]&&r[0],e.abrupt("return",this.catalog?this.catalog.cleanup(t):(0,c.clearPrimitiveCaches)())
case 2:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"_collectFieldObjects",value:function(e,t,r){var a=this.xref.fetchIfRef(t)
if(a.has("T")){var n=(0,o.stringToPDFString)(a.get("T"))
e=""===e?n:"".concat(e,".").concat(n)}if(r.has(e)||r.set(e,[]),r.get(e).push(h.AnnotationFactory.create(this.xref,t,this.pdfManager,this._localIdFactory).then((function(e){return e&&e.getFieldObject()})).catch((function(e){return(0,o.warn)('_collectFieldObjects: "'.concat(e,'".')),null}))),a.has("Kids")){var i,s=y(a.get("Kids"))
try{for(s.s();!(i=s.n()).done;){var c=i.value
this._collectFieldObjects(e,c,r)}}catch(l){s.e(l)}finally{s.f()}}}},{key:"linearization",get:function(){var e=null
try{e=d.Linearization.create(this.stream)}catch(t){if(t instanceof l.MissingDataException)throw t;(0,o.info)(t)}return(0,o.shadow)(this,"linearization",e)}},{key:"startXRef",get:function(){var e=this.stream,t=0
if(this.linearization)e.reset(),D(e,B)&&(t=e.pos+6-e.start)
else{for(var r=R.length,a=!1,n=e.end;!a&&n>0;)(n-=1024-r)<0&&(n=0),e.pos=n,a=D(e,R,1024,!0)
if(a){var i
e.skip(9)
do{i=e.getByte()}while((0,l.isWhiteSpace)(i))
for(var s="";i>=32&&i<=57;)s+=String.fromCharCode(i),i=e.getByte()
t=parseInt(s,10),isNaN(t)&&(t=0)}}return(0,o.shadow)(this,"startXRef",t)}},{key:"numPages",get:function(){var e=this.linearization,t=e?e.numPages:this.catalog.numPages
return(0,o.shadow)(this,"numPages",t)}},{key:"formInfo",get:function(){var e={hasFields:!1,hasAcroForm:!1,hasXfa:!1},t=this.catalog.acroForm
if(!t)return(0,o.shadow)(this,"formInfo",e)
try{var r=t.get("Fields"),a=Array.isArray(r)&&r.length>0
e.hasFields=a
var n=t.get("XFA")
e.hasXfa=Array.isArray(n)&&n.length>0||(0,c.isStream)(n)&&!n.isEmpty
var i=!!(1&t.get("SigFlags"))&&this._hasOnlyDocumentSignatures(r)
e.hasAcroForm=a&&!i}catch(s){if(s instanceof l.MissingDataException)throw s;(0,o.warn)('Cannot fetch form information: "'.concat(s,'".'))}return(0,o.shadow)(this,"formInfo",e)}},{key:"documentInfo",get:function(){var e={Title:o.isString,Author:o.isString,Subject:o.isString,Keywords:o.isString,Creator:o.isString,Producer:o.isString,CreationDate:o.isString,ModDate:o.isString,Trapped:c.isName},t=this._version
"string"==typeof t&&M.test(t)||((0,o.warn)("Invalid PDF header version number: ".concat(t)),t=null)
var r,a={PDFFormatVersion:t,IsLinearized:!!this.linearization,IsAcroFormPresent:this.formInfo.hasAcroForm,IsXFAPresent:this.formInfo.hasXfa,IsCollectionPresent:!!this.catalog.collection}
try{r=this.xref.trailer.get("Info")}catch(f){if(f instanceof l.MissingDataException)throw f;(0,o.info)("The document information dictionary is invalid.")}if((0,c.isDict)(r)){var n,i=y(r.getKeys())
try{for(i.s();!(n=i.n()).done;){var s=n.value,u=r.get(s)
if(e[s])e[s](u)?a[s]="string"!=typeof u?u:(0,o.stringToPDFString)(u):(0,o.info)('Bad value in document info for "'.concat(s,'".'))
else if("string"==typeof s){var h=void 0
if((0,o.isString)(u))h=(0,o.stringToPDFString)(u)
else{if(!((0,c.isName)(u)||(0,o.isNum)(u)||(0,o.isBool)(u))){(0,o.info)('Unsupported value in document info for (custom) "'.concat(s,'".'))
continue}h=u}a.Custom||(a.Custom=Object.create(null)),a.Custom[s]=h}}}catch(f){i.e(f)}finally{i.f()}}return(0,o.shadow)(this,"documentInfo",a)}},{key:"fingerprint",get:function(){for(var e,t=this.xref.trailer.get("ID"),r=[],a=0,n=(e=Array.isArray(t)&&t[0]&&(0,o.isString)(t[0])&&"\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0"!==t[0]?(0,o.stringToBytes)(t[0]):(0,f.calculateMD5)(this.stream.getByteRange(0,1024),0,1024)).length;a<n;a++){var i=e[a].toString(16)
r.push(i.padStart(2,"0"))}return(0,o.shadow)(this,"fingerprint",r.join(""))}},{key:"fieldObjects",get:function(){if(!this.formInfo.hasFields)return(0,o.shadow)(this,"fieldObjects",Promise.resolve(null))
var e,t=Object.create(null),r=new Map,a=y(this.catalog.acroForm.get("Fields"))
try{for(a.s();!(e=a.n()).done;){var n=e.value
this._collectFieldObjects("",n,r)}}catch(u){a.e(u)}finally{a.f()}var i,s=[],c=y(r)
try{var l=function(){var e=b(i.value,2),r=e[0],a=e[1]
s.push(Promise.all(a).then((function(e){(e=e.filter((function(e){return!!e}))).length>0&&(t[r]=e)})))}
for(c.s();!(i=c.n()).done;)l()}catch(u){c.e(u)}finally{c.f()}return(0,o.shadow)(this,"fieldObjects",Promise.all(s).then((function(){return t})))}},{key:"hasJSActions",get:function(){var e=this
return(0,o.shadow)(this,"hasJSActions",this.fieldObjects.then((function(t){return null!==t&&Object.values(t).some((function(e){return e.some((function(e){return null!==e.actions}))}))||!!e.catalog.jsActions})))}},{key:"calculationOrderIds",get:function(){var e=this.catalog.acroForm
if(!e||!e.has("CO"))return(0,o.shadow)(this,"calculationOrderIds",null)
var t=e.get("CO")
if(!Array.isArray(t)||0===t.length)return(0,o.shadow)(this,"calculationOrderIds",null)
var r=t.filter(c.isRef).map((function(e){return e.toString()}))
return 0===r.length?(0,o.shadow)(this,"calculationOrderIds",null):(0,o.shadow)(this,"calculationOrderIds",r)}}]),e}()
t.PDFDocument=L},(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.XRef=t.ObjectLoader=t.FileSpec=t.Catalog=void 0
var a,n=(a=r(2))&&a.__esModule?a:{default:a},i=r(4),o=r(135),s=r(138),c=r(141),l=r(152),u=r(153),h=r(154)
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
this.fontCache=new o.RefSetCache,this.builtInCMapCache=new Map,this.globalImageCache=new h.GlobalImageCache,this.pageKidsCountCache=new o.RefSetCache,this.nonBlendModesSet=new o.RefSet}return O(e,[{key:"_readMarkInfo",value:function(){var e=this._catDict.get("MarkInfo")
if(!(0,o.isDict)(e))return null
var t=Object.assign(Object.create(null),{Marked:!1,UserProperties:!1,Suspects:!1})
for(var r in t)if(e.has(r)){var a=e.get(r);(0,i.isBool)(a)&&(t[r]=a)}return t}},{key:"_readDocumentOutline",value:function(){var t=this._catDict.get("Outlines")
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
for(var t=new Array(this.numPages),r=null,a="",n=new F(e,this.xref).getAll(),c="",l=1,u=0,h=this.numPages;u<h;u++){if(u in n){var f=n[u]
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
l=g}else l=1}switch(r){case"D":c=l
break
case"R":case"r":c=(0,s.toRomanNumerals)(l,"r"===r)
break
case"A":case"a":for(var m="a"===r?97:65,v=l-1,b=String.fromCharCode(m+v%26),y=[],w=0,k=v/26|0;w<=k;w++)y.push(b)
c=y.join("")
break
default:if(r)throw new i.FormatError('Invalid style "'.concat(r,'" in PageLabel dictionary.'))
c=""}t[u]=a+c,l++}return t}},{key:"_collectJavaScript",value:function(){var e=this._catDict.get("Names"),t=null
function r(e,r){var a=r.get("S")
if((0,o.isName)(a,"JavaScript")){var n=r.get("JS")
if((0,o.isStream)(n))n=(0,i.bytesToString)(n.getBytes())
else if(!(0,i.isString)(n))return
null===t&&(t=Object.create(null)),t[e]=(0,i.stringToPDFString)(n)}}if(e&&e.has("JavaScript")){var a=new _(e.getRaw("JavaScript"),this.xref).getAll()
for(var n in a){var s=a[n];(0,o.isDict)(s)&&r(n,s)}}var c=this._catDict.get("OpenAction")
return(0,o.isDict)(c)&&(0,o.isName)(c.get("S"),"JavaScript")&&r("OpenAction",c),t}},{key:"fontFallback",value:function(e,t){var r=[]
return this.fontCache.forEach((function(e){r.push(e)})),Promise.all(r).then((function(r){var a,n=k(r)
try{for(n.s();!(a=n.n()).done;){var i=a.value
if(i.loadedName===e)return void i.fallback(t)}}catch(o){n.e(o)}finally{n.f()}}))}},{key:"cleanup",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(0,o.clearPrimitiveCaches)(),this.globalImageCache.clear(t),this.pageKidsCountCache.clear(),this.nonBlendModesSet.clear()
var r=[]
return this.fontCache.forEach((function(e){r.push(e)})),Promise.all(r).then((function(t){var r,a=k(t)
try{for(a.s();!(r=a.n()).done;){delete r.value.dict.cacheKey}}catch(n){a.e(n)}finally{a.f()}e.fontCache.clear(),e.builtInCMapCache.clear()}))}},{key:"getPageDict",value:function(e){var t,r=(0,i.createPromiseCapability)(),a=[this._catDict.getRaw("Pages")],n=new o.RefSet,s=this.xref,c=this.pageKidsCountCache,l=0
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
try{var t=this._catDict.get("Collection");(0,o.isDict)(t)&&t.size>0&&(e=t)}catch(r){if(r instanceof s.MissingDataException)throw r;(0,i.info)("Cannot fetch Collection entry; assuming no collection is present.")}return(0,i.shadow)(this,"collection",e)}},{key:"acroForm",get:function(){var e=null
try{var t=this._catDict.get("AcroForm");(0,o.isDict)(t)&&t.size>0&&(e=t)}catch(r){if(r instanceof s.MissingDataException)throw r;(0,i.info)("Cannot fetch AcroForm entry; assuming no forms are present.")}return(0,i.shadow)(this,"acroForm",e)}},{key:"metadata",get:function(){var e=this._catDict.getRaw("Metadata")
if(!(0,o.isRef)(e))return(0,i.shadow)(this,"metadata",null)
var t,r=!(this.xref.encrypt&&this.xref.encrypt.encryptMetadata),a=this.xref.fetch(e,r)
if(a&&(0,o.isDict)(a.dict)){var n=a.dict.get("Type"),c=a.dict.get("Subtype")
if((0,o.isName)(n,"Metadata")&&(0,o.isName)(c,"XML"))try{t=(0,i.stringToUTF8String)((0,i.bytesToString)(a.getBytes()))}catch(l){if(l instanceof s.MissingDataException)throw l;(0,i.info)("Skipping invalid metadata.")}}return(0,i.shadow)(this,"metadata",t)}},{key:"markInfo",get:function(){var e=null
try{e=this._readMarkInfo()}catch(t){if(t instanceof s.MissingDataException)throw t;(0,i.warn)("Unable to read mark info.")}return(0,i.shadow)(this,"markInfo",e)}},{key:"toplevelPagesDict",get:function(){var e=this._catDict.get("Pages")
if(!(0,o.isDict)(e))throw new i.FormatError("Invalid top-level pages dictionary.")
return(0,i.shadow)(this,"toplevelPagesDict",e)}},{key:"documentOutline",get:function(){var e=null
try{e=this._readDocumentOutline()}catch(t){if(t instanceof s.MissingDataException)throw t;(0,i.warn)("Unable to read document outline.")}return(0,i.shadow)(this,"documentOutline",e)}},{key:"permissions",get:function(){var e=null
try{e=this._readPermissions()}catch(t){if(t instanceof s.MissingDataException)throw t;(0,i.warn)("Unable to read permissions.")}return(0,i.shadow)(this,"permissions",e)}},{key:"optionalContentConfig",get:function(){var e=null
try{var t=this._catDict.get("OCProperties")
if(!t)return(0,i.shadow)(this,"optionalContentConfig",null)
var r=t.get("D")
if(!r)return(0,i.shadow)(this,"optionalContentConfig",null)
var a=t.get("OCGs")
if(!Array.isArray(a))return(0,i.shadow)(this,"optionalContentConfig",null)
var n,c=[],l=[],u=k(a)
try{for(u.s();!(n=u.n()).done;){var h=n.value
if((0,o.isRef)(h)){l.push(h)
var f=this.xref.fetchIfRef(h)
c.push({id:h.toString(),name:(0,i.isString)(f.get("Name"))?(0,i.stringToPDFString)(f.get("Name")):null,intent:(0,i.isString)(f.get("Intent"))?(0,i.stringToPDFString)(f.get("Intent")):null})}}}catch(d){u.e(d)}finally{u.f()}(e=this._readOptionalContentConfig(r,l)).groups=c}catch(p){if(p instanceof s.MissingDataException)throw p;(0,i.warn)("Unable to read optional content config: ".concat(p))}return(0,i.shadow)(this,"optionalContentConfig",e)}},{key:"numPages",get:function(){var e=this.toplevelPagesDict.get("Count")
if(!Number.isInteger(e))throw new i.FormatError("Page count in top-level pages dictionary is not an integer.")
return(0,i.shadow)(this,"numPages",e)}},{key:"destinations",get:function(){var e=this._readDests(),t=Object.create(null)
if(e instanceof _){var r=e.getAll()
for(var a in r)t[a]=T(r[a])}else e instanceof o.Dict&&e.forEach((function(e,r){r&&(t[e]=T(r))}))
return(0,i.shadow)(this,"destinations",t)}},{key:"pageLabels",get:function(){var e=null
try{e=this._readPageLabels()}catch(t){if(t instanceof s.MissingDataException)throw t;(0,i.warn)("Unable to read page labels.")}return(0,i.shadow)(this,"pageLabels",e)}},{key:"pageLayout",get:function(){var e=this._catDict.get("PageLayout"),t=""
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
c=s}void 0!==c?(a||(a=Object.create(null)),a[n]=c):(0,i.info)('Bad value in ViewerPreferences for "'.concat(n,'".'))}else(0,i.info)('Bad value in ViewerPreferences for "'.concat(n,'".'))}return(0,i.shadow)(this,"viewerPreferences",a)}},{key:"openAction",get:function(){var t=this._catDict.get("OpenAction"),r=Object.create(null)
if((0,o.isDict)(t)){var a=new o.Dict(this.xref)
a.set("A",t)
var n={url:null,dest:null,action:null}
e.parseDestDictionary({destDict:a,resultObj:n}),Array.isArray(n.dest)?r.dest=n.dest:n.action&&(r.action=n.action)}else Array.isArray(t)&&(r.dest=t)
return(0,i.shadow)(this,"openAction",(0,i.objectSize)(r)>0?r:null)}},{key:"attachments",get:function(){var e=this._catDict.get("Names"),t=null
if(e&&e.has("EmbeddedFiles")){var r=new _(e.getRaw("EmbeddedFiles"),this.xref).getAll()
for(var a in r){var n=new R(r[a],this.xref)
t||(t=Object.create(null)),t[(0,i.stringToPDFString)(a)]=n.serializable}}return(0,i.shadow)(this,"attachments",t)}},{key:"javaScript",get:function(){var e=this._collectJavaScript()
return(0,i.shadow)(this,"javaScript",e?Object.values(e):null)}},{key:"jsActions",get:function(){var e=this._collectJavaScript(),t=(0,s.collectActions)(this.xref,this._catDict,i.DocumentActionEventType)
if(!t&&e&&(t=Object.create(null)),t&&e)for(var r=0,a=Object.entries(e);r<a.length;r++){var n=y(a[r],2),o=n[0],c=n[1]
o in t?t[o].push(c):t[o]=[c]}return(0,i.shadow)(this,"jsActions",t)}}],[{key:"parseDestDictionary",value:function(e){var t=e.destDict
if((0,o.isDict)(t)){var r=e.resultObj
if("object"===w(r)){var a,n,s=e.docBaseUrl||null,c=t.get("A")
if((0,o.isDict)(c)||(t.has("Dest")?c=t.get("Dest"):(c=t.get("AA"),(0,o.isDict)(c)&&(c.has("D")?c=c.get("D"):c.has("U")&&(c=c.get("U"))))),(0,o.isDict)(c)){var l=c.get("S")
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
var P=function(){function e(e,t){this.stream=e,this.pdfManager=t,this.entries=[],this.xrefstms=Object.create(null),this._cacheMap=new Map,this.stats={streamTypes:Object.create(null),fontTypes:Object.create(null)},this._newRefNum=null}return e.prototype={getNewRef:function(){return null===this._newRefNum&&(this._newRefNum=this.entries.length),o.Ref.get(this._newRefNum++,0)},resetNewRef:function(){this._newRefNum=null},setStartXRef:function(e){this.startXRefQueue=[e]},parse:function(e){var t,r,a
e?((0,i.warn)("Indexing all PDF objects"),t=this.indexObjects()):t=this.readXRef(),t.assignXref(this),this.trailer=t
try{r=t.get("Encrypt")}catch(u){if(u instanceof s.MissingDataException)throw u;(0,i.warn)('XRef.parse - Invalid "Encrypt" reference: "'.concat(u,'".'))}if((0,o.isDict)(r)){var n=t.get("ID"),c=n&&n.length?n[0]:""
r.suppressEncryption=!0,this.encrypt=new l.CipherTransformFactory(r,c,this.pdfManager.password)}try{a=t.get("Root")}catch(u){if(u instanceof s.MissingDataException)throw u;(0,i.warn)('XRef.parse - Invalid "Root" reference: "'.concat(u,'".'))}if(!(0,o.isDict)(a)||!a.has("Pages")){if(!e)throw new s.XRefParseException
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
for(var p,g=d.getBytes(),m=d.start,v=g.length,b=[],y=[];m<v;){var w=g[m]
if(9!==w&&10!==w&&13!==w&&32!==w)if(37!==w){var k,S=e(g,m)
if(S.startsWith("xref")&&(4===S.length||/\s/.test(S[4])))m+=t(g,m,l),b.push(m),m+=t(g,m,u)
else if(k=r.exec(S)){var x=0|k[1],C=0|k[2]
this.entries[x]&&this.entries[x].gen!==C||(this.entries[x]={offset:m-d.start,gen:C,uncompressed:!0})
for(var A=void 0,O=m+S.length;O<g.length;){var T=O+t(g,O,h)+4
A=T-m
var I=Math.max(T-25,O),P=(0,i.bytesToString)(g.subarray(I,T))
if(a.test(P))break
var E=n.exec(P)
if(E&&E[1]){(0,i.warn)('indexObjects: Found new "obj" inside of another "obj", caused by missing "endobj" -- trying to recover.'),A-=E[1].length
break}O=T}var _=g.subarray(m,m+A),F=t(_,0,f)
F<A&&_[F+5]<64&&(y.push(m-d.start),this.xrefstms[m-d.start]=1),m+=A}else S.startsWith("trailer")&&(7===S.length||/\s/.test(S[7]))?(b.push(m),m+=t(g,m,u)):m+=S.length+1}else do{if(++m>=v)break
w=g[m]}while(10!==w&&13!==w)
else++m}for(var R=0,B=y.length;R<B;++R)this.startXRefQueue.push(y[R]),this.readXRef(!0)
for(var M=0,D=b.length;M<D;++M){d.pos=b[M]
var L=new c.Parser({lexer:new c.Lexer(d),xref:this,allowStreams:!0,recoveryMode:!0}),N=L.getObj()
if((0,o.isCmd)(N,"trailer")){var U=L.getObj()
if((0,o.isDict)(U)){try{var j=U.get("Root")
if(!(j instanceof o.Dict))continue
var q=j.get("Pages")
if(!(q instanceof o.Dict))continue
var z=q.get("Count")
if(!Number.isInteger(z))continue}catch(G){if(G instanceof s.MissingDataException)throw G
continue}if(U.has("ID"))return U
p=U}}}if(p)return p
throw new i.InvalidPDFException("Invalid PDF structure.")},readXRef:function(e){var t=this.stream,r=Object.create(null)
try{for(;this.startXRefQueue.length;){var a=this.startXRefQueue[0]
if(r[a])(0,i.warn)("readXRef - skipping XRef table since it was already parsed."),this.startXRefQueue.shift()
else{r[a]=!0,t.pos=a+t.start
var n,l=new c.Parser({lexer:new c.Lexer(t),xref:this,allowStreams:!0}),u=l.getObj()
if((0,o.isCmd)(u,"xref")){if(n=this.processXRefTable(l),this.topDict||(this.topDict=n),u=n.get("XRefStm"),Number.isInteger(u)){var h=u
h in this.xrefstms||(this.xrefstms[h]=1,this.startXRefQueue.push(h))}}else{if(!Number.isInteger(u))throw new i.FormatError("Invalid XRef stream header")
if(!Number.isInteger(l.getObj())||!(0,o.isCmd)(l.getObj(),"obj")||!(0,o.isStream)(u=l.getObj()))throw new i.FormatError("Invalid XRef stream")
if(n=this.processXRefStream(u),this.topDict||(this.topDict=n),!n)throw new i.FormatError("Failed to read XRef stream")}u=n.get("Prev"),Number.isInteger(u)?this.startXRefQueue.push(u):(0,o.isRef)(u)&&this.startXRefQueue.push(u.num),this.startXRefQueue.shift()}}return this.topDict}catch(f){if(f instanceof s.MissingDataException)throw f;(0,i.info)("(while reading XRef): "+f)}if(!e)throw new s.XRefParseException},getEntry:function(e){var t=this.entries[e]
return t&&!t.free&&t.offset?t:null},fetchIfRef:function(e,t){return e instanceof o.Ref?this.fetch(e,t):e},fetch:function(e,t){if(!(e instanceof o.Ref))throw new Error("ref object is not a reference")
var r=e.num,a=this._cacheMap.get(r)
if(void 0!==a)return a instanceof o.Dict&&!a.objId&&(a.objId=e.toString()),a
var n=this.getEntry(r)
return null===n?(this._cacheMap.set(r,n),n):(n=n.uncompressed?this.fetchUncompressed(e,n,t):this.fetchCompressed(e,n,t),(0,o.isDict)(n)?n.objId=e.toString():(0,o.isStream)(n)&&(n.dict.objId=e.toString()),n)},fetchUncompressed:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=e.gen,n=e.num
if(t.gen!==a)throw new s.XRefEntryException("Inconsistent generation in XRef: ".concat(e))
var i=this.stream.makeSubStream(t.offset+this.stream.start),l=new c.Parser({lexer:new c.Lexer(i),xref:this,allowStreams:!0}),u=l.getObj(),h=l.getObj(),f=l.getObj()
if(u!==n||h!==a||!(f instanceof o.Cmd))throw new s.XRefEntryException("Bad (uncompressed) XRef entry: ".concat(e))
if("obj"!==f.cmd){if(f.cmd.startsWith("obj")&&(n=parseInt(f.cmd.substring(3),10),!Number.isNaN(n)))return n
throw new s.XRefEntryException("Bad (uncompressed) XRef entry: ".concat(e))}return t=this.encrypt&&!r?l.getObj(this.encrypt.createCipherTransform(n,a)):l.getObj(),(0,o.isStream)(t)||this._cacheMap.set(n,t),t},fetchCompressed:function(e,t){var r=t.offset,a=this.fetch(o.Ref.get(r,0))
if(!(0,o.isStream)(a))throw new i.FormatError("bad ObjStm stream")
var n=a.dict.get("First"),l=a.dict.get("N")
if(!Number.isInteger(n)||!Number.isInteger(l))throw new i.FormatError("invalid first and n parameters for ObjStm stream")
for(var u=new c.Parser({lexer:new c.Lexer(a),xref:this,allowStreams:!0}),h=new Array(l),f=0;f<l;++f){var d=u.getObj()
if(!Number.isInteger(d))throw new i.FormatError("invalid object number in the ObjStm stream: ".concat(d))
var p=u.getObj()
if(!Number.isInteger(p))throw new i.FormatError("invalid object offset in the ObjStm stream: ".concat(p))
h[f]=d}for(var g=new Array(l),m=0;m<l;++m){var v=u.getObj()
if(g[m]=v,u.buf1 instanceof o.Cmd&&"endobj"===u.buf1.cmd&&u.shift(),!(0,o.isStream)(v)){var b=h[m],y=this.entries[b]
y&&y.offset===r&&y.gen===m&&this._cacheMap.set(b,v)}}if(void 0===(t=g[t.gen]))throw new s.XRefEntryException("Bad (compressed) XRef entry: ".concat(e))
return t},fetchIfRefAsync:function(e,t){var r=this
return b(n.default.mark((function a(){return n.default.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!(e instanceof o.Ref)){a.next=2
break}return a.abrupt("return",r.fetchAsync(e,t))
case 2:return a.abrupt("return",e)
case 3:case"end":return a.stop()}}),a)})))()},fetchAsync:function(e,t){var r=this
return b(n.default.mark((function a(){return n.default.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.abrupt("return",r.fetch(e,t))
case 4:if(a.prev=4,a.t0=a.catch(0),a.t0 instanceof s.MissingDataException){a.next=8
break}throw a.t0
case 8:return a.next=10,r.pdfManager.requestRange(a.t0.begin,a.t0.end)
case 10:return a.abrupt("return",r.fetchAsync(e,t))
case 11:case"end":return a.stop()}}),a,null,[[0,4]])})))()},getCatalogObj:function(){return this.root}},e}()
t.XRef=P
var E=function(){function e(t,r,a){C(this,e),this.constructor===e&&(0,i.unreachable)("Cannot initialize NameOrNumberTree."),this.root=t,this.xref=r,this._type=a}return O(e,[{key:"getAll",value:function(){var e=Object.create(null)
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
function r(e,a){return C(this,r),t.call(this,e,a,"Names")}return r}(E),F=function(e){f(r,e)
var t=p(r)
function r(e,a){return C(this,r),t.call(this,e,a,"Nums")}return r}(E),R=function(){function e(e,t){e&&(0,o.isDict)(e)&&(this.xref=t,this.root=e,e.has("FS")&&(this.fs=e.get("FS")),this.description=e.has("Desc")?(0,i.stringToPDFString)(e.get("Desc")):"",e.has("RF")&&(0,i.warn)("Related file specifications are not supported"),this.contentAvailable=!0,e.has("EF")||(this.contentAvailable=!1,(0,i.warn)("Non-embedded file specifications are not supported")))}function t(e){return e.has("UF")?e.get("UF"):e.has("F")?e.get("F"):e.has("Unix")?e.get("Unix"):e.has("Mac")?e.get("Mac"):e.has("DOS")?e.get("DOS"):null}return e.prototype={get filename(){if(!this._filename&&this.root){var e=t(this.root)||"unnamed"
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
return b(n.default.mark((function a(){var i,c,l,u,h,f,d,p,g,m,v
return n.default.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:i=[],c=[]
case 2:if(!t.length){a.next=22
break}if(!((l=t.pop())instanceof o.Ref)){a.next=18
break}if(!r.refSet.has(l)){a.next=7
break}return a.abrupt("continue",2)
case 7:a.prev=7,r.refSet.put(l),l=r.xref.fetch(l),a.next=18
break
case 12:if(a.prev=12,a.t0=a.catch(7),a.t0 instanceof s.MissingDataException){a.next=16
break}throw a.t0
case 16:i.push(l),c.push({begin:a.t0.begin,end:a.t0.end})
case 18:if(l&&l.getBaseStreams){for(u=l.getBaseStreams(),h=!1,f=0,d=u.length;f<d;f++)(p=u[f]).allChunksLoaded&&!p.allChunksLoaded()&&(h=!0,c.push({begin:p.start,end:p.end}))
h&&i.push(l)}e(l,t),a.next=2
break
case 22:if(!c.length){a.next=27
break}return a.next=25,r.xref.stream.manager.requestRanges(c)
case 25:for(g=0,m=i.length;g<m;g++)(v=i[g])instanceof o.Ref&&r.refSet.remove(v)
return a.abrupt("return",r._walk(i))
case 27:return r.refSet=null,a.abrupt("return",void 0)
case 29:case"end":return a.stop()}}),a,null,[[7,12]])})))()}},t}()
t.ObjectLoader=B},(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.Parser=t.Linearization=t.Lexer=void 0
var a=r(142),n=r(4),i=r(135),o=r(138),s=r(143),c=r(145),l=r(148),u=r(150)
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
t.Linearization=y},(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.StringStream=t.StreamsSequenceStream=t.Stream=t.RunLengthStream=t.PredictorStream=t.NullStream=t.LZWStream=t.FlateStream=t.DecryptStream=t.DecodeStream=t.AsciiHexStream=t.Ascii85Stream=void 0
var a=r(4),n=r(135),i=r(138)
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
function t(t){if(this._rawMinBufferLength=t||0,this.pos=0,this.bufferLength=0,this.eof=!1,this.buffer=e,this.minBufferLength=512,t)for(;this.minBufferLength<t;)this.minBufferLength*=2}return t.prototype={get length(){(0,a.unreachable)("Should not access DecodeStream.length")},get isEmpty(){for(;!this.eof&&0===this.bufferLength;)this.readBlock()
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
var P=(65535&T)+I
O+s>=A&&(A=(o=this.ensureBuffer(O+s)).length)
for(var E=0;E<s;++E,++O)o[O]=o[O-P]}}}else{var _
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
t.NullStream=y},(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.CCITTFaxStream=void 0
var a=r(135),n=r(144),i=r(142),o=function(){function e(e,t,r){this.str=e,this.dict=e.dict,(0,a.isDict)(r)||(r=a.Dict.empty)
var o={next:function(){return e.getByte()}}
this.ccittFaxDecoder=new n.CCITTFaxDecoder(o,{K:r.get("K"),EndOfLine:r.get("EndOfLine"),EncodedByteAlign:r.get("EncodedByteAlign"),Columns:r.get("Columns"),Rows:r.get("Rows"),EndOfBlock:r.get("EndOfBlock"),BlackIs1:r.get("BlackIs1")}),i.DecodeStream.call(this,t)}return e.prototype=Object.create(i.DecodeStream.prototype),e.prototype.readBlock=function(){for(;!this.eof;){var e=this.ccittFaxDecoder.readNextChar()
if(-1===e)return void(this.eof=!0)
this.ensureBuffer(this.bufferLength+1),this.buffer[this.bufferLength++]=e}},e}()
t.CCITTFaxStream=o},(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.CCITTFaxDecoder=void 0
var a=r(4),n=function(){var e=-1,t=[[-1,-1],[-1,-1],[7,8],[7,7],[6,6],[6,6],[6,5],[6,5],[4,0],[4,0],[4,0],[4,0],[4,0],[4,0],[4,0],[4,0],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,3],[3,3],[3,3],[3,3],[3,3],[3,3],[3,3],[3,3],[3,3],[3,3],[3,3],[3,3],[3,3],[3,3],[3,3],[3,3],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2]],r=[[-1,-1],[12,-2],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[11,1792],[11,1792],[12,1984],[12,2048],[12,2112],[12,2176],[12,2240],[12,2304],[11,1856],[11,1856],[11,1920],[11,1920],[12,2368],[12,2432],[12,2496],[12,2560]],n=[[-1,-1],[-1,-1],[-1,-1],[-1,-1],[8,29],[8,29],[8,30],[8,30],[8,45],[8,45],[8,46],[8,46],[7,22],[7,22],[7,22],[7,22],[7,23],[7,23],[7,23],[7,23],[8,47],[8,47],[8,48],[8,48],[6,13],[6,13],[6,13],[6,13],[6,13],[6,13],[6,13],[6,13],[7,20],[7,20],[7,20],[7,20],[8,33],[8,33],[8,34],[8,34],[8,35],[8,35],[8,36],[8,36],[8,37],[8,37],[8,38],[8,38],[7,19],[7,19],[7,19],[7,19],[8,31],[8,31],[8,32],[8,32],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,12],[6,12],[6,12],[6,12],[6,12],[6,12],[6,12],[6,12],[8,53],[8,53],[8,54],[8,54],[7,26],[7,26],[7,26],[7,26],[8,39],[8,39],[8,40],[8,40],[8,41],[8,41],[8,42],[8,42],[8,43],[8,43],[8,44],[8,44],[7,21],[7,21],[7,21],[7,21],[7,28],[7,28],[7,28],[7,28],[8,61],[8,61],[8,62],[8,62],[8,63],[8,63],[8,0],[8,0],[8,320],[8,320],[8,384],[8,384],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[7,27],[7,27],[7,27],[7,27],[8,59],[8,59],[8,60],[8,60],[9,1472],[9,1536],[9,1600],[9,1728],[7,18],[7,18],[7,18],[7,18],[7,24],[7,24],[7,24],[7,24],[8,49],[8,49],[8,50],[8,50],[8,51],[8,51],[8,52],[8,52],[7,25],[7,25],[7,25],[7,25],[8,55],[8,55],[8,56],[8,56],[8,57],[8,57],[8,58],[8,58],[6,192],[6,192],[6,192],[6,192],[6,192],[6,192],[6,192],[6,192],[6,1664],[6,1664],[6,1664],[6,1664],[6,1664],[6,1664],[6,1664],[6,1664],[8,448],[8,448],[8,512],[8,512],[9,704],[9,768],[8,640],[8,640],[8,576],[8,576],[9,832],[9,896],[9,960],[9,1024],[9,1088],[9,1152],[9,1216],[9,1280],[9,1344],[9,1408],[7,256],[7,256],[7,256],[7,256],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[6,16],[6,16],[6,16],[6,16],[6,16],[6,16],[6,16],[6,16],[6,17],[6,17],[6,17],[6,17],[6,17],[6,17],[6,17],[6,17],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[6,14],[6,14],[6,14],[6,14],[6,14],[6,14],[6,14],[6,14],[6,15],[6,15],[6,15],[6,15],[6,15],[6,15],[6,15],[6,15],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7]],i=[[-1,-1],[-1,-1],[12,-2],[12,-2],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[11,1792],[11,1792],[11,1792],[11,1792],[12,1984],[12,1984],[12,2048],[12,2048],[12,2112],[12,2112],[12,2176],[12,2176],[12,2240],[12,2240],[12,2304],[12,2304],[11,1856],[11,1856],[11,1856],[11,1856],[11,1920],[11,1920],[11,1920],[11,1920],[12,2368],[12,2368],[12,2432],[12,2432],[12,2496],[12,2496],[12,2560],[12,2560],[10,18],[10,18],[10,18],[10,18],[10,18],[10,18],[10,18],[10,18],[12,52],[12,52],[13,640],[13,704],[13,768],[13,832],[12,55],[12,55],[12,56],[12,56],[13,1280],[13,1344],[13,1408],[13,1472],[12,59],[12,59],[12,60],[12,60],[13,1536],[13,1600],[11,24],[11,24],[11,24],[11,24],[11,25],[11,25],[11,25],[11,25],[13,1664],[13,1728],[12,320],[12,320],[12,384],[12,384],[12,448],[12,448],[13,512],[13,576],[12,53],[12,53],[12,54],[12,54],[13,896],[13,960],[13,1024],[13,1088],[13,1152],[13,1216],[10,64],[10,64],[10,64],[10,64],[10,64],[10,64],[10,64],[10,64]],o=[[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[11,23],[11,23],[12,50],[12,51],[12,44],[12,45],[12,46],[12,47],[12,57],[12,58],[12,61],[12,256],[10,16],[10,16],[10,16],[10,16],[10,17],[10,17],[10,17],[10,17],[12,48],[12,49],[12,62],[12,63],[12,30],[12,31],[12,32],[12,33],[12,40],[12,41],[11,22],[11,22],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[9,15],[9,15],[9,15],[9,15],[9,15],[9,15],[9,15],[9,15],[12,128],[12,192],[12,26],[12,27],[12,28],[12,29],[11,19],[11,19],[11,20],[11,20],[12,34],[12,35],[12,36],[12,37],[12,38],[12,39],[11,21],[11,21],[12,42],[12,43],[10,0],[10,0],[10,0],[10,0],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12]],s=[[-1,-1],[-1,-1],[-1,-1],[-1,-1],[6,9],[6,8],[5,7],[5,7],[4,6],[4,6],[4,6],[4,6],[4,5],[4,5],[4,5],[4,5],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2]]
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
t.CCITTFaxDecoder=n},(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.Jbig2Stream=void 0
var a=r(135),n=r(142),i=r(146),o=r(4),s=function(){function e(e,t,r,a){this.stream=e,this.maybeLength=t,this.dict=r,this.params=a,n.DecodeStream.call(this,t)}return e.prototype=Object.create(n.DecodeStream.prototype),Object.defineProperty(e.prototype,"bytes",{get:function(){return(0,o.shadow)(this,"bytes",this.stream.getBytes(this.maybeLength))},configurable:!0}),e.prototype.ensureBuffer=function(e){},e.prototype.readBlock=function(){if(!this.eof){var e=new i.Jbig2Image,t=[]
if((0,a.isDict)(this.params)){var r=this.params.get("JBIG2Globals")
if((0,a.isStream)(r)){var n=r.getBytes()
t.push({data:n,start:0,end:n.length})}}t.push({data:this.bytes,start:0,end:this.bytes.length})
for(var o=e.parseChunks(t),s=o.length,c=0;c<s;c++)o[c]^=255
this.buffer=o,this.bufferLength=s,this.eof=!0}},e}()
t.Jbig2Stream=s},(e,t,r)=>{"use strict"
function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.Jbig2Image=void 0
var n=r(4),i=r(138),o=r(147),s=r(144)
function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,a=h(e)
if(t){var n=h(this).constructor
r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments)
return u(this,r)}}function u(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var f=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)})(r,e)
var t=l(r)
function r(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),t.call(this,"JBIG2 error: ".concat(e))}return r}(n.BaseException),d=function(){function e(){}function t(e,t,r){this.data=e,this.start=t,this.end=r}function r(e,t,r){var a=e.getContexts(t),n=1
function i(e){for(var t=0,i=0;i<e;i++){var o=r.readBit(a,n)
n=n<256?n<<1|o:511&(n<<1|o)|256,t=t<<1|o}return t>>>0}var o=i(1),s=i(1)?i(1)?i(1)?i(1)?i(1)?i(32)+4436:i(12)+340:i(8)+84:i(6)+20:i(4)+4:i(2)
return 0===o?s:s>0?-s:null}function a(e,t,r){for(var a=e.getContexts("IAID"),n=1,i=0;i<r;i++){n=n<<1|t.readBit(a,n)}return r<31?n&(1<<r)-1:2147483647&n}e.prototype={getContexts:function(e){return e in this?this[e]:this[e]=new Int8Array(65536)}},t.prototype={get decoder(){var e=new o.ArithmeticDecoder(this.data,this.start,this.end)
return(0,n.shadow)(this,"decoder",e)},get contextCache(){var t=new e
return(0,n.shadow)(this,"contextCache",t)}}
var c=["SymbolDictionary",null,null,null,"IntermediateTextRegion",null,"ImmediateTextRegion","ImmediateLosslessTextRegion",null,null,null,null,null,null,null,null,"PatternDictionary",null,null,null,"IntermediateHalftoneRegion",null,"ImmediateHalftoneRegion","ImmediateLosslessHalftoneRegion",null,null,null,null,null,null,null,null,null,null,null,null,"IntermediateGenericRegion",null,"ImmediateGenericRegion","ImmediateLosslessGenericRegion","IntermediateGenericRefinementRegion",null,"ImmediateGenericRefinementRegion","ImmediateLosslessGenericRefinementRegion",null,null,null,null,"PageInformation","EndOfPage","EndOfStripe","EndOfFile","Profiles","Tables",null,null,null,null,null,null,null,null,"Extension"],l=[[{x:-1,y:-2},{x:0,y:-2},{x:1,y:-2},{x:-2,y:-1},{x:-1,y:-1},{x:0,y:-1},{x:1,y:-1},{x:2,y:-1},{x:-4,y:0},{x:-3,y:0},{x:-2,y:0},{x:-1,y:0}],[{x:-1,y:-2},{x:0,y:-2},{x:1,y:-2},{x:2,y:-2},{x:-2,y:-1},{x:-1,y:-1},{x:0,y:-1},{x:1,y:-1},{x:2,y:-1},{x:-3,y:0},{x:-2,y:0},{x:-1,y:0}],[{x:-1,y:-2},{x:0,y:-2},{x:1,y:-2},{x:-2,y:-1},{x:-1,y:-1},{x:0,y:-1},{x:1,y:-1},{x:-2,y:0},{x:-1,y:0}],[{x:-3,y:-1},{x:-2,y:-1},{x:-1,y:-1},{x:0,y:-1},{x:1,y:-1},{x:-4,y:0},{x:-3,y:0},{x:-2,y:0},{x:-1,y:0}]],u=[{coding:[{x:0,y:-1},{x:1,y:-1},{x:-1,y:0}],reference:[{x:0,y:-1},{x:1,y:-1},{x:-1,y:0},{x:0,y:0},{x:1,y:0},{x:-1,y:1},{x:0,y:1},{x:1,y:1}]},{coding:[{x:-1,y:-1},{x:0,y:-1},{x:1,y:-1},{x:-1,y:0}],reference:[{x:0,y:-1},{x:-1,y:0},{x:0,y:0},{x:1,y:0},{x:0,y:1},{x:1,y:1}]}],h=[39717,1941,229,405],d=[32,8]
function p(e,t,r,a,n,i,o,s){if(e)return F(new P(s.data,s.start,s.end),t,r,!1)
if(0===a&&!i&&!n&&4===o.length&&3===o[0].x&&-1===o[0].y&&-3===o[1].x&&-1===o[1].y&&2===o[2].x&&-2===o[2].y&&-2===o[3].x&&-2===o[3].y)return function(e,t,r){var a,n,i,o,s,c,l,u=r.decoder,h=r.contextCache.getContexts("GB"),f=[]
for(n=0;n<t;n++)for(s=f[n]=new Uint8Array(e),c=n<1?s:f[n-1],a=(l=n<2?s:f[n-2])[0]<<13|l[1]<<12|l[2]<<11|c[0]<<7|c[1]<<6|c[2]<<5|c[3]<<4,i=0;i<e;i++)s[i]=o=u.readBit(h,a),a=(31735&a)<<1|(i+3<e?l[i+3]<<11:0)|(i+4<e?c[i+4]<<4:0)|o
return f}(t,r,s)
var c=!!i,u=l[a].concat(o)
u.sort((function(e,t){return e.y-t.y||e.x-t.x}))
var f,d,p=u.length,g=new Int8Array(p),m=new Int8Array(p),v=[],b=0,y=0,w=0,k=0
for(d=0;d<p;d++)g[d]=u[d].x,m[d]=u[d].y,y=Math.min(y,u[d].x),w=Math.max(w,u[d].x),k=Math.min(k,u[d].y),d<p-1&&u[d].y===u[d+1].y&&u[d].x===u[d+1].x-1?b|=1<<p-1-d:v.push(d)
var S=v.length,x=new Int8Array(S),C=new Int8Array(S),A=new Uint16Array(S)
for(f=0;f<S;f++)d=v[f],x[f]=u[d].x,C[f]=u[d].y,A[f]=1<<p-1-d
for(var O,T,I,E,_,R=-y,B=-k,M=t-w,D=h[a],L=new Uint8Array(t),N=[],U=s.decoder,j=s.contextCache.getContexts("GB"),q=0,z=0,G=0;G<r;G++){if(n)if(q^=U.readBit(j,D)){N.push(L)
continue}for(L=new Uint8Array(L),N.push(L),O=0;O<t;O++)if(c&&i[G][O])L[O]=0
else{if(O>=R&&O<M&&G>=B)for(z=z<<1&b,d=0;d<S;d++)T=G+C[d],I=O+x[d],(E=N[T][I])&&(z|=E=A[d])
else for(z=0,_=p-1,d=0;d<p;d++,_--)(I=O+g[d])>=0&&I<t&&(T=G+m[d])>=0&&(E=N[T][I])&&(z|=E<<_)
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
var P=new Uint8Array(e)
C.push(P)
for(var E=0;E<e;E++){var _,F,R=0
for(h=0;h<p;h++)_=I+m[h],F=E+g[h],_<0||F<0||F>=e?R<<=1:R=R<<1|C[_][F]
for(h=0;h<b;h++)_=I+w[h]-i,F=E+y[h]-n,_<0||_>=S||F<0||F>=k?R<<=1:R=R<<1|a[_][F]
var B=A.readBit(O,R)
P[E]=B}}return C}function m(e,t,n,i,o,s,c,l,u,h,d,p,m,v,b,y,w,k,S){if(e&&t)throw new f("refinement with Huffman is not supported")
var x,C,A=[]
for(x=0;x<i;x++){if(C=new Uint8Array(n),o)for(var O=0;O<n;O++)C[O]=o
A.push(C)}var T=w.decoder,I=w.contextCache,P=e?-v.tableDeltaT.decode(S):-r(I,"IADT",T),E=0
for(x=0;x<s;){P+=e?v.tableDeltaT.decode(S):r(I,"IADT",T)
for(var _=E+=e?v.tableFirstS.decode(S):r(I,"IAFS",T);;){var F=0
c>1&&(F=e?S.readBits(k):r(I,"IAIT",T))
var R=c*P+F,B=e?v.symbolIDTable.decode(S):a(I,T,u),M=t&&(e?S.readBit():r(I,"IARI",T)),D=l[B],L=D[0].length,N=D.length
if(M){var U=r(I,"IARDW",T),j=r(I,"IARDH",T)
D=g(L+=U,N+=j,b,D,(U>>1)+r(I,"IARDX",T),(j>>1)+r(I,"IARDY",T),!1,y,w)}var q,z,G,H=R-(1&p?0:N-1),W=_-(2&p?L-1:0)
if(h){for(q=0;q<N;q++)if(C=A[W+q]){G=D[q]
var X=Math.min(n-H,L)
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
r.number=(0,i.readUint32)(e,t)
var a=e[t+4],n=63&a
if(!c[n])throw new f("invalid segment type: "+n)
r.type=n,r.typeName=c[n],r.deferredNonRetain=!!(128&a)
var o=!!(64&a),s=e[t+5],l=s>>5&7,u=[31&s],h=t+6
if(7===s){l=536870911&(0,i.readUint32)(e,h-1),h+=3
var d=l+7>>3
for(u[0]=e[h++];--d>0;)u.push(e[h++])}else if(5===s||6===s)throw new f("invalid referred-to flags")
r.retainBits=u
var p=4
r.number<=256?p=1:r.number<=65536&&(p=2)
var g,m,v=[]
for(g=0;g<l;g++){var b=void 0
b=1===p?e[h]:2===p?(0,i.readUint16)(e,h):(0,i.readUint32)(e,h),v.push(b),h+=p}if(r.referredTo=v,o?(r.pageAssociation=(0,i.readUint32)(e,h),h+=4):r.pageAssociation=e[h++],r.length=(0,i.readUint32)(e,h),h+=4,4294967295===r.length){if(38!==n)throw new f("invalid unknown segment length")
var k=y(e,h),S=!!(1&e[h+w]),x=new Uint8Array(6)
for(S||(x[0]=255,x[1]=172),x[2]=k.height>>>24&255,x[3]=k.height>>16&255,x[4]=k.height>>8&255,x[5]=255&k.height,g=h,m=e.length;g<m;g++){for(var C=0;C<6&&x[C]===e[g+C];)C++
if(6===C){r.length=g+6
break}}if(4294967295===r.length)throw new f("segment end was not found")}return r.headerEnd=h,r}function b(e,t,r,a){for(var n=[],i=r;i<a;){var o=v(t,i)
i=o.headerEnd
var s={header:o,data:t}
if(e.randomAccess||(s.start=i,i+=o.length,s.end=i),n.push(s),51===o.type)break}if(e.randomAccess)for(var c=0,l=n.length;c<l;c++)n[c].start=i,i+=n[c].header.length,n[c].end=i
return n}function y(e,t){return{width:(0,i.readUint32)(e,t),height:(0,i.readUint32)(e,t+4),x:(0,i.readUint32)(e,t+8),y:(0,i.readUint32)(e,t+12),combinationOperator:7&e[t+16]}}var w=17
function k(e,t){var r,a,n,o,s=e.header,c=e.data,l=e.start,u=e.end
switch(s.type){case 0:var h={},d=(0,i.readUint16)(c,l)
if(h.huffman=!!(1&d),h.refinement=!!(2&d),h.huffmanDHSelector=d>>2&3,h.huffmanDWSelector=d>>4&3,h.bitmapSizeSelector=d>>6&1,h.aggregationInstancesSelector=d>>7&1,h.bitmapCodingContextUsed=!!(256&d),h.bitmapCodingContextRetained=!!(512&d),h.template=d>>10&3,h.refinementTemplate=d>>12&1,l+=2,!h.huffman){for(o=0===h.template?4:1,a=[],n=0;n<o;n++)a.push({x:(0,i.readInt8)(c,l),y:(0,i.readInt8)(c,l+1)}),l+=2
h.at=a}if(h.refinement&&!h.refinementTemplate){for(a=[],n=0;n<2;n++)a.push({x:(0,i.readInt8)(c,l),y:(0,i.readInt8)(c,l+1)}),l+=2
h.refinementAt=a}h.numberOfExportedSymbols=(0,i.readUint32)(c,l),l+=4,h.numberOfNewSymbols=(0,i.readUint32)(c,l),l+=4,r=[h,s.number,s.referredTo,c,l,u]
break
case 6:case 7:var p={}
p.info=y(c,l),l+=w
var g=(0,i.readUint16)(c,l)
if(l+=2,p.huffman=!!(1&g),p.refinement=!!(2&g),p.logStripSize=g>>2&3,p.stripSize=1<<p.logStripSize,p.referenceCorner=g>>4&3,p.transposed=!!(64&g),p.combinationOperator=g>>7&3,p.defaultPixelValue=g>>9&1,p.dsOffset=g<<17>>27,p.refinementTemplate=g>>15&1,p.huffman){var m=(0,i.readUint16)(c,l)
l+=2,p.huffmanFS=3&m,p.huffmanDS=m>>2&3,p.huffmanDT=m>>4&3,p.huffmanRefinementDW=m>>6&3,p.huffmanRefinementDH=m>>8&3,p.huffmanRefinementDX=m>>10&3,p.huffmanRefinementDY=m>>12&3,p.huffmanRefinementSizeSelector=!!(16384&m)}if(p.refinement&&!p.refinementTemplate){for(a=[],n=0;n<2;n++)a.push({x:(0,i.readInt8)(c,l),y:(0,i.readInt8)(c,l+1)}),l+=2
p.refinementAt=a}p.numberOfSymbolInstances=(0,i.readUint32)(c,l),l+=4,r=[p,s.referredTo,c,l,u]
break
case 16:var v={},b=c[l++]
v.mmr=!!(1&b),v.template=b>>1&3,v.patternWidth=c[l++],v.patternHeight=c[l++],v.maxPatternIndex=(0,i.readUint32)(c,l),l+=4,r=[v,s.number,c,l,u]
break
case 22:case 23:var k={}
k.info=y(c,l),l+=w
var S=c[l++]
k.mmr=!!(1&S),k.template=S>>1&3,k.enableSkip=!!(8&S),k.combinationOperator=S>>4&7,k.defaultPixelValue=S>>7&1,k.gridWidth=(0,i.readUint32)(c,l),l+=4,k.gridHeight=(0,i.readUint32)(c,l),l+=4,k.gridOffsetX=4294967295&(0,i.readUint32)(c,l),l+=4,k.gridOffsetY=4294967295&(0,i.readUint32)(c,l),l+=4,k.gridVectorX=(0,i.readUint16)(c,l),l+=2,k.gridVectorY=(0,i.readUint16)(c,l),l+=2,r=[k,s.referredTo,c,l,u]
break
case 38:case 39:var x={}
x.info=y(c,l),l+=w
var C=c[l++]
if(x.mmr=!!(1&C),x.template=C>>1&3,x.prediction=!!(8&C),!x.mmr){for(o=0===x.template?4:1,a=[],n=0;n<o;n++)a.push({x:(0,i.readInt8)(c,l),y:(0,i.readInt8)(c,l+1)}),l+=2
x.at=a}r=[x,c,l,u]
break
case 48:var A={width:(0,i.readUint32)(c,l),height:(0,i.readUint32)(c,l+4),resolutionX:(0,i.readUint32)(c,l+8),resolutionY:(0,i.readUint32)(c,l+12)}
4294967295===A.height&&delete A.height
var O=c[l+16];(0,i.readUint16)(c,l+17),A.lossless=!!(1&O),A.refinement=!!(2&O),A.defaultPixelValue=O>>2&1,A.combinationOperator=O>>3&3,A.requiresBuffer=!!(32&O),A.combinationOperatorOverride=!!(64&O),r=[A]
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
this.drawBitmap(i,s)},onImmediateLosslessGenericRegion:function(){this.onImmediateGenericRegion.apply(this,arguments)},onSymbolDictionary:function(e,n,o,s,c,l){var u,h
e.huffman&&(u=function(e,t,r){var a,n,i,o,s=0
switch(e.huffmanDHSelector){case 0:case 1:a=I(e.huffmanDHSelector+4)
break
case 3:a=E(s,t,r),s++
break
default:throw new f("invalid Huffman DH selector")}switch(e.huffmanDWSelector){case 0:case 1:n=I(e.huffmanDWSelector+2)
break
case 3:n=E(s,t,r),s++
break
default:throw new f("invalid Huffman DW selector")}e.bitmapSizeSelector?(i=E(s,t,r),s++):i=I(1)
o=e.aggregationInstancesSelector?E(s,t,r):I(1)
return{tableDeltaHeight:a,tableDeltaWidth:n,tableBitmapSize:i,tableAggregateInstances:o}}(e,o,this.customTables),h=new P(s,c,l))
var d=this.symbols
d||(this.symbols=d={})
for(var v=[],b=0,y=o.length;b<y;b++){var w=d[o[b]]
w&&(v=v.concat(w))}var k=new t(s,c,l)
d[n]=function(e,t,n,o,s,c,l,u,h,d,v,b){if(e&&t)throw new f("symbol refinement with Huffman is not supported")
var y,w,k=[],S=0,x=(0,i.log2)(n.length+o),C=v.decoder,A=v.contextCache
for(e&&(y=I(1),w=[],x=Math.max(x,1));k.length<o;){S+=e?c.tableDeltaHeight.decode(b):r(A,"IADH",C)
for(var O=0,T=0,P=e?w.length:0;;){var E,R=e?c.tableDeltaWidth.decode(b):r(A,"IADW",C)
if(null===R)break
if(T+=O+=R,t){var B=r(A,"IAAI",C)
if(B>1)E=m(e,t,O,S,0,B,1,n.concat(k),x,0,0,1,0,c,h,d,v,0,b)
else{var M=a(A,C,x),D=r(A,"IARDX",C),L=r(A,"IARDY",C)
E=g(O,S,h,M<n.length?n[M]:k[M-n.length],D,L,!1,d,v)}k.push(E)}else e?w.push(O):(E=p(!1,O,S,l,!1,null,u,v),k.push(E))}if(e&&!t){var N=c.tableBitmapSize.decode(b)
b.byteAlign()
var U=void 0
if(0===N)U=_(b,T,S)
else{var j=b.end,q=b.position+N
b.end=q,U=F(b,T,S,!1),b.end=j,b.position=q}var z=w.length
if(P===z-1)k.push(U)
else{var G=void 0,H=void 0,W=0,X=void 0,V=void 0
for(G=P;G<z;G++){for(X=W+w[G],V=[],H=0;H<S;H++)V.push(U[H].subarray(W,X))
k.push(V),W=X}}}}for(var K=[],Y=[],J=!1,Z=n.length+o;Y.length<Z;){for(var Q=e?y.decode(b):r(A,"IAEX",C);Q--;)Y.push(J)
J=!J}for(var $=0,ee=n.length;$<ee;$++)Y[$]&&K.push(n[$])
for(var te=0;te<o;$++,te++)Y[$]&&K.push(k[te])
return K}(e.huffman,e.refinement,v,e.numberOfNewSymbols,e.numberOfExportedSymbols,u,e.template,e.at,e.refinementTemplate,e.refinementAt,k,h)},onImmediateTextRegion:function(e,r,a,n,o){for(var s,c,l=e.info,u=this.symbols,h=[],d=0,p=r.length;d<p;d++){var g=u[r[d]]
g&&(h=h.concat(g))}var v=(0,i.log2)(h.length)
e.huffman&&(c=new P(a,n,o),s=function(e,t,r,a,n){for(var i=[],o=0;o<=34;o++){var s=n.readBits(4)
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
case 3:g=E(y,t,r),y++
break
default:throw new f("invalid Huffman FS selector")}switch(e.huffmanDS){case 0:case 1:case 2:m=I(e.huffmanDS+8)
break
case 3:m=E(y,t,r),y++
break
default:throw new f("invalid Huffman DS selector")}switch(e.huffmanDT){case 0:case 1:case 2:v=I(e.huffmanDT+11)
break
case 3:v=E(y,t,r),y++
break
default:throw new f("invalid Huffman DT selector")}if(e.refinement)throw new f("refinement with Huffman is not supported")
return{symbolIDTable:b,tableFirstS:g,tableDeltaS:m,tableDeltaT:v}}(e,r,this.customTables,h.length,c))
var b=new t(a,n,o),y=m(e.huffman,e.refinement,l.width,l.height,e.defaultPixelValue,e.numberOfSymbolInstances,e.stripSize,h,v,e.transposed,e.dsOffset,e.referenceCorner,e.combinationOperator,s,e.refinementTemplate,e.refinementAt,b,e.logStripSize,c)
this.drawBitmap(l,y)},onImmediateLosslessTextRegion:function(){this.onImmediateTextRegion.apply(this,arguments)},onPatternDictionary:function(e,r,a,n,i){var o=this.patterns
o||(this.patterns=o={})
var s=new t(a,n,i)
o[r]=function(e,t,r,a,n,i){var o=[]
e||(o.push({x:-t,y:0}),0===n&&(o.push({x:-3,y:-1}),o.push({x:2,y:-2}),o.push({x:-2,y:-2})))
for(var s=p(e,(a+1)*t,r,n,!1,null,o,i),c=[],l=0;l<=a;l++){for(var u=[],h=t*l,f=h+t,d=0;d<r;d++)u.push(s[d].subarray(h,f))
c.push(u)}return c}(e.mmr,e.patternWidth,e.patternHeight,e.maxPatternIndex,e.template,s)},onImmediateHalftoneRegion:function(e,r,a,n,o){var s=this.patterns[r[0]],c=e.info,l=new t(a,n,o),u=function(e,t,r,a,n,o,s,c,l,u,h,d,g,m,v){if(s)throw new f("skip is not supported")
if(0!==c)throw new f("operator "+c+" is not supported in halftone region")
var b,y,w,k=[]
for(b=0;b<n;b++){if(w=new Uint8Array(a),o)for(y=0;y<a;y++)w[y]=o
k.push(w)}var S=t.length,x=t[0],C=x[0].length,A=x.length,O=(0,i.log2)(S),T=[]
e||(T.push({x:r<=1?3:2,y:-1}),0===r&&(T.push({x:-3,y:-1}),T.push({x:2,y:-2}),T.push({x:-2,y:-2})))
var I,E,_,R,B,M,D,L,N,U,j,q=[]
for(e&&(I=new P(v.data,v.start,v.end)),b=O-1;b>=0;b--)E=e?F(I,l,u,!0):p(!1,l,u,r,!1,null,T,v),q[b]=E
for(_=0;_<u;_++)for(R=0;R<l;R++){for(B=0,M=0,y=O-1;y>=0;y--)M|=(B=q[y][_][R]^B)<<y
if(D=t[M],N=d+_*g-R*m>>8,(L=h+_*m+R*g>>8)>=0&&L+C<=a&&N>=0&&N+A<=n)for(b=0;b<A;b++)for(j=k[N+b],U=D[b],y=0;y<C;y++)j[L+y]|=U[y]
else{var z=void 0,G=void 0
for(b=0;b<A;b++)if(!((G=N+b)<0||G>=n))for(j=k[G],U=D[b],y=0;y<C;y++)(z=L+y)>=0&&z<a&&(j[z]|=U[y])}}return k}(e.mmr,s,e.template,c.width,c.height,e.defaultPixelValue,e.enableSkip,e.combinationOperator,e.gridWidth,e.gridHeight,e.gridOffsetX,e.gridOffsetY,e.gridVectorX,e.gridVectorY,l)
this.drawBitmap(c,u)},onImmediateLosslessHalftoneRegion:function(){this.onImmediateHalftoneRegion.apply(this,arguments)},onTables:function(e,t,r,a){var n=this.customTables
n||(this.customTables=n={}),n[e]=function(e,t,r){var a,n,o=e[t],s=4294967295&(0,i.readUint32)(e,t+1),c=4294967295&(0,i.readUint32)(e,t+5),l=new P(e,t+9,r),u=1+(o>>1&7),h=1+(o>>4&7),f=[],d=s
do{a=l.readBits(u),n=l.readBits(h),f.push(new C([d,a,n,0])),d+=1<<n}while(d<c)
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
return r=new O(t,!0),T[e]=r,r}function P(e,t,r){this.data=e,this.start=t,this.end=r,this.position=t,this.shift=-1,this.currentByte=0}function E(e,t,r){for(var a=0,n=0,i=t.length;n<i;n++){var o=r[t[n]]
if(o){if(e===a)return o
a++}}throw new f("can't find custom Huffman table")}function _(e,t,r){for(var a=[],n=0;n<r;n++){var i=new Uint8Array(t)
a.push(i)
for(var o=0;o<t;o++)i[o]=e.readBit()
e.byteAlign()}return a}function F(e,t,r,a){for(var n,i={K:-1,Columns:t,Rows:r,BlackIs1:!0,EndOfBlock:a},o=new s.CCITTFaxDecoder(e,i),c=[],l=!1,u=0;u<r;u++){var h=new Uint8Array(t)
c.push(h)
for(var f=-1,d=0;d<t;d++)f<0&&(-1===(n=o.readNextChar())&&(n=0,l=!0),f=7),h[d]=n>>f&1,f--}if(a&&!l)for(var p=0;p<5&&-1!==o.readNextChar();p++);return c}function R(){}return P.prototype={readBit:function(){if(this.shift<0){if(this.position>=this.end)throw new f("end of data while reading bit")
this.currentByte=this.data[this.position++],this.shift=7}var e=this.currentByte>>this.shift&1
return this.shift--,e},readBits:function(e){var t,r=0
for(t=e-1;t>=0;t--)r|=this.readBit()<<t
return r},byteAlign:function(){this.shift=-1},next:function(){return this.position>=this.end?-1:this.data[this.position++]}},R.prototype={parseChunks:function(e){return function(e){for(var t=new x,r=0,a=e.length;r<a;r++){var n=e[r]
S(b({},n.data,n.start,n.end),t)}return t.buffer}(e)},parse:function(e){var t=function(e){var t=e.length,r=0
if(151!==e[r]||74!==e[r+1]||66!==e[r+2]||50!==e[r+3]||13!==e[r+4]||10!==e[r+5]||26!==e[r+6]||10!==e[r+7])throw new f("parseJbig2 - invalid header.")
var a=Object.create(null)
r+=8
var n=e[r++]
a.randomAccess=!(1&n),2&n||(a.numberOfPages=(0,i.readUint32)(e,r),r+=4)
var o=b(a,e,r,t),s=new x
S(o,s)
for(var c=s.currentPageInfo,l=c.width,u=c.height,h=s.buffer,d=new Uint8ClampedArray(l*u),p=0,g=0,m=0;m<u;m++)for(var v=0,y=void 0,w=0;w<l;w++)v||(v=128,y=h[g++]),d[p++]=y&v?0:255,v>>=1
return{imgData:d,width:l,height:u}}(e),r=t.imgData,a=t.width,n=t.height
return this.width=a,this.height=n,r}},R}()
t.Jbig2Image=d},(e,t)=>{"use strict"
function r(e,t){for(var r=0;r<t.length;r++){var a=t[r]
a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}Object.defineProperty(t,"__esModule",{value:!0}),t.ArithmeticDecoder=void 0
var a=[{qe:22017,nmps:1,nlps:1,switchFlag:1},{qe:13313,nmps:2,nlps:6,switchFlag:0},{qe:6145,nmps:3,nlps:9,switchFlag:0},{qe:2753,nmps:4,nlps:12,switchFlag:0},{qe:1313,nmps:5,nlps:29,switchFlag:0},{qe:545,nmps:38,nlps:33,switchFlag:0},{qe:22017,nmps:7,nlps:6,switchFlag:1},{qe:21505,nmps:8,nlps:14,switchFlag:0},{qe:18433,nmps:9,nlps:14,switchFlag:0},{qe:14337,nmps:10,nlps:14,switchFlag:0},{qe:12289,nmps:11,nlps:17,switchFlag:0},{qe:9217,nmps:12,nlps:18,switchFlag:0},{qe:7169,nmps:13,nlps:20,switchFlag:0},{qe:5633,nmps:29,nlps:21,switchFlag:0},{qe:22017,nmps:15,nlps:14,switchFlag:1},{qe:21505,nmps:16,nlps:14,switchFlag:0},{qe:20737,nmps:17,nlps:15,switchFlag:0},{qe:18433,nmps:18,nlps:16,switchFlag:0},{qe:14337,nmps:19,nlps:17,switchFlag:0},{qe:13313,nmps:20,nlps:18,switchFlag:0},{qe:12289,nmps:21,nlps:19,switchFlag:0},{qe:10241,nmps:22,nlps:19,switchFlag:0},{qe:9217,nmps:23,nlps:20,switchFlag:0},{qe:8705,nmps:24,nlps:21,switchFlag:0},{qe:7169,nmps:25,nlps:22,switchFlag:0},{qe:6145,nmps:26,nlps:23,switchFlag:0},{qe:5633,nmps:27,nlps:24,switchFlag:0},{qe:5121,nmps:28,nlps:25,switchFlag:0},{qe:4609,nmps:29,nlps:26,switchFlag:0},{qe:4353,nmps:30,nlps:27,switchFlag:0},{qe:2753,nmps:31,nlps:28,switchFlag:0},{qe:2497,nmps:32,nlps:29,switchFlag:0},{qe:2209,nmps:33,nlps:30,switchFlag:0},{qe:1313,nmps:34,nlps:31,switchFlag:0},{qe:1089,nmps:35,nlps:32,switchFlag:0},{qe:673,nmps:36,nlps:33,switchFlag:0},{qe:545,nmps:37,nlps:34,switchFlag:0},{qe:321,nmps:38,nlps:35,switchFlag:0},{qe:273,nmps:39,nlps:36,switchFlag:0},{qe:133,nmps:40,nlps:37,switchFlag:0},{qe:73,nmps:41,nlps:38,switchFlag:0},{qe:37,nmps:42,nlps:39,switchFlag:0},{qe:21,nmps:43,nlps:40,switchFlag:0},{qe:9,nmps:44,nlps:41,switchFlag:0},{qe:5,nmps:45,nlps:42,switchFlag:0},{qe:1,nmps:45,nlps:43,switchFlag:0},{qe:22017,nmps:46,nlps:46,switchFlag:0}],n=function(){function e(t,r,a){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.data=t,this.bp=r,this.dataEnd=a,this.chigh=t[r],this.clow=0,this.byteIn(),this.chigh=this.chigh<<7&65535|this.clow>>9&127,this.clow=this.clow<<7&65535,this.ct-=7,this.a=32768}var t,n,i
return t=e,(n=[{key:"byteIn",value:function(){var e=this.data,t=this.bp
255===e[t]?e[t+1]>143?(this.clow+=65280,this.ct=8):(t++,this.clow+=e[t]<<9,this.ct=7,this.bp=t):(t++,this.clow+=t<this.dataEnd?e[t]<<8:65280,this.ct=8,this.bp=t),this.clow>65535&&(this.chigh+=this.clow>>16,this.clow&=65535)}},{key:"readBit",value:function(e,t){var r,n=e[t]>>1,i=1&e[t],o=a[n],s=o.qe,c=this.a-s
if(this.chigh<s)c<s?(c=s,r=i,n=o.nmps):(c=s,r=1^i,1===o.switchFlag&&(i=r),n=o.nlps)
else{if(this.chigh-=s,0!=(32768&c))return this.a=c,i
c<s?(r=1^i,1===o.switchFlag&&(i=r),n=o.nlps):(r=i,n=o.nmps)}do{0===this.ct&&this.byteIn(),c<<=1,this.chigh=this.chigh<<1&65535|this.clow>>15&1,this.clow=this.clow<<1&65535,this.ct--}while(0==(32768&c))
return this.a=c,e[t]=n<<1|i,r}}])&&r(t.prototype,n),i&&r(t,i),e}()
t.ArithmeticDecoder=n},(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.JpegStream=void 0
var a=r(142),n=r(135),i=r(149),o=r(4),s=function(){function e(e,t,r,n){for(var i;-1!==(i=e.getByte());)if(255===i){e.skip(-1)
break}this.stream=e,this.maybeLength=t,this.dict=r,this.params=n,a.DecodeStream.call(this,t)}return e.prototype=Object.create(a.DecodeStream.prototype),Object.defineProperty(e.prototype,"bytes",{get:function(){return(0,o.shadow)(this,"bytes",this.stream.getBytes(this.maybeLength))},configurable:!0}),e.prototype.ensureBuffer=function(e){},e.prototype.readBlock=function(){if(!this.eof){var e={decodeTransform:void 0,colorTransform:void 0},t=this.dict.getArray("Decode","D")
if(this.forceRGB&&Array.isArray(t)){for(var r=this.dict.get("BitsPerComponent")||8,a=t.length,o=new Int32Array(a),s=!1,c=(1<<r)-1,l=0;l<a;l+=2)o[l]=256*(t[l+1]-t[l])|0,o[l+1]=t[l]*c|0,256===o[l]&&0===o[l+1]||(s=!0)
s&&(e.decodeTransform=o)}if((0,n.isDict)(this.params)){var u=this.params.get("ColorTransform")
Number.isInteger(u)&&(e.colorTransform=u)}var h=new i.JpegImage(e)
h.parse(this.bytes)
var f=h.getData({width:this.drawWidth,height:this.drawHeight,forceRGB:this.forceRGB,isSourcePDF:!0})
this.buffer=f,this.bufferLength=f.length,this.eof=!0}},e}()
t.JpegStream=s},(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.JpegImage=void 0
var a=r(4),n=r(138)
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
i+=16}}}function P(e,t){var r=A(e.huffmanTableDC),a=0===r?0:T(r)<<g
e.blockData[t]=e.pred+=a}function E(e,t){e.blockData[t]|=C()<<g}var _=0
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
H=y?0===l?0===h?P:E:0===h?F:M:I
var X,V,K,Y,J=0
for(V=1===W?s[0].blocksPerLine*s[0].blocksPerColumn:b*o.mcusPerColumn;J<=V;){var Z=c?Math.min(V-J,c):V
if(Z>0){for(j=0;j<W;j++)s[j].pred=0
if(_=0,1===W)for(U=s[0],G=0;G<Z;G++)N(U,H,J),J++
else for(G=0;G<Z;G++){for(j=0;j<W;j++)for(K=(U=s[j]).h,Y=U.v,q=0;q<Y;q++)for(z=0;z<K;z++)L(U,H,J,q,z)
J++}}if(x=0,!(X=k(t,r)))break
if(X.invalid){var Q=Z>0?"unexpected":"excessive";(0,a.warn)("decodeScan - ".concat(Q," MCU data, current marker is: ").concat(X.invalid)),r=X.offset}if(!(X.marker>=65488&&X.marker<=65495))break
r+=2}return r-w}function y(e,a,n){var i,d,p,g,m,v,b,y,w,k,S,x,C,A,O,T,I,P=e.quantizationTable,E=e.blockData
if(!P)throw new f("missing required Quantization Table.")
for(var _=0;_<64;_+=8)w=E[a+_],k=E[a+_+1],S=E[a+_+2],x=E[a+_+3],C=E[a+_+4],A=E[a+_+5],O=E[a+_+6],T=E[a+_+7],w*=P[_],0!=(k|S|x|C|A|O|T)?(k*=P[_+1],S*=P[_+2],x*=P[_+3],C*=P[_+4],A*=P[_+5],O*=P[_+6],T*=P[_+7],d=(i=(i=u*w+128>>8)+(d=u*C+128>>8)+1>>1)-d,I=(p=S)*l+(g=O)*c+128>>8,p=p*c-g*l+128>>8,b=(m=(m=h*(k-T)+128>>8)+(b=A<<4)+1>>1)-b,v=(y=(y=h*(k+T)+128>>8)+(v=x<<4)+1>>1)-v,g=(i=i+(g=I)+1>>1)-g,p=(d=d+p+1>>1)-p,I=m*s+y*o+2048>>12,m=m*o-y*s+2048>>12,y=I,I=v*r+b*t+2048>>12,v=v*t-b*r+2048>>12,b=I,n[_]=i+y,n[_+7]=i-y,n[_+1]=d+b,n[_+6]=d-b,n[_+2]=p+v,n[_+5]=p-v,n[_+3]=g+m,n[_+4]=g-m):(I=u*w+512>>10,n[_]=I,n[_+1]=I,n[_+2]=I,n[_+3]=I,n[_+4]=I,n[_+5]=I,n[_+6]=I,n[_+7]=I)
for(var F=0;F<8;++F)w=n[F],0!=((k=n[F+8])|(S=n[F+16])|(x=n[F+24])|(C=n[F+32])|(A=n[F+40])|(O=n[F+48])|(T=n[F+56]))?(d=(i=4112+((i=u*w+2048>>12)+(d=u*C+2048>>12)+1>>1))-d,I=(p=S)*l+(g=O)*c+2048>>12,p=p*c-g*l+2048>>12,g=I,b=(m=(m=h*(k-T)+2048>>12)+(b=A)+1>>1)-b,v=(y=(y=h*(k+T)+2048>>12)+(v=x)+1>>1)-v,I=m*s+y*o+2048>>12,m=m*o-y*s+2048>>12,y=I,I=v*r+b*t+2048>>12,v=v*t-b*r+2048>>12,(w=(i=i+g+1>>1)+y)<16?w=0:w>=4080?w=255:w>>=4,(k=(d=d+p+1>>1)+(b=I))<16?k=0:k>=4080?k=255:k>>=4,(S=(p=d-p)+v)<16?S=0:S>=4080?S=255:S>>=4,(x=(g=i-g)+m)<16?x=0:x>=4080?x=255:x>>=4,(C=g-m)<16?C=0:C>=4080?C=255:C>>=4,(A=p-v)<16?A=0:A>=4080?A=255:A>>=4,(O=d-b)<16?O=0:O>=4080?O=255:O>>=4,(T=i-y)<16?T=0:T>=4080?T=255:T>>=4,E[a+F]=w,E[a+F+8]=k,E[a+F+16]=S,E[a+F+24]=x,E[a+F+32]=C,E[a+F+40]=A,E[a+F+48]=O,E[a+F+56]=T):(I=(I=u*w+8192>>14)<-2040?0:I>=2024?255:I+2056>>4,E[a+F]=I,E[a+F+8]=I,E[a+F+16]=I,E[a+F+24]=I,E[a+F+32]=I,E[a+F+40]=I,E[a+F+48]=I,E[a+F+56]=I)}function w(e,t){for(var r=t.blocksPerLine,a=t.blocksPerColumn,n=new Int16Array(64),i=0;i<a;i++)for(var o=0;o<r;o++){y(t,v(t,i,o),n)}return t.blockData}function k(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,a=e.length-1,i=r<t?r:t
if(t>=a)return null
var o=(0,n.readUint16)(e,t)
if(o>=65472&&o<=65534)return{invalid:null,marker:o,offset:t}
for(var s=(0,n.readUint16)(e,i);!(s>=65472&&s<=65534);){if(++i>=a)return null
s=(0,n.readUint16)(e,i)}return{invalid:o.toString(16),marker:s,offset:i}}return g.prototype={parse:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=r.dnlScanLines,o=void 0===i?null:i
function s(){var e=(0,n.readUint16)(t,h),r=(h+=2)+e-2,i=k(t,r,h)
i&&i.invalid&&((0,a.warn)("readDataBlock - incorrect length, current marker is: "+i.invalid),r=i.offset)
var o=t.subarray(h,r)
return h+=o.length,o}function c(e){for(var t=Math.ceil(e.samplesPerLine/8/e.maxH),r=Math.ceil(e.scanLines/8/e.maxV),a=0;a<e.components.length;a++){K=e.components[a]
var n=Math.ceil(Math.ceil(e.samplesPerLine/8)*K.h/e.maxH),i=Math.ceil(Math.ceil(e.scanLines/8)*K.v/e.maxV),o=t*K.h,s=64*(r*K.v)*(o+1)
K.blockData=new Int16Array(s),K.blocksPerLine=n,K.blocksPerColumn=i}e.mcusPerLine=t,e.mcusPerColumn=r}var l,u,h=0,g=null,v=null,y=0,S=[],x=[],C=[],A=(0,n.readUint16)(t,h)
if(h+=2,65496!==A)throw new f("SOI not found")
A=(0,n.readUint16)(t,h),h+=2
e:for(;65497!==A;){var O,T,I
switch(A){case 65504:case 65505:case 65506:case 65507:case 65508:case 65509:case 65510:case 65511:case 65512:case 65513:case 65514:case 65515:case 65516:case 65517:case 65518:case 65519:case 65534:var P=s()
65504===A&&74===P[0]&&70===P[1]&&73===P[2]&&70===P[3]&&0===P[4]&&(g={version:{major:P[5],minor:P[6]},densityUnits:P[7],xDensity:P[8]<<8|P[9],yDensity:P[10]<<8|P[11],thumbWidth:P[12],thumbHeight:P[13],thumbData:P.subarray(14,14+3*P[12]*P[13])}),65518===A&&65===P[0]&&100===P[1]&&111===P[2]&&98===P[3]&&101===P[4]&&(v={version:P[5]<<8|P[6],flags0:P[7]<<8|P[8],flags1:P[9]<<8|P[10],transformCode:P[11]})
break
case 65499:for(var E=(0,n.readUint16)(t,h),_=E+(h+=2)-2;h<_;){var F=t[h++],R=new Uint16Array(64)
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
var K,Y=t[h++],J=[]
for(O=0;O<Y;O++){var Z=t[h++],Q=l.componentIds[Z];(K=l.components[Q]).index=Z
var $=t[h++]
K.huffmanTableDC=C[$>>4],K.huffmanTableAC=x[15&$],J.push(K)}var ee=t[h++],te=t[h++],re=t[h++]
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
break}if(!ne||h>=t.length-1){(0,a.warn)("JpegImage.parse - reached the end of the image data without finding an EOI marker (0xFFD9).")
break e}throw new f("JpegImage.parse - unknown marker: "+A.toString(16))}A=(0,n.readUint16)(t,h),h+=2}for(this.width=l.samplesPerLine,this.height=l.scanLines,this.jfif=g,this.adobe=v,this.components=[],O=0;O<l.components.length;O++){var ie=S[(K=l.components[O]).quantizationId]
ie&&(K.quantizationTable=ie),this.components.push({index:K.index,output:w(0,K),scaleX:K.h/l.maxH,scaleY:K.v/l.maxV,blocksPerLine:K.blocksPerLine,blocksPerColumn:K.blocksPerColumn})}this.numComponents=this.components.length},_getLinearizedBlockData:function(e,t){var r,a,n,i,o,s,c,l,u,h,f,d,p=arguments.length>2&&void 0!==arguments[2]&&arguments[2],g=this.width/e,m=this.height/t,v=0,b=this.components.length,y=e*t*b,w=new Uint8ClampedArray(y),k=new Uint32Array(e),S=4294967288
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
t.JpegImage=g},(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.JpxStream=void 0
var a=r(142),n=r(151),i=r(4),o=function(){function e(e,t,r,n){this.stream=e,this.maybeLength=t,this.dict=r,this.params=n,a.DecodeStream.call(this,t)}return e.prototype=Object.create(a.DecodeStream.prototype),Object.defineProperty(e.prototype,"bytes",{get:function(){return(0,i.shadow)(this,"bytes",this.stream.getBytes(this.maybeLength))},configurable:!0}),e.prototype.ensureBuffer=function(e){},e.prototype.readBlock=function(){if(!this.eof){var e=new n.JpxImage
e.parse(this.bytes)
var t=e.width,r=e.height,a=e.componentsCount,i=e.tiles.length
if(1===i)this.buffer=e.tiles[0].items
else{for(var o=new Uint8ClampedArray(t*r*a),s=0;s<i;s++)for(var c=e.tiles[s],l=c.width,u=c.height,h=c.left,f=c.top,d=c.items,p=0,g=(t*f+h)*a,m=t*a,v=l*a,b=0;b<u;b++){var y=d.subarray(p,p+v)
o.set(y,g),p+=v,g+=m}this.buffer=o}this.bufferLength=this.buffer.length,this.eof=!0}},e}()
t.JpxStream=o},(e,t,r)=>{"use strict"
function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.JpxImage=void 0
var n=r(4),i=r(138),o=r(147)
function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,a=u(e)
if(t){var n=u(this).constructor
r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments)
return l(this,r)}}function l(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)})(r,e)
var t=c(r)
function r(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),t.call(this,"JPX error: ".concat(e))}return r}(n.BaseException),f=function(){var e={LL:0,LH:1,HL:1,HH:2}
function t(){this.failOnCorruptedImage=!1}function r(e,t){e.x0=Math.ceil(t.XOsiz/e.XRsiz),e.x1=Math.ceil(t.Xsiz/e.XRsiz),e.y0=Math.ceil(t.YOsiz/e.YRsiz),e.y1=Math.ceil(t.Ysiz/e.YRsiz),e.width=e.x1-e.x0,e.height=e.y1-e.y0}function a(e,t){for(var r,a=e.SIZ,n=[],i=Math.ceil((a.Xsiz-a.XTOsiz)/a.XTsiz),o=Math.ceil((a.Ysiz-a.YTOsiz)/a.YTsiz),s=0;s<o;s++)for(var c=0;c<i;c++)(r={}).tx0=Math.max(a.XTOsiz+c*a.XTsiz,a.XOsiz),r.ty0=Math.max(a.YTOsiz+s*a.YTsiz,a.YOsiz),r.tx1=Math.min(a.XTOsiz+(c+1)*a.XTsiz,a.Xsiz),r.ty1=Math.min(a.YTOsiz+(s+1)*a.YTsiz,a.Ysiz),r.width=r.tx1-r.tx0,r.height=r.ty1-r.ty0,r.components=[],n.push(r)
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
default:throw new h("Unsupported progression order ".concat(O))}}function w(e,t,r,a){var n,o=0,s=0,c=!1
function l(e){for(;s<e;){var a=t[r+o]
o++,c?(n=n<<7|a,s+=7,c=!1):(n=n<<8|a,s+=8),255===a&&(c=!0)}return n>>>(s-=e)&(1<<e)-1}function u(e){return 255===t[r+o-1]&&t[r+o]===e?(h(1),!0):255===t[r+o]&&t[r+o+1]===e&&(h(2),!0)}function h(e){o+=e}function f(){s=0,c&&(o++,c=!1)}function d(){if(0===l(1))return 1
if(0===l(1))return 2
var e=l(2)
return e<3?e+3:(e=l(5))<31?e+6:(e=l(7))+37}for(var p=e.currentTile.index,g=e.tiles[p],m=e.COD.sopMarkerUsed,v=e.COD.ephMarkerUsed,b=g.packetsIterator;o<a;){f(),m&&u(145)&&h(4)
var y=b.nextPacket()
if(l(1)){for(var w,k=y.layerNumber,S=[],x=0,O=y.codeblocks.length;x<O;x++){var T=(w=y.codeblocks[x]).precinct,I=w.cbx-T.cbxMin,P=w.cby-T.cbyMin,E=!1,_=!1
if(void 0!==w.included)E=!!l(1)
else{var F,R
if(void 0!==(T=w.precinct).inclusionTree)F=T.inclusionTree
else{var B=T.cbxMax-T.cbxMin+1,M=T.cbyMax-T.cbyMin+1
F=new A(B,M,k),R=new C(B,M),T.inclusionTree=F,T.zeroBitPlanesTree=R}if(F.reset(I,P,k))for(;;){if(!l(1)){F.incrementValue(k)
break}if(!F.nextLevel()){w.included=!0,E=_=!0
break}}}if(E){if(_){for((R=T.zeroBitPlanesTree).reset(I,P);;)if(l(1)){if(!R.nextLevel())break}else R.incrementValue()
w.zeroBitPlanes=R.value}for(var D=d();l(1);)w.Lblock++
var L=(0,i.log2)(D),N=l((D<1<<L?L-1:L)+w.Lblock)
S.push({codeblock:w,codingpasses:D,dataLength:N})}}for(f(),v&&u(146);S.length>0;){var U=S.shift()
void 0===(w=U.codeblock).data&&(w.data=[]),w.data.push({data:t,start:r+o,end:r+o+U.dataLength,codingpasses:U.codingpasses}),o+=U.dataLength}}}return o}function k(e,t,r,a,n,i,s,c){for(var l=a.tbx0,u=a.tby0,h=a.tbx1-a.tbx0,f=a.codeblocks,d="H"===a.type.charAt(0)?1:0,p="H"===a.type.charAt(1)?t:0,g=0,m=f.length;g<m;++g){var v=f[g],b=v.tbx1_-v.tbx0_,y=v.tby1_-v.tby0_
if(0!==b&&0!==y&&void 0!==v.data){var w,k
w=new O(b,y,v.subbandType,v.zeroBitPlanes,i),k=2
var S,x,C,A=v.data,T=0,I=0
for(S=0,x=A.length;S<x;S++)T+=(C=A[S]).end-C.start,I+=C.codingpasses
var P=new Uint8Array(T),E=0
for(S=0,x=A.length;S<x;S++){var _=(C=A[S]).data.subarray(C.start,C.end)
P.set(_,E),E+=_.length}var F=new o.ArithmeticDecoder(P,0,T)
for(w.setDecoder(F),S=0;S<I;S++){switch(k){case 0:w.runSignificancePropagationPass()
break
case 1:w.runMagnitudeRefinementPass()
break
case 2:w.runCleanupPass(),c&&w.checkSegmentationSymbol()}k=(k+1)%3}var R,B,M,D=v.tbx0_-l+(v.tby0_-u)*h,L=w.coefficentsSign,N=w.coefficentsMagnitude,U=w.bitsDecoded,j=s?0:.5
E=0
var q="LL"!==a.type
for(S=0;S<y;S++){var z=2*(D/h|0)*(t-h)+d+p
for(R=0;R<b;R++){if(0!==(B=N[E])){B=(B+j)*n,0!==L[E]&&(B=-B),M=U[E]
var G=q?z+(D<<1):D
e[G]=s&&M>=i?B:B*(1<<i-M)}D++,E++}D+=h-b}}}}function S(t,r,a){for(var n=r.components[a],i=n.codingStyleParameters,o=n.quantizationParameters,s=i.decompositionLevelsCount,c=o.SPqcds,l=o.scalarExpounded,u=o.guardBits,h=i.segmentationSymbolUsed,f=t.components[a].precision,d=i.reversibleTransformation,p=d?new P:new I,g=[],m=0,v=0;v<=s;v++){for(var b=n.resolutions[v],y=b.trx1-b.trx0,w=b.try1-b.try0,S=new Float32Array(y*w),x=0,C=b.subbands.length;x<C;x++){var A,O
l?(A=c[m].mu,O=c[m].epsilon,m++):(A=c[0].mu,O=c[0].epsilon+(v>0?1-v:0))
var T=b.subbands[x],E=e[T.type]
k(S,y,0,T,d?1:Math.pow(2,f+E-O)*(1+A/2048),u+O-1,d,h)}g.push({width:y,height:w,items:S})}var _=p.calculate(g,n.tcx0,n.tcy0)
return{left:n.tcx0,top:n.tcy0,width:_.width,height:_.height,items:_.items}}function x(e,t){for(var r=e.SIZ.Csiz,a=e.tiles[t],n=0;n<r;n++){var i=a.components[n],o=void 0!==e.currentTile.QCC[n]?e.currentTile.QCC[n]:e.currentTile.QCD
i.quantizationParameters=o
var s=void 0!==e.currentTile.COC[n]?e.currentTile.COC[n]:e.currentTile.COD
i.codingStyleParameters=s}a.codingStyleDefaultParameters=e.currentTile.COD}t.prototype={parse:function(e){if(65359!==(0,i.readUint16)(e,0))for(var t=0,r=e.length;t<r;){var a=8,o=(0,i.readUint32)(e,t),s=(0,i.readUint32)(e,t+4)
if(t+=a,1===o&&(o=4294967296*(0,i.readUint32)(e,t)+(0,i.readUint32)(e,t+4),t+=8,a+=8),0===o&&(o=r-t+a),o<a)throw new h("Invalid box field size")
var c=o-a,l=!0
switch(s){case 1785737832:l=!1
break
case 1668246642:var u=e[t]
if(1===u){var f=(0,i.readUint32)(e,t+3)
switch(f){case 16:case 17:case 18:break
default:(0,n.warn)("Unknown colorspace "+f)}}else 2===u&&(0,n.info)("ICC profile not supported")
break
case 1785737827:this.parseCodestream(e,t,t+c)
break
case 1783636e3:218793738!==(0,i.readUint32)(e,t)&&(0,n.warn)("Invalid JP2 signature")
break
case 1783634458:case 1718909296:case 1920099697:case 1919251232:case 1768449138:break
default:var d=String.fromCharCode(s>>24&255,s>>16&255,s>>8&255,255&s);(0,n.warn)("Unsupported header type "+s+" ("+d+")")}l&&(t+=c)}else this.parseCodestream(e,0,e.length)},parseImageProperties:function(e){for(var t=e.getByte();t>=0;){if(65361===(t<<8|(t=e.getByte()))){e.skip(4)
var r=e.getInt32()>>>0,a=e.getInt32()>>>0,n=e.getInt32()>>>0,i=e.getInt32()>>>0
e.skip(16)
var o=e.getUint16()
return this.width=r-n,this.height=a-i,this.componentsCount=o,void(this.bitsPerComponent=8)}}throw new h("No size marker found in JPX stream")},parseCodestream:function(e,t,o){var s={},c=!1
try{for(var l=t;l+1<o;){var u=(0,i.readUint16)(e,l)
l+=2
var f,d,p,g,m,v,b=0
switch(u){case 65359:s.mainHeader=!0
break
case 65497:break
case 65361:b=(0,i.readUint16)(e,l)
var k={}
k.Xsiz=(0,i.readUint32)(e,l+4),k.Ysiz=(0,i.readUint32)(e,l+8),k.XOsiz=(0,i.readUint32)(e,l+12),k.YOsiz=(0,i.readUint32)(e,l+16),k.XTsiz=(0,i.readUint32)(e,l+20),k.YTsiz=(0,i.readUint32)(e,l+24),k.XTOsiz=(0,i.readUint32)(e,l+28),k.YTOsiz=(0,i.readUint32)(e,l+32)
var C=(0,i.readUint16)(e,l+36)
k.Csiz=C
var A=[]
f=l+38
for(var O=0;O<C;O++){var T={precision:1+(127&e[f]),isSigned:!!(128&e[f]),XRsiz:e[f+1],YRsiz:e[f+2]}
f+=3,r(T,k),A.push(T)}s.SIZ=k,s.components=A,a(s,A),s.QCC=[],s.COC=[]
break
case 65372:b=(0,i.readUint16)(e,l)
var I={}
switch(f=l+2,31&(d=e[f++])){case 0:g=8,m=!0
break
case 1:g=16,m=!1
break
case 2:g=16,m=!0
break
default:throw new Error("Invalid SQcd value "+d)}for(I.noQuantization=8===g,I.scalarExpounded=m,I.guardBits=d>>5,p=[];f<b+l;){var P={}
8===g?(P.epsilon=e[f++]>>3,P.mu=0):(P.epsilon=e[f]>>3,P.mu=(7&e[f])<<8|e[f+1],f+=2),p.push(P)}I.SPqcds=p,s.mainHeader?s.QCD=I:(s.currentTile.QCD=I,s.currentTile.QCC=[])
break
case 65373:b=(0,i.readUint16)(e,l)
var E,_={}
switch(f=l+2,s.SIZ.Csiz<257?E=e[f++]:(E=(0,i.readUint16)(e,f),f+=2),31&(d=e[f++])){case 0:g=8,m=!0
break
case 1:g=16,m=!1
break
case 2:g=16,m=!0
break
default:throw new Error("Invalid SQcd value "+d)}for(_.noQuantization=8===g,_.scalarExpounded=m,_.guardBits=d>>5,p=[];f<b+l;)P={},8===g?(P.epsilon=e[f++]>>3,P.mu=0):(P.epsilon=e[f]>>3,P.mu=(7&e[f])<<8|e[f+1],f+=2),p.push(P)
_.SPqcds=p,s.mainHeader?s.QCC[E]=_:s.currentTile.QCC[E]=_
break
case 65362:b=(0,i.readUint16)(e,l)
var F={}
f=l+2
var R=e[f++]
F.entropyCoderWithCustomPrecincts=!!(1&R),F.sopMarkerUsed=!!(2&R),F.ephMarkerUsed=!!(4&R),F.progressionOrder=e[f++],F.layersCount=(0,i.readUint16)(e,f),f+=2,F.multipleComponentTransform=e[f++],F.decompositionLevelsCount=e[f++],F.xcb=2+(15&e[f++]),F.ycb=2+(15&e[f++])
var B=e[f++]
if(F.selectiveArithmeticCodingBypass=!!(1&B),F.resetContextProbabilities=!!(2&B),F.terminationOnEachCodingPass=!!(4&B),F.verticallyStripe=!!(8&B),F.predictableTermination=!!(16&B),F.segmentationSymbolUsed=!!(32&B),F.reversibleTransformation=e[f++],F.entropyCoderWithCustomPrecincts){for(var M=[];f<b+l;){var D=e[f++]
M.push({PPx:15&D,PPy:D>>4})}F.precinctsSizes=M}var L=[]
F.selectiveArithmeticCodingBypass&&L.push("selectiveArithmeticCodingBypass"),F.resetContextProbabilities&&L.push("resetContextProbabilities"),F.terminationOnEachCodingPass&&L.push("terminationOnEachCodingPass"),F.verticallyStripe&&L.push("verticallyStripe"),F.predictableTermination&&L.push("predictableTermination"),L.length>0&&(c=!0,(0,n.warn)("JPX: Unsupported COD options (".concat(L.join(", "),")."))),s.mainHeader?s.COD=F:(s.currentTile.COD=F,s.currentTile.COC=[])
break
case 65424:b=(0,i.readUint16)(e,l),(v={}).index=(0,i.readUint16)(e,l+2),v.length=(0,i.readUint32)(e,l+4),v.dataEnd=v.length+l-2,v.partIndex=e[l+8],v.partsCount=e[l+9],s.mainHeader=!1,0===v.partIndex&&(v.COD=s.COD,v.COC=s.COC.slice(0),v.QCD=s.QCD,v.QCC=s.QCC.slice(0)),s.currentTile=v
break
case 65427:0===(v=s.currentTile).partIndex&&(x(s,v.index),y(s)),w(s,e,l,b=v.dataEnd-l)
break
case 65363:(0,n.warn)("JPX: Codestream code 0xFF53 (COC) is not implemented.")
case 65365:case 65367:case 65368:case 65380:b=(0,i.readUint16)(e,l)
break
default:throw new Error("Unknown codestream code: "+u.toString(16))}l+=b}}catch(N){if(c||this.failOnCorruptedImage)throw new h(N.message);(0,n.warn)('JPX: Trying to recover from: "'.concat(N.message,'".'))}this.tiles=function(e){for(var t=e.SIZ,r=e.components,a=t.Csiz,n=[],i=0,o=e.tiles.length;i<o;i++){var s,c=e.tiles[i],l=[]
for(s=0;s<a;s++)l[s]=S(e,c,s)
var u,h,f,d,p,g,m,v=l[0],b=new Uint8ClampedArray(v.items.length*a),y={left:v.left,top:v.top,width:v.width,height:v.height,items:b},w=0
if(c.codingStyleDefaultParameters.multipleComponentTransform){var k=4===a,x=l[0].items,C=l[1].items,A=l[2].items,O=k?l[3].items:null
h=.5+(128<<(u=r[0].precision-8))
var T=c.components[0],I=a-3
if(d=x.length,T.codingStyleParameters.reversibleTransformation)for(f=0;f<d;f++,w+=I){p=x[f]+h,g=C[f]
var P=p-((m=A[f])+g>>2)
b[w++]=P+m>>u,b[w++]=P>>u,b[w++]=P+g>>u}else for(f=0;f<d;f++,w+=I)p=x[f]+h,g=C[f],m=A[f],b[w++]=p+1.402*m>>u,b[w++]=p-.34413*g-.71414*m>>u,b[w++]=p+1.772*g>>u
if(k)for(f=0,w=3;f<d;f++,w+=4)b[w]=O[f]+h>>u}else for(s=0;s<a;s++){var E=l[s].items
for(h=.5+(128<<(u=r[s].precision-8)),w=s,f=0,d=E.length;f<d;f++)b[w]=E[f]+h>>u,w+=a}n.push(y)}return n}(s),this.width=s.SIZ.Xsiz-s.SIZ.XOsiz,this.height=s.SIZ.Ysiz-s.SIZ.YOsiz,this.componentsCount=s.SIZ.Csiz}}
var C=function(){function e(e,t){var r=(0,i.log2)(Math.max(e,t))+1
this.levels=[]
for(var a=0;a<r;a++){var n={width:e,height:t,items:[]}
this.levels.push(n),e=Math.ceil(e/2),t=Math.ceil(t/2)}}return e.prototype={reset:function(e,t){for(var r,a=0,n=0;a<this.levels.length;){var i=e+t*(r=this.levels[a]).width
if(void 0!==r.items[i]){n=r.items[i]
break}r.index=i,e>>=1,t>>=1,a++}a--,(r=this.levels[a]).items[r.index]=n,this.currentLevel=a,delete this.value},incrementValue:function(){var e=this.levels[this.currentLevel]
e.items[e.index]++},nextLevel:function(){var e=this.currentLevel,t=this.levels[e],r=t.items[t.index]
return--e<0?(this.value=r,!1):(this.currentLevel=e,(t=this.levels[e]).items[t.index]=r,!0)}},e}(),A=function(){function e(e,t,r){var a=(0,i.log2)(Math.max(e,t))+1
this.levels=[]
for(var n=0;n<a;n++){for(var o=new Uint8Array(e*t),s=0,c=o.length;s<c;s++)o[s]=r
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
if(0!==s)for(i=c*e[(a=t+1)-1],n=s;n--&&(o=c*e[a+1],e[a]-=i+o,n--);a+=2)i=c*e[(a+=2)+1],e[a]-=i+o},e}(),P=function(){function e(){T.call(this)}return e.prototype=Object.create(T.prototype),e.prototype.filter=function(e,t,r){var a,n,i=r>>1
for(a=t|=0,n=i+1;n--;a+=2)e[a]-=e[a-1]+e[a+1]+2>>2
for(a=t+1,n=i;n--;a+=2)e[a]+=e[a-1]+e[a+1]>>1},e}()
return t}()
t.JpxImage=f},(e,t,r)=>{"use strict"
function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.PDF20=t.PDF17=t.CipherTransformFactory=t.calculateSHA512=t.calculateSHA384=t.calculateSHA256=t.calculateMD5=t.ARCFourCipher=t.AES256Cipher=t.AES128Cipher=void 0
var n=r(4),i=r(135),o=r(142)
function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,a=h(e)
if(t){var n=h(this).constructor
r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments)
return u(this,r)}}function u(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
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
var A,O,T=d,I=p,P=g,E=m,_=v,F=b,R=y,B=w
for(h=0;h<64;++h)A=B+n(_)+t(_,F,R)+o[h]+C[h],O=a(T)+r(T,I,P),B=R,R=F,F=_,_=E+A|0,E=P,P=I,I=T,T=A+O|0
d=d+T|0,p=p+I|0,g=g+P|0,m=m+E|0,v=v+_|0,b=b+F|0,y=y+R|0,w=w+B|0}return new Uint8Array([d>>24&255,d>>16&255,d>>8&255,255&d,p>>24&255,p>>16&255,p>>8&255,255&p,g>>24&255,g>>16&255,g>>8&255,255&g,m>>24&255,m>>16&255,m>>8&255,255&m,v>>24&255,v>>16&255,v>>8&255,255&v,b>>24&255,b>>16&255,b>>8&255,255&b,y>>24&255,y>>16&255,y>>8&255,255&y,w>>24&255,w>>16&255,w>>8&255,255&w])}}()
t.calculateSHA256=w
var k=function(){function e(e,t,r,a,n){e.assign(t),e.and(r),n.assign(t),n.not(),n.and(a),e.xor(n)}function t(e,t,r,a,n){e.assign(t),e.and(r),n.assign(t),n.and(a),e.xor(n),n.assign(r),n.and(a),e.xor(n)}function r(e,t,r){e.assign(t),e.rotateRight(28),r.assign(t),r.rotateRight(34),e.xor(r),r.assign(t),r.rotateRight(39),e.xor(r)}function a(e,t,r){e.assign(t),e.rotateRight(14),r.assign(t),r.rotateRight(18),e.xor(r),r.assign(t),r.rotateRight(41),e.xor(r)}function n(e,t,r){e.assign(t),e.rotateRight(1),r.assign(t),r.rotateRight(8),e.xor(r),r.assign(t),r.shiftRight(7),e.xor(r)}function i(e,t,r){e.assign(t),e.rotateRight(19),r.assign(t),r.rotateRight(61),e.xor(r),r.assign(t),r.shiftRight(6),e.xor(r)}var o=[new y(1116352408,3609767458),new y(1899447441,602891725),new y(3049323471,3964484399),new y(3921009573,2173295548),new y(961987163,4081628472),new y(1508970993,3053834265),new y(2453635748,2937671579),new y(2870763221,3664609560),new y(3624381080,2734883394),new y(310598401,1164996542),new y(607225278,1323610764),new y(1426881987,3590304994),new y(1925078388,4068182383),new y(2162078206,991336113),new y(2614888103,633803317),new y(3248222580,3479774868),new y(3835390401,2666613458),new y(4022224774,944711139),new y(264347078,2341262773),new y(604807628,2007800933),new y(770255983,1495990901),new y(1249150122,1856431235),new y(1555081692,3175218132),new y(1996064986,2198950837),new y(2554220882,3999719339),new y(2821834349,766784016),new y(2952996808,2566594879),new y(3210313671,3203337956),new y(3336571891,1034457026),new y(3584528711,2466948901),new y(113926993,3758326383),new y(338241895,168717936),new y(666307205,1188179964),new y(773529912,1546045734),new y(1294757372,1522805485),new y(1396182291,2643833823),new y(1695183700,2343527390),new y(1986661051,1014477480),new y(2177026350,1206759142),new y(2456956037,344077627),new y(2730485921,1290863460),new y(2820302411,3158454273),new y(3259730800,3505952657),new y(3345764771,106217008),new y(3516065817,3606008344),new y(3600352804,1432725776),new y(4094571909,1467031594),new y(275423344,851169720),new y(430227734,3100823752),new y(506948616,1363258195),new y(659060556,3750685593),new y(883997877,3785050280),new y(958139571,3318307427),new y(1322822218,3812723403),new y(1537002063,2003034995),new y(1747873779,3602036899),new y(1955562222,1575990012),new y(2024104815,1125592928),new y(2227730452,2716904306),new y(2361852424,442776044),new y(2428436474,593698344),new y(2756734187,3733110249),new y(3204031479,2999351573),new y(3329325298,3815920427),new y(3391569614,3928383900),new y(3515267271,566280711),new y(3940187606,3454069534),new y(4118630271,4000239992),new y(116418474,1914138554),new y(174292421,2731055270),new y(289380356,3203993006),new y(460393269,320620315),new y(685471733,587496836),new y(852142971,1086792851),new y(1017036298,365543100),new y(1126000580,2618297676),new y(1288033470,3409855158),new y(1501505948,4234509866),new y(1607167915,987167468),new y(1816402316,1246189591)]
return function(s,c,l,u){var h,f,d,p,g,m,v,b;(u=!!u)?(h=new y(3418070365,3238371032),f=new y(1654270250,914150663),d=new y(2438529370,812702999),p=new y(355462360,4144912697),g=new y(1731405415,4290775857),m=new y(2394180231,1750603025),v=new y(3675008525,1694076839),b=new y(1203062813,3204075428)):(h=new y(1779033703,4089235720),f=new y(3144134277,2227873595),d=new y(1013904242,4271175723),p=new y(2773480762,1595750129),g=new y(1359893119,2917565137),m=new y(2600822924,725511199),v=new y(528734635,4215389547),b=new y(1541459225,327033209))
var w,k,S,x=128*Math.ceil((l+17)/128),C=new Uint8Array(x)
for(w=0;w<l;++w)C[w]=s[c++]
for(C[w++]=128,S=x-16;w<S;)C[w++]=0
C[w++]=0,C[w++]=0,C[w++]=0,C[w++]=0,C[w++]=0,C[w++]=0,C[w++]=0,C[w++]=0,C[w++]=0,C[w++]=0,C[w++]=0,C[w++]=l>>>29&255,C[w++]=l>>21&255,C[w++]=l>>13&255,C[w++]=l>>5&255,C[w++]=l<<3&255
var A=new Array(80)
for(w=0;w<80;w++)A[w]=new y(0,0)
var O,T,I=new y(0,0),P=new y(0,0),E=new y(0,0),_=new y(0,0),F=new y(0,0),R=new y(0,0),B=new y(0,0),M=new y(0,0),D=new y(0,0),L=new y(0,0),N=new y(0,0),U=new y(0,0)
for(w=0;w<x;){for(k=0;k<16;++k)A[k].high=C[w]<<24|C[w+1]<<16|C[w+2]<<8|C[w+3],A[k].low=C[w+4]<<24|C[w+5]<<16|C[w+6]<<8|C[w+7],w+=8
for(k=16;k<80;++k)i(O=A[k],A[k-2],U),O.add(A[k-7]),n(N,A[k-15],U),O.add(N),O.add(A[k-16])
for(I.assign(h),P.assign(f),E.assign(d),_.assign(p),F.assign(g),R.assign(m),B.assign(v),M.assign(b),k=0;k<80;++k)D.assign(M),a(N,F,U),D.add(N),e(N,F,R,B,U),D.add(N),D.add(o[k]),D.add(A[k]),r(L,I,U),t(N,I,P,E,U),L.add(N),O=M,M=B,B=R,R=F,_.add(D),F=_,_=E,E=P,P=I,O.assign(D),O.add(L),I=O
h.add(I),f.add(P),d.add(E),p.add(_),g.add(F),m.add(R),v.add(B),b.add(M)}return u?(T=new Uint8Array(48),h.copyTo(T,0),f.copyTo(T,8),d.copyTo(T,16),p.copyTo(T,24),g.copyTo(T,32),m.copyTo(T,40)):(T=new Uint8Array(64),h.copyTo(T,0),f.copyTo(T,8),d.copyTo(T,16),p.copyTo(T,24),g.copyTo(T,32),m.copyTo(T,40),v.copyTo(T,48),b.copyTo(T,56)),T}}()
t.calculateSHA512=k
var S=function(e,t,r){return k(e,t,r,!0)}
t.calculateSHA384=S
var x=function(){function e(){}return e.prototype={decryptBlock:function(e){return e},encrypt:function(e){return e}},e}(),C=function(){function e(){f(this,e),this.constructor===e&&(0,n.unreachable)("Cannot initialize AESBaseCipher."),this._s=new Uint8Array([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22]),this._inv_s=new Uint8Array([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125]),this._mix=new Uint32Array([0,235474187,470948374,303765277,941896748,908933415,607530554,708780849,1883793496,2118214995,1817866830,1649639237,1215061108,1181045119,1417561698,1517767529,3767586992,4003061179,4236429990,4069246893,3635733660,3602770327,3299278474,3400528769,2430122216,2664543715,2362090238,2193862645,2835123396,2801107407,3035535058,3135740889,3678124923,3576870512,3341394285,3374361702,3810496343,3977675356,4279080257,4043610186,2876494627,2776292904,3076639029,3110650942,2472011535,2640243204,2403728665,2169303058,1001089995,899835584,666464733,699432150,59727847,226906860,530400753,294930682,1273168787,1172967064,1475418501,1509430414,1942435775,2110667444,1876241833,1641816226,2910219766,2743034109,2976151520,3211623147,2505202138,2606453969,2302690252,2269728455,3711829422,3543599269,3240894392,3475313331,3843699074,3943906441,4178062228,4144047775,1306967366,1139781709,1374988112,1610459739,1975683434,2076935265,1775276924,1742315127,1034867998,866637845,566021896,800440835,92987698,193195065,429456164,395441711,1984812685,2017778566,1784663195,1683407248,1315562145,1080094634,1383856311,1551037884,101039829,135050206,437757123,337553864,1042385657,807962610,573804783,742039012,2531067453,2564033334,2328828971,2227573024,2935566865,2700099354,3001755655,3168937228,3868552805,3902563182,4203181171,4102977912,3736164937,3501741890,3265478751,3433712980,1106041591,1340463100,1576976609,1408749034,2043211483,2009195472,1708848333,1809054150,832877231,1068351396,766945465,599762354,159417987,126454664,361929877,463180190,2709260871,2943682380,3178106961,3009879386,2572697195,2538681184,2236228733,2336434550,3509871135,3745345300,3441850377,3274667266,3910161971,3877198648,4110568485,4211818798,2597806476,2497604743,2261089178,2295101073,2733856160,2902087851,3202437046,2968011453,3936291284,3835036895,4136440770,4169408201,3535486456,3702665459,3467192302,3231722213,2051518780,1951317047,1716890410,1750902305,1113818384,1282050075,1584504582,1350078989,168810852,67556463,371049330,404016761,841739592,1008918595,775550814,540080725,3969562369,3801332234,4035489047,4269907996,3569255213,3669462566,3366754619,3332740144,2631065433,2463879762,2160117071,2395588676,2767645557,2868897406,3102011747,3069049960,202008497,33778362,270040487,504459436,875451293,975658646,675039627,641025152,2084704233,1917518562,1615861247,1851332852,1147550661,1248802510,1484005843,1451044056,933301370,967311729,733156972,632953703,260388950,25965917,328671808,496906059,1206477858,1239443753,1543208500,1441952575,2144161806,1908694277,1675577880,1842759443,3610369226,3644379585,3408119516,3307916247,4011190502,3776767469,4077384432,4245618683,2809771154,2842737049,3144396420,3043140495,2673705150,2438237621,2203032232,2370213795]),this._mixCol=new Uint8Array(256)
for(var t=0;t<256;t++)this._mixCol[t]=t<128?t<<1:t<<1^27
this.buffer=new Uint8Array(16),this.bufferPosition=0}return p(e,[{key:"_expandKey",value:function(e){(0,n.unreachable)("Cannot call `_expandKey` on the base class")}},{key:"_decrypt",value:function(e,t){var r,a,n,i=new Uint8Array(16)
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
var P=function(){function e(e,t){this.StringCipherConstructor=e,this.StreamCipherConstructor=t}return e.prototype={createStream:function(e,t){var r=new this.StreamCipherConstructor
return new o.DecryptStream(e,t,(function(e,t){return r.decryptBlock(e,t)}))},decryptString:function(e){var t=new this.StringCipherConstructor,r=(0,n.stringToBytes)(e)
return r=t.decryptBlock(r,!0),(0,n.bytesToString)(r)},encryptString:function(e){var t=new this.StringCipherConstructor
if(t instanceof C){var r=e.length,a=16-r%16
16!==a&&(e=e.padEnd(16*Math.ceil(r/16),String.fromCharCode(a)))
var i=new Uint8Array(16)
if("undefined"!=typeof crypto)crypto.getRandomValues(i)
else for(var o=0;o<16;o++)i[o]=Math.floor(256*Math.random())
var s=(0,n.stringToBytes)(e)
s=t.encrypt(s,i)
var c=new Uint8Array(16+s.length)
return c.set(i),c.set(s,16),(0,n.bytesToString)(c)}var l=(0,n.stringToBytes)(e)
return l=t.encrypt(l),(0,n.bytesToString)(l)}},e}(),E=function(){var e=new Uint8Array([40,191,78,94,78,117,138,65,100,0,78,86,255,250,1,8,46,46,0,182,208,104,62,128,47,12,169,254,100,83,105,122])
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
return y}var r=i.Name.get("Identity")
function a(a,o,s){var c=a.get("Filter")
if(!(0,i.isName)(c,"Standard"))throw new n.FormatError("unknown encryption method")
this.dict=a
var l=a.get("V")
if(!Number.isInteger(l)||1!==l&&2!==l&&4!==l&&5!==l)throw new n.FormatError("unsupported encryption algorithm")
this.algorithm=l
var u=a.get("Length")
if(!u)if(l<=3)u=40
else{var h=a.get("CF"),f=a.get("StmF")
if((0,i.isDict)(h)&&(0,i.isName)(f)){h.suppressEncryption=!0
var d=h.get(f.name);(u=d&&d.get("Length")||128)<40&&(u<<=3)}}if(!Number.isInteger(u)||u<40||u%8!=0)throw new n.FormatError("invalid key length")
var p=(0,n.stringToBytes)(a.get("O")).subarray(0,32),m=(0,n.stringToBytes)(a.get("U")).subarray(0,32),v=a.get("P"),y=a.get("R"),w=(4===l||5===l)&&!1!==a.get("EncryptMetadata")
this.encryptMetadata=w
var k,S,x=(0,n.stringToBytes)(o)
if(s){if(6===y)try{s=(0,n.utf8StringToString)(s)}catch(B){(0,n.warn)("CipherTransformFactory: Unable to convert UTF8 encoded password.")}k=(0,n.stringToBytes)(s)}if(5!==l)S=t(x,k,p,m,v,y,u,w)
else{var C=(0,n.stringToBytes)(a.get("O")).subarray(32,40),A=(0,n.stringToBytes)(a.get("O")).subarray(40,48),O=(0,n.stringToBytes)(a.get("U")).subarray(0,48),P=(0,n.stringToBytes)(a.get("U")).subarray(32,40),E=(0,n.stringToBytes)(a.get("U")).subarray(40,48),_=(0,n.stringToBytes)(a.get("OE")),F=(0,n.stringToBytes)(a.get("UE"));(0,n.stringToBytes)(a.get("Perms"))
S=function(e,t,r,a,n,i,o,s,c,l,u,h){if(t){var f=Math.min(127,t.length)
t=t.subarray(0,f)}else t=[]
var d
return(d=6===e?new I:new T).checkUserPassword(t,s,o)?d.getUserKey(t,c,u):t.length&&d.checkOwnerPassword(t,a,i,r)?d.getOwnerKey(t,n,i,l):null}(y,k,p,C,A,O,m,P,E,_,F)}if(!S&&!s)throw new n.PasswordException("No password given",n.PasswordResponses.NEED_PASSWORD)
if(!S&&s&&(S=t(x,function(t,r,a,n){var i,o,s=new Uint8Array(32),c=0
for(o=Math.min(32,t.length);c<o;++c)s[c]=t[c]
for(i=0;c<32;)s[c++]=e[i++]
var l,u=b(s,0,c),h=n>>3
if(a>=3)for(i=0;i<50;++i)u=b(u,0,u.length)
if(a>=3){l=r
var f,d=new Uint8Array(h)
for(i=19;i>=0;i--){for(f=0;f<h;++f)d[f]=u[f]^i
l=new g(d).encryptBlock(l)}}else l=new g(u.subarray(0,h)).encryptBlock(r)
return l}(k,p,y,u),p,m,v,y,u,w)),!S)throw new n.PasswordException("Incorrect Password",n.PasswordResponses.INCORRECT_PASSWORD)
if(this.encryptionKey=S,l>=4){var R=a.get("CF");(0,i.isDict)(R)&&(R.suppressEncryption=!0),this.cf=R,this.stmf=a.get("StmF")||r,this.strf=a.get("StrF")||r,this.eff=a.get("EFF")||this.stmf}}function o(e,t,r,a){var n,i,o=new Uint8Array(r.length+9)
for(n=0,i=r.length;n<i;++n)o[n]=r[n]
return o[n++]=255&e,o[n++]=e>>8&255,o[n++]=e>>16&255,o[n++]=255&t,o[n++]=t>>8&255,a&&(o[n++]=115,o[n++]=65,o[n++]=108,o[n++]=84),b(o,0,n).subarray(0,Math.min(r.length+5,16))}function s(e,t,r,a,s){if(!(0,i.isName)(t))throw new n.FormatError("Invalid crypt filter name.")
var c,l=e.get(t.name)
if(null!=l&&(c=l.get("CFM")),!c||"None"===c.name)return function(){return new x}
if("V2"===c.name)return function(){return new g(o(r,a,s,!1))}
if("AESV2"===c.name)return function(){return new A(o(r,a,s,!0))}
if("AESV3"===c.name)return function(){return new O(s)}
throw new n.FormatError("Unknown crypto method")}return a.prototype={createCipherTransform:function(e,t){if(4===this.algorithm||5===this.algorithm)return new P(s(this.cf,this.stmf,e,t,this.encryptionKey),s(this.cf,this.strf,e,t,this.encryptionKey))
var r=o(e,t,this.encryptionKey,!1),a=function(){return new g(r)}
return new P(a,a)}},a}()
t.CipherTransformFactory=E},(e,t,r)=>{"use strict"
function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.ColorSpace=void 0
var n,i=(n=r(2))&&n.__esModule?n:{default:n},o=r(4),s=r(135),c=r(138)
function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,a=d(e)
if(t){var n=d(this).constructor
r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments)
return f(this,r)}}function f(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t,r,a,n,i,o){try{var s=e[i](o),c=s.value}catch(l){return void r(l)}s.done?t(c):Promise.resolve(c).then(a,n)}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var r=0;r<t.length;r++){var a=t[r]
a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function v(e,t,r){return t&&m(e.prototype,t),r&&m(e,r),e}var b=function(){function e(t,r){g(this,e),this.constructor===e&&(0,o.unreachable)("Cannot initialize ColorSpace."),this.name=t,this.numComps=r}var t,r
return v(e,[{key:"getRgb",value:function(e,t){var r=new Uint8ClampedArray(3)
return this.getRgbItem(e,t,r,0),r}},{key:"getRgbItem",value:function(e,t,r,a){(0,o.unreachable)("Should not call ColorSpace.getRgbItem")}},{key:"getRgbBuffer",value:function(e,t,r,a,n,i,s){(0,o.unreachable)("Should not call ColorSpace.getRgbBuffer")}},{key:"getOutputLength",value:function(e,t){(0,o.unreachable)("Should not call ColorSpace.getOutputLength")}},{key:"isPassthrough",value:function(e){return!1}},{key:"isDefaultDecode",value:function(t,r){return e.isDefaultDecode(t,this.numComps)}},{key:"fillRgb",value:function(e,t,r,a,n,i,o,s,c){var l=t*r,u=null,h=1<<o,f=r!==n||t!==a
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
else for(var S=0,x=0,C=0,A=a*i;C<A;C++)e[S++]=u[x++],e[S++]=u[x++],e[S++]=u[x++],S+=c}},{key:"usesZeroToOneRange",get:function(){return(0,o.shadow)(this,"usesZeroToOneRange",!0)}}],[{key:"_cache",value:function(e,t,r,a){if(!r)throw new Error('ColorSpace._cache - expected "localColorSpaceCache" argument.')
if(!a)throw new Error('ColorSpace._cache - expected "parsedColorSpace" argument.')
var n,i
e instanceof s.Ref&&(i=e,e=t.fetch(e)),e instanceof s.Name&&(n=e.name),(n||i)&&r.set(n,i,a)}},{key:"getCached",value:function(e,t,r){if(!r)throw new Error('ColorSpace.getCached - expected "localColorSpaceCache" argument.')
if(e instanceof s.Ref){var a=r.getByRef(e)
if(a)return a
try{e=t.fetch(e)}catch(i){if(i instanceof c.MissingDataException)throw i}}if(e instanceof s.Name){var n=r.getByName(e.name)
if(n)return n}return null}},{key:"parseAsync",value:(t=i.default.mark((function e(t){var r,a,n,o,s,c,l
return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.cs,a=t.xref,n=t.resources,o=void 0===n?null:n,s=t.pdfFunctionFactory,c=t.localColorSpaceCache,l=this._parse(r,a,o,s),this._cache(r,a,c,l),e.abrupt("return",l)
case 4:case"end":return e.stop()}}),e,this)})),r=function(){var e=this,r=arguments
return new Promise((function(a,n){var i=t.apply(e,r)
function o(e){p(i,a,n,o,s,"next",e)}function s(e){p(i,a,n,o,s,"throw",e)}o(void 0)}))},function(e){return r.apply(this,arguments)})},{key:"parse",value:function(e){var t=e.cs,r=e.xref,a=e.resources,n=void 0===a?null:a,i=e.pdfFunctionFactory,o=e.localColorSpaceCache,s=this.getCached(t,r,o)
if(s)return s
var c=this._parse(t,r,n,i)
return this._cache(t,r,o,c),c}},{key:"_parse",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3?arguments[3]:void 0
if(e=t.fetchIfRef(e),(0,s.isName)(e))switch(e.name){case"DeviceGray":case"G":return this.singletons.gray
case"DeviceRGB":case"RGB":return this.singletons.rgb
case"DeviceCMYK":case"CMYK":return this.singletons.cmyk
case"Pattern":return new w(null)
default:if((0,s.isDict)(r)){var n=r.get("ColorSpace")
if((0,s.isDict)(n)){var i=n.get(e.name)
if(i){if((0,s.isName)(i))return this._parse(i,t,r,a)
e=i
break}}}throw new o.FormatError("Unrecognized ColorSpace: ".concat(e.name))}if(Array.isArray(e)){var c,l,u,h,f,d,p=t.fetchIfRef(e[0]).name
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
if(S.numComps===l)return S;(0,o.warn)("ICCBased color space: Ignoring incorrect /Alternate entry.")}if(1===l)return this.singletons.gray
if(3===l)return this.singletons.rgb
if(4===l)return this.singletons.cmyk
break
case"Pattern":return(u=e[1]||null)&&(u=this._parse(u,t,r,a)),new w(u)
case"Indexed":case"I":u=this._parse(e[1],t,r,a)
var x=t.fetchIfRef(e[2])+1,C=t.fetchIfRef(e[3])
return new k(u,x,C)
case"Separation":case"DeviceN":var I=t.fetchIfRef(e[1])
l=Array.isArray(I)?I.length:1,u=this._parse(e[2],t,r,a)
var P=a.create(e[3])
return new y(l,u,P)
case"Lab":h=(c=t.fetchIfRef(e[1])).getArray("WhitePoint"),f=c.getArray("BlackPoint")
var E=c.getArray("Range")
return new T(h,f,E)
default:throw new o.FormatError("Unimplemented ColorSpace object: ".concat(p))}}throw new o.FormatError("Unrecognized ColorSpace object: ".concat(e))}},{key:"isDefaultDecode",value:function(e,t){if(!Array.isArray(e))return!0
if(2*t!==e.length)return(0,o.warn)("The decode map is not the correct length"),!0
for(var r=0,a=e.length;r<a;r+=2)if(0!==e[r]||1!==e[r+1])return!1
return!0}},{key:"singletons",get:function(){return(0,o.shadow)(this,"singletons",{get gray(){return(0,o.shadow)(this,"gray",new S)},get rgb(){return(0,o.shadow)(this,"rgb",new x)},get cmyk(){return(0,o.shadow)(this,"cmyk",new C)}})}}]),e}()
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
return g(this,r),(a=t.call(this,"Pattern",null)).base=e,a}return v(r,[{key:"isDefaultDecode",value:function(e,t){(0,o.unreachable)("Should not call PatternCS.isDefaultDecode")}}]),r}(b),k=function(e){l(r,e)
var t=h(r)
function r(e,a,n){var i
g(this,r),(i=t.call(this,"Indexed",1)).base=e,i.highVal=a
var c=e.numComps*a
if(i.lookup=new Uint8Array(c),(0,s.isStream)(n)){var l=n.getBytes(c)
i.lookup.set(l)}else{if("string"!=typeof n)throw new o.FormatError("IndexedCS - unrecognized lookup table: ".concat(n))
for(var u=0;u<c;++u)i.lookup[u]=255&n.charCodeAt(u)}return i}return v(r,[{key:"getRgbItem",value:function(e,t,r,a){var n=this.base.numComps,i=e[t]*n
this.base.getRgbBuffer(this.lookup,i,1,r,a,8,0)}},{key:"getRgbBuffer",value:function(e,t,r,a,n,i,o){for(var s=this.base,c=s.numComps,l=s.getOutputLength(c,o),u=this.lookup,h=0;h<r;++h){var f=e[t++]*c
s.getRgbBuffer(u,f,1,a,n,8,o),n+=l}}},{key:"getOutputLength",value:function(e,t){return this.base.getOutputLength(e*this.base.numComps,t)}},{key:"isDefaultDecode",value:function(e,t){return!Array.isArray(e)||(2!==e.length?((0,o.warn)("Decode map length is not correct"),!0):!Number.isInteger(t)||t<1?((0,o.warn)("Bits per component is not correct"),!0):0===e[0]&&e[1]===(1<<t)-1)}}]),r}(b),S=function(e){l(r,e)
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
function a(e,t,n){var i
if(g(this,a),i=r.call(this,"CalGray",1),!e)throw new o.FormatError("WhitePoint missing - required for color space CalGray")
if(t=t||[0,0,0],n=n||1,i.XW=e[0],i.YW=e[1],i.ZW=e[2],i.XB=t[0],i.YB=t[1],i.ZB=t[2],i.G=n,i.XW<0||i.ZW<0||1!==i.YW)throw new o.FormatError("Invalid WhitePoint components for ".concat(i.name)+", no fallback available")
return(i.XB<0||i.YB<0||i.ZB<0)&&((0,o.info)("Invalid BlackPoint for ".concat(i.name,", falling back to default.")),i.XB=i.YB=i.ZB=0),0===i.XB&&0===i.YB&&0===i.ZB||(0,o.warn)("".concat(i.name,", BlackPoint: XB: ").concat(i.XB,", YB: ").concat(i.YB,", ")+"ZB: ".concat(i.ZB,", only default values are supported.")),i.G<1&&((0,o.info)("Invalid Gamma: ".concat(i.G," for ").concat(i.name,", ")+"falling back to default."),i.G=1),i}return v(a,[{key:"getRgbItem",value:function(t,r,a,n){e(this,t,r,a,n,1)}},{key:"getRgbBuffer",value:function(t,r,a,n,i,o,s){for(var c=1/((1<<o)-1),l=0;l<a;++l)e(this,t,r,n,i,c),r+=1,i+=3+s}},{key:"getOutputLength",value:function(e,t){return e*(3+t)}}]),a}(b)}(),O=function(){var e=new Float32Array([.8951,.2664,-.1614,-.7502,1.7135,.0367,.0389,-.0685,1.0296]),t=new Float32Array([.9869929,-.1470543,.1599627,.4323053,.5183603,.0492912,-.0085287,.0400428,.9684867]),r=new Float32Array([3.2404542,-1.5371385,-.4985314,-.969266,1.8760108,.041556,.0556434,-.2040259,1.0572252]),a=new Float32Array([1,1,1]),n=new Float32Array(3),i=new Float32Array(3),s=new Float32Array(3),c=Math.pow(24/116,3)/8
function u(e,t,r){r[0]=e[0]*t[0]+e[1]*t[1]+e[2]*t[2],r[1]=e[3]*t[0]+e[4]*t[1]+e[5]*t[2],r[2]=e[6]*t[0]+e[7]*t[1]+e[8]*t[2]}function f(e){return e<=.0031308?d(0,1,12.92*e):e>=.99554525?1:d(0,1,1.055*Math.pow(e,1/2.4)-.055)}function d(e,t,r){return Math.max(e,Math.min(t,r))}function p(e){return e<0?-p(-e):e>8?Math.pow((e+16)/116,3):e*c}function m(o,c,l,h,g,m){var v=d(0,1,c[l]*m),b=d(0,1,c[l+1]*m),y=d(0,1,c[l+2]*m),w=1===v?1:Math.pow(v,o.GR),k=1===b?1:Math.pow(b,o.GG),S=1===y?1:Math.pow(y,o.GB),x=o.MXA*w+o.MXB*k+o.MXC*S,C=o.MYA*w+o.MYB*k+o.MYC*S,A=o.MZA*w+o.MZB*k+o.MZC*S,O=i
O[0]=x,O[1]=C,O[2]=A
var T=s;(function(r,a,i){if(1===r[0]&&1===r[2])return i[0]=a[0],i[1]=a[1],void(i[2]=a[2])
var o=i
u(e,a,o)
var s=n;(function(e,t,r){r[0]=1*t[0]/e[0],r[1]=1*t[1]/e[1],r[2]=1*t[2]/e[2]})(r,o,s),u(t,s,i)})(o.whitePoint,O,T)
var I=i;(function(e,t,r){if(0===e[0]&&0===e[1]&&0===e[2])return r[0]=t[0],r[1]=t[1],void(r[2]=t[2])
var a=p(0),n=(1-a)/(1-p(e[0])),i=1-n,o=(1-a)/(1-p(e[1])),s=1-o,c=(1-a)/(1-p(e[2])),l=1-c
r[0]=t[0]*n+i,r[1]=t[1]*o+s,r[2]=t[2]*c+l})(o.blackPoint,T,I)
var P=s;(function(r,a,i){var o=i
u(e,a,o)
var s=n;(function(e,t,r){r[0]=.95047*t[0]/e[0],r[1]=1*t[1]/e[1],r[2]=1.08883*t[2]/e[2]})(r,o,s),u(t,s,i)})(a,I,P)
var E=i
u(r,P,E),h[g]=255*f(E[0]),h[g+1]=255*f(E[1]),h[g+2]=255*f(E[2])}return function(e){l(r,e)
var t=h(r)
function r(e,a,n,i){var s
if(g(this,r),s=t.call(this,"CalRGB",3),!e)throw new o.FormatError("WhitePoint missing - required for color space CalRGB")
a=a||new Float32Array(3),n=n||new Float32Array([1,1,1]),i=i||new Float32Array([1,0,0,0,1,0,0,0,1])
var c=e[0],l=e[1],u=e[2]
s.whitePoint=e
var h=a[0],f=a[1],d=a[2]
if(s.blackPoint=a,s.GR=n[0],s.GG=n[1],s.GB=n[2],s.MXA=i[0],s.MYA=i[1],s.MZA=i[2],s.MXB=i[3],s.MYB=i[4],s.MZB=i[5],s.MXC=i[6],s.MYC=i[7],s.MZC=i[8],c<0||u<0||1!==l)throw new o.FormatError("Invalid WhitePoint components for ".concat(s.name)+", no fallback available")
return(h<0||f<0||d<0)&&((0,o.info)("Invalid BlackPoint for ".concat(s.name," [").concat(h,", ").concat(f,", ").concat(d,"], ")+"falling back to default."),s.blackPoint=new Float32Array(3)),(s.GR<0||s.GG<0||s.GB<0)&&((0,o.info)("Invalid Gamma [".concat(s.GR,", ").concat(s.GG,", ").concat(s.GB,"] for ")+"".concat(s.name,", falling back to default.")),s.GR=s.GG=s.GB=1),s}return v(r,[{key:"getRgbItem",value:function(e,t,r,a){m(this,e,t,r,a,1)}},{key:"getRgbBuffer",value:function(e,t,r,a,n,i,o){for(var s=1/((1<<i)-1),c=0;c<r;++c)m(this,e,t,a,n,s),t+=3,n+=3+o}},{key:"getOutputLength",value:function(e,t){return e*(3+t)/3|0}}]),r}(b)}(),T=function(){function e(e){return e>=6/29?e*e*e:108/841*(e-4/29)}function t(e,t,r,a){return r+e*(a-r)/t}function r(r,a,n,i,o,s){var c=a[n],l=a[n+1],u=a[n+2]
!1!==i&&(c=t(c,i,0,100),l=t(l,i,r.amin,r.amax),u=t(u,i,r.bmin,r.bmax)),l>r.amax?l=r.amax:l<r.amin&&(l=r.amin),u>r.bmax?u=r.bmax:u<r.bmin&&(u=r.bmin)
var h,f,d,p=(c+16)/116,g=p+l/500,m=p-u/200,v=r.XW*e(g),b=r.YW*e(p),y=r.ZW*e(m)
r.ZW<1?(h=3.1339*v+-1.617*b+-.4906*y,f=-.9785*v+1.916*b+.0333*y,d=.072*v+-.229*b+1.4057*y):(h=3.2406*v+-1.5372*b+-.4986*y,f=-.9689*v+1.8758*b+.0415*y,d=.0557*v+-.204*b+1.057*y),o[s]=255*Math.sqrt(h),o[s+1]=255*Math.sqrt(f),o[s+2]=255*Math.sqrt(d)}return function(e){l(a,e)
var t=h(a)
function a(e,r,n){var i
if(g(this,a),i=t.call(this,"Lab",3),!e)throw new o.FormatError("WhitePoint missing - required for color space Lab")
if(r=r||[0,0,0],n=n||[-100,100,-100,100],i.XW=e[0],i.YW=e[1],i.ZW=e[2],i.amin=n[0],i.amax=n[1],i.bmin=n[2],i.bmax=n[3],i.XB=r[0],i.YB=r[1],i.ZB=r[2],i.XW<0||i.ZW<0||1!==i.YW)throw new o.FormatError("Invalid WhitePoint components, no fallback available")
return(i.XB<0||i.YB<0||i.ZB<0)&&((0,o.info)("Invalid BlackPoint, falling back to default"),i.XB=i.YB=i.ZB=0),(i.amin>i.amax||i.bmin>i.bmax)&&((0,o.info)("Invalid Range, falling back to defaults"),i.amin=-100,i.amax=100,i.bmin=-100,i.bmax=100),i}return v(a,[{key:"getRgbItem",value:function(e,t,a,n){r(this,e,t,!1,a,n)}},{key:"getRgbBuffer",value:function(e,t,a,n,i,o,s){for(var c=(1<<o)-1,l=0;l<a;l++)r(this,e,t,c,n,i),t+=3,i+=3+s}},{key:"getOutputLength",value:function(e,t){return e*(3+t)/3|0}},{key:"isDefaultDecode",value:function(e,t){return!0}},{key:"usesZeroToOneRange",get:function(){return(0,o.shadow)(this,"usesZeroToOneRange",!1)}}]),a}(b)}()},(e,t,r)=>{"use strict"
function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.LocalTilingPatternCache=t.LocalImageCache=t.LocalGStateCache=t.LocalFunctionCache=t.LocalColorSpaceCache=t.GlobalImageCache=void 0
var n=r(4),i=r(135)
function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,a=u(e)
if(t){var n=u(this).constructor
r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments)
return l(this,r)}}function l(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var a=t[r]
a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function d(e,t,r){return t&&f(e.prototype,t),r&&f(e,r),e}var p=function(){function e(t){h(this,e),this.constructor===e&&(0,n.unreachable)("Cannot initialize BaseLocalCache."),t&&t.onlyRefs||(this._nameRefMap=new Map,this._imageMap=new Map),this._imageCache=new i.RefSetCache}return d(e,[{key:"getByName",value:function(e){var t=this._nameRefMap.get(e)
return t?this.getByRef(t):this._imageMap.get(e)||null}},{key:"getByRef",value:function(e){return this._imageCache.get(e)||null}},{key:"set",value:function(e,t,r){(0,n.unreachable)("Abstract method `set` called.")}}]),e}(),g=function(e){o(r,e)
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
function r(e){return h(this,r),t.call(this,{onlyRefs:!0})}return d(r,[{key:"getByName",value:function(e){(0,n.unreachable)("Should not call `getByName` method.")}},{key:"set",value:function(){var e=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0
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
var y=function(e){o(r,e)
var t=c(r)
function r(){return h(this,r),t.apply(this,arguments)}return d(r,[{key:"set",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2?arguments[2]:void 0
if(!e)throw new Error('LocalTilingPatternCache.set - expected "name" argument.')
if(t){if(this._imageCache.has(t))return
return this._nameRefMap.set(e,t),void this._imageCache.put(t,r)}this._imageMap.has(e)||this._imageMap.set(e,r)}}]),r}(p)
t.LocalTilingPatternCache=y
var w=function(){function e(){h(this,e),this._refCache=new i.RefSetCache,this._imageCache=new i.RefSetCache}return d(e,null,[{key:"NUM_PAGES_THRESHOLD",get:function(){return(0,n.shadow)(this,"NUM_PAGES_THRESHOLD",2)}},{key:"MAX_IMAGES_TO_CACHE",get:function(){return(0,n.shadow)(this,"MAX_IMAGES_TO_CACHE",10)}}]),d(e,[{key:"shouldCache",value:function(t,r){var a=this._refCache.get(t)
return!((a?a.size+(a.has(r)?0:1):1)<e.NUM_PAGES_THRESHOLD)&&!(!this._imageCache.has(t)&&this._imageCache.size>=e.MAX_IMAGES_TO_CACHE)}},{key:"addPageIndex",value:function(e,t){var r=this._refCache.get(e)
r||(r=new Set,this._refCache.put(e,r)),r.add(t)}},{key:"getData",value:function(t,r){var a=this._refCache.get(t)
return a?a.size<e.NUM_PAGES_THRESHOLD?null:this._imageCache.has(t)?(a.add(r),this._imageCache.get(t)):null:null}},{key:"setData",value:function(t,r){if(!this._refCache.has(t))throw new Error('GlobalImageCache.setData - expected "addPageIndex" to have been called.')
this._imageCache.has(t)||(this._imageCache.size>=e.MAX_IMAGES_TO_CACHE?(0,n.info)("GlobalImageCache.setData - ignoring image above MAX_IMAGES_TO_CACHE."):this._imageCache.put(t,r))}},{key:"clear",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
e||this._refCache.clear(),this._imageCache.clear()}}]),e}()
t.GlobalImageCache=w},(e,t,r)=>{"use strict"
function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.getQuadPoints=_,t.MarkupAnnotation=t.AnnotationFactory=t.AnnotationBorderStyle=t.Annotation=void 0
var n,i=(n=r(2))&&n.__esModule?n:{default:n},o=r(4),s=r(140),c=r(138),l=r(156),u=r(135),h=r(153),f=r(174),d=r(142),p=r(176)
function g(e,t,r){return(g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var a=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}(e,t)
if(a){var n=Object.getOwnPropertyDescriptor(a,t)
return n.get?n.get.call(r):n.value}})(e,t,r||e)}function m(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,a=w(e)
if(t){var n=w(this).constructor
r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments)
return y(this,r)}}function y(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t){var r
if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=A(e))||t&&e&&"number"==typeof e.length){r&&(e=r)
var a=0,n=function(){}
return{s:n,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1
return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next()
return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==r.return||r.return()}finally{if(s)throw i}}}}function S(e,t,r,a,n,i,o){try{var s=e[i](o),c=s.value}catch(l){return void r(l)}s.done?t(c):Promise.resolve(c).then(a,n)}function x(e){return function(){var t=this,r=arguments
return new Promise((function(a,n){var i=e.apply(t,r)
function o(e){S(i,a,n,o,s,"next",e)}function s(e){S(i,a,n,o,s,"throw",e)}o(void 0)}))}}function C(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return
var r=[],a=!0,n=!1,i=void 0
try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);a=!0);}catch(c){n=!0,i=c}finally{try{a||null==s.return||s.return()}finally{if(n)throw i}}return r}(e,t)||A(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){if(e){if("string"==typeof e)return O(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?O(e,t):void 0}}function O(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r]
return a}function T(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function I(e,t){for(var r=0;r<t.length;r++){var a=t[r]
a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function P(e,t,r){return t&&I(e.prototype,t),r&&I(e,r),e}var E=function(){function e(){T(this,e)}return P(e,null,[{key:"create",value:function(e,t,r,a){var n=this
return r.ensureCatalog("acroForm").then((function(i){return r.ensure(n,"_create",[e,t,r,a,i])}))}},{key:"_create",value:function(e,t,r,a,n){var i=e.fetchIfRef(t)
if((0,u.isDict)(i)){var s=(0,u.isRef)(t)?t.toString():"annot_".concat(a.createObjId()),l=i.get("Subtype"),h={xref:e,ref:t,dict:i,subtype:l=(0,u.isName)(l)?l.name:null,id:s,pdfManager:r,acroForm:n instanceof u.Dict?n:u.Dict.empty}
switch(l){case"Link":return new q(h)
case"Text":return new j(h)
case"Widget":var f=(0,c.getInheritableProperty)({dict:i,key:"FT"})
switch(f=(0,u.isName)(f)?f.name:null){case"Tx":return new L(h)
case"Btn":return new N(h)
case"Ch":return new U(h)}return(0,o.warn)('Unimplemented widget field type "'+f+'", falling back to base field type.'),new D(h)
case"Popup":return new z(h)
case"FreeText":return new G(h)
case"Line":return new H(h)
case"Square":return new W(h)
case"Circle":return new X(h)
case"PolyLine":return new V(h)
case"Polygon":return new K(h)
case"Caret":return new Y(h)
case"Ink":return new J(h)
case"Highlight":return new Z(h)
case"Underline":return new Q(h)
case"Squiggly":return new $(h)
case"StrikeOut":return new ee(h)
case"Stamp":return new te(h)
case"FileAttachment":return new re(h)
default:return l?(0,o.warn)('Unimplemented annotation type "'+l+'", falling back to base annotation.'):(0,o.warn)("Annotation is missing the required /Subtype."),new R(h)}}}}]),e}()
function _(e,t){if(!e.has("QuadPoints"))return null
var r=e.getArray("QuadPoints")
if(!Array.isArray(r)||0===r.length||r.length%8>0)return null
for(var a=[],n=0,i=r.length/8;n<i;n++){a.push([])
for(var o=8*n,s=8*n+8;o<s;o+=2){var c=r[o],l=r[o+1]
if(null!==t&&(c<t[0]||c>t[2]||l<t[1]||l>t[3]))return null
a[n].push({x:c,y:l})}}return a.map((function(e){var t=e.reduce((function(e,t){var r=C(e,4),a=r[0],n=r[1],i=r[2],o=r[3]
return[Math.min(a,t.x),Math.max(n,t.x),Math.min(i,t.y),Math.max(o,t.y)]}),[Number.MAX_VALUE,Number.MIN_VALUE,Number.MAX_VALUE,Number.MIN_VALUE]),r=C(t,4),a=r[0],n=r[1],i=r[2],o=r[3]
return[{x:a,y:o},{x:n,y:o},{x:a,y:i},{x:n,y:i}]}))}function F(e,t,r){var a=C(o.Util.getAxialAlignedBoundingBox(t,r),4),n=a[0],i=a[1],s=a[2],c=a[3]
if(n===s||i===c)return[1,0,0,1,e[0],e[1]]
var l=(e[2]-e[0])/(s-n),u=(e[3]-e[1])/(c-i)
return[l,0,0,u,e[0]-n*l,e[1]-i*u]}t.AnnotationFactory=E
var R=function(){function e(t){T(this,e)
var r=t.dict
this.setContents(r.get("Contents")),this.setModificationDate(r.get("M")),this.setFlags(r.get("F")),this.setRectangle(r.getArray("Rect")),this.setColor(r.getArray("C")),this.setBorderStyle(r),this.setAppearance(r),this._streams=[],this.appearance&&this._streams.push(this.appearance),this.data={annotationFlags:this.flags,borderStyle:this.borderStyle,color:this.color,contents:this.contents,hasAppearance:!!this.appearance,id:t.id,modificationDate:this.modificationDate,rect:this.rectangle,subtype:t.subtype},this._fallbackFontDict=null}var t
return P(e,[{key:"_hasFlag",value:function(e,t){return!!(e&t)}},{key:"_isViewable",value:function(e){return!this._hasFlag(e,o.AnnotationFlag.INVISIBLE)&&!this._hasFlag(e,o.AnnotationFlag.NOVIEW)}},{key:"_isPrintable",value:function(e){return this._hasFlag(e,o.AnnotationFlag.PRINT)&&!this._hasFlag(e,o.AnnotationFlag.INVISIBLE)}},{key:"isHidden",value:function(e){var t=e&&e[this.data.id]
return t&&"hidden"in t?t.hidden:this._hasFlag(this.flags,o.AnnotationFlag.HIDDEN)}},{key:"setContents",value:function(e){this.contents=(0,o.stringToPDFString)(e||"")}},{key:"setModificationDate",value:function(e){this.modificationDate=(0,o.isString)(e)?e:null}},{key:"setFlags",value:function(e){this.flags=Number.isInteger(e)&&e>0?e:0}},{key:"hasFlag",value:function(e){return this._hasFlag(this.flags,e)}},{key:"setRectangle",value:function(e){Array.isArray(e)&&4===e.length?this.rectangle=o.Util.normalizeRect(e):this.rectangle=[0,0,0,0]}},{key:"setColor",value:function(e){var t=new Uint8ClampedArray(3)
if(Array.isArray(e))switch(e.length){case 0:this.color=null
break
case 1:h.ColorSpace.singletons.gray.getRgbItem(e,0,t,0),this.color=t
break
case 3:h.ColorSpace.singletons.rgb.getRgbItem(e,0,t,0),this.color=t
break
case 4:h.ColorSpace.singletons.cmyk.getRgbItem(e,0,t,0),this.color=t
break
default:this.color=t}else this.color=t}},{key:"setBorderStyle",value:function(e){if(this.borderStyle=new B,(0,u.isDict)(e))if(e.has("BS")){var t=e.get("BS"),r=t.get("Type")
r&&!(0,u.isName)(r,"Border")||(this.borderStyle.setWidth(t.get("W"),this.rectangle),this.borderStyle.setStyle(t.get("S")),this.borderStyle.setDashArray(t.getArray("D")))}else if(e.has("Border")){var a=e.getArray("Border")
Array.isArray(a)&&a.length>=3&&(this.borderStyle.setHorizontalCornerRadius(a[0]),this.borderStyle.setVerticalCornerRadius(a[1]),this.borderStyle.setWidth(a[2],this.rectangle),4===a.length&&this.borderStyle.setDashArray(a[3]))}else this.borderStyle.setWidth(0)}},{key:"setAppearance",value:function(e){this.appearance=null
var t=e.get("AP")
if((0,u.isDict)(t)){var r=t.get("N")
if((0,u.isStream)(r))this.appearance=r
else if((0,u.isDict)(r)){var a=e.get("AS");(0,u.isName)(a)&&r.has(a.name)&&(this.appearance=r.get(a.name))}}}},{key:"loadResources",value:function(e){return this.appearance.dict.getAsync("Resources").then((function(t){if(t)return new s.ObjectLoader(t,e,t.xref).load().then((function(){return t}))}))}},{key:"getOperatorList",value:function(e,t,r,a){var n=this
if(!this.appearance)return Promise.resolve(new f.OperatorList)
var i=this.appearance,s=this.data,c=i.dict,l=this.loadResources(["ExtGState","ColorSpace","Pattern","Shading","XObject","Font"]),u=c.getArray("BBox")||[0,0,1,1],h=c.getArray("Matrix")||[1,0,0,1,0,0],d=F(s.rect,u,h)
return l.then((function(r){var a=new f.OperatorList
return a.addOp(o.OPS.beginAnnotation,[s.rect,d,h]),e.getOperatorList({stream:i,task:t,resources:r,operatorList:a,fallbackFontDict:n._fallbackFontDict}).then((function(){return a.addOp(o.OPS.endAnnotation,[]),n.reset(),a}))}))}},{key:"save",value:(t=x(i.default.mark((function e(t,r,a){return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",null)
case 1:case"end":return e.stop()}}),e)}))),function(e,r,a){return t.apply(this,arguments)})},{key:"getFieldObject",value:function(){return null}},{key:"reset",value:function(){var e,t=k(this._streams)
try{for(t.s();!(e=t.n()).done;){e.value.reset()}}catch(r){t.e(r)}finally{t.f()}}},{key:"viewable",get:function(){return null!==this.data.quadPoints&&(0===this.flags||this._isViewable(this.flags))}},{key:"printable",get:function(){return null!==this.data.quadPoints&&(0!==this.flags&&this._isPrintable(this.flags))}}]),e}()
t.Annotation=R
var B=function(){function e(){T(this,e),this.width=1,this.style=o.AnnotationBorderStyleType.SOLID,this.dashArray=[3],this.horizontalCornerRadius=0,this.verticalCornerRadius=0}return P(e,[{key:"setWidth",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[0,0,0,0]
if((0,u.isName)(e))this.width=0
else if(Number.isInteger(e)){if(e>0){var r=(t[2]-t[0])/2,a=(t[3]-t[1])/2
r>0&&a>0&&(e>r||e>a)&&((0,o.warn)("AnnotationBorderStyle.setWidth - ignoring width: ".concat(e)),e=1)}this.width=e}}},{key:"setStyle",value:function(e){if((0,u.isName)(e))switch(e.name){case"S":this.style=o.AnnotationBorderStyleType.SOLID
break
case"D":this.style=o.AnnotationBorderStyleType.DASHED
break
case"B":this.style=o.AnnotationBorderStyleType.BEVELED
break
case"I":this.style=o.AnnotationBorderStyleType.INSET
break
case"U":this.style=o.AnnotationBorderStyleType.UNDERLINE}}},{key:"setDashArray",value:function(e){if(Array.isArray(e)&&e.length>0){var t,r=!0,a=!0,n=k(e)
try{for(n.s();!(t=n.n()).done;){var i=t.value
if(!(+i>=0)){r=!1
break}i>0&&(a=!1)}}catch(o){n.e(o)}finally{n.f()}r&&!a?this.dashArray=e:this.width=0}else e&&(this.width=0)}},{key:"setHorizontalCornerRadius",value:function(e){Number.isInteger(e)&&(this.horizontalCornerRadius=e)}},{key:"setVerticalCornerRadius",value:function(e){Number.isInteger(e)&&(this.verticalCornerRadius=e)}}]),e}()
t.AnnotationBorderStyle=B
var M=function(e){m(r,e)
var t=b(r)
function r(e){var a
T(this,r),a=t.call(this,e)
var n=e.dict
if(n.has("IRT")){var i=n.getRaw("IRT")
a.data.inReplyTo=(0,u.isRef)(i)?i.toString():null
var s=n.get("RT")
a.data.replyType=(0,u.isName)(s)?s.name:o.AnnotationReplyType.REPLY}if(a.data.replyType===o.AnnotationReplyType.GROUP){var c=n.get("IRT")
a.data.title=(0,o.stringToPDFString)(c.get("T")||""),a.setContents(c.get("Contents")),a.data.contents=a.contents,c.has("CreationDate")?(a.setCreationDate(c.get("CreationDate")),a.data.creationDate=a.creationDate):a.data.creationDate=null,c.has("M")?(a.setModificationDate(c.get("M")),a.data.modificationDate=a.modificationDate):a.data.modificationDate=null,a.data.hasPopup=c.has("Popup"),c.has("C")?(a.setColor(c.getArray("C")),a.data.color=a.color):a.data.color=null}else a.data.title=(0,o.stringToPDFString)(n.get("T")||""),a.setCreationDate(n.get("CreationDate")),a.data.creationDate=a.creationDate,a.data.hasPopup=n.has("Popup"),n.has("C")||(a.data.color=null)
return a}return P(r,[{key:"setCreationDate",value:function(e){this.creationDate=(0,o.isString)(e)?e:null}},{key:"_setDefaultAppearance",value:function(e){var t=e.xref,r=e.extra,a=e.strokeColor,n=e.fillColor,i=e.blendMode,o=e.pointsCallback,s=Number.MAX_VALUE,c=Number.MAX_VALUE,l=Number.MIN_VALUE,h=Number.MIN_VALUE,f=["q"]
r&&f.push(r),a&&f.push("".concat(a[0]," ").concat(a[1]," ").concat(a[2]," RG")),n&&f.push("".concat(n[0]," ").concat(n[1]," ").concat(n[2]," rg"))
var p,g=k(this.data.quadPoints)
try{for(g.s();!(p=g.n()).done;){var m=C(o(f,p.value),4),v=m[0],b=m[1],y=m[2],w=m[3]
s=Math.min(s,v),l=Math.max(l,b),c=Math.min(c,y),h=Math.max(h,w)}}catch(_){g.e(_)}finally{g.f()}f.push("Q")
var S=new u.Dict(t),x=new u.Dict(t)
x.set("Subtype",u.Name.get("Form"))
var A=new d.StringStream(f.join(" "))
A.dict=x,S.set("Fm0",A)
var O=new u.Dict(t)
i&&O.set("BM",u.Name.get(i))
var T=new u.Dict(t)
T.set("GS0",O)
var I=new u.Dict(t)
I.set("ExtGState",T),I.set("XObject",S)
var P=new u.Dict(t)
P.set("Resources",I)
var E=this.data.rect=[s,c,l,h]
P.set("BBox",E),this.appearance=new d.StringStream("/GS0 gs /Fm0 Do"),this.appearance.dict=P,this._streams.push(this.appearance,A)}}]),r}(R)
t.MarkupAnnotation=M
var D=function(e){m(s,e)
var t,r,a,n=b(s)
function s(e){var t
T(this,s),t=n.call(this,e)
var r=e.dict,a=t.data
t.ref=e.ref,a.annotationType=o.AnnotationType.WIDGET,a.fieldName=t._constructFieldName(r),a.actions=(0,c.collectActions)(e.xref,r,o.AnnotationActionEventType)
var i=(0,c.getInheritableProperty)({dict:r,key:"V",getArray:!0})
a.fieldValue=t._decodeFormValue(i)
var h=(0,c.getInheritableProperty)({dict:r,key:"DV",getArray:!0})
a.defaultFieldValue=t._decodeFormValue(h),a.alternativeText=(0,o.stringToPDFString)(r.get("TU")||"")
var f=(0,c.getInheritableProperty)({dict:r,key:"DA"})||e.acroForm.get("DA")||""
a.defaultAppearance=(0,o.isString)(f)?f:"",a.defaultAppearanceData=(0,l.parseDefaultAppearance)(a.defaultAppearance)
var d=(0,c.getInheritableProperty)({dict:r,key:"FT"})
a.fieldType=(0,u.isName)(d)?d.name:null
var p=(0,c.getInheritableProperty)({dict:r,key:"DR"}),g=e.acroForm.get("DR"),m=t.appearance&&t.appearance.dict.get("Resources")
return t._fieldResources={localResources:p,acroFormResources:g,appearanceResources:m,mergedResources:u.Dict.merge({xref:e.xref,dictArray:[p,m,g],mergeSubDicts:!0})},a.fieldFlags=(0,c.getInheritableProperty)({dict:r,key:"Ff"}),(!Number.isInteger(a.fieldFlags)||a.fieldFlags<0)&&(a.fieldFlags=0),a.readOnly=t.hasFieldFlag(o.AnnotationFieldFlag.READONLY),a.hidden=t._hasFlag(a.annotationFlags,o.AnnotationFlag.HIDDEN),"Sig"===a.fieldType&&(a.fieldValue=null,t.setFlags(o.AnnotationFlag.HIDDEN),a.hidden=!0),t}return P(s,[{key:"_constructFieldName",value:function(e){if(!e.has("T")&&!e.has("Parent"))return(0,o.warn)("Unknown field name, falling back to empty field name."),""
if(!e.has("Parent"))return(0,o.stringToPDFString)(e.get("T"))
var t=[]
e.has("T")&&t.unshift((0,o.stringToPDFString)(e.get("T")))
for(var r=e;r.has("Parent")&&(r=r.get("Parent"),(0,u.isDict)(r));)r.has("T")&&t.unshift((0,o.stringToPDFString)(r.get("T")))
return t.join(".")}},{key:"_decodeFormValue",value:function(e){return Array.isArray(e)?e.filter((function(e){return(0,o.isString)(e)})).map((function(e){return(0,o.stringToPDFString)(e)})):(0,u.isName)(e)?(0,o.stringToPDFString)(e.name):(0,o.isString)(e)?(0,o.stringToPDFString)(e):null}},{key:"hasFieldFlag",value:function(e){return!!(this.data.fieldFlags&e)}},{key:"getOperatorList",value:function(e,t,r,a){var n=this
return r?Promise.resolve(new f.OperatorList):this._hasText?this._getAppearance(e,t,a).then((function(i){if(n.appearance&&null===i)return g(w(s.prototype),"getOperatorList",n).call(n,e,t,r,a)
var c=new f.OperatorList
if(!n.data.defaultAppearance||null===i)return c
var l=[1,0,0,1,0,0],u=[0,0,n.data.rect[2]-n.data.rect[0],n.data.rect[3]-n.data.rect[1]],h=F(n.data.rect,u,l)
c.addOp(o.OPS.beginAnnotation,[n.data.rect,h,l])
var p=new d.StringStream(i)
return e.getOperatorList({stream:p,task:t,resources:n._fieldResources.mergedResources,operatorList:c}).then((function(){return c.addOp(o.OPS.endAnnotation,[]),c}))})):g(w(s.prototype),"getOperatorList",this).call(this,e,t,r,a)}},{key:"save",value:(a=x(i.default.mark((function e(t,r,a){var n,s,c,l,h,f,d,g,m,v,b,y,w,k
return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((n=a[this.data.id]&&a[this.data.id].value)!==this.data.fieldValue&&void 0!==n){e.next=3
break}return e.abrupt("return",null)
case 3:return e.next=5,this._getAppearance(t,r,a)
case 5:if(null!==(s=e.sent)){e.next=8
break}return e.abrupt("return",null)
case 8:if(c=t.xref,l=c.fetchIfRef(this.ref),(0,u.isDict)(l)){e.next=12
break}return e.abrupt("return",null)
case 12:return h=[0,0,this.data.rect[2]-this.data.rect[0],this.data.rect[3]-this.data.rect[1]],f={path:(0,o.stringToPDFString)(l.get("T")||""),value:n},d=c.getNewRef(),(g=new u.Dict(c)).set("N",d),m=c.encrypt,v=null,b=null,m&&(v=m.createCipherTransform(this.ref.num,this.ref.gen),b=m.createCipherTransform(d.num,d.gen),s=b.encryptString(s)),l.set("V",(0,o.isAscii)(n)?n:(0,o.stringToUTF16BEString)(n)),l.set("AP",g),l.set("M","D:".concat((0,o.getModificationDate)())),(y=new u.Dict(c)).set("Length",s.length),y.set("Subtype",u.Name.get("Form")),y.set("Resources",this._getSaveFieldResources(c)),y.set("BBox",h),w=["".concat(this.ref.num," ").concat(this.ref.gen," obj\n")],(0,p.writeDict)(l,w,v),w.push("\nendobj\n"),k=["".concat(d.num," ").concat(d.gen," obj\n")],(0,p.writeDict)(y,k,b),k.push(" stream\n"),k.push(s),k.push("\nendstream\nendobj\n"),e.abrupt("return",[{ref:this.ref,data:w.join(""),xfa:f},{ref:d,data:k.join(""),xfa:null}])
case 38:case"end":return e.stop()}}),e,this)}))),function(e,t,r){return a.apply(this,arguments)})},{key:"_getAppearance",value:(r=x(i.default.mark((function e(t,r,a){var n,s,c,u,h,f,d,p,g,m,v,b,y,w
return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.hasFieldFlag(o.AnnotationFieldFlag.PASSWORD),a&&!n){e.next=3
break}return e.abrupt("return",null)
case 3:if(void 0!==(s=a[this.data.id]&&a[this.data.id].value)){e.next=6
break}return e.abrupt("return",null)
case 6:if(""!==s){e.next=8
break}return e.abrupt("return","")
case 8:return u=c=2,h=this.data.rect[3]-this.data.rect[1],f=this.data.rect[2]-this.data.rect[0],this.data.defaultAppearance||(this.data.defaultAppearance="/Helvetica 0 Tf 0 g",this.data.defaultAppearanceData=(0,l.parseDefaultAppearance)(this.data.defaultAppearance)),e.next=15,this._getFontData(t,r)
case 15:if(d=e.sent,p=this._computeFontSize(d,h),g=d.descent,isNaN(g)&&(g=0),m=c+Math.abs(g)*p,v=this.data.defaultAppearance,b=this.data.textAlignment,!this.data.multiLine){e.next=24
break}return e.abrupt("return",this._getMultilineAppearance(v,s,d,p,f,h,b,u,m))
case 24:if(y=d.encodeString(s).join(""),!this.data.comb){e.next=27
break}return e.abrupt("return",this._getCombAppearance(v,d,y,f,u,m))
case 27:if(!(0===b||b>2)){e.next=29
break}return e.abrupt("return","/Tx BMC q BT "+v+" 1 0 0 1 ".concat(u," ").concat(m," Tm (").concat((0,o.escapeString)(y),") Tj")+" ET Q EMC")
case 29:return w=this._renderText(y,d,p,f,b,u,m),e.abrupt("return","/Tx BMC q BT "+v+" 1 0 0 1 0 0 Tm ".concat(w)+" ET Q EMC")
case 31:case"end":return e.stop()}}),e,this)}))),function(e,t,a){return r.apply(this,arguments)})},{key:"_getFontData",value:(t=x(i.default.mark((function e(t,r){var a,n,o,s,c
return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new f.OperatorList,n={font:null,clone:function(){return this}},o=this.data.defaultAppearanceData,s=o.fontName,c=o.fontSize,e.next=5,t.handleSetFont(this._fieldResources.mergedResources,[s,c],null,a,r,n,null)
case 5:return e.abrupt("return",n.font)
case 6:case"end":return e.stop()}}),e,this)}))),function(e,r){return t.apply(this,arguments)})},{key:"_computeFontSize",value:function(e,t){var r=this.data.defaultAppearanceData.fontSize
if(!r){var a,n=this.data.defaultAppearanceData,i=n.fontColor,o=n.fontName
if(e.capHeight)a=e.capHeight
else{var s=e.charsToGlyphs(e.encodeString("M").join(""))
if(1===s.length&&s[0].width)a=.7*(s[0].width/1e3)
else a=.7}r=Math.max(1,Math.floor(t/(1.5*a))),this.data.defaultAppearance=(0,l.createDefaultAppearance)({fontSize:r,fontName:o,fontColor:i})}return r}},{key:"_renderText",value:function(e,t,r,a,n,i,s){var c,l,u=r/1e3,h=0,f=k(t.charsToGlyphs(e))
try{for(f.s();!(c=f.n()).done;){h+=c.value.width*u}}catch(d){f.e(d)}finally{f.f()}return l=(l=1===n?(a-h)/2:2===n?a-h-i:i).toFixed(2),s=s.toFixed(2),"".concat(l," ").concat(s," Td (").concat((0,o.escapeString)(e),") Tj")}},{key:"_getSaveFieldResources",value:function(e){var t=this._fieldResources,r=t.localResources,a=t.appearanceResources,n=t.acroFormResources,i=this.data.defaultAppearanceData&&this.data.defaultAppearanceData.fontName.name
if(!i)return r||u.Dict.empty
for(var o=0,s=[r,a];o<s.length;o++){var c=s[o]
if(c instanceof u.Dict){var l=c.get("Font")
if(l instanceof u.Dict&&l.has(i))return c}}if(n instanceof u.Dict){var h=n.get("Font")
if(h instanceof u.Dict&&h.has(i)){var f=new u.Dict(e)
f.set(i,h.getRaw(i))
var d=new u.Dict(e)
return d.set("Font",f),u.Dict.merge({xref:e,dictArray:[d,r],mergeSubDicts:!0})}}return r||u.Dict.empty}},{key:"getFieldObject",value:function(){return"Sig"===this.data.fieldType?{id:this.data.id,value:null,type:"signature"}:null}}]),s}(R),L=function(e){m(r,e)
var t=b(r)
function r(e){var a
T(this,r),(a=t.call(this,e))._hasText=!0
var n=e.dict;(0,o.isString)(a.data.fieldValue)||(a.data.fieldValue="")
var i=(0,c.getInheritableProperty)({dict:n,key:"Q"});(!Number.isInteger(i)||i<0||i>2)&&(i=null),a.data.textAlignment=i
var s=(0,c.getInheritableProperty)({dict:n,key:"MaxLen"})
return(!Number.isInteger(s)||s<0)&&(s=null),a.data.maxLen=s,a.data.multiLine=a.hasFieldFlag(o.AnnotationFieldFlag.MULTILINE),a.data.comb=a.hasFieldFlag(o.AnnotationFieldFlag.COMB)&&!a.hasFieldFlag(o.AnnotationFieldFlag.MULTILINE)&&!a.hasFieldFlag(o.AnnotationFieldFlag.PASSWORD)&&!a.hasFieldFlag(o.AnnotationFieldFlag.FILESELECT)&&null!==a.data.maxLen,a}return P(r,[{key:"_getCombAppearance",value:function(e,t,r,a,n,i){var s,c=(a/this.data.maxLen).toFixed(2),l=[],u=k(t.getCharPositions(r))
try{for(u.s();!(s=u.n()).done;){var h=C(s.value,2),f=h[0],d=h[1]
l.push("(".concat((0,o.escapeString)(r.substring(f,d)),") Tj"))}}catch(g){u.e(g)}finally{u.f()}var p=l.join(" ".concat(c," 0 Td "))
return"/Tx BMC q BT "+e+" 1 0 0 1 ".concat(n," ").concat(i," Tm ").concat(p)+" ET Q EMC"}},{key:"_getMultilineAppearance",value:function(e,t,r,a,n,i,o,s,c){var l,u=[],h=n-2*s,f=k(t.split(/\r\n|\r|\n/))
try{for(f.s();!(l=f.n()).done;){var d,p=l.value,g=k(this._splitLine(p,r,a,h))
try{for(g.s();!(d=g.n()).done;){var m=d.value,v=0===u.length?s:0
u.push(this._renderText(m,r,a,n,o,v,-a))}}catch(y){g.e(y)}finally{g.f()}}}catch(y){f.e(y)}finally{f.f()}var b=u.join("\n")
return"/Tx BMC q BT "+e+" 1 0 0 1 0 ".concat(i," Tm ").concat(b)+" ET Q EMC"}},{key:"_splitLine",value:function(e,t,r,a){e=t.encodeString(e).join("")
var n=t.charsToGlyphs(e)
if(n.length<=1)return[e]
for(var i=t.getCharPositions(e),o=r/1e3,s=[],c=-1,l=-1,u=-1,h=0,f=0,d=0,p=n.length;d<p;d++){var g=C(i[d],2),m=g[0],v=g[1],b=n[d],y=b.width*o
" "===b.unicode?f+y>a?(s.push(e.substring(h,m)),h=m,f=y,c=-1,u=-1):(f+=y,c=m,l=v,u=d):f+y>a?-1!==c?(s.push(e.substring(h,l)),h=l,d=u+1,c=-1,f=0):(s.push(e.substring(h,m)),h=m,f=y):f+=y}return h<e.length&&s.push(e.substring(h,e.length)),s}},{key:"getFieldObject",value:function(){return{id:this.data.id,value:this.data.fieldValue,defaultValue:this.data.defaultFieldValue,multiline:this.data.multiLine,password:this.hasFieldFlag(o.AnnotationFieldFlag.PASSWORD),charLimit:this.data.maxLen,comb:this.data.comb,editable:!this.data.readOnly,hidden:this.data.hidden,name:this.data.fieldName,rect:this.data.rect,actions:this.data.actions,type:"text"}}}]),r}(D),N=function(e){m(c,e)
var t,r,a,n=b(c)
function c(e){var t
return T(this,c),(t=n.call(this,e)).checkedAppearance=null,t.uncheckedAppearance=null,t.data.checkBox=!t.hasFieldFlag(o.AnnotationFieldFlag.RADIO)&&!t.hasFieldFlag(o.AnnotationFieldFlag.PUSHBUTTON),t.data.radioButton=t.hasFieldFlag(o.AnnotationFieldFlag.RADIO)&&!t.hasFieldFlag(o.AnnotationFieldFlag.PUSHBUTTON),t.data.pushButton=t.hasFieldFlag(o.AnnotationFieldFlag.PUSHBUTTON),t.data.isTooltipOnly=!1,t.data.checkBox?t._processCheckBox(e):t.data.radioButton?t._processRadioButton(e):t.data.pushButton?t._processPushButton(e):(0,o.warn)("Invalid field flags for button widget annotation"),t}return P(c,[{key:"getOperatorList",value:function(e,t,r,a){if(this.data.pushButton)return g(w(c.prototype),"getOperatorList",this).call(this,e,t,!1,a)
if(a){var n,i=a[this.data.id]&&a[this.data.id].value
if(void 0===i)return g(w(c.prototype),"getOperatorList",this).call(this,e,t,r,a)
if(n=i?this.checkedAppearance:this.uncheckedAppearance){var o=this.appearance
this.appearance=n
var s=g(w(c.prototype),"getOperatorList",this).call(this,e,t,r,a)
return this.appearance=o,s}return Promise.resolve(new f.OperatorList)}return g(w(c.prototype),"getOperatorList",this).call(this,e,t,r,a)}},{key:"save",value:(a=x(i.default.mark((function e(t,r,a){return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.data.checkBox){e.next=2
break}return e.abrupt("return",this._saveCheckbox(t,r,a))
case 2:if(!this.data.radioButton){e.next=4
break}return e.abrupt("return",this._saveRadioButton(t,r,a))
case 4:return e.abrupt("return",null)
case 5:case"end":return e.stop()}}),e,this)}))),function(e,t,r){return a.apply(this,arguments)})},{key:"_saveCheckbox",value:(r=x(i.default.mark((function e(t,r,a){var n,s,c,l,h,f,d
return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==(n=a[this.data.id]&&a[this.data.id].value)){e.next=3
break}return e.abrupt("return",null)
case 3:if((this.data.fieldValue&&"Off"!==this.data.fieldValue)!==n){e.next=6
break}return e.abrupt("return",null)
case 6:if(s=t.xref.fetchIfRef(this.ref),(0,u.isDict)(s)){e.next=9
break}return e.abrupt("return",null)
case 9:return c={path:(0,o.stringToPDFString)(s.get("T")||""),value:n?this.data.exportValue:""},l=u.Name.get(n?this.data.exportValue:"Off"),s.set("V",l),s.set("AS",l),s.set("M","D:".concat((0,o.getModificationDate)())),h=t.xref.encrypt,f=null,h&&(f=h.createCipherTransform(this.ref.num,this.ref.gen)),d=["".concat(this.ref.num," ").concat(this.ref.gen," obj\n")],(0,p.writeDict)(s,d,f),d.push("\nendobj\n"),e.abrupt("return",[{ref:this.ref,data:d.join(""),xfa:c}])
case 21:case"end":return e.stop()}}),e,this)}))),function(e,t,a){return r.apply(this,arguments)})},{key:"_saveRadioButton",value:(t=x(i.default.mark((function e(t,r,a){var n,s,c,l,h,f,d,g,m,v,b
return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==(n=a[this.data.id]&&a[this.data.id].value)){e.next=3
break}return e.abrupt("return",null)
case 3:if(this.data.fieldValue===this.data.buttonValue!==n){e.next=6
break}return e.abrupt("return",null)
case 6:if(s=t.xref.fetchIfRef(this.ref),(0,u.isDict)(s)){e.next=9
break}return e.abrupt("return",null)
case 9:return c={path:(0,o.stringToPDFString)(s.get("T")||""),value:n?this.data.buttonValue:""},l=u.Name.get(n?this.data.buttonValue:"Off"),h=null,f=t.xref.encrypt,n&&((0,u.isRef)(this.parent)?(d=t.xref.fetch(this.parent),g=null,f&&(g=f.createCipherTransform(this.parent.num,this.parent.gen)),d.set("V",l),h=["".concat(this.parent.num," ").concat(this.parent.gen," obj\n")],(0,p.writeDict)(d,h,g),h.push("\nendobj\n")):(0,u.isDict)(this.parent)&&this.parent.set("V",l)),s.set("AS",l),s.set("M","D:".concat((0,o.getModificationDate)())),m=null,f&&(m=f.createCipherTransform(this.ref.num,this.ref.gen)),v=["".concat(this.ref.num," ").concat(this.ref.gen," obj\n")],(0,p.writeDict)(s,v,m),v.push("\nendobj\n"),b=[{ref:this.ref,data:v.join(""),xfa:c}],null!==h&&b.push({ref:this.parent,data:h.join(""),xfa:null}),e.abrupt("return",b)
case 24:case"end":return e.stop()}}),e,this)}))),function(e,r,a){return t.apply(this,arguments)})},{key:"_processCheckBox",value:function(e){var t=e.dict.get("AP")
if((0,u.isDict)(t)){var r=t.get("N")
if((0,u.isDict)(r)){var a=r.getKeys()
a.includes("Off")||a.push("Off"),2===a.length&&(this.data.exportValue="Off"===a[0]?a[1]:a[0],this.checkedAppearance=r.get(this.data.exportValue),this.uncheckedAppearance=r.get("Off")||null,this._streams.push(this.checkedAppearance),this.uncheckedAppearance&&this._streams.push(this.uncheckedAppearance),this._fallbackFontDict=this.fallbackFontDict)}}}},{key:"_processRadioButton",value:function(e){this.data.fieldValue=this.data.buttonValue=null
var t=e.dict.get("Parent")
if((0,u.isDict)(t)){this.parent=e.dict.getRaw("Parent")
var r=t.get("V");(0,u.isName)(r)&&(this.data.fieldValue=this._decodeFormValue(r))}var a=e.dict.get("AP")
if((0,u.isDict)(a)){var n=a.get("N")
if((0,u.isDict)(n)){var i,o=k(n.getKeys())
try{for(o.s();!(i=o.n()).done;){var s=i.value
if("Off"!==s){this.data.buttonValue=this._decodeFormValue(s)
break}}}catch(c){o.e(c)}finally{o.f()}this.checkedAppearance=n.get(this.data.buttonValue),this.uncheckedAppearance=n.get("Off")||null,this._streams.push(this.checkedAppearance),this.uncheckedAppearance&&this._streams.push(this.uncheckedAppearance),this._fallbackFontDict=this.fallbackFontDict}}}},{key:"_processPushButton",value:function(e){e.dict.has("A")||e.dict.has("AA")||this.data.alternativeText?(this.data.isTooltipOnly=!e.dict.has("A")&&!e.dict.has("AA"),s.Catalog.parseDestDictionary({destDict:e.dict,resultObj:this.data,docBaseUrl:e.pdfManager.docBaseUrl})):(0,o.warn)("Push buttons without action dictionaries are not supported")}},{key:"getFieldObject",value:function(){var e,t="button"
return this.data.checkBox?(t="checkbox",e=this.data.exportValue):this.data.radioButton&&(t="radiobutton",e=this.data.buttonValue),{id:this.data.id,value:this.data.fieldValue||"Off",defaultValue:this.data.defaultFieldValue,exportValues:e,editable:!this.data.readOnly,name:this.data.fieldName,rect:this.data.rect,hidden:this.data.hidden,actions:this.data.actions,type:t}}},{key:"fallbackFontDict",get:function(){var e=new u.Dict
return e.set("BaseFont",u.Name.get("ZapfDingbats")),e.set("Type",u.Name.get("FallbackType")),e.set("Subtype",u.Name.get("FallbackType")),e.set("Encoding",u.Name.get("ZapfDingbatsEncoding")),(0,o.shadow)(this,"fallbackFontDict",e)}}]),c}(D),U=function(e){m(r,e)
var t=b(r)
function r(e){var a
T(this,r),(a=t.call(this,e)).data.options=[]
var n=(0,c.getInheritableProperty)({dict:e.dict,key:"Opt"})
if(Array.isArray(n))for(var i=e.xref,s=0,l=n.length;s<l;s++){var u=i.fetchIfRef(n[s]),h=Array.isArray(u)
a.data.options[s]={exportValue:a._decodeFormValue(h?i.fetchIfRef(u[0]):u),displayValue:a._decodeFormValue(h?i.fetchIfRef(u[1]):u)}}return(0,o.isString)(a.data.fieldValue)?a.data.fieldValue=[a.data.fieldValue]:a.data.fieldValue||(a.data.fieldValue=[]),a.data.combo=a.hasFieldFlag(o.AnnotationFieldFlag.COMBO),a.data.multiSelect=a.hasFieldFlag(o.AnnotationFieldFlag.MULTISELECT),a._hasText=!0,a}return P(r,[{key:"getFieldObject",value:function(){var e=this.data.combo?"combobox":"listbox",t=this.data.fieldValue.length>0?this.data.fieldValue[0]:null
return{id:this.data.id,value:t,defaultValue:this.data.defaultFieldValue,editable:!this.data.readOnly,name:this.data.fieldName,rect:this.data.rect,numItems:this.data.fieldValue.length,multipleSelection:this.data.multiSelect,hidden:this.data.hidden,actions:this.data.actions,type:e}}}]),r}(D),j=function(e){m(r,e)
var t=b(r)
function r(e){var a
T(this,r)
a=t.call(this,e)
var n=e.dict
return a.data.annotationType=o.AnnotationType.TEXT,a.data.hasAppearance?a.data.name="NoIcon":(a.data.rect[1]=a.data.rect[3]-22,a.data.rect[2]=a.data.rect[0]+22,a.data.name=n.has("Name")?n.get("Name").name:"Note"),n.has("State")?(a.data.state=n.get("State")||null,a.data.stateModel=n.get("StateModel")||null):(a.data.state=null,a.data.stateModel=null),a}return r}(M),q=function(e){m(r,e)
var t=b(r)
function r(e){var a
T(this,r),(a=t.call(this,e)).data.annotationType=o.AnnotationType.LINK
var n=_(e.dict,a.rectangle)
return n&&(a.data.quadPoints=n),s.Catalog.parseDestDictionary({destDict:e.dict,resultObj:a.data,docBaseUrl:e.pdfManager.docBaseUrl}),a}return r}(R),z=function(e){m(r,e)
var t=b(r)
function r(e){var a
T(this,r),(a=t.call(this,e)).data.annotationType=o.AnnotationType.POPUP
var n=e.dict.get("Parent")
if(!n)return(0,o.warn)("Popup annotation has a missing or invalid parent annotation."),y(a)
var i=n.get("Subtype")
a.data.parentType=(0,u.isName)(i)?i.name:null
var s=e.dict.getRaw("Parent")
a.data.parentId=(0,u.isRef)(s)?s.toString():null
var c=n.getArray("Rect")
Array.isArray(c)&&4===c.length?a.data.parentRect=o.Util.normalizeRect(c):a.data.parentRect=[0,0,0,0]
var l=n.get("RT")
if((0,u.isName)(l,o.AnnotationReplyType.GROUP)&&(n=n.get("IRT")),n.has("M")?(a.setModificationDate(n.get("M")),a.data.modificationDate=a.modificationDate):a.data.modificationDate=null,n.has("C")?(a.setColor(n.getArray("C")),a.data.color=a.color):a.data.color=null,!a.viewable){var h=n.get("F")
a._isViewable(h)&&a.setFlags(h)}return a.data.title=(0,o.stringToPDFString)(n.get("T")||""),a.data.contents=(0,o.stringToPDFString)(n.get("Contents")||""),a}return r}(R),G=function(e){m(r,e)
var t=b(r)
function r(e){var a
return T(this,r),(a=t.call(this,e)).data.annotationType=o.AnnotationType.FREETEXT,a}return r}(M),H=function(e){m(r,e)
var t=b(r)
function r(e){var a
return T(this,r),(a=t.call(this,e)).data.annotationType=o.AnnotationType.LINE,a.data.lineCoordinates=o.Util.normalizeRect(e.dict.getArray("L")),a}return r}(M),W=function(e){m(r,e)
var t=b(r)
function r(e){var a
return T(this,r),(a=t.call(this,e)).data.annotationType=o.AnnotationType.SQUARE,a}return r}(M),X=function(e){m(r,e)
var t=b(r)
function r(e){var a
return T(this,r),(a=t.call(this,e)).data.annotationType=o.AnnotationType.CIRCLE,a}return r}(M),V=function(e){m(r,e)
var t=b(r)
function r(e){var a
T(this,r),(a=t.call(this,e)).data.annotationType=o.AnnotationType.POLYLINE,a.data.vertices=[]
var n=e.dict.getArray("Vertices")
if(!Array.isArray(n))return y(a)
for(var i=0,s=n.length;i<s;i+=2)a.data.vertices.push({x:n[i],y:n[i+1]})
return a}return r}(M),K=function(e){m(r,e)
var t=b(r)
function r(e){var a
return T(this,r),(a=t.call(this,e)).data.annotationType=o.AnnotationType.POLYGON,a}return r}(V),Y=function(e){m(r,e)
var t=b(r)
function r(e){var a
return T(this,r),(a=t.call(this,e)).data.annotationType=o.AnnotationType.CARET,a}return r}(M),J=function(e){m(r,e)
var t=b(r)
function r(e){var a
T(this,r),(a=t.call(this,e)).data.annotationType=o.AnnotationType.INK,a.data.inkLists=[]
var n=e.dict.getArray("InkList")
if(!Array.isArray(n))return y(a)
for(var i=e.xref,s=0,c=n.length;s<c;++s){a.data.inkLists.push([])
for(var l=0,u=n[s].length;l<u;l+=2)a.data.inkLists[s].push({x:i.fetchIfRef(n[s][l]),y:i.fetchIfRef(n[s][l+1])})}return a}return r}(M),Z=function(e){m(r,e)
var t=b(r)
function r(e){var a
if(T(this,r),(a=t.call(this,e)).data.annotationType=o.AnnotationType.HIGHLIGHT,a.data.quadPoints=_(e.dict,null)){if(!a.appearance){var n=a.color?Array.from(a.color).map((function(e){return e/255})):[1,1,0]
a._setDefaultAppearance({xref:e.xref,fillColor:n,blendMode:"Multiply",pointsCallback:function(e,t){return e.push("".concat(t[0].x," ").concat(t[0].y," m")),e.push("".concat(t[1].x," ").concat(t[1].y," l")),e.push("".concat(t[3].x," ").concat(t[3].y," l")),e.push("".concat(t[2].x," ").concat(t[2].y," l")),e.push("f"),[t[0].x,t[1].x,t[3].y,t[1].y]}})}}else a.data.hasPopup=!1
return a}return r}(M),Q=function(e){m(r,e)
var t=b(r)
function r(e){var a
if(T(this,r),(a=t.call(this,e)).data.annotationType=o.AnnotationType.UNDERLINE,a.data.quadPoints=_(e.dict,null)){if(!a.appearance){var n=a.color?Array.from(a.color).map((function(e){return e/255})):[0,0,0]
a._setDefaultAppearance({xref:e.xref,extra:"[] 0 d 1 w",strokeColor:n,pointsCallback:function(e,t){return e.push("".concat(t[2].x," ").concat(t[2].y," m")),e.push("".concat(t[3].x," ").concat(t[3].y," l")),e.push("S"),[t[0].x,t[1].x,t[3].y,t[1].y]}})}}else a.data.hasPopup=!1
return a}return r}(M),$=function(e){m(r,e)
var t=b(r)
function r(e){var a
if(T(this,r),(a=t.call(this,e)).data.annotationType=o.AnnotationType.SQUIGGLY,a.data.quadPoints=_(e.dict,null)){if(!a.appearance){var n=a.color?Array.from(a.color).map((function(e){return e/255})):[0,0,0]
a._setDefaultAppearance({xref:e.xref,extra:"[] 0 d 1 w",strokeColor:n,pointsCallback:function(e,t){var r=(t[0].y-t[2].y)/6,a=r,n=t[2].x,i=t[2].y,o=t[3].x
e.push("".concat(n," ").concat(i+a," m"))
do{n+=2,a=0===a?r:0,e.push("".concat(n," ").concat(i+a," l"))}while(n<o)
return e.push("S"),[t[2].x,o,i-2*r,i+2*r]}})}}else a.data.hasPopup=!1
return a}return r}(M),ee=function(e){m(r,e)
var t=b(r)
function r(e){var a
if(T(this,r),(a=t.call(this,e)).data.annotationType=o.AnnotationType.STRIKEOUT,a.data.quadPoints=_(e.dict,null)){if(!a.appearance){var n=a.color?Array.from(a.color).map((function(e){return e/255})):[0,0,0]
a._setDefaultAppearance({xref:e.xref,extra:"[] 0 d 1 w",strokeColor:n,pointsCallback:function(e,t){return e.push("".concat((t[0].x+t[2].x)/2)+" ".concat((t[0].y+t[2].y)/2," m")),e.push("".concat((t[1].x+t[3].x)/2)+" ".concat((t[1].y+t[3].y)/2," l")),e.push("S"),[t[0].x,t[1].x,t[3].y,t[1].y]}})}}else a.data.hasPopup=!1
return a}return r}(M),te=function(e){m(r,e)
var t=b(r)
function r(e){var a
return T(this,r),(a=t.call(this,e)).data.annotationType=o.AnnotationType.STAMP,a}return r}(M),re=function(e){m(r,e)
var t=b(r)
function r(e){var a
T(this,r),a=t.call(this,e)
var n=new s.FileSpec(e.dict.get("FS"),e.xref)
return a.data.annotationType=o.AnnotationType.FILEATTACHMENT,a.data.file=n.serializable,a}return r}(M)},(e,t,r)=>{"use strict"
function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.createDefaultAppearance=function(e){var t,r=e.fontSize,a=e.fontName,n=e.fontColor
t=n.every((function(e){return 0===e}))?"0 g":Array.from(n).map((function(e){return(e/255).toFixed(2)})).join(" ")+" rg"
return"/".concat((0,s.escapePDFName)(a.name)," ").concat(r," Tf ").concat(t)},t.parseDefaultAppearance=function(e){return new v(e).parse()}
var n=r(135),i=r(4),o=r(153),s=r(138),c=r(157),l=r(142)
function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return
var r=[],a=!0,n=!1,i=void 0
try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);a=!0);}catch(c){n=!0,i=c}finally{try{a||null==s.return||s.return()}finally{if(n)throw i}}return r}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return h(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r]
return a}function f(e,t){for(var r=0;r<t.length;r++){var a=t[r]
a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,a=m(e)
if(t){var n=m(this).constructor
r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments)
return g(this,r)}}function g(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var v=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)})(c,e)
var t,r,a,s=p(c)
function c(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),s.call(this,new l.StringStream(e))}return t=c,(r=[{key:"parse",value:function(){var e={fn:0,args:[]},t={fontSize:0,fontName:n.Name.get(""),fontColor:new Uint8ClampedArray([0,0,0])}
try{for(;e.args.length=0,this.read(e);)if(0===this.savedStatesDepth){var r=e.fn,a=e.args
switch(0|r){case i.OPS.setFont:var s=u(a,2),c=s[0],l=s[1];(0,n.isName)(c)&&(t.fontName=c),"number"==typeof l&&l>0&&(t.fontSize=l)
break
case i.OPS.setFillRGBColor:o.ColorSpace.singletons.rgb.getRgbItem(a,0,t.fontColor,0)
break
case i.OPS.setFillGray:o.ColorSpace.singletons.gray.getRgbItem(a,0,t.fontColor,0)
break
case i.OPS.setFillColorSpace:o.ColorSpace.singletons.cmyk.getRgbItem(a,0,t.fontColor,0)}}}catch(h){(0,i.warn)('parseDefaultAppearance - ignoring errors: "'.concat(h,'".'))}return t}}])&&f(t.prototype,r),a&&f(t,a),c}(c.EvaluatorPreprocessor)},(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.PartialEvaluator=t.EvaluatorPreprocessor=void 0
var a,n=(a=r(2))&&a.__esModule?a:{default:a},i=r(4),o=r(158),s=r(135),c=r(159),l=r(162),u=r(138),h=r(165),f=r(164),d=r(168),p=r(169),g=r(141),m=r(154),v=r(171),b=r(153),y=r(142),w=r(163),k=r(172),S=r(173),x=r(174),C=r(175)
function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return
var r=[],a=!0,n=!1,i=void 0
try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);a=!0);}catch(c){n=!0,i=c}finally{try{a||null==s.return||s.return()}finally{if(n)throw i}}return r}(e,t)||P(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t,r,a,n,i,o){try{var s=e[i](o),c=s.value}catch(l){return void r(l)}s.done?t(c):Promise.resolve(c).then(a,n)}function T(e){return function(){var t=this,r=arguments
return new Promise((function(a,n){var i=e.apply(t,r)
function o(e){O(i,a,n,o,s,"next",e)}function s(e){O(i,a,n,o,s,"throw",e)}o(void 0)}))}}function I(e,t){var r
if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=P(e))||t&&e&&"number"==typeof e.length){r&&(e=r)
var a=0,n=function(){}
return{s:n,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1
return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next()
return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==r.return||r.return()}finally{if(s)throw i}}}}function P(e,t){if(e){if("string"==typeof e)return E(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?E(e,t):void 0}}function E(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r]
return a}function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function F(e,t){for(var r=0;r<t.length;r++){var a=t[r]
a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function R(e,t,r){return t&&F(e.prototype,t),r&&F(e,r),e}var B=Object.freeze({maxImageSize:-1,disableFontFace:!1,ignoreErrors:!1,isEvalSupported:!0,fontExtraProperties:!1}),M=1,D=2,L=Promise.resolve()
function N(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
if(Array.isArray(e)){for(var r=0,a=e.length;r<a;r++){var n=N(e[r],!0)
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
case"Luminosity":return"luminosity"}return t?null:((0,i.warn)("Unsupported blend mode: ".concat(e.name)),"source-over")}var U=function(){function e(){_(this,e),this.reset()}return R(e,null,[{key:"TIME_SLOT_DURATION_MS",get:function(){return(0,i.shadow)(this,"TIME_SLOT_DURATION_MS",20)}},{key:"CHECK_TIME_EVERY",get:function(){return(0,i.shadow)(this,"CHECK_TIME_EVERY",100)}}]),R(e,[{key:"check",value:function(){return!(++this.checked<e.CHECK_TIME_EVERY)&&(this.checked=0,this.endTime<=Date.now())}},{key:"reset",value:function(){this.endTime=Date.now()+e.TIME_SLOT_DURATION_MS,this.checked=0}}]),e}(),j=function(){function e(t){var r=t.xref,a=t.handler,n=t.pageIndex,i=t.idFactory,o=t.fontCache,s=t.builtInCMapCache,c=t.globalImageCache,l=t.options,u=void 0===l?null:l
_(this,e),this.xref=r,this.handler=a,this.pageIndex=n,this.idFactory=i,this.fontCache=o,this.builtInCMapCache=s,this.globalImageCache=c,this.options=u||B,this.parsingType3Font=!1,this._fetchBuiltInCMapBound=this.fetchBuiltInCMap.bind(this)}var t,r,a,g,A,O
return R(e,[{key:"clone",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=Object.create(this)
return t.options=e,t}},{key:"hasBlendModes",value:function(e,t){if(!(e instanceof s.Dict))return!1
if(e.objId&&t.has(e.objId))return!1
var r=new s.RefSet(t)
e.objId&&r.put(e.objId)
for(var a=[e],n=this.xref;a.length;){var o=a.shift(),c=o.get("ExtGState")
if(c instanceof s.Dict){var l,h=I(c.getRawValues())
try{for(h.s();!(l=h.n()).done;){var f=l.value
if(f instanceof s.Ref){if(r.has(f))continue
try{f=n.fetch(f)}catch(S){if(S instanceof u.MissingDataException)throw S
r.put(f),(0,i.info)('hasBlendModes - ignoring ExtGState: "'.concat(S,'".'))
continue}}if(f instanceof s.Dict){f.objId&&r.put(f.objId)
var d=f.get("BM")
if(d instanceof s.Name){if("Normal"!==d.name)return!0}else if(void 0!==d&&Array.isArray(d)){var p,g=I(d)
try{for(g.s();!(p=g.n()).done;){var m=p.value
if(m instanceof s.Name&&"Normal"!==m.name)return!0}}catch(x){g.e(x)}finally{g.f()}}}}}catch(x){h.e(x)}finally{h.f()}}var v=o.get("XObject")
if(v instanceof s.Dict){var b,y=I(v.getRawValues())
try{for(y.s();!(b=y.n()).done;){var w=b.value
if(w instanceof s.Ref){if(r.has(w))continue
try{w=n.fetch(w)}catch(S){if(S instanceof u.MissingDataException)throw S
r.put(w),(0,i.info)('hasBlendModes - ignoring XObject: "'.concat(S,'".'))
continue}}if((0,s.isStream)(w)){w.dict.objId&&r.put(w.dict.objId)
var k=w.dict.get("Resources")
k instanceof s.Dict&&(k.objId&&r.has(k.objId)||(a.push(k),k.objId&&r.put(k.objId)))}}}catch(x){y.e(x)}finally{y.f()}}}return r.forEach((function(e){t.put(e)})),!1}},{key:"fetchBuiltInCMap",value:(O=T(n.default.mark((function e(t){var r,a,o,s
return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=this.builtInCMapCache.get(t))){e.next=3
break}return e.abrupt("return",r)
case 3:return a=this.handler.sendWithStream("FetchBuiltInCMap",{name:t}),o=a.getReader(),e.next=7,new Promise((function(e,t){(function r(){o.read().then((function(t){var a=t.value
t.done||(e(a),r())}),t)})()}))
case 7:return(s=e.sent).compressionType!==i.CMapCompressionType.NONE&&this.builtInCMapCache.set(t,s),e.abrupt("return",s)
case 10:case"end":return e.stop()}}),e,this)}))),function(e){return O.apply(this,arguments)})},{key:"buildFormXObject",value:(A=T(n.default.mark((function e(t,r,a,o,c,l,u){var h,f,d,p,g,m,v,y,w,k
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
return this.parsingType3Font||r?this.handler.send("commonobj",[e,"Image",t],a):this.handler.send("obj",[e,this.pageIndex,"Image",t],a)}},{key:"buildPaintImageXObject",value:(g=T(n.default.mark((function e(t){var r,a,o,s,c,l,u,h,f,d,p,g,m,v,b,w,k,S,x,A,O,T,I,P,E,_=this
return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.resources,a=t.image,o=t.isInline,s=void 0!==o&&o,c=t.operatorList,l=t.cacheKey,u=t.localImageCache,h=t.localColorSpaceCache,f=a.dict,d=f.objId,p=f.get("Width","W"),g=f.get("Height","H"),p&&(0,i.isNum)(p)&&g&&(0,i.isNum)(g)){e.next=8
break}return(0,i.warn)("Image dimensions are missing, or not numbers."),e.abrupt("return",void 0)
case 8:if(!(-1!==(m=this.options.maxImageSize)&&p*g>m)){e.next=12
break}return(0,i.warn)("Image exceeded maximum allowed size and was removed."),e.abrupt("return",void 0)
case 12:if(!f.get("ImageMask","IM")){e.next=25
break}return w=f.get("Width","W"),k=f.get("Height","H"),S=w+7>>3,x=a.getBytes(S*k,!0),A=f.getArray("Decode","D"),(v=C.PDFImage.createMask({imgArray:x,width:w,height:k,imageIsFromDecodeStream:a instanceof y.DecodeStream,inverseDecode:!!A&&A[0]>0})).cached=!!l,b=[v],c.addOp(i.OPS.paintImageMaskXObject,b),l&&u.set(l,d,{fn:i.OPS.paintImageMaskXObject,args:b}),e.abrupt("return",void 0)
case 25:if(O=f.get("SMask","SM")||!1,T=f.get("Mask")||!1,!s||O||T||!(p+g<200)){e.next=33
break}return I=new C.PDFImage({xref:this.xref,res:r,image:a,isInline:s,pdfFunctionFactory:this._pdfFunctionFactory,localColorSpaceCache:h}),v=I.createImageData(!0),c.addOp(i.OPS.paintInlineImageXObject,[v]),e.abrupt("return",void 0)
case 33:return P="img_".concat(this.idFactory.createObjId()),E=!1,this.parsingType3Font?P="".concat(this.idFactory.getDocId(),"_type3_").concat(P):d&&(E=this.globalImageCache.shouldCache(d,this.pageIndex))&&(P="".concat(this.idFactory.getDocId(),"_").concat(P)),c.addDependency(P),b=[P,p,g],C.PDFImage.buildImage({xref:this.xref,res:r,image:a,isInline:s,pdfFunctionFactory:this._pdfFunctionFactory,localColorSpaceCache:h}).then((function(e){return v=e.createImageData(!1),_._sendImgData(P,v,E)})).catch((function(e){return(0,i.warn)('Unable to decode image "'.concat(P,'": "').concat(e,'".')),_._sendImgData(P,null,E)})),c.addOp(i.OPS.paintImageXObject,b),l&&(u.set(l,d,{fn:i.OPS.paintImageXObject,args:b}),d&&((0,i.assert)(!s,"Cannot cache an inline image globally."),this.globalImageCache.addPageIndex(d,this.pageIndex),E&&this.globalImageCache.setData(d,{objId:P,fn:i.OPS.paintImageXObject,args:b}))),e.abrupt("return",void 0)
case 41:case"end":return e.stop()}}),e,this)}))),function(e){return g.apply(this,arguments)})},{key:"handleSMask",value:function(e,t,r,a,n,i){var o=e.get("G"),s={subtype:e.get("S").name,backdrop:e.get("BC")},c=e.get("TR")
if((0,p.isPDFFunction)(c)){for(var l=this._pdfFunctionFactory.create(c),u=new Uint8Array(256),h=new Float32Array(1),f=0;f<256;f++)h[0]=f/255,l(h,0,h,0),u[f]=255*h[0]|0
s.transferMap=u}return this.buildFormXObject(t,o,s,r,a,n.state.clone(),i)}},{key:"handleTransferFunction",value:function(e){var t
if(Array.isArray(e))t=e
else{if(!(0,p.isPDFFunction)(e))return null
t=[e]}var r,a=[],n=0,i=0,o=I(t)
try{for(o.s();!(r=o.n()).done;){var c=r.value,l=this.xref.fetchIfRef(c)
if(n++,(0,s.isName)(l,"Identity"))a.push(null)
else{if(!(0,p.isPDFFunction)(l))return null
for(var u=this._pdfFunctionFactory.create(l),h=new Uint8Array(256),f=new Float32Array(1),d=0;d<256;d++)f[0]=d/255,u(f,0,f,0),h[d]=255*f[0]|0
a.push(h),i++}}}catch(g){o.e(g)}finally{o.f()}return 1!==n&&4!==n||0===i?null:a}},{key:"handleTilingType",value:function(e,t,r,a,n,o,c,l,u){var h=this,f=new x.OperatorList,p=s.Dict.merge({xref:this.xref,dictArray:[n.get("Resources"),r]})
return this.getOperatorList({stream:a,task:c,resources:p,operatorList:f}).then((function(){var r=f.getIR(),a=(0,d.getTilingPatternIR)(r,n,t)
o.addDependencies(f.dependencies),o.addOp(e,a),l&&u.set(l,n.objId,{operatorListIR:r,dict:n})})).catch((function(e){if(!(e instanceof i.AbortException)){if(h.options.ignoreErrors)return h.handler.send("UnsupportedFeature",{featureId:i.UNSUPPORTED_FEATURES.errorTilingPattern}),void(0,i.warn)('handleTilingType - ignoring pattern: "'.concat(e,'".'))
throw e}}))}},{key:"handleSetFont",value:function(e,t,r,a,n,o){var s,l=this,u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null
return t&&(s=(t=t.slice())[0].name),this.loadFont(s,r,e,u).then((function(t){return t.font.isType3Font?t.loadType3Data(l,e,n).then((function(){return a.addDependencies(t.type3Dependencies),t})).catch((function(e){return l.handler.send("UnsupportedFeature",{featureId:i.UNSUPPORTED_FEATURES.errorFontLoadType3}),new q({loadedName:"g_font_error",font:new c.ErrorFont("Type3 font load error: ".concat(e)),dict:t.font,extraProperties:l.options.fontExtraProperties})})):t})).then((function(e){return o.font=e.font,e.send(l.handler),e.loadedName}))}},{key:"handleText",value:function(t,r){var a=r.font,n=a.charsToGlyphs(t)
a.data&&((!!(r.textRenderingMode&i.TextRenderingMode.ADD_TO_PATH_FLAG)||"Pattern"===r.fillColorSpace.name||a.disableFontFace||this.options.disableFontFace)&&e.buildFontPaths(a,n,this.handler))
return n}},{key:"ensureStateFont",value:function(e){if(!e.font){var t=new i.FormatError("Missing setFont (Tf) operator before text rendering operator.")
if(this.options.ignoreErrors)return this.handler.send("UnsupportedFeature",{featureId:i.UNSUPPORTED_FEATURES.errorFontState}),void(0,i.warn)('ensureStateFont: "'.concat(t,'".'))
throw t}}},{key:"setGState",value:(a=T(n.default.mark((function e(t){var r,a,o,c,l,u,h,f,d,p,g,m,v,b,y,w,k=this
return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(r=t.resources,a=t.gState,o=t.operatorList,c=t.cacheKey,l=t.task,u=t.stateManager,h=t.localGStateCache,f=t.localColorSpaceCache,d=a.objId,p=!0,g=[],m=a.getKeys(),v=Promise.resolve(),b=function(){var e=m[y],t=a.get(e)
switch(e){case"Type":break
case"LW":case"LC":case"LJ":case"ML":case"D":case"RI":case"FL":case"CA":case"ca":g.push([e,t])
break
case"Font":p=!1,v=v.then((function(){return k.handleSetFont(r,null,t[0],o,l,u.state).then((function(r){o.addDependency(r),g.push([e,[r,t[1]]])}))}))
break
case"BM":g.push([e,N(t)])
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
case 9:case"end":return e.stop()}}),e)}))),function(e){return a.apply(this,arguments)})},{key:"loadFont",value:function(t,r,a){var o,l=this,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,h=function(){var e=T(n.default.mark((function e(){return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new q({loadedName:"g_font_error",font:new c.ErrorFont('Font "'.concat(t,'" is not available.')),dict:r,extraProperties:l.options.fontExtraProperties}))
case 1:case"end":return e.stop()}}),e)})))
return function(){return e.apply(this,arguments)}}(),f=this.xref
if(r){if(!(0,s.isRef)(r))throw new i.FormatError('The "font" object should be a reference.')
o=r}else{var d=a.get("Font")
d&&(o=d.getRaw(t))}if(!o){var p='Font "'.concat(t||r&&r.toString(),'" is not available')
if(!this.options.ignoreErrors&&!this.parsingType3Font)return(0,i.warn)("".concat(p,".")),h()
this.handler.send("UnsupportedFeature",{featureId:i.UNSUPPORTED_FEATURES.errorFontMissing}),(0,i.warn)("".concat(p," -- attempting to fallback to a default font.")),o=u||e.fallbackFontDict}if(this.fontCache.has(o))return this.fontCache.get(o)
if(r=f.fetchIfRef(o),!(0,s.isDict)(r))return h()
if(r.cacheKey&&this.fontCache.has(r.cacheKey))return this.fontCache.get(r.cacheKey)
var g,m=(0,i.createPromiseCapability)()
try{g=this.preEvaluateFont(r)}catch(C){return(0,i.warn)('loadFont - ignoring preEvaluateFont errors: "'.concat(C,'".')),h()}var v,b=g,y=b.descriptor,w=b.hash,k=(0,s.isRef)(o)
if(k&&(v="f".concat(o.toString())),w&&(0,s.isDict)(y)){y.fontAliases||(y.fontAliases=Object.create(null))
var S=y.fontAliases
if(S[w]){var x=S[w].aliasRef
if(k&&x&&this.fontCache.has(x))return this.fontCache.putAlias(o,x),this.fontCache.get(o)}else S[w]={fontID:this.idFactory.createFontId()}
k&&(S[w].aliasRef=o),v=S[w].fontID}return k?this.fontCache.put(o,m.promise):(v||(v=this.idFactory.createFontId()),r.cacheKey="cacheKey_".concat(v),this.fontCache.put(r.cacheKey,m.promise)),(0,i.assert)(v&&v.startsWith("f"),'The "fontID" must be (correctly) defined.'),r.loadedName="".concat(this.idFactory.getDocId(),"_").concat(v),this.translateFont(g).then((function(e){void 0!==e.fontType&&(f.stats.fontTypes[e.fontType]=!0)
m.resolve(new q({loadedName:r.loadedName,font:e,dict:r,extraProperties:l.options.fontExtraProperties}))})).catch((function(e){l.handler.send("UnsupportedFeature",{featureId:i.UNSUPPORTED_FEATURES.errorFontTranslate})
try{var t=y&&y.get("FontFile3"),a=t&&t.get("Subtype"),n=(0,c.getFontType)(g.type,a&&a.name)
f.stats.fontTypes[n]=!0}catch(o){}m.resolve(new q({loadedName:r.loadedName,font:new c.ErrorFont(e instanceof Error?e.message:e),dict:r,extraProperties:l.options.fontExtraProperties}))})),m.promise}},{key:"buildPath",value:function(e,t,r){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],n=e.length-1
if(r||(r=[]),n<0||e.fnArray[n]!==i.OPS.constructPath)a&&((0,i.warn)('Encountered path operator "'.concat(t,'" inside of a text object.')),e.addOp(i.OPS.save,null)),e.addOp(i.OPS.constructPath,[[t],r]),a&&e.addOp(i.OPS.restore,null)
else{var o=e.argsArray[n]
o[0].push(t),Array.prototype.push.apply(o[1],r)}}},{key:"parseColorSpace",value:function(e){var t=this,r=e.cs,a=e.resources,n=e.localColorSpaceCache
return b.ColorSpace.parseAsync({cs:r,xref:this.xref,resources:a,pdfFunctionFactory:this._pdfFunctionFactory,localColorSpaceCache:n}).catch((function(e){if(e instanceof i.AbortException)return null
if(t.options.ignoreErrors)return t.handler.send("UnsupportedFeature",{featureId:i.UNSUPPORTED_FEATURES.errorColorSpace}),(0,i.warn)('parseColorSpace - ignoring ColorSpace: "'.concat(e,'".')),null
throw e}))}},{key:"handleColorN",value:function(e,t,r,a,n,o,c,l,h){var f=r.pop()
if(f instanceof s.Name){var p=f.name,g=h.getByName(p)
if(g)try{var m=a.base?a.base.getRgb(r,0):null,v=(0,d.getTilingPatternIR)(g.operatorListIR,g.dict,m)
return void e.addOp(t,v)}catch(C){if(C instanceof u.MissingDataException)throw C}var b=n.get(p)
if(b){var y=(0,s.isStream)(b)?b.dict:b,w=y.get("PatternType")
if(w===M){var k=a.base?a.base.getRgb(r,0):null
return this.handleTilingType(t,k,o,b,y,e,c,p,h)}if(w===D){var S=y.get("Shading"),x=y.getArray("Matrix")
return b=d.Pattern.parseShading(S,x,this.xref,o,this.handler,this._pdfFunctionFactory,l),void e.addOp(t,b.getIR())}throw new i.FormatError("Unknown PatternType: ".concat(w))}}throw new i.FormatError("Unknown PatternName: ".concat(f))}},{key:"parseMarkedContentProps",value:(r=T(n.default.mark((function e(t,r){var a,o,c,l,u,h
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
case 28:case"end":return e.stop()}}),e)}))),function(e,t){return r.apply(this,arguments)})},{key:"getOperatorList",value:function(e){var t=this,r=e.stream,a=e.task,n=e.resources,o=e.operatorList,c=e.initialState,l=void 0===c?null:c,u=e.fallbackFontDict,h=void 0===u?null:u
if(n=n||s.Dict.empty,l=l||new H,!o)throw new Error('getOperatorList: missing "operatorList" parameter')
var f=this,p=this.xref,g=!1,v=new m.LocalImageCache,y=new m.LocalColorSpaceCache,w=new m.LocalGStateCache,k=new m.LocalTilingPatternCache,S=n.get("XObject")||s.Dict.empty,x=n.get("Pattern")||s.Dict.empty,C=new z(l),A=new W(r,p,C),O=new U
function T(e){for(var t=0,r=A.savedStatesDepth;t<r;t++)o.addOp(i.OPS.restore,[])}return new Promise((function e(t,r){var c=function(a){Promise.all([a,o.ready]).then((function(){try{e(t,r)}catch(a){r(a)}}),r)}
a.ensureNotTerminated(),O.reset()
for(var l,u,m,I,P,E={};!(l=O.check())&&(E.args=null,A.read(E));){var _=E.args,F=E.fn
switch(0|F){case i.OPS.paintXObject:if(P=_[0].name){var R=v.getByName(P)
if(R){o.addOp(R.fn,R.args),_=null
continue}}return void c(new Promise((function(e,t){if(!P)throw new i.FormatError("XObject must be referred to by name.")
var r=S.getRaw(P)
if(r instanceof s.Ref){var c=v.getByRef(r)
if(c)return o.addOp(c.fn,c.args),void e()
var l=f.globalImageCache.getData(r,f.pageIndex)
if(l)return o.addDependency(l.objId),o.addOp(l.fn,l.args),void e()
r=p.fetch(r)}if(!(0,s.isStream)(r))throw new i.FormatError("XObject should be a stream")
var u=r.dict.get("Subtype")
if(!(0,s.isName)(u))throw new i.FormatError("XObject should have a Name subtype")
if("Form"===u.name)return C.save(),void f.buildFormXObject(n,r,null,o,a,C.state.clone(),y).then((function(){C.restore(),e()}),t)
if("Image"!==u.name){if("PS"!==u.name)throw new i.FormatError("Unhandled XObject subtype ".concat(u.name));(0,i.info)("Ignored XObject subtype PS"),e()}else f.buildPaintImageXObject({resources:n,image:r,operatorList:o,cacheKey:P,localImageCache:v,localColorSpaceCache:y}).then(e,t)})).catch((function(e){if(!(e instanceof i.AbortException)){if(f.options.ignoreErrors)return f.handler.send("UnsupportedFeature",{featureId:i.UNSUPPORTED_FEATURES.errorXObject}),void(0,i.warn)('getOperatorList - ignoring XObject: "'.concat(e,'".'))
throw e}})))
case i.OPS.setFont:var B=_[1]
return void c(f.handleSetFont(n,_,null,o,a,C.state,h).then((function(e){o.addDependency(e),o.addOp(i.OPS.setFont,[e,B])})))
case i.OPS.beginText:g=!0
break
case i.OPS.endText:g=!1
break
case i.OPS.endInlineImage:var M=_[0].cacheKey
if(M){var D=v.getByName(M)
if(D){o.addOp(D.fn,D.args),_=null
continue}}return void c(f.buildPaintImageXObject({resources:n,image:_[0],isInline:!0,operatorList:o,cacheKey:M,localImageCache:v,localColorSpaceCache:y}))
case i.OPS.showText:if(!C.state.font){f.ensureStateFont(C.state)
continue}_[0]=f.handleText(_[0],C.state)
break
case i.OPS.showSpacedText:if(!C.state.font){f.ensureStateFont(C.state)
continue}var N=_[0],U=[],j=N.length,q=C.state
for(u=0;u<j;++u){var z=N[u];(0,i.isString)(z)?Array.prototype.push.apply(U,f.handleText(z,q)):(0,i.isNum)(z)&&U.push(z)}_[0]=U,F=i.OPS.showText
break
case i.OPS.nextLineShowText:if(!C.state.font){f.ensureStateFont(C.state)
continue}o.addOp(i.OPS.nextLine),_[0]=f.handleText(_[0],C.state),F=i.OPS.showText
break
case i.OPS.nextLineSetSpacingShowText:if(!C.state.font){f.ensureStateFont(C.state)
continue}o.addOp(i.OPS.nextLine),o.addOp(i.OPS.setWordSpacing,[_.shift()]),o.addOp(i.OPS.setCharSpacing,[_.shift()]),_[0]=f.handleText(_[0],C.state),F=i.OPS.showText
break
case i.OPS.setTextRenderingMode:C.state.textRenderingMode=_[0]
break
case i.OPS.setFillColorSpace:var G=b.ColorSpace.getCached(_[0],p,y)
if(G){C.state.fillColorSpace=G
continue}return void c(f.parseColorSpace({cs:_[0],resources:n,localColorSpaceCache:y}).then((function(e){e&&(C.state.fillColorSpace=e)})))
case i.OPS.setStrokeColorSpace:var H=b.ColorSpace.getCached(_[0],p,y)
if(H){C.state.strokeColorSpace=H
continue}return void c(f.parseColorSpace({cs:_[0],resources:n,localColorSpaceCache:y}).then((function(e){e&&(C.state.strokeColorSpace=e)})))
case i.OPS.setFillColor:_=(I=C.state.fillColorSpace).getRgb(_,0),F=i.OPS.setFillRGBColor
break
case i.OPS.setStrokeColor:_=(I=C.state.strokeColorSpace).getRgb(_,0),F=i.OPS.setStrokeRGBColor
break
case i.OPS.setFillGray:C.state.fillColorSpace=b.ColorSpace.singletons.gray,_=b.ColorSpace.singletons.gray.getRgb(_,0),F=i.OPS.setFillRGBColor
break
case i.OPS.setStrokeGray:C.state.strokeColorSpace=b.ColorSpace.singletons.gray,_=b.ColorSpace.singletons.gray.getRgb(_,0),F=i.OPS.setStrokeRGBColor
break
case i.OPS.setFillCMYKColor:C.state.fillColorSpace=b.ColorSpace.singletons.cmyk,_=b.ColorSpace.singletons.cmyk.getRgb(_,0),F=i.OPS.setFillRGBColor
break
case i.OPS.setStrokeCMYKColor:C.state.strokeColorSpace=b.ColorSpace.singletons.cmyk,_=b.ColorSpace.singletons.cmyk.getRgb(_,0),F=i.OPS.setStrokeRGBColor
break
case i.OPS.setFillRGBColor:C.state.fillColorSpace=b.ColorSpace.singletons.rgb,_=b.ColorSpace.singletons.rgb.getRgb(_,0)
break
case i.OPS.setStrokeRGBColor:C.state.strokeColorSpace=b.ColorSpace.singletons.rgb,_=b.ColorSpace.singletons.rgb.getRgb(_,0)
break
case i.OPS.setFillColorN:if("Pattern"===(I=C.state.fillColorSpace).name)return void c(f.handleColorN(o,i.OPS.setFillColorN,_,I,x,n,a,y,k))
_=I.getRgb(_,0),F=i.OPS.setFillRGBColor
break
case i.OPS.setStrokeColorN:if("Pattern"===(I=C.state.strokeColorSpace).name)return void c(f.handleColorN(o,i.OPS.setStrokeColorN,_,I,x,n,a,y,k))
_=I.getRgb(_,0),F=i.OPS.setStrokeRGBColor
break
case i.OPS.shadingFill:var W=n.get("Shading")
if(!W)throw new i.FormatError("No shading resource found")
var X=W.get(_[0].name)
if(!X)throw new i.FormatError("No shading object found")
_=[d.Pattern.parseShading(X,null,p,n,f.handler,f._pdfFunctionFactory,y).getIR()],F=i.OPS.shadingFill
break
case i.OPS.setGState:if(P=_[0].name){var V=w.getByName(P)
if(V){V.length>0&&o.addOp(i.OPS.setGState,[V]),_=null
continue}}return void c(new Promise((function(e,t){if(!P)throw new i.FormatError("GState must be referred to by name.")
var r=n.get("ExtGState")
if(!(r instanceof s.Dict))throw new i.FormatError("ExtGState should be a dictionary.")
var c=r.get(P)
if(!(c instanceof s.Dict))throw new i.FormatError("GState should be a dictionary.")
f.setGState({resources:n,gState:c,operatorList:o,cacheKey:P,task:a,stateManager:C,localGStateCache:w,localColorSpaceCache:y}).then(e,t)})).catch((function(e){if(!(e instanceof i.AbortException)){if(f.options.ignoreErrors)return f.handler.send("UnsupportedFeature",{featureId:i.UNSUPPORTED_FEATURES.errorExtGState}),void(0,i.warn)('getOperatorList - ignoring ExtGState: "'.concat(e,'".'))
throw e}})))
case i.OPS.moveTo:case i.OPS.lineTo:case i.OPS.curveTo:case i.OPS.curveTo2:case i.OPS.curveTo3:case i.OPS.closePath:case i.OPS.rectangle:f.buildPath(o,F,_,g)
continue
case i.OPS.markPoint:case i.OPS.markPointProps:case i.OPS.beginCompat:case i.OPS.endCompat:continue
case i.OPS.beginMarkedContentProps:if(!(0,s.isName)(_[0])){(0,i.warn)("Expected name for beginMarkedContentProps arg0=".concat(_[0]))
continue}if("OC"===_[0].name)return void c(f.parseMarkedContentProps(_[1],n).then((function(e){o.addOp(i.OPS.beginMarkedContentProps,["OC",e])})).catch((function(e){if(!(e instanceof i.AbortException)){if(f.options.ignoreErrors)return f.handler.send("UnsupportedFeature",{featureId:i.UNSUPPORTED_FEATURES.errorMarkedContent}),void(0,i.warn)('getOperatorList - ignoring beginMarkedContentProps: "'.concat(e,'".'))
throw e}})))
_=[_[0].name]
break
case i.OPS.beginMarkedContent:case i.OPS.endMarkedContent:default:if(null!==_){for(u=0,m=_.length;u<m&&!(_[u]instanceof s.Dict);u++);if(u<m){(0,i.warn)("getOperatorList - ignoring operator: "+F)
continue}}}o.addOp(F,_)}l?c(L):(T(),t())})).catch((function(e){if(!(e instanceof i.AbortException)){if(t.options.ignoreErrors)return t.handler.send("UnsupportedFeature",{featureId:i.UNSUPPORTED_FEATURES.errorOperatorList}),(0,i.warn)('getOperatorList - ignoring errors during "'.concat(a.name,'" ')+'task: "'.concat(e,'".')),void T()
throw e}}))}},{key:"getTextContent",value:function(e){var t=this,r=e.stream,a=e.task,n=e.resources,o=e.stateManager,c=void 0===o?null:o,l=e.normalizeWhitespace,u=void 0!==l&&l,f=e.combineTextItems,d=void 0!==f&&f,p=e.sink,g=e.seenStyles,b=void 0===g?Object.create(null):g
n=n||s.Dict.empty,c=c||new z(new G)
var y,w=/\s/g,k={items:[],styles:Object.create(null)},S={initialized:!1,str:[],width:0,height:0,vertical:!1,lastAdvanceWidth:0,lastAdvanceHeight:0,textAdvanceScale:0,spaceWidth:0,fakeSpaceMin:1/0,fakeMultiSpaceMin:1/0,fakeMultiSpaceMax:-0,textRunBreakAllowed:!1,transform:null,fontName:null},x=this,C=this.xref,A=null,O=new m.LocalImageCache,T=new m.LocalGStateCache,I=new W(r,C,c)
function P(){if(S.initialized)return S
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
return l?(S.spaceWidth=l,S.fakeSpaceMin=.3*l,S.fakeMultiSpaceMin=1.5*l,S.fakeMultiSpaceMax=4*l,S.textRunBreakAllowed=!e.isMonospace):(S.spaceWidth=0,S.fakeSpaceMin=1/0,S.fakeMultiSpaceMin=1/0,S.fakeMultiSpaceMax=0,S.textRunBreakAllowed=!1),S.initialized=!0,S}function E(e){for(var t,r=0,a=e.length;r<a&&(t=e.charCodeAt(r))>=32&&t<=127;)r++
return r<a?e.replace(w," "):e}function _(e,t){return x.loadFont(e,t,n).then((function(e){y.font=e.font,y.fontMatrix=e.font.fontMatrix||i.FONT_IDENTITY_MATRIX}))}function F(e){for(var t=y.font,r=P(),a=0,n=0,i=t.charsToGlyphs(e),o=0;o<i.length;o++){var s=i[o],c=null
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
S.initialized&&(S.vertical?S.height*=S.textAdvanceScale:S.width*=S.textAdvanceScale,k.items.push((t=(e=S).str.join(""),r=(0,v.bidi)(t,-1,e.vertical),{str:u?E(r.str):r.str,dir:r.dir,width:e.width,height:e.height,transform:e.transform,fontName:e.fontName})),S.initialized=!1,S.str.length=0)}function M(){var e=k.items.length
e>0&&(p.enqueue(k,e),k.items=[],k.styles=Object.create(null))}var D=new U
return new Promise((function e(t,r){var o=function(a){M(),Promise.all([a,p.ready]).then((function(){try{e(t,r)}catch(a){r(a)}}),r)}
a.ensureNotTerminated(),D.reset()
for(var l,h={},f=[];!(l=D.check())&&(f.length=0,h.args=f,I.read(h));){y=c.state
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
case i.OPS.moveText:var E=!!y.font&&0===(y.font.vertical?f[0]:f[1])
if(g=f[0]-f[1],d&&E&&S.initialized&&g>0&&g<=S.fakeMultiSpaceMax){y.translateTextLineMatrix(f[0],f[1]),S.width+=f[0]-S.lastAdvanceWidth,S.height+=f[1]-S.lastAdvanceHeight,R(f[0]-S.lastAdvanceWidth-(f[1]-S.lastAdvanceHeight),S.str)
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
continue}for(var N,U=f[0],j=0,q=U.length;j<q;j++)if("string"==typeof U[j])F(U[j])
else if((0,i.isNum)(U[j])){P(),g=U[j]*y.fontSize/1e3
var G=!1
y.font.vertical?(N=g,y.translateTextMatrix(0,N),(G=S.textRunBreakAllowed&&g>S.fakeMultiSpaceMax)||(S.height+=N)):(N=(g=-g)*y.textHScale,y.translateTextMatrix(N,0),(G=S.textRunBreakAllowed&&g>S.fakeMultiSpaceMax)||(S.width+=N)),G?B():g>0&&R(g,S.str)}break
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
var l=c.state.clone(),h=new z(l),f=r.dict.getArray("Matrix")
Array.isArray(f)&&6===f.length&&h.transform(f),M()
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
break}}l?o(L):(B(),M(),t())})).catch((function(e){if(!(e instanceof i.AbortException)){if(t.options.ignoreErrors)return(0,i.warn)('getTextContent - ignoring errors during "'.concat(a.name,'" ')+'task: "'.concat(e,'".')),B(),void M()
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
if(!((e=Array.isArray(o)?this.xref.fetchIfRef(o[0]):o)instanceof s.Dict))throw new i.FormatError("Descendant font is not a dictionary.")
if(r=e.get("Subtype"),!(0,s.isName)(r))throw new i.FormatError("invalid font Subtype")
n=!0}var c=e.get("FontDescriptor")
if(c){var l=new S.MurmurHash3_64,u=t.getRaw("Encoding")
if((0,s.isName)(u))l.update(u.name)
else if((0,s.isRef)(u))l.update(u.toString())
else if((0,s.isDict)(u)){var h,f=I(u.getRawValues())
try{for(f.s();!(h=f.n()).done;){var d=h.value
if((0,s.isName)(d))l.update(d.name)
else if((0,s.isRef)(d))l.update(d.toString())
else if(Array.isArray(d)){for(var p=d.length,g=new Array(p),m=0;m<p;m++){var v=d[m];(0,s.isName)(v)?g[m]=v.name:((0,i.isNum)(v)||(0,s.isRef)(v))&&(g[m]=v.toString())}l.update(g.join())}}}catch(C){f.e(C)}finally{f.f()}}var b=e.get("FirstChar")||0,y=e.get("LastChar")||(n?65535:255)
l.update("".concat(b,"-").concat(y))
var w=e.get("ToUnicode")||t.get("ToUnicode")
if((0,s.isStream)(w)){var k=w.str||w
a=k.buffer?new Uint8Array(k.buffer.buffer,0,k.bufferLength):new Uint8Array(k.bytes.buffer,k.start,k.end-k.start),l.update(a)}else(0,s.isName)(w)&&l.update(w.name)
var x=e.get("Widths")||t.get("Widths")
x&&(a=new Uint8Array(new Uint32Array(x).buffer),l.update(a))}return{descriptor:c,dict:e,baseDict:t,composite:n,type:r.name,hash:l?l.hexdigest():""}}},{key:"translateFont",value:(t=T(n.default.mark((function e(t){var r,a,l,u,h,d,p,g,m,v,b,y,w,k,S,x,C,A,O,T,I,P,E,_,F,R=this
return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.baseDict,a=t.dict,l=t.composite,u=t.descriptor,h=t.type,d=l?65535:255,g=a.get("FirstChar")||0,m=a.get("LastChar")||d,u){e.next=25
break}if("Type3"!==h){e.next=15
break}(u=new s.Dict(null)).set("FontName",s.Name.get(h)),u.set("FontBBox",a.getArray("FontBBox")||[0,0,0,0]),e.next=25
break
case 15:if(v=a.get("BaseFont"),(0,s.isName)(v)){e.next=18
break}throw new i.FormatError("Base font is not specified")
case 18:return v=v.name.replace(/[,_]/g,"-"),b=this.getBaseFontMetrics(v),y=v.split("-")[0],w=(this.isSerifFont(y)?c.FontFlags.Serif:0)|(b.monospace?c.FontFlags.FixedPitch:0)|((0,f.getSymbolsFonts)()[y]?c.FontFlags.Symbolic:c.FontFlags.Nonsymbolic),p={type:h,name:v,widths:b.widths,defaultWidth:b.defaultWidth,flags:w,firstChar:g,lastChar:m},k=a.get("Widths"),e.abrupt("return",this.extractDataStructures(a,a,p).then((function(e){if(k){for(var t=[],r=g,a=0,n=k.length;a<n;a++)t[r++]=R.xref.fetchIfRef(k[a])
e.widths=t}else e.widths=R.buildCharCodeToWidth(b.widths,e)
return new c.Font(v,null,e)})))
case 25:if(S=u.get("FontName"),x=a.get("BaseFont"),(0,i.isString)(S)&&(S=s.Name.get(S)),(0,i.isString)(x)&&(x=s.Name.get(x)),"Type3"!==h&&(C=S&&S.name,A=x&&x.name,C!==A&&((0,i.info)("The FontDescriptor's FontName is \"".concat(C,'" but ')+"should be the same as the Font's BaseFont \"".concat(A,'".')),C&&A&&A.startsWith(C)&&(S=x))),S=S||x,(0,s.isName)(S)){e.next=33
break}throw new i.FormatError("invalid font name")
case 33:if((O=u.get("FontFile","FontFile2","FontFile3"))&&O.dict&&((T=O.dict.get("Subtype"))&&(T=T.name),I=O.dict.get("Length1"),P=O.dict.get("Length2"),E=O.dict.get("Length3")),p={type:h,name:S.name,subtype:T,file:O,length1:I,length2:P,length3:E,loadedName:r.loadedName,composite:l,fixedPitch:!1,fontMatrix:a.getArray("FontMatrix")||i.FONT_IDENTITY_MATRIX,firstChar:g||0,lastChar:m||d,bbox:u.getArray("FontBBox"),ascent:u.get("Ascent"),descent:u.get("Descent"),xHeight:u.get("XHeight"),capHeight:u.get("CapHeight"),flags:u.get("Flags"),italicAngle:u.get("ItalicAngle"),isType3Font:!1},!l){e.next=44
break}return _=r.get("Encoding"),(0,s.isName)(_)&&(p.cidEncoding=_.name),e.next=41,o.CMapFactory.create({encoding:_,fetchBuiltInCMap:this._fetchBuiltInCMapBound,useCMap:null})
case 41:F=e.sent,p.cMap=F,p.vertical=p.cMap.vertical
case 44:return e.abrupt("return",this.extractDataStructures(a,r,p).then((function(e){return R.extractWidths(a,u,e),"Type3"===h&&(e.isType3Font=!0),new c.Font(S.name,O,e)})))
case 45:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"_pdfFunctionFactory",get:function(){var e=new p.PDFFunctionFactory({xref:this.xref,isEvalSupported:this.options.isEvalSupported})
return(0,i.shadow)(this,"_pdfFunctionFactory",e)}}],[{key:"buildFontPaths",value:function(e,t,r){function a(t){e.renderer.hasBuiltPath(t)||r.send("commonobj",["".concat(e.loadedName,"_path_").concat(t),"FontPath",e.renderer.getPathJs(t)])}var n,i=I(t)
try{for(i.s();!(n=i.n()).done;){var o=n.value
a(o.fontChar)
var s=o.accent
s&&s.fontChar&&a(s.fontChar)}}catch(c){i.e(c)}finally{i.f()}}},{key:"fallbackFontDict",get:function(){var e=new s.Dict
return e.set("BaseFont",s.Name.get("PDFJS-FallbackFont")),e.set("Type",s.Name.get("FallbackType")),e.set("Subtype",s.Name.get("FallbackType")),e.set("Encoding",s.Name.get("WinAnsiEncoding")),(0,i.shadow)(this,"fallbackFontDict",e)}}]),e}()
t.PartialEvaluator=j
var q=function(){function e(t){var r=t.loadedName,a=t.font,n=t.dict,i=t.extraProperties,o=void 0!==i&&i
_(this,e),this.loadedName=r,this.font=a,this.dict=n,this._extraProperties=o,this.type3Loaded=null,this.type3Dependencies=a.isType3Font?new Set:null,this.sent=!1}return R(e,[{key:"send",value:function(e){this.sent||(this.sent=!0,e.send("commonobj",[this.loadedName,"Font",this.font.exportData(this._extraProperties)]))}},{key:"fallback",value:function(e){if(this.font.data){this.font.disableFontFace=!0
var t=this.font.glyphCacheValues
j.buildFontPaths(this.font,t,e)}}},{key:"loadType3Data",value:function(e,t,r){var a=this
if(this.type3Loaded)return this.type3Loaded
if(!this.font.isType3Font)throw new Error("Must be a Type3 font.")
var n=Object.create(e.options)
n.ignoreErrors=!1
var o=e.clone(n)
o.parsingType3Font=!0
var s,c=this.font,l=this.type3Dependencies,u=Promise.resolve(),h=this.dict.get("CharProcs"),f=this.dict.get("Resources")||t,d=Object.create(null),p=I(h.getKeys())
try{var g=function(){var e=s.value
u=u.then((function(){var t=h.get(e),n=new x.OperatorList
return o.getOperatorList({stream:t,task:r,resources:f,operatorList:n}).then((function(){n.fnArray[0]===i.OPS.setCharWidthAndBounds&&a._removeType3ColorOperators(n),d[e]=n.getIR()
var t,r=I(n.dependencies)
try{for(r.s();!(t=r.n()).done;){var o=t.value
l.add(o)}}catch(s){r.e(s)}finally{r.f()}})).catch((function(t){(0,i.warn)('Type3 font resource "'.concat(e,'" is not available.'))
var r=new x.OperatorList
d[e]=r.getIR()}))}))}
for(p.s();!(s=p.n()).done;)g()}catch(m){p.e(m)}finally{p.f()}return this.type3Loaded=u.then((function(){c.charProcOperatorList=d})),this.type3Loaded}},{key:"_removeType3ColorOperators",value:function(e){for(var t=1,r=e.length;t<r;){switch(e.fnArray[t]){case i.OPS.setStrokeColorSpace:case i.OPS.setFillColorSpace:case i.OPS.setStrokeColor:case i.OPS.setStrokeColorN:case i.OPS.setFillColor:case i.OPS.setFillColorN:case i.OPS.setStrokeGray:case i.OPS.setFillGray:case i.OPS.setStrokeRGBColor:case i.OPS.setFillRGBColor:case i.OPS.setStrokeCMYKColor:case i.OPS.setFillCMYKColor:case i.OPS.shadingFill:case i.OPS.setRenderingIntent:e.fnArray.splice(t,1),e.argsArray.splice(t,1),r--
continue
case i.OPS.setGState:for(var a=A(e.argsArray[t],1)[0],n=0,o=a.length;n<o;){switch(A(a[n],1)[0]){case"TR":case"TR2":case"HT":case"BG":case"BG2":case"UCR":case"UCR2":a.splice(n,1),o--
continue}n++}}t++}}}]),e}(),z=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new H
_(this,e),this.state=t,this.stateStack=[]}return R(e,[{key:"save",value:function(){var e=this.state
this.stateStack.push(this.state),this.state=e.clone()}},{key:"restore",value:function(){var e=this.stateStack.pop()
e&&(this.state=e)}},{key:"transform",value:function(e){this.state.ctm=i.Util.transform(this.state.ctm,e)}}]),e}(),G=function(){function e(){_(this,e),this.ctm=new Float32Array(i.IDENTITY_MATRIX),this.fontName=null,this.fontSize=0,this.font=null,this.fontMatrix=i.FONT_IDENTITY_MATRIX,this.textMatrix=i.IDENTITY_MATRIX.slice(),this.textLineMatrix=i.IDENTITY_MATRIX.slice(),this.charSpacing=0,this.wordSpacing=0,this.leading=0,this.textHScale=1,this.textRise=0}return R(e,[{key:"setTextMatrix",value:function(e,t,r,a,n,i){var o=this.textMatrix
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
return e.textMatrix=this.textMatrix.slice(),e.textLineMatrix=this.textLineMatrix.slice(),e.fontMatrix=this.fontMatrix.slice(),e}}]),e}(),H=function(){function e(){_(this,e),this.ctm=new Float32Array(i.IDENTITY_MATRIX),this.font=null,this.textRenderingMode=i.TextRenderingMode.FILL,this.fillColorSpace=b.ColorSpace.singletons.gray,this.strokeColorSpace=b.ColorSpace.singletons.gray}return R(e,[{key:"clone",value:function(){return Object.create(this)}}]),e}(),W=function(){function e(t,r){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new z
_(this,e),this.parser=new g.Parser({lexer:new g.Lexer(t,e.opMap),xref:r}),this.stateManager=a,this.nonProcessedArgs=[],this._numInvalidPathOPS=0}return R(e,null,[{key:"opMap",get:function(){var e=(0,u.getLookupTableFactory)((function(e){e.w={id:i.OPS.setLineWidth,numArgs:1,variableArgs:!1},e.J={id:i.OPS.setLineCap,numArgs:1,variableArgs:!1},e.j={id:i.OPS.setLineJoin,numArgs:1,variableArgs:!1},e.M={id:i.OPS.setMiterLimit,numArgs:1,variableArgs:!1},e.d={id:i.OPS.setDash,numArgs:2,variableArgs:!1},e.ri={id:i.OPS.setRenderingIntent,numArgs:1,variableArgs:!1},e.i={id:i.OPS.setFlatness,numArgs:1,variableArgs:!1},e.gs={id:i.OPS.setGState,numArgs:1,variableArgs:!1},e.q={id:i.OPS.save,numArgs:0,variableArgs:!1},e.Q={id:i.OPS.restore,numArgs:0,variableArgs:!1},e.cm={id:i.OPS.transform,numArgs:6,variableArgs:!1},e.m={id:i.OPS.moveTo,numArgs:2,variableArgs:!1},e.l={id:i.OPS.lineTo,numArgs:2,variableArgs:!1},e.c={id:i.OPS.curveTo,numArgs:6,variableArgs:!1},e.v={id:i.OPS.curveTo2,numArgs:4,variableArgs:!1},e.y={id:i.OPS.curveTo3,numArgs:4,variableArgs:!1},e.h={id:i.OPS.closePath,numArgs:0,variableArgs:!1},e.re={id:i.OPS.rectangle,numArgs:4,variableArgs:!1},e.S={id:i.OPS.stroke,numArgs:0,variableArgs:!1},e.s={id:i.OPS.closeStroke,numArgs:0,variableArgs:!1},e.f={id:i.OPS.fill,numArgs:0,variableArgs:!1},e.F={id:i.OPS.fill,numArgs:0,variableArgs:!1},e["f*"]={id:i.OPS.eoFill,numArgs:0,variableArgs:!1},e.B={id:i.OPS.fillStroke,numArgs:0,variableArgs:!1},e["B*"]={id:i.OPS.eoFillStroke,numArgs:0,variableArgs:!1},e.b={id:i.OPS.closeFillStroke,numArgs:0,variableArgs:!1},e["b*"]={id:i.OPS.closeEOFillStroke,numArgs:0,variableArgs:!1},e.n={id:i.OPS.endPath,numArgs:0,variableArgs:!1},e.W={id:i.OPS.clip,numArgs:0,variableArgs:!1},e["W*"]={id:i.OPS.eoClip,numArgs:0,variableArgs:!1}
e.BT={id:i.OPS.beginText,numArgs:0,variableArgs:!1},e.ET={id:i.OPS.endText,numArgs:0,variableArgs:!1},e.Tc={id:i.OPS.setCharSpacing,numArgs:1,variableArgs:!1},e.Tw={id:i.OPS.setWordSpacing,numArgs:1,variableArgs:!1},e.Tz={id:i.OPS.setHScale,numArgs:1,variableArgs:!1},e.TL={id:i.OPS.setLeading,numArgs:1,variableArgs:!1},e.Tf={id:i.OPS.setFont,numArgs:2,variableArgs:!1},e.Tr={id:i.OPS.setTextRenderingMode,numArgs:1,variableArgs:!1},e.Ts={id:i.OPS.setTextRise,numArgs:1,variableArgs:!1},e.Td={id:i.OPS.moveText,numArgs:2,variableArgs:!1},e.TD={id:i.OPS.setLeadingMoveText,numArgs:2,variableArgs:!1},e.Tm={id:i.OPS.setTextMatrix,numArgs:6,variableArgs:!1},e["T*"]={id:i.OPS.nextLine,numArgs:0,variableArgs:!1},e.Tj={id:i.OPS.showText,numArgs:1,variableArgs:!1},e.TJ={id:i.OPS.showSpacedText,numArgs:1,variableArgs:!1},e["'"]={id:i.OPS.nextLineShowText,numArgs:1,variableArgs:!1},e['"']={id:i.OPS.nextLineSetSpacingShowText,numArgs:3,variableArgs:!1},e.d0={id:i.OPS.setCharWidth,numArgs:2,variableArgs:!1},e.d1={id:i.OPS.setCharWidthAndBounds,numArgs:6,variableArgs:!1},e.CS={id:i.OPS.setStrokeColorSpace,numArgs:1,variableArgs:!1},e.cs={id:i.OPS.setFillColorSpace,numArgs:1,variableArgs:!1},e.SC={id:i.OPS.setStrokeColor,numArgs:4,variableArgs:!0},e.SCN={id:i.OPS.setStrokeColorN,numArgs:33,variableArgs:!0},e.sc={id:i.OPS.setFillColor,numArgs:4,variableArgs:!0},e.scn={id:i.OPS.setFillColorN,numArgs:33,variableArgs:!0},e.G={id:i.OPS.setStrokeGray,numArgs:1,variableArgs:!1},e.g={id:i.OPS.setFillGray,numArgs:1,variableArgs:!1},e.RG={id:i.OPS.setStrokeRGBColor,numArgs:3,variableArgs:!1},e.rg={id:i.OPS.setFillRGBColor,numArgs:3,variableArgs:!1},e.K={id:i.OPS.setStrokeCMYKColor,numArgs:4,variableArgs:!1}
e.k={id:i.OPS.setFillCMYKColor,numArgs:4,variableArgs:!1},e.sh={id:i.OPS.shadingFill,numArgs:1,variableArgs:!1},e.BI={id:i.OPS.beginInlineImage,numArgs:0,variableArgs:!1},e.ID={id:i.OPS.beginImageData,numArgs:0,variableArgs:!1},e.EI={id:i.OPS.endInlineImage,numArgs:1,variableArgs:!1},e.Do={id:i.OPS.paintXObject,numArgs:1,variableArgs:!1},e.MP={id:i.OPS.markPoint,numArgs:1,variableArgs:!1},e.DP={id:i.OPS.markPointProps,numArgs:2,variableArgs:!1},e.BMC={id:i.OPS.beginMarkedContent,numArgs:1,variableArgs:!1},e.BDC={id:i.OPS.beginMarkedContentProps,numArgs:2,variableArgs:!1},e.EMC={id:i.OPS.endMarkedContent,numArgs:0,variableArgs:!1},e.BX={id:i.OPS.beginCompat,numArgs:0,variableArgs:!1},e.EX={id:i.OPS.endCompat,numArgs:0,variableArgs:!1},e.BM=null,e.BD=null,e.true=null,e.fa=null,e.fal=null,e.fals=null,e.false=null,e.nu=null,e.nul=null,e.null=null}))
return(0,i.shadow)(this,"opMap",e())}},{key:"MAX_INVALID_PATH_OPS",get:function(){return(0,i.shadow)(this,"MAX_INVALID_PATH_OPS",20)}}]),R(e,[{key:"read",value:function(t){for(var r=t.args;;){var a=this.parser.getObj()
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
case i.OPS.transform:this.stateManager.transform(t)}}},{key:"savedStatesDepth",get:function(){return this.stateManager.stateStack.length}}]),e}()
t.EvaluatorPreprocessor=W},(e,t,r)=>{"use strict"
function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.IdentityCMap=t.CMapFactory=t.CMap=void 0
var n,i=(n=r(2))&&n.__esModule?n:{default:n},o=r(4),s=r(135),c=r(141),l=r(138),u=r(142)
function h(e,t,r,a,n,i,o){try{var s=e[i](o),c=s.value}catch(l){return void r(l)}s.done?t(c):Promise.resolve(c).then(a,n)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,a=g(e)
if(t){var n=g(this).constructor
r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments)
return p(this,r)}}function p(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
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
if(a>=u&&a<=h)return r.charcode=a,void(r.length=i+1)}}r.charcode=0,r.length=1}},{key:"getCharCodeLength",value:function(e){for(var t=this.codespaceRanges,r=0,a=t.length;r<a;r++)for(var n=t[r],i=0,o=n.length;i<o;){var s=n[i++],c=n[i++]
if(e>=s&&e<=c)return r+1}return 1}},{key:"length",get:function(){return this._map.length}},{key:"isIdentityCMap",get:function(){if("Identity-H"!==this.name&&"Identity-V"!==this.name)return!1
if(65536!==this._map.length)return!1
for(var e=0;e<65536;e++)if(this._map[e]!==e)return!1
return!0}}]),e}()
t.CMap=k
var S=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)})(r,e)
var t=d(r)
function r(e,a){var n
return m(this,r),(n=t.call(this)).vertical=e,n.addCodespaceRange(a,0,65535),n}return b(r,[{key:"mapCidRange",value:function(e,t,r){(0,o.unreachable)("should not call mapCidRange")}},{key:"mapBfRange",value:function(e,t,r){(0,o.unreachable)("should not call mapBfRange")}},{key:"mapBfRangeToArray",value:function(e,t,r){(0,o.unreachable)("should not call mapBfRangeToArray")}},{key:"mapOne",value:function(e,t){(0,o.unreachable)("should not call mapCidOne")}},{key:"lookup",value:function(e){return Number.isInteger(e)&&e<=65535?e:void 0}},{key:"contains",value:function(e){return Number.isInteger(e)&&e<=65535}},{key:"forEach",value:function(e){for(var t=0;t<=65535;t++)e(t,t)}},{key:"charCodeOf",value:function(e){return Number.isInteger(e)&&e<=65535?e:-1}},{key:"getMap",value:function(){for(var e=new Array(65536),t=0;t<=65535;t++)e[t]=t
return e}},{key:"length",get:function(){return 65536}},{key:"isIdentityCMap",get:function(){(0,o.unreachable)("should not access .isIdentityCMap")}}]),r}(k)
t.IdentityCMap=S
var x=function(){function e(e,t){for(var r=0,a=0;a<=t;a++)r=r<<8|e[a]
return r>>>0}function t(e,t){return 1===t?String.fromCharCode(e[0],e[1]):3===t?String.fromCharCode(e[0],e[1],e[2],e[3]):String.fromCharCode.apply(null,e.subarray(0,t+1))}function r(e,t,r){for(var a=0,n=r;n>=0;n--)a+=e[n]+t[n],e[n]=255&a,a>>=8}function a(e,t){for(var r=1,a=t;a>=0&&r>0;a--)r+=e[a],e[a]=255&r,r>>=8}var n=16
function i(e){this.buffer=e,this.pos=0,this.end=e.length,this.tmpBuf=new Uint8Array(19)}function s(){}return i.prototype={readByte:function(){return this.pos>=this.end?-1:this.buffer[this.pos++]},readNumber:function(){var e,t=0
do{var r=this.readByte()
if(r<0)throw new o.FormatError("unexpected EOF in bcmap")
e=!(128&r),t=t<<7|127&r}while(!e)
return t},readSigned:function(){var e=this.readNumber()
return 1&e?~(e>>>1):e>>>1},readHex:function(e,t){e.set(this.buffer.subarray(this.pos,this.pos+t+1)),this.pos+=t+1},readHexNumber:function(e,t){var r,a=this.tmpBuf,n=0
do{var i=this.readByte()
if(i<0)throw new o.FormatError("unexpected EOF in bcmap")
r=!(128&i),a[n++]=127&i}while(!r)
for(var s=t,c=0,l=0;s>=0;){for(;l<8&&a.length>0;)c=a[--n]<<l|c,l+=7
e[s]=255&c,s--,c>>=8,l-=8}},readHexSigned:function(e,t){this.readHexNumber(e,t)
for(var r=1&e[t]?255:0,a=0,n=0;n<=t;n++)a=(1&a)<<8|e[n],e[n]=a>>1^r},readString:function(){for(var e=this.readNumber(),t="",r=0;r<e;r++)t+=String.fromCharCode(this.readNumber())
return t}},s.prototype={process:function(o,s,c){return new Promise((function(l,u){var h=new i(o),f=h.readByte()
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
return t>>>0}function t(e){if(!(0,o.isString)(e))throw new o.FormatError("Malformed CMap: expected string.")}function r(e){if(!Number.isInteger(e))throw new o.FormatError("Malformed CMap: expected int.")}function a(r,a){for(;;){var n=a.getObj()
if((0,s.isEOF)(n))break
if((0,s.isCmd)(n,"endbfchar"))return
t(n)
var i=e(n)
t(n=a.getObj())
var o=n
r.mapOne(i,o)}}function n(r,a){for(;;){var n=a.getObj()
if((0,s.isEOF)(n))break
if((0,s.isCmd)(n,"endbfrange"))return
t(n)
var i=e(n)
t(n=a.getObj())
var c=e(n)
if(n=a.getObj(),Number.isInteger(n)||(0,o.isString)(n)){var l=Number.isInteger(n)?String.fromCharCode(n):n
r.mapBfRange(i,c,l)}else{if(!(0,s.isCmd)(n,"["))break
n=a.getObj()
for(var u=[];!(0,s.isCmd)(n,"]")&&!(0,s.isEOF)(n);)u.push(n),n=a.getObj()
r.mapBfRangeToArray(i,c,u)}}throw new o.FormatError("Invalid bf range.")}function f(a,n){for(;;){var i=n.getObj()
if((0,s.isEOF)(i))break
if((0,s.isCmd)(i,"endcidchar"))return
t(i)
var o=e(i)
r(i=n.getObj())
var c=i
a.mapOne(o,c)}}function d(a,n){for(;;){var i=n.getObj()
if((0,s.isEOF)(i))break
if((0,s.isCmd)(i,"endcidrange"))return
t(i)
var o=e(i)
t(i=n.getObj())
var c=e(i)
r(i=n.getObj())
var l=i
a.mapCidRange(o,c,l)}}function p(t,r){for(;;){var a=r.getObj()
if((0,s.isEOF)(a))break
if((0,s.isCmd)(a,"endcodespacerange"))return
if(!(0,o.isString)(a))break
var n=e(a)
if(a=r.getObj(),!(0,o.isString)(a))break
var i=e(a)
t.addCodespaceRange(a.length,n,i)}throw new o.FormatError("Invalid codespace range.")}function g(e,t){var r=t.getObj()
Number.isInteger(r)&&(e.vertical=!!r)}function m(e,t){var r=t.getObj();(0,s.isName)(r)&&(0,o.isString)(r.name)&&(e.name=r.name)}function v(e,t,r,i){var c,u
e:for(;;)try{var h=t.getObj()
if((0,s.isEOF)(h))break
if((0,s.isName)(h))"WMode"===h.name?g(e,t):"CMapName"===h.name&&m(e,t),c=h
else if((0,s.isCmd)(h))switch(h.cmd){case"endcmap":break e
case"usecmap":(0,s.isName)(c)&&(u=c.name)
break
case"begincodespacerange":p(e,t)
break
case"beginbfchar":a(e,t)
break
case"begincidchar":f(e,t)
break
case"beginbfrange":n(e,t)
break
case"begincidrange":d(e,t)}}catch(v){if(v instanceof l.MissingDataException)throw v;(0,o.warn)("Invalid cMap data: "+v)
continue}return!i&&u&&(i=u),i?b(e,r,i):Promise.resolve(e)}function b(e,t,r){return w(r,t).then((function(t){if(e.useCMap=t,0===e.numCodespaceRanges){for(var r=e.useCMap.codespaceRanges,a=0;a<r.length;a++)e.codespaceRanges[a]=r[a].slice()
e.numCodespaceRanges=e.useCMap.numCodespaceRanges}return e.useCMap.forEach((function(t,r){e.contains(t)||e.mapOne(t,e.useCMap.lookup(t))})),e}))}function w(e,t){return"Identity-H"===e?Promise.resolve(new S(!1,2)):"Identity-V"===e?Promise.resolve(new S(!0,2)):y.includes(e)?t?t(e).then((function(e){var r=e.cMapData,a=e.compressionType,n=new k(!0)
if(a===o.CMapCompressionType.BINARY)return(new x).process(r,n,(function(e){return b(n,t,e)}))
if(a===o.CMapCompressionType.NONE){var i=new c.Lexer(new u.Stream(r))
return v(n,i,t,null)}return Promise.reject(new Error("TODO: Only BINARY/NONE CMap compression is currently supported."))})):Promise.reject(new Error("Built-in CMap parameters are not provided.")):Promise.reject(new Error("Unknown CMap name: "+e))}return{create:function(e){return(t=i.default.mark((function t(){var r,a,n,o,l
return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.encoding,a=e.fetchBuiltInCMap,n=e.useCMap,!(0,s.isName)(r)){t.next=7
break}return t.abrupt("return",w(r.name,a))
case 7:if(!(0,s.isStream)(r)){t.next=11
break}return o=new k,l=new c.Lexer(r),t.abrupt("return",v(o,l,a,n).then((function(e){return e.isIdentityCMap?w(e.name,a):e})))
case 11:throw new Error("Encoding required.")
case 12:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments
return new Promise((function(a,n){var i=t.apply(e,r)
function o(e){h(i,a,n,o,s,"next",e)}function s(e){h(i,a,n,o,s,"throw",e)}o(void 0)}))})()
var t}}}()
t.CMapFactory=C},(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.getFontType=O,t.ToUnicodeMap=t.SEAC_ANALYSIS_ENABLED=t.IdentityToUnicodeMap=t.FontFlags=t.Font=t.ErrorFont=void 0
var a=r(4),n=r(160),i=r(163),o=r(162),s=r(164),c=r(165),l=r(138),u=r(166),h=r(158),f=r(142),d=r(167)
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
return(0,a.info)("Unable to recover a standard glyph name for: "+e),e}var I=function(){function e(e,t,r,a,n,i,o,s){this.fontChar=e,this.unicode=t,this.accent=r,this.width=a,this.vmetric=n,this.operatorListId=i,this.isSpace=o,this.isInFont=s}return e.prototype.matchesForCache=function(e,t,r,a,n,i,o,s){return this.fontChar===e&&this.unicode===t&&this.accent===r&&this.width===a&&this.vmetric===n&&this.operatorListId===i&&this.isSpace===o&&this.isInFont===s},e}(),P=function(){function e(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]
this._map=e}return e.prototype={get length(){return this._map.length},forEach:function(e){for(var t in this._map)e(t,this._map[t].charCodeAt(0))},has:function(e){return void 0!==this._map[e]},get:function(e){return this._map[e]},charCodeOf:function(e){var t=this._map
if(t.length<=65536)return t.indexOf(e)
for(var r in t)if(t[r]===e)return 0|r
return-1},amend:function(e){for(var t in e)this._map[t]=e[t]}},e}()
t.ToUnicodeMap=P
var E=function(){function e(e,t){this.firstChar=e,this.lastChar=t}return e.prototype={get length(){return this.lastChar+1-this.firstChar},forEach:function(e){for(var t=this.firstChar,r=this.lastChar;t<=r;t++)e(t,t)},has:function(e){return this.firstChar<=e&&e<=this.lastChar},get:function(e){if(this.firstChar<=e&&e<=this.lastChar)return String.fromCharCode(e)},charCodeOf:function(e){return Number.isInteger(e)&&e>=this.firstChar&&e<=this.lastChar?e:-1},amend:function(e){(0,a.unreachable)("Should not call amend()")}},e}()
t.IdentityToUnicodeMap=E
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
if(this.isMonospace?s="monospace":this.isSerifFont&&(s="serif"),this.fallbackName=s,this.differences=r.differences,this.widths=r.widths,this.defaultWidth=r.defaultWidth,this.composite=r.composite,this.cMap=r.cMap,this.capHeight=r.capHeight/y,this.ascent=r.ascent/y,this.descent=r.descent/y,this.fontMatrix=r.fontMatrix,this.bbox=r.bbox,this.defaultEncoding=r.defaultEncoding,this.toUnicode=r.toUnicode,this.fallbackToUnicode=r.fallbackToUnicode||new P,this.toFontChar=[],"Type3"!==r.type){if(this.cidEncoding=r.cidEncoding,this.vertical=!!r.vertical,this.vertical&&(this.vmetrics=r.vmetrics,this.defaultVMetrics=r.defaultVMetrics),!t||t.isEmpty)return t&&(0,a.warn)('Font file is empty in "'+e+'" ('+this.loadedName+")"),void this.fallbackToSystemFont(r)
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
default:throw new a.FormatError("Font ".concat(i," is not supported"))}}catch(f){return(0,a.warn)(f),void this.fallbackToSystemFont(r)}this.data=u,this.fontType=O(i,o),this.fontMatrix=r.fontMatrix,this.widths=r.widths,this.defaultWidth=r.defaultWidth,this.toUnicode=r.toUnicode,this.seacMap=r.seacMap}else{for(n=0;n<256;n++)this.toFontChar[n]=this.differences[n]||r.defaultEncoding[n]
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
var T="\0\0"+d(2*v)+d(b.range)+d(b.entry)+d(b.rangeShift)+w+"\0\0"+y+k+S+x,I="",P=""
if(c>1){for(l+="\0\0\n"+(0,a.string32)(4+8*c+4+T.length),I="",r=0,n=s.length;r<n;r++){f=(h=s[r])[0]
var E=(g=h[2])[0]
for(i=1,o=g.length;i<o;++i)g[i]!==g[i-1]+1&&(p=h[0]+i-1,I+=(0,a.string32)(f)+(0,a.string32)(p)+(0,a.string32)(E),f=p+1,E=g[i])
I+=(0,a.string32)(f)+(0,a.string32)(h[1])+(0,a.string32)(E)}P="\0\f\0\0"+(0,a.string32)(I.length+16)+"\0\0\0\0"+(0,a.string32)(I.length/12)}return l+"\0"+d(T.length+4)+T+P+I}function L(e,t,r){r=r||{unitsPerEm:0,yMax:0,yMin:0,ascent:0,descent:0}
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
try{for(o.s();!(r=o.n()).done;)void 0!==(t=this[e=r.value])&&(i[e]=t)}catch(s){o.e(s)}finally{o.f()}return i},fallbackToSystemFont:function(e){var t=this
this.missingFile=!0
var r=this.name,n=this.type,l=this.subtype,u=r.replace(/[,_]/g,"-").replace(/\s/g,""),h=(0,s.getStdFontMap)(),f=(0,s.getNonStdFontMap)(),d=!!h[u],p=!(!f[u]||!h[f[u]])
u=h[u]||f[u]||u,this.bold=-1!==u.search(/bold/gi),this.italic=-1!==u.search(/oblique/gi)||-1!==u.search(/italic/gi),this.black=-1!==r.search(/Black/g)
var g=-1!==r.search(/Narrow/g)
if(this.remeasure=(!d||g)&&Object.keys(this.widths).length>0,(d||p)&&"CIDFontType2"===n&&this.cidEncoding.startsWith("Identity-")){var m=(0,s.getGlyphMapForStandardFonts)(),v=e.cidToGidMap,b=[]
for(var y in m)b[+y]=m[y]
if(/Arial-?Black/i.test(r)){var w=(0,s.getSupplementalGlyphMapForArialBlack)()
for(var k in w)b[+k]=w[k]}else if(/Calibri/i.test(r)){var S=(0,s.getSupplementalGlyphMapForCalibri)()
for(var x in S)b[+x]=S[x]}if(v)for(var C in b){var A=b[C]
void 0!==v[A]&&(b[+C]=v[A])}this.toUnicode instanceof E||this.toUnicode.forEach((function(e,t){b[+e]=t})),this.toFontChar=b,this.toUnicode=new P(b)}else if(/Symbol/i.test(u))this.toFontChar=F(o.SymbolSetEncoding,(0,i.getGlyphsUnicode)(),this.differences)
else if(/Dingbats/i.test(u))/Wingdings/i.test(r)&&(0,a.warn)("Non-embedded Wingdings font, falling back to ZapfDingbats."),this.toFontChar=F(o.ZapfDingbatsEncoding,(0,i.getDingbatsGlyphsUnicode)(),this.differences)
else if(d)this.toFontChar=F(this.defaultEncoding,(0,i.getGlyphsUnicode)(),this.differences)
else{var T=(0,i.getGlyphsUnicode)(),I=[]
if(this.toUnicode.forEach((function(e,r){if(!t.composite){var a=t.differences[e]||t.defaultEncoding[e],n=(0,c.getUnicodeForGlyph)(a,T);-1!==n&&(r=n)}I[+e]=r})),this.composite&&this.toUnicode instanceof E&&/Verdana/i.test(r)){var _=(0,s.getGlyphMapForStandardFonts)()
for(var R in _)I[+R]=_[R]}this.toFontChar=I}this.loadedName=u.split("-")[0],this.fontType=O(n,l)},checkAndRepair:function(e,s,c){var l=["OS/2","cmap","head","hhea","hmtx","maxp","name","post","loca","glyf","fpgm","prep","cvt ","CFF "]
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
var P=!y["CFF "]
if(P){if(!y.loca)throw new a.FormatError('Required "loca" table is not found')
y.glyf||((0,a.warn)('Required "glyf" table is not found -- trying to recover.'),y.glyf={tag:"glyf",data:new Uint8Array(0)}),this.isOpenType=!1}else{var E=c.composite&&((c.cidToGidMap||[]).length>0||!(c.cMap instanceof h.IdentityCMap))
if("OTTO"===b.version&&!E||!y.head||!y.hhea||!y.maxp||!y.post)return S=new f.Stream(y["CFF "].data),k=new D(S,c),A(c),this.convert(e,k,c)
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
l[50]=0,l[51]=1}}})(y.head,M,P?y.loca.length:0)
var W=Object.create(null)
if(P){var X=t(y.head.data[50],y.head.data[51]),V=function(e,t,r,a,n,i,o){var s,c,l
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
var K={unitsPerEm:t(y.head.data[18],y.head.data[19]),yMax:t(y.head.data[42],y.head.data[43]),yMin:r(y.head.data[38],y.head.data[39]),ascent:t(y.hhea.data[4],y.hhea.data[5]),descent:r(y.hhea.data[6],y.hhea.data[7])}
this.ascent=K.ascent/K.unitsPerEm,this.descent=K.descent/K.unitsPerEm,y.post&&function(e,t,r){var n=(s.start?s.start:0)+e.offset
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
var Y=[]
function J(e){return!W[e]}if(c.composite){var Z=c.cidToGidMap||[],Q=0===Z.length
c.cMap.forEach((function(e,t){if(t>65535)throw new a.FormatError("Max size of CID is 65,535")
var r=-1
Q?r=t:void 0!==Z[t]&&(r=Z[t]),r>=0&&r<M&&J(r)&&(Y[e]=r)}))}else{var $=function(e,t,r,n){if(!e)return(0,a.warn)("No cmap table available."),{platformId:-1,encodingId:-1,mappings:[],hasShortCmap:!1}
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
var I=i.end,P=i.delta
for(O=i.offsetIndex,m=o;m<=I;m++)65535!==m&&(v=(v=O<0?m:T[O+m-o])+P&65535,y.push({charCode:m,glyphId:v}))}}else{if(6!==g)return(0,a.warn)("cmap table has unsupported format: "+g),{platformId:-1,encodingId:-1,mappings:[],hasShortCmap:!1}
var E=t.getUint16(),_=t.getUint16()
for(m=0;m<_;m++){v=t.getUint16()
var F=E+m
y.push({charCode:F,glyphId:v})}}for(y.sort((function(e,t){return e.charCode-t.charCode})),u=1;u<y.length;u++)y[u-1].charCode===y[u].charCode&&(y.splice(u,1),u--)
return{platformId:s.platformId,encodingId:s.encodingId,mappings:y,hasShortCmap:b}}(y.cmap,s,this.isSymbolicFont,c.hasEncoding),ee=$.platformId,te=$.encodingId,re=$.mappings,ae=re.length,ne=[]
if(!c.hasEncoding||"MacRomanEncoding"!==c.baseEncodingName&&"WinAnsiEncoding"!==c.baseEncodingName||(ne=(0,o.getEncoding)(c.baseEncodingName)),c.hasEncoding&&!this.isSymbolicFont&&(3===ee&&1===te||1===ee&&0===te))for(var ie=(0,i.getGlyphsUnicode)(),oe=0;oe<256;oe++){var se,ce
if(se=this.differences&&oe in this.differences?this.differences[oe]:oe in ne&&""!==ne[oe]?ne[oe]:o.StandardEncoding[oe]){var le
ce=T(se,ie),3===ee&&1===te?le=ie[ce]:1===ee&&0===te&&(le=o.MacRomanEncoding.indexOf(ce))
for(var ue=0;ue<ae;++ue)if(re[ue].charCode===le){Y[oe]=re[ue].glyphId
break}}}else if(0===ee)for(var he=0;he<ae;++he)Y[re[he].charCode]=re[he].glyphId
else for(var fe=0;fe<ae;++fe){var de=re[fe].charCode
3===ee&&de>=61440&&de<=61695&&(de&=255),Y[de]=re[fe].glyphId}if(c.glyphNames&&ne.length)for(var pe=0;pe<256;++pe)if(void 0===Y[pe]&&ne[pe]){se=ne[pe]
var ge=c.glyphNames.indexOf(se)
ge>0&&J(ge)&&(Y[pe]=ge)}}0===Y.length&&(Y[0]=0)
var me=j-1
q||(me=0)
var ve=R(Y,J,me)
if(this.toFontChar=ve.toFontChar,y.cmap={tag:"cmap",data:B(ve.charCodeToGlyphId,j)},y["OS/2"]&&function(e,t){t.pos=(t.start||0)+e.offset
var r=t.getUint16()
t.skip(60)
var a=t.getUint16()
return!(r<4&&768&a||t.getUint16()>t.getUint16()||(t.skip(6),0===t.getUint16()||(e.data[8]=e.data[9]=0,0)))}(y["OS/2"],s)||(y["OS/2"]={tag:"OS/2",data:L(c,ve.charCodeToGlyphId,K)}),!P)try{S=new f.Stream(y["CFF "].data),(k=new n.CFFParser(S,c,w).parse()).duplicateFirstGlyph()
var be=new n.CFFCompiler(k)
y["CFF "].data=be.compile()}catch(Se){(0,a.warn)("Failed to compile font "+c.loadedName)}if(y.name){var ye=m(y.name)
y.name.data=U(e,ye)}else y.name={tag:"name",data:U(this.name)}
var we=new _(b.version)
for(var ke in y)we.addTable(ke,y[ke].data)
return we.toArray()},convert:function(e,t,r){r.fixedPitch=!1,r.builtInEncoding&&function(e,t){if(!e.hasIncludedToUnicodeMap&&!(e.hasEncoding||t===e.defaultEncoding||e.toUnicode instanceof E)){var r=[],a=(0,i.getGlyphsUnicode)()
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
if(O)for(var T=0,I=O.length;T<I;T++){var P=O[T],F=l.charCodeToGlyphId,M=f(F,x),j=f(F,C)
b[P]={baseFontCharCode:M,accentFontCharCode:j,accentOffset:A}}}}r.seacMap=b}var q=1/(r.fontMatrix||a.FONT_IDENTITY_MATRIX)[0],z=new _("OTTO")
return z.addTable("CFF ",t.data),z.addTable("OS/2",L(r,l.charCodeToGlyphId)),z.addTable("cmap",B(l.charCodeToGlyphId,u)),z.addTable("head","\0\0\0\0\0\0\0\0\0\0_<õ\0\0"+m(q)+"\0\0\0\0\v~'\0\0\0\0\v~'\0\0"+m(r.descent)+"ÿ"+m(r.ascent)+d(r.italicAngle?2:0)+"\0\0\0\0\0\0\0"),z.addTable("hhea","\0\0\0"+m(r.ascent)+m(r.descent)+"\0\0ÿÿ\0\0\0\0\0\0"+m(r.capHeight)+m(Math.tan(r.italicAngle)*r.xHeight)+"\0\0\0\0\0\0\0\0\0\0\0\0"+d(u)),z.addTable("hmtx",function(){for(var e=t.charstrings,r=t.cff?t.cff.widths:null,a="\0\0\0\0",n=1,i=u;n<i;n++){var o=0
if(e){var s=e[n-1]
o="width"in s?s.width:0}else r&&(o=Math.ceil(r[n]||0))
a+=d(o)+d(0)}return a}()),z.addTable("maxp","\0\0P\0"+d(u)),z.addTable("name",U(e)),z.addTable("post",N(r)),z.toArray()},get spaceWidth(){for(var e,t=["space","minus","one","i","I"],r=0,n=t.length;r<n;r++){var o=t[r]
if(o in this.widths){e=this.widths[o]
break}var s=(0,i.getGlyphsUnicode)()[o],c=0
if(this.composite&&this.cMap.contains(s)&&(c=this.cMap.lookup(s)),!c&&this.toUnicode&&(c=this.toUnicode.charCodeOf(s)),c<=0&&(c=s),e=this.widths[c])break}return e=e||this.defaultWidth,(0,a.shadow)(this,"spaceWidth",e)},_charToGlyph:function(e){var t,r,n,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=e
this.cMap&&this.cMap.contains(e)&&(o=this.cMap.lookup(e)),r=this.widths[o],r=(0,a.isNum)(r)?r:this.defaultWidth
var s=this.vmetrics&&this.vmetrics[o],l=this.toUnicode.get(e)||this.fallbackToUnicode.get(e)||e
"number"==typeof l&&(l=String.fromCharCode(l))
var u=e in this.toFontChar
if(t=this.toFontChar[e]||e,this.missingFile){var h=this.differences[e]||this.defaultEncoding[e]
".notdef"!==h&&""!==h||"Type1"!==this.type||(t=32),t=(0,c.mapSpecialUnicodeValues)(t)}this.isType3Font&&(n=t)
var f=null
if(this.seacMap&&this.seacMap[e]){u=!0
var d=this.seacMap[e]
t=d.baseFontCharCode,f={fontChar:String.fromCodePoint(d.accentFontCharCode),offset:d.accentOffset}}var p=""
"number"==typeof t&&(t<=1114111?p=String.fromCodePoint(t):(0,a.warn)("charToGlyph - invalid fontCharCode: ".concat(t)))
var g=this.glyphCache[e]
return g&&g.matchesForCache(p,l,f,r,s,n,i,u)||(g=new I(p,l,f,r,s,n,i,u),this.glyphCache[e]=g),g},charsToGlyphs:function(e){var t,r,a,n=this.charsCache
if(n&&(t=n[e]))return t
n||(n=this.charsCache=Object.create(null)),t=[]
var i,o=e,s=0
if(this.cMap)for(var c=Object.create(null);s<e.length;){this.cMap.readCharCode(e,s,c),a=c.charcode
var l=c.length
s+=l
var u=1===l&&32===e.charCodeAt(s-1)
r=this._charToGlyph(a,u),t.push(r)}else for(s=0,i=e.length;s<i;++s)a=e.charCodeAt(s),r=this._charToGlyph(a,32===a),t.push(r)
return n[o]=t},getCharPositions:function(e){var t=[]
if(this.cMap)for(var r=Object.create(null),a=0;a<e.length;){this.cMap.readCharCode(e,a,r)
var n=r.length
t.push([a,a+n]),a+=n}else for(var i=0,o=e.length;i<o;++i)t.push([i,i+1])
return t},get glyphCacheValues(){return Object.values(this.glyphCache)},encodeString:function(e){for(var t=[],r=[],a=function(){return t.length%2==1},n=0,i=e.length;n<i;n++){var o=e.codePointAt(n)
if(o>55295&&(o<57344||o>65533)&&n++,this.toUnicode){var s=String.fromCodePoint(o),c=this.toUnicode.charCodeOf(s)
if(-1!==c){a()&&(t.push(r.join("")),r.length=0)
for(var l=(this.cMap?this.cMap.getCharCodeLength(c):1)-1;l>=0;l--)r.push(String.fromCharCode(c>>8*l&255))
continue}}a()||(t.push(r.join("")),r.length=0),r.push(String.fromCodePoint(o))}return t.push(r.join("")),t}},e}()
t.Font=F
var R=function(){function e(e){this.error=e,this.loadedName="g_font_error",this.missingFile=!0}return e.prototype={charsToGlyphs:function(){return[]},encodeString:function(e){return[e]},exportData:function(){return{error:this.error}}},e}()
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
return e}return e=B(a,r.encoding?r.encoding.encoding:null,n)},hasGlyphId:function(e){return this.cff.hasGlyphId(e)}},e}()},(e,t,r)=>{"use strict"
function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.CFFTopDict=t.CFFStrings=t.CFFStandardStrings=t.CFFPrivateDict=t.CFFParser=t.CFFIndex=t.CFFHeader=t.CFFFDSelect=t.CFFCompiler=t.CFFCharset=t.CFF=void 0
var n=r(4),i=r(161),o=r(162)
function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,a=h(e)
if(t){var n=h(this).constructor
r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments)
return u(this,r)}}function u(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
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
if(r>=t)throw new n.FormatError("Invalid CFF header")
0!==r&&((0,n.info)("cff data is shifted"),e=e.subarray(r),this.bytes=e)
var a=e[0],i=e[1],o=e[2],s=e[3]
return{obj:new k(a,i,o,s),endPos:o}}},{key:"parseDict",value:function(e){var t=0
function r(){var r=e[t++]
return 30===r?function(){for(var r="",a=15,n=["0","1","2","3","4","5","6","7","8","9",".","E","E-",null,"-"],i=e.length;t<i;){var o=e[t++],s=o>>4,c=15&o
if(s===a)break
if(r+=n[s],c===a)break
r+=n[c]}return parseFloat(r)}():28===r?r=((r=e[t++])<<24|e[t++]<<16)>>16:29===r?r=(r=(r=(r=e[t++])<<8|e[t++])<<8|e[t++])<<8|e[t++]:r>=32&&r<=246?r-139:r>=247&&r<=250?256*(r-247)+e[t++]+108:r>=251&&r<=254?-256*(r-251)-e[t++]-108:((0,n.warn)('CFFParser_parseDict: "'+r+'" is a reserved command.'),NaN)}var a=[],i=[]
t=0
for(var o=e.length;t<o;){var s=e[t]
s<=21?(12===s&&(s=s<<8|e[++t]),i.push([s,a]),a=[],++t):a.push(r())}return i}},{key:"parseIndex",value:function(e){var t,r,a=new x,n=this.bytes,i=n[e++]<<8|n[e++],o=[],s=e
if(0!==i){var c=n[e++],l=e+(i+1)*c-1
for(t=0,r=i+1;t<r;++t){for(var u=0,h=0;h<c;++h)u<<=8,u+=n[e++]
o.push(l+u)}s=o[i]}for(t=0,r=o.length-1;t<r;++t){var f=o[t],d=o[t+1]
a.add(n.subarray(f,d))}return{obj:a,endPos:s}}},{key:"parseNameIndex",value:function(e){for(var t=[],r=0,a=e.count;r<a;++r){var i=e.get(r)
t.push((0,n.bytesToString)(i))}return t}},{key:"parseStringIndex",value:function(e){for(var t=new S,r=0,a=e.count;r<a;++r){var i=e.get(r)
t.add((0,n.bytesToString)(i))}return t}},{key:"createDict",value:function(e,t,r){for(var a=new e(r),n=0,i=t.length;n<i;++n){var o=t[n],s=o[0],c=o[1]
a.setByKey(s,c)}return a}},{key:"parseCharString",value:function(e,t,r,a){if(!t||e.callDepth>10)return!1
for(var i=e.stackSize,o=e.stack,s=t.length,c=0;c<s;){var l=t[c++],u=null
if(12===l){var h=t[c++]
0===h?(t[c-2]=139,t[c-1]=22,i=0):u=v[h]}else if(28===l)o[i]=(t[c]<<24|t[c+1]<<16)>>16,c+=2,i++
else if(14===l){if(i>=4&&(i-=4,this.seacAnalysisEnabled))return e.seac=o.slice(i,i+4),!1
u=m[l]}else if(l>=32&&l<=246)o[i]=l-139,i++
else if(l>=247&&l<=254)o[i]=l<251?(l-247<<8)+t[c]+108:-(l-251<<8)-t[c]-108,c++,i++
else if(255===l)o[i]=(t[c]<<24|t[c+1]<<16|t[c+2]<<8|t[c+3])/65536,c+=4,i++
else if(19===l||20===l)e.hints+=i>>1,c+=e.hints+7>>3,i%=2,u=m[l]
else{if(10===l||29===l){var f
if(!(f=10===l?r:a))return u=m[l],(0,n.warn)("Missing subrsIndex for "+u.id),!1
var d=32768
f.count<1240?d=107:f.count<33900&&(d=1131)
var p=o[--i]+d
if(p<0||p>=f.count||isNaN(p))return u=m[l],(0,n.warn)("Out of bounds subrIndex for "+u.id),!1
if(e.stackSize=i,e.callDepth++,!this.parseCharString(e,f.get(p),r,a))return!1
e.callDepth--,i=e.stackSize
continue}if(11===l)return e.stackSize=i,!0
u=m[l]}if(u){if(u.stem&&(e.hints+=i>>1,3===l||23===l?e.hasVStems=!0:!e.hasVStems||1!==l&&18!==l||((0,n.warn)("CFF stem hints are in wrong order"),t[c-1]=1===l?3:23)),"min"in u&&!e.undefStack&&i<u.min)return(0,n.warn)("Not enough parameters for "+u.id+"; actual: "+i+", expected: "+u.min),!1
e.firstStackClearing&&u.stackClearing&&(e.firstStackClearing=!1,(i-=u.min)>=2&&u.stem?i%=2:i>1&&(0,n.warn)("Found too many parameters for stack-clearing command"),i>0&&o[i-1]>=0&&(e.width=o[i-1])),"stackDelta"in u?("stackFn"in u&&u.stackFn(o,i),i+=u.stackDelta):u.stackClearing?i=0:u.resetStack?(i=0,e.undefStack=!1):u.undefStack&&(i=0,e.undefStack=!0,e.firstStackClearing=!1)}}return e.stackSize=i,!0}},{key:"parseCharStrings",value:function(e){for(var t=e.charStrings,r=e.localSubrIndex,a=e.globalSubrIndex,i=e.fdSelect,o=e.fdArray,s=e.privateDict,c=[],l=[],u=t.count,h=0;h<u;h++){var f=t.get(h),d={callDepth:0,stackSize:0,stack:[],undefStack:!0,hints:0,firstStackClearing:!0,seac:null,width:null,hasVStems:!1},p=!0,g=null,m=s
if(i&&o.length){var v=i.getFDIndex(h);-1===v&&((0,n.warn)("Glyph index is not in fd select."),p=!1),v>=o.length&&((0,n.warn)("Invalid fd index for glyph index."),p=!1),p&&(g=(m=o[v].privateDict).subrsIndex)}else r&&(g=r)
if(p&&(p=this.parseCharString(d,f,g,a)),null!==d.width){var b=m.getByName("nominalWidthX")
l[h]=b+d.width}else{var y=m.getByName("defaultWidthX")
l[h]=y}null!==d.seac&&(c[h]=d.seac),p||t.set(h,new Uint8Array([14]))}return{charStrings:t,seacs:c,widths:l}}},{key:"emptyPrivateDictionary",value:function(e){var t=this.createDict(I,[],e.strings)
e.setByKey(18,[0,0]),e.privateDict=t}},{key:"parsePrivateDict",value:function(e){if(e.hasName("Private")){var t=e.getByName("Private")
if(Array.isArray(t)&&2===t.length){var r=t[0],a=t[1]
if(0===r||a>=this.bytes.length)this.emptyPrivateDictionary(e)
else{var n=a+r,i=this.bytes.subarray(a,n),o=this.parseDict(i),s=this.createDict(I,o,e.strings)
if(e.privateDict=s,s.getByName("Subrs")){var c=s.getByName("Subrs"),l=a+c
if(0===c||l>=this.bytes.length)this.emptyPrivateDictionary(e)
else{var u=this.parseIndex(l)
s.subrsIndex=u.obj}}}}else e.removeByName("Private")}else this.emptyPrivateDictionary(e)}},{key:"parseCharsets",value:function(e,t,r,a){if(0===e)return new E(!0,P.ISO_ADOBE,i.ISOAdobeCharset)
if(1===e)return new E(!0,P.EXPERT,i.ExpertCharset)
if(2===e)return new E(!0,P.EXPERT_SUBSET,i.ExpertSubsetCharset)
var o,s,c,l=this.bytes,u=e,h=l[e++],f=[a?0:".notdef"]
switch(t-=1,h){case 0:for(c=0;c<t;c++)o=l[e++]<<8|l[e++],f.push(a?o:r.get(o))
break
case 1:for(;f.length<=t;)for(o=l[e++]<<8|l[e++],s=l[e++],c=0;c<=s;c++)f.push(a?o++:r.get(o++))
break
case 2:for(;f.length<=t;)for(o=l[e++]<<8|l[e++],s=l[e++]<<8|l[e++],c=0;c<=s;c++)f.push(a?o++:r.get(o++))
break
default:throw new n.FormatError("Unknown charset format")}var d=e,p=l.subarray(u,d)
return new E(!1,h,f,p)}},{key:"parseEncoding",value:function(e,t,r,a){var i,s,c,l=Object.create(null),u=this.bytes,h=!1,f=null
if(0===e||1===e){h=!0,i=e
var d=e?o.ExpertEncoding:o.StandardEncoding
for(s=0,c=a.length;s<c;s++){var p=d.indexOf(a[s]);-1!==p&&(l[p]=s)}}else{var g=e
switch(127&(i=u[e++])){case 0:var m=u[e++]
for(s=1;s<=m;s++)l[u[e++]]=s
break
case 1:var v=u[e++],b=1
for(s=0;s<v;s++)for(var y=u[e++],w=u[e++],k=y;k<=y+w;k++)l[k]=b++
break
default:throw new n.FormatError("Unknown encoding format: ".concat(i," in CFF"))}var S=e
128&i&&(u[g]&=127,function(){var t=u[e++]
for(s=0;s<t;s++){var n=u[e++],i=(u[e++]<<8)+(255&u[e++])
l[n]=a.indexOf(r.get(i))}}()),f=u.subarray(g,S)}return new _(h,i&=127,l,f)}},{key:"parseFDSelect",value:function(e,t){var r,a=this.bytes,i=a[e++],o=[]
switch(i){case 0:for(r=0;r<t;++r){var s=a[e++]
o.push(s)}break
case 3:var c=a[e++]<<8|a[e++]
for(r=0;r<c;++r){var l=a[e++]<<8|a[e++]
0===r&&0!==l&&((0,n.warn)("parseFDSelect: The first range must have a first GID of 0 -- trying to recover."),l=0)
for(var u=a[e++],h=a[e]<<8|a[e+1],f=l;f<h;++f)o.push(u)}e+=2
break
default:throw new n.FormatError('parseFDSelect: Unknown format "'.concat(i,'".'))}if(o.length!==t)throw new n.FormatError("parseFDSelect: Invalid font data.")
return new F(i,o)}}]),e}())
t.CFFParser=y
var w=function(){function e(){f(this,e),this.header=null,this.names=[],this.topDict=null,this.strings=new S,this.globalSubrIndex=null,this.encoding=null,this.charset=null,this.charStrings=null,this.fdArray=[],this.fdSelect=null,this.isCIDFont=!1}return p(e,[{key:"duplicateFirstGlyph",value:function(){if(this.charStrings.count>=65535)(0,n.warn)("Not enough space in charstrings to duplicate first glyph.")
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
for(var a=0;a<r;a++)if(isNaN(t[a]))return(0,n.warn)('Invalid CFFDict value: "'+t+'" for key "'+e+'".'),!0
var i=this.types[e]
return"num"!==i&&"sid"!==i&&"offset"!==i||(t=t[0]),this.values[e]=t,!0}},{key:"setByName",value:function(e,t){if(!(e in this.nameToKeyMap))throw new n.FormatError('Invalid dictionary name "'.concat(e,'"'))
this.values[this.nameToKeyMap[e]]=t}},{key:"hasName",value:function(e){return this.nameToKeyMap[e]in this.values}},{key:"getByName",value:function(e){if(!(e in this.nameToKeyMap))throw new n.FormatError("Invalid dictionary name ".concat(e,'"'))
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
var P={ISO_ADOBE:0,EXPERT:1,EXPERT_SUBSET:2},E=function e(t,r,a,n){f(this,e),this.predefined=t,this.format=r,this.charset=a,this.raw=n}
t.CFFCharset=E
var _=function e(t,r,a,n){f(this,e),this.predefined=t,this.format=r,this.encoding=a,this.raw=n},F=function(){function e(t,r){f(this,e),this.format=t,this.fdSelect=r}return p(e,[{key:"getFDIndex",value:function(e){return e<0||e>=this.fdSelect.length?-1:this.fdSelect[e]}}]),e}()
t.CFFFDSelect=F
var R=function(){function e(){f(this,e),this.offsets=Object.create(null)}return p(e,[{key:"isTracking",value:function(e){return e in this.offsets}},{key:"track",value:function(e,t){if(e in this.offsets)throw new n.FormatError("Already tracking location of ".concat(e))
this.offsets[e]=t}},{key:"offset",value:function(e){for(var t in this.offsets)this.offsets[t]+=e}},{key:"setEntryLocation",value:function(e,t,r){if(!(e in this.offsets))throw new n.FormatError("Not tracking location of ".concat(e))
for(var a=r.data,i=this.offsets[e],o=0,s=t.length;o<s;++o){var c=5*o+i,l=c+1,u=c+2,h=c+3,f=c+4
if(29!==a[c]||0!==a[l]||0!==a[u]||0!==a[h]||0!==a[f])throw new n.FormatError("writing to an offset that is not empty")
var d=t[o]
a[c]=29,a[l]=d>>24&255,a[u]=d>>16&255,a[h]=d>>8&255,a[f]=255&d}}}]),e}(),B=function(){function e(t){f(this,e),this.cff=t}return p(e,[{key:"compile",value:function(){var e=this.cff,t={data:[],length:0,add:function(e){this.data=this.data.concat(e),this.length=this.data.length}},r=this.compileHeader(e.header)
t.add(r)
var a=this.compileNameIndex(e.names)
if(t.add(a),e.isCIDFont&&e.topDict.hasName("FontMatrix")){var i=e.topDict.getByName("FontMatrix")
e.topDict.removeByName("FontMatrix")
for(var o=0,s=e.fdArray.length;o<s;o++){var c=e.fdArray[o],l=i.slice(0)
c.hasName("FontMatrix")&&(l=n.Util.transform(l,c.getByName("FontMatrix"))),c.setByName("FontMatrix",l)}}var u=e.topDict.getByName("XUID")
u&&u.length>16&&e.topDict.removeByName("XUID"),e.topDict.setByName("charset",0)
var h=this.compileTopDicts([e.topDict],t.length,e.isCIDFont)
t.add(h.output)
var f=h.trackers[0],d=this.compileStringIndex(e.strings.strings)
t.add(d)
var p=this.compileIndex(e.globalSubrIndex)
if(t.add(p),e.encoding&&e.topDict.hasName("Encoding"))if(e.encoding.predefined)f.setEntryLocation("Encoding",[e.encoding.format],t)
else{var g=this.compileEncoding(e.encoding)
f.setEntryLocation("Encoding",[t.length],t),t.add(g)}var m=this.compileCharset(e.charset,e.charStrings.count,e.strings,e.isCIDFont)
f.setEntryLocation("charset",[t.length],t),t.add(m)
var v=this.compileCharStrings(e.charStrings)
if(f.setEntryLocation("CharStrings",[t.length],t),t.add(v),e.isCIDFont){f.setEntryLocation("FDSelect",[t.length],t)
var b=this.compileFDSelect(e.fdSelect)
t.add(b),h=this.compileTopDicts(e.fdArray,t.length,!0),f.setEntryLocation("FDArray",[t.length],t),t.add(h.output)
var y=h.trackers
this.compilePrivateDicts(e.fdArray,y,t)}return this.compilePrivateDicts([e.topDict],[f],t),t.add([0]),t.data}},{key:"encodeNumber",value:function(e){return Number.isInteger(e)?this.encodeInteger(e):this.encodeFloat(e)}},{key:"encodeFloat",value:function(t){var r=t.toString(),a=e.EncodeFloatRegExp.exec(r)
if(a){var n=parseFloat("1e"+((a[2]?+a[2]:0)+a[1].length))
r=(Math.round(t*n)/n).toString()}var i,o,s=""
for(i=0,o=r.length;i<o;++i){var c=r[i]
s+="e"===c?"-"===r[++i]?"c":"b":"."===c?"a":"-"===c?"e":c}var l=[30]
for(i=0,o=(s+=1&s.length?"f":"ff").length;i<o;i+=2)l.push(parseInt(s.substring(i,i+2),16))
return l}},{key:"encodeInteger",value:function(e){return e>=-107&&e<=107?[e+139]:e>=108&&e<=1131?[247+((e-=108)>>8),255&e]:e>=-1131&&e<=-108?[251+((e=-e-108)>>8),255&e]:e>=-32768&&e<=32767?[28,e>>8&255,255&e]:[29,e>>24&255,e>>16&255,e>>8&255,255&e]}},{key:"compileHeader",value:function(e){return[e.major,e.minor,e.hdrSize,e.offSize]}},{key:"compileNameIndex",value:function(e){for(var t=new x,r=0,a=e.length;r<a;++r){for(var i=e[r],o=Math.min(i.length,127),s=new Array(o),c=0;c<o;c++){var l=i[c];(l<"!"||l>"~"||"["===l||"]"===l||"("===l||")"===l||"{"===l||"}"===l||"<"===l||">"===l||"/"===l||"%"===l)&&(l="_"),s[c]=l}""===(s=s.join(""))&&(s="Bad_Font_Name"),t.add((0,n.stringToBytes)(s))}return this.compileIndex(t)}},{key:"compileTopDicts",value:function(e,t,r){for(var a=[],n=new x,i=0,o=e.length;i<o;++i){var s=e[i]
r&&(s.removeByName("CIDFontVersion"),s.removeByName("CIDFontRevision"),s.removeByName("CIDFontType"),s.removeByName("CIDCount"),s.removeByName("UIDBase"))
var c=new R,l=this.compileDict(s,c)
a.push(c),n.add(l),c.offset(t)}return{trackers:a,output:n=this.compileIndex(n,a)}}},{key:"compilePrivateDicts",value:function(e,t,r){for(var a=0,i=e.length;a<i;++a){var o=e[a],s=o.privateDict
if(!s||!o.hasName("Private"))throw new n.FormatError("There must be a private dictionary.")
var c=new R,l=this.compileDict(s,c),u=r.length
if(c.offset(u),l.length||(u=0),t[a].setEntryLocation("Private",[l.length,u],r),r.add(l),s.subrsIndex&&s.hasName("Subrs")){var h=this.compileIndex(s.subrsIndex)
c.setEntryLocation("Subrs",[l.length],r),r.add(h)}}}},{key:"compileDict",value:function(e,t){for(var r=[],a=e.order,i=0;i<a.length;++i){var o=a[i]
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
default:throw new n.FormatError("Unknown data type of ".concat(h))}}r=r.concat(e.opcodes[o])}}}return r}},{key:"compileStringIndex",value:function(e){for(var t=new x,r=0,a=e.length;r<a;++r)t.add((0,n.stringToBytes)(e[r]))
return this.compileIndex(t)}},{key:"compileGlobalSubrIndex",value:function(){var e=this.cff.globalSubrIndex
this.out.writeByteArray(this.compileIndex(e))}},{key:"compileCharStrings",value:function(e){for(var t=new x,r=0;r<e.count;r++){var a=e.get(r)
0!==a.length?t.add(a):t.add(new Uint8Array([139,14]))}return this.compileIndex(t)}},{key:"compileCharset",value:function(e,t,r,a){var i,o=t-1
if(a)i=new Uint8Array([2,0,0,o>>8&255,255&o])
else{(i=new Uint8Array(1+2*o))[0]=0
for(var s=0,c=e.charset.length,l=!1,u=1;u<i.length;u+=2){var h=0
if(s<c){var f=e.charset[s++];-1===(h=r.getSID(f))&&(h=0,l||(l=!0,(0,n.warn)("Couldn't find ".concat(f," in CFF strings"))))}i[u]=h>>8&255,i[u+1]=255&h}}return this.compileTypedArray(i)}},{key:"compileEncoding",value:function(e){return this.compileTypedArray(e.raw)}},{key:"compileFDSelect",value:function(e){var t,r,a=e.format
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
for(var l=0,u=r[n].length;l<u;l++)o.push(r[n][l])}return o}}],[{key:"EncodeFloatRegExp",get:function(){return(0,n.shadow)(this,"EncodeFloatRegExp",/\.(\d*?)(?:9{5,20}|0{5,20})\d{0,2}(?:e(.+)|$)/)}}]),e}()
t.CFFCompiler=B},(e,t)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.ISOAdobeCharset=t.ExpertSubsetCharset=t.ExpertCharset=void 0
t.ISOAdobeCharset=[".notdef","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","endash","dagger","daggerdbl","periodcentered","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","questiondown","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","ring","cedilla","hungarumlaut","ogonek","caron","emdash","AE","ordfeminine","Lslash","Oslash","OE","ordmasculine","ae","dotlessi","lslash","oslash","oe","germandbls","onesuperior","logicalnot","mu","trademark","Eth","onehalf","plusminus","Thorn","onequarter","divide","brokenbar","degree","thorn","threequarters","twosuperior","registered","minus","eth","multiply","threesuperior","copyright","Aacute","Acircumflex","Adieresis","Agrave","Aring","Atilde","Ccedilla","Eacute","Ecircumflex","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Ntilde","Oacute","Ocircumflex","Odieresis","Ograve","Otilde","Scaron","Uacute","Ucircumflex","Udieresis","Ugrave","Yacute","Ydieresis","Zcaron","aacute","acircumflex","adieresis","agrave","aring","atilde","ccedilla","eacute","ecircumflex","edieresis","egrave","iacute","icircumflex","idieresis","igrave","ntilde","oacute","ocircumflex","odieresis","ograve","otilde","scaron","uacute","ucircumflex","udieresis","ugrave","yacute","ydieresis","zcaron"]
t.ExpertCharset=[".notdef","space","exclamsmall","Hungarumlautsmall","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","twodotenleader","onedotenleader","comma","hyphen","period","fraction","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","colon","semicolon","commasuperior","threequartersemdash","periodsuperior","questionsmall","asuperior","bsuperior","centsuperior","dsuperior","esuperior","isuperior","lsuperior","msuperior","nsuperior","osuperior","rsuperior","ssuperior","tsuperior","ff","fi","fl","ffi","ffl","parenleftinferior","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","exclamdownsmall","centoldstyle","Lslashsmall","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","Dotaccentsmall","Macronsmall","figuredash","hypheninferior","Ogoneksmall","Ringsmall","Cedillasmall","onequarter","onehalf","threequarters","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","zerosuperior","onesuperior","twosuperior","threesuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall"]
t.ExpertSubsetCharset=[".notdef","space","dollaroldstyle","dollarsuperior","parenleftsuperior","parenrightsuperior","twodotenleader","onedotenleader","comma","hyphen","period","fraction","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","colon","semicolon","commasuperior","threequartersemdash","periodsuperior","asuperior","bsuperior","centsuperior","dsuperior","esuperior","isuperior","lsuperior","msuperior","nsuperior","osuperior","rsuperior","ssuperior","tsuperior","ff","fi","fl","ffi","ffl","parenleftinferior","parenrightinferior","hyphensuperior","colonmonetary","onefitted","rupiah","centoldstyle","figuredash","hypheninferior","onequarter","onehalf","threequarters","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","zerosuperior","onesuperior","twosuperior","threesuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior"]},(e,t)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.getEncoding=function(e){switch(e){case"WinAnsiEncoding":return o
case"StandardEncoding":return i
case"MacRomanEncoding":return n
case"SymbolSetEncoding":return s
case"ZapfDingbatsEncoding":return c
case"ExpertEncoding":return r
case"MacExpertEncoding":return a
default:return null}},t.ZapfDingbatsEncoding=t.WinAnsiEncoding=t.SymbolSetEncoding=t.StandardEncoding=t.MacRomanEncoding=t.ExpertEncoding=void 0
var r=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclamsmall","Hungarumlautsmall","","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","twodotenleader","onedotenleader","comma","hyphen","period","fraction","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","colon","semicolon","commasuperior","threequartersemdash","periodsuperior","questionsmall","","asuperior","bsuperior","centsuperior","dsuperior","esuperior","","","","isuperior","","","lsuperior","msuperior","nsuperior","osuperior","","","rsuperior","ssuperior","tsuperior","","ff","fi","fl","ffi","ffl","parenleftinferior","","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","exclamdownsmall","centoldstyle","Lslashsmall","","","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","","Dotaccentsmall","","","Macronsmall","","","figuredash","hypheninferior","","","Ogoneksmall","Ringsmall","Cedillasmall","","","","onequarter","onehalf","threequarters","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","","","zerosuperior","onesuperior","twosuperior","threesuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall"]
t.ExpertEncoding=r
var a=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclamsmall","Hungarumlautsmall","centoldstyle","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","twodotenleader","onedotenleader","comma","hyphen","period","fraction","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","colon","semicolon","","threequartersemdash","","questionsmall","","","","","Ethsmall","","","onequarter","onehalf","threequarters","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","","","","","","","ff","fi","fl","ffi","ffl","parenleftinferior","","parenrightinferior","Circumflexsmall","hypheninferior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","","","asuperior","centsuperior","","","","","Aacutesmall","Agravesmall","Acircumflexsmall","Adieresissmall","Atildesmall","Aringsmall","Ccedillasmall","Eacutesmall","Egravesmall","Ecircumflexsmall","Edieresissmall","Iacutesmall","Igravesmall","Icircumflexsmall","Idieresissmall","Ntildesmall","Oacutesmall","Ogravesmall","Ocircumflexsmall","Odieresissmall","Otildesmall","Uacutesmall","Ugravesmall","Ucircumflexsmall","Udieresissmall","","eightsuperior","fourinferior","threeinferior","sixinferior","eightinferior","seveninferior","Scaronsmall","","centinferior","twoinferior","","Dieresissmall","","Caronsmall","osuperior","fiveinferior","","commainferior","periodinferior","Yacutesmall","","dollarinferior","","","Thornsmall","","nineinferior","zeroinferior","Zcaronsmall","AEsmall","Oslashsmall","questiondownsmall","oneinferior","Lslashsmall","","","","","","","Cedillasmall","","","","","","OEsmall","figuredash","hyphensuperior","","","","","exclamdownsmall","","Ydieresissmall","","onesuperior","twosuperior","threesuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","ninesuperior","zerosuperior","","esuperior","rsuperior","tsuperior","","","isuperior","ssuperior","dsuperior","","","","","","lsuperior","Ogoneksmall","Brevesmall","Macronsmall","bsuperior","nsuperior","msuperior","commasuperior","periodsuperior","Dotaccentsmall","Ringsmall","","","",""],n=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quotesingle","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","grave","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","","Adieresis","Aring","Ccedilla","Eacute","Ntilde","Odieresis","Udieresis","aacute","agrave","acircumflex","adieresis","atilde","aring","ccedilla","eacute","egrave","ecircumflex","edieresis","iacute","igrave","icircumflex","idieresis","ntilde","oacute","ograve","ocircumflex","odieresis","otilde","uacute","ugrave","ucircumflex","udieresis","dagger","degree","cent","sterling","section","bullet","paragraph","germandbls","registered","copyright","trademark","acute","dieresis","notequal","AE","Oslash","infinity","plusminus","lessequal","greaterequal","yen","mu","partialdiff","summation","product","pi","integral","ordfeminine","ordmasculine","Omega","ae","oslash","questiondown","exclamdown","logicalnot","radical","florin","approxequal","Delta","guillemotleft","guillemotright","ellipsis","space","Agrave","Atilde","Otilde","OE","oe","endash","emdash","quotedblleft","quotedblright","quoteleft","quoteright","divide","lozenge","ydieresis","Ydieresis","fraction","currency","guilsinglleft","guilsinglright","fi","fl","daggerdbl","periodcentered","quotesinglbase","quotedblbase","perthousand","Acircumflex","Ecircumflex","Aacute","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Oacute","Ocircumflex","apple","Ograve","Uacute","Ucircumflex","Ugrave","dotlessi","circumflex","tilde","macron","breve","dotaccent","ring","cedilla","hungarumlaut","ogonek","caron"]
t.MacRomanEncoding=n
var i=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","","endash","dagger","daggerdbl","periodcentered","","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","","questiondown","","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","","ring","cedilla","","hungarumlaut","ogonek","caron","emdash","","","","","","","","","","","","","","","","","AE","","ordfeminine","","","","","Lslash","Oslash","OE","ordmasculine","","","","","","ae","","","","dotlessi","","","lslash","oslash","oe","germandbls","","","",""]
t.StandardEncoding=i
var o=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quotesingle","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","grave","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","bullet","Euro","bullet","quotesinglbase","florin","quotedblbase","ellipsis","dagger","daggerdbl","circumflex","perthousand","Scaron","guilsinglleft","OE","bullet","Zcaron","bullet","bullet","quoteleft","quoteright","quotedblleft","quotedblright","bullet","endash","emdash","tilde","trademark","scaron","guilsinglright","oe","bullet","zcaron","Ydieresis","space","exclamdown","cent","sterling","currency","yen","brokenbar","section","dieresis","copyright","ordfeminine","guillemotleft","logicalnot","hyphen","registered","macron","degree","plusminus","twosuperior","threesuperior","acute","mu","paragraph","periodcentered","cedilla","onesuperior","ordmasculine","guillemotright","onequarter","onehalf","threequarters","questiondown","Agrave","Aacute","Acircumflex","Atilde","Adieresis","Aring","AE","Ccedilla","Egrave","Eacute","Ecircumflex","Edieresis","Igrave","Iacute","Icircumflex","Idieresis","Eth","Ntilde","Ograve","Oacute","Ocircumflex","Otilde","Odieresis","multiply","Oslash","Ugrave","Uacute","Ucircumflex","Udieresis","Yacute","Thorn","germandbls","agrave","aacute","acircumflex","atilde","adieresis","aring","ae","ccedilla","egrave","eacute","ecircumflex","edieresis","igrave","iacute","icircumflex","idieresis","eth","ntilde","ograve","oacute","ocircumflex","otilde","odieresis","divide","oslash","ugrave","uacute","ucircumflex","udieresis","yacute","thorn","ydieresis"]
t.WinAnsiEncoding=o
var s=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclam","universal","numbersign","existential","percent","ampersand","suchthat","parenleft","parenright","asteriskmath","plus","comma","minus","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","congruent","Alpha","Beta","Chi","Delta","Epsilon","Phi","Gamma","Eta","Iota","theta1","Kappa","Lambda","Mu","Nu","Omicron","Pi","Theta","Rho","Sigma","Tau","Upsilon","sigma1","Omega","Xi","Psi","Zeta","bracketleft","therefore","bracketright","perpendicular","underscore","radicalex","alpha","beta","chi","delta","epsilon","phi","gamma","eta","iota","phi1","kappa","lambda","mu","nu","omicron","pi","theta","rho","sigma","tau","upsilon","omega1","omega","xi","psi","zeta","braceleft","bar","braceright","similar","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Euro","Upsilon1","minute","lessequal","fraction","infinity","florin","club","diamond","heart","spade","arrowboth","arrowleft","arrowup","arrowright","arrowdown","degree","plusminus","second","greaterequal","multiply","proportional","partialdiff","bullet","divide","notequal","equivalence","approxequal","ellipsis","arrowvertex","arrowhorizex","carriagereturn","aleph","Ifraktur","Rfraktur","weierstrass","circlemultiply","circleplus","emptyset","intersection","union","propersuperset","reflexsuperset","notsubset","propersubset","reflexsubset","element","notelement","angle","gradient","registerserif","copyrightserif","trademarkserif","product","radical","dotmath","logicalnot","logicaland","logicalor","arrowdblboth","arrowdblleft","arrowdblup","arrowdblright","arrowdbldown","lozenge","angleleft","registersans","copyrightsans","trademarksans","summation","parenlefttp","parenleftex","parenleftbt","bracketlefttp","bracketleftex","bracketleftbt","bracelefttp","braceleftmid","braceleftbt","braceex","","angleright","integral","integraltp","integralex","integralbt","parenrighttp","parenrightex","parenrightbt","bracketrighttp","bracketrightex","bracketrightbt","bracerighttp","bracerightmid","bracerightbt",""]
t.SymbolSetEncoding=s
var c=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","a1","a2","a202","a3","a4","a5","a119","a118","a117","a11","a12","a13","a14","a15","a16","a105","a17","a18","a19","a20","a21","a22","a23","a24","a25","a26","a27","a28","a6","a7","a8","a9","a10","a29","a30","a31","a32","a33","a34","a35","a36","a37","a38","a39","a40","a41","a42","a43","a44","a45","a46","a47","a48","a49","a50","a51","a52","a53","a54","a55","a56","a57","a58","a59","a60","a61","a62","a63","a64","a65","a66","a67","a68","a69","a70","a71","a72","a73","a74","a203","a75","a204","a76","a77","a78","a79","a81","a82","a83","a84","a97","a98","a99","a100","","a89","a90","a93","a94","a91","a92","a205","a85","a206","a86","a87","a88","a95","a96","","","","","","","","","","","","","","","","","","","","a101","a102","a103","a104","a106","a107","a108","a112","a111","a110","a109","a120","a121","a122","a123","a124","a125","a126","a127","a128","a129","a130","a131","a132","a133","a134","a135","a136","a137","a138","a139","a140","a141","a142","a143","a144","a145","a146","a147","a148","a149","a150","a151","a152","a153","a154","a155","a156","a157","a158","a159","a160","a161","a163","a164","a196","a165","a192","a166","a167","a168","a169","a170","a171","a172","a173","a162","a174","a175","a176","a177","a178","a179","a193","a180","a199","a181","a200","a182","","a201","a183","a184","a197","a185","a194","a198","a186","a195","a187","a188","a189","a190","a191",""]
t.ZapfDingbatsEncoding=c},(e,t,r)=>{"use strict"
r.r(t),r.d(t,{getDingbatsGlyphsUnicode:()=>i,getGlyphsUnicode:()=>n})
var a=r(138),n=(0,a.getArrayLookupTableFactory)((function(){return["A",65,"AE",198,"AEacute",508,"AEmacron",482,"AEsmall",63462,"Aacute",193,"Aacutesmall",63457,"Abreve",258,"Abreveacute",7854,"Abrevecyrillic",1232,"Abrevedotbelow",7862,"Abrevegrave",7856,"Abrevehookabove",7858,"Abrevetilde",7860,"Acaron",461,"Acircle",9398,"Acircumflex",194,"Acircumflexacute",7844,"Acircumflexdotbelow",7852,"Acircumflexgrave",7846,"Acircumflexhookabove",7848,"Acircumflexsmall",63458,"Acircumflextilde",7850,"Acute",63177,"Acutesmall",63412,"Acyrillic",1040,"Adblgrave",512,"Adieresis",196,"Adieresiscyrillic",1234,"Adieresismacron",478,"Adieresissmall",63460,"Adotbelow",7840,"Adotmacron",480,"Agrave",192,"Agravesmall",63456,"Ahookabove",7842,"Aiecyrillic",1236,"Ainvertedbreve",514,"Alpha",913,"Alphatonos",902,"Amacron",256,"Amonospace",65313,"Aogonek",260,"Aring",197,"Aringacute",506,"Aringbelow",7680,"Aringsmall",63461,"Asmall",63329,"Atilde",195,"Atildesmall",63459,"Aybarmenian",1329,"B",66,"Bcircle",9399,"Bdotaccent",7682,"Bdotbelow",7684,"Becyrillic",1041,"Benarmenian",1330,"Beta",914,"Bhook",385,"Blinebelow",7686,"Bmonospace",65314,"Brevesmall",63220,"Bsmall",63330,"Btopbar",386,"C",67,"Caarmenian",1342,"Cacute",262,"Caron",63178,"Caronsmall",63221,"Ccaron",268,"Ccedilla",199,"Ccedillaacute",7688,"Ccedillasmall",63463,"Ccircle",9400,"Ccircumflex",264,"Cdot",266,"Cdotaccent",266,"Cedillasmall",63416,"Chaarmenian",1353,"Cheabkhasiancyrillic",1212,"Checyrillic",1063,"Chedescenderabkhasiancyrillic",1214,"Chedescendercyrillic",1206,"Chedieresiscyrillic",1268,"Cheharmenian",1347,"Chekhakassiancyrillic",1227,"Cheverticalstrokecyrillic",1208,"Chi",935,"Chook",391,"Circumflexsmall",63222,"Cmonospace",65315,"Coarmenian",1361,"Csmall",63331,"D",68,"DZ",497,"DZcaron",452,"Daarmenian",1332,"Dafrican",393,"Dcaron",270,"Dcedilla",7696,"Dcircle",9401,"Dcircumflexbelow",7698,"Dcroat",272,"Ddotaccent",7690,"Ddotbelow",7692,"Decyrillic",1044,"Deicoptic",1006,"Delta",8710,"Deltagreek",916,"Dhook",394,"Dieresis",63179,"DieresisAcute",63180,"DieresisGrave",63181,"Dieresissmall",63400,"Digammagreek",988,"Djecyrillic",1026,"Dlinebelow",7694,"Dmonospace",65316,"Dotaccentsmall",63223,"Dslash",272,"Dsmall",63332,"Dtopbar",395,"Dz",498,"Dzcaron",453,"Dzeabkhasiancyrillic",1248,"Dzecyrillic",1029,"Dzhecyrillic",1039,"E",69,"Eacute",201,"Eacutesmall",63465,"Ebreve",276,"Ecaron",282,"Ecedillabreve",7708,"Echarmenian",1333,"Ecircle",9402,"Ecircumflex",202,"Ecircumflexacute",7870,"Ecircumflexbelow",7704,"Ecircumflexdotbelow",7878,"Ecircumflexgrave",7872,"Ecircumflexhookabove",7874,"Ecircumflexsmall",63466,"Ecircumflextilde",7876,"Ecyrillic",1028,"Edblgrave",516,"Edieresis",203,"Edieresissmall",63467,"Edot",278,"Edotaccent",278,"Edotbelow",7864,"Efcyrillic",1060,"Egrave",200,"Egravesmall",63464,"Eharmenian",1335,"Ehookabove",7866,"Eightroman",8551,"Einvertedbreve",518,"Eiotifiedcyrillic",1124,"Elcyrillic",1051,"Elevenroman",8554,"Emacron",274,"Emacronacute",7702,"Emacrongrave",7700,"Emcyrillic",1052,"Emonospace",65317,"Encyrillic",1053,"Endescendercyrillic",1186,"Eng",330,"Enghecyrillic",1188,"Enhookcyrillic",1223,"Eogonek",280,"Eopen",400,"Epsilon",917,"Epsilontonos",904,"Ercyrillic",1056,"Ereversed",398,"Ereversedcyrillic",1069,"Escyrillic",1057,"Esdescendercyrillic",1194,"Esh",425,"Esmall",63333,"Eta",919,"Etarmenian",1336,"Etatonos",905,"Eth",208,"Ethsmall",63472,"Etilde",7868,"Etildebelow",7706,"Euro",8364,"Ezh",439,"Ezhcaron",494,"Ezhreversed",440,"F",70,"Fcircle",9403,"Fdotaccent",7710,"Feharmenian",1366,"Feicoptic",996,"Fhook",401,"Fitacyrillic",1138,"Fiveroman",8548,"Fmonospace",65318,"Fourroman",8547,"Fsmall",63334,"G",71,"GBsquare",13191,"Gacute",500,"Gamma",915,"Gammaafrican",404,"Gangiacoptic",1002,"Gbreve",286,"Gcaron",486,"Gcedilla",290,"Gcircle",9404,"Gcircumflex",284,"Gcommaaccent",290,"Gdot",288,"Gdotaccent",288,"Gecyrillic",1043,"Ghadarmenian",1346,"Ghemiddlehookcyrillic",1172,"Ghestrokecyrillic",1170,"Gheupturncyrillic",1168,"Ghook",403,"Gimarmenian",1331,"Gjecyrillic",1027,"Gmacron",7712,"Gmonospace",65319,"Grave",63182,"Gravesmall",63328,"Gsmall",63335,"Gsmallhook",667,"Gstroke",484,"H",72,"H18533",9679,"H18543",9642,"H18551",9643,"H22073",9633,"HPsquare",13259,"Haabkhasiancyrillic",1192,"Hadescendercyrillic",1202,"Hardsigncyrillic",1066,"Hbar",294,"Hbrevebelow",7722,"Hcedilla",7720,"Hcircle",9405,"Hcircumflex",292,"Hdieresis",7718,"Hdotaccent",7714,"Hdotbelow",7716,"Hmonospace",65320,"Hoarmenian",1344,"Horicoptic",1e3,"Hsmall",63336,"Hungarumlaut",63183,"Hungarumlautsmall",63224,"Hzsquare",13200,"I",73,"IAcyrillic",1071,"IJ",306,"IUcyrillic",1070,"Iacute",205,"Iacutesmall",63469,"Ibreve",300,"Icaron",463,"Icircle",9406,"Icircumflex",206,"Icircumflexsmall",63470,"Icyrillic",1030,"Idblgrave",520,"Idieresis",207,"Idieresisacute",7726,"Idieresiscyrillic",1252,"Idieresissmall",63471,"Idot",304,"Idotaccent",304,"Idotbelow",7882,"Iebrevecyrillic",1238,"Iecyrillic",1045,"Ifraktur",8465,"Igrave",204,"Igravesmall",63468,"Ihookabove",7880,"Iicyrillic",1048,"Iinvertedbreve",522,"Iishortcyrillic",1049,"Imacron",298,"Imacroncyrillic",1250,"Imonospace",65321,"Iniarmenian",1339,"Iocyrillic",1025,"Iogonek",302,"Iota",921,"Iotaafrican",406,"Iotadieresis",938,"Iotatonos",906,"Ismall",63337,"Istroke",407,"Itilde",296,"Itildebelow",7724,"Izhitsacyrillic",1140,"Izhitsadblgravecyrillic",1142,"J",74,"Jaarmenian",1345,"Jcircle",9407,"Jcircumflex",308,"Jecyrillic",1032,"Jheharmenian",1355,"Jmonospace",65322,"Jsmall",63338,"K",75,"KBsquare",13189,"KKsquare",13261,"Kabashkircyrillic",1184,"Kacute",7728,"Kacyrillic",1050,"Kadescendercyrillic",1178,"Kahookcyrillic",1219,"Kappa",922,"Kastrokecyrillic",1182,"Kaverticalstrokecyrillic",1180,"Kcaron",488,"Kcedilla",310,"Kcircle",9408,"Kcommaaccent",310,"Kdotbelow",7730,"Keharmenian",1364,"Kenarmenian",1343,"Khacyrillic",1061,"Kheicoptic",998,"Khook",408,"Kjecyrillic",1036,"Klinebelow",7732,"Kmonospace",65323,"Koppacyrillic",1152,"Koppagreek",990,"Ksicyrillic",1134,"Ksmall",63339,"L",76,"LJ",455,"LL",63167,"Lacute",313,"Lambda",923,"Lcaron",317,"Lcedilla",315,"Lcircle",9409,"Lcircumflexbelow",7740,"Lcommaaccent",315,"Ldot",319,"Ldotaccent",319,"Ldotbelow",7734,"Ldotbelowmacron",7736,"Liwnarmenian",1340,"Lj",456,"Ljecyrillic",1033,"Llinebelow",7738,"Lmonospace",65324,"Lslash",321,"Lslashsmall",63225,"Lsmall",63340,"M",77,"MBsquare",13190,"Macron",63184,"Macronsmall",63407,"Macute",7742,"Mcircle",9410,"Mdotaccent",7744,"Mdotbelow",7746,"Menarmenian",1348,"Mmonospace",65325,"Msmall",63341,"Mturned",412,"Mu",924,"N",78,"NJ",458,"Nacute",323,"Ncaron",327,"Ncedilla",325,"Ncircle",9411,"Ncircumflexbelow",7754,"Ncommaaccent",325,"Ndotaccent",7748,"Ndotbelow",7750,"Nhookleft",413,"Nineroman",8552,"Nj",459,"Njecyrillic",1034,"Nlinebelow",7752,"Nmonospace",65326,"Nowarmenian",1350,"Nsmall",63342,"Ntilde",209,"Ntildesmall",63473,"Nu",925,"O",79,"OE",338,"OEsmall",63226,"Oacute",211,"Oacutesmall",63475,"Obarredcyrillic",1256,"Obarreddieresiscyrillic",1258,"Obreve",334,"Ocaron",465,"Ocenteredtilde",415,"Ocircle",9412,"Ocircumflex",212,"Ocircumflexacute",7888,"Ocircumflexdotbelow",7896,"Ocircumflexgrave",7890,"Ocircumflexhookabove",7892,"Ocircumflexsmall",63476,"Ocircumflextilde",7894,"Ocyrillic",1054,"Odblacute",336,"Odblgrave",524,"Odieresis",214,"Odieresiscyrillic",1254,"Odieresissmall",63478,"Odotbelow",7884,"Ogoneksmall",63227,"Ograve",210,"Ogravesmall",63474,"Oharmenian",1365,"Ohm",8486,"Ohookabove",7886,"Ohorn",416,"Ohornacute",7898,"Ohorndotbelow",7906,"Ohorngrave",7900,"Ohornhookabove",7902,"Ohorntilde",7904,"Ohungarumlaut",336,"Oi",418,"Oinvertedbreve",526,"Omacron",332,"Omacronacute",7762,"Omacrongrave",7760,"Omega",8486,"Omegacyrillic",1120,"Omegagreek",937,"Omegaroundcyrillic",1146,"Omegatitlocyrillic",1148,"Omegatonos",911,"Omicron",927,"Omicrontonos",908,"Omonospace",65327,"Oneroman",8544,"Oogonek",490,"Oogonekmacron",492,"Oopen",390,"Oslash",216,"Oslashacute",510,"Oslashsmall",63480,"Osmall",63343,"Ostrokeacute",510,"Otcyrillic",1150,"Otilde",213,"Otildeacute",7756,"Otildedieresis",7758,"Otildesmall",63477,"P",80,"Pacute",7764,"Pcircle",9413,"Pdotaccent",7766,"Pecyrillic",1055,"Peharmenian",1354,"Pemiddlehookcyrillic",1190,"Phi",934,"Phook",420,"Pi",928,"Piwrarmenian",1363,"Pmonospace",65328,"Psi",936,"Psicyrillic",1136,"Psmall",63344,"Q",81,"Qcircle",9414,"Qmonospace",65329,"Qsmall",63345,"R",82,"Raarmenian",1356,"Racute",340,"Rcaron",344,"Rcedilla",342,"Rcircle",9415,"Rcommaaccent",342,"Rdblgrave",528,"Rdotaccent",7768,"Rdotbelow",7770,"Rdotbelowmacron",7772,"Reharmenian",1360,"Rfraktur",8476,"Rho",929,"Ringsmall",63228,"Rinvertedbreve",530,"Rlinebelow",7774,"Rmonospace",65330,"Rsmall",63346,"Rsmallinverted",641,"Rsmallinvertedsuperior",694,"S",83,"SF010000",9484,"SF020000",9492,"SF030000",9488,"SF040000",9496,"SF050000",9532,"SF060000",9516,"SF070000",9524,"SF080000",9500,"SF090000",9508,"SF100000",9472,"SF110000",9474,"SF190000",9569,"SF200000",9570,"SF210000",9558,"SF220000",9557,"SF230000",9571,"SF240000",9553,"SF250000",9559,"SF260000",9565,"SF270000",9564,"SF280000",9563,"SF360000",9566,"SF370000",9567,"SF380000",9562,"SF390000",9556,"SF400000",9577,"SF410000",9574,"SF420000",9568,"SF430000",9552,"SF440000",9580,"SF450000",9575,"SF460000",9576,"SF470000",9572,"SF480000",9573,"SF490000",9561,"SF500000",9560,"SF510000",9554,"SF520000",9555,"SF530000",9579,"SF540000",9578,"Sacute",346,"Sacutedotaccent",7780,"Sampigreek",992,"Scaron",352,"Scarondotaccent",7782,"Scaronsmall",63229,"Scedilla",350,"Schwa",399,"Schwacyrillic",1240,"Schwadieresiscyrillic",1242,"Scircle",9416,"Scircumflex",348,"Scommaaccent",536,"Sdotaccent",7776,"Sdotbelow",7778,"Sdotbelowdotaccent",7784,"Seharmenian",1357,"Sevenroman",8550,"Shaarmenian",1351,"Shacyrillic",1064,"Shchacyrillic",1065,"Sheicoptic",994,"Shhacyrillic",1210,"Shimacoptic",1004,"Sigma",931,"Sixroman",8549,"Smonospace",65331,"Softsigncyrillic",1068,"Ssmall",63347,"Stigmagreek",986,"T",84,"Tau",932,"Tbar",358,"Tcaron",356,"Tcedilla",354,"Tcircle",9417,"Tcircumflexbelow",7792,"Tcommaaccent",354,"Tdotaccent",7786,"Tdotbelow",7788,"Tecyrillic",1058,"Tedescendercyrillic",1196,"Tenroman",8553,"Tetsecyrillic",1204,"Theta",920,"Thook",428,"Thorn",222,"Thornsmall",63486,"Threeroman",8546,"Tildesmall",63230,"Tiwnarmenian",1359,"Tlinebelow",7790,"Tmonospace",65332,"Toarmenian",1337,"Tonefive",444,"Tonesix",388,"Tonetwo",423,"Tretroflexhook",430,"Tsecyrillic",1062,"Tshecyrillic",1035,"Tsmall",63348,"Twelveroman",8555,"Tworoman",8545,"U",85,"Uacute",218,"Uacutesmall",63482,"Ubreve",364,"Ucaron",467,"Ucircle",9418,"Ucircumflex",219,"Ucircumflexbelow",7798,"Ucircumflexsmall",63483,"Ucyrillic",1059,"Udblacute",368,"Udblgrave",532,"Udieresis",220,"Udieresisacute",471,"Udieresisbelow",7794,"Udieresiscaron",473,"Udieresiscyrillic",1264,"Udieresisgrave",475,"Udieresismacron",469,"Udieresissmall",63484,"Udotbelow",7908,"Ugrave",217,"Ugravesmall",63481,"Uhookabove",7910,"Uhorn",431,"Uhornacute",7912,"Uhorndotbelow",7920,"Uhorngrave",7914,"Uhornhookabove",7916,"Uhorntilde",7918,"Uhungarumlaut",368,"Uhungarumlautcyrillic",1266,"Uinvertedbreve",534,"Ukcyrillic",1144,"Umacron",362,"Umacroncyrillic",1262,"Umacrondieresis",7802,"Umonospace",65333,"Uogonek",370,"Upsilon",933,"Upsilon1",978,"Upsilonacutehooksymbolgreek",979,"Upsilonafrican",433,"Upsilondieresis",939,"Upsilondieresishooksymbolgreek",980,"Upsilonhooksymbol",978,"Upsilontonos",910,"Uring",366,"Ushortcyrillic",1038,"Usmall",63349,"Ustraightcyrillic",1198,"Ustraightstrokecyrillic",1200,"Utilde",360,"Utildeacute",7800,"Utildebelow",7796,"V",86,"Vcircle",9419,"Vdotbelow",7806,"Vecyrillic",1042,"Vewarmenian",1358,"Vhook",434,"Vmonospace",65334,"Voarmenian",1352,"Vsmall",63350,"Vtilde",7804,"W",87,"Wacute",7810,"Wcircle",9420,"Wcircumflex",372,"Wdieresis",7812,"Wdotaccent",7814,"Wdotbelow",7816,"Wgrave",7808,"Wmonospace",65335,"Wsmall",63351,"X",88,"Xcircle",9421,"Xdieresis",7820,"Xdotaccent",7818,"Xeharmenian",1341,"Xi",926,"Xmonospace",65336,"Xsmall",63352,"Y",89,"Yacute",221,"Yacutesmall",63485,"Yatcyrillic",1122,"Ycircle",9422,"Ycircumflex",374,"Ydieresis",376,"Ydieresissmall",63487,"Ydotaccent",7822,"Ydotbelow",7924,"Yericyrillic",1067,"Yerudieresiscyrillic",1272,"Ygrave",7922,"Yhook",435,"Yhookabove",7926,"Yiarmenian",1349,"Yicyrillic",1031,"Yiwnarmenian",1362,"Ymonospace",65337,"Ysmall",63353,"Ytilde",7928,"Yusbigcyrillic",1130,"Yusbigiotifiedcyrillic",1132,"Yuslittlecyrillic",1126,"Yuslittleiotifiedcyrillic",1128,"Z",90,"Zaarmenian",1334,"Zacute",377,"Zcaron",381,"Zcaronsmall",63231,"Zcircle",9423,"Zcircumflex",7824,"Zdot",379,"Zdotaccent",379,"Zdotbelow",7826,"Zecyrillic",1047,"Zedescendercyrillic",1176,"Zedieresiscyrillic",1246,"Zeta",918,"Zhearmenian",1338,"Zhebrevecyrillic",1217,"Zhecyrillic",1046,"Zhedescendercyrillic",1174,"Zhedieresiscyrillic",1244,"Zlinebelow",7828,"Zmonospace",65338,"Zsmall",63354,"Zstroke",437,"a",97,"aabengali",2438,"aacute",225,"aadeva",2310,"aagujarati",2694,"aagurmukhi",2566,"aamatragurmukhi",2622,"aarusquare",13059,"aavowelsignbengali",2494,"aavowelsigndeva",2366,"aavowelsigngujarati",2750,"abbreviationmarkarmenian",1375,"abbreviationsigndeva",2416,"abengali",2437,"abopomofo",12570,"abreve",259,"abreveacute",7855,"abrevecyrillic",1233,"abrevedotbelow",7863,"abrevegrave",7857,"abrevehookabove",7859,"abrevetilde",7861,"acaron",462,"acircle",9424,"acircumflex",226,"acircumflexacute",7845,"acircumflexdotbelow",7853,"acircumflexgrave",7847,"acircumflexhookabove",7849,"acircumflextilde",7851,"acute",180,"acutebelowcmb",791,"acutecmb",769,"acutecomb",769,"acutedeva",2388,"acutelowmod",719,"acutetonecmb",833,"acyrillic",1072,"adblgrave",513,"addakgurmukhi",2673,"adeva",2309,"adieresis",228,"adieresiscyrillic",1235,"adieresismacron",479,"adotbelow",7841,"adotmacron",481,"ae",230,"aeacute",509,"aekorean",12624,"aemacron",483,"afii00208",8213,"afii08941",8356,"afii10017",1040,"afii10018",1041,"afii10019",1042,"afii10020",1043,"afii10021",1044,"afii10022",1045,"afii10023",1025,"afii10024",1046,"afii10025",1047,"afii10026",1048,"afii10027",1049,"afii10028",1050,"afii10029",1051,"afii10030",1052,"afii10031",1053,"afii10032",1054,"afii10033",1055,"afii10034",1056,"afii10035",1057,"afii10036",1058,"afii10037",1059,"afii10038",1060,"afii10039",1061,"afii10040",1062,"afii10041",1063,"afii10042",1064,"afii10043",1065,"afii10044",1066,"afii10045",1067,"afii10046",1068,"afii10047",1069,"afii10048",1070,"afii10049",1071,"afii10050",1168,"afii10051",1026,"afii10052",1027,"afii10053",1028,"afii10054",1029,"afii10055",1030,"afii10056",1031,"afii10057",1032,"afii10058",1033,"afii10059",1034,"afii10060",1035,"afii10061",1036,"afii10062",1038,"afii10063",63172,"afii10064",63173,"afii10065",1072,"afii10066",1073,"afii10067",1074,"afii10068",1075,"afii10069",1076,"afii10070",1077,"afii10071",1105,"afii10072",1078,"afii10073",1079,"afii10074",1080,"afii10075",1081,"afii10076",1082,"afii10077",1083,"afii10078",1084,"afii10079",1085,"afii10080",1086,"afii10081",1087,"afii10082",1088,"afii10083",1089,"afii10084",1090,"afii10085",1091,"afii10086",1092,"afii10087",1093,"afii10088",1094,"afii10089",1095,"afii10090",1096,"afii10091",1097,"afii10092",1098,"afii10093",1099,"afii10094",1100,"afii10095",1101,"afii10096",1102,"afii10097",1103,"afii10098",1169,"afii10099",1106,"afii10100",1107,"afii10101",1108,"afii10102",1109,"afii10103",1110,"afii10104",1111,"afii10105",1112,"afii10106",1113,"afii10107",1114,"afii10108",1115,"afii10109",1116,"afii10110",1118,"afii10145",1039,"afii10146",1122,"afii10147",1138,"afii10148",1140,"afii10192",63174,"afii10193",1119,"afii10194",1123,"afii10195",1139,"afii10196",1141,"afii10831",63175,"afii10832",63176,"afii10846",1241,"afii299",8206,"afii300",8207,"afii301",8205,"afii57381",1642,"afii57388",1548,"afii57392",1632,"afii57393",1633,"afii57394",1634,"afii57395",1635,"afii57396",1636,"afii57397",1637,"afii57398",1638,"afii57399",1639,"afii57400",1640,"afii57401",1641,"afii57403",1563,"afii57407",1567,"afii57409",1569,"afii57410",1570,"afii57411",1571,"afii57412",1572,"afii57413",1573,"afii57414",1574,"afii57415",1575,"afii57416",1576,"afii57417",1577,"afii57418",1578,"afii57419",1579,"afii57420",1580,"afii57421",1581,"afii57422",1582,"afii57423",1583,"afii57424",1584,"afii57425",1585,"afii57426",1586,"afii57427",1587,"afii57428",1588,"afii57429",1589,"afii57430",1590,"afii57431",1591,"afii57432",1592,"afii57433",1593,"afii57434",1594,"afii57440",1600,"afii57441",1601,"afii57442",1602,"afii57443",1603,"afii57444",1604,"afii57445",1605,"afii57446",1606,"afii57448",1608,"afii57449",1609,"afii57450",1610,"afii57451",1611,"afii57452",1612,"afii57453",1613,"afii57454",1614,"afii57455",1615,"afii57456",1616,"afii57457",1617,"afii57458",1618,"afii57470",1607,"afii57505",1700,"afii57506",1662,"afii57507",1670,"afii57508",1688,"afii57509",1711,"afii57511",1657,"afii57512",1672,"afii57513",1681,"afii57514",1722,"afii57519",1746,"afii57534",1749,"afii57636",8362,"afii57645",1470,"afii57658",1475,"afii57664",1488,"afii57665",1489,"afii57666",1490,"afii57667",1491,"afii57668",1492,"afii57669",1493,"afii57670",1494,"afii57671",1495,"afii57672",1496,"afii57673",1497,"afii57674",1498,"afii57675",1499,"afii57676",1500,"afii57677",1501,"afii57678",1502,"afii57679",1503,"afii57680",1504,"afii57681",1505,"afii57682",1506,"afii57683",1507,"afii57684",1508,"afii57685",1509,"afii57686",1510,"afii57687",1511,"afii57688",1512,"afii57689",1513,"afii57690",1514,"afii57694",64298,"afii57695",64299,"afii57700",64331,"afii57705",64287,"afii57716",1520,"afii57717",1521,"afii57718",1522,"afii57723",64309,"afii57793",1460,"afii57794",1461,"afii57795",1462,"afii57796",1467,"afii57797",1464,"afii57798",1463,"afii57799",1456,"afii57800",1458,"afii57801",1457,"afii57802",1459,"afii57803",1474,"afii57804",1473,"afii57806",1465,"afii57807",1468,"afii57839",1469,"afii57841",1471,"afii57842",1472,"afii57929",700,"afii61248",8453,"afii61289",8467,"afii61352",8470,"afii61573",8236,"afii61574",8237,"afii61575",8238,"afii61664",8204,"afii63167",1645,"afii64937",701,"agrave",224,"agujarati",2693,"agurmukhi",2565,"ahiragana",12354,"ahookabove",7843,"aibengali",2448,"aibopomofo",12574,"aideva",2320,"aiecyrillic",1237,"aigujarati",2704,"aigurmukhi",2576,"aimatragurmukhi",2632,"ainarabic",1593,"ainfinalarabic",65226,"aininitialarabic",65227,"ainmedialarabic",65228,"ainvertedbreve",515,"aivowelsignbengali",2504,"aivowelsigndeva",2376,"aivowelsigngujarati",2760,"akatakana",12450,"akatakanahalfwidth",65393,"akorean",12623,"alef",1488,"alefarabic",1575,"alefdageshhebrew",64304,"aleffinalarabic",65166,"alefhamzaabovearabic",1571,"alefhamzaabovefinalarabic",65156,"alefhamzabelowarabic",1573,"alefhamzabelowfinalarabic",65160,"alefhebrew",1488,"aleflamedhebrew",64335,"alefmaddaabovearabic",1570,"alefmaddaabovefinalarabic",65154,"alefmaksuraarabic",1609,"alefmaksurafinalarabic",65264,"alefmaksurainitialarabic",65267,"alefmaksuramedialarabic",65268,"alefpatahhebrew",64302,"alefqamatshebrew",64303,"aleph",8501,"allequal",8780,"alpha",945,"alphatonos",940,"amacron",257,"amonospace",65345,"ampersand",38,"ampersandmonospace",65286,"ampersandsmall",63270,"amsquare",13250,"anbopomofo",12578,"angbopomofo",12580,"angbracketleft",12296,"angbracketright",12297,"angkhankhuthai",3674,"angle",8736,"anglebracketleft",12296,"anglebracketleftvertical",65087,"anglebracketright",12297,"anglebracketrightvertical",65088,"angleleft",9001,"angleright",9002,"angstrom",8491,"anoteleia",903,"anudattadeva",2386,"anusvarabengali",2434,"anusvaradeva",2306,"anusvaragujarati",2690,"aogonek",261,"apaatosquare",13056,"aparen",9372,"apostrophearmenian",1370,"apostrophemod",700,"apple",63743,"approaches",8784,"approxequal",8776,"approxequalorimage",8786,"approximatelyequal",8773,"araeaekorean",12686,"araeakorean",12685,"arc",8978,"arighthalfring",7834,"aring",229,"aringacute",507,"aringbelow",7681,"arrowboth",8596,"arrowdashdown",8675,"arrowdashleft",8672,"arrowdashright",8674,"arrowdashup",8673,"arrowdblboth",8660,"arrowdbldown",8659,"arrowdblleft",8656,"arrowdblright",8658,"arrowdblup",8657,"arrowdown",8595,"arrowdownleft",8601,"arrowdownright",8600,"arrowdownwhite",8681,"arrowheaddownmod",709,"arrowheadleftmod",706,"arrowheadrightmod",707,"arrowheadupmod",708,"arrowhorizex",63719,"arrowleft",8592,"arrowleftdbl",8656,"arrowleftdblstroke",8653,"arrowleftoverright",8646,"arrowleftwhite",8678,"arrowright",8594,"arrowrightdblstroke",8655,"arrowrightheavy",10142,"arrowrightoverleft",8644,"arrowrightwhite",8680,"arrowtableft",8676,"arrowtabright",8677,"arrowup",8593,"arrowupdn",8597,"arrowupdnbse",8616,"arrowupdownbase",8616,"arrowupleft",8598,"arrowupleftofdown",8645,"arrowupright",8599,"arrowupwhite",8679,"arrowvertex",63718,"asciicircum",94,"asciicircummonospace",65342,"asciitilde",126,"asciitildemonospace",65374,"ascript",593,"ascriptturned",594,"asmallhiragana",12353,"asmallkatakana",12449,"asmallkatakanahalfwidth",65383,"asterisk",42,"asteriskaltonearabic",1645,"asteriskarabic",1645,"asteriskmath",8727,"asteriskmonospace",65290,"asterisksmall",65121,"asterism",8258,"asuperior",63209,"asymptoticallyequal",8771,"at",64,"atilde",227,"atmonospace",65312,"atsmall",65131,"aturned",592,"aubengali",2452,"aubopomofo",12576,"audeva",2324,"augujarati",2708,"augurmukhi",2580,"aulengthmarkbengali",2519,"aumatragurmukhi",2636,"auvowelsignbengali",2508,"auvowelsigndeva",2380,"auvowelsigngujarati",2764,"avagrahadeva",2365,"aybarmenian",1377,"ayin",1506,"ayinaltonehebrew",64288,"ayinhebrew",1506,"b",98,"babengali",2476,"backslash",92,"backslashmonospace",65340,"badeva",2348,"bagujarati",2732,"bagurmukhi",2604,"bahiragana",12400,"bahtthai",3647,"bakatakana",12496,"bar",124,"barmonospace",65372,"bbopomofo",12549,"bcircle",9425,"bdotaccent",7683,"bdotbelow",7685,"beamedsixteenthnotes",9836,"because",8757,"becyrillic",1073,"beharabic",1576,"behfinalarabic",65168,"behinitialarabic",65169,"behiragana",12409,"behmedialarabic",65170,"behmeeminitialarabic",64671,"behmeemisolatedarabic",64520,"behnoonfinalarabic",64621,"bekatakana",12505,"benarmenian",1378,"bet",1489,"beta",946,"betasymbolgreek",976,"betdagesh",64305,"betdageshhebrew",64305,"bethebrew",1489,"betrafehebrew",64332,"bhabengali",2477,"bhadeva",2349,"bhagujarati",2733,"bhagurmukhi",2605,"bhook",595,"bihiragana",12403,"bikatakana",12499,"bilabialclick",664,"bindigurmukhi",2562,"birusquare",13105,"blackcircle",9679,"blackdiamond",9670,"blackdownpointingtriangle",9660,"blackleftpointingpointer",9668,"blackleftpointingtriangle",9664,"blacklenticularbracketleft",12304,"blacklenticularbracketleftvertical",65083,"blacklenticularbracketright",12305,"blacklenticularbracketrightvertical",65084,"blacklowerlefttriangle",9699,"blacklowerrighttriangle",9698,"blackrectangle",9644,"blackrightpointingpointer",9658,"blackrightpointingtriangle",9654,"blacksmallsquare",9642,"blacksmilingface",9787,"blacksquare",9632,"blackstar",9733,"blackupperlefttriangle",9700,"blackupperrighttriangle",9701,"blackuppointingsmalltriangle",9652,"blackuppointingtriangle",9650,"blank",9251,"blinebelow",7687,"block",9608,"bmonospace",65346,"bobaimaithai",3610,"bohiragana",12412,"bokatakana",12508,"bparen",9373,"bqsquare",13251,"braceex",63732,"braceleft",123,"braceleftbt",63731,"braceleftmid",63730,"braceleftmonospace",65371,"braceleftsmall",65115,"bracelefttp",63729,"braceleftvertical",65079,"braceright",125,"bracerightbt",63742,"bracerightmid",63741,"bracerightmonospace",65373,"bracerightsmall",65116,"bracerighttp",63740,"bracerightvertical",65080,"bracketleft",91,"bracketleftbt",63728,"bracketleftex",63727,"bracketleftmonospace",65339,"bracketlefttp",63726,"bracketright",93,"bracketrightbt",63739,"bracketrightex",63738,"bracketrightmonospace",65341,"bracketrighttp",63737,"breve",728,"brevebelowcmb",814,"brevecmb",774,"breveinvertedbelowcmb",815,"breveinvertedcmb",785,"breveinverteddoublecmb",865,"bridgebelowcmb",810,"bridgeinvertedbelowcmb",826,"brokenbar",166,"bstroke",384,"bsuperior",63210,"btopbar",387,"buhiragana",12406,"bukatakana",12502,"bullet",8226,"bulletinverse",9688,"bulletoperator",8729,"bullseye",9678,"c",99,"caarmenian",1390,"cabengali",2458,"cacute",263,"cadeva",2330,"cagujarati",2714,"cagurmukhi",2586,"calsquare",13192,"candrabindubengali",2433,"candrabinducmb",784,"candrabindudeva",2305,"candrabindugujarati",2689,"capslock",8682,"careof",8453,"caron",711,"caronbelowcmb",812,"caroncmb",780,"carriagereturn",8629,"cbopomofo",12568,"ccaron",269,"ccedilla",231,"ccedillaacute",7689,"ccircle",9426,"ccircumflex",265,"ccurl",597,"cdot",267,"cdotaccent",267,"cdsquare",13253,"cedilla",184,"cedillacmb",807,"cent",162,"centigrade",8451,"centinferior",63199,"centmonospace",65504,"centoldstyle",63394,"centsuperior",63200,"chaarmenian",1401,"chabengali",2459,"chadeva",2331,"chagujarati",2715,"chagurmukhi",2587,"chbopomofo",12564,"cheabkhasiancyrillic",1213,"checkmark",10003,"checyrillic",1095,"chedescenderabkhasiancyrillic",1215,"chedescendercyrillic",1207,"chedieresiscyrillic",1269,"cheharmenian",1395,"chekhakassiancyrillic",1228,"cheverticalstrokecyrillic",1209,"chi",967,"chieuchacirclekorean",12919,"chieuchaparenkorean",12823,"chieuchcirclekorean",12905,"chieuchkorean",12618,"chieuchparenkorean",12809,"chochangthai",3594,"chochanthai",3592,"chochingthai",3593,"chochoethai",3596,"chook",392,"cieucacirclekorean",12918,"cieucaparenkorean",12822,"cieuccirclekorean",12904,"cieuckorean",12616,"cieucparenkorean",12808,"cieucuparenkorean",12828,"circle",9675,"circlecopyrt",169,"circlemultiply",8855,"circleot",8857,"circleplus",8853,"circlepostalmark",12342,"circlewithlefthalfblack",9680,"circlewithrighthalfblack",9681,"circumflex",710,"circumflexbelowcmb",813,"circumflexcmb",770,"clear",8999,"clickalveolar",450,"clickdental",448,"clicklateral",449,"clickretroflex",451,"club",9827,"clubsuitblack",9827,"clubsuitwhite",9831,"cmcubedsquare",13220,"cmonospace",65347,"cmsquaredsquare",13216,"coarmenian",1409,"colon",58,"colonmonetary",8353,"colonmonospace",65306,"colonsign",8353,"colonsmall",65109,"colontriangularhalfmod",721,"colontriangularmod",720,"comma",44,"commaabovecmb",787,"commaaboverightcmb",789,"commaaccent",63171,"commaarabic",1548,"commaarmenian",1373,"commainferior",63201,"commamonospace",65292,"commareversedabovecmb",788,"commareversedmod",701,"commasmall",65104,"commasuperior",63202,"commaturnedabovecmb",786,"commaturnedmod",699,"compass",9788,"congruent",8773,"contourintegral",8750,"control",8963,"controlACK",6,"controlBEL",7,"controlBS",8,"controlCAN",24,"controlCR",13,"controlDC1",17,"controlDC2",18,"controlDC3",19,"controlDC4",20,"controlDEL",127,"controlDLE",16,"controlEM",25,"controlENQ",5,"controlEOT",4,"controlESC",27,"controlETB",23,"controlETX",3,"controlFF",12,"controlFS",28,"controlGS",29,"controlHT",9,"controlLF",10,"controlNAK",21,"controlNULL",0,"controlRS",30,"controlSI",15,"controlSO",14,"controlSOT",2,"controlSTX",1,"controlSUB",26,"controlSYN",22,"controlUS",31,"controlVT",11,"copyright",169,"copyrightsans",63721,"copyrightserif",63193,"cornerbracketleft",12300,"cornerbracketlefthalfwidth",65378,"cornerbracketleftvertical",65089,"cornerbracketright",12301,"cornerbracketrighthalfwidth",65379,"cornerbracketrightvertical",65090,"corporationsquare",13183,"cosquare",13255,"coverkgsquare",13254,"cparen",9374,"cruzeiro",8354,"cstretched",663,"curlyand",8911,"curlyor",8910,"currency",164,"cyrBreve",63185,"cyrFlex",63186,"cyrbreve",63188,"cyrflex",63189,"d",100,"daarmenian",1380,"dabengali",2470,"dadarabic",1590,"dadeva",2342,"dadfinalarabic",65214,"dadinitialarabic",65215,"dadmedialarabic",65216,"dagesh",1468,"dageshhebrew",1468,"dagger",8224,"daggerdbl",8225,"dagujarati",2726,"dagurmukhi",2598,"dahiragana",12384,"dakatakana",12480,"dalarabic",1583,"dalet",1491,"daletdagesh",64307,"daletdageshhebrew",64307,"dalethebrew",1491,"dalfinalarabic",65194,"dammaarabic",1615,"dammalowarabic",1615,"dammatanaltonearabic",1612,"dammatanarabic",1612,"danda",2404,"dargahebrew",1447,"dargalefthebrew",1447,"dasiapneumatacyrilliccmb",1157,"dblGrave",63187,"dblanglebracketleft",12298,"dblanglebracketleftvertical",65085,"dblanglebracketright",12299,"dblanglebracketrightvertical",65086,"dblarchinvertedbelowcmb",811,"dblarrowleft",8660,"dblarrowright",8658,"dbldanda",2405,"dblgrave",63190,"dblgravecmb",783,"dblintegral",8748,"dbllowline",8215,"dbllowlinecmb",819,"dbloverlinecmb",831,"dblprimemod",698,"dblverticalbar",8214,"dblverticallineabovecmb",782,"dbopomofo",12553,"dbsquare",13256,"dcaron",271,"dcedilla",7697,"dcircle",9427,"dcircumflexbelow",7699,"dcroat",273,"ddabengali",2465,"ddadeva",2337,"ddagujarati",2721,"ddagurmukhi",2593,"ddalarabic",1672,"ddalfinalarabic",64393,"dddhadeva",2396,"ddhabengali",2466,"ddhadeva",2338,"ddhagujarati",2722,"ddhagurmukhi",2594,"ddotaccent",7691,"ddotbelow",7693,"decimalseparatorarabic",1643,"decimalseparatorpersian",1643,"decyrillic",1076,"degree",176,"dehihebrew",1453,"dehiragana",12391,"deicoptic",1007,"dekatakana",12487,"deleteleft",9003,"deleteright",8998,"delta",948,"deltaturned",397,"denominatorminusonenumeratorbengali",2552,"dezh",676,"dhabengali",2471,"dhadeva",2343,"dhagujarati",2727,"dhagurmukhi",2599,"dhook",599,"dialytikatonos",901,"dialytikatonoscmb",836,"diamond",9830,"diamondsuitwhite",9826,"dieresis",168,"dieresisacute",63191,"dieresisbelowcmb",804,"dieresiscmb",776,"dieresisgrave",63192,"dieresistonos",901,"dihiragana",12386,"dikatakana",12482,"dittomark",12291,"divide",247,"divides",8739,"divisionslash",8725,"djecyrillic",1106,"dkshade",9619,"dlinebelow",7695,"dlsquare",13207,"dmacron",273,"dmonospace",65348,"dnblock",9604,"dochadathai",3598,"dodekthai",3604,"dohiragana",12393,"dokatakana",12489,"dollar",36,"dollarinferior",63203,"dollarmonospace",65284,"dollaroldstyle",63268,"dollarsmall",65129,"dollarsuperior",63204,"dong",8363,"dorusquare",13094,"dotaccent",729,"dotaccentcmb",775,"dotbelowcmb",803,"dotbelowcomb",803,"dotkatakana",12539,"dotlessi",305,"dotlessj",63166,"dotlessjstrokehook",644,"dotmath",8901,"dottedcircle",9676,"doubleyodpatah",64287,"doubleyodpatahhebrew",64287,"downtackbelowcmb",798,"downtackmod",725,"dparen",9375,"dsuperior",63211,"dtail",598,"dtopbar",396,"duhiragana",12389,"dukatakana",12485,"dz",499,"dzaltone",675,"dzcaron",454,"dzcurl",677,"dzeabkhasiancyrillic",1249,"dzecyrillic",1109,"dzhecyrillic",1119,"e",101,"eacute",233,"earth",9793,"ebengali",2447,"ebopomofo",12572,"ebreve",277,"ecandradeva",2317,"ecandragujarati",2701,"ecandravowelsigndeva",2373,"ecandravowelsigngujarati",2757,"ecaron",283,"ecedillabreve",7709,"echarmenian",1381,"echyiwnarmenian",1415,"ecircle",9428,"ecircumflex",234,"ecircumflexacute",7871,"ecircumflexbelow",7705,"ecircumflexdotbelow",7879,"ecircumflexgrave",7873,"ecircumflexhookabove",7875,"ecircumflextilde",7877,"ecyrillic",1108,"edblgrave",517,"edeva",2319,"edieresis",235,"edot",279,"edotaccent",279,"edotbelow",7865,"eegurmukhi",2575,"eematragurmukhi",2631,"efcyrillic",1092,"egrave",232,"egujarati",2703,"eharmenian",1383,"ehbopomofo",12573,"ehiragana",12360,"ehookabove",7867,"eibopomofo",12575,"eight",56,"eightarabic",1640,"eightbengali",2542,"eightcircle",9319,"eightcircleinversesansserif",10129,"eightdeva",2414,"eighteencircle",9329,"eighteenparen",9349,"eighteenperiod",9369,"eightgujarati",2798,"eightgurmukhi",2670,"eighthackarabic",1640,"eighthangzhou",12328,"eighthnotebeamed",9835,"eightideographicparen",12839,"eightinferior",8328,"eightmonospace",65304,"eightoldstyle",63288,"eightparen",9339,"eightperiod",9359,"eightpersian",1784,"eightroman",8567,"eightsuperior",8312,"eightthai",3672,"einvertedbreve",519,"eiotifiedcyrillic",1125,"ekatakana",12456,"ekatakanahalfwidth",65396,"ekonkargurmukhi",2676,"ekorean",12628,"elcyrillic",1083,"element",8712,"elevencircle",9322,"elevenparen",9342,"elevenperiod",9362,"elevenroman",8570,"ellipsis",8230,"ellipsisvertical",8942,"emacron",275,"emacronacute",7703,"emacrongrave",7701,"emcyrillic",1084,"emdash",8212,"emdashvertical",65073,"emonospace",65349,"emphasismarkarmenian",1371,"emptyset",8709,"enbopomofo",12579,"encyrillic",1085,"endash",8211,"endashvertical",65074,"endescendercyrillic",1187,"eng",331,"engbopomofo",12581,"enghecyrillic",1189,"enhookcyrillic",1224,"enspace",8194,"eogonek",281,"eokorean",12627,"eopen",603,"eopenclosed",666,"eopenreversed",604,"eopenreversedclosed",606,"eopenreversedhook",605,"eparen",9376,"epsilon",949,"epsilontonos",941,"equal",61,"equalmonospace",65309,"equalsmall",65126,"equalsuperior",8316,"equivalence",8801,"erbopomofo",12582,"ercyrillic",1088,"ereversed",600,"ereversedcyrillic",1101,"escyrillic",1089,"esdescendercyrillic",1195,"esh",643,"eshcurl",646,"eshortdeva",2318,"eshortvowelsigndeva",2374,"eshreversedloop",426,"eshsquatreversed",645,"esmallhiragana",12359,"esmallkatakana",12455,"esmallkatakanahalfwidth",65386,"estimated",8494,"esuperior",63212,"eta",951,"etarmenian",1384,"etatonos",942,"eth",240,"etilde",7869,"etildebelow",7707,"etnahtafoukhhebrew",1425,"etnahtafoukhlefthebrew",1425,"etnahtahebrew",1425,"etnahtalefthebrew",1425,"eturned",477,"eukorean",12641,"euro",8364,"evowelsignbengali",2503,"evowelsigndeva",2375,"evowelsigngujarati",2759,"exclam",33,"exclamarmenian",1372,"exclamdbl",8252,"exclamdown",161,"exclamdownsmall",63393,"exclammonospace",65281,"exclamsmall",63265,"existential",8707,"ezh",658,"ezhcaron",495,"ezhcurl",659,"ezhreversed",441,"ezhtail",442,"f",102,"fadeva",2398,"fagurmukhi",2654,"fahrenheit",8457,"fathaarabic",1614,"fathalowarabic",1614,"fathatanarabic",1611,"fbopomofo",12552,"fcircle",9429,"fdotaccent",7711,"feharabic",1601,"feharmenian",1414,"fehfinalarabic",65234,"fehinitialarabic",65235,"fehmedialarabic",65236,"feicoptic",997,"female",9792,"ff",64256,"f_f",64256,"ffi",64259,"ffl",64260,"fi",64257,"fifteencircle",9326,"fifteenparen",9346,"fifteenperiod",9366,"figuredash",8210,"filledbox",9632,"filledrect",9644,"finalkaf",1498,"finalkafdagesh",64314,"finalkafdageshhebrew",64314,"finalkafhebrew",1498,"finalmem",1501,"finalmemhebrew",1501,"finalnun",1503,"finalnunhebrew",1503,"finalpe",1507,"finalpehebrew",1507,"finaltsadi",1509,"finaltsadihebrew",1509,"firsttonechinese",713,"fisheye",9673,"fitacyrillic",1139,"five",53,"fivearabic",1637,"fivebengali",2539,"fivecircle",9316,"fivecircleinversesansserif",10126,"fivedeva",2411,"fiveeighths",8541,"fivegujarati",2795,"fivegurmukhi",2667,"fivehackarabic",1637,"fivehangzhou",12325,"fiveideographicparen",12836,"fiveinferior",8325,"fivemonospace",65301,"fiveoldstyle",63285,"fiveparen",9336,"fiveperiod",9356,"fivepersian",1781,"fiveroman",8564,"fivesuperior",8309,"fivethai",3669,"fl",64258,"florin",402,"fmonospace",65350,"fmsquare",13209,"fofanthai",3615,"fofathai",3613,"fongmanthai",3663,"forall",8704,"four",52,"fourarabic",1636,"fourbengali",2538,"fourcircle",9315,"fourcircleinversesansserif",10125,"fourdeva",2410,"fourgujarati",2794,"fourgurmukhi",2666,"fourhackarabic",1636,"fourhangzhou",12324,"fourideographicparen",12835,"fourinferior",8324,"fourmonospace",65300,"fournumeratorbengali",2551,"fouroldstyle",63284,"fourparen",9335,"fourperiod",9355,"fourpersian",1780,"fourroman",8563,"foursuperior",8308,"fourteencircle",9325,"fourteenparen",9345,"fourteenperiod",9365,"fourthai",3668,"fourthtonechinese",715,"fparen",9377,"fraction",8260,"franc",8355,"g",103,"gabengali",2455,"gacute",501,"gadeva",2327,"gafarabic",1711,"gaffinalarabic",64403,"gafinitialarabic",64404,"gafmedialarabic",64405,"gagujarati",2711,"gagurmukhi",2583,"gahiragana",12364,"gakatakana",12460,"gamma",947,"gammalatinsmall",611,"gammasuperior",736,"gangiacoptic",1003,"gbopomofo",12557,"gbreve",287,"gcaron",487,"gcedilla",291,"gcircle",9430,"gcircumflex",285,"gcommaaccent",291,"gdot",289,"gdotaccent",289,"gecyrillic",1075,"gehiragana",12370,"gekatakana",12466,"geometricallyequal",8785,"gereshaccenthebrew",1436,"gereshhebrew",1523,"gereshmuqdamhebrew",1437,"germandbls",223,"gershayimaccenthebrew",1438,"gershayimhebrew",1524,"getamark",12307,"ghabengali",2456,"ghadarmenian",1394,"ghadeva",2328,"ghagujarati",2712,"ghagurmukhi",2584,"ghainarabic",1594,"ghainfinalarabic",65230,"ghaininitialarabic",65231,"ghainmedialarabic",65232,"ghemiddlehookcyrillic",1173,"ghestrokecyrillic",1171,"gheupturncyrillic",1169,"ghhadeva",2394,"ghhagurmukhi",2650,"ghook",608,"ghzsquare",13203,"gihiragana",12366,"gikatakana",12462,"gimarmenian",1379,"gimel",1490,"gimeldagesh",64306,"gimeldageshhebrew",64306,"gimelhebrew",1490,"gjecyrillic",1107,"glottalinvertedstroke",446,"glottalstop",660,"glottalstopinverted",662,"glottalstopmod",704,"glottalstopreversed",661,"glottalstopreversedmod",705,"glottalstopreversedsuperior",740,"glottalstopstroke",673,"glottalstopstrokereversed",674,"gmacron",7713,"gmonospace",65351,"gohiragana",12372,"gokatakana",12468,"gparen",9378,"gpasquare",13228,"gradient",8711,"grave",96,"gravebelowcmb",790,"gravecmb",768,"gravecomb",768,"gravedeva",2387,"gravelowmod",718,"gravemonospace",65344,"gravetonecmb",832,"greater",62,"greaterequal",8805,"greaterequalorless",8923,"greatermonospace",65310,"greaterorequivalent",8819,"greaterorless",8823,"greateroverequal",8807,"greatersmall",65125,"gscript",609,"gstroke",485,"guhiragana",12368,"guillemotleft",171,"guillemotright",187,"guilsinglleft",8249,"guilsinglright",8250,"gukatakana",12464,"guramusquare",13080,"gysquare",13257,"h",104,"haabkhasiancyrillic",1193,"haaltonearabic",1729,"habengali",2489,"hadescendercyrillic",1203,"hadeva",2361,"hagujarati",2745,"hagurmukhi",2617,"haharabic",1581,"hahfinalarabic",65186,"hahinitialarabic",65187,"hahiragana",12399,"hahmedialarabic",65188,"haitusquare",13098,"hakatakana",12495,"hakatakanahalfwidth",65418,"halantgurmukhi",2637,"hamzaarabic",1569,"hamzalowarabic",1569,"hangulfiller",12644,"hardsigncyrillic",1098,"harpoonleftbarbup",8636,"harpoonrightbarbup",8640,"hasquare",13258,"hatafpatah",1458,"hatafpatah16",1458,"hatafpatah23",1458,"hatafpatah2f",1458,"hatafpatahhebrew",1458,"hatafpatahnarrowhebrew",1458,"hatafpatahquarterhebrew",1458,"hatafpatahwidehebrew",1458,"hatafqamats",1459,"hatafqamats1b",1459,"hatafqamats28",1459,"hatafqamats34",1459,"hatafqamatshebrew",1459,"hatafqamatsnarrowhebrew",1459,"hatafqamatsquarterhebrew",1459,"hatafqamatswidehebrew",1459,"hatafsegol",1457,"hatafsegol17",1457,"hatafsegol24",1457,"hatafsegol30",1457,"hatafsegolhebrew",1457,"hatafsegolnarrowhebrew",1457,"hatafsegolquarterhebrew",1457,"hatafsegolwidehebrew",1457,"hbar",295,"hbopomofo",12559,"hbrevebelow",7723,"hcedilla",7721,"hcircle",9431,"hcircumflex",293,"hdieresis",7719,"hdotaccent",7715,"hdotbelow",7717,"he",1492,"heart",9829,"heartsuitblack",9829,"heartsuitwhite",9825,"hedagesh",64308,"hedageshhebrew",64308,"hehaltonearabic",1729,"heharabic",1607,"hehebrew",1492,"hehfinalaltonearabic",64423,"hehfinalalttwoarabic",65258,"hehfinalarabic",65258,"hehhamzaabovefinalarabic",64421,"hehhamzaaboveisolatedarabic",64420,"hehinitialaltonearabic",64424,"hehinitialarabic",65259,"hehiragana",12408,"hehmedialaltonearabic",64425,"hehmedialarabic",65260,"heiseierasquare",13179,"hekatakana",12504,"hekatakanahalfwidth",65421,"hekutaarusquare",13110,"henghook",615,"herutusquare",13113,"het",1495,"hethebrew",1495,"hhook",614,"hhooksuperior",689,"hieuhacirclekorean",12923,"hieuhaparenkorean",12827,"hieuhcirclekorean",12909,"hieuhkorean",12622,"hieuhparenkorean",12813,"hihiragana",12402,"hikatakana",12498,"hikatakanahalfwidth",65419,"hiriq",1460,"hiriq14",1460,"hiriq21",1460,"hiriq2d",1460,"hiriqhebrew",1460,"hiriqnarrowhebrew",1460,"hiriqquarterhebrew",1460,"hiriqwidehebrew",1460,"hlinebelow",7830,"hmonospace",65352,"hoarmenian",1392,"hohipthai",3627,"hohiragana",12411,"hokatakana",12507,"hokatakanahalfwidth",65422,"holam",1465,"holam19",1465,"holam26",1465,"holam32",1465,"holamhebrew",1465,"holamnarrowhebrew",1465,"holamquarterhebrew",1465,"holamwidehebrew",1465,"honokhukthai",3630,"hookabovecomb",777,"hookcmb",777,"hookpalatalizedbelowcmb",801,"hookretroflexbelowcmb",802,"hoonsquare",13122,"horicoptic",1001,"horizontalbar",8213,"horncmb",795,"hotsprings",9832,"house",8962,"hparen",9379,"hsuperior",688,"hturned",613,"huhiragana",12405,"huiitosquare",13107,"hukatakana",12501,"hukatakanahalfwidth",65420,"hungarumlaut",733,"hungarumlautcmb",779,"hv",405,"hyphen",45,"hypheninferior",63205,"hyphenmonospace",65293,"hyphensmall",65123,"hyphensuperior",63206,"hyphentwo",8208,"i",105,"iacute",237,"iacyrillic",1103,"ibengali",2439,"ibopomofo",12583,"ibreve",301,"icaron",464,"icircle",9432,"icircumflex",238,"icyrillic",1110,"idblgrave",521,"ideographearthcircle",12943,"ideographfirecircle",12939,"ideographicallianceparen",12863,"ideographiccallparen",12858,"ideographiccentrecircle",12965,"ideographicclose",12294,"ideographiccomma",12289,"ideographiccommaleft",65380,"ideographiccongratulationparen",12855,"ideographiccorrectcircle",12963,"ideographicearthparen",12847,"ideographicenterpriseparen",12861,"ideographicexcellentcircle",12957,"ideographicfestivalparen",12864,"ideographicfinancialcircle",12950,"ideographicfinancialparen",12854,"ideographicfireparen",12843,"ideographichaveparen",12850,"ideographichighcircle",12964,"ideographiciterationmark",12293,"ideographiclaborcircle",12952,"ideographiclaborparen",12856,"ideographicleftcircle",12967,"ideographiclowcircle",12966,"ideographicmedicinecircle",12969,"ideographicmetalparen",12846,"ideographicmoonparen",12842,"ideographicnameparen",12852,"ideographicperiod",12290,"ideographicprintcircle",12958,"ideographicreachparen",12867,"ideographicrepresentparen",12857,"ideographicresourceparen",12862,"ideographicrightcircle",12968,"ideographicsecretcircle",12953,"ideographicselfparen",12866,"ideographicsocietyparen",12851,"ideographicspace",12288,"ideographicspecialparen",12853,"ideographicstockparen",12849,"ideographicstudyparen",12859,"ideographicsunparen",12848,"ideographicsuperviseparen",12860,"ideographicwaterparen",12844,"ideographicwoodparen",12845,"ideographiczero",12295,"ideographmetalcircle",12942,"ideographmooncircle",12938,"ideographnamecircle",12948,"ideographsuncircle",12944,"ideographwatercircle",12940,"ideographwoodcircle",12941,"ideva",2311,"idieresis",239,"idieresisacute",7727,"idieresiscyrillic",1253,"idotbelow",7883,"iebrevecyrillic",1239,"iecyrillic",1077,"ieungacirclekorean",12917,"ieungaparenkorean",12821,"ieungcirclekorean",12903,"ieungkorean",12615,"ieungparenkorean",12807,"igrave",236,"igujarati",2695,"igurmukhi",2567,"ihiragana",12356,"ihookabove",7881,"iibengali",2440,"iicyrillic",1080,"iideva",2312,"iigujarati",2696,"iigurmukhi",2568,"iimatragurmukhi",2624,"iinvertedbreve",523,"iishortcyrillic",1081,"iivowelsignbengali",2496,"iivowelsigndeva",2368,"iivowelsigngujarati",2752,"ij",307,"ikatakana",12452,"ikatakanahalfwidth",65394,"ikorean",12643,"ilde",732,"iluyhebrew",1452,"imacron",299,"imacroncyrillic",1251,"imageorapproximatelyequal",8787,"imatragurmukhi",2623,"imonospace",65353,"increment",8710,"infinity",8734,"iniarmenian",1387,"integral",8747,"integralbottom",8993,"integralbt",8993,"integralex",63733,"integraltop",8992,"integraltp",8992,"intersection",8745,"intisquare",13061,"invbullet",9688,"invcircle",9689,"invsmileface",9787,"iocyrillic",1105,"iogonek",303,"iota",953,"iotadieresis",970,"iotadieresistonos",912,"iotalatin",617,"iotatonos",943,"iparen",9380,"irigurmukhi",2674,"ismallhiragana",12355,"ismallkatakana",12451,"ismallkatakanahalfwidth",65384,"issharbengali",2554,"istroke",616,"isuperior",63213,"iterationhiragana",12445,"iterationkatakana",12541,"itilde",297,"itildebelow",7725,"iubopomofo",12585,"iucyrillic",1102,"ivowelsignbengali",2495,"ivowelsigndeva",2367,"ivowelsigngujarati",2751,"izhitsacyrillic",1141,"izhitsadblgravecyrillic",1143,"j",106,"jaarmenian",1393,"jabengali",2460,"jadeva",2332,"jagujarati",2716,"jagurmukhi",2588,"jbopomofo",12560,"jcaron",496,"jcircle",9433,"jcircumflex",309,"jcrossedtail",669,"jdotlessstroke",607,"jecyrillic",1112,"jeemarabic",1580,"jeemfinalarabic",65182,"jeeminitialarabic",65183,"jeemmedialarabic",65184,"jeharabic",1688,"jehfinalarabic",64395,"jhabengali",2461,"jhadeva",2333,"jhagujarati",2717,"jhagurmukhi",2589,"jheharmenian",1403,"jis",12292,"jmonospace",65354,"jparen",9381,"jsuperior",690,"k",107,"kabashkircyrillic",1185,"kabengali",2453,"kacute",7729,"kacyrillic",1082,"kadescendercyrillic",1179,"kadeva",2325,"kaf",1499,"kafarabic",1603,"kafdagesh",64315,"kafdageshhebrew",64315,"kaffinalarabic",65242,"kafhebrew",1499,"kafinitialarabic",65243,"kafmedialarabic",65244,"kafrafehebrew",64333,"kagujarati",2709,"kagurmukhi",2581,"kahiragana",12363,"kahookcyrillic",1220,"kakatakana",12459,"kakatakanahalfwidth",65398,"kappa",954,"kappasymbolgreek",1008,"kapyeounmieumkorean",12657,"kapyeounphieuphkorean",12676,"kapyeounpieupkorean",12664,"kapyeounssangpieupkorean",12665,"karoriisquare",13069,"kashidaautoarabic",1600,"kashidaautonosidebearingarabic",1600,"kasmallkatakana",12533,"kasquare",13188,"kasraarabic",1616,"kasratanarabic",1613,"kastrokecyrillic",1183,"katahiraprolongmarkhalfwidth",65392,"kaverticalstrokecyrillic",1181,"kbopomofo",12558,"kcalsquare",13193,"kcaron",489,"kcedilla",311,"kcircle",9434,"kcommaaccent",311,"kdotbelow",7731,"keharmenian",1412,"kehiragana",12369,"kekatakana",12465,"kekatakanahalfwidth",65401,"kenarmenian",1391,"kesmallkatakana",12534,"kgreenlandic",312,"khabengali",2454,"khacyrillic",1093,"khadeva",2326,"khagujarati",2710,"khagurmukhi",2582,"khaharabic",1582,"khahfinalarabic",65190,"khahinitialarabic",65191,"khahmedialarabic",65192,"kheicoptic",999,"khhadeva",2393,"khhagurmukhi",2649,"khieukhacirclekorean",12920,"khieukhaparenkorean",12824,"khieukhcirclekorean",12906,"khieukhkorean",12619,"khieukhparenkorean",12810,"khokhaithai",3586,"khokhonthai",3589,"khokhuatthai",3587,"khokhwaithai",3588,"khomutthai",3675,"khook",409,"khorakhangthai",3590,"khzsquare",13201,"kihiragana",12365,"kikatakana",12461,"kikatakanahalfwidth",65399,"kiroguramusquare",13077,"kiromeetorusquare",13078,"kirosquare",13076,"kiyeokacirclekorean",12910,"kiyeokaparenkorean",12814,"kiyeokcirclekorean",12896,"kiyeokkorean",12593,"kiyeokparenkorean",12800,"kiyeoksioskorean",12595,"kjecyrillic",1116,"klinebelow",7733,"klsquare",13208,"kmcubedsquare",13222,"kmonospace",65355,"kmsquaredsquare",13218,"kohiragana",12371,"kohmsquare",13248,"kokaithai",3585,"kokatakana",12467,"kokatakanahalfwidth",65402,"kooposquare",13086,"koppacyrillic",1153,"koreanstandardsymbol",12927,"koroniscmb",835,"kparen",9382,"kpasquare",13226,"ksicyrillic",1135,"ktsquare",13263,"kturned",670,"kuhiragana",12367,"kukatakana",12463,"kukatakanahalfwidth",65400,"kvsquare",13240,"kwsquare",13246,"l",108,"labengali",2482,"lacute",314,"ladeva",2354,"lagujarati",2738,"lagurmukhi",2610,"lakkhangyaothai",3653,"lamaleffinalarabic",65276,"lamalefhamzaabovefinalarabic",65272,"lamalefhamzaaboveisolatedarabic",65271,"lamalefhamzabelowfinalarabic",65274,"lamalefhamzabelowisolatedarabic",65273,"lamalefisolatedarabic",65275,"lamalefmaddaabovefinalarabic",65270,"lamalefmaddaaboveisolatedarabic",65269,"lamarabic",1604,"lambda",955,"lambdastroke",411,"lamed",1500,"lameddagesh",64316,"lameddageshhebrew",64316,"lamedhebrew",1500,"lamfinalarabic",65246,"lamhahinitialarabic",64714,"laminitialarabic",65247,"lamjeeminitialarabic",64713,"lamkhahinitialarabic",64715,"lamlamhehisolatedarabic",65010,"lammedialarabic",65248,"lammeemhahinitialarabic",64904,"lammeeminitialarabic",64716,"largecircle",9711,"lbar",410,"lbelt",620,"lbopomofo",12556,"lcaron",318,"lcedilla",316,"lcircle",9435,"lcircumflexbelow",7741,"lcommaaccent",316,"ldot",320,"ldotaccent",320,"ldotbelow",7735,"ldotbelowmacron",7737,"leftangleabovecmb",794,"lefttackbelowcmb",792,"less",60,"lessequal",8804,"lessequalorgreater",8922,"lessmonospace",65308,"lessorequivalent",8818,"lessorgreater",8822,"lessoverequal",8806,"lesssmall",65124,"lezh",622,"lfblock",9612,"lhookretroflex",621,"lira",8356,"liwnarmenian",1388,"lj",457,"ljecyrillic",1113,"ll",63168,"lladeva",2355,"llagujarati",2739,"llinebelow",7739,"llladeva",2356,"llvocalicbengali",2529,"llvocalicdeva",2401,"llvocalicvowelsignbengali",2531,"llvocalicvowelsigndeva",2403,"lmiddletilde",619,"lmonospace",65356,"lmsquare",13264,"lochulathai",3628,"logicaland",8743,"logicalnot",172,"logicalnotreversed",8976,"logicalor",8744,"lolingthai",3621,"longs",383,"lowlinecenterline",65102,"lowlinecmb",818,"lowlinedashed",65101,"lozenge",9674,"lparen",9383,"lslash",322,"lsquare",8467,"lsuperior",63214,"ltshade",9617,"luthai",3622,"lvocalicbengali",2444,"lvocalicdeva",2316,"lvocalicvowelsignbengali",2530,"lvocalicvowelsigndeva",2402,"lxsquare",13267,"m",109,"mabengali",2478,"macron",175,"macronbelowcmb",817,"macroncmb",772,"macronlowmod",717,"macronmonospace",65507,"macute",7743,"madeva",2350,"magujarati",2734,"magurmukhi",2606,"mahapakhhebrew",1444,"mahapakhlefthebrew",1444,"mahiragana",12414,"maichattawalowleftthai",63637,"maichattawalowrightthai",63636,"maichattawathai",3659,"maichattawaupperleftthai",63635,"maieklowleftthai",63628,"maieklowrightthai",63627,"maiekthai",3656,"maiekupperleftthai",63626,"maihanakatleftthai",63620,"maihanakatthai",3633,"maitaikhuleftthai",63625,"maitaikhuthai",3655,"maitholowleftthai",63631,"maitholowrightthai",63630,"maithothai",3657,"maithoupperleftthai",63629,"maitrilowleftthai",63634,"maitrilowrightthai",63633,"maitrithai",3658,"maitriupperleftthai",63632,"maiyamokthai",3654,"makatakana",12510,"makatakanahalfwidth",65423,"male",9794,"mansyonsquare",13127,"maqafhebrew",1470,"mars",9794,"masoracirclehebrew",1455,"masquare",13187,"mbopomofo",12551,"mbsquare",13268,"mcircle",9436,"mcubedsquare",13221,"mdotaccent",7745,"mdotbelow",7747,"meemarabic",1605,"meemfinalarabic",65250,"meeminitialarabic",65251,"meemmedialarabic",65252,"meemmeeminitialarabic",64721,"meemmeemisolatedarabic",64584,"meetorusquare",13133,"mehiragana",12417,"meizierasquare",13182,"mekatakana",12513,"mekatakanahalfwidth",65426,"mem",1502,"memdagesh",64318,"memdageshhebrew",64318,"memhebrew",1502,"menarmenian",1396,"merkhahebrew",1445,"merkhakefulahebrew",1446,"merkhakefulalefthebrew",1446,"merkhalefthebrew",1445,"mhook",625,"mhzsquare",13202,"middledotkatakanahalfwidth",65381,"middot",183,"mieumacirclekorean",12914,"mieumaparenkorean",12818,"mieumcirclekorean",12900,"mieumkorean",12609,"mieumpansioskorean",12656,"mieumparenkorean",12804,"mieumpieupkorean",12654,"mieumsioskorean",12655,"mihiragana",12415,"mikatakana",12511,"mikatakanahalfwidth",65424,"minus",8722,"minusbelowcmb",800,"minuscircle",8854,"minusmod",727,"minusplus",8723,"minute",8242,"miribaarusquare",13130,"mirisquare",13129,"mlonglegturned",624,"mlsquare",13206,"mmcubedsquare",13219,"mmonospace",65357,"mmsquaredsquare",13215,"mohiragana",12418,"mohmsquare",13249,"mokatakana",12514,"mokatakanahalfwidth",65427,"molsquare",13270,"momathai",3617,"moverssquare",13223,"moverssquaredsquare",13224,"mparen",9384,"mpasquare",13227,"mssquare",13235,"msuperior",63215,"mturned",623,"mu",181,"mu1",181,"muasquare",13186,"muchgreater",8811,"muchless",8810,"mufsquare",13196,"mugreek",956,"mugsquare",13197,"muhiragana",12416,"mukatakana",12512,"mukatakanahalfwidth",65425,"mulsquare",13205,"multiply",215,"mumsquare",13211,"munahhebrew",1443,"munahlefthebrew",1443,"musicalnote",9834,"musicalnotedbl",9835,"musicflatsign",9837,"musicsharpsign",9839,"mussquare",13234,"muvsquare",13238,"muwsquare",13244,"mvmegasquare",13241,"mvsquare",13239,"mwmegasquare",13247,"mwsquare",13245,"n",110,"nabengali",2472,"nabla",8711,"nacute",324,"nadeva",2344,"nagujarati",2728,"nagurmukhi",2600,"nahiragana",12394,"nakatakana",12490,"nakatakanahalfwidth",65413,"napostrophe",329,"nasquare",13185,"nbopomofo",12555,"nbspace",160,"ncaron",328,"ncedilla",326,"ncircle",9437,"ncircumflexbelow",7755,"ncommaaccent",326,"ndotaccent",7749,"ndotbelow",7751,"nehiragana",12397,"nekatakana",12493,"nekatakanahalfwidth",65416,"newsheqelsign",8362,"nfsquare",13195,"ngabengali",2457,"ngadeva",2329,"ngagujarati",2713,"ngagurmukhi",2585,"ngonguthai",3591,"nhiragana",12435,"nhookleft",626,"nhookretroflex",627,"nieunacirclekorean",12911,"nieunaparenkorean",12815,"nieuncieuckorean",12597,"nieuncirclekorean",12897,"nieunhieuhkorean",12598,"nieunkorean",12596,"nieunpansioskorean",12648,"nieunparenkorean",12801,"nieunsioskorean",12647,"nieuntikeutkorean",12646,"nihiragana",12395,"nikatakana",12491,"nikatakanahalfwidth",65414,"nikhahitleftthai",63641,"nikhahitthai",3661,"nine",57,"ninearabic",1641,"ninebengali",2543,"ninecircle",9320,"ninecircleinversesansserif",10130,"ninedeva",2415,"ninegujarati",2799,"ninegurmukhi",2671,"ninehackarabic",1641,"ninehangzhou",12329,"nineideographicparen",12840,"nineinferior",8329,"ninemonospace",65305,"nineoldstyle",63289,"nineparen",9340,"nineperiod",9360,"ninepersian",1785,"nineroman",8568,"ninesuperior",8313,"nineteencircle",9330,"nineteenparen",9350,"nineteenperiod",9370,"ninethai",3673,"nj",460,"njecyrillic",1114,"nkatakana",12531,"nkatakanahalfwidth",65437,"nlegrightlong",414,"nlinebelow",7753,"nmonospace",65358,"nmsquare",13210,"nnabengali",2467,"nnadeva",2339,"nnagujarati",2723,"nnagurmukhi",2595,"nnnadeva",2345,"nohiragana",12398,"nokatakana",12494,"nokatakanahalfwidth",65417,"nonbreakingspace",160,"nonenthai",3603,"nonuthai",3609,"noonarabic",1606,"noonfinalarabic",65254,"noonghunnaarabic",1722,"noonghunnafinalarabic",64415,"nooninitialarabic",65255,"noonjeeminitialarabic",64722,"noonjeemisolatedarabic",64587,"noonmedialarabic",65256,"noonmeeminitialarabic",64725,"noonmeemisolatedarabic",64590,"noonnoonfinalarabic",64653,"notcontains",8716,"notelement",8713,"notelementof",8713,"notequal",8800,"notgreater",8815,"notgreaternorequal",8817,"notgreaternorless",8825,"notidentical",8802,"notless",8814,"notlessnorequal",8816,"notparallel",8742,"notprecedes",8832,"notsubset",8836,"notsucceeds",8833,"notsuperset",8837,"nowarmenian",1398,"nparen",9385,"nssquare",13233,"nsuperior",8319,"ntilde",241,"nu",957,"nuhiragana",12396,"nukatakana",12492,"nukatakanahalfwidth",65415,"nuktabengali",2492,"nuktadeva",2364,"nuktagujarati",2748,"nuktagurmukhi",2620,"numbersign",35,"numbersignmonospace",65283,"numbersignsmall",65119,"numeralsigngreek",884,"numeralsignlowergreek",885,"numero",8470,"nun",1504,"nundagesh",64320,"nundageshhebrew",64320,"nunhebrew",1504,"nvsquare",13237,"nwsquare",13243,"nyabengali",2462,"nyadeva",2334,"nyagujarati",2718,"nyagurmukhi",2590,"o",111,"oacute",243,"oangthai",3629,"obarred",629,"obarredcyrillic",1257,"obarreddieresiscyrillic",1259,"obengali",2451,"obopomofo",12571,"obreve",335,"ocandradeva",2321,"ocandragujarati",2705,"ocandravowelsigndeva",2377,"ocandravowelsigngujarati",2761,"ocaron",466,"ocircle",9438,"ocircumflex",244,"ocircumflexacute",7889,"ocircumflexdotbelow",7897,"ocircumflexgrave",7891,"ocircumflexhookabove",7893,"ocircumflextilde",7895,"ocyrillic",1086,"odblacute",337,"odblgrave",525,"odeva",2323,"odieresis",246,"odieresiscyrillic",1255,"odotbelow",7885,"oe",339,"oekorean",12634,"ogonek",731,"ogonekcmb",808,"ograve",242,"ogujarati",2707,"oharmenian",1413,"ohiragana",12362,"ohookabove",7887,"ohorn",417,"ohornacute",7899,"ohorndotbelow",7907,"ohorngrave",7901,"ohornhookabove",7903,"ohorntilde",7905,"ohungarumlaut",337,"oi",419,"oinvertedbreve",527,"okatakana",12458,"okatakanahalfwidth",65397,"okorean",12631,"olehebrew",1451,"omacron",333,"omacronacute",7763,"omacrongrave",7761,"omdeva",2384,"omega",969,"omega1",982,"omegacyrillic",1121,"omegalatinclosed",631,"omegaroundcyrillic",1147,"omegatitlocyrillic",1149,"omegatonos",974,"omgujarati",2768,"omicron",959,"omicrontonos",972,"omonospace",65359,"one",49,"onearabic",1633,"onebengali",2535,"onecircle",9312,"onecircleinversesansserif",10122,"onedeva",2407,"onedotenleader",8228,"oneeighth",8539,"onefitted",63196,"onegujarati",2791,"onegurmukhi",2663,"onehackarabic",1633,"onehalf",189,"onehangzhou",12321,"oneideographicparen",12832,"oneinferior",8321,"onemonospace",65297,"onenumeratorbengali",2548,"oneoldstyle",63281,"oneparen",9332,"oneperiod",9352,"onepersian",1777,"onequarter",188,"oneroman",8560,"onesuperior",185,"onethai",3665,"onethird",8531,"oogonek",491,"oogonekmacron",493,"oogurmukhi",2579,"oomatragurmukhi",2635,"oopen",596,"oparen",9386,"openbullet",9702,"option",8997,"ordfeminine",170,"ordmasculine",186,"orthogonal",8735,"oshortdeva",2322,"oshortvowelsigndeva",2378,"oslash",248,"oslashacute",511,"osmallhiragana",12361,"osmallkatakana",12457,"osmallkatakanahalfwidth",65387,"ostrokeacute",511,"osuperior",63216,"otcyrillic",1151,"otilde",245,"otildeacute",7757,"otildedieresis",7759,"oubopomofo",12577,"overline",8254,"overlinecenterline",65098,"overlinecmb",773,"overlinedashed",65097,"overlinedblwavy",65100,"overlinewavy",65099,"overscore",175,"ovowelsignbengali",2507,"ovowelsigndeva",2379,"ovowelsigngujarati",2763,"p",112,"paampssquare",13184,"paasentosquare",13099,"pabengali",2474,"pacute",7765,"padeva",2346,"pagedown",8671,"pageup",8670,"pagujarati",2730,"pagurmukhi",2602,"pahiragana",12401,"paiyannoithai",3631,"pakatakana",12497,"palatalizationcyrilliccmb",1156,"palochkacyrillic",1216,"pansioskorean",12671,"paragraph",182,"parallel",8741,"parenleft",40,"parenleftaltonearabic",64830,"parenleftbt",63725,"parenleftex",63724,"parenleftinferior",8333,"parenleftmonospace",65288,"parenleftsmall",65113,"parenleftsuperior",8317,"parenlefttp",63723,"parenleftvertical",65077,"parenright",41,"parenrightaltonearabic",64831,"parenrightbt",63736,"parenrightex",63735,"parenrightinferior",8334,"parenrightmonospace",65289,"parenrightsmall",65114,"parenrightsuperior",8318,"parenrighttp",63734,"parenrightvertical",65078,"partialdiff",8706,"paseqhebrew",1472,"pashtahebrew",1433,"pasquare",13225,"patah",1463,"patah11",1463,"patah1d",1463,"patah2a",1463,"patahhebrew",1463,"patahnarrowhebrew",1463,"patahquarterhebrew",1463,"patahwidehebrew",1463,"pazerhebrew",1441,"pbopomofo",12550,"pcircle",9439,"pdotaccent",7767,"pe",1508,"pecyrillic",1087,"pedagesh",64324,"pedageshhebrew",64324,"peezisquare",13115,"pefinaldageshhebrew",64323,"peharabic",1662,"peharmenian",1402,"pehebrew",1508,"pehfinalarabic",64343,"pehinitialarabic",64344,"pehiragana",12410,"pehmedialarabic",64345,"pekatakana",12506,"pemiddlehookcyrillic",1191,"perafehebrew",64334,"percent",37,"percentarabic",1642,"percentmonospace",65285,"percentsmall",65130,"period",46,"periodarmenian",1417,"periodcentered",183,"periodhalfwidth",65377,"periodinferior",63207,"periodmonospace",65294,"periodsmall",65106,"periodsuperior",63208,"perispomenigreekcmb",834,"perpendicular",8869,"perthousand",8240,"peseta",8359,"pfsquare",13194,"phabengali",2475,"phadeva",2347,"phagujarati",2731,"phagurmukhi",2603,"phi",966,"phi1",981,"phieuphacirclekorean",12922,"phieuphaparenkorean",12826,"phieuphcirclekorean",12908,"phieuphkorean",12621,"phieuphparenkorean",12812,"philatin",632,"phinthuthai",3642,"phisymbolgreek",981,"phook",421,"phophanthai",3614,"phophungthai",3612,"phosamphaothai",3616,"pi",960,"pieupacirclekorean",12915,"pieupaparenkorean",12819,"pieupcieuckorean",12662,"pieupcirclekorean",12901,"pieupkiyeokkorean",12658,"pieupkorean",12610,"pieupparenkorean",12805,"pieupsioskiyeokkorean",12660,"pieupsioskorean",12612,"pieupsiostikeutkorean",12661,"pieupthieuthkorean",12663,"pieuptikeutkorean",12659,"pihiragana",12404,"pikatakana",12500,"pisymbolgreek",982,"piwrarmenian",1411,"plus",43,"plusbelowcmb",799,"pluscircle",8853,"plusminus",177,"plusmod",726,"plusmonospace",65291,"plussmall",65122,"plussuperior",8314,"pmonospace",65360,"pmsquare",13272,"pohiragana",12413,"pointingindexdownwhite",9759,"pointingindexleftwhite",9756,"pointingindexrightwhite",9758,"pointingindexupwhite",9757,"pokatakana",12509,"poplathai",3611,"postalmark",12306,"postalmarkface",12320,"pparen",9387,"precedes",8826,"prescription",8478,"primemod",697,"primereversed",8245,"product",8719,"projective",8965,"prolongedkana",12540,"propellor",8984,"propersubset",8834,"propersuperset",8835,"proportion",8759,"proportional",8733,"psi",968,"psicyrillic",1137,"psilipneumatacyrilliccmb",1158,"pssquare",13232,"puhiragana",12407,"pukatakana",12503,"pvsquare",13236,"pwsquare",13242,"q",113,"qadeva",2392,"qadmahebrew",1448,"qafarabic",1602,"qaffinalarabic",65238,"qafinitialarabic",65239,"qafmedialarabic",65240,"qamats",1464,"qamats10",1464,"qamats1a",1464,"qamats1c",1464,"qamats27",1464,"qamats29",1464,"qamats33",1464,"qamatsde",1464,"qamatshebrew",1464,"qamatsnarrowhebrew",1464,"qamatsqatanhebrew",1464,"qamatsqatannarrowhebrew",1464,"qamatsqatanquarterhebrew",1464,"qamatsqatanwidehebrew",1464,"qamatsquarterhebrew",1464,"qamatswidehebrew",1464,"qarneyparahebrew",1439,"qbopomofo",12561,"qcircle",9440,"qhook",672,"qmonospace",65361,"qof",1511,"qofdagesh",64327,"qofdageshhebrew",64327,"qofhebrew",1511,"qparen",9388,"quarternote",9833,"qubuts",1467,"qubuts18",1467,"qubuts25",1467,"qubuts31",1467,"qubutshebrew",1467,"qubutsnarrowhebrew",1467,"qubutsquarterhebrew",1467,"qubutswidehebrew",1467,"question",63,"questionarabic",1567,"questionarmenian",1374,"questiondown",191,"questiondownsmall",63423,"questiongreek",894,"questionmonospace",65311,"questionsmall",63295,"quotedbl",34,"quotedblbase",8222,"quotedblleft",8220,"quotedblmonospace",65282,"quotedblprime",12318,"quotedblprimereversed",12317,"quotedblright",8221,"quoteleft",8216,"quoteleftreversed",8219,"quotereversed",8219,"quoteright",8217,"quoterightn",329,"quotesinglbase",8218,"quotesingle",39,"quotesinglemonospace",65287,"r",114,"raarmenian",1404,"rabengali",2480,"racute",341,"radeva",2352,"radical",8730,"radicalex",63717,"radoverssquare",13230,"radoverssquaredsquare",13231,"radsquare",13229,"rafe",1471,"rafehebrew",1471,"ragujarati",2736,"ragurmukhi",2608,"rahiragana",12425,"rakatakana",12521,"rakatakanahalfwidth",65431,"ralowerdiagonalbengali",2545,"ramiddlediagonalbengali",2544,"ramshorn",612,"ratio",8758,"rbopomofo",12566,"rcaron",345,"rcedilla",343,"rcircle",9441,"rcommaaccent",343,"rdblgrave",529,"rdotaccent",7769,"rdotbelow",7771,"rdotbelowmacron",7773,"referencemark",8251,"reflexsubset",8838,"reflexsuperset",8839,"registered",174,"registersans",63720,"registerserif",63194,"reharabic",1585,"reharmenian",1408,"rehfinalarabic",65198,"rehiragana",12428,"rekatakana",12524,"rekatakanahalfwidth",65434,"resh",1512,"reshdageshhebrew",64328,"reshhebrew",1512,"reversedtilde",8765,"reviahebrew",1431,"reviamugrashhebrew",1431,"revlogicalnot",8976,"rfishhook",638,"rfishhookreversed",639,"rhabengali",2525,"rhadeva",2397,"rho",961,"rhook",637,"rhookturned",635,"rhookturnedsuperior",693,"rhosymbolgreek",1009,"rhotichookmod",734,"rieulacirclekorean",12913,"rieulaparenkorean",12817,"rieulcirclekorean",12899,"rieulhieuhkorean",12608,"rieulkiyeokkorean",12602,"rieulkiyeoksioskorean",12649,"rieulkorean",12601,"rieulmieumkorean",12603,"rieulpansioskorean",12652,"rieulparenkorean",12803,"rieulphieuphkorean",12607,"rieulpieupkorean",12604,"rieulpieupsioskorean",12651,"rieulsioskorean",12605,"rieulthieuthkorean",12606,"rieultikeutkorean",12650,"rieulyeorinhieuhkorean",12653,"rightangle",8735,"righttackbelowcmb",793,"righttriangle",8895,"rihiragana",12426,"rikatakana",12522,"rikatakanahalfwidth",65432,"ring",730,"ringbelowcmb",805,"ringcmb",778,"ringhalfleft",703,"ringhalfleftarmenian",1369,"ringhalfleftbelowcmb",796,"ringhalfleftcentered",723,"ringhalfright",702,"ringhalfrightbelowcmb",825,"ringhalfrightcentered",722,"rinvertedbreve",531,"rittorusquare",13137,"rlinebelow",7775,"rlongleg",636,"rlonglegturned",634,"rmonospace",65362,"rohiragana",12429,"rokatakana",12525,"rokatakanahalfwidth",65435,"roruathai",3619,"rparen",9389,"rrabengali",2524,"rradeva",2353,"rragurmukhi",2652,"rreharabic",1681,"rrehfinalarabic",64397,"rrvocalicbengali",2528,"rrvocalicdeva",2400,"rrvocalicgujarati",2784,"rrvocalicvowelsignbengali",2500,"rrvocalicvowelsigndeva",2372,"rrvocalicvowelsigngujarati",2756,"rsuperior",63217,"rtblock",9616,"rturned",633,"rturnedsuperior",692,"ruhiragana",12427,"rukatakana",12523,"rukatakanahalfwidth",65433,"rupeemarkbengali",2546,"rupeesignbengali",2547,"rupiah",63197,"ruthai",3620,"rvocalicbengali",2443,"rvocalicdeva",2315,"rvocalicgujarati",2699,"rvocalicvowelsignbengali",2499,"rvocalicvowelsigndeva",2371,"rvocalicvowelsigngujarati",2755,"s",115,"sabengali",2488,"sacute",347,"sacutedotaccent",7781,"sadarabic",1589,"sadeva",2360,"sadfinalarabic",65210,"sadinitialarabic",65211,"sadmedialarabic",65212,"sagujarati",2744,"sagurmukhi",2616,"sahiragana",12373,"sakatakana",12469,"sakatakanahalfwidth",65403,"sallallahoualayhewasallamarabic",65018,"samekh",1505,"samekhdagesh",64321,"samekhdageshhebrew",64321,"samekhhebrew",1505,"saraaathai",3634,"saraaethai",3649,"saraaimaimalaithai",3652,"saraaimaimuanthai",3651,"saraamthai",3635,"saraathai",3632,"saraethai",3648,"saraiileftthai",63622,"saraiithai",3637,"saraileftthai",63621,"saraithai",3636,"saraothai",3650,"saraueeleftthai",63624,"saraueethai",3639,"saraueleftthai",63623,"sarauethai",3638,"sarauthai",3640,"sarauuthai",3641,"sbopomofo",12569,"scaron",353,"scarondotaccent",7783,"scedilla",351,"schwa",601,"schwacyrillic",1241,"schwadieresiscyrillic",1243,"schwahook",602,"scircle",9442,"scircumflex",349,"scommaaccent",537,"sdotaccent",7777,"sdotbelow",7779,"sdotbelowdotaccent",7785,"seagullbelowcmb",828,"second",8243,"secondtonechinese",714,"section",167,"seenarabic",1587,"seenfinalarabic",65202,"seeninitialarabic",65203,"seenmedialarabic",65204,"segol",1462,"segol13",1462,"segol1f",1462,"segol2c",1462,"segolhebrew",1462,"segolnarrowhebrew",1462,"segolquarterhebrew",1462,"segoltahebrew",1426,"segolwidehebrew",1462,"seharmenian",1405,"sehiragana",12379,"sekatakana",12475,"sekatakanahalfwidth",65406,"semicolon",59,"semicolonarabic",1563,"semicolonmonospace",65307,"semicolonsmall",65108,"semivoicedmarkkana",12444,"semivoicedmarkkanahalfwidth",65439,"sentisquare",13090,"sentosquare",13091,"seven",55,"sevenarabic",1639,"sevenbengali",2541,"sevencircle",9318,"sevencircleinversesansserif",10128,"sevendeva",2413,"seveneighths",8542,"sevengujarati",2797,"sevengurmukhi",2669,"sevenhackarabic",1639,"sevenhangzhou",12327,"sevenideographicparen",12838,"seveninferior",8327,"sevenmonospace",65303,"sevenoldstyle",63287,"sevenparen",9338,"sevenperiod",9358,"sevenpersian",1783,"sevenroman",8566,"sevensuperior",8311,"seventeencircle",9328,"seventeenparen",9348,"seventeenperiod",9368,"seventhai",3671,"sfthyphen",173,"shaarmenian",1399,"shabengali",2486,"shacyrillic",1096,"shaddaarabic",1617,"shaddadammaarabic",64609,"shaddadammatanarabic",64606,"shaddafathaarabic",64608,"shaddakasraarabic",64610,"shaddakasratanarabic",64607,"shade",9618,"shadedark",9619,"shadelight",9617,"shademedium",9618,"shadeva",2358,"shagujarati",2742,"shagurmukhi",2614,"shalshelethebrew",1427,"shbopomofo",12565,"shchacyrillic",1097,"sheenarabic",1588,"sheenfinalarabic",65206,"sheeninitialarabic",65207,"sheenmedialarabic",65208,"sheicoptic",995,"sheqel",8362,"sheqelhebrew",8362,"sheva",1456,"sheva115",1456,"sheva15",1456,"sheva22",1456,"sheva2e",1456,"shevahebrew",1456,"shevanarrowhebrew",1456,"shevaquarterhebrew",1456,"shevawidehebrew",1456,"shhacyrillic",1211,"shimacoptic",1005,"shin",1513,"shindagesh",64329,"shindageshhebrew",64329,"shindageshshindot",64300,"shindageshshindothebrew",64300,"shindageshsindot",64301,"shindageshsindothebrew",64301,"shindothebrew",1473,"shinhebrew",1513,"shinshindot",64298,"shinshindothebrew",64298,"shinsindot",64299,"shinsindothebrew",64299,"shook",642,"sigma",963,"sigma1",962,"sigmafinal",962,"sigmalunatesymbolgreek",1010,"sihiragana",12375,"sikatakana",12471,"sikatakanahalfwidth",65404,"siluqhebrew",1469,"siluqlefthebrew",1469,"similar",8764,"sindothebrew",1474,"siosacirclekorean",12916,"siosaparenkorean",12820,"sioscieuckorean",12670,"sioscirclekorean",12902,"sioskiyeokkorean",12666,"sioskorean",12613,"siosnieunkorean",12667,"siosparenkorean",12806,"siospieupkorean",12669,"siostikeutkorean",12668,"six",54,"sixarabic",1638,"sixbengali",2540,"sixcircle",9317,"sixcircleinversesansserif",10127,"sixdeva",2412,"sixgujarati",2796,"sixgurmukhi",2668,"sixhackarabic",1638,"sixhangzhou",12326,"sixideographicparen",12837,"sixinferior",8326,"sixmonospace",65302,"sixoldstyle",63286,"sixparen",9337,"sixperiod",9357,"sixpersian",1782,"sixroman",8565,"sixsuperior",8310,"sixteencircle",9327,"sixteencurrencydenominatorbengali",2553,"sixteenparen",9347,"sixteenperiod",9367,"sixthai",3670,"slash",47,"slashmonospace",65295,"slong",383,"slongdotaccent",7835,"smileface",9786,"smonospace",65363,"sofpasuqhebrew",1475,"softhyphen",173,"softsigncyrillic",1100,"sohiragana",12381,"sokatakana",12477,"sokatakanahalfwidth",65407,"soliduslongoverlaycmb",824,"solidusshortoverlaycmb",823,"sorusithai",3625,"sosalathai",3624,"sosothai",3595,"sosuathai",3626,"space",32,"spacehackarabic",32,"spade",9824,"spadesuitblack",9824,"spadesuitwhite",9828,"sparen",9390,"squarebelowcmb",827,"squarecc",13252,"squarecm",13213,"squarediagonalcrosshatchfill",9641,"squarehorizontalfill",9636,"squarekg",13199,"squarekm",13214,"squarekmcapital",13262,"squareln",13265,"squarelog",13266,"squaremg",13198,"squaremil",13269,"squaremm",13212,"squaremsquared",13217,"squareorthogonalcrosshatchfill",9638,"squareupperlefttolowerrightfill",9639,"squareupperrighttolowerleftfill",9640,"squareverticalfill",9637,"squarewhitewithsmallblack",9635,"srsquare",13275,"ssabengali",2487,"ssadeva",2359,"ssagujarati",2743,"ssangcieuckorean",12617,"ssanghieuhkorean",12677,"ssangieungkorean",12672,"ssangkiyeokkorean",12594,"ssangnieunkorean",12645,"ssangpieupkorean",12611,"ssangsioskorean",12614,"ssangtikeutkorean",12600,"ssuperior",63218,"sterling",163,"sterlingmonospace",65505,"strokelongoverlaycmb",822,"strokeshortoverlaycmb",821,"subset",8834,"subsetnotequal",8842,"subsetorequal",8838,"succeeds",8827,"suchthat",8715,"suhiragana",12377,"sukatakana",12473,"sukatakanahalfwidth",65405,"sukunarabic",1618,"summation",8721,"sun",9788,"superset",8835,"supersetnotequal",8843,"supersetorequal",8839,"svsquare",13276,"syouwaerasquare",13180,"t",116,"tabengali",2468,"tackdown",8868,"tackleft",8867,"tadeva",2340,"tagujarati",2724,"tagurmukhi",2596,"taharabic",1591,"tahfinalarabic",65218,"tahinitialarabic",65219,"tahiragana",12383,"tahmedialarabic",65220,"taisyouerasquare",13181,"takatakana",12479,"takatakanahalfwidth",65408,"tatweelarabic",1600,"tau",964,"tav",1514,"tavdages",64330,"tavdagesh",64330,"tavdageshhebrew",64330,"tavhebrew",1514,"tbar",359,"tbopomofo",12554,"tcaron",357,"tccurl",680,"tcedilla",355,"tcheharabic",1670,"tchehfinalarabic",64379,"tchehinitialarabic",64380,"tchehmedialarabic",64381,"tcircle",9443,"tcircumflexbelow",7793,"tcommaaccent",355,"tdieresis",7831,"tdotaccent",7787,"tdotbelow",7789,"tecyrillic",1090,"tedescendercyrillic",1197,"teharabic",1578,"tehfinalarabic",65174,"tehhahinitialarabic",64674,"tehhahisolatedarabic",64524,"tehinitialarabic",65175,"tehiragana",12390,"tehjeeminitialarabic",64673,"tehjeemisolatedarabic",64523,"tehmarbutaarabic",1577,"tehmarbutafinalarabic",65172,"tehmedialarabic",65176,"tehmeeminitialarabic",64676,"tehmeemisolatedarabic",64526,"tehnoonfinalarabic",64627,"tekatakana",12486,"tekatakanahalfwidth",65411,"telephone",8481,"telephoneblack",9742,"telishagedolahebrew",1440,"telishaqetanahebrew",1449,"tencircle",9321,"tenideographicparen",12841,"tenparen",9341,"tenperiod",9361,"tenroman",8569,"tesh",679,"tet",1496,"tetdagesh",64312,"tetdageshhebrew",64312,"tethebrew",1496,"tetsecyrillic",1205,"tevirhebrew",1435,"tevirlefthebrew",1435,"thabengali",2469,"thadeva",2341,"thagujarati",2725,"thagurmukhi",2597,"thalarabic",1584,"thalfinalarabic",65196,"thanthakhatlowleftthai",63640,"thanthakhatlowrightthai",63639,"thanthakhatthai",3660,"thanthakhatupperleftthai",63638,"theharabic",1579,"thehfinalarabic",65178,"thehinitialarabic",65179,"thehmedialarabic",65180,"thereexists",8707,"therefore",8756,"theta",952,"theta1",977,"thetasymbolgreek",977,"thieuthacirclekorean",12921,"thieuthaparenkorean",12825,"thieuthcirclekorean",12907,"thieuthkorean",12620,"thieuthparenkorean",12811,"thirteencircle",9324,"thirteenparen",9344,"thirteenperiod",9364,"thonangmonthothai",3601,"thook",429,"thophuthaothai",3602,"thorn",254,"thothahanthai",3607,"thothanthai",3600,"thothongthai",3608,"thothungthai",3606,"thousandcyrillic",1154,"thousandsseparatorarabic",1644,"thousandsseparatorpersian",1644,"three",51,"threearabic",1635,"threebengali",2537,"threecircle",9314,"threecircleinversesansserif",10124,"threedeva",2409,"threeeighths",8540,"threegujarati",2793,"threegurmukhi",2665,"threehackarabic",1635,"threehangzhou",12323,"threeideographicparen",12834,"threeinferior",8323,"threemonospace",65299,"threenumeratorbengali",2550,"threeoldstyle",63283,"threeparen",9334,"threeperiod",9354,"threepersian",1779,"threequarters",190,"threequartersemdash",63198,"threeroman",8562,"threesuperior",179,"threethai",3667,"thzsquare",13204,"tihiragana",12385,"tikatakana",12481,"tikatakanahalfwidth",65409,"tikeutacirclekorean",12912,"tikeutaparenkorean",12816,"tikeutcirclekorean",12898,"tikeutkorean",12599,"tikeutparenkorean",12802,"tilde",732,"tildebelowcmb",816,"tildecmb",771,"tildecomb",771,"tildedoublecmb",864,"tildeoperator",8764,"tildeoverlaycmb",820,"tildeverticalcmb",830,"timescircle",8855,"tipehahebrew",1430,"tipehalefthebrew",1430,"tippigurmukhi",2672,"titlocyrilliccmb",1155,"tiwnarmenian",1407,"tlinebelow",7791,"tmonospace",65364,"toarmenian",1385,"tohiragana",12392,"tokatakana",12488,"tokatakanahalfwidth",65412,"tonebarextrahighmod",741,"tonebarextralowmod",745,"tonebarhighmod",742,"tonebarlowmod",744,"tonebarmidmod",743,"tonefive",445,"tonesix",389,"tonetwo",424,"tonos",900,"tonsquare",13095,"topatakthai",3599,"tortoiseshellbracketleft",12308,"tortoiseshellbracketleftsmall",65117,"tortoiseshellbracketleftvertical",65081,"tortoiseshellbracketright",12309,"tortoiseshellbracketrightsmall",65118,"tortoiseshellbracketrightvertical",65082,"totaothai",3605,"tpalatalhook",427,"tparen",9391,"trademark",8482,"trademarksans",63722,"trademarkserif",63195,"tretroflexhook",648,"triagdn",9660,"triaglf",9668,"triagrt",9658,"triagup",9650,"ts",678,"tsadi",1510,"tsadidagesh",64326,"tsadidageshhebrew",64326,"tsadihebrew",1510,"tsecyrillic",1094,"tsere",1461,"tsere12",1461,"tsere1e",1461,"tsere2b",1461,"tserehebrew",1461,"tserenarrowhebrew",1461,"tserequarterhebrew",1461,"tserewidehebrew",1461,"tshecyrillic",1115,"tsuperior",63219,"ttabengali",2463,"ttadeva",2335,"ttagujarati",2719,"ttagurmukhi",2591,"tteharabic",1657,"ttehfinalarabic",64359,"ttehinitialarabic",64360,"ttehmedialarabic",64361,"tthabengali",2464,"tthadeva",2336,"tthagujarati",2720,"tthagurmukhi",2592,"tturned",647,"tuhiragana",12388,"tukatakana",12484,"tukatakanahalfwidth",65410,"tusmallhiragana",12387,"tusmallkatakana",12483,"tusmallkatakanahalfwidth",65391,"twelvecircle",9323,"twelveparen",9343,"twelveperiod",9363,"twelveroman",8571,"twentycircle",9331,"twentyhangzhou",21316,"twentyparen",9351,"twentyperiod",9371,"two",50,"twoarabic",1634,"twobengali",2536,"twocircle",9313,"twocircleinversesansserif",10123,"twodeva",2408,"twodotenleader",8229,"twodotleader",8229,"twodotleadervertical",65072,"twogujarati",2792,"twogurmukhi",2664,"twohackarabic",1634,"twohangzhou",12322,"twoideographicparen",12833,"twoinferior",8322,"twomonospace",65298,"twonumeratorbengali",2549,"twooldstyle",63282,"twoparen",9333,"twoperiod",9353,"twopersian",1778,"tworoman",8561,"twostroke",443,"twosuperior",178,"twothai",3666,"twothirds",8532,"u",117,"uacute",250,"ubar",649,"ubengali",2441,"ubopomofo",12584,"ubreve",365,"ucaron",468,"ucircle",9444,"ucircumflex",251,"ucircumflexbelow",7799,"ucyrillic",1091,"udattadeva",2385,"udblacute",369,"udblgrave",533,"udeva",2313,"udieresis",252,"udieresisacute",472,"udieresisbelow",7795,"udieresiscaron",474,"udieresiscyrillic",1265,"udieresisgrave",476,"udieresismacron",470,"udotbelow",7909,"ugrave",249,"ugujarati",2697,"ugurmukhi",2569,"uhiragana",12358,"uhookabove",7911,"uhorn",432,"uhornacute",7913,"uhorndotbelow",7921,"uhorngrave",7915,"uhornhookabove",7917,"uhorntilde",7919,"uhungarumlaut",369,"uhungarumlautcyrillic",1267,"uinvertedbreve",535,"ukatakana",12454,"ukatakanahalfwidth",65395,"ukcyrillic",1145,"ukorean",12636,"umacron",363,"umacroncyrillic",1263,"umacrondieresis",7803,"umatragurmukhi",2625,"umonospace",65365,"underscore",95,"underscoredbl",8215,"underscoremonospace",65343,"underscorevertical",65075,"underscorewavy",65103,"union",8746,"universal",8704,"uogonek",371,"uparen",9392,"upblock",9600,"upperdothebrew",1476,"upsilon",965,"upsilondieresis",971,"upsilondieresistonos",944,"upsilonlatin",650,"upsilontonos",973,"uptackbelowcmb",797,"uptackmod",724,"uragurmukhi",2675,"uring",367,"ushortcyrillic",1118,"usmallhiragana",12357,"usmallkatakana",12453,"usmallkatakanahalfwidth",65385,"ustraightcyrillic",1199,"ustraightstrokecyrillic",1201,"utilde",361,"utildeacute",7801,"utildebelow",7797,"uubengali",2442,"uudeva",2314,"uugujarati",2698,"uugurmukhi",2570,"uumatragurmukhi",2626,"uuvowelsignbengali",2498,"uuvowelsigndeva",2370,"uuvowelsigngujarati",2754,"uvowelsignbengali",2497,"uvowelsigndeva",2369,"uvowelsigngujarati",2753,"v",118,"vadeva",2357,"vagujarati",2741,"vagurmukhi",2613,"vakatakana",12535,"vav",1493,"vavdagesh",64309,"vavdagesh65",64309,"vavdageshhebrew",64309,"vavhebrew",1493,"vavholam",64331,"vavholamhebrew",64331,"vavvavhebrew",1520,"vavyodhebrew",1521,"vcircle",9445,"vdotbelow",7807,"vecyrillic",1074,"veharabic",1700,"vehfinalarabic",64363,"vehinitialarabic",64364,"vehmedialarabic",64365,"vekatakana",12537,"venus",9792,"verticalbar",124,"verticallineabovecmb",781,"verticallinebelowcmb",809,"verticallinelowmod",716,"verticallinemod",712,"vewarmenian",1406,"vhook",651,"vikatakana",12536,"viramabengali",2509,"viramadeva",2381,"viramagujarati",2765,"visargabengali",2435,"visargadeva",2307,"visargagujarati",2691,"vmonospace",65366,"voarmenian",1400,"voicediterationhiragana",12446,"voicediterationkatakana",12542,"voicedmarkkana",12443,"voicedmarkkanahalfwidth",65438,"vokatakana",12538,"vparen",9393,"vtilde",7805,"vturned",652,"vuhiragana",12436,"vukatakana",12532,"w",119,"wacute",7811,"waekorean",12633,"wahiragana",12431,"wakatakana",12527,"wakatakanahalfwidth",65436,"wakorean",12632,"wasmallhiragana",12430,"wasmallkatakana",12526,"wattosquare",13143,"wavedash",12316,"wavyunderscorevertical",65076,"wawarabic",1608,"wawfinalarabic",65262,"wawhamzaabovearabic",1572,"wawhamzaabovefinalarabic",65158,"wbsquare",13277,"wcircle",9446,"wcircumflex",373,"wdieresis",7813,"wdotaccent",7815,"wdotbelow",7817,"wehiragana",12433,"weierstrass",8472,"wekatakana",12529,"wekorean",12638,"weokorean",12637,"wgrave",7809,"whitebullet",9702,"whitecircle",9675,"whitecircleinverse",9689,"whitecornerbracketleft",12302,"whitecornerbracketleftvertical",65091,"whitecornerbracketright",12303,"whitecornerbracketrightvertical",65092,"whitediamond",9671,"whitediamondcontainingblacksmalldiamond",9672,"whitedownpointingsmalltriangle",9663,"whitedownpointingtriangle",9661,"whiteleftpointingsmalltriangle",9667,"whiteleftpointingtriangle",9665,"whitelenticularbracketleft",12310,"whitelenticularbracketright",12311,"whiterightpointingsmalltriangle",9657,"whiterightpointingtriangle",9655,"whitesmallsquare",9643,"whitesmilingface",9786,"whitesquare",9633,"whitestar",9734,"whitetelephone",9743,"whitetortoiseshellbracketleft",12312,"whitetortoiseshellbracketright",12313,"whiteuppointingsmalltriangle",9653,"whiteuppointingtriangle",9651,"wihiragana",12432,"wikatakana",12528,"wikorean",12639,"wmonospace",65367,"wohiragana",12434,"wokatakana",12530,"wokatakanahalfwidth",65382,"won",8361,"wonmonospace",65510,"wowaenthai",3623,"wparen",9394,"wring",7832,"wsuperior",695,"wturned",653,"wynn",447,"x",120,"xabovecmb",829,"xbopomofo",12562,"xcircle",9447,"xdieresis",7821,"xdotaccent",7819,"xeharmenian",1389,"xi",958,"xmonospace",65368,"xparen",9395,"xsuperior",739,"y",121,"yaadosquare",13134,"yabengali",2479,"yacute",253,"yadeva",2351,"yaekorean",12626,"yagujarati",2735,"yagurmukhi",2607,"yahiragana",12420,"yakatakana",12516,"yakatakanahalfwidth",65428,"yakorean",12625,"yamakkanthai",3662,"yasmallhiragana",12419,"yasmallkatakana",12515,"yasmallkatakanahalfwidth",65388,"yatcyrillic",1123,"ycircle",9448,"ycircumflex",375,"ydieresis",255,"ydotaccent",7823,"ydotbelow",7925,"yeharabic",1610,"yehbarreearabic",1746,"yehbarreefinalarabic",64431,"yehfinalarabic",65266,"yehhamzaabovearabic",1574,"yehhamzaabovefinalarabic",65162,"yehhamzaaboveinitialarabic",65163,"yehhamzaabovemedialarabic",65164,"yehinitialarabic",65267,"yehmedialarabic",65268,"yehmeeminitialarabic",64733,"yehmeemisolatedarabic",64600,"yehnoonfinalarabic",64660,"yehthreedotsbelowarabic",1745,"yekorean",12630,"yen",165,"yenmonospace",65509,"yeokorean",12629,"yeorinhieuhkorean",12678,"yerahbenyomohebrew",1450,"yerahbenyomolefthebrew",1450,"yericyrillic",1099,"yerudieresiscyrillic",1273,"yesieungkorean",12673,"yesieungpansioskorean",12675,"yesieungsioskorean",12674,"yetivhebrew",1434,"ygrave",7923,"yhook",436,"yhookabove",7927,"yiarmenian",1397,"yicyrillic",1111,"yikorean",12642,"yinyang",9775,"yiwnarmenian",1410,"ymonospace",65369,"yod",1497,"yoddagesh",64313,"yoddageshhebrew",64313,"yodhebrew",1497,"yodyodhebrew",1522,"yodyodpatahhebrew",64287,"yohiragana",12424,"yoikorean",12681,"yokatakana",12520,"yokatakanahalfwidth",65430,"yokorean",12635,"yosmallhiragana",12423,"yosmallkatakana",12519,"yosmallkatakanahalfwidth",65390,"yotgreek",1011,"yoyaekorean",12680,"yoyakorean",12679,"yoyakthai",3618,"yoyingthai",3597,"yparen",9396,"ypogegrammeni",890,"ypogegrammenigreekcmb",837,"yr",422,"yring",7833,"ysuperior",696,"ytilde",7929,"yturned",654,"yuhiragana",12422,"yuikorean",12684,"yukatakana",12518,"yukatakanahalfwidth",65429,"yukorean",12640,"yusbigcyrillic",1131,"yusbigiotifiedcyrillic",1133,"yuslittlecyrillic",1127,"yuslittleiotifiedcyrillic",1129,"yusmallhiragana",12421,"yusmallkatakana",12517,"yusmallkatakanahalfwidth",65389,"yuyekorean",12683,"yuyeokorean",12682,"yyabengali",2527,"yyadeva",2399,"z",122,"zaarmenian",1382,"zacute",378,"zadeva",2395,"zagurmukhi",2651,"zaharabic",1592,"zahfinalarabic",65222,"zahinitialarabic",65223,"zahiragana",12374,"zahmedialarabic",65224,"zainarabic",1586,"zainfinalarabic",65200,"zakatakana",12470,"zaqefgadolhebrew",1429,"zaqefqatanhebrew",1428,"zarqahebrew",1432,"zayin",1494,"zayindagesh",64310,"zayindageshhebrew",64310,"zayinhebrew",1494,"zbopomofo",12567,"zcaron",382,"zcircle",9449,"zcircumflex",7825,"zcurl",657,"zdot",380,"zdotaccent",380,"zdotbelow",7827,"zecyrillic",1079,"zedescendercyrillic",1177,"zedieresiscyrillic",1247,"zehiragana",12380,"zekatakana",12476,"zero",48,"zeroarabic",1632,"zerobengali",2534,"zerodeva",2406,"zerogujarati",2790,"zerogurmukhi",2662,"zerohackarabic",1632,"zeroinferior",8320,"zeromonospace",65296,"zerooldstyle",63280,"zeropersian",1776,"zerosuperior",8304,"zerothai",3664,"zerowidthjoiner",65279,"zerowidthnonjoiner",8204,"zerowidthspace",8203,"zeta",950,"zhbopomofo",12563,"zhearmenian",1386,"zhebrevecyrillic",1218,"zhecyrillic",1078,"zhedescendercyrillic",1175,"zhedieresiscyrillic",1245,"zihiragana",12376,"zikatakana",12472,"zinorhebrew",1454,"zlinebelow",7829,"zmonospace",65370,"zohiragana",12382,"zokatakana",12478,"zparen",9397,"zretroflexhook",656,"zstroke",438,"zuhiragana",12378,"zukatakana",12474,".notdef",0,"angbracketleftbig",9001,"angbracketleftBig",9001,"angbracketleftbigg",9001,"angbracketleftBigg",9001,"angbracketrightBig",9002,"angbracketrightbig",9002,"angbracketrightBigg",9002,"angbracketrightbigg",9002,"arrowhookleft",8618,"arrowhookright",8617,"arrowlefttophalf",8636,"arrowleftbothalf",8637,"arrownortheast",8599,"arrownorthwest",8598,"arrowrighttophalf",8640,"arrowrightbothalf",8641,"arrowsoutheast",8600,"arrowsouthwest",8601,"backslashbig",8726,"backslashBig",8726,"backslashBigg",8726,"backslashbigg",8726,"bardbl",8214,"bracehtipdownleft",65079,"bracehtipdownright",65079,"bracehtipupleft",65080,"bracehtipupright",65080,"braceleftBig",123,"braceleftbig",123,"braceleftbigg",123,"braceleftBigg",123,"bracerightBig",125,"bracerightbig",125,"bracerightbigg",125,"bracerightBigg",125,"bracketleftbig",91,"bracketleftBig",91,"bracketleftbigg",91,"bracketleftBigg",91,"bracketrightBig",93,"bracketrightbig",93,"bracketrightbigg",93,"bracketrightBigg",93,"ceilingleftbig",8968,"ceilingleftBig",8968,"ceilingleftBigg",8968,"ceilingleftbigg",8968,"ceilingrightbig",8969,"ceilingrightBig",8969,"ceilingrightbigg",8969,"ceilingrightBigg",8969,"circledotdisplay",8857,"circledottext",8857,"circlemultiplydisplay",8855,"circlemultiplytext",8855,"circleplusdisplay",8853,"circleplustext",8853,"contintegraldisplay",8750,"contintegraltext",8750,"coproductdisplay",8720,"coproducttext",8720,"floorleftBig",8970,"floorleftbig",8970,"floorleftbigg",8970,"floorleftBigg",8970,"floorrightbig",8971,"floorrightBig",8971,"floorrightBigg",8971,"floorrightbigg",8971,"hatwide",770,"hatwider",770,"hatwidest",770,"intercal",7488,"integraldisplay",8747,"integraltext",8747,"intersectiondisplay",8898,"intersectiontext",8898,"logicalanddisplay",8743,"logicalandtext",8743,"logicalordisplay",8744,"logicalortext",8744,"parenleftBig",40,"parenleftbig",40,"parenleftBigg",40,"parenleftbigg",40,"parenrightBig",41,"parenrightbig",41,"parenrightBigg",41,"parenrightbigg",41,"prime",8242,"productdisplay",8719,"producttext",8719,"radicalbig",8730,"radicalBig",8730,"radicalBigg",8730,"radicalbigg",8730,"radicalbt",8730,"radicaltp",8730,"radicalvertex",8730,"slashbig",47,"slashBig",47,"slashBigg",47,"slashbigg",47,"summationdisplay",8721,"summationtext",8721,"tildewide",732,"tildewider",732,"tildewidest",732,"uniondisplay",8899,"unionmultidisplay",8846,"unionmultitext",8846,"unionsqdisplay",8852,"unionsqtext",8852,"uniontext",8899,"vextenddouble",8741,"vextendsingle",8739]})),i=(0,a.getArrayLookupTableFactory)((function(){return["space",32,"a1",9985,"a2",9986,"a202",9987,"a3",9988,"a4",9742,"a5",9990,"a119",9991,"a118",9992,"a117",9993,"a11",9755,"a12",9758,"a13",9996,"a14",9997,"a15",9998,"a16",9999,"a105",1e4,"a17",10001,"a18",10002,"a19",10003,"a20",10004,"a21",10005,"a22",10006,"a23",10007,"a24",10008,"a25",10009,"a26",10010,"a27",10011,"a28",10012,"a6",10013,"a7",10014,"a8",10015,"a9",10016,"a10",10017,"a29",10018,"a30",10019,"a31",10020,"a32",10021,"a33",10022,"a34",10023,"a35",9733,"a36",10025,"a37",10026,"a38",10027,"a39",10028,"a40",10029,"a41",10030,"a42",10031,"a43",10032,"a44",10033,"a45",10034,"a46",10035,"a47",10036,"a48",10037,"a49",10038,"a50",10039,"a51",10040,"a52",10041,"a53",10042,"a54",10043,"a55",10044,"a56",10045,"a57",10046,"a58",10047,"a59",10048,"a60",10049,"a61",10050,"a62",10051,"a63",10052,"a64",10053,"a65",10054,"a66",10055,"a67",10056,"a68",10057,"a69",10058,"a70",10059,"a71",9679,"a72",10061,"a73",9632,"a74",10063,"a203",10064,"a75",10065,"a204",10066,"a76",9650,"a77",9660,"a78",9670,"a79",10070,"a81",9687,"a82",10072,"a83",10073,"a84",10074,"a97",10075,"a98",10076,"a99",10077,"a100",10078,"a101",10081,"a102",10082,"a103",10083,"a104",10084,"a106",10085,"a107",10086,"a108",10087,"a112",9827,"a111",9830,"a110",9829,"a109",9824,"a120",9312,"a121",9313,"a122",9314,"a123",9315,"a124",9316,"a125",9317,"a126",9318,"a127",9319,"a128",9320,"a129",9321,"a130",10102,"a131",10103,"a132",10104,"a133",10105,"a134",10106,"a135",10107,"a136",10108,"a137",10109,"a138",10110,"a139",10111,"a140",10112,"a141",10113,"a142",10114,"a143",10115,"a144",10116,"a145",10117,"a146",10118,"a147",10119,"a148",10120,"a149",10121,"a150",10122,"a151",10123,"a152",10124,"a153",10125,"a154",10126,"a155",10127,"a156",10128,"a157",10129,"a158",10130,"a159",10131,"a160",10132,"a161",8594,"a163",8596,"a164",8597,"a196",10136,"a165",10137,"a192",10138,"a166",10139,"a167",10140,"a168",10141,"a169",10142,"a170",10143,"a171",10144,"a172",10145,"a173",10146,"a162",10147,"a174",10148,"a175",10149,"a176",10150,"a177",10151,"a178",10152,"a179",10153,"a193",10154,"a180",10155,"a199",10156,"a181",10157,"a200",10158,"a182",10159,"a201",10161,"a183",10162,"a184",10163,"a197",10164,"a185",10165,"a194",10166,"a198",10167,"a186",10168,"a195",10169,"a187",10170,"a188",10171,"a189",10172,"a190",10173,"a191",10174,"a89",10088,"a90",10089,"a93",10090,"a94",10091,"a91",10092,"a92",10093,"a205",10094,"a85",10095,"a206",10096,"a86",10097,"a87",10098,"a88",10099,"a95",10100,"a96",10101,".notdef",0]}))},(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.getSymbolsFonts=t.getSupplementalGlyphMapForCalibri=t.getSupplementalGlyphMapForArialBlack=t.getStdFontMap=t.getSerifFonts=t.getNonStdFontMap=t.getGlyphMapForStandardFonts=void 0
var a=r(138),n=(0,a.getLookupTableFactory)((function(e){e.ArialNarrow="Helvetica",e["ArialNarrow-Bold"]="Helvetica-Bold",e["ArialNarrow-BoldItalic"]="Helvetica-BoldOblique",e["ArialNarrow-Italic"]="Helvetica-Oblique",e.ArialBlack="Helvetica",e["ArialBlack-Bold"]="Helvetica-Bold",e["ArialBlack-BoldItalic"]="Helvetica-BoldOblique",e["ArialBlack-Italic"]="Helvetica-Oblique",e["Arial-Black"]="Helvetica",e["Arial-Black-Bold"]="Helvetica-Bold",e["Arial-Black-BoldItalic"]="Helvetica-BoldOblique",e["Arial-Black-Italic"]="Helvetica-Oblique",e.Arial="Helvetica",e["Arial-Bold"]="Helvetica-Bold",e["Arial-BoldItalic"]="Helvetica-BoldOblique",e["Arial-Italic"]="Helvetica-Oblique",e["Arial-BoldItalicMT"]="Helvetica-BoldOblique",e["Arial-BoldMT"]="Helvetica-Bold",e["Arial-ItalicMT"]="Helvetica-Oblique",e.ArialMT="Helvetica",e["Courier-Bold"]="Courier-Bold",e["Courier-BoldItalic"]="Courier-BoldOblique",e["Courier-Italic"]="Courier-Oblique",e.CourierNew="Courier",e["CourierNew-Bold"]="Courier-Bold",e["CourierNew-BoldItalic"]="Courier-BoldOblique",e["CourierNew-Italic"]="Courier-Oblique",e["CourierNewPS-BoldItalicMT"]="Courier-BoldOblique",e["CourierNewPS-BoldMT"]="Courier-Bold",e["CourierNewPS-ItalicMT"]="Courier-Oblique"
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
t.getSupplementalGlyphMapForCalibri=u},(e,t,r)=>{"use strict"
r.r(t),r.d(t,{getNormalizedUnicodes:()=>l,getUnicodeForGlyph:()=>o,getUnicodeRangeFor:()=>c,mapSpecialUnicodeValues:()=>i,reverseIfRtl:()=>u})
var a=r(138),n=(0,a.getLookupTableFactory)((function(e){e[63721]=169,e[63193]=169,e[63720]=174,e[63194]=174,e[63722]=8482,e[63195]=8482,e[63729]=9127,e[63730]=9128,e[63731]=9129,e[63740]=9131,e[63741]=9132,e[63742]=9133,e[63726]=9121,e[63727]=9122,e[63728]=9123,e[63737]=9124,e[63738]=9125,e[63739]=9126,e[63723]=9115,e[63724]=9116,e[63725]=9117,e[63734]=9118,e[63735]=9119,e[63736]=9120}))
function i(e){return e>=65520&&e<=65535?0:e>=62976&&e<=63743?n()[e]||e:173===e?45:e}function o(e,t){var r=t[e]
if(void 0!==r)return r
if(!e)return-1
if("u"===e[0]){var a,n=e.length
if(7===n&&"n"===e[1]&&"i"===e[2])a=e.substring(3)
else{if(!(n>=5&&n<=7))return-1
a=e.substring(1)}if(a===a.toUpperCase()&&(r=parseInt(a,16))>=0)return r}return-1}var s=[{begin:0,end:127},{begin:128,end:255},{begin:256,end:383},{begin:384,end:591},{begin:592,end:687},{begin:688,end:767},{begin:768,end:879},{begin:880,end:1023},{begin:11392,end:11519},{begin:1024,end:1279},{begin:1328,end:1423},{begin:1424,end:1535},{begin:42240,end:42559},{begin:1536,end:1791},{begin:1984,end:2047},{begin:2304,end:2431},{begin:2432,end:2559},{begin:2560,end:2687},{begin:2688,end:2815},{begin:2816,end:2943},{begin:2944,end:3071},{begin:3072,end:3199},{begin:3200,end:3327},{begin:3328,end:3455},{begin:3584,end:3711},{begin:3712,end:3839},{begin:4256,end:4351},{begin:6912,end:7039},{begin:4352,end:4607},{begin:7680,end:7935},{begin:7936,end:8191},{begin:8192,end:8303},{begin:8304,end:8351},{begin:8352,end:8399},{begin:8400,end:8447},{begin:8448,end:8527},{begin:8528,end:8591},{begin:8592,end:8703},{begin:8704,end:8959},{begin:8960,end:9215},{begin:9216,end:9279},{begin:9280,end:9311},{begin:9312,end:9471},{begin:9472,end:9599},{begin:9600,end:9631},{begin:9632,end:9727},{begin:9728,end:9983},{begin:9984,end:10175},{begin:12288,end:12351},{begin:12352,end:12447},{begin:12448,end:12543},{begin:12544,end:12591},{begin:12592,end:12687},{begin:43072,end:43135},{begin:12800,end:13055},{begin:13056,end:13311},{begin:44032,end:55215},{begin:55296,end:57343},{begin:67840,end:67871},{begin:19968,end:40959},{begin:57344,end:63743},{begin:12736,end:12783},{begin:64256,end:64335},{begin:64336,end:65023},{begin:65056,end:65071},{begin:65040,end:65055},{begin:65104,end:65135},{begin:65136,end:65279},{begin:65280,end:65519},{begin:65520,end:65535},{begin:3840,end:4095},{begin:1792,end:1871},{begin:1920,end:1983},{begin:3456,end:3583},{begin:4096,end:4255},{begin:4608,end:4991},{begin:5024,end:5119},{begin:5120,end:5759},{begin:5760,end:5791},{begin:5792,end:5887},{begin:6016,end:6143},{begin:6144,end:6319},{begin:10240,end:10495},{begin:40960,end:42127},{begin:5888,end:5919},{begin:66304,end:66351},{begin:66352,end:66383},{begin:66560,end:66639},{begin:118784,end:119039},{begin:119808,end:120831},{begin:1044480,end:1048573},{begin:65024,end:65039},{begin:917504,end:917631},{begin:6400,end:6479},{begin:6480,end:6527},{begin:6528,end:6623},{begin:6656,end:6687},{begin:11264,end:11359},{begin:11568,end:11647},{begin:19904,end:19967},{begin:43008,end:43055},{begin:65536,end:65663},{begin:65856,end:65935},{begin:66432,end:66463},{begin:66464,end:66527},{begin:66640,end:66687},{begin:66688,end:66735},{begin:67584,end:67647},{begin:68096,end:68191},{begin:119552,end:119647},{begin:73728,end:74751},{begin:119648,end:119679},{begin:7040,end:7103},{begin:7168,end:7247},{begin:7248,end:7295},{begin:43136,end:43231},{begin:43264,end:43311},{begin:43312,end:43359},{begin:43520,end:43615},{begin:65936,end:65999},{begin:66e3,end:66047},{begin:66208,end:66271},{begin:127024,end:127135}]
function c(e){for(var t=0,r=s.length;t<r;t++){var a=s[t]
if(e>=a.begin&&e<a.end)return t}return-1}var l=(0,a.getArrayLookupTableFactory)((function(){return["¨"," ̈","¯"," ̄","´"," ́","µ","μ","¸"," ̧","Ĳ","IJ","ĳ","ij","Ŀ","L·","ŀ","l·","ŉ","ʼn","ſ","s","Ǆ","DŽ","ǅ","Dž","ǆ","dž","Ǉ","LJ","ǈ","Lj","ǉ","lj","Ǌ","NJ","ǋ","Nj","ǌ","nj","Ǳ","DZ","ǲ","Dz","ǳ","dz","˘"," ̆","˙"," ̇","˚"," ̊","˛"," ̨","˜"," ̃","˝"," ̋","ͺ"," ͅ","΄"," ́","ϐ","β","ϑ","θ","ϒ","Υ","ϕ","φ","ϖ","π","ϰ","κ","ϱ","ρ","ϲ","ς","ϴ","Θ","ϵ","ε","Ϲ","Σ","և","եւ","ٵ","اٴ","ٶ","وٴ","ٷ","ۇٴ","ٸ","يٴ","ำ","ํา","ຳ","ໍາ","ໜ","ຫນ","ໝ","ຫມ","ཷ","ྲཱྀ","ཹ","ླཱྀ","ẚ","aʾ","᾽"," ̓","᾿"," ̓","῀"," ͂","῾"," ̔"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","‗"," ̳","․",".","‥","..","…","...","″","′′","‴","′′′","‶","‵‵","‷","‵‵‵","‼","!!","‾"," ̅","⁇","??","⁈","?!","⁉","!?","⁗","′′′′"," "," ","₨","Rs","℀","a/c","℁","a/s","℃","°C","℅","c/o","℆","c/u","ℇ","Ɛ","℉","°F","№","No","℡","TEL","ℵ","א","ℶ","ב","ℷ","ג","ℸ","ד","℻","FAX","Ⅰ","I","Ⅱ","II","Ⅲ","III","Ⅳ","IV","Ⅴ","V","Ⅵ","VI","Ⅶ","VII","Ⅷ","VIII","Ⅸ","IX","Ⅹ","X","Ⅺ","XI","Ⅻ","XII","Ⅼ","L","Ⅽ","C","Ⅾ","D","Ⅿ","M","ⅰ","i","ⅱ","ii","ⅲ","iii","ⅳ","iv","ⅴ","v","ⅵ","vi","ⅶ","vii","ⅷ","viii","ⅸ","ix","ⅹ","x","ⅺ","xi","ⅻ","xii","ⅼ","l","ⅽ","c","ⅾ","d","ⅿ","m","∬","∫∫","∭","∫∫∫","∯","∮∮","∰","∮∮∮","⑴","(1)","⑵","(2)","⑶","(3)","⑷","(4)","⑸","(5)","⑹","(6)","⑺","(7)","⑻","(8)","⑼","(9)","⑽","(10)","⑾","(11)","⑿","(12)","⒀","(13)","⒁","(14)","⒂","(15)","⒃","(16)","⒄","(17)","⒅","(18)","⒆","(19)","⒇","(20)","⒈","1.","⒉","2.","⒊","3.","⒋","4.","⒌","5.","⒍","6.","⒎","7.","⒏","8.","⒐","9.","⒑","10.","⒒","11.","⒓","12.","⒔","13.","⒕","14.","⒖","15.","⒗","16.","⒘","17.","⒙","18.","⒚","19.","⒛","20.","⒜","(a)","⒝","(b)","⒞","(c)","⒟","(d)","⒠","(e)","⒡","(f)","⒢","(g)","⒣","(h)","⒤","(i)","⒥","(j)","⒦","(k)","⒧","(l)","⒨","(m)","⒩","(n)","⒪","(o)","⒫","(p)","⒬","(q)","⒭","(r)","⒮","(s)","⒯","(t)","⒰","(u)","⒱","(v)","⒲","(w)","⒳","(x)","⒴","(y)","⒵","(z)","⨌","∫∫∫∫","⩴","::=","⩵","==","⩶","===","⺟","母","⻳","龟","⼀","一","⼁","丨","⼂","丶","⼃","丿","⼄","乙","⼅","亅","⼆","二","⼇","亠","⼈","人","⼉","儿","⼊","入","⼋","八","⼌","冂","⼍","冖","⼎","冫","⼏","几","⼐","凵","⼑","刀","⼒","力","⼓","勹","⼔","匕","⼕","匚","⼖","匸","⼗","十","⼘","卜","⼙","卩","⼚","厂","⼛","厶","⼜","又","⼝","口","⼞","囗","⼟","土","⼠","士","⼡","夂","⼢","夊","⼣","夕","⼤","大","⼥","女","⼦","子","⼧","宀","⼨","寸","⼩","小","⼪","尢","⼫","尸","⼬","屮","⼭","山","⼮","巛","⼯","工","⼰","己","⼱","巾","⼲","干","⼳","幺","⼴","广","⼵","廴","⼶","廾","⼷","弋","⼸","弓","⼹","彐","⼺","彡","⼻","彳","⼼","心","⼽","戈","⼾","戶","⼿","手","⽀","支","⽁","攴","⽂","文","⽃","斗","⽄","斤","⽅","方","⽆","无","⽇","日","⽈","曰","⽉","月","⽊","木","⽋","欠","⽌","止","⽍","歹","⽎","殳","⽏","毋","⽐","比","⽑","毛","⽒","氏","⽓","气","⽔","水","⽕","火","⽖","爪","⽗","父","⽘","爻","⽙","爿","⽚","片","⽛","牙","⽜","牛","⽝","犬","⽞","玄","⽟","玉","⽠","瓜","⽡","瓦","⽢","甘","⽣","生","⽤","用","⽥","田","⽦","疋","⽧","疒","⽨","癶","⽩","白","⽪","皮","⽫","皿","⽬","目","⽭","矛","⽮","矢","⽯","石","⽰","示","⽱","禸","⽲","禾","⽳","穴","⽴","立","⽵","竹","⽶","米","⽷","糸","⽸","缶","⽹","网","⽺","羊","⽻","羽","⽼","老","⽽","而","⽾","耒","⽿","耳","⾀","聿","⾁","肉","⾂","臣","⾃","自","⾄","至","⾅","臼","⾆","舌","⾇","舛","⾈","舟","⾉","艮","⾊","色","⾋","艸","⾌","虍","⾍","虫","⾎","血","⾏","行","⾐","衣","⾑","襾","⾒","見","⾓","角","⾔","言","⾕","谷","⾖","豆","⾗","豕","⾘","豸","⾙","貝","⾚","赤","⾛","走","⾜","足","⾝","身","⾞","車","⾟","辛","⾠","辰","⾡","辵","⾢","邑","⾣","酉","⾤","釆","⾥","里","⾦","金","⾧","長","⾨","門","⾩","阜","⾪","隶","⾫","隹","⾬","雨","⾭","靑","⾮","非","⾯","面","⾰","革","⾱","韋","⾲","韭","⾳","音","⾴","頁","⾵","風","⾶","飛","⾷","食","⾸","首","⾹","香","⾺","馬","⾻","骨","⾼","高","⾽","髟","⾾","鬥","⾿","鬯","⿀","鬲","⿁","鬼","⿂","魚","⿃","鳥","⿄","鹵","⿅","鹿","⿆","麥","⿇","麻","⿈","黃","⿉","黍","⿊","黑","⿋","黹","⿌","黽","⿍","鼎","⿎","鼓","⿏","鼠","⿐","鼻","⿑","齊","⿒","齒","⿓","龍","⿔","龜","⿕","龠","〶","〒","〸","十","〹","卄","〺","卅","゛"," ゙","゜"," ゚","ㄱ","ᄀ","ㄲ","ᄁ","ㄳ","ᆪ","ㄴ","ᄂ","ㄵ","ᆬ","ㄶ","ᆭ","ㄷ","ᄃ","ㄸ","ᄄ","ㄹ","ᄅ","ㄺ","ᆰ","ㄻ","ᆱ","ㄼ","ᆲ","ㄽ","ᆳ","ㄾ","ᆴ","ㄿ","ᆵ","ㅀ","ᄚ","ㅁ","ᄆ","ㅂ","ᄇ","ㅃ","ᄈ","ㅄ","ᄡ","ㅅ","ᄉ","ㅆ","ᄊ","ㅇ","ᄋ","ㅈ","ᄌ","ㅉ","ᄍ","ㅊ","ᄎ","ㅋ","ᄏ","ㅌ","ᄐ","ㅍ","ᄑ","ㅎ","ᄒ","ㅏ","ᅡ","ㅐ","ᅢ","ㅑ","ᅣ","ㅒ","ᅤ","ㅓ","ᅥ","ㅔ","ᅦ","ㅕ","ᅧ","ㅖ","ᅨ","ㅗ","ᅩ","ㅘ","ᅪ","ㅙ","ᅫ","ㅚ","ᅬ","ㅛ","ᅭ","ㅜ","ᅮ","ㅝ","ᅯ","ㅞ","ᅰ","ㅟ","ᅱ","ㅠ","ᅲ","ㅡ","ᅳ","ㅢ","ᅴ","ㅣ","ᅵ","ㅤ","ᅠ","ㅥ","ᄔ","ㅦ","ᄕ","ㅧ","ᇇ","ㅨ","ᇈ","ㅩ","ᇌ","ㅪ","ᇎ","ㅫ","ᇓ","ㅬ","ᇗ","ㅭ","ᇙ","ㅮ","ᄜ","ㅯ","ᇝ","ㅰ","ᇟ","ㅱ","ᄝ","ㅲ","ᄞ","ㅳ","ᄠ","ㅴ","ᄢ","ㅵ","ᄣ","ㅶ","ᄧ","ㅷ","ᄩ","ㅸ","ᄫ","ㅹ","ᄬ","ㅺ","ᄭ","ㅻ","ᄮ","ㅼ","ᄯ","ㅽ","ᄲ","ㅾ","ᄶ","ㅿ","ᅀ","ㆀ","ᅇ","ㆁ","ᅌ","ㆂ","ᇱ","ㆃ","ᇲ","ㆄ","ᅗ","ㆅ","ᅘ","ㆆ","ᅙ","ㆇ","ᆄ","ㆈ","ᆅ","ㆉ","ᆈ","ㆊ","ᆑ","ㆋ","ᆒ","ㆌ","ᆔ","ㆍ","ᆞ","ㆎ","ᆡ","㈀","(ᄀ)","㈁","(ᄂ)","㈂","(ᄃ)","㈃","(ᄅ)","㈄","(ᄆ)","㈅","(ᄇ)","㈆","(ᄉ)","㈇","(ᄋ)","㈈","(ᄌ)","㈉","(ᄎ)","㈊","(ᄏ)","㈋","(ᄐ)","㈌","(ᄑ)","㈍","(ᄒ)","㈎","(가)","㈏","(나)","㈐","(다)","㈑","(라)","㈒","(마)","㈓","(바)","㈔","(사)","㈕","(아)","㈖","(자)","㈗","(차)","㈘","(카)","㈙","(타)","㈚","(파)","㈛","(하)","㈜","(주)","㈝","(오전)","㈞","(오후)","㈠","(一)","㈡","(二)","㈢","(三)","㈣","(四)","㈤","(五)","㈥","(六)","㈦","(七)","㈧","(八)","㈨","(九)","㈩","(十)","㈪","(月)","㈫","(火)","㈬","(水)","㈭","(木)","㈮","(金)","㈯","(土)","㈰","(日)","㈱","(株)","㈲","(有)","㈳","(社)","㈴","(名)","㈵","(特)","㈶","(財)","㈷","(祝)","㈸","(労)","㈹","(代)","㈺","(呼)","㈻","(学)","㈼","(監)","㈽","(企)","㈾","(資)","㈿","(協)","㉀","(祭)","㉁","(休)","㉂","(自)","㉃","(至)","㋀","1月","㋁","2月","㋂","3月","㋃","4月","㋄","5月","㋅","6月","㋆","7月","㋇","8月","㋈","9月","㋉","10月","㋊","11月","㋋","12月","㍘","0点","㍙","1点","㍚","2点","㍛","3点","㍜","4点","㍝","5点","㍞","6点","㍟","7点","㍠","8点","㍡","9点","㍢","10点","㍣","11点","㍤","12点","㍥","13点","㍦","14点","㍧","15点","㍨","16点","㍩","17点","㍪","18点","㍫","19点","㍬","20点","㍭","21点","㍮","22点","㍯","23点","㍰","24点","㏠","1日","㏡","2日","㏢","3日","㏣","4日","㏤","5日","㏥","6日","㏦","7日","㏧","8日","㏨","9日","㏩","10日","㏪","11日","㏫","12日","㏬","13日","㏭","14日","㏮","15日","㏯","16日","㏰","17日","㏱","18日","㏲","19日","㏳","20日","㏴","21日","㏵","22日","㏶","23日","㏷","24日","㏸","25日","㏹","26日","㏺","27日","㏻","28日","㏼","29日","㏽","30日","㏾","31日","ﬀ","ff","ﬁ","fi","ﬂ","fl","ﬃ","ffi","ﬄ","ffl","ﬅ","ſt","ﬆ","st","ﬓ","մն","ﬔ","մե","ﬕ","մի","ﬖ","վն","ﬗ","մխ","ﭏ","אל","ﭐ","ٱ","ﭑ","ٱ","ﭒ","ٻ","ﭓ","ٻ","ﭔ","ٻ","ﭕ","ٻ","ﭖ","پ","ﭗ","پ","ﭘ","پ","ﭙ","پ","ﭚ","ڀ","ﭛ","ڀ","ﭜ","ڀ","ﭝ","ڀ","ﭞ","ٺ","ﭟ","ٺ","ﭠ","ٺ","ﭡ","ٺ","ﭢ","ٿ","ﭣ","ٿ","ﭤ","ٿ","ﭥ","ٿ","ﭦ","ٹ","ﭧ","ٹ","ﭨ","ٹ","ﭩ","ٹ","ﭪ","ڤ","ﭫ","ڤ","ﭬ","ڤ","ﭭ","ڤ","ﭮ","ڦ","ﭯ","ڦ","ﭰ","ڦ","ﭱ","ڦ","ﭲ","ڄ","ﭳ","ڄ","ﭴ","ڄ","ﭵ","ڄ","ﭶ","ڃ","ﭷ","ڃ","ﭸ","ڃ","ﭹ","ڃ","ﭺ","چ","ﭻ","چ","ﭼ","چ","ﭽ","چ","ﭾ","ڇ","ﭿ","ڇ","ﮀ","ڇ","ﮁ","ڇ","ﮂ","ڍ","ﮃ","ڍ","ﮄ","ڌ","ﮅ","ڌ","ﮆ","ڎ","ﮇ","ڎ","ﮈ","ڈ","ﮉ","ڈ","ﮊ","ژ","ﮋ","ژ","ﮌ","ڑ","ﮍ","ڑ","ﮎ","ک","ﮏ","ک","ﮐ","ک","ﮑ","ک","ﮒ","گ","ﮓ","گ","ﮔ","گ","ﮕ","گ","ﮖ","ڳ","ﮗ","ڳ","ﮘ","ڳ","ﮙ","ڳ","ﮚ","ڱ","ﮛ","ڱ","ﮜ","ڱ","ﮝ","ڱ","ﮞ","ں","ﮟ","ں","ﮠ","ڻ","ﮡ","ڻ","ﮢ","ڻ","ﮣ","ڻ","ﮤ","ۀ","ﮥ","ۀ","ﮦ","ہ","ﮧ","ہ","ﮨ","ہ","ﮩ","ہ","ﮪ","ھ","ﮫ","ھ","ﮬ","ھ","ﮭ","ھ","ﮮ","ے","ﮯ","ے","ﮰ","ۓ","ﮱ","ۓ","ﯓ","ڭ","ﯔ","ڭ","ﯕ","ڭ","ﯖ","ڭ","ﯗ","ۇ","ﯘ","ۇ","ﯙ","ۆ","ﯚ","ۆ","ﯛ","ۈ","ﯜ","ۈ","ﯝ","ٷ","ﯞ","ۋ","ﯟ","ۋ","ﯠ","ۅ","ﯡ","ۅ","ﯢ","ۉ","ﯣ","ۉ","ﯤ","ې","ﯥ","ې","ﯦ","ې","ﯧ","ې","ﯨ","ى","ﯩ","ى","ﯪ","ئا","ﯫ","ئا","ﯬ","ئە","ﯭ","ئە","ﯮ","ئو","ﯯ","ئو","ﯰ","ئۇ","ﯱ","ئۇ","ﯲ","ئۆ","ﯳ","ئۆ","ﯴ","ئۈ","ﯵ","ئۈ","ﯶ","ئې","ﯷ","ئې","ﯸ","ئې","ﯹ","ئى","ﯺ","ئى","ﯻ","ئى","ﯼ","ی","ﯽ","ی","ﯾ","ی","ﯿ","ی","ﰀ","ئج","ﰁ","ئح","ﰂ","ئم","ﰃ","ئى","ﰄ","ئي","ﰅ","بج","ﰆ","بح","ﰇ","بخ","ﰈ","بم","ﰉ","بى","ﰊ","بي","ﰋ","تج","ﰌ","تح","ﰍ","تخ","ﰎ","تم","ﰏ","تى","ﰐ","تي","ﰑ","ثج","ﰒ","ثم","ﰓ","ثى","ﰔ","ثي","ﰕ","جح","ﰖ","جم","ﰗ","حج","ﰘ","حم","ﰙ","خج","ﰚ","خح","ﰛ","خم","ﰜ","سج","ﰝ","سح","ﰞ","سخ","ﰟ","سم","ﰠ","صح","ﰡ","صم","ﰢ","ضج","ﰣ","ضح","ﰤ","ضخ","ﰥ","ضم","ﰦ","طح","ﰧ","طم","ﰨ","ظم","ﰩ","عج","ﰪ","عم","ﰫ","غج","ﰬ","غم","ﰭ","فج","ﰮ","فح","ﰯ","فخ","ﰰ","فم","ﰱ","فى","ﰲ","في","ﰳ","قح","ﰴ","قم","ﰵ","قى","ﰶ","قي","ﰷ","كا","ﰸ","كج","ﰹ","كح","ﰺ","كخ","ﰻ","كل","ﰼ","كم","ﰽ","كى","ﰾ","كي","ﰿ","لج","ﱀ","لح","ﱁ","لخ","ﱂ","لم","ﱃ","لى","ﱄ","لي","ﱅ","مج","ﱆ","مح","ﱇ","مخ","ﱈ","مم","ﱉ","مى","ﱊ","مي","ﱋ","نج","ﱌ","نح","ﱍ","نخ","ﱎ","نم","ﱏ","نى","ﱐ","ني","ﱑ","هج","ﱒ","هم","ﱓ","هى","ﱔ","هي","ﱕ","يج","ﱖ","يح","ﱗ","يخ","ﱘ","يم","ﱙ","يى","ﱚ","يي","ﱛ","ذٰ","ﱜ","رٰ","ﱝ","ىٰ","ﱞ"," ٌّ","ﱟ"," ٍّ","ﱠ"," َّ","ﱡ"," ُّ","ﱢ"," ِّ","ﱣ"," ّٰ","ﱤ","ئر","ﱥ","ئز","ﱦ","ئم","ﱧ","ئن","ﱨ","ئى","ﱩ","ئي","ﱪ","بر","ﱫ","بز","ﱬ","بم","ﱭ","بن","ﱮ","بى","ﱯ","بي","ﱰ","تر","ﱱ","تز","ﱲ","تم","ﱳ","تن","ﱴ","تى","ﱵ","تي","ﱶ","ثر","ﱷ","ثز","ﱸ","ثم","ﱹ","ثن","ﱺ","ثى","ﱻ","ثي","ﱼ","فى","ﱽ","في","ﱾ","قى","ﱿ","قي","ﲀ","كا","ﲁ","كل","ﲂ","كم","ﲃ","كى","ﲄ","كي","ﲅ","لم","ﲆ","لى","ﲇ","لي","ﲈ","ما","ﲉ","مم","ﲊ","نر","ﲋ","نز","ﲌ","نم","ﲍ","نن","ﲎ","نى","ﲏ","ني","ﲐ","ىٰ","ﲑ","ير","ﲒ","يز","ﲓ","يم","ﲔ","ين","ﲕ","يى","ﲖ","يي","ﲗ","ئج","ﲘ","ئح","ﲙ","ئخ","ﲚ","ئم","ﲛ","ئه","ﲜ","بج","ﲝ","بح","ﲞ","بخ","ﲟ","بم","ﲠ","به","ﲡ","تج","ﲢ","تح","ﲣ","تخ","ﲤ","تم","ﲥ","ته","ﲦ","ثم","ﲧ","جح","ﲨ","جم","ﲩ","حج","ﲪ","حم","ﲫ","خج","ﲬ","خم","ﲭ","سج","ﲮ","سح","ﲯ","سخ","ﲰ","سم","ﲱ","صح","ﲲ","صخ","ﲳ","صم","ﲴ","ضج","ﲵ","ضح","ﲶ","ضخ","ﲷ","ضم","ﲸ","طح","ﲹ","ظم","ﲺ","عج","ﲻ","عم","ﲼ","غج","ﲽ","غم","ﲾ","فج","ﲿ","فح","ﳀ","فخ","ﳁ","فم","ﳂ","قح","ﳃ","قم","ﳄ","كج","ﳅ","كح","ﳆ","كخ","ﳇ","كل","ﳈ","كم","ﳉ","لج","ﳊ","لح","ﳋ","لخ","ﳌ","لم","ﳍ","له","ﳎ","مج","ﳏ","مح","ﳐ","مخ","ﳑ","مم","ﳒ","نج","ﳓ","نح","ﳔ","نخ","ﳕ","نم","ﳖ","نه","ﳗ","هج","ﳘ","هم","ﳙ","هٰ","ﳚ","يج","ﳛ","يح","ﳜ","يخ","ﳝ","يم","ﳞ","يه","ﳟ","ئم","ﳠ","ئه","ﳡ","بم","ﳢ","به","ﳣ","تم","ﳤ","ته","ﳥ","ثم","ﳦ","ثه","ﳧ","سم","ﳨ","سه","ﳩ","شم","ﳪ","شه","ﳫ","كل","ﳬ","كم","ﳭ","لم","ﳮ","نم","ﳯ","نه","ﳰ","يم","ﳱ","يه","ﳲ","ـَّ","ﳳ","ـُّ","ﳴ","ـِّ","ﳵ","طى","ﳶ","طي","ﳷ","عى","ﳸ","عي","ﳹ","غى","ﳺ","غي","ﳻ","سى","ﳼ","سي","ﳽ","شى","ﳾ","شي","ﳿ","حى","ﴀ","حي","ﴁ","جى","ﴂ","جي","ﴃ","خى","ﴄ","خي","ﴅ","صى","ﴆ","صي","ﴇ","ضى","ﴈ","ضي","ﴉ","شج","ﴊ","شح","ﴋ","شخ","ﴌ","شم","ﴍ","شر","ﴎ","سر","ﴏ","صر","ﴐ","ضر","ﴑ","طى","ﴒ","طي","ﴓ","عى","ﴔ","عي","ﴕ","غى","ﴖ","غي","ﴗ","سى","ﴘ","سي","ﴙ","شى","ﴚ","شي","ﴛ","حى","ﴜ","حي","ﴝ","جى","ﴞ","جي","ﴟ","خى","ﴠ","خي","ﴡ","صى","ﴢ","صي","ﴣ","ضى","ﴤ","ضي","ﴥ","شج","ﴦ","شح","ﴧ","شخ","ﴨ","شم","ﴩ","شر","ﴪ","سر","ﴫ","صر","ﴬ","ضر","ﴭ","شج","ﴮ","شح","ﴯ","شخ","ﴰ","شم","ﴱ","سه","ﴲ","شه","ﴳ","طم","ﴴ","سج","ﴵ","سح","ﴶ","سخ","ﴷ","شج","ﴸ","شح","ﴹ","شخ","ﴺ","طم","ﴻ","ظم","ﴼ","اً","ﴽ","اً","ﵐ","تجم","ﵑ","تحج","ﵒ","تحج","ﵓ","تحم","ﵔ","تخم","ﵕ","تمج","ﵖ","تمح","ﵗ","تمخ","ﵘ","جمح","ﵙ","جمح","ﵚ","حمي","ﵛ","حمى","ﵜ","سحج","ﵝ","سجح","ﵞ","سجى","ﵟ","سمح","ﵠ","سمح","ﵡ","سمج","ﵢ","سمم","ﵣ","سمم","ﵤ","صحح","ﵥ","صحح","ﵦ","صمم","ﵧ","شحم","ﵨ","شحم","ﵩ","شجي","ﵪ","شمخ","ﵫ","شمخ","ﵬ","شمم","ﵭ","شمم","ﵮ","ضحى","ﵯ","ضخم","ﵰ","ضخم","ﵱ","طمح","ﵲ","طمح","ﵳ","طمم","ﵴ","طمي","ﵵ","عجم","ﵶ","عمم","ﵷ","عمم","ﵸ","عمى","ﵹ","غمم","ﵺ","غمي","ﵻ","غمى","ﵼ","فخم","ﵽ","فخم","ﵾ","قمح","ﵿ","قمم","ﶀ","لحم","ﶁ","لحي","ﶂ","لحى","ﶃ","لجج","ﶄ","لجج","ﶅ","لخم","ﶆ","لخم","ﶇ","لمح","ﶈ","لمح","ﶉ","محج","ﶊ","محم","ﶋ","محي","ﶌ","مجح","ﶍ","مجم","ﶎ","مخج","ﶏ","مخم","ﶒ","مجخ","ﶓ","همج","ﶔ","همم","ﶕ","نحم","ﶖ","نحى","ﶗ","نجم","ﶘ","نجم","ﶙ","نجى","ﶚ","نمي","ﶛ","نمى","ﶜ","يمم","ﶝ","يمم","ﶞ","بخي","ﶟ","تجي","ﶠ","تجى","ﶡ","تخي","ﶢ","تخى","ﶣ","تمي","ﶤ","تمى","ﶥ","جمي","ﶦ","جحى","ﶧ","جمى","ﶨ","سخى","ﶩ","صحي","ﶪ","شحي","ﶫ","ضحي","ﶬ","لجي","ﶭ","لمي","ﶮ","يحي","ﶯ","يجي","ﶰ","يمي","ﶱ","ممي","ﶲ","قمي","ﶳ","نحي","ﶴ","قمح","ﶵ","لحم","ﶶ","عمي","ﶷ","كمي","ﶸ","نجح","ﶹ","مخي","ﶺ","لجم","ﶻ","كمم","ﶼ","لجم","ﶽ","نجح","ﶾ","جحي","ﶿ","حجي","ﷀ","مجي","ﷁ","فمي","ﷂ","بحي","ﷃ","كمم","ﷄ","عجم","ﷅ","صمم","ﷆ","سخي","ﷇ","نجي","﹉","‾","﹊","‾","﹋","‾","﹌","‾","﹍","_","﹎","_","﹏","_","ﺀ","ء","ﺁ","آ","ﺂ","آ","ﺃ","أ","ﺄ","أ","ﺅ","ؤ","ﺆ","ؤ","ﺇ","إ","ﺈ","إ","ﺉ","ئ","ﺊ","ئ","ﺋ","ئ","ﺌ","ئ","ﺍ","ا","ﺎ","ا","ﺏ","ب","ﺐ","ب","ﺑ","ب","ﺒ","ب","ﺓ","ة","ﺔ","ة","ﺕ","ت","ﺖ","ت","ﺗ","ت","ﺘ","ت","ﺙ","ث","ﺚ","ث","ﺛ","ث","ﺜ","ث","ﺝ","ج","ﺞ","ج","ﺟ","ج","ﺠ","ج","ﺡ","ح","ﺢ","ح","ﺣ","ح","ﺤ","ح","ﺥ","خ","ﺦ","خ","ﺧ","خ","ﺨ","خ","ﺩ","د","ﺪ","د","ﺫ","ذ","ﺬ","ذ","ﺭ","ر","ﺮ","ر","ﺯ","ز","ﺰ","ز","ﺱ","س","ﺲ","س","ﺳ","س","ﺴ","س","ﺵ","ش","ﺶ","ش","ﺷ","ش","ﺸ","ش","ﺹ","ص","ﺺ","ص","ﺻ","ص","ﺼ","ص","ﺽ","ض","ﺾ","ض","ﺿ","ض","ﻀ","ض","ﻁ","ط","ﻂ","ط","ﻃ","ط","ﻄ","ط","ﻅ","ظ","ﻆ","ظ","ﻇ","ظ","ﻈ","ظ","ﻉ","ع","ﻊ","ع","ﻋ","ع","ﻌ","ع","ﻍ","غ","ﻎ","غ","ﻏ","غ","ﻐ","غ","ﻑ","ف","ﻒ","ف","ﻓ","ف","ﻔ","ف","ﻕ","ق","ﻖ","ق","ﻗ","ق","ﻘ","ق","ﻙ","ك","ﻚ","ك","ﻛ","ك","ﻜ","ك","ﻝ","ل","ﻞ","ل","ﻟ","ل","ﻠ","ل","ﻡ","م","ﻢ","م","ﻣ","م","ﻤ","م","ﻥ","ن","ﻦ","ن","ﻧ","ن","ﻨ","ن","ﻩ","ه","ﻪ","ه","ﻫ","ه","ﻬ","ه","ﻭ","و","ﻮ","و","ﻯ","ى","ﻰ","ى","ﻱ","ي","ﻲ","ي","ﻳ","ي","ﻴ","ي","ﻵ","لآ","ﻶ","لآ","ﻷ","لأ","ﻸ","لأ","ﻹ","لإ","ﻺ","لإ","ﻻ","لا","ﻼ","لا"]}))
function u(e){var t,r,a=e.length
if(a<=1||!((t=e.charCodeAt(0))>=(r=s[13]).begin&&t<r.end||t>=(r=s[11]).begin&&t<r.end))return e
for(var n="",i=a-1;i>=0;i--)n+=e[i]
return n}},(e,t,r)=>{"use strict"
function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.FontRendererFactory=void 0
var n=r(4),i=r(160),o=r(163),s=r(162),c=r(142)
function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,a=d(e)
if(t){var n=d(this).constructor
r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments)
return f(this,r)}}function f(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var r=0;r<t.length;r++){var a=t[r]
a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function m(e,t,r){return t&&g(e.prototype,t),r&&g(e,r),e}var v=function(){function e(e,t){return e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3]}function t(e,t){return e[t]<<8|e[t+1]}function r(e){var t=e.length,r=32768
return t<1240?r=107:t<33900&&(r=1131),r}function a(r,a,i){var o,s,c,l=1===t(r,a+2)?e(r,a+8):e(r,a+16),u=t(r,a+l)
if(4===u){t(r,a+l+2)
var h=t(r,a+l+6)>>1
for(s=a+l+14,o=[],c=0;c<h;c++,s+=2)o[c]={end:t(r,s)}
for(s+=2,c=0;c<h;c++,s+=2)o[c].start=t(r,s)
for(c=0;c<h;c++,s+=2)o[c].idDelta=t(r,s)
for(c=0;c<h;c++,s+=2){var f=t(r,s)
if(0!==f){o[c].ids=[]
for(var d=0,p=o[c].end-o[c].start+1;d<p;d++)o[c].ids[d]=t(r,s+f),f+=2}}return o}if(12===u){e(r,a+l+4)
var g=e(r,a+l+12)
for(s=a+l+16,o=[],c=0;c<g;c++)o.push({start:e(r,s),end:e(r,s+4),idDelta:e(r,s+8)-e(r,s)}),s+=12
return o}throw new n.FormatError("unsupported cmap: ".concat(u))}function u(e,t,r,a){var n=new i.CFFParser(new c.Stream(e,t,r-t),{},a).parse()
return{glyphs:n.charStrings.objects,subrs:n.topDict.privateDict&&n.topDict.privateDict.subrsIndex&&n.topDict.privateDict.subrsIndex.objects,gsubrs:n.globalSubrIndex&&n.globalSubrIndex.objects,isCFFCIDFont:n.isCIDFont,fdSelect:n.fdSelect,fdArray:n.fdArray}}function f(e,t){for(var r=t.codePointAt(0),a=0,n=0,i=e.length-1;n<i;){var o=n+i+1>>1
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
else{var P={flags:1,x:(I[0].x+I[I.length-1].x)/2,y:(I[0].y+I[I.length-1].y)/2}
I.unshift(P),I.push(P)}for(a(I[0].x,I[0].y),w=1,k=I.length;w<k;w++)1&I[w].flags?n(I[w].x,I[w].y):1&I[w+1].flags?(i(I[w].x,I[w].y,I[w+1].x,I[w+1].y),w++):i(I[w].x,I[w].y,(I[w].x+I[w+1].x)/2,(I[w].y+I[w+1].y)/2)
O=T+1}}}function g(e,t,a,i){function o(e,r){t.push({cmd:"moveTo",args:[e,r]})}function c(e,r){t.push({cmd:"lineTo",args:[e,r]})}function l(e,r,a,n,i,o){t.push({cmd:"bezierCurveTo",args:[e,r,a,n,i,o]})}var u=[],h=0,d=0,p=0;(function e(m){for(var v=0;v<m.length;){var b,y,w,k,S,x,C,A,O=!1,T=m[v++]
switch(T){case 1:case 3:p+=u.length>>1,O=!0
break
case 4:d+=u.pop(),o(h,d),O=!0
break
case 5:for(;u.length>0;)h+=u.shift(),d+=u.shift(),c(h,d)
break
case 6:for(;u.length>0&&(c(h+=u.shift(),d),0!==u.length);)d+=u.shift(),c(h,d)
break
case 7:for(;u.length>0&&(d+=u.shift(),c(h,d),0!==u.length);)c(h+=u.shift(),d)
break
case 8:for(;u.length>0;)b=h+u.shift(),w=d+u.shift(),y=b+u.shift(),k=w+u.shift(),h=y+u.shift(),d=k+u.shift(),l(b,w,y,k,h,d)
break
case 10:if(C=u.pop(),A=null,a.isCFFCIDFont){var I=a.fdSelect.getFDIndex(i)
if(I>=0&&I<a.fdArray.length){var P=a.fdArray[I],E=void 0
P.privateDict&&P.privateDict.subrsIndex&&(E=P.privateDict.subrsIndex.objects),E&&(A=E[C+=r(E)])}else(0,n.warn)("Invalid fd index for glyph index.")}else A=a.subrs[C+a.subrsBias]
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
default:throw new n.FormatError("unknown operator: 12 ".concat(T))}break
case 14:if(u.length>=4){var R=u.pop(),B=u.pop()
d=u.pop(),h=u.pop(),t.push({cmd:"save"}),t.push({cmd:"translate",args:[h,d]})
var M=f(a.cmap,String.fromCharCode(a.glyphNameMap[s.StandardEncoding[R]]))
g(a.glyphs[M.glyphId],t,a,M.glyphId),t.push({cmd:"restore"}),M=f(a.cmap,String.fromCharCode(a.glyphNameMap[s.StandardEncoding[B]])),g(a.glyphs[M.glyphId],t,a,M.glyphId)}return
case 18:p+=u.length>>1,O=!0
break
case 19:case 20:v+=(p+=u.length>>1)+7>>3,O=!0
break
case 21:d+=u.pop(),o(h+=u.pop(),d),O=!0
break
case 22:o(h+=u.pop(),d),O=!0
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
case 29:C=u.pop()+a.gsubrsBias,(A=a.gsubrs[C])&&e(A)
break
case 30:for(;u.length>0&&(b=h,w=d+u.shift(),y=b+u.shift(),k=w+u.shift(),h=y+u.shift(),d=k+(1===u.length?u.shift():0),l(b,w,y,k,h,d),0!==u.length);)b=h+u.shift(),w=d,y=b+u.shift(),k=w+u.shift(),d=k+u.shift(),l(b,w,y,k,h=y+(1===u.length?u.shift():0),d)
break
case 31:for(;u.length>0&&(b=h+u.shift(),w=d,y=b+u.shift(),k=w+u.shift(),d=k+u.shift(),l(b,w,y,k,h=y+(1===u.length?u.shift():0),d),0!==u.length);)b=h,w=d+u.shift(),y=b+u.shift(),k=w+u.shift(),h=y+u.shift(),d=k+(1===u.length?u.shift():0),l(b,w,y,k,h,d)
break
default:if(T<32)throw new n.FormatError("unknown operator: ".concat(T))
T<247?u.push(T-139):T<251?u.push(256*(T-247)+m[v++]+108):T<255?u.push(256*-(T-251)-m[v++]-108):(u.push((m[v]<<24|m[v+1]<<16|m[v+2]<<8|m[v+3])/65536),v+=4)}O&&(u.length=0)}})(e)}var v=[],b=function(){function e(t){p(this,e),this.constructor===e&&(0,n.unreachable)("Cannot initialize CompiledFont."),this.fontMatrix=t,this.compiledGlyphs=Object.create(null),this.compiledCharCodeToGlyphId=Object.create(null)}return m(e,[{key:"getPathJs",value:function(e){var t=f(this.cmap,e),r=this.compiledGlyphs[t.glyphId]
return r||(r=this.compileGlyph(this.glyphs[t.glyphId],t.glyphId),this.compiledGlyphs[t.glyphId]=r),void 0===this.compiledCharCodeToGlyphId[t.charCode]&&(this.compiledCharCodeToGlyphId[t.charCode]=t.glyphId),r}},{key:"compileGlyph",value:function(e,t){if(!e||0===e.length||14===e[0])return v
var r=this.fontMatrix
if(this.isCFFCIDFont){var a=this.fdSelect.getFDIndex(t)
if(a>=0&&a<this.fdArray.length)r=this.fdArray[a].getByName("FontMatrix")||n.FONT_IDENTITY_MATRIX
else(0,n.warn)("Invalid fd index for glyph index.")}var i=[]
return i.push({cmd:"save"}),i.push({cmd:"transform",args:r.slice()}),i.push({cmd:"scale",args:["size","-size"]}),this.compileGlyphImpl(e,i,t),i.push({cmd:"restore"}),i}},{key:"compileGlyphImpl",value:function(){(0,n.unreachable)("Children classes should implement this.")}},{key:"hasBuiltPath",value:function(e){var t=f(this.cmap,e)
return void 0!==this.compiledGlyphs[t.glyphId]&&void 0!==this.compiledCharCodeToGlyphId[t.charCode]}}]),e}(),y=function(e){l(r,e)
var t=h(r)
function r(e,a,n){var i
return p(this,r),(i=t.call(this,n||[488e-6,0,0,488e-6,0,0])).glyphs=e,i.cmap=a,i}return m(r,[{key:"compileGlyphImpl",value:function(e,t){d(e,t,this)}}]),r}(b),w=function(e){l(a,e)
var t=h(a)
function a(e,n,i,s){var c
return p(this,a),(c=t.call(this,i||[.001,0,0,.001,0,0])).glyphs=e.glyphs,c.gsubrs=e.gsubrs||[],c.subrs=e.subrs||[],c.cmap=n,c.glyphNameMap=s||(0,o.getGlyphsUnicode)(),c.gsubrsBias=r(c.gsubrs),c.subrsBias=r(c.subrs),c.isCFFCIDFont=e.isCFFCIDFont,c.fdSelect=e.fdSelect,c.fdArray=e.fdArray,c}return m(a,[{key:"compileGlyphImpl",value:function(e,t,r){g(e,t,this,r)}}]),a}(b)
return{create:function(r,i){for(var o,s,c,l,h,f,d=new Uint8Array(r.data),p=t(d,4),g=0,m=12;g<p;g++,m+=16){var v=(0,n.bytesToString)(d.subarray(m,m+4)),b=e(d,m+8),k=e(d,m+12)
switch(v){case"cmap":o=a(d,b)
break
case"glyf":s=d.subarray(b,b+k)
break
case"loca":c=d.subarray(b,b+k)
break
case"head":f=t(d,b+18),h=t(d,b+50)
break
case"CFF ":l=u(d,b,b+k,i)}}if(s){var S=f?[1/f,0,0,1/f,0,0]:r.fontMatrix
return new y(function(e,t,r){var a,n
r?(a=4,n=function(e,t){return e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3]}):(a=2,n=function(e,t){return e[t]<<9|e[t+1]<<1})
for(var i=[],o=n(t,0),s=a;s<t.length;s+=a){var c=n(t,s)
i.push(e.subarray(o,c)),o=c}return i}(s,c,h),o,S)}return new w(l,o,r.fontMatrix,r.glyphNameMap)}}}()
t.FontRendererFactory=v},(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.Type1Parser=void 0
var a=r(162),n=r(138),i=r(142),o=r(4),s=function(){var e=[4],t=[5],r=[6],a=[7],n=[8],i=[12,35],s=[14],c=[21],l=[22],u=[30],h=[31]
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
t.Type1Parser=c},(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.getTilingPatternIR=function(e,t,r){var n=t.getArray("Matrix"),i=a.Util.normalizeRect(t.getArray("BBox")),o=t.get("XStep"),s=t.get("YStep"),c=t.get("PaintType"),l=t.get("TilingType")
if(i[2]-i[0]==0||i[3]-i[1]==0)throw new a.FormatError("Invalid getTilingPatternIR /BBox array: [".concat(i,"]."))
return["TilingPattern",r,e,n,i,o,s,c,l]},t.Pattern=void 0
var a=r(4),n=r(153),i=r(135),o=r(138),s=2,c=3,l=4,u=5,h=6,f=7,d=function(){function e(){(0,a.unreachable)("should not call Pattern constructor")}return e.prototype={getPattern:function(e){(0,a.unreachable)("Should not call Pattern.getStyle: ".concat(e))}},e.parseShading=function(e,t,r,n,d,g,m){var v=(0,i.isStream)(e)?e.dict:e,b=v.get("ShadingType")
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
else{for(var P,E=new Float32Array(l.numComps),_=new Float32Array(1),F=0;F<=10;F++){_[0]=h+F*T,O(_,0,E,0),P=l.getRgb(E,0)
var R=a.Util.makeHexColor(P[0],P[1],P[2])
I.push([F/10,R])}var B="transparent"
e.has("Background")&&(P=l.getRgb(e.get("Background"),0),B=a.Util.makeHexColor(P[0],P[1],P[2])),g||(I.unshift([0,B]),I[1][0]+=p.SMALL_NUMBER),m||(I[I.length-1][0]-=p.SMALL_NUMBER,I.push([1,B])),this.colorStops=I}}return e.prototype={getIR:function(){var e,t,r,n,i,o=this.coordsArr,l=this.shadingType
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
for(var I=0;I<=d;I++,b++)if(0!==T&&T!==p||0!==I&&I!==d){for(var P=0,E=0,_=0,F=0;F<=3;F++)for(var R=0;R<=3;R++,_++){var B=A[T][F]*O[I][R]
P+=i[s[_]][0]*B,E+=i[s[_]][1]*B}m[b]=i.length,i.push([P,E]),v[b]=o.length
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
for(a=0,n=d.length;a<n;a++)d[a]*=2,p[a]*=3}}(this)}return c.prototype={getIR:function(){return["Mesh",this.shadingType,this.coords,this.colors,this.figures,this.bounds,this.matrix,this.bbox,this.background]}},c}(),p.Dummy=function(){function e(){this.type="Pattern"}return e.prototype={getIR:function(){return["Dummy"]}},e}()},(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.isPDFFunction=function(e){var t
if("object"!==s(e))return!1
if((0,a.isDict)(e))t=e
else{if(!(0,a.isStream)(e))return!1
t=e.dict}return t.has("FunctionType")},t.PostScriptEvaluator=t.PostScriptCompiler=t.PDFFunctionFactory=void 0
var a=r(135),n=r(4),i=r(170),o=r(154)
function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var r=0;r<t.length;r++){var a=t[r]
a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var l=function(){function e(t){var r=t.xref,a=t.isEvalSupported,n=void 0===a||a;(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.xref=r,this.isEvalSupported=!1!==n}var t,r,i
return t=e,(r=[{key:"create",value:function(e){var t=this.getCached(e)
if(t)return t
var r=h.parse({xref:this.xref,isEvalSupported:this.isEvalSupported,fn:e instanceof a.Ref?this.xref.fetch(e):e})
return this._cache(e,r),r}},{key:"createFromArray",value:function(e){var t=this.getCached(e)
if(t)return t
var r=h.parseArray({xref:this.xref,isEvalSupported:this.isEvalSupported,fnObj:e instanceof a.Ref?this.xref.fetch(e):e})
return this._cache(e,r),r}},{key:"getCached",value:function(e){var t
if(e instanceof a.Ref?t=e:e instanceof a.Dict?t=e.objId:(0,a.isStream)(e)&&(t=e.dict&&e.dict.objId),t){var r=this._localFunctionCache.getByRef(t)
if(r)return r}return null}},{key:"_cache",value:function(e,t){if(!t)throw new Error('PDFFunctionFactory._cache - expected "parsedFunction" argument.')
var r
e instanceof a.Ref?r=e:e instanceof a.Dict?r=e.objId:(0,a.isStream)(e)&&(r=e.dict&&e.dict.objId),r&&this._localFunctionCache.set(null,r,t)}},{key:"_localFunctionCache",get:function(){return(0,n.shadow)(this,"_localFunctionCache",new o.LocalFunctionCache)}}])&&c(t.prototype,r),i&&c(t,i),e}()
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
for(o=0;o<c;++o){var k=l[o][0],S=l[o][1],x=r(Math.min(Math.max(e[a+o],k),S),k,S,u[o][0],u[o][1]),C=d[o],A=(x=Math.min(Math.max(x,0),C-1))<C-1?Math.floor(x):x-1,O=A+1-x,T=x-A,I=A*y,P=I+y
for(s=0;s<m;s++)s&w?(v[s]*=T,b[s]+=P):(v[s]*=O,b[s]+=I)
y*=C,w<<=1}for(s=0;s<p;++s){var E=0
for(o=0;o<m;o++)E+=f[b[o]+s]*v[o]
E=r(E,0,1,h[s][0],h[s][1]),n[i+s]=Math.min(Math.max(E,g[s][0]),g[s][1])}}},constructInterpolated:function(e){e.xref,e.isEvalSupported,e.fn
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
t.PostScriptCompiler=p},(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.PostScriptParser=t.PostScriptLexer=void 0
var a=r(4),n=r(135),i=r(138)
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
t.PostScriptLexer=d},(e,t,r)=>{"use strict"
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
for(m=0;m<g;++m)if("ON"===d[m]){var I=c(d,m+1,"ON"),P=C
m>0&&(P=d[m-1])
var E=A
I+1<g&&(E=d[I+1]),"L"!==P&&(P="R"),"L"!==E&&(E="R"),P===E&&l(d,m,I,P),m=I-1}for(m=0;m<g;++m)"ON"===d[m]&&(d[m]=x)
for(m=0;m<g;++m)S=d[m],s(k[m])?"R"===S?k[m]+=1:"AN"!==S&&"EN"!==S||(k[m]+=2):"L"!==S&&"AN"!==S&&"EN"!==S||(k[m]+=1)
var _,F=-1,R=99
for(m=0,v=k.length;m<v;++m)_=k[m],F<_&&(F=_),R>_&&o(_)&&(R=_)
for(_=F;_>=R;--_){var B=-1
for(m=0,v=k.length;m<v;++m)k[m]<_?B>=0&&(u(f,B,m),B=-1):B<0&&(B=m)
B>=0&&u(f,B,k.length)}for(m=0,v=f.length;m<v;++m){var M=f[m]
"<"!==M&&">"!==M||(f[m]="")}return h(f.join(""),p)}
var a=r(4),n=["BN","BN","BN","BN","BN","BN","BN","BN","BN","S","B","S","WS","B","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","B","B","B","S","WS","ON","ON","ET","ET","ET","ON","ON","ON","ON","ON","ES","CS","ES","CS","CS","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","CS","ON","ON","ON","ON","ON","ON","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","ON","ON","ON","ON","ON","ON","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","ON","ON","ON","ON","BN","BN","BN","BN","BN","BN","B","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","CS","ON","ET","ET","ET","ET","ON","ON","ON","ON","L","ON","ON","BN","ON","ON","ET","ET","EN","EN","ON","L","ON","ON","ON","EN","L","ON","ON","ON","ON","ON","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","ON","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","ON","L","L","L","L","L","L","L","L"],i=["AN","AN","AN","AN","AN","AN","ON","ON","AL","ET","ET","AL","CS","AL","ON","ON","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AL","AL","","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AN","AN","AN","AN","AN","AN","AN","AN","AN","AN","ET","AN","AN","AL","AL","AL","NSM","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AN","ON","NSM","NSM","NSM","NSM","NSM","NSM","AL","AL","NSM","NSM","ON","NSM","NSM","NSM","NSM","AL","AL","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","AL","AL","AL","AL","AL","AL"]
function o(e){return 0!=(1&e)}function s(e){return 0==(1&e)}function c(e,t,r){for(var a=t,n=e.length;a<n;++a)if(e[a]!==r)return a
return a}function l(e,t,r,a){for(var n=t;n<r;++n)e[n]=a}function u(e,t,r){for(var a=t,n=r-1;a<n;++a,--n){var i=e[a]
e[a]=e[n],e[n]=i}}function h(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a="ltr"
return r?a="ttb":t||(a="rtl"),{str:e,dir:a}}var f=[],d=[]},(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.getMetrics=void 0
var a=r(138),n=(0,a.getLookupTableFactory)((function(e){e.Courier=600,e["Courier-Bold"]=600,e["Courier-BoldOblique"]=600,e["Courier-Oblique"]=600,e.Helvetica=(0,a.getLookupTableFactory)((function(e){e.space=278,e.exclam=278,e.quotedbl=355,e.numbersign=556,e.dollar=556,e.percent=889,e.ampersand=667,e.quoteright=222,e.parenleft=333,e.parenright=333,e.asterisk=389,e.plus=584,e.comma=278,e.hyphen=333,e.period=278,e.slash=278,e.zero=556,e.one=556,e.two=556,e.three=556,e.four=556,e.five=556,e.six=556,e.seven=556,e.eight=556,e.nine=556,e.colon=278,e.semicolon=278,e.less=584,e.equal=584
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
t.getMetrics=n},(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.MurmurHash3_64=void 0
var a=r(4)
function n(e,t){for(var r=0;r<t.length;r++){var a=t[r]
a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var i=3285377520,o=4294901760,s=65535,c=function(){function e(t){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.h1=t?4294967295&t:i,this.h2=t?4294967295&t:i}var t,r,c
return t=e,(r=[{key:"update",value:function(e){var t,r
if((0,a.isString)(e)){t=new Uint8Array(2*e.length),r=0
for(var n=0,i=e.length;n<i;n++){var c=e.charCodeAt(n)
c<=255?t[r++]=c:(t[r++]=c>>>8,t[r++]=255&c)}}else{if(!(0,a.isArrayBuffer)(e))throw new Error("Wrong data format in MurmurHash3_64_update. Input must be a string or array.")
r=(t=e.slice()).byteLength}for(var l=r>>2,u=r-4*l,h=new Uint32Array(t.buffer,0,l),f=0,d=0,p=this.h1,g=this.h2,m=3432918353,v=461845907,b=11601,y=13715,w=0;w<l;w++)1&w?p=5*(p=(p^=f=(f=(f=(f=h[w])*m&o|f*b&s)<<15|f>>>17)*v&o|f*y&s)<<13|p>>>19)+3864292196:g=5*(g=(g^=d=(d=(d=(d=h[w])*m&o|d*b&s)<<15|d>>>17)*v&o|d*y&s)<<13|g>>>19)+3864292196
switch(f=0,u){case 3:f^=t[4*l+2]<<16
case 2:f^=t[4*l+1]<<8
case 1:f=(f=(f=(f^=t[4*l])*m&o|f*b&s)<<15|f>>>17)*v&o|f*y&s,1&l?p^=f:g^=f}this.h1=p,this.h2=g}},{key:"hexdigest",value:function(){var e=this.h1,t=this.h2
e=3981806797*(e^=t>>>1)&o|36045*e&s,e=444984403*(e^=(t=4283543511*t&o|(2950163797*(t<<16|e>>>16)&o)>>>16)>>>1)&o|60499*e&s
var r=((e^=(t=3301882366*t&o|(3120437893*(t<<16|e>>>16)&o)>>>16)>>>1)>>>0).toString(16),a=(t>>>0).toString(16)
return r.padStart(8,"0")+a.padStart(8,"0")}}])&&n(t.prototype,r),c&&n(t,c),e}()
t.MurmurHash3_64=c},(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.OperatorList=void 0
var a=r(4)
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
t.OperatorList=c},(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.PDFImage=void 0
var a,n=(a=r(2))&&a.__esModule?a:{default:a},i=r(4),o=r(135),s=r(153),c=r(142),l=r(148),u=r(151)
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
for(var T=this.colorSpace&&"Indexed"===this.colorSpace.name,I=0,P=0;I<this.decode.length;I+=2,++P){var E=this.decode[I],_=this.decode[I+1]
this.decodeCoefficients[P]=T?(_-E)/O:_-E,this.decodeAddends[P]=T?E:O*E}}if(f)this.smask=new e({xref:r,res:a,image:f,isInline:l,pdfFunctionFactory:v,localColorSpaceCache:b})
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
t.PDFImage=g},(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.incrementalUpdate=function(e){var t=e.originalData,r=e.xrefInfo,u=e.newRefs,f=e.xref,g=void 0===f?null:f,m=e.datasetsRef;(function(e,t,r){if(null===e||null===r)return
var n,s=r.fetchIfRef(e),l=(0,a.bytesToString)(s.getBytes()),u=new o.SimpleXMLParser({hasAttributes:!0}).parseFromString(l),h=c(t)
try{for(h.s();!(n=h.n()).done;){var f=n.value.xfa
if(f){var d=f.path,p=f.value
if(d){var g=u.documentElement.searchNode((0,i.parseXFAPath)(d),0)
g?g.childNodes=[new o.SimpleDOMNode("#text",p)]:(0,a.warn)("Node not found for path: ".concat(d))}}}}catch(w){h.e(w)}finally{h.f()}var m=[]
u.documentElement.dump(m)
var v=m.join(""),b=r.encrypt
if(b){v=b.createCipherTransform(e.num,e.gen).encryptString(v)}var y="".concat(e.num," ").concat(e.gen," obj\n")+"<< /Type /EmbeddedFile /Length ".concat(v.length,">>\nstream\n")+v+"\nendstream\nendobj\n"
t.push({ref:e,data:y})})(void 0===m?null:m,u,g)
var v,b,y=new n.Dict(null),w=r.newRef,k=t[t.length-1]
10===k||13===k?(v=[],b=t.length):(v=["\n"],b=t.length+1)
y.set("Size",w.num+1),y.set("Prev",r.startXRef),y.set("Type",n.Name.get("XRef")),null!==r.rootRef&&y.set("Root",r.rootRef)
null!==r.infoRef&&y.set("Info",r.infoRef)
null!==r.encrypt&&y.set("Encrypt",r.encrypt)
u.push({ref:w,data:""}),u=u.sort((function(e,t){return e.ref.num-t.ref.num}))
var S,x=[[0,1,65535]],C=[0,1],A=0,O=c(u)
try{for(O.s();!(S=O.n()).done;){var T=S.value,I=T.ref,P=T.data
A=Math.max(A,b),x.push([1,b,Math.min(I.gen,65535)]),b+=P.length,C.push(I.num),C.push(1),v.push(P)}}catch(K){O.e(K)}finally{O.f()}if(y.set("Index",C),0!==r.fileIds.length){var E=function(e,t){for(var r=Math.floor(Date.now()/1e3),n=t.filename||"",i=[r.toString(),n,e.toString()],o=i.reduce((function(e,t){return e+t.length}),0),c=0,l=Object.values(t.info);c<l.length;c++){var u=l[c]
i.push(u),o+=u.length}for(var h=new Uint8Array(o),f=0,d=0,g=i;d<g.length;d++){var m=g[d]
p(m,f,h),f+=m.length}return(0,a.bytesToString)((0,s.calculateMD5)(h))}(b,r)
y.set("ID",[r.fileIds[0],E])}var _=[1,Math.ceil(Math.log2(A)/8),2],F=(_[0]+_[1]+_[2])*x.length
y.set("W",_),y.set("Length",F),v.push("".concat(w.num," ").concat(w.gen," obj\n")),h(y,v,null),v.push(" stream\n")
var R=v.reduce((function(e,t){return e+t.length}),0),B="\nendstream\nendobj\nstartxref\n".concat(b,"\n%%EOF\n"),M=new Uint8Array(t.length+R+F+B.length)
M.set(t)
var D,L=t.length,N=c(v)
try{for(N.s();!(D=N.n()).done;){var U=D.value
p(U,L,M),L+=U.length}}catch(K){N.e(K)}finally{N.f()}for(var j=0,q=x;j<q.length;j++){var z=(X=q[j],V=3,function(e){if(Array.isArray(e))return e}(X)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return
var r=[],a=!0,n=!1,i=void 0
try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);a=!0);}catch(K){n=!0,i=K}finally{try{a||null==s.return||s.return()}finally{if(n)throw i}}return r}(X,V)||l(X,V)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),G=z[0],H=z[1],W=z[2]
L=d(G,_[0],L,M),L=d(H,_[1],L,M),L=d(W,_[2],L,M)}var X,V
return p(B,L,M),M},t.writeDict=h
var a=r(4),n=r(135),i=r(138),o=r(177),s=r(152)
function c(e,t){var r
if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=l(e))||t&&e&&"number"==typeof e.length){r&&(e=r)
var a=0,n=function(){}
return{s:n,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1
return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next()
return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==r.return||r.return()}finally{if(s)throw i}}}}function l(e,t){if(e){if("string"==typeof e)return u(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r]
return a}function h(e,t,r){t.push("<<")
var a,n=c(e.getKeys())
try{for(n.s();!(a=n.n()).done;){var o=a.value
t.push(" /".concat((0,i.escapePDFName)(o)," ")),f(e.getRaw(o),t,r)}}catch(s){n.e(s)}finally{n.f()}t.push(">>")}function f(e,t,r){(0,n.isName)(e)?t.push("/".concat((0,i.escapePDFName)(e.name))):(0,n.isRef)(e)?t.push("".concat(e.num," ").concat(e.gen," R")):Array.isArray(e)?function(e,t,r){t.push("[")
var a,n=!0,i=c(e)
try{for(i.s();!(a=i.n()).done;){var o=a.value
n?n=!1:t.push(" "),f(o,t,r)}}catch(s){i.e(s)}finally{i.f()}t.push("]")}(e,t,r):"string"==typeof e?(null!==r&&(e=r.encryptString(e)),t.push("(".concat((0,a.escapeString)(e),")"))):"number"==typeof e?t.push(function(e){if(Number.isInteger(e))return e.toString()
var t=Math.round(100*e)
return t%100==0?(t/100).toString():t%10==0?e.toFixed(1):e.toFixed(2)}(e)):(0,n.isDict)(e)?h(e,t,r):(0,n.isStream)(e)&&function(e,t,r){h(e.dict,t,r),t.push(" stream\n")
var n=(0,a.bytesToString)(e.getBytes())
null!==r&&(n=r.encryptString(n)),t.push(n),t.push("\nendstream\n")}(e,t,r)}function d(e,t,r,a){for(var n=t+r-1;n>r-1;n--)a[n]=255&e,e>>=8
return r+t}function p(e,t,r){for(var a=0,n=e.length;a<n;a++)r[t+a]=255&e.charCodeAt(a)}},(e,t,r)=>{"use strict"
function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.SimpleXMLParser=t.SimpleDOMNode=void 0
var n=r(4)
function i(e,t,r){return(i="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var a=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=l(e)););return e}(e,t)
if(a){var n=Object.getOwnPropertyDescriptor(a,t)
return n.get?n.get.call(r):n.value}})(e,t,r||e)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,a=l(e)
if(t){var n=l(this).constructor
r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments)
return c(this,r)}}function c(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){var r
if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=f(e))||t&&e&&"number"==typeof e.length){r&&(e=r)
var a=0,n=function(){}
return{s:n,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1
return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next()
return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==r.return||r.return()}finally{if(s)throw i}}}}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return
var r=[],a=!0,n=!1,i=void 0
try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);a=!0);}catch(c){n=!0,i=c}finally{try{a||null==s.return||s.return()}finally{if(n)throw i}}return r}(e,t)||f(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){if(e){if("string"==typeof e)return d(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r]
return a}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var r=0;r<t.length;r++){var a=t[r]
a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function m(e,t,r){return t&&g(e.prototype,t),r&&g(e,r),e}var v=0,b=-2,y=-3,w=-4,k=-5,S=-6,x=-9
function C(e,t){var r=e[t]
return" "===r||"\n"===r||"\r"===r||"\t"===r}var A=function(){function e(){p(this,e)}return m(e,[{key:"_resolveEntities",value:function(e){var t=this
return e.replace(/&([^;]+);/g,(function(e,r){if("#x"===r.substring(0,2))return String.fromCodePoint(parseInt(r.substring(2),16))
if("#"===r.substring(0,1))return String.fromCodePoint(parseInt(r.substring(1),10))
switch(r){case"lt":return"<"
case"gt":return">"
case"amp":return"&"
case"quot":return'"'}return t.onResolveEntity(r)}))}},{key:"_parseContent",value:function(e,t){var r=[],a=t
function n(){for(;a<e.length&&C(e,a);)++a}for(;a<e.length&&!C(e,a)&&">"!==e[a]&&"/"!==e[a];)++a
var i=e.substring(t,a)
for(n();a<e.length&&">"!==e[a]&&"/"!==e[a]&&"?"!==e[a];){n()
for(var o,s="";a<e.length&&!C(e,a)&&"="!==e[a];)s+=e[a],++a
if(n(),"="!==e[a])return null;++a,n()
var c=e[a]
if('"'!==c&&"'"!==c)return null
var l=e.indexOf(c,++a)
if(l<0)return null
o=e.substring(a,l),r.push({name:s,value:this._resolveEntities(o)}),a=l+1,n()}return{name:i,attributes:r,parsed:a-t}}},{key:"_parseProcessingInstruction",value:function(e,t){var r=t
for(;r<e.length&&!C(e,r)&&">"!==e[r]&&"/"!==e[r];)++r
var a=e.substring(t,r);(function(){for(;r<e.length&&C(e,r);)++r})()
for(var n=r;r<e.length&&("?"!==e[r]||">"!==e[r+1]);)++r
return{name:a,value:e.substring(n,r),parsed:r-t}}},{key:"parseXml",value:function(e){for(var t=0;t<e.length;){var r=t
if("<"===e[t]){var a=void 0
switch(e[++r]){case"/":if(++r,(a=e.indexOf(">",r))<0)return void this.onError(x)
this.onEndElement(e.substring(r,a)),r=a+1
break
case"?":++r
var n=this._parseProcessingInstruction(e,r)
if("?>"!==e.substring(r+n.parsed,r+n.parsed+2))return void this.onError(y)
this.onPi(n.name,n.value),r+=n.parsed+2
break
case"!":if("--"===e.substring(r+1,r+3)){if((a=e.indexOf("--\x3e",r+3))<0)return void this.onError(k)
this.onComment(e.substring(r+3,a)),r=a+3}else if("[CDATA["===e.substring(r+1,r+8)){if((a=e.indexOf("]]>",r+8))<0)return void this.onError(b)
this.onCdata(e.substring(r+8,a)),r=a+3}else{if("DOCTYPE"!==e.substring(r+1,r+8))return void this.onError(S)
var i=e.indexOf("[",r+8),o=!1
if((a=e.indexOf(">",r+8))<0)return void this.onError(w)
if(i>0&&a>i){if((a=e.indexOf("]>",r+8))<0)return void this.onError(w)
o=!0}var s=e.substring(r+8,a+(o?1:0))
this.onDoctype(s),r=a+(o?2:1)}break
default:var c=this._parseContent(e,r)
if(null===c)return void this.onError(S)
var l=!1
if("/>"===e.substring(r+c.parsed,r+c.parsed+2))l=!0
else if(">"!==e.substring(r+c.parsed,r+c.parsed+1))return void this.onError(x)
this.onBeginElement(c.name,c.attributes,l),r+=c.parsed+(l?2:1)}}else{for(;r<e.length&&"<"!==e[r];)r++
var u=e.substring(t,r)
this.onText(this._resolveEntities(u))}t=r}}},{key:"onResolveEntity",value:function(e){return"&".concat(e,";")}},{key:"onPi",value:function(e,t){}},{key:"onComment",value:function(e){}},{key:"onCdata",value:function(e){}},{key:"onDoctype",value:function(e){}},{key:"onText",value:function(e){}},{key:"onBeginElement",value:function(e,t,r){}},{key:"onEndElement",value:function(e){}},{key:"onError",value:function(e){}}]),e}(),O=function(){function e(t,r){p(this,e),this.nodeName=t,this.nodeValue=r,Object.defineProperty(this,"parentNode",{value:null,writable:!0})}return m(e,[{key:"hasChildNodes",value:function(){return this.childNodes&&this.childNodes.length>0}},{key:"searchNode",value:function(e,t){if(t>=e.length)return this
for(var r=e[t],a=[],n=this;;){if(r.name===n.nodeName){if(0!==r.pos){if(0===a.length)return null
var i,o=0,s=u(h(a.pop(),1)[0].childNodes)
try{for(s.s();!(i=s.n()).done;){var c=i.value
if(r.name===c.nodeName){if(o===r.pos)return c.searchNode(e,t+1)
o++}}}catch(g){s.e(g)}finally{s.f()}return n.searchNode(e,t+1)}var l=n.searchNode(e,t+1)
if(null!==l)return l}if(n.childNodes&&0!==n.childNodes.length)a.push([n,0]),n=n.childNodes[0]
else{if(0===a.length)return null
for(;0!==a.length;){var f=h(a.pop(),2),d=f[0],p=f[1]+1
if(p<d.childNodes.length){a.push([d,p]),n=d.childNodes[p]
break}}if(0===a.length)return null}}}},{key:"dump",value:function(e){if("#text"!==this.nodeName){if(e.push("<".concat(this.nodeName)),this.attributes){var t,r=u(this.attributes)
try{for(r.s();!(t=r.n()).done;){var a=t.value
e.push(" ".concat(a.name,'="').concat((0,n.encodeToXmlString)(a.value),'"'))}}catch(s){r.e(s)}finally{r.f()}}if(this.hasChildNodes()){e.push(">")
var i,o=u(this.childNodes)
try{for(o.s();!(i=o.n()).done;){i.value.dump(e)}}catch(s){o.e(s)}finally{o.f()}e.push("</".concat(this.nodeName,">"))}else this.nodeValue?e.push(">".concat((0,n.encodeToXmlString)(this.nodeValue),"</").concat(this.nodeName,">")):e.push("/>")}else e.push((0,n.encodeToXmlString)(this.nodeValue))}},{key:"firstChild",get:function(){return this.childNodes&&this.childNodes[0]}},{key:"nextSibling",get:function(){var e=this.parentNode.childNodes
if(e){var t=e.indexOf(this)
if(-1!==t)return e[t+1]}}},{key:"textContent",get:function(){return this.childNodes?this.childNodes.map((function(e){return e.textContent})).join(""):this.nodeValue||""}}]),e}()
t.SimpleDOMNode=O
var T=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)})(r,e)
var t=s(r)
function r(e){var a,n=e.hasAttributes,i=void 0!==n&&n,o=e.lowerCaseName,s=void 0!==o&&o
return p(this,r),(a=t.call(this))._currentFragment=null,a._stack=null,a._errorCode=v,a._hasAttributes=i,a._lowerCaseName=s,a}return m(r,[{key:"parseFromString",value:function(e){if(this._currentFragment=[],this._stack=[],this._errorCode=v,this.parseXml(e),this._errorCode===v){var t=h(this._currentFragment,1)[0]
if(t)return{documentElement:t}}}},{key:"onResolveEntity",value:function(e){switch(e){case"apos":return"'"}return i(l(r.prototype),"onResolveEntity",this).call(this,e)}},{key:"onText",value:function(e){if(!function(e){for(var t=0,r=e.length;t<r;t++)if(!C(e,t))return!1
return!0}(e)){var t=new O("#text",e)
this._currentFragment.push(t)}}},{key:"onCdata",value:function(e){var t=new O("#text",e)
this._currentFragment.push(t)}},{key:"onBeginElement",value:function(e,t,r){this._lowerCaseName&&(e=e.toLowerCase())
var a=new O(e)
a.childNodes=[],this._hasAttributes&&(a.attributes=t),this._currentFragment.push(a),r||(this._stack.push(this._currentFragment),this._currentFragment=a.childNodes)}},{key:"onEndElement",value:function(e){this._currentFragment=this._stack.pop()||[]
var t=this._currentFragment[this._currentFragment.length-1]
if(t)for(var r=0,a=t.childNodes.length;r<a;r++)t.childNodes[r].parentNode=t}},{key:"onError",value:function(e){this._errorCode=e}}]),r}(A)
t.SimpleXMLParser=T},(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.MessageHandler=void 0
var a,n=(a=r(2))&&a.__esModule?a:{default:a},i=r(4)
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
t.MessageHandler=w},(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.PDFWorkerStream=void 0
var a,n=(a=r(2))&&a.__esModule?a:{default:a},i=r(4)
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
case 8:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"cancel",value:function(e){this._reader.cancel(e)}},{key:"isStreamingSupported",get:function(){return!1}}]),e}()}],t={}
function r(a){if(t[a])return t[a].exports
var n=t[a]={id:a,loaded:!1,exports:{}}
return e[a].call(n.exports,n,n.exports,r),n.loaded=!0,n.exports}return r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),r(0)})()}))
