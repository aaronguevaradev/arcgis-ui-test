System.register(["jimu-core","jimu-core/react"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_react__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "react":
/*!**********************************!*\
  !*** external "jimu-core/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "./node_modules/goober/dist/goober.modern.js":
/*!***************************************************!*\
  !*** ./node_modules/goober/dist/goober.modern.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   css: () => (/* binding */ u),
/* harmony export */   extractCss: () => (/* binding */ r),
/* harmony export */   glob: () => (/* binding */ b),
/* harmony export */   keyframes: () => (/* binding */ h),
/* harmony export */   setup: () => (/* binding */ m),
/* harmony export */   styled: () => (/* binding */ j)
/* harmony export */ });
let e={data:""},t=t=>"object"==typeof window?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||e,r=e=>{let r=t(e),l=r.data;return r.data="",l},l=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,a=/\/\*[^]*?\*\/|  +/g,n=/\n+/g,o=(e,t)=>{let r="",l="",a="";for(let n in e){let c=e[n];"@"==n[0]?"i"==n[1]?r=n+" "+c+";":l+="f"==n[1]?o(c,n):n+"{"+o(c,"k"==n[1]?"":t)+"}":"object"==typeof c?l+=o(c,t?t.replace(/([^,])+/g,e=>n.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):n):null!=c&&(n=/^--/.test(n)?n:n.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=o.p?o.p(n,c):n+":"+c+";")}return r+(t&&a?t+"{"+a+"}":a)+l},c={},s=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+s(e[r]);return t}return e},i=(e,t,r,i,p)=>{let u=s(e),d=c[u]||(c[u]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(u));if(!c[d]){let t=u!==e?e:(e=>{let t,r,o=[{}];for(;t=l.exec(e.replace(a,""));)t[4]?o.shift():t[3]?(r=t[3].replace(n," ").trim(),o.unshift(o[0][r]=o[0][r]||{})):o[0][t[1]]=t[2].replace(n," ").trim();return o[0]})(e);c[d]=o(p?{["@keyframes "+d]:t}:t,r?"":"."+d)}let f=r&&c.g?c.g:null;return r&&(c.g=c[d]),((e,t,r,l)=>{l?t.data=t.data.replace(l,e):-1===t.data.indexOf(e)&&(t.data=r?e+t.data:t.data+e)})(c[d],t,i,f),d},p=(e,t,r)=>e.reduce((e,l,a)=>{let n=t[a];if(n&&n.call){let e=n(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;n=t?"."+t:e&&"object"==typeof e?e.props?"":o(e,""):!1===e?"":e}return e+l+(null==n?"":n)},"");function u(e){let r=this||{},l=e.call?e(r.p):e;return i(l.unshift?l.raw?p(l,[].slice.call(arguments,1),r.p):l.reduce((e,t)=>Object.assign(e,t&&t.call?t(r.p):t),{}):l,t(r.target),r.g,r.o,r.k)}let d,f,g,b=u.bind({g:1}),h=u.bind({k:1});function m(e,t,r,l){o.p=t,d=e,f=r,g=l}function j(e,t){let r=this||{};return function(){let l=arguments;function a(n,o){let c=Object.assign({},n),s=c.className||a.className;r.p=Object.assign({theme:f&&f()},c),r.o=/ *go\d+/.test(s),c.className=u.apply(r,l)+(s?" "+s:""),t&&(c.ref=o);let i=e;return e[0]&&(i=c.as||e,delete c.as),g&&i[0]&&g(c),d(i,c)}return t?t(a):a}}


/***/ }),

