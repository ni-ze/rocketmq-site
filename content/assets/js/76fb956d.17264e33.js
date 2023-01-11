"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[3487],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),i=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},k="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),k=i(n),m=r,v=k["".concat(s,".").concat(m)]||k[m]||p[m]||o;return n?a.createElement(v,l(l({ref:t},c),{},{components:n})):a.createElement(v,l({ref:t},c))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[k]="string"==typeof e?e:r,l[1]=u;for(var i=2;i<o;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},56028:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>u,toc:()=>i});var a=n(87462),r=(n(67294),n(3905));const o={},l="RocketMQ Streams \u5feb\u901f\u5f00\u59cb",u={unversionedId:"streams/32RocketMQ Streams Quick Start",id:"version-5.0/streams/32RocketMQ Streams Quick Start",title:"RocketMQ Streams \u5feb\u901f\u5f00\u59cb",description:"License",source:"@site/versioned_docs/version-5.0/07-streams/32RocketMQ Streams Quick Start.md",sourceDirName:"07-streams",slug:"/streams/32RocketMQ Streams Quick Start",permalink:"/docs/streams/32RocketMQ Streams Quick Start",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/07-streams/32RocketMQ Streams Quick Start.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"RocketMQ Streams \u6838\u5fc3\u6982\u5ff5",permalink:"/docs/streams/31RocketMQ Streams Concept"},next:{title:"RocketMQ Connect \u6982\u89c8",permalink:"/docs/\u6570\u636e\u96c6\u6210/25RocketMQ Connect Overview"}},s={},i=[{value:"RocketMQ Streams\u5de5\u7a0b\u4e2d\u8fd0\u884c",id:"rocketmq-streams\u5de5\u7a0b\u4e2d\u8fd0\u884c",level:2},{value:"RocketMQ Streams\u4ee5SDK\u65b9\u5f0f\u88ab\u5e94\u7528\u4f9d\u8d56",id:"rocketmq-streams\u4ee5sdk\u65b9\u5f0f\u88ab\u5e94\u7528\u4f9d\u8d56",level:2},{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",level:3},{value:"\u6784\u5efaRocketMQ Streams",id:"\u6784\u5efarocketmq-streams",level:3},{value:"\u6dfb\u52a0pom\u4f9d\u8d56",id:"\u6dfb\u52a0pom\u4f9d\u8d56",level:3},{value:"\u7f16\u5199\u6d41\u8ba1\u7b97\u7a0b\u5e8f",id:"\u7f16\u5199\u6d41\u8ba1\u7b97\u7a0b\u5e8f",level:3},{value:"\u5411RocketMQ sourceTopic\u4e2d\u5199\u5165\u6570\u636e\u5e76\u89c2\u5bdf\u7ed3\u679c",id:"\u5411rocketmq-sourcetopic\u4e2d\u5199\u5165\u6570\u636e\u5e76\u89c2\u5bdf\u7ed3\u679c",level:3}],c={toc:i};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rocketmq-streams-\u5feb\u901f\u5f00\u59cb"},"RocketMQ Streams \u5feb\u901f\u5f00\u59cb"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.apache.org/licenses/LICENSE-2.0.html"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/license-Apache%202-4EB1BA.svg",alt:"License"}))),(0,r.kt)("h2",{id:"rocketmq-streams\u5de5\u7a0b\u4e2d\u8fd0\u884c"},"RocketMQ Streams\u5de5\u7a0b\u4e2d\u8fd0\u884c"),(0,r.kt)("p",null,"\u53c2\u8003RocketMQ Streams\u5de5\u7a0brocketmq-streams-examples\u6a21\u5757\u4e0b\u7a0b\u5e8f\u53ef\u4ee5\u76f4\u63a5\u8fd0\u884c\uff1b\u8fd0\u884cexample\u6b65\u9aa4\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u672c\u5730\u542f\u52a8RocketMQ 5.0\u53ca\u4ee5\u4e0a\u7248\u672c;"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528mqAdmin\u521b\u5efaexample\u4e2d\u6570\u636e\u6e90topic\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u542f\u52a8example\u4e2d\u4f8b\u5b50\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u5411RocketMQ\u7684\u6e90topic\u4e2d\u5199\u5165\u5408\u9002\u6570\u636e\uff08\u4f9d\u636e\u793a\u4f8b\u800c\u5b9a\uff09\uff1b")),(0,r.kt)("h2",{id:"rocketmq-streams\u4ee5sdk\u65b9\u5f0f\u88ab\u5e94\u7528\u4f9d\u8d56"},"RocketMQ Streams\u4ee5SDK\u65b9\u5f0f\u88ab\u5e94\u7528\u4f9d\u8d56"),(0,r.kt)("h3",{id:"\u73af\u5883\u51c6\u5907"},"\u73af\u5883\u51c6\u5907"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"64bit JDK 1.8\u53ca\u4ee5\u4e0a"),(0,r.kt)("li",{parentName:"ul"},"Maven 3.2\u53ca\u4ee5\u4e0a"),(0,r.kt)("li",{parentName:"ul"},"\u672c\u5730\u542f\u52a8RocketMQ\uff0c",(0,r.kt)("a",{parentName:"li",href:"https://rocketmq.apache.org/docs/quick-start/"},"\u542f\u52a8\u6587\u6863"))),(0,r.kt)("h3",{id:"\u6784\u5efarocketmq-streams"},"\u6784\u5efaRocketMQ Streams"),(0,r.kt)("h3",{id:"\u6dfb\u52a0pom\u4f9d\u8d56"},"\u6dfb\u52a0pom\u4f9d\u8d56"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"}," <dependencies>\n    <dependency>\n        <groupId>org.apache.rocketmq</groupId>\n        <artifactId>rocketmq-streams</artifactId>\n            \x3c!-- \u6839\u636e\u9700\u8981\u4fee\u6539 --\x3e\n        <version>1.1.0</version>\n    </dependency>\n</dependencies>\n")),(0,r.kt)("h3",{id:"\u7f16\u5199\u6d41\u8ba1\u7b97\u7a0b\u5e8f"},"\u7f16\u5199\u6d41\u8ba1\u7b97\u7a0b\u5e8f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class WordCount {\n    public static void main(String[] args) {\n        StreamBuilder builder = new StreamBuilder("wordCount");\n\n        builder.source("sourceTopic", total -> {\n                    String value = new String(total, StandardCharsets.UTF_8);\n                    return new Pair<>(null, value);\n                })\n                .flatMap((ValueMapperAction<String, List<String>>) value -> {\n                    String[] splits = value.toLowerCase().split("\\\\W+");\n                    return Arrays.asList(splits);\n                })\n                .keyBy(value -> value)\n                .count()\n                .toRStream()\n                .print();\n\n        TopologyBuilder topologyBuilder = builder.build();\n\n        Properties properties = new Properties();\n        properties.put(MixAll.NAMESRV_ADDR_PROPERTY, "127.0.0.1:9876");\n\n        RocketMQStream rocketMQStream = new RocketMQStream(topologyBuilder, properties);\n\n        final CountDownLatch latch = new CountDownLatch(1);\n\n        Runtime.getRuntime().addShutdownHook(new Thread("wordcount-shutdown-hook") {\n            @Override\n            public void run() {\n                rocketMQStream.stop();\n                latch.countDown();\n            }\n        });\n\n        try {\n            rocketMQStream.start();\n            latch.await();\n        } catch (final Throwable e) {\n            System.exit(1);\n        }\n        System.exit(0);\n    }\n}\n')),(0,r.kt)("h3",{id:"\u5411rocketmq-sourcetopic\u4e2d\u5199\u5165\u6570\u636e\u5e76\u89c2\u5bdf\u7ed3\u679c"},"\u5411RocketMQ sourceTopic\u4e2d\u5199\u5165\u6570\u636e\u5e76\u89c2\u5bdf\u7ed3\u679c"),(0,r.kt)("p",null,"\u5982\u679c\u5411sourceTopic\u4e2d\u5199\u5165\u7684\u6570\u636e\u5982\u4e0b\uff1a\u6bcf\u884c\u6570\u636e\u4f5c\u4e3a\u4e00\u4e2a\u6d88\u606f\u53d1\u9001\uff1b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'"To be, or not to be,--that is the question:--",\n"Whether \'tis nobler in the mind to suffer",\n"The slings and arrows of outrageous fortune",\n"Or to take arms against a sea of troubles,",\n"And by opposing end them?--To die,--to sleep,--",\n"No more; and by a sleep to say we end",\n"The heartache, and the thousand natural shocks",\n"That flesh is heir to,--\'tis a consummation",\n')),(0,r.kt)("p",null,"\u7edf\u8ba1\u5355\u8bcd\u51fa\u73b0\u9891\u7387\uff0c\u8ba1\u7b97\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"(key=to, value=1)\n(key=be, value=1)\n(key=or, value=1)\n(key=not, value=1)\n(key=to, value=2)\n(key=be, value=2)\n(key=that, value=1)\n(key=is, value=1)\n(key=the, value=1)\n(key=whether, value=1)\n(key=tis, value=1)\n(key=nobler, value=1)\n(key=mind, value=1)\n(key=against, value=1)\n(key=troubles, value=1)\n(key=slings, value=1)\n(key=die, value=1)\n(key=natural, value=1)\n(key=flesh, value=1)\n(key=sea, value=1)\n(key=fortune, value=1)\n(key=shocks, value=1)\n(key=consummation, value=1)\n(key=to, value=3)\n(key=to, value=4)\n(key=to, value=5)\n(key=say, value=1)\n(key=end, value=1)\n(key=end, value=2)\n(key=to, value=6)\n(key=to, value=7)\n(key=to, value=8)\n(key=or, value=2)\n(key=them, value=1)\n(key=take, value=1)\n(key=arms, value=1)\n(key=of, value=1)\n(key=and, value=1)\n(key=of, value=2)\n(key=and, value=2)\n(key=by, value=1)\n(key=sleep, value=1)\n(key=and, value=3)\n(key=by, value=2)\n(key=sleep, value=2)\n(key=and, value=4)\n(key=that, value=2)\n(key=arrows, value=1)\n(key=heir, value=1)\n(key=question, value=1)\n(key=is, value=2)\n(key=the, value=2)\n(key=suffer, value=1)\n(key=a, value=1)\n(key=the, value=3)\n(key=no, value=1)\n(key=a, value=2)\n(key=opposing, value=1)\n(key=the, value=4)\n(key=the, value=5)\n(key=a, value=3)\n(key=in, value=1)\n(key=more, value=1)\n(key=heartache, value=1)\n(key=outrageous, value=1)\n(key=we, value=1)\n(key=thousand, value=1)\n(key=tis, value=2)\n")))}k.isMDXComponent=!0}}]);