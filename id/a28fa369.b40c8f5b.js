(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{192:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(3),i=n(7),o=(n(0),n(271)),r={title:"Local & Cloud Storage"},l={unversionedId:"file-system/local-and-cloud-storage",id:"version-1.x/file-system/local-and-cloud-storage",isDocsHomePage:!1,title:"Local & Cloud Storage",description:"File storage is available in Foal v1.6 onwards.",source:"@site/versioned_docs/version-1.x/file-system/local-and-cloud-storage.md",slug:"/file-system/local-and-cloud-storage",permalink:"/id/docs/1.x/file-system/local-and-cloud-storage",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/file-system/local-and-cloud-storage.md",version:"1.x",sidebar:"someSidebar",previous:{title:"Nuxt.js",permalink:"/id/docs/1.x/frontend-integration/nuxt.js"},next:{title:"Upload & Download Files",permalink:"/id/docs/1.x/file-system/upload-and-download-files"}},s=[{value:"Configuration",id:"configuration",children:[{value:"Local storage",id:"local-storage",children:[]},{value:"AWS S3",id:"aws-s3",children:[]},{value:"DigitalOcean",id:"digitalocean",children:[]}]},{value:"Read, Write and Delete Files",id:"read-write-and-delete-files",children:[{value:"Read files",id:"read-files",children:[]},{value:"Write files",id:"write-files",children:[]},{value:"Delete files",id:"delete-files",children:[]},{value:"Create an HttpResponse",id:"create-an-httpresponse",children:[]}]},{value:"Using a Specific Storage",id:"using-a-specific-storage",children:[]},{value:"Implementing a Disk",id:"implementing-a-disk",children:[]}],c={toc:s};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"File storage is available in Foal v1.6 onwards.")),Object(o.b)("p",null,"FoalTS provides its own file system for reading, writing and deleting files locally or in the Cloud. Thanks to its unified interface, you can easily choose different storage for each of your environments. This is especially useful when you're moving from development to production."),Object(o.b)("p",null,"For example, when coding the application locally, you can use the file system of your operating system. Then, when deploying the application to staging or production, you can change the configuration to use AWS S3. Regardless of the storage chosen in the background, the code remains the same. Only the configuration changes."),Object(o.b)("p",null,"Using FoalTS' file system has many other advantages as well:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"It can generate a unique random name when saving a new file (with the ability to add an extension if necessary)."),Object(o.b)("li",{parentName:"ul"},"File contents can be managed using buffers or streams."),Object(o.b)("li",{parentName:"ul"},"Stream errors are correctly handled to avoid crashing the server."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"Not found")," errors are unified with a single ",Object(o.b)("inlineCode",{parentName:"li"},"FileDoesNotExist")," error."),Object(o.b)("li",{parentName:"ul"},"FoalTS' file system can generate an ",Object(o.b)("inlineCode",{parentName:"li"},"HttpResponse"),"  to correctly download (large) files to the browser.")),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"First install the package."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"npm install @foal/storage\n")),Object(o.b)("p",null,"Next, you will need to provide the name of the storage to be used with the configuration key ",Object(o.b)("inlineCode",{parentName:"p"},"setings.disk.driver"),". In the case of the local filesystem, this is ",Object(o.b)("inlineCode",{parentName:"p"},"local"),". In other cases, an additional package must be installed. Then the name to be provided is the name of the package."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"settings:\n  disk:\n    driver: local\n")),Object(o.b)("h3",{id:"local-storage"},"Local storage"),Object(o.b)("p",null,"The name of the directory where the files are located is specified with the configuration key ",Object(o.b)("inlineCode",{parentName:"p"},"settings.disk.local.directory"),"."),Object(o.b)("p",null,'{% code-tabs %}\n{% code-tabs-item title="YAML" %}'),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"settings:\n  disk:\n    driver: 'local'\n    local:\n      directory: 'uploaded'\n")),Object(o.b)("p",null,'{% endcode-tabs-item %}\n{% code-tabs-item title="JSON" %}'),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "settings": {\n    "disk": {\n      "driver": "local",\n      "local": {\n        "directory": "uploaded"\n      }\n    }\n  }\n}\n')),Object(o.b)("p",null,'{% endcode-tabs-item %}\n{% code-tabs-item title=".env or environment variables" %}'),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"SETTINGS_DISK_DRIVER=local\nSETTINGS_DISK_LOCAL_DIRECTORY=uploaded\n")),Object(o.b)("p",null,"{% endcode-tabs-item %}\n{% endcode-tabs %}"),Object(o.b)("h3",{id:"aws-s3"},"AWS S3"),Object(o.b)("p",null,"AWS storage requires the installation of an additional package."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"npm install @foal/aws-s3\n")),Object(o.b)("p",null,"The bucket name is specified with the ",Object(o.b)("inlineCode",{parentName:"p"},"settings.disk.s3.bucket")," configuration key."),Object(o.b)("p",null,"AWS credentials are specified with the configuration keys ",Object(o.b)("inlineCode",{parentName:"p"},"settings.aws.accessKeyId")," and ",Object(o.b)("inlineCode",{parentName:"p"},"settings.aws.secretAccessKey"),"  or using ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/loading-node-credentials-shared.html"}),"AWS traditional techniques"),"."),Object(o.b)("p",null,'{% code-tabs %}\n{% code-tabs-item title="YAML" %}'),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"settings:\n  aws:\n    accessKeyId: xxx\n    secretAccessKey: yyy\n  disk:\n    driver: '@foal/aws-s3'\n    s3:\n      bucket: 'uploaded'\n")),Object(o.b)("p",null,'{% endcode-tabs-item %}\n{% code-tabs-item title="JSON" %}'),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "settings": {\n    "aws": {\n      "accessKeyId": "xxx",\n      "secretAccessKey": "yyy"\n    },\n    "disk": {\n      "driver": "@foal/aws-s3",\n      "s3": {\n        "bucket": "uploaded"\n      }\n    }\n  }\n}\n')),Object(o.b)("p",null,'{% endcode-tabs-item %}\n{% code-tabs-item title=".env or environment variables" %}'),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"SETTINGS_DISK_DRIVER=@foal/aws-s3\nSETTINGS_DISK_S3_BUCKET=uploaded\n")),Object(o.b)("p",null,"{% endcode-tabs-item %}\n{% endcode-tabs %}"),Object(o.b)("h3",{id:"digitalocean"},"DigitalOcean"),Object(o.b)("p",null,"DigitalOcean Spaces are compatible with AWS S3 API, so you can use the ",Object(o.b)("inlineCode",{parentName:"p"},"@foal/aws-s3")," package to connect to this storage."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"npm install @foal/aws-s3\n")),Object(o.b)("p",null,"The only difference is the configuration key ",Object(o.b)("inlineCode",{parentName:"p"},"settings.aws.endpoint"),", which is mandatory and requires the value ",Object(o.b)("inlineCode",{parentName:"p"},"${REGION}.digitaloceanspaces.com"),"."),Object(o.b)("h2",{id:"read-write-and-delete-files"},"Read, Write and Delete Files"),Object(o.b)("p",null,"FoalTS file system is accessible via the ",Object(o.b)("inlineCode",{parentName:"p"},"Disk")," service. It contains all the methods for reading, writing and deleting files."),Object(o.b)("h3",{id:"read-files"},"Read files"),Object(o.b)("p",null,"Files can be read using the asynchronous ",Object(o.b)("inlineCode",{parentName:"p"},"read")," method. It returns the size of the file as well as its contents in the form of a buffer or a readable stream. If the file does not exist, a ",Object(o.b)("inlineCode",{parentName:"p"},"FileDoesNotExist")," error is rejected."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { dependency } from '@foal/core';\nimport { Disk } from '@foal/storage';\n\nclass FileService {\n\n  @dependency\n  disk: Disk;\n\n  async readFile() {\n    const { file, size } = await this.disk.read('avatars/xxx.jpg', 'buffer');\n\n    // ...\n  }\n\n  async readFile2() {\n    const { file, size } = await this.disk.read('avatars/xxx.jpg', 'stream');\n\n    // ...\n  }\n\n} \n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"To check whether an error is an instance of ",Object(o.b)("inlineCode",{parentName:"p"},"FileDoesNotExist"),", you can call the ",Object(o.b)("inlineCode",{parentName:"p"},"isFileDoesNotExist")," function. Using ",Object(o.b)("inlineCode",{parentName:"p"},"error instanceof FileDoesNotExist")," may not work if you have multiple nested packages because of the way ",Object(o.b)("em",{parentName:"p"},"npm")," handles its dependencies.")),Object(o.b)("h3",{id:"write-files"},"Write files"),Object(o.b)("p",null,"Files can be saved using the asynchronous ",Object(o.b)("inlineCode",{parentName:"p"},"write")," method. This method accepts a buffer or a readable stream. If no name is provided, it is automatically generated and used to save the file in the given directory. In this case, a file extension can also be provided to the method."),Object(o.b)("p",null,"Once the file is successfully written, its path is returned so that it can be retrieved later."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { Readable } from 'stream';\n\nimport { dependency } from '@foal/core';\nimport { Disk } from '@foal/storage';\n\nclass FileService {\n\n  @dependency\n  disk: Disk;\n\n  async createFile(content: Buffer|Readable) {\n    const { path } = await this.disk.write('avatars', content);\n    // path === 'avatars/zMurtEGl1BTNJnJjeOfwx4GPWirZpoGRG9J8NbRRkRY='\n\n    // ...\n  }\n\n  async createFile2(content: Buffer|Readable) {\n    const { path } = await this.disk.write('avatars', content, {\n      extension: 'jpg'\n    });\n    // path === 'avatars/zMurtEGl1BTNJnJjeOfwx4GPWirZpoGRG9J8NbRRkRY=.jpg'\n\n    // ...\n  }\n\n  async createFile3(content: Buffer|Readable) {\n    const { path } = await this.disk.write('avatars', content, {\n      name: 'profile.jpg'\n    });\n    // path === 'avatars/profile.jpg'\n\n    // ...\n  }\n\n} \n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note: Backslashes ",Object(o.b)("inlineCode",{parentName:"p"},"\\")," and slashes ",Object(o.b)("inlineCode",{parentName:"p"},"/")," at the end of the directory name are not supported. For example, ",Object(o.b)("inlineCode",{parentName:"p"},"avatars/img_60")," is valid but ",Object(o.b)("inlineCode",{parentName:"p"},"avatars\\img_60")," and ",Object(o.b)("inlineCode",{parentName:"p"},"avatars/img_60/")," both invalid.")),Object(o.b)("h3",{id:"delete-files"},"Delete files"),Object(o.b)("p",null,"Files can be deleted using the asynchronous ",Object(o.b)("inlineCode",{parentName:"p"},"delete")," method. Depending on the file storage, the method may or may not reject a ",Object(o.b)("inlineCode",{parentName:"p"},"FileDoesNotExist")," error if the file is not found."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { dependency } from '@foal/core';\nimport { Disk } from '@foal/storage';\n\nclass FileService {\n\n  @dependency\n  disk: Disk;\n\n  async deleteFile(content: Buffer|Readable) {\n    await this.disk.delete('avatars/profile.jpg');\n\n    // ...\n  }\n\n} \n")),Object(o.b)("h3",{id:"create-an-httpresponse"},"Create an HttpResponse"),Object(o.b)("p",null,"The service also provides a special method ",Object(o.b)("inlineCode",{parentName:"p"},"createHttpResponse")," for creating an ",Object(o.b)("inlineCode",{parentName:"p"},"HttpResponse"),". The returned object is optimized for downloading a (large) file in streaming."),Object(o.b)("p",null,"The documentation can be found ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/id/docs/1.x/file-system/upload-and-download-files#file-downloads"}),"here"),"."),Object(o.b)("h2",{id:"using-a-specific-storage"},"Using a Specific Storage"),Object(o.b)("p",null,"In rare cases, you may wish to access multiple storages in your application. Each of them has its own ",Object(o.b)("em",{parentName:"p"},"disk")," that you can inject and use in your controllers and services."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { dependency, Get } from '@foal/core';\nimport { LocalDisk } from '@foal/storage';\nimport { S3Disk } from '@foal/aws-s3';\n\nclass ApiController {\n\n  @dependency\n  local: LocalDisk;\n\n  @dependency\n  s3: S3Disk;\n\n  // ...\n\n}\n")),Object(o.b)("h2",{id:"implementing-a-disk"},"Implementing a Disk"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Relative paths are available in Foal v1.11.0 onwards.")),Object(o.b)("p",null,"If FoalTS does not support your favorite Cloud provider, you can also implement your own ",Object(o.b)("em",{parentName:"p"},"disk")," by extending the ",Object(o.b)("inlineCode",{parentName:"p"},"AbstractDisk")," class. "),Object(o.b)("p",null,"If you want to use it through the ",Object(o.b)("inlineCode",{parentName:"p"},"Disk")," service, you need to specify its path in the configuration (or to publish it as an npm package and specify the package name). The name of the exported class should be ",Object(o.b)("inlineCode",{parentName:"p"},"ConcreteDisk"),"."),Object(o.b)("p",null,'{% code-tabs %}\n{% code-tabs-item title="YAML" %}'),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"settings:\n  disk:\n    driver: './app/services/my-disk.service'\n")),Object(o.b)("p",null,'{% endcode-tabs-item %}\n{% code-tabs-item title="JSON" %}'),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "settings": {\n    "disk": {\n      "driver": "./app/services/my-disk.service",\n    }\n  }\n}\n')),Object(o.b)("p",null,'{% endcode-tabs-item %}\n{% code-tabs-item title=".env or environment variables" %}'),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"SETTINGS_DISK_DRIVER=./app/services/my-disk.service\n")),Object(o.b)("p",null,"{% endcode-tabs-item %}\n{% endcode-tabs %}"))}d.isMDXComponent=!0},271:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),d=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=d(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=d(n),u=a,m=b["".concat(r,".").concat(u)]||b[u]||p[u]||o;return n?i.a.createElement(m,l(l({ref:t},c),{},{components:n})):i.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);