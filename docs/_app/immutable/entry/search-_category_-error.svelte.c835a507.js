import{S as A,i as C,s as F,k as f,q as _,a as S,l as d,m as q,r as g,h as v,c as Y,b as I,F as s,u as y,L as k,M as L}from"../chunks/index.f74c24be.js";import{p as N}from"../chunks/stores.e3976b67.js";function R(l){let e,o,r="You searched for: "+l[0].params.category,i,E,b,H,n,c=l[0].status+"",h,$,m=l[0].error.message+"",p;return{c(){e=f("main"),o=f("h2"),i=_(r),E=S(),b=f("hr"),H=S(),n=f("h1"),h=_(c),$=_(": "),p=_(m)},l(t){e=d(t,"MAIN",{});var a=q(e);o=d(a,"H2",{});var M=q(o);i=g(M,r),M.forEach(v),E=Y(a),b=d(a,"HR",{}),H=Y(a),n=d(a,"H1",{});var u=q(n);h=g(u,c),$=g(u,": "),p=g(u,m),u.forEach(v),a.forEach(v)},m(t,a){I(t,e,a),s(e,o),s(o,i),s(e,E),s(e,b),s(e,H),s(e,n),s(n,h),s(n,$),s(n,p)},p(t,[a]){a&1&&r!==(r="You searched for: "+t[0].params.category)&&y(i,r),a&1&&c!==(c=t[0].status+"")&&y(h,c),a&1&&m!==(m=t[0].error.message+"")&&y(p,m)},i:k,o:k,d(t){t&&v(e)}}}function j(l,e,o){let r;return L(l,N,i=>o(0,r=i)),[r]}class z extends A{constructor(e){super(),C(this,e,j,R,F,{})}}export{z as default};
