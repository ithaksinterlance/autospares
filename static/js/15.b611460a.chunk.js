(this.webpackJsonphaksinterlance=this.webpackJsonphaksinterlance||[]).push([[15],{100:function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}r.d(t,"a",(function(){return a}))},101:function(e,t,r){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}r.d(t,"a",(function(){return s}));var o=r(116);function c(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?Object(o.a)(e):t}function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=n(e);if(t){var o=n(this).constructor;r=Reflect.construct(a,arguments,o)}else r=a.apply(this,arguments);return c(this,r)}}},102:function(e,t,r){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}r.d(t,"a",(function(){return a}))},110:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return b}));var n=r(3),a=r(99),o=r(100),c=r(102),s=r(101),i=r(0),l=r.p+"static/media/Logo.17addbcf.png",u=r(20),f=r(111),d=r.n(f),b=function(e){Object(c.a)(r,e);var t=Object(s.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return Object(o.a)(r,[{key:"submituserInquiryForm",value:function(){var e=document.getElementById("carbattery").value,t=document.getElementById("area").value,r=document.getElementById("contactno").value,n=!0;if(""===e)n=!1,document.getElementById("carbatteryerror").innerHTML="** Please fill the Battery Model";else if(""===t)n=!1,document.getElementById("areaerror").innerHTML="** Please fill the Area";else if(""===r)n=!1,document.getElementById("contactnoerror").innerHTML="** Please fill the Contact";else if(isNaN(r))n=!1,document.getElementById("contactnoerror").innerHTML="** Check Your contact no";else if(n)return d.a.fire("Form submitted. We will contact you shortly ;)").then((function(){return document.getElementById("miForm").onreset(window.location.reload())})),n}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"col-md-3 text-center pt-3",children:[Object(n.jsxs)("div",{className:"py-4",children:[Object(n.jsx)("h1",{className:"paragraph blink_me",children:"Pre-order your battery now!"}),Object(n.jsx)("iframe",{title:"car battery replacement uae",name:"hidden_iframe",id:"hidden_iframe",style:{display:"none"}}),Object(n.jsxs)("form",{id:"myForm",method:"POST",action:"https://docs.google.com/forms/d/e/1FAIpQLSd6fL_M5hLUjjBLJyMFWUijW2qNrGwQ0RxMVhpmTOEEqj3Jxg/formResponse",onSubmit:this.submituserInquiryForm,class:"py-4 px-4 form-bg",width:"50",target:"hidden_iframe",children:[Object(n.jsxs)("div",{class:"form-group",children:[Object(n.jsxs)("small",{id:"CarBatteryModel",class:"form-text",children:[Object(n.jsx)("i",{class:"fas fa-car-battery"})," Vehicle Details"]}),Object(n.jsx)("input",{type:"text",name:"entry.1911907904",id:"carbattery",class:"form-control ","aria-describedby":"CarBatteryModel",placeholder:" Car Model Year",autoComplete:"off"}),Object(n.jsx)("div",{children:Object(n.jsx)("span",{id:"carbatteryerror",className:"text-danger font-weight-bold"})})]}),Object(n.jsxs)("div",{class:"form-group",children:[Object(n.jsxs)("small",{id:"AreaName",class:"form-text",children:[Object(n.jsx)("i",{class:"fa fa-map-marker","aria-hidden":"true"})," Delivery Location"]}),Object(n.jsx)("input",{type:"text",name:"entry.1153362739",id:"area",class:"form-control","aria-describedby":"AreaName",placeholder:" Area Name, Emirate",autoComplete:"off"}),Object(n.jsx)("div",{children:Object(n.jsx)("span",{id:"areaerror",className:"text-danger font-weight-bold"})})]}),Object(n.jsxs)("div",{class:"form-group",children:[Object(n.jsxs)("small",{id:"ContactNo",class:"form-text",children:[Object(n.jsx)("i",{class:"fa fa-phone","aria-hidden":"true"})," Contact"]}),Object(n.jsx)("input",{type:"text",name:"entry.153243795",id:"contactno",class:"form-control ","aria-describedby":"ContactNo",placeholder:"(Country code)(No.)",autoComplete:"off"}),Object(n.jsx)("div",{children:Object(n.jsx)("span",{id:"contactnoerror",className:"text-danger font-weight-bold"})})]}),Object(n.jsx)("input",{type:"hidden",id:"ref",name:"entry.376651987",value:"AJB"}),Object(n.jsxs)("button",{type:"submit",class:"btn btn-danger btn-lg btn-block pb-3 form-btn",target:"_self",children:[Object(n.jsx)("i",{class:"fab fa-whatsapp"}),"\xa0\xa0SEND"]})]})]}),Object(n.jsx)("img",{src:l,alt:"car battery replacement dubai",className:"img-fluid rounded-circle haks"}),Object(n.jsx)("h1",{className:"heading pt-3 ",children:"PUBLISHER"}),Object(n.jsxs)("div",{className:"contain",children:[Object(n.jsx)("a",{href:"https://www.facebook.com/haksinterlance/",style:{color:"#4867AA"},rel:"noopener noreferrer",target:"_blank",children:Object(n.jsx)("i",{class:"fab fa-2x fa-facebook"})}),Object(n.jsx)("a",{href:"https://api.whatsapp.com/send?phone=971551478994",style:{color:"#25d366"},rel:"noopener noreferrer",target:"_blank",children:Object(n.jsx)("i",{class:"fab fa-2x fa-whatsapp"})}),Object(n.jsx)("a",{href:"https://twitter.com/haksinterlance",style:{color:"#1DA1F2"},rel:"noopener noreferrer",target:"_blank",children:Object(n.jsx)("i",{class:"fab fa-2x fa-twitter"})}),Object(n.jsx)("a",{href:"http://g.page/haksinterlance",rel:"noopener noreferrer",style:{color:"#de5246"},target:"_blank",children:Object(n.jsx)("i",{class:"fab fa-2x fa-google"})}),Object(n.jsx)("a",{href:"mailto:haksinterlance@gmail.com",children:Object(n.jsx)("i",{class:"fas fa-2x fa-envelope",style:{color:"#dd4b39"},"aria-hidden":"true"})}),Object(n.jsx)("a",{href:"http://t.me/haksinterlance",style:{color:"#0088cc"},children:Object(n.jsx)("i",{class:"fab fa-2x fa-telegram-plane"})})]}),Object(n.jsx)("h1",{className:"paragraph pt-3",style:{textDecoration:"underline"},children:"RELATED ARTICLES"}),Object(n.jsx)("hr",{}),Object(n.jsxs)("ul",{class:"list-group",children:[Object(n.jsx)("li",{class:"list-group-item",children:Object(n.jsx)(u.b,{to:"/How_to_maintain_your_car_battery",rel:"noopener noreferrer",className:"paragraph",children:"How to maintain your car battery"})}),Object(n.jsx)("hr",{}),Object(n.jsx)("li",{class:"list-group-item",children:Object(n.jsx)(u.b,{to:"/How_to_know_if_your_car_battery_is_dying",rel:"noopener noreferrer",className:"paragraph",children:"How to know if your car battery is dying"})}),Object(n.jsx)("hr",{}),Object(n.jsx)("li",{class:"list-group-item",children:Object(n.jsx)(u.b,{to:"/tips_to_sanitize_your_car_during_covid_19",rel:"noopener noreferrer",className:"paragraph",children:"Tip to sanitize your car during covid 19"})}),Object(n.jsx)("hr",{}),Object(n.jsx)("li",{class:"list-group-item",children:Object(n.jsx)(u.b,{to:"/All_you_need_to_know_about_car_battery",rel:"noopener noreferrer",className:"paragraph",children:"All you need to know about car battery"})}),Object(n.jsx)("hr",{}),Object(n.jsx)("li",{class:"list-group-item",children:Object(n.jsx)(u.b,{to:"/top_4_battery_for_your_car",rel:"noopener noreferrer",className:"paragraph",children:"Top 4 battery for your car"})})]})]})}}]),r}(i.Component)},116:function(e,t,r){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r.d(t,"a",(function(){return n}))},99:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}r.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=15.b611460a.chunk.js.map