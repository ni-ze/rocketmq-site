"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[1473],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>p});var s=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,s,o=function(e,t){if(null==e)return{};var a,s,o={},r=Object.keys(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=s.createContext({}),u=function(e){var t=s.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},l=function(e){var t=u(e.components);return s.createElement(c.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=u(a),d=o,p=m["".concat(c,".").concat(d)]||m[d]||g[d]||r;return a?s.createElement(p,n(n({ref:t},l),{},{components:a})):s.createElement(p,n({ref:t},l))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,n=new Array(r);n[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:o,n[1]=i;for(var u=2;u<r;u++)n[u]=a[u];return s.createElement.apply(null,n)}return s.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85042:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var s=a(87462),o=(a(67294),a(3905));const r={},n="Message storage and cleanup",i={unversionedId:"featureBehavior/11messagestorepolicy",id:"version-5.0/featureBehavior/11messagestorepolicy",title:"Message storage and cleanup",description:"This topic describes how Apache RocketMQ stores messages, including storage granularity, determination criteria, and processing policies.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-5.0/04-featureBehavior/11messagestorepolicy.md",sourceDirName:"04-featureBehavior",slug:"/featureBehavior/11messagestorepolicy",permalink:"/docs/featureBehavior/11messagestorepolicy",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/04-featureBehavior/11messagestorepolicy.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"Consumption retry",permalink:"/docs/featureBehavior/10consumerretrypolicy"},next:{title:"\u90e8\u7f72\u65b9\u5f0f",permalink:"/docs/deploymentOperations/15deploy"}},c={},u=[{value:"Background information",id:"background-information",level:2},{value:"Message storage mechanism",id:"message-storage-mechanism",level:2},{value:"Message cleanup mechanism",id:"message-cleanup-mechanism",level:2},{value:"Usage notes",id:"usage-notes",level:2}],l={toc:u};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,s.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"message-storage-and-cleanup"},"Message storage and cleanup"),(0,o.kt)("p",null,"This topic describes how Apache RocketMQ stores messages, including storage granularity, determination criteria, and processing policies."),(0,o.kt)("h2",{id:"background-information"},"Background information"),(0,o.kt)("p",null,"Based on the definition of ",(0,o.kt)("a",{parentName:"p",href:"/docs/domainModel/03messagequeue"},"MessageQueue")," in Apache RocketMQ, messages are stored in queues in the order in which the messages are received by the broker. In theory, the number of messages that a queue can store is unlimited."),(0,o.kt)("p",null,"In actual deployment scenarios, messages cannot be permanently stored because the physical storage space of a broker is limited. Therefore, when you deploy messages, you need to answer three questions: What criteria are used to determine how to store messages on a broker? What granularity is used to manage the stored messages? What measures must be taken when message storage usage exceeds the limit? The message storage and cleanup mechanisms of Apache RocketMQ provide answers to the preceding questions."),(0,o.kt)("p",null,"You can better perform O\\&M by using message storage and cleanup mechanisms based on the following aspects:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"SLA for storage: Storage duration refers to the time period in which users can obtain messages. This feature is suitable for scenarios in which a long consumption period is required, messages are accumulated, and fault recovery is required.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Evaluation and control of storage costs: Apache RocketMQ stores messages on disks. You can evaluate storage space and reserve storage resources in advance."))),(0,o.kt)("h2",{id:"message-storage-mechanism"},"Message storage mechanism"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Working mechanism")),(0,o.kt)("p",null,"Each node of Apache RocketMQ stores messages for a specific period of time. This period of time, known as storage duration, is used to determine how long a message is stored. Messages that are within the storage duration are retained, while messages that exceed the duration limit are cleaned up, regardless of whether they are consumed."),(0,o.kt)("p",null,"The following section describes the items related to the message storage mechanism:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Management granularity: Apache RocketMQ manages message storage duration based on nodes.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Determination criterion: Message storage duration is used as the determination criterion. Compared with message quantity or size, storage duration can help you evaluate the values of messages in a more efficient manner.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Whether message storage is related to consumption status: The message storage duration in Apache RocketMQ starts from the point in time when the message is produced and is not related to consumption status. You can simplify the message storage mechanism by using a unified calculation strategy."))),(0,o.kt)("p",null,"The following figure shows how messages are stored in a queue.",(0,o.kt)("img",{alt:"\u6d88\u606f\u5b58\u50a8",src:a(97818).Z,width:"1304",height:"522"})),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Management granularity")),(0,o.kt)("p",{parentName:"admonition"},"Apache RocketMQ manages storage duration based on broker nodes due to the following reasons:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Advantages of message storage: Apache RocketMQ manages physical data by using a unified two-level organization method that consists of physical log queues and lightweight logical queues. This method provides the benefits of ordered read and write operations, high throughput, and high performance. However, you cannot manage message storage based on topics or queues by using this method.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Capacity assurance and data security: Even though Apache RocketMQ generates independent storage files based on topics or queues, the files share the same underlying storage medium. You can manage storage duration based on topics or queues in a flexible manner. The SLA for storage may not be fulfilled if the storage capacity of the cluster becomes insufficient. If you want to manage messages in a secure manner, the best way is to store messages by using different storage durations in different clusters.")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Relationship between message storage and consumption status")),(0,o.kt)("p",null,"Apache RocketMQ manages message storage duration in a centralized manner, regardless of whether the messages are consumed."),(0,o.kt)("p",null,"Messages may be accumulated in a queue due to inactive consumers or abnormal consumption. There is no effective solution to this problem for the time being. If all messages that are not consumed are retained, the storage space is quickly used up. This affects the speed of read and write operations for new messages."),(0,o.kt)("p",null,"Consumers can manage messages based on storage duration to determine the lifecycle of each message. Consumers can consume a message any time during the storage duration, or consume the message multiple times by using the ",(0,o.kt)("a",{parentName:"p",href:"/docs/featureBehavior/09consumerprogress"},"Reset a consumer offset")," feature."),(0,o.kt)("h2",{id:"message-cleanup-mechanism"},"Message cleanup mechanism"),(0,o.kt)("p",null,"In Apache RocketMQ, the storage duration of a message is different from the actual storage duration. This is because messages are stored in local disks. When the local disk space becomes insufficient, the system forcibly deletes messages to ensure service stability. As a result, the actual storage duration is shorter than the specified storage duration."),(0,o.kt)("p",null,"The Apache RocketMQ storage system is developed based on the cloud-native technologies of Alibaba Cloud. This allows all instances to use storage space without imposing limits on storage capacity. All messages are stored based on their specified storage duration. You do not need to worry about the deletion of messages due to insufficient storage space."),(0,o.kt)("h2",{id:"usage-notes"},"Usage notes"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Increase the storage duration based on your business requirements")),(0,o.kt)("p",null,"Apache RocketMQ controls whether to retain messages based on storage duration. We recommend that you specify a longer storage duration based on your business requirements. A longer storage duration allows you more room to perform operations for emergency fault recovery, emergency troubleshooting, and message backtracking."))}m.isMDXComponent=!0},97818:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/cleanpolicy-aa812156263be0605a22b9348ebdc22c.png"}}]);