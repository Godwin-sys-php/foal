(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{171:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),i=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=i(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=i(n),m=a,f=u["".concat(o,".").concat(m)]||u[m]||b[m]||c;return n?r.a.createElement(f,l(l({ref:t},p),{},{components:n})):r.a.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<c;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},172:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},173:function(e,t,n){"use strict";var a=n(0),r=n(174);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},174:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},175:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(173),o=n(172),l=n(53),s=n.n(l);const p=37,i=39;t.a=function(e){const{lazy:t,block:n,children:l,defaultValue:u,values:b,groupId:m,className:f}=e,{tabGroupChoices:j,setTabGroupChoices:d}=Object(c.a)(),[g,O]=Object(a.useState)(u);if(null!=m){const e=j[m];null!=e&&e!==g&&b.some((t=>t.value===e))&&O(e)}const v=e=>{O(e),null!=m&&d(m,e)},y=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},f)},b.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===e,className:Object(o.a)("tabs__item",s.a.tabItem,{"tabs__item--active":g===e}),key:e,ref:e=>y.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case i:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case p:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(y,e.target,e)},onFocus:()=>v(e),onClick:()=>{v(e)}},t)))),t?Object(a.cloneElement)(l.filter((e=>e.props.value===g))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},l.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==g})))))}},176:function(e,t,n){"use strict";var a=n(3),r=n(0),c=n.n(r);t.a=function({children:e,hidden:t,className:n}){return c.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:t,className:n}),e)}},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),c=(n(0),n(171)),o=n(175),l=n(176),s={title:"Template Engine"},p={unversionedId:"upgrade-to-v2/template-engine",id:"upgrade-to-v2/template-engine",isDocsHomePage:!1,title:"Template Engine",description:"Starting from version 2, only Express-compatible template engines are supported (EJS, pug, Jade, Twig, etc).",source:"@site/docs/upgrade-to-v2/template-engine.md",slug:"/upgrade-to-v2/template-engine",permalink:"/foal/docs/upgrade-to-v2/template-engine",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/upgrade-to-v2/template-engine.md",version:"current"},i=[{value:"The <code>@foal/ejs</code> package",id:"the-foalejs-package",children:[]}],u={rightToc:i};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Starting from version 2, only Express-compatible template engines are supported (",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/ejs"}),"EJS"),", ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/pug"}),"pug"),", ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/jade"}),"Jade"),", ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/twig"}),"Twig"),", etc)."),Object(c.b)("h2",{id:"the-foalejs-package"},"The ",Object(c.b)("inlineCode",{parentName:"h2"},"@foal/ejs")," package"),Object(c.b)("p",null,"Therefore the package ",Object(c.b)("inlineCode",{parentName:"p"},"@foal/ejs")," has been removed. If you used it, update your configuration file as follows:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"npm uninstall @foal/ejs\nnpm install ejs\n")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Version 1")),Object(c.b)(o.a,{groupId:"config",defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},Object(c.b)(l.a,{value:"yaml",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"settings:\n  templateEngine: '@foal/ejs'\n"))),Object(c.b)(l.a,{value:"json",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "settings": {\n    "templateEngine": "@foal/ejs"\n  }\n}\n'))),Object(c.b)(l.a,{value:"js",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'module.exports = {\n  settings: {\n    templateEngine: "@foal/ejs"\n  }\n}\n')))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Version 2")),Object(c.b)(o.a,{groupId:"config",defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},Object(c.b)(l.a,{value:"yaml",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"settings:\n  templateEngine: ejs\n"))),Object(c.b)(l.a,{value:"json",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "settings": {\n    "templateEngine": "ejs"\n  }\n}\n'))),Object(c.b)(l.a,{value:"js",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'module.exports = {\n  settings: {\n    templateEngine: "ejs"\n  }\n}\n')))))}b.isMDXComponent=!0}}]);