"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{262:function(t,n,r){r.d(n,{Df:function(){return s},TP:function(){return f},gH:function(){return d},tx:function(){return v},zv:function(){return p}});var e=r(861),c=r(757),a=r.n(c),u=r(388),o="50f1c38da446101780a79b9df9405e4f",i="https://api.themoviedb.org/3/",s=function(){var t=(0,e.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"trending/movie/day",t.next=3,u.Z.get("".concat(i).concat("trending/movie/day","?api_key=").concat(o));case 3:return n=t.sent,t.abrupt("return",n.data.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(a().mark((function t(n){var r,e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="movie/".concat(n),t.next=3,u.Z.get("".concat(i).concat(r,"?api_key=").concat(o));case 3:return e=t.sent,t.abrupt("return",e.data);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(a().mark((function t(n){var r,e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="movie/".concat(n,"/credits"),t.next=3,u.Z.get("".concat(i).concat(r,"?api_key=").concat(o));case 3:return e=t.sent,t.abrupt("return",e.data);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,e.Z)(a().mark((function t(n){var r,e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="movie/".concat(n,"/reviews"),t.next=3,u.Z.get("".concat(i).concat(r,"?api_key=").concat(o));case 3:return e=t.sent,t.abrupt("return",e.data);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,e.Z)(a().mark((function t(n){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"search/movie",t.next=3,u.Z.get("".concat(i).concat("search/movie","?api_key=").concat(o,"&query=").concat(n));case 3:return r=t.sent,t.abrupt("return",r.data.results);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},494:function(t,n,r){var e=r(689),c=r(87),a=r(184),u=function(t){var n=t.films,r=(0,e.TH)(),u=n.map((function(t){var n=t.id,e=t.title;return(0,a.jsx)("li",{children:(0,a.jsx)(c.rU,{state:{from:r},to:"/movies/".concat(n),children:e})},n)}));return(0,a.jsx)("ul",{children:u})};u.defaultProps={films:[]},n.Z=u},415:function(t,n,r){r.r(n);var e=r(861),c=r(439),a=r(757),u=r.n(a),o=r(791),i=r(262),s=r(494),f=r(184);n.default=function(){var t=(0,o.useState)([]),n=(0,c.Z)(t,2),r=n[0],a=n[1];return(0,o.useEffect)((function(){var t=function(){var t=(0,e.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,i.Df)();case 3:n=t.sent,a(n),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,f.jsxs)("main",{children:[(0,f.jsx)("h1",{children:"Trending today"}),(0,f.jsx)(s.Z,{films:r})]})}}}]);
//# sourceMappingURL=415.8a94fb4c.chunk.js.map