"use strict";(self.webpackChunk_wso2is_console=self.webpackChunk_wso2is_console||[]).push([[4707,19092],{4707:(e,t,n)=>{n.r(t),n.d(t,{UserListOptions:()=>r,default:()=>S});var r,a=n(14603),i=n(90268),o=n(81816),l=n(52983),s=n(9202),u=n(54221),c=n(94635),d=n(43554),m=n(73157),f=n(74691),v=n(75917),p=n(71817),g=n(17054),b=n(78304),y=n(8473);function E(e){return function(e){if(Array.isArray(e))return A(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||I(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,i,o,l=[],s=!0,u=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(e){u=!0,a=e}finally{try{if(!s&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw a}}return l}}(e,t)||I(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,t){if(e){if("string"==typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?A(e,t):void 0}}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}!function(e){e.ONBOARD="ONBOARD",e.INVITE="INVITE"}(r||(r={}));const S=function(e){var t=(0,s.$)().t,n=(0,u.I0)(),I=h((0,l.useState)(r.ONBOARD),2),A=I[0],S=I[1],O=h((0,l.useState)(!1),2),R=O[0],U=O[1],w=h((0,l.useState)(!1),2),N=w[0],Z=w[1],C=h((0,l.useState)([]),2),j=C[0],k=C[1],L=h((0,l.useState)(!1),2),T=L[0],z=L[1],D=h((0,l.useState)(!1),2),V=D[0],W=D[1],B=function(){z(!0),(0,b.getInvitedUserList)().then((function(e){var t=E(e.data),n=[];t.map((function(e){var t={id:e.id,email:e.email,roles:e.roles,status:e.status};n.push(t)})),n.length<1?W(!0):W(!1),k(n)})).catch((function(e){var r,o,l,s,u,c,d,m,f,v,p;null!=e&&null!==(r=e.response)&&void 0!==r&&null!==(o=r.data)&&void 0!==o&&o.description?n((0,i.V_)({description:null!==(l=null!==(s=null==e||null===(u=e.response)||void 0===u||null===(c=u.data)||void 0===c?void 0:c.description)&&void 0!==s?s:null==e||null===(d=e.response)||void 0===d||null===(m=d.data)||void 0===m?void 0:m.detail)&&void 0!==l?l:t("console:manage.features.users.notifications.fetchUsers.error.description"),level:a.QU.ERROR,message:null!==(f=null==e||null===(v=e.response)||void 0===v||null===(p=v.data)||void 0===p?void 0:p.message)&&void 0!==f?f:t("console:manage.features.users.notifications.fetchUsers.error.message")})):n((0,i.V_)({description:t("console:manage.features.users.notifications.fetchUsers.genericError.description"),level:a.QU.ERROR,message:t("console:manage.features.users.notifications.fetchUsers.genericError.message")}))})).finally((function(){z(!1)}))};(0,l.useEffect)((function(){N&&(B(),Z(!1))}),[N]),(0,l.useEffect)((function(){B()}),[]);var _=function(e){return A===e?"mr-2 invite-selection selected":"mr-2 invite-selection"};return l.createElement(o.Xg,{title:t("console:manage.pages.invite.title"),description:t("console:manage.pages.invite.subTitle")},l.createElement(c.Z,null,l.createElement(c.Z.Row,null,l.createElement(c.Z.Column,{mobile:16,tablet:14,computer:14},l.createElement(d.Z.Group,null,l.createElement(d.Z,{link:!1,as:"div",className:"basic-card",onClick:function(){return S(r.ONBOARD)}},l.createElement(d.Z.Content,null,l.createElement(m.Z,{className:_(r.ONBOARD),checked:A===r.ONBOARD}),t("console:manage.features.invite.subSelection.onBoard"))),l.createElement(d.Z,{link:!1,as:"div",className:"basic-card",onClick:function(){return S(r.INVITE)}},l.createElement(d.Z.Content,null,l.createElement(m.Z,{className:_(r.INVITE),checked:A===r.INVITE}),t("console:manage.features.invite.subSelection.invitees"))))),!V&&l.createElement(c.Z.Column,{mobile:16,tablet:3,computer:2,className:"invite-button",floated:"right"},l.createElement(o.KM,{"data-testid":"user-mgt-user-list-add-user-button",onClick:function(){U(!0)},floated:"right"},l.createElement(f.Z,{name:"add"}),t("console:manage.features.invite.inviteButton"))))),l.createElement(v.Z,{hidden:!0}),A===r.INVITE&&l.createElement(p.default,{updateInviteList:N,setUpdateInviteList:Z,setHideAddWizardButton:W,setShowWizard:U,setTotalAdminDevList:k,totalAdminDevList:j,isUserListRequestLoading:T}),A===r.ONBOARD&&l.createElement(g.default,null),R&&l.createElement(y.AddAdminDeveloperWizard,{setUserListRequestLoading:z,"data-testid":"user-mgt-add-user-wizard-modal",closeWizard:function(){U(!1)},updateInviteListWizard:function(){z(!0),Z(!0),S(r.INVITE)}}))}},65930:(e,t,n)=>{n.r(t),n.d(t,{AddAdminDeveloperWizard:()=>g});var r=n(14603),a=n(90268),i=n(13318),o=n(81816),l=n(52983),s=n(9202),u=n(54221),c=n(21921),d=n(94635),m=n(19092),f=n(78304);function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,i,o,l=[],s=!0,u=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(e){u=!0,a=e}finally{try{if(!s&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw a}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var g=function(e){var t=e.closeWizard,n=e.updateInviteListWizard,p=e.setUserListRequestLoading,g=e["data-testid"],b=(0,s.$)().t,y=(0,u.I0)(),E=v((0,i.cC)(),2),h=E[0],I=E[1],A=v((0,o.IK)(),3),S=A[0],O=(A[1],A[2]),R=v((0,l.useState)(!1),2),U=R[0],w=R[1];return l.createElement(c.Z,{"data-testid":g,open:!0,className:"wizard application-create-wizard",dimmer:"blurring",size:"small",onClose:t,closeOnDimmerClick:!1,closeOnEscape:!0},l.createElement(c.Z.Header,null,b("console:manage.features.invite.form.sendmail.title"),l.createElement(o.X6,{as:"h6",subHeading:!0},b("console:manage.features.invite.form.sendmail.subTitle"))),l.createElement(c.Z.Content,{className:"content-container",scrolling:!0},S&&O,l.createElement(m.AddUser,{triggerSubmit:h,onSubmit:function(e){return i=e,p(!0),void(null!=i&&(w(!0),(0,f.sendInvite)(i).then((function(){y((0,a.V_)({description:b("console:manage.features.invite.notifications.sendInvite.success.description"),level:r.QU.SUCCESS,message:b("console:manage.features.invite.notifications.sendInvite.success.message")})),n(),t()})).catch((function(e){e.response&&401!==e.response.status?e.response&&e.response.data&&e.response.data.detail?(t(),y((0,a.V_)({description:b("console:manage.features.invite.notifications.sendInvite.error.description",{description:e.response.data.detail}),level:r.QU.ERROR,message:b("console:manage.features.invite.notifications.sendInvite.error.message")}))):(t(),y((0,a.V_)({description:b("console:manage.features.invite.notifications.sendInvite.genericError.description"),level:r.QU.ERROR,message:b("console:manage.features.invite.notifications.sendInvite.genericError.message")}))):(t(),y((0,a.V_)({description:b("console:manage.features.invite.notifications.sendInvite.error.description"),level:r.QU.ERROR,message:b("console:manage.features.invite.notifications.sendInvite.error.message")})))})).finally((function(){w(!1)}))));var i}})),l.createElement(c.Z.Actions,null,l.createElement(d.Z,null,l.createElement(d.Z.Row,{column:1},l.createElement(d.Z.Column,{mobile:8,tablet:8,computer:8},l.createElement(o.Qj,{"data-testid":"".concat(g,"-cancel-button"),floated:"left",onClick:function(){return t()}},b("common:cancel"))),l.createElement(d.Z.Column,{mobile:8,tablet:8,computer:8},l.createElement(o.KM,{"data-testid":"".concat(g,"-finish-button"),floated:"right",loading:U,disabled:U,onClick:function(){I()}},"Invite"))))))}},19092:(e,t,n)=>{n.r(t),n.d(t,{AddUser:()=>f});var r=n(13318),a=n(81816),i=n(53337),o=n(52983),l=n(9202),s=n(94635),u=n(75917),c=n(49238);function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,i,o,l=[],s=!0,u=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(e){u=!0,a=e}finally{try{if(!s&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw a}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var f=function(e){var t=e.triggerSubmit,n=e.onSubmit,m=d((0,o.useState)([]),2),f=m[0],v=m[1],p=d((0,o.useState)(!1),2),g=p[0],b=p[1],y=(0,l.$)().t;(0,o.useEffect)((function(){var e=[],t={key:null,text:"",value:""};0===f.length&&(b(!0),(0,c.Sd)(null).then((function(n){n.data.Resources.map((function(n,r){"system"!==n.displayName&&"everyone"!==n.displayName&&(t={key:r,text:n.displayName,value:n.displayName},e.push(t))})),v(e)})).finally((function(){b(!1)}))),v(e)}),[]);var E;return o.createElement(o.Fragment,null,!g&&o.createElement(r.Es,{"data-testid":"user-mgt-add-user-form",onSubmit:function(e){n(function(e){var r={roles:[e.get("role").toString()],email:e.get("email").toString()};t&&n(r)}(e))},submitState:t},o.createElement(s.Z,null,o.createElement(s.Z.Row,{columns:1},o.createElement(s.Z.Column,{mobile:16,tablet:16,computer:12},o.createElement(r.gN,{"data-testid":"user-mgt-add-user-form-email-input",label:y("console:manage.features.user.forms.addUserForm.inputs.email.label"),name:"email",placeholder:y("console:manage.features.user.forms.addUserForm.inputs.email.placeholder"),required:!0,requiredErrorMessage:y("console:manage.features.user.forms.addUserForm.inputs.email.validations.empty"),validation:function(e,t){i.I.email(e)||(t.isValid=!1,t.errorMessages.push(y("console:manage.features.user.forms.addUserForm.inputs.email.validations.invalid").toString()))},type:"email",tabIndex:5,maxLength:50}))),o.createElement(s.Z.Row,{columns:1},o.createElement(s.Z.Column,{mobile:16,tablet:16,computer:12},o.createElement(r.gN,{"data-testid":"user-mgt-add-user-form-domain-dropdown",type:"dropdown",label:"Role",name:"role",children:f,requiredErrorMessage:y("console:manage.features.user.forms.addUserForm.inputs.domain.validations.empty"),required:!0,value:null===(E=f[0])||void 0===E?void 0:E.value,tabIndex:1}),o.createElement(a.kW,null,"Select a role to assign to the user. The access level depends on role permissions."))),o.createElement(u.Z,{hidden:!0}))))}},8473:(e,t,n)=>{n.r(t),n.d(t,{AddAdminDeveloperWizard:()=>r.AddAdminDeveloperWizard,AddUser:()=>a.AddUser});var r=n(65930),a=n(19092)}}]);