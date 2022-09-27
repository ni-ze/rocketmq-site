"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[7591],{3905:(e,n,s)=>{s.d(n,{Zo:()=>u,kt:()=>p});var a=s(67294);function o(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function t(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),s.push.apply(s,a)}return s}function r(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{};n%2?t(Object(s),!0).forEach((function(n){o(e,n,s[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):t(Object(s)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(s,n))}))}return e}function i(e,n){if(null==e)return{};var s,a,o=function(e,n){if(null==e)return{};var s,a,o={},t=Object.keys(e);for(a=0;a<t.length;a++)s=t[a],n.indexOf(s)>=0||(o[s]=e[s]);return o}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(a=0;a<t.length;a++)s=t[a],n.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(o[s]=e[s])}return o}var c=a.createContext({}),l=function(e){var n=a.useContext(c),s=n;return e&&(s="function"==typeof e?e(n):r(r({},n),e)),s},u=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var s=e.components,o=e.mdxType,t=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(s),p=o,g=d["".concat(c,".").concat(p)]||d[p]||m[p]||t;return s?a.createElement(g,r(r({ref:n},u),{},{components:s})):a.createElement(g,r({ref:n},u))}));function p(e,n){var s=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var t=s.length,r=new Array(t);r[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var l=2;l<t;l++)r[l]=s[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,s)}d.displayName="MDXCreateElement"},59299:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>t,metadata:()=>i,toc:()=>l});var a=s(87462),o=(s(67294),s(3905));const t={},r="Load balancing policies for consumers",i={unversionedId:"\u529f\u80fd\u884c\u4e3a/08consumerloadbalance",id:"version-5.0/\u529f\u80fd\u884c\u4e3a/08consumerloadbalance",title:"Load balancing policies for consumers",description:"When consumers in a consumer group pull messages from a Apache RocketMQ topic, a load balancing policy is used to determine how the messages are allocated to the consumers. Load balancing policies improve service concurrency and application scalability. This topic describes the load balancing policies that Apache RocketMQ provides for consumers.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-5.0/04-\u529f\u80fd\u884c\u4e3a/08consumerloadbalance.md",sourceDirName:"04-\u529f\u80fd\u884c\u4e3a",slug:"/\u529f\u80fd\u884c\u4e3a/08consumerloadbalance",permalink:"/en/docs/\u529f\u80fd\u884c\u4e3a/08consumerloadbalance",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/04-\u529f\u80fd\u884c\u4e3a/08consumerloadbalance.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"Message filtering",permalink:"/en/docs/\u529f\u80fd\u884c\u4e3a/07messagefilter"},next:{title:"Consumer progress management",permalink:"/en/docs/\u529f\u80fd\u884c\u4e3a/09consumerprogress"}},c={},l=[{value:"Background information",id:"background-information",level:2},{value:"Broadcast consumption and cluster consumption",id:"broadcast-consumption-and-cluster-consumption",level:2},{value:"Introduction to the load balancing policy for consumers",id:"introduction-to-the-load-balancing-policy-for-consumers",level:2},{value:"Message-based load balancing",id:"message-based-load-balancing",level:2},{value:"Queue-based load balancing",id:"queue-based-load-balancing",level:2},{value:"Version compatibility",id:"version-compatibility",level:2},{value:"Usage notes",id:"usage-notes",level:2}],u={toc:l};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"load-balancing-policies-for-consumers"},"Load balancing policies for consumers"),(0,o.kt)("p",null,"When consumers in a consumer group pull messages from a Apache RocketMQ topic, a load balancing policy is used to determine how the messages are allocated to the consumers. Load balancing policies improve service concurrency and application scalability. This topic describes the load balancing policies that Apache RocketMQ provides for consumers."),(0,o.kt)("h2",{id:"background-information"},"Background information"),(0,o.kt)("p",null,"Familiarizing yourself with the load balancing policies provided by Apache RocketMQ can help you determine the appropriate measures to take when confronted with the following scenarios:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Disaster recovery: You can determine how messages are retried and switched over when local nodes fail.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Message ordering: You can better understand how Apache RocketMQ ensures strict first-in-first-out message ordering.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Horizontal partitioning: You can plan for traffic migration and horizontal scaling operations based on how messages are allocated."))),(0,o.kt)("h2",{id:"broadcast-consumption-and-cluster-consumption"},"Broadcast consumption and cluster consumption"),(0,o.kt)("p",null,"Apache RocketMQ allows multiple consumer groups to subscribe to the same message and each consumer group to initialize multiple consumers. Consumer groups and consumers can be configured to consume messages in the following scenarios:",(0,o.kt)("img",{alt:"Consumption modes",src:s(18477).Z,width:"2375",height:"822"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Broadcast consumption across consumer groups")," : This scenario is illustrated on the left side of the preceding figure. Each consumer group initializes its own consumer who consumes all messages. Messages are delivered to multiple subscribers from topics in a one-to-many relationship."),(0,o.kt)("p",{parentName:"li"},"This mode is typically used in scenarios such as gateway push and configuration push."))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Cluster consumption within a consumer group")," : This scenario is illustrated on the right side of the preceding figure. Each consumer group initializes multiple consumers, and the messages are sent to all consumers in the group. This is useful when you want to implement horizontal traffic partitioning and load balancing within the group."),(0,o.kt)("p",{parentName:"li"},"This mode is suitable for microservice decoupling."))),(0,o.kt)("h2",{id:"introduction-to-the-load-balancing-policy-for-consumers"},"Introduction to the load balancing policy for consumers"),(0,o.kt)("p",null,"In scenarios that use broadcast consumption, load balancing is not required because each consumer group contains only one consumer."),(0,o.kt)("p",null,"However, in scenarios that use cluster consumption, each consumer group contains multiple consumers. Load balancing policies can help determine how messages are allocated."),(0,o.kt)("p",null,"Based on consumer types, load balancing policies can be divided into the following two types:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"#section-x2b-2cu-gpf"},"Message-based load balancing"),": the default policy for push consumers and simple consumers.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"#section-n9m-6xy-y77"},"Queue-based load balancing"),": the default policy for pull consumers."))),(0,o.kt)("h2",{id:"message-based-load-balancing"},"Message-based load balancing"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Usage scope")),(0,o.kt)("p",null,"Message-based load balancing is the only and default policy for push consumers and simple consumers."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Working mechanism")),(0,o.kt)("p",null,"Message-based load balancing evenly allocates messages in a topic to multiple consumers in a consumer group.\n",(0,o.kt)("img",{alt:"Message-based load balancing",src:s(9138).Z,width:"1266",height:"387"})),(0,o.kt)("p",null,"As shown in the preceding figure, Consumer Group A consists of three consumers: A1, A2, and A3. These three consumers consume the messages of Queue1 in the topic."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Message-based load balancing ensures that messages in a queue can be concurrently processed by multiple consumers. However, messages are randomly sent to consumers, which means that you cannot specify how messages are allocated to consumers."))),(0,o.kt)("p",null,"Message-based load balancing is based on the acknowledgment semantics of a single message in a topic. After a consumer receives a message, the broker locks the message to ensure that it is invisible to other consumers until it is consumed or times out. This prevents messages of the same queue to be consumed multiple times by different consumers."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Load policy for ordered messages")),(0,o.kt)("p",null,"In ordered messages, the order of messages refers to the sequence of multiple messages in a message group. These messages must be processed in the exactly same order as they are stored on the broker. Therefore, message-based load balancing needs to ensure that messages in a message group are consumed in the same order as they are stored on the server. When different consumers process messages in the same group, the system locks the messages in strict accordance with the message order to ensure messages are consumed sequentially.\n",(0,o.kt)("img",{alt:"Load policy for ordered messages",src:s(57595).Z,width:"1439",height:"641"})),(0,o.kt)("p",null,"In the preceding figure, there are four ordered messages in message group G1 of Queue1. Their saving orders are represented by M1 to M4. During consumption, when the messages M1 and M2 are processed by consumer A1, consumer A2 cannot consume messages M3 and M4 in parallel if the consumption status for M1 and M2 is not submitted. Consumers can only consume messages when the consumption status for preceding messages is submitted."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Features")),(0,o.kt)("p",null,"Compared with queue-based load balancing, message-based load balancing has the following features:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"More balanced consumption allocationIn conventional queue-based load balancing, the number of queues and the number of consumers may not be properly balanced. This results in a system where some consumers may be idle while some consumers are overburdened. In comparison, message-based load balancing ensures even load balancing among consumers without requiring you to manage the number of queues and consumers.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"More forgiving to differences in networking capacitiesIn an online production environment, the processing capabilities of consumers may be different due to actual network conditions or inconsistent networking hardware specifications. If messages are allocated based on queues, there might be cases where some consumers have accumulated messages while some other consumers are idle. In contrast, message-based load balancing allocates messages on demand to achieve a more balanced load distribution among consumers.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Easier O\\&M for queue allocationIn scenarios where conventional queue-based load balancing is used, you must make sure that the number of queues is greater or equal to the number of consumers to ensure that no consumers are idle. This issue is not present with message-based load balancing.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Scenarios")),(0,o.kt)("p",null,"Since messages in a queue are discretely allocated to consumers, message-based load balancing is suitable for most online event handling scenarios. In these scenarios, consumers require only basic processing capabilities instead of batch aggregation of messages. As for scenarios such as stream processing and aggregation computing where aggregation and batch processing of messages is required, queue-based load balancing is a better choice.\n",(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("p",null,"Consumers do not need to perform extra configurations for message-based load balancing. By default, this policy is enabled for push consumers and simple consumers."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"        SimpleConsumer simpleConsumer = null;\n        // Consumption example 1: When push consumers consume normal messages, they need only to process messages on a message listener and do not need to consider load balancing. \n        MessageListener messageListener = new MessageListener() {\n            @Override\n            public ConsumeResult consume(MessageView messageView) {\n                System.out.println(messageView);\n                // Return the status based on the consumption result. \n                return ConsumeResult.SUCCESS;\n            }\n        };\n        // Consumption example 2: When simple consumers consume normal messages, they obtain and submit messages. The consumers obtain messages based on the subscribed topic and do not need to consider load balancing. \n        List<MessageView> messageViewList = null;\n        try {\n            messageViewList = simpleConsumer.receive(10, Duration.ofSeconds(30));\n            messageViewList.forEach(messageView -> {\n                System.out.println(messageView);\n                // After consumption is complete, consumers must invoke ACK to submit the consumption result. \n                try {\n                    simpleConsumer.ack(messageView);\n                } catch (ClientException e) {\n                    e.printStackTrace();\n                }\n            });\n        } catch (ClientException e) {\n            // If the pull fails due to system traffic throttling or other reasons, consumers must re-initiate the request to obtain the message. \n            e.printStackTrace();\n        }\n")),(0,o.kt)("h2",{id:"queue-based-load-balancing"},"Queue-based load balancing"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Usage scope")),(0,o.kt)("p",null,"For consumers of broker versions 4.x and 3.x, including PullConsumer, DefaultPushConsumer, DefaultPullConsumer and DefaultLitePullConsumer, only queue-based load balancing can be used."),(0,o.kt)("p",null,"Working mechanism"),(0,o.kt)("p",null,"In the queue-based load balancing policy, consumers in the same consumer group consume messages in the queue allocated to them. Each queue is consumed by one consumer.\n",(0,o.kt)("img",{alt:"\u961f\u5217\u7ea7\u8d1f\u8f7d\u5747\u8861\u539f\u7406",src:s(20256).Z,width:"1375",height:"672"})),(0,o.kt)("p",null,"As shown in the preceding figure, the three queues (Queue1, Queue2, and Queue3) in the topic are assigned to two consumers in a consumer group. Since each queue can be assigned to only one consumer, consumer A2 is assigned two queues. If the number of queues is less than the number of consumers, some consumers will not have queues assigned to them."),(0,o.kt)("p",null,"Queue-based load balancing allocates messages based on operating data such as the number of queues and the number of consumers. Each queue is bound to a specific consumer. Then, each consumer processes messages according to the consumption semantics of obtaining messages ",">"," submitting offsets ",">"," persisting offsets. The consumption status is not returned to the queue when consumers obtain messages. Therefore, to avoid repeated consumption of messages by multiple consumers, each queue can be consumed by only one consumer."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Queue-based load balancing guarantees that a queue is processed by only one consumer. However, the implementation of this policy depends on the information negotiation mechanism between the consumer and the broker. "),(0,o.kt)("p",{parentName:"div"},"Apache RocketMQ does not guarantee that messages in a queue are processed by only one consumer. Therefore, when the number of consumers and the number of queues change, temporary inconsistency in queue allocation may occur, which causes a small number of messages to be processed more than once."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Features")),(0,o.kt)("p",null,"Compared with message-based load balancing, the granularity of queue-based load balancing is larger and less flexible. However, queue-based load balancing is ideal for stream processing scenarios. It ensures that messages in a queue are processed by one consumer. Therefore, queue-based load balancing is more suitable for scenarios where you want to process aggregated messages or messages in batches."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Scenarios")),(0,o.kt)("p",null,"Queue-based load balancing is applicable to scenarios where you want to process aggregated messages or messages in batches. These are common scenarios in stream computing and data aggregation applications."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("p",null,"Consumers do not need to perform extra configurations for queue-based load balancing. By default, this policy is enabled for pull consumers of broker versions 4.x and 3.x."),(0,o.kt)("p",null,"For more information about the sample code, visit the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/rocketmq/blob/develop/example/src/main/java/org/apache/rocketmq/example/simple/LitePullConsumerAssign.java"},"code library of Apache RocketMQ"),"."),(0,o.kt)("h2",{id:"version-compatibility"},"Version compatibility"),(0,o.kt)("p",null,"The message-based load balancing policy is available from broker version 5.0 of Apache RocketMQ. For broker versions 4.x and 3.x, only the queue-based load balancing policy is available."),(0,o.kt)("p",null,"Both the message-based and queue-based load balancing policies are available for broker version 5.x of Apache RocketMQ. Which policy is effective depends on the client version and consumer type."),(0,o.kt)("h2",{id:"usage-notes"},"Usage notes"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Implement message idempotence for consumption logic.")),(0,o.kt)("p",null,"Both the message-based and queue-based load balancing policies trigger temporary re-balancing in scenarios such as adding consumers, removing consumers, and broker scaling. This may cause temporary load inconsistency and result in a small number of messages being consumed more than once. Therefore, it is necessary to perform deduplication to ensure idempotence for message consumption."))}m.isMDXComponent=!0},9138:(e,n,s)=>{s.d(n,{Z:()=>a});const a=s.p+"assets/images/clustermode-dfd781d08bc0c69111841bda537aa302.png"},20256:(e,n,s)=>{s.d(n,{Z:()=>a});const a=s.p+"assets/images/clusterqueuemode-ce4f88dc594c1237ba95db2fa9146b8c.png"},18477:(e,n,s)=>{s.d(n,{Z:()=>a});const a=s.p+"assets/images/consumemode-74d53c59b3266f1f633b1392f5a0f279.png"},57595:(e,n,s)=>{s.d(n,{Z:()=>a});const a=s.p+"assets/images/fifoinclustermode-60b2f917ab49333f93029cee178b13f0.png"}}]);