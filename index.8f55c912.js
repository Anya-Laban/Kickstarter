var e=globalThis,t={},r={},n=e.parcelRequire4cc0;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},e.parcelRequire4cc0=n),n.register;var i=n("6eih4");const a=document.querySelectorAll(".language__button");a.forEach(e=>{e.addEventListener("click",()=>{var t;t=e.value,a.forEach(e=>{e.value===t?e.classList.add("language__button--active"):e.classList.remove("language__button--active")}),function(e){for(let t in i.default)document.querySelectorAll(".lng-"+t).forEach(r=>{r.innerHTML=i.default[t][e]})}(e.value)})});const s=new Swiper(".swiper",{autoHeight:!0,slidesPerView:1,spaceBetween:56,slidesPerColumnFill:"column",navigation:{nextEl:".swiper-feature__button-next",prevEl:".swiper-feature__button-prev"},breakpoints:{1280:{slidesPerView:2,spaceBetween:56,grid:{rows:2}}}}),l=document.querySelector(".swiper-feature__curent"),o=document.querySelector(".swiper-feature__total"),u=document.querySelector(".swiper-feature__button-prev"),c=document.querySelector(".swiper-feature__button-next");function d(){s.realIndex>0?u.classList.add("swiper-feature__button--active"):u.classList.remove("swiper-feature__button--active"),s.realIndex===s.slides.length-1?c.classList.remove("swiper-feature__button--active"):c.classList.add("swiper-feature__button--active")}function _(){let e=s.realIndex+1;l.innerHTML=e>9?e:"0"+e}o.innerHTML=s.slides.length>9?s.slides.length:"0"+s.slides.length,_(),d(),s.on("slideChange",function(){_(),d()}),AOS.init(),AOS.init({duration:800,easing:"ease-out"});
//# sourceMappingURL=index.8f55c912.js.map
