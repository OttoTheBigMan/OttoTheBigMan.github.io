import{S as ee,i as te,s as le,k as y,a as L,q as Y,l as k,m as P,c as q,r as j,h as g,D as w,n as c,b as N,F as d,G as T,B as W,K as $,E as X,u as K,P as se,Q as ne}from"../../../chunks/index-882ee3ba.js";function x(n,e,l){const s=n.slice();return s[14]=e[l],s[15]=e,s[16]=l,s}function z(n,e,l){const s=n.slice();return s[17]=e[l],s}function ie(n){let e,l;return{c(){e=y("img"),this.h()},l(s){e=k(s,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){w(e.src,l=n[17].value)||c(e,"src",l),c(e,"alt","bollar"),c(e,"class","svelte-1n9ykd5")},m(s,a){N(s,e,a)},p(s,a){a&1&&!w(e.src,l=s[17].value)&&c(e,"src",l)},d(s){s&&g(e)}}}function ae(n){let e,l=n[17].value+"",s,a;return{c(){e=y("a"),s=Y(l),this.h()},l(t){e=k(t,"A",{href:!0,class:!0});var r=P(e);s=j(r,l),r.forEach(g),this.h()},h(){c(e,"href",a=n[17].path),c(e,"class","svelte-1n9ykd5")},m(t,r){N(t,e,r),d(e,s)},p(t,r){r&1&&l!==(l=t[17].value+"")&&K(s,l),r&1&&a!==(a=t[17].path)&&c(e,"href",a)},d(t){t&&g(e)}}}function re(n){let e,l=n[17].value+"",s;return{c(){e=y("p"),s=Y(l),this.h()},l(a){e=k(a,"P",{class:!0});var t=P(e);s=j(t,l),t.forEach(g),this.h()},h(){c(e,"class","svelte-1n9ykd5")},m(a,t){N(a,e,t),d(e,s)},p(a,t){t&1&&l!==(l=a[17].value+"")&&K(s,l)},d(a){a&&g(e)}}}function J(n){let e,l;function s(r,v){if(r[17].type=="text")return re;if(r[17].type=="link")return ae;if(r[17].type=="image")return ie}let a=s(n),t=a&&a(n);return{c(){e=y("div"),t&&t.c(),l=L(),this.h()},l(r){e=k(r,"DIV",{class:!0});var v=P(e);t&&t.l(v),l=q(v),v.forEach(g),this.h()},h(){c(e,"class","element svelte-1n9ykd5")},m(r,v){N(r,e,v),t&&t.m(e,null),d(e,l)},p(r,v){a===(a=s(r))&&t?t.p(r,v):(t&&t.d(1),t=a&&a(r),t&&(t.c(),t.m(e,l)))},d(r){r&&g(e),t&&t.d()}}}function Z(n){let e,l,s,a,t,r,v=n[14].title+"",E,b,p,M,G,I,H,A=n[15],D=n[16],i,o;function h(){return n[3](n[16])}function u(){return n[4](n[16])}function C(){return n[5](n[16])}function O(){return n[6](n[16])}let B=n[14].cards,_=[];for(let m=0;m<B.length;m+=1)_[m]=J(z(n,B,m));const Q=()=>n[7](e,A,D),R=()=>n[7](null,A,D);return{c(){e=y("div"),l=y("div"),s=y("img"),t=L(),r=y("h1"),E=Y(v),b=L(),p=y("img"),G=L(),I=y("div");for(let m=0;m<_.length;m+=1)_[m].c();H=L(),this.h()},l(m){e=k(m,"DIV",{class:!0});var V=P(e);l=k(V,"DIV",{class:!0});var f=P(l);s=k(f,"IMG",{class:!0,src:!0,alt:!0}),t=q(f),r=k(f,"H1",{class:!0});var S=P(r);E=j(S,v),S.forEach(g),b=q(f),p=k(f,"IMG",{class:!0,id:!0,src:!0,alt:!0}),f.forEach(g),G=q(V),I=k(V,"DIV",{class:!0});var U=P(I);for(let F=0;F<_.length;F+=1)_[F].l(U);U.forEach(g),H=q(V),V.forEach(g),this.h()},h(){c(s,"class","icon svelte-1n9ykd5"),w(s.src,a="/icons/moveicon.png")||c(s,"src",a),c(s,"alt","move"),c(r,"class","svelte-1n9ykd5"),c(p,"class","icon svelte-1n9ykd5"),c(p,"id","deleteButton"),w(p.src,M="/icons/delete.png")||c(p,"src",M),c(p,"alt","delete"),c(l,"class","topOfList svelte-1n9ykd5"),c(I,"class","list svelte-1n9ykd5"),c(e,"class","listParent svelte-1n9ykd5"),X(e,"moving",n[14].isMoving)},m(m,V){N(m,e,V),d(e,l),d(l,s),d(l,t),d(l,r),d(r,E),d(l,b),d(l,p),d(e,G),d(e,I);for(let f=0;f<_.length;f+=1)_[f]&&_[f].m(I,null);d(e,H),Q(),i||(o=[T(s,"click",h),T(s,"keypress",u),T(p,"click",C),T(p,"keypress",O)],i=!0)},p(m,V){if(n=m,V&1&&v!==(v=n[14].title+"")&&K(E,v),V&1){B=n[14].cards;let f;for(f=0;f<B.length;f+=1){const S=z(n,B,f);_[f]?_[f].p(S,V):(_[f]=J(S),_[f].c(),_[f].m(I,null))}for(;f<_.length;f+=1)_[f].d(1);_.length=B.length}(A!==n[15]||D!==n[16])&&(R(),A=n[15],D=n[16],Q()),V&1&&X(e,"moving",n[14].isMoving)},d(m){m&&g(e),$(_,m),R(),i=!1,se(o)}}}function oe(n){let e,l,s,a,t,r,v,E,b,p,M,G,I,H,A,D=n[0],i=[];for(let o=0;o<D.length;o+=1)i[o]=Z(x(n,D,o));return{c(){e=y("main"),l=y("div"),s=y("img"),t=L(),r=y("p"),v=Y("Not Trello"),E=L(),b=y("div"),p=L(),M=y("div");for(let o=0;o<i.length;o+=1)i[o].c();G=L(),I=y("div"),this.h()},l(o){e=k(o,"MAIN",{class:!0});var h=P(e);l=k(h,"DIV",{class:!0});var u=P(l);s=k(u,"IMG",{src:!0,alt:!0,class:!0}),t=q(u),r=k(u,"P",{class:!0});var C=P(r);v=j(C,"Not Trello"),C.forEach(g),u.forEach(g),E=q(h),b=k(h,"DIV",{class:!0}),P(b).forEach(g),p=q(h),M=k(h,"DIV",{class:!0});var O=P(M);for(let _=0;_<i.length;_+=1)i[_].l(O);O.forEach(g),G=q(h),I=k(h,"DIV",{class:!0});var B=P(I);B.forEach(g),h.forEach(g),this.h()},h(){w(s.src,a="/logo.png")||c(s,"src",a),c(s,"alt","logo"),c(s,"class","svelte-1n9ykd5"),c(r,"class","svelte-1n9ykd5"),c(l,"class","logo svelte-1n9ykd5"),c(b,"class","section new svelte-1n9ykd5"),c(M,"class","section main svelte-1n9ykd5"),c(I,"class","section svelte-1n9ykd5"),c(e,"class","bg svelte-1n9ykd5")},m(o,h){N(o,e,h),d(e,l),d(l,s),d(l,t),d(l,r),d(r,v),d(e,E),d(e,b),d(e,p),d(e,M);for(let u=0;u<i.length;u+=1)i[u]&&i[u].m(M,null);d(e,G),d(e,I),H||(A=T(e,"mousemove",n[1]),H=!0)},p(o,[h]){if(h&5){D=o[0];let u;for(u=0;u<D.length;u+=1){const C=x(o,D,u);i[u]?i[u].p(C,h):(i[u]=Z(C),i[u].c(),i[u].m(M,null))}for(;u<i.length;u+=1)i[u].d(1);i.length=D.length}},i:W,o:W,d(o){o&&g(e),$(i,o),H=!1,A()}}}function ce(n){return n.getBoundingClientRect().left}function ue(n,e){let l=e[0];return e.forEach(s=>{Math.abs(n-s)<Math.abs(n-l)&&(l=s)}),e.indexOf(l)}function fe(n,e,l){let s={x:0,y:0},a=-1,t=[{isMoving:!1,title:"Todo 0",originalIndex:0,cards:[{type:"text",value:"Hello there"},{type:"text",value:"HEHEHEHAW"}],element:void 0},{isMoving:!1,title:"yup :) 1",originalIndex:1,cards:[{type:"text",value:"Hello there"},{type:"text",value:"Sometimes picked up list will lock to a listPositions value"}],element:void 0},{isMoving:!1,title:"Done 2",originalIndex:2,cards:[{type:"text",value:"Absolutely nothing"},{type:"text",value:"You are the mega gay"},{type:"image",value:"/icons/delete.png"},{type:"link",path:"/",value:"Go back to the homepage :)"}],element:void 0}];function r(i,o,h){var u=i[o];i.splice(o,1),i.splice(h,0,u),l(0,t=i)}function v(i){s={x:i.clientX,y:i.clientY},a!=-1&&t[a].isMoving&&(b=ue(s.x,E),l(0,t[t[a].originalIndex].element.style.left=s.x+"px",t),l(0,t[t[a].originalIndex].element.style.top=s.y+"px",t))}let E=[],b=-1,p=-1;function M(i){if(!(a!=-1&&!t[i].isMoving)){if(t[i].isMoving)l(0,t[i].isMoving=!1,t),r(t,p,b),i=b,a=-1,b=-1,p=-1;else{l(0,t[i].isMoving=!0,t),a=i,E=[],p=i;for(let o=0;o<t.length;o++)E.push(ce(t[o].element));E.sort((o,h)=>o-h),l(0,t[t[i].originalIndex].element.style.left=s.x+"px",t),l(0,t[t[i].originalIndex].element.style.top=s.y+"px",t)}l(0,t)}}const G=i=>{M(i)},I=i=>{M(i)},H=i=>{},A=i=>{};function D(i,o,h){ne[i?"unshift":"push"](()=>{o[h].element=i,l(0,t)})}return[t,v,M,G,I,H,A,D]}class he extends ee{constructor(e){super(),te(this,e,fe,oe,le,{})}}export{he as default};
