"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[748],{748:function(t,n,e){e.r(n),e.d(n,{default:function(){return v}});var r,a,u,i=e(439),s=e(791),c=e(87),o=e(689),p=e(565),f=e(168),h=e(444),l=h.ZP.form(r||(r=(0,f.Z)(["\nmargin-top: 20px;\n    margin-left: 20px;\n    width: 450px;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n"]))),d=h.ZP.input(a||(a=(0,f.Z)(["\n    padding: 0;\n    height: 30px;\n    width: 300px;\n    margin-right: 20px;\n    font-size: 14px;\n"]))),x=h.ZP.button(u||(u=(0,f.Z)(["\n    height: 30px;\n    width: 90px;\n    font-size: 16px;\n"]))),m=e(184),v=function(){var t=(0,s.useState)([]),n=(0,i.Z)(t,2),e=n[0],r=n[1],a=(0,c.lr)(),u=(0,i.Z)(a,2),f=u[0],h=u[1],v=f.get("searchText"),y=(0,s.useState)(!1),Z=(0,i.Z)(y,2),w=Z[0],g=Z[1],k=(0,o.TH)();console.log("location",k),(0,s.useEffect)((function(){""!==v&&null!==v&&(0,p.WK)(v).then((function(t){r(t),0===t.length&&g(!0)}))}),[v]);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(l,{onSubmit:function(t){t.preventDefault();var n=t.target;h({searchText:n.elements.searchText.value}),n.reset(),g(!1)},children:[(0,m.jsx)(d,{type:"text",name:"searchText"}),(0,m.jsx)(x,{type:"submit",children:"Search"})]}),(0,m.jsx)("ul",{children:e.map((function(t){var n=t.title,e=t.id;return(0,m.jsx)("li",{children:(0,m.jsx)(c.rU,{to:"".concat(e),state:{from:k},children:n})},e)}))}),w&&(0,m.jsx)("p",{children:"We don't have any movie for this search."})]})}},565:function(t,n,e){e.d(n,{E9:function(){return c},Hx:function(){return m},Mc:function(){return p},WK:function(){return h},uV:function(){return d}});var r=e(861),a=e(757),u=e.n(a),i=e(912),s="2f1ef3830286d020340d6039bd2ecd1f";function c(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,i.Z)("/trending/movie/day",{params:{api_key:s,size:20}});case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,i.Z)("/movie/".concat(n),{params:{api_key:s}});case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,i.Z)("/search/movie",{params:{api_key:s,query:n}});case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,i.Z)("/movie/".concat(n,"/credits"),{params:{api_key:s}});case 2:return e=t.sent,t.abrupt("return",e.data.cast);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,i.Z)("/movie/".concat(n,"/reviews"),{params:{api_key:s}});case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}i.Z.defaults.baseURL="https://api.themoviedb.org/3"}}]);
//# sourceMappingURL=748.3ee95b7f.chunk.js.map