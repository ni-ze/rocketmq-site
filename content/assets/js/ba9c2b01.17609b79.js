"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[769],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>N});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),l=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=l(a),k=n,N=u["".concat(i,".").concat(k)]||u[k]||c[k]||o;return a?r.createElement(N,s(s({ref:t},m),{},{components:a})):r.createElement(N,s({ref:t},m))}));function N(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=k;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:n,s[1]=p;for(var l=2;l<o;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},65256:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=a(87462),n=(a(67294),a(3905));const o={},s="FAQs",p={unversionedId:"bestPractice/22FAQ",id:"bestPractice/22FAQ",title:"FAQs",description:"The following are frequently asked questions about the RocketMQ project",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/05-bestPractice/22FAQ.md",sourceDirName:"05-bestPractice",slug:"/bestPractice/22FAQ",permalink:"/docs/4.x/bestPractice/22FAQ",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/docs/05-bestPractice/22FAQ.md",tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"\u8ba2\u9605\u5173\u7cfb\u4e00\u81f4",permalink:"/docs/4.x/bestPractice/21subscribe"},next:{title:"\u5ba2\u6237\u7aef\u914d\u7f6e",permalink:"/docs/4.x/parameterConfiguration/23local"}},i={},l=[{value:"1 Basics",id:"1-basics",level:2},{value:"2 Use",id:"2-use",level:2},{value:"3 Configuration",id:"3-configuration",level:2},{value:"4 Error",id:"4-error",level:2},{value:"5 Others",id:"5-others",level:2}],m={toc:l};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"faqs"},"FAQs"),(0,n.kt)("p",null,"The following are frequently asked questions about the RocketMQ project"),(0,n.kt)("h2",{id:"1-basics"},"1 Basics"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Why should we use RocketMQ instead of another product\uff1f")),(0,n.kt)("p",{parentName:"li"},"Please refer to the",(0,n.kt)("a",{parentName:"p",href:"http://rocketmq.apache.org/docs/motivation/"},"Why RocketMQ"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Do I need to install any other software to use RocketMQ, e.g. ZooKeeper \uff1f")),(0,n.kt)("p",{parentName:"li"},"No, RocketMQ can run independently."))),(0,n.kt)("h2",{id:"2-use"},"2 Use"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Where does the newly created Consumer ID start consuming messages\uff1f")),(0,n.kt)("p",{parentName:"li"},"1\uff09If the message sent is within three days, the consumer starts consuming the first message saved in the server."),(0,n.kt)("p",{parentName:"li"},"2\uff09If the message sent is more than three days old, the consumer starts consuming the latest message in the server, which is at the end of the queue."),(0,n.kt)("p",{parentName:"li"},"3\uff09If the consumer restarts, it starts consuming messages from the last consumption location.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"How do you re-consume messages when consumption fails?")),(0,n.kt)("p",{parentName:"li"},"1\uff09In cluster mode, the consumed business logic code is returning Action.ReconsumeLater\uff0cNULL\uff0cor throw an exception\uff0cIf a message fails to be consumed, it is retried up to 16 times, after which the message is discarded."),(0,n.kt)("p",{parentName:"li"},"2\uff09In broadcast consumption mode, broadcast consumption still guarantees that the message will be consumed at least once, but does not provide the option to resend it.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"How to find the failure message when consume fails?")),(0,n.kt)("p",{parentName:"li"},"1\uff09Using subject queries by time, you can query messages over a period of time\u3002"),(0,n.kt)("p",{parentName:"li"},"2\uff09Use the subject and message ID to accurately query the message."),(0,n.kt)("p",{parentName:"li"},"3\uff09Use the subject and message key to query exactly for messages with the same key across all messages.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Will the message be delivered only once?")),(0,n.kt)("p",{parentName:"li"},"RocketMQ ensures that all messages are delivered at least once. In most cases, the message will not be repeated.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"How do I add a new Broker?")),(0,n.kt)("p",{parentName:"li"},"1\uff09Start a new Broker and register it with the list of brokers in NameServer."),(0,n.kt)("p",{parentName:"li"},"2\uff09By default, only internal system Topic and Consumer Group are automatically created. If you want to have your business topics and consumer groups on the new node, copy them from an existing Broker. We provide administrative tools and the command line to handle this."))),(0,n.kt)("h2",{id:"3-configuration"},"3 Configuration"),(0,n.kt)("p",null,"The following answers are the default values and can be modified through configuration."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"How long messages can be kept on the server\uff1f")),(0,n.kt)("p",{parentName:"li"},"Stored messages will be kept for a maximum of 3 days, and unused messages will be deleted after that.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"What is the size limit for the message body?")),(0,n.kt)("p",{parentName:"li"},"It is usually 256 KB")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"How to set the number of consumer threads?")),(0,n.kt)("p",{parentName:"li"},"You can set the value of the ConsumeThreadNums property when you start the consumer\uff0ce.g."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java"},"consumer.setConsumeThreadMin(20);\nconsumer.setConsumeThreadMax(20);\n")))),(0,n.kt)("h2",{id:"4-error"},"4 Error"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"APPLY_TOPIC_URL")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Error message")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java"},"topic[xxx] not exist, apply first please!\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Cause")),(0,n.kt)("p",{parentName:"li"},"1\uff09This exception occurs when the Producer fails to obtain routing information according to the Topic when sending or consuming messages.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Solution")),(0,n.kt)("p",{parentName:"li"},"1\uff09Make sure that NameServer does contain routing information for the Topic. You can use the management tool or the Web console to query routing information from NameServer through TopicRoute;"),(0,n.kt)("p",{parentName:"li"},"2\uff09Ensure that the Broker and Consumer are connected to the same NameServer cluster;"),(0,n.kt)("p",{parentName:"li"},"3\uff09Ensure that the queue permissions of the topic are 6(rw-) for the Producer, or at least 2(-w-) for the Consumer;"),(0,n.kt)("p",{parentName:"li"},"If this topic cannot be found, create it on the Broker with the administrative tool command updateTopic or the Web console.")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"NAME_SERVER_ADDR_NOT_EXIST_URL")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Error message")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java"},"No name server address, please set it\n")),(0,n.kt)("p",{parentName:"li"},"or"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java"},"connect to xxx failed, maybe the domain name xxx not bind in /etc/hosts\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Cause")),(0,n.kt)("p",{parentName:"li"},"1\uff09The Producer or Consumer fails to obtain NameServer address information.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Solution")),(0,n.kt)("p",{parentName:"li"},"1\uff09Please refer to the\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/rocketmq/blob/develop/docs/cn/best_practice.md"},"5.1 Client addressing mode"))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"GROUP_NAME_DUPLICATE_URL")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Error message")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java"},"The producer group[xxx] has been created before, specify another name please.\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Cause")),(0,n.kt)("p",{parentName:"li"},"1\uff09The Consumer Group with the same name has been started, but the registration fails.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Solution")),(0,n.kt)("p",{parentName:"li"},"1\uff09New Consumer Group renamed;"),(0,n.kt)("p",{parentName:"li"},"2\uff09After a Consumer Group with the same name is closed, it can be started again.")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"CLIENT_PARAMETER_CHECK_URL")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Error message")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java"},"consumerGroup can not equal ...\n")),(0,n.kt)("p",{parentName:"li"},"or"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java"},"allocateMessageQueueStrategy is null ...\n")),(0,n.kt)("p",{parentName:"li"},"or"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java"},"Long polling mode, the consumer consumerTimeoutMillisWhenSuspend must greater than brokerSuspendMaxTimeMillis ...\n")),(0,n.kt)("p",{parentName:"li"},"In addition, there are other exceptions, will not list them all.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Cause")),(0,n.kt)("p",{parentName:"li"},"1\uff09The Consumer parameter verification fails. ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Solution")),(0,n.kt)("p",{parentName:"li"},"1\uff09Please refer to the\uff1a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/rocketmq/blob/develop/docs/cn/best_practice.md"},"5.2 Client Configuration"))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"SUBSCRIPTION_GROUP_NOT_EXIST")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Error message")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java"},"subscription group not exist\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Cause")),(0,n.kt)("p",{parentName:"li"},"1\uff09The Consumer Group or DelayQueue can't obtain subscription information.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Solution")),(0,n.kt)("p",{parentName:"li"},"1\uff09Ensure that the Consumer subscription Topic information is consistent with the existing Topic information in NameServer."),(0,n.kt)("p",{parentName:"li"},"2\uff09Ensure that the Broker and Consumer are connected to the same NameServer cluster;"),(0,n.kt)("p",{parentName:"li"},"3\uff09Ensure that the queue permissions of the Topic are 6(rw-) for the Producer, or at least 2(-w-) for the Consumer;")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"CLIENT_SERVICE_NOT_OK")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Error message")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java"},"The xxx service state not OK, maybe started once\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Cause")),(0,n.kt)("p",{parentName:"li"},"1\uff09Starting multiple Producer/Consumer instances in the same JVM using the same Producer/Consumer Group may cause the client to fail to start.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Solution")),(0,n.kt)("p",{parentName:"li"},"1\uff09Ensure that the JVM corresponding to a Producer/Consumer Group starts only one Producer/Consumer instance.")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"NO_TOPIC_ROUTE_INFO")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Error message")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java"},"No route info of this topic:\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Cause")),(0,n.kt)("p",{parentName:"li"},"1\uff09This occurs when a message is sent to a topic whose routing information is not available to the producer.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Solution")),(0,n.kt)("p",{parentName:"li"},"1\uff09Ensure that producers can connect to NameServer and get routing meta-information from it;"),(0,n.kt)("p",{parentName:"li"},"2\uff09Make sure that NameServer does contain the routing meta-information for the topic. You can use the TopicRoute management tool or the Web console to query routing meta information from NameServer."),(0,n.kt)("p",{parentName:"li"},"3\uff09Make sure that your Broker sends heartbeats to the same NameServer list that your producers are connecting to;"),(0,n.kt)("p",{parentName:"li"},"4\uff09Ensure that the subject has permissions of 6(rw-), or at least 2(-w-);"),(0,n.kt)("p",{parentName:"li"},"If this topic cannot be found, create it on the Broker with the administrative tool command updateTopic or the Web console.")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"LOAD_JSON_EXCEPTION")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Error message")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java"},"readLocalOffset Exception\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Cause")),(0,n.kt)("p",{parentName:"li"},"1\uff09The consumer failed to load the local offset.json file in broadcast mode."),(0,n.kt)("p",{parentName:"li"},"2\uff09Corrupted fastjson files can cause the same problem;")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Solution")),(0,n.kt)("p",{parentName:"li"},"1\uff09Check that the fastjson version is the same as the RocketMQ version."),(0,n.kt)("p",{parentName:"li"},"2\uff09Update fastjson version;")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"SAME_GROUP_DIFFERENT_TOPIC")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Error message")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java"},"the consumer's group info/subscription not exist\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Cause")),(0,n.kt)("p",{parentName:"li"},"1\uff09Consumer subscription Topic information does not exist.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Solution")))),(0,n.kt)("p",{parentName:"li"},"1\uff09Check whether the Consumer Group to which the Consumer belongs exists.\n2\uff09Check whether the Consumer subscription Topic exists;")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"MQLIST_NOT_EXIST")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Error message")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java"},"Can not find Message Queue for this topic\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Cause")),(0,n.kt)("p",{parentName:"li"},"1\uff09For the Producer, the corresponding Queue information cannot be obtained according to the Topic.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Solution")),(0,n.kt)("p",{parentName:"li"},"1\uff09Ensure that Queue information is correctly configured for the Topic.\n2\uff09Ensure that the Queue corresponding to the Topic has at least 2(-w-) permissions;")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"SEND_MSG_FAILED")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Error message")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java"},"Send [xxx] times, still failed, cost [xxx]ms, Topic: xxx, BrokersSent ...\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Cause")),(0,n.kt)("p",{parentName:"li"},"1\uff09The Producer message is incorrectly sent. A total of three times are sent in SYNC mode and one time is sent in ASYNC and ONEWAY mode.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Solution")),(0,n.kt)("p",{parentName:"li"},"1\uff09The Producer sends messages and whether the timeout parameter is too small.\n2\uff09Ensure that the Broker is working properly;\n3\uff09Ensure that the Producer and Broker are properly connected")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"UNKNOWN_HOST_EXCEPTION")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Error message")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java"},"InetAddress java.net.InetAddress.getLocalHost() throws UnknownHostException\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Cause")),(0,n.kt)("p",{parentName:"li"},"1\uff09A host may have many network interfaces, and an interface may be bound to multiple IP addresses.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Solution")),(0,n.kt)("p",{parentName:"li"},"1\uff09Ensure that the IP address corresponding to host can be accessed properly. Run the Ping command to check the network status."))))),(0,n.kt)("h2",{id:"5-others"},"5 Others"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"What are the effects of Broker crashes\uff1f"),(0,n.kt)("p",{parentName:"li"},"1\uff09The Master node crashes"),(0,n.kt)("p",{parentName:"li"},"Messages can no longer be sent to this cluster of brokers, but if you have another cluster of brokers available, messages can still be sent in the presence of a topic. Messages can still be consumed from the Slave node."),(0,n.kt)("p",{parentName:"li"},"2\uff09Some Slave nodes crashed"),(0,n.kt)("p",{parentName:"li"},"As long as there is another working Slave, sending messages is not affected. Consumption messages are also not affected unless the consumer group is set to consume from this Slave preferentially. By default, the consumer group consumes from the Master."),(0,n.kt)("p",{parentName:"li"},"3\uff09All Slave nodes crash"),(0,n.kt)("p",{parentName:"li"},"Sending messages to the Master has no effect; however, if the Master is SYNC_MASTER, the Producer gets a SLAVE_NOT_AVAILABLE, indicating that the message is not being sent to any slaves. Consumption messages are also unaffected unless the consumer group is set to consume from the Slave preferentially. By default, the consumer group consumes from the Master."))))}u.isMDXComponent=!0}}]);