(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{75:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(2),o=r(6),a=(r(0),r(86)),i=r(87),c={id:"what-is-odp",title:"What is ODP"},s={unversionedId:"what-is-odp",id:"what-is-odp",isDocsHomePage:!1,title:"What is ODP",description:"The Open Developer Platform (ODP) is a collection of services, tools and best practices that deliver a secure and compliant collaboration across all FINOS hosted projects.",source:"@site/../docs/what-is-odp.mdx",slug:"/what-is-odp",permalink:"/docs/what-is-odp",editUrl:"https://github.com/finos/open-developer-platform/edit/master/website/../docs/what-is-odp.mdx",version:"current",sidebar:"mainSidebar",next:{title:"Project Collaboration",permalink:"/docs/project-collaboration"}},l=[{value:"How to use ODP",id:"how-to-use-odp",children:[]},{value:"How to contribute",id:"how-to-contribute",children:[]}],u={rightToc:l};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"Open Developer Platform (ODP)")," is a collection of services, tools and best practices that deliver a secure and compliant collaboration across all FINOS hosted projects."),Object(a.b)("p",null,"ODP leverages ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://guides.github.com/activities/hello-world/#what"}),"GitHub.com")," as project collaboration platform to deliver a software development workflow with continuous legal, security, quality scanning and a set of communication tools that comply with financial institutions regulations."),Object(a.b)("img",{alt:"odp-landscape",src:Object(i.a)("img/odp-landscape-2020.png")}),Object(a.b)("h2",{id:"how-to-use-odp"},"How to use ODP"),Object(a.b)("p",null,"The onboarding process on ODP is composed by the following steps:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Sign up to GitHub.com and get a GitHub username."),Object(a.b)("li",{parentName:"ol"},"Sign and submit the ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://finosfoundation.atlassian.net/wiki/spaces/FINOS/pages/75530375/Contribution+Compliance+Requirements"}),"FINOS Contributor License Agreement"),", in order to become part of the GitHub FINOS."),Object(a.b)("li",{parentName:"ol"},"Start ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"project-collaboration"}),"collaborating on FINOS projects"))),Object(a.b)("h2",{id:"how-to-contribute"},"How to contribute"),Object(a.b)("p",null,"To submit a new feature or request to the ODP backlog, feel free to ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/finos/open-developer-platform/issues"}),Object(a.b)("strong",{parentName:"a"},"create a new issue in GitHub")),"."),Object(a.b)("p",null,"If you're a software vendor providing build automation for open source software that can help solve friction points many developers at financial institutions face, we'd be happy to work together and host your technology on ODP."),Object(a.b)("p",null,"If you are an API provider, working with some of our members or other firms in the financial world, we can host your API on ODP: the full FINOS Community can get to know your technology, and contributors will get free and preferred access to the API, delivering a first-class onramp experience for developers."),Object(a.b)("p",null,"Everyone is welcome to listen and submit feedback to the group; all our content and conversations are (and will be) public."))}p.isMDXComponent=!0},85:function(e,t,r){"use strict";var n=r(0),o=r(20);t.a=function(){var e=Object(n.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},86:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,f=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return r?o.a.createElement(f,c(c({ref:t},l),{},{components:r})):o.a.createElement(f,c({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},87:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return i}));var n=r(85),o=r(88);function a(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var a=void 0===n?{}:n,i=a.forcePrependBaseUrl,c=void 0!==i&&i,s=a.absolute,l=void 0!==s&&s;if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(c)return t+r;var u=r.startsWith(t)?r:t+r.replace(/^\//,"");return l?e+u:u}(a,r,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},88:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}))}}]);