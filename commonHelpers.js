import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as h,i as y}from"./assets/vendor-77e16229.js";const a=document.querySelector("#datetime-picker"),e=document.querySelector("button"),p=document.querySelector("[data-days]"),S=document.querySelector("[data-hours]"),b=document.querySelector("[data-minutes]"),q=document.querySelector("[data-seconds]");e.disabled=!0;e.addEventListener("click",C);let c,d;const M={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0]<=Date.now()?(e.disabled=!0,y.error({title:"Error!",message:"Please choose a date in the future",position:"topRight"})):(e.disabled=!1,c=t[0])}};h(a,M);function C(){d=setInterval(()=>{const t=c-new Date;g(t)},1e3),e.disabled=!0,a.disabled=!0}function D(t){const i=Math.floor(t/864e5),l=Math.floor(t%864e5/36e5),m=Math.floor(t%864e5%36e5/6e4),f=Math.floor(t%864e5%36e5%6e4/1e3);return{days:i,hours:l,minutes:m,seconds:f}}function g(t){const{days:n,hours:r,minutes:s,seconds:u}=D(t);!n&&!r&&!s&&!u&&(clearInterval(d),a.disabled=!1),p.textContent=o(n),S.textContent=o(r),b.textContent=o(s),q.textContent=o(u)}function o(t){return t.toString().padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map
