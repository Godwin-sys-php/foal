(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{266:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(23),i=a(277),c=a(22),o=a(279),s=a(278);var m=function(e){var t=e.metadata;return l.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},l.a.createElement("div",{className:"pagination-nav__item"},t.previous&&l.a.createElement(s.a,{className:"pagination-nav__link",to:t.previous.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},"Previous"),l.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),l.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&l.a.createElement(s.a,{className:"pagination-nav__link",to:t.next.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},"Next"),l.a.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},d=a(280);var u=function(){var e=Object(c.default)().siteConfig.title,t=Object(d.useActivePlugin)({failfast:!0}).pluginId,a=Object(i.useDocsPreferredVersion)(t).savePreferredVersionName,n=Object(d.useActiveVersion)(t),r=Object(d.useDocVersionSuggestions)(t),o=r.latestDocSuggestion,m=r.latestVersionSuggestion;if(!m)return l.a.createElement(l.a.Fragment,null);var u,v=null!=o?o:(u=m).docs.find((function(e){return e.id===u.mainDocId}));return l.a.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},"current"===n.name?l.a.createElement("div",null,"This is unreleased documentation for ",e," ",l.a.createElement("strong",null,n.label)," version."):l.a.createElement("div",null,"This is documentation for ",e," ",l.a.createElement("strong",null,n.label),". This version will reach end-of-life on"," ",l.a.createElement(s.a,{to:"https://github.com/FoalTS/foal/blob/master/.github/CONTRIBUTING.MD#long-term-support-policy-and-schedule"},"May 31, 2021"),". Until then, critical bugs will be fixed but no new features will be added."),l.a.createElement("div",{className:"margin-top--md"},"For up-to-date documentation, see the"," ",l.a.createElement("strong",null,l.a.createElement(s.a,{to:v.path,onClick:function(){return a(m.name)}},"latest version"))," ","(",m.label,")."))},v=a(306),g=a(295),f=a(272),E=a(94),p=a.n(E);t.default=function(e){var t,a=Object(c.default)().siteConfig.url,n=e.content,s=n.metadata,E=n.frontMatter,b=E.image,h=E.keywords,_=E.hide_title,N=E.hide_table_of_contents,w=s.description,O=s.title,j=s.permalink,k=s.editUrl,y=s.lastUpdatedAt,C=s.lastUpdatedBy,x=Object(d.useActivePlugin)({failfast:!0}).pluginId,I=Object(d.useVersions)(x),L=Object(d.useActiveVersion)(x),T=I.length>1,B=Object(i.useTitleFormatter)(O),S=Object(o.a)(b,{absolute:!0});return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,null,l.a.createElement("title",null,B),l.a.createElement("meta",{property:"og:title",content:B}),w&&l.a.createElement("meta",{name:"description",content:w}),w&&l.a.createElement("meta",{property:"og:description",content:w}),h&&h.length&&l.a.createElement("meta",{name:"keywords",content:h.join(",")}),b&&l.a.createElement("meta",{property:"og:image",content:S}),b&&l.a.createElement("meta",{name:"twitter:image",content:S}),b&&l.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+O}),j&&l.a.createElement("meta",{property:"og:url",content:a+j}),j&&l.a.createElement("link",{rel:"canonical",href:a+j})),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:Object(f.a)("col",(t={},t[p.a.docItemCol]=!N,t))},l.a.createElement(u,null),l.a.createElement("div",{className:p.a.docItemContainer},l.a.createElement("article",null,T&&l.a.createElement("div",null,l.a.createElement("span",{className:"badge badge--secondary"},"Version: ",L.label)),!_&&l.a.createElement("header",null,l.a.createElement("h1",{className:p.a.docTitle},O)),l.a.createElement("div",{className:"markdown"},l.a.createElement(n,null))),(k||y||C)&&l.a.createElement("div",{className:"margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},k&&l.a.createElement("a",{href:k,target:"_blank",rel:"noreferrer noopener"},l.a.createElement(g.a,null),"Edit this page")),(y||C)&&l.a.createElement("div",{className:"col text--right"},l.a.createElement("em",null,l.a.createElement("small",null,"Last updated"," ",y&&l.a.createElement(l.a.Fragment,null,"on"," ",l.a.createElement("time",{dateTime:new Date(1e3*y).toISOString(),className:p.a.docLastUpdatedAt},new Date(1e3*y).toLocaleDateString()),C&&" "),C&&l.a.createElement(l.a.Fragment,null,"by ",l.a.createElement("strong",null,C)),!1))))),l.a.createElement("div",{className:"margin-vert--lg"},l.a.createElement(m,{metadata:s})))),!N&&n.toc&&l.a.createElement("div",{className:"col col--3"},l.a.createElement(v.a,{toc:n.toc}))))}},295:function(e,t,a){"use strict";var n=a(3),l=a(7),r=a(0),i=a.n(r),c=a(272),o=a(60),s=a.n(o);t.a=function(e){var t=e.className,a=Object(l.a)(e,["className"]);return i.a.createElement("svg",Object(n.a)({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:Object(c.a)(s.a.iconEdit,t)},a),i.a.createElement("g",null,i.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}},306:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(272);var i=function(e,t,a){var l=Object(n.useState)(void 0),r=l[0],i=l[1];Object(n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=a}));if(t){if(t.getBoundingClientRect().top>=a){var n=e[e.indexOf(t)-1];return null!=n?n:t}return t}return e[e.length-1]}();if(n)for(var l=0,c=!1,o=document.getElementsByClassName(e);l<o.length&&!c;){var s=o[l],m=s.href,d=decodeURIComponent(m.substring(m.indexOf("#")+1));n.id===d&&(r&&r.classList.remove(t),s.classList.add(t),i(s),c=!0),l+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},c=a(59),o=a.n(c);function s(){_bsa.init("custom","CEBI553Y","placement:foaltsorg",{target:"#carbon-js",template:'\n      <div id="carbonads">\n        <span\n          ><span class="carbon-wrap"\n            ><a\n              href="##statlink##"\n              class="carbon-img"\n              target="_blank"\n              rel="noopener sponsored"\n              ><img\n                src="##smallImage##"\n                alt="ads via Carbon"\n                border="0"\n                height="100"\n                width="130"\n                style="max-width: 130px" /></a\n            ><a\n              href="##statlink##"\n              class="carbon-text"\n              target="_blank"\n              rel="noopener sponsored"\n              >##description##</a\n            ></span\n          ><a\n            href="##ad_via_link##"\n            class="carbon-poweredby"\n            target="_blank"\n            rel="noopener sponsored"\n            >ads via Carbon</a\n          ></span\n        >\n      </div>\n      \n      '})}var m=!0;var d="table-of-contents__link";function u(e){var t=e.toc,a=e.isChild;return t.length?l.a.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:"#"+e.id,className:d,dangerouslySetInnerHTML:{__html:e.value}}),l.a.createElement(u,{isChild:!0,toc:e.children}))}))):null}var v=!1;t.a=function(e){var t=e.toc,a=function(){return"undefined"!=typeof window&&window.document.body.clientWidth>996};return Object(n.useEffect)((function(){a()&&!v&&(v=!0,setTimeout((function(){return v=!1}),1e3),"undefined"!=typeof _bsa&&_bsa&&(console.log("Loading ad"),s(),m||s(),m=!1))}),["undefined"!=typeof window?window.location.href:""]),i(d,"table-of-contents__link--active",100),l.a.createElement("div",{className:Object(r.a)(o.a.tableOfContents,"thin-scrollbar")},l.a.createElement(u,{toc:t}),a()&&l.a.createElement("div",{id:"carbon-js"}))}}}]);