import{g as e,_ as t,r as n,o as r,a as o,b as a,c as s,d as i,w as u,e as l,f as c,t as d,h as f,p,i as h,j as m,k as v,F as g}from"./index-402d846c.js";const y="controller.cross.getUrl",b=(window.require&&window.require("electron")||window.electron||{}).ipcRenderer||void 0;var w={exports:{}},x=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}},S=x,I=Object.prototype.toString;function k(e){return"[object Array]"===I.call(e)}function E(e){return void 0===e}function N(e){return null!==e&&"object"==typeof e}function O(e){if("[object Object]"!==I.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function C(e){return"[object Function]"===I.call(e)}function j(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),k(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}var _={isArray:k,isArrayBuffer:function(e){return"[object ArrayBuffer]"===I.call(e)},isBuffer:function(e){return null!==e&&!E(e)&&null!==e.constructor&&!E(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:N,isPlainObject:O,isUndefined:E,isDate:function(e){return"[object Date]"===I.call(e)},isFile:function(e){return"[object File]"===I.call(e)},isBlob:function(e){return"[object Blob]"===I.call(e)},isFunction:C,isStream:function(e){return N(e)&&C(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:j,merge:function e(){var t={};function n(n,r){O(t[r])&&O(n)?t[r]=e(t[r],n):O(n)?t[r]=e({},n):k(n)?t[r]=n.slice():t[r]=n}for(var r=0,o=arguments.length;r<o;r++)j(arguments[r],n);return t},extend:function(e,t,n){return j(t,(function(t,r){e[r]=n&&"function"==typeof t?S(t,n):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}},T=_;function P(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var A=function(e,t,n){if(!t)return e;var r;if(n)r=n(t);else if(T.isURLSearchParams(t))r=t.toString();else{var o=[];T.forEach(t,(function(e,t){null!=e&&(T.isArray(e)?t+="[]":e=[e],T.forEach(e,(function(e){T.isDate(e)?e=e.toISOString():T.isObject(e)&&(e=JSON.stringify(e)),o.push(P(t)+"="+P(e))})))})),r=o.join("&")}if(r){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+r}return e},R=_;function U(){this.handlers=[]}U.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},U.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},U.prototype.forEach=function(e){R.forEach(this.handlers,(function(t){null!==t&&e(t)}))};var M,B,H,L,D,q,z,F,J,Z,$,G,V,X,W,K,Q,Y,ee=U,te=_,ne=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e};function re(){if(B)return M;B=1;var e=ne;return M=function(t,n,r,o,a){var s=new Error(t);return e(s,n,r,o,a)}}function oe(){if(G)return $;G=1;var e=F?z:(F=1,z=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}),t=Z?J:(Z=1,J=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e});return $=function(n,r){return n&&!e(r)?t(n,r):r}}function ae(){if(Y)return Q;Y=1;var e=_,t=function(){if(L)return H;L=1;var e=re();return H=function(t,n,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?n(e("Request failed with status code "+r.status,r.config,null,r.request,r)):t(r)}}(),n=function(){if(q)return D;q=1;var e=_;return D=e.isStandardBrowserEnv()?{write:function(t,n,r,o,a,s){var i=[];i.push(t+"="+encodeURIComponent(n)),e.isNumber(r)&&i.push("expires="+new Date(r).toGMTString()),e.isString(o)&&i.push("path="+o),e.isString(a)&&i.push("domain="+a),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}}(),r=A,o=oe(),a=function(){if(X)return V;X=1;var e=_,t=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];return V=function(n){var r,o,a,s={};return n?(e.forEach(n.split("\n"),(function(n){if(a=n.indexOf(":"),r=e.trim(n.substr(0,a)).toLowerCase(),o=e.trim(n.substr(a+1)),r){if(s[r]&&t.indexOf(r)>=0)return;s[r]="set-cookie"===r?(s[r]?s[r]:[]).concat([o]):s[r]?s[r]+", "+o:o}})),s):s}}(),s=function(){if(K)return W;K=1;var e=_;return W=e.isStandardBrowserEnv()?function(){var t,n=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function o(e){var t=e;return n&&(r.setAttribute("href",t),t=r.href),r.setAttribute("href",t),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return t=o(window.location.href),function(n){var r=e.isString(n)?o(n):n;return r.protocol===t.protocol&&r.host===t.host}}():function(){return!0}}(),i=re();return Q=function(u){return new Promise((function(l,c){var d=u.data,f=u.headers,p=u.responseType;e.isFormData(d)&&delete f["Content-Type"];var h=new XMLHttpRequest;if(u.auth){var m=u.auth.username||"",v=u.auth.password?unescape(encodeURIComponent(u.auth.password)):"";f.Authorization="Basic "+btoa(m+":"+v)}var g=o(u.baseURL,u.url);function y(){if(h){var e="getAllResponseHeaders"in h?a(h.getAllResponseHeaders()):null,n={data:p&&"text"!==p&&"json"!==p?h.response:h.responseText,status:h.status,statusText:h.statusText,headers:e,config:u,request:h};t(l,c,n),h=null}}if(h.open(u.method.toUpperCase(),r(g,u.params,u.paramsSerializer),!0),h.timeout=u.timeout,"onloadend"in h?h.onloadend=y:h.onreadystatechange=function(){h&&4===h.readyState&&(0!==h.status||h.responseURL&&0===h.responseURL.indexOf("file:"))&&setTimeout(y)},h.onabort=function(){h&&(c(i("Request aborted",u,"ECONNABORTED",h)),h=null)},h.onerror=function(){c(i("Network Error",u,null,h)),h=null},h.ontimeout=function(){var e="timeout of "+u.timeout+"ms exceeded";u.timeoutErrorMessage&&(e=u.timeoutErrorMessage),c(i(e,u,u.transitional&&u.transitional.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",h)),h=null},e.isStandardBrowserEnv()){var b=(u.withCredentials||s(g))&&u.xsrfCookieName?n.read(u.xsrfCookieName):void 0;b&&(f[u.xsrfHeaderName]=b)}"setRequestHeader"in h&&e.forEach(f,(function(e,t){void 0===d&&"content-type"===t.toLowerCase()?delete f[t]:h.setRequestHeader(t,e)})),e.isUndefined(u.withCredentials)||(h.withCredentials=!!u.withCredentials),p&&"json"!==p&&(h.responseType=u.responseType),"function"==typeof u.onDownloadProgress&&h.addEventListener("progress",u.onDownloadProgress),"function"==typeof u.onUploadProgress&&h.upload&&h.upload.addEventListener("progress",u.onUploadProgress),u.cancelToken&&u.cancelToken.promise.then((function(e){h&&(h.abort(),c(e),h=null)})),d||(d=null),h.send(d)}))}}var se=_,ie=function(e,t){te.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))},ue=ne,le={"Content-Type":"application/x-www-form-urlencoded"};function ce(e,t){!se.isUndefined(e)&&se.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var de,fe={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(de=ae()),de),transformRequest:[function(e,t){return ie(t,"Accept"),ie(t,"Content-Type"),se.isFormData(e)||se.isArrayBuffer(e)||se.isBuffer(e)||se.isStream(e)||se.isFile(e)||se.isBlob(e)?e:se.isArrayBufferView(e)?e.buffer:se.isURLSearchParams(e)?(ce(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):se.isObject(e)||t&&"application/json"===t["Content-Type"]?(ce(t,"application/json"),function(e,t,n){if(se.isString(e))try{return(t||JSON.parse)(e),se.trim(e)}catch(r){if("SyntaxError"!==r.name)throw r}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional,n=t&&t.silentJSONParsing,r=t&&t.forcedJSONParsing,o=!n&&"json"===this.responseType;if(o||r&&se.isString(e)&&e.length)try{return JSON.parse(e)}catch(a){if(o){if("SyntaxError"===a.name)throw ue(a,this,"E_JSON_PARSE");throw a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};fe.headers={common:{Accept:"application/json, text/plain, */*"}},se.forEach(["delete","get","head"],(function(e){fe.headers[e]={}})),se.forEach(["post","put","patch"],(function(e){fe.headers[e]=se.merge(le)}));var pe,he,me=fe,ve=_,ge=me;function ye(){return he?pe:(he=1,pe=function(e){return!(!e||!e.__CANCEL__)})}var be=_,we=function(e,t,n){var r=this||ge;return ve.forEach(n,(function(n){e=n.call(r,e,t)})),e},xe=ye(),Se=me;function Ie(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var ke=_,Ee=function(e,t){t=t||{};var n={},r=["url","method","data"],o=["headers","auth","proxy","params"],a=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],s=["validateStatus"];function i(e,t){return ke.isPlainObject(e)&&ke.isPlainObject(t)?ke.merge(e,t):ke.isPlainObject(t)?ke.merge({},t):ke.isArray(t)?t.slice():t}function u(r){ke.isUndefined(t[r])?ke.isUndefined(e[r])||(n[r]=i(void 0,e[r])):n[r]=i(e[r],t[r])}ke.forEach(r,(function(e){ke.isUndefined(t[e])||(n[e]=i(void 0,t[e]))})),ke.forEach(o,u),ke.forEach(a,(function(r){ke.isUndefined(t[r])?ke.isUndefined(e[r])||(n[r]=i(void 0,e[r])):n[r]=i(void 0,t[r])})),ke.forEach(s,(function(r){r in t?n[r]=i(e[r],t[r]):r in e&&(n[r]=i(void 0,e[r]))}));var l=r.concat(o).concat(a).concat(s),c=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===l.indexOf(e)}));return ke.forEach(c,u),n};var Ne={name:"axios",version:"0.21.4",description:"Promise based HTTP client for the browser and node.js",main:"index.js",scripts:{test:"grunt test",start:"node ./sandbox/server.js",build:"NODE_ENV=production grunt build",preversion:"npm test",version:"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",postversion:"git push && git push --tags",examples:"node ./examples/server.js",coveralls:"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",fix:"eslint --fix lib/**/*.js"},repository:{type:"git",url:"https://github.com/axios/axios.git"},keywords:["xhr","http","ajax","promise","node"],author:"Matt Zabriskie",license:"MIT",bugs:{url:"https://github.com/axios/axios/issues"},homepage:"https://axios-http.com",devDependencies:{coveralls:"^3.0.0","es6-promise":"^4.2.4",grunt:"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1",karma:"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2",minimist:"^1.2.0",mocha:"^8.2.1",sinon:"^4.5.0","terser-webpack-plugin":"^4.2.3",typescript:"^4.0.5","url-search-params":"^0.10.0",webpack:"^4.44.2","webpack-dev-server":"^3.11.0"},browser:{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},jsdelivr:"dist/axios.min.js",unpkg:"dist/axios.min.js",typings:"./index.d.ts",dependencies:{"follow-redirects":"^1.14.0"},bundlesize:[{path:"./dist/axios.min.js",threshold:"5kB"}]},Oe={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){Oe[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var Ce={},je=Ne.version.split(".");function _e(e,t){for(var n=t?t.split("."):je,r=e.split("."),o=0;o<3;o++){if(n[o]>r[o])return!0;if(n[o]<r[o])return!1}return!1}Oe.transitional=function(e,t,n){var r=t&&_e(t);function o(e,t){return"[Axios v"+Ne.version+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,a,s){if(!1===e)throw new Error(o(a," has been removed in "+t));return r&&!Ce[a]&&(Ce[a]=!0,console.warn(o(a," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,a,s)}};var Te,Pe,Ae,Re,Ue,Me,Be,He,Le=_,De=A,qe=ee,ze=function(e){return Ie(e),e.headers=e.headers||{},e.data=we.call(e,e.data,e.headers,e.transformRequest),e.headers=be.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),be.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||Se.adapter)(e).then((function(t){return Ie(e),t.data=we.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return xe(t)||(Ie(e),t&&t.response&&(t.response.data=we.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))},Fe=Ee,Je={isOlderVersion:_e,assertOptions:function(e,t,n){if("object"!=typeof e)throw new TypeError("options must be an object");for(var r=Object.keys(e),o=r.length;o-- >0;){var a=r[o],s=t[a];if(s){var i=e[a],u=void 0===i||s(i,a,e);if(!0!==u)throw new TypeError("option "+a+" must be "+u)}else if(!0!==n)throw Error("Unknown option "+a)}},validators:Oe},Ze=Je.validators;function $e(e){this.defaults=e,this.interceptors={request:new qe,response:new qe}}function Ge(){if(Pe)return Te;function e(e){this.message=e}return Pe=1,e.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},e.prototype.__CANCEL__=!0,Te=e}$e.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=Fe(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=e.transitional;void 0!==t&&Je.assertOptions(t,{silentJSONParsing:Ze.transitional(Ze.boolean,"1.0.0"),forcedJSONParsing:Ze.transitional(Ze.boolean,"1.0.0"),clarifyTimeoutError:Ze.transitional(Ze.boolean,"1.0.0")},!1);var n=[],r=!0;this.interceptors.request.forEach((function(t){"function"==typeof t.runWhen&&!1===t.runWhen(e)||(r=r&&t.synchronous,n.unshift(t.fulfilled,t.rejected))}));var o,a=[];if(this.interceptors.response.forEach((function(e){a.push(e.fulfilled,e.rejected)})),!r){var s=[ze,void 0];for(Array.prototype.unshift.apply(s,n),s=s.concat(a),o=Promise.resolve(e);s.length;)o=o.then(s.shift(),s.shift());return o}for(var i=e;n.length;){var u=n.shift(),l=n.shift();try{i=u(i)}catch(c){l(c);break}}try{o=ze(i)}catch(c){return Promise.reject(c)}for(;a.length;)o=o.then(a.shift(),a.shift());return o},$e.prototype.getUri=function(e){return e=Fe(this.defaults,e),De(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},Le.forEach(["delete","get","head","options"],(function(e){$e.prototype[e]=function(t,n){return this.request(Fe(n||{},{method:e,url:t,data:(n||{}).data}))}})),Le.forEach(["post","put","patch"],(function(e){$e.prototype[e]=function(t,n,r){return this.request(Fe(r||{},{method:e,url:t,data:n}))}}));var Ve=_,Xe=x,We=$e,Ke=Ee;function Qe(e){var t=new We(e),n=Xe(We.prototype.request,t);return Ve.extend(n,We.prototype,t),Ve.extend(n,t),n}var Ye=Qe(me);Ye.Axios=We,Ye.create=function(e){return Qe(Ke(Ye.defaults,e))},Ye.Cancel=Ge(),Ye.CancelToken=function(){if(Re)return Ae;Re=1;var e=Ge();function t(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var n;this.promise=new Promise((function(e){n=e}));var r=this;t((function(t){r.reason||(r.reason=new e(t),n(r.reason))}))}return t.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},t.source=function(){var e;return{token:new t((function(t){e=t})),cancel:e}},Ae=t}(),Ye.isCancel=ye(),Ye.all=function(e){return Promise.all(e)},Ye.spread=Me?Ue:(Me=1,Ue=function(e){return function(t){return e.apply(null,t)}}),Ye.isAxiosError=He?Be:(He=1,Be=function(e){return"object"==typeof e&&!0===e.isAxiosError}),w.exports=Ye,w.exports.default=Ye;const et=e(w.exports),tt=""+new URL("logo-abcaf0c2.png",import.meta.url).href,nt={name:"AppHeader",setup(){const e=n(""),t=n(""),a=n(!1),s=n(!1),i=n(!1),u=n(!1),l=n(!1),c=n(""),d=n(""),f=n([{value:"jack",label:"Jack (100)"}]),p=n({value:"lucy",label:"Lucy (101)"});let h;const m=()=>{const e=new Date;return`${e.getHours().toString().padStart(2,"0")}:${e.getMinutes().toString().padStart(2,"0")}:${e.getSeconds().toString().padStart(2,"0")}`};r((()=>{c.value=(()=>{const e=new Date;return`${e.getFullYear()}-${(e.getMonth()+1).toString().padStart(2,"0")}-${e.getDate().toString().padStart(2,"0")}`})(),d.value=m(),h=setInterval((()=>{d.value=m()}),1e3)})),o((()=>{clearInterval(h)}));const v=()=>{b.invoke(y,{name:"goapp"}).then((n=>{e.value=n;let r=e.value+"/api/ping";et({method:"get",url:r,timeout:1e3}).then((e=>{t.value=e.data.data.split(":")[1]})).catch((e=>{console.error("Error:",e)}))})).catch((e=>{console.error("Error getting server URL:",e)}))};return{isSettingOpen:a,isServiceGenOpen:s,isToolsOpen:i,isAboutOpen:u,isExitOpen:l,currentDate:c,currentTime:d,port:t,hearbeat:undefined,options:f,value:p,serverUrl:e,openSettingModal:()=>{a.value=!0,s.value=!1,i.value=!1,u.value=!1,l.value=!1,v()},openServiceGenModal:()=>{a.value=!1,s.value=!0,i.value=!1,u.value=!1,l.value=!1},openToolsModal:()=>{a.value=!1,s.value=!1,i.value=!0,u.value=!1,l.value=!1},openAboutModal:()=>{a.value=!1,s.value=!1,i.value=!1,u.value=!0,l.value=!1},openExitModal:()=>{a.value=!1,s.value=!1,i.value=!1,u.value=!1,l.value=!0},handleOk:e=>{console.log(e),u.value=!1},handleChange:e=>{console.log(e)},initData:v,handleRestart:n=>{console.log(n);const r={method:"get",url:e.value+"/api/restart",timeout:1e3,params:{port:t.value}};et(r).then((e=>{console.log(e.statusText),"ok"==e.statusText&&(a.value=!1)})).catch((e=>{console.error("Error:",e)}))}}}},rt=e=>(p("data-v-bd152615"),e=e(),h(),e),ot=rt((()=>c("div",{class:"menu_button"},[c("img",{class:"pic-logo",src:tt})],-1))),at={class:"menu_button-content"},st=rt((()=>c("span",{class:"menu_button-text"},"系统设置",-1))),it={class:"menu_button-content"},ut=rt((()=>c("span",{class:"menu_button-text"},"服务生成",-1))),lt={class:"menu_button-content"},ct=rt((()=>c("span",{class:"menu_button-text"},"实用工具",-1))),dt={class:"menu_button-content"},ft=rt((()=>c("span",{class:"menu_button-text"},"关于程序",-1))),pt={class:"menu_button-content"},ht=rt((()=>c("span",{class:"menu_button-text"},"退出程序",-1))),mt={class:"clock"},vt={class:"current-date"},gt={class:"current-time"},yt=rt((()=>c("p",null,"Some contents...",-1))),bt=rt((()=>c("p",null,"Some contents...",-1))),wt=rt((()=>c("p",null,"Some contents...",-1))),xt=rt((()=>c("p",null,"wh1t3zer开发",-1))),St=rt((()=>c("p",null,"基于electron框架",-1))),It=rt((()=>c("p",null,"杰克",-1))),kt=rt((()=>c("p",null,"确定要退出程序吗",-1)));const Et={class:"app-layout-content-left"};const Nt=t({name:"Dashboard",components:{AppHeader:t(nt,[["render",function(e,t,n,r,o,p){const h=a("SettingTwoTone"),m=a("a-button"),v=a("FileAddTwoTone"),g=a("ToolTwoTone"),y=a("QuestionCircleTwoTone"),b=a("CloseCircleTwoTone"),w=a("a-input"),x=a("a-form-item"),S=a("a-form"),I=a("a-modal"),k=a("a-radio"),E=a("a-radio-group"),N=a("a-tag"),O=a("a-select"),C=a("a-layout-header"),j=a("a-layout");return s(),i(j,{id:"app-layout-header"},{default:u((()=>[l(C,{theme:"light",class:"layout-header",height:"64",lineHeight:"64"},{default:u((()=>[ot,l(m,{onClick:r.openSettingModal,type:"text",class:"menu_button"},{default:u((()=>[c("div",at,[l(h),st])])),_:1},8,["onClick"]),l(m,{onClick:r.openServiceGenModal,type:"text",class:"menu_button"},{default:u((()=>[c("div",it,[l(v),ut])])),_:1},8,["onClick"]),l(m,{onClick:r.openToolsModal,type:"text",class:"menu_button"},{default:u((()=>[c("div",lt,[l(g),ct])])),_:1},8,["onClick"]),l(m,{onClick:r.openAboutModal,type:"text",class:"menu_button"},{default:u((()=>[c("div",dt,[l(y),ft])])),_:1},8,["onClick"]),l(m,{onClick:r.openExitModal,type:"text",class:"menu_button"},{default:u((()=>[c("div",pt,[l(b),ht])])),_:1},8,["onClick"]),c("div",mt,[c("span",vt,d(r.currentDate),1),c("span",gt,d(r.currentTime),1)]),l(I,{visible:r.isSettingOpen,"onUpdate:visible":t[2]||(t[2]=e=>r.isSettingOpen=e),title:"系统设置",onOk:r.handleRestart},{default:u((()=>[l(S,{autocomplete:"off",rules:e.rules},{default:u((()=>[l(x,{label:"监听端口",name:"port"},{default:u((()=>[l(w,{value:r.port,"onUpdate:value":t[0]||(t[0]=e=>r.port=e),style:{width:"20%"}},null,8,["value"])])),_:1}),l(x,{label:"心跳间隔",name:"heartbeat"},{default:u((()=>[l(w,{value:r.hearbeat,"onUpdate:value":t[1]||(t[1]=e=>r.hearbeat=e),style:{width:"20%"}},null,8,["value"]),f(" /分钟(0为关闭) ")])),_:1})])),_:1},8,["rules"])])),_:1},8,["visible","onOk"]),l(I,{visible:r.isServiceGenOpen,"onUpdate:visible":t[7]||(t[7]=e=>r.isServiceGenOpen=e),title:"服务生成"},{default:u((()=>[l(S,{autocomplete:"off"},{default:u((()=>[l(x,{label:"上线地址",name:"Address",rules:[{required:!0,message:"Please input your adress!"}]},{default:u((()=>[l(w,{value:r.port,"onUpdate:value":t[3]||(t[3]=e=>r.port=e),style:{width:"50%"}},null,8,["value"]),l(m,{style:{"margin-left":"10px"}},{default:u((()=>[f("测试")])),_:1})])),_:1}),l(x,{label:"服务名称",name:"ServiceName",rules:[{required:!0,message:"Please input your service!"}]},{default:u((()=>[l(w,{value:r.hearbeat,"onUpdate:value":t[4]||(t[4]=e=>r.hearbeat=e),style:{width:"50%"}},null,8,["value"]),l(m,{style:{"margin-left":"10px"}},{default:u((()=>[f("随机生成")])),_:1})])),_:1})])),_:1}),c("div",null,[l(E,{value:r.value,"onUpdate:value":t[5]||(t[5]=e=>r.value=e)},{default:u((()=>[l(k,{value:1},{default:u((()=>[f("默认启动")])),_:1}),l(k,{value:2},{default:u((()=>[f("注册表启动")])),_:1}),l(k,{value:3},{default:u((()=>[f("服务启动")])),_:1})])),_:1},8,["value"])]),c("div",null,[f(" 服务版本 "),l(N,{color:"processing"},{default:u((()=>[f("1.0")])),_:1}),f(" 默认分组 "),l(O,{value:r.value,"onUpdate:value":t[6]||(t[6]=e=>r.value=e),"label-in-value":"",style:{width:"120px"},options:r.options,onChange:r.handleChange},null,8,["value","options","onChange"])])])),_:1},8,["visible"]),l(I,{visible:r.isToolsOpen,"onUpdate:visible":t[8]||(t[8]=e=>r.isToolsOpen=e),title:"实用工具"},{default:u((()=>[yt,bt,wt])),_:1},8,["visible"]),l(I,{visible:r.isAboutOpen,"onUpdate:visible":t[9]||(t[9]=e=>r.isAboutOpen=e),title:"关于本程序",onOk:r.handleOk,"cancel-button-props":{disabled:!0},footer:null},{default:u((()=>[xt,St,It])),_:1},8,["visible","onOk"]),l(I,{visible:r.isExitOpen,"onUpdate:visible":t[10]||(t[10]=e=>r.isExitOpen=e),title:"退出程序",onOk:r.handleOk},{default:u((()=>[kt])),_:1},8,["visible","onOk"])])),_:1})])),_:1})}],["__scopeId","data-v-bd152615"]]),AppFooter:t({name:"AppFooter",setup:()=>({logs:["2024xxx 创建文件","2024xxx 创建文件","2024xxx 创建文件","2024xxx 创建文件"],dataSource:[{key:"1",Time:"2024-05-23 21:28:53",EventRecord:"系统启动成功"}],columns:[{title:"发生时间",dataIndex:"Time",key:"Time",width:100},{title:"事件记录",dataIndex:"EventRecord",key:"EventRecord",width:100}]})},[["render",function(e,t,n,r,o,p){const h=a("a-descriptions-item"),y=a("a-descriptions"),b=a("a-layout-content"),w=a("a-tag"),x=a("a-layout-footer"),S=a("a-layout");return s(),i(S,{id:"app-layout-footer"},{default:u((()=>[l(x,{class:"app-layout-footer"},{default:u((()=>[c("div",Et,[l(y,{layout:"horizontal"},{default:u((()=>[l(h,{label:"操作日志",style:{width:"90px"}}),(s(!0),m(g,null,v(r.logs,((e,t)=>(s(),i(h,{key:t,style:{display:"flex"}},{default:u((()=>[f(d(e),1)])),_:2},1024)))),128))])),_:1})]),l(b,{class:"app-layout-content-right"},{default:u((()=>[f("此处待开发")])),_:1}),c("div",null,[f(" server listen on : "),l(w,{color:"success"},{default:u((()=>[f("3456")])),_:1})])])),_:1})])),_:1})}],["__scopeId","data-v-ade03473"]])},setup:()=>({dataSource:[{key:"1",Zone:"中国",Internet:"CN",ExternalIP:"127.0.0.1",InternalIP:"127.0.0.1",HostName:"wht3zer/drawin",SystemInfo:"windows",SoftwareInfo:"M1pro",Speed:"200kb/s",Media:"",NetInet:"test",Status:"17ms"},{key:"1",Zone:"中国",Internet:"CN",ExternalIP:"127.0.0.1",InternalIP:"127.0.0.1",HostName:"wht3zer/drawin",SystemInfo:"macos",SoftwareInfo:"M1pro",Speed:"200kb/s",Media:"",NetInet:"test",Status:"17ms"},{key:"1",Zone:"中国",Internet:"CN",ExternalIP:"127.0.0.1",InternalIP:"127.0.0.1",HostName:"wht3zer/drawin",SystemInfo:"macos",SoftwareInfo:"M1pro",Speed:"200kb/s",Media:"",NetInet:"test",Status:"17ms"},{key:"1",Zone:"中国",Internet:"CN",ExternalIP:"127.0.0.1",InternalIP:"127.0.0.1",HostName:"wht3zer/drawin",SystemInfo:"macos",SoftwareInfo:"M1pro",Speed:"200kb/s",Media:"",NetInet:"test",Status:"17ms"},{key:"1",Zone:"中国",Internet:"CN",ExternalIP:"127.0.0.1",InternalIP:"127.0.0.1",HostName:"wht3zer/drawin",SystemInfo:"macos",SoftwareInfo:"M1pro",Speed:"200kb/s",Media:"",NetInet:"test",Status:"17ms"},{key:"1",Zone:"中国",Internet:"CN",ExternalIP:"127.0.0.1",InternalIP:"127.0.0.1",HostName:"wht3zer/drawin",SystemInfo:"macos",SoftwareInfo:"M1pro",Speed:"200kb/s",Media:"",NetInet:"test",Status:"17ms"},{key:"1",Zone:"中国",Internet:"CN",ExternalIP:"127.0.0.1",InternalIP:"127.0.0.1",HostName:"wht3zer/drawin",SystemInfo:"macos",SoftwareInfo:"M1pro",Speed:"200kb/s",Media:"",NetInet:"test",Status:"17ms"},{key:"1",Zone:"中国",Internet:"CN",ExternalIP:"127.0.0.1",InternalIP:"127.0.0.1",HostName:"wht3zer/drawin",SystemInfo:"macos",SoftwareInfo:"M1pro",Speed:"200kb/s",Media:"",NetInet:"test",Status:"17ms"},{key:"1",Zone:"中国",Internet:"CN",ExternalIP:"127.0.0.1",InternalIP:"127.0.0.1",HostName:"wht3zer/drawin",SystemInfo:"macos",SoftwareInfo:"M1pro",Speed:"200kb/s",Media:"",NetInet:"test",Status:"17ms"}],columns:[{title:"区域",dataIndex:"Zone",key:"zone",width:100},{title:"网络",dataIndex:"Internet",key:"internet",width:60},{title:"外网IP",dataIndex:"ExternalIP",key:"ExternalIP",width:100},{title:"内网IP",dataIndex:"InternalIP",key:"InternalIP",width:100},{title:"计算机名",dataIndex:"HostName",key:"HostName",width:100},{title:"系统",dataIndex:"SystemInfo",key:"SystemInfo",width:90},{title:"处理器、内存、硬盘",dataIndex:"SoftwareInfo",key:"SoftwareInfo",width:160},{title:"网速",dataIndex:"Speed",key:"Speed",width:60},{title:"视频",dataIndex:"Media",key:"Media",width:60},{title:"网卡",dataIndex:"NetInet",key:"NetInet",width:80},{title:"状态",dataIndex:"Status",key:"Status",width:70}]})},[["render",function(e,t,n,r,o,i){const u=a("AppHeader"),c=a("a-table"),d=a("AppFooter");return s(),m(g,null,[l(u),l(c,{dataSource:r.dataSource,columns:r.columns,scroll:{y:380},pagination:!1},null,8,["dataSource","columns"]),l(d)],64)}]]);export{Nt as default};
