import{S as G,i as K,s as W,k as m,a as H,q as P,l as x,m as D,c as V,r as T,h as d,D as j,n as I,b as A,F as h,B as N,K as C}from"../../../chunks/index-882ee3ba.js";function S(f,e,c){const n=f.slice();return n[1]=e[c],n}function $(f,e,c){const n=f.slice();return n[4]=e[c],n}function w(f){let e,c=f[4].value+"",n;return{c(){e=m("p"),n=P(c)},l(u){e=x(u,"P",{});var g=D(e);n=T(g,c),g.forEach(d)},m(u,g){A(u,e,g),h(e,n)},p:N,d(u){u&&d(e)}}}function B(f){let e,c,n=f[1].title+"",u,g,_,b,E=f[1].cards,l=[];for(let s=0;s<E.length;s+=1)l[s]=w($(f,E,s));return{c(){e=m("div"),c=m("h1"),u=P(n),g=H(),_=m("div");for(let s=0;s<l.length;s+=1)l[s].c();b=H(),this.h()},l(s){e=x(s,"DIV",{class:!0});var r=D(e);c=x(r,"H1",{});var t=D(c);u=T(t,n),t.forEach(d),g=V(r),_=x(r,"DIV",{class:!0});var p=D(_);for(let q=0;q<l.length;q+=1)l[q].l(p);p.forEach(d),b=V(r),r.forEach(d),this.h()},h(){I(_,"class","svelte-xlxfqc"),I(e,"class","list svelte-xlxfqc")},m(s,r){A(s,e,r),h(e,c),h(c,u),h(e,g),h(e,_);for(let t=0;t<l.length;t+=1)l[t]&&l[t].m(_,null);h(e,b)},p(s,r){if(r&1){E=s[1].cards;let t;for(t=0;t<E.length;t+=1){const p=$(s,E,t);l[t]?l[t].p(p,r):(l[t]=w(p),l[t].c(),l[t].m(_,null))}for(;t<l.length;t+=1)l[t].d(1);l.length=E.length}},d(s){s&&d(e),C(l,s)}}}function z(f){let e,c,n,u,g,_,b,E,l,s,r,t,p,q=f[0],o=[];for(let i=0;i<q.length;i+=1)o[i]=B(S(f,q,i));return{c(){e=m("main"),c=m("div"),n=m("img"),g=H(),_=m("p"),b=P("Not Trello"),E=H(),l=m("div"),s=H(),r=m("div");for(let i=0;i<o.length;i+=1)o[i].c();t=H(),p=m("div"),this.h()},l(i){e=x(i,"MAIN",{class:!0});var v=D(e);c=x(v,"DIV",{class:!0});var a=D(c);n=x(a,"IMG",{src:!0,alt:!0,class:!0}),g=V(a),_=x(a,"P",{});var k=D(_);b=T(k,"Not Trello"),k.forEach(d),a.forEach(d),E=V(v),l=x(v,"DIV",{class:!0}),D(l).forEach(d),s=V(v),r=x(v,"DIV",{class:!0});var M=D(r);for(let y=0;y<o.length;y+=1)o[y].l(M);M.forEach(d),t=V(v),p=x(v,"DIV",{class:!0});var F=D(p);F.forEach(d),v.forEach(d),this.h()},h(){j(n.src,u="/logo.png")||I(n,"src",u),I(n,"alt","logo"),I(n,"class","svelte-xlxfqc"),I(c,"class","logo svelte-xlxfqc"),I(l,"class","section new svelte-xlxfqc"),I(r,"class","section main svelte-xlxfqc"),I(p,"class","section svelte-xlxfqc"),I(e,"class","bg svelte-xlxfqc")},m(i,v){A(i,e,v),h(e,c),h(c,n),h(c,g),h(c,_),h(_,b),h(e,E),h(e,l),h(e,s),h(e,r);for(let a=0;a<o.length;a+=1)o[a]&&o[a].m(r,null);h(e,t),h(e,p)},p(i,[v]){if(v&1){q=i[0];let a;for(a=0;a<q.length;a+=1){const k=S(i,q,a);o[a]?o[a].p(k,v):(o[a]=B(k),o[a].c(),o[a].m(r,null))}for(;a<o.length;a+=1)o[a].d(1);o.length=q.length}},i:N,o:N,d(i){i&&d(e),C(o,i)}}}function J(f){return[[{title:"Todo",cards:[{type:"text",value:"Hello there"},{type:"text",value:"HEHEHEHAW"}]}]]}class O extends G{constructor(e){super(),K(this,e,J,z,W,{})}}export{O as default};
