import{S as L,i as M,s as N,C as O,k,a as I,l as b,m as S,c as j,h as m,n as p,D as $,E as q,b as w,F as T,G as z,H as B,I as C,J as G,f as H,t as R,K as V,q as A,r as F,u as K}from"../../chunks/index-ea582ccb.js";/* empty css                         */function D(o,t,i){const l=o.slice();return l[6]=t[i],l}function J(o){let t,i=o[6].text+"",l,f,_;return{c(){t=k("div"),l=A(i),f=I(),this.h()},l(r){t=b(r,"DIV",{class:!0,onclick:!0});var s=S(t);l=F(s,i),f=j(s),s.forEach(m),this.h()},h(){p(t,"class","barLink svelte-1p8ajew"),p(t,"onclick",_="location.href='"+o[6].url+"'")},m(r,s){w(r,t,s),T(t,l),T(t,f)},p(r,s){s&1&&i!==(i=r[6].text+"")&&K(l,i),s&1&&_!==(_="location.href='"+r[6].url+"'")&&p(t,"onclick",_)},d(r){r&&m(t)}}}function P(o){let t,i,l,f,_,r,s,h,g,y,d=o[0],n=[];for(let e=0;e<d.length;e+=1)n[e]=J(D(o,d,e));const E=o[4].default,u=O(E,o,o[3],null);return{c(){t=k("div");for(let e=0;e<n.length;e+=1)n[e].c();i=I(),l=k("img"),r=I(),s=k("main"),u&&u.c(),this.h()},l(e){t=b(e,"DIV",{class:!0});var c=S(t);for(let v=0;v<n.length;v+=1)n[v].l(c);i=j(c),l=b(c,"IMG",{id:!0,alt:!0,src:!0,class:!0}),c.forEach(m),r=j(e),s=b(e,"MAIN",{});var a=S(s);u&&u.l(a),a.forEach(m),this.h()},h(){p(l,"id","toggleButton"),p(l,"alt","close"),$(l.src,f=o[1]?"/close.png":"/leftarrow.png")||p(l,"src",f),p(l,"class","svelte-1p8ajew"),q(l,"toggleRotate",o[1]),p(t,"class",_=(o[1]?"open":"closed")+" bar svelte-1p8ajew")},m(e,c){w(e,t,c);for(let a=0;a<n.length;a+=1)n[a].m(t,null);T(t,i),T(t,l),w(e,r,c),w(e,s,c),u&&u.m(s,null),h=!0,g||(y=z(l,"click",o[2]),g=!0)},p(e,[c]){if(c&1){d=e[0];let a;for(a=0;a<d.length;a+=1){const v=D(e,d,a);n[a]?n[a].p(v,c):(n[a]=J(v),n[a].c(),n[a].m(t,i))}for(;a<n.length;a+=1)n[a].d(1);n.length=d.length}(!h||c&2&&!$(l.src,f=e[1]?"/close.png":"/leftarrow.png"))&&p(l,"src",f),(!h||c&2)&&q(l,"toggleRotate",e[1]),(!h||c&2&&_!==(_=(e[1]?"open":"closed")+" bar svelte-1p8ajew"))&&p(t,"class",_),u&&u.p&&(!h||c&8)&&B(u,E,e,e[3],h?G(E,e[3],c,null):C(e[3]),null)},i(e){h||(H(u,e),h=!0)},o(e){R(u,e),h=!1},d(e){e&&m(t),V(n,e),e&&m(r),e&&m(s),u&&u.d(e),g=!1,y()}}}function Q(o,t,i){let{$$slots:l={},$$scope:f}=t;const _=[{url:"/",text:"Home"},{url:"/search",text:"Search"},{url:"/telltale",text:"Telltale"},{url:"/memory",text:"Memory"},{url:"/eliza",text:"Eliza"},{url:"/todo",text:"Todo list"},{url:"/tictactoe",text:"Tic Tac Toe"}];let r=[],s=!1;function h(){i(1,s=!s),i(0,r=s?JSON.parse(JSON.stringify(_)):[])}return o.$$set=g=>{"$$scope"in g&&i(3,f=g.$$scope)},[r,s,h,f,l]}class X extends L{constructor(t){super(),M(this,t,Q,P,N,{})}}export{X as default};
