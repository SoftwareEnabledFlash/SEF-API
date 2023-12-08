"use strict";(self.webpackChunkweb_doc=self.webpackChunkweb_doc||[]).push([[2917],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=m(n),u=r,f=p["".concat(s,".").concat(u)]||p[u]||c[u]||o;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8473:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:3},i="Definitions and Acronyms",l={unversionedId:"definitions",id:"definitions",title:"Definitions and Acronyms",description:"chap-DefinitionsAcronyms}",source:"@site/docs/definitions.md",sourceDirName:".",slug:"/definitions",permalink:"/SEF-API/definitions",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docs",previous:{title:"Introduction",permalink:"/SEF-API/intro"},next:{title:"SEF Unit",permalink:"/SEF-API/sef-unit"}},s={},m=[],d={toc:m},p="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"chap-DefinitionsAcronyms"},"Definitions and Acronyms"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Terms/Acronyms"),(0,r.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Software-Enabled Flash\u2122\ufe0f (SEF)"),(0,r.kt)("td",{parentName:"tr",align:null},"A flash memory-based storage hardware platform that is driven by software. Pronounced as ess \u0113 ef.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SEF Unit"),(0,r.kt)("td",{parentName:"tr",align:null},"A PCIe\xae\ufe0f flash memory storage device. Contains one or more flash memory dies and provides flash memory service functions. The SEF Unit command set consists of a subset of the NVMe\u2122\ufe0f command set with extensions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Flash Translation Layer (FTL)"),(0,r.kt)("td",{parentName:"tr",align:null},"A mapping of Logical Block Addresses (LBA) to flash memory addresses providing a block based API on top of a flash memory API.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Virtual Device (VD)"),(0,r.kt)("td",{parentName:"tr",align:null},"A set of flash memory dies. A Virtual Device occupies one or more flash memory dies and provides one or more QoS domains and wear leveling service between QoS domains. Flash memory dies can only be assigned to one virtual device; they are never shared between virtual devices. Virtual devices provide true hardware-based isolation. ",(0,r.kt)("em",{parentName:"td"},"Refer to ",(0,r.kt)("a",{parentName:"em",href:"/SEF-API/virtual-devices#chap-VirtualDevice"},"Virtual Devices")," Chapter for more information"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Pseudo Single-Level Cell (pSLC)"),(0,r.kt)("td",{parentName:"tr",align:null},"SEF devices may optionally support programming flash memory as if it\u2019s SLC for increased endurance.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"QoS Domain (QD)"),(0,r.kt)("td",{parentName:"tr",align:null},"A logical construct exposed to the host and enumerated as a SEF Unit node. QoS domains are created within a single virtual device, and draw super blocks from a common pool within the virtual device. Many QoS domains may be created within a single virtual device. QoS domains provide software-based isolation, impose quotas on capacity, and are comprised of a set of super blocks within a virtual device. Super blocks are not shared between QoS domains. Read/write commands are issued to a specific QoS domain. ",(0,r.kt)("em",{parentName:"td"},"Refer to ",(0,r.kt)("a",{parentName:"em",href:"/SEF-API/qos-domains#chap-QoSDomain"},"QoS Domains")," Chapter for more information."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Super Block"),(0,r.kt)("td",{parentName:"tr",align:null},"A set of flash memory blocks spanning all of the dies in a virtual device. All flash memory blocks in a super block can be programmed and read in parallel. ",(0,r.kt)("em",{parentName:"td"},"Refer to ",(0,r.kt)("a",{parentName:"em",href:"/SEF-API/super-blocks#chap-SuperBlock"},"Super Blocks")," Chapter for more information."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Logical Block Address (LBA)"),(0,r.kt)("td",{parentName:"tr",align:null},"Represents one component of an optional user-visible addressing interface implemented by an FTL.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ADU"),(0,r.kt)("td",{parentName:"tr",align:null},"Atomic data unit. A SEF-defined internal representation of abstract storage that is the minimum read/write quantum (analogous to the block size of a traditional block device). A SEF Unit may support multiple ADU sizes and the ADU size is specified when creating a QoS domain. The minimum ADU size is 4096 bytes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Placement ID"),(0,r.kt)("td",{parentName:"tr",align:null},"A placement ID is used when writing data to a QoS domain. It\u2019s used to group data of similar lifetime together. ADUs written with the same placement ID are stored in the same super blocks.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Root Pointer"),(0,r.kt)("td",{parentName:"tr",align:null},"Provides a bootstrapping mechanism to retrieve metadata from a QoS domain.")))))}c.isMDXComponent=!0}}]);