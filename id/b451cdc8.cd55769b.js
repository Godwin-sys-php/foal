(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{207:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return c})),r.d(n,"toc",(function(){return u})),r.d(n,"default",(function(){return s}));var t=r(3),o=r(7),a=(r(0),r(271)),i={title:"Removal of Mongoose Support"},c={unversionedId:"upgrade-to-v2/mongodb",id:"upgrade-to-v2/mongodb",isDocsHomePage:!1,title:"Removal of Mongoose Support",description:"Due to the amount of work needed to maintain Mongoose in the framework and the large number of problems we had to face in the past, FoalTS no longer provides tools for Mongoose starting from version 2. The recommended approach to use MongoDB is now via TypeORM.",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/upgrade-to-v2/mongodb.md",slug:"/upgrade-to-v2/mongodb",permalink:"/id/docs/upgrade-to-v2/mongodb",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/i18n/id/docusaurus-plugin-content-docs/current/upgrade-to-v2/mongodb.md",version:"current"},u=[],p={toc:u};function s(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},p,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Due to the amount of work needed to maintain Mongoose in the framework and the large number of problems we had to face in the past, FoalTS no longer provides tools for Mongoose starting from version 2. The recommended approach to use MongoDB is now via TypeORM."),Object(a.b)("p",null,"However, it is still possible to use Mongoose in your application if you want to. If you were using the ",Object(a.b)("inlineCode",{parentName:"p"},"fetchUser")," function from the package ",Object(a.b)("inlineCode",{parentName:"p"},"@foal/mongoose")," (now removed), here is its definition so that you can copy/paste it in your code:"),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-typescript"}),"function fetchUser(userModel: any): (id: number|string) => Promise<any> {\n  return (id: number|string) => {\n    if (typeof id === 'number') {\n      throw new Error('Unexpected type for MongoDB user ID: number.');\n    }\n    return new Promise((resolve, reject) => {\n      userModel.findOne({ _id: id }, (err: any, res: any) => {\n        if (err) {\n          reject(err);\n          return;\n        }\n        resolve(res || undefined);\n      });\n    });\n  };\n}\n")))}s.isMDXComponent=!0},271:function(e,n,r){"use strict";r.d(n,"a",(function(){return l})),r.d(n,"b",(function(){return m}));var t=r(0),o=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),s=function(e){var n=o.a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},l=function(e){var n=s(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),l=s(r),f=t,m=l["".concat(i,".").concat(f)]||l[f]||d[f]||a;return r?o.a.createElement(m,c(c({ref:n},p),{},{components:r})):o.a.createElement(m,c({ref:n},p))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);