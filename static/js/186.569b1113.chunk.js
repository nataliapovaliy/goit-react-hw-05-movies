"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[186],{186:function(t,n,r){r.r(n);var e,a=r(168),u=r(439),s=r(791),c=r(689),i=r(565),o=r(444),p=r(184);n.default=function(){var t=(0,s.useState)(null),n=(0,u.Z)(t,2),r=n[0],f=n[1],h=(0,c.UO)().movieId;(0,s.useEffect)((function(){(0,i.Hx)(h).then((function(t){console.log("reviews",t),f(t)}))}),[h]);var l=o.ZP.p(e||(e=(0,a.Z)(["\n        font-weight: 500;\n    "])));return(0,p.jsx)(p.Fragment,{children:r&&r.length>0?(0,p.jsx)("ul",{children:r.map((function(t){var n=t.id,r=t.author,e=t.content;return(0,p.jsxs)("li",{children:[(0,p.jsxs)(l,{children:["Author: ",r]}),(0,p.jsx)("p",{children:e})]},n)}))}):(0,p.jsx)("p",{children:"We don't have any reviews for this movie."})})}},565:function(t,n,r){r.d(n,{E9:function(){return i},Hx:function(){return m},Mc:function(){return p},WK:function(){return h},uV:function(){return d}});var e=r(861),a=r(757),u=r.n(a),s=r(912),c="2f1ef3830286d020340d6039bd2ecd1f";function i(){return o.apply(this,arguments)}function o(){return(o=(0,e.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,s.Z)("/trending/movie/day",{params:{api_key:c,size:20}});case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,s.Z)("/movie/".concat(n),{params:{api_key:c}});case 2:return r=t.sent,console.log(r.data),t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return l.apply(this,arguments)}function l(){return(l=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,s.Z)("/search/movie",{params:{api_key:c,query:n}});case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return v.apply(this,arguments)}function v(){return(v=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,s.Z)("/movie/".concat(n,"/credits"),{params:{api_key:c}});case 2:return r=t.sent,t.abrupt("return",r.data.cast);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return w.apply(this,arguments)}function w(){return(w=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,s.Z)("/movie/".concat(n,"/reviews"),{params:{api_key:c}});case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}s.Z.defaults.baseURL="https://api.themoviedb.org/3"}}]);
//# sourceMappingURL=186.569b1113.chunk.js.map