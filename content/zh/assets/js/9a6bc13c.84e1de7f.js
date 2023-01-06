"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[5045],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),s=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return o.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),g=n,k=m["".concat(i,".").concat(g)]||m[g]||u[g]||a;return r?o.createElement(k,c(c({ref:t},p),{},{components:r})):o.createElement(k,c({ref:t},p))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=g;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[m]="string"==typeof e?e:n,c[1]=l;for(var s=2;s<a;s++)c[s]=r[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,r)}g.displayName="MDXCreateElement"},48602:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=r(87462),n=(r(67294),r(3905));const a={title:"Release Notes - Apache RocketMQ Client Go- Version 2.1.0",categories:["Release_Notes"],tags:["RocketMQ_Client_Go"]},c=void 0,l={permalink:"/zh/release-notes/2021/03/17/release-notes-rocketmq-client-go-2.1.0",source:"@site/release-notes/2021-03-17-release-notes-rocketmq-client-go-2.1.0.md",title:"Release Notes - Apache RocketMQ Client Go- Version 2.1.0",description:"* Source: rocketmq-client-go-2.1.0-source-release.tar.gz [PGP] [SHA512]",date:"2021-03-17T00:00:00.000Z",formattedDate:"2021\u5e743\u670817\u65e5",tags:[{label:"RocketMQ_Client_Go",permalink:"/zh/release-notes/tags/rocket-mq-client-go"}],readingTime:.56,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Release Notes - Apache RocketMQ Client Go- Version 2.1.0",categories:["Release_Notes"],tags:["RocketMQ_Client_Go"]},prevItem:{title:"Release Notes - Apache RocketMQ - Version 4.9.0",permalink:"/zh/release-notes/2021/06/15/4.9.0"},nextItem:{title:"Release Notes - Apache RocketMQ Spring - Version 2.2.0",permalink:"/zh/release-notes/2021/01/08/release-notes-rocketmq-spring-2.2.0"}},i={authorsImageUrls:[]},s=[{value:"Improvement",id:"improvement",level:2}],p={toc:s};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{title:"Download",type:"tip"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Source: ",(0,n.kt)("a",{parentName:"li",href:"https://www.apache.org/dyn/closer.cgi?path=rocketmq/rocketmq-client-go/2.1.0/rocketmq-client-go-2.1.0-source-release.tar.gz"},"rocketmq-client-go-2.1.0-source-release.tar.gz")," [",(0,n.kt)("a",{parentName:"li",href:"https://www.apache.org/dist/rocketmq/rocketmq-client-go/2.1.0/rocketmq-client-go-2.1.0-source-release.tar.gz.asc"},"PGP"),"] [",(0,n.kt)("a",{parentName:"li",href:"https://www.apache.org/dist/rocketmq/rocketmq-client-go/2.1.0/rocketmq-client-go-2.1.0-source-release.tar.gz.sha512"},"SHA512"),"]"))),(0,n.kt)("p",null,"Below is a summary of the issues addressed in the version 2.1.0 release of RocketMQ Client Go. For full documentation of the release, a guide to get started, please refer to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/rocketmq-client-go"},"Quick Start"),"."),(0,n.kt)("h2",{id:"improvement"},"Improvement"),(0,n.kt)("ul",null,(0,n.kt)("li",null,"[",(0,n.kt)("a",{href:"https://github.com/apache/rocketmq-client-go/releases/tag/v2.1.0-rc6"},"v2.1.0-rc6"),"] -  Improvements in rocketmq client go 2.1.0 rc6."),(0,n.kt)("li",null,"[",(0,n.kt)("a",{href:"https://github.com/apache/rocketmq-client-go/releases/tag/v2.1.0-rc5"},"v2.1.0-rc5"),"] -  Improvements in rocketmq client go 2.1.0 rc5."),(0,n.kt)("li",null,"[",(0,n.kt)("a",{href:"https://github.com/apache/rocketmq-client-go/releases/tag/v2.1.0-rc4"},"v2.1.0-rc4"),"] -  Improvements in rocketmq client go 2.1.0 rc4."),(0,n.kt)("li",null,"[",(0,n.kt)("a",{href:"https://github.com/apache/rocketmq-client-go/releases/tag/v2.1.0-rc3"},"v2.1.0-rc3"),"] -  Improvements in rocketmq client go 2.1.0 rc3."),(0,n.kt)("li",null,"[",(0,n.kt)("a",{href:"https://github.com/apache/rocketmq-client-go/releases/tag/v2.1.0-rc2"},"v2.1.0-rc2"),"] -  Improvements in rocketmq client go 2.1.0 rc2."),(0,n.kt)("li",null,"[",(0,n.kt)("a",{href:"https://github.com/apache/rocketmq-client-go/releases/tag/v2.1.0-rc1"},"v2.1.0-rc1"),"] -  Improvements in rocketmq client go 2.1.0 rc1.")))}m.isMDXComponent=!0}}]);