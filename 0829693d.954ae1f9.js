(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{251:function(e,t,o){"use strict";o.d(t,"a",(function(){return d})),o.d(t,"b",(function(){return h}));var n=o(0),r=o.n(n);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},d=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(o),u=n,h=d["".concat(i,".").concat(u)]||d[u]||b[u]||a;return o?r.a.createElement(h,s(s({ref:t},l),{},{components:o})):r.a.createElement(h,s({ref:t},l))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=o[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},80:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return s})),o.d(t,"toc",(function(){return c})),o.d(t,"default",(function(){return p}));var n=o(3),r=o(7),a=(o(0),o(251)),i={title:"Why FoalTS?",slug:"/"},s={unversionedId:"README",id:"version-1.x/README",isDocsHomePage:!1,title:"Why FoalTS?",description:"License: MIT",source:"@site/versioned_docs/version-1.x/README.md",slug:"/",permalink:"/docs/1.x/",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/README.md",version:"1.x",sidebar:"someSidebar",next:{title:"Installation",permalink:"/docs/1.x/tutorials/simple-todo-list/1-installation"}},c=[{value:"Motivation",id:"motivation",children:[]},{value:"Philosophy",id:"philosophy",children:[{value:"Simple",id:"simple",children:[]},{value:"Testable",id:"testable",children:[]},{value:"Progressive",id:"progressive",children:[]}]}],l={toc:c};function p(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/License-MIT-blue.svg",alt:"License: MIT"})),"\n",Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/node-%3E%3D8-brightgreen.svg",alt:"node version"})),"\n",Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"https://badge.fury.io/js/%40foal%2Fcore.svg",alt:"npm version"})),"\n",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/FoalTS/foal/actions"}),Object(a.b)("img",Object(n.a)({parentName:"a"},{src:"https://github.com/FoalTS/foal/workflows/Test/badge.svg",alt:"Actions Status"}))),"\n",Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"https://codecov.io/gh/FoalTS/foal/branch/master/graphs/badge.svg",alt:"Code coverage"})),"\n",Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"https://snyk.io/test/github/foalts/foal/badge.svg",alt:"Known Vulnerabilities"})),"\n",Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/github/commit-activity/y/FoalTS/foal.svg",alt:"Commit activity"})),"\n",Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/github/last-commit/FoalTS/foal.svg",alt:"Last commit"})),"\n",Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/2FA-npm,%20GitHub-green.svg",alt:"2FA"}))),Object(a.b)("h2",{id:"motivation"},"Motivation"),Object(a.b)("p",null,"In recent years Node.js has become one of the most popular servers on the web. And for good reason, it is fast, simple while being powerful and flexible. Creating a server with only a few lines of code has never been easier. "),Object(a.b)("p",null,"But when it comes to setting up a complete and scalable project, things get harder. You have to put everything in place. The authorization system, database migrations, development tools or even hashing of passwords are just the tip of the iceberg. Working on this is time consuming and may slow down the release frequency or even lead to undesired bugs. As the codebase grows up and the complexity increases, it becomes harder and harder to develop new features and maintain the app."),Object(a.b)("p",null,"This is where FoalTS comes in. Based on express, this lightweight framework provides everything needed to create enterprise-grade applications. From the support of TypeScript to the integration of security tools, it offers the basic bricks to build robust webapps. But FoalTS does not pretend to be a closed framework. You can still import and use your favorite libraries from the rich ecosystem of Node.js."),Object(a.b)("h2",{id:"philosophy"},"Philosophy"),Object(a.b)("h3",{id:"simple"},"Simple"),Object(a.b)("p",null,"Keeping things simple is a challenge when creating an application. Simple code is easier to handle and understand, and therefore easier to maintain, debug and extend. Many frameworks, in trying to provide a large number of features and tools, tend to become complex, cumbersome and sometimes incomprehensible. In Foal, the architecture and components are designed to keep the code as simple as possible. Complexity is only used when there is no other option. "),Object(a.b)("h3",{id:"testable"},"Testable"),Object(a.b)("p",null,"Too often, tests are set aside in web projects. Considered secondary, many frameworks do not encourage developers to write them and often make this task difficult. This is a pity, because writing tests really improves the long-term reliability of the product. They help to detect bugs in advance, prevent regressions and even improve application design as they are developed. FoalTS is different and aims to help developers write unit and acceptance tests. The entire framework provides both the architecture and the tools necessary for this purpose."),Object(a.b)("h3",{id:"progressive"},"Progressive"),Object(a.b)("p",null,"Building a proof of concept or a global application is not the same thing. The first one tests an idea and must be built quickly. The other is a large production system that must be reliable and serve thousands of customers. They both have different objectives and technical concerns. However, it is highly likely that the PoC built today will one day become the global application of tomorrow, with evolving technical goals and needs. FoalTS is designed to support you along the way. At first, the framework provides a default configuration, lightweight components and practical templates to quickly start a new project. Then, as the application evolves, Foal's components, tools and architecture adapt to allow you to customize and scale your product."))}p.isMDXComponent=!0}}]);