(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{251:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),l=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var b=l.a.createContext({}),s=function(e){var t=l.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return l.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},u=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(n),u=a,m=p["".concat(o,".").concat(u)]||p[u]||d[u]||r;return n?l.a.createElement(m,i(i({ref:t},b),{},{components:n})):l.a.createElement(m,i({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var b=2;b<r;b++)o[b]=n[b];return l.a.createElement.apply(null,o)}return l.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},99:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(3),l=n(7),r=(n(0),n(251)),o={title:"Upload & Download Files"},i={unversionedId:"file-system/upload-and-download-files",id:"version-1.x/file-system/upload-and-download-files",isDocsHomePage:!1,title:"Upload & Download Files",description:"Files can be uploaded and downloaded using FoalTS file system. It allows you to use different types of file storage such as the local file system or cloud storage.",source:"@site/versioned_docs/version-1.x/file-system/upload-and-download-files.md",slug:"/file-system/upload-and-download-files",permalink:"/docs/1.x/file-system/upload-and-download-files",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/file-system/upload-and-download-files.md",version:"1.x",sidebar:"someSidebar",previous:{title:"Local & Cloud Storage",permalink:"/docs/1.x/file-system/local-and-cloud-storage"},next:{title:"Build & Start the App",permalink:"/docs/1.x/development-environment/build-and-start-the-app"}},c=[{value:"Configuration",id:"configuration",children:[]},{value:"File Uploads",id:"file-uploads",children:[{value:"Using Buffers",id:"using-buffers",children:[]},{value:"Using Local or Cloud Storage (streaming)",id:"using-local-or-cloud-storage-streaming",children:[]},{value:"Adding Fields",id:"adding-fields",children:[]},{value:"Specifying File Limits",id:"specifying-file-limits",children:[]}]},{value:"File Downloads",id:"file-downloads",children:[]},{value:"Usage with a Database",id:"usage-with-a-database",children:[]},{value:"Static Files",id:"static-files",children:[{value:"Static directory",id:"static-directory",children:[]},{value:"Virtual prefix path",id:"virtual-prefix-path",children:[]}]},{value:"Deprecated components",id:"deprecated-components",children:[{value:"The <code>createHttpResponseFile</code> function",id:"the-createhttpresponsefile-function",children:[]},{value:"The <code>@foal/formidable</code> package",id:"the-foalformidable-package",children:[]}]}],b={toc:c};function s(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Files can be uploaded and downloaded using ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.x/file-system/local-and-cloud-storage"}),"FoalTS file system"),". It allows you to use different types of file storage such as the local file system or cloud storage."),Object(r.b)("h2",{id:"configuration"},"Configuration"),Object(r.b)("p",null,"First install the package."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"npm install @foal/storage\n")),Object(r.b)("p",null,"Then specify in your configuration the file storage to be used and its settings. In this example, we will use the local file system with the ",Object(r.b)("inlineCode",{parentName:"p"},"uploaded")," directory (you must create it at the root of your project)."),Object(r.b)("p",null,'{% code-tabs %}\n{% code-tabs-item title="YAML" %}'),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"settings:\n  disk:\n    driver: 'local'\n    local:\n      directory: 'uploaded'\n")),Object(r.b)("p",null,'{% endcode-tabs-item %}\n{% code-tabs-item title="JSON" %}'),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "settings": {\n    "disk": {\n      "driver": "local",\n      "local": {\n        "directory": "uploaded"\n      }\n    }\n  }\n}\n')),Object(r.b)("p",null,'{% endcode-tabs-item %}\n{% code-tabs-item title=".env or environment variables" %}'),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"SETTINGS_DISK_DRIVER=local\nSETTINGS_DISK_LOCAL_DIRECTORY=uploaded\n")),Object(r.b)("p",null,"{% endcode-tabs-item %}\n{% endcode-tabs %}"),Object(r.b)("h2",{id:"file-uploads"},"File Uploads"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"This technique is available in Foal v1.7 onwards.")),Object(r.b)("p",null,"Files can be uploaded using ",Object(r.b)("inlineCode",{parentName:"p"},"multipart/form-data")," requests. The ",Object(r.b)("inlineCode",{parentName:"p"},"@ValidateMultipartFormDataBody")," hook parses the request body, validates the submitted fields and files and save them in streaming to your local or Cloud storage. It also provides the ability to create file buffers if you wish."),Object(r.b)("h3",{id:"using-buffers"},"Using Buffers"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { Context, Post } from '@foal/core';\nimport { ValidateMultipartFormDataBody } from '@foal/storage';\n\nexport class UserController {\n\n  @Post('/profile')\n  @ValidateMultipartFormDataBody({\n    files: {\n      profile: { required: true },\n      images: { required: false, multiple: true }\n    }\n  })\n  uploadProfilePhoto(ctx: Context) {\n    const buffer = ctx.request.body.files.profile;\n    const buffers = ctx.request.body.files.images;\n  }\n\n}\n")),Object(r.b)("p",null,"The names of the file fields must be provided in the ",Object(r.b)("inlineCode",{parentName:"p"},"files")," parameter of the hook. Uploaded files which are not listed here are simply ignored."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"required")," parameter tells the hook if it should return a ",Object(r.b)("inlineCode",{parentName:"p"},"400 - BAD REQUEST")," error if no file has been uploaded for the given field. In this case, the controller method is not executed."),Object(r.b)("p",null,"When the upload is successful, the request body object is set with the buffer files."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Value of ",Object(r.b)("inlineCode",{parentName:"th"},"multiple")),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Files uploaded"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Value in the request object"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"false")," (default)"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"None"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"null"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"At least one"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A buffer")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"true")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"None"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"An empty array")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"At least one"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"An array of buffers")))),Object(r.b)("h3",{id:"using-local-or-cloud-storage-streaming"},"Using Local or Cloud Storage (streaming)"),Object(r.b)("p",null,"Instead of using buffers, you can also choose to save directly the file to your local or Cloud storage. To do this, you need to add the name of the target directory in your hook options. The value returned in the ",Object(r.b)("inlineCode",{parentName:"p"},"ctx")," is an object containing the relative path of the file."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"With the previous configuration, this path is relative to the ",Object(r.b)("inlineCode",{parentName:"p"},"uploaded")," directory. Note that must create the ",Object(r.b)("inlineCode",{parentName:"p"},"uploaded/images")," and ",Object(r.b)("inlineCode",{parentName:"p"},"uploaded/images/profiles")," directories before you can upload a file.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { Context, Post } from '@foal/core';\nimport { ValidateMultipartFormDataBody } from '@foal/storage';\n\nexport class UserController {\n\n  @Post('/profile')\n  @ValidateMultipartFormDataBody({\n    files: {\n      profile: { required: true, saveTo: 'images/profiles' }\n    }\n  })\n  uploadProfilePhoto(ctx: Context) {\n    const { path } = ctx.request.body.files.profile;\n    // images/profiles/GxunLNJu3RXI9l7C7cQlBvXFQ+iqdxSRJmsR4TU+0Fo=.png\n  }\n\n}\n")),Object(r.b)("h3",{id:"adding-fields"},"Adding Fields"),Object(r.b)("p",null,"Multipart requests can also contain non-binary fields such as a string. These fields are validated and parsed by the hook."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { Context, Post } from '@foal/core';\nimport { ValidateMultipartFormDataBody } from '@foal/storage';\n\nexport class UserController {\n\n  @Post('/profile')\n  @ValidateMultipartFormDataBody({\n    fields: {\n      description: { type: 'string' }\n    },\n    files: {\n      profile: { required: true }\n    }\n  })\n  uploadProfilePhoto(ctx: Context) {\n    const { path } = ctx.request.body.files.profile;\n    // images/profiles/GxunLNJu3RXI9l7C7cQlBvXFQ+iqdxSRJmsR4TU+0Fo=.png\n    const { description } = ctx.request.body.fields;\n  }\n\n}\n")),Object(r.b)("h3",{id:"specifying-file-limits"},"Specifying File Limits"),Object(r.b)("p",null,"Optional settings can be provided in the configuration to limit the size or number of files uploaded."),Object(r.b)("p",null,'{% code-tabs %}\n{% code-tabs-item title="YAML" %}'),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"settings:\n  multipartRequests:\n    fileSizeLimit: 1024\n    fileNumberLimit: 4\n")),Object(r.b)("p",null,'{% endcode-tabs-item %}\n{% code-tabs-item title="JSON" %}'),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "settings": {\n    "multipartRequests": {\n      "fileSizeLimit": 1024,\n      "fileNumberLimit": 4,\n    }\n  }\n}\n')),Object(r.b)("p",null,'{% endcode-tabs-item %}\n{% code-tabs-item title=".env or environment variables" %}'),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"SETTINGS_MULTIPART_REQUESTS_FILE_SIZE_LIMIT=1024\nSETTINGS_MULTIPART_REQUESTS_FILE_NUMBER_LIMIT=4\n")),Object(r.b)("p",null,"{% endcode-tabs-item %}\n{% endcode-tabs %}"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Setting"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"fileSizeLimit"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The maximum file size (in bytes).")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"fileNumberLimit"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The maximum number of files (useful for ",Object(r.b)("inlineCode",{parentName:"td"},"multiple")," file fields).")))),Object(r.b)("h2",{id:"file-downloads"},"File Downloads"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"This technique is available in Foal v1.6 onwards.")),Object(r.b)("p",null,"Files can be downloaded using the method ",Object(r.b)("inlineCode",{parentName:"p"},"createHttpResponse")," of the ",Object(r.b)("inlineCode",{parentName:"p"},"Disk")," service. The returned object is optimized for downloading a (large) file in streaming."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { dependency, Get } from '@foal/core';\nimport { Disk } from '@foal/storage';\n\nclass ApiController {\n\n  @dependency\n  disk: Disk;\n\n  @Get('/download')\n  download() {\n    return this.disk.createHttpResponse('avatars/foo.jpg');\n  }\n\n  @Get('/download2')\n  download() {\n    return this.disk.createHttpResponse('avatars/foo.jpg', {\n      forceDownload: true,\n      filename: 'avatar.jpg'\n    });\n  }\n\n}\n")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Option"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"forceDownload"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"It indicates whether the response should include the ",Object(r.b)("inlineCode",{parentName:"td"},"Content-Disposition: attachment")," header. If this is the case, browsers will not attempt to display the returned file (e.g. with the browser's PDF viewer) and will download the file directly.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"filename"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Default name proposed by the browser when saving the file. If it is not specified, FoalTS extracts the name from the path (",Object(r.b)("inlineCode",{parentName:"td"},"foo.jpg")," in the example).")))),Object(r.b)("h2",{id:"usage-with-a-database"},"Usage with a Database"),Object(r.b)("p",null,"This example shows how to attach a profile picture to a user and how to retrieve and update it."),Object(r.b)("p",null,"Create a new directory ",Object(r.b)("inlineCode",{parentName:"p"},"uploaded/images/profiles")," at the root of your project."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"user.entity.ts")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import {\n  BaseEntity, Column, Entity, PrimaryGeneratedColumn\n} from 'typeorm';\n\n@Entity()\nexport class User extends BaseEntity {\n\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column()\n  profile: string;\n\n}\n")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"app.controller.ts")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { Context, createHttpResponseFile, dependency, Get, HttpResponseNotFound, HttpResponseRedirect, HttpResponseOK, Post, render } from '@foal/core';\nimport { Disk, ValidateMultipartFormDataBody } from '@foal/storage';\n\nimport { User } from './entities';\n\n// @JWTRequired OR @TokenRequired\n// OR a custom hook that sets Context.user.\nexport class AppController {\n\n  @dependency\n  disk: Disk;\n\n  @Post('/profile')\n  @ValidateMultipartFormDataBody({\n    files: {\n      profile: { required: true, saveTo: 'images/profiles' }\n    }\n  })\n  async uploadProfilePicture(ctx: Context<User>) {\n    const user = ctx.user;\n    if (user.profile) {\n      await this.disk.delete(user.profile);\n    }\n\n    user.profile = ctx.request.body.files.profile.path;\n    await user.save();\n\n    return new HttpResponseRedirect('/');\n  }\n\n  @Get('/profile')\n  async downloadProfilePicture(ctx: Context<User>) {\n    const { profile } = ctx.user;\n\n    if (!profile) {\n      return new HttpResponseNotFound();\n    }\n\n    return this.disk.createHttpResponse(profile);\n  }\n\n  @Get('/')\n  index() {\n    return render('./templates/index.html');\n  }\n\n}\n")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"templates/index.html")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html>\n<body>\n  <img src="/profile">\n  <form action="/profile" method="post" enctype="multipart/form-data">\n      <input type="file" name="profile">\n      <input type="submit" value="Upload image" name="submit">\n  </form>\n</body>\n</html>\n')),Object(r.b)("h2",{id:"static-files"},"Static Files"),Object(r.b)("p",null,"Static files, such as HTML, CSS, images, and JavaScript, are served by default from the ",Object(r.b)("inlineCode",{parentName:"p"},"public")," directory."),Object(r.b)("h3",{id:"static-directory"},"Static directory"),Object(r.b)("p",null,"If necessary, this directory can be modified using the configuration key ",Object(r.b)("inlineCode",{parentName:"p"},"settings.staticPath"),"."),Object(r.b)("p",null,'{% code-tabs %}\n{% code-tabs-item title="YAML" %}'),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"settings:\n  staticPath: assets\n")),Object(r.b)("p",null,'{% endcode-tabs-item %}\n{% code-tabs-item title="JSON" %}'),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "settings": {\n    "staticPath": "assets"\n  }\n}\n')),Object(r.b)("p",null,'{% endcode-tabs-item %}\n{% code-tabs-item title=".env or environment variables" %}'),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"SETTINGS_STATIC_PATH=assets\n")),Object(r.b)("p",null,"{% endcode-tabs-item %}\n{% endcode-tabs %}"),Object(r.b)("h3",{id:"virtual-prefix-path"},"Virtual prefix path"),Object(r.b)("p",null,"In case you need to add a virtual prefix path to your static files, you can do so with the ",Object(r.b)("inlineCode",{parentName:"p"},"staticPathPrefix")," configuration key."),Object(r.b)("p",null,'{% code-tabs %}\n{% code-tabs-item title="YAML" %}'),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"settings:\n  staticPathPrefix: /static\n")),Object(r.b)("p",null,'{% endcode-tabs-item %}\n{% code-tabs-item title="JSON" %}'),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "settings": {\n    "staticPathPrefix": "/static"\n  }\n}\n')),Object(r.b)("p",null,'{% endcode-tabs-item %}\n{% code-tabs-item title=".env or environment variables" %}'),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"SETTINGS_STATIC_PATH_PREFIX=/static\n")),Object(r.b)("p",null,"{% endcode-tabs-item %}\n{% endcode-tabs %}"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Example"),"\n| Static file | URL path with no prefix | URL path with the prefix ",Object(r.b)("inlineCode",{parentName:"p"},"/static "),"|\n| --- | --- | --- |\n| index.html | ",Object(r.b)("inlineCode",{parentName:"p"},"/")," and ",Object(r.b)("inlineCode",{parentName:"p"},"/index.html")," | ",Object(r.b)("inlineCode",{parentName:"p"},"/static")," and ",Object(r.b)("inlineCode",{parentName:"p"},"/static/index.html")," |\n| styles.css | ",Object(r.b)("inlineCode",{parentName:"p"},"/styles.css")," | ",Object(r.b)("inlineCode",{parentName:"p"},"/static/styles.css")," |\n| app.js | ",Object(r.b)("inlineCode",{parentName:"p"},"/app.js")," | ",Object(r.b)("inlineCode",{parentName:"p"},"/static/app.js")," |"),Object(r.b)("h2",{id:"deprecated-components"},"Deprecated components"),Object(r.b)("h3",{id:"the-createhttpresponsefile-function"},"The ",Object(r.b)("inlineCode",{parentName:"h3"},"createHttpResponseFile")," function"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("em",{parentName:"p"},"Deprecated since v1.6. Use the method ",Object(r.b)("inlineCode",{parentName:"em"},"createHttpResponseFile")," of the ",Object(r.b)("inlineCode",{parentName:"em"},"Disk")," service instead."))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Warning:")," This package only allows you to download files from your local file system. It does not work with Cloud storage.")),Object(r.b)("p",null,"FoalTS provides the function ",Object(r.b)("inlineCode",{parentName:"p"},"createHttpResponseFile")," to download files in the browser from the server's local file system."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { createHttpResponseFile, Get } from '@foal/core';\n\nclass AppController {\n\n  @Get('/download')\n  download() {\n    return createHttpResponseFile({\n      directory: 'uploaded/',\n      file: 'my-pdf.pdf'\n    });\n  }\n\n}\n")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Option"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"directory"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Path of the directory where the file is located (e.g. ",Object(r.b)("inlineCode",{parentName:"td"},"uploaded/"),").")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"file"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Name of the file with its extension (e.g. ",Object(r.b)("inlineCode",{parentName:"td"},"report.pdf"),"). If the string provided is a path (e.g. ",Object(r.b)("inlineCode",{parentName:"td"},"downloaded/report.pdf"),"), then Foal will automatically extract the filename (i.e. ",Object(r.b)("inlineCode",{parentName:"td"},"report.pdf"),").")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"forceDownload (optional)"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"It indicates whether the response should include the ",Object(r.b)("inlineCode",{parentName:"td"},"Content-Disposition: attachment")," header. If this is the case, browsers will not attempt to display the returned file (e.g. with the browser's PDF viewer) and will download the file directly.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"filename (optional)"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Default name proposed by the browser when saving the file. If it is not specified, FoalTS extracts the name from the ",Object(r.b)("inlineCode",{parentName:"td"},"file")," option.")))),Object(r.b)("h3",{id:"the-foalformidable-package"},"The ",Object(r.b)("inlineCode",{parentName:"h3"},"@foal/formidable")," package"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("em",{parentName:"p"},"Deprecated since v1.7. Use the ",Object(r.b)("inlineCode",{parentName:"em"},"@ValidateMultipartFormDataBody")," hook instead."))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Warning:")," This package only allows you to upload files to your local file system. It does not work with Cloud storage.")),Object(r.b)("p",null,"You can upload files to your local file system using the library ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/formidable"}),"formidable"),". It will automatically parse the incoming form and save the submitted file(s) in the directory of your choice. A random id is generated for each saved file."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm install formidable @types/formidable\nnpm install @foal/formidable\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"The package ",Object(r.b)("inlineCode",{parentName:"p"},"@foal/formidable")," is a small package that allows you to use ",Object(r.b)("inlineCode",{parentName:"p"},"formidable")," with promises. It only has one function: ",Object(r.b)("inlineCode",{parentName:"p"},"parseForm"),".")),Object(r.b)("p",null,"Assuming that the client submits a form with a field named ",Object(r.b)("inlineCode",{parentName:"p"},"file1")," containing a file, you can save this file using ",Object(r.b)("inlineCode",{parentName:"p"},"IncomingForm")," and ",Object(r.b)("inlineCode",{parentName:"p"},"parseForm"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'import { Context, HttpResponseOK, Post } from \'@foal/core\';\nimport { parseForm } from \'@foal/formidable\';\nimport { IncomingForm } from \'formidable\';\n\nexport class AppController {\n\n  @Post(\'/upload\')\n  async upload(ctx: Context) {\n    const form = new IncomingForm();\n    form.uploadDir = \'uploaded\';\n    form.keepExtensions = true;\n    const { fields, files } = await parseForm(form, ctx);\n\n    console.log(files.file1);\n    // {\n    //   "size": 14911887,\n    //   "path": "uploaded/upload_de9cb95c.pdf",\n    //   "name": "example.pdf",\n    //   "type": "application/pdf",\n    //   "mtime": "2019-03-25T13:58:27.988Z"\n    // }\n\n    return new HttpResponseOK(\n      \'The file has correctly been uploaded. \'\n      + \'You can find it on the server at \'\n      + files.file1.path\n    );\n  }\n\n}\n')))}s.isMDXComponent=!0}}]);