"use strict";(self.webpackChunk_wso2is_console=self.webpackChunk_wso2is_console||[]).push([[84464,4196,81415,58081,52224,79505,17589,49905,5971],{4196:(e,n,t)=>{t.r(n),t.d(n,{addNewTenant:()=>a.addNewTenant,checkDuplicateTenants:()=>a.checkDuplicateTenants,getAssociatedTenants:()=>a.getAssociatedTenants,getDomainQueryParam:()=>a.getDomainQueryParam,makeTenantDefault:()=>a.makeTenantDefault});var a=t(26419)},84464:(e,n,t)=>{t.r(n),t.d(n,{AddTenantWizard:()=>_});var a=t(14603),r=t(90268),i=t(13318),o=t(81816),s=t(87692),l=t(52983),c=t(9202),u=t(54221),d=t(21921),m=t(94635),f=t(27696),T=t(4196),g=t(17589),E=t(81415);function N(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var a,r,i,o,s=[],l=!0,c=!1;try{if(i=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;l=!1}else for(;!(l=(a=i.call(t)).done)&&(s.push(a.value),s.length!==n);l=!0);}catch(e){c=!0,r=e}finally{try{if(!l&&null!=t.return&&(o=t.return(),Object(o)!==o))return}finally{if(c)throw r}}return s}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return p(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return p(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}var _=function(e){var n=e.openModal,t=e.onCloseHandler,p=e["data-testid"],_=(0,u.I0)(),h=(0,c.$)().t,A=N((0,l.useState)(0),1)[0],v=N((0,l.useState)(!1),2),b=v[0],y=v[1],M=N((0,l.useState)(!1),2),S=M[0],C=M[1],R=N((0,l.useState)(!1),2),w=R[0],L=R[1],O=N((0,l.useState)(),2),I=O[0],x=O[1],F=N((0,i.cC)(),2),D=F[0],z=F[1],U=N((0,l.useState)(),2),k=U[0],H=U[1],P=N((0,o.IK)(),3),j=P[0],G=P[1],Z=P[2],Q=f.lD.getInstance();(0,l.useEffect)((function(){k&&D&&W()}),[k,D]);var K,W=function(){L(!0),x(h("extensions:manage.features.tenant.wizards.addTenant.forms.loaderMessages.duplicateCheck")),(0,T.checkDuplicateTenants)(null==k?void 0:k.tenantName).then((function(e){L(!1),200==e.status&&(y(!0),G({description:h("extensions:manage.features.tenant.wizards.addTenant.forms.fields.tenantName.validations.duplicate",{tenantName:k.tenantName}),level:a.QU.ERROR,message:h("extensions:manage.features.tenant.notifications.addTenant.genericError.message")}))})).catch((function(e){404==e.response.status?$(k.tenantName):(L(!1),G({description:h("extensions:manage.features.tenant.notifications.addTenant.genericError.description"),level:a.QU.ERROR,message:h("extensions:manage.features.tenant.notifications.addTenant.genericError.message")}))}))},X=[{content:l.createElement(E.AddTenantWizardForm,{triggerSubmission:function(e){K=e},setSubmissionValue:H,"data-testid":"".concat(p,"-form"),tenantDuplicate:b,setTenantDuplicate:y,isCheckingTenantExistence:S,setCheckingTenantExistence:C}),icon:"",title:h("extensions:manage.features.tenant.wizards.addTenant.heading")}],$=function(e){L(!0),x(h("extensions:manage.features.tenant.wizards.addTenant.forms.loaderMessages.tenantCreate")),(0,T.addNewTenant)(e).then((function(n){201===n.status&&(Q.publish("create-new-organization"),_((0,r.V_)({description:h("extensions:manage.features.tenant.notifications.addTenant.success.description",{tenantName:e}),level:a.QU.SUCCESS,message:h("extensions:manage.features.tenant.notifications.addTenant.success.message")})),x(h("extensions:manage.features.tenant.wizards.addTenant.forms.loaderMessages.tenantSwitch")),(0,s.Z)((function(){L(!1),t(),(0,g.handleTenantSwitch)(e)}),5e3))})).catch((function(e){var n,t;L(!1),null!==(n=e.response.data)&&void 0!==n&&n.code&&["TM-10011","TM-10004","TM-10008","TM-10005"].includes(e.response.data.code)?G({description:h("extensions:manage.features.tenant.notifications.missingClaims.description"),level:a.QU.ERROR,message:h("extensions:manage.features.tenant.notifications.missingClaims.message")}):null!==(t=e.response.data)&&void 0!==t&&t.code&&["TM-10013"].includes(e.response.data.code)?G({description:h("extensions:manage.features.tenant.notifications.addTenant.limitReachError.description"),level:a.QU.ERROR,message:h("extensions:manage.features.tenant.notifications.addTenant.limitReachError.message")}):G({description:h("extensions:manage.features.tenant.notifications.addTenant.genericError.description"),level:a.QU.ERROR,message:h("extensions:manage.features.tenant.notifications.addTenant.genericError.message")})}))};return l.createElement(d.Z,{open:n,className:"wizard add-tenant-wizard",dimmer:"blurring",size:"tiny",onClose:t,closeOnDimmerClick:!1,closeOnEscape:!1,"data-testid":p},l.createElement(d.Z.Header,{className:"wizard-header add-tenant-wizard-header"},h("extensions:manage.features.tenant.wizards.addTenant.heading")),l.createElement(d.Z.Content,{className:"content-container",scrolling:!0},j&&Z,X[A].content,w&&l.createElement(o.pO,{text:I})),l.createElement(d.Z.Actions,null,l.createElement(m.Z,null,l.createElement(m.Z.Row,{column:1},l.createElement(m.Z.Column,{mobile:8,tablet:8,computer:8},l.createElement(o.Qj,{floated:"left",onClick:function(){t()},disabled:w,"data-testid":"".concat(p,"-cancel-button")},h("cancel"))),l.createElement(m.Z.Column,{mobile:8,tablet:8,computer:8},l.createElement(o.KM,{floated:"right",onClick:function(){K(),z()},loading:w,"data-testid":"".concat(p,"-create-button"),disabled:w||S},h("common:create")))))))};_.defaultProps={"data-testid":"tenant-add-wizard"}},58081:(e,n,t)=>{t.r(n),t.d(n,{AddTenantWizardForm:()=>p});var a=t(59206),r=t(81816),i=t(68079),o=t(36382),s=t(67127),l=t(52983),c=t(9202),u=t(39990),d=t(54221),m=t(75917),f=t(48684),T=t(4196),g=t(52224);function E(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var a,r,i,o,s=[],l=!0,c=!1;try{if(i=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;l=!1}else for(;!(l=(a=i.call(t)).done)&&(s.push(a.value),s.length!==n);l=!0);}catch(e){c=!0,r=e}finally{try{if(!l&&null!=t.return&&(o=t.return(),Object(o)!==o))return}finally{if(c)throw r}}return s}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return N(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return N(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}var p=function(e){var n=e.setSubmissionValue,t=e.triggerSubmission,N=e.tenantDuplicate,p=e.setTenantDuplicate,_=e.isCheckingTenantExistence,h=e.setCheckingTenantExistence,A=e["data-testid"],v=E((0,l.useState)(g.TenantManagementConstants.TENANT_URI_PLACEHOLDER),2),b=v[0],y=v[1],M=E((0,l.useState)(!1),2),S=M[0],C=M[1],R=(0,d.v9)((function(e){var n,t,a;return null===(n=e.config)||void 0===n||null===(t=n.deployment)||void 0===t||null===(a=t.extensions)||void 0===a?void 0:a.regionQualifiedConsoleUrl})),w=(0,d.v9)((function(e){var n,t;return null===(n=e.config)||void 0===n||null===(t=n.deployment)||void 0===t?void 0:t.tenantPrefix})),L=(0,c.$)().t,O=function(e){var n=!!e&&!!e.match(g.TenantManagementConstants.FORM_FIELD_CONSTRAINTS.TENANT_NAME_PATTERN);return n||(h(!1),I.cancel()),n},I=(0,l.useCallback)((0,o.Z)((function(e){(0,T.checkDuplicateTenants)(e).then((function(e){200==e.status&&p(!0),h(!1)})).catch((function(e){404==e.response.status&&p(!1),h(!1)}))}),1e3),[]);return l.createElement(l.Fragment,null,l.createElement(a.l0,{id:"add-tenant-wizard-form",onSubmit:function(e){n(e)},triggerSubmit:function(e){return t(e)},uncontrolledForm:!1,validate:(N||b===g.TenantManagementConstants.TENANT_URI_PLACEHOLDER)&&function(e){var n={tenantName:void 0};return N?n.tenantName=L("extensions:manage.features.tenant.wizards.addTenant.forms.fields.tenantName.validations.duplicate",{tenantName:e.toString()}):e.tenantName||(n.tenantName=L("extensions:manage.features.tenant.wizards.addTenant.forms.fields.tenantName.validations.empty")),n}},l.createElement(a.gN.Input,{ariaLabel:"Tenant Name",inputType:"resource_name",name:"tenantName",label:L("extensions:manage.features.tenant.wizards.addTenant.forms.fields.tenantName.label"),placeholder:L("extensions:manage.features.tenant.wizards.addTenant.forms.fields.tenantName.placeholder"),required:!0,listen:function(e){return n=e,p(!1),void((0,s.Z)(n)?(y(g.TenantManagementConstants.TENANT_URI_PLACEHOLDER),C(!1)):(y(n),C(O(n))));var n},maxLength:g.TenantManagementConstants.FORM_FIELD_CONSTRAINTS.TENANT_NAME_MAX_LENGTH,minLength:g.TenantManagementConstants.FORM_FIELD_CONSTRAINTS.TENANT_NAME_MIN_LENGTH,validation:function(e){return O(e.toString())?N?L("extensions:manage.features.tenant.wizards.addTenant.forms.fields.tenantName.validations.duplicate",{tenantName:e.toString()}):(h(!0),void I(e.toString())):e.length<g.TenantManagementConstants.FORM_FIELD_CONSTRAINTS.TENANT_NAME_MIN_LENGTH?l.createElement(r.v0,{error:!0},l.createElement(u.c,{i18nKey:"extensions:manage.features.tenant.wizards.addTenant.forms.fields.tenantName.validations.invalidLength",minLength:g.TenantManagementConstants.FORM_FIELD_CONSTRAINTS.TENANT_NAME_MIN_LENGTH,maxLength:g.TenantManagementConstants.FORM_FIELD_CONSTRAINTS.TENANT_NAME_MAX_LENGTH},"The name you entered is less than ",{minLength:g.TenantManagementConstants.FORM_FIELD_CONSTRAINTS.TENANT_NAME_MIN_LENGTH}," characters. It must",l.createElement("ul",null,l.createElement("li",null,"be unique"),l.createElement("li",null,l.createElement(l.Fragment,null,"contain more than"," ",{minLength:g.TenantManagementConstants.FORM_FIELD_CONSTRAINTS.TENANT_NAME_MIN_LENGTH},"and less than"," ",{maxLength:g.TenantManagementConstants.FORM_FIELD_CONSTRAINTS.TENANT_NAME_MAX_LENGTH},"characters")),l.createElement("li",null,"consist of only lowercase alphanumeric characters"),l.createElement("li",null,"begin with an alphabetic character")))):l.createElement(r.v0,{error:!0},l.createElement(u.c,{i18nKey:"extensions:manage.features.tenant.wizards.addTenant.forms.fields.tenantName.validations.invalid",minLength:g.TenantManagementConstants.FORM_FIELD_CONSTRAINTS.TENANT_NAME_MIN_LENGTH,maxLength:g.TenantManagementConstants.FORM_FIELD_CONSTRAINTS.TENANT_NAME_MAX_LENGTH},"Please enter a valid format for organization name. It must",l.createElement("ul",null,l.createElement("li",null,"be unique"),l.createElement("li",null,l.createElement(l.Fragment,null,"contain more than"," ",{minLength:g.TenantManagementConstants.FORM_FIELD_CONSTRAINTS.TENANT_NAME_MIN_LENGTH},"and less than"," ",{maxLength:g.TenantManagementConstants.FORM_FIELD_CONSTRAINTS.TENANT_NAME_MAX_LENGTH},"characters")),l.createElement("li",null,"consist of only lowercase alphanumeric characters"),l.createElement("li",null,"begin with an alphabetic character"))))},width:16,"data-testid":"".concat(A,"-type-input")})),l.createElement(m.Z,{className:"mt-1",hidden:!0}),_?l.createElement("span",{className:"display-flex"},"".concat(null!=R?R:"https://console.asgardeo.io","/").concat(null!=w?w:"t","/"),l.createElement(f.Z,{basic:!0,size:"mini"},l.createElement(i.p,{className:"p-0",size:"mini",active:!0,inline:!0,"data-testid":"".concat(A,"-name-loader")}))):l.createElement("span",null,"".concat(null!=R?R:"https://console.asgardeo.io","/").concat(null!=w?w:"t","/"),l.createElement("span",{className:"".concat(b!==g.TenantManagementConstants.TENANT_URI_PLACEHOLDER?S&&!N?"valid-tenant placeholder-uri-bold":"invalid-tenant placeholder-uri-bold":b==g.TenantManagementConstants.TENANT_URI_PLACEHOLDER?S&&!N?"valid-tenant placeholder-uri-bold":"placeholder-uri":void 0)},b,l.createElement(r.kW,{icon:"info circle",popup:!0},L("extensions:manage.features.tenant.wizards.addTenant.tooltips.message")))),l.createElement(m.Z,{className:"mt-1",hidden:!0}),l.createElement(r.v0,{type:"info",content:l.createElement(u.c,{i18nKey:"extensions:manage.features.tenant.wizards.addTenant.forms.messages.info"},"Think of a good, unique organization name for your new Asgardeo workspace because you\xa0won\u2019t be able to change it later!")}))};p.defaultProps={"data-testid":"add-tenant-wizard-form"}},81415:(e,n,t)=>{t.r(n),t.d(n,{AddTenantWizardForm:()=>a.AddTenantWizardForm});var a=t(58081)},52224:(e,n,t)=>{t.r(n),t.d(n,{TenantManagementConstants:()=>a.TenantManagementConstants});var a=t(79505)},79505:(e,n,t)=>{function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function r(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,s(a.key),a)}}function i(e,n,t){return n&&r(e.prototype,n),t&&r(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function o(e,n,t){return(n=s(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e){var n=function(e,n){if("object"!==a(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,n||"default");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"===a(n)?n:String(n)}t.r(n),t.d(n,{TenantManagementConstants:()=>l});var l=i((function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}));o(l,"TENANT_URI_PLACEHOLDER","myorg"),o(l,"EU_PROD_CONSOLE_FALLBACK_URL","https://console.eu.asgardeo.io"),o(l,"US_PROD_CONSOLE_FALLBACK_URL","https://console.asgardeo.io"),o(l,"FORM_FIELD_CONSTRAINTS",{TENANT_NAME_ALPHANUMERIC:new RegExp("^[a-z0-9]+$"),TENANT_NAME_FIRST_ALPHABET:new RegExp("^[a-z]"),TENANT_NAME_MAX_LENGTH:30,TENANT_NAME_MIN_LENGTH:4,TENANT_NAME_PATTERN:new RegExp("^[a-z][a-z0-9]{3,29}$")})},49905:(e,n,t)=>{t.r(n),t.d(n,{getDeploymentRegion:()=>a});var a=function(){return window.AppUtils.getConfig().extensions.deploymentRegion}},17589:(e,n,t)=>{t.r(n),t.d(n,{getDeploymentRegion:()=>a.getDeploymentRegion,handleTenantSwitch:()=>r.handleTenantSwitch});var a=t(49905),r=t(5971)},5971:(e,n,t)=>{t.r(n),t.d(n,{handleTenantSwitch:()=>r});var a=t(83831),r=function(e){var n=window.AppUtils.getConfig().clientOrigin+"/t/"+e+"/"+window.AppUtils.getConfig().appBase+"?disable_silent_sign_in=true&switch_tenant=true";a.SessionStorageUtils.clearItemFromSessionStorage("auth_callback_url_console"),window.location.replace(n)}}}]);