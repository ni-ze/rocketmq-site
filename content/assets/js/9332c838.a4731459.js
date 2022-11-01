"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[8948],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(r),h=i,d=m["".concat(l,".").concat(h)]||m[h]||p[h]||a;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},99310:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const a={},o="Sending retry and throttling policy",s={unversionedId:"featureBehavior/05sendretrypolicy",id:"version-5.0/featureBehavior/05sendretrypolicy",title:"Sending retry and throttling policy",description:"This topic describes the message sending retry mechanism and throttling mechanism of Apache RocketMQ.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-5.0/04-featureBehavior/05sendretrypolicy.md",sourceDirName:"04-featureBehavior",slug:"/featureBehavior/05sendretrypolicy",permalink:"/docs/featureBehavior/05sendretrypolicy",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/04-featureBehavior/05sendretrypolicy.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"Transaction message",permalink:"/docs/featureBehavior/04transactionmessage"},next:{title:"Consumer types",permalink:"/docs/featureBehavior/06consumertype"}},l={},c=[{value:"Background",id:"background",level:2},{value:"Message sending retry",id:"message-sending-retry",level:2},{value:"Introduction to sending retry",id:"introduction-to-sending-retry",level:3},{value:"Retry process",id:"retry-process",level:3},{value:"Retry interval",id:"retry-interval",level:3},{value:"Limits",id:"limits",level:3},{value:"Throttling",id:"throttling",level:2},{value:"Introduction to throttling",id:"introduction-to-throttling",level:3},{value:"Trigger conditions",id:"trigger-conditions",level:3},{value:"Behavior",id:"behavior",level:3},{value:"Suggestions",id:"suggestions",level:3}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sending-retry-and-throttling-policy"},"Sending retry and throttling policy"),(0,i.kt)("p",null,"This topic describes the message sending retry mechanism and throttling mechanism of Apache RocketMQ."),(0,i.kt)("h2",{id:"background"},"Background"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Message sending retry")),(0,i.kt)("p",null,"The sending retry mechanism of Apache RocketMQ answers the following questions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Can messages be sent if some nodes are faulty?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Does a retry request block the call thread?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"What are the shortcomings of sending retry?"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Throttling")),(0,i.kt)("p",null,"The throttling mechanism of Apache RocketMQ answers the following questions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Under what circumstances is throttling triggered?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"What is the client behavior when throttling is triggered?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"How do I avoid triggering throttling and how do I handle unexpected throttling?"))),(0,i.kt)("h2",{id:"message-sending-retry"},"Message sending retry"),(0,i.kt)("h3",{id:"introduction-to-sending-retry"},"Introduction to sending retry"),(0,i.kt)("p",null,"When a producer client of Apache RocketMQ calls a broker to send a message, the call may fail due to reasons such as network failure or service exception. To ensure message reliability, Apache RocketMQ provides built-in logic in the client SDK to retry failed requests until the requests succeed."),(0,i.kt)("p",null,"Message sending retries are supported in both the synchronous and asynchronous sending modes."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Trigger conditions")),(0,i.kt)("p",null,"Sending retry can be triggered by one of the following conditions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The call from the client fails or the request times out."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A network exception causes a connection failure or request timeout.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The connection is closed because the broker node is shut down or being restarted.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The request times out because the broker is running slowly.")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The broker returns an error code."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Logic error: an error caused by incorrect running logic.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Throttling: throttling triggered by excessive traffic."))))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"For transaction messages, only ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/grpc/proposal/blob/master/A6-client-retries.md#transparent-retries"},"transparent retries")," are performed. No retries are performed in network exception or timeout scenarios.")),(0,i.kt)("h3",{id:"retry-process"},"Retry process"),(0,i.kt)("p",null,"You can specify the maximum number of retries on the producer when the producer initializes messages. When one of the preceding trigger conditions occurs, a producer client tries to send the message again until the message is sent or the maximum number of retries is reached. If the failure persists on the last retry, a call error is returned."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Synchronous sending: The call thread is blocked until a retry succeeds or the last retry fails. If the last retry fails, the system returns an error code and an exception.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Asynchronous sending: The call thread is not blocked. The call result is returned as an exception event or success event."))),(0,i.kt)("h3",{id:"retry-interval"},"Retry interval"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Messages are immediately retried upon failures, except when a retry is triggered by throttling.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If a retry is triggered by throttling, the message is retried at intervals specified in the exponential backoff protocol. The exponential backoff algorithm uses the following parameters to control retry behavior:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"INITIAL_BACKOFF: specifies the interval between the first failure and the first retry. Default value: 1 second.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"MULTIPLIER : specifies the factor by which to multiply the interval after each failed retry. Default value: 1.6.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"JITTER : specifies the factor by which to randomize intervals. Default value: 0.2.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"MAX_BACKOFF: specifies the upper limit of an interval. Default value: 120 seconds.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"MIN_CONNECT_TIMEOUT: specifies the minimum interval. Default value: 20 seconds."))))),(0,i.kt)("p",null,"The following algorithm is recommended:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"ConnectWithBackoff()\n  current_backoff = INITIAL_BACKOFF\n  current_deadline = now() + INITIAL_BACKOFF\n  while (TryConnect(Max(current_deadline, now() + MIN_CONNECT_TIMEOUT))!= SUCCESS)\n    SleepUntil(current_deadline)\n    current_backoff = Min(current_backoff * MULTIPLIER, MAX_BACKOFF)\n    current_deadline = now() + current_backoff + UniformRandom(-JITTER * current_backoff, JITTER * current_backoff)\n")),(0,i.kt)("p",null,"For more information, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/grpc/grpc/blob/master/doc/connection-backoff.md"},"connection-backoff.md"),"."),(0,i.kt)("h3",{id:"limits"},"Limits"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Link blocking evaluation: From the retry mechanism, we can see that a producer can configure only the maximum number of retries in the retry process. If a system exception triggers the built-in retry logic of the SDK, the broker must wait for the final retry result, and the sending request link is blocked. Therefore, you must evaluate the timeout duration and maximum number of retries for each call to prevent retries from blocking links.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Handling of final exceptions: The built-in sending retry mechanism of a Apache RocketMQ client does not ensure that the failed message is successfully sent. If the final retry still fails, the caller must capture the exception and provide redundancy protection to prevent inconsistency in message sending results.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Duplicate messages: When a Apache RocketMQ producer client resends a message, the client does not know the processing result of the presumably failed message on the broker. As a result, duplicate messages may exist on the broker. Make sure that your business logic can properly handle such situations."))),(0,i.kt)("h2",{id:"throttling"},"Throttling"),(0,i.kt)("h3",{id:"introduction-to-throttling"},"Introduction to throttling"),(0,i.kt)("p",null,"When the system capacity usage exceeds the threshold, a Apache RocketMQ broker rejects requests and returns an error to avoid over-burdening the underlying resources."),(0,i.kt)("h3",{id:"trigger-conditions"},"Trigger conditions"),(0,i.kt)("p",null,"The throttling mechanism of Apache RocketMQ is triggered by one of the following conditions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"High storage pressure: As described in the Working mechanism section of ",(0,i.kt)("a",{parentName:"p",href:"/docs/featureBehavior/09consumerprogress"},"Consumer progress management"),", a consumer group starts consuming messages from the maximum offset of the queue. If the consumer group is required to consume from an earlier moment, the storage pressure on the queue surges and throttling is triggered. This happens in backtracking scenarios, such as new business rollout.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Excessive unconsumed messages on the broker: If consumers are unable to consume at the same rate messages are sent to them, requests pile up in the queue. If the number of messages piling up exceeds the threshold, throttling is triggered to alleviate burden on the downstream system."))),(0,i.kt)("h3",{id:"behavior"},"Behavior"),(0,i.kt)("p",null,"When throttling is triggered, a producer client receives the following error message and an exception:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"reply-code:530")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"reply-text:TOO_MANY_REQUESTS"))),(0,i.kt)("p",null,"Upon receiving these, the client retries the message according to the exponential backoff protocol. For more information, see ",(0,i.kt)("a",{parentName:"p",href:"#section-bcp-jf7-hud"},"Message sending retry"),"."),(0,i.kt)("h3",{id:"suggestions"},"Suggestions"),(0,i.kt)("p",null,"Suggestions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"How to avoid triggering throttling: Use observable metrics to monitor the system capacity and scale the underlying resources accordingly.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"How to handle throttling: If throttling is triggered and the built-in retry process fails in the client, you can temporarily switch calls to another system."))))}p.isMDXComponent=!0}}]);