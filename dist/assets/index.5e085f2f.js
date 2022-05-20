var F1=Object.defineProperty,V1=Object.defineProperties;var b1=Object.getOwnPropertyDescriptors;var Ff=Object.getOwnPropertySymbols;var B1=Object.prototype.hasOwnProperty,z1=Object.prototype.propertyIsEnumerable;var ou=(t,e,n)=>e in t?F1(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Vf=(t,e)=>{for(var n in e||(e={}))B1.call(e,n)&&ou(t,n,e[n]);if(Ff)for(var n of Ff(e))z1.call(e,n)&&ou(t,n,e[n]);return t},bf=(t,e)=>V1(t,b1(e));var So=(t,e,n)=>(ou(t,typeof e!="symbol"?e+"":e,n),n);const j1=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}};j1();var U={exports:{}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bs=Symbol.for("react.element"),H1=Symbol.for("react.portal"),q1=Symbol.for("react.fragment"),K1=Symbol.for("react.strict_mode"),W1=Symbol.for("react.profiler"),G1=Symbol.for("react.provider"),Q1=Symbol.for("react.context"),Y1=Symbol.for("react.forward_ref"),X1=Symbol.for("react.suspense"),J1=Symbol.for("react.memo"),Z1=Symbol.for("react.lazy"),Bf=Symbol.iterator;function eE(t){return t===null||typeof t!="object"?null:(t=Bf&&t[Bf]||t["@@iterator"],typeof t=="function"?t:null)}var Ng={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ag=Object.assign,Rg={};function Ti(t,e,n){this.props=t,this.context=e,this.refs=Rg,this.updater=n||Ng}Ti.prototype.isReactComponent={};Ti.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ti.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function xg(){}xg.prototype=Ti.prototype;function Th(t,e,n){this.props=t,this.context=e,this.refs=Rg,this.updater=n||Ng}var kh=Th.prototype=new xg;kh.constructor=Th;Ag(kh,Ti.prototype);kh.isPureReactComponent=!0;var zf=Array.isArray,Dg=Object.prototype.hasOwnProperty,Ch={current:null},Pg={key:!0,ref:!0,__self:!0,__source:!0};function Lg(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Dg.call(e,r)&&!Pg.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Bs,type:t,key:s,ref:o,props:i,_owner:Ch.current}}function tE(t,e){return{$$typeof:Bs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Nh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Bs}function nE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var jf=/\/+/g;function au(t,e){return typeof t=="object"&&t!==null&&t.key!=null?nE(""+t.key):e.toString(36)}function Wo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Bs:case H1:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+au(o,0):r,zf(i)?(n="",t!=null&&(n=t.replace(jf,"$&/")+"/"),Wo(i,e,n,"",function(u){return u})):i!=null&&(Nh(i)&&(i=tE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(jf,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",zf(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+au(s,a);o+=Wo(s,e,n,l,i)}else if(l=eE(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+au(s,a++),o+=Wo(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function _o(t,e,n){if(t==null)return t;var r=[],i=0;return Wo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function rE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ze={current:null},Go={transition:null},iE={ReactCurrentDispatcher:Ze,ReactCurrentBatchConfig:Go,ReactCurrentOwner:Ch};q.Children={map:_o,forEach:function(t,e,n){_o(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return _o(t,function(){e++}),e},toArray:function(t){return _o(t,function(e){return e})||[]},only:function(t){if(!Nh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};q.Component=Ti;q.Fragment=q1;q.Profiler=W1;q.PureComponent=Th;q.StrictMode=K1;q.Suspense=X1;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iE;q.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Ag({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ch.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Dg.call(e,l)&&!Pg.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Bs,type:t.type,key:i,ref:s,props:r,_owner:o}};q.createContext=function(t){return t={$$typeof:Q1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:G1,_context:t},t.Consumer=t};q.createElement=Lg;q.createFactory=function(t){var e=Lg.bind(null,t);return e.type=t,e};q.createRef=function(){return{current:null}};q.forwardRef=function(t){return{$$typeof:Y1,render:t}};q.isValidElement=Nh;q.lazy=function(t){return{$$typeof:Z1,_payload:{_status:-1,_result:t},_init:rE}};q.memo=function(t,e){return{$$typeof:J1,type:t,compare:e===void 0?null:e}};q.startTransition=function(t){var e=Go.transition;Go.transition={};try{t()}finally{Go.transition=e}};q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};q.useCallback=function(t,e){return Ze.current.useCallback(t,e)};q.useContext=function(t){return Ze.current.useContext(t)};q.useDebugValue=function(){};q.useDeferredValue=function(t){return Ze.current.useDeferredValue(t)};q.useEffect=function(t,e){return Ze.current.useEffect(t,e)};q.useId=function(){return Ze.current.useId()};q.useImperativeHandle=function(t,e,n){return Ze.current.useImperativeHandle(t,e,n)};q.useInsertionEffect=function(t,e){return Ze.current.useInsertionEffect(t,e)};q.useLayoutEffect=function(t,e){return Ze.current.useLayoutEffect(t,e)};q.useMemo=function(t,e){return Ze.current.useMemo(t,e)};q.useReducer=function(t,e,n){return Ze.current.useReducer(t,e,n)};q.useRef=function(t){return Ze.current.useRef(t)};q.useState=function(t){return Ze.current.useState(t)};q.useSyncExternalStore=function(t,e,n){return Ze.current.useSyncExternalStore(t,e,n)};q.useTransition=function(){return Ze.current.useTransition()};q.version="18.1.0";U.exports=q;var sE=U.exports,tc={},Og={exports:{}},pt={},Mg={exports:{}},$g={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,z){var H=D.length;D.push(z);e:for(;0<H;){var ce=H-1>>>1,we=D[ce];if(0<i(we,z))D[ce]=z,D[H]=we,H=ce;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var z=D[0],H=D.pop();if(H!==z){D[0]=H;e:for(var ce=0,we=D.length,wo=we>>>1;ce<wo;){var Hn=2*(ce+1)-1,su=D[Hn],qn=Hn+1,Eo=D[qn];if(0>i(su,H))qn<we&&0>i(Eo,su)?(D[ce]=Eo,D[qn]=H,ce=qn):(D[ce]=su,D[Hn]=H,ce=Hn);else if(qn<we&&0>i(Eo,H))D[ce]=Eo,D[qn]=H,ce=qn;else break e}}return z}function i(D,z){var H=D.sortIndex-z.sortIndex;return H!==0?H:D.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,y=!1,m=!1,w=!1,N=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(D){for(var z=n(u);z!==null;){if(z.callback===null)r(u);else if(z.startTime<=D)r(u),z.sortIndex=z.expirationTime,e(l,z);else break;z=n(u)}}function E(D){if(w=!1,g(D),!m)if(n(l)!==null)m=!0,vo(T);else{var z=n(u);z!==null&&iu(E,z.startTime-D)}}function T(D,z){m=!1,w&&(w=!1,p(S),S=-1),y=!0;var H=d;try{for(g(z),h=n(l);h!==null&&(!(h.expirationTime>z)||D&&!ee());){var ce=h.callback;if(typeof ce=="function"){h.callback=null,d=h.priorityLevel;var we=ce(h.expirationTime<=z);z=t.unstable_now(),typeof we=="function"?h.callback=we:h===n(l)&&r(l),g(z)}else r(l);h=n(l)}if(h!==null)var wo=!0;else{var Hn=n(u);Hn!==null&&iu(E,Hn.startTime-z),wo=!1}return wo}finally{h=null,d=H,y=!1}}var C=!1,x=null,S=-1,L=5,O=-1;function ee(){return!(t.unstable_now()-O<L)}function He(){if(x!==null){var D=t.unstable_now();O=D;var z=!0;try{z=x(!0,D)}finally{z?qe():(C=!1,x=null)}}else C=!1}var qe;if(typeof f=="function")qe=function(){f(He)};else if(typeof MessageChannel!="undefined"){var ln=new MessageChannel,Pt=ln.port2;ln.port1.onmessage=He,qe=function(){Pt.postMessage(null)}}else qe=function(){N(He,0)};function vo(D){x=D,C||(C=!0,qe())}function iu(D,z){S=N(function(){D(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){m||y||(m=!0,vo(T))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(d){case 1:case 2:case 3:var z=3;break;default:z=d}var H=d;d=z;try{return D()}finally{d=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,z){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var H=d;d=D;try{return z()}finally{d=H}},t.unstable_scheduleCallback=function(D,z,H){var ce=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?ce+H:ce):H=ce,D){case 1:var we=-1;break;case 2:we=250;break;case 5:we=1073741823;break;case 4:we=1e4;break;default:we=5e3}return we=H+we,D={id:c++,callback:z,priorityLevel:D,startTime:H,expirationTime:we,sortIndex:-1},H>ce?(D.sortIndex=H,e(u,D),n(l)===null&&D===n(u)&&(w?(p(S),S=-1):w=!0,iu(E,H-ce))):(D.sortIndex=we,e(l,D),m||y||(m=!0,vo(T))),D},t.unstable_shouldYield=ee,t.unstable_wrapCallback=function(D){var z=d;return function(){var H=d;d=z;try{return D.apply(this,arguments)}finally{d=H}}}})($g);Mg.exports=$g;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ug=U.exports,dt=Mg.exports;function _(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fg=new Set,us={};function Cr(t,e){ai(t,e),ai(t+"Capture",e)}function ai(t,e){for(us[t]=e,t=0;t<e.length;t++)Fg.add(e[t])}var tn=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),nc=Object.prototype.hasOwnProperty,oE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Hf={},qf={};function aE(t){return nc.call(qf,t)?!0:nc.call(Hf,t)?!1:oE.test(t)?qf[t]=!0:(Hf[t]=!0,!1)}function lE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function uE(t,e,n,r){if(e===null||typeof e=="undefined"||lE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function et(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Le[t]=new et(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Le[e]=new et(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Le[t]=new et(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Le[t]=new et(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Le[t]=new et(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Le[t]=new et(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Le[t]=new et(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Le[t]=new et(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Le[t]=new et(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ah=/[\-:]([a-z])/g;function Rh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ah,Rh);Le[e]=new et(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ah,Rh);Le[e]=new et(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ah,Rh);Le[e]=new et(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Le[t]=new et(t,1,!1,t.toLowerCase(),null,!1,!1)});Le.xlinkHref=new et("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Le[t]=new et(t,1,!1,t.toLowerCase(),null,!0,!0)});function xh(t,e,n,r){var i=Le.hasOwnProperty(e)?Le[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(uE(e,n,i,r)&&(n=null),r||i===null?aE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var an=Ug.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Io=Symbol.for("react.element"),Or=Symbol.for("react.portal"),Mr=Symbol.for("react.fragment"),Dh=Symbol.for("react.strict_mode"),rc=Symbol.for("react.profiler"),Vg=Symbol.for("react.provider"),bg=Symbol.for("react.context"),Ph=Symbol.for("react.forward_ref"),ic=Symbol.for("react.suspense"),sc=Symbol.for("react.suspense_list"),Lh=Symbol.for("react.memo"),hn=Symbol.for("react.lazy"),Bg=Symbol.for("react.offscreen"),Kf=Symbol.iterator;function Oi(t){return t===null||typeof t!="object"?null:(t=Kf&&t[Kf]||t["@@iterator"],typeof t=="function"?t:null)}var le=Object.assign,lu;function Hi(t){if(lu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);lu=e&&e[1]||""}return`
`+lu+t}var uu=!1;function cu(t,e){if(!t||uu)return"";uu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{uu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Hi(t):""}function cE(t){switch(t.tag){case 5:return Hi(t.type);case 16:return Hi("Lazy");case 13:return Hi("Suspense");case 19:return Hi("SuspenseList");case 0:case 2:case 15:return t=cu(t.type,!1),t;case 11:return t=cu(t.type.render,!1),t;case 1:return t=cu(t.type,!0),t;default:return""}}function oc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Mr:return"Fragment";case Or:return"Portal";case rc:return"Profiler";case Dh:return"StrictMode";case ic:return"Suspense";case sc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case bg:return(t.displayName||"Context")+".Consumer";case Vg:return(t._context.displayName||"Context")+".Provider";case Ph:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Lh:return e=t.displayName||null,e!==null?e:oc(t.type)||"Memo";case hn:e=t._payload,t=t._init;try{return oc(t(e))}catch{}}return null}function hE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return oc(e);case 8:return e===Dh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function xn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function zg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function dE(t){var e=zg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function To(t){t._valueTracker||(t._valueTracker=dE(t))}function jg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=zg(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function da(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch{return t.body}}function ac(t,e){var n=e.checked;return le({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function Wf(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=xn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Hg(t,e){e=e.checked,e!=null&&xh(t,"checked",e,!1)}function lc(t,e){Hg(t,e);var n=xn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?uc(t,e.type,n):e.hasOwnProperty("defaultValue")&&uc(t,e.type,xn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Gf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function uc(t,e,n){(e!=="number"||da(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var qi=Array.isArray;function Yr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+xn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function cc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(_(91));return le({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Qf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(_(92));if(qi(n)){if(1<n.length)throw Error(_(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:xn(n)}}function qg(t,e){var n=xn(e.value),r=xn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Yf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Kg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Kg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ko,Wg=function(t){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ko=ko||document.createElement("div"),ko.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ko.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function cs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Yi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fE=["Webkit","ms","Moz","O"];Object.keys(Yi).forEach(function(t){fE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Yi[e]=Yi[t]})});function Gg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Yi.hasOwnProperty(t)&&Yi[t]?(""+e).trim():e+"px"}function Qg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Gg(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var pE=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dc(t,e){if(e){if(pE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(_(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(_(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(_(61))}if(e.style!=null&&typeof e.style!="object")throw Error(_(62))}}function fc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pc=null;function Oh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var mc=null,Xr=null,Jr=null;function Xf(t){if(t=Hs(t)){if(typeof mc!="function")throw Error(_(280));var e=t.stateNode;e&&(e=cl(e),mc(t.stateNode,t.type,e))}}function Yg(t){Xr?Jr?Jr.push(t):Jr=[t]:Xr=t}function Xg(){if(Xr){var t=Xr,e=Jr;if(Jr=Xr=null,Xf(t),e)for(t=0;t<e.length;t++)Xf(e[t])}}function Jg(t,e){return t(e)}function Zg(){}var hu=!1;function ey(t,e,n){if(hu)return t(e,n);hu=!0;try{return Jg(t,e,n)}finally{hu=!1,(Xr!==null||Jr!==null)&&(Zg(),Xg())}}function hs(t,e){var n=t.stateNode;if(n===null)return null;var r=cl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(_(231,e,typeof n));return n}var gc=!1;if(tn)try{var Mi={};Object.defineProperty(Mi,"passive",{get:function(){gc=!0}}),window.addEventListener("test",Mi,Mi),window.removeEventListener("test",Mi,Mi)}catch{gc=!1}function mE(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Xi=!1,fa=null,pa=!1,yc=null,gE={onError:function(t){Xi=!0,fa=t}};function yE(t,e,n,r,i,s,o,a,l){Xi=!1,fa=null,mE.apply(gE,arguments)}function vE(t,e,n,r,i,s,o,a,l){if(yE.apply(this,arguments),Xi){if(Xi){var u=fa;Xi=!1,fa=null}else throw Error(_(198));pa||(pa=!0,yc=u)}}function Nr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ty(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Jf(t){if(Nr(t)!==t)throw Error(_(188))}function wE(t){var e=t.alternate;if(!e){if(e=Nr(t),e===null)throw Error(_(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Jf(i),t;if(s===r)return Jf(i),e;s=s.sibling}throw Error(_(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?t:e}function ny(t){return t=wE(t),t!==null?ry(t):null}function ry(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ry(t);if(e!==null)return e;t=t.sibling}return null}var iy=dt.unstable_scheduleCallback,Zf=dt.unstable_cancelCallback,EE=dt.unstable_shouldYield,SE=dt.unstable_requestPaint,he=dt.unstable_now,_E=dt.unstable_getCurrentPriorityLevel,Mh=dt.unstable_ImmediatePriority,sy=dt.unstable_UserBlockingPriority,ma=dt.unstable_NormalPriority,IE=dt.unstable_LowPriority,oy=dt.unstable_IdlePriority,ol=null,$t=null;function TE(t){if($t&&typeof $t.onCommitFiberRoot=="function")try{$t.onCommitFiberRoot(ol,t,void 0,(t.current.flags&128)===128)}catch{}}var Rt=Math.clz32?Math.clz32:NE,kE=Math.log,CE=Math.LN2;function NE(t){return t>>>=0,t===0?32:31-(kE(t)/CE|0)|0}var Co=64,No=4194304;function Ki(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ga(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ki(a):(s&=o,s!==0&&(r=Ki(s)))}else o=n&~i,o!==0?r=Ki(o):s!==0&&(r=Ki(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Rt(e),i=1<<n,r|=t[n],e&=~i;return r}function AE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function RE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Rt(s),a=1<<o,l=i[o];l===-1?((a&n)===0||(a&r)!==0)&&(i[o]=AE(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function vc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ay(){var t=Co;return Co<<=1,(Co&4194240)===0&&(Co=64),t}function du(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function zs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Rt(e),t[e]=n}function xE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Rt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function $h(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Rt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Y=0;function ly(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var uy,Uh,cy,hy,dy,wc=!1,Ao=[],En=null,Sn=null,_n=null,ds=new Map,fs=new Map,fn=[],DE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ep(t,e){switch(t){case"focusin":case"focusout":En=null;break;case"dragenter":case"dragleave":Sn=null;break;case"mouseover":case"mouseout":_n=null;break;case"pointerover":case"pointerout":ds.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":fs.delete(e.pointerId)}}function $i(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Hs(e),e!==null&&Uh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function PE(t,e,n,r,i){switch(e){case"focusin":return En=$i(En,t,e,n,r,i),!0;case"dragenter":return Sn=$i(Sn,t,e,n,r,i),!0;case"mouseover":return _n=$i(_n,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ds.set(s,$i(ds.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,fs.set(s,$i(fs.get(s)||null,t,e,n,r,i)),!0}return!1}function fy(t){var e=Xn(t.target);if(e!==null){var n=Nr(e);if(n!==null){if(e=n.tag,e===13){if(e=ty(n),e!==null){t.blockedOn=e,dy(t.priority,function(){cy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Qo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ec(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);pc=r,n.target.dispatchEvent(r),pc=null}else return e=Hs(n),e!==null&&Uh(e),t.blockedOn=n,!1;e.shift()}return!0}function tp(t,e,n){Qo(t)&&n.delete(e)}function LE(){wc=!1,En!==null&&Qo(En)&&(En=null),Sn!==null&&Qo(Sn)&&(Sn=null),_n!==null&&Qo(_n)&&(_n=null),ds.forEach(tp),fs.forEach(tp)}function Ui(t,e){t.blockedOn===e&&(t.blockedOn=null,wc||(wc=!0,dt.unstable_scheduleCallback(dt.unstable_NormalPriority,LE)))}function ps(t){function e(i){return Ui(i,t)}if(0<Ao.length){Ui(Ao[0],t);for(var n=1;n<Ao.length;n++){var r=Ao[n];r.blockedOn===t&&(r.blockedOn=null)}}for(En!==null&&Ui(En,t),Sn!==null&&Ui(Sn,t),_n!==null&&Ui(_n,t),ds.forEach(e),fs.forEach(e),n=0;n<fn.length;n++)r=fn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<fn.length&&(n=fn[0],n.blockedOn===null);)fy(n),n.blockedOn===null&&fn.shift()}var Zr=an.ReactCurrentBatchConfig,ya=!0;function OE(t,e,n,r){var i=Y,s=Zr.transition;Zr.transition=null;try{Y=1,Fh(t,e,n,r)}finally{Y=i,Zr.transition=s}}function ME(t,e,n,r){var i=Y,s=Zr.transition;Zr.transition=null;try{Y=4,Fh(t,e,n,r)}finally{Y=i,Zr.transition=s}}function Fh(t,e,n,r){if(ya){var i=Ec(t,e,n,r);if(i===null)_u(t,e,r,va,n),ep(t,r);else if(PE(i,t,e,n,r))r.stopPropagation();else if(ep(t,r),e&4&&-1<DE.indexOf(t)){for(;i!==null;){var s=Hs(i);if(s!==null&&uy(s),s=Ec(t,e,n,r),s===null&&_u(t,e,r,va,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else _u(t,e,r,null,n)}}var va=null;function Ec(t,e,n,r){if(va=null,t=Oh(r),t=Xn(t),t!==null)if(e=Nr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=ty(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return va=t,null}function py(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_E()){case Mh:return 1;case sy:return 4;case ma:case IE:return 16;case oy:return 536870912;default:return 16}default:return 16}}var vn=null,Vh=null,Yo=null;function my(){if(Yo)return Yo;var t,e=Vh,n=e.length,r,i="value"in vn?vn.value:vn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Yo=i.slice(t,1<r?1-r:void 0)}function Xo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ro(){return!0}function np(){return!1}function mt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ro:np,this.isPropagationStopped=np,this}return le(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ro)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ro)},persist:function(){},isPersistent:Ro}),e}var ki={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bh=mt(ki),js=le({},ki,{view:0,detail:0}),$E=mt(js),fu,pu,Fi,al=le({},js,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fi&&(Fi&&t.type==="mousemove"?(fu=t.screenX-Fi.screenX,pu=t.screenY-Fi.screenY):pu=fu=0,Fi=t),fu)},movementY:function(t){return"movementY"in t?t.movementY:pu}}),rp=mt(al),UE=le({},al,{dataTransfer:0}),FE=mt(UE),VE=le({},js,{relatedTarget:0}),mu=mt(VE),bE=le({},ki,{animationName:0,elapsedTime:0,pseudoElement:0}),BE=mt(bE),zE=le({},ki,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),jE=mt(zE),HE=le({},ki,{data:0}),ip=mt(HE),qE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},KE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},WE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function GE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=WE[t])?!!e[t]:!1}function Bh(){return GE}var QE=le({},js,{key:function(t){if(t.key){var e=qE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Xo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?KE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bh,charCode:function(t){return t.type==="keypress"?Xo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Xo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),YE=mt(QE),XE=le({},al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sp=mt(XE),JE=le({},js,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bh}),ZE=mt(JE),eS=le({},ki,{propertyName:0,elapsedTime:0,pseudoElement:0}),tS=mt(eS),nS=le({},al,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),rS=mt(nS),iS=[9,13,27,32],zh=tn&&"CompositionEvent"in window,Ji=null;tn&&"documentMode"in document&&(Ji=document.documentMode);var sS=tn&&"TextEvent"in window&&!Ji,gy=tn&&(!zh||Ji&&8<Ji&&11>=Ji),op=String.fromCharCode(32),ap=!1;function yy(t,e){switch(t){case"keyup":return iS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $r=!1;function oS(t,e){switch(t){case"compositionend":return vy(e);case"keypress":return e.which!==32?null:(ap=!0,op);case"textInput":return t=e.data,t===op&&ap?null:t;default:return null}}function aS(t,e){if($r)return t==="compositionend"||!zh&&yy(t,e)?(t=my(),Yo=Vh=vn=null,$r=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return gy&&e.locale!=="ko"?null:e.data;default:return null}}var lS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!lS[t.type]:e==="textarea"}function wy(t,e,n,r){Yg(r),e=wa(e,"onChange"),0<e.length&&(n=new bh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Zi=null,ms=null;function uS(t){xy(t,0)}function ll(t){var e=Vr(t);if(jg(e))return t}function cS(t,e){if(t==="change")return e}var Ey=!1;if(tn){var gu;if(tn){var yu="oninput"in document;if(!yu){var up=document.createElement("div");up.setAttribute("oninput","return;"),yu=typeof up.oninput=="function"}gu=yu}else gu=!1;Ey=gu&&(!document.documentMode||9<document.documentMode)}function cp(){Zi&&(Zi.detachEvent("onpropertychange",Sy),ms=Zi=null)}function Sy(t){if(t.propertyName==="value"&&ll(ms)){var e=[];wy(e,ms,t,Oh(t)),ey(uS,e)}}function hS(t,e,n){t==="focusin"?(cp(),Zi=e,ms=n,Zi.attachEvent("onpropertychange",Sy)):t==="focusout"&&cp()}function dS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ll(ms)}function fS(t,e){if(t==="click")return ll(e)}function pS(t,e){if(t==="input"||t==="change")return ll(e)}function mS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var xt=typeof Object.is=="function"?Object.is:mS;function gs(t,e){if(xt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!nc.call(e,i)||!xt(t[i],e[i]))return!1}return!0}function hp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function dp(t,e){var n=hp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=hp(n)}}function _y(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?_y(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Iy(){for(var t=window,e=da();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=da(t.document)}return e}function jh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function gS(t){var e=Iy(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&_y(n.ownerDocument.documentElement,n)){if(r!==null&&jh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=dp(n,s);var o=dp(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var yS=tn&&"documentMode"in document&&11>=document.documentMode,Ur=null,Sc=null,es=null,_c=!1;function fp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_c||Ur==null||Ur!==da(r)||(r=Ur,"selectionStart"in r&&jh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),es&&gs(es,r)||(es=r,r=wa(Sc,"onSelect"),0<r.length&&(e=new bh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ur)))}function xo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Fr={animationend:xo("Animation","AnimationEnd"),animationiteration:xo("Animation","AnimationIteration"),animationstart:xo("Animation","AnimationStart"),transitionend:xo("Transition","TransitionEnd")},vu={},Ty={};tn&&(Ty=document.createElement("div").style,"AnimationEvent"in window||(delete Fr.animationend.animation,delete Fr.animationiteration.animation,delete Fr.animationstart.animation),"TransitionEvent"in window||delete Fr.transitionend.transition);function ul(t){if(vu[t])return vu[t];if(!Fr[t])return t;var e=Fr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ty)return vu[t]=e[n];return t}var ky=ul("animationend"),Cy=ul("animationiteration"),Ny=ul("animationstart"),Ay=ul("transitionend"),Ry=new Map,pp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fn(t,e){Ry.set(t,e),Cr(e,[t])}for(var wu=0;wu<pp.length;wu++){var Eu=pp[wu],vS=Eu.toLowerCase(),wS=Eu[0].toUpperCase()+Eu.slice(1);Fn(vS,"on"+wS)}Fn(ky,"onAnimationEnd");Fn(Cy,"onAnimationIteration");Fn(Ny,"onAnimationStart");Fn("dblclick","onDoubleClick");Fn("focusin","onFocus");Fn("focusout","onBlur");Fn(Ay,"onTransitionEnd");ai("onMouseEnter",["mouseout","mouseover"]);ai("onMouseLeave",["mouseout","mouseover"]);ai("onPointerEnter",["pointerout","pointerover"]);ai("onPointerLeave",["pointerout","pointerover"]);Cr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Cr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Cr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Cr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Cr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Cr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ES=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wi));function mp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,vE(r,e,void 0,t),t.currentTarget=null}function xy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;mp(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;mp(i,a,u),s=l}}}if(pa)throw t=yc,pa=!1,yc=null,t}function te(t,e){var n=e[Nc];n===void 0&&(n=e[Nc]=new Set);var r=t+"__bubble";n.has(r)||(Dy(e,t,2,!1),n.add(r))}function Su(t,e,n){var r=0;e&&(r|=4),Dy(n,t,r,e)}var Do="_reactListening"+Math.random().toString(36).slice(2);function ys(t){if(!t[Do]){t[Do]=!0,Fg.forEach(function(n){n!=="selectionchange"&&(ES.has(n)||Su(n,!1,t),Su(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Do]||(e[Do]=!0,Su("selectionchange",!1,e))}}function Dy(t,e,n,r){switch(py(e)){case 1:var i=OE;break;case 4:i=ME;break;default:i=Fh}n=i.bind(null,e,n,t),i=void 0,!gc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function _u(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Xn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}ey(function(){var u=s,c=Oh(n),h=[];e:{var d=Ry.get(t);if(d!==void 0){var y=bh,m=t;switch(t){case"keypress":if(Xo(n)===0)break e;case"keydown":case"keyup":y=YE;break;case"focusin":m="focus",y=mu;break;case"focusout":m="blur",y=mu;break;case"beforeblur":case"afterblur":y=mu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=rp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=FE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=ZE;break;case ky:case Cy:case Ny:y=BE;break;case Ay:y=tS;break;case"scroll":y=$E;break;case"wheel":y=rS;break;case"copy":case"cut":case"paste":y=jE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=sp}var w=(e&4)!==0,N=!w&&t==="scroll",p=w?d!==null?d+"Capture":null:d;w=[];for(var f=u,g;f!==null;){g=f;var E=g.stateNode;if(g.tag===5&&E!==null&&(g=E,p!==null&&(E=hs(f,p),E!=null&&w.push(vs(f,E,g)))),N)break;f=f.return}0<w.length&&(d=new y(d,m,null,n,c),h.push({event:d,listeners:w}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",d&&n!==pc&&(m=n.relatedTarget||n.fromElement)&&(Xn(m)||m[nn]))break e;if((y||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,y?(m=n.relatedTarget||n.toElement,y=u,m=m?Xn(m):null,m!==null&&(N=Nr(m),m!==N||m.tag!==5&&m.tag!==6)&&(m=null)):(y=null,m=u),y!==m)){if(w=rp,E="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(w=sp,E="onPointerLeave",p="onPointerEnter",f="pointer"),N=y==null?d:Vr(y),g=m==null?d:Vr(m),d=new w(E,f+"leave",y,n,c),d.target=N,d.relatedTarget=g,E=null,Xn(c)===u&&(w=new w(p,f+"enter",m,n,c),w.target=g,w.relatedTarget=N,E=w),N=E,y&&m)t:{for(w=y,p=m,f=0,g=w;g;g=Pr(g))f++;for(g=0,E=p;E;E=Pr(E))g++;for(;0<f-g;)w=Pr(w),f--;for(;0<g-f;)p=Pr(p),g--;for(;f--;){if(w===p||p!==null&&w===p.alternate)break t;w=Pr(w),p=Pr(p)}w=null}else w=null;y!==null&&gp(h,d,y,w,!1),m!==null&&N!==null&&gp(h,N,m,w,!0)}}e:{if(d=u?Vr(u):window,y=d.nodeName&&d.nodeName.toLowerCase(),y==="select"||y==="input"&&d.type==="file")var T=cS;else if(lp(d))if(Ey)T=pS;else{T=dS;var C=hS}else(y=d.nodeName)&&y.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=fS);if(T&&(T=T(t,u))){wy(h,T,n,c);break e}C&&C(t,d,u),t==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&uc(d,"number",d.value)}switch(C=u?Vr(u):window,t){case"focusin":(lp(C)||C.contentEditable==="true")&&(Ur=C,Sc=u,es=null);break;case"focusout":es=Sc=Ur=null;break;case"mousedown":_c=!0;break;case"contextmenu":case"mouseup":case"dragend":_c=!1,fp(h,n,c);break;case"selectionchange":if(yS)break;case"keydown":case"keyup":fp(h,n,c)}var x;if(zh)e:{switch(t){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else $r?yy(t,n)&&(S="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(gy&&n.locale!=="ko"&&($r||S!=="onCompositionStart"?S==="onCompositionEnd"&&$r&&(x=my()):(vn=c,Vh="value"in vn?vn.value:vn.textContent,$r=!0)),C=wa(u,S),0<C.length&&(S=new ip(S,t,null,n,c),h.push({event:S,listeners:C}),x?S.data=x:(x=vy(n),x!==null&&(S.data=x)))),(x=sS?oS(t,n):aS(t,n))&&(u=wa(u,"onBeforeInput"),0<u.length&&(c=new ip("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=x))}xy(h,e)})}function vs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function wa(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=hs(t,n),s!=null&&r.unshift(vs(t,s,i)),s=hs(t,e),s!=null&&r.push(vs(t,s,i))),t=t.return}return r}function Pr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function gp(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=hs(n,s),l!=null&&o.unshift(vs(n,l,a))):i||(l=hs(n,s),l!=null&&o.push(vs(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var SS=/\r\n?/g,_S=/\u0000|\uFFFD/g;function yp(t){return(typeof t=="string"?t:""+t).replace(SS,`
`).replace(_S,"")}function Po(t,e,n){if(e=yp(e),yp(t)!==e&&n)throw Error(_(425))}function Ea(){}var Ic=null,Tc=null;function kc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Cc=typeof setTimeout=="function"?setTimeout:void 0,IS=typeof clearTimeout=="function"?clearTimeout:void 0,vp=typeof Promise=="function"?Promise:void 0,TS=typeof queueMicrotask=="function"?queueMicrotask:typeof vp!="undefined"?function(t){return vp.resolve(null).then(t).catch(kS)}:Cc;function kS(t){setTimeout(function(){throw t})}function Iu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ps(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ps(e)}function Kt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function wp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ci=Math.random().toString(36).slice(2),Mt="__reactFiber$"+Ci,ws="__reactProps$"+Ci,nn="__reactContainer$"+Ci,Nc="__reactEvents$"+Ci,CS="__reactListeners$"+Ci,NS="__reactHandles$"+Ci;function Xn(t){var e=t[Mt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[nn]||n[Mt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=wp(t);t!==null;){if(n=t[Mt])return n;t=wp(t)}return e}t=n,n=t.parentNode}return null}function Hs(t){return t=t[Mt]||t[nn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Vr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(_(33))}function cl(t){return t[ws]||null}var Ac=[],br=-1;function Vn(t){return{current:t}}function ne(t){0>br||(t.current=Ac[br],Ac[br]=null,br--)}function J(t,e){br++,Ac[br]=t.current,t.current=e}var Dn={},je=Vn(Dn),ot=Vn(!1),cr=Dn;function li(t,e){var n=t.type.contextTypes;if(!n)return Dn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function at(t){return t=t.childContextTypes,t!=null}function Sa(){ne(ot),ne(je)}function Ep(t,e,n){if(je.current!==Dn)throw Error(_(168));J(je,e),J(ot,n)}function Py(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(_(108,hE(t)||"Unknown",i));return le({},n,r)}function _a(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Dn,cr=je.current,J(je,t),J(ot,ot.current),!0}function Sp(t,e,n){var r=t.stateNode;if(!r)throw Error(_(169));n?(t=Py(t,e,cr),r.__reactInternalMemoizedMergedChildContext=t,ne(ot),ne(je),J(je,t)):ne(ot),J(ot,n)}var Ht=null,hl=!1,Tu=!1;function Ly(t){Ht===null?Ht=[t]:Ht.push(t)}function AS(t){hl=!0,Ly(t)}function bn(){if(!Tu&&Ht!==null){Tu=!0;var t=0,e=Y;try{var n=Ht;for(Y=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Ht=null,hl=!1}catch(i){throw Ht!==null&&(Ht=Ht.slice(t+1)),iy(Mh,bn),i}finally{Y=e,Tu=!1}}return null}var RS=an.ReactCurrentBatchConfig;function kt(t,e){if(t&&t.defaultProps){e=le({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Ia=Vn(null),Ta=null,Br=null,Hh=null;function qh(){Hh=Br=Ta=null}function Kh(t){var e=Ia.current;ne(Ia),t._currentValue=e}function Rc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ei(t,e){Ta=t,Hh=Br=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(st=!0),t.firstContext=null)}function _t(t){var e=t._currentValue;if(Hh!==t)if(t={context:t,memoizedValue:e,next:null},Br===null){if(Ta===null)throw Error(_(308));Br=t,Ta.dependencies={lanes:0,firstContext:t}}else Br=Br.next=t;return e}var At=null,dn=!1;function Wh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Oy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Jt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function In(t,e){var n=t.updateQueue;n!==null&&(n=n.shared,Iv(t)?(t=n.interleaved,t===null?(e.next=e,At===null?At=[n]:At.push(n)):(e.next=t.next,t.next=e),n.interleaved=e):(t=n.pending,t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e))}function Jo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,$h(t,n)}}function _p(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ka(t,e,n,r){var i=t.updateQueue;dn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,y=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=t,w=a;switch(d=e,y=n,w.tag){case 1:if(m=w.payload,typeof m=="function"){h=m.call(y,h,d);break e}h=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=w.payload,d=typeof m=="function"?m.call(y,h,d):m,d==null)break e;h=le({},h,d);break e;case 2:dn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else y={eventTime:y,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=y,l=h):c=c.next=y,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);fr|=o,t.lanes=o,t.memoizedState=h}}function Ip(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(_(191,i));i.call(r)}}}var My=new Ug.Component().refs;function xc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:le({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var dl={isMounted:function(t){return(t=t._reactInternals)?Nr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Xe(),i=kn(t),s=Jt(r,i);s.payload=e,n!=null&&(s.callback=n),In(t,s),e=Et(t,i,r),e!==null&&Jo(e,t,i)},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Xe(),i=kn(t),s=Jt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),In(t,s),e=Et(t,i,r),e!==null&&Jo(e,t,i)},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Xe(),r=kn(t),i=Jt(n,r);i.tag=2,e!=null&&(i.callback=e),In(t,i),e=Et(t,r,n),e!==null&&Jo(e,t,r)}};function Tp(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!gs(n,r)||!gs(i,s):!0}function $y(t,e,n){var r=!1,i=Dn,s=e.contextType;return typeof s=="object"&&s!==null?s=_t(s):(i=at(e)?cr:je.current,r=e.contextTypes,s=(r=r!=null)?li(t,i):Dn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=dl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function kp(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&dl.enqueueReplaceState(e,e.state,null)}function Dc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=My,Wh(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=_t(s):(s=at(e)?cr:je.current,i.context=li(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(xc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&dl.enqueueReplaceState(i,i.state,null),ka(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}var zr=[],jr=0,Ca=null,Na=0,gt=[],yt=0,hr=null,Wt=1,Gt="";function Kn(t,e){zr[jr++]=Na,zr[jr++]=Ca,Ca=t,Na=e}function Uy(t,e,n){gt[yt++]=Wt,gt[yt++]=Gt,gt[yt++]=hr,hr=t;var r=Wt;t=Gt;var i=32-Rt(r)-1;r&=~(1<<i),n+=1;var s=32-Rt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Wt=1<<32-Rt(e)+i|n<<i|r,Gt=s+t}else Wt=1<<s|n<<i|r,Gt=t}function Gh(t){t.return!==null&&(Kn(t,1),Uy(t,1,0))}function Qh(t){for(;t===Ca;)Ca=zr[--jr],zr[jr]=null,Na=zr[--jr],zr[jr]=null;for(;t===hr;)hr=gt[--yt],gt[yt]=null,Gt=gt[--yt],gt[yt]=null,Wt=gt[--yt],gt[yt]=null}var ht=null,rt=null,ie=!1,Nt=null;function Fy(t,e){var n=vt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Cp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ht=t,rt=Kt(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ht=t,rt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=hr!==null?{id:Wt,overflow:Gt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=vt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ht=t,rt=null,!0):!1;default:return!1}}function Pc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Lc(t){if(ie){var e=rt;if(e){var n=e;if(!Cp(t,e)){if(Pc(t))throw Error(_(418));e=Kt(n.nextSibling);var r=ht;e&&Cp(t,e)?Fy(r,n):(t.flags=t.flags&-4097|2,ie=!1,ht=t)}}else{if(Pc(t))throw Error(_(418));t.flags=t.flags&-4097|2,ie=!1,ht=t}}}function Np(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ht=t}function Vi(t){if(t!==ht)return!1;if(!ie)return Np(t),ie=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!kc(t.type,t.memoizedProps)),e&&(e=rt)){if(Pc(t)){for(t=rt;t;)t=Kt(t.nextSibling);throw Error(_(418))}for(;e;)Fy(t,e),e=Kt(e.nextSibling)}if(Np(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(_(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){rt=Kt(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}rt=null}}else rt=ht?Kt(t.stateNode.nextSibling):null;return!0}function ui(){rt=ht=null,ie=!1}function Yh(t){Nt===null?Nt=[t]:Nt.push(t)}function bi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===My&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,t))}return t}function Lo(t,e){throw t=Object.prototype.toString.call(e),Error(_(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ap(t){var e=t._init;return e(t._payload)}function Vy(t){function e(p,f){if(t){var g=p.deletions;g===null?(p.deletions=[f],p.flags|=16):g.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=Pn(p,f),p.index=0,p.sibling=null,p}function s(p,f,g){return p.index=g,t?(g=p.alternate,g!==null?(g=g.index,g<f?(p.flags|=2,f):g):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,g,E){return f===null||f.tag!==6?(f=xu(g,p.mode,E),f.return=p,f):(f=i(f,g),f.return=p,f)}function l(p,f,g,E){var T=g.type;return T===Mr?c(p,f,g.props.children,E,g.key):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===hn&&Ap(T)===f.type)?(E=i(f,g.props),E.ref=bi(p,f,g),E.return=p,E):(E=ra(g.type,g.key,g.props,null,p.mode,E),E.ref=bi(p,f,g),E.return=p,E)}function u(p,f,g,E){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=Du(g,p.mode,E),f.return=p,f):(f=i(f,g.children||[]),f.return=p,f)}function c(p,f,g,E,T){return f===null||f.tag!==7?(f=ir(g,p.mode,E,T),f.return=p,f):(f=i(f,g),f.return=p,f)}function h(p,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=xu(""+f,p.mode,g),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Io:return g=ra(f.type,f.key,f.props,null,p.mode,g),g.ref=bi(p,null,f),g.return=p,g;case Or:return f=Du(f,p.mode,g),f.return=p,f;case hn:var E=f._init;return h(p,E(f._payload),g)}if(qi(f)||Oi(f))return f=ir(f,p.mode,g,null),f.return=p,f;Lo(p,f)}return null}function d(p,f,g,E){var T=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return T!==null?null:a(p,f,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Io:return g.key===T?l(p,f,g,E):null;case Or:return g.key===T?u(p,f,g,E):null;case hn:return T=g._init,d(p,f,T(g._payload),E)}if(qi(g)||Oi(g))return T!==null?null:c(p,f,g,E,null);Lo(p,g)}return null}function y(p,f,g,E,T){if(typeof E=="string"&&E!==""||typeof E=="number")return p=p.get(g)||null,a(f,p,""+E,T);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Io:return p=p.get(E.key===null?g:E.key)||null,l(f,p,E,T);case Or:return p=p.get(E.key===null?g:E.key)||null,u(f,p,E,T);case hn:var C=E._init;return y(p,f,g,C(E._payload),T)}if(qi(E)||Oi(E))return p=p.get(g)||null,c(f,p,E,T,null);Lo(f,E)}return null}function m(p,f,g,E){for(var T=null,C=null,x=f,S=f=0,L=null;x!==null&&S<g.length;S++){x.index>S?(L=x,x=null):L=x.sibling;var O=d(p,x,g[S],E);if(O===null){x===null&&(x=L);break}t&&x&&O.alternate===null&&e(p,x),f=s(O,f,S),C===null?T=O:C.sibling=O,C=O,x=L}if(S===g.length)return n(p,x),ie&&Kn(p,S),T;if(x===null){for(;S<g.length;S++)x=h(p,g[S],E),x!==null&&(f=s(x,f,S),C===null?T=x:C.sibling=x,C=x);return ie&&Kn(p,S),T}for(x=r(p,x);S<g.length;S++)L=y(x,p,S,g[S],E),L!==null&&(t&&L.alternate!==null&&x.delete(L.key===null?S:L.key),f=s(L,f,S),C===null?T=L:C.sibling=L,C=L);return t&&x.forEach(function(ee){return e(p,ee)}),ie&&Kn(p,S),T}function w(p,f,g,E){var T=Oi(g);if(typeof T!="function")throw Error(_(150));if(g=T.call(g),g==null)throw Error(_(151));for(var C=T=null,x=f,S=f=0,L=null,O=g.next();x!==null&&!O.done;S++,O=g.next()){x.index>S?(L=x,x=null):L=x.sibling;var ee=d(p,x,O.value,E);if(ee===null){x===null&&(x=L);break}t&&x&&ee.alternate===null&&e(p,x),f=s(ee,f,S),C===null?T=ee:C.sibling=ee,C=ee,x=L}if(O.done)return n(p,x),ie&&Kn(p,S),T;if(x===null){for(;!O.done;S++,O=g.next())O=h(p,O.value,E),O!==null&&(f=s(O,f,S),C===null?T=O:C.sibling=O,C=O);return ie&&Kn(p,S),T}for(x=r(p,x);!O.done;S++,O=g.next())O=y(x,p,S,O.value,E),O!==null&&(t&&O.alternate!==null&&x.delete(O.key===null?S:O.key),f=s(O,f,S),C===null?T=O:C.sibling=O,C=O);return t&&x.forEach(function(He){return e(p,He)}),ie&&Kn(p,S),T}function N(p,f,g,E){if(typeof g=="object"&&g!==null&&g.type===Mr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Io:e:{for(var T=g.key,C=f;C!==null;){if(C.key===T){if(T=g.type,T===Mr){if(C.tag===7){n(p,C.sibling),f=i(C,g.props.children),f.return=p,p=f;break e}}else if(C.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===hn&&Ap(T)===C.type){n(p,C.sibling),f=i(C,g.props),f.ref=bi(p,C,g),f.return=p,p=f;break e}n(p,C);break}else e(p,C);C=C.sibling}g.type===Mr?(f=ir(g.props.children,p.mode,E,g.key),f.return=p,p=f):(E=ra(g.type,g.key,g.props,null,p.mode,E),E.ref=bi(p,f,g),E.return=p,p=E)}return o(p);case Or:e:{for(C=g.key;f!==null;){if(f.key===C)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(p,f.sibling),f=i(f,g.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=Du(g,p.mode,E),f.return=p,p=f}return o(p);case hn:return C=g._init,N(p,f,C(g._payload),E)}if(qi(g))return m(p,f,g,E);if(Oi(g))return w(p,f,g,E);Lo(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,g),f.return=p,p=f):(n(p,f),f=xu(g,p.mode,E),f.return=p,p=f),o(p)):n(p,f)}return N}var ci=Vy(!0),by=Vy(!1),qs={},Ut=Vn(qs),Es=Vn(qs),Ss=Vn(qs);function Jn(t){if(t===qs)throw Error(_(174));return t}function Xh(t,e){switch(J(Ss,e),J(Es,t),J(Ut,qs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:hc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=hc(e,t)}ne(Ut),J(Ut,e)}function hi(){ne(Ut),ne(Es),ne(Ss)}function By(t){Jn(Ss.current);var e=Jn(Ut.current),n=hc(e,t.type);e!==n&&(J(Es,t),J(Ut,n))}function Jh(t){Es.current===t&&(ne(Ut),ne(Es))}var oe=Vn(0);function Aa(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ku=[];function Zh(){for(var t=0;t<ku.length;t++)ku[t]._workInProgressVersionPrimary=null;ku.length=0}var Zo=an.ReactCurrentDispatcher,Cu=an.ReactCurrentBatchConfig,dr=0,ae=null,ge=null,Se=null,Ra=!1,ts=!1,_s=0,xS=0;function $e(){throw Error(_(321))}function ed(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!xt(t[n],e[n]))return!1;return!0}function td(t,e,n,r,i,s){if(dr=s,ae=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Zo.current=t===null||t.memoizedState===null?OS:MS,t=n(r,i),ts){s=0;do{if(ts=!1,_s=0,25<=s)throw Error(_(301));s+=1,Se=ge=null,e.updateQueue=null,Zo.current=$S,t=n(r,i)}while(ts)}if(Zo.current=xa,e=ge!==null&&ge.next!==null,dr=0,Se=ge=ae=null,Ra=!1,e)throw Error(_(300));return t}function nd(){var t=_s!==0;return _s=0,t}function Ot(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?ae.memoizedState=Se=t:Se=Se.next=t,Se}function It(){if(ge===null){var t=ae.alternate;t=t!==null?t.memoizedState:null}else t=ge.next;var e=Se===null?ae.memoizedState:Se.next;if(e!==null)Se=e,ge=t;else{if(t===null)throw Error(_(310));ge=t,t={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},Se===null?ae.memoizedState=Se=t:Se=Se.next=t}return Se}function Is(t,e){return typeof e=="function"?e(t):e}function Nu(t){var e=It(),n=e.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=t;var r=ge,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((dr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,ae.lanes|=c,fr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,xt(r,e.memoizedState)||(st=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ae.lanes|=s,fr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Au(t){var e=It(),n=e.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);xt(s,e.memoizedState)||(st=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function zy(){}function jy(t,e){var n=ae,r=It(),i=e(),s=!xt(r.memoizedState,i);if(s&&(r.memoizedState=i,st=!0),r=r.queue,rd(Ky.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Se!==null&&Se.memoizedState.tag&1){if(n.flags|=2048,Ts(9,qy.bind(null,n,r,i,e),void 0,null),ve===null)throw Error(_(349));(dr&30)!==0||Hy(n,e,i)}return i}function Hy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ae.updateQueue,e===null?(e={lastEffect:null,stores:null},ae.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function qy(t,e,n,r){e.value=n,e.getSnapshot=r,Wy(e)&&Et(t,1,-1)}function Ky(t,e,n){return n(function(){Wy(e)&&Et(t,1,-1)})}function Wy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!xt(t,n)}catch{return!0}}function Rp(t){var e=Ot();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Is,lastRenderedState:t},e.queue=t,t=t.dispatch=LS.bind(null,ae,t),[e.memoizedState,t]}function Ts(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ae.updateQueue,e===null?(e={lastEffect:null,stores:null},ae.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Gy(){return It().memoizedState}function ea(t,e,n,r){var i=Ot();ae.flags|=t,i.memoizedState=Ts(1|e,n,void 0,r===void 0?null:r)}function fl(t,e,n,r){var i=It();r=r===void 0?null:r;var s=void 0;if(ge!==null){var o=ge.memoizedState;if(s=o.destroy,r!==null&&ed(r,o.deps)){i.memoizedState=Ts(e,n,s,r);return}}ae.flags|=t,i.memoizedState=Ts(1|e,n,s,r)}function xp(t,e){return ea(8390656,8,t,e)}function rd(t,e){return fl(2048,8,t,e)}function Qy(t,e){return fl(4,2,t,e)}function Yy(t,e){return fl(4,4,t,e)}function Xy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Jy(t,e,n){return n=n!=null?n.concat([t]):null,fl(4,4,Xy.bind(null,e,t),n)}function id(){}function Zy(t,e){var n=It();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ed(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function ev(t,e){var n=It();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ed(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function tv(t,e,n){return(dr&21)===0?(t.baseState&&(t.baseState=!1,st=!0),t.memoizedState=n):(xt(n,e)||(n=ay(),ae.lanes|=n,fr|=n,t.baseState=!0),e)}function DS(t,e){var n=Y;Y=n!==0&&4>n?n:4,t(!0);var r=Cu.transition;Cu.transition={};try{t(!1),e()}finally{Y=n,Cu.transition=r}}function nv(){return It().memoizedState}function PS(t,e,n){var r=kn(t);n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},rv(t)?iv(e,n):(sv(t,e,n),n=Xe(),t=Et(t,r,n),t!==null&&ov(t,e,r))}function LS(t,e,n){var r=kn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(rv(t))iv(e,i);else{sv(t,e,i);var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,xt(a,o))return}catch{}finally{}n=Xe(),t=Et(t,r,n),t!==null&&ov(t,e,r)}}function rv(t){var e=t.alternate;return t===ae||e!==null&&e===ae}function iv(t,e){ts=Ra=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function sv(t,e,n){Iv(t)?(t=e.interleaved,t===null?(n.next=n,At===null?At=[e]:At.push(e)):(n.next=t.next,t.next=n),e.interleaved=n):(t=e.pending,t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n)}function ov(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,$h(t,n)}}var xa={readContext:_t,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useInsertionEffect:$e,useLayoutEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useMutableSource:$e,useSyncExternalStore:$e,useId:$e,unstable_isNewReconciler:!1},OS={readContext:_t,useCallback:function(t,e){return Ot().memoizedState=[t,e===void 0?null:e],t},useContext:_t,useEffect:xp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ea(4194308,4,Xy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ea(4194308,4,t,e)},useInsertionEffect:function(t,e){return ea(4,2,t,e)},useMemo:function(t,e){var n=Ot();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Ot();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=PS.bind(null,ae,t),[r.memoizedState,t]},useRef:function(t){var e=Ot();return t={current:t},e.memoizedState=t},useState:Rp,useDebugValue:id,useDeferredValue:function(t){return Ot().memoizedState=t},useTransition:function(){var t=Rp(!1),e=t[0];return t=DS.bind(null,t[1]),Ot().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ae,i=Ot();if(ie){if(n===void 0)throw Error(_(407));n=n()}else{if(n=e(),ve===null)throw Error(_(349));(dr&30)!==0||Hy(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,xp(Ky.bind(null,r,s,t),[t]),r.flags|=2048,Ts(9,qy.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Ot(),e=ve.identifierPrefix;if(ie){var n=Gt,r=Wt;n=(r&~(1<<32-Rt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=_s++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=xS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},MS={readContext:_t,useCallback:Zy,useContext:_t,useEffect:rd,useImperativeHandle:Jy,useInsertionEffect:Qy,useLayoutEffect:Yy,useMemo:ev,useReducer:Nu,useRef:Gy,useState:function(){return Nu(Is)},useDebugValue:id,useDeferredValue:function(t){var e=It();return tv(e,ge.memoizedState,t)},useTransition:function(){var t=Nu(Is)[0],e=It().memoizedState;return[t,e]},useMutableSource:zy,useSyncExternalStore:jy,useId:nv,unstable_isNewReconciler:!1},$S={readContext:_t,useCallback:Zy,useContext:_t,useEffect:rd,useImperativeHandle:Jy,useInsertionEffect:Qy,useLayoutEffect:Yy,useMemo:ev,useReducer:Au,useRef:Gy,useState:function(){return Au(Is)},useDebugValue:id,useDeferredValue:function(t){var e=It();return ge===null?e.memoizedState=t:tv(e,ge.memoizedState,t)},useTransition:function(){var t=Au(Is)[0],e=It().memoizedState;return[t,e]},useMutableSource:zy,useSyncExternalStore:jy,useId:nv,unstable_isNewReconciler:!1};function sd(t,e){try{var n="",r=e;do n+=cE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i}}function Oc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var US=typeof WeakMap=="function"?WeakMap:Map;function av(t,e,n){n=Jt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Pa||(Pa=!0,jc=r),Oc(t,e)},n}function lv(t,e,n){n=Jt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Oc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Oc(t,e),typeof r!="function"&&(Tn===null?Tn=new Set([this]):Tn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Dp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new US;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=YS.bind(null,t,e,n),e.then(t,t))}function Pp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Lp(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Jt(-1,1),e.tag=2,In(n,e))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var uv,Mc,cv,hv;uv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Mc=function(){};cv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Jn(Ut.current);var s=null;switch(n){case"input":i=ac(t,i),r=ac(t,r),s=[];break;case"select":i=le({},i,{value:void 0}),r=le({},r,{value:void 0}),s=[];break;case"textarea":i=cc(t,i),r=cc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ea)}dc(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(us.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(us.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&te("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};hv=function(t,e,n,r){n!==r&&(e.flags|=4)};function Bi(t,e){if(!ie)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ue(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function FS(t,e,n){var r=e.pendingProps;switch(Qh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ue(e),null;case 1:return at(e.type)&&Sa(),Ue(e),null;case 3:return r=e.stateNode,hi(),ne(ot),ne(je),Zh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Vi(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Nt!==null&&(Kc(Nt),Nt=null))),Mc(t,e),Ue(e),null;case 5:Jh(e);var i=Jn(Ss.current);if(n=e.type,t!==null&&e.stateNode!=null)cv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(_(166));return Ue(e),null}if(t=Jn(Ut.current),Vi(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Mt]=e,r[ws]=s,t=(e.mode&1)!==0,n){case"dialog":te("cancel",r),te("close",r);break;case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(i=0;i<Wi.length;i++)te(Wi[i],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"details":te("toggle",r);break;case"input":Wf(r,s),te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},te("invalid",r);break;case"textarea":Qf(r,s),te("invalid",r)}dc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Po(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Po(r.textContent,a,t),i=["children",""+a]):us.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&te("scroll",r)}switch(n){case"input":To(r),Gf(r,s,!0);break;case"textarea":To(r),Yf(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ea)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Kg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Mt]=e,t[ws]=r,uv(t,e,!1,!1),e.stateNode=t;e:{switch(o=fc(n,r),n){case"dialog":te("cancel",t),te("close",t),i=r;break;case"iframe":case"object":case"embed":te("load",t),i=r;break;case"video":case"audio":for(i=0;i<Wi.length;i++)te(Wi[i],t);i=r;break;case"source":te("error",t),i=r;break;case"img":case"image":case"link":te("error",t),te("load",t),i=r;break;case"details":te("toggle",t),i=r;break;case"input":Wf(t,r),i=ac(t,r),te("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=le({},r,{value:void 0}),te("invalid",t);break;case"textarea":Qf(t,r),i=cc(t,r),te("invalid",t);break;default:i=r}dc(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Qg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Wg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&cs(t,l):typeof l=="number"&&cs(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(us.hasOwnProperty(s)?l!=null&&s==="onScroll"&&te("scroll",t):l!=null&&xh(t,s,l,o))}switch(n){case"input":To(t),Gf(t,r,!1);break;case"textarea":To(t),Yf(t);break;case"option":r.value!=null&&t.setAttribute("value",""+xn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Yr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Yr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ea)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ue(e),null;case 6:if(t&&e.stateNode!=null)hv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(_(166));if(n=Jn(Ss.current),Jn(Ut.current),Vi(e)){if(r=e.stateNode,n=e.memoizedProps,r[Mt]=e,(s=r.nodeValue!==n)&&(t=ht,t!==null))switch(t.tag){case 3:Po(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Po(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Mt]=e,e.stateNode=r}return Ue(e),null;case 13:if(ne(oe),r=e.memoizedState,ie&&rt!==null&&(e.mode&1)!==0&&(e.flags&128)===0){for(r=rt;r;)r=Kt(r.nextSibling);return ui(),e.flags|=98560,e}if(r!==null&&r.dehydrated!==null){if(r=Vi(e),t===null){if(!r)throw Error(_(318));if(r=e.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(_(317));r[Mt]=e}else ui(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;return Ue(e),null}return Nt!==null&&(Kc(Nt),Nt=null),(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,n=!1,t===null?Vi(e):n=t.memoizedState!==null,r!==n&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(oe.current&1)!==0?ye===0&&(ye=3):hd())),e.updateQueue!==null&&(e.flags|=4),Ue(e),null);case 4:return hi(),Mc(t,e),t===null&&ys(e.stateNode.containerInfo),Ue(e),null;case 10:return Kh(e.type._context),Ue(e),null;case 17:return at(e.type)&&Sa(),Ue(e),null;case 19:if(ne(oe),s=e.memoizedState,s===null)return Ue(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Bi(s,!1);else{if(ye!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=Aa(t),o!==null){for(e.flags|=128,Bi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return J(oe,oe.current&1|2),e.child}t=t.sibling}s.tail!==null&&he()>di&&(e.flags|=128,r=!0,Bi(s,!1),e.lanes=4194304)}else{if(!r)if(t=Aa(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Bi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ie)return Ue(e),null}else 2*he()-s.renderingStartTime>di&&n!==1073741824&&(e.flags|=128,r=!0,Bi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=he(),e.sibling=null,n=oe.current,J(oe,r?n&1|2:n&1),e):(Ue(e),null);case 22:case 23:return cd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(ut&1073741824)!==0&&(Ue(e),e.subtreeFlags&6&&(e.flags|=8192)):Ue(e),null;case 24:return null;case 25:return null}throw Error(_(156,e.tag))}var VS=an.ReactCurrentOwner,st=!1;function Ke(t,e,n,r){e.child=t===null?by(e,null,n,r):ci(e,t.child,n,r)}function Op(t,e,n,r,i){n=n.render;var s=e.ref;return ei(e,i),r=td(t,e,n,r,s,i),n=nd(),t!==null&&!st?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,rn(t,e,i)):(ie&&n&&Gh(e),e.flags|=1,Ke(t,e,r,i),e.child)}function Mp(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!dd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,dv(t,e,s,r,i)):(t=ra(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:gs,n(o,r)&&t.ref===e.ref)return rn(t,e,i)}return e.flags|=1,t=Pn(s,r),t.ref=e.ref,t.return=e,e.child=t}function dv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(gs(s,r)&&t.ref===e.ref)if(st=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(st=!0);else return e.lanes=t.lanes,rn(t,e,i)}return $c(t,e,n,r,i)}function fv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},J(qr,ut),ut|=n;else if((n&1073741824)!==0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,J(qr,ut),ut|=r;else return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,J(qr,ut),ut|=t,null;else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,J(qr,ut),ut|=r;return Ke(t,e,i,n),e.child}function pv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function $c(t,e,n,r,i){var s=at(n)?cr:je.current;return s=li(e,s),ei(e,i),n=td(t,e,n,r,s,i),r=nd(),t!==null&&!st?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,rn(t,e,i)):(ie&&r&&Gh(e),e.flags|=1,Ke(t,e,n,i),e.child)}function $p(t,e,n,r,i){if(at(n)){var s=!0;_a(e)}else s=!1;if(ei(e,i),e.stateNode===null)t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),$y(e,n,r),Dc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=_t(u):(u=at(n)?cr:je.current,u=li(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&kp(e,o,r,u),dn=!1;var d=e.memoizedState;o.state=d,ka(e,r,o,i),l=e.memoizedState,a!==r||d!==l||ot.current||dn?(typeof c=="function"&&(xc(e,n,c,r),l=e.memoizedState),(a=dn||Tp(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Oy(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:kt(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=_t(l):(l=at(n)?cr:je.current,l=li(e,l));var y=n.getDerivedStateFromProps;(c=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&kp(e,o,r,l),dn=!1,d=e.memoizedState,o.state=d,ka(e,r,o,i);var m=e.memoizedState;a!==h||d!==m||ot.current||dn?(typeof y=="function"&&(xc(e,n,y,r),m=e.memoizedState),(u=dn||Tp(e,n,u,r,d,m,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=m),o.props=r,o.state=m,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Uc(t,e,n,r,s,i)}function Uc(t,e,n,r,i,s){pv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Sp(e,n,!1),rn(t,e,s);r=e.stateNode,VS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ci(e,t.child,null,s),e.child=ci(e,null,a,s)):Ke(t,e,a,s),e.memoizedState=r.state,i&&Sp(e,n,!0),e.child}function mv(t){var e=t.stateNode;e.pendingContext?Ep(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ep(t,e.context,!1),Xh(t,e.containerInfo)}function Up(t,e,n,r,i){return ui(),Yh(i),e.flags|=256,Ke(t,e,n,r),e.child}var Oo={dehydrated:null,treeContext:null,retryLane:0};function Mo(t){return{baseLanes:t,cachePool:null,transitions:null}}function Fp(t,e){return{baseLanes:t.baseLanes|e,cachePool:null,transitions:t.transitions}}function gv(t,e,n){var r=e.pendingProps,i=oe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),J(oe,i&1),t===null)return Lc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(i=r.children,t=r.fallback,s?(r=e.mode,s=e.child,i={mode:"hidden",children:i},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=i):s=Ma(i,r,0,null),t=ir(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Mo(n),e.memoizedState=Oo,t):Fc(e,i));if(i=t.memoizedState,i!==null){if(a=i.dehydrated,a!==null){if(o)return e.flags&256?(e.flags&=-257,$o(t,e,n,Error(_(422)))):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ma({mode:"visible",children:r.children},i,0,null),s=ir(s,i,n,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&ci(e,t.child,null,n),e.child.memoizedState=Mo(n),e.memoizedState=Oo,s);if((e.mode&1)===0)e=$o(t,e,n,null);else if(a.data==="$!")e=$o(t,e,n,Error(_(419)));else if(r=(n&t.childLanes)!==0,st||r){if(r=ve,r!==null){switch(n&-n){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}r=(s&(r.suspendedLanes|n))!==0?0:s,r!==0&&r!==i.retryLane&&(i.retryLane=r,Et(t,r,-1))}hd(),e=$o(t,e,n,Error(_(421)))}else a.data==="$?"?(e.flags|=128,e.child=t.child,e=XS.bind(null,t),a._reactRetry=e,e=null):(n=i.treeContext,rt=Kt(a.nextSibling),ht=e,ie=!0,Nt=null,n!==null&&(gt[yt++]=Wt,gt[yt++]=Gt,gt[yt++]=hr,Wt=n.id,Gt=n.overflow,hr=e),e=Fc(e,e.pendingProps.children),e.flags|=4096);return e}return s?(r=bp(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?Mo(n):Fp(i,n),s.childLanes=t.childLanes&~n,e.memoizedState=Oo,r):(n=Vp(t,e,r.children,n),e.memoizedState=null,n)}return s?(r=bp(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?Mo(n):Fp(i,n),s.childLanes=t.childLanes&~n,e.memoizedState=Oo,r):(n=Vp(t,e,r.children,n),e.memoizedState=null,n)}function Fc(t,e){return e=Ma({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Vp(t,e,n,r){var i=t.child;return t=i.sibling,n=Pn(i,{mode:"visible",children:n}),(e.mode&1)===0&&(n.lanes=r),n.return=e,n.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=n}function bp(t,e,n,r,i){var s=e.mode;t=t.child;var o=t.sibling,a={mode:"hidden",children:n};return(s&1)===0&&e.child!==t?(n=e.child,n.childLanes=0,n.pendingProps=a,e.deletions=null):(n=Pn(t,a),n.subtreeFlags=t.subtreeFlags&14680064),o!==null?r=Pn(o,r):(r=ir(r,s,i,null),r.flags|=2),r.return=e,n.return=e,n.sibling=r,e.child=n,r}function $o(t,e,n,r){return r!==null&&Yh(r),ci(e,t.child,null,n),t=Fc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Bp(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Rc(t.return,e,n)}function Ru(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function yv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ke(t,e,r.children,n),r=oe.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Bp(t,n,e);else if(t.tag===19)Bp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(J(oe,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Aa(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ru(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Aa(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ru(e,!0,n,null,s);break;case"together":Ru(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function rn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),fr|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(_(153));if(e.child!==null){for(t=e.child,n=Pn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Pn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function bS(t,e,n){switch(e.tag){case 3:mv(e),ui();break;case 5:By(e);break;case 1:at(e.type)&&_a(e);break;case 4:Xh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;J(Ia,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(J(oe,oe.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?gv(t,e,n):(J(oe,oe.current&1),t=rn(t,e,n),t!==null?t.sibling:null);J(oe,oe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return yv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),J(oe,oe.current),r)break;return null;case 22:case 23:return e.lanes=0,fv(t,e,n)}return rn(t,e,n)}function BS(t,e){switch(Qh(e),e.tag){case 1:return at(e.type)&&Sa(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return hi(),ne(ot),ne(je),Zh(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return Jh(e),null;case 13:if(ne(oe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(_(340));ui()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ne(oe),null;case 4:return hi(),null;case 10:return Kh(e.type._context),null;case 22:case 23:return cd(),null;case 24:return null;default:return null}}var Uo=!1,Fe=!1,zS=typeof WeakSet=="function"?WeakSet:Set,A=null;function Hr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ue(t,e,r)}else n.current=null}function Vc(t,e,n){try{n()}catch(r){ue(t,e,r)}}var zp=!1;function jS(t,e){if(Ic=ya,t=Iy(),jh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var y;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(y=h.firstChild)!==null;)d=h,h=y;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(y=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Tc={focusedElem:t,selectionRange:n},ya=!1,A=e;A!==null;)if(e=A,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,A=t;else for(;A!==null;){e=A;try{var m=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var w=m.memoizedProps,N=m.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?w:kt(e.type,w),N);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;if(g.nodeType===1)g.textContent="";else if(g.nodeType===9){var E=g.body;E!=null&&(E.textContent="")}break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(T){ue(e,e.return,T)}if(t=e.sibling,t!==null){t.return=e.return,A=t;break}A=e.return}return m=zp,zp=!1,m}function ns(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Vc(e,n,s)}i=i.next}while(i!==r)}}function pl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function bc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function vv(t){var e=t.alternate;e!==null&&(t.alternate=null,vv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Mt],delete e[ws],delete e[Nc],delete e[CS],delete e[NS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function wv(t){return t.tag===5||t.tag===3||t.tag===4}function jp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||wv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Bc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ea));else if(r!==4&&(t=t.child,t!==null))for(Bc(t,e,n),t=t.sibling;t!==null;)Bc(t,e,n),t=t.sibling}function zc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(zc(t,e,n),t=t.sibling;t!==null;)zc(t,e,n),t=t.sibling}var Ce=null,Ct=!1;function un(t,e,n){for(n=n.child;n!==null;)Ev(t,e,n),n=n.sibling}function Ev(t,e,n){if($t&&typeof $t.onCommitFiberUnmount=="function")try{$t.onCommitFiberUnmount(ol,n)}catch{}switch(n.tag){case 5:Fe||Hr(n,e);case 6:var r=Ce,i=Ct;Ce=null,un(t,e,n),Ce=r,Ct=i,Ce!==null&&(Ct?(t=Ce,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ce.removeChild(n.stateNode));break;case 18:Ce!==null&&(Ct?(t=Ce,n=n.stateNode,t.nodeType===8?Iu(t.parentNode,n):t.nodeType===1&&Iu(t,n),ps(t)):Iu(Ce,n.stateNode));break;case 4:r=Ce,i=Ct,Ce=n.stateNode.containerInfo,Ct=!0,un(t,e,n),Ce=r,Ct=i;break;case 0:case 11:case 14:case 15:if(!Fe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&Vc(n,e,o),i=i.next}while(i!==r)}un(t,e,n);break;case 1:if(!Fe&&(Hr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ue(n,e,a)}un(t,e,n);break;case 21:un(t,e,n);break;case 22:n.mode&1?(Fe=(r=Fe)||n.memoizedState!==null,un(t,e,n),Fe=r):un(t,e,n);break;default:un(t,e,n)}}function Hp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new zS),e.forEach(function(r){var i=JS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Tt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ce=a.stateNode,Ct=!1;break e;case 3:Ce=a.stateNode.containerInfo,Ct=!0;break e;case 4:Ce=a.stateNode.containerInfo,Ct=!0;break e}a=a.return}if(Ce===null)throw Error(_(160));Ev(s,o,i),Ce=null,Ct=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ue(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Sv(e,t),e=e.sibling}function Sv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Tt(e,t),Lt(t),r&4){try{ns(3,t,t.return),pl(3,t)}catch(m){ue(t,t.return,m)}try{ns(5,t,t.return)}catch(m){ue(t,t.return,m)}}break;case 1:Tt(e,t),Lt(t),r&512&&n!==null&&Hr(n,n.return);break;case 5:if(Tt(e,t),Lt(t),r&512&&n!==null&&Hr(n,n.return),t.flags&32){var i=t.stateNode;try{cs(i,"")}catch(m){ue(t,t.return,m)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Hg(i,s),fc(a,o);var u=fc(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?Qg(i,h):c==="dangerouslySetInnerHTML"?Wg(i,h):c==="children"?cs(i,h):xh(i,c,h,u)}switch(a){case"input":lc(i,s);break;case"textarea":qg(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?Yr(i,!!s.multiple,y,!1):d!==!!s.multiple&&(s.defaultValue!=null?Yr(i,!!s.multiple,s.defaultValue,!0):Yr(i,!!s.multiple,s.multiple?[]:"",!1))}i[ws]=s}catch(m){ue(t,t.return,m)}}break;case 6:if(Tt(e,t),Lt(t),r&4){if(t.stateNode===null)throw Error(_(162));u=t.stateNode,c=t.memoizedProps;try{u.nodeValue=c}catch(m){ue(t,t.return,m)}}break;case 3:if(Tt(e,t),Lt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ps(e.containerInfo)}catch(m){ue(t,t.return,m)}break;case 4:Tt(e,t),Lt(t);break;case 13:Tt(e,t),Lt(t),u=t.child,u.flags&8192&&u.memoizedState!==null&&(u.alternate===null||u.alternate.memoizedState===null)&&(ld=he()),r&4&&Hp(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Fe=(c=Fe)||u,Tt(e,t),Fe=c):Tt(e,t),Lt(t),r&8192){c=t.memoizedState!==null;e:for(h=null,d=t;;){if(d.tag===5){if(h===null){h=d;try{i=d.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Gg("display",o))}catch(m){ue(t,t.return,m)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(m){ue(t,t.return,m)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}if(c&&!u&&(t.mode&1)!==0)for(A=t,t=t.child;t!==null;){for(u=A=t;A!==null;){switch(c=A,h=c.child,c.tag){case 0:case 11:case 14:case 15:ns(4,c,c.return);break;case 1:if(Hr(c,c.return),s=c.stateNode,typeof s.componentWillUnmount=="function"){d=c,y=c.return;try{i=d,s.props=i.memoizedProps,s.state=i.memoizedState,s.componentWillUnmount()}catch(m){ue(d,y,m)}}break;case 5:Hr(c,c.return);break;case 22:if(c.memoizedState!==null){Kp(u);continue}}h!==null?(h.return=c,A=h):Kp(u)}t=t.sibling}}break;case 19:Tt(e,t),Lt(t),r&4&&Hp(t);break;case 21:break;default:Tt(e,t),Lt(t)}}function Lt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(wv(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(cs(i,""),r.flags&=-33);var s=jp(t);zc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=jp(t);Bc(t,a,o);break;default:throw Error(_(161))}}catch(l){ue(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function HS(t,e,n){A=t,_v(t)}function _v(t,e,n){for(var r=(t.mode&1)!==0;A!==null;){var i=A,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Uo;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Fe;a=Uo;var u=Fe;if(Uo=o,(Fe=l)&&!u)for(A=i;A!==null;)o=A,l=o.child,o.tag===22&&o.memoizedState!==null?Wp(i):l!==null?(l.return=o,A=l):Wp(i);for(;s!==null;)A=s,_v(s),s=s.sibling;A=i,Uo=a,Fe=u}qp(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,A=s):qp(t)}}function qp(t){for(;A!==null;){var e=A;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:Fe||pl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Fe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:kt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ip(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ip(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&ps(h)}}}break;case 19:case 17:case 21:case 22:case 23:break;default:throw Error(_(163))}Fe||e.flags&512&&bc(e)}catch(d){ue(e,e.return,d)}}if(e===t){A=null;break}if(n=e.sibling,n!==null){n.return=e.return,A=n;break}A=e.return}}function Kp(t){for(;A!==null;){var e=A;if(e===t){A=null;break}var n=e.sibling;if(n!==null){n.return=e.return,A=n;break}A=e.return}}function Wp(t){for(;A!==null;){var e=A;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{pl(4,e)}catch(l){ue(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ue(e,i,l)}}var s=e.return;try{bc(e)}catch(l){ue(e,s,l)}break;case 5:var o=e.return;try{bc(e)}catch(l){ue(e,o,l)}}}catch(l){ue(e,e.return,l)}if(e===t){A=null;break}var a=e.sibling;if(a!==null){a.return=e.return,A=a;break}A=e.return}}var qS=Math.ceil,Da=an.ReactCurrentDispatcher,od=an.ReactCurrentOwner,wt=an.ReactCurrentBatchConfig,W=0,ve=null,pe=null,Re=0,ut=0,qr=Vn(0),ye=0,ks=null,fr=0,ml=0,ad=0,rs=null,nt=null,ld=0,di=1/0,jt=null,Pa=!1,jc=null,Tn=null,Fo=!1,wn=null,La=0,is=0,Hc=null,ta=-1,na=0;function Xe(){return(W&6)!==0?he():ta!==-1?ta:ta=he()}function kn(t){return(t.mode&1)===0?1:(W&2)!==0&&Re!==0?Re&-Re:RS.transition!==null?(na===0&&(na=ay()),na):(t=Y,t!==0||(t=window.event,t=t===void 0?16:py(t.type)),t)}function Et(t,e,n){if(50<is)throw is=0,Hc=null,Error(_(185));var r=gl(t,e);return r===null?null:(zs(r,e,n),((W&2)===0||r!==ve)&&(r===ve&&((W&2)===0&&(ml|=e),ye===4&&pn(r,Re)),lt(r,n),e===1&&W===0&&(t.mode&1)===0&&(di=he()+500,hl&&bn())),r)}function gl(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}function Iv(t){return(ve!==null||At!==null)&&(t.mode&1)!==0&&(W&2)===0}function lt(t,e){var n=t.callbackNode;RE(t,e);var r=ga(t,t===ve?Re:0);if(r===0)n!==null&&Zf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Zf(n),e===1)t.tag===0?AS(Gp.bind(null,t)):Ly(Gp.bind(null,t)),TS(function(){W===0&&bn()}),n=null;else{switch(ly(r)){case 1:n=Mh;break;case 4:n=sy;break;case 16:n=ma;break;case 536870912:n=oy;break;default:n=ma}n=Dv(n,Tv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Tv(t,e){if(ta=-1,na=0,(W&6)!==0)throw Error(_(327));var n=t.callbackNode;if(ti()&&t.callbackNode!==n)return null;var r=ga(t,t===ve?Re:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=Oa(t,r);else{e=r;var i=W;W|=2;var s=Cv();(ve!==t||Re!==e)&&(jt=null,di=he()+500,rr(t,e));do try{GS();break}catch(a){kv(t,a)}while(1);qh(),Da.current=s,W=i,pe!==null?e=0:(ve=null,Re=0,e=ye)}if(e!==0){if(e===2&&(i=vc(t),i!==0&&(r=i,e=qc(t,i))),e===1)throw n=ks,rr(t,0),pn(t,r),lt(t,he()),n;if(e===6)pn(t,r);else{if(i=t.current.alternate,(r&30)===0&&!KS(i)&&(e=Oa(t,r),e===2&&(s=vc(t),s!==0&&(r=s,e=qc(t,s))),e===1))throw n=ks,rr(t,0),pn(t,r),lt(t,he()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(_(345));case 2:Wn(t,nt,jt);break;case 3:if(pn(t,r),(r&130023424)===r&&(e=ld+500-he(),10<e)){if(ga(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Xe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Cc(Wn.bind(null,t,nt,jt),e);break}Wn(t,nt,jt);break;case 4:if(pn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Rt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=he()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*qS(r/1960))-r,10<r){t.timeoutHandle=Cc(Wn.bind(null,t,nt,jt),r);break}Wn(t,nt,jt);break;case 5:Wn(t,nt,jt);break;default:throw Error(_(329))}}}return lt(t,he()),t.callbackNode===n?Tv.bind(null,t):null}function qc(t,e){var n=rs;return t.current.memoizedState.isDehydrated&&(rr(t,e).flags|=256),t=Oa(t,e),t!==2&&(e=nt,nt=n,e!==null&&Kc(e)),t}function Kc(t){nt===null?nt=t:nt.push.apply(nt,t)}function KS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!xt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function pn(t,e){for(e&=~ad,e&=~ml,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Rt(e),r=1<<n;t[n]=-1,e&=~r}}function Gp(t){if((W&6)!==0)throw Error(_(327));ti();var e=ga(t,0);if((e&1)===0)return lt(t,he()),null;var n=Oa(t,e);if(t.tag!==0&&n===2){var r=vc(t);r!==0&&(e=r,n=qc(t,r))}if(n===1)throw n=ks,rr(t,0),pn(t,e),lt(t,he()),n;if(n===6)throw Error(_(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Wn(t,nt,jt),lt(t,he()),null}function ud(t,e){var n=W;W|=1;try{return t(e)}finally{W=n,W===0&&(di=he()+500,hl&&bn())}}function pr(t){wn!==null&&wn.tag===0&&(W&6)===0&&ti();var e=W;W|=1;var n=wt.transition,r=Y;try{if(wt.transition=null,Y=1,t)return t()}finally{Y=r,wt.transition=n,W=e,(W&6)===0&&bn()}}function cd(){ut=qr.current,ne(qr)}function rr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,IS(n)),pe!==null)for(n=pe.return;n!==null;){var r=n;switch(Qh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Sa();break;case 3:hi(),ne(ot),ne(je),Zh();break;case 5:Jh(r);break;case 4:hi();break;case 13:ne(oe);break;case 19:ne(oe);break;case 10:Kh(r.type._context);break;case 22:case 23:cd()}n=n.return}if(ve=t,pe=t=Pn(t.current,null),Re=ut=e,ye=0,ks=null,ad=ml=fr=0,nt=rs=null,At!==null){for(e=0;e<At.length;e++)if(n=At[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}At=null}return t}function kv(t,e){do{var n=pe;try{if(qh(),Zo.current=xa,Ra){for(var r=ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ra=!1}if(dr=0,Se=ge=ae=null,ts=!1,_s=0,od.current=null,n===null||n.return===null){ye=1,ks=e,pe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Re,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if((c.mode&1)===0&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var y=Pp(o);if(y!==null){y.flags&=-257,Lp(y,o,a,s,e),y.mode&1&&Dp(s,u,e),e=y,l=u;var m=e.updateQueue;if(m===null){var w=new Set;w.add(l),e.updateQueue=w}else m.add(l);break e}else{if((e&1)===0){Dp(s,u,e),hd();break e}l=Error(_(426))}}else if(ie&&a.mode&1){var N=Pp(o);if(N!==null){(N.flags&65536)===0&&(N.flags|=256),Lp(N,o,a,s,e),Yh(l);break e}}s=l,ye!==4&&(ye=2),rs===null?rs=[s]:rs.push(s),l=sd(l,a),a=o;do{switch(a.tag){case 3:a.flags|=65536,e&=-e,a.lanes|=e;var p=av(a,l,e);_p(a,p);break e;case 1:s=l;var f=a.type,g=a.stateNode;if((a.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Tn===null||!Tn.has(g)))){a.flags|=65536,e&=-e,a.lanes|=e;var E=lv(a,s,e);_p(a,E);break e}}a=a.return}while(a!==null)}Av(n)}catch(T){e=T,pe===n&&n!==null&&(pe=n=n.return);continue}break}while(1)}function Cv(){var t=Da.current;return Da.current=xa,t===null?xa:t}function hd(){(ye===0||ye===3||ye===2)&&(ye=4),ve===null||(fr&268435455)===0&&(ml&268435455)===0||pn(ve,Re)}function Oa(t,e){var n=W;W|=2;var r=Cv();(ve!==t||Re!==e)&&(jt=null,rr(t,e));do try{WS();break}catch(i){kv(t,i)}while(1);if(qh(),W=n,Da.current=r,pe!==null)throw Error(_(261));return ve=null,Re=0,ye}function WS(){for(;pe!==null;)Nv(pe)}function GS(){for(;pe!==null&&!EE();)Nv(pe)}function Nv(t){var e=xv(t.alternate,t,ut);t.memoizedProps=t.pendingProps,e===null?Av(t):pe=e,od.current=null}function Av(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=FS(n,e,ut),n!==null){pe=n;return}}else{if(n=BS(n,e),n!==null){n.flags&=32767,pe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ye=6,pe=null;return}}if(e=e.sibling,e!==null){pe=e;return}pe=e=t}while(e!==null);ye===0&&(ye=5)}function Wn(t,e,n){var r=Y,i=wt.transition;try{wt.transition=null,Y=1,QS(t,e,n,r)}finally{wt.transition=i,Y=r}return null}function QS(t,e,n,r){do ti();while(wn!==null);if((W&6)!==0)throw Error(_(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(_(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(xE(t,s),t===ve&&(pe=ve=null,Re=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Fo||(Fo=!0,Dv(ma,function(){return ti(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=wt.transition,wt.transition=null;var o=Y;Y=1;var a=W;W|=4,od.current=null,jS(t,n),Sv(n,t),gS(Tc),ya=!!Ic,Tc=Ic=null,t.current=n,HS(n),SE(),W=a,Y=o,wt.transition=s}else t.current=n;if(Fo&&(Fo=!1,wn=t,La=i),s=t.pendingLanes,s===0&&(Tn=null),TE(n.stateNode),lt(t,he()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)r(e[n]);if(Pa)throw Pa=!1,t=jc,jc=null,t;return(La&1)!==0&&t.tag!==0&&ti(),s=t.pendingLanes,(s&1)!==0?t===Hc?is++:(is=0,Hc=t):is=0,bn(),null}function ti(){if(wn!==null){var t=ly(La),e=wt.transition,n=Y;try{if(wt.transition=null,Y=16>t?16:t,wn===null)var r=!1;else{if(t=wn,wn=null,La=0,(W&6)!==0)throw Error(_(331));var i=W;for(W|=4,A=t.current;A!==null;){var s=A,o=s.child;if((A.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(A=u;A!==null;){var c=A;switch(c.tag){case 0:case 11:case 15:ns(8,c,s)}var h=c.child;if(h!==null)h.return=c,A=h;else for(;A!==null;){c=A;var d=c.sibling,y=c.return;if(vv(c),c===u){A=null;break}if(d!==null){d.return=y,A=d;break}A=y}}}var m=s.alternate;if(m!==null){var w=m.child;if(w!==null){m.child=null;do{var N=w.sibling;w.sibling=null,w=N}while(w!==null)}}A=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,A=o;else e:for(;A!==null;){if(s=A,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:ns(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,A=p;break e}A=s.return}}var f=t.current;for(A=f;A!==null;){o=A;var g=o.child;if((o.subtreeFlags&2064)!==0&&g!==null)g.return=o,A=g;else e:for(o=f;A!==null;){if(a=A,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:pl(9,a)}}catch(T){ue(a,a.return,T)}if(a===o){A=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,A=E;break e}A=a.return}}if(W=i,bn(),$t&&typeof $t.onPostCommitFiberRoot=="function")try{$t.onPostCommitFiberRoot(ol,t)}catch{}r=!0}return r}finally{Y=n,wt.transition=e}}return!1}function Qp(t,e,n){e=sd(n,e),e=av(t,e,1),In(t,e),e=Xe(),t=gl(t,1),t!==null&&(zs(t,1,e),lt(t,e))}function ue(t,e,n){if(t.tag===3)Qp(t,t,n);else for(;e!==null;){if(e.tag===3){Qp(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Tn===null||!Tn.has(r))){t=sd(n,t),t=lv(e,t,1),In(e,t),t=Xe(),e=gl(e,1),e!==null&&(zs(e,1,t),lt(e,t));break}}e=e.return}}function YS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Xe(),t.pingedLanes|=t.suspendedLanes&n,ve===t&&(Re&n)===n&&(ye===4||ye===3&&(Re&130023424)===Re&&500>he()-ld?rr(t,0):ad|=n),lt(t,e)}function Rv(t,e){e===0&&((t.mode&1)===0?e=1:(e=No,No<<=1,(No&130023424)===0&&(No=4194304)));var n=Xe();t=gl(t,e),t!==null&&(zs(t,e,n),lt(t,n))}function XS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Rv(t,n)}function JS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(e),Rv(t,n)}var xv;xv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ot.current)st=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return st=!1,bS(t,e,n);st=(t.flags&131072)!==0}else st=!1,ie&&(e.flags&1048576)!==0&&Uy(e,Na,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps;var i=li(e,je.current);ei(e,n),i=td(null,e,r,t,i,n);var s=nd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,at(r)?(s=!0,_a(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Wh(e),i.updater=dl,e.stateNode=i,i._reactInternals=e,Dc(e,r,t,n),e=Uc(null,e,r,!0,s,n)):(e.tag=0,ie&&s&&Gh(e),Ke(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=e_(r),t=kt(r,t),i){case 0:e=$c(null,e,r,t,n);break e;case 1:e=$p(null,e,r,t,n);break e;case 11:e=Op(null,e,r,t,n);break e;case 14:e=Mp(null,e,r,kt(r.type,t),n);break e}throw Error(_(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kt(r,i),$c(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kt(r,i),$p(t,e,r,i,n);case 3:e:{if(mv(e),t===null)throw Error(_(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Oy(t,e),ka(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Error(_(423)),e=Up(t,e,r,n,i);break e}else if(r!==i){i=Error(_(424)),e=Up(t,e,r,n,i);break e}else for(rt=Kt(e.stateNode.containerInfo.firstChild),ht=e,ie=!0,Nt=null,n=by(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ui(),r===i){e=rn(t,e,n);break e}Ke(t,e,r,n)}e=e.child}return e;case 5:return By(e),t===null&&Lc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,kc(r,i)?o=null:s!==null&&kc(r,s)&&(e.flags|=32),pv(t,e),Ke(t,e,o,n),e.child;case 6:return t===null&&Lc(e),null;case 13:return gv(t,e,n);case 4:return Xh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ci(e,null,r,n):Ke(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kt(r,i),Op(t,e,r,i,n);case 7:return Ke(t,e,e.pendingProps,n),e.child;case 8:return Ke(t,e,e.pendingProps.children,n),e.child;case 12:return Ke(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,J(Ia,r._currentValue),r._currentValue=o,s!==null)if(xt(s.value,o)){if(s.children===i.children&&!ot.current){e=rn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Jt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Rc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(_(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Rc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ke(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ei(e,n),i=_t(i),r=r(i),e.flags|=1,Ke(t,e,r,n),e.child;case 14:return r=e.type,i=kt(r,e.pendingProps),i=kt(r.type,i),Mp(t,e,r,i,n);case 15:return dv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kt(r,i),t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),e.tag=1,at(r)?(t=!0,_a(e)):t=!1,ei(e,n),$y(e,r,i),Dc(e,r,i,n),Uc(null,e,r,!0,t,n);case 19:return yv(t,e,n);case 22:return fv(t,e,n)}throw Error(_(156,e.tag))};function Dv(t,e){return iy(t,e)}function ZS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vt(t,e,n,r){return new ZS(t,e,n,r)}function dd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function e_(t){if(typeof t=="function")return dd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ph)return 11;if(t===Lh)return 14}return 2}function Pn(t,e){var n=t.alternate;return n===null?(n=vt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ra(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")dd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Mr:return ir(n.children,i,s,e);case Dh:o=8,i|=8;break;case rc:return t=vt(12,n,e,i|2),t.elementType=rc,t.lanes=s,t;case ic:return t=vt(13,n,e,i),t.elementType=ic,t.lanes=s,t;case sc:return t=vt(19,n,e,i),t.elementType=sc,t.lanes=s,t;case Bg:return Ma(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Vg:o=10;break e;case bg:o=9;break e;case Ph:o=11;break e;case Lh:o=14;break e;case hn:o=16,r=null;break e}throw Error(_(130,t==null?t:typeof t,""))}return e=vt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ir(t,e,n,r){return t=vt(7,t,r,e),t.lanes=n,t}function Ma(t,e,n,r){return t=vt(22,t,r,e),t.elementType=Bg,t.lanes=n,t.stateNode={},t}function xu(t,e,n){return t=vt(6,t,null,e),t.lanes=n,t}function Du(t,e,n){return e=vt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function t_(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=du(0),this.expirationTimes=du(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=du(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function fd(t,e,n,r,i,s,o,a,l){return t=new t_(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=vt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wh(s),t}function n_(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Or,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Pv(t){if(!t)return Dn;t=t._reactInternals;e:{if(Nr(t)!==t||t.tag!==1)throw Error(_(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(at(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(_(171))}if(t.tag===1){var n=t.type;if(at(n))return Py(t,n,e)}return e}function Lv(t,e,n,r,i,s,o,a,l){return t=fd(n,r,!0,t,i,s,o,a,l),t.context=Pv(null),n=t.current,r=Xe(),i=kn(n),s=Jt(r,i),s.callback=e!=null?e:null,In(n,s),t.current.lanes=i,zs(t,i,r),lt(t,r),t}function yl(t,e,n,r){var i=e.current,s=Xe(),o=kn(i);return n=Pv(n),e.context===null?e.context=n:e.pendingContext=n,e=Jt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),In(i,e),t=Et(i,o,s),t!==null&&Jo(t,i,o),o}function $a(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Yp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function pd(t,e){Yp(t,e),(t=t.alternate)&&Yp(t,e)}function r_(){return null}var Ov=typeof reportError=="function"?reportError:function(t){console.error(t)};function md(t){this._internalRoot=t}vl.prototype.render=md.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(_(409));yl(t,e,null,null)};vl.prototype.unmount=md.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;pr(function(){yl(null,t,null,null)}),e[nn]=null}};function vl(t){this._internalRoot=t}vl.prototype.unstable_scheduleHydration=function(t){if(t){var e=hy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<fn.length&&e!==0&&e<fn[n].priority;n++);fn.splice(n,0,t),n===0&&fy(t)}};function gd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function wl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Xp(){}function i_(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=$a(o);s.call(u)}}var o=Lv(e,r,t,0,null,!1,!1,"",Xp);return t._reactRootContainer=o,t[nn]=o.current,ys(t.nodeType===8?t.parentNode:t),pr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=$a(l);a.call(u)}}var l=fd(t,0,!1,null,null,!1,!1,"",Xp);return t._reactRootContainer=l,t[nn]=l.current,ys(t.nodeType===8?t.parentNode:t),pr(function(){yl(e,l,n,r)}),l}function El(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=$a(o);a.call(l)}}yl(e,o,t,i)}else o=i_(n,e,t,i,r);return $a(o)}uy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ki(e.pendingLanes);n!==0&&($h(e,n|1),lt(e,he()),(W&6)===0&&(di=he()+500,bn()))}break;case 13:var r=Xe();pr(function(){return Et(t,1,r)}),pd(t,1)}};Uh=function(t){if(t.tag===13){var e=Xe();Et(t,134217728,e),pd(t,134217728)}};cy=function(t){if(t.tag===13){var e=Xe(),n=kn(t);Et(t,n,e),pd(t,n)}};hy=function(){return Y};dy=function(t,e){var n=Y;try{return Y=t,e()}finally{Y=n}};mc=function(t,e,n){switch(e){case"input":if(lc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=cl(r);if(!i)throw Error(_(90));jg(r),lc(r,i)}}}break;case"textarea":qg(t,n);break;case"select":e=n.value,e!=null&&Yr(t,!!n.multiple,e,!1)}};Jg=ud;Zg=pr;var s_={usingClientEntryPoint:!1,Events:[Hs,Vr,cl,Yg,Xg,ud]},zi={findFiberByHostInstance:Xn,bundleType:0,version:"18.1.0",rendererPackageName:"react-dom"},o_={bundleType:zi.bundleType,version:zi.version,rendererPackageName:zi.rendererPackageName,rendererConfig:zi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:an.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ny(t),t===null?null:t.stateNode},findFiberByHostInstance:zi.findFiberByHostInstance||r_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.1.0-next-22edb9f77-20220426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Vo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vo.isDisabled&&Vo.supportsFiber)try{ol=Vo.inject(o_),$t=Vo}catch{}}pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=s_;pt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gd(e))throw Error(_(200));return n_(t,e,null,n)};pt.createRoot=function(t,e){if(!gd(t))throw Error(_(299));var n=!1,r="",i=Ov;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=fd(t,1,!1,null,null,n,!1,r,i),t[nn]=e.current,ys(t.nodeType===8?t.parentNode:t),new md(e)};pt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(_(188)):(t=Object.keys(t).join(","),Error(_(268,t)));return t=ny(e),t=t===null?null:t.stateNode,t};pt.flushSync=function(t){return pr(t)};pt.hydrate=function(t,e,n){if(!wl(e))throw Error(_(200));return El(null,t,e,!0,n)};pt.hydrateRoot=function(t,e,n){if(!gd(t))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Ov;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Lv(e,null,t,1,n!=null?n:null,i,!1,s,o),t[nn]=e.current,ys(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new vl(e)};pt.render=function(t,e,n){if(!wl(e))throw Error(_(200));return El(null,t,e,!1,n)};pt.unmountComponentAtNode=function(t){if(!wl(t))throw Error(_(40));return t._reactRootContainer?(pr(function(){El(null,null,t,!1,function(){t._reactRootContainer=null,t[nn]=null})}),!0):!1};pt.unstable_batchedUpdates=ud;pt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!wl(n))throw Error(_(200));if(t==null||t._reactInternals===void 0)throw Error(_(38));return El(t,e,n,!1,r)};pt.version="18.1.0-next-22edb9f77-20220426";function Mv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Mv)}catch(t){console.error(t)}}Mv(),Og.exports=pt;var Jp=Og.exports;tc.createRoot=Jp.createRoot,tc.hydrateRoot=Jp.hydrateRoot;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $v=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},a_=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Uv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,y=u&63;l||(y=64,o||(d=64)),r.push(n[c],n[h],n[d],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray($v(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):a_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),u!==64){const y=a<<4&240|u>>2;if(r.push(y),h!==64){const m=u<<6&192|h;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},l_=function(t){const e=$v(t);return Uv.encodeByteArray(e,!0)},Fv=function(t){return l_(t).replace(/\./g,"")},u_=function(t){try{return Uv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Vv(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_e())}function bv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Bv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function h_(){return _e().indexOf("Electron/")>=0}function zv(){const t=_e();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function d_(){return _e().indexOf("MSAppHost/")>=0}function f_(){return typeof indexedDB=="object"}function p_(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_="FirebaseError";class Ar extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=m_,Object.setPrototypeOf(this,Ar.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ks.prototype.create)}}class Ks{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?g_(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ar(i,a,r)}}function g_(t,e){return t.replace(y_,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const y_=/\{\$([^}]+)}/g;function v_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ua(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Zp(s)&&Zp(o)){if(!Ua(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Zp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function w_(t,e){const n=new E_(t,e);return n.subscribe.bind(n)}class E_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");S_(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Pu),i.error===void 0&&(i.error=Pu),i.complete===void 0&&(i.complete=Pu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function S_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Pu(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(t){return t&&t._delegate?t._delegate:t}class mr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new c_;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(T_(e))try{this.getOrInitializeService({instanceIdentifier:Gn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Gn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gn){return this.instances.has(e)}getOptions(e=Gn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:I_(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Gn){return this.component?this.component.multipleInstances?e:Gn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function I_(t){return t===Gn?void 0:t}function T_(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new __(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var G;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(G||(G={}));const C_={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},N_=G.INFO,A_={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},R_=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=A_[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yd{constructor(e){this.name=e,this._logLevel=N_,this._logHandler=R_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?C_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}const x_=(t,e)=>e.some(n=>t instanceof n);let em,tm;function D_(){return em||(em=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function P_(){return tm||(tm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jv=new WeakMap,Wc=new WeakMap,Hv=new WeakMap,Lu=new WeakMap,vd=new WeakMap;function L_(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Cn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&jv.set(n,t)}).catch(()=>{}),vd.set(e,t),e}function O_(t){if(Wc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Wc.set(t,e)}let Gc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Wc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Hv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Cn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function M_(t){Gc=t(Gc)}function $_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ou(this),e,...n);return Hv.set(r,e.sort?e.sort():[e]),Cn(r)}:P_().includes(t)?function(...e){return t.apply(Ou(this),e),Cn(jv.get(this))}:function(...e){return Cn(t.apply(Ou(this),e))}}function U_(t){return typeof t=="function"?$_(t):(t instanceof IDBTransaction&&O_(t),x_(t,D_())?new Proxy(t,Gc):t)}function Cn(t){if(t instanceof IDBRequest)return L_(t);if(Lu.has(t))return Lu.get(t);const e=U_(t);return e!==t&&(Lu.set(t,e),vd.set(e,t)),e}const Ou=t=>vd.get(t);function F_(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}){const o=indexedDB.open(t,e),a=Cn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Cn(o.result),l.oldVersion,l.newVersion,Cn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const V_=["get","getKey","getAll","getAllKeys","count"],b_=["put","add","delete","clear"],Mu=new Map;function nm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Mu.get(e))return Mu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=b_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||V_.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Mu.set(e,s),s}M_(t=>bf(Vf({},t),{get:(e,n,r)=>nm(e,n)||t.get(e,n,r),has:(e,n)=>!!nm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(z_(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function z_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Qc="@firebase/app",rm="0.7.24";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd=new yd("@firebase/app"),j_="@firebase/app-compat",H_="@firebase/analytics-compat",q_="@firebase/analytics",K_="@firebase/app-check-compat",W_="@firebase/app-check",G_="@firebase/auth",Q_="@firebase/auth-compat",Y_="@firebase/database",X_="@firebase/database-compat",J_="@firebase/functions",Z_="@firebase/functions-compat",eI="@firebase/installations",tI="@firebase/installations-compat",nI="@firebase/messaging",rI="@firebase/messaging-compat",iI="@firebase/performance",sI="@firebase/performance-compat",oI="@firebase/remote-config",aI="@firebase/remote-config-compat",lI="@firebase/storage",uI="@firebase/storage-compat",cI="@firebase/firestore",hI="@firebase/firestore-compat",dI="firebase",fI="9.8.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qv="[DEFAULT]",pI={[Qc]:"fire-core",[j_]:"fire-core-compat",[q_]:"fire-analytics",[H_]:"fire-analytics-compat",[W_]:"fire-app-check",[K_]:"fire-app-check-compat",[G_]:"fire-auth",[Q_]:"fire-auth-compat",[Y_]:"fire-rtdb",[X_]:"fire-rtdb-compat",[J_]:"fire-fn",[Z_]:"fire-fn-compat",[eI]:"fire-iid",[tI]:"fire-iid-compat",[nI]:"fire-fcm",[rI]:"fire-fcm-compat",[iI]:"fire-perf",[sI]:"fire-perf-compat",[oI]:"fire-rc",[aI]:"fire-rc-compat",[lI]:"fire-gcs",[uI]:"fire-gcs-compat",[cI]:"fire-fst",[hI]:"fire-fst-compat","fire-js":"fire-js",[dI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa=new Map,Yc=new Map;function mI(t,e){try{t.container.addComponent(e)}catch(n){wd.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function fi(t){const e=t.name;if(Yc.has(e))return wd.debug(`There were multiple attempts to register component ${e}.`),!1;Yc.set(e,t);for(const n of Fa.values())mI(n,t);return!0}function Ed(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gI={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},gr=new Ks("app","Firebase",gI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new mr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gs=fI;function vI(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:qv,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw gr.create("bad-app-name",{appName:String(r)});const i=Fa.get(r);if(i){if(Ua(t,i.options)&&Ua(n,i.config))return i;throw gr.create("duplicate-app",{appName:r})}const s=new k_(r);for(const a of Yc.values())s.addComponent(a);const o=new yI(t,n,s);return Fa.set(r,o),o}function Kv(t=qv){const e=Fa.get(t);if(!e)throw gr.create("no-app",{appName:t});return e}function Nn(t,e,n){var r;let i=(r=pI[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wd.warn(a.join(" "));return}fi(new mr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wI="firebase-heartbeat-database",EI=1,Cs="firebase-heartbeat-store";let $u=null;function Wv(){return $u||($u=F_(wI,EI,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Cs)}}}).catch(t=>{throw gr.create("storage-open",{originalErrorMessage:t.message})})),$u}async function SI(t){try{return(await Wv()).transaction(Cs).objectStore(Cs).get(Gv(t))}catch(e){throw gr.create("storage-get",{originalErrorMessage:e.message})}}async function im(t,e){try{const r=(await Wv()).transaction(Cs,"readwrite");return await r.objectStore(Cs).put(e,Gv(t)),r.done}catch(n){throw gr.create("storage-set",{originalErrorMessage:n.message})}}function Gv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _I=1024,II=30*24*60*60*1e3;class TI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new CI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=sm();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=II}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=sm(),{heartbeatsToSend:n,unsentEntries:r}=kI(this._heartbeatsCache.heartbeats),i=Fv(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function sm(){return new Date().toISOString().substring(0,10)}function kI(t,e=_I){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),om(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),om(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class CI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return f_()?p_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await SI(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return im(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return im(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function om(t){return Fv(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NI(t){fi(new mr("platform-logger",e=>new B_(e),"PRIVATE")),fi(new mr("heartbeat",e=>new TI(e),"PRIVATE")),Nn(Qc,rm,t),Nn(Qc,rm,"esm2017"),Nn("fire-js","")}NI("");function Sd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Qv(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const AI=Qv,Yv=new Ks("auth","Firebase",Qv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const am=new yd("@firebase/auth");function ia(t,...e){am.logLevel<=G.ERROR&&am.error(`Auth (${Gs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t,...e){throw _d(t,...e)}function Ft(t,...e){return _d(t,...e)}function Xv(t,e,n){const r=Object.assign(Object.assign({},AI()),{[e]:n});return new Ks("auth","Firebase",r).create(e,{appName:t.name})}function RI(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&bt(t,"argument-error"),Xv(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function _d(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Yv.create(t,...e)}function V(t,e,...n){if(!t)throw _d(e,...n)}function Qt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ia(e),new Error(e)}function sn(t,e){t||Qt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm=new Map;function Yt(t){sn(t instanceof Function,"Expected a class definition");let e=lm.get(t);return e?(sn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,lm.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xI(t,e){const n=Ed(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ua(s,e!=null?e:{}))return i;bt(i,"already-initialized")}return n.initialize({options:e})}function DI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Yt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xc(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function PI(){return um()==="http:"||um()==="https:"}function um(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LI(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(PI()||bv()||"connection"in navigator)?navigator.onLine:!0}function OI(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e,n){this.shortDelay=e,this.longDelay=n,sn(n>e,"Short delay should be less than long delay!"),this.isMobile=Vv()||Bv()}get(){return LI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Id(t,e){sn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Qt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Qt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Qt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I=new Qs(3e4,6e4);function Zv(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Sl(t,e,n,r,i={}){return e0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ws(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Jv.fetch()(n0(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function e0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},MI),e);try{const i=new UI(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Uu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Uu(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Uu(t,"email-already-in-use",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Xv(t,c,u);bt(t,c)}}catch(i){if(i instanceof Ar)throw i;bt(t,"network-request-failed")}}async function t0(t,e,n,r,i={}){const s=await Sl(t,e,n,r,i);return"mfaPendingCredential"in s&&bt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function n0(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Id(t.config,i):`${t.config.apiScheme}://${i}`}class UI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ft(this.auth,"network-request-failed")),$I.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Uu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ft(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FI(t,e){return Sl(t,"POST","/v1/accounts:delete",e)}async function VI(t,e){return Sl(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function bI(t,e=!1){const n=Ie(t),r=await n.getIdToken(e),i=Td(r);V(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ss(Fu(i.auth_time)),issuedAtTime:ss(Fu(i.iat)),expirationTime:ss(Fu(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Fu(t){return Number(t)*1e3}function Td(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ia("JWT malformed, contained fewer than 3 sections"),null;try{const i=u_(n);return i?JSON.parse(i):(ia("Failed to decode base64 JWT payload"),null)}catch(i){return ia("Caught error parsing JWT payload as JSON",i),null}}function BI(t){const e=Td(t);return V(e,"internal-error"),V(typeof e.exp!="undefined","internal-error"),V(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ns(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ar&&zI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function zI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ss(this.lastLoginAt),this.creationTime=ss(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Va(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ns(t,VI(n,{idToken:r}));V(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?KI(s.providerUserInfo):[],a=qI(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new r0(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function HI(t){const e=Ie(t);await Va(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function qI(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function KI(t){return t.map(e=>{var{providerId:n}=e,r=Sd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WI(t,e){const n=await e0(t,{},async()=>{const r=Ws({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=n0(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Jv.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){V(e.idToken,"internal-error"),V(typeof e.idToken!="undefined","internal-error"),V(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):BI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return V(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await WI(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new As;return r&&(V(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(V(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(V(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new As,this.toJSON())}_performRefresh(){return Qt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(t,e){V(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class sr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Sd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new jI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new r0(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ns(this,this.stsTokenManager.getToken(this.auth,e));return V(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return bI(this,e)}reload(){return HI(this)}_assign(e){this!==e&&(V(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new sr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Va(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ns(this,FI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,y=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,N=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:E,isAnonymous:T,providerData:C,stsTokenManager:x}=n;V(g&&x,e,"internal-error");const S=As.fromJSON(this.name,x);V(typeof g=="string",e,"internal-error"),cn(h,e.name),cn(d,e.name),V(typeof E=="boolean",e,"internal-error"),V(typeof T=="boolean",e,"internal-error"),cn(y,e.name),cn(m,e.name),cn(w,e.name),cn(N,e.name),cn(p,e.name),cn(f,e.name);const L=new sr({uid:g,auth:e,email:d,emailVerified:E,displayName:h,isAnonymous:T,photoURL:m,phoneNumber:y,tenantId:w,stsTokenManager:S,createdAt:p,lastLoginAt:f});return C&&Array.isArray(C)&&(L.providerData=C.map(O=>Object.assign({},O))),N&&(L._redirectEventId=N),L}static async _fromIdTokenResponse(e,n,r=!1){const i=new As;i.updateFromServerResponse(n);const s=new sr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Va(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}i0.type="NONE";const cm=i0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(t,e,n){return`firebase:${t}:${e}:${n}`}class ni{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=sa(this.userKey,i.apiKey,s),this.fullPersistenceKey=sa("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?sr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ni(Yt(cm),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Yt(cm);const o=sa(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=sr._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ni(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ni(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(a0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(s0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(u0(e))return"Blackberry";if(c0(e))return"Webos";if(kd(e))return"Safari";if((e.includes("chrome/")||o0(e))&&!e.includes("edge/"))return"Chrome";if(l0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function s0(t=_e()){return/firefox\//i.test(t)}function kd(t=_e()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function o0(t=_e()){return/crios\//i.test(t)}function a0(t=_e()){return/iemobile/i.test(t)}function l0(t=_e()){return/android/i.test(t)}function u0(t=_e()){return/blackberry/i.test(t)}function c0(t=_e()){return/webos/i.test(t)}function _l(t=_e()){return/iphone|ipad|ipod/i.test(t)}function GI(t=_e()){var e;return _l(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function QI(){return zv()&&document.documentMode===10}function h0(t=_e()){return _l(t)||l0(t)||c0(t)||u0(t)||/windows phone/i.test(t)||a0(t)}function YI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d0(t,e=[]){let n;switch(t){case"Browser":n=hm(_e());break;case"Worker":n=`${hm(_e())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Gs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new dm(this),this.idTokenSubscription=new dm(this),this.beforeStateQueue=new XI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Yv,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Yt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ni.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Va(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=OI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ie(e):null;return n&&V(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&V(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Yt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ks("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Yt(e)||this._popupRedirectResolver;V(n,this,"argument-error"),this.redirectPersistenceManager=await ni.create(this,[Yt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return V(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=d0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Il(t){return Ie(t)}class dm{constructor(e){this.auth=e,this.observer=null,this.addObserver=w_(n=>this.observer=n)}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Qt("not implemented")}_getIdTokenResponse(e){return Qt("not implemented")}_linkToIdToken(e,n){return Qt("not implemented")}_getReauthenticationResolver(e){return Qt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ri(t,e){return t0(t,"POST","/v1/accounts:signInWithIdp",Zv(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI="http://localhost";class yr extends f0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new yr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):bt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Sd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new yr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ri(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ri(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ri(e,n)}buildRequest(){const e={requestUri:ZI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ws(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys extends Cd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends Ys{constructor(){super("facebook.com")}static credential(e){return yr._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mn.credential(e.oauthAccessToken)}catch{return null}}}mn.FACEBOOK_SIGN_IN_METHOD="facebook.com";mn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt extends Ys{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return yr._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return qt.credential(n,r)}catch{return null}}}qt.GOOGLE_SIGN_IN_METHOD="google.com";qt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends Ys{constructor(){super("github.com")}static credential(e){return yr._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gn.credential(e.oauthAccessToken)}catch{return null}}}gn.GITHUB_SIGN_IN_METHOD="github.com";gn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends Ys{constructor(){super("twitter.com")}static credential(e,n){return yr._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return yn.credential(n,r)}catch{return null}}}yn.TWITTER_SIGN_IN_METHOD="twitter.com";yn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eT(t,e){return t0(t,"POST","/v1/accounts:signUp",Zv(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await sr._fromIdTokenResponse(e,r,i),o=fm(r);return new Ln({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=fm(r);return new Ln({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function fm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tT(t){var e;const n=Il(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Ln({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await eT(n,{returnSecureToken:!0}),i=await Ln._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba extends Ar{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ba.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ba(e,n,r,i)}}function p0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ba._fromErrorAndOperation(t,s,e,r):s})}async function nT(t,e,n=!1){const r=await Ns(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ln._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rT(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Ns(t,p0(r,i,e,t),n);V(s.idToken,r,"internal-error");const o=Td(s.idToken);V(o,r,"internal-error");const{sub:a}=o;return V(t.uid===a,r,"user-mismatch"),Ln._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&bt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iT(t,e,n=!1){const r="signIn",i=await p0(t,r,e),s=await Ln._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function m0(t,e,n,r){return Ie(t).onAuthStateChanged(e,n,r)}const Ba="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ba,"1"),this.storage.removeItem(Ba),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sT(){const t=_e();return kd(t)||_l(t)}const oT=1e3,aT=10;class y0 extends g0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=sT()&&YI(),this.fallbackToPolling=h0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);QI()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,aT):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},oT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}y0.type="LOCAL";const lT=y0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0 extends g0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}v0.type="SESSION";const w0=v0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uT(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Tl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await uT(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Tl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Nd("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(){return window}function hT(t){Vt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E0(){return typeof Vt().WorkerGlobalScope!="undefined"&&typeof Vt().importScripts=="function"}async function dT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function pT(){return E0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S0="firebaseLocalStorageDb",mT=1,za="firebaseLocalStorage",_0="fbase_key";class Xs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function kl(t,e){return t.transaction([za],e?"readwrite":"readonly").objectStore(za)}function gT(){const t=indexedDB.deleteDatabase(S0);return new Xs(t).toPromise()}function Jc(){const t=indexedDB.open(S0,mT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(za,{keyPath:_0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(za)?e(r):(r.close(),await gT(),e(await Jc()))})})}async function pm(t,e,n){const r=kl(t,!0).put({[_0]:e,value:n});return new Xs(r).toPromise()}async function yT(t,e){const n=kl(t,!1).get(e),r=await new Xs(n).toPromise();return r===void 0?null:r.value}function mm(t,e){const n=kl(t,!0).delete(e);return new Xs(n).toPromise()}const vT=800,wT=3;class I0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Jc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>wT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return E0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Tl._getInstance(pT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await dT(),!this.activeServiceWorker)return;this.sender=new cT(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||fT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jc();return await pm(e,Ba,"1"),await mm(e,Ba),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>pm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>yT(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>mm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=kl(i,!1).getAll();return new Xs(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}I0.type="LOCAL";const ET=I0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ST(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function _T(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ft("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",ST().appendChild(r)})}function IT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Qs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T0(t,e){return e?Yt(e):(V(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad extends f0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ri(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ri(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ri(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function TT(t){return iT(t.auth,new Ad(t),t.bypassAuthState)}function kT(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),rT(n,new Ad(t),t.bypassAuthState)}async function CT(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),nT(n,new Ad(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{constructor(e,n,r,i,s){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return TT;case"linkViaPopup":case"linkViaRedirect":return CT;case"reauthViaPopup":case"reauthViaRedirect":return kT;default:bt(this.auth,"internal-error")}}resolve(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT=new Qs(2e3,1e4);async function AT(t,e,n){const r=Il(t);RI(t,e,Cd);const i=T0(r,n);return new Zn(r,"signInViaPopup",e,i).executeNotNull()}class Zn extends k0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Zn.currentPopupAction&&Zn.currentPopupAction.cancel(),Zn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return V(e,this.auth,"internal-error"),e}async onExecution(){sn(this.filter.length===1,"Popup operations only handle one event");const e=Nd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ft(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ft(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ft(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,NT.get())};e()}}Zn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RT="pendingRedirect",oa=new Map;class xT extends k0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=oa.get(this.auth._key());if(!e){try{const r=await DT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}oa.set(this.auth._key(),e)}return this.bypassAuthState||oa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function DT(t,e){const n=OT(e),r=LT(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function PT(t,e){oa.set(t._key(),e)}function LT(t){return Yt(t._redirectPersistence)}function OT(t){return sa(RT,t.config.apiKey,t.name)}async function MT(t,e,n=!1){const r=Il(t),i=T0(r,e),o=await new xT(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $T=10*60*1e3;class UT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!FT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!C0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ft(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$T&&this.cachedEventUids.clear(),this.cachedEventUids.has(gm(e))}saveEventToCache(e){this.cachedEventUids.add(gm(e)),this.lastProcessedEventTime=Date.now()}}function gm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function C0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function FT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return C0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VT(t,e={}){return Sl(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,BT=/^https?/;async function zT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await VT(t);for(const n of e)try{if(jT(n))return}catch{}bt(t,"unauthorized-domain")}function jT(t){const e=Xc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!BT.test(n))return!1;if(bT.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HT=new Qs(3e4,6e4);function ym(){const t=Vt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function qT(t){return new Promise((e,n)=>{var r,i,s;function o(){ym(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ym(),n(Ft(t,"network-request-failed"))},timeout:HT.get()})}if(!((i=(r=Vt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Vt().gapi)===null||s===void 0)&&s.load)o();else{const a=IT("iframefcb");return Vt()[a]=()=>{gapi.load?o():n(Ft(t,"network-request-failed"))},_T(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw aa=null,e})}let aa=null;function KT(t){return aa=aa||qT(t),aa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT=new Qs(5e3,15e3),GT="__/auth/iframe",QT="emulator/auth/iframe",YT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},XT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function JT(t){const e=t.config;V(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Id(e,QT):`https://${t.config.authDomain}/${GT}`,r={apiKey:e.apiKey,appName:t.name,v:Gs},i=XT.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ws(r).slice(1)}`}async function ZT(t){const e=await KT(t),n=Vt().gapi;return V(n,t,"internal-error"),e.open({where:document.body,url:JT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:YT,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ft(t,"network-request-failed"),a=Vt().setTimeout(()=>{s(o)},WT.get());function l(){Vt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ek={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tk=500,nk=600,rk="_blank",ik="http://localhost";class vm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function sk(t,e,n,r=tk,i=nk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},ek),{width:r.toString(),height:i.toString(),top:s,left:o}),u=_e().toLowerCase();n&&(a=o0(u)?rk:n),s0(u)&&(e=e||ik,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[y,m])=>`${d}${y}=${m},`,"");if(GI(u)&&a!=="_self")return ok(e||"",a),new vm(null);const h=window.open(e||"",a,c);V(h,t,"popup-blocked");try{h.focus()}catch{}return new vm(h)}function ok(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ak="__/auth/handler",lk="emulator/auth/handler";function wm(t,e,n,r,i,s){V(t.config.authDomain,t,"auth-domain-config-required"),V(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Gs,eventId:i};if(e instanceof Cd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",v_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof Ys){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${uk(t)}?${Ws(a).slice(1)}`}function uk({config:t}){return t.emulator?Id(t,lk):`https://${t.authDomain}/${ak}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu="webStorageSupport";class ck{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=w0,this._completeRedirectFn=MT,this._overrideRedirectResult=PT}async _openPopup(e,n,r,i){var s;sn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=wm(e,n,r,Xc(),i);return sk(e,o,Nd())}async _openRedirect(e,n,r,i){return await this._originValidation(e),hT(wm(e,n,r,Xc(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(sn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ZT(e),r=new UT(e);return n.register("authEvent",i=>(V(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Vu,{type:Vu},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Vu];o!==void 0&&n(!!o),bt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=zT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return h0()||kd()||_l()}}const hk=ck;var Em="@firebase/auth",Sm="0.20.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function pk(t){fi(new mr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{V(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),V(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:d0(t)},c=new JI(a,l,u);return DI(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),fi(new mr("auth-internal",e=>{const n=Il(e.getProvider("auth").getImmediate());return(r=>new dk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Nn(Em,Sm,fk(t)),Nn(Em,Sm,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mk(t=Kv()){const e=Ed(t,"auth");return e.isInitialized()?e.getImmediate():xI(t,{popupRedirectResolver:hk,persistence:[ET,lT,w0]})}pk("Browser");/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function gk(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{u(r.next(c))}catch(h){o(h)}}function l(c){try{u(r.throw(c))}catch(h){o(h)}}function u(c){c.done?s(c.value):i(c.value).then(a,l)}u((r=r.apply(t,e||[])).next())})}function yk(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=u[0]&2?i.return:u[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,u[1])).done)return s;switch(i=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(c){u=[6,c],i=0}finally{r=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Kr=function(){return Kr=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Kr.apply(this,arguments)},N0=function(t){return{loading:t==null,value:t}},vk=function(){return function(t,e){switch(e.type){case"error":return Kr(Kr({},t),{error:e.error,loading:!1,value:void 0});case"reset":return N0(e.defaultValue);case"value":return Kr(Kr({},t),{error:void 0,loading:!1,value:e.value});default:return t}}},wk=function(t){var e=t?t():void 0,n=U.exports.useReducer(vk(),N0(e)),r=n[0],i=n[1],s=function(){var l=t?t():void 0;i({type:"reset",defaultValue:l})},o=function(l){i({type:"error",error:l})},a=function(l){i({type:"value",value:l})};return U.exports.useMemo(function(){return{error:r.error,loading:r.loading,reset:s,setError:o,setValue:a,value:r.value}},[r.error,r.loading,s,o,a,r.value])},Ek=function(t,e){var n=wk(function(){return t.currentUser}),r=n.error,i=n.loading,s=n.setError,o=n.setValue,a=n.value;U.exports.useEffect(function(){var u=m0(t,function(c){return gk(void 0,void 0,void 0,function(){var h;return yk(this,function(d){switch(d.label){case 0:if(!(e!=null&&e.onUserChanged))return[3,4];d.label=1;case 1:return d.trys.push([1,3,,4]),[4,e.onUserChanged(c)];case 2:return d.sent(),[3,4];case 3:return h=d.sent(),s(h),[3,4];case 4:return o(c),[2]}})})},s);return function(){u()}},[t]);var l=[a,i,r];return U.exports.useMemo(function(){return l},l)};function ja(){return ja=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ja.apply(this,arguments)}var er;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(er||(er={}));var _m=function(t){return t},Im="beforeunload",Sk="hashchange",_k="popstate";function Ik(t){t===void 0&&(t={});var e=t,n=e.window,r=n===void 0?document.defaultView:n,i=r.history;function s(){var S=vr(r.location.hash.substr(1)),L=S.pathname,O=L===void 0?"/":L,ee=S.search,He=ee===void 0?"":ee,qe=S.hash,ln=qe===void 0?"":qe,Pt=i.state||{};return[Pt.idx,_m({pathname:O,search:He,hash:ln,state:Pt.usr||null,key:Pt.key||"default"})]}var o=null;function a(){if(o)y.call(o),o=null;else{var S=er.Pop,L=s(),O=L[0],ee=L[1];if(y.length){if(O!=null){var He=c-O;He&&(o={action:S,location:ee,retry:function(){C(He*-1)}},C(He))}}else g(S)}}r.addEventListener(_k,a),r.addEventListener(Sk,function(){var S=s(),L=S[1];bu(L)!==bu(h)&&a()});var l=er.Pop,u=s(),c=u[0],h=u[1],d=km(),y=km();c==null&&(c=0,i.replaceState(ja({},i.state,{idx:c}),""));function m(){var S=document.querySelector("base"),L="";if(S&&S.getAttribute("href")){var O=r.location.href,ee=O.indexOf("#");L=ee===-1?O:O.slice(0,ee)}return L}function w(S){return m()+"#"+(typeof S=="string"?S:bu(S))}function N(S,L){return L===void 0&&(L=null),_m(ja({pathname:h.pathname,hash:"",search:""},typeof S=="string"?vr(S):S,{state:L,key:Tk()}))}function p(S,L){return[{usr:S.state,key:S.key,idx:L},w(S)]}function f(S,L,O){return!y.length||(y.call({action:S,location:L,retry:O}),!1)}function g(S){l=S;var L=s();c=L[0],h=L[1],d.call({action:l,location:h})}function E(S,L){var O=er.Push,ee=N(S,L);function He(){E(S,L)}if(f(O,ee,He)){var qe=p(ee,c+1),ln=qe[0],Pt=qe[1];try{i.pushState(ln,"",Pt)}catch{r.location.assign(Pt)}g(O)}}function T(S,L){var O=er.Replace,ee=N(S,L);function He(){T(S,L)}if(f(O,ee,He)){var qe=p(ee,c),ln=qe[0],Pt=qe[1];i.replaceState(ln,"",Pt),g(O)}}function C(S){i.go(S)}var x={get action(){return l},get location(){return h},createHref:w,push:E,replace:T,go:C,back:function(){C(-1)},forward:function(){C(1)},listen:function(L){return d.push(L)},block:function(L){var O=y.push(L);return y.length===1&&r.addEventListener(Im,Tm),function(){O(),y.length||r.removeEventListener(Im,Tm)}}};return x}function Tm(t){t.preventDefault(),t.returnValue=""}function km(){var t=[];return{get length(){return t.length},push:function(n){return t.push(n),function(){t=t.filter(function(r){return r!==n})}},call:function(n){t.forEach(function(r){return r&&r(n)})}}}function Tk(){return Math.random().toString(36).substr(2,8)}function bu(t){var e=t.pathname,n=e===void 0?"/":e,r=t.search,i=r===void 0?"":r,s=t.hash,o=s===void 0?"":s;return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),o&&o!=="#"&&(n+=o.charAt(0)==="#"?o:"#"+o),n}function vr(t){var e={};if(t){var n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));var r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const A0=U.exports.createContext(null),Rd=U.exports.createContext(null),Cl=U.exports.createContext({outlet:null,matches:[]});function Bt(t,e){if(!t)throw new Error(e)}function kk(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?vr(e):e,i=x0(r.pathname||"/",n);if(i==null)return null;let s=R0(t);Ck(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=Mk(s[a],i);return o}function R0(t,e,n,r){return e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r=""),t.forEach((i,s)=>{let o={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};o.relativePath.startsWith("/")&&(o.relativePath.startsWith(r)||Bt(!1),o.relativePath=o.relativePath.slice(r.length));let a=or([r,o.relativePath]),l=n.concat(o);i.children&&i.children.length>0&&(i.index===!0&&Bt(!1),R0(i.children,e,l,a)),!(i.path==null&&!i.index)&&e.push({path:a,score:Lk(a,i.index),routesMeta:l})}),e}function Ck(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Ok(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Nk=/^:\w+$/,Ak=3,Rk=2,xk=1,Dk=10,Pk=-2,Cm=t=>t==="*";function Lk(t,e){let n=t.split("/"),r=n.length;return n.some(Cm)&&(r+=Pk),e&&(r+=Rk),n.filter(i=>!Cm(i)).reduce((i,s)=>i+(Nk.test(s)?Ak:s===""?xk:Dk),r)}function Ok(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Mk(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=$k({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:or([i,c.pathname]),pathnameBase:D0(or([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=or([i,c.pathnameBase]))}return s}function $k(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Uk(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=Fk(a[h]||""),u},{}),pathname:s,pathnameBase:o,pattern:t}}function Uk(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0);let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,a)=>(r.push(a),"([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(i,e?void 0:"i"),r]}function Fk(t,e){try{return decodeURIComponent(t)}catch{return t}}function Vk(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?vr(t):t;return{pathname:n?n.startsWith("/")?n:bk(n,e):e,search:zk(r),hash:jk(i)}}function bk(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Bk(t,e,n){let r=typeof t=="string"?vr(t):t,i=t===""||r.pathname===""?"/":r.pathname,s;if(i==null)s=n;else{let a=e.length-1;if(i.startsWith("..")){let l=i.split("/");for(;l[0]==="..";)l.shift(),a-=1;r.pathname=l.join("/")}s=a>=0?e[a]:"/"}let o=Vk(r,s);return i&&i!=="/"&&i.endsWith("/")&&!o.pathname.endsWith("/")&&(o.pathname+="/"),o}function x0(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=t.charAt(e.length);return n&&n!=="/"?null:t.slice(e.length)||"/"}const or=t=>t.join("/").replace(/\/\/+/g,"/"),D0=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),zk=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,jk=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Js(){return U.exports.useContext(Rd)!=null}function xd(){return Js()||Bt(!1),U.exports.useContext(Rd).location}function Zs(){Js()||Bt(!1);let{basename:t,navigator:e}=U.exports.useContext(A0),{matches:n}=U.exports.useContext(Cl),{pathname:r}=xd(),i=JSON.stringify(n.map(a=>a.pathnameBase)),s=U.exports.useRef(!1);return U.exports.useEffect(()=>{s.current=!0}),U.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=Bk(a,JSON.parse(i),r);t!=="/"&&(u.pathname=or([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state)},[t,e,i,r])}function Hk(){let{matches:t}=U.exports.useContext(Cl),e=t[t.length-1];return e?e.params:{}}function qk(t,e){Js()||Bt(!1);let{matches:n}=U.exports.useContext(Cl),r=n[n.length-1],i=r?r.params:{};r&&r.pathname;let s=r?r.pathnameBase:"/";r&&r.route;let o=xd(),a;if(e){var l;let d=typeof e=="string"?vr(e):e;s==="/"||((l=d.pathname)==null?void 0:l.startsWith(s))||Bt(!1),a=d}else a=o;let u=a.pathname||"/",c=s==="/"?u:u.slice(s.length)||"/",h=kk(t,{pathname:c});return Kk(h&&h.map(d=>Object.assign({},d,{params:Object.assign({},i,d.params),pathname:or([s,d.pathname]),pathnameBase:d.pathnameBase==="/"?s:or([s,d.pathnameBase])})),n)}function Kk(t,e){return e===void 0&&(e=[]),t==null?null:t.reduceRight((n,r,i)=>U.exports.createElement(Cl.Provider,{children:r.route.element!==void 0?r.route.element:n,value:{outlet:n,matches:e.concat(t.slice(0,i+1))}}),null)}function Nm(t){let{to:e,replace:n,state:r}=t;Js()||Bt(!1);let i=Zs();return U.exports.useEffect(()=>{i(e,{replace:n,state:r})}),null}function Qn(t){Bt(!1)}function Wk(t){let{basename:e="/",children:n=null,location:r,navigationType:i=er.Pop,navigator:s,static:o=!1}=t;Js()&&Bt(!1);let a=D0(e),l=U.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=vr(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:y="default"}=r,m=U.exports.useMemo(()=>{let w=x0(u,a);return w==null?null:{pathname:w,search:c,hash:h,state:d,key:y}},[a,u,c,h,d,y]);return m==null?null:U.exports.createElement(A0.Provider,{value:l},U.exports.createElement(Rd.Provider,{children:n,value:{location:m,navigationType:i}}))}function Gk(t){let{children:e,location:n}=t;return qk(Zc(e),n)}function Zc(t){let e=[];return U.exports.Children.forEach(t,n=>{if(!U.exports.isValidElement(n))return;if(n.type===U.exports.Fragment){e.push.apply(e,Zc(n.props.children));return}n.type!==Qn&&Bt(!1);let r={caseSensitive:n.props.caseSensitive,element:n.props.element,index:n.props.index,path:n.props.path};n.props.children&&(r.children=Zc(n.props.children)),e.push(r)}),e}/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qk(t){let{basename:e,children:n,window:r}=t,i=U.exports.useRef();i.current==null&&(i.current=Ik({window:r}));let s=i.current,[o,a]=U.exports.useState({action:s.action,location:s.location});return U.exports.useLayoutEffect(()=>s.listen(a),[s]),U.exports.createElement(Wk,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}var Nl={exports:{}},Al={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yk=U.exports,Xk=Symbol.for("react.element"),Jk=Symbol.for("react.fragment"),Zk=Object.prototype.hasOwnProperty,eC=Yk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,tC={key:!0,ref:!0,__self:!0,__source:!0};function P0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Zk.call(e,r)&&!tC.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Xk,type:t,key:s,ref:o,props:i,_owner:eC.current}}Al.Fragment=Jk;Al.jsx=P0;Al.jsxs=P0;Nl.exports=Al;const P=Nl.exports.jsx,Ae=Nl.exports.jsxs,ar=Nl.exports.Fragment;function nC(t){const[e,n]=U.exports.useState(""),[r,i]=U.exports.useState(!1);return Ae("section",{className:"compose row g-2 p-2 placeholder-glow",children:[P("textarea",{className:"form-control",disabled:!!r,value:e,rows:e.includes(`
`)?2:1,onChange:s=>{s.preventDefault(),n(s.target.value)}}),P("button",{className:"btn btn-primary",disabled:!!r||!e.trim().length,onClick:async s=>{s.preventDefault(),i(!0),await t.send(e),i(!1),n("")},children:"\u{1F54A}\uFE0F"})]})}function rC(t){return P("header",{className:"infobar",children:t.isAuth?Ae(ar,{children:[P("button",{className:"btn",onClick:()=>t.goBack(),children:"\u{1F525}"}),P("button",{className:"btn ms-auto",onClick:()=>t.logout(),children:"Logout"})]}):Ae(ar,{children:[P("span",{className:"lead",children:"\u2728"}),P("button",{className:"btn ms-auto",onClick:()=>t.logout(),children:"Info"})]})})}function iC(t){return P("section",{className:"posts",children:t.sended.map(e=>P("div",{className:`post ${e.userId===t.authId?"right":"left"}`,children:P("div",{className:"payload text-light",children:e.payload})},e.id))})}var sC=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},R,Dd=Dd||{},F=sC||self;function Ha(){}function eh(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function eo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function oC(t){return Object.prototype.hasOwnProperty.call(t,Bu)&&t[Bu]||(t[Bu]=++aC)}var Bu="closure_uid_"+(1e9*Math.random()>>>0),aC=0;function lC(t,e,n){return t.call.apply(t.bind,arguments)}function uC(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function xe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?xe=lC:xe=uC,xe.apply(null,arguments)}function bo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Me(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Bn(){this.s=this.s,this.o=this.o}var cC=0;Bn.prototype.s=!1;Bn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),cC!=0)&&oC(this)};Bn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const L0=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},O0=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function hC(t){e:{var e=nN;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Am(t){return Array.prototype.concat.apply([],arguments)}function Pd(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function qa(t){return/^[\s\xa0]*$/.test(t)}var Rm=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function We(t,e){return t.indexOf(e)!=-1}function zu(t,e){return t<e?-1:t>e?1:0}var Ge;e:{var xm=F.navigator;if(xm){var Dm=xm.userAgent;if(Dm){Ge=Dm;break e}}Ge=""}function Ld(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function M0(t){const e={};for(const n in t)e[n]=t[n];return e}var Pm="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function $0(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Pm.length;s++)n=Pm[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Od(t){return Od[" "](t),t}Od[" "]=Ha;function dC(t){var e=mC;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var fC=We(Ge,"Opera"),pi=We(Ge,"Trident")||We(Ge,"MSIE"),U0=We(Ge,"Edge"),th=U0||pi,F0=We(Ge,"Gecko")&&!(We(Ge.toLowerCase(),"webkit")&&!We(Ge,"Edge"))&&!(We(Ge,"Trident")||We(Ge,"MSIE"))&&!We(Ge,"Edge"),pC=We(Ge.toLowerCase(),"webkit")&&!We(Ge,"Edge");function V0(){var t=F.document;return t?t.documentMode:void 0}var Ka;e:{var ju="",Hu=function(){var t=Ge;if(F0)return/rv:([^\);]+)(\)|;)/.exec(t);if(U0)return/Edge\/([\d\.]+)/.exec(t);if(pi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(pC)return/WebKit\/(\S+)/.exec(t);if(fC)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Hu&&(ju=Hu?Hu[1]:""),pi){var qu=V0();if(qu!=null&&qu>parseFloat(ju)){Ka=String(qu);break e}}Ka=ju}var mC={};function gC(){return dC(function(){let t=0;const e=Rm(String(Ka)).split("."),n=Rm("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=zu(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||zu(i[2].length==0,s[2].length==0)||zu(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var nh;if(F.document&&pi){var Lm=V0();nh=Lm||parseInt(Ka,10)||void 0}else nh=void 0;var yC=nh,vC=function(){if(!F.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{F.addEventListener("test",Ha,e),F.removeEventListener("test",Ha,e)}catch{}return t}();function be(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}be.prototype.h=function(){this.defaultPrevented=!0};function Rs(t,e){if(be.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(F0){e:{try{Od(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:wC[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Rs.Z.h.call(this)}}Me(Rs,be);var wC={2:"touch",3:"pen",4:"mouse"};Rs.prototype.h=function(){Rs.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var to="closure_listenable_"+(1e6*Math.random()|0),EC=0;function SC(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++EC,this.ca=this.fa=!1}function Rl(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function xl(t){this.src=t,this.g={},this.h=0}xl.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=ih(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new SC(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};function rh(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=L0(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Rl(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function ih(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}var Md="closure_lm_"+(1e6*Math.random()|0),Ku={};function b0(t,e,n,r,i){if(r&&r.once)return z0(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)b0(t,e[s],n,r,i);return null}return n=Fd(n),t&&t[to]?t.N(e,n,eo(r)?!!r.capture:!!r,i):B0(t,e,n,!1,r,i)}function B0(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=eo(i)?!!i.capture:!!i,a=Ud(t);if(a||(t[Md]=a=new xl(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=_C(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)vC||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(H0(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function _C(){function t(n){return e.call(t.src,t.listener,n)}var e=IC;return t}function z0(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)z0(t,e[s],n,r,i);return null}return n=Fd(n),t&&t[to]?t.O(e,n,eo(r)?!!r.capture:!!r,i):B0(t,e,n,!0,r,i)}function j0(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)j0(t,e[s],n,r,i);else r=eo(r)?!!r.capture:!!r,n=Fd(n),t&&t[to]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=ih(s,n,r,i),-1<n&&(Rl(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ud(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ih(e,n,r,i)),(n=-1<t?e[t]:null)&&$d(n))}function $d(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[to])rh(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(H0(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Ud(e))?(rh(n,t),n.h==0&&(n.src=null,e[Md]=null)):Rl(t)}}}function H0(t){return t in Ku?Ku[t]:Ku[t]="on"+t}function IC(t,e){if(t.ca)t=!0;else{e=new Rs(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&$d(t),t=n.call(r,e)}return t}function Ud(t){return t=t[Md],t instanceof xl?t:null}var Wu="__closure_events_fn_"+(1e9*Math.random()>>>0);function Fd(t){return typeof t=="function"?t:(t[Wu]||(t[Wu]=function(e){return t.handleEvent(e)}),t[Wu])}function Te(){Bn.call(this),this.i=new xl(this),this.P=this,this.I=null}Me(Te,Bn);Te.prototype[to]=!0;Te.prototype.removeEventListener=function(t,e,n,r){j0(this,t,e,n,r)};function De(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new be(e,t);else if(e instanceof be)e.target=e.target||t;else{var i=e;e=new be(r,t),$0(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Bo(o,r,!0,e)&&i}if(o=e.g=t,i=Bo(o,r,!0,e)&&i,i=Bo(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Bo(o,r,!1,e)&&i}Te.prototype.M=function(){if(Te.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Rl(n[r]);delete t.g[e],t.h--}}this.I=null};Te.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Te.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Bo(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&rh(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Vd=F.JSON.stringify;function TC(){var t=K0;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class kC{constructor(){this.h=this.g=null}add(e,n){const r=q0.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var q0=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new CC,t=>t.reset());class CC{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function NC(t){F.setTimeout(()=>{throw t},0)}function bd(t,e){sh||AC(),oh||(sh(),oh=!0),K0.add(t,e)}var sh;function AC(){var t=F.Promise.resolve(void 0);sh=function(){t.then(RC)}}var oh=!1,K0=new kC;function RC(){for(var t;t=TC();){try{t.h.call(t.g)}catch(n){NC(n)}var e=q0;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}oh=!1}function Dl(t,e){Te.call(this),this.h=t||1,this.g=e||F,this.j=xe(this.kb,this),this.l=Date.now()}Me(Dl,Te);R=Dl.prototype;R.da=!1;R.S=null;R.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),De(this,"tick"),this.da&&(Bd(this),this.start()))}};R.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Bd(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}R.M=function(){Dl.Z.M.call(this),Bd(this),delete this.g};function zd(t,e,n){if(typeof t=="function")n&&(t=xe(t,n));else if(t&&typeof t.handleEvent=="function")t=xe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:F.setTimeout(t,e||0)}function W0(t){t.g=zd(()=>{t.g=null,t.i&&(t.i=!1,W0(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class xC extends Bn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:W0(this)}M(){super.M(),this.g&&(F.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xs(t){Bn.call(this),this.h=t,this.g={}}Me(xs,Bn);var Om=[];function G0(t,e,n,r){Array.isArray(n)||(n&&(Om[0]=n.toString()),n=Om);for(var i=0;i<n.length;i++){var s=b0(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Q0(t){Ld(t.g,function(e,n){this.g.hasOwnProperty(n)&&$d(e)},t),t.g={}}xs.prototype.M=function(){xs.Z.M.call(this),Q0(this)};xs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Pl(){this.g=!0}Pl.prototype.Aa=function(){this.g=!1};function DC(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function PC(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Wr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+OC(t,n)+(r?" "+r:"")})}function LC(t,e){t.info(function(){return"TIMEOUT: "+e})}Pl.prototype.info=function(){};function OC(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Vd(n)}catch{return e}}var Rr={},Mm=null;function Ll(){return Mm=Mm||new Te}Rr.Ma="serverreachability";function Y0(t){be.call(this,Rr.Ma,t)}Me(Y0,be);function Ds(t){const e=Ll();De(e,new Y0(e,t))}Rr.STAT_EVENT="statevent";function X0(t,e){be.call(this,Rr.STAT_EVENT,t),this.stat=e}Me(X0,be);function Qe(t){const e=Ll();De(e,new X0(e,t))}Rr.Na="timingevent";function J0(t,e){be.call(this,Rr.Na,t),this.size=e}Me(J0,be);function no(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return F.setTimeout(function(){t()},e)}var Ol={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Z0={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function jd(){}jd.prototype.h=null;function $m(t){return t.h||(t.h=t.i())}function ew(){}var ro={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Hd(){be.call(this,"d")}Me(Hd,be);function qd(){be.call(this,"c")}Me(qd,be);var ah;function Ml(){}Me(Ml,jd);Ml.prototype.g=function(){return new XMLHttpRequest};Ml.prototype.i=function(){return{}};ah=new Ml;function io(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new xs(this),this.P=MC,t=th?125:void 0,this.W=new Dl(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new tw}function tw(){this.i=null,this.g="",this.h=!1}var MC=45e3,lh={},Wa={};R=io.prototype;R.setTimeout=function(t){this.P=t};function uh(t,e,n){t.K=1,t.v=Ul(on(e)),t.s=n,t.U=!0,nw(t,null)}function nw(t,e){t.F=Date.now(),so(t),t.A=on(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),uw(n.h,"t",r),t.C=0,n=t.l.H,t.h=new tw,t.g=Rw(t.l,n?e:null,!t.s),0<t.O&&(t.L=new xC(xe(t.Ia,t,t.g),t.O)),G0(t.V,t.g,"readystatechange",t.gb),e=t.H?M0(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Ds(),DC(t.j,t.u,t.A,t.m,t.X,t.s)}R.gb=function(t){t=t.target;const e=this.L;e&&Xt(t)==3?e.l():this.Ia(t)};R.Ia=function(t){try{if(t==this.g)e:{const c=Xt(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>c)&&(c!=3||th||this.g&&(this.h.h||this.g.ga()||bm(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?Ds(3):Ds(2)),$l(this);var n=this.g.ba();this.N=n;t:if(rw(this)){var r=bm(this.g);t="";var i=r.length,s=Xt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){tr(this),os(this);var o="";break t}this.h.i=new F.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,PC(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!qa(a)){var u=a;break t}}u=null}if(n=u)Wr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ch(this,n);else{this.i=!1,this.o=3,Qe(12),tr(this),os(this);break e}}this.U?(iw(this,c,o),th&&this.i&&c==3&&(G0(this.V,this.W,"tick",this.fb),this.W.start())):(Wr(this.j,this.m,o,null),ch(this,o)),c==4&&tr(this),this.i&&!this.I&&(c==4?kw(this.l,this):(this.i=!1,so(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Qe(12)):(this.o=0,Qe(13)),tr(this),os(this)}}}catch{}finally{}};function rw(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function iw(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=$C(t,n),i==Wa){e==4&&(t.o=4,Qe(14),r=!1),Wr(t.j,t.m,null,"[Incomplete Response]");break}else if(i==lh){t.o=4,Qe(15),Wr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Wr(t.j,t.m,i,null),ch(t,i);rw(t)&&i!=Wa&&i!=lh&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Qe(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),ef(e),e.L=!0,Qe(11))):(Wr(t.j,t.m,n,"[Invalid Chunked Response]"),tr(t),os(t))}R.fb=function(){if(this.g){var t=Xt(this.g),e=this.g.ga();this.C<e.length&&($l(this),iw(this,t,e),this.i&&t!=4&&so(this))}};function $C(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Wa:(n=Number(e.substring(n,r)),isNaN(n)?lh:(r+=1,r+n>e.length?Wa:(e=e.substr(r,n),t.C=r+n,e)))}R.cancel=function(){this.I=!0,tr(this)};function so(t){t.Y=Date.now()+t.P,sw(t,t.P)}function sw(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=no(xe(t.eb,t),e)}function $l(t){t.B&&(F.clearTimeout(t.B),t.B=null)}R.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(LC(this.j,this.A),this.K!=2&&(Ds(),Qe(17)),tr(this),this.o=2,os(this)):sw(this,this.Y-t)};function os(t){t.l.G==0||t.I||kw(t.l,t)}function tr(t){$l(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Bd(t.W),Q0(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function ch(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||hh(n.i,t))){if(n.I=t.N,!t.J&&hh(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Xa(n),bl(n);else break e;Zd(n),Qe(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=no(xe(n.ab,n),6e3));if(1>=dw(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else nr(n,11)}else if((t.J||n.g==t)&&Xa(n),!qa(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const c=u[3];c!=null&&(n.ma=c,n.h.info("VER="+n.ma));const h=u[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const y=t.g;if(y){const m=y.g?y.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var s=r.i;!s.g&&(We(m,"spdy")||We(m,"quic")||We(m,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(Gd(s,s.h),s.h=null))}if(r.D){const w=y.g?y.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.sa=w,se(r.F,r.D,w))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=Aw(r,r.H?r.la:null,r.W),o.J){fw(r.i,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&($l(a),so(a)),r.g=o}else Iw(r);0<n.l.length&&Bl(n)}else u[0]!="stop"&&u[0]!="close"||nr(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?nr(n,7):Jd(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}Ds(4)}catch{}}function UC(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(eh(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Kd(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(eh(t)||typeof t=="string")O0(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(eh(t)||typeof t=="string"){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=UC(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function Ni(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Ni)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}R=Ni.prototype;R.R=function(){Wd(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};R.T=function(){return Wd(this),this.g.concat()};function Wd(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];wr(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],wr(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}R.get=function(t,e){return wr(this.h,t)?this.h[t]:e};R.set=function(t,e){wr(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};R.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};function wr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var ow=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function FC(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Er(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Er){this.g=e!==void 0?e:t.g,Ga(this,t.j),this.s=t.s,Qa(this,t.i),Ya(this,t.m),this.l=t.l,e=t.h;var n=new Ps;n.i=e.i,e.g&&(n.g=new Ni(e.g),n.h=e.h),Um(this,n),this.o=t.o}else t&&(n=String(t).match(ow))?(this.g=!!e,Ga(this,n[1]||"",!0),this.s=as(n[2]||""),Qa(this,n[3]||"",!0),Ya(this,n[4]),this.l=as(n[5]||"",!0),Um(this,n[6]||"",!0),this.o=as(n[7]||"")):(this.g=!!e,this.h=new Ps(null,this.g))}Er.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Gi(e,Fm,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Gi(e,Fm,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Gi(n,n.charAt(0)=="/"?jC:zC,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Gi(n,qC)),t.join("")};function on(t){return new Er(t)}function Ga(t,e,n){t.j=n?as(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Qa(t,e,n){t.i=n?as(e,!0):e}function Ya(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Um(t,e,n){e instanceof Ps?(t.h=e,KC(t.h,t.g)):(n||(e=Gi(e,HC)),t.h=new Ps(e,t.g))}function se(t,e,n){t.h.set(e,n)}function Ul(t){return se(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function VC(t){return t instanceof Er?on(t):new Er(t,void 0)}function bC(t,e,n,r){var i=new Er(null,void 0);return t&&Ga(i,t),e&&Qa(i,e),n&&Ya(i,n),r&&(i.l=r),i}function as(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Gi(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,BC),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function BC(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Fm=/[#\/\?@]/g,zC=/[#\?:]/g,jC=/[#\?]/g,HC=/[#\?@]/g,qC=/#/g;function Ps(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function zn(t){t.g||(t.g=new Ni,t.h=0,t.i&&FC(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}R=Ps.prototype;R.add=function(t,e){zn(this),this.i=null,t=Ai(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function aw(t,e){zn(t),e=Ai(t,e),wr(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,wr(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Wd(t)))}function lw(t,e){return zn(t),e=Ai(t,e),wr(t.g.h,e)}R.forEach=function(t,e){zn(this),this.g.forEach(function(n,r){O0(n,function(i){t.call(e,i,r,this)},this)},this)};R.T=function(){zn(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n};R.R=function(t){zn(this);var e=[];if(typeof t=="string")lw(this,t)&&(e=Am(e,this.g.get(Ai(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Am(e,t[n])}return e};R.set=function(t,e){return zn(this),this.i=null,t=Ai(this,t),lw(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};R.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function uw(t,e,n){aw(t,e),0<n.length&&(t.i=null,t.g.set(Ai(t,e),Pd(n)),t.h+=n.length)}R.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;r[s]!==""&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};function Ai(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function KC(t,e){e&&!t.j&&(zn(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(aw(this,r),uw(this,i,n))},t)),t.j=e}var WC=class{constructor(t,e){this.h=t,this.g=e}};function cw(t){this.l=t||GC,F.PerformanceNavigationTiming?(t=F.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(F.g&&F.g.Ea&&F.g.Ea()&&F.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var GC=10;function hw(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function dw(t){return t.h?1:t.g?t.g.size:0}function hh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Gd(t,e){t.g?t.g.add(e):t.h=e}function fw(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}cw.prototype.cancel=function(){if(this.i=pw(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function pw(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Pd(t.i)}function Qd(){}Qd.prototype.stringify=function(t){return F.JSON.stringify(t,void 0)};Qd.prototype.parse=function(t){return F.JSON.parse(t,void 0)};function QC(){this.g=new Qd}function YC(t,e,n){const r=n||"";try{Kd(t,function(i,s){let o=i;eo(i)&&(o=Vd(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function XC(t,e){const n=new Pl;if(F.Image){const r=new Image;r.onload=bo(zo,n,r,"TestLoadImage: loaded",!0,e),r.onerror=bo(zo,n,r,"TestLoadImage: error",!1,e),r.onabort=bo(zo,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=bo(zo,n,r,"TestLoadImage: timeout",!1,e),F.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function zo(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function oo(t){this.l=t.$b||null,this.j=t.ib||!1}Me(oo,jd);oo.prototype.g=function(){return new Fl(this.l,this.j)};oo.prototype.i=function(t){return function(){return t}}({});function Fl(t,e){Te.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Yd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Me(Fl,Te);var Yd=0;R=Fl.prototype;R.open=function(t,e){if(this.readyState!=Yd)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ls(this)};R.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||F).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};R.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ao(this)),this.readyState=Yd};R.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ls(this)),this.g&&(this.readyState=3,Ls(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof F.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;mw(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function mw(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}R.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ao(this):Ls(this),this.readyState==3&&mw(this)}};R.Ua=function(t){this.g&&(this.response=this.responseText=t,ao(this))};R.Ta=function(t){this.g&&(this.response=t,ao(this))};R.ha=function(){this.g&&ao(this)};function ao(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ls(t)}R.setRequestHeader=function(t,e){this.v.append(t,e)};R.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};R.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ls(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Fl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var JC=F.JSON.parse;function me(t){Te.call(this),this.headers=new Ni,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=gw,this.K=this.L=!1}Me(me,Te);var gw="",ZC=/^https?$/i,eN=["POST","PUT"];R=me.prototype;R.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ah.g(),this.C=this.u?$m(this.u):$m(ah),this.g.onreadystatechange=xe(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){Vm(this,s);return}t=n||"";const i=new Ni(this.headers);r&&Kd(r,function(s,o){i.set(o,s)}),r=hC(i.T()),n=F.FormData&&t instanceof F.FormData,!(0<=L0(eN,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{ww(this),0<this.B&&((this.K=tN(this.g))?(this.g.timeout=this.B,this.g.ontimeout=xe(this.pa,this)):this.A=zd(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Vm(this,s)}};function tN(t){return pi&&gC()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function nN(t){return t.toLowerCase()=="content-type"}R.pa=function(){typeof Dd!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,De(this,"timeout"),this.abort(8))};function Vm(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,yw(t),Vl(t)}function yw(t){t.D||(t.D=!0,De(t,"complete"),De(t,"error"))}R.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,De(this,"complete"),De(this,"abort"),Vl(this))};R.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Vl(this,!0)),me.Z.M.call(this)};R.Fa=function(){this.s||(this.F||this.v||this.l?vw(this):this.cb())};R.cb=function(){vw(this)};function vw(t){if(t.h&&typeof Dd!="undefined"&&(!t.C[1]||Xt(t)!=4||t.ba()!=2)){if(t.v&&Xt(t)==4)zd(t.Fa,0,t);else if(De(t,"readystatechange"),Xt(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(ow)[1]||null;if(!i&&F.self&&F.self.location){var s=F.self.location.protocol;i=s.substr(0,s.length-1)}r=!ZC.test(i?i.toLowerCase():"")}n=r}if(n)De(t,"complete"),De(t,"success");else{t.m=6;try{var o=2<Xt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",yw(t)}}finally{Vl(t)}}}}function Vl(t,e){if(t.g){ww(t);const n=t.g,r=t.C[0]?Ha:null;t.g=null,t.C=null,e||De(t,"ready");try{n.onreadystatechange=r}catch{}}}function ww(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(F.clearTimeout(t.A),t.A=null)}function Xt(t){return t.g?t.g.readyState:0}R.ba=function(){try{return 2<Xt(this)?this.g.status:-1}catch{return-1}};R.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};R.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),JC(e)}};function bm(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case gw:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}R.Da=function(){return this.m};R.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function rN(t){let e="";return Ld(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Xd(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=rN(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):se(t,e,n))}function ji(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Ew(t){this.za=0,this.l=[],this.h=new Pl,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=ji("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=ji("baseRetryDelayMs",5e3,t),this.$a=ji("retryDelaySeedMs",1e4,t),this.Ya=ji("forwardChannelMaxRetries",2,t),this.ra=ji("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new cw(t&&t.concurrentRequestLimit),this.Ca=new QC,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}R=Ew.prototype;R.ma=8;R.G=1;function Jd(t){if(Sw(t),t.G==3){var e=t.V++,n=on(t.F);se(n,"SID",t.J),se(n,"RID",e),se(n,"TYPE","terminate"),lo(t,n),e=new io(t,t.h,e,void 0),e.K=2,e.v=Ul(on(n)),n=!1,F.navigator&&F.navigator.sendBeacon&&(n=F.navigator.sendBeacon(e.v.toString(),"")),!n&&F.Image&&(new Image().src=e.v,n=!0),n||(e.g=Rw(e.l,null),e.g.ea(e.v)),e.F=Date.now(),so(e)}Nw(t)}R.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function bl(t){t.g&&(ef(t),t.g.cancel(),t.g=null)}function Sw(t){bl(t),t.u&&(F.clearTimeout(t.u),t.u=null),Xa(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&F.clearTimeout(t.m),t.m=null)}function Gu(t,e){t.l.push(new WC(t.Za++,e)),t.G==3&&Bl(t)}function Bl(t){hw(t.i)||t.m||(t.m=!0,bd(t.Ha,t),t.C=0)}function iN(t,e){return dw(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=no(xe(t.Ha,t,e),Cw(t,t.C)),t.C++,!0)}R.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new io(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=M0(s),$0(s,this.P)):s=this.P),this.o===null&&(i.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=_w(this,i,e),n=on(this.F),se(n,"RID",t),se(n,"CVER",22),this.D&&se(n,"X-HTTP-Session-Id",this.D),lo(this,n),this.o&&s&&Xd(n,this.o,s),Gd(this.i,i),this.Ra&&se(n,"TYPE","init"),this.ja?(se(n,"$req",e),se(n,"SID","null"),i.$=!0,uh(i,n,null)):uh(i,n,e),this.G=2}}else this.G==3&&(t?Bm(this,t):this.l.length==0||hw(this.i)||Bm(this))};function Bm(t,e){var n;e?n=e.m:n=t.V++;const r=on(t.F);se(r,"SID",t.J),se(r,"RID",n),se(r,"AID",t.U),lo(t,r),t.o&&t.s&&Xd(r,t.o,t.s),n=new io(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=_w(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Gd(t.i,n),uh(n,r,e)}function lo(t,e){t.j&&Kd({},function(n,r){se(e,r,n)})}function _w(t,e,n){n=Math.min(t.l.length,n);var r=t.j?xe(t.j.Oa,t.j,t):null;e:{var i=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{YC(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function Iw(t){t.g||t.u||(t.Y=1,bd(t.Ga,t),t.A=0)}function Zd(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=no(xe(t.Ga,t),Cw(t,t.A)),t.A++,!0)}R.Ga=function(){if(this.u=null,Tw(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=no(xe(this.bb,this),t)}};R.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Qe(10),bl(this),Tw(this))};function ef(t){t.B!=null&&(F.clearTimeout(t.B),t.B=null)}function Tw(t){t.g=new io(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=on(t.oa);se(e,"RID","rpc"),se(e,"SID",t.J),se(e,"CI",t.N?"0":"1"),se(e,"AID",t.U),lo(t,e),se(e,"TYPE","xmlhttp"),t.o&&t.s&&Xd(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Ul(on(e)),n.s=null,n.U=!0,nw(n,t)}R.ab=function(){this.v!=null&&(this.v=null,bl(this),Zd(this),Qe(19))};function Xa(t){t.v!=null&&(F.clearTimeout(t.v),t.v=null)}function kw(t,e){var n=null;if(t.g==e){Xa(t),ef(t),t.g=null;var r=2}else if(hh(t.i,e))n=e.D,fw(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Ll(),De(r,new J0(r,n,e,i)),Bl(t)}else Iw(t);else if(i=e.o,i==3||i==0&&0<t.I||!(r==1&&iN(t,e)||r==2&&Zd(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:nr(t,5);break;case 4:nr(t,10);break;case 3:nr(t,6);break;default:nr(t,2)}}}function Cw(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function nr(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=xe(t.jb,t);n||(n=new Er("//www.google.com/images/cleardot.gif"),F.location&&F.location.protocol=="http"||Ga(n,"https"),Ul(n)),XC(n.toString(),r)}else Qe(2);t.G=0,t.j&&t.j.va(e),Nw(t),Sw(t)}R.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Qe(2)):(this.h.info("Failed to ping google.com"),Qe(1))};function Nw(t){t.G=0,t.I=-1,t.j&&((pw(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Pd(t.l),t.l.length=0),t.j.ua())}function Aw(t,e,n){let r=VC(n);if(r.i!="")e&&Qa(r,e+"."+r.i),Ya(r,r.m);else{const i=F.location;r=bC(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&Ld(t.aa,function(i,s){se(r,s,i)}),e=t.D,n=t.sa,e&&n&&se(r,e,n),se(r,"VER",t.ma),lo(t,r),r}function Rw(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new me(new oo({ib:!0})):new me(t.qa),e.L=t.H,e}function xw(){}R=xw.prototype;R.xa=function(){};R.wa=function(){};R.va=function(){};R.ua=function(){};R.Oa=function(){};function Ja(){if(pi&&!(10<=Number(yC)))throw Error("Environmental error: no available transport.")}Ja.prototype.g=function(t,e){return new ft(t,e)};function ft(t,e){Te.call(this),this.g=new Ew(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!qa(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!qa(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ri(this)}Me(ft,Te);ft.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),bd(xe(t.hb,t,e))),Qe(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Aw(t,null,t.W),Bl(t)};ft.prototype.close=function(){Jd(this.g)};ft.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Gu(this.g,e)}else this.v?(e={},e.__data__=Vd(t),Gu(this.g,e)):Gu(this.g,t)};ft.prototype.M=function(){this.g.j=null,delete this.j,Jd(this.g),delete this.g,ft.Z.M.call(this)};function Dw(t){Hd.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Me(Dw,Hd);function Pw(){qd.call(this),this.status=1}Me(Pw,qd);function Ri(t){this.g=t}Me(Ri,xw);Ri.prototype.xa=function(){De(this.g,"a")};Ri.prototype.wa=function(t){De(this.g,new Dw(t))};Ri.prototype.va=function(t){De(this.g,new Pw(t))};Ri.prototype.ua=function(){De(this.g,"b")};Ja.prototype.createWebChannel=Ja.prototype.g;ft.prototype.send=ft.prototype.u;ft.prototype.open=ft.prototype.m;ft.prototype.close=ft.prototype.close;Ol.NO_ERROR=0;Ol.TIMEOUT=8;Ol.HTTP_ERROR=6;Z0.COMPLETE="complete";ew.EventType=ro;ro.OPEN="a";ro.CLOSE="b";ro.ERROR="c";ro.MESSAGE="d";Te.prototype.listen=Te.prototype.N;me.prototype.listenOnce=me.prototype.O;me.prototype.getLastError=me.prototype.La;me.prototype.getLastErrorCode=me.prototype.Da;me.prototype.getStatus=me.prototype.ba;me.prototype.getResponseJson=me.prototype.Qa;me.prototype.getResponseText=me.prototype.ga;me.prototype.send=me.prototype.ea;var sN=function(){return new Ja},oN=function(){return Ll()},Qu=Ol,aN=Z0,lN=Rr,zm={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},uN=oo,jo=ew,cN=me;const jm="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}tt.UNAUTHENTICATED=new tt(null),tt.GOOGLE_CREDENTIALS=new tt("google-credentials-uid"),tt.FIRST_PARTY=new tt("first-party-uid"),tt.MOCK_USER=new tt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xi="9.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr=new yd("@firebase/firestore");function Hm(){return Sr.logLevel}function M(t,...e){if(Sr.logLevel<=G.DEBUG){const n=e.map(tf);Sr.debug(`Firestore (${xi}): ${t}`,...n)}}function On(t,...e){if(Sr.logLevel<=G.ERROR){const n=e.map(tf);Sr.error(`Firestore (${xi}): ${t}`,...n)}}function qm(t,...e){if(Sr.logLevel<=G.WARN){const n=e.map(tf);Sr.warn(`Firestore (${xi}): ${t}`,...n)}}function tf(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(t="Unexpected state"){const e=`FIRESTORE (${xi}) INTERNAL ASSERTION FAILED: `+t;throw On(e),new Error(e)}function Z(t,e){t||b()}function B(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class k extends Ar{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hN{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class dN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(tt.UNAUTHENTICATED))}shutdown(){}}class fN{constructor(e){this.t=e,this.currentUser=tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Zt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Zt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Zt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Z(typeof r.accessToken=="string"),new hN(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Z(e===null||typeof e=="string"),new tt(e)}}class pN{constructor(e,n,r){this.type="FirstParty",this.user=tt.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class mN{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new pN(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class gN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yN{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const r=s=>{s.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.p;return this.p=s.token,M("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.g.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.g.getImmediate({optional:!0});s?i(s):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Z(typeof n.token=="string"),this.p=n.token,new gN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.I(r),this.T=r=>n.writeSequenceNumber(r))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vN(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nf.A=-1;class Lw{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=vN(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Q(t,e){return t<e?-1:t>e?1:0}function mi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new k(v.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new k(v.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new k(v.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new k(v.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Be.fromMillis(Date.now())}static fromDate(e){return Be.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Be(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Q(this.nanoseconds,e.nanoseconds):Q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.timestamp=e}static fromTimestamp(e){return new j(e)}static min(){return new j(new Be(0,0))}static max(){return new j(new Be(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Km(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function xr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ow(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,n,r){n===void 0?n=0:n>e.length&&b(),r===void 0?r=e.length-n:r>e.length-n&&b(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Os.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Os?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class X extends Os{construct(e,n,r){return new X(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new k(v.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new X(n)}static emptyPath(){return new X([])}}const wN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends Os{construct(e,n,r){return new it(e,n,r)}static isValidIdentifier(e){return wN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new it(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new k(v.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new k(v.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new k(v.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new k(v.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new it(n)}static emptyPath(){return new it([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e){this.fields=e,e.sort(it.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return mi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Oe(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Oe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Oe.EMPTY_BYTE_STRING=new Oe("");const EN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Mn(t){if(Z(!!t),typeof t=="string"){let e=0;const n=EN.exec(t);if(Z(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:fe(t.seconds),nanos:fe(t.nanos)}}function fe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function gi(t){return typeof t=="string"?Oe.fromBase64String(t):Oe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Mw(t){const e=t.mapValue.fields.__previous_value__;return rf(e)?Mw(e):e}function $s(t){const e=Mn(t.mapValue.fields.__local_write_time__.timestampValue);return new Be(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SN{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class yi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new yi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof yi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zl(t){return t==null}function Za(t){return t===0&&1/t==-1/0}function _N(t){return typeof t=="number"&&Number.isInteger(t)&&!Za(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(X.fromString(e))}static fromName(e){return new $(X.fromString(e).popFirst(5))}static empty(){return new $(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&X.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return X.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new X(e.slice()))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ho={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function _r(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?rf(t)?4:IN(t)?9007199254740991:10:b()}function zt(t,e){if(t===e)return!0;const n=_r(t);if(n!==_r(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return $s(t).isEqual($s(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Mn(r.timestampValue),o=Mn(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return gi(r.bytesValue).isEqual(gi(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return fe(r.geoPointValue.latitude)===fe(i.geoPointValue.latitude)&&fe(r.geoPointValue.longitude)===fe(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return fe(r.integerValue)===fe(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=fe(r.doubleValue),o=fe(i.doubleValue);return s===o?Za(s)===Za(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return mi(t.arrayValue.values||[],e.arrayValue.values||[],zt);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Km(s)!==Km(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!zt(s[a],o[a])))return!1;return!0}(t,e);default:return b()}}function Us(t,e){return(t.values||[]).find(n=>zt(n,e))!==void 0}function vi(t,e){if(t===e)return 0;const n=_r(t),r=_r(e);if(n!==r)return Q(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Q(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=fe(i.integerValue||i.doubleValue),a=fe(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Wm(t.timestampValue,e.timestampValue);case 4:return Wm($s(t),$s(e));case 5:return Q(t.stringValue,e.stringValue);case 6:return function(i,s){const o=gi(i),a=gi(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=Q(o[l],a[l]);if(u!==0)return u}return Q(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=Q(fe(i.latitude),fe(s.latitude));return o!==0?o:Q(fe(i.longitude),fe(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=vi(o[l],a[l]);if(u)return u}return Q(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Ho.mapValue&&s===Ho.mapValue)return 0;if(i===Ho.mapValue)return 1;if(s===Ho.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=Q(a[c],u[c]);if(h!==0)return h;const d=vi(o[a[c]],l[u[c]]);if(d!==0)return d}return Q(a.length,u.length)}(t.mapValue,e.mapValue);default:throw b()}}function Wm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Q(t,e);const n=Mn(t),r=Mn(e),i=Q(n.seconds,r.seconds);return i!==0?i:Q(n.nanos,r.nanos)}function ii(t){return dh(t)}function dh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Mn(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?gi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,$.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=dh(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${dh(r.fields[a])}`;return s+"}"}(t.mapValue):b();var e,n}function el(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function fh(t){return!!t&&"integerValue"in t}function sf(t){return!!t&&"arrayValue"in t}function Gm(t){return!!t&&"nullValue"in t}function Qm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function la(t){return!!t&&"mapValue"in t}function ls(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return xr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ls(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ls(t.arrayValue.values[n]);return e}return Object.assign({},t)}function IN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.value=e}static empty(){return new ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!la(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ls(n)}setAll(e){let n=it.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ls(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());la(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return zt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];la(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){xr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ct(ls(this.value))}}function $w(t){const e=[];return xr(t.fields,(n,r)=>{const i=new it([n]);if(la(r)){const s=$w(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ms(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new Ve(e,0,j.min(),j.min(),ct.empty(),0)}static newFoundDocument(e,n,r){return new Ve(e,1,n,j.min(),r,0)}static newNoDocument(e,n){return new Ve(e,2,n,j.min(),ct.empty(),0)}static newUnknownDocument(e,n){return new Ve(e,3,n,j.min(),ct.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ve&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ve(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}function TN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=j.fromTimestamp(r===1e9?new Be(n+1,0):new Be(n,r));return new Ir(i,$.empty(),e)}function kN(t){return new Ir(t.readTime,t.key,-1)}class Ir{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ir(j.min(),$.empty(),-1)}static max(){return new Ir(j.max(),$.empty(),-1)}}function CN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=$.comparator(t.documentKey,e.documentKey),n!==0?n:Q(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,n){this.comparator=e,this.root=n||Ne.EMPTY}insert(e,n){return new ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ne.BLACK,null,null))}remove(e){return new ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ne.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new qo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new qo(this.root,e,this.comparator,!1)}getReverseIterator(){return new qo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new qo(this.root,e,this.comparator,!0)}}class qo{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ne{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:Ne.RED,this.left=i!=null?i:Ne.EMPTY,this.right=s!=null?s:Ne.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ne(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ne.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ne.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw b();const e=this.left.check();if(e!==this.right.check())throw b();return e+(this.isRed()?0:1)}}Ne.EMPTY=null,Ne.RED=!0,Ne.BLACK=!1;Ne.EMPTY=new class{constructor(){this.size=0}get key(){throw b()}get value(){throw b()}get color(){throw b()}get left(){throw b()}get right(){throw b()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Ne(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e){this.comparator=e,this.data=new ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ym(this.data.getIterator())}getIteratorFrom(e){return new Ym(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Pe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Pe(this.comparator);return n.data=e,n}}class Ym{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.P=null}}function Xm(t,e=null,n=[],r=[],i=null,s=null,o=null){return new NN(t,e,n,r,i,s,o)}function of(t){const e=B(t);if(e.P===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+ii(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),zl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ii(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ii(r)).join(",")),e.P=n}return e.P}function AN(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${ii(r.value)}`;var r}).join(", ")}]`),zl(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>ii(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>ii(n)).join(",")),`Target(${e})`}function af(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!$N(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!zt(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Zm(t.startAt,e.startAt)&&Zm(t.endAt,e.endAt)}function ph(t){return $.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class Ye extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.V(e,n,r):new RN(e,n,r):n==="array-contains"?new PN(e,r):n==="in"?new LN(e,r):n==="not-in"?new ON(e,r):n==="array-contains-any"?new MN(e,r):new Ye(e,n,r)}static V(e,n,r){return n==="in"?new xN(e,r):new DN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.v(vi(n,this.value)):n!==null&&_r(this.value)===_r(n)&&this.v(vi(n,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return b()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class RN extends Ye{constructor(e,n,r){super(e,n,r),this.key=$.fromName(r.referenceValue)}matches(e){const n=$.comparator(e.key,this.key);return this.v(n)}}class xN extends Ye{constructor(e,n){super(e,"in",n),this.keys=Uw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class DN extends Ye{constructor(e,n){super(e,"not-in",n),this.keys=Uw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Uw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>$.fromName(r.referenceValue))}class PN extends Ye{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return sf(n)&&Us(n.arrayValue,this.value)}}class LN extends Ye{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Us(this.value.arrayValue,n)}}class ON extends Ye{constructor(e,n){super(e,"not-in",n)}matches(e){if(Us(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Us(this.value.arrayValue,n)}}class MN extends Ye{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!sf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Us(this.value.arrayValue,r))}}class wi{constructor(e,n){this.position=e,this.inclusive=n}}class si{constructor(e,n="asc"){this.field=e,this.dir=n}}function $N(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Jm(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=$.comparator($.fromName(o.referenceValue),n.key):r=vi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Zm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!zt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.D=null,this.C=null,this.startAt,this.endAt}}function UN(t,e,n,r,i,s,o,a){return new jn(t,e,n,r,i,s,o,a)}function jl(t){return new jn(t)}function FN(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function lf(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function uf(t){for(const e of t.filters)if(e.S())return e.field;return null}function cf(t){return t.collectionGroup!==null}function Ei(t){const e=B(t);if(e.D===null){e.D=[];const n=uf(e),r=lf(e);if(n!==null&&r===null)n.isKeyField()||e.D.push(new si(n)),e.D.push(new si(it.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.D.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new si(it.keyField(),s))}}}return e.D}function Tr(t){const e=B(t);if(!e.C)if(e.limitType==="F")e.C=Xm(e.path,e.collectionGroup,Ei(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Ei(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new si(s.field,o))}const r=e.endAt?new wi(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new wi(e.startAt.position,e.startAt.inclusive):null;e.C=Xm(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.C}function VN(t,e,n){return new jn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function uo(t,e){return af(Tr(t),Tr(e))&&t.limitType===e.limitType}function Fw(t){return`${of(Tr(t))}|lt:${t.limitType}`}function mh(t){return`Query(target=${AN(Tr(t))}; limitType=${t.limitType})`}function hf(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):$.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Jm(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Ei(n),r)||n.endAt&&!function(i,s,o){const a=Jm(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Ei(n),r))}(t,e)}function bN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Vw(t){return(e,n)=>{let r=!1;for(const i of Ei(t)){const s=BN(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function BN(t,e,n){const r=t.field.isKeyField()?$.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?vi(a,l):b()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return b()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bw(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Za(e)?"-0":e}}function Bw(t){return{integerValue:""+t}}function zN(t,e){return _N(e)?Bw(e):bw(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(){this._=void 0}}function jN(t,e,n){return t instanceof Fs?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Vs?jw(t,e):t instanceof bs?Hw(t,e):function(r,i){const s=zw(r,i),o=eg(s)+eg(r.k);return fh(s)&&fh(r.k)?Bw(o):bw(r.M,o)}(t,e)}function HN(t,e,n){return t instanceof Vs?jw(t,e):t instanceof bs?Hw(t,e):n}function zw(t,e){return t instanceof tl?fh(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Fs extends Hl{}class Vs extends Hl{constructor(e){super(),this.elements=e}}function jw(t,e){const n=qw(e);for(const r of t.elements)n.some(i=>zt(i,r))||n.push(r);return{arrayValue:{values:n}}}class bs extends Hl{constructor(e){super(),this.elements=e}}function Hw(t,e){let n=qw(e);for(const r of t.elements)n=n.filter(i=>!zt(i,r));return{arrayValue:{values:n}}}class tl extends Hl{constructor(e,n){super(),this.M=e,this.k=n}}function eg(t){return fe(t.integerValue||t.doubleValue)}function qw(t){return sf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qN{constructor(e,n){this.field=e,this.transform=n}}function KN(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Vs&&r instanceof Vs||n instanceof bs&&r instanceof bs?mi(n.elements,r.elements,zt):n instanceof tl&&r instanceof tl?zt(n.k,r.k):n instanceof Fs&&r instanceof Fs}(t.transform,e.transform)}class WN{constructor(e,n){this.version=e,this.transformResults=n}}class An{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new An}static exists(e){return new An(void 0,e)}static updateTime(e){return new An(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ua(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ql{}function GN(t,e,n){t instanceof Kl?function(r,i,s){const o=r.value.clone(),a=rg(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Di?function(r,i,s){if(!ua(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=rg(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(Kw(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function gh(t,e,n){t instanceof Kl?function(r,i,s){if(!ua(r.precondition,i))return;const o=r.value.clone(),a=ig(r.fieldTransforms,s,i);o.setAll(a),i.convertToFoundDocument(ng(i),o).setHasLocalMutations()}(t,e,n):t instanceof Di?function(r,i,s){if(!ua(r.precondition,i))return;const o=ig(r.fieldTransforms,s,i),a=i.data;a.setAll(Kw(r)),a.setAll(o),i.convertToFoundDocument(ng(i),a).setHasLocalMutations()}(t,e,n):function(r,i){ua(r.precondition,i)&&i.convertToNoDocument(j.min())}(t,e)}function QN(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=zw(r.transform,i||null);s!=null&&(n==null&&(n=ct.empty()),n.set(r.field,s))}return n||null}function tg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&mi(n,r,(i,s)=>KN(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function ng(t){return t.isFoundDocument()?t.version:j.min()}class Kl extends ql{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}}class Di extends ql{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}}function Kw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function rg(t,e,n){const r=new Map;Z(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,HN(o,a,n[i]))}return r}function ig(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,jN(s,o,e))}return r}class YN extends ql{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class XN extends ql{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de,K;function ZN(t){switch(t){default:return b();case v.CANCELLED:case v.UNKNOWN:case v.DEADLINE_EXCEEDED:case v.RESOURCE_EXHAUSTED:case v.INTERNAL:case v.UNAVAILABLE:case v.UNAUTHENTICATED:return!1;case v.INVALID_ARGUMENT:case v.NOT_FOUND:case v.ALREADY_EXISTS:case v.PERMISSION_DENIED:case v.FAILED_PRECONDITION:case v.ABORTED:case v.OUT_OF_RANGE:case v.UNIMPLEMENTED:case v.DATA_LOSS:return!0}}function Ww(t){if(t===void 0)return On("GRPC error has no .code"),v.UNKNOWN;switch(t){case de.OK:return v.OK;case de.CANCELLED:return v.CANCELLED;case de.UNKNOWN:return v.UNKNOWN;case de.DEADLINE_EXCEEDED:return v.DEADLINE_EXCEEDED;case de.RESOURCE_EXHAUSTED:return v.RESOURCE_EXHAUSTED;case de.INTERNAL:return v.INTERNAL;case de.UNAVAILABLE:return v.UNAVAILABLE;case de.UNAUTHENTICATED:return v.UNAUTHENTICATED;case de.INVALID_ARGUMENT:return v.INVALID_ARGUMENT;case de.NOT_FOUND:return v.NOT_FOUND;case de.ALREADY_EXISTS:return v.ALREADY_EXISTS;case de.PERMISSION_DENIED:return v.PERMISSION_DENIED;case de.FAILED_PRECONDITION:return v.FAILED_PRECONDITION;case de.ABORTED:return v.ABORTED;case de.OUT_OF_RANGE:return v.OUT_OF_RANGE;case de.UNIMPLEMENTED:return v.UNIMPLEMENTED;case de.DATA_LOSS:return v.DATA_LOSS;default:return b()}}(K=de||(de={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){xr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Ow(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eA=new ke($.comparator);function kr(){return eA}const tA=new ke($.comparator);function yh(...t){let e=tA;for(const n of t)e=e.insert(n.key,n);return e}function Yu(){return new Pi(t=>t.toString(),(t,e)=>t.isEqual(e))}const nA=new ke($.comparator),rA=new Pe($.comparator);function re(...t){let e=rA;for(const n of t)e=e.add(n);return e}const iA=new Pe(Q);function Gw(){return iA}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,co.createSynthesizedTargetChangeForCurrentChange(e,n)),new Wl(j.min(),r,Gw(),kr(),re())}}class co{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new co(Oe.EMPTY_BYTE_STRING,n,re(),re(),re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e,n,r,i){this.O=e,this.removedTargetIds=n,this.key=r,this.F=i}}class Qw{constructor(e,n){this.targetId=e,this.$=n}}class Yw{constructor(e,n,r=Oe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class sg{constructor(){this.B=0,this.L=ag(),this.U=Oe.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return this.B!==0}get j(){return this.K}W(e){e.approximateByteSize()>0&&(this.K=!0,this.U=e)}H(){let e=re(),n=re(),r=re();return this.L.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:b()}}),new co(this.U,this.q,e,n,r)}J(){this.K=!1,this.L=ag()}Y(e,n){this.K=!0,this.L=this.L.insert(e,n)}X(e){this.K=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class sA{constructor(e){this.nt=e,this.st=new Map,this.it=kr(),this.rt=og(),this.ot=new Pe(Q)}ut(e){for(const n of e.O)e.F&&e.F.isFoundDocument()?this.at(n,e.F):this.ct(n,e.key,e.F);for(const n of e.removedTargetIds)this.ct(n,e.key,e.F)}ht(e){this.forEachTarget(e,n=>{const r=this.lt(n);switch(e.state){case 0:this.ft(n)&&r.W(e.resumeToken);break;case 1:r.tt(),r.G||r.J(),r.W(e.resumeToken);break;case 2:r.tt(),r.G||this.removeTarget(n);break;case 3:this.ft(n)&&(r.et(),r.W(e.resumeToken));break;case 4:this.ft(n)&&(this.dt(n),r.W(e.resumeToken));break;default:b()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.st.forEach((r,i)=>{this.ft(i)&&n(i)})}_t(e){const n=e.targetId,r=e.$.count,i=this.wt(n);if(i){const s=i.target;if(ph(s))if(r===0){const o=new $(s.path);this.ct(n,o,Ve.newNoDocument(o,j.min()))}else Z(r===1);else this.gt(n)!==r&&(this.dt(n),this.ot=this.ot.add(n))}}yt(e){const n=new Map;this.st.forEach((s,o)=>{const a=this.wt(o);if(a){if(s.current&&ph(a.target)){const l=new $(a.target.path);this.it.get(l)!==null||this.It(o,l)||this.ct(o,l,Ve.newNoDocument(l,e))}s.j&&(n.set(o,s.H()),s.J())}});let r=re();this.rt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.wt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.it.forEach((s,o)=>o.setReadTime(e));const i=new Wl(e,n,this.ot,this.it,r);return this.it=kr(),this.rt=og(),this.ot=new Pe(Q),i}at(e,n){if(!this.ft(e))return;const r=this.It(e,n.key)?2:0;this.lt(e).Y(n.key,r),this.it=this.it.insert(n.key,n),this.rt=this.rt.insert(n.key,this.Tt(n.key).add(e))}ct(e,n,r){if(!this.ft(e))return;const i=this.lt(e);this.It(e,n)?i.Y(n,1):i.X(n),this.rt=this.rt.insert(n,this.Tt(n).delete(e)),r&&(this.it=this.it.insert(n,r))}removeTarget(e){this.st.delete(e)}gt(e){const n=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let n=this.st.get(e);return n||(n=new sg,this.st.set(e,n)),n}Tt(e){let n=this.rt.get(e);return n||(n=new Pe(Q),this.rt=this.rt.insert(e,n)),n}ft(e){const n=this.wt(e)!==null;return n||M("WatchChangeAggregator","Detected inactive target",e),n}wt(e){const n=this.st.get(e);return n&&n.G?null:this.nt.Et(e)}dt(e){this.st.set(e,new sg),this.nt.getRemoteKeysForTarget(e).forEach(n=>{this.ct(e,n,null)})}It(e,n){return this.nt.getRemoteKeysForTarget(e).has(n)}}function og(){return new ke($.comparator)}function ag(){return new ke($.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oA=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),aA=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class lA{constructor(e,n){this.databaseId=e,this.N=n}}function nl(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Xw(t,e){return t.N?e.toBase64():e.toUint8Array()}function uA(t,e){return nl(t,e.toTimestamp())}function en(t){return Z(!!t),j.fromTimestamp(function(e){const n=Mn(e);return new Be(n.seconds,n.nanos)}(t))}function df(t,e){return function(n){return new X(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Jw(t){const e=X.fromString(t);return Z(t1(e)),e}function vh(t,e){return df(t.databaseId,e.path)}function Xu(t,e){const n=Jw(e);if(n.get(1)!==t.databaseId.projectId)throw new k(v.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new k(v.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new $(Zw(n))}function wh(t,e){return df(t.databaseId,e)}function cA(t){const e=Jw(t);return e.length===4?X.emptyPath():Zw(e)}function Eh(t){return new X(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Zw(t){return Z(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function lg(t,e,n){return{name:vh(t,e),fields:n.value.mapValue.fields}}function hA(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:b()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.N?(Z(u===void 0||typeof u=="string"),Oe.fromBase64String(u||"")):(Z(u===void 0||u instanceof Uint8Array),Oe.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?v.UNKNOWN:Ww(l.code);return new k(u,l.message||"")}(o);n=new Yw(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Xu(t,r.document.name),s=en(r.document.updateTime),o=new ct({mapValue:{fields:r.document.fields}}),a=Ve.newFoundDocument(i,s,o),l=r.targetIds||[],u=r.removedTargetIds||[];n=new ca(l,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Xu(t,r.document),s=r.readTime?en(r.readTime):j.min(),o=Ve.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ca([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Xu(t,r.document),s=r.removedTargetIds||[];n=new ca([],s,i,null)}else{if(!("filter"in e))return b();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new JN(i),o=r.targetId;n=new Qw(o,s)}}return n}function dA(t,e){let n;if(e instanceof Kl)n={update:lg(t,e.key,e.value)};else if(e instanceof YN)n={delete:vh(t,e.key)};else if(e instanceof Di)n={update:lg(t,e.key,e.data),updateMask:_A(e.fieldMask)};else{if(!(e instanceof XN))return b();n={verify:vh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Fs)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Vs)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof bs)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof tl)return{fieldPath:s.field.canonicalString(),increment:o.k};throw b()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:uA(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:b()}(t,e.precondition)),n}function fA(t,e){return t&&t.length>0?(Z(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?en(r.updateTime):en(i);return s.isEqual(j.min())&&(s=en(i)),new WN(s,r.transformResults||[])}(n,e))):[]}function pA(t,e){return{documents:[wh(t,e.path)]}}function mA(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=wh(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=wh(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length===0)return;const u=l.map(c=>function(h){if(h.op==="=="){if(Qm(h.value))return{unaryFilter:{field:Lr(h.field),op:"IS_NAN"}};if(Gm(h.value))return{unaryFilter:{field:Lr(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Qm(h.value))return{unaryFilter:{field:Lr(h.field),op:"IS_NOT_NAN"}};if(Gm(h.value))return{unaryFilter:{field:Lr(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Lr(h.field),op:wA(h.op),value:h.value}}}(c));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:Lr(c.field),direction:vA(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.N||zl(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function gA(t){let e=cA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Z(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=e1(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new si(Gr(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,zl(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new wi(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new wi(d,h)}(n.endAt)),UN(e,i,o,s,a,"F",l,u)}function yA(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return b()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function e1(t){return t?t.unaryFilter!==void 0?[SA(t)]:t.fieldFilter!==void 0?[EA(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>e1(e)).reduce((e,n)=>e.concat(n)):b():[]}function vA(t){return oA[t]}function wA(t){return aA[t]}function Lr(t){return{fieldPath:t.canonicalString()}}function Gr(t){return it.fromServerFormat(t.fieldPath)}function EA(t){return Ye.create(Gr(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return b()}}(t.fieldFilter.op),t.fieldFilter.value)}function SA(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Gr(t.unaryFilter.field);return Ye.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Gr(t.unaryFilter.field);return Ye.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Gr(t.unaryFilter.field);return Ye.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Gr(t.unaryFilter.field);return Ye.create(i,"!=",{nullValue:"NULL_VALUE"});default:return b()}}function _A(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function t1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class TA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&b(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new I((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof I?n:I.resolve(n)}catch(n){return I.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):I.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):I.reject(n)}static resolve(e){return new I((n,r)=>{n(e)})}static reject(e){return new I((n,r)=>{r(e)})}static waitFor(e){return new I((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=I.resolve(!1);for(const r of e)n=n.next(i=>i?I.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}}function ho(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&GN(s,e,r[i])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&gh(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&gh(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const r=e.get(n.key),i=r;this.applyToLocalView(i),r.isValidDocument()||i.convertToNoDocument(j.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&mi(this.mutations,e.mutations,(n,r)=>tg(n,r))&&mi(this.baseMutations,e.baseMutations,(n,r)=>tg(n,r))}}class ff{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Z(e.mutations.length===r.length);let i=nA;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new ff(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,n,r,i,s=j.min(),o=j.min(),a=Oe.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new lr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(e){this.Jt=e}}function AA(t){const e=gA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?VN(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA{constructor(){this.qe=new xA}addToCollectionParentIndex(e,n){return this.qe.add(n),I.resolve()}getCollectionParents(e,n){return I.resolve(this.qe.getEntries(n))}addFieldIndex(e,n){return I.resolve()}deleteFieldIndex(e,n){return I.resolve()}getDocumentsMatchingTarget(e,n){return I.resolve(null)}getIndexType(e,n){return I.resolve(0)}getFieldIndexes(e,n){return I.resolve([])}getNextCollectionGroupToUpdate(e){return I.resolve(null)}getMinOffset(e,n){return I.resolve(Ir.min())}updateCollectionGroup(e,n,r){return I.resolve()}updateIndexEntries(e,n){return I.resolve()}}class xA{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Pe(X.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Pe(X.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e){this.mn=e}next(){return this.mn+=2,this.mn}static gn(){return new Si(0)}static yn(){return new Si(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fo(t){if(t.code!==v.FAILED_PRECONDITION||t.message!==IA)throw t;M("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(){this.changes=new Pi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ve.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?I.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{constructor(e,n,r){this.ds=e,this.Bs=n,this.indexManager=r}Ls(e,n){return this.Bs.getAllMutationBatchesAffectingDocumentKey(e,n).next(r=>this.Us(e,n,r))}Us(e,n,r){return this.ds.getEntry(e,n).next(i=>{for(const s of r)s.applyToLocalView(i);return i})}qs(e,n){e.forEach((r,i)=>{for(const s of n)s.applyToLocalView(i)})}Ks(e,n){return this.ds.getEntries(e,n).next(r=>this.Gs(e,r).next(()=>r))}Gs(e,n){return this.Bs.getAllMutationBatchesAffectingDocumentKeys(e,n).next(r=>this.qs(n,r))}Qs(e,n,r){return function(i){return $.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.js(e,n.path):cf(n)?this.Ws(e,n,r):this.zs(e,n,r)}js(e,n){return this.Ls(e,new $(n)).next(r=>{let i=yh();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}Ws(e,n,r){const i=n.collectionGroup;let s=yh();return this.indexManager.getCollectionParents(e,i).next(o=>I.forEach(o,a=>{const l=function(u,c){return new jn(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.zs(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}zs(e,n,r){let i;return this.ds.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.Bs.getAllMutationBatchesAffectingQuery(e,n))).next(s=>{for(const o of s)for(const a of o.mutations){const l=a.key;let u=i.get(l);u==null&&(u=Ve.newInvalidDocument(l),i=i.insert(l,u)),gh(a,u,o.localWriteTime),u.isFoundDocument()||(i=i.remove(l))}}).next(()=>(i.forEach((s,o)=>{hf(n,o)||(i=i.remove(s))}),i))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Hs=r,this.Js=i}static Ys(e,n){let r=re(),i=re();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new pf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(){this.Xs=!1}initialize(e,n){this.Zs=e,this.indexManager=n,this.Xs=!0}Qs(e,n,r,i){return this.ti(e,n).next(s=>s||this.ei(e,n,i,r)).next(s=>s||this.ni(e,n))}ti(e,n){return I.resolve(null)}ei(e,n,r,i){return FN(n)||i.isEqual(j.min())?this.ni(e,n):this.Zs.Ks(e,r).next(s=>{const o=this.si(n,s);return this.ii(n,o,r,i)?this.ni(e,n):(Hm()<=G.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),mh(n)),this.ri(e,o,n,TN(i,-1)))})}si(e,n){let r=new Pe(Vw(e));return n.forEach((i,s)=>{hf(e,s)&&(r=r.add(s))}),r}ii(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ni(e,n){return Hm()<=G.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",mh(n)),this.Zs.Qs(e,n,Ir.min())}ri(e,n,r,i){return this.Zs.Qs(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(e,n,r,i){this.persistence=e,this.oi=n,this.M=i,this.ui=new ke(Q),this.ai=new Pi(s=>of(s),af),this.ci=new Map,this.hi=e.getRemoteDocumentCache(),this.fs=e.getTargetCache(),this._s=e.getBundleCache(),this.li(r)}li(e){this.indexManager=this.persistence.getIndexManager(e),this.Bs=this.persistence.getMutationQueue(e,this.indexManager),this.fi=new PA(this.hi,this.Bs,this.indexManager),this.hi.setIndexManager(this.indexManager),this.oi.initialize(this.fi,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ui))}}function MA(t,e,n,r){return new OA(t,e,n,r)}async function n1(t,e){const n=B(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.Bs.getAllMutationBatches(r).next(s=>(i=s,n.li(e),n.Bs.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=re();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.fi.Ks(r,l).next(u=>({di:u,removedBatchIds:o,addedBatchIds:a}))})})}function $A(t,e){const n=B(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.hi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=I.resolve();return h.forEach(y=>{d=d.next(()=>u.getEntry(a,y)).next(m=>{const w=l.docVersions.get(y);Z(w!==null),m.version.compareTo(w)<0&&(c.applyToRemoteDocument(m,l),m.isValidDocument()&&(m.setReadTime(l.commitVersion),u.addEntry(m)))})}),d.next(()=>o.Bs.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.Bs.performConsistencyCheck(r)).next(()=>n.fi.Ks(r,i))})}function r1(t){const e=B(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.fs.getLastRemoteSnapshotVersion(n))}function UA(t,e){const n=B(t),r=e.snapshotVersion;let i=n.ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.hi.newChangeBuffer({trackRemovals:!0});i=n.ui;const a=[];e.targetChanges.forEach((u,c)=>{const h=i.get(c);if(!h)return;a.push(n.fs.removeMatchingKeys(s,u.removedDocuments,c).next(()=>n.fs.addMatchingKeys(s,u.addedDocuments,c)));let d=h.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(c)?d=d.withResumeToken(Oe.EMPTY_BYTE_STRING,j.min()).withLastLimboFreeSnapshotVersion(j.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,r)),i=i.insert(c,d),function(y,m,w){return y.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(h,d,u)&&a.push(n.fs.updateTargetData(s,d))});let l=kr();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(FA(s,o,e.documentUpdates).next(u=>{l=u})),!r.isEqual(j.min())){const u=n.fs.getLastRemoteSnapshotVersion(s).next(c=>n.fs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(u)}return I.waitFor(a).next(()=>o.apply(s)).next(()=>n.fi.Gs(s,l)).next(()=>l)}).then(s=>(n.ui=i,s))}function FA(t,e,n){let r=re();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let s=kr();return n.forEach((o,a)=>{const l=i.get(o);a.isNoDocument()&&a.version.isEqual(j.min())?(e.removeEntry(o,a.readTime),s=s.insert(o,a)):!l.isValidDocument()||a.version.compareTo(l.version)>0||a.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(a),s=s.insert(o,a)):M("LocalStore","Ignoring outdated watch update for ",o,". Current version:",l.version," Watch version:",a.version)}),s})}function VA(t,e){const n=B(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.Bs.getNextMutationBatchAfterBatchId(r,e)))}function bA(t,e){const n=B(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.fs.getTargetData(r,e).next(s=>s?(i=s,I.resolve(i)):n.fs.allocateTargetId(r).next(o=>(i=new lr(e,o,0,r.currentSequenceNumber),n.fs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ui.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ui=n.ui.insert(r.targetId,r),n.ai.set(e,r.targetId)),r})}async function Sh(t,e,n){const r=B(t),i=r.ui.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ho(o))throw o;M("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ui=r.ui.remove(e),r.ai.delete(i.target)}function ug(t,e,n){const r=B(t);let i=j.min(),s=re();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=B(a),h=c.ai.get(u);return h!==void 0?I.resolve(c.ui.get(h)):c.fs.getTargetData(l,u)}(r,o,Tr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.fs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.oi.Qs(o,e,n?i:j.min(),n?s:re())).next(a=>(BA(r,bN(e),a),{documents:a,_i:s})))}function BA(t,e,n){let r=j.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ci.set(e,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(e){this.M=e,this.yi=new Map,this.pi=new Map}getBundleMetadata(e,n){return I.resolve(this.yi.get(n))}saveBundleMetadata(e,n){var r;return this.yi.set(n.id,{id:(r=n).id,version:r.version,createTime:en(r.createTime)}),I.resolve()}getNamedQuery(e,n){return I.resolve(this.pi.get(n))}saveNamedQuery(e,n){return this.pi.set(n.name,function(r){return{name:r.name,query:AA(r.bundledQuery),readTime:en(r.readTime)}}(n)),I.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA{constructor(){this.overlays=new ke($.comparator),this.Ii=new Map}getOverlay(e,n){return I.resolve(this.overlays.get(n))}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.Xt(e,n,s)}),I.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ii.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ii.delete(r)),I.resolve()}getOverlaysForCollection(e,n,r){const i=Yu(),s=n.length+1,o=new $(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return I.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ke((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Yu(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Yu(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return I.resolve(a)}Xt(e,n,r){if(r===null)return;const i=this.overlays.get(r.key);if(i!==null){const o=this.Ii.get(i.largestBatchId).delete(r.key);this.Ii.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new CA(n,r));let s=this.Ii.get(n);s===void 0&&(s=re(),this.Ii.set(n,s)),this.Ii.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(){this.Ti=new Pe(Ee.Ei),this.Ai=new Pe(Ee.Ri)}isEmpty(){return this.Ti.isEmpty()}addReference(e,n){const r=new Ee(e,n);this.Ti=this.Ti.add(r),this.Ai=this.Ai.add(r)}bi(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Pi(new Ee(e,n))}Vi(e,n){e.forEach(r=>this.removeReference(r,n))}vi(e){const n=new $(new X([])),r=new Ee(n,e),i=new Ee(n,e+1),s=[];return this.Ai.forEachInRange([r,i],o=>{this.Pi(o),s.push(o.key)}),s}Si(){this.Ti.forEach(e=>this.Pi(e))}Pi(e){this.Ti=this.Ti.delete(e),this.Ai=this.Ai.delete(e)}Di(e){const n=new $(new X([])),r=new Ee(n,e),i=new Ee(n,e+1);let s=re();return this.Ai.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ee(e,0),r=this.Ti.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ee{constructor(e,n){this.key=e,this.Ci=n}static Ei(e,n){return $.comparator(e.key,n.key)||Q(e.Ci,n.Ci)}static Ri(e,n){return Q(e.Ci,n.Ci)||$.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.Bs=[],this.xi=1,this.Ni=new Pe(Ee.Ei)}checkEmpty(e){return I.resolve(this.Bs.length===0)}addMutationBatch(e,n,r,i){const s=this.xi;this.xi++,this.Bs.length>0&&this.Bs[this.Bs.length-1];const o=new kA(s,n,r,i);this.Bs.push(o);for(const a of i)this.Ni=this.Ni.add(new Ee(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return I.resolve(o)}lookupMutationBatch(e,n){return I.resolve(this.ki(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Mi(r),s=i<0?0:i;return I.resolve(this.Bs.length>s?this.Bs[s]:null)}getHighestUnacknowledgedBatchId(){return I.resolve(this.Bs.length===0?-1:this.xi-1)}getAllMutationBatches(e){return I.resolve(this.Bs.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ee(n,0),i=new Ee(n,Number.POSITIVE_INFINITY),s=[];return this.Ni.forEachInRange([r,i],o=>{const a=this.ki(o.Ci);s.push(a)}),I.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Pe(Q);return n.forEach(i=>{const s=new Ee(i,0),o=new Ee(i,Number.POSITIVE_INFINITY);this.Ni.forEachInRange([s,o],a=>{r=r.add(a.Ci)})}),I.resolve(this.Oi(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;$.isDocumentKey(s)||(s=s.child(""));const o=new Ee(new $(s),0);let a=new Pe(Q);return this.Ni.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.Ci)),!0)},o),I.resolve(this.Oi(a))}Oi(e){const n=[];return e.forEach(r=>{const i=this.ki(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Z(this.Fi(n.batchId,"removed")===0),this.Bs.shift();let r=this.Ni;return I.forEach(n.mutations,i=>{const s=new Ee(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Ni=r})}_n(e){}containsKey(e,n){const r=new Ee(n,0),i=this.Ni.firstAfterOrEqual(r);return I.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.Bs.length,I.resolve()}Fi(e,n){return this.Mi(e)}Mi(e){return this.Bs.length===0?0:e-this.Bs[0].batchId}ki(e){const n=this.Mi(e);return n<0||n>=this.Bs.length?null:this.Bs[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(e){this.$i=e,this.docs=new ke($.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.$i(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return I.resolve(r?r.document.mutableCopy():Ve.newInvalidDocument(n))}getEntries(e,n){let r=kr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ve.newInvalidDocument(i))}),I.resolve(r)}getAllFromCollection(e,n,r){let i=kr();const s=new $(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||CN(kN(l),r)<=0||(i=i.insert(l.key,l.mutableCopy()))}return I.resolve(i)}getAllFromCollectionGroup(e,n,r,i){b()}Bi(e,n){return I.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new KA(this)}getSize(e){return I.resolve(this.size)}}class KA extends DA{constructor(e){super(),this.Kn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Kn.addEntry(e,i)):this.Kn.removeEntry(r)}),I.waitFor(n)}getFromCache(e,n){return this.Kn.getEntry(e,n)}getAllFromCache(e,n){return this.Kn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(e){this.persistence=e,this.Li=new Pi(n=>of(n),af),this.lastRemoteSnapshotVersion=j.min(),this.highestTargetId=0,this.Ui=0,this.qi=new mf,this.targetCount=0,this.Ki=Si.gn()}forEachTarget(e,n){return this.Li.forEach((r,i)=>n(i)),I.resolve()}getLastRemoteSnapshotVersion(e){return I.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return I.resolve(this.Ui)}allocateTargetId(e){return this.highestTargetId=this.Ki.next(),I.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Ui&&(this.Ui=n),I.resolve()}Tn(e){this.Li.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ki=new Si(n),this.highestTargetId=n),e.sequenceNumber>this.Ui&&(this.Ui=e.sequenceNumber)}addTargetData(e,n){return this.Tn(n),this.targetCount+=1,I.resolve()}updateTargetData(e,n){return this.Tn(n),I.resolve()}removeTargetData(e,n){return this.Li.delete(n.target),this.qi.vi(n.targetId),this.targetCount-=1,I.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Li.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Li.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),I.waitFor(s).next(()=>i)}getTargetCount(e){return I.resolve(this.targetCount)}getTargetData(e,n){const r=this.Li.get(n)||null;return I.resolve(r)}addMatchingKeys(e,n,r){return this.qi.bi(n,r),I.resolve()}removeMatchingKeys(e,n,r){this.qi.Vi(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),I.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.qi.vi(n),I.resolve()}getMatchingKeysForTargetId(e,n){const r=this.qi.Di(n);return I.resolve(r)}containsKey(e,n){return I.resolve(this.qi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{constructor(e,n){this.Gi={},this.overlays={},this.es=new nf(0),this.ns=!1,this.ns=!0,this.referenceDelegate=e(this),this.fs=new WA(this),this.indexManager=new RA,this.ds=function(r){return new qA(r)}(r=>this.referenceDelegate.Qi(r)),this.M=new NA(n),this._s=new zA(this.M)}start(){return Promise.resolve()}shutdown(){return this.ns=!1,Promise.resolve()}get started(){return this.ns}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new jA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Gi[e.toKey()];return r||(r=new HA(n,this.referenceDelegate),this.Gi[e.toKey()]=r),r}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getBundleCache(){return this._s}runTransaction(e,n,r){M("MemoryPersistence","Starting transaction:",e);const i=new QA(this.es.next());return this.referenceDelegate.ji(),r(i).next(s=>this.referenceDelegate.Wi(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}zi(e,n){return I.or(Object.values(this.Gi).map(r=>()=>r.containsKey(e,n)))}}class QA extends TA{constructor(e){super(),this.currentSequenceNumber=e}}class gf{constructor(e){this.persistence=e,this.Hi=new mf,this.Ji=null}static Yi(e){return new gf(e)}get Xi(){if(this.Ji)return this.Ji;throw b()}addReference(e,n,r){return this.Hi.addReference(r,n),this.Xi.delete(r.toString()),I.resolve()}removeReference(e,n,r){return this.Hi.removeReference(r,n),this.Xi.add(r.toString()),I.resolve()}markPotentiallyOrphaned(e,n){return this.Xi.add(n.toString()),I.resolve()}removeTarget(e,n){this.Hi.vi(n.targetId).forEach(i=>this.Xi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}ji(){this.Ji=new Set}Wi(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return I.forEach(this.Xi,r=>{const i=$.fromPath(r);return this.Zi(e,i).next(s=>{s||n.removeEntry(i,j.min())})}).next(()=>(this.Ji=null,n.apply(e)))}updateLimboDocument(e,n){return this.Zi(e,n).next(r=>{r?this.Xi.delete(n.toString()):this.Xi.add(n.toString())})}Qi(e){return 0}Zi(e,n){return I.or([()=>I.resolve(this.Hi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.zi(e,n)])}}class cg{constructor(){this.activeTargetIds=Gw()}nr(e){this.activeTargetIds=this.activeTargetIds.add(e)}sr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}er(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class YA{constructor(){this.Ur=new cg,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Ur.nr(e),this.qr[e]||"not-current"}updateQueryState(e,n,r){this.qr[e]=n}removeLocalQueryTarget(e){this.Ur.sr(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new cg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{Kr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(){this.Gr=()=>this.Qr(),this.jr=()=>this.Wr(),this.zr=[],this.Hr()}Kr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Gr),window.removeEventListener("offline",this.jr)}Hr(){window.addEventListener("online",this.Gr),window.addEventListener("offline",this.jr)}Qr(){M("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Wr(){M("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZA{constructor(e){this.Jr=e.Jr,this.Yr=e.Yr}Xr(e){this.Zr=e}eo(e){this.no=e}onMessage(e){this.so=e}close(){this.Yr()}send(e){this.Jr(e)}io(){this.Zr()}ro(e){this.no(e)}oo(e){this.so(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.uo=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(e,n,r,i,s){const o=this.ho(e,n);M("RestConnection","Sending: ",o,r);const a={};return this.lo(a,i,s),this.fo(e,o,a,r).then(l=>(M("RestConnection","Received: ",l),l),l=>{throw qm("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}_o(e,n,r,i,s){return this.co(e,n,r,i,s)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+xi,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ho(e,n){const r=JA[e];return`${this.uo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,i){return new Promise((s,o)=>{const a=new cN;a.listenOnce(aN.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Qu.NO_ERROR:const u=a.getResponseJson();M("Connection","XHR received:",JSON.stringify(u)),s(u);break;case Qu.TIMEOUT:M("Connection",'RPC "'+e+'" timed out'),o(new k(v.DEADLINE_EXCEEDED,"Request time out"));break;case Qu.HTTP_ERROR:const c=a.getStatus();if(M("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(y){const m=y.toLowerCase().replace(/_/g,"-");return Object.values(v).indexOf(m)>=0?m:v.UNKNOWN}(h.status);o(new k(d,h.message))}else o(new k(v.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new k(v.UNAVAILABLE,"Connection failed."));break;default:b()}}finally{M("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}wo(e,n,r){const i=[this.uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=sN(),o=oN(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new uN({})),this.lo(a.initMessageHeaders,n,r),Vv()||Bv()||h_()||zv()||d_()||bv()||(a.httpHeadersOverwriteParam="$httpHeaders");const l=i.join("");M("Connection","Creating WebChannel: "+l,a);const u=s.createWebChannel(l,a);let c=!1,h=!1;const d=new ZA({Jr:m=>{h?M("Connection","Not sending because WebChannel is closed:",m):(c||(M("Connection","Opening WebChannel transport."),u.open(),c=!0),M("Connection","WebChannel sending:",m),u.send(m))},Yr:()=>u.close()}),y=(m,w,N)=>{m.listen(w,p=>{try{N(p)}catch(f){setTimeout(()=>{throw f},0)}})};return y(u,jo.EventType.OPEN,()=>{h||M("Connection","WebChannel transport opened.")}),y(u,jo.EventType.CLOSE,()=>{h||(h=!0,M("Connection","WebChannel transport closed"),d.ro())}),y(u,jo.EventType.ERROR,m=>{h||(h=!0,qm("Connection","WebChannel transport errored:",m),d.ro(new k(v.UNAVAILABLE,"The operation could not be completed")))}),y(u,jo.EventType.MESSAGE,m=>{var w;if(!h){const N=m.data[0];Z(!!N);const p=N,f=p.error||((w=p[0])===null||w===void 0?void 0:w.error);if(f){M("Connection","WebChannel received error:",f);const g=f.status;let E=function(C){const x=de[C];if(x!==void 0)return Ww(x)}(g),T=f.message;E===void 0&&(E=v.INTERNAL,T="Unknown error status: "+g+" with message "+f.message),h=!0,d.ro(new k(E,T)),u.close()}else M("Connection","WebChannel received:",N),d.oo(N)}}),y(o,lN.STAT_EVENT,m=>{m.stat===zm.PROXY?M("Connection","Detected buffering proxy"):m.stat===zm.NOPROXY&&M("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.io()},0),d}}function Ju(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gl(t){return new lA(t,!0)}class i1{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Yn=e,this.timerId=n,this.mo=r,this.yo=i,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-r);i>0&&M("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Yn.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(e,n,r,i,s,o,a,l){this.Yn=e,this.Vo=r,this.vo=i,this.So=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new i1(e,n)}ko(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Mo()&&this.Co===null&&(this.Co=this.Yn.enqueueAfterDelay(this.Vo,6e4,()=>this.Bo()))}Lo(e){this.Uo(),this.stream.send(e)}async Bo(){if(this.Mo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(e,n){this.Uo(),this.qo(),this.No.cancel(),this.Do++,e!==4?this.No.reset():n&&n.code===v.RESOURCE_EXHAUSTED?(On(n.toString()),On("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):n&&n.code===v.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Ko(),this.stream.close(),this.stream=null),this.state=e,await this.listener.eo(n)}Ko(){}auth(){this.state=1;const e=this.Go(this.Do),n=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Do===n&&this.Qo(r,i)},r=>{e(()=>{const i=new k(v.UNKNOWN,"Fetching auth token failed: "+r.message);return this.jo(i)})})}Qo(e,n){const r=this.Go(this.Do);this.stream=this.Wo(e,n),this.stream.Xr(()=>{r(()=>(this.state=2,this.xo=this.Yn.enqueueAfterDelay(this.vo,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.eo(i=>{r(()=>this.jo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Oo(){this.state=5,this.No.Ro(async()=>{this.state=0,this.start()})}jo(e){return M("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Go(e){return n=>{this.Yn.enqueueAndForget(()=>this.Do===e?n():(M("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class tR extends s1{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.M=s}Wo(e,n){return this.So.wo("Listen",e,n)}onMessage(e){this.No.reset();const n=hA(this.M,e),r=function(i){if(!("targetChange"in i))return j.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?j.min():s.readTime?en(s.readTime):j.min()}(e);return this.listener.zo(n,r)}Ho(e){const n={};n.database=Eh(this.M),n.addTarget=function(i,s){let o;const a=s.target;return o=ph(a)?{documents:pA(i,a)}:{query:mA(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=Xw(i,s.resumeToken):s.snapshotVersion.compareTo(j.min())>0&&(o.readTime=nl(i,s.snapshotVersion.toTimestamp())),o}(this.M,e);const r=yA(this.M,e);r&&(n.labels=r),this.Lo(n)}Jo(e){const n={};n.database=Eh(this.M),n.removeTarget=e,this.Lo(n)}}class nR extends s1{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.M=s,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(e,n){return this.So.wo("Write",e,n)}onMessage(e){if(Z(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Yo){this.No.reset();const n=fA(e.writeResults,e.commitTime),r=en(e.commitTime);return this.listener.tu(r,n)}return Z(!e.writeResults||e.writeResults.length===0),this.Yo=!0,this.listener.eu()}nu(){const e={};e.database=Eh(this.M),this.Lo(e)}Zo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>dA(this.M,r))};this.Lo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.So=r,this.M=i,this.su=!1}iu(){if(this.su)throw new k(v.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,r){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.So.co(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===v.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new k(v.UNKNOWN,i.toString())})}_o(e,n,r){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.So._o(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===v.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new k(v.UNKNOWN,i.toString())})}terminate(){this.su=!0}}class iR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}au(){this.ru===0&&(this.cu("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}lu(e){this.state==="Online"?this.cu("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.fu(),this.ru=0,e==="Online"&&(this.uu=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}hu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(On(n),this.uu=!1):M("OnlineStateTracker",n)}fu(){this.ou!==null&&(this.ou.cancel(),this.ou=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=s,this.gu.Kr(o=>{r.enqueueAndForget(async()=>{Dr(this)&&(M("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=B(a);l.wu.add(4),await po(l),l.yu.set("Unknown"),l.wu.delete(4),await Ql(l)}(this))})}),this.yu=new iR(r,i)}}async function Ql(t){if(Dr(t))for(const e of t.mu)await e(!0)}async function po(t){for(const e of t.mu)await e(!1)}function o1(t,e){const n=B(t);n._u.has(e.targetId)||(n._u.set(e.targetId,e),wf(n)?vf(n):Li(n).Mo()&&yf(n,e))}function a1(t,e){const n=B(t),r=Li(n);n._u.delete(e),r.Mo()&&l1(n,e),n._u.size===0&&(r.Mo()?r.$o():Dr(n)&&n.yu.set("Unknown"))}function yf(t,e){t.pu.Z(e.targetId),Li(t).Ho(e)}function l1(t,e){t.pu.Z(e),Li(t).Jo(e)}function vf(t){t.pu=new sA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t._u.get(e)||null}),Li(t).start(),t.yu.au()}function wf(t){return Dr(t)&&!Li(t).ko()&&t._u.size>0}function Dr(t){return B(t).wu.size===0}function u1(t){t.pu=void 0}async function oR(t){t._u.forEach((e,n)=>{yf(t,e)})}async function aR(t,e){u1(t),wf(t)?(t.yu.lu(e),vf(t)):t.yu.set("Unknown")}async function lR(t,e,n){if(t.yu.set("Online"),e instanceof Yw&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r._u.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r._u.delete(o),r.pu.removeTarget(o))}(t,e)}catch(r){M("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await rl(t,r)}else if(e instanceof ca?t.pu.ut(e):e instanceof Qw?t.pu._t(e):t.pu.ht(e),!n.isEqual(j.min()))try{const r=await r1(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.pu.yt(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i._u.get(l);u&&i._u.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i._u.get(a);if(!l)return;i._u.set(a,l.withResumeToken(Oe.EMPTY_BYTE_STRING,l.snapshotVersion)),l1(i,a);const u=new lr(l.target,a,1,l.sequenceNumber);yf(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){M("RemoteStore","Failed to raise snapshot:",r),await rl(t,r)}}async function rl(t,e,n){if(!ho(e))throw e;t.wu.add(1),await po(t),t.yu.set("Offline"),n||(n=()=>r1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{M("RemoteStore","Retrying IndexedDB access"),await n(),t.wu.delete(1),await Ql(t)})}function c1(t,e){return e().catch(n=>rl(t,n,e))}async function Yl(t){const e=B(t),n=$n(e);let r=e.du.length>0?e.du[e.du.length-1].batchId:-1;for(;uR(e);)try{const i=await VA(e.localStore,r);if(i===null){e.du.length===0&&n.$o();break}r=i.batchId,cR(e,i)}catch(i){await rl(e,i)}h1(e)&&d1(e)}function uR(t){return Dr(t)&&t.du.length<10}function cR(t,e){t.du.push(e);const n=$n(t);n.Mo()&&n.Xo&&n.Zo(e.mutations)}function h1(t){return Dr(t)&&!$n(t).ko()&&t.du.length>0}function d1(t){$n(t).start()}async function hR(t){$n(t).nu()}async function dR(t){const e=$n(t);for(const n of t.du)e.Zo(n.mutations)}async function fR(t,e,n){const r=t.du.shift(),i=ff.from(r,e,n);await c1(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Yl(t)}async function pR(t,e){e&&$n(t).Xo&&await async function(n,r){if(i=r.code,ZN(i)&&i!==v.ABORTED){const s=n.du.shift();$n(n).Fo(),await c1(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Yl(n)}var i}(t,e),h1(t)&&d1(t)}async function dg(t,e){const n=B(t);n.asyncQueue.verifyOperationInProgress(),M("RemoteStore","RemoteStore received new credentials");const r=Dr(n);n.wu.add(3),await po(n),r&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.wu.delete(3),await Ql(n)}async function mR(t,e){const n=B(t);e?(n.wu.delete(2),await Ql(n)):e||(n.wu.add(2),await po(n),n.yu.set("Unknown"))}function Li(t){return t.Iu||(t.Iu=function(e,n,r){const i=B(e);return i.iu(),new tR(n,i.So,i.authCredentials,i.appCheckCredentials,i.M,r)}(t.datastore,t.asyncQueue,{Xr:oR.bind(null,t),eo:aR.bind(null,t),zo:lR.bind(null,t)}),t.mu.push(async e=>{e?(t.Iu.Fo(),wf(t)?vf(t):t.yu.set("Unknown")):(await t.Iu.stop(),u1(t))})),t.Iu}function $n(t){return t.Tu||(t.Tu=function(e,n,r){const i=B(e);return i.iu(),new nR(n,i.So,i.authCredentials,i.appCheckCredentials,i.M,r)}(t.datastore,t.asyncQueue,{Xr:hR.bind(null,t),eo:pR.bind(null,t),eu:dR.bind(null,t),tu:fR.bind(null,t)}),t.mu.push(async e=>{e?(t.Tu.Fo(),await Yl(t)):(await t.Tu.stop(),t.du.length>0&&(M("RemoteStore",`Stopping write stream with ${t.du.length} pending writes`),t.du=[]))})),t.Tu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Zt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Ef(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new k(v.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Sf(t,e){if(On("AsyncQueue",`${e}: ${t}`),ho(t))return new k(v.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||$.comparator(n.key,r.key):(n,r)=>$.comparator(n.key,r.key),this.keyedMap=yh(),this.sortedSet=new ke(this.comparator)}static emptySet(e){return new oi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof oi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new oi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(){this.Eu=new ke($.comparator)}track(e){const n=e.doc.key,r=this.Eu.get(n);r?e.type!==0&&r.type===3?this.Eu=this.Eu.insert(n,e):e.type===3&&r.type!==1?this.Eu=this.Eu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Eu=this.Eu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Eu=this.Eu.remove(n):e.type===1&&r.type===2?this.Eu=this.Eu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):b():this.Eu=this.Eu.insert(n,e)}Au(){const e=[];return this.Eu.inorderTraversal((n,r)=>{e.push(r)}),e}}class _i{constructor(e,n,r,i,s,o,a,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l}static fromInitialDocuments(e,n,r,i){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new _i(e,n,oi.emptySet(n),s,r,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&uo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gR{constructor(){this.Ru=void 0,this.listeners=[]}}class yR{constructor(){this.queries=new Pi(e=>Fw(e),uo),this.onlineState="Unknown",this.bu=new Set}}async function _f(t,e){const n=B(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new gR),i)try{s.Ru=await n.onListen(r)}catch(o){const a=Sf(o,`Initialization of query '${mh(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Pu(n.onlineState),s.Ru&&e.Vu(s.Ru)&&Tf(n)}async function If(t,e){const n=B(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function vR(t,e){const n=B(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Vu(i)&&(r=!0);o.Ru=i}}r&&Tf(n)}function wR(t,e,n){const r=B(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Tf(t){t.bu.forEach(e=>{e.next()})}class kf{constructor(e,n,r){this.query=e,this.vu=n,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=r||{}}Vu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new _i(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.Su?this.Cu(e)&&(this.vu.next(e),n=!0):this.xu(e,this.onlineState)&&(this.Nu(e),n=!0),this.Du=e,n}onError(e){this.vu.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Du&&!this.Su&&this.xu(this.Du,e)&&(this.Nu(this.Du),n=!0),n}xu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.ku||!r)&&(!e.docs.isEmpty()||n==="Offline")}Cu(e){if(e.docChanges.length>0)return!0;const n=this.Du&&this.Du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Nu(e){e=_i.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Su=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f1{constructor(e){this.key=e}}class p1{constructor(e){this.key=e}}class ER{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.current=!1,this.Ku=re(),this.mutatedKeys=re(),this.Gu=Vw(e),this.Qu=new oi(this.Gu)}get ju(){return this.Uu}Wu(e,n){const r=n?n.zu:new fg,i=n?n.Qu:this.Qu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),y=hf(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),w=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let N=!1;d&&y?d.data.isEqual(y.data)?m!==w&&(r.track({type:3,doc:y}),N=!0):this.Hu(d,y)||(r.track({type:2,doc:y}),N=!0,(l&&this.Gu(y,l)>0||u&&this.Gu(y,u)<0)&&(a=!0)):!d&&y?(r.track({type:0,doc:y}),N=!0):d&&!y&&(r.track({type:1,doc:d}),N=!0,(l||u)&&(a=!0)),N&&(y?(o=o.add(y),s=w?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Qu:o,zu:r,ii:a,mutatedKeys:s}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const s=e.zu.Au();s.sort((u,c)=>function(h,d){const y=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return b()}};return y(h)-y(d)}(u.type,c.type)||this.Gu(u.doc,c.doc)),this.Ju(r);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,s.length!==0||l?{snapshot:new _i(this.query,e.Qu,i,s,e.mutatedKeys,a===0,l,!1),Xu:o}:{Xu:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new fg,mutatedKeys:this.mutatedKeys,ii:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=re(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return e.forEach(r=>{this.Ku.has(r)||n.push(new p1(r))}),this.Ku.forEach(r=>{e.has(r)||n.push(new f1(r))}),n}ta(e){this.Uu=e._i,this.Ku=re();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ea(){return _i.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0)}}class SR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class _R{constructor(e){this.key=e,this.na=!1}}class IR{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.sa={},this.ia=new Pi(a=>Fw(a),uo),this.ra=new Map,this.oa=new Set,this.ua=new ke($.comparator),this.aa=new Map,this.ca=new mf,this.ha={},this.la=new Map,this.fa=Si.yn(),this.onlineState="Unknown",this.da=void 0}get isPrimaryClient(){return this.da===!0}}async function TR(t,e){const n=OR(t);let r,i;const s=n.ia.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ea();else{const o=await bA(n.localStore,Tr(e));n.isPrimaryClient&&o1(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await kR(n,e,r,a==="current")}return i}async function kR(t,e,n,r){t._a=(c,h,d)=>async function(y,m,w,N){let p=m.view.Wu(w);p.ii&&(p=await ug(y.localStore,m.query,!1).then(({documents:E})=>m.view.Wu(E,p)));const f=N&&N.targetChanges.get(m.targetId),g=m.view.applyChanges(p,y.isPrimaryClient,f);return mg(y,m.targetId,g.Xu),g.snapshot}(t,c,h,d);const i=await ug(t.localStore,e,!0),s=new ER(e,i._i),o=s.Wu(i.documents),a=co.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),l=s.applyChanges(o,t.isPrimaryClient,a);mg(t,n,l.Xu);const u=new SR(e,n,s);return t.ia.set(e,u),t.ra.has(n)?t.ra.get(n).push(e):t.ra.set(n,[e]),l.snapshot}async function CR(t,e){const n=B(t),r=n.ia.get(e),i=n.ra.get(r.targetId);if(i.length>1)return n.ra.set(r.targetId,i.filter(s=>!uo(s,e))),void n.ia.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Sh(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),a1(n.remoteStore,r.targetId),_h(n,r.targetId)}).catch(fo)):(_h(n,r.targetId),await Sh(n.localStore,r.targetId,!0))}async function NR(t,e,n){const r=MR(t);try{const i=await function(s,o){const a=B(s),l=Be.now(),u=o.reduce((h,d)=>h.add(d.key),re());let c;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.fi.Ks(h,u).next(d=>{c=d;const y=[];for(const m of o){const w=QN(m,c.get(m.key));w!=null&&y.push(new Di(m.key,w,$w(w.value.mapValue),An.exists(!0)))}return a.Bs.addMutationBatch(h,l,y,o)})).then(h=>(h.applyToLocalDocumentSet(c),{batchId:h.batchId,changes:c}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.ha[s.currentUser.toKey()];l||(l=new ke(Q)),l=l.insert(o,a),s.ha[s.currentUser.toKey()]=l}(r,i.batchId,n),await mo(r,i.changes),await Yl(r.remoteStore)}catch(i){const s=Sf(i,"Failed to persist write");n.reject(s)}}async function m1(t,e){const n=B(t);try{const r=await UA(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.aa.get(s);o&&(Z(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.na=!0:i.modifiedDocuments.size>0?Z(o.na):i.removedDocuments.size>0&&(Z(o.na),o.na=!1))}),await mo(n,r,e)}catch(r){await fo(r)}}function pg(t,e,n){const r=B(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ia.forEach((s,o)=>{const a=o.view.Pu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=B(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.Pu(o)&&(l=!0)}),l&&Tf(a)}(r.eventManager,e),i.length&&r.sa.zo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function AR(t,e,n){const r=B(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.aa.get(e),s=i&&i.key;if(s){let o=new ke($.comparator);o=o.insert(s,Ve.newNoDocument(s,j.min()));const a=re().add(s),l=new Wl(j.min(),new Map,new Pe(Q),o,a);await m1(r,l),r.ua=r.ua.remove(s),r.aa.delete(e),Cf(r)}else await Sh(r.localStore,e,!1).then(()=>_h(r,e,n)).catch(fo)}async function RR(t,e){const n=B(t),r=e.batch.batchId;try{const i=await $A(n.localStore,e);y1(n,r,null),g1(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await mo(n,i)}catch(i){await fo(i)}}async function xR(t,e,n){const r=B(t);try{const i=await function(s,o){const a=B(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.Bs.lookupMutationBatch(l,o).next(c=>(Z(c!==null),u=c.keys(),a.Bs.removeMutationBatch(l,c))).next(()=>a.Bs.performConsistencyCheck(l)).next(()=>a.fi.Ks(l,u))})}(r.localStore,e);y1(r,e,n),g1(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await mo(r,i)}catch(i){await fo(i)}}function g1(t,e){(t.la.get(e)||[]).forEach(n=>{n.resolve()}),t.la.delete(e)}function y1(t,e,n){const r=B(t);let i=r.ha[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.ha[r.currentUser.toKey()]=i}}function _h(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ra.get(e))t.ia.delete(r),n&&t.sa.wa(r,n);t.ra.delete(e),t.isPrimaryClient&&t.ca.vi(e).forEach(r=>{t.ca.containsKey(r)||v1(t,r)})}function v1(t,e){t.oa.delete(e.path.canonicalString());const n=t.ua.get(e);n!==null&&(a1(t.remoteStore,n),t.ua=t.ua.remove(e),t.aa.delete(n),Cf(t))}function mg(t,e,n){for(const r of n)r instanceof f1?(t.ca.addReference(r.key,e),DR(t,r)):r instanceof p1?(M("SyncEngine","Document no longer in limbo: "+r.key),t.ca.removeReference(r.key,e),t.ca.containsKey(r.key)||v1(t,r.key)):b()}function DR(t,e){const n=e.key,r=n.path.canonicalString();t.ua.get(n)||t.oa.has(r)||(M("SyncEngine","New document in limbo: "+n),t.oa.add(r),Cf(t))}function Cf(t){for(;t.oa.size>0&&t.ua.size<t.maxConcurrentLimboResolutions;){const e=t.oa.values().next().value;t.oa.delete(e);const n=new $(X.fromString(e)),r=t.fa.next();t.aa.set(r,new _R(n)),t.ua=t.ua.insert(n,r),o1(t.remoteStore,new lr(Tr(jl(n.path)),r,2,nf.A))}}async function mo(t,e,n){const r=B(t),i=[],s=[],o=[];r.ia.isEmpty()||(r.ia.forEach((a,l)=>{o.push(r._a(l,e,n).then(u=>{if(u){r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u.fromCache?"not-current":"current"),i.push(u);const c=pf.Ys(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.sa.zo(i),await async function(a,l){const u=B(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>I.forEach(l,h=>I.forEach(h.Hs,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>I.forEach(h.Js,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!ho(c))throw c;M("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.ui.get(h),y=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(y);u.ui=u.ui.insert(h,m)}}}(r.localStore,s))}async function PR(t,e){const n=B(t);if(!n.currentUser.isEqual(e)){M("SyncEngine","User change. New user:",e.toKey());const r=await n1(n.localStore,e);n.currentUser=e,function(i,s){i.la.forEach(o=>{o.forEach(a=>{a.reject(new k(v.CANCELLED,s))})}),i.la.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await mo(n,r.di)}}function LR(t,e){const n=B(t),r=n.aa.get(e);if(r&&r.na)return re().add(r.key);{let i=re();const s=n.ra.get(e);if(!s)return i;for(const o of s){const a=n.ia.get(o);i=i.unionWith(a.view.ju)}return i}}function OR(t){const e=B(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=m1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=LR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=AR.bind(null,e),e.sa.zo=vR.bind(null,e.eventManager),e.sa.wa=wR.bind(null,e.eventManager),e}function MR(t){const e=B(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=RR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=xR.bind(null,e),e}class $R{constructor(){this.synchronizeTabs=!1}async initialize(e){this.M=Gl(e.databaseInfo.databaseId),this.sharedClientState=this.ga(e),this.persistence=this.ya(e),await this.persistence.start(),this.gcScheduler=this.pa(e),this.localStore=this.Ia(e)}pa(e){return null}Ia(e){return MA(this.persistence,new LA,e.initialUser,this.M)}ya(e){return new GA(gf.Yi,this.M)}ga(e){return new YA}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class UR{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>pg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=PR.bind(null,this.syncEngine),await mR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new yR}createDatastore(e){const n=Gl(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new eR(i));var i;return function(s,o,a,l){return new rR(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>pg(this.syncEngine,a,0),o=hg.vt()?new hg:new XA,new sR(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new IR(r,i,s,o,a,l);return u&&(c.da=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=B(e);M("RemoteStore","RemoteStore shutting down."),n.wu.add(5),await po(n),n.gu.shutdown(),n.yu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ea(this.observer.next,e)}error(e){this.observer.error?this.Ea(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Aa(){this.muted=!0}Ea(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=tt.UNAUTHENTICATED,this.clientId=Lw.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{M("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(M("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new k(v.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Zt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Sf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function VR(t,e){t.asyncQueue.verifyOperationInProgress(),M("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await n1(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function bR(t,e){t.asyncQueue.verifyOperationInProgress();const n=await BR(t);M("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>dg(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>dg(e.remoteStore,s)),t.onlineComponents=e}async function BR(t){return t.offlineComponents||(M("FirestoreClient","Using default OfflineComponentProvider"),await VR(t,new $R)),t.offlineComponents}async function w1(t){return t.onlineComponents||(M("FirestoreClient","Using default OnlineComponentProvider"),await bR(t,new UR)),t.onlineComponents}function zR(t){return w1(t).then(e=>e.syncEngine)}async function il(t){const e=await w1(t),n=e.eventManager;return n.onListen=TR.bind(null,e.syncEngine),n.onUnlisten=CR.bind(null,e.syncEngine),n}function jR(t,e,n={}){const r=new Zt;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new Nf({next:h=>{s.enqueueAndForget(()=>If(i,c));const d=h.docs.has(o);!d&&h.fromCache?l.reject(new k(v.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?l.reject(new k(v.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new kf(jl(o.path),u,{includeMetadataChanges:!0,ku:!0});return _f(i,c)}(await il(t),t.asyncQueue,e,n,r)),r.promise}function HR(t,e,n={}){const r=new Zt;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new Nf({next:h=>{s.enqueueAndForget(()=>If(i,c)),h.fromCache&&a.source==="server"?l.reject(new k(v.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new kf(o,u,{includeMetadataChanges:!0,ku:!0});return _f(i,c)}(await il(t),t.asyncQueue,e,n,r)),r.promise}const gg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E1(t,e,n){if(!n)throw new k(v.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function qR(t,e,n,r){if(e===!0&&r===!0)throw new k(v.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function yg(t){if(!$.isDocumentKey(t))throw new k(v.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function vg(t){if($.isDocumentKey(t))throw new k(v.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Xl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":b()}function St(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new k(v.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Xl(t);throw new k(v.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new k(v.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new k(v.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,qR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wg({}),this._settingsFrozen=!1,e instanceof yi?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new k(v.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yi(i.options.projectId)}(e))}get app(){if(!this._app)throw new k(v.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new k(v.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wg(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new dN;switch(n.type){case"gapi":const r=n.client;return Z(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new mN(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new k(v.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=gg.get(e);n&&(M("ComponentProvider","Removing Datastore"),gg.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Rn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ze(this.firestore,e,this._key)}}class Dt{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Dt(this.firestore,e,this._query)}}class Rn extends Dt{constructor(e,n,r){super(e,n,jl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ze(this.firestore,null,new $(e))}withConverter(e){return new Rn(this.firestore,e,this._path)}}function Zu(t,e,...n){if(t=Ie(t),E1("collection","path",e),t instanceof Af){const r=X.fromString(e,...n);return vg(r),new Rn(t,null,r)}{if(!(t instanceof ze||t instanceof Rn))throw new k(v.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(X.fromString(e,...n));return vg(r),new Rn(t.firestore,null,r)}}function Yn(t,e,...n){if(t=Ie(t),arguments.length===1&&(e=Lw.R()),E1("doc","path",e),t instanceof Af){const r=X.fromString(e,...n);return yg(r),new ze(t,null,new $(r))}{if(!(t instanceof ze||t instanceof Rn))throw new k(v.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(X.fromString(e,...n));return yg(r),new ze(t.firestore,t instanceof Rn?t.converter:null,new $(r))}}function KR(t,e){return t=Ie(t),e=Ie(e),t instanceof Dt&&e instanceof Dt&&t.firestore===e.firestore&&uo(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(){this.Fa=Promise.resolve(),this.$a=[],this.Ba=!1,this.La=[],this.Ua=null,this.qa=!1,this.Ka=!1,this.Ga=[],this.No=new i1(this,"async_queue_retry"),this.Qa=()=>{const n=Ju();n&&M("AsyncQueue","Visibility state changed to "+n.visibilityState),this.No.Po()};const e=Ju();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Qa)}get isShuttingDown(){return this.Ba}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ja(),this.Wa(e)}enterRestrictedMode(e){if(!this.Ba){this.Ba=!0,this.Ka=e||!1;const n=Ju();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Qa)}}enqueue(e){if(this.ja(),this.Ba)return new Promise(()=>{});const n=new Zt;return this.Wa(()=>this.Ba&&this.Ka?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.$a.push(e),this.za()))}async za(){if(this.$a.length!==0){try{await this.$a[0](),this.$a.shift(),this.No.reset()}catch(e){if(!ho(e))throw e;M("AsyncQueue","Operation failed with retryable error: "+e)}this.$a.length>0&&this.No.Ro(()=>this.za())}}Wa(e){const n=this.Fa.then(()=>(this.qa=!0,e().catch(r=>{this.Ua=r,this.qa=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw On("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.qa=!1,r))));return this.Fa=n,n}enqueueAfterDelay(e,n,r){this.ja(),this.Ga.indexOf(e)>-1&&(n=0);const i=Ef.createAndSchedule(this,e,n,r,s=>this.Ha(s));return this.La.push(i),i}ja(){this.Ua&&b()}verifyOperationInProgress(){}async Ja(){let e;do e=this.Fa,await e;while(e!==this.Fa)}Ya(e){for(const n of this.La)if(n.timerId===e)return!0;return!1}Xa(e){return this.Ja().then(()=>{this.La.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.La)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Ja()})}Za(e){this.Ga.push(e)}Ha(e){const n=this.La.indexOf(e);this.La.splice(n,1)}}function Eg(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Un extends Af{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new WR,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||S1(this),this._firestoreClient.terminate()}}function GR(t=Kv()){return Ed(t,"firestore").getImmediate()}function Jl(t){return t._firestoreClient||S1(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function S1(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new SN(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new FR(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new k(v.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ii(Oe.fromBase64String())}catch(n){throw new k(v.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ii(Oe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new k(v.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new k(v.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Q(this._lat,e._lat)||Q(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QR=/^__.*__$/;class YR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Di(e,this.data,this.fieldMask,n,this.fieldTransforms):new Kl(e,this.data,n,this.fieldTransforms)}}class _1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Di(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function I1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw b()}}class xf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.M=r,this.ignoreUndefinedProperties=i,s===void 0&&this.tc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ec(){return this.settings.ec}nc(e){return new xf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}sc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.nc({path:r,ic:!1});return i.rc(e),i}oc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.nc({path:r,ic:!1});return i.tc(),i}uc(e){return this.nc({path:void 0,ic:!0})}ac(e){return sl(e,this.settings.methodName,this.settings.cc||!1,this.path,this.settings.hc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}tc(){if(this.path)for(let e=0;e<this.path.length;e++)this.rc(this.path.get(e))}rc(e){if(e.length===0)throw this.ac("Document fields must not be empty");if(I1(this.ec)&&QR.test(e))throw this.ac('Document fields cannot begin and end with "__"')}}class XR{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.M=r||Gl(e)}lc(e,n,r,i=!1){return new xf({ec:e,methodName:n,hc:r,path:it.emptyPath(),ic:!1,cc:i},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function go(t){const e=t._freezeSettings(),n=Gl(t._databaseId);return new XR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function T1(t,e,n,r,i,s={}){const o=t.lc(s.merge||s.mergeFields?2:0,e,n,i);Pf("Data must be an object, but it was:",o,r);const a=C1(r,o);let l,u;if(s.merge)l=new Ms(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=Ih(e,h,n);if(!o.contains(d))throw new k(v.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);A1(c,d)||c.push(d)}l=new Ms(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new YR(new ct(a),l,u)}class tu extends eu{_toFieldTransform(e){if(e.ec!==2)throw e.ec===1?e.ac(`${this._methodName}() can only appear at the top level of your update data`):e.ac(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof tu}}class Df extends eu{_toFieldTransform(e){return new qN(e.path,new Fs)}isEqual(e){return e instanceof Df}}function JR(t,e,n,r){const i=t.lc(1,e,n);Pf("Data must be an object, but it was:",i,r);const s=[],o=ct.empty();xr(r,(l,u)=>{const c=Lf(e,l,n);u=Ie(u);const h=i.oc(c);if(u instanceof tu)s.push(c);else{const d=yo(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new Ms(s);return new _1(o,a,i.fieldTransforms)}function ZR(t,e,n,r,i,s){const o=t.lc(1,e,n),a=[Ih(e,r,n)],l=[i];if(s.length%2!=0)throw new k(v.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Ih(e,s[d])),l.push(s[d+1]);const u=[],c=ct.empty();for(let d=a.length-1;d>=0;--d)if(!A1(u,a[d])){const y=a[d];let m=l[d];m=Ie(m);const w=o.oc(y);if(m instanceof tu)u.push(y);else{const N=yo(m,w);N!=null&&(u.push(y),c.set(y,N))}}const h=new Ms(u);return new _1(c,h,o.fieldTransforms)}function k1(t,e,n,r=!1){return yo(n,t.lc(r?4:3,e))}function yo(t,e){if(N1(t=Ie(t)))return Pf("Unsupported field value:",e,t),C1(t,e);if(t instanceof eu)return function(n,r){if(!I1(r.ec))throw r.ac(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ac(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ic&&e.ec!==4)throw e.ac("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=yo(o,r.uc(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=Ie(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return zN(r.M,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Be.fromDate(n);return{timestampValue:nl(r.M,i)}}if(n instanceof Be){const i=new Be(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:nl(r.M,i)}}if(n instanceof Rf)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ii)return{bytesValue:Xw(r.M,n._byteString)};if(n instanceof ze){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.ac(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:df(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ac(`Unsupported field value: ${Xl(n)}`)}(t,e)}function C1(t,e){const n={};return Ow(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):xr(t,(r,i)=>{const s=yo(i,e.sc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function N1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Be||t instanceof Rf||t instanceof Ii||t instanceof ze||t instanceof eu)}function Pf(t,e,n){if(!N1(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Xl(n);throw r==="an object"?e.ac(t+" a custom object"):e.ac(t+" "+r)}}function Ih(t,e,n){if((e=Ie(e))instanceof Zl)return e._internalPath;if(typeof e=="string")return Lf(t,e);throw sl("Field path arguments must be of type string or ",t,!1,void 0,n)}const ex=new RegExp("[~\\*/\\[\\]]");function Lf(t,e,n){if(e.search(ex)>=0)throw sl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Zl(...e.split("."))._internalPath}catch{throw sl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function sl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new k(v.INVALID_ARGUMENT,a+t+l)}function A1(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ze(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new tx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(nu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class tx extends Of{data(){return super.data()}}function nu(t,e){return typeof e=="string"?Lf(t,e):e instanceof Zl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class R1 extends Of{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ha(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(nu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ha extends R1{data(e={}){return super.data(e)}}class x1{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Qi(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ha(this._firestore,this._userDataWriter,r.key,r,new Qi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new k(v.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new ha(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Qi(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new ha(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Qi(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:nx(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function nx(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return b()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D1(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new k(v.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ru{}function Ko(t,...e){for(const n of e)t=n._apply(t);return t}class rx extends ru{constructor(e,n,r){super(),this._c=e,this.wc=n,this.mc=r,this.type="where"}_apply(e){const n=go(e.firestore),r=function(i,s,o,a,l,u,c){let h;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new k(v.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){_g(c,u);const y=[];for(const m of c)y.push(Sg(a,i,m));h={arrayValue:{values:y}}}else h=Sg(a,i,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||_g(c,u),h=k1(o,s,c,u==="in"||u==="not-in");const d=Ye.create(l,u,h);return function(y,m){if(m.S()){const N=uf(y);if(N!==null&&!N.isEqual(m.field))throw new k(v.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${N.toString()}' and '${m.field.toString()}'`);const p=lf(y);p!==null&&L1(y,m.field,p)}const w=function(N,p){for(const f of N.filters)if(p.indexOf(f.op)>=0)return f.op;return null}(y,function(N){switch(N){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(m.op));if(w!==null)throw w===m.op?new k(v.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${m.op.toString()}' filter.`):new k(v.INVALID_ARGUMENT,`Invalid query. You cannot use '${m.op.toString()}' filters with '${w.toString()}' filters.`)}(i,d),d}(e._query,"where",n,e.firestore._databaseId,this._c,this.wc,this.mc);return new Dt(e.firestore,e.converter,function(i,s){const o=i.filters.concat([s]);return new jn(i.path,i.collectionGroup,i.explicitOrderBy.slice(),o,i.limit,i.limitType,i.startAt,i.endAt)}(e._query,r))}}function ec(t,e,n){const r=e,i=nu("where",t);return new rx(i,r,n)}class ix extends ru{constructor(e,n){super(),this._c=e,this.gc=n,this.type="orderBy"}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new k(v.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new k(v.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new si(i,s);return function(a,l){if(lf(a)===null){const u=uf(a);u!==null&&L1(a,u,l.field)}}(r,o),o}(e._query,this._c,this.gc);return new Dt(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new jn(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function sx(t,e="asc"){const n=e,r=nu("orderBy",t);return new ix(r,n)}class ox extends ru{constructor(e,n,r){super(),this.type=e,this.Tc=n,this.Ec=r}_apply(e){const n=P1(e,this.type,this.Tc,this.Ec);return new Dt(e.firestore,e.converter,function(r,i){return new jn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,i,r.endAt)}(e._query,n))}}function ax(...t){return new ox("startAt",t,!0)}class lx extends ru{constructor(e,n,r){super(),this.type=e,this.Tc=n,this.Ec=r}_apply(e){const n=P1(e,this.type,this.Tc,this.Ec);return new Dt(e.firestore,e.converter,function(r,i){return new jn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,i)}(e._query,n))}}function ux(...t){return new lx("endAt",t,!0)}function P1(t,e,n,r){if(n[0]=Ie(n[0]),n[0]instanceof Of)return function(i,s,o,a,l){if(!a)throw new k(v.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const u=[];for(const c of Ei(i))if(c.field.isKeyField())u.push(el(s,a.key));else{const h=a.data.field(c.field);if(rf(h))throw new k(v.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+c.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=c.field.canonicalString();throw new k(v.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}u.push(h)}return new wi(u,l)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=go(t.firestore);return function(s,o,a,l,u,c){const h=s.explicitOrderBy;if(u.length>h.length)throw new k(v.INVALID_ARGUMENT,`Too many arguments provided to ${l}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let y=0;y<u.length;y++){const m=u[y];if(h[y].field.isKeyField()){if(typeof m!="string")throw new k(v.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${l}(), but got a ${typeof m}`);if(!cf(s)&&m.indexOf("/")!==-1)throw new k(v.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${l}() must be a plain document ID, but '${m}' contains a slash.`);const w=s.path.child(X.fromString(m));if(!$.isDocumentKey(w))throw new k(v.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${l}() must result in a valid document path, but '${w}' is not because it contains an odd number of segments.`);const N=new $(w);d.push(el(o,N))}else{const w=k1(a,l,m);d.push(w)}}return new wi(d,c)}(t._query,t.firestore._databaseId,i,e,n,r)}}function Sg(t,e,n){if(typeof(n=Ie(n))=="string"){if(n==="")throw new k(v.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!cf(e)&&n.indexOf("/")!==-1)throw new k(v.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(X.fromString(n));if(!$.isDocumentKey(r))throw new k(v.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return el(t,new $(r))}if(n instanceof ze)return el(t,n._key);throw new k(v.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Xl(n)}.`)}function _g(t,e){if(!Array.isArray(t)||t.length===0)throw new k(v.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new k(v.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function L1(t,e,n){if(!n.isEqual(e))throw new k(v.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cx{convertValue(e,n="none"){switch(_r(e)){case 0:return null;case 1:return e.booleanValue;case 2:return fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(gi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw b()}}convertObject(e,n){const r={};return xr(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Rf(fe(e.latitude),fe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Mw(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp($s(e));default:return null}}convertTimestamp(e){const n=Mn(e);return new Be(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=X.fromString(e);Z(t1(r));const i=new yi(r.get(1),r.get(3)),s=new $(r.popFirst(5));return i.isEqual(n)||On(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O1(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ig(t){t=St(t,ze);const e=St(t.firestore,Un);return jR(Jl(e),t._key).then(n=>$1(e,t,n))}class Mf extends cx{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ii(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ze(this.firestore,null,n)}}function hx(t){t=St(t,Dt);const e=St(t.firestore,Un),n=Jl(e),r=new Mf(e);return D1(t._query),HR(n,t._query).then(i=>new x1(e,r,t,i))}function M1(t,e,n){t=St(t,ze);const r=St(t.firestore,Un),i=O1(t.converter,e,n);return $f(r,[T1(go(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,An.none())])}function Tg(t,e,n,...r){t=St(t,ze);const i=St(t.firestore,Un),s=go(i);let o;return o=typeof(e=Ie(e))=="string"||e instanceof Zl?ZR(s,"updateDoc",t._key,e,n,r):JR(s,"updateDoc",t._key,e),$f(i,[o.toMutation(t._key,An.exists(!0))])}function dx(t,e){const n=St(t.firestore,Un),r=Yn(t),i=O1(t.converter,e);return $f(n,[T1(go(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,An.exists(!1))]).then(()=>r)}function kg(t,...e){var n,r,i;t=Ie(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Eg(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Eg(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof ze)u=St(t.firestore,Un),c=jl(t._key.path),l={next:h=>{e[o]&&e[o]($1(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=St(t,Dt);u=St(h.firestore,Un),c=h._query;const d=new Mf(u);l={next:y=>{e[o]&&e[o](new x1(u,d,h,y))},error:e[o+1],complete:e[o+2]},D1(t._query)}return function(h,d,y,m){const w=new Nf(m),N=new kf(d,w,y);return h.asyncQueue.enqueueAndForget(async()=>_f(await il(h),N)),()=>{w.Aa(),h.asyncQueue.enqueueAndForget(async()=>If(await il(h),N))}}(Jl(u),c,a,l)}function $f(t,e){return function(n,r){const i=new Zt;return n.asyncQueue.enqueueAndForget(async()=>NR(await zR(n),r,i)),i.promise}(Jl(t),e)}function $1(t,e,n){const r=n.docs.get(e._key),i=new Mf(t);return new R1(t,i,e._key,r,new Qi(n.hasPendingWrites,n.fromCache),e.converter)}function fx(){return new Df("serverTimestamp")}(function(t,e=!0){(function(n){xi=n})(Gs),fi(new mr("firestore",(n,{options:r})=>{const i=n.getProvider("app").getImmediate(),s=new Un(i,new fN(n.getProvider("auth-internal")),new yN(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC")),Nn(jm,"3.4.9",t),Nn(jm,"3.4.9","esm2017")})();var px="firebase",mx="9.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nn(px,mx,"app");var Cg=vI({apiKey:"AIzaSyBE0omhdvj-jJ0GyLKsEP9bQfqa3NND0LE",authDomain:"chat-c936e.firebaseapp.com",projectId:"chat-c936e",storageBucket:"chat-c936e.appspot.com",messagingSenderId:"307111878400",appId:"1:307111878400:web:a961a6cdc16c34058f5de5"});class gx{constructor(e=mk(Cg),n=GR(Cg)){So(this,"logout",()=>this.Auth.signOut());So(this,"signInAnonymously",()=>tT(this.Auth));So(this,"signInWithGoogle",()=>AT(this.Auth,new qt));this.auth=e,this.firestore=n,m0(this.Auth,async r=>{var i;!r||r.isAnonymous||await M1(Yn(this.Firestore,"users",r.uid),{uid:r.uid,displayName:(i=r.displayName)==null?void 0:i.toUpperCase(),photoURL:r.photoURL,email:r.email})})}get Auth(){return this.auth}get Firestore(){return this.firestore}}var Je=new gx;class yx{constructor(e=Zu(Je.Firestore,"chats"),n=Zu(Je.Firestore,"posts"),r=Zu(Je.Firestore,"users")){this.chats=e,this.posts=n,this.users=r}get Chats(){return e=>Ko(this.chats,ec("users","array-contains",e))}get Posts(){return e=>Ko(this.posts,ec("chatId","==",e))}get Users(){return e=>Ko(this.users,sx("displayName"),ax(e),ux(e+"\uF8FF"))}async last(e){return(await Ig(Yn(this.chats,e))).data()}async user(e){return(await Ig(Yn(this.users,e))).data()}async chat(e,n){if(e===n)return"";const i=(await hx(Ko(this.chats,ec("users","array-contains",e)))).docs.map(s=>({id:s.id,users:s.data().users})).filter(s=>s.users.includes(n));return i.length?i[0].id:(await dx(this.chats,{users:[e,n],last:{post:"",seen:[]}})).id}async seen(e,n,r){await Tg(Yn(this.chats,e),{last:{post:r.post,seen:[r.user,n]}})}async send(e,n,r){await M1(Yn(this.posts),{timestamp:fx(),chatId:e,userId:n,payload:r}),await Tg(Yn(this.chats,e),{last:{post:r,seen:[n]}})}}var ur=new yx;function vx(t){var c,h,d,y;const e=Zs(),[n,r]=U.exports.useState(""),[i,s]=U.exports.useState(""),[o,a]=U.exports.useState(""),[l,u]=U.exports.useState(!1);return(c=t.contact)==null||c.then(m=>r((m==null?void 0:m.displayName)||"")),(h=t.contact)==null||h.then(m=>s((m==null?void 0:m.photoURL)||"")),(d=t.message)==null||d.then(m=>{var w;return a(((w=m==null?void 0:m.last)==null?void 0:w.post)||"")}),(y=t.message)==null||y.then(m=>{var w,N,p;return u((p=(w=m==null?void 0:m.last)==null?void 0:w.seen)==null?void 0:p.includes((N=Je.Auth.currentUser)==null?void 0:N.uid))}),Ae("li",{className:"preview list-group-item d-flex justify-content-between align-items-start",onClick:()=>e(t.chatKey),children:[P("img",{src:i,alt:n}),Ae("div",{className:"ms-2 w-100",children:[P("p",{className:"m-0 p-0 card-title placeholder-glow mb-1",children:n?P("span",{className:"fw-bold",children:n}):Ae(ar,{children:[P("span",{className:"placeholder col-2 me-1"}),P("span",{className:"placeholder col-3 me-1"})]})}),P("p",{className:"m-0 p-0 card-text placeholder-glow mb-0",children:o?P("span",{className:"fw-light",children:o}):Ae(ar,{children:[P("span",{className:"placeholder col-3 me-1"}),P("span",{className:"placeholder col-5 me-1"}),P("span",{className:"placeholder col-2 me-1"})]})})]}),!l&&P("span",{className:"badge bg-success rounded-pill",children:"New"})]})}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Qr=function(){return Qr=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Qr.apply(this,arguments)},U1=function(t){return{loading:t==null,value:t}},wx=function(){return function(t,e){switch(e.type){case"error":return Qr(Qr({},t),{error:e.error,loading:!1,value:void 0});case"reset":return U1(e.defaultValue);case"value":return Qr(Qr({},t),{error:void 0,loading:!1,value:e.value});default:return t}}},Ex=function(t){var e=t?t():void 0,n=U.exports.useReducer(wx(),U1(e)),r=n[0],i=n[1],s=function(){var l=t?t():void 0;i({type:"reset",defaultValue:l})},o=function(l){i({type:"error",error:l})},a=function(l){i({type:"value",value:l})};return U.exports.useMemo(function(){return{error:r.error,loading:r.loading,reset:s,setError:o,setValue:a,value:r.value}},[r.error,r.loading,s,o,a,r.value])},Sx=function(t,e,n){var r=U.exports.useRef(t);return U.exports.useEffect(function(){e(t,r.current)||(r.current=t,n&&n())}),r},_x=function(t,e){var n=!t&&!e,r=!!t&&!!e&&KR(t,e);return n||r},Ix=function(t,e){return Sx(t,_x,e)},Uf=function(t,e){var n=Ex(),r=n.error,i=n.loading,s=n.reset,o=n.setError,a=n.setValue,l=n.value,u=Ix(t,s);U.exports.useEffect(function(){if(!u.current){a(void 0);return}var h=e!=null&&e.snapshotListenOptions?kg(u.current,e.snapshotListenOptions,a,o):kg(u.current,a,o);return function(){h()}},[u.current]);var c=[l,i,r];return U.exports.useMemo(function(){return c},c)};function Tx(){const t=Zs(),[e,n]=U.exports.useState(""),[r]=Uf(ur.Users(e.length<3?"\0":e.toUpperCase())),i=r==null?void 0:r.docs.map(s=>{var o,a,l;return{uid:s.id,displayName:(o=s.data())==null?void 0:o.displayName,photoURL:(a=s.data())==null?void 0:a.photoURL,email:(l=s.data())==null?void 0:l.email}});return Ae("main",{id:"add",children:[Ae("div",{className:"input-group g-2 p-2",children:[P("span",{className:"input-group-text",children:"\u{1F50E}"}),P("input",{type:"text",className:"form-control",placeholder:"Find user",value:e,onChange:s=>n(s.target.value)})]}),P("ul",{className:"list-group",children:i==null?void 0:i.filter(s=>{var o;return s.uid!==((o=Je.Auth.currentUser)==null?void 0:o.uid)}).map(s=>Ae("li",{className:"preview list-group-item d-flex justify-content-between align-items-start",onClick:()=>t(-1),children:[P("img",{src:s.photoURL,alt:s.displayName}),Ae("div",{className:"ms-2 w-100",children:[P("p",{className:"m-0 p-0 card-title placeholder-glow mb-1",children:P("span",{className:"fw-bold",children:s.displayName||""})}),P("p",{className:"m-0 p-0 card-text placeholder-glow mb-0",children:P("span",{className:"fw-light",children:s.email||""})})]})]},s.uid))})]})}function kx(){var r,i;const{id:t}=Hk(),[e]=Uf(ur.Posts(t||"")),n=e==null?void 0:e.docs.sort((s,o)=>{var a,l;return((a=s.data().timestamp)==null?void 0:a.seconds)<((l=o.data().timestamp)==null?void 0:l.seconds)?1:-1}).map(s=>({id:s.id,chatId:s.data().chatId,userId:s.data().userId,payload:s.data().payload}));return n!=null&&n.length&&ur.seen(t||"",((r=Je.Auth.currentUser)==null?void 0:r.uid)||"",{post:n[0].payload,user:n[0].userId}),Ae("main",{id:"chat",children:[P(iC,{authId:((i=Je.Auth.currentUser)==null?void 0:i.uid)||"",sended:n||[]}),P(nC,{send:s=>{var o;return ur.send(t||"",((o=Je.Auth.currentUser)==null?void 0:o.uid)||"",s)}})]})}function Cx(){var r;const t=Zs(),[e]=Uf(ur.Chats(((r=Je.Auth.currentUser)==null?void 0:r.uid)||"")),n=e==null?void 0:e.docs.map(i=>({id:i.id,users:i.data().users}));return Ae("main",{id:"chats",children:[P("ul",{className:"list-group",children:n==null?void 0:n.map(i=>P(vx,{chatKey:i.id,contact:ur.user(i.users.find(s=>{var o;return s!==((o=Je.Auth.currentUser)==null?void 0:o.uid)})||""),message:ur.last(i.id)},i.id))}),P("p",{className:"mt-5 mb-0 text-center text-muted",children:"Maybe add a new chat? \u{1F4AC}"}),P("button",{className:"btn btn-primary btn-add px-3 py-1 shadow",onClick:()=>t("add"),children:"Add"})]})}function Nx(){return P("main",{id:"login",children:Ae("form",{onSubmit:t=>{t.preventDefault()},children:[P("h2",{className:"display-1 text-center mt-4",children:"\u{1F44B}"}),P("h2",{className:"display-4 text-center mb-4",children:"Please sign in"}),P("button",{className:"btn btn-lg btn-primary w-100",onClick:()=>Je.signInAnonymously(),children:"Sign In Anonymously"}),P("button",{className:"btn btn-lg btn-success w-100",onClick:()=>Je.signInWithGoogle(),children:"Sign In With Google"}),P("p",{className:"mt-4 text-center text-muted",children:"\xA9 Kawlik 2022"})]})})}function Ax(){const[t]=Ek(Je.Auth),e=xd(),n=Zs();return console.log(e.pathname),Ae(ar,{children:[P(rC,{isAuth:!0,inform:()=>Je.logout(),logout:()=>Je.logout(),goBack:()=>n(-1)}),P(Gk,{children:t?Ae(ar,{children:[P(Qn,{path:"chat",element:P(Cx,{})}),P(Qn,{path:"chat/:id",element:P(kx,{})}),P(Qn,{path:"chat/add",element:P(Tx,{})}),P(Qn,{path:"*",element:P(Nm,{to:"chat"})})]}):Ae(ar,{children:[P(Qn,{path:"/",element:P(Nx,{})}),P(Qn,{path:"*",element:P(Nm,{to:"/"})})]})})]})}tc.createRoot(document.getElementById("root")).render(P(sE.StrictMode,{children:P(Qk,{children:P(Ax,{})})}));
