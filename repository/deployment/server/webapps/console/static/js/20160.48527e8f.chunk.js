"use strict";(self.webpackChunk_wso2is_console=self.webpackChunk_wso2is_console||[]).push([[20160],{20160:(e,t,n)=>{n.r(t),n.d(t,{default:()=>S});var r=n(96433),a=n(83374),o=n(14603),s=n(90268),i=n(81816),u=n(52983),l=n(9202),c=n(54221),d=n(30640),f=n(58900),p=n(62868),m=n(82946),g=n(99778),v=n(46686);function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,s,i=[],u=!0,l=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=o.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){l=!0,a=e}finally{try{if(!u&&null!=n.return&&(s=n.return(),Object(s)!==s))return}finally{if(l)throw a}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var E=function(e){var t=e.match,n=e["data-testid"],h=t.params.id,E=y((0,u.useState)(null),2),S=E[0],b=E[1],O=y((0,u.useState)(null),2),R=O[0],M=O[1],I=y((0,u.useState)(null),2),U=I[0],_=I[1],w=y((0,u.useState)(void 0),2),P=w[0],A=w[1],L=(0,c.I0)(),T=(0,l.$)().t,k=(0,c.v9)((function(e){return e.config.ui.features})),$=(0,c.v9)((function(e){var t;return null==e||null===(t=e.auth)||void 0===t?void 0:t.allowedScopes})),C=function(){A(!0),(0,f.YZ)(h).then((function(e){b(e)})).catch((function(e){L((0,s.V_)({description:(null==e?void 0:e.description)||T("console:manage.features.userstores.notifications.fetchUserstores.genericError.description"),level:o.QU.ERROR,message:(null==e?void 0:e.message)||T("console:manage.features.userstores.notifications.fetchUserstores.genericError.message")}))})).finally((function(){A(!1)}))};(0,u.useEffect)((function(){C()}),[]),(0,u.useEffect)((function(){S&&(0,f.E4)(null==S?void 0:S.typeId,null).then((function(e){M(e)})).catch((function(e){L((0,s.V_)({description:(null==e?void 0:e.description)||T("console:manage.features.userstores.notifications.fetchUserstoreMetadata.genericError.description"),level:o.QU.ERROR,message:(null==e?void 0:e.message)||T("console:manage.features.userstores.notifications.fetchUserstoreMetadata.genericError.message")}))}))}),[S]),(0,u.useEffect)((function(){R&&_((0,v.Y)(R.properties,S.properties))}),[R]);var j=function(){var e,t;return!(0,a.hasRequiredScopes)(null==k?void 0:k.userStores,null==k||null===(e=k.userStores)||void 0===e||null===(t=e.scopes)||void 0===t?void 0:t.update,$)},x=[{menuItem:T("console:manage.features.userstores.pageLayout.edit.tabs.general"),render:function(){return u.createElement(i.M$.Pane,{controlledSegmentation:!0,attached:!1},u.createElement(p.iq,{readOnly:j(),properties:null==U?void 0:U.basic,userStore:S,update:C,id:h,"data-testid":"".concat(n,"-userstore-basic-details-edit")}))}},{menuItem:h===g.kL?null:T("console:manage.features.userstores.pageLayout.edit.tabs.connection"),render:function(){return u.createElement(i.M$.Pane,{controlledSegmentation:!0,attached:!1},u.createElement(p.NY,{readOnly:j(),update:C,type:R,id:h,properties:null==U?void 0:U.connection,"data-testid":"".concat(n,"-userstore-connection-details-edit")}))}},{menuItem:T("console:manage.features.userstores.pageLayout.edit.tabs.user"),render:function(){return u.createElement(i.M$.Pane,{controlledSegmentation:!0,attached:!1},u.createElement(p.HD,{readOnly:j(),update:C,type:R,id:h,properties:null==U?void 0:U.user,"data-testid":"".concat(n,"-userstore-user-details-edit")}))}},{menuItem:T("console:manage.features.userstores.pageLayout.edit.tabs.group"),render:function(){return u.createElement(i.M$.Pane,{controlledSegmentation:!0,attached:!1},u.createElement(p.YV,{readOnly:j(),update:C,type:R,id:h,properties:null==U?void 0:U.group,"data-testid":"".concat(n,"-userstore-group-details-edit")}))}}];return u.createElement(i.O9,{isLoading:P,image:u.createElement(i.dn,{defaultIcon:!0,size:"x60",relaxed:"very",shape:"rounded",hoverable:!1,icon:(0,m.jw)()}),title:(null==S?void 0:S.name)===g.XS?r.ss.CUSTOMER_USER_STORE_MAPPING:null==S?void 0:S.name,pageTitle:(null==S?void 0:S.name)===g.XS?r.ss.CUSTOMER_USER_STORE_MAPPING:null==S?void 0:S.name,description:T("console:manage.features.userstores.pageLayout.edit.description"),backButton:{onClick:function(){d.m8.push(d.$x.getPaths().get("USERSTORES"))},text:T("console:manage.features.userstores.pageLayout.edit.back")},titleTextAlign:"left",bottomMargin:!1,"data-testid":"".concat(n,"-page-layout")},u.createElement(i.M$,{isLoading:P,panes:x,onTabChange:function(){C()},"data-testid":"".concat(n,"-tabs")}))};E.defaultProps={"data-testid":"userstores-edit"};const S=E}}]);