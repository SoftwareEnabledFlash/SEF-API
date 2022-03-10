"use strict";(self.webpackChunkweb_doc=self.webpackChunkweb_doc||[]).push([[77],{3905:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return c}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),o=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},u=function(t){var e=o(t.components);return n.createElement(d.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=o(a),c=r,h=m["".concat(d,".").concat(c)]||m[c]||p[c]||l;return a?n.createElement(h,s(s({ref:e},u),{},{components:a})):n.createElement(h,s({ref:e},u))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,s=new Array(l);s[0]=m;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:r,s[1]=i;for(var o=2;o<l;o++)s[o]=a[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2371:function(t,e,a){a.r(e),a.d(e,{assets:function(){return u},contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return p}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),s=["components"],i={},d="Data Access Commands",o={unversionedId:"SEF_API/sef-api01",id:"version-1.10/SEF_API/sef-api01",title:"Data Access Commands",description:"SEFWriteWithoutPhysicalAddress1",source:"@site/versioned_docs/version-1.10/SEF_API/sef-api01.md",sourceDirName:"SEF_API",slug:"/SEF_API/sef-api01",permalink:"/1.10/SEF_API/sef-api01",tags:[],version:"1.10",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"API Management Commands",permalink:"/1.10/SEF_API/sef-api00"},next:{title:"Common Structures",permalink:"/1.10/SEF_API/sef-api02"}},u={},p=[{value:"SEFWriteWithoutPhysicalAddress1",id:"function-SEFWriteWithoutPhysicalAddress1",level:2},{value:"Parameters of SEFWriteWithoutPhysicalAddress1",id:"parameters-of-sefwritewithoutphysicaladdress1",level:4},{value:"Return value of SEFWriteWithoutPhysicalAddress1",id:"return-value-of-sefwritewithoutphysicaladdress1",level:4},{value:"SEFReadWithPhysicalAddress1",id:"function-SEFReadWithPhysicalAddress1",level:2},{value:"Parameters of SEFReadWithPhysicalAddress1",id:"parameters-of-sefreadwithphysicaladdress1",level:4},{value:"Return value of SEFReadWithPhysicalAddress1",id:"return-value-of-sefreadwithphysicaladdress1",level:4},{value:"SEFNamelessCopy",id:"function-SEFNamelessCopy",level:2},{value:"Parameters of SEFNamelessCopy",id:"parameters-of-sefnamelesscopy",level:4},{value:"Return value of SEFNamelessCopy",id:"return-value-of-sefnamelesscopy",level:4},{value:"SEFProcessAddressChangeRequests",id:"function-SEFProcessAddressChangeRequests",level:2},{value:"Parameters of SEFProcessAddressChangeRequests",id:"parameters-of-sefprocessaddresschangerequests",level:4},{value:"Return value of SEFProcessAddressChangeRequests",id:"return-value-of-sefprocessaddresschangerequests",level:4},{value:"SEFWriteWithoutPhysicalAddress1Async",id:"function-SEFWriteWithoutPhysicalAddress1Async",level:2},{value:"Parameters of SEFWriteWithoutPhysicalAddress1Async",id:"parameters-of-sefwritewithoutphysicaladdress1async",level:4},{value:"SEFReadWithPhysicalAddress1Async",id:"function-SEFReadWithPhysicalAddress1Async",level:2},{value:"Parameters of SEFReadWithPhysicalAddress1Async",id:"parameters-of-sefreadwithphysicaladdress1async",level:4},{value:"SEFNamelessCopyAsync",id:"function-SEFNamelessCopyAsync",level:2},{value:"Parameters of SEFNamelessCopyAsync",id:"parameters-of-sefnamelesscopyasync",level:4}],m={toc:p};function c(t){var e=t.components,a=(0,r.Z)(t,s);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"data-access-commands"},"Data Access Commands"),(0,l.kt)("h2",{id:"function-SEFWriteWithoutPhysicalAddress1"},"SEFWriteWithoutPhysicalAddress1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"struct SEFStatus SEFWriteWithoutPhysicalAddress1(SEFQoSHandle qosHandle, struct SEFFlashAddress flashAddress, struct SEFPlacementID placementID, struct SEFUserAddress userAddress, uint32_t numADU, const struct iovec *iov, uint16_t iovcnt, struct SEFFlashAddress *permanentAddresses, uint32_t *distanceToEndOfSuperBlock, const struct SEFWriteOverrides *overrides)\n")),(0,l.kt)("p",null,"Writes data to the specified user address to an underlying physical flash page that is assigned for the QoS Domain.\nIf auto-allocate was enabled on the superblock, when the assigned superblock is filled and closed, SEF assigns a new super-block for following writes. If auto-allocate is not enabled, host software will know about the superblock size as part of the allocation, and can use this information to construct appropriately-sized write commands. Manually allocated superblocks for writes MUST be of type kForWrite. This call will not return until the data has been persisted, and will automatically pad the user data with dummy data if required to complete flash memory programming.\nThe userAddress supplied here will be checked when reading the data back with SEFReadWithPhysicalAddress1(). In kSuperblock mode, the LBA portion of the user address is incremented for each ADU when writing multiple ADUs. The user address value 0xFFFFFFFFFFFFFFFF is reserved and is invalid.\nNote: The synchronous and asynchronous versions differ in how data is committed to flash. As described above, the synchronous version flushes data to flash returning permanent flash addresses. In contrast, the asynchronous version lazily flushes data to flash. The flash addresses returned are tentative instead. Once the SEF device eventually flushes a tentative address to flash it may be discovered to be bad. When this happens, a kAddressUpdate QoS notification is sent indicating the data has moved to a new permanent flash address. There is no notification for addresses that have successfully flushed and are now permanent. It can be inferred instead by the kSuperblockStateChanged QoS notification for the owning superblock."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"See Also:")," ",(0,l.kt)("a",{parentName:"p",href:"/1.10/SEF_API/sef-api02#struct-SEFStatus"},"struct SEFStatus")," "),(0,l.kt)("h4",{id:"parameters-of-sefwritewithoutphysicaladdress1"},"Parameters of SEFWriteWithoutPhysicalAddress1"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Direction"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SEFQoSHandle"),(0,l.kt)("td",{parentName:"tr",align:null},"qosHandle"),(0,l.kt)("td",{parentName:"tr",align:null},"In"),(0,l.kt)("td",{parentName:"tr",align:null},"Handle to the QoS Domain")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"struct SEFFlashAddress"),(0,l.kt)("td",{parentName:"tr",align:null},"flashAddress"),(0,l.kt)("td",{parentName:"tr",align:null},"In"),(0,l.kt)("td",{parentName:"tr",align:null},"Physical address of the superblock. 0xFFFFFFFFFFFFFFFF if auto allocate.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"struct SEFPlacementID"),(0,l.kt)("td",{parentName:"tr",align:null},"placementID"),(0,l.kt)("td",{parentName:"tr",align:null},"In"),(0,l.kt)("td",{parentName:"tr",align:null},"Only valid if the flashAddress is auto allocated. A value from 0 to numPlacementIds\u20131 indicating what logical data group to place this data in.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"struct SEFUserAddress"),(0,l.kt)("td",{parentName:"tr",align:null},"userAddress"),(0,l.kt)("td",{parentName:"tr",align:null},"In"),(0,l.kt)("td",{parentName:"tr",align:null},"FTL can store meta-data related to this operation by this field. For example, storing LBA address to bind to this write operation such as data tags.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint32_t"),(0,l.kt)("td",{parentName:"tr",align:null},"numADU"),(0,l.kt)("td",{parentName:"tr",align:null},"In"),(0,l.kt)("td",{parentName:"tr",align:null},"Total amount of write data size calculated in ADU. Maximum allowed is 64k ADUs.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"const struct iovec *"),(0,l.kt)("td",{parentName:"tr",align:null},"iov"),(0,l.kt)("td",{parentName:"tr",align:null},"In"),(0,l.kt)("td",{parentName:"tr",align:null},"A pointer to the scatter gather list")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint16_t"),(0,l.kt)("td",{parentName:"tr",align:null},"iovcnt"),(0,l.kt)("td",{parentName:"tr",align:null},"In"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of elements in the scatter gather list")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"struct SEFFlashAddress *"),(0,l.kt)("td",{parentName:"tr",align:null},"permanentAddresses"),(0,l.kt)("td",{parentName:"tr",align:null},"Out"),(0,l.kt)("td",{parentName:"tr",align:null},"Must allocate space for returned permanent addresses equal to 8",(0,l.kt)("em",{parentName:"td"},"length (e.g. 8"),"number of ADUs)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint32_t *"),(0,l.kt)("td",{parentName:"tr",align:null},"distanceToEndOfSuperBlock"),(0,l.kt)("td",{parentName:"tr",align:null},"Out"),(0,l.kt)("td",{parentName:"tr",align:null},"Indicates remaining size in ADU after this write operation. May be NULL. This is not a guarantee as the block may be forced closed if too many superblocks are open.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"const struct SEFWriteOverrides *"),(0,l.kt)("td",{parentName:"tr",align:null},"overrides"),(0,l.kt)("td",{parentName:"tr",align:null},"In"),(0,l.kt)("td",{parentName:"tr",align:null},"Overrides to scheduler parameters; pointer can be null for none required.")))),(0,l.kt)("h4",{id:"return-value-of-sefwritewithoutphysicaladdress1"},"Return value of SEFWriteWithoutPhysicalAddress1"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"struct SEFStatus"),(0,l.kt)("td",{parentName:"tr",align:null},"Status and info summarizing result. When .error is non-zero, .info is the number of ADUs written.")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"function-SEFReadWithPhysicalAddress1"},"SEFReadWithPhysicalAddress1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"struct SEFStatus SEFReadWithPhysicalAddress1(SEFQoSHandle qosHandle, struct SEFFlashAddress flashAddress, uint32_t numADU, const struct iovec *iov, uint16_t iovcnt, uint32_t iovOffset, struct SEFUserAddress userAddress, const struct SEFReadOverrides *overrides)\n")),(0,l.kt)("p",null,"Reads data from a specified physical address.\nWhile writes are expressed in terms of logical addresses, reads are expressed in terms of physical addresses. Read commands may interrupt other types of commands. When there is an in-flight flash memory command to the same flash die other than a read command, the in-flight command will be suspended in order to maintain deterministic read latency. If the target physical address is currently in the process of being programmed, data will instead be returned from the write buffer.\nThe userAddress must either match what was stored when the data was written or be ~0 to disable checking. In kSuperblock mode, the LBA portion of the user address is incremented for each ADU in a multi-adu write.\nNote: When reading data that was just written, a read error will be returned when the data's original flash address has been updated but the notification has yet to be processed by the client. In this case, the caller must retry the read after the changed flash address notification has been processed."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"See Also:")," ",(0,l.kt)("a",{parentName:"p",href:"/1.10/SEF_API/sef-api02#struct-SEFStatus"},"struct SEFStatus"),", ",(0,l.kt)("a",{parentName:"p",href:"/1.10/SEF_API/sef-api00#function-SEFSetRootPointer"}," SEFSetRootPointer()")," "),(0,l.kt)("h4",{id:"parameters-of-sefreadwithphysicaladdress1"},"Parameters of SEFReadWithPhysicalAddress1"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Direction"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SEFQoSHandle"),(0,l.kt)("td",{parentName:"tr",align:null},"qosHandle"),(0,l.kt)("td",{parentName:"tr",align:null},"In"),(0,l.kt)("td",{parentName:"tr",align:null},"Handle to the QoS Domain")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"struct SEFFlashAddress"),(0,l.kt)("td",{parentName:"tr",align:null},"flashAddress"),(0,l.kt)("td",{parentName:"tr",align:null},"In"),(0,l.kt)("td",{parentName:"tr",align:null},"Physical address for the read command; When the QoS domain ID and block number are 0, the ADU offset is the root pointer index for the flash address to read.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint32_t"),(0,l.kt)("td",{parentName:"tr",align:null},"numADU"),(0,l.kt)("td",{parentName:"tr",align:null},"In"),(0,l.kt)("td",{parentName:"tr",align:null},"Length of data to read (in ADUs). Maximum allowed is superblockCapacity.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"const struct iovec *"),(0,l.kt)("td",{parentName:"tr",align:null},"iov"),(0,l.kt)("td",{parentName:"tr",align:null},"In"),(0,l.kt)("td",{parentName:"tr",align:null},"A pointer to the scatter gather list")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint16_t"),(0,l.kt)("td",{parentName:"tr",align:null},"iovcnt"),(0,l.kt)("td",{parentName:"tr",align:null},"In"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of elements in the scatter gather list")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint32_t"),(0,l.kt)("td",{parentName:"tr",align:null},"iovOffset"),(0,l.kt)("td",{parentName:"tr",align:null},"In"),(0,l.kt)("td",{parentName:"tr",align:null},"Starting byte offset into iov array")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"struct SEFUserAddress"),(0,l.kt)("td",{parentName:"tr",align:null},"userAddress"),(0,l.kt)("td",{parentName:"tr",align:null},"In"),(0,l.kt)("td",{parentName:"tr",align:null},"Stored data by the FTL. It will be validated with what was stored when the data was written except when SEFUserAddressIgnore is supplied")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"const struct SEFReadOverrides *"),(0,l.kt)("td",{parentName:"tr",align:null},"overrides"),(0,l.kt)("td",{parentName:"tr",align:null},"In"),(0,l.kt)("td",{parentName:"tr",align:null},"Overrides to scheduler parameters; pointer can be null for none required.")))),(0,l.kt)("h4",{id:"return-value-of-sefreadwithphysicaladdress1"},"Return value of SEFReadWithPhysicalAddress1"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"struct SEFStatus"),(0,l.kt)("td",{parentName:"tr",align:null},"Status and info summarizing result.")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"function-SEFNamelessCopy"},"SEFNamelessCopy"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"struct SEFStatus SEFNamelessCopy(SEFQoSHandle srcQosHandle, struct SEFCopySource copySource, SEFQoSHandle dstQosHandle, struct SEFFlashAddress copyDestination, const struct SEFUserAddressFilter *filter, const struct SEFCopyOverrides *overrides, uint32_t numAddressChangeRecords, struct SEFAddressChangeRequest *addressChangeInfo, void *copyContext)\n")),(0,l.kt)("p",null,"Performs Nameless Copy with map or list; optional user address filtering.\nCopies ADUs as described by copySource to the copyDestination. If the destination superblock was allocated by SEFAllocateSuperBlock() the type must be kForCopy."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"See Also:")," ",(0,l.kt)("a",{parentName:"p",href:"/1.10/SEF_API/sef-api02#struct-SEFStatus"},"struct SEFStatus"),", ",(0,l.kt)("a",{parentName:"p",href:"/1.10/SEF_API/sef-api01#function-SEFProcessAddressChangeRequests"}," SEFProcessAddressChangeRequests()"),", ",(0,l.kt)("a",{parentName:"p",href:"/1.10/SEF_API/sef-api00#function-SEFPrepareBufferForNamelessCopy"}," SEFPrepareBufferForNamelessCopy()")," "),(0,l.kt)("h4",{id:"parameters-of-sefnamelesscopy"},"Parameters of SEFNamelessCopy"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Direction"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SEFQoSHandle"),(0,l.kt)("td",{parentName:"tr",align:null},"srcQosHandle"),(0,l.kt)("td",{parentName:"tr",align:null},"In"),(0,l.kt)("td",{parentName:"tr",align:null},"Handle to the source QoS Domain")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"struct SEFCopySource"),(0,l.kt)("td",{parentName:"tr",align:null},"copySource"),(0,l.kt)("td",{parentName:"tr",align:null},"In"),(0,l.kt)("td",{parentName:"tr",align:null},"Physical addresses to copy")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SEFQoSHandle"),(0,l.kt)("td",{parentName:"tr",align:null},"dstQosHandle"),(0,l.kt)("td",{parentName:"tr",align:null},"In"),(0,l.kt)("td",{parentName:"tr",align:null},"Handle to the destination QoS Domain")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"struct SEFFlashAddress"),(0,l.kt)("td",{parentName:"tr",align:null},"copyDestination"),(0,l.kt)("td",{parentName:"tr",align:null},"In"),(0,l.kt)("td",{parentName:"tr",align:null},"Physical address of destination superblock")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"const struct SEFUserAddressFilter *"),(0,l.kt)("td",{parentName:"tr",align:null},"filter"),(0,l.kt)("td",{parentName:"tr",align:null},"In"),(0,l.kt)("td",{parentName:"tr",align:null},"Pointer to user address filter parameters, null indicates no filtering")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"const struct SEFCopyOverrides *"),(0,l.kt)("td",{parentName:"tr",align:null},"overrides"),(0,l.kt)("td",{parentName:"tr",align:null},"In"),(0,l.kt)("td",{parentName:"tr",align:null},"Pointer to overrides to scheduler parameters; pointer can be null for none required.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint32_t"),(0,l.kt)("td",{parentName:"tr",align:null},"numAddressChangeRecords"),(0,l.kt)("td",{parentName:"tr",align:null},"In"),(0,l.kt)("td",{parentName:"tr",align:null},"Maximum number of ADUs to copy (size of addressChangeRequest userAddress array)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"struct SEFAddressChangeRequest *"),(0,l.kt)("td",{parentName:"tr",align:null},"addressChangeInfo"),(0,l.kt)("td",{parentName:"tr",align:null},"Out"),(0,l.kt)("td",{parentName:"tr",align:null},"Information to record changed addresses")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"void *"),(0,l.kt)("td",{parentName:"tr",align:null},"copyContext"),(0,l.kt)("td",{parentName:"tr",align:null},"In"),(0,l.kt)("td",{parentName:"tr",align:null},"Pointer to working buffer returned by SEFPrepareBufferForNamelessCopy()")))),(0,l.kt)("h4",{id:"return-value-of-sefnamelesscopy"},"Return value of SEFNamelessCopy"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"struct SEFStatus"),(0,l.kt)("td",{parentName:"tr",align:null},"Status and info summarizing result, .info contains:Destination super block has defective planes (1bit)Read error was detected on source (1bit)Data that is out of User Address range is detected (1bit)Destination superblock was filled/closed (1bit)Consumed entire source bitmap or list (1bit)")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"function-SEFProcessAddressChangeRequests"},"SEFProcessAddressChangeRequests"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"struct SEFStatus SEFProcessAddressChangeRequests(SEFQoSHandle srcQosHandle, struct SEFCopySource copySource, SEFQoSHandle dstQosHandle, uint32_t copyInfo, const struct SEFAddressChangeRequest *addressChangeInfo)\n")),(0,l.kt)("p",null,"Performs post processing of address change records for Nameless Copy. "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"See Also:")," ",(0,l.kt)("a",{parentName:"p",href:"/1.10/SEF_API/sef-api02#struct-SEFStatus"},"struct SEFStatus"),", ",(0,l.kt)("a",{parentName:"p",href:"/1.10/SEF_API/sef-api01#function-SEFNamelessCopy"}," SEFNamelessCopy()")," "),(0,l.kt)("h4",{id:"parameters-of-sefprocessaddresschangerequests"},"Parameters of SEFProcessAddressChangeRequests"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Direction"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SEFQoSHandle"),(0,l.kt)("td",{parentName:"tr",align:null},"srcQosHandle"),(0,l.kt)("td",{parentName:"tr",align:null},"In"),(0,l.kt)("td",{parentName:"tr",align:null},"Handle to the source QoS Domain")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"struct SEFCopySource"),(0,l.kt)("td",{parentName:"tr",align:null},"copySource"),(0,l.kt)("td",{parentName:"tr",align:null},"In"),(0,l.kt)("td",{parentName:"tr",align:null},"Physical addresses to copy")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SEFQoSHandle"),(0,l.kt)("td",{parentName:"tr",align:null},"dstQosHandle"),(0,l.kt)("td",{parentName:"tr",align:null},"In"),(0,l.kt)("td",{parentName:"tr",align:null},"Handle to the destination QoS Domain")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint32_t"),(0,l.kt)("td",{parentName:"tr",align:null},"copyInfo"),(0,l.kt)("td",{parentName:"tr",align:null},"In"),(0,l.kt)("td",{parentName:"tr",align:null},"Information returned from namelessCopy in status.info field. copyInfo contains:Destination super block has defective planes (1bit)Read error was detected on source (1bit)Data that is out of User Address range is detected (1bit)Destination superblock was filled/closed (1bit)Consumed entire source bitmap or list (1bit)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"const struct SEFAddressChangeRequest *"),(0,l.kt)("td",{parentName:"tr",align:null},"addressChangeInfo"),(0,l.kt)("td",{parentName:"tr",align:null},"In"),(0,l.kt)("td",{parentName:"tr",align:null},"Information to record changed addresses")))),(0,l.kt)("h4",{id:"return-value-of-sefprocessaddresschangerequests"},"Return value of SEFProcessAddressChangeRequests"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"struct SEFStatus"),(0,l.kt)("td",{parentName:"tr",align:null},"Status and info summarizing result.")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"function-SEFWriteWithoutPhysicalAddress1Async"},"SEFWriteWithoutPhysicalAddress1Async"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"void SEFWriteWithoutPhysicalAddress1Async(SEFQoSHandle qosHandle, struct SEFWriteWithoutPhysicalAddressIOCB *iocb)\n")),(0,l.kt)("p",null,"This function is the asynchronous version of SEFWriteWithoutPhysicalAddress1().\nNote: Any kAddressUpdate and kSuperBlockStateChange QoS notifications for the returned tentative addresses will occur after the iocb completion routine has returned. When no completion routine is set, the caller must handle the race condition of acting on done being set and the notifications being sent."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"See Also:")," ",(0,l.kt)("a",{parentName:"p",href:"#function-SEFWriteWithoutPhysicalAddress1"},"SEFWriteWithoutPhysicalAddress1()")," "),(0,l.kt)("h4",{id:"parameters-of-sefwritewithoutphysicaladdress1async"},"Parameters of SEFWriteWithoutPhysicalAddress1Async"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Direction"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SEFQoSHandle"),(0,l.kt)("td",{parentName:"tr",align:null},"qosHandle"),(0,l.kt)("td",{parentName:"tr",align:null},"In"),(0,l.kt)("td",{parentName:"tr",align:null},"Handle to the QoS Domain")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"struct SEFWriteWithoutPhysicalAddressIOCB *"),(0,l.kt)("td",{parentName:"tr",align:null},"iocb"),(0,l.kt)("td",{parentName:"tr",align:null},"In/Out"),(0,l.kt)("td",{parentName:"tr",align:null},"For asynchronous response from SEF Library. Unused fields should be set to 0.")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"function-SEFReadWithPhysicalAddress1Async"},"SEFReadWithPhysicalAddress1Async"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"void SEFReadWithPhysicalAddress1Async(SEFQoSHandle qosHandle, struct SEFReadWithPhysicalAddressIOCB *iocb)\n")),(0,l.kt)("p",null,"This function is the asynchronous version of SEFReadWithPhysicalAddress1(). "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"See Also:")," ",(0,l.kt)("a",{parentName:"p",href:"#function-SEFReadWithPhysicalAddress1"},"SEFReadWithPhysicalAddress1()")," "),(0,l.kt)("h4",{id:"parameters-of-sefreadwithphysicaladdress1async"},"Parameters of SEFReadWithPhysicalAddress1Async"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Direction"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SEFQoSHandle"),(0,l.kt)("td",{parentName:"tr",align:null},"qosHandle"),(0,l.kt)("td",{parentName:"tr",align:null},"In"),(0,l.kt)("td",{parentName:"tr",align:null},"Handle to the QoS Domain")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"struct SEFReadWithPhysicalAddressIOCB *"),(0,l.kt)("td",{parentName:"tr",align:null},"iocb"),(0,l.kt)("td",{parentName:"tr",align:null},"In/Out"),(0,l.kt)("td",{parentName:"tr",align:null},"For asynchronous response from SEF Library Unused fields should be set to 0.")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"function-SEFNamelessCopyAsync"},"SEFNamelessCopyAsync"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"void SEFNamelessCopyAsync(SEFQoSHandle qosHandle, struct SEFNamelessCopyIOCB *iocb)\n")),(0,l.kt)("p",null,"This function is the asynchronous version of SEFNamelessCopy(). "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"See Also:")," ",(0,l.kt)("a",{parentName:"p",href:"/1.10/SEF_API/sef-api01#function-SEFNamelessCopy"},"SEFNamelessCopy()")," "),(0,l.kt)("h4",{id:"parameters-of-sefnamelesscopyasync"},"Parameters of SEFNamelessCopyAsync"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Direction"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SEFQoSHandle"),(0,l.kt)("td",{parentName:"tr",align:null},"qosHandle"),(0,l.kt)("td",{parentName:"tr",align:null},"In"),(0,l.kt)("td",{parentName:"tr",align:null},"Handle to the source QoS Domain")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"struct SEFNamelessCopyIOCB *"),(0,l.kt)("td",{parentName:"tr",align:null},"iocb"),(0,l.kt)("td",{parentName:"tr",align:null},"In/Out"),(0,l.kt)("td",{parentName:"tr",align:null},"For asynchronous response from SEF Library Unused fields should be set to 0.")))),(0,l.kt)("hr",null))}c.isMDXComponent=!0}}]);