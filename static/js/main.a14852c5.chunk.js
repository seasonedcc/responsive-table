(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{121:function(e,a,t){e.exports=t(441)},440:function(e,a,t){},441:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(109),o=t.n(r),s=t(117),c=t(461),i=t(19),m=t(462),p=t(463),u=t(460),d=t(70),h=t.n(d),b=t(454),y=t(455),E=t(456),f=t(457),v=t(458),g=t(459),w=t(69),z=t.n(w),k=t(39),P=t.n(k),T=t(111),F=t.n(T);function j(){return(j=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function x(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){var t=[],n=!0,l=!1,r=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(t.push(o.value),!a||t.length!==a);n=!0);}catch(c){l=!0,r=c}finally{try{n||null==s.return||s.return()}finally{if(l)throw r}}return t}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var H=function(e){var a=e.content,t=e.align,n=!P()(a,"$$typeof")&&z()(a),r=n?P()(a,"content"):a;return l.a.createElement(b.a,j({align:t},n?F()(a,"content"):{}),r)},B=function(e){var a=e.data,t=e.scrollable,n=void 0===t||t,r=e.tableProps,o=void 0===r?{}:r,s=x(a,1)[0];return l.a.createElement("div",{style:n?{overflowX:"auto",width:"100%"}:{}},l.a.createElement(y.a,o,l.a.createElement(E.a,null,l.a.createElement(f.a,null,Object.keys(s).map(function(e,a){return l.a.createElement(b.a,{key:"tableheader-".concat(a)},e)}))),l.a.createElement(v.a,null,a.map(function(e,a){return l.a.createElement(f.a,{key:"tablerow-".concat(a)},h()(e,function(e,t){return l.a.createElement(H,{key:"tablecell-".concat(a,"-").concat(t),content:e})}))}))))},C=function(e){var a=e.data,t=void 0===a?[]:a,n=e.cardProps,r=e.scrollable,o=e.tableProps,s=void 0===o?{}:o;return l.a.createElement("div",null,t.map(function(e,a){return l.a.createElement(m.a,j({},n,{key:"card-".concat(a)}),l.a.createElement("div",{style:r?{overflowX:"auto",width:"100%"}:{}},l.a.createElement(y.a,s,l.a.createElement(v.a,null,h()(e,function(e,t){return e?l.a.createElement(f.a,{key:"tablecell-".concat(a,"-").concat(t)},l.a.createElement(b.a,null,t),l.a.createElement(H,{align:"right",content:e})):null})))))}))},I=function(e){var a=e.data,t=e.scrollable,n=void 0!==t&&t,r=e.tableProps,o=void 0===r?{}:r,s=e.mobileTableProps,c=void 0===s?{}:s,i=e.cardProps,m=void 0===i?{}:i,p=e.mediaQuery,u=void 0===p?"(min-width:600px)":p;return a.length<1?null:Object(g.a)(u)?l.a.createElement(B,{data:a,scrollable:n,tableProps:o}):l.a.createElement(C,{data:a,scrollable:n,cardProps:m,tableProps:c})},R=[{Foo:"Bar",Fizz:l.a.createElement("span",{style:{color:"red"}},"Buzz"),Hello:{content:"World",style:{color:"red"}}},{Foo:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",Fizz:"Fizz",Hello:"Hello"},{Foo:{content:"Hakuna matata!",className:"special-one",align:"right"},Fizz:null,Hello:{content:l.a.createElement("strong",null,"Bar foo"),align:"left"}}],O=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,{elevation:5},l.a.createElement(p.a,{title:"Scrollable"}),l.a.createElement(u.a,null,l.a.createElement("p",null,"The ",l.a.createElement("em",null,"scrollable")," prop will make both tables (desktop and mobile) scroll when the width of the container is not enough for the table content."),l.a.createElement("p",null,"The ",l.a.createElement("em",null,"tableProps")," will only affect the ",l.a.createElement("em",null,"desktop version"),". You can pass any prop that is acceptable by"," ",l.a.createElement("a",{href:"https://material-ui.com/api/table/",target:"_blank",rel:"noopener noreferrer"},"Table")," ","component."),l.a.createElement(I,{scrollable:!0,data:R,tableProps:{style:{minWidth:800}}})),l.a.createElement(c.a,{language:"javascript",style:i.a},"\nimport { ResponsiveTable } from '@seasonedsoftware/responsive-table'\n\n// MyComponent\n<ResponsiveTable\n  scrollable\n  data={data} // see last sample\n  tableProps={{ style: { minWidth: 800 } }}\n/>")),l.a.createElement(m.a,{elevation:5},l.a.createElement(p.a,{title:"Change mobile Props"}),l.a.createElement(u.a,null,l.a.createElement("p",null,"The ",l.a.createElement("em",null,"mobileTableProps")," and ",l.a.createElement("em",null,"cardProps")," are only used on the mobile version of the table. You can pass any prop that is acceptable by"," ",l.a.createElement("a",{href:"https://material-ui.com/api/table/",target:"_blank",rel:"noopener noreferrer"},"Table")," ","and"," ",l.a.createElement("a",{href:"https://material-ui.com/api/card/",target:"_blank",rel:"noopener noreferrer"},"Card")," ","respectively."),l.a.createElement(I,{data:R,mobileTableProps:{size:"small"},cardProps:{elevation:10}})),l.a.createElement(c.a,{language:"javascript",style:i.a},"\nimport { ResponsiveTable } from '@seasonedsoftware/responsive-table'\n\n// MyComponent\n<ResponsiveTable\n  data={data} // see last sample\n  mobileTableProps={{ size: 'small' }}\n  cardProps={{ elevation: 10 }}\n/>")),l.a.createElement(m.a,{elevation:5},l.a.createElement(p.a,{title:"Change the breakpoint"}),l.a.createElement(u.a,null,l.a.createElement("p",null,"You can pass a ",l.a.createElement("em",null,"mediaQuery")," prop with a media query string. If it matches, then the table is shown."),l.a.createElement(I,{data:R,mediaQuery:"(min-width:890px)"})),l.a.createElement(c.a,{language:"javascript",style:i.a},"\nimport { ResponsiveTable } from '@seasonedsoftware/responsive-table'\n\n// MyComponent\n<ResponsiveTable\n  data={data} // see last sample\n  mediaQuery=\"(min-width:890px)\" // default: (min-width:600px)\n/>")),l.a.createElement(m.a,{elevation:5},l.a.createElement(p.a,{title:"The Data for these samples"}),l.a.createElement(u.a,null,l.a.createElement("p",null,"The ",l.a.createElement("em",null,"data")," prop should be an array with objects. The object keys of the first array should be what you want as the table header."),l.a.createElement("p",null,"For the values, you can pass either a string, a react element, or another object which should have a content key. Any other key will be passed to the TableCell as props."),l.a.createElement("p",null,l.a.createElement("em",null,"Null")," values will be hidden in the mobile version.")),l.a.createElement(c.a,{language:"javascript",style:i.a},"\nconst data = [\n  {\n    Foo: 'Bar',\n    Fizz: <span style={{ color: 'red' }}>Buzz</span>,\n    Hello: {\n      content: 'World',\n      style: { color: 'red' },\n    },\n  },\n  {\n    Foo: `Lorem Ipsum is simply dummy text of\n    the printing and typesetting industry.\n    Lorem Ipsum has been the industry's standard\n    dummy text ever since the 1500s`,\n    Fizz: 'Fizz',\n    Hello: 'Hello',\n  },\n  {\n    Foo: {\n      content: 'Hakuna matata!',\n      className: 'special-one',\n      align: 'right',\n    },\n    Fizz: null,\n    Hello: {\n      content: <strong>Bar foo</strong>,\n      align: 'left',\n    },\n  },\n]")))},A=(t(440),function(){return l.a.createElement("div",{className:"App"},l.a.createElement(s.a,{basepath:"/responsive-table"},l.a.createElement(O,{path:"/"})))});o.a.render(l.a.createElement(A,null),document.getElementById("root"))}},[[121,1,2]]]);
//# sourceMappingURL=main.a14852c5.chunk.js.map