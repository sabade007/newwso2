/*! For license information please see 98250.18e957c0.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunk_wso2is_console=self.webpackChunk_wso2is_console||[]).push([[98250],{98250:(e,t,n)=>{n.r(t),n.d(t,{default:()=>X});var r=n(62334),o=n(42125),i=n(14603),a=n(90268),l=n(81816),u=n(52983),s=n(9202),c=n(54221),d=n(73949),f=n(92305),p=n(33834),m=n(65211),v=n(49238),h=n(20996),y=n(96433),g=n(83374),E=n(14157),b=n(43810),R=n(47447),O=n(10250),I=n(89101),S=n(46439),A=n(90656),w=n(33149),N=n(14525),x=n(43991),L=n(26187),P=n(42466),T=n(77965),j=n(96627),U=n(50593);function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function G(){return G=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},G.apply(this,arguments)}function C(){C=function(){return t};var e,t={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(e,t,n){e[t]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",l=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var i=t&&t.prototype instanceof y?t:y,a=Object.create(i.prototype),l=new P(r||[]);return o(a,"_invoke",{value:w(e,n,l)}),a}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}t.wrap=c;var f="suspendedStart",p="suspendedYield",m="executing",v="completed",h={};function y(){}function g(){}function E(){}var b={};s(b,a,(function(){return this}));var R=Object.getPrototypeOf,O=R&&R(R(T([])));O&&O!==n&&r.call(O,a)&&(b=O);var I=E.prototype=y.prototype=Object.create(b);function S(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function A(e,t){function n(o,i,a,l){var u=d(e[o],e,i);if("throw"!==u.type){var s=u.arg,c=s.value;return c&&"object"==_(c)&&r.call(c,"__await")?t.resolve(c.__await).then((function(e){n("next",e,a,l)}),(function(e){n("throw",e,a,l)})):t.resolve(c).then((function(e){s.value=e,a(s)}),(function(e){return n("throw",e,a,l)}))}l(u.arg)}var i;o(this,"_invoke",{value:function(e,r){function o(){return new t((function(t,o){n(e,r,t,o)}))}return i=i?i.then(o,o):o()}})}function w(t,n,r){var o=f;return function(i,a){if(o===m)throw new Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:e,done:!0}}for(r.method=i,r.arg=a;;){var l=r.delegate;if(l){var u=N(l,r);if(u){if(u===h)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===f)throw o=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=m;var s=d(t,n,r);if("normal"===s.type){if(o=r.done?v:p,s.arg===h)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o=v,r.method="throw",r.arg=s.arg)}}}function N(t,n){var r=n.method,o=t.iterator[r];if(o===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,N(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var i=d(o,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,h;var a=i.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,h):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function T(t){if(t||""===t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}throw new TypeError(_(t)+" is not iterable")}return g.prototype=E,o(I,"constructor",{value:E,configurable:!0}),o(E,"constructor",{value:g,configurable:!0}),g.displayName=s(E,u,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,E):(e.__proto__=E,s(e,u,"GeneratorFunction")),e.prototype=Object.create(I),e},t.awrap=function(e){return{__await:e}},S(A.prototype),s(A.prototype,l,(function(){return this})),t.AsyncIterator=A,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new A(c(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},S(I),s(I,u,"Generator"),s(I,a,(function(){return this})),s(I,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=T,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return l.type="throw",l.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],l=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),L(n),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;L(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:T(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),h}},t}function k(e,t,n,r,o,i,a){try{var l=e[i](a),u=l.value}catch(s){return void n(s)}l.done?t(u):Promise.resolve(u).then(r,o)}function Z(e){return function(e){if(Array.isArray(e))return z(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||$(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,l=[],u=!0,s=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);u=!0);}catch(e){s=!0,o=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw o}}return l}}(e,t)||$(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function $(e,t){if(e){if("string"==typeof e)return z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?z(e,t):void 0}}function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var V=function(e){var t,n,r,d,f,p,m,h=e.isReadOnly,y=e.role,g=e.onRoleUpdate,E=e.tabIndex,b=e["data-componentid"],R=(0,s.$)().t,_=(0,c.I0)(),$=(0,j.z)().isSubOrganization,z=M((0,u.useState)(!1),2),V=z[0],F=z[1],H=M((0,u.useState)(void 0),2),B=H[0],Y=H[1],Q=M((0,u.useState)([]),2),W=Q[0],D=Q[1],K=M((0,u.useState)([]),2),q=K[0],X=K[1],J=M((0,u.useState)([]),2),ee=J[0],te=J[1],ne=M((0,u.useState)([]),2),re=ne[0],oe=ne[1],ie=M((0,u.useState)(!1),2),ae=ie[0],le=ie[1],ue=M((0,u.useState)([]),2),se=ue[0],ce=ue[1],de=M((0,u.useState)([]),2),fe=de[0],pe=de[1],me=M((0,u.useState)(null),2),ve=me[0],he=me[1],ye=(null==y||null===(t=y.audience)||void 0===t||null===(n=t.type)||void 0===n?void 0:n.toUpperCase())===U.cv.ORGANIZATION&&!$(),ge=(0,N.cQ)(ve,null,null,ye),Ee=ge.data,be=ge.isLoading,Re=ge.error,Oe=ge.mutate,Ie=(0,v.Eb)(B),Se=Ie.data,Ae=Ie.isLoading,we=Ie.isValidating,Ne=Ie.error,xe=(r=y.audience.type.toUpperCase()===U.cv.APPLICATION?y.audience.value:null,d={method:i.f2.GET,url:"".concat(L.h.getState().config.endpoints.applications,"/").concat(r,"/authorized-apis")},f=(0,x.Z)(r?d:null),p=f.data,m=f.error,{data:p,error:m,isLoading:!m&&!p,isValidating:f.isValidating,mutate:f.mutate}),Le=xe.data,Pe=xe.isLoading,Te=xe.error;(0,u.useEffect)((function(){!h&&Ge()}),[y]),(0,u.useEffect)((function(){(Ne||Te)&&_((0,a.V_)({description:R("console:manage.features.roles.addRoleWizard.forms.rolePermission.notifications.fetchAPIResourceError.error.description"),level:i.QU.ERROR,message:R("console:manage.features.roles.addRoleWizard.forms.rolePermission.notifications.fetchAPIResourceError.error.message")}))}),[Ne]),(0,u.useEffect)((function(){var e=[];y.audience.type.toUpperCase()===U.cv.APPLICATION&&(null==Le||Le.map((function(t){if(!W.find((function(e){return(null==e?void 0:e.id)===(null==t?void 0:t.id)}))){var n,r,o=null!=t&&null!==(n=t.identifier)&&void 0!==n&&n.startsWith("/o/")?P.KG.SYSTEM_ORG:P.KG.SYSTEM;e.push({identifier:t.identifier,key:t.id,text:t.displayName,type:null!==(r=t.type)&&void 0!==r?r:o,value:t.id})}})),ce(e))}),[Le,W]),(0,u.useEffect)((function(){var e=[];if(y.audience.type.toUpperCase()===U.cv.ORGANIZATION){fe.map((function(t){W.find((function(e){return(null==e?void 0:e.id)===(null==t?void 0:t.id)}))||e.push({identifier:t.identifier,key:t.id,text:t.name,type:t.type,value:t.id})}));var t=e.filter((function(e,t,n){return t===n.findIndex((function(t){return t.key===e.key}))}));ce(t)}}),[W]),(0,u.useEffect)((function(){!Se||Ae||we||(W.find((function(e){return(null==Se?void 0:Se.id)===(null==e?void 0:e.id)}))||D([Se].concat(Z(W))),B&&Y(void 0))}),[Se]),(0,u.useEffect)((function(){_e(re)}),[re,Le]),(0,u.useEffect)((function(){var e;if(ae||le(!0),Ee){var t,n=null==Ee?void 0:Ee.apiResources.reduce((function(e,t){0!==(null==W?void 0:W.length)&&(null!=W&&W.some((function(e){return e.identifier===t.identifier})))||(0===se.length||!(null!=se&&se.some((function(e){return e.key===t.id}))))&&e.push({identifier:t.identifier,key:t.id,text:t.name,type:t.type,value:t.id});return e}),[]);y.audience.type.toUpperCase()===U.cv.ORGANIZATION&&ce([].concat(Z(se),Z(n||[]))),pe([].concat(Z(fe),Z(Ee.apiResources)));var r=!1;null==Ee||null===(t=Ee.links)||void 0===t||t.forEach((function(t){t.rel===P.KG.NEXT_REL&&(e=t.href.split("".concat(P.KG.AFTER,"="))[1])!==ve&&(he(e),r=!0)})),r?Oe():le(!1)}}),[Ee]),(0,u.useEffect)((function(){Re&&_((0,a.V_)({description:R("extensions:develop.apiResource.notifications.getAPIResources.genericError.description"),level:i.QU.ERROR,message:R("extensions:develop.apiResource.notifications.getAPIResources.genericError.message")}))}),[Re]);var je,Ue,_e=function(){var e,t=(e=C().mark((function e(t){var n;return C().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==(n=t).length){e.next=3;break}return e.abrupt("return");case 3:(0,v.BT)(n).then((function(e){if(y.audience.type.toUpperCase()===U.cv.ORGANIZATION)D(e);else{var t=[];e.map((function(e){var n=null==Le?void 0:Le.find((function(t){return t.id===e.id}));n&&t.push({id:n.id,identifier:n.identifier,name:n.displayName,scopes:n.authorizedScopes,type:n.type})})),D(t)}})).catch((function(){Ce({description:R("console:manage.features.roles.notifications.fetchAPIResource.error.description"),level:i.QU.ERROR,message:R("console:manage.features.roles.notifications.fetchAPIResource.error.message")})}));case 4:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){k(i,r,o,a,l,"next",e)}function l(e){k(i,r,o,a,l,"throw",e)}a(void 0)}))});return function(e){return t.apply(this,arguments)}}(),Ge=function(){var e,t=[],n=[];null==y||null===(e=y.permissions)||void 0===e||e.forEach((function(e){if("string"!=typeof e){var r=e.$ref.split("/").reverse()[2];if(t.find((function(e){return e.apiResourceId===r}))){var o=t.findIndex((function(e){return e.apiResourceId===r}));t[o].scopes.push({displayName:e.display,id:e.value,name:e.value})}else n.push(r),t.push({apiResourceId:r,scopes:[{displayName:e.display,id:e.value,name:e.value}]})}})),oe(n),X(t),te(t)},Ce=function(e){_((0,a.V_)(e))},ke=function(e,t){var n,r;if(e.preventDefault(),(null==y||null===(n=y.audience)||void 0===n||null===(r=n.type)||void 0===r?void 0:r.toUpperCase())===U.cv.ORGANIZATION){var o;Y(null==t||null===(o=t.value)||void 0===o?void 0:o.toString())}else{var i,a,l=null==Le?void 0:Le.find((function(e){var n;return(null==e?void 0:e.id)===(null==t||null===(n=t.value)||void 0===n?void 0:n.toString())})),u=null!=l&&null!==(i=l.identifier)&&void 0!==i&&i.startsWith("/o/")?P.KG.SYSTEM_ORG:P.KG.SYSTEM;D([{id:null==l?void 0:l.id,identifier:null==l?void 0:l.identifier,name:null==l?void 0:l.displayName,scopes:null==l?void 0:l.authorizedScopes,type:null!==(a=null==l?void 0:l.type)&&void 0!==a?a:u}].concat(Z(W)))}},Ze=function(e,t){var n=q.filter((function(t){return t.apiResourceId!==e.id}));n.push({apiResourceId:e.id,scopes:t}),X(n)},Me=function(e){D(W.filter((function(t){return t.id!==e}))),X(q.filter((function(t){return t.apiResourceId!==e})))};return u.createElement(l.pJ,{padded:"very"},u.createElement(I.Z,{xs:8},u.createElement(l.X6,{as:"h4"},R("console:manage.features.roles.edit.permissions.heading")),h?u.createElement(l.X6,{as:"h6",color:"grey",subHeading:!0,className:"mb-5"},R("console:manage.features.roles.edit.permissions.readOnlySubHeading")):u.createElement(l.X6,{as:"h6",color:"grey",subHeading:!0,className:"mb-5"},R("console:manage.features.roles.edit.permissions.subHeading"))),h?u.createElement(O.Z,{readOnly:!0,multiple:!0,options:null!==(je=null==y?void 0:y.permissions)&&void 0!==je?je:[],defaultValue:null!==(Ue=null==y?void 0:y.permissions)&&void 0!==Ue?Ue:[],getOptionLabel:function(e){return e.display},renderInput:function(e){return u.createElement(S.Z,G({},e,{"data-componentid":"".concat(b,"-textfield")}))},renderTags:function(e,t){return e.map((function(e,n){return u.createElement(A.w,G({},t({index:n}),{key:n,primaryText:e.display,secondaryText:e.value,option:e,activeOption:null,setActiveOption:function(){return null},variant:"solid"}))}))}}):u.createElement(I.Z,{container:!0,direction:"column",justifyContent:"center",alignItems:"flex-start",spacing:2},u.createElement(I.Z,{xs:8},u.createElement(O.Z,{disableCloseOnSelect:!0,fullWidth:!0,"aria-label":"API resource selection",componentsProps:{paper:{elevation:2},popper:{modifiers:[{enabled:!1,name:"flip"},{enabled:!1,name:"preventOverflow"}]}},getOptionLabel:function(e){return e.text},groupBy:function(e){return T.H.resolveApiResourceGroup(null==e?void 0:e.type)},isOptionEqualToValue:function(e,t){return e.value===t.value},loading:ye&&be,onChange:ke,options:null==se?void 0:se.filter((function(e){return(null==e?void 0:e.type)===P.sM.TENANT||(null==e?void 0:e.type)===P.sM.ORGANIZATION||(null==e?void 0:e.type)===P.sM.BUSINESS})).sort((function(e,t){var n;return null===(n=T.H.resolveApiResourceGroup(null==e?void 0:e.type))||void 0===n?void 0:n.localeCompare(T.H.resolveApiResourceGroup(null==t?void 0:t.type))})),noOptionsText:R("common:noResultsFound"),renderInput:function(e){return u.createElement(S.Z,G({},e,{label:R("console:manage.features.roles.addRoleWizard.forms.rolePermission.apiResource.label"),placeholder:R("console:manage.features.roles.addRoleWizard.forms.rolePermission.apiResource.placeholder"),size:"small"}))}})),u.createElement(I.Z,{xs:12},(null==W?void 0:W.length)>0?u.createElement("div",{className:"role-permission-list field"},u.createElement("label",{className:"form-label"},R("console:manage.features.roles.addRoleWizard.forms.rolePermission.permissions.label")),u.createElement(l.pJ,{className:"mt-2","data-componentid":b,basic:!0,loading:B&&(Ae||we||Pe)},null==W?void 0:W.map((function(e){var t,n;return u.createElement(w.L,{key:null==e?void 0:e.id,apiResource:e,onChangeScopes:Ze,onRemoveAPIResource:Me,initialSelectedPermissions:null==ee||null===(t=ee.find((function(t){return t.apiResourceId===(null==e?void 0:e.id)})))||void 0===t?void 0:t.scopes,selectedPermissions:null==q||null===(n=q.find((function(t){return t.apiResourceId===(null==e?void 0:e.id)})))||void 0===n?void 0:n.scopes})})))):null)),!h&&u.createElement(o.Z,{color:"primary",variant:"contained",size:"small",className:"mt-5",loading:V,disabled:h,onClick:function(){!function(){F(!0);var e=[];q.forEach((function(t){t.scopes.map((function(t){e.push({value:t.name})}))}));var t={Operations:[{op:"replace",value:{permissions:e}}],schemas:["urn:ietf:params:scim:api:messages:2.0:PatchOp"]};(0,v.dB)(null==y?void 0:y.id,t).then((function(){g(E),Ce({description:R("console:manage.features.roles.notifications.updateRole.success.description"),level:i.QU.SUCCESS,message:R("console:manage.features.roles.notifications.updateRole.success.message")})})).catch((function(){Ce({description:R("console:manage.features.roles.notifications.updateRole.error.description"),level:i.QU.ERROR,message:R("console:manage.features.roles.notifications.updateRole.error.message")})})).finally((function(){F(!1)}))}()},"data-componentid":"".concat(b,"-update-button")},R("common:update")))};V.defaultProps={"data-componentid":"edit-role-permissions"};var F=n(51883),H=n(89423),B=n(85814);function Y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,l=[],u=!0,s=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);u=!0);}catch(e){s=!0,o=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw o}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Q(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Q(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var W=function(e){var t=e.isLoading,n=e.roleObject,r=e.onRoleUpdate,o=e.defaultActiveIndex,i=(0,s.$)().t,a=(0,j.z)().organizationType,d=(0,c.v9)((function(e){var t,n,r;return null==e||null===(t=e.config)||void 0===t||null===(n=t.ui)||void 0===n||null===(r=n.features)||void 0===r?void 0:r.userRoles})),f=(0,c.v9)((function(e){var t,n,r;return null==e||null===(t=e.config)||void 0===t||null===(n=t.ui)||void 0===n||null===(r=n.features)||void 0===r?void 0:r.users})),p=(0,c.v9)((function(e){var t;return null==e||null===(t=e.auth)||void 0===t?void 0:t.allowedScopes})),m=(0,c.v9)((function(e){var t,n;return null==e||null===(t=e.config)||void 0===t||null===(n=t.ui)||void 0===n?void 0:n.administratorRoleDisplayName})),v=(0,u.useMemo)((function(){var e;return!(0,g.cr)(d,B.nL.FEATURE_DICTIONARY.get("ROLE_UPDATE"))||!(0,g.hasRequiredScopes)(d,null==d||null===(e=d.scopes)||void 0===e?void 0:e.update,p)}),[d,p]),O=(0,u.useMemo)((function(){var e;return!(0,g.cr)(f,H._F.FEATURE_DICTIONARY.get("USER_CREATE"))||!(0,g.hasRequiredScopes)(f,null==f||null===(e=f.scopes)||void 0===e?void 0:e.update,p)}),[f,p]),I=Y((0,u.useState)(!1),2),S=I[0],A=I[1],w=Y((0,u.useState)(!1),2),N=w[0],x=w[1],L=a===h.$B.SUBORGANIZATION;(0,u.useEffect)((function(){n&&(A(n.displayName===y.nL.ADMIN_ROLE||(null==n?void 0:n.displayName)===y.nL.ADMIN_GROUP||(null==n?void 0:n.displayName)===m),x(n.displayName===y.nL.EVERYONE_ROLE||n.displayName===y.nL.EVERYONE_GROUP))}),[n]);var P;return u.createElement(l.M$,{isLoading:t,defaultActiveIndex:o,panes:[{menuItem:i("console:manage.features.roles.edit.menuItems.basic"),render:function(){return u.createElement(l.M$.Pane,{controlledSegmentation:!0,attached:!1},u.createElement(E.Q,{isReadOnly:L||S||N||v,role:n,onRoleUpdate:r,tabIndex:0}))}},{menuItem:i("console:manage.features.roles.edit.menuItems.permissions"),render:function(){return u.createElement(l.M$.Pane,{controlledSegmentation:!0,attached:!1},u.createElement(V,{isReadOnly:L||S||v,role:n,onRoleUpdate:r,tabIndex:1}))}},{menuItem:i("console:manage.features.roles.edit.menuItems.groups"),render:function(){return u.createElement(l.M$.Pane,{controlledSegmentation:!0,attached:!1},u.createElement(R.q,{isReadOnly:v,role:n,onRoleUpdate:r,tabIndex:2}))}},{menuItem:i("console:manage.features.roles.edit.menuItems.users"),render:function(){return u.createElement(l.M$.Pane,{controlledSegmentation:!0,attached:!1},u.createElement(F.G,{isReadOnly:v||O,role:n,onRoleUpdate:r,tabIndex:3}))}},(null==n||null===(P=n.audience)||void 0===P?void 0:P.type)===B.cv.ORGANIZATION.toLocaleLowerCase()?{menuItem:i("console:manage.features.roles.edit.menuItems.connectedApps"),render:function(){return u.createElement(l.M$.Pane,{controlledSegmentation:!0,attached:!1},u.createElement(b.u,{isReadOnly:v,role:n,onRoleUpdate:r,tabIndex:4}))}}:null]})};function D(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,l=[],u=!0,s=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);u=!0);}catch(e){s=!0,o=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw o}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return K(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return K(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function K(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}W.defaultProps={defaultActiveIndex:0};var q=function(e){var t,n,h,y=e["data-componentid"],g=(0,s.$)().t,E=(0,c.I0)(),b=(0,c.v9)((function(e){return e.config.ui.features})),R=D((0,u.useState)(void 0),2),O=R[0],I=R[1],S=D((0,u.useState)(0),2),A=S[0],w=S[1];(0,u.useEffect)((function(){var e=m.m.location.pathname.split("/"),t=e[e.length-1];I(t)}),[]);var N=(0,v.tE)(O),x=N.data,L=N.isLoading,P=N.error,T=N.mutate,j=N.isValidating;(0,u.useEffect)((function(){P&&E((0,a.V_)({description:g("console:manage.features.roles.notifications.fetchRole.genericError.description"),level:i.QU.ERROR,message:g("console:manage.features.roles.notifications.fetchRole.genericError.message")}))}),[P]);var _=function(){m.m.push(p.$.getPaths().get("ROLES"))};return P?function(){if(P)return u.createElement(l.$J,{subtitle:[g("console:manage.features.roles.edit.placeholders.errorPlaceHolder.subtitles.0"),g("console:manage.features.roles.edit.placeholders.errorPlaceHolder.subtitles.1")],title:g("console:manage.features.roles.edit.placeholders.errorPlaceHolder.title"),image:(0,f.jF)().emptySearch,action:u.createElement(o.Z,{onClick:_},g("console:manage.features.roles.edit.placeholders.errorPlaceHolder.action")),imageSize:"tiny"})}():u.createElement(l.O9,{"data-componentid":y,isLoading:L,title:x&&null!=x&&x.displayName?null==x?void 0:x.displayName:g("console:manage.pages.rolesEdit.title"),description:u.createElement(r.rj,{container:!0,alignItems:"center"},u.createElement(r.rj,null,U.cv.ORGANIZATION===(null==x||null===(t=x.audience)||void 0===t?void 0:t.type.toUpperCase())?g("console:manage.features.roles.list.columns.managedByOrg.label"):g("console:manage.features.roles.list.columns.managedByApp.label")),u.createElement(r.rj,null,u.createElement(d.Z,{className:U.cv.ORGANIZATION===(null==x||null===(n=x.audience)||void 0===n?void 0:n.type.toUpperCase())?"issuer-label":"client-id-label"},null==x||null===(h=x.audience)||void 0===h?void 0:h.display))),pageTitle:g("console:manage.pages.rolesEdit.title"),backButton:{onClick:_,text:g("console:manage.pages.rolesEdit.backButton",{type:"roles"})},titleTextAlign:"left",bottomMargin:!1},u.createElement(W,{isLoading:L||j,roleObject:x,onRoleUpdate:function(e){T(),w(e)},featureConfig:b,defaultActiveIndex:A}))};q.defaultProps={"data-componentid":"role-mgt-edit"};const X=q}}]);