(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[36],{113:function(e,t,a){"use strict";var c=a(174),n=a(2),o=(a(166),a(167),a(18));t.a=function(e){var t=e.children,a=e.message,s=Object(n.useCallback)((function(e){return e.stopPropagation()}),[]);return Object(o.jsx)(c.a,{className:"Tooltip",content:"string"===typeof a?Object(o.jsx)("p",{className:"message",dangerouslySetInnerHTML:{__html:a.split("\n").map((function(e){return"<div>".concat(e,"</div>")})).join("")}}):a,arrow:!1,animation:"shift-away",children:Object(o.jsx)("div",{onClick:s.bind(this),children:t})})}},289:function(e,t,a){"use strict";a.r(t);var c=a(113),n=a(90),o=a(294),s=a(18);var r=function(e){var t=e.title,a=e.statistic,r=e.total,i=e.formula,l=e.date,d=e.description,j=e.className,m=Object(o.a)().t;return Object(s.jsxs)("div",{className:"meta-item ".concat(j),children:[Object(s.jsxs)("div",{className:"meta-item-top",children:[Object(s.jsx)("h3",{children:t}),Object(s.jsx)(c.a,{message:i,children:Object(s.jsx)(n.n,{size:16})})]}),Object(s.jsx)("h1",{children:a}),Object(s.jsx)("h5",{children:l}),r&&Object(s.jsx)("h5",{children:"".concat(m("India has")," ").concat(r," ").concat(m("CPM"))}),Object(s.jsx)("p",{children:d})]})},i=a(7),l=a(22),d=a(62),j=a(73),m=a(2),b=a.n(m),h=a(21),O=a.n(h);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var a,c,n=function(e,t){if(null==e)return{};var a,c,n={},o=Object.keys(e);for(c=0;c<o.length;c++)a=o[c],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(c=0;c<o.length;c++)a=o[c],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var v=Object(m.forwardRef)((function(e,t){var a=e.color,c=void 0===a?"currentColor":a,n=e.size,o=void 0===n?24:n,s=p(e,["color","size"]);return b.a.createElement("svg",u({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:c,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),b.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),b.a.createElement("polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"}))}));v.propTypes={color:O.a.string,size:O.a.oneOfType([O.a.string,O.a.number])},v.displayName="Compass";var f=v;function x(e){var t=e.numerator,a=e.denominator;return Object(s.jsxs)("div",{className:"frac",children:[Object(s.jsx)("span",{children:t}),Object(s.jsx)("span",{className:"bottom",children:a})]})}function y(e){var t,a,c,n,m,b=e.stateCode,h=e.data,O=e.timeseries,u=Object(o.a)().t,p=Object(l.h)(h[b],"total","confirmed",{normalizedByPopulationPer:"lakh"}),v=Object(l.h)(h[b],"total","tested",{normalizedByPopulationPer:"lakh"}),y=Object(l.h)(h.TT,"total","confirmed",{normalizedByPopulationPer:"lakh"}),g=Object(l.h)(h[b],"total","activeRatio"),k=Object(l.h)(h[b],"total","recoveryRatio"),w=Object(l.h)(h[b],"total","cfr"),N=Object.keys(O||{}).filter((function(e){return e<=Object(l.g)()})),P=N[N.length-1],T=Object(d.a)(Object(j.a)(Object(l.k)(P),6)),C=Object(l.h)(null===O||void 0===O?void 0:O[P],"delta","tpr",{movingAverage:!0});return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"StateMeta population",children:[Object(s.jsxs)("div",{className:"meta-item population",children:[Object(s.jsx)("h3",{children:u("Population")}),Object(s.jsx)("h1",{children:Object(l.e)(null===(t=h[b])||void 0===t||null===(a=t.meta)||void 0===a?void 0:a.population)})]}),Object(s.jsxs)("div",{className:"alert",children:[Object(s.jsx)(f,{}),Object(s.jsxs)("div",{className:"alert-right",children:[u("Based on 2019 population projection by NCP"),Object(s.jsx)("a",{href:"https://nhm.gov.in/New_Updates_2018/Report_Population_Projection_2019.pdf",target:"_noblank",children:"report"})]})]})]}),Object(s.jsxs)("div",{className:"StateMeta",children:[Object(s.jsx)(r,{className:"confirmed",title:"Confirmed Per Lakh",statistic:Object(l.e)(p),total:Object(l.e)(y),formula:Object(s.jsxs)(s.Fragment,{children:["".concat(1e5," x "),Object(s.jsx)(x,{numerator:"Total confirmed cases",denominator:"Total population"})]}),description:"\n            ~".concat(Object(l.e)(p,"long")," ").concat(u("out of every lakh people in")," ").concat(i.v[b]," ").concat(u("have tested positive for the virus."),"\n            ")}),Object(s.jsx)(r,{className:"active",title:"Active Ratio",statistic:"".concat(Object(l.e)(g,"%")),formula:Object(s.jsxs)(s.Fragment,{children:["100 x ",Object(s.jsx)(x,{numerator:"Total active cases right now",denominator:"Total confirmed cases"})]}),description:g>0?"".concat(u("For every 100 confirmed cases"),", ~").concat(Object(l.e)(g,"long")," ").concat(u("are currently infected.")):u("Currently, there are no active cases in this state.")}),Object(s.jsx)(r,{className:"recovery",title:"Recovery Ratio",statistic:"".concat(Object(l.e)(k,"%")),formula:Object(s.jsxs)(s.Fragment,{children:["100 x ",Object(s.jsx)(x,{numerator:"Total recovered cases",denominator:"Total confirmed cases"})]}),description:k>0?"".concat(u("For every 100 confirmed cases"),", ~").concat(Object(l.e)(k,"long")," ").concat(u("have recovered from the virus.")):u("Unfortunately, there are no recoveries in this state yet.")}),Object(s.jsx)(r,{className:"mortality",title:"Case Fatality Ratio",statistic:"".concat(Object(l.e)(w,"%")),formula:Object(s.jsxs)(s.Fragment,{children:["100 x ",Object(s.jsx)(x,{numerator:"Total deaths",denominator:"Total confirmed cases"})]}),description:w>0?"".concat(u("For every 100 confirmed cases"),", ~").concat(Object(l.e)(w,"long")," ").concat(u("have unfortunately passed away from the virus.")):u("Fortunately, no one has passed away from the virus in this state.")}),Object(s.jsx)(r,{className:"tpr",title:"Test Positivity Ratio",statistic:C>0?"".concat(Object(l.e)(C,"%")):"-",formula:Object(s.jsxs)(s.Fragment,{children:["100 x ",Object(s.jsx)(x,{numerator:"Confirmed cases last week",denominator:"Samples tested last week"})]}),date:"".concat(Object(l.c)(T,"dd MMM")," - ").concat(Object(l.c)(P,"dd MMM")),description:C>0?"".concat(u("In the last one week,")," ").concat(Object(l.e)(C,"%"),"\n              ").concat(u("of samples tested came back positive.")):u("No tested sample came back positive in last one week.")}),Object(s.jsx)(r,{className:"tpm",title:"Tests Per Lakh",statistic:"".concat(Object(l.e)(v)),formula:Object(s.jsxs)(s.Fragment,{children:["".concat(1e5," x "),Object(s.jsx)(x,{numerator:"Total samples tested",denominator:"Total population"})]}),date:v?"".concat(u("As of")," ").concat(Object(l.d)(null===(c=h[b])||void 0===c||null===(n=c.meta)||void 0===n||null===(m=n.tested)||void 0===m?void 0:m.last_updated)," ").concat(u("ago")):"",description:v>0?"".concat(u("For every lakh people in")," ").concat(i.v[b],",\n                ~").concat(Object(l.e)(v,"long")," ").concat(u("samples were tested.")):u("No tests have been conducted in this state yet.")})]})]})}var g=function(e,t){return!(t.timeseries&&!e.timeseries)&&e.stateCode===t.stateCode};t.default=Object(m.memo)(y,g)}}]);
//# sourceMappingURL=36.21973f7e.chunk.js.map