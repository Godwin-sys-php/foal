(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{167:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(7),i=(t(0),t(271)),o={title:"Using Another ORM or Query Builder",sidebar_label:"Using Another ORM"},c={unversionedId:"databases/using-another-orm",id:"databases/using-another-orm",isDocsHomePage:!1,title:"Using Another ORM or Query Builder",description:"The core of the framework is independent of TypeORM. So, if you do not want to use an ORM at all or use another ORM or ODM than TypeORM, you absolutely can.",source:"@site/docs/databases/using-another-orm.md",slug:"/databases/using-another-orm",permalink:"/docs/databases/using-another-orm",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/databases/using-another-orm.md",version:"current",sidebar_label:"Using Another ORM",sidebar:"someSidebar",previous:{title:"MongoDB (noSQL)",permalink:"/docs/databases/mongodb"},next:{title:"Quick Start",permalink:"/docs/authentication-and-access-control/quick-start"}},l=[{value:"Uninstall TypeORM",id:"uninstall-typeorm",children:[]},{value:"Functions to Be Added",id:"functions-to-be-added",children:[{value:"The <code>fetchUser</code> function",id:"the-fetchuser-function",children:[]}]},{value:"Examples",id:"examples",children:[{value:"Prisma",id:"prisma",children:[]}]},{value:"Limitations",id:"limitations",children:[]}],s={toc:l};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The core of the framework is independent of TypeORM. So, if you do not want to use an ORM at all or use another ORM or ODM than TypeORM, you absolutely can."),Object(i.b)("p",null,"To do so, you will have to remove TypeORM and all its utilities and implement some functions yourself like the authentication function ",Object(i.b)("inlineCode",{parentName:"p"},"fetchUser"),"."),Object(i.b)("h2",{id:"uninstall-typeorm"},"Uninstall TypeORM"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"First uninstall the dependencies."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm uninstall typeorm @foal/typeorm\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Then remove the directory ",Object(i.b)("inlineCode",{parentName:"p"},"src/app/entities"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Remove or replace the script ",Object(i.b)("inlineCode",{parentName:"p"},"create-user")," in ",Object(i.b)("inlineCode",{parentName:"p"},"src/app/scripts"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"In the file ",Object(i.b)("inlineCode",{parentName:"p"},"app.controller.ts"),", delete the connection creation call ",Object(i.b)("inlineCode",{parentName:"p"},"createConnection"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Finally, remove in ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," the scripts to manage migrations."))),Object(i.b)("h2",{id:"functions-to-be-added"},"Functions to Be Added"),Object(i.b)("h3",{id:"the-fetchuser-function"},"The ",Object(i.b)("inlineCode",{parentName:"h3"},"fetchUser")," function"),Object(i.b)("p",null,"If you wish to use the ",Object(i.b)("inlineCode",{parentName:"p"},"user")," option of ",Object(i.b)("inlineCode",{parentName:"p"},"@JWTRequired")," or ",Object(i.b)("inlineCode",{parentName:"p"},"@UseSessions")," to set the ",Object(i.b)("inlineCode",{parentName:"p"},"ctx.user")," property, then you will need to implement your own ",Object(i.b)("inlineCode",{parentName:"p"},"fetchUser")," function."),Object(i.b)("p",null,"This utility returns a function that takes an ",Object(i.b)("inlineCode",{parentName:"p"},"id")," as parameter which might be a ",Object(i.b)("inlineCode",{parentName:"p"},"string")," or a ",Object(i.b)("inlineCode",{parentName:"p"},"number")," and returns a promise. The promise value must be ",Object(i.b)("inlineCode",{parentName:"p"},"undefined")," is no user matches the given ",Object(i.b)("inlineCode",{parentName:"p"},"id")," and the ",Object(i.b)("em",{parentName:"p"},"user object")," otherwise."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Example")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { FetchUser, ServiceManager } from '@foal/core';\n\nexport function fetchUser(userModel: any): FetchUser {\n  return async (id: number|string, services: ServiceManager) => {\n    if (typeof id === 'string') {\n      throw new Error('The user ID must be a number.');\n    }\n    const user = await userModel.findOne({ id });\n    if (user === null) {\n      return undefined;\n    }\n    return user;\n  };\n}\n")),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("h3",{id:"prisma"},"Prisma"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("em",{parentName:"p"},"This example uses an SQLite database."))),Object(i.b)("h4",{id:"warning-on-configuration"},"Warning on Configuration"),Object(i.b)("p",null,"Prisma uses the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/dotenv"}),"dotenv library")," under the hood which handles ",Object(i.b)("inlineCode",{parentName:"p"},".env")," files and environment variables differently."),Object(i.b)("p",null,"Therefore, when using Prisma, you can only use one single ",Object(i.b)("inlineCode",{parentName:"p"},".env")," file. Using other files such as ",Object(i.b)("inlineCode",{parentName:"p"},".env.local")," or ",Object(i.b)("inlineCode",{parentName:"p"},".env.production")," will lead to unexpected variable values."),Object(i.b)("h4",{id:"basic-set-up"},"Basic Set Up"),Object(i.b)("p",null,"Install the latest version of TypeScript (Prisma v2.21 requires at least v4.1)."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install typescript@latest\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("em",{parentName:"p"},"If you get compile-time errors referencing the file ",Object(i.b)("inlineCode",{parentName:"em"},"node_modules/.prisma/client/index.d.ts"),", it is likely that your version of TypeScript is too old."))),Object(i.b)("p",null,"Install the Prisma dependencies."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install prisma --save-dev\nnpm install @prisma/client\n")),Object(i.b)("p",null,"Init the project."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npx prisma init\n")),Object(i.b)("p",null,"Set up the database configuration in ",Object(i.b)("inlineCode",{parentName:"p"},"prisma/schema.prisma"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'datasource db {\n  provider = "sqlite"\n  url      = env("DATABASE_URL")\n}\n\ngenerator client {\n  provider = "prisma-client-js"\n}\n\nmodel User {\n  id    Int     @id @default(autoincrement())\n  email String  @unique\n  name  String?\n}\n')),Object(i.b)("p",null,"Specify the database URL in the ",Object(i.b)("inlineCode",{parentName:"p"},".env")," file."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'DATABASE_URL="file:./db.sqlite3"\n')),Object(i.b)("p",null,"Generate and run the migration."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npx prisma migrate dev --name init\n")),Object(i.b)("p",null,"Generate the TypeScript interfaces."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npx prisma generate\n")),Object(i.b)("p",null,"Update your ",Object(i.b)("inlineCode",{parentName:"p"},"src/index.ts")," to create the prisma connection and pass it to the service manager."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"src/index.ts")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"// 3p\nimport { ServiceManager } from '@foal/core';\nimport { PrismaClient } from '@prisma/client';\n\n// App\nimport { AppController } from './app/app.controller';\n\nconst prisma = new PrismaClient();\n\nasync function main() {\n  const serviceManager = new ServiceManager();\n  serviceManager.set(PrismaClient, prisma);\n  const app = await createApp(AppController, { serviceManager });\n\n  // ...\n}\n\nmain()\n  .catch(err => { console.error(err.stack); process.exit(1); })\n  .finally(() => prisma.$disconnect());\n")),Object(i.b)("p",null,"Finally, inject the prisma client into your controllers and start using it."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"app.controller.ts")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { dependency, Get, HttpResponseOK, IAppController } from '@foal/core';\nimport { PrismaClient } from '@prisma/client';\n\nexport class AppController implements IAppController {\n  @dependency\n  prisma: PrismaClient;\n\n  @Get('/users')\n  async getAllUsers() {\n    const allUsers = await this.prisma.user.findMany();\n    return new HttpResponseOK(allUsers);\n  }\n}\n")),Object(i.b)("h4",{id:"the-fetchuser-function-1"},"The ",Object(i.b)("inlineCode",{parentName:"h4"},"fetchUser")," function"),Object(i.b)("p",null,"In case your application uses the hooks ",Object(i.b)("inlineCode",{parentName:"p"},"@UseSessions")," or ",Object(i.b)("inlineCode",{parentName:"p"},"@JWTRequired")," and you want to assign a value to ",Object(i.b)("inlineCode",{parentName:"p"},"ctx.user"),", then you will need to create a ",Object(i.b)("inlineCode",{parentName:"p"},"fetchUser")," function."),Object(i.b)("p",null,"First, make sure your have a ",Object(i.b)("inlineCode",{parentName:"p"},"User")," model defined in ",Object(i.b)("inlineCode",{parentName:"p"},"schema.prisma"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-prisma"}),"// ...\n\nmodel User {\n  id    Int     @id @default(autoincrement())\n  email String  @unique\n  name  String?\n}\n")),Object(i.b)("p",null,"If you haven't already done so, generate and run the migration and generate the TypeScript interfaces."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npx prisma migrate dev --name add-user\nnpx prisma generate\n")),Object(i.b)("p",null,"Then create the ",Object(i.b)("inlineCode",{parentName:"p"},"fetchPrismaUser")," function."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { ServiceManager } from '@foal/core';\nimport { PrismaClient } from '@prisma/client';\n\nexport async function fetchPrismaUser(id: number|string, services: ServiceManager) {\n  if (typeof id === 'string') {\n    throw new Error('The user ID must be a number.');\n  }\n\n  const user = await services.get(PrismaClient).user.findFirst({\n    where: { id }\n  });\n\n  if (user === null) {\n    return undefined;\n  }\n  \n  return user;\n}\n")),Object(i.b)("p",null,"You're now ready to use it in your hooks."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"@JWTRequired({ user: fetchPrismaUser })\n// OR\n@UseSessions({ user: fetchPrismaUser })\n")),Object(i.b)("h2",{id:"limitations"},"Limitations"),Object(i.b)("p",null,"When using another ORM than TypeORM some features, are not available:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"the ",Object(i.b)("em",{parentName:"li"},"Groups & Permissions")," system,"),Object(i.b)("li",{parentName:"ul"},"and the ",Object(i.b)("inlineCode",{parentName:"li"},"foal g rest-api")," command.")))}p.isMDXComponent=!0},271:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),p=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=p(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(t),m=a,d=b["".concat(o,".").concat(m)]||b[m]||u[m]||i;return t?r.a.createElement(d,c(c({ref:n},s),{},{components:t})):r.a.createElement(d,c({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);