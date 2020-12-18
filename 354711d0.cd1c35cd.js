(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{117:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(7),r=(n(0),n(251)),o={title:"Initialization"},c={unversionedId:"architecture/initialization",id:"version-1.x/architecture/initialization",isDocsHomePage:!1,title:"Initialization",description:"In many situations, we need to initialize the application (i.e perform certain actions) before listening to incoming HTTP requests. This is the case, for example, if you need to establish a connection to the database.",source:"@site/versioned_docs/version-1.x/architecture/initialization.md",slug:"/architecture/initialization",permalink:"/docs/1.x/architecture/initialization",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/architecture/initialization.md",version:"1.x",sidebar:"someSidebar",previous:{title:"Hooks",permalink:"/docs/1.x/architecture/hooks"},next:{title:"TypeORM",permalink:"/docs/1.x/databases/typeorm"}},l=[{value:"The <code>main</code> function",id:"the-main-function",children:[]},{value:"The <code>AppController.init</code> method",id:"the-appcontrollerinit-method",children:[]},{value:"The services <code>boot</code> method",id:"the-services-boot-method",children:[]},{value:"Best Practices",id:"best-practices",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"In many situations, we need to initialize the application (i.e perform certain actions) before listening to incoming HTTP requests. This is the case, for example, if you need to establish a connection to the database."),Object(r.b)("p",null,"There are three ways to achieve this in FoalTS."),Object(r.b)("h2",{id:"the-main-function"},"The ",Object(r.b)("inlineCode",{parentName:"h2"},"main")," function"),Object(r.b)("p",null,"The most straightforward way to do it, which is used by default, is to add the initialization commands in the ",Object(r.b)("inlineCode",{parentName:"p"},"main")," function before ",Object(r.b)("inlineCode",{parentName:"p"},"createApp")," is called."),Object(r.b)("p",null,"If your application uses TypeORM, your project should have a file ",Object(r.b)("inlineCode",{parentName:"p"},"src/index.ts")," that looks like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"async function main() {\n  // Initialization\n  await createConnection();\n\n  // Creation of the application\n  const app = createApp(AppController);\n\n  // ...\n}\n\nmain();\n")),Object(r.b)("h2",{id:"the-appcontrollerinit-method"},"The ",Object(r.b)("inlineCode",{parentName:"h2"},"AppController.init")," method"),Object(r.b)("p",null,"Sometimes, however, this approach is not sufficient because we need to call the methods of some services. In this case, you can add an ",Object(r.b)("inlineCode",{parentName:"p"},"init")," method to the root controller class which will be called before the application is fully created. This method can be synchronous or asynchronous."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Example 1")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"export class AppController {\n\n  @dependency\n  serviceA: ServiceA;\n\n  async init() {\n    await this.serviceA.doSomething();\n  }\n\n}\n")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Example 2")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"export class AppController {\n\n  @dependency\n  serviceA: ServiceA;\n\n  @dependency\n  serviceB: ServiceB;\n\n  async init() {\n    this.serviceA.init();\n    this.serviceB.init();\n  }\n\n}\n")),Object(r.b)("p",null,"For this to work, you need to update your ",Object(r.b)("inlineCode",{parentName:"p"},"src/index.ts")," file and create the application with the asynchronous function ",Object(r.b)("inlineCode",{parentName:"p"},"createAndInitApp"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { createAndInitApp } from '@foal/core';\n\nasync function main() {\n  const app = await createAndInitApp(AppController);\n\n  // ...\n}\n\nmain();\n")),Object(r.b)("h2",{id:"the-services-boot-method"},"The services ",Object(r.b)("inlineCode",{parentName:"h2"},"boot")," method"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("inlineCode",{parentName:"p"},"boot")," methods are available in v1.8.0 onwards.")),Object(r.b)("p",null,"Alternatively you can add a ",Object(r.b)("inlineCode",{parentName:"p"},"boot")," method in your services. This method can be synchronous or asynchronous."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Example")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"export class ServiceA {\n\n  async boot() {\n    await doSomething();\n  }\n\n}\n")),Object(r.b)("p",null,"Then, you have to call the ",Object(r.b)("inlineCode",{parentName:"p"},"boot")," method of your service manager (it will be automatically called starting from version 2)."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { createAndInitApp } from '@foal/core';\n\nasync function main() {\n  const serviceManager = new ServiceManager();\n  const app = createApp(AppController, {\n    serviceManager\n  });\n  // This line calls the `boot` method of all your services that have one.\n  await serviceManager.boot();\n\n  // ...\n}\n\nmain();\n")),Object(r.b)("p",null,"If you manually inject services to your service manager and you want their ",Object(r.b)("inlineCode",{parentName:"p"},"boot")," methods to be called, you must specify this in the ",Object(r.b)("inlineCode",{parentName:"p"},"set")," method options."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const serviceManager = new ServiceManager();\nserviceManager.set(ServiceA, myServiceInstance, { boot: true })\n")),Object(r.b)("h2",{id:"best-practices"},"Best Practices"),Object(r.b)("p",null,"If your initialization consists of several asynchronous tasks, you may want to perform them in ",Object(r.b)("em",{parentName:"p"},"parallel"),". This will reduce the initialization time, which has an impact if you use a serverless architecture."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"export class AppController {\n\n  async init() {\n    // Don't do\n    await createConnection();\n    await createAnotherConnection();\n\n    // Do\n    await Promise.all([\n      createConnection(),\n      createAnotherConnection()\n    ])\n  }\n\n}\n")))}p.isMDXComponent=!0},251:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||r;return n?i.a.createElement(m,c(c({ref:t},s),{},{components:n})):i.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);