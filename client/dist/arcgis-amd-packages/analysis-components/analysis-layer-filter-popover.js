define(["exports","./index-86304dcd","./index2-600fb1b2","esri/request","esri/core/urlUtils","esri/geometry/Point","esri/geometry/Polyline","esri/geometry/Polygon","esri/identity/IdentityManager","esri/core/reactiveUtils","esri/rest/support/Query","esri/core/promiseUtils","esri/portal/PortalItemResource","esri/layers/FeatureLayer","esri/geometry/support/jsonUtils","esri/layers/Layer","esri/portal/PortalItem","esri/layers/support/Field","esri/renderers/Renderer","esri/rest/support/FeatureSet","esri/config","esri/smartMapping/statistics/uniqueValues","esri/rest/support/JobInfo","esri/rest/geoprocessor","esri/core/sql"],(function(e,s,i,t,r,o,a,l,n,p,y,c,u,h,v,m,d,g,f,P,F,E,L,C,b){"use strict";const w=s.proxyCustomElement(class extends s.H{constructor(){super(),this.__registerHost(),this.analysisLayerFilterPopoverClose=s.createEvent(this,"analysisLayerFilterPopoverClose",7),this.analysisLayerFilterPopoverChange=s.createEvent(this,"analysisLayerFilterPopoverChange",7),this.layer=void 0,this.mapView=void 0,this.referenceElement=void 0,this.placement="auto",this.open=void 0}async componentWillLoad(){({strings:this.strings}=await i.fetchComponentLocaleStrings(this.hostElement,s.getAssetPath(".")))}componentDidLoad(){setTimeout((()=>{var e,s;null===(s=null===(e=this.popover)||void 0===e?void 0:e.reposition)||void 0===s||s.call(e)}),i.UIDefaults.PopoverTimer)}async reposition(){var e,s;await(null===(s=null===(e=this.popover)||void 0===e?void 0:e.reposition)||void 0===s?void 0:s.call(e))}render(){var e,i,t;return s.h(s.Host,null,s.h("calcite-popover",{class:"analysis-popover js-app-flyout",ref:e=>{this.popover=e},autoClose:!0,referenceElement:null!==(e=this.referenceElement)&&void 0!==e?e:"analysis-layer-input",placement:this.placement,open:this.open,label:this.strings.layerFilter,focusTrapDisabled:!0},"feature"===(null===(i=this.layer)||void 0===i?void 0:i.type)||"imagery"===(null===(t=this.layer)||void 0===t?void 0:t.type)?s.h("arcgis-filter",{layer:this.layer,view:this.mapView,dismissible:!0,hideLayerTitle:!1,onArcgisFilterCancel:()=>this.analysisLayerFilterPopoverClose.emit(),onArcgisFilterDismissedChange:()=>this.analysisLayerFilterPopoverClose.emit(),onArcgisFilterSave:()=>this.analysisLayerFilterPopoverChange.emit()}):s.h("div",null)))}static get assetsDirs(){return["t9n"]}get hostElement(){return this}static get style(){return":root{--analysis-quarter-spacing:0.25rem;--analysis-half-spacing:0.5rem;--analysis-three-quarter-spacing:0.75rem;--analysis-full-spacing:1rem;--analysis-component-default-width:100%;--analysis-ui-border-input:var(--calcite-ui-border-2);--analysis-label-font-size:var(--calcite-font-size--2);--analysis-popover-content-min-height:30vh;--analysis-popover-content-max-height:60vh;--analysis-popover-content-height:45vh}:host{display:block}"}},[0,"analysis-layer-filter-popover",{layer:[16],mapView:[16],referenceElement:[16],placement:[513],open:[1540],reposition:[64]}]);function x(){"undefined"!=typeof customElements&&["analysis-layer-filter-popover"].forEach((e=>{"analysis-layer-filter-popover"===e&&(customElements.get(e)||customElements.define(e,w))}))}x();const q=w,A=x;e.AnalysisLayerFilterPopover=q,e.defineCustomElement=A,Object.defineProperty(e,"__esModule",{value:!0})}));