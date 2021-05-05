(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{113:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),o=(t(0),t(271)),i={title:"Angular, React & Vue"},c={unversionedId:"frontend-integration/angular-react-vue",id:"version-1.x/frontend-integration/angular-react-vue",isDocsHomePage:!1,title:"Angular, React & Vue",description:"`",source:"@site/versioned_docs/version-1.x/frontend-integration/angular-react-vue.md",slug:"/frontend-integration/angular-react-vue",permalink:"/id/docs/1.x/frontend-integration/angular-react-vue",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/frontend-integration/angular-react-vue.md",version:"1.x",sidebar:"someSidebar",previous:{title:"Single Page Applications (SPA)",permalink:"/id/docs/1.x/frontend-integration/single-page-applications"},next:{title:"JSX Server-Side Rendering",permalink:"/id/docs/1.x/frontend-integration/jsx-server-side-rendering"}},l=[{value:"Creating a new Application",id:"creating-a-new-application",children:[{value:"Angular",id:"angular",children:[]},{value:"React",id:"react",children:[]},{value:"Vue",id:"vue",children:[]}]},{value:"Problems Solved by the <code>connect</code> Command",id:"problems-solved-by-the-connect-command",children:[{value:"Origins that Do not Match",id:"origins-that-do-not-match",children:[]},{value:"Build Outpath",id:"build-outpath",children:[]}]}],d={toc:l};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"foal connect angular ../frontend\nfoal connect react ../frontend\nfoal connect vue ../frontend\n")),Object(o.b)("p",null,"Angular, React and Vue all provide powerful CLIs for creating frontend applications. These tools are widely used, regularly improved and extensively documented. That's why Foal CLI do not provide ready-made features to build the frontend in their place."),Object(o.b)("p",null,"Instead, FoalTS offers a convenient command, named ",Object(o.b)("inlineCode",{parentName:"p"},"connect"),", to configure your frontend CLI so that it interacts smoothly with your Foal application. This way, you do not have to worry about the details of the configuration when starting a new project. You can leave this until later if you need it."),Object(o.b)("h2",{id:"creating-a-new-application"},"Creating a new Application"),Object(o.b)("h3",{id:"angular"},"Angular"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"mkdir my-app\ncd my-app\n\nfoal createapp backend\nng new frontend\n\ncd backend\nfoal connect angular ../frontend\n")),Object(o.b)("h3",{id:"react"},"React"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"mkdir my-app\ncd my-app\n\nfoal createapp backend\nnpx create-react-app frontend --template typescript\n\ncd backend\nfoal connect react ../frontend\n")),Object(o.b)("h3",{id:"vue"},"Vue"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"mkdir my-app\ncd my-app\n\nfoal createapp backend\nvue create frontend\n\ncd backend\nfoal connect vue ../frontend\n")),Object(o.b)("h2",{id:"problems-solved-by-the-connect-command"},"Problems Solved by the ",Object(o.b)("inlineCode",{parentName:"h2"},"connect")," Command"),Object(o.b)("h3",{id:"origins-that-do-not-match"},"Origins that Do not Match"),Object(o.b)("p",null,"When building a web application with a Angular / React / Vue, it is very common in development to have two servers serving on different ports. For example, with an application written in Foal and Angular, the backend server serves the port ",Object(o.b)("inlineCode",{parentName:"p"},"3001")," and the frontend one servers the ",Object(o.b)("inlineCode",{parentName:"p"},"4200"),"."),Object(o.b)("p",null,"Consequently requests made by the frontend do not reach the backend as they have a different origin. One hacky solution is to replace the URL path to ",Object(o.b)("inlineCode",{parentName:"p"},"http://localhost:3001")," in development and to enable CORS requests."),Object(o.b)("p",null,"This technique has some drawbacks however:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"It may introduce a different codebase between the environments (dev and prod)."),Object(o.b)("li",{parentName:"ul"},"And it disables a browser protection (the ",Object(o.b)("inlineCode",{parentName:"li"},"Same-Origin policy"),").")),Object(o.b)("p",null,"One way to get around this, keeping the policy and the same codebase, is to configure a proxy to redirect ",Object(o.b)("inlineCode",{parentName:"p"},"4200")," requests to the port ",Object(o.b)("inlineCode",{parentName:"p"},"3001"),". The ",Object(o.b)("inlineCode",{parentName:"p"},"connect")," command does it for you."),Object(o.b)("h3",{id:"build-outpath"},"Build Outpath"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("em",{parentName:"p"},"This feature only works with Angular and Vue."))),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"connect")," command also modifies the build output path of your front so that its bundles are saved in the ",Object(o.b)("inlineCode",{parentName:"p"},"public/")," directory. This way, you can run the frontend and the backend build commands and directly ship the application to production."))}p.isMDXComponent=!0},271:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=a.a.createContext({}),p=function(e){var n=a.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return a.a.createElement(d.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},s=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(t),s=r,m=u["".concat(i,".").concat(s)]||u[s]||b[s]||o;return t?a.a.createElement(m,c(c({ref:n},d),{},{components:t})):a.a.createElement(m,c({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=s;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var d=2;d<o;d++)i[d]=t[d];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);