var a=Object.defineProperty;var c=(r,i,e)=>i in r?a(r,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[i]=e;var n=(r,i,e)=>(c(r,typeof i!="symbol"?i+"":i,e),e);(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}})();const l=class{constructor(i,e,o,t,s){n(this,"size");n(this,"x");n(this,"y");n(this,"vx");n(this,"vy");n(this,"div");n(this,"hit");n(this,"melt");this.size=i,this.x=e,this.y=o,this.vx=t,this.vy=s,this.hit=!1,this.melt=!1,this.div=document.createElement("div"),this.div.classList.add("snowflake"),this.div.style.width=this.size+"px",this.div.style.height=this.size+"px"}move(){this.x+=this.vx+Math.min(Math.max(0,-10),10),this.y+=this.vy,this.x>window.innerWidth+this.size&&(this.x-=window.innerWidth+this.size),this.x<-this.size&&(this.x+=window.innerWidth+this.size),this.y>window.innerHeight+this.size&&(this.x=Math.random()*window.innerWidth,this.y-=window.innerHeight+this.size*2,this.melt=!1)}draw(){this.div.style.transform="translate3d("+this.x+"px,"+this.y+"px,0)"}static init(i){for(let e=this.flakesTotal;e--;e>0){let o=(Math.random()+.2)*12+1,t=new l(o,Math.random()*window.innerWidth,Math.random()*window.innerHeight,Math.random()-.5,o*.3);i.appendChild(t.div),this.flakes.push(t)}this.update(),console.log("Over")}static update(){for(let i=250;i--;){let e=this.flakes[i];e.move(),e.draw()}requestAnimationFrame(this.update.bind(this))}};let h=l;n(h,"flakes",[]),n(h,"flakesTotal",250);window.onload=()=>{setTimeout(()=>{h.init(document.getElementById("snow"))},100)};
