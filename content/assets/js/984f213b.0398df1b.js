"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[153],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var d=n.createContext({}),c=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),g=s,m=p["".concat(d,".").concat(g)]||p[g]||l[g]||a;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function g(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,o=new Array(a);o[0]=p;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},27110:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(87462),s=(r(67294),r(3905));const a={},o="Ordered Message Sending",i={unversionedId:"producer/06message2",id:"producer/06message2",title:"Ordered Message Sending",description:"Ordered Message Introduction",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/02-producer/06message2.md",sourceDirName:"02-producer",slug:"/producer/06message2",permalink:"/docs/4.x/producer/06message2",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/docs/02-producer/06message2.md",tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"Simple Message Sending",permalink:"/docs/4.x/producer/05message1"},next:{title:"Delayed Message Sending",permalink:"/docs/4.x/producer/07message3"}},d={},c=[{value:"Ordered Message Introduction",id:"ordered-message-introduction",level:2},{value:"Ordered Message Sample Code",id:"ordered-message-sample-code",level:2},{value:"Consistency of Ordered Messages",id:"consistency-of-ordered-messages",level:2}],u={toc:c};function l(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"ordered-message-sending"},"Ordered Message Sending"),(0,s.kt)("h2",{id:"ordered-message-introduction"},"Ordered Message Introduction"),(0,s.kt)("p",null,"Ordered messages have strict requirements on the order in which they are sent and consumed. "),(0,s.kt)("p",null,"For a given Topic, messages are published and consumed strictly on a first-in-first-out (FIFO) basis, i.e., messages published first will be consumed first. Furthermore, as shown in the following figure, partitioned ordered messages are supported in Apache RocketMQ. The messages can be partitioned according to a certain criterion (e.g., ShardingKey). Messages with the same ShardingKey are assigned to the identical queue and consumed in order.\n",(0,s.kt)("img",{alt:"\u987a\u5e8f\u6d88\u606f\u53d1\u9001",src:r(87246).Z,width:"2546",height:"610"})),(0,s.kt)("p",null,"Ordered messages are also used in a wide range of application scenarios, such as the example of creating orders, the same order generation, payment, and shipment should be executed sequentially. In the case of simple messages, the messages of Order A may be polled and sent to different queues. The messages of different queues will not be able to maintain order. In contrast, ordered messages are sent by routing the sequence of messages with the same ShardingKey (same order number) to a logical queue."),(0,s.kt)("h2",{id:"ordered-message-sample-code"},"Ordered Message Sample Code"),(0,s.kt)("p",null,"The ordered message sample code is as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{13}","{13}":!0},'public class Producer {\n    public static void main(String[] args) throws UnsupportedEncodingException {\n        try {\n            DefaultMQProducer producer = new DefaultMQProducer("please_rename_unique_group_name");\n            producer.start();\n\n            String[] tags = new String[] {"TagA", "TagB", "TagC", "TagD", "TagE"};\n            for (int i = 0; i < 100; i++) {\n                int orderId = i % 10;\n                Message msg =\n                    new Message("TopicTest", tags[i % tags.length], "KEY" + i,\n                        ("Hello RocketMQ " + i).getBytes(RemotingHelper.DEFAULT_CHARSET));\n                SendResult sendResult = producer.send(msg, new MessageQueueSelector() {\n                    @Override\n                    public MessageQueue select(List<MessageQueue> mqs, Message msg, Object arg) {\n                        Integer id = (Integer) arg;\n                        int index = id % mqs.size();\n                        return mqs.get(index);\n                    }\n                }, orderId);\n\n                System.out.printf("%s%n", sendResult);\n            }\n\n            producer.shutdown();\n        } catch (MQClientException | RemotingException | MQBrokerException | InterruptedException e) {\n            e.printStackTrace();\n        }\n    }\n}\n')),(0,s.kt)("p",null,"The difference here is mainly the call to the ",(0,s.kt)("inlineCode",{parentName:"p"},"SendResult send(Message msg, MessageQueueSelector selector, Object arg)")," method, where MessageQueueSelector is the queue selector and arg is a Object in Java that can be passed in as a sorting criterion for sending partitioned messages."),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"MessageQueueSelector interface is as follows:"),(0,s.kt)("pre",{parentName:"admonition"},(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"public interface MessageQueueSelector {\n    MessageQueue select(final List<MessageQueue> mqs, final Message msg, final Object arg);\n}\n")),(0,s.kt)("p",{parentName:"admonition"},"In the interface, mqs is the queue, msg is the message, and arg is the object passed in, the queue that message are sent to will be returned. In the above example, the orderId is used as the partitioning criterion, and the remainder of all queues is used to send messages with the same orderId to the same queue.")),(0,s.kt)("h2",{id:"consistency-of-ordered-messages"},"Consistency of Ordered Messages"),(0,s.kt)("p",null,"If a Broker drops out, does the total number of queues change at that point? "),(0,s.kt)("p",null,"If a change occurs, messages with the same ShardingKey will be sent to a different queue causing disorder. If no change occurs, messages will be sent to the queue of the offline Broker, which is bound to fail. Therefore, Apache RocketMQ provides two modes, to guarantee strict order over availability, create Topic by specifying the ",(0,s.kt)("inlineCode",{parentName:"p"},"-o")," parameter (--order) to be true, which represents ordered messages:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell",metastring:"{1}","{1}":!0},"$ sh bin/mqadmin updateTopic -c DefaultCluster -t TopicTest -o true -n 127.0.0.1:9876\ncreate topic to 127.0.0.1:10911 success.\nTopicConfig [topicName=TopicTest, readQueueNums=8, writeQueueNums=8, perm=RW-, topicFilterType=SINGLE_TAG, topicSysFlag=0, order=true, attributes=null]\n")),(0,s.kt)("p",null,"Secondly, make sure that the configuration ",(0,s.kt)("inlineCode",{parentName:"p"},"orderMessageEnable")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"returnOrderTopicConfigToBroker")," in the NameServer must be true. If either of the above conditions is not met, availability is guaranteed rather than strict order."))}l.isMDXComponent=!0},87246:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/\u987a\u5e8f\u6d88\u606f\u53d1\u9001-a80d08ef7dacd4e936c3f6992a1369e5.png"}}]);