(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const l=document.querySelector(".progress-bars-wrapper"),s=document.querySelector(".navbar"),f=document.querySelectorAll(".navbar-link"),d=document.querySelectorAll(".progress-percent"),u=document.querySelectorAll("section"),a=[97,89,85,60],p=s.offsetTop;window.addEventListener("scroll",()=>{g(),m(),w()});window.addEventListener("resize",()=>{window.location.reload()});function g(){window.pageYOffset>=p?s.classList.add("sticky"):s.classList.remove("sticky")}function m(){const r=h(s);u.forEach((t,i)=>{window.pageYOffset>=t.offsetTop-r&&(f.forEach(n=>n.classList.remove("active")),f[i].classList.add("active"))})}function w(){window.pageYOffset+window.innerHeight>=l.offsetTop&&(console.log("progress offsetTop = ",l.offsetTop,l.offsetParent),console.log("window innerHeight = ",window.innerWidth),console.log("window pageYOffset = ",window.pageYOffset),d.forEach((r,t)=>{r.style.width=`${a[t]}%`,r.previousElementSibling&&r.previousElementSibling.firstElementChild&&(r.previousElementSibling.firstElementChild.textContent=`${a[t]}`)}))}function h(r){let t=getComputedStyle(r).getPropertyValue("height");return+t.substring(0,t.length-2)}
