(self.webpackChunk_wso2is_console=self.webpackChunk_wso2is_console||[]).push([[46084],{46084:(t,e,n)=>{"use strict";n.r(e);var r=n(78169),o=n(52983),c=n(54221),i=n(64430);describe("Test Suite - Integrate Extension Component.",(function(){var t=(0,i.Z)()({helpPanel:{activeTabIndex:0,docStructure:null,docURL:null,visibility:!1}});test.skip("Test proper rendering of Integrate Component",(function(){(0,r.sY)(o.createElement(c.zt,{store:t}))})),test.skip("Test react technology selection button is in document.",(function(){(0,r.sY)(o.createElement(c.zt,{store:t})),expect(r.sp.getByTestId("integrate-technology-react")).toBeInTheDocument()})),test.skip("Test react technology selection button click.",(function(){(0,r.sY)(o.createElement(c.zt,{store:t})),expect(r.sp.getByTestId("integrate-react-config")).toBeInTheDocument()}))}))},59918:t=>{var e,n,r=Function.prototype,o=Object.prototype,c=r.toString,i=o.hasOwnProperty,u=c.call(Object),s=o.toString,a=(e=Object.getPrototypeOf,n=Object,function(t){return e(n(t))});t.exports=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||"[object Object]"!=s.call(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(n){}return e}(t))return!1;var e=a(t);if(null===e)return!0;var n=i.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&c.call(n)==u}},64430:(t,e,n)=>{"use strict";e.Z=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o.applyMiddleware.apply(void 0,function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}(t))((function(){var t=[],n=[];return{getState:function(){return u(e)?e(t):e},getActions:function(){return t},dispatch:function(e){if(!(0,i.default)(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant? Action: '+JSON.stringify(e));t.push(e);for(var r=0;r<n.length;r++)n[r]();return e},clearActions:function(){t=[]},subscribe:function(t){return u(t)&&n.push(t),function(){var e=n.indexOf(t);e<0||n.splice(e,1)}},replaceReducer:function(t){if(!u(t))throw new Error("Expected the nextReducer to be a function.")}}}))()}};var r,o=n(82923),c=n(59918),i=(r=c)&&r.__esModule?r:{default:r};var u=function(t){return"function"==typeof t}}}]);