"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[957],{661:function(e,t,n){n.d(t,{Df:function(){return u},Pg:function(){return o},lP:function(){return p},tx:function(){return d},zv:function(){return l}});var r=n(861),a=n(757),c=n.n(a),s=n(294),i="https://api.themoviedb.org/3/";s.Z.defaults.params={api_key:"3df770cbcce42751a371232778d32a4f"};var u=function(){var e=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(i,"trending/all/day"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(i,"movie/").concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(i,"movie/").concat(t,"/credits"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(i,"movie/").concat(t,"/reviews"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(i,"search/movie?query=").concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},957:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r=n(861),a=n(439),c=n(757),s=n.n(c),i=n(661),u=n(791),o=n(689),l=n(87),d=n(174),p=(n(462),n(184)),f=function(e){var t=e.movie,n=t.title,r=t.name,a=t.poster_path,c=t.overview,s=t.genres,i=t.vote_average;return(0,p.jsxs)("div",{className:"card-wraper",children:[(0,p.jsx)("img",{className:"card-img",src:a?"https://image.tmdb.org/t/p/w500/".concat(a):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",width:300,alt:"poster to movie: ".concat(n)}),(0,p.jsxs)("div",{className:"card-info-wrapper",children:[(0,p.jsx)("h1",{children:n||r}),(0,p.jsxs)("p",{children:["User Score: ",i]}),(0,p.jsx)("h2",{children:"Overview"}),(0,p.jsx)("p",{children:c}),s&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h2",{children:"Genres"}),(0,p.jsx)("ul",{className:"genres-list",children:s.map((function(e){return(0,p.jsx)("li",{children:e.name},e.id)}))})]})]})]})},h=n(510),v=(0,u.lazy)((function(){return n.e(253).then(n.bind(n,253))})),m=(0,u.lazy)((function(){return n.e(186).then(n.bind(n,186))})),x=function(){var e,t,n=(0,o.UO)().movieId,c=(0,o.TH)(),x=(0,u.useRef)(null!==(e=null===(t=c.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/"),j=(0,u.useState)(null),w=(0,a.Z)(j,2),g=w[0],k=w[1],b=(0,u.useState)(!1),Z=(0,a.Z)(b,2),y=Z[0],N=Z[1],_=(0,u.useState)(null),S=(0,a.Z)(_,2),A=S[0],O=S[1];return(0,u.useEffect)((function(){var e=function(){var e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,N(!0),e.next=4,(0,i.Pg)(n);case 4:t=e.sent,k(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),O(d.Am.error("Sorry, something went wrong. Try again!",{theme:"colored"}));case 11:return e.prev=11,N(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(l.OL,{className:"backLink",to:x.current,children:"Go back"}),y&&(0,p.jsx)(h.a,{}),A&&(0,p.jsx)(d.Ix,{}),g&&(0,p.jsx)(f,{movie:g}),(0,p.jsxs)("div",{className:"additional-wrapper",children:[(0,p.jsx)("h3",{className:"adittional-title",children:" Additional information"}),(0,p.jsxs)("ul",{className:"adittional-list",children:[(0,p.jsx)("li",{className:"adittional-item",children:(0,p.jsx)(l.OL,{to:"cast",children:"Casts"})}),(0,p.jsx)("li",{className:"adittional-item",children:(0,p.jsx)(l.OL,{to:"reviews",children:"Reviews"})})]})]}),(0,p.jsx)(u.Suspense,{fallback:(0,p.jsx)(h.a,{}),children:(0,p.jsxs)(o.Z5,{children:[(0,p.jsx)(o.AW,{path:"cast",element:(0,p.jsx)(v,{})}),(0,p.jsx)(o.AW,{path:"reviews",element:(0,p.jsx)(m,{})})]})})]})}}}]);
//# sourceMappingURL=957.0dda9ceb.chunk.js.map