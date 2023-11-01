"use strict";(self.webpackChunkzenn_docs_for_developers=self.webpackChunkzenn_docs_for_developers||[]).push([[971],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||s[f]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1269:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:1},a="Introduction",c={unversionedId:"index",id:"index",title:"Introduction",description:"\u3053\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306f\u3001Zenn \u304c OSS \u3068\u3057\u3066\u958b\u767a\u3057\u3066\u3044\u308b\u30c4\u30fc\u30eb\u3084\u30e9\u30a4\u30d6\u30e9\u30ea\u306b\u95a2\u3059\u308b\u958b\u767a\u30ac\u30a4\u30c9\u3067\u3059\u3002",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/zenn-docs-for-developers/",draft:!1,editUrl:"https://github.com/zenn-dev/zenn-docs-for-developers/tree/main/docs/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"mySidebar",next:{title:"Contribution",permalink:"/zenn-docs-for-developers/contribution"}},l={},p=[{value:"\u306f\u3058\u3081\u306b",id:"\u306f\u3058\u3081\u306b",level:2},{value:"\u6b21\u306e\u30b9\u30c6\u30c3\u30d7",id:"\u6b21\u306e\u30b9\u30c6\u30c3\u30d7",level:2}],u={toc:p};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"\u3053\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306f\u3001Zenn \u304c OSS \u3068\u3057\u3066\u958b\u767a\u3057\u3066\u3044\u308b\u30c4\u30fc\u30eb\u3084\u30e9\u30a4\u30d6\u30e9\u30ea\u306b\u95a2\u3059\u308b\u958b\u767a\u30ac\u30a4\u30c9\u3067\u3059\u3002"),(0,o.kt)("h2",{id:"\u306f\u3058\u3081\u306b"},"\u306f\u3058\u3081\u306b"),(0,o.kt)("p",null,"Zenn \u3067\u306f\u3001\u57f7\u7b46\u4f53\u9a13\u3092\u5411\u4e0a\u3055\u305b\u308b\u305f\u3081\u3001\u69d8\u3005\u306a\u30c4\u30fc\u30eb\u3084\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002\u3053\u308c\u3089\u306f\u4e3b\u306b Zenn \u306e\u958b\u767a\u30c1\u30fc\u30e0\u306b\u3088\u308a\u958b\u767a\u30fb\u30e1\u30f3\u30c6\u30ca\u30f3\u30b9\u3055\u308c\u3066\u3044\u307e\u3059\u304c\u3001\u30ea\u30bd\u30fc\u30b9\u306e\u554f\u984c\u306b\u3088\u308a\u5bfe\u5fdc\u3067\u304d\u3066\u3044\u306a\u3044\u3053\u3068\u304c\u305f\u304f\u3055\u3093\u3042\u308a\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u3082\u3057\u3042\u306a\u305f\u304c\u6a5f\u80fd\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u6301\u3063\u3066\u3044\u308b\u306a\u3089\uff08\u3082\u3057\u304f\u306f\u30d0\u30b0\u3092\u767a\u898b\u3057\u305f\u306a\u3089\uff09\u3001\u3053\u306e\u958b\u767a\u30ac\u30a4\u30c9\u3092\u8aad\u3093\u3067\u305d\u308c\u3092\u81ea\u5206\u3067\u89e3\u6c7a\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002\u3042\u308b\u3044\u306f\u3001\u60c5\u5831\u3092\u63d0\u4f9b\u306b\u3088\u3063\u3066\u554f\u984c\u89e3\u6c7a\u306e\u624b\u52a9\u3051\u3092\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002Zenn \u3067\u306f\u30b3\u30f3\u30c8\u30ea\u30d3\u30e5\u30fc\u30c8\u3092\u6b53\u8fce\u3057\u307e\u3059\u3002"),(0,o.kt)("h2",{id:"\u6b21\u306e\u30b9\u30c6\u30c3\u30d7"},"\u6b21\u306e\u30b9\u30c6\u30c3\u30d7"),(0,o.kt)("p",null,"\u307e\u305a\u306f\u3058\u3081\u306b ",(0,o.kt)("a",{parentName:"p",href:"/zenn-docs-for-developers/contribution"},"Contribution")," \u3092\u8aad\u3093\u3067\u304f\u3060\u3055\u3044\u3002\u30b3\u30f3\u30c8\u30ea\u30d3\u30e5\u30fc\u30c8\u3059\u308b\u65b9\u6cd5\u3092\u77e5\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u958b\u767a\u306b\u8208\u5473\u304c\u3042\u308b\u5834\u5408\u306f ",(0,o.kt)("a",{parentName:"p",href:"/category/basics"},"Basic")," \u3092\u8aad\u3093\u3067\u304f\u3060\u3055\u3044\u3002\u958b\u767a\u306b\u5fc5\u8981\u306a\u524d\u63d0\u77e5\u8b58\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002\u305d\u306e\u5f8c\u3001\u95a2\u5fc3\u306e\u3042\u308b\u30c4\u30fc\u30eb\u3084\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u500b\u5225\u306e\u30ac\u30a4\u30c9\u3092\u8aad\u3093\u3067\u304f\u3060\u3055\u3044\u3002\u305d\u308c\u305e\u308c\u306e\u958b\u767a\u30dd\u30ea\u30b7\u30fc\u3084\u8a73\u7d30\u60c5\u5831\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"))}s.isMDXComponent=!0}}]);