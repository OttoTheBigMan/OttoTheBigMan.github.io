import{S as ge,i as be,s as ye,k as p,a as V,q as Y,l as g,m as E,h,c as B,r as z,n as a,E as G,b as R,F as c,G as J,B as re,P as me,R as j,w as ke,x as Ce,D as ce,y as Ee,f as ae,t as Ne,z as Ie,K as Ae,o as We,u as Se,T as Ye,U as ze,Q as Be}from"../../../chunks/index-4ad5b0ac.js";import{f as Xe}from"../../../chunks/index-a2479f16.js";function Ke(l){let e,t,n;return{c(){e=p("input"),this.h()},l(i){e=g(i,"INPUT",{type:!0,placeholder:!0,class:!0}),this.h()},h(){a(e,"type","text"),a(e,"placeholder","What to do..."),a(e,"class","svelte-noubvu")},m(i,u){R(i,e,u),j(e,l[2].value),t||(n=J(e,"input",l[10]),t=!0)},p(i,u){u&4&&e.value!==i[2].value&&j(e,i[2].value)},d(i){i&&h(e),t=!1,n()}}}function Qe(l){let e,t,n,i,u,s;return{c(){e=p("div"),t=p("input"),n=V(),i=p("input"),this.h()},l(o){e=g(o,"DIV",{id:!0,class:!0});var b=E(e);t=g(b,"INPUT",{type:!0,placeholder:!0,class:!0}),n=B(b),i=g(b,"INPUT",{type:!0,placeholder:!0,class:!0}),b.forEach(h),this.h()},h(){a(t,"type","text"),a(t,"placeholder","Link url goes here..."),a(t,"class","svelte-noubvu"),a(i,"type","text"),a(i,"placeholder","Link text goes here..."),a(i,"class","svelte-noubvu"),a(e,"id","hehehehaw"),a(e,"class","svelte-noubvu")},m(o,b){R(o,e,b),c(e,t),j(t,l[2].path),c(e,n),c(e,i),j(i,l[2].value),u||(s=[J(t,"input",l[8]),J(i,"input",l[9])],u=!0)},p(o,b){b&4&&t.value!==o[2].path&&j(t,o[2].path),b&4&&i.value!==o[2].value&&j(i,o[2].value)},d(o){o&&h(e),u=!1,me(s)}}}function Ze(l){let e,t,n;return{c(){e=p("input"),this.h()},l(i){e=g(i,"INPUT",{type:!0,placeholder:!0,class:!0}),this.h()},h(){a(e,"type","text"),a(e,"placeholder","Paste image URL..."),a(e,"class","svelte-noubvu")},m(i,u){R(i,e,u),j(e,l[2].value),t||(n=J(e,"input",l[7]),t=!0)},p(i,u){u&4&&e.value!==i[2].value&&j(e,i[2].value)},d(i){i&&h(e),t=!1,n()}}}function je(l){let e,t,n,i,u,s,o,b,f,y,w,I,L,U;function k(T,N){if(T[0]=="image")return Ze;if(T[0]=="link")return Qe;if(T[0]=="text")return Ke}let d=k(l),m=d&&d(l);return{c(){e=p("div"),t=p("button"),n=V(),i=p("h1"),u=Y("Create new card"),s=V(),o=p("form"),m&&m.c(),b=V(),f=p("button"),y=Y("Create card"),w=V(),I=p("div"),this.h()},l(T){e=g(T,"DIV",{class:!0});var N=E(e);t=g(N,"BUTTON",{id:!0,class:!0}),E(t).forEach(h),n=B(N),i=g(N,"H1",{});var W=E(i);u=z(W,"Create new card"),W.forEach(h),s=B(N),o=g(N,"FORM",{class:!0});var H=E(o);m&&m.l(H),H.forEach(h),b=B(N),f=g(N,"BUTTON",{id:!0,class:!0});var M=E(f);y=z(M,"Create card"),M.forEach(h),N.forEach(h),w=B(T),I=g(T,"DIV",{class:!0}),E(I).forEach(h),this.h()},h(){a(t,"id","closeButton"),a(t,"class","svelte-noubvu"),a(o,"class","svelte-noubvu"),a(f,"id","CreateButton"),a(f,"class","svelte-noubvu"),a(e,"class","window svelte-noubvu"),G(e,"invisible",l[1]),a(I,"class","screenShade svelte-noubvu"),G(I,"invisible",l[1])},m(T,N){R(T,e,N),c(e,t),c(e,n),c(e,i),c(i,u),c(e,s),c(e,o),m&&m.m(o,null),c(e,b),c(e,f),c(f,y),R(T,w,N),R(T,I,N),L||(U=[J(t,"click",l[4]),J(o,"submit",l[3]),J(f,"click",l[3])],L=!0)},p(T,[N]){d===(d=k(T))&&m?m.p(T,N):(m&&m.d(1),m=d&&d(T),m&&(m.c(),m.m(o,null))),N&2&&G(e,"invisible",T[1]),N&2&&G(I,"invisible",T[1])},i:re,o:re,d(T){T&&h(e),m&&m.d(),T&&h(w),T&&h(I),L=!1,me(U)}}}function xe(l,e,t){let{type:n}=e,{invisible:i=!0}=e,{createFunction:u=void 0}=e,{closeFunction:s=void 0}=e;const o={moving:!0,type:n,path:void 0,value:""};function b(){t(2,o.type=n,o),u(o),t(2,o.path="",o),t(2,o.value="",o)}function f(){t(2,o.type=n,o),s(),t(2,o.value="",o),t(2,o.path="",o)}function y(){o.value=this.value,t(2,o)}function w(){o.path=this.value,t(2,o)}function I(){o.value=this.value,t(2,o)}function L(){o.value=this.value,t(2,o)}return l.$$set=U=>{"type"in U&&t(0,n=U.type),"invisible"in U&&t(1,i=U.invisible),"createFunction"in U&&t(5,u=U.createFunction),"closeFunction"in U&&t(6,s=U.closeFunction)},[n,i,o,b,f,u,s,y,w,I,L]}class $e extends ge{constructor(e){super(),be(this,e,xe,je,ye,{type:0,invisible:1,createFunction:5,closeFunction:6})}}function et(l){let e,t,n,i,u,s,o,b,f,y,w,I,L,U;return{c(){e=p("div"),t=p("button"),n=V(),i=p("h1"),u=Y("Create New List"),s=V(),o=p("input"),b=V(),f=p("button"),y=Y("Create list"),w=V(),I=p("div"),this.h()},l(k){e=g(k,"DIV",{class:!0});var d=E(e);t=g(d,"BUTTON",{id:!0,class:!0}),E(t).forEach(h),n=B(d),i=g(d,"H1",{});var m=E(i);u=z(m,"Create New List"),m.forEach(h),s=B(d),o=g(d,"INPUT",{type:!0,placeholder:!0,class:!0}),b=B(d),f=g(d,"BUTTON",{id:!0,class:!0});var T=E(f);y=z(T,"Create list"),T.forEach(h),d.forEach(h),w=B(k),I=g(k,"DIV",{class:!0}),E(I).forEach(h),this.h()},h(){a(t,"id","closeButton"),a(t,"class","svelte-1dl5iuj"),a(o,"type","text"),a(o,"placeholder","Title goes here..."),a(o,"class","svelte-1dl5iuj"),a(f,"id","CreateButton"),a(f,"class","svelte-1dl5iuj"),a(e,"class","window svelte-1dl5iuj"),G(e,"invisible",l[0]),a(I,"class","screenShade svelte-1dl5iuj"),G(I,"invisible",l[0])},m(k,d){R(k,e,d),c(e,t),c(e,n),c(e,i),c(i,u),c(e,s),c(e,o),j(o,l[1]),c(e,b),c(e,f),c(f,y),R(k,w,d),R(k,I,d),L||(U=[J(t,"click",l[3]),J(o,"input",l[6]),J(o,"submit",l[2]),J(f,"click",l[2])],L=!0)},p(k,[d]){d&2&&o.value!==k[1]&&j(o,k[1]),d&1&&G(e,"invisible",k[0]),d&1&&G(I,"invisible",k[0])},i:re,o:re,d(k){k&&h(e),k&&h(w),k&&h(I),L=!1,me(U)}}}function tt(l,e,t){let{invisible:n=!0}=e,{createFunction:i=void 0}=e,{closeFunction:u=void 0}=e,s="";const o={isMoving:!1,title:s,cards:[],elements:[]};function b(){o.title=JSON.parse(JSON.stringify(s)),i(o),t(1,s="")}function f(){u(),t(1,s="")}function y(){s=this.value,t(1,s)}return l.$$set=w=>{"invisible"in w&&t(0,n=w.invisible),"createFunction"in w&&t(4,i=w.createFunction),"closeFunction"in w&&t(5,u=w.closeFunction)},[n,s,b,f,i,u,y]}class st extends ge{constructor(e){super(),be(this,e,tt,et,ye,{invisible:0,createFunction:4,closeFunction:5})}}function lt(l){let e,t,n;return{c(){e=p("div"),t=V(),n=p("div"),this.h()},l(i){e=g(i,"DIV",{id:!0,class:!0});var u=E(e);u.forEach(h),t=B(i),n=g(i,"DIV",{id:!0,class:!0});var s=E(n);s.forEach(h),this.h()},h(){a(e,"id","flashbang"),a(e,"class","svelte-1wgtpb1"),G(e,"invis",l[0]),a(n,"id","heisenberg"),a(n,"class","svelte-1wgtpb1"),G(n,"invis",l[0])},m(i,u){R(i,e,u),R(i,t,u),R(i,n,u)},p(i,[u]){u&1&&G(e,"invis",i[0]),u&1&&G(n,"invis",i[0])},i:re,o:re,d(i){i&&h(e),i&&h(t),i&&h(n)}}}function nt(l,e,t){let{invis:n=!0}=e;return l.$$set=i=>{"invis"in i&&t(0,n=i.invis)},[n]}class it extends ge{constructor(e){super(),be(this,e,nt,lt,ye,{invis:0})}}function De(l,e,t){const n=l.slice();return n[43]=e[t],n[44]=e,n[45]=t,n}function Ue(l,e,t){const n=l.slice();return n[46]=e[t],n[48]=t,n}function Je(l){let e,t,n,i,u,s;return{c(){e=p("div"),t=p("img"),i=V(),u=p("h2"),s=Y("There is nothing..."),this.h()},l(o){e=g(o,"DIV",{id:!0,class:!0});var b=E(e);t=g(b,"IMG",{src:!0,alt:!0,class:!0}),i=B(b),u=g(b,"H2",{class:!0});var f=E(u);s=z(f,"There is nothing..."),f.forEach(h),b.forEach(h),this.h()},h(){ce(t.src,n="/icons/empty.png")||a(t,"src",n),a(t,"alt","yup :)"),a(t,"class","svelte-1b6twas"),a(u,"class","svelte-1b6twas"),a(e,"id","empty-board"),a(e,"class","svelte-1b6twas")},m(o,b){R(o,e,b),c(e,t),c(e,i),c(e,u),c(u,s)},d(o){o&&h(e)}}}function rt(l){let e,t;return{c(){e=p("img"),this.h()},l(n){e=g(n,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){ce(e.src,t=l[46].value)||a(e,"src",t),a(e,"alt","crazy pic"),a(e,"class","svelte-1b6twas")},m(n,i){R(n,e,i)},p(n,i){i[0]&4&&!ce(e.src,t=n[46].value)&&a(e,"src",t)},d(n){n&&h(e)}}}function ot(l){let e,t=l[46].value+"",n,i;return{c(){e=p("a"),n=Y(t),this.h()},l(u){e=g(u,"A",{href:!0,class:!0});var s=E(e);n=z(s,t),s.forEach(h),this.h()},h(){a(e,"href",i=l[46].path),a(e,"class","svelte-1b6twas")},m(u,s){R(u,e,s),c(e,n)},p(u,s){s[0]&4&&t!==(t=u[46].value+"")&&Se(n,t),s[0]&4&&i!==(i=u[46].path)&&a(e,"href",i)},d(u){u&&h(e)}}}function ut(l){let e,t=l[46].value+"",n;return{c(){e=p("p"),n=Y(t),this.h()},l(i){e=g(i,"P",{class:!0});var u=E(e);n=z(u,t),u.forEach(h),this.h()},h(){a(e,"class","svelte-1b6twas")},m(i,u){R(i,e,u),c(e,n)},p(i,u){u[0]&4&&t!==(t=i[46].value+"")&&Se(n,t)},d(i){i&&h(e)}}}function Pe(l){let e,t,n,i;function u(f,y){if(f[46].type=="text")return ut;if(f[46].type=="link")return ot;if(f[46].type=="image")return rt}let s=u(l),o=s&&s(l);function b(){return l[26](l[45],l[48])}return{c(){e=p("div"),o&&o.c(),t=V(),this.h()},l(f){e=g(f,"DIV",{class:!0});var y=E(e);o&&o.l(y),t=B(y),y.forEach(h),this.h()},h(){a(e,"class","element svelte-1b6twas"),G(e,"movingCard",l[46].moving)},m(f,y){R(f,e,y),o&&o.m(e,null),c(e,t),n||(i=J(e,"click",b),n=!0)},p(f,y){l=f,s===(s=u(l))&&o?o.p(l,y):(o&&o.d(1),o=s&&s(l),o&&(o.c(),o.m(e,t))),y[0]&4&&G(e,"movingCard",l[46].moving)},d(f){f&&h(e),o&&o.d(),n=!1,i()}}}function Ge(l){let e,t,n,i,u,s,o=l[43].title+"",b,f,y,w,I,L,U,k=l[45],d,m,T;function N(){return l[24](l[45])}function W(){return l[25](l[45])}let H=l[43].cards,M=[];for(let D=0;D<H.length;D+=1)M[D]=Pe(Ue(l,H,D));const le=()=>l[27](e,k),X=()=>l[27](null,k);return{c(){e=p("div"),t=p("div"),n=p("img"),u=V(),s=p("h1"),b=Y(o),f=V(),y=p("img"),I=V(),L=p("div");for(let D=0;D<M.length;D+=1)M[D].c();U=V(),this.h()},l(D){e=g(D,"DIV",{class:!0});var O=E(e);t=g(O,"DIV",{class:!0});var S=E(t);n=g(S,"IMG",{class:!0,src:!0,alt:!0}),u=B(S),s=g(S,"H1",{class:!0});var K=E(s);b=z(K,o),K.forEach(h),f=B(S),y=g(S,"IMG",{class:!0,id:!0,src:!0,alt:!0}),S.forEach(h),I=B(O),L=g(O,"DIV",{class:!0});var A=E(L);for(let x=0;x<M.length;x+=1)M[x].l(A);A.forEach(h),U=B(O),O.forEach(h),this.h()},h(){a(n,"class","icon svelte-1b6twas"),ce(n.src,i="/icons/moveicon.png")||a(n,"src",i),a(n,"alt","move"),a(s,"class","svelte-1b6twas"),a(y,"class","icon svelte-1b6twas"),a(y,"id","deleteButton"),ce(y.src,w="/icons/settings.png")||a(y,"src",w),a(y,"alt","delete"),a(t,"class","topOfList svelte-1b6twas"),a(L,"class","list svelte-1b6twas"),a(e,"class","listParent svelte-1b6twas"),G(e,"moving",l[43].isMoving)},m(D,O){R(D,e,O),c(e,t),c(t,n),c(t,u),c(t,s),c(s,b),c(t,f),c(t,y),c(e,I),c(e,L);for(let S=0;S<M.length;S+=1)M[S]&&M[S].m(L,null);c(e,U),le(),m||(T=[J(n,"click",N),J(n,"keypress",W)],m=!0)},p(D,O){if(l=D,O[0]&4&&o!==(o=l[43].title+"")&&Se(b,o),O[0]&4100){H=l[43].cards;let S;for(S=0;S<H.length;S+=1){const K=Ue(l,H,S);M[S]?M[S].p(K,O):(M[S]=Pe(K),M[S].c(),M[S].m(L,null))}for(;S<M.length;S+=1)M[S].d(1);M.length=H.length}k!==l[45]&&(X(),k=l[45],le()),O[0]&4&&G(e,"moving",l[43].isMoving)},i(D){d||Ye(()=>{d=ze(e,Xe,{y:-250,duration:750,delay:l[9]?250*l[45]:0}),d.start()})},o:re,d(D){D&&h(e),Ae(M,D),X(),m=!1,me(T)}}}function at(l){let e,t,n,i,u,s,o,b,f,y,w,I,L,U,k,d,m,T,N,W,H,M,le,X,D,O,S,K,A,x,Q,Z,fe,he,$,ve,de,ee,ne,_e,pe;M=new $e({props:{type:l[6],invisible:!l[7],createFunction:l[17],closeFunction:l[16]}}),X=new st({props:{invisible:!l[8],createFunction:l[15],closeFunction:l[16]}});let q=l[2].length==0&&Je(),te=l[2],P=[];for(let C=0;C<te.length;C+=1)P[C]=Ge(De(l,te,C));return ee=new it({}),{c(){e=p("main"),t=p("div"),n=p("img"),u=V(),s=p("p"),o=Y("Not Trello"),b=V(),f=p("div"),y=p("button"),w=Y("Create text card"),I=V(),L=p("button"),U=Y("Create image card"),k=V(),d=p("button"),m=Y("Create link card"),T=V(),N=p("button"),W=Y("Create new list"),H=V(),ke(M.$$.fragment),le=V(),ke(X.$$.fragment),D=V(),O=p("div"),q&&q.c(),S=V();for(let C=0;C<P.length;C+=1)P[C].c();K=V(),A=p("div"),x=V(),Q=p("div"),Z=p("button"),fe=Y("Save"),he=V(),$=p("button"),ve=Y("Load"),de=V(),ke(ee.$$.fragment),this.h()},l(C){e=g(C,"MAIN",{class:!0});var r=E(e);t=g(r,"DIV",{class:!0});var v=E(t);n=g(v,"IMG",{src:!0,alt:!0,class:!0}),u=B(v),s=g(v,"P",{class:!0});var F=E(s);o=z(F,"Not Trello"),F.forEach(h),v.forEach(h),b=B(r),f=g(r,"DIV",{class:!0});var _=E(f);y=g(_,"BUTTON",{class:!0});var se=E(y);w=z(se,"Create text card"),se.forEach(h),I=B(_),L=g(_,"BUTTON",{class:!0});var Me=E(L);U=z(Me,"Create image card"),Me.forEach(h),k=B(_),d=g(_,"BUTTON",{class:!0});var Oe=E(d);m=z(Oe,"Create link card"),Oe.forEach(h),T=B(_),N=g(_,"BUTTON",{class:!0});var Le=E(N);W=z(Le,"Create new list"),Le.forEach(h),H=B(_),Ce(M.$$.fragment,_),le=B(_),Ce(X.$$.fragment,_),_.forEach(h),D=B(r),O=g(r,"DIV",{class:!0});var oe=E(O);q&&q.l(oe),S=B(oe);for(let we=0;we<P.length;we+=1)P[we].l(oe);K=B(oe),A=g(oe,"DIV",{id:!0,class:!0});var qe=E(A);qe.forEach(h),oe.forEach(h),x=B(r),Q=g(r,"DIV",{class:!0});var ue=E(Q);Z=g(ue,"BUTTON",{class:!0});var Fe=E(Z);fe=z(Fe,"Save"),Fe.forEach(h),he=B(ue),$=g(ue,"BUTTON",{class:!0});var Ve=E($);ve=z(Ve,"Load"),Ve.forEach(h),de=B(ue),Ce(ee.$$.fragment,ue),ue.forEach(h),r.forEach(h),this.h()},h(){ce(n.src,i="/logo.png")||a(n,"src",i),a(n,"alt","logo"),a(n,"class","svelte-1b6twas"),a(s,"class","svelte-1b6twas"),a(t,"class","logo svelte-1b6twas"),a(y,"class","createNew svelte-1b6twas"),a(L,"class","createNew svelte-1b6twas"),a(d,"class","createNew svelte-1b6twas"),a(N,"class","createNew svelte-1b6twas"),a(f,"class","section new svelte-1b6twas"),a(A,"id","cardDelete"),a(A,"class","svelte-1b6twas"),G(A,"fakeHover",l[4]),G(A,"cardIsMoving",l[3]||l[0]!=-1&&l[2][l[0]].isMoving),a(O,"class","section main svelte-1b6twas"),a(Z,"class","svelte-1b6twas"),a($,"class","svelte-1b6twas"),a(Q,"class","section save-load-menu svelte-1b6twas"),a(e,"class","bg svelte-1b6twas")},m(C,r){R(C,e,r),c(e,t),c(t,n),c(t,u),c(t,s),c(s,o),c(e,b),c(e,f),c(f,y),c(y,w),c(f,I),c(f,L),c(L,U),c(f,k),c(f,d),c(d,m),c(f,T),c(f,N),c(N,W),c(f,H),Ee(M,f,null),c(f,le),Ee(X,f,null),c(e,D),c(e,O),q&&q.m(O,null),c(O,S);for(let v=0;v<P.length;v+=1)P[v]&&P[v].m(O,null);c(O,K),c(O,A),l[28](A),c(e,x),c(e,Q),c(Q,Z),c(Z,fe),c(Q,he),c(Q,$),c($,ve),c(Q,de),Ee(ee,Q,null),ne=!0,_e||(pe=[J(y,"click",l[20]),J(L,"click",l[21]),J(d,"click",l[22]),J(N,"click",l[23]),J(A,"mouseover",l[29]),J(A,"mouseout",l[30]),J(Z,"click",l[18]),J($,"click",l[19]),J(e,"mousemove",l[10])],_e=!0)},p(C,r){const v={};r[0]&64&&(v.type=C[6]),r[0]&128&&(v.invisible=!C[7]),M.$set(v);const F={};if(r[0]&256&&(F.invisible=!C[8]),X.$set(F),C[2].length==0?q||(q=Je(),q.c(),q.m(O,S)):q&&(q.d(1),q=null),r[0]&6150){te=C[2];let _;for(_=0;_<te.length;_+=1){const se=De(C,te,_);P[_]?(P[_].p(se,r),ae(P[_],1)):(P[_]=Ge(se),P[_].c(),ae(P[_],1),P[_].m(O,K))}for(;_<P.length;_+=1)P[_].d(1);P.length=te.length}(!ne||r[0]&16)&&G(A,"fakeHover",C[4]),(!ne||r[0]&13)&&G(A,"cardIsMoving",C[3]||C[0]!=-1&&C[2][C[0]].isMoving)},i(C){if(!ne){ae(M.$$.fragment,C),ae(X.$$.fragment,C);for(let r=0;r<te.length;r+=1)ae(P[r]);ae(ee.$$.fragment,C),ne=!0}},o(C){Ne(M.$$.fragment,C),Ne(X.$$.fragment,C),Ne(ee.$$.fragment,C),ne=!1},d(C){C&&h(e),Ie(M),Ie(X),q&&q.d(),Ae(P,C),l[28](null),Ie(ee),_e=!1,me(pe)}}}function He(l){return l.getBoundingClientRect().left}function Te(l){return l.getBoundingClientRect().top}function Re(l){return l.getBoundingClientRect().bottom}function ct(l){return l.getBoundingClientRect().width}function ie(l,e){let t=e[0];return e.forEach(n=>{Math.abs(l-n)<Math.abs(l-t)&&(t=n)}),e.indexOf(t)}function ft(l,e,t){let n={x:0,y:0},i=-1,u=[],s=[];s.forEach((r,v)=>{r.subscribe(F=>{t(2,s[v]=F,s)})});function o(r,v,F){var _=r[v];r.splice(v,1),r.splice(F,0,_),t(2,s=r)}function b(r,v,F){const _=(n.x-r)*(n.x-r),se=(n.y-v)*(n.y-v);return _+se<=F*F}function f(r){if(n={x:r.clientX,y:r.clientY},t(4,W=b(75+He(H),75+Te(H),75)),i!=-1&&s[i].isMoving&&(I=ie(n.x,w),t(1,u[i].style.left=n.x+"px",u),t(1,u[i].style.top=n.y+"px",u)),k&&s[d[0]].cards[d[1]].moving){I=ie(n.x,w),t(2,s[d[0]].elements[d[1]].style.left=n.x+"px",s),t(2,s[d[0]].elements[d[1]].style.top=n.y+"px",s),m[0]=ie(n.x,w);const v=[];for(let F=0;F<s[m[0]].elements.length;F++)if(s[m[0]].elements[F]!=null){if(s[m[0]].elements[F].classList.contains("movingCard"))continue;v.push(Te(s[m[0]].elements[F])-5),s[m[0]].elements.length-F==1&&v.push(Re(s[m[0]].elements[F])+5)}v.sort((F,_)=>F-_),m[1]=ie(n.y,v)}}function y(){w=[];for(let r=0;r<s.length;r++)w.push(He(u[r]));w.sort((r,v)=>r-v)}let w=[],I=-1,L=-1;function U(r){if(!(i!=-1&&!s[r].isMoving||k)){if(!s[r].isMoving)t(2,s[r].isMoving=!0,s),t(0,i=r),L=r,y(),I=ie(n.x,w),t(1,u[r].style.left=n.x+"px",u),t(1,u[r].style.top=n.y+"px",u);else{if(W){le(r);return}t(2,s[r].isMoving=!1,s),o(s,L,I),r=I,t(0,i=-1),I=-1,L=-1}t(2,s)}}let k=!1,d=[-1,-1],m=[-1,-1];function T(r,v){if(s[r].cards[v].moving==k)if(s[r].cards[v].moving){if(s[r].cards[v].moving){if(W){M(r,v);return}t(2,s[r].cards[v].moving=!1,s),t(3,k=!1);const F=s[r].cards.splice(v,1);t(2,s),s[m[0]].cards.splice(m[1],0,...F),t(2,s),t(2,s),d=[-1,-1]}}else{N(),t(2,s[r].cards[v].moving=!0,s),y();for(let _=0;_<w.length;_++)w[_]+=ct(u[_])/2;d=[r,v],t(3,k=!0),t(2,s[d[0]].elements[d[1]].style.left=n.x+"px",s),t(2,s[d[0]].elements[d[1]].style.top=n.y+"px",s),m[0]=ie(n.x,w);const F=[];for(let _=0;_<s[m[0]].elements.length;_++)s[m[0]].elements[_].classList.contains("movingCard")||(s[m[0]].elements[_]!=null&&F.push(Te(s[m[0]].elements[_])),s[m[0]].elements.length-_==1&&F.push(Re(s[m[0]].elements[_])+10));F.sort((_,se)=>_-se),m[1]=ie(n.y,F)}}We(()=>{N()});function N(){for(let r=0;r<u.length;r++){if(!u[r]||!s[r])continue;const v=u[r].querySelectorAll(".element");t(2,s[r].elements=[...v],s)}}let W=!1,H=null;function M(r,v){s[r].cards.splice(v,1),N(),t(3,k=!1),d=[-1,-1],t(2,s)}function le(r){t(2,s[r].cards=[],s),o(s,r,s.length-1),s.pop(),t(0,i=-1),t(2,s),N()}let X="text",D=!1;function O(r){if(s.length==0){alert("You cannot create a card when there is no list to create it in. 🤓");return}t(6,X=r),t(7,D=!0)}let S=!1;function K(){t(8,S=!0)}function A(r){if(t(8,S=!1),JSON.parse(JSON.stringify(r.title)),r.title===""){alert("Please add a title to your list. 🤓");return}s.push(JSON.parse(JSON.stringify(r))),t(2,s)}function x(){t(8,S=!1),t(7,D=!1)}function Q(r){if(t(7,D=!1),r.moving=!1,r.type=="image"){const v=new Image;v.src=JSON.parse(JSON.stringify(r.value)),v.onload=()=>{r.value=v.src,s[0].cards.unshift(JSON.parse(JSON.stringify(r))),t(2,s),N()},v.onerror=()=>{r.value="/icons/image-not-found.png",s[0].cards.unshift(JSON.parse(JSON.stringify(r))),t(2,s),N()}}else s[0].cards.unshift(JSON.parse(JSON.stringify(r))),t(2,s),N()}let Z=!1;function fe(){localStorage.setItem("LISTS",JSON.stringify(s))}function he(){t(9,Z=!0),t(2,s=JSON.parse(localStorage.getItem("LISTS"))),setTimeout(()=>{t(9,Z=!1)},s.length*250)}const $=()=>{O("text")},ve=()=>{O("image")},de=()=>{O("link")},ee=()=>{K()},ne=r=>{U(r)},_e=r=>{U(r)},pe=(r,v)=>{T(r,v)};function q(r,v){Be[r?"unshift":"push"](()=>{u[v]=r,t(1,u)})}function te(r){Be[r?"unshift":"push"](()=>{H=r,t(5,H)})}return[i,u,s,k,W,H,X,D,S,Z,f,U,T,O,K,A,x,Q,fe,he,$,ve,de,ee,ne,_e,pe,q,te,r=>{t(4,W=!0)},()=>{t(4,W=!1)}]}class dt extends ge{constructor(e){super(),be(this,e,ft,at,ye,{},null,[-1,-1])}}export{dt as default};