/***/ "./node_modules/react-hot-toast/dist/index.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/react-hot-toast/dist/index.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckmarkIcon: () => (/* binding */ w),
/* harmony export */   ErrorIcon: () => (/* binding */ _),
/* harmony export */   LoaderIcon: () => (/* binding */ V),
/* harmony export */   ToastBar: () => (/* binding */ F),
/* harmony export */   ToastIcon: () => (/* binding */ M),
/* harmony export */   Toaster: () => (/* binding */ Ie),
/* harmony export */   "default": () => (/* binding */ _t),
/* harmony export */   resolveValue: () => (/* binding */ T),
/* harmony export */   toast: () => (/* binding */ n),
/* harmony export */   useToaster: () => (/* binding */ D),
/* harmony export */   useToasterStore: () => (/* binding */ I)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var goober__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! goober */ "./node_modules/goober/dist/goober.modern.js");
"use client";
var W=e=>typeof e=="function",T=(e,t)=>W(e)?e(t):e;var U=(()=>{let e=0;return()=>(++e).toString()})(),b=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})();var Q=20;var S=new Map,X=1e3,$=e=>{if(S.has(e))return;let t=setTimeout(()=>{S.delete(e),u({type:4,toastId:e})},X);S.set(e,t)},J=e=>{let t=S.get(e);t&&clearTimeout(t)},v=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,Q)};case 1:return t.toast.id&&J(t.toast.id),{...e,toasts:e.toasts.map(r=>r.id===t.toast.id?{...r,...t.toast}:r)};case 2:let{toast:o}=t;return e.toasts.find(r=>r.id===o.id)?v(e,{type:1,toast:o}):v(e,{type:0,toast:o});case 3:let{toastId:s}=t;return s?$(s):e.toasts.forEach(r=>{$(r.id)}),{...e,toasts:e.toasts.map(r=>r.id===s||s===void 0?{...r,visible:!1}:r)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(r=>r.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let a=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(r=>({...r,pauseDuration:r.pauseDuration+a}))}}},A=[],P={toasts:[],pausedAt:void 0},u=e=>{P=v(P,e),A.forEach(t=>{t(P)})},Y={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},I=(e={})=>{let[t,o]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(P);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>(A.push(o),()=>{let a=A.indexOf(o);a>-1&&A.splice(a,1)}),[t]);let s=t.toasts.map(a=>{var r,c;return{...e,...e[a.type],...a,duration:a.duration||((r=e[a.type])==null?void 0:r.duration)||(e==null?void 0:e.duration)||Y[a.type],style:{...e.style,...(c=e[a.type])==null?void 0:c.style,...a.style}}});return{...t,toasts:s}};var G=(e,t="blank",o)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...o,id:(o==null?void 0:o.id)||U()}),h=e=>(t,o)=>{let s=G(t,e,o);return u({type:2,toast:s}),s.id},n=(e,t)=>h("blank")(e,t);n.error=h("error");n.success=h("success");n.loading=h("loading");n.custom=h("custom");n.dismiss=e=>{u({type:3,toastId:e})};n.remove=e=>u({type:4,toastId:e});n.promise=(e,t,o)=>{let s=n.loading(t.loading,{...o,...o==null?void 0:o.loading});return e.then(a=>(n.success(T(t.success,a),{id:s,...o,...o==null?void 0:o.success}),a)).catch(a=>{n.error(T(t.error,a),{id:s,...o,...o==null?void 0:o.error})}),e};var Z=(e,t)=>{u({type:1,toast:{id:e,height:t}})},ee=()=>{u({type:5,time:Date.now()})},D=e=>{let{toasts:t,pausedAt:o}=I(e);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(o)return;let r=Date.now(),c=t.map(i=>{if(i.duration===1/0)return;let d=(i.duration||0)+i.pauseDuration-(r-i.createdAt);if(d<0){i.visible&&n.dismiss(i.id);return}return setTimeout(()=>n.dismiss(i.id),d)});return()=>{c.forEach(i=>i&&clearTimeout(i))}},[t,o]);let s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{o&&u({type:6,time:Date.now()})},[o]),a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((r,c)=>{let{reverseOrder:i=!1,gutter:d=8,defaultPosition:p}=c||{},g=t.filter(m=>(m.position||p)===(r.position||p)&&m.height),E=g.findIndex(m=>m.id===r.id),x=g.filter((m,R)=>R<E&&m.visible).length;return g.filter(m=>m.visible).slice(...i?[x+1]:[0,x]).reduce((m,R)=>m+(R.height||0)+d,0)},[t]);return{toasts:t,handlers:{updateHeight:Z,startPause:ee,endPause:s,calculateOffset:a}}};var oe=(0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,re=(0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,se=(0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,_=(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${oe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${re} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${se} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`;var ne=(0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,V=(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${ne} 1s linear infinite;
`;var pe=(0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,de=(0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,w=(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${pe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${de} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`;var ue=(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)("div")`
  position: absolute;
`,le=(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Te=(0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,fe=(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Te} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,M=({toast:e})=>{let{icon:t,type:o,iconTheme:s}=e;return t!==void 0?typeof t=="string"?react__WEBPACK_IMPORTED_MODULE_0__.createElement(fe,null,t):t:o==="blank"?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(le,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(V,{...s}),o!=="loading"&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(ue,null,o==="error"?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_,{...s}):react__WEBPACK_IMPORTED_MODULE_0__.createElement(w,{...s})))};var ye=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ge=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,he="0%{opacity:0;} 100%{opacity:1;}",xe="0%{opacity:1;} 100%{opacity:0;}",be=(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Se=(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ae=(e,t)=>{let s=e.includes("top")?1:-1,[a,r]=b()?[he,xe]:[ye(s),ge(s)];return{animation:t?`${(0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${(0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},F=react__WEBPACK_IMPORTED_MODULE_0__.memo(({toast:e,position:t,style:o,children:s})=>{let a=e.height?Ae(e.position||t||"top-center",e.visible):{opacity:0},r=react__WEBPACK_IMPORTED_MODULE_0__.createElement(M,{toast:e}),c=react__WEBPACK_IMPORTED_MODULE_0__.createElement(Se,{...e.ariaProps},T(e.message,e));return react__WEBPACK_IMPORTED_MODULE_0__.createElement(be,{className:e.className,style:{...a,...o,...e.style}},typeof s=="function"?s({icon:r,message:c}):react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,r,c))});(0,goober__WEBPACK_IMPORTED_MODULE_1__.setup)(react__WEBPACK_IMPORTED_MODULE_0__.createElement);var Ee=({id:e,className:t,style:o,onHeightUpdate:s,children:a})=>{let r=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(c=>{if(c){let i=()=>{let d=c.getBoundingClientRect().height;s(e,d)};i(),new MutationObserver(i).observe(c,{subtree:!0,childList:!0,characterData:!0})}},[e,s]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{ref:r,className:t,style:o},a)},Re=(e,t)=>{let o=e.includes("top"),s=o?{top:0}:{bottom:0},a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:b()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(o?1:-1)}px)`,...s,...a}},ve=(0,goober__WEBPACK_IMPORTED_MODULE_1__.css)`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,O=16,Ie=({reverseOrder:e,position:t="top-center",toastOptions:o,gutter:s,children:a,containerStyle:r,containerClassName:c})=>{let{toasts:i,handlers:d}=D(o);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{position:"fixed",zIndex:9999,top:O,left:O,right:O,bottom:O,pointerEvents:"none",...r},className:c,onMouseEnter:d.startPause,onMouseLeave:d.endPause},i.map(p=>{let g=p.position||t,E=d.calculateOffset(p,{reverseOrder:e,gutter:s,defaultPosition:t}),x=Re(g,E);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Ee,{id:p.id,key:p.id,onHeightUpdate:d.updateHeight,className:p.visible?ve:"",style:x},p.type==="custom"?T(p.message,p):a?a(p):react__WEBPACK_IMPORTED_MODULE_0__.createElement(F,{toast:p,position:g}))}))};var _t=n;
//# sourceMappingURL=index.mjs.map

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
// eslint-disable-next-line
// @ts-ignore
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***************************************************************!*\
  !*** ./your-extensions/widgets/simple/src/runtime/widget.tsx ***!
  \***************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hot-toast */ "./node_modules/react-hot-toast/dist/index.mjs");


const notify = () => react_hot_toast__WEBPACK_IMPORTED_MODULE_1__["default"].success('Here is your toast.');
const Widget = (props) => {
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "widget-demo jimu-widget m-2" },
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { onClick: notify }, "Make me a toast"),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(react_hot_toast__WEBPACK_IMPORTED_MODULE_1__.Toaster, { position: "top-center", reverseOrder: false })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Widget);
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9zaW1wbGUvZGlzdC9ydW50aW1lL3dpZGdldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSxPQUFPLFFBQVEsOEpBQThKLDJCQUEyQix5QkFBeUIsb0JBQW9CLG1CQUFtQix5Q0FBeUMsS0FBSyxPQUFPLE9BQU8sSUFBSSxpREFBaUQsbUJBQW1CLGdCQUFnQixXQUFXLGdDQUFnQywwQkFBMEIsd0JBQXdCLGtPQUFrTyxHQUFHLG1CQUFtQixNQUFNLE9BQU8sS0FBSyxPQUFPLHVCQUF1QixTQUFTLDRCQUE0QixTQUFTLFNBQVMsaUJBQWlCLDhCQUE4QixhQUFhLEtBQUssV0FBVywrQkFBK0IsYUFBYSxNQUFNLFVBQVUsbUJBQW1CLGFBQWEsRUFBRSxLQUFLLDBCQUEwQixnRkFBZ0YseUNBQXlDLFlBQVksS0FBSyxVQUFVLG9CQUFvQixlQUFlLHNCQUFzQixrQ0FBa0Msa0ZBQWtGLGdCQUFnQiwrQkFBK0IsV0FBVyxjQUFjLDZEQUE2RCwrREFBK0QsMEJBQTBCLEtBQUssY0FBYyxjQUFjLG1CQUFtQixtSEFBbUgsNkJBQTZCLG9CQUFvQixJQUFJLFlBQVksSUFBSSxFQUFFLG9CQUFvQixrQkFBa0IsZ0JBQWdCLGVBQWUsa0JBQWtCLGdCQUFnQixnQkFBZ0Isc0JBQXNCLCtCQUErQixtQkFBbUIsYUFBYSw2RUFBNkUsUUFBUSwwREFBMEQsaUJBQWtHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTN1RTtBQUNBLG1EQUFtRCxZQUFZLFFBQVEsMkJBQTJCLFlBQVksTUFBTSxXQUFXLGtDQUFrQyxxREFBcUQsZ0JBQWdCLFVBQVUsSUFBb0QsU0FBUywwQkFBMEIsbUJBQW1CLHNCQUFzQixlQUFlLGlCQUFpQixFQUFFLElBQUksV0FBVyxPQUFPLGVBQWUsbUJBQW1CLFdBQVcsZUFBZSxjQUFjLDhDQUE4Qyx5Q0FBeUMsK0NBQStDLGdC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eGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9nb29iZXIvZGlzdC9nb29iZXIubW9kZXJuLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvcmVhY3QtaG90LXRvYXN0L2Rpc3QvaW5kZXgubWpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvc2ltcGxlL3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fOyIsImxldCBlPXtkYXRhOlwiXCJ9LHQ9dD0+XCJvYmplY3RcIj09dHlwZW9mIHdpbmRvdz8oKHQ/dC5xdWVyeVNlbGVjdG9yKFwiI19nb29iZXJcIik6d2luZG93Ll9nb29iZXIpfHxPYmplY3QuYXNzaWduKCh0fHxkb2N1bWVudC5oZWFkKS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIikpLHtpbm5lckhUTUw6XCIgXCIsaWQ6XCJfZ29vYmVyXCJ9KSkuZmlyc3RDaGlsZDp0fHxlLHI9ZT0+e2xldCByPXQoZSksbD1yLmRhdGE7cmV0dXJuIHIuZGF0YT1cIlwiLGx9LGw9Lyg/OihbXFx1MDA4MC1cXHVGRkZGXFx3LSVAXSspICo6PyAqKFteeztdKz8pO3woW147fXtdKj8pICp7KXwofVxccyopL2csYT0vXFwvXFwqW15dKj9cXCpcXC98ICArL2csbj0vXFxuKy9nLG89KGUsdCk9PntsZXQgcj1cIlwiLGw9XCJcIixhPVwiXCI7Zm9yKGxldCBuIGluIGUpe2xldCBjPWVbbl07XCJAXCI9PW5bMF0/XCJpXCI9PW5bMV0/cj1uK1wiIFwiK2MrXCI7XCI6bCs9XCJmXCI9PW5bMV0/byhjLG4pOm4rXCJ7XCIrbyhjLFwia1wiPT1uWzFdP1wiXCI6dCkrXCJ9XCI6XCJvYmplY3RcIj09dHlwZW9mIGM/bCs9byhjLHQ/dC5yZXBsYWNlKC8oW14sXSkrL2csZT0+bi5yZXBsYWNlKC8oXjouKil8KFteLF0pKy9nLHQ9Pi8mLy50ZXN0KHQpP3QucmVwbGFjZSgvJi9nLGUpOmU/ZStcIiBcIit0OnQpKTpuKTpudWxsIT1jJiYobj0vXi0tLy50ZXN0KG4pP246bi5yZXBsYWNlKC9bQS1aXS9nLFwiLSQmXCIpLnRvTG93ZXJDYXNlKCksYSs9by5wP28ucChuLGMpOm4rXCI6XCIrYytcIjtcIil9cmV0dXJuIHIrKHQmJmE/dCtcIntcIithK1wifVwiOmEpK2x9LGM9e30scz1lPT57aWYoXCJvYmplY3RcIj09dHlwZW9mIGUpe2xldCB0PVwiXCI7Zm9yKGxldCByIGluIGUpdCs9citzKGVbcl0pO3JldHVybiB0fXJldHVybiBlfSxpPShlLHQscixpLHApPT57bGV0IHU9cyhlKSxkPWNbdV18fChjW3VdPShlPT57bGV0IHQ9MCxyPTExO2Zvcig7dDxlLmxlbmd0aDspcj0xMDEqcitlLmNoYXJDb2RlQXQodCsrKT4+PjA7cmV0dXJuXCJnb1wiK3J9KSh1KSk7aWYoIWNbZF0pe2xldCB0PXUhPT1lP2U6KGU9PntsZXQgdCxyLG89W3t9XTtmb3IoO3Q9bC5leGVjKGUucmVwbGFjZShhLFwiXCIpKTspdFs0XT9vLnNoaWZ0KCk6dFszXT8ocj10WzNdLnJlcGxhY2UobixcIiBcIikudHJpbSgpLG8udW5zaGlmdChvWzBdW3JdPW9bMF1bcl18fHt9KSk6b1swXVt0WzFdXT10WzJdLnJlcGxhY2UobixcIiBcIikudHJpbSgpO3JldHVybiBvWzBdfSkoZSk7Y1tkXT1vKHA/e1tcIkBrZXlmcmFtZXMgXCIrZF06dH06dCxyP1wiXCI6XCIuXCIrZCl9bGV0IGY9ciYmYy5nP2MuZzpudWxsO3JldHVybiByJiYoYy5nPWNbZF0pLCgoZSx0LHIsbCk9PntsP3QuZGF0YT10LmRhdGEucmVwbGFjZShsLGUpOi0xPT09dC5kYXRhLmluZGV4T2YoZSkmJih0LmRhdGE9cj9lK3QuZGF0YTp0LmRhdGErZSl9KShjW2RdLHQsaSxmKSxkfSxwPShlLHQscik9PmUucmVkdWNlKChlLGwsYSk9PntsZXQgbj10W2FdO2lmKG4mJm4uY2FsbCl7bGV0IGU9bihyKSx0PWUmJmUucHJvcHMmJmUucHJvcHMuY2xhc3NOYW1lfHwvXmdvLy50ZXN0KGUpJiZlO249dD9cIi5cIit0OmUmJlwib2JqZWN0XCI9PXR5cGVvZiBlP2UucHJvcHM/XCJcIjpvKGUsXCJcIik6ITE9PT1lP1wiXCI6ZX1yZXR1cm4gZStsKyhudWxsPT1uP1wiXCI6bil9LFwiXCIpO2Z1bmN0aW9uIHUoZSl7bGV0IHI9dGhpc3x8e30sbD1lLmNhbGw/ZShyLnApOmU7cmV0dXJuIGkobC51bnNoaWZ0P2wucmF3P3AobCxbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKSxyLnApOmwucmVkdWNlKChlLHQpPT5PYmplY3QuYXNzaWduKGUsdCYmdC5jYWxsP3Qoci5wKTp0KSx7fSk6bCx0KHIudGFyZ2V0KSxyLmcsci5vLHIuayl9bGV0IGQsZixnLGI9dS5iaW5kKHtnOjF9KSxoPXUuYmluZCh7azoxfSk7ZnVuY3Rpb24gbShlLHQscixsKXtvLnA9dCxkPWUsZj1yLGc9bH1mdW5jdGlvbiBqKGUsdCl7bGV0IHI9dGhpc3x8e307cmV0dXJuIGZ1bmN0aW9uKCl7bGV0IGw9YXJndW1lbnRzO2Z1bmN0aW9uIGEobixvKXtsZXQgYz1PYmplY3QuYXNzaWduKHt9LG4pLHM9Yy5jbGFzc05hbWV8fGEuY2xhc3NOYW1lO3IucD1PYmplY3QuYXNzaWduKHt0aGVtZTpmJiZmKCl9LGMpLHIubz0vICpnb1xcZCsvLnRlc3QocyksYy5jbGFzc05hbWU9dS5hcHBseShyLGwpKyhzP1wiIFwiK3M6XCJcIiksdCYmKGMucmVmPW8pO2xldCBpPWU7cmV0dXJuIGVbMF0mJihpPWMuYXN8fGUsZGVsZXRlIGMuYXMpLGcmJmlbMF0mJmcoYyksZChpLGMpfXJldHVybiB0P3QoYSk6YX19ZXhwb3J0e3UgYXMgY3NzLHIgYXMgZXh0cmFjdENzcyxiIGFzIGdsb2IsaCBhcyBrZXlmcmFtZXMsbSBhcyBzZXR1cCxqIGFzIHN0eWxlZH07XG4iLCJcInVzZSBjbGllbnRcIjtcbnZhciBXPWU9PnR5cGVvZiBlPT1cImZ1bmN0aW9uXCIsVD0oZSx0KT0+VyhlKT9lKHQpOmU7dmFyIFU9KCgpPT57bGV0IGU9MDtyZXR1cm4oKT0+KCsrZSkudG9TdHJpbmcoKX0pKCksYj0oKCk9PntsZXQgZTtyZXR1cm4oKT0+e2lmKGU9PT12b2lkIDAmJnR5cGVvZiB3aW5kb3c8XCJ1XCIpe2xldCB0PW1hdGNoTWVkaWEoXCIocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKVwiKTtlPSF0fHx0Lm1hdGNoZXN9cmV0dXJuIGV9fSkoKTtpbXBvcnR7dXNlRWZmZWN0IGFzIEgsdXNlU3RhdGUgYXMgan1mcm9tXCJyZWFjdFwiO3ZhciBRPTIwO3ZhciBTPW5ldyBNYXAsWD0xZTMsJD1lPT57aWYoUy5oYXMoZSkpcmV0dXJuO2xldCB0PXNldFRpbWVvdXQoKCk9PntTLmRlbGV0ZShlKSx1KHt0eXBlOjQsdG9hc3RJZDplfSl9LFgpO1Muc2V0KGUsdCl9LEo9ZT0+e2xldCB0PVMuZ2V0KGUpO3QmJmNsZWFyVGltZW91dCh0KX0sdj0oZSx0KT0+e3N3aXRjaCh0LnR5cGUpe2Nhc2UgMDpyZXR1cm57Li4uZSx0b2FzdHM6W3QudG9hc3QsLi4uZS50b2FzdHNdLnNsaWNlKDAsUSl9O2Nhc2UgMTpyZXR1cm4gdC50b2FzdC5pZCYmSih0LnRvYXN0LmlkKSx7Li4uZSx0b2FzdHM6ZS50b2FzdHMubWFwKHI9PnIuaWQ9PT10LnRvYXN0LmlkP3suLi5yLC4uLnQudG9hc3R9OnIpfTtjYXNlIDI6bGV0e3RvYXN0Om99PXQ7cmV0dXJuIGUudG9hc3RzLmZpbmQocj0+ci5pZD09PW8uaWQpP3YoZSx7dHlwZToxLHRvYXN0Om99KTp2KGUse3R5cGU6MCx0b2FzdDpvfSk7Y2FzZSAzOmxldHt0b2FzdElkOnN9PXQ7cmV0dXJuIHM/JChzKTplLnRvYXN0cy5mb3JFYWNoKHI9PnskKHIuaWQpfSksey4uLmUsdG9hc3RzOmUudG9hc3RzLm1hcChyPT5yLmlkPT09c3x8cz09PXZvaWQgMD97Li4ucix2aXNpYmxlOiExfTpyKX07Y2FzZSA0OnJldHVybiB0LnRvYXN0SWQ9PT12b2lkIDA/ey4uLmUsdG9hc3RzOltdfTp7Li4uZSx0b2FzdHM6ZS50b2FzdHMuZmlsdGVyKHI9PnIuaWQhPT10LnRvYXN0SWQpfTtjYXNlIDU6cmV0dXJuey4uLmUscGF1c2VkQXQ6dC50aW1lfTtjYXNlIDY6bGV0IGE9dC50aW1lLShlLnBhdXNlZEF0fHwwKTtyZXR1cm57Li4uZSxwYXVzZWRBdDp2b2lkIDAsdG9hc3RzOmUudG9hc3RzLm1hcChyPT4oey4uLnIscGF1c2VEdXJhdGlvbjpyLnBhdXNlRHVyYXRpb24rYX0pKX19fSxBPVtdLFA9e3RvYXN0czpbXSxwYXVzZWRBdDp2b2lkIDB9LHU9ZT0+e1A9dihQLGUpLEEuZm9yRWFjaCh0PT57dChQKX0pfSxZPXtibGFuazo0ZTMsZXJyb3I6NGUzLHN1Y2Nlc3M6MmUzLGxvYWRpbmc6MS8wLGN1c3RvbTo0ZTN9LEk9KGU9e30pPT57bGV0W3Qsb109aihQKTtIKCgpPT4oQS5wdXNoKG8pLCgpPT57bGV0IGE9QS5pbmRleE9mKG8pO2E+LTEmJkEuc3BsaWNlKGEsMSl9KSxbdF0pO2xldCBzPXQudG9hc3RzLm1hcChhPT57dmFyIHIsYztyZXR1cm57Li4uZSwuLi5lW2EudHlwZV0sLi4uYSxkdXJhdGlvbjphLmR1cmF0aW9ufHwoKHI9ZVthLnR5cGVdKT09bnVsbD92b2lkIDA6ci5kdXJhdGlvbil8fChlPT1udWxsP3ZvaWQgMDplLmR1cmF0aW9uKXx8WVthLnR5cGVdLHN0eWxlOnsuLi5lLnN0eWxlLC4uLihjPWVbYS50eXBlXSk9PW51bGw/dm9pZCAwOmMuc3R5bGUsLi4uYS5zdHlsZX19fSk7cmV0dXJuey4uLnQsdG9hc3RzOnN9fTt2YXIgRz0oZSx0PVwiYmxhbmtcIixvKT0+KHtjcmVhdGVkQXQ6RGF0ZS5ub3coKSx2aXNpYmxlOiEwLHR5cGU6dCxhcmlhUHJvcHM6e3JvbGU6XCJzdGF0dXNcIixcImFyaWEtbGl2ZVwiOlwicG9saXRlXCJ9LG1lc3NhZ2U6ZSxwYXVzZUR1cmF0aW9uOjAsLi4ubyxpZDoobz09bnVsbD92b2lkIDA6by5pZCl8fFUoKX0pLGg9ZT0+KHQsbyk9PntsZXQgcz1HKHQsZSxvKTtyZXR1cm4gdSh7dHlwZToyLHRvYXN0OnN9KSxzLmlkfSxuPShlLHQpPT5oKFwiYmxhbmtcIikoZSx0KTtuLmVycm9yPWgoXCJlcnJvclwiKTtuLnN1Y2Nlc3M9aChcInN1Y2Nlc3NcIik7bi5sb2FkaW5nPWgoXCJsb2FkaW5nXCIpO24uY3VzdG9tPWgoXCJjdXN0b21cIik7bi5kaXNtaXNzPWU9Pnt1KHt0eXBlOjMsdG9hc3RJZDplfSl9O24ucmVtb3ZlPWU9PnUoe3R5cGU6NCx0b2FzdElkOmV9KTtuLnByb21pc2U9KGUsdCxvKT0+e2xldCBzPW4ubG9hZGluZyh0LmxvYWRpbmcsey4uLm8sLi4ubz09bnVsbD92b2lkIDA6by5sb2FkaW5nfSk7cmV0dXJuIGUudGhlbihhPT4obi5zdWNjZXNzKFQodC5zdWNjZXNzLGEpLHtpZDpzLC4uLm8sLi4ubz09bnVsbD92b2lkIDA6by5zdWNjZXNzfSksYSkpLmNhdGNoKGE9PntuLmVycm9yKFQodC5lcnJvcixhKSx7aWQ6cywuLi5vLC4uLm89PW51bGw/dm9pZCAwOm8uZXJyb3J9KX0pLGV9O2ltcG9ydHt1c2VFZmZlY3QgYXMgSyx1c2VDYWxsYmFjayBhcyBMfWZyb21cInJlYWN0XCI7dmFyIFo9KGUsdCk9Pnt1KHt0eXBlOjEsdG9hc3Q6e2lkOmUsaGVpZ2h0OnR9fSl9LGVlPSgpPT57dSh7dHlwZTo1LHRpbWU6RGF0ZS5ub3coKX0pfSxEPWU9PntsZXR7dG9hc3RzOnQscGF1c2VkQXQ6b309SShlKTtLKCgpPT57aWYobylyZXR1cm47bGV0IHI9RGF0ZS5ub3coKSxjPXQubWFwKGk9PntpZihpLmR1cmF0aW9uPT09MS8wKXJldHVybjtsZXQgZD0oaS5kdXJhdGlvbnx8MCkraS5wYXVzZUR1cmF0aW9uLShyLWkuY3JlYXRlZEF0KTtpZihkPDApe2kudmlzaWJsZSYmbi5kaXNtaXNzKGkuaWQpO3JldHVybn1yZXR1cm4gc2V0VGltZW91dCgoKT0+bi5kaXNtaXNzKGkuaWQpLGQpfSk7cmV0dXJuKCk9PntjLmZvckVhY2goaT0+aSYmY2xlYXJUaW1lb3V0KGkpKX19LFt0LG9dKTtsZXQgcz1MKCgpPT57byYmdSh7dHlwZTo2LHRpbWU6RGF0ZS5ub3coKX0pfSxbb10pLGE9TCgocixjKT0+e2xldHtyZXZlcnNlT3JkZXI6aT0hMSxndXR0ZXI6ZD04LGRlZmF1bHRQb3NpdGlvbjpwfT1jfHx7fSxnPXQuZmlsdGVyKG09PihtLnBvc2l0aW9ufHxwKT09PShyLnBvc2l0aW9ufHxwKSYmbS5oZWlnaHQpLEU9Zy5maW5kSW5kZXgobT0+bS5pZD09PXIuaWQpLHg9Zy5maWx0ZXIoKG0sUik9PlI8RSYmbS52aXNpYmxlKS5sZW5ndGg7cmV0dXJuIGcuZmlsdGVyKG09Pm0udmlzaWJsZSkuc2xpY2UoLi4uaT9beCsxXTpbMCx4XSkucmVkdWNlKChtLFIpPT5tKyhSLmhlaWdodHx8MCkrZCwwKX0sW3RdKTtyZXR1cm57dG9hc3RzOnQsaGFuZGxlcnM6e3VwZGF0ZUhlaWdodDpaLHN0YXJ0UGF1c2U6ZWUsZW5kUGF1c2U6cyxjYWxjdWxhdGVPZmZzZXQ6YX19fTtpbXBvcnQqYXMgbCBmcm9tXCJyZWFjdFwiO2ltcG9ydHtzdHlsZWQgYXMgQixrZXlmcmFtZXMgYXMgen1mcm9tXCJnb29iZXJcIjtpbXBvcnQqYXMgeSBmcm9tXCJyZWFjdFwiO2ltcG9ydHtzdHlsZWQgYXMgQyxrZXlmcmFtZXMgYXMgbWV9ZnJvbVwiZ29vYmVyXCI7aW1wb3J0e3N0eWxlZCBhcyB0ZSxrZXlmcmFtZXMgYXMga31mcm9tXCJnb29iZXJcIjt2YXIgb2U9a2BcbmZyb20ge1xuICB0cmFuc2Zvcm06IHNjYWxlKDApIHJvdGF0ZSg0NWRlZyk7XG5cdG9wYWNpdHk6IDA7XG59XG50byB7XG4gdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoNDVkZWcpO1xuICBvcGFjaXR5OiAxO1xufWAscmU9a2BcbmZyb20ge1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICBvcGFjaXR5OiAwO1xufVxudG8ge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICBvcGFjaXR5OiAxO1xufWAsc2U9a2BcbmZyb20ge1xuICB0cmFuc2Zvcm06IHNjYWxlKDApIHJvdGF0ZSg5MGRlZyk7XG5cdG9wYWNpdHk6IDA7XG59XG50byB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKDkwZGVnKTtcblx0b3BhY2l0eTogMTtcbn1gLF89dGUoXCJkaXZcIilgXG4gIHdpZHRoOiAyMHB4O1xuICBvcGFjaXR5OiAwO1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICR7ZT0+ZS5wcmltYXJ5fHxcIiNmZjRiNGJcIn07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuXG4gIGFuaW1hdGlvbjogJHtvZX0gMC4zcyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSlcbiAgICBmb3J3YXJkcztcbiAgYW5pbWF0aW9uLWRlbGF5OiAxMDBtcztcblxuICAmOmFmdGVyLFxuICAmOmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgYW5pbWF0aW9uOiAke3JlfSAwLjE1cyBlYXNlLW91dCBmb3J3YXJkcztcbiAgICBhbmltYXRpb24tZGVsYXk6IDE1MG1zO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgb3BhY2l0eTogMDtcbiAgICBiYWNrZ3JvdW5kOiAke2U9PmUuc2Vjb25kYXJ5fHxcIiNmZmZcIn07XG4gICAgYm90dG9tOiA5cHg7XG4gICAgbGVmdDogNHB4O1xuICAgIGhlaWdodDogMnB4O1xuICAgIHdpZHRoOiAxMnB4O1xuICB9XG5cbiAgJjpiZWZvcmUge1xuICAgIGFuaW1hdGlvbjogJHtzZX0gMC4xNXMgZWFzZS1vdXQgZm9yd2FyZHM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxODBtcztcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIH1cbmA7aW1wb3J0e3N0eWxlZCBhcyBhZSxrZXlmcmFtZXMgYXMgaWV9ZnJvbVwiZ29vYmVyXCI7dmFyIG5lPWllYFxuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxuYCxWPWFlKFwiZGl2XCIpYFxuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXI6IDJweCBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYm9yZGVyLWNvbG9yOiAke2U9PmUuc2Vjb25kYXJ5fHxcIiNlMGUwZTBcIn07XG4gIGJvcmRlci1yaWdodC1jb2xvcjogJHtlPT5lLnByaW1hcnl8fFwiIzYxNjE2MVwifTtcbiAgYW5pbWF0aW9uOiAke25lfSAxcyBsaW5lYXIgaW5maW5pdGU7XG5gO2ltcG9ydHtzdHlsZWQgYXMgY2Usa2V5ZnJhbWVzIGFzIE59ZnJvbVwiZ29vYmVyXCI7dmFyIHBlPU5gXG5mcm9tIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKSByb3RhdGUoNDVkZWcpO1xuXHRvcGFjaXR5OiAwO1xufVxudG8ge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSg0NWRlZyk7XG5cdG9wYWNpdHk6IDE7XG59YCxkZT1OYFxuMCUge1xuXHRoZWlnaHQ6IDA7XG5cdHdpZHRoOiAwO1xuXHRvcGFjaXR5OiAwO1xufVxuNDAlIHtcbiAgaGVpZ2h0OiAwO1xuXHR3aWR0aDogNnB4O1xuXHRvcGFjaXR5OiAxO1xufVxuMTAwJSB7XG4gIG9wYWNpdHk6IDE7XG4gIGhlaWdodDogMTBweDtcbn1gLHc9Y2UoXCJkaXZcIilgXG4gIHdpZHRoOiAyMHB4O1xuICBvcGFjaXR5OiAwO1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICR7ZT0+ZS5wcmltYXJ5fHxcIiM2MWQzNDVcIn07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuXG4gIGFuaW1hdGlvbjogJHtwZX0gMC4zcyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSlcbiAgICBmb3J3YXJkcztcbiAgYW5pbWF0aW9uLWRlbGF5OiAxMDBtcztcbiAgJjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBhbmltYXRpb246ICR7ZGV9IDAuMnMgZWFzZS1vdXQgZm9yd2FyZHM7XG4gICAgb3BhY2l0eTogMDtcbiAgICBhbmltYXRpb24tZGVsYXk6IDIwMG1zO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiAke2U9PmUuc2Vjb25kYXJ5fHxcIiNmZmZcIn07XG4gICAgYm90dG9tOiA2cHg7XG4gICAgbGVmdDogNnB4O1xuICAgIGhlaWdodDogMTBweDtcbiAgICB3aWR0aDogNnB4O1xuICB9XG5gO3ZhciB1ZT1DKFwiZGl2XCIpYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5gLGxlPUMoXCJkaXZcIilgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1pbi13aWR0aDogMjBweDtcbiAgbWluLWhlaWdodDogMjBweDtcbmAsVGU9bWVgXG5mcm9tIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpO1xuICBvcGFjaXR5OiAwLjQ7XG59XG50byB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIG9wYWNpdHk6IDE7XG59YCxmZT1DKFwiZGl2XCIpYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC42KTtcbiAgb3BhY2l0eTogMC40O1xuICBtaW4td2lkdGg6IDIwcHg7XG4gIGFuaW1hdGlvbjogJHtUZX0gMC4zcyAwLjEycyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSlcbiAgICBmb3J3YXJkcztcbmAsTT0oe3RvYXN0OmV9KT0+e2xldHtpY29uOnQsdHlwZTpvLGljb25UaGVtZTpzfT1lO3JldHVybiB0IT09dm9pZCAwP3R5cGVvZiB0PT1cInN0cmluZ1wiP3kuY3JlYXRlRWxlbWVudChmZSxudWxsLHQpOnQ6bz09PVwiYmxhbmtcIj9udWxsOnkuY3JlYXRlRWxlbWVudChsZSxudWxsLHkuY3JlYXRlRWxlbWVudChWLHsuLi5zfSksbyE9PVwibG9hZGluZ1wiJiZ5LmNyZWF0ZUVsZW1lbnQodWUsbnVsbCxvPT09XCJlcnJvclwiP3kuY3JlYXRlRWxlbWVudChfLHsuLi5zfSk6eS5jcmVhdGVFbGVtZW50KHcsey4uLnN9KSkpfTt2YXIgeWU9ZT0+YFxuMCUge3RyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwke2UqLTIwMH0lLDApIHNjYWxlKC42KTsgb3BhY2l0eTouNTt9XG4xMDAlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKSBzY2FsZSgxKTsgb3BhY2l0eToxO31cbmAsZ2U9ZT0+YFxuMCUge3RyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLC0xcHgpIHNjYWxlKDEpOyBvcGFjaXR5OjE7fVxuMTAwJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCR7ZSotMTUwfSUsLTFweCkgc2NhbGUoLjYpOyBvcGFjaXR5OjA7fVxuYCxoZT1cIjAle29wYWNpdHk6MDt9IDEwMCV7b3BhY2l0eToxO31cIix4ZT1cIjAle29wYWNpdHk6MTt9IDEwMCV7b3BhY2l0eTowO31cIixiZT1CKFwiZGl2XCIpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogIzM2MzYzNjtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgYm94LXNoYWRvdzogMCAzcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBtYXgtd2lkdGg6IDM1MHB4O1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgcGFkZGluZzogOHB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbmAsU2U9QihcImRpdlwiKWBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogNHB4IDEwcHg7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBmbGV4OiAxIDEgYXV0bztcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuYCxBZT0oZSx0KT0+e2xldCBzPWUuaW5jbHVkZXMoXCJ0b3BcIik/MTotMSxbYSxyXT1iKCk/W2hlLHhlXTpbeWUocyksZ2UocyldO3JldHVybnthbmltYXRpb246dD9gJHt6KGEpfSAwLjM1cyBjdWJpYy1iZXppZXIoLjIxLDEuMDIsLjczLDEpIGZvcndhcmRzYDpgJHt6KHIpfSAwLjRzIGZvcndhcmRzIGN1YmljLWJlemllciguMDYsLjcxLC41NSwxKWB9fSxGPWwubWVtbygoe3RvYXN0OmUscG9zaXRpb246dCxzdHlsZTpvLGNoaWxkcmVuOnN9KT0+e2xldCBhPWUuaGVpZ2h0P0FlKGUucG9zaXRpb258fHR8fFwidG9wLWNlbnRlclwiLGUudmlzaWJsZSk6e29wYWNpdHk6MH0scj1sLmNyZWF0ZUVsZW1lbnQoTSx7dG9hc3Q6ZX0pLGM9bC5jcmVhdGVFbGVtZW50KFNlLHsuLi5lLmFyaWFQcm9wc30sVChlLm1lc3NhZ2UsZSkpO3JldHVybiBsLmNyZWF0ZUVsZW1lbnQoYmUse2NsYXNzTmFtZTplLmNsYXNzTmFtZSxzdHlsZTp7Li4uYSwuLi5vLC4uLmUuc3R5bGV9fSx0eXBlb2Ygcz09XCJmdW5jdGlvblwiP3Moe2ljb246cixtZXNzYWdlOmN9KTpsLmNyZWF0ZUVsZW1lbnQobC5GcmFnbWVudCxudWxsLHIsYykpfSk7aW1wb3J0e2NzcyBhcyBQZSxzZXR1cCBhcyBPZX1mcm9tXCJnb29iZXJcIjtpbXBvcnQqYXMgZiBmcm9tXCJyZWFjdFwiO09lKGYuY3JlYXRlRWxlbWVudCk7dmFyIEVlPSh7aWQ6ZSxjbGFzc05hbWU6dCxzdHlsZTpvLG9uSGVpZ2h0VXBkYXRlOnMsY2hpbGRyZW46YX0pPT57bGV0IHI9Zi51c2VDYWxsYmFjayhjPT57aWYoYyl7bGV0IGk9KCk9PntsZXQgZD1jLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtzKGUsZCl9O2koKSxuZXcgTXV0YXRpb25PYnNlcnZlcihpKS5vYnNlcnZlKGMse3N1YnRyZWU6ITAsY2hpbGRMaXN0OiEwLGNoYXJhY3RlckRhdGE6ITB9KX19LFtlLHNdKTtyZXR1cm4gZi5jcmVhdGVFbGVtZW50KFwiZGl2XCIse3JlZjpyLGNsYXNzTmFtZTp0LHN0eWxlOm99LGEpfSxSZT0oZSx0KT0+e2xldCBvPWUuaW5jbHVkZXMoXCJ0b3BcIikscz1vP3t0b3A6MH06e2JvdHRvbTowfSxhPWUuaW5jbHVkZXMoXCJjZW50ZXJcIik/e2p1c3RpZnlDb250ZW50OlwiY2VudGVyXCJ9OmUuaW5jbHVkZXMoXCJyaWdodFwiKT97anVzdGlmeUNvbnRlbnQ6XCJmbGV4LWVuZFwifTp7fTtyZXR1cm57bGVmdDowLHJpZ2h0OjAsZGlzcGxheTpcImZsZXhcIixwb3NpdGlvbjpcImFic29sdXRlXCIsdHJhbnNpdGlvbjpiKCk/dm9pZCAwOlwiYWxsIDIzMG1zIGN1YmljLWJlemllciguMjEsMS4wMiwuNzMsMSlcIix0cmFuc2Zvcm06YHRyYW5zbGF0ZVkoJHt0KihvPzE6LTEpfXB4KWAsLi4ucywuLi5hfX0sdmU9UGVgXG4gIHotaW5kZXg6IDk5OTk7XG4gID4gKiB7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gIH1cbmAsTz0xNixJZT0oe3JldmVyc2VPcmRlcjplLHBvc2l0aW9uOnQ9XCJ0b3AtY2VudGVyXCIsdG9hc3RPcHRpb25zOm8sZ3V0dGVyOnMsY2hpbGRyZW46YSxjb250YWluZXJTdHlsZTpyLGNvbnRhaW5lckNsYXNzTmFtZTpjfSk9PntsZXR7dG9hc3RzOmksaGFuZGxlcnM6ZH09RChvKTtyZXR1cm4gZi5jcmVhdGVFbGVtZW50KFwiZGl2XCIse3N0eWxlOntwb3NpdGlvbjpcImZpeGVkXCIsekluZGV4Ojk5OTksdG9wOk8sbGVmdDpPLHJpZ2h0Ok8sYm90dG9tOk8scG9pbnRlckV2ZW50czpcIm5vbmVcIiwuLi5yfSxjbGFzc05hbWU6Yyxvbk1vdXNlRW50ZXI6ZC5zdGFydFBhdXNlLG9uTW91c2VMZWF2ZTpkLmVuZFBhdXNlfSxpLm1hcChwPT57bGV0IGc9cC5wb3NpdGlvbnx8dCxFPWQuY2FsY3VsYXRlT2Zmc2V0KHAse3JldmVyc2VPcmRlcjplLGd1dHRlcjpzLGRlZmF1bHRQb3NpdGlvbjp0fSkseD1SZShnLEUpO3JldHVybiBmLmNyZWF0ZUVsZW1lbnQoRWUse2lkOnAuaWQsa2V5OnAuaWQsb25IZWlnaHRVcGRhdGU6ZC51cGRhdGVIZWlnaHQsY2xhc3NOYW1lOnAudmlzaWJsZT92ZTpcIlwiLHN0eWxlOnh9LHAudHlwZT09PVwiY3VzdG9tXCI/VChwLm1lc3NhZ2UscCk6YT9hKHApOmYuY3JlYXRlRWxlbWVudChGLHt0b2FzdDpwLHBvc2l0aW9uOmd9KSl9KSl9O3ZhciBfdD1uO2V4cG9ydHt3IGFzIENoZWNrbWFya0ljb24sXyBhcyBFcnJvckljb24sViBhcyBMb2FkZXJJY29uLEYgYXMgVG9hc3RCYXIsTSBhcyBUb2FzdEljb24sSWUgYXMgVG9hc3RlcixfdCBhcyBkZWZhdWx0LFQgYXMgcmVzb2x2ZVZhbHVlLG4gYXMgdG9hc3QsRCBhcyB1c2VUb2FzdGVyLEkgYXMgdXNlVG9hc3RlclN0b3JlfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4Lm1qcy5tYXAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4vLyBAdHMtaWdub3JlXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCJpbXBvcnQgeyBSZWFjdCwgdHlwZSBBbGxXaWRnZXRQcm9wcyB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgdHlwZSBJTUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcclxuaW1wb3J0IHRvYXN0LCB7IFRvYXN0ZXIgfSBmcm9tICdyZWFjdC1ob3QtdG9hc3QnXHJcblxyXG5jb25zdCBub3RpZnkgPSAoKSA9PiB0b2FzdC5zdWNjZXNzKCdIZXJlIGlzIHlvdXIgdG9hc3QuJyk7XHJcblxyXG5jb25zdCBXaWRnZXQgPSAocHJvcHM6IEFsbFdpZGdldFByb3BzPElNQ29uZmlnPikgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1kZW1vIGppbXUtd2lkZ2V0IG0tMlwiPlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e25vdGlmeX0+TWFrZSBtZSBhIHRvYXN0PC9idXR0b24+XHJcbiAgICAgIDxUb2FzdGVyXHJcbiAgcG9zaXRpb249XCJ0b3AtY2VudGVyXCJcclxuICByZXZlcnNlT3JkZXI9e2ZhbHNlfVxyXG4vPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXaWRnZXRcclxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==