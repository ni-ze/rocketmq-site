"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[4189],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(h,s(s({ref:t},u),{},{components:r})):n.createElement(h,s({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},17089:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={},s="Quickstart",i={unversionedId:"introduction/02quickstart",id:"introduction/02quickstart",title:"Quickstart",description:"This section will introduce the method of quickly building and deploying a single-Master RocketMQ cluster to complete simple message sending and receiving.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/01-introduction/02quickstart.md",sourceDirName:"01-introduction",slug:"/introduction/02quickstart",permalink:"/docs/4.x/introduction/02quickstart",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/docs/01-introduction/02quickstart.md",tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"Why choose RocketMQ",permalink:"/docs/4.x/"},next:{title:"What is RocketMQ",permalink:"/docs/4.x/introduction/03whatis"}},c={},l=[{value:"1. Get Apache RocketMQ",id:"1-get-apache-rocketmq",level:2},{value:"2. Start the NameServer",id:"2-start-the-nameserver",level:2},{value:"3. Start the Broker",id:"3-start-the-broker",level:2},{value:"4. Send and Receive Messages",id:"4-send-and-receive-messages",level:2},{value:"5. Shutdown Servers",id:"5-shutdown-servers",level:2}],u={toc:l},d="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"quickstart"},"Quickstart"),(0,a.kt)("p",null,"This section will introduce the method of quickly building and deploying a single-Master RocketMQ cluster to complete simple message sending and receiving."),(0,a.kt)("admonition",{title:"System Requirement",type:"tip"},(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},"64-bit OS\uff0cLinux/Unix/macOS is recommended"),(0,a.kt)("li",{parentName:"ol"},"64-bit JDK 1.8+"))),(0,a.kt)("h2",{id:"1-get-apache-rocketmq"},"1. Get Apache RocketMQ"),(0,a.kt)("admonition",{title:"Download RocketMQ",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"RocketMQ's installation is divided into two types: binary and source. Click ",(0,a.kt)("a",{parentName:"p",href:"https://archive.apache.org/dist/rocketmq/4.9.4/rocketmq-all-4.9.4-source-release.zip"},"here")," to download Apache RocketMQ 4.9.4 source package, or download the binary package from ",(0,a.kt)("a",{parentName:"p",href:"https://archive.apache.org/dist/rocketmq/4.9.4/rocketmq-all-4.9.4-bin-release.zip"},"here"),". The binary package can be run directly since it has been compiled, and the source package needs to be compiled and run.")),(0,a.kt)("p",null,"The following instruction takes the application of RocketMQ 4.9.4 source package in Linux environment as an example in order to introduce the installation process of RocketMQ."),(0,a.kt)("p",null,"Extract the source package of RocketMQ 4.9.4, then compile and build the binary executables:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ unzip rocketmq-all-4.9.4-source-release.zip\n$ cd rocketmq-all-4.9.4-source-release/\n$ mvn -Prelease-all -DskipTests clean install -U\n$ cd distribution/target/rocketmq-4.9.4/rocketmq-4.9.4\n")),(0,a.kt)("h2",{id:"2-start-the-nameserver"},"2. Start the NameServer"),(0,a.kt)("p",null,"After the installation of RocketMQ, start the NameServer:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"### Start the namesrv service\n$ nohup sh bin/mqnamesrv &\n \n### Verify that the namesrv service is started successfully\n$ tail -f ~/logs/rocketmqlogs/namesrv.log\nThe Name Server boot success...\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Once we see ",(0,a.kt)("strong",{parentName:"p"},"'The Name Server boot success..'")," from namesrv.log, it means the NameServer has been started successfully.")),(0,a.kt)("h2",{id:"3-start-the-broker"},"3. Start the Broker"),(0,a.kt)("p",null,"Start the Broker after the NameServer has been launched:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"### Start the broker service\n$ nohup sh bin/mqbroker -n localhost:9876 &\n\n### Verify that the broker service is started successfully, for example, the broker's ip is 192.168.1.2 and the name is broker-a\n$ tail -f ~/logs/rocketmqlogs/broker.log \nThe broker[broker-a,192.169.1.2:10911] boot success...\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Once we see \u201cThe broker","[brokerName,ip:port]"," boot success..\u201d from broker.log, it means the Broker has been started successfully.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Thus far, a single-Master RocketMQ cluster has been deployed, and we are able to send and receive simple messages by scripts.")),(0,a.kt)("h2",{id:"4-send-and-receive-messages"},"4. Send and Receive Messages"),(0,a.kt)("p",null,"Before sending and receiving messages, the clients need to identify the address of the NameServer. RocketMQ has multiple ways to set the NameServer address on the client side. One of them is to modify the environment variable ",(0,a.kt)("inlineCode",{parentName:"p"},"NAMESRV_ADDR")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ export NAMESRV_ADDR=localhost:9876\n$ sh bin/tools.sh org.apache.rocketmq.example.quickstart.Producer\n SendResult [sendStatus=SEND_OK, msgId= ...\n\n$ sh bin/tools.sh org.apache.rocketmq.example.quickstart.Consumer\n ConsumeMessageThread_%d Receive New Messages: [MessageExt...\n")),(0,a.kt)("h2",{id:"5-shutdown-servers"},"5. Shutdown Servers"),(0,a.kt)("p",null,"After finishing the practice, we could shut down the service by the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ sh bin/mqshutdown broker\nThe mqbroker(36695) is running...\nSend shutdown request to mqbroker(36695) OK\n\n$ sh bin/mqshutdown namesrv\nThe mqnamesrv(36664) is running...\nSend shutdown request to mqnamesrv(36664) OK\n")))}p.isMDXComponent=!0}}]);