(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{208:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var o=n(3),s=n(7),r=(n(0),n(251)),a={title:"Quick Start"},i={unversionedId:"authentication-and-access-control/quick-start",id:"version-1.x/authentication-and-access-control/quick-start",isDocsHomePage:!1,title:"Quick Start",description:"Authentication is the process of verifying that a user is who he or she claims to be. It answers the question Who is the user?.",source:"@site/versioned_docs/version-1.x/authentication-and-access-control/quick-start.md",slug:"/authentication-and-access-control/quick-start",permalink:"/docs/1.x/authentication-and-access-control/quick-start",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/authentication-and-access-control/quick-start.md",version:"1.x",sidebar:"someSidebar",previous:{title:"Using Another ORM or Query Builder",permalink:"/docs/1.x/databases/using-another-orm"},next:{title:"User Class and create-user Script",permalink:"/docs/1.x/authentication-and-access-control/user-class"}},c=[{value:"The Basics",id:"the-basics",children:[{value:"The Available Tokens (step 1)",id:"the-available-tokens-step-1",children:[]},{value:"The Authentication Hooks (step 2)",id:"the-authentication-hooks-step-2",children:[]}]},{value:"Code Examples",id:"code-examples",children:[]},{value:"SPA + API / Mobile + API (no cookies)",id:"spa--api--mobile--api-no-cookies",children:[{value:"Sessions Tokens",id:"sessions-tokens",children:[]},{value:"JSON Web Tokens",id:"json-web-tokens",children:[]}]},{value:"SPA + API (with cookies)",id:"spa--api-with-cookies",children:[{value:"Session Tokens",id:"session-tokens",children:[]}]},{value:"Regular Web Applications (with cookies and redirections)",id:"regular-web-applications-with-cookies-and-redirections",children:[]}],l={toc:c};function p(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Authentication")," is the process of verifying that a user is who he or she claims to be. It answers the question ",Object(r.b)("em",{parentName:"p"},"Who is the user?"),". "),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("em",{parentName:"p"},"Example: a user enters their login credentials to connect to the application"),".")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Authorization"),", also known as ",Object(r.b)("em",{parentName:"p"},"Access Control"),", is the process of determining what an authenticated user is allowed to do. It answers the question ",Object(r.b)("em",{parentName:"p"},"Does the user has the right to do what they ask?"),"."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("em",{parentName:"p"},"Example: a user tries to access the administrator page"),".")),Object(r.b)("p",null,"This document focuses on explaining how authentication works in FoalTS and gives several code examples to get started quickly. Further explanations are given in other pages of the documentation."),Object(r.b)("h2",{id:"the-basics"},"The Basics"),Object(r.b)("p",null,"The strength of FoalTS authentication system is that it can be used in a wide variety of applications. Whether you want to build a stateless REST API that uses social ID tokens or a traditional web application with templates, cookies and redirects, FoalTS provides you with the tools to do so. You can choose the elements you need and build your own authentication process."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(o.a)({parentName:"tr"},{align:null}),"Auth Support"),Object(r.b)("th",Object(o.a)({parentName:"tr"},{align:null})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Kind of Application"),Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"API, Regular Web App, SPA+API, Mobile+API")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"State management"),Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Stateful (Session Tokens), Stateless (JSON Web Tokens)\xa0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Credentials"),Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Passwords, Social\xa0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Token storage"),Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Cookies, localStorage, Mobile, etc")))),Object(r.b)("p",null,"Whatever architecture you choose, the authentication process will always follow the same pattern."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Step 1: the user logs in.")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("em",{parentName:"p"},"In some architectures, this step might be delegated to an external service: Google, Cognito, Auth0, etc"))),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Verify the credentials (email & password, username & password, social, etc)."),Object(r.b)("li",{parentName:"ol"},"Generate a token (stateless or stateful)."),Object(r.b)("li",{parentName:"ol"},"Return the token to the client (in a cookie, in the response body or in a header).")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Step 2: once logged in, the user keeps being authenticated on subsequent requests.")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"On each request, receive and check the token and retrieve the associated user if the token is valid.")),Object(r.b)("p",null,Object(r.b)("img",{alt:"Authentication architecture",src:n(348).default})),Object(r.b)("h3",{id:"the-available-tokens-step-1"},"The Available Tokens (step 1)"),Object(r.b)("p",null,"FoalTS provides two ways to generate tokens:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Session Tokens")," (stateful): They are probably the easiest way to manage authentication with Foal. Creation is straightforward, expiration is managed automatically and revocation is easy. Using session tokens keeps your code concise and does not require additional knowledge.")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Unlike other restrictive session management systems, FoalTS sessions are not limited to traditional applications that use cookies, redirection and server-side rendering. You can choose to use sessions without cookies, in a SPA+API or Mobile+API architecture and deploy your application to a serverless environment.")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"JSON Web Tokens")," (stateless): For more advanced developers, JWTs can be used to create stateless authentication or authentication that works with external social providers.")),Object(r.b)("h3",{id:"the-authentication-hooks-step-2"},"The Authentication Hooks (step 2)"),Object(r.b)("p",null,"In step 2, the hooks ",Object(r.b)("inlineCode",{parentName:"p"},"TokenRequired"),"  and ",Object(r.b)("inlineCode",{parentName:"p"},"TokenOptional")," take care of checking the session tokens and retrieve their associated user. The same applies to ",Object(r.b)("inlineCode",{parentName:"p"},"JWTRequired")," and ",Object(r.b)("inlineCode",{parentName:"p"},"JWTOptional")," with JSON Web Tokens."),Object(r.b)("p",null,"You will find more information in the documentation pages dedicated to them."),Object(r.b)("h2",{id:"code-examples"},"Code Examples"),Object(r.b)("p",null,"The four examples below can be used directly in your application to configure login, logout and signup routes. You can use them as they are or customize them to meet your specific needs."),Object(r.b)("p",null,"For these examples, we will use TypeORM as default ORM and emails and passwords as credentials. An API will allow authenticated users to list ",Object(r.b)("em",{parentName:"p"},"products")," with the request ",Object(r.b)("inlineCode",{parentName:"p"},"GET /api/products"),"."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"src/app/app.controller.ts")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { controller } from '@foal/core';\n\nexport class AppController {\n  subControllers = [\n    AuthController,\n    controller('/api', ApiController),\n  ];\n}\n")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"src/app/entities/user.entity.ts")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"@Entity()\nexport class User {\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column({ unique: true })\n  email: string;\n\n  @Column()\n  password: string;\n}\n")),Object(r.b)("h2",{id:"spa--api--mobile--api-no-cookies"},"SPA + API / Mobile + API (no cookies)"),Object(r.b)("p",null,"With these implementations, the user logs in with the route ",Object(r.b)("inlineCode",{parentName:"p"},"POST /login")," and receives a token in exchange in the response body. Then, when the user makes a request to the API, the token must be included in the ",Object(r.b)("inlineCode",{parentName:"p"},"Authorization")," header using the bearer sheme."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"Authorization: Bearer my-token\n")),Object(r.b)("p",null,"You may need to enable ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/1.x/api-section/public-api-and-cors-requests"}),"CORS")," or use ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/1.x/frontend-integration/angular-react-vue"}),"Frontend Integration")," to get this example  work with an SPA."),Object(r.b)("h3",{id:"sessions-tokens"},"Sessions Tokens"),Object(r.b)("p",null,"First generate a secret:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"foal createsecret\n")),Object(r.b)("p",null,"And save this secret in a ",Object(r.b)("inlineCode",{parentName:"p"},".env")," file:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"SETTINGS_SESSION_SECRET=my-secret\n")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"src/app/controllers/auth.controller.ts")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { dependency, Get, Post, Session, TokenRequired, ValidateBody } from '@foal/core';\nimport { TypeORMStore } from '@foal/typeorm';\n// ... to complete\n\nconst credentialsSchema = {\n  additionalProperties: false,\n  properties: {\n    email: { type: 'string', format: 'email' },\n    password: { type: 'string' }\n  },\n  required: [ 'email', 'password' ],\n  type: 'object',\n};\n\nexport class AuthController {\n  @dependency\n  store: TypeORMStore;\n\n  @Post('/signup')\n  @ValidateBody(credentialsSchema)\n  async signup(ctx: Context) {\n    const user = new User();\n    user.email = ctx.request.body.email;\n    user.password = await hashPassword(ctx.request.body.password);\n    await getRepository(User).save(user);\n\n    const session = await this.store.createAndSaveSessionFromUser(user);\n    return new HttpResponseOK({\n      token: session.getToken()\n    });\n  }\n\n  @Post('/login')\n  @ValidateBody(credentialsSchema)\n  async login(ctx: Context) {\n    const user = await getRepository(User).findOne({ email: ctx.request.body.email });\n\n    if (!user) {\n      return new HttpResponseUnauthorized();\n    }\n\n    if (!await verifyPassword(ctx.request.body.password, user.password)) {\n      return new HttpResponseUnauthorized();\n    }\n\n    const session = await this.store.createAndSaveSessionFromUser(user);\n    return new HttpResponseOK({\n      token: session.getToken()\n    });\n  }\n\n  @Post('/logout')\n  @TokenRequired({ store: TypeORMStore, extendLifeTimeOrUpdate: false })\n  async logout(ctx: Context<any, Session>) {\n    await this.store.destroy(ctx.session.sessionID);\n    return new HttpResponseNoContent();\n  }\n}\n")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"src/app/controllers/api.controller.ts")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"@TokenRequired({ store: TypeORMStore })\nexport class ApiController {\n  @Get('/products')\n  readProducts() {\n    return new HttpResponseOK([]);\n  }\n}\n")),Object(r.b)("h3",{id:"json-web-tokens"},"JSON Web Tokens"),Object(r.b)("p",null,"First generate a secret:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"foal createsecret\n")),Object(r.b)("p",null,"And save this secret in a ",Object(r.b)("inlineCode",{parentName:"p"},".env")," file:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"SETTINGS_JWT_SECRET_OR_PUBLIC_KEY=my-secret\n")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"src/app/controllers/auth.controller.ts")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"const credentialsSchema = {\n  additionalProperties: false,\n  properties: {\n    email: { type: 'string', format: 'email' },\n    password: { type: 'string' }\n  },\n  required: [ 'email', 'password' ],\n  type: 'object',\n};\n\nexport class AuthController {\n\n  @Post('/signup')\n  @ValidateBody(credentialsSchema)\n  async signup(ctx: Context) {\n    const user = new User();\n    user.email = ctx.request.body.email;\n    user.password = await hashPassword(ctx.request.body.password);\n    await getRepository(User).save(user);\n\n    return this.generateLoginResponse(user);\n  }\n\n  @Post('/login')\n  @ValidateBody(credentialsSchema)\n  async login(ctx: Context) {\n    const user = await getRepository(User).findOne({ email: ctx.request.body.email });\n\n    if (!user) {\n      return new HttpResponseUnauthorized();\n    }\n\n    if (!await verifyPassword(ctx.request.body.password, user.password)) {\n      return new HttpResponseUnauthorized();\n    }\n\n    return this.generateLoginResponse(user);\n  }\n\n  private async generateLoginResponse(user: User): Promise<HttpResponseOK> {\n    const payload = {\n      email: user.email,\n      id: user.id,\n    };\n    const secret = Config.get<string>('settings.jwt.secretOrPublicKey');\n\n    const token = await new Promise<string>((resolve, reject) => {\n      sign(payload, secret, { subject: user.id.toString() }, (err, value: string) => {\n        if (err) {\n          return reject(err);\n        }\n        resolve(value);\n      });\n    });\n\n    return new HttpResponseOK({\n      token\n    });\n  }\n}\n")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"src/app/controllers/api.controller.ts")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"@JWTRequired()\nexport class ApiController {\n  @Get('/products')\n  readProducts() {\n    return new HttpResponseOK([]);\n  }\n}\n")),Object(r.b)("h2",{id:"spa--api-with-cookies"},"SPA + API (with cookies)"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"As you use cookies, you must add a ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/1.x/security/csrf-protection"}),"CSRF protection")," to your application.")),Object(r.b)("p",null,"In this implementation, the authentication is managed with cookies."),Object(r.b)("p",null,"You may need to enable ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/1.x/api-section/public-api-and-cors-requests"}),"CORS")," or use ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/1.x/frontend-integration/angular-react-vue"}),"Frontend Integration")," to get this example  work with an SPA."),Object(r.b)("h3",{id:"session-tokens"},"Session Tokens"),Object(r.b)("p",null,"First generate a secret:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"foal createsecret\n")),Object(r.b)("p",null,"And save this secret in a ",Object(r.b)("inlineCode",{parentName:"p"},".env")," file:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"SETTINGS_SESSION_SECRET=my-secret\n")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"src/app/controllers/auth.controller.ts")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"const credentialsSchema = {\n  additionalProperties: false,\n  properties: {\n    email: { type: 'string', format: 'email' },\n    password: { type: 'string' }\n  },\n  required: [ 'email', 'password' ],\n  type: 'object',\n};\n\nexport class AuthController {\n  @dependency\n  store: TypeORMStore;\n\n  @Post('/signup')\n  @ValidateBody(credentialsSchema)\n  async signup(ctx: Context) {\n    const user = new User();\n    user.email = ctx.request.body.email;\n    user.password = await hashPassword(ctx.request.body.password);\n    await getRepository(User).save(user);\n\n    const session = await this.store.createAndSaveSessionFromUser(user);\n    const response = new HttpResponseNoContent();\n    const token = session.getToken();\n    setSessionCookie(response, token);\n    return response;\n  }\n\n  @Post('/login')\n  @ValidateBody(credentialsSchema)\n  async login(ctx: Context) {\n    const user = await getRepository(User).findOne({ email: ctx.request.body.email });\n\n    if (!user) {\n      return new HttpResponseUnauthorized();\n    }\n\n    if (!await verifyPassword(ctx.request.body.password, user.password)) {\n      return new HttpResponseUnauthorized();\n    }\n\n    const session = await this.store.createAndSaveSessionFromUser(user);\n    const response = new HttpResponseNoContent();\n    const token = session.getToken();\n    setSessionCookie(response, token);\n    return response;\n  }\n\n  @Post('/logout')\n  @TokenRequired({\n    cookie: true,\n    extendLifeTimeOrUpdate: false,\n    store: TypeORMStore,\n  })\n  async logout(ctx: Context<any, Session>) {\n    await this.store.destroy(ctx.session.sessionID);\n    const response = new HttpResponseNoContent();\n    removeSessionCookie(response);\n    return response;\n  }\n}\n")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"src/app/controllers/api.controller.ts")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"@TokenRequired({ store: TypeORMStore, cookie: true })\nexport class ApiController {\n  @Get('/products')\n  readProducts() {\n    return new HttpResponseOK([]);\n  }\n}\n")),Object(r.b)("h2",{id:"regular-web-applications-with-cookies-and-redirections"},"Regular Web Applications (with cookies and redirections)"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"As you use cookies, you must add a ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/1.x/security/csrf-protection"}),"CSRF protection")," to your application.")),Object(r.b)("p",null,"In this implementation, the authentication is managed with cookies and redirections."),Object(r.b)("p",null,"First generate a secret:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"foal createsecret\n")),Object(r.b)("p",null,"And save this secret in a ",Object(r.b)("inlineCode",{parentName:"p"},".env")," file:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"SETTINGS_SESSION_SECRET=my-secret\n")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"src/app/app.controller.ts")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { controller } from '@foal/core';\n\nexport class AppController {\n  subControllers = [\n    AuthController,\n    ViewController,\n    controller('/api', ApiController),\n  ];\n}\n")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"src/app/controllers/auth.controller.ts")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"const credentialsSchema = {\n  additionalProperties: false,\n  properties: {\n    email: { type: 'string', format: 'email' },\n    password: { type: 'string' }\n  },\n  required: [ 'email', 'password' ],\n  type: 'object',\n};\n\nexport class AuthController {\n  @dependency\n  store: TypeORMStore;\n\n  @Post('/signup')\n  @ValidateBody(credentialsSchema)\n  async signup(ctx: Context) {\n    const user = new User();\n    user.email = ctx.request.body.email;\n    user.password = await hashPassword(ctx.request.body.password);\n    await getRepository(User).save(user);\n\n    const session = await this.store.createAndSaveSessionFromUser(user);\n    const response = new HttpResponseRedirect('/home');\n    const token = session.getToken();\n    setSessionCookie(response, token);\n    return response;\n  }\n\n  @Post('/login')\n  @ValidateBody(credentialsSchema)\n  async login(ctx: Context) {\n    const user = await getRepository(User).findOne({ email: ctx.request.body.email });\n\n    if (!user) {\n      return new HttpResponseRedirect('/login');\n    }\n\n    if (!await verifyPassword(ctx.request.body.password, user.password)) {\n      return new HttpResponseRedirect('/login');\n    }\n\n    const session = await this.store.createAndSaveSessionFromUser(user);\n    const response = new HttpResponseRedirect('/home');\n    const token = session.getToken();\n    setSessionCookie(response, token);\n    return response;\n  }\n\n  @Post('/logout')\n  @TokenRequired({\n    cookie: true,\n    extendLifeTimeOrUpdate: false,\n    redirectTo: '/login',\n    store: TypeORMStore,\n  })\n  async logout(ctx: Context<any, Session>) {\n    await this.store.destroy(ctx.session.sessionID);\n    const response = new HttpResponseRedirect('/login');\n    removeSessionCookie(response);\n    return response;\n  }\n}\n")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"src/app/controllers/view.controller.ts")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"export class ViewController {\n  @Get('/home')\n  @TokenRequired({ store: TypeORMStore, cookie: true, redirectTo: '/login' })\n  home() {\n    return new HttpResponseOK('Home page');\n  }\n}\n")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"src/app/controllers/api.controller.ts")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"@TokenRequired({ store: TypeORMStore, cookie: true })\nexport class ApiController {\n  @Get('/products')\n  readProducts() {\n    return new HttpResponseOK([]);\n  }\n}\n")))}p.isMDXComponent=!0},251:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var o=n(0),s=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,s=function(e,t){if(null==e)return{};var n,o,s={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=s.a.createContext({}),p=function(e){var t=s.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return s.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},d=s.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(n),d=o,m=b["".concat(a,".").concat(d)]||b[d]||u[d]||r;return n?s.a.createElement(m,i(i({ref:t},l),{},{components:n})):s.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<r;l++)a[l]=n[l];return s.a.createElement.apply(null,a)}return s.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},348:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/auth-architecture-b33065fc731227be200c1fb1a412bf37.png"}}]);