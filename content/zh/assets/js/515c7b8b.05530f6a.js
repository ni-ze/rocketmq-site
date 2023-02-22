"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[2509],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var a=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function n(e,t){if(null==e)return{};var r,a,s=function(e,t){if(null==e)return{};var r,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,u=n(e,["components","mdxType","originalType","parentName"]),p=c(r),m=s,k=p["".concat(l,".").concat(m)]||p[m]||h[m]||o;return r?a.createElement(k,i(i({ref:t},u),{},{components:r})):a.createElement(k,i({ref:t},u))}));function k(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,i=new Array(o);i[0]=m;var n={};for(var l in t)hasOwnProperty.call(t,l)&&(n[l]=t[l]);n.originalType=e,n[p]="string"==typeof e?e:s,i[1]=n;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},73520:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>c});var a=r(87462),s=(r(67294),r(3905));const o={title:"Release Notes - Apache RocketMQ - Version 4.3.0",categories:["Release_Notes"],tags:["Release_Notes","RocketMQ","Version"]},i=void 0,n={permalink:"/zh/release-notes/2018/07/24/4.3.0",source:"@site/release-notes/2018-07-24-4.3.0.md",title:"Release Notes - Apache RocketMQ - Version 4.3.0",description:"* Source: rocketmq-all-4.3.0-source-release.zip [PGP] [MD5] [SHA1]",date:"2018-07-24T00:00:00.000Z",formattedDate:"2018\u5e747\u670824\u65e5",tags:[{label:"Release_Notes",permalink:"/zh/release-notes/tags/release-notes"},{label:"RocketMQ",permalink:"/zh/release-notes/tags/rocket-mq"},{label:"Version",permalink:"/zh/release-notes/tags/version"}],readingTime:1.745,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Release Notes - Apache RocketMQ - Version 4.3.0",categories:["Release_Notes"],tags:["Release_Notes","RocketMQ","Version"]},prevItem:{title:"Release Notes - Apache RocketMQ - Version 4.3.1",permalink:"/zh/release-notes/2018/08/29/4.3.1"},nextItem:{title:"Release Notes - Apache RocketMQ - Version 4.2.0",permalink:"/zh/release-notes/2017/12/13/4.2.0"}},l={authorsImageUrls:[]},c=[{value:"New Feature",id:"new-feature",level:2},{value:"Improvement",id:"improvement",level:2},{value:"Bug",id:"bug",level:2}],u={toc:c},p="wrapper";function h(e){let{components:t,...r}=e;return(0,s.kt)(p,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("admonition",{title:"Download the 4.3.0 release",type:"tip"},(0,s.kt)("ul",{parentName:"admonition"},(0,s.kt)("li",{parentName:"ul"},"Source: ",(0,s.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.3.0/rocketmq-all-4.3.0-source-release.zip"},"rocketmq-all-4.3.0-source-release.zip")," [",(0,s.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.3.0/rocketmq-all-4.3.0-source-release.zip.asc"},"PGP"),"] [",(0,s.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.3.0/rocketmq-all-4.3.0-source-release.zip.md5"},"MD5"),"] [",(0,s.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.3.0/rocketmq-all-4.3.0-source-release.zip.sha1"},"SHA1"),"]"),(0,s.kt)("li",{parentName:"ul"},"Binary: ",(0,s.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.3.0/rocketmq-all-4.3.0-bin-release.zip"},"rocketmq-all-4.3.0-bin-release.zip")," [",(0,s.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.3.0/rocketmq-all-4.3.0-bin-release.zip.asc"},"PGP"),"] [",(0,s.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.3.0/rocketmq-all-4.3.0-bin-release.zip.md5"},"MD5"),"] [",(0,s.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.3.0/rocketmq-all-4.3.0-bin-release.zip.sha1"},"SHA1"),"]"))),(0,s.kt)("p",null,"Below is a summary of the JIRA issues addressed in the 4.3.0 release of RocketMQ. For full documentation of the release, a guide to get started, please refer to ",(0,s.kt)("a",{href:"/docs/quickStart/01quickstart/"},"Quick Start"),"."),(0,s.kt)("h2",{id:"new-feature"},"New Feature"),(0,s.kt)("ul",null,(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://issues.apache.org/jira/browse/ROCKETMQ-203"},"ISSUE-203"),"] -    Add support of IDC-aware allocator in the consumer"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/292"},"ISSUE-292"),"] -         Add support of transactional message")),(0,s.kt)("h2",{id:"improvement"},"Improvement"),(0,s.kt)("ul",null,(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://issues.apache.org/jira/browse/ROCKETMQ-184"},"ISSUE-184"),"] -   Optimize consuming performance when the master crashed out and only slave brokers are available"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://issues.apache.org/jira/projects/ROCKETMQ/issues/ROCKETMQ-308"},"ISSUE-308"),"] -   Increase socket buffer size of name-server to better fit network bandwidth"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://issues.apache.org/jira/browse/ROCKETMQ-311"},"ISSUE-311"),"] -   Add a fast failure mechanism for pulling message requests"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://issues.apache.org/jira/projects/ROCKETMQ/issues/ROCKETMQ-315"},"ISSUE-315"),"] -   Enhance tls mode config"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/314"},"ISSUE-316"),"] -   Use dedicated thread pool for heartbeat handler"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://issues.apache.org/jira/projects/ROCKETMQ/issues/ROCKETMQ-324"},"ISSUE-324"),"] -   Make async callback executor of the producer clients pluggable"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/325"},"ISSUE-325"),"] -     Enhance broker registration performance, and reduce memory footprint"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://issues.apache.org/jira/projects/ROCKETMQ/issues/ROCKETMQ-353"},"ISSUE-353"),"] -         Add send and consume message commands to mqadmin tool belt"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/367"},"ISSUE-367"),"] -     Refactor the logging component to support log4j, log4j2, and logback libraries")),(0,s.kt)("h2",{id:"bug"},"Bug"),(0,s.kt)("ul",null,(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/66"},"ISSUE-66"),"] -   Fix the issue that message body compressed multi times when resending a message."),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/260"},"ISSUE-260"),"] -   Fix the concurrency issue in StoreStatsService, to yield more accurate statistics."),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/276"},"ISSUE-276"),"] -   Fix the issue that the missing the state validation of pull message service before scheduling new pull request"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://issues.apache.org/jira/browse/ROCKETMQ-290"},"ISSUE-290"),"] -   Fix the memory leak issue in WaitNotifyObject#waitingThreadTable"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://issues.apache.org/jira/browse/ROCKETMQ-314"},"ISSUE-314"),"] -   Fix the issue that message queue size not synchonized when message processing timeout"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/321"},"ISSUE-321"),"] -   Fix the concurrency issue in RMQAsyncSendProducer unit test"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://issues.apache.org/jira/browse/ROCKETMQ-323"},"ISSUE-323"),"] -   Fix the issue that semaphore not released after async invocation callback finished"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://issues.apache.org/jira/browse/ROCKETMQ-332"},"ISSUE-332"),"] -   Fix the concurrency issue in MappedFileQueue#findMappedFileByOffset"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://issues.apache.org/jira/browse/ROCKETMQ-336"},"ISSUE-336"),"] -   Fix the wrong format of System.out.printf used in mqadmin"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://issues.apache.org/jira/browse/ROCKETMQ-355"},"ISSUE-355"),"] -   Fix the timeout semantic of async send method")))}h.isMDXComponent=!0}}]);