"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[539],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>k});var l=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},o=Object.keys(e);for(l=0;l<o.length;l++)r=o[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)r=o[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=l.createContext({}),c=function(e){var t=l.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=c(e.components);return l.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=c(r),d=n,k=s["".concat(p,".").concat(d)]||s[d]||u[d]||o;return r?l.createElement(k,a(a({ref:t},m),{},{components:r})):l.createElement(k,a({ref:t},m))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:n,a[1]=i;for(var c=2;c<o;c++)a[c]=r[c];return l.createElement.apply(null,a)}return l.createElement.apply(null,r)}d.displayName="MDXCreateElement"},75265:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var l=r(87462),n=(r(67294),r(3905));const o={},a="\u4e3b\u5907\u81ea\u52a8\u5207\u6362\u6a21\u5f0f\u90e8\u7f72",i={unversionedId:"deploymentOperations/03autofailover",id:"version-5.0/deploymentOperations/03autofailover",title:"\u4e3b\u5907\u81ea\u52a8\u5207\u6362\u6a21\u5f0f\u90e8\u7f72",description:"\u67b6\u6784\u56fe",source:"@site/versioned_docs/version-5.0/05-deploymentOperations/03autofailover.md",sourceDirName:"05-deploymentOperations",slug:"/deploymentOperations/03autofailover",permalink:"/zh/docs/deploymentOperations/03autofailover",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/05-deploymentOperations/03autofailover.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"Admin Tool",permalink:"/zh/docs/deploymentOperations/02admintool"},next:{title:"RocketMQ Dashboard",permalink:"/zh/docs/deploymentOperations/04Dashboard"}},p={},c=[{value:"Controller \u90e8\u7f72",id:"controller-\u90e8\u7f72",level:2},{value:"Controller \u5d4c\u5165 NameServer \u90e8\u7f72",id:"controller-\u5d4c\u5165-nameserver-\u90e8\u7f72",level:3},{value:"Controller \u72ec\u7acb\u90e8\u7f72",id:"controller-\u72ec\u7acb\u90e8\u7f72",level:3},{value:"Broker \u90e8\u7f72",id:"broker-\u90e8\u7f72",level:2},{value:"\u517c\u5bb9\u6027",id:"\u517c\u5bb9\u6027",level:2},{value:"\u5347\u7ea7\u6ce8\u610f\u4e8b\u9879",id:"\u5347\u7ea7\u6ce8\u610f\u4e8b\u9879",level:2}],m={toc:c},s="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(s,(0,l.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u4e3b\u5907\u81ea\u52a8\u5207\u6362\u6a21\u5f0f\u90e8\u7f72"},"\u4e3b\u5907\u81ea\u52a8\u5207\u6362\u6a21\u5f0f\u90e8\u7f72"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u67b6\u6784\u56fe",src:r(40374).Z,width:"1517",height:"826"})),(0,n.kt)("p",null,"\u8be5\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u90e8\u7f72\u652f\u6301\u81ea\u52a8\u4e3b\u4ece\u5207\u6362\u7684 RocketMQ \u96c6\u7fa4\uff0c\u5176\u67b6\u6784\u5982\u4e0a\u56fe\u6240\u793a\uff0c\u4e3b\u8981\u589e\u52a0\u652f\u6301\u81ea\u52a8\u4e3b\u4ece\u5207\u6362\u7684 Controller \u7ec4\u4ef6\uff0c\u5176\u53ef\u4ee5\u72ec\u7acb\u90e8\u7f72\u4e5f\u53ef\u4ee5\u5185\u5d4c\u5728 NameServer \u4e2d\u3002"),(0,n.kt)("admonition",{title:"\u53c2\u8003",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"\u8be6\u7ec6\u53ef\u53c2\u8003 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/rocketmq/blob/develop/docs/cn/controller/design.md"},"\u8bbe\u8ba1\u601d\u60f3")," \u548c ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/rocketmq/blob/develop/docs/cn/controller/quick_start.md"},"\u5feb\u901f\u5f00\u59cb"))),(0,n.kt)("h2",{id:"controller-\u90e8\u7f72"},"Controller \u90e8\u7f72"),(0,n.kt)("p",null,"Controller \u7ec4\u4ef6\u63d0\u4f9b\u9009\u4e3b\u80fd\u529b\uff0c\u82e5\u9700\u8981\u4fdd\u8bc1 Controller \u5177\u5907\u5bb9\u9519\u80fd\u529b\uff0cController \u90e8\u7f72\u9700\u8981\u4e09\u526f\u672c\u53ca\u4ee5\u4e0a\uff08\u9075\u5faa Raft \u7684\u591a\u6570\u6d3e\u534f\u8bae\uff09\u3002"),(0,n.kt)("admonition",{title:"\u6ce8\u610f",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Controller \u82e5\u53ea\u90e8\u7f72\u5355\u526f\u672c\u4e5f\u80fd\u5b8c\u6210 Broker Failover\uff0c\u4f46\u82e5\u8be5\u5355\u70b9 Controller \u6545\u969c\uff0c\u4f1a\u5f71\u54cd\u5207\u6362\u80fd\u529b\uff0c\u4f46\u4e0d\u4f1a\u5f71\u54cd\u5b58\u91cf\u96c6\u7fa4\u7684\u6b63\u5e38\u6536\u53d1\u3002")),(0,n.kt)("p",null,"Controller \u90e8\u7f72\u6709\u4e24\u79cd\u65b9\u5f0f\u3002\u4e00\u79cd\u662f\u5d4c\u5165\u4e8e NameServer \u8fdb\u884c\u90e8\u7f72\uff0c\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e enableControllerInNamesrv \u6253\u5f00\uff08\u53ef\u4ee5\u9009\u62e9\u6027\u6253\u5f00\uff0c\u5e76\u4e0d\u5f3a\u5236\u8981\u6c42\u6bcf\u4e00\u53f0 NameServer \u90fd\u6253\u5f00\uff09\uff0c\u5728\u8be5\u6a21\u5f0f\u4e0b\uff0cNameServer \u672c\u8eab\u80fd\u529b\u4ecd\u7136\u662f\u65e0\u72b6\u6001\u7684\uff0c\u4e5f\u5c31\u662f\u5185\u5d4c\u6a21\u5f0f\u4e0b\u82e5 NameServer \u6302\u6389\u591a\u6570\u6d3e\uff0c\u53ea\u5f71\u54cd\u5207\u6362\u80fd\u529b\uff0c\u4e0d\u5f71\u54cd\u539f\u6765\u8def\u7531\u83b7\u53d6\u7b49\u529f\u80fd\u3002\u53e6\u4e00\u79cd\u662f\u72ec\u7acb\u90e8\u7f72\uff0c\u9700\u8981\u5355\u72ec\u90e8\u7f72 Controller \u7ec4\u4ef6\u3002"),(0,n.kt)("h3",{id:"controller-\u5d4c\u5165-nameserver-\u90e8\u7f72"},"Controller \u5d4c\u5165 NameServer \u90e8\u7f72"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u5185\u5d4c\u90e8\u7f72\u56fe",src:r(10831).Z,width:"2590",height:"632"})),(0,n.kt)("p",null,"\u5d4c\u5165 NameServer \u90e8\u7f72\u65f6\u53ea\u9700\u8981\u5728 NameServer \u7684\u914d\u7f6e\u6587\u4ef6\u4e2d\u8bbe\u7f6e enableControllerInNamesrv=true\uff0c\u5e76\u586b\u4e0a Controller \u7684\u914d\u7f6e\u5373\u53ef\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-properties"},"enableControllerInNamesrv = true\ncontrollerDLegerGroup = group1\ncontrollerDLegerPeers = n0-127.0.0.1:9877;n1-127.0.0.1:9878;n2-127.0.0.1:9879\ncontrollerDLegerSelfId = n0\ncontrollerStorePath = /home/admin/DledgerController\nenableElectUncleanMaster = false\nnotifyBrokerRoleChanged = true\n")),(0,n.kt)("p",null,"\u53c2\u6570\u89e3\u91ca\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"enableControllerInNamesrv\uff1aNameserver \u4e2d\u662f\u5426\u5f00\u542f controller\uff0c\u9ed8\u8ba4 false\u3002"),(0,n.kt)("li",{parentName:"ul"},"controllerDLegerGroup\uff1aDLedger Raft Group \u7684\u540d\u5b57\uff0c\u540c\u4e00\u4e2a DLedger Raft Group \u4fdd\u6301\u4e00\u81f4\u5373\u53ef\u3002"),(0,n.kt)("li",{parentName:"ul"},"controllerDLegerPeers\uff1aDLedger Group \u5185\u5404\u8282\u70b9\u7684\u7aef\u53e3\u4fe1\u606f\uff0c\u540c\u4e00\u4e2a Group \u5185\u7684\u5404\u4e2a\u8282\u70b9\u914d\u7f6e\u5fc5\u987b\u8981\u4fdd\u8bc1\u4e00\u81f4\u3002"),(0,n.kt)("li",{parentName:"ul"},"controllerDLegerSelfId\uff1a\u8282\u70b9 id\uff0c\u5fc5\u987b\u5c5e\u4e8e controllerDLegerPeers \u4e2d\u7684\u4e00\u4e2a\uff1b\u540c Group \u5185\u5404\u4e2a\u8282\u70b9\u8981\u552f\u4e00\u3002"),(0,n.kt)("li",{parentName:"ul"},"controllerStorePath\uff1acontroller \u65e5\u5fd7\u5b58\u50a8\u4f4d\u7f6e\u3002controller \u662f\u6709\u72b6\u6001\u7684\uff0ccontroller \u91cd\u542f\u6216\u5b95\u673a\u9700\u8981\u4f9d\u9760\u65e5\u5fd7\u6765\u6062\u590d\u6570\u636e\uff0c\u8be5\u76ee\u5f55\u975e\u5e38\u91cd\u8981\uff0c\u4e0d\u53ef\u4ee5\u8f7b\u6613\u5220\u9664\u3002"),(0,n.kt)("li",{parentName:"ul"},"enableElectUncleanMaster\uff1a\u662f\u5426\u53ef\u4ee5\u4ece SyncStateSet \u4ee5\u5916\u9009\u4e3e Master\uff0c\u82e5\u4e3a true\uff0c\u53ef\u80fd\u4f1a\u9009\u53d6\u6570\u636e\u843d\u540e\u7684\u526f\u672c\u4f5c\u4e3a Master \u800c\u4e22\u5931\u6d88\u606f\uff0c\u9ed8\u8ba4\u4e3a false\u3002"),(0,n.kt)("li",{parentName:"ul"},"notifyBrokerRoleChanged\uff1a\u5f53 Broker \u526f\u672c\u7ec4\u4e0a\u89d2\u8272\u53d1\u751f\u53d8\u5316\u65f6\u662f\u5426\u4e3b\u52a8\u901a\u77e5\uff0c\u9ed8\u8ba4\u4e3a true\u3002")),(0,n.kt)("p",null,"\u53c2\u6570\u8bbe\u7f6e\u5b8c\u6210\u540e\uff0c\u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\u542f\u52a8 Nameserver \u5373\u53ef\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"$ nohup sh bin/mqnamesrv -c namesrv.conf &\n")),(0,n.kt)("h3",{id:"controller-\u72ec\u7acb\u90e8\u7f72"},"Controller \u72ec\u7acb\u90e8\u7f72"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u67b6\u6784\u56fe",src:r(71002).Z,width:"2970",height:"892"})),(0,n.kt)("p",null,"\u72ec\u7acb\u90e8\u7f72\u6267\u884c\u4ee5\u4e0b\u811a\u672c\u5373\u53ef"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"$ nohup sh bin/mqcontroller -c controller.conf &\n")),(0,n.kt)("p",null,"mqcontroller \u811a\u672c\u5728\u6e90\u7801\u5305 distribution/bin/mqcontroller\uff0c\u914d\u7f6e\u53c2\u6570\u4e0e\u5185\u5d4c\u6a21\u5f0f\u76f8\u540c\u3002"),(0,n.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"\u72ec\u7acb\u90e8\u7f72Controller\u540e\uff0c\u4ecd\u7136\u9700\u8981\u5355\u72ec\u90e8\u7f72NameServer\u63d0\u4f9b\u8def\u7531\u53d1\u73b0\u80fd\u529b")),(0,n.kt)("h2",{id:"broker-\u90e8\u7f72"},"Broker \u90e8\u7f72"),(0,n.kt)("p",null,"Broker \u542f\u52a8\u65b9\u6cd5\u4e0e\u4e4b\u524d\u76f8\u540c\uff0c\u589e\u52a0\u4ee5\u4e0b\u53c2\u6570"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"enableControllerMode\uff1aBroker controller \u6a21\u5f0f\u7684\u603b\u5f00\u5173\uff0c\u53ea\u6709\u8be5\u503c\u4e3a true\uff0c\u81ea\u52a8\u4e3b\u4ece\u5207\u6362\u6a21\u5f0f\u624d\u4f1a\u6253\u5f00\u3002\u9ed8\u8ba4\u4e3a false\u3002"),(0,n.kt)("li",{parentName:"ul"},"controllerAddr\uff1acontroller \u7684\u5730\u5740\uff0c\u591a\u4e2a controller \u4e2d\u95f4\u7528\u5206\u53f7\u9694\u5f00\u3002\u4f8b\u5982",(0,n.kt)("inlineCode",{parentName:"li"},"controllerAddr = 127.0.0.1:9877;127.0.0.1:9878;127.0.0.1:9879")),(0,n.kt)("li",{parentName:"ul"},"syncBrokerMetadataPeriod\uff1a\u5411 controller \u540c\u6b65 Broker \u526f\u672c\u4fe1\u606f\u7684\u65f6\u95f4\u95f4\u9694\u3002\u9ed8\u8ba4 5000\uff085s\uff09\u3002"),(0,n.kt)("li",{parentName:"ul"},"checkSyncStateSetPeriod\uff1a\u68c0\u67e5 SyncStateSet \u7684\u65f6\u95f4\u95f4\u9694\uff0c\u68c0\u67e5 SyncStateSet \u53ef\u80fd\u4f1a shrink SyncState\u3002\u9ed8\u8ba45000\uff085s\uff09\u3002"),(0,n.kt)("li",{parentName:"ul"},"syncControllerMetadataPeriod\uff1a\u540c\u6b65 controller \u5143\u6570\u636e\u7684\u65f6\u95f4\u95f4\u9694\uff0c\u4e3b\u8981\u662f\u83b7\u53d6 active controller \u7684\u5730\u5740\u3002\u9ed8\u8ba410000\uff0810s\uff09\u3002"),(0,n.kt)("li",{parentName:"ul"},"haMaxTimeSlaveNotCatchup\uff1a\u8868\u793a Slave \u6ca1\u6709\u8ddf\u4e0a Master \u7684\u6700\u5927\u65f6\u95f4\u95f4\u9694\uff0c\u82e5\u5728 SyncStateSet \u4e2d\u7684 slave \u8d85\u8fc7\u8be5\u65f6\u95f4\u95f4\u9694\u4f1a\u5c06\u5176\u4ece SyncStateSet \u79fb\u9664\u3002\u9ed8\u8ba4\u4e3a 15000\uff0815s\uff09\u3002"),(0,n.kt)("li",{parentName:"ul"},"storePathEpochFile\uff1a\u5b58\u50a8 epoch \u6587\u4ef6\u7684\u4f4d\u7f6e\u3002epoch \u6587\u4ef6\u975e\u5e38\u91cd\u8981\uff0c\u4e0d\u53ef\u4ee5\u968f\u610f\u5220\u9664\u3002\u9ed8\u8ba4\u5728 store \u76ee\u5f55\u4e0b\u3002"),(0,n.kt)("li",{parentName:"ul"},"allAckInSyncStateSet\uff1a\u82e5\u8be5\u503c\u4e3a true\uff0c\u5219\u4e00\u6761\u6d88\u606f\u9700\u8981\u590d\u5236\u5230 SyncStateSet \u4e2d\u7684\u6bcf\u4e00\u4e2a\u526f\u672c\u624d\u4f1a\u5411\u5ba2\u6237\u7aef\u8fd4\u56de\u6210\u529f\uff0c\u53ef\u4ee5\u4fdd\u8bc1\u6d88\u606f\u4e0d\u4e22\u5931\u3002\u9ed8\u8ba4\u4e3a false\u3002"),(0,n.kt)("li",{parentName:"ul"},"syncFromLastFile\uff1a\u82e5 slave \u662f\u7a7a\u76d8\u542f\u52a8\uff0c\u662f\u5426\u4ece\u6700\u540e\u4e00\u4e2a\u6587\u4ef6\u8fdb\u884c\u590d\u5236\u3002\u9ed8\u8ba4\u4e3a false\u3002"),(0,n.kt)("li",{parentName:"ul"},"asyncLearner\uff1a\u82e5\u8be5\u503c\u4e3a true\uff0c\u5219\u8be5\u526f\u672c\u4e0d\u4f1a\u8fdb\u5165 SyncStateSet\uff0c\u4e5f\u5c31\u662f\u4e0d\u4f1a\u88ab\u9009\u4e3e\u6210 Master\uff0c\u800c\u662f\u4e00\u76f4\u4f5c\u4e3a\u4e00\u4e2a learner \u526f\u672c\u8fdb\u884c\u5f02\u6b65\u590d\u5236\u3002\u9ed8\u8ba4\u4e3afalse\u3002"),(0,n.kt)("li",{parentName:"ul"},"inSyncReplicas\uff1a\u9700\u4fdd\u6301\u540c\u6b65\u7684\u526f\u672c\u7ec4\u6570\u91cf\uff0c\u9ed8\u8ba4\u4e3a1\uff0callAckInSyncStateSet=true \u65f6\u8be5\u53c2\u6570\u65e0\u6548\u3002"),(0,n.kt)("li",{parentName:"ul"},"minInSyncReplicas\uff1a\u6700\u5c0f\u9700\u4fdd\u6301\u540c\u6b65\u7684\u526f\u672c\u7ec4\u6570\u91cf\uff0c\u82e5 SyncStateSet \u4e2d\u526f\u672c\u4e2a\u6570\u5c0f\u4e8e minInSyncReplicas \u5219 putMessage \u76f4\u63a5\u8fd4\u56de PutMessageStatus.IN_SYNC_REPLICAS_NOT_ENOUGH\uff0c\u9ed8\u8ba4\u4e3a1\u3002")),(0,n.kt)("p",null,"\u5728Controller\u6a21\u5f0f\u4e0b\uff0cBroker\u914d\u7f6e\u5fc5\u987b\u8bbe\u7f6e enableControllerMode=true\uff0c\u5e76\u586b\u5199 controllerAddr\uff0c\u5e76\u4ee5\u4e0b\u9762\u547d\u4ee4\u542f\u52a8\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"$ nohup sh bin/mqbroker -c broker.conf &\n")),(0,n.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"\u81ea\u52a8\u4e3b\u5907\u5207\u6362\u6a21\u5f0f\u4e0bBroker\u65e0\u9700\u6307\u5b9abrokerId\u548cbrokerRole\uff0c\u5176\u7531Controller\u7ec4\u4ef6\u8fdb\u884c\u5206\u914d")),(0,n.kt)("h2",{id:"\u517c\u5bb9\u6027"},"\u517c\u5bb9\u6027"),(0,n.kt)("p",null,"\u8be5\u6a21\u5f0f\u672a\u5bf9\u4efb\u4f55\u5ba2\u6237\u7aef\u5c42\u9762 API \u8fdb\u884c\u65b0\u589e\u6216\u4fee\u6539\uff0c\u4e0d\u5b58\u5728\u5ba2\u6237\u7aef\u7684\u517c\u5bb9\u6027\u95ee\u9898\u3002"),(0,n.kt)("p",null,"Nameserver \u672c\u8eab\u80fd\u529b\u672a\u505a\u4efb\u4f55\u4fee\u6539\uff0cNameserver \u4e0d\u5b58\u5728\u517c\u5bb9\u6027\u95ee\u9898\u3002\u5982\u5f00\u542f enableControllerInNamesrv \u4e14 controller \u53c2\u6570\u914d\u7f6e\u6b63\u786e\uff0c\u5219\u5f00\u542f controller \u529f\u80fd\u3002"),(0,n.kt)("p",null,"Broker\u82e5\u8bbe\u7f6e enableControllerMode=false\uff0c\u5219\u4ecd\u7136\u4ee5\u4e4b\u524d\u65b9\u5f0f\u8fd0\u884c\u3002\u82e5\u8bbe\u7f6e enableControllerMode=true\uff0c\u5219\u9700\u8981\u90e8\u7f72 controller \u4e14\u53c2\u6570\u914d\u7f6e\u6b63\u786e\u624d\u80fd\u6b63\u5e38\u8fd0\u884c\u3002"),(0,n.kt)("p",null,"\u5177\u4f53\u884c\u4e3a\u5982\u4e0b\u8868\u6240\u793a\uff1a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null},"\u65e7\u7248 Nameserver"),(0,n.kt)("th",{parentName:"tr",align:null},"\u65e7\u7248 Nameserver+\u72ec\u7acb\u90e8\u7f72 Controller"),(0,n.kt)("th",{parentName:"tr",align:null},"\u65b0\u7248 Nameserver \u5f00\u542f controller\u529f\u80fd"),(0,n.kt)("th",{parentName:"tr",align:null},"\u65b0\u7248 Nameserver \u5173\u95ed controller \u529f\u80fd"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u65e7\u7248 Broker"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6b63\u5e38\u8fd0\u884c\uff0c\u65e0\u6cd5\u5207\u6362"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6b63\u5e38\u8fd0\u884c\uff0c\u65e0\u6cd5\u5207\u6362"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6b63\u5e38\u8fd0\u884c\uff0c\u65e0\u6cd5\u5207\u6362"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6b63\u5e38\u8fd0\u884c\uff0c\u65e0\u6cd5\u5207\u6362")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u65b0\u7248 Broker \u5f00\u542f Controller \u6a21\u5f0f"),(0,n.kt)("td",{parentName:"tr",align:null},"\u65e0\u6cd5\u6b63\u5e38\u4e0a\u7ebf"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6b63\u5e38\u8fd0\u884c\uff0c\u53ef\u4ee5\u5207\u6362"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6b63\u5e38\u8fd0\u884c\uff0c\u53ef\u4ee5\u5207\u6362"),(0,n.kt)("td",{parentName:"tr",align:null},"\u65e0\u6cd5\u6b63\u5e38\u4e0a\u7ebf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u65b0\u7248 Broker \u4e0d\u5f00\u542f Controller \u6a21\u5f0f"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6b63\u5e38\u8fd0\u884c\uff0c\u65e0\u6cd5\u5207\u6362"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6b63\u5e38\u8fd0\u884c\uff0c\u65e0\u6cd5\u5207\u6362"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6b63\u5e38\u8fd0\u884c\uff0c\u65e0\u6cd5\u5207\u6362"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6b63\u5e38\u8fd0\u884c\uff0c\u65e0\u6cd5\u5207\u6362")))),(0,n.kt)("h2",{id:"\u5347\u7ea7\u6ce8\u610f\u4e8b\u9879"},"\u5347\u7ea7\u6ce8\u610f\u4e8b\u9879"),(0,n.kt)("p",null,"\u4ece\u4e0a\u8ff0\u517c\u5bb9\u6027\u8868\u8ff0\u53ef\u4ee5\u770b\u51fa\uff0cNameServer \u6b63\u5e38\u5347\u7ea7\u5373\u53ef\uff0c\u65e0\u517c\u5bb9\u6027\u95ee\u9898\u3002\u5728\u4e0d\u60f3\u5347\u7ea7 Nameserver \u60c5\u51b5\uff0c\u53ef\u4ee5\u72ec\u7acb\u90e8\u7f72 Controller \u7ec4\u4ef6\u6765\u83b7\u5f97\u5207\u6362\u80fd\u529b\u3002"),(0,n.kt)("p",null,"\u9488\u5bf9 Broker \u5347\u7ea7\uff0c\u5206\u4e3a\u4e24\u79cd\u60c5\u51b5\uff1a"),(0,n.kt)("p",null,"\uff081\uff09Master-Slave \u90e8\u7f72\u5347\u7ea7\u6210 Controller \u5207\u6362\u67b6\u6784"),(0,n.kt)("p",null,"\u53ef\u4ee5\u5e26\u6570\u636e\u8fdb\u884c\u539f\u5730\u5347\u7ea7\uff0c\u5bf9\u4e8e\u6bcf\u7ec4 Broker\uff0c\u505c\u673a\u4e3b\u3001\u5907 Broker\uff0c",(0,n.kt)("strong",{parentName:"p"},"\u4fdd\u8bc1\u4e3b\u3001\u5907\u7684 CommitLog \u5bf9\u9f50"),"\uff08\u53ef\u4ee5\u5728\u5347\u7ea7\u524d\u7981\u5199\u8be5\u7ec4 Broker \u4e00\u6bb5\u65f6\u95f4\uff0c\u6216\u5219\u901a\u8fc7\u62f7\u8d1d\u65b9\u5f0f\u4fdd\u8bc1\u4e00\u81f4\uff09\uff0c\u5347\u7ea7\u5305\u540e\u91cd\u65b0\u542f\u52a8\u5373\u53ef\u3002"),(0,n.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"\u82e5\u4e3b\u5907 CommitLog \u4e0d\u5bf9\u9f50\uff0c\u9700\u8981\u4fdd\u8bc1\u4e3b\u4e0a\u7ebf\u4ee5\u540e\u518d\u4e0a\u7ebf\u5907\uff0c\u5426\u5219\u53ef\u80fd\u4f1a\u56e0\u4e3a\u6570\u636e\u622a\u65ad\u800c\u4e22\u5931\u6d88\u606f\u3002")),(0,n.kt)("p",null,"\uff082\uff09\u539f DLedger \u6a21\u5f0f\u5347\u7ea7\u5230 Controller \u5207\u6362\u67b6\u6784"),(0,n.kt)("p",null,"\u7531\u4e8e\u539f DLedger \u6a21\u5f0f\u6d88\u606f\u6570\u636e\u683c\u5f0f\u4e0e Master-Slave \u4e0b\u6570\u636e\u683c\u5f0f\u5b58\u5728\u533a\u522b\uff0c\u4e0d\u63d0\u4f9b\u5e26\u6570\u636e\u539f\u5730\u5347\u7ea7\u7684\u8def\u5f84\u3002\u5728\u90e8\u7f72\u591a\u7ec4 Broker \u7684\u60c5\u51b5\u4e0b\uff0c\u53ef\u4ee5\u7981\u5199\u67d0\u4e00\u7ec4 Broker \u4e00\u6bb5\u65f6\u95f4\uff08\u53ea\u8981\u786e\u8ba4\u5b58\u91cf\u6d88\u606f\u88ab\u5168\u90e8\u6d88\u8d39\u5373\u53ef\uff0c\u6bd4\u5982\u6839\u636e\u6d88\u606f\u7684\u4fdd\u5b58\u65f6\u95f4\u6765\u51b3\u5b9a\uff09\uff0c\u7136\u540e\u6e05\u7a7a store \u76ee\u5f55\u4e0b\u9664 config/topics.json\u3001subscriptionGroup.json \u4e0b\uff08\u4fdd\u7559 topic \u548c\u8ba2\u9605\u5173\u7cfb\u7684\u5143\u6570\u636e\uff09\u7684\u5176\u4ed6\u6587\u4ef6\u540e\uff0c\u8fdb\u884c\u7a7a\u76d8\u5347\u7ea7\u3002"))}u.isMDXComponent=!0},10831:(e,t,r)=>{r.d(t,{Z:()=>l});const l=r.p+"assets/images/Controller-as-plugin-afd8d004541eb46736d8ea20594a4bb8.png"},71002:(e,t,r)=>{r.d(t,{Z:()=>l});const l=r.p+"assets/images/Controller-deploy-indepdent-76249b759fd9d4e728e09a10d278467e.png"},40374:(e,t,r)=>{r.d(t,{Z:()=>l});const l=r.p+"assets/images/controller\u67b6\u6784-d431b0cc0815713f46cf9adbe3e26957.png"}}]);