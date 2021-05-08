define("~fastboot/app-factory",["ascua/app","ascua/config/environment"],(function(e,t){return e=e.default,t=t.default,{default:function(){return e.create(t.APP)}}})),define("ascua/initializers/ajax",["exports"],(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const{get:t}=Ember
var r=function(e){let r=t(this,"fastboot.request.protocol")
if(/^\/\//.test(e.url))e.url=r+e.url
else if(!/^https?:\/\//.test(e.url))try{e.url=r+"//"+t(this,"fastboot.request.host")+e.url}catch(o){throw new Error("You are using Ember Data with no host defined in your adapter. This will attempt to use the host of the FastBoot request, which is not configured for the current host of this request. Please set the hostWhitelist property for in your environment.js. FastBoot Error: "+o.message)}if(!najax)throw new Error("najax does not seem to be defined in your app. Did you override it via `addOrOverrideSandboxGlobals` in the fastboot server?")
najax(e)},o={name:"ajax-service",initialize:function(e){e.register("ajax:node",r,{instantiate:!1}),e.inject("adapter","_ajaxRequest","ajax:node"),e.inject("adapter","fastboot","service:fastboot")}}
e.default=o})),define("ascua/initializers/error-handler",["exports"],(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t={name:"error-handler",initialize:function(){Ember.onerror||(Ember.onerror=function(e){const t=`There was an error running your app in fastboot. More info about the error: \n ${e.stack||e}`
console.error(t)})}}
e.default=t})),define("ascua/instance-initializers/content-security-policy",["exports","@ascua/config"],(function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const r="'self'"
let o={report:!0,policy:{"default-src":["'none'"],"img-src":[r],"style-src":[r],"script-src":[r],"connect-src":[r],"connect-src":[r],"manifest-src":[r],"block-all-mixed-content":null}}
var i={name:"content-security-policy",initialize(e){if(void 0===t.default.CSP)return
let r=e.lookup("service:fastboot"),i=Object.assign({},o,{...t.default.CSP})
"production"!==t.default.environment&&(i.report=!0)
let n=Object.keys(i.policy).map((e=>{switch(!0){case"string"==typeof i.policy[e]:return e+" "+i.policy[e]
case!0===Array.isArray(i.policy[e]):return e+" "+(t=i.policy[e],t.filter(((e,t,r)=>r.indexOf(e)===t))).join(" ")
default:return e}var t})).join("; ")
switch(i.report){case!0:return r.response.headers.set("Content-Security-Policy-Report-Only",n)
case!1:return r.response.headers.set("Content-Security-Policy",n)}}}
e.default=i})),define("ascua/instance-initializers/setup-fetch",["exports","fetch"],(function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"fetch",initialize:function(e){const r=e.lookup("service:fastboot");(0,t.setupFastboot)(r.get("request"))}}
e.default=r}))
