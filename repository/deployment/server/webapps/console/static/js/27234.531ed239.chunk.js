"use strict";(self.webpackChunk_wso2is_console=self.webpackChunk_wso2is_console||[]).push([[27234,29905,49966,13041,33654],{49966:(e,t,o)=>{o.r(t),o.d(t,{EditAPIResource:()=>f});var n=o(14603),r=o(90268),s=o(81816),i=o(52983),a=o(9202),c=o(54221),u=o(28183),l=o(15522),d=o(55379);function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var n,r,s,i,a=[],c=!0,u=!1;try{if(s=(o=o.call(e)).next,0===t){if(Object(o)!==o)return;c=!1}else for(;!(c=(n=s.call(o)).done)&&(a.push(n.value),a.length!==t);c=!0);}catch(e){u=!0,r=e}finally{try{if(!c&&null!=o.return&&(i=o.return(),Object(i)!==i))return}finally{if(u)throw r}}return a}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return R(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return R(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}var f=function(e){var t=e.featureConfig,o=e.isReadOnly,R=e.isManagedByChoreo,f=e.apiResourceData,v=e.isAPIResourceDataLoading,g=e.mutateAPIResource,m=(0,a.$)().t,A=(0,c.I0)(),E=p((0,i.useState)(!1),2),I=E[0],P=E[1],h=function(e,t){P(!0),(0,l.updateAPIResource)(f.id,e).then((function(){A((0,r.V_)({description:m("extensions:develop.apiResource.notifications.updateAPIResource.success.description"),level:n.QU.SUCCESS,message:m("extensions:develop.apiResource.notifications.updateAPIResource.success.message")})),g()})).catch((function(e){switch(null==e?void 0:e.code){case d.APIResourcesConstants.UNAUTHORIZED_ACCESS:A((0,r.V_)({description:m("extensions:develop.apiResource.notifications.updateAPIResource.unauthorizedError.description"),level:n.QU.ERROR,message:m("extensions:develop.apiResource.notifications.updateAPIResource.unauthorizedError.message")}));break;case d.APIResourcesConstants.NO_VALID_API_RESOURCE_ID_FOUND:case d.APIResourcesConstants.API_RESOURCE_NOT_FOUND:A((0,r.V_)({description:m("extensions:develop.apiResource.notifications.updateAPIResource.notFoundError.description"),level:n.QU.ERROR,message:m("extensions:develop.apiResource.notifications.updateAPIResource.notFoundError.message")}));break;case d.APIResourcesConstants.PERMISSION_ALREADY_EXISTS:A((0,r.V_)({description:m("extensions:develop.apiResource.notifications.addAPIResource.permissionAlreadyExistsError.description"),level:n.QU.ERROR,message:m("extensions:develop.apiResource.notifications.addAPIResource.permissionAlreadyExistsError.message")}));break;case d.APIResourcesConstants.INVALID_REQUEST_PAYLOAD:A((0,r.V_)({description:m("extensions:develop.apiResource.notifications.updateAPIResource.invalidPayloadError.description"),level:n.QU.ERROR,message:m("extensions:develop.apiResource.notifications.updateAPIResource.invalidPayloadError.message")}));break;default:A((0,r.V_)({description:m("extensions:develop.apiResource.notifications.updateAPIResource.genericError.description"),level:n.QU.ERROR,message:m("extensions:develop.apiResource.notifications.updateAPIResource.genericError.message")}))}})).finally((function(){P(!1),t&&t()}))};return i.createElement(s.M$,{isLoading:v,panes:[{menuItem:m("extensions:develop.apiResource.tabs.general.label"),render:function(){return i.createElement(s.M$.Pane,{controlledSegmentation:!0,attached:!1},i.createElement(u.GeneralAPIResource,{apiResourceData:f,isAPIResourceDataLoading:v,featureConfig:t,isReadOnly:o,isManagedByChoreo:R,isSubmitting:I,handleUpdateAPIResource:h}))}},{menuItem:m("extensions:develop.apiResource.tabs.permissions.label"),render:function(){return i.createElement(s.M$.Pane,{controlledSegmentation:!0,attached:!1},i.createElement(u.PermissionAPIResource,{apiResourceData:f,isAPIResourceDataLoading:v,isSubmitting:I,isReadOnly:o,isManagedByChoreo:R,handleUpdateAPIResource:h}))}},{menuItem:m("extensions:develop.apiResource.tabs.authorization.label"),render:function(){return i.createElement(s.M$.Pane,{controlledSegmentation:!0,attached:!1},i.createElement(u.AuthorizationAPIResource,{apiResourceData:f,isAPIResourceDataLoading:v}))}}]})}},29905:(e,t,o)=>{o.r(t),o.d(t,{APIResourcesList:()=>n.APIResourcesList,EditAPIResource:()=>r.EditAPIResource});var n=o(67765),r=o(49966)},13041:(e,t,o)=>{o.r(t),o.d(t,{default:()=>E});var n=o(83374),r=o(14603),s=o(90268),i=o(81816),a=o(52983),c=o(9202),u=o(54221),l=o(73949),d=o(30640),p=o(15522),R=o(29905),f=o(55379),v=o(53475);function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var n,r,s,i,a=[],c=!0,u=!1;try{if(s=(o=o.call(e)).next,0===t){if(Object(o)!==o)return;c=!1}else for(;!(c=(n=s.call(o)).done)&&(a.push(n.value),a.length!==t);c=!0);}catch(e){u=!0,r=e}finally{try{if(!c&&null!=o.return&&(i=o.return(),Object(i)!==i))return}finally{if(u)throw r}}return a}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}var A=function(e){var t=e["data-componentid"],o=(0,c.$)().t,m=(0,u.I0)(),A=(0,u.v9)((function(e){var t;return null==e||null===(t=e.auth)||void 0===t?void 0:t.allowedScopes})),E=g((0,a.useState)(!1),2),I=E[0],P=E[1],h=g((0,a.useState)(!1),2),y=h[0],b=h[1],S=g((0,a.useState)(null),2),x=S[0],O=S[1],C=(0,u.v9)((function(e){return e.config.ui.features})),_=(0,p.useAPIResourceDetails)(x),U=_.data,L=_.isLoading,D=_.error,w=_.mutate;(0,a.useEffect)((function(){k()}),[]),(0,a.useEffect)((function(){var e,t;(0,n.hasRequiredScopes)(null==C?void 0:C.apiResources,null==C||null===(e=C.apiResources)||void 0===e||null===(t=e.scopes)||void 0===t?void 0:t.update,A)||P(!0)}),[U]),(0,a.useEffect)((function(){v.APIResourceUtils.checkIfAPIResourceManagedByChoreo(null==U?void 0:U.gwName)&&b(!0)}),[U]),(0,a.useEffect)((function(){var e,t;if(D)switch(null===(e=D.response)||void 0===e||null===(t=e.data)||void 0===t?void 0:t.code){case f.APIResourcesConstants.UNAUTHORIZED_ACCESS:m((0,s.V_)({description:o("extensions:develop.apiResource.notifications.getAPIResource.unauthorizedError.description"),level:r.QU.ERROR,message:o("extensions:develop.apiResource.notifications.getAPIResource.unauthorizedError.message")}));break;case f.APIResourcesConstants.NO_VALID_API_RESOURCE_ID_FOUND:case f.APIResourcesConstants.API_RESOURCE_NOT_FOUND:m((0,s.V_)({description:o("extensions:develop.apiResource.notifications.getAPIResource.notFoundError.description"),level:r.QU.ERROR,message:o("extensions:develop.apiResource.notifications.getAPIResource.notFoundError.message")}));break;default:m((0,s.V_)({description:o("extensions:develop.apiResource.notifications.getAPIResource.genericError.description"),level:r.QU.ERROR,message:o("extensions:develop.apiResource.notifications.getAPIResource.genericError.message")}))}}),[D]);var k=function(){var e=d.m8.location.pathname.split("/"),t=e[e.length-1];O(t)};return!L&&!U||D?a.createElement(i.$J,{subtitle:[o("extensions:develop.apiResource.tabs.apiResourceError.subtitles.0"),o("extensions:develop.apiResource.tabs.apiResourceError.subtitles.1")],title:o("extensions:develop.apiResource.tabs.apiResourceError.title"),image:(0,d.jF)().emptySearch,imageSize:"tiny"}):a.createElement(i.O9,{isLoading:L,title:null==U?void 0:U.displayName,pageTitle:o("extensions:develop.apiResource.tabs.title"),description:y&&a.createElement(l.Z,{size:"small",className:"choreo-label"},o("extensions:develop.apiResource.managedByChoreoText")),loadingStateOptions:{count:5,imageType:"circular"},backButton:{"data-testid":"".concat(t,"-back-button"),onClick:function(){d.m8.push(f.APIResourcesConstants.getPaths().get("API_RESOURCES"))},text:o("extensions:develop.apiResource.tabs.backButton")},titleTextAlign:"left",bottomMargin:!1,pageHeaderMaxWidth:!0},a.createElement(R.EditAPIResource,{apiResourceData:U,isAPIResourceDataLoading:L,featureConfig:C,isReadOnly:I,isManagedByChoreo:y,mutateAPIResource:w}))};A.defaultProps={"data-componentid":"api-resource-edit"};const E=A},33654:(e,t,o)=>{o.r(t),o.d(t,{default:()=>E});var n=o(57477),r=o(14603),s=o(90268),i=o(81816),a=o(52983),c=o(9202),u=o(54221),l=o(74691),d=o(30640),p=o(15522),R=o(29905),f=o(78095),v=o(55379);function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var n,r,s,i,a=[],c=!0,u=!1;try{if(s=(o=o.call(e)).next,0===t){if(Object(o)!==o)return;c=!1}else for(;!(c=(n=s.call(o)).done)&&(a.push(n.value),a.length!==t);c=!0);}catch(e){u=!0,r=e}finally{try{if(!c&&null!=o.return&&(i=o.return(),Object(i)!==i))return}finally{if(u)throw r}}return a}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}var A=function(e){var t=e["data-componentid"],o=(0,c.$)().t,m=(0,u.I0)(),A=(0,i.fQ)().getLink,E=g((0,a.useState)(0),2),I=E[0],P=E[1],h=g((0,a.useState)(!1),2),y=h[0],b=h[1],S=g((0,a.useState)([]),2),x=S[0],O=S[1],C=g((0,a.useState)(!1),2),_=C[0],U=C[1],L=g((0,a.useState)(void 0),2),D=L[0],w=L[1],k=g((0,a.useState)(void 0),2),T=k[0],M=k[1],j=g((0,a.useState)(void 0),2),N=j[0],F=j[1],z=g((0,a.useState)(void 0),2),V=z[0],Q=z[1],B=g((0,a.useState)(void 0),2),$=B[0],H=B[1],W=g((0,a.useState)(void 0),2),Z=W[0],G=W[1],J=(0,u.v9)((function(e){return e.config.ui.features})),X=(0,p.useAPIResources)(D,T),Y=X.data,q=X.isLoading,K=X.error,ee=X.mutate;(0,a.useEffect)((function(){if(Y instanceof n.u)m((0,s.V_)({description:o("extensions:develop.apiResource.notifications.getAPIResources.genericError.description"),level:r.QU.ERROR,message:o("extensions:develop.apiResource.notifications.getAPIResources.genericError.message")}));else if(Y){var e,t=Y.apiResources.map((function(e){return e}));if(Y.links&&0===Y.links.length)H(void 0),G(void 0);else null===(e=Y.links)||void 0===e||e.forEach((function(e){switch(e.rel){case v.APIResourcesConstants.AFTER_REL:H(e.href.split("".concat(v.APIResourcesConstants.AFTER_REL,"="))[1]);break;case v.APIResourcesConstants.BEFORE_REL:G(e.href.split("".concat(v.APIResourcesConstants.BEFORE_REL,"="))[1])}}));O(t)}}),[Y]),(0,a.useEffect)((function(){var e,t;if(K)if((null===(e=K.response)||void 0===e||null===(t=e.data)||void 0===t?void 0:t.code)===v.APIResourcesConstants.UNAUTHORIZED_ACCESS)m((0,s.V_)({description:o("extensions:develop.apiResource.notifications.getAPIResources.unauthorizedError.description"),level:r.QU.ERROR,message:o("extensions:develop.apiResource.notifications.getAPIResources.unauthorizedError.message")}));else m((0,s.V_)({description:o("extensions:develop.apiResource.notifications.getAPIResources.genericError.description"),level:r.QU.ERROR,message:o("extensions:develop.apiResource.notifications.getAPIResources.genericError.message")}))}),[K]),(0,a.useEffect)((function(){_&&(ee(),U(!1))}),[_]);var te=function(e,t){w(e),M(t),F($),Q(Z),U(!0)};return a.createElement(i.Xg,{action:!K&&(null==x?void 0:x.length)>0&&a.createElement(i.KM,{"data-testid":"".concat(t,"-add-api-resources-button"),onClick:function(){return b(!0)}},a.createElement(l.Z,{name:"add"}),o("extensions:develop.apiResource.addApiResourceButton")),pageTitle:o("extensions:develop.apiResource.pageHeader.title"),title:o("extensions:develop.apiResource.pageHeader.title"),description:a.createElement(a.Fragment,null,o("extensions:develop.apiResource.pageHeader.description"),a.createElement(i.eb,{link:A("develop.apiResources.learnMore")},o("extensions:common.learnMore"))),"data-componentid":"".concat(t,"-page-layout"),"data-testid":"".concat(t,"-page-layout"),headingColumnWidth:"11",actionColumnWidth:"5"},a.createElement(i.PS,{showTopActionPanel:!1,"data-componentid":"".concat(t,"-api-resources-list-layout"),"data-testid":"".concat(t,"-api-resources-list-layout"),onPageChange:function(e,t){var o=parseInt(null==t?void 0:t.activePage);o>I?te($,void 0):o<I&&te(void 0,Z),P(o)},showPagination:!0,totalPages:v.APIResourcesConstants.DEFAULT_TOTAL_PAGES,totalListSize:null==x?void 0:x.length,showPaginationPageLimit:!1,isLoading:q,activePage:I,paginationOptions:{disableNextButton:!$,disablePreviousButton:!Z}},K?a.createElement(i.$J,{subtitle:[o("extensions:develop.apiResource.apiResourceError.subtitles.0"),o("extensions:develop.apiResource.apiResourceError.subtitles.1")],title:o("extensions:develop.apiResource.apiResourceError.title"),image:(0,d.jF)().genericError,imageSize:"tiny"}):a.createElement(R.APIResourcesList,{apiResourcesList:x,isAPIResourcesListLoading:q,featureConfig:J,onAPIResourceDelete:function(){1===(null==x?void 0:x.length)?te():te(N,V)},setShowAddAPIWizard:b}),y&&a.createElement(f.AddAPIResource,{"data-testid":"".concat(t,"-add-api-resource-wizard-modal"),closeWizard:function(){return b(!1)}})))};A.defaultProps={"data-componentid":"api-resources"};const E=A},27234:(e,t,o)=>{o.r(t);o(33654),o(13041)}}]);