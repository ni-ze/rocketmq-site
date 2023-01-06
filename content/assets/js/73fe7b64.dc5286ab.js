"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[8621],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var s=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=s.createContext({}),u=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return s.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},p=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),p=a,h=m["".concat(l,".").concat(p)]||m[p]||d[p]||r;return n?s.createElement(h,o(o({ref:t},c),{},{components:n})):s.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<r;u++)o[u]=n[u];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6699:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var s=n(87462),a=(n(67294),n(3905));const r={},o="Basic Best Practices",i={unversionedId:"bestPractice/15bestpractice",id:"bestPractice/15bestpractice",title:"Basic Best Practices",description:"Producer",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/05-bestPractice/15bestpractice.md",sourceDirName:"05-bestPractice",slug:"/bestPractice/15bestpractice",permalink:"/docs/4.x/bestPractice/15bestpractice",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/docs/05-bestPractice/15bestpractice.md",tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"RocketMQ Promethus Exporter",permalink:"/docs/4.x/deployment/18Exporter"},next:{title:"Dledger",permalink:"/docs/4.x/bestPractice/16dledger"}},l={},u=[{value:"Producer",id:"producer",level:2},{value:"Precautions for sending messages",id:"precautions-for-sending-messages",level:3},{value:"The use of Tags",id:"the-use-of-tags",level:4},{value:"The use of Keys",id:"the-use-of-keys",level:4},{value:"Printing Logs",id:"printing-logs",level:4},{value:"Handling method for message sending failure",id:"handling-method-for-message-sending-failure",level:3},{value:"Select oneway to send",id:"select-oneway-to-send",level:3},{value:"Client Configuration",id:"client-configuration",level:2},{value:"Client addressing mode",id:"client-addressing-mode",level:3},{value:"Consumer",id:"consumer",level:2},{value:"The consumption process is idempotent",id:"the-consumption-process-is-idempotent",level:3},{value:"A slow process of consumption",id:"a-slow-process-of-consumption",level:3},{value:"Increase consumption parallelism",id:"increase-consumption-parallelism",level:3},{value:"Consumption in bulk",id:"consumption-in-bulk",level:3},{value:"Skip non-important messages",id:"skip-non-important-messages",level:3},{value:"Optimize the per-message consumption process",id:"optimize-the-per-message-consumption-process",level:4},{value:"Consumption print log",id:"consumption-print-log",level:3},{value:"Other Consumption Tips",id:"other-consumption-tips",level:3},{value:"About consumers and subscriptions",id:"about-consumers-and-subscriptions",level:4},{value:"About Ordered Messages",id:"about-ordered-messages",level:4},{value:"About Concurrent consumption",id:"about-concurrent-consumption",level:4},{value:"Consume Status is about consumption status",id:"consume-status-is-about-consumption-status",level:4},{value:"About Blocking",id:"about-blocking",level:4},{value:"About thread count Settings",id:"about-thread-count-settings",level:4},{value:"About the consumption position",id:"about-the-consumption-position",level:4},{value:"Broker",id:"broker",level:2},{value:"Broker Role",id:"broker-role",level:3},{value:"FlushDiskType",id:"flushdisktype",level:3},{value:"Broker Configuration",id:"broker-configuration",level:3}],c={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,s.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"basic-best-practices"},"Basic Best Practices"),(0,a.kt)("h2",{id:"producer"},"Producer"),(0,a.kt)("h3",{id:"precautions-for-sending-messages"},"Precautions for sending messages"),(0,a.kt)("h4",{id:"the-use-of-tags"},"The use of Tags"),(0,a.kt)("p",null,'An application can use a Topic, and message subtypes can be identified as tags. tags can be set freely by the application. Only when the producer sets tags when sending messages, the consumer can use tags to filter messages through the broker when subscribing to messages\uff1amessage.setTags("TagA")\u3002  '),(0,a.kt)("h4",{id:"the-use-of-keys"},"The use of Keys"),(0,a.kt)("p",null,"The unique identifier of each message at the service level must be set to the keys field to locate message loss problems in the future. The server creates an index (hash index) for each message, and the application can query the content of the message by topic and key, and by whom the message was consumed. Since it is a hash index, make sure that the key is as unique as possible to avoid potential hash collisions."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'   // order Id   \n   String orderId = "20034568923546";   \n   message.setKeys(orderId);   \n')),(0,a.kt)("h4",{id:"printing-logs"},"Printing Logs"),(0,a.kt)("p",null,"The SendResult and key fields must be printed to print the message log if the message is sent successfully or failed. send Indicates that the message is sent successfully as long as no exception is thrown. There are multiple states for a successful send, defined in sendResult. Each state is described as follows:  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"SEND_OK"))),(0,a.kt)("p",null,"The message was sent successfully. Procedure Note that successful message delivery does not mean it is reliable. To ensure that no messages are lost, you should also enable the sync Master server or sync flush, which is SYNC_MASTER or SYNC_FLUSH."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"FLUSH_DISK_TIMEOUT"))),(0,a.kt)("p",null,"The message is sent successfully but disk flushing times out. At this point, the message has entered the server queue (memory), only the server downtime, the message will be lost. In the message storage configuration parameters, you can set the disk flushing mode and the synchronization flush time. If the Broker server is set to FlushDiskType=SYNC_FLUSH (asynchronous flush by default), if the Broker server does not flush disks during the synchronous flush time (5s by default), The state, flush timeout, will be returned."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"FLUSH_SLAVE_TIMEOUT"))),(0,a.kt)("p",null,"The message was sent successfully, but the server timed out when synchronizing the message to the Slave. At this point, the message has entered the server queue, only the server downtime, the message will be lost. If the role of the Broker server is SYNC_MASTER (ASYNC_MASTER by default) and the secondary Broker server does not complete synchronization with the primary server within the synchronization flush time (default: 5 seconds), This state is returned -- data synchronization to the Slave server has timed out."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"SLAVE_NOT_AVAILABLE"))),(0,a.kt)("p",null,"The message was successfully sent, but the Slave was unavailable. Procedure At this point, the message has entered the Master server queue, only the Master server downtime, the message will be lost. If the role of the Broker server is SYNC_MASTER (ASYNC_MASTER by default) but no slave Broker server is configured, the broker returns the status that no Slave server is available."),(0,a.kt)("h3",{id:"handling-method-for-message-sending-failure"},"Handling method for message sending failure"),(0,a.kt)("p",null,"The send method of Producer itself supports internal retry. The retry logic is as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Retry a maximum of two times (2 times for synchronous and 0 times for asynchronous)."),(0,a.kt)("li",{parentName:"ul"},"If the delivery fails, it is routed to the next Broker. The total time for this method should not exceed the value set by sendMsgTimeout, which defaults to 10s."),(0,a.kt)("li",{parentName:"ul"},"If it sends a message to the broker that generates a timeout exception, it will not be retried.")),(0,a.kt)("p",null,"The above strategies also guarantee the success of message sending to a certain extent. If the service has high requirements on message reliability, you are advised to add retry logic. For example, if the send method fails to be invoked, the system tries to store the message to the db and retry periodically by the background thread to ensure that the message reaches the Broker."),(0,a.kt)("p",null,"The reason why the above db retry method is not integrated into the MQ client, but requires the application to complete by itself, is mainly based on the following considerations: First, the MQ client is designed as a stateless mode, convenient for arbitrary horizontal expansion, and the consumption of machine resources is only cpu, memory, network. Secondly, if the MQ client is internally integrated with a KV storage module, the data can only be reliable if the synchronous disk fall, and the synchronous disk fall itself has a large performance overhead, so it usually uses asynchronous disk fall, and because the application closure process is not controlled by MQ operation and maintenance personnel, it may often happen kill -9 such violent closure. Resulting in data not timely drop disk and loss. Third, the machine where the Producer resides has low reliability and is generally virtual machines, which are not suitable for storing important data. In summary, it is recommended that the retry process be controlled by the application."),(0,a.kt)("h3",{id:"select-oneway-to-send"},"Select oneway to send"),(0,a.kt)("p",null,"In general, a message is sent as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The client sends a request to the server"),(0,a.kt)("li",{parentName:"ul"},"The server handles the request"),(0,a.kt)("li",{parentName:"ul"},"The server returns a reply to the client")),(0,a.kt)("p",null,"Therefore, the time taken to send a message is the sum of the above three steps. However, some scenarios require a very short time, but do not have high reliability requirements. For example, log collection applications can be invoked in oneway mode. On the client side, sending a request is only the cost of a system call of the operating system, that is, writing data to the socket buffer of the client, which usually takes microseconds."),(0,a.kt)("h2",{id:"client-configuration"},"Client Configuration"),(0,a.kt)("p",null,"In contrast to RocketMQ's cluster of brokers, both producers and consumers are clients. This section describes the behavior configuration common to producers and consumers."),(0,a.kt)("h3",{id:"client-addressing-mode"},"Client addressing mode"),(0,a.kt)("p",null,"RocketMQ enables clients to find NameServer and then NameServer to find Broker. As shown in the following figure, the configuration mode ranges from high to low. The higher priority overrides the lower priority."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The NameServer address is specified in the code, and multiple NameServer addresses are separated by semicolons   ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'producer.setNamesrvAddr("192.168.0.1:9876;192.168.0.2:9876");  \n\nconsumer.setNamesrvAddr("192.168.0.1:9876;192.168.0.2:9876");\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The NameServer address is specified in the Java startup parameter")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"-Drocketmq.namesrv.addr=192.168.0.1:9876;192.168.0.2:9876  \n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The environment variable specifies the NameServer address")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"export   NAMESRV_ADDR=192.168.0.1:9876;192.168.0.2:9876   \n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"HTTP static server addressing (default)")),(0,a.kt)("p",null,"After the client is started, it periodically accesses a static HTTP server with the following address:",(0,a.kt)("a",{parentName:"p",href:"http://jmenv.tbsite.net:8080/rocketmq/nsaddr"},"http://jmenv.tbsite.net:8080/rocketmq/nsaddr"),"\uff0cThe URL returns something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"192.168.0.1:9876;192.168.0.2:9876   \n")),(0,a.kt)("p",null,"By default, the client accesses the HTTP server every 2 minutes and updates the local NameServer address.\nThe URL is hardcoded in the code. You can change the server to be accessed by modifying the /etc/hosts file, for example, adding the following configuration to /etc/hosts:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"10.232.22.67    jmenv.taobao.net   \n")),(0,a.kt)("p",null,"Static HTTP server addressing is recommended. It is easy to deploy clients and the NameServer cluster can be hot upgraded."),(0,a.kt)("h2",{id:"consumer"},"Consumer"),(0,a.kt)("h3",{id:"the-consumption-process-is-idempotent"},"The consumption process is idempotent"),(0,a.kt)("p",null,"RocketMQ cannot avoid message duplications (Exactly Once), so if the business is very sensitive to consumption duplications, it is important to de-process at the business level.\nThis can be done with the help of relational databases. You first need to determine a unique key for the message, either an msgId or a unique identifying field in the message content, such as an order id.\nDetermine if the unique key exists in the relational database before consumption. If not, insert and consume, otherwise skip. (The actual process should consider the atomicity problem, determine whether there is a primary key conflict, then the insertion failed, directly skip)"),(0,a.kt)("p",null,"MsgId must be a globally unique identifier, but in practice, there may be cases where the same message has two different msgIds (consumer active retransmission, duplication due to client reinvestment mechanism, etc.), which necessitates repeated consumption of business fields."),(0,a.kt)("h3",{id:"a-slow-process-of-consumption"},"A slow process of consumption"),(0,a.kt)("h3",{id:"increase-consumption-parallelism"},"Increase consumption parallelism"),(0,a.kt)("p",null,"The vast majority of message consumption is IO intensive, that is, it may be operating on a database or calling an RPC, and the rate of consumption for this type of consumption depends on the throughput of the back-end database or external system.\nBy increasing consumption parallelism, the total consumption throughput can be improved, but when the parallelism increases to a certain degree, it will decrease.\nTherefore, the application must set a reasonable degree of parallelism. There are several ways to modify consumption parallelism:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In the same ConsumerGroup, we increase the number of Consumer instances to improve parallelism (note that Consumer instances exceeding the subscription queue are invalid). You can add a machine, or start multiple processes on an existing machine."),(0,a.kt)("li",{parentName:"ul"},"Improve the consumption parallel thread of a single Consumer by modifying parameters consumeThreadMin and consumeThreadMax.")),(0,a.kt)("h3",{id:"consumption-in-bulk"},"Consumption in bulk"),(0,a.kt)("p",null,"If some business processes support batch consumption, the consumption throughput can be greatly improved. For example, the application of order deduction takes 1 s to process one order at a time, and only 2 s to process 10 orders at a time. In this way, the consumption throughput can be greatly improved.\nBy setting the consumer consumeMessageBatchMaxSize return a parameter, the default is 1, namely consumption one message, for example, is set to N, so the number of messages every time consumption less than or equal to N."),(0,a.kt)("h3",{id:"skip-non-important-messages"},"Skip non-important messages"),(0,a.kt)("p",null,"In case of message pile-up, if the consumption rate cannot keep up with the delivery rate, and if the business is not demanding enough data, you can choose to discard unimportant messages.\nFor example, when a queue accumulates more than 100,000 messages, try to discard some or all of them so that you can quickly catch up with sending messages. Example code is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"    public ConsumeConcurrentlyStatus consumeMessage(\n            List<MessageExt> msgs,\n            ConsumeConcurrentlyContext context) {\n        long offset = msgs.get(0).getQueueOffset();\n        String maxOffset =\n                msgs.get(0).getProperty(Message.PROPERTY_MAX_OFFSET);\n        long diff = Long.parseLong(maxOffset) - offset;\n        if (diff > 100000) {\n            // TODO Special handling of message stacking cases\n            return ConsumeConcurrentlyStatus.CONSUME_SUCCESS;\n        }\n        // TODO Normal consumption process\n        return ConsumeConcurrentlyStatus.CONSUME_SUCCESS;\n    }    \n")),(0,a.kt)("h4",{id:"optimize-the-per-message-consumption-process"},"Optimize the per-message consumption process"),(0,a.kt)("p",null,"For example, the consumption process of a message is as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Query ","[data 1]"," from DB according to message"),(0,a.kt)("li",{parentName:"ul"},"Query ","[data 2]"," from DB according to message"),(0,a.kt)("li",{parentName:"ul"},"Complex business calculations"),(0,a.kt)("li",{parentName:"ul"},"Insert ","[data 3]"," into DB"),(0,a.kt)("li",{parentName:"ul"},"Insert ","[data 4]"," into DB")),(0,a.kt)("p",null,"There are four interactions with DB during the consumption of this message. If we calculate each interaction as 5ms, the total time is 20ms.\nAssuming that the service computation takes 5ms, the total time is 25ms. Therefore, if the four DB interactions can be optimized to two, the total time can be optimized to 15ms, which means that the overall performance is improved by 40%.\nTherefore, if the application is sensitive to delay, the DB can be deployed on SSD disks. Compared with SCSI disks, the RT of the former is much smaller."),(0,a.kt)("h3",{id:"consumption-print-log"},"Consumption print log"),(0,a.kt)("p",null,"If the number of messages is small, you are advised to print messages in the consumption entry method, which takes a long time to consume."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'   public ConsumeConcurrentlyStatus consumeMessage(\n            List<MessageExt> msgs,\n            ConsumeConcurrentlyContext context) {\n        log.info("RECEIVE_MSG_BEGIN: " + msgs.toString());\n        // TODO Normal consumption process\n        return ConsumeConcurrentlyStatus.CONSUME_SUCCESS;\n    }   \n')),(0,a.kt)("p",null,"If you can print each message consuming time, it will be more convenient to troubleshoot online problems such as slow consumption."),(0,a.kt)("h3",{id:"other-consumption-tips"},"Other Consumption Tips"),(0,a.kt)("h4",{id:"about-consumers-and-subscriptions"},"About consumers and subscriptions"),(0,a.kt)("p",null,"The first thing to note is that different consumer groups can consume several topics independently, and each consumer group has its own consumption offset. Make sure that the subscription information of each consumer within the same group is consistent."),(0,a.kt)("h4",{id:"about-ordered-messages"},"About Ordered Messages"),(0,a.kt)("p",null,"Consumers will lock each message queue to ensure that they are consumed one by one, which causes performance degradation, but is useful when you are concerned about message order. We do not recommend throwing an exception, you can return ConsumeOrderlyStatus. SUSPEND_CURRENT_QUEUE_A_MOMENT instead."),(0,a.kt)("h4",{id:"about-concurrent-consumption"},"About Concurrent consumption"),(0,a.kt)("p",null,"As the name suggests, the consumer will concurrent consumption of these messages, it is recommended that you use it to get good performance, we do not recommend throwing an exception, you can return ConsumeConcurrentlyStatus.RECONSUME_LATER instead."),(0,a.kt)("h4",{id:"consume-status-is-about-consumption-status"},"Consume Status is about consumption status"),(0,a.kt)("p",null,"For concurrent consumption listeners, you can return RECONSUME_LATER to notify the consumer that the message cannot be consumed now and that it is expected to be consumed again later.\nYou can then continue consuming other messages. For an ordered message listener, you can't skip the message because you care about its order, but you can go back to SUSPEND_CURRENT_QUEUE_A_MOMENT and tell the consumer to wait."),(0,a.kt)("h4",{id:"about-blocking"},"About Blocking"),(0,a.kt)("p",null,"Blocking listeners is not recommended because it blocks the thread pool and may eventually terminate the consuming process"),(0,a.kt)("h4",{id:"about-thread-count-settings"},"About thread count Settings"),(0,a.kt)("p",null,"Consumers use ThreadPoolExecutor to consume messages internally, so you can change it by setting setConsumeThreadMin or setConsumeThreadMax."),(0,a.kt)("h4",{id:"about-the-consumption-position"},"About the consumption position"),(0,a.kt)("p",null,"When creating a new consumer group, you need to decide whether you want to consume the history messages already in the Broker. CONSUME_FROM_LAST_OFFSET will ignore the history messages and consume any messages generated later.\nCONSUME_FROM_FIRST_OFFSET will consume every information that exists in the Broker. You can also use CONSUME_FROM_TIMESTAMP to consume messages generated after a specified timestamp."),(0,a.kt)("h2",{id:"broker"},"Broker"),(0,a.kt)("h3",{id:"broker-role"},"Broker Role"),(0,a.kt)("p",null,"  Broker roles are classified into ASYNC_MASTER, SYNC_MASTER, and SLAVE.\nIf you have strict requirements on message reliability, deploy SYNC_MASTER plus SLAVE.\nIf message reliability is not required, deploy ASYNC_MASTER plus SLAVE.\nIf testing is only convenient, you can select ASYNC_MASTER only or SYNC_MASTER only deployment."),(0,a.kt)("h3",{id:"flushdisktype"},"FlushDiskType"),(0,a.kt)("p",null,"  Compared with ASYNC_FLUSH, SYNC_FLUSH suffers from performance loss but is more reliable. Therefore, the trade-off must be made based on the actual service scenario."),(0,a.kt)("h3",{id:"broker-configuration"},"Broker Configuration"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"listenPort"),(0,a.kt)("td",{parentName:"tr",align:null},"10911"),(0,a.kt)("td",{parentName:"tr",align:null},"A listening port that accepts client connections")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"namesrvAddr"),(0,a.kt)("td",{parentName:"tr",align:null},"null"),(0,a.kt)("td",{parentName:"tr",align:null},"nameServer address")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"brokerIP1"),(0,a.kt)("td",{parentName:"tr",align:null},"The network InetAddress"),(0,a.kt)("td",{parentName:"tr",align:null},"The IP address on which the broker is currently listening")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"brokerIP2"),(0,a.kt)("td",{parentName:"tr",align:null},"same to brokerIP1"),(0,a.kt)("td",{parentName:"tr",align:null},"When a master/slave broker exists, if the brokerIP2 property is configured on the broker master node, the broker slave node will connect to the brokerIP2 configured on the master node for synchronization")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"brokerName"),(0,a.kt)("td",{parentName:"tr",align:null},"null"),(0,a.kt)("td",{parentName:"tr",align:null},"broker name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"brokerClusterName"),(0,a.kt)("td",{parentName:"tr",align:null},"DefaultCluster"),(0,a.kt)("td",{parentName:"tr",align:null},"The Cluser name to which this broker belongs")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"brokerId"),(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"broker id 0 indicates master, and other positive integers indicate slave")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"storePathCommitLog"),(0,a.kt)("td",{parentName:"tr",align:null},"$HOME/store/commitlog/"),(0,a.kt)("td",{parentName:"tr",align:null},"Path to store the commit log")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"storePathConsumerQueue"),(0,a.kt)("td",{parentName:"tr",align:null},"$HOME/store/consumequeue/"),(0,a.kt)("td",{parentName:"tr",align:null},"A path that consumes queue is stored")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mapedFileSizeCommitLog"),(0,a.kt)("td",{parentName:"tr",align:null},"1024 ",(0,a.kt)("em",{parentName:"td"}," 1024 ")," 1024(1G)"),(0,a.kt)("td",{parentName:"tr",align:null},"commit log mapping file size")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"deleteWhen"),(0,a.kt)("td",{parentName:"tr",align:null},"04"),(0,a.kt)("td",{parentName:"tr",align:null},"At what time of day should I delete the commit log whose file retention time has exceeded")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"fileReserverdTime"),(0,a.kt)("td",{parentName:"tr",align:null},"72"),(0,a.kt)("td",{parentName:"tr",align:null},"File retention time in hours")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"brokerRole"),(0,a.kt)("td",{parentName:"tr",align:null},"ASYNC_MASTER"),(0,a.kt)("td",{parentName:"tr",align:null},"SYNC_MASTER/ASYNC_MASTER/SLAVE")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"flushDiskType"),(0,a.kt)("td",{parentName:"tr",align:null},"ASYNC_FLUSH"),(0,a.kt)("td",{parentName:"tr",align:null},"SYNC_FLUSH/ASYNC_FLUSH The broker in SYNC_FLUSH mode guarantees to flush messages before receiving the acknowledged producer. ASYNC_FLUSH brokers use the flush mode to flush a group of messages for better performance.")))))}m.isMDXComponent=!0}}]);