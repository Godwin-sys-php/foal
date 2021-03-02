(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{230:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),o=(n(0),n(263)),i=n(267),l=n(268),c={title:"What's new in version 2 (part 2/4)",author:"Lo\xefc Poullain",author_title:"Fullstack developper and creator of FoalTS",author_url:"https://github.com/LoicPoullain",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/whats-new-in-version-2-part-2.png",tags:["release"]},s={permalink:"/blog/2021/03/02/whats-new-in-version-2-part-2",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/blog/2021-03-02-whats-new-in-version-2-part-2.md",source:"@site/blog/2021-03-02-whats-new-in-version-2-part-2.md",description:"Banner",date:"2021-03-02T00:00:00.000Z",tags:[{label:"release",permalink:"/blog/tags/release"}],title:"What's new in version 2 (part 2/4)",readingTime:5.055,truncated:!0,nextItem:{title:"Version 2.2 release notes",permalink:"/blog/2021/02/25/version-2.2-release-notes"}},p=[{value:"New Config System",id:"new-config-system",children:[{value:"Type safety",id:"type-safety",children:[]},{value:"Multiple <code>.env</code> files support",id:"multiple-env-files-support",children:[]},{value:"Three config formats (JS, JSON, YAML)",id:"three-config-formats-js-json-yaml",children:[]},{value:"More Liberty in Naming Environment Variables",id:"more-liberty-in-naming-environment-variables",children:[]}]},{value:"OpenAPI Schemas &amp; Validation",id:"openapi-schemas--validation",children:[]}],b={toc:p};function u(e){var t=e.components,c=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,c,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",{alt:"Banner",src:n(285).default})),Object(o.b)("p",null,"This article presents some improvements introduced in version 2 of FoalTS:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Configuration and type safety"),Object(o.b)("li",{parentName:"ul"},"Configuration and ",Object(o.b)("inlineCode",{parentName:"li"},".env")," files (",Object(o.b)("inlineCode",{parentName:"li"},".env"),", ",Object(o.b)("inlineCode",{parentName:"li"},".env.test"),", etc)"),Object(o.b)("li",{parentName:"ul"},"Available configuration file formats (JSON, YAML and JS)"),Object(o.b)("li",{parentName:"ul"},"OpenAPI schemas and validation")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"This article is the part 2 of the series of articles ",Object(o.b)("em",{parentName:"p"},"What's new in version 2.0"),". Part 1 can be found ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/blog/2021/02/17/whats-new-in-version-2-part-1"}),"here"),".")),Object(o.b)("h2",{id:"new-config-system"},"New Config System"),Object(o.b)("h3",{id:"type-safety"},"Type safety"),Object(o.b)("p",null,"Starting from version 2, a great attention is paid to type safety in the configuration. The ",Object(o.b)("inlineCode",{parentName:"p"},"Config.get")," method allows you specify which type you expect."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const timeout = Config.get('custom.timeout', 'number');\n// The TypeScript type returned by `get` is number|undefined.\n")),Object(o.b)("p",null,"In this example, when calling the ",Object(o.b)("inlineCode",{parentName:"p"},"get")," method, the framework will look at the configuration files to retrieve the desired value."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"If the value is not defined, the function returns ",Object(o.b)("inlineCode",{parentName:"li"},"undefined"),"."),Object(o.b)("li",{parentName:"ul"},"If the value is a number, the function returns it."),Object(o.b)("li",{parentName:"ul"},"If the value is a string that can be converted to a number (ex: ",Object(o.b)("inlineCode",{parentName:"li"},'"1"'),"), the function converts and returns it."),Object(o.b)("li",{parentName:"ul"},"If the value is not a number and cannot be converted, then the function throws a ",Object(o.b)("inlineCode",{parentName:"li"},"ConfigTypeError")," with the details. Note that the config value is not logged to avoir leaking sensitive information.")),Object(o.b)("p",null,"If you wish to make the config parameter mandatory, you can do it by using the ",Object(o.b)("inlineCode",{parentName:"p"},"getOrThrow")," method. If no value is found, then a ",Object(o.b)("inlineCode",{parentName:"p"},"ConfigNotFound")," error is thrown."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const timeout = Config.getOrThrow('custom.timeout', 'number');\n// The TypeScript type returned by `get` is number.\n")),Object(o.b)("p",null,"Supported types are ",Object(o.b)("inlineCode",{parentName:"p"},"string"),", ",Object(o.b)("inlineCode",{parentName:"p"},"number"),", ",Object(o.b)("inlineCode",{parentName:"p"},"boolean"),", ",Object(o.b)("inlineCode",{parentName:"p"},"boolean,string"),", ",Object(o.b)("inlineCode",{parentName:"p"},"number,string")," and ",Object(o.b)("inlineCode",{parentName:"p"},"any"),"."),Object(o.b)("h3",{id:"multiple-env-files-support"},"Multiple ",Object(o.b)("inlineCode",{parentName:"h3"},".env")," files support"),Object(o.b)("p",null,"Version 2 allows you to use different ",Object(o.b)("inlineCode",{parentName:"p"},".env")," files depending on your environment."),Object(o.b)("p",null,"If you configuration is as follows and ",Object(o.b)("inlineCode",{parentName:"p"},"NODE_ENV")," equals ",Object(o.b)("inlineCode",{parentName:"p"},"production"),", then the framework will look at ",Object(o.b)("inlineCode",{parentName:"p"},".env.production")," to retrieve the value and if it does not exist (the file or the value), Foal will look at ",Object(o.b)("inlineCode",{parentName:"p"},".env"),"."),Object(o.b)(i.a,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"yaml",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"settings:\n  jwt:\n    secret: env(SETTINGS_JWT_SECRET)\n"))),Object(o.b)(l.a,{value:"json",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "settings": {\n    "jwt": {\n      "secret": "env(SETTINGS_JWT_SECRET)",\n    }\n  }\n}\n'))),Object(o.b)(l.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const { Env } = require('@foal/core');\n\nmodule.exports = {\n  settings: {\n    jwt: {\n      secret: Env.get('SETTINGS_JWT_SECRET')\n    }\n  }\n}\n")))),Object(o.b)("h3",{id:"three-config-formats-js-json-yaml"},"Three config formats (JS, JSON, YAML)"),Object(o.b)("p",null,"JSON and YAML were already supported in version 1. Starting from version 2, JS is also allowed."),Object(o.b)(i.a,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"yaml",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'settings:\n  session:\n    store: "@foal/typeorm"\n'))),Object(o.b)(l.a,{value:"json",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "settings": {\n    "session": {\n      "store": "@foal/typeorm"\n    }\n  }\n}\n'))),Object(o.b)(l.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'module.exports = {\n  settings: {\n    session: {\n      store: "@foal/typeorm"\n    }\n  }\n}\n')))),Object(o.b)("h3",{id:"more-liberty-in-naming-environment-variables"},"More Liberty in Naming Environment Variables"),Object(o.b)("p",null,"In version 1, the names of the environment variables were depending on the names of the configuration keys. For example, when using ",Object(o.b)("inlineCode",{parentName:"p"},"Config.get('settings.mongodbUri')"),", Foal was looking at ",Object(o.b)("inlineCode",{parentName:"p"},"SETTINGS_MONGODB_URI"),"."),Object(o.b)("p",null,"Starting from version 2, it is your responsability to choose the environement variable that you want to use (if you use one). This gives more flexibility especially when a Cloud provider defines its own variable names."),Object(o.b)(i.a,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"yaml",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"settings:\n  mongodbUri: env(MONGODB_URI)\n"))),Object(o.b)(l.a,{value:"json",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "settings": {\n    "mongodbUri": "env(MONGODB_URI)"\n  }\n}\n'))),Object(o.b)(l.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const { Env } = require('@foal/core');\n\nmodule.exports = {\n  settings: {\n    mongodbUri: Env.get('MONGODB_URI')\n  }\n}\n")))),Object(o.b)("h2",{id:"openapi-schemas--validation"},"OpenAPI Schemas & Validation"),Object(o.b)("p",null,"Starting from version 1, Foal has allowed you to generate a complete ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://swagger.io/tools/swagger-ui/"}),"Swagger")," interface by reading your code. If your application has validation and auth hooks for example, Foal will use them to generate the proper interface."),Object(o.b)("p",null,"This is a handy if you want to quickly test and document your API. Then you can customize it in your own way if you wish and complete and override the OpenAPI spec generated by the framework."),Object(o.b)("p",null,"In version 2, support of Swagger has been increased to allow you to define OpenAPI schemas and re-use them for validation."),Object(o.b)("p",null,"Here is an example."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"product.controller.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { ApiDefineSchema, ApiResponse, Context, Get, HttpResponseNotFound, HttpResponseOK, Post, ValidateBody, ValidatePathParam } from '@foal/core';\nimport { Product } from '../../entities';\n\n// First we define the OpenAPI schema \"Product\".\n@ApiDefineSchema('Product', {\n  type: 'object',\n  properties: {\n    id: { type: 'number' },\n    name: { type: 'string' }\n  },\n  additionalProperties: false,\n  required: ['id', 'name'],\n})\nexport class ProductController {\n\n  @Post('/')\n  // We use the schema \"Product\" here to validate the request body.\n  @ValidateBody({ $ref: '#/components/schemas/Product' })\n  async createProduct(ctx: Context) {\n    const result = await Product.insert(ctx.request.body);\n    return new HttpResponseOK(result.identifiers[0]);\n  }\n\n  @Get('/:productId')\n  // We use the schema \"Product\" here to validate the URL parameter.\n  @ValidatePathParam('productId', { $ref: '#/components/schemas/Product/properties/id' })\n  // We give some extra information on the format of the response.\n  @ApiResponse(200, {\n    description: 'Product found in the database',\n    content: {\n      'application/json': { schema: { $ref: '#/components/schemas/Product' } }\n    }\n  })\n  async readProduct(ctx: Context, { productId }) {\n    const product = await Product.findOne({ id: productId });\n\n    if (!product) {\n      return new HttpResponseNotFound();\n    }\n\n    return new HttpResponseOK(product);\n  }\n\n}\n\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"api.controller.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { ApiInfo, ApiServer, Context, controller, Get, HttpResponseOK } from '@foal/core';\nimport { ProductController } from './api';\n\n// We provide the \"info\" metadata to describe the API.\n@ApiInfo({\n  title: 'My API',\n  version: '0.1.0'\n})\n@ApiServer({\n  url: '/api'\n})\nexport class ApiController {\n  subControllers = [\n    controller('/products', ProductController)\n  ];\n  \n}\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"openapi.controller.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { SwaggerController } from '@foal/swagger';\nimport { ApiController } from './api.controller';\n\n// This controller generates the Swagger interface.\nexport class OpenapiController extends SwaggerController {\n\n  options = {\n    controllerClass: ApiController,\n  }\n\n}\n\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"app.controller.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { controller, IAppController } from '@foal/core';\nimport { createConnection } from 'typeorm';\n\nimport { ApiController, OpenapiController } from './controllers';\n\nexport class AppController implements IAppController {\n  subControllers = [\n    controller('/api', ApiController),\n    controller('/swagger', OpenapiController),\n  ];\n\n  async init() {\n    await createConnection();\n  }\n}\n\n")),Object(o.b)("p",null,Object(o.b)("img",{alt:"Swagger 1",src:n(398).default})),Object(o.b)("p",null,Object(o.b)("img",{alt:"Swagger 2",src:n(399).default})),Object(o.b)("p",null,Object(o.b)("img",{alt:"Swagger 3",src:n(400).default})))}u.isMDXComponent=!0},263:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),m=a,d=b["".concat(i,".").concat(m)]||b[m]||u[m]||o;return n?r.a.createElement(d,l(l({ref:t},s),{},{components:n})):r.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},264:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},265:function(e,t,n){"use strict";var a=n(0),r=n(266);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},266:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},267:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(265),i=n(264),l=n(56),c=n.n(l),s=37,p=39;t.a=function(e){var t=e.lazy,n=e.block,l=e.defaultValue,b=e.values,u=e.groupId,m=e.className,d=Object(o.a)(),f=d.tabGroupChoices,O=d.setTabGroupChoices,g=Object(a.useState)(l),j=g[0],h=g[1],v=a.Children.toArray(e.children);if(null!=u){var y=f[u];null!=y&&y!==j&&b.some((function(e){return e.value===y}))&&h(y)}var N=function(e){h(e),null!=u&&O(u,e)},w=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},m)},b.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},n)}))),t?Object(a.cloneElement)(v.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},268:function(e,t,n){"use strict";var a=n(3),r=n(0),o=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return o.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}},285:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/banner-b1bb8a7ff5057bbac324ac1a22b55703.png"},398:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/swagger-6ab4ff6257c5e238ae690231405c7d1e.png"},399:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/swagger2-f3ff9ccbaae2615eaf0b49d0c9bd4db9.png"},400:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/swagger3-824905ff483b6e38bd753b750f0884dc.png"}}]);