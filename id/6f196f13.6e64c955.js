(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{154:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(271)),i={title:"The Shell Scripts"},s={unversionedId:"tutorials/multi-user-todo-list/3-the-shell-scripts",id:"version-1.x/tutorials/multi-user-todo-list/3-the-shell-scripts",isDocsHomePage:!1,title:"The Shell Scripts",description:"Like in the previous tutorial, you are going to use shell scripts to populate the database.",source:"@site/versioned_docs/version-1.x/tutorials/multi-user-todo-list/3-the-shell-scripts.md",slug:"/tutorials/multi-user-todo-list/3-the-shell-scripts",permalink:"/id/docs/1.x/tutorials/multi-user-todo-list/3-the-shell-scripts",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/tutorials/multi-user-todo-list/3-the-shell-scripts.md",version:"1.x",sidebar:"someSidebar",previous:{title:"The User & Todo Models",permalink:"/id/docs/1.x/tutorials/multi-user-todo-list/2-the-user-and-todo-models"},next:{title:"Auth Controllers and Hooks",permalink:"/id/docs/1.x/tutorials/multi-user-todo-list/5-auth-controllers-and-hooks"}},c=[{value:"The <code>create-user</code> script",id:"the-create-user-script",children:[]},{value:"The <code>create-todo</code> script",id:"the-create-todo-script",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Like in the previous tutorial, you are going to use shell scripts to populate the database."),Object(a.b)("h2",{id:"the-create-user-script"},"The ",Object(a.b)("inlineCode",{parentName:"h2"},"create-user")," script"),Object(a.b)("p",null,"A script called ",Object(a.b)("inlineCode",{parentName:"p"},"create-user")," already exists in the ",Object(a.b)("inlineCode",{parentName:"p"},"scripts/")," directory. It has a lot of commented lines that let you create users with ",Object(a.b)("em",{parentName:"p"},"permissions")," and ",Object(a.b)("em",{parentName:"p"},"groups"),"."),Object(a.b)("p",null,"Open the file and replace its content with the following:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"// 3p\nimport { isCommon } from '@foal/password';\nimport { createConnection } from 'typeorm';\n\n// App\nimport { User } from '../app/entities';\n\nexport const schema = {\n  additionalProperties: false,\n  properties: {\n    email: { type: 'string', format: 'email' },\n    password: { type: 'string' },\n  },\n  required: [ 'email', 'password' ],\n  type: 'object',\n};\n\nexport async function main(args: { email: string; password: string }) {\n  const connection = await createConnection();\n  try {\n    const user = new User();\n    user.email = args.email;\n\n    if (await isCommon(args.password)) {\n      console.log('This password is too common. Please choose another one.');\n      return;\n    }\n    await user.setPassword(args.password);\n\n    console.log(\n      await connection.manager.save(user)\n    );\n  } catch (error) {\n    console.log(error.message);\n  } finally {\n    await connection.close();\n  }\n}\n\n")),Object(a.b)("p",null,"Some parts of this code should look familiar."),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"schema")," object is used to validate the arguments typed in the command line. In that case, the script defines two required parameters: an email and a password. The ",Object(a.b)("inlineCode",{parentName:"p"},"format")," property checks that the ",Object(a.b)("inlineCode",{parentName:"p"},"email")," string is really an email (presence of the ",Object(a.b)("inlineCode",{parentName:"p"},"@")," character, etc). "),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"main")," function is divided in several parts. First it instanciates a connection to the database. Then, it creates a new user with the arguments specified in the command line. The ",Object(a.b)("inlineCode",{parentName:"p"},"isCommon")," function compares the given password with a list of ten thousands common passwords (ex: ",Object(a.b)("inlineCode",{parentName:"p"},"123456"),", ",Object(a.b)("inlineCode",{parentName:"p"},"password"),", etc). It returns true if it is found in the list. Finally the user is saved in the database and, if an error is thrown, the error message is pretty printed."),Object(a.b)("p",null,"As you may have noticed, the ",Object(a.b)("inlineCode",{parentName:"p"},"isCommon")," utility comes from the ",Object(a.b)("inlineCode",{parentName:"p"},"@foal/password")," package. You have to install it."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"npm install @foal/password\n")),Object(a.b)("p",null,"Now build the script."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"npm run build:scripts\n")),Object(a.b)("p",null,"Create two new users."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'foal run create-user email="john@foalts.org" password="john_password"\nfoal run create-user email="mary@foalts.org" password="mary_password"\n')),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"If you try to re-run one of these commands, you'll get the error below as the email key is unique.\n",Object(a.b)("inlineCode",{parentName:"p"},"SQLITE_CONSTRAINT: UNIQUE constraint failed: user.email"))),Object(a.b)("h2",{id:"the-create-todo-script"},"The ",Object(a.b)("inlineCode",{parentName:"h2"},"create-todo")," script"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"create-todo")," script is a bit more complex as ",Object(a.b)("inlineCode",{parentName:"p"},"Todo")," has a many-to-one relation with ",Object(a.b)("inlineCode",{parentName:"p"},"User"),"."),Object(a.b)("p",null,"Open the ",Object(a.b)("inlineCode",{parentName:"p"},"create-todo.ts")," file and replace its content."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"// 3p\nimport { createConnection } from 'typeorm';\n\n// App\nimport { Todo, User } from '../app/entities';\n\nexport const schema = {\n  properties: {\n    owner: { type: 'string', format: 'email' },\n    text: { type: 'string' },\n  },\n  required: [ 'owner', 'text' ],\n  type: 'object',\n};\n\nexport async function main(args: { owner: string; text: string }) {\n  const connection = await createConnection();\n  try {\n    const user = await connection.getRepository(User).findOne({ email: args.owner });\n\n    if (!user) {\n      console.log('No user was found with the email ' + args.owner);\n      return;\n    }\n\n    const todo = new Todo();\n    todo.text = args.text;\n    todo.owner = user;\n\n    console.log(\n      await connection.manager.save(todo)\n    );\n  } catch (error) {\n    console.log(error.message);\n  } finally {\n    await connection.close();\n  }\n}\n\n")),Object(a.b)("p",null,"We added an ",Object(a.b)("inlineCode",{parentName:"p"},"owner")," parameter to know which user the todo belongs to. It expects the email of the user."),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"main")," function then tries to get the user who has this email. If he or she does not exist, then the script terminates with a message displayed in the console. If not, the user is added to the todo as her/his owner."),Object(a.b)("p",null,"Build the script."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"npm run build:scripts\n")),Object(a.b)("p",null,"Create new todos for each user."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'foal run create-todo owner="john@foalts.org" text="John task 1"\nfoal run create-todo owner="john@foalts.org" text="John task 2"\nfoal run create-todo owner="mary@foalts.org" text="Mary task 1"\nfoal run create-todo owner="mary@foalts.org" text="Mary task 2"\n')))}p.isMDXComponent=!0},271:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,b=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return n?o.a.createElement(b,s(s({ref:t},l),{},{components:n})):o.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);