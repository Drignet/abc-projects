(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const s=document.querySelector(".mobile-button"),u=document.querySelector(".ul-nav"),l=document.querySelector("form");document.querySelector("#btn");s.addEventListener("click",()=>{u.classList.toggle("mobile-menu-active")});btn.addEventListener("click",()=>{let i=l.children[0].value,r=l.children[1].value,n=l.children[2].value,o=l.children[3].value,e=l.children[4].value;i===""||r===""||n===""||o===""?(event.preventDefault(),alert("Please fill in all the required fields.")):(alert("Order submited Successfully"),window.location.href="index.html",qunatity,l.reset())});
