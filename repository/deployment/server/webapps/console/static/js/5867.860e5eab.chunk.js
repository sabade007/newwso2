"use strict";(self.webpackChunk_wso2is_console=self.webpackChunk_wso2is_console||[]).push([[5867],{5867:(e,t,n)=>{n.r(t),n.d(t,{Saml2ConfigurationPage:()=>U,default:()=>P});var a,o=n(57477),i=n(83374),r=n(14603),l=n(90268),s=n(83831),c=n(59206),u=n(81816),d=n(53337),m=n(52983),f=n(9202),g=n(54221),E=n(94635),p=n(28141),C=n(75917),v=n(16184),_=n(30640),R=n(93967),h=n(85850),y=n(43991),S=n(65790);function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function O(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,A(a.key),a)}}function L(e,t,n){return t&&O(e.prototype,t),n&&O(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function w(e,t,n){return(t=A(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A(e){var t=function(e,t){if("object"!==b(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!==b(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===b(t)?t:String(t)}var I=L((function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}));a=I,w(I,"SAML2_CONFIG_FETCH_ERROR_CODE","SMC-00001"),w(I,"SAML2_CONFIG_FETCH_INVALID_STATUS_CODE_ERROR_CODE","SMC-00002"),w(I,"SAML2_CONFIG_UPDATE_ERROR_CODE","SMC-00003"),w(I,"SAML2_CONFIG_FIELD_MIN_LENGTH",0),w(I,"ErrorMessages",{SAML2_CONFIG_FETCH_ERROR_CODE:new S.O(a.SAML2_CONFIG_FETCH_ERROR_CODE,"An error occurred while fetching the saml2 configurations.","Error while fetching the saml2 configurations",null),SAML2_CONFIG_FETCH_INVALID_STATUS_CODE_ERROR_CODE:new S.O(a.SAML2_CONFIG_FETCH_INVALID_STATUS_CODE_ERROR_CODE,"Received an invalid status code while fetching the saml2 configurations.","Invalid Status Code while fetching the saml2 configurations",null),SAML2_CONFIG_UPDATE_ERROR_CODE:new S.O(a.SAML2_CONFIG_UPDATE_ERROR_CODE,"An error occurred while updating the saml2 configurations.","Error while updating the saml2 configurations",null)});var M=R.AsgardeoSPAClient.getInstance().httpRequest.bind(R.AsgardeoSPAClient.getInstance());function N(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,o,i,r,l=[],s=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(a=i.call(n)).done)&&(l.push(a.value),l.length!==t);s=!0);}catch(e){c=!0,o=e}finally{try{if(!s&&null!=n.return&&(r=n.return(),Object(r)!==r))return}finally{if(c)throw o}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return T(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return T(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var U=function(e){var t,n,a,R,S=e["data-componentid"],b=(0,m.useRef)(null),O=(0,m.useRef)(null),L=(0,m.useRef)(),w=(0,g.v9)((function(e){var t,n,a;return null==e||null===(t=e.config)||void 0===t||null===(n=t.ui)||void 0===n||null===(a=n.features)||void 0===a?void 0:a.governanceConnectors})).deprecatedFeaturesToShow.find((function(e){return"saml2"===(null==e?void 0:e.name)})),A=(0,g.v9)((function(e){return e.config.ui.features})),T=(0,g.v9)((function(e){var t;return null==e||null===(t=e.auth)||void 0===t?void 0:t.allowedScopes})),U=(0,m.useMemo)((function(){var e,t;return!(0,i.hasRequiredScopes)(null==A?void 0:A.governanceConnectors,null==A||null===(e=A.governanceConnectors)||void 0===e||null===(t=e.scopes)||void 0===t?void 0:t.update,T)}),[A,T]),P=(0,g.I0)(),D=(0,f.$)().t,F=N((0,m.useState)(!1),2),V=F[0],Z=F[1],G=N((0,m.useState)(void 0),2),k=G[0],j=G[1],H=N((0,m.useState)(""),2),x=H[0],q=H[1],Q=N((0,m.useState)(!1),2),$=Q[0],z=Q[1],B=(t={headers:{Accept:"application/json","Content-Type":"application/json"},method:r.f2.GET,url:h.De.getServiceResourceEndpoints().saml2Configurations},n=(0,y.Z)(t),a=n.data,R=n.error,{data:a,error:R,isLoading:!R&&!a,isValidating:n.isValidating,mutate:n.mutate}),J=B.data,K=B.isLoading,W=B.mutate,X=B.error;(0,m.useEffect)((function(){var e,t;J instanceof o.u||X?Y():J&&(j({enableMetadataSigning:null!==(e=J.enableMetadataSigning)&&void 0!==e&&e,metadataValidityPeriod:null!==(t=J.metadataValidityPeriod)&&void 0!==t?t:0}),q(J.destinationURLs.length>0?J.destinationURLs.toString():""))}),[J]);var Y=function(){P((0,l.V_)({description:D("console:saml2Config.notifications.getConfiguration.error.description"),level:r.QU.ERROR,message:D("console:saml2Config.notifications.getConfiguration.error.message")}))};return m.createElement(u.Xg,{title:D("console:saml2Config.title"),pageTitle:D("console:saml2Config.title"),description:D("console:saml2Config.description"),backButton:{onClick:function(){_.m8.push(_.$x.getPaths().get("LOGIN_AND_REGISTRATION"))},text:D("console:manage.features.governanceConnectors.goBackLoginAndRegistration")},bottomMargin:!1,contentTopMargin:!1,"data-componentid":"".concat(S,"-form-layout"),pageHeaderMaxWidth:!0},m.createElement(v.R,{innerRef:b},m.createElement(E.Z,{className:"mt-2"},m.createElement(E.Z.Row,{columns:1},m.createElement(E.Z.Column,{width:16},m.createElement(u.pJ,{className:"form-wrapper",padded:"very"},K?m.createElement(E.Z.Row,{columns:1},m.createElement("div",null,m.createElement("div",{className:"ui card fluid settings-card","data-testid":"".concat(S,"-loading-card")},m.createElement("div",{className:"content no-padding"},m.createElement("div",{className:"header-section"},m.createElement(p.Z,null,m.createElement(p.Z.Header,null,m.createElement(p.Z.Line,{length:"medium"}),m.createElement(p.Z.Line,{length:"full"}))),m.createElement(C.Z,{hidden:!0}))),m.createElement("div",{className:"content extra extra-content"},m.createElement("div",{className:"action-button"},m.createElement(p.Z,null,m.createElement(p.Z.Line,{length:"very short"}))))),m.createElement(C.Z,{hidden:!0}))):m.createElement(m.Fragment,null,m.createElement(c.l0,{id:"saml2-config-form",uncontrolledForm:!0,onSubmit:function(e){Z(!0),function(e){var t={data:e,headers:{Accept:"application/json","Content-Type":"application/json"},method:r.f2.PATCH,url:h.De.getServiceResourceEndpoints().saml2Configurations};return M(t).then((function(e){if(200!==e.status&&201!==e.status)throw new o.u(I.ErrorMessages.SAML2_CONFIG_FETCH_INVALID_STATUS_CODE_ERROR_CODE.getErrorMessage(),null,e.status,e.request,e,e.config);return Promise.resolve(e.data)})).catch((function(e){var t,n,a=I.ErrorMessages.SAML2_CONFIG_UPDATE_ERROR_CODE.getErrorMessage();throw new o.u(a,e.stack,null===(t=e.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.code,e.request,e.response,e.config)}))}({destinationURLs:null==x?void 0:x.split(","),enableMetadataSigning:e.enableMetadataSigning,metadataValidityPeriod:e.metadataValidityPeriod}).then((function(){P((0,l.V_)({description:D("console:saml2Config.notifications.updateConfiguration.success.description"),level:r.QU.SUCCESS,message:D("console:saml2Config.notifications.updateConfiguration.success.message")}))})).catch((function(){P((0,l.V_)({description:D("console:saml2Config.notifications.updateConfiguration.error.description"),level:r.QU.ERROR,message:D("console:saml2Config.notifications.updateConfiguration.error.message")}))})).finally((function(){Z(!1),W()}))},initialValues:k,enableReinitialize:!0,ref:O,validate:function(e){var t={destinationURLs:void 0,metadataValidityPeriod:void 0};return null!=e&&e.metadataValidityPeriod&&(!d.I.isInteger(e.metadataValidityPeriod)||e.metadataValidityPeriod<0)&&(t.metadataValidityPeriod=D("console:saml2Config.form.validation.metadataValidityPeriod")),null!=e&&e.destinationURLs&&e.destinationURLs.length>0&&(t.destinationURLs=D("console:saml2Config.form.validation.destinationURLs")),t},autoComplete:"new-password"},m.createElement(E.Z,null,m.createElement(E.Z.Row,{columns:1,key:3},m.createElement(E.Z.Column,{width:10},m.createElement(c.gN.Checkbox,{ariaLabel:D("console:saml2Config.form.enableMetadataSigning.label"),name:"enableMetadataSigning",label:D("console:saml2Config.form.enableMetadataSigning.label"),readOnly:U,"data-componentid":"".concat(S,"-\n                                                                    enable-metadata-signing"),toggle:!0}))),m.createElement(E.Z.Row,{columns:1,key:1},m.createElement(E.Z.Column,{width:10},m.createElement(c.gN.Input,{min:I.SAML2_CONFIG_FIELD_MIN_LENGTH,ariaLabel:D("console:saml2Config.form.metadataValidityPeriod.label"),inputType:"number",name:"metadataValidityPeriod",label:D("console:saml2Config.form.metadataValidityPeriod.label"),hint:D("console:saml2Config.form.metadataValidityPeriod.hint"),value:null==k?void 0:k.metadataValidityPeriod,readOnly:U,minLength:I.SAML2_CONFIG_FIELD_MIN_LENGTH,maxLength:null,"data-componentid":"".concat(S,"-metadata-validity-period"),autoComplete:"new-password"}))),(null==w?void 0:w.deprecatedProperties.includes("destinationURLs.pattern"))&&m.createElement(E.Z.Row,{columns:1,key:2},m.createElement(E.Z.Column,{width:10,key:"destinationUrl"},m.createElement("div",{ref:L}),m.createElement(u.wE,{urlState:x,setURLState:function(e){var t,n=null==e||null===(t=e.split(","))||void 0===t?void 0:t.toString();q(n)},labelName:D("console:saml2Config.form.destinationUrl.label"),hint:D("console:saml2Config.form.destinationUrl.hint"),required:!0,showError:$,setShowError:z,validationErrorMsg:D("console:saml2Config.form.validation.destinationURLs"),validation:function(e){return!!s.URLUtils.isURLValid(e,!0)||(z(!0),!1)},readOnly:U,addURLTooltip:D("common:addURL"),duplicateURLErrorMessage:D("common:duplicateURLError"),"data-componentid":"".concat(S,"\n                                                                            -destination-url-input"),showPredictions:!1}))))),!U&&m.createElement(m.Fragment,null,m.createElement(C.Z,{hidden:!0}),m.createElement(E.Z.Row,{columns:1,className:"mt-6"},m.createElement(E.Z.Column,{width:10},m.createElement(u.KM,{size:"small",loading:V,onClick:function(){var e;null==O||null===(e=O.current)||void 0===e||e.triggerSubmit()},ariaLabel:"saml2 configuration form update button","data-componentid":"".concat(S,"-update-button")},D("common:update"))))))))))))};U.defaultProps={"data-componentid":"saml2-configuration-settings-page"};const P=U}}]);