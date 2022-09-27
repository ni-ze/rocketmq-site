"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[9051],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>g});var s=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,s,n=function(e,t){if(null==e)return{};var a,s,n={},o=Object.keys(e);for(s=0;s<o.length;s++)a=o[s],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)a=o[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=s.createContext({}),u=function(e){var t=s.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},l=function(e){var t=u(e.components);return s.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(a),g=n,p=d["".concat(c,".").concat(g)]||d[g]||m[g]||o;return a?s.createElement(p,r(r({ref:t},l),{},{components:a})):s.createElement(p,r({ref:t},l))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,r[1]=i;for(var u=2;u<o;u++)r[u]=a[u];return s.createElement.apply(null,r)}return s.createElement.apply(null,a)}d.displayName="MDXCreateElement"},28966:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var s=a(87462),n=(a(67294),a(3905));const o={},r="Message storage and cleanup",i={unversionedId:"\u529f\u80fd\u884c\u4e3a/11messagestorepolicy",id:"version-5.0/\u529f\u80fd\u884c\u4e3a/11messagestorepolicy",title:"Message storage and cleanup",description:"This topic describes how Apache RocketMQ stores messages, including storage granularity, determination criteria, and processing policies.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-5.0/04-\u529f\u80fd\u884c\u4e3a/11messagestorepolicy.md",sourceDirName:"04-\u529f\u80fd\u884c\u4e3a",slug:"/\u529f\u80fd\u884c\u4e3a/11messagestorepolicy",permalink:"/en/docs/\u529f\u80fd\u884c\u4e3a/11messagestorepolicy",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/04-\u529f\u80fd\u884c\u4e3a/11messagestorepolicy.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"Consumption retry",permalink:"/en/docs/\u529f\u80fd\u884c\u4e3a/10consumerretrypolicy"},next:{title:"\u90e8\u7f72\u65b9\u5f0f",permalink:"/en/docs/\u90e8\u7f72\u8fd0\u7ef4/15deploy"}},c={},u=[{value:"Background information",id:"background-information",level:2},{value:"Message storage mechanism",id:"message-storage-mechanism",level:2},{value:"Message cleanup mechanism",id:"message-cleanup-mechanism",level:2},{value:"Usage notes",id:"usage-notes",level:2}],l={toc:u};function m(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,s.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"message-storage-and-cleanup"},"Message storage and cleanup"),(0,n.kt)("p",null,"This topic describes how Apache RocketMQ stores messages, including storage granularity, determination criteria, and processing policies."),(0,n.kt)("h2",{id:"background-information"},"Background information"),(0,n.kt)("p",null,"Based on the definition of ",(0,n.kt)("a",{parentName:"p",href:"/en/docs/%E9%A2%86%E5%9F%9F%E6%A8%A1%E5%9E%8B/03messagequeue"},"MessageQueue")," in Apache RocketMQ, messages are stored in queues in the order in which the messages are received by the broker. In theory, the number of messages that a queue can store is unlimited."),(0,n.kt)("p",null,"In actual deployment scenarios, messages cannot be permanently stored because the physical storage space of a broker is limited. Therefore, when you deploy messages, you need to answer three questions: What criteria are used to determine how to store messages on a broker? What granularity is used to manage the stored messages? What measures must be taken when message storage usage exceeds the limit? The message storage and cleanup mechanisms of Apache RocketMQ provide answers to the preceding questions."),(0,n.kt)("p",null,"You can better perform O\\&M by using message storage and cleanup mechanisms based on the following aspects:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"SLA for storage: Storage duration refers to the time period in which users can obtain messages. This feature is suitable for scenarios in which a long consumption period is required, messages are accumulated, and fault recovery is required.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Evaluation and control of storage costs: Apache RocketMQ stores messages on disks. You can evaluate storage space and reserve storage resources in advance."))),(0,n.kt)("h2",{id:"message-storage-mechanism"},"Message storage mechanism"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Working mechanism")),(0,n.kt)("p",null,"Each node of Apache RocketMQ stores messages for a specific period of time. This period of time, known as storage duration, is used to determine how long a message is stored. Messages that are within the storage duration are retained, while messages that exceed the duration limit are cleaned up, regardless of whether they are consumed."),(0,n.kt)("p",null,"The following section describes the items related to the message storage mechanism:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Management granularity: Apache RocketMQ manages message storage duration based on nodes.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Determination criterion: Message storage duration is used as the determination criterion. Compared with message quantity or size, storage duration can help you evaluate the values of messages in a more efficient manner.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Whether message storage is related to consumption status: The message storage duration in Apache RocketMQ starts from the point in time when the message is produced and is not related to consumption status. You can simplify the message storage mechanism by using a unified calculation strategy."))),(0,n.kt)("p",null,"The following figure shows how messages are stored in a queue.",(0,n.kt)("img",{alt:"\u6d88\u606f\u5b58\u50a8",src:a(97818).Z,width:"1304",height:"522"})),(0,n.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},(0,n.kt)("strong",{parentName:"p"},"Management granularity")),(0,n.kt)("p",{parentName:"div"},"Apache RocketMQ manages storage duration based on broker nodes due to the following reasons:"),(0,n.kt)("ul",{parentName:"div"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Advantages of message storage: Apache RocketMQ manages physical data by using a unified two-level organization method that consists of physical log queues and lightweight logical queues. This method provides the benefits of ordered read and write operations, high throughput, and high performance. However, you cannot manage message storage based on topics or queues by using this method.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Capacity assurance and data security: Even though Apache RocketMQ generates independent storage files based on topics or queues, the files share the same underlying storage medium. You can manage storage duration based on topics or queues in a flexible manner. The SLA for storage may not be fulfilled if the storage capacity of the cluster becomes insufficient. If you want to manage messages in a secure manner, the best way is to store messages by using different storage durations in different clusters."))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Relationship between message storage and consumption status")),(0,n.kt)("p",null,"Apache RocketMQ manages message storage duration in a centralized manner, regardless of whether the messages are consumed."),(0,n.kt)("p",null,"Messages may be accumulated in a queue due to inactive consumers or abnormal consumption. There is no effective solution to this problem for the time being. If all messages that are not consumed are retained, the storage space is quickly used up. This affects the speed of read and write operations for new messages."),(0,n.kt)("p",null,"Consumers can manage messages based on storage duration to determine the lifecycle of each message. Consumers can consume a message any time during the storage duration, or consume the message multiple times by using the ",(0,n.kt)("a",{parentName:"p",href:"/en/docs/%E5%8A%9F%E8%83%BD%E8%A1%8C%E4%B8%BA/09consumerprogress"},"Reset a consumer offset")," feature."),(0,n.kt)("h2",{id:"message-cleanup-mechanism"},"Message cleanup mechanism"),(0,n.kt)("p",null,"In Apache RocketMQ, the storage duration of a message is different from the actual storage duration. This is because messages are stored in local disks. When the local disk space becomes insufficient, the system forcibly deletes messages to ensure service stability. As a result, the actual storage duration is shorter than the specified storage duration."),(0,n.kt)("p",null,"The Apache RocketMQ storage system is developed based on the cloud-native technologies of Alibaba Cloud. This allows all instances to use storage space without imposing limits on storage capacity. All messages are stored based on their specified storage duration. You do not need to worry about the deletion of messages due to insufficient storage space."),(0,n.kt)("h2",{id:"usage-notes"},"Usage notes"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Increase the storage duration based on your business requirements")),(0,n.kt)("p",null,"Apache RocketMQ controls whether to retain messages based on storage duration. We recommend that you specify a longer storage duration based on your business requirements. A longer storage duration allows you more room to perform operations for emergency fault recovery, emergency troubleshooting, and message backtracking."))}m.isMDXComponent=!0},97818:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/cleanpolicy-aa812156263be0605a22b9348ebdc22c.png"}}]);