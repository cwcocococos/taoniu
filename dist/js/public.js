function $id(t){return document.getElementById(t)}function rand(t,e){return Math.round(Math.random()*(e-t)+t)}function getColor(){for(var t="#",e=1;e<=6;e++)t+="0123456789abcdef".charAt(rand(0,15));return t}function dateToString(t){t=t||"-";var e=new Date;return e.getFullYear()+t+toTwo(e.getMonth()+1)+t+toTwo(e.getDate())+" "+toTwo(e.getHours())+":"+toTwo(e.getMinutes())+":"+toTwo(e.getSeconds())}function toTwo(t){return t<10?"0"+t:t}function stringToDate(t){return new Date(t)}function diff(t,e){return Math.abs(t.getTime()-e.getTime())/1e3}function create(t){return document.createElement(t)}function pz(t,e){var o=t.offsetLeft,n=t.offsetWidth+t.offsetLeft,f=t.offsetTop,r=t.offsetHeight+t.offsetTop,u=e.offsetLeft,i=e.offsetWidth+e.offsetLeft,a=e.offsetTop,c=e.offsetHeight+e.offsetTop;return!(n<u||i<o||r<a||c<f)}function getStyle(t,e){return window.getComputedStyle?window.getComputedStyle(t,!1)[e]:t.currentStyle[e]}