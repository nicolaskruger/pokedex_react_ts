(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],Array(42).concat([function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},,,,,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c,a,o=n(14),r=n(1),i=n.n(r),s=n(21),u=n.n(s),l=(n(42),n(7)),j=(n(43),"/battle"),b="/medic",O="/home",d="/inithial-pokemon",p="/accept-battle",m=(n(44),n(6)),h=n(2),f=n(16),x=n(9);!function(e){e[e.success=0]="success",e[e.error=1]="error",e[e.hide=2]="hide"}(a||(a={}));var k,v={state:a.hide,message:"don't show this"};c={},Object(x.a)(c,a.success,"success"),Object(x.a)(c,a.error,"error"),Object(x.a)(c,a.hide,"hide");!function(e){e[e.HIT=0]="HIT",e[e.MISS=1]="MISS",e[e.CAPTURE=2]="CAPTURE",e[e.DEFAULT=3]="DEFAULT"}(k||(k={}));var E,C=function(e,t){if(Math.random()<.3)return Object(h.a)(Object(h.a)({},t),{},{state:k.MISS});var n=t.life-e;return n=n<0?0:n,Object(h.a)(Object(h.a)({},t),{},{state:k.HIT,life:n})},A=function(e){var t,n,c=0!==(null===(t=e.enemy)||void 0===t?void 0:t.life)&&0!==(null===(n=e.currPokemon)||void 0===n?void 0:n.life);return c?Object(h.a)(Object(h.a)({},e),{},{battle:c,launch:!1}):Object(h.a)(Object(h.a)({},e),{},{battle:c,launch:!1,pokeList:e.pokeList.map((function(t){return t.id===e.currPokemon.id?Object(h.a)(Object(h.a)({},e.currPokemon),{},{state:k.DEFAULT}):Object(h.a)({},t)}))})};!function(e){e[e.SET_POKEDEX=0]="SET_POKEDEX",e[e.ADD_POKEMON=1]="ADD_POKEMON",e[e.SET_CURR_POKEMON=2]="SET_CURR_POKEMON",e[e.SET_ENEMY=3]="SET_ENEMY",e[e.ALLY_ATACK=4]="ALLY_ATACK",e[e.ENEMY_ATACK=5]="ENEMY_ATACK",e[e.START_BATTLE=6]="START_BATTLE",e[e.RUN=7]="RUN",e[e.CAPTURE=8]="CAPTURE",e[e.GOT_TO_MEDIC=9]="GOT_TO_MEDIC",e[e.GO_TO_POKEDEX=10]="GO_TO_POKEDEX"}(E||(E={}));var _,g="#696969",w="POKEDEX",N=(_=w,JSON.parse(localStorage.getItem(_))||{pokedex:{count:0,next:"",previous:"",results:[]},pokeList:[],currPokemon:null,battle:!1,enemy:null,launch:!1,medic:[]}),P=function(e){return{pokedex:e.pokedex,pokeList:e.pokeList,currPokemon:e.currPokemon,battle:e.battle,enemy:e.enemy,launch:e.launch,medic:e.medic}},S=(n(48),n(49),n(0)),T=function(e){var t=e.life;return Object(S.jsxs)("div",{className:"life-bar-life",children:[Object(S.jsx)("span",{className:"life-bar-text",children:"HP"}),Object(S.jsx)("div",{style:{width:"".concat(t,"%")},className:"life-bar-life__div"})]})},I=function(e){var t=e.className,n=e.pokemon;return Object(S.jsx)("div",{className:"life ".concat(t),children:Object(S.jsxs)("div",{className:"life__warper",children:[Object(S.jsxs)("div",{className:"life__div",children:[Object(S.jsx)("span",{className:"life-name",children:n.name}),Object(S.jsxs)("span",{className:"life-level",children:["lv ",n.base_experience]})]}),Object(S.jsx)(T,{life:Math.trunc(100*n.life/n.base_experience)}),Object(S.jsx)("span",{children:"".concat(n.life,"/").concat(n.base_experience," life")})]})})},L=(n(51),function(e){var t,n=e.pokemon,c=e.className,a=e.back?n.sprites.back_default:n.sprites.front_default,o=(t={},Object(x.a)(t,k.MISS,"pokemon-fight__miss"),Object(x.a)(t,k.HIT,"pokemon-fight__hit"),Object(x.a)(t,k.CAPTURE,"pokemon-fight__capture"),Object(x.a)(t,k.DEFAULT,""),t),r=0===n.life?"pokemon-fight__dead":o[n.state];return Object(S.jsx)("div",{className:"pokemon-fight ".concat(c),children:Object(S.jsxs)("div",{className:"pokemon-fight__div",children:[Object(S.jsx)("img",{className:"pokemon-fight__img ".concat(r),src:a,alt:""}),n.state===k.MISS&&Object(S.jsx)("span",{className:"pokemon-fight__miss-word",children:"miss"})]})})}),R=n(5),D=(n(52),n(3)),K=n.n(D),y=n(8),M="pokemon",U=function(e){return"pokemon/".concat(e)},F=Object({NODE_ENV:"production",PUBLIC_URL:"/pokedex_react_ts",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_URL_DEV:"https://pokeapi.co/api/v2/",REACT_APP_URL_PROD:"https://pokeapi.co/api/v2/"}),J=(F.REACT_APP_URL_DEV,{serverUrl:F.REACT_APP_URL_PROD}),V=n(20),X=n.n(V),B=function(){var e;return e=J.serverUrl,X.a.create({baseURL:e})},H=function(){var e=B(),t=M,n=U,c=function(){var n=Object(y.a)(K.a.mark((function n(c){var a;return K.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.get(t,{params:Object(h.a)({},c)});case 2:return a=n.sent,n.abrupt("return",a.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),a=function(){var t=Object(y.a)(K.a.mark((function t(c){var a;return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.get(n(c));case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return{page:c,pageUrl:function(){var e=Object(y.a)(K.a.mark((function e(t){var n;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.a.get(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),pokemonUrl:function(){var e=Object(y.a)(K.a.mark((function e(t){var n;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.a.get(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getPokemonById:a}},Y=n(28),G=[n(37).a],Q=Object(Y.b)((function(e,t){var n=e,c=E.START_BATTLE,a=E.SET_POKEDEX,o=E.ADD_POKEMON,r=E.SET_CURR_POKEMON,i=E.SET_ENEMY,s=E.ALLY_ATACK,u=E.ENEMY_ATACK,l=E.RUN,j=E.CAPTURE,b=E.GOT_TO_MEDIC,O=E.GO_TO_POKEDEX;switch(t.type){case a:return function(e,t){var n=t.pokedex;return Object(h.a)(Object(h.a)({},e),{},{pokedex:n})}(n,t);case o:return function(e,t){var n,c=Object(h.a)(Object(h.a)({},t.newPokemon),{},{life:null===(n=t.newPokemon)||void 0===n?void 0:n.base_experience,id:Math.random(),state:k.DEFAULT});return Object(h.a)(Object(h.a)({},e),{},{pokeList:[].concat(Object(f.a)(e.pokeList),[c])})}(n,t);case r:return function(e,t){var n=t.newPokemon;if(n.life<=0)throw new Error("pokemon life need to be bigger then 0");return Object(h.a)(Object(h.a)({},e),{},{currPokemon:n})}(n,t);case i:return function(e,t){var n,c=Object(h.a)(Object(h.a)({},t.newPokemon),{},{life:null===(n=t.newPokemon)||void 0===n?void 0:n.base_experience,state:k.DEFAULT});return Object(h.a)(Object(h.a)({},e),{},{enemy:c})}(n,t);case s:return function(e,t){if(!e.battle)return Object(h.a)({},e);var n=t.damage;return A(Object(h.a)(Object(h.a)({},e),{},{currPokemon:Object(h.a)(Object(h.a)({},e.currPokemon),{},{state:k.DEFAULT}),enemy:C(n,e.enemy)}))}(n,t);case u:return function(e,t){var n=e.enemy,c=Math.trunc(Math.random()*n.base_experience/2);return e.battle?A(Object(h.a)(Object(h.a)({},e),{},{enemy:Object(h.a)(Object(h.a)({},n),{},{state:k.DEFAULT}),currPokemon:C(c,e.currPokemon)})):Object(h.a)(Object(h.a)({},e),{},{launch:!1})}(n);case c:return function(e,t){return Object(h.a)(Object(h.a)({},e),{},{battle:!0})}(n);case l:return function(e,t){var n=Object(h.a)(Object(h.a)({},e.currPokemon),{},{life:Math.trunc(e.currPokemon.life/2)}),c=e.pokeList.map((function(e){return e.id===n.id?n:e}));return Object(h.a)(Object(h.a)({},e),{},{battle:!1,currPokemon:Object(h.a)(Object(h.a)({},n),{},{life:Math.trunc(n.life/2)}),pokeList:c})}(n);case j:return function(e,t){var n=e.enemy;if(n.base_experience*Math.random()>n.life){var c,a=e.pokeList.map((function(t){return e.currPokemon.id===t.id?Object(h.a)({},e.currPokemon):Object(h.a)({},t)}));return Object(h.a)(Object(h.a)({},e),{},{battle:!1,launch:!0,currPokemon:Object(h.a)(Object(h.a)({},e.currPokemon),{},{state:k.DEFAULT}),enemy:Object(h.a)(Object(h.a)({},n),{},{state:k.CAPTURE}),pokeList:[].concat(Object(f.a)(a),[Object(h.a)(Object(h.a)({},e.enemy),{},{life:null===(c=e.enemy)||void 0===c?void 0:c.base_experience})])})}return Object(h.a)(Object(h.a)({},e),{},{launch:!0,enemy:Object(h.a)(Object(h.a)({},n),{},{state:k.CAPTURE}),currPokemon:Object(h.a)(Object(h.a)({},e.currPokemon),{},{state:k.DEFAULT})})}(n);case b:return function(e,t){var n=t.newPokemon;if(n.life===n.base_experience)return Object(h.a)({},e);var c=new Date,a=n.life,o=n.base_experience;c.setSeconds(c.getSeconds()+Math.trunc((o-a)/n.base_experience*5));var r=Object(h.a)(Object(h.a)({},t.newPokemon),{},{timeToRecover:c}),i=e.pokeList.filter((function(e){return e.id!==(null===r||void 0===r?void 0:r.id)})),s=[].concat(Object(f.a)(e.medic),[r]);return Object(h.a)(Object(h.a)({},e),{},{medic:s,pokeList:i})}(n,t);case O:return function(e,t){var n,c;if(new Date<=new Date(null===(n=t.newPokemon)||void 0===n?void 0:n.timeToRecover))return Object(h.a)({},e);var a=Object(h.a)(Object(h.a)({},t.newPokemon),{},{life:null===(c=t.newPokemon)||void 0===c?void 0:c.base_experience,timeToRecover:void 0}),o=[].concat(Object(f.a)(e.pokeList),[a]),r=e.medic.filter((function(e){return e.id!==a.id}));return Object(h.a)(Object(h.a)({},e),{},{medic:r,pokeList:o,currPokemon:a})}(n,t);default:return Object(h.a)({},n)}}),N,Y.a.apply(void 0,G));Q.subscribe((function(){!function(e,t){localStorage.setItem(t,JSON.stringify(e))}(Q.getState(),w)}));var q,z=[!1,function(){}],W=Object(r.createContext)(z),Z=[v,function(){}],$=Object(r.createContext)(Z),ee=function(){var e=H(),t=function(){var e=Object(r.useContext)(W),t=Object(R.a)(e,2)[1];return{showLoader:function(){t(!0)},hideLoader:function(){t(!1)}}}();return Object(y.a)(K.a.mark((function n(){var c,a,o,r,i,s=arguments;return K.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(c=s.length>0&&void 0!==s[0]?s[0]:"",t.showLoader(),""!==c){n.next=8;break}return n.next=5,e.page({limit:6,offset:0});case 5:a=n.sent,n.next=11;break;case 8:return n.next=10,e.pageUrl(c);case 10:a=n.sent;case 11:return o=E.SET_POKEDEX,n.next=14,a.results.map(function(){var t=Object(y.a)(K.a.mark((function t(n){return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.pokemonUrl(n.url);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 14:return r=n.sent,n.next=17,Promise.all(r);case 17:i=n.sent,t.hideLoader(),Q.dispatch({type:o,pokedex:Object(h.a)(Object(h.a)({},a),{},{resultDetail:i})});case 20:case"end":return n.stop()}}),n)})))},te=function(){var e=ee(),t=function(){var e=ee(),t=Q.getState().pokedex.next;return Object(y.a)(K.a.mark((function n(){return K.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e(t);case 2:case"end":return n.stop()}}),n)})))}();return{setPokedex:e,prevPokedex:function(){var e=ee(),t=Q.getState().pokedex.previous;return Object(y.a)(K.a.mark((function n(){return K.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e(t);case 2:case"end":return n.stop()}}),n)})))}(),nextPokedex:t,getInithialPokemon:function(){var e=H();return Object(y.a)(K.a.mark((function t(){var n,c;return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=["https://pokeapi.co/api/v2/pokemon/1/","https://pokeapi.co/api/v2/pokemon/4/","https://pokeapi.co/api/v2/pokemon/7/"],t.next=3,n.map(function(){var t=Object(y.a)(K.a.mark((function t(n){return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.pokemonUrl(n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 3:return c=t.sent,t.next=6,Promise.all(c);case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)})))}(),addPokemon:function(e){var t=E.ADD_POKEMON;Q.dispatch({type:t,newPokemon:e})},selectPokemon:function(e){Q.dispatch({type:E.SET_CURR_POKEMON,newPokemon:e})},setEnemy:function(){var e=H();return Object(y.a)(K.a.mark((function t(){var n,c;return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Math.trunc(1+1118*Math.random()),t.next=3,e.getPokemonById(n);case 3:return c=t.sent,t.abrupt("return",Q.dispatch({type:E.SET_ENEMY,newPokemon:c}));case 5:case"end":return t.stop()}}),t)})))}(),allyAtack:function(e){Q.dispatch({type:E.ALLY_ATACK,damage:e})},enemyAtack:function(){Q.dispatch({type:E.ENEMY_ATACK})},startBattle:function(){Q.dispatch({type:E.START_BATTLE})},run:function(){Q.dispatch({type:E.RUN})},capture:function(){Q.dispatch({type:E.CAPTURE})},goToMedic:function(e){Q.dispatch({type:E.GOT_TO_MEDIC,newPokemon:e})},goToPokedex:function(e){Q.dispatch({type:E.GO_TO_POKEDEX,newPokemon:e})}}};n(72);!function(e){e[e.DEF=0]="DEF",e[e.POWER=1]="POWER"}(q||(q={}));var ne,ce=Object(m.b)(P,{})((function(e){var t,n=Object(r.useState)(!1),c=Object(R.a)(n,2),a=c[0],o=c[1],i=q.DEF,s=q.POWER,u=e.state,l=e.currPokemon,j=te(),b=function(){return Object(S.jsxs)("span",{className:"battle-select__def",children:["what should you do ",null===l||void 0===l?void 0:l.name.toLocaleUpperCase()," ?"]})},O=function(){return Object(S.jsx)("div",{className:"battle-select__power",children:l.abilities.map((function(e,t){var n=l.abilities.length,c=Math.trunc((n-t)/n*l.base_experience);return Object(S.jsxs)("button",{onClick:function(){return function(e){a||(o(!0),j.allyAtack(e),setTimeout((function(){j.enemyAtack(),o(!1)}),1e3))}(c)},className:"battle-select__power-button",children:[c,": ",e.ability.name]})}))})},d=(t={},Object(x.a)(t,i,Object(S.jsx)(b,{})),Object(x.a)(t,s,Object(S.jsx)(O,{})),t);return Object(S.jsx)("div",{className:"battle-select",children:Object(S.jsx)("div",{className:"battle-select__yellow-border",children:d[u]})})})),ae=(n(73),function(e){var t=e.onClickFight,n=Object(r.useState)(!1),c=Object(R.a)(n,2),a=c[0],o=c[1],i=te(),s=Object(l.g)();return Object(S.jsxs)("div",{className:"battle-button",children:[Object(S.jsx)("button",{disabled:a,onClick:t,className:"battle-button__button battle-button__button-blue",children:"fight"}),Object(S.jsx)("button",{disabled:a,onClick:function(){o(!0),i.capture(),setTimeout((function(){i.enemyAtack(),o(!1)}),4e3)},className:"battle-button__button battle-button__button-red",children:"capture"}),Object(S.jsx)("button",{disabled:a,onClick:function(){i.run(),s.push(O)},className:"battle-button__button battle-button__button-orange",children:"run"})]})}),oe=function(){var e=Object(r.useState)(q.DEF),t=Object(R.a)(e,2),n=t[0],c=t[1];return Object(S.jsxs)("div",{className:"battle-display",children:[Object(S.jsx)(ce,{state:n}),Object(S.jsx)(ae,{onClickFight:function(){return c(q.POWER)}})]})},re=n.p+"static/media/pokeball.7b492a23.png",ie=n.p+"static/media/joy.002579a1.png",se=(n.p,n.p+"static/media/arena.9efd3d5e.png"),ue=function(){return Object(S.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[Object(S.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),Object(S.jsx)("path",{d:"M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"})]})},le=function(e){var t=e.active,n=void 0===t||t,c=g;return Object(S.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:n?"#000000":c,children:[Object(S.jsx)("g",{children:Object(S.jsx)("path",{d:"M0,0h24v24H0V0z",fill:"none"})}),Object(S.jsx)("g",{children:Object(S.jsx)("polygon",{points:"6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12"})})]})},je=function(e){var t=e.active,n=void 0===t||t,c=g;return Object(S.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:n?"#000000":c,children:[Object(S.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none",opacity:".87"}),Object(S.jsx)("path",{d:"M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z"})]})},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{color:"#000000"};return Object(S.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:e.color,children:[Object(S.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),Object(S.jsx)("path",{d:"M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"})]})},Oe=function(){return Object(S.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[Object(S.jsx)("rect",{fill:"none",height:"24",width:"24"}),Object(S.jsx)("path",{d:"M12,3L6,7.58V6H4v3.11L1,11.4l1.21,1.59L4,11.62V21h16v-9.38l1.79,1.36L23,11.4L12,3z M18,19h-5v-4h-2v4H6v-8.9l6-4.58 l6,4.58V19z M10,1c0,1.66-1.34,3-3,3C6.45,4,6,4.45,6,5H4c0-1.66,1.34-3,3-3c0.55,0,1-0.45,1-1H10z"})]})},de=(n(76),Object(m.b)(P,{})((function(e){var t=e.launch,n=!e.battle,c=n?"pokeball__take":"pokeball__n__take",a=n?"catch":"fail";return t?Object(S.jsx)("div",{className:"pokeball-section__warpper ".concat("pokeball-section__anime-warper"),children:Object(S.jsxs)("div",{className:"pokeball-section ".concat("pokeball-section__anime-section"),children:[Object(S.jsx)("span",{className:"pokeball-text ".concat(c),children:a}),Object(S.jsx)("img",{className:"pokeball-section__img",src:re,alt:""})]})}):Object(S.jsx)(S.Fragment,{})}))),pe=Object(m.b)(P,{})((function(e){var t=e.currPokemon,n=e.enemy,c=Object(l.g)();return e.battle||setTimeout((function(){c.push(O)}),3e3),Object(S.jsxs)("div",{className:"fight-section",children:[Object(S.jsxs)("div",{className:"fight-section__warper",children:[Object(S.jsx)(I,{className:"fight-section__life-ally",pokemon:t}),Object(S.jsx)(I,{className:"fight-section__life-enemy",pokemon:n}),Object(S.jsx)(L,{className:"fight-section__ally",back:!0,pokemon:t}),Object(S.jsx)(L,{className:"fight-section__enemy",back:!1,pokemon:n}),Object(S.jsx)(de,{})]}),Object(S.jsx)(oe,{})]})})),me=function(){return Object(S.jsx)(pe,{})},he=(n(77),n(78),function(e){var t=e.Card,n=e.onClick,c=e.pokemons,a=e.div,o=e.button;return Object(S.jsx)("div",{className:a,children:c.map((function(e){return Object(S.jsx)("button",{className:"pokemon-list-component__button ".concat(o),onClick:function(){return n(e)},children:Object(S.jsx)(t,{pokemon:e})})}))})}),fe=(n(79),n(80),n(81),function(e){var t=e.life,n={backgroundColor:"lightgreen",width:"".concat(t,"%"),height:"2px"};return Object(S.jsx)("div",{className:"LifeBarSection",children:Object(S.jsx)("div",{style:n})})}),xe=function(e){var t=e.pokemon,n=e.div,c=e.img,a=e.currTime,o=t.timeToRecover?new Date(t.timeToRecover):null,r=o,i=function(){return Math.trunc((r.getTime()-a.getTime())/1e3)};return Object(S.jsxs)("div",{className:"pokemon-card ".concat(n),children:[Object(S.jsx)("img",{className:"pokemon-card__img ".concat(c),src:t.sprites.front_default,alt:t.name}),Object(S.jsx)("div",{children:t.nick_name||t.name}),!!t.life&&Object(S.jsxs)("div",{children:[t.life,Object(S.jsx)(fe,{life:Math.trunc(100*t.life/t.base_experience)})]}),o&&Object(S.jsx)("div",{className:i()<=0?"pokemon-card__finish":"pokemon-card__not-finish",children:i()<=0?"Ok !!!":"".concat(i()," s")})]})},ke=function(e){var t=e.pokemon;return Object(S.jsx)(xe,{pokemon:t,div:"PokemonCard",img:"PokemonCard__img"})},ve=(n(82),function(e){var t=e.pokemons,n=e.onClick,c=e.next,a=e.prev;return Object(S.jsxs)("div",{className:"PokeListCommunSection",children:[Object(S.jsx)("button",{className:"PokedexListCommunSection__button",onClick:a.oper,children:Object(S.jsx)(je,{active:a.active})}),Object(S.jsx)(he,{div:"PokeListCommunSection",button:"PokedexListCommunSection__button",Card:ke,onClick:n,pokemons:t}),Object(S.jsx)("button",{className:"PokedexListCommunSection__button",onClick:c.oper,children:Object(S.jsx)(le,{active:c.active})})]})}),Ee=(n(83),Object(m.b)(P,{})((function(e){var t=e.pokedex,n=te(),c=t.next,a=t.previous,o={active:!!c,oper:function(){c&&n.nextPokedex()}},i={active:!!a,oper:function(){a&&n.prevPokedex()}};return Object(r.useEffect)((function(){0===Q.getState().pokedex.count&&n.setPokedex()}),[]),Object(S.jsx)("div",{className:"PokedexSection",children:Object(S.jsx)(ve,{pokemons:t.resultDetail||[],next:o,prev:i,onClick:function(e){}})})}))),Ce=Object(m.b)(P,{})((function(e){var t=e.pokeList,n=te(),c=Math.trunc(t.length/6)+1,a=Object(r.useState)(0),o=Object(R.a)(a,2),i=o[0],s=o[1],u=i<c-1,l={active:u,oper:function(){u&&s(i+1)}},j=i>0,b={active:j,oper:function(){j&&s(i-1)}},O=t.slice(6*i,6*(i+1));return Object(S.jsx)("div",{className:"PokedexSection",children:Object(S.jsx)(ve,{pokemons:O,next:l,prev:b,onClick:function(e){try{n.selectPokemon(e)}catch(t){}}})})}));!function(e){e[e.POKEDEX=0]="POKEDEX",e[e.MY_POKEMONS=1]="MY_POKEMONS",e[e.DETAILS_MY=2]="DETAILS_MY",e[e.DETAILS_POEKDEX=3]="DETAILS_POEKDEX"}(ne||(ne={}));var Ae,_e=function(){var e=Object(r.useState)(!1),t=Object(R.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(ne.POKEDEX),o=Object(R.a)(a,2),i=o[0],s=o[1],u=ne.POKEDEX,l=ne.MY_POKEMONS;return Object(S.jsxs)("div",{className:"Pokedex ".concat(n&&"PokedexOpen"),children:[Object(S.jsx)("div",{className:"Pokedex__header",children:Object(S.jsx)("button",{className:"Pokedex__openCloseBtn",onClick:function(){return c(!n)},children:Object(S.jsx)("div",{className:"Pokedex__button__icon ".concat(n&&"Pokedex__button__icon__down"),children:Object(S.jsx)(ue,{})})})}),Object(S.jsxs)("div",{className:"Pokedex__Info",children:[Object(S.jsxs)("nav",{className:"Pokedex__Nav",children:[Object(S.jsx)("button",{className:"Pokedex__button ".concat(i===ne.POKEDEX?"Pokedex__button_selected":""),onClick:function(){s(ne.POKEDEX)},children:"pokedex"}),Object(S.jsx)("button",{className:"Pokedex__button ".concat(i===ne.MY_POKEMONS?"Pokedex__button_selected":""),onClick:function(){s(ne.MY_POKEMONS)},children:"my pokemon"})]}),Object(S.jsx)("div",{className:"Pokedex__content",children:function(){switch(i){case u:return Object(S.jsx)(Ee,{});case l:return Object(S.jsx)(Ce,{});default:return Object(S.jsx)("div",{children:"none"})}}()})]})]})},ge=function(e){var t=e.children;return Object(S.jsx)(W.Provider,{value:Object(r.useState)(Boolean(!1)),children:Object(S.jsx)($.Provider,{value:Object(r.useState)(v),children:Object(S.jsx)(m.a,{store:Q,children:t})})})},we=(n(84),function(e){var t=e.pokemons,n=e.className,c=e.currTime,a=e.onClick;return Object(S.jsx)("div",{className:"hospital-room ".concat(n),children:t.map((function(e){return Object(S.jsx)("button",{className:"hospital-room__button",onClick:function(){return a(e)},children:Object(S.jsx)(xe,{div:"hospital-room-card",currTime:c,pokemon:e})})}))})}),Ne=(n(85),n(86),function(e){var t=e.name,n=e.src,c=e.onClick;return Object(S.jsxs)("button",{className:"card-place",onClick:c,children:[Object(S.jsx)("img",{className:"card-place__img",src:n,alt:t}),Object(S.jsx)("p",{className:"card-place__title",children:t})]})});n(87);!function(e){e[e.MEDIC=0]="MEDIC",e[e.ARENA=1]="ARENA",e[e.IDLE=2]="IDLE"}(Ae||(Ae={}));var Pe=Object(m.b)(P,{})((function(e){var t,n=e.currState,c=e.currPokemon,a=Ae.MEDIC,o=Ae.ARENA,r=Ae.IDLE,i=(t={},Object(x.a)(t,a,"medic"),Object(x.a)(t,o,"arena"),Object(x.a)(t,r,"idle"),t)[n];return Object(S.jsxs)("div",{className:"trainer trainer-".concat(i),children:[Object(S.jsx)("img",{className:"home__img",src:"data:image/png;base64,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",alt:""}),c&&Object(S.jsx)("img",{className:"trainer-pokemon__img",src:c.sprites.front_default,alt:""})]})})),Se=(n(88),function(e){var t=e.msg,n=t.open;return Object(S.jsxs)("div",{className:"info-home ".concat(n?"info-home-fadein":"info-home-fadeout"),children:[Object(S.jsx)(be,{}),Object(S.jsx)("p",{children:t.msg})]})}),Te=(n(89),Object(m.b)(P,{})((function(e){var t=e.currPokemon,n=Object(l.g)(),c=Object(r.useState)(Ae.IDLE),a=Object(R.a)(c,2),o=a[0],i=a[1],s=function(e){var t=Object(r.useState)(!1),n=Object(R.a)(t,2),c=n[0],a=n[1],o=Object(r.useState)(""),i=Object(R.a)(o,2),s=i[0],u=i[1];return{open:c,msg:s,send:function(t){a(!0),u(t),setTimeout((function(){a(!1)}),e)}}}(3e3);return Object(S.jsxs)("div",{className:"town",children:[Object(S.jsx)(Se,{msg:s}),Object(S.jsxs)("nav",{className:"town__nav",children:[Object(S.jsx)(Ne,{name:"battle",src:se,onClick:function(){null!=t?0!==t.life?(i(Ae.ARENA),setTimeout((function(){n.push(p)}),2e3)):s.send("you pokemon need to be heath to go to battle"):s.send("you need to select a pokemon go to pokelist and select one")}}),Object(S.jsx)(Ne,{name:"medic",src:ie,onClick:function(){i(Ae.MEDIC),setTimeout((function(){n.push(b)}),2e3)}})]}),Object(S.jsx)(Pe,{currState:o})]})}))),Ie=function(){return Object(S.jsxs)("div",{className:"home",children:[Object(S.jsx)(Te,{}),Object(S.jsx)(_e,{})]})},Le=(n(90),Object(m.b)(P,{})((function(e){var t=Object(r.useState)(new Date),n=Object(R.a)(t,2),c=n[0],a=n[1],o=e.medic,i=te();return Object(r.useEffect)((function(){var e=setInterval((function(){a(new Date)}),500);return function(){clearInterval(e)}})),Object(S.jsx)(we,{className:"hospital",currTime:c,onClick:function(e){i.goToPokedex(e)},pokemons:o})}))),Re=(n(91),Object(m.b)(P,{})((function(e){var t=e.pokeList,n=te();return Object(S.jsx)(we,{className:"waiting-room",onClick:function(e){n.goToMedic(e)},pokemons:t})}))),De=(n(92),function(){var e=Object(l.g)();return Object(S.jsxs)("div",{className:"medic",children:[Object(S.jsx)("button",{className:"medic-button",onClick:function(){e.push(O)},children:Object(S.jsx)(Oe,{})}),Object(S.jsx)(Le,{}),Object(S.jsx)(Re,{})]})}),Ke=(n(93),n(94),function(e){var t=e.pokemon;return Object(S.jsx)(xe,{pokemon:t,div:"pokemon-inithial-section",img:"pokemon-inithial-section__img"})}),ye=(n(95),function(e){var t=e.onClick,n=e.pokemons;return Object(S.jsx)(he,{Card:Ke,div:"list-pokemon-inithial-section",button:"list-pokemon-inithial-section__button",onClick:t,pokemons:n})}),Me=function(){var e=Object(r.useState)([]),t=Object(R.a)(e,2),n=t[0],c=t[1],a=te(),o=Object(l.g)(),i=function(){var e=Object(y.a)(K.a.mark((function e(){var t;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.getInithialPokemon();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){i()}),[]);return Object(S.jsxs)("div",{className:"inithial-pokemon",children:[Object(S.jsx)("h1",{className:"inithial-pokemon__h1",children:"Select your inithial pokemon"}),Object(S.jsx)(ye,{onClick:function(e){a.addPokemon(e),o.push(O)},pokemons:n})]})},Ue=(n(96),n(97),Object(m.b)(P,{})((function(e){var t,n=Object(r.useState)(!0),c=Object(R.a)(n,2),a=c[0],o=c[1],i=te(),s=Object(l.g)(),u=function(){var e=Object(y.a)(K.a.mark((function e(){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.next=3,i.setEnemy();case 3:o(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){u()}),[]);return Object(S.jsxs)("div",{className:"accept-baltle-s",children:[Object(S.jsx)("img",{className:"curr-pokemon",src:e.currPokemon.sprites.front_default,alt:""}),Object(S.jsx)("img",{className:"accept-baltle-s__img",src:null===(t=e.enemy)||void 0===t?void 0:t.sprites.front_default,alt:""}),Object(S.jsxs)("div",{className:"accept-batle-s__button-warper",children:[Object(S.jsx)("button",{onClick:function(){s.push(O)},className:"accept-baltle-s__button accept-baltle-s__button-run",children:"run"}),Object(S.jsx)("button",{disabled:a,onClick:function(){s.push(j),i.startBattle()},className:"accept-baltle-s__button",children:"fight"})]})]})}))),Fe=function(){return Object(S.jsxs)("div",{className:"accept-battle",children:[Object(S.jsx)(Ue,{}),Object(S.jsx)(_e,{})]})},Je=function(e){var t=Q.getState(),n=Object(l.h)();return 0===t.pokeList.length&&0===t.medic.length?Object(S.jsx)(l.a,{to:d}):t.battle&&n.pathname!==j?Object(S.jsx)(l.a,{to:j}):Object(S.jsx)(l.b,Object(h.a)({},e))},Ve=function(e){return Q.getState().pokeList.length>0&&Q.getState().medic.length>0?Object(S.jsx)(l.a,{to:O}):Object(S.jsx)(l.b,Object(h.a)({},e))},Xe=j,Be=O,He=b,Ye=d,Ge=p,Qe=function(){var e=[{path:Xe,exact:!0,compoment:me,CustomRoute:Je},{path:He,exact:!0,compoment:De,CustomRoute:Je},{path:Be,exact:!0,compoment:Ie,CustomRoute:Je},{path:Ye,exact:!0,compoment:Me,CustomRoute:Ve},{path:Ge,exact:!0,compoment:Fe,CustomRoute:Je},{path:"/",exact:!1,compoment:Ie,CustomRoute:Je}];return Object(S.jsx)(S.Fragment,{children:e.map((function(e,t){var n=e.compoment,c=e.exact,a=e.path,o=e.CustomRoute;return Object(S.jsx)(o,{component:n,exact:c,path:a},t)}))})};var qe=function(){return Object(S.jsx)("div",{className:"App",children:Object(S.jsx)("div",{className:"App__div",children:Object(S.jsx)(ge,{children:Object(S.jsx)(l.d,{children:Object(S.jsx)(Qe,{})})})})})};u.a.render(Object(S.jsx)(i.a.StrictMode,{children:Object(S.jsx)(o.a,{children:Object(S.jsx)(qe,{})})}),document.getElementById("root"))}]),[[98,1,2]]]);
//# sourceMappingURL=main.82c55155.chunk.js.map