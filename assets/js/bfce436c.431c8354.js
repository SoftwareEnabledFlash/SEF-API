"use strict";(self.webpackChunkweb_doc=self.webpackChunkweb_doc||[]).push([[6737],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>k});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),s=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=s(t.components);return n.createElement(d.Provider,{value:e},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),u=s(a),m=r,k=u["".concat(d,".").concat(m)]||u[m]||c[m]||l;return a?n.createElement(k,i(i({ref:e},p),{},{components:a})):n.createElement(k,i({ref:e},p))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[u]="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},784:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const l={},i="Events",o={unversionedId:"SEF_API/sef-api04",id:"version-1.10/SEF_API/sef-api04",title:"Events",description:"SEFQoSNotification",source:"@site/versioned_docs/version-1.10/SEF_API/sef-api04.md",sourceDirName:"SEF_API",slug:"/SEF_API/sef-api04",permalink:"/SEF-API/1.10/SEF_API/sef-api04",draft:!1,tags:[],version:"1.10",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Callback Structures",permalink:"/SEF-API/1.10/SEF_API/sef-api03"}},d={},s=[{value:"SEFQoSNotification",id:"struct-SEFQoSNotification",level:2},{value:"Members of SEFQoSNotification",id:"members-of-sefqosnotification",level:4},{value:"SEFVDNotification",id:"struct-SEFVDNotification",level:2},{value:"Members of SEFVDNotification",id:"members-of-sefvdnotification",level:4}],p={toc:s},u="wrapper";function c(t){let{components:e,...a}=t;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"events"},"Events"),(0,r.kt)("h2",{id:"struct-SEFQoSNotification"},"SEFQoSNotification"),(0,r.kt)("p",null,"This event is issued at the QoS Domain level. "),(0,r.kt)("h4",{id:"members-of-sefqosnotification"},"Members of SEFQoSNotification"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"enum SEFNotificationType"),(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"See union below...")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"uint8_t","[5]"),(0,r.kt)("td",{parentName:"tr",align:null},"reserved","_","0"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"struct SEFQoSDomainID"),(0,r.kt)("td",{parentName:"tr",align:null},"QoSDomainID"),(0,r.kt)("td",{parentName:"tr",align:null},"QoSDomainID for this notification")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"struct SEFUserAddress"),(0,r.kt)("td",{parentName:"tr",align:null},"changedUserAddress"),(0,r.kt)("td",{parentName:"tr",align:null},"User address that moved")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"struct SEFFlashAddress"),(0,r.kt)("td",{parentName:"tr",align:null},"oldFlashAddress"),(0,r.kt)("td",{parentName:"tr",align:null},"Old flash address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"struct SEFFlashAddress"),(0,r.kt)("td",{parentName:"tr",align:null},"newFlashAddress"),(0,r.kt)("td",{parentName:"tr",align:null},"New flash address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"struct SEFFlashAddress"),(0,r.kt)("td",{parentName:"tr",align:null},"maintenanceFlashAddress"),(0,r.kt)("td",{parentName:"tr",align:null},"kRequireMaintenance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"struct SEFFlashAddress"),(0,r.kt)("td",{parentName:"tr",align:null},"patrolFlashAddress"),(0,r.kt)("td",{parentName:"tr",align:null},"kRequirePatrol")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"char *"),(0,r.kt)("td",{parentName:"tr",align:null},"userData"),(0,r.kt)("td",{parentName:"tr",align:null},"pointer to buffered data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"struct SEFUserAddress"),(0,r.kt)("td",{parentName:"tr",align:null},"unflushedUserAddress"),(0,r.kt)("td",{parentName:"tr",align:null},"affected user address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"struct SEFFlashAddress"),(0,r.kt)("td",{parentName:"tr",align:null},"unreadableFlashAddress"),(0,r.kt)("td",{parentName:"tr",align:null},"kUnreadable")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"struct SEFFlashAddress"),(0,r.kt)("td",{parentName:"tr",align:null},"changedFlashAddress"),(0,r.kt)("td",{parentName:"tr",align:null},"kSuperblockStateChanged open=>closed")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"struct-SEFVDNotification"},"SEFVDNotification"),(0,r.kt)("p",null,"This event indicates to the host that it should respond in some appropriate manner to the reduced capacity condition.\nThis event is issued at the Virtual Device level. Due to failure of blocks, actual available capacity may fall below the allocated capacity of the attached QoS Domains. This event indicates to the host that it should respond in some appropriate manner to the reduced capacity condition. "),(0,r.kt)("h4",{id:"members-of-sefvdnotification"},"Members of SEFVDNotification"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"enum SEFNotificationType"),(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"Is kReducedCapacity or kOutOfCapacity")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"uint8_t"),(0,r.kt)("td",{parentName:"tr",align:null},"reserved","_","0"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"struct SEFVirtualDeviceID"),(0,r.kt)("td",{parentName:"tr",align:null},"virtualDeviceID"),(0,r.kt)("td",{parentName:"tr",align:null},"virtual device for this notification")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"uint32_t"),(0,r.kt)("td",{parentName:"tr",align:null},"numADUs"),(0,r.kt)("td",{parentName:"tr",align:null},"kReducedCapacity - Amount of space that is no longer available")))),(0,r.kt)("hr",null))}c.isMDXComponent=!0}}]);