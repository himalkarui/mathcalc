(this.webpackJsonpmathcalc=this.webpackJsonpmathcalc||[]).push([[54],{282:function(e,t,a){"use strict";var n=a(45),o=a(46);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(a(0)),s=(0,n(a(47)).default)(r.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");t.default=s},283:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));a(0);var n=a(7),o=a(285),r=a(38),s=a(121),l=a(282),i=a.n(l),c=a(1),d=Object(s.a)((function(e){return{link:{color:"#3f51b5",cursor:"pointer","& hover":{textDecoration:"underline"}},hr:{height:"1px",backgroundColor:"#c5c5c5",margin:"1.5rem 0 0 0"}}}));function h(e){var t=d();return Object(c.jsxs)("section",{className:"hero","data-v-23847e07":!0,children:[Object(c.jsx)("div",{style:{padding:"2rem 0.5rem 0rem 0.5rem"},children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h1",{style:{margin:"0px"},className:"subtitle is-uppercase has-text-weight-bold",children:Object(c.jsxs)(o.a,{className:"subtitle is-uppercase has-text-weight-bold",separator:Object(c.jsx)(i.a,{fontSize:"small"}),"aria-label":"breadcrumb",children:[e.links?e.links.map((function(e,a){return Object(c.jsx)(n.b,{className:t.link,to:e.url,children:e.urlName},a)})):Object(c.jsx)(c.Fragment,{}),e.pageTitle?Object(c.jsx)(r.a,{component:"h1",className:"",children:e.pageTitle}):Object(c.jsx)(c.Fragment,{})]})}),e.txtTitle?Object(c.jsx)("h1",{style:{marginTop:"1rem"},children:e.txtTitle}):Object(c.jsx)(c.Fragment,{})]})}),Object(c.jsx)("hr",{className:t.hr})]})}},285:function(e,t,a){"use strict";var n=a(2),o=a(42),r=a(3),s=a(0),l=(a(78),a(4),a(5)),i=a(6),c=a(38),d=a(17),h=a(29),m=Object(h.a)(s.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),b=a(76);var u=Object(i.a)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:Object(d.b)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var t=e.classes,a=Object(r.a)(e,["classes"]);return s.createElement(b.a,Object(n.a)({component:"li",className:t.root,focusRipple:!0},a),s.createElement(m,{className:t.icon}))}));var j=s.forwardRef((function(e,t){var a=e.children,i=e.classes,d=e.className,h=e.component,m=void 0===h?"nav":h,b=e.expandText,j=void 0===b?"Show path":b,p=e.itemsAfterCollapse,x=void 0===p?1:p,f=e.itemsBeforeCollapse,g=void 0===f?1:f,O=e.maxItems,y=void 0===O?8:O,v=e.separator,w=void 0===v?"/":v,I=Object(r.a)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),E=s.useState(!1),M=E[0],N=E[1],k=s.Children.toArray(a).filter((function(e){return s.isValidElement(e)})).map((function(e,t){return s.createElement("li",{className:i.li,key:"child-".concat(t)},e)}));return s.createElement(c.a,Object(n.a)({ref:t,component:m,color:"textSecondary",className:Object(l.a)(i.root,d)},I),s.createElement("ol",{className:i.ol},function(e,t,a){return e.reduce((function(n,o,r){return r<e.length-1?n=n.concat(o,s.createElement("li",{"aria-hidden":!0,key:"separator-".concat(r),className:t},a)):n.push(o),n}),[])}(M||y&&k.length<=y?k:function(e){return g+x>=e.length?e:[].concat(Object(o.a)(e.slice(0,g)),[s.createElement(u,{"aria-label":j,key:"ellipsis",onClick:function(e){N(!0);var t=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");t&&t.focus()}})],Object(o.a)(e.slice(e.length-x,e.length)))}(k),i.separator,w)))}));t.a=Object(i.a)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(j)},628:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return f}));var n=a(22),o=a(80),r=a(34),s=a(0),l=a.n(s),i=a(116),c=a(263),d=a(271),h=a(264),m=a(38),b=a(276),u=a(66),j=a(283),p=a(1),x=Object(i.a)((function(e){return{root:{flexGrow:1,overflow:"hidden"},formelems:{display:"grid","& > *":{margin:e.spacing(1),width:"100%"}},resultDiv:{padding:"13px",marginBottom:"10px",borderRadius:"4px",fontStyle:"normal",fontWeight:"700",fontSize:"24px",lineHeight:"34px",color:"#314259","& > span":{marginLeft:"8px",color:"#1678fb"}},ulElem:{listStyle:"disc !important",padding:"1.5rem",borderBottom:"solid",borderTop:"solid","& li":{listStyleType:"disc"}}}}));function f(){var e=l.a.useState({loanAmount:1e3,interestRate:10,noofmonth:12,emiPayable:0,totalIntest:0,payableAmount:0}),t=Object(r.a)(e,2),a=t[0],s=t[1],i=function(e){s(Object(o.a)(Object(o.a)({},a),{},Object(n.a)({},e.target.id,e.target.value)))};l.a.useEffect((function(){!function(e){var t=a.loanAmount,n=parseFloat(a.interestRate)/1200,r=a.noofmonth,l=Math.pow(1+n,r);s(Object(o.a)(Object(o.a)({},a),{},{emiPayable:(t*n*(l/(l-1))).toFixed(5),payableAmount:(t*n*(l/(l-1))*r).toFixed(5),totalIntest:(t*n*(l/(l-1))*r-a.loanAmount).toFixed(5)}))}()}),[a.loanAmount,a.interestRate,a.noofmonth]);var f=x();return Object(p.jsxs)("div",{className:f.root,children:[Object(p.jsxs)(u.b,{children:[Object(p.jsx)("title",{children:"EMI (Equated Monthly Installment) Calculator - Calulate emi for home load car loan and etc. | mathcalc"}),Object(p.jsx)("meta",{name:"keywords",content:"mathcalc, free online emi calculator, free calculator, online calculator,emi calculator online"}),Object(p.jsx)("meta",{name:"description",content:"Use Mathcalc interest calculator to calculate simple and compound interest. Simply, enter the details of the principal amount, interest rate, period, and compounding frequency to know the interest earned."}),Object(p.jsx)("meta",{name:"author",content:"Mathcalc"}),Object(p.jsx)("meta",{name:"copyright",content:"Mathcalc Inc. Copyright (c) 2021"}),Object(p.jsx)("meta",{"http-equiv":"X-UA-Compatible",content:"IE=edge,chrome=1"})]}),Object(p.jsxs)(c.a,{maxWidth:"xl",children:[Object(p.jsx)(j.a,{pageTitle:"EMI Calculator",links:[{url:"/finance/",urlName:"Finance"}]}),Object(p.jsx)("section",{className:"hero","data-v-23847e07":!0,children:Object(p.jsx)("div",{style:{padding:"2rem 0.5rem"},children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("h1",{className:"subtitle is-spaced is-uppercase has-text-weight-bold",children:"EMI CALCULATOR"}),Object(p.jsx)("p",{className:"  has-text-grey",children:"To calculate EMI Payable, interest and payable amount"})]})})}),Object(p.jsxs)(d.a,{container:!0,direction:"row",justify:"center",alignItems:"center",children:[Object(p.jsxs)(d.a,{item:!0,lg:8,md:8,sm:12,children:[Object(p.jsxs)(h.a,{elevation:1,className:"box",children:[Object(p.jsx)("h2",{className:"title is-5",children:"EMI Calculator : Home Loan, Car Loan, Personal Loan"}),Object(p.jsx)("p",{children:"EMI Calculator \u2013 Calculate Loan EMI in 3 Easy Steps. Use our EMI calculator to estimate your Home Loan EMI and also analyse interest and outstanding principal repayment.  "}),Object(p.jsx)("br",{}),Object(p.jsxs)("div",{className:f.formelems,noValidate:!0,autoComplete:"off",children:[Object(p.jsx)(b.a,{id:"loanAmount",label:"Loan Amount",variant:"outlined",value:a.loanAmount,type:"number",onChange:i}),Object(p.jsx)("br",{}),Object(p.jsx)(b.a,{id:"noofmonth",label:"Number of Months",variant:"outlined",value:a.noofmonth,type:"number",onChange:i}),Object(p.jsx)("br",{}),Object(p.jsx)(b.a,{id:"interestRate",label:"Interest Rate (%)",variant:"outlined",value:a.interestRate,type:"number",onChange:i}),Object(p.jsx)("br",{})]}),Object(p.jsxs)("div",{className:f.resultDiv,children:[Object(p.jsxs)(m.a,{component:"label",children:["EMI Payable is : \xa0 ",Object(p.jsx)("strong",{children:a.emiPayable}),Object(p.jsx)("br",{})]}),Object(p.jsxs)(m.a,{component:"label",children:["Total Interest is : \xa0 ",Object(p.jsx)("strong",{children:a.totalIntest}),Object(p.jsx)("br",{})]}),Object(p.jsxs)(m.a,{component:"label",children:["Payable Amount : \xa0 ",Object(p.jsx)("strong",{children:a.payableAmount}),Object(p.jsx)("br",{})]})]})]}),Object(p.jsx)("br",{}),Object(p.jsxs)(h.a,{className:"box",elevation:1,children:[Object(p.jsx)("h2",{className:"title is-5",children:"   What Is an Equated Monthly Installment (EMI)?"}),Object(p.jsx)("p",{children:"   An equated monthly installment (EMI) is a fixed payment amount made by a borrower to a lender at a specified date each calendar month. Equated monthly installments are applied to both interest and principal each month so that over a specified number of years, the loan is paid off in full. In the most common types of loans\u2014such as real estate mortgages, auto loans, and student loans\u2014the borrower makes fixed periodic payments to the lender over the course of several years with the goal of retiring the loan."}),Object(p.jsx)("h2",{className:"title is-5",children:" KEY TAKEAWAYS"}),Object(p.jsxs)("ul",{className:f.ulElem,children:[Object(p.jsx)("li",{children:"   An equated monthly installment (EMI) is a fixed payment made by a borrower to a lender on a specified date of each month."}),Object(p.jsx)("li",{children:"EMIs are applied to both interest and principal each month so that over a specified time period, the loan is paid off in full."}),Object(p.jsx)("li",{children:" EMIs can be calculated in two ways: the flat-rate method or the reducing-balance method."}),Object(p.jsx)("li",{children:"The EMI reducing-balance method generally is more favorable for borrowers, as it results in lower interest payments overall."}),Object(p.jsx)("li",{children:"  EMIs allow borrowers the peace of mind of knowing exactly how much money they will need to pay each month toward their loan."})]}),Object(p.jsx)("br",{}),Object(p.jsx)("h2",{className:"title is-5",children:"Equated Monthly Installment"}),Object(p.jsx)("h2",{className:"title is-5",children:" How an Equated Monthly Installment (EMI) Works"}),Object(p.jsxs)("p",{children:["  EMIs differ from variable payment plans, in which the borrower is able to pay higher amounts at his or her discretion. In EMI plans borrowers are usually only allowed one fixed payment amount each month.",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),"The benefit of an EMI for borrowers is that they know precisely how much money they will need to pay toward their loan each month, which can make personal budgeting easier. The benefit to lenders (or investors the loan is sold to) is that they can count on a steady, predictable income stream from the loan interest.",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),"The EMI can be calculated using either the flat-rate method or the reducing-balance (aks the reduce-balance) method.",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),"The EMI flat-rate formula is calculated by adding together the principal loan amount and the interest on the principal and dividing the result by the number of periods multiplied by the number of months.",Object(p.jsx)("br",{}),Object(p.jsx)("br",{})]}),Object(p.jsx)("h2",{className:"title is-5",children:"  Examples of Equated Monthly Installment (EMI)"}),Object(p.jsxs)("p",{children:["To demonstrate how EMI works, let's walk through a calculation of it, using both methods. Assume an individual takes out a mortgage to buy a new home. The principal amount is $500,000, and the loan terms include an interest rate of 3.50% for 10 years.",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),"Using the flat-rate method to calculate the EMI, the homeowner's monthly payments come out to $5,625, or ($500,000 + ($500,000 x 10 x 0.035)) / (10 x 12).",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),"Using the EMI reducing-balance method, monthly payments would be approximately $1,459.34, or (($500,000 * (0.035)) * (1 + (0.035 / 12)) * 120) / (12 x ((1 + (0.035/12)) * 120) - 1).",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),"Note that in the EMI flat-rate calculation, the principal loan amount remains constant throughout the 10-year mortgage period. This suggests that the EMI reducing-balance method may be a better option because the dwindling loan principal also shrinks the amount of interest due. In the flat-rate method, each interest charge is calculated based on the original loan amount, even though the loan balance outstanding is gradually being paid down."]}),Object(p.jsx)("br",{}),Object(p.jsx)("h2",{className:"title is-5",children:"What Does EMI Mean?"}),Object(p.jsx)("p",{children:"In the finance world, EMI stands for equated monthly installment. It refers to periodic payments made to settle an outstanding loan within a stipulated time frame. As the name suggests, these payments are the same amount each time."}),Object(p.jsx)("br",{}),Object(p.jsx)("h2",{className:"title is-5",children:"How Is EMI Calculated?"}),Object(p.jsx)("p",{children:"There are two ways to calculate EMI: the flat-rate method and the reducing-balance (or reduce-balance) method. Both take into account the loan principal, the loan interest rate, and the term of the loan in their calculations."}),Object(p.jsx)("br",{}),Object(p.jsx)("h2",{className:"title is-5",children:"How Is EMI Deducted From a Credit Card?"}),Object(p.jsx)("p",{children:"As soon as you purchase something on a credit card with an EMI option (that is, doesn't demand payment in full each month), your card's available credit limit is reduced by the total cost of the goods or service. The EMI on credit cards then works much like a home loan or a personal loan: You pay back the principal and interest each month, gradually reducing your debt over a period of time until you pay it off in full. EMI is deducted from a credit card using the reduce-balance method."}),Object(p.jsx)("br",{}),Object(p.jsx)("h2",{className:"title is-5",children:"Is EMI Good or Bad?"}),Object(p.jsxs)("p",{children:['EMI is neither inherently good or bad\u2014unless you consider borrowing and accruing debt bad, and paying for things in full the only "good" option.',Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),"In terms of borrowing options, EMI does have its good points, though. Because it divides the debt into the same fixed payments each month, it helps borrowers budget their finances and keep in mind their outstanding obligations. They know how much they have to pay, and how long it will take them to settle their debt in full."]})]}),Object(p.jsx)("br",{})]}),Object(p.jsx)(d.a,{item:!0,lg:4,md:4,sm:!1})]})]})]})}}}]);
//# sourceMappingURL=54.ce18bdd5.chunk.js.map