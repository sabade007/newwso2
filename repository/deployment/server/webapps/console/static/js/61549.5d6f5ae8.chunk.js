(self.webpackChunk_wso2is_console=self.webpackChunk_wso2is_console||[]).push([[61549],{80785:(e,n,t)=>{"use strict";t.d(n,{Z:()=>a});var r=t(14603),o=t(43991),i=t(26187);const a=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0,a={headers:{Accept:"application/json","Content-Type":"application/json"},method:r.f2.GET,params:{attributes:t,filter:n},url:i.h.getState().config.endpoints.apiResourceCollections},l=(0,o.Z)(e?a:null,{shouldRetryOnError:!1}),s=l.data,c=l.error;return{data:s,error:c,isLoading:!c&&!s,isValidating:l.isValidating,mutate:l.mutate}}},61549:(e,n,t)=>{"use strict";t.d(n,{Z:()=>P});var r,o=t(28925),i=t(72134),a=t(27210),l=t(9077),s=t(5799),c=t(38578),u=t(90946),d=t(40904),m=t(93023),p=t(5948),b=t(22405),f=t(33697),v=t(6590),y=t(61555),Z=t(46440),E=t(17),g=t(67127),h=t(52983),N=t(9202),L=t(54221),R=t(80785),S=t(90820);!function(e){e.TENANT="tenant",e.ORGANIZATION="organization"}(r||(r={}));var O=t(17999),C=t(62132),w=t.n(C),x=t(27899),I=t.n(x),z=t(76569),X=t.n(z),W=t(34753),A=t.n(W),_=t(93598),j=t.n(_),k=t(46244),Q=t.n(k),U=t(99256),G=t.n(U),Y={};Y.styleTagTransform=Q(),Y.setAttributes=A(),Y.insert=X().bind(null,"head"),Y.domAPI=I(),Y.insertStyleElement=j();w()(G(),Y);G()&&G().locals&&G().locals;function F(e){return function(e){if(Array.isArray(e))return T(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||B(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function J(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i,a,l=[],s=!0,c=!1;try{if(i=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;s=!1}else for(;!(s=(r=i.call(t)).done)&&(l.push(r.value),l.length!==n);s=!0);}catch(e){c=!0,o=e}finally{try{if(!s&&null!=t.return&&(a=t.return(),Object(a)!==a))return}finally{if(c)throw o}}return l}}(e,n)||B(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function B(e,n){if(e){if("string"==typeof e)return T(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?T(e,n):void 0}}function T(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var M="tenant-permissions",V="organization-permissions",D=function(e){var n,t,C,w,x,I,z=e.isReadOnly,X=e.defaultExpandedIfPermissionsAreSelected,W=e.initialValues,A=e.onPermissionsChange,_=e["data-componentid"],j=(0,N.$)().t,k=(0,L.v9)((function(e){var n,t;return null==e||null===(n=e.config)||void 0===n||null===(t=n.ui)||void 0===t?void 0:t.legacyMode})),Q=(0,R.Z)(!0,"type eq tenant","apiResources").data,U=(0,R.Z)(!0,"type eq organization","apiResources").data,G=J((0,h.useState)([]),2),Y=G[0],B=G[1],T=J((0,h.useState)(W||{organization:{},tenant:{}}),2),D=T[0],P=T[1];(0,h.useEffect)((function(){if(W&&(P(W),X)){var e=[];(0,g.Z)(W.tenant)||e.push(M),(0,g.Z)(W.organization)||e.push(V),B(e)}}),[W]);var H=(0,h.useMemo)((function(){var e;if(!Q)return null;var n=(0,Z.Z)(Q),t=[];return null!=k&&k.rolesV1?t.push(S.S.ROLE_API_RESOURCES_COLLECTION_NAME):t.push(S.S.ROLE_V1_API_RESOURCES_COLLECTION_NAME),n.apiResourceCollections=null==n||null===(e=n.apiResourceCollections)||void 0===e?void 0:e.filter((function(e){return!t.includes(null==e?void 0:e.name)})),n}),[Q]),q=(0,h.useMemo)((function(){var e;if(!U)return null;var n=(0,Z.Z)(U),t=[];return null!=k&&k.rolesV1?t.push(S.S.ORG_ROLE_API_RESOURCES_COLLECTION_NAME):t.push(S.S.ORG_ROLE_V1_API_RESOURCES_COLLECTION_NAME),n.apiResourceCollections=null==n||null===(e=n.apiResourceCollections)||void 0===e?void 0:e.filter((function(e){return!t.includes(null==e?void 0:e.name)})),n}),[U]),$=function(e){return function(n,t){B(t?[].concat(F(Y),[e]):Y.filter((function(n){return n!==e})))}},K=function(e,n){var t=(0,Z.Z)(D);n===r.TENANT?e.target.checked?t.tenant=((null==H?void 0:H.apiResourceCollections)||[]).reduce((function(e,n){return e[n.id]={permissions:(0,O.Z)(n.apiResources.read),read:!0,write:!1},e}),{}):t.tenant={}:e.target.checked?t.organization=((null==q?void 0:q.apiResourceCollections)||[]).reduce((function(e,n){return e[n.id]={permissions:(0,O.Z)(n.apiResources.read),read:!0,write:!1},e}),{}):t.organization={},P(t),ee(t)},ee=function(e){var n=new Set;Object.keys(e).forEach((function(t){var r=e[t];Object.keys(r).forEach((function(e){var t=r[e];t.permissions&&t.permissions.length>0&&t.permissions.forEach((function(e){n.add(JSON.stringify(e))}))}))}));var t=Array.from(n).map((function(e){return JSON.parse(e)}));A(t)},ne=function(e,n,t){var r=n.id,o=n.apiResources,i=(0,Z.Z)(D);e.target.checked?i[t][r]={permissions:(0,O.Z)(o.read),read:!0,write:!1}:delete i[t][r],P(i),ee(i)},te=function(e,n,t,r){var o=n.id,i=n.apiResources,a=(0,Z.Z)(D);a[r][o]={permissions:(0,O.Z)(i[t]),read:"read"===t,write:"write"===t},P(a),ee(a)};return h.createElement("div",{className:"create-console-role-wizard-permissions-form","data-componentid":_},h.createElement("div",{className:"accordion-container"},h.createElement(m.Z,{elevation:0,expanded:Y.includes(M),onChange:$(M),className:"tenant-permissions-accordion"},h.createElement(b.Z,{expandIcon:h.createElement(d.v4,null),"aria-controls":"tenant-permissions-content",id:"tenant-permissions-header"},h.createElement(f.Z,{readOnly:z,disabled:z,color:"primary",checked:Object.keys(D.tenant).length===(null==H||null===(n=H.apiResourceCollections)||void 0===n?void 0:n.length),onChange:function(e){K(e,r.TENANT)},inputProps:{"aria-label":"Select all tenant permissions"}}),h.createElement(y.Z,{className:"permissions-accordion-label"},j("console:consoleSettings.roles.add.tenantPermissions.label")),h.createElement(y.Z,{variant:"body2"},null==H||null===(t=H.apiResourceCollections)||void 0===t?void 0:t.length," Permissions")),h.createElement(p.Z,null,h.createElement(l.Z,{component:v.Z,elevation:0},h.createElement(o.Z,{className:"permissions-table",size:"small","aria-label":"tenant permissions table"},h.createElement(i.Z,null,null==H||null===(C=H.apiResourceCollections)||void 0===C?void 0:C.map((function(e){var n;return h.createElement(s.Z,{key:e.id,className:"permissions-table-data-row"},h.createElement(a.Z,{padding:"checkbox"},h.createElement(f.Z,{readOnly:z,disabled:z,color:"primary",checked:Object.keys(D.tenant).includes(e.id),onChange:function(n){return ne(n,e,r.TENANT)},inputProps:{"aria-label":"Select ".concat(e.displayName," permission")}})),h.createElement(a.Z,{component:"th",scope:"row"},e.displayName),h.createElement(a.Z,{align:"right"},h.createElement(u.Z,{disabled:z,value:Object.keys(D.tenant).includes(e.id)?null!==(n=(0,E.Z)(D.tenant,e.id))&&void 0!==n&&n.write?"write":"read":null,exclusive:!0,onChange:function(n,t){t&&te(0,e,t,r.TENANT)},"aria-label":"text alignment",size:"small"},h.createElement(c.Z,{value:"read","aria-label":"left aligned"},j("console:consoleSettings.roles.permissionLevels.view")),h.createElement(c.Z,{value:"write","aria-label":"right aligned"},j("console:consoleSettings.roles.permissionLevels.edit")))))})))))))),h.createElement("div",{className:"accordion-container"},h.createElement(m.Z,{elevation:0,expanded:Y.includes(V),onChange:$(V),className:"organization-permissions-accordion"},h.createElement(b.Z,{expandIcon:h.createElement(d.v4,null),"aria-controls":"panel1bh-content",id:"panel1bh-header"},h.createElement(f.Z,{readOnly:z,disabled:z,color:"primary",checked:Object.keys(D.organization).length===(null==q||null===(w=q.apiResourceCollections)||void 0===w?void 0:w.length),onChange:function(e){K(e,r.ORGANIZATION)},inputProps:{"aria-label":"Select all organization permissions"}}),h.createElement(y.Z,{className:"permissions-accordion-label"},j("console:consoleSettings.roles.add.organizationPermissions.label")),h.createElement(y.Z,{variant:"body2"},null==q||null===(x=q.apiResourceCollections)||void 0===x?void 0:x.length," Permissions")),h.createElement(p.Z,null,h.createElement(l.Z,{component:v.Z,elevation:0},h.createElement(o.Z,{className:"permissions-table",size:"small","aria-label":"organization permissions table"},h.createElement(i.Z,null,null==q||null===(I=q.apiResourceCollections)||void 0===I?void 0:I.map((function(e){var n;return h.createElement(s.Z,{key:e.id,className:"permissions-table-data-row"},h.createElement(a.Z,{padding:"checkbox"},h.createElement(f.Z,{readOnly:z,disabled:z,color:"primary",checked:Object.keys(D.organization).includes(e.id),onChange:function(n){return ne(n,e,r.ORGANIZATION)},inputProps:{"aria-label":"Select ".concat(e.displayName," permission")}})),h.createElement(a.Z,{component:"th",scope:"row"},e.displayName),h.createElement(a.Z,{align:"right"},h.createElement(u.Z,{disabled:z,value:Object.keys(D.organization).includes(e.id)?null!==(n=(0,E.Z)(D.organization,e.id))&&void 0!==n&&n.write?"write":"read":null,exclusive:!0,onChange:function(n,t){te(0,e,t,r.ORGANIZATION)},"aria-label":"text alignment",size:"small"},h.createElement(c.Z,{value:"read","aria-label":"left aligned"},j("console:consoleSettings.roles.permissionLevels.view")),h.createElement(c.Z,{value:"write","aria-label":"right aligned"},j("console:consoleSettings.roles.permissionLevels.edit")))))})))))))))};D.defaultProps={"data-componentid":"create-console-role-wizard-basic-info-form"};const P=D},90820:(e,n,t)=>{"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,l(r.key),r)}}function i(e,n,t){return n&&o(e.prototype,n),t&&o(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function a(e,n,t){return(n=l(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e){var n=function(e,n){if("object"!==r(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var o=t.call(e,n||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"===r(n)?n:String(n)}t.d(n,{S:()=>s});var s=i((function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}));a(s,"ADD_NEW_ROLE_FORM_ID","add-new-console-role-wizard-form"),a(s,"ROLE_V1_API_RESOURCES_COLLECTION_NAME","rolesV1"),a(s,"ROLE_API_RESOURCES_COLLECTION_NAME","roles"),a(s,"ORG_ROLE_V1_API_RESOURCES_COLLECTION_NAME","org_rolesV1"),a(s,"ORG_ROLE_API_RESOURCES_COLLECTION_NAME","org_roles")},17999:(e,n,t)=>{"use strict";t.d(n,{Z:()=>r});const r=function(e){return e.map((function(e){return e.scopes.map((function(e){return{value:e.name}}))})).reduce((function(e,n){return e.concat(n)}),[])}},99256:e=>{e.exports=[[e.id,".create-console-role-wizard-permissions-form{margin-top:20px}.create-console-role-wizard-permissions-form .oxygen-accordion{border:1px solid var(--oxygen-palette-divider);margin:10px 0}.create-console-role-wizard-permissions-form .oxygen-accordion .permissions-accordion-label{width:40%;flex-shrink:0}.create-console-role-wizard-permissions-form .oxygen-accordion .permissions-table .permissions-table-data-row:last-child td,.create-console-role-wizard-permissions-form .oxygen-accordion .permissions-table .permissions-table-data-row:last-child th{border:none}.create-console-role-wizard-permissions-form .oxygen-accordion .oxygen-accordion-summary .MuiAccordionSummary-content{display:flex;flex-direction:row;flex-wrap:nowrap;align-content:center;align-items:center;justify-content:flex-start}.create-console-role-wizard-permissions-form .accordion-container .oxygen-accordion.Mui-expanded:first-of-type{margin-top:10px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1jb25zb2xlLXJvbGUtd2l6YXJkLXBlcm1pc3Npb25zLWZvcm0uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2Q0FBNkMsZUFBZSxDQUFDLCtEQUErRCw4Q0FBOEMsQ0FBQyxhQUFhLENBQUMsNEZBQTRGLFNBQVMsQ0FBQyxhQUFhLENBQUMsd1BBQXdQLFdBQVcsQ0FBQyxzSEFBc0gsWUFBWSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLG9CQUFvQixDQUFDLGtCQUFrQixDQUFDLDBCQUEwQixDQUFDLCtHQUErRyxlQUFlIiwiZmlsZSI6ImNyZWF0ZS1jb25zb2xlLXJvbGUtd2l6YXJkLXBlcm1pc3Npb25zLWZvcm0uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jcmVhdGUtY29uc29sZS1yb2xlLXdpemFyZC1wZXJtaXNzaW9ucy1mb3Jte21hcmdpbi10b3A6MjBweH0uY3JlYXRlLWNvbnNvbGUtcm9sZS13aXphcmQtcGVybWlzc2lvbnMtZm9ybSAub3h5Z2VuLWFjY29yZGlvbntib3JkZXI6MXB4IHNvbGlkIHZhcigtLW94eWdlbi1wYWxldHRlLWRpdmlkZXIpO21hcmdpbjoxMHB4IDB9LmNyZWF0ZS1jb25zb2xlLXJvbGUtd2l6YXJkLXBlcm1pc3Npb25zLWZvcm0gLm94eWdlbi1hY2NvcmRpb24gLnBlcm1pc3Npb25zLWFjY29yZGlvbi1sYWJlbHt3aWR0aDo0MCU7ZmxleC1zaHJpbms6MH0uY3JlYXRlLWNvbnNvbGUtcm9sZS13aXphcmQtcGVybWlzc2lvbnMtZm9ybSAub3h5Z2VuLWFjY29yZGlvbiAucGVybWlzc2lvbnMtdGFibGUgLnBlcm1pc3Npb25zLXRhYmxlLWRhdGEtcm93Omxhc3QtY2hpbGQgdGQsLmNyZWF0ZS1jb25zb2xlLXJvbGUtd2l6YXJkLXBlcm1pc3Npb25zLWZvcm0gLm94eWdlbi1hY2NvcmRpb24gLnBlcm1pc3Npb25zLXRhYmxlIC5wZXJtaXNzaW9ucy10YWJsZS1kYXRhLXJvdzpsYXN0LWNoaWxkIHRoe2JvcmRlcjpub25lfS5jcmVhdGUtY29uc29sZS1yb2xlLXdpemFyZC1wZXJtaXNzaW9ucy1mb3JtIC5veHlnZW4tYWNjb3JkaW9uIC5veHlnZW4tYWNjb3JkaW9uLXN1bW1hcnkgLk11aUFjY29yZGlvblN1bW1hcnktY29udGVudHtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93O2ZsZXgtd3JhcDpub3dyYXA7YWxpZ24tY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0fS5jcmVhdGUtY29uc29sZS1yb2xlLXdpemFyZC1wZXJtaXNzaW9ucy1mb3JtIC5hY2NvcmRpb24tY29udGFpbmVyIC5veHlnZW4tYWNjb3JkaW9uLk11aS1leHBhbmRlZDpmaXJzdC1vZi10eXBle21hcmdpbi10b3A6MTBweH0iXX0= */","",""]]}}]);