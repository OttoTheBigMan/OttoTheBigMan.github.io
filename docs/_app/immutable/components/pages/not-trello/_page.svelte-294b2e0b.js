import{S as oe,i as ce,s as ue,k as b,q,a as D,l as k,m as M,r as R,h as m,c as V,n as r,E as K,b as O,F as f,B as te,R as W,G as j,P as fe,w as ve,x as _e,D as Q,y as pe,f as ge,t as me,z as ye,K as he,u as J,Q as le}from"../../../chunks/index-161b2921.js";function be(l){let e,t,s;return{c(){e=b("input"),this.h()},l(i){e=k(i,"INPUT",{type:!0,placeholder:!0,class:!0}),this.h()},h(){r(e,"type","text"),r(e,"placeholder","What to do..."),r(e,"class","svelte-sseliv")},m(i,n){O(i,e,n),W(e,l[2].value),t||(s=j(e,"input",l[6]),t=!0)},p(i,n){n&4&&e.value!==i[2].value&&W(e,i[2].value)},d(i){i&&m(e),t=!1,s()}}}function ke(l){let e,t,s,i,n,a;return{c(){e=b("div"),t=b("input"),s=D(),i=b("input"),this.h()},l(v){e=k(v,"DIV",{id:!0,class:!0});var c=M(e);t=k(c,"INPUT",{type:!0,placeholder:!0,class:!0}),s=V(c),i=k(c,"INPUT",{type:!0,placeholder:!0,class:!0}),c.forEach(m),this.h()},h(){r(t,"type","text"),r(t,"placeholder","Link url goes here..."),r(t,"class","svelte-sseliv"),r(i,"type","text"),r(i,"placeholder","Link text goes here..."),r(i,"class","svelte-sseliv"),r(e,"id","hehehehaw"),r(e,"class","svelte-sseliv")},m(v,c){O(v,e,c),f(e,t),W(t,l[2].path),f(e,s),f(e,i),W(i,l[2].value),n||(a=[j(t,"input",l[4]),j(i,"input",l[5])],n=!0)},p(v,c){c&4&&t.value!==v[2].path&&W(t,v[2].path),c&4&&i.value!==v[2].value&&W(i,v[2].value)},d(v){v&&m(e),n=!1,fe(a)}}}function Ee(l){let e,t,s;return{c(){e=b("input"),this.h()},l(i){e=k(i,"INPUT",{type:!0,placeholder:!0,class:!0}),this.h()},h(){r(e,"type","text"),r(e,"placeholder","Paste image URL..."),r(e,"class","svelte-sseliv")},m(i,n){O(i,e,n),W(e,l[2].value),t||(s=j(e,"input",l[3]),t=!0)},p(i,n){n&4&&e.value!==i[2].value&&W(e,i[2].value)},d(i){i&&m(e),t=!1,s()}}}function Ie(l){let e,t,s,i,n,a,v;function c(d,p){if(d[0]=="image")return Ee;if(d[0]=="link")return ke;if(d[0]=="text")return be}let _=c(l),o=_&&_(l);return{c(){e=b("div"),t=b("h1"),s=q("Create new card"),i=D(),o&&o.c(),n=D(),a=b("button"),v=q("Create card"),this.h()},l(d){e=k(d,"DIV",{class:!0});var p=M(e);t=k(p,"H1",{});var C=M(t);s=R(C,"Create new card"),C.forEach(m),i=V(p),o&&o.l(p),n=V(p),a=k(p,"BUTTON",{id:!0,class:!0});var U=M(a);v=R(U,"Create card"),U.forEach(m),p.forEach(m),this.h()},h(){r(a,"id","CreateButton"),r(a,"class","svelte-sseliv"),r(e,"class","window svelte-sseliv"),K(e,"invisible",l[1])},m(d,p){O(d,e,p),f(e,t),f(t,s),f(e,i),o&&o.m(e,null),f(e,n),f(e,a),f(a,v)},p(d,[p]){_===(_=c(d))&&o?o.p(d,p):(o&&o.d(1),o=_&&_(d),o&&(o.c(),o.m(e,n))),p&2&&K(e,"invisible",d[1])},i:te,o:te,d(d){d&&m(e),o&&o.d()}}}function Me(l,e,t){let{type:s}=e,{invisible:i=!0}=e;const n={type:void 0,path:void 0,value:void 0};function a(){n.value=this.value,t(2,n)}function v(){n.path=this.value,t(2,n)}function c(){n.value=this.value,t(2,n)}function _(){n.value=this.value,t(2,n)}return l.$$set=o=>{"type"in o&&t(0,s=o.type),"invisible"in o&&t(1,i=o.invisible)},[s,i,n,a,v,c,_]}class Ce extends oe{constructor(e){super(),ce(this,e,Me,Ie,ue,{type:0,invisible:1})}}function se(l,e,t){const s=l.slice();return s[22]=e[t],s[23]=e,s[24]=t,s}function ie(l,e,t){const s=l.slice();return s[25]=e[t],s[26]=e,s[27]=t,s}function we(l){let e,t;return{c(){e=b("img"),this.h()},l(s){e=k(s,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){Q(e.src,t=l[25].value)||r(e,"src",t),r(e,"alt","No errors?"),r(e,"class","svelte-ir81dc")},m(s,i){O(s,e,i)},p(s,i){i&2&&!Q(e.src,t=s[25].value)&&r(e,"src",t)},d(s){s&&m(e)}}}function Ne(l){let e,t=l[25].value+"",s,i;return{c(){e=b("a"),s=q(t),this.h()},l(n){e=k(n,"A",{href:!0,class:!0});var a=M(e);s=R(a,t),a.forEach(m),this.h()},h(){r(e,"href",i=l[25].path),r(e,"class","svelte-ir81dc")},m(n,a){O(n,e,a),f(e,s)},p(n,a){a&2&&t!==(t=n[25].value+"")&&J(s,t),a&2&&i!==(i=n[25].path)&&r(e,"href",i)},d(n){n&&m(e)}}}function Te(l){let e,t=l[25].value+"",s;return{c(){e=b("p"),s=q(t),this.h()},l(i){e=k(i,"P",{class:!0});var n=M(e);s=R(n,t),n.forEach(m),this.h()},h(){r(e,"class","svelte-ir81dc")},m(i,n){O(i,e,n),f(e,s)},p(i,n){n&2&&t!==(t=i[25].value+"")&&J(s,t)},d(i){i&&m(e)}}}function ne(l){let e,t,s=l[27],i=l[23],n=l[24];function a(d,p){if(d[25].type=="text")return Te;if(d[25].type=="link")return Ne;if(d[25].type=="image")return we}let v=a(l),c=v&&v(l);const _=()=>l[10](e,s,i,n),o=()=>l[10](null,s,i,n);return{c(){e=b("div"),c&&c.c(),t=D(),this.h()},l(d){e=k(d,"DIV",{class:!0});var p=M(e);c&&c.l(p),t=V(p),p.forEach(m),this.h()},h(){r(e,"class","element svelte-ir81dc"),K(e,"movingCard",l[25].moving)},m(d,p){O(d,e,p),c&&c.m(e,null),f(e,t),_()},p(d,p){l=d,v===(v=a(l))&&c?c.p(l,p):(c&&c.d(1),c=v&&v(l),c&&(c.c(),c.m(e,t))),(s!==l[27]||i!==l[23]||n!==l[24])&&(o(),s=l[27],i=l[23],n=l[24],_()),p&2&&K(e,"movingCard",l[25].moving)},d(d){d&&m(e),c&&c.d(),o()}}}function ae(l){let e,t,s,i,n,a,v=l[22].title+"",c,_,o,d,p,C,U,A=l[24],B,S;function Y(){return l[6](l[24])}function G(){return l[7](l[24])}function z(){return l[8](l[24])}function h(){return l[9](l[24])}let E=l[22].cards,y=[];for(let I=0;I<E.length;I+=1)y[I]=ne(ie(l,E,I));const H=()=>l[11](e,A),F=()=>l[11](null,A);return{c(){e=b("div"),t=b("div"),s=b("img"),n=D(),a=b("h1"),c=q(v),_=D(),o=b("img"),p=D(),C=b("div");for(let I=0;I<y.length;I+=1)y[I].c();U=D(),this.h()},l(I){e=k(I,"DIV",{class:!0});var w=M(e);t=k(w,"DIV",{class:!0});var u=M(t);s=k(u,"IMG",{class:!0,src:!0,alt:!0}),n=V(u),a=k(u,"H1",{class:!0});var g=M(a);c=R(g,v),g.forEach(m),_=V(u),o=k(u,"IMG",{class:!0,id:!0,src:!0,alt:!0}),u.forEach(m),p=V(w),C=k(w,"DIV",{class:!0});var N=M(C);for(let T=0;T<y.length;T+=1)y[T].l(N);N.forEach(m),U=V(w),w.forEach(m),this.h()},h(){r(s,"class","icon svelte-ir81dc"),Q(s.src,i="/icons/moveicon.png")||r(s,"src",i),r(s,"alt","move"),r(a,"class","svelte-ir81dc"),r(o,"class","icon svelte-ir81dc"),r(o,"id","deleteButton"),Q(o.src,d="/icons/delete.png")||r(o,"src",d),r(o,"alt","delete"),r(t,"class","topOfList svelte-ir81dc"),r(C,"class","list svelte-ir81dc"),r(e,"class","listParent svelte-ir81dc"),K(e,"moving",l[22].isMoving)},m(I,w){O(I,e,w),f(e,t),f(t,s),f(t,n),f(t,a),f(a,c),f(t,_),f(t,o),f(e,p),f(e,C);for(let u=0;u<y.length;u+=1)y[u]&&y[u].m(C,null);f(e,U),H(),B||(S=[j(s,"click",Y),j(s,"keypress",G),j(o,"click",z),j(o,"keypress",h)],B=!0)},p(I,w){if(l=I,w&2&&v!==(v=l[22].title+"")&&J(c,v),w&2){E=l[22].cards;let u;for(u=0;u<E.length;u+=1){const g=ie(l,E,u);y[u]?y[u].p(g,w):(y[u]=ne(g),y[u].c(),y[u].m(C,null))}for(;u<y.length;u+=1)y[u].d(1);y.length=E.length}A!==l[24]&&(F(),A=l[24],H()),w&2&&K(e,"moving",l[22].isMoving)},d(I){I&&m(e),he(y,I),F(),B=!1,fe(S)}}}function Pe(l){let e,t,s,i,n,a,v,c,_,o,d,p,C,U,A,B,S,Y,G,z,h,E,y,H,F,I;G=new Ce({props:{type:l[2],invisible:!l[3]}});let w=l[1],u=[];for(let g=0;g<w.length;g+=1)u[g]=ae(se(l,w,g));return{c(){e=b("main"),t=b("div"),s=b("img"),n=D(),a=b("p"),v=q("NoTrello"),c=D(),_=b("div"),o=b("button"),d=q("Create text card"),p=D(),C=b("button"),U=q("Create image card"),A=D(),B=b("button"),S=q("Create link card"),Y=D(),ve(G.$$.fragment),z=D(),h=b("div");for(let g=0;g<u.length;g+=1)u[g].c();E=D(),y=b("div"),this.h()},l(g){e=k(g,"MAIN",{class:!0});var N=M(e);t=k(N,"DIV",{class:!0});var T=M(t);s=k(T,"IMG",{src:!0,alt:!0,class:!0}),n=V(T),a=k(T,"P",{class:!0});var P=M(a);v=R(P,"NoTrello"),P.forEach(m),T.forEach(m),c=V(N),_=k(N,"DIV",{class:!0});var L=M(_);o=k(L,"BUTTON",{class:!0});var Z=M(o);d=R(Z,"Create text card"),Z.forEach(m),p=V(L),C=k(L,"BUTTON",{class:!0});var $=M(C);U=R($,"Create image card"),$.forEach(m),A=V(L),B=k(L,"BUTTON",{class:!0});var x=M(B);S=R(x,"Create link card"),x.forEach(m),Y=V(L),_e(G.$$.fragment,L),L.forEach(m),z=V(N),h=k(N,"DIV",{class:!0});var ee=M(h);for(let X=0;X<u.length;X+=1)u[X].l(ee);ee.forEach(m),E=V(N),y=k(N,"DIV",{class:!0});var de=M(y);de.forEach(m),N.forEach(m),this.h()},h(){Q(s.src,i="/logo.png")||r(s,"src",i),r(s,"alt","logo"),r(s,"class","svelte-ir81dc"),r(a,"class","svelte-ir81dc"),r(t,"class","logo svelte-ir81dc"),r(o,"class","createNew svelte-ir81dc"),r(C,"class","createNew svelte-ir81dc"),r(B,"class","createNew svelte-ir81dc"),r(_,"class","section new svelte-ir81dc"),r(h,"class","section main svelte-ir81dc"),r(y,"class","section svelte-ir81dc"),r(e,"class","bg svelte-ir81dc")},m(g,N){O(g,e,N),f(e,t),f(t,s),f(t,n),f(t,a),f(a,v),f(e,c),f(e,_),f(_,o),f(o,d),f(_,p),f(_,C),f(C,U),f(_,A),f(_,B),f(B,S),f(_,Y),pe(G,_,null),f(e,z),f(e,h);for(let T=0;T<u.length;T+=1)u[T]&&u[T].m(h,null);f(e,E),f(e,y),H=!0,F||(I=j(e,"mousemove",l[4]),F=!0)},p(g,[N]){const T={};if(N&4&&(T.type=g[2]),N&8&&(T.invisible=!g[3]),G.$set(T),N&35){w=g[1];let P;for(P=0;P<w.length;P+=1){const L=se(g,w,P);u[P]?u[P].p(L,N):(u[P]=ae(L),u[P].c(),u[P].m(h,null))}for(;P<u.length;P+=1)u[P].d(1);u.length=w.length}},i(g){H||(ge(G.$$.fragment,g),H=!0)},o(g){me(G.$$.fragment,g),H=!1},d(g){g&&m(e),ye(G),he(u,g),F=!1,I()}}}function De(l){return l.getBoundingClientRect().left}function re(l,e){let t=e[0];return e.forEach(s=>{Math.abs(l-s)<Math.abs(l-t)&&(t=s)}),e.indexOf(t)}function Ve(l,e,t){let s={x:0,y:0},i=-1,n=[void 0,void 0,void 0],a=[{isMoving:!1,title:"Todo",cards:[{moving:!1,type:"text",value:"Hello there"},{moving:!1,type:"text",value:"HEHEHEHAW"}],elements:[]},{isMoving:!1,title:"yup :)",cards:[{moving:!1,type:"text",value:"Hello there"}],elements:[]},{isMoving:!1,title:"Done",cards:[{moving:!1,type:"text",value:"Absolutely nothing"},{moving:!1,type:"text",value:"You are the mega gay"},{moving:!1,type:"image",value:"/icons/delete.png"},{moving:!1,type:"link",path:"/",value:"Go back to the homepage :)"}],elements:[]}];function v(h,E,y){var H=h[E];h.splice(E,1),h.splice(y,0,H),t(1,a=h)}function c(h){s={x:h.clientX,y:h.clientY},i!=-1&&a[i].isMoving&&(o=re(s.x,_),t(0,n[i].style.left=s.x+"px",n),t(0,n[i].style.top=s.y+"px",n))}let _=[],o=-1,d=-1;function p(h){if(!(i!=-1&&!a[h].isMoving)){if(a[h].isMoving)t(1,a[h].isMoving=!1,a),v(a,d,o),h=o,i=-1,o=-1,d=-1;else{t(1,a[h].isMoving=!0,a),i=h,_=[],d=h;for(let E=0;E<a.length;E++)_.push(De(n[E]));_.sort((E,y)=>E-y),o=re(s.x,_),t(0,n[h].style.left=s.x+"px",n),t(0,n[h].style.top=s.y+"px",n)}t(1,a)}}let C="text",U=!1;const A=h=>{p(h)},B=h=>{p(h)},S=h=>{},Y=h=>{};function G(h,E,y,H){le[h?"unshift":"push"](()=>{y[H].elements[E]=h,t(1,a)})}function z(h,E){le[h?"unshift":"push"](()=>{n[E]=h,t(0,n)})}return[n,a,C,U,c,p,A,B,S,Y,G,z]}class Be extends oe{constructor(e){super(),ce(this,e,Ve,Pe,ue,{})}}export{Be as default};
