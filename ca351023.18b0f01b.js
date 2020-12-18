(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{217:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),a=(n(0),n(251)),c={title:"OpenAPI"},i={unversionedId:"upgrade-to-v2/openapi",id:"upgrade-to-v2/openapi",isDocsHomePage:!1,title:"OpenAPI",description:"From version 2, the settings.openapi.useHooks configuration is enabled by default. This means that when generating the OpenAPI document, FoalTS will use the OpenAPI decorators but also the current hooks to create the document.",source:"@site/docs/upgrade-to-v2/openapi.md",slug:"/upgrade-to-v2/openapi",permalink:"/docs/upgrade-to-v2/openapi",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/upgrade-to-v2/openapi.md",version:"current"},p=[{value:"New features",id:"new-features",children:[{value:"Validation &amp; OpenAPI schema references",id:"validation--openapi-schema-references",children:[]}]}],u={toc:p};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"From version 2, the ",Object(a.b)("inlineCode",{parentName:"p"},"settings.openapi.useHooks")," configuration is enabled by default. This means that when generating the OpenAPI document, FoalTS will use the OpenAPI decorators but also the current hooks to create the document."),Object(a.b)("h2",{id:"new-features"},"New features"),Object(a.b)("h3",{id:"validation--openapi-schema-references"},"Validation & OpenAPI schema references"),Object(a.b)("p",null,"OpenAPI schema references are now supported in validation hooks."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import {\n  ApiDefineRequestBody,\n  Post,\n  Put,\n  ValidateBody,\n} from '@foal/core';\n\n@ApiDefineRequestBody('product', { /* ... */ })\nclass ProductController {\n\n  @Post('/products')\n  @ValidateBody({\n    $ref: '#/components/requestBodies/product'\n  })\n  createProduct(ctx) {\n    // ...\n  }\n\n  @Put('/products/;id')\n  @ValidateBody({\n    $ref: '#/components/requestBodies/product'\n  })\n  replaceProduct(ctx) {\n    // ...\n  }\n\n}\n")))}s.isMDXComponent=!0},251:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=s(n),f=r,m=l["".concat(c,".").concat(f)]||l[f]||d[f]||a;return n?o.a.createElement(m,i(i({ref:t},u),{},{components:n})):o.a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);