"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[3890],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),d=o,h=u["".concat(c,".").concat(d)]||u[d]||m[d]||n;return r?a.createElement(h,s(s({ref:t},p),{},{components:r})):a.createElement(h,s({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<n;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},95316:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var a=r(87462),o=(r(67294),r(3905));const n={title:"Release Notes - Apache RocketMQ Streams - Version 1.0.0-preview",categories:["Release_Notes"],tags:["RocketMQ_Streams"]},s=void 0,i={permalink:"/zh/release-notes/2022/01/18/release-notes-rocketmq-streams-1.0.0-preview",source:"@site/release-notes/2022-01-18-release-notes-rocketmq-streams-1.0.0-preview.md",title:"Release Notes - Apache RocketMQ Streams - Version 1.0.0-preview",description:"* Source: rocketmq-streams-1.0.0-preview.zip [PGP] [SHA512]",date:"2022-01-18T00:00:00.000Z",formattedDate:"2022\u5e741\u670818\u65e5",tags:[{label:"RocketMQ_Streams",permalink:"/zh/release-notes/tags/rocket-mq-streams"}],readingTime:1.04,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Release Notes - Apache RocketMQ Streams - Version 1.0.0-preview",categories:["Release_Notes"],tags:["RocketMQ_Streams"]},prevItem:{title:"Release Notes - Apache RocketMQ - Version 4.9.4",permalink:"/zh/release-notes/2022/03/04/4.9.4"},nextItem:{title:"Release Notes - Apache RocketMQ - Version 4.9.2",permalink:"/zh/release-notes/2021/10/26/4.9.2"}},c={authorsImageUrls:[]},l=[{value:"Apache RocketMQ Streams",id:"apache-rocketmq-streams",level:2}],p={toc:l};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Download",type:"tip"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Source: ",(0,o.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/rocketmq-streams/1.0.0-preview/rocketmq-streams-1.0.0-preview.zip"},"rocketmq-streams-1.0.0-preview.zip")," [",(0,o.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/rocketmq-streams/1.0.0-preview/rocketmq-streams-1.0.0-preview.zip.asc"},"PGP"),"] [",(0,o.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/rocketmq-streams/1.0.0-preview/rocketmq-streams-1.0.0-preview.zip.sha512"},"SHA512"),"]"))),(0,o.kt)("p",null,"Below is a summary of the issues addressed in the 1.0.0-preview release of RocketMQ Streams. For full documentation of the release, a guide to get started, please refer to ",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq-streams"},"Quick Start"),"."),(0,o.kt)("h2",{id:"apache-rocketmq-streams"},"Apache RocketMQ Streams"),(0,o.kt)("p",null,"With the popularization and development of mobile internet and cloud computing technologies in all walks of life, big data computing has been deeply rooted in the hearts of the people, the most common ones are flink, spark, etc. These big data frameworks adopt a centralized Master-Slave architecture, which is heavy in dependence and deployment, and each task also has a large overhead and a large usage cost. RocketMQ Streams focuses on building a lightweight computing engine. Except for message queues, it has no additional dependencies. It has made a lot of optimizations on filtering scenarios. The performance is improved by 3-5 times and resources are saved by 50%-80%."),(0,o.kt)("p",null,"RocketMQ Streams is suitable for scenarios with large data volume -> high filtering -> light window computing. The core builds light resources and high performance advantages. It has great advantages in resource sensitive scenarios. The minimum 1core and 1g can be deployed. Recommended application scenarios (safe , Risk control, edge computing, message queue flow computing)."))}m.isMDXComponent=!0}}]);