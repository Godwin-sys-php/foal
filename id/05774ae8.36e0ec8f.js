(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{271:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||i;return n?a.a.createElement(m,c(c({ref:t},p),{},{components:n})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),i=(n(0),n(271)),o={title:"Create Models & Queries"},c={unversionedId:"databases/create-models-and-queries",id:"version-1.x/databases/create-models-and-queries",isDocsHomePage:!1,title:"Create Models & Queries",description:"`shell",source:"@site/versioned_docs/version-1.x/databases/create-models-and-queries.md",slug:"/databases/create-models-and-queries",permalink:"/id/docs/1.x/databases/create-models-and-queries",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/databases/create-models-and-queries.md",version:"1.x",sidebar:"someSidebar",previous:{title:"TypeORM",permalink:"/id/docs/1.x/databases/typeorm"},next:{title:"Generate & Run Migrations",permalink:"/id/docs/1.x/databases/generate-and-run-migrations"}},s=[{value:"Entities",id:"entities",children:[]},{value:"Using Entities",id:"using-entities",children:[]},{value:"Queries",id:"queries",children:[]}],p={toc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"foal generate entity my-entity\n")),Object(i.b)("h2",{id:"entities"},"Entities"),Object(i.b)("p",null,"Simple models are called ",Object(i.b)("em",{parentName:"p"},"entities")," in TypeORM. You can generate one with the above command."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Example:")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\nexport class Product {\n\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column()\n  name: string;\n\n  @Column()\n  price: number;\n\n}\n\n")),Object(i.b)("p",null,"The class ",Object(i.b)("inlineCode",{parentName:"p"},"Product")," represents the database table and its instances represent the table rows."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"In FoalTS, entity files should always be named with the extension ",Object(i.b)("inlineCode",{parentName:"p"},".entity.ts"),". This way the CLI can find the entities when automatically generating migrations.")),Object(i.b)("h2",{id:"using-entities"},"Using Entities"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { getRepository } from 'typeorm';\n\nconst repository = getRepository(Product);\n\nconst product = new Product();\nproduct.name = 'chair';\nproduct.price = 60;\nawait repository.save(product);\n\nconst products = await repository.find();\n// find by id:\nconst firstProduct = await repository.findOne(1);\nconst chair = await repository.findOne({ name: 'chair' });\n\nawait repository.remove(chair);\n")),Object(i.b)("h2",{id:"queries"},"Queries"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { getRepository } from 'typeorm';\n\nconst firstProduct = await getRepository(Product)\n  .createQueryBuilder('product')\n  .where('product.id = :id', { id: 1 })\n  .getOne();\n")))}l.isMDXComponent=!0}}]);