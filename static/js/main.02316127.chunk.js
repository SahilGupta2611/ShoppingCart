(this.webpackJsonpshoppingcart=this.webpackJsonpshoppingcart||[]).push([[0],{38:function(e,c,t){},64:function(e,c,t){"use strict";t.r(c);var n=t(0),a=t.n(n),r=t(16),s=t.n(r),i=(t(38),t(1)),o=function(){return Object(i.jsx)("div",{className:"ui fixed menu",children:Object(i.jsx)("div",{className:"ui container center",children:Object(i.jsx)("h2",{children:"FakeShop"})})})},d=t(19),l=t(3),j=t(11),u=t.n(j),b=t(18),O=t(9),h=function(){var e=Object(O.c)((function(e){return e.allProducts.products}));console.log("final",e);var c=e.map((function(e){var c=e.id,t=e.title,n=e.image,a=e.price,r=e.category;return Object(i.jsx)("div",{className:"four wide column",children:Object(i.jsx)(d.b,{to:"/product/".concat(c),children:Object(i.jsx)("div",{className:"ui link cards",children:Object(i.jsxs)("div",{className:"card",children:[Object(i.jsx)("div",{className:"image",children:Object(i.jsx)("img",{src:n,alt:t})}),Object(i.jsxs)("div",{className:"content",children:[Object(i.jsx)("div",{className:"header",children:t}),Object(i.jsxs)("div",{className:"meta price",children:[" $ ",a]}),Object(i.jsx)("div",{className:"meta",children:r})]})]})})})},c)}));return Object(i.jsxs)(i.Fragment,{children:[" ",c," "]})},p=t(20),m=t.n(p),x="SET_PRODUCTS",v="SELECTED_PRODUCT",f="REMOVE_SELECTED_PRODUCT",g=function(e){return{type:x,payload:e}},N=function(e){return{type:v,payload:e}},E=function(){var e=Object(O.c)((function(e){return e})),c=Object(O.b)(),t=function(){var e=Object(b.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://fakestoreapi.com/products").catch((function(e){console.log("err"+e)}));case 2:t=e.sent,c(g(t.data));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){t()}),[]),console.log("products : ",e),Object(i.jsx)("div",{className:"ui grid container",children:Object(i.jsx)(h,{})})},_=function(){var e=Object(O.c)((function(e){return e.product})),c=e.image,t=e.title,a=e.price,r=e.category,s=e.description,o=Object(O.b)(),d=Object(l.f)().productId;console.log(e),console.log(d);var j=function(){var e=Object(b.a)(u.a.mark((function e(){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://fakestoreapi.com/products/".concat(d)).catch((function(e){return console.log("err :",e)}));case 2:c=e.sent,console.log(c.data),o(N(c.data));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){if(d&&""!==d)return j(),function(){o({type:f})}}),[d]),Object(i.jsx)("div",{className:"ui grid container",children:0===Object.keys(e).length?Object(i.jsx)("div",{children:"...Loading"}):Object(i.jsx)("div",{className:"ui placeholder segment",children:Object(i.jsxs)("div",{className:"ui two column stackable center aligned grid",children:[Object(i.jsx)("div",{className:"ui vertical divider",children:"AND"}),Object(i.jsxs)("div",{className:"middle aligned row",children:[Object(i.jsx)("div",{className:"column lp",children:Object(i.jsx)("img",{className:"ui fluid image",src:c})}),Object(i.jsxs)("div",{className:"column rp",children:[Object(i.jsx)("h1",{children:t}),Object(i.jsx)("h2",{children:Object(i.jsxs)("a",{className:"ui teal tag label",children:["$",a]})}),Object(i.jsx)("h3",{className:"ui brown block header",children:r}),Object(i.jsx)("p",{children:s}),Object(i.jsxs)("div",{className:"ui vertical animated button",tabIndex:"0",children:[Object(i.jsx)("div",{className:"hidden content",children:Object(i.jsx)("i",{className:"shop icon"})}),Object(i.jsx)("div",{className:"visible content",children:"Add to Cart"})]})]})]})]})})})};var w=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)(d.a,{children:[Object(i.jsx)(o,{}),Object(i.jsxs)(l.c,{children:[Object(i.jsx)(l.a,{path:"/",exact:!0,component:E}),Object(i.jsx)(l.a,{path:"/product/:productId",exact:!0,component:_}),Object(i.jsx)(l.a,{children:"404 Not Found"})]})]})})},y=t(21),k=t(13),D={products:[]},S=Object(y.a)({allProducts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,c=arguments.length>1?arguments[1]:void 0,t=c.type,n=c.payload;return t===x?Object(k.a)(Object(k.a)({},e),{},{products:n}):e},product:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},c=arguments.length>1?arguments[1]:void 0,t=c.type,n=c.payload;switch(t){case v:return Object(k.a)(Object(k.a)({},e),n);case f:return{};default:return e}}}),T=S,C=Object(y.b)(T,{},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());s.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(O.a,{store:C,children:Object(i.jsx)(w,{})})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.02316127.chunk.js.map