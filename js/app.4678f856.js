(function(t){function e(e){for(var i,a,l=e[0],r=e[1],h=e[2],u=0,d=[];u<l.length;u++)a=l[u],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);o&&o(e);while(d.length)d.shift()();return n.push.apply(n,h||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],i=!0,l=1;l<s.length;l++){var r=s[l];0!==c[r]&&(i=!1)}i&&(n.splice(e--,1),t=a(a.s=s[0]))}return t}var i={},c={app:0},n=[];function a(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=t,a.c=i,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(s,i,function(e){return t[e]}.bind(null,i));return s},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/kiryueverywhere/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var h=0;h<l.length;h++)e(l[h]);var o=r;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("cd49")},1596:function(t,e,s){"use strict";s("46f3")},"3d40":function(t,e,s){},"46f3":function(t,e,s){},"496a":function(t,e,s){"use strict";s("3d40")},cd49:function(t,e,s){"use strict";s.r(e);var i=s("7a23");const c=Object(i["d"])("h2",null,"🗺️ KIRYU EVERYWHERE! 🗺️",-1),n=Object(i["d"])("h3",null,"This has nothing to do with SEGA",-1),a=Object(i["d"])("h3",null,"made by paul@sarda.dev",-1);function l(t,e,s,l,r,h){const o=Object(i["l"])("Game");return Object(i["g"])(),Object(i["c"])("div",null,[c,Object(i["d"])("h3",null,"LOCATION #"+Object(i["m"])(this.active_game),1),Object(i["e"])(o,{map:t.getMap(),number:this.active_game,threshold:t.getThreshold(),target:t.getTarget()},null,8,["map","number","threshold","target"]),n,a])}var r=s("9ab4"),h=s("ce1f");const o=t=>(Object(i["j"])("data-v-135f8dac"),t=t(),Object(i["h"])(),t),u={class:"game"},d=["src"],b=o(()=>Object(i["d"])("br",null,null,-1)),g={class:"buttons"},_={key:0},p={key:1},m=o(()=>Object(i["d"])("h2",null,"YOU WON",-1)),O={key:2},y=o(()=>Object(i["d"])("h2",null,"YOU LOST",-1)),v=o(()=>Object(i["d"])("h3",null,"TRY AGAIN TOMORROW!",-1)),j=[y,v],f=o(()=>Object(i["d"])("br",null,null,-1)),k=o(()=>Object(i["d"])("br",null,null,-1)),x={key:3},w={key:4},C=["src"];function E(t,e,s,c,n,a){return Object(i["g"])(),Object(i["c"])("div",u,[Object(i["d"])("img",{src:`${t.public_path}pictures/games/${t.number}/${t.active_pic}.webp`,class:"game_pic"},null,8,d),b,Object(i["d"])("div",g,[Object(i["d"])("div",null,[Object(i["d"])("button",{onClick:e[0]||(e[0]=e=>t.showPic(1)),class:Object(i["f"])(t.getClass(1))},"1",2),Object(i["d"])("button",{onClick:e[1]||(e[1]=e=>t.showPic(2)),class:Object(i["f"])(t.getClass(2))},"2",2),Object(i["d"])("button",{onClick:e[2]||(e[2]=e=>t.showPic(3)),class:Object(i["f"])(t.getClass(3))},"3",2),Object(i["d"])("button",{onClick:e[3]||(e[3]=e=>t.showPic(4)),class:Object(i["f"])(t.getClass(4))},"4",2)])]),"playing"==this.state?(Object(i["g"])(),Object(i["c"])("div",_,[Object(i["d"])("h3",null,Object(i["m"])(t.guessesLeftCount())+" GUESSES LEFT",1)])):Object(i["b"])("",!0),"win"==this.state?(Object(i["g"])(),Object(i["c"])("div",p,[m,Object(i["d"])("h3",null,"WITH "+Object(i["m"])(t.guessesLeftCount())+" GUESSES LEFT",1)])):Object(i["b"])("",!0),"lose"==this.state?(Object(i["g"])(),Object(i["c"])("div",O,j)):Object(i["b"])("",!0),f,Object(i["d"])("canvas",{id:"canvas",onClick:e[4]||(e[4]=(...e)=>t.canvasClick&&t.canvasClick(...e))}),k,"playing"==this.state?(Object(i["g"])(),Object(i["c"])("div",x,[Object(i["d"])("button",{class:Object(i["f"])(null==this.selected_x?"submit disabled":"submit"),onClick:e[5]||(e[5]=(...e)=>t.submitButton&&t.submitButton(...e))}," SUBMIT ",2)])):(Object(i["g"])(),Object(i["c"])("div",w,[Object(i["d"])("button",{onClick:e[6]||(e[6]=(...e)=>t.shareClick&&t.shareClick(...e)),class:"submit"},Object(i["m"])(this.share_text),1)])),Object(i["d"])("img",{id:"map",src:`${t.public_path}maps/${t.map}.webp`,hidden:"true"},null,8,C),Object(i["d"])("div",null,[Object(i["d"])("p",null,"DEBUG X:"+Object(i["m"])(this.click_debug_x),1),Object(i["d"])("p",null,"DEBUG Y:"+Object(i["m"])(this.click_debug_y),1)])])}const $=4;let S=class extends h["b"]{};S=Object(r["a"])([Object(h["a"])({props:{map:String,number:Number,target:{x:Number,y:Number},threshold:Number},data(){return{active_pic:1,unlocked_pic:1,canvas:null,selected_x:null,selected_y:null,center_x:null,center_y:null,guesses:[],state:"playing",share_text:"SHARE!",image_width:null,image_height:null,click_debug_x:null,click_debug_y:null,canvas_init:!1,public_path:"/kiryueverywhere/"}},mounted(){var t=document.getElementById("canvas");this.canvas=t.getContext("2d"),this.timer=setInterval(()=>{this.draw()},250)},beforeDestroy(){clearInterval(this.timer)},methods:{guessesLeftCount(){return $+1-this.guesses.length},showPic(t){(t<=this.unlocked_pic||"playing"!=this.state)&&(this.active_pic=t)},unlockNext(){this.unlocked_pic+1<=$&&(this.unlocked_pic++,this.active_pic=this.unlocked_pic)},getClass(t){return this.active_pic==t?"game_btn_active":this.unlocked_pic>=t?"game_btn_unlocked":"playing"!=this.state?"game_btn_unlocked_completed":"game_btn_inactive"},posAsPercent(t){document.getElementById("map");return{x:(t.x-this.center_x)/this.image_width*100,y:(t.y-this.center_y)/this.image_height*100}},shareClick(){let t=`#KIRYU_EVERYWHERE #${this.number}\n\n`;t+="🗺️";for(let s=0;s<this.unlocked_pic-1;s++)t+=" 🟥";t+=" 🟩";for(let s=0;s<$-this.unlocked_pic;s++)t+=" ⬛";t+="\n\n",t+="https://kiryueverywhere.github.io",navigator.clipboard.writeText(t),this.share_text="COPPIED!";let e=setInterval(()=>{this.share_text="SHARE!",clearInterval(e)},250)},submitButton(){if(null==this.selected_x||null==this.selected_y)return;const t=this.posAsPercent({x:this.selected_x,y:this.selected_y});console.log(`CLICK ${t.x}% ${t.y}%`);const e=Math.abs(t.x-this.target.x),s=Math.abs(t.y-this.target.y),i=e+s,c=document.getElementById("map");this.click_debug_x=`px:${t.x} sx:${this.selected_x} cx:${this.center_x} iw:${c.width}`,this.click_debug_y=`py:${t.y} sy:${this.selected_y} cy:${this.center_y} ih:${c.height}`,e<=this.threshold&&s<=this.threshold?(console.log("win!"),this.state="win"):this.guesses.length+1>=$+1?(console.log("lose!"),this.state="lose"):(console.log("unlock next! "+this.guesses.length),this.unlockNext(),console.log(`failure!: dist_x:${e}, dist_y:${s}, dist:${i} threshold:${this.threshold}`)),this.guesses.push({x:this.selected_x,y:this.selected_y,dist_x:e,dist_y:s}),this.selected_x=null,this.selected_y=null,this.draw()},canvasClick(t){"playing"==this.state&&(this.selected_x=t.offsetX,this.selected_y=t.offsetY,this.draw())},drawMap(){let t=this.canvas;const e=t.canvas.width,s=t.canvas.height,i=document.getElementById("map"),c=Math.min(e/i.width,s/i.height);this.image_width=i.width*c,this.image_height=i.height*c;const n=e/2-this.image_width/2,a=s/2-this.image_height/2;this.center_x=e/2,this.center_y=s/2,t.drawImage(i,n,a,this.image_width,this.image_height)},draw(){let t=this.canvas;if(t.clearRect(0,0,t.width,t.height),!this.canvas_init){this.canvas_init=!0;const e=.8*window.innerWidth,s=.5*window.innerHeight;t.canvas.width=e,t.canvas.height=s}this.drawMap();const e=.05*t.canvas.height;for(const s of this.guesses){t.beginPath();let i="";if(s.dist_x<=this.threshold&&s.dist_y<=this.threshold)i="green";else{const t=s.dist_x+s.dist_y;i=t<3.5*this.threshold?"#FF0000":"#8B0000"}t.strokeStyle=i,t.rect(s.x-e/2,s.y-e/2,e,e),t.stroke()}this.selected_x&&this.selected_y&&(t.beginPath(),t.strokeStyle="Black",t.rect(this.selected_x-e/2,this.selected_y-e/2,e,e),t.stroke())}}})],S);var I=S,P=(s("1596"),s("6b0d")),T=s.n(P);const M=T()(I,[["render",E],["__scopeId","data-v-135f8dac"]]);var B=M;const R={yakuza_3_kamuro_map:{threshold:5}},N={1:{map:"yakuza_3_kamuro_map",target:{x:-42,y:-17}},2:{map:"yakuza_3_kamuro_map",target:{x:-.08586762075134168,y:-.034048257372654156}}},U=new Date("2022-07-28");function Y(){let t=new Date;const e=t.getTime(),s=U.getTime();return Math.round((e-s)/864e5)}let A=class extends h["b"]{};A=Object(r["a"])([Object(h["a"])({components:{Game:B},data(){return{active_game:Y()}},methods:{getMap(){return console.log(this.active_game),N[this.active_game].map},getTarget(){return console.log(this.active_game),N[this.active_game].target},getThreshold(){return console.log(this.active_game),R[N[this.active_game].map].threshold}}})],A);var G=A;s("496a");const L=T()(G,[["render",l]]);var D=L;Object(i["a"])(D).mount("#app")}});
//# sourceMappingURL=app.4678f856.js.map