"use strict";(self.webpackChunkmy_website_using_gatsby=self.webpackChunkmy_website_using_gatsby||[]).push([[713],{6945:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.AnchorLink=m;var r=o(n(7294)),a=n(1883),i=o(n(5697)),l=n(2284);function o(e){return e&&e.__esModule?e:{default:e}}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){var t=e.to,n=e.title,i=e.children,o=e.className,c=e.stripHash,u=void 0!==c&&c,m=e.gatsbyLinkProps,d=void 0===m?{}:m,p=e.onAnchorLinkClick,f=u?l.handleStrippedLinkClick:l.handleLinkClick,b=s(s({},d),{},{to:u?(0,l.stripHashedLocation)(t):t,onClick:function(e){return f(t,e,p)}});return n&&(b.title=n),o&&(b.className=o),r.default.createElement(a.Link,b,i||n)}m.propTypes={to:i.default.string.isRequired,title:i.default.string,className:i.default.string,stripHash:i.default.bool,gatsbyLinkProps:i.default.object,onAnchorLinkClick:i.default.func,children:i.default.node}},3089:function(e,t,n){Object.defineProperty(t,"P",{enumerable:!0,get:function(){return r.AnchorLink}});var r=n(6945)},7306:function(e,t,n){var r=n(7294),a=n(1883),i=n(3089);t.Z=()=>r.createElement("header",null,r.createElement("div",{className:"container"},r.createElement("div",{className:"inner-header"},r.createElement("div",{className:"logo"},r.createElement(a.Link,{to:"/"},"Alberto Llamas")),r.createElement("div",{className:"navigation"},r.createElement("nav",null,r.createElement(i.P,{to:"/#title-about"},"About Me"),r.createElement(a.Link,{to:"/#work"},"Work"),r.createElement(a.Link,{to:"/#contact"},"Contact"))))))},8678:function(e,t,n){var r=n(7294),a=n(1883),i=n(7306);t.Z=e=>{var t;let{children:n}=e;const l=(0,a.useStaticQuery)("3649515864");return r.createElement(r.Fragment,null,r.createElement(i.Z,{siteTitle:(null===(t=l.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),r.createElement("div",{style:{margin:"0 auto",maxWidth:"var(--size-content)",padding:"var(--size-gutter)"}},r.createElement("main",null,n),r.createElement("footer",{style:{marginTop:"var(--space-5)",fontSize:"var(--font-sm)"}},"© ",(new Date).getFullYear()," · Built with"," ",r.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby"))))}},9357:function(e,t,n){var r=n(7294),a=n(1883);t.Z=function(e){var t,n;let{description:i,title:l,children:o}=e;const{site:c}=(0,a.useStaticQuery)("63159454"),s=i||c.siteMetadata.description,u=null===(t=c.siteMetadata)||void 0===t?void 0:t.title;return r.createElement(r.Fragment,null,r.createElement("title",null,u?l+" | "+u:l),r.createElement("meta",{name:"description",content:s}),r.createElement("meta",{property:"og:title",content:l}),r.createElement("meta",{property:"og:description",content:s}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{name:"twitter:card",content:"summary"}),r.createElement("meta",{name:"twitter:creator",content:(null===(n=c.siteMetadata)||void 0===n?void 0:n.author)||""}),r.createElement("meta",{name:"twitter:title",content:l}),r.createElement("meta",{name:"twitter:description",content:s}),o)}},4808:function(e,t,n){n.r(t),n.d(t,{Head:function(){return o}});var r=n(7294),a=n(1883),i=n(8678),l=n(9357);const o=()=>r.createElement(l.Z,{title:"Using DSG"});t.default=()=>r.createElement(i.Z,null,r.createElement("h1",null,"Hello from a ",r.createElement("b",null,"DSG Page")),r.createElement("p",null,"This page is not created until requested by a user."),r.createElement("p",null,"To learn more, head over to our"," ",r.createElement("a",{href:"https://www.gatsbyjs.com/docs/reference/rendering-options/deferred-static-generation/"},"documentation about Deferred Static Generation"),"."),r.createElement(a.Link,{to:"/"},"Go back to the homepage"))}}]);
//# sourceMappingURL=component---src-templates-using-dsg-js-13e904917a659af8dc27.js.map