"use strict";(self.webpackChunkweb_doc=self.webpackChunkweb_doc||[]).push([[1282],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>y});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),f=c(r),u=i,y=f["".concat(l,".").concat(u)]||f[u]||p[u]||a;return r?n.createElement(y,s(s({ref:t},d),{},{components:r})):n.createElement(y,s({ref:t},d))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[f]="string"==typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4674:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const a={sidebar_position:9},s="Delayed Writes",o={unversionedId:"delayed-writes",id:"delayed-writes",title:"Delayed Writes",description:"chap-DelayedWrites}",source:"@site/docs/delayed-writes.md",sourceDirName:".",slug:"/delayed-writes",permalink:"/SEF-API/delayed-writes",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"docs",previous:{title:"Super Blocks",permalink:"/SEF-API/super-blocks"},next:{title:"Addressing",permalink:"/SEF-API/addressing"}},l={},c=[],d={toc:c},f="wrapper";function p(e){let{components:t,...r}=e;return(0,i.kt)(f,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"chap-DelayedWrites"},"Delayed Writes"),(0,i.kt)("p",null,"Writes to a SEF Unit complete before the final flash memory addresses have been assigned. The addresses returned by\n",(0,i.kt)("a",{parentName:"p",href:"/SEF-API/SEF_API/sef-api01#function-SEFWriteWithoutPhysicalAddress"},"SEFWriteWithoutPhysicalAddress")," are preliminary\nflash addresses. When a defect is encountered, some portion of the write will be relocated\nto different flash addresses. When this occurs, a notification is sent mapping the preliminary\nflash addresses to the final flash memory address. There is no direct notification sent when the\npreliminary flash memory address is the final flash memory address. A close notification is only sent\nafter all the flash addresses in a super block are final. For specific addresses, it can be inferred by\nutilizing buffer release notifications. A write buffer supplied to the device must remain valid until\nthe data is committed to flash memory. By default, the library copies the write data to a library\ncontrolled buffer. The write call can set the ",(0,i.kt)("inlineCode",{parentName:"p"},"kSefIoFlagNotifyBufferRelease")," flag indicating the\nthe user supplied buffer can be used directly. The caller must keep the buffer valid until notified\nthe buffer can be released. When a buffer release notification is sent, the flash addresses for that\nportion of the buffer are final."))}p.isMDXComponent=!0}}]);