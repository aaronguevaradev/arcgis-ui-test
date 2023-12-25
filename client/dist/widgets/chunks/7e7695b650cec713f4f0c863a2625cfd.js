"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[46210],{46210:(e,t,r)=>{r.r(t),r.d(t,{default:()=>d});var n=r(47817),s=r(58574),o=r(18608),a=r(54100),i=r(43378),l=r(60235);r(68700),r(69764),r(62268),r(79367),r(11115),r(78899),r(89300),r(22486),r(84780),r(21205),r(41083),r(76791);const u=new Set(["Feature Layer","Table"]);let c=class extends n.ac{constructor(){super(...arguments),this.type="feature-layer"}load(e){const t=(0,n.H)(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(t)),Promise.resolve(this)}get queryTask(){const{capabilities:{query:{supportsFormatPBF:e}},parsedUrl:t,dynamicDataSource:r,gdbVersion:n,spatialReference:o,fieldsIndex:a}=this.layer,l=(0,s.t)("featurelayer-pbf")&&e?"pbf":"json";return new i.x({url:t.path,format:l,fieldsIndex:a,dynamicDataSource:r,gdbVersion:n,sourceSpatialReference:o})}async addAttachment(e,t){await this.load();const r=e.attributes[this.layer.objectIdField],s=this.layer.parsedUrl.path+"/"+r+"/addAttachment",o=this._getLayerRequestOptions(),a=this._getFormDataForAttachment(t,o.query);try{const e=await(0,n.U)(s,{body:a});return this._createFeatureEditResult(e.data.addAttachmentResult)}catch(e){throw this._createAttachmentErrorResult(r,e)}}async updateAttachment(e,t,r){await this.load();const s=e.attributes[this.layer.objectIdField],o=this.layer.parsedUrl.path+"/"+s+"/updateAttachment",a=this._getLayerRequestOptions({query:{attachmentId:t}}),i=this._getFormDataForAttachment(r,a.query);try{const e=await(0,n.U)(o,{body:i});return this._createFeatureEditResult(e.data.updateAttachmentResult)}catch(e){throw this._createAttachmentErrorResult(s,e)}}async applyEdits(e,t){await this.load();const r=e.addFeatures.map(this._serializeFeature,this),s=e.updateFeatures.map(this._serializeFeature,this),o=this._getFeatureIds(e.deleteFeatures,null==t?void 0:t.globalIdUsed);(0,a.l)(r,s,this.layer.spatialReference);const i=[],l=[],u=[...e.deleteAttachments];for(const t of e.addAttachments)i.push(await this._serializeAttachment(t));for(const t of e.updateAttachments)l.push(await this._serializeAttachment(t));const c=i.length||l.length||u.length?{adds:i,updates:l,deletes:u}:null,d=this._getLayerRequestOptions({method:"post",query:{adds:r.length?JSON.stringify(r):null,updates:s.length?JSON.stringify(s):null,deletes:o.length?null!=t&&t.globalIdUsed?JSON.stringify(o):o.join(","):null,gdbVersion:(null==t?void 0:t.gdbVersion)||this.layer.gdbVersion,rollbackOnFailure:null==t?void 0:t.rollbackOnFailureEnabled,useGlobalIds:null==t?void 0:t.globalIdUsed,attachments:c&&JSON.stringify(c)}}),h=await(0,n.U)(this.layer.parsedUrl.path+"/applyEdits",d);return this._createEditsResult(h)}async deleteAttachments(e,t){await this.load();const r=e.attributes[this.layer.objectIdField],s=this.layer.parsedUrl.path+"/"+r+"/deleteAttachments";try{return(await(0,n.U)(s,this._getLayerRequestOptions({query:{attachmentIds:t.join(",")},method:"post"}))).data.deleteAttachmentResults.map(this._createFeatureEditResult)}catch(e){throw this._createAttachmentErrorResult(r,e)}}fetchRecomputedExtents(e={}){const t=e.signal;return this.load({signal:t}).then((async()=>{const t=this._getLayerRequestOptions({...e,query:{returnUpdates:!0}}),{layerId:r,url:s}=this.layer,{data:a}=await(0,n.U)(`${s}/${r}`,t),{id:i,extent:l,fullExtent:u,timeExtent:c}=a,d=l||u;return{id:i,fullExtent:d&&n.M.fromJSON(d),timeExtent:c&&o.d.fromJSON({start:c[0],end:c[1]})}}))}async queryAttachments(e,t={}){const{parsedUrl:r}=this.layer,s=r.path;await this.load();const o=this._getLayerRequestOptions(t);if(!this.layer.get("capabilities.operations.supportsQueryAttachments")){const{objectIds:t}=e,r=[];for(const e of t){const t=s+"/"+e+"/attachments";r.push((0,n.U)(t,o))}return Promise.all(r).then((e=>t.map(((t,r)=>({parentObjectId:t,attachmentInfos:e[r].data.attachmentInfos}))))).then((e=>(0,i.a)(e,s)))}return this.queryTask.executeAttachmentQuery(e,o)}async queryFeatures(e,t){return await this.load(),this.queryTask.execute(e,{...t,query:{...this.layer.customParameters,...null==t?void 0:t.query}})}async queryFeaturesJSON(e,t){return await this.load(),this.queryTask.executeJSON(e,{...t,query:{...this.layer.customParameters,...null==t?void 0:t.query}})}async queryObjectIds(e,t){return await this.load(),this.queryTask.executeForIds(e,{...t,query:{...this.layer.customParameters,...null==t?void 0:t.query}})}async queryFeatureCount(e,t){return await this.load(),this.queryTask.executeForCount(e,{...t,query:{...this.layer.customParameters,...null==t?void 0:t.query}})}async queryExtent(e,t){return await this.load(),this.queryTask.executeForExtent(e,{...t,query:{...this.layer.customParameters,...null==t?void 0:t.query}})}async queryRelatedFeatures(e,t){return await this.load(),this.queryTask.executeRelationshipQuery(e,{...t,query:{...this.layer.customParameters,...null==t?void 0:t.query}})}async queryRelatedFeaturesCount(e,t){return await this.load(),this.queryTask.executeRelationshipQueryForCount(e,{...t,query:{...this.layer.customParameters,...null==t?void 0:t.query}})}async _fetchService(e){let t=this.layer.sourceJSON;if(!t){const{data:r}=await(0,n.U)(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:(0,s.t)("featurelayer-advanced-symbols")?{returnAdvancedSymbols:!0}:{},signal:e}));t=r}this.sourceJSON=this._patchServiceJSON(t);const r=t.type;if(!u.has(r))throw new n.s("feature-layer-source:unsupported-type",`Source type "${r}" is not supported`)}_patchServiceJSON(e){var t;if("Table"!==e.type&&e.geometryType&&(null==e||null==(t=e.drawingInfo)||!t.renderer)&&!e.defaultSymbol){const t=(0,l.i)(e.geometryType).renderer;(0,n.bG)("drawingInfo.renderer",t,e)}return e}_serializeFeature(e){const{geometry:t,attributes:r}=e;return(0,n.t)(t)?{attributes:r}:"mesh"===t.type||"extent"===t.type?null:{geometry:t.toJSON(),attributes:r}}async _serializeAttachment(e){const{feature:t,attachment:r}=e,{globalId:s,name:o,contentType:a,data:i,uploadId:l}=r,u={globalId:s,parentGlobalId:null,contentType:null,name:null,uploadId:null,data:null};if(t&&(u.parentGlobalId="attributes"in t?t.attributes&&t.attributes[this.layer.globalIdField]:t.globalId),l)u.uploadId=l;else if(i){const e=await async function(e){return"string"==typeof e?(0,n.br)(e)||{data:e}:new Promise(((t,r)=>{const s=new FileReader;s.readAsDataURL(e),s.onload=()=>t((0,n.br)(s.result)),s.onerror=e=>r(e)}))}(i);u.contentType=e.mediaType,u.data=e.data,i instanceof File&&(u.name=i.name)}return o&&(u.name=o),a&&(u.contentType=a),u}_getFeatureIds(e,t){const r=e[0];return r?this._canUseGlobalIds(t,e)?this._getGlobalIdsFromFeatureIdentifier(e):"objectId"in r?this._getObjectIdsFromFeatureIdentifier(e):this._getIdsFromFeatures(e):[]}_getIdsFromFeatures(e){const t=this.layer.objectIdField;return e.map((e=>e.attributes&&e.attributes[t]))}_canUseGlobalIds(e,t){return e&&"globalId"in t[0]}_getObjectIdsFromFeatureIdentifier(e){return e.map((e=>e.objectId))}_getGlobalIdsFromFeatureIdentifier(e){return e.map((e=>e.globalId))}_createEditsResult(e){const t=e.data,r=e.data&&e.data.attachments;return{addFeatureResults:t.addResults?t.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:t.updateResults?t.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:t.deleteResults?t.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:r&&r.addResults?r.addResults.map(this._createFeatureEditResult,this):[],updateAttachmentResults:r&&r.updateResults?r.updateResults.map(this._createFeatureEditResult,this):[],deleteAttachmentResults:r&&r.deleteResults?r.deleteResults.map(this._createFeatureEditResult,this):[]}}_createFeatureEditResult(e){const t=!0===e.success?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new n.s("feature-layer-source:edit-failure",t.description,{code:t.code}):null}}_createAttachmentErrorResult(e,t){const r=t.details.messages&&t.details.messages[0]||t.message,s=t.details.httpStatus||t.details.messageCode;return{objectId:e,globalId:null,error:new n.s("feature-layer-source:attachment-failure",r,{code:s})}}_getFormDataForAttachment(e,t){const r=e instanceof FormData?e:e&&e.elements?new FormData(e):null;if(r)for(const e in t){const n=t[e];null!=n&&(r.set?r.set(e,n):r.append(e,n))}return r}_getLayerRequestOptions(e={}){const{parsedUrl:t,gdbVersion:r,dynamicDataSource:s}=this.layer;return{...e,query:(0,n.aa)({gdbVersion:r,layer:s?JSON.stringify({source:s}):void 0,...t.query,f:"json",...this.layer.customParameters,...null==e?void 0:e.query}),responseType:"json"}}};(0,n.Z)([(0,n._)()],c.prototype,"type",void 0),(0,n.Z)([(0,n._)({constructOnly:!0})],c.prototype,"layer",void 0),(0,n.Z)([(0,n._)({readOnly:!0})],c.prototype,"queryTask",null),c=(0,n.Z)([(0,n.a0)("esri.layers.graphics.sources.FeatureLayerSource")],c);const d=c},1186:(e,t,r)=>{r.d(t,{a:()=>o,e:()=>s,t:()=>n});class n{constructor(e=null,t={},r,n){this.displayId=0,this.geohashX=0,this.geohashY=0,this.geometry=e,t&&(this.attributes=t),r&&(this.centroid=r),null!=n&&(this.objectId=n)}get hasGeometry(){return!(!this.geometry||!this.geometry.coords||!this.geometry.coords.length)}weakClone(){const e=new n(this.geometry,this.attributes,this.centroid,this.objectId);return e.displayId=this.displayId,e.geohashX=this.geohashX,e.geohashY=this.geohashY,e}}class s{constructor(){this.objectIdFieldName=null,this.globalIdFieldName=null,this.geohashFieldName=null,this.geometryProperties=null,this.geometryType=null,this.spatialReference=null,this.hasZ=!1,this.hasM=!1,this.features=[],this.fields=[],this.transform=null,this.exceededTransferLimit=!1,this.uniqueIdField=null,this.queryGeometryType=null,this.queryGeometry=null}weakClone(){const e=new s;return e.objectIdFieldName=this.objectIdFieldName,e.globalIdFieldName=this.globalIdFieldName,e.geohashFieldName=this.geohashFieldName,e.geometryProperties=this.geometryProperties,e.geometryType=this.geometryType,e.spatialReference=this.spatialReference,e.hasZ=this.hasZ,e.hasM=this.hasM,e.features=this.features,e.fields=this.fields,e.transform=this.transform,e.exceededTransferLimit=this.exceededTransferLimit,e.uniqueIdField=this.uniqueIdField,e.queryGeometry=this.queryGeometry,e.queryGeometryType=this.queryGeometryType,e}}class o{constructor(e=[],t=[],r=!1){this.lengths=null!=e?e:[],this.coords=null!=t?t:[],this.hasIndeterminateRingOrder=r}get isPoint(){return 0===this.lengths.length}forEachVertex(e){let t=0;this.lengths.length||e(this.coords[0],this.coords[1]);for(let r=0;r<this.lengths.length;r++){const n=this.lengths[r];for(let r=0;r<n;r++)e(this.coords[2*(r+t)],this.coords[2*(r+t)+1]);t+=n}}clone(){return new o(this.lengths.slice(),this.coords.slice(),this.hasIndeterminateRingOrder)}}},43378:(e,t,r)=>{r.d(t,{a:()=>m,x:()=>G});var n,s=r(47817),o=r(58574),a=r(62268),i=r(79367),l=r(11115),u=r(78899),c=r(41083),d=r(54100);const h={1:{id:1,rotation:0,mirrored:!1},2:{id:2,rotation:0,mirrored:!0},3:{id:3,rotation:180,mirrored:!1},4:{id:4,rotation:180,mirrored:!0},5:{id:5,rotation:-90,mirrored:!0},6:{id:6,rotation:90,mirrored:!1},7:{id:7,rotation:90,mirrored:!0},8:{id:8,rotation:-90,mirrored:!1}};let y=n=class extends s.ao{constructor(e){super(e),this.contentType=null,this.exifInfo=null,this.id=null,this.globalId=null,this.keywords=null,this.name=null,this.parentGlobalId=null,this.parentObjectId=null,this.size=null,this.url=null}get orientationInfo(){const{exifInfo:e}=this,t=function(e){const{exifInfo:t,exifName:r,tagName:n}=e;if(!t||!r||!n)return null;const s=t.find((e=>e.name===r));return s?function(e){const{tagName:t,tags:r}=e;if(!r||!t)return null;const n=r.find((e=>e.name===t));return n&&n.value||null}({tagName:n,tags:s.tags}):null}({exifName:"Exif IFD0",tagName:"Orientation",exifInfo:e});return h[t]||null}clone(){return new n({contentType:this.contentType,exifInfo:this.exifInfo,id:this.id,globalId:this.globalId,keywords:this.keywords,name:this.name,parentGlobalId:this.parentGlobalId,parentObjectId:this.parentObjectId,size:this.size,url:this.url})}};(0,s.Z)([(0,s._)({type:String})],y.prototype,"contentType",void 0),(0,s.Z)([(0,s._)()],y.prototype,"exifInfo",void 0),(0,s.Z)([(0,s._)({readOnly:!0})],y.prototype,"orientationInfo",null),(0,s.Z)([(0,s._)({type:s.bc})],y.prototype,"id",void 0),(0,s.Z)([(0,s._)({type:String})],y.prototype,"globalId",void 0),(0,s.Z)([(0,s._)({type:String})],y.prototype,"keywords",void 0),(0,s.Z)([(0,s._)({type:String})],y.prototype,"name",void 0),(0,s.Z)([(0,s._)({json:{read:!1}})],y.prototype,"parentGlobalId",void 0),(0,s.Z)([(0,s._)({json:{read:!1}})],y.prototype,"parentObjectId",void 0),(0,s.Z)([(0,s._)({type:s.bc})],y.prototype,"size",void 0),(0,s.Z)([(0,s._)({json:{read:!1}})],y.prototype,"url",void 0),y=n=(0,s.Z)([(0,s.a0)("esri.layers.support.AttachmentInfo")],y);var f=y;function p(e){const t=e.toJSON();return t.attachmentTypes&&(t.attachmentTypes=t.attachmentTypes.join(",")),t.keywords&&(t.keywords=t.keywords.join(",")),t.globalIds&&(t.globalIds=t.globalIds.join(",")),t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.size&&(t.size=t.size.join(",")),t}function m(e,t){const r={};for(const n of e){const{parentObjectId:e,parentGlobalId:o,attachmentInfos:a}=n;for(const n of a){const{id:a}=n,i=(0,s.cd)((0,s.ce)(`${t}/${e}/attachments/${a}`)),l=f.fromJSON(n);l.set({url:i,parentObjectId:e,parentGlobalId:o}),r[e]?r[e].push(l):r[e]=[l]}}return r}function g(e,t){return t}function b(e,t,r,n){switch(r){case 0:return w(e,t+n,0);case 1:return"lowerLeft"===e.originPosition?w(e,t+n,1):function({translate:e,scale:t},r,n){return e[n]-r*t[n]}(e,t+n,1)}}function I(e,t,r,n){return 2===r?w(e,t,2):b(e,t,r,n)}function F(e,t,r,n){return 2===r?w(e,t,3):b(e,t,r,n)}function R(e,t,r,n){return 3===r?w(e,t,3):I(e,t,r,n)}function w({translate:e,scale:t},r,n){return e[n]+r*t[n]}class S{constructor(e){this.options=e,this.geometryTypes=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"],this.previousCoordinate=[0,0],this.transform=null,this.applyTransform=g,this.lengths=[],this.currentLengthIndex=0,this.toAddInCurrentPath=0,this.vertexDimension=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,this.AttributesConstructor=function(){}}createFeatureResult(){return{fields:[],features:[]}}finishFeatureResult(e){if(this.options.applyTransform&&(e.transform=null),this.AttributesConstructor=function(){},this.coordinateBuffer=null,this.lengths.length=0,!e.hasZ)return;const t=(0,d.t)(e.geometryType,this.options.sourceSpatialReference,e.spatialReference);if(t)for(const r of e.features)t(r.geometry)}createSpatialReference(){return{}}addField(e,t){e.fields.push(t);const r=e.fields.map((e=>e.name));this.AttributesConstructor=function(){for(const e of r)this[e]=null}}addFeature(e,t){e.features.push(t)}prepareFeatures(e){switch(this.transform=e.transform,this.options.applyTransform&&e.transform&&(this.applyTransform=this.deriveApplyTransform(e)),this.vertexDimension=2,e.hasZ&&this.vertexDimension++,e.hasM&&this.vertexDimension++,e.geometryType){case"esriGeometryPoint":this.addCoordinate=(e,t,r)=>this.addCoordinatePoint(e,t,r),this.createGeometry=e=>this.createPointGeometry(e);break;case"esriGeometryPolygon":this.addCoordinate=(e,t,r)=>this.addCoordinatePolygon(e,t,r),this.createGeometry=e=>this.createPolygonGeometry(e);break;case"esriGeometryPolyline":this.addCoordinate=(e,t,r)=>this.addCoordinatePolyline(e,t,r),this.createGeometry=e=>this.createPolylineGeometry(e);break;case"esriGeometryMultipoint":this.addCoordinate=(e,t,r)=>this.addCoordinateMultipoint(e,t,r),this.createGeometry=e=>this.createMultipointGeometry(e)}}createFeature(){return this.lengths.length=0,this.currentLengthIndex=0,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,{attributes:new this.AttributesConstructor}}allocateCoordinates(){}addLength(e,t,r){0===this.lengths.length&&(this.toAddInCurrentPath=t),this.lengths.push(t)}addQueryGeometry(e,t){const{queryGeometry:r,queryGeometryType:n}=t,s=(0,c.a)(r.clone(),r,!1,!1,this.transform),o=(0,c.e)(s,n,!1,!1);e.queryGeometryType=n,e.queryGeometry={...o}}createPointGeometry(e){const t={x:0,y:0,spatialReference:e.spatialReference};return e.hasZ&&(t.z=0),e.hasM&&(t.m=0),t}addCoordinatePoint(e,t,r){switch(t=this.applyTransform(this.transform,t,r,0),r){case 0:e.x=t;break;case 1:e.y=t;break;case 2:"z"in e?e.z=t:e.m=t;break;case 3:e.m=t}}transformPathLikeValue(e,t){let r=0;return t<=1&&(r=this.previousCoordinate[t],this.previousCoordinate[t]+=e),this.applyTransform(this.transform,e,t,r)}addCoordinatePolyline(e,t,r){this.dehydratedAddPointsCoordinate(e.paths,t,r)}addCoordinatePolygon(e,t,r){this.dehydratedAddPointsCoordinate(e.rings,t,r)}addCoordinateMultipoint(e,t,r){0===r&&e.points.push([]);const n=this.transformPathLikeValue(t,r);e.points[e.points.length-1].push(n)}createPolygonGeometry(e){return{rings:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}createPolylineGeometry(e){return{paths:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}createMultipointGeometry(e){return{points:[],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}dehydratedAddPointsCoordinate(e,t,r){0===r&&0==this.toAddInCurrentPath--&&(e.push([]),this.toAddInCurrentPath=this.lengths[++this.currentLengthIndex]-1,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0);const n=this.transformPathLikeValue(t,r),s=e[e.length-1];0===r&&(this.coordinateBufferPtr=0,this.coordinateBuffer=new Array(this.vertexDimension),s.push(this.coordinateBuffer)),this.coordinateBuffer[this.coordinateBufferPtr++]=n}deriveApplyTransform(e){const{hasZ:t,hasM:r}=e;return t&&r?R:t?I:r?F:b}}function q(e,t){const r=e.toJSON();return r.objectIds&&(r.objectIds=r.objectIds.join(",")),r.orderByFields&&(r.orderByFields=r.orderByFields.join(",")),!r.outFields||null!=t&&t.returnCountOnly?delete r.outFields:-1!==r.outFields.indexOf("*")?r.outFields="*":r.outFields=r.outFields.join(","),r.outSpatialReference&&(r.outSR=r.outSR.wkid||JSON.stringify(r.outSR.toJSON()),delete r.outSpatialReference),r.dynamicDataSource&&(r.layer=JSON.stringify({source:r.dynamicDataSource}),delete r.dynamicDataSource),r}async function _(e,t,r){const n=await x(e,t,r),s=n.data,o=s.geometryType,a=s.spatialReference,i={};for(const e of s.relatedRecordGroups){const t={fields:void 0,objectIdFieldName:void 0,geometryType:o,spatialReference:a,hasZ:!!s.hasZ,hasM:!!s.hasM,features:e.relatedRecords};if(null!=e.objectId)i[e.objectId]=t;else for(const r in e)e.hasOwnProperty(r)&&"relatedRecords"!==r&&(i[e[r]]=t)}return{...n,data:i}}async function x(e,t,r={},n){const o=(0,u.t)({...e.query,f:"json",...n,...q(t,n)});return(0,s.U)(e.path+"/queryRelatedRecords",{...r,query:{...r.query,...o}})}async function O(e,t,r){return t=i.l.from(t),_((0,l.r)(e),t,r).then((e=>{const t=e.data,r={};return Object.keys(t).forEach((e=>r[e]=s.ap.fromJSON(t[e]))),r}))}let v=class extends l.p{constructor(e){super(e),this.dynamicDataSource=null,this.format="json",this.gdbVersion=null,this.sourceSpatialReference=null}execute(e,t){return this.executeJSON(e,t).then((e=>s.ap.fromJSON(e)))}async executeJSON(e,t){var r;const n={...this.requestOptions,...t},s=this._normalizeQuery(e),i=null!=(null==(r=e.outStatistics)?void 0:r[0]),c=(0,o.t)("featurelayer-pbf-statistics"),d=!i||c;let h;if("pbf"===this.format&&d)try{h=await async function(e,t,r){const n=(0,l.r)(e),s={...r},o=a.R.from(t),i=!o.quantizationParameters,{data:c}=await(0,u.c)(n,o,new S({sourceSpatialReference:o.sourceSpatialReference,applyTransform:i}),s);return c}(this.url,s,n)}catch(e){if("query:parsing-pbf"!==e.name)throw e;this.format="json"}return"json"!==this.format&&d||(h=await async function(e,t,r){const n=(0,l.r)(e),s={...r},o=a.R.from(t),{data:i}=await(0,u.y)(n,o,o.sourceSpatialReference,s);return i}(this.url,s,n)),this._normalizeFields(h.fields),h}executeForCount(e,t){const r={...this.requestOptions,...t},n=this._normalizeQuery(e);return async function(e,t,r){const n=(0,l.r)(e);return(0,u.p)(n,a.R.from(t),{...r}).then((e=>e.data.count))}(this.url,n,r)}executeForExtent(e,t){const r={...this.requestOptions,...t},n=this._normalizeQuery(e);return async function(e,t,r){const n=(0,l.r)(e);return(0,u.S)(n,a.R.from(t),{...r}).then((e=>({count:e.data.count,extent:s.M.fromJSON(e.data.extent)})))}(this.url,n,r)}executeForIds(e,t){const r={...this.requestOptions,...t},n=this._normalizeQuery(e);return async function(e,t,r){const n=(0,l.r)(e);return(0,u.f)(n,a.R.from(t),{...r}).then((e=>e.data.objectIds))}(this.url,n,r)}executeRelationshipQuery(e,t){e=i.l.from(e);const r={...this.requestOptions,...t};return(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),O(this.url,e,r)}executeRelationshipQueryForCount(e,t){e=i.l.from(e);const r={...this.requestOptions,...t};return(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),async function(e,t,r){return t=i.l.from(t),async function(e,t,r){const n=await x(e,t,r,{returnCountOnly:!0}),s=n.data,o={};for(const e of s.relatedRecordGroups)null!=e.objectId&&(o[e.objectId]=e.count);return{...n,data:o}}((0,l.r)(e),t,{...r}).then((e=>e.data))}(this.url,e,r)}executeAttachmentQuery(e,t){const r={...this.requestOptions,...t};return async function(e,t,r){const n=(0,l.r)(e);return function(e,t,r){let n={query:(0,u.t)({...e.query,f:"json",...p(t)})};return r&&(n={...r,...n,query:{...r.query,...n.query}}),(0,s.U)(e.path+"/queryAttachments",n)}(n,i.u.from(t),{...r}).then((e=>m(e.data.attachmentGroups,n.path)))}(this.url,e,r)}_normalizeQuery(e){const t=a.R.from(e);if(t.sourceSpatialReference=t.sourceSpatialReference||this.sourceSpatialReference,!this.gdbVersion&&!this.dynamicDataSource)return t;const r=t===e?t.clone():t;return r.gdbVersion=e.gdbVersion||this.gdbVersion,r.dynamicDataSource=e.dynamicDataSource?a.K.from(e.dynamicDataSource):this.dynamicDataSource,r}_normalizeFields(e){if((0,s.H)(this.fieldsIndex)&&(0,s.H)(e))for(const t of e){const e=this.fieldsIndex.get(t.name);e&&Object.assign(t,e.toJSON())}}};(0,s.Z)([(0,s._)({type:a.K})],v.prototype,"dynamicDataSource",void 0),(0,s.Z)([(0,s._)()],v.prototype,"fieldsIndex",void 0),(0,s.Z)([(0,s._)()],v.prototype,"format",void 0),(0,s.Z)([(0,s._)()],v.prototype,"gdbVersion",void 0),(0,s.Z)([(0,s._)()],v.prototype,"sourceSpatialReference",void 0),v=(0,s.Z)([(0,s.a0)("esri.tasks.QueryTask")],v);var G=v},60235:(e,t,r)=>{r.d(t,{i:()=>a,s:()=>i,u:()=>l});var n=r(58574),s=r(47817),o=r(76791);function a(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?o.l:"esriGeometryPolyline"===e?o.o:o.S}}}function i(e,t){if((0,n.t)("csp-restrictions"))return()=>({[t]:null,...e});try{let r=`this.${t} = null;`;for(const t in e)r+=`this${t.indexOf(".")?`["${t}"]`:`.${t}`} = ${JSON.stringify(e[t])};`;const n=new Function(r);return()=>new n}catch(r){return()=>({[t]:null,...e})}}function l(e={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,s.R)(e)}}]}},41083:(e,t,r)=>{r.d(t,{$:()=>N,A:()=>G,C:()=>j,I:()=>f,J:()=>A,K:()=>M,V:()=>O,W:()=>k,X:()=>C,a:()=>X,b:()=>ee,c:()=>L,e:()=>E,f:()=>Y,g:()=>H,l:()=>$,n:()=>D,o:()=>z,p:()=>y,r:()=>U,s:()=>V,w:()=>g,y:()=>W});var n=r(47817),s=r(1186);function o(e,t){return e?t?4:3:t?3:2}const a=n.S.getLogger("esri.tasks.support.optimizedFeatureSet"),i={esriGeometryPoint:0,esriGeometryPolyline:2,esriGeometryPolygon:3,esriGeometryMultipoint:0},l=(e,t,r,n,s,o)=>{e[r]=s,e[r+1]=o},u=(e,t,r,n,s,o)=>{e[r]=s,e[r+1]=o,e[r+2]=t[n+2]},c=(e,t,r,n,s,o)=>{e[r]=s,e[r+1]=o,e[r+2]=t[n+3]},d=(e,t,r,n,s,o)=>{e[r]=s,e[r+1]=o,e[r+2]=t[n+2],e[r+3]=t[n+3]};function h(e,t,r,n){if(e){if(r)return t&&n?d:u;if(t&&n)return c}else if(t&&n)return u;return l}function y({scale:e,translate:t},r){return Math.round((r-t[0])/e[0])}function f({scale:e,translate:t},r){return Math.round((t[1]-r)/e[1])}function p({scale:e,translate:t},r){return r*e[0]+t[0]}function m({scale:e,translate:t},r){return t[1]-r*e[1]}function g(e,t,r){return e?t?r?q(e):F(e):r?w(e):b(e):null}function b(e){const t=e.coords;return{x:t[0],y:t[1]}}function I(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e}function F(e){const t=e.coords;return{x:t[0],y:t[1],z:t[2]}}function R(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.z,e}function w(e){const t=e.coords;return{x:t[0],y:t[1],m:t[2]}}function S(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.m,e}function q(e){const t=e.coords;return{x:t[0],y:t[1],z:t[2],m:t[3]}}function _(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.z,e.coords[3]=t.m,e}function x(e,t){return e&&t?_:e?R:t?S:I}function O(e,t,r){if(!e)return null;const n=o(t,r),s=[];for(let t=0;t<e.coords.length;t+=n){const r=[];for(let s=0;s<n;s++)r.push(e.coords[t+s]);s.push(r)}return t?r?{points:s,hasZ:t,hasM:r}:{points:s,hasZ:t}:r?{points:s,hasM:r}:{points:s}}function v(e,t,r=o(t.hasZ,t.hasM)){e.lengths[0]=t.points.length;const n=e.coords;let s=0;for(const e of t.points)for(let t=0;t<r;t++)n[s++]=e[t];return e}function G(e,t,r){if(!e)return null;const n=o(t,r),{coords:s,lengths:a}=e,i=[];let l=0;for(const e of a){const t=[];for(let r=0;r<e;r++){const e=[];for(let t=0;t<n;t++)e.push(s[l++]);t.push(e)}i.push(t)}return t?r?{paths:i,hasZ:t,hasM:r}:{paths:i,hasZ:t}:r?{paths:i,hasM:r}:{paths:i}}function T(e,t,r=o(t.hasZ,t.hasM)){const{lengths:n,coords:s}=e;let a=0;for(const e of t.paths){for(const t of e)for(let e=0;e<r;e++)s[a++]=t[e];n.push(e.length)}return e}function N(e,t,r){if(!e)return null;const n=o(t,r),{coords:s,lengths:a}=e,i=[];let l=0;for(const e of a){const t=[];for(let r=0;r<e;r++){const e=[];for(let t=0;t<n;t++)e.push(s[l++]);t.push(e)}i.push(t)}return t?r?{rings:i,hasZ:t,hasM:r}:{rings:i,hasZ:t}:r?{rings:i,hasM:r}:{rings:i}}function j(e,t,r=t.hasZ,n=t.hasM){return function(e,t,r,n){const s=o(r,n),{lengths:a,coords:i}=e;let l=0;a.length=i.length=0;for(const e of t){for(const t of e)for(let e=0;e<s;e++)i[l++]=t[e];a.push(e.length)}}(e,t.rings,r,n),e}const P=[],Z=[];function A(e,t,r,n,s){P[0]=e;const[o]=M(Z,P,t,r,n,s);return P.length=Z.length=0,o}function M(e,t,r,i,l,u){if(e.length=0,!r){for(const r of t){const t=r.attributes[u];e.push(new s.t(null,r.attributes,null,t))}return e}switch(r){case"esriGeometryPoint":return function(e,t,r,n,o){const a=x(r,n);for(const r of t){const{geometry:t,attributes:n}=r;let i;t&&(i=a(new s.a,t)),e.push(new s.t(i,n,null,n[o]))}return e}(e,t,i,l,u);case"esriGeometryMultipoint":return function(e,t,r,n,a){const i=o(r,n);for(const r of t){const t=r.geometry,n=r.attributes;let o;t&&(o=v(new s.a,t,i)),e.push(new s.t(o,n,null,n[a]))}return e}(e,t,i,l,u);case"esriGeometryPolyline":return function(e,t,r,n,a){const i=o(r,n);for(const r of t){const t=r.geometry,n=r.attributes;let o;t&&(o=T(new s.a,t,i)),e.push(new s.t(o,n,null,n[a]))}return e}(e,t,i,l,u);case"esriGeometryPolygon":return function(e,t,r,n,o){for(const a of t){const t=a.geometry,i=a.centroid,l=a.attributes;let u;t&&(u=j(new s.a,t,r,n)),i?e.push(new s.t(u,l,I(new s.a,i),l[o])):e.push(new s.t(u,l,null,l[o]))}return e}(e,t,i,l,u);default:a.error("convertToFeatureSet:unknown-geometry",new n.s(`Unable to parse unknown geometry type '${r}'`)),e.length=0}return e}function k(e,t,r,n){Z[0]=e,J(P,Z,t,r,n);const s=P[0];return P.length=Z.length=0,s}function C(e,t,r){if(!e)return null;const i=new s.a;return"hasZ"in e&&null==t&&(t=e.hasZ),"hasM"in e&&null==r&&(r=e.hasM),(0,n.T)(e)?x(null!=t?t:null!=e.z,null!=r?r:null!=e.m)(i,e):(0,n.V)(e)?j(i,e,t,r):(0,n.W)(e)?T(i,e,o(t,r)):(0,n.X)(e)?v(i,e,o(t,r)):void a.error("convertFromGeometry:unknown-geometry",new n.s(`Unable to parse unknown geometry type '${e}'`))}function E(e,t,r,s){const o=e&&("coords"in e?e:e.geometry);if(!o)return null;switch(t){case"esriGeometryPoint":{let e=b;return r&&s?e=q:r?e=F:s&&(e=w),e(o)}case"esriGeometryMultipoint":return O(o,r,s);case"esriGeometryPolyline":return G(o,r,s);case"esriGeometryPolygon":return N(o,r,s);default:return void a.error("convertToGeometry:unknown-geometry",new n.s(`Unable to parse unknown geometry type '${t}'`))}}function J(e,t,r,s,o){switch(e.length=0,r){case"esriGeometryPoint":return function(e,t,r,n){let s=b;r&&n?s=q:r?s=F:n&&(s=w);for(const r of t){const{geometry:t,attributes:n}=r,o=t?s(t):null;e.push({attributes:n,geometry:o})}return e}(e,t,s,o);case"esriGeometryMultipoint":return function(e,t,r,n){for(const s of t){const{geometry:t,attributes:o}=s;let a;t&&(a=O(t,r,n)),e.push({attributes:o,geometry:a})}return e}(e,t,s,o);case"esriGeometryPolyline":return function(e,t,r,n){for(const s of t){const{geometry:t,attributes:o}=s;let a;t&&(a=G(t,r,n)),e.push({attributes:o,geometry:a})}return e}(e,t,s,o);case"esriGeometryPolygon":return function(e,t,r,n){for(const s of t){const{geometry:t,attributes:o,centroid:a}=s;let i;if(t&&(i=N(t,r,n)),a){const t=b(a);e.push({attributes:o,centroid:t,geometry:i})}else e.push({attributes:o,geometry:i})}return e}(e,t,s,o);default:a.error("convertToFeatureSet:unknown-geometry",new n.s(`Unable to parse unknown geometry type '${r}'`))}return e}function D(e){const{objectIdFieldName:t,spatialReference:r,transform:n,fields:s,hasM:o,hasZ:a,features:i,geometryType:l,exceededTransferLimit:u,uniqueIdField:c,queryGeometry:d,queryGeometryType:h}=e,y={features:J([],i,l,a,o),fields:s,geometryType:l,objectIdFieldName:t,spatialReference:r,uniqueIdField:c,queryGeometry:E(d,h,!1,!1)};return n&&(y.transform=n),u&&(y.exceededTransferLimit=u),o&&(y.hasM=o),a&&(y.hasZ=a),y}function z(e,t){const r=new s.e,{hasM:o,hasZ:i,features:l,objectIdFieldName:u,spatialReference:c,geometryType:d,exceededTransferLimit:h,transform:y,fields:f}=e;return f&&(r.fields=f),r.geometryType=d,r.objectIdFieldName=u||t,r.spatialReference=c,r.objectIdFieldName?(l&&M(r.features,l,d,i,o,r.objectIdFieldName),h&&(r.exceededTransferLimit=h),o&&(r.hasM=o),i&&(r.hasZ=i),y&&(r.transform=y),r):(a.error(new n.s("optimized-features:invalid-objectIdFieldName","objectIdFieldName is missing")),r)}function U(e){const{transform:t,features:r,hasM:n,hasZ:s}=e;if(!t)return e;for(const e of r)e.geometry&&X(e.geometry,e.geometry,n,s,t),e.centroid&&X(e.centroid,e.centroid,n,s,t);return e.transform=null,e}function V(e,t){const{geometryType:r,features:n,hasM:o,hasZ:a}=t;if(!e)return t;for(let t=0;t<n.length;t++){const i=n[t],l=i.weakClone();l.geometry=new s.a,L(l.geometry,i.geometry,o,a,r,e),i.centroid&&(l.centroid=new s.a,L(l.centroid,i.centroid,o,a,"esriGeometryPoint",e)),n[t]=l}return t.transform=e,t}function L(e,t,r,n,s,a,l=r,u=n){if(e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0),!t||!t.coords.length)return null;const c=i[s],{coords:d,lengths:p}=t,m=o(r,n),g=o(r&&l,n&&u),b=h(r,n,l,u);if(!p.length)return b(e.coords,d,0,0,y(a,d[0]),f(a,d[1])),e.lengths.length&&(e.lengths.length=0),e.coords.length=m,e;let I,F,R,w,S=0,q=0,_=q;for(const t of p){if(t<c)continue;let r=0;q=_,R=I=y(a,d[S]),w=F=f(a,d[S+1]),b(e.coords,d,q,S,R,w),r++,S+=m,q+=g;for(let n=1;n<t;n++,S+=m)R=y(a,d[S]),w=f(a,d[S+1]),R===I&&w===F||(b(e.coords,d,q,S,R-I,w-F),q+=g,r++,I=R,F=w);r>=c&&(e.lengths.push(r),_=q)}return e.coords.length=_,e.coords.length?e:null}function $(e,t,r,n,s,a,l=r,u=n){if(e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0),!t||!t.coords.length)return null;const c=i[s],{coords:d,lengths:y}=t,f=o(r,n),p=o(r&&l,n&&u),m=h(r,n,l,u);if(!y.length)return m(e.coords,d,0,0,d[0],d[1]),e.lengths.length&&(e.lengths.length=0),e.coords.length=f,e;let g=0;const b=a*a;for(const t of y){if(t<c){g+=t*f;continue}const r=e.coords.length/p,n=g,s=g+(t-1)*f;m(e.coords,d,e.coords.length,n,d[n],d[n+1]),Q(e.coords,d,f,b,m,n,s),m(e.coords,d,e.coords.length,s,d[s],d[s+1]);const o=e.coords.length/p-r;o>=c?e.lengths.push(o):e.coords.length=r*p,g+=t*f}return e.coords.length?e:null}function B(e,t,r,n){const s=e[t],o=e[t+1],a=e[r],i=e[r+1],l=e[n],u=e[n+1];let c=a,d=i,h=l-c,y=u-d;if(0!==h||0!==y){const e=((s-c)*h+(o-d)*y)/(h*h+y*y);e>1?(c=l,d=u):e>0&&(c+=h*e,d+=y*e)}return h=s-c,y=o-d,h*h+y*y}function Q(e,t,r,n,s,o,a){let i,l=n,u=0;for(let e=o+r;e<a;e+=r)i=B(t,e,o,a),i>l&&(u=e,l=i);l>n&&(u-o>r&&Q(e,t,r,n,s,o,u),s(e,t,e.length,u,t[u],t[u+1]),a-u>r&&Q(e,t,r,n,s,u,a))}function Y(e,t,r,n){if(!t||!t.coords||!t.coords.length)return null;const s=o(r,n);let a=Number.POSITIVE_INFINITY,i=Number.POSITIVE_INFINITY,l=Number.NEGATIVE_INFINITY,u=Number.NEGATIVE_INFINITY;if(t&&t.coords){const e=t.coords;for(let t=0;t<e.length;t+=s){const r=e[t],n=e[t+1];a=Math.min(a,r),l=Math.max(l,r),i=Math.min(i,n),u=Math.max(u,n)}}return e[0]=a,e[1]=i,e[2]=l,e[3]=u,e}function X(e,t,r,n,s){const{coords:a,lengths:i}=t,c=r?n?d:u:n?u:l,h=o(r,n);if(!a.length)return e!==t&&(e.lengths.length=0,e.coords.length=0),e;if(!i.length)return c(e.coords,a,0,0,p(s,a[0]),m(s,a[1])),e!==t&&(e.lengths.length=0,e.coords.length=h),e;const[y,f]=s.scale;let g=0;for(let t=0;t<i.length;t++){const r=i[t];e.lengths[t]=r;let n=p(s,a[g]),o=m(s,a[g+1]);c(e.coords,a,g,g,n,o),g+=h;for(let t=1;t<r;t++,g+=h)n+=a[g]*y,o-=a[g+1]*f,c(e.coords,a,g,g,n,o)}return e!==t&&(e.lengths.length=i.length,e.coords.length=a.length),e}function H(e,t,r,n,s,a){const i=o(r,n),l=h(r,n,s,a),u=t.coords;e.coords.length=0,e.lengths.length=0,e.lengths.push(...t.lengths);for(let t=0;t<u.length;t+=i)l(e.coords,u,e.coords.length,t,u[t],u[t+1]);return e}function K(e,t,r,n){let s=0,o=e[n*t],a=e[n*(t+1)];for(let i=1;i<r;i++){const r=o+e[n*(t+i)],l=a+e[n*(t+i)+1],u=(r-o)*(l+a);o=r,a=l,s+=u}return.5*s}function W(e,t){const{coords:r,lengths:n}=e;let s=0,o=0;for(let e=0;e<n.length;e++)o+=K(r,s,n[e],t),s+=e;return Math.abs(o)}function ee(e,t){const r=e.clone(),n=e.coords,s=e.lengths;let o=0;for(let e=0;e<s.length;e++){const a=s[e];let i=n[t*o],l=n[t*o+1];for(let e=1;e<a;e++){const s=i+n[t*(o+e)],a=l+n[t*(o+e)+1];r.coords[t*(o+e)]=s,r.coords[t*(o+e)+1]=a,i=s,l=a}o+=a}return r}},11115:(e,t,r)=>{r.d(t,{e:()=>a,n:()=>l,p:()=>o,r:()=>i});var n=r(47817);r(58574);let s=class extends n.a1{constructor(...e){super(...e),this.requestOptions=null,this.url=null}normalizeCtorArgs(e,t){return"string"!=typeof e?e:{url:e,...t}}get parsedUrl(){return this._parseUrl(this.url)}_parseUrl(e){return e?(0,n.j)(e):null}_encode(e,t,r){const n={};for(const s in e){if("declaredClass"===s)continue;const o=e[s];if(null!=o&&"function"!=typeof o)if(Array.isArray(o)){n[s]=[];for(let e=0;e<o.length;e++)n[s][e]=this._encode(o[e])}else if("object"==typeof o)if(o.toJSON){const e=o.toJSON(r&&r[s]);n[s]=t?e:JSON.stringify(e)}else n[s]=t?o:JSON.stringify(o);else n[s]=o}return n}};(0,n.Z)([(0,n._)({readOnly:!0})],s.prototype,"parsedUrl",null),(0,n.Z)([(0,n._)()],s.prototype,"requestOptions",void 0),(0,n.Z)([(0,n._)({type:String})],s.prototype,"url",void 0),s=(0,n.Z)([(0,n.a0)("esri.tasks.Task")],s);var o=s;function a(e,t){let r={query:e};return t&&(r={...t,...r},r.query={...r.query,...t.query}),r}function i(e){return"string"==typeof e?(0,n.j)(e):e}function l(e,t,r){const n={};for(const s in e){if("declaredClass"===s)continue;const o=e[s];if(null!=o&&"function"!=typeof o)if(Array.isArray(o)){n[s]=[];for(let e=0;e<o.length;e++)n[s][e]=l(o[e])}else if("object"==typeof o)if(o.toJSON){const e=o.toJSON(r&&r[s]);n[s]=t?e:JSON.stringify(e)}else n[s]=t?o:JSON.stringify(o);else n[s]=o}return n}}}]);