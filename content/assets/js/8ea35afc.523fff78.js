"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[6974],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=o(n),k=r,d=u["".concat(p,".").concat(k)]||u[k]||m[k]||l;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},37073:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var a=n(87462),r=(n(67294),n(3905));const l={},i="\u5b9a\u65f6/\u5ef6\u65f6\u6d88\u606f",s={unversionedId:"\u529f\u80fd\u884c\u4e3a/02delaymessage",id:"version-5.0/\u529f\u80fd\u884c\u4e3a/02delaymessage",title:"\u5b9a\u65f6/\u5ef6\u65f6\u6d88\u606f",description:"\u5b9a\u65f6/\u5ef6\u65f6\u6d88\u606f\u4e3a Apache RocketMQ \u4e2d\u7684\u9ad8\u7ea7\u7279\u6027\u6d88\u606f\uff0c\u672c\u6587\u4e3a\u60a8\u4ecb\u7ecd\u5b9a\u65f6/\u5ef6\u65f6\u6d88\u606f\u7684\u5e94\u7528\u573a\u666f\u3001\u529f\u80fd\u539f\u7406\u3001\u4f7f\u7528\u9650\u5236\u3001\u4f7f\u7528\u65b9\u6cd5\u548c\u4f7f\u7528\u5efa\u8bae\u3002",source:"@site/versioned_docs/version-5.0/04-\u529f\u80fd\u884c\u4e3a/02delaymessage.md",sourceDirName:"04-\u529f\u80fd\u884c\u4e3a",slug:"/\u529f\u80fd\u884c\u4e3a/02delaymessage",permalink:"/docs/\u529f\u80fd\u884c\u4e3a/02delaymessage",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/04-\u529f\u80fd\u884c\u4e3a/02delaymessage.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"\u666e\u901a\u6d88\u606f",permalink:"/docs/\u529f\u80fd\u884c\u4e3a/01normalmessage"},next:{title:"\u987a\u5e8f\u6d88\u606f",permalink:"/docs/\u529f\u80fd\u884c\u4e3a/03fifomessage"}},p={},o=[{value:"\u5e94\u7528\u573a\u666f",id:"\u5e94\u7528\u573a\u666f",level:2},{value:"\u529f\u80fd\u539f\u7406",id:"\u529f\u80fd\u539f\u7406",level:2},{value:"\u4f7f\u7528\u9650\u5236",id:"\u4f7f\u7528\u9650\u5236",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2},{value:"\u4f7f\u7528\u5efa\u8bae",id:"\u4f7f\u7528\u5efa\u8bae",level:2}],c={toc:o};function m(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5b9a\u65f6\u5ef6\u65f6\u6d88\u606f"},"\u5b9a\u65f6/\u5ef6\u65f6\u6d88\u606f"),(0,r.kt)("p",null,"\u5b9a\u65f6/\u5ef6\u65f6\u6d88\u606f\u4e3a Apache RocketMQ \u4e2d\u7684\u9ad8\u7ea7\u7279\u6027\u6d88\u606f\uff0c\u672c\u6587\u4e3a\u60a8\u4ecb\u7ecd\u5b9a\u65f6/\u5ef6\u65f6\u6d88\u606f\u7684\u5e94\u7528\u573a\u666f\u3001\u529f\u80fd\u539f\u7406\u3001\u4f7f\u7528\u9650\u5236\u3001\u4f7f\u7528\u65b9\u6cd5\u548c\u4f7f\u7528\u5efa\u8bae\u3002"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5b9a\u65f6\u6d88\u606f\u548c\u5ef6\u65f6\u6d88\u606f\u672c\u8d28\u76f8\u540c\uff0c\u90fd\u662f\u670d\u52a1\u7aef\u6839\u636e\u6d88\u606f\u8bbe\u7f6e\u7684\u5b9a\u65f6\u65f6\u95f4\u5728\u67d0\u4e00\u56fa\u5b9a\u65f6\u523b\u5c06\u6d88\u606f\u6295\u9012\u7ed9\u6d88\u8d39\u8005\u6d88\u8d39\u3002\u56e0\u6b64\uff0c\u4e0b\u6587\u7edf\u4e00\u7528\u5b9a\u65f6\u6d88\u606f\u63cf\u8ff0\u3002"))),(0,r.kt)("h2",{id:"\u5e94\u7528\u573a\u666f"},"\u5e94\u7528\u573a\u666f"),(0,r.kt)("p",null,"\u5728\u5206\u5e03\u5f0f\u5b9a\u65f6\u8c03\u5ea6\u89e6\u53d1\u3001\u4efb\u52a1\u8d85\u65f6\u5904\u7406\u7b49\u573a\u666f\uff0c\u9700\u8981\u5b9e\u73b0\u7cbe\u51c6\u3001\u53ef\u9760\u7684\u5b9a\u65f6\u4e8b\u4ef6\u89e6\u53d1\u3002\u4f7f\u7528 Apache RocketMQ \u7684\u5b9a\u65f6\u6d88\u606f\u53ef\u4ee5\u7b80\u5316\u5b9a\u65f6\u8c03\u5ea6\u4efb\u52a1\u7684\u5f00\u53d1\u903b\u8f91\uff0c\u5b9e\u73b0\u9ad8\u6027\u80fd\u3001\u53ef\u6269\u5c55\u3001\u9ad8\u53ef\u9760\u7684\u5b9a\u65f6\u89e6\u53d1\u80fd\u529b\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5178\u578b\u573a\u666f\u4e00\uff1a\u5206\u5e03\u5f0f\u5b9a\u65f6\u8c03\u5ea6"),"\n",(0,r.kt)("img",{alt:"\u5b9a\u65f6\u6d88\u606f",src:n(74231).Z,width:"906",height:"546"})),(0,r.kt)("p",null,"\u5728\u5206\u5e03\u5f0f\u5b9a\u65f6\u8c03\u5ea6\u573a\u666f\u4e0b\uff0c\u9700\u8981\u5b9e\u73b0\u5404\u7c7b\u7cbe\u5ea6\u7684\u5b9a\u65f6\u4efb\u52a1\uff0c\u4f8b\u5982\u6bcf\u59295\u70b9\u6267\u884c\u6587\u4ef6\u6e05\u7406\uff0c\u6bcf\u96942\u5206\u949f\u89e6\u53d1\u4e00\u6b21\u6d88\u606f\u63a8\u9001\u7b49\u9700\u6c42\u3002\u4f20\u7edf\u57fa\u4e8e\u6570\u636e\u5e93\u7684\u5b9a\u65f6\u8c03\u5ea6\u65b9\u6848\u5728\u5206\u5e03\u5f0f\u573a\u666f\u4e0b\uff0c\u6027\u80fd\u4e0d\u9ad8\uff0c\u5b9e\u73b0\u590d\u6742\u3002\u57fa\u4e8e Apache RocketMQ \u7684\u5b9a\u65f6\u6d88\u606f\u53ef\u4ee5\u5c01\u88c5\u51fa\u591a\u79cd\u7c7b\u578b\u7684\u5b9a\u65f6\u89e6\u53d1\u5668\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5178\u578b\u573a\u666f\u4e8c\uff1a\u4efb\u52a1\u8d85\u65f6\u5904\u7406"),"\n",(0,r.kt)("img",{alt:"\u8d85\u65f6\u4efb\u52a1\u5904\u7406",src:n(67578).Z,width:"954",height:"429"})),(0,r.kt)("p",null,"\u4ee5\u7535\u5546\u4ea4\u6613\u573a\u666f\u4e3a\u4f8b\uff0c\u8ba2\u5355\u4e0b\u5355\u540e\u6682\u672a\u652f\u4ed8\uff0c\u6b64\u65f6\u4e0d\u53ef\u4ee5\u76f4\u63a5\u5173\u95ed\u8ba2\u5355\uff0c\u800c\u662f\u9700\u8981\u7b49\u5f85\u4e00\u6bb5\u65f6\u95f4\u540e\u624d\u80fd\u5173\u95ed\u8ba2\u5355\u3002\u4f7f\u7528 Apache RocketMQ \u5b9a\u65f6\u6d88\u606f\u53ef\u4ee5\u5b9e\u73b0\u8d85\u65f6\u4efb\u52a1\u7684\u68c0\u67e5\u89e6\u53d1\u3002"),(0,r.kt)("p",null,"\u57fa\u4e8e\u5b9a\u65f6\u6d88\u606f\u7684\u8d85\u65f6\u4efb\u52a1\u5904\u7406\u5177\u5907\u5982\u4e0b\u4f18\u52bf\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7cbe\u5ea6\u9ad8\u3001\u5f00\u53d1\u95e8\u69db\u4f4e\uff1a\u57fa\u4e8e\u6d88\u606f\u901a\u77e5\u65b9\u5f0f\u4e0d\u5b58\u5728\u5b9a\u65f6\u9636\u68af\u95f4\u9694\u3002\u53ef\u4ee5\u8f7b\u677e\u5b9e\u73b0\u4efb\u610f\u7cbe\u5ea6\u4e8b\u4ef6\u89e6\u53d1\uff0c\u65e0\u9700\u4e1a\u52a1\u53bb\u91cd\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u9ad8\u6027\u80fd\u53ef\u6269\u5c55\uff1a\u4f20\u7edf\u7684\u6570\u636e\u5e93\u626b\u63cf\u65b9\u5f0f\u8f83\u4e3a\u590d\u6742\uff0c\u9700\u8981\u9891\u7e41\u8c03\u7528\u63a5\u53e3\u626b\u63cf\uff0c\u5bb9\u6613\u4ea7\u751f\u6027\u80fd\u74f6\u9888\u3002 Apache RocketMQ \u7684\u5b9a\u65f6\u6d88\u606f\u5177\u6709\u9ad8\u5e76\u53d1\u548c\u6c34\u5e73\u6269\u5c55\u7684\u80fd\u529b\u3002"))),(0,r.kt)("h2",{id:"\u529f\u80fd\u539f\u7406"},"\u529f\u80fd\u539f\u7406"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4ec0\u4e48\u662f\u5b9a\u65f6\u6d88\u606f")),(0,r.kt)("p",null,"\u5b9a\u65f6\u6d88\u606f\u662f Apache RocketMQ \u63d0\u4f9b\u7684\u4e00\u79cd\u9ad8\u7ea7\u6d88\u606f\u7c7b\u578b\uff0c\u6d88\u606f\u88ab\u53d1\u9001\u81f3\u670d\u52a1\u7aef\u540e\uff0c\u5728\u6307\u5b9a\u65f6\u95f4\u540e\u624d\u80fd\u88ab\u6d88\u8d39\u8005\u6d88\u8d39\u3002\u901a\u8fc7\u8bbe\u7f6e\u4e00\u5b9a\u7684\u5b9a\u65f6\u65f6\u95f4\u53ef\u4ee5\u5b9e\u73b0\u5206\u5e03\u5f0f\u573a\u666f\u7684\u5ef6\u65f6\u8c03\u5ea6\u89e6\u53d1\u6548\u679c\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5b9a\u65f6\u65f6\u95f4\u8bbe\u7f6e\u539f\u5219")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Apache RocketMQ \u5b9a\u65f6\u6d88\u606f\u8bbe\u7f6e\u7684\u5b9a\u65f6\u65f6\u95f4\u662f\u4e00\u4e2a\u9884\u671f\u89e6\u53d1\u7684\u7cfb\u7edf\u65f6\u95f4\u6233\uff0c\u5ef6\u65f6\u65f6\u95f4\u4e5f\u9700\u8981\u8f6c\u6362\u6210\u5f53\u524d\u7cfb\u7edf\u65f6\u95f4\u540e\u7684\u67d0\u4e00\u4e2a\u65f6\u95f4\u6233\uff0c\u800c\u4e0d\u662f\u4e00\u6bb5\u5ef6\u65f6\u65f6\u957f\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5b9a\u65f6\u65f6\u95f4\u7684\u683c\u5f0f\u4e3a\u6beb\u79d2\u7ea7\u7684Unix\u65f6\u95f4\u6233\uff0c\u60a8\u9700\u8981\u5c06\u8981\u8bbe\u7f6e\u7684\u65f6\u523b\u8f6c\u6362\u6210\u65f6\u95f4\u6233\u5f62\u5f0f\u3002\u5177\u4f53\u65b9\u5f0f\uff0c\u8bf7\u53c2\u89c1",(0,r.kt)("a",{parentName:"p",href:"https://www.unixtimestamp.com/"},"Unix\u65f6\u95f4\u6233\u8f6c\u6362\u5de5\u5177"),"\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5b9a\u65f6\u65f6\u95f4\u5fc5\u987b\u8bbe\u7f6e\u5728\u5b9a\u65f6\u65f6\u957f\u8303\u56f4\u5185\uff0c\u8d85\u8fc7\u8303\u56f4\u5219\u5b9a\u65f6\u4e0d\u751f\u6548\uff0c\u670d\u52a1\u7aef\u4f1a\u7acb\u5373\u6295\u9012\u6d88\u606f\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5b9a\u65f6\u65f6\u957f\u6700\u5927\u503c\u9ed8\u8ba4\u4e3a24\u5c0f\u65f6\uff0c\u4e0d\u652f\u6301\u81ea\u5b9a\u4e49\u4fee\u6539\uff0c\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1",(0,r.kt)("a",{parentName:"p",href:"/docs/%E5%9F%BA%E7%A1%80%E4%BB%8B%E7%BB%8D/03limits"},"\u53c2\u6570\u9650\u5236"),"\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5b9a\u65f6\u65f6\u95f4\u5fc5\u987b\u8bbe\u7f6e\u4e3a\u5f53\u524d\u65f6\u95f4\u4e4b\u540e\uff0c\u82e5\u8bbe\u7f6e\u5230\u5f53\u524d\u65f6\u95f4\u4e4b\u524d\uff0c\u5219\u5b9a\u65f6\u4e0d\u751f\u6548\uff0c\u670d\u52a1\u7aef\u4f1a\u7acb\u5373\u6295\u9012\u6d88\u606f\u3002"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b\u5982\u4e0b\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5b9a\u65f6\u6d88\u606f\uff1a\u4f8b\u5982\uff0c\u5f53\u524d\u7cfb\u7edf\u65f6\u95f4\u4e3a2022-06-09 17:30:00\uff0c\u60a8\u5e0c\u671b\u6d88\u606f\u5728\u4e0b\u534819:20:00\u5b9a\u65f6\u6295\u9012\uff0c\u5219\u5b9a\u65f6\u65f6\u95f4\u4e3a2022-06-09 19:20:00\uff0c\u8f6c\u6362\u6210\u65f6\u95f4\u6233\u683c\u5f0f\u4e3a1654773600000\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5ef6\u65f6\u6d88\u606f\uff1a\u4f8b\u5982\uff0c\u5f53\u524d\u7cfb\u7edf\u65f6\u95f4\u4e3a2022-06-09 17:30:00\uff0c\u60a8\u5e0c\u671b\u5ef6\u65f61\u4e2a\u5c0f\u65f6\u540e\u6295\u9012\u6d88\u606f\uff0c\u5219\u60a8\u9700\u8981\u6839\u636e\u5f53\u524d\u65f6\u95f4\u548c\u5ef6\u65f6\u65f6\u957f\u6362\u7b97\u6210\u5b9a\u65f6\u65f6\u523b\uff0c\u5373\u6d88\u606f\u6295\u9012\u65f6\u95f4\u4e3a2022-06-09 18:30:00\uff0c\u8f6c\u6362\u4e3a\u65f6\u95f4\u6233\u683c\u5f0f\u4e3a1654770600000\u3002"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5b9a\u65f6\u6d88\u606f\u751f\u547d\u5468\u671f")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u5b9a\u65f6\u6d88\u606f\u751f\u547d\u5468\u671f",src:n(96151).Z,width:"1181",height:"110"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u521d\u59cb\u5316\uff1a\u6d88\u606f\u88ab\u751f\u4ea7\u8005\u6784\u5efa\u5e76\u5b8c\u6210\u521d\u59cb\u5316\uff0c\u5f85\u53d1\u9001\u5230\u670d\u52a1\u7aef\u7684\u72b6\u6001\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5b9a\u65f6\u4e2d\uff1a\u6d88\u606f\u88ab\u53d1\u9001\u5230\u670d\u52a1\u7aef\uff0c\u548c\u666e\u901a\u6d88\u606f\u4e0d\u540c\u7684\u662f\uff0c\u670d\u52a1\u7aef\u4e0d\u4f1a\u76f4\u63a5\u6784\u5efa\u6d88\u606f\u7d22\u5f15\uff0c\u800c\u662f\u4f1a\u5c06\u5b9a\u65f6\u6d88\u606f\u5355\u72ec\u5b58\u50a8\u5728\u5b9a\u65f6\u5b58\u50a8\u7cfb\u7edf\u4e2d\uff0c\u7b49\u5f85\u5b9a\u65f6\u65f6\u523b\u5230\u8fbe\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5f85\u6d88\u8d39\uff1a\u5b9a\u65f6\u65f6\u523b\u5230\u8fbe\u540e\uff0c\u670d\u52a1\u7aef\u5c06\u6d88\u606f\u91cd\u65b0\u5199\u5165\u666e\u901a\u5b58\u50a8\u5f15\u64ce\uff0c\u5bf9\u4e0b\u6e38\u6d88\u8d39\u8005\u53ef\u89c1\uff0c\u7b49\u5f85\u6d88\u8d39\u8005\u6d88\u8d39\u7684\u72b6\u6001\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6d88\u8d39\u4e2d\uff1a\u6d88\u606f\u88ab\u6d88\u8d39\u8005\u83b7\u53d6\uff0c\u5e76\u6309\u7167\u6d88\u8d39\u8005\u672c\u5730\u7684\u4e1a\u52a1\u903b\u8f91\u8fdb\u884c\u5904\u7406\u7684\u8fc7\u7a0b\u3002 \u6b64\u65f6\u670d\u52a1\u7aef\u4f1a\u7b49\u5f85\u6d88\u8d39\u8005\u5b8c\u6210\u6d88\u8d39\u5e76\u63d0\u4ea4\u6d88\u8d39\u7ed3\u679c\uff0c\u5982\u679c\u4e00\u5b9a\u65f6\u95f4\u540e\u6ca1\u6709\u6536\u5230\u6d88\u8d39\u8005\u7684\u54cd\u5e94\uff0cApache RocketMQ\u4f1a\u5bf9\u6d88\u606f\u8fdb\u884c\u91cd\u8bd5\u5904\u7406\u3002\u5177\u4f53\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1",(0,r.kt)("a",{parentName:"p",href:"/docs/%E5%8A%9F%E8%83%BD%E8%A1%8C%E4%B8%BA/10consumerretrypolicy"},"\u6d88\u8d39\u91cd\u8bd5"),"\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6d88\u8d39\u63d0\u4ea4\uff1a\u6d88\u8d39\u8005\u5b8c\u6210\u6d88\u8d39\u5904\u7406\uff0c\u5e76\u5411\u670d\u52a1\u7aef\u63d0\u4ea4\u6d88\u8d39\u7ed3\u679c\uff0c\u670d\u52a1\u7aef\u6807\u8bb0\u5f53\u524d\u6d88\u606f\u5df2\u7ecf\u88ab\u5904\u7406\uff08\u5305\u62ec\u6d88\u8d39\u6210\u529f\u548c\u5931\u8d25\uff09\u3002 Apache RocketMQ \u9ed8\u8ba4\u652f\u6301\u4fdd\u7559\u6240\u6709\u6d88\u606f\uff0c\u6b64\u65f6\u6d88\u606f\u6570\u636e\u5e76\u4e0d\u4f1a\u7acb\u5373\u88ab\u5220\u9664\uff0c\u53ea\u662f\u903b\u8f91\u6807\u8bb0\u5df2\u6d88\u8d39\u3002\u6d88\u606f\u5728\u4fdd\u5b58\u65f6\u95f4\u5230\u671f\u6216\u5b58\u50a8\u7a7a\u95f4\u4e0d\u8db3\u88ab\u5220\u9664\u524d\uff0c\u6d88\u8d39\u8005\u4ecd\u7136\u53ef\u4ee5\u56de\u6eaf\u6d88\u606f\u91cd\u65b0\u6d88\u8d39\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6d88\u606f\u5220\u9664\uff1aApache RocketMQ\u6309\u7167\u6d88\u606f\u4fdd\u5b58\u673a\u5236\u6eda\u52a8\u6e05\u7406\u6700\u65e9\u7684\u6d88\u606f\u6570\u636e\uff0c\u5c06\u6d88\u606f\u4ece\u7269\u7406\u6587\u4ef6\u4e2d\u5220\u9664\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1",(0,r.kt)("a",{parentName:"p",href:"/docs/%E5%8A%9F%E8%83%BD%E8%A1%8C%E4%B8%BA/11messagestorepolicy"},"\u6d88\u606f\u5b58\u50a8\u548c\u6e05\u7406\u673a\u5236"),"\u3002"))),(0,r.kt)("h2",{id:"\u4f7f\u7528\u9650\u5236"},"\u4f7f\u7528\u9650\u5236"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6d88\u606f\u7c7b\u578b\u4e00\u81f4\u6027")),(0,r.kt)("p",null,"\u5b9a\u65f6\u6d88\u606f\u4ec5\u652f\u6301\u5728 MessageType\u4e3aDelay \u7684\u4e3b\u9898\u5185\u4f7f\u7528\uff0c\u5373\u5b9a\u65f6\u6d88\u606f\u53ea\u80fd\u53d1\u9001\u81f3\u7c7b\u578b\u4e3a\u5b9a\u65f6\u6d88\u606f\u7684\u4e3b\u9898\u4e2d\uff0c\u53d1\u9001\u7684\u6d88\u606f\u7684\u7c7b\u578b\u5fc5\u987b\u548c\u4e3b\u9898\u7684\u7c7b\u578b\u4e00\u81f4\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5b9a\u65f6\u7cbe\u5ea6\u7ea6\u675f")),(0,r.kt)("p",null,"Apache RocketMQ \u5b9a\u65f6\u6d88\u606f\u7684\u5b9a\u65f6\u65f6\u957f\u53c2\u6570\u7cbe\u786e\u5230\u6beb\u79d2\u7ea7\uff0c\u4f46\u662f\u9ed8\u8ba4\u7cbe\u5ea6\u4e3a1000ms\uff0c\u5373\u5b9a\u65f6\u6d88\u606f\u4e3a\u79d2\u7ea7\u7cbe\u5ea6\u3002"),(0,r.kt)("p",null,"Apache RocketMQ \u5b9a\u65f6\u6d88\u606f\u7684\u72b6\u6001\u652f\u6301\u6301\u4e45\u5316\u5b58\u50a8\uff0c\u7cfb\u7edf\u7531\u4e8e\u6545\u969c\u91cd\u542f\u540e\uff0c\u4ecd\u652f\u6301\u6309\u7167\u539f\u6765\u8bbe\u7f6e\u7684\u5b9a\u65f6\u65f6\u95f4\u89e6\u53d1\u6d88\u606f\u6295\u9012\u3002\u82e5\u5b58\u50a8\u7cfb\u7edf\u5f02\u5e38\u91cd\u542f\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u5b9a\u65f6\u6d88\u606f\u6295\u9012\u51fa\u73b0\u4e00\u5b9a\u5ef6\u8fdf\u3002"),(0,r.kt)("h2",{id:"\u4f7f\u7528\u793a\u4f8b"},"\u4f7f\u7528\u793a\u4f8b"),(0,r.kt)("p",null,"\u548c\u666e\u901a\u6d88\u606f\u76f8\u6bd4\uff0c\u5b9a\u65f6\u6d88\u8d39\u53d1\u9001\u65f6\uff0c\u5fc5\u987b\u8bbe\u7f6e\u5b9a\u65f6\u89e6\u53d1\u7684\u76ee\u6807\u65f6\u95f4\u6233\u3002"),(0,r.kt)("p",null,"\u4ee5Java\u8bed\u8a00\u4e3a\u4f8b\uff0c\u4f7f\u7528\u5b9a\u65f6\u6d88\u606f\u793a\u4f8b\u53c2\u8003\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'        //\u5b9a\u65f6/\u5ef6\u65f6\u6d88\u606f\u53d1\u9001\n        MessageBuilder messageBuilder = null;\n        //\u4ee5\u4e0b\u793a\u4f8b\u8868\u793a\uff1a\u5ef6\u8fdf\u65f6\u95f4\u4e3a10\u5206\u949f\u4e4b\u540e\u7684Unix\u65f6\u95f4\u6233\u3002\n        Long deliverTimeStamp = System.currentTimeMillis() + 10L * 60 * 1000;\n        Message message = messageBuilder.setTopic("topic")\n                //\u8bbe\u7f6e\u6d88\u606f\u7d22\u5f15\u952e\uff0c\u53ef\u6839\u636e\u5173\u952e\u5b57\u7cbe\u786e\u67e5\u627e\u67d0\u6761\u6d88\u606f\u3002\n                .setKeys("messageKey")\n                //\u8bbe\u7f6e\u6d88\u606fTag\uff0c\u7528\u4e8e\u6d88\u8d39\u7aef\u6839\u636e\u6307\u5b9aTag\u8fc7\u6ee4\u6d88\u606f\u3002\n                .setTag("messageTag")\n                .setDeliveryTimestamp(deliverTimeStamp)\n                //\u6d88\u606f\u4f53\n                .setBody("messageBody".getBytes())\n                .build();\n        try {\n            //\u53d1\u9001\u6d88\u606f\uff0c\u9700\u8981\u5173\u6ce8\u53d1\u9001\u7ed3\u679c\uff0c\u5e76\u6355\u83b7\u5931\u8d25\u7b49\u5f02\u5e38\u3002\n            SendReceipt sendReceipt = producer.send(message);\n            System.out.println(sendReceipt.getMessageId());\n        } catch (ClientException e) {\n            e.printStackTrace();\n        }\n        //\u6d88\u8d39\u793a\u4f8b\u4e00\uff1a\u4f7f\u7528PushConsumer\u6d88\u8d39\u5b9a\u65f6\u6d88\u606f\uff0c\u53ea\u9700\u8981\u5728\u6d88\u8d39\u76d1\u542c\u5668\u5904\u7406\u5373\u53ef\u3002\n        MessageListener messageListener = new MessageListener() {\n            @Override\n            public ConsumeResult consume(MessageView messageView) {\n                System.out.println(messageView.getDeliveryTimestamp());\n                //\u6839\u636e\u6d88\u8d39\u7ed3\u679c\u8fd4\u56de\u72b6\u6001\u3002\n                return ConsumeResult.SUCCESS;\n            }\n        };\n        //\u6d88\u8d39\u793a\u4f8b\u4e8c\uff1a\u4f7f\u7528SimpleConsumer\u6d88\u8d39\u5b9a\u65f6\u6d88\u606f\uff0c\u4e3b\u52a8\u83b7\u53d6\u6d88\u606f\u8fdb\u884c\u6d88\u8d39\u5904\u7406\u5e76\u63d0\u4ea4\u6d88\u8d39\u7ed3\u679c\u3002\n        List<MessageView> messageViewList = null;\n        try {\n            messageViewList = simpleConsumer.receive(10, Duration.ofSeconds(30));\n            messageViewList.forEach(messageView -> {\n                System.out.println(messageView);\n                //\u6d88\u8d39\u5904\u7406\u5b8c\u6210\u540e\uff0c\u9700\u8981\u4e3b\u52a8\u8c03\u7528ACK\u63d0\u4ea4\u6d88\u8d39\u7ed3\u679c\u3002\n                try {\n                    simpleConsumer.ack(messageView);\n                } catch (ClientException e) {\n                    e.printStackTrace();\n                }\n            });\n        } catch (ClientException e) {\n            //\u5982\u679c\u9047\u5230\u7cfb\u7edf\u6d41\u63a7\u7b49\u539f\u56e0\u9020\u6210\u62c9\u53d6\u5931\u8d25\uff0c\u9700\u8981\u91cd\u65b0\u53d1\u8d77\u83b7\u53d6\u6d88\u606f\u8bf7\u6c42\u3002\n            e.printStackTrace();\n        }\n')),(0,r.kt)("h2",{id:"\u4f7f\u7528\u5efa\u8bae"},"\u4f7f\u7528\u5efa\u8bae"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u907f\u514d\u5927\u91cf\u76f8\u540c\u5b9a\u65f6\u65f6\u523b\u7684\u6d88\u606f")),(0,r.kt)("p",null,"\u5b9a\u65f6\u6d88\u606f\u7684\u5b9e\u73b0\u903b\u8f91\u9700\u8981\u5148\u7ecf\u8fc7\u5b9a\u65f6\u5b58\u50a8\u7b49\u5f85\u89e6\u53d1\uff0c\u5b9a\u65f6\u65f6\u95f4\u5230\u8fbe\u540e\u624d\u4f1a\u88ab\u6295\u9012\u7ed9\u6d88\u8d39\u8005\u3002\u56e0\u6b64\uff0c\u5982\u679c\u5c06\u5927\u91cf\u5b9a\u65f6\u6d88\u606f\u7684\u5b9a\u65f6\u65f6\u95f4\u8bbe\u7f6e\u4e3a\u540c\u4e00\u65f6\u523b\uff0c\u5219\u5230\u8fbe\u8be5\u65f6\u523b\u540e\u4f1a\u6709\u5927\u91cf\u6d88\u606f\u540c\u65f6\u9700\u8981\u88ab\u5904\u7406\uff0c\u4f1a\u9020\u6210\u7cfb\u7edf\u538b\u529b\u8fc7\u5927\uff0c\u5bfc\u81f4\u6d88\u606f\u5206\u53d1\u5ef6\u8fdf\uff0c\u5f71\u54cd\u5b9a\u65f6\u7cbe\u5ea6\u3002"))}m.isMDXComponent=!0},74231:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/delaywork-e9647b539ae35898102a336a27d3ad94.png"},96151:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/lifecyclefordelay-2ce8278df69cd026dd11ffd27ab09a17.png"},67578:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/scheduletask-1944aea7bf2a4a4c56be4d90ead4f1f3.png"}}]);