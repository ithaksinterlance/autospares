!function(n){var e={},t={1:0};function o(t){if(e[t])return e[t].exports;var r=e[t]={i:t,l:!1,exports:{}};return n[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){if(0!==t[e]){var o=require("./"+e+".bundle.js"),r=o.modules,a=o.ids;for(var i in r)n[i]=r[i];for(var l=0;l<a.length;l++)t[a[l]]=0}return Promise.all([])},o.m=n,o.c=e,o.d=function(n,e,t){o.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,e){if(1&e&&(n=o(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)o.d(t,r,function(e){return n[e]}.bind(null,r));return t},o.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(e,"a",e),e},o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},o.p="",o.oe=function(n){process.nextTick((function(){throw n}))},o(o.s=11)}([function(n,e){n.exports=require("react")},function(n,e){n.exports=require("react-router-dom")},function(n,e,t){"use strict";var o=t(6),r=t.n(o),a=t(7),i=t.n(a),l=t(8),c=r()((function(n){return n[1]})),s=i()(l.a);c.push([n.i,'body {\n  background-color: #EBECF0;\n  font-family: "Poppins", sans-serif;\n}\nnav {\n  color: #272343;\n  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;\n}\n.div-bg {\n  background-color: #D3D3D3;\n}\n\nli .nav-link {\n  font-size: 1.5rem;\n  color: #D3D3D3;\n}\nli .nav-link:hover {\n  font-size: 1.9rem;\n}\na:link {\n  text-decoration: none;\n}\n\na:visited {\n  text-decoration: none;\n}\n\na:hover {\n  text-decoration: none;\n}\n\na:active {\n  text-decoration: none;\n}\n.navbar-color {\n  background-color: #47484c;\n  border-bottom: 5px solid black;\n  margin-bottom: 0;\n}\n\n.nav1 {\n  font-family: "Oswald";\n  background-color: #EBECF0;\n  margin: 0;\n  font-size: 30px;\n}\n.nav1-icon {\n  color: #25d366;\n}\n.header-img {\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  height: 70vh;\n  width: 100%;\n  margin-right: 0;\n}\n.green {\n  position: absolute;\n  right: 15rem;\n  top: 25%;\n  height: 80vh;\n  width: 120vh;\n}\n.top-right {\n  position: absolute;\n  top: 16rem;\n  left: 5rem;\n}\n.top-left {\n  position: absolute;\n  top: 10rem;\n  right: 4rem;\n}\n\n.paragraph {\n  font-family: "Poppins", sans-serif;\n  color: black;\n  font-weight: 200;\n  font-size: 20px;\n}\n::placeholder {\n  font-size: 16px;\n}\nform .input {\n  border: 1px #272343;\n}\n\nform {\n  background: url('+s+');\n  border-radius: 15px;\n  font-size: 20px;\n  font-family: "Poppins";\n}\n.form-btn {\n  background-color: #25d366;\n  border: 1px solid #128C7E;\n}\n\n.flex-container {\n  display: flex;\n  flex-direction: row;\n}\n\n.fa-bars {\n  color: #25d366;\n}\n.header-text1 {\n  position: relative;\n}\n.header-text {\n  position: absolute;\n  font-size: 45px;\n  font-family: "Big Shoulders Display", sans-serif;\n  top: 10%;\n  color: darkblue;\n}\n.header-txt {\n  position: absolute;\n  font-size: 45px;\n  font-family: "Big Shoulders Display", sans-serif;\n  top: 10%;\n  color: #faed27;\n}\n.loader {\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  z-index: 1000;\n  border: 16px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 16px solid #25d366;\n  border-right: 16px solid #272343;\n  border-bottom: 16px solid #47484c;\n  border-left: 16px solid #faed27;\n  width: 120px;\n  height: 120px;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 2s linear infinite;\n}\n.heading {\n  font-size: 30px;\n  font-family: "Poppins", sans-serif;\n  font-weight: 500;\n  color: #128C7E;\n  word-spacing: 3pt;\n  letter-spacing: 0.5pt;\n}\n\nfooter {\n  height: 12vh;\n  padding-top: 4vh;\n  background-color: #47484c;\n  color: #25d366;\n  font-size: 2.5vh;\n  font-family: "Poppins", "sans-serif";\n}\n.list {\n  color: black;\n  font-size: 18px;\n  font-family: "Patua One", sans-serif;\n}\n.warranty {\n  height: 50vh;\n  width: 80vh;\n}\n.form-phone {\n  display: none;\n}\n.btn-primary {\n  color: #4286f4;\n  background-color: #c9f6ff;\n  font-size: 18px;\n  width: 13rem;\n  height: 3rem;\n  text-shadow: none;\n  margin: 3px;\n}\nhr {\n  background-color: #9ca0af;\n}\n.card-title {\n  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;\n  color: #4286f4;\n}\n.sellcontainer {\n  border: 2px solid black;\n  padding-top: 95px;\n}\n#menu {\n  left: 2%;\n  top: 80%;\n  height: 5rem;\n  width: 5rem;\n  position: fixed;\n  z-index: 1;\n}\n#menu1 {\n  left: 2%;\n  top: 68%;\n  height: 5rem;\n  width: 5rem;\n  position: fixed;\n  z-index: 1;\n}\n.blink_me {\n  animation: blinker 1s linear infinite;\n  color: red;\n}\n#bottomNav {\n  display: none;\n}\n.batteryProd {\n  height: 75vh;\n  width: 75vh;\n}\n.battery {\n  font-family: "PT Sans Narrow", sans-serif;\n  font-size: 40px;\n  text-shadow: #4286f4;\n  color: #47484c;\n  text-decoration: underline;\n}\n.glyph {\n  font-size: 40px;\n}\nfooter {\n  position: relative;\n  bottom: 0;\n  width: 100%;\n}\n.text-danger {\n  font-size: 12px;\n}\n.ml {\n  font-weight: 900;\n  font-size: 3.5em;\n}\n\n.ml .letter {\n  display: inline-block;\n  line-height: 1em;\n}\n.blog-heading {\n  font-size: 2rem;\n  font-family: "Langar";\n  color: #272343;\n  word-spacing: 3pt;\n  letter-spacing: 0.5pt;\n}\n.blog-list-heading {\n  font-size: 1.6rem;\n  font-family: "Patua One";\n  margin-top: 3vw;\n  color: #25d366;\n}\n.blog-paragraph-heading {\n  font-size: 2rem;\n  font-family: "Karla";\n  margin-top: 2vw;\n  color: #47484c;\n}\n.blog-img {\n  height: 32rem;\n  width: 100%;\n}\n.list-group-item {\n  border-top: 2px solid #272343;\n}\n.haks {\n  height: 9rem;\n  width: 9rem;\n  border: 1px solid #47484c;\n}\n\n.card {\n  margin-top: 2rem;\n  justify-content: center;\n  width: 100%;\n  margin-bottom: 2rem;\n  border: 5px solid #47484c;\n}\n.postCard {\n  box-shadow: 10px 10px 10px #47484c;\n  border-bottom-left-radius: 50px;\n  height: 50rem;\n}\n.card-img-top {\n  width: 100%;\n  height: 18rem;\n}\n@media(max-width: 992px) {\n  .form-phone {\n    align-items: center;\n    display: inline-block;\n  }\n  .formtab {\n    display: none;\n  }\n}\n@media(max-width: 768px) {\n  .header-img {\n    height: 75vh;\n    width: 100%;\n  }\n  .top-right {\n    position: absolute;\n    top: 19rem;\n    left: 1rem;\n  }\n  .top-left {\n    display: none;\n  }\n  .green {\n    right: 0.1px;\n    left: 40%;\n  }\n  .nav1 {\n    font-size: 15px;\n  }\n  .heading {\n    font-size: 28px;\n  }\n  .form-phone {\n    display: none;\n  }\n  #bottomNav {\n    display: none;\n  }\n  #botNav {\n    display: none;\n  }\n  #navMob {\n    display: none;\n  }\n  .paragraph {\n    font-weight: 300;\n  }\n  .batteryProd {\n    height: 60vh;\n    width: 60vh;\n  }\n  .battery {\n    font-size: 25px;\n  }\n  .glyph {\n    font-size: 35px;\n  }\n  footer {\n    position: relative;\n    bottom: 0;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n  }\n  .card {\n    margin-left: 0;\n  }\n  .blog-paragraph-heading {\n    font-size: 1.7rem;\n  }\n}\n@media(max-width: 576px) {\n  .header-img {\n    height: 50vh;\n    margin: 0;\n  }\n  .top-right {\n    position: relative;\n    top: -9rem;\n    left: 0.1rem;\n  }\n  .top-left {\n    display: none;\n  }\n  .green {\n    display: none;\n  }\n\n  .green {\n    position: absolute;\n    left: 3rem;\n    top: 30vh;\n    height: 40vh;\n    width: 55vh;\n  }\n  .form-phone {\n    background: url('+s+');\n    display: inline-block;\n  }\n  .paragraph {\n    font-size: 15px;\n    font-weight: 300;\n  }\n  .list {\n    font-size: 15px;\n  }\n  ::placeholder {\n    font-size: 16px;\n  }\n  .small {\n    font-size: 15px;\n  }\n  .nav1 {\n    font-size: 20px;\n  }\n  .heading {\n    font-size: 23px;\n  }\n  .header-text {\n    font-size: 25px;\n  }\n  .btn-primary {\n    font-size: 14px;\n    width: 10rem;\n    height: 2.6rem;\n    text-shadow: none;\n    margin: 3px;\n  }\n  .flex-container {\n    flex-direction: column;\n    align-items: center;\n  }\n  .fontSize {\n    font-size: 12px;\n    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;\n  }\n  #navbar {\n    display: none;\n  }\n  .nav1{\n    display:none;\n  }\n  #menu {\n    display:none;\n  }\n  #menu1 {\n   display:none;\n  }\n\n  #bottomNav {\n    flex-direction: column;\n    display: inline;\n    background-color: #47484c;\n    color: #25d366;\n  }\n  #bottomNav a {\n    color: #25d366;\n  }\n\n  .batteryProd {\n    height: 50vh;\n    width: 50vh;\n  }\n  footer {\n    position: relative;\n    padding-bottom: 150px;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n  }\n  .battery {\n    font-size: 20px;\n  }\n  .glyph {\n    font-size: 30px;\n  }\n  .blog-img {\n    height: 175px;\n    width: 100%;\n  }\n  .card {\n    margin-left: 0;\n  }\n  .blog-paragraph-heading {\n    font-size: 1.4rem;\n  }\n}\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes mymove {\n  from {\n    left: 0;\n  }\n  to {\n    left: 200px;\n  }\n}\n@keyframes blinker {\n  50% {\n    opacity: 0;\n  }\n}\n',""]),e.a=c},function(n,e){n.exports=require("react-mdl")},function(n,e){n.exports=require("react-dom")},function(n,e,t){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),i=[];function l(n){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===n){e=t;break}return e}function c(n,e){for(var t={},o=[],r=0;r<n.length;r++){var a=n[r],c=e.base?a[0]+e.base:a[0],s=t[c]||0,d="".concat(c," ").concat(s);t[c]=s+1;var f=l(d),u={css:a[1],media:a[2],sourceMap:a[3]};-1!==f?(i[f].references++,i[f].updater(u)):i.push({identifier:d,updater:b(u,e),references:1}),o.push(d)}return o}function s(n){var e=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var r=t.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(n){e.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(e);else{var i=a(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var d,f=(d=[],function(n,e){return d[n]=e,d.filter(Boolean).join("\n")});function u(n,e,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=f(e,r);else{var a=document.createTextNode(r),i=n.childNodes;i[e]&&n.removeChild(i[e]),i.length?n.insertBefore(a,i[e]):n.appendChild(a)}}function p(n,e,t){var o=t.css,r=t.media,a=t.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var m=null,h=0;function b(n,e){var t,o,r;if(e.singleton){var a=h++;t=m||(m=s(e)),o=u.bind(null,t,a,!1),r=u.bind(null,t,a,!0)}else t=s(e),o=p.bind(null,t,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=r());var t=c(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<t.length;o++){var r=l(t[o]);i[r].references--}for(var a=c(n,e),s=0;s<t.length;s++){var d=l(t[s]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}t=a}}}},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(o)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(r[i]=!0)}for(var l=0;l<n.length;l++){var c=[].concat(n[l]);o&&r[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),e.push(c))}},e}},function(n,e,t){"use strict";n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},function(n,e,t){"use strict";e.a=t.p+"83e95546f4db257680b8c14d9ccbe300.jpg"},function(n,e){n.exports=require("react-mdl/extra/material.css")},function(n,e){n.exports=require("react-mdl/extra/material.js")},function(n,e,t){"use strict";t.r(e);var o=t(0),r=t.n(o),a=t(4),i=t.n(a),l=t(5),c=t.n(l),s=t(2),d={insert:"head",singleton:!1},f=(c()(s.a,d),s.a.locals,t(1)),u=Object(o.lazy)((function(){return t.e(0).then(t.bind(null,27))})),p=Object(o.lazy)((function(){return t.e(5).then(t.bind(null,28))})),m=Object(o.lazy)((function(){return t.e(6).then(t.bind(null,29))})),h=Object(o.lazy)((function(){return t.e(2).then(t.bind(null,30))})),b=Object(o.lazy)((function(){return t.e(3).then(t.bind(null,31))})),g=Object(o.lazy)((function(){return t.e(7).then(t.bind(null,32))})),x=Object(o.lazy)((function(){return t.e(13).then(t.bind(null,33))})),y=Object(o.lazy)((function(){return t.e(15).then(t.bind(null,42))})),v=Object(o.lazy)((function(){return t.e(14).then(t.bind(null,34))})),w=Object(o.lazy)((function(){return t.e(8).then(t.bind(null,35))})),z=Object(o.lazy)((function(){return t.e(9).then(t.bind(null,36))})),k=Object(o.lazy)((function(){return t.e(10).then(t.bind(null,37))})),_=Object(o.lazy)((function(){return t.e(11).then(t.bind(null,38))})),E=Object(o.lazy)((function(){return t.e(12).then(t.bind(null,39))})),j=Object(o.lazy)((function(){return t.e(17).then(t.bind(null,16))})),O=Object(o.lazy)((function(){return t.e(4).then(t.bind(null,40))})),R=Object(o.lazy)((function(){return Promise.all([t.e(0),t.e(16)]).then(t.bind(null,41))})),S=function(){return r.a.createElement(o.Suspense,{fallback:r.a.createElement("div",{className:"loader"})},r.a.createElement(f.Switch,null,r.a.createElement(f.Route,{exact:!0,path:"/",component:u}),r.a.createElement(f.Route,{exact:!0,path:"/google760dbaa359091b71.html",component:function(){return window.location.href="google760dbaa359091b71.html",null}}),r.a.createElement(f.Route,{exact:!0,path:"/google1a02148ea2112982.html",component:function(){return window.location.href="google1a02148ea2112982.html",null}}),r.a.createElement(f.Route,{exact:!0,path:"/solite-battery",component:p}),r.a.createElement(f.Route,{exact:!0,path:"/varta-battery",component:m}),r.a.createElement(f.Route,{exact:!0,path:"/acdelco-battery",component:h}),r.a.createElement(f.Route,{exact:!0,path:"/amaron-battery",component:b}),r.a.createElement(f.Route,{exact:!0,path:"/car-battery-brands",component:g}),r.a.createElement(f.Route,{exact:!0,path:"/car-battery-replacement",component:x}),r.a.createElement(f.Route,{exact:!0,path:"/become-a-partner",component:y}),r.a.createElement(f.Route,{exact:!0,path:"/contact",component:v}),r.a.createElement(f.Route,{exact:!0,path:"/BlogSidebar",component:j}),r.a.createElement(f.Route,{exact:!0,path:"/post",component:O}),r.a.createElement(f.Route,{exact:!0,path:"/how_to_maintain_your_car_battery",component:w}),r.a.createElement(f.Route,{exact:!0,path:"/how_to_know_if_your_car_battery_is_dying",component:z}),r.a.createElement(f.Route,{exact:!0,path:"/tips_to_sanitize_your_car_during_covid_19",component:k}),r.a.createElement(f.Route,{exact:!0,path:"/all_you_need_to_know_about_car_battery",component:_}),r.a.createElement(f.Route,{exact:!0,path:"/top_4_battery_for_your_car",component:E}),r.a.createElement(f.Route,{exact:!0,path:"/car_battery_replacement_sharjah",component:R})))},P=t(3);t(9),t(10);var C=function(){return r.a.createElement(P.Layout,{fixedHeader:!0},r.a.createElement(P.Content,null,r.a.createElement("div",{className:"page-content"},r.a.createElement(S,null))))};i.a.render(r.a.createElement(f.BrowserRouter,{basename:"/"},r.a.createElement(C,null)),document.getElementById("root"))},function(n,e){n.exports=require("react-meta-tags")},function(n,e){n.exports=require("sweetalert2")}]);