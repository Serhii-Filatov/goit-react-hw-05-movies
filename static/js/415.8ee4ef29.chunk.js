"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{661:function(t,e,n){n.d(e,{Df:function(){return i},Pg:function(){return o},lP:function(){return l},tx:function(){return f},zv:function(){return p}});var r=n(861),a=n(757),c=n.n(a),u=n(294),s="https://api.themoviedb.org/3/";u.Z.defaults.params={api_key:"3df770cbcce42751a371232778d32a4f"};var i=function(){var t=(0,r.Z)(c().mark((function t(){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"trending/all/day"));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"movie/").concat(e));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"movie/").concat(e,"/credits"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"movie/").concat(e,"/reviews"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"search/movie?query=").concat(e));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},734:function(t,e,n){var r=n(689),a=n(87),c=n(184);e.Z=function(t){var e=t.movies,n=(0,r.TH)();return(0,c.jsx)("ul",{className:"trending-list",children:e&&e.map((function(t){var e=t.id,r=t.poster_path,u=t.title,s=t.name;return(0,c.jsx)("li",{className:"trending-item",children:(0,c.jsxs)(a.rU,{state:{from:n},className:"trending-link",to:"/movies/".concat(e),children:[(0,c.jsx)("img",{className:"trending-item-img",width:300,src:r?"https://image.tmdb.org/t/p/w500/".concat(r):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:"Card to ".concat(u)}),(0,c.jsx)("h2",{className:"trending-item-title",children:u||s})]})},e)}))})}},415:function(t,e,n){n.r(e);var r=n(861),a=n(439),c=n(757),u=n.n(c),s=n(791),i=n(174),o=(n(462),n(661)),p=n(734),f=n(510),l=n(184);e.default=function(){var t=(0,s.useState)([]),e=(0,a.Z)(t,2),n=e[0],c=e[1],m=(0,s.useState)(!1),d=(0,a.Z)(m,2),v=d[0],h=d[1],x=(0,s.useState)(null),g=(0,a.Z)(x,2),w=g[0],Z=g[1];return(0,s.useEffect)((function(){var t=function(){var t=(0,r.Z)(u().mark((function t(){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,h(!0),t.next=4,(0,o.Df)();case 4:e=t.sent,n=e.results,c(n),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),Z(i.Am.error("Sorry, something went wrong. Try again!",{theme:"colored"}));case 12:return t.prev=12,h(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h1",{className:"title",children:"Trending today"}),v&&(0,l.jsx)(f.a,{}),w&&(0,l.jsx)(i.Ix,{}),(0,l.jsx)(p.Z,{movies:n})]})}}}]);
//# sourceMappingURL=415.8ee4ef29.chunk.js.map