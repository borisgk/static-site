!function(){"use strict";var e,o,r,t=function(e){for(var o=[],r=1;r<arguments.length;r++)o[r-1]=arguments[r];return console.warn.apply(console,function(e,o,r){if(r||2===arguments.length)for(var t,n=0,i=o.length;n<i;n++)!t&&n in o||(t||(t=Array.prototype.slice.call(o,0,n)),t[n]=o[n]);return e.concat(t||Array.prototype.slice.call(o))}(["[🎥 Smartlook] ".concat(e)],function(e,o){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var t,n,i=r.call(e),d=[];try{for(;(void 0===o||o-- >0)&&!(t=i.next()).done;)d.push(t.value)}catch(e){n={error:e}}finally{try{t&&!t.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}return d}(o),!1))},n=function(e){var o=null;try{o=window.localStorage.getItem(e)}catch(e){}return o},i=function(e){var o=null;try{o=window.sessionStorage.getItem(e)}catch(e){}return o},d=function(e,o){try{return window.localStorage.setItem(e,o),!0}catch(e){return!1}},c="smartlook_picker",a=(null===(e=document.currentScript)||void 0===e?void 0:e.src.replace("recorder.js","picker.02b7de1dffdf0a3d3641.js"))||"",l=new(function(){function e(){}return e.prototype.load=function(){var e=document.createElement("script");e.src=a,document.head.append(e),d(c,"1")},e.prototype.shouldLoad=function(){return!(!i(c)&&!n(c))||document.referrer.indexOf("picker/4f249306-efd5-4127-b768-79a6750a7c5d-ca97caf7-335a-4e1f-b047-be42cb6098f9")>-1},e}()),u="smartlook_live_heatmaps",p=(null===(o=document.currentScript)||void 0===o?void 0:o.src.replace("recorder.js","live-heatmaps.6f174ded0a2a6b392110.js"))||"",s=new(function(){function e(){}return e.prototype.load=function(){var e=document.createElement("script");e.src=p,document.head.append(e),d(u,"1")},e.prototype.shouldLoad=function(){return Boolean(i(u)||n(u))},e}()),m=(null===(r=document.currentScript)||void 0===r?void 0:r.src)||"",v=function(){var e=document.createElement("script");e.src=m.replace("recorder.js","es6/init.98289156c0687ca0da60.js"),e.type="module";var o=document.createElement("script");o.src=m.replace("recorder.js","es5/init.5a038e524e10aa79eccf.js"),o.noModule=!0,"noModule"in document.createElement("script")?(document.head.appendChild(e),document.head.appendChild(o)):document.head.appendChild(o)};if(void 0===window.smartlook)t("Smartlook script was loaded without initializing `window.smartlook` object.",document.currentScript);else if(void 0!==Number.parseInt&&"nodeName"in Node.prototype){window.smartlook.scriptSource=m.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^/]+$/,"/");var f=document.querySelectorAll('[src$="smartlook.com/recorder.js"]');if(f.length>1&&t("Smartlook web-sdk loaded ".concat(f.length,"x.")),window.smartlook.isRecorderScriptLoaded)t("Smartlook initialization ignored in this script.",document.currentScript);else if(l.shouldLoad())l.load();else if(s.shouldLoad())s.load();else try{!function(){var e,o,r,t,n,i,d,c,a,l;return-1===[window.queueMicrotask,Array.from,null===(e=Array.prototype)||void 0===e?void 0:e.find,null===(o=Array.prototype)||void 0===o?void 0:o.findIndex,null===(r=Array.prototype)||void 0===r?void 0:r.flat,null===(t=Array.prototype)||void 0===t?void 0:t.flatMap,null===(n=Array.prototype)||void 0===n?void 0:n.includes,null===(i=Element.prototype)||void 0===i?void 0:i.append,null===(d=Event.prototype)||void 0===d?void 0:d.composedPath,"getRootNode"in(Node.prototype||{}),"isConnected"in(Node.prototype||{}),Object.assign,Object.entries,Object.fromEntries,Object.hasOwn,Object.setPrototypeOf,Object.values,String.prototype.includes,String.prototype.endsWith,String.prototype.startsWith,window.fetch,window.AbortController,window.MessageChannel,window.MessagePort,null===(c=window.navigator)||void 0===c?void 0:c.sendBeacon,window.requestIdleCallback,null===(a=window.Promise)||void 0===a?void 0:a.any,window.ResizeObserver,null===(l=window.Symbol)||void 0===l?void 0:l.asyncIterator,window.Reflect,window.Uint8Array.prototype.reduce].map(Boolean).indexOf(!1)}()?function(){var e=m.replace("recorder.js","polyfills.a698f836085ab442646f.js"),o=document.createElement("script");o.src=e;var r=function(e){var t;(void 0===(t=e).isTrusted||t.isTrusted)&&(o.removeEventListener("load",r,!0),v())};o.addEventListener("load",r,!0),document.head.appendChild(o)}():v()}finally{window.smartlook.isRecorderScriptLoaded=!0}}else t("Smartlook is not recording. Unsupported browser detected.")}();