import{S as C,i as H,s as J,k as m,q as N,a as S,l as g,m as y,r as q,h as f,c as b,n as O,b as w,F as _,u as A,B as k,K as P}from"../../../../chunks/index-ea582ccb.js";function x(c,e,n){const l=c.slice();return l[1]=e[n],l}function I(c){let e,n,l=JSON.stringify(c[1])+"",r;return{c(){e=m("article"),n=m("p"),r=N(l)},l(o){e=g(o,"ARTICLE",{});var h=y(e);n=g(h,"P",{});var d=y(n);r=q(d,l),d.forEach(f),h.forEach(f)},m(o,h){w(o,e,h),_(e,n),_(n,r)},p(o,h){h&1&&l!==(l=JSON.stringify(o[1])+"")&&A(r,l)},d(o){o&&f(e)}}}function R(c){let e,n,l="Showing results for: "+c[0].params.category,r,o,h,d,u,p=c[0].response,s=[];for(let t=0;t<p.length;t+=1)s[t]=I(x(c,p,t));return{c(){e=m("main"),n=m("h2"),r=N(l),o=S(),h=m("hr"),d=S(),u=m("div");for(let t=0;t<s.length;t+=1)s[t].c();this.h()},l(t){e=g(t,"MAIN",{class:!0});var i=y(e);n=g(i,"H2",{});var a=y(n);r=q(a,l),a.forEach(f),o=b(i),h=g(i,"HR",{}),d=b(i),u=g(i,"DIV",{});var v=y(u);for(let E=0;E<s.length;E+=1)s[E].l(v);v.forEach(f),i.forEach(f),this.h()},h(){O(e,"class","svelte-1i83ph7")},m(t,i){w(t,e,i),_(e,n),_(n,r),_(e,o),_(e,h),_(e,d),_(e,u);for(let a=0;a<s.length;a+=1)s[a].m(u,null)},p(t,[i]){if(i&1&&l!==(l="Showing results for: "+t[0].params.category)&&A(r,l),i&1){p=t[0].response;let a;for(a=0;a<p.length;a+=1){const v=x(t,p,a);s[a]?s[a].p(v,i):(s[a]=I(v),s[a].c(),s[a].m(u,null))}for(;a<s.length;a+=1)s[a].d(1);s.length=p.length}},i:k,o:k,d(t){t&&f(e),P(s,t)}}}function B(c,e,n){let{data:l}=e;return c.$$set=r=>{"data"in r&&n(0,l=r.data)},[l]}class F extends C{constructor(e){super(),H(this,e,B,R,J,{data:0})}}export{F as default};