(this.webpackJsonpmathcalc=this.webpackJsonpmathcalc||[]).push([[61],{282:function(e,t,a){"use strict";var c=a(45),r=a(46);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(a(0)),s=(0,c(a(47)).default)(i.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");t.default=s},283:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));a(0);var c=a(7),r=a(285),i=a(38),s=a(121),n=a(282),l=a.n(n),o=a(1),d=Object(s.a)((function(e){return{link:{color:"#3f51b5",cursor:"pointer","& hover":{textDecoration:"underline"}},hr:{height:"1px",backgroundColor:"#c5c5c5",margin:"1.5rem 0 0 0"}}}));function j(e){var t=d();return Object(o.jsxs)("section",{className:"hero","data-v-23847e07":!0,children:[Object(o.jsx)("div",{style:{padding:"2rem 0.5rem 0rem 0.5rem"},children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{style:{margin:"0px"},className:"subtitle is-uppercase has-text-weight-bold",children:Object(o.jsxs)(r.a,{className:"subtitle is-uppercase has-text-weight-bold",separator:Object(o.jsx)(l.a,{fontSize:"small"}),"aria-label":"breadcrumb",children:[e.links?e.links.map((function(e,a){return Object(o.jsx)(c.b,{className:t.link,to:e.url,children:e.urlName},a)})):Object(o.jsx)(o.Fragment,{}),e.pageTitle?Object(o.jsx)(i.a,{component:"h1",className:"",children:e.pageTitle}):Object(o.jsx)(o.Fragment,{})]})}),e.txtTitle?Object(o.jsx)("h1",{style:{marginTop:"1rem"},children:e.txtTitle}):Object(o.jsx)(o.Fragment,{})]})}),Object(o.jsx)("hr",{className:t.hr})]})}},285:function(e,t,a){"use strict";var c=a(2),r=a(42),i=a(3),s=a(0),n=(a(78),a(4),a(5)),l=a(6),o=a(38),d=a(17),j=a(29),b=Object(j.a)(s.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),h=a(76);var m=Object(l.a)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:Object(d.b)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var t=e.classes,a=Object(i.a)(e,["classes"]);return s.createElement(h.a,Object(c.a)({component:"li",className:t.root,focusRipple:!0},a),s.createElement(b,{className:t.icon}))}));var p=s.forwardRef((function(e,t){var a=e.children,l=e.classes,d=e.className,j=e.component,b=void 0===j?"nav":j,h=e.expandText,p=void 0===h?"Show path":h,u=e.itemsAfterCollapse,x=void 0===u?1:u,O=e.itemsBeforeCollapse,g=void 0===O?1:O,f=e.maxItems,v=void 0===f?8:f,y=e.separator,N=void 0===y?"/":y,C=Object(i.a)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),w=s.useState(!1),k=w[0],E=w[1],F=s.Children.toArray(a).filter((function(e){return s.isValidElement(e)})).map((function(e,t){return s.createElement("li",{className:l.li,key:"child-".concat(t)},e)}));return s.createElement(o.a,Object(c.a)({ref:t,component:b,color:"textSecondary",className:Object(n.a)(l.root,d)},C),s.createElement("ol",{className:l.ol},function(e,t,a){return e.reduce((function(c,r,i){return i<e.length-1?c=c.concat(r,s.createElement("li",{"aria-hidden":!0,key:"separator-".concat(i),className:t},a)):c.push(r),c}),[])}(k||v&&F.length<=v?F:function(e){return g+x>=e.length?e:[].concat(Object(r.a)(e.slice(0,g)),[s.createElement(m,{"aria-label":p,key:"ellipsis",onClick:function(e){E(!0);var t=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");t&&t.focus()}})],Object(r.a)(e.slice(e.length-x,e.length)))}(F),l.separator,N)))}));t.a=Object(l.a)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(p)},638:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return C}));var c=a(22),r=a(80),i=a(34),s=a(0),n=a.n(s),l=a(116),o=a(263),d=a(271),j=a(264),b=a(268),h=a(281),m=a(273),p=a(261),u=a(38),x=a(276),O=a(66),g=a.p+"static/media/capacitanceform.b1f51d95.svg",f=a.p+"static/media/capacitor.7c3e3275.png",v=a(283),y=a(1),N=Object(l.a)((function(e){return{root:{flexGrow:1,overflow:"hidden"},divcalc:{borderRadius:"12px",padding:"1em",color:"#314259"},formelems:{display:"grid","& > *":{margin:e.spacing(1),width:"100%"}},row:{margin:"10px"},imgcenter:{marginLeft:"55px",width:"100px !important"}}}));function C(){var e=n.a.useState({capacitance:"0",potential:"0",charge:"0",solvedfor:0,result:0}),t=Object(i.a)(e,2),a=t[0],s=t[1];n.a.useEffect((function(){!function(e){var t=0,c=""===a.capacitance?0:parseFloat(a.capacitance),i=""===a.charge?0:parseFloat(a.charge),n=""===a.potential?0:parseFloat(a.potential);switch(a.solvedfor){case 0:t=(i/n).toFixed(4)+" farads";break;case 1:t=(c*n).toFixed(4)+" Columnbs";break;case 2:t=(i/c).toFixed(4)+" Volts"}s(Object(r.a)(Object(r.a)({},a),{},{result:t}))}()}),[a.charge,a.potential,a.capacitance,a.solvedfor]);var l=function(e){s(Object(r.a)(Object(r.a)({},a),{},Object(c.a)({},e.target.id,e.target.value)))},C=N();return Object(y.jsxs)("div",{className:C.root,children:[Object(y.jsxs)(O.b,{children:[Object(y.jsx)("title",{children:"Free Online Capacitance calculator | mathcalc"}),Object(y.jsx)("meta",{name:"keywords",content:"Mathcalc, capacitance calculator, capacitor, online calculator"}),Object(y.jsx)("meta",{name:"description",content:"Online capacitance calculator is used to To calculate the capacitance , electric charge and electric potential.  "}),Object(y.jsx)("meta",{name:"author",content:"Mathcalc"}),Object(y.jsx)("meta",{name:"copyright",content:"Mathcalc Inc. Copyright (c) 2021"}),Object(y.jsx)("meta",{"http-equiv":"X-UA-Compatible",content:"IE=edge,chrome=1"})]}),Object(y.jsxs)(o.a,{maxWidth:"xl",children:[Object(y.jsx)(v.a,{pageTitle:"Capacitance Calculator",links:[{url:"/physics/",urlName:"Physics"}]}),Object(y.jsx)("section",{className:"hero","data-v-23847e07":!0,children:Object(y.jsx)("div",{style:{padding:"2rem 0.5rem"},children:Object(y.jsxs)("div",{className:"container",children:[Object(y.jsx)("h1",{className:"subtitle is-spaced is-uppercase has-text-weight-bold",children:"ONLINE FREE CAPACITANCE CALCULATOR"}),Object(y.jsx)("p",{className:"  has-text-grey",children:"To calculate the capacitance , electric charge and electric potential.   "})]})})}),Object(y.jsx)("div",{className:C.row,children:Object(y.jsxs)(d.a,{container:!0,direction:"row",justify:"center",alignItems:"center",children:[Object(y.jsxs)(d.a,{item:!0,lg:8,md:8,sm:12,children:[Object(y.jsxs)(j.a,{raised:!0,elevation:1,className:"box",children:[Object(y.jsx)("h2",{className:"title is-5",children:"Capacitance"}),Object(y.jsx)("figure",{className:"image",children:Object(y.jsx)("img",{className:C.imgcenter,src:g,alt:"capacitance"})}),Object(y.jsx)("br",{}),Object(y.jsxs)("div",{className:C.divcalc,children:[Object(y.jsxs)(d.a,{container:!0,spacing:3,children:[Object(y.jsx)(d.a,{item:!0,xs:12,sm:6,md:6,children:Object(y.jsxs)(b.a,{variant:"outlined",style:{width:"100%",maxWidth:"243px"},children:[Object(y.jsx)(h.a,{id:"demo-simple-select-outlined-label",children:"Solved For"}),Object(y.jsxs)(m.a,{id:"metrics-outlined",label:"Solved For",style:{width:"100%",minWidth:"120px"},onChange:function(e){s(Object(r.a)(Object(r.a)({},a),{},{solvedfor:e.target.value}))},value:a.solvedfor,variant:"outlined","aria-label":"Select",children:[Object(y.jsx)(p.a,{value:0,children:"Capacitance"}),Object(y.jsx)(p.a,{value:1,children:"Charge"}),Object(y.jsx)(p.a,{value:2,children:"Potential"})]})]})}),Object(y.jsx)(d.a,{item:!0,xs:12,sm:6,md:6,children:Object(y.jsxs)("p",{className:"resPercentage",children:[" ",a.result]})})]}),Object(y.jsxs)("div",{className:C.formelems,noValidate:!0,autoComplete:"off",children:[Object(y.jsxs)("div",{style:{display:0===a.solvedfor?"none":"table-row"},children:[Object(y.jsx)("br",{}),Object(y.jsx)(x.a,{id:"capacitance",label:"Capacitance",variant:"outlined",value:a.voltage,onChange:l,type:"number"})]}),Object(y.jsxs)("div",{style:{display:1===a.solvedfor?"none":"table-row"},children:[Object(y.jsx)("br",{}),Object(y.jsx)(x.a,{id:"charge",label:"Charge",variant:"outlined",value:a.resistance,onChange:l,type:"number"})]}),Object(y.jsxs)("div",{style:{display:2===a.solvedfor?"none":"table-row"},children:[Object(y.jsx)("br",{}),Object(y.jsx)(x.a,{id:"potential",label:"Potential",variant:"outlined",value:a.current,onChange:l,type:"number"})]})]})]})]}),Object(y.jsx)("hr",{}),Object(y.jsxs)(j.a,{elevation:1,className:"box",children:[Object(y.jsx)("h2",{className:"title is-5",children:"Capacitor"}),Object(y.jsx)("figure",{className:"image",children:Object(y.jsx)("img",{src:f,alt:"capacitor"})}),Object(y.jsx)("br",{}),Object(y.jsxs)(u.a,{children:["Capacitance is the ratio of the amount of electric charge stored on a conductor to a difference in electric potential.",Object(y.jsx)("br",{}),"where",Object(y.jsxs)("ul",{children:[Object(y.jsx)("br",{}),"   ",Object(y.jsxs)("li",{children:[Object(y.jsx)("strong",{children:"q - "})," is the charge held on the conductor,"]}),Object(y.jsx)("br",{}),"  ",Object(y.jsxs)("li",{children:[Object(y.jsx)("img",{alt:"electric potential",className:C.imgcenter,src:"https://wikimedia.org/api/rest_v1/media/math/render/svg/3c012cba2a017a63dd08776373adebb0b2b5e67c"}),"is the electric potential,  "]}),Object(y.jsx)("br",{})," ",Object(y.jsxs)("li",{children:[Object(y.jsx)("strong",{children:" \u03c3 - "}),"  is the surface charge density."]}),Object(y.jsx)("br",{}),"  ",Object(y.jsxs)("li",{children:[Object(y.jsx)("strong",{children:"dS - "})," is an infinitesimal element of area on the surface of the conductor,"]}),Object(y.jsx)("br",{}),"   ",Object(y.jsxs)("li",{children:[Object(y.jsx)("strong",{children:"r - "})," is the length from dS to a fixed point M on the conductor"]}),Object(y.jsx)("br",{}),"  ",Object(y.jsxs)("li",{children:[Object(y.jsx)("strong",{children:"\u03b5 - "})," is the vacuum permittivity"]}),Object(y.jsx)("br",{}),"  ",Object(y.jsxs)("li",{children:["Using this method, the self capacitance of a conducting sphere of radius R is:",Object(y.jsx)("br",{}),Object(y.jsx)("img",{alt:"self capacitance folmula",src:"https://wikimedia.org/api/rest_v1/media/math/render/svg/5922a6ebc5a13df9d80d29f3f6c082fa8086e4cd"})]})]}),Object(y.jsx)("br",{}),"The SI unit of capacitance is the farad (symbol: F), named after the English physicist Michael Faraday. A 1 farad capacitor, when charged with 1 coulomb of electrical charge, has a potential difference of 1 volt between its plates. The reciprocal of capacitance is called elastance."]})]})]}),Object(y.jsx)(d.a,{item:!0,lg:4,md:4,sm:!1})]})})]})]})}}}]);
//# sourceMappingURL=61.9b5f2ab5.chunk.js.map