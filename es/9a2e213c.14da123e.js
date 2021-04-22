(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{188:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return b}));var s=n(3),a=n(7),r=(n(0),n(271)),o=n(275),i=n(276),l={title:"What's new in version 2 (part 4/4)",author:"Lo\xefc Poullain",author_title:"Fullstack developper and creator of FoalTS",author_url:"https://github.com/LoicPoullain",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/whats-new-in-version-2-part-4.png",tags:["release"]},c={permalink:"/es/blog/2021/04/08/whats-new-in-version-2-part-4",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/blog/2021-04-08-whats-new-in-version-2-part-4.md",source:"@site/blog/2021-04-08-whats-new-in-version-2-part-4.md",description:"Banner",date:"2021-04-08T00:00:00.000Z",tags:[{label:"release",permalink:"/es/blog/tags/release"}],title:"What's new in version 2 (part 4/4)",readingTime:5.675,truncated:!0,prevItem:{title:"Version 2.3 release notes",permalink:"/es/blog/2021/04/22/version-2.3-release-notes"},nextItem:{title:"What's new in version 2 (part 3/4)",permalink:"/es/blog/2021/03/11/whats-new-in-version-2-part-3"}},u=[{value:"New Session System",id:"new-session-system",children:[{value:"Example with the <code>Authorization</code> header",id:"example-with-the-authorization-header",children:[]},{value:"Example with cookies",id:"example-with-cookies",children:[]},{value:"New features",id:"new-features",children:[]}]},{value:"Stateful CSRF protection simplified",id:"stateful-csrf-protection-simplified",children:[]}],p={toc:u};function b(e){var t=e.components,l=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(s.a)({},p,l,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("img",{alt:"Banner",src:n(301).default})),Object(r.b)("p",null,"This article presents the improvements to the session system in FoalTS version 2."),Object(r.b)("p",null,"The new syntax can be used either with cookies or with the ",Object(r.b)("inlineCode",{parentName:"p"},"Authorization")," header. It adds the following new features:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"query all sessions of a given user"),Object(r.b)("li",{parentName:"ul"},"query all connected users"),Object(r.b)("li",{parentName:"ul"},"force logout of a specific user"),Object(r.b)("li",{parentName:"ul"},"flash sessions"),Object(r.b)("li",{parentName:"ul"},"session ID regeneration"),Object(r.b)("li",{parentName:"ul"},"anonymous and authenticated sessions")),Object(r.b)("p",null,"FoalTS also simplifies stateful CSRF protection so that all it takes is one setting to enable it."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"This article is the part 4 of the series of articles ",Object(r.b)("em",{parentName:"p"},"What's new in version 2.0"),". Part 3 can be found ",Object(r.b)("a",Object(s.a)({parentName:"p"},{href:"/es/blog/2021/03/11/whats-new-in-version-2-part-3"}),"here"),".")),Object(r.b)("h2",{id:"new-session-system"},"New Session System"),Object(r.b)("p",null,"The new authentication system is probably the main new feature of version 2. The old session components have been redesigned so as to serve three purposes:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"be easy to use with very little code,"),Object(r.b)("li",{parentName:"ul"},"support a large variety of applications and architectures (SPA, Mobile, SSR, API, ",Object(r.b)("inlineCode",{parentName:"li"},"Authorization")," header, cookies, serverless environment, social auth, etc),"),Object(r.b)("li",{parentName:"ul"},"and add missing features impossible to implement in version 1.")),Object(r.b)("p",null,"Here is the way to use it:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"First ",Object(r.b)("a",Object(s.a)({parentName:"li"},{href:"/docs/authentication-and-access-control/session-tokens#choosing-a-session-store"}),"specify in the configuration")," where your sessions should be stored (SQL database, redis, Mongo, etc)."),Object(r.b)("li",{parentName:"ul"},"Then decorate any route or controller that need authentication with ",Object(r.b)("inlineCode",{parentName:"li"},"@UseSessions"),".")),Object(r.b)("h3",{id:"example-with-the-authorization-header"},"Example with the ",Object(r.b)("inlineCode",{parentName:"h3"},"Authorization")," header"),Object(r.b)("p",null,"In this first example, we'd like to use the ",Object(r.b)("inlineCode",{parentName:"p"},"Authorization")," header to handle authentication."),Object(r.b)("p",null,"We want to send an email address and password to ",Object(r.b)("inlineCode",{parentName:"p"},"/login")," and retrieve a token in return to authenticate further requests."),Object(r.b)("pre",null,Object(r.b)("code",Object(s.a)({parentName:"pre"},{className:"language-typescript"}),"import { dependency, Context, Get, HttpResponseOK, UserRequired, UseSessions, ValidateBody, HttpResponseUnauthorized, Post } from '@foal/core';\nimport { fetchUser } from '@foal/typeorm';\n\nimport { User, Product } from '../entities';\n\n@UseSessions({\n  user: fetchUser(User)\n})\nexport class ApiController {\n  @dependency\n  store: Store;\n\n  @Get('/products')\n  @UserRequired()\n  async readProducts(ctx: Context<User>) {\n    return new HttpResponseOK(Product.find({ user: ctx.user }));\n  }\n\n  @Post('/login')\n  @ValidateBody({\n    additionalProperties: false,\n    properties: {\n      email: { type: 'string', format: 'email' },\n      password: { type: 'string' }\n    },\n    required: [ 'email', 'password' ],\n    type: 'object',\n  })\n  async login(ctx: Context) {\n    const user = await User.findOne({ email: ctx.request.body.email });\n\n    if (!user) {\n      return new HttpResponseUnauthorized();\n    }\n\n    if (!await verifyPassword(ctx.request.body.password, user.password)) {\n      return new HttpResponseUnauthorized();\n    }\n\n    ctx.session = await createSession(this.store);\n    ctx.session.setUser(user);\n\n    return new HttpResponseOK({\n      token: ctx.session.getToken()\n    });\n  }\n\n  @Post('/logout')\n  async logout(ctx: Context) {\n    if (ctx.session) {\n      await ctx.session.destroy();\n    }\n\n    return new HttpResponseOK();\n  }\n}\n")),Object(r.b)("h3",{id:"example-with-cookies"},"Example with cookies"),Object(r.b)("p",null,"In this second example, we will use cookies to manage authentication. Foal will auto-creates a session when none exists."),Object(r.b)("pre",null,Object(r.b)("code",Object(s.a)({parentName:"pre"},{className:"language-typescript"}),"import { dependency, Context, Get, HttpResponseOK, UserRequired, UseSessions, ValidateBody, HttpResponseUnauthorized, Post } from '@foal/core';\nimport { fetchUser } from '@foal/typeorm';\n\nimport { User, Product } from '../entities';\n\n@UseSessions({\n  // highlight-next-line\n  cookie: true,\n  user: fetchUser(User)\n})\nexport class ApiController {\n  @dependency\n  store: Store;\n\n  @Get('/products')\n  @UserRequired()\n  async readProducts(ctx: Context<User>) {\n    return new HttpResponseOK(Product.find({ user: ctx.user }));\n  }\n\n  @Post('/login')\n  @ValidateBody({\n    additionalProperties: false,\n    properties: {\n      email: { type: 'string', format: 'email' },\n      password: { type: 'string' }\n    },\n    required: [ 'email', 'password' ],\n    type: 'object',\n  })\n  async login(ctx: Context) {\n    const user = await User.findOne({ email: ctx.request.body.email });\n\n    if (!user) {\n      return new HttpResponseUnauthorized();\n    }\n\n    if (!await verifyPassword(ctx.request.body.password, user.password)) {\n      return new HttpResponseUnauthorized();\n    }\n\n    // highlight-next-line\n    ctx.session.setUser(user);\n\n    // highlight-next-line\n    return new HttpResponseOK();\n  }\n\n  @Post('/logout')\n  async logout(ctx: Context) {\n    if (ctx.session) {\n      await ctx.session.destroy();\n    }\n\n    return new HttpResponseOK();\n  }\n}\n")),Object(r.b)("h3",{id:"new-features"},"New features"),Object(r.b)("p",null,"In addition to this redesign, version 2 also offers new features."),Object(r.b)("h4",{id:"query-all-sessions-of-a-user-typeorm-only"},"Query all sessions of a user (TypeORM only)"),Object(r.b)("p",null,"This feature allows you to list all sessions associated with a specific user. This can be useful if a user is connected on several devices and you like to audit them."),Object(r.b)("pre",null,Object(r.b)("code",Object(s.a)({parentName:"pre"},{className:"language-typescript"}),"const user = { id: 1 };\nconst ids = await store.getSessionIDsOf(user);\n")),Object(r.b)("h4",{id:"query-all-connected-users-typeorm-only"},"Query all connected users (TypeORM only)"),Object(r.b)("p",null,"This feature lists all users that have at least one session in the database."),Object(r.b)("pre",null,Object(r.b)("code",Object(s.a)({parentName:"pre"},{className:"language-typescript"}),"const ids = await store.getAuthenticatedUserIds();\n")),Object(r.b)("h4",{id:"force-the-disconnection-of-a-user-typeorm-only"},"Force the disconnection of a user (TypeORM only)"),Object(r.b)("p",null,"In case you want to remove all sessions associated with a specific user, you can use the ",Object(r.b)("inlineCode",{parentName:"p"},"destroyAllSessionsOf")," method. This can be useful if you think a session has been corrupted or when you want, for example when a password is changed, to disconnect a user from all other devices to which he/she has previously logged on."),Object(r.b)("pre",null,Object(r.b)("code",Object(s.a)({parentName:"pre"},{className:"language-typescript"}),"const user = { id: 1 };\nawait store.destroyAllSessionsOf(user);\n")),Object(r.b)("h4",{id:"flash-sessions"},"Flash sessions"),Object(r.b)("p",null,"Flash content is used when we want to save data (a message for example) only for the next request. A typical use case is when a user enters wrong credentials. The page is refreshed and an error message is displayed."),Object(r.b)("p",null,"To use flash content, you only need to add the option ",Object(r.b)("inlineCode",{parentName:"p"},"flash")," set to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," in the ",Object(r.b)("inlineCode",{parentName:"p"},"set")," method."),Object(r.b)("pre",null,Object(r.b)("code",Object(s.a)({parentName:"pre"},{className:"language-typescript"}),"ctx.session.set('error', 'Incorrect email or password', { flash: true });\n")),Object(r.b)("h4",{id:"regenerate-the-session-id"},"Regenerate the session ID"),Object(r.b)("p",null,"Regenerating the session ID is a ",Object(r.b)("a",Object(s.a)({parentName:"p"},{href:"https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html#renew-the-session-id-after-any-privilege-level-change"}),"recommended practice")," when changing a user's privileges or password. This can now be done with the ",Object(r.b)("inlineCode",{parentName:"p"},"regenerateID")," method"),Object(r.b)("pre",null,Object(r.b)("code",Object(s.a)({parentName:"pre"},{className:"language-typescript"}),"await ctx.session.regenerateID();\n")),Object(r.b)("h4",{id:"expired-sessions-clean-up-regularly-typeorm-and-mongodb"},"Expired sessions clean up regularly (TypeORM and MongoDB)"),Object(r.b)("p",null,"Starting from version 2, Foal regularly cleanup expired sessions in your database so you don't have to do it manually."),Object(r.b)("h4",{id:"anonymous-sessions-and-templates"},"Anonymous sessions and templates"),Object(r.b)("p",null,"In version 2, ",Object(r.b)("inlineCode",{parentName:"p"},"@UseSessions({ cookie: true })")," automatically creates a session if none exists. This is particularly useful if you're building a shopping website with SSR templates. When the user navigates on the website, he/she can add items to the cart without having to log in the first place. Then, when the user wants to place his/her order, he can log in and the only thing you have to do is this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(s.a)({parentName:"pre"},{className:"language-typescript"}),"ctx.session.setUser(user)\n")),Object(r.b)("h2",{id:"stateful-csrf-protection-simplified"},"Stateful CSRF protection simplified"),Object(r.b)("p",null,"In version 1, providing a CSRF protection was quite complex. We needed to manage token generation, handle the CSRF cookie (expiration, etc), use an additional hook, etc."),Object(r.b)("p",null,"Starting from version 2, the CSRF protection is all managed by ",Object(r.b)("inlineCode",{parentName:"p"},"@UseSessions"),"."),Object(r.b)(o.a,{groupId:"config",defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"yaml",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(s.a)({parentName:"pre"},{className:"language-yaml"}),"settings:\n  session:\n    csrf:\n      enabled: true\n"))),Object(r.b)(i.a,{value:"json",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(s.a)({parentName:"pre"},{className:"language-json"}),'{\n  "settings": {\n    "session": {\n      "csrf": {\n        "enabled": true\n      }\n    }\n  }\n}\n'))),Object(r.b)(i.a,{value:"js",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(s.a)({parentName:"pre"},{className:"language-javascript"}),"module.exports = {\n  settings: {\n    session: {\n      csrf: {\n        enabled: true\n      }\n    }\n  }\n}\n")))),Object(r.b)("p",null,"When it is enabled, an additional ",Object(r.b)("inlineCode",{parentName:"p"},"XSRF-TOKEN")," cookie is sent to the client at the same time as the session cookie. It contains a CSRF token associated with your session."),Object(r.b)("p",null,"When a request is made to the server, the ",Object(r.b)("inlineCode",{parentName:"p"},"@UseSessions")," hooks expects you to include its value in the ",Object(r.b)("inlineCode",{parentName:"p"},"XSRF-TOKEN")," header."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"If you're building a regular web application and want to include the CSRF token in your templates, you can retrieve it with this statement: ",Object(r.b)("inlineCode",{parentName:"p"},"ctx.session.get('csrfToken')"),".")))}b.isMDXComponent=!0},271:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var s=n(0),a=n.n(s);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=s,h=p["".concat(o,".").concat(d)]||p[d]||b[d]||r;return n?a.a.createElement(h,i(i({ref:t},c),{},{components:n})):a.a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,o=new Array(r);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var c=2;c<r;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},272:function(e,t,n){"use strict";function s(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=s(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=s(e))&&(a&&(a+=" "),a+=t);return a}},273:function(e,t,n){"use strict";var s=n(0),a=n(274);t.a=function(){var e=Object(s.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},274:function(e,t,n){"use strict";var s=n(0),a=Object(s.createContext)(void 0);t.a=a},275:function(e,t,n){"use strict";var s=n(0),a=n.n(s),r=n(273),o=n(272),i=n(56),l=n.n(i),c=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,i=e.defaultValue,p=e.values,b=e.groupId,d=e.className,h=Object(r.a)(),m=h.tabGroupChoices,f=h.setTabGroupChoices,O=Object(s.useState)(i),y=O[0],g=O[1],j=s.Children.toArray(e.children);if(null!=b){var w=m[b];null!=w&&w!==y&&p.some((function(e){return e.value===w}))&&g(w)}var v=function(e){g(e),null!=b&&f(b,e)},x=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},d)},p.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===t,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e)},onFocus:function(){return v(t)},onClick:function(){v(t)}},n)}))),t?Object(s.cloneElement)(j.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(s.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},276:function(e,t,n){"use strict";var s=n(3),a=n(0),r=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return r.a.createElement("div",Object(s.a)({role:"tabpanel"},{hidden:n,className:a}),t)}},301:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/banner-4a0daa4160e81b0b7922d53453c9e04f.png"}}]);