"use strict";(self.webpackChunk_wso2is_console=self.webpackChunk_wso2is_console||[]).push([[40952,65433],{40952:(e,t,a)=>{a.r(t),a.d(t,{QuickStartPanelOverview:()=>g});var n=a(14603),o=a(81816),c=a(52983),i=a(94635),r=a(43554),l=a(73157),s=a(61133),d=a(87089),u=a(30640),p=a(65433),m=a(54221),E=a(90268),f=a(9202);function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,o,c,i,r=[],l=!0,s=!1;try{if(c=(a=a.call(e)).next,0===t){if(Object(a)!==a)return;l=!1}else for(;!(l=(n=c.call(a)).done)&&(r.push(n.value),r.length!==t);l=!0);}catch(e){s=!0,o=e}finally{try{if(!l&&null!=a.return&&(i=a.return(),Object(i)!==i))return}finally{if(s)throw o}}return r}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return S(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return S(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var g=function(e){var t=e.applicationType,a=e.defaultTabIndex,S=e.handleIntegrateSelection,g=e.onBackButtonClick,k=e.technology,A=e.technologyLogo,M=(0,f.$)().t,w=(0,m.I0)(),y=h((0,c.useState)(void 0),2),v=y[0],T=y[1],I=h((0,c.useState)(void 0),2),N=I[0],b=I[1],Q=u.lD.getInstance();(0,c.useEffect)((function(){(0,s.AY)(null,null,null).then((function(e){T(e)})).catch((function(e){e.response&&e.response.data&&e.response.data.description?w((0,E.V_)({description:e.response.data.description,level:n.QU.ERROR,message:M("console:develop.features.applications.notifications.fetchApplications.error.message")})):w((0,E.V_)({description:M("console:develop.features.applications.notifications.fetchApplications.genericError.description"),level:n.QU.ERROR,message:M("console:develop.features.applications.notifications.fetchApplications.genericError.message")}))}))}),[]),(0,c.useEffect)((function(){if(void 0!==v&&!window.location.hash.includes(d.El.VIEW)){var e;if((null==v||null===(e=v.applications)||void 0===e?void 0:e.length)>1)return b(p.QuickStartModes.INTEGRATE),void S(p.QuickStartModes.INTEGRATE);b(p.QuickStartModes.SAMPLES),S(p.QuickStartModes.SAMPLES)}}),[v]),(0,c.useEffect)((function(){k&&N&&(Q.compute((function(){N===p.QuickStartModes.INTEGRATE?Q.publish("application-quick-start-switch-integration-path",{type:"integrate-own-application"}):N===p.QuickStartModes.SAMPLES&&Q.publish("application-quick-start-switch-integration-path",{type:"try-out-sample"})})),u.m8.push({hash:"".concat(d.El.TAB_INDEX).concat(0,"&").concat(d.El.VIEW)+"".concat(N.toLowerCase(),"_").concat(k.toLowerCase()),pathname:window.location.pathname}))}),[N]),(0,c.useEffect)((function(){if(window.location.hash.includes(d.El.VIEW)){var e=window.location.hash.split("&"+d.El.VIEW);if(e[0]==="#"+d.El.TAB_INDEX+(0).toString()){var t=e[1].split("_")[0].toUpperCase();p.QuickStartModes.SAMPLES==t?(b(p.QuickStartModes.SAMPLES),S(p.QuickStartModes.SAMPLES)):p.QuickStartModes.INTEGRATE==t?(b(p.QuickStartModes.INTEGRATE),S(p.QuickStartModes.INTEGRATE)):R()}else R()}}),[window.location.hash]);var R=function(){u.m8.push({hash:"".concat(d.El.TAB_INDEX).concat(a),pathname:window.location.pathname})};return c.createElement(c.Fragment,null,c.createElement(i.Z,null,c.createElement(i.Z.Row,null,c.createElement(i.Z.Column,null,c.createElement(o.mr,{image:c.createElement(o.dn,{inline:!0,transparent:!0,className:"display-flex",icon:A,size:"mini"}),className:"mb-2",title:k,backButton:{onClick:function(){return g()},text:"Go back to selection"},imageSpaced:!1,bottomMargin:!1}),c.createElement(o.X6,{subHeading:!0,as:"h6"},"Select one of the following paths to get started."))),t?c.createElement(c.Fragment,null,c.createElement(i.Z.Row,{stretched:!0},c.createElement(i.Z.Column,{width:8},c.createElement(r.Z,{fluid:!0,className:"selection-card radio-selection-card quickstart-mode-card ".concat(N===p.QuickStartModes.INTEGRATE?"card-selected":""),"data-testid":"integration-mode-selection-card"},c.createElement(r.Z.Content,{onClick:function(){Q.publish("application-quick-start-click-integration-path-radio",{type:"integrate-own-application"}),b(p.QuickStartModes.INTEGRATE),S(p.QuickStartModes.INTEGRATE)},className:"selection-card-content","data-testid":"integration-mode-selection-card-content"},c.createElement("div",{className:"integrate-radio"},c.createElement(l.Z,{checked:N===p.QuickStartModes.INTEGRATE,"data-testid":"integration-mode-selection-card-radio"})),c.createElement("div",{className:"card-content"},c.createElement(r.Z.Header,{className:"mb-2","data-testid":"integration-mode-selection-card-header"},c.createElement("span",null,"Integrate")," your application"),c.createElement(r.Z.Meta,null,c.createElement("span",null,"Follow the steps below to integrate your own application")))))),c.createElement(i.Z.Column,{width:8},c.createElement(r.Z,{fluid:!0,className:"selection-card radio-selection-card quickstart-mode-card ".concat(N===p.QuickStartModes.SAMPLES?"card-selected":""),"data-testid":"try-out-mode-selection-card"},c.createElement(r.Z.Content,{onClick:function(){Q.publish("application-quick-start-click-integration-path-radio",{type:"try-out-sample"}),b(p.QuickStartModes.SAMPLES),S(p.QuickStartModes.SAMPLES)},className:"selection-card-content","data-testid":"try-out-mode-selection-card-content"},c.createElement("div",{className:"integrate-radio"},c.createElement(l.Z,{checked:N===p.QuickStartModes.SAMPLES,"data-testid":"try-out-mode-selection-card-radio"})),c.createElement("div",{className:"card-content"},c.createElement(r.Z.Header,{className:"mb-2","data-testid":"try-out-mode-selection-card-header"},c.createElement("span",null,"Try out "),"a sample"),c.createElement(r.Z.Meta,null,c.createElement("span",null,"Use our preconfigured sample to try out the login flow")))))))):null))}},65433:(e,t,a)=>{var n;a.r(t),a.d(t,{QuickStartModes:()=>n}),function(e){e.INTEGRATE="INTEGRATE",e.SAMPLES="SAMPLES"}(n||(n={}))}}]);