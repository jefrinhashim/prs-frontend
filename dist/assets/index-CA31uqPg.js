(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))p(u);new MutationObserver(u=>{for(const g of u)if(g.type==="childList")for(const v of g.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&p(v)}).observe(document,{childList:!0,subtree:!0});function d(u){const g={};return u.integrity&&(g.integrity=u.integrity),u.referrerPolicy&&(g.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?g.credentials="include":u.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function p(u){if(u.ep)return;u.ep=!0;const g=d(u);fetch(u.href,g)}})();function Lc(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Qs={exports:{}},Rt={},Xs={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dc;function Uu(){if(dc)return ne;dc=1;var o=Symbol.for("react.element"),l=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),v=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),E=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),z=Symbol.iterator;function M(x){return x===null||typeof x!="object"?null:(x=z&&x[z]||x["@@iterator"],typeof x=="function"?x:null)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,I={};function P(x,A,re){this.props=x,this.context=A,this.refs=I,this.updater=re||D}P.prototype.isReactComponent={},P.prototype.setState=function(x,A){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,A,"setState")},P.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function B(){}B.prototype=P.prototype;function q(x,A,re){this.props=x,this.context=A,this.refs=I,this.updater=re||D}var _=q.prototype=new B;_.constructor=q,U(_,P.prototype),_.isPureReactComponent=!0;var J=Array.isArray,ee=Object.prototype.hasOwnProperty,le={current:null},ge={key:!0,ref:!0,__self:!0,__source:!0};function Ee(x,A,re){var te,ae={},se=null,ue=null;if(A!=null)for(te in A.ref!==void 0&&(ue=A.ref),A.key!==void 0&&(se=""+A.key),A)ee.call(A,te)&&!ge.hasOwnProperty(te)&&(ae[te]=A[te]);var ce=arguments.length-2;if(ce===1)ae.children=re;else if(1<ce){for(var be=Array(ce),er=0;er<ce;er++)be[er]=arguments[er+2];ae.children=be}if(x&&x.defaultProps)for(te in ce=x.defaultProps,ce)ae[te]===void 0&&(ae[te]=ce[te]);return{$$typeof:o,type:x,key:se,ref:ue,props:ae,_owner:le.current}}function X(x,A){return{$$typeof:o,type:x.type,key:A,ref:x.ref,props:x.props,_owner:x._owner}}function de(x){return typeof x=="object"&&x!==null&&x.$$typeof===o}function Ce(x){var A={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(re){return A[re]})}var we=/\/+/g;function ze(x,A){return typeof x=="object"&&x!==null&&x.key!=null?Ce(""+x.key):A.toString(36)}function Me(x,A,re,te,ae){var se=typeof x;(se==="undefined"||se==="boolean")&&(x=null);var ue=!1;if(x===null)ue=!0;else switch(se){case"string":case"number":ue=!0;break;case"object":switch(x.$$typeof){case o:case l:ue=!0}}if(ue)return ue=x,ae=ae(ue),x=te===""?"."+ze(ue,0):te,J(ae)?(re="",x!=null&&(re=x.replace(we,"$&/")+"/"),Me(ae,A,re,"",function(er){return er})):ae!=null&&(de(ae)&&(ae=X(ae,re+(!ae.key||ue&&ue.key===ae.key?"":(""+ae.key).replace(we,"$&/")+"/")+x)),A.push(ae)),1;if(ue=0,te=te===""?".":te+":",J(x))for(var ce=0;ce<x.length;ce++){se=x[ce];var be=te+ze(se,ce);ue+=Me(se,A,re,be,ae)}else if(be=M(x),typeof be=="function")for(x=be.call(x),ce=0;!(se=x.next()).done;)se=se.value,be=te+ze(se,ce++),ue+=Me(se,A,re,be,ae);else if(se==="object")throw A=String(x),Error("Objects are not valid as a React child (found: "+(A==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":A)+"). If you meant to render a collection of children, use an array instead.");return ue}function Le(x,A,re){if(x==null)return x;var te=[],ae=0;return Me(x,te,"","",function(se){return A.call(re,se,ae++)}),te}function Ve(x){if(x._status===-1){var A=x._result;A=A(),A.then(function(re){(x._status===0||x._status===-1)&&(x._status=1,x._result=re)},function(re){(x._status===0||x._status===-1)&&(x._status=2,x._result=re)}),x._status===-1&&(x._status=0,x._result=A)}if(x._status===1)return x._result.default;throw x._result}var ve={current:null},F={transition:null},Y={ReactCurrentDispatcher:ve,ReactCurrentBatchConfig:F,ReactCurrentOwner:le};function O(){throw Error("act(...) is not supported in production builds of React.")}return ne.Children={map:Le,forEach:function(x,A,re){Le(x,function(){A.apply(this,arguments)},re)},count:function(x){var A=0;return Le(x,function(){A++}),A},toArray:function(x){return Le(x,function(A){return A})||[]},only:function(x){if(!de(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},ne.Component=P,ne.Fragment=d,ne.Profiler=u,ne.PureComponent=q,ne.StrictMode=p,ne.Suspense=k,ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y,ne.act=O,ne.cloneElement=function(x,A,re){if(x==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+x+".");var te=U({},x.props),ae=x.key,se=x.ref,ue=x._owner;if(A!=null){if(A.ref!==void 0&&(se=A.ref,ue=le.current),A.key!==void 0&&(ae=""+A.key),x.type&&x.type.defaultProps)var ce=x.type.defaultProps;for(be in A)ee.call(A,be)&&!ge.hasOwnProperty(be)&&(te[be]=A[be]===void 0&&ce!==void 0?ce[be]:A[be])}var be=arguments.length-2;if(be===1)te.children=re;else if(1<be){ce=Array(be);for(var er=0;er<be;er++)ce[er]=arguments[er+2];te.children=ce}return{$$typeof:o,type:x.type,key:ae,ref:se,props:te,_owner:ue}},ne.createContext=function(x){return x={$$typeof:v,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},x.Provider={$$typeof:g,_context:x},x.Consumer=x},ne.createElement=Ee,ne.createFactory=function(x){var A=Ee.bind(null,x);return A.type=x,A},ne.createRef=function(){return{current:null}},ne.forwardRef=function(x){return{$$typeof:b,render:x}},ne.isValidElement=de,ne.lazy=function(x){return{$$typeof:C,_payload:{_status:-1,_result:x},_init:Ve}},ne.memo=function(x,A){return{$$typeof:E,type:x,compare:A===void 0?null:A}},ne.startTransition=function(x){var A=F.transition;F.transition={};try{x()}finally{F.transition=A}},ne.unstable_act=O,ne.useCallback=function(x,A){return ve.current.useCallback(x,A)},ne.useContext=function(x){return ve.current.useContext(x)},ne.useDebugValue=function(){},ne.useDeferredValue=function(x){return ve.current.useDeferredValue(x)},ne.useEffect=function(x,A){return ve.current.useEffect(x,A)},ne.useId=function(){return ve.current.useId()},ne.useImperativeHandle=function(x,A,re){return ve.current.useImperativeHandle(x,A,re)},ne.useInsertionEffect=function(x,A){return ve.current.useInsertionEffect(x,A)},ne.useLayoutEffect=function(x,A){return ve.current.useLayoutEffect(x,A)},ne.useMemo=function(x,A){return ve.current.useMemo(x,A)},ne.useReducer=function(x,A,re){return ve.current.useReducer(x,A,re)},ne.useRef=function(x){return ve.current.useRef(x)},ne.useState=function(x){return ve.current.useState(x)},ne.useSyncExternalStore=function(x,A,re){return ve.current.useSyncExternalStore(x,A,re)},ne.useTransition=function(){return ve.current.useTransition()},ne.version="18.3.1",ne}var cc;function oo(){return cc||(cc=1,Xs.exports=Uu()),Xs.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pc;function $u(){if(pc)return Rt;pc=1;var o=oo(),l=Symbol.for("react.element"),d=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,u=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,g={key:!0,ref:!0,__self:!0,__source:!0};function v(b,k,E){var C,z={},M=null,D=null;E!==void 0&&(M=""+E),k.key!==void 0&&(M=""+k.key),k.ref!==void 0&&(D=k.ref);for(C in k)p.call(k,C)&&!g.hasOwnProperty(C)&&(z[C]=k[C]);if(b&&b.defaultProps)for(C in k=b.defaultProps,k)z[C]===void 0&&(z[C]=k[C]);return{$$typeof:l,type:b,key:M,ref:D,props:z,_owner:u.current}}return Rt.Fragment=d,Rt.jsx=v,Rt.jsxs=v,Rt}var uc;function Gu(){return uc||(uc=1,Qs.exports=$u()),Qs.exports}var a=Gu(),y=oo();const Wu=Lc(y);var Yi={},Js={exports:{}},Ze={},Zs={exports:{}},eo={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mc;function qu(){return mc||(mc=1,(function(o){function l(F,Y){var O=F.length;F.push(Y);e:for(;0<O;){var x=O-1>>>1,A=F[x];if(0<u(A,Y))F[x]=Y,F[O]=A,O=x;else break e}}function d(F){return F.length===0?null:F[0]}function p(F){if(F.length===0)return null;var Y=F[0],O=F.pop();if(O!==Y){F[0]=O;e:for(var x=0,A=F.length,re=A>>>1;x<re;){var te=2*(x+1)-1,ae=F[te],se=te+1,ue=F[se];if(0>u(ae,O))se<A&&0>u(ue,ae)?(F[x]=ue,F[se]=O,x=se):(F[x]=ae,F[te]=O,x=te);else if(se<A&&0>u(ue,O))F[x]=ue,F[se]=O,x=se;else break e}}return Y}function u(F,Y){var O=F.sortIndex-Y.sortIndex;return O!==0?O:F.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var g=performance;o.unstable_now=function(){return g.now()}}else{var v=Date,b=v.now();o.unstable_now=function(){return v.now()-b}}var k=[],E=[],C=1,z=null,M=3,D=!1,U=!1,I=!1,P=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,q=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(F){for(var Y=d(E);Y!==null;){if(Y.callback===null)p(E);else if(Y.startTime<=F)p(E),Y.sortIndex=Y.expirationTime,l(k,Y);else break;Y=d(E)}}function J(F){if(I=!1,_(F),!U)if(d(k)!==null)U=!0,Ve(ee);else{var Y=d(E);Y!==null&&ve(J,Y.startTime-F)}}function ee(F,Y){U=!1,I&&(I=!1,B(Ee),Ee=-1),D=!0;var O=M;try{for(_(Y),z=d(k);z!==null&&(!(z.expirationTime>Y)||F&&!Ce());){var x=z.callback;if(typeof x=="function"){z.callback=null,M=z.priorityLevel;var A=x(z.expirationTime<=Y);Y=o.unstable_now(),typeof A=="function"?z.callback=A:z===d(k)&&p(k),_(Y)}else p(k);z=d(k)}if(z!==null)var re=!0;else{var te=d(E);te!==null&&ve(J,te.startTime-Y),re=!1}return re}finally{z=null,M=O,D=!1}}var le=!1,ge=null,Ee=-1,X=5,de=-1;function Ce(){return!(o.unstable_now()-de<X)}function we(){if(ge!==null){var F=o.unstable_now();de=F;var Y=!0;try{Y=ge(!0,F)}finally{Y?ze():(le=!1,ge=null)}}else le=!1}var ze;if(typeof q=="function")ze=function(){q(we)};else if(typeof MessageChannel<"u"){var Me=new MessageChannel,Le=Me.port2;Me.port1.onmessage=we,ze=function(){Le.postMessage(null)}}else ze=function(){P(we,0)};function Ve(F){ge=F,le||(le=!0,ze())}function ve(F,Y){Ee=P(function(){F(o.unstable_now())},Y)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(F){F.callback=null},o.unstable_continueExecution=function(){U||D||(U=!0,Ve(ee))},o.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<F?Math.floor(1e3/F):5},o.unstable_getCurrentPriorityLevel=function(){return M},o.unstable_getFirstCallbackNode=function(){return d(k)},o.unstable_next=function(F){switch(M){case 1:case 2:case 3:var Y=3;break;default:Y=M}var O=M;M=Y;try{return F()}finally{M=O}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(F,Y){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var O=M;M=F;try{return Y()}finally{M=O}},o.unstable_scheduleCallback=function(F,Y,O){var x=o.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?x+O:x):O=x,F){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=O+A,F={id:C++,callback:Y,priorityLevel:F,startTime:O,expirationTime:A,sortIndex:-1},O>x?(F.sortIndex=O,l(E,F),d(k)===null&&F===d(E)&&(I?(B(Ee),Ee=-1):I=!0,ve(J,O-x))):(F.sortIndex=A,l(k,F),U||D||(U=!0,Ve(ee))),F},o.unstable_shouldYield=Ce,o.unstable_wrapCallback=function(F){var Y=M;return function(){var O=M;M=Y;try{return F.apply(this,arguments)}finally{M=O}}}})(eo)),eo}var gc;function Yu(){return gc||(gc=1,Zs.exports=qu()),Zs.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hc;function Ku(){if(hc)return Ze;hc=1;var o=oo(),l=Yu();function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p=new Set,u={};function g(e,r){v(e,r),v(e+"Capture",r)}function v(e,r){for(u[e]=r,e=0;e<r.length;e++)p.add(r[e])}var b=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),k=Object.prototype.hasOwnProperty,E=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,C={},z={};function M(e){return k.call(z,e)?!0:k.call(C,e)?!1:E.test(e)?z[e]=!0:(C[e]=!0,!1)}function D(e,r,n,t){if(n!==null&&n.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return t?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function U(e,r,n,t){if(r===null||typeof r>"u"||D(e,r,n,t))return!0;if(t)return!1;if(n!==null)switch(n.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function I(e,r,n,t,i,s,c){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=t,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=r,this.sanitizeURL=s,this.removeEmptyString=c}var P={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){P[e]=new I(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];P[r]=new I(r,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){P[e]=new I(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){P[e]=new I(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){P[e]=new I(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){P[e]=new I(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){P[e]=new I(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){P[e]=new I(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){P[e]=new I(e,5,!1,e.toLowerCase(),null,!1,!1)});var B=/[\-:]([a-z])/g;function q(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(B,q);P[r]=new I(r,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(B,q);P[r]=new I(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(B,q);P[r]=new I(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){P[e]=new I(e,1,!1,e.toLowerCase(),null,!1,!1)}),P.xlinkHref=new I("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){P[e]=new I(e,1,!1,e.toLowerCase(),null,!0,!0)});function _(e,r,n,t){var i=P.hasOwnProperty(r)?P[r]:null;(i!==null?i.type!==0:t||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(U(r,n,i,t)&&(n=null),t||i===null?M(r)&&(n===null?e.removeAttribute(r):e.setAttribute(r,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(r=i.attributeName,t=i.attributeNamespace,n===null?e.removeAttribute(r):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,t?e.setAttributeNS(t,r,n):e.setAttribute(r,n))))}var J=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ee=Symbol.for("react.element"),le=Symbol.for("react.portal"),ge=Symbol.for("react.fragment"),Ee=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),de=Symbol.for("react.provider"),Ce=Symbol.for("react.context"),we=Symbol.for("react.forward_ref"),ze=Symbol.for("react.suspense"),Me=Symbol.for("react.suspense_list"),Le=Symbol.for("react.memo"),Ve=Symbol.for("react.lazy"),ve=Symbol.for("react.offscreen"),F=Symbol.iterator;function Y(e){return e===null||typeof e!="object"?null:(e=F&&e[F]||e["@@iterator"],typeof e=="function"?e:null)}var O=Object.assign,x;function A(e){if(x===void 0)try{throw Error()}catch(n){var r=n.stack.trim().match(/\n( *(at )?)/);x=r&&r[1]||""}return`
`+x+e}var re=!1;function te(e,r){if(!e||re)return"";re=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(j){var t=j}Reflect.construct(e,[],r)}else{try{r.call()}catch(j){t=j}e.call(r.prototype)}else{try{throw Error()}catch(j){t=j}e()}}catch(j){if(j&&t&&typeof j.stack=="string"){for(var i=j.stack.split(`
`),s=t.stack.split(`
`),c=i.length-1,m=s.length-1;1<=c&&0<=m&&i[c]!==s[m];)m--;for(;1<=c&&0<=m;c--,m--)if(i[c]!==s[m]){if(c!==1||m!==1)do if(c--,m--,0>m||i[c]!==s[m]){var h=`
`+i[c].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=c&&0<=m);break}}}finally{re=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?A(e):""}function ae(e){switch(e.tag){case 5:return A(e.type);case 16:return A("Lazy");case 13:return A("Suspense");case 19:return A("SuspenseList");case 0:case 2:case 15:return e=te(e.type,!1),e;case 11:return e=te(e.type.render,!1),e;case 1:return e=te(e.type,!0),e;default:return""}}function se(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ge:return"Fragment";case le:return"Portal";case X:return"Profiler";case Ee:return"StrictMode";case ze:return"Suspense";case Me:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ce:return(e.displayName||"Context")+".Consumer";case de:return(e._context.displayName||"Context")+".Provider";case we:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Le:return r=e.displayName||null,r!==null?r:se(e.type)||"Memo";case Ve:r=e._payload,e=e._init;try{return se(e(r))}catch{}}return null}function ue(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return se(r);case 8:return r===Ee?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function ce(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function be(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function er(e){var r=be(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),t=""+e[r];if(!e.hasOwnProperty(r)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return i.call(this)},set:function(c){t=""+c,s.call(this,c)}}),Object.defineProperty(e,r,{enumerable:n.enumerable}),{getValue:function(){return t},setValue:function(c){t=""+c},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function Ft(e){e._valueTracker||(e._valueTracker=er(e))}function ho(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var n=r.getValue(),t="";return e&&(t=be(e)?e.checked?"true":"false":e.value),e=t,e!==n?(r.setValue(e),!0):!1}function _t(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ta(e,r){var n=r.checked;return O({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function fo(e,r){var n=r.defaultValue==null?"":r.defaultValue,t=r.checked!=null?r.checked:r.defaultChecked;n=ce(r.value!=null?r.value:n),e._wrapperState={initialChecked:t,initialValue:n,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function vo(e,r){r=r.checked,r!=null&&_(e,"checked",r,!1)}function ia(e,r){vo(e,r);var n=ce(r.value),t=r.type;if(n!=null)t==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(t==="submit"||t==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?aa(e,r.type,n):r.hasOwnProperty("defaultValue")&&aa(e,r.type,ce(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function bo(e,r,n){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var t=r.type;if(!(t!=="submit"&&t!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,n||r===e.value||(e.value=r),e.defaultValue=r}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function aa(e,r,n){(r!=="number"||_t(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Wn=Array.isArray;function vn(e,r,n,t){if(e=e.options,r){r={};for(var i=0;i<n.length;i++)r["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=r.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&t&&(e[n].defaultSelected=!0)}else{for(n=""+ce(n),r=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,t&&(e[i].defaultSelected=!0);return}r!==null||e[i].disabled||(r=e[i])}r!==null&&(r.selected=!0)}}function sa(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(d(91));return O({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function yo(e,r){var n=r.value;if(n==null){if(n=r.children,r=r.defaultValue,n!=null){if(r!=null)throw Error(d(92));if(Wn(n)){if(1<n.length)throw Error(d(93));n=n[0]}r=n}r==null&&(r=""),n=r}e._wrapperState={initialValue:ce(n)}}function xo(e,r){var n=ce(r.value),t=ce(r.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),r.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),t!=null&&(e.defaultValue=""+t)}function wo(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function ko(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function oa(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?ko(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ht,So=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,n,t,i){MSApp.execUnsafeLocalFunction(function(){return e(r,n,t,i)})}:e})(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(Ht=Ht||document.createElement("div"),Ht.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Ht.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function qn(e,r){if(r){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=r;return}}e.textContent=r}var Yn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qc=["Webkit","ms","Moz","O"];Object.keys(Yn).forEach(function(e){qc.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),Yn[r]=Yn[e]})});function Eo(e,r,n){return r==null||typeof r=="boolean"||r===""?"":n||typeof r!="number"||r===0||Yn.hasOwnProperty(e)&&Yn[e]?(""+r).trim():r+"px"}function jo(e,r){e=e.style;for(var n in r)if(r.hasOwnProperty(n)){var t=n.indexOf("--")===0,i=Eo(n,r[n],t);n==="float"&&(n="cssFloat"),t?e.setProperty(n,i):e[n]=i}}var Yc=O({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function la(e,r){if(r){if(Yc[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(d(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(d(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(d(61))}if(r.style!=null&&typeof r.style!="object")throw Error(d(62))}}function da(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ca=null;function pa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ua=null,bn=null,yn=null;function Co(e){if(e=ft(e)){if(typeof ua!="function")throw Error(d(280));var r=e.stateNode;r&&(r=di(r),ua(e.stateNode,e.type,r))}}function zo(e){bn?yn?yn.push(e):yn=[e]:bn=e}function Lo(){if(bn){var e=bn,r=yn;if(yn=bn=null,Co(e),r)for(e=0;e<r.length;e++)Co(r[e])}}function Ao(e,r){return e(r)}function No(){}var ma=!1;function Ro(e,r,n){if(ma)return e(r,n);ma=!0;try{return Ao(e,r,n)}finally{ma=!1,(bn!==null||yn!==null)&&(No(),Lo())}}function Kn(e,r){var n=e.stateNode;if(n===null)return null;var t=di(n);if(t===null)return null;n=t[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(e=e.type,t=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!t;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(d(231,r,typeof n));return n}var ga=!1;if(b)try{var Qn={};Object.defineProperty(Qn,"passive",{get:function(){ga=!0}}),window.addEventListener("test",Qn,Qn),window.removeEventListener("test",Qn,Qn)}catch{ga=!1}function Kc(e,r,n,t,i,s,c,m,h){var j=Array.prototype.slice.call(arguments,3);try{r.apply(n,j)}catch(N){this.onError(N)}}var Xn=!1,Vt=null,Ot=!1,ha=null,Qc={onError:function(e){Xn=!0,Vt=e}};function Xc(e,r,n,t,i,s,c,m,h){Xn=!1,Vt=null,Kc.apply(Qc,arguments)}function Jc(e,r,n,t,i,s,c,m,h){if(Xc.apply(this,arguments),Xn){if(Xn){var j=Vt;Xn=!1,Vt=null}else throw Error(d(198));Ot||(Ot=!0,ha=j)}}function tn(e){var r=e,n=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,(r.flags&4098)!==0&&(n=r.return),e=r.return;while(e)}return r.tag===3?n:null}function Po(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function Mo(e){if(tn(e)!==e)throw Error(d(188))}function Zc(e){var r=e.alternate;if(!r){if(r=tn(e),r===null)throw Error(d(188));return r!==e?null:e}for(var n=e,t=r;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(t=i.return,t!==null){n=t;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Mo(i),e;if(s===t)return Mo(i),r;s=s.sibling}throw Error(d(188))}if(n.return!==t.return)n=i,t=s;else{for(var c=!1,m=i.child;m;){if(m===n){c=!0,n=i,t=s;break}if(m===t){c=!0,t=i,n=s;break}m=m.sibling}if(!c){for(m=s.child;m;){if(m===n){c=!0,n=s,t=i;break}if(m===t){c=!0,t=s,n=i;break}m=m.sibling}if(!c)throw Error(d(189))}}if(n.alternate!==t)throw Error(d(190))}if(n.tag!==3)throw Error(d(188));return n.stateNode.current===n?e:r}function To(e){return e=Zc(e),e!==null?Io(e):null}function Io(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=Io(e);if(r!==null)return r;e=e.sibling}return null}var Do=l.unstable_scheduleCallback,Bo=l.unstable_cancelCallback,ep=l.unstable_shouldYield,rp=l.unstable_requestPaint,Ae=l.unstable_now,np=l.unstable_getCurrentPriorityLevel,fa=l.unstable_ImmediatePriority,Fo=l.unstable_UserBlockingPriority,Ut=l.unstable_NormalPriority,tp=l.unstable_LowPriority,_o=l.unstable_IdlePriority,$t=null,xr=null;function ip(e){if(xr&&typeof xr.onCommitFiberRoot=="function")try{xr.onCommitFiberRoot($t,e,void 0,(e.current.flags&128)===128)}catch{}}var ur=Math.clz32?Math.clz32:op,ap=Math.log,sp=Math.LN2;function op(e){return e>>>=0,e===0?32:31-(ap(e)/sp|0)|0}var Gt=64,Wt=4194304;function Jn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function qt(e,r){var n=e.pendingLanes;if(n===0)return 0;var t=0,i=e.suspendedLanes,s=e.pingedLanes,c=n&268435455;if(c!==0){var m=c&~i;m!==0?t=Jn(m):(s&=c,s!==0&&(t=Jn(s)))}else c=n&~i,c!==0?t=Jn(c):s!==0&&(t=Jn(s));if(t===0)return 0;if(r!==0&&r!==t&&(r&i)===0&&(i=t&-t,s=r&-r,i>=s||i===16&&(s&4194240)!==0))return r;if((t&4)!==0&&(t|=n&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=t;0<r;)n=31-ur(r),i=1<<n,t|=e[n],r&=~i;return t}function lp(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dp(e,r){for(var n=e.suspendedLanes,t=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var c=31-ur(s),m=1<<c,h=i[c];h===-1?((m&n)===0||(m&t)!==0)&&(i[c]=lp(m,r)):h<=r&&(e.expiredLanes|=m),s&=~m}}function va(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ho(){var e=Gt;return Gt<<=1,(Gt&4194240)===0&&(Gt=64),e}function ba(e){for(var r=[],n=0;31>n;n++)r.push(e);return r}function Zn(e,r,n){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-ur(r),e[r]=n}function cp(e,r){var n=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var t=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ur(n),s=1<<i;r[i]=0,t[i]=-1,e[i]=-1,n&=~s}}function ya(e,r){var n=e.entangledLanes|=r;for(e=e.entanglements;n;){var t=31-ur(n),i=1<<t;i&r|e[t]&r&&(e[t]|=r),n&=~i}}var pe=0;function Vo(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Oo,xa,Uo,$o,Go,wa=!1,Yt=[],Br=null,Fr=null,_r=null,et=new Map,rt=new Map,Hr=[],pp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wo(e,r){switch(e){case"focusin":case"focusout":Br=null;break;case"dragenter":case"dragleave":Fr=null;break;case"mouseover":case"mouseout":_r=null;break;case"pointerover":case"pointerout":et.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":rt.delete(r.pointerId)}}function nt(e,r,n,t,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:r,domEventName:n,eventSystemFlags:t,nativeEvent:s,targetContainers:[i]},r!==null&&(r=ft(r),r!==null&&xa(r)),e):(e.eventSystemFlags|=t,r=e.targetContainers,i!==null&&r.indexOf(i)===-1&&r.push(i),e)}function up(e,r,n,t,i){switch(r){case"focusin":return Br=nt(Br,e,r,n,t,i),!0;case"dragenter":return Fr=nt(Fr,e,r,n,t,i),!0;case"mouseover":return _r=nt(_r,e,r,n,t,i),!0;case"pointerover":var s=i.pointerId;return et.set(s,nt(et.get(s)||null,e,r,n,t,i)),!0;case"gotpointercapture":return s=i.pointerId,rt.set(s,nt(rt.get(s)||null,e,r,n,t,i)),!0}return!1}function qo(e){var r=an(e.target);if(r!==null){var n=tn(r);if(n!==null){if(r=n.tag,r===13){if(r=Po(n),r!==null){e.blockedOn=r,Go(e.priority,function(){Uo(n)});return}}else if(r===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Kt(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var n=Sa(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var t=new n.constructor(n.type,n);ca=t,n.target.dispatchEvent(t),ca=null}else return r=ft(n),r!==null&&xa(r),e.blockedOn=n,!1;r.shift()}return!0}function Yo(e,r,n){Kt(e)&&n.delete(r)}function mp(){wa=!1,Br!==null&&Kt(Br)&&(Br=null),Fr!==null&&Kt(Fr)&&(Fr=null),_r!==null&&Kt(_r)&&(_r=null),et.forEach(Yo),rt.forEach(Yo)}function tt(e,r){e.blockedOn===r&&(e.blockedOn=null,wa||(wa=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,mp)))}function it(e){function r(i){return tt(i,e)}if(0<Yt.length){tt(Yt[0],e);for(var n=1;n<Yt.length;n++){var t=Yt[n];t.blockedOn===e&&(t.blockedOn=null)}}for(Br!==null&&tt(Br,e),Fr!==null&&tt(Fr,e),_r!==null&&tt(_r,e),et.forEach(r),rt.forEach(r),n=0;n<Hr.length;n++)t=Hr[n],t.blockedOn===e&&(t.blockedOn=null);for(;0<Hr.length&&(n=Hr[0],n.blockedOn===null);)qo(n),n.blockedOn===null&&Hr.shift()}var xn=J.ReactCurrentBatchConfig,Qt=!0;function gp(e,r,n,t){var i=pe,s=xn.transition;xn.transition=null;try{pe=1,ka(e,r,n,t)}finally{pe=i,xn.transition=s}}function hp(e,r,n,t){var i=pe,s=xn.transition;xn.transition=null;try{pe=4,ka(e,r,n,t)}finally{pe=i,xn.transition=s}}function ka(e,r,n,t){if(Qt){var i=Sa(e,r,n,t);if(i===null)Ha(e,r,t,Xt,n),Wo(e,t);else if(up(i,e,r,n,t))t.stopPropagation();else if(Wo(e,t),r&4&&-1<pp.indexOf(e)){for(;i!==null;){var s=ft(i);if(s!==null&&Oo(s),s=Sa(e,r,n,t),s===null&&Ha(e,r,t,Xt,n),s===i)break;i=s}i!==null&&t.stopPropagation()}else Ha(e,r,t,null,n)}}var Xt=null;function Sa(e,r,n,t){if(Xt=null,e=pa(t),e=an(e),e!==null)if(r=tn(e),r===null)e=null;else if(n=r.tag,n===13){if(e=Po(r),e!==null)return e;e=null}else if(n===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return Xt=e,null}function Ko(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(np()){case fa:return 1;case Fo:return 4;case Ut:case tp:return 16;case _o:return 536870912;default:return 16}default:return 16}}var Vr=null,Ea=null,Jt=null;function Qo(){if(Jt)return Jt;var e,r=Ea,n=r.length,t,i="value"in Vr?Vr.value:Vr.textContent,s=i.length;for(e=0;e<n&&r[e]===i[e];e++);var c=n-e;for(t=1;t<=c&&r[n-t]===i[s-t];t++);return Jt=i.slice(e,1<t?1-t:void 0)}function Zt(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function ei(){return!0}function Xo(){return!1}function rr(e){function r(n,t,i,s,c){this._reactName=n,this._targetInst=i,this.type=t,this.nativeEvent=s,this.target=c,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(n=e[m],this[m]=n?n(s):s[m]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ei:Xo,this.isPropagationStopped=Xo,this}return O(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ei)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ei)},persist:function(){},isPersistent:ei}),r}var wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ja=rr(wn),at=O({},wn,{view:0,detail:0}),fp=rr(at),Ca,za,st,ri=O({},at,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Aa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==st&&(st&&e.type==="mousemove"?(Ca=e.screenX-st.screenX,za=e.screenY-st.screenY):za=Ca=0,st=e),Ca)},movementY:function(e){return"movementY"in e?e.movementY:za}}),Jo=rr(ri),vp=O({},ri,{dataTransfer:0}),bp=rr(vp),yp=O({},at,{relatedTarget:0}),La=rr(yp),xp=O({},wn,{animationName:0,elapsedTime:0,pseudoElement:0}),wp=rr(xp),kp=O({},wn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Sp=rr(kp),Ep=O({},wn,{data:0}),Zo=rr(Ep),jp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lp(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=zp[e])?!!r[e]:!1}function Aa(){return Lp}var Ap=O({},at,{key:function(e){if(e.key){var r=jp[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=Zt(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Cp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Aa,charCode:function(e){return e.type==="keypress"?Zt(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zt(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Np=rr(Ap),Rp=O({},ri,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),el=rr(Rp),Pp=O({},at,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Aa}),Mp=rr(Pp),Tp=O({},wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ip=rr(Tp),Dp=O({},ri,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bp=rr(Dp),Fp=[9,13,27,32],Na=b&&"CompositionEvent"in window,ot=null;b&&"documentMode"in document&&(ot=document.documentMode);var _p=b&&"TextEvent"in window&&!ot,rl=b&&(!Na||ot&&8<ot&&11>=ot),nl=" ",tl=!1;function il(e,r){switch(e){case"keyup":return Fp.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function al(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kn=!1;function Hp(e,r){switch(e){case"compositionend":return al(r);case"keypress":return r.which!==32?null:(tl=!0,nl);case"textInput":return e=r.data,e===nl&&tl?null:e;default:return null}}function Vp(e,r){if(kn)return e==="compositionend"||!Na&&il(e,r)?(e=Qo(),Jt=Ea=Vr=null,kn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return rl&&r.locale!=="ko"?null:r.data;default:return null}}var Op={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sl(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!Op[e.type]:r==="textarea"}function ol(e,r,n,t){zo(t),r=si(r,"onChange"),0<r.length&&(n=new ja("onChange","change",null,n,t),e.push({event:n,listeners:r}))}var lt=null,dt=null;function Up(e){jl(e,0)}function ni(e){var r=zn(e);if(ho(r))return e}function $p(e,r){if(e==="change")return r}var ll=!1;if(b){var Ra;if(b){var Pa="oninput"in document;if(!Pa){var dl=document.createElement("div");dl.setAttribute("oninput","return;"),Pa=typeof dl.oninput=="function"}Ra=Pa}else Ra=!1;ll=Ra&&(!document.documentMode||9<document.documentMode)}function cl(){lt&&(lt.detachEvent("onpropertychange",pl),dt=lt=null)}function pl(e){if(e.propertyName==="value"&&ni(dt)){var r=[];ol(r,dt,e,pa(e)),Ro(Up,r)}}function Gp(e,r,n){e==="focusin"?(cl(),lt=r,dt=n,lt.attachEvent("onpropertychange",pl)):e==="focusout"&&cl()}function Wp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ni(dt)}function qp(e,r){if(e==="click")return ni(r)}function Yp(e,r){if(e==="input"||e==="change")return ni(r)}function Kp(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var mr=typeof Object.is=="function"?Object.is:Kp;function ct(e,r){if(mr(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var n=Object.keys(e),t=Object.keys(r);if(n.length!==t.length)return!1;for(t=0;t<n.length;t++){var i=n[t];if(!k.call(r,i)||!mr(e[i],r[i]))return!1}return!0}function ul(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ml(e,r){var n=ul(e);e=0;for(var t;n;){if(n.nodeType===3){if(t=e+n.textContent.length,e<=r&&t>=r)return{node:n,offset:r-e};e=t}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ul(n)}}function gl(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?gl(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function hl(){for(var e=window,r=_t();r instanceof e.HTMLIFrameElement;){try{var n=typeof r.contentWindow.location.href=="string"}catch{n=!1}if(n)e=r.contentWindow;else break;r=_t(e.document)}return r}function Ma(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function Qp(e){var r=hl(),n=e.focusedElem,t=e.selectionRange;if(r!==n&&n&&n.ownerDocument&&gl(n.ownerDocument.documentElement,n)){if(t!==null&&Ma(n)){if(r=t.start,e=t.end,e===void 0&&(e=r),"selectionStart"in n)n.selectionStart=r,n.selectionEnd=Math.min(e,n.value.length);else if(e=(r=n.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(t.start,i);t=t.end===void 0?s:Math.min(t.end,i),!e.extend&&s>t&&(i=t,t=s,s=i),i=ml(n,s);var c=ml(n,t);i&&c&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==c.node||e.focusOffset!==c.offset)&&(r=r.createRange(),r.setStart(i.node,i.offset),e.removeAllRanges(),s>t?(e.addRange(r),e.extend(c.node,c.offset)):(r.setEnd(c.node,c.offset),e.addRange(r)))}}for(r=[],e=n;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<r.length;n++)e=r[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Xp=b&&"documentMode"in document&&11>=document.documentMode,Sn=null,Ta=null,pt=null,Ia=!1;function fl(e,r,n){var t=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ia||Sn==null||Sn!==_t(t)||(t=Sn,"selectionStart"in t&&Ma(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),pt&&ct(pt,t)||(pt=t,t=si(Ta,"onSelect"),0<t.length&&(r=new ja("onSelect","select",null,r,n),e.push({event:r,listeners:t}),r.target=Sn)))}function ti(e,r){var n={};return n[e.toLowerCase()]=r.toLowerCase(),n["Webkit"+e]="webkit"+r,n["Moz"+e]="moz"+r,n}var En={animationend:ti("Animation","AnimationEnd"),animationiteration:ti("Animation","AnimationIteration"),animationstart:ti("Animation","AnimationStart"),transitionend:ti("Transition","TransitionEnd")},Da={},vl={};b&&(vl=document.createElement("div").style,"AnimationEvent"in window||(delete En.animationend.animation,delete En.animationiteration.animation,delete En.animationstart.animation),"TransitionEvent"in window||delete En.transitionend.transition);function ii(e){if(Da[e])return Da[e];if(!En[e])return e;var r=En[e],n;for(n in r)if(r.hasOwnProperty(n)&&n in vl)return Da[e]=r[n];return e}var bl=ii("animationend"),yl=ii("animationiteration"),xl=ii("animationstart"),wl=ii("transitionend"),kl=new Map,Sl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Or(e,r){kl.set(e,r),g(r,[e])}for(var Ba=0;Ba<Sl.length;Ba++){var Fa=Sl[Ba],Jp=Fa.toLowerCase(),Zp=Fa[0].toUpperCase()+Fa.slice(1);Or(Jp,"on"+Zp)}Or(bl,"onAnimationEnd"),Or(yl,"onAnimationIteration"),Or(xl,"onAnimationStart"),Or("dblclick","onDoubleClick"),Or("focusin","onFocus"),Or("focusout","onBlur"),Or(wl,"onTransitionEnd"),v("onMouseEnter",["mouseout","mouseover"]),v("onMouseLeave",["mouseout","mouseover"]),v("onPointerEnter",["pointerout","pointerover"]),v("onPointerLeave",["pointerout","pointerover"]),g("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),g("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),g("onBeforeInput",["compositionend","keypress","textInput","paste"]),g("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),g("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),g("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ut="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),eu=new Set("cancel close invalid load scroll toggle".split(" ").concat(ut));function El(e,r,n){var t=e.type||"unknown-event";e.currentTarget=n,Jc(t,r,void 0,e),e.currentTarget=null}function jl(e,r){r=(r&4)!==0;for(var n=0;n<e.length;n++){var t=e[n],i=t.event;t=t.listeners;e:{var s=void 0;if(r)for(var c=t.length-1;0<=c;c--){var m=t[c],h=m.instance,j=m.currentTarget;if(m=m.listener,h!==s&&i.isPropagationStopped())break e;El(i,m,j),s=h}else for(c=0;c<t.length;c++){if(m=t[c],h=m.instance,j=m.currentTarget,m=m.listener,h!==s&&i.isPropagationStopped())break e;El(i,m,j),s=h}}}if(Ot)throw e=ha,Ot=!1,ha=null,e}function he(e,r){var n=r[Wa];n===void 0&&(n=r[Wa]=new Set);var t=e+"__bubble";n.has(t)||(Cl(r,e,2,!1),n.add(t))}function _a(e,r,n){var t=0;r&&(t|=4),Cl(n,e,t,r)}var ai="_reactListening"+Math.random().toString(36).slice(2);function mt(e){if(!e[ai]){e[ai]=!0,p.forEach(function(n){n!=="selectionchange"&&(eu.has(n)||_a(n,!1,e),_a(n,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[ai]||(r[ai]=!0,_a("selectionchange",!1,r))}}function Cl(e,r,n,t){switch(Ko(r)){case 1:var i=gp;break;case 4:i=hp;break;default:i=ka}n=i.bind(null,r,n,e),i=void 0,!ga||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(i=!0),t?i!==void 0?e.addEventListener(r,n,{capture:!0,passive:i}):e.addEventListener(r,n,!0):i!==void 0?e.addEventListener(r,n,{passive:i}):e.addEventListener(r,n,!1)}function Ha(e,r,n,t,i){var s=t;if((r&1)===0&&(r&2)===0&&t!==null)e:for(;;){if(t===null)return;var c=t.tag;if(c===3||c===4){var m=t.stateNode.containerInfo;if(m===i||m.nodeType===8&&m.parentNode===i)break;if(c===4)for(c=t.return;c!==null;){var h=c.tag;if((h===3||h===4)&&(h=c.stateNode.containerInfo,h===i||h.nodeType===8&&h.parentNode===i))return;c=c.return}for(;m!==null;){if(c=an(m),c===null)return;if(h=c.tag,h===5||h===6){t=s=c;continue e}m=m.parentNode}}t=t.return}Ro(function(){var j=s,N=pa(n),R=[];e:{var L=kl.get(e);if(L!==void 0){var H=ja,$=e;switch(e){case"keypress":if(Zt(n)===0)break e;case"keydown":case"keyup":H=Np;break;case"focusin":$="focus",H=La;break;case"focusout":$="blur",H=La;break;case"beforeblur":case"afterblur":H=La;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=Jo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=bp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=Mp;break;case bl:case yl:case xl:H=wp;break;case wl:H=Ip;break;case"scroll":H=fp;break;case"wheel":H=Bp;break;case"copy":case"cut":case"paste":H=Sp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=el}var G=(r&4)!==0,Ne=!G&&e==="scroll",w=G?L!==null?L+"Capture":null:L;G=[];for(var f=j,S;f!==null;){S=f;var T=S.stateNode;if(S.tag===5&&T!==null&&(S=T,w!==null&&(T=Kn(f,w),T!=null&&G.push(gt(f,T,S)))),Ne)break;f=f.return}0<G.length&&(L=new H(L,$,null,n,N),R.push({event:L,listeners:G}))}}if((r&7)===0){e:{if(L=e==="mouseover"||e==="pointerover",H=e==="mouseout"||e==="pointerout",L&&n!==ca&&($=n.relatedTarget||n.fromElement)&&(an($)||$[zr]))break e;if((H||L)&&(L=N.window===N?N:(L=N.ownerDocument)?L.defaultView||L.parentWindow:window,H?($=n.relatedTarget||n.toElement,H=j,$=$?an($):null,$!==null&&(Ne=tn($),$!==Ne||$.tag!==5&&$.tag!==6)&&($=null)):(H=null,$=j),H!==$)){if(G=Jo,T="onMouseLeave",w="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(G=el,T="onPointerLeave",w="onPointerEnter",f="pointer"),Ne=H==null?L:zn(H),S=$==null?L:zn($),L=new G(T,f+"leave",H,n,N),L.target=Ne,L.relatedTarget=S,T=null,an(N)===j&&(G=new G(w,f+"enter",$,n,N),G.target=S,G.relatedTarget=Ne,T=G),Ne=T,H&&$)r:{for(G=H,w=$,f=0,S=G;S;S=jn(S))f++;for(S=0,T=w;T;T=jn(T))S++;for(;0<f-S;)G=jn(G),f--;for(;0<S-f;)w=jn(w),S--;for(;f--;){if(G===w||w!==null&&G===w.alternate)break r;G=jn(G),w=jn(w)}G=null}else G=null;H!==null&&zl(R,L,H,G,!1),$!==null&&Ne!==null&&zl(R,Ne,$,G,!0)}}e:{if(L=j?zn(j):window,H=L.nodeName&&L.nodeName.toLowerCase(),H==="select"||H==="input"&&L.type==="file")var W=$p;else if(sl(L))if(ll)W=Yp;else{W=Wp;var K=Gp}else(H=L.nodeName)&&H.toLowerCase()==="input"&&(L.type==="checkbox"||L.type==="radio")&&(W=qp);if(W&&(W=W(e,j))){ol(R,W,n,N);break e}K&&K(e,L,j),e==="focusout"&&(K=L._wrapperState)&&K.controlled&&L.type==="number"&&aa(L,"number",L.value)}switch(K=j?zn(j):window,e){case"focusin":(sl(K)||K.contentEditable==="true")&&(Sn=K,Ta=j,pt=null);break;case"focusout":pt=Ta=Sn=null;break;case"mousedown":Ia=!0;break;case"contextmenu":case"mouseup":case"dragend":Ia=!1,fl(R,n,N);break;case"selectionchange":if(Xp)break;case"keydown":case"keyup":fl(R,n,N)}var Q;if(Na)e:{switch(e){case"compositionstart":var Z="onCompositionStart";break e;case"compositionend":Z="onCompositionEnd";break e;case"compositionupdate":Z="onCompositionUpdate";break e}Z=void 0}else kn?il(e,n)&&(Z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Z="onCompositionStart");Z&&(rl&&n.locale!=="ko"&&(kn||Z!=="onCompositionStart"?Z==="onCompositionEnd"&&kn&&(Q=Qo()):(Vr=N,Ea="value"in Vr?Vr.value:Vr.textContent,kn=!0)),K=si(j,Z),0<K.length&&(Z=new Zo(Z,e,null,n,N),R.push({event:Z,listeners:K}),Q?Z.data=Q:(Q=al(n),Q!==null&&(Z.data=Q)))),(Q=_p?Hp(e,n):Vp(e,n))&&(j=si(j,"onBeforeInput"),0<j.length&&(N=new Zo("onBeforeInput","beforeinput",null,n,N),R.push({event:N,listeners:j}),N.data=Q))}jl(R,r)})}function gt(e,r,n){return{instance:e,listener:r,currentTarget:n}}function si(e,r){for(var n=r+"Capture",t=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Kn(e,n),s!=null&&t.unshift(gt(e,s,i)),s=Kn(e,r),s!=null&&t.push(gt(e,s,i))),e=e.return}return t}function jn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function zl(e,r,n,t,i){for(var s=r._reactName,c=[];n!==null&&n!==t;){var m=n,h=m.alternate,j=m.stateNode;if(h!==null&&h===t)break;m.tag===5&&j!==null&&(m=j,i?(h=Kn(n,s),h!=null&&c.unshift(gt(n,h,m))):i||(h=Kn(n,s),h!=null&&c.push(gt(n,h,m)))),n=n.return}c.length!==0&&e.push({event:r,listeners:c})}var ru=/\r\n?/g,nu=/\u0000|\uFFFD/g;function Ll(e){return(typeof e=="string"?e:""+e).replace(ru,`
`).replace(nu,"")}function oi(e,r,n){if(r=Ll(r),Ll(e)!==r&&n)throw Error(d(425))}function li(){}var Va=null,Oa=null;function Ua(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var $a=typeof setTimeout=="function"?setTimeout:void 0,tu=typeof clearTimeout=="function"?clearTimeout:void 0,Al=typeof Promise=="function"?Promise:void 0,iu=typeof queueMicrotask=="function"?queueMicrotask:typeof Al<"u"?function(e){return Al.resolve(null).then(e).catch(au)}:$a;function au(e){setTimeout(function(){throw e})}function Ga(e,r){var n=r,t=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(t===0){e.removeChild(i),it(r);return}t--}else n!=="$"&&n!=="$?"&&n!=="$!"||t++;n=i}while(n);it(r)}function Ur(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function Nl(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(r===0)return e;r--}else n==="/$"&&r++}e=e.previousSibling}return null}var Cn=Math.random().toString(36).slice(2),wr="__reactFiber$"+Cn,ht="__reactProps$"+Cn,zr="__reactContainer$"+Cn,Wa="__reactEvents$"+Cn,su="__reactListeners$"+Cn,ou="__reactHandles$"+Cn;function an(e){var r=e[wr];if(r)return r;for(var n=e.parentNode;n;){if(r=n[zr]||n[wr]){if(n=r.alternate,r.child!==null||n!==null&&n.child!==null)for(e=Nl(e);e!==null;){if(n=e[wr])return n;e=Nl(e)}return r}e=n,n=e.parentNode}return null}function ft(e){return e=e[wr]||e[zr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function zn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(d(33))}function di(e){return e[ht]||null}var qa=[],Ln=-1;function $r(e){return{current:e}}function fe(e){0>Ln||(e.current=qa[Ln],qa[Ln]=null,Ln--)}function me(e,r){Ln++,qa[Ln]=e.current,e.current=r}var Gr={},Oe=$r(Gr),Ye=$r(!1),sn=Gr;function An(e,r){var n=e.type.contextTypes;if(!n)return Gr;var t=e.stateNode;if(t&&t.__reactInternalMemoizedUnmaskedChildContext===r)return t.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=r[s];return t&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ke(e){return e=e.childContextTypes,e!=null}function ci(){fe(Ye),fe(Oe)}function Rl(e,r,n){if(Oe.current!==Gr)throw Error(d(168));me(Oe,r),me(Ye,n)}function Pl(e,r,n){var t=e.stateNode;if(r=r.childContextTypes,typeof t.getChildContext!="function")return n;t=t.getChildContext();for(var i in t)if(!(i in r))throw Error(d(108,ue(e)||"Unknown",i));return O({},n,t)}function pi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Gr,sn=Oe.current,me(Oe,e),me(Ye,Ye.current),!0}function Ml(e,r,n){var t=e.stateNode;if(!t)throw Error(d(169));n?(e=Pl(e,r,sn),t.__reactInternalMemoizedMergedChildContext=e,fe(Ye),fe(Oe),me(Oe,e)):fe(Ye),me(Ye,n)}var Lr=null,ui=!1,Ya=!1;function Tl(e){Lr===null?Lr=[e]:Lr.push(e)}function lu(e){ui=!0,Tl(e)}function Wr(){if(!Ya&&Lr!==null){Ya=!0;var e=0,r=pe;try{var n=Lr;for(pe=1;e<n.length;e++){var t=n[e];do t=t(!0);while(t!==null)}Lr=null,ui=!1}catch(i){throw Lr!==null&&(Lr=Lr.slice(e+1)),Do(fa,Wr),i}finally{pe=r,Ya=!1}}return null}var Nn=[],Rn=0,mi=null,gi=0,sr=[],or=0,on=null,Ar=1,Nr="";function ln(e,r){Nn[Rn++]=gi,Nn[Rn++]=mi,mi=e,gi=r}function Il(e,r,n){sr[or++]=Ar,sr[or++]=Nr,sr[or++]=on,on=e;var t=Ar;e=Nr;var i=32-ur(t)-1;t&=~(1<<i),n+=1;var s=32-ur(r)+i;if(30<s){var c=i-i%5;s=(t&(1<<c)-1).toString(32),t>>=c,i-=c,Ar=1<<32-ur(r)+i|n<<i|t,Nr=s+e}else Ar=1<<s|n<<i|t,Nr=e}function Ka(e){e.return!==null&&(ln(e,1),Il(e,1,0))}function Qa(e){for(;e===mi;)mi=Nn[--Rn],Nn[Rn]=null,gi=Nn[--Rn],Nn[Rn]=null;for(;e===on;)on=sr[--or],sr[or]=null,Nr=sr[--or],sr[or]=null,Ar=sr[--or],sr[or]=null}var nr=null,tr=null,ye=!1,gr=null;function Dl(e,r){var n=pr(5,null,null,0);n.elementType="DELETED",n.stateNode=r,n.return=e,r=e.deletions,r===null?(e.deletions=[n],e.flags|=16):r.push(n)}function Bl(e,r){switch(e.tag){case 5:var n=e.type;return r=r.nodeType!==1||n.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,nr=e,tr=Ur(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,nr=e,tr=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(n=on!==null?{id:Ar,overflow:Nr}:null,e.memoizedState={dehydrated:r,treeContext:n,retryLane:1073741824},n=pr(18,null,null,0),n.stateNode=r,n.return=e,e.child=n,nr=e,tr=null,!0):!1;default:return!1}}function Xa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ja(e){if(ye){var r=tr;if(r){var n=r;if(!Bl(e,r)){if(Xa(e))throw Error(d(418));r=Ur(n.nextSibling);var t=nr;r&&Bl(e,r)?Dl(t,n):(e.flags=e.flags&-4097|2,ye=!1,nr=e)}}else{if(Xa(e))throw Error(d(418));e.flags=e.flags&-4097|2,ye=!1,nr=e}}}function Fl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;nr=e}function hi(e){if(e!==nr)return!1;if(!ye)return Fl(e),ye=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!Ua(e.type,e.memoizedProps)),r&&(r=tr)){if(Xa(e))throw _l(),Error(d(418));for(;r;)Dl(e,r),r=Ur(r.nextSibling)}if(Fl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(r===0){tr=Ur(e.nextSibling);break e}r--}else n!=="$"&&n!=="$!"&&n!=="$?"||r++}e=e.nextSibling}tr=null}}else tr=nr?Ur(e.stateNode.nextSibling):null;return!0}function _l(){for(var e=tr;e;)e=Ur(e.nextSibling)}function Pn(){tr=nr=null,ye=!1}function Za(e){gr===null?gr=[e]:gr.push(e)}var du=J.ReactCurrentBatchConfig;function vt(e,r,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(d(309));var t=n.stateNode}if(!t)throw Error(d(147,e));var i=t,s=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===s?r.ref:(r=function(c){var m=i.refs;c===null?delete m[s]:m[s]=c},r._stringRef=s,r)}if(typeof e!="string")throw Error(d(284));if(!n._owner)throw Error(d(290,e))}return e}function fi(e,r){throw e=Object.prototype.toString.call(r),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function Hl(e){var r=e._init;return r(e._payload)}function Vl(e){function r(w,f){if(e){var S=w.deletions;S===null?(w.deletions=[f],w.flags|=16):S.push(f)}}function n(w,f){if(!e)return null;for(;f!==null;)r(w,f),f=f.sibling;return null}function t(w,f){for(w=new Map;f!==null;)f.key!==null?w.set(f.key,f):w.set(f.index,f),f=f.sibling;return w}function i(w,f){return w=en(w,f),w.index=0,w.sibling=null,w}function s(w,f,S){return w.index=S,e?(S=w.alternate,S!==null?(S=S.index,S<f?(w.flags|=2,f):S):(w.flags|=2,f)):(w.flags|=1048576,f)}function c(w){return e&&w.alternate===null&&(w.flags|=2),w}function m(w,f,S,T){return f===null||f.tag!==6?(f=$s(S,w.mode,T),f.return=w,f):(f=i(f,S),f.return=w,f)}function h(w,f,S,T){var W=S.type;return W===ge?N(w,f,S.props.children,T,S.key):f!==null&&(f.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===Ve&&Hl(W)===f.type)?(T=i(f,S.props),T.ref=vt(w,f,S),T.return=w,T):(T=Hi(S.type,S.key,S.props,null,w.mode,T),T.ref=vt(w,f,S),T.return=w,T)}function j(w,f,S,T){return f===null||f.tag!==4||f.stateNode.containerInfo!==S.containerInfo||f.stateNode.implementation!==S.implementation?(f=Gs(S,w.mode,T),f.return=w,f):(f=i(f,S.children||[]),f.return=w,f)}function N(w,f,S,T,W){return f===null||f.tag!==7?(f=fn(S,w.mode,T,W),f.return=w,f):(f=i(f,S),f.return=w,f)}function R(w,f,S){if(typeof f=="string"&&f!==""||typeof f=="number")return f=$s(""+f,w.mode,S),f.return=w,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ee:return S=Hi(f.type,f.key,f.props,null,w.mode,S),S.ref=vt(w,null,f),S.return=w,S;case le:return f=Gs(f,w.mode,S),f.return=w,f;case Ve:var T=f._init;return R(w,T(f._payload),S)}if(Wn(f)||Y(f))return f=fn(f,w.mode,S,null),f.return=w,f;fi(w,f)}return null}function L(w,f,S,T){var W=f!==null?f.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return W!==null?null:m(w,f,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ee:return S.key===W?h(w,f,S,T):null;case le:return S.key===W?j(w,f,S,T):null;case Ve:return W=S._init,L(w,f,W(S._payload),T)}if(Wn(S)||Y(S))return W!==null?null:N(w,f,S,T,null);fi(w,S)}return null}function H(w,f,S,T,W){if(typeof T=="string"&&T!==""||typeof T=="number")return w=w.get(S)||null,m(f,w,""+T,W);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case ee:return w=w.get(T.key===null?S:T.key)||null,h(f,w,T,W);case le:return w=w.get(T.key===null?S:T.key)||null,j(f,w,T,W);case Ve:var K=T._init;return H(w,f,S,K(T._payload),W)}if(Wn(T)||Y(T))return w=w.get(S)||null,N(f,w,T,W,null);fi(f,T)}return null}function $(w,f,S,T){for(var W=null,K=null,Q=f,Z=f=0,Fe=null;Q!==null&&Z<S.length;Z++){Q.index>Z?(Fe=Q,Q=null):Fe=Q.sibling;var oe=L(w,Q,S[Z],T);if(oe===null){Q===null&&(Q=Fe);break}e&&Q&&oe.alternate===null&&r(w,Q),f=s(oe,f,Z),K===null?W=oe:K.sibling=oe,K=oe,Q=Fe}if(Z===S.length)return n(w,Q),ye&&ln(w,Z),W;if(Q===null){for(;Z<S.length;Z++)Q=R(w,S[Z],T),Q!==null&&(f=s(Q,f,Z),K===null?W=Q:K.sibling=Q,K=Q);return ye&&ln(w,Z),W}for(Q=t(w,Q);Z<S.length;Z++)Fe=H(Q,w,Z,S[Z],T),Fe!==null&&(e&&Fe.alternate!==null&&Q.delete(Fe.key===null?Z:Fe.key),f=s(Fe,f,Z),K===null?W=Fe:K.sibling=Fe,K=Fe);return e&&Q.forEach(function(rn){return r(w,rn)}),ye&&ln(w,Z),W}function G(w,f,S,T){var W=Y(S);if(typeof W!="function")throw Error(d(150));if(S=W.call(S),S==null)throw Error(d(151));for(var K=W=null,Q=f,Z=f=0,Fe=null,oe=S.next();Q!==null&&!oe.done;Z++,oe=S.next()){Q.index>Z?(Fe=Q,Q=null):Fe=Q.sibling;var rn=L(w,Q,oe.value,T);if(rn===null){Q===null&&(Q=Fe);break}e&&Q&&rn.alternate===null&&r(w,Q),f=s(rn,f,Z),K===null?W=rn:K.sibling=rn,K=rn,Q=Fe}if(oe.done)return n(w,Q),ye&&ln(w,Z),W;if(Q===null){for(;!oe.done;Z++,oe=S.next())oe=R(w,oe.value,T),oe!==null&&(f=s(oe,f,Z),K===null?W=oe:K.sibling=oe,K=oe);return ye&&ln(w,Z),W}for(Q=t(w,Q);!oe.done;Z++,oe=S.next())oe=H(Q,w,Z,oe.value,T),oe!==null&&(e&&oe.alternate!==null&&Q.delete(oe.key===null?Z:oe.key),f=s(oe,f,Z),K===null?W=oe:K.sibling=oe,K=oe);return e&&Q.forEach(function(Ou){return r(w,Ou)}),ye&&ln(w,Z),W}function Ne(w,f,S,T){if(typeof S=="object"&&S!==null&&S.type===ge&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case ee:e:{for(var W=S.key,K=f;K!==null;){if(K.key===W){if(W=S.type,W===ge){if(K.tag===7){n(w,K.sibling),f=i(K,S.props.children),f.return=w,w=f;break e}}else if(K.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===Ve&&Hl(W)===K.type){n(w,K.sibling),f=i(K,S.props),f.ref=vt(w,K,S),f.return=w,w=f;break e}n(w,K);break}else r(w,K);K=K.sibling}S.type===ge?(f=fn(S.props.children,w.mode,T,S.key),f.return=w,w=f):(T=Hi(S.type,S.key,S.props,null,w.mode,T),T.ref=vt(w,f,S),T.return=w,w=T)}return c(w);case le:e:{for(K=S.key;f!==null;){if(f.key===K)if(f.tag===4&&f.stateNode.containerInfo===S.containerInfo&&f.stateNode.implementation===S.implementation){n(w,f.sibling),f=i(f,S.children||[]),f.return=w,w=f;break e}else{n(w,f);break}else r(w,f);f=f.sibling}f=Gs(S,w.mode,T),f.return=w,w=f}return c(w);case Ve:return K=S._init,Ne(w,f,K(S._payload),T)}if(Wn(S))return $(w,f,S,T);if(Y(S))return G(w,f,S,T);fi(w,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,f!==null&&f.tag===6?(n(w,f.sibling),f=i(f,S),f.return=w,w=f):(n(w,f),f=$s(S,w.mode,T),f.return=w,w=f),c(w)):n(w,f)}return Ne}var Mn=Vl(!0),Ol=Vl(!1),vi=$r(null),bi=null,Tn=null,es=null;function rs(){es=Tn=bi=null}function ns(e){var r=vi.current;fe(vi),e._currentValue=r}function ts(e,r,n){for(;e!==null;){var t=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,t!==null&&(t.childLanes|=r)):t!==null&&(t.childLanes&r)!==r&&(t.childLanes|=r),e===n)break;e=e.return}}function In(e,r){bi=e,es=Tn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&r)!==0&&(Qe=!0),e.firstContext=null)}function lr(e){var r=e._currentValue;if(es!==e)if(e={context:e,memoizedValue:r,next:null},Tn===null){if(bi===null)throw Error(d(308));Tn=e,bi.dependencies={lanes:0,firstContext:e}}else Tn=Tn.next=e;return r}var dn=null;function is(e){dn===null?dn=[e]:dn.push(e)}function Ul(e,r,n,t){var i=r.interleaved;return i===null?(n.next=n,is(r)):(n.next=i.next,i.next=n),r.interleaved=n,Rr(e,t)}function Rr(e,r){e.lanes|=r;var n=e.alternate;for(n!==null&&(n.lanes|=r),n=e,e=e.return;e!==null;)e.childLanes|=r,n=e.alternate,n!==null&&(n.childLanes|=r),n=e,e=e.return;return n.tag===3?n.stateNode:null}var qr=!1;function as(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $l(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Pr(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function Yr(e,r,n){var t=e.updateQueue;if(t===null)return null;if(t=t.shared,(ie&2)!==0){var i=t.pending;return i===null?r.next=r:(r.next=i.next,i.next=r),t.pending=r,Rr(e,n)}return i=t.interleaved,i===null?(r.next=r,is(t)):(r.next=i.next,i.next=r),t.interleaved=r,Rr(e,n)}function yi(e,r,n){if(r=r.updateQueue,r!==null&&(r=r.shared,(n&4194240)!==0)){var t=r.lanes;t&=e.pendingLanes,n|=t,r.lanes=n,ya(e,n)}}function Gl(e,r){var n=e.updateQueue,t=e.alternate;if(t!==null&&(t=t.updateQueue,n===t)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var c={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=c:s=s.next=c,n=n.next}while(n!==null);s===null?i=s=r:s=s.next=r}else i=s=r;n={baseState:t.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:t.shared,effects:t.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=r:e.next=r,n.lastBaseUpdate=r}function xi(e,r,n,t){var i=e.updateQueue;qr=!1;var s=i.firstBaseUpdate,c=i.lastBaseUpdate,m=i.shared.pending;if(m!==null){i.shared.pending=null;var h=m,j=h.next;h.next=null,c===null?s=j:c.next=j,c=h;var N=e.alternate;N!==null&&(N=N.updateQueue,m=N.lastBaseUpdate,m!==c&&(m===null?N.firstBaseUpdate=j:m.next=j,N.lastBaseUpdate=h))}if(s!==null){var R=i.baseState;c=0,N=j=h=null,m=s;do{var L=m.lane,H=m.eventTime;if((t&L)===L){N!==null&&(N=N.next={eventTime:H,lane:0,tag:m.tag,payload:m.payload,callback:m.callback,next:null});e:{var $=e,G=m;switch(L=r,H=n,G.tag){case 1:if($=G.payload,typeof $=="function"){R=$.call(H,R,L);break e}R=$;break e;case 3:$.flags=$.flags&-65537|128;case 0:if($=G.payload,L=typeof $=="function"?$.call(H,R,L):$,L==null)break e;R=O({},R,L);break e;case 2:qr=!0}}m.callback!==null&&m.lane!==0&&(e.flags|=64,L=i.effects,L===null?i.effects=[m]:L.push(m))}else H={eventTime:H,lane:L,tag:m.tag,payload:m.payload,callback:m.callback,next:null},N===null?(j=N=H,h=R):N=N.next=H,c|=L;if(m=m.next,m===null){if(m=i.shared.pending,m===null)break;L=m,m=L.next,L.next=null,i.lastBaseUpdate=L,i.shared.pending=null}}while(!0);if(N===null&&(h=R),i.baseState=h,i.firstBaseUpdate=j,i.lastBaseUpdate=N,r=i.shared.interleaved,r!==null){i=r;do c|=i.lane,i=i.next;while(i!==r)}else s===null&&(i.shared.lanes=0);un|=c,e.lanes=c,e.memoizedState=R}}function Wl(e,r,n){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var t=e[r],i=t.callback;if(i!==null){if(t.callback=null,t=n,typeof i!="function")throw Error(d(191,i));i.call(t)}}}var bt={},kr=$r(bt),yt=$r(bt),xt=$r(bt);function cn(e){if(e===bt)throw Error(d(174));return e}function ss(e,r){switch(me(xt,r),me(yt,e),me(kr,bt),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:oa(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=oa(r,e)}fe(kr),me(kr,r)}function Dn(){fe(kr),fe(yt),fe(xt)}function ql(e){cn(xt.current);var r=cn(kr.current),n=oa(r,e.type);r!==n&&(me(yt,e),me(kr,n))}function os(e){yt.current===e&&(fe(kr),fe(yt))}var ke=$r(0);function wi(e){for(var r=e;r!==null;){if(r.tag===13){var n=r.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var ls=[];function ds(){for(var e=0;e<ls.length;e++)ls[e]._workInProgressVersionPrimary=null;ls.length=0}var ki=J.ReactCurrentDispatcher,cs=J.ReactCurrentBatchConfig,pn=0,Se=null,Te=null,De=null,Si=!1,wt=!1,kt=0,cu=0;function Ue(){throw Error(d(321))}function ps(e,r){if(r===null)return!1;for(var n=0;n<r.length&&n<e.length;n++)if(!mr(e[n],r[n]))return!1;return!0}function us(e,r,n,t,i,s){if(pn=s,Se=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,ki.current=e===null||e.memoizedState===null?gu:hu,e=n(t,i),wt){s=0;do{if(wt=!1,kt=0,25<=s)throw Error(d(301));s+=1,De=Te=null,r.updateQueue=null,ki.current=fu,e=n(t,i)}while(wt)}if(ki.current=Ci,r=Te!==null&&Te.next!==null,pn=0,De=Te=Se=null,Si=!1,r)throw Error(d(300));return e}function ms(){var e=kt!==0;return kt=0,e}function Sr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return De===null?Se.memoizedState=De=e:De=De.next=e,De}function dr(){if(Te===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=Te.next;var r=De===null?Se.memoizedState:De.next;if(r!==null)De=r,Te=e;else{if(e===null)throw Error(d(310));Te=e,e={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},De===null?Se.memoizedState=De=e:De=De.next=e}return De}function St(e,r){return typeof r=="function"?r(e):r}function gs(e){var r=dr(),n=r.queue;if(n===null)throw Error(d(311));n.lastRenderedReducer=e;var t=Te,i=t.baseQueue,s=n.pending;if(s!==null){if(i!==null){var c=i.next;i.next=s.next,s.next=c}t.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,t=t.baseState;var m=c=null,h=null,j=s;do{var N=j.lane;if((pn&N)===N)h!==null&&(h=h.next={lane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),t=j.hasEagerState?j.eagerState:e(t,j.action);else{var R={lane:N,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null};h===null?(m=h=R,c=t):h=h.next=R,Se.lanes|=N,un|=N}j=j.next}while(j!==null&&j!==s);h===null?c=t:h.next=m,mr(t,r.memoizedState)||(Qe=!0),r.memoizedState=t,r.baseState=c,r.baseQueue=h,n.lastRenderedState=t}if(e=n.interleaved,e!==null){i=e;do s=i.lane,Se.lanes|=s,un|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[r.memoizedState,n.dispatch]}function hs(e){var r=dr(),n=r.queue;if(n===null)throw Error(d(311));n.lastRenderedReducer=e;var t=n.dispatch,i=n.pending,s=r.memoizedState;if(i!==null){n.pending=null;var c=i=i.next;do s=e(s,c.action),c=c.next;while(c!==i);mr(s,r.memoizedState)||(Qe=!0),r.memoizedState=s,r.baseQueue===null&&(r.baseState=s),n.lastRenderedState=s}return[s,t]}function Yl(){}function Kl(e,r){var n=Se,t=dr(),i=r(),s=!mr(t.memoizedState,i);if(s&&(t.memoizedState=i,Qe=!0),t=t.queue,fs(Jl.bind(null,n,t,e),[e]),t.getSnapshot!==r||s||De!==null&&De.memoizedState.tag&1){if(n.flags|=2048,Et(9,Xl.bind(null,n,t,i,r),void 0,null),Be===null)throw Error(d(349));(pn&30)!==0||Ql(n,r,i)}return i}function Ql(e,r,n){e.flags|=16384,e={getSnapshot:r,value:n},r=Se.updateQueue,r===null?(r={lastEffect:null,stores:null},Se.updateQueue=r,r.stores=[e]):(n=r.stores,n===null?r.stores=[e]:n.push(e))}function Xl(e,r,n,t){r.value=n,r.getSnapshot=t,Zl(r)&&ed(e)}function Jl(e,r,n){return n(function(){Zl(r)&&ed(e)})}function Zl(e){var r=e.getSnapshot;e=e.value;try{var n=r();return!mr(e,n)}catch{return!0}}function ed(e){var r=Rr(e,1);r!==null&&br(r,e,1,-1)}function rd(e){var r=Sr();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:St,lastRenderedState:e},r.queue=e,e=e.dispatch=mu.bind(null,Se,e),[r.memoizedState,e]}function Et(e,r,n,t){return e={tag:e,create:r,destroy:n,deps:t,next:null},r=Se.updateQueue,r===null?(r={lastEffect:null,stores:null},Se.updateQueue=r,r.lastEffect=e.next=e):(n=r.lastEffect,n===null?r.lastEffect=e.next=e:(t=n.next,n.next=e,e.next=t,r.lastEffect=e)),e}function nd(){return dr().memoizedState}function Ei(e,r,n,t){var i=Sr();Se.flags|=e,i.memoizedState=Et(1|r,n,void 0,t===void 0?null:t)}function ji(e,r,n,t){var i=dr();t=t===void 0?null:t;var s=void 0;if(Te!==null){var c=Te.memoizedState;if(s=c.destroy,t!==null&&ps(t,c.deps)){i.memoizedState=Et(r,n,s,t);return}}Se.flags|=e,i.memoizedState=Et(1|r,n,s,t)}function td(e,r){return Ei(8390656,8,e,r)}function fs(e,r){return ji(2048,8,e,r)}function id(e,r){return ji(4,2,e,r)}function ad(e,r){return ji(4,4,e,r)}function sd(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function od(e,r,n){return n=n!=null?n.concat([e]):null,ji(4,4,sd.bind(null,r,e),n)}function vs(){}function ld(e,r){var n=dr();r=r===void 0?null:r;var t=n.memoizedState;return t!==null&&r!==null&&ps(r,t[1])?t[0]:(n.memoizedState=[e,r],e)}function dd(e,r){var n=dr();r=r===void 0?null:r;var t=n.memoizedState;return t!==null&&r!==null&&ps(r,t[1])?t[0]:(e=e(),n.memoizedState=[e,r],e)}function cd(e,r,n){return(pn&21)===0?(e.baseState&&(e.baseState=!1,Qe=!0),e.memoizedState=n):(mr(n,r)||(n=Ho(),Se.lanes|=n,un|=n,e.baseState=!0),r)}function pu(e,r){var n=pe;pe=n!==0&&4>n?n:4,e(!0);var t=cs.transition;cs.transition={};try{e(!1),r()}finally{pe=n,cs.transition=t}}function pd(){return dr().memoizedState}function uu(e,r,n){var t=Jr(e);if(n={lane:t,action:n,hasEagerState:!1,eagerState:null,next:null},ud(e))md(r,n);else if(n=Ul(e,r,n,t),n!==null){var i=qe();br(n,e,t,i),gd(n,r,t)}}function mu(e,r,n){var t=Jr(e),i={lane:t,action:n,hasEagerState:!1,eagerState:null,next:null};if(ud(e))md(r,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=r.lastRenderedReducer,s!==null))try{var c=r.lastRenderedState,m=s(c,n);if(i.hasEagerState=!0,i.eagerState=m,mr(m,c)){var h=r.interleaved;h===null?(i.next=i,is(r)):(i.next=h.next,h.next=i),r.interleaved=i;return}}catch{}finally{}n=Ul(e,r,i,t),n!==null&&(i=qe(),br(n,e,t,i),gd(n,r,t))}}function ud(e){var r=e.alternate;return e===Se||r!==null&&r===Se}function md(e,r){wt=Si=!0;var n=e.pending;n===null?r.next=r:(r.next=n.next,n.next=r),e.pending=r}function gd(e,r,n){if((n&4194240)!==0){var t=r.lanes;t&=e.pendingLanes,n|=t,r.lanes=n,ya(e,n)}}var Ci={readContext:lr,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useInsertionEffect:Ue,useLayoutEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useMutableSource:Ue,useSyncExternalStore:Ue,useId:Ue,unstable_isNewReconciler:!1},gu={readContext:lr,useCallback:function(e,r){return Sr().memoizedState=[e,r===void 0?null:r],e},useContext:lr,useEffect:td,useImperativeHandle:function(e,r,n){return n=n!=null?n.concat([e]):null,Ei(4194308,4,sd.bind(null,r,e),n)},useLayoutEffect:function(e,r){return Ei(4194308,4,e,r)},useInsertionEffect:function(e,r){return Ei(4,2,e,r)},useMemo:function(e,r){var n=Sr();return r=r===void 0?null:r,e=e(),n.memoizedState=[e,r],e},useReducer:function(e,r,n){var t=Sr();return r=n!==void 0?n(r):r,t.memoizedState=t.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},t.queue=e,e=e.dispatch=uu.bind(null,Se,e),[t.memoizedState,e]},useRef:function(e){var r=Sr();return e={current:e},r.memoizedState=e},useState:rd,useDebugValue:vs,useDeferredValue:function(e){return Sr().memoizedState=e},useTransition:function(){var e=rd(!1),r=e[0];return e=pu.bind(null,e[1]),Sr().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,n){var t=Se,i=Sr();if(ye){if(n===void 0)throw Error(d(407));n=n()}else{if(n=r(),Be===null)throw Error(d(349));(pn&30)!==0||Ql(t,r,n)}i.memoizedState=n;var s={value:n,getSnapshot:r};return i.queue=s,td(Jl.bind(null,t,s,e),[e]),t.flags|=2048,Et(9,Xl.bind(null,t,s,n,r),void 0,null),n},useId:function(){var e=Sr(),r=Be.identifierPrefix;if(ye){var n=Nr,t=Ar;n=(t&~(1<<32-ur(t)-1)).toString(32)+n,r=":"+r+"R"+n,n=kt++,0<n&&(r+="H"+n.toString(32)),r+=":"}else n=cu++,r=":"+r+"r"+n.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},hu={readContext:lr,useCallback:ld,useContext:lr,useEffect:fs,useImperativeHandle:od,useInsertionEffect:id,useLayoutEffect:ad,useMemo:dd,useReducer:gs,useRef:nd,useState:function(){return gs(St)},useDebugValue:vs,useDeferredValue:function(e){var r=dr();return cd(r,Te.memoizedState,e)},useTransition:function(){var e=gs(St)[0],r=dr().memoizedState;return[e,r]},useMutableSource:Yl,useSyncExternalStore:Kl,useId:pd,unstable_isNewReconciler:!1},fu={readContext:lr,useCallback:ld,useContext:lr,useEffect:fs,useImperativeHandle:od,useInsertionEffect:id,useLayoutEffect:ad,useMemo:dd,useReducer:hs,useRef:nd,useState:function(){return hs(St)},useDebugValue:vs,useDeferredValue:function(e){var r=dr();return Te===null?r.memoizedState=e:cd(r,Te.memoizedState,e)},useTransition:function(){var e=hs(St)[0],r=dr().memoizedState;return[e,r]},useMutableSource:Yl,useSyncExternalStore:Kl,useId:pd,unstable_isNewReconciler:!1};function hr(e,r){if(e&&e.defaultProps){r=O({},r),e=e.defaultProps;for(var n in e)r[n]===void 0&&(r[n]=e[n]);return r}return r}function bs(e,r,n,t){r=e.memoizedState,n=n(t,r),n=n==null?r:O({},r,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var zi={isMounted:function(e){return(e=e._reactInternals)?tn(e)===e:!1},enqueueSetState:function(e,r,n){e=e._reactInternals;var t=qe(),i=Jr(e),s=Pr(t,i);s.payload=r,n!=null&&(s.callback=n),r=Yr(e,s,i),r!==null&&(br(r,e,i,t),yi(r,e,i))},enqueueReplaceState:function(e,r,n){e=e._reactInternals;var t=qe(),i=Jr(e),s=Pr(t,i);s.tag=1,s.payload=r,n!=null&&(s.callback=n),r=Yr(e,s,i),r!==null&&(br(r,e,i,t),yi(r,e,i))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var n=qe(),t=Jr(e),i=Pr(n,t);i.tag=2,r!=null&&(i.callback=r),r=Yr(e,i,t),r!==null&&(br(r,e,t,n),yi(r,e,t))}};function hd(e,r,n,t,i,s,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(t,s,c):r.prototype&&r.prototype.isPureReactComponent?!ct(n,t)||!ct(i,s):!0}function fd(e,r,n){var t=!1,i=Gr,s=r.contextType;return typeof s=="object"&&s!==null?s=lr(s):(i=Ke(r)?sn:Oe.current,t=r.contextTypes,s=(t=t!=null)?An(e,i):Gr),r=new r(n,s),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=zi,e.stateNode=r,r._reactInternals=e,t&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),r}function vd(e,r,n,t){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(n,t),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(n,t),r.state!==e&&zi.enqueueReplaceState(r,r.state,null)}function ys(e,r,n,t){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},as(e);var s=r.contextType;typeof s=="object"&&s!==null?i.context=lr(s):(s=Ke(r)?sn:Oe.current,i.context=An(e,s)),i.state=e.memoizedState,s=r.getDerivedStateFromProps,typeof s=="function"&&(bs(e,r,s,n),i.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(r=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),r!==i.state&&zi.enqueueReplaceState(i,i.state,null),xi(e,n,i,t),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Bn(e,r){try{var n="",t=r;do n+=ae(t),t=t.return;while(t);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:r,stack:i,digest:null}}function xs(e,r,n){return{value:e,source:null,stack:n??null,digest:r??null}}function ws(e,r){try{console.error(r.value)}catch(n){setTimeout(function(){throw n})}}var vu=typeof WeakMap=="function"?WeakMap:Map;function bd(e,r,n){n=Pr(-1,n),n.tag=3,n.payload={element:null};var t=r.value;return n.callback=function(){Ti||(Ti=!0,Ds=t),ws(e,r)},n}function yd(e,r,n){n=Pr(-1,n),n.tag=3;var t=e.type.getDerivedStateFromError;if(typeof t=="function"){var i=r.value;n.payload=function(){return t(i)},n.callback=function(){ws(e,r)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ws(e,r),typeof t!="function"&&(Qr===null?Qr=new Set([this]):Qr.add(this));var c=r.stack;this.componentDidCatch(r.value,{componentStack:c!==null?c:""})}),n}function xd(e,r,n){var t=e.pingCache;if(t===null){t=e.pingCache=new vu;var i=new Set;t.set(r,i)}else i=t.get(r),i===void 0&&(i=new Set,t.set(r,i));i.has(n)||(i.add(n),e=Ru.bind(null,e,r,n),r.then(e,e))}function wd(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function kd(e,r,n,t,i){return(e.mode&1)===0?(e===r?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(r=Pr(-1,1),r.tag=2,Yr(n,r,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var bu=J.ReactCurrentOwner,Qe=!1;function We(e,r,n,t){r.child=e===null?Ol(r,null,n,t):Mn(r,e.child,n,t)}function Sd(e,r,n,t,i){n=n.render;var s=r.ref;return In(r,i),t=us(e,r,n,t,s,i),n=ms(),e!==null&&!Qe?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~i,Mr(e,r,i)):(ye&&n&&Ka(r),r.flags|=1,We(e,r,t,i),r.child)}function Ed(e,r,n,t,i){if(e===null){var s=n.type;return typeof s=="function"&&!Us(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(r.tag=15,r.type=s,jd(e,r,s,t,i)):(e=Hi(n.type,null,t,r,r.mode,i),e.ref=r.ref,e.return=r,r.child=e)}if(s=e.child,(e.lanes&i)===0){var c=s.memoizedProps;if(n=n.compare,n=n!==null?n:ct,n(c,t)&&e.ref===r.ref)return Mr(e,r,i)}return r.flags|=1,e=en(s,t),e.ref=r.ref,e.return=r,r.child=e}function jd(e,r,n,t,i){if(e!==null){var s=e.memoizedProps;if(ct(s,t)&&e.ref===r.ref)if(Qe=!1,r.pendingProps=t=s,(e.lanes&i)!==0)(e.flags&131072)!==0&&(Qe=!0);else return r.lanes=e.lanes,Mr(e,r,i)}return ks(e,r,n,t,i)}function Cd(e,r,n){var t=r.pendingProps,i=t.children,s=e!==null?e.memoizedState:null;if(t.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},me(_n,ir),ir|=n;else{if((n&1073741824)===0)return e=s!==null?s.baseLanes|n:n,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,me(_n,ir),ir|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},t=s!==null?s.baseLanes:n,me(_n,ir),ir|=t}else s!==null?(t=s.baseLanes|n,r.memoizedState=null):t=n,me(_n,ir),ir|=t;return We(e,r,i,n),r.child}function zd(e,r){var n=r.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(r.flags|=512,r.flags|=2097152)}function ks(e,r,n,t,i){var s=Ke(n)?sn:Oe.current;return s=An(r,s),In(r,i),n=us(e,r,n,t,s,i),t=ms(),e!==null&&!Qe?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~i,Mr(e,r,i)):(ye&&t&&Ka(r),r.flags|=1,We(e,r,n,i),r.child)}function Ld(e,r,n,t,i){if(Ke(n)){var s=!0;pi(r)}else s=!1;if(In(r,i),r.stateNode===null)Ai(e,r),fd(r,n,t),ys(r,n,t,i),t=!0;else if(e===null){var c=r.stateNode,m=r.memoizedProps;c.props=m;var h=c.context,j=n.contextType;typeof j=="object"&&j!==null?j=lr(j):(j=Ke(n)?sn:Oe.current,j=An(r,j));var N=n.getDerivedStateFromProps,R=typeof N=="function"||typeof c.getSnapshotBeforeUpdate=="function";R||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(m!==t||h!==j)&&vd(r,c,t,j),qr=!1;var L=r.memoizedState;c.state=L,xi(r,t,c,i),h=r.memoizedState,m!==t||L!==h||Ye.current||qr?(typeof N=="function"&&(bs(r,n,N,t),h=r.memoizedState),(m=qr||hd(r,n,m,t,L,h,j))?(R||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(r.flags|=4194308)):(typeof c.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=t,r.memoizedState=h),c.props=t,c.state=h,c.context=j,t=m):(typeof c.componentDidMount=="function"&&(r.flags|=4194308),t=!1)}else{c=r.stateNode,$l(e,r),m=r.memoizedProps,j=r.type===r.elementType?m:hr(r.type,m),c.props=j,R=r.pendingProps,L=c.context,h=n.contextType,typeof h=="object"&&h!==null?h=lr(h):(h=Ke(n)?sn:Oe.current,h=An(r,h));var H=n.getDerivedStateFromProps;(N=typeof H=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(m!==R||L!==h)&&vd(r,c,t,h),qr=!1,L=r.memoizedState,c.state=L,xi(r,t,c,i);var $=r.memoizedState;m!==R||L!==$||Ye.current||qr?(typeof H=="function"&&(bs(r,n,H,t),$=r.memoizedState),(j=qr||hd(r,n,j,t,L,$,h)||!1)?(N||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(t,$,h),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(t,$,h)),typeof c.componentDidUpdate=="function"&&(r.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof c.componentDidUpdate!="function"||m===e.memoizedProps&&L===e.memoizedState||(r.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&L===e.memoizedState||(r.flags|=1024),r.memoizedProps=t,r.memoizedState=$),c.props=t,c.state=$,c.context=h,t=j):(typeof c.componentDidUpdate!="function"||m===e.memoizedProps&&L===e.memoizedState||(r.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&L===e.memoizedState||(r.flags|=1024),t=!1)}return Ss(e,r,n,t,s,i)}function Ss(e,r,n,t,i,s){zd(e,r);var c=(r.flags&128)!==0;if(!t&&!c)return i&&Ml(r,n,!1),Mr(e,r,s);t=r.stateNode,bu.current=r;var m=c&&typeof n.getDerivedStateFromError!="function"?null:t.render();return r.flags|=1,e!==null&&c?(r.child=Mn(r,e.child,null,s),r.child=Mn(r,null,m,s)):We(e,r,m,s),r.memoizedState=t.state,i&&Ml(r,n,!0),r.child}function Ad(e){var r=e.stateNode;r.pendingContext?Rl(e,r.pendingContext,r.pendingContext!==r.context):r.context&&Rl(e,r.context,!1),ss(e,r.containerInfo)}function Nd(e,r,n,t,i){return Pn(),Za(i),r.flags|=256,We(e,r,n,t),r.child}var Es={dehydrated:null,treeContext:null,retryLane:0};function js(e){return{baseLanes:e,cachePool:null,transitions:null}}function Rd(e,r,n){var t=r.pendingProps,i=ke.current,s=!1,c=(r.flags&128)!==0,m;if((m=c)||(m=e!==null&&e.memoizedState===null?!1:(i&2)!==0),m?(s=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),me(ke,i&1),e===null)return Ja(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((r.mode&1)===0?r.lanes=1:e.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(c=t.children,e=t.fallback,s?(t=r.mode,s=r.child,c={mode:"hidden",children:c},(t&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=c):s=Vi(c,t,0,null),e=fn(e,t,n,null),s.return=r,e.return=r,s.sibling=e,r.child=s,r.child.memoizedState=js(n),r.memoizedState=Es,e):Cs(r,c));if(i=e.memoizedState,i!==null&&(m=i.dehydrated,m!==null))return yu(e,r,c,t,m,i,n);if(s){s=t.fallback,c=r.mode,i=e.child,m=i.sibling;var h={mode:"hidden",children:t.children};return(c&1)===0&&r.child!==i?(t=r.child,t.childLanes=0,t.pendingProps=h,r.deletions=null):(t=en(i,h),t.subtreeFlags=i.subtreeFlags&14680064),m!==null?s=en(m,s):(s=fn(s,c,n,null),s.flags|=2),s.return=r,t.return=r,t.sibling=s,r.child=t,t=s,s=r.child,c=e.child.memoizedState,c=c===null?js(n):{baseLanes:c.baseLanes|n,cachePool:null,transitions:c.transitions},s.memoizedState=c,s.childLanes=e.childLanes&~n,r.memoizedState=Es,t}return s=e.child,e=s.sibling,t=en(s,{mode:"visible",children:t.children}),(r.mode&1)===0&&(t.lanes=n),t.return=r,t.sibling=null,e!==null&&(n=r.deletions,n===null?(r.deletions=[e],r.flags|=16):n.push(e)),r.child=t,r.memoizedState=null,t}function Cs(e,r){return r=Vi({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function Li(e,r,n,t){return t!==null&&Za(t),Mn(r,e.child,null,n),e=Cs(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function yu(e,r,n,t,i,s,c){if(n)return r.flags&256?(r.flags&=-257,t=xs(Error(d(422))),Li(e,r,c,t)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(s=t.fallback,i=r.mode,t=Vi({mode:"visible",children:t.children},i,0,null),s=fn(s,i,c,null),s.flags|=2,t.return=r,s.return=r,t.sibling=s,r.child=t,(r.mode&1)!==0&&Mn(r,e.child,null,c),r.child.memoizedState=js(c),r.memoizedState=Es,s);if((r.mode&1)===0)return Li(e,r,c,null);if(i.data==="$!"){if(t=i.nextSibling&&i.nextSibling.dataset,t)var m=t.dgst;return t=m,s=Error(d(419)),t=xs(s,t,void 0),Li(e,r,c,t)}if(m=(c&e.childLanes)!==0,Qe||m){if(t=Be,t!==null){switch(c&-c){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(t.suspendedLanes|c))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Rr(e,i),br(t,e,i,-1))}return Os(),t=xs(Error(d(421))),Li(e,r,c,t)}return i.data==="$?"?(r.flags|=128,r.child=e.child,r=Pu.bind(null,e),i._reactRetry=r,null):(e=s.treeContext,tr=Ur(i.nextSibling),nr=r,ye=!0,gr=null,e!==null&&(sr[or++]=Ar,sr[or++]=Nr,sr[or++]=on,Ar=e.id,Nr=e.overflow,on=r),r=Cs(r,t.children),r.flags|=4096,r)}function Pd(e,r,n){e.lanes|=r;var t=e.alternate;t!==null&&(t.lanes|=r),ts(e.return,r,n)}function zs(e,r,n,t,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:t,tail:n,tailMode:i}:(s.isBackwards=r,s.rendering=null,s.renderingStartTime=0,s.last=t,s.tail=n,s.tailMode=i)}function Md(e,r,n){var t=r.pendingProps,i=t.revealOrder,s=t.tail;if(We(e,r,t.children,n),t=ke.current,(t&2)!==0)t=t&1|2,r.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pd(e,n,r);else if(e.tag===19)Pd(e,n,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}t&=1}if(me(ke,t),(r.mode&1)===0)r.memoizedState=null;else switch(i){case"forwards":for(n=r.child,i=null;n!==null;)e=n.alternate,e!==null&&wi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=r.child,r.child=null):(i=n.sibling,n.sibling=null),zs(r,!1,i,n,s);break;case"backwards":for(n=null,i=r.child,r.child=null;i!==null;){if(e=i.alternate,e!==null&&wi(e)===null){r.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}zs(r,!0,n,null,s);break;case"together":zs(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Ai(e,r){(r.mode&1)===0&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function Mr(e,r,n){if(e!==null&&(r.dependencies=e.dependencies),un|=r.lanes,(n&r.childLanes)===0)return null;if(e!==null&&r.child!==e.child)throw Error(d(153));if(r.child!==null){for(e=r.child,n=en(e,e.pendingProps),r.child=n,n.return=r;e.sibling!==null;)e=e.sibling,n=n.sibling=en(e,e.pendingProps),n.return=r;n.sibling=null}return r.child}function xu(e,r,n){switch(r.tag){case 3:Ad(r),Pn();break;case 5:ql(r);break;case 1:Ke(r.type)&&pi(r);break;case 4:ss(r,r.stateNode.containerInfo);break;case 10:var t=r.type._context,i=r.memoizedProps.value;me(vi,t._currentValue),t._currentValue=i;break;case 13:if(t=r.memoizedState,t!==null)return t.dehydrated!==null?(me(ke,ke.current&1),r.flags|=128,null):(n&r.child.childLanes)!==0?Rd(e,r,n):(me(ke,ke.current&1),e=Mr(e,r,n),e!==null?e.sibling:null);me(ke,ke.current&1);break;case 19:if(t=(n&r.childLanes)!==0,(e.flags&128)!==0){if(t)return Md(e,r,n);r.flags|=128}if(i=r.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),me(ke,ke.current),t)break;return null;case 22:case 23:return r.lanes=0,Cd(e,r,n)}return Mr(e,r,n)}var Td,Ls,Id,Dd;Td=function(e,r){for(var n=r.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break;for(;n.sibling===null;){if(n.return===null||n.return===r)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Ls=function(){},Id=function(e,r,n,t){var i=e.memoizedProps;if(i!==t){e=r.stateNode,cn(kr.current);var s=null;switch(n){case"input":i=ta(e,i),t=ta(e,t),s=[];break;case"select":i=O({},i,{value:void 0}),t=O({},t,{value:void 0}),s=[];break;case"textarea":i=sa(e,i),t=sa(e,t),s=[];break;default:typeof i.onClick!="function"&&typeof t.onClick=="function"&&(e.onclick=li)}la(n,t);var c;n=null;for(j in i)if(!t.hasOwnProperty(j)&&i.hasOwnProperty(j)&&i[j]!=null)if(j==="style"){var m=i[j];for(c in m)m.hasOwnProperty(c)&&(n||(n={}),n[c]="")}else j!=="dangerouslySetInnerHTML"&&j!=="children"&&j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&j!=="autoFocus"&&(u.hasOwnProperty(j)?s||(s=[]):(s=s||[]).push(j,null));for(j in t){var h=t[j];if(m=i!=null?i[j]:void 0,t.hasOwnProperty(j)&&h!==m&&(h!=null||m!=null))if(j==="style")if(m){for(c in m)!m.hasOwnProperty(c)||h&&h.hasOwnProperty(c)||(n||(n={}),n[c]="");for(c in h)h.hasOwnProperty(c)&&m[c]!==h[c]&&(n||(n={}),n[c]=h[c])}else n||(s||(s=[]),s.push(j,n)),n=h;else j==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,m=m?m.__html:void 0,h!=null&&m!==h&&(s=s||[]).push(j,h)):j==="children"?typeof h!="string"&&typeof h!="number"||(s=s||[]).push(j,""+h):j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&(u.hasOwnProperty(j)?(h!=null&&j==="onScroll"&&he("scroll",e),s||m===h||(s=[])):(s=s||[]).push(j,h))}n&&(s=s||[]).push("style",n);var j=s;(r.updateQueue=j)&&(r.flags|=4)}},Dd=function(e,r,n,t){n!==t&&(r.flags|=4)};function jt(e,r){if(!ye)switch(e.tailMode){case"hidden":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:t.sibling=null}}function $e(e){var r=e.alternate!==null&&e.alternate.child===e.child,n=0,t=0;if(r)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,t|=i.subtreeFlags&14680064,t|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,t|=i.subtreeFlags,t|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=t,e.childLanes=n,r}function wu(e,r,n){var t=r.pendingProps;switch(Qa(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(r),null;case 1:return Ke(r.type)&&ci(),$e(r),null;case 3:return t=r.stateNode,Dn(),fe(Ye),fe(Oe),ds(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(hi(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,gr!==null&&(_s(gr),gr=null))),Ls(e,r),$e(r),null;case 5:os(r);var i=cn(xt.current);if(n=r.type,e!==null&&r.stateNode!=null)Id(e,r,n,t,i),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!t){if(r.stateNode===null)throw Error(d(166));return $e(r),null}if(e=cn(kr.current),hi(r)){t=r.stateNode,n=r.type;var s=r.memoizedProps;switch(t[wr]=r,t[ht]=s,e=(r.mode&1)!==0,n){case"dialog":he("cancel",t),he("close",t);break;case"iframe":case"object":case"embed":he("load",t);break;case"video":case"audio":for(i=0;i<ut.length;i++)he(ut[i],t);break;case"source":he("error",t);break;case"img":case"image":case"link":he("error",t),he("load",t);break;case"details":he("toggle",t);break;case"input":fo(t,s),he("invalid",t);break;case"select":t._wrapperState={wasMultiple:!!s.multiple},he("invalid",t);break;case"textarea":yo(t,s),he("invalid",t)}la(n,s),i=null;for(var c in s)if(s.hasOwnProperty(c)){var m=s[c];c==="children"?typeof m=="string"?t.textContent!==m&&(s.suppressHydrationWarning!==!0&&oi(t.textContent,m,e),i=["children",m]):typeof m=="number"&&t.textContent!==""+m&&(s.suppressHydrationWarning!==!0&&oi(t.textContent,m,e),i=["children",""+m]):u.hasOwnProperty(c)&&m!=null&&c==="onScroll"&&he("scroll",t)}switch(n){case"input":Ft(t),bo(t,s,!0);break;case"textarea":Ft(t),wo(t);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(t.onclick=li)}t=i,r.updateQueue=t,t!==null&&(r.flags|=4)}else{c=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ko(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof t.is=="string"?e=c.createElement(n,{is:t.is}):(e=c.createElement(n),n==="select"&&(c=e,t.multiple?c.multiple=!0:t.size&&(c.size=t.size))):e=c.createElementNS(e,n),e[wr]=r,e[ht]=t,Td(e,r,!1,!1),r.stateNode=e;e:{switch(c=da(n,t),n){case"dialog":he("cancel",e),he("close",e),i=t;break;case"iframe":case"object":case"embed":he("load",e),i=t;break;case"video":case"audio":for(i=0;i<ut.length;i++)he(ut[i],e);i=t;break;case"source":he("error",e),i=t;break;case"img":case"image":case"link":he("error",e),he("load",e),i=t;break;case"details":he("toggle",e),i=t;break;case"input":fo(e,t),i=ta(e,t),he("invalid",e);break;case"option":i=t;break;case"select":e._wrapperState={wasMultiple:!!t.multiple},i=O({},t,{value:void 0}),he("invalid",e);break;case"textarea":yo(e,t),i=sa(e,t),he("invalid",e);break;default:i=t}la(n,i),m=i;for(s in m)if(m.hasOwnProperty(s)){var h=m[s];s==="style"?jo(e,h):s==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&So(e,h)):s==="children"?typeof h=="string"?(n!=="textarea"||h!=="")&&qn(e,h):typeof h=="number"&&qn(e,""+h):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(u.hasOwnProperty(s)?h!=null&&s==="onScroll"&&he("scroll",e):h!=null&&_(e,s,h,c))}switch(n){case"input":Ft(e),bo(e,t,!1);break;case"textarea":Ft(e),wo(e);break;case"option":t.value!=null&&e.setAttribute("value",""+ce(t.value));break;case"select":e.multiple=!!t.multiple,s=t.value,s!=null?vn(e,!!t.multiple,s,!1):t.defaultValue!=null&&vn(e,!!t.multiple,t.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=li)}switch(n){case"button":case"input":case"select":case"textarea":t=!!t.autoFocus;break e;case"img":t=!0;break e;default:t=!1}}t&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return $e(r),null;case 6:if(e&&r.stateNode!=null)Dd(e,r,e.memoizedProps,t);else{if(typeof t!="string"&&r.stateNode===null)throw Error(d(166));if(n=cn(xt.current),cn(kr.current),hi(r)){if(t=r.stateNode,n=r.memoizedProps,t[wr]=r,(s=t.nodeValue!==n)&&(e=nr,e!==null))switch(e.tag){case 3:oi(t.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&oi(t.nodeValue,n,(e.mode&1)!==0)}s&&(r.flags|=4)}else t=(n.nodeType===9?n:n.ownerDocument).createTextNode(t),t[wr]=r,r.stateNode=t}return $e(r),null;case 13:if(fe(ke),t=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ye&&tr!==null&&(r.mode&1)!==0&&(r.flags&128)===0)_l(),Pn(),r.flags|=98560,s=!1;else if(s=hi(r),t!==null&&t.dehydrated!==null){if(e===null){if(!s)throw Error(d(318));if(s=r.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(d(317));s[wr]=r}else Pn(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;$e(r),s=!1}else gr!==null&&(_s(gr),gr=null),s=!0;if(!s)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=n,r):(t=t!==null,t!==(e!==null&&e.memoizedState!==null)&&t&&(r.child.flags|=8192,(r.mode&1)!==0&&(e===null||(ke.current&1)!==0?Ie===0&&(Ie=3):Os())),r.updateQueue!==null&&(r.flags|=4),$e(r),null);case 4:return Dn(),Ls(e,r),e===null&&mt(r.stateNode.containerInfo),$e(r),null;case 10:return ns(r.type._context),$e(r),null;case 17:return Ke(r.type)&&ci(),$e(r),null;case 19:if(fe(ke),s=r.memoizedState,s===null)return $e(r),null;if(t=(r.flags&128)!==0,c=s.rendering,c===null)if(t)jt(s,!1);else{if(Ie!==0||e!==null&&(e.flags&128)!==0)for(e=r.child;e!==null;){if(c=wi(e),c!==null){for(r.flags|=128,jt(s,!1),t=c.updateQueue,t!==null&&(r.updateQueue=t,r.flags|=4),r.subtreeFlags=0,t=n,n=r.child;n!==null;)s=n,e=t,s.flags&=14680066,c=s.alternate,c===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=c.childLanes,s.lanes=c.lanes,s.child=c.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=c.memoizedProps,s.memoizedState=c.memoizedState,s.updateQueue=c.updateQueue,s.type=c.type,e=c.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return me(ke,ke.current&1|2),r.child}e=e.sibling}s.tail!==null&&Ae()>Hn&&(r.flags|=128,t=!0,jt(s,!1),r.lanes=4194304)}else{if(!t)if(e=wi(c),e!==null){if(r.flags|=128,t=!0,n=e.updateQueue,n!==null&&(r.updateQueue=n,r.flags|=4),jt(s,!0),s.tail===null&&s.tailMode==="hidden"&&!c.alternate&&!ye)return $e(r),null}else 2*Ae()-s.renderingStartTime>Hn&&n!==1073741824&&(r.flags|=128,t=!0,jt(s,!1),r.lanes=4194304);s.isBackwards?(c.sibling=r.child,r.child=c):(n=s.last,n!==null?n.sibling=c:r.child=c,s.last=c)}return s.tail!==null?(r=s.tail,s.rendering=r,s.tail=r.sibling,s.renderingStartTime=Ae(),r.sibling=null,n=ke.current,me(ke,t?n&1|2:n&1),r):($e(r),null);case 22:case 23:return Vs(),t=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==t&&(r.flags|=8192),t&&(r.mode&1)!==0?(ir&1073741824)!==0&&($e(r),r.subtreeFlags&6&&(r.flags|=8192)):$e(r),null;case 24:return null;case 25:return null}throw Error(d(156,r.tag))}function ku(e,r){switch(Qa(r),r.tag){case 1:return Ke(r.type)&&ci(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return Dn(),fe(Ye),fe(Oe),ds(),e=r.flags,(e&65536)!==0&&(e&128)===0?(r.flags=e&-65537|128,r):null;case 5:return os(r),null;case 13:if(fe(ke),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(d(340));Pn()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return fe(ke),null;case 4:return Dn(),null;case 10:return ns(r.type._context),null;case 22:case 23:return Vs(),null;case 24:return null;default:return null}}var Ni=!1,Ge=!1,Su=typeof WeakSet=="function"?WeakSet:Set,V=null;function Fn(e,r){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(t){je(e,r,t)}else n.current=null}function As(e,r,n){try{n()}catch(t){je(e,r,t)}}var Bd=!1;function Eu(e,r){if(Va=Qt,e=hl(),Ma(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var t=n.getSelection&&n.getSelection();if(t&&t.rangeCount!==0){n=t.anchorNode;var i=t.anchorOffset,s=t.focusNode;t=t.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var c=0,m=-1,h=-1,j=0,N=0,R=e,L=null;r:for(;;){for(var H;R!==n||i!==0&&R.nodeType!==3||(m=c+i),R!==s||t!==0&&R.nodeType!==3||(h=c+t),R.nodeType===3&&(c+=R.nodeValue.length),(H=R.firstChild)!==null;)L=R,R=H;for(;;){if(R===e)break r;if(L===n&&++j===i&&(m=c),L===s&&++N===t&&(h=c),(H=R.nextSibling)!==null)break;R=L,L=R.parentNode}R=H}n=m===-1||h===-1?null:{start:m,end:h}}else n=null}n=n||{start:0,end:0}}else n=null;for(Oa={focusedElem:e,selectionRange:n},Qt=!1,V=r;V!==null;)if(r=V,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,V=e;else for(;V!==null;){r=V;try{var $=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if($!==null){var G=$.memoizedProps,Ne=$.memoizedState,w=r.stateNode,f=w.getSnapshotBeforeUpdate(r.elementType===r.type?G:hr(r.type,G),Ne);w.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var S=r.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(d(163))}}catch(T){je(r,r.return,T)}if(e=r.sibling,e!==null){e.return=r.return,V=e;break}V=r.return}return $=Bd,Bd=!1,$}function Ct(e,r,n){var t=r.updateQueue;if(t=t!==null?t.lastEffect:null,t!==null){var i=t=t.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&As(r,n,s)}i=i.next}while(i!==t)}}function Ri(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var n=r=r.next;do{if((n.tag&e)===e){var t=n.create;n.destroy=t()}n=n.next}while(n!==r)}}function Ns(e){var r=e.ref;if(r!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof r=="function"?r(e):r.current=e}}function Fd(e){var r=e.alternate;r!==null&&(e.alternate=null,Fd(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[wr],delete r[ht],delete r[Wa],delete r[su],delete r[ou])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function _d(e){return e.tag===5||e.tag===3||e.tag===4}function Hd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_d(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Rs(e,r,n){var t=e.tag;if(t===5||t===6)e=e.stateNode,r?n.nodeType===8?n.parentNode.insertBefore(e,r):n.insertBefore(e,r):(n.nodeType===8?(r=n.parentNode,r.insertBefore(e,n)):(r=n,r.appendChild(e)),n=n._reactRootContainer,n!=null||r.onclick!==null||(r.onclick=li));else if(t!==4&&(e=e.child,e!==null))for(Rs(e,r,n),e=e.sibling;e!==null;)Rs(e,r,n),e=e.sibling}function Ps(e,r,n){var t=e.tag;if(t===5||t===6)e=e.stateNode,r?n.insertBefore(e,r):n.appendChild(e);else if(t!==4&&(e=e.child,e!==null))for(Ps(e,r,n),e=e.sibling;e!==null;)Ps(e,r,n),e=e.sibling}var _e=null,fr=!1;function Kr(e,r,n){for(n=n.child;n!==null;)Vd(e,r,n),n=n.sibling}function Vd(e,r,n){if(xr&&typeof xr.onCommitFiberUnmount=="function")try{xr.onCommitFiberUnmount($t,n)}catch{}switch(n.tag){case 5:Ge||Fn(n,r);case 6:var t=_e,i=fr;_e=null,Kr(e,r,n),_e=t,fr=i,_e!==null&&(fr?(e=_e,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):_e.removeChild(n.stateNode));break;case 18:_e!==null&&(fr?(e=_e,n=n.stateNode,e.nodeType===8?Ga(e.parentNode,n):e.nodeType===1&&Ga(e,n),it(e)):Ga(_e,n.stateNode));break;case 4:t=_e,i=fr,_e=n.stateNode.containerInfo,fr=!0,Kr(e,r,n),_e=t,fr=i;break;case 0:case 11:case 14:case 15:if(!Ge&&(t=n.updateQueue,t!==null&&(t=t.lastEffect,t!==null))){i=t=t.next;do{var s=i,c=s.destroy;s=s.tag,c!==void 0&&((s&2)!==0||(s&4)!==0)&&As(n,r,c),i=i.next}while(i!==t)}Kr(e,r,n);break;case 1:if(!Ge&&(Fn(n,r),t=n.stateNode,typeof t.componentWillUnmount=="function"))try{t.props=n.memoizedProps,t.state=n.memoizedState,t.componentWillUnmount()}catch(m){je(n,r,m)}Kr(e,r,n);break;case 21:Kr(e,r,n);break;case 22:n.mode&1?(Ge=(t=Ge)||n.memoizedState!==null,Kr(e,r,n),Ge=t):Kr(e,r,n);break;default:Kr(e,r,n)}}function Od(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Su),r.forEach(function(t){var i=Mu.bind(null,e,t);n.has(t)||(n.add(t),t.then(i,i))})}}function vr(e,r){var n=r.deletions;if(n!==null)for(var t=0;t<n.length;t++){var i=n[t];try{var s=e,c=r,m=c;e:for(;m!==null;){switch(m.tag){case 5:_e=m.stateNode,fr=!1;break e;case 3:_e=m.stateNode.containerInfo,fr=!0;break e;case 4:_e=m.stateNode.containerInfo,fr=!0;break e}m=m.return}if(_e===null)throw Error(d(160));Vd(s,c,i),_e=null,fr=!1;var h=i.alternate;h!==null&&(h.return=null),i.return=null}catch(j){je(i,r,j)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Ud(r,e),r=r.sibling}function Ud(e,r){var n=e.alternate,t=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(vr(r,e),Er(e),t&4){try{Ct(3,e,e.return),Ri(3,e)}catch(G){je(e,e.return,G)}try{Ct(5,e,e.return)}catch(G){je(e,e.return,G)}}break;case 1:vr(r,e),Er(e),t&512&&n!==null&&Fn(n,n.return);break;case 5:if(vr(r,e),Er(e),t&512&&n!==null&&Fn(n,n.return),e.flags&32){var i=e.stateNode;try{qn(i,"")}catch(G){je(e,e.return,G)}}if(t&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,c=n!==null?n.memoizedProps:s,m=e.type,h=e.updateQueue;if(e.updateQueue=null,h!==null)try{m==="input"&&s.type==="radio"&&s.name!=null&&vo(i,s),da(m,c);var j=da(m,s);for(c=0;c<h.length;c+=2){var N=h[c],R=h[c+1];N==="style"?jo(i,R):N==="dangerouslySetInnerHTML"?So(i,R):N==="children"?qn(i,R):_(i,N,R,j)}switch(m){case"input":ia(i,s);break;case"textarea":xo(i,s);break;case"select":var L=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var H=s.value;H!=null?vn(i,!!s.multiple,H,!1):L!==!!s.multiple&&(s.defaultValue!=null?vn(i,!!s.multiple,s.defaultValue,!0):vn(i,!!s.multiple,s.multiple?[]:"",!1))}i[ht]=s}catch(G){je(e,e.return,G)}}break;case 6:if(vr(r,e),Er(e),t&4){if(e.stateNode===null)throw Error(d(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(G){je(e,e.return,G)}}break;case 3:if(vr(r,e),Er(e),t&4&&n!==null&&n.memoizedState.isDehydrated)try{it(r.containerInfo)}catch(G){je(e,e.return,G)}break;case 4:vr(r,e),Er(e);break;case 13:vr(r,e),Er(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Is=Ae())),t&4&&Od(e);break;case 22:if(N=n!==null&&n.memoizedState!==null,e.mode&1?(Ge=(j=Ge)||N,vr(r,e),Ge=j):vr(r,e),Er(e),t&8192){if(j=e.memoizedState!==null,(e.stateNode.isHidden=j)&&!N&&(e.mode&1)!==0)for(V=e,N=e.child;N!==null;){for(R=V=N;V!==null;){switch(L=V,H=L.child,L.tag){case 0:case 11:case 14:case 15:Ct(4,L,L.return);break;case 1:Fn(L,L.return);var $=L.stateNode;if(typeof $.componentWillUnmount=="function"){t=L,n=L.return;try{r=t,$.props=r.memoizedProps,$.state=r.memoizedState,$.componentWillUnmount()}catch(G){je(t,n,G)}}break;case 5:Fn(L,L.return);break;case 22:if(L.memoizedState!==null){Wd(R);continue}}H!==null?(H.return=L,V=H):Wd(R)}N=N.sibling}e:for(N=null,R=e;;){if(R.tag===5){if(N===null){N=R;try{i=R.stateNode,j?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(m=R.stateNode,h=R.memoizedProps.style,c=h!=null&&h.hasOwnProperty("display")?h.display:null,m.style.display=Eo("display",c))}catch(G){je(e,e.return,G)}}}else if(R.tag===6){if(N===null)try{R.stateNode.nodeValue=j?"":R.memoizedProps}catch(G){je(e,e.return,G)}}else if((R.tag!==22&&R.tag!==23||R.memoizedState===null||R===e)&&R.child!==null){R.child.return=R,R=R.child;continue}if(R===e)break e;for(;R.sibling===null;){if(R.return===null||R.return===e)break e;N===R&&(N=null),R=R.return}N===R&&(N=null),R.sibling.return=R.return,R=R.sibling}}break;case 19:vr(r,e),Er(e),t&4&&Od(e);break;case 21:break;default:vr(r,e),Er(e)}}function Er(e){var r=e.flags;if(r&2){try{e:{for(var n=e.return;n!==null;){if(_d(n)){var t=n;break e}n=n.return}throw Error(d(160))}switch(t.tag){case 5:var i=t.stateNode;t.flags&32&&(qn(i,""),t.flags&=-33);var s=Hd(e);Ps(e,s,i);break;case 3:case 4:var c=t.stateNode.containerInfo,m=Hd(e);Rs(e,m,c);break;default:throw Error(d(161))}}catch(h){je(e,e.return,h)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function ju(e,r,n){V=e,$d(e)}function $d(e,r,n){for(var t=(e.mode&1)!==0;V!==null;){var i=V,s=i.child;if(i.tag===22&&t){var c=i.memoizedState!==null||Ni;if(!c){var m=i.alternate,h=m!==null&&m.memoizedState!==null||Ge;m=Ni;var j=Ge;if(Ni=c,(Ge=h)&&!j)for(V=i;V!==null;)c=V,h=c.child,c.tag===22&&c.memoizedState!==null?qd(i):h!==null?(h.return=c,V=h):qd(i);for(;s!==null;)V=s,$d(s),s=s.sibling;V=i,Ni=m,Ge=j}Gd(e)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,V=s):Gd(e)}}function Gd(e){for(;V!==null;){var r=V;if((r.flags&8772)!==0){var n=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Ge||Ri(5,r);break;case 1:var t=r.stateNode;if(r.flags&4&&!Ge)if(n===null)t.componentDidMount();else{var i=r.elementType===r.type?n.memoizedProps:hr(r.type,n.memoizedProps);t.componentDidUpdate(i,n.memoizedState,t.__reactInternalSnapshotBeforeUpdate)}var s=r.updateQueue;s!==null&&Wl(r,s,t);break;case 3:var c=r.updateQueue;if(c!==null){if(n=null,r.child!==null)switch(r.child.tag){case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}Wl(r,c,n)}break;case 5:var m=r.stateNode;if(n===null&&r.flags&4){n=m;var h=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&n.focus();break;case"img":h.src&&(n.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var j=r.alternate;if(j!==null){var N=j.memoizedState;if(N!==null){var R=N.dehydrated;R!==null&&it(R)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(d(163))}Ge||r.flags&512&&Ns(r)}catch(L){je(r,r.return,L)}}if(r===e){V=null;break}if(n=r.sibling,n!==null){n.return=r.return,V=n;break}V=r.return}}function Wd(e){for(;V!==null;){var r=V;if(r===e){V=null;break}var n=r.sibling;if(n!==null){n.return=r.return,V=n;break}V=r.return}}function qd(e){for(;V!==null;){var r=V;try{switch(r.tag){case 0:case 11:case 15:var n=r.return;try{Ri(4,r)}catch(h){je(r,n,h)}break;case 1:var t=r.stateNode;if(typeof t.componentDidMount=="function"){var i=r.return;try{t.componentDidMount()}catch(h){je(r,i,h)}}var s=r.return;try{Ns(r)}catch(h){je(r,s,h)}break;case 5:var c=r.return;try{Ns(r)}catch(h){je(r,c,h)}}}catch(h){je(r,r.return,h)}if(r===e){V=null;break}var m=r.sibling;if(m!==null){m.return=r.return,V=m;break}V=r.return}}var Cu=Math.ceil,Pi=J.ReactCurrentDispatcher,Ms=J.ReactCurrentOwner,cr=J.ReactCurrentBatchConfig,ie=0,Be=null,Re=null,He=0,ir=0,_n=$r(0),Ie=0,zt=null,un=0,Mi=0,Ts=0,Lt=null,Xe=null,Is=0,Hn=1/0,Tr=null,Ti=!1,Ds=null,Qr=null,Ii=!1,Xr=null,Di=0,At=0,Bs=null,Bi=-1,Fi=0;function qe(){return(ie&6)!==0?Ae():Bi!==-1?Bi:Bi=Ae()}function Jr(e){return(e.mode&1)===0?1:(ie&2)!==0&&He!==0?He&-He:du.transition!==null?(Fi===0&&(Fi=Ho()),Fi):(e=pe,e!==0||(e=window.event,e=e===void 0?16:Ko(e.type)),e)}function br(e,r,n,t){if(50<At)throw At=0,Bs=null,Error(d(185));Zn(e,n,t),((ie&2)===0||e!==Be)&&(e===Be&&((ie&2)===0&&(Mi|=n),Ie===4&&Zr(e,He)),Je(e,t),n===1&&ie===0&&(r.mode&1)===0&&(Hn=Ae()+500,ui&&Wr()))}function Je(e,r){var n=e.callbackNode;dp(e,r);var t=qt(e,e===Be?He:0);if(t===0)n!==null&&Bo(n),e.callbackNode=null,e.callbackPriority=0;else if(r=t&-t,e.callbackPriority!==r){if(n!=null&&Bo(n),r===1)e.tag===0?lu(Kd.bind(null,e)):Tl(Kd.bind(null,e)),iu(function(){(ie&6)===0&&Wr()}),n=null;else{switch(Vo(t)){case 1:n=fa;break;case 4:n=Fo;break;case 16:n=Ut;break;case 536870912:n=_o;break;default:n=Ut}n=tc(n,Yd.bind(null,e))}e.callbackPriority=r,e.callbackNode=n}}function Yd(e,r){if(Bi=-1,Fi=0,(ie&6)!==0)throw Error(d(327));var n=e.callbackNode;if(Vn()&&e.callbackNode!==n)return null;var t=qt(e,e===Be?He:0);if(t===0)return null;if((t&30)!==0||(t&e.expiredLanes)!==0||r)r=_i(e,t);else{r=t;var i=ie;ie|=2;var s=Xd();(Be!==e||He!==r)&&(Tr=null,Hn=Ae()+500,gn(e,r));do try{Au();break}catch(m){Qd(e,m)}while(!0);rs(),Pi.current=s,ie=i,Re!==null?r=0:(Be=null,He=0,r=Ie)}if(r!==0){if(r===2&&(i=va(e),i!==0&&(t=i,r=Fs(e,i))),r===1)throw n=zt,gn(e,0),Zr(e,t),Je(e,Ae()),n;if(r===6)Zr(e,t);else{if(i=e.current.alternate,(t&30)===0&&!zu(i)&&(r=_i(e,t),r===2&&(s=va(e),s!==0&&(t=s,r=Fs(e,s))),r===1))throw n=zt,gn(e,0),Zr(e,t),Je(e,Ae()),n;switch(e.finishedWork=i,e.finishedLanes=t,r){case 0:case 1:throw Error(d(345));case 2:hn(e,Xe,Tr);break;case 3:if(Zr(e,t),(t&130023424)===t&&(r=Is+500-Ae(),10<r)){if(qt(e,0)!==0)break;if(i=e.suspendedLanes,(i&t)!==t){qe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=$a(hn.bind(null,e,Xe,Tr),r);break}hn(e,Xe,Tr);break;case 4:if(Zr(e,t),(t&4194240)===t)break;for(r=e.eventTimes,i=-1;0<t;){var c=31-ur(t);s=1<<c,c=r[c],c>i&&(i=c),t&=~s}if(t=i,t=Ae()-t,t=(120>t?120:480>t?480:1080>t?1080:1920>t?1920:3e3>t?3e3:4320>t?4320:1960*Cu(t/1960))-t,10<t){e.timeoutHandle=$a(hn.bind(null,e,Xe,Tr),t);break}hn(e,Xe,Tr);break;case 5:hn(e,Xe,Tr);break;default:throw Error(d(329))}}}return Je(e,Ae()),e.callbackNode===n?Yd.bind(null,e):null}function Fs(e,r){var n=Lt;return e.current.memoizedState.isDehydrated&&(gn(e,r).flags|=256),e=_i(e,r),e!==2&&(r=Xe,Xe=n,r!==null&&_s(r)),e}function _s(e){Xe===null?Xe=e:Xe.push.apply(Xe,e)}function zu(e){for(var r=e;;){if(r.flags&16384){var n=r.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var t=0;t<n.length;t++){var i=n[t],s=i.getSnapshot;i=i.value;try{if(!mr(s(),i))return!1}catch{return!1}}}if(n=r.child,r.subtreeFlags&16384&&n!==null)n.return=r,r=n;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Zr(e,r){for(r&=~Ts,r&=~Mi,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var n=31-ur(r),t=1<<n;e[n]=-1,r&=~t}}function Kd(e){if((ie&6)!==0)throw Error(d(327));Vn();var r=qt(e,0);if((r&1)===0)return Je(e,Ae()),null;var n=_i(e,r);if(e.tag!==0&&n===2){var t=va(e);t!==0&&(r=t,n=Fs(e,t))}if(n===1)throw n=zt,gn(e,0),Zr(e,r),Je(e,Ae()),n;if(n===6)throw Error(d(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,hn(e,Xe,Tr),Je(e,Ae()),null}function Hs(e,r){var n=ie;ie|=1;try{return e(r)}finally{ie=n,ie===0&&(Hn=Ae()+500,ui&&Wr())}}function mn(e){Xr!==null&&Xr.tag===0&&(ie&6)===0&&Vn();var r=ie;ie|=1;var n=cr.transition,t=pe;try{if(cr.transition=null,pe=1,e)return e()}finally{pe=t,cr.transition=n,ie=r,(ie&6)===0&&Wr()}}function Vs(){ir=_n.current,fe(_n)}function gn(e,r){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,tu(n)),Re!==null)for(n=Re.return;n!==null;){var t=n;switch(Qa(t),t.tag){case 1:t=t.type.childContextTypes,t!=null&&ci();break;case 3:Dn(),fe(Ye),fe(Oe),ds();break;case 5:os(t);break;case 4:Dn();break;case 13:fe(ke);break;case 19:fe(ke);break;case 10:ns(t.type._context);break;case 22:case 23:Vs()}n=n.return}if(Be=e,Re=e=en(e.current,null),He=ir=r,Ie=0,zt=null,Ts=Mi=un=0,Xe=Lt=null,dn!==null){for(r=0;r<dn.length;r++)if(n=dn[r],t=n.interleaved,t!==null){n.interleaved=null;var i=t.next,s=n.pending;if(s!==null){var c=s.next;s.next=i,t.next=c}n.pending=t}dn=null}return e}function Qd(e,r){do{var n=Re;try{if(rs(),ki.current=Ci,Si){for(var t=Se.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}Si=!1}if(pn=0,De=Te=Se=null,wt=!1,kt=0,Ms.current=null,n===null||n.return===null){Ie=1,zt=r,Re=null;break}e:{var s=e,c=n.return,m=n,h=r;if(r=He,m.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var j=h,N=m,R=N.tag;if((N.mode&1)===0&&(R===0||R===11||R===15)){var L=N.alternate;L?(N.updateQueue=L.updateQueue,N.memoizedState=L.memoizedState,N.lanes=L.lanes):(N.updateQueue=null,N.memoizedState=null)}var H=wd(c);if(H!==null){H.flags&=-257,kd(H,c,m,s,r),H.mode&1&&xd(s,j,r),r=H,h=j;var $=r.updateQueue;if($===null){var G=new Set;G.add(h),r.updateQueue=G}else $.add(h);break e}else{if((r&1)===0){xd(s,j,r),Os();break e}h=Error(d(426))}}else if(ye&&m.mode&1){var Ne=wd(c);if(Ne!==null){(Ne.flags&65536)===0&&(Ne.flags|=256),kd(Ne,c,m,s,r),Za(Bn(h,m));break e}}s=h=Bn(h,m),Ie!==4&&(Ie=2),Lt===null?Lt=[s]:Lt.push(s),s=c;do{switch(s.tag){case 3:s.flags|=65536,r&=-r,s.lanes|=r;var w=bd(s,h,r);Gl(s,w);break e;case 1:m=h;var f=s.type,S=s.stateNode;if((s.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Qr===null||!Qr.has(S)))){s.flags|=65536,r&=-r,s.lanes|=r;var T=yd(s,m,r);Gl(s,T);break e}}s=s.return}while(s!==null)}Zd(n)}catch(W){r=W,Re===n&&n!==null&&(Re=n=n.return);continue}break}while(!0)}function Xd(){var e=Pi.current;return Pi.current=Ci,e===null?Ci:e}function Os(){(Ie===0||Ie===3||Ie===2)&&(Ie=4),Be===null||(un&268435455)===0&&(Mi&268435455)===0||Zr(Be,He)}function _i(e,r){var n=ie;ie|=2;var t=Xd();(Be!==e||He!==r)&&(Tr=null,gn(e,r));do try{Lu();break}catch(i){Qd(e,i)}while(!0);if(rs(),ie=n,Pi.current=t,Re!==null)throw Error(d(261));return Be=null,He=0,Ie}function Lu(){for(;Re!==null;)Jd(Re)}function Au(){for(;Re!==null&&!ep();)Jd(Re)}function Jd(e){var r=nc(e.alternate,e,ir);e.memoizedProps=e.pendingProps,r===null?Zd(e):Re=r,Ms.current=null}function Zd(e){var r=e;do{var n=r.alternate;if(e=r.return,(r.flags&32768)===0){if(n=wu(n,r,ir),n!==null){Re=n;return}}else{if(n=ku(n,r),n!==null){n.flags&=32767,Re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ie=6,Re=null;return}}if(r=r.sibling,r!==null){Re=r;return}Re=r=e}while(r!==null);Ie===0&&(Ie=5)}function hn(e,r,n){var t=pe,i=cr.transition;try{cr.transition=null,pe=1,Nu(e,r,n,t)}finally{cr.transition=i,pe=t}return null}function Nu(e,r,n,t){do Vn();while(Xr!==null);if((ie&6)!==0)throw Error(d(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(d(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(cp(e,s),e===Be&&(Re=Be=null,He=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Ii||(Ii=!0,tc(Ut,function(){return Vn(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=cr.transition,cr.transition=null;var c=pe;pe=1;var m=ie;ie|=4,Ms.current=null,Eu(e,n),Ud(n,e),Qp(Oa),Qt=!!Va,Oa=Va=null,e.current=n,ju(n),rp(),ie=m,pe=c,cr.transition=s}else e.current=n;if(Ii&&(Ii=!1,Xr=e,Di=i),s=e.pendingLanes,s===0&&(Qr=null),ip(n.stateNode),Je(e,Ae()),r!==null)for(t=e.onRecoverableError,n=0;n<r.length;n++)i=r[n],t(i.value,{componentStack:i.stack,digest:i.digest});if(Ti)throw Ti=!1,e=Ds,Ds=null,e;return(Di&1)!==0&&e.tag!==0&&Vn(),s=e.pendingLanes,(s&1)!==0?e===Bs?At++:(At=0,Bs=e):At=0,Wr(),null}function Vn(){if(Xr!==null){var e=Vo(Di),r=cr.transition,n=pe;try{if(cr.transition=null,pe=16>e?16:e,Xr===null)var t=!1;else{if(e=Xr,Xr=null,Di=0,(ie&6)!==0)throw Error(d(331));var i=ie;for(ie|=4,V=e.current;V!==null;){var s=V,c=s.child;if((V.flags&16)!==0){var m=s.deletions;if(m!==null){for(var h=0;h<m.length;h++){var j=m[h];for(V=j;V!==null;){var N=V;switch(N.tag){case 0:case 11:case 15:Ct(8,N,s)}var R=N.child;if(R!==null)R.return=N,V=R;else for(;V!==null;){N=V;var L=N.sibling,H=N.return;if(Fd(N),N===j){V=null;break}if(L!==null){L.return=H,V=L;break}V=H}}}var $=s.alternate;if($!==null){var G=$.child;if(G!==null){$.child=null;do{var Ne=G.sibling;G.sibling=null,G=Ne}while(G!==null)}}V=s}}if((s.subtreeFlags&2064)!==0&&c!==null)c.return=s,V=c;else e:for(;V!==null;){if(s=V,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Ct(9,s,s.return)}var w=s.sibling;if(w!==null){w.return=s.return,V=w;break e}V=s.return}}var f=e.current;for(V=f;V!==null;){c=V;var S=c.child;if((c.subtreeFlags&2064)!==0&&S!==null)S.return=c,V=S;else e:for(c=f;V!==null;){if(m=V,(m.flags&2048)!==0)try{switch(m.tag){case 0:case 11:case 15:Ri(9,m)}}catch(W){je(m,m.return,W)}if(m===c){V=null;break e}var T=m.sibling;if(T!==null){T.return=m.return,V=T;break e}V=m.return}}if(ie=i,Wr(),xr&&typeof xr.onPostCommitFiberRoot=="function")try{xr.onPostCommitFiberRoot($t,e)}catch{}t=!0}return t}finally{pe=n,cr.transition=r}}return!1}function ec(e,r,n){r=Bn(n,r),r=bd(e,r,1),e=Yr(e,r,1),r=qe(),e!==null&&(Zn(e,1,r),Je(e,r))}function je(e,r,n){if(e.tag===3)ec(e,e,n);else for(;r!==null;){if(r.tag===3){ec(r,e,n);break}else if(r.tag===1){var t=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(Qr===null||!Qr.has(t))){e=Bn(n,e),e=yd(r,e,1),r=Yr(r,e,1),e=qe(),r!==null&&(Zn(r,1,e),Je(r,e));break}}r=r.return}}function Ru(e,r,n){var t=e.pingCache;t!==null&&t.delete(r),r=qe(),e.pingedLanes|=e.suspendedLanes&n,Be===e&&(He&n)===n&&(Ie===4||Ie===3&&(He&130023424)===He&&500>Ae()-Is?gn(e,0):Ts|=n),Je(e,r)}function rc(e,r){r===0&&((e.mode&1)===0?r=1:(r=Wt,Wt<<=1,(Wt&130023424)===0&&(Wt=4194304)));var n=qe();e=Rr(e,r),e!==null&&(Zn(e,r,n),Je(e,n))}function Pu(e){var r=e.memoizedState,n=0;r!==null&&(n=r.retryLane),rc(e,n)}function Mu(e,r){var n=0;switch(e.tag){case 13:var t=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:t=e.stateNode;break;default:throw Error(d(314))}t!==null&&t.delete(r),rc(e,n)}var nc;nc=function(e,r,n){if(e!==null)if(e.memoizedProps!==r.pendingProps||Ye.current)Qe=!0;else{if((e.lanes&n)===0&&(r.flags&128)===0)return Qe=!1,xu(e,r,n);Qe=(e.flags&131072)!==0}else Qe=!1,ye&&(r.flags&1048576)!==0&&Il(r,gi,r.index);switch(r.lanes=0,r.tag){case 2:var t=r.type;Ai(e,r),e=r.pendingProps;var i=An(r,Oe.current);In(r,n),i=us(null,r,t,e,i,n);var s=ms();return r.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Ke(t)?(s=!0,pi(r)):s=!1,r.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,as(r),i.updater=zi,r.stateNode=i,i._reactInternals=r,ys(r,t,e,n),r=Ss(null,r,t,!0,s,n)):(r.tag=0,ye&&s&&Ka(r),We(null,r,i,n),r=r.child),r;case 16:t=r.elementType;e:{switch(Ai(e,r),e=r.pendingProps,i=t._init,t=i(t._payload),r.type=t,i=r.tag=Iu(t),e=hr(t,e),i){case 0:r=ks(null,r,t,e,n);break e;case 1:r=Ld(null,r,t,e,n);break e;case 11:r=Sd(null,r,t,e,n);break e;case 14:r=Ed(null,r,t,hr(t.type,e),n);break e}throw Error(d(306,t,""))}return r;case 0:return t=r.type,i=r.pendingProps,i=r.elementType===t?i:hr(t,i),ks(e,r,t,i,n);case 1:return t=r.type,i=r.pendingProps,i=r.elementType===t?i:hr(t,i),Ld(e,r,t,i,n);case 3:e:{if(Ad(r),e===null)throw Error(d(387));t=r.pendingProps,s=r.memoizedState,i=s.element,$l(e,r),xi(r,t,null,n);var c=r.memoizedState;if(t=c.element,s.isDehydrated)if(s={element:t,isDehydrated:!1,cache:c.cache,pendingSuspenseBoundaries:c.pendingSuspenseBoundaries,transitions:c.transitions},r.updateQueue.baseState=s,r.memoizedState=s,r.flags&256){i=Bn(Error(d(423)),r),r=Nd(e,r,t,n,i);break e}else if(t!==i){i=Bn(Error(d(424)),r),r=Nd(e,r,t,n,i);break e}else for(tr=Ur(r.stateNode.containerInfo.firstChild),nr=r,ye=!0,gr=null,n=Ol(r,null,t,n),r.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Pn(),t===i){r=Mr(e,r,n);break e}We(e,r,t,n)}r=r.child}return r;case 5:return ql(r),e===null&&Ja(r),t=r.type,i=r.pendingProps,s=e!==null?e.memoizedProps:null,c=i.children,Ua(t,i)?c=null:s!==null&&Ua(t,s)&&(r.flags|=32),zd(e,r),We(e,r,c,n),r.child;case 6:return e===null&&Ja(r),null;case 13:return Rd(e,r,n);case 4:return ss(r,r.stateNode.containerInfo),t=r.pendingProps,e===null?r.child=Mn(r,null,t,n):We(e,r,t,n),r.child;case 11:return t=r.type,i=r.pendingProps,i=r.elementType===t?i:hr(t,i),Sd(e,r,t,i,n);case 7:return We(e,r,r.pendingProps,n),r.child;case 8:return We(e,r,r.pendingProps.children,n),r.child;case 12:return We(e,r,r.pendingProps.children,n),r.child;case 10:e:{if(t=r.type._context,i=r.pendingProps,s=r.memoizedProps,c=i.value,me(vi,t._currentValue),t._currentValue=c,s!==null)if(mr(s.value,c)){if(s.children===i.children&&!Ye.current){r=Mr(e,r,n);break e}}else for(s=r.child,s!==null&&(s.return=r);s!==null;){var m=s.dependencies;if(m!==null){c=s.child;for(var h=m.firstContext;h!==null;){if(h.context===t){if(s.tag===1){h=Pr(-1,n&-n),h.tag=2;var j=s.updateQueue;if(j!==null){j=j.shared;var N=j.pending;N===null?h.next=h:(h.next=N.next,N.next=h),j.pending=h}}s.lanes|=n,h=s.alternate,h!==null&&(h.lanes|=n),ts(s.return,n,r),m.lanes|=n;break}h=h.next}}else if(s.tag===10)c=s.type===r.type?null:s.child;else if(s.tag===18){if(c=s.return,c===null)throw Error(d(341));c.lanes|=n,m=c.alternate,m!==null&&(m.lanes|=n),ts(c,n,r),c=s.sibling}else c=s.child;if(c!==null)c.return=s;else for(c=s;c!==null;){if(c===r){c=null;break}if(s=c.sibling,s!==null){s.return=c.return,c=s;break}c=c.return}s=c}We(e,r,i.children,n),r=r.child}return r;case 9:return i=r.type,t=r.pendingProps.children,In(r,n),i=lr(i),t=t(i),r.flags|=1,We(e,r,t,n),r.child;case 14:return t=r.type,i=hr(t,r.pendingProps),i=hr(t.type,i),Ed(e,r,t,i,n);case 15:return jd(e,r,r.type,r.pendingProps,n);case 17:return t=r.type,i=r.pendingProps,i=r.elementType===t?i:hr(t,i),Ai(e,r),r.tag=1,Ke(t)?(e=!0,pi(r)):e=!1,In(r,n),fd(r,t,i),ys(r,t,i,n),Ss(null,r,t,!0,e,n);case 19:return Md(e,r,n);case 22:return Cd(e,r,n)}throw Error(d(156,r.tag))};function tc(e,r){return Do(e,r)}function Tu(e,r,n,t){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pr(e,r,n,t){return new Tu(e,r,n,t)}function Us(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Iu(e){if(typeof e=="function")return Us(e)?1:0;if(e!=null){if(e=e.$$typeof,e===we)return 11;if(e===Le)return 14}return 2}function en(e,r){var n=e.alternate;return n===null?(n=pr(e.tag,r,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=r,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,r=e.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Hi(e,r,n,t,i,s){var c=2;if(t=e,typeof e=="function")Us(e)&&(c=1);else if(typeof e=="string")c=5;else e:switch(e){case ge:return fn(n.children,i,s,r);case Ee:c=8,i|=8;break;case X:return e=pr(12,n,r,i|2),e.elementType=X,e.lanes=s,e;case ze:return e=pr(13,n,r,i),e.elementType=ze,e.lanes=s,e;case Me:return e=pr(19,n,r,i),e.elementType=Me,e.lanes=s,e;case ve:return Vi(n,i,s,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case de:c=10;break e;case Ce:c=9;break e;case we:c=11;break e;case Le:c=14;break e;case Ve:c=16,t=null;break e}throw Error(d(130,e==null?e:typeof e,""))}return r=pr(c,n,r,i),r.elementType=e,r.type=t,r.lanes=s,r}function fn(e,r,n,t){return e=pr(7,e,t,r),e.lanes=n,e}function Vi(e,r,n,t){return e=pr(22,e,t,r),e.elementType=ve,e.lanes=n,e.stateNode={isHidden:!1},e}function $s(e,r,n){return e=pr(6,e,null,r),e.lanes=n,e}function Gs(e,r,n){return r=pr(4,e.children!==null?e.children:[],e.key,r),r.lanes=n,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function Du(e,r,n,t,i){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ba(0),this.expirationTimes=ba(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ba(0),this.identifierPrefix=t,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ws(e,r,n,t,i,s,c,m,h){return e=new Du(e,r,n,m,h),r===1?(r=1,s===!0&&(r|=8)):r=0,s=pr(3,null,null,r),e.current=s,s.stateNode=e,s.memoizedState={element:t,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},as(s),e}function Bu(e,r,n){var t=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:le,key:t==null?null:""+t,children:e,containerInfo:r,implementation:n}}function ic(e){if(!e)return Gr;e=e._reactInternals;e:{if(tn(e)!==e||e.tag!==1)throw Error(d(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Ke(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(d(171))}if(e.tag===1){var n=e.type;if(Ke(n))return Pl(e,n,r)}return r}function ac(e,r,n,t,i,s,c,m,h){return e=Ws(n,t,!0,e,i,s,c,m,h),e.context=ic(null),n=e.current,t=qe(),i=Jr(n),s=Pr(t,i),s.callback=r??null,Yr(n,s,i),e.current.lanes=i,Zn(e,i,t),Je(e,t),e}function Oi(e,r,n,t){var i=r.current,s=qe(),c=Jr(i);return n=ic(n),r.context===null?r.context=n:r.pendingContext=n,r=Pr(s,c),r.payload={element:e},t=t===void 0?null:t,t!==null&&(r.callback=t),e=Yr(i,r,c),e!==null&&(br(e,i,c,s),yi(e,i,c)),c}function Ui(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function sc(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<r?n:r}}function qs(e,r){sc(e,r),(e=e.alternate)&&sc(e,r)}function Fu(){return null}var oc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ys(e){this._internalRoot=e}$i.prototype.render=Ys.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(d(409));Oi(e,r,null,null)},$i.prototype.unmount=Ys.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;mn(function(){Oi(null,e,null,null)}),r[zr]=null}};function $i(e){this._internalRoot=e}$i.prototype.unstable_scheduleHydration=function(e){if(e){var r=$o();e={blockedOn:null,target:e,priority:r};for(var n=0;n<Hr.length&&r!==0&&r<Hr[n].priority;n++);Hr.splice(n,0,e),n===0&&qo(e)}};function Ks(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Gi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function lc(){}function _u(e,r,n,t,i){if(i){if(typeof t=="function"){var s=t;t=function(){var j=Ui(c);s.call(j)}}var c=ac(r,t,e,0,null,!1,!1,"",lc);return e._reactRootContainer=c,e[zr]=c.current,mt(e.nodeType===8?e.parentNode:e),mn(),c}for(;i=e.lastChild;)e.removeChild(i);if(typeof t=="function"){var m=t;t=function(){var j=Ui(h);m.call(j)}}var h=Ws(e,0,!1,null,null,!1,!1,"",lc);return e._reactRootContainer=h,e[zr]=h.current,mt(e.nodeType===8?e.parentNode:e),mn(function(){Oi(r,h,n,t)}),h}function Wi(e,r,n,t,i){var s=n._reactRootContainer;if(s){var c=s;if(typeof i=="function"){var m=i;i=function(){var h=Ui(c);m.call(h)}}Oi(r,c,e,i)}else c=_u(n,r,e,i,t);return Ui(c)}Oo=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var n=Jn(r.pendingLanes);n!==0&&(ya(r,n|1),Je(r,Ae()),(ie&6)===0&&(Hn=Ae()+500,Wr()))}break;case 13:mn(function(){var t=Rr(e,1);if(t!==null){var i=qe();br(t,e,1,i)}}),qs(e,1)}},xa=function(e){if(e.tag===13){var r=Rr(e,134217728);if(r!==null){var n=qe();br(r,e,134217728,n)}qs(e,134217728)}},Uo=function(e){if(e.tag===13){var r=Jr(e),n=Rr(e,r);if(n!==null){var t=qe();br(n,e,r,t)}qs(e,r)}},$o=function(){return pe},Go=function(e,r){var n=pe;try{return pe=e,r()}finally{pe=n}},ua=function(e,r,n){switch(r){case"input":if(ia(e,n),r=n.name,n.type==="radio"&&r!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<n.length;r++){var t=n[r];if(t!==e&&t.form===e.form){var i=di(t);if(!i)throw Error(d(90));ho(t),ia(t,i)}}}break;case"textarea":xo(e,n);break;case"select":r=n.value,r!=null&&vn(e,!!n.multiple,r,!1)}},Ao=Hs,No=mn;var Hu={usingClientEntryPoint:!1,Events:[ft,zn,di,zo,Lo,Hs]},Nt={findFiberByHostInstance:an,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Vu={bundleType:Nt.bundleType,version:Nt.version,rendererPackageName:Nt.rendererPackageName,rendererConfig:Nt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:J.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=To(e),e===null?null:e.stateNode},findFiberByHostInstance:Nt.findFiberByHostInstance||Fu,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qi.isDisabled&&qi.supportsFiber)try{$t=qi.inject(Vu),xr=qi}catch{}}return Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hu,Ze.createPortal=function(e,r){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ks(r))throw Error(d(200));return Bu(e,r,null,n)},Ze.createRoot=function(e,r){if(!Ks(e))throw Error(d(299));var n=!1,t="",i=oc;return r!=null&&(r.unstable_strictMode===!0&&(n=!0),r.identifierPrefix!==void 0&&(t=r.identifierPrefix),r.onRecoverableError!==void 0&&(i=r.onRecoverableError)),r=Ws(e,1,!1,null,null,n,!1,t,i),e[zr]=r.current,mt(e.nodeType===8?e.parentNode:e),new Ys(r)},Ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=To(r),e=e===null?null:e.stateNode,e},Ze.flushSync=function(e){return mn(e)},Ze.hydrate=function(e,r,n){if(!Gi(r))throw Error(d(200));return Wi(null,e,r,!0,n)},Ze.hydrateRoot=function(e,r,n){if(!Ks(e))throw Error(d(405));var t=n!=null&&n.hydratedSources||null,i=!1,s="",c=oc;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(c=n.onRecoverableError)),r=ac(r,null,e,1,n??null,i,!1,s,c),e[zr]=r.current,mt(e),t)for(e=0;e<t.length;e++)n=t[e],i=n._getVersion,i=i(n._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[n,i]:r.mutableSourceEagerHydrationData.push(n,i);return new $i(r)},Ze.render=function(e,r,n){if(!Gi(r))throw Error(d(200));return Wi(null,e,r,!1,n)},Ze.unmountComponentAtNode=function(e){if(!Gi(e))throw Error(d(40));return e._reactRootContainer?(mn(function(){Wi(null,null,e,!1,function(){e._reactRootContainer=null,e[zr]=null})}),!0):!1},Ze.unstable_batchedUpdates=Hs,Ze.unstable_renderSubtreeIntoContainer=function(e,r,n,t){if(!Gi(n))throw Error(d(200));if(e==null||e._reactInternals===void 0)throw Error(d(38));return Wi(e,r,n,!1,t)},Ze.version="18.3.1-next-f1338f8080-20240426",Ze}var fc;function Qu(){if(fc)return Js.exports;fc=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(l){console.error(l)}}return o(),Js.exports=Ku(),Js.exports}var vc;function Xu(){if(vc)return Yi;vc=1;var o=Qu();return Yi.createRoot=o.createRoot,Yi.hydrateRoot=o.hydrateRoot,Yi}var Ju=Xu();const Zu=Lc(Ju);/**
 * react-router v7.13.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var bc="popstate";function yc(o){return typeof o=="object"&&o!=null&&"pathname"in o&&"search"in o&&"hash"in o&&"state"in o&&"key"in o}function em(o={}){function l(p,u){var E;let g=(E=u.state)==null?void 0:E.masked,{pathname:v,search:b,hash:k}=g||p.location;return ao("",{pathname:v,search:b,hash:k},u.state&&u.state.usr||null,u.state&&u.state.key||"default",g?{pathname:p.location.pathname,search:p.location.search,hash:p.location.hash}:void 0)}function d(p,u){return typeof u=="string"?u:Tt(u)}return nm(l,d,null,o)}function xe(o,l){if(o===!1||o===null||typeof o>"u")throw new Error(l)}function yr(o,l){if(!o){typeof console<"u"&&console.warn(l);try{throw new Error(l)}catch{}}}function rm(){return Math.random().toString(36).substring(2,10)}function xc(o,l){return{usr:o.state,key:o.key,idx:l,masked:o.unstable_mask?{pathname:o.pathname,search:o.search,hash:o.hash}:void 0}}function ao(o,l,d=null,p,u){return{pathname:typeof o=="string"?o:o.pathname,search:"",hash:"",...typeof l=="string"?Un(l):l,state:d,key:l&&l.key||p||rm(),unstable_mask:u}}function Tt({pathname:o="/",search:l="",hash:d=""}){return l&&l!=="?"&&(o+=l.charAt(0)==="?"?l:"?"+l),d&&d!=="#"&&(o+=d.charAt(0)==="#"?d:"#"+d),o}function Un(o){let l={};if(o){let d=o.indexOf("#");d>=0&&(l.hash=o.substring(d),o=o.substring(0,d));let p=o.indexOf("?");p>=0&&(l.search=o.substring(p),o=o.substring(0,p)),o&&(l.pathname=o)}return l}function nm(o,l,d,p={}){let{window:u=document.defaultView,v5Compat:g=!1}=p,v=u.history,b="POP",k=null,E=C();E==null&&(E=0,v.replaceState({...v.state,idx:E},""));function C(){return(v.state||{idx:null}).idx}function z(){b="POP";let P=C(),B=P==null?null:P-E;E=P,k&&k({action:b,location:I.location,delta:B})}function M(P,B){b="PUSH";let q=yc(P)?P:ao(I.location,P,B);E=C()+1;let _=xc(q,E),J=I.createHref(q.unstable_mask||q);try{v.pushState(_,"",J)}catch(ee){if(ee instanceof DOMException&&ee.name==="DataCloneError")throw ee;u.location.assign(J)}g&&k&&k({action:b,location:I.location,delta:1})}function D(P,B){b="REPLACE";let q=yc(P)?P:ao(I.location,P,B);E=C();let _=xc(q,E),J=I.createHref(q.unstable_mask||q);v.replaceState(_,"",J),g&&k&&k({action:b,location:I.location,delta:0})}function U(P){return tm(P)}let I={get action(){return b},get location(){return o(u,v)},listen(P){if(k)throw new Error("A history only accepts one active listener");return u.addEventListener(bc,z),k=P,()=>{u.removeEventListener(bc,z),k=null}},createHref(P){return l(u,P)},createURL:U,encodeLocation(P){let B=U(P);return{pathname:B.pathname,search:B.search,hash:B.hash}},push:M,replace:D,go(P){return v.go(P)}};return I}function tm(o,l=!1){let d="http://localhost";typeof window<"u"&&(d=window.location.origin!=="null"?window.location.origin:window.location.href),xe(d,"No window.location.(origin|href) available to create URL");let p=typeof o=="string"?o:Tt(o);return p=p.replace(/ $/,"%20"),!l&&p.startsWith("//")&&(p=d+p),new URL(p,d)}function Ac(o,l,d="/"){return im(o,l,d,!1)}function im(o,l,d,p){let u=typeof l=="string"?Un(l):l,g=Ir(u.pathname||"/",d);if(g==null)return null;let v=Nc(o);am(v);let b=null;for(let k=0;b==null&&k<v.length;++k){let E=fm(g);b=gm(v[k],E,p)}return b}function Nc(o,l=[],d=[],p="",u=!1){let g=(v,b,k=u,E)=>{let C={relativePath:E===void 0?v.path||"":E,caseSensitive:v.caseSensitive===!0,childrenIndex:b,route:v};if(C.relativePath.startsWith("/")){if(!C.relativePath.startsWith(p)&&k)return;xe(C.relativePath.startsWith(p),`Absolute route path "${C.relativePath}" nested under path "${p}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),C.relativePath=C.relativePath.slice(p.length)}let z=jr([p,C.relativePath]),M=d.concat(C);v.children&&v.children.length>0&&(xe(v.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${z}".`),Nc(v.children,l,M,z,k)),!(v.path==null&&!v.index)&&l.push({path:z,score:um(z,v.index),routesMeta:M})};return o.forEach((v,b)=>{var k;if(v.path===""||!((k=v.path)!=null&&k.includes("?")))g(v,b);else for(let E of Rc(v.path))g(v,b,!0,E)}),l}function Rc(o){let l=o.split("/");if(l.length===0)return[];let[d,...p]=l,u=d.endsWith("?"),g=d.replace(/\?$/,"");if(p.length===0)return u?[g,""]:[g];let v=Rc(p.join("/")),b=[];return b.push(...v.map(k=>k===""?g:[g,k].join("/"))),u&&b.push(...v),b.map(k=>o.startsWith("/")&&k===""?"/":k)}function am(o){o.sort((l,d)=>l.score!==d.score?d.score-l.score:mm(l.routesMeta.map(p=>p.childrenIndex),d.routesMeta.map(p=>p.childrenIndex)))}var sm=/^:[\w-]+$/,om=3,lm=2,dm=1,cm=10,pm=-2,wc=o=>o==="*";function um(o,l){let d=o.split("/"),p=d.length;return d.some(wc)&&(p+=pm),l&&(p+=lm),d.filter(u=>!wc(u)).reduce((u,g)=>u+(sm.test(g)?om:g===""?dm:cm),p)}function mm(o,l){return o.length===l.length&&o.slice(0,-1).every((p,u)=>p===l[u])?o[o.length-1]-l[l.length-1]:0}function gm(o,l,d=!1){let{routesMeta:p}=o,u={},g="/",v=[];for(let b=0;b<p.length;++b){let k=p[b],E=b===p.length-1,C=g==="/"?l:l.slice(g.length)||"/",z=Ji({path:k.relativePath,caseSensitive:k.caseSensitive,end:E},C),M=k.route;if(!z&&E&&d&&!p[p.length-1].route.index&&(z=Ji({path:k.relativePath,caseSensitive:k.caseSensitive,end:!1},C)),!z)return null;Object.assign(u,z.params),v.push({params:u,pathname:jr([g,z.pathname]),pathnameBase:xm(jr([g,z.pathnameBase])),route:M}),z.pathnameBase!=="/"&&(g=jr([g,z.pathnameBase]))}return v}function Ji(o,l){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[d,p]=hm(o.path,o.caseSensitive,o.end),u=l.match(d);if(!u)return null;let g=u[0],v=g.replace(/(.)\/+$/,"$1"),b=u.slice(1);return{params:p.reduce((E,{paramName:C,isOptional:z},M)=>{if(C==="*"){let U=b[M]||"";v=g.slice(0,g.length-U.length).replace(/(.)\/+$/,"$1")}const D=b[M];return z&&!D?E[C]=void 0:E[C]=(D||"").replace(/%2F/g,"/"),E},{}),pathname:g,pathnameBase:v,pattern:o}}function hm(o,l=!1,d=!0){yr(o==="*"||!o.endsWith("*")||o.endsWith("/*"),`Route path "${o}" will be treated as if it were "${o.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${o.replace(/\*$/,"/*")}".`);let p=[],u="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(v,b,k,E,C)=>{if(p.push({paramName:b,isOptional:k!=null}),k){let z=C.charAt(E+v.length);return z&&z!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return o.endsWith("*")?(p.push({paramName:"*"}),u+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):d?u+="\\/*$":o!==""&&o!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,l?void 0:"i"),p]}function fm(o){try{return o.split("/").map(l=>decodeURIComponent(l).replace(/\//g,"%2F")).join("/")}catch(l){return yr(!1,`The URL path "${o}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${l}).`),o}}function Ir(o,l){if(l==="/")return o;if(!o.toLowerCase().startsWith(l.toLowerCase()))return null;let d=l.endsWith("/")?l.length-1:l.length,p=o.charAt(d);return p&&p!=="/"?null:o.slice(d)||"/"}var vm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function bm(o,l="/"){let{pathname:d,search:p="",hash:u=""}=typeof o=="string"?Un(o):o,g;return d?(d=d.replace(/\/\/+/g,"/"),d.startsWith("/")?g=kc(d.substring(1),"/"):g=kc(d,l)):g=l,{pathname:g,search:wm(p),hash:km(u)}}function kc(o,l){let d=l.replace(/\/+$/,"").split("/");return o.split("/").forEach(u=>{u===".."?d.length>1&&d.pop():u!=="."&&d.push(u)}),d.length>1?d.join("/"):"/"}function ro(o,l,d,p){return`Cannot include a '${o}' character in a manually specified \`to.${l}\` field [${JSON.stringify(p)}].  Please separate it out to the \`to.${d}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function ym(o){return o.filter((l,d)=>d===0||l.route.path&&l.route.path.length>0)}function lo(o){let l=ym(o);return l.map((d,p)=>p===l.length-1?d.pathname:d.pathnameBase)}function Zi(o,l,d,p=!1){let u;typeof o=="string"?u=Un(o):(u={...o},xe(!u.pathname||!u.pathname.includes("?"),ro("?","pathname","search",u)),xe(!u.pathname||!u.pathname.includes("#"),ro("#","pathname","hash",u)),xe(!u.search||!u.search.includes("#"),ro("#","search","hash",u)));let g=o===""||u.pathname==="",v=g?"/":u.pathname,b;if(v==null)b=d;else{let z=l.length-1;if(!p&&v.startsWith("..")){let M=v.split("/");for(;M[0]==="..";)M.shift(),z-=1;u.pathname=M.join("/")}b=z>=0?l[z]:"/"}let k=bm(u,b),E=v&&v!=="/"&&v.endsWith("/"),C=(g||v===".")&&d.endsWith("/");return!k.pathname.endsWith("/")&&(E||C)&&(k.pathname+="/"),k}var jr=o=>o.join("/").replace(/\/\/+/g,"/"),xm=o=>o.replace(/\/+$/,"").replace(/^\/*/,"/"),wm=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,km=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o,Sm=class{constructor(o,l,d,p=!1){this.status=o,this.statusText=l||"",this.internal=p,d instanceof Error?(this.data=d.toString(),this.error=d):this.data=d}};function Em(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}function jm(o){return o.map(l=>l.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Pc=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Mc(o,l){let d=o;if(typeof d!="string"||!vm.test(d))return{absoluteURL:void 0,isExternal:!1,to:d};let p=d,u=!1;if(Pc)try{let g=new URL(window.location.href),v=d.startsWith("//")?new URL(g.protocol+d):new URL(d),b=Ir(v.pathname,l);v.origin===g.origin&&b!=null?d=b+v.search+v.hash:u=!0}catch{yr(!1,`<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:p,isExternal:u,to:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Tc=["POST","PUT","PATCH","DELETE"];new Set(Tc);var Cm=["GET",...Tc];new Set(Cm);var $n=y.createContext(null);$n.displayName="DataRouter";var ea=y.createContext(null);ea.displayName="DataRouterState";var zm=y.createContext(!1),Ic=y.createContext({isTransitioning:!1});Ic.displayName="ViewTransition";var Lm=y.createContext(new Map);Lm.displayName="Fetchers";var Am=y.createContext(null);Am.displayName="Await";var ar=y.createContext(null);ar.displayName="Navigation";var It=y.createContext(null);It.displayName="Location";var Cr=y.createContext({outlet:null,matches:[],isDataRoute:!1});Cr.displayName="Route";var co=y.createContext(null);co.displayName="RouteError";var Dc="REACT_ROUTER_ERROR",Nm="REDIRECT",Rm="ROUTE_ERROR_RESPONSE";function Pm(o){if(o.startsWith(`${Dc}:${Nm}:{`))try{let l=JSON.parse(o.slice(28));if(typeof l=="object"&&l&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.location=="string"&&typeof l.reloadDocument=="boolean"&&typeof l.replace=="boolean")return l}catch{}}function Mm(o){if(o.startsWith(`${Dc}:${Rm}:{`))try{let l=JSON.parse(o.slice(40));if(typeof l=="object"&&l&&typeof l.status=="number"&&typeof l.statusText=="string")return new Sm(l.status,l.statusText,l.data)}catch{}}function Tm(o,{relative:l}={}){xe(Gn(),"useHref() may be used only in the context of a <Router> component.");let{basename:d,navigator:p}=y.useContext(ar),{hash:u,pathname:g,search:v}=Dt(o,{relative:l}),b=g;return d!=="/"&&(b=g==="/"?d:jr([d,g])),p.createHref({pathname:b,search:v,hash:u})}function Gn(){return y.useContext(It)!=null}function Dr(){return xe(Gn(),"useLocation() may be used only in the context of a <Router> component."),y.useContext(It).location}var Bc="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Fc(o){y.useContext(ar).static||y.useLayoutEffect(o)}function ra(){let{isDataRoute:o}=y.useContext(Cr);return o?qm():Im()}function Im(){xe(Gn(),"useNavigate() may be used only in the context of a <Router> component.");let o=y.useContext($n),{basename:l,navigator:d}=y.useContext(ar),{matches:p}=y.useContext(Cr),{pathname:u}=Dr(),g=JSON.stringify(lo(p)),v=y.useRef(!1);return Fc(()=>{v.current=!0}),y.useCallback((k,E={})=>{if(yr(v.current,Bc),!v.current)return;if(typeof k=="number"){d.go(k);return}let C=Zi(k,JSON.parse(g),u,E.relative==="path");o==null&&l!=="/"&&(C.pathname=C.pathname==="/"?l:jr([l,C.pathname])),(E.replace?d.replace:d.push)(C,E.state,E)},[l,d,g,u,o])}y.createContext(null);function Dt(o,{relative:l}={}){let{matches:d}=y.useContext(Cr),{pathname:p}=Dr(),u=JSON.stringify(lo(d));return y.useMemo(()=>Zi(o,JSON.parse(u),p,l==="path"),[o,u,p,l])}function Dm(o,l){return _c(o,l)}function _c(o,l,d){var P;xe(Gn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:p}=y.useContext(ar),{matches:u}=y.useContext(Cr),g=u[u.length-1],v=g?g.params:{},b=g?g.pathname:"/",k=g?g.pathnameBase:"/",E=g&&g.route;{let B=E&&E.path||"";Vc(b,!E||B.endsWith("*")||B.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${b}" (under <Route path="${B}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${B}"> to <Route path="${B==="/"?"*":`${B}/*`}">.`)}let C=Dr(),z;if(l){let B=typeof l=="string"?Un(l):l;xe(k==="/"||((P=B.pathname)==null?void 0:P.startsWith(k)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${k}" but pathname "${B.pathname}" was given in the \`location\` prop.`),z=B}else z=C;let M=z.pathname||"/",D=M;if(k!=="/"){let B=k.replace(/^\//,"").split("/");D="/"+M.replace(/^\//,"").split("/").slice(B.length).join("/")}let U=Ac(o,{pathname:D});yr(E||U!=null,`No routes matched location "${z.pathname}${z.search}${z.hash}" `),yr(U==null||U[U.length-1].route.element!==void 0||U[U.length-1].route.Component!==void 0||U[U.length-1].route.lazy!==void 0,`Matched leaf route at location "${z.pathname}${z.search}${z.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let I=Vm(U&&U.map(B=>Object.assign({},B,{params:Object.assign({},v,B.params),pathname:jr([k,p.encodeLocation?p.encodeLocation(B.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:B.pathname]),pathnameBase:B.pathnameBase==="/"?k:jr([k,p.encodeLocation?p.encodeLocation(B.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:B.pathnameBase])})),u,d);return l&&I?y.createElement(It.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...z},navigationType:"POP"}},I):I}function Bm(){let o=Wm(),l=Em(o)?`${o.status} ${o.statusText}`:o instanceof Error?o.message:JSON.stringify(o),d=o instanceof Error?o.stack:null,p="rgba(200,200,200, 0.5)",u={padding:"0.5rem",backgroundColor:p},g={padding:"2px 4px",backgroundColor:p},v=null;return console.error("Error handled by React Router default ErrorBoundary:",o),v=y.createElement(y.Fragment,null,y.createElement("p",null,"💿 Hey developer 👋"),y.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",y.createElement("code",{style:g},"ErrorBoundary")," or"," ",y.createElement("code",{style:g},"errorElement")," prop on your route.")),y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},l),d?y.createElement("pre",{style:u},d):null,v)}var Fm=y.createElement(Bm,null),Hc=class extends y.Component{constructor(o){super(o),this.state={location:o.location,revalidation:o.revalidation,error:o.error}}static getDerivedStateFromError(o){return{error:o}}static getDerivedStateFromProps(o,l){return l.location!==o.location||l.revalidation!=="idle"&&o.revalidation==="idle"?{error:o.error,location:o.location,revalidation:o.revalidation}:{error:o.error!==void 0?o.error:l.error,location:l.location,revalidation:o.revalidation||l.revalidation}}componentDidCatch(o,l){this.props.onError?this.props.onError(o,l):console.error("React Router caught the following error during render",o)}render(){let o=this.state.error;if(this.context&&typeof o=="object"&&o&&"digest"in o&&typeof o.digest=="string"){const d=Mm(o.digest);d&&(o=d)}let l=o!==void 0?y.createElement(Cr.Provider,{value:this.props.routeContext},y.createElement(co.Provider,{value:o,children:this.props.component})):this.props.children;return this.context?y.createElement(_m,{error:o},l):l}};Hc.contextType=zm;var no=new WeakMap;function _m({children:o,error:l}){let{basename:d}=y.useContext(ar);if(typeof l=="object"&&l&&"digest"in l&&typeof l.digest=="string"){let p=Pm(l.digest);if(p){let u=no.get(l);if(u)throw u;let g=Mc(p.location,d);if(Pc&&!no.get(l))if(g.isExternal||p.reloadDocument)window.location.href=g.absoluteURL||g.to;else{const v=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(g.to,{replace:p.replace}));throw no.set(l,v),v}return y.createElement("meta",{httpEquiv:"refresh",content:`0;url=${g.absoluteURL||g.to}`})}}return o}function Hm({routeContext:o,match:l,children:d}){let p=y.useContext($n);return p&&p.static&&p.staticContext&&(l.route.errorElement||l.route.ErrorBoundary)&&(p.staticContext._deepestRenderedBoundaryId=l.route.id),y.createElement(Cr.Provider,{value:o},d)}function Vm(o,l=[],d){let p=d==null?void 0:d.state;if(o==null){if(!p)return null;if(p.errors)o=p.matches;else if(l.length===0&&!p.initialized&&p.matches.length>0)o=p.matches;else return null}let u=o,g=p==null?void 0:p.errors;if(g!=null){let C=u.findIndex(z=>z.route.id&&(g==null?void 0:g[z.route.id])!==void 0);xe(C>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(g).join(",")}`),u=u.slice(0,Math.min(u.length,C+1))}let v=!1,b=-1;if(d&&p){v=p.renderFallback;for(let C=0;C<u.length;C++){let z=u[C];if((z.route.HydrateFallback||z.route.hydrateFallbackElement)&&(b=C),z.route.id){let{loaderData:M,errors:D}=p,U=z.route.loader&&!M.hasOwnProperty(z.route.id)&&(!D||D[z.route.id]===void 0);if(z.route.lazy||U){d.isStatic&&(v=!0),b>=0?u=u.slice(0,b+1):u=[u[0]];break}}}}let k=d==null?void 0:d.onError,E=p&&k?(C,z)=>{var M,D;k(C,{location:p.location,params:((D=(M=p.matches)==null?void 0:M[0])==null?void 0:D.params)??{},unstable_pattern:jm(p.matches),errorInfo:z})}:void 0;return u.reduceRight((C,z,M)=>{let D,U=!1,I=null,P=null;p&&(D=g&&z.route.id?g[z.route.id]:void 0,I=z.route.errorElement||Fm,v&&(b<0&&M===0?(Vc("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),U=!0,P=null):b===M&&(U=!0,P=z.route.hydrateFallbackElement||null)));let B=l.concat(u.slice(0,M+1)),q=()=>{let _;return D?_=I:U?_=P:z.route.Component?_=y.createElement(z.route.Component,null):z.route.element?_=z.route.element:_=C,y.createElement(Hm,{match:z,routeContext:{outlet:C,matches:B,isDataRoute:p!=null},children:_})};return p&&(z.route.ErrorBoundary||z.route.errorElement||M===0)?y.createElement(Hc,{location:p.location,revalidation:p.revalidation,component:I,error:D,children:q(),routeContext:{outlet:null,matches:B,isDataRoute:!0},onError:E}):q()},null)}function po(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Om(o){let l=y.useContext($n);return xe(l,po(o)),l}function Um(o){let l=y.useContext(ea);return xe(l,po(o)),l}function $m(o){let l=y.useContext(Cr);return xe(l,po(o)),l}function uo(o){let l=$m(o),d=l.matches[l.matches.length-1];return xe(d.route.id,`${o} can only be used on routes that contain a unique "id"`),d.route.id}function Gm(){return uo("useRouteId")}function Wm(){var p;let o=y.useContext(co),l=Um("useRouteError"),d=uo("useRouteError");return o!==void 0?o:(p=l.errors)==null?void 0:p[d]}function qm(){let{router:o}=Om("useNavigate"),l=uo("useNavigate"),d=y.useRef(!1);return Fc(()=>{d.current=!0}),y.useCallback(async(u,g={})=>{yr(d.current,Bc),d.current&&(typeof u=="number"?await o.navigate(u):await o.navigate(u,{fromRouteId:l,...g}))},[o,l])}var Sc={};function Vc(o,l,d){!l&&!Sc[o]&&(Sc[o]=!0,yr(!1,d))}y.memo(Ym);function Ym({routes:o,future:l,state:d,isStatic:p,onError:u}){return _c(o,void 0,{state:d,isStatic:p,onError:u})}function Km({to:o,replace:l,state:d,relative:p}){xe(Gn(),"<Navigate> may be used only in the context of a <Router> component.");let{static:u}=y.useContext(ar);yr(!u,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:g}=y.useContext(Cr),{pathname:v}=Dr(),b=ra(),k=Zi(o,lo(g),v,p==="path"),E=JSON.stringify(k);return y.useEffect(()=>{b(JSON.parse(E),{replace:l,state:d,relative:p})},[b,E,p,l,d]),null}function nn(o){xe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Qm({basename:o="/",children:l=null,location:d,navigationType:p="POP",navigator:u,static:g=!1,unstable_useTransitions:v}){xe(!Gn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let b=o.replace(/^\/*/,"/"),k=y.useMemo(()=>({basename:b,navigator:u,static:g,unstable_useTransitions:v,future:{}}),[b,u,g,v]);typeof d=="string"&&(d=Un(d));let{pathname:E="/",search:C="",hash:z="",state:M=null,key:D="default",unstable_mask:U}=d,I=y.useMemo(()=>{let P=Ir(E,b);return P==null?null:{location:{pathname:P,search:C,hash:z,state:M,key:D,unstable_mask:U},navigationType:p}},[b,E,C,z,M,D,p,U]);return yr(I!=null,`<Router basename="${b}"> is not able to match the URL "${E}${C}${z}" because it does not start with the basename, so the <Router> won't render anything.`),I==null?null:y.createElement(ar.Provider,{value:k},y.createElement(It.Provider,{children:l,value:I}))}function Xm({children:o,location:l}){return Dm(so(o),l)}function so(o,l=[]){let d=[];return y.Children.forEach(o,(p,u)=>{if(!y.isValidElement(p))return;let g=[...l,u];if(p.type===y.Fragment){d.push.apply(d,so(p.props.children,g));return}xe(p.type===nn,`[${typeof p.type=="string"?p.type:p.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),xe(!p.props.index||!p.props.children,"An index route cannot have child routes.");let v={id:p.props.id||g.join("-"),caseSensitive:p.props.caseSensitive,element:p.props.element,Component:p.props.Component,index:p.props.index,path:p.props.path,middleware:p.props.middleware,loader:p.props.loader,action:p.props.action,hydrateFallbackElement:p.props.hydrateFallbackElement,HydrateFallback:p.props.HydrateFallback,errorElement:p.props.errorElement,ErrorBoundary:p.props.ErrorBoundary,hasErrorBoundary:p.props.hasErrorBoundary===!0||p.props.ErrorBoundary!=null||p.props.errorElement!=null,shouldRevalidate:p.props.shouldRevalidate,handle:p.props.handle,lazy:p.props.lazy};p.props.children&&(v.children=so(p.props.children,g)),d.push(v)}),d}var Qi="get",Xi="application/x-www-form-urlencoded";function na(o){return typeof HTMLElement<"u"&&o instanceof HTMLElement}function Jm(o){return na(o)&&o.tagName.toLowerCase()==="button"}function Zm(o){return na(o)&&o.tagName.toLowerCase()==="form"}function eg(o){return na(o)&&o.tagName.toLowerCase()==="input"}function rg(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function ng(o,l){return o.button===0&&(!l||l==="_self")&&!rg(o)}var Ki=null;function tg(){if(Ki===null)try{new FormData(document.createElement("form"),0),Ki=!1}catch{Ki=!0}return Ki}var ig=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function to(o){return o!=null&&!ig.has(o)?(yr(!1,`"${o}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Xi}"`),null):o}function ag(o,l){let d,p,u,g,v;if(Zm(o)){let b=o.getAttribute("action");p=b?Ir(b,l):null,d=o.getAttribute("method")||Qi,u=to(o.getAttribute("enctype"))||Xi,g=new FormData(o)}else if(Jm(o)||eg(o)&&(o.type==="submit"||o.type==="image")){let b=o.form;if(b==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let k=o.getAttribute("formaction")||b.getAttribute("action");if(p=k?Ir(k,l):null,d=o.getAttribute("formmethod")||b.getAttribute("method")||Qi,u=to(o.getAttribute("formenctype"))||to(b.getAttribute("enctype"))||Xi,g=new FormData(b,o),!tg()){let{name:E,type:C,value:z}=o;if(C==="image"){let M=E?`${E}.`:"";g.append(`${M}x`,"0"),g.append(`${M}y`,"0")}else E&&g.append(E,z)}}else{if(na(o))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');d=Qi,p=null,u=Xi,v=o}return g&&u==="text/plain"&&(v=g,g=void 0),{action:p,method:d.toLowerCase(),encType:u,formData:g,body:v}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function mo(o,l){if(o===!1||o===null||typeof o>"u")throw new Error(l)}function sg(o,l,d,p){let u=typeof o=="string"?new URL(o,typeof window>"u"?"server://singlefetch/":window.location.origin):o;return d?u.pathname.endsWith("/")?u.pathname=`${u.pathname}_.${p}`:u.pathname=`${u.pathname}.${p}`:u.pathname==="/"?u.pathname=`_root.${p}`:l&&Ir(u.pathname,l)==="/"?u.pathname=`${l.replace(/\/$/,"")}/_root.${p}`:u.pathname=`${u.pathname.replace(/\/$/,"")}.${p}`,u}async function og(o,l){if(o.id in l)return l[o.id];try{let d=await import(o.module);return l[o.id]=d,d}catch(d){return console.error(`Error loading route module \`${o.module}\`, reloading page...`),console.error(d),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function lg(o){return o==null?!1:o.href==null?o.rel==="preload"&&typeof o.imageSrcSet=="string"&&typeof o.imageSizes=="string":typeof o.rel=="string"&&typeof o.href=="string"}async function dg(o,l,d){let p=await Promise.all(o.map(async u=>{let g=l.routes[u.route.id];if(g){let v=await og(g,d);return v.links?v.links():[]}return[]}));return mg(p.flat(1).filter(lg).filter(u=>u.rel==="stylesheet"||u.rel==="preload").map(u=>u.rel==="stylesheet"?{...u,rel:"prefetch",as:"style"}:{...u,rel:"prefetch"}))}function Ec(o,l,d,p,u,g){let v=(k,E)=>d[E]?k.route.id!==d[E].route.id:!0,b=(k,E)=>{var C;return d[E].pathname!==k.pathname||((C=d[E].route.path)==null?void 0:C.endsWith("*"))&&d[E].params["*"]!==k.params["*"]};return g==="assets"?l.filter((k,E)=>v(k,E)||b(k,E)):g==="data"?l.filter((k,E)=>{var z;let C=p.routes[k.route.id];if(!C||!C.hasLoader)return!1;if(v(k,E)||b(k,E))return!0;if(k.route.shouldRevalidate){let M=k.route.shouldRevalidate({currentUrl:new URL(u.pathname+u.search+u.hash,window.origin),currentParams:((z=d[0])==null?void 0:z.params)||{},nextUrl:new URL(o,window.origin),nextParams:k.params,defaultShouldRevalidate:!0});if(typeof M=="boolean")return M}return!0}):[]}function cg(o,l,{includeHydrateFallback:d}={}){return pg(o.map(p=>{let u=l.routes[p.route.id];if(!u)return[];let g=[u.module];return u.clientActionModule&&(g=g.concat(u.clientActionModule)),u.clientLoaderModule&&(g=g.concat(u.clientLoaderModule)),d&&u.hydrateFallbackModule&&(g=g.concat(u.hydrateFallbackModule)),u.imports&&(g=g.concat(u.imports)),g}).flat(1))}function pg(o){return[...new Set(o)]}function ug(o){let l={},d=Object.keys(o).sort();for(let p of d)l[p]=o[p];return l}function mg(o,l){let d=new Set;return new Set(l),o.reduce((p,u)=>{let g=JSON.stringify(ug(u));return d.has(g)||(d.add(g),p.push({key:g,link:u})),p},[])}function Oc(){let o=y.useContext($n);return mo(o,"You must render this element inside a <DataRouterContext.Provider> element"),o}function gg(){let o=y.useContext(ea);return mo(o,"You must render this element inside a <DataRouterStateContext.Provider> element"),o}var go=y.createContext(void 0);go.displayName="FrameworkContext";function Uc(){let o=y.useContext(go);return mo(o,"You must render this element inside a <HydratedRouter> element"),o}function hg(o,l){let d=y.useContext(go),[p,u]=y.useState(!1),[g,v]=y.useState(!1),{onFocus:b,onBlur:k,onMouseEnter:E,onMouseLeave:C,onTouchStart:z}=l,M=y.useRef(null);y.useEffect(()=>{if(o==="render"&&v(!0),o==="viewport"){let I=B=>{B.forEach(q=>{v(q.isIntersecting)})},P=new IntersectionObserver(I,{threshold:.5});return M.current&&P.observe(M.current),()=>{P.disconnect()}}},[o]),y.useEffect(()=>{if(p){let I=setTimeout(()=>{v(!0)},100);return()=>{clearTimeout(I)}}},[p]);let D=()=>{u(!0)},U=()=>{u(!1),v(!1)};return d?o!=="intent"?[g,M,{}]:[g,M,{onFocus:Pt(b,D),onBlur:Pt(k,U),onMouseEnter:Pt(E,D),onMouseLeave:Pt(C,U),onTouchStart:Pt(z,D)}]:[!1,M,{}]}function Pt(o,l){return d=>{o&&o(d),d.defaultPrevented||l(d)}}function fg({page:o,...l}){let{router:d}=Oc(),p=y.useMemo(()=>Ac(d.routes,o,d.basename),[d.routes,o,d.basename]);return p?y.createElement(bg,{page:o,matches:p,...l}):null}function vg(o){let{manifest:l,routeModules:d}=Uc(),[p,u]=y.useState([]);return y.useEffect(()=>{let g=!1;return dg(o,l,d).then(v=>{g||u(v)}),()=>{g=!0}},[o,l,d]),p}function bg({page:o,matches:l,...d}){let p=Dr(),{future:u,manifest:g,routeModules:v}=Uc(),{basename:b}=Oc(),{loaderData:k,matches:E}=gg(),C=y.useMemo(()=>Ec(o,l,E,g,p,"data"),[o,l,E,g,p]),z=y.useMemo(()=>Ec(o,l,E,g,p,"assets"),[o,l,E,g,p]),M=y.useMemo(()=>{if(o===p.pathname+p.search+p.hash)return[];let I=new Set,P=!1;if(l.forEach(q=>{var J;let _=g.routes[q.route.id];!_||!_.hasLoader||(!C.some(ee=>ee.route.id===q.route.id)&&q.route.id in k&&((J=v[q.route.id])!=null&&J.shouldRevalidate)||_.hasClientLoader?P=!0:I.add(q.route.id))}),I.size===0)return[];let B=sg(o,b,u.unstable_trailingSlashAwareDataRequests,"data");return P&&I.size>0&&B.searchParams.set("_routes",l.filter(q=>I.has(q.route.id)).map(q=>q.route.id).join(",")),[B.pathname+B.search]},[b,u.unstable_trailingSlashAwareDataRequests,k,p,g,C,l,o,v]),D=y.useMemo(()=>cg(z,g),[z,g]),U=vg(z);return y.createElement(y.Fragment,null,M.map(I=>y.createElement("link",{key:I,rel:"prefetch",as:"fetch",href:I,...d})),D.map(I=>y.createElement("link",{key:I,rel:"modulepreload",href:I,...d})),U.map(({key:I,link:P})=>y.createElement("link",{key:I,nonce:d.nonce,...P,crossOrigin:P.crossOrigin??d.crossOrigin})))}function yg(...o){return l=>{o.forEach(d=>{typeof d=="function"?d(l):d!=null&&(d.current=l)})}}var xg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{xg&&(window.__reactRouterVersion="7.13.2")}catch{}function wg({basename:o,children:l,unstable_useTransitions:d,window:p}){let u=y.useRef();u.current==null&&(u.current=em({window:p,v5Compat:!0}));let g=u.current,[v,b]=y.useState({action:g.action,location:g.location}),k=y.useCallback(E=>{d===!1?b(E):y.startTransition(()=>b(E))},[d]);return y.useLayoutEffect(()=>g.listen(k),[g,k]),y.createElement(Qm,{basename:o,children:l,location:v.location,navigationType:v.action,navigator:g,unstable_useTransitions:d})}var $c=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,On=y.forwardRef(function({onClick:l,discover:d="render",prefetch:p="none",relative:u,reloadDocument:g,replace:v,unstable_mask:b,state:k,target:E,to:C,preventScrollReset:z,viewTransition:M,unstable_defaultShouldRevalidate:D,...U},I){let{basename:P,navigator:B,unstable_useTransitions:q}=y.useContext(ar),_=typeof C=="string"&&$c.test(C),J=Mc(C,P);C=J.to;let ee=Tm(C,{relative:u}),le=Dr(),ge=null;if(b){let Le=Zi(b,[],le.unstable_mask?le.unstable_mask.pathname:"/",!0);P!=="/"&&(Le.pathname=Le.pathname==="/"?P:jr([P,Le.pathname])),ge=B.createHref(Le)}let[Ee,X,de]=hg(p,U),Ce=Eg(C,{replace:v,unstable_mask:b,state:k,target:E,preventScrollReset:z,relative:u,viewTransition:M,unstable_defaultShouldRevalidate:D,unstable_useTransitions:q});function we(Le){l&&l(Le),Le.defaultPrevented||Ce(Le)}let ze=!(J.isExternal||g),Me=y.createElement("a",{...U,...de,href:(ze?ge:void 0)||J.absoluteURL||ee,onClick:ze?we:l,ref:yg(I,X),target:E,"data-discover":!_&&d==="render"?"true":void 0});return Ee&&!_?y.createElement(y.Fragment,null,Me,y.createElement(fg,{page:ee})):Me});On.displayName="Link";var Gc=y.forwardRef(function({"aria-current":l="page",caseSensitive:d=!1,className:p="",end:u=!1,style:g,to:v,viewTransition:b,children:k,...E},C){let z=Dt(v,{relative:E.relative}),M=Dr(),D=y.useContext(ea),{navigator:U,basename:I}=y.useContext(ar),P=D!=null&&Ag(z)&&b===!0,B=U.encodeLocation?U.encodeLocation(z).pathname:z.pathname,q=M.pathname,_=D&&D.navigation&&D.navigation.location?D.navigation.location.pathname:null;d||(q=q.toLowerCase(),_=_?_.toLowerCase():null,B=B.toLowerCase()),_&&I&&(_=Ir(_,I)||_);const J=B!=="/"&&B.endsWith("/")?B.length-1:B.length;let ee=q===B||!u&&q.startsWith(B)&&q.charAt(J)==="/",le=_!=null&&(_===B||!u&&_.startsWith(B)&&_.charAt(B.length)==="/"),ge={isActive:ee,isPending:le,isTransitioning:P},Ee=ee?l:void 0,X;typeof p=="function"?X=p(ge):X=[p,ee?"active":null,le?"pending":null,P?"transitioning":null].filter(Boolean).join(" ");let de=typeof g=="function"?g(ge):g;return y.createElement(On,{...E,"aria-current":Ee,className:X,ref:C,style:de,to:v,viewTransition:b},typeof k=="function"?k(ge):k)});Gc.displayName="NavLink";var kg=y.forwardRef(({discover:o="render",fetcherKey:l,navigate:d,reloadDocument:p,replace:u,state:g,method:v=Qi,action:b,onSubmit:k,relative:E,preventScrollReset:C,viewTransition:z,unstable_defaultShouldRevalidate:M,...D},U)=>{let{unstable_useTransitions:I}=y.useContext(ar),P=zg(),B=Lg(b,{relative:E}),q=v.toLowerCase()==="get"?"get":"post",_=typeof b=="string"&&$c.test(b),J=ee=>{if(k&&k(ee),ee.defaultPrevented)return;ee.preventDefault();let le=ee.nativeEvent.submitter,ge=(le==null?void 0:le.getAttribute("formmethod"))||v,Ee=()=>P(le||ee.currentTarget,{fetcherKey:l,method:ge,navigate:d,replace:u,state:g,relative:E,preventScrollReset:C,viewTransition:z,unstable_defaultShouldRevalidate:M});I&&d!==!1?y.startTransition(()=>Ee()):Ee()};return y.createElement("form",{ref:U,method:q,action:B,onSubmit:p?k:J,...D,"data-discover":!_&&o==="render"?"true":void 0})});kg.displayName="Form";function Sg(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Wc(o){let l=y.useContext($n);return xe(l,Sg(o)),l}function Eg(o,{target:l,replace:d,unstable_mask:p,state:u,preventScrollReset:g,relative:v,viewTransition:b,unstable_defaultShouldRevalidate:k,unstable_useTransitions:E}={}){let C=ra(),z=Dr(),M=Dt(o,{relative:v});return y.useCallback(D=>{if(ng(D,l)){D.preventDefault();let U=d!==void 0?d:Tt(z)===Tt(M),I=()=>C(o,{replace:U,unstable_mask:p,state:u,preventScrollReset:g,relative:v,viewTransition:b,unstable_defaultShouldRevalidate:k});E?y.startTransition(()=>I()):I()}},[z,C,M,d,p,u,l,o,g,v,b,k,E])}var jg=0,Cg=()=>`__${String(++jg)}__`;function zg(){let{router:o}=Wc("useSubmit"),{basename:l}=y.useContext(ar),d=Gm(),p=o.fetch,u=o.navigate;return y.useCallback(async(g,v={})=>{let{action:b,method:k,encType:E,formData:C,body:z}=ag(g,l);if(v.navigate===!1){let M=v.fetcherKey||Cg();await p(M,d,v.action||b,{unstable_defaultShouldRevalidate:v.unstable_defaultShouldRevalidate,preventScrollReset:v.preventScrollReset,formData:C,body:z,formMethod:v.method||k,formEncType:v.encType||E,flushSync:v.flushSync})}else await u(v.action||b,{unstable_defaultShouldRevalidate:v.unstable_defaultShouldRevalidate,preventScrollReset:v.preventScrollReset,formData:C,body:z,formMethod:v.method||k,formEncType:v.encType||E,replace:v.replace,state:v.state,fromRouteId:d,flushSync:v.flushSync,viewTransition:v.viewTransition})},[p,u,l,d])}function Lg(o,{relative:l}={}){let{basename:d}=y.useContext(ar),p=y.useContext(Cr);xe(p,"useFormAction must be used inside a RouteContext");let[u]=p.matches.slice(-1),g={...Dt(o||".",{relative:l})},v=Dr();if(o==null){g.search=v.search;let b=new URLSearchParams(g.search),k=b.getAll("index");if(k.some(C=>C==="")){b.delete("index"),k.filter(z=>z).forEach(z=>b.append("index",z));let C=b.toString();g.search=C?`?${C}`:""}}return(!o||o===".")&&u.route.index&&(g.search=g.search?g.search.replace(/^\?/,"?index&"):"?index"),d!=="/"&&(g.pathname=g.pathname==="/"?d:jr([d,g.pathname])),Tt(g)}function Ag(o,{relative:l}={}){let d=y.useContext(Ic);xe(d!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:p}=Wc("useViewTransitionState"),u=Dt(o,{relative:l});if(!d.isTransitioning)return!1;let g=Ir(d.currentLocation.pathname,p)||d.currentLocation.pathname,v=Ir(d.nextLocation.pathname,p)||d.nextLocation.pathname;return Ji(u.pathname,v)!=null||Ji(u.pathname,g)!=null}function Ng(){return a.jsx("footer",{className:"mt-16 border-t border-slate-200 bg-white/70",children:a.jsxs("div",{className:"shell grid gap-8 py-10 md:grid-cols-4",children:[a.jsxs("div",{children:[a.jsx("p",{className:"text-lg font-semibold tracking-[0.2em] uppercase text-slate-900",children:"Polygenic RiskScore"}),a.jsx("p",{className:"mt-3 text-sm leading-6 text-slate-600",children:"Modular genomic reports translated into clear, modern frontend experiences."})]}),a.jsxs("div",{children:[a.jsx("p",{className:"text-sm font-semibold uppercase tracking-[0.25em] text-slate-500",children:"Reports"}),a.jsxs("ul",{className:"mt-3 space-y-2 text-sm text-slate-600",children:[a.jsx("li",{children:"Health"}),a.jsx("li",{children:"Nutrition"}),a.jsx("li",{children:"Physical Traits"}),a.jsx("li",{children:"Sports"})]})]}),a.jsxs("div",{children:[a.jsx("p",{className:"text-sm font-semibold uppercase tracking-[0.25em] text-slate-500",children:"Company"}),a.jsxs("ul",{className:"mt-3 space-y-2 text-sm text-slate-600",children:[a.jsx("li",{children:"Our science"}),a.jsx("li",{children:"Privacy"}),a.jsx("li",{children:"Terms"}),a.jsx("li",{children:"Support"})]})]}),a.jsxs("div",{children:[a.jsx("p",{className:"text-sm font-semibold uppercase tracking-[0.25em] text-slate-500",children:"Contact"}),a.jsxs("ul",{className:"mt-3 space-y-2 text-sm text-slate-600",children:[a.jsx("li",{children:"info@polyriskscore.com"}),a.jsx("li",{children:"Mon-Fri, 8am-6pm"}),a.jsx("li",{children:"For informational use only"})]})]})]})})}const Rg=[{label:"Home",to:"/"},{label:"Categories",to:"/categories"}];function Pg(){return a.jsx("header",{className:"sticky top-0 z-40 border-b border-white/60 bg-stone-50/85 backdrop-blur-xl",children:a.jsxs("div",{className:"shell flex items-center justify-between py-4",children:[a.jsxs(On,{to:"/",className:"text-lg font-semibold tracking-[0.2em] text-slate-900 uppercase",children:["Polygenic ",a.jsx("span",{className:"text-rose-500",children:"RiskScore"})]}),a.jsxs("nav",{className:"hidden items-center gap-6 md:flex",children:[Rg.map(o=>a.jsx(Gc,{to:o.to,className:({isActive:l})=>`text-sm font-medium transition ${l?"text-slate-950":"text-slate-500 hover:text-slate-900"}`,children:o.label},o.to)),a.jsx(On,{to:"/login",className:"rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white",children:"Login"})]})]})})}function Mg({category:o}){return a.jsxs(On,{to:o.href,className:`group glass-card flex min-h-[280px] flex-col justify-between overflow-hidden bg-gradient-to-br ${o.accent} p-6 transition hover:-translate-y-1 hover:shadow-card`,children:[a.jsx("div",{className:"h-28 w-28 rounded-[2rem] bg-white/70 shadow-inner"}),a.jsxs("div",{children:[a.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.3em] text-slate-500",children:o.subtitle}),a.jsx("h3",{className:"mt-3 text-2xl font-semibold tracking-tight text-slate-950",children:o.title}),a.jsx("p",{className:"mt-3 text-sm leading-6 text-slate-600",children:o.description})]}),a.jsxs("div",{className:"mt-6 flex items-center justify-between text-sm font-semibold text-slate-800",children:[a.jsx("span",{children:"Open module"}),a.jsx("span",{className:"transition group-hover:translate-x-1",children:"?"})]})]})}const Tg=["African","American","East Asian","European","South Asian"];function Pe(o){return Tg.map((l,d)=>({ancestry:l,risk:o[d]}))}const Ig=[{title:"Health",subtitle:"Genetic risk analysis",description:"Skin health insights covering inflammation, disease susceptibility, and protective markers.",href:"/reports/skin",accent:"from-rose-200 via-orange-100 to-white"},{title:"Nutrition",subtitle:"Nutrition profile",description:"Metabolic, cardiovascular, and micronutrient patterns translated into daily dietary guidance.",href:"/reports/nutrition",accent:"from-amber-100 via-lime-50 to-white"},{title:"Physical Traits",subtitle:"Phenotype analysis",description:"Body composition and appearance modules ready for future expansion in the same app shell.",href:"/profile",accent:"from-sky-100 via-cyan-50 to-white"},{title:"Sports",subtitle:"Performance profile",description:"A modular card layout prepared for sports and training traits as the product grows.",href:"/categories",accent:"from-indigo-100 via-violet-50 to-white"}];Pe(["Low","Moderate","Low","High","Moderate"]),Pe(["Very Low","Low","Moderate","Moderate","Low"]),Pe(["Low","Moderate","Low","Very High","Moderate"]),Pe(["Moderate","Low","Low","High","Moderate"]),Pe(["Moderate","Low","Low","Low","Very Low"]),Pe(["Low","Moderate","Very Low","Very High","Low"]),Pe(["High","Moderate","Low","Very Low","Moderate"]),Pe(["Moderate","Low","Very Low","Very Low","Low"]),Pe(["Moderate","Low","Moderate","High","Low"]),Pe(["High","Moderate","Low","Very Low","Low"]);Pe(["Moderate","High","Low","Very High","Moderate"]),Pe(["Low","Moderate","High","High","Moderate"]),Pe(["Moderate","High","Low","Very High","Moderate"]),Pe(["Low","Moderate","Moderate","Low","Low"]),Pe(["Low","Moderate","Moderate","Low","High"]),Pe(["Moderate","Low","Moderate","Moderate","Low"]),Pe(["Moderate","High","Low","High","Moderate"]),Pe(["Low","Moderate","Low","High","High"]),Pe(["Moderate","High","Low","Moderate","High"]),Pe(["Low","Moderate","Low","Low","Very Low"]);function Dg(){return a.jsxs("div",{className:"min-h-screen bg-[linear-gradient(180deg,#fbf7f2_0%,#f4f0eb_55%,#edf3f4_100%)]",children:[a.jsx(Pg,{}),a.jsxs("section",{className:"shell py-14",children:[a.jsxs("div",{className:"mx-auto max-w-3xl text-center",children:[a.jsx("p",{className:"section-kicker",children:"Report coverage"}),a.jsx("h1",{className:"mt-4 text-5xl font-semibold tracking-tight text-slate-950",children:"Explore every category layout"}),a.jsx("p",{className:"mt-5 text-lg leading-8 text-slate-600",children:"The old multi-page frontend is now organized into reusable React pages with shared navigation and modular report shells."})]}),a.jsx("div",{className:"mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4",children:Ig.map(o=>a.jsx(Mg,{category:o},o.title))})]}),a.jsx(Ng,{})]})}const Bg=`
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --cream:   #f5f1eb;
    --white:   #ffffff;
    --dark:    #1a1a1a;
    --mid:     #3d3d3d;
    --light:   #8a8a8a;
    --accent:  #3d6b5e;
    --accent2: #a8c5bd;
    --warm:    #e8e0d5;
    --line:    #d9d3cb;
    --c-vh: #E65100;
    --c-hi: #F2A65A;
    --c-md: #BDBDBD;
    --c-lo: #9B8FBF;
    --c-vl: #6A4AA3;
  }

  html { scroll-behavior: smooth; }
  body { font-family: 'DM Sans', sans-serif; background: var(--cream); color: var(--dark); overflow-x: hidden; }

  /* NAV */
  .gs-nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    display: flex; align-items: center; justify-content: space-between;
    padding: 1.2rem 8vw;
    background: rgba(245,241,235,0.92);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--line);
    transition: all .3s ease;
  }
  .gs-nav.scrolled { padding: 0.9rem 8vw; box-shadow: 0 4px 24px rgba(0,0,0,0.07); }
  .gs-nav.nav-transparent {
    background: transparent; backdrop-filter: none;
    box-shadow: none; border-bottom-color: transparent;
  }
  .gs-nav.nav-transparent .nav-logo,
  .gs-nav.nav-transparent .nav-logo span,
  .gs-nav.nav-transparent .nav-links a,
  .gs-nav.nav-transparent .btn-outline { color: #fff; border-color: rgba(255,255,255,0.7); }
  .gs-nav.nav-transparent .nav-hamburger span { background: #fff; }

  .nav-logo { font-family: 'Cormorant Garamond', serif; font-size: 1.45rem; font-weight: 500; color: var(--dark); text-decoration: none; cursor: pointer; }
  .nav-logo span { color: var(--accent); }
  .nav-links { display: flex; gap: 2.5rem; list-style: none; }
  .nav-links a {
    font-size: 0.78rem; font-weight: 400; letter-spacing: 0.12em;
    text-transform: uppercase; color: var(--mid);
    text-decoration: none; position: relative; transition: color .25s; cursor: pointer;
  }
  .nav-links a::after {
    content: ''; position: absolute; bottom: -3px; left: 0; right: 0;
    height: 1px; background: var(--accent); transform: scaleX(0); transition: transform .3s ease;
  }
  .nav-links a:hover { color: var(--accent); }
  .nav-links a:hover::after { transform: scaleX(1); }

  .btn-outline {
    background: transparent; color: var(--dark);
    border: 1px solid rgba(29,28,28,0.5); padding: 0.9rem 2rem;
    font-family: 'DM Sans', sans-serif; font-size: 0.8rem;
    letter-spacing: 0.1em; text-transform: uppercase; cursor: pointer; transition: all .25s;
  }
  .btn-outline:hover { border-color: var(--accent2); color: var(--accent2); }
  .btn-outline.sm { font-size: 0.78rem; padding: 0.5rem 1.2rem; }

  .nav-cta {
    background: var(--accent); color: #fff;
    border: none; padding: 0.65rem 1.5rem;
    font-family: 'DM Sans', sans-serif; font-size: 0.78rem;
    letter-spacing: 0.1em; text-transform: uppercase; cursor: pointer;
    transition: background .25s, transform .2s;
  }
  .nav-cta:hover { background: #2e5245; transform: translateY(-1px); }

  /* HAMBURGER */
  .nav-hamburger {
    display: none; flex-direction: column; gap: 5px;
    cursor: pointer; padding: 4px; background: none; border: none; z-index: 200;
  }
  .nav-hamburger span { display: block; width: 24px; height: 2px; background: var(--dark); transition: all .3s ease; }
  .nav-hamburger.open span:nth-child(1) { transform: rotate(45deg) translate(5px,5px); }
  .nav-hamburger.open span:nth-child(2) { opacity: 0; }
  .nav-hamburger.open span:nth-child(3) { transform: rotate(-45deg) translate(5px,-5px); }

  /* MOBILE MENU */
  .mobile-menu {
    display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0;
    background: var(--cream); z-index: 150;
    flex-direction: column; align-items: center; justify-content: center;
    gap: 2.5rem; opacity: 0; pointer-events: none; transition: opacity .3s ease;
  }
  .mobile-menu.open { opacity: 1; pointer-events: all; }
  .mobile-menu a {
    font-family: 'Cormorant Garamond', serif; font-size: 2rem; font-weight: 300;
    color: var(--dark); text-decoration: none; letter-spacing: 0.05em; transition: color .2s; cursor: pointer;
  }
  .mobile-menu a:hover { color: var(--accent); }
  .mobile-menu-cta { margin-top: 1rem; display: flex; flex-direction: column; gap: 1rem; width: 80%; align-items: center; }

  /* HERO */
  .hero { min-height: 100vh; padding-top: 80px; position: relative; overflow: hidden; }
  .hero-slideshow { position: absolute; inset: 0; z-index: 0; }
  .hero-slide {
    position: absolute; inset: 0;
    background-size: cover; background-position: center;
    opacity: 0; transition: opacity 1.2s ease;
  }
  .hero-slide.active { opacity: 1; }
  .hero-overlay { position: absolute; inset: 0; }
  .hero-content {
    position: relative; z-index: 2;
    display: flex; flex-direction: column; justify-content: center; align-items: flex-start;
    padding: 6rem 8vw; min-height: 100vh;
    animation: fadeUp .9s ease both;
  }
  .hero-tag {
    display: inline-flex; align-items: center; gap: 0.6rem;
    font-size: 0.72rem; letter-spacing: 0.18em; text-transform: uppercase;
    color: var(--accent2); margin-bottom: 1.8rem;
  }
  .hero-tag::before { content: ''; display: block; width: 28px; height: 1px; background: var(--accent2); }
  .hero h1 {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(3rem,5.5vw,5.2rem); font-weight: 300; line-height: 1.12;
    letter-spacing: -0.01em; color: #fff; margin-bottom: 1.8rem;
  }
  .hero h1 em { font-style: italic; color: var(--accent2); }
  .hero-desc { font-size: 1rem; font-weight: 300; line-height: 1.75; color: rgba(255,255,255,0.75); max-width: 520px; margin-bottom: 2.8rem; }
  .hero-btns { display: flex; gap: 1rem; align-items: center; }
  .hero-dots { position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%); display: flex; gap: 0.6rem; z-index: 10; }
  .hero-dot { width: 8px; height: 8px; border-radius: 50%; background: rgba(255,255,255,0.35); cursor: pointer; transition: background .3s; }
  .hero-dot.active { background: #fff; }

  .slide-overlay-text {
    position: absolute; z-index: 2; bottom: 12vh; right: 8vw;
    max-width: 360px; text-align: right;
    opacity: 0; transform: translateY(18px);
    transition: opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s;
    pointer-events: none;
  }
  .hero-slide.active .slide-overlay-text { opacity: 1; transform: translateY(0); }
  .slide-tag {
    display: inline-block; font-size: 0.68rem; letter-spacing: 0.18em; text-transform: uppercase;
    color: var(--accent2); margin-bottom: 0.75rem;
    border: 1px solid rgba(168,197,189,0.6); padding: 0.3rem 0.8rem;
  }
  .slide-headline {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(1.8rem,2.8vw,2.8rem); font-weight: 300; line-height: 1.18; color: #fff; margin-bottom: 0.8rem;
  }
  .slide-headline em { font-style: italic; color: var(--accent2); }
  .slide-body { font-size: 0.82rem; font-weight: 300; line-height: 1.7; color: rgba(255,255,255,0.72); }

  /* STATS STRIP */
  .stats-strip { background: var(--dark); display: grid; grid-template-columns: repeat(3,1fr); border-top: 1px solid rgba(255,255,255,0.08); }
  .stat-item { padding: 2.2rem 2rem; text-align: center; border-right: 1px solid rgba(255,255,255,0.08); }
  .stat-item:last-child { border-right: none; }
  .stat-num { font-family: 'Cormorant Garamond', serif; font-size: 2.5rem; font-weight: 300; color: var(--accent2); line-height: 1; }
  .stat-label { font-size: 0.7rem; letter-spacing: 0.14em; text-transform: uppercase; color: rgba(255,255,255,0.45); margin-top: 0.5rem; }
  .stat-item.stat-tagline .stat-num,
  .stat-item.stat-tagline .stat-label {
    font-family: 'DM Sans', sans-serif; font-size: 0.72rem;
    letter-spacing: 0.18em; text-transform: uppercase; color: var(--accent2); line-height: 1.4;
  }
  .stat-item.stat-tagline .stat-label { margin-top: 0.35rem; }

  /* SECTION COMMONS */
  section { padding: 7rem 8vw; }
  .section-tag {
    display: inline-flex; align-items: center; gap: 0.6rem;
    font-size: 0.72rem; letter-spacing: 0.18em; text-transform: uppercase;
    color: var(--accent); margin-bottom: 1.2rem;
  }
  .section-tag::before { content: ''; display: block; width: 28px; height: 1px; background: var(--accent); }
  h2 { font-family: 'Cormorant Garamond', serif; font-size: clamp(2.4rem,3.8vw,3.8rem); font-weight: 300; line-height: 1.15; color: var(--dark); }
  h2 em { font-style: italic; color: var(--accent); }

  /* ABOUT */
  .about { background: var(--white); }
  .about-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: center; }
  .about-img-wrap { position: relative; aspect-ratio: 3/4; overflow: hidden; }
  .hosiptalin { transform: scale(0.7); object-position: right; width: 100%; }
  .about-content { padding-right: 2rem; }
  .about-content h2 { margin-bottom: 1.5rem; }
  .about-content p { font-size: 0.95rem; font-weight: 300; line-height: 1.85; color: var(--mid); margin-bottom: 1.2rem; }
  .credentials { display: flex; flex-direction: column; gap: 0.8rem; margin: 2rem 0; }
  .credential { display: flex; align-items: center; gap: 1rem; font-size: 0.85rem; color: var(--mid); }
  .credential::before { content: ''; flex-shrink: 0; width: 6px; height: 6px; border-radius: 50%; background: var(--accent); }

  /* BOOKING */
  .booking { background: var(--accent); display: grid; grid-template-columns: 1fr 1fr; padding: 0; overflow: hidden; }
  .booking-left { padding: 6rem 8vw; display: flex; flex-direction: column; justify-content: center; }
  .booking-left .section-tag { color: var(--accent2); }
  .booking-left .section-tag::before { background: var(--accent2); }
  .booking-left h2 { color: #fff; margin-bottom: 1.5rem; }
  .booking-left p { font-size: 0.95rem; font-weight: 300; line-height: 1.8; color: rgba(255,255,255,0.7); max-width: 380px; margin-bottom: 2.5rem; }
  .btn-light {
    background: #fff; color: var(--dark); border: none; padding: 1rem 2.2rem;
    font-family: 'DM Sans', sans-serif; font-size: 0.8rem; letter-spacing: 0.1em;
    text-transform: uppercase; cursor: pointer; transition: all .25s; display: inline-block; width: fit-content;
  }
  .btn-light:hover { background: var(--dark); color: #fff; transform: translateY(-2px); }
  .booking-form { background: var(--cream); padding: 5rem 4rem; display: flex; flex-direction: column; gap: 1.2rem; }
  .booking-form h3 { font-family: 'Cormorant Garamond', serif; font-size: 1.8rem; font-weight: 400; color: var(--dark); margin-bottom: 0.5rem; }
  .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
  .form-group { display: flex; flex-direction: column; gap: 0.4rem; }
  .form-group label { font-size: 0.7rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--light); }
  .form-group input, .form-group select {
    background: var(--white); border: 1px solid var(--line);
    padding: 0.8rem 1rem; font-family: 'DM Sans', sans-serif;
    font-size: 0.9rem; color: var(--dark); outline: none; transition: border-color .2s;
    appearance: none; -webkit-appearance: none;
  }
  .form-group input:focus, .form-group select:focus { border-color: var(--accent); }
  .form-group.full { grid-column: span 2; }
  .submit-btn {
    grid-column: span 2; background: var(--dark); color: #fff; border: none;
    padding: 1rem; font-family: 'DM Sans', sans-serif; font-size: 0.8rem;
    letter-spacing: 0.12em; text-transform: uppercase; cursor: pointer; margin-top: 0.5rem; transition: background .25s;
  }
  .submit-btn:hover { background: var(--accent); }

  /* CINEMA */
  .prs-cinema-scroll-wrapper { position: relative; height: 260vh; }
  .prs-cinema-scroll-wrapper { position: relative; height: 260vh; }
  .prs-cinema { position: sticky; top: 0; height: 120vh; width: 100%; overflow: hidden; }
  .prs-cinema-video { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; transition: transform 0.2s linear; will-change: transform; }
  .prs-cinema-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.65) 45%, rgba(0,0,0,0.85) 100%);
  }
  .prs-cinema-scroll-hint {
    position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%);
    text-align: center; z-index: 3; pointer-events: none; transition: opacity 0.5s ease;
  }
  .prs-hint-text { display: block; font-size: 0.72rem; letter-spacing: 0.16em; text-transform: uppercase; color: rgba(255,255,255,0.5); margin-bottom: 0.6rem; }
  .prs-cinema-progress-track { width: 120px; height: 2px; background: rgba(255,255,255,0.15); border-radius: 2px; overflow: hidden; margin: 0 auto; }
  .prs-cinema-progress-bar { height: 100%; background: rgba(255,255,255,0.7); border-radius: 2px; transition: width 0.1s linear; }
  .prs-cinema-content {
    position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
    z-index: 2; text-align: center; padding: 0 8vw 10vh; max-width: 880px; width: 100%;
    display: flex; flex-direction: column; gap: 18px; transition: transform 0.2s linear; will-change: transform;
  }
  .prs-cinema-line {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(1.35rem,2.8vw,2.5rem); font-weight: 300; color: #fff;
    line-height: 1.25; letter-spacing: 0.04em; text-transform: uppercase;
    opacity: 0; transform: translateY(36px); filter: blur(4px);
    transition: opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1), filter 0.8s ease;
  }
  .prs-cinema-line--sub {
    font-family: 'DM Sans', sans-serif; font-size: clamp(0.9rem,1.25vw,1rem);
    font-weight: 300; color: rgba(255,255,255,0.72); line-height: 1.8;
    letter-spacing: 0.03em; text-transform: none; max-width: 620px; margin: 0 auto;
  }
  .prs-cinema-message-stage {
    min-height: 9.5rem; display: flex; align-items: center; justify-content: center; overflow: hidden;
  }
  .prs-cinema-message-shell {
    width: 100%; animation: prsCinemaMessageIn 0.55s cubic-bezier(0.22,1,0.36,1);
  }
  .prs-cinema-line--step,
  .prs-cinema-line--final { max-width: 560px; }
  .prs-cinema-line--final {
    font-family: 'Cormorant Garamond', serif; font-size: clamp(1rem,1.5vw,1.3rem);
    letter-spacing: 0.16em; text-transform: uppercase; color: rgba(255,255,255,0.92);
  }
  .prs-cinema-line.in-view { opacity: 1; transform: translateY(0); filter: blur(0); }
  @keyframes prsCinemaMessageIn {
    0% { opacity: 0; transform: translateY(24px); }
    100% { opacity: 1; transform: translateY(0); }
  }

  /* TESTIMONIALS */
  .testimonials { background: var(--dark); padding: 7rem 8vw; }
  .test-head { text-align: center; margin-bottom: 4rem; }
  .test-head .section-tag { justify-content: center; color: var(--accent2); }
  .test-head .section-tag::before { background: var(--accent2); }
  .test-head h2 { color: #fff; }
  .testimonials-marquee {
    overflow: hidden; position: relative;
    -webkit-mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
    mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
  }
  .testimonials-track {
    display: flex; gap: 12px; width: max-content;
    animation: testimonialsScroll 34s linear infinite;
  }
  .testimonials-marquee:hover .testimonials-track { animation-play-state: paused; }
  .test-card {
    background: rgba(255,255,255,0.04); padding: 3rem 2.5rem;
    border: 1px solid rgba(255,255,255,0.07);
    transition: background .3s, border-color .3s;
    gap: 0.75rem; display: flex; flex-direction: column; justify-content: space-between;
    flex: 0 0 360px; min-height: 100%;
  }
  .test-card:hover { background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.15); }
  .test-stars { color: var(--accent2); font-size: 0.8rem; letter-spacing: 0.15em; margin-bottom: 1.5rem; }
  .test-text { font-family: 'Cormorant Garamond', serif; font-size: 1.2rem; font-weight: 300; font-style: italic; line-height: 1.7; color: rgba(255,255,255,0.85); margin-bottom: 2rem; }
  .test-author { display: flex; align-items: center; gap: 1rem; }
  .test-avatar { width: 42px; height: 42px; border-radius: 50%; background: var(--accent); display: flex; align-items: center; justify-content: center; font-size: 0.85rem; font-weight: 500; color: #fff; flex-shrink: 0; }
  .test-name { font-size: 0.85rem; font-weight: 500; color: rgba(255,255,255,0.9); }
  .test-role { font-size: 0.72rem; color: rgba(255,255,255,0.4); margin-top: 0.15rem; }
  @keyframes testimonialsScroll { from { transform: translateX(0); } to { transform: translateX(calc(-50% - 6px)); } }

  /* TEAM */
  .team { background: var(--white); }
  .team-head { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 4rem; }
  .team-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 2rem; }
  .team-card { position: relative; overflow: hidden; }
  .team-photo {
    aspect-ratio: 3/4; overflow: hidden;
    background: linear-gradient(150deg,#a8c5bd 0%,#2e5245 100%);
    display: flex; align-items: center; justify-content: center;
    font-size: 4rem; color: rgba(255,255,255,0.3);
  }
  .team-overlay {
    position: absolute; inset: 0; background: var(--accent); opacity: 0;
    display: flex; align-items: center; justify-content: center; gap: 1.2rem; transition: opacity .3s;
  }
  .team-card:hover .team-overlay { opacity: 0.92; }
  .team-social {
    width: 38px; height: 38px; border: 1px solid rgba(255,255,255,0.5);
    display: flex; align-items: center; justify-content: center;
    color: #fff; font-size: 0.8rem; cursor: pointer; transition: background .2s;
  }
  .team-social:hover { background: rgba(255,255,255,0.2); }
  .team-info { padding: 1.2rem 0 0; }
  .team-name { font-family: 'Cormorant Garamond', serif; font-size: 1.3rem; font-weight: 400; color: var(--dark); }
  .team-specialty { font-size: 0.75rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--accent); margin-top: 0.3rem; }

  /* FOOTER */
  .gs-footer { background: #111; padding: 5rem 8vw 2.5rem; display: grid; grid-template-columns: 1.5fr 1fr 1fr 1fr; gap: 4rem; }
  .foot-brand .nav-logo { color: #fff; font-size: 1.6rem; display: block; margin-bottom: 1.2rem; }
  .foot-brand p { font-size: 0.85rem; font-weight: 300; line-height: 1.8; color: rgba(255,255,255,0.4); max-width: 260px; margin-bottom: 2rem; }
  .foot-col h4 { font-size: 0.7rem; letter-spacing: 0.15em; text-transform: uppercase; color: rgba(255,255,255,0.5); margin-bottom: 1.5rem; }
  .foot-col ul { list-style: none; display: flex; flex-direction: column; gap: 0.8rem; }
  .foot-col ul a { font-size: 0.85rem; font-weight: 300; color: rgba(255,255,255,0.6); text-decoration: none; transition: color .2s; cursor: pointer; }
  .foot-col ul a:hover { color: var(--accent2); }
  .foot-bottom {
    grid-column: span 4; margin-top: 3rem; padding-top: 2rem;
    border-top: 1px solid rgba(255,255,255,0.08);
    display: flex; justify-content: space-between; align-items: center;
  }
  .foot-bottom p { font-size: 0.75rem; color: rgba(255,255,255,0.3); }
  .foot-socials { display: flex; gap: 1rem; }
  .foot-social {
    width: 34px; height: 34px; border: 1px solid rgba(255,255,255,0.15);
    display: flex; align-items: center; justify-content: center;
    color: rgba(255,255,255,0.4); font-size: 0.8rem; cursor: pointer; transition: all .2s;
  }
  .foot-social:hover { border-color: var(--accent2); color: var(--accent2); }

  /* ALLERGIES */
  .allergies-section { background: var(--cream); padding-top: 0; }
  .allergy-head {
    display: flex; justify-content: space-between; align-items: flex-end;
    margin-bottom: 4rem; min-height: 300px; padding: 7.5rem 3rem 3rem;
    width: 100vw; margin-left: calc(50% - 50vw); margin-right: calc(50% - 50vw);
    background: url('/images/sthescope.png') center 72%/cover no-repeat;
    border: 1px solid var(--line);
  }
  .traits-layout { display: grid; grid-template-columns: minmax(220px,300px) minmax(0,1fr); gap: 2rem; align-items: start; }
  .jump-menu-container {
    width: 100%; max-width: 300px; font-family: sans-serif;
    border: 1px solid #887a87; border-radius: 4px; overflow: hidden;
    background: #969280ce; position: sticky; top: 100px;
  }
  .jump-menu-header { background-color: #204e08; color: #fff; padding: 15px 20px; font-weight: 700; font-size: 1.1rem; }
  .jump-menu-list { list-style: none; padding: 0; margin: 0; background: var(--warm); }
  .jump-menu-list li { border-left: 5px solid transparent; transition: all 0.2s ease; }
  .jump-menu-list li.active { border-left-color: #204e08; }
  .jump-menu-list li.active a { color: #000; font-weight: 700; }
  .jump-menu-list li a { display: block; padding: 12px 20px; text-decoration: none; color: #767676; font-size: 0.95rem; cursor: pointer; }
  .jump-menu-list li a:hover { background-color: #f9f9f9; color: #333; }
  .traits-list { display: flex; flex-direction: column; gap: 1px; background: var(--line); }
  .trait-row {
    background: var(--cream); padding: 2rem 2.5rem;
    display: grid; grid-template-columns: auto 1fr auto; gap: 2rem; align-items: center;
    position: relative; overflow: hidden; cursor: pointer; transition: background .3s; width: 100%;
  }
  .trait-row::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 4px; }
  .trait-row.vh::before { background: var(--c-vh); }
  .trait-row.hi::before { background: var(--c-hi); }
  .trait-row.md::before { background: var(--c-md); }
  .trait-row.lo::before { background: var(--c-lo); }
  .trait-row.vl::before { background: var(--c-vl); }
  .trait-row:hover { background: var(--white); }
  .rbadge { padding: 0.4rem 1rem; font-size: 0.68rem; letter-spacing: 0.12em; text-transform: uppercase; font-weight: 500; color: white; min-width: 110px; text-align: center; white-space: nowrap; }
  .b-vh { background: var(--c-vh); }
  .b-hi { background: var(--c-hi); }
  .b-md { background: var(--c-md); }
  .b-lo { background: var(--c-lo); }
  .b-vl { background: var(--c-vl); }
  .tname { font-family: 'Cormorant Garamond', serif; font-size: 1.3rem; font-weight: 400; color: var(--dark); margin-bottom: 0.35rem; }
  .tdesc { font-size: 0.85rem; font-weight: 300; color: var(--light); line-height: 1.7; }
  .tarrow { font-size: 1.2rem; color: var(--light); transition: transform .3s, color .3s; }
  .trait-row:hover .tarrow { transform: translateX(5px); color: var(--accent); }

  /* TRAIT DETAIL */
  .detail-section { background: var(--white); }
  .detail-inner { display: grid; grid-template-columns: 2fr 1fr; gap: 4rem; margin-top: 3rem; }
  .detail-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(2rem,3.5vw,3rem); font-weight: 300; color: var(--dark); margin-bottom: 1.2rem; line-height: 1.2; }
  .detail-sub { font-size: 0.95rem; font-weight: 300; color: var(--mid); line-height: 1.85; max-width: 700px; margin-bottom: 1.8rem; }
  .risk-pill { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.55rem 1.4rem; font-size: 0.72rem; letter-spacing: 0.14em; text-transform: uppercase; font-weight: 500; color: white; background: var(--c-vh); margin-bottom: 0.5rem; }
  .card { background: var(--cream); padding: 2.5rem; margin-bottom: 1.8rem; }
  .card-title { font-family: 'Cormorant Garamond', serif; font-size: 1.55rem; font-weight: 400; color: var(--dark); margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.6rem; }
  .recs { display: flex; flex-direction: column; gap: 1.2rem; }
  .rec { padding-left: 1.4rem; position: relative; line-height: 1.85; font-size: 0.9rem; font-weight: 300; color: var(--mid); }
  .rec::before { content: ''; position: absolute; left: 0; top: 0.65rem; width: 6px; height: 6px; border-radius: 50%; background: var(--accent); }
  .gtable { width: 100%; border-collapse: collapse; margin-top: 0.8rem; }
  .gtable th, .gtable td { padding: 0.85rem 1rem; text-align: left; border-bottom: 1px solid var(--line); }
  .gtable th { background: var(--warm); font-weight: 500; color: var(--mid); font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; }
  .gtable td { font-family: 'DM Mono', monospace; font-size: 0.81rem; color: var(--mid); }
  .gtable tr:hover td { background: var(--white); }
  .gbadge { display: inline-block; background: var(--accent); color: white; padding: 0.15rem 0.55rem; font-size: 0.72rem; font-weight: 500; letter-spacing: 0.05em; }
  .pop-card { background: var(--cream); padding: 2rem 2.2rem; margin-bottom: 1.8rem; }
  .pop-title { font-family: 'Cormorant Garamond', serif; font-size: 1.4rem; font-weight: 400; color: var(--dark); margin-bottom: 0.4rem; }
  .pop-sub { font-size: 0.83rem; font-weight: 300; color: var(--light); margin-bottom: 1.5rem; }
  .pop-bars { display: flex; flex-direction: column; gap: 0.9rem; }
  .pop-row { display: flex; align-items: center; gap: 0.9rem; }
  .pop-lbl { min-width: 88px; font-size: 0.78rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--light); }
  .pop-track { flex: 1; height: 26px; background: var(--warm); overflow: hidden; }
  .pop-fill { height: 100%; background: var(--c-vh); display: flex; align-items: center; justify-content: flex-end; padding-right: 0.7rem; color: white; font-weight: 500; font-size: 0.78rem; }
  .pop-fill.you { background: var(--accent); }
  .insight { background: #f0f7f5; padding: 1.5rem 1.6rem; border-left: 3px solid var(--accent); font-size: 0.88rem; font-weight: 300; line-height: 1.75; color: var(--mid); }
  .insight strong { color: var(--dark); font-weight: 500; }
  .res-block { background: var(--cream); padding: 1.5rem 1.6rem; border-left: 3px solid var(--line); }
  .res-ttl { font-weight: 500; color: var(--dark); margin-bottom: 0.3rem; font-size: 0.9rem; line-height: 1.5; }
  .res-doi { font-size: 0.75rem; color: var(--light); margin-bottom: 0.9rem; letter-spacing: 0.08em; }
  .res-body { font-size: 0.85rem; font-weight: 300; line-height: 1.8; color: var(--mid); margin-bottom: 0.9rem; }
  .res-link { display: inline-block; color: var(--accent); font-size: 0.85rem; font-weight: 500; text-decoration: none; }
  .res-link:hover { text-decoration: underline; }

  /* COMPARISON */
  .comparison-section { background: var(--cream); padding-top: 6.5rem; }
  .category-detail { padding: 0 8vw 3rem; min-height: 320vh; position: relative; }
  .category-hero {
    position: sticky;
    top: 5.75rem;
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 2rem;
    align-items: center;
    min-height: calc(100vh - 7rem);
  }
  .category-copy { padding: 2rem 0; }
  .category-copy h1 {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(3rem, 5vw, 5rem);
    font-weight: 300;
    line-height: 0.95;
    margin-bottom: 1.2rem;
    color: var(--dark);
  }
  .category-copy h1 em { font-style: italic; color: var(--accent); }
  .category-copy p { font-size: 1rem; line-height: 1.9; color: rgba(26,26,26,0.72); max-width: 640px; }
  .category-copy-note {
    display: inline-flex;
    align-items: center;
    gap: 0.65rem;
    margin-top: 1.4rem;
    padding: 0.8rem 1rem;
    border-radius: 999px;
    background: rgba(61,107,94,0.08);
    color: var(--accent);
    font-size: 0.72rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }
  .category-copy-note::before {
    content: '';
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: currentColor;
    box-shadow: 0 0 0 6px rgba(61,107,94,0.12);
  }
  .category-panel {
    position: relative;
    background: rgba(255,255,255,0.82);
    border: 1px solid rgba(31,48,42,0.08);
    border-radius: 28px;
    padding: 0;
    min-height: clamp(360px, 72vh, 720px);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 18px 40px rgba(30,34,28,0.08);
    overflow: hidden;
  }
  .category-sequence-shell {
    position: relative;
    width: 100%;
    min-height: inherit;
    height: 100%;
    background:
      radial-gradient(circle at top, rgba(255,255,255,0.18), transparent 48%),
      linear-gradient(160deg, #25312d 0%, #161d1a 100%);
  }
  .category-sequence-canvas {
    width: 100%;
    height: 100%;
    display: block;
    opacity: 0;
    transition: opacity 0.35s ease;
  }
  .category-sequence-canvas.is-ready { opacity: 1; }
  .category-sequence-loading {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(255,255,255,0.75);
    font-size: 0.78rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    background: linear-gradient(180deg, rgba(9,14,12,0.15), rgba(9,14,12,0.45));
  }
  .category-sequence-ui {
    position: absolute;
    left: 1.35rem;
    right: 1.35rem;
    bottom: 1.35rem;
    z-index: 2;
    display: grid;
    gap: 0.55rem;
    padding: 1rem 1.05rem;
    border-radius: 18px;
    background: linear-gradient(180deg, rgba(10,15,13,0.45), rgba(10,15,13,0.72));
    border: 1px solid rgba(255,255,255,0.1);
    backdrop-filter: blur(10px);
  }
  .category-sequence-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    color: #fff;
  }
  .category-sequence-meta strong {
    font-size: 0.72rem;
    font-weight: 500;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }
  .category-sequence-meta span {
    font-size: 0.72rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.65);
  }
  .category-sequence-progress {
    height: 3px;
    border-radius: 999px;
    overflow: hidden;
    background: rgba(255,255,255,0.16);
  }
  .category-sequence-progress span {
    display: block;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, rgba(168,197,189,0.7), #ffffff);
    transform-origin: left center;
  }
  .category-sequence-ui p {
    font-size: 0.82rem;
    line-height: 1.6;
    color: rgba(255,255,255,0.72);
  }
  .category-section { padding: 0 8vw 5rem; }
  .auto-tabs-page-wrapper {
    background: linear-gradient(180deg, rgba(255,255,255,0.98), rgba(248,244,239,0.98));
    border: 1px solid rgba(31,48,42,0.08);
    border-radius: 30px;
    box-shadow: 0 18px 40px rgba(30,34,28,0.07);
    overflow: hidden;
  }
  .auto-tabs-nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.75rem;
    padding: 1rem;
    background: rgba(245, 239, 231, 0.8);
    border-bottom: 1px solid rgba(31,48,42,0.08);
  }
  .auto-tab-btn {
    border: 0;
    background: rgb(207, 206, 183);
    color: rgba(26,26,26,0.7);
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    min-width: 170px;
    padding: 0.95rem 0.9rem;
    font-size: 0.78rem;
    font-weight: 600;
    line-height: 1.45;
    cursor: pointer;
    transition: all 0.35s ease;
  }
  .auto-tab-btn.is-active {
    background: #1f302a;
    color: #fff;
    box-shadow: 0 12px 24px rgba(31,48,42,0.18);
  }
  .auto-tabs-body { position: relative; min-height: 320px; padding: 2rem; }
  .auto-tabs-controls { display: flex; justify-content: center; padding: 0 0 1.4rem; }
  .auto-tabs-progress { position: relative; width: 54px; height: 54px; display: grid; place-items: center; }
  .auto-tabs-progress svg {
    position: absolute;
    inset: 0;
    width: 54px;
    height: 54px;
    transform: rotate(-90deg);
    pointer-events: none;
  }
  .auto-tabs-progress-track { fill: none; stroke: rgba(31,48,42,0.12); stroke-width: 3; }
  .auto-tabs-progress-ring {
    fill: none;
    stroke: #1f302a;
    stroke-width: 3;
    stroke-linecap: round;
    stroke-dasharray: 157;
    transition: stroke-dashoffset 0.18s linear, stroke 0.25s ease;
  }
  .auto-tabs-progress.is-paused .auto-tabs-progress-ring { stroke: rgba(31,48,42,0.38); }
  .auto-tabs-pause {
    position: relative;
    z-index: 1;
    border: 1px solid rgba(31,48,42,0.12);
    background: rgba(255,255,255,0.92);
    color: #1f302a;
    border-radius: 999px;
    width: 40px;
    height: 40px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    font-size: 0.95rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.25s ease;
  }
  .auto-tabs-pause:hover { background: #1f302a; color: #fff; }
  .auto-tab-panel { display: grid; grid-template-columns: 1fr 1.08fr; gap: 2rem; align-items: start; }
  .auto-tab-copy h3 {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(1.8rem, 3vw, 2.6rem);
    font-weight: 400;
    margin-bottom: 0.9rem;
    line-height: 0.98;
    color: var(--dark);
  }
  .auto-tab-copy p,
  .auto-tab-copy li { font-size: 0.96rem; line-height: 1.9; color: rgba(26,26,26,0.74); }
  .auto-tab-copy p + p { margin-top: 0.85rem; }
  .auto-tab-copy ul { margin: 0; padding-left: 1.15rem; }
  .auto-tab-copy-meta { margin-top: 1.2rem; display: flex; flex-wrap: wrap; gap: 0.65rem; }
  .auto-tab-copy-meta span {
    display: inline-flex;
    align-items: center;
    border-radius: 999px;
    padding: 0.5rem 0.85rem;
    background: rgba(245, 239, 231, 0.92);
    border: 1px solid rgba(31,48,42,0.08);
    font-size: 0.74rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    color: rgba(31,48,42,0.72);
  }
  .auto-tab-aside {
    background: rgba(245, 239, 231, 0.88);
    border: 1px solid rgba(31,48,42,0.08);
    border-radius: 24px;
    padding: 1.4rem;
  }
  .auto-tab-aside img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-radius: 18px;
    display: block;
    margin-bottom: 1rem;
  }
  .auto-tab-aside strong {
    display: block;
    margin-bottom: 0.7rem;
    font-size: 0.74rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: rgba(31,48,42,0.62);
  }
  .auto-tab-aside p { margin: 0; font-size: 0.92rem; line-height: 1.85; color: rgba(26,26,26,0.72); }
  .happyhealth {
    position: relative;
    margin: 0 0 4rem;
    border-radius: 28px;
    overflow: hidden;
    width: 100vw;
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
    min-height: 420px;
    box-shadow: 0 18px 40px rgba(30,34,28,0.08);
  }
  .happyhealth img { width: 100%; height: 100%; min-height: 420px; object-fit: cover; display: block; }
  .happyhealth::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(17, 26, 22, 0.08) 10%, rgba(17, 26, 22, 0.64) 100%);
  }
  .happyhealth-copy {
    position: absolute;
    left: 2.2rem;
    right: 2.2rem;
    bottom: 2.2rem;
    z-index: 1;
    max-width: none;
    color: #fff;
    opacity: 0;
    transform: translateY(26px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }
  .happyhealth.reveal.in-view .happyhealth-copy { opacity: 1; transform: translateY(0); }
  .happyhealth-copy strong {
    display: inline-block;
    margin-bottom: 0.8rem;
    font-size: 0.78rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: rgba(220, 235, 224, 0.9);
  }
  .happyhealth-copy h2 {
    margin: 0 0 0.8rem;
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2.2rem, 4vw, 4rem);
    font-weight: 300;
    line-height: 0.95;
    color: #fff;
  }
  .happyhealth-copy p {
    margin: 0;
    font-size: 0.98rem;
    line-height: 1.85;
    color: rgba(255,255,255,0.82);
    max-width: 500px;
  }

  /* CATEGORIES PAGE */
  .categories-page { background: var(--cream); min-height: 100vh; padding: 7.5rem 0 6rem; }
  .categories-page-header { padding: 0 8vw 2.5rem; max-width: 760px; }
  .categories-page-header h1 {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(3rem, 5.3vw, 4.4rem);
    font-weight: 300;
    line-height: 0.98;
    letter-spacing: -0.03em;
    color: var(--dark);
    margin-bottom: 1rem;
  }
  .categories-page-header h1 em { font-style: italic; color: var(--accent); }
  .categories-page-header p {
    font-size: 0.98rem;
    font-weight: 300;
    line-height: 1.75;
    color: var(--light);
    max-width: 620px;
  }
  .portfolio-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 1rem; padding: 0 8vw; }
  .portfolio-card { position: relative; background: var(--warm); overflow: hidden; cursor: pointer; border: 1px solid var(--line); border-radius: 22px; min-height: 460px; display: flex; flex-direction: column; }
  .portfolio-card:hover .portfolio-card-arrow { background: var(--accent); color: #fff; border-color: var(--accent); transform: rotate(45deg); }
  .portfolio-card:hover .portfolio-card-img { transform: scale(1.04); }
  .portfolio-card-img-wrap { width: 100%; aspect-ratio: 4 / 5; overflow: hidden; background: var(--warm); display: flex; align-items: center; justify-content: center; flex: 1 1 auto; }
  .portfolio-card-img { width: 100%; height: 100%; object-fit: cover; object-position: center; transform: scale(1); transform-origin: center; transition: transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94); display: block; }
  .portfolio-card-footer { display: flex; align-items: center; justify-content: space-between; padding: 1rem 1.25rem 1.2rem; border-top: 1px solid var(--line); background: rgba(245,241,235,0.96); margin-top: auto; }
  .portfolio-card-meta { display: flex; flex-direction: column; gap: 0.28rem; }
  .portfolio-card-name { font-family: 'DM Sans', sans-serif; font-size: 0.9rem; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; color: var(--dark); }
  .portfolio-card-tag { font-family: 'DM Sans', sans-serif; font-size: 0.72rem; font-weight: 300; letter-spacing: 0.04em; color: var(--light); text-transform: uppercase; }
  .portfolio-card-arrow { width: 36px; height: 36px; border-radius: 50%; border: 1.2px solid rgba(26,26,26,0.65); display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: background 0.25s, color 0.25s, border-color 0.25s, transform 0.3s ease; color: var(--dark); }
  .illus-health { background: linear-gradient(135deg,#d9ede8 0%,#b5d5cc 100%); }
  .illus-physical { background: linear-gradient(135deg,#e8e0d5 0%,#c9b89e 100%); }
  .illus-nutrition { background: linear-gradient(135deg,#dde8d9 0%,#b0cba6 100%); }
  .illus-other { background: linear-gradient(135deg,#e2dced 0%,#c0b4d4 100%); }

  /* SCROLL REVEAL */
  .reveal { opacity: 0; transform: translateY(30px); transition: opacity .7s ease, transform .7s ease; }
  .reveal.in-view { opacity: 1; transform: translateY(0); }

  /* ANIMATIONS */
  @keyframes fadeUp { from { opacity:0; transform:translateY(40px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideRight { from { opacity:0; transform:translateX(-30px); } to { opacity:1; transform:translateX(0); } }

  /* RESPONSIVE */
  @media (max-width: 1024px) {
    .about-inner { grid-template-columns: 1fr; gap: 3rem; }
    .about-img-wrap { aspect-ratio: 16/9; }
    .about-content { padding-right: 0; }
    .booking { grid-template-columns: 1fr; }
    .team-grid { grid-template-columns: repeat(2,1fr); }
    .gs-footer { grid-template-columns: 1fr 1fr; }
    .foot-bottom { grid-column: span 2; }
    .detail-inner { grid-template-columns: 1fr; }
    .category-detail { min-height: 260vh; }
    .category-hero { grid-template-columns: 1fr; top: 5.25rem; }
    .auto-tab-panel { grid-template-columns: 1fr; }
    .categories-page { padding-top: 7rem; }
    .categories-page-header { padding: 0 5vw 2.25rem; }
    .portfolio-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); padding: 0 5vw; }
  }
  @media (max-width: 768px) {
    .nav-links { display: none; }
    .nav-hamburger { display: flex; }
    nav > div:last-child .btn-outline,
    nav > div:last-child .nav-cta { display: none; }
    .mobile-menu { display: flex; }
    section { padding: 4rem 5vw; }
    .hero-content { padding: 5rem 5vw 4rem; }
    .hero-btns { flex-direction: column; align-items: stretch; width: 100%; }
    .stats-strip { grid-template-columns: 1fr; }
    .stat-item { padding: 1.3rem 1rem; border-right: none; border-bottom: 1px solid rgba(255,255,255,0.08); }
    .stat-item:last-child { border-bottom: none; }
    .traits-layout { grid-template-columns: 1fr; }
    .jump-menu-container { max-width: 100%; position: static; }
    .trait-row { grid-template-columns: 1fr; gap: 0.8rem; padding: 1.5rem; }
    .tarrow { display: none; }
    .team-head { flex-direction: column; align-items: flex-start; gap: 1.5rem; }
    .team-grid { grid-template-columns: 1fr 1fr; }
    .gs-footer { grid-template-columns: 1fr; gap: 2.5rem; }
    .foot-bottom { grid-column: span 1; flex-direction: column; gap: 1.5rem; align-items: flex-start; }
    .booking { grid-template-columns: 1fr; }
    .booking-left { padding: 4rem 5vw; }
    .booking-form { padding: 3rem 5vw; }
    .form-row { grid-template-columns: 1fr; }
    .form-group.full { grid-column: span 1; }
    .submit-btn { grid-column: span 1; }
    .detail-inner { grid-template-columns: 1fr; gap: 2rem; }
    .categories-page { padding-top: 6.5rem; }
    .categories-page-header { padding: 0 5vw 2rem; }
    .categories-page-header h1 { font-size: clamp(2.6rem, 14vw, 3.7rem); line-height: 1; }
    .portfolio-grid { grid-template-columns: 1fr; gap: 1.1rem; padding: 0 5vw; }
    .portfolio-card { min-height: 0; }
    .portfolio-card-img-wrap { aspect-ratio: 4 / 3; }
    .category-detail { padding: 0 5vw 2.5rem; min-height: 220vh; }
    .category-hero { position: sticky; top: 5rem; min-height: calc(100vh - 6.5rem); }
    .category-section { padding: 0 5vw 4rem; }
    .category-copy-note { letter-spacing: 0.12em; }
    .category-panel { min-height: 420px; }
    .category-sequence-ui { left: 1rem; right: 1rem; bottom: 1rem; }
    .category-sequence-ui p { font-size: 0.76rem; }
    .happyhealth { margin: 0 0 3rem; width: 100vw; margin-left: calc(50% - 50vw); margin-right: calc(50% - 50vw); min-height: 320px; }
    .happyhealth img { min-height: 320px; }
    .happyhealth-copy { left: 1.4rem; right: 1.4rem; bottom: 1.5rem; }
    .auto-tabs-nav { justify-content: center; }
    .auto-tabs-body { padding: 1.35rem; }
    .auto-tab-panel { grid-template-columns: 1fr; }
    .prs-cinema-scroll-wrapper { height: 220vh; }
    .slide-overlay-text { bottom: 14vh; right: 5vw; max-width: 260px; }
    .slide-headline { font-size: 1.6rem; }
  }
  @media (max-width: 480px) {
    .hero h1 { font-size: 2.4rem; }
    h2 { font-size: 2rem; }
    .team-grid { grid-template-columns: 1fr 1fr; }
  }
  @media (max-width: 560px) {
    .category-detail { min-height: 180vh; }
    .category-hero { min-height: auto; }
    .category-panel { min-height: 340px; }
    .category-sequence-meta { align-items: flex-start; flex-direction: column; }
  }
`,Mt=[{bg:"url('/images/patient.webp')",main:!0},{bg:"url('/images/running.png')",tag:"Athletic Performance",headline:["Train Smarter,",a.jsx("em",{children:"Not Harder"},"e")],body:"Your genetics reveal injury risk, recovery rate & muscle composition."},{bg:"url('/images/happyfamily.jpg')",tag:"Family Wellness",headline:["Protect What",a.jsxs(a.Fragment,{children:[a.jsx("br",{},"br"),a.jsx("em",{children:"Matters Most"},"e")]})],body:"Understand inherited skin risks â€” for you and those you love."},{bg:"url('/images/running.png')",tag:"Nutrition & Diet",headline:["Eat for Your",a.jsxs(a.Fragment,{children:[a.jsx("br",{},"br"),a.jsx("em",{children:"Genetic Type"},"e")]})],body:"Discover how your body metabolises fats, carbs & key nutrients."}],io=[{stars:"â˜…â˜…â˜…â˜…â˜…",text:"My GeneSkin report helped me finally understand why my skin reacts so intensely to certain environments. The recommendations were practical and the science was clear.",author:"Michael Johnson",role:"GeneSkin patient since 2023",avatar:"MJ"},{stars:"â˜…â˜…â˜…â˜…â˜…",text:"Understanding my genetic predispositions for dermatological conditions has completely changed my skincare approach. I now work with my dermatologist much more effectively.",author:"Sarah Lee",role:"GeneSkin patient since 2022",avatar:"SL"},{stars:"â˜…â˜…â˜…â˜…â˜…",text:"The ancestry comparison was fascinating â€” seeing how my risk profile compares to different populations helped me understand the science behind my results so much better.",author:"Robert Kim",role:"GeneSkin patient since 2021",avatar:"RK"},{stars:"*****",text:"I used to guess which products were breaking my skin barrier. After the report, my routine became much simpler and my flare-ups are far less frequent.",author:"Amira Patel",role:"GeneSkin patient since 2024",avatar:"AP"},{stars:"*****",text:"What stood out most was how easy the report made complex genetics feel. It gave me a clear plan to discuss with my specialist instead of just more questions.",author:"Daniel Novak",role:"GeneSkin patient since 2023",avatar:"DN"}],Fg=[{chr:22,pos:37251028,ref:"C / T",geno:"CC",gene:"RAC2"},{chr:11,pos:81190800,ref:"A / C",geno:"AA",gene:"near COX6A1P4"},{chr:2,pos:47971006,ref:"C / T",geno:"CC",gene:"near VN1R18P"},{chr:2,pos:48191180,ref:"A / G",geno:"AA",gene:"near RN7SKP224"},{chr:4,pos:122806140,ref:"G / T",geno:"GG",gene:"near FGF2"},{chr:1,pos:152206676,ref:"C / T",geno:"CC",gene:"CCDST"},{chr:3,pos:106156699,ref:"A / C",geno:"AA",gene:"near CBLB"},{chr:13,pos:67122540,ref:"C / T",geno:"CC",gene:"PCDH9"},{chr:4,pos:122690387,ref:"G / T",geno:"TT",gene:"near IL21-AS1"},{chr:5,pos:132295159,ref:"A / C",geno:"CA",gene:"P4HA2, SLC22A4"}];function Bt(){y.useEffect(()=>{const o=document.querySelectorAll(".reveal"),l=new IntersectionObserver(d=>d.forEach(p=>{p.isIntersecting&&(p.target.classList.add("in-view"),l.unobserve(p.target))}),{threshold:.12});return o.forEach(d=>l.observe(d)),()=>l.disconnect()})}const jc=Array.from({length:39},(o,l)=>`/images/comparison-sequence/ezgif-frame-${String(l+1).padStart(3,"0")}.jpg`);function _g(o,l){const d=o.getBoundingClientRect();if(!d.width||!d.height||!l)return;const p=o.getContext("2d");if(!p)return;const u=window.devicePixelRatio||1,g=Math.round(d.width*u),v=Math.round(d.height*u);(o.width!==g||o.height!==v)&&(o.width=g,o.height=v),p.setTransform(1,0,0,1,0,0),p.clearRect(0,0,o.width,o.height),p.setTransform(u,0,0,u,0,0);const b=l.naturalWidth||l.width,k=l.naturalHeight||l.height,E=Math.max(d.width/b,d.height/k),C=b*E,z=k*E,M=(d.width-C)/2,D=(d.height-z)/2;p.drawImage(l,M,D,C,z)}function Hg({currentPage:o,showPage:l}){const[d,p]=y.useState(!1),[u,g]=y.useState(!1),[v,b]=y.useState(!1);y.useEffect(()=>{const D=()=>{const U=document.querySelector(".hero"),I=U?Math.max(U.offsetHeight-90,40):40;p(window.scrollY>I);const P=document.querySelector(".prs-cinema-video");if(P){const B=P.getBoundingClientRect();g(B.top<window.innerHeight&&B.bottom>0)}};return window.addEventListener("scroll",D),D(),()=>window.removeEventListener("scroll",D)},[o]);const k=()=>{b(!1),document.body.style.overflow=""},E=()=>{b(!0),document.body.style.overflow="hidden"},C=D=>{k(),l(D)},M={categories:{label:"Categories",page:"categories"},allergies:{label:"â† Dashboard",page:"dashboard"},"trait-detail":{label:"â† Allergies",page:"allergies"},comparison:{label:"â† Dashboard",page:"dashboard"}}[o]||{label:"Categories",page:"categories"};return a.jsxs(a.Fragment,{children:[a.jsxs("nav",{className:`gs-nav${d?" scrolled":""}${u?" nav-transparent":""}`,children:[a.jsxs("span",{className:"nav-logo",onClick:()=>C("dashboard"),children:["Polygenic ",a.jsx("span",{children:"RiskScore"})]}),a.jsxs("ul",{className:"nav-links",children:[a.jsx("li",{children:a.jsx("a",{onClick:()=>{C("dashboard"),setTimeout(()=>{var D;return(D=document.getElementById("contact-anchor"))==null?void 0:D.scrollIntoView({behavior:"smooth"})},300)},children:"Contact"})}),a.jsx("li",{children:a.jsx("a",{onClick:()=>C(M.page),children:M.label})})]}),a.jsx("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:a.jsx("button",{className:"btn-outline sm",onClick:()=>window.location.href="/login",children:"Login"})}),a.jsxs("button",{className:`nav-hamburger${v?" open":""}`,onClick:()=>v?k():E(),"aria-label":"Open menu",children:[a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{})]})]}),a.jsxs("div",{className:`mobile-menu${v?" open":""}`,children:[a.jsx("a",{onClick:()=>C("dashboard"),children:"Dashboard"}),a.jsx("a",{onClick:()=>C("allergies"),children:"Allergies"}),a.jsx("a",{onClick:()=>C("categories"),children:"Categories"}),a.jsx("a",{onClick:()=>C("comparison"),children:"Risk Analysis"}),a.jsx("a",{onClick:()=>{C("dashboard"),setTimeout(()=>{var D;return(D=document.getElementById("contact-anchor"))==null?void 0:D.scrollIntoView({behavior:"smooth"})},300)},children:"Contact"}),a.jsxs("div",{className:"mobile-menu-cta",children:[a.jsx("button",{className:"nav-cta",style:{width:"100%",padding:"1rem"},onClick:()=>C("comparison"),children:"View Report"}),a.jsx("button",{className:"btn-outline",style:{width:"100%",padding:"1rem",color:"var(--dark)",borderColor:"var(--dark)"},onClick:()=>window.location.href="/login",children:"Login"})]})]})]})}function Vg({showPage:o,id:l="contact-anchor"}){return a.jsxs("footer",{className:"gs-footer",id:l,children:[a.jsxs("div",{className:"foot-brand",children:[a.jsxs("span",{className:"nav-logo",onClick:()=>o("dashboard"),children:["Gene",a.jsx("span",{children:"Skin"})]}),a.jsx("p",{children:"Personalised genetic skin health reports powered by validated GWAS science. Understanding your DNA to help you care for your skin."})]}),a.jsxs("div",{className:"foot-col",children:[a.jsx("h4",{children:"Report Categories"}),a.jsxs("ul",{children:[a.jsx("li",{children:a.jsx("a",{onClick:()=>o("allergies"),children:"Allergies"})}),a.jsx("li",{children:a.jsx("a",{onClick:()=>o("comparison"),children:"Dermatological Diseases"})}),a.jsx("li",{children:a.jsx("a",{onClick:()=>o("comparison"),children:"Skin Aesthetics"})}),a.jsx("li",{children:a.jsx("a",{onClick:()=>o("comparison"),children:"Skin Health Markers"})}),a.jsx("li",{children:a.jsx("a",{onClick:()=>o("comparison"),children:"Risk Comparison"})})]})]}),a.jsxs("div",{className:"foot-col",children:[a.jsx("h4",{children:"About"}),a.jsxs("ul",{children:[a.jsx("li",{children:a.jsx("a",{href:"#",children:"About GeneSkin"})}),a.jsx("li",{children:a.jsx("a",{href:"#",children:"Our Science"})}),a.jsx("li",{children:a.jsx("a",{href:"#",children:"Meet the Team"})}),a.jsx("li",{children:a.jsx("a",{href:"#",children:"Patient Portal"})}),a.jsx("li",{children:a.jsx("a",{href:"#",children:"Privacy Policy"})})]})]}),a.jsxs("div",{className:"foot-col",children:[a.jsx("h4",{children:"Contact"}),a.jsxs("ul",{children:[a.jsx("li",{children:a.jsx("a",{href:"#",children:"1420 Wellness Blvd, Suite 3"})}),a.jsx("li",{children:a.jsx("a",{href:"#",children:"San Francisco, CA 94103"})}),a.jsx("li",{children:a.jsx("a",{href:"#",children:"info@geneskin.com"})}),a.jsx("li",{children:a.jsx("a",{href:"#",children:"Monâ€“Fri: 8am â€“ 6pm"})})]})]}),a.jsxs("div",{className:"foot-bottom",children:[a.jsx("p",{children:"Â© 2026 GeneSkin  Â·  ID: P00007901EC  Â·  For informational purposes only. Not a substitute for professional medical advice."}),a.jsxs("div",{className:"foot-socials",children:[a.jsx("div",{className:"foot-social",children:"in"}),a.jsx("div",{className:"foot-social",children:"f"}),a.jsx("div",{className:"foot-social",children:"ig"}),a.jsx("div",{className:"foot-social",children:"âœ‰"})]})]})]})}function Og(){const o=y.useRef(null),l=["Receiving your report may feel overwhelming. That's normal.","Your results show predispositions, not certainties.","Start with your High and Very High traits and follow the simple recommendations provided.","When ready, speak with a genetic counsellor or dermatologist for more personal guidance.","Your genes are not your destiny. Lifestyle and early care can still make a real difference.","Take it one step at a time."],d=12,p=14,u=d+p*l.length,[g,v]=y.useState(0),[b,k]=y.useState(!1),[E,C]=y.useState(0),[z,M]=y.useState(-1);y.useEffect(()=>{const P=()=>{if(!o.current)return;const B=o.current.getBoundingClientRect(),q=Math.max(o.current.offsetHeight-window.innerHeight,1),_=Math.min(Math.max(-B.top,0),q),J=Math.min(100,_/q*100),ee=J<=u?0:(J-u)/Math.max(100-u,1);v(J),k(_>24),C(Math.min(ee*180,180))};return window.addEventListener("scroll",P,{passive:!0}),P(),()=>window.removeEventListener("scroll",P)},[u]);const D=g<d?-1:Math.min(l.length-1,Math.floor((g-d)/p));y.useEffect(()=>{if(D<0){M(-1);return}const P=window.setTimeout(()=>{M(D)},140);return()=>window.clearTimeout(P)},[D]);const U=z>=0?l[z]:null,I=z===l.length-1?"prs-cinema-line--final":"prs-cinema-line--step";return a.jsx("div",{className:"prs-cinema-scroll-wrapper",ref:o,children:a.jsxs("section",{className:"prs-cinema",children:[a.jsx("video",{className:"prs-cinema-video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,style:{transform:`translateY(${E*.65}px) scale(1.04)`},children:a.jsx("source",{src:"/images/prsreport.mp4",type:"video/mp4"})}),a.jsx("div",{className:"prs-cinema-overlay"}),a.jsx("div",{className:"prs-cinema-scroll-hint",style:{opacity:g>8?0:1},children:a.jsx("div",{className:"prs-cinema-progress-track",children:a.jsx("div",{className:"prs-cinema-progress-bar",style:{width:`${g}%`}})})}),a.jsxs("div",{className:"prs-cinema-content",style:{transform:`translate(-50%, calc(-50% + ${E}px))`},children:[a.jsx("div",{className:`prs-cinema-line${b?" in-view":""}`,style:{transitionDelay:"0ms"},children:"You Have Your Results. Now What?"}),a.jsx("div",{className:"prs-cinema-message-stage",children:U?a.jsx("div",{className:"prs-cinema-message-shell",children:a.jsx("div",{className:`prs-cinema-line prs-cinema-line--sub ${I} in-view`,children:U})},z):null})]})]})})}function Ug({showPage:o}){Bt();const[l,d]=y.useState(0),p=y.useRef(null),u=y.useRef(null),g=y.useCallback(E=>{d((E%Mt.length+Mt.length)%Mt.length)},[]);y.useEffect(()=>(u.current=setInterval(()=>g(l+1),5e3),()=>clearInterval(u.current)),[l,g]);const[v,b]=y.useState(!1),k=()=>{b(!0),setTimeout(()=>b(!1),3e3)};return a.jsxs("div",{children:[a.jsxs("section",{className:"hero",style:{padding:0},ref:p,onMouseEnter:()=>clearInterval(u.current),onMouseLeave:()=>{u.current=setInterval(()=>g(l+1),5e3)},children:[a.jsx("div",{className:"hero-slideshow",children:Mt.map((E,C)=>a.jsx("div",{className:`hero-slide${C===l?" active":""}`,style:{backgroundImage:E.bg},children:E.main?a.jsxs("div",{className:"hero-content",children:[a.jsx("div",{className:"hero-tag",children:"Genetic Analysis Report"}),a.jsxs("h1",{children:["Your Genetic",a.jsx("br",{}),a.jsx("em",{children:"Skin Profile"})]}),a.jsx("p",{className:"hero-desc",children:"Comprehensive analysis of 37 traits and conditions across skin health, dermatological diseases, aesthetics, and allergies. Personalised insights from your DNA."})]}):a.jsxs("div",{className:"slide-overlay-text",children:[a.jsx("span",{className:"slide-tag",children:E.tag}),a.jsx("p",{className:"slide-headline",children:E.headline}),a.jsx("p",{className:"slide-body",children:E.body})]})},C))}),a.jsx("div",{className:"hero-overlay"}),a.jsx("div",{className:"hero-dots",children:Mt.map((E,C)=>a.jsx("span",{className:`hero-dot${C===l?" active":""}`,onClick:()=>g(C)},C))})]}),a.jsxs("div",{className:"stats-strip",children:[a.jsxs("div",{className:"stat-item stat-tagline",children:[a.jsx("div",{className:"stat-num",children:"Excellence"}),a.jsx("div",{className:"stat-label",children:"Built Over Time"})]}),a.jsx("div",{className:"stat-item stat-tagline",children:a.jsx("div",{className:"stat-num",children:"Where Customers Come First"})}),a.jsxs("div",{className:"stat-item stat-tagline",children:[a.jsx("div",{className:"stat-num",children:"7+"}),a.jsx("div",{className:"stat-label",children:"years of experience"})]})]}),a.jsx("section",{className:"about",id:"about-anchor",children:a.jsxs("div",{className:"about-inner reveal",children:[a.jsx("div",{className:"about-img-wrap",children:a.jsx("img",{src:"/images/hosiptalin.jpg",className:"hosiptalin",alt:"Hospital"})}),a.jsxs("div",{className:"about-content",children:[a.jsx("span",{className:"section-tag",children:"About Your Report"}),a.jsxs("h2",{children:["Science of ",a.jsx("em",{children:"Skin & Genetics"})]}),a.jsx("p",{children:"Your skin is shaped by thousands of small DNA variations influencing how it looks, reacts, ages, and heals. No two people's genetic blueprint is the same."}),a.jsx("p",{children:"GeneSkin uses PRS methodology to capture the combined effect of many variants at once, calculated from validated GWAS data and compared against 4 global population panels."}),a.jsxs("div",{className:"credentials",children:[a.jsx("div",{className:"credential",children:"Conditions like eczema and psoriasis have strong genetic components PRS can identify early"}),a.jsx("div",{className:"credential",children:"Genetics explains why identical routines produce different results in different people"}),a.jsx("div",{className:"credential",children:"For informational purposes only â€” consult a clinician"})]})]})]})}),a.jsxs("div",{className:"booking",id:"booking-anchor",children:[a.jsxs("div",{className:"booking-left reveal",children:[a.jsx("span",{className:"section-tag",children:"Consultation"}),a.jsxs("h2",{children:["Ready to Understand",a.jsx("em",{children:","})," Your Results?"]}),a.jsx("p",{children:"Book a consultation with a genetic counsellor or dermatologist to discuss your personalised skin report. Same-day appointments often available."}),a.jsx("button",{className:"btn-light",children:"Call Us: 000 000"})]}),a.jsxs("div",{className:"booking-form reveal",children:[a.jsx("h3",{children:"Book Your Consultation"}),a.jsxs("div",{className:"form-row",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"First Name"}),a.jsx("input",{type:"text",placeholder:"First name"})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Last Name"}),a.jsx("input",{type:"text",placeholder:"Last name"})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Email Address"}),a.jsx("input",{type:"email",placeholder:"you@email.com"})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Phone Number"}),a.jsx("input",{type:"tel",placeholder:"+1 000 000 0000"})]}),a.jsxs("div",{className:"form-group full",children:[a.jsx("label",{children:"Area of Interest"}),a.jsxs("select",{children:[a.jsx("option",{children:"Select a category..."}),a.jsx("option",{children:"Allergies"}),a.jsx("option",{children:"Dermatological Diseases"}),a.jsx("option",{children:"Skin Aesthetics"}),a.jsx("option",{children:"Skin Health Markers"}),a.jsx("option",{children:"Full Report Review"})]})]}),a.jsxs("div",{className:"form-group full",children:[a.jsx("label",{children:"Additional Notes"}),a.jsx("input",{type:"text",placeholder:"Any specific concerns from your report..."})]}),a.jsx("button",{className:"submit-btn",type:"button",onClick:k,style:v?{background:"var(--accent)"}:{},children:v?"âœ“ Request Sent!":"Request Consultation â†’"})]})]})]}),a.jsx(Og,{}),a.jsxs("section",{className:"testimonials",children:[a.jsxs("div",{className:"test-head reveal",children:[a.jsx("span",{className:"section-tag",children:"Patient Stories"}),a.jsxs("h2",{children:["Trusted by ",a.jsx("em",{children:"Thousands"})]})]}),a.jsx("div",{className:"testimonials-marquee reveal",children:a.jsx("div",{className:"testimonials-track",children:[...io,...io].map((E,C)=>a.jsxs("div",{className:"test-card","aria-hidden":C>=io.length?!0:void 0,children:[a.jsxs("div",{children:[a.jsx("div",{className:"test-stars",children:E.stars}),a.jsxs("p",{className:"test-text",children:['"',E.text,'"']})]}),a.jsxs("div",{className:"test-author",children:[a.jsx("div",{className:"test-avatar",children:E.avatar}),a.jsxs("div",{children:[a.jsx("div",{className:"test-name",children:E.author}),a.jsx("div",{className:"test-role",children:E.role})]})]})]},C))})})]}),a.jsxs("section",{className:"team",id:"team-anchor",children:[a.jsxs("div",{className:"team-head reveal",children:[a.jsxs("div",{children:[a.jsx("span",{className:"section-tag",children:"Our Specialists"}),a.jsxs("h2",{children:["Meet the ",a.jsx("em",{children:"Team"})]})]}),a.jsx("button",{className:"btn-outline",style:{color:"var(--dark)",borderColor:"var(--dark)"},children:"View All Staff"})]}),a.jsx("div",{className:"team-grid reveal",children:[{name:"Dr. ",specialty:"Genetic Dermatology",bg:"linear-gradient(150deg,#a8c5bd 0%,#2e5245 100%)"},{name:"Dr.",specialty:"Immunology",bg:"linear-gradient(150deg,#c5b8a8 0%,#6b5a3e 100%)"},{name:"Dr. ",specialty:"Genetic Counselling",bg:"linear-gradient(150deg,#b8c5c0 0%,#3e5a52 100%)"},{name:"Dr. ",specialty:"Allergology",bg:"linear-gradient(150deg,#c5c0b8 0%,#5a523e 100%)"}].map((E,C)=>a.jsxs("div",{className:"team-card",children:[a.jsx("div",{className:"team-photo",style:{background:E.bg},children:a.jsxs("svg",{viewBox:"0 0 100 130",xmlns:"http://www.w3.org/2000/svg",width:"60%",children:[a.jsx("circle",{cx:"50",cy:"38",r:"28",fill:"rgba(255,255,255,0.18)"}),a.jsx("ellipse",{cx:"50",cy:"110",rx:"38",ry:"42",fill:"rgba(255,255,255,0.12)"})]})}),a.jsxs("div",{className:"team-overlay",children:[a.jsx("div",{className:"team-social",children:"in"}),a.jsx("div",{className:"team-social",children:"âœ‰"}),a.jsx("div",{className:"team-social",children:"ðŸ”—"})]}),a.jsxs("div",{className:"team-info",children:[a.jsx("div",{className:"team-name",children:E.name}),a.jsx("div",{className:"team-specialty",children:E.specialty})]})]},C))})]}),a.jsx(Vg,{showPage:o,id:"contact-anchor"})]})}function $g({showPage:o,setComparisonCategory:l}){Bt();const d=[{key:"health",name:"Health",tag:"Genetic Risk",img:"/images/healthcard.jpg",illus:"illus-health",target:"comparison"},{key:"physical",name:"Physical Traits",tag:"Phenotype Analysis",img:"/images/fitness.jpg",illus:"illus-physical",target:"comparison"},{key:"nutrition",name:"Nutrition",tag:"Nutrition Profile",img:"/images/nutritioncard.jpg",illus:"illus-other",target:"comparison"},{key:"sports",name:"Sports",tag:"Performance Profile",img:"/images/basket.jpg",illus:"illus-nutrition",target:"comparison"}];return a.jsxs("div",{className:"categories-page",children:[a.jsxs("div",{className:"categories-page-header reveal",children:[a.jsx("div",{className:"section-tag",children:"Report Coverage"}),a.jsxs("h1",{children:["Explore ",a.jsx("em",{children:"Categories"})]}),a.jsx("p",{children:"Four areas of genetic analysis - each delivering personalised insights based on your DNA profile and polygenic risk scores."})]}),a.jsx("div",{className:"portfolio-grid",children:d.map((p,u)=>a.jsxs("div",{className:"portfolio-card reveal",onClick:()=>{l(p.key),o(p.target)},children:[a.jsx("div",{className:`portfolio-card-img-wrap ${p.illus}`,children:a.jsx("img",{src:p.img,alt:p.name,className:"portfolio-card-img"})}),a.jsxs("div",{className:"portfolio-card-footer",children:[a.jsxs("div",{className:"portfolio-card-meta",children:[a.jsx("div",{className:"portfolio-card-name",children:p.name}),a.jsx("div",{className:"portfolio-card-tag",children:p.tag})]}),a.jsx("div",{className:"portfolio-card-arrow",children:a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("line",{x1:"7",y1:"17",x2:"17",y2:"7",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("polyline",{points:"7 7 17 7 17 17",strokeLinecap:"round",strokeLinejoin:"round"})]})})]})]},u))})]})}function Gg({showPage:o}){Bt();const[l,d]=y.useState(0),p=[{label:"Overview",href:"overview"},{label:"Eczema",href:"eczema"},{label:"Environmental Trigger Responses",href:"hives"},{label:"General Allergic Sensitivity",href:"contact-dermatitis"},{label:"FAQs",href:"faqs"}],u=[{risk:"vh",badge:"b-vh",label:"Very High",id:"hives",name:"Itch intensity from mosquito bite",desc:"The intensity of mosquito bite itching refers to the body's reaction to the mosquito's saliva, which can range from mild to intense. This indicates how the immune system responds to allergens.",clickable:!0},{risk:"md",badge:"b-md",label:"Medium",id:"contact-dermatitis",name:"Allergic diseases (asthma, allergic rhinitis, or eczema)",desc:"Reactions of the body to substances that are normally harmless, causing symptoms such as difficulty breathing, sneezing, or skin irritation."},{risk:"md",badge:"b-md",label:"Medium",name:"Allergic sensitivity",desc:"The body's reaction to substances that are normally harmless, such as pollen or food, causing symptoms like itching, swelling, and difficulty breathing."},{risk:"md",badge:"b-md",label:"Medium",id:"eczema",name:"Eczema and allergies",desc:"Skin reactions that occur due to sensitivities to substances, causing itching, redness, and inflammation."}];return a.jsxs("div",{children:[a.jsxs("section",{className:"allergies-section",id:"overview",children:[a.jsx("div",{className:"allergy-head reveal",children:a.jsxs("div",{children:[a.jsx("span",{className:"section-tag"}),a.jsx("h2",{children:a.jsx("em",{children:"Allergies"})}),a.jsx("p",{style:{fontSize:"0.95rem",fontWeight:300,color:"var(--cream)",marginTop:"1rem",maxWidth:580,lineHeight:1.75},children:"Analysis of immune responses, sensitivities, and allergic reactions based on your genetic variants."})]})}),a.jsxs("div",{className:"traits-layout reveal",children:[a.jsxs("div",{className:"jump-menu-container",children:[a.jsx("div",{className:"jump-menu-header",children:"On this page"}),a.jsx("ul",{className:"jump-menu-list",children:p.map((g,v)=>a.jsx("li",{className:l===v?"active":"",children:a.jsx("a",{onClick:()=>{var b;d(v),(b=document.getElementById(g.href))==null||b.scrollIntoView({behavior:"smooth"})},children:g.label})},v))})]}),a.jsx("div",{className:"traits-list",children:u.map((g,v)=>a.jsxs("div",{id:g.id,className:`trait-row ${g.risk}`,onClick:()=>g.clickable&&o("trait-detail"),children:[a.jsx("div",{className:`rbadge ${g.badge}`,children:g.label}),a.jsxs("div",{children:[a.jsx("div",{className:"tname",children:g.name}),a.jsx("div",{className:"tdesc",children:g.desc})]}),a.jsx("div",{className:"tarrow",children:"â†’"})]},v))})]})]}),a.jsx("div",{id:"faqs"}),a.jsxs("footer",{className:"gs-footer",id:"contact-anchor-allergies",children:[a.jsxs("div",{className:"foot-brand",children:[a.jsxs("span",{className:"nav-logo",onClick:()=>o("dashboard"),children:["Gene",a.jsx("span",{children:"Skin"})]}),a.jsx("p",{children:"Personalised genetic skin health reports. ID: P00007901EC Â· July 24, 2026"})]}),a.jsxs("div",{className:"foot-col",children:[a.jsx("h4",{children:"Report Sections"}),a.jsxs("ul",{children:[a.jsx("li",{children:a.jsx("a",{onClick:()=>o("dashboard"),children:"Dashboard"})}),a.jsx("li",{children:a.jsx("a",{onClick:()=>o("comparison"),children:"Risk Analysis"})})]})]}),a.jsxs("div",{className:"foot-col",children:[a.jsx("h4",{}),a.jsx("ul",{})]}),a.jsxs("div",{className:"foot-col",children:[a.jsx("h4",{}),a.jsx("ul",{})]}),a.jsxs("div",{className:"foot-bottom",children:[a.jsx("p",{children:"Â© 2026 GeneSkin  Â·  For informational purposes only."}),a.jsxs("div",{className:"foot-socials",children:[a.jsx("div",{className:"foot-social",children:"in"}),a.jsx("div",{className:"foot-social",children:"âœ‰"})]})]})]})]})}function Wg({showPage:o}){return Bt(),a.jsxs("div",{children:[a.jsxs("section",{className:"detail-section",style:{paddingTop:"7rem"},children:[a.jsxs("div",{className:"reveal",children:[a.jsx("span",{className:"section-tag",children:"Trait Detail"}),a.jsx("h2",{className:"detail-title",children:"Itch intensity from mosquito bite"}),a.jsx("p",{className:"detail-sub",children:"The intensity of mosquito bite itching refers to the body's reaction to the mosquito's saliva, which can range from mild to intense. This characteristic is important because it indicates how the immune system responds to allergens."}),a.jsx("div",{className:"risk-pill",children:"âš  Very High Risk"})]}),a.jsxs("div",{className:"detail-inner",children:[a.jsxs("div",{className:"reveal",children:[a.jsxs("div",{className:"card",children:[a.jsxs("div",{className:"card-title",children:[a.jsx("span",{children:"ðŸ’¡"})," Clinical Recommendations"]}),a.jsxs("div",{className:"recs",children:[a.jsx("div",{className:"rec",children:"The phenotype of 'mosquito bite itch intensity' with a risk level of 'Very High' indicates that you experience a significantly stronger reaction to mosquito bites compared to most people. This heightened sensitivity can lead to more intense itching and discomfort when bitten, which may be bothersome and could affect your quality of life."}),a.jsx("div",{className:"rec",children:"To manage this condition, consider using topical anti-itch creams or antihistamines to alleviate symptoms when you do get bitten. Additionally, taking preventive measures such as using insect repellent, wearing protective clothing, and avoiding areas with high mosquito activity can help reduce the likelihood of bites. If the itching becomes severe or persistent, consulting a healthcare professional for further advice may be beneficial."})]})]}),a.jsxs("div",{className:"card",children:[a.jsxs("div",{className:"card-title",children:[a.jsx("span",{children:"ðŸ§¬"})," Genetic Variants"]}),a.jsx("p",{style:{color:"var(--light)",fontSize:"0.85rem",fontWeight:300,marginBottom:"1.2rem"},children:"The following genetic variants are associated with this phenotype, listed in descending order of their impact on your Polygenic Risk Score:"}),a.jsx("div",{style:{overflowX:"auto"},children:a.jsxs("table",{className:"gtable",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Chromosome"}),a.jsx("th",{children:"Position"}),a.jsx("th",{children:"Ref / Effect Alleles"}),a.jsx("th",{children:"Your Genotype"}),a.jsx("th",{children:"Gene"})]})}),a.jsx("tbody",{children:Fg.map((l,d)=>a.jsxs("tr",{children:[a.jsx("td",{children:l.chr}),a.jsx("td",{children:l.pos}),a.jsx("td",{children:l.ref}),a.jsx("td",{children:l.geno}),a.jsx("td",{children:a.jsx("span",{className:"gbadge",children:l.gene})})]},d))})]})})]}),a.jsxs("div",{className:"card",children:[a.jsxs("div",{className:"card-title",children:[a.jsx("span",{children:"ðŸ“š"})," Research Reference"]}),a.jsxs("div",{className:"res-block",children:[a.jsx("div",{className:"res-ttl",children:"GWAS of self-reported mosquito bite size, itch intensity and attractiveness to mosquitoes implicates immune-related predisposition loci"}),a.jsx("div",{className:"res-doi",children:"DOI: 10.1093/hmg/ddx036"}),a.jsx("p",{className:"res-body",children:"This study investigates how people react to mosquito bites, focusing on the intensity of itching, the size of the reaction, and attractiveness to mosquitoes. Information from over 84,000 individuals was analyzed, resulting in the identification of 15 significant genetic associations."}),a.jsx("a",{href:"https://www.ebi.ac.uk/gwas/studies/GCST004861",className:"res-link",target:"_blank",rel:"noreferrer",children:"View full study â†’"})]})]})]}),a.jsxs("div",{className:"reveal",children:[a.jsxs("div",{className:"pop-card",children:[a.jsx("div",{className:"pop-title",children:"Population Comparison"}),a.jsx("p",{className:"pop-sub",children:"Your genetic risk compared to different populations:"}),a.jsx("div",{className:"pop-bars",children:[{label:"You",pct:92,you:!0},{label:"European",pct:68},{label:"East Asian",pct:72},{label:"African",pct:65},{label:"South Asian",pct:70}].map((l,d)=>a.jsxs("div",{className:"pop-row",children:[a.jsx("div",{className:"pop-lbl",children:l.label}),a.jsx("div",{className:"pop-track",children:a.jsxs("div",{className:`pop-fill${l.you?" you":""}`,style:{width:`${l.pct}%`},children:[l.pct,"%"]})})]},d))})]}),a.jsxs("div",{className:"insight",children:[a.jsx("strong",{children:"ðŸ’¡ Key Insight"}),a.jsx("br",{}),a.jsx("br",{}),"Your genetic profile shows very high susceptibility to mosquito bite reactions. The genes involved (particularly RAC2) are associated with immune system function, explaining the heightened inflammatory response to mosquito saliva."]})]})]})]}),a.jsxs("footer",{className:"gs-footer",children:[a.jsxs("div",{className:"foot-brand",children:[a.jsxs("span",{className:"nav-logo",onClick:()=>o("dashboard"),children:["Gene",a.jsx("span",{children:"Skin"})]}),a.jsx("p",{children:"ID: P00007901EC Â· July 24, 2026"})]}),a.jsxs("div",{className:"foot-col",children:[a.jsx("h4",{}),a.jsx("ul",{})]}),a.jsxs("div",{className:"foot-col",children:[a.jsx("h4",{}),a.jsx("ul",{})]}),a.jsxs("div",{className:"foot-col",children:[a.jsx("h4",{}),a.jsx("ul",{})]}),a.jsxs("div",{className:"foot-bottom",children:[a.jsx("p",{children:"Â© 2026 GeneSkin  Â·  For informational purposes only."}),a.jsxs("div",{className:"foot-socials",children:[a.jsx("div",{className:"foot-social",children:"in"}),a.jsx("div",{className:"foot-social",children:"âœ‰"})]})]})]})]})}function qg({showPage:o,comparisonCategory:l="health"}){var Ee;Bt();const d=[{key:"covers",label:"What It Covers",title:"What It Covers",body:[l==="physical"?"Physical traits cover inherited patterns related to pigmentation, body composition, muscle profile, and other phenotype-linked features that shape how your body may naturally present.":l==="nutrition"?"Nutrition traits focus on how your body may process fats, carbohydrates, caffeine, vitamins, minerals, and appetite-related signals.":l==="sports"?"Sports traits cover inherited patterns related to endurance capacity, strength response, muscle efficiency, recovery behavior, and tolerance for repeated training stress.":"Health traits focus on inherited tendencies related to eczema, psoriasis, rosacea, acne, skin cancer risk, and barrier instability markers that may influence flare frequency and severity.",l==="physical"?"This section helps connect those visible or structural traits so they feel less isolated and more useful in everyday routines.":l==="nutrition"?"This section helps you read those markers as a connected system instead of isolated food facts.":l==="sports"?"Instead of promising fixed outcomes, this section shows where your genetics may support stronger adaptation in some areas and greater support needs in others.":"Instead of treating every result as isolated, this section helps you understand how inflammatory response, pigmentation pathways, and repair biology can work together to shape your skin-health baseline."],meta:l==="physical"?["Body composition","Pigmentation","Phenotype markers"]:l==="nutrition"?["Metabolic response","Micronutrients","Appetite signals"]:l==="sports"?["Recovery profile","Endurance response","Strength adaptation"]:["Inflammation markers","Barrier resilience","Dermatology risk"],image:"/tabimages/sofasit.png",asideTitle:"Section Focus",asideBody:l==="physical"?"This tab frames the broader physical-traits category and shows which inherited tendencies are being summarized.":l==="nutrition"?"This tab gives the broad context for how nutrition-related markers may work together.":l==="sports"?"This tab outlines the broader sports category and the performance markers it includes.":"This tab gives the broadest overview of the health category and sets the context for the more specific tabs that follow."},{key:"use",label:"Best Use Case",title:"Best Use Case",body:[l==="physical"?"Use this section to shape training expectations, UV-protection habits, and appearance-related planning around your natural baseline.":l==="nutrition"?"Use this section to guide meal planning, identify areas where supplementation may deserve attention, and understand which nutrition habits may feel more sustainable for you.":l==="sports"?"Use this section to shape training blocks, pace recovery expectations, and decide which performance habits deserve more consistent attention.":"Use this section to prioritize screenings, simplify skincare decisions, and understand which findings deserve regular monitoring over time.",l==="physical"?"It is especially helpful when you want to set realistic goals instead of relying on generic standards that may not fit your phenotype.":l==="nutrition"?"It is particularly useful when general diet advice feels inconsistent or too generic.":l==="sports"?"It is especially helpful for avoiding random programming and building around patterns your body is more likely to repeat well.":"It is especially valuable when you want to reduce trial and error. Instead of trying random products or routines, you can focus on what supports long-term protection, calmer skin behavior, and earlier professional follow-up when needed."],meta:l==="physical"?["Training context","UV awareness","Appearance planning"]:l==="nutrition"?["Meal planning","Supplement review","Energy support"]:l==="sports"?["Training design","Recovery planning","Performance consistency"]:["Screening priority","Routine planning","Long-term monitoring"],image:"/images/dnasnitch.jpg",asideTitle:"Practical Value",asideBody:l==="physical"?"This tab is best for turning phenotype signals into useful routine decisions.":l==="nutrition"?"This tab helps turn nutrition genetics into clearer everyday food decisions.":l==="sports"?"This tab is best for translating genetics into training structure and recovery balance.":"This is the tab most directly tied to decision-making around routine, prevention, and follow-up planning."},{key:"tips",label:"Typical Recommendations",title:"Typical Recommendations",list:[l==="physical"?"Adjust routines to recovery and body-response patterns":l==="nutrition"?"Match meal structure to energy and satiety patterns":l==="sports"?"Match workout intensity to recovery patterns rather than guesswork":"Daily photoprotection and early dermatology review",l==="physical"?"Use consistent photoprotection if UV sensitivity trends higher":l==="nutrition"?"Review micronutrient gaps when relevant traits trend elevated":l==="sports"?"Track how strength and endurance blocks affect fatigue and adaptation":"Barrier-first skincare with fewer triggers",l==="physical"?"Track how body-composition changes respond to routine shifts":l==="nutrition"?"Favor consistent food habits over extreme diet swings":l==="sports"?"Build consistency around sleep, hydration, and recovery-support habits":"Tracking flare-ups to spot repeat patterns"],body:[l==="physical"?"The strongest value usually comes from calibration. Small, repeatable adjustments often matter more than extreme interventions.":l==="nutrition"?"Nutrition traits are most useful when they support steady routines. A sustainable plan usually outperforms a perfect plan you cannot keep.":l==="sports"?"Athletic genetics become more useful when they shape repeatable systems. The goal is not to limit training, but to help it fit how your body best adapts.":"These actions are intentionally simple because consistency usually matters more than intensity. A steady barrier-supportive routine often outperforms aggressive switching between products."],meta:l==="physical"?["Routine calibration","Recovery-aware","Photoprotection"]:l==="nutrition"?["Consistency first","Micronutrient awareness","Sustainable eating"]:l==="sports"?["Recovery systems","Adaptation tracking","Smarter programming"]:["Sun protection","Barrier-first care","Pattern tracking"],image:"/tabimages/discuss.png",asideTitle:"Action Layer",asideBody:l==="physical"?"These recommendations help convert phenotype insights into low-friction actions.":l==="nutrition"?"These recommendations focus on habits that are easy to apply and maintain.":l==="sports"?"These are practical adjustments most likely to improve training quality without changing your structure dramatically.":"These are the high-signal habits most likely to help when health-related skin traits trend elevated."},{key:"value",label:"Why It Matters",title:"Why It Matters",body:[l==="physical"?"Physical-traits findings help explain why some routines or environments feel easier or harder for you than for someone else.":l==="nutrition"?"Nutrition findings can make food choices feel less generic by explaining why hunger, energy stability, or nutrient support may need a more tailored approach.":l==="sports"?"Sports findings can shorten the distance between effort and insight by explaining why some training styles feel productive while others feel draining.":"Health findings often offer the highest practical value because they can guide early action. Even moderate-risk traits can become useful when they point to avoidable triggers or support earlier checkups.",l==="physical"?"That context can improve planning, reduce frustration, and support routines that fit your natural baseline.":l==="nutrition"?"That makes this category one of the most practical bridges between genetics and everyday lifestyle decisions.":l==="sports"?"That makes this category valuable not because it predicts destiny, but because it helps you build a more informed and sustainable path to performance.":"That makes this category one of the strongest bridges between DNA insight and day-to-day decisions, because it can shape how you prevent issues rather than only reacting after they appear."],meta:l==="physical"?["Realistic goals","Body awareness","Better routine fit"]:l==="nutrition"?["Daily relevance","Better energy fit","Personalised eating"]:l==="sports"?["Informed training","Sustainable progress","Better recovery fit"]:["Earlier action","Fewer avoidable triggers","Clearer prevention path"],image:"/tabimages/fatherson.png",asideTitle:"Big Picture",asideBody:l==="physical"?"This category adds context to how your body presents, adapts, and responds.":l==="nutrition"?"This category turns repeated daily food choices into a more informed strategy.":l==="sports"?"This category helps turn performance genetics into a clearer long-term training strategy.":"This category matters most because it connects DNA insight with tangible decisions you can make before problems intensify."}],p=y.useRef(null),u=y.useRef(null),g=y.useRef([]),v=y.useRef(0),[b,k]=y.useState(d[0].key),[E,C]=y.useState(!1),[z,M]=y.useState(0),[D,U]=y.useState(0),[I,P]=y.useState(!1),B=d.findIndex(X=>X.key===b),q=d[B]||d[0],_=l==="physical"?"Physical Traits Sequence":l==="nutrition"?"Nutrition Sequence":l==="sports"?"Sports Sequence":"Health Sequence",J=g.current.length||jc.length,ee=y.useCallback(()=>{const X=u.current,de=g.current[D];!X||!de||_g(X,de)},[D]);y.useEffect(()=>{let X=!1;return Promise.all(jc.map(de=>new Promise(Ce=>{const we=new Image;we.decoding="async",we.onload=()=>Ce(we),we.onerror=()=>Ce(null),we.src=de}))).then(de=>{if(X)return;const Ce=de.filter(Boolean);g.current=Ce,P(Ce.length>0),U(0)}),()=>{X=!0,v.current&&(window.cancelAnimationFrame(v.current),v.current=0)}},[]),y.useEffect(()=>{I&&ee()},[ee,I]),y.useEffect(()=>{if(!I)return;const X=()=>{ee()};return window.addEventListener("resize",X),()=>window.removeEventListener("resize",X)},[ee,I]),y.useEffect(()=>{if(!I)return;const X=()=>{v.current||(v.current=window.requestAnimationFrame(()=>{v.current=0;const de=p.current,Ce=g.current.length;if(!de||!Ce)return;const we=window.innerWidth<=768?80:92,ze=Math.max(de.offsetHeight-window.innerHeight+we,1),Me=de.getBoundingClientRect().top,Le=Math.min(Math.max(we-Me,0),ze),Ve=Math.min(Math.max(Le/ze,0),1),ve=1-Math.pow(1-Ve,1.12),F=Math.min(Ce-1,Math.round(ve*(Ce-1)));U(Y=>Y===F?Y:F)}))};return X(),window.addEventListener("scroll",X,{passive:!0}),window.addEventListener("resize",X),()=>{window.removeEventListener("scroll",X),window.removeEventListener("resize",X),v.current&&(window.cancelAnimationFrame(v.current),v.current=0)}},[I]),y.useEffect(()=>{if(E)return;const X=6e3,de=100;M(0);const Ce=window.setInterval(()=>{M(ze=>{const Me=ze+de/X;return Me>=1?1:Me})},de),we=window.setTimeout(()=>{k(d[(B+1)%d.length].key)},X);return()=>{window.clearInterval(Ce),window.clearTimeout(we)}},[B,b,E,d]);const le=2*Math.PI*25,ge=le*(1-z);return a.jsxs("div",{children:[a.jsxs("section",{className:"comparison-section",children:[a.jsx("section",{className:"category-detail",ref:p,children:a.jsxs("div",{className:"category-hero reveal",children:[a.jsxs("div",{className:"category-copy",children:[a.jsx("div",{className:"section-tag",children:"Category Detail"}),a.jsx("h1",{children:l==="physical"?a.jsxs(a.Fragment,{children:["Physical Traits ",a.jsx("em",{children:"Insights"})]}):l==="nutrition"?a.jsxs(a.Fragment,{children:["Nutrition ",a.jsx("em",{children:"Insights"})]}):l==="sports"?a.jsxs(a.Fragment,{children:["Sports ",a.jsx("em",{children:"Insights"})]}):a.jsxs(a.Fragment,{children:["Health ",a.jsx("em",{children:"Insights"})]})}),a.jsx("p",{children:l==="physical"?"This category explains how your genetics may influence visible features, body composition tendencies, muscle response, and environmental sensitivity such as UV exposure. It helps translate phenotype-related markers into practical expectations.":l==="nutrition"?"This category brings together genetic signals linked to metabolism, appetite regulation, nutrient handling, and how your body may respond to fats, carbohydrates, and key micronutrients. It is designed to support more personalised food decisions.":l==="sports"?"This category highlights genetics linked to performance style, recovery rate, endurance, strength response, and how your body may adapt to different training demands. It helps position athletic potential as a planning tool rather than a fixed label.":"This category brings together your genetics for inflammatory skin disease, long-term dermatological risk, and protective barrier markers. It is designed to help you understand where your highest clinical attention may be needed and which findings are better suited for prevention rather than concern."}),a.jsx("div",{className:"category-copy-note",children:"Scroll to scrub the sequence"})]}),a.jsx("div",{className:"category-panel",children:a.jsxs("div",{className:"category-sequence-shell",children:[a.jsx("canvas",{ref:u,className:`category-sequence-canvas${I?" is-ready":""}`,role:"img","aria-label":`${_} scroll sequence`}),I?null:a.jsx("div",{className:"category-sequence-loading",children:"Loading sequence"}),a.jsxs("div",{className:"category-sequence-ui",children:[a.jsxs("div",{className:"category-sequence-meta",children:[a.jsx("strong",{children:_}),a.jsxs("span",{children:[String(Math.min(D+1,J)).padStart(2,"0")," / ",String(J).padStart(2,"0")]})]}),a.jsx("div",{className:"category-sequence-progress",children:a.jsx("span",{style:{transform:`scaleX(${J>0?(D+1)/J:0})`}})}),a.jsx("p",{children:"Scroll through this section to advance the 30 FPS image sequence frame by frame."})]})]})})]})}),a.jsxs("div",{className:"happyhealth reveal",children:[a.jsx("img",{src:"/images/happypatient.png",alt:"Happy patient"}),a.jsxs("div",{className:"happyhealth-copy",children:[a.jsx("strong",{children:l==="physical"?"Physical Traits Focus":l==="nutrition"?"Nutrition Focus":l==="sports"?"Sports Focus":"Health Focus"}),a.jsx("h2",{children:l==="physical"?"Phenotype markers help explain how your body presents and responds.":l==="nutrition"?"Better nutrition choices start with better biological context.":l==="sports"?"Performance genetics are most useful when they guide how you train and recover.":"Early understanding supports better skin decisions."}),a.jsx("p",{children:l==="physical"?"These findings are useful when you want more realistic expectations around body composition, recovery style, pigmentation response, and appearance-related planning.":l==="nutrition"?"Your nutrition profile can help explain why energy balance, satiety, and nutrient response may differ from generic advice, making your eating strategy easier to personalize.":l==="sports"?"Your sports profile can help reveal where training response may feel more natural, where recovery may need more attention, and which habits support more stable progress over time.":"Your health profile can help highlight where prevention, regular checkups, and barrier-first care may have the biggest long-term value."})]})]}),a.jsx("section",{className:"category-section",children:a.jsxs("div",{className:"auto-tabs-page-wrapper reveal",children:[a.jsx("div",{className:"auto-tabs-nav",children:d.map(X=>a.jsx("button",{type:"button",className:`auto-tab-btn${X.key===b?" is-active":""}`,onClick:()=>{k(X.key),M(0)},children:X.label},X.key))}),a.jsx("div",{className:"auto-tabs-body",children:a.jsxs("article",{className:"auto-tab-panel",children:[a.jsxs("div",{className:"auto-tab-copy",children:[a.jsx("h3",{children:q.title}),(Ee=q.body)==null?void 0:Ee.map((X,de)=>a.jsx("p",{children:X},de)),q.list?a.jsx("ul",{children:q.list.map(X=>a.jsx("li",{children:X},X))}):null,a.jsx("div",{className:"auto-tab-copy-meta",children:q.meta.map(X=>a.jsx("span",{children:X},X))})]}),a.jsxs("div",{className:"auto-tab-aside",children:[a.jsx("img",{src:q.image,alt:q.title}),a.jsx("strong",{children:q.asideTitle}),a.jsx("p",{children:q.asideBody})]})]})}),a.jsx("div",{className:"auto-tabs-controls",children:a.jsxs("div",{className:`auto-tabs-progress${E?" is-paused":""}`,children:[a.jsxs("svg",{viewBox:"0 0 62 62","aria-hidden":"true",children:[a.jsx("circle",{className:"auto-tabs-progress-track",cx:"31",cy:"31",r:"25"}),a.jsx("circle",{className:"auto-tabs-progress-ring",cx:"31",cy:"31",r:"25",style:{strokeDasharray:le,strokeDashoffset:ge}})]}),a.jsx("button",{className:"auto-tabs-pause",type:"button",onClick:()=>C(X=>!X),"aria-label":E?"Resume auto tabs":"Pause auto tabs",children:E?">":"||"})]})})]})})]}),a.jsxs("footer",{className:"gs-footer",children:[a.jsx("div",{className:"foot-brand",children:a.jsxs("span",{className:"nav-logo",onClick:()=>o("dashboard"),children:["Polygenic",a.jsx("span",{children:"RiskScore"})]})}),a.jsxs("div",{className:"foot-col",children:[a.jsx("h4",{children:"Navigate"}),a.jsxs("ul",{children:[a.jsx("li",{children:a.jsx("a",{onClick:()=>o("dashboard"),children:"Dashboard"})}),a.jsx("li",{children:a.jsx("a",{onClick:()=>o("allergies"),children:"Allergies"})})]})]}),a.jsxs("div",{className:"foot-col",children:[a.jsx("h4",{}),a.jsx("ul",{})]}),a.jsxs("div",{className:"foot-col",children:[a.jsx("h4",{}),a.jsx("ul",{})]}),a.jsxs("div",{className:"foot-bottom",children:[a.jsx("p",{children:"Â© 2026 GeneSkin  Â·  Not a substitute for professional medical advice."}),a.jsxs("div",{className:"foot-socials",children:[a.jsx("div",{className:"foot-social",children:"in"}),a.jsx("div",{className:"foot-social",children:"âœ‰"})]})]})]})]})}function Yg(){const[o,l]=y.useState("dashboard"),[d,p]=y.useState("health");y.useEffect(()=>{if(document.getElementById("geneskin-styles"))return;const g=document.createElement("style");return g.id="geneskin-styles",g.textContent=Bg,document.head.appendChild(g),()=>{var v;return(v=document.getElementById("geneskin-styles"))==null?void 0:v.remove()}},[]);const u=y.useCallback(g=>{l(g),window.scrollTo({top:0,behavior:"smooth"})},[]);return a.jsxs("div",{style:{background:"var(--cream)",color:"var(--dark)"},children:[a.jsx(Hg,{currentPage:o,showPage:u}),a.jsx("div",{style:{display:o==="dashboard"?"block":"none"},children:a.jsx(Ug,{showPage:u})}),a.jsx("div",{style:{display:o==="categories"?"block":"none"},children:a.jsx($g,{showPage:u,setComparisonCategory:p})}),a.jsx("div",{style:{display:o==="allergies"?"block":"none"},children:a.jsx(Gg,{showPage:u})}),a.jsx("div",{style:{display:o==="trait-detail"?"block":"none"},children:a.jsx(Wg,{showPage:u})}),a.jsx("div",{style:{display:o==="comparison"?"block":"none"},children:a.jsx(qg,{showPage:u,comparisonCategory:d})})]})}const Kg=`
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --dark-bg: #2a2118;
    --accent-red: #ff4500;
    --accent-orange: #ff7b00;
    --white: #ffffff;
    --text-muted: rgba(255,255,255,0.5);
    --border-light: #e8e8e8;
    --input-bg: #f9f9f9;
    --ring: rgba(255,255,255,0.08);
  }

  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    min-height: 100vh;
    font-family: 'DM Sans', Arial, sans-serif;
    background: var(--dark-bg);
    overflow: hidden;
  }

  .login-shell {
    min-height: 100vh;
    background: var(--dark-bg);
    font-family: 'DM Sans', Arial, sans-serif;
  }

  .card {
    width: 100vw;
    height: 100vh;
    display: flex;
    border-radius: 0;
    overflow: hidden;
    animation: fadeUp 0.65s cubic-bezier(0.16,1,0.3,1) both;
    margin: 0;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(36px) scale(0.97); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }

  .left {
    flex: 0 0 52%;
    background: var(--dark-bg);
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .bg-img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    z-index: 0;
    animation: slideInLeft 0.9s cubic-bezier(0.16, 1, 0.3, 1) both;
  }

  .left::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 75% 65% at 45% 48%, rgba(255,80,0,0.1) 0%, transparent 70%),
      radial-gradient(ellipse 50% 50% at 15% 90%, rgba(255,50,0,0.06) 0%, transparent 60%);
    pointer-events: none;
    z-index: 0;
  }

  .ring-outer {
    position: absolute;
    top: 48%;
    left: 44%;
    transform: translate(-50%, -50%);
    width: 420px;
    height: 420px;
    border-radius: 50%;
    border: 1px solid var(--ring);
    z-index: 1;
    pointer-events: none;
  }

  .ring-outer::after {
    content: '';
    position: absolute;
    inset: 44px;
    border-radius: 50%;
    border: 1px solid rgba(255,255,255,0.04);
  }

  .left-tag {
    position: relative;
    z-index: 3;
    padding: 28px 40px;
    font-size: 12.5px;
    color: var(--text-muted);
    letter-spacing: 0.01em;
    font-weight: 400;
    animation: slideInLeft 0.8s 0.12s cubic-bezier(0.16, 1, 0.3, 1) both;
  }

  .hero-text {
    position: absolute;
    top: 50%;
    left: 48px;
    transform: translateY(-68%);
    z-index: 4;
    line-height: 1.08;
    font-family: Georgia, serif;
    animation: heroSlideIn 0.95s 0.2s cubic-bezier(0.16, 1, 0.3, 1) both;
  }

  .hero-text h1 {
    font-size: 40px;
    font-weight: 800;
    color: rgb(56, 80, 53);
    letter-spacing: -0.03em;
    padding-bottom: 100px;
  }

  .hero-text .wheat-text {
    color: rgb(8, 8, 8);
    font-size: 30px;
  }

  @keyframes slideInLeft {
    from { opacity: 0; transform: translateX(-54px); }
    to { opacity: 1; transform: translateX(0); }
  }

  @keyframes heroSlideIn {
    from { opacity: 0; transform: translate(-54px, -68%); }
    to { opacity: 1; transform: translate(0, -68%); }
  }

  .phone-wrap {
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-22%);
    z-index: 5;
    width: 220px;
    animation: phoneFloat 4.5s ease-in-out infinite;
    display: none;
  }

  @keyframes phoneFloat {
    0%, 100% { transform: translateX(-22%) translateY(0); }
    50% { transform: translateX(-22%) translateY(-14px); }
  }

  .phone-svg {
    width: 100%;
    filter: drop-shadow(0 30px 60px rgba(0,0,0,0.7));
  }

  .a11y-icon {
    position: absolute;
    bottom: 24px;
    right: 24px;
    z-index: 6;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    border: 2px solid rgba(255,165,0,0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0.7;
    transition: opacity 0.2s;
  }

  .a11y-icon:hover { opacity: 1; }
  .a11y-icon svg { width: 16px; height: 16px; }

  .right {
    flex: 1;
    background: #fffffe;
    display: flex;
    flex-direction: column;
    border-radius: 0 26px 26px 0;
    position: relative;
  }

  .right-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 26px 44px;
    animation: fadeUp 0.65s 0.1s cubic-bezier(0.16,1,0.3,1) both;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 9px;
    text-decoration: none;
  }

  .logo-icon { width: 30px; height: 30px; }

  .logo-text-wrap {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .logo-text {
    font-family: 'DM Sans', Arial, sans-serif;
    font-size: 1.18rem;
    font-weight: 700;
    letter-spacing: -0.01em;
    color: #1a1a1a;
  }

  .logo-green { color: #1f5b3a; }

  .logo-powered {
    display: block;
    font-family: 'DM Sans', Arial, sans-serif;
    font-size: 10px;
    font-weight: 500;
    color: #888;
    letter-spacing: 0.04em;
    margin-top: 1px;
  }

  .logo-dna {
    color: #4ead72;
    font-weight: 700;
  }

  .signup-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
    font-weight: 600;
    color: #1a1a1a;
    text-decoration: none;
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
    transition: color 0.2s;
  }

  .signup-btn:hover { color: var(--accent-red); }
  .signup-btn svg { width: 18px; height: 18px; }

  .form-area {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 60px;
    animation: fadeUp 0.65s 0.2s cubic-bezier(0.16,1,0.3,1) both;
  }

  .form-title {
    font-size: 44px;
    font-weight: 800;
    color: #1a1a1a;
    letter-spacing: -0.03em;
    margin-bottom: 32px;
  }

  .field {
    position: relative;
    margin-bottom: 14px;
  }

  .field input {
    width: 100%;
    height: 58px;
    border-radius: 40px;
    border: 1.5px solid var(--border-light);
    background: var(--input-bg);
    padding: 0 22px;
    font-family: inherit;
    font-size: 15px;
    font-weight: 500;
    color: #1a1a1a;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
    -webkit-appearance: none;
  }

  .field input::placeholder { color: #9ca3af; font-weight: 400; }

  .field input:focus {
    border-color: #d1d5db;
    background: #ffffff;
    box-shadow: 0 0 0 4px rgba(255,69,0,0.06);
  }

  .toggle-pw {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    color: #9ca3af;
    display: flex;
    align-items: center;
    padding: 4px;
    transition: color 0.2s;
  }

  .toggle-pw:hover { color: #4b5563; }
  .toggle-pw svg { width: 20px; height: 20px; }

  .forgot {
    display: inline-block;
    font-size: 13.5px;
    font-weight: 600;
    color: black;
    text-decoration: none;
    margin: 6px 4px 20px;
    transition: opacity 0.2s;
  }

  .forgot:hover { opacity: 0.75; }

  .btn-signin {
    width: 80%;
    height: 60px;
    border: none;
    border-radius: 40px;
    background: rgba(39, 39, 66, 0.562);
    color: var(--white);
    font-family: inherit;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.01em;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    position: relative;
    overflow: hidden;
    margin-left: 85px;
  }

  .btn-signin::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(95deg, rgba(255,255,255,0.12) 0%, transparent 60%);
    opacity: 0;
    transition: opacity 0.2s;
  }

  .btn-signin:hover { transform: translateY(-1px); }
  .btn-signin:hover::before { opacity: 1; }
  .btn-signin:active { transform: translateY(0); }
  .btn-signin:disabled { cursor: default; opacity: 0.92; }

  .btn-signin .arrow-icon {
    width: 20px;
    height: 20px;
    background: rgba(255,255,255,0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .btn-signin .arrow-icon svg { width: 12px; height: 12px; }

  .right-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 44px;
    animation: fadeUp 0.65s 0.3s cubic-bezier(0.16,1,0.3,1) both;
  }

  .footer-copy { font-size: 12px; color: #9ca3af; font-weight: 400; }

  .footer-links {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .footer-links a {
    font-size: 12.5px;
    font-weight: 500;
    color: #374151;
    text-decoration: none;
    transition: color 0.2s;
  }

  .footer-links a:hover { color: var(--accent-red); }

  .lang-btn {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 12.5px;
    font-weight: 500;
    color: #374151;
    background: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
    transition: color 0.2s;
  }

  .lang-btn:hover { color: var(--accent-red); }
  .lang-btn svg { width: 12px; height: 12px; }

  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    20% { transform: translateX(-8px); }
    40% { transform: translateX(8px); }
    60% { transform: translateX(-5px); }
    80% { transform: translateX(5px); }
  }

  .shake { animation: shake 0.4s ease-out; }
  .field input.error { border-color: #ef4444 !important; background: #fff5f5 !important; }
  .error-msg { font-size: 12px; color: #ef4444; margin: 4px 6px 0; font-weight: 500; display: none; }
  .error-msg.show { display: block; }

  .spinner {
    width: 18px;
    height: 18px;
    border: 2.5px solid rgba(255,255,255,0.4);
    border-top-color: white;
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
    display: none;
  }

  .spinner.show { display: block; }

  @keyframes spin { to { transform: rotate(360deg); } }

  @media (max-width: 760px) {
    .card { flex-direction: column; height: 100vh; border-radius: 0; }
    .left { display: none; }
    .right { border-radius: 20px; }
    .form-area { padding: 0 28px 20px; }
    .right-nav { padding: 22px 28px; }
    .right-footer { padding: 16px 28px; }
    .form-title { font-size: 34px; }
    .btn-signin { width: 100%; margin-left: 0; }
  }
`;function Qg(o){return`USR-${o.toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,8)||"USER0001"}`}function Xg(){const o=ra(),[l,d]=y.useState(""),[p,u]=y.useState(""),[g,v]=y.useState(!1),[b,k]=y.useState(!1),[E,C]=y.useState(!1),[z,M]=y.useState(!1),[D,U]=y.useState(!1);y.useEffect(()=>{if(document.getElementById("login-page-styles"))return;const _=document.createElement("style");return _.id="login-page-styles",_.textContent=Kg,document.head.appendChild(_),()=>{var J;return(J=document.getElementById("login-page-styles"))==null?void 0:J.remove()}},[]);const I=_=>{_==="email"&&k(!1),_==="password"&&C(!1)},P=()=>{k(!1),C(!1);const _=l.trim();let J=!0;if(_||(k(!0),J=!1),p||(C(!0),J=!1),!J){U(!0),window.setTimeout(()=>U(!1),500);return}M(!0),window.setTimeout(()=>{const ee=Qg(_),le=["Health","Nutrition","Other","Physical Characteristics"];sessionStorage.setItem("userId",ee),sessionStorage.setItem("userCategories",JSON.stringify(le)),o("/profile")},1800)},B=_=>{_.preventDefault(),window.alert("A reset link will be sent to your email.")},q=()=>{window.alert("Redirecting to Sign Up...")};return a.jsx("div",{className:"login-shell",children:a.jsxs("div",{className:`card${D?" shake":""}`,children:[a.jsxs("div",{className:"left",children:[a.jsx("img",{src:"/images/loginpic.jpg",className:"bg-img loginpicture",alt:"Background"}),a.jsx("div",{className:"ring-outer"}),a.jsx("span",{className:"left-tag",children:"Global payments made simple - online payment solutions for you."}),a.jsx("div",{className:"hero-text",children:a.jsxs("h1",{children:[a.jsx("span",{className:"wheat-text",children:"Personalized Health"}),a.jsx("br",{}),"Begins in Your DNA."]})}),a.jsx("div",{className:"phone-wrap",children:a.jsxs("svg",{className:"phone-svg",viewBox:"0 0 220 440",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("defs",{children:a.jsxs("linearGradient",{id:"logoGradPhone",x1:"96",y1:"381",x2:"124",y2:"409",gradientUnits:"userSpaceOnUse",children:[a.jsx("stop",{offset:"0%",stopColor:"#ff4500"}),a.jsx("stop",{offset:"50%",stopColor:"#ffaa00"}),a.jsx("stop",{offset:"100%",stopColor:"#00c853"})]})}),a.jsx("rect",{x:"4",y:"4",width:"212",height:"432",rx:"32",fill:"#111111"}),a.jsx("rect",{x:"4",y:"4",width:"212",height:"432",rx:"32",stroke:"#2e2e2e",strokeWidth:"6"}),a.jsx("rect",{x:"12",y:"12",width:"196",height:"416",rx:"27",fill:"#0e0e0e"}),a.jsx("rect",{x:"72",y:"20",width:"76",height:"22",rx:"11",fill:"#0e0e0e"}),a.jsx("text",{x:"22",y:"72",fontFamily:"DM Sans,sans-serif",fontSize:"9",fill:"rgba(255,255,255,0.4)",children:"Week 4-10 July"}),a.jsx("text",{x:"22",y:"100",fontFamily:"DM Sans,sans-serif",fontSize:"30",fontWeight:"800",fill:"white",children:"897.00"}),a.jsx("text",{x:"155",y:"84",fontFamily:"DM Sans,sans-serif",fontSize:"10",fill:"rgba(255,255,255,0.4)",children:"�"}),a.jsx("rect",{x:"22",y:"148",width:"18",height:"50",rx:"5",fill:"#ff4500",opacity:"0.7"}),a.jsx("rect",{x:"46",y:"135",width:"18",height:"63",rx:"5",fill:"#ff4500",opacity:"0.85"}),a.jsx("rect",{x:"70",y:"120",width:"18",height:"78",rx:"5",fill:"#ff4500"}),a.jsx("rect",{x:"94",y:"142",width:"18",height:"56",rx:"5",fill:"#ff4500",opacity:"0.75"}),a.jsx("rect",{x:"118",y:"128",width:"18",height:"70",rx:"5",fill:"#ff4500",opacity:"0.9"}),a.jsx("rect",{x:"142",y:"155",width:"18",height:"43",rx:"5",fill:"#ff4500",opacity:"0.6"}),a.jsx("rect",{x:"166",y:"140",width:"18",height:"58",rx:"5",fill:"#ff4500",opacity:"0.8"}),a.jsx("text",{x:"22",y:"212",fontFamily:"DM Sans,sans-serif",fontSize:"7.5",fill:"rgba(255,255,255,0.35)",children:"Mon"}),a.jsx("text",{x:"46",y:"212",fontFamily:"DM Sans,sans-serif",fontSize:"7.5",fill:"rgba(255,255,255,0.35)",children:"Tue"}),a.jsx("text",{x:"70",y:"212",fontFamily:"DM Sans,sans-serif",fontSize:"7.5",fill:"rgba(255,255,255,0.35)",children:"Wed"}),a.jsx("text",{x:"94",y:"212",fontFamily:"DM Sans,sans-serif",fontSize:"7.5",fill:"rgba(255,255,255,0.35)",children:"Thu"}),a.jsx("text",{x:"118",y:"212",fontFamily:"DM Sans,sans-serif",fontSize:"7.5",fill:"rgba(255,255,255,0.35)",children:"Fri"}),a.jsx("text",{x:"142",y:"212",fontFamily:"DM Sans,sans-serif",fontSize:"7.5",fill:"rgba(255,255,255,0.35)",children:"Sat"}),a.jsx("text",{x:"166",y:"212",fontFamily:"DM Sans,sans-serif",fontSize:"7.5",fill:"rgba(255,255,255,0.35)",children:"Sun"}),a.jsx("text",{x:"22",y:"238",fontFamily:"DM Sans,sans-serif",fontSize:"9",fill:"rgba(255,255,255,0.4)",children:"Category"}),a.jsx("rect",{x:"22",y:"246",width:"82",height:"46",rx:"10",fill:"#1a1a1a"}),a.jsx("text",{x:"34",y:"264",fontFamily:"DM Sans,sans-serif",fontSize:"9",fill:"rgba(255,255,255,0.5)",children:"Travel"}),a.jsx("text",{x:"34",y:"280",fontFamily:"DM Sans,sans-serif",fontSize:"11",fontWeight:"700",fill:"white",children:"950.00"}),a.jsx("rect",{x:"112",y:"246",width:"82",height:"46",rx:"10",fill:"#1a1a1a"}),a.jsx("text",{x:"122",y:"264",fontFamily:"DM Sans,sans-serif",fontSize:"9",fill:"rgba(255,255,255,0.5)",children:"Shopping"}),a.jsx("text",{x:"122",y:"280",fontFamily:"DM Sans,sans-serif",fontSize:"11",fontWeight:"700",fill:"white",children:"785.00"}),a.jsx("rect",{x:"22",y:"302",width:"56",height:"14",rx:"4",fill:"#1e1e1e"}),a.jsx("text",{x:"30",y:"313",fontFamily:"DM Sans,sans-serif",fontSize:"7",fill:"rgba(255,255,255,0.3)",children:"50.00"}),a.jsx("rect",{x:"12",y:"368",width:"196",height:"60",rx:"0",fill:"#111111"}),a.jsx("rect",{x:"12",y:"368",width:"196",height:"1",fill:"rgba(255,255,255,0.06)"}),a.jsx("rect",{x:"30",y:"384",width:"16",height:"14",rx:"3",fill:"rgba(255,255,255,0.15)"}),a.jsx("rect",{x:"58",y:"384",width:"7",height:"7",rx:"1.5",fill:"rgba(255,255,255,0.25)"}),a.jsx("rect",{x:"67",y:"384",width:"7",height:"7",rx:"1.5",fill:"rgba(255,255,255,0.25)"}),a.jsx("rect",{x:"58",y:"393",width:"7",height:"7",rx:"1.5",fill:"rgba(255,255,255,0.25)"}),a.jsx("rect",{x:"67",y:"393",width:"7",height:"7",rx:"1.5",fill:"rgba(255,255,255,0.25)"}),a.jsx("circle",{cx:"110",cy:"393",r:"13",fill:"#0e0e0e",stroke:"rgba(255,255,255,0.1)",strokeWidth:"1"}),a.jsx("circle",{cx:"110",cy:"393",r:"8",fill:"none",stroke:"url(#logoGradPhone)",strokeWidth:"2.5"}),a.jsx("circle",{cx:"144",cy:"390",r:"3",fill:"rgba(255,255,255,0.25)"}),a.jsx("circle",{cx:"152",cy:"390",r:"3",fill:"rgba(255,255,255,0.25)"}),a.jsx("circle",{cx:"160",cy:"390",r:"3",fill:"rgba(255,255,255,0.25)"}),a.jsx("circle",{cx:"178",cy:"384",r:"2",fill:"rgba(255,255,255,0.2)"}),a.jsx("circle",{cx:"184",cy:"384",r:"2",fill:"rgba(255,255,255,0.2)"}),a.jsx("circle",{cx:"178",cy:"390",r:"2",fill:"rgba(255,255,255,0.2)"}),a.jsx("circle",{cx:"184",cy:"390",r:"2",fill:"rgba(255,255,255,0.2)"}),a.jsx("circle",{cx:"178",cy:"396",r:"2",fill:"rgba(255,255,255,0.2)"}),a.jsx("circle",{cx:"184",cy:"396",r:"2",fill:"rgba(255,255,255,0.2)"}),a.jsx("rect",{x:"80",y:"430",width:"60",height:"4",rx:"2",fill:"rgba(255,255,255,0.2)"})]})}),a.jsx("div",{className:"a11y-icon",title:"Accessibility",children:a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"rgba(255,165,0,0.9)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("circle",{cx:"12",cy:"5",r:"2"}),a.jsx("path",{d:"M12 7v6m-4-4 4 1 4-1M10 17l-2 4m4-4v4m2-4 2 4"})]})})]}),a.jsxs("div",{className:"right",children:[a.jsxs("nav",{className:"right-nav",children:[a.jsxs(On,{className:"logo",to:"/",children:[a.jsx("svg",{className:"logo-icon",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("defs",{children:a.jsxs("linearGradient",{id:"payGrad",x1:"3",y1:"3",x2:"27",y2:"27",gradientUnits:"userSpaceOnUse",children:[a.jsx("stop",{offset:"0%",stopColor:"#ff4500"}),a.jsx("stop",{offset:"33%",stopColor:"#ffaa00"}),a.jsx("stop",{offset:"66%",stopColor:"#00cc66"}),a.jsx("stop",{offset:"100%",stopColor:"#0099ff"})]})})}),a.jsxs("div",{className:"logo-text-wrap",children:[a.jsxs("span",{className:"logo-text",children:[a.jsx("span",{className:"logo-green",children:"Polygenic"})," RiskScore"]}),a.jsxs("span",{className:"logo-powered",children:["powered by ",a.jsx("span",{className:"logo-dna",children:"DNA GTx"})]})]})]}),a.jsxs("button",{className:"signup-btn",type:"button",onClick:q,children:[a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),a.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),"Sign Up"]})]}),a.jsxs("div",{className:"form-area",children:[a.jsx("h2",{className:"form-title",children:"Sign In"}),a.jsxs("div",{className:"field",id:"emailField",children:[a.jsx("input",{type:"text",id:"emailInput",placeholder:"Email or Username",autoComplete:"username",value:l,onChange:_=>{d(_.target.value),I("email")},onKeyDown:_=>_.key==="Enter"&&P(),className:b?"error":""}),a.jsx("span",{className:`error-msg${b?" show":""}`,id:"emailError",children:"Please enter your email or username."})]}),a.jsxs("div",{className:"field",id:"passField",children:[a.jsx("input",{type:g?"text":"password",id:"passInput",placeholder:"Password",autoComplete:"current-password",value:p,onChange:_=>{u(_.target.value),I("password")},onKeyDown:_=>_.key==="Enter"&&P(),className:E?"error":""}),a.jsxs("button",{className:"toggle-pw",id:"togglePw",type:"button","aria-label":"Toggle password visibility",onClick:()=>v(_=>!_),children:[a.jsxs("svg",{id:"eyeOff",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",style:{display:g?"none":"block"},children:[a.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"}),a.jsx("path",{d:"M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"}),a.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]}),a.jsxs("svg",{id:"eyeOn",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",style:{display:g?"block":"none"},children:[a.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),a.jsx("circle",{cx:"12",cy:"12",r:"3"})]})]}),a.jsx("span",{className:`error-msg${E?" show":""}`,id:"passError",children:"Please enter your password."})]}),a.jsx("a",{href:"#",className:"forgot",onClick:B,children:"Forgot password?"}),a.jsxs("button",{className:"btn-signin",id:"signinBtn",type:"button",onClick:P,disabled:z,children:[a.jsx("span",{className:"arrow-icon",children:a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}),a.jsx("polyline",{points:"10 17 15 12 10 7"}),a.jsx("line",{x1:"15",y1:"12",x2:"3",y2:"12"})]})}),a.jsx("span",{id:"btnText",children:z?"Signing in...":"Sign In"}),a.jsx("div",{className:`spinner${z?" show":""}`,id:"spinner"})]})]}),a.jsxs("footer",{className:"right-footer",children:[a.jsx("span",{className:"footer-copy",children:"� Prs Inc."}),a.jsxs("div",{className:"footer-links",children:[a.jsx("a",{href:"#",children:"Contact Us"}),a.jsxs("button",{className:"lang-btn",type:"button",children:["English",a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("polyline",{points:"6 9 12 15 18 9"})})]})]})]})]})]})})}const Jg=`\uFEFF<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
  <meta charset="UTF-8" />\r
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\r
  <title>prs â€” Genetic Nutrition Dashboard</title>\r
  <link rel="preconnect" href="https://fonts.googleapis.com">\r
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Lora:ital,wght@0,400;0,600;1,400;1,600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">\r
  \r
  <link rel="stylesheet" href="nutrition.css" />\r
</head>\r
<body>\r
\r
<!-- ==================== LANDING PAGE ==================== -->\r
<div id="landing-page" class="page">\r
  <nav class="landing-nav">\r
    <div class="nav-brand">\r
      <div class="brand-dot"><span>p</span></div>\r
      <span class="brand-name">prs</span>\r
    </div>\r
    <div class="nav-links">\r
      <a href="#how-it-works">How It Works</a>\r
      <a href="#categories">Categories</a>\r
      <a href="#" class="nav-cta" onclick="showDashboard(); return false;">Login</a>\r
    </div>\r
  </nav>\r
\r
  <section class="hero">\r
    <div class="hero-left">\r
      <div class="hero-badge">\r
        <span class="pulse-dot"></span>\r
        Precision Genomic Analysis\r
      </div>\r
      <h1 class="hero-title">Your Genetic<br/><em>Nutrition</em> Report</h1>\r
      <p class="hero-desc">Unlock the power of your DNA to understand metabolic efficiency, nutrient absorption, lipid profiles, and cardiovascular risk â€” powered by polygenic risk scoring from 500K+ genetic variants.</p>\r
      <div class="hero-actions">\r
        <button class="btn-primary" onclick="showDashboard()">View Sample Report</button>\r
        <button class="btn-secondary" onclick="showDashboard()">\r
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/></svg>\r
          Login to Account\r
        </button>\r
      </div>\r
      <div class="hero-stats">\r
        <div class="stat-pill"><strong>36</strong>Traits Analyzed</div>\r
        <div class="stat-pill"><strong>500K+</strong>Variants Scored</div>\r
        <div class="stat-pill"><strong>5</strong>Nutrition Categories</div>\r
      </div>\r
    </div>\r
    <div class="hero-right">\r
      <div class="hero-visual-card">\r
        <div class="hvc-label">Alex Laurent Â· Report #NG-2024-0026</div>\r
        <div class="hvc-name">Overall Genetic Nutrition Risk</div>\r
        <div class="hvc-score-row">\r
          <div class="hvc-big-score">78</div>\r
          <div class="hvc-score-meta">\r
            <div class="hvc-out">/100</div>\r
            <div class="hvc-grade">High Risk</div>\r
          </div>\r
        </div>\r
        <div class="hvc-bars">\r
          <div class="hvc-bar-row">\r
            <span class="hvc-bar-label">Fatty Acids</span>\r
            <div class="hvc-bar-track"><div class="hvc-bar-fill" style="width:89%; background:var(--gold);"></div></div>\r
            <span class="hvc-bar-pct">89%</span>\r
          </div>\r
          <div class="hvc-bar-row">\r
            <span class="hvc-bar-label">Metabolic</span>\r
            <div class="hvc-bar-track"><div class="hvc-bar-fill" style="width:72%; background:var(--sage);"></div></div>\r
            <span class="hvc-bar-pct">72%</span>\r
          </div>\r
          <div class="hvc-bar-row">\r
            <span class="hvc-bar-label">Vitamins</span>\r
            <div class="hvc-bar-track"><div class="hvc-bar-fill" style="width:83%; background:var(--plum);"></div></div>\r
            <span class="hvc-bar-pct">83%</span>\r
          </div>\r
          <div class="hvc-bar-row">\r
            <span class="hvc-bar-label">Cardiovascular</span>\r
            <div class="hvc-bar-track"><div class="hvc-bar-fill" style="width:87%; background:var(--terra);"></div></div>\r
            <span class="hvc-bar-pct">87%</span>\r
          </div>\r
        </div>\r
        <div class="hvc-footer">\r
          <span class="hvc-tag">Analyzed Feb 15, 2026</span>\r
          <span class="hvc-tag">36 traits</span>\r
          <span class="hvc-tag">500K variants</span>\r
        </div>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <section class="section" id="how-it-works" style="background: var(--white);">\r
    <div class="section-eyebrow">Process</div>\r
    <h2 class="section-title">How It Works</h2>\r
    <div class="steps-grid">\r
      <div class="step-card">\r
        <div class="step-number">01</div>\r
        <div class="step-icon-wrap blue">\r
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/></svg>\r
        </div>\r
        <h3>Submit Your DNA</h3>\r
        <p>Upload your raw genetic data file from 23andMe, AncestryDNA, or any FASTQ/VCF format source.</p>\r
      </div>\r
      <div class="step-card">\r
        <div class="step-number">02</div>\r
        <div class="step-icon-wrap green">\r
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zm5.6 8H19v6h-2.8v-6z"/></svg>\r
        </div>\r
        <h3>Polygenic Risk Analysis</h3>\r
        <p>Our algorithm computes PRS across 36 nutritional traits using peer-reviewed GWAS datasets and proprietary weighting.</p>\r
      </div>\r
      <div class="step-card">\r
        <div class="step-number">03</div>\r
        <div class="step-icon-wrap gold">\r
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/></svg>\r
        </div>\r
        <h3>Personalized Report</h3>\r
        <p>Receive a detailed, actionable nutrition dashboard with risk scores, dietary insights, and tailored supplementation recommendations.</p>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <section class="section" id="categories" style="background:var(--cream);">\r
    <div class="section-eyebrow">Coverage</div>\r
    <h2 class="section-title">What We Analyze</h2>\r
    <div class="cat-grid">\r
      <div class="cat-card lipids">\r
        <span class="cat-emoji">ðŸ§¬</span>\r
        <h3>Fatty Acid Profile</h3>\r
        <p>Omega-3, omega-6, phospholipids, ceramides, and essential lipid ratios.</p>\r
        <div class="cat-count">8 traits</div>\r
      </div>\r
      <div class="cat-card metabolic">\r
        <span class="cat-emoji">âš¡</span>\r
        <h3>Metabolic Efficiency</h3>\r
        <p>Gut microbiome diversity, energy expenditure, insulin regulation, and resting metabolic rate.</p>\r
        <div class="cat-count">7 traits</div>\r
      </div>\r
      <div class="cat-card vitamins">\r
        <span class="cat-emoji">ðŸ’Š</span>\r
        <h3>Vitamins & Micronutrients</h3>\r
        <p>CoQ10, vitamin D, folate, manganese, molybdenum, and iron transport proteins.</p>\r
        <div class="cat-count">7 traits</div>\r
      </div>\r
      <div class="cat-card cardio">\r
        <span class="cat-emoji">â¤ï¸</span>\r
        <h3>Cardiovascular Markers</h3>\r
        <p>VLDL lipoproteins, phospholipid ratios, postprandial cholesterol, and PLA2 activity.</p>\r
        <div class="cat-count">7 traits</div>\r
      </div>\r
      <div class="cat-card protein">\r
        <span class="cat-emoji">ðŸ”¬</span>\r
        <h3>Protein Building Blocks</h3>\r
        <p>Amino acid metabolism, peptide enzymes, and neurotransmitter precursors.</p>\r
        <div class="cat-count">7 traits</div>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <footer class="landing-footer">\r
    <div class="footer-brand">\r
      <span class="brand-name">prs</span>\r
      <p>Advancing nutrition through genomics.</p>\r
    </div>\r
    <div class="footer-links">\r
      <a href="#">Privacy Policy</a>\r
      <a href="#">Terms of Service</a>\r
      <a href="#">Scientific References</a>\r
      <a href="#">Contact</a>\r
    </div>\r
    <div class="footer-note">Â© 2026 NutriGenix. For informational purposes only. Not medical advice.</div>\r
  </footer>\r
</div>\r
\r
<!-- ==================== DASHBOARD ==================== -->\r
<div id="dashboard-page" class="page active">\r
\r
  <!-- MOBILE TOPBAR -->\r
  <div class="mobile-topbar">\r
    <div class="mobile-topbar-brand">\r
      <div class="sb-brand-dot"><span>p</span></div>\r
      <span class="sb-brand-name">prs</span>\r
    </div>\r
    <button class="mobile-hamburger" id="hamburger-btn" onclick="toggleSidebar()" aria-label="Open menu">\r
      <span></span><span></span><span></span>\r
    </button>\r
  </div>\r
\r
  <div class="sidebar-overlay" id="sidebar-overlay" onclick="closeSidebar()"></div>\r
\r
  <div class="dashboard-body">\r
  <aside class="sidebar" id="sidebar">\r
    <div class="sidebar-header">\r
      <div class="sb-brand-dot"><span>p</span></div>\r
      <span class="sb-brand-name">prs</span>\r
    </div>\r
    <div class="user-profile">\r
      <div class="avatar">AL</div>\r
      <div class="user-info">\r
        <span class="user-name">Alex Laurent</span>\r
        <span class="user-tag">P00026401WG</span>\r
      </div>\r
    </div>\r
    <div class="sidebar-search">\r
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="8" stroke="rgba(0,0,0,0.3)" stroke-width="2"/><path d="m21 21-4.35-4.35" stroke="rgba(0,0,0,0.3)" stroke-width="2" stroke-linecap="round"/></svg>\r
      <input type="text" id="trait-search" placeholder="Search traits..." oninput="filterTraits(this.value)" />\r
    </div>\r
    <nav class="sidebar-nav">\r
      <div class="nav-group-label">Dashboard</div>\r
      <a href="#" class="nav-item active" data-view="overview" onclick="showView('overview'); return false;">\r
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/></svg>\r
        Overview\r
      </a>\r
      <div class="nav-group-label">Categories</div>\r
      <a href="#" class="nav-item" data-view="lipids" onclick="showView('lipids'); return false;">\r
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>\r
        Fatty Acid Profile\r
        <span class="nav-badge badge-danger">2 Very High</span>\r
      </a>\r
      <a href="#" class="nav-item" data-view="metabolic" onclick="showView('metabolic'); return false;">\r
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2.05v2.02c3.95.49 7 3.85 7 7.93 0 3.21-1.81 6-4.72 7.28L13 17v5h5l-1.22-1.22C19.91 19.07 22 15.76 22 12c0-5.18-3.95-9.45-9-9.95zM11 2.05C5.95 2.55 2 6.82 2 12c0 3.76 2.09 7.07 5.22 8.78L6 22h5V2.05z"/></svg>\r
        Metabolic Efficiency\r
        <span class="nav-badge badge-danger">1 Very High</span>\r
      </a>\r
      <a href="#" class="nav-item" data-view="vitamins" onclick="showView('vitamins'); return false;">\r
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>\r
        Vitamins & Micronutrients\r
        <span class="nav-badge badge-high">2 High</span>\r
      </a>\r
      <a href="#" class="nav-item" data-view="cardio" onclick="showView('cardio'); return false;">\r
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>\r
        Cardiovascular Markers\r
        <span class="nav-badge badge-high">5 High</span>\r
      </a>\r
      <a href="#" class="nav-item" data-view="protein" onclick="showView('protein'); return false;">\r
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zm5.6 8H19v6h-2.8v-6z"/></svg>\r
        Protein Building Blocks\r
        <span class="nav-badge badge-high">1 High</span>\r
      </a>\r
      <div class="nav-group-label">Tools</div>\r
    \r
      <a href="#" class="nav-item download-btn" onclick="return false;">\r
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>\r
        Download Report\r
      </a>\r
    </nav>\r
  </aside>\r
\r
  <main class="main-content">\r
    <header class="topbar">\r
      <div class="topbar-left">\r
        <h2 id="page-title">Overview</h2>\r
        <span id="page-subtitle">Genetic Nutrition Health Summary</span>\r
      </div>\r
      <div class="topbar-right">\r
        <div class="filter-group">\r
          <span class="filter-label">Filter:</span>\r
          <select id="risk-filter" onchange="filterByRisk(this.value)">\r
            <option value="all">All Levels</option>\r
            <option value="very-high">Very High</option>\r
            <option value="high">High</option>\r
            <option value="medium">Medium</option>\r
            <option value="low">Low</option>\r
            <option value="very-low">Very Low</option>\r
          </select>\r
        </div>\r
        <div class="report-date">Feb 15, 2026</div>\r
      </div>\r
    </header>\r
\r
    <div class="views-container">\r
      <!-- OVERVIEW -->\r
      <div id="view-overview" class="view active">\r
\r
        <div class="bento-grid">\r
          <div class="bento-card" style="grid-column:1 / -1; padding:24px; background:linear-gradient(135deg,#142235 0%,#2D435D 100%); color:#F8F5EF; border:1px solid rgba(255,255,255,0.08); box-shadow:0 24px 70px rgba(15,23,42,0.18);">\r
            <div style="display:flex; flex-wrap:wrap; align-items:flex-start; justify-content:space-between; gap:16px;">\r
              <div>\r
                <div class="card-title" style="margin-bottom:8px; color:rgba(248,245,239,0.72);">Overview Summary</div>\r
                <h3 style="margin:0; font-size:30px; line-height:1.15; letter-spacing:-0.03em;">Your nutrition report is led by lipid transport, cardiovascular markers, and metabolic response.</h3>\r
              </div>\r
              <div style="padding:10px 14px; border-radius:999px; border:1px solid rgba(255,255,255,0.1); background:rgba(255,255,255,0.08); font-size:12px; font-weight:600; letter-spacing:0.08em; text-transform:uppercase; color:rgba(248,245,239,0.82);">\r
                36 traits analyzed\r
              </div>\r
            </div>\r
            <p style="margin:18px 0 0; max-width:900px; font-size:14px; line-height:1.85; color:rgba(248,245,239,0.74);">\r
              The strongest signals in this profile cluster around fatty acid balance, triglyceride-rich lipoproteins, and gut-metabolic efficiency. The biggest practical wins from this overview are improving fat quality, reducing refined carbohydrate load, and using lab follow-up to personalize vitamin and cardiovascular support.\r
            </p>\r
            <div style="display:grid; gap:12px; margin-top:20px; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr));">\r
              <div style="border-radius:18px; border:1px solid rgba(255,255,255,0.08); background:rgba(255,255,255,0.08); padding:16px;">\r
                <div style="font-size:11px; letter-spacing:0.18em; text-transform:uppercase; color:rgba(248,245,239,0.45);">Highest Focus</div>\r
                <div style="margin-top:8px; font-size:17px; font-weight:600; color:#F8F5EF;">Fatty Acids</div>\r
                <div style="margin-top:6px; font-size:13px; line-height:1.6; color:rgba(248,245,239,0.68);">Inflammatory lipid balance is the clearest top-priority pattern.</div>\r
              </div>\r
              <div style="border-radius:18px; border:1px solid rgba(255,255,255,0.08); background:rgba(255,255,255,0.08); padding:16px;">\r
                <div style="font-size:11px; letter-spacing:0.18em; text-transform:uppercase; color:rgba(248,245,239,0.45);">Immediate Habit</div>\r
                <div style="margin-top:8px; font-size:17px; font-weight:600; color:#F8F5EF;">Lipid-friendly eating</div>\r
                <div style="margin-top:6px; font-size:13px; line-height:1.6; color:rgba(248,245,239,0.68);">Prioritize omega-3 support, fiber, and lower ultra-processed fat intake.</div>\r
              </div>\r
              <div style="border-radius:18px; border:1px solid rgba(255,255,255,0.08); background:rgba(255,255,255,0.08); padding:16px;">\r
                <div style="font-size:11px; letter-spacing:0.18em; text-transform:uppercase; color:rgba(248,245,239,0.45);">Clinical Follow-up</div>\r
                <div style="margin-top:8px; font-size:17px; font-weight:600; color:#F8F5EF;">Cardio labs</div>\r
                <div style="margin-top:6px; font-size:13px; line-height:1.6; color:rgba(248,245,239,0.68);">Use blood lipids and micronutrient panels to refine the plan over time.</div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="bento-card bento-score" style="padding: 20px 18px;">\r
            <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:16px;">\r
              <div class="card-title" style="margin-bottom:0;">Your Risk Categories</div>\r
              <a onclick="showView('lipids')" style="font-size:12px;font-weight:600;color:var(--sage-d);cursor:pointer;text-decoration:none;">See all</a>\r
            </div>\r
            <div class="rc-list">\r
\r
              <div class="rc-item" onclick="toggleRcItem(this)">\r
                <div class="rc-item-head">\r
                  <div class="rc-icon rc-icon--red">\r
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>\r
                  </div>\r
                  <div class="rc-meta">\r
                    <div class="rc-name">Fatty Acid Profile <span class="rc-badge rc-badge--vh">Very High</span></div>\r
                    <div class="rc-sub">PRS 2.41</div>\r
                  </div>\r
                  <svg class="rc-chevron rc-chevron--up" width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M18 15l-6-6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>\r
                </div>\r
                <div class="rc-expand-body">\r
                  <div class="rc-tags">\r
                    <span class="rc-tag">Diacylglycerol</span>\r
                    <span class="rc-tag">Phosphatidylcholine</span>\r
                    <span class="rc-tag">Linoleic Acid</span>\r
                  </div>\r
                  <p class="rc-desc">Multiple lipid transport and membrane-signaling traits cluster at the top end of risk, suggesting a strong genetic tendency toward inflammatory fatty acid imbalance.</p>\r
                  <div class="rc-footer">\r
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="var(--muted-l)"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>\r
                    <span>Lipids ï¿½ Omega-3 support and fat quality matter most</span>\r
                    <span class="rc-time">Top priority</span>\r
                  </div>\r
                </div>\r
              </div>\r
\r
              <div class="rc-item" onclick="toggleRcItem(this)">\r
                <div class="rc-item-head">\r
                  <div class="rc-icon rc-icon--amber">\r
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2.05v2.02c3.95.49 7 3.85 7 7.93 0 3.21-1.81 6-4.72 7.28L13 17v5h5l-1.22-1.22C19.91 19.07 22 15.76 22 12c0-5.18-3.95-9.45-9-9.95zM11 2.05C5.95 2.55 2 6.82 2 12c0 3.76 2.09 7.07 5.22 8.78L6 22h5V2.05z"/></svg>\r
                  </div>\r
                  <div class="rc-meta">\r
                    <div class="rc-name">Metabolic Efficiency <span class="rc-badge rc-badge--vh">Very High</span></div>\r
                    <div class="rc-sub">PRS 2.53</div>\r
                  </div>\r
                  <svg class="rc-chevron" width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>\r
                </div>\r
                <div class="rc-expand-body">\r
                  <div class="rc-tags">\r
                    <span class="rc-tag">Intestinal Microbiota</span>\r
                    <span class="rc-tag">Blautia</span>\r
                    <span class="rc-tag">Insulin</span>\r
                  </div>\r
                  <p class="rc-desc">Your microbiome diversity and energy-regulation signals suggest a meaningful metabolic vulnerability that can compound inflammation if routine nutrition is inconsistent.</p>\r
                  <div class="rc-footer">\r
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="var(--muted-l)"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>\r
                    <span>Metabolic ï¿½ Fiber intake and gut support are essential</span>\r
                    <span class="rc-time">Action now</span>\r
                  </div>\r
                </div>\r
              </div>\r
\r
              <div class="rc-item" onclick="toggleRcItem(this)">\r
                <div class="rc-item-head">\r
                  <div class="rc-icon rc-icon--blue">\r
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>\r
                  </div>\r
                  <div class="rc-meta">\r
                    <div class="rc-name">Cardio & Micronutrients <span class="rc-badge rc-badge--h">High</span></div>\r
                    <div class="rc-sub">PRS 1.88</div>\r
                  </div>\r
                  <svg class="rc-chevron" width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>\r
                </div>\r
                <div class="rc-expand-body">\r
                  <div class="rc-tags">\r
                    <span class="rc-tag">VLDL Phospholipids</span>\r
                    <span class="rc-tag">CoQ10</span>\r
                    <span class="rc-tag">Blood Molybdenum</span>\r
                  </div>\r
                  <p class="rc-desc">Cardiovascular particle transport markers and nutrient-handling traits indicate elevated dietary sensitivity, especially around lipid load and micronutrient balance.</p>\r
                  <div class="rc-footer">\r
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="var(--muted-l)"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>\r
                    <span>Cardio/Vitamins ï¿½ Focus on blood-lipid friendly nutrition</span>\r
                    <span class="rc-time">Monitor</span>\r
                  </div>\r
                </div>\r
              </div>\r
\r
            </div>\r
          </div>\r
\r
          <div class="bento-card bento-dist">\r
            <div class="dist2-header">\r
              <div class="dist2-title-block">\r
                <span class="card-title" style="margin-bottom:0;">Risk Distribution</span>\r
                <span class="dist2-subtitle">36 traits ï¿½ tap to expand</span>\r
              </div>\r
              <div class="dist2-donut">\r
                <svg viewBox="0 0 36 36" width="46" height="46">\r
                  <circle class="donut-seg" stroke="var(--risk-very-low)" stroke-dasharray="8.3 91.7" stroke-dashoffset="0"/>\r
                  <circle class="donut-seg" stroke="var(--risk-low)" stroke-dasharray="11.1 88.9" stroke-dashoffset="-8.3"/>\r
                  <circle class="donut-seg" stroke="var(--risk-medium)" stroke-dasharray="38.9 61.1" stroke-dashoffset="-19.4"/>\r
                  <circle class="donut-seg" stroke="var(--risk-high)" stroke-dasharray="33.3 66.7" stroke-dashoffset="-58.3"/>\r
                  <circle class="donut-seg" stroke="var(--risk-very-high)" stroke-dasharray="8.3 91.7" stroke-dashoffset="-91.6"/>\r
                </svg>\r
              </div>\r
            </div>\r
\r
            <div class="dist2-rows">\r
              <div class="dist2-row dist2-row-vh" onclick="toggleDist2(this)">\r
                <div class="dist2-row-top">\r
                  <div class="dist2-pip dist2-pip-vh"></div>\r
                  <span class="dist2-lbl">Very High</span>\r
                  <div class="dist2-bar-wrap"><div class="dist2-bar dist2-bar-vh" style="width:22%"></div></div>\r
                  <span class="dist2-count dist2-count-vh">3</span>\r
                  <svg class="dist2-chevron" width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>\r
                </div>\r
                <div class="dist2-traits" style="display:none">\r
                  <span class="dist2-chip">Diacylglycerol</span>\r
                  <span class="dist2-chip">Phosphatidylcholine</span>\r
                  <span class="dist2-chip">Intestinal Microbiota</span>\r
                </div>\r
              </div>\r
\r
              <div class="dist2-row dist2-row-h" onclick="toggleDist2(this)">\r
                <div class="dist2-row-top">\r
                  <div class="dist2-pip dist2-pip-h"></div>\r
                  <span class="dist2-lbl">High</span>\r
                  <div class="dist2-bar-wrap"><div class="dist2-bar dist2-bar-h" style="width:86%"></div></div>\r
                  <span class="dist2-count dist2-count-h">12</span>\r
                  <svg class="dist2-chevron" width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>\r
                </div>\r
                <div class="dist2-traits" style="display:none">\r
                  <span class="dist2-chip">Linoleic Acid</span>\r
                  <span class="dist2-chip">% MUFA</span>\r
                  <span class="dist2-chip">DHA %</span>\r
                  <span class="dist2-chip">VLDL Phospholipids</span>\r
                  <span class="dist2-chip">Coenzyme Q10</span>\r
                  <span class="dist2-chip">Carnitine Levels</span>\r
                </div>\r
              </div>\r
\r
              <div class="dist2-row dist2-row-m" onclick="toggleDist2(this)">\r
                <div class="dist2-row-top">\r
                  <div class="dist2-pip dist2-pip-m"></div>\r
                  <span class="dist2-lbl">Medium</span>\r
                  <div class="dist2-bar-wrap"><div class="dist2-bar dist2-bar-m" style="width:100%"></div></div>\r
                  <span class="dist2-count dist2-count-m">14</span>\r
                  <svg class="dist2-chevron" width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>\r
                </div>\r
                <div class="dist2-traits" style="display:none">\r
                  <span class="dist2-chip">Blautia Abundance</span>\r
                  <span class="dist2-chip">Blood Manganese</span>\r
                  <span class="dist2-chip">Acetone Levels</span>\r
                  <span class="dist2-chip">Resting Metabolic Rate</span>\r
                  <span class="dist2-chip">Adiponectin</span>\r
                </div>\r
              </div>\r
\r
              <div class="dist2-row dist2-row-l" onclick="toggleDist2(this)">\r
                <div class="dist2-row-top">\r
                  <div class="dist2-pip dist2-pip-l"></div>\r
                  <span class="dist2-lbl">Low</span>\r
                  <div class="dist2-bar-wrap"><div class="dist2-bar dist2-bar-l" style="width:29%"></div></div>\r
                  <span class="dist2-count dist2-count-l">4</span>\r
                  <svg class="dist2-chevron" width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>\r
                </div>\r
                <div class="dist2-traits" style="display:none">\r
                  <span class="dist2-chip">Citrulline Levels</span>\r
                  <span class="dist2-chip">Ceramide Levels</span>\r
                  <span class="dist2-chip">Amino Acid Balance</span>\r
                  <span class="dist2-chip">Protein Recovery</span>\r
                </div>\r
              </div>\r
\r
              <div class="dist2-row dist2-row-vl" onclick="toggleDist2(this)">\r
                <div class="dist2-row-top">\r
                  <div class="dist2-pip dist2-pip-vl"></div>\r
                  <span class="dist2-lbl">Very Low</span>\r
                  <div class="dist2-bar-wrap"><div class="dist2-bar dist2-bar-vl" style="width:22%"></div></div>\r
                  <span class="dist2-count dist2-count-vl">3</span>\r
                  <svg class="dist2-chevron" width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>\r
                </div>\r
                <div class="dist2-traits" style="display:none">\r
                  <span class="dist2-chip">Protective Protein Markers</span>\r
                  <span class="dist2-chip">Carnosine Preservation</span>\r
                  <span class="dist2-chip">Low Deficit Traits</span>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="bento-card bento-priority">\r
            <div class="card-title">Priority Attention</div>\r
            <div class="priority-list">\r
              <div class="priority-item" onclick="showView('lipids')">\r
                <div class="priority-dot" style="background:var(--risk-very-high)"></div>\r
                <span class="priority-name">Diacylglycerol</span>\r
                <span class="priority-badge" style="background:rgba(242,90,0,0.12);color:var(--risk-very-high);">V. HIGH</span>\r
              </div>\r
              <div class="priority-item" onclick="showView('lipids')">\r
                <div class="priority-dot" style="background:var(--risk-very-high)"></div>\r
                <span class="priority-name">Phosphatidylcholine</span>\r
                <span class="priority-badge" style="background:rgba(242,90,0,0.12);color:var(--risk-very-high);">V. HIGH</span>\r
              </div>\r
              <div class="priority-item" onclick="showView('metabolic')">\r
                <div class="priority-dot" style="background:var(--risk-very-high)"></div>\r
                <span class="priority-name">Intestinal Microbiota</span>\r
                <span class="priority-badge" style="background:rgba(242,90,0,0.12);color:var(--risk-very-high);">V. HIGH</span>\r
              </div>\r
              <div class="priority-item" onclick="showView('cardio')">\r
                <div class="priority-dot" style="background:var(--risk-high)"></div>\r
                <span class="priority-name">VLDL Phospholipids</span>\r
                <span class="priority-badge" style="background:rgba(255,176,103,0.22);color:#b86319;">HIGH</span>\r
              </div>\r
              <div class="priority-item" onclick="showView('vitamins')">\r
                <div class="priority-dot" style="background:var(--risk-high)"></div>\r
                <span class="priority-name">Coenzyme Q10</span>\r
                <span class="priority-badge" style="background:rgba(255,176,103,0.22);color:#b86319;">HIGH</span>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="bento-card bento-cat cat-accent-derm" onclick="showView('lipids')" style="cursor:pointer;">\r
            <div class="card-title">Fatty Acids</div>\r
            <div class="cat-summary-num">8</div>\r
            <div class="cat-summary-label">traits analyzed</div>\r
            <div class="cat-summary-bar"><div class="cat-summary-fill" style="width:89%;background:var(--risk-very-high);"></div></div>\r
            <div class="cat-summary-sub">2 Very High ï¿½ 5 High</div>\r
          </div>\r
          <div class="bento-card bento-cat cat-accent-allergies" onclick="showView('metabolic')" style="cursor:pointer;">\r
            <div class="card-title">Metabolic</div>\r
            <div class="cat-summary-num">7</div>\r
            <div class="cat-summary-label">traits analyzed</div>\r
            <div class="cat-summary-bar"><div class="cat-summary-fill" style="width:72%;background:var(--risk-high);"></div></div>\r
            <div class="cat-summary-sub">1 Very High ï¿½ 5 Medium</div>\r
          </div>\r
          <div class="bento-card bento-cat cat-accent-markers" onclick="showView('vitamins')" style="cursor:pointer;">\r
            <div class="card-title">Vitamins</div>\r
            <div class="cat-summary-num">7</div>\r
            <div class="cat-summary-label">traits analyzed</div>\r
            <div class="cat-summary-bar"><div class="cat-summary-fill" style="width:83%;background:var(--risk-medium);"></div></div>\r
            <div class="cat-summary-sub">2 High ï¿½ 5 Medium</div>\r
          </div>\r
          <div class="bento-card bento-cat cat-accent-aesthetics" onclick="showView('cardio')" style="cursor:pointer;">\r
            <div class="card-title">Cardiovascular</div>\r
            <div class="cat-summary-num">7</div>\r
            <div class="cat-summary-label">traits analyzed</div>\r
            <div class="cat-summary-bar"><div class="cat-summary-fill" style="width:87%;background:var(--risk-low);"></div></div>\r
            <div class="cat-summary-sub">5 High ï¿½ 2 Medium</div>\r
          </div>\r
          <div class="bento-card bento-cat cat-accent-markers" onclick="showView('protein')" style="cursor:pointer;">\r
            <div class="card-title">Protein</div>\r
            <div class="cat-summary-num">7</div>\r
            <div class="cat-summary-label">traits analyzed</div>\r
            <div class="cat-summary-bar"><div class="cat-summary-fill" style="width:63%;background:var(--risk-very-low);"></div></div>\r
            <div class="cat-summary-sub">1 High ï¿½ Mostly Low/Medium</div>\r
          </div>\r
\r
          <div class="bento-card bento-radar" id="polarCardWrap">\r
            <div class="polar-header">\r
              <div class="card-title" style="margin-bottom:2px;">Category Risk Profile</div>\r
              <div class="polar-overall-badge">36 traits</div>\r
            </div>\r
\r
            <div class="ring-wrap">\r
              <svg id="ringSvg" viewBox="0 0 200 200" class="ring-svg">\r
                <circle cx="100" cy="100" r="88" fill="none" stroke="#F0EBE3" stroke-width="1"/>\r
                <circle cx="100" cy="100" r="66" fill="none" stroke="#F0EBE3" stroke-width="1"/>\r
                <circle cx="100" cy="100" r="44" fill="none" stroke="#F0EBE3" stroke-width="1"/>\r
                <g id="ringSegments"></g>\r
                <circle cx="100" cy="100" r="30" fill="#fff" filter="url(#ringShadow)"/>\r
                <defs>\r
                  <filter id="ringShadow" x="-30%" y="-30%" width="160%" height="160%">\r
                    <feDropShadow dx="0" dy="1" stdDeviation="3" flood-color="rgba(0,0,0,0.08)"/>\r
                  </filter>\r
                </defs>\r
                <text id="ringCentreVal" x="100" y="97" text-anchor="middle" class="ring-centre-val">36</text>\r
                <text id="ringCentreLbl" x="100" y="110" text-anchor="middle" class="ring-centre-lbl">traits</text>\r
              </svg>\r
            </div>\r
\r
            <div class="ring-legend" id="ringLegend">\r
              <div class="rl-item" data-idx="0">\r
                <div class="rl-left"><span class="rl-swatch" style="--c:#D4A853"></span><span class="rl-name">Fatty Acids</span></div>\r
                <div class="rl-right"><div class="rl-bar-track"><div class="rl-bar" style="--w:100%;--c:#D4A853"></div></div><span class="rl-count">8</span></div>\r
              </div>\r
              <div class="rl-item" data-idx="1">\r
                <div class="rl-left"><span class="rl-swatch" style="--c:#C1634A"></span><span class="rl-name">Cardiovascular</span></div>\r
                <div class="rl-right"><div class="rl-bar-track"><div class="rl-bar" style="--w:88%;--c:#C1634A"></div></div><span class="rl-count">7</span></div>\r
              </div>\r
              <div class="rl-item" data-idx="2">\r
                <div class="rl-left"><span class="rl-swatch" style="--c:#7B9E87"></span><span class="rl-name">Metabolic</span></div>\r
                <div class="rl-right"><div class="rl-bar-track"><div class="rl-bar" style="--w:88%;--c:#7B9E87"></div></div><span class="rl-count">7</span></div>\r
              </div>\r
              <div class="rl-item" data-idx="3">\r
                <div class="rl-left"><span class="rl-swatch" style="--c:#8B5E83"></span><span class="rl-name">Vitamins</span></div>\r
                <div class="rl-right"><div class="rl-bar-track"><div class="rl-bar" style="--w:88%;--c:#8B5E83"></div></div><span class="rl-count">7</span></div>\r
              </div>\r
              <div class="rl-item" data-idx="4">\r
                <div class="rl-left"><span class="rl-swatch" style="--c:#6BAED6"></span><span class="rl-name">Protein</span></div>\r
                <div class="rl-right"><div class="rl-bar-track"><div class="rl-bar" style="--w:88%;--c:#6BAED6"></div></div><span class="rl-count">7</span></div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- LIPIDS -->\r
      <div id="view-lipids" class="view">\r
        <div class="view-intro">Fatty acid profile traits reflect your genetic predisposition for lipid metabolism, membrane composition, and essential fatty acid levels.</div>\r
        <div class="traits-grid">\r
          <div class="trait-card" data-risk="very-high" data-category="lipids">\r
            <div class="trait-risk-strip"><div class="risk-fill risk-very-high" style="width:90%"></div></div>\r
            <div class="trait-header"><span class="trait-name">Diacylglycerol (18:1 & 20:4)</span><span class="risk-badge risk-very-high">Very High</span></div>\r
            <p class="trait-desc">Complex lipid signaling molecules involved in inflammation and cellular communication. Very high genetic levels may promote systemic inflammatory processes and metabolic disruption.</p>\r
            <div class="trait-footer"><span class="trait-prs">PRS: 2.41</span><span class="trait-pop">90th percentile</span></div>\r
          </div>\r
          <div class="trait-card" data-risk="very-high" data-category="lipids">\r
            <div class="trait-risk-strip"><div class="risk-fill risk-very-high" style="width:90%"></div></div>\r
            <div class="trait-header"><span class="trait-name">Phosphatidylcholine (18:0/18:2)</span><span class="risk-badge risk-very-high">Very High</span></div>\r
            <p class="trait-desc">Cell membrane phospholipid critical for brain function and liver health. Elevated levels may indicate heightened phospholipid turnover and require careful dietary fat management.</p>\r
            <div class="trait-footer"><span class="trait-prs">PRS: 2.38</span><span class="trait-pop">90th percentile</span></div>\r
          </div>\r
          <div class="trait-card" data-risk="high" data-category="lipids">\r
            <div class="trait-risk-strip"><div class="risk-fill risk-high" style="width:89%"></div></div>\r
            <div class="trait-header"><span class="trait-name">Linoleic Acid</span><span class="risk-badge risk-high">High</span></div>\r
            <p class="trait-desc">Essential omega-6 fatty acid. High genetic levels may skew the omega-6 to omega-3 ratio, promoting pro-inflammatory pathways â€” especially relevant given your cardiovascular risk profile.</p>\r
            <div class="trait-footer"><span class="trait-prs">PRS: 1.94</span><span class="trait-pop">89th percentile</span></div>\r
          </div>\r
          <div class="trait-card" data-risk="high" data-category="lipids">\r
            <div class="trait-risk-strip"><div class="risk-fill risk-high" style="width:92%"></div></div>\r
            <div class="trait-header"><span class="trait-name">% Monounsaturated Fatty Acids</span><span class="risk-badge risk-high">High</span></div>\r
            <p class="trait-desc">Healthy fat proportion in plasma. High MUFA levels are generally favorable but may reflect elevated olive oil metabolism or lipid synthesis rates that could interact with your VLDL markers.</p>\r
            <div class="trait-footer"><span class="trait-prs">PRS: 2.01</span><span class="trait-pop">92nd percentile</span></div>\r
          </div>\r
          <div class="trait-card" data-risk="high" data-category="lipids">\r
            <div class="trait-risk-strip"><div class="risk-fill risk-high" style="width:87%"></div></div>\r
            <div class="trait-header"><span class="trait-name">DHA % in Total Fatty Acids</span><span class="risk-badge risk-high">High</span></div>\r
            <p class="trait-desc">Omega-3 brain and heart fat. Elevated DHA percentage genetically may reflect high enzymatic conversion efficiency â€” a beneficial marker, though monitoring total lipid balance is still advised.</p>\r
            <div class="trait-footer"><span class="trait-prs">PRS: 1.87</span><span class="trait-pop">87th percentile</span></div>\r
          </div>\r
          <div class="trait-card" data-risk="high" data-category="lipids">\r
            <div class="trait-risk-strip"><div class="risk-fill risk-high" style="width:81%"></div></div>\r
            <div class="trait-header"><span class="trait-name">Carnitine Levels</span><span class="risk-badge risk-high">High</span></div>\r
            <p class="trait-desc">Fatty acid transport molecule essential for mitochondrial energy production. High genetic carnitine predicts efficient fat burning but may also signal elevated TMAO production risk in some individuals.</p>\r
            <div class="trait-footer"><span class="trait-prs">PRS: 1.73</span><span class="trait-pop">81st percentile</span></div>\r
          </div>\r
          <div class="trait-card" data-risk="low" data-category="lipids">\r
            <div class="trait-risk-strip"><div class="risk-fill risk-low" style="width:16%"></div></div>\r
            <div class="trait-header"><span class="trait-name">Ceramide Levels (41:2)</span><span class="risk-badge risk-low">Low</span></div>\r
            <p class="trait-desc">Lipid barrier and signaling ceramide. Low genetic levels of this specific ceramide species are generally neutral but should be monitored alongside your broader lipid and inflammatory profile.</p>\r
            <div class="trait-footer"><span class="trait-prs">PRS: 0.71</span><span class="trait-pop">16th percentile</span></div>\r
          </div>\r
          <div class="trait-card" data-risk="medium" data-category="lipids">\r
            <div class="trait-risk-strip"><div class="risk-fill risk-medium" style="width:49%"></div></div>\r
            <div class="trait-header"><span class="trait-name">Stearic & Linoleic Acid Ratio</span><span class="risk-badge risk-medium">Medium</span></div>\r
            <p class="trait-desc">Saturated to PUFA balance indicator. A medium ratio suggests a relatively balanced lipid metabolism, though dietary choices can significantly modulate this genetic set point.</p>\r
            <div class="trait-footer"><span class="trait-prs">PRS: 1.19</span><span class="trait-pop">49th percentile</span></div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- METABOLIC -->\r
      <div id="view-metabolic" class="view">\r
        <div class="view-intro">Metabolic efficiency traits reflect genetic predisposition for energy utilization, gut microbiome composition, and hormonal regulation of metabolism.</div>\r
        <div class="traits-grid">\r
          <div class="trait-card" data-risk="very-high" data-category="metabolic">\r
            <div class="trait-risk-strip"><div class="risk-fill risk-very-high" style="width:100%"></div></div>\r
            <div class="trait-header"><span class="trait-name">Intestinal Microbiota</span><span class="risk-badge risk-very-high">Very High</span></div>\r
            <p class="trait-desc">Gut bacteria diversity profile. Very high genetic risk predicts lower microbiome diversity, significantly impacting digestion, immune function, mental health, and metabolic efficiency. Probiotic and prebiotic intervention is strongly advised.</p>\r
            <div class="trait-footer"><span class="trait-prs">PRS: 2.53</span><span class="trait-pop">100th percentile</span></div>\r
          </div>\r
          <div class="trait-card" data-risk="medium" data-category="metabolic">\r
            <div class="trait-risk-strip"><div class="risk-fill risk-medium" style="width:72%"></div></div>\r
            <div class="trait-header"><span class="trait-name">Blautia Abundance</span><span class="risk-badge risk-medium">Medium</span></div>\r
            <p class="trait-desc">Beneficial gut bacterium associated with reduced inflammation and metabolic health. Medium genetic abundance suggests a moderate gut health baseline that can be significantly improved through diet and lifestyle.</p>\r
            <div class="trait-footer"><span class="trait-prs">PRS: 1.48</span><span class="trait-pop">72nd percentile</span></div>\r
          </div>\r
          <div class="trait-card" data-risk="medium" data-category="metabolic">\r
            <div class="trait-risk-strip"><div class="risk-fill risk-medium" style="width:56%"></div></div>\r
            <div class="trait-header"><span class="trait-name">Acetone Levels</span><span class="risk-badge risk-medium">Medium</span></div>\r
            <p class="trait-desc">Indicator of fat-as-energy use (ketone metabolism). Medium genetic acetone levels suggest moderate ketogenic capacity â€” not highly optimized for fat-burning but manageable with dietary support.</p>\r
            <div class="trait-footer"><span class="trait-prs">PRS: 1.27</span><span class="trait-pop">56th percentile</span></div>\r
          </div>\r
          <div class="trait-card" data-risk="medium" data-category="metabolic">\r
            <div class="trait-risk-strip"><div class="risk-fill risk-medium" style="width:52%"></div></div>\r
            <div class="trait-header"><span class="trait-name">Adiponectin (BMI-adjusted)</span><span class="risk-badge risk-medium">Medium</span></div>\r
            <p class="trait-desc">Metabolic hormone regulator produced by fat tissue. Medium adiponectin levels suggest average insulin sensitivity and metabolic regulation â€” diet quality and exercise can meaningfully improve this.</p>\r
            <div class="trait-footer"><span class="trait-prs">PRS: 1.21</span><span class="trait-pop">52nd percentile</span></div>\r
          </div>\r
          <div class="trait-card" data-risk="medium" data-category="metabolic">\r
            <div class="trait-risk-strip"><div class="risk-fill risk-medium" style="width:36%"></div></div>\r
            <div class="trait-header"><span class="trait-name">Insulin Levels (weight-adjusted)</span><span class="risk-badge risk-medium">Medium</span></div>\r
            <p class="trait-desc">Blood sugar regulation marker. Medium genetic insulin levels indicate an average predisposition to insulin sensitivity â€” favorable compared to high risk but still warrants mindful carbohydrate management.</p>\r
            <div class="trait-footer"><span class="trait-prs">PRS: 1.09</span><span class="trait-pop">36th percentile</span></div>\r
          </div>\r
          <div class="trait-card" data-risk="medium" data-category="metabolic">\r
            <div class="trait-risk-strip"><div class="risk-fill risk-medium" style="width:37%"></div></div>\r
            <div class="trait-header"><span class="trait-name">Energy Expenditure (24h)</span><span class="risk-badge risk-medium">Medium</span></div>\r
            <p class="trait-desc">Daily caloric burn rate. Medium genetic energy expenditure suggests an average metabolic rate â€” not a natural advantage or disadvantage, but highly modifiable through exercise type and frequency.</p>\r
            <div class="trait-footer"><span class="trait-prs">PRS: 1.11</span><span class="trait-pop">37th percentile</span></div>\r
          </div>\r
          <div class="trait-card" data-risk="medium" data-category="metabolic">\r
            <div class="trait-risk-strip"><div class="risk-fill risk-medium" style="width:36%"></div></div>\r
            <div class="trait-header"><span class="trait-name">Resting Metabolic Rate</span><span class="risk-badge risk-medium">Medium</span></div>\r
            <p class="trait-desc">Baseline caloric expenditure at rest. Medium RMR suggests a typical metabolic baseline â€” neither a fast nor slow metabolism genetically. Muscle mass maintenance through resistance training is your most effective lever.</p>\r
            <div class="trait-footer"><span class="trait-prs">PRS: 1.08</span><span class="trait-pop">36th percentile</span></div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- VITAMINS -->\r
      <div id="view-vitamins" class="view">\r
        <div class="view-intro">Vitamin and micronutrient traits reflect genetic predisposition for absorption, transport, and utilization of essential cofactors, minerals, and vitamins.</div>\r
        <div class="traits-grid">\r
          <div class="trait-card" data-risk="high" data-category="vitamins">\r
            <div class="trait-risk-strip"><div class="risk-fill risk-high" style="width:83%"></div></div>\r
            <div class="trait-header"><span class="trait-name">Coenzyme Q10 Levels</span><span class="risk-badge risk-high">High</span></div>\r
            <p class="trait-desc">Cellular energy antioxidant vital for mitochondrial function. High genetic CoQ10 predicts elevated endogenous production, a generally protective trait â€” though statin users should monitor levels carefully.</p>\r
            <div class="trait-footer"><span class="trait-prs">PRS: 1.76</span><span class="trait-pop">83rd percentile</span></div>\r
          </div>\r
          <div class="trait-card" data-risk="high" data-category="vitamins">\r
            <div class="trait-risk-strip"><div class="risk-fill risk-high" style="width:82%"></div></div>\r
            <div class="trait-header"><span class="trait-name">Blood Molybdenum</span><span class="risk-badge risk-high">High</span></div>\r
            <p class="trait-desc">Trace mineral for enzyme function, particularly xanthine oxidase and sulfite oxidase. High levels may require monitoring as excess molybdenum can interfere with copper absorption in some individuals.</p>\r
            <div class="trait-footer"><span class="trait-prs">PRS: 1.74</span><span class="trait-pop">82nd percentile</span></div>\r
          </div>\r
          <div class="trait-card" data-risk="medium" data-category="vitamins">\r
            <div class="trait-risk-strip"><div class="risk-fill risk-medium" style="width:64%"></div></div>\r
            <div class="trait-header"><span class="trait-name">Blood Manganese</span><span class="risk-badge risk-medium">Medium</span></div>\r
            <p class="trait-desc">Antioxidant enzyme cofactor for SOD2, a key mitochondrial antioxidant. Medium genetic manganese indicates average cellular antioxidant capacity â€” whole grains, nuts, and legumes can optimize this.</p>\r
            <div class="trait-footer"><span class="trait-prs">PRS: 1.39</span><span class="trait-pop">64th percentile</span></div>\r
          </div>\r
          <div class="trait-card" data-risk="medium" data-category="vitamins">\r
            <div class="trait-risk-strip"><div class="risk-fill risk-medium" style="width:36%"></div></div>\r
            <div class="trait-header"><span class="trait-name">5-Formyltetrahydrofolate (Folate)</span><span class="risk-badge risk-medium">Medium</span></div>\r
            <p class="trait-desc">Active form of vitamin B9 essential for DNA synthesis and homocysteine regulation. Medium genetic folate metabolism warrants monitoring, especially for pregnancy planning or cardiovascular risk management.</p>\r
            <div class="trait-footer"><span class="trait-prs">PRS: 1.09</span><span class="trait-pop">36th percentile</span></div>\r
          </div>\r
          <div class="trait-card" data-risk="medium" data-category="vitamins">\r
            <div class="trait-risk-strip"><div class="risk-fill risk-medium" style="width:40%"></div></div>\r
            <div class="trait-header"><span class="trait-name">Vitamin D Binding Protein</span><span class="risk-badge risk-medium">Medium</span></div>\r
            <p class="trait-desc">Vitamin D transport protein affecting bioavailability of circulating vitamin D. Medium binding protein levels suggest average vitamin D delivery â€” supplementation efficacy should be assessed with serum 25-OH-D testing.</p>\r
            <div class="trait-footer"><span class="trait-prs">PRS: 1.13</span><span class="trait-pop">40th percentile</span></div>\r
          </div>\r
          <div class="trait-card" data-risk="medium" data-category="vitamins">\r
            <div class="trait-risk-strip"><div class="risk-fill risk-medium" style="width:39%"></div></div>\r
            <div class="trait-header"><span class="trait-name">Low Vitamin D Risk</span><span class="risk-badge risk-medium">Medium</span></div>\r
            <p class="trait-desc">Bone health and immune function marker. Medium genetic predisposition to vitamin D deficiency suggests supplementation is advisable, particularly in regions with limited sun exposure like Northern Europe.</p>\r
            <div class="trait-footer"><span class="trait-prs">PRS: 1.12</span><span class="trait-pop">39th percentile</span></div>\r
          </div>\r
          <div class="trait-card" data-risk="medium" data-category="vitamins">\r
            <div class="trait-risk-strip"><div class="risk-fill risk-medium" style="width:35%"></div></div>\r
            <div class="trait-header"><span class="trait-name">Blood Transferrin</span><span class="risk-badge risk-medium">Medium</span></div>\r
            <p class="trait-desc">Iron transport protein that moves iron from intestinal absorption to sites of use. Medium genetic transferrin suggests adequate iron transport capacity â€” monitor with serum ferritin if fatigue or anemia symptoms arise.</p>\r
            <div class="trait-footer"><span class="trait-prs">PRS: 1.06</span><span class="trait-pop">35th percentile</span></div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- CARDIO -->\r
      <div id="view-cardio" class="view">\r
        <div class="view-intro">Cardiovascular marker traits reflect genetic predisposition for lipoprotein metabolism, cholesterol transport, and inflammatory cardiovascular risk factors.</div>\r
        <div class="traits-grid">\r
          <div class="trait-card" data-risk="high" data-category="cardio">\r
            <div class="trait-risk-strip"><div class="risk-fill risk-high" style="width:87%"></div></div>\r
            <div class="trait-header"><span class="trait-name">Large Lipoprotein Phospholipids</span><span class="risk-badge risk-high">High</span></div>\r
            <p class="trait-desc">Lipid transport particles carrying phospholipids. Elevated levels in large lipoproteins indicate high lipid cargo capacity that may contribute to arterial plaque formation over time.</p>\r
            <div class="trait-footer"><span class="trait-prs">PRS: 1.88</span><span class="trait-pop">87th percentile</span></div>\r
          </div>\r
          <div class="trait-card" data-risk="high" data-category="cardio">\r
            <div class="trait-risk-strip"><div class="risk-fill risk-high" style="width:85%"></div></div>\r
            <div class="trait-header"><span class="trait-name">Phospholipids in Large VLDL</span><span class="risk-badge risk-high">High</span></div>\r
            <p class="trait-desc">Very low-density lipoprotein phospholipid content. High VLDL phospholipids signal elevated triglyceride-rich lipoprotein circulation, a significant independent cardiovascular risk factor.</p>\r
            <div class="trait-footer"><span class="trait-prs">PRS: 1.84</span><span class="trait-pop">85th percentile</span></div>\r
          </div>\r
          <div class="trait-card" data-risk="high" data-category="cardio">\r
            <div class="trait-risk-strip"><div class="risk-fill risk-high" style="width:83%"></div></div>\r
            <div class="trait-header"><span class="trait-name">Total Lipids in Large VLDL</span><span class="risk-badge risk-high">High</span></div>\r
            <p class="trait-desc">Circulating fat in large VLDL particles. Total lipid content in large VLDL is a powerful predictor of cardiovascular events â€” reducing refined carbohydrates and alcohol intake is the primary dietary intervention.</p>\r
            <div class="trait-footer"><span class="trait-prs">PRS: 1.79</span><span class="trait-pop">83rd percentile</span></div>\r
          </div>\r
          <div class="trait-card" data-risk="high" data-category="cardio">\r
            <div class="trait-risk-strip"><div class="risk-fill risk-high" style="width:76%"></div></div>\r
            <div class="trait-header"><span class="trait-name">Free Cholesterol in VLDL (post-meal)</span><span class="risk-badge risk-high">High</span></div>\r
            <p class="trait-desc">Post-prandial cholesterol load within VLDL particles. Elevated post-meal VLDL cholesterol suggests impaired lipid clearance after eating â€” low glycaemic index meals and timed eating windows may help.</p>\r
            <div class="trait-footer"><span class="trait-prs">PRS: 1.65</span><span class="trait-pop">76th percentile</span></div>\r
          </div>\r
          <div class="trait-card" data-risk="high" data-category="cardio">\r
            <div class="trait-risk-strip"><div class="risk-fill risk-high" style="width:76%"></div></div>\r
            <div class="trait-header"><span class="trait-name">Phospholipid:Total Lipid Ratio (VLDL)</span><span class="risk-badge risk-high">High</span></div>\r
            <p class="trait-desc">Lipoprotein composition ratio indicating structural quality of VLDL particles. A high ratio may reflect VLDL particles that are more atherogenic due to their specific lipid composition.</p>\r
            <div class="trait-footer"><span class="trait-prs">PRS: 1.65</span><span class="trait-pop">76th percentile</span></div>\r
          </div>\r
          <div class="trait-card" data-risk="medium" data-category="cardio">\r
            <div class="trait-risk-strip"><div class="risk-fill risk-medium" style="width:47%"></div></div>\r
            <div class="trait-header"><span class="trait-name">Postprandial Cholesterol (Large LP)</span><span class="risk-badge risk-medium">Medium</span></div>\r
            <p class="trait-desc">After-meal lipid response in large lipoproteins. Medium post-prandial cholesterol response suggests moderate lipid metabolism efficiency post-meal â€” portion control and meal composition matter significantly.</p>\r
            <div class="trait-footer"><span class="trait-prs">PRS: 1.17</span><span class="trait-pop">47th percentile</span></div>\r
          </div>\r
          <div class="trait-card" data-risk="medium" data-category="cardio">\r
            <div class="trait-risk-strip"><div class="risk-fill risk-medium" style="width:40%"></div></div>\r
            <div class="trait-header"><span class="trait-name">Lipoprotein-associated PLA2</span><span class="risk-badge risk-medium">Medium</span></div>\r
            <p class="trait-desc">Inflammatory cardiovascular enzyme that generates pro-inflammatory lipid mediators within arterial walls. Medium genetic PLA2 activity requires monitoring, especially in combination with your elevated VLDL markers.</p>\r
            <div class="trait-footer"><span class="trait-prs">PRS: 1.13</span><span class="trait-pop">40th percentile</span></div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- PROTEIN -->\r
      <div id="view-protein" class="view">\r
        <div class="view-intro">Protein building block traits reflect genetic predisposition for amino acid metabolism, peptide digestion, and the production of important neurotransmitter precursors.</div>\r
        <div class="traits-grid">\r
          <div class="trait-card" data-risk="high" data-category="protein">\r
            <div class="trait-risk-strip"><div class="risk-fill risk-high" style="width:79%"></div></div>\r
            <div class="trait-header"><span class="trait-name">N-Delta-Acetylornithine</span><span class="risk-badge risk-high">High</span></div>\r
            <p class="trait-desc">Amino acid metabolite in the urea cycle and polyamine biosynthesis pathway. High genetic levels may reflect elevated ornithine metabolism, potentially affecting arginine availability and nitric oxide production.</p>\r
            <div class="trait-footer"><span class="trait-prs">PRS: 1.69</span><span class="trait-pop">79th percentile</span></div>\r
          </div>\r
          <div class="trait-card" data-risk="medium" data-category="protein">\r
            <div class="trait-risk-strip"><div class="risk-fill risk-medium" style="width:63%"></div></div>\r
            <div class="trait-header"><span class="trait-name">Beta-Aminoisobutyric Acids</span><span class="risk-badge risk-medium">Medium</span></div>\r
            <p class="trait-desc">Cognitive and stress modulator produced by thymine catabolism. Medium levels suggest an average brain-derived neuroprotective amino acid profile â€” regular aerobic exercise significantly boosts this metabolite.</p>\r
            <div class="trait-footer"><span class="trait-prs">PRS: 1.37</span><span class="trait-pop">63rd percentile</span></div>\r
          </div>\r
          <div class="trait-card" data-risk="medium" data-category="protein">\r
            <div class="trait-risk-strip"><div class="risk-fill risk-medium" style="width:59%"></div></div>\r
            <div class="trait-header"><span class="trait-name">Glutamine Levels</span><span class="risk-badge risk-medium">Medium</span></div>\r
            <p class="trait-desc">Immune and gut health amino acid that fuels intestinal enterocytes and immune cells. Medium genetic glutamine predicts adequate but not optimal gut barrier support â€” supplementation may benefit during high-stress periods.</p>\r
            <div class="trait-footer"><span class="trait-prs">PRS: 1.31</span><span class="trait-pop">59th percentile</span></div>\r
          </div>\r
          <div class="trait-card" data-risk="low" data-category="protein">\r
            <div class="trait-risk-strip"><div class="risk-fill risk-low" style="width:36%"></div></div>\r
            <div class="trait-header"><span class="trait-name">Citrulline Levels</span><span class="risk-badge risk-low">Low</span></div>\r
            <p class="trait-desc">Nitric oxide and vascular health amino acid. Low genetic citrulline indicates reduced endogenous nitric oxide pathway activity â€” watermelon, arginine-rich foods, or direct citrulline supplementation may improve vascular function.</p>\r
            <div class="trait-footer"><span class="trait-prs">PRS: 0.89</span><span class="trait-pop">36th percentile</span></div>\r
          </div>\r
          <div class="trait-card" data-risk="medium" data-category="protein">\r
            <div class="trait-risk-strip"><div class="risk-fill risk-medium" style="width:42%"></div></div>\r
            <div class="trait-header"><span class="trait-name">Threonine Levels</span><span class="risk-badge risk-medium">Medium</span></div>\r
            <p class="trait-desc">Essential amino acid for protein synthesis and immune function. Medium threonine levels indicate adequate availability â€” animal proteins, lentils, and quinoa are strong dietary sources to maintain this level.</p>\r
            <div class="trait-footer"><span class="trait-prs">PRS: 1.14</span><span class="trait-pop">42nd percentile</span></div>\r
          </div>\r
          <div class="trait-card" data-risk="low" data-category="protein">\r
            <div class="trait-risk-strip"><div class="risk-fill risk-low" style="width:41%"></div></div>\r
            <div class="trait-header"><span class="trait-name">Beta-Ala-His Dipeptidase</span><span class="risk-badge risk-low">Low</span></div>\r
            <p class="trait-desc">Peptide digestion enzyme that breaks down carnosine and anserine. Low genetic enzyme activity means dietary carnosine is preserved longer â€” this is beneficial for muscle buffering capacity and exercise performance.</p>\r
            <div class="trait-footer"><span class="trait-prs">PRS: 0.92</span><span class="trait-pop">41st percentile</span></div>\r
          </div>\r
          <div class="trait-card" data-risk="low" data-category="protein">\r
            <div class="trait-risk-strip"><div class="risk-fill risk-low" style="width:29%"></div></div>\r
            <div class="trait-header"><span class="trait-name">N-Acetyltryptophan</span><span class="risk-badge risk-low">Low</span></div>\r
            <p class="trait-desc">Tryptophan metabolite affecting mood, sleep quality, and serotonin synthesis. Low genetic N-acetyltryptophan may reflect efficient tryptophan conversion â€” adequate dietary tryptophan from turkey, eggs, and dairy supports this pathway.</p>\r
            <div class="trait-footer"><span class="trait-prs">PRS: 0.81</span><span class="trait-pop">29th percentile</span></div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- RECOMMENDATIONS -->\r
      <div id="view-recommendations" class="view">\r
        <div class="recs-layout">\r
          <div class="rec-card rec-urgent">\r
            <div class="rec-priority-label">ðŸš¨ Critical Priority</div>\r
            <h3>Gut Microbiome Restoration</h3>\r
            <p>Your Very High genetic risk for low Intestinal Microbiota diversity is the most impactful area to address. Gut diversity affects nutrient absorption, immune function, mental health, and metabolic efficiency.</p>\r
            <ul class="rec-list">\r
              <li>Take a multi-strain probiotic (Lactobacillus + Bifidobacterium) daily with breakfast</li>\r
              <li>Consume 30+ different plant foods per week to maximize prebiotic diversity</li>\r
              <li>Include fermented foods daily: yogurt, kefir, kimchi, or sauerkraut</li>\r
              <li>Avoid unnecessary antibiotics and discuss alternatives with your physician</li>\r
            </ul>\r
            <div class="rec-genes">Related Variants: FUT2 rs601338 Â· LACTASE rs4988235 Â· NOD2 rs2066844</div>\r
          </div>\r
          <div class="rec-card rec-high">\r
            <div class="rec-priority-label">âš ï¸ High Priority</div>\r
            <h3>Cardiovascular Lipid Management</h3>\r
            <p>Five High-risk cardiovascular markers including VLDL phospholipids and total lipids require active dietary management. These compound risk when combined with your elevated fatty acid profile.</p>\r
            <ul class="rec-list">\r
              <li>Reduce saturated fat intake to &lt;7% of total calories; replace with MUFA and PUFA</li>\r
              <li>Eliminate refined carbohydrates and added sugars to reduce VLDL production</li>\r
              <li>Add 2â€“4g EPA+DHA omega-3 daily to counterbalance high phospholipid markers</li>\r
              <li>Request a full NMR lipid panel annually to monitor particle size and number</li>\r
            </ul>\r
            <div class="rec-genes">Related Variants: APOE rs429358 Â· PCSK9 rs562556 Â· LPL rs328</div>\r
          </div>\r
          <div class="rec-card rec-medium">\r
            <div class="rec-priority-label">ðŸ“‹ Moderate Priority</div>\r
            <h3>Fatty Acid Balance Protocol</h3>\r
            <p>Very High Diacylglycerol and Phosphatidylcholine alongside elevated Linoleic and MUFA levels call for a targeted approach to lipid balance and anti-inflammatory eating.</p>\r
            <ul class="rec-list">\r
              <li>Follow an anti-inflammatory dietary pattern (Mediterranean or MIND diet)</li>\r
              <li>Target an omega-6 to omega-3 ratio below 4:1 (typical Western diet is 15:1)</li>\r
              <li>Prioritize fatty fish (salmon, sardines, mackerel) 3x per week</li>\r
              <li>Use olive oil as primary cooking fat; minimize vegetable seed oils high in LA</li>\r
            </ul>\r
            <div class="rec-genes">Related Variants: FADS1 rs174546 Â· FADS2 rs1535 Â· ELOVL2 rs953413</div>\r
          </div>\r
          <div class="rec-card rec-low">\r
            <div class="rec-priority-label">âœ… Maintenance</div>\r
            <h3>Leverage Your Protective Strengths</h3>\r
            <p>Your low Beta-Ala-His Dipeptidase is beneficial for muscle buffering, and medium metabolic markers give you a modifiable metabolic baseline. Strategic interventions amplify these advantages.</p>\r
            <ul class="rec-list">\r
              <li>Consider beta-alanine supplementation (3.2g/day) to maximally exploit your carnosine advantage</li>\r
              <li>High-intensity interval training 2â€“3x weekly optimizes your medium metabolic rate</li>\r
              <li>Track vitamin D status seasonally and supplement to maintain 50â€“80 ng/mL</li>\r
              <li>Maintain adequate dietary folate through leafy greens, legumes, and fortified foods</li>\r
            </ul>\r
            <div class="rec-genes">Related Variants: CNDP1 rs2346061 Â· VDR rs2228570 Â· MTHFR rs1801133</div>\r
          </div>\r
        </div>\r
        <div class="skin-plan-cta">\r
          <div>\r
            <h3>Build Your Nutrition Plan</h3>\r
            <p>Our genomics team can create a fully customized dietary protocol, supplement stack, and metabolic monitoring schedule based on your unique genetic nutrition profile.</p>\r
          </div>\r
          <button class="btn-primary-lg">Improve My Nutrition Plan</button>\r
        </div>\r
      </div>\r
\r
    </div>\r
  </main>\r
  </div>\r
</div>\r
\r
<!-- MODAL -->\r
<div id="trait-modal" class="modal-overlay" onclick="closeModal(event)">\r
  <div class="modal-box" onclick="event.stopPropagation()">\r
    <button class="modal-close" onclick="closeModal()">âœ•</button>\r
    <div id="modal-content"></div>\r
  </div>\r
</div>\r
\r
\r
\r
\r
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"><\/script>\r
<script src="nutrition.js"><\/script>\r
</body>\r
</html>\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
`,Zg=`*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }\r
    html { scroll-behavior: smooth; }\r
\r
    :root {\r
      --cream:    #F7F3EE;\r
      --cream2:   #EFE9DF;\r
      --sand:     #D9CEBD;\r
      --sage:     #7B9E87;\r
      --sage-l:   #A8C4B0;\r
      --sage-d:   #4A7055;\r
      --forest:   #1E3A2F;\r
      --terra:    #C1634A;\r
      --terra-l:  #E8907A;\r
      --gold:     #D4A853;\r
      --gold-l:   #EDD187;\r
      --sky:      #6BAED6;\r
      --sky-l:    #AED6F1;\r
      --plum:     #8B5E83;\r
      --ink:      #1A1A1A;\r
      --ink2:     #2D2D2D;\r
      --muted:    #6B6357;\r
      --muted-l:  #9E9589;\r
      --white:    #FFFFFF;\r
\r
      --risk-very-high: #F25A00;\r
      --risk-high:      #FFB067;\r
      --risk-medium:    #B9B9BB;\r
      --risk-low:       #B4ACD9;\r
      --risk-very-low:  #6A45A5;\r
      --risk-very-high-bg: #FFF0E6;\r
      --risk-high-bg:      #FFF3E8;\r
      --risk-medium-bg:    #F3F3F4;\r
      --risk-low-bg:       #F2EEFB;\r
      --risk-very-low-bg:  #EEE7FA;\r
\r
      --radius-sm: 10px;\r
      --radius-md: 16px;\r
      --radius-lg: 24px;\r
      --radius-xl: 32px;\r
\r
      --shadow-sm: 0 1px 3px rgba(26,26,26,0.06), 0 1px 2px rgba(26,26,26,0.04);\r
      --shadow-md: 0 4px 16px rgba(26,26,26,0.08), 0 2px 4px rgba(26,26,26,0.04);\r
      --shadow-lg: 0 12px 40px rgba(26,26,26,0.12), 0 4px 8px rgba(26,26,26,0.06);\r
\r
      --sidebar-w: 260px;\r
    }\r
\r
    body {\r
      font-family: 'Outfit', sans-serif;\r
      background: var(--cream);\r
      color: var(--ink);\r
      min-height: 100vh;\r
      -webkit-font-smoothing: antialiased;\r
      font-size: 14px;\r
      line-height: 1.6;\r
    }\r
\r
    .page { display: none; min-height: 100vh; }\r
    .page.active { display: block; }\r
    #dashboard-page.active {\r
      display: flex;\r
      flex-direction: column;\r
      min-height: 100vh;\r
    }\r
\r
    /* ============================================================ LANDING ============================================================ */\r
    #landing-page { background: var(--cream); }\r
\r
    .landing-nav {\r
      position: sticky; top: 0; z-index: 100;\r
      display: flex; align-items: center; justify-content: space-between;\r
      padding: 20px 64px;\r
      background: rgba(247,243,238,0.88);\r
      backdrop-filter: blur(20px);\r
      border-bottom: 1px solid var(--sand);\r
    }\r
    .nav-brand { display: flex; align-items: center; gap: 10px; }\r
    .brand-dot {\r
      width: 34px; height: 34px; border-radius: 50%;\r
      background: var(--forest);\r
      display: flex; align-items: center; justify-content: center;\r
    }\r
    .brand-dot span { color: var(--sage-l); font-family: 'Lora', serif; font-size: 14px; font-style: italic; font-weight: 600; }\r
    .brand-name { font-family: 'Lora', serif; font-size: 22px; font-weight: 600; color: var(--forest); letter-spacing: -0.3px; }\r
    .nav-links { display: flex; align-items: center; gap: 36px; }\r
    .nav-links a { text-decoration: none; color: var(--muted); font-size: 14px; font-weight: 500; transition: color 0.2s; }\r
    .nav-links a:hover { color: var(--forest); }\r
    .nav-cta {\r
      background: var(--forest) !important; color: var(--sage-l) !important;\r
      padding: 9px 22px; border-radius: 100px;\r
      font-weight: 600 !important; font-size: 13px !important;\r
      transition: background 0.2s, transform 0.15s !important;\r
    }\r
    .nav-cta:hover { background: var(--sage-d) !important; transform: translateY(-1px); }\r
\r
    .hero {\r
      min-height: calc(100vh - 74px);\r
      display: grid; grid-template-columns: 1fr 1fr;\r
      align-items: center; gap: 80px;\r
      padding: 80px 64px;\r
      position: relative; overflow: hidden;\r
    }\r
    .hero::before {\r
      content: '';\r
      position: absolute; inset: 0;\r
      background: radial-gradient(ellipse 60% 80% at 80% 50%, rgba(107,174,214,0.12) 0%, transparent 60%),\r
                  radial-gradient(ellipse 40% 60% at 20% 80%, rgba(212,168,83,0.08) 0%, transparent 50%);\r
      pointer-events: none;\r
    }\r
    .hero-left { position: relative; z-index: 1; }\r
    .hero-badge {\r
      display: inline-flex; align-items: center; gap: 8px;\r
      background: var(--white); border: 1px solid var(--sand);\r
      padding: 6px 14px; border-radius: 100px; margin-bottom: 28px;\r
      font-size: 12px; font-weight: 600; color: var(--sage-d);\r
      letter-spacing: 0.03em; text-transform: uppercase;\r
      box-shadow: var(--shadow-sm);\r
    }\r
    .pulse-dot {\r
      width: 7px; height: 7px; border-radius: 50%; background: var(--gold);\r
      animation: pulse 2s infinite;\r
    }\r
    @keyframes pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.5; transform: scale(0.8); } }\r
    .hero-title {\r
      font-family: 'Lora', serif;\r
      font-size: clamp(42px, 5vw, 64px);\r
      font-weight: 600; line-height: 1.1;\r
      color: var(--forest);\r
      margin-bottom: 20px;\r
      letter-spacing: -0.02em;\r
    }\r
    .hero-title em { font-style: italic; color: var(--gold); }\r
    .hero-desc { font-size: 16px; color: var(--muted); line-height: 1.7; max-width: 460px; margin-bottom: 36px; }\r
    .hero-actions { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 48px; }\r
    .btn-primary {\r
      background: var(--forest); color: var(--sage-l);\r
      border: none; padding: 14px 30px; border-radius: 100px;\r
      font-family: 'Outfit', sans-serif; font-size: 15px; font-weight: 600;\r
      cursor: pointer; transition: all 0.2s;\r
    }\r
    .btn-primary:hover { background: var(--sage-d); transform: translateY(-2px); box-shadow: var(--shadow-md); }\r
    .btn-secondary {\r
      background: transparent; color: var(--forest);\r
      border: 1.5px solid var(--sand); padding: 14px 26px; border-radius: 100px;\r
      font-family: 'Outfit', sans-serif; font-size: 15px; font-weight: 500;\r
      cursor: pointer; transition: all 0.2s; display: flex; align-items: center; gap: 8px;\r
    }\r
    .btn-secondary:hover { border-color: var(--forest); background: rgba(30,58,47,0.04); }\r
    .hero-stats { display: flex; gap: 24px; flex-wrap: wrap; }\r
    .stat-pill {\r
      background: var(--white); border: 1px solid var(--sand);\r
      padding: 10px 18px; border-radius: var(--radius-md);\r
      font-size: 13px; color: var(--muted); box-shadow: var(--shadow-sm);\r
    }\r
    .stat-pill strong { color: var(--forest); font-weight: 700; font-size: 15px; display: block; }\r
\r
    .hero-right { position: relative; z-index: 1; display: flex; justify-content: center; align-items: center; }\r
    .hero-visual-card {\r
      width: 440px; max-width: 120%;\r
      background: var(--white); border: 1px solid var(--sand);\r
      border-radius: var(--radius-xl); padding: 36px;\r
      box-shadow: var(--shadow-lg);\r
      position: relative; overflow: hidden;\r
    }\r
    .hero-visual-card::after {\r
      content: '';\r
      position: absolute; top: -60px; right: -60px;\r
      width: 200px; height: 200px;\r
      background: radial-gradient(circle, rgba(212,168,83,0.15) 0%, transparent 70%);\r
      border-radius: 50%;\r
    }\r
    .hvc-label { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: var(--sage-d); margin-bottom: 4px; }\r
    .hvc-name { font-family: 'Lora', serif; font-size: 20px; font-weight: 600; color: var(--forest); margin-bottom: 24px; }\r
    .hvc-score-row { display: flex; align-items: flex-end; gap: 12px; margin-bottom: 24px; }\r
    .hvc-big-score { font-family: 'Outfit', sans-serif; font-size: 72px; font-weight: 800; color: var(--forest); line-height: 1; }\r
    .hvc-score-meta { padding-bottom: 8px; }\r
    .hvc-out { font-size: 18px; color: var(--muted-l); }\r
    .hvc-grade { background: rgba(212,168,83,0.15); color: #8B6914; padding: 3px 10px; border-radius: 100px; font-size: 12px; font-weight: 600; }\r
    .hvc-bars { display: flex; flex-direction: column; gap: 10px; margin-bottom: 20px; }\r
    .hvc-bar-row { display: flex; align-items: center; gap: 10px; }\r
    .hvc-bar-label { font-size: 12px; color: var(--muted); width: 120px; flex-shrink: 0; }\r
    .hvc-bar-track { flex: 1; height: 6px; background: var(--cream2); border-radius: 100px; overflow: hidden; }\r
    .hvc-bar-fill { height: 100%; border-radius: 100px; }\r
    .hvc-bar-pct { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--muted-l); width: 36px; text-align: right; }\r
    .hvc-footer { display: flex; gap: 8px; flex-wrap: wrap; }\r
    .hvc-tag { background: var(--cream2); border: 1px solid var(--sand); padding: 4px 10px; border-radius: 100px; font-size: 11px; font-weight: 500; color: var(--muted); }\r
\r
    .section { padding: 100px 64px; }\r
    .section-eyebrow { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--sage-d); margin-bottom: 12px; }\r
    .section-title { font-family: 'Lora', serif; font-size: 40px; font-weight: 600; color: var(--forest); margin-bottom: 48px; line-height: 1.2; }\r
    .steps-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; }\r
    .step-card {\r
      background: var(--white); border: 1px solid var(--sand);\r
      border-radius: var(--radius-lg); padding: 32px;\r
      position: relative; overflow: hidden;\r
      transition: transform 0.2s, box-shadow 0.2s;\r
    }\r
    .step-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); }\r
    .step-number { font-size: 80px; font-weight: 800; color: var(--cream2); line-height: 1; position: absolute; top: 16px; right: 20px; user-select: none; }\r
    .step-icon-wrap { width: 48px; height: 48px; border-radius: var(--radius-sm); display: flex; align-items: center; justify-content: center; margin-bottom: 20px; }\r
    .step-icon-wrap.blue { background: rgba(107,174,214,0.15); color: var(--sky); }\r
    .step-icon-wrap.green { background: rgba(123,158,135,0.15); color: var(--sage-d); }\r
    .step-icon-wrap.gold { background: rgba(212,168,83,0.15); color: var(--gold); }\r
    .step-card h3 { font-size: 17px; font-weight: 700; color: var(--forest); margin-bottom: 10px; }\r
    .step-card p { font-size: 14px; color: var(--muted); line-height: 1.65; }\r
\r
    .cat-grid { display: grid; grid-template-columns: repeat(5,1fr); gap: 16px; }\r
    .cat-card { border-radius: var(--radius-lg); padding: 24px; position: relative; overflow: hidden; transition: transform 0.2s; cursor: default; }\r
    .cat-card:hover { transform: translateY(-3px); }\r
    .cat-card.lipids    { background: #F7F0E8; border: 1px solid #E8D5BD; }\r
    .cat-card.metabolic { background: #EDF5F0; border: 1px solid #BED8C8; }\r
    .cat-card.vitamins  { background: #F0EDF8; border: 1px solid #C8C0E0; }\r
    .cat-card.cardio    { background: #FDF0ED; border: 1px solid #F0C0B0; }\r
    .cat-card.protein   { background: #EDF2F8; border: 1px solid #B8CCE0; }\r
    .cat-emoji { font-size: 24px; margin-bottom: 12px; display: block; }\r
    .cat-card h3 { font-size: 13px; font-weight: 700; color: var(--forest); margin-bottom: 6px; }\r
    .cat-card p { font-size: 12px; color: var(--muted); line-height: 1.5; margin-bottom: 10px; }\r
    .cat-count { display: inline-block; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: var(--muted-l); border-top: 1px solid rgba(0,0,0,0.08); padding-top: 8px; width: 100%; }\r
\r
    .landing-footer {\r
      background: var(--forest); padding: 64px;\r
      display: flex; justify-content: space-between; align-items: flex-start;\r
      flex-wrap: wrap; gap: 32px;\r
    }\r
    .footer-brand .brand-name { color: var(--sage-l); font-family: 'Lora', serif; }\r
    .footer-brand p { color: var(--muted-l); font-size: 13px; margin-top: 8px; }\r
    .footer-links { display: flex; gap: 28px; flex-wrap: wrap; }\r
    .footer-links a { color: rgba(255,255,255,0.5); text-decoration: none; font-size: 13px; transition: color 0.2s; }\r
    .footer-links a:hover { color: var(--sage-l); }\r
    .footer-note { color: rgba(255,255,255,0.3); font-size: 12px; width: 100%; margin-top: 24px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.1); }\r
\r
    /* ============================================================ DASHBOARD ============================================================ */\r
    .sidebar {\r
      width: var(--sidebar-w); flex-shrink: 0;\r
      background: var(--sand);\r
      display: flex; flex-direction: column;\r
      position: sticky; top: 0; height: 100vh;\r
      overflow-y: auto;\r
      transition: left 0.3s cubic-bezier(0.4,0,0.2,1);\r
    }\r
    .dashboard-body { flex: 1; display: flex; overflow: hidden; min-height: calc(100vh); }\r
    .main-content { flex: 1; min-width: 0; background: var(--cream); display: flex; flex-direction: column; overflow-y: auto; height: 100vh; }\r
\r
    .sidebar-header { padding: 28px 24px 20px; display: flex; align-items: center; gap: 10px; border-bottom: 1px solid rgba(0,0,0,0.08); }\r
    .sb-brand-dot { width: 32px; height: 32px; border-radius: 50%; background: var(--sage); display: flex; align-items: center; justify-content: center; }\r
    .sb-brand-dot span { color: var(--forest); font-family: 'Lora', serif; font-size: 13px; font-style: italic; font-weight: 700; }\r
    .sb-brand-name { font-family: 'Lora', serif; font-size: 20px; font-weight: 600; color: rgba(0,0,0,0.63); }\r
\r
    .user-profile { padding: 20px 24px; display: flex; align-items: center; gap: 12px; border-bottom: 1px solid rgba(0,0,0,0.08); }\r
    .avatar { width: 38px; height: 38px; border-radius: 50%; background: linear-gradient(135deg, var(--gold), var(--sky)); display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 700; color: var(--forest); flex-shrink: 0; }\r
    .user-info { min-width: 0; }\r
    .user-name { font-size: 14px; font-weight: 600; color: var(--ink); display: block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\r
    .user-tag { font-size: 11px; color: var(--muted); font-family: 'JetBrains Mono', monospace; }\r
\r
    .sidebar-search { margin: 16px 24px; display: flex; align-items: center; gap: 8px; background: rgba(0,0,0,0.07); border: 1px solid rgba(0,0,0,0.1); border-radius: var(--radius-sm); padding: 9px 12px; }\r
    .sidebar-search input { background: none; border: none; outline: none; color: var(--ink); font-family: 'Outfit', sans-serif; font-size: 13px; width: 100%; }\r
    .sidebar-search input::placeholder { color: var(--muted-l); }\r
\r
    .sidebar-nav { padding: 8px 12px 24px; flex: 1; }\r
    .nav-group-label { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--muted); padding: 16px 12px 6px; }\r
    .nav-item {\r
      display: flex; align-items: center; gap: 10px;\r
      padding: 10px 12px; border-radius: var(--radius-sm);\r
      color: var(--ink2); text-decoration: none; font-size: 13.5px; font-weight: 500;\r
      transition: all 0.18s; cursor: pointer; margin-bottom: 2px;\r
      white-space: nowrap; border-left: 3px solid transparent;\r
    }\r
    .nav-item svg { flex-shrink: 0; opacity: 0.6; }\r
    .nav-item:hover { background: rgba(0,0,0,0.06); border-left-color: rgba(123,158,135,0.4); transform: translateX(2px); }\r
    .nav-item.active { background: rgba(123,158,135,0.18); color: var(--forest); border-left: 3px solid var(--sage); padding-left: 9px; }\r
    .nav-item.active svg { opacity: 1; color: var(--sage-d); }\r
    .nav-badge { margin-left: auto; font-size: 10px; font-weight: 700; padding: 2px 7px; border-radius: 100px; }\r
    .badge-danger { background: rgba(193,99,74,0.25); color: #ec3b13; animation: badgePulse 2.2s ease-in-out infinite; }\r
    .badge-high   { background: rgba(212,168,83,0.25); color: #a07a13; }\r
    .download-btn { margin-top: 8px; border-top: 1px solid rgba(0,0,0,0.08); padding-top: 14px; }\r
    @keyframes badgePulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.65; } }\r
\r
    .mobile-topbar { display: none; position: sticky; top: 0; z-index: 200; background: rgba(247,243,238,0.95); padding: 14px 20px; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--sand); }\r
    .mobile-topbar-brand { display: flex; align-items: center; gap: 8px; }\r
    .mobile-hamburger { background: rgba(0,0,0,0.07); border: none; width: 38px; height: 38px; border-radius: var(--radius-sm); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 5px; cursor: pointer; padding: 0; }\r
    .mobile-hamburger span { display: block; width: 18px; height: 2px; background: var(--ink2); border-radius: 2px; transition: all 0.25s; }\r
    .mobile-hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }\r
    .mobile-hamburger.open span:nth-child(2) { opacity: 0; }\r
    .mobile-hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }\r
    .sidebar-overlay { display: none; position: fixed; inset: 0; z-index: 299; background: rgba(0,0,0,0.5); backdrop-filter: blur(2px); opacity: 0; transition: opacity 0.3s; }\r
    .sidebar-overlay.active { display: block; opacity: 1; }\r
\r
    .topbar {\r
      position: sticky; top: 0; z-index: 50;\r
      display: flex; align-items: center; justify-content: space-between;\r
      padding: 18px 32px;\r
      background: rgba(247,243,238,0.92);\r
      backdrop-filter: blur(16px);\r
      border-bottom: 2px solid transparent;\r
      background-image: linear-gradient(rgba(247,243,238,0.92), rgba(247,243,238,0.92)), linear-gradient(90deg, var(--gold) 0%, var(--sky) 55%, var(--sage) 100%);\r
      background-origin: border-box;\r
      background-clip: padding-box, border-box;\r
    }\r
    .topbar-left h2 { font-family: 'Lora', serif; font-size: 22px; font-weight: 600; color: var(--forest); line-height: 1.2; }\r
    .topbar-left span { font-size: 13px; color: var(--muted-l); }\r
    .topbar-right { display: flex; align-items: center; gap: 16px; }\r
    .filter-group { display: flex; align-items: center; gap: 8px; }\r
    .filter-label { font-size: 12px; color: var(--muted-l); font-weight: 500; }\r
    .filter-group select { background: var(--white); border: 1px solid var(--sand); border-radius: var(--radius-sm); padding: 7px 12px; font-family: 'Outfit', sans-serif; font-size: 13px; color: var(--ink); cursor: pointer; outline: none; }\r
    .report-date { font-size: 12px; color: var(--muted-l); font-family: 'JetBrains Mono', monospace; }\r
\r
    .views-container { flex: 1; padding: 28px 32px 40px; }\r
    .view { display: none; animation: fadeUp 0.3s ease; }\r
    .view.active { display: block; }\r
    @keyframes fadeUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }\r
    .view-intro { background: var(--white); border: 1px solid var(--sand); border-radius: var(--radius-md); padding: 16px 20px; font-size: 14px; color: var(--muted); margin-bottom: 24px; border-left: 3px solid var(--gold); animation: introBar 3s ease-in-out infinite; }\r
    @keyframes introBar { 0%, 100% { border-left-color: var(--gold); } 50% { border-left-color: var(--gold-l); } }\r
\r
    /* BENTO GRID */\r
    .bento-grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: 20px; }\r
    .bento-card {\r
      background: var(--white); border: 1px solid var(--sand);\r
      border-radius: var(--radius-lg); padding: 24px;\r
      box-shadow: var(--shadow-sm); overflow: hidden; position: relative;\r
      animation: bentoIn 0.4s cubic-bezier(0.22,1,0.36,1) both;\r
      transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;\r
    }\r
    .bento-card:hover { transform: translateY(-3px); box-shadow: 0 8px 28px rgba(26,26,26,0.09) !important; border-color: var(--sage-l) !important; }\r
    @keyframes bentoIn { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }\r
    .bento-grid .bento-card:nth-child(1) { animation-delay: 0.03s; }\r
    .bento-grid .bento-card:nth-child(2) { animation-delay: 0.08s; }\r
    .bento-grid .bento-card:nth-child(3) { animation-delay: 0.13s; }\r
    .bento-grid .bento-card:nth-child(4) { animation-delay: 0.18s; }\r
    .bento-grid .bento-card:nth-child(5) { animation-delay: 0.22s; }\r
    .bento-grid .bento-card:nth-child(6) { animation-delay: 0.26s; }\r
    .bento-grid .bento-card:nth-child(7) { animation-delay: 0.30s; }\r
    .bento-grid .bento-card:nth-child(8) { animation-delay: 0.34s; }\r
    .bento-grid .bento-card:nth-child(9) { animation-delay: 0.38s; }\r
    .card-title { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.07em; color: var(--muted-l); margin-bottom: 16px; }\r
\r
    .bento-alert { grid-column: span 12; }\r
    .alert-banner {\r
      display: flex; align-items: center; gap: 16px;\r
      background: linear-gradient(135deg, rgba(212,168,83,0.1), rgba(212,168,83,0.05));\r
      border: 1px solid rgba(212,168,83,0.3); border-radius: var(--radius-md);\r
      padding: 16px 20px;\r
      animation: alertGlow 3.5s ease-in-out infinite;\r
    }\r
    @keyframes alertGlow { 0%, 100% { box-shadow: inset 3px 0 0 var(--gold); } 50% { box-shadow: inset 3px 0 0 var(--gold), 0 0 16px rgba(212,168,83,0.12); } }\r
    .alert-icon { font-size: 24px; flex-shrink: 0; }\r
    .alert-text h4 { font-size: 14px; font-weight: 700; color: #8B6914; margin-bottom: 3px; }\r
    .alert-text p { font-size: 13px; color: var(--muted); }\r
    .alert-action { margin-left: auto; background: var(--gold); color: var(--white); border: none; padding: 8px 18px; border-radius: 100px; font-family: 'Outfit', sans-serif; font-size: 13px; font-weight: 600; cursor: pointer; flex-shrink: 0; transition: all 0.2s; }\r
    .alert-action:hover { background: #b8902e; }\r
\r
    /* RISK CATEGORIES CARD */\r
    .bento-score { grid-column: span 4; padding: 20px 18px; }\r
    .rc-list { display: flex; flex-direction: column; gap: 0; }\r
    .rc-item { border: 1px solid #E8E0D5; border-radius: 12px; margin-bottom: 8px; overflow: hidden; cursor: pointer; background: #FEFCF9; transition: box-shadow 0.2s; }\r
    .rc-item:last-child { margin-bottom: 0; }\r
    .rc-item:hover { box-shadow: 0 3px 12px rgba(0,0,0,0.07); }\r
    .rc-item.rc-expanded { background: #fff; box-shadow: 0 4px 16px rgba(0,0,0,0.07), 0 0 0 1.5px rgba(123,158,135,0.2); }\r
    .rc-item-head { display: flex; align-items: center; gap: 12px; padding: 13px 14px; }\r
    .rc-icon { width: 38px; height: 38px; border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }\r
    .rc-icon--gold  { background: rgba(212,168,83,0.12); color: var(--gold); }\r
    .rc-icon--green { background: rgba(107,174,214,0.12); color: var(--sky); }\r
    .rc-icon--blue  { background: rgba(139,94,131,0.12); color: var(--plum); }\r
    .rc-icon--red   { background: rgba(193,99,74,0.10); color: var(--terra); }\r
    .rc-meta { flex: 1; min-width: 0; }\r
    .rc-name { font-size: 13.5px; font-weight: 700; color: var(--ink); display: flex; align-items: center; gap: 7px; flex-wrap: wrap; }\r
    .rc-sub { font-size: 11.5px; color: var(--muted-l); margin-top: 1px; }\r
    .rc-badge { font-size: 10px; font-weight: 700; padding: 2px 8px; border-radius: 100px; flex-shrink: 0; }\r
    .rc-badge--vh { background: rgba(193,99,74,0.10); color: var(--terra); }\r
    .rc-badge--h  { background: rgba(212,168,83,0.13); color: #8B6914; }\r
    .rc-badge--m  { background: rgba(107,174,214,0.13); color: #2E6FA3; }\r
    .rc-badge--l  { background: rgba(123,158,135,0.13); color: var(--sage-d); }\r
    .rc-chevron { color: var(--muted-l); flex-shrink: 0; transition: transform .2s; }\r
    .rc-expand-body { padding: 0 14px 14px 64px; }\r
    .rc-tags { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 10px; }\r
    .rc-tag { font-size: 11.5px; font-weight: 500; padding: 4px 11px; background: var(--cream2); border-radius: 100px; color: var(--ink2); border: 1px solid rgba(0,0,0,0.06); }\r
    .rc-desc { font-size: 12.5px; color: var(--muted); line-height: 1.65; margin-bottom: 11px; }\r
    .rc-footer { display: flex; align-items: center; gap: 5px; font-size: 11.5px; color: var(--muted-l); }\r
    .rc-footer span:first-of-type { flex: 1; }\r
    .rc-time { flex-shrink: 0; font-size: 11px; color: var(--muted-l); white-space: nowrap; }\r
\r
    /* DISTRIBUTION */\r
    .bento-dist { grid-column: span 5; background: linear-gradient(155deg, #ffffff 0%, #fcfaf7 58%, #f5efe6 100%); border: 1px solid #e6ddcf; }\r
    .dist2-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }\r
    .dist2-title-block { display: flex; flex-direction: column; gap: 2px; }\r
    .dist2-subtitle { font-size: 11px; color: var(--muted); font-weight: 500; }\r
    .dist2-donut { flex-shrink: 0; }\r
    .donut-seg { fill: none; stroke-width: 6; stroke-linecap: butt; r: 15.9155; cx: 18; cy: 18; transform-origin: center; transform: rotate(-90deg); }\r
    .dist2-rows { display: flex; flex-direction: column; gap: 4px; }\r
    .dist2-row { border-radius: 10px; border: 1px solid transparent; cursor: pointer; transition: background .15s, border-color .15s; overflow: hidden; }\r
    .dist2-row:hover { border-color: rgba(0,0,0,0.08); background: rgba(255,255,255,0.7); }\r
    .dist2-row.dist2-open { border-color: rgba(0,0,0,0.09); background: #fff; box-shadow: 0 2px 10px rgba(0,0,0,0.05); }\r
    .dist2-row-vh.dist2-open { border-color: rgba(193,99,74,0.22); background: rgba(193,99,74,0.03); }\r
    .dist2-row-h.dist2-open  { border-color: rgba(212,168,83,0.25); background: rgba(212,168,83,0.03); }\r
    .dist2-row-m.dist2-open  { border-color: rgba(107,174,214,0.25); background: rgba(107,174,214,0.03); }\r
    .dist2-row-l.dist2-open  { border-color: rgba(123,158,135,0.25); background: rgba(123,158,135,0.03); }\r
    .dist2-row-vl.dist2-open { border-color: rgba(53,88,71,0.18); background: rgba(53,88,71,0.03); }\r
    .dist2-row-top { display: flex; align-items: center; gap: 8px; padding: 8px 10px; }\r
    .dist2-pip { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }\r
    .dist2-pip-vh { background: #c1634a; }\r
    .dist2-pip-h  { background: #d4a853; }\r
    .dist2-pip-m  { background: #6baed6; }\r
    .dist2-pip-l  { background: #7b9e87; }\r
    .dist2-pip-vl { background: #355847; }\r
    .dist2-lbl { font-size: 12px; font-weight: 700; color: var(--ink2); min-width: 58px; }\r
    .dist2-bar-wrap { flex: 1; height: 10px; background: rgba(0,0,0,0.07); border-radius: 100px; overflow: hidden; }\r
    .dist2-bar { height: 100%; border-radius: 100px; animation: dist2Grow .8s ease both; transform-origin: left; }\r
    @keyframes dist2Grow { from { transform: scaleX(0); } to { transform: scaleX(1); } }\r
    .dist2-bar-vh { background: linear-gradient(90deg,#b9543d,#cf7057); }\r
    .dist2-bar-h  { background: linear-gradient(90deg,#c9943a,#ddb862); }\r
    .dist2-bar-m  { background: linear-gradient(90deg,#4f97c6,#77b8df); }\r
    .dist2-bar-l  { background: linear-gradient(90deg,#5b8d72,#89b49d); }\r
    .dist2-bar-vl { background: linear-gradient(90deg,#355847,#4f7762); }\r
    .dist2-count { font-size: 12px; font-weight: 800; min-width: 18px; text-align: right; }\r
    .dist2-count-vh { color: #c1634a; }\r
    .dist2-count-h  { color: #c09030; }\r
    .dist2-count-m  { color: #4080b0; }\r
    .dist2-count-l  { color: #5a8a6a; }\r
    .dist2-count-vl { color: #355847; }\r
    .dist2-chevron { color: var(--muted-l); transition: transform .22s; flex-shrink: 0; }\r
    .dist2-open .dist2-chevron { transform: rotate(180deg); }\r
    .dist2-traits { display: flex; flex-wrap: wrap; gap: 5px; padding: 0 10px 10px 26px; }\r
    .dist2-chip { font-size: 11px; font-weight: 600; padding: 3px 10px; border-radius: 100px; cursor: pointer; border: 1px solid transparent; transition: all .15s; }\r
    .dist2-row-vh .dist2-chip { background: rgba(193,99,74,0.1); color: #a04530; border-color: rgba(193,99,74,0.18); }\r
    .dist2-row-h  .dist2-chip { background: rgba(212,168,83,0.1); color: #8b6914; border-color: rgba(212,168,83,0.22); }\r
    .dist2-row-m  .dist2-chip { background: rgba(107,174,214,0.1); color: #2e6fa3; border-color: rgba(107,174,214,0.22); }\r
    .dist2-row-l  .dist2-chip { background: rgba(123,158,135,0.1); color: #4a7055; border-color: rgba(123,158,135,0.22); }\r
    .dist2-row-vl .dist2-chip { background: rgba(53,88,71,0.08); color: #355847; border-color: rgba(53,88,71,0.18); }\r
    .dist2-chip:hover { filter: brightness(0.9); transform: translateY(-1px); }\r
\r
    /* PRIORITY */\r
    .bento-priority { grid-column: span 3; padding: 18px 20px; }\r
    .priority-list { display: flex; flex-direction: column; gap: 8px; }\r
    .priority-item { display: flex; align-items: center; gap: 10px; padding: 8px 10px; border-radius: var(--radius-sm); background: var(--cream); border: 1px solid var(--sand); cursor: pointer; transition: all 0.18s; }\r
    .priority-item:hover { background: rgba(123,158,135,0.08) !important; border-color: var(--sage-l) !important; transform: translateX(3px); }\r
    .priority-dot { width: 9px; height: 9px; border-radius: 50%; flex-shrink: 0; }\r
    .priority-name { font-size: 13px; font-weight: 500; color: var(--ink2); flex: 1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\r
    .priority-badge { font-size: 10px; font-weight: 700; padding: 2px 7px; border-radius: 100px; flex-shrink: 0; }\r
\r
    /* CATEGORY SUMMARY CARDS */\r
    .bento-cat { grid-column: span 4; align-self: start; }\r
    .cat-summary-num { font-size: 36px; font-weight: 800; color: var(--forest); line-height: 1; margin-bottom: 4px; }\r
    .cat-summary-label { font-size: 13px; color: var(--muted); margin-bottom: 16px; }\r
    .cat-summary-bar { height: 4px; border-radius: 100px; background: var(--cream2); overflow: hidden; margin-bottom: 8px; }\r
    .cat-summary-fill { height: 100%; border-radius: 100px; }\r
    .cat-summary-sub { font-size: 12px; color: var(--muted-l); }\r
    .cat-accent-lipids    { border-top: 3px solid var(--gold); }\r
    .cat-accent-metabolic { border-top: 3px solid var(--sage); }\r
    .cat-accent-vitamins  { border-top: 3px solid var(--plum); }\r
    .cat-accent-cardio    { border-top: 3px solid var(--terra); }\r
    .cat-accent-protein   { border-top: 3px solid var(--sky); }\r
    .cat-accent-lipids    .cat-summary-num { color: #9a7020; }\r
    .cat-accent-metabolic .cat-summary-num { color: var(--sage-d); }\r
    .cat-accent-vitamins  .cat-summary-num { color: var(--plum); }\r
    .cat-accent-cardio    .cat-summary-num { color: var(--terra); }\r
    .cat-accent-protein   .cat-summary-num { color: #2e6fa3; }\r
    .cat-accent-lipids:hover    { box-shadow: 0 6px 22px rgba(212,168,83,0.16) !important; border-color: rgba(212,168,83,0.35) !important; }\r
    .cat-accent-metabolic:hover { box-shadow: 0 6px 22px rgba(123,158,135,0.16) !important; border-color: var(--sage-l) !important; }\r
    .cat-accent-vitamins:hover  { box-shadow: 0 6px 22px rgba(139,94,131,0.16) !important; border-color: rgba(139,94,131,0.35) !important; }\r
    .cat-accent-cardio:hover    { box-shadow: 0 6px 22px rgba(193,99,74,0.14) !important; border-color: rgba(193,99,74,0.35) !important; }\r
    .cat-accent-protein:hover   { box-shadow: 0 6px 22px rgba(107,174,214,0.18) !important; border-color: rgba(107,174,214,0.35) !important; }\r
\r
    /* RADAR */\r
    .bento-radar { grid-column: span 6; display: flex; flex-direction: column; gap: 12px; }\r
    .polar-header { display: flex; align-items: center; justify-content: space-between; }\r
    .polar-overall-badge { font-size: 11px; font-weight: 700; background: var(--cream); color: var(--muted); border: 1px solid var(--sand); padding: 3px 10px; border-radius: 100px; }\r
    .ring-wrap { display: flex; justify-content: center; align-items: center; padding: 4px 0; }\r
    .ring-svg { width: 180px; height: 180px; overflow: visible; }\r
    .ring-centre-val { font-family: 'Outfit', sans-serif; font-size: 22px; font-weight: 800; fill: #1E3A2F; }\r
    .ring-centre-lbl { font-family: 'Outfit', sans-serif; font-size: 9px; font-weight: 600; fill: #9E9589; text-transform: uppercase; letter-spacing: 0.06em; }\r
    .ring-legend { display: flex; flex-direction: column; gap: 7px; }\r
    .rl-item { display: flex; align-items: center; justify-content: space-between; padding: 5px 8px; border-radius: 9px; cursor: pointer; transition: background 0.15s; border: 1px solid transparent; }\r
    .rl-item:hover, .rl-item--active { background: var(--cream); border-color: var(--cream2); }\r
    .rl-left { display: flex; align-items: center; gap: 8px; }\r
    .rl-swatch { width: 8px; height: 8px; border-radius: 50%; background: var(--c); flex-shrink: 0; }\r
    .rl-name { font-size: 12px; font-weight: 600; color: #4B4540; }\r
    .rl-right { display: flex; align-items: center; gap: 8px; }\r
    .rl-bar-track { width: 60px; height: 4px; background: var(--cream2); border-radius: 100px; overflow: hidden; }\r
    .rl-bar { height: 100%; width: var(--w); background: var(--c); border-radius: 100px; animation: rlBarIn 0.7s ease both; }\r
    @keyframes rlBarIn { from { width: 0; } to { width: var(--w); } }\r
    .rl-count { font-size: 12px; font-weight: 800; color: var(--forest); min-width: 16px; text-align: right; }\r
\r
    /* ROUTINE */\r
    .bento-routine { grid-column: span 6; background: linear-gradient(150deg, #fff 65%, rgba(212,168,83,0.04) 100%) !important; }\r
    .routine-head { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 8px; }\r
    .routine-head .card-title { margin-bottom: 0; }\r
    .routine-profile-badge { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.07em; border-radius: 100px; padding: 4px 9px; background: var(--cream2); color: var(--muted); border: 1px solid var(--sand); }\r
    .routine-sub { font-size: 12.5px; color: var(--muted); line-height: 1.6; margin-bottom: 12px; }\r
    .routine-progress { margin-bottom: 14px; }\r
    .routine-progress-meta { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--muted-l); margin-bottom: 6px; }\r
    .routine-progress-track { height: 7px; border-radius: 100px; background: var(--cream2); overflow: hidden; border: 1px solid #e4d8c8; }\r
    .routine-progress-fill { height: 100%; border-radius: 100px; width: 0; transition: width 0.25s ease; background: linear-gradient(90deg, var(--gold), var(--gold-l)); }\r
    .routine-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px; }\r
    .routine-subcard { border-radius: 12px; padding: 10px 11px 12px; display: flex; flex-direction: column; gap: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.08); transition: box-shadow 0.2s ease, transform 0.2s ease; }\r
    .routine-subcard:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.12); transform: translateY(-1px); }\r
    .routine-subcard--morning { background: linear-gradient(145deg, #fef9ed 0%, #fdf3d0 100%); border: 1px solid #f0dfa0; }\r
    .routine-subcard--night { background: linear-gradient(145deg, #1a2a4a 0%, #0f1d38 100%); border: 1px solid #243555; }\r
    .routine-subcard-header { display: flex; align-items: center; gap: 7px; padding-bottom: 6px; }\r
    .routine-col-title { font-weight: 700; font-size: 0.92rem; letter-spacing: 0.03em; text-transform: uppercase; }\r
    .routine-subcard--morning .routine-col-title { color: #7a5a10; }\r
    .routine-subcard--night .routine-col-title { color: #7eb8e8; }\r
    .routine-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 5px; color: white; }\r
    .routine-item-btn { width: 100%; border: none; background: transparent; border-radius: 9px; padding: 6px 8px 7px; font-size: 11.5px; line-height: 1.35; text-align: left; display: flex; align-items: flex-start; gap: 7px; cursor: pointer; transition: all 0.18s ease; }\r
    .routine-item-btn:hover { transform: translateX(1px); background: rgba(255,255,255,0.15); }\r
    .routine-check { width: 14px; height: 13px; border-radius: 50%; border: 1.5px solid #c8bba8; background: transparent; margin-top: 2px; flex-shrink: 0; position: relative; }\r
    .routine-item-btn.checked .routine-check { border-color: var(--gold); background: rgba(212,168,83,0.2); box-shadow: 0 0 0 3px rgba(212,168,83,0.18); }\r
    .routine-item-btn.checked .routine-check::after { content: ''; position: absolute; left: 4px; top: 1px; width: 5px; height: 8px; border: solid var(--gold); border-width: 0 2px 2px 0; transform: rotate(45deg); }\r
    .routine-item-text { flex: 1; font-size: 11.5px; }\r
    .routine-subcard--morning .routine-item-text { color: #5a4010; }\r
    .routine-subcard--night .routine-item-text { color: #c5daf0; }\r
    .routine-footer { margin-top: 12px; font-size: 11px; color: var(--muted-l); line-height: 1.5; font-family: 'JetBrains Mono', monospace; }\r
\r
    /* TRAITS GRID */\r
    .traits-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px,1fr)); gap: 16px; }\r
    .trait-card {\r
      background: var(--white); border: 1px solid var(--sand);\r
      border-radius: var(--radius-md); padding: 20px;\r
      cursor: pointer; transition: all 0.2s;\r
      position: relative; overflow: hidden;\r
      display: flex; flex-direction: column;\r
      animation: traitIn 0.35s cubic-bezier(0.22,1,0.36,1) both;\r
    }\r
    @keyframes traitIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }\r
    .traits-grid .trait-card:nth-child(1) { animation-delay: 0.04s; }\r
    .traits-grid .trait-card:nth-child(2) { animation-delay: 0.08s; }\r
    .traits-grid .trait-card:nth-child(3) { animation-delay: 0.12s; }\r
    .traits-grid .trait-card:nth-child(n+4) { animation-delay: 0.16s; }\r
    .trait-card[data-risk="very-high"] { background: var(--risk-very-high-bg); border-color: rgba(193,99,74,0.28); box-shadow: 0 0 0 1.5px rgba(193,99,74,0.28); }\r
    .trait-card[data-risk="high"]      { background: var(--risk-high-bg); border-color: rgba(212,168,83,0.32); }\r
    .trait-card[data-risk="medium"]    { background: var(--risk-medium-bg); border-color: rgba(107,174,214,0.32); }\r
    .trait-card[data-risk="low"]       { background: var(--risk-low-bg); border-color: rgba(123,158,135,0.34); }\r
    .trait-card[data-risk="very-low"]  { background: var(--risk-very-low-bg); border-color: rgba(74,112,85,0.3); }\r
    .trait-card:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); border-color: var(--sage-l); }\r
    .trait-card::after { content: ''; position: absolute; top: 0; left: -70%; width: 40%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent); transform: skewX(-18deg); pointer-events: none; opacity: 0; }\r
    @keyframes shimmer { from { left: -70%; } to { left: 130%; } }\r
    .trait-card:hover::after { opacity: 1; animation: shimmer 0.5s ease forwards; }\r
    .trait-risk-strip { height: 3px; border-radius: 100px; background: var(--cream2); margin-bottom: 14px; overflow: hidden; }\r
    .risk-fill { height: 100%; border-radius: 100px; transform-origin: left; animation: fillIn 0.8s cubic-bezier(0.22,1,0.36,1) both; }\r
    @keyframes fillIn { from { transform: scaleX(0); } to { transform: scaleX(1); } }\r
    .risk-fill.risk-very-high { background: var(--risk-very-high); }\r
    .risk-fill.risk-high      { background: var(--risk-high); }\r
    .risk-fill.risk-medium    { background: var(--risk-medium); }\r
    .risk-fill.risk-low       { background: var(--risk-low); }\r
    .risk-fill.risk-very-low  { background: var(--risk-very-low); }\r
    .trait-header { display: flex; align-items: flex-start; justify-content: space-between; gap: 8px; margin-bottom: 8px; }\r
    .trait-name { font-size: 14px; font-weight: 700; color: var(--forest); line-height: 1.3; }\r
    .risk-badge { font-size: 10px; font-weight: 700; padding: 3px 8px; border-radius: 100px; flex-shrink: 0; white-space: nowrap; }\r
    .risk-badge.risk-very-high { background: rgba(193,99,74,0.12); color: var(--terra); }\r
    .risk-badge.risk-high      { background: rgba(212,168,83,0.15); color: #8B6914; }\r
    .risk-badge.risk-medium    { background: rgba(107,174,214,0.15); color: #2878A8; }\r
    .risk-badge.risk-low       { background: rgba(123,158,135,0.15); color: var(--sage-d); }\r
    .risk-badge.risk-very-low  { background: rgba(74,112,85,0.12); color: var(--sage-d); }\r
    .trait-desc { font-size: 13px; color: var(--muted); line-height: 1.6; margin-bottom: 12px; }\r
    .trait-footer { display: flex; justify-content: space-between; padding-top: 10px; border-top: 1px solid var(--cream2); margin-top: auto; }\r
    .trait-prs { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--muted-l); }\r
    .trait-pop { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--muted-l); }\r
\r
    /* RECOMMENDATIONS */\r
    .recs-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 28px; }\r
    .rec-card { background: var(--white); border: 1px solid var(--sand); border-radius: var(--radius-lg); padding: 28px; position: relative; overflow: hidden; }\r
    .rec-card::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 4px; }\r
    .rec-urgent::before  { background: var(--risk-very-high); }\r
    .rec-high::before    { background: var(--risk-high); }\r
    .rec-medium::before  { background: var(--risk-medium); }\r
    .rec-low::before     { background: var(--risk-very-low); }\r
    .rec-priority-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.07em; color: var(--muted-l); margin-bottom: 8px; }\r
    .rec-urgent .rec-priority-label  { color: var(--terra); }\r
    .rec-high .rec-priority-label    { color: #8B6914; }\r
    .rec-medium .rec-priority-label  { color: #2878A8; }\r
    .rec-low .rec-priority-label     { color: var(--sage-d); }\r
    .rec-card h3 { font-family: 'Lora', serif; font-size: 18px; font-weight: 600; color: var(--forest); margin-bottom: 10px; }\r
    .rec-card p { font-size: 13.5px; color: var(--muted); line-height: 1.7; margin-bottom: 16px; }\r
    .rec-list { padding-left: 18px; display: flex; flex-direction: column; gap: 6px; margin-bottom: 16px; }\r
    .rec-list li { font-size: 13px; color: var(--muted); line-height: 1.6; }\r
    .rec-genes { font-family: 'JetBrains Mono', monospace; font-size: 10.5px; color: var(--muted-l); background: var(--cream2); padding: 8px 12px; border-radius: var(--radius-sm); line-height: 1.7; }\r
    .skin-plan-cta { border-radius: var(--radius-lg); padding: 32px 40px; display: flex; align-items: center; justify-content: space-between; gap: 20px; background: linear-gradient(120deg, #1a3328 0%, #243d2a 35%, #2a4a38 65%, #1e3a2f 100%) !important; background-size: 250% 250% !important; animation: ctaFlow 9s ease infinite !important; }\r
    @keyframes ctaFlow { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }\r
    .skin-plan-cta h3 { font-family: 'Lora', serif; font-size: 22px; font-weight: 600; color: var(--white); margin-bottom: 6px; }\r
    .skin-plan-cta p { font-size: 14px; color: rgba(255,255,255,0.6); }\r
    .btn-primary-lg { background: var(--gold); color: var(--forest); border: none; padding: 14px 30px; border-radius: 100px; font-family: 'Outfit', sans-serif; font-size: 15px; font-weight: 700; cursor: pointer; transition: all 0.2s; white-space: nowrap; flex-shrink: 0; }\r
    .btn-primary-lg:hover { background: var(--gold-l); transform: translateY(-2px); }\r
\r
    /* MODAL */\r
    .modal-overlay { position: fixed; inset: 0; z-index: 1000; background: rgba(26,26,26,0.5); backdrop-filter: blur(4px); display: none; align-items: center; justify-content: center; padding: 20px; }\r
    .modal-overlay.open { display: flex; }\r
    .modal-box { background: var(--white); border-radius: var(--radius-xl); padding: 40px; max-width: 600px; width: 100%; max-height: 90vh; overflow-y: auto; position: relative; box-shadow: var(--shadow-lg); animation: modalIn 0.25s ease; scrollbar-width: thin; scrollbar-color: var(--gold) var(--cream2); }\r
    @keyframes modalIn { from { opacity:0; transform: scale(0.95) translateY(10px); } to { opacity:1; transform: scale(1) translateY(0); } }\r
    .modal-close { position: absolute; top: 16px; right: 16px; background: var(--cream2); border: none; width: 32px; height: 32px; border-radius: 50%; font-size: 14px; cursor: pointer; color: var(--muted); display: flex; align-items: center; justify-content: center; transition: all 0.18s; }\r
    .modal-close:hover { background: var(--sand); }\r
    .modal-risk-banner { border-radius: var(--radius-md); padding: 16px 20px; margin-bottom: 20px; display: flex; align-items: center; gap: 16px; }\r
    .modal-risk-banner.risk-very-high { background: rgba(193,99,74,0.1); border: 1px solid rgba(193,99,74,0.2); }\r
    .modal-risk-banner.risk-high      { background: rgba(212,168,83,0.1); border: 1px solid rgba(212,168,83,0.2); }\r
    .modal-risk-banner.risk-medium    { background: rgba(107,174,214,0.1); border: 1px solid rgba(107,174,214,0.2); }\r
    .modal-risk-banner.risk-low       { background: rgba(123,158,135,0.1); border: 1px solid rgba(123,158,135,0.2); }\r
    .modal-risk-banner.risk-very-low  { background: rgba(74,112,85,0.1); border: 1px solid rgba(74,112,85,0.2); }\r
    .modal-prs-big { font-size: 48px; font-weight: 800; color: var(--forest); line-height: 1; }\r
    .modal-prs-meta span { display: block; }\r
    .modal-prs-meta .m-label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.07em; color: var(--muted-l); font-weight: 700; }\r
    .modal-prs-meta .m-val { font-size: 15px; font-weight: 600; color: var(--forest); }\r
    .modal-h2 { font-family: 'Lora', serif; font-size: 24px; font-weight: 600; color: var(--forest); margin-bottom: 8px; }\r
    .modal-cat { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.07em; color: var(--muted-l); margin-bottom: 4px; }\r
    .modal-desc { font-size: 14px; color: var(--muted); line-height: 1.75; margin-bottom: 20px; }\r
    .modal-section-title { font-size: 13px; font-weight: 700; color: var(--forest); margin-bottom: 10px; margin-top: 20px; }\r
    .modal-recs { display: flex; flex-direction: column; gap: 8px; max-height: 200px; overflow-y: auto; padding: 10px; background: var(--cream); border: 1px solid var(--sand); border-radius: var(--radius-sm); scrollbar-width: thin; scrollbar-color: var(--gold) var(--cream2); }\r
    .modal-rec-item { display: flex; align-items: flex-start; gap: 10px; padding: 10px 14px; background: var(--cream); border-radius: var(--radius-sm); }\r
    .modal-rec-item .rec-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--gold); margin-top: 6px; flex-shrink: 0; }\r
    .modal-rec-item span { font-size: 13px; color: var(--muted); line-height: 1.6; }\r
    .modal-genes { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--muted-l); background: var(--cream2); padding: 10px 14px; border-radius: var(--radius-sm); margin-top: 20px; line-height: 1.8; }\r
\r
    /* SCROLLBAR */\r
    .main-content::-webkit-scrollbar { width: 5px; }\r
    .main-content::-webkit-scrollbar-track { background: var(--cream2); }\r
    .main-content::-webkit-scrollbar-thumb { background: var(--gold-l); border-radius: 100px; }\r
    .main-content::-webkit-scrollbar-thumb:hover { background: var(--gold); }\r
\r
    /* RESPONSIVE */\r
    @media (max-width: 1024px) {\r
      :root { --sidebar-w: 0px; }\r
      .sidebar { position: fixed; left: -280px; top: 0; bottom: 0; z-index: 300; width: 280px !important; height: 100% !important; overflow-y: auto; }\r
      .sidebar.mobile-open { left: 0; box-shadow: var(--shadow-lg); }\r
      .mobile-topbar { display: flex; }\r
      .topbar { display: none; }\r
      .main-content { height: calc(100vh - 60px); }\r
      .bento-score, .bento-dist  { grid-column: span 6; }\r
      .bento-priority { grid-column: span 12; }\r
      .bento-radar, .bento-routine { grid-column: span 6; }\r
      .bento-cat { grid-column: span 6; }\r
      .recs-layout { grid-template-columns: 1fr; }\r
      .skin-plan-cta { flex-direction: column; }\r
      .btn-primary-lg { width: 100%; }\r
      .cat-grid { grid-template-columns: repeat(3,1fr); }\r
      .steps-grid { grid-template-columns: 1fr 1fr; }\r
      .hero { grid-template-columns: 1fr; gap: 40px; padding: 60px 32px; min-height: auto; }\r
      .landing-nav { padding: 16px 32px; }\r
      .section { padding: 72px 32px; }\r
    }\r
    @media (max-width: 640px) {\r
      .bento-grid { grid-template-columns: 1fr; gap: 14px; }\r
      .bento-score, .bento-dist, .bento-priority, .bento-radar, .bento-routine, .bento-cat, .bento-alert { grid-column: span 1 !important; }\r
      .routine-grid { grid-template-columns: 1fr; }\r
      .traits-grid { grid-template-columns: 1fr; }\r
      .recs-layout { grid-template-columns: 1fr; }\r
      .cat-grid { grid-template-columns: 1fr 1fr; }\r
      .steps-grid { grid-template-columns: 1fr; }\r
      .hero { padding: 40px 20px; }\r
      .views-container { padding: 16px; }\r
      .hero-title { font-size: 36px; }\r
      .landing-nav { padding: 14px 20px; }\r
      .landing-footer { padding: 40px 20px; flex-direction: column; }\r
    }\r
  \r
\r
/* ── OVERVIEW ── */\r
\r
          /* ── OVERVIEW RESET ── */\r
          #view-overview { padding: 0; }\r
\r
          /* ── HERO BANNER ── */\r
          .ov-hero {\r
            background: linear-gradient(135deg, #0f1e17 0%, #1a2e24 45%, #1e3530 100%);\r
            border-radius: 20px;\r
            padding: 32px 36px 28px;\r
            display: grid;\r
            grid-template-columns: 1fr auto;\r
            gap: 24px;\r
            align-items: center;\r
            position: relative;\r
            overflow: hidden;\r
            margin-bottom: 20px;\r
          }\r
          .ov-hero::before {\r
            content: '';\r
            position: absolute; inset: 0;\r
            background:\r
              radial-gradient(ellipse 55% 70% at 90% 50%, rgba(212,168,83,0.12) 0%, transparent 60%),\r
              radial-gradient(ellipse 35% 55% at 10% 80%, rgba(107,174,214,0.08) 0%, transparent 50%);\r
            pointer-events: none;\r
          }\r
          /* Animated DNA-strand dots */\r
          .ov-hero::after {\r
            content: '';\r
            position: absolute;\r
            right: 280px; top: 0; bottom: 0; width: 1px;\r
            background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.06) 30%, rgba(255,255,255,0.06) 70%, transparent);\r
          }\r
          .ov-hero-left { position: relative; z-index: 1; }\r
          .ov-hero-tag {\r
            display: inline-flex; align-items: center; gap: 6px;\r
            font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em;\r
            color: rgba(212,168,83,0.85);\r
            margin-bottom: 10px;\r
          }\r
          .ov-hero-tag::before { content: ''; width: 16px; height: 1px; background: rgba(212,168,83,0.5); }\r
          .ov-hero-name {\r
            font-family: 'Lora', serif;\r
            font-size: clamp(22px, 2.4vw, 30px);\r
            font-weight: 600;\r
            color: #fff;\r
            line-height: 1.2;\r
            margin-bottom: 6px;\r
          }\r
          .ov-hero-name em { color: var(--gold); font-style: italic; }\r
          .ov-hero-sub {\r
            font-size: 13px; color: rgba(255,255,255,0.45);\r
            margin-bottom: 20px;\r
          }\r
          .ov-hero-stats {\r
            display: flex; gap: 0;\r
            border: 1px solid rgba(255,255,255,0.08);\r
            border-radius: 12px; overflow: hidden;\r
            width: fit-content;\r
          }\r
          .ov-stat {\r
            padding: 10px 18px;\r
            border-right: 1px solid rgba(255,255,255,0.08);\r
          }\r
          .ov-stat:last-child { border-right: none; }\r
          .ov-stat-val {\r
            font-size: 20px; font-weight: 800;\r
            color: #fff; line-height: 1;\r
            margin-bottom: 2px;\r
          }\r
          .ov-stat-val.danger { color: var(--terra); }\r
          .ov-stat-val.warn   { color: var(--gold); }\r
          .ov-stat-val.ok     { color: var(--sage-l); }\r
          .ov-stat-lbl { font-size: 10px; color: rgba(255,255,255,0.38); font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; }\r
\r
          /* Arc score */\r
          .ov-arc-wrap {\r
            position: relative; z-index: 1;\r
            width: 160px; flex-shrink: 0;\r
            display: flex; flex-direction: column; align-items: center; gap: 8px;\r
          }\r
          .ov-arc-svg { width: 140px; height: 80px; overflow: visible; }\r
          .ov-arc-track { fill: none; stroke: rgba(255,255,255,0.08); stroke-width: 10; stroke-linecap: round; }\r
          .ov-arc-fill  { fill: none; stroke-width: 10; stroke-linecap: round; stroke-dasharray: 220; stroke-dashoffset: 220; transition: stroke-dashoffset 1.4s cubic-bezier(0.4,0,0.2,1) 0.3s; }\r
          .ov-arc-val { font-size: 28px; font-weight: 800; fill: #fff; }\r
          .ov-arc-label { font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; fill: rgba(255,255,255,0.38); }\r
          .ov-arc-badge {\r
            font-size: 11px; font-weight: 700;\r
            background: rgba(212,168,83,0.18);\r
            color: var(--gold);\r
            border: 1px solid rgba(212,168,83,0.3);\r
            padding: 4px 12px; border-radius: 100px;\r
            white-space: nowrap;\r
          }\r
\r
          /* ── ALERT STRIP ── */\r
          .ov-alert {\r
            display: flex; align-items: center; gap: 12px;\r
            background: rgba(193,99,74,0.07);\r
            border: 1px solid rgba(193,99,74,0.22);\r
            border-left: 3px solid var(--terra);\r
            border-radius: 12px; padding: 12px 16px;\r
            margin-bottom: 20px;\r
            animation: ovAlertGlow 3s ease-in-out infinite;\r
          }\r
          @keyframes ovAlertGlow { 0%,100%{box-shadow:none} 50%{box-shadow:0 0 18px rgba(193,99,74,0.10)} }\r
          .ov-alert-icon { font-size: 18px; flex-shrink: 0; }\r
          .ov-alert-body { flex: 1; min-width: 0; }\r
          .ov-alert-title { font-size: 13px; font-weight: 700; color: var(--terra); }\r
          .ov-alert-desc  { font-size: 12px; color: var(--muted); margin-top: 1px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\r
          .ov-alert-btn {\r
            flex-shrink: 0;\r
            background: var(--terra); color: #fff; border: none;\r
            padding: 7px 16px; border-radius: 100px;\r
            font-family: 'Outfit', sans-serif; font-size: 12px; font-weight: 700;\r
            cursor: pointer; transition: background 0.2s;\r
          }\r
          .ov-alert-btn:hover { background: #a84b35; }\r
\r
          /* ── MAIN GRID ── */\r
          .ov-grid {\r
            display: grid;\r
            grid-template-columns: 1fr 1fr 1fr;\r
            grid-template-rows: auto auto auto;\r
            gap: 16px;\r
          }\r
\r
          /* ── CATEGORY RAIL ── */\r
          .ov-cat-rail {\r
            grid-column: 1 / -1;\r
            display: grid;\r
            grid-template-columns: repeat(5, 1fr);\r
            gap: 12px;\r
          }\r
          .ov-cat-tile {\r
            background: var(--white);\r
            border: 1px solid var(--sand);\r
            border-radius: 16px;\r
            padding: 16px;\r
            cursor: pointer;\r
            transition: all 0.2s;\r
            position: relative;\r
            overflow: hidden;\r
          }\r
          .ov-cat-tile::before {\r
            content: '';\r
            position: absolute; top: 0; left: 0; right: 0; height: 3px;\r
            border-radius: 16px 16px 0 0;\r
          }\r
          .ov-cat-tile.c-lipids::before   { background: var(--gold); }\r
          .ov-cat-tile.c-metabolic::before{ background: var(--sage); }\r
          .ov-cat-tile.c-vitamins::before { background: var(--plum); }\r
          .ov-cat-tile.c-cardio::before   { background: var(--terra); }\r
          .ov-cat-tile.c-protein::before  { background: var(--sky); }\r
          .ov-cat-tile:hover { transform: translateY(-3px); box-shadow: var(--shadow-md); }\r
          .ov-ct-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; }\r
          .ov-ct-emoji { font-size: 20px; }\r
          .ov-ct-badge {\r
            font-size: 9px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em;\r
            padding: 2px 7px; border-radius: 100px;\r
          }\r
          .ov-ct-badge.b-danger { background: rgba(193,99,74,0.12); color: var(--terra); }\r
          .ov-ct-badge.b-warn   { background: rgba(212,168,83,0.14); color: #8B6914; }\r
          .ov-ct-badge.b-ok     { background: rgba(123,158,135,0.14); color: var(--sage-d); }\r
          .ov-ct-name { font-size: 12px; font-weight: 700; color: var(--forest); margin-bottom: 4px; }\r
          .ov-ct-count { font-size: 11px; color: var(--muted-l); }\r
          .ov-ct-arc {\r
            margin-top: 10px;\r
            height: 4px; background: var(--cream2); border-radius: 100px; overflow: hidden;\r
          }\r
          .ov-ct-arc-fill {\r
            height: 100%; border-radius: 100px;\r
            transform-origin: left;\r
            animation: fillIn 0.8s cubic-bezier(0.22,1,0.36,1) both;\r
          }\r
\r
          /* ── RISK BUBBLE MAP ── */\r
          .ov-bubble-card {\r
            grid-column: span 2;\r
            background: var(--white); border: 1px solid var(--sand);\r
            border-radius: 16px; padding: 20px;\r
          }\r
          .ov-card-head {\r
            display: flex; align-items: center; justify-content: space-between;\r
            margin-bottom: 16px;\r
          }\r
          .ov-card-title {\r
            font-size: 11px; font-weight: 700; text-transform: uppercase;\r
            letter-spacing: 0.08em; color: var(--muted-l);\r
          }\r
          .ov-card-link {\r
            font-size: 11px; font-weight: 700; color: var(--sage-d);\r
            cursor: pointer; text-decoration: none;\r
          }\r
          .ov-bubble-canvas { width: 100%; height: 200px; position: relative; overflow: hidden; }\r
          .ov-bubble {\r
            position: absolute;\r
            border-radius: 50%;\r
            display: flex; flex-direction: column; align-items: center; justify-content: center;\r
            cursor: pointer;\r
            transition: transform 0.2s, box-shadow 0.2s;\r
            text-align: center;\r
          }\r
          .ov-bubble:hover { transform: scale(1.08); box-shadow: 0 6px 20px rgba(0,0,0,0.14); z-index: 10; }\r
          .ov-bubble-name { font-size: 9px; font-weight: 700; line-height: 1.2; padding: 0 4px; }\r
          .ov-bubble-prs  { font-size: 8px; font-family: 'JetBrains Mono', monospace; opacity: 0.75; margin-top: 1px; }\r
          .ov-bubble.b-vh { background: rgba(193,99,74,0.15); border: 2px solid rgba(193,99,74,0.4); color: #8b3020; }\r
          .ov-bubble.b-h  { background: rgba(212,168,83,0.15); border: 2px solid rgba(212,168,83,0.35); color: #7a5010; }\r
          .ov-bubble.b-m  { background: rgba(107,174,214,0.15); border: 2px solid rgba(107,174,214,0.3); color: #1e5c80; }\r
          .ov-bubble.b-l  { background: rgba(123,158,135,0.14); border: 2px solid rgba(123,158,135,0.3); color: #2e5c40; }\r
\r
          /* ── INSIGHT TICKER ── */\r
          .ov-insight-card {\r
            grid-column: span 1;\r
            background: linear-gradient(160deg, #0f1e17 0%, #1a2d22 100%);\r
            border: 1px solid rgba(255,255,255,0.07);\r
            border-radius: 16px; padding: 20px;\r
            display: flex; flex-direction: column; gap: 10px;\r
          }\r
          .ov-insight-title { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: rgba(255,255,255,0.35); margin-bottom: 4px; }\r
          .ov-insight-item {\r
            display: flex; align-items: flex-start; gap: 10px;\r
            padding: 10px 12px;\r
            background: rgba(255,255,255,0.04);\r
            border: 1px solid rgba(255,255,255,0.06);\r
            border-radius: 10px;\r
            animation: ovInsightIn 0.4s ease both;\r
          }\r
          @keyframes ovInsightIn { from{opacity:0;transform:translateX(8px)} to{opacity:1;transform:translateX(0)} }\r
          .ov-insight-item:nth-child(2){animation-delay:0.08s}\r
          .ov-insight-item:nth-child(3){animation-delay:0.16s}\r
          .ov-insight-dot { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; margin-top: 4px; }\r
          .ov-insight-dot.d-danger { background: var(--terra); box-shadow: 0 0 6px rgba(193,99,74,0.6); }\r
          .ov-insight-dot.d-warn   { background: var(--gold);  box-shadow: 0 0 6px rgba(212,168,83,0.6); }\r
          .ov-insight-dot.d-ok     { background: var(--sage);  box-shadow: 0 0 6px rgba(123,158,135,0.6); }\r
          .ov-insight-text { font-size: 12px; color: rgba(255,255,255,0.72); line-height: 1.55; }\r
          .ov-insight-text strong { color: #fff; font-weight: 700; }\r
\r
          /* ── HORIZONTAL TRAIT SCROLLER ── */\r
          .ov-scroller-card {\r
            grid-column: 1 / -1;\r
            background: var(--white); border: 1px solid var(--sand);\r
            border-radius: 16px; padding: 20px;\r
          }\r
          .ov-scroll-rail {\r
            display: flex; gap: 10px;\r
            overflow-x: auto; padding-bottom: 6px;\r
            scrollbar-width: thin; scrollbar-color: var(--sand) transparent;\r
          }\r
          .ov-scroll-rail::-webkit-scrollbar { height: 4px; }\r
          .ov-scroll-rail::-webkit-scrollbar-thumb { background: var(--sand); border-radius: 100px; }\r
          .ov-trait-pill {\r
            flex-shrink: 0;\r
            display: flex; flex-direction: column; gap: 4px;\r
            padding: 10px 14px; border-radius: 12px;\r
            border: 1px solid transparent;\r
            cursor: pointer; transition: all 0.18s;\r
            min-width: 130px;\r
          }\r
          .ov-trait-pill:hover { transform: translateY(-2px); box-shadow: var(--shadow-sm); }\r
          .ov-trait-pill.tp-vh { background: var(--risk-very-high-bg); border-color: rgba(193,99,74,0.28); }\r
          .ov-trait-pill.tp-h  { background: var(--risk-high-bg);      border-color: rgba(212,168,83,0.28); }\r
          .ov-trait-pill.tp-m  { background: var(--risk-medium-bg);    border-color: rgba(107,174,214,0.25); }\r
          .ov-trait-pill.tp-l  { background: var(--risk-low-bg);       border-color: rgba(123,158,135,0.28); }\r
          .ov-tp-top { display: flex; align-items: center; justify-content: space-between; gap: 6px; }\r
          .ov-tp-name { font-size: 11.5px; font-weight: 700; color: var(--forest); line-height: 1.3; flex: 1; }\r
          .ov-tp-badge {\r
            font-size: 9px; font-weight: 800; text-transform: uppercase; padding: 2px 6px;\r
            border-radius: 100px; flex-shrink: 0;\r
          }\r
          .ov-trait-pill.tp-vh .ov-tp-badge { background: rgba(193,99,74,0.15); color: var(--terra); }\r
          .ov-trait-pill.tp-h  .ov-tp-badge { background: rgba(212,168,83,0.15); color: #8B6914; }\r
          .ov-trait-pill.tp-m  .ov-tp-badge { background: rgba(107,174,214,0.15); color: #2878A8; }\r
          .ov-trait-pill.tp-l  .ov-tp-badge { background: rgba(123,158,135,0.15); color: var(--sage-d); }\r
          .ov-tp-prs { font-family: 'JetBrains Mono', monospace; font-size: 10px; color: var(--muted-l); }\r
          .ov-tp-bar { height: 3px; background: var(--cream2); border-radius: 100px; overflow: hidden; margin-top: 2px; }\r
          .ov-tp-bar-fill { height: 100%; border-radius: 100px; }\r
          .ov-trait-pill.tp-vh .ov-tp-bar-fill { background: var(--terra); }\r
          .ov-trait-pill.tp-h  .ov-tp-bar-fill { background: var(--gold); }\r
          .ov-trait-pill.tp-m  .ov-tp-bar-fill { background: var(--sky); }\r
          .ov-trait-pill.tp-l  .ov-tp-bar-fill { background: var(--sage); }\r
\r
          /* ── ROUTINE + DAILY SCORE ROW ── */\r
          .ov-bottom-row {\r
            grid-column: 1 / -1;\r
            display: grid;\r
            grid-template-columns: 1fr 1fr;\r
            gap: 16px;\r
          }\r
\r
          /* Routine card */\r
          .ov-routine-card {\r
            background: var(--white); border: 1px solid var(--sand);\r
            border-radius: 16px; padding: 20px;\r
          }\r
          .ov-routine-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 12px; }\r
          .ov-rcard {\r
            border-radius: 12px; padding: 12px;\r
            display: flex; flex-direction: column; gap: 7px;\r
          }\r
          .ov-rcard.morning { background: linear-gradient(145deg,#fef9ed,#fdf3d0); border: 1px solid #f0dfa0; }\r
          .ov-rcard.evening { background: linear-gradient(145deg,#1a2a4a,#0f1d38); border: 1px solid #243555; }\r
          .ov-rcard-head { display: flex; align-items: center; gap: 6px; padding-bottom: 6px; border-bottom: 1px solid rgba(0,0,0,0.05); }\r
          .ov-rcard.evening .ov-rcard-head { border-bottom-color: rgba(255,255,255,0.07); }\r
          .ov-rcard-title { font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.07em; }\r
          .ov-rcard.morning .ov-rcard-title { color: #7a5a10; }\r
          .ov-rcard.evening .ov-rcard-title { color: #7eb8e8; }\r
          .ov-rlist { list-style: none; display: flex; flex-direction: column; gap: 4px; }\r
          .ov-ritem {\r
            display: flex; align-items: flex-start; gap: 7px;\r
            padding: 5px 6px; border-radius: 8px; cursor: pointer;\r
            transition: background 0.15s;\r
          }\r
          .ov-ritem:hover { background: rgba(255,255,255,0.15); }\r
          .ov-rcheck {\r
            width: 13px; height: 12px; border-radius: 50%;\r
            border: 1.5px solid rgba(0,0,0,0.2); background: transparent;\r
            margin-top: 2px; flex-shrink: 0; position: relative;\r
          }\r
          .ov-rcard.evening .ov-rcheck { border-color: rgba(255,255,255,0.25); }\r
          .ov-ritem.done .ov-rcheck { border-color: var(--gold); background: rgba(212,168,83,0.2); }\r
          .ov-ritem.done .ov-rcheck::after { content:''; position:absolute; left:3px; top:0px; width:5px; height:8px; border:solid var(--gold); border-width:0 2px 2px 0; transform:rotate(45deg); }\r
          .ov-rtext { font-size: 11px; line-height: 1.4; }\r
          .ov-rcard.morning .ov-rtext { color: #5a4010; }\r
          .ov-rcard.evening .ov-rtext { color: rgba(197,218,240,0.85); }\r
          .ov-ritem.done .ov-rtext { text-decoration: line-through; opacity: 0.55; }\r
          .ov-prog-bar { height: 4px; background: var(--cream2); border-radius: 100px; overflow: hidden; margin-bottom: 4px; }\r
          .ov-prog-fill { height: 100%; border-radius: 100px; background: linear-gradient(90deg, var(--gold), var(--gold-l)); transition: width 0.3s ease; }\r
          .ov-prog-label { font-size: 10px; color: var(--muted-l); font-family: 'JetBrains Mono', monospace; }\r
\r
          /* Snapshot card */\r
          .ov-snapshot-card {\r
            background: var(--white); border: 1px solid var(--sand);\r
            border-radius: 16px; padding: 20px;\r
            display: flex; flex-direction: column; gap: 12px;\r
          }\r
          .ov-snap-row {\r
            display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;\r
          }\r
          .ov-snap-tile {\r
            background: var(--cream); border: 1px solid var(--cream2);\r
            border-radius: 12px; padding: 12px 10px;\r
            text-align: center;\r
            transition: all 0.18s; cursor: pointer;\r
          }\r
          .ov-snap-tile:hover { background: var(--white); box-shadow: var(--shadow-sm); border-color: var(--sage-l); }\r
          .ov-snap-num { font-size: 24px; font-weight: 800; color: var(--forest); line-height: 1; }\r
          .ov-snap-num.c-danger { color: var(--terra); }\r
          .ov-snap-num.c-warn   { color: var(--gold); }\r
          .ov-snap-num.c-ok     { color: var(--sage-d); }\r
          .ov-snap-lbl { font-size: 10px; color: var(--muted-l); font-weight: 600; margin-top: 3px; text-transform: uppercase; letter-spacing: 0.05em; }\r
          .ov-snap-divider { height: 1px; background: var(--cream2); }\r
          .ov-snap-recs {\r
            display: flex; flex-direction: column; gap: 6px;\r
          }\r
          .ov-snap-rec {\r
            display: flex; align-items: center; gap: 8px;\r
            padding: 8px 10px; border-radius: 10px;\r
            background: var(--cream); font-size: 12px; color: var(--muted);\r
            line-height: 1.4; cursor: pointer; transition: all 0.15s;\r
          }\r
          .ov-snap-rec:hover { background: var(--white); color: var(--forest); }\r
          .ov-snap-rec-dot { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; }\r
          .ov-snap-rec-arrow { margin-left: auto; color: var(--muted-l); font-size: 14px; flex-shrink: 0; }\r
\r
          /* ── RESPONSIVE ── */\r
          @media (max-width: 900px) {\r
            .ov-cat-rail { grid-template-columns: repeat(3, 1fr); }\r
            .ov-cat-rail .ov-cat-tile:nth-child(4),\r
            .ov-cat-rail .ov-cat-tile:nth-child(5) { display: none; }\r
            .ov-grid { grid-template-columns: 1fr 1fr; }\r
            .ov-bubble-card { grid-column: span 2; }\r
            .ov-insight-card { grid-column: span 2; }\r
            .ov-bottom-row { grid-template-columns: 1fr; }\r
          }\r
          @media (max-width: 640px) {\r
            .ov-hero { grid-template-columns: 1fr; }\r
            .ov-arc-wrap { display: none; }\r
            .ov-cat-rail { grid-template-columns: 1fr 1fr; }\r
            .ov-cat-rail .ov-cat-tile:nth-child(n) { display: block; }\r
            .ov-grid { grid-template-columns: 1fr; }\r
            .ov-bubble-card, .ov-insight-card { grid-column: span 1; }\r
            .ov-routine-grid { grid-template-columns: 1fr; }\r
            .ov-snap-row { grid-template-columns: repeat(3,1fr); }\r
          }
/* ============================================================
   NUTRITION OVERVIEW STRUCTURE BRIDGE
============================================================ */
.nutrition-shell {
  padding: 0;
  background: transparent;
  border: none;
  box-shadow: none;
  overflow: visible;
}
.nutrition-shell:hover {
  transform: none;
  box-shadow: none !important;
  border-color: transparent !important;
}
.nutrition-rail-card,
.nutrition-wide-card {
  grid-column: span 12;
}
.nutrition-shell > .ov-hero,
.nutrition-shell > .ov-cat-rail,
.nutrition-shell > .ov-bubble-card,
.nutrition-shell > .ov-insight-card,
.nutrition-shell > .ov-scroller-card,
.nutrition-shell > .ov-routine-card,
.nutrition-shell > .ov-snapshot-card {
  width: 100%;
}

@media (max-width: 640px) {
  .nutrition-rail-card,
  .nutrition-wide-card {
    grid-column: span 1 !important;
  }
}\r
\r

/* ============================================================
   NUTRITION DASHBOARD VISUAL ALIGNMENT
============================================================ */
.ov-hero {
  background: linear-gradient(155deg, #ffffff 0%, #fcfaf7 58%, #f5effb 100%);
  border: 1px solid #e6ddcf;
  box-shadow: 0 10px 28px rgba(26,26,26,0.06), inset 0 1px 0 rgba(255,255,255,0.85);
}
.ov-hero::before {
  background:
    radial-gradient(circle at 78% 24%, rgba(255,176,103,0.16) 0%, rgba(255,176,103,0) 32%),
    radial-gradient(circle at 16% 86%, rgba(106,69,165,0.10) 0%, rgba(106,69,165,0) 34%);
}
.ov-hero::after {
  right: 280px;
  background: linear-gradient(180deg, rgba(217,206,189,0), rgba(217,206,189,0.95), rgba(217,206,189,0));
}
.ov-hero-tag {
  color: var(--muted-l);
  background: rgba(255,255,255,0.78);
  border: 1px solid rgba(217,206,189,0.75);
  padding: 6px 12px;
  border-radius: 999px;
}
.ov-hero-tag::before { background: rgba(255,176,103,0.6); }
.ov-hero-name { color: var(--forest); }
.ov-hero-name em { color: var(--risk-very-low); }
.ov-hero-sub { color: var(--muted); }
.ov-hero-stats {
  background: rgba(255,255,255,0.74);
  border-color: rgba(217,206,189,0.72);
  box-shadow: 0 8px 18px rgba(26,26,26,0.04);
}
.ov-stat { border-right-color: rgba(217,206,189,0.82); }
.ov-stat-val { color: var(--forest); }
.ov-stat-val.danger { color: var(--risk-very-high); }
.ov-stat-val.warn   { color: #b86319; }
.ov-stat-val.ok     { color: var(--risk-very-low); }
.ov-stat-lbl { color: var(--muted-l); }
.ov-arc-track { stroke: rgba(185,185,187,0.3); }
.ov-arc-val { fill: var(--forest); }
.ov-arc-label { fill: var(--muted-l); }
.ov-arc-badge {
  background: rgba(255,176,103,0.22);
  color: #b86319;
  border: 1px solid rgba(255,176,103,0.32);
}

.ov-alert {
  background: linear-gradient(135deg, rgba(242,90,0,0.08), rgba(255,176,103,0.09));
  border: 1px solid rgba(242,90,0,0.18);
  box-shadow: 0 10px 24px rgba(242,90,0,0.08);
}
.ov-alert-title { color: var(--risk-very-high); }
.ov-alert-btn {
  background: var(--risk-very-high);
  box-shadow: 0 10px 18px rgba(242,90,0,0.16);
}
.ov-alert-btn:hover { background: #d24d00; }

.ov-cat-tile {
  box-shadow: var(--shadow-sm);
}
.ov-ct-badge.b-danger { background: rgba(242,90,0,0.12); color: var(--risk-very-high); }
.ov-ct-badge.b-warn   { background: rgba(255,176,103,0.22); color: #b86319; }
.ov-ct-badge.b-ok     { background: rgba(185,185,187,0.18); color: #66666a; }
.ov-cat-tile.c-lipids::before   { background: var(--risk-very-high); }
.ov-cat-tile.c-metabolic::before{ background: var(--risk-high); }
.ov-cat-tile.c-vitamins::before { background: var(--risk-medium); }
.ov-cat-tile.c-cardio::before   { background: var(--risk-low); }
.ov-cat-tile.c-protein::before  { background: var(--risk-very-low); }

.ov-bubble.b-vh { background: rgba(242,90,0,0.12); border-color: rgba(242,90,0,0.28); color: var(--risk-very-high); }
.ov-bubble.b-h  { background: rgba(255,176,103,0.18); border-color: rgba(255,176,103,0.3); color: #b86319; }
.ov-bubble.b-m  { background: rgba(185,185,187,0.18); border-color: rgba(185,185,187,0.3); color: #66666a; }
.ov-bubble.b-l  { background: rgba(180,172,217,0.18); border-color: rgba(180,172,217,0.3); color: #7267a9; }

.ov-insight-card {
  background: linear-gradient(160deg, #fff 0%, #fbf8f4 100%);
  border: 1px solid var(--sand);
  box-shadow: var(--shadow-sm);
}
.ov-insight-title { color: var(--muted-l); }
.ov-insight-item {
  background: rgba(255,255,255,0.7);
  border: 1px solid rgba(217,206,189,0.58);
}
.ov-insight-text { color: var(--muted); }
.ov-insight-text strong { color: var(--forest); }
.ov-insight-dot.d-danger { background: var(--risk-very-high); box-shadow: 0 0 6px rgba(242,90,0,0.35); }
.ov-insight-dot.d-warn   { background: var(--risk-high); box-shadow: 0 0 6px rgba(255,176,103,0.35); }
.ov-insight-dot.d-ok     { background: var(--risk-very-low); box-shadow: 0 0 6px rgba(106,69,165,0.28); }

.ov-trait-pill.tp-vh { border-color: rgba(242,90,0,0.28); }
.ov-trait-pill.tp-h  { border-color: rgba(255,176,103,0.28); }
.ov-trait-pill.tp-m  { border-color: rgba(185,185,187,0.28); }
.ov-trait-pill.tp-l  { border-color: rgba(180,172,217,0.28); }
.ov-trait-pill.tp-vh .ov-tp-badge { background: rgba(242,90,0,0.12); color: var(--risk-very-high); }
.ov-trait-pill.tp-h  .ov-tp-badge { background: rgba(255,176,103,0.22); color: #b86319; }
.ov-trait-pill.tp-m  .ov-tp-badge { background: rgba(185,185,187,0.18); color: #66666a; }
.ov-trait-pill.tp-l  .ov-tp-badge { background: rgba(180,172,217,0.18); color: #7267a9; }
.ov-trait-pill.tp-vh .ov-tp-bar-fill { background: var(--risk-very-high); }
.ov-trait-pill.tp-h  .ov-tp-bar-fill { background: var(--risk-high); }
.ov-trait-pill.tp-m  .ov-tp-bar-fill { background: var(--risk-medium); }
.ov-trait-pill.tp-l  .ov-tp-bar-fill { background: var(--risk-low); }

.ov-routine-card,
.ov-snapshot-card,
.ov-bubble-card,
.ov-scroller-card {
  box-shadow: var(--shadow-sm);
}
.ov-rcard.morning {
  background: linear-gradient(145deg, #fff7eb 0%, #fff1de 100%);
  border: 1px solid #f2dbc1;
}
.ov-rcard.evening {
  background: linear-gradient(145deg, #f4effb 0%, #ebe3f8 100%);
  border: 1px solid #d7c8ef;
}
.ov-rcard.morning .ov-rcard-title { color: #b86319; }
.ov-rcard.evening .ov-rcard-title { color: #6f59a9; }
.ov-rcard.evening .ov-rtext { color: var(--muted); }
.ov-rcheck { border-color: rgba(26,26,26,0.18); }
.ov-rcard.evening .ov-rcheck { border-color: rgba(106,69,165,0.25); }
.ov-ritem.done .ov-rcheck { border-color: var(--risk-high); background: rgba(255,176,103,0.18); }
.ov-ritem.done .ov-rcheck::after { border-color: var(--risk-high); }
.ov-prog-fill { background: linear-gradient(90deg, var(--risk-very-low), var(--risk-high)); }

.trait-card[data-risk="very-high"] { border-color: rgba(242,90,0,0.28); box-shadow: 0 0 0 1.5px rgba(242,90,0,0.28); }
.trait-card[data-risk="high"]      { border-color: rgba(255,176,103,0.34); }
.trait-card[data-risk="medium"]    { border-color: rgba(185,185,187,0.36); }
.trait-card[data-risk="low"]       { border-color: rgba(180,172,217,0.34); }
.trait-card[data-risk="very-low"]  { border-color: rgba(106,69,165,0.3); }
.risk-badge.risk-very-high { background: rgba(242,90,0,0.12); color: var(--risk-very-high); }
.risk-badge.risk-high      { background: rgba(255,176,103,0.22); color: #b86319; }
.risk-badge.risk-medium    { background: rgba(185,185,187,0.2); color: #66666a; }
.risk-badge.risk-low       { background: rgba(180,172,217,0.2); color: #7267a9; }
.risk-badge.risk-very-low  { background: rgba(106,69,165,0.12); color: var(--risk-very-low); }
.modal-risk-banner.risk-very-high { background: rgba(242,90,0,0.1); border: 1px solid rgba(242,90,0,0.2); }
.modal-risk-banner.risk-high      { background: rgba(255,176,103,0.16); border: 1px solid rgba(255,176,103,0.26); }
.modal-risk-banner.risk-medium    { background: rgba(185,185,187,0.14); border: 1px solid rgba(185,185,187,0.24); }
.modal-risk-banner.risk-low       { background: rgba(180,172,217,0.14); border: 1px solid rgba(180,172,217,0.24); }
.modal-risk-banner.risk-very-low  { background: rgba(106,69,165,0.1); border: 1px solid rgba(106,69,165,0.2); }\r
`,eh=`/* Arc animation */\r
          (function() {\r
            const fill = document.getElementById('ovArcFill');\r
            if (!fill) return;\r
            const total = 220, score = 78, offset = total - (score / 100) * total;\r
            setTimeout(() => { fill.style.strokeDashoffset = offset; }, 200);\r
          })();\r
\r
          /* Bubble map */\r
          (function() {\r
            const canvas = document.getElementById('ovBubbleCanvas');\r
            if (!canvas) return;\r
            const bubbles = [\r
              { name:'Diacylglycerol', prs:'2.41', cls:'b-vh', size:68, x:3,  y:5  },\r
              { name:'Phosphatidylcholine', prs:'2.38', cls:'b-vh', size:65, x:16, y:38 },\r
              { name:'Intestinal Microbiota', prs:'2.53', cls:'b-vh', size:70, x:30, y:8  },\r
              { name:'% MUFA', prs:'2.01', cls:'b-h',  size:56, x:47, y:35 },\r
              { name:'Linoleic Acid', prs:'1.94', cls:'b-h',  size:54, x:44, y:2  },\r
              { name:'Large LP PL', prs:'1.88', cls:'b-h',  size:52, x:60, y:10 },\r
              { name:'DHA %', prs:'1.87', cls:'b-h',  size:52, x:72, y:36 },\r
              { name:'VLDL Phospholipids', prs:'1.84', cls:'b-h',  size:50, x:62, y:52 },\r
              { name:'CoQ10', prs:'1.76', cls:'b-h',  size:48, x:82, y:8  },\r
              { name:'Carnitine', prs:'1.73', cls:'b-h',  size:46, x:85, y:46 },\r
              { name:'Blautia', prs:'1.48', cls:'b-m',  size:40, x:28, y:52 },\r
              { name:'Manganese', prs:'1.39', cls:'b-m',  size:36, x:8,  y:58 },\r
              { name:'Citrulline', prs:'0.89', cls:'b-l',  size:32, x:48, y:62 },\r
            ];\r
            bubbles.forEach(b => {\r
              const el = document.createElement('div');\r
              el.className = \`ov-bubble \${b.cls}\`;\r
              el.style.cssText = \`width:\${b.size}px;height:\${b.size}px;left:\${b.x}%;top:\${b.y}%;\`;\r
              el.innerHTML = \`<span class="ov-bubble-name">\${b.name}</span><span class="ov-bubble-prs">\${b.prs}</span>\`;\r
              canvas.appendChild(el);\r
            });\r
          })();\r
\r
          /* Routine */\r
          (function() {\r
            const morning = [\r
              'Omega-3 (2g EPA+DHA) with breakfast',\r
              '2+ high-fiber foods for gut diversity',\r
              'Vitamin D (2000–4000 IU) supplement',\r
              'Log fat intake — target ω6:ω3 < 4:1',\r
            ];\r
            const evening = [\r
              'Probiotic food (yogurt / kimchi)',\r
              'Review saturated fat — keep < 7% kcal',\r
              'CoQ10 if on statins (100–200mg)',\r
              'Magnesium glycinate (200mg)',\r
            ];\r
            const mList = document.getElementById('ov-morning-list');\r
            const eList = document.getElementById('ov-evening-list');\r
            const progFill = document.getElementById('ov-prog-fill');\r
            const progLabel = document.getElementById('ov-prog-label');\r
            if (!mList || !eList) return;\r
\r
            const key = 'ov_routine:' + new Date().toISOString().slice(0,10);\r
            let state = { m: morning.map(()=>false), e: evening.map(()=>false) };\r
            try { const s = JSON.parse(localStorage.getItem(key)||'{}'); if(s.m) state.m=s.m; if(s.e) state.e=s.e; } catch(_){}\r
\r
            function save(){ try{ localStorage.setItem(key,JSON.stringify(state)); }catch(_){} }\r
            function progress(){\r
              const done = state.m.filter(Boolean).length + state.e.filter(Boolean).length;\r
              const total = morning.length + evening.length;\r
              progFill.style.width = Math.round(done/total*100)+'%';\r
              progLabel.textContent = done+'/'+total+' today';\r
            }\r
            function render(el, arr, period) {\r
              el.innerHTML = arr.map((t,i) => \`\r
                <li><div class="ov-ritem\${state[period][i]?' done':''}" data-p="\${period}" data-i="\${i}">\r
                  <div class="ov-rcheck"></div>\r
                  <span class="ov-rtext">\${t}</span>\r
                </div></li>\`).join('');\r
            }\r
            function attach(el){\r
              el.querySelectorAll('.ov-ritem').forEach(row=>{\r
                row.addEventListener('click',()=>{\r
                  const p=row.dataset.p, i=Number(row.dataset.i);\r
                  state[p][i]=!state[p][i];\r
                  row.classList.toggle('done',state[p][i]);\r
                  save(); progress();\r
                });\r
              });\r
            }\r
            render(mList, morning, 'm');\r
            render(eList, evening, 'e');\r
            attach(mList); attach(eList);\r
            progress();\r
          })();\r
\r
// ============================================================\r
// MOBILE SIDEBAR\r
// ============================================================\r
function toggleSidebar() {\r
  const sidebar = document.getElementById('sidebar');\r
  const overlay = document.getElementById('sidebar-overlay');\r
  const btn = document.getElementById('hamburger-btn');\r
  const isOpen = sidebar.classList.contains('mobile-open');\r
  if (isOpen) { closeSidebar(); } else {\r
    sidebar.classList.add('mobile-open');\r
    overlay.classList.add('active');\r
    btn.classList.add('open');\r
    document.body.style.overflow = 'hidden';\r
  }\r
}\r
function closeSidebar() {\r
  const sidebar = document.getElementById('sidebar');\r
  const overlay = document.getElementById('sidebar-overlay');\r
  const btn = document.getElementById('hamburger-btn');\r
  sidebar.classList.remove('mobile-open');\r
  overlay.classList.remove('active');\r
  if (btn) btn.classList.remove('open');\r
  document.body.style.overflow = '';\r
}\r
\r
// ============================================================\r
// NAVIGATION\r
// ============================================================\r
const viewMeta = {\r
  overview:        { title: 'Overview',                 subtitle: 'Genetic Nutrition Health Summary' },\r
  lipids:          { title: 'Fatty Acid Profile',       subtitle: '8 traits analyzed' },\r
  metabolic:       { title: 'Metabolic Efficiency',     subtitle: '7 traits analyzed' },\r
  vitamins:        { title: 'Vitamins & Micronutrients',subtitle: '7 traits analyzed' },\r
  cardio:          { title: 'Cardiovascular Markers',   subtitle: '7 traits analyzed' },\r
  protein:         { title: 'Protein Building Blocks',  subtitle: '7 traits analyzed' },\r
  recommendations: { title: 'Recommendations',          subtitle: 'Personalized nutrition action plan' },\r
};\r
\r
function showDashboard() {\r
  document.getElementById('landing-page').classList.remove('active');\r
  document.getElementById('dashboard-page').classList.add('active');\r
  window.scrollTo(0, 0);\r
  setTimeout(initRingChart, 150);\r
}\r
\r
function showView(viewId) {\r
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));\r
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));\r
  document.getElementById('view-' + viewId)?.classList.add('active');\r
  document.querySelector(\`.nav-item[data-view="\${viewId}"]\`)?.classList.add('active');\r
  const meta = viewMeta[viewId] || {};\r
  document.getElementById('page-title').textContent = meta.title || '';\r
  document.getElementById('page-subtitle').textContent = meta.subtitle || '';\r
  document.getElementById('risk-filter').value = 'all';\r
  const filterGroup = document.querySelector('.filter-group');\r
  if (filterGroup) filterGroup.style.display = viewId === 'overview' ? 'none' : 'flex';\r
  const mc = document.querySelector('.main-content');\r
  if (mc) mc.scrollTo({ top: 0, behavior: 'smooth' });\r
  if (window.innerWidth <= 1024) closeSidebar();\r
}\r
\r
function filterTraits(query) {\r
  const q = query.toLowerCase().trim();\r
  document.querySelectorAll('.trait-card').forEach(card => {\r
    const name = card.querySelector('.trait-name')?.textContent.toLowerCase() || '';\r
    const desc = card.querySelector('.trait-desc')?.textContent.toLowerCase() || '';\r
    card.style.display = (name.includes(q) || desc.includes(q)) ? '' : 'none';\r
  });\r
}\r
\r
function filterByRisk(level) {\r
  document.querySelectorAll('.trait-card').forEach(card => {\r
    card.style.display = (level === 'all' || card.dataset.risk === level) ? '' : 'none';\r
  });\r
}\r
\r
// ============================================================\r
// DIST2 ACCORDION\r
// ============================================================\r
function toggleDist2(row) {\r
  const traits = row.querySelector('.dist2-traits');\r
  const isOpen = row.classList.contains('dist2-open');\r
  document.querySelectorAll('.dist2-row').forEach(r => {\r
    r.classList.remove('dist2-open');\r
    r.querySelector('.dist2-traits').style.display = 'none';\r
  });\r
  if (!isOpen) { row.classList.add('dist2-open'); traits.style.display = 'flex'; }\r
}\r
\r
// ============================================================\r
// RC ACCORDION\r
// ============================================================\r
const rcItems = [];\r
let rcAutoTimer = null;\r
\r
function initRcItems() {\r
  const items = Array.from(document.querySelectorAll('.rc-item'));\r
  items.forEach(item => {\r
    const body = item.querySelector('.rc-expand-body');\r
    if (body) { body.style.overflow = 'hidden'; body.style.transition = 'max-height 0.38s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease'; body.style.maxHeight = '0'; body.style.opacity = '0'; }\r
    item.classList.remove('rc-expanded');\r
    const chevron = item.querySelector('.rc-chevron');\r
    if (chevron) chevron.style.transform = '';\r
    rcItems.push(item);\r
  });\r
}\r
\r
function rcOpen(item) {\r
  item.classList.add('rc-expanded');\r
  const body = item.querySelector('.rc-expand-body');\r
  const chevron = item.querySelector('.rc-chevron');\r
  if (body) { requestAnimationFrame(() => { body.style.maxHeight = body.scrollHeight + 'px'; body.style.opacity = '1'; }); }\r
  if (chevron) chevron.style.transform = 'rotate(180deg)';\r
}\r
function rcClose(item) {\r
  item.classList.remove('rc-expanded');\r
  const body = item.querySelector('.rc-expand-body');\r
  const chevron = item.querySelector('.rc-chevron');\r
  if (body) { body.style.maxHeight = '0'; body.style.opacity = '0'; }\r
  if (chevron) chevron.style.transform = '';\r
}\r
\r
let rcIndex = 0;\r
function rcAutoAdvance() {\r
  rcItems.forEach(el => rcClose(el));\r
  rcIndex = (rcIndex + 1) % rcItems.length;\r
  rcOpen(rcItems[rcIndex]);\r
}\r
\r
function toggleRcItem(item) {\r
  const isOpen = item.classList.contains('rc-expanded');\r
  rcItems.forEach(el => rcClose(el));\r
  if (!isOpen) {\r
    rcOpen(item);\r
    rcIndex = rcItems.indexOf(item);\r
    clearInterval(rcAutoTimer);\r
    rcAutoTimer = setInterval(rcAutoAdvance, 3000);\r
  } else {\r
    clearInterval(rcAutoTimer);\r
    rcAutoTimer = null;\r
  }\r
}\r
\r
// ============================================================\r
// RING CHART\r
// ============================================================\r
let ringInited = false;\r
function initRingChart() {\r
  if (ringInited) return;\r
  ringInited = true;\r
\r
  const ringData = [\r
    { label: 'Fatty Acids',    value: 8,  color: '#D4A853' },\r
    { label: 'Cardiovascular', value: 7,  color: '#C1634A' },\r
    { label: 'Metabolic',      value: 7,  color: '#7B9E87' },\r
    { label: 'Vitamins',       value: 7,  color: '#8B5E83' },\r
    { label: 'Protein',        value: 7,  color: '#6BAED6' },\r
  ];\r
  const total = ringData.reduce((s, d) => s + d.value, 0);\r
  const cx = 100, cy = 100, r = 78, strokeW = 16;\r
  const circ = 2 * Math.PI * r;\r
  const gap = 4;\r
  const segG = document.getElementById('ringSegments');\r
  const centreVal = document.getElementById('ringCentreVal');\r
  const centreLbl = document.getElementById('ringCentreLbl');\r
  if (!segG) return;\r
\r
  let offset = 0;\r
  const paths = [];\r
\r
  ringData.forEach((d, i) => {\r
    const frac = d.value / total;\r
    const segLen = frac * circ - gap;\r
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');\r
    circle.setAttribute('cx', cx); circle.setAttribute('cy', cy); circle.setAttribute('r', r);\r
    circle.setAttribute('fill', 'none'); circle.setAttribute('stroke', d.color);\r
    circle.setAttribute('stroke-width', strokeW); circle.setAttribute('stroke-linecap', 'round');\r
    circle.setAttribute('stroke-dasharray', \`0 \${circ}\`);\r
    circle.setAttribute('stroke-dashoffset', -offset);\r
    circle.setAttribute('transform', \`rotate(-90 \${cx} \${cy})\`);\r
    circle.style.cursor = 'pointer';\r
    circle.style.transition = 'stroke-dasharray 0.7s cubic-bezier(0.4,0,0.2,1), stroke-width 0.2s, opacity 0.2s';\r
    setTimeout(() => { circle.style.strokeDasharray = \`\${segLen} \${circ - segLen}\`; }, 80 + i * 120);\r
\r
    circle.addEventListener('mouseenter', () => {\r
      paths.forEach((p, j) => { p.style.opacity = j === i ? '1' : '0.3'; p.setAttribute('stroke-width', j === i ? strokeW + 5 : strokeW - 2); });\r
      centreVal.textContent = d.value; centreVal.setAttribute('fill', d.color);\r
      centreLbl.textContent = d.label.toLowerCase();\r
      document.querySelectorAll('.rl-item').forEach((el, j) => el.classList.toggle('rl-item--active', j === i));\r
    });\r
    circle.addEventListener('mouseleave', () => {\r
      paths.forEach(p => { p.style.opacity = '1'; p.setAttribute('stroke-width', strokeW); });\r
      centreVal.textContent = total; centreVal.setAttribute('fill', '#1E3A2F');\r
      centreLbl.textContent = 'traits';\r
      document.querySelectorAll('.rl-item').forEach(el => el.classList.remove('rl-item--active'));\r
    });\r
\r
    segG.appendChild(circle);\r
    paths.push(circle);\r
    offset += frac * circ;\r
  });\r
\r
  document.querySelectorAll('.rl-item').forEach((el, i) => {\r
    if (paths[i]) {\r
      el.addEventListener('mouseenter', () => paths[i].dispatchEvent(new MouseEvent('mouseenter')));\r
      el.addEventListener('mouseleave', () => paths[i].dispatchEvent(new MouseEvent('mouseleave')));\r
    }\r
  });\r
}\r
\r
// ============================================================\r
// ROUTINE BUILDER\r
// ============================================================\r
function renderRoutineBuilder() {\r
  const morningItems = [\r
    'Take omega-3 (2g EPA+DHA) with breakfast to counter high phospholipid risk.',\r
    'Eat 2+ fiber-rich foods to nourish beneficial gut bacteria (Blautia support).',\r
    'Take vitamin D (2000–4000 IU) — your genetic binding protein profile warrants it.',\r
    'Log your breakfast macros to maintain omega-6:omega-3 ratio below 4:1.',\r
  ];\r
  const eveningItems = [\r
    'Take CoQ10 (100–200mg) if on statins — your high genetic CoQ10 warrants monitoring.',\r
    'Eat a probiotic food (yogurt, kefir, or kimchi) to support microbiome diversity.',\r
    'Review today\\'s saturated fat intake — target below 7% of total daily calories.',\r
    'Take magnesium glycinate (200–400mg) to support insulin sensitivity overnight.',\r
  ];\r
\r
  const morningList = document.getElementById('routine-morning-list');\r
  const nightList = document.getElementById('routine-night-list');\r
  const progressMeta = document.getElementById('routine-progress-meta');\r
  const progressFill = document.getElementById('routine-progress-fill');\r
  if (!morningList || !nightList) return;\r
\r
  const state = { morning: morningItems.map(() => false), evening: eveningItems.map(() => false) };\r
  const storageKey = \`routine_nutrition:\${new Date().toISOString().slice(0,10)}\`;\r
  try {\r
    const saved = JSON.parse(localStorage.getItem(storageKey) || '{}');\r
    if (Array.isArray(saved.morning) && saved.morning.length === morningItems.length) state.morning = saved.morning;\r
    if (Array.isArray(saved.evening) && saved.evening.length === eveningItems.length) state.evening = saved.evening;\r
  } catch(_) {}\r
\r
  function saveState() { try { localStorage.setItem(storageKey, JSON.stringify(state)); } catch(_) {} }\r
  function updateProgress() {\r
    const total = state.morning.length + state.evening.length;\r
    const done = state.morning.filter(Boolean).length + state.evening.filter(Boolean).length;\r
    progressMeta.textContent = \`\${done}/\${total} completed today\`;\r
    progressFill.style.width = \`\${Math.round((done/total)*100)}%\`;\r
  }\r
\r
  function renderList(el, period, items) {\r
    el.innerHTML = items.map((text, idx) => \`\r
      <li><button type="button" class="routine-item-btn \${state[period][idx] ? 'checked' : ''}" data-period="\${period}" data-index="\${idx}">\r
        <span class="routine-check"></span>\r
        <span class="routine-item-text">\${text}</span>\r
      </button></li>\`).join('');\r
  }\r
\r
  renderList(morningList, 'morning', morningItems);\r
  renderList(nightList, 'evening', eveningItems);\r
  updateProgress();\r
\r
  document.getElementById('routine-builder-card').querySelectorAll('.routine-item-btn').forEach(btn => {\r
    btn.addEventListener('click', () => {\r
      const period = btn.dataset.period;\r
      const idx = Number(btn.dataset.index);\r
      state[period][idx] = !state[period][idx];\r
      btn.classList.toggle('checked', state[period][idx]);\r
      saveState(); updateProgress();\r
    });\r
  });\r
  document.getElementById('routine-footer-note').textContent = 'High-risk fatty acid & microbiome profile — supplement consistency is key.';\r
}\r
\r
// ============================================================\r
// MODAL\r
// ============================================================\r
function closeModal(e) {\r
  if (!e || e.target === document.getElementById('trait-modal')) {\r
    document.getElementById('trait-modal').classList.remove('open');\r
  }\r
}\r
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });\r
\r
// Make trait cards open modal with their content\r
function initTraitCards() {\r
  document.querySelectorAll('.trait-card').forEach(card => {\r
    card.addEventListener('click', () => {\r
      const name = card.querySelector('.trait-name')?.textContent || '';\r
      const desc = card.querySelector('.trait-desc')?.textContent || '';\r
      const risk = card.dataset.risk || 'medium';\r
      const prs = card.querySelector('.trait-prs')?.textContent?.replace('PRS: ', '') || '';\r
      const percentile = card.querySelector('.trait-pop')?.textContent || '';\r
      const category = card.dataset.category || '';\r
      const catLabels = { lipids: 'Fatty Acid Profile', metabolic: 'Metabolic Efficiency', vitamins: 'Vitamins & Micronutrients', cardio: 'Cardiovascular Markers', protein: 'Protein Building Blocks' };\r
      const riskLabels = { 'very-high': 'Very High', high: 'High', medium: 'Medium', low: 'Low', 'very-low': 'Very Low' };\r
\r
      document.getElementById('modal-content').innerHTML = \`\r
        <div class="modal-cat">\${catLabels[category] || category}</div>\r
        <h2 class="modal-h2">\${name}</h2>\r
        <div class="modal-risk-banner risk-\${risk}">\r
          <div class="modal-prs-big">\${prs}</div>\r
          <div class="modal-prs-meta">\r
            <span class="m-label">PRS Score</span>\r
            <span class="m-label" style="margin-top:8px">Population Percentile</span>\r
            <span class="m-val">\${percentile}</span>\r
          </div>\r
          <div style="margin-left:auto;">\r
            <span class="risk-badge risk-\${risk}" style="font-size:13px;padding:6px 14px;">\${riskLabels[risk] || ''}</span>\r
          </div>\r
        </div>\r
        <p class="modal-desc">\${desc}</p>\r
        <div class="modal-section-title">Recommended Actions</div>\r
        <div class="modal-recs">\r
          <div class="modal-rec-item"><div class="rec-dot"></div><span>Monitor this marker with regular blood panels and track dietary patterns that affect it.</span></div>\r
          <div class="modal-rec-item"><div class="rec-dot"></div><span>Consult a registered dietitian or nutritionist to tailor supplementation to your full genetic profile.</span></div>\r
          <div class="modal-rec-item"><div class="rec-dot"></div><span>Track your response to dietary and lifestyle interventions over 3-month intervals.</span></div>\r
        </div>\r
        <div class="modal-genes">Sample ID: P00026401WG · Report: NG-2024-0026 · Analyzed Feb 15, 2026</div>\r
      \`;\r
      document.getElementById('trait-modal').classList.add('open');\r
    });\r
  });\r
}\r
\r
// ============================================================\r
// INIT\r
// ============================================================\r
document.addEventListener('DOMContentLoaded', () => {\r
  initRcItems();\r
  initTraitCards();\r
  renderRoutineBuilder();\r
\r
  const filterGroup = document.querySelector('.filter-group');\r
  if (filterGroup) filterGroup.style.display = 'none';\r
\r
  if (document.getElementById('dashboard-page').classList.contains('active')) {\r
    setTimeout(initRingChart, 200);\r
  }\r
});`;function Cc(o){return o.replace(/(["'(])images\//g,"$1/images/").replace(/url\((["']?)images\//g,"url($1/images/")}function rh(){const o=y.useMemo(()=>{const l=Cc(Jg).replace(/<link[^>]*nutrition\.css[^>]*>\s*/i,"").replace(/<script[^>]*src=["']nutrition\.js["'][^>]*><\/script>\s*/i,""),d=Cc(Zg),p=eh.replace(/<\/script/gi,"<\\/script");return l.replace("</head>",`<style>${d}</style></head>`).replace("</body>",`<script>${p}<\/script></body>`)},[]);return a.jsx("iframe",{title:"Nutrition Dashboard",srcDoc:o,style:{width:"100%",minHeight:"100vh",height:"100vh",border:0,display:"block",background:"#F7F3EE"},sandbox:"allow-scripts allow-same-origin allow-forms allow-popups"})}const nh=`
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --cream: #F7F3EE;
  --cream2: #EFE9DF;
  --sand: #D9CEBD;
  --sand-l: #E8E0D3;
  --sage: #7B9E87;
  --sage-l: #A8C4B0;
  --sage-d: #4A7055;
  --forest: #1E3A2F;
  --terra: #C1634A;
  --terra-l: #E8907A;
  --gold: #D4A853;
  --sky: #6BAED6;
  --ink: #1A1A1A;
  --muted: #6B6357;
  --muted-l: #9E9589;
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
  --shadow-md: 0 4px 16px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04);
  --r-sm: 8px;
  --r-md: 14px;
  --r-lg: 20px;
}

html { scroll-behavior: smooth; }
body {
  font-family: 'Inter', system-ui, sans-serif;
  background: var(--cream);
  color: var(--ink);
  -webkit-font-smoothing: antialiased;
  min-height: 100vh;
  font-size: 14px;
  line-height: 1.55;
}

.profile-page { min-height: 100vh; background: var(--cream); color: var(--ink); }
.mono { font-family: 'JetBrains Mono', monospace; }
.mono-sm { font-family: 'JetBrains Mono', monospace; font-size: 11.5px; color: var(--muted-l); }

.hero-banner {
  height: 180px;
  background: var(--cream2) url("/images/profilebanner.png") center / cover no-repeat;
  position: relative;
  overflow: hidden;
}
.hero-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: right center;
  z-index: 0;
}
.hero-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(48px);
  pointer-events: none;
  opacity: 0.8;
}
.b1 {
  width: 360px;
  height: 260px;
  top: -120px;
  left: 6%;
  background: radial-gradient(circle, rgba(123,158,135,0.55) 0%, transparent 70%);
  animation: drift 11s ease-in-out infinite alternate;
}
.b2 {
  width: 280px;
  height: 220px;
  top: -100px;
  right: 10%;
  background: radial-gradient(circle, rgba(212,168,83,0.45) 0%, transparent 70%);
  animation: drift 14s ease-in-out infinite alternate-reverse;
}
.b3 {
  width: 220px;
  height: 200px;
  top: -80px;
  left: 48%;
  background: radial-gradient(circle, rgba(107,174,214,0.4) 0%, transparent 70%);
  animation: drift 9s ease-in-out infinite alternate;
}
@keyframes drift {
  from { transform: translateX(-18px) scale(1); }
  to { transform: translateX(18px) scale(1.07); }
}

.profile-wrap {
  max-width: 1020px;
  margin: 0 auto;
  padding: 0 36px 64px;
}
.identity-row {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: -52px;
  padding-bottom: 28px;
  border-bottom: 1px solid var(--sand);
}
.identity-left { display: flex; align-items: flex-end; gap: 20px; flex-wrap: wrap; }
.avatar-wrap { position: relative; flex-shrink: 0; }
.avatar-circle {
  width: 104px;
  height: 104px;
  border-radius: 50%;
  border: 4px solid var(--cream);
  overflow: hidden;
  background: linear-gradient(135deg, var(--sage-l), var(--gold));
  box-shadow: var(--shadow-md);
  position: relative;
}
.avatar-circle img { width: 100%; height: 100%; object-fit: cover; display: block; }
.av-fallback {
  display: flex;
  position: absolute;
  inset: 0;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  font-weight: 700;
  color: var(--forest);
}
.av-online {
  position: absolute;
  bottom: 5px;
  right: 3px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--sage);
  border: 2.5px solid var(--cream);
  box-shadow: 0 0 0 2px rgba(123,158,135,0.3);
}
.name-block { padding-bottom: 4px; }
.name-row { display: flex; align-items: center; gap: 10px; margin-bottom: 4px; }
.pname {
  font-family: 'Lora', serif;
  font-size: 26px;
  font-weight: 600;
  color: var(--forest);
  letter-spacing: -0.3px;
  line-height: 1.2;
}
.pro-badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: var(--forest);
  color: var(--sage-l);
  font-size: 9.5px;
  font-weight: 700;
  letter-spacing: 0.06em;
  padding: 3px 9px;
  border-radius: 100px;
  box-shadow: 0 2px 8px rgba(30,58,47,0.25);
}
.prole { font-size: 13px; color: var(--muted); margin-bottom: 2px; }
.pid { font-size: 11px; color: var(--muted-l); margin-bottom: 14px; }
.pactions { display: flex; gap: 9px; flex-wrap: wrap; }
.btn-dark {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--forest);
  color: #fff;
  border: none;
  border-radius: 100px;
  padding: 9px 22px;
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all .2s;
  box-shadow: 0 2px 10px rgba(30,58,47,0.2);
}
.btn-dark:hover {
  background: #2a4a38;
  transform: translateY(-1px);
  box-shadow: 0 6px 18px rgba(30,58,47,0.25);
}
.btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--cream);
  color: var(--ink);
  border: 1.5px solid var(--sand);
  border-radius: 100px;
  padding: 9px 20px;
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all .2s;
}
.btn-ghost:hover { border-color: var(--sage-l); color: var(--forest); transform: translateY(-1px); }
.identity-stats { display: none; }
.ptabs {
  display: flex;
  align-items: center;
  gap: 2px;
  border-bottom: 1.5px solid var(--sand);
  margin-bottom: 24px;
  padding-top: 4px;
}
.ptab {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 12px 16px;
  border: none;
  background: transparent;
  font-family: 'Inter', sans-serif;
  font-size: 13.5px;
  font-weight: 500;
  color: var(--muted);
  cursor: pointer;
  border-bottom: 2.5px solid transparent;
  margin-bottom: -1.5px;
  transition: color .15s, border-color .15s;
}
.ptab:hover { color: var(--forest); }
.ptab.active { color: var(--forest); font-weight: 700; border-bottom-color: var(--sage); }
.ptab-pill {
  background: var(--cream2);
  color: var(--muted);
  font-size: 10px;
  font-weight: 700;
  padding: 1px 7px;
  border-radius: 100px;
}
.ptab.active .ptab-pill { background: var(--forest); color: var(--sage-l); }
.tab-panel { display: none; animation: panelIn .3s cubic-bezier(0.22,1,0.36,1); }
.tab-panel.active { display: block; }
@keyframes panelIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}
.ov-strip {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
  background: var(--cream2);
  border: 1px solid var(--sand);
  border-radius: var(--r-md);
  padding: 12px 18px;
  font-size: 12.5px;
  color: var(--muted);
  margin-bottom: 16px;
}
.ov-strip-item { display: flex; align-items: center; gap: 6px; }
.ov-strip-item strong { color: var(--forest); font-weight: 600; }
.ov-amber { color: var(--gold) !important; font-weight: 700; }
.ov-div { width: 1px; height: 16px; background: var(--sand); flex-shrink: 0; }
.sec-label { display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; }
.sec-label-text { font-size: 15px; font-weight: 700; color: var(--forest); }
.sec-label-count { font-size: 12px; color: var(--muted-l); font-weight: 500; }
.reports-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(215px, 1fr));
  gap: 20px;
}
.rcard {
  background: var(--cream);
  border: 1px solid var(--sand);
  border-radius: var(--r-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: transform .22s, box-shadow .22s, border-color .22s;
  animation: cardIn .4s cubic-bezier(0.22,1,0.36,1) both;
}
@keyframes cardIn {
  from { opacity: 0; transform: translateY(14px); }
  to { opacity: 1; transform: translateY(0); }
}
.reports-grid .rcard:nth-child(1) { animation-delay: 0.04s; }
.reports-grid .rcard:nth-child(2) { animation-delay: 0.10s; }
.reports-grid .rcard:nth-child(3) { animation-delay: 0.16s; }
.reports-grid .rcard:nth-child(4) { animation-delay: 0.22s; }
.rcard--active { cursor: pointer; }
.rcard--active:hover {
  transform: translateY(-5px);
  box-shadow: 0 14px 36px rgba(30,58,47,0.13);
  border-color: var(--sage-l);
}
.rcard--locked { opacity: 0.65; filter: grayscale(0.25); cursor: default; }
.rcard-img {
  position: relative;
  height: 172px;
  background: var(--cream2);
  overflow: hidden;
}
.rcard-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform .4s;
}
.rcard--active:hover .rcard-img img { transform: scale(1.05); }
.rcard-img--dim img { filter: grayscale(0.4) brightness(0.82); }
.rcard-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0.0) 30%, rgba(0,0,0,0.5) 100%);
}
.rcard-lockicon {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.15);
}
.rcard-body { padding: 14px 16px 16px; }
.rcard-row { display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; }
.rcard-icon {
  width: 34px;
  height: 34px;
  border-radius: var(--r-sm);
  display: flex;
  align-items: center;
  justify-content: center;
}
.ri-blue { background: rgba(74,112,85,0.12); color: var(--sage-d); }
.ri-gray { background: var(--cream2); color: var(--muted); }
.rcard-arrow {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: var(--forest);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  transition: transform .2s, background .2s;
}
.rcard--active:hover .rcard-arrow { background: var(--sage-d); transform: translate(2px,-2px); }
.rcard-title { font-size: 15px; font-weight: 700; color: var(--forest); margin-bottom: 3px; }
.rc-muted { color: var(--muted); }
.rcard-sub { font-size: 11.5px; color: var(--muted-l); margin-bottom: 10px; }
.rcard-pills { display: flex; gap: 5px; flex-wrap: wrap; }
.rpill { font-size: 10.5px; font-weight: 700; padding: 3px 9px; border-radius: 100px; }
.rp-red { background: rgba(193,99,74,0.1); color: #8a3220; }
.rp-amber { background: rgba(212,168,83,0.13); color: #8b6914; }
.rp-blue { background: rgba(107,174,214,0.13); color: #2e6fa3; }
.rp-green { background: rgba(74,112,85,0.1); color: var(--sage-d); }
.rcard-unlock {
  font-size: 11.5px;
  font-weight: 600;
  color: var(--muted-l);
  background: var(--cream2);
  border: 1px dashed var(--sand);
  border-radius: var(--r-sm);
  padding: 7px 10px;
  text-align: center;
  margin-top: 4px;
}
.history-list, .settings-list {
  background: var(--cream);
  border: 1px solid var(--sand);
  border-radius: var(--r-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
}
.hitem, .srow {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 20px;
  border-bottom: 1px solid var(--sand-l);
  transition: background .15s;
}
.hitem:last-child, .srow:last-child { border-bottom: none; }
.hitem:hover, .srow:hover { background: var(--cream2); }
.hdot { width: 9px; height: 9px; border-radius: 50%; flex-shrink: 0; }
.hdot--green { background: var(--sage); }
.hdot--amber { background: var(--gold); }
.hdot--blue { background: var(--sky); }
.hbody { flex: 1; }
.htitle, .stitle { font-size: 13.5px; font-weight: 600; color: var(--forest); }
.hdate, .ssub { font-size: 12px; color: var(--muted-l); margin-top: 2px; }
.htag { font-size: 10.5px; font-weight: 700; padding: 3px 10px; border-radius: 100px; }
.htag--green { background: rgba(74,112,85,0.1); color: var(--sage-d); }
.htag--amber { background: rgba(212,168,83,0.13); color: #8b6914; }
.htag--blue { background: rgba(107,174,214,0.13); color: #2e6fa3; }
.srow { justify-content: space-between; gap: 16px; }
.stoggle {
  width: 42px;
  height: 24px;
  border-radius: 100px;
  background: var(--sand);
  border: 1.5px solid var(--sand);
  cursor: pointer;
  position: relative;
  flex-shrink: 0;
  transition: background .2s, border-color .2s;
}
.stoggle::after {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--muted-l);
  transition: transform .2s, background .2s;
  box-shadow: 0 1px 3px rgba(0,0,0,0.15);
}
.stoggle--on { background: var(--sage); border-color: var(--sage-d); }
.stoggle--on::after { background: #fff; transform: translateX(18px); }
@media (max-width: 768px) {
  .profile-wrap { padding: 0 16px 40px; }
  .identity-row { flex-direction: column; align-items: flex-start; margin-top: -42px; }
  .reports-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 480px) {
  .reports-grid { grid-template-columns: 1fr; }
  .pname { font-size: 22px; }
}
`,th=[{dot:"hdot--green",title:"Skin Health Report generated",date:"Jan 15, 2026 � 09:42 AM",tag:"Complete",tagClass:"htag--green"},{dot:"hdot--amber",title:"Profile created",date:"Jan 14, 2026 � 03:17 PM",tag:"Setup",tagClass:"htag--amber"},{dot:"hdot--blue",title:"DNA sample submitted",date:"Jan 10, 2026 � 11:00 AM",tag:"Lab",tagClass:"htag--blue"}],ih=[{title:"Email Notifications",sub:"Receive report updates via email",on:!0},{title:"Data Sharing",sub:"Allow anonymized research use",on:!1},{title:"Two-Factor Auth",sub:"Secure your account with 2FA",on:!0}],ah=[{title:"Health",sub:"Genetic Risk Analysis � 34 traits",pills:[{label:"2 Very High",className:"rp-red"},{label:"6 High",className:"rp-amber"},{label:"11 Protective",className:"rp-green"}],image:"/images/meditation.png",active:!0,iconClass:"ri-blue",href:"/reports/skin",icon:a.jsx("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M12 2a10 10 0 100 20A10 10 0 0012 2zm-1 14.93V17a1 1 0 112 0v-.07A8 8 0 0019.93 11H19a1 1 0 110-2h.93A8 8 0 0013 4.07V5a1 1 0 11-2 0v-.93A8 8 0 004.07 11H5a1 1 0 110 2h-.93A8 8 0 0011 16.93z"})})},{title:"Nutrition",sub:"Metabolic & Nutrition Traits � 36 traits",pills:[{label:"3 Very High",className:"rp-red"},{label:"12 High",className:"rp-amber"},{label:"20 Medium",className:"rp-blue"},{label:"1 Low",className:"rp-green"}],image:"https://images.unsplash.com/photo-1557985776-a2838c6fa1e6?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=1600",active:!0,iconClass:"ri-blue",href:"/reports/nutrition",overlay:!0,icon:a.jsx("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M12 3C7 3 3 7 3 12s4 9 9 9 9-4 9-9-4-9-9-9zm1 13H9v-2h3v-2H9V8h4l2 3-2 4z"})})},{title:"Physical Traits",sub:"Body Characteristics",image:"https://images.unsplash.com/photo-1765728617086-5d16a7bac916?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=1600",active:!1,iconClass:"ri-gray",overlay:!0,icon:a.jsx("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M12 2a5 5 0 015 5v1h2a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V9a1 1 0 011-1h2V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v1h6V7a3 3 0 00-3-3z"})})},{title:"Other Traits",sub:"Additional Analysis",image:"https://images.unsplash.com/photo-1660846194618-bbd5ac3825a6?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=1600",active:!1,iconClass:"ri-gray",overlay:!0,icon:a.jsx("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"})})}];function sh(){const o=ra(),[l,d]=y.useState("main"),[p,u]=y.useState(ih),[g,v]=y.useState("USR-USER0001");return y.useEffect(()=>{if(document.getElementById("profile-page-styles"))return;const b=document.createElement("style");return b.id="profile-page-styles",b.textContent=nh,document.head.appendChild(b),()=>{var k;return(k=document.getElementById("profile-page-styles"))==null?void 0:k.remove()}},[]),y.useEffect(()=>{v(sessionStorage.getItem("userId")||"USR-USER0001")},[]),a.jsxs("div",{className:"profile-page",children:[a.jsxs("div",{className:"hero-banner",children:[a.jsx("img",{src:"/images/profilebanner.png",alt:"Profile Banner",className:"hero-bg"}),a.jsx("div",{className:"hero-blob b1"}),a.jsx("div",{className:"hero-blob b2"}),a.jsx("div",{className:"hero-blob b3"})]}),a.jsxs("div",{className:"profile-wrap",children:[a.jsx("div",{className:"identity-row",children:a.jsxs("div",{className:"identity-left",children:[a.jsxs("div",{className:"avatar-wrap",children:[a.jsxs("div",{className:"avatar-circle",children:[a.jsx("img",{src:"/images/avatarpic.jpg",alt:"Profile",className:"profilepic"}),a.jsx("div",{className:"av-fallback",children:"AL"})]}),a.jsx("span",{className:"av-online"})]}),a.jsxs("div",{className:"name-block",children:[a.jsxs("div",{className:"name-row",children:[a.jsx("h1",{className:"pname",id:"displayName",children:"sdsd"}),a.jsxs("span",{className:"pro-badge",children:[a.jsx("svg",{width:"9",height:"9",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})}),"PRO"]})]}),a.jsx("p",{className:"prole",children:"Genetic Skin Health Report"}),a.jsx("p",{className:"pid mono",id:"userId",children:g}),a.jsxs("div",{className:"pactions",children:[a.jsx("button",{className:"btn-dark",type:"button",onClick:()=>o("/reports/skin"),children:".."}),a.jsxs("button",{className:"btn-ghost",type:"button",children:[a.jsx("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",children:a.jsx("path",{d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M16 12l-4 4m0 0l-4-4m4 4V4",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),".."]})]})]})]})}),a.jsxs("div",{className:"ptabs",children:[a.jsxs("button",{className:`ptab${l==="main"?" active":""}`,type:"button",onClick:()=>d("main"),children:["Reports & Overview ",a.jsx("span",{className:"ptab-pill",children:"4"})]}),a.jsx("button",{className:`ptab${l==="history"?" active":""}`,type:"button",onClick:()=>d("history"),children:"History"}),a.jsx("button",{className:`ptab${l==="settings"?" active":""}`,type:"button",onClick:()=>d("settings"),children:"Settings"})]}),a.jsxs("div",{className:`tab-panel${l==="main"?" active":""}`,id:"tab-main",children:[a.jsxs("div",{className:"ov-strip",children:[a.jsxs("div",{className:"ov-strip-item",children:[a.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",children:[a.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"1.8"}),a.jsx("path",{d:"M16 2v4M8 2v4M3 10h18",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]}),"Generated ",a.jsx("strong",{children:"Jan 15, 2026"})]}),a.jsx("span",{className:"ov-div"}),a.jsxs("div",{className:"ov-strip-item",children:[a.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",children:[a.jsx("circle",{cx:"12",cy:"12",r:"9",stroke:"currentColor",strokeWidth:"1.8"}),a.jsx("path",{d:"M12 7v5l3 3",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]}),"Gender ",a.jsx("strong",{className:"ov-amber",children:"Male"})]}),a.jsx("span",{className:"ov-div"}),a.jsx("div",{className:"ov-strip-item mono-sm",id:"ovId",children:g}),a.jsx("span",{className:"ov-div"})]}),a.jsxs("div",{className:"sec-label",children:[a.jsx("span",{className:"sec-label-text",children:"Your Reports"}),a.jsx("span",{className:"sec-label-count",children:"4 categories"})]}),a.jsx("div",{className:"reports-grid",id:"categoryList",children:ah.map(b=>a.jsxs("div",{className:`rcard ${b.active?"rcard--active":"rcard--locked"}`,onClick:()=>b.active&&b.href?o(b.href):void 0,children:[a.jsxs("div",{className:`rcard-img${b.active?"":" rcard-img--dim"}`,children:[a.jsx("img",{src:b.image,alt:b.title}),b.overlay?a.jsx("div",{className:"rcard-overlay"}):null,b.active?null:a.jsx("div",{className:"rcard-lockicon",children:a.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",children:[a.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",stroke:"white",strokeWidth:"2"}),a.jsx("path",{d:"M7 11V7a5 5 0 0110 0v4",stroke:"white",strokeWidth:"2",strokeLinecap:"round"})]})})]}),a.jsxs("div",{className:"rcard-body",children:[a.jsxs("div",{className:"rcard-row",children:[a.jsx("div",{className:`rcard-icon ${b.iconClass}`,children:b.icon}),b.active?a.jsx("div",{className:"rcard-arrow",children:"?"}):null]}),a.jsx("h3",{className:`rcard-title${b.active?"":" rc-muted"}`,children:b.title}),a.jsx("p",{className:"rcard-sub",children:b.sub}),b.active?a.jsx("div",{className:"rcard-pills",children:b.pills.map(k=>a.jsx("span",{className:`rpill ${k.className}`,children:k.label},k.label))}):a.jsx("div",{className:"rcard-unlock"})]})]},b.title))})]}),a.jsx("div",{className:`tab-panel${l==="history"?" active":""}`,id:"tab-history",children:a.jsx("div",{className:"history-list",children:th.map(b=>a.jsxs("div",{className:"hitem",children:[a.jsx("div",{className:`hdot ${b.dot}`}),a.jsxs("div",{className:"hbody",children:[a.jsx("div",{className:"htitle",children:b.title}),a.jsx("div",{className:"hdate mono",children:b.date})]}),a.jsx("span",{className:`htag ${b.tagClass}`,children:b.tag})]},b.title))})}),a.jsx("div",{className:`tab-panel${l==="settings"?" active":""}`,id:"tab-settings",children:a.jsx("div",{className:"settings-list",children:p.map((b,k)=>a.jsxs("div",{className:"srow",children:[a.jsxs("div",{children:[a.jsx("div",{className:"stitle",children:b.title}),a.jsx("div",{className:"ssub",children:b.sub})]}),a.jsx("div",{className:`stoggle${b.on?" stoggle--on":""}`,onClick:()=>u(E=>E.map((C,z)=>z===k?{...C,on:!C.on}:C))})]},b.title))})})]})]})}const oh=`\uFEFF<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
  <meta charset="UTF-8" />\r
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\r
  <title>prs â€” Genetic Skin Health Dashboard</title>\r
  <link rel="preconnect" href="https://fonts.googleapis.com">\r
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Lora:ital,wght@0,400;0,600;1,400;1,600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">\r
  <link rel="stylesheet" href="index.css" />\r
  </style>\r
</head>\r
<body>\r
\r
<!-- ==================== LANDING PAGE ==================== -->\r
<div id="landing-page" class="page">\r
\r
  <nav class="landing-nav">\r
    <div class="nav-brand">\r
      <div class="brand-dot"><span>p</span></div>\r
      <span class="brand-name">prs</span>\r
    </div>\r
    <div class="nav-links">\r
      <a href="#how-it-works">How It Works</a>\r
      <a href="#categories">Categories</a>\r
      <a href="#" class="nav-cta" onclick="showDashboard(); return false;">Login</a>\r
    </div>\r
  </nav>\r
\r
  <section class="hero">\r
    <div class="hero-left">\r
      <div class="hero-badge">\r
        <span class="pulse-dot"></span>\r
        Precision Genomic Analysis\r
      </div>\r
      <h1 class="hero-title">Your Genetic<br/><em>Skin Health</em> Report</h1>\r
      <p class="hero-desc">Unlock the power of your DNA to understand skin sensitivities, disease risk, and aesthetic predispositions â€” powered by polygenic risk scoring from 500K+ genetic variants.</p>\r
      <div class="hero-actions">\r
        <button class="btn-primary" onclick="showDashboard()">View Sample Report</button>\r
        <button class="btn-secondary" onclick="showDashboard()">\r
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/></svg>\r
          Login to Account\r
        </button>\r
      </div>\r
      <div class="hero-stats">\r
        <div class="stat-pill"><strong>34</strong>Traits Analyzed</div>\r
        <div class="stat-pill"><strong>500K+</strong>Variants Scored</div>\r
        <div class="stat-pill"><strong>4</strong>Skin Categories</div>\r
      </div>\r
    </div>\r
    <div class="hero-right">\r
      <div class="hero-visual-card">\r
        <div class="hvc-label">Alex Laurent Â· Report #DG-2024-0847</div>\r
        <div class="hvc-name">Overall Genetic Skin Risk</div>\r
        <div class="hvc-score-row">\r
          <div class="hvc-big-score">74</div>\r
          <div class="hvc-score-meta">\r
            <div class="hvc-out">/100</div>\r
            <div class="hvc-grade">Moderate Risk</div>\r
          </div>\r
        </div>\r
        <div class="hvc-bars">\r
          <div class="hvc-bar-row">\r
            <span class="hvc-bar-label">Allergies</span>\r
            <div class="hvc-bar-track"><div class="hvc-bar-fill" style="width:55%; background:var(--sage);"></div></div>\r
            <span class="hvc-bar-pct">55%</span>\r
          </div>\r
          <div class="hvc-bar-row">\r
            <span class="hvc-bar-label">Dermatological</span>\r
            <div class="hvc-bar-track"><div class="hvc-bar-fill" style="width:82%; background:var(--terra);"></div></div>\r
            <span class="hvc-bar-pct">82%</span>\r
          </div>\r
          <div class="hvc-bar-row">\r
            <span class="hvc-bar-label">Aesthetics</span>\r
            <div class="hvc-bar-track"><div class="hvc-bar-fill" style="width:48%; background:var(--gold);"></div></div>\r
            <span class="hvc-bar-pct">48%</span>\r
          </div>\r
          <div class="hvc-bar-row">\r
            <span class="hvc-bar-label">Markers</span>\r
            <div class="hvc-bar-track"><div class="hvc-bar-fill" style="width:63%; background:var(--sky);"></div></div>\r
            <span class="hvc-bar-pct">63%</span>\r
          </div>\r
        </div>\r
        <div class="hvc-footer">\r
          <span class="hvc-tag">Analyzed Jan 15, 2026</span>\r
          <span class="hvc-tag">34 traits</span>\r
          <span class="hvc-tag">500K variants</span>\r
        </div>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <section class="section" id="how-it-works" style="background: var(--white);">\r
    <div class="section-eyebrow">Process</div>\r
    <h2 class="section-title">How It Works</h2>\r
    <div class="steps-grid">\r
      <div class="step-card">\r
        <div class="step-number">01</div>\r
        <div class="step-icon-wrap blue">\r
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/></svg>\r
        </div>\r
        <h3>Submit Your DNA</h3>\r
        <p>Upload your raw genetic data file from 23andMe, AncestryDNA, or any FASTQ/VCF format source.</p>\r
      </div>\r
      <div class="step-card">\r
        <div class="step-number">02</div>\r
        <div class="step-icon-wrap green">\r
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zm5.6 8H19v6h-2.8v-6z"/></svg>\r
        </div>\r
        <h3>Polygenic Risk Analysis</h3>\r
        <p>Our algorithm computes PRS across 34 skin traits using peer-reviewed GWAS datasets and proprietary weighting.</p>\r
      </div>\r
      <div class="step-card">\r
        <div class="step-number">03</div>\r
        <div class="step-icon-wrap purple">\r
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/></svg>\r
        </div>\r
        <h3>Personalized Report</h3>\r
        <p>Receive a detailed, actionable skin health dashboard with risk scores, trait insights, and tailored recommendations.</p>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <section class="section categories-preview" id="categories">\r
    <div class="section-eyebrow">Coverage</div>\r
    <h2 class="section-title">What We Analyze</h2>\r
    <div class="cat-grid">\r
      <div class="cat-card allergies">\r
        <span class="cat-emoji">ðŸ§¬</span>\r
        <h3>Allergies</h3>\r
        <p>Mosquito bite sensitivity, eczema risk, allergic diseases and environmental sensitivities.</p>\r
        <div class="cat-count">4 traits</div>\r
      </div>\r
      <div class="cat-card derm">\r
        <span class="cat-emoji">ðŸ”¬</span>\r
        <h3>Dermatological Diseases</h3>\r
        <p>Skin cancer risk, acne, psoriasis, vitiligo, rosacea, and 11 additional conditions.</p>\r
        <div class="cat-count">15 traits</div>\r
      </div>\r
      <div class="cat-card aesthetics">\r
        <span class="cat-emoji">âœ¨</span>\r
        <h3>Skin Aesthetics</h3>\r
        <p>Wrinkle predisposition, pigmentation, hydration levels, elasticity and UV sensitivity.</p>\r
        <div class="cat-count">8 traits</div>\r
      </div>\r
      <div class="cat-card markers">\r
        <span class="cat-emoji">ðŸ“Š</span>\r
        <h3>Skin Health Markers</h3>\r
        <p>Kallikrein-7 and ceramide levels â€” key biomarkers that govern skin barrier function.</p>\r
        <div class="cat-count">2 traits</div>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <footer class="landing-footer">\r
    <div class="footer-brand">\r
      <span class="brand-name">prs</span>\r
      <p>Advancing skin health through genomics.</p>\r
    </div>\r
    <div class="footer-links">\r
      <a href="#">Privacy Policy</a>\r
      <a href="#">Terms of Service</a>\r
      <a href="#">Scientific References</a>\r
      <a href="#">Contact</a>\r
    </div>\r
    <div class="footer-note">Â© 2026 DermGenix. For informational purposes only. Not medical advice.</div>\r
  </footer>\r
</div>\r
\r
<!-- ==================== DASHBOARD ==================== -->\r
<div id="dashboard-page" class="page active">\r
\r
  <!-- MOBILE TOPBAR -->\r
  <div class="mobile-topbar">\r
    <div class="mobile-topbar-brand">\r
      <div class="sb-brand-dot"><span>p</span></div>\r
      <span class="sb-brand-name">prs</span>\r
    </div>\r
    <button class="mobile-hamburger" id="hamburger-btn" onclick="toggleSidebar()" aria-label="Open menu">\r
      <span></span><span></span><span></span>\r
    </button>\r
  </div>\r
\r
  <!-- SIDEBAR OVERLAY -->\r
  <div class="sidebar-overlay" id="sidebar-overlay" onclick="closeSidebar()"></div>\r
\r
  <div class="dashboard-body">\r
  <aside class="sidebar" id="sidebar">\r
    <div class="sidebar-header">\r
      <div class="sb-brand-dot"><span>p</span></div>\r
      <span class="sb-brand-name">prs</span>\r
    </div>\r
    <div class="user-profile">\r
      <div class="avatar">AL</div>\r
      <div class="user-info">\r
        <span class="user-name">Alex Laurent</span>\r
        <span class="user-tag">DG-2024-0847</span>\r
      </div>\r
    </div>\r
    <div class="sidebar-search">\r
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="8" stroke="rgba(255,255,255,0.4)" stroke-width="2"/><path d="m21 21-4.35-4.35" stroke="rgba(255,255,255,0.4)" stroke-width="2" stroke-linecap="round"/></svg>\r
      <input type="text" id="trait-search" class="searchtraits"  placeholder="Search traits..." oninput="filterTraits(this.value) " />\r
    </div>\r
    <nav class="sidebar-nav">\r
      <div class="nav-group-label">Dashboard</div>\r
      <a href="#" class="nav-item active" data-view="overview" onclick="showView('overview'); return false;">\r
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/></svg>\r
        Overview\r
      </a>\r
      <div class="nav-group-label">Categories</div>\r
      <a href="#" class="nav-item" data-view="allergies" onclick="showView('allergies'); return false;">\r
        <svg width="15" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>\r
        Allergies\r
        <span class="nav-badge badge-high">1 High</span>\r
      </a>\r
      <a href="#" class="nav-item" data-view="dermatological" onclick="showView('dermatological'); return false;">\r
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>\r
        Dermatological\r
        <span class="nav-badge badge-danger">2 Very High</span>\r
      </a>\r
      <a href="#" class="nav-item" data-view="aesthetics" onclick="showView('aesthetics'); return false;">\r
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"/></svg>\r
        SkinAesthetics\r
        <span class="nav-badge badge-high">1 High</span>\r
      </a>\r
      <a href="#" class="nav-item" data-view="markers" onclick="showView('markers'); return false;">\r
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zm5.6 8H19v6h-2.8v-6z"/></svg>\r
        Health Markers\r
        <span class="nav-badge badge-high">1 High</span>\r
      </a>\r
      <div class="nav-group-label">Tools</div>\r
      \r
      <a href="#" class="nav-item download-btn" onclick="triggerDownload(); return false;">\r
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>\r
        Download Report\r
      </a>\r
    </nav>\r
  </aside>\r
\r
  <main class="main-content">\r
    <header class="topbar">\r
      <div class="topbar-left">\r
        <h2 id="page-title">Overview</h2>\r
        <span id="page-subtitle">Genetic Skin Health Summary</span>\r
      </div>\r
      <div class="topbar-right">\r
        <div class="filter-group">\r
          <span class="filter-label">Filter:</span>\r
          <select id="risk-filter" onchange="filterByRisk(this.value)">\r
            <option value="all">All Levels</option>\r
            <option value="very-high">Very High</option>\r
            <option value="high">High</option>\r
            <option value="medium">Medium</option>\r
            <option value="low">Low</option>\r
            <option value="very-low">Very Low</option>\r
          </select>\r
        </div>\r
        \r
        <div class="report-date">Feb 15, 2026</div>\r
      </div>\r
    </header>\r
\r
    <div class="views-container">\r
\r
      <!-- OVERVIEW -->\r
      <div id="view-overview" class="view active">\r
\r
        <div class="bento-grid">\r
          <div class="bento-card overview-summary-card">
            <div class="overview-summary-card__glow"></div>
            <div class="overview-summary-card__top">
              <div>
                <div class="card-title overview-summary-card__eyebrow">Overview Summary</div>
                <h3 class="overview-summary-card__title">Your skin report is led by dermatological disease risk, UV response, and barrier sensitivity.</h3>
              </div>
              <div class="overview-summary-card__pill">34 traits analyzed</div>
            </div>
            <p class="overview-summary-card__body">
              The strongest signals in this profile cluster around inflammatory skin disease, cancer-related susceptibility, and barrier reactivity. The highest-value actions from this overview are strict UV protection, low-irritation skincare, and regular dermatology follow-up for earlier prevention.
            </p>
            <div class="overview-summary-card__grid">
              <div class="overview-summary-card__item">
                <div class="overview-summary-card__label">Highest Focus</div>
                <div class="overview-summary-card__value">Dermatological</div>
                <div class="overview-summary-card__subcopy">Cancer and inflammatory traits carry the strongest clinical weight.</div>
              </div>
              <div class="overview-summary-card__item">
                <div class="overview-summary-card__label">Immediate Habit</div>
                <div class="overview-summary-card__value">UV and barrier care</div>
                <div class="overview-summary-card__subcopy">Daily SPF and fragrance-light routines should lead your prevention plan.</div>
              </div>
              <div class="overview-summary-card__item">
                <div class="overview-summary-card__label">Clinical Follow-up</div>
                <div class="overview-summary-card__value">Derm review</div>
                <div class="overview-summary-card__subcopy">Use the report to support earlier screening and trigger-aware skincare planning.</div>
              </div>
            </div>
          </div>

          <!-- Score Card -->\r
          <!-- Risk Categories Card (replaces Overall Risk Score) -->\r
          <div class="bento-card bento-score" style="padding: 20px 18px;">\r
            <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:16px;">\r
              <div class="card-title" style="margin-bottom:0;">Your Risk Categories</div>\r
              <a onclick="showView('dermatological')" style="font-size:12px;font-weight:600;color:var(--sage-d);cursor:pointer;text-decoration:none;">See all</a>\r
            </div>\r
            <div class="rc-list">\r
\r
              <!-- Skin Cancer Risk â€” expanded by default -->\r
              <div class="rc-item" onclick="toggleRcItem(this)">\r
                <div class="rc-item-head">\r
                  <div class="rc-icon rc-icon--red">\r
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>\r
                  </div>\r
                  <div class="rc-meta">\r
                    <div class="rc-name">Skin Cancer Risk <span class="rc-badge rc-badge--vh">Very High</span></div>\r
                    <div class="rc-sub">PRS 2.47</div>\r
                  </div>\r
                  <svg class="rc-chevron rc-chevron--up" width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M18 15l-6-6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>\r
                </div>\r
                <div class="rc-expand-body">\r
                  <div class="rc-tags">\r
                    <span class="rc-tag">MC1R variant</span>\r
                    <span class="rc-tag">PTCH1</span>\r
                    <span class="rc-tag">TP53</span>\r
                  </div>\r
                  <p class="rc-desc">MC1R, PTCH1, and TP53 variants significantly elevate squamous and basal cell carcinoma risk. Immediate dermatological consultation recommended.</p>\r
                  <div class="rc-footer">\r
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="var(--muted-l)"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>\r
                    <span>Dermatological Â· Annual dermatology screening required</span>\r
                    <span class="rc-time">2h ago</span>\r
                  </div>\r
                </div>\r
              </div>\r
\r
              <!-- Inflammatory Skin -->\r
              <div class="rc-item" onclick="toggleRcItem(this)">\r
                <div class="rc-item-head">\r
                  <div class="rc-icon rc-icon--amber">\r
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"/></svg>\r
                  </div>\r
                  <div class="rc-meta">\r
                    <div class="rc-name">Inflammatory Skin <span class="rc-badge rc-badge--h">High</span></div>\r
                    <div class="rc-sub">PRS 1.94</div>\r
                  </div>\r
                  <svg class="rc-chevron" width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>\r
                </div>\r
                <div class="rc-expand-body">\r
                  <div class="rc-tags">\r
                    <span class="rc-tag">HLA-C*06:02</span>\r
                    <span class="rc-tag">IL-23 pathway</span>\r
                  </div>\r
                  <p class="rc-desc">Psoriasis and rosacea variants requiring anti-inflammatory skincare and regular monitoring. Avoid triggers like alcohol, spicy foods, and extreme temperatures.</p>\r
                  <div class="rc-footer">\r
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="var(--muted-l)"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>\r
                    <span>Dermatological Â· Fragrance-free products</span>\r
                    <span class="rc-time">3h ago</span>\r
                  </div>\r
                </div>\r
              </div>\r
\r
              <!-- Skin Aesthetics -->\r
              <div class="rc-item" onclick="toggleRcItem(this)">\r
                <div class="rc-item-head">\r
                  <div class="rc-icon rc-icon--blue">\r
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>\r
                  </div>\r
                  <div class="rc-meta">\r
                    <div class="rc-name">Skin Aesthetics <span class="rc-badge rc-badge--m">Moderate</span></div>\r
                    <div class="rc-sub">PRS 1.33</div>\r
                  </div>\r
                  <svg class="rc-chevron" width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>\r
                </div>\r
                <div class="rc-expand-body">\r
                  <div class="rc-tags">\r
                    <span class="rc-tag">Collagen</span>\r
                    <span class="rc-tag">Elastin âœ“</span>\r
                  </div>\r
                  <p class="rc-desc">Moderate wrinkle predisposition offset by excellent hydration and elasticity genetics. Retinoid-friendly profile.</p>\r
                  <div class="rc-footer">\r
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="var(--muted-l)"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>\r
                    <span>Aesthetics Â· Retinoid-friendly profile</span>\r
                    <span class="rc-time">5h ago</span>\r
                  </div>\r
                </div>\r
              </div>\r
\r
            </div>\r
          </div>\r
\r
          <!-- Distribution -->\r
          <div class="bento-card bento-dist">\r
            <div class="dist2-header">\r
              <div class="dist2-title-block">\r
                <span class="card-title" style="margin-bottom:0;">Risk Distribution</span>\r
                <span class="dist2-subtitle">34 traits Â· tap to expand</span>\r
              </div>\r
              <!-- mini donut placeholder filled via CSS -->\r
              <div class="dist2-donut">\r
                <svg viewBox="0 0 36 36" width="46" height="46">\r
                  <!-- very-low 32.4% -->\r
                  <circle class="donut-seg" stroke="var(--risk-very-low)" stroke-dasharray="32.4 67.6" stroke-dashoffset="0"/>\r
                  <!-- low 23.5% -->\r
                  <circle class="donut-seg" stroke="var(--risk-low)" stroke-dasharray="23.5 76.5" stroke-dashoffset="-32.4"/>\r
                  <!-- medium 20.6% -->\r
                  <circle class="donut-seg" stroke="var(--risk-medium)" stroke-dasharray="20.6 79.4" stroke-dashoffset="-55.9"/>\r
                  <!-- high 17.6% -->\r
                  <circle class="donut-seg" stroke="var(--risk-high)" stroke-dasharray="17.6 82.4" stroke-dashoffset="-76.5"/>\r
                  <!-- very-high 5.9% -->\r
                  <circle class="donut-seg" stroke="var(--risk-very-high)" stroke-dasharray="5.9 94.1" stroke-dashoffset="-94.1"/>\r
                </svg>\r
              </div>\r
            </div>\r
\r
            <div class="dist2-rows">\r
\r
              <!-- Very High -->\r
              <div class="dist2-row dist2-row-vh" onclick="toggleDist2(this)">\r
                <div class="dist2-row-top">\r
                  <div class="dist2-pip dist2-pip-vh"></div>\r
                  <span class="dist2-lbl">Very High</span>\r
                  <div class="dist2-bar-wrap">\r
                    <div class="dist2-bar dist2-bar-vh" style="width:18%"></div>\r
                  </div>\r
                  <span class="dist2-count dist2-count-vh">2</span>\r
                  <svg class="dist2-chevron" width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>\r
                </div>\r
                <div class="dist2-traits" style="display:none">\r
                  <span class="dist2-chip" onclick="event.stopPropagation();showTrait('nonmelanoma')">Non-Melanoma Cancer</span>\r
                  <span class="dist2-chip" onclick="event.stopPropagation();showTrait('keratinocyte')">Keratinocyte Cancer</span>\r
                </div>\r
              </div>\r
\r
              <!-- High -->\r
              <div class="dist2-row dist2-row-h" onclick="toggleDist2(this)">\r
                <div class="dist2-row-top">\r
                  <div class="dist2-pip dist2-pip-h"></div>\r
                  <span class="dist2-lbl">High</span>\r
                  <div class="dist2-bar-wrap">\r
                    <div class="dist2-bar dist2-bar-h" style="width:55%"></div>\r
                  </div>\r
                  <span class="dist2-count dist2-count-h">6</span>\r
                  <svg class="dist2-chevron" width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>\r
                </div>\r
                <div class="dist2-traits" style="display:none">\r
                  <span class="dist2-chip" onclick="event.stopPropagation();showTrait('psoriasis')">Psoriasis</span>\r
                  <span class="dist2-chip" onclick="event.stopPropagation();showTrait('rosacea')">Rosacea</span>\r
                  <span class="dist2-chip" onclick="event.stopPropagation();showTrait('sunburn')">Sunburn Sensitivity</span>\r
                  <span class="dist2-chip" onclick="event.stopPropagation();showTrait('kallikrein')">Kallikrein-7</span>\r
                  <span class="dist2-chip" onclick="event.stopPropagation();showTrait('mosquito')">Mosquito Sensitivity</span>\r
                  <span class="dist2-chip" onclick="event.stopPropagation();showTrait('acne')">Acne Vulgaris</span>\r
                </div>\r
              </div>\r
\r
              <!-- Medium -->\r
              <div class="dist2-row dist2-row-m" onclick="toggleDist2(this)">\r
                <div class="dist2-row-top">\r
                  <div class="dist2-pip dist2-pip-m"></div>\r
                  <span class="dist2-lbl">Medium</span>\r
                  <div class="dist2-bar-wrap">\r
                    <div class="dist2-bar dist2-bar-m" style="width:64%"></div>\r
                  </div>\r
                  <span class="dist2-count dist2-count-m">7</span>\r
                  <svg class="dist2-chevron" width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>\r
                </div>\r
                <div class="dist2-traits" style="display:none">\r
                  <span class="dist2-chip" onclick="event.stopPropagation();showTrait('melanoma')">Melanoma</span>\r
                  <span class="dist2-chip" onclick="event.stopPropagation();showTrait('vitiligo')">Vitiligo</span>\r
                  <span class="dist2-chip" onclick="event.stopPropagation();showTrait('allergic-disease')">Allergic Disease</span>\r
                  <span class="dist2-chip" onclick="event.stopPropagation();">Eye Wrinkles</span>\r
                  <span class="dist2-chip" onclick="event.stopPropagation();">Facial Wrinkles</span>\r
                  <span class="dist2-chip" onclick="event.stopPropagation();">Soft Tissue Disease</span>\r
                  <span class="dist2-chip" onclick="event.stopPropagation();">Hidradenitis</span>\r
                </div>\r
              </div>\r
\r
              <!-- Low -->\r
              <div class="dist2-row dist2-row-l" onclick="toggleDist2(this)">\r
                <div class="dist2-row-top">\r
                  <div class="dist2-pip dist2-pip-l"></div>\r
                  <span class="dist2-lbl">Low</span>\r
                  <div class="dist2-bar-wrap">\r
                    <div class="dist2-bar dist2-bar-l" style="width:73%"></div>\r
                  </div>\r
                  <span class="dist2-count dist2-count-l">8</span>\r
                  <svg class="dist2-chevron" width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>\r
                </div>\r
                <div class="dist2-traits" style="display:none">\r
                  <span class="dist2-chip" onclick="event.stopPropagation();showTrait('eczema')">Eczema</span>\r
                  <span class="dist2-chip" onclick="event.stopPropagation();showTrait('urticaria')">Urticaria</span>\r
                  <span class="dist2-chip" onclick="event.stopPropagation();">Pigmentation UV</span>\r
                  <span class="dist2-chip" onclick="event.stopPropagation();">Seborrheic Dermatitis</span>\r
                  <span class="dist2-chip" onclick="event.stopPropagation();">Contact Dermatitis</span>\r
                  <span class="dist2-chip" onclick="event.stopPropagation();">Photoaging</span>\r
                  <span class="dist2-chip" onclick="event.stopPropagation();">Hyperpigmentation</span>\r
                  <span class="dist2-chip" onclick="event.stopPropagation();">Stretch Marks</span>\r
                </div>\r
              </div>\r
\r
              <!-- Very Low -->\r
              <div class="dist2-row dist2-row-vl" onclick="toggleDist2(this)">\r
                <div class="dist2-row-top">\r
                  <div class="dist2-pip dist2-pip-vl"></div>\r
                  <span class="dist2-lbl">Very Low</span>\r
                  <div class="dist2-bar-wrap">\r
                    <div class="dist2-bar dist2-bar-vl" style="width:100%"></div>\r
                  </div>\r
                  <span class="dist2-count dist2-count-vl">11</span>\r
                  <svg class="dist2-chevron" width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>\r
                </div>\r
                <div class="dist2-traits" style="display:none">\r
                  <span class="dist2-chip" onclick="event.stopPropagation();showTrait('ceramide')">Ceramide Levels</span>\r
                  <span class="dist2-chip" onclick="event.stopPropagation();showTrait('hay-fever')">Hay Fever</span>\r
                  <span class="dist2-chip" onclick="event.stopPropagation();showTrait('keloid')">Keloid</span>\r
                  <span class="dist2-chip" onclick="event.stopPropagation();">Skin Hydration</span>\r
                  <span class="dist2-chip" onclick="event.stopPropagation();">Skin Elasticity</span>\r
                  <span class="dist2-chip" onclick="event.stopPropagation();">Varicose Veins</span>\r
                  <span class="dist2-chip" onclick="event.stopPropagation();">Cellulite</span>\r
                  <span class="dist2-chip" onclick="event.stopPropagation();">Redness</span>\r
                  <span class="dist2-chip" onclick="event.stopPropagation();">Dry Skin</span>\r
                  <span class="dist2-chip" onclick="event.stopPropagation();">Freckles</span>\r
                  <span class="dist2-chip" onclick="event.stopPropagation();">Oily Skin</span>\r
                </div>\r
              </div>\r
\r
            </div>\r
          </div>\r
          \r
          <!-- Priority Traits -->\r
          <div class="bento-card bento-priority">\r
            <div class="card-title">Priority Attention</div>\r
            <div class="priority-list">\r
              <div class="priority-item" onclick="showTrait('keratinocyte')">\r
                <div class="priority-dot" style="background:var(--risk-very-high)"></div>\r
                <span class="priority-name">Keratinocyte Cancer</span>\r
                <span class="priority-badge" style="background:rgba(242,90,0,0.12);color:var(--risk-very-high);">V. HIGH</span>\r
              </div>\r
              <div class="priority-item" onclick="showTrait('nonmelanoma')">\r
                <div class="priority-dot" style="background:var(--risk-very-high)"></div>\r
                <span class="priority-name">Non-Melanoma Cancer</span>\r
                <span class="priority-badge" style="background:rgba(242,90,0,0.12);color:var(--risk-very-high);">V. HIGH</span>\r
              </div>\r
              <div class="priority-item" onclick="showTrait('psoriasis')">\r
                <div class="priority-dot" style="background:var(--risk-high)"></div>\r
                <span class="priority-name">Psoriasis</span>\r
                <span class="priority-badge" style="background:rgba(255,176,103,0.22);color:#b86319;">HIGH</span>\r
              </div>\r
              <div class="priority-item" onclick="showTrait('rosacea')">\r
                <div class="priority-dot" style="background:var(--risk-high)"></div>\r
                <span class="priority-name">Rosacea</span>\r
                <span class="priority-badge" style="background:rgba(255,176,103,0.22);color:#b86319;">HIGH</span>\r
              </div>\r
              <div class="priority-item" onclick="showTrait('kallikrein')">\r
                <div class="priority-dot" style="background:var(--risk-high)"></div>\r
                <span class="priority-name">Kallikrein-7 Levels</span>\r
                <span class="priority-badge" style="background:rgba(255,176,103,0.22);color:#b86319;">HIGH</span>\r
              </div>\r
            </div>\r
          </div>\r
\r
         \r
            \r
          <!-- Category Summaries -->\r
          <div class="bento-card bento-cat cat-accent-allergies " onclick="showView('allergies')" style="cursor:pointer;">\r
            <div class="card-title">Allergies</div>\r
            <div class="cat-summary-num">4</div>\r
            <div class="cat-summary-label">traits analyzed</div>\r
            <div class="cat-summary-bar"><div class="cat-summary-fill" style="width:55%;background:var(--sage);"></div></div>\r
            <div class="cat-summary-sub">1 High Â· 3 Low or below</div>\r
          </div>\r
          <div class="bento-card bento-cat cat-accent-derm" onclick="showView('dermatological')" style="cursor:pointer;">\r
            <div class="card-title">Dermatological</div>\r
            <div class="cat-summary-num">15</div>\r
            <div class="cat-summary-label">traits analyzed</div>\r
            <div class="cat-summary-bar"><div class="cat-summary-fill" style="width:82%;background:var(--terra);"></div></div>\r
            <div class="cat-summary-sub">2 Very High Â· 3 High</div>\r
          </div>\r
          <div class="bento-card bento-cat cat-accent-aesthetics" onclick="showView('aesthetics')" style="cursor:pointer;">\r
            <div class="card-title AESTHETHIC">Aesthetics</div>\r
            <div class="cat-summary-num">8</div>\r
            <div class="cat-summary-label">traits analyzed</div>\r
            <div class="cat-summary-bar"><div class="cat-summary-fill" style="width:48%;background:var(--gold);"></div></div>\r
            <div class="cat-summary-sub">1 High Â· 3 Medium</div>\r
          </div>\r
          <div class="bento-card bento-cat cat-accent-markers markaesth" onclick="showView('markers')" style="cursor:pointer;">\r
            <div class="card-title ">markers</div>\r
            <div class="cat-summary-num">2</div>\r
            <div class="cat-summary-label">traits analyzed</div>\r
            <div class="cat-summary-bar"><div class="cat-summary-fill" style="width:63%;background:var(--sky);"></div></div>\r
            <div class="cat-summary-sub">1 High Â· 1 Very Low</div>\r
          </div>\r
          <!-- Category Risk Profile â€” SVG ring chart -->\r
          <div class="bento-card bento-radar" id="polarCardWrap">\r
            <div class="polar-header">\r
              <div class="card-title" style="margin-bottom:2px;">Category Risk Profile</div>\r
              <div class="polar-overall-badge">29 traits</div>\r
            </div>\r
\r
            <div class="ring-wrap">\r
              <svg id="ringSvg" viewBox="0 0 200 200" class="ring-svg">\r
                <!-- grid rings -->\r
                <circle cx="100" cy="100" r="88" fill="none" stroke="#F0EBE3" stroke-width="1"/>\r
                <circle cx="100" cy="100" r="66" fill="none" stroke="#F0EBE3" stroke-width="1"/>\r
                <circle cx="100" cy="100" r="44" fill="none" stroke="#F0EBE3" stroke-width="1"/>\r
                <!-- segments injected by JS -->\r
                <g id="ringSegments"></g>\r
                <!-- centre -->\r
                <circle cx="100" cy="100" r="30" fill="#fff" filter="url(#ringShadow)"/>\r
                <defs>\r
                  <filter id="ringShadow" x="-30%" y="-30%" width="160%" height="160%">\r
                    <feDropShadow dx="0" dy="1" stdDeviation="3" flood-color="rgba(0,0,0,0.08)"/>\r
                  </filter>\r
                </defs>\r
                <text id="ringCentreVal" x="100" y="97" text-anchor="middle" class="ring-centre-val">29</text>\r
                <text id="ringCentreLbl" x="100" y="110" text-anchor="middle" class="ring-centre-lbl">traits</text>\r
              </svg>\r
            </div>\r
\r
            <div class="ring-legend" id="ringLegend">\r
              <div class="rl-item" data-idx="0">\r
                <div class="rl-left">\r
                  <span class="rl-swatch" style="--c:#C1634A"></span>\r
                  <span class="rl-name">Dermatological</span>\r
                </div>\r
                <div class="rl-right">\r
                  <div class="rl-bar-track"><div class="rl-bar" style="--w:52%;--c:#C1634A"></div></div>\r
                  <span class="rl-count">15</span>\r
                </div>\r
              </div>\r
              <div class="rl-item" data-idx="1">\r
                <div class="rl-left">\r
                  <span class="rl-swatch" style="--c:#D4A853"></span>\r
                  <span class="rl-name">Aesthetics</span>\r
                </div>\r
                <div class="rl-right">\r
                  <div class="rl-bar-track"><div class="rl-bar" style="--w:28%;--c:#D4A853"></div></div>\r
                  <span class="rl-count">8</span>\r
                </div>\r
              </div>\r
              <div class="rl-item" data-idx="2">\r
                <div class="rl-left">\r
                  <span class="rl-swatch" style="--c:#7B9E87"></span>\r
                  <span class="rl-name">Allergies</span>\r
                </div>\r
                <div class="rl-right">\r
                  <div class="rl-bar-track"><div class="rl-bar" style="--w:14%;--c:#7B9E87"></div></div>\r
                  <span class="rl-count">4</span>\r
                </div>\r
              </div>\r
              <div class="rl-item" data-idx="3">\r
                <div class="rl-left">\r
                  <span class="rl-swatch" style="--c:#6BAED6"></span>\r
                  <span class="rl-name">Markers</span>\r
                </div>\r
                <div class="rl-right">\r
                  <div class="rl-bar-track"><div class="rl-bar" style="--w:7%;--c:#6BAED6"></div></div>\r
                  <span class="rl-count">2</span>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- ALLERGIES -->\r
      <div id="view-allergies" class="view">\r
        <div class="view-intro">Allergy-related traits reflect your genetic predisposition to immune hypersensitivity, eczema, and environmental reactivity.</div>\r
        <div class="traits-grid">\r
          <div class="trait-card" data-risk="high" data-category="allergies" onclick="showTrait('mosquito')">\r
            <div class="trait-risk-strip"><div class="risk-fill risk-high" style="width:72%"></div></div>\r
            <div class="trait-header"><span class="trait-name">Mosquito Bite Sensitivity</span><span class="risk-badge risk-high">High</span></div>\r
            <p class="trait-desc">IL-4 and IgE pathway variants indicate an elevated immune response to mosquito salivary antigens, predicting increased whealing and pruritus.</p>\r
            <div class="trait-footer"><span class="trait-prs">PRS: 1.88</span><span class="trait-pop">81st percentile</span></div>\r
          </div>\r
          <div class="trait-card" data-risk="low" data-category="allergies" onclick="showTrait('eczema')">\r
            <div class="trait-risk-strip"><div class="risk-fill risk-low" style="width:28%"></div></div>\r
            <div class="trait-header"><span class="trait-name">Eczema (Atopic Dermatitis)</span><span class="risk-badge risk-low">Low</span></div>\r
            <p class="trait-desc">FLG and SPINK5 filaggrin-related variants are largely protective, suggesting low lifetime eczema predisposition despite elevated Kallikrein-7 levels.</p>\r
            <div class="trait-footer"><span class="trait-prs">PRS: 0.73</span><span class="trait-pop">25th percentile</span></div>\r
          </div>\r
          <div class="trait-card" data-risk="medium" data-category="allergies" onclick="showTrait('allergic-disease')">\r
            <div class="trait-risk-strip"><div class="risk-fill risk-medium" style="width:52%"></div></div>\r
            <div class="trait-header"><span class="trait-name">Allergic Disease (General)</span><span class="risk-badge risk-medium">Medium</span></div>\r
            <p class="trait-desc">Broad atopic diathesis variants across GWAS loci show moderate polygenic risk for allergic disease spectrum.</p>\r
            <div class="trait-footer"><span class="trait-prs">PRS: 1.29</span><span class="trait-pop">66th percentile</span></div>\r
          </div>\r
          <div class="trait-card" data-risk="very-low" data-category="allergies" onclick="showTrait('hay-fever')">\r
            <div class="trait-risk-strip"><div class="risk-fill risk-very-low" style="width:18%"></div></div>\r
            <div class="trait-header"><span class="trait-name">Hay Fever (Allergic Rhinitis)</span><span class="risk-badge risk-very-low">Very Low</span></div>\r
            <p class="trait-desc">HLA and cytokine gene variants are highly protective, conferring very low risk for pollen-triggered rhinoconjunctivitis.</p>\r
            <div class="trait-footer"><span class="trait-prs">PRS: 0.56</span><span class="trait-pop">16th percentile</span></div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- DERMATOLOGICAL -->\r
      <div id="view-dermatological" class="view">\r
        <div class="view-intro">Dermatological disease traits reflect genetic risk for clinically significant skin conditions requiring monitoring and management.</div>\r
        <div class="traits-grid" id="derm-grid">\r
          <div class="trait-card" data-risk="very-high" data-category="dermatological" onclick="showTrait('nonmelanoma')">\r
            <div class="trait-risk-strip"><div class="risk-fill risk-very-high" style="width:92%"></div></div>\r
            <div class="trait-header"><span class="trait-name">Non-Melanoma Skin Cancer</span><span class="risk-badge risk-very-high">Very High</span></div>\r
            <p class="trait-desc">MC1R, PTCH1, and TP53 variants significantly elevate squamous and basal cell carcinoma risk. Immediate dermatological follow-up recommended.</p>\r
            <div class="trait-footer"><span class="trait-prs">PRS: 2.47</span><span class="trait-pop">95th percentile</span></div>\r
          </div>\r
          <div class="trait-card" data-risk="very-high" data-category="dermatological" onclick="showTrait('keratinocyte')">\r
            <div class="trait-risk-strip"><div class="risk-fill risk-very-high" style="width:88%"></div></div>\r
            <div class="trait-header"><span class="trait-name">Keratinocyte Cancer</span><span class="risk-badge risk-very-high">Very High</span></div>\r
            <p class="trait-desc">Multiple GWAS risk loci in keratinocyte-differentiation genes converge on very high lifetime risk. Annual dermatoscopic screening essential.</p>\r
            <div class="trait-footer"><span class="trait-prs">PRS: 2.31</span><span class="trait-pop">92nd percentile</span></div>\r
          </div>\r
          <div class="trait-card" data-risk="high" data-category="dermatological" onclick="showTrait('psoriasis')">\r
            <div class="trait-risk-strip"><div class="risk-fill risk-high" style="width:74%"></div></div>\r
            <div class="trait-header"><span class="trait-name">Psoriasis</span><span class="risk-badge risk-high">High</span></div>\r
            <p class="trait-desc">HLA-C*06:02 and IL-23 pathway variants significantly increase psoriasis susceptibility.</p>\r
            <div class="trait-footer"><span class="trait-prs">PRS: 1.94</span><span class="trait-pop">85th percentile</span></div>\r
          </div>\r
          <div class="trait-card" data-risk="high" data-category="dermatological" onclick="showTrait('rosacea')">\r
            <div class="trait-risk-strip"><div class="risk-fill risk-high" style="width:68%"></div></div>\r
            <div class="trait-header"><span class="trait-name">Rosacea</span><span class="risk-badge risk-high">High</span></div>\r
            <p class="trait-desc">Cathelicidin and inflammatory vascular response genes show elevated rosacea predisposition.</p>\r
            <div class="trait-footer"><span class="trait-prs">PRS: 1.78</span><span class="trait-pop">80th percentile</span></div>\r
          </div>\r
          <div class="trait-card" data-risk="high" data-category="dermatological" onclick="showTrait('acne')">\r
            <div class="trait-risk-strip"><div class="risk-fill risk-high" style="width:62%"></div></div>\r
            <div class="trait-header"><span class="trait-name">Acne Vulgaris</span><span class="risk-badge risk-high">High</span></div>\r
            <p class="trait-desc">Sebaceous gland activity and androgen receptor variants indicate above-average acne susceptibility.</p>\r
            <div class="trait-footer"><span class="trait-prs">PRS: 1.61</span><span class="trait-pop">77th percentile</span></div>\r
          </div>\r
          <div class="trait-card" data-risk="medium" data-category="dermatological" onclick="showTrait('melanoma')">\r
            <div class="trait-risk-strip"><div class="risk-fill risk-medium" style="width:55%"></div></div>\r
            <div class="trait-header"><span class="trait-name">Melanoma</span><span class="risk-badge risk-medium">Medium</span></div>\r
            <p class="trait-desc">CDKN2A and MC1R risk alleles moderately elevate melanoma susceptibility. Sun protection advised.</p>\r
            <div class="trait-footer"><span class="trait-prs">PRS: 1.38</span><span class="trait-pop">69th percentile</span></div>\r
          </div>\r
          <div class="trait-card" data-risk="medium" data-category="dermatological" onclick="showTrait('vitiligo')">\r
            <div class="trait-risk-strip"><div class="risk-fill risk-medium" style="width:50%"></div></div>\r
            <div class="trait-header"><span class="trait-name">Vitiligo</span><span class="risk-badge risk-medium">Medium</span></div>\r
            <p class="trait-desc">HLA and CTLA4 immune regulation variants indicate moderate predisposition to melanocyte autoimmune loss.</p>\r
            <div class="trait-footer"><span class="trait-prs">PRS: 1.26</span><span class="trait-pop">65th percentile</span></div>\r
          </div>\r
          <div class="trait-card" data-risk="medium" data-category="dermatological" onclick="showTrait('soft-tissue')">\r
            <div class="trait-risk-strip"><div class="risk-fill risk-medium" style="width:42%"></div></div>\r
            <div class="trait-header"><span class="trait-name">Soft Tissue Diseases</span><span class="risk-badge risk-medium">Medium</span></div>\r
            <p class="trait-desc">Connective tissue remodeling gene variants indicate moderate risk for soft tissue complications.</p>\r
            <div class="trait-footer"><span class="trait-prs">PRS: 1.09</span><span class="trait-pop">58th percentile</span></div>\r
          </div>\r
          <div class="trait-card" data-risk="low" data-category="dermatological" onclick="showTrait('urticaria')">\r
            <div class="trait-risk-strip"><div class="risk-fill risk-low" style="width:25%"></div></div>\r
            <div class="trait-header"><span class="trait-name">Urticaria (Hives)</span><span class="risk-badge risk-low">Low</span></div>\r
            <p class="trait-desc">General urticaria susceptibility is low based on complement and histamine pathway variants.</p>\r
            <div class="trait-footer"><span class="trait-prs">PRS: 0.71</span><span class="trait-pop">27th percentile</span></div>\r
          </div>\r
          <div class="trait-card" data-risk="low" data-category="dermatological" onclick="showTrait('urticaria-chronic')">\r
            <div class="trait-risk-strip"><div class="risk-fill risk-low" style="width:30%"></div></div>\r
            <div class="trait-header"><span class="trait-name">Chronic Spontaneous Urticaria</span><span class="risk-badge risk-low">Low</span></div>\r
            <p class="trait-desc">Mast cell degranulation pathway variants are largely neutral, conferring low chronic hive risk.</p>\r
            <div class="trait-footer"><span class="trait-prs">PRS: 0.81</span><span class="trait-pop">33rd percentile</span></div>\r
          </div>\r
          <div class="trait-card" data-risk="low" data-category="dermatological" onclick="showTrait('leprosy')">\r
            <div class="trait-risk-strip"><div class="risk-fill risk-low" style="width:18%"></div></div>\r
            <div class="trait-header"><span class="trait-name">Leprosy</span><span class="risk-badge risk-low">Low</span></div>\r
            <p class="trait-desc">Innate immunity gene NOD2 and LRRK2 variants indicate relatively strong immune defense against M. leprae.</p>\r
            <div class="trait-footer"><span class="trait-prs">PRS: 0.58</span><span class="trait-pop">19th percentile</span></div>\r
          </div>\r
          <div class="trait-card" data-risk="very-low" data-category="dermatological" onclick="showTrait('keloid')">\r
            <div class="trait-risk-strip"><div class="risk-fill risk-very-low" style="width:12%"></div></div>\r
            <div class="trait-header"><span class="trait-name">Keloid</span><span class="risk-badge risk-very-low">Very Low</span></div>\r
            <p class="trait-desc">TGF-Î² pathway variants indicate very low predisposition to keloid scar formation after injury.</p>\r
            <div class="trait-footer"><span class="trait-prs">PRS: 0.42</span><span class="trait-pop">11th percentile</span></div>\r
          </div>\r
          <div class="trait-card" data-risk="very-low" data-category="dermatological" onclick="showTrait('dermatomyositis')">\r
            <div class="trait-risk-strip"><div class="risk-fill risk-very-low" style="width:8%"></div></div>\r
            <div class="trait-header"><span class="trait-name">Dermatomyositis</span><span class="risk-badge risk-very-low">Very Low</span></div>\r
            <p class="trait-desc">Autoimmune muscle-skin inflammation variants show protective profile in your genomic data.</p>\r
            <div class="trait-footer"><span class="trait-prs">PRS: 0.31</span><span class="trait-pop">8th percentile</span></div>\r
          </div>\r
          <div class="trait-card" data-risk="very-low" data-category="dermatological" onclick="showTrait('dupuytren')">\r
            <div class="trait-risk-strip"><div class="risk-fill risk-very-low" style="width:15%"></div></div>\r
            <div class="trait-header"><span class="trait-name">Dupuytren's Disease</span><span class="risk-badge risk-very-low">Very Low</span></div>\r
            <p class="trait-desc">Palmar fibromatosis risk variants are largely absent in your profile, conferring strong protection.</p>\r
            <div class="trait-footer"><span class="trait-prs">PRS: 0.49</span><span class="trait-pop">15th percentile</span></div>\r
          </div>\r
          <div class="trait-card" data-risk="high" data-category="dermatological" onclick="showTrait('hidradenitis')">\r
            <div class="trait-risk-strip"><div class="risk-fill risk-high" style="width:66%"></div></div>\r
            <div class="trait-header"><span class="trait-name">Hidradenitis Suppurativa</span><span class="risk-badge risk-high">High</span></div>\r
            <p class="trait-desc">Notch signaling and TNF-Î± variants predict elevated risk for chronic inflammatory follicular skin disease.</p>\r
            <div class="trait-footer"><span class="trait-prs">PRS: 1.72</span><span class="trait-pop">78th percentile</span></div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- AESTHETICS -->\r
      <div id="view-aesthetics" class="view">\r
        <div class="view-intro">Aesthetic traits represent your genetic baseline for visible skin characteristics â€” factors that influence aging, pigmentation, and structural integrity.</div>\r
        <div class="traits-grid" id="aesthetics-grid">\r
          <div class="trait-card" data-risk="medium" data-category="aesthetics" onclick="showTrait('eye-wrinkles')">\r
            <div class="trait-risk-strip"><div class="risk-fill risk-medium" style="width:54%"></div></div>\r
            <div class="trait-header"><span class="trait-name">Eye Wrinkles</span><span class="risk-badge risk-medium">Medium</span></div>\r
            <p class="trait-desc">Periorbital collagen synthesis gene variants indicate moderate predisposition to crow's feet formation.</p>\r
            <div class="trait-footer"><span class="trait-prs">PRS: 1.33</span><span class="trait-pop">70th percentile</span></div>\r
          </div>\r
          <div class="trait-card" data-risk="medium" data-category="aesthetics" onclick="showTrait('facial-wrinkles')">\r
            <div class="trait-risk-strip"><div class="risk-fill risk-medium" style="width:48%"></div></div>\r
            <div class="trait-header"><span class="trait-name">Facial Wrinkles</span><span class="risk-badge risk-medium">Medium</span></div>\r
            <p class="trait-desc">Global collagen and elastin turnover variants show average predisposition for facial aging.</p>\r
            <div class="trait-footer"><span class="trait-prs">PRS: 1.19</span><span class="trait-pop">62nd percentile</span></div>\r
          </div>\r
          <div class="trait-card" data-risk="low" data-category="aesthetics" onclick="showTrait('pigmentation-uv')">\r
            <div class="trait-risk-strip"><div class="risk-fill risk-low" style="width:32%"></div></div>\r
            <div class="trait-header"><span class="trait-name">Pigmentation (UV)</span><span class="risk-badge risk-low">Low</span></div>\r
            <p class="trait-desc">MC1R and OCA2 variants suggest relatively stable UV-induced pigmentation response with lower spotting risk.</p>\r
            <div class="trait-footer"><span class="trait-prs">PRS: 0.84</span><span class="trait-pop">36th percentile</span></div>\r
          </div>\r
          <div class="trait-card" data-risk="medium" data-category="aesthetics" onclick="showTrait('pigmentation-polarized')">\r
            <div class="trait-risk-strip"><div class="risk-fill risk-medium" style="width:58%"></div></div>\r
            <div class="trait-header"><span class="trait-name">Pigmentation (Polarized Light)</span><span class="risk-badge risk-medium">Medium</span></div>\r
            <p class="trait-desc">Sub-surface melanin distribution variants indicate moderate risk of uneven deep pigmentation patterns.</p>\r
            <div class="trait-footer"><span class="trait-prs">PRS: 1.44</span><span class="trait-pop">73rd percentile</span></div>\r
          </div>\r
          <div class="trait-card" data-risk="very-low" data-category="aesthetics" onclick="showTrait('hydration')">\r
            <div class="trait-risk-strip"><div class="risk-fill risk-very-low" style="width:14%"></div></div>\r
            <div class="trait-header"><span class="trait-name">Skin Hydration</span><span class="risk-badge risk-very-low">Very Low</span></div>\r
            <p class="trait-desc">Aquaporin and NMF-related gene variants are highly favorable, predicting excellent baseline skin moisture retention.</p>\r
            <div class="trait-footer"><span class="trait-prs">PRS: 0.45</span><span class="trait-pop">13th percentile</span></div>\r
          </div>\r
          <div class="trait-card" data-risk="very-low" data-category="aesthetics" onclick="showTrait('elasticity')">\r
            <div class="trait-risk-strip"><div class="risk-fill risk-very-low" style="width:10%"></div></div>\r
            <div class="trait-header"><span class="trait-name">Skin Elasticity</span><span class="risk-badge risk-very-low">Very Low</span></div>\r
            <p class="trait-desc">Elastin and fibrillin gene variants are highly protective, conferring excellent skin rebound characteristics.</p>\r
            <div class="trait-footer"><span class="trait-prs">PRS: 0.38</span><span class="trait-pop">9th percentile</span></div>\r
          </div>\r
          <div class="trait-card" data-risk="low" data-category="aesthetics" onclick="showTrait('reflectance')">\r
            <div class="trait-risk-strip"><div class="risk-fill risk-low" style="width:28%"></div></div>\r
            <div class="trait-header"><span class="trait-name">Skin Reflectance</span><span class="risk-badge risk-low">Low</span></div>\r
            <p class="trait-desc">Melanin density and light-scattering variants indicate a luminous, high-reflectance baseline skin tone.</p>\r
            <div class="trait-footer"><span class="trait-prs">PRS: 0.75</span><span class="trait-pop">29th percentile</span></div>\r
          </div>\r
          <div class="trait-card" data-risk="high" data-category="aesthetics" onclick="showTrait('sunburn')">\r
            <div class="trait-risk-strip"><div class="risk-fill risk-high" style="width:76%"></div></div>\r
            <div class="trait-header"><span class="trait-name">Sunburn Sensitivity</span><span class="risk-badge risk-high">High</span></div>\r
            <p class="trait-desc">MC1R loss-of-function variants and minimal melanin buffering increase UV erythema response substantially.</p>\r
            <div class="trait-footer"><span class="trait-prs">PRS: 1.96</span><span class="trait-pop">86th percentile</span></div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- MARKERS -->\r
      <div id="view-markers" class="view">\r
        <div class="view-intro">Skin health biomarkers reflect your genetic set points for key molecular factors governing barrier function and skin integrity.</div>\r
        <div class="traits-grid" id="markers-grid">\r
          <div class="trait-card" data-risk="high" data-category="markers" onclick="showTrait('kallikrein')">\r
            <div class="trait-risk-strip"><div class="risk-fill risk-high" style="width:70%"></div></div>\r
            <div class="trait-header"><span class="trait-name">Kallikrein-7 Levels</span><span class="risk-badge risk-high">High</span></div>\r
            <p class="trait-desc">Kallikrein-7 (KLK7) is a serine protease critical for skin desquamation. Elevated genetic levels can over-digest the corneal layer, leading to barrier compromise, sensitivity, and inflammatory skin conditions. Your variants in the KLK7 promoter region predict higher than average serine protease activity.</p>\r
            <div class="trait-footer"><span class="trait-prs">PRS: 1.82</span><span class="trait-pop">83rd percentile</span></div>\r
          </div>\r
          <div class="trait-card" data-risk="very-low" data-category="markers" onclick="showTrait('ceramide')">\r
            <div class="trait-risk-strip"><div class="risk-fill risk-very-low" style="width:11%"></div></div>\r
            <div class="trait-header"><span class="trait-name">Ceramide Levels</span><span class="risk-badge risk-very-low">Very Low</span></div>\r
            <p class="trait-desc">Ceramides are essential lipids that form the skin's waterproof barrier. Higher genetic ceramide production is strongly protective against eczema, sensitivity, and transepidermal water loss. Your CERS2 and SMPD1 variant profile predicts excellent ceramide synthesis.</p>\r
            <div class="trait-footer"><span class="trait-prs">PRS: 0.41</span><span class="trait-pop">10th percentile</span></div>\r
          </div>\r
        </div>\r
        <div class="biomarker-chart-section">\r
          <div class="card-title">Biomarker Genetic Set Points</div>\r
          <canvas id="biomarkerChart" height="200"></canvas>\r
        </div>\r
      </div>\r
\r
      <!-- RECOMMENDATIONS -->\r
      <div id="view-recommendations" class="view">\r
        <div class="recs-layout">\r
          <div class="rec-card rec-urgent">\r
            <div class="rec-priority-label">ðŸš¨ Critical Priority</div>\r
            <h3>Sun Protection Protocol</h3>\r
            <p>Your Very High risk for Non-Melanoma Skin Cancer and Keratinocyte Cancer, combined with High Sunburn Sensitivity, makes comprehensive photoprotection non-negotiable.</p>\r
            <ul class="rec-list">\r
              <li>Apply SPF 50+ mineral sunscreen (zinc oxide) every morning, rain or shine</li>\r
              <li>Reapply every 90 minutes during outdoor exposure</li>\r
              <li>Wear UPF 50+ clothing for extended outdoor activity</li>\r
              <li>Seek shade between 10amâ€“4pm (peak UV index)</li>\r
            </ul>\r
            <div class="rec-genes">Related Variants: MC1R p.R160W Â· PTCH1 rs357564 Â· OCA2 rs1800407</div>\r
          </div>\r
          <div class="rec-card rec-high">\r
            <div class="rec-priority-label">âš ï¸ High Priority</div>\r
            <h3>Annual Dermatology Screening</h3>\r
            <p>Individuals with your PRS profile for skin cancer have significantly higher lifetime incidence. Proactive monitoring dramatically improves outcomes.</p>\r
            <ul class="rec-list">\r
              <li>Schedule full-body skin exam annually with a board-certified dermatologist</li>\r
              <li>Perform monthly self-examinations using the ABCDE method</li>\r
              <li>Photograph and track any new or changing moles</li>\r
              <li>Ask your dermatologist about dermoscopy screening tools</li>\r
            </ul>\r
            <div class="rec-genes">Related Variants: CDKN2A Â· TP53 rs1042522 Â· TERT rs2736098</div>\r
          </div>\r
          <div class="rec-card rec-medium">\r
            <div class="rec-priority-label">ðŸ“‹ Moderate Priority</div>\r
            <h3>Anti-Inflammatory Skincare Routine</h3>\r
            <p>Elevated Psoriasis, Rosacea, and Allergic Disease risk call for a calming, barrier-supportive skincare approach to minimize trigger events.</p>\r
            <ul class="rec-list">\r
              <li>Use fragrance-free, hypoallergenic cleansers (pH 5.5â€“6.0)</li>\r
              <li>Incorporate niacinamide 4â€“5% to reduce inflammation and reinforce barrier</li>\r
              <li>Avoid SLS, parabens, and synthetic fragrances</li>\r
              <li>Consider an elimination diet evaluation with your physician for food-triggered flares</li>\r
            </ul>\r
            <div class="rec-genes">Related Variants: HLA-C*06:02 Â· IL23R Â· CARD14</div>\r
          </div>\r
          <div class="rec-card rec-low">\r
            <div class="rec-priority-label">âœ… Maintenance</div>\r
            <h3>Leverage Your Protective Advantages</h3>\r
            <p>Your exceptional ceramide levels and skin elasticity represent genuine genetic gifts. Strategic routines can amplify these natural advantages.</p>\r
            <ul class="rec-list">\r
              <li>Use ceramide-containing moisturizers to reinforce your already-strong barrier</li>\r
              <li>Collagen-stimulating treatments (retinoids, Vitamin C) will be especially effective given your elastin profile</li>\r
              <li>Hydration is a natural strength â€” focus budget on UV protection instead</li>\r
              <li>Maintain gut-skin axis health with probiotic support</li>\r
            </ul>\r
            <div class="rec-genes">Related Variants: CERS2 Â· FBN1 Â· AQP3</div>\r
          </div>\r
        </div>\r
        <div class="skin-plan-cta">\r
          <div>\r
            <h3>dev</h3>\r
            <p>Our genomics team can build a fully customized skincare and medical monitoring protocol based on your unique genetic profile.</p>\r
          </div>\r
          <button class="btn-primary-lg">Improve My Skin Plan</button>\r
        </div>\r
      </div>\r
\r
    </div><!-- /views-container -->\r
  </main>\r
  </div><!-- /dashboard-body -->\r
\r
  <!-- MOBILE BOTTOM NAV -->\r
 \r
\r
</div>\r
\r
<!-- MODAL -->\r
<div id="trait-modal" class="modal-overlay" onclick="closeModal(event)">\r
  <div class="modal-box" onclick="event.stopPropagation()">\r
    <button class="modal-close" onclick="closeModal()">âœ•</button>\r
    <div id="modal-content"></div>\r
  </div>\r
</div>\r
\r
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"><\/script>\r
<script src="index.js"><\/script>\r
<script>\r
const traitAncestryProfiles = {\r
  mosquito: [['African', 'High'], ['American', 'Moderate'], ['East Asian', 'Low'], ['European', 'High'], ['South Asian', 'Moderate']],\r
  eczema: [['African', 'Low'], ['American', 'Low'], ['East Asian', 'Very Low'], ['European', 'Low'], ['South Asian', 'Moderate']],\r
  'allergic-disease': [['African', 'Moderate'], ['American', 'Moderate'], ['East Asian', 'Low'], ['European', 'Moderate'], ['South Asian', 'Low']],\r
  'hay-fever': [['African', 'Very Low'], ['American', 'Low'], ['East Asian', 'Very Low'], ['European', 'Low'], ['South Asian', 'Very Low']],\r
  nonmelanoma: [['African', 'Low'], ['American', 'Moderate'], ['East Asian', 'Low'], ['European', 'Very High'], ['South Asian', 'Moderate']],\r
  keratinocyte: [['African', 'Low'], ['American', 'Moderate'], ['East Asian', 'Low'], ['European', 'Very High'], ['South Asian', 'Low']],\r
  psoriasis: [['African', 'Moderate'], ['American', 'High'], ['East Asian', 'Low'], ['European', 'High'], ['South Asian', 'Moderate']],\r
  rosacea: [['African', 'Low'], ['American', 'Moderate'], ['East Asian', 'Very Low'], ['European', 'High'], ['South Asian', 'Low']],\r
  acne: [['African', 'Moderate'], ['American', 'High'], ['East Asian', 'Moderate'], ['European', 'Moderate'], ['South Asian', 'High']],\r
  melanoma: [['African', 'Very Low'], ['American', 'Low'], ['East Asian', 'Very Low'], ['European', 'High'], ['South Asian', 'Low']],\r
  vitiligo: [['African', 'Low'], ['American', 'Moderate'], ['East Asian', 'Moderate'], ['European', 'Moderate'], ['South Asian', 'High']],\r
  'soft-tissue': [['African', 'Low'], ['American', 'Moderate'], ['East Asian', 'Low'], ['European', 'Moderate'], ['South Asian', 'Low']],\r
  urticaria: [['African', 'Low'], ['American', 'Low'], ['East Asian', 'Very Low'], ['European', 'Low'], ['South Asian', 'Very Low']],\r
  'urticaria-chronic': [['African', 'Low'], ['American', 'Moderate'], ['East Asian', 'Very Low'], ['European', 'Low'], ['South Asian', 'Low']],\r
  leprosy: [['African', 'Very Low'], ['American', 'Low'], ['East Asian', 'Low'], ['European', 'Very Low'], ['South Asian', 'Low']],\r
  keloid: [['African', 'Moderate'], ['American', 'Low'], ['East Asian', 'Very Low'], ['European', 'Very Low'], ['South Asian', 'Low']],\r
  dermatomyositis: [['African', 'Very Low'], ['American', 'Very Low'], ['East Asian', 'Low'], ['European', 'Very Low'], ['South Asian', 'Low']],\r
  dupuytren: [['African', 'Very Low'], ['American', 'Low'], ['East Asian', 'Very Low'], ['European', 'Low'], ['South Asian', 'Very Low']],\r
  hidradenitis: [['African', 'Moderate'], ['American', 'High'], ['East Asian', 'Low'], ['European', 'High'], ['South Asian', 'Moderate']],\r
  'eye-wrinkles': [['African', 'Low'], ['American', 'Moderate'], ['East Asian', 'Low'], ['European', 'Moderate'], ['South Asian', 'Moderate']],\r
  'facial-wrinkles': [['African', 'Low'], ['American', 'Moderate'], ['East Asian', 'Low'], ['European', 'Moderate'], ['South Asian', 'Low']],\r
  'pigmentation-uv': [['African', 'Very Low'], ['American', 'Low'], ['East Asian', 'Low'], ['European', 'Moderate'], ['South Asian', 'Low']],\r
  'pigmentation-polarized': [['African', 'Low'], ['American', 'Moderate'], ['East Asian', 'Moderate'], ['European', 'Moderate'], ['South Asian', 'Moderate']],\r
  hydration: [['African', 'Moderate'], ['American', 'Low'], ['East Asian', 'Low'], ['European', 'Very Low'], ['South Asian', 'Low']],\r
  elasticity: [['African', 'Low'], ['American', 'Low'], ['East Asian', 'Very Low'], ['European', 'Very Low'], ['South Asian', 'Low']],\r
  reflectance: [['African', 'Very Low'], ['American', 'Low'], ['East Asian', 'Low'], ['European', 'Moderate'], ['South Asian', 'Low']],\r
  sunburn: [['African', 'Very Low'], ['American', 'Low'], ['East Asian', 'Very Low'], ['European', 'Very High'], ['South Asian', 'Low']],\r
  kallikrein: [['African', 'Moderate'], ['American', 'Moderate'], ['East Asian', 'Low'], ['European', 'High'], ['South Asian', 'Low']],\r
  ceramide: [['African', 'Moderate'], ['American', 'Low'], ['East Asian', 'Low'], ['European', 'Very Low'], ['South Asian', 'Low']]\r
};\r
\r
function ancestryRiskClass(level) {\r
  return String(level).toLowerCase().replace(/\\s+/g, '-');\r
}\r
\r
function getTraitIdFromCard(card) {\r
  const onclickValue = card.getAttribute('onclick') || '';\r
  const match = onclickValue.match(/showTrait\\('([^']+)'\\)/);\r
  return match ? match[1] : null;\r
}\r
\r
function buildTraitAncestryTable(traitId) {\r
  const rows = traitAncestryProfiles[traitId];\r
  if (!rows || !rows.length) return null;\r
\r
  const table = document.createElement('div');\r
  table.className = 'trait-ancestry-table';\r
  table.innerHTML = \`\r
    <div class="trait-ancestry-head">\r
      <span>Ancestry</span>\r
      <span>Genetic Risk</span>\r
    </div>\r
    <div class="trait-ancestry-body">\r
      \${rows.map(([ancestry, risk]) => \`\r
        <div class="trait-ancestry-row">\r
          <span>\${ancestry}</span>\r
          <span class="trait-ancestry-risk">\r
            <span>\${risk}</span>\r
            <i class="trait-ancestry-dot risk-\${ancestryRiskClass(risk)}"></i>\r
          </span>\r
        </div>\r
      \`).join('')}\r
    </div>\r
  \`;\r
\r
  return table;\r
}\r
\r
const originalShowTrait = window.showTrait;\r
window.showTrait = function(id) {\r
  if (typeof originalShowTrait === 'function') {\r
    originalShowTrait(id);\r
  }\r
\r
  const modalContent = document.getElementById('modal-content');\r
  if (!modalContent) return;\r
\r
  const existingTable = modalContent.querySelector('.trait-ancestry-table');\r
  if (existingTable) existingTable.remove();\r
\r
  const ancestryTable = buildTraitAncestryTable(id);\r
  if (!ancestryTable) return;\r
\r
  const modalDesc = modalContent.querySelector('.modal-desc');\r
  const geneTableWrap = modalContent.querySelector('.modal-gene-table-wrap');\r
\r
  if (geneTableWrap) {\r
    modalContent.insertBefore(ancestryTable, geneTableWrap);\r
  } else if (modalDesc && modalDesc.nextSibling) {\r
    modalContent.insertBefore(ancestryTable, modalDesc.nextSibling);\r
  } else if (modalDesc) {\r
    modalDesc.after(ancestryTable);\r
  } else {\r
    modalContent.appendChild(ancestryTable);\r
  }\r
};\r
<\/script>\r
<script>\r
function toggleDist2(row) {\r
  const traits = row.querySelector('.dist2-traits');\r
  const isOpen = row.classList.contains('dist2-open');\r
  // close all\r
  document.querySelectorAll('.dist2-row').forEach(r => {\r
    r.classList.remove('dist2-open');\r
    r.querySelector('.dist2-traits').style.display = 'none';\r
  });\r
  if (!isOpen) {\r
    row.classList.add('dist2-open');\r
    traits.style.display = 'flex';\r
  }\r
}\r
\r
/* â”€â”€ RC accordion smooth animation setup â”€â”€ */\r
const rcItems = Array.from(document.querySelectorAll('.rc-item'));\r
let rcIndex = 0;\r
let rcAutoTimer = null;\r
\r
// Init: close all items on load\r
document.querySelectorAll('.rc-expand-body').forEach(body => {\r
  body.style.overflow = 'hidden';\r
  body.style.transition = 'max-height 0.38s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease';\r
  body.style.maxHeight = '0';\r
  body.style.opacity = '0';\r
});\r
rcItems.forEach(item => {\r
  item.classList.remove('rc-expanded');\r
  item.querySelector('.rc-chevron').style.transform = '';\r
});\r
\r
function rcOpen(item) {\r
  item.classList.add('rc-expanded');\r
  const body = item.querySelector('.rc-expand-body');\r
  const chevron = item.querySelector('.rc-chevron');\r
  requestAnimationFrame(() => {\r
    body.style.maxHeight = body.scrollHeight + 'px';\r
    body.style.opacity = '1';\r
  });\r
  chevron.style.transform = 'rotate(180deg)';\r
}\r
\r
function rcClose(item) {\r
  item.classList.remove('rc-expanded');\r
  const body = item.querySelector('.rc-expand-body');\r
  const chevron = item.querySelector('.rc-chevron');\r
  body.style.maxHeight = '0';\r
  body.style.opacity = '0';\r
  chevron.style.transform = '';\r
}\r
\r
function rcAutoAdvance() {\r
  rcItems.forEach(el => rcClose(el));\r
  rcIndex = (rcIndex + 1) % rcItems.length;\r
  rcOpen(rcItems[rcIndex]);\r
}\r
\r
function toggleRcItem(item) {\r
  const isOpen = item.classList.contains('rc-expanded');\r
  rcItems.forEach(el => rcClose(el));\r
\r
  if (!isOpen) {\r
    // Open this item and start/resume auto-advance from here\r
    rcOpen(item);\r
    rcIndex = rcItems.indexOf(item);\r
    clearInterval(rcAutoTimer);\r
    rcAutoTimer = setInterval(rcAutoAdvance, 3000);\r
  } else {\r
    // User closed â€” stop auto-advance entirely\r
    clearInterval(rcAutoTimer);\r
    rcAutoTimer = null;\r
  }\r
}\r
<\/script>\r
</body>\r
</html>\r
\r
\r
\r
\r
\r
\r
`,lh=`\uFEFF*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }\r
    html { scroll-behavior: smooth; }\r
\r
    :root {\r
      --cream:    #F7F3EE;\r
      --cream2:   #EFE9DF;\r
      --sand:     #D9CEBD;\r
      --sage:     #7B9E87;\r
      --sage-l:   #A8C4B0;\r
      --sage-d:   #4A7055;\r
      --forest:   #1E3A2F;\r
      --terra:    #C1634A;\r
      --terra-l:  #E8907A;\r
      --gold:     #D4A853;\r
      --gold-l:   #EDD187;\r
      --sky:      #6BAED6;\r
      --sky-l:    #AED6F1;\r
      --plum:     #8B5E83;\r
      --ink:      #1A1A1A;\r
      --ink2:     #2D2D2D;\r
      --muted:    #6B6357;\r
      --muted-l:  #9E9589;\r
      --white:    #FFFFFF;\r
\r
      --risk-very-high: #F25A00;\r
      --risk-high:      #FFB067;\r
      --risk-medium:    #928b8f;\r
      --risk-low:       #B4ACD9;\r
      --risk-very-low:  #6A45A5;\r
      --risk-very-high-bg: #FFF0E6;\r
      --risk-high-bg:      #FFF3E8;\r
      --risk-medium-bg:    #F3F3F4;\r
      --risk-low-bg:       #F2EEFB;\r
      --risk-very-low-bg:  #EEE7FA;\r
\r
      --radius-sm: 10px;\r
      --radius-md: 16px;\r
      --radius-lg: 24px;\r
      --radius-xl: 32px;\r
\r
      --shadow-sm: 0 1px 3px rgba(26,26,26,0.06), 0 1px 2px rgba(26,26,26,0.04);\r
      --shadow-md: 0 4px 16px rgba(26,26,26,0.08), 0 2px 4px rgba(26,26,26,0.04);\r
      --shadow-lg: 0 12px 40px rgba(26,26,26,0.12), 0 4px 8px rgba(26,26,26,0.06);\r
\r
      --sidebar-w: 260px;\r
    }\r
\r
    body {\r
      font-family: 'Outfit', sans-serif;\r
      background: var(--cream);\r
      color: var(--ink);\r
      min-height: 100vh;\r
      -webkit-font-smoothing: antialiased;\r
      font-size: 14px;\r
      line-height: 1.6;\r
    }\r
\r
    .page { display: none; min-height: 100vh; }\r
    .page.active { display: block; }\r
    #dashboard-page.active {\r
      display: flex;\r
      flex-direction: column;\r
      min-height: 100vh;\r
    }\r
\r
    /* ============================================================\r
       LANDING PAGE\r
    ============================================================ */\r
    #landing-page { background: var(--cream); }\r
\r
    /* Landing Nav */\r
    .landing-nav {\r
      position: sticky; top: 0; z-index: 100;\r
      display: flex; align-items: center; justify-content: space-between;\r
      padding: 20px 64px;\r
      background: rgba(247,243,238,0.88);\r
      backdrop-filter: blur(20px);\r
      border-bottom: 1px solid var(--sand);\r
    }\r
    .nav-brand { display: flex; align-items: center; gap: 10px; }\r
    .brand-dot {\r
      width: 34px; height: 34px; border-radius: 50%;\r
      background: var(--forest);\r
      display: flex; align-items: center; justify-content: center;\r
    }\r
    .brand-dot span { color: var(--sage-l); font-family: 'Lora', serif; font-size: 14px; font-style: italic; font-weight: 600; }\r
    .brand-name { font-family: 'Lora', serif; font-size: 22px; font-weight: 600; color: var(--forest); letter-spacing: -0.3px; }\r
    .nav-links { display: flex; align-items: center; gap: 36px; }\r
    .nav-links a { text-decoration: none; color: var(--muted); font-size: 14px; font-weight: 500; transition: color 0.2s; }\r
    .nav-links a:hover { color: var(--forest); }\r
    .nav-cta {\r
      background: var(--forest) !important; color: var(--sage-l) !important;\r
      padding: 9px 22px; border-radius: 100px;\r
      font-weight: 600 !important; font-size: 13px !important;\r
      transition: background 0.2s, transform 0.15s !important;\r
    }\r
    .nav-cta:hover { background: var(--sage-d) !important; transform: translateY(-1px); }\r
\r
    /* HERO */\r
    .hero {\r
      min-height: calc(100vh - 74px);\r
      display: grid; grid-template-columns: 1fr 1fr;\r
      align-items: center; gap: 80px;\r
      padding: 80px 64px;\r
      position: relative; overflow: hidden;\r
    }\r
    .hero::before {\r
      content: '';\r
      position: absolute; inset: 0;\r
      background: radial-gradient(ellipse 60% 80% at 80% 50%, rgb(123, 158, 135) 0%, transparent 60%),\r
                  radial-gradient(ellipse 40% 60% at 20% 80%, rgba(193,99,74,0.07) 0%, transparent 50%);\r
      pointer-events: none;\r
    }\r
    .hero-left { position: relative; z-index: 1; }\r
    .hero-badge {\r
      display: inline-flex; align-items: center; gap: 8px;\r
      background: var(--white); border: 1px solid var(--sand);\r
      padding: 6px 14px; border-radius: 100px; margin-bottom: 28px;\r
      font-size: 12px; font-weight: 600; color: var(--sage-d);\r
      letter-spacing: 0.03em; text-transform: uppercase;\r
      box-shadow: var(--shadow-sm);\r
    }\r
    .pulse-dot {\r
      width: 7px; height: 7px; border-radius: 50%; background: var(--sage);\r
      animation: pulse 2s infinite;\r
    }\r
    @keyframes pulse {\r
      0%, 100% { opacity: 1; transform: scale(1); }\r
      50% { opacity: 0.5; transform: scale(0.8); }\r
    }\r
    .hero-title {\r
      font-family: 'Lora', serif;\r
      font-size: clamp(42px, 5vw, 64px);\r
      font-weight: 600; line-height: 1.1;\r
      color: var(--forest);\r
      margin-bottom: 20px;\r
      letter-spacing: -0.02em;\r
    }\r
    .hero-title em { font-style: italic; color: var(--terra); }\r
    .hero-desc {\r
      font-size: 16px; color: var(--muted); line-height: 1.7;\r
      max-width: 460px; margin-bottom: 36px;\r
    }\r
    .hero-actions { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 48px; }\r
    .btn-primary {\r
      background: var(--forest); color: var(--sage-l);\r
      border: none; padding: 14px 30px; border-radius: 100px;\r
      font-family: 'Outfit', sans-serif; font-size: 15px; font-weight: 600;\r
      cursor: pointer; transition: all 0.2s;\r
    }\r
    .btn-primary:hover { background: var(--sage-d); transform: translateY(-2px); box-shadow: var(--shadow-md); }\r
    .btn-secondary {\r
      background: transparent; color: var(--forest);\r
      border: 1.5px solid var(--sand); padding: 14px 26px; border-radius: 100px;\r
      font-family: 'Outfit', sans-serif; font-size: 15px; font-weight: 500;\r
      cursor: pointer; transition: all 0.2s; display: flex; align-items: center; gap: 8px;\r
    }\r
    .btn-secondary:hover { border-color: var(--forest); background: rgba(30,58,47,0.04); }\r
    .hero-stats { display: flex; gap: 24px; flex-wrap: wrap; }\r
    .stat-pill {\r
      background: var(--white); border: 1px solid var(--sand);\r
      padding: 10px 18px; border-radius: var(--radius-md);\r
      font-size: 13px; color: var(--muted);\r
      box-shadow: var(--shadow-sm);\r
    }\r
    .stat-pill strong { color: var(--forest); font-weight: 700; font-size: 15px; display: block; }\r
\r
    /* Hero Visual */\r
    .hero-right { position: relative; z-index: 1; display: flex; justify-content: center; align-items: center; }\r
    .hero-visual-card {\r
      width: 440px; max-width: 120%;\r
      background: var(--white); border: 1px solid var(--sand);\r
      border-radius: var(--radius-xl); padding: 36px;\r
      box-shadow: var(--shadow-lg);\r
      position: relative; overflow: hidden;\r
    }\r
    .hero-visual-card::after {\r
      content: '';\r
      position: absolute; top: -60px; right: -60px;\r
      width: 200px; height: 200px;\r
      background: radial-gradient(circle, rgba(123,158,135,0.15) 0%, transparent 70%);\r
      border-radius: 50%;\r
    }\r
    .hvc-label { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: rgb(42, 54, 42); margin-bottom: 4px; }\r
    .hvc-name { font-family: 'Lora', serif; font-size: 20px; font-weight: 600; color: var(--forest); margin-bottom: 24px; }\r
    .hvc-score-row { display: flex; align-items: flex-end; gap: 12px; margin-bottom: 24px; }\r
    .hvc-big-score { font-family: 'Outfit', sans-serif; font-size: 72px; font-weight: 800; color: var(--forest); line-height: 1; }\r
    .hvc-score-meta { padding-bottom: 8px; }\r
    .hvc-out { font-size: 18px; color: var(--muted-l); }\r
    .hvc-grade {\r
      background: rgba(185,185,187,0.26); color: #66666a;\r
      padding: 3px 10px; border-radius: 100px;\r
      font-size: 12px; font-weight: 600;\r
    }\r
    .hvc-bars { display: flex; flex-direction: column; gap: 10px; margin-bottom: 20px; }\r
    .hvc-bar-row { display: flex; align-items: center; gap: 10px; }\r
    .hvc-bar-label { font-size: 12px; color: var(--muted); width: 100px; flex-shrink: 0; }\r
    .hvc-bar-track { flex: 1; height: 6px; background: var(--cream2); border-radius: 100px; overflow: hidden; }\r
    .hvc-bar-fill { height: 100%; border-radius: 100px; transition: width 0.8s ease; }\r
    .hvc-bar-pct { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--muted-l); width: 36px; text-align: right; }\r
    .hvc-footer { display: flex; gap: 8px; flex-wrap: wrap; }\r
    .hvc-tag {\r
      background: var(--cream2); border: 1px solid var(--sand);\r
      padding: 4px 10px; border-radius: 100px;\r
      font-size: 11px; font-weight: 500; color: var(--muted);\r
    }\r
\r
    /* HOW IT WORKS */\r
    .section { padding: 100px 64px; }\r
    .section-eyebrow {\r
      font-size: 11px; font-weight: 700; text-transform: uppercase;\r
      letter-spacing: 0.1em; color: var(--sage-d); margin-bottom: 12px;\r
    }\r
    .section-title { font-family: 'Lora', serif; font-size: 40px; font-weight: 600; color: var(--forest); margin-bottom: 48px; line-height: 1.2; }\r
    .steps-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; }\r
    .step-card {\r
      background: var(--white); border: 1px solid var(--sand);\r
      border-radius: var(--radius-lg); padding: 32px;\r
      position: relative; overflow: hidden;\r
      transition: transform 0.2s, box-shadow 0.2s;\r
    }\r
    .step-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); }\r
    .step-number {\r
      font-family: 'Outfit', sans-serif; font-size: 80px; font-weight: 800;\r
      color: var(--cream2); line-height: 1;\r
      position: absolute; top: 16px; right: 20px;\r
      user-select: none;\r
    }\r
    .step-icon-wrap {\r
      width: 48px; height: 48px; border-radius: var(--radius-sm);\r
      display: flex; align-items: center; justify-content: center;\r
      margin-bottom: 20px;\r
    }\r
    .step-icon-wrap.blue { background: rgba(107,174,214,0.15); color: var(--sky); }\r
    .step-icon-wrap.green { background: rgba(123,158,135,0.15); color: var(--sage-d); }\r
    .step-icon-wrap.purple { background: rgba(139,94,131,0.12); color: var(--plum); }\r
    .step-card h3 { font-size: 17px; font-weight: 700; color: var(--forest); margin-bottom: 10px; }\r
    .step-card p { font-size: 14px; color: var(--muted); line-height: 1.65; }\r
\r
    /* CATEGORIES */\r
    .cat-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 20px; }\r
    .cat-card {\r
      border-radius: var(--radius-lg); padding: 28px;\r
      position: relative; overflow: hidden;\r
      transition: transform 0.2s;\r
      cursor: default;\r
    }\r
    .cat-card:hover { transform: translateY(-3px); }\r
    .cat-card.allergies    { background: #F0F7F2; border: 1px solid #C8E2CF; }\r
    .cat-card.derm         { background: #FDF3F0; border: 1px solid #F0C4B8; }\r
    .cat-card.aesthetics   { background: #F8F4ED; border: 1px solid #E8D8BE; }\r
    .cat-card.markers      { background: #EEF3F9; border: 1px solid #C4D8EE; }\r
    .cat-emoji { font-size: 28px; margin-bottom: 14px; display: block; }\r
    .cat-card h3 { font-size: 15px; font-weight: 700; color: var(--forest); margin-bottom: 8px; }\r
    .cat-card p { font-size: 13px; color: var(--muted); line-height: 1.6; margin-bottom: 14px; }\r
    .cat-count {\r
      display: inline-block;\r
      font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em;\r
      color: var(--muted-l); border-top: 1px solid rgba(0,0,0,0.08); padding-top: 10px; width: 100%;\r
    }\r
\r
    /* LANDING FOOTER */\r
    .landing-footer {\r
      background: var(--forest); padding: 64px;\r
      display: flex; justify-content: space-between; align-items: flex-start;\r
      flex-wrap: wrap; gap: 32px;\r
    }\r
    .footer-brand .brand-name { color: var(--sage-l); font-family: 'Lora', serif; }\r
    .footer-brand p { color: var(--muted-l); font-size: 13px; margin-top: 8px; }\r
    .footer-links { display: flex; gap: 28px; flex-wrap: wrap; }\r
    .footer-links a { color: rgba(255,255,255,0.5); text-decoration: none; font-size: 13px; transition: color 0.2s; }\r
    .footer-links a:hover { color: var(--sage-l); }\r
    .footer-note { color: rgba(255,255,255,0.3); font-size: 12px; width: 100%; margin-top: 24px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.1); }\r
\r
    /* ============================================================\r
       DASHBOARD\r
    ============================================================ */\r
\r
    /* SIDEBAR */\r
    .sidebar {\r
      width: var(--sidebar-w); flex-shrink: 0;\r
      background:var(--sand);\r
      display: flex; flex-direction: column;\r
      padding: 0;\r
      position: sticky; top: 0; height: 100vh;\r
      overflow-y: auto;\r
      transition: left 0.3s cubic-bezier(0.4,0,0.2,1);\r
    }\r
    .dashboard-body {\r
      flex: 1;\r
      display: flex;\r
      overflow: hidden;\r
      min-height: calc(100vh - 0px);\r
    }\r
    .main-content {\r
      flex: 1; min-width: 0;\r
      background: var(--cream);\r
      display: flex; flex-direction: column;\r
      overflow-y: auto;\r
      height: 100vh;\r
    }\r
    .sidebar-header {\r
      padding: 28px 24px 20px;\r
      display: flex; align-items: center; gap: 10px;\r
      border-bottom: 1px solid rgba(255,255,255,0.08);\r
    }\r
    .sb-brand-dot {\r
      width: 32px; height: 32px; border-radius: 50%;\r
      background: var(--sage); display: flex; align-items: center; justify-content: center;\r
    }\r
    .sb-brand-dot span { color: var(--forest); font-family: 'Lora', serif; font-size: 13px; font-style: italic; font-weight: 700; }\r
    .sb-brand-name { font-family: 'Lora', serif; font-size: 20px; font-weight: 600; color: rgba(0, 0, 0, 0.63); }\r
\r
    .user-profile {\r
      padding: 20px 24px;\r
      display: flex; align-items: center; gap: 12px;\r
      border-bottom: 1px solid rgba(255,255,255,0.08);\r
    }\r
    .avatar {\r
      width: 38px; height: 38px; border-radius: 50%;\r
      background: linear-gradient(135deg, var(--sage), var(--gold));\r
      display: flex; align-items: center; justify-content: center;\r
      font-size: 13px; font-weight: 700; color: var(--forest);\r
      flex-shrink: 0;\r
    }\r
    .user-info { min-width: 0; }\r
    .user-name { font-size: 14px; font-weight: 600; color: var(--white); display: block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\r
    .user-tag { font-size: 11px; color: rgba(36, 61, 40, 0.897); font-family: 'JetBrains Mono', monospace; }\r
\r
    .sidebar-search {\r
      margin: 16px 24px;\r
      display: flex; align-items: center; gap: 8px;\r
      background: rgba(24, 23, 23, 0.527); border: 1px solid rgba(255,255,255,0.1);\r
      border-radius: var(--radius-sm); padding: 9px 12px;\r
    }\r
    .sidebar-search input {\r
      background: none; border: none; outline: none;\r
      color: var(--white); font-family: 'Outfit', sans-serif; font-size: 13px;\r
      width: 100%; placeholder-color: rgba(255,255,255,0.3);\r
    }\r
    \r
    .sidebar-search input::placeholder { color: rgba(255,255,255,0.3); }\r
\r
    .sidebar-nav { padding: 8px 12px 24px; flex: 1; }\r
    .nav-group-label {\r
      font-size: 10px; font-weight: 700; text-transform: uppercase;\r
      letter-spacing: 0.1em; color: var(--forest);\r
      padding: 16px 12px 6px;\r
    }\r
    .nav-item {\r
      display: flex; align-items: center; gap: 10px;\r
      padding: 10px 12px; border-radius: var(--radius-sm);\r
      color: var(--forest);\r
      text-decoration: none; font-size: 13.5px; font-weight: 500;\r
      transition: all 0.18s; cursor: pointer; margin-bottom: 2px;\r
      white-space: nowrap;\r
    }\r
    .nav-item svg { flex-shrink: 0; opacity: 0.7; }\r
    .nav-item:hover { background: rgba(255,255,255,0.08); color: var(--white); }\r
    .nav-item:hover svg { opacity: 1; }\r
    .nav-item.active { background: rgba(32, 37, 34, 0.25); color: white; }\r
    .nav-item.active svg { opacity: 1; color: var(--sage-l); }\r
    .nav-badge {\r
      margin-left: auto; font-size: 10px; font-weight: 700;\r
      padding: 2px 7px; border-radius: 100px;\r
    }\r
    .badge-danger { background: rgba(242,90,0,0.18); color: var(--risk-very-high); }\r
    .badge-high   { background: rgba(255,176,103,0.28); color: #b86319; }\r
    .download-btn { margin-top: 8px; border-top: 1px solid rgba(255,255,255,0.07); padding-top: 14px; }\r
\r
    /* TOPBAR */\r
    .topbar {\r
      position: sticky; top: 0; z-index: 50;\r
      display: flex; align-items: center; justify-content: space-between;\r
      padding: 18px 32px;\r
      background: rgba(247,243,238,0.9);\r
      backdrop-filter: blur(16px);\r
      border-bottom: 1px solid var(--sand);\r
    }\r
    .topbar-left h2 {\r
      font-family: 'Lora', serif; font-size: 22px; font-weight: 600;\r
      color: var(--forest); line-height: 1.2;\r
    }\r
    .topbar-left span { font-size: 13px; color: var(--muted-l); }\r
    .topbar-right { display: flex; align-items: center; gap: 16px; }\r
    .filter-group { display: flex; align-items: center; gap: 8px; }\r
    .filter-label { font-size: 12px; color: var(--muted-l); font-weight: 500; }\r
    .filter-group select {\r
      background: var(--white); border: 1px solid var(--sand);\r
      border-radius: var(--radius-sm); padding: 7px 12px;\r
      font-family: 'Outfit', sans-serif; font-size: 13px; color: var(--ink);\r
      cursor: pointer; outline: none;\r
    }\r
    .report-date { font-size: 12px; color: var(--muted-l); font-family: 'JetBrains Mono', monospace; }\r
\r
    /* VIEWS */\r
    .views-container { flex: 1; padding: 28px 32px 40px; }\r
    .view { display: none; animation: fadeUp 0.3s ease; }\r
    .view.active { display: block; }\r
    @keyframes fadeUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }\r
    .view-intro {\r
      background: var(--white); border: 1px solid var(--sand);\r
      border-radius: var(--radius-md); padding: 16px 20px;\r
      font-size: 14px; color: var(--muted); margin-bottom: 24px;\r
      border-left: 3px solid var(--sage);\r
    }\r
\r
    /* ===== OVERVIEW BENTO GRID ===== */\r
    .bento-grid {\r
      display: grid;\r
      grid-template-columns: repeat(12, 1fr);\r
      grid-template-rows: auto;\r
      gap: 20px;\r
    }\r
    .bento-card {\r
      background: var(--white); border: 1px solid var(--sand);\r
      border-radius: var(--radius-lg); padding: 24px;\r
      box-shadow: var(--shadow-sm);\r
      overflow: hidden; position: relative;\r
      height:50 ;\r
    }\r
    .card-title {\r
      font-size: 12px; font-weight: 700; text-transform: uppercase;\r
      letter-spacing: 0.07em; color: var(--muted-l); margin-bottom: 16px;\r
    }\r
    .card-subtitle { font-size: 13px; color: var(--muted); margin-top: 6px; }\r
\r
    /* Score Card */\r
    .bento-score { grid-column: span 4; }\r
    .score-ring-wrap { position: relative; width: 160px; height: 160px; margin: 0 auto 20px; }\r
    .score-ring-wrap canvas { position: absolute; top: 0; left: 0; }\r
    .score-center {\r
      position: absolute; inset: 0;\r
      display: flex; flex-direction: column;\r
      align-items: center; justify-content: center;\r
    }\r
    .big-score { font-size: 48px; font-weight: 800; color: var(--forest); line-height: 1; }\r
    .score-out { font-size: 14px; color: var(--muted-l); }\r
    .score-grade {\r
      background: rgba(185,185,187,0.26); color: #66666a;\r
      padding: 4px 12px; border-radius: 100px;\r
      font-size: 12px; font-weight: 700; margin-top: 8px;\r
      display: block; text-align: center;\r
    }\r
    .score-desc { font-size: 13px; color: var(--muted); text-align: center; margin-top: 12px; line-height: 1.5; }\r
    /* Distribution Card */\r
    .bento-dist {\r
      grid-column: span 5;\r
      background: linear-gradient(155deg, #ffffff 0%, #fcfaf7 58%, #f5efe6 100%);\r
      border: 1px solid #e6ddcf;\r
      box-shadow: 0 10px 28px rgba(26,26,26,0.06), inset 0 1px 0 rgba(255,255,255,0.85);\r
    }\r
    .bento-dist::after {\r
      content: '';\r
      position: absolute;\r
      top: -92px;\r
      right: -84px;\r
      width: 220px;\r
      height: 220px;\r
      border-radius: 50%;\r
      background: radial-gradient(circle, rgba(123,158,135,0.20) 0%, rgba(123,158,135,0) 70%);\r
      pointer-events: none;\r
    }\r
    .bento-dist .card-title {\r
      color: var(--forest);\r
      margin-bottom: 14px;\r
      letter-spacing: 0.08em;\r
    }\r
    /* â”€â”€ dist2: new expandable design â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */\r
    .dist2-header {\r
      display: flex; align-items: center; justify-content: space-between;\r
      margin-bottom: 14px;\r
    }\r
    .dist2-title-block { display: flex; flex-direction: column; gap: 2px; }\r
    .dist2-subtitle { font-size: 11px; color: var(--muted); font-weight: 500; }\r
\r
    /* mini donut */\r
    .dist2-donut { flex-shrink: 0; }\r
    .donut-seg {\r
      fill: none;\r
      stroke-width: 6;\r
      stroke-linecap: butt;\r
      r: 15.9155; cx: 18; cy: 18;\r
      transform-origin: center;\r
      transform: rotate(-90deg);\r
    }\r
\r
    /* rows */\r
    .dist2-rows { display: flex; flex-direction: column; gap: 4px; }\r
\r
    .dist2-row {\r
      border-radius: 10px;\r
      border: 1px solid transparent;\r
      cursor: pointer;\r
      transition: background .15s, border-color .15s;\r
      overflow: hidden;\r
    }\r
    .dist2-row:hover { border-color: rgba(0,0,0,0.08); background: rgba(255,255,255,0.7); }\r
    .dist2-row.dist2-open { border-color: rgba(0,0,0,0.09); background: #fff; box-shadow: 0 2px 10px rgba(0,0,0,0.05); }\r
\r
    /* colour tints when open */\r
    .dist2-row-vh.dist2-open { border-color: rgba(242,90,0,0.24); background: rgba(242,90,0,0.05); }\r
    .dist2-row-h.dist2-open  { border-color: rgba(255,176,103,0.3); background: rgba(255,176,103,0.09); }\r
    .dist2-row-m.dist2-open  { border-color: rgba(185,185,187,0.34); background: rgba(185,185,187,0.09); }\r
    .dist2-row-l.dist2-open  { border-color: rgba(180,172,217,0.32); background: rgba(180,172,217,0.09); }\r
    .dist2-row-vl.dist2-open { border-color: rgba(106,69,165,0.26); background: rgba(106,69,165,0.07); }\r
\r
    .dist2-row-top {\r
      display: flex; align-items: center; gap: 8px;\r
      padding: 8px 10px;\r
    }\r
\r
    /* colour pip */\r
    .dist2-pip {\r
      width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0;\r
    }\r
    .dist2-pip-vh { background: #c1634a; }\r
    .dist2-pip-h  { background: #d4a853; }\r
    .dist2-pip-m  { background: #6baed6; }\r
    .dist2-pip-l  { background: #7b9e87; }\r
    .dist2-pip-vl { background: #355847; }\r
\r
    .dist2-lbl {\r
      font-size: 12px; font-weight: 700; color: var(--ink2);\r
      min-width: 58px;\r
    }\r
\r
    /* inline bar */\r
    .dist2-bar-wrap {\r
      flex: 1; height: 10px; background: rgba(0,0,0,0.07);\r
      border-radius: 100px; overflow: hidden;\r
    }\r
    .dist2-bar {\r
      height: 100%; border-radius: 100px;\r
      animation: dist2Grow .8s ease both;\r
      transform-origin: left;\r
    }\r
    @keyframes dist2Grow { from { transform: scaleX(0); } to { transform: scaleX(1); } }\r
    .dist2-bar-vh { background: linear-gradient(90deg,#F25A00,#FF7C31); }\r
    .dist2-bar-h  { background: linear-gradient(90deg,#FFB067,#FFC58D); }\r
    .dist2-bar-m  { background: linear-gradient(90deg,#B9B9BB,#D4D4D6); }\r
    .dist2-bar-l  { background: linear-gradient(90deg,#B4ACD9,#CAC4E6); }\r
    .dist2-bar-vl { background: linear-gradient(90deg,#6A45A5,#8A68BE); }\r
\r
    /* count badge */\r
    .dist2-count {\r
      font-size: 12px; font-weight: 800; min-width: 18px; text-align: right;\r
    }\r
    .dist2-count-vh { color: #c1634a; }\r
    .dist2-count-h  { color: #c09030; }\r
    .dist2-count-m  { color: #4080b0; }\r
    .dist2-count-l  { color: #5a8a6a; }\r
    .dist2-count-vl { color: #355847; }\r
\r
    /* chevron */\r
    .dist2-chevron { color: var(--muted-l); transition: transform .22s; flex-shrink: 0; }\r
    .dist2-open .dist2-chevron { transform: rotate(180deg); }\r
\r
    /* expanded trait chips */\r
    .dist2-traits {\r
      display: flex; flex-wrap: wrap; gap: 5px;\r
      padding: 0 10px 10px 26px;\r
      animation: dist2FadeIn .2s ease;\r
    }\r
    @keyframes dist2FadeIn { from { opacity:0; transform:translateY(-4px); } to { opacity:1; transform:translateY(0); } }\r
\r
    .dist2-chip {\r
      font-size: 11px; font-weight: 600;\r
      padding: 3px 10px; border-radius: 100px;\r
      cursor: pointer; border: 1px solid transparent;\r
      transition: all .15s;\r
    }\r
    .dist2-row-vh .dist2-chip { background: rgba(242,90,0,0.1); color: var(--risk-very-high); border-color: rgba(242,90,0,0.2); }\r
    .dist2-row-h  .dist2-chip { background: rgba(255,176,103,0.18); color: #b86319; border-color: rgba(255,176,103,0.3); }\r
    .dist2-row-m  .dist2-chip { background: rgba(185,185,187,0.18); color: #66666a; border-color: rgba(185,185,187,0.3); }\r
    .dist2-row-l  .dist2-chip { background: rgba(180,172,217,0.18); color: #7267a9; border-color: rgba(180,172,217,0.3); }\r
    .dist2-row-vl .dist2-chip { background: rgba(106,69,165,0.1); color: var(--risk-very-low); border-color: rgba(106,69,165,0.22); }\r
    .dist2-chip:hover { filter: brightness(0.9); transform: translateY(-1px); box-shadow: 0 2px 6px rgba(0,0,0,0.08); }\r
\r
    /* Priority Card */\r
    .bento-priority { grid-column: span 3; padding: 18px 20px;}\r
    .bento-priority .card-title { margin-bottom: 8px; line-height: 1.15; }\r
    .priority-list { display: flex; flex-direction: column; gap: 8px; }\r
    .priority-item {\r
      display: flex; align-items: center; gap: 10px;\r
      padding: 8px 10px; border-radius: var(--radius-sm);\r
      background: var(--cream); border: 1px solid var(--sand);\r
      cursor: pointer; transition: all 0.18s;\r
    }\r
    .priority-item:hover { background: var(--white); box-shadow: var(--shadow-sm); }\r
    .priority-dot { width: 9px; height: 9px; border-radius: 50%; flex-shrink: 0; }\r
    .priority-name { font-size: 13px; font-weight: 500; color: var(--ink2); flex: 1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\r
    .priority-badge {\r
      font-size: 10px; font-weight: 700; padding: 2px 7px;\r
      border-radius: 100px; flex-shrink: 0;\r
    }\r
\r
    /* Radar / Polar Chart */\r
    .bento-radar { grid-column: span 6; }\r
    .bento-routine { grid-column: span 6; }\r
    .routine-head {\r
      display: flex;\r
      align-items: center;\r
      justify-content: space-between;\r
      gap: 12px;\r
      margin-bottom: 8px;\r
    }\r
    .routine-head .card-title { margin-bottom: 0; }\r
    .routine-profile-badge {\r
      font-size: 10px;\r
      font-weight: 700;\r
      text-transform: uppercase;\r
      letter-spacing: 0.07em;\r
      border-radius: 100px;\r
      padding: 4px 9px;\r
      background: var(--cream2);\r
      color: var(--muted);\r
      border: 1px solid var(--sand);\r
    }\r
    .routine-profile-badge.risk-very-high { background: rgba(242,90,0,0.12); color: var(--risk-very-high); border-color: rgba(242,90,0,0.24); }\r
    .routine-profile-badge.risk-high { background: rgba(255,176,103,0.22); color: #b86319; border-color: rgba(255,176,103,0.32); }\r
    .routine-profile-badge.risk-medium { background: rgba(185,185,187,0.2); color: #66666a; border-color: rgba(185,185,187,0.3); }\r
    .routine-profile-badge.risk-low { background: rgba(180,172,217,0.2); color: #7267a9; border-color: rgba(180,172,217,0.32); }\r
    .routine-profile-badge.risk-very-low { background: rgba(106,69,165,0.12); color: var(--risk-very-low); border-color: rgba(106,69,165,0.24); }\r
    .routine-sub {\r
      font-size: 12.5px;\r
      color: var(--muted);\r
      line-height: 1.6;\r
      margin-bottom: 12px;\r
    }\r
    .routine-progress { margin-bottom: 14px; }\r
    .routine-progress-meta {\r
      font-family: 'JetBrains Mono', monospace;\r
      font-size: 11px;\r
      color: var(--muted-l);\r
      margin-bottom: 6px;\r
    }\r
    .routine-progress-track {\r
      height: 7px;\r
      border-radius: 100px;\r
      background: var(--cream2);\r
      overflow: hidden;\r
      border: 1px solid #e4d8c8;\r
    }\r
    .routine-progress-fill {\r
      height: 100%;\r
      border-radius: 100px;\r
      width: 0;\r
      transition: width 0.25s ease;\r
      background: linear-gradient(90deg, var(--sage-d), var(--sage));\r
    }\r
    .routine-grid {\r
      display: grid;\r
      grid-template-columns: 1fr 1fr;\r
      gap: 12px;\r
    }\r
    .routine-col {\r
      padding: 2px 2px 0;\r
    }\r
    .routine-col-title {\r
      font-size: 11px;\r
      font-weight: 700;\r
      letter-spacing: 0.06em;\r
      text-transform: uppercase;\r
      color: var(--forest);\r
      margin-bottom: 10px;\r
      padding-bottom: 7px;\r
      border-bottom: 1px solid #e7dece;\r
    }\r
    \r
    .routine-list { list-style: none; display: flex; flex-direction: column; gap: 6px; }\r
    .routine-item-btn {\r
      width: 100%;\r
      border: none;\r
      background: transparent;\r
      color: var(--muted);\r
      border-radius: 9px;\r
      padding: 6px 8px 7px;\r
      font-size: 11.5px;\r
      line-height: 1.35;\r
      text-align: left;\r
      display: flex;\r
      align-items: flex-start;\r
      gap: 7px;\r
      cursor: pointer;\r
      transition: color 0.18s ease, transform 0.18s ease, background-color 0.18s ease, box-shadow 0.18s ease;\r
    }\r
    .routine-item-btn:hover {\r
      color: var(--forest);\r
      transform: translateX(1px);\r
      background: rgba(255, 255, 255, 0.24);\r
      box-shadow: 0 1px 6px rgba(0, 0, 0, 0.06);\r
    }\r
    .routine-item-btn:active { transform: translateX(1px) scale(0.992); }\r
    .routine-item-btn:focus-visible {\r
      outline: 2px solid rgba(47, 78, 57, 0.36);\r
      outline-offset: 1px;\r
    }\r
    .routine-check {\r
      width: 14px;\r
      height: 13px;\r
      border-radius: 50%;\r
      border: 1.5px solid #c8bba8;\r
      background: transparent;\r
      margin-top: 2px;\r
      flex-shrink: 0;\r
      position: relative;\r
    }\r
    .routine-item-btn.checked {\r
      background: transparent;\r
      color: var(--sage-d);\r
      font-weight: 600;\r
    }\r
    .routine-item-btn.checked .routine-check {\r
      border-color: var(--sage-d);\r
      background: rgba(74,112,85,0.12);\r
    }\r
    .routine-item-btn.checked .routine-check::after {\r
      content: '';\r
      position: absolute;\r
      left: 4px;\r
      top: 1px;\r
      width: 5px;\r
      height: 8px;\r
      border: solid var(--sage-d);\r
      border-width: 0 2px 2px 0;\r
      transform: rotate(45deg);\r
    }\r
    .routine-item-text { flex: 1; color: rgb(79, 153, 48); font-size: 11.5px; }\r
    .routine-footer {\r
      margin-top: 12px;\r
      font-size: 11px;\r
      color: var(--muted-l);\r
      line-height: 1.5;\r
      font-family: 'JetBrains Mono', monospace;\r
    }\r
\r
    /* Category Summary Cards */\r
    .bento-cat {\r
      grid-column: span 3;\r
      align-self: start;\r
    }\r
    .cat-summary-num { font-size: 36px; font-weight: 800; color: var(--forest); line-height: 1; margin-bottom: 4px; }\r
    .cat-summary-label { font-size: 13px; color: var(--muted); margin-bottom: 16px; }\r
    .cat-summary-bar {\r
      height: 4px; border-radius: 100px;\r
      background: var(--cream2); overflow: hidden; margin-bottom: 8px;\r
    }\r
    .cat-summary-fill { height: 100%; border-radius: 100px; }\r
    .cat-summary-sub { font-size: 12px; color: var(--muted-l); }\r
    .cat-accent-allergies  { border-top: 3px solid var(--sage); }\r
    .cat-accent-derm       { border-top: 3px solid var(--terra); }\r
    .cat-accent-aesthetics { border-top: 3px solid var(--gold); }\r
    .cat-accent-markers    { border-top: 3px solid var(--sky); }\r
\r
    /* Alert Banner */\r
    .bento-alert { grid-column: span 12; }\r
    .alert-banner {\r
      display: flex; align-items: center; gap: 16px;\r
      background: linear-gradient(135deg, rgba(193,99,74,0.08), rgba(193,99,74,0.04));\r
      border: 1px solid rgba(193,99,74,0.2); border-radius: var(--radius-md);\r
      padding: 16px 20px;\r
    }\r
    .alert-icon { font-size: 24px; flex-shrink: 0; }\r
    .alert-text h4 { font-size: 14px; font-weight: 700; color: var(--terra); margin-bottom: 3px; }\r
    .alert-text p { font-size: 13px; color: var(--muted); }\r
    .alert-action {\r
      margin-left: auto; background: var(--terra); color: var(--white);\r
      border: none; padding: 8px 18px; border-radius: 100px;\r
      font-family: 'Outfit', sans-serif; font-size: 13px; font-weight: 600;\r
      cursor: pointer; flex-shrink: 0; transition: all 0.2s;\r
    }\r
    .alert-action:hover { background: #A84B35; }\r
\r
    /* ===== TRAITS GRID ===== */\r
    .traits-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px,1fr)); gap: 16px; }\r
    .trait-card {\r
      background: var(--white); border: 1px solid var(--sand);\r
      border-radius: var(--radius-md); padding: 20px;\r
      cursor: pointer; transition: all 0.2s;\r
      position: relative; overflow: hidden;\r
      display: flex; flex-direction: column;\r
    }\r
    .trait-card[data-risk="very-high"] {\r
      background: var(--risk-very-high-bg);\r
      border-color: rgba(242,90,0,0.28);\r
    }\r
    .trait-card[data-risk="high"] {\r
      background: var(--risk-high-bg);\r
      border-color: rgba(255,176,103,0.34);\r
    }\r
    .trait-card[data-risk="medium"] {\r
      background: var(--risk-medium-bg);\r
      border-color: rgba(185,185,187,0.36);\r
    }\r
    .trait-card[data-risk="low"] {\r
      background: var(--risk-low-bg);\r
      border-color: rgba(180,172,217,0.34);\r
    }\r
    .trait-card[data-risk="very-low"] {\r
      background: var(--risk-very-low-bg);\r
      border-color: rgba(106,69,165,0.3);\r
    }\r
    .trait-card:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); border-color: var(--sage-l); }\r
    .trait-card-wide { grid-column: span 2; }\r
    @media (max-width: 900px) { .trait-card-wide { grid-column: span 1; } }\r
\r
    .trait-risk-strip {\r
      height: 3px; border-radius: 100px;\r
      background: var(--cream2); margin-bottom: 14px; overflow: hidden;\r
    }\r
    .risk-fill { height: 100%; border-radius: 100px; transition: width 0.6s ease; }\r
    .risk-fill.risk-very-high { background: var(--risk-very-high); }\r
    .risk-fill.risk-high      { background: var(--risk-high); }\r
    .risk-fill.risk-medium    { background: var(--risk-medium); }\r
    .risk-fill.risk-low       { background: var(--risk-low); }\r
    .risk-fill.risk-very-low  { background: var(--risk-very-low); }\r
\r
    .trait-header { display: flex; align-items: flex-start; justify-content: space-between; gap: 8px; margin-bottom: 8px; }\r
    .trait-name { font-size: 14px; font-weight: 700; color: var(--forest); line-height: 1.3; }\r
    .risk-badge {\r
      font-size: 10px; font-weight: 700; padding: 3px 8px;\r
      border-radius: 100px; flex-shrink: 0; white-space: nowrap;\r
    }\r
    .risk-badge.risk-very-high { background: rgba(242,90,0,0.12); color: var(--risk-very-high); }\r
    .risk-badge.risk-high      { background: rgba(255,176,103,0.22); color: #b86319; }\r
    .risk-badge.risk-medium    { background: rgba(185,185,187,0.2); color: #66666a; }\r
    .risk-badge.risk-low       { background: rgba(180,172,217,0.2); color: #7267a9; }\r
    .risk-badge.risk-very-low  { background: rgba(106,69,165,0.12); color: var(--risk-very-low); }\r
\r
    .trait-desc { font-size: 13px; color: var(--muted); line-height: 1.6; margin-bottom: 12px; }\r
    .trait-ancestry-table {\r
      margin: 18px 0 18px;\r
      border: 1px solid rgba(168, 160, 148, 0.28);\r
      border-radius: 16px;\r
      overflow: hidden;\r
      background: rgba(255,255,255,0.78);\r
      box-shadow: 0 10px 24px rgba(58, 44, 28, 0.05);\r
    }\r
    .trait-ancestry-head,\r
    .trait-ancestry-row {\r
      display: grid;\r
      grid-template-columns: 0.95fr 1.15fr;\r
    }\r
    .trait-ancestry-head {\r
      background: rgba(245, 241, 233, 0.95);\r
      border-bottom: 1px solid rgba(168, 160, 148, 0.2);\r
    }\r
    .trait-ancestry-head span,\r
    .trait-ancestry-row span {\r
      padding: 9px 14px;\r
    }\r
    .trait-ancestry-head span {\r
      font-size: 10px;\r
      font-weight: 700;\r
      letter-spacing: 0.08em;\r
      text-transform: uppercase;\r
      color: var(--muted-l);\r
    }\r
    .trait-ancestry-head > span:first-child,\r
    .trait-ancestry-row > span:first-child {\r
      border-right: 1px solid rgba(168, 160, 148, 0.2);\r
    }\r
    .trait-ancestry-body {\r
      background: rgba(255,255,255,0.9);\r
    }\r
    .trait-ancestry-row + .trait-ancestry-row {\r
      border-top: 1px solid rgba(168, 160, 148, 0.12);\r
    }\r
    .trait-ancestry-row span {\r
      font-size: 12.5px;\r
      color: var(--forest);\r
    }\r
    .trait-ancestry-risk {\r
      display: flex;\r
      align-items: center;\r
      justify-content: space-between;\r
      gap: 10px;\r
    }\r
    .trait-ancestry-dot {\r
      width: 11px;\r
      height: 11px;\r
      border-radius: 999px;\r
      flex-shrink: 0;\r
    }\r
    .trait-ancestry-dot.risk-very-high { background: var(--risk-very-high); }\r
    .trait-ancestry-dot.risk-high { background: var(--risk-high); }\r
    .trait-ancestry-dot.risk-medium { background: var(--risk-medium); }\r
    .trait-ancestry-dot.risk-moderate { background: var(--risk-medium); }\r
    .trait-ancestry-dot.risk-low { background: var(--risk-low); }\r
    .trait-ancestry-dot.risk-very-low { background: var(--risk-very-low); }\r
    .trait-reco-label {\r
      font-size: 10px;\r
      font-weight: 700;\r
      letter-spacing: 0.05em;\r
      text-transform: uppercase;\r
      color: var(--sage-d);\r
      margin-bottom: 8px;\r
    }\r
    .trait-footer { display: flex; justify-content: space-between; padding-top: 10px; border-top: 1px solid var(--cream2); margin-top: auto; }\r
    .trait-prs { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--muted-l); }\r
    .trait-pop { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--muted-l); }\r
    .trait-card:hover .trait-prs, .trait-card:hover .trait-pop { color: var(--sage-d); }\r
\r
    /* ===== RECOMMENDATIONS ===== */\r
    .recs-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 28px; }\r
    .rec-card {\r
      background: var(--white); border: 1px solid var(--sand);\r
      border-radius: var(--radius-lg); padding: 28px; position: relative; overflow: hidden;\r
    }\r
    .rec-card::before {\r
      content: '';\r
      position: absolute; left: 0; top: 0; bottom: 0; width: 4px;\r
    }\r
    .rec-urgent::before  { background: var(--risk-very-high); }\r
    .rec-high::before    { background: var(--risk-high); }\r
    .rec-medium::before  { background: var(--risk-medium); }\r
    .rec-low::before     { background: var(--risk-very-low); }\r
    .rec-priority-label {\r
      font-size: 11px; font-weight: 700; text-transform: uppercase;\r
      letter-spacing: 0.07em; color: var(--muted-l); margin-bottom: 8px;\r
    }\r
    .rec-urgent .rec-priority-label  { color: var(--terra); }\r
    .rec-high .rec-priority-label    { color: #b86319; }\r
    .rec-medium .rec-priority-label  { color: #66666a; }\r
    .rec-low .rec-priority-label     { color: var(--risk-very-low); }\r
    .rec-card h3 { font-family: 'Lora', serif; font-size: 18px; font-weight: 600; color: var(--forest); margin-bottom: 10px; }\r
    .rec-card p { font-size: 13.5px; color: var(--muted); line-height: 1.7; margin-bottom: 16px; }\r
    .rec-list { padding-left: 18px; display: flex; flex-direction: column; gap: 6px; margin-bottom: 16px; }\r
    .rec-list li { font-size: 13px; color: var(--muted); line-height: 1.6; }\r
    .rec-genes {\r
      font-family: 'JetBrains Mono', monospace; font-size: 10.5px;\r
      color: var(--muted-l); background: var(--cream2);\r
      padding: 8px 12px; border-radius: var(--radius-sm);\r
      line-height: 1.7;\r
    }\r
    .skin-plan-cta {\r
      background: var(--forest); border-radius: var(--radius-lg);\r
      padding: 32px 40px; display: flex; align-items: center; justify-content: space-between;\r
      gap: 20px;\r
    }\r
    .skin-plan-cta h3 { font-family: 'Lora', serif; font-size: 22px; font-weight: 600; color: var(--white); margin-bottom: 6px; }\r
    .skin-plan-cta p { font-size: 14px; color: rgba(255,255,255,0.6); }\r
    .btn-primary-lg {\r
      background: var(--sage); color: var(--forest);\r
      border: none; padding: 14px 30px; border-radius: 100px;\r
      font-family: 'Outfit', sans-serif; font-size: 15px; font-weight: 700;\r
      cursor: pointer; transition: all 0.2s; white-space: nowrap; flex-shrink: 0;\r
    }\r
    .btn-primary-lg:hover { background: var(--sage-l); transform: translateY(-2px); }\r
\r
    /* ===== BIOMARKER SECTION ===== */\r
    .biomarker-chart-section {\r
      background: var(--white); border: 1px solid var(--sand);\r
      border-radius: var(--radius-lg); padding: 28px; margin-top: 24px;\r
    }\r
\r
    /* ===== MODAL ===== */\r
    .modal-overlay {\r
      position: fixed; inset: 0; z-index: 1000;\r
      background: rgba(26,26,26,0.5); backdrop-filter: blur(4px);\r
      display: none; align-items: center; justify-content: center;\r
      padding: 20px;\r
    }\r
    .modal-overlay.open { display: flex; }\r
    .modal-box {\r
      background: linear-gradient(180deg, rgba(255,255,255,0.98), rgba(252,247,241,0.98)); border-radius: var(--radius-xl);\r
      padding: 42px 40px 38px; max-width: 640px; width: 100%;\r
      max-height: 90vh; overflow-y: auto;\r
      position: relative;\r
      box-shadow: var(--shadow-lg);\r
      animation: modalIn 0.25s ease;\r
      scrollbar-gutter: stable;\r
      scrollbar-width: thin;\r
      scrollbar-color: var(--sage) var(--cream2);\r
    }\r
    .modal-box::-webkit-scrollbar { width: 10px; }\r
    .modal-box::-webkit-scrollbar-track {\r
      background: var(--cream2);\r
      border-radius: var(--radius-xl);\r
      margin: 8px 2px 8px 0;\r
    }\r
    .modal-box::-webkit-scrollbar-thumb {\r
      background: linear-gradient(180deg, var(--sage), var(--sage-d));\r
      border-radius: var(--radius-xl);\r
      border: 2px solid var(--cream2);\r
    }\r
    .modal-box::-webkit-scrollbar-thumb:hover {\r
      background: linear-gradient(180deg, var(--sage-d), var(--forest));\r
    }\r
    @keyframes modalIn { from { opacity:0; transform: scale(0.95) translateY(10px); } to { opacity:1; transform: scale(1) translateY(0); } }\r
    .modal-close {\r
      position: absolute; top: 16px; right: 16px;\r
      background: var(--cream2); border: none; width: 32px; height: 32px;\r
      border-radius: 50%; font-size: 14px; cursor: pointer; color: var(--muted);\r
      display: flex; align-items: center; justify-content: center;\r
      transition: all 0.18s;\r
    }\r
    .modal-close:hover { background: var(--sand); color: var(--ink); }\r
    .modal-risk-banner {\r
      border-radius: var(--radius-md); padding: 18px 20px; margin-bottom: 24px;\r
      display: flex; align-items: center; gap: 16px;\r
    }\r
    .modal-risk-banner.risk-very-high { background: rgba(242,90,0,0.1); border: 1px solid rgba(242,90,0,0.2); }\r
    .modal-risk-banner.risk-high      { background: rgba(255,176,103,0.16); border: 1px solid rgba(255,176,103,0.26); }\r
    .modal-risk-banner.risk-medium    { background: rgba(185,185,187,0.14); border: 1px solid rgba(185,185,187,0.24); }\r
    .modal-risk-banner.risk-low       { background: rgba(180,172,217,0.14); border: 1px solid rgba(180,172,217,0.24); }\r
    .modal-risk-banner.risk-very-low  { background: rgba(106,69,165,0.1); border: 1px solid rgba(106,69,165,0.2); }\r
    .modal-prs-big {\r
      font-size: 48px; font-weight: 800; color: var(--forest); line-height: 1;\r
    }\r
    .modal-prs-meta span { display: block; }\r
    .modal-prs-meta .m-label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.07em; color: var(--muted-l); font-weight: 700; }\r
    .modal-prs-meta .m-val { font-size: 15px; font-weight: 600; color: var(--forest); }\r
    .modal-h2 { font-family: 'Lora', serif; font-size: 24px; font-weight: 600; color: var(--forest); margin-bottom: 10px; }\r
    .modal-cat { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.07em; color: var(--muted-l); margin-bottom: 6px; }\r
    .modal-desc { font-size: 14px; color: var(--muted); line-height: 1.82; margin-bottom: 22px; }\r
    .modal-section-title { font-size: 13px; font-weight: 700; color: var(--forest); margin-bottom: 12px; margin-top: 24px; }\r
    .modal-recs {\r
      display: flex;\r
      flex-direction: column;\r
      gap: 8px;\r
      max-height: 220px;\r
      overflow-y: auto;\r
      overscroll-behavior: contain;\r
      padding: 10px;\r
      padding-right: 6px;\r
      background: var(--cream);\r
      border: 1px solid var(--sand);\r
      border-radius: var(--radius-sm);\r
      scrollbar-gutter: stable;\r
      scrollbar-width: thin;\r
      scrollbar-color: var(--sage) var(--cream2);\r
    }\r
    .modal-recs::-webkit-scrollbar { width: 10px; }\r
    .modal-recs::-webkit-scrollbar-track {\r
      background: var(--cream2);\r
      border-radius: var(--radius-sm);\r
      margin: 3px 2px 3px 0;\r
    }\r
    .modal-recs::-webkit-scrollbar-thumb {\r
      background: linear-gradient(180deg, var(--sage), var(--sage-d));\r
      border-radius: var(--radius-sm);\r
      border: 2px solid var(--cream2);\r
    }\r
    .modal-recs::-webkit-scrollbar-thumb:hover {\r
      background: linear-gradient(180deg, var(--sage-d), var(--forest));\r
    }\r
    .modal-rec-item {\r
      display: flex; align-items: flex-start; gap: 10px;\r
      padding: 10px 14px; background: var(--cream); border-radius: var(--radius-sm);\r
    }\r
    .modal-rec-item .rec-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--sage); margin-top: 6px; flex-shrink: 0; }\r
    .modal-rec-item span { font-size: 13px; color: var(--muted); line-height: 1.6; }\r
    .modal-gene-table-wrap {\r
      margin-top: 12px;\r
      border: 1px solid var(--sand);\r
      border-radius: var(--radius-sm);\r
      overflow-x: auto;\r
      background: var(--white);\r
      box-shadow: 0 8px 22px rgba(58, 44, 28, 0.04);\r
    }\r
    .modal-gene-table {\r
      width: 100%;\r
      border-collapse: collapse;\r
      min-width: 680px;\r
    }\r
    .modal-gene-table th {\r
      text-align: left;\r
      padding: 10px 12px;\r
      font-size: 11px;\r
      text-transform: uppercase;\r
      letter-spacing: 0.06em;\r
      color: var(--muted-l);\r
      background: var(--cream);\r
      border-bottom: 1px solid var(--cream2);\r
      white-space: nowrap;\r
    }\r
    .modal-gene-table td {\r
      text-align: left;\r
      padding: 9px 12px;\r
      font-size: 12.5px;\r
      color: var(--muted);\r
      border-bottom: 1px solid var(--cream2);\r
      white-space: nowrap;\r
    }\r
    .modal-gene-table tbody tr:last-child td { border-bottom: none; }\r
    .modal-genes {\r
      font-family: 'JetBrains Mono', monospace; font-size: 11px;\r
      color: var(--muted-l); background: var(--cream2);\r
      padding: 10px 14px; border-radius: var(--radius-sm); margin-top: 20px;\r
      line-height: 1.8;\r
    }\r
\r
    /* ============================================================\r
       MOBILE BOTTOM NAV\r
    ============================================================ */\r
    .mobile-topbar {\r
      display: none;\r
      position: sticky; top: 0; z-index: 200;\r
      background: rgba(255, 245, 238, 0);\r
      padding: 14px 20px;\r
      align-items: center; justify-content: space-between;\r
      border-bottom: 1px solid rgba(255,255,255,0.08);\r
    }\r
    .mobile-topbar-brand { display: flex; align-items: center; gap: 8px; }\r
    .mobile-topbar-brand .sb-brand-dot { width: 28px; height: 28px; }\r
    .mobile-topbar-brand .sb-brand-name { font-size: 18px; }\r
    .mobile-hamburger {\r
      background: rgba(255,255,255,0.1); border: none;\r
      width: 38px; height: 38px; border-radius: var(--radius-sm);\r
      display: flex; flex-direction: column; align-items: center; justify-content: center;\r
      gap: 5px; cursor: pointer; padding: 0; transition: background 0.2s;\r
    }\r
    .mobile-hamburger:hover { background: rgba(255,255,255,0.18); }\r
    .mobile-hamburger span {\r
      display: block; width: 18px; height: 2px;\r
      background: rgba(255,255,255,0.8); border-radius: 2px;\r
      transition: all 0.25s;\r
    }\r
    .mobile-hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }\r
    .mobile-hamburger.open span:nth-child(2) { opacity: 0; }\r
    .mobile-hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }\r
\r
    /* Sidebar overlay */\r
    .sidebar-overlay {\r
      display: none;\r
      position: fixed; inset: 0; z-index: 299;\r
      background: rgba(0,0,0,0.5);\r
      backdrop-filter: blur(2px);\r
      opacity: 0; transition: opacity 0.3s;\r
    }\r
    .sidebar-overlay.active { display: block; opacity: 1; }\r
\r
    /* Mobile bottom navigation */\r
    .mobile-bottom-nav {\r
      display: none;\r
      position: fixed; bottom: 0; left: 0; right: 0; z-index: 200;\r
      background: var(--forest);\r
      border-top: 1px solid rgba(255,255,255,0.1);\r
      padding: 8px 0 max(8px, env(safe-area-inset-bottom));\r
      justify-content: space-around;\r
      backdrop-filter: blur(16px);\r
    }\r
    .mbn-item {\r
      display: flex; flex-direction: column; align-items: center; gap: 3px;\r
      padding: 6px 12px; border-radius: var(--radius-sm);\r
      color: rgba(255,255,255,0.4); cursor: pointer;\r
      transition: color 0.2s; background: none; border: none;\r
      font-family: 'Outfit', sans-serif; min-width: 56px;\r
      -webkit-tap-highlight-color: transparent;\r
    }\r
    .mbn-item svg { flex-shrink: 0; }\r
    .mbn-item span { font-size: 10px; font-weight: 600; letter-spacing: 0.01em; }\r
    .mbn-item.active { color: var(--sage-l); }\r
    .mbn-item .mbn-dot {\r
      width: 5px; height: 5px; border-radius: 50%;\r
      background: var(--terra); position: absolute;\r
      top: 2px; right: 2px;\r
    }\r
    .mbn-icon-wrap { position: relative; }\r
\r
    /* ============================================================\r
       RESPONSIVE â€” TABLET (â‰¤ 1024px)\r
    ============================================================ */\r
    @media (max-width: 1024px) {\r
      /* Landing */\r
      .landing-nav { padding: 16px 32px; }\r
      .hero { grid-template-columns: 1fr; gap: 40px; padding: 60px 32px; min-height: auto; }\r
      .hero::before { display: none; }\r
      .hero-right { justify-content: flex-start; }\r
      .hero-visual-card { width: 100%; max-width: 500px; }\r
      .steps-grid { grid-template-columns: 1fr 1fr; }\r
      .cat-grid { grid-template-columns: 1fr 1fr; }\r
      .section { padding: 72px 32px; }\r
      .landing-footer { padding: 48px 32px; }\r
\r
      /* Dashboard layout â€” hide sidebar, show mobile bar */\r
      :root { --sidebar-w: 0px; }\r
      .sidebar {\r
        position: fixed; left: -280px; top: 0; bottom: 0; z-index: 300;\r
        width: 280px !important; height: 100% !important;\r
        overflow-y: auto;\r
      }\r
\r
      .barpart{\r
        color: red;\r
      }\r
      .sidebar.mobile-open { left: 0; box-shadow: var(--shadow-lg); }\r
      .mobile-topbar { display: flex; }\r
      .topbar { display: none; }\r
      .main-content { padding-bottom: 72px; height: calc(100vh - 60px); }\r
      .dashboard-body { min-height: calc(100vh - 60px); }\r
      .mobile-bottom-nav { display: flex; }\r
\r
      /* Grid adjustments */\r
      .bento-score { grid-column: span 6; }\r
      .bento-dist  { grid-column: span 6; }\r
      .bento-priority { grid-column: span 12; }\r
      .bento-radar { grid-column: span 6; }\r
      .bento-routine { grid-column: span 6; }\r
      .bento-cat   { grid-column: span 6; }\r
      .bento-alert > div { flex-wrap: wrap; gap: 12px; }\r
      .alert-action { width: 100%; }\r
\r
      /* Recommendations */\r
      .recs-layout { grid-template-columns: 1fr; }\r
      .skin-plan-cta { flex-direction: column; gap: 16px; }\r
      .btn-primary-lg { width: 100%; }\r
    }\r
\r
    /* ============================================================\r
       RESPONSIVE â€” MOBILE (â‰¤ 640px)\r
    ============================================================ */\r
    @media (max-width: 640px) {\r
      /* Landing nav */\r
      .landing-nav { padding: 14px 20px; }\r
      .nav-links a:not(.nav-cta) { display: none; }\r
      .nav-links { gap: 12px; }\r
\r
      /* Hero */\r
      .hero { padding: 40px 20px 56px; gap: 32px; }\r
      .hero-title { font-size: 36px; }\r
      .hero-desc { font-size: 15px; }\r
      .hero-actions { flex-direction: column; }\r
      .btn-primary, .btn-secondary { width: 100%; justify-content: center; text-align: center; }\r
      .hero-stats { gap: 10px; }\r
      .stat-pill { font-size: 12px; padding: 8px 14px; }\r
      .hero-visual-card { padding: 24px; }\r
      .hvc-big-score { font-size: 56px; }\r
\r
      /* How it works */\r
      .section { padding: 56px 20px; }\r
      .section-title { font-size: 30px; margin-bottom: 32px; }\r
      .steps-grid { grid-template-columns: 1fr; gap: 16px; }\r
      .step-number { font-size: 60px; right: 14px; top: 12px; }\r
\r
      /* Categories */\r
      .cat-grid { grid-template-columns: 1fr; gap: 14px; }\r
\r
      /* Footer */\r
      .landing-footer { padding: 40px 20px; flex-direction: column; gap: 24px; }\r
      .footer-links { flex-direction: column; gap: 12px; }\r
\r
      /* Dashboard views */\r
      .views-container { padding: 16px 16px 24px; }\r
\r
      /* Bento â€” stack everything */\r
      .bento-grid { grid-template-columns: 1fr; gap: 14px; }\r
      .bento-score,\r
      .bento-dist,\r
      .bento-priority,\r
      .bento-radar,\r
      .bento-routine,\r
      .bento-cat,\r
      .bento-alert { grid-column: span 1 !important; }\r
      .routine-grid { grid-template-columns: 1fr; }\r
\r
      /* Score ring smaller */\r
      .score-ring-wrap { width: 140px; height: 140px; }\r
      #scoreChart { width: 140px !important; height: 140px !important; }\r
      .big-score { font-size: 40px; }\r
\r
      /* Traits grid â€” single col */\r
      .traits-grid { grid-template-columns: 1fr; gap: 12px; }\r
      .trait-card-wide { grid-column: span 1; }\r
      .trait-card { padding: 16px; }\r
\r
      /* Recs */\r
      .recs-layout { grid-template-columns: 1fr; gap: 14px; }\r
      .rec-card { padding: 22px 20px; }\r
      .rec-card h3 { font-size: 16px; }\r
      .skin-plan-cta { padding: 24px 20px; border-radius: var(--radius-md); }\r
      .skin-plan-cta h3 { font-size: 18px; }\r
\r
      /* Modal */\r
      .modal-box { padding: 28px 20px; border-radius: var(--radius-lg); }\r
      .modal-h2 { font-size: 20px; }\r
      .modal-prs-big { font-size: 36px; }\r
      .modal-risk-banner { flex-wrap: wrap; gap: 10px; }\r
\r
      /* Alert banner */\r
      .alert-banner { flex-direction: column; align-items: flex-start; gap: 10px; }\r
      .alert-action { width: 100%; }\r
    }\r
\r
    @media (max-width: 380px) {\r
      .hero-title { font-size: 30px; }\r
      .mbn-item span { display: none; }\r
      .mbn-item { min-width: 44px; }\r
    }\r
    \r
   .trait-search{\r
    background-color: #1a1a1a0e;\r
   }\r
   \r
\r
    \r
    \r
   \r
\r
\r
\r
/* ============================================================\r
   RISK CATEGORIES CARD (bento-score replacement)\r
============================================================ */\r
.rc-list {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 0;\r
}\r
\r
.rc-item {\r
  border: 1px solid var(--border-color, #E8E0D5);\r
  border-radius: 12px;\r
  margin-bottom: 8px;\r
  overflow: hidden;\r
  cursor: pointer;\r
  background: var(--card-bg, #FEFCF9);\r
  transition: box-shadow .15s;\r
}\r
.rc-item:last-child { margin-bottom: 0; }\r
.rc-item:hover { box-shadow: 0 2px 10px rgba(0,0,0,0.07); }\r
.rc-item.rc-expanded { background: #fff; box-shadow: 0 2px 12px rgba(0,0,0,0.06); }\r
\r
.rc-item-head {\r
  display: flex;\r
  align-items: center;\r
  gap: 12px;\r
  padding: 13px 14px;\r
}\r
\r
.rc-icon {\r
  width: 38px; height: 38px;\r
  border-radius: 10px;\r
  display: flex; align-items: center; justify-content: center;\r
  flex-shrink: 0;\r
}\r
.rc-icon--red   { background: rgba(193,99,74,0.10); color: var(--terra, #C1634A); }\r
.rc-icon--amber { background: rgba(212,168,83,0.12); color: var(--gold, #D4A853); }\r
.rc-icon--blue  { background: rgba(107,174,214,0.12); color: #5B9FCC; }\r
.rc-icon--green { background: rgba(123,158,135,0.12); color: var(--sage, #7B9E87); }\r
\r
.rc-meta { flex: 1; min-width: 0; }\r
.rc-name {\r
  font-size: 13.5px; font-weight: 700;\r
  color: var(--ink, #1A1A1A);\r
  display: flex; align-items: center; gap: 7px; flex-wrap: wrap;\r
}\r
.rc-sub {\r
  font-size: 11.5px;\r
  color: var(--muted, #9E9589);\r
  margin-top: 1px;\r
}\r
\r
.rc-badge {\r
  font-size: 10px; font-weight: 700;\r
  padding: 2px 8px; border-radius: 100px;\r
  flex-shrink: 0;\r
}\r
.rc-badge--vh { background: rgba(242,90,0,0.1); color: var(--risk-very-high, #F25A00); }\r
.rc-badge--h  { background: rgba(255,176,103,0.2); color: #b86319; }\r
.rc-badge--m  { background: rgba(185,185,187,0.18); color: #66666a; }\r
.rc-badge--l  { background: rgba(180,172,217,0.18); color: #7267a9; }\r
\r
.rc-chevron {\r
  color: var(--muted, #9E9589);\r
  flex-shrink: 0;\r
  transition: transform .2s;\r
}\r
.rc-chevron--up { /* already pointing up, no rotation needed */ }\r
\r
.rc-expand-body {\r
  padding: 0 14px 14px 64px;\r
  animation: rcFadeIn .2s ease;\r
}\r
@keyframes rcFadeIn { from { opacity:0; transform:translateY(-4px); } to { opacity:1; transform:translateY(0); } }\r
\r
.rc-tags {\r
  display: flex; gap: 6px; flex-wrap: wrap;\r
  margin-bottom: 10px;\r
}\r
.rc-tag {\r
  font-size: 11.5px; font-weight: 500;\r
  padding: 4px 11px;\r
  background: var(--cream2, #F0E8DC);\r
  border-radius: 100px;\r
  color: var(--ink2, #3D3530);\r
  border: 1px solid rgba(0,0,0,0.06);\r
}\r
\r
.rc-desc {\r
  font-size: 12.5px;\r
  color: var(--muted, #6B6357);\r
  line-height: 1.65;\r
  margin-bottom: 11px;\r
}\r
\r
.rc-footer {\r
  display: flex; align-items: center; gap: 5px;\r
  font-size: 11.5px; color: var(--muted-l, #B0A898);\r
}\r
.rc-footer span:first-of-type { flex: 1; }\r
.rc-time {\r
  flex-shrink: 0;\r
  font-size: 11px;\r
  color: var(--muted-l, #B0A898);\r
  white-space: nowrap;\r
}\r
\r
\r
/* ============================================================\r
   MINIMAL COLORS + INTERACTIONS\r
============================================================ */\r
\r
/* --- Nav: active item sage left bar + soft bg --- */\r
.nav-item {\r
  border-left: 3px solid transparent;\r
  transition: background 0.18s, color 0.18s, border-color 0.18s, transform 0.15s;\r
}\r
.nav-item:hover {\r
  border-left-color: rgba(123,158,135,0.4);\r
  transform: translateX(2px);\r
}\r
.nav-item.active {\r
  border-left: 3px solid var(--sage);\r
  padding-left: 9px;\r
  background: rgba(123,158,135,0.13) !important;\r
}\r
.nav-item.active svg { color: var(--sage-l) !important; opacity: 1 !important; }\r
\r
/* --- Topbar: thin gradient bottom border (sageâ†’goldâ†’sky) --- */\r
.topbar {\r
  border-bottom: 2px solid transparent !important;\r
  background-image:\r
    linear-gradient(rgba(247,243,238,0.92), rgba(247,243,238,0.92)),\r
    linear-gradient(90deg, var(--sage) 0%, var(--gold) 55%, var(--sky) 100%) !important;\r
  background-origin: border-box !important;\r
  background-clip: padding-box, border-box !important;\r
}\r
\r
/* --- Bento cards: staggered slide-up on load --- */\r
@keyframes bentoIn {\r
  from { opacity: 0; transform: translateY(14px); }\r
  to   { opacity: 1; transform: translateY(0); }\r
}\r
.bento-card {\r
  animation: bentoIn 0.4s cubic-bezier(0.22,1,0.36,1) both;\r
  transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;\r
}\r
.bento-grid .bento-card:nth-child(1) { animation-delay: 0.03s; }\r
.bento-grid .bento-card:nth-child(2) { animation-delay: 0.08s; }\r
.bento-grid .bento-card:nth-child(3) { animation-delay: 0.13s; }\r
.bento-grid .bento-card:nth-child(4) { animation-delay: 0.18s; }\r
.bento-grid .bento-card:nth-child(5) { animation-delay: 0.22s; }\r
.bento-grid .bento-card:nth-child(6) { animation-delay: 0.26s; }\r
.bento-grid .bento-card:nth-child(7) { animation-delay: 0.30s; }\r
.bento-grid .bento-card:nth-child(8) { animation-delay: 0.34s; }\r
.bento-grid .bento-card:nth-child(9) { animation-delay: 0.38s; }\r
\r
.bento-card:hover {\r
  transform: translateY(-3px);\r
  box-shadow: 0 8px 28px rgba(26,26,26,0.09), 0 2px 6px rgba(26,26,26,0.05) !important;\r
  border-color: var(--sage-l) !important;\r
}\r
\r
/* --- Category cards: colour-tinted top accent + hover shadow --- */\r
.cat-accent-allergies  .cat-summary-num { color: var(--sage-d); }\r
.cat-accent-derm       .cat-summary-num { color: var(--terra); }\r
.cat-accent-aesthetics .cat-summary-num { color: #9a7020; }\r
.cat-accent-markers    .cat-summary-num { color: #2e6fa3; }\r
\r
.cat-accent-allergies  .cat-summary-fill { background: var(--sage); }\r
.cat-accent-derm       .cat-summary-fill { background: var(--terra); }\r
.cat-accent-aesthetics .cat-summary-fill { background: var(--gold); }\r
.cat-accent-markers    .cat-summary-fill { background: var(--sky); }\r
\r
.cat-accent-allergies:hover  { box-shadow: 0 6px 22px rgba(123,158,135,0.16) !important; border-color: var(--sage-l) !important; }\r
.cat-accent-derm:hover       { box-shadow: 0 6px 22px rgba(193,99,74,0.14)  !important; border-color: rgba(193,99,74,0.35) !important; }\r
.cat-accent-aesthetics:hover { box-shadow: 0 6px 22px rgba(212,168,83,0.16) !important; border-color: rgba(212,168,83,0.35) !important; }\r
.cat-accent-markers:hover    { box-shadow: 0 6px 22px rgba(107,174,214,0.18)!important; border-color: rgba(107,174,214,0.35) !important; }\r
\r
/* --- Alert banner: breathing glow --- */\r
@keyframes alertGlow {\r
  0%, 100% { box-shadow: inset 3px 0 0 var(--terra); }\r
  50%       { box-shadow: inset 3px 0 0 var(--terra), 0 0 16px rgba(242,90,0,0.14); }\r
}\r
.alert-banner { animation: alertGlow 3.5s ease-in-out infinite; }\r
\r
/* --- Badge danger: gentle pulse --- */\r
@keyframes badgePulse {\r
  0%, 100% { opacity: 1; }\r
  50%       { opacity: 0.65; }\r
}\r
.badge-danger { animation: badgePulse 2.2s ease-in-out infinite; }\r
\r
/* --- Trait card: shimmer on hover + risk ring --- */\r
.trait-card { overflow: hidden; }\r
.trait-card::after {\r
  content: '';\r
  position: absolute; top: 0; left: -70%; width: 40%; height: 100%;\r
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);\r
  transform: skewX(-18deg);\r
  pointer-events: none; opacity: 0;\r
}\r
@keyframes shimmer {\r
  from { left: -70%; }\r
  to   { left: 130%; }\r
}\r
.trait-card:hover::after {\r
  opacity: 1;\r
  animation: shimmer 0.5s ease forwards;\r
}\r
.trait-card:hover {\r
  transform: translateY(-2px);\r
  box-shadow: var(--shadow-md) !important;\r
}\r
.trait-card[data-risk="very-high"] {\r
  box-shadow: 0 0 0 1.5px rgba(242,90,0,0.28), var(--shadow-sm) !important;\r
}\r
.trait-card[data-risk="very-high"]:hover {\r
  box-shadow: 0 0 0 2px rgba(242,90,0,0.45), var(--shadow-md) !important;\r
}\r
\r
/* --- Risk fill strips: animate width in --- */\r
@keyframes fillIn {\r
  from { transform: scaleX(0); }\r
  to   { transform: scaleX(1); }\r
}\r
.risk-fill {\r
  transform-origin: left;\r
  animation: fillIn 0.8s cubic-bezier(0.22,1,0.36,1) both;\r
}\r
.trait-card:nth-child(1) .risk-fill { animation-delay: 0.05s; }\r
.trait-card:nth-child(2) .risk-fill { animation-delay: 0.10s; }\r
.trait-card:nth-child(3) .risk-fill { animation-delay: 0.15s; }\r
.trait-card:nth-child(4) .risk-fill { animation-delay: 0.20s; }\r
.trait-card:nth-child(5) .risk-fill { animation-delay: 0.25s; }\r
.trait-card:nth-child(n+6) .risk-fill { animation-delay: 0.30s; }\r
\r
/* --- Priority items: slide right + sage tint on hover --- */\r
.priority-item {\r
  transition: all 0.18s;\r
}\r
.priority-item:hover {\r
  background: rgba(123,158,135,0.08) !important;\r
  border-color: var(--sage-l) !important;\r
  transform: translateX(3px);\r
}\r
\r
/* --- CTA banner: slow gradient animation --- */\r
@keyframes ctaFlow {\r
  0%   { background-position: 0% 50%; }\r
  50%  { background-position: 100% 50%; }\r
  100% { background-position: 0% 50%; }\r
}\r
.skin-plan-cta {\r
  background: linear-gradient(120deg, #1a3328 0%, #243d2a 35%, #2a4a38 65%, #1e3a2f 100%) !important;\r
  background-size: 250% 250% !important;\r
  animation: ctaFlow 9s ease infinite !important;\r
}\r
\r
/* --- Routine card: gold tint + checked glow --- */\r
.bento-routine {\r
  background: linear-gradient(150deg, #fff 65%, rgba(212,168,83,0.04) 100%) !important;\r
}\r
.routine-item-btn.checked .routine-check {\r
  background: var(--sage) !important;\r
  border-color: var(--sage-d) !important;\r
  box-shadow: 0 0 0 3px rgba(123,158,135,0.18);\r
  transition: all 0.2s;\r
}\r
\r
/* --- Radar card: sage tint --- */\r
.bento-radar {\r
  background: #fff !important;\r
  display: flex; flex-direction: column; gap: 12px;\r
}\r
.polar-header {\r
  display: flex; align-items: center; justify-content: space-between;\r
}\r
.polar-overall-badge {\r
  font-size: 11px; font-weight: 700;\r
  background: #F7F3EE; color: #6B6357;\r
  border: 1px solid #D9CEBD;\r
  padding: 3px 10px; border-radius: 100px;\r
}\r
\r
/* Ring SVG */\r
.ring-wrap {\r
  display: flex; justify-content: center; align-items: center;\r
  padding: 4px 0;\r
}\r
.ring-svg {\r
  width: 180px; height: 180px; overflow: visible;\r
}\r
.ring-centre-val {\r
  font-family: 'Outfit', sans-serif;\r
  font-size: 22px; font-weight: 800; fill: #1E3A2F;\r
  transition: fill 0.2s;\r
}\r
.ring-centre-lbl {\r
  font-family: 'Outfit', sans-serif;\r
  font-size: 9px; font-weight: 600; fill: #9E9589;\r
  text-transform: uppercase; letter-spacing: 0.06em;\r
}\r
\r
/* Legend rows */\r
.ring-legend {\r
  display: flex; flex-direction: column; gap: 7px;\r
}\r
.rl-item {\r
  display: flex; align-items: center; justify-content: space-between;\r
  padding: 5px 8px; border-radius: 9px; cursor: pointer;\r
  transition: background 0.15s;\r
  border: 1px solid transparent;\r
}\r
.rl-item:hover, .rl-item--active {\r
  background: #F7F3EE; border-color: #EFE9DF;\r
}\r
.rl-left {\r
  display: flex; align-items: center; gap: 8px;\r
}\r
.rl-swatch {\r
  width: 8px; height: 8px; border-radius: 50%;\r
  background: var(--c); flex-shrink: 0;\r
}\r
.rl-name {\r
  font-size: 12px; font-weight: 600; color: #4B4540;\r
}\r
.rl-right {\r
  display: flex; align-items: center; gap: 8px;\r
}\r
.rl-bar-track {\r
  width: 60px; height: 4px; background: #EFE9DF;\r
  border-radius: 100px; overflow: hidden;\r
}\r
.rl-bar {\r
  height: 100%; width: var(--w); background: var(--c);\r
  border-radius: 100px;\r
  animation: rlBarIn 0.7s cubic-bezier(0.4,0,0.2,1) both;\r
}\r
@keyframes rlBarIn {\r
  from { width: 0; }\r
  to   { width: var(--w); }\r
}\r
.rl-count {\r
  font-size: 12px; font-weight: 800; color: #1E3A2F;\r
  min-width: 16px; text-align: right;\r
  font-family: 'Outfit', sans-serif;\r
}\r
\r
/* --- Trait view entrance --- */\r
@keyframes traitIn {\r
  from { opacity: 0; transform: translateY(10px); }\r
  to   { opacity: 1; transform: translateY(0); }\r
}\r
.trait-card {\r
  animation: traitIn 0.35s cubic-bezier(0.22,1,0.36,1) both;\r
}\r
.traits-grid .trait-card:nth-child(1)  { animation-delay: 0.04s; }\r
.traits-grid .trait-card:nth-child(2)  { animation-delay: 0.08s; }\r
.traits-grid .trait-card:nth-child(3)  { animation-delay: 0.12s; }\r
.traits-grid .trait-card:nth-child(4)  { animation-delay: 0.16s; }\r
.traits-grid .trait-card:nth-child(5)  { animation-delay: 0.20s; }\r
.traits-grid .trait-card:nth-child(6)  { animation-delay: 0.24s; }\r
.traits-grid .trait-card:nth-child(7)  { animation-delay: 0.28s; }\r
.traits-grid .trait-card:nth-child(n+8){ animation-delay: 0.32s; }\r
\r
/* --- Main content scrollbar: hidden but still scrollable --- */\r
.main-content {\r
  -ms-overflow-style: none;\r
  scrollbar-width: none;\r
}\r
.main-content::-webkit-scrollbar { width: 0; height: 0; display: none; }\r
@keyframes introBar {\r
  0%, 100% { border-left-color: var(--sage); }\r
  50%       { border-left-color: var(--sage-l); }\r
}\r
.view-intro { animation: introBar 3s ease-in-out infinite; }\r
\r
/* --- rc-items: smooth hover + open shadow --- */\r
.rc-item { transition: box-shadow 0.2s, border-color 0.2s; }\r
.rc-item:hover { box-shadow: 0 3px 12px rgba(0,0,0,0.07) !important; }\r
.rc-item.rc-expanded {\r
  box-shadow: 0 4px 16px rgba(0,0,0,0.07), 0 0 0 1.5px rgba(123,158,135,0.2) !important;\r
}\r
\r
\r
\r
\r
\r
\r
.overview-summary-card {\r
  grid-column: 1 / -1;\r
  padding: 26px;\r
  color: #F8F5EF;\r
  border: 1px solid rgba(255,255,255,0.08);\r
  background:\r
    radial-gradient(circle at top right, rgba(168,197,189,0.18), transparent 28%),\r
    linear-gradient(135deg, #142235 0%, #25384B 52%, #314C63 100%);\r
  box-shadow: 0 24px 70px rgba(15,23,42,0.18);\r
  overflow: hidden;\r
  isolation: isolate;\r
}\r
.overview-summary-card::before {\r
  content: "";\r
  position: absolute;\r
  inset: 0;\r
  background: linear-gradient(120deg, rgba(255,255,255,0.08), transparent 32%, transparent 68%, rgba(255,255,255,0.04));\r
  opacity: 0.8;\r
  pointer-events: none;\r
}\r
.overview-summary-card__glow {\r
  position: absolute;\r
  top: -80px;\r
  right: -40px;\r
  width: 220px;\r
  height: 220px;\r
  border-radius: 999px;\r
  background: radial-gradient(circle, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.02) 55%, transparent 72%);\r
  filter: blur(6px);\r
  animation: overviewGlowFloat 8s ease-in-out infinite;\r
  pointer-events: none;\r
}\r
.overview-summary-card__top,\r
.overview-summary-card__grid,\r
.overview-summary-card__body {\r
  position: relative;\r
  z-index: 1;\r
}\r
.overview-summary-card__top {\r
  display: flex;\r
  flex-wrap: wrap;\r
  align-items: flex-start;\r
  justify-content: space-between;\r
  gap: 16px;\r
}\r
.overview-summary-card__eyebrow {\r
  margin-bottom: 10px;\r
  color: rgba(248,245,239,0.68);\r
}\r
.overview-summary-card__title {\r
  margin: 0;\r
  max-width: 860px;\r
  font-size: clamp(1.7rem, 2.8vw, 2.35rem);\r
  line-height: 1.08;\r
  letter-spacing: -0.04em;\r
  color: #fff;\r
  text-wrap: balance;\r
}\r
.overview-summary-card__pill {\r
  padding: 10px 14px;\r
  border-radius: 999px;\r
  border: 1px solid rgba(255,255,255,0.12);\r
  background: rgba(255,255,255,0.09);\r
  backdrop-filter: blur(14px);\r
  font-size: 12px;\r
  font-weight: 700;\r
  letter-spacing: 0.08em;\r
  text-transform: uppercase;\r
  color: rgba(248,245,239,0.88);\r
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.08);\r
}\r
.overview-summary-card__body {\r
  margin: 18px 0 0;\r
  max-width: 920px;\r
  font-size: 14px;\r
  line-height: 1.85;\r
  color: rgba(248,245,239,0.76);\r
}\r
.overview-summary-card__grid {\r
  display: grid;\r
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\r
  gap: 12px;\r
  margin-top: 22px;\r
}\r
.overview-summary-card__item {\r
  padding: 16px;\r
  border-radius: 18px;\r
  border: 1px solid rgba(255,255,255,0.08);\r
  background: linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.07));\r
  backdrop-filter: blur(12px);\r
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.06);\r
  transition: transform 0.22s ease, border-color 0.22s ease, background 0.22s ease;\r
  animation: overviewItemRise 0.55s cubic-bezier(0.22,1,0.36,1) both;\r
}\r
.overview-summary-card__item:nth-child(1) { animation-delay: 0.10s; }\r
.overview-summary-card__item:nth-child(2) { animation-delay: 0.16s; }\r
.overview-summary-card__item:nth-child(3) { animation-delay: 0.22s; }\r
.overview-summary-card__item:hover {\r
  transform: translateY(-2px);\r
  border-color: rgba(255,255,255,0.16);\r
  background: linear-gradient(180deg, rgba(255,255,255,0.16), rgba(255,255,255,0.09));\r
}\r
.overview-summary-card__label {\r
  font-size: 11px;\r
  letter-spacing: 0.18em;\r
  text-transform: uppercase;\r
  color: rgba(248,245,239,0.48);\r
}\r
.overview-summary-card__value {\r
  margin-top: 8px;\r
  font-size: 17px;\r
  font-weight: 600;\r
  color: #F8F5EF;\r
}\r
.overview-summary-card__subcopy {\r
  margin-top: 6px;\r
  font-size: 13px;\r
  line-height: 1.6;\r
  color: rgba(248,245,239,0.7);\r
}\r
@keyframes overviewGlowFloat {\r
  0%, 100% { transform: translate3d(0, 0, 0) scale(1); opacity: 0.75; }\r
  50% { transform: translate3d(-10px, 10px, 0) scale(1.04); opacity: 1; }\r
}\r
@keyframes overviewItemRise {\r
  from { opacity: 0; transform: translateY(16px); }\r
  to { opacity: 1; transform: translateY(0); }\r
}\r
@media (max-width: 768px) {\r
  .overview-summary-card {\r
    padding: 22px 18px;\r
  }\r
  .overview-summary-card__title {\r
    font-size: 1.7rem;\r
  }\r
  .overview-summary-card__body {\r
    font-size: 13px;\r
    line-height: 1.78;\r
  }\r
}\r
\r
`,dh=`// ============================================================\r
// MOBILE SIDEBAR\r
// ============================================================\r
function toggleSidebar() {\r
  const sidebar = document.getElementById('sidebar');\r
  const overlay = document.getElementById('sidebar-overlay');\r
  const btn = document.getElementById('hamburger-btn');\r
  const isOpen = sidebar.classList.contains('mobile-open');\r
  if (isOpen) {\r
    closeSidebar();\r
  } else {\r
    sidebar.classList.add('mobile-open');\r
    overlay.classList.add('active');\r
    btn.classList.add('open');\r
    document.body.style.overflow = 'hidden';\r
  }\r
}\r
\r
function closeSidebar() {\r
  const sidebar = document.getElementById('sidebar');\r
  const overlay = document.getElementById('sidebar-overlay');\r
  const btn = document.getElementById('hamburger-btn');\r
  sidebar.classList.remove('mobile-open');\r
  overlay.classList.remove('active');\r
  btn.classList.remove('open');\r
  document.body.style.overflow = '';\r
}\r
\r
// ============================================================\r
// NAVIGATION & VIEW SYSTEM\r
// ============================================================\r
function showDashboard() {\r
  document.getElementById('landing-page').classList.remove('active');\r
  document.getElementById('dashboard-page').classList.add('active');\r
  window.scrollTo(0, 0);\r
  setTimeout(initCharts, 150);\r
}\r
\r
const viewMeta = {
  overview:         { title: 'Overview',               subtitle: 'Genetic Skin Health Summary' },
  allergies:        { title: 'Allergies',               subtitle: '4 traits analyzed' },
  dermatological:   { title: 'Dermatological Diseases', subtitle: '15 traits analyzed' },
  aesthetics:       { title: 'Skin Aesthetics',         subtitle: '8 traits analyzed' },
  markers:          { title: 'Skin Health Markers',     subtitle: '2 biomarkers analyzed' },
  lipids:           { title: 'Fatty Acid Profile',      subtitle: '8 traits analyzed' },
  metabolic:        { title: 'Metabolic Efficiency',    subtitle: '7 traits analyzed' },
  vitamins:         { title: 'Vitamins & Micronutrients', subtitle: '7 traits analyzed' },
  cardio:           { title: 'Cardiovascular Markers',  subtitle: '7 traits analyzed' },
  protein:          { title: 'Protein Building Blocks', subtitle: '7 traits analyzed' },
  recommendations:  { title: 'Recommendations',         subtitle: 'Personalized action plan' },
};\r
\r
function updateTopbarFilterVisibility(viewId) {\r
  const filterGroup = document.querySelector('.filter-group');\r
  if (!filterGroup) return;\r
  filterGroup.style.display = (viewId === 'overview') ? 'none' : 'flex';\r
}\r
\r
function showView(viewId) {\r
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));\r
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));\r
  document.getElementById('view-' + viewId)?.classList.add('active');\r
  document.querySelector(\`.nav-item[data-view="\${viewId}"]\`)?.classList.add('active');\r
  const meta = viewMeta[viewId] || {};\r
  document.getElementById('page-title').textContent = meta.title || '';\r
  document.getElementById('page-subtitle').textContent = meta.subtitle || '';\r
  document.getElementById('risk-filter').value = 'all';\r
  updateTopbarFilterVisibility(viewId);\r
  if (viewId === 'overview') setTimeout(initCharts, 50);\r
  const searchInput = document.getElementById('trait-search');\r
  if (searchInput) filterTraits(searchInput.value || '');\r
\r
  // Sync mobile bottom nav\r
  document.querySelectorAll('.mbn-item').forEach(btn => {\r
    btn.classList.toggle('active', btn.dataset.view === viewId);\r
  });\r
\r
  // Close sidebar on mobile after navigation\r
  if (window.innerWidth <= 1024) closeSidebar();\r
\r
  // Scroll main content to top\r
  const mc = document.querySelector('.main-content');\r
  if (mc) mc.scrollTo({ top: 0, behavior: 'smooth' });\r
}\r
\r
function filterTraits(query) {\r
  const q = query.toLowerCase().trim();\r
\r
  document.querySelectorAll('.trait-card').forEach(card => {\r
    const name = card.querySelector('.trait-name')?.textContent.toLowerCase() || '';\r
    const desc = card.querySelector('.trait-desc')?.textContent.toLowerCase() || '';\r
    card.style.display = (name.includes(q) || desc.includes(q)) ? '' : 'none';\r
  });\r
\r
  const activeViewId = document.querySelector('.view.active')?.id?.replace('view-', '');\r
  if (activeViewId === 'overview' && q) {\r
    const searchableViews = ['allergies', 'dermatological', 'aesthetics', 'markers', 'lipids', 'metabolic', 'vitamins', 'cardio', 'protein'];\r
    const targetView = searchableViews.find((viewId) => {\r
      const viewEl = document.getElementById(\`view-\${viewId}\`);\r
      if (!viewEl) return false;\r
      return Array.from(viewEl.querySelectorAll('.trait-card')).some((card) => {\r
        const name = card.querySelector('.trait-name')?.textContent.toLowerCase() || '';\r
        const desc = card.querySelector('.trait-desc')?.textContent.toLowerCase() || '';\r
        return name.includes(q) || desc.includes(q);\r
      });\r
    });\r
    if (targetView) showView(targetView);\r
  }\r
}\r
\r
function filterByRisk(level) {\r
  document.querySelectorAll('.trait-card').forEach(card => {\r
    card.style.display = (level === 'all' || card.dataset.risk === level) ? '' : 'none';\r
  });\r
}\r
\r
function sortTraitCardsByRisk() {\r
  const riskOrder = {\r
    'very-high': 0,\r
    'high': 1,\r
    'medium': 2,\r
    'low': 3,\r
    'very-low': 4\r
  };\r
\r
  document.querySelectorAll('.traits-grid').forEach(grid => {\r
    const cards = Array.from(grid.querySelectorAll('.trait-card'));\r
    cards\r
      .sort((a, b) => (riskOrder[a.dataset.risk] ?? 99) - (riskOrder[b.dataset.risk] ?? 99))\r
      .forEach(card => grid.appendChild(card));\r
  });\r
}\r
\r
function getRoutineProfileKey() {\r
  const cards = Array.from(document.querySelectorAll('.trait-card[data-risk]'));\r
  if (!cards.length) return 'medium';\r
\r
  const riskWeights = { 'very-high': 5, 'high': 4, 'medium': 3, 'low': 2, 'very-low': 1 };\r
  const counts = { 'very-high': 0, 'high': 0, 'medium': 0, 'low': 0, 'very-low': 0 };\r
  let weightedSum = 0;\r
\r
  cards.forEach(card => {\r
    const risk = card.dataset.risk;\r
    if (!(risk in riskWeights)) return;\r
    counts[risk] += 1;\r
    weightedSum += riskWeights[risk];\r
  });\r
\r
  const avg = weightedSum / cards.length;\r
  let profile = 'very-low';\r
  if (avg >= 4.2) profile = 'very-high';\r
  else if (avg >= 3.5) profile = 'high';\r
  else if (avg >= 2.6) profile = 'medium';\r
  else if (avg >= 1.8) profile = 'low';\r
\r
  // Escalate one level for concentrated high-severity outliers.\r
  if (counts['very-high'] >= 2) {\r
    if (profile === 'medium') profile = 'high';\r
    if (profile === 'high') profile = 'very-high';\r
  }\r
  return profile;\r
}\r
\r
function renderRoutineBuilder() {\r
  const card = document.getElementById('routine-builder-card');\r
  const morningList = document.getElementById('routine-morning-list');\r
  const nightList = document.getElementById('routine-night-list');\r
  const badge = document.getElementById('routine-profile-badge');\r
  const subtitle = document.getElementById('routine-sub');\r
  const footer = document.getElementById('routine-footer-note');\r
  const progressMeta = document.getElementById('routine-progress-meta');\r
  const progressFill = document.getElementById('routine-progress-fill');\r
\r
  if (!card || !morningList || !nightList || !badge || !subtitle || !footer || !progressMeta || !progressFill) return;\r
\r
  const routineProfiles = {\r
    'very-high': {\r
      label: 'Very High Focus',\r
      subtitle: 'Your routine prioritizes UV protection, inflammation control, and skin-monitoring habits.',\r
      morning: [\r
        'Apply broad-spectrum mineral SPF 50+ before sun exposure.',\r
        'Use antioxidant serum (Vitamin C or niacinamide) to reduce oxidative stress.',\r
        'Wear UV-protective clothing or hat if outdoors >15 minutes.',\r
        'Photograph any evolving lesion or unusual irritation once weekly.'\r
      ],\r
      night: [\r
        'Double cleanse gently to remove UV filters and pollutants.',\r
        'Apply barrier-repair moisturizer with ceramides and panthenol.',\r
        'Do a 60-second skin check for new/changing spots (ABCDE).',\r
        'Log today\\'s trigger events (heat, friction, allergens, stress).'\r
      ],\r
      note: 'High-risk profile: consistency matters more than product count.'\r
    },\r
    'high': {\r
      label: 'High Focus',\r
      subtitle: 'This routine emphasizes prevention and calm-skin maintenance across high-risk traits.',\r
      morning: [\r
        'Use a low-irritant cleanser and apply SPF 50.',\r
        'Add a calming active (niacinamide 4-5% or azelaic acid).',\r
        'Reapply sunscreen around midday when outdoors.',\r
        'Avoid known irritants (fragrance, harsh exfoliants).'\r
      ],\r
      night: [\r
        'Cleanse gently and avoid over-scrubbing.',\r
        'Use ceramide-rich moisturizer to support barrier recovery.',\r
        'Apply anti-inflammatory serum if redness or itching appears.',\r
        'Track skin response and flare frequency in your log.'\r
      ],\r
      note: 'High-risk profile: prevention reduces cumulative flare burden.'\r
    },\r
    'medium': {\r
      label: 'Balanced Focus',\r
      subtitle: 'A steady preventive routine keeps medium-risk traits stable over time.',\r
      morning: [\r
        'Cleanse gently and apply daily SPF 30+.',\r
        'Use hydrating serum to maintain barrier resilience.',\r
        'Keep UV and heat exposure moderate during peak hours.',\r
        'Stay hydrated and watch for new irritation patterns.'\r
      ],\r
      night: [\r
        'Remove sunscreen and makeup fully before sleep.',\r
        'Apply moisturizer with humectants + lipids.',\r
        'Use active treatment 2-3 nights/week only if tolerated.',\r
        'Note skin comfort score (1-5) in your checklist.'\r
      ],\r
      note: 'Balanced profile: a simple routine with high adherence works best.'\r
    },\r
    'low': {\r
      label: 'Low-Risk Maintenance',\r
      subtitle: 'Focus on protecting your baseline skin health and preserving long-term resilience.',\r
      morning: [\r
        'Use lightweight cleanser and SPF 30+.',\r
        'Apply moisturizer to prevent barrier dehydration.',\r
        'Avoid unnecessary product switching.',\r
        'Limit direct midday UV when possible.'\r
      ],\r
      night: [\r
        'Cleanse and moisturize consistently.',\r
        'Use gentle active care (retinoid/AHA) only as needed.',\r
        'Spot-check for dryness or irritation.',\r
        'Keep a weekly skin photo for trend tracking.'\r
      ],\r
      note: 'Low-risk profile: maintain habits to preserve protective advantages.'\r
    },\r
    'very-low': {\r
      label: 'Protective Profile',\r
      subtitle: 'You have a favorable genetic baseline; keep routines consistent and minimal.',\r
      morning: [\r
        'Cleanse lightly and apply SPF 30.',\r
        'Use basic moisturizer to lock hydration.',\r
        'Keep routine minimal to avoid unnecessary irritation.',\r
        'Support skin health with hydration and sleep.'\r
      ],\r
      night: [\r
        'Gentle cleanse before bed.',\r
        'Apply nourishing moisturizer or overnight barrier cream.',\r
        'Use actives sparingly and only when needed.',\r
        'Review weekly routine completion for consistency.'\r
      ],\r
      note: 'Protective profile: consistency and prevention sustain low risk.'\r
    }\r
  };\r
\r
  const profileKey = getRoutineProfileKey();\r
  const profile = routineProfiles[profileKey] || routineProfiles.medium;\r
  const dayKey = new Date().toISOString().slice(0, 10);\r
  const storageKey = \`routine_builder:\${profileKey}:\${dayKey}\`;\r
\r
  let state = { morning: profile.morning.map(() => false), night: profile.night.map(() => false) };\r
  try {\r
    const saved = JSON.parse(localStorage.getItem(storageKey) || '{}');\r
    if (Array.isArray(saved.morning) && saved.morning.length === profile.morning.length) state.morning = saved.morning;\r
    if (Array.isArray(saved.night) && saved.night.length === profile.night.length) state.night = saved.night;\r
  } catch (_) {}\r
\r
  badge.textContent = \`Profile: \${profile.label}\`;\r
  subtitle.textContent = profile.subtitle;\r
  footer.textContent = profile.note;\r
  badge.classList.remove('risk-very-high', 'risk-high', 'risk-medium', 'risk-low', 'risk-very-low');\r
  badge.classList.add(\`risk-\${profileKey}\`);\r
\r
  function saveState() {\r
    try { localStorage.setItem(storageKey, JSON.stringify(state)); } catch (_) {}\r
  }\r
\r
  function updateProgress() {\r
    const total = state.morning.length + state.night.length;\r
    const completed = state.morning.filter(Boolean).length + state.night.filter(Boolean).length;\r
    const pct = total ? Math.round((completed / total) * 100) : 0;\r
    progressMeta.textContent = \`\${completed}/\${total} completed today\`;\r
    progressFill.style.width = \`\${pct}%\`\r
  }\r
\r
  function renderList(targetEl, period, items) {\r
    targetEl.innerHTML = items.map((text, idx) => \`\r
      <li>\r
        <button type="button" class="routine-item-btn \${state[period][idx] ? 'checked' : ''}" data-period="\${period}" data-index="\${idx}">\r
          <span class="routine-check" aria-hidden="true"></span>\r
          <span class="routine-item-text">\${text}</span>\r
        </button>\r
      </li>\r
    \`).join('');\r
  }\r
\r
  renderList(morningList, 'morning', profile.morning);\r
  renderList(nightList, 'night', profile.night);\r
  updateProgress();\r
\r
  card.querySelectorAll('.routine-item-btn').forEach(btn => {\r
    btn.addEventListener('click', () => {\r
      const period = btn.dataset.period;\r
      const index = Number(btn.dataset.index);\r
      if (!state[period] || Number.isNaN(index) || index < 0 || index >= state[period].length) return;\r
      state[period][index] = !state[period][index];\r
      btn.classList.toggle('checked', state[period][index]);\r
      saveState();\r
      updateProgress();\r
    });\r
  });\r
}\r
\r
function triggerDownload() {\r
  const fileName = 'report_PRS_skin (1).pdf';\r
  const link = document.createElement('a');\r
  link.href = encodeURI(fileName);\r
  link.download = fileName;\r
  document.body.appendChild(link);\r
  link.click();\r
  link.remove();\r
}\r
\r
// ============================================================\r
// CHARTS\r
// ============================================================\r
let scoreChartInst, polarChartInst, bioChartInst;\r
let chartsInitialized = false;\r
\r
function initCharts() {\r
  if (chartsInitialized) return;\r
  chartsInitialized = true;\r
\r
  // Score donut\r
  const scoreCtx = document.getElementById('scoreChart')?.getContext('2d');\r
  if (scoreCtx) {\r
    scoreChartInst = new Chart(scoreCtx, {\r
      type: 'doughnut',\r
      data: {\r
        datasets: [{\r
          data: [74, 26],\r
          backgroundColor: ['#D4A853', '#EFE9DF'],\r
          borderWidth: 0,\r
          borderRadius: 6,\r
        }]\r
      },\r
      options: {\r
        cutout: '72%',\r
        plugins: { legend: { display: false }, tooltip: { enabled: false } },\r
        animation: { duration: 1200, easing: 'easeInOutQuart' }\r
      }\r
    });\r
  }\r
\r
  // Category Risk Profile � SVG ring chart\r
  (function initRingChart() {\r
    const ringData = [\r
      { label: 'Dermatological', value: 15, color: '#C1634A' },\r
      { label: 'Aesthetics',     value: 8,  color: '#D4A853' },\r
      { label: 'Allergies',      value: 4,  color: '#7B9E87' },\r
      { label: 'Markers',        value: 2,  color: '#6BAED6' },\r
    ];\r
    const total = ringData.reduce((s, d) => s + d.value, 0);\r
    const cx = 100, cy = 100, r = 78, strokeW = 16;\r
    const circ = 2 * Math.PI * r;\r
    const gap = 4;\r
    const segG = document.getElementById('ringSegments');\r
    const centreVal = document.getElementById('ringCentreVal');\r
    const centreLbl = document.getElementById('ringCentreLbl');\r
    if (!segG) return;\r
\r
    let offset = 0;\r
    const paths = [];\r
\r
    ringData.forEach((d, i) => {\r
      const frac = d.value / total;\r
      const segLen = frac * circ - gap;\r
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');\r
      circle.setAttribute('cx', cx);\r
      circle.setAttribute('cy', cy);\r
      circle.setAttribute('r', r);\r
      circle.setAttribute('fill', 'none');\r
      circle.setAttribute('stroke', d.color);\r
      circle.setAttribute('stroke-width', strokeW);\r
      circle.setAttribute('stroke-linecap', 'round');\r
      circle.setAttribute('stroke-dasharray', \`\${segLen} \${circ - segLen}\`);\r
      circle.setAttribute('stroke-dashoffset', -offset);\r
      circle.setAttribute('transform', \`rotate(-90 \${cx} \${cy})\`);\r
      circle.style.cursor = 'pointer';\r
      circle.style.transition = 'stroke-width 0.2s, opacity 0.2s';\r
      // animate in\r
      circle.style.strokeDasharray = \`0 \${circ}\`;\r
      circle.style.transition = 'stroke-dasharray 0.7s cubic-bezier(0.4,0,0.2,1), stroke-width 0.2s, opacity 0.2s';\r
      setTimeout(() => {\r
        circle.style.strokeDasharray = \`\${segLen} \${circ - segLen}\`;\r
      }, 80 + i * 120);\r
\r
      circle.addEventListener('mouseenter', () => {\r
        paths.forEach((p, j) => { p.style.opacity = j === i ? '1' : '0.3'; p.setAttribute('stroke-width', j === i ? strokeW + 5 : strokeW - 2); });\r
        centreVal.textContent = d.value;\r
        centreVal.setAttribute('fill', d.color);\r
        centreLbl.textContent = d.label.toLowerCase();\r
        document.querySelectorAll('.rl-item').forEach((el, j) => el.classList.toggle('rl-item--active', j === i));\r
      });\r
      circle.addEventListener('mouseleave', () => {\r
        paths.forEach(p => { p.style.opacity = '1'; p.setAttribute('stroke-width', strokeW); });\r
        centreVal.textContent = total;\r
        centreVal.setAttribute('fill', '#1E3A2F');\r
        centreLbl.textContent = 'traits';\r
        document.querySelectorAll('.rl-item').forEach(el => el.classList.remove('rl-item--active'));\r
      });\r
\r
      segG.appendChild(circle);\r
      paths.push(circle);\r
      offset += frac * circ;\r
    });\r
\r
    // Legend hover ? highlight segment\r
    document.querySelectorAll('.rl-item').forEach((el, i) => {\r
      el.addEventListener('mouseenter', () => paths[i].dispatchEvent(new MouseEvent('mouseenter')));\r
      el.addEventListener('mouseleave', () => paths[i].dispatchEvent(new MouseEvent('mouseleave')));\r
    });\r
  })();\r
}\r
\r
function initBiomarkerChart() {\r
  if (bioChartInst) return;\r
  const ctx = document.getElementById('biomarkerChart')?.getContext('2d');\r
  if (!ctx) return;\r
  bioChartInst = new Chart(ctx, {\r
    type: 'bar',\r
    data: {\r
      labels: ['Kallikrein-7', 'Ceramide'],\r
      datasets: [{\r
        label: 'Your Genetic Set Point',\r
        data: [83, 10],\r
        backgroundColor: ['rgba(212,168,83,0.7)', 'rgba(74,112,85,0.7)'],\r
        borderColor: ['#D4A853', '#4A7055'],\r
        borderWidth: 1.5, borderRadius: 8,\r
      }, {\r
        label: 'Population Average (50th percentile)',\r
        data: [50, 50],\r
        backgroundColor: ['rgba(0,0,0,0.06)', 'rgba(0,0,0,0.06)'],\r
        borderColor: ['rgba(0,0,0,0.15)', 'rgba(0,0,0,0.15)'],\r
        borderWidth: 1, borderRadius: 8,\r
      }]\r
    },\r
    options: {\r
      indexAxis: 'y',\r
      plugins: {\r
        legend: { labels: { font: { family: 'Outfit', size: 12 }, color: '#6B6357' } }\r
      },\r
      scales: {\r
        x: {\r
          max: 100, grid: { color: '#EFE9DF' },\r
          ticks: { font: { family: 'Outfit', size: 11 }, color: '#9E9589', callback: v => v + 'th %ile' }\r
        },\r
        y: { ticks: { font: { family: 'Outfit', size: 13 }, color: '#1A1A1A' }, grid: { display: false } }\r
      },\r
      animation: { duration: 900 }\r
    }\r
  });\r
}\r
\r
// Override showView for markers to init biomarker chart\r
const _origShowView = showView;\r
window.showView = function(id) {\r
  _origShowView(id);\r
  if (id === 'markers') setTimeout(initBiomarkerChart, 100);\r
};\r
\r
// ============================================================\r
// TRAIT MODAL DATA\r
// ============================================================\r
const traitData = {\r
  mosquito: {\r
    name: 'Mosquito Bite Sensitivity', category: 'Allergies', risk: 'high',\r
    prs: '1.88', percentile: '81st',\r
    description: 'IL-4 and IgE pathway variants indicate an elevated immune response to mosquito salivary antigens, predicting increased whealing and pruritus following bites. This reflects a Th2-skewed immune phenotype with heightened mast cell degranulation.',  \r
    genes: 'IL4 � FCER1A rs2298805 � IL13 rs1800925'\r
  },\r
  keratinocyte: {\r
    name: 'Keratinocyte Cancer', category: 'Dermatological Diseases', risk: 'very-high',\r
    prs: '2.31', percentile: '92nd',\r
    description: 'Multiple GWAS risk loci in keratinocyte-differentiation genes converge on very high lifetime risk for squamous cell carcinoma of the skin. This finding warrants immediate clinical attention and regular dermatological monitoring.',   \r
    genes: 'KRT5 rs11170164 � TP53 rs1042522 � CDKN2A ?16bp'\r
  },\r
  nonmelanoma: {\r
    name: 'Non-Melanoma Skin Cancer', category: 'Dermatological Diseases', risk: 'very-high',\r
    prs: '2.47', percentile: '95th',\r
    description: 'MC1R, PTCH1, and TP53 variants converge to significantly elevate squamous and basal cell carcinoma risk. Your PRS places you in the top 5% of the population for this trait.',   \r
    genes: 'MC1R p.R160W � PTCH1 rs357564 � OCA2 rs1800407'\r
  },\r
  psoriasis: {\r
    name: 'Psoriasis', category: 'Dermatological Diseases', risk: 'high',\r
    prs: '1.94', percentile: '85th',\r
    description: 'HLA-C*06:02 and IL-23/IL-17 pathway variants significantly increase psoriasis susceptibility. This combination is the most important genetic risk factor for plaque psoriasis.',  \r
    genes: 'HLA-C*06:02 � IL23R rs11209026 � CARD14 rs11652075'\r
  },\r
  rosacea: {\r
    name: 'Rosacea', category: 'Dermatological Diseases', risk: 'high',\r
    prs: '1.78', percentile: '80th',\r
    description: 'Cathelicidin (LL-37) and inflammatory vascular response gene variants show elevated rosacea predisposition. VEGF-related and TLR2 variants amplify facial inflammatory responses to triggers.',\r
    genes: 'BTNL2 rs2395185 � HLA-DRA rs763802 � TLR2 rs3804100'\r
  },\r
  kallikrein: {\r
    name: 'Kallikrein-7 Levels', category: 'Skin Health Markers', risk: 'high',\r
    prs: '1.82', percentile: '83rd',\r
    description: 'Kallikrein-7 (KLK7) is a serine protease critical for skin desquamation. Elevated genetic levels can over-digest the corneal layer, leading to barrier compromise, sensitivity, and inflammatory skin conditions.',  \r
    genes: 'KLK7 promoter � SPINK5 rs2303064 � CST9 rs2070219'\r
  },\r
  ceramide: {\r
    name: 'Ceramide Levels', category: 'Skin Health Markers', risk: 'very-low',\r
    prs: '0.41', percentile: '10th',\r
    description: 'Ceramides are essential lipids that form the skin\\'s waterproof barrier. Your CERS2 and SMPD1 variant profile predicts excellent ceramide synthesis, contributing to robust barrier function across your lifetime.',\r
    genes: 'CERS2 rs267606587 � SMPD1 rs1050239 � ASAH1 rs6428711'\r
  },\r
  sunburn: {\r
    name: 'Sunburn Sensitivity', category: 'Skin Aesthetics', risk: 'high',\r
    prs: '1.96', percentile: '86th',\r
    description: 'MC1R loss-of-function variants and minimal melanin buffering increase UV erythema response substantially. You are genetically predisposed to burn quickly and significantly in unprotected sun exposure.',  \r
    genes: 'MC1R p.V60L � MC1R p.R151C � TYR rs1393350'\r
  },\r
};\r
\r
const riskLabels = { 'very-high':'Very High','high':'High','medium':'Medium','low':'Low','very-low':'Very Low' };\r
const categoryLabels = {
  allergies: 'Allergies',
  dermatological: 'Dermatological Diseases',
  aesthetics: 'Skin Aesthetics',
  markers: 'Skin Health Markers',
  lipids: 'Fatty Acid Profile (Lipids)',
  metabolic: 'Metabolic Efficiency',
  vitamins: 'Vitamins & Micronutrients',
  cardio: 'Cardiovascular Markers',
  protein: 'Protein Building Blocks'
};\r
\r
function extractTraitIdFromCard(card) {\r
  const onclick = card.getAttribute('onclick') || '';\r
  const match = onclick.match(/showTrait\\('([^']+)'\\)/);\r
  return match ? match[1] : null;\r
}\r
\r
function normalizePercentile(raw) {\r
  if (!raw) return '';\r
  return raw.replace(/percentile/i, '').trim();\r
}\r
\r
function hydrateTraitDataFromCards() {\r
  document.querySelectorAll('.trait-card').forEach(card => {\r
    const id = extractTraitIdFromCard(card);\r
    if (!id || traitData[id]) return;\r
\r
    const categoryKey = card.dataset.category || '';\r
    const name = card.querySelector('.trait-name')?.textContent?.trim() || '';\r
    const risk = card.dataset.risk || 'medium';\r
    const prs = (card.querySelector('.trait-prs')?.textContent || '').replace('PRS:', '').trim();\r
    const percentile = normalizePercentile(card.querySelector('.trait-pop')?.textContent || '');\r
    const description = card.querySelector('.trait-desc')?.textContent?.trim() || '';\r
\r
    traitData[id] = {\r
      name,\r
      category: categoryLabels[categoryKey] || categoryKey,\r
      risk,\r
      prs,\r
      percentile,\r
      description,\r
      recs: ['Follow your dermatologist-guided routine and monitor symptoms over time.'],\r
      genes: 'Not specified'\r
    };\r
  });\r
}\r
\r
function renderTraitCardsFromData() {\r
  document.querySelectorAll('.trait-card').forEach(card => {\r
    const id = extractTraitIdFromCard(card);\r
    if (!id || !traitData[id]) return;\r
\r
    const d = traitData[id];\r
    const percentileNum = parseInt(d.percentile, 10);\r
    const width = Number.isFinite(percentileNum) ? Math.max(0, Math.min(100, percentileNum)) : 50;\r
\r
    card.dataset.risk = d.risk;\r
    const riskFill = card.querySelector('.risk-fill');\r
    if (riskFill) {\r
      riskFill.className = \`risk-fill risk-\${d.risk}\`;\r
      riskFill.style.width = \`\${width}%\`;\r
    }\r
\r
    const nameEl = card.querySelector('.trait-name');\r
    if (nameEl) nameEl.textContent = d.name;\r
\r
    const badgeEl = card.querySelector('.risk-badge');\r
    if (badgeEl) {\r
      badgeEl.className = \`risk-badge risk-\${d.risk}\`;\r
      badgeEl.textContent = riskLabels[d.risk] || 'Medium';\r
    }\r
\r
    const descEl = card.querySelector('.trait-desc');\r
    if (descEl) descEl.textContent = d.description;\r
\r
    const prsEl = card.querySelector('.trait-prs');\r
    if (prsEl) prsEl.textContent = \`PRS: \${d.prs}\`;\r
\r
    const popEl = card.querySelector('.trait-pop');\r
    if (popEl) popEl.textContent = \`\${d.percentile} percentile\`;\r
  });\r
}\r
\r
function showTrait(id) {\r
  const d = traitData[id];\r
  if (!d) return;\r
  const baseRecs = Array.isArray(d.recs) ? d.recs : [];\r
  const extraRecs = [\r
    'Track flare-ups or skin changes weekly to identify long-term patterns..',\r
    'Pair active ingredients with barrier-repair products to improve tolerance.',\r
    'Reassess this trait profile with your clinician at regular follow-ups.'\r
  ];\r
  const allRecs = [...baseRecs, ...extraRecs];\r
  document.getElementById('modal-content').innerHTML = \`\r
    <div class="modal-cat">\${d.category}</div>\r
    <h2 class="modal-h2">\${d.name}</h2>\r
    <div class="modal-risk-banner risk-\${d.risk}">\r
      <div class="modal-prs-big">\${d.prs}</div>\r
      <div class="modal-prs-meta">\r
        <span class="m-label">PRS Score</span>\r
        <span class="m-label" style="margin-top:8px">Population Percentile</span>\r
        <span class="m-val">\${d.percentile}</span>\r
      </div>\r
      <div style="margin-left:auto;">\r
        <span class="risk-badge risk-\${d.risk}" style="font-size:13px;padding:6px 14px;">\${riskLabels[d.risk]}</span>\r
      </div>\r
    </div>\r
    <p class="modal-desc">\${d.description}</p>\r
    <div class="modal-section-title">Personalized Recommendations</div>\r
    <div class="modal-recs">\r
      \${allRecs.map(r => \`<div class="modal-rec-item"><div class="rec-dot"></div><span>\${r}</span></div>\`).join('')}\r
    </div>\r
    <div class="modal-gene-table-wrap">\r
      <table class="modal-gene-table">\r
        <thead>\r
          <tr>\r
            <th>chromosome</th>\r
            <th>position</th>\r
            <th>reference allele</th>\r
            <th>effect allelle</th>\r
            <th>genotype</th>\r
            <th>gene</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr><td>22</td><td>37251028</td><td>C</td><td>T</td><td>CC</td><td>RAC2</td></tr>\r
          <tr><td>11</td><td>81190800</td><td>A</td><td>C</td><td>AA</td><td>near COX6A1P4</td></tr>\r
          <tr><td>2</td><td>47971006</td><td>C</td><td>T</td><td>CC</td><td>near VN1R18P</td></tr>\r
          <tr><td>2</td><td>48191180</td><td>A</td><td>G</td><td>AA</td><td>near RN7SKP224</td></tr>\r
          <tr><td>4</td><td>122806140</td><td>G</td><td>T</td><td>GG</td><td>near FGF2</td></tr>\r
          <tr><td>1</td><td>152206676</td><td>C</td><td>T</td><td>CC</td><td>CCDST</td></tr>\r
          <tr><td>3</td><td>106156699</td><td>A</td><td>C</td><td>AA</td><td>near CBLB</td></tr>\r
          <tr><td>13</td><td>67122540</td><td>C</td><td>T</td><td>CC</td><td>PCDH9</td></tr>\r
          <tr><td>4</td><td>122690387</td><td>G</td><td>T</td><td>TT</td><td>near IL21-AS1</td></tr>\r
          <tr><td>5</td><td>132295159</td><td>A</td><td>C</td><td>CA</td><td>P4HA2, SLC22A4</td></tr>\r
        </tbody>\r
      </table>\r
    </div>\r
    <div class="modal-genes">Key Variants: \${d.genes}</div>\r
  \`;\r
  document.getElementById('trait-modal').classList.add('open');\r
}\r
\r
function closeModal(e) {\r
  if (!e || e.target === document.getElementById('trait-modal')) {\r
    document.getElementById('trait-modal').classList.remove('open');\r
  }\r
}\r
\r
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });\r
\r
// Initialize charts if dashboard is default active\r
document.addEventListener('DOMContentLoaded', () => {\r
  hydrateTraitDataFromCards();\r
  renderTraitCardsFromData();\r
  sortTraitCardsByRisk();\r
  renderRoutineBuilder();\r
\r
  const activeViewEl = document.querySelector('.view.active');\r
  const activeViewId = activeViewEl?.id?.replace('view-', '') || 'overview';\r
  updateTopbarFilterVisibility(activeViewId);\r
\r
  if (document.getElementById('dashboard-page').classList.contains('active')) {\r
    setTimeout(initCharts, 200);\r
  }\r
});\r
\r
\r
\r
\r
`;function zc(o){return o.replace(/(["'(])images\//g,"$1/images/").replace(/(["'(])tabimages\//g,"$1/tabimages/").replace(/url\((["']?)images\//g,"url($1/images/").replace(/url\((["']?)tabimages\//g,"url($1/tabimages/")}function ch(){const o=y.useMemo(()=>{const l=zc(oh).replace(/<link[^>]*href=["']index\.css["'][^>]*>\s*/i,"").replace(/<script[^>]*src=["']index\.js["'][^>]*><\/script>\s*/i,""),d=zc(lh),p=dh.replace(/<\/script/gi,"<\\/script");return l.replace("</head>",`<style>${d}</style></head>`).replace("</body>",`<script>${p}<\/script></body>`)},[]);return a.jsx("iframe",{title:"Skin Dashboard",srcDoc:o,style:{width:"100%",minHeight:"100vh",height:"100vh",border:0,display:"block",background:"#f7f3ee"},sandbox:"allow-scripts allow-same-origin allow-forms allow-popups"})}function ph(){return a.jsxs(Xm,{children:[a.jsx(nn,{path:"/",element:a.jsx(Yg,{})}),a.jsx(nn,{path:"/categories",element:a.jsx(Dg,{})}),a.jsx(nn,{path:"/login",element:a.jsx(Xg,{})}),a.jsx(nn,{path:"/profile",element:a.jsx(sh,{})}),a.jsx(nn,{path:"/reports/skin",element:a.jsx(ch,{})}),a.jsx(nn,{path:"/reports/nutrition",element:a.jsx(rh,{})}),a.jsx(nn,{path:"*",element:a.jsx(Km,{to:"/",replace:!0})})]})}Zu.createRoot(document.getElementById("root")).render(a.jsx(Wu.StrictMode,{children:a.jsx(wg,{children:a.jsx(ph,{})})}));
