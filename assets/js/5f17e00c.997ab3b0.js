"use strict";(self.webpackChunkweb_doc=self.webpackChunkweb_doc||[]).push([[605],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return n?o.createElement(f,r(r({ref:t},c),{},{components:n})):o.createElement(f,r({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2463:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var o=n(7462),a=n(3366),i=(n(7294),n(3905)),r=["components"],s={sidebar_position:7},l="QoS Domains",d={unversionedId:"qos-domains",id:"version-1.10/qos-domains",title:"QoS Domains",description:"A QoS domain is the mechanism used to access data within a SEF device. QoS domains are created",source:"@site/versioned_docs/version-1.10/qos-domains.md",sourceDirName:".",slug:"/qos-domains",permalink:"/SEF-API/1.10/qos-domains",draft:!1,tags:[],version:"1.10",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Virtual Devices",permalink:"/SEF-API/1.10/virtual-devices"},next:{title:"Super Pages",permalink:"/SEF-API/1.10/super-pages"}},c={},u=[{value:"Figure 8.1: QoS Domain Example",id:"figure-81-qos-domain-example",level:4},{value:"Creation-time Parameters",id:"creation-time-parameters",level:2}],p={toc:u};function m(e){var t=e.components,s=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"qos-domains"},"QoS Domains"),(0,i.kt)("p",null,"A QoS domain is the mechanism used to access data within a SEF device. QoS domains are created\nwithin a virtual device, and it is possible to have multiple QoS domains sharing a single virtual\ndevice. When multiple QoS domains share a virtual device, they will draw from a common pool of\nsuper blocks. However a super block is never shared between QoS domains and so data for QoS\ndomains will never be intermingled in a super block. When QoS domains share a virtual device,\nthere is no hardware isolation between them, so die-time conflicts are possible. The scheduling and\nprioritization features of SEF are used to order I/O for shared virtual devices and to resolve these\ndie-time conflicts (e.g. software-defined isolation/quality of service)."),(0,i.kt)("p",null,"When a QoS domain is created, several parameters are specified to define the characteristics of the\nQoS domain, which will be discussed below. Upon successful creation of a QoS domain, a device\nnode will be created in the operating system namespace corresponding to the newly created QoS\ndomain. At boot time the SEF device driver will create device nodes for all QoS domains previously\ndefined for the device. Device nodes for QoS domains may be used to enumerate existing QoS\ndomains as well as to restrict access to/enforce ownership of a QoS domain. All user data access\ncommands are issued against a QoS domain. Typically, a QoS domain will be used by a single\napplication or Flash Translation Layer/block driver/key value driver."),(0,i.kt)("p",null,"Figure 8.1 shows an example of how the virtual devices of a SEF Unit could be divided into QoS\ndomains. A QoS domain is a logical construct that defines a capacity taken from its virtual device\u2019s\ncapacity. It also defines a quota that may exceed the capacity of the virtual device as shown with\nQoS domains three through four. A SEF Unit can have at most 65534 QoS domains defined. The\nactual limit depends on specific hardware limitations."),(0,i.kt)("p",null,"Allocated super blocks are owned by only one QoS domain at a time and never shared. Super blocks\nare allocated from a shared pool allowing for host-managed thin provisioning. A QoS domain can\nallocate super blocks until it hits its quota or the free pool is exhausted."),(0,i.kt)("h4",{id:"figure-81-qos-domain-example"},"Figure 8.1: QoS Domain Example"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"QoS Domain Example",src:n(5527).Z,width:"869",height:"529"})),(0,i.kt)("h2",{id:"creation-time-parameters"},"Creation-time Parameters"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"vdHandle"),": the handle to the virtual device the QoS domain will be created in."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"QoSDomainID"),": an identifier that will later be used to specify the created QoS domain. This\nidentifier must be unique across the entire SEF device. IDs 0 and 1 are reserved."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"flashCapacity"),": the number of ADUs reserved for the QoS domain. It is subtracted from the\navailable ADUs from the virtual device so must be less than the currently available ADUs."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"flashQuota"),": the quota for the amount of space this QoS domain may consume. The value is\nspecified as the total number of ADUs. If less than flashCapacity, it will be set to flashCapacity.\nSince a super block is never shared between QoS domains, the actual capacity allocated for the QoS\ndomain may be greater than requested to fill out an entire super block."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ADUsize"),": this is the ADU size requested for this QoS domain. Different QoS domains, even within\nthe same virtual device, may have different ADU sizes. A list of supported ADU sizes for a SEF\ndevice may be queried from the SEF device."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"api"),": this field specifies the API to be used for this QoS domain. Currently only the super block\nAPI is supported."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"recovery"),": Specifies the error recovery strategy for this QoS domain."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"encryption"),": specifies that the QoS domain is to be encrypted."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"numRootPointers"),": specifies the number of user defined metadata pointers to be created for this\nQoS domain. A typical use for this would be to preserve metadata for the QoS domain within the\nQoS domain itself. For example, an L2P lookup table for a block FTL could be written/persisted\nwithin the QoS domain, keeping track of the physical addresses of the table. ADUs could then be\nwritten containing a tree of pointers to all of the ADUs making up the table, and finally the root\npointer of the tree of pointers could be saved. At initialization time the root pointer could be read\nto restore the entire table. Up to 16 root pointers may be saved per QoS domain."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"numPlacementIDs"),": specifies the number of separate, simultaneously opened super blocks that\nmay be used by the QoS domain in auto allocation mode. It does not affect the number of manually\nopened super blocks, which instead depends on the device itself."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"FMQDefaults"),": specifies the default FMQ to use for each type of I/O operation. This can be\noptionally overridden when submitting I/O to a QoS domain."))}m.isMDXComponent=!0},5527:function(e,t,n){t.Z=n.p+"assets/images/qos-domain-example-fdadb5c12d23039c0223d5a956707753.png"}}]);