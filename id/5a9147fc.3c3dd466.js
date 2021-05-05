(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(271)),i={title:"Firebase"},c={unversionedId:"cloud/firebase",id:"version-1.x/cloud/firebase",isDocsHomePage:!1,title:"Firebase",description:"This document explains how to create and deploy an application with Firebase. It assumes that you do not use TypeORM since Firebase does not provide SQL databases.",source:"@site/versioned_docs/version-1.x/cloud/firebase.md",slug:"/cloud/firebase",permalink:"/id/docs/1.x/cloud/firebase",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/cloud/firebase.md",version:"1.x",sidebar:"someSidebar",previous:{title:"AWS Beanstalk",permalink:"/id/docs/1.x/cloud/aws-beanstalk"},next:{title:"HTTP Headers Protection",permalink:"/id/docs/1.x/security/http-headers-protection"}},p=[{value:"Set Up the Firebase CLI",id:"set-up-the-firebase-cli",children:[]},{value:"Create the Firebase Project",id:"create-the-firebase-project",children:[]},{value:"Create the Foal Application",id:"create-the-foal-application",children:[]},{value:"Configure the Project to Make it Work with Firebase",id:"configure-the-project-to-make-it-work-with-firebase",children:[]},{value:"Deploy the Application",id:"deploy-the-application",children:[]}],l={toc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This document explains how to create and deploy an application with Firebase. It assumes that you do not use TypeORM since Firebase does not provide SQL databases."),Object(o.b)("h2",{id:"set-up-the-firebase-cli"},"Set Up the Firebase CLI"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npm install -g firebase-tools\nfirebase login\n")),Object(o.b)("h2",{id:"create-the-firebase-project"},"Create the Firebase Project"),Object(o.b)("p",null,"First create an empty project on the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://console.firebase.google.com/"}),"Firebase platform"),"."),Object(o.b)("p",null,"Then create your project locally."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"mkdir my-app\ncd my-app\nfirebase init\n")),Object(o.b)("p",null,"The CLI displays some prompts:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Select the ",Object(o.b)("inlineCode",{parentName:"p"},"Hosting")," option. You may select other options as well but do not select ",Object(o.b)("inlineCode",{parentName:"p"},"Functions")," (otherwise you will have to delete the ",Object(o.b)("inlineCode",{parentName:"p"},"functions/")," directory just after).")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The default static path must be changed to ",Object(o.b)("inlineCode",{parentName:"p"},"functions/public"),"."))),Object(o.b)("h2",{id:"create-the-foal-application"},"Create the Foal Application"),Object(o.b)("p",null,"Create the Foal application."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"foal createapp functions\ncd functions\n")),Object(o.b)("p",null,"You can run locally your application using ",Object(o.b)("inlineCode",{parentName:"p"},"npm run develop"),"."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Using ",Object(o.b)("inlineCode",{parentName:"p"},"npm run develop")," over ",Object(o.b)("inlineCode",{parentName:"p"},"firebase serve")," has the advantage to restart the development server when a file is changed.")),Object(o.b)("h2",{id:"configure-the-project-to-make-it-work-with-firebase"},"Configure the Project to Make it Work with Firebase"),Object(o.b)("p",null,"Install the dependencies."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"npm install firebase-functions firebase-admin\n")),Object(o.b)("p",null,"Update the file ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," in ",Object(o.b)("inlineCode",{parentName:"p"},"functions/"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  ...\n  "main": "build/index.firebase.js",\n  "engines": {\n    "node": "8"\n  }\n  ...\n}\n')),Object(o.b)("p",null,"Create a file named ",Object(o.b)("inlineCode",{parentName:"p"},"index.firebase.ts")," in ",Object(o.b)("inlineCode",{parentName:"p"},"functions/src/")," and export the express application."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import 'source-map-support/register';\n\n// 3p\nimport { createApp } from '@foal/core';\nimport * as functions from 'firebase-functions';\n\n// App\nimport { AppController } from './app/app.controller';\n\nexport const app = functions.https.onRequest(createApp(AppController));\n\n")),Object(o.b)("p",null,"Add the file to ",Object(o.b)("inlineCode",{parentName:"p"},"tsconfig.app.json"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "extends": "./tsconfig.json",\n  "include": [\n    "src/app/**/*.ts",\n    "src/index.firebase.ts",\n    "src/index.ts"\n  ],\n  "exclude": [\n    "src/app/**/*.spec.ts"\n  ]\n}\n')),Object(o.b)("p",null,"Update the ",Object(o.b)("inlineCode",{parentName:"p"},"firebase.json")," file to specify that the server should use the previously exported application. "),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "hosting": {\n    "public": "functions/public",\n    "ignore": [\n      "firebase.json",\n      "**/.*",\n      "**/node_modules/**"\n    ],\n    "rewrites": [ {\n      "source": "**",\n      "function": "app"\n    } ]\n  }\n}\n\n')),Object(o.b)("h2",{id:"deploy-the-application"},"Deploy the Application"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npm run build:app\nfirebase deploy\n")))}s.isMDXComponent=!0},271:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(n),d=r,f=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return n?a.a.createElement(f,c(c({ref:t},l),{},{components:n})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);