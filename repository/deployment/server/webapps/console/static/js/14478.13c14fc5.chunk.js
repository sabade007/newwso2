"use strict";(self.webpackChunk_wso2is_console=self.webpackChunk_wso2is_console||[]).push([[14478,28689,34127,45898,77962,86947,80617,15642],{34127:(e,t,n)=>{n.r(t),n.d(t,{VerticalStepper:()=>r.VerticalStepper});var r=n(45898)},45898:(e,t,n)=>{n.r(t),n.d(t,{VerticalStepper:()=>r.VerticalStepper});var r=n(86947)},77962:(e,t,n)=>{n.r(t),n.d(t,{VerticalStep:()=>s});var r=n(83849),a=n.n(r),i=n(52983),l=n(75917),o=n(88171),s=function(e){var t=e.alwaysOpen,n=e.className,r=e.stepTitle,s=e.stepContent,c=e.hasPrevious,u=e.hasNext,p=e.isFinalStep,d=e.handleCompleteStep,m=e.handlePreviousStep,f=e.step,g=e.isComplete,h=e.isInitial,v=e.isActiveStep,y=e.isCurrentStep,S=e.isNextEnabled,E=e.isSidePanelOpen,b=a()("quick-start-step",{complete:!t&&!v&&g,initial:!(t||h||y||g||v)},n);return i.createElement("div",{className:b},i.createElement("div",{className:"step-content-container ".concat(E?"side-panel-visible":"")},i.createElement("h3",null,r),i.createElement("div",{className:"step-content"},s,!t&&i.createElement(i.Fragment,null,i.createElement(l.Z,{hidden:!0}),i.createElement("div",null,c&&i.createElement(o.Z,{onClick:function(){m(f)},size:"tiny",className:"step-previous",color:"orange",basic:!0},"Previous"),u&&i.createElement(o.Z,{disabled:S,onClick:function(){d(f)},size:"tiny",primary:!0},"Next"),p&&i.createElement(o.Z,{onClick:function(){d(f)},size:"tiny",primary:!0},"Finish"))),i.createElement(l.Z,{hidden:!0}))))};s.defaultProps={alwaysOpen:!1}},86947:(e,t,n)=>{n.r(t),n.d(t,{VerticalStepper:()=>c});var r=n(52983),a=n(77962);function i(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||o(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,i,l,o=[],s=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=i.call(n)).done)&&(o.push(r.value),o.length!==t);s=!0);}catch(e){c=!0,a=e}finally{try{if(!s&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(c)throw a}}return o}}(e,t)||o(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var c=function(e){var t=e.handleFinishAction,n=e.alwaysOpen,o=e.stepContent,s=e.isNextEnabled,c=e.isSidePanelOpen,u=e["data-testid"],p=l((0,r.useState)([]),2),d=p[0],m=p[1],f=l((0,r.useState)(),2),g=f[0],h=f[1],v=function(){h(d.pop())};return r.createElement("div",{className:"quick-start-step-container","data-testid":u},o&&o.map((function(e,l){return r.createElement(a.VerticalStep,{key:l,alwaysOpen:n,step:l,isInitial:0===l,hasNext:o[l+1],hasPrevious:o[l-1],isFinalStep:l==o.length-1,stepTitle:e.stepTitle,stepContent:e.stepContent,handleCompleteStep:function(){l!=o.length-1?(e.stepAction&&e.stepAction(),e.preventGoToNextStep||(!function(e){m([].concat(i(d),[e]))}(l),h(d.pop()))):t()},handlePreviousStep:v,isComplete:d.includes(l),isActiveStep:g===l,isNextEnabled:!s,isSidePanelOpen:c,isCurrentStep:!d.includes(l)&&d[d.length-1]+1===l})})))};c.defaultProps={alwaysOpen:!1}},28689:(e,t,n)=>{n.r(t),n.d(t,{VerticalStepper:()=>r.VerticalStepper});var r=n(34127)},14478:(e,t,n)=>{n.r(t),n.d(t,{default:()=>A});var r=n(14603),a=n(90268),i=n(81816),l=n(52983),o=n(9202),s=n(39990),c=n(54221),u=n(94635),p=n(21921),d=n(88308),m=n(15642),f=n(61133),g=n(11582),h=n(71532),v=n(60611),y=n(82915),S=n(28689);function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,i,l,o=[],s=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=i.call(n)).done)&&(o.push(r.value),o.length!==t);s=!0);}catch(e){c=!0,a=e}finally{try{if(!s&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(c)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var C=function(e){var t=e["data-testid"],n=(0,o.$)().t,b=(0,c.I0)(),C=E((0,l.useState)(!1),2),A=C[0],P=C[1],w=E((0,l.useState)(0),2),x=w[0],k=w[1],O=E((0,l.useState)(6),2),N=O[0],Z=O[1],q=E((0,l.useState)({}),2),I=q[0],R=q[1],T=E((0,l.useState)(""),2),V=T[0],z=T[1],F=E((0,l.useState)(!1),2),j=F[0],L=F[1],M=E((0,l.useState)(!1),2),_=M[0],G=M[1],Q=function(e,t,i){G(!0),(0,f.AY)(e,t,i).then((function(e){R(e)})).catch((function(e){e.response&&e.response.data&&e.response.data.description?b((0,a.V_)({description:e.response.data.description,level:r.QU.ERROR,message:n("console:develop.features.applications.notifications.fetchApplications.error.message")})):b((0,a.V_)({description:n("console:develop.features.applications.notifications.fetchApplications.genericError.description"),level:r.QU.ERROR,message:n("console:develop.features.applications.notifications.fetchApplications.genericError.message")}))})).finally((function(){G(!1)}))};(0,l.useEffect)((function(){Q(N,x,null)}),[x,N]);var D=[{stepContent:l.createElement(l.Fragment,null,l.createElement(i.xv,null,l.createElement(s.c,{i18nKey:"extensions:develop.identityProviders.google.quickStart.steps.selectApplication.content"},"Choose the ",l.createElement(i.rU,{external:!1,onClick:function(){return P(!0)}},"application "),"for which you want to set up Google login."))),stepTitle:n("extensions:develop.identityProviders.google.quickStart.steps.selectApplication.heading")},{stepContent:l.createElement(l.Fragment,null,l.createElement(i.xv,null,l.createElement(s.c,{i18nKey:"extensions:develop.identityProviders.google.quickStart.steps.selectDefaultConfig.content"},"Go to ",l.createElement("strong",null,"Login Flow")," tab and click on ",l.createElement("strong",null,"Add Google login")," to configure a Google login flow.")),l.createElement(i.dn,{inline:!0,transparent:!0,icon:d,size:"huge"})),stepTitle:l.createElement(s.c,{i18nKey:"extensions:develop.identityProviders.google.quickStart.steps.selectDefaultConfig.heading"},"Select ",l.createElement("strong",null,"Add Google login"))},{stepContent:l.createElement(l.Fragment,null,l.createElement(i.xv,null,l.createElement(s.c,{i18nKey:"extensions:develop.identityProviders.google.quickStart.steps.customizeFlow.content"},"Continue to configure the login flow as required.")),l.createElement(i.dn,{inline:!0,transparent:!0,icon:m,size:"huge"})),stepTitle:n("extensions:develop.identityProviders.google.quickStart.steps.customizeFlow.heading")}];return l.createElement(l.Fragment,null,l.createElement(u.Z,{"data-testid":t,className:"authenticator-quickstart-content"},l.createElement(u.Z.Row,{textAlign:"left"},l.createElement(u.Z.Column,{width:16},l.createElement(i.mr,{className:"mb-2",title:n("extensions:develop.identityProviders.google.quickStart.heading"),imageSpaced:!1,bottomMargin:!1}),l.createElement(i.X6,{subHeading:!0,as:"h6"},n("extensions:develop.identityProviders.google.quickStart.subHeading")))),l.createElement(u.Z.Row,{textAlign:"left"},l.createElement(u.Z.Column,{width:16},l.createElement(S.VerticalStepper,{alwaysOpen:!0,isSidePanelOpen:!0,stepContent:D,isNextEnabled:!0})))),A&&l.createElement(p.Z,{"data-testid":t,open:!0,className:"wizard application-create-wizard",dimmer:"blurring",size:"large",onClose:function(){return P(!1)},closeOnDimmerClick:!1,closeOnEscape:!0},l.createElement(p.Z.Header,{className:"wizard-header"},n("extensions:develop.identityProviders.google.quickStart.addLoginModal.heading"),l.createElement(i.X6,{as:"h6"},n("extensions:develop.identityProviders.google.quickStart.addLoginModal.subHeading"))),l.createElement(p.Z.Content,{className:"content-container",scrolling:!0},l.createElement(i.PS,{advancedSearch:l.createElement(h.nC,{onFilter:function(e){z(e),Q(N,x,""===e?null:e)},filterAttributeOptions:[{key:0,text:n("common:name"),value:"name"}],filterAttributePlaceholder:n("console:develop.features.applications.advancedSearch.form.inputs.filterAttribute.placeholder"),filterConditionsPlaceholder:n("console:develop.features.applications.advancedSearch.form.inputs.filterCondition.placeholder"),filterValuePlaceholder:n("console:develop.features.applications.advancedSearch.form.inputs.filterValue.placeholder"),placeholder:n("console:develop.features.applications.advancedSearch.placeholder"),defaultSearchAttribute:"name",defaultSearchOperator:"co",triggerClearQuery:j,"data-testid":"".concat(t,"-list-advanced-search")}),currentListSize:I.count,listItemLimit:N,onItemsPerPageDropdownChange:function(e,t){Z(t.value)},onPageChange:function(e,t){k((t.activePage-1)*N)},showPagination:(null==I?void 0:I.totalResults)>N,totalPages:Math.ceil(I.totalResults/N),totalListSize:I.totalResults,"data-testid":"".concat(t,"-list-layout"),showTopActionPanel:(null==I?void 0:I.totalResults)>N,paginationOptions:{itemsPerPageDropdownLowerLimit:6}},l.createElement(g.d,{isSetStrongerAuth:!0,list:I,onEmptyListPlaceholderActionClick:function(){return y.m.push(v.$x.getPaths().get("APPLICATION_TEMPLATES"))},onSearchQueryClear:function(){Q(N,x,null),z(""),L(!j)},searchQuery:V,isLoading:_,isRenderedOnPortal:!0,"data-testid":"".concat(t,"-list")}))),l.createElement(p.Z.Actions,null,l.createElement(u.Z,null,l.createElement(u.Z.Row,{column:1},l.createElement(u.Z.Column,{mobile:8,tablet:8,computer:8},l.createElement(i.Qj,{"data-testid":"".concat(t,"-cancel-button"),floated:"left",onClick:function(){return P(!1)}},n("common:cancel"))))))))};C.defaultProps={"data-testid":"google-quick-start"};const A=C},88308:(e,t,n)=>{e.exports=n.p+"static/media/fbb88ebff414c5d5.png"},15642:(e,t,n)=>{e.exports=n.p+"static/media/b4e77d50a91a88e6.png"}}]);