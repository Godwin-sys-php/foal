(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{251:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),s=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,f=p["".concat(o,".").concat(m)]||p[m]||b[m]||c;return n?r.a.createElement(f,l(l({ref:t},u),{},{components:n})):r.a.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<c;u++)o[u]=n[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},252:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},253:function(e,t,n){"use strict";var a=n(0),r=n(254);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},254:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},255:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(253),o=n(252),l=n(56),i=n.n(l),u=37,s=39;t.a=function(e){var t=e.lazy,n=e.block,l=e.defaultValue,p=e.values,b=e.groupId,m=e.className,f=Object(c.a)(),j=f.tabGroupChoices,d=f.setTabGroupChoices,g=Object(a.useState)(l),O=g[0],v=g[1],y=a.Children.toArray(e.children);if(null!=b){var h=j[b];null!=h&&h!==O&&p.some((function(e){return e.value===h}))&&v(h)}var w=function(e){v(e),null!=b&&d(b,e)},N=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(o.a)("tabs__item",i.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(a.cloneElement)(y.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},256:function(e,t,n){"use strict";var a=n(3),r=n(0),c=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return c.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}},84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),c=(n(0),n(251)),o=n(255),l=n(256),i={title:"Template Engine"},u={unversionedId:"upgrade-to-v2/template-engine",id:"upgrade-to-v2/template-engine",isDocsHomePage:!1,title:"Template Engine",description:"Starting from version 2, only Express-compatible template engines are supported (EJS, pug, Jade, Twig, etc).",source:"@site/docs/upgrade-to-v2/template-engine.md",slug:"/upgrade-to-v2/template-engine",permalink:"/docs/upgrade-to-v2/template-engine",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/upgrade-to-v2/template-engine.md",version:"current"},s=[{value:"The <code>@foal/ejs</code> package",id:"the-foalejs-package",children:[]}],p={toc:s};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Starting from version 2, only Express-compatible template engines are supported (",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/ejs"}),"EJS"),", ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/pug"}),"pug"),", ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/jade"}),"Jade"),", ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/twig"}),"Twig"),", etc)."),Object(c.b)("h2",{id:"the-foalejs-package"},"The ",Object(c.b)("inlineCode",{parentName:"h2"},"@foal/ejs")," package"),Object(c.b)("p",null,"Therefore the package ",Object(c.b)("inlineCode",{parentName:"p"},"@foal/ejs")," has been removed. If you used it, update your configuration file as follows:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"npm uninstall @foal/ejs\nnpm install ejs\n")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Version 1")),Object(c.b)(o.a,{groupId:"config",defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},Object(c.b)(l.a,{value:"yaml",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"settings:\n  templateEngine: '@foal/ejs'\n"))),Object(c.b)(l.a,{value:"json",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "settings": {\n    "templateEngine": "@foal/ejs"\n  }\n}\n'))),Object(c.b)(l.a,{value:"js",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'module.exports = {\n  settings: {\n    templateEngine: "@foal/ejs"\n  }\n}\n')))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Version 2")),Object(c.b)(o.a,{groupId:"config",defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},Object(c.b)(l.a,{value:"yaml",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"settings:\n  templateEngine: ejs\n"))),Object(c.b)(l.a,{value:"json",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "settings": {\n    "templateEngine": "ejs"\n  }\n}\n'))),Object(c.b)(l.a,{value:"js",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'module.exports = {\n  settings: {\n    templateEngine: "ejs"\n  }\n}\n')))))}b.isMDXComponent=!0}}]);