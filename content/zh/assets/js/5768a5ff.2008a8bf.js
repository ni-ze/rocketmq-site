"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[7074],{3905:(e,t,s)=>{s.d(t,{Zo:()=>n,kt:()=>k});var a=s(67294);function r(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function i(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function o(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?i(Object(s),!0).forEach((function(t){r(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function l(e,t){if(null==e)return{};var s,a,r=function(e,t){if(null==e)return{};var s,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)s=i[a],t.indexOf(s)>=0||(r[s]=e[s]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)s=i[a],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}var c=a.createContext({}),h=function(e){var t=a.useContext(c),s=t;return e&&(s="function"==typeof e?e(t):o(o({},t),e)),s},n=function(e){var t=h(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var s=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,n=l(e,["components","mdxType","originalType","parentName"]),u=h(s),p=r,k=u["".concat(c,".").concat(p)]||u[p]||m[p]||i;return s?a.createElement(k,o(o({ref:t},n),{},{components:s})):a.createElement(k,o({ref:t},n))}));function k(e,t){var s=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=s.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var h=2;h<i;h++)o[h]=s[h];return a.createElement.apply(null,o)}return a.createElement.apply(null,s)}p.displayName="MDXCreateElement"},90446:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var a=s(87462),r=(s(67294),s(3905));const i={title:"Release Notes - Apache RocketMQ - Version 4.9.3",categories:["Release_Notes"],tags:["Release_Notes","RocketMQ","Version"]},o=void 0,l={permalink:"/zh/release-notes/2022/03/04/4.9.3",source:"@site/release-notes/2022-03-04-4.9.3.md",title:"Release Notes - Apache RocketMQ - Version 4.9.3",description:"* Source: rocketmq-all-4.9.3-source-release.zip [PGP] [SHA512]",date:"2022-03-04T00:00:00.000Z",formattedDate:"2022\u5e743\u67084\u65e5",tags:[{label:"Release_Notes",permalink:"/zh/release-notes/tags/release-notes"},{label:"RocketMQ",permalink:"/zh/release-notes/tags/rocket-mq"},{label:"Version",permalink:"/zh/release-notes/tags/version"}],readingTime:5.43,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Release Notes - Apache RocketMQ - Version 4.9.3",categories:["Release_Notes"],tags:["Release_Notes","RocketMQ","Version"]},prevItem:{title:"Release Notes - Apache RocketMQ - Version 5.0.0-ALPHA",permalink:"/zh/release-notes/2022/03/15/5.0.0-ALPHA"},nextItem:{title:"Release Notes - Apache RocketMQ - Version 4.9.4",permalink:"/zh/release-notes/2022/03/04/4.9.4"}},c={authorsImageUrls:[]},h=[{value:"Feature",id:"feature",level:2},{value:"Improvement",id:"improvement",level:2},{value:"Bug",id:"bug",level:2}],n={toc:h},u="wrapper";function m(e){let{components:t,...s}=e;return(0,r.kt)(u,(0,a.Z)({},n,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Download the 4.9.3 release",type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Source: ",(0,r.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.9.3/rocketmq-all-4.9.3-source-release.zip"},"rocketmq-all-4.9.3-source-release.zip")," [",(0,r.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.9.3/rocketmq-all-4.9.3-source-release.zip.asc"},"PGP"),"] [",(0,r.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.9.3/rocketmq-all-4.9.3-source-release.zip.sha512"},"SHA512"),"]"),(0,r.kt)("li",{parentName:"ul"},"Binary: ",(0,r.kt)("a",{parentName:"li",href:"https://archive.apache.org/dyn/closer.cgi?path=rocketmq/4.9.3/rocketmq-all-4.9.3-bin-release.zip"},"rocketmq-all-4.9.3-bin-release.zip")," [",(0,r.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.9.3/rocketmq-all-4.9.3-bin-release.zip.asc"},"PGP"),"] [",(0,r.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.9.3/rocketmq-all-4.9.3-bin-release.zip.sha512"},"SHA512"),"]"))),(0,r.kt)("p",null,"Below is a summary of the issues addressed in the 4.9.3 release of RocketMQ. For full documentation of the release, a guide to get started, please refer to ",(0,r.kt)("a",{href:"/docs/quickStart/01quickstart/"},"Quick Start"),"."),(0,r.kt)("h2",{id:"feature"},"Feature"),(0,r.kt)("ul",null,(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/pull/1085"},"RIP-9"),"] - [RIP-9] add DefaultPullConsumer api doc"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/pull/3694"},"RIP-28"),"] - [RIP-28] light message queue(LMQ)"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/2986"},"ISSUE-2986"),"] - [ISSUE-2986] - Support for multiple ACL files in a fixed directory")),(0,r.kt)("h2",{id:"improvement"},"Improvement"),(0,r.kt)("ul",null,(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3585"},"ISSUE-3585"),"] - [ISSUE-3585] - [Part F] eliminate regex match in topic/group name check"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3585"},"ISSUE-3585"),"] - [ISSUE-3585] - [Part H] Avoid unnecessary StringBuilder resizing on critical path"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3585"},"ISSUE-3585"),"] - [ISSUE-3585] - [Part J] Use MappedByteBuffer instead of FileChannel to \u2026"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3223"},"ISSUE-3223"),"] - [ISSUE-3223] - Optimize  startup script to support greater jdk version"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3449"},"ISSUE-3449"),"] - [ISSUE-3449] - Delayed message supports asynchronous delivery"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3487"},"ISSUE-3487"),"] - [ISSUE-3487] - Benchmark supports custom AK/SK"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3832"},"ISSUE-3832"),"] - [ISSUE-3832] - in order to improve the performance by change the variable location of queueId"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3827"},"ISSUE-3827"),"] - [ISSUE-3827] - Improve Performance of transactional message and schedule message"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3173"},"ISSUE-3173"),"] - [ISSUE-3173] - Isolate Broker logs when multiple Broker services are deployed on the same machine."),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3825"},"ISSUE-3825"),"] - [ISSUE-3825] - Use default SO_SNDBUF/SO_RCVBUF/WRITE_BUFFER_WATER_MARK value"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3818"},"ISSUE-3818"),"] - [ISSUE-3818] - update guava to 31.0.1-jre"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3812"},"ISSUE-3812"),"] - [ISSUE-3812] - DefaultMQProducer#sendKernelImpl Line760 tranMsg does not need to check for null when using Boolean.parseBoolean()"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/pull/3695"},"PR-3695"),"] - [PR-3695] Remove useless code"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/pull/3850"},"PR-3850"),"] - [PR-3850] Re-enable testing on ARM64"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/pull/3762"},"PR-3762"),"] - [PR-3762] Avoid new lines in log"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/pull/3269"},"PR-3269"),"] - [PR-3269] add defaultRequestProcessor test"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3674"},"PR-3674"),"] - [PR-3674] add tests for computePullFromWhereWithException"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3674"},"ISSUE-3674"),"] - [ISSUE-3674] Add unit test for AllocateMessageQueueAveragelyByCircle"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/1665"},"ISSUE-1665"),"] - [ISSUE-1665] - Add more unit test for Validators"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3674"},"ISSUE-3674"),"] - [ISSUE-3674] - add tests for AllocateMessageQueueAveragely"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3602"},"ISSUE-3602"),"] - [ISSUE-3602] - add AdminBrokerProcessor Test"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3674"},"ISSUE-3674"),"] - [ISSUE-3674] - Improve the test cases of the tools module"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3724"},"ISSUE-3724"),"] - [ISSUE-3724] - : Polish the unit test of class ConsumeMessageConcurrentlyService"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/pull/3214"},"PR-3214"),"] - [PR-3214] optimize namesrv default address docs"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3692"},"ISSUE-3692"),"] - [ISSUE-3692] - docs: Modify the title content about the message query documentation."),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3757"},"ISSUE-3757"),"] - [ISSUE-3757] - docs: Polish the document 'Design_Query.md'."),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3801"},"ISSUE-3801"),"] - [ISSUE-3801] - Polish the document 'CLITools.md'."),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3794"},"ISSUE-3794"),"] - [ISSUE-3794] - add DefaultMQPullConsumer document specification"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3774"},"ISSUE-3774"),"] - [ISSUE-3774] - docs: Polish the document 'Example_Transaction.md'."),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3424"},"ISSUE-3424"),"] - [ISSUE-3424] - Polish the doc for tracing parts."),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3550"},"ISSUE-3550"),"] - [ISSUE-3550] - doc:fix typo in readme"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3782"},"ISSUE-3782"),"] - [ISSUE-3782] - docs: Fix the default value of parameter 'sendMsgTimeout'."),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3863"},"ISSUE-3863"),"] - [ISSUE-3863] - Updated Notice file to 2022"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3853"},"ISSUE-3853"),"] - [ISSUE-3853] - add log for interruptedException"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3852"},"ISSUE-3852"),"] - [ISSUE-3852] - Move the Logappender module to external"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3836"},"ISSUE-3836"),"] - [ISSUE-3836] - depreciated unused class"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3797"},"ISSUE-3797"),"] - [ISSUE-3797] - Improve DefaultMQProducerImpl code"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3789"},"ISSUE-3789"),"] - [ISSUE-3789] - optimize: Tag the name of  consuming thread whith consumeGroup."),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3773"},"ISSUE-3773"),"] - [ISSUE-3773] - Adding exception message with broker addr when occuring broker connect timeout"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3720"},"ISSUE-3720"),"] - [ISSUE-3720] - perf: avoid multiple expansion when the number of elements in the MessageConst class is determined"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3696"},"ISSUE-3696"),"] - [ISSUE-3696] - Optimize the query consumer connection display"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3684"},"ISSUE-3684"),"] - [ISSUE-3684] - change client jdk version to 1.6"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3539"},"ISSUE-3539"),"] - [ISSUE-3539] - Add parameter verification"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3651"},"ISSUE-3651"),"] - [ISSUE-3651] - for add netty channel option WRITE_BUFFER_WATER_MARK"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3642"},"ISSUE-3642"),"] - [ISSUE-3642] - Display GID and Topic with namespace"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3644"},"ISSUE-3644"),"] - [ISSUE-3644] - exchange parameters"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3645"},"ISSUE-3645"),"] - [ISSUE-3645] - Remove TBW102 topic not found warn log in rocketmq-clie\u2026"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3622"},"ISSUE-3622"),"] - [ISSUE-3622] - bump up log4j-slf4j-impl version to 2.15.0"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3604"},"ISSUE-3604"),"] - [ISSUE-3604] - Some important interface methods add comment"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3587"},"ISSUE-3587"),"] - [ISSUE-3587] - Unnecessary boxing of primitives"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3593"},"ISSUE-3593"),"] - [ISSUE-3593] - entrySet() replace keySet()"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3564"},"ISSUE-3564"),"] - [ISSUE-3564] - Enclose namesrvAddr in example of mqadmin tool by quotation marks"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3565"},"ISSUE-3565"),"] - [ISSUE-3565] - Removing message filter impldev"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3558"},"ISSUE-3558"),"] - [ISSUE-3558] - Clear spelling errors in comments in quickstart"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3560"},"ISSUE-3560"),"] - [ISSUE-3560] - remove deprecated status in the orderly consumer examples."),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3467"},"ISSUE-3467"),"] - [ISSUE-3467] - Fail fast on loading files with error mappedFileSize"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3424"},"ISSUE-3424"),"] - [ISSUE-3424] - Validators.checkMessage() is used twice."),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3370"},"ISSUE-3370"),"] - [ISSUE-3370] - group same Exceptions"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3286"},"ISSUE-3286"),"] - [ISSUE-3286] - replace Timer with ScheduledExecutorService"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3048"},"ISSUE-3048"),"] - [ISSUE-3048] - add example of OnewayProducer and ScheduledMessage"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3015"},"ISSUE-3015"),"] - [ISSUE-3015] - when slaveAckOffset greater than local commitLog offset, break \u2026"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/2969"},"ISSUE-2969"),"] - [ISSUE-2969] - Add a skip accumulation message command in mqadmin."),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/2580"},"ISSUE-2580"),"] - [ISSUE-2580] - Check producerTable or consumerTable is empty when updateTopicRouteInfoFromNameServer")),(0,r.kt)("h2",{id:"bug"},"Bug"),(0,r.kt)("ul",null,(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3860"},"ISSUE-3860"),"] - [ISSUE-3860] - fix wrong use of scheduleAtFixedRate in client code"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3551"},"ISSUE-3551"),"] - [ISSUE-3551] - Fix admin cloneoffset"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3527"},"ISSUE-3527"),"] - [ISSUE-3527] - Fix some request header setting errors and naming issues"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/2516"},"ISSUE-2516"),"] - [ISSUE-2516] -  Fix the value of sendThreadPoolQueueHeadWaitTimeMills is 0 most of the time"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3579"},"ISSUE-3579"),"] - [ISSUE-3579] - Fix spelling mistake in getter/setter method of mQClientFactory"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/pull/3663"},"PR-3603"),"] - [PR-3603] Fix spelling error in DefaultMessageStore"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3666"},"ISSUE-3666"),"] - [ISSUE-3666] - fix CI error in RIP-28 at getmQClientFactory"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3666"},"ISSUE-3666"),"] - [ISSUE-3666] - fix build error in RIP-28 at getmQclientFactory"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3687"},"ISSUE-3687"),"] - [ISSUE-3687] - Fix wrong method comment about transaction message."),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3685"},"ISSUE-3685"),"] - [ISSUE-3685] - Fix param spelling error"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3630"},"ISSUE-3630"),"] - [ISSUE-3630] - Fix the bug that the broker will hang after polish the headWaitTimeMills method"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3601"},"ISSUE-3601"),"] - [ISSUE-3601] - Fix dledger put batch msg stats bug"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/2706"},"ISSUE-2706"),"] - [ISSUE-2706] - Fix the problem of returning SEND_OK after flush failed"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3394"},"ISSUE-3394"),"] - [ISSUE-3394] - fix duplicate keys in trace message"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3476"},"ISSUE-3476"),"] - [ISSUE-3476] - Fix last separator of properties string is missing when using batch send"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3430"},"ISSUE-3430"),"] - [ISSUE-3430] - fix the problem that setting parameter mqClientApiTimeout doesn't take effect"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/951"},"ISSUE-951"),"] - [ISSUE-951] - Fixed an incorrect offset problem in the ResetOffsetByTimeCommand"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3603"},"ISSUE-3603"),"] - [ISSUE-3603] - Fix(client): fetch and commit offset need to use master broker firstly"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3613"},"ISSUE-3613"),"] - [ISSUE-3613] - bug fix, solve message hash conflict in index file"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3786"},"ISSUE-3786"),"] - [ISSUE-3786] - fix: The length of properties value should be checked before converting them to short."),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3556"},"ISSUE-3556"),"] - [ISSUE-3556] - Fix:When broker is down, rocketmq client can not retry under Async send model"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3453"},"ISSUE-3453"),"] - [ISSUE-3453] - Producer cannot shutdown completely")))}m.isMDXComponent=!0}}]);