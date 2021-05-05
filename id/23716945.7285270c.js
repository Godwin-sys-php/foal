(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{108:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),o=(a(0),a(271)),l={title:"Validation & Sanitization"},i={unversionedId:"validation-and-sanitization",id:"version-1.x/validation-and-sanitization",isDocsHomePage:!1,title:"Validation & Sanitization",description:"Validation checks if an input meets a set of criteria (such as the value of a property is a string).",source:"@site/versioned_docs/version-1.x/validation-and-sanitization.md",slug:"/validation-and-sanitization",permalink:"/id/docs/1.x/validation-and-sanitization",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/validation-and-sanitization.md",version:"1.x",sidebar:"someSidebar",previous:{title:"Groups & Permissions",permalink:"/id/docs/1.x/authentication-and-access-control/groups-and-permissions"},next:{title:"Serializing & Deserializing",permalink:"/id/docs/1.x/serializing-and-deserializing"}},c=[{value:"With a JSON Schema (AJV)",id:"with-a-json-schema-ajv",children:[{value:"Ajv, the JSON Schema Validator",id:"ajv-the-json-schema-validator",children:[]},{value:"Options",id:"options",children:[]},{value:"The <code>validate</code> util",id:"the-validate-util",children:[]},{value:"Validation &amp; Sanitization of HTTP Requests",id:"validation--sanitization-of-http-requests",children:[]},{value:"Sanitization Example",id:"sanitization-example",children:[]}]},{value:"With a Validation Class (class-validator)",id:"with-a-validation-class-class-validator",children:[{value:"Usage with a Hook",id:"usage-with-a-hook",children:[]},{value:"Usage with TypeORM entities",id:"usage-with-typeorm-entities",children:[]}]}],s={toc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Validation")," checks if an input meets a set of criteria (such as the value of a property is a string)."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Sanitization")," modifies the input to ensure that it is valid (such as coercing a type)."),Object(o.b)("p",null,"Foal offers several utils and hooks to handle both validation and sanitization. They are particularly useful for checking and transforming parts of HTTP requests (such as the body)."),Object(o.b)("h2",{id:"with-a-json-schema-ajv"},"With a JSON Schema (AJV)"),Object(o.b)("h3",{id:"ajv-the-json-schema-validator"},"Ajv, the JSON Schema Validator"),Object(o.b)("p",null,"FoalTS default validation and sanitization system is based on ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/epoberezkin/ajv"}),"Ajv"),", a fast JSON Schema Validator. You'll find more details on how to define a shema on its ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://epoberezkin.github.io/ajv/"}),"website"),". "),Object(o.b)("h3",{id:"options"},"Options"),Object(o.b)("p",null,"Here is the list of AJV options that can be overridden with FoalTS configuration system."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Ajv option"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Configuration key"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"FoalTS default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"coerceTypes"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"settings.ajv.coerceType")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"removeAdditional"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"settings.ajv.removeAdditional")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"useDefaults"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"settings.ajv.useDefaults")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nullable"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"settings.ajv.nullable")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"/")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"allErrors"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"settings.ajv.allErrors")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"/")))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Example: config/default.json")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "settings": {\n    "ajv": {\n      "coerceTypes": true\n    }\n  }\n}\n')),Object(o.b)("h3",{id:"the-validate-util"},"The ",Object(o.b)("inlineCode",{parentName:"h3"},"validate")," util"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"validate")," util throws a ",Object(o.b)("inlineCode",{parentName:"p"},"ValidationError")," if the given data does not fit the shema."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { validate } from '@foal/core';\n\nconst schema = {\n  properties: {\n    a: { type: 'number' }\n  },\n  type: 'object'\n};\nconst data = {\n  a: 'foo'\n};\n\nvalidate(schema, data);\n// => Throws an error (ValidationError)\n// => error.content contains the details of the validation error.\n")),Object(o.b)("h3",{id:"validation--sanitization-of-http-requests"},"Validation & Sanitization of HTTP Requests"),Object(o.b)("p",null,"FoalTS provides many hooks to validate and sanitize HTTP requests. When validation fails, they return an ",Object(o.b)("inlineCode",{parentName:"p"},"HttpResponseBadRequest")," object whose body contains the validation errors."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { Context, HttpResponseOK, Post, ValidateBody } from '@foal/core';\n\nexport class MyController {\n\n  @Post('/user')\n  @ValidateBody({\n    additionalProperties: false,\n    properties: {\n      firstName: { type: 'string' },\n      lastName: { type: 'string' },\n    },\n    required: [ 'firstName', 'lastName' ],\n    type: 'object'\n  })\n  postUser(ctx: Context) {\n    // In this method we are sure that firstName and lastName\n    // are defined thanks to the above hook.\n    console.log(\n      ctx.request.body.firstName, ctx.request.body.lastName\n    );\n    return new HttpResponseOK();\n  }\n\n}\n")),Object(o.b)("h4",{id:"validatebody"},"ValidateBody"),Object(o.b)("p",null,"It validates the request body (",Object(o.b)("inlineCode",{parentName:"p"},"Context.request.body"),")."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"HTTP request")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),'POST /products\n\n{\n  "price": "hello world"\n}\n')),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Controller (first example)")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { Post, ValidateBody } from '@foal/core';\n\nexport class AppController {\n  @Post('/products')\n  @ValidateBody({\n    additionalProperties: false,\n    properties: {\n      price: { type: 'integer' },\n    },\n    required: [ 'price' ],\n    type: 'object'\n  })\n  createProduct() {\n    // ...\n  }\n}\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Controller (second example)")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { Post, ValidateBody } from '@foal/core';\n\nexport class AppController {\n  schema = {\n    additionalProperties: false,\n    properties: {\n      price: { type: 'integer' },\n    },\n    required: [ 'price' ],\n    type: 'object'\n  };\n\n  @Post('/products')\n  @ValidateBody(controller => controller.schema)\n  createProduct() {\n    // ...\n  }\n}\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"HTTP response (400 - BAD REQUEST)")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "body": [\n    {\n      "dataPath": ".price",\n      "keyword": "type",\n      "message": "should be integer",\n      "params": {\n        "type": "integer"\n      },\n      "schemaPath": "#/properties/price/type"\n    }\n  ]\n}\n')),Object(o.b)("h4",{id:"validateheader--validateheaders"},"ValidateHeader & ValidateHeaders"),Object(o.b)("p",null,"It validates the request headers (",Object(o.b)("inlineCode",{parentName:"p"},"Context.request.headers"),")."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"HTTP request")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"GET /products\nAuthorization: xxx\nA-Number: hello\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Controller (first example)")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { Post, ValidateHeader } from '@foal/core';\n\nexport class AppController {\n  @Get('/products')\n  @ValidateHeader('Authorization')\n  @ValidateHeader('A-Number', { type: 'integer' }, { required: false })\n  readProducts() {\n    // ...\n  }\n}\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Controller (second example)")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { Post, ValidateHeader } from '@foal/core';\n\nexport class AppController {\n  schema = { type: 'integer' };\n\n  @Get('/products')\n  @ValidateHeader('Authorization')\n  @ValidateHeader('A-Number', c => c.schema, { required: false })\n  readProducts() {\n    // ...\n  }\n}\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Controller (third example)")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { Post, ValidateHeaders } from '@foal/core';\n\nexport class AppController {\n  @Get('/products')\n  // Deprecated since v1.12. Use @ValidateHeader instead.\n  @ValidateHeaders({\n    properties: {\n      // All properties should be in lower case.\n      'a-number': { type: 'integer' },\n      'authorization': { type: 'string' },\n    },\n    required: [ 'authorization' ],\n    type: 'object'\n  })\n  readProducts() {\n    // ...\n  }\n}\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"HTTP response (400 - BAD REQUEST)")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "headers": [\n    {\n      "dataPath:" "[\'a-number\']",\n      "keyword": "type",\n      "message": "should be integer",\n      "params": {\n        "type": "integer"\n      },\n      "schemaPath": "#/properties/a-number/type"\n    }\n  ]\n}\n')),Object(o.b)("h4",{id:"validatecookie--validatecookies"},"ValidateCookie & ValidateCookies"),Object(o.b)("p",null,"It validates the request cookies (",Object(o.b)("inlineCode",{parentName:"p"},"Context.request.cookies"),")."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"HTTP request")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"GET /products\nCookies: Authorization=xxx; A-Number=hello\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Controller (first example)")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { Post, ValidateCookie } from '@foal/core';\n\nexport class AppController {\n  @Get('/products')\n  @ValidateCookie('Authorization')\n  @ValidateCookie('A-Number', { type: 'integer' }, { required: false })\n  readProducts() {\n    // ...\n  }\n}\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Controller (second example)")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { Post, ValidateCookie } from '@foal/core';\n\nexport class AppController {\n  schema = { type: 'integer' };\n\n  @Get('/products')\n  @ValidateCookie('Authorization')\n  @ValidateCookie('A-Number', c => c.schema, { required: false })\n  readProducts() {\n    // ...\n  }\n}\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Controller (third example)")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { Post, ValidateCookies } from '@foal/core';\n\nexport class AppController {\n  @Get('/products')\n  @Hook(ctx => console.log(ctx.request.cookies))\n  // Deprecated since v1.12. Use @ValidateCookie instead.\n  @ValidateCookies({\n    properties: {\n      'A-Number': { type: 'integer' },\n      'Authorization': { type: 'string' },\n    },\n    required: [ 'Authorization' ],\n    type: 'object'\n  })\n  readProducts() {\n    // ...\n  }\n}\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"HTTP response (400 - BAD REQUEST)")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "cookies": [\n    {\n      "dataPath": "[\'a-number\']",\n      "keyword": "type",\n      "message": "should be integer",\n      "params": {\n        "type": "integer"\n      },\n      "schemaPath": "#/properties/a-number/type"\n    }\n  ]\n}\n')),Object(o.b)("h4",{id:"validatepathparam--validateparams"},"ValidatePathParam & ValidateParams"),Object(o.b)("p",null,"It validates the request path parameter (",Object(o.b)("inlineCode",{parentName:"p"},"Context.request.params"),")."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"HTTP request")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"GET /products/xxx\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Controller (first example)")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { Post, ValidatePathParam } from '@foal/core';\n\nexport class AppController {\n  @Get('/products/:productId')\n  @ValidatePathParam('productId', { type: 'integer' })\n  readProducts() {\n    // ...\n  }\n}\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Controller (second example)")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { Post, ValidatePathParam } from '@foal/core';\n\nexport class AppController {\n  schema = { type: 'integer' };\n\n  @Get('/products/:productId')\n  @ValidatePathParam('productId', c => c.schema)\n  readProducts() {\n    // ...\n  }\n}\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Controller (third example)")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { Post, ValidateParams } from '@foal/core';\n\nexport class AppController {\n  @Get('/products/:productId')\n  // Deprecated since v1.12. Use @ValidatePathParam instead.\n  @ValidateParams({\n    properties: {\n      productId: { type: 'integer' }\n    },\n    type: 'object'\n  })\n  readProducts() {\n    // ...\n  }\n}\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"HTTP response (400 - BAD REQUEST)")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "pathParams": [\n    {\n      "dataPath": ".productId",\n      "keyword": "type",\n      "message": "should be integer",\n      "params": {\n        "type": "integer"\n      },\n      "schemaPath": "#/properties/productId/type"\n    }\n  ]\n}\n')),Object(o.b)("h4",{id:"validatequeryparam--validatequery"},"ValidateQueryParam & ValidateQuery"),Object(o.b)("p",null,"It validates the request query (",Object(o.b)("inlineCode",{parentName:"p"},"Context.request.query"),")."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"HTTP request")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"GET /products?authorization=xxx&a-number=hello\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Controller (first example)")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { Post, ValidateQueryParam } from '@foal/core';\n\nexport class AppController {\n  @Get('/products')\n  @ValidateQueryParam('authorization')\n  @ValidateQueryParam('a-number', { type: 'integer' }, { required: false })\n  readProducts() {\n    // ...\n  }\n}\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Controller (second example)")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { Post, ValidateQueryParam } from '@foal/core';\n\nexport class AppController {\n  schema = { type: 'integer' };\n\n  @Get('/products')\n  @ValidateQueryParam('authorization')\n  @ValidateQueryParam('a-number', c => c.schema, { required: false })\n  readProducts() {\n    // ...\n  }\n}\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Controller (third example)")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { Post, ValidateQuery } from '@foal/core';\n\nexport class AppController {\n  @Get('/products')\n  // Deprecated since v1.12. Use @ValidateQueryParam instead.\n  @ValidateQuery({\n    properties: {\n      'a-number': { type: 'integer' },\n      'authorization': { type: 'string' },\n    },\n    required: [ 'authorization' ],\n    type: 'object'\n  })\n  readProducts() {\n    // ...\n  }\n}\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"HTTP response (400 - BAD REQUEST)")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "query": [\n    {\n      "dataPath": "[\'a-number\']",\n      "keyword": "type",\n      "message": "should be integer",\n      "params": {\n        "type": "integer"\n      },\n      "schemaPath": "#/properties/a-number/type"\n    }\n  ]\n}\n')),Object(o.b)("h3",{id:"sanitization-example"},"Sanitization Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { Context, Get, HttpResponseOK, ValidateQuery } from '@foal/core';\n\nexport class AppController {\n\n  @Get('/no-sanitization')\n  noSanitization(ctx: Context) {\n    return new HttpResponseOK(ctx.request.query);\n  }\n\n  @Get('/sanitization')\n  @ValidateQuery({\n    additionalProperties: false,\n    properties: {\n      apiKey: { type: 'number' },\n      name: { type: 'string' },\n    },\n    required: [ 'name', 'apiKey' ],\n    type: 'object'\n  })\n  sanitization(ctx: Context) {\n    return new HttpResponseOK(ctx.request.query);\n  }\n\n}\n\n")),Object(o.b)("p",null,"Assuming that you did not change Foal's default configuration of Ajv (see above), you will get these results:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Request"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Response"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GET ",Object(o.b)("inlineCode",{parentName:"td"},"/no-sanitization?name=Alex&apiKey=34&city=Paris")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"{ name: 'Alex', apiKey: '34', city: 'Paris' }"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GET ",Object(o.b)("inlineCode",{parentName:"td"},"/sanitization?name=Alex&apiKey=34&city=Paris")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"{ name: 'Alex', apiKey: 34 }"))))),Object(o.b)("h2",{id:"with-a-validation-class-class-validator"},"With a Validation Class (class-validator)"),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/typestack/class-validator"}),"class-validator")," library can also be used in Foal to validate an object against a validation class."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"npm install class-validator\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),'import {validate, Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max} from "class-validator";\n \nexport class Post {\n\n    @IsInt()\n    @Min(0)\n    @Max(10)\n    rating: number;\n \n    @IsEmail()\n    email: string;\n \n}\n \nlet post = new Post();\npost.rating = 11; // should not pass\npost.email = "google.com"; // should not pass\n \nvalidate(post).then(errors => { // errors is an array of validation errors\n    if (errors.length > 0) {\n        console.log("validation failed. errors: ", errors);\n    } else {\n        console.log("validation succeed");\n    }\n});\n')),Object(o.b)("h3",{id:"usage-with-a-hook"},"Usage with a Hook"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"npm install class-transformer class-validator @foal/typestack\n")),Object(o.b)("p",null,"If you want to use it within a hook to validate request bodies, you can install the package ",Object(o.b)("inlineCode",{parentName:"p"},"@foal/typestack")," for this. It provides a ",Object(o.b)("inlineCode",{parentName:"p"},"@ValidateBody")," hook that validates the body against a given validator. This body is also unserialized and turned into an instance of the class."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"social-post.validator.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { Contains, Length } from 'class-validator';\n\nexport class SocialPost {\n\n  @Length(10, 20)\n  title: string;\n\n  @Contains('hello')\n  text: string;\n\n}\n\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"social-post.controller.ts (first example)")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { Context, HttpResponseCreated, Post } from '@foal/core';\nimport { ValidateBody } from '@foal/typestack';\nimport { SocialPost } from './social-post.validator';\n\nexport class SocialPostController {\n\n  @Post()\n  @ValidateBody(SocialPost, { /* options if relevant */ })\n  createSocialPost(ctx: Context) {\n    // ctx.request.body is an instance of SocialPost.\n    // ...\n    return new HttpResponseCreated();\n  }\n\n}\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"social-post.controller.ts (second example)")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { Context, HttpResponseCreated, Post } from '@foal/core';\nimport { ValidateBody } from '@foal/typestack';\nimport { SocialPost } from './social-post.validator';\n\nexport class SocialPostController {\n  entityClass = SocialPost;\n\n  @Post()\n  @ValidateBody(controller => controller.entityClass, { /* options if relevant */ })\n  createSocialPost(ctx: Context) {\n    // ctx.request.body is an instance of SocialPost.\n    // ...\n    return new HttpResponseCreated();\n  }\n\n}\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"HTTP request (example)")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),'POST /\n\n{\n  "text": "foo"\n}\n')),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"HTTP response (example)")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "children": [],\n    "constraints": { "length": "title must be longer than or equal to 10 characters" },\n    "property": "title",\n    "target": { "text": "foo" },\n  },\n  {\n    "children": [],\n    "constraints": { "contains": "text must contain a hello string" },\n    "property": "text",\n    "target": { "text": "foo" },\n    "value": "foo",\n  }\n]\n')),Object(o.b)("p",null,"The hook takes also an optional parameter to specify the options of the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/typestack/class-transformer"}),"class-transformer")," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/typestack/class-validator"}),"class-validator")," libraries."),Object(o.b)("h3",{id:"usage-with-typeorm-entities"},"Usage with TypeORM entities"),Object(o.b)("p",null,"The validation decorators are compatible with TypeORM entities. So you can use one single class to define both your model and validation rules."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';\nimport { Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max } from 'class-validator';\n\n@Entity()\nexport class Post {\n\n    @PrimaryGeneratedColumn()\n    id: number;\n    \n    @Column()\n    @Length(10, 20)\n    title: string;\n\n    @Column()\n    @Contains(\"hello\")\n    text: string;\n\n    @Column()\n    @IsInt()\n    @Min(0)\n    @Max(10)\n    rating: number;\n\n    @Column()\n    @IsEmail()\n    email: string;\n\n    @Column()\n    @IsFQDN()\n    site: string;\n\n    @Column()\n    @IsDate()\n    createDate: Date;\n\n}\n")))}p.isMDXComponent=!0},271:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(a),m=n,u=b["".concat(l,".").concat(m)]||b[m]||d[m]||o;return a?r.a.createElement(u,i(i({ref:t},s),{},{components:a})):r.a.createElement(u,i({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);