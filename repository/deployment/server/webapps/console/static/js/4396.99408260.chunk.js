"use strict";(self.webpackChunk_wso2is_console=self.webpackChunk_wso2is_console||[]).push([[4396],{36604:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(14603),i=n(43991),a=n(26187);const r=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,l={headers:{Accept:"application/json","Content-Type":"application/json"},method:o.f2.GET,params:{filter:t,limit:r,offset:n},url:"".concat(a.h.getState().config.endpoints.organizations,"/organizations/discovery")},s=(0,i.Z)(e?l:null,{shouldRetryOnError:!1}),c=s.data,u=s.error;return{data:c,error:u,isLoading:!u&&!c,isValidating:s.isValidating,mutate:s.mutate}}},26862:(e,t,n)=>{n.d(t,{w:()=>o});var o=n(65796).r},58423:(e,t,n)=>{n.d(t,{R:()=>u});var o,i=n(65790);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,c(o.key),o)}}function l(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function s(e,t,n){return(t=c(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==a(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===a(t)?t:String(t)}var u=l((function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}));o=u,s(u,"ORGANIZATION_DOMAIN_ASSIGN_ERROR_CODE","CON-ODA-10001"),s(u,"ORGANIZATION_DOMAIN_ASSIGN_INVALID_STATUS_CODE_ERROR_CODE","CON-ODA-10002"),s(u,"ORGANIZATION_DOMAIN_ASSIGN_FORM_ID","organization-domain-assign-form"),s(u,"ErrorMessages",{ORGANIZATION_DOMAIN_ASSIGN_ERROR:new i.O(o.ORGANIZATION_DOMAIN_ASSIGN_ERROR_CODE,"An error occurred while assigning email domains for the organization.","Error while assigning domains",null),ORGANIZATION_DOMAIN_ASSIGN_INVALID_STATUS_CODE_ERROR:new i.O(o.ORGANIZATION_DOMAIN_ASSIGN_INVALID_STATUS_CODE_ERROR_CODE,"An invalid status code was received while assigning email domains for the organization.","Invalid status code while assigning domains",null)}),s(u,"FEATURE_DICTIONARY",(new Map).set("ORGANIZATION_DISCOVERY_CREATE","organizationDiscovery.create").set("ORGANIZATION_DISCOVERY_UPDATE","organizationDiscovery.update").set("ORGANIZATION_DISCOVERY_DELETE","organizationDiscovery.delete").set("ORGANIZATION_DISCOVERY_READ","organizationDiscovery.read"))},89248:(e,t,n)=>{n.r(t),n.d(t,{default:()=>K});var o=n(31092),i=n(7955),a=n(83374),r=n(14603),l=n(90268),s=n(41482),c=n(81816),u=n(38314),d=n(67127),m=n(52983),g=n(9202),f=n(54221),p=n(21228),v=n(74691),y=n(75917),h=n(2653),O=n(30640),b=n(93967),S=n(26187),D=b.AsgardeoSPAClient.getInstance().httpRequest.bind(b.AsgardeoSPAClient.getInstance());const I=function(e){var t={data:e,headers:{"Content-Type":"application/json"},method:r.f2.POST,url:"".concat(S.h.getState().config.endpoints.organizations,"/organization-configs/discovery")};return D(t).then((function(e){return 201!==e.status?Promise.reject(new Error("Failed to add organization discovery configs.")):Promise.resolve(null==e?void 0:e.data)})).catch((function(e){var t;return Promise.reject(null==e||null===(t=e.response)||void 0===t?void 0:t.data)}))};var E=b.AsgardeoSPAClient.getInstance().httpRequest.bind(b.AsgardeoSPAClient.getInstance());const A=function(){var e={headers:{Accept:"application/json","Content-Type":"application/json"},method:"DELETE",url:"".concat(S.h.getState().config.endpoints.organizations,"/organization-configs/discovery")};return E(e).then((function(e){return 204!==(null==e?void 0:e.status)?Promise.reject(new Error("Failed to delete organization discovery configs.")):Promise.resolve(null==e?void 0:e.data)})).catch((function(e){return Promise.reject(e)}))};var R=n(36604),_=n(43991);function N(e){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},N(e)}function z(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,C(o.key),o)}}function T(e,t,n){return t&&z(e.prototype,t),n&&z(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function C(e){var t=function(e,t){if("object"!==N(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==N(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===N(t)?t:String(t)}var w,P,j,L=T((function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}));function Z(e){return Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Z(e)}function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(Object(n),!0).forEach((function(t){V(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function V(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==Z(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==Z(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===Z(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}w=L,j="OCM-60002",(P=C(P="ORGANIZATION_DISCOVERY_DOMAINS_NOT_CONFIGURED_ERROR_CODE"))in w?Object.defineProperty(w,P,{value:j,enumerable:!0,configurable:!0,writable:!0}):w[P]=j;const M=function(){var e,t,n,o=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],i={headers:{Accept:"application/json","Content-Type":"application/json"},method:r.f2.GET,url:"".concat(S.h.getState().config.endpoints.organizations,"/organization-configs/discovery")},a=(0,_.Z)(o?i:null,{shouldRetryOnError:!1}),l=a.data,s=a.error,c=a.isValidating,u=a.mutate,d=!1;null!=l&&l.properties&&(null===(n=l.properties)||void 0===n||n.forEach((function(e){"emailDomain.enable"===e.key&&(d=!0)})));return(null==s||null===(e=s.response)||void 0===e||null===(t=e.data)||void 0===t?void 0:t.code)===L.ORGANIZATION_DISCOVERY_DOMAINS_NOT_CONFIGURED_ERROR_CODE?{data:k({isOrganizationDiscoveryEnabled:d=!1},l),error:s,isLoading:!s&&!l,isValidating:c,mutate:u}:{data:k({isOrganizationDiscoveryEnabled:d},l),error:s,isLoading:!s&&!l,isValidating:c,mutate:u}};var U=n(97860),x=n(92305),Y=n(26862),Q=n(58423),F=function(e){var t=e.defaultListItemLimit,n=e.isLoading,o=e.list,r=e.onEmptyListPlaceholderActionClick,l=e.onSearchQueryClear,s=e.searchQuery,u=e.selection,p=e.showListItemActions,y=e.isRenderedOnPortal,b=e["data-componentid"],S=(0,g.$)().t,D=(0,f.v9)((function(e){var t;return null==e||null===(t=e.auth)||void 0===t?void 0:t.allowedScopes})),I=(0,f.v9)((function(e){var t,n,o;return null===(t=e.config)||void 0===t||null===(n=t.ui)||void 0===n||null===(o=n.features)||void 0===o?void 0:o.organizationDiscovery})),E=O.lD.getInstance(),A=function(e){O.m8.push({pathname:O.$x.getPaths().get("UPDATE_ORGANIZATION_DISCOVERY_DOMAINS").replace(":id",e)})},R=function(){return s&&((0,d.Z)(o)||0===(null==o?void 0:o.totalResults))?m.createElement(c.$J,{action:m.createElement(c.Qj,{onClick:l},S("console:manage.placeholders.emptySearchResult.action")),image:(0,x.jF)().emptySearch,imageSize:"tiny",title:S("console:manage.placeholders.emptySearchResult.title"),subtitle:[S("console:manage.placeholders.emptySearchResult.subtitles.0",{query:s.split(" ").pop()}),S("console:manage.placeholders.emptySearchResult.subtitles.1")],"data-componentid":"".concat(b,"-empty-search-placeholder")}):(0,d.Z)(o)||0===(null==o?void 0:o.totalResults)?m.createElement(c.$J,{className:y?"":"list-placeholder mr-0",action:r&&m.createElement(i.di,{when:h.T.ORGANIZATION_DISCOVERY_WRITE},m.createElement(c.KM,{onClick:function(){E.publish(b+"-click-assign-email-domain-button"),r()}},m.createElement(v.Z,{name:"add"}),S("console:manage.features.organizationDiscovery.placeholders.emptyList.action"))),image:(0,x.jF)().newList,imageSize:"tiny",title:S("console:manage.placeholders.emptySearchResult.title"),subtitle:[S("console:manage.features.organizationDiscovery.placeholders.emptyList.subtitles")],"data-componentid":"".concat(b,"-empty-placeholder")}):null};return m.createElement(c.wQ,{className:"organizations-table",isLoading:n,loadingStateOptions:{count:null!=t?t:O.ru.DEFAULT_RESOURCE_LIST_ITEM_LIMIT,imageType:"square"},actions:function(){if(p)return[{"data-componentid":"".concat(b,"-item-edit-button"),hidden:function(){return!(0,a.cr)(I,Q.R.FEATURE_DICTIONARY.get("ORGANIZATION_DISCOVERY_UPDATE"))},icon:function(){var e;return(0,a.hasRequiredScopes)(I,null==I||null===(e=I.scopes)||void 0===e?void 0:e.update,D)?"pencil alternate":"eye"},onClick:function(e,t){return A(t.organizationId)},popupText:function(){var e;return(0,a.hasRequiredScopes)(I,null==I||null===(e=I.scopes)||void 0===e?void 0:e.update,D)?S("common:edit"):S("common:view")},renderer:"semantic-icon"}]}(),columns:[{allowToggleVisibility:!1,dataIndex:"name",id:"name",key:"name",render:function(e){return m.createElement(U.Z,{image:!0,as:"h6",className:"header-with-icon","data-componentid":"".concat(b,"-item-heading")},m.createElement(c.dn,{defaultIcon:!0,relaxed:"very",size:"micro",shape:"rounded",spaced:"right",hoverable:!1,icon:Y.w}),m.createElement(U.Z.Content,null,e.organizationName))},title:S("console:manage.features.organizations.list.columns.name")},{allowToggleVisibility:!1,dataIndex:"action",id:"actions",key:"actions",textAlign:"right",title:S("console:manage.features.organizations.list.columns.actions")}],data:null==o?void 0:o.organizations,onRowClick:function(e,t){A(t.organizationId)},placeholders:R(),selectable:u,showHeader:!1,transparent:!n&&null!==R(),"data-componentid":b})};F.defaultProps={"data-componentid":"discoverable-organizations-list",selection:!0,showListItemActions:!0};const $=F;function q(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,i,a,r,l=[],s=!0,c=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(o=a.call(n)).done)&&(l.push(o.value),l.length!==t);s=!0);}catch(e){c=!0,i=e}finally{try{if(!s&&null!=n.return&&(r=n.return(),Object(r)!==r))return}finally{if(c)throw i}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return W(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return W(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function W(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var B=[{key:0,text:s.I18n.instance.t("console:manage.features.organizationDiscovery.advancedSearch.form.dropdown.filterAttributeOptions.organizationName"),value:"organizationName"}],J=function(e){var t,n,s,b=e["data-componentid"],S=(0,g.$)().t,D=(0,f.I0)(),E=(0,f.v9)((function(e){var t,n;return null==e||null===(t=e.config)||void 0===t||null===(n=t.ui)||void 0===n?void 0:n.features})),_=(0,f.v9)((function(e){var t;return null==e||null===(t=e.auth)||void 0===t?void 0:t.allowedScopes})),N=(0,m.useMemo)((function(){var e,t;return!(0,a.hasRequiredScopes)(null==E?void 0:E.organizationDiscovery,null==E||null===(e=E.organizationDiscovery)||void 0===e||null===(t=e.scopes)||void 0===t?void 0:t.update,_)}),[E,_]),z=q((0,m.useState)(""),2),T=z[0],C=z[1],w=q((0,m.useState)(B[0]),2),P=w[0],j=w[1],L=q((0,m.useState)(O.ru.DEFAULT_RESOURCE_LIST_ITEM_LIMIT),2),Z=L[0],G=L[1],k=q((0,m.useState)(0),2),V=k[0],U=k[1],x=q((0,m.useState)(!1),2),Y=x[0],Q=x[1],F=O.lD.getInstance(),W=(0,m.useMemo)((function(){return T}),[T]),J=M(),K=J.data,H=J.error,X=J.isLoading,ee=J.mutate,te=(0,R.Z)(!0,W,V,Z),ne=te.data,oe=te.error,ie=te.isLoading,ae=K.isOrganizationDiscoveryEnabled;(0,m.useEffect)((function(){var e;H&&404!==(null===(e=H.response)||void 0===e?void 0:e.status)&&D((0,l.V_)({description:S("console:manage.features.organizationDiscovery.notifications.getEmailDomainDiscovery.error.description"),level:r.QU.ERROR,message:S("console:manage.features.organizationDiscovery.notifications.getEmailDomainDiscovery.error.message")}))}),[H]),(0,m.useEffect)((function(){oe&&D((0,l.V_)({description:S("console:manage.features.organizationDiscovery.notifications.getOrganizationListWithDiscovery.error.description"),level:r.QU.ERROR,message:S("console:manage.features.organizationDiscovery.notifications.getOrganizationListWithDiscovery.error.message")}))}),[oe]);var re,le=(0,m.useCallback)((function(e){C(e)}),[C]),se=(0,m.useCallback)((function(){Q(!Y),C("")}),[C,Y]),ce=function(e,t){if(!0===t.checked){var n={properties:[]};return n.properties.push({key:"emailDomain.enable",value:!0}),void I(n).then((function(){D((0,l.V_)({description:S("console:manage.features.organizationDiscovery.notifications.enableEmailDomainDiscovery.success.description"),level:r.QU.SUCCESS,message:S("console:manage.features.organizationDiscovery.notifications.enableEmailDomainDiscovery.success.message")})),ee()})).catch((function(){D((0,l.V_)({description:S("console:manage.features.organizationDiscovery.notifications.enableEmailDomainDiscovery.error.description"),level:r.QU.ERROR,message:S("console:manage.features.organizationDiscovery.notifications.enableEmailDomainDiscovery.error.message")}))}))}A().then((function(){D((0,l.V_)({description:S("console:manage.features.organizationDiscovery.notifications.disableEmailDomainDiscovery.success.description"),level:r.QU.SUCCESS,message:S("console:manage.features.organizationDiscovery.notifications.disableEmailDomainDiscovery.success.message")})),ee()})).catch((function(){D((0,l.V_)({description:S("console:manage.features.organizationDiscovery.notifications.disableEmailDomainDiscovery.error.description"),level:r.QU.ERROR,message:S("console:manage.features.organizationDiscovery.notifications.disableEmailDomainDiscovery.error.message")}))}))};return m.createElement(c.Xg,{action:!X&&ae&&!(!T&&((0,d.Z)(ne)||(null==ne?void 0:ne.totalResults)<=0))&&m.createElement(i.di,{when:h.T.ORGANIZATION_DISCOVERY_WRITE},m.createElement(c.KM,{disabled:ie,loading:ie,onClick:function(){F.publish("organization-click-assign-email-domain-button"),O.m8.push(O.$x.getPaths().get("ASSIGN_ORGANIZATION_DISCOVERY_DOMAINS"))},"data-componentid":"".concat(b,"-list-layout-assign-button")},m.createElement(v.Z,{name:"add"}),S("console:manage.features.organizationDiscovery.emailDomains.actions.assign"))),pageTitle:S("console:manage.pages.emailDomainDiscovery.title"),title:S("console:manage.pages.emailDomainDiscovery.title"),description:S("console:manage.pages.emailDomainDiscovery.subTitle"),"data-componentid":"".concat(b,"-page-layout"),backButton:{"data-testid":"".concat(b,"-page-back-button"),onClick:function(){O.m8.push(O.$x.getPaths().get("LOGIN_AND_REGISTRATION"))},text:S("console:manage.features.governanceConnectors.goBackLoginAndRegistration")}},m.createElement(p.Z,{label:S("console:manage.features.organizationDiscovery.emailDomains.actions.enable"),toggle:!0,onChange:ce,checked:ae,"data-testId":"".concat(b,"-enable-toggle"),readOnly:N}),m.createElement(y.Z,{hidden:!0}),m.createElement(o.Z,{severity:"info"},S("console:manage.features.organizationDiscovery.message")),m.createElement(y.Z,{hidden:!0}),ae&&m.createElement(c.PS,{advancedSearch:m.createElement(O.nC,{onFilter:le,filterAttributeOptions:[{key:0,text:S("console:manage.features.organizationDiscovery.advancedSearch.form.dropdown.filterAttributeOptions.organizationName"),value:"organizationName"}],filterAttributePlaceholder:S("console:manage.features.organizationDiscovery.advancedSearch.form.inputs.filterAttribute.placeholder"),filterConditionsPlaceholder:S("console:manage.features.organizationDiscovery.advancedSearch.form.inputs.filterCondition.placeholder"),filterValuePlaceholder:S("console:manage.features.organizationDiscovery.advancedSearch.form.inputs.filterValue.placeholder"),placeholder:S("console:manage.features.organizationDiscovery.advancedSearch.placeholder"),defaultSearchAttribute:"organizationName",defaultSearchOperator:"co",triggerClearQuery:Y,"data-componentid":"".concat(b,"-list-advanced-search")}),currentListSize:null==ne||null===(t=ne.organizations)||void 0===t?void 0:t.length,listItemLimit:Z,onItemsPerPageDropdownChange:function(e,t){G(t.value)},onPageChange:function(e,t){var n=(t.activePage-1)*Z;U(n)},onSortStrategyChange:function(e,t){j((0,u.Z)(B,(function(e){return t.value===e.value})))},showTopActionPanel:ie||!(!T&&(null==ne||null===(n=ne.organizations)||void 0===n?void 0:n.length)<=0),sortOptions:B,sortStrategy:P,totalPages:10,totalListSize:null==ne||null===(s=ne.organizations)||void 0===s?void 0:s.length,isLoading:ie,paginationOptions:{disableNextButton:(re=ne,!((null==re?void 0:re.startIndex)+(null==re?void 0:re.count)!==(null==re?void 0:re.totalResults)+1))},"data-componentid":"".concat(b,"-list-layout"),showPagination:!0},m.createElement($,{list:ne,onEmptyListPlaceholderActionClick:function(){O.m8.push(O.$x.getPaths().get("ASSIGN_ORGANIZATION_DISCOVERY_DOMAINS"))},onSearchQueryClear:se,searchQuery:T,"data-componentid":"organization-list-with-discovery"})))};J.defaultProps={"data-componentid":"organization-discovery-domains-page"};const K=J}}]);