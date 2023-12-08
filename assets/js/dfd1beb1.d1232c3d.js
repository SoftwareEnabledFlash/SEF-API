"use strict";(self.webpackChunkweb_doc=self.webpackChunkweb_doc||[]).push([[5296],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>k});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),d=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=d(t.components);return r.createElement(o.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),u=d(a),c=n,k=u["".concat(o,".").concat(c)]||u[c]||m[c]||l;return a?r.createElement(k,i(i({ref:e},p),{},{components:a})):r.createElement(k,i({ref:e},p))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=c;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s[u]="string"==typeof t?t:n,i[1]=s;for(var d=2;d<l;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8905:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const l={},i="Events",s={unversionedId:"SEF_API/sef-api04",id:"SEF_API/sef-api04",title:"Events",description:"SEFQoSNotification",source:"@site/docs/SEF_API/sef-api04.md",sourceDirName:"SEF_API",slug:"/SEF_API/sef-api04",permalink:"/SEF-API/SEF_API/sef-api04",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Callback Structures",permalink:"/SEF-API/SEF_API/sef-api03"},next:{title:"Enumerated Types",permalink:"/SEF-API/SEF_API/sef-api05"}},o={},d=[{value:"SEFQoSNotification",id:"struct-SEFQoSNotification",level:2},{value:"Members of SEFQoSNotification",id:"members-of-sefqosnotification",level:4},{value:"SEFVDNotification",id:"struct-SEFVDNotification",level:2},{value:"Members of SEFVDNotification",id:"members-of-sefvdnotification",level:4}],p={toc:d},u="wrapper";function m(t){let{components:e,...a}=t;return(0,n.kt)(u,(0,r.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"events"},"Events"),(0,n.kt)("h2",{id:"struct-SEFQoSNotification"},"SEFQoSNotification"),(0,n.kt)("p",null,"This event is issued at the QoS Domain level. "),(0,n.kt)("h4",{id:"members-of-sefqosnotification"},"Members of SEFQoSNotification"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/SEF-API/SEF_API/sef-api05#enum-SEFNotificationType"},"enum SEFNotificationType")),(0,n.kt)("td",{parentName:"tr",align:null},"type"),(0,n.kt)("td",{parentName:"tr",align:null},"See union below...")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"uint8","_","t","[5]"),(0,n.kt)("td",{parentName:"tr",align:null},"reserved","_","0"),(0,n.kt)("td",{parentName:"tr",align:null},"Reserved, must be initialized to zero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/SEF-API/SEF_API/sef-api02#struct-SEFQoSDomainID"},"struct SEFQoSDomainID")),(0,n.kt)("td",{parentName:"tr",align:null},"QoSDomainID"),(0,n.kt)("td",{parentName:"tr",align:null},"QoSDomainID for this notification")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"union"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"7 Members")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u2192 ",(0,n.kt)("a",{parentName:"td",href:"/SEF-API/SEF_API/sef-api02#struct-SEFFlashAddress"},"struct SEFFlashAddress")),(0,n.kt)("td",{parentName:"tr",align:null},"maintenanceFlashAddress"),(0,n.kt)("td",{parentName:"tr",align:null},"Valid when type is kRequireMaintenance")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u2192 struct"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"3 Members")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u2192 \u2192 ",(0,n.kt)("a",{parentName:"td",href:"/SEF-API/SEF_API/sef-api02#struct-SEFUserAddress"},"struct SEFUserAddress")),(0,n.kt)("td",{parentName:"tr",align:null},"changedUserAddress"),(0,n.kt)("td",{parentName:"tr",align:null},"User address that moved")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u2192 \u2192 ",(0,n.kt)("a",{parentName:"td",href:"/SEF-API/SEF_API/sef-api02#struct-SEFFlashAddress"},"struct SEFFlashAddress")),(0,n.kt)("td",{parentName:"tr",align:null},"oldFlashAddress"),(0,n.kt)("td",{parentName:"tr",align:null},"Old flash address")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u2192 \u2192 ",(0,n.kt)("a",{parentName:"td",href:"/SEF-API/SEF_API/sef-api02#struct-SEFFlashAddress"},"struct SEFFlashAddress")),(0,n.kt)("td",{parentName:"tr",align:null},"newFlashAddress"),(0,n.kt)("td",{parentName:"tr",align:null},"New flash address")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u2192 ",(0,n.kt)("a",{parentName:"td",href:"/SEF-API/SEF_API/sef-api02#struct-SEFFlashAddress"},"struct SEFFlashAddress")),(0,n.kt)("td",{parentName:"tr",align:null},"patrolFlashAddress"),(0,n.kt)("td",{parentName:"tr",align:null},"Valid when type is kRequirePatrol")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u2192 struct"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"2 Members")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u2192 \u2192 ",(0,n.kt)("a",{parentName:"td",href:"/SEF-API/SEF_API/sef-api02#struct-SEFUserAddress"},"struct SEFUserAddress")),(0,n.kt)("td",{parentName:"tr",align:null},"unflushedUserAddress"),(0,n.kt)("td",{parentName:"tr",align:null},"Affected user address")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u2192 \u2192 char ","*"),(0,n.kt)("td",{parentName:"tr",align:null},"userData"),(0,n.kt)("td",{parentName:"tr",align:null},"Pointer to buffered data")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u2192 ",(0,n.kt)("a",{parentName:"td",href:"/SEF-API/SEF_API/sef-api02#struct-SEFFlashAddress"},"struct SEFFlashAddress")),(0,n.kt)("td",{parentName:"tr",align:null},"unreadableFlashAddress"),(0,n.kt)("td",{parentName:"tr",align:null},"Valid when type is kUnreadable")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u2192 ",(0,n.kt)("a",{parentName:"td",href:"/SEF-API/SEF_API/sef-api02#struct-SEFFlashAddress"},"struct SEFFlashAddress")),(0,n.kt)("td",{parentName:"tr",align:null},"changedFlashAddress"),(0,n.kt)("td",{parentName:"tr",align:null},"Valid when type is kSuperBlockStateChanged (open=>closed)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u2192 uint32","_","t"),(0,n.kt)("td",{parentName:"tr",align:null},"writtenADUs"),(0,n.kt)("td",{parentName:"tr",align:null},"Number of ADUs written by user i/o commands to the super block")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u2192 uint32","_","t"),(0,n.kt)("td",{parentName:"tr",align:null},"numADUs"),(0,n.kt)("td",{parentName:"tr",align:null},"Capacity of the super block in ADUs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u2192 struct"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"2 Members")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u2192 \u2192 const struct iovec","*"),(0,n.kt)("td",{parentName:"tr",align:null},"iov"),(0,n.kt)("td",{parentName:"tr",align:null},"A pointer to the scatter gather list")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u2192 \u2192 int16","_","t"),(0,n.kt)("td",{parentName:"tr",align:null},"iovcnt"),(0,n.kt)("td",{parentName:"tr",align:null},"The number of elements in the scatter gather list")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"struct-SEFVDNotification"},"SEFVDNotification"),(0,n.kt)("p",null,"This event indicates to the host that it should respond in some appropriate manner to the reduced capacity condition. "),(0,n.kt)("p",null,"This event is issued at the Virtual Device level. Due to failure of blocks, actual available capacity may fall below the allocated capacity of the attached QoS Domains. The host should take action to release super blocks back to the Virtual Device's free pool before it is entirely consumed. "),(0,n.kt)("h4",{id:"members-of-sefvdnotification"},"Members of SEFVDNotification"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/SEF-API/SEF_API/sef-api05#enum-SEFNotificationType"},"enum SEFNotificationType")),(0,n.kt)("td",{parentName:"tr",align:null},"type"),(0,n.kt)("td",{parentName:"tr",align:null},"Is kReducedCapacity, kOutOfCapacity or kOutOfPSLCCapacity")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"uint8","_","t"),(0,n.kt)("td",{parentName:"tr",align:null},"reserved","_","0"),(0,n.kt)("td",{parentName:"tr",align:null},"Reserved, must be initialized to zero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/SEF-API/SEF_API/sef-api02#struct-SEFVirtualDeviceID"},"struct SEFVirtualDeviceID")),(0,n.kt)("td",{parentName:"tr",align:null},"virtualDeviceID"),(0,n.kt)("td",{parentName:"tr",align:null},"Virtual Device for this notification")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"uint32","_","t"),(0,n.kt)("td",{parentName:"tr",align:null},"numADUs"),(0,n.kt)("td",{parentName:"tr",align:null},"kReducedCapacity - Amount of space that is no longer available")))),(0,n.kt)("hr",null))}m.isMDXComponent=!0}}]);