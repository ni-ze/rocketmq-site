"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[220],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>N});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var k=n.createContext({}),m=function(t){var e=n.useContext(k),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},u=function(t){var e=m(t.components);return n.createElement(k.Provider,{value:e},t.children)},o="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,k=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),o=m(a),c=r,N=o["".concat(k,".").concat(c)]||o[c]||d[c]||l;return a?n.createElement(N,p(p({ref:e},u),{},{components:a})):n.createElement(N,p({ref:e},u))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=c;var i={};for(var k in e)hasOwnProperty.call(e,k)&&(i[k]=e[k]);i.originalType=t,i[o]="string"==typeof t?t:r,p[1]=i;for(var m=2;m<l;m++)p[m]=a[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},72702:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>k,contentTitle:()=>p,default:()=>o,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const l={},p="\u6743\u9650\u63a7\u5236",i={unversionedId:"bestPractice/18access",id:"version-5.0/bestPractice/18access",title:"\u6743\u9650\u63a7\u5236",description:"1.\u6743\u9650\u63a7\u5236\u7279\u6027\u4ecb\u7ecd",source:"@site/versioned_docs/version-5.0/06-bestPractice/18access.md",sourceDirName:"06-bestPractice",slug:"/bestPractice/18access",permalink:"/zh/docs/bestPractice/18access",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/06-bestPractice/18access.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"Dledger",permalink:"/zh/docs/bestPractice/16dledger"},next:{title:"JVM/OS\u914d\u7f6e",permalink:"/zh/docs/bestPractice/19JVMOS"}},k={},m=[{value:"1.\u6743\u9650\u63a7\u5236\u7279\u6027\u4ecb\u7ecd",id:"1\u6743\u9650\u63a7\u5236\u7279\u6027\u4ecb\u7ecd",level:2},{value:"2. \u6743\u9650\u63a7\u5236\u7684\u5b9a\u4e49\u4e0e\u5c5e\u6027\u503c",id:"2-\u6743\u9650\u63a7\u5236\u7684\u5b9a\u4e49\u4e0e\u5c5e\u6027\u503c",level:2},{value:"2.1\u6743\u9650\u5b9a\u4e49",id:"21\u6743\u9650\u5b9a\u4e49",level:3},{value:"2.2 \u6743\u9650\u5b9a\u4e49\u7684\u5173\u952e\u5c5e\u6027",id:"22-\u6743\u9650\u5b9a\u4e49\u7684\u5173\u952e\u5c5e\u6027",level:3},{value:"3. \u652f\u6301\u6743\u9650\u63a7\u5236\u7684\u96c6\u7fa4\u90e8\u7f72",id:"3-\u652f\u6301\u6743\u9650\u63a7\u5236\u7684\u96c6\u7fa4\u90e8\u7f72",level:2},{value:"4. \u6743\u9650\u63a7\u5236\u4e3b\u8981\u6d41\u7a0b",id:"4-\u6743\u9650\u63a7\u5236\u4e3b\u8981\u6d41\u7a0b",level:2},{value:"4.1 \u6743\u9650\u89e3\u6790",id:"41-\u6743\u9650\u89e3\u6790",level:3},{value:"4.2 \u6743\u9650\u6821\u9a8c",id:"42-\u6743\u9650\u6821\u9a8c",level:3},{value:"5. \u70ed\u52a0\u8f7d\u4fee\u6539\u540e\u6743\u9650\u63a7\u5236\u5b9a\u4e49",id:"5-\u70ed\u52a0\u8f7d\u4fee\u6539\u540e\u6743\u9650\u63a7\u5236\u5b9a\u4e49",level:2},{value:"6. \u6743\u9650\u63a7\u5236\u7684\u4f7f\u7528\u9650\u5236",id:"6-\u6743\u9650\u63a7\u5236\u7684\u4f7f\u7528\u9650\u5236",level:2},{value:"7. ACL mqadmin\u914d\u7f6e\u7ba1\u7406\u547d\u4ee4",id:"7-acl-mqadmin\u914d\u7f6e\u7ba1\u7406\u547d\u4ee4",level:2},{value:"7.1 \u66f4\u65b0ACL\u914d\u7f6e\u6587\u4ef6\u4e2d\u201caccount\u201d\u7684\u5c5e\u6027\u503c",id:"71-\u66f4\u65b0acl\u914d\u7f6e\u6587\u4ef6\u4e2daccount\u7684\u5c5e\u6027\u503c",level:3},{value:"7.2 \u5220\u9664ACL\u914d\u7f6e\u6587\u4ef6\u91cc\u9762\u7684\u5bf9\u5e94\u201caccount\u201d",id:"72-\u5220\u9664acl\u914d\u7f6e\u6587\u4ef6\u91cc\u9762\u7684\u5bf9\u5e94account",level:3},{value:"7.3 \u66f4\u65b0ACL\u914d\u7f6e\u6587\u4ef6\u91cc\u9762\u4e2d\u7684\u5168\u5c40\u767d\u540d\u5355",id:"73-\u66f4\u65b0acl\u914d\u7f6e\u6587\u4ef6\u91cc\u9762\u4e2d\u7684\u5168\u5c40\u767d\u540d\u5355",level:3},{value:"7.4 \u67e5\u8be2\u96c6\u7fa4/Broker\u7684ACL\u914d\u7f6e\u6587\u4ef6\u7248\u672c\u4fe1\u606f",id:"74-\u67e5\u8be2\u96c6\u7fa4broker\u7684acl\u914d\u7f6e\u6587\u4ef6\u7248\u672c\u4fe1\u606f",level:3},{value:"7.5 \u67e5\u8be2\u96c6\u7fa4/Broker\u7684ACL\u914d\u7f6e\u6587\u4ef6\u5168\u90e8\u5185\u5bb9",id:"75-\u67e5\u8be2\u96c6\u7fa4broker\u7684acl\u914d\u7f6e\u6587\u4ef6\u5168\u90e8\u5185\u5bb9",level:3}],u={toc:m};function o(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u6743\u9650\u63a7\u5236"},"\u6743\u9650\u63a7\u5236"),(0,r.kt)("h2",{id:"1\u6743\u9650\u63a7\u5236\u7279\u6027\u4ecb\u7ecd"},"1.\u6743\u9650\u63a7\u5236\u7279\u6027\u4ecb\u7ecd"),(0,r.kt)("p",null,"\u6743\u9650\u63a7\u5236\uff08ACL\uff09\u4e3b\u8981\u4e3a RocketMQ \u63d0\u4f9b Topic \u8d44\u6e90\u7ea7\u522b\u7684\u9ad8\u7ea7\u8bbf\u95ee\u63a7\u5236\u529f\u80fd\u3002\u7528\u6237\u5728\u4f7f\u7528RocketMQ\u6743\u9650\u63a7\u5236\u65f6\uff0c\u53ef\u4ee5\u5728Client\u5ba2\u6237\u7aef\u6ce8\u5165\u7528\u6237\u540d\u548c\u5bc6\u7801\u53c2\u6570\u5b9e\u73b0\u7b7e\u540d\uff0c\u670d\u52a1\u7aef\u901a\u8fc7\u6743\u9650\u63a7\u5236\u53c2\u6570\u5b9e\u73b0\u5404\u4e2a\u8d44\u6e90\u7684\u6743\u9650\u7ba1\u7406\u548c\u6821\u9a8c\u3002"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"ACL\u63a7\u5236\u5728\u589e\u5f3a\u96c6\u7fa4\u8bbf\u95ee\u63a7\u5236\u5b89\u5168\u6027\u7684\u540c\u65f6\u4e5f\u4f1a\u5e26\u6765\u90e8\u7f72\u6d41\u7a0b\u548c\u8fd0\u7ef4\u7ba1\u7406\u7684\u590d\u6742\u5ea6\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u4e00\u822c\u4ec5\u5efa\u8bae\u5728\u7f51\u7edc\u73af\u5883\u4e0d\u5b89\u5168\u3001\u4e1a\u52a1\u6570\u636e\u654f\u611f\u3001\u591a\u90e8\u95e8\u79df\u6237\u6df7\u7528\u7684\u573a\u666f\u4e0b\u4f7f\u7528\u3002\u5982\u679c\u751f\u4ea7\u96c6\u7fa4\u672c\u8eab\u662f\u79c1\u6709\u96c6\u7fa4\u4e0d\u4f1a\u88ab\u5916\u90e8\u90e8\u95e8\u79df\u6237\u8bbf\u95ee\uff0c\u53ef\u4ee5\u4e0d\u5f00\u542f\u3002")),(0,r.kt)("h2",{id:"2-\u6743\u9650\u63a7\u5236\u7684\u5b9a\u4e49\u4e0e\u5c5e\u6027\u503c"},"2. \u6743\u9650\u63a7\u5236\u7684\u5b9a\u4e49\u4e0e\u5c5e\u6027\u503c"),(0,r.kt)("h3",{id:"21\u6743\u9650\u5b9a\u4e49"},"2.1\u6743\u9650\u5b9a\u4e49"),(0,r.kt)("p",null,"\u5bf9RocketMQ\u7684Topic\u8d44\u6e90\u8bbf\u95ee\u6743\u9650\u63a7\u5236\u5b9a\u4e49\u4e3b\u8981\u5982\u4e0b\u8868\u6240\u793a\uff0c\u5206\u4e3a\u4ee5\u4e0b\u56db\u79cd"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6743\u9650"),(0,r.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DENY"),(0,r.kt)("td",{parentName:"tr",align:null},"\u62d2\u7edd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ANY"),(0,r.kt)("td",{parentName:"tr",align:null},"PUB \u6216\u8005 SUB \u6743\u9650")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PUB"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u6743\u9650")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SUB"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8ba2\u9605\u6743\u9650")))),(0,r.kt)("h3",{id:"22-\u6743\u9650\u5b9a\u4e49\u7684\u5173\u952e\u5c5e\u6027"},"2.2 \u6743\u9650\u5b9a\u4e49\u7684\u5173\u952e\u5c5e\u6027"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53d6\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"globalWhiteRemoteAddresses"),(0,r.kt)("td",{parentName:"tr",align:null},"*",";192.168.","*",".","*",";192.168.0.1"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5168\u5c40IP\u767d\u540d\u5355")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"accessKey"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32"),(0,r.kt)("td",{parentName:"tr",align:null},"Access Key")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"secretKey"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32"),(0,r.kt)("td",{parentName:"tr",align:null},"Secret Key")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"whiteRemoteAddress"),(0,r.kt)("td",{parentName:"tr",align:null},"*",";192.168.","*",".","*",";192.168.0.1"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6237IP\u767d\u540d\u5355")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"admin"),(0,r.kt)("td",{parentName:"tr",align:null},"true;false"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u7ba1\u7406\u5458\u8d26\u6237")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"defaultTopicPerm"),(0,r.kt)("td",{parentName:"tr",align:null},"DENY;PUB;SUB;PUB","|","SUB"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u7684Topic\u6743\u9650")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"defaultGroupPerm"),(0,r.kt)("td",{parentName:"tr",align:null},"DENY;PUB;SUB;PUB","|","SUB"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u7684ConsumerGroup\u6743\u9650")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"topicPerms"),(0,r.kt)("td",{parentName:"tr",align:null},"topic=\u6743\u9650"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5404\u4e2aTopic\u7684\u6743\u9650")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"groupPerms"),(0,r.kt)("td",{parentName:"tr",align:null},"group=\u6743\u9650"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5404\u4e2aConsumerGroup\u7684\u6743\u9650")))),(0,r.kt)("p",null,"\u5177\u4f53\u53ef\u4ee5\u53c2\u8003",(0,r.kt)("strong",{parentName:"p"},"distribution/conf/plain_acl.yml"),"\u914d\u7f6e\u6587\u4ef6"),(0,r.kt)("h2",{id:"3-\u652f\u6301\u6743\u9650\u63a7\u5236\u7684\u96c6\u7fa4\u90e8\u7f72"},"3. \u652f\u6301\u6743\u9650\u63a7\u5236\u7684\u96c6\u7fa4\u90e8\u7f72"),(0,r.kt)("p",null,"\u5728",(0,r.kt)("strong",{parentName:"p"},"distribution/conf/plain_acl.yml"),"\u914d\u7f6e\u6587\u4ef6\u4e2d\u6309\u7167\u4e0a\u8ff0\u8bf4\u660e\u5b9a\u4e49\u597d\u6743\u9650\u5c5e\u6027\u540e\uff0c\u6253\u5f00",(0,r.kt)("strong",{parentName:"p"},"aclEnable"),"\u5f00\u5173\u53d8\u91cf\u5373\u53ef\u5f00\u542fRocketMQ\u96c6\u7fa4\u7684ACL\u7279\u6027\u3002\u8fd9\u91cc\u8d34\u51faBroker\u7aef\u5f00\u542fACL\u7279\u6027\u7684properties\u914d\u7f6e\u6587\u4ef6\u5185\u5bb9\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"brokerClusterName=DefaultCluster\nbrokerName=broker-a\nbrokerId=0\ndeleteWhen=04\nfileReservedTime=48\nbrokerRole=ASYNC_MASTER\nflushDiskType=ASYNC_FLUSH\nstorePathRootDir=/data/rocketmq/rootdir-a-m\nstorePathCommitLog=/data/rocketmq/commitlog-a-m\nautoCreateSubscriptionGroup=true\n## if acl is open,the flag will be true\naclEnable=true\nlistenPort=10911\nbrokerIP1=XX.XX.XX.XX1\nnamesrvAddr=XX.XX.XX.XX:9876\n")),(0,r.kt)("h2",{id:"4-\u6743\u9650\u63a7\u5236\u4e3b\u8981\u6d41\u7a0b"},"4. \u6743\u9650\u63a7\u5236\u4e3b\u8981\u6d41\u7a0b"),(0,r.kt)("p",null,"ACL\u4e3b\u8981\u6d41\u7a0b\u5206\u4e3a\u4e24\u90e8\u5206\uff0c\u4e3b\u8981\u5305\u62ec\u6743\u9650\u89e3\u6790\u548c\u6743\u9650\u6821\u9a8c\u3002"),(0,r.kt)("h3",{id:"41-\u6743\u9650\u89e3\u6790"},"4.1 \u6743\u9650\u89e3\u6790"),(0,r.kt)("p",null,"Broker\u7aef\u5bf9\u5ba2\u6237\u7aef\u7684RequestCommand\u8bf7\u6c42\u8fdb\u884c\u89e3\u6790\uff0c\u62ff\u5230\u9700\u8981\u9274\u6743\u7684\u5c5e\u6027\u5b57\u6bb5\u3002\n\u4e3b\u8981\u5305\u62ec\uff1a\n\uff081\uff09AccessKey\uff1a\u7c7b\u4f3c\u4e8e\u7528\u6237\u540d\uff0c\u4ee3\u6307\u7528\u6237\u4e3b\u4f53\uff0c\u6743\u9650\u6570\u636e\u4e0e\u4e4b\u5bf9\u5e94\uff1b\n\uff082\uff09Signature\uff1a\u5ba2\u6237\u6839\u636e SecretKey \u7b7e\u540d\u5f97\u5230\u7684\u4e32\uff0c\u670d\u52a1\u7aef\u518d\u7528SecretKey\u8fdb\u884c\u7b7e\u540d\u9a8c\u8bc1\uff1b"),(0,r.kt)("h3",{id:"42-\u6743\u9650\u6821\u9a8c"},"4.2 \u6743\u9650\u6821\u9a8c"),(0,r.kt)("p",null,"Broker\u7aef\u5bf9\u6743\u9650\u7684\u6821\u9a8c\u903b\u8f91\u4e3b\u8981\u5206\u4e3a\u4ee5\u4e0b\u51e0\u6b65\uff1a\n\uff081\uff09\u68c0\u67e5\u662f\u5426\u547d\u4e2d\u5168\u5c40 IP \u767d\u540d\u5355\uff1b\u5982\u679c\u662f\uff0c\u5219\u8ba4\u4e3a\u6821\u9a8c\u901a\u8fc7\uff1b\u5426\u5219\u8d70 2\uff1b\n\uff082\uff09\u68c0\u67e5\u662f\u5426\u547d\u4e2d\u7528\u6237 IP \u767d\u540d\u5355\uff1b\u5982\u679c\u662f\uff0c\u5219\u8ba4\u4e3a\u6821\u9a8c\u901a\u8fc7\uff1b\u5426\u5219\u8d70 3\uff1b\n\uff083\uff09\u6821\u9a8c\u7b7e\u540d\uff0c\u6821\u9a8c\u4e0d\u901a\u8fc7\uff0c\u629b\u51fa\u5f02\u5e38\uff1b\u6821\u9a8c\u901a\u8fc7\uff0c\u5219\u8d70 4\uff1b\n\uff084\uff09\u5bf9\u7528\u6237\u8bf7\u6c42\u6240\u9700\u7684\u6743\u9650 \u548c \u7528\u6237\u6240\u62e5\u6709\u7684\u6743\u9650\u8fdb\u884c\u6821\u9a8c\uff1b\u4e0d\u901a\u8fc7\uff0c\u629b\u51fa\u5f02\u5e38\uff1b\n\u7528\u6237\u6240\u9700\u6743\u9650\u7684\u6821\u9a8c\u9700\u8981\u6ce8\u610f\u5df2\u4e0b\u5185\u5bb9\uff1a\n\uff081\uff09\u7279\u6b8a\u7684\u8bf7\u6c42\u4f8b\u5982 UPDATE_AND_CREATE_TOPIC \u7b49\uff0c\u53ea\u80fd\u7531 admin \u8d26\u6237\u8fdb\u884c\u64cd\u4f5c\uff1b\n\uff082\uff09\u5bf9\u4e8e\u67d0\u4e2a\u8d44\u6e90\uff0c\u5982\u679c\u6709\u663e\u6027\u914d\u7f6e\u6743\u9650\uff0c\u5219\u91c7\u7528\u914d\u7f6e\u7684\u6743\u9650\uff1b\u5982\u679c\u6ca1\u6709\u663e\u6027\u914d\u7f6e\u6743\u9650\uff0c\u5219\u91c7\u7528\u9ed8\u8ba4\u7684\u6743\u9650\uff1b"),(0,r.kt)("h2",{id:"5-\u70ed\u52a0\u8f7d\u4fee\u6539\u540e\u6743\u9650\u63a7\u5236\u5b9a\u4e49"},"5. \u70ed\u52a0\u8f7d\u4fee\u6539\u540e\u6743\u9650\u63a7\u5236\u5b9a\u4e49"),(0,r.kt)("p",null,"RocketMQ\u7684\u6743\u9650\u63a7\u5236\u5b58\u50a8\u7684\u9ed8\u8ba4\u5b9e\u73b0\u662f\u57fa\u4e8eyml\u914d\u7f6e\u6587\u4ef6\u3002\u7528\u6237\u53ef\u4ee5\u52a8\u6001\u4fee\u6539\u6743\u9650\u63a7\u5236\u5b9a\u4e49\u7684\u5c5e\u6027\uff0c\u800c\u4e0d\u9700\u91cd\u65b0\u542f\u52a8Broker\u670d\u52a1\u8282\u70b9\u3002"),(0,r.kt)("h2",{id:"6-\u6743\u9650\u63a7\u5236\u7684\u4f7f\u7528\u9650\u5236"},"6. \u6743\u9650\u63a7\u5236\u7684\u4f7f\u7528\u9650\u5236"),(0,r.kt)("p",null,"(1)\u5982\u679cACL\u4e0e\u9ad8\u53ef\u7528\u90e8\u7f72(Master/Slave\u67b6\u6784)\u540c\u65f6\u542f\u7528\uff0c\u90a3\u4e48\u9700\u8981\u5728Broker Master\u8282\u70b9\u7684distribution/conf/plain_acl.yml\u914d\u7f6e\u6587\u4ef6\u4e2d\n\u8bbe\u7f6e\u5168\u5c40\u767d\u540d\u5355\u4fe1\u606f\uff0c\u5373\u4e3a\u5c06Slave\u8282\u70b9\u7684ip\u5730\u5740\u8bbe\u7f6e\u81f3Master\u8282\u70b9plain_acl.yml\u914d\u7f6e\u6587\u4ef6\u7684\u5168\u5c40\u767d\u540d\u5355\u4e2d\u3002"),(0,r.kt)("p",null,"(2)\u5982\u679cACL\u4e0e\u9ad8\u53ef\u7528\u90e8\u7f72(\u591a\u526f\u672cDledger\u67b6\u6784)\u540c\u65f6\u542f\u7528\uff0c\u7531\u4e8e\u51fa\u73b0\u8282\u70b9\u5b95\u673a\u65f6\uff0cDledger Group\u7ec4\u5185\u4f1a\u81ea\u52a8\u9009\u4e3b\uff0c\u90a3\u4e48\u5c31\u9700\u8981\u5c06Dledger Group\u7ec4\n\u5185\u6240\u6709Broker\u8282\u70b9\u7684plain_acl.yml\u914d\u7f6e\u6587\u4ef6\u7684\u767d\u540d\u5355\u8bbe\u7f6e\u6240\u6709Broker\u8282\u70b9\u7684ip\u5730\u5740\u3002"),(0,r.kt)("h2",{id:"7-acl-mqadmin\u914d\u7f6e\u7ba1\u7406\u547d\u4ee4"},"7. ACL mqadmin\u914d\u7f6e\u7ba1\u7406\u547d\u4ee4"),(0,r.kt)("h3",{id:"71-\u66f4\u65b0acl\u914d\u7f6e\u6587\u4ef6\u4e2daccount\u7684\u5c5e\u6027\u503c"},"7.1 \u66f4\u65b0ACL\u914d\u7f6e\u6587\u4ef6\u4e2d\u201caccount\u201d\u7684\u5c5e\u6027\u503c"),(0,r.kt)("p",null,"\u8be5\u547d\u4ee4\u7684\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ sh mqadmin updateAclConfig -n 192.168.1.2:9876 -b 192.168.12.134:10911 -a RocketMQ -s 1234567809123 -t topicA=DENY,topicD=SUB -g groupD=DENY,groupB=SUB\n")),(0,r.kt)("p",null,"\u8bf4\u660e\uff1a\u5982\u679c\u4e0d\u5b58\u5728\u5219\u4f1a\u5728ACL Config YAML\u914d\u7f6e\u6587\u4ef6\u4e2d\u521b\u5efa\uff1b\u82e5\u5b58\u5728\uff0c\u5219\u4f1a\u66f4\u65b0\u5bf9\u5e94\u7684\u201caccounts\u201d\u7684\u5c5e\u6027\u503c;\n\u5982\u679c\u6307\u5b9a\u7684\u662f\u96c6\u7fa4\u540d\u79f0\uff0c\u5219\u4f1a\u5728\u96c6\u7fa4\u4e2d\u5404\u4e2abroker\u8282\u70b9\u6267\u884c\u8be5\u547d\u4ee4\uff1b\u5426\u5219\u4f1a\u5728\u5355\u4e2abroker\u8282\u70b9\u6267\u884c\u8be5\u547d\u4ee4\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53d6\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"n"),(0,r.kt)("td",{parentName:"tr",align:null},"eg:192.168.1.2:9876"),(0,r.kt)("td",{parentName:"tr",align:null},"namesrv\u5730\u5740(\u5fc5\u586b)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"c"),(0,r.kt)("td",{parentName:"tr",align:null},"eg:DefaultCluster"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u96c6\u7fa4\u540d\u79f0(\u4e0ebroker\u5730\u5740\u4e8c\u9009\u4e00)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"b"),(0,r.kt)("td",{parentName:"tr",align:null},"eg:192.168.12.134:10911"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9abroker\u5730\u5740(\u4e0e\u96c6\u7fa4\u540d\u79f0\u4e8c\u9009\u4e00)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"a"),(0,r.kt)("td",{parentName:"tr",align:null},"eg:RocketMQ"),(0,r.kt)("td",{parentName:"tr",align:null},"Access Key\u503c(\u5fc5\u586b)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"s"),(0,r.kt)("td",{parentName:"tr",align:null},"eg:1234567809123"),(0,r.kt)("td",{parentName:"tr",align:null},"Secret Key\u503c(\u53ef\u9009)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"m"),(0,r.kt)("td",{parentName:"tr",align:null},"eg:true"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u7ba1\u7406\u5458\u8d26\u6237(\u53ef\u9009)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"w"),(0,r.kt)("td",{parentName:"tr",align:null},"eg:192.168.0.*"),(0,r.kt)("td",{parentName:"tr",align:null},"whiteRemoteAddress,\u7528\u6237IP\u767d\u540d\u5355(\u53ef\u9009)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"i"),(0,r.kt)("td",{parentName:"tr",align:null},"eg:DENY;PUB;SUB;PUB","|","SUB"),(0,r.kt)("td",{parentName:"tr",align:null},"defaultTopicPerm,\u9ed8\u8ba4Topic\u6743\u9650(\u53ef\u9009)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"u"),(0,r.kt)("td",{parentName:"tr",align:null},"eg:DENY;PUB;SUB;PUB","|","SUB"),(0,r.kt)("td",{parentName:"tr",align:null},"defaultGroupPerm,\u9ed8\u8ba4ConsumerGroup\u6743\u9650(\u53ef\u9009)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"t"),(0,r.kt)("td",{parentName:"tr",align:null},"eg:topicA=DENY,topicD=SUB"),(0,r.kt)("td",{parentName:"tr",align:null},"topicPerms,\u5404\u4e2aTopic\u7684\u6743\u9650(\u53ef\u9009)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"g"),(0,r.kt)("td",{parentName:"tr",align:null},"eg:groupD=DENY,groupB=SUB"),(0,r.kt)("td",{parentName:"tr",align:null},"groupPerms,\u5404\u4e2aConsumerGroup\u7684\u6743\u9650(\u53ef\u9009)")))),(0,r.kt)("h3",{id:"72-\u5220\u9664acl\u914d\u7f6e\u6587\u4ef6\u91cc\u9762\u7684\u5bf9\u5e94account"},"7.2 \u5220\u9664ACL\u914d\u7f6e\u6587\u4ef6\u91cc\u9762\u7684\u5bf9\u5e94\u201caccount\u201d"),(0,r.kt)("p",null,"\u8be5\u547d\u4ee4\u7684\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ sh mqadmin deleteAccessConfig -n 192.168.1.2:9876 -c DefaultCluster -a RocketMQ\n")),(0,r.kt)("p",null,'\u8bf4\u660e\uff1a\u5982\u679c\u6307\u5b9a\u7684\u662f\u96c6\u7fa4\u540d\u79f0\uff0c\u5219\u4f1a\u5728\u96c6\u7fa4\u4e2d\u5404\u4e2abroker\u8282\u70b9\u6267\u884c\u8be5\u547d\u4ee4\uff1b\u5426\u5219\u4f1a\u5728\u5355\u4e2abroker\u8282\u70b9\u6267\u884c\u8be5\u547d\u4ee4\u3002\n\u5176\u4e2d\uff0c\u53c2\u6570"a"\u4e3aAccess Key\u7684\u503c\uff0c\u7528\u4ee5\u6807\u8bc6\u552f\u4e00\u8d26\u6237id\uff0c\u56e0\u6b64\u8be5\u547d\u4ee4\u7684\u53c2\u6570\u4e2d\u6307\u5b9a\u8d26\u6237id\u5373\u53ef\u3002'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53d6\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"n"),(0,r.kt)("td",{parentName:"tr",align:null},"eg:192.168.1.2:9876"),(0,r.kt)("td",{parentName:"tr",align:null},"namesrv\u5730\u5740(\u5fc5\u586b)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"c"),(0,r.kt)("td",{parentName:"tr",align:null},"eg:DefaultCluster"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u96c6\u7fa4\u540d\u79f0(\u4e0ebroker\u5730\u5740\u4e8c\u9009\u4e00)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"b"),(0,r.kt)("td",{parentName:"tr",align:null},"eg:192.168.12.134:10911"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9abroker\u5730\u5740(\u4e0e\u96c6\u7fa4\u540d\u79f0\u4e8c\u9009\u4e00)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"a"),(0,r.kt)("td",{parentName:"tr",align:null},"eg:RocketMQ"),(0,r.kt)("td",{parentName:"tr",align:null},"Access Key\u7684\u503c(\u5fc5\u586b)")))),(0,r.kt)("h3",{id:"73-\u66f4\u65b0acl\u914d\u7f6e\u6587\u4ef6\u91cc\u9762\u4e2d\u7684\u5168\u5c40\u767d\u540d\u5355"},"7.3 \u66f4\u65b0ACL\u914d\u7f6e\u6587\u4ef6\u91cc\u9762\u4e2d\u7684\u5168\u5c40\u767d\u540d\u5355"),(0,r.kt)("p",null,"\u8be5\u547d\u4ee4\u7684\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ sh mqadmin updateGlobalWhiteAddr -n 192.168.1.2:9876 -b 192.168.12.134:10911 -g 10.10.154.1,10.10.154.2\n")),(0,r.kt)("p",null,'\u8bf4\u660e\uff1a\u5982\u679c\u6307\u5b9a\u7684\u662f\u96c6\u7fa4\u540d\u79f0\uff0c\u5219\u4f1a\u5728\u96c6\u7fa4\u4e2d\u5404\u4e2abroker\u8282\u70b9\u6267\u884c\u8be5\u547d\u4ee4\uff1b\u5426\u5219\u4f1a\u5728\u5355\u4e2abroker\u8282\u70b9\u6267\u884c\u8be5\u547d\u4ee4\u3002\n\u5176\u4e2d\uff0c\u53c2\u6570"g"\u4e3a\u5168\u5c40IP\u767d\u540d\u7684\u503c\uff0c\u7528\u4ee5\u66f4\u65b0ACL\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u201cglobalWhiteRemoteAddresses\u201d\u5b57\u6bb5\u7684\u5c5e\u6027\u503c\u3002'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53d6\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"n"),(0,r.kt)("td",{parentName:"tr",align:null},"eg:192.168.1.2:9876"),(0,r.kt)("td",{parentName:"tr",align:null},"namesrv\u5730\u5740(\u5fc5\u586b)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"c"),(0,r.kt)("td",{parentName:"tr",align:null},"eg:DefaultCluster"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u96c6\u7fa4\u540d\u79f0(\u4e0ebroker\u5730\u5740\u4e8c\u9009\u4e00)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"b"),(0,r.kt)("td",{parentName:"tr",align:null},"eg:192.168.12.134:10911"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9abroker\u5730\u5740(\u4e0e\u96c6\u7fa4\u540d\u79f0\u4e8c\u9009\u4e00)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"g"),(0,r.kt)("td",{parentName:"tr",align:null},"eg:10.10.154.1,10.10.154.2"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5168\u5c40IP\u767d\u540d\u5355(\u5fc5\u586b)")))),(0,r.kt)("h3",{id:"74-\u67e5\u8be2\u96c6\u7fa4broker\u7684acl\u914d\u7f6e\u6587\u4ef6\u7248\u672c\u4fe1\u606f"},"7.4 \u67e5\u8be2\u96c6\u7fa4/Broker\u7684ACL\u914d\u7f6e\u6587\u4ef6\u7248\u672c\u4fe1\u606f"),(0,r.kt)("p",null,"\u8be5\u547d\u4ee4\u7684\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ sh mqadmin clusterAclConfigVersion -n 192.168.1.2:9876 -c DefaultCluster\n")),(0,r.kt)("p",null,"\u8bf4\u660e\uff1a\u5982\u679c\u6307\u5b9a\u7684\u662f\u96c6\u7fa4\u540d\u79f0\uff0c\u5219\u4f1a\u5728\u96c6\u7fa4\u4e2d\u5404\u4e2abroker\u8282\u70b9\u6267\u884c\u8be5\u547d\u4ee4\uff1b\u5426\u5219\u4f1a\u5728\u5355\u4e2abroker\u8282\u70b9\u6267\u884c\u8be5\u547d\u4ee4\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53d6\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"n"),(0,r.kt)("td",{parentName:"tr",align:null},"eg:192.168.1.2:9876"),(0,r.kt)("td",{parentName:"tr",align:null},"namesrv\u5730\u5740(\u5fc5\u586b)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"c"),(0,r.kt)("td",{parentName:"tr",align:null},"eg:DefaultCluster"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u96c6\u7fa4\u540d\u79f0(\u4e0ebroker\u5730\u5740\u4e8c\u9009\u4e00)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"b"),(0,r.kt)("td",{parentName:"tr",align:null},"eg:192.168.12.134:10911"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9abroker\u5730\u5740(\u4e0e\u96c6\u7fa4\u540d\u79f0\u4e8c\u9009\u4e00)")))),(0,r.kt)("h3",{id:"75-\u67e5\u8be2\u96c6\u7fa4broker\u7684acl\u914d\u7f6e\u6587\u4ef6\u5168\u90e8\u5185\u5bb9"},"7.5 \u67e5\u8be2\u96c6\u7fa4/Broker\u7684ACL\u914d\u7f6e\u6587\u4ef6\u5168\u90e8\u5185\u5bb9"),(0,r.kt)("p",null,"\u8be5\u547d\u4ee4\u7684\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ sh mqadmin getAccessConfigSubCommand -n 192.168.1.2:9876 -c DefaultCluster\n")),(0,r.kt)("p",null,"\u8bf4\u660e\uff1a\u5982\u679c\u6307\u5b9a\u7684\u662f\u96c6\u7fa4\u540d\u79f0\uff0c\u5219\u4f1a\u5728\u96c6\u7fa4\u4e2d\u5404\u4e2abroker\u8282\u70b9\u6267\u884c\u8be5\u547d\u4ee4\uff1b\u5426\u5219\u4f1a\u5728\u5355\u4e2abroker\u8282\u70b9\u6267\u884c\u8be5\u547d\u4ee4\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53d6\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"n"),(0,r.kt)("td",{parentName:"tr",align:null},"eg:192.168.1.2:9876"),(0,r.kt)("td",{parentName:"tr",align:null},"namesrv\u5730\u5740(\u5fc5\u586b)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"c"),(0,r.kt)("td",{parentName:"tr",align:null},"eg:DefaultCluster"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u96c6\u7fa4\u540d\u79f0(\u4e0ebroker\u5730\u5740\u4e8c\u9009\u4e00)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"b"),(0,r.kt)("td",{parentName:"tr",align:null},"eg:192.168.12.134:10911"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9abroker\u5730\u5740(\u4e0e\u96c6\u7fa4\u540d\u79f0\u4e8c\u9009\u4e00)")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7279\u522b\u6ce8\u610f"),"\u5f00\u542fAcl\u9274\u6743\u8ba4\u8bc1\u540e\u5bfc\u81f4Master/Slave\u548cDledger\u6a21\u5f0f\u4e0bBroker\u540c\u6b65\u6570\u636e\u5f02\u5e38\u7684\u95ee\u9898\uff0c\n\u5728\u793e\u533a","[4.5.1]","\u7248\u672c\u4e2d\u5df2\u7ecf\u4fee\u590d\uff0c\u5177\u4f53\u7684PR\u94fe\u63a5\u4e3a\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/rocketmq/pull/1149%EF%BC%9B"},"https://github.com/apache/rocketmq/pull/1149\uff1b")))}o.isMDXComponent=!0}}]);