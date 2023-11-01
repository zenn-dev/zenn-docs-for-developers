"use strict";(self.webpackChunkzenn_docs_for_developers=self.webpackChunkzenn_docs_for_developers||[]).push([[565],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=d(t),m=o,k=s["".concat(l,".").concat(m)]||s[m]||u[m]||a;return t?r.createElement(k,p(p({ref:n},c),{},{components:t})):r.createElement(k,p({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=s;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var d=2;d<a;d++)p[d]=t[d];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},9740:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=t(7462),o=(t(7294),t(3905));const a={},p="zenn-editor",i={unversionedId:"guides/zenn-editor/index",id:"guides/zenn-editor/index",title:"zenn-editor",description:"zenn-editor \u30ea\u30dd\u30b8\u30c8\u30ea\u3067\u7ba1\u7406\u3055\u308c\u3066\u3044\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u958b\u767a\u30ac\u30a4\u30c9\u3067\u3059\u3002",source:"@site/docs/guides/zenn-editor/index.md",sourceDirName:"guides/zenn-editor",slug:"/guides/zenn-editor/",permalink:"/zenn-docs-for-developers/guides/zenn-editor/",draft:!1,editUrl:"https://github.com/zenn-dev/zenn-docs-for-developers/tree/main/docs/guides/zenn-editor/index.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Guides",permalink:"/zenn-docs-for-developers/category/guides"},next:{title:"zenn-cli",permalink:"/zenn-docs-for-developers/guides/zenn-editor/zenn-cli"}},l={},d=[{value:"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",id:"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",level:2},{value:"\u30d6\u30e9\u30f3\u30c1",id:"\u30d6\u30e9\u30f3\u30c1",level:2},{value:"Monorepo \u3067\u4f7f\u7528\u3057\u3066\u3044\u308b\u30e9\u30a4\u30d6\u30e9\u30ea",id:"monorepo-\u3067\u4f7f\u7528\u3057\u3066\u3044\u308b\u30e9\u30a4\u30d6\u30e9\u30ea",level:2},{value:"pnpm",id:"pnpm",level:3},{value:"Turborepo",id:"turborepo",level:3},{value:"lerna-lite",id:"lerna-lite",level:3}],c={toc:d};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"zenn-editor"},"zenn-editor"),(0,o.kt)("p",null,"zenn-editor \u30ea\u30dd\u30b8\u30c8\u30ea\u3067\u7ba1\u7406\u3055\u308c\u3066\u3044\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u958b\u767a\u30ac\u30a4\u30c9\u3067\u3059\u3002"),(0,o.kt)("h2",{id:"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"},"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"),(0,o.kt)("p",null,"zenn-editor \u30ea\u30dd\u30b8\u30c8\u30ea\u306f ",(0,o.kt)("a",{parentName:"p",href:"https://pnpm.io/ja/"},"pnpm")," + ",(0,o.kt)("a",{parentName:"p",href:"https://turbo.build/repo"},"Turborepo")," + ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lerna-lite/lerna-lite"},"lerna-lite")," \u306b\u3088\u308b\u30e2\u30ce\u30ec\u30dd\u69cb\u6210\u3067\u3059\u3002"),(0,o.kt)("p",null,"\u305d\u308c\u305e\u308c\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306f ",(0,o.kt)("inlineCode",{parentName:"p"},"./packages")," \u306b\u914d\u7f6e\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u30af\u30ed\u30fc\u30f3\u3057\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30eb\u30fc\u30c8\u3067 ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install")," \u3092\u5b9f\u884c\u3059\u308b\u3053\u3068\u3067\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"./packages")," \u306b\u3042\u308b\u5168\u3066\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f9d\u5b58\u30e2\u30b8\u30e5\u30fc\u30eb\u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ git clone https://github.com/zenn-dev/zenn-editor.git\n\n# pnpm\u3092corepack\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u5834\u5408\u306f\u4ee5\u4e0b\u3092\u5b9f\u884c\n$ corepack enable pnpm\n\n$ pnpm install\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"pnpm \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u306b\u306f corepack \u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3092\u63a8\u5968\u3057\u307e\u3059\u3002",(0,o.kt)("br",null),"\ncorepack \u3092\u4f7f\u7528\u3057\u306a\u3044\u5834\u5408\u306f\u3001corepack \u306e",(0,o.kt)("a",{parentName:"p",href:"https://pnpm.io/ja/installation"},"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5"),"\u3092\u53c2\u7167\u3057\u3066\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,o.kt)("p",null,"\u540c\u69d8\u306b\u3001\u30c6\u30b9\u30c8\u3084\u30d3\u30eb\u30c9\u3082\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30eb\u30fc\u30c8\u3067 ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm test"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm build")," \u3092\u5b9f\u884c\u3059\u308b\u3053\u3068\u3067\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"./packages")," \u306b\u3042\u308b\u5168\u3066\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u5bfe\u3057\u3066\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306f\u4f9d\u5b58\u3059\u308b\u30e2\u30b8\u30e5\u30fc\u30eb\u306b\u5bfe\u3059\u308b\u30c6\u30b9\u30c8\u3084\u52d5\u4f5c\u78ba\u8a8d\u3092\u3057\u305f\u3044\u6642\u306b\u4fbf\u5229\u3067\u3059\u3002"),(0,o.kt)("h2",{id:"\u30d6\u30e9\u30f3\u30c1"},"\u30d6\u30e9\u30f3\u30c1"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"canary"),": \u958b\u767a\u7528\u306e\u30d6\u30e9\u30f3\u30c1\u3067\u3059\u3002\u901a\u5e38\u306f",(0,o.kt)("inlineCode",{parentName:"li"},"canary"),"\u30d6\u30e9\u30f3\u30c1\u304b\u3089\u65b0\u3057\u3044\u30d6\u30e9\u30f3\u30c1\u3092\u5207\u3063\u3066\u3001PR\u3067",(0,o.kt)("inlineCode",{parentName:"li"},"canary"),"\u30d6\u30e9\u30f3\u30c1\u306b\u30de\u30fc\u30b8\u3057\u307e\u3059\u3002\u30de\u30fc\u30b8\u3055\u308c\u308b\u3068\u3001",(0,o.kt)("inlineCode",{parentName:"li"},"X.Y.Z-alpha.0"),"\u306e\u3088\u3046\u306a\u30d0\u30fc\u30b8\u30e7\u30f3\u304c\u81ea\u52d5\u7684\u306b\u30ea\u30ea\u30fc\u30b9\u3055\u308c\u307e\u3059\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"main"),": \u30ea\u30ea\u30fc\u30b9\u7528\u306e\u30d6\u30e9\u30f3\u30c1\u3067\u3059\u3002\u901a\u5e38\u306f",(0,o.kt)("inlineCode",{parentName:"li"},"canary"),"\u30d6\u30e9\u30f3\u30c1\u304b\u3089",(0,o.kt)("inlineCode",{parentName:"li"},"main"),"\u30d6\u30e9\u30f3\u30c1\u306b\u30de\u30fc\u30b8\u3057\u307e\u3059\u3002\u30de\u30fc\u30b8\u3055\u308c\u308b\u3068\u3001",(0,o.kt)("inlineCode",{parentName:"li"},"X.Y.Z"),"\u306e\u3088\u3046\u306a\u30d0\u30fc\u30b8\u30e7\u30f3\u304c\u81ea\u52d5\u7684\u306b\u30ea\u30ea\u30fc\u30b9\u3055\u308c\u307e\u3059\u3002")),(0,o.kt)("h2",{id:"monorepo-\u3067\u4f7f\u7528\u3057\u3066\u3044\u308b\u30e9\u30a4\u30d6\u30e9\u30ea"},"Monorepo \u3067\u4f7f\u7528\u3057\u3066\u3044\u308b\u30e9\u30a4\u30d6\u30e9\u30ea"),(0,o.kt)("p",null,"zenn-editor \u3067\u306f\u4ee5\u4e0b\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u4f7f\u7528\u3057\u3066\u3001Monorepo \u74b0\u5883\u3092\u69cb\u7bc9\u3057\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)("h3",{id:"pnpm"},"pnpm"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u516c\u5f0f\u30b5\u30a4\u30c8:")," ",(0,o.kt)("a",{parentName:"p",href:"https://pnpm.io/ja/"},"https://pnpm.io/ja/")),(0,o.kt)("p",null,"npm\u3001yarn \u306a\u3069\u3068\u540c\u3058\u30d1\u30c3\u30b1\u30fc\u30b8\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u3067\u3059\u3002\n\u30b7\u30f3\u30dc\u30ea\u30c3\u30af\u30ea\u30f3\u30af\u3092\u5229\u7528\u3057\u305f\u72ec\u81ea\u69cb\u6210\u3067 node_modules \u3092\u7ba1\u7406\u3059\u308b\u3053\u3068\u306b\u3088\u308a\u3001\u9ad8\u901f\u3067\u5b89\u5168\u306a\u30d1\u30c3\u30b1\u30fc\u30b8\u7ba1\u7406\u3092\u53ef\u80fd\u3068\u3057\u307e\u3059\u3002\nzenn-editor \u3067\u306f\u3001workspace \u6a5f\u80fd\u306b\u3088\u3063\u3066 Monorepo \u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u7ba1\u7406\u3057\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)("h3",{id:"turborepo"},"Turborepo"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u516c\u5f0f\u30b5\u30a4\u30c8:")," ",(0,o.kt)("a",{parentName:"p",href:"https://turbo.build/repo"},"https://turbo.build/repo")),(0,o.kt)("p",null,"\u7ba1\u7406\u3057\u3066\u3044\u308b workspace \u3092\u4f9d\u5b58\u95a2\u4fc2\u3092\u8003\u616e\u3057\u3066\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3059\u308b\u30c4\u30fc\u30eb\u3067\u3059\u3002\nzenn-editor \u3067\u306f\u3001\u30d3\u30eb\u30c9\u3084\u30c6\u30b9\u30c8\u306a\u3069\u3092\u5b9f\u884c\u3059\u308b\u6642\u306b\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)("h3",{id:"lerna-lite"},"lerna-lite"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u516c\u5f0f\u30b5\u30a4\u30c8:")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lerna-lite/lerna-lite"},"https://github.com/lerna-lite/lerna-lite")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://lerna.js.org/"},"lerna")," \u304b\u3089 ",(0,o.kt)("inlineCode",{parentName:"p"},"version")," \u3068 ",(0,o.kt)("inlineCode",{parentName:"p"},"publish")," \u6a5f\u80fd\u3060\u3051\u3092\u629c\u304d\u51fa\u3057\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\u7ba1\u7406\u30c4\u30fc\u30eb\u3067\u3059\u3002\n\u57fa\u672c\u7684\u306a\u4f7f\u3044\u65b9\u306f lerna \u3068\u4e00\u7dd2\u3067\u3059\u304c\u3001\u591a\u304f\u306e Monorepo \u6a5f\u80fd\u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u542b\u307e\u308c\u3066\u3044\u306a\u3044\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002\nzenn-editor \u3067\u306f\u3001workspace \u3092\u30ea\u30ea\u30fc\u30b9\u3059\u308b\u969b\u306b\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u3002"))}u.isMDXComponent=!0}}]);