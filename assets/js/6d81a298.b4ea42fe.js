"use strict";(self.webpackChunkweb_doc=self.webpackChunkweb_doc||[]).push([[104],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),u=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return i.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(c,".").concat(d)]||p[d]||h[d]||a;return n?i.createElement(m,s(s({ref:t},l),{},{components:n})):i.createElement(m,s({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var u=2;u<a;u++)s[u]=n[u];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4955:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return h}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),s=["components"],o={sidebar_position:6},c="Virtual Devices",u={unversionedId:"virtual-devices",id:"version-1.10/virtual-devices",title:"Virtual Devices",description:"A Virtual Device encompasses one or more flash memory dies, providing the user the ability to",source:"@site/versioned_docs/version-1.10/virtual-devices.md",sourceDirName:".",slug:"/virtual-devices",permalink:"/1.10/virtual-devices",tags:[],version:"1.10",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Software-Enabled Flash\u2122 (SEF) Unit",permalink:"/1.10/sef-unit"},next:{title:"QoS Domains",permalink:"/1.10/qos-domains"}},l={},h=[{value:"Creation-time Parameters",id:"creation-time-parameters",level:2}],p={toc:h};function d(e){var t=e.components,o=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,i.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"virtual-devices"},"Virtual Devices"),(0,a.kt)("p",null,"A Virtual Device encompasses one or more flash memory dies, providing the user the ability to\nutilize the hardware isolation of separate dies. Dies are not shared across separate virtual devices.\nI/O operations on one Virtual Device will not compete for die time with other virtual devices. There\nmay be a minimal amount of latency caused by contention between virtual devices due to any\ninternal controller bottlenecks or flash memory channel conflicts for virtual devices that share flash\nmemory channels."),(0,a.kt)("p",null,"When a virtual device is created, several parameters are specified to define the characteristics of the\nvirtual device. Virtual devices are created by using the SEFCreateVirtualDevice() function. The\nsize of the virtual device is user-configurable and dependent on the resources available. When a\nnew virtual device is created, it must be given a unique ID."),(0,a.kt)("p",null,"Because virtual devices represent hardware isolation, the SEF Unit will not wear level across the\ndies in different virtual devices. It is expected that virtual devices will be created when a SEF\nUnit is first set up and their geometry not subsequently altered. Deleting and creating new virtual\ndevices is supported but may mix dies with different amounts of wear. In this case, wear leveling\nbecomes the application\u2019s responsibility."),(0,a.kt)("h2",{id:"creation-time-parameters"},"Creation-time Parameters"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"virtualDeviceID"),": an identifier that will later be used to specify the created virtual device. This\nidentifier must be unique across the entire SEF device. The maximum allowed ID is one less than\nthe number of dies in the SEF Unit."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"dieMap"),": Requests a rectangular region of dies that will be owned by the created virtual device."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"defectStrategy"),": Specifies how defective ADUs are handled by the virtual device. The choices are\nPerfect, Packed or Fragmented. The Perfect strategy hides defective ADUs through overprovisioning\nand mapping. Capacity is reserved, and ADUs are remapped to provide static and consistent flash\nmemory addresses with contiguous ADU offsets. Packed also hides defective ADUs presenting\nconsistent flash memory addresses with contiguous ADU offsets, but the size of super blocks will\nshrink as the device wears. With the Fragmented strategy, the client is exposed to the device\u2019s\ndefect management. ADU offsets are non-contiguous, and super blocks will shrink in size as the\ndevice wears. Refer to Chapter 11 for more details."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"numFMQueues"),": Specifies the number of Flash Media Queues per die. The maximum value is\nfirmware-specific and can be retrieved with SEFGetInformation()."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"weights"),": Specifies the default weights for each Flash Media Queue. There is a default weight for\neach type of operation: read, erase for write, write, read for copy, erase for copy and write for copy.\nThe weights affect which queue will supply the next die operation. If all the weights are the same,\nthe queues are round-robined. If all the weights are 0, the queue number is used as a priority with\nqueue 0 being the highest priority. Otherwise, weighted fair queuing is used and the queue with the\nlowest current die time is selected. When an I/O completes, the weighting for the I/O is added to\nthe die time for the queue. The minimum die time from all the queues is then subtracted from all\nthe queues. Additionally, when a read operation arrives at the head of a queue with a die time less\nthan a currently executing write or erase, that operation is automatically suspended to execute the\nread. When choosing different command weights for weighted fair queuing, it is necessary to know\nthe actual die time for each command and the percent of die time that is desired for each command.\nCommand die time can be found in the SEFInfo structure returned by SEFGetInformation(). In\ngeneral, if there are n commands whose die times are ci with a desired percent pi of die time, the\nweights wi are then:"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"weight 1",src:n(7093).Z,width:"233",height:"282"})),(0,a.kt)("p",null,"This will certainly yield fractional weights. To make them integers, they can be normalized by\nmultiplying all the weights by a scaling factor (e.g., 100 and/or the inverse of the smallest weight).\nFor example, if you wish reads to use 75% of the bandwidth and writes to use 25% with hypothetically\nreads taking 100us and writes taking 2000us."),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"weight 2",src:n(4505).Z,width:"458",height:"428"})),(0,a.kt)("p",null,"Normalizing by dividing by 0.0635 yields a read weight of 1 and a write weight of 60."))}d.isMDXComponent=!0},7093:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOkAAAEaCAYAAAD0RnDgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAB53SURBVHhe7d13XFXlA8dxLnAvU1Qwxb0HVpa5+uXGkWZqaoqmYmqOVFw5ShRUTDIkLUdKqblSK3dqaebOmQMcmChIAoqKxAjw3nO/v3PxqoBijAs+nPt9v17nDw+okXx4znPGcyxAREJjpESCY6REgmOkRIJjpESCY6REgmOkRIJjpESCY6REgmOkRIJjpESCY6REgmOkRIJjpESCY6REgmOkRIJjpESCY6REgmOkRIJjpESCY6REgmOkRIJjpGRy/0bsgndPTywP1Rr3UH4wUjKJpFPfYfLoIejzTkc0r10SVta14ftHqvGjlB+MlEzi/q1LOHnmMm4lp+G03+vQMFKTYaRkYjpGamKMVGH0yTcRfv0u0oy/TqdLxs3wq4i6l2lvAWGkpsZIFeR+5A/w8hiM0b0awK3tbJyMj8X+r7zgOXAkPvGZgvea1EKzDzfghs74GwoEIzU1RqoYydgx3hNLrmiRcsIbbhon1G/dHaNXXsTDVBJ/GY7y6iqY/HuKcU9BYKSmxkgVQp/yC0b2+QIR8ih5a21POFnaosXHh5Bk/LjBP1sGwsW6NEZt/de4pyAwUlNjpEqhi8Kl0DhI8ri5bVg12BbvjO9vZTyu1eKId33Y2DbH19cyXr+UcONnX3i80xVdunTJ2da1KzxGrjD+/qwYqakxUoXRa09g4ssOKNMiEJGScadMrzsPn0aOcGk4HRez3GOQFnUKO7duwebNm3O4bcHOQ2HG350VIzU1Rqow98PnoZmNGv+b9AfuG/cZpATPRH2NBm1mBstjKpAQeR1xGSI2HUZqaoxUYdLno1blMGZHxnmn8VDXrgUWh2nlUfUiPu3phX0peuPHTYmRmhojVZRU/Dy8OmxLdMNPcRkDjMc3XZ1RqvEs/KWTELN9NPrNPJlppDUdLQ5PeRVqqyqYvLcgzyKbD0aqIHrdFcxqWgwV2y/E35kOZSWErfVEzeod8dHUoeg1eDEuJBs/ZCIpwUH4oHs3dO3UAnVci8PJqThca72Bt97phh595xo/i/KCkSpMYlQYbiQ+fbKZFH0BwZduPrpuSkUDIyUSHCMlEhwjJRIcIyUSHCMlEhwjJRIcIyUSHCNVoKTDE1FTYwkLC4vC31QO6DLvCgr0uXIzw0gVSIrbi5EvOkL1KB5LlG85BRt27sKuXbncdu7Az9u3YtOP67FmRRAWBM7GtEmjMKhXR7zxUgUUU6syR2qhQsmXPsafhbFSi5lgpAoVf2w6GhR7PJpaWlfE0PU3YOoHX+7HXcG+7+dgeOd6cDYGq7IqD6+t94yfQfnFSBUrDacD26K45eNRzqb021gVVlALVkuIPbMWE96sBhuVCpU7BSG6QB6FMz+MNBMJkoK+sfS6q1jctQIsjZEaDnsrtPwcFwry5l0pFr/5tYOrQyMEhhTMczbmxqwj1adG4+hP8zCmlzteq1MZZUu7okKVaqhR93X0HLsUx28+PP2hRejqAXh32tECeryr4GijfkTvyjaP56cqB7TyPpxp7SPTi8d+35Zo7rUXBbmakrkwz0h1sTi8dATeKGeL4lVa4gPf73DoctyjtWr1Sdfx+5LheOPVbvj2XCJu7BiNFx1fwPCNicbPKEok3Nw1KtPZXktNHUz65Y7J56cZ6bXB8OvyPjbH8jxvfpldpP+Gb4ZXU1eoNeXRceJ6XH7GkHL7wGQ0qvMKapewgrXDm1gVU1S/4RKxz7sx7FQPD3tVcKjcD1ujC/brSbxyDOdiODHNLzOKVELsH3PRoZINrO3rwmvD1fS1fp4tARsHVYGV/I1dqpEfLhfhQUGfehZ+LUplmp/W6PJN+hKgJDazifTecX80c7GCpXUVDN/wd44vtsdvHYTSltZoMHpfkZuPZpV6eQneLG1tjFTeLEugy9zgIv91KZ1ZRKqN2Yz+NWyhUqnRcOSviDfuz4m00DlobFMKQ39MMO4pyiRc/b4Pyls9vgHByqEh/I8Wxbm2+VB+pFIM1varmn7Iale+D7ZkWjD6v92PXoTWJdvhuwKevxUaKRabhrlBnWF+WrKuF/bHGT9OwlF8pP8cnIBahjOb8ijayud0DuahmaVdnQv3ZrOK9Hw0KynhIMa/6pThsowa9Qb8hFtCneNJReTxjVjkPw0Txk+G3xcrceBqwV44EpWyI5VuYVl31/STJdb2rREUnpfStEhNVVChRomnZuP14laPDntVVq7ot/yqADfGS4g9+S2GNK0Kt9Ze+Hr7cYSGXcDBrV9jTKf2mLLjpvHzzIeiI9XGBKG9k+EbUYWyredlWeay4Oh1EdizbD7mzg1AQEA+trnzsGzX5QJa3U+L4IUd4ZzhtkF1SXd8ff55riWYhtB1Q+BWzAlNR23F4xmGhL/3+KFHw4qo1OYr4z7zoehI7/7wnvHeVTVa+57N9aFuXumTDsKvVwe0aeMOd/d8bG3aw8N7G24X0A8Xww+TZe9WTp+vPwhVhTKNffDnczmqlHBz9xi42VmhQqsAhGZ4ikavuwDfxo7p/31Vu60y7n1Ih7BtvujXxxd7Y5V5TVbBkWpxwrch1IZvPssy8NrGG9SeRntzKzyr22WYn9rg9TF7cnUG3BSkuO0YUNkGltY1MWV/1n+rJBwNGon3+k/BlstZRnp5SrO4kzPsXbthXaTypiUGCo40FTtH1EgfJSzVDRF4Pg/jqDYJSWawkvTtvR+hrl2G2wbV1eC1OUYe2wqLFicN749RqeDScAYu5fKfSp8ci9gEZY6iBgqONA37JrwIa/mbzsqmHb57dLN8TukQHNAdYzabwxnFZBye8QYcHl6WURVDu1l/Ft70QHsKk15xkP9uNVpOK7y/t6hQcKQS/prfRv7pLI8MNi2x9HruItWnHcfkdoPw872CePOYePRp5/FpC+f0Gz5e9FiFXP7vypf7179EcxtLqKwq4qPduXjJky4BUeFR+EfhVSv6xFHKmemop1FBZV0dUw7k5rhVhyvL+qDn7LydbJIStmBQnXJwcXGGs3PeNxeXMqjnsbxQHp5OPDcf7qU1KN90Jk4V8g1ID/+dcnPE82/oKnzYcwDGDHVHzZeGYbtSbjZ5CkVHqteFwr+VPDpYWKPpx8dyfI9qcshX6NF5Fs7k+c19SYg8dwQHDuzH/v352A4cxunwgr8dURu9BQNqO8Cp5kBsu1H43+z3oxaipa0VNCX74OdnvjM1ASF/nJUPj0Pg3/sDbInSIfXCbDTQOKD/SuUu16LoSA3iD3njFUdLaEq9he+u/ve4ePfUIvRuNxgbw81jZqRPOokZLV+AjYs7Fp55PvNvwyWW6a8Xg7VtW6zI7nFAKQY7prRDh492I+G3cegz84x8lCNPaRa0h4O6LmYeU+4ZPsVHajhzeP67fqhuZwWXlwZjw4WnH8vpk69hu78HWnaYjF0R5vFciOE66ap+NaGxrYsJPxfm2dysJMTsGIEaNo54e+6lJ6YYieF7EeDpjq6Tt0MePOWR9yL+uivJ//3n4dvEEc6v+SAvJ++LCjOI1EBC9MH56Ne4HGzsK6FVn7GYERiE9Zu3YMPKBfAZ0QMtGreD14J9iDabpSjj8bvPGyhmXQY9F4Y8WpXi+UnFpQ3j0KxGXbwzPhDLV69C0DxfjOzbCR17jMWyw9FP3LKYdGQSamns5bD/EuB2xoJjJpE+lITwY1uwaNZkeA0diPcHj8Ikn7lYs+cS7in5X/kJWlxa0RPl1Q5oNn4P4kS6xKi9gwuHd2Lzxq349cBpXI/P7h8mCVuHVYeNUwesNMyjpTu4HqnMR+7MLFIyHFXc2jsR9Rw1qN3tW1wrooeJUvwm9HbVoFr3Vbgj/zp+zzh4+p9X5IjKSM1M8oXF6FBWA9dG3jha2Pf+mVBKiB/qaxzRb8VdeW4ahkWeg3hbIBV92ps7MORFRzhWeQ8bIwp6CE3G7kn9MD+4YE7C6VPPYLZ7RTTs7YMJnj0x5acIxc5LGamZ0CefxWdtXWFTojkCjxf8tdfEk7PQuv0chBVkObp4hIcEI/yuss/2MVJzIEVh/WA32NjUwuhNpn8fTFbJV9agd00XdF8Q/hwv6ygHI1W8RBya1RLFrUuha+CZAnqA/KF4nPl+AlqU00BTsgvWFdl1isXCSBVNh7/W9kUltR2ajPy54B4eT43B8U1fYEirSukPNBjW9K3psb7Qn0lVKkaqYLcPTkUDJzVqdFqEyyaZtmmRdDcKYeeP4/dt3+Prz70xvLc73F7I8K4ZeTO8+nD0diUsgSoGRqpQqZeXoUsFDVQqK9g5Pf0pm5xuJUuUgJOjHdRWqkwxZrcVqz4Kh/P8cAJlxUgVSIrfj3GvFs9RUKbfrPHG5KL39jmRMVIF0t0Lxo7v12D16tWFv635CSeieE7XlBgpkeAYKZHgGCmR4BgpkeAYKZHgGCmR4BipGUiL2A7vfn0w+5dbBXDDezzObPDDYA8P9H/fE737jsDcLReRbPwo5R8jVTwJf3/bGQ7qMui/4rppI5XuYMfExqjZzBv7ox88n5oW/RsmN6+ONlN+5727JsJIzUIyYm8lmHwUjfvNC9XtG2BuSOb7i5KPT4GbfS188jtf828KjJTyKA6rPcrBqepIHM7y/Js+dQ8GV7JF9XfXQLlLVhceRqpoOvwTFY7oeNMvlaJP/RWDKtqgVJNP8VeWx0YNi137NHKEXfnB+C3VPN6lU5AYqULp00KxbFQvDBw7FC2rv4RxG6NMerh7P2oBWthYwtX9K8Rk/YOlKAS6O8HKpjW+fQ6vrVAaRqpIWpwO6IPRG25AMr4lu1LX7/DPw4/G/ohB9WuiWtWqqJqLrVo1N/SeH5L+Z6QEz8CrGhXKtlv85MPk0k182d4Jluon56uUe4xUgfQpe+HVfWb6qxfuRyxAK0ebLI+PaZEQG4UbkZGIzM12IwbxxofHU0774GU50nLt5Ugf7HpMuoWv3jRE+go+O81I84uRKpEuChdD78qHtzqc/vQN2KjrY85Z08aSen4WXjOMpG0W4OYTI2k0vmhjiDSPb1inTBipgunT/sBYN3u4tgjANRNPDaXYILSzs0LppnMQ/sSJozB82swR1rZvYnUsTxzlFyNVsHu7hqOidTH0WvK3PKpKuH09EoaXG+qTz2Hd5zMw3dcXvrnYpk//FCsPxaT/2fq0YxjnZofibhNxMsv6Sfq0w/CqJX+s9nicUPaSuIWCkSpWPNb3rwhbl+74UR7N9Mm/YbSHPy7Lo54+6SzW+vtg2tSpmJqLbdq0mVhx4EGk8qwUu8e4wa5kN/x4J/Noqb21HG8V16DRmP0CvK2t6GOkCmV4G/bUhg6o1GW5nKsOl4IGYISJbwtMu7wIbUqVRI+F1zK84kH+uxa0Q8ny3bDOTF7EXNAYqWKl4sTctqj4cm9Mm+SJPuN/gukvWUr4e6c3WtRqgA/mbcGRk39g07wBaFCnPT7b+zxfSqwsjFTRdLgXEYKQq3cLdPU+XUIY9m1YivmB8/HtD4cQkcg8TYmREgmOkRIJjpESCY6REgmOkRIJjpESCY6REgmOkRIJjpESCY6REgmOkRIJjpESCY6REgmOkRIJjpESCY6REgmOkRIJjpESCY6REgmOkRIJjpESCY6REgmOkRIJjpESCY6REgmOkRIJjpESCY6REgmOkRIJjpESCY6REgmOkRIJjpESCY6REgmOkRIJjpESCY6REgmOkRIJjpESCY6REgmOkRIJjpESCY6REgmOkRIJjpESCY6REgmOkRIJjpESCY6REgmOkRIJjpESCY6REgmOkRIJjpESCY6REgmOkRIJjpESCY6REgmOkRIJjpESCY6REgmOkRIJjpESCY6REgmOkRIJjpESCY6REgmOkRIJjpESCY6REgmOkRIJjpESCY6REgmOkRIJjpESCY6REgmOkRIJjpESCY6REgmOkRIJjpESCY6REgmOkRIJjpESCY6REgmOkRIJjpESCY6REgmOkRIJjpESCY6REgmOkRIJjpESCY6REgmOkRIJjpESCY6REgmOkRIJjpESCY6REgmOkRIJjpESCY6REgmOkZKJpCLy+EYs8p+GCeMnw++LlThwNcn4McoPRkr5JCH25LcY0rQq3Fp74evtxxEadgEHt36NMZ3aY8qOm8bPo7xipJQPaQhdNwRuxZzQdNRWROuMu+Vw/97jhx4NK6JSm6+M+yivGCnlkYSbu8fAzc4KFVoFIDTNuFum112Ab2NHWFioULXbKuPeh3QI2+aLfn18sTdWMu6jZ2GklCdS3HYMqGwDS+uamLL/X+Peh5JwNGgk3us/BVsupxr3GUm3sLiTM+xdu2Fd5KOhl56BkVIeaHHS73VoVCq4NJyBS1rj7hzSJ8ciNoGjaE4xUso1vfYUJr3iIB/OqtFy2p9yslSQGCnl2v3rX6K5jSVUVhXx0e4U494c0CUgKjwK/7DqXGGklGspZ6ajnkYFK5t2+O5mzuaV/4auwoc9B2DMUHfUfGkYtj8+FUz/gZFSrt2PWoiWtlbQlOyDn1P0xr1Pk4CQP87Kh8ch8O/9AbZE6ZB6YTYaaBzQf+U94+fQf2GklGuGSyzTXy8Ga9u2WBGTzYgoxWDHlHbo8NFuJPw2Dn1mnpHnrhL+WtAeDuq6mHksy1lfyhYjpTyQELNjBGrYOOLtuZeeOHGUGL4XAZ7u6Dp5O+TBUx55L+Kvu5Ic93n4NnGE82s+OM95aY4xUsqjVFzaMA7NatTFO+MDsXz1KgTN88XIvp3QscdYLDscjaxjbNKRSailsZfD/uuJj1H2GCnlj/YOLhzeic0bt+LXA6dxPT67/JKwdVh12Dh1wMob8udId3A9MtH4MXoWRkqFQorfhN6uGlTrvgp35F/H7xkHT//zHFFzgJFSoUgJ8UN9jSP6rbgrz03DsMhzEG8LzCFGSoVCn3oGs90romFvH0zw7IkpP0VwFM0hRkqFRxeP8JBghN/N8MgM/SdGSiQ4RUcaf3E75vtMgrf/Gvx55+lPXfwbcwHnIzKfZdTe+gNLZ/jjx7P3wGc16HlTaKQSbuycjHd6zcKOs8FY3rcKXqj/CU4kGz9sJMVvQ/8KGji/MhXnHl1cT8KP71eEpYXhMSxfXOBFd3rOFBmp9s4WDH5zPA7FG36Vhr3jX4TaugamHsx8K1rCzmEoZ6VClW4rkf6p6XS4+G13lJX327kOxO5n3puac3pdBPYsm4+5cwMQEJCPbe48LNt1GbypznwoMFIdzgV0Qv+gG+mHqnptMLwbOsBK0wTzMz2drMXhKa9CrdLgrYCwzGcapZtY1bsiSrw4GX9mOcdhiG2TT394+u5CNkfQT6VPOgi/Xh3Qpo073N3zsbVpDw/vbbjN43CzobhI9bqrmNOtHzbdeTACppyciroaS5Rq7IfQjCVK4ZjTshgsrd0w4yk3e99Z+y5qZRphH9De+hZvFrNBzW7LEcVQqBAocCSVkJKcYjzhk4Z9E16CtcoWnbLcLyrFrUGXklawKysf0iY/eUgbu9oDnWddeOq1vKTYW0gsYoF+/vnnqFixouI3Pz8/41esHAo9cfSAPu0QRtWyg7V9a3wTkTm3hF0P5qOVOi9DnHHfY/I8dkJnTD+snJnf7du3ERoaqvgtNjbW+BUrh6IjTT72MWqrLVG62ecIz9Tow/moGh3nPPlEhl57Dj5dPsTvWU4aaROiEBEVzzV9qFApOFIdQgNbQyOH2Nz7ZOawpCjMa1tcno/Wgs9TRsuUc37o8eEOPL5ik4bzK73Qa8BYDG5dA02G/YSbuTzclRK2YFCdcnBxcYazc943F5cyqOexHNGcD5sNBUeail+8asFK5YABqxOM+x7Qpx3FWDf5MNi2I9bezTofTcXeiZ3gve/xWrIpIQF474MNiJF0OPPp/2Dr0BU/xOf20kwSIs8dwYED+7F/fz62A4dxOjzz10PKpuBItTg27TX5kNYRA7/PfEeRdGcDepRRQ+3wDn5MyBzb/cgV6NtzPsIeHQOnYNfYHph79r78GyMQ2Nb5qZdmiAqKsuekJ3xQz1aN+sN34XGmcfhl4lto514HGutqmLjn8aikTwvFkvd746tTGVdk1+HGxVDckw8vU8/PRkMbDVr5GNbrMQ+SxOPq503RkcqZ4uyKIahftjLafeiPpcsWYdqgt/HerP2ISzqHJYMaonyVthgXsBRLv/TBBz098fnuBzdBPCkN+ya+DBv7Flh8RamJpuLvExsxd5wHWjWog0plS8O1QhVUq14XTbuNxfIjMY9OsqVeXYN+nafxiKIQKDzSB/TJMTh/9Dds27gNRy7fy3A2V8I/kaewe/NG7DpyCbefccVFSvoFgyrbomKHr9NP2mjvXMcNxaz+oUPMsSAMbVZBnm9XQZv3fbFm/2Xce/T/IwnXDizFB03ro++is0i4uRPD6xVH7b4/ZTi5RgXFLCI1hdsbB6C0lTMGrL4l/yoZO8f2xpcKuPtenxaODeOb4QW1BtVaT8Smi9n/5JHuHcS4Jm6o51YClip79FwSnc1RB5kSI80RLf6c2QS2jl2wPk6PtLAgeA5cUeRvC9TGHYX/21WgtrRHo8HrcT0HP3PubhuMclYWsFQ3xBd8RKhQMNIcSjozFy3Lv4x+PpPg2XM8tuXkO1pg+sQTmNGqtDwiWuPlfuszvAD42fTJ29C3rBpONUbjD85HCwUjzQVtfARCgq8irqh/c0ox2DCoNtQqFYrXHon9T94XmS29LhQz/1cMNfv8IM9UqTAwUrMjIfKH/igvH7KqrMphyIabuZtXStGY1/YF9FgcxfloIWGkZkaffAij3eyhslClv+4hJJdH7YZHAWe7N8M8E8xH9WmR2LPEFxMnz8baI9GPrj3rE69gR9BsfDLJB1+t3oswM7/BipGaFQl/r34XJS0tYKGyQ9f51/I0GmpTUzNcxsqrOGwb8xaGLT2MY+sGo4Z9DYzZGoMb+/3Ru8tgzNtyGmFXjiHog3pwrTMQm8LN9yQVIzUn8lx04Vsu8ihqAWu71gjK8vheYUq7tgA9+61OX2FCuvMN2tlZoVitxujQax7OZrgKJN1di67OalTvtgIxZnp8zUjNiJT4A3rI3/AWcqQuDZ7nIms6nJvTBSM2PHhHacrZBy8ldqg6GL/ezfyDQ689iYkvO8g/VNpgueEdMhnkdSmbooaRmpGHMVhYWMJt4FaTL2Z2L/h7TPMai8DtV3HfuO+ppGgseLcX1t0yRCchfHEH2Kis0XjcwSd+nz7tAEbUsIPKqgom78386n9zWcqGkZqRxN9GoqKVPB+1UKPNzJA8zCu1SEp6etqGt3lPa+SYfiitLt7ZGGD2Uh8tcZOANb3LwtKyNEZsfvJuJ+nud+jkZAWVdQ14H3jy7y6KS9nkFiM1I0lHJqKGtWEk1aDH4phcnzRKCw1Aj8GbkPEZoYf0unB82eEFWMqR2lcYiF+yPAKYHX3qPgyragNrx7ew5ilhP/zBYmXTAksyL69hNhipGbkfMR/NbCzTI+0yLyKXkabhoPeb8NqY/Z0P2rtnsXn5Suy9nPPbHFKCZ+BV+RC81OuzMzzD+5AWx30aQC2H71w/8+Uic1rKhpGaEb32DD6p7yBHao0Go/c/e96YRVrEMnh0nm3ik00Sri1688F8dPyhJ+ejuouY3kQ+hFbZo+Ochys35n8pm6KGkZoVHYID3eGgskCJlz7G6Rze3qhPDUHgu10QeOJpB7r5EY/VHq7ZzkdTTvvgZY0lnKoPxZ57Dw6fTbOUTdHCSM2MPukwJr5WAipLF3gsybJy/1NI8acw/7328Fp3LQ8nmp5Nn/o7hlaxgcqqKj7el/nMrWGOu6izK6xt6+LjX+4a95rnUjaM1AylXl4Jj1qOsHZ4CaNWn8/mwe1kXNn1Gd5t3gG+28ILZO6Xcm46XpHno+oXyqP5kK14cNXUIB4HP3VHKftaGLr6SobDYPNcyoaRmintrUMIGPA6ymjsUb1ZH4yfHohv1m3G5h9W4svpI/BOi8Z4a9gCHL5RUMOUPB9d2D59Ptpo7HbsnP4ueoycg6ClgRjbtT7qNh2MoKN3sjm5ZQ5L2TzGSM1cwvVj2Pj1LEwaPRQD3x8Mr4k++GLlHlyOK+jLHfFY1cswHy2DkVsM81Edbocewo5tu3D04i05w+wpeymbJzFSei70qXsxpLIN1MXexvexuTvxo9SlbLLDSOm5eHiL4gv/83/K9dFnUeZSNs/CSOk5kHDlq3bG+eiBXF2vNVDaUjb/hZFSIZJwJ/hnLF/oi3dq20FlYYVanbyxYOkK7ArJ+ibYZ1PMUjY5wEipEOlwdUcgpnj7YPosf3zm/ylm+k7DlI+nYtmh7M7kEiMlEhwjJRIcIyUSHCMlEhwjJRIcIyUSHCMlEhwjJRIcIyUSHCMlEhwjJRIcIyUSHCMlEhwjJRIcIyUSHCMlEhwjJRIcIyUSHCMlEhwjJRIa8H+L45GPJB+D8wAAAABJRU5ErkJggg=="},4505:function(e,t,n){t.Z=n.p+"assets/images/weight-calc-2-ae3da42d2af245234b91c61d3cf5b557.png"}}]);