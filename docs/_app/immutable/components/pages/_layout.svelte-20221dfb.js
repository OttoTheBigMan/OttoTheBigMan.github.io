import{S as M,i as N,s as O,C as w,k,a as E,l as b,m as I,c as S,h as p,n as h,D,b as q,E as T,F as z,G as B,H as C,I as G,f as H,t as V,J as A,q as F,r as j,u as K}from"../../chunks/index-76a51a98.js";/* empty css                         */function J(o,t,i){const l=o.slice();return l[6]=t[i],l}function L(o){let t,i=o[6].text+"",l,f,_;return{c(){t=k("div"),l=F(i),f=E(),this.h()},l(r){t=b(r,"DIV",{class:!0,onclick:!0});var s=I(t);l=j(s,i),f=S(s),s.forEach(p),this.h()},h(){h(t,"class","barLink svelte-m913rq"),h(t,"onclick",_="location.href='"+o[6].url+"'")},m(r,s){q(r,t,s),T(t,l),T(t,f)},p(r,s){s&1&&i!==(i=r[6].text+"")&&K(l,i),s&1&&_!==(_="location.href='"+r[6].url+"'")&&h(t,"onclick",_)},d(r){r&&p(t)}}}function P(o){let t,i,l,f,_,r,s,m,d,$,v=o[0],n=[];for(let e=0;e<v.length;e+=1)n[e]=L(J(o,v,e));const y=o[4].default,u=w(y,o,o[3],null);return{c(){t=k("div");for(let e=0;e<n.length;e+=1)n[e].c();i=E(),l=k("img"),r=E(),s=k("main"),u&&u.c(),this.h()},l(e){t=b(e,"DIV",{class:!0});var c=I(t);for(let g=0;g<n.length;g+=1)n[g].l(c);i=S(c),l=b(c,"IMG",{id:!0,alt:!0,src:!0,class:!0}),c.forEach(p),r=S(e),s=b(e,"MAIN",{});var a=I(s);u&&u.l(a),a.forEach(p),this.h()},h(){h(l,"id","toggleButton"),h(l,"alt","close"),D(l.src,f=o[1]?"/close.png":"/leftarrow.png")||h(l,"src",f),h(l,"class","svelte-m913rq"),h(t,"class",_=(o[1]?"open":"closed")+" bar svelte-m913rq")},m(e,c){q(e,t,c);for(let a=0;a<n.length;a+=1)n[a].m(t,null);T(t,i),T(t,l),q(e,r,c),q(e,s,c),u&&u.m(s,null),m=!0,d||($=z(l,"click",o[2]),d=!0)},p(e,[c]){if(c&1){v=e[0];let a;for(a=0;a<v.length;a+=1){const g=J(e,v,a);n[a]?n[a].p(g,c):(n[a]=L(g),n[a].c(),n[a].m(t,i))}for(;a<n.length;a+=1)n[a].d(1);n.length=v.length}(!m||c&2&&!D(l.src,f=e[1]?"/close.png":"/leftarrow.png"))&&h(l,"src",f),(!m||c&2&&_!==(_=(e[1]?"open":"closed")+" bar svelte-m913rq"))&&h(t,"class",_),u&&u.p&&(!m||c&8)&&B(u,y,e,e[3],m?G(y,e[3],c,null):C(e[3]),null)},i(e){m||(H(u,e),m=!0)},o(e){V(u,e),m=!1},d(e){e&&p(t),A(n,e),e&&p(r),e&&p(s),u&&u.d(e),d=!1,$()}}}function Q(o,t,i){let{$$slots:l={},$$scope:f}=t;const _=[{url:"/",text:"Home"},{url:"/telltale",text:"Telltale"},{url:"/memory",text:"Memory"},{url:"/eliza",text:"Eliza"},{url:"/todo",text:"Todo list"},{url:"/tictactoe",text:"Tic Tac Toe"}];let r=[],s=!1;function m(){i(1,s=!s),i(0,r=s?JSON.parse(JSON.stringify(_)):[])}return o.$$set=d=>{"$$scope"in d&&i(3,f=d.$$scope)},[r,s,m,f,l]}class W extends M{constructor(t){super(),N(this,t,Q,P,O,{})}}export{W as default};
