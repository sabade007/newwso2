"use strict";(self.webpackChunk_wso2is_console=self.webpackChunk_wso2is_console||[]).push([[29537],{29537:(e,t,n)=>{n.r(t),n.d(t,{AddAdminUserBasic:()=>N});var r=n(13318),a=n(81816),o=n(53337),i=n(36382),l=n(67127),s=n(34936),u=n(52983),c=n(9202),m=n(97860),d=n(94635),f=n(75917),p=n(30640),y=n(27696),v=n(49238),h=n(17643),g=n(67680),b=n(99839),S=n(28438);function E(e){return function(e){if(Array.isArray(e))return w(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||A(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,i,l=[],s=!0,u=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(e){u=!0,a=e}finally{try{if(!s&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw a}}return l}}(e,t)||A(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){if(e){if("string"==typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?w(e,t):void 0}}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var N=function(e){var t=e.administratorType,n=e.triggerSubmit,w=e.onSubmit,N=e.setFinishButtonDisabled,x=e["data-componentid"],U=I((0,u.useState)([]),2),C=U[0],R=U[1],T=I((0,u.useState)([]),2),L=T[0],k=T[1],M=I((0,u.useState)([]),2),Z=M[0],P=M[1],F=I((0,u.useState)([]),2),_=F[0],j=F[1],O=I((0,u.useState)(!1),2),q=O[0],z=O[1],D=I((0,u.useState)(!1),2),V=D[0],B=D[1],Q=I((0,u.useState)(0),2),W=Q[0],X=Q[1],$=I((0,u.useState)(void 0),2),H=$[0],J=$[1],G=I((0,u.useState)(""),2),K=G[0],Y=G[1],ee=I((0,u.useState)(0),1)[0],te=(0,c.$)().t,ne=(0,a.fQ)().getLink,re=te("console:manage.features.users.guestUsers.fields.username.validations.regExViolation"),ae=y.lD.getInstance();(0,u.useEffect)((function(){t===b.AdminAccountTypes.INTERNAL&&(X(p.ru.DEFAULT_RESOURCE_LIST_ITEM_LIMIT),J(new Map([["name","name"],["emails","emails"],["roles","roles"],["userName","userName"],["id",""],["profileUrl","profileUrl"],["meta.lastModified","meta.lastModified"],["meta.created",""]])));var e=[],n={key:0,text:"",value:""};0===C.length&&(B(!0),(0,v.Sd)(null).then((function(t){k(t.data.Resources),t.data.Resources.map((function(t,r){var a,o,i;"system"!==t.displayName&&"everyone"!==t.displayName&&"selfsignup"!==t.displayName&&(null===(a=t.displayName)||void 0===a||null===(o=a.split("/"))||void 0===o?void 0:o.length)<2&&"Application"!==(null===(i=t.displayName)||void 0===i?void 0:i.split("/")[0])&&(n={key:r,text:t.displayName,value:t.displayName},e.push(n))})),R(e)})).finally((function(){B(!1)}))),R(e)}),[]),(0,u.useEffect)((function(){if(H){var e=ie(H.values());if((0,l.Z)(K))return void P([]);le(W,ee,K,e,null)}}),[ee,W,K]),(0,u.useEffect)((function(){t===b.AdminAccountTypes.INTERNAL&&N((0,l.Z)(_))}),[_]);var oe,ie=function(e){var t,n=[],r=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=A(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){throw e})),f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){l=!0,o=e})),f:function(){try{i||null==n.return||n.return()}finally{if(l)throw o}}}}(e[Symbol.iterator]());try{for(r.s();!(t=r.n()).done;){var a=t.value;""!==a&&n.push(a)}}catch(o){r.e(o)}finally{r.f()}return n.toString()},le=function(e,t,n,r,a){z(!0),(0,p.Fp)(e,t,n,r,a).then((function(e){var t,n=null==e||null===(t=e.Resources)||void 0===t?void 0:t.filter((function(e){var t;return!(null!==(t=e[g.SCIMConfigs.scim.enterpriseSchema])&&void 0!==t&&t.userSourceId||se(e))}));n?(n.sort((function(e,t){var n,r,a;return null===(n=e.name)||void 0===n||null===(r=n.givenName)||void 0===r?void 0:r.localeCompare(null===(a=t.name)||void 0===a?void 0:a.givenName)})),P(n)):P([])})).finally((function(){z(!1)}))},se=function(e){return e.roles.some((function(e){return e.display===h.administratorConfig.adminRoleName}))},ue=(0,u.useCallback)((0,i.Z)((function(e,t){""===t?Y(""):Y("emails co "+t)}),1e3),[]);return t===b.AdminAccountTypes.INTERNAL?u.createElement(r.Es,{"data-componentid":"".concat(x,"-external-form"),onSubmit:function(){return e=h.administratorConfig.adminRoleName,t=null==L?void 0:L.filter((function(t){return t.displayName==e})),void(n&&w({checkedUsers:_,selectedRoles:t}));var e,t},submitState:n},u.createElement(a.X6,{as:"h5",className:"mt-3"},te("extensions:manage.users.wizard.addAdmin.internal.selectUser")),u.createElement(a.kW,null,te("extensions:manage.users.wizard.addAdmin.internal.hint")),u.createElement(a.IX,{compact:!0,basic:!0,bordered:!0,className:"one-column-selection",selectionComponent:!0,searchPlaceholder:te("extensions:manage.users.wizard.addAdmin.internal.searchPlaceholder"),isLoading:q,iconPosition:"left",handleUnelectedListSearch:function(e,t){var n=t.value;ue(e,n)},"data-componentid":"".concat(x,"-transfer-component")},u.createElement(a.Jv,{selectionComponent:!0,isListEmpty:!q&&(null==Z?void 0:Z.length)<1,isLoading:q,listType:"unselected",emptyPlaceholderContent:(0,l.Z)(K)?te("extensions:manage.users.wizard.addAdmin.internal.emptySearchQueryPlaceholder"):te("extensions:manage.users.wizard.addAdmin.internal.emptySearchResultsPlaceholder"),"data-componentid":"".concat(x,"-unselected-transfer-list"),emptyPlaceholderDefaultContent:te("console:manage.features.transferList.list.emptyPlaceholders.default")},null==Z?void 0:Z.map((function(e,t){var n,r=S.UserManagementUtils.resolveUserListHeader(e),o=S.UserManagementUtils.resolveUserListSubheader(e);return u.createElement(a.qT,{handleItemChange:function(){return function(e){var t=E(_);t.some((function(t){return t.id===e.id}))?(t.splice(t.indexOf(e),1),j(t)):(t.push(e),j(t))}(e)},key:t,listItem:{listItemElement:(n=r,u.createElement(u.Fragment,null,n)),listItemValue:r},listItemId:e.id,listItemIndex:t,isItemChecked:_.some((function(t){return t.id===e.id})),showSecondaryActions:!1,showListSubItem:!0,listSubItem:r!==o&&u.createElement(m.Z,{as:"h6"},u.createElement(m.Z.Content,null,u.createElement(m.Z.Subheader,{"data-componentid":"".concat(x,"-item-sub-heading")},o))),"data-componentid":"".concat(x,"-unselected-transfer-list-item-").concat(t)})}))))):u.createElement(r.Es,{"data-componentid":"".concat(x,"-external-form"),onSubmit:function(e){w(function(e){ae.publish("manage-users-collaborator-role",{type:(0,s.Z)(e.get("role").toString())});var t={email:e.get("email").toString(),roles:[e.get("role").toString()]};n&&w(t)}(e))},submitState:n},V?u.createElement(a.pO,null):u.createElement(d.Z,null,u.createElement(d.Z.Row,{columns:1},u.createElement(d.Z.Column,{mobile:16,tablet:16,computer:12},u.createElement(r.gN,{"data-componentid":"".concat(x,"-external-form-email-input"),label:te("console:manage.features.user.forms.addUserForm.inputs.email.label"),name:"email",placeholder:te("console:manage.features.user.forms.addUserForm.inputs.email.placeholder"),required:!0,requiredErrorMessage:te("console:manage.features.user.forms.addUserForm.inputs.email.validations.empty"),validation:function(e,t){!e||o.I.email(e)&&p.w3.validateInputAgainstRegEx(e,window.AppUtils.getConfig().extensions.collaboratorUsernameRegex)||(t.isValid=!1,t.errorMessages.push(re))},type:"email",tabIndex:5,maxLength:50}))),u.createElement(d.Z.Row,{columns:1},u.createElement(d.Z.Column,{mobile:16,tablet:16,computer:12},u.createElement(r.gN,{"data-componentid":"".concat(x,"-external-form-role-dropdown"),type:"dropdown",label:"Role",name:"role",children:C,requiredErrorMessage:te("console:manage.features.user.forms.addUserForm.inputs.domain.validations.empty"),required:!0,value:null===(oe=C[0])||void 0===oe?void 0:oe.value,tabIndex:1}),u.createElement(a.kW,null,"Select a role to assign to the user. The access level of the user is determined by the role.",u.createElement(a.eb,{link:ne("manage.users.newCollaboratorUser.learnMore")},te("extensions:common.learnMore"))))),u.createElement(f.Z,{hidden:!0})))};N.defaultProps={"data-componentid":"add-admin-user-basic"}}}]);