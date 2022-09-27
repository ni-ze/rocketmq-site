"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[3337],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),g=o,d=u["".concat(s,".").concat(g)]||u[g]||m[g]||a;return r?n.createElement(d,c(c({ref:t},p),{},{components:r})):n.createElement(d,c({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},59565:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={title:"Release Notes - Apache RocketMQ Client Go- Version 2.1.1",categories:["Release_Notes"],tags:["RocketMQ_Client_Go"]},c=void 0,i={permalink:"/en/release-notes/2022/07/25/release-notes-rocketmq-client-go-2.1.1",source:"@site/release-notes/2022-07-25-release-notes-rocketmq-client-go-2.1.1.md",title:"Release Notes - Apache RocketMQ Client Go- Version 2.1.1",description:"* Source: rocketmq-client-go-2.1.1-source-release.tar.gz [PGP] [SHA512]",date:"2022-07-25T00:00:00.000Z",formattedDate:"July 25, 2022",tags:[{label:"RocketMQ_Client_Go",permalink:"/en/release-notes/tags/rocket-mq-client-go"}],readingTime:3.8,truncated:!0,authors:[],frontMatter:{title:"Release Notes - Apache RocketMQ Client Go- Version 2.1.1",categories:["Release_Notes"],tags:["RocketMQ_Client_Go"]},prevItem:{title:"Release Notes - Apache RocketMQ - Version 5.0.0",permalink:"/en/release-notes/2022/09/09/5.0.0"},nextItem:{title:"Release Notes - Apache RocketMQ Streams - Version 1.0.1-preview",permalink:"/en/release-notes/2022/04/18/release-notes-rocketmq-streams-1.0.1-preview"}},s={authorsImageUrls:[]},l=[],p={toc:l};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Download")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"Source: ",(0,o.kt)("a",{parentName:"li",href:"https://www.apache.org/dyn/closer.cgi?path=rocketmq/rocketmq-client-go/2.1.1/rocketmq-client-go-2.1.1-source-release.tar.gz"},"rocketmq-client-go-2.1.1-source-release.tar.gz")," [",(0,o.kt)("a",{parentName:"li",href:"https://www.apache.org/dist/rocketmq/rocketmq-client-go/2.1.1/rocketmq-client-go-2.1.1-source-release.tar.gz.asc"},"PGP"),"] [",(0,o.kt)("a",{parentName:"li",href:"https://www.apache.org/dist/rocketmq/rocketmq-client-go/2.1.1/rocketmq-client-go-2.1.1-source-release.tar.gz.sha512"},"SHA512"),"]")))))}m.isMDXComponent=!0}}]);