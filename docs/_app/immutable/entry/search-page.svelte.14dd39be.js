import{S as C,i as L,s as q,k as u,q as x,a as g,l as p,m,r as E,h as f,c as k,n as P,b as A,F as c,L as v,K as w}from"../chunks/index.f74c24be.js";function H(n,e,t){const a=n.slice();return a[0]=e[t],a}function I(n){let e,t,a=n[0][0]+"",h;return{c(){e=u("li"),t=u("a"),h=x(a),this.h()},l(r){e=p(r,"LI",{});var l=m(e);t=p(l,"A",{href:!0});var o=m(t);h=E(o,a),o.forEach(f),l.forEach(f),this.h()},h(){P(t,"href","/search"+n[0][1])},m(r,l){A(r,e,l),c(e,t),c(t,h)},p:v,d(r){r&&f(e)}}}function O(n){let e,t,a,h,r,l,o,B=[["Users","/users"],["Address","/addresses"],["Banks","/banks"],["Appliances","/appliances"],["Beers","/beers"],["Blood Types","/blood_types"],["Credit Cards","/credit_cards"]],_=[];for(let s=0;s<7;s+=1)_[s]=I(H(n,B,s));return{c(){e=u("div"),t=u("h1"),a=x("Press any of the following categories to display their items (Preferably users :O)"),h=g(),r=u("hr"),l=g(),o=u("ul");for(let s=0;s<7;s+=1)_[s].c();this.h()},l(s){e=p(s,"DIV",{class:!0});var i=m(e);t=p(i,"H1",{});var d=m(t);a=E(d,"Press any of the following categories to display their items (Preferably users :O)"),d.forEach(f),h=k(i),r=p(i,"HR",{}),l=k(i),o=p(i,"UL",{});var b=m(o);for(let y=0;y<7;y+=1)_[y].l(b);b.forEach(f),i.forEach(f),this.h()},h(){P(e,"class","chat")},m(s,i){A(s,e,i),c(e,t),c(t,a),c(e,h),c(e,r),c(e,l),c(e,o);for(let d=0;d<7;d+=1)_[d]&&_[d].m(o,null)},p:v,i:v,o:v,d(s){s&&f(e),w(_,s)}}}class U extends C{constructor(e){super(),L(this,e,null,O,q,{})}}export{U as default};
