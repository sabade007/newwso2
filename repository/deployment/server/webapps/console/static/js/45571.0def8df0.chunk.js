"use strict";(self.webpackChunk_wso2is_console=self.webpackChunk_wso2is_console||[]).push([[45571],{45571:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Ee});var o=n(7955),r=n(83374),a=n(14603),i=n(90268),l=n(81816),c=n(52983),u=n(9202),s=n(54221),m=n(2653),p=n(65327),d=n(30640),f=n(93967),g=n(57477),v=n(43991);function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){E(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function E(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==b(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==b(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===b(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var T=f.AsgardeoSPAClient.getInstance().httpRequest.bind(f.AsgardeoSPAClient.getInstance()).bind(f.AsgardeoSPAClient.getInstance()),S=n(59206),A=n(94635);function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,a,i,l=[],c=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(o=a.call(n)).done)&&(l.push(o.value),l.length!==t);c=!0);}catch(e){u=!0,r=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw r}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return w(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var j=function(e){var t=e.isEmailTemplatesListLoading,n=e.selectedEmailTemplate,r=e.selectedLocale,a=e.onTemplateChanged,i=e.onSubmit,s=e.onDeleteRequested,p=e.readOnly,f=e["data-componentid"],g=(0,u.$)().t,v=(0,l.fQ)().getLink,b=O((0,c.useState)(0),2),y=b[0],h=b[1];return(0,c.useEffect)((function(){h((y+1)%100)}),[n]),t?c.createElement(l.pO,null):c.createElement(c.Fragment,null,c.createElement(S.l0,{id:"email-customization-content-form",uncontrolledForm:!0,onSubmit:i,"data-componentid":f},c.createElement(A.Z,null,c.createElement(A.Z.Row,null,c.createElement(A.Z.Column,{mobile:16,computer:8},c.createElement(S.gN.Input,{ariaLabel:"Email Subject Input",inputType:"default",name:"emailSubject",label:g("extensions:develop.emailTemplates.form.inputs.subject.label"),placeholder:g("extensions:develop.emailTemplates.form.inputs.subject.placeholder"),hint:g("extensions:develop.emailTemplates.form.inputs.subject.hint"),required:!0,value:null==n?void 0:n.subject,maxLength:255,minLength:1,"data-componentid":"".concat(f,"-email-subject"),listen:function(e){a({subject:e})},readOnly:p,key:y}))),c.createElement(A.Z.Row,null,c.createElement(A.Z.Column,{mobile:16,computer:8},c.createElement(l.X6,{as:"h6"},g("extensions:develop.emailTemplates.form.inputs.body.label")),c.createElement(l.v0,{type:"info",content:c.createElement(c.Fragment,null,g("extensions:develop.emailTemplates.form.inputs.body.hint"),c.createElement(l.eb,{link:v("develop.emailCustomization.form.emailBody.learnMore")},g("extensions:common.learnMore")))}))),c.createElement(A.Z.Row,null,c.createElement(A.Z.Column,{mobile:16,computer:16},c.createElement("div",{className:"code-editor-wrapper"},c.createElement(l.pq,{lint:!0,allowFullScreen:!0,smart:!0,controlledFullScreenMode:!1,language:"htmlmixed",sourceCode:null==n?void 0:n.body,lineWrapping:!0,onChange:function(e,t,n){a({body:e.getValue()})},height:"500px",theme:"light",translations:{copyCode:g("common:copyToClipboard"),exitFullScreen:g("common:exitFullScreen"),goFullScreen:g("common:goFullScreen")},"data-componentId":"".concat(f,"-email-body-editor"),readOnly:p})))),c.createElement(A.Z.Row,null,c.createElement(A.Z.Column,{mobile:16,computer:8},c.createElement(S.gN.Input,{ariaLabel:"Email Footer Input",inputType:"default",name:"emailFooter",label:g("extensions:develop.emailTemplates.form.inputs.footer.label"),placeholder:g("extensions:develop.emailTemplates.form.inputs.footer.placeholder"),hint:g("extensions:develop.emailTemplates.form.inputs.footer.hint"),required:!1,value:null==n?void 0:n.footer,maxLength:255,minLength:1,"data-componentid":"".concat(f,"-email-footer"),listen:function(e){a({footer:e})},readOnly:p,key:y}))))),c.createElement(o.di,{when:m.T.EMAIL_TEMPLATES_DELETE},c.createElement(l.cN,{"data-componentid":"".concat(f,"-revert-email-provider-config"),actionTitle:g("extensions:develop.emailTemplates.dangerZone.action"),header:g("extensions:develop.emailTemplates.dangerZone.heading"),subheader:g("extensions:develop.emailTemplates.dangerZone.message"),isButtonDisabled:r===d.bx.DEFAULT_FALLBACK_LANGUAGE,buttonDisableHint:g("extensions:develop.emailTemplates.dangerZone.actionDisabledHint"),onActionClick:s})))};j.defaultProps={"data-componentid":"email-customization-form"};var _=n(77209),L=n.n(_),P=n(3430),x=n(44654),F=n(27472),C=n(96627),k=n(16086);const R=function(e){var t,n,o,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:k.gy.ORG,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:x.b.DEFAULT_FALLBACK_LANGUAGE,i=(0,C.z)().organizationType===F.$B.SUBORGANIZATION?null===(t=d.h.getState())||void 0===t||null===(n=t.organization)||void 0===n||null===(o=n.organization)||void 0===o?void 0:o.id:e,l={headers:{Accept:"application/json","Content-Type":"application/json"},method:P.f2.GET,params:{locale:a,name:i,type:r},url:d.h.getState().config.endpoints.brandingPreference},c=(0,v.Z)(l,{shouldRetryOnError:!1}),u=c.data,s=c.error;return{data:u,error:s,isLoading:!s&&!u,isValidating:c.isValidating,mutate:c.mutate}};var D=n(64945),I=n(3986),U=n(83266),M=n(67192),z=n(38081);function N(e){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},N(e)}function V(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,B(o.key),o)}}function B(e){var t=function(e,t){if("object"!==N(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==N(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===N(t)?t:String(t)}var Z,G,q,Q=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,o;return t=e,o=[{key:"getTemplateBody",value:function(e,t,n,o,r){var a,i,l,c,u,s=o;if(!(null==t||null===(a=t.theme[null==t||null===(c=t.theme)||void 0===c?void 0:c.activeTheme])||void 0===a||null===(i=a.images)||void 0===i||null===(l=i.logo)||void 0===l||!l.imgURL)||(s=s.replace(/alt="{{organization.logo.altText}}"/g,"").replace(/src="{{organization.logo.img}}"/g,"")),!t)return s.replace(/{{organization.color.background}}/g,this.brandingFallBackValues.background_color).replace(/{{organization.color.primary}}/g,this.brandingFallBackValues.primary_color).replace(/{{organization.theme.background.color}}/g,this.brandingFallBackValues.light_background_color).replace(/{{organization.theme.border.color}}/g,this.brandingFallBackValues.light_border_color).replace(/{{organization.font}}/g,this.brandingFallBackValues.font_style).replace(/{{organization.font.color}}/g,this.brandingFallBackValues.font_color).replace(/{{organization.button.font.color}}/g,this.brandingFallBackValues.button_font_color).replace(/{{organization-name}}/g,e).replace(/{{organization.logo.img}}/g,this.brandingFallBackValues.light_logo_url);var m=U.t.migrateThemePreference(t,{theme:r}),p=m.organizationDetails,d=p.copyrightText,f=p.supportEmail,g=p.displayName,v=m.theme,b=v[v.activeTheme],y=v.activeTheme===M.gf.DARK?this.brandingFallBackValues.dark_logo_url:this.brandingFallBackValues.light_logo_url;return s=s.replace(/{{organization.color.background}}/g,b.colors.background.body.main).replace(/{{organization.color.primary}}/g,b.colors.primary.main).replace(/{{organization.theme.background.color}}/g,b.colors.background.surface.main?b.colors.background.surface.main:v.activeTheme===M.gf.DARK?"#111111":"#FFFFFF").replace(/{{organization.theme.border.color}}/g,b.colors.outlined.default?b.colors.outlined.default:v.activeTheme===M.gf.DARK?"#333333":"transparent").replace(/{{organization.font}}/g,b.typography.font.fontFamily).replace(/{{organization.font.color}}/g,b.colors.text.primary).replace(/{{organization.button.font.color}}/g,b.buttons.primary.base.font.color).replace(/{{organization-name}}/g,g||e).replace(/{{organization.logo.img}}/g,b.images.logo.imgURL||y).replace(/{{organization.logo.altText}}/g,b.images.logo.altText).replace(/{{organization.copyright.text}}/g,null!==(u=n&&(0,z.Z)(n.copyright))&&void 0!==u?u:d).replace(/{{organization.support.mail}}/g,f)}}],(n=null)&&V(t.prototype,n),o&&V(t,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function $(e){return $="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$(e)}function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(Object(n),!0).forEach((function(t){H(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function H(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==$(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==$(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===$(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function W(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,a,i,l=[],c=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(o=a.call(n)).done)&&(l.push(o.value),l.length!==t);c=!0);}catch(e){u=!0,r=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw r}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return X(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return X(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function X(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}Z=Q,q={background_color:"#F8F9FA",button_font_color:"#FFFFFF",copyright_text:"&#169; YYYY WSO2 LLC.",dark_background_color:"#111111",dark_border_color:"#333333",dark_logo_url:"",font_color:"#231F20",font_style:"Montserrat",light_background_color:"#FFFFFF",light_border_color:"transparent",light_logo_url:"",primary_color:"#FF7300"},(G=B(G="brandingFallBackValues"))in Z?Object.defineProperty(Z,G,{value:q,enumerable:!0,configurable:!0,writable:!0}):Z[G]=q;var J=function(e){var t=e.emailTemplate,n=e["data-componentid"],o=(0,I.Z)().customText,r=W((0,c.useState)(!1),2)[1],a=W((0,c.useState)(D.H.DEFAULT_PREFERENCE.theme),2),i=a[0],u=a[1],m=d.h.getState().auth.tenantDomain,p=(0,s.v9)((function(e){var t;return null===(t=e.config.ui.theme)||void 0===t?void 0:t.name})),f=R(m),g=f.data,v=f.isLoading,b=(0,c.useMemo)((function(){return null!=t&&t.body?Q.getTemplateBody(m,null==g?void 0:g.preference,o,null==t?void 0:t.body,i):""}),[null==t?void 0:t.body,m,null==g?void 0:g.preference,v,i]);return(0,c.useEffect)((function(){p&&U.t.getPredefinedThemePreferences(p).then((function(e){u(Y(Y({},i),e))}))}),[p]),c.createElement("div",{className:"email-template-preview","data-componentid":n},c.createElement(l.hv,{isReady:r,"data-componentid":"".concat(n,"-iframe"),className:"email-template-preview-iframe"},c.createElement("div",{dangerouslySetInnerHTML:{__html:L().sanitize(b)},"data-componentid":"".concat(n,"-iframe-body-div")})))};J.defaultProps={"data-componentid":"email-customization-preview"};var ee=n(48684),te=function(e){var t=e["data-componentid"],n=e.isSaveButtonLoading,o=e.onSaveButtonClick,r=(0,u.$)().t;return c.createElement(ee.Z,{className:"email-customization-footer",attached:"bottom",padded:!0,"data-componentid":t},c.createElement(l.KM,{size:"small",loading:n,onClick:function(e,t){o(e,t)},ariaLabel:"Email Templates form save button","data-componentid":"".concat(t,"-save-button")},r("common:save")))};te.defaultProps={"data-componentid":"email-customization-footer"};const ne=te;function oe(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,a,i,l=[],c=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(o=a.call(n)).done)&&(l.push(o.value),l.length!==t);c=!0);}catch(e){u=!0,r=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw r}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return re(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return re(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function re(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var ae=function(e){var t=e.selectedEmailTemplateId,n=e.selectedEmailTemplateDescription,o=e.selectedLocale,r=e.emailTemplatesList,a=e.onTemplateSelected,i=e.onLocaleChanged,l=e["data-componentid"],m=(0,u.$)().t,p=oe((0,c.useState)(void 0),2),d=p[0],f=p[1],g=(0,s.v9)((function(e){return e.global.supportedI18nLanguages})),v=(0,c.useMemo)((function(){return null==r?void 0:r.map((function(e){return{text:e.displayName,value:e.id}}))}),[r]);return(0,c.useEffect)((function(){if(g){var e=[];Object.keys(g).map((function(t){e.push({key:g[t].code,text:c.createElement("div",null,c.createElement("i",{className:g[t].flag+" flag"}),g[t].name,", ",g[t].code),value:g[t].code})})),f(e)}}),[g]),c.createElement(ee.Z,{className:"mb-4 p-4","data-componentid":l,padded:"very"},c.createElement(S.l0,{id:"email-customization-header-form",uncontrolledForm:!0,onSubmit:function(){}},c.createElement(A.Z,null,c.createElement(A.Z.Column,{mobile:16,computer:8},c.createElement(S.gN.Dropdown,{ariaLabel:"Email Template Dropdown",name:"selectedEmailTemplate",label:m("extensions:develop.emailTemplates.form.inputs.template.label"),options:v,required:!0,"data-componentid":"".concat(l,"-email-template-list"),hint:null!=n?n:null,placeholder:m("extensions:develop.emailTemplates.form.inputs.template.placeholder"),value:t,listen:a})),c.createElement(A.Z.Column,{mobile:16,computer:8},c.createElement(S.gN.Dropdown,{ariaLabel:"Email Template Locale Dropdown",name:"selectedEmailTemplateLocale",label:m("extensions:develop.emailTemplates.form.inputs.locale.label"),options:d,required:!0,"data-componentid":"".concat(l,"-email-template-locale"),placeholder:m("extensions:develop.emailTemplates.form.inputs.locale.placeholder"),defaultValue:o,value:o,listen:i})))))};ae.defaultProps={"data-componentid":"email-customization-header"};const ie=ae;function le(e){return le="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},le(e)}function ce(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,me(o.key),o)}}function ue(e,t,n){return t&&ce(e.prototype,t),n&&ce(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function se(e,t,n){return(t=me(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function me(e){var t=function(e,t){if("object"!==le(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==le(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===le(t)?t:String(t)}var pe=ue((function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}));function de(e){return de="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},de(e)}function fe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function ge(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?fe(Object(n),!0).forEach((function(t){ve(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ve(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==de(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==de(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===de(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function be(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,a,i,l=[],c=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(o=a.call(n)).done)&&(l.push(o.value),l.length!==t);c=!0);}catch(e){u=!0,r=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw r}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return ye(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ye(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ye(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}se(pe,"DEFAULT_CONTENT_TYPE","text/html; charset=UTF-8"),se(pe,"FEATURE_DICTIONARY",(new Map).set("EMAIL_TEMPLATES_CREATE","emailTemplates.create").set("EMAIL_TEMPLATES_UPDATE","emailTemplates.update").set("EMAIL_TEMPLATES_DELETE","emailTemplates.delete").set("EMAIL_TEMPLATES_READ","emailTemplates.read"));var he=function(e){var t,n,f,b,y=e["data-componentid"],E=be((0,c.useState)([]),2),S=E[0],A=E[1],O=be((0,c.useState)(),2),w=O[0],_=O[1],L=be((0,c.useState)(),2),P=L[0],x=L[1],F=be((0,c.useState)(d.bx.DEFAULT_FALLBACK_LANGUAGE),2),C=F[0],k=F[1],R=be((0,c.useState)(),2),D=R[0],I=R[1],U=be((0,c.useState)(),2),M=U[0],z=U[1],N=be((0,c.useState)(!1),2),V=N[0],B=N[1],Z=be((0,c.useState)(!1),2),G=Z[0],q=Z[1],Q=(0,s.v9)((function(e){return e.config.deployment.extensions.emailTemplates})),$=(0,s.v9)((function(e){var t,n;return null==e||null===(t=e.config)||void 0===t||null===(n=t.ui)||void 0===n?void 0:n.enableCustomEmailTemplates})),K=(0,s.v9)((function(e){var t,n,o;return null==e||null===(t=e.config)||void 0===t||null===(n=t.ui)||void 0===n||null===(o=n.features)||void 0===o?void 0:o.emailTemplates})),Y=(0,s.v9)((function(e){var t;return null==e||null===(t=e.auth)||void 0===t?void 0:t.allowedScopes})),H=(0,s.I0)(),W=(0,u.$)().t,X=(0,l.fQ)().getLink,ee=(0,c.useMemo)((function(){var e;return!(0,r.cr)(K,pe.FEATURE_DICTIONARY.get("EMAIL_TEMPLATES_UPDATE"))||!(0,r.hasRequiredScopes)(K,null==K||null===(e=K.scopes)||void 0===e?void 0:e.update,Y)}),[K,Y]),te=(0,c.useMemo)((function(){var e;return(0,r.cr)(K,pe.FEATURE_DICTIONARY.get("EMAIL_TEMPLATES_CREATE"))&&(0,r.hasRequiredScopes)(K,null==K||null===(e=K.scopes)||void 0===e?void 0:e.create,Y)}),[K,Y]),oe=(t={headers:{Accept:"application/json","Content-Type":"application/json"},method:a.f2.GET,url:"".concat(d.h.getState().config.endpoints.emailManagement,"/template-types")},n=(0,v.Z)(t),f=n.data,b=n.error,{data:f,error:b,isLoading:!b&&!f,isValidating:n.isValidating,mutate:n.mutate}),re=oe.data,ae=oe.isLoading,le=oe.error,ce=function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:d.bx.DEFAULT_FALLBACK_LANGUAGE).replace("-","_"),n={headers:{Accept:"application/json","Content-Type":"application/json"},method:a.f2.GET,url:d.h.getState().config.endpoints.emailManagement+"/template-types/".concat(e,"/templates/").concat(t)},o=(0,v.Z)(n,{onErrorRetry:function(e){e.response.status}}),r=o.data,i=o.error;return{data:r,error:i,isLoading:!i&&!r,isValidating:o.isValidating,mutate:o.mutate}}(w,C),ue=ce.data,se=ce.isLoading,me=ce.error,de=ce.mutate;(0,c.useEffect)((function(){var e,t,n=re?($?re:re.filter((function(e){return null==Q?void 0:Q.find((function(t){return t.id===e.id}))}))).map((function(e){var t=null==Q?void 0:Q.find((function(t){return t.id===e.id}));return ge(ge({},e),{},{description:(null==t?void 0:t.description)||"".concat(e.displayName," Template"),displayName:(null==t?void 0:t.displayName)||e.displayName})})):[];(A(n),w)||(_(null==n||null===(e=n[0])||void 0===e?void 0:e.id),x(null==n||null===(t=n[0])||void 0===t?void 0:t.description))}),[re]),(0,c.useEffect)((function(){I(ge({},ue)),q(!1),ue&&Object.keys(ue).length>0&&z(ge({},ue))}),[ue]),(0,c.useEffect)((function(){var e,t,n;le&&(le.response.data.description?H((0,i.V_)({description:null===(e=le.response)||void 0===e||null===(t=e.data)||void 0===t?void 0:t.description,level:a.QU.ERROR,message:null!==(n=le.response.data.message)&&void 0!==n?n:W("extensions:develop.emailTemplates.notifications.getEmailTemplateList.error.message")})):H((0,i.V_)({description:W("extensions:develop.emailTemplates.notifications.getEmailTemplateList.error.description"),level:a.QU.ERROR,message:W("extensions:develop.emailTemplates.notifications.getEmailTemplateList.error.message")})))}),[le]),(0,c.useEffect)((function(){if(me&&w){if(404===me.response.status){if(q(!0),te)return void B(!0);z(void 0)}var e,t,n;if(me.response.data.description)H((0,i.V_)({description:null===(e=me.response)||void 0===e||null===(t=e.data)||void 0===t?void 0:t.description,level:a.QU.ERROR,message:null!==(n=me.response.data.message)&&void 0!==n?n:W("extensions:develop.emailTemplates.notifications.getEmailTemplate.error.message")}));else H((0,i.V_)({description:W("extensions:develop.emailTemplates.notifications.getEmailTemplate.error.description"),level:a.QU.ERROR,message:W("extensions:develop.emailTemplates.notifications.getEmailTemplate.error.message")}))}}),[me]),(0,c.useEffect)((function(){var e=window.location.hash;if(e.startsWith("#templateId=")){var t,n=e.split("=")[1];_(n),x(null==S||null===(t=S.find((function(e){return e.id===n})))||void 0===t?void 0:t.description)}}),[window.location.hash]);var fe,ve=function(){var e=ge(ge({},D),{},{id:C.replace("-","_")});null!=e&&e.contentType||(e.contentType=pe.DEFAULT_CONTENT_TYPE),G?function(e,t){var n={data:h({},t),headers:{Accept:"application/json","Content-Type":"application/json"},method:a.f2.POST,url:d.h.getState().config.endpoints.emailManagement+"/template-types/".concat(e)};return T(n).then((function(e){if(200!==e.status&&201!==e.status)throw new g.u("Error occurred while creating the email template.",null,e.status,e.request,e,e.config);return Promise.resolve(e.data)})).catch((function(e){var t,n;throw new g.u("Error occurred while creating the email template.",e.stack,null===(t=e.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.code,e.request,e.response,e.config)}))}(w,e).then((function(e){H((0,i.V_)({description:W("extensions:develop.emailTemplates.notifications.updateEmailTemplate.success.description"),level:a.QU.SUCCESS,message:W("extensions:develop.emailTemplates.notifications.updateEmailTemplate.success.message")}))})).catch((function(e){var t;H((0,i.V_)({description:W("extensions:develop.emailTemplates.notifications.updateEmailTemplate.error.description"),level:a.QU.ERROR,message:null!==(t=e.message)&&void 0!==t?t:W("extensions:develop.emailTemplates.notifications.updateEmailTemplate.error.message")}))})).finally((function(){return de()})):function(e,t){var n=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:d.bx.DEFAULT_FALLBACK_LANGUAGE).replace("-","_"),o={data:h({},t),headers:{Accept:"application/json","Content-Type":"application/json"},method:a.f2.PUT,url:d.h.getState().config.endpoints.emailManagement+"/template-types/".concat(e,"/templates/").concat(n)};return T(o).then((function(e){if(200!==e.status&&201!==e.status)throw new g.u("Error occurred while updating the email template.",null,e.status,e.request,e,e.config);return Promise.resolve(e.data)})).catch((function(e){var t,n;throw new g.u("Error occurred while updating the email template.",e.stack,null===(t=e.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.code,e.request,e.response,e.config)}))}(w,e,C).then((function(e){H((0,i.V_)({description:W("extensions:develop.emailTemplates.notifications.updateEmailTemplate.success.description"),level:a.QU.SUCCESS,message:W("extensions:develop.emailTemplates.notifications.updateEmailTemplate.success.message")}))})).catch((function(e){var t;H((0,i.V_)({description:W("extensions:develop.emailTemplates.notifications.updateEmailTemplate.error.description"),level:a.QU.ERROR,message:null!==(t=e.message)&&void 0!==t?t:W("extensions:develop.emailTemplates.notifications.updateEmailTemplate.error.message")}))})).finally((function(){return de()})),q(!1)},ye=function(){(function(e,t){var n=t.replace("-","_"),o={headers:{Accept:"application/json","Content-Type":"application/json"},method:a.f2.DELETE,url:d.h.getState().config.endpoints.emailManagement+"/template-types/".concat(e,"/templates/").concat(n)};return T(o).then((function(e){if(204!==e.status)throw new g.u("Error occurred while deleting the email template.",null,e.status,e.request,e,e.config);return e})).catch((function(e){var t,n;throw new g.u("Error occurred while deleting the email template.",e.stack,null===(t=e.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.code,e.request,e.response,e.config)}))})(w,C).then((function(e){H((0,i.V_)({description:W("extensions:develop.emailTemplates.notifications.deleteEmailTemplate.success.description"),level:a.QU.SUCCESS,message:W("extensions:develop.emailTemplates.notifications.deleteEmailTemplate.success.message")}))})).catch((function(e){var t;H((0,i.V_)({description:W("extensions:develop.emailTemplates.notifications.deleteEmailTemplate.error.description"),level:a.QU.ERROR,message:null!==(t=e.message)&&void 0!==t?t:W("extensions:develop.emailTemplates.notifications.deleteEmailTemplate.error.message")}))})).finally((function(){k(d.bx.DEFAULT_FALLBACK_LANGUAGE)}))};return c.createElement(p.Z,null,c.createElement(l.Xg,{title:W("extensions:develop.emailTemplates.page.header"),pageTitle:"Email Templates",description:c.createElement(c.Fragment,null,W("extensions:develop.emailTemplates.page.description"),c.createElement(l.eb,{link:X("develop.emailCustomization.learnMore")},W("extensions:common.learnMore"))),titleTextAlign:"left",bottomMargin:!1,"data-componentid":y},c.createElement(ie,{selectedEmailTemplateId:w,selectedEmailTemplateDescription:P,selectedLocale:C,emailTemplatesList:S,onTemplateSelected:function(e){var t;q(!1),z(void 0),k(d.bx.DEFAULT_FALLBACK_LANGUAGE),_(e),x(null==S||null===(t=S.find((function(t){return t.id===e})))||void 0===t?void 0:t.description)},onLocaleChanged:function(e){z(ge({},D)),q(!1),k(e)}}),c.createElement(l.M$,{attached:"top",secondary:!1,pointing:!1,panes:(fe=[],fe.push({menuItem:W("extensions:develop.emailTemplates.tabs.preview.label"),render:function(){return c.createElement(l.M$.Pane,{className:"email-template-resource-tab-pane",attached:"bottom","data-componentid":"email-customization-template-preview"},c.createElement(J,{emailTemplate:D||M}))}}),fe.push({menuItem:W("extensions:develop.emailTemplates.tabs.content.label"),render:function(){return c.createElement(l.M$.Pane,{className:"email-template-resource-tab-pane",attached:"bottom","data-componentid":"email-customization-template-content"},c.createElement(j,{isEmailTemplatesListLoading:ae||se,selectedEmailTemplate:M,selectedLocale:C,onTemplateChanged:function(e){return function(e){I(ge(ge({},D),e))}(e)},onSubmit:ve,onDeleteRequested:ye,readOnly:ee||G&&!te}))}}),fe),onTabChange:function(){z(D)},"data-componentid":"".concat(y,"-forms")}),c.createElement(o.di,{when:m.T.EMAIL_TEMPLATES_EDIT},(!G||te)&&c.createElement(ne,{isSaveButtonLoading:ae||se,onSaveButtonClick:ve})),c.createElement(l.cV,{type:"info",open:V,primaryAction:W("common:confirm"),secondaryAction:W("common:cancel"),onSecondaryActionClick:function(){return I(void 0),z(void 0),void B(!1)},onPrimaryActionClick:function(){return I(M),void B(!1)},"data-componentid":"".concat(y,"-replicate-previous-template-confirmation-modal"),closeOnDimmerClick:!1},c.createElement(l.cV.Header,{"data-componentid":"".concat(y,"-replicate-previous-template-confirmation-modal-header")},W("extensions:develop.emailTemplates.modal.replicateContent.header")),c.createElement(l.cV.Message,{attached:!0,info:!0,"data-componentid":"".concat(y,"-replicate-previous-template-confirmation-modal-message")},W("extensions:develop.emailTemplates.modal.replicateContent.message")))))};he.defaultProps={"data-componentid":"email-customization-page"};const Ee=he}}]);