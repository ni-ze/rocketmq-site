"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[7153],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>d});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(o),h=n,d=u["".concat(s,".").concat(h)]||u[h]||m[h]||i;return o?r.createElement(d,a(a({ref:t},p),{},{components:o})):r.createElement(d,a({ref:t},p))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,a[1]=l;for(var c=2;c<i;c++)a[c]=o[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}h.displayName="MDXCreateElement"},37430:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=o(87462),n=(o(67294),o(3905));const i={},a="GitHub Submit PR",l={unversionedId:"contributionGuide/03pull-request",id:"version-5.0/contributionGuide/03pull-request",title:"GitHub Submit PR",description:"This article walks you through contributing RocketMQ through Git",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-5.0/11-contributionGuide/03pull-request.md",sourceDirName:"11-contributionGuide",slug:"/contributionGuide/03pull-request",permalink:"/docs/contributionGuide/03pull-request",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/11-contributionGuide/03pull-request.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"Code Guidelines",permalink:"/docs/contributionGuide/02code-guidelines"},next:{title:"Release Manual",permalink:"/docs/contributionGuide/04release-manual"}},s={},c=[{value:"GitHub Remote Repository",id:"github-remote-repository",level:2},{value:"Git Contribution Guide",id:"git-contribution-guide",level:2},{value:"GitHub Commit PR",id:"github-commit-pr",level:2},{value:"Merge PR",id:"merge-pr",level:2},{value:"Reject PR",id:"reject-pr",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...i}=e;return(0,n.kt)(u,(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"github-submit-pr"},"GitHub Submit PR"),(0,n.kt)("p",null,"This article walks you through contributing RocketMQ through Git"),(0,n.kt)("h2",{id:"github-remote-repository"},"GitHub Remote Repository"),(0,n.kt)("p",null,"As a prerequisite, this section briefly explains the reasons for using Git to contribute RocketMQ. If you have related knowledge, you can skip it"),(0,n.kt)("p",null,"First, you need to educate yourself about Git and GitHub"),(0,n.kt)("p",null,"Think: From a developer's perspective, how do you collaborate with others to complete a project?"),(0,n.kt)("p",null,"If you think of packaging, compression, and then copy and paste, think of expanding the scope of participants to the 10k+ level"),(0,n.kt)("p",null,"This is the point of the remote repository: Developers can easily access the repository code from GitHub and submit development branches to the remote repository to communicate and share with others"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"1656601484232",src:o(76056).Z,width:"1032",height:"480"})),(0,n.kt)("p",null,"So, with this public repository, what then?"),(0,n.kt)("p",null,"How do I download the code for a remote repository?"),(0,n.kt)("p",null,"How do I commit a development branch to a remote repository?"),(0,n.kt)("h2",{id:"git-contribution-guide"},"Git Contribution Guide"),(0,n.kt)("p",null,"\u2460 fork ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/rocketmq"},"apache/rocketmq")," to personal GitHub remote repository"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"https://github.com/cuser/rocketmq.git # cuser's rocketmq repo[repository] url\n")),(0,n.kt)("p",null,"Notice: ",(0,n.kt)("inlineCode",{parentName:"p"},"cuser")," GitHub username\uff0cafter ",(0,n.kt)("inlineCode",{parentName:"p"},"Fork")," you can find the copy repository through the personal home page Repositories, and view the address"),(0,n.kt)("p",null,"\u2461 Install Git yourself and clone it to your local repository"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/cuser/rocketmq.git # git clone [repo url]\n")),(0,n.kt)("p",null,"Notice\uff1aThe cloned local repository will use GitHub repository as the remote repository, and will be named ",(0,n.kt)("inlineCode",{parentName:"p"},"origin")),(0,n.kt)("p",null,"\u2462 Get the latest code for the development branch"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"git rebase origin/develop # git rebase [branch]\n")),(0,n.kt)("p",null,"Notice\uff1a ",(0,n.kt)("a",{parentName:"p",href:"https://git-scm.com/docs/git-rebase"},"rebase",(0,n.kt)("inlineCode",{parentName:"a"}," <branch>"))," The basic term is base swapping, and you can see why this step is necessary by looking at the linked examples"),(0,n.kt)("p",null,"\u2463 Make changes in the local repository"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'git checkout -b RocketMQ-Vxx.0 # git checkout [-b] [new-branch]\ngit add /rocketmq/pom.xml # git add [dir/file]\ngit commit -a -m "pom"  # git commit [-all] [-msg] [message]\n')),(0,n.kt)("p",null,"Notice\uff1a Reference ",(0,n.kt)("a",{parentName:"p",href:"https://git-scm.com/docs/git-add"},"Git"),"\uff0cUse relative paths to switch to the same directory as ",(0,n.kt)("inlineCode",{parentName:"p"},".git")),(0,n.kt)("p",null,"\u2464 Push changes to the remote repository"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"git push --set-upstream apache RocketMQ-Vxx.0   # push branch to https://github.com/cuser/rocketmq-site.git\n")),(0,n.kt)("h2",{id:"github-commit-pr"},"GitHub Commit PR"),(0,n.kt)("p",null,"As follows: Take submitting PR to the ",(0,n.kt)("inlineCode",{parentName:"p"},"new-official-website")," branch as an example to illustrate the PR process"),(0,n.kt)("p",null,"Reference ",(0,n.kt)("inlineCode",{parentName:"p"},"Git Contribution Guide"),"Modify the branch in the local repository and push it to the GitHub remote repository"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"git checkout new-official-website   # git checkout -b new-official-website\ngit push origin new-official-website    # push to https://github.com/cuser/rocketmq-site.git\n")),(0,n.kt)("p",null,"\u2460 Switch the GitHub remote repository to the development branch new-official-website"),(0,n.kt)("p",null,"\u2461 Create the pull request and click the open pull request under Contribute"),(0,n.kt)("p",null,"\u2462 compare across forks, Select the request branch and the development branch"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"1656580236831",src:o(53030).Z,width:"922",height:"69"})),(0,n.kt)("p",null,"base repository / base : Request repository and request branch"),(0,n.kt)("p",null,"head repository / compare : Develop repository and branch"),(0,n.kt)("p",null,"Be sure to correctly select the request branch and the development branch, and request merging only after obtaining permission from the branch owner"),(0,n.kt)("p",null,"\u2463 Fill in the PR summary with uppercase letters and briefly describe the PR content"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"1656589498318",src:o(48706).Z,width:"776",height:"177"})),(0,n.kt)("p",null,"\u200b\tBefore submitting PR, please confirm as follows:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"A ","[GitHub Issue]","( ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq/issues"},"apache/rocketmq: Mirror of Apache RocketMQ (github.com)")," ) corresponding to PR has been created"),(0,n.kt)("li",{parentName:"ol"},"Modified content to comply with ",(0,n.kt)("a",{parentName:"li",href:"/docs/contributionGuide/02code-guidelines"},"Coding Guidelines")," programming specification"),(0,n.kt)("li",{parentName:"ol"},"The PR summary begins with ","[ISSUE #XXX]"," and briefly describes the change requirements"),(0,n.kt)("li",{parentName:"ol"},"Outline PR change requirements, change logs, and validation information,Reference ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq/pull/152"},"PR Demo")),(0,n.kt)("li",{parentName:"ol"},"Submit content with complete test cases and ensure that basic checks, unit tests, and integration tests pass")),(0,n.kt)("p",null,'\u2464 Click "Create pull request" , Request that the branch be merged'),(0,n.kt)("p",null,"\u2465 At this point, the PR is visible on the apache/rocketmq-site remote repository, and all collaborators can review the PR and make suggestions"),(0,n.kt)("p",null,"You can make changes locally and commit multiple times based on comments. Information about the request to merge and the submission of changes is displayed simultaneously on the PR page, the issue list, and the RocketMQ mailing list, in order to remind the committer to review the PR in a timely manner"),(0,n.kt)("h2",{id:"merge-pr"},"Merge PR"),(0,n.kt)("p",null,"Open source Project development branch mergers are performed by the committer."),(0,n.kt)("p",null,"\u2460 Merge contributor PR"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"git checkout develop    # switch to local develop branch\ngit pull apache develop # fast-forward to current remote HEAD\ngit pull --squash https://github.com/cuser/rocketmq.git RocketMQ-Vxx.0  # merge to branch\n")),(0,n.kt)("p",null,"A pull request merge branch may contain multiple commits. It is recommended that the ",(0,n.kt)("inlineCode",{parentName:"p"},"--squash")," directive compress the commit to a single commit"),(0,n.kt)("p",null,"It is important to resolve merge conflicts and ensure that the current branch is synchronized to the remote branch before merging"),(0,n.kt)("p",null,"Please read","[Git pull]","( ",(0,n.kt)("a",{parentName:"p",href:"https://git-scm.com/docs/git-pull"},"Git - git-pull Documentation (git-scm.com)")," ) to learn fast-forward and other info"),(0,n.kt)("p",null,"\u2461 Merge committer PR"),(0,n.kt)("p",null,"If committer merges its own PR, run the command ","[Git merge]","( ",(0,n.kt)("a",{parentName:"p",href:"https://git-scm.com/docs/git-merge"},"Git - git-merge Documentation (git-scm.com)")," )"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"git checkout develop      # switch to local develop branch\ngit pull apache develop   # fast-forward to current remote HEAD\ngit merge --squash RocketMQ-Vxx.0   # merge to branch\n")),(0,n.kt)("p",null,"\u2462 Do regular patch checks, build projects with built-in test cases, and be sure to modify the changelog"),(0,n.kt)("p",null,"\u2463 Once all of the above is done, submit the merge with the following instructions, feedback the branch status to the developer, and close PR"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'git commit --author="contributor_name <contributor_email>" -a -m "RocketMQ-Vxx.0 description closes apache/rocketmq#ZZ"\n')),(0,n.kt)("p",null,"For details of closing PR, reference ",(0,n.kt)("a",{parentName:"p",href:"https://docs.github.com/cn/issues/tracking-your-work-with-issues/closing-an-issue"},"Close PR")),(0,n.kt)("p",null,"\u2464 Push the merged branch to the apache/rocketmq remote repository"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"git push apache develop\n")),(0,n.kt)("p",null,"\u2465 Once a PR is submitted, it will remain in the GitHub remote repository, and you can also update your personal GitHub repository simultaneously"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"git push origin develop\n")),(0,n.kt)("p",null,"Notice: squash discards the commit information of the development branch"),(0,n.kt)("h2",{id:"reject-pr"},"Reject PR"),(0,n.kt)("p",null,"Reject PR: Means that no pull or merge is performed, but only the reject PR message is submitted"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-SHELL"},'git commit --allow-empty -m "RocketMQ-Vxx.0 closes apache/rocketmq#ZZ *Won\'t fix*"\ngit push apache develop\n')),(0,n.kt)("p",null,"Close PR #ZZ on GitHub"))}m.isMDXComponent=!0},76056:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/1_Github-84c9eac1be749cc78c0570e6e6b4fafe.png"},53030:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/2_compare-e6e43b6f317598e536eb244233a5e50e.png"},48706:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/3_Write-531b30b458285686e95f5f1ad01f2f33.png"}}]);