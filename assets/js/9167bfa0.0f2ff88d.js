"use strict";(self.webpackChunkzenn_docs_for_developers=self.webpackChunkzenn_docs_for_developers||[]).push([[565],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),d=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(t),m=i,f=u["".concat(p,".").concat(m)]||u[m]||s[m]||a;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9740:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=t(7462),i=(t(7294),t(3905));const a={},o="zenn-editor",l={unversionedId:"guides/zenn-editor/index",id:"guides/zenn-editor/index",title:"zenn-editor",description:"zenn-editor \u30ea\u30dd\u30b8\u30c8\u30ea\u3067\u7ba1\u7406\u3055\u308c\u3066\u3044\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u958b\u767a\u30ac\u30a4\u30c9\u3067\u3059\u3002",source:"@site/docs/guides/zenn-editor/index.md",sourceDirName:"guides/zenn-editor",slug:"/guides/zenn-editor/",permalink:"/zenn-docs-for-developers/guides/zenn-editor/",draft:!1,editUrl:"https://github.com/zenn-dev/zenn-docs-for-developers/tree/main/docs/docs/guides/zenn-editor/index.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Guides",permalink:"/zenn-docs-for-developers/category/guides"},next:{title:"zenn-cli",permalink:"/zenn-docs-for-developers/guides/zenn-editor/zenn-cli"}},p={},d=[{value:"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",id:"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",level:2},{value:"\u30d6\u30e9\u30f3\u30c1",id:"\u30d6\u30e9\u30f3\u30c1",level:2}],c={toc:d};function s(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"zenn-editor"},"zenn-editor"),(0,i.kt)("p",null,"zenn-editor \u30ea\u30dd\u30b8\u30c8\u30ea\u3067\u7ba1\u7406\u3055\u308c\u3066\u3044\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u958b\u767a\u30ac\u30a4\u30c9\u3067\u3059\u3002"),(0,i.kt)("h2",{id:"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"},"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"),(0,i.kt)("p",null,"zenn-editor \u30ea\u30dd\u30b8\u30c8\u30ea\u306f ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/lerna/lerna"},"lerna")," \u306b\u3088\u308b\u30e2\u30ce\u30ec\u30dd\u69cb\u6210\u3067\u3059\u3002"),(0,i.kt)("p",null,"\u305d\u308c\u305e\u308c\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306f ",(0,i.kt)("inlineCode",{parentName:"p"},"./packages")," \u306b\u914d\u7f6e\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u30af\u30ed\u30fc\u30f3\u3057\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30eb\u30fc\u30c8\u3067 ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn install")," \u3092\u5b9f\u884c\u3059\u308b\u3053\u3068\u3067\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"./packages")," \u306b\u3042\u308b\u5168\u3066\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f9d\u5b58\u30e2\u30b8\u30e5\u30fc\u30eb\u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ git clone https://github.com/zenn-dev/zenn-editor.git\n$ yarn install\n")),(0,i.kt)("p",null,"\u540c\u69d8\u306b\u3001\u30c6\u30b9\u30c8\u3084\u30d3\u30eb\u30c9\u3082\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30eb\u30fc\u30c8\u3067 ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn test"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"yarn build")," \u3092\u5b9f\u884c\u3059\u308b\u3053\u3068\u3067\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"./packages")," \u306b\u3042\u308b\u5168\u3066\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u5bfe\u3057\u3066\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306f\u4f9d\u5b58\u3059\u308b\u30e2\u30b8\u30e5\u30fc\u30eb\u306b\u5bfe\u3059\u308b\u30c6\u30b9\u30c8\u3084\u52d5\u4f5c\u78ba\u8a8d\u3092\u3057\u305f\u3044\u6642\u306b\u4fbf\u5229\u3067\u3059\u3002"),(0,i.kt)("h2",{id:"\u30d6\u30e9\u30f3\u30c1"},"\u30d6\u30e9\u30f3\u30c1"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"canary"),": \u958b\u767a\u7528\u306e\u30d6\u30e9\u30f3\u30c1\u3067\u3059\u3002\u901a\u5e38\u306f",(0,i.kt)("inlineCode",{parentName:"li"},"canary"),"\u30d6\u30e9\u30f3\u30c1\u304b\u3089\u65b0\u3057\u3044\u30d6\u30e9\u30f3\u30c1\u3092\u5207\u3063\u3066\u3001PR\u3067",(0,i.kt)("inlineCode",{parentName:"li"},"canary"),"\u30d6\u30e9\u30f3\u30c1\u306b\u30de\u30fc\u30b8\u3057\u307e\u3059\u3002\u30de\u30fc\u30b8\u3055\u308c\u308b\u3068\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"X.Y.Z-alpha.0"),"\u306e\u3088\u3046\u306a\u30d0\u30fc\u30b8\u30e7\u30f3\u304c\u81ea\u52d5\u7684\u306b\u30ea\u30ea\u30fc\u30b9\u3055\u308c\u307e\u3059\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"main"),": \u30ea\u30ea\u30fc\u30b9\u7528\u306e\u30d6\u30e9\u30f3\u30c1\u3067\u3059\u3002\u901a\u5e38\u306f",(0,i.kt)("inlineCode",{parentName:"li"},"canary"),"\u30d6\u30e9\u30f3\u30c1\u304b\u3089",(0,i.kt)("inlineCode",{parentName:"li"},"main"),"\u30d6\u30e9\u30f3\u30c1\u306b\u30de\u30fc\u30b8\u3057\u307e\u3059\u3002\u30de\u30fc\u30b8\u3055\u308c\u308b\u3068\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"X.Y.Z"),"\u306e\u3088\u3046\u306a\u30d0\u30fc\u30b8\u30e7\u30f3\u304c\u81ea\u52d5\u7684\u306b\u30ea\u30ea\u30fc\u30b9\u3055\u308c\u307e\u3059\u3002")))}s.isMDXComponent=!0}}]);