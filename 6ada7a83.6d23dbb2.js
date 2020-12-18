(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{154:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return l})),n.d(r,"metadata",(function(){return c})),n.d(r,"toc",(function(){return p})),n.d(r,"default",(function(){return i}));var t=n(3),a=n(7),o=(n(0),n(251)),l={title:"GraphQL"},c={unversionedId:"api-section/graphql",id:"version-1.x/api-section/graphql",isDocsHomePage:!1,title:"GraphQL",description:"GraphQL is a query language for APIs. Unlike traditional REST APIs, GraphQL APIs have only one endpoint to which requests are sent. The content of the request describes all the operations to be performed and the data to be returned in the response. Many resources can be retrieved in a single request and the client gets exactly the properties it asks for.",source:"@site/versioned_docs/version-1.x/api-section/graphql.md",slug:"/api-section/graphql",permalink:"/docs/1.x/api-section/graphql",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/api-section/graphql.md",version:"1.x",sidebar:"someSidebar",previous:{title:"Public API & CORS Requests",permalink:"/docs/1.x/api-section/public-api-and-cors-requests"},next:{title:"Single Page Applications (SPA)",permalink:"/docs/1.x/frontend-integration/single-page-applications"}},p=[{value:"Basic Usage",id:"basic-usage",children:[]},{value:"Using Separate Files for Type Definitions",id:"using-separate-files-for-type-definitions",children:[]},{value:"Using a Service for the Root Resolvers",id:"using-a-service-for-the-root-resolvers",children:[]},{value:"GraphQL Playground",id:"graphql-playground",children:[]},{value:"Error Handling - Masking &amp; Logging Errors",id:"error-handling---masking--logging-errors",children:[]},{value:"Authentication &amp; Authorization",id:"authentication--authorization",children:[]},{value:"Using TypeGraphQL",id:"using-typegraphql",children:[]},{value:"Advanced",id:"advanced",children:[{value:"Override the Resolver Context",id:"override-the-resolver-context",children:[]}]}],s={toc:p};function i(e){var r=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},s,n,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"https://graphql.org/"}),"GraphQL")," is a query language for APIs. Unlike traditional REST APIs, GraphQL APIs have only one endpoint to which requests are sent. The content of the request describes all the operations to be performed and the data to be returned in the response. Many resources can be retrieved in a single request and the client gets exactly the properties it asks for."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Example of request")),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-graphql"}),'{\n  project(name: "GraphQL") {\n    tagline\n  }\n}\n')),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Example of response")),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "project": {\n      "tagline": "A query language for APIs"\n    }\n  }\n}\n')),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The below document assumes that you have a basic knowledge of GraphQL.")),Object(o.b)("p",null,"To use GraphQL with FoalTS, you need to install the packages ",Object(o.b)("inlineCode",{parentName:"p"},"graphql")," and ",Object(o.b)("inlineCode",{parentName:"p"},"@foal/graphql"),". The first one is maintained by the GraphQL community and parses and resolves queries. The second is specific to FoalTS and allows you to configure a controller compatible with common GraphQL clients (",Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"https://www.npmjs.com/package/graphql-request"}),"graphql-request"),", ",Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"https://www.apollographql.com/docs/react/"}),"Apollo Client"),", etc), load type definitions from separate files or handle errors thrown in resolvers."),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{}),"npm install graphql @foal/graphql\n")),Object(o.b)("p",null,"Due to a specificity of the ",Object(o.b)("inlineCode",{parentName:"p"},"graphql")," library, you must also modify your ",Object(o.b)("inlineCode",{parentName:"p"},"tsconfig.json")," as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-json"}),'{\n  "compilerOptions": {\n    ...\n    "lib": [\n      ...\n      "ESNext.AsyncIterable"\n    ]\n  }\n  ...\n}\n')),Object(o.b)("h2",{id:"basic-usage"},"Basic Usage"),Object(o.b)("p",null,"The main component of the package is the abstract ",Object(o.b)("inlineCode",{parentName:"p"},"GraphQLController"),". Inheriting this class allows you to create a controller that is compatible with common GraphQL clients (",Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"https://www.npmjs.com/package/graphql-request"}),"graphql-request"),", ",Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"https://www.apollographql.com/docs/react/"}),"Apollo Client"),", etc) or any client that follows the HTTP specification defined ",Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"https://graphql.org/learn/serving-over-http/"}),"here"),"."),Object(o.b)("p",null,"Here is an example on how to use it with a simple schema and resolver."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"app.controller.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-typescript"}),"export class AppController {\n  subControllers = [\n    controller('/graphql', ApiController)\n  ]\n}\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"api.controller.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-typescript"}),"import { GraphQLController } from '@foal/graphql';\nimport { buildSchema } from 'graphql';\n\nconst schema = buildSchema(`\n  type Query {\n    hello: String\n  }\n`);\n\nconst root = {\n  hello: () => {\n    return 'Hello world!';\n  },\n};\n\nexport class ApiController extends GraphQLController {\n  schema = schema;\n  resolvers = root;\n}\n")),Object(o.b)("p",null,"And here is an example of what your client code might look like:"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-typescript"}),"import { request } from 'graphql-request';\n\nconst data = await request('/graphql', '{ hello }');\n// data equals \"{ hello: 'Hello world!' }\"\n")),Object(o.b)("p",null,"Alternatively, if you have several strings that define your GraphQL types, you can use the ",Object(o.b)("inlineCode",{parentName:"p"},"schemaFromTypeDefs")," function to build the schema."),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-typescript"}),"import { GraphQLController, schemaFromTypeDefs } from '@foal/graphql';\n\nconst source1 = `\n  type Query {\n    me: User\n  }\n`;\nconst source2 = `\n  type User {\n    id: ID\n    name: String\n  }\n`;\n\n// ...\n\nexport class ApiController extends GraphQLController {\n  schema = schemaFromTypeDefs(source1, source2);\n  // ...\n}\n\n")),Object(o.b)("h2",{id:"using-separate-files-for-type-definitions"},"Using Separate Files for Type Definitions"),Object(o.b)("p",null,"If you want to specify type definitions in separate files, you can use the ",Object(o.b)("inlineCode",{parentName:"p"},"schemaFromTypeGlob")," function for this."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{}),"src/\n'- app/\n  '- controllers/\n    |- query.graphql\n    |- user.graphql\n    '- api.controller.ts\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"query.graphql")),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-graphql"}),"type Query {\n  me: User\n}\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"user.graphql")),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-graphql"}),"type User {\n  id: ID\n  name: String\n}\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"api.controller.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-typescript"}),"import { GraphQLController, schemaFromTypeGlob } from '@foal/graphql';\nimport { join } from 'path';\n\nexport class ApiController extends GraphQLController {\n  schema = schemaFromTypeGlob(join(__dirname, '**/*.graphql'));\n  // ...\n}\n")),Object(o.b)("p",null,"Note that for this to work, you must copy the graphql files during the build. To do this, you can update some lines of your ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-json"}),'{\n  ...\n  "scripts": {\n    ...\n    "build:app": "copy-cli \\"src/**/*.html\\" build && copy-cli \\"src/**/*.graphql\\" build && tsc -p tsconfig.app.json",\n    ...\n    "build:test": "copy-cli \\"src/**/*.html\\" build && copy-cli \\"src/**/*.graphql\\" && tsc -p tsconfig.test.json",\n    ...\n    "build:e2e": "copy-cli \\"src/**/*.html\\" build && copy-cli \\"src/**/*.graphql\\" && tsc -p tsconfig.e2e.json"\n    ...\n  }\n}\n')),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Alternatively, if you want to specify only specific files instead of using a glob pattern, you can call ",Object(o.b)("inlineCode",{parentName:"p"},"schemaFromTypePaths"),"."),Object(o.b)("pre",{parentName:"blockquote"},Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-typescript"}),"import { GraphQLController, schemaFromTypePaths } from '@foal/graphql';\nimport { join } from 'path';\n\nexport class ApiController extends GraphQLController {\n  schema = schemaFromTypePaths(\n    join(__dirname, './query.graphql'),\n    join(__dirname, './user.graphql')\n  );\n  // ...\n}\n"))),Object(o.b)("h2",{id:"using-a-service-for-the-root-resolvers"},"Using a Service for the Root Resolvers"),Object(o.b)("p",null,"Root resolvers can also be grouped into a service in order to benefit from all the advantages offered by services (dependency injection, etc.). All you have to do is add the ",Object(o.b)("inlineCode",{parentName:"p"},"@dependency")," decorator as you would with any service."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"api.controller.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-typescript"}),"import { dependency } from '@foal/core';\nimport { GraphQLController } from '@foal/graphql';\nimport { RootResolverService } from '../services';\n\n// ...\n\nexport class ApiController extends GraphQLController {\n  schema = // ...\n\n  @dependency\n  resolvers: RootResolverService;\n}\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"root-resolver.service.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-typescript"}),"export class RootResolverService {\n\n  hello() {\n    return 'Hello world!';\n  }\n\n}\n")),Object(o.b)("h2",{id:"graphql-playground"},"GraphQL Playground"),Object(o.b)("p",null,"Next releases of FoalTS will include support for ",Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/graphql/graphiql"}),"GraphiQL"),"."),Object(o.b)("h2",{id:"error-handling---masking--logging-errors"},"Error Handling - Masking & Logging Errors"),Object(o.b)("p",null,"By default, GraphQL returns all errors thrown (or rejected) in the resolvers. However, this behavior is often not desired in production as it could cause sensitive information to leak from the server."),Object(o.b)("p",null,"In comparison with REST APIs, when the ",Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"/docs/1.x/deployment-and-environments/configuration"}),"configuration key"),"  ",Object(o.b)("inlineCode",{parentName:"p"},"settings.debug")," does not equal ",Object(o.b)("inlineCode",{parentName:"p"},"true")," (production case), details of the errors thrown in controllers are not returned to the client. Only a ",Object(o.b)("inlineCode",{parentName:"p"},"500 - Internal Server Error")," error is sent back."),Object(o.b)("p",null,"In a similar way, FoalTS provides two utilities ",Object(o.b)("inlineCode",{parentName:"p"},"formatError")," and ",Object(o.b)("inlineCode",{parentName:"p"},"@FormatError")," for your GraphQL APIs to log and mask errors.  When ",Object(o.b)("inlineCode",{parentName:"p"},"settings.debug")," is ",Object(o.b)("inlineCode",{parentName:"p"},"true"),", the errors are converted into a new one whose unique message is ",Object(o.b)("inlineCode",{parentName:"p"},"Internal Server Error"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Example of GraphQL response in production")),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": { "user": null },\n  "errors": [\n    {\n      "locations": [ { "column": 2, "line": 1 } ],\n      "message": "Internal Server Error",\n      "path": [ "user" ]\n    }\n  ]\n}\n')),Object(o.b)("p",null,"Here are examples on how to use ",Object(o.b)("inlineCode",{parentName:"p"},"formatError")," and ",Object(o.b)("inlineCode",{parentName:"p"},"@FormatError"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-typescript"}),"function user() {\n  // ...\n}\n\nconst resolvers = {\n  user: formatError(user)\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-typescript"}),"class ResolverService {\n  @FormatError()\n  user() {\n    // ...\n  }\n}\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note that ",Object(o.b)("inlineCode",{parentName:"p"},"formatError")," and ",Object(o.b)("inlineCode",{parentName:"p"},"@FormatError")," make your functions become asynchronous. This means that any value returned by the function is now a resolved promise of this value, and any errors thrown in the function is converted into a rejected promise. This only has an impact on unit testing as you may need to preceed your function calls by the keyword ",Object(o.b)("inlineCode",{parentName:"p"},"await"),".")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"formatError")," and ",Object(o.b)("inlineCode",{parentName:"p"},"@FormatError")," also accept an optional parameter to override its default behavior. It is a function that takes the error thrown or rejected in the resolver and return the error that must be sent to the client. It may be asynchronous or synchronous."),Object(o.b)("p",null,"By default, this function is:"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-typescript"}),"function maskAndLogError(err: any): any {\n  console.log(err);\n\n  if (Config.get('settings.debug')) {\n    return err;\n  }\n\n  return new Error('Internal Server Error');\n}\n")),Object(o.b)("p",null,"But we can also imagine other implementations such as:"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-typescript"}),"import { reportErrorTo3rdPartyService } from 'somewhere';\n\nasync function maskAndLogError(err: any): Promise<any> {\n  console.log(err);\n\n  try {\n    await reportErrorTo3rdPartyService(err);\n  } catch (error) {}\n\n  if (err instanceof MyCustomError) {\n    return err;\n  }\n\n  if (Config.get('settings.debug')) {\n    return err;\n  }\n\n  return new Error('Internal Server Error');\n}\n")),Object(o.b)("h2",{id:"authentication--authorization"},"Authentication & Authorization"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The below code is an example of managing authentication and authorization with a GraphQL controller.")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"api.controller.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-typescript"}),"import { GraphQLController } from '@foal/graphql';\nimport { JWTRequired } from '@foal/jwt';\nimport { fetchUser } from '@foal/typeorm';\nimport { buildSchema } from 'graphql';\n\nimport { User } from '../entities';\n\nconst schema = buildSchema(`\n  type Query {\n    hello: String\n  }\n`);\n\nconst root = {\n  hello: (_, context) => {\n    if (!context.user.isAdmin) {\n      return null;\n    }\n    return 'Hello world!';\n  },\n};\n\n@JWTRequired({ user: fetchUser(User) })\nexport class ApiController extends GraphQLController {\n  schema = schema;\n  resolvers = root;\n}\n")),Object(o.b)("h2",{id:"using-typegraphql"},"Using TypeGraphQL"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("em",{parentName:"p"},Object(o.b)("a",Object(t.a)({parentName:"em"},{href:"https://typegraphql.com/"}),"TypeGraphQL")," is a library that allows you to create GraphQL schemas and resolvers with TypeScript classes and decorators."))),Object(o.b)("p",null,"You can use TypeGraphQL by simply calling its ",Object(o.b)("inlineCode",{parentName:"p"},"buildSchema")," function."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-typescript"}),"import { GraphQLController } from '@foal/graphql';\nimport { buildSchema, Field, ObjectType, Query, Resolver } from 'type-graphql';\n\n@ObjectType()\nclass Recipe {\n  @Field()\n  title: string;\n}\n\n@Resolver(Recipe)\nclass RecipeResolver {\n\n  @Query(returns => Recipe)\n  async recipe() {\n    return {\n      title: 'foobar'\n    };\n  }\n\n}\n\nexport class ApiController extends GraphQLController {\n  schema = buildSchema({\n    resolvers: [ RecipeResolver ]\n  });\n}\n")),Object(o.b)("h2",{id:"advanced"},"Advanced"),Object(o.b)("h3",{id:"override-the-resolver-context"},"Override the Resolver Context"),Object(o.b)("p",null,"The ",Object(o.b)("em",{parentName:"p"},"GraphQL context")," that is passed to the resolvers is by default the ",Object(o.b)("em",{parentName:"p"},"request context"),". This behavior can be changed by overriding the ",Object(o.b)("inlineCode",{parentName:"p"},"getResolverContext")," method."),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-typescript"}),"import { Context } from '@foal/core';\nimport { GraphQLController } from '@foal/graphql';\n\nexport class ApiController extends GraphQLController {\n  // ...\n\n  getResolverContext(ctx: Context) {\n    return { user: ctx.user };\n  }\n}\n")))}i.isMDXComponent=!0},251:function(e,r,n){"use strict";n.d(r,"a",(function(){return b})),n.d(r,"b",(function(){return h}));var t=n(0),a=n.n(t);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),i=function(e){var r=a.a.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},b=function(e){var r=i(e.components);return a.a.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},m=a.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=i(n),m=t,h=b["".concat(l,".").concat(m)]||b[m]||u[m]||o;return n?a.a.createElement(h,c(c({ref:r},s),{},{components:n})):a.a.createElement(h,c({ref:r},s))}));function h(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=n.length,l=new Array(o);l[0]=m;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:t,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);