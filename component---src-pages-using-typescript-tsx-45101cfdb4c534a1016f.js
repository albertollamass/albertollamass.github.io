"use strict";(self.webpackChunkmy_website_using_gatsby=self.webpackChunkmy_website_using_gatsby||[]).push([[970],{6945:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.AnchorLink=m;var r=i(n(7294)),a=n(1883),l=i(n(5697)),c=n(2284);function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){var t=e.to,n=e.title,l=e.children,i=e.className,o=e.stripHash,u=void 0!==o&&o,m=e.gatsbyLinkProps,d=void 0===m?{}:m,p=e.onAnchorLinkClick,f=u?c.handleStrippedLinkClick:c.handleLinkClick,b=s(s({},d),{},{to:u?(0,c.stripHashedLocation)(t):t,onClick:function(e){return f(t,e,p)}});return n&&(b.title=n),i&&(b.className=i),r.default.createElement(a.Link,b,l||n)}m.propTypes={to:l.default.string.isRequired,title:l.default.string,className:l.default.string,stripHash:l.default.bool,gatsbyLinkProps:l.default.object,onAnchorLinkClick:l.default.func,children:l.default.node}},3089:function(e,t,n){Object.defineProperty(t,"P",{enumerable:!0,get:function(){return r.AnchorLink}});var r=n(6945)},8619:function(e,t,n){n.r(t),n.d(t,{Head:function(){return i}});var r=n(7294),a=n(1883),l=n(8678),c=n(9357);const i=()=>r.createElement(c.Z,{title:"Using TypeScript"});t.default=e=>{let{data:t,location:n}=e;return r.createElement(l.Z,null,r.createElement("h1",null,"Gatsby supports ",r.createElement("b",null,"TypeScript by default")),r.createElement("p",null,"This means that you can create and write ",r.createElement("code",null,".ts/.tsx")," files for your pages, components, and ",r.createElement("code",null,"gatsby-*")," configuration files (for example ",r.createElement("code",null,"gatsby-config.ts"),")."),r.createElement("p",null,"For type checking you'll want to install ",r.createElement("code",null,"typescript")," via npm and run ",r.createElement("code",null,"tsc --init")," to create a ",r.createElement("code",null,"tsconfig")," file."),r.createElement("p",null,"You're currently on the page ",r.createElement("code",null,n.pathname)," which was built on ",t.site.buildTime,"."),r.createElement("p",null,"To learn more, head over to our"," ",r.createElement("a",{href:"https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/"},"documentation about TypeScript"),"."),r.createElement(a.Link,{to:"/"},"Go back to the homepage"))}},7306:function(e,t,n){var r=n(7294),a=n(1883),l=n(3089);t.Z=()=>r.createElement("header",null,r.createElement("div",{className:"container"},r.createElement("div",{className:"inner-header"},r.createElement("div",{className:"logo"},r.createElement(a.Link,{to:"/"},"Alberto Llamas")),r.createElement("div",{className:"navigation"},r.createElement("nav",null,r.createElement(l.P,{to:"/#title-about"},"About Me"),r.createElement(a.Link,{to:"/#work"},"Work"),r.createElement(a.Link,{to:"/#contact"},"Contact"))))))},8678:function(e,t,n){var r=n(7294),a=n(1883),l=n(7306);t.Z=e=>{var t;let{children:n}=e;const c=(0,a.useStaticQuery)("3649515864");return r.createElement(r.Fragment,null,r.createElement(l.Z,{siteTitle:(null===(t=c.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),r.createElement("div",{style:{margin:"0 auto",maxWidth:"var(--size-content)",padding:"var(--size-gutter)"}},r.createElement("main",null,n),r.createElement("footer",{style:{marginTop:"var(--space-5)",fontSize:"var(--font-sm)"}},"© ",(new Date).getFullYear()," · Built with"," ",r.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby"))))}},9357:function(e,t,n){var r=n(7294),a=n(1883);t.Z=function(e){var t,n;let{description:l,title:c,children:i}=e;const{site:o}=(0,a.useStaticQuery)("63159454"),s=l||o.siteMetadata.description,u=null===(t=o.siteMetadata)||void 0===t?void 0:t.title;return r.createElement(r.Fragment,null,r.createElement("title",null,u?c+" | "+u:c),r.createElement("meta",{name:"description",content:s}),r.createElement("meta",{property:"og:title",content:c}),r.createElement("meta",{property:"og:description",content:s}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{name:"twitter:card",content:"summary"}),r.createElement("meta",{name:"twitter:creator",content:(null===(n=o.siteMetadata)||void 0===n?void 0:n.author)||""}),r.createElement("meta",{name:"twitter:title",content:c}),r.createElement("meta",{name:"twitter:description",content:s}),i)}}}]);
//# sourceMappingURL=component---src-pages-using-typescript-tsx-45101cfdb4c534a1016f.js.map