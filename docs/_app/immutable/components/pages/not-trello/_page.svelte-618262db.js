import{S as ge,i as be,s as ke,k as g,a as F,q as Y,l as b,m as I,h as d,c as S,r as X,n as c,E as H,b as q,F as a,G as O,B as ve,P as fe,R as Z,w as Ie,x as Ne,D as ae,y as Te,f as we,t as Me,z as ze,K as Ue,o as Ge,u as ye,Q as Le}from"../../../chunks/index-161b2921.js";function Re(l){let e,t,n;return{c(){e=g("input"),this.h()},l(o){e=b(o,"INPUT",{type:!0,placeholder:!0,class:!0}),this.h()},h(){c(e,"type","text"),c(e,"placeholder","What to do..."),c(e,"class","svelte-eo48ek")},m(o,u){q(o,e,u),Z(e,l[2].value),t||(n=O(e,"input",l[10]),t=!0)},p(o,u){u&4&&e.value!==o[2].value&&Z(e,o[2].value)},d(o){o&&d(e),t=!1,n()}}}function Ae(l){let e,t,n,o,u,s;return{c(){e=g("div"),t=g("input"),n=F(),o=g("input"),this.h()},l(r){e=b(r,"DIV",{id:!0,class:!0});var k=I(e);t=b(k,"INPUT",{type:!0,placeholder:!0,class:!0}),n=S(k),o=b(k,"INPUT",{type:!0,placeholder:!0,class:!0}),k.forEach(d),this.h()},h(){c(t,"type","text"),c(t,"placeholder","Link url goes here..."),c(t,"class","svelte-eo48ek"),c(o,"type","text"),c(o,"placeholder","Link text goes here..."),c(o,"class","svelte-eo48ek"),c(e,"id","hehehehaw"),c(e,"class","svelte-eo48ek")},m(r,k){q(r,e,k),a(e,t),Z(t,l[2].path),a(e,n),a(e,o),Z(o,l[2].value),u||(s=[O(t,"input",l[8]),O(o,"input",l[9])],u=!0)},p(r,k){k&4&&t.value!==r[2].path&&Z(t,r[2].path),k&4&&o.value!==r[2].value&&Z(o,r[2].value)},d(r){r&&d(e),u=!1,fe(s)}}}function He(l){let e,t,n;return{c(){e=g("input"),this.h()},l(o){e=b(o,"INPUT",{type:!0,placeholder:!0,class:!0}),this.h()},h(){c(e,"type","text"),c(e,"placeholder","Paste image URL..."),c(e,"class","svelte-eo48ek")},m(o,u){q(o,e,u),Z(e,l[2].value),t||(n=O(e,"input",l[7]),t=!0)},p(o,u){u&4&&e.value!==o[2].value&&Z(e,o[2].value)},d(o){o&&d(e),t=!1,n()}}}function Je(l){let e,t,n,o,u,s,r,k,h,v,p,N,M;function L(_,T){if(_[0]=="image")return He;if(_[0]=="link")return Ae;if(_[0]=="text")return Re}let m=L(l),f=m&&m(l);return{c(){e=g("div"),t=g("button"),n=F(),o=g("h1"),u=Y("Create new card"),s=F(),f&&f.c(),r=F(),k=g("button"),h=Y("Create card"),v=F(),p=g("div"),this.h()},l(_){e=b(_,"DIV",{class:!0});var T=I(e);t=b(T,"BUTTON",{id:!0,class:!0}),I(t).forEach(d),n=S(T),o=b(T,"H1",{});var A=I(o);u=X(A,"Create new card"),A.forEach(d),s=S(T),f&&f.l(T),r=S(T),k=b(T,"BUTTON",{id:!0,class:!0});var U=I(k);h=X(U,"Create card"),U.forEach(d),T.forEach(d),v=S(_),p=b(_,"DIV",{class:!0}),I(p).forEach(d),this.h()},h(){c(t,"id","closeButton"),c(t,"class","svelte-eo48ek"),c(k,"id","CreateButton"),c(k,"class","svelte-eo48ek"),c(e,"class","window svelte-eo48ek"),H(e,"invisible",l[1]),c(p,"class","screenShade svelte-eo48ek"),H(p,"invisible",l[1])},m(_,T){q(_,e,T),a(e,t),a(e,n),a(e,o),a(o,u),a(e,s),f&&f.m(e,null),a(e,r),a(e,k),a(k,h),q(_,v,T),q(_,p,T),N||(M=[O(t,"click",l[4]),O(k,"click",l[3])],N=!0)},p(_,[T]){m===(m=L(_))&&f?f.p(_,T):(f&&f.d(1),f=m&&m(_),f&&(f.c(),f.m(e,r))),T&2&&H(e,"invisible",_[1]),T&2&&H(p,"invisible",_[1])},i:ve,o:ve,d(_){_&&d(e),f&&f.d(),_&&d(v),_&&d(p),N=!1,fe(M)}}}function qe(l,e,t){let{type:n}=e,{invisible:o=!0}=e,{createFunction:u=void 0}=e,{closeFunction:s=void 0}=e;const r={moving:!0,type:n,path:void 0,value:""};function k(){t(2,r.type=n,r),u(r),t(2,r.path="",r),t(2,r.value="",r)}function h(){t(2,r.type=n,r),s(),t(2,r.value="",r),t(2,r.path="",r)}function v(){r.value=this.value,t(2,r)}function p(){r.path=this.value,t(2,r)}function N(){r.value=this.value,t(2,r)}function M(){r.value=this.value,t(2,r)}return l.$$set=L=>{"type"in L&&t(0,n=L.type),"invisible"in L&&t(1,o=L.invisible),"createFunction"in L&&t(5,u=L.createFunction),"closeFunction"in L&&t(6,s=L.closeFunction)},[n,o,r,k,h,u,s,v,p,N,M]}class We extends ge{constructor(e){super(),be(this,e,qe,Je,ke,{type:0,invisible:1,createFunction:5,closeFunction:6})}}function Ye(l){let e,t,n,o,u,s,r,k,h,v,p,N,M,L;return{c(){e=g("div"),t=g("button"),n=F(),o=g("h1"),u=Y("Create New List"),s=F(),r=g("input"),k=F(),h=g("button"),v=Y("Create list"),p=F(),N=g("div"),this.h()},l(m){e=b(m,"DIV",{class:!0});var f=I(e);t=b(f,"BUTTON",{id:!0,class:!0}),I(t).forEach(d),n=S(f),o=b(f,"H1",{});var _=I(o);u=X(_,"Create New List"),_.forEach(d),s=S(f),r=b(f,"INPUT",{type:!0,placeholder:!0,class:!0}),k=S(f),h=b(f,"BUTTON",{id:!0,class:!0});var T=I(h);v=X(T,"Create list"),T.forEach(d),f.forEach(d),p=S(m),N=b(m,"DIV",{class:!0}),I(N).forEach(d),this.h()},h(){c(t,"id","closeButton"),c(t,"class","svelte-18u6su8"),c(r,"type","text"),c(r,"placeholder","Title goes here..."),c(r,"class","svelte-18u6su8"),c(h,"id","CreateButton"),c(h,"class","svelte-18u6su8"),c(e,"class","window svelte-18u6su8"),H(e,"invisible",l[0]),c(N,"class","screenShade svelte-18u6su8"),H(N,"invisible",l[0])},m(m,f){q(m,e,f),a(e,t),a(e,n),a(e,o),a(o,u),a(e,s),a(e,r),Z(r,l[1]),a(e,k),a(e,h),a(h,v),q(m,p,f),q(m,N,f),M||(L=[O(t,"click",l[3]),O(r,"input",l[6]),O(h,"click",l[2])],M=!0)},p(m,[f]){f&2&&r.value!==m[1]&&Z(r,m[1]),f&1&&H(e,"invisible",m[0]),f&1&&H(N,"invisible",m[0])},i:ve,o:ve,d(m){m&&d(e),m&&d(p),m&&d(N),M=!1,fe(L)}}}function Xe(l,e,t){let{invisible:n=!0}=e,{createFunction:o=void 0}=e,{closeFunction:u=void 0}=e,s="";const r={isMoving:!1,title:s,cards:[],elements:[]};function k(){r.title=JSON.parse(JSON.stringify(s)),o(r),t(1,s="")}function h(){u(),t(1,s="")}function v(){s=this.value,t(1,s)}return l.$$set=p=>{"invisible"in p&&t(0,n=p.invisible),"createFunction"in p&&t(4,o=p.createFunction),"closeFunction"in p&&t(5,u=p.closeFunction)},[n,s,k,h,o,u,v]}class Ke extends ge{constructor(e){super(),be(this,e,Xe,Ye,ke,{invisible:0,createFunction:4,closeFunction:5})}}function Be(l,e,t){const n=l.slice();return n[42]=e[t],n[43]=e,n[44]=t,n}function Fe(l,e,t){const n=l.slice();return n[45]=e[t],n[47]=t,n}function Qe(l){let e,t;return{c(){e=g("img"),this.h()},l(n){e=b(n,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){ae(e.src,t=l[45].value)||c(e,"src",t),c(e,"alt","crazy pic"),c(e,"class","svelte-6iz9eo")},m(n,o){q(n,e,o)},p(n,o){o[0]&4&&!ae(e.src,t=n[45].value)&&c(e,"src",t)},d(n){n&&d(e)}}}function Ze(l){let e,t=l[45].value+"",n,o;return{c(){e=g("a"),n=Y(t),this.h()},l(u){e=b(u,"A",{href:!0,class:!0});var s=I(e);n=X(s,t),s.forEach(d),this.h()},h(){c(e,"href",o=l[45].path),c(e,"class","svelte-6iz9eo")},m(u,s){q(u,e,s),a(e,n)},p(u,s){s[0]&4&&t!==(t=u[45].value+"")&&ye(n,t),s[0]&4&&o!==(o=u[45].path)&&c(e,"href",o)},d(u){u&&d(e)}}}function je(l){let e,t=l[45].value+"",n;return{c(){e=g("p"),n=Y(t),this.h()},l(o){e=b(o,"P",{class:!0});var u=I(e);n=X(u,t),u.forEach(d),this.h()},h(){c(e,"class","svelte-6iz9eo")},m(o,u){q(o,e,u),a(e,n)},p(o,u){u[0]&4&&t!==(t=o[45].value+"")&&ye(n,t)},d(o){o&&d(e)}}}function Se(l){let e,t,n,o;function u(h,v){if(h[45].type=="text")return je;if(h[45].type=="link")return Ze;if(h[45].type=="image")return Qe}let s=u(l),r=s&&s(l);function k(){return l[25](l[44],l[47])}return{c(){e=g("div"),r&&r.c(),t=F(),this.h()},l(h){e=b(h,"DIV",{class:!0});var v=I(e);r&&r.l(v),t=S(v),v.forEach(d),this.h()},h(){c(e,"class","element svelte-6iz9eo"),H(e,"movingCard",l[45].moving)},m(h,v){q(h,e,v),r&&r.m(e,null),a(e,t),n||(o=O(e,"click",k),n=!0)},p(h,v){l=h,s===(s=u(l))&&r?r.p(l,v):(r&&r.d(1),r=s&&s(l),r&&(r.c(),r.m(e,t))),v[0]&4&&H(e,"movingCard",l[45].moving)},d(h){h&&d(e),r&&r.d(),n=!1,o()}}}function Ve(l){let e,t,n,o,u,s,r=l[42].title+"",k,h,v,p,N,M,L,m=l[44],f,_;function T(){return l[23](l[44])}function A(){return l[24](l[44])}let U=l[42].cards,z=[];for(let w=0;w<U.length;w+=1)z[w]=Se(Fe(l,U,w));const K=()=>l[26](e,m),ee=()=>l[26](null,m);return{c(){e=g("div"),t=g("div"),n=g("img"),u=F(),s=g("h1"),k=Y(r),h=F(),v=g("img"),N=F(),M=g("div");for(let w=0;w<z.length;w+=1)z[w].c();L=F(),this.h()},l(w){e=b(w,"DIV",{class:!0});var D=I(e);t=b(D,"DIV",{class:!0});var y=I(t);n=b(y,"IMG",{class:!0,src:!0,alt:!0}),u=S(y),s=b(y,"H1",{class:!0});var J=I(s);k=X(J,r),J.forEach(d),h=S(y),v=b(y,"IMG",{class:!0,id:!0,src:!0,alt:!0}),y.forEach(d),N=S(D),M=b(D,"DIV",{class:!0});var G=I(M);for(let j=0;j<z.length;j+=1)z[j].l(G);G.forEach(d),L=S(D),D.forEach(d),this.h()},h(){c(n,"class","icon svelte-6iz9eo"),ae(n.src,o="/icons/moveicon.png")||c(n,"src",o),c(n,"alt","move"),c(s,"class","svelte-6iz9eo"),c(v,"class","icon svelte-6iz9eo"),c(v,"id","deleteButton"),ae(v.src,p="/icons/settings.png")||c(v,"src",p),c(v,"alt","delete"),c(t,"class","topOfList svelte-6iz9eo"),c(M,"class","list svelte-6iz9eo"),c(e,"class","listParent svelte-6iz9eo"),H(e,"moving",l[42].isMoving)},m(w,D){q(w,e,D),a(e,t),a(t,n),a(t,u),a(t,s),a(s,k),a(t,h),a(t,v),a(e,N),a(e,M);for(let y=0;y<z.length;y+=1)z[y]&&z[y].m(M,null);a(e,L),K(),f||(_=[O(n,"click",T),O(n,"keypress",A)],f=!0)},p(w,D){if(l=w,D[0]&4&&r!==(r=l[42].title+"")&&ye(k,r),D[0]&2052){U=l[42].cards;let y;for(y=0;y<U.length;y+=1){const J=Fe(l,U,y);z[y]?z[y].p(J,D):(z[y]=Se(J),z[y].c(),z[y].m(M,null))}for(;y<z.length;y+=1)z[y].d(1);z.length=U.length}m!==l[44]&&(ee(),m=l[44],K()),D[0]&4&&H(e,"moving",l[42].isMoving)},d(w){w&&d(e),Ue(z,w),ee(),f=!1,fe(_)}}}function xe(l){let e,t,n,o,u,s,r,k,h,v,p,N,M,L,m,f,_,T,A,U,z,K,ee,w,D,y,J,G,j,Q,x,oe,re,$,ue,te,ce,he;K=new We({props:{type:l[6],invisible:!l[7],createFunction:l[16],closeFunction:l[15]}}),w=new Ke({props:{invisible:!l[8],createFunction:l[14],closeFunction:l[15]}});let se=l[2],R=[];for(let E=0;E<se.length;E+=1)R[E]=Ve(Be(l,se,E));return{c(){e=g("main"),t=g("div"),n=g("img"),u=F(),s=g("p"),r=Y("Not Trello"),k=F(),h=g("div"),v=g("button"),p=Y("Create text card"),N=F(),M=g("button"),L=Y("Create image card"),m=F(),f=g("button"),_=Y("Create link card"),T=F(),A=g("button"),U=Y("Create new list"),z=F(),Ie(K.$$.fragment),ee=F(),Ie(w.$$.fragment),D=F(),y=g("div");for(let E=0;E<R.length;E+=1)R[E].c();J=F(),G=g("div"),j=F(),Q=g("div"),x=g("button"),oe=Y("Save"),re=F(),$=g("button"),ue=Y("Load"),this.h()},l(E){e=b(E,"MAIN",{class:!0});var P=I(e);t=b(P,"DIV",{class:!0});var W=I(t);n=b(W,"IMG",{src:!0,alt:!0,class:!0}),u=S(W),s=b(W,"P",{class:!0});var ne=I(s);r=X(ne,"Not Trello"),ne.forEach(d),W.forEach(d),k=S(P),h=b(P,"DIV",{class:!0});var i=I(h);v=b(i,"BUTTON",{class:!0});var C=I(v);p=X(C,"Create text card"),C.forEach(d),N=S(i),M=b(i,"BUTTON",{class:!0});var B=I(M);L=X(B,"Create image card"),B.forEach(d),m=S(i),f=b(i,"BUTTON",{class:!0});var V=I(f);_=X(V,"Create link card"),V.forEach(d),T=S(i),A=b(i,"BUTTON",{class:!0});var ie=I(A);U=X(ie,"Create new list"),ie.forEach(d),z=S(i),Ne(K.$$.fragment,i),ee=S(i),Ne(w.$$.fragment,i),i.forEach(d),D=S(P),y=b(P,"DIV",{class:!0});var _e=I(y);for(let pe=0;pe<R.length;pe+=1)R[pe].l(_e);J=S(_e),G=b(_e,"DIV",{id:!0,class:!0});var Pe=I(G);Pe.forEach(d),_e.forEach(d),j=S(P),Q=b(P,"DIV",{class:!0});var de=I(Q);x=b(de,"BUTTON",{class:!0});var Ce=I(x);oe=X(Ce,"Save"),Ce.forEach(d),re=S(de),$=b(de,"BUTTON",{class:!0});var Ee=I($);ue=X(Ee,"Load"),Ee.forEach(d),de.forEach(d),P.forEach(d),this.h()},h(){ae(n.src,o="/logo.png")||c(n,"src",o),c(n,"alt","logo"),c(n,"class","svelte-6iz9eo"),c(s,"class","svelte-6iz9eo"),c(t,"class","logo svelte-6iz9eo"),c(v,"class","createNew svelte-6iz9eo"),c(M,"class","createNew svelte-6iz9eo"),c(f,"class","createNew svelte-6iz9eo"),c(A,"class","createNew svelte-6iz9eo"),c(h,"class","section new svelte-6iz9eo"),c(G,"id","cardDelete"),c(G,"class","svelte-6iz9eo"),H(G,"fakeHover",l[4]),H(G,"cardIsMoving",l[3]||l[0]!=-1&&l[2][l[0]].isMoving),c(y,"class","section main svelte-6iz9eo"),c(x,"class","svelte-6iz9eo"),c($,"class","svelte-6iz9eo"),c(Q,"class","section save-load-menu svelte-6iz9eo"),c(e,"class","bg svelte-6iz9eo")},m(E,P){q(E,e,P),a(e,t),a(t,n),a(t,u),a(t,s),a(s,r),a(e,k),a(e,h),a(h,v),a(v,p),a(h,N),a(h,M),a(M,L),a(h,m),a(h,f),a(f,_),a(h,T),a(h,A),a(A,U),a(h,z),Te(K,h,null),a(h,ee),Te(w,h,null),a(e,D),a(e,y);for(let W=0;W<R.length;W+=1)R[W]&&R[W].m(y,null);a(y,J),a(y,G),l[27](G),a(e,j),a(e,Q),a(Q,x),a(x,oe),a(Q,re),a(Q,$),a($,ue),te=!0,ce||(he=[O(v,"click",l[19]),O(M,"click",l[20]),O(f,"click",l[21]),O(A,"click",l[22]),O(G,"mouseover",l[28]),O(G,"mouseout",l[29]),O(x,"click",l[17]),O($,"click",l[18]),O(e,"mousemove",l[9])],ce=!0)},p(E,P){const W={};P[0]&64&&(W.type=E[6]),P[0]&128&&(W.invisible=!E[7]),K.$set(W);const ne={};if(P[0]&256&&(ne.invisible=!E[8]),w.$set(ne),P[0]&3078){se=E[2];let i;for(i=0;i<se.length;i+=1){const C=Be(E,se,i);R[i]?R[i].p(C,P):(R[i]=Ve(C),R[i].c(),R[i].m(y,J))}for(;i<R.length;i+=1)R[i].d(1);R.length=se.length}(!te||P[0]&16)&&H(G,"fakeHover",E[4]),(!te||P[0]&13)&&H(G,"cardIsMoving",E[3]||E[0]!=-1&&E[2][E[0]].isMoving)},i(E){te||(we(K.$$.fragment,E),we(w.$$.fragment,E),te=!0)},o(E){Me(K.$$.fragment,E),Me(w.$$.fragment,E),te=!1},d(E){E&&d(e),ze(K),ze(w),Ue(R,E),l[27](null),ce=!1,fe(he)}}}function De(l){return l.getBoundingClientRect().left}function me(l){return l.getBoundingClientRect().top}function Oe(l){return l.getBoundingClientRect().bottom}function $e(l){return l.getBoundingClientRect().width}function le(l,e){let t=e[0];return e.forEach(n=>{Math.abs(l-n)<Math.abs(l-t)&&(t=n)}),e.indexOf(t)}function et(l,e,t){let n={x:0,y:0},o=-1,u=[],s=[];s.forEach((i,C)=>{i.subscribe(B=>{t(2,s[C]=B,s)})});function r(i,C,B){var V=i[C];i.splice(C,1),i.splice(B,0,V),t(2,s=i)}function k(i,C,B){const V=(n.x-i)*(n.x-i),ie=(n.y-C)*(n.y-C);return V+ie<=B*B}function h(i){if(n={x:i.clientX,y:i.clientY},t(4,U=k(75+De(z),75+me(z),75)),o!=-1&&s[o].isMoving&&(N=le(n.x,p),t(1,u[o].style.left=n.x+"px",u),t(1,u[o].style.top=n.y+"px",u)),m&&s[f[0]].cards[f[1]].moving){N=le(n.x,p),t(2,s[f[0]].elements[f[1]].style.left=n.x+"px",s),t(2,s[f[0]].elements[f[1]].style.top=n.y+"px",s),_[0]=le(n.x,p);const C=[];for(let B=0;B<s[_[0]].elements.length;B++)if(s[_[0]].elements[B]!=null){if(s[_[0]].elements[B].classList.contains("movingCard"))continue;C.push(me(s[_[0]].elements[B])-5),s[_[0]].elements.length-B==1&&C.push(Oe(s[_[0]].elements[B])+5)}C.sort((B,V)=>B-V),_[1]=le(n.y,C)}}function v(){p=[];for(let i=0;i<s.length;i++)p.push(De(u[i]));p.sort((i,C)=>i-C)}let p=[],N=-1,M=-1;function L(i){if(!(o!=-1&&!s[i].isMoving||m)){if(!s[i].isMoving)t(2,s[i].isMoving=!0,s),t(0,o=i),M=i,v(),N=le(n.x,p),t(1,u[i].style.left=n.x+"px",u),t(1,u[i].style.top=n.y+"px",u);else{if(U){ee(i);return}t(2,s[i].isMoving=!1,s),r(s,M,N),i=N,t(0,o=-1),N=-1,M=-1}t(2,s)}}let m=!1,f=[-1,-1],_=[-1,-1];function T(i,C){if(s[i].cards[C].moving==m)if(s[i].cards[C].moving){if(s[i].cards[C].moving){if(U){K(i,C);return}t(2,s[i].cards[C].moving=!1,s),t(3,m=!1);const B=s[i].cards.splice(C,1);t(2,s),s[_[0]].cards.splice(_[1],0,...B),t(2,s),t(2,s),f=[-1,-1]}}else{A(),t(2,s[i].cards[C].moving=!0,s),v();for(let V=0;V<p.length;V++)p[V]+=$e(u[V])/2;f=[i,C],t(3,m=!0),t(2,s[f[0]].elements[f[1]].style.left=n.x+"px",s),t(2,s[f[0]].elements[f[1]].style.top=n.y+"px",s),_[0]=le(n.x,p);const B=[];for(let V=0;V<s[_[0]].elements.length;V++)s[_[0]].elements[V].classList.contains("movingCard")||(s[_[0]].elements[V]!=null&&B.push(me(s[_[0]].elements[V])),s[_[0]].elements.length-V==1&&B.push(Oe(s[_[0]].elements[V])+10));B.sort((V,ie)=>V-ie),_[1]=le(n.y,B)}}Ge(()=>{A()});function A(){for(let i=0;i<u.length;i++){if(!u[i]||!s[i])continue;const C=u[i].querySelectorAll(".element");t(2,s[i].elements=[...C],s)}}let U=!1,z=null;function K(i,C){s[i].cards.splice(C,1),A(),t(3,m=!1),f=[-1,-1],t(2,s)}function ee(i){t(2,s[i].cards=[],s),r(s,i,s.length-1),s.pop(),t(0,o=-1),t(2,s),A()}let w="text",D=!1;function y(i){if(s.length==0){alert("You cannot create a card when there is no list to create it in. 🤓");return}t(6,w=i),t(7,D=!0)}let J=!1;function G(){t(8,J=!0)}function j(i){if(t(8,J=!1),i.title,i.title===""){alert("Please add a title to your list. 🤓");return}s.push(i),t(2,s)}function Q(){t(8,J=!1),t(7,D=!1)}function x(i){t(7,D=!1),i.moving=!1,s[0].cards.unshift(JSON.parse(JSON.stringify(i))),t(2,s),A()}function oe(){localStorage.setItem("LISTS",JSON.stringify(s))}function re(){t(2,s=JSON.parse(localStorage.getItem("LISTS")))}const $=()=>{y("text")},ue=()=>{y("image")},te=()=>{y("link")},ce=()=>{G()},he=i=>{L(i)},se=i=>{L(i)},R=(i,C)=>{T(i,C)};function E(i,C){Le[i?"unshift":"push"](()=>{u[C]=i,t(1,u)})}function P(i){Le[i?"unshift":"push"](()=>{z=i,t(5,z)})}return[o,u,s,m,U,z,w,D,J,h,L,T,y,G,j,Q,x,oe,re,$,ue,te,ce,he,se,R,E,P,i=>{t(4,U=!0)},()=>{t(4,U=!1)}]}class st extends ge{constructor(e){super(),be(this,e,et,xe,ke,{},null,[-1,-1])}}export{st as default};
