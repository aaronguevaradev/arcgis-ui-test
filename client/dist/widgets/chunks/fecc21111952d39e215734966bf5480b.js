/*! For license information please see fecc21111952d39e215734966bf5480b.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[74597],{74597:(e,t,s)=>{s.r(t),s.d(t,{arcgis_group_browser_filter_access:()=>o});var r=s(28384),c=s(76134),i=s(26452),n=s(80558);s(27010),s(18869);const o=class{constructor(e){(0,r.r)(this,e),this.arcgisGroupBrowserFilter=(0,r.c)(this,"arcgisGroupBrowserFilter",7),this.options=["public","org","private"],this.access=void 0,this.expanded=void 0}async componentWillLoad(){this.store=(0,i.g)(this.el),this.i18n=this.store.state.i18n.filterAccess}async componentDidLoad(){this.access&&this.arcgisGroupBrowserFilter.emit(this.getEventDetail()),(0,n.a)("access",this.store,(()=>this.access=null))}getEventDetail(){const{access:e}=this;return{id:"access",param:"q",value:`access: ${e}`,label:this.i18n.label.replace("${label}",this.i18n[e]),access:e}}render(){return(null===c.c||void 0===c.c?void 0:c.c.portal)?(0,r.h)("arcgis-browser-filter",{heading:this.i18n.title,expanded:this.expanded,active:!!this.access,onArcgisBrowserFilterRemove:()=>{this.access=null,this.arcgisGroupBrowserFilter.emit(this.getEventDetail())}},(0,r.h)("calcite-tree",{selectionMode:"single",scale:"m",onCalciteTreeSelect:e=>{var t,s;const r=(null===(s=null===(t=e.target.selectedItems)||void 0===t?void 0:t[0])||void 0===s?void 0:s.dataset.access)||"";this.access===r?this.access=null:this.access=r,this.arcgisGroupBrowserFilter.emit(this.getEventDetail())}},this.options.map((e=>(0,r.h)("calcite-tree-item",{"data-access":e,selected:e===this.access},(0,r.h)("a",null,this.i18n[e])))))):null}get el(){return(0,r.d)(this)}}},76134:(e,t,s)=>{s.d(t,{c:()=>c,o:()=>i});const r=(0,s(27010).c)({portal:null,user:null,api:4,scale:"m"}),c=r.state,i=r.onChange},27010:(e,t,s)=>{s.d(t,{c:()=>o});var r=s(28384);const c=e=>!("isConnected"in e)||e.isConnected,i=((e,t)=>{let s;return(...e)=>{s&&clearTimeout(s),s=setTimeout((()=>{s=0,(e=>{for(let t of e.keys())e.set(t,e.get(t).filter(c))})(...e)}),2e3)}})(),n=e=>"function"==typeof e?e():e,o=(e,t)=>{const s=((e,t=((e,t)=>e!==t))=>{const s=n(e);let r=new Map(Object.entries(null!=s?s:{}));const c={dispose:[],get:[],set:[],reset:[]},i=()=>{var t;r=new Map(Object.entries(null!==(t=n(e))&&void 0!==t?t:{})),c.reset.forEach((e=>e()))},o=e=>(c.get.forEach((t=>t(e))),r.get(e)),a=(e,s)=>{const i=r.get(e);t(s,i,e)&&(r.set(e,s),c.set.forEach((t=>t(e,s,i))))},l="undefined"==typeof Proxy?{}:new Proxy(s,{get:(e,t)=>o(t),ownKeys:e=>Array.from(r.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(e,t)=>r.has(t),set:(e,t,s)=>(a(t,s),!0)}),h=(e,t)=>(c[e].push(t),()=>{((e,t)=>{const s=e.indexOf(t);s>=0&&(e[s]=e[e.length-1],e.length--)})(c[e],t)});return{state:l,get:o,set:a,on:h,onChange:(t,s)=>{const r=h("set",((e,r)=>{e===t&&s(r)})),c=h("reset",(()=>s(n(e)[t])));return()=>{r(),c()}},use:(...e)=>{const t=e.reduce(((e,t)=>(t.set&&e.push(h("set",t.set)),t.get&&e.push(h("get",t.get)),t.reset&&e.push(h("reset",t.reset)),t.dispose&&e.push(h("dispose",t.dispose)),e)),[]);return()=>t.forEach((e=>e()))},dispose:()=>{c.dispose.forEach((e=>e())),i()},reset:i,forceUpdate:e=>{const t=r.get(e);c.set.forEach((s=>s(e,t,t)))}}})(e,t);return s.use((()=>{if("function"!=typeof r.g)return{};const e=new Map;return{dispose:()=>e.clear(),get:t=>{const s=(0,r.g)();s&&((e,t,s)=>{const r=e.get(t);r?r.includes(s)||r.push(s):e.set(t,[s])})(e,t,s)},set:t=>{const s=e.get(t);s&&e.set(t,s.filter(r.f)),i(e)},reset:()=>{e.forEach((e=>e.forEach(r.f))),i(e)}}})()),s}},26452:(e,t,s)=>{s.d(t,{a:()=>n,g:()=>i});var r=s(27010),c=s(80558);function i(e){return(0,c.g)(e,"arcgis-group-browser")}const n=(0,r.c)({filters:{}}).state},80558:(e,t,s)=>{s.d(t,{a:()=>c,g:()=>o,o:()=>i});var r=s(18869);const c=(e,t,s)=>{t.onChange("filters",(t=>{t[e]&&t[e].value||s()}))},i=(e,t)=>{e.onChange("preview",(e=>{t()}))},n=new Map;function o(e,t){const s=n.get(e);if(s)return s;const c=(0,r.c)(e,t);return c?(n.set(e,c.store),c.store):null}}}]);