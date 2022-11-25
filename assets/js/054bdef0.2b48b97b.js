"use strict";(self.webpackChunkzenn_docs_for_developers=self.webpackChunkzenn_docs_for_developers||[]).push([[434],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>v});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=r.createContext({}),s=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(t),v=i,u=m["".concat(d,".").concat(v)]||m[v]||p[v]||o;return t?r.createElement(u,a(a({ref:n},c),{},{components:t})):r.createElement(u,a({ref:n},c))}));function v(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8189:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(7462),i=(t(7294),t(3905));const o={sidebar_position:1},a="Overview",l={unversionedId:"basics/overview",id:"basics/overview",title:"Overview",description:"\u3053\u306e\u30da\u30fc\u30b8\u3067\u306fZenn\u306e\u5168\u4f53\u50cf\u3092\u77e5\u3063\u3066\u3082\u3089\u3046\u305f\u3081\u3001Zenn\u306e\u5404\u30b5\u30fc\u30d3\u30b9\u3001\u30c4\u30fc\u30eb\u3001\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u6982\u8981\u3068\u305d\u308c\u3089\u306e\u4f9d\u5b58\u95a2\u4fc2\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002",source:"@site/docs/basics/overview.md",sourceDirName:"basics",slug:"/basics/overview",permalink:"/zenn-docs-for-developers/basics/overview",draft:!1,editUrl:"https://github.com/zenn-dev/zenn-docs-for-developers/tree/main/docs/docs/basics/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"mySidebar",previous:{title:"Basics",permalink:"/zenn-docs-for-developers/category/basics"},next:{title:"Repositories",permalink:"/zenn-docs-for-developers/basics/repositories"}},d={},s=[{value:"\u4f9d\u5b58\u95a2\u4fc2\u30b0\u30e9\u30d5",id:"\u4f9d\u5b58\u95a2\u4fc2\u30b0\u30e9\u30d5",level:2},{value:"\u30b5\u30fc\u30d3\u30b9",id:"\u30b5\u30fc\u30d3\u30b9",level:2},{value:"zenn.dev",id:"zenndev",level:3},{value:"backend-api",id:"backend-api",level:3},{value:"embed.zenn.studio",id:"embedzennstudio",level:3},{value:"api-markdown-html",id:"api-markdown-html",level:3},{value:"\u30c4\u30fc\u30eb",id:"\u30c4\u30fc\u30eb",level:2},{value:"zenn-cli",id:"zenn-cli",level:3},{value:"zenn-vscode-extension",id:"zenn-vscode-extension",level:3},{value:"\u30d1\u30c3\u30b1\u30fc\u30b8",id:"\u30d1\u30c3\u30b1\u30fc\u30b8",level:2},{value:"zenn-content-css",id:"zenn-content-css",level:3},{value:"zenn-embed-elements",id:"zenn-embed-elements",level:3},{value:"zenn-markdown-html",id:"zenn-markdown-html",level:3},{value:"zenn-validator",id:"zenn-validator",level:3}],c={toc:s};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("p",null,"\u3053\u306e\u30da\u30fc\u30b8\u3067\u306fZenn\u306e\u5168\u4f53\u50cf\u3092\u77e5\u3063\u3066\u3082\u3089\u3046\u305f\u3081\u3001Zenn\u306e\u5404\u30b5\u30fc\u30d3\u30b9\u3001\u30c4\u30fc\u30eb\u3001\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u6982\u8981\u3068\u305d\u308c\u3089\u306e\u4f9d\u5b58\u95a2\u4fc2\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,i.kt)("h2",{id:"\u4f9d\u5b58\u95a2\u4fc2\u30b0\u30e9\u30d5"},"\u4f9d\u5b58\u95a2\u4fc2\u30b0\u30e9\u30d5"),(0,i.kt)("p",null,"Zenn\u306e\u5404\u30b5\u30fc\u30d3\u30b9\u3001\u30c4\u30fc\u30eb\u3001\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u4f9d\u5b58\u95a2\u4fc2\u30b0\u30e9\u30d5\u3092\u4ee5\u4e0b\u306b\u793a\u3057\u307e\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5b9f\u7dda: npm\u30d1\u30c3\u30b1\u30fc\u30b8\u306b\u4f9d\u5b58"),(0,i.kt)("li",{parentName:"ul"},"\u7834\u7dda: API\u3092\u547c\u3073\u51fa\u3059\u306a\u3069\u9593\u63a5\u7684\u306b\u4f9d\u5b58")),(0,i.kt)("mermaid",{value:"flowchart TD\n    classDef Service stroke-width:4px;\n\n    zenn.dev:::Service\n    zenn-cli:::Service\n    zenn-vscode-extension:::Service\n    embed.zenn.studio:::Service\n    backend-api:::Service\n    api-markdown-html:::Service\n\n    zenn.dev--\x3ezenn-embed-elements\n    zenn.dev--\x3ezenn-content-css\n    zenn.dev-.http.->api-markdown-html\n    zenn.dev-.http.->embed.zenn.studio\n    zenn.dev-.http.->backend-api\n\n    zenn-cli--\x3ezenn-markdown-html\n    zenn-cli--\x3ezenn-content-css\n    zenn-cli--\x3ezenn-validator\n    zenn-cli--\x3ezenn-embed-elements\n    zenn-cli-.http.->embed.zenn.studio\n\n    zenn-vscode-extension--\x3ezenn-markdown-html\n    zenn-vscode-extension--\x3ezenn-content-css\n    zenn-vscode-extension--\x3ezenn-validator\n    zenn-vscode-extension--\x3ezenn-embed-elements\n    zenn-vscode-extension-.http.->embed.zenn.studio\n\n    backend-api-.http.->api-markdown-html\n\n    api-markdown-html--\x3ezenn-markdown-html"}),(0,i.kt)("h2",{id:"\u30b5\u30fc\u30d3\u30b9"},"\u30b5\u30fc\u30d3\u30b9"),(0,i.kt)("h3",{id:"zenndev"},"zenn.dev"),(0,i.kt)("p",null,"Zenn\u306e\u30e1\u30a4\u30f3\u30b5\u30fc\u30d3\u30b9\u3067\u3059\u3002Next.js\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u3059\u3002"),(0,i.kt)("p",null,"\u30ea\u30dd\u30b8\u30c8\u30ea\u306f\u975e\u516c\u958b\u3002"),(0,i.kt)("h3",{id:"backend-api"},"backend-api"),(0,i.kt)("p",null,"zenn.dev\u306e\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u30b5\u30fc\u30d0\u30fc\u3067\u3059\u3002Ruby on Rails\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u3059\u3002"),(0,i.kt)("p",null,"\u30ea\u30dd\u30b8\u30c8\u30ea\u306f\u975e\u516c\u958b\u3002"),(0,i.kt)("h3",{id:"embedzennstudio"},"embed.zenn.studio"),(0,i.kt)("p",null,"markdown\u306e\u57cb\u3081\u8fbc\u307f\u8981\u7d20\u3092\u8868\u793a\u3059\u308b\u305f\u3081\u306eiframe\u3092\u8fd4\u3059\u30b5\u30fc\u30d0\u30fc\u3067\u3059\u3002Next.js\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u3059\u3002"),(0,i.kt)("p",null,"\u30ea\u30dd\u30b8\u30c8\u30ea\u306f\u975e\u516c\u958b\u3002"),(0,i.kt)("h3",{id:"api-markdown-html"},"api-markdown-html"),(0,i.kt)("p",null,"markdown\u3092Zenn\u3067\u8868\u793a\u53ef\u80fd\u306aHTML\u306b\u5909\u63db\u3059\u308bAPI\u3067\u3059\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"zenn-markdown-html")," \u3092\u30e9\u30c3\u30d7\u3057\u305fCloud Functions(Node.js)\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u3059\u3002"),(0,i.kt)("p",null,"\u30ea\u30dd\u30b8\u30c8\u30ea\u306f\u975e\u516c\u958b\u3002"),(0,i.kt)("h2",{id:"\u30c4\u30fc\u30eb"},"\u30c4\u30fc\u30eb"),(0,i.kt)("h3",{id:"zenn-cli"},"zenn-cli"),(0,i.kt)("p",null,"markdown\u3092\u30ed\u30fc\u30ab\u30eb\u3067\u4f5c\u6210\u30fb\u30d7\u30ec\u30d3\u30e5\u30fc\u3059\u308b\u305f\u3081\u306eCLI\u3068Web\u306e\u30c4\u30fc\u30eb\u3067\u3059\u3002JavaScript(TypeScript)\u3068Node.js\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u3059\u3002"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/zenn-dev/zenn-editor/tree/main/packages/zenn-cli"},"GitHub\u30ea\u30dd\u30b8\u30c8\u30ea")),(0,i.kt)("h3",{id:"zenn-vscode-extension"},"zenn-vscode-extension"),(0,i.kt)("p",null,"markdown\u3092VSCode for the Web(github.dev\u306a\u3069)\u3067\u4f5c\u6210\u30fb\u30d7\u30ec\u30d3\u30e5\u30fc\u3059\u308b\u305f\u3081\u306eVSCode Web\u62e1\u5f35\u6a5f\u80fd\u3067\u3059\u3002JavaScript(TypeScript)\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u3059\u3002"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/zenn-dev/zenn-vscode-extension"},"GitHub\u30ea\u30dd\u30b8\u30c8\u30ea")),(0,i.kt)("h2",{id:"\u30d1\u30c3\u30b1\u30fc\u30b8"},"\u30d1\u30c3\u30b1\u30fc\u30b8"),(0,i.kt)("h3",{id:"zenn-content-css"},"zenn-content-css"),(0,i.kt)("p",null,"Zenn\u306eHTML\u306b\u9069\u7528\u3059\u308bCSS\u3092\u63d0\u4f9b\u3059\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u3067\u3059\u3002"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/zenn-dev/zenn-editor/tree/main/packages/zenn-content-css"},"GitHub\u30ea\u30dd\u30b8\u30c8\u30ea")),(0,i.kt)("h3",{id:"zenn-embed-elements"},"zenn-embed-elements"),(0,i.kt)("p",null,"markdown\u306e\u57cb\u3081\u8fbc\u307f\u8981\u7d20\u3092\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u5074\u3067HTML\u306b\u5909\u63db\u3059\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u3067\u3059\u3002"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/zenn-dev/zenn-editor/tree/main/packages/zenn-embed-elements"},"GitHub\u30ea\u30dd\u30b8\u30c8\u30ea")),(0,i.kt)("h3",{id:"zenn-markdown-html"},"zenn-markdown-html"),(0,i.kt)("p",null,"markdown\u3092Zenn\u3067\u8868\u793a\u53ef\u80fd\u306aHTML\u306b\u5909\u63db\u3059\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u3067\u3059\u3002"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/zenn-dev/zenn-editor/tree/main/packages/zenn-markdown-html"},"GitHub\u30ea\u30dd\u30b8\u30c8\u30ea")),(0,i.kt)("h3",{id:"zenn-validator"},"zenn-validator"),(0,i.kt)("p",null,"markdown\u306e\u5185\u5bb9\uff08frontmatter\u306a\u3069Zenn\u306e\u4ed5\u69d8\uff09\u3092\u691c\u8a3c\u3059\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u3067\u3059\u3002"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/zenn-dev/zenn-editor/tree/main/packages/zenn-validator"},"GitHub\u30ea\u30dd\u30b8\u30c8\u30ea")))}p.isMDXComponent=!0}}]);