"use strict";(self.webpackChunkweb_doc=self.webpackChunkweb_doc||[]).push([[8886],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),p=a,m=d["".concat(l,".").concat(p)]||d[p]||f[p]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1925:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:4},i="Design Strategy",s={unversionedId:"strategy",id:"version-1.13/strategy",title:"Design Strategy",description:"chap-DesignStrategy}",source:"@site/versioned_docs/version-1.13/strategy.md",sourceDirName:".",slug:"/strategy",permalink:"/SEF-API/1.13/strategy",draft:!1,tags:[],version:"1.13",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Design Environment",permalink:"/SEF-API/1.13/environment"},next:{title:"SEF Unit",permalink:"/SEF-API/1.13/sef-unit"}},l={},c=[],u={toc:c},d="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"chap-DesignStrategy"},"Design Strategy"),(0,a.kt)("p",null,"The SEF Library is nearly stateless. Nearly all application requests result in one or more requests\nto the SEF driver. Those requests are submitted using the caller's thread. The completion of\nasynchronous SEF driver requests is handled by an internal, statically sized thread pool based on\nthe number of CPUs. Therefore, completion routines should not block on resources that require\nanother completion routine to execute as that would risk deadlock. Issuing a synchronous request\nor waiting for a resource owned by another completion thread won't cause deadlock, but it does\nreduce the number of threads available to process completions."),(0,a.kt)("p",null,"Writes to a SEF Unit complete before the final flash memory address has been assigned, returning a\npreliminary flash address. A notification is sent when the final flash memory address is different\nthan the preliminary address. However, no direct notification is sent when the preliminary flash\nmemory address is the final flash memory address. It can be inferred by utilizing buffer release\nnotifications. The write buffer supplied to the device must remain valid until the data is committed\nto flash memory. The write call includes a flag that causes notifications to be sent as portions of\nthe buffer have been committed to flash memory. When a buffer release notification is sent, the\npreliminary addresses for that portion are final, or a notification was already sent for the actual\nfinal flash address. In the case of a power failure, up-to-date metadata structures can be rebuilt\nfrom the user address data and write serial numbers supplied when the data was written."))}f.isMDXComponent=!0}}]);