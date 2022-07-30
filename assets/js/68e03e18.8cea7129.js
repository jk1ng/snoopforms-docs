"use strict";(self.webpackChunksnoopforms_docs=self.webpackChunksnoopforms_docs||[]).push([[262],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return n?o.createElement(f,i(i({ref:t},s),{},{components:n})):o.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6034:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return c}});var o=n(3117),r=n(102),a=(n(7294),n(3905)),i=["components"],u={title:"Deployment",description:"Deploy your snoopHub to the cloud.",hide_table_of_contents:!0},l=void 0,p={unversionedId:"hub/deployment",id:"hub/deployment",title:"Deployment",description:"Deploy your snoopHub to the cloud.",source:"@site/docs/hub/2_deployment.md",sourceDirName:"hub",slug:"/hub/deployment",permalink:"/hub/deployment",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/hub/2_deployment.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Deployment",description:"Deploy your snoopHub to the cloud.",hide_table_of_contents:!0},sidebar:"snoopFormsSidebar",previous:{title:"Getting started",permalink:"/hub/installation"},next:{title:"snoopReact",permalink:"/category/snoopreact"}},s={},c=[{value:"Requirements",id:"requirements",level:3},{value:"1. Clone the repository",id:"1-clone-the-repository",level:3},{value:"2. Create .env file",id:"2-create-env-file",level:3},{value:"3. Run Docker",id:"3-run-docker",level:3},{value:"Doesn&#39;t work? \ud83d\ude43",id:"doesnt-work-",level:3}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The easiest way to deploy snoopHub on your server is Docker."),(0,a.kt)("h3",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"To use this manual, you have to have Docker and docker-compose running on your system."),(0,a.kt)("h3",{id:"1-clone-the-repository"},"1. Clone the repository"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git clone https://github.com/snoopForms/snoopforms.git && cd snoopforms\n")),(0,a.kt)("h3",{id:"2-create-env-file"},"2. Create .env file"),(0,a.kt)("p",null,"Create a ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file based on ",(0,a.kt)("inlineCode",{parentName:"p"},".env.example")," and change it according to your setup. The SMTP-credentials are essential for verification emails to work during user signup."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cp .env.example .env && nano .env\n")),(0,a.kt)("h3",{id:"3-run-docker"},"3. Run Docker"),(0,a.kt)("p",null,"Start the docker-compose process to build and spin up the snoopHub container as well as the postgres database."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker-compose up -d\n")),(0,a.kt)("p",null,"You app should be up and running now wherever you deployed it. When you open up snoopHub in the browser you will be automatically redirected to the login. To use your installation of snoopHub, create a new account."),(0,a.kt)("h3",{id:"doesnt-work-"},"Doesn't work? \ud83d\ude43"),(0,a.kt)("p",null,"If you have questions or struggle setting up your instance locally ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/8rwDbyy2Me"},"just join our Discord")," or ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/snoopForms/snoopforms-react"},"create a new issue on Github")," - we are happy to help \ud83e\udd0d"))}m.isMDXComponent=!0}}]);