(function(e){function t(t){for(var c,s,r=t[0],o=t[1],l=t[2],d=0,p=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(c in o)Object.prototype.hasOwnProperty.call(o,c)&&(e[c]=o[c]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],c=!0,r=1;r<n.length;r++){var o=n[r];0!==a[o]&&(c=!1)}c&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var c={},a={app:0},i=[];function s(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=c,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)s.d(n,c,function(t){return e[t]}.bind(null,c));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var u=o;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0666":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("830f"),a=n("5c40"),i={id:"app"};function s(e,t){var n=Object(a["r"])("app-generator");return Object(a["p"])(),Object(a["g"])("div",i,[Object(a["l"])(n)])}n("ac1f"),n("841c");var r={class:"container"},o={class:"columns"},l={class:"column has-text-centered"},u={class:"fixed animate__delay-2s animate__animated animate__fadeInDown"},d=Object(a["l"])("h2",{class:"title is-2 app-title"},[Object(a["k"])("Review "),Object(a["l"])("span",{class:"gen"},"Scraper")],-1),p={class:"blocks"},b={class:"buttons is-centered"},f={class:"notification is-success"},j=Object(a["l"])("button",{class:"delete"},null,-1),O=Object(a["l"])("p",null,"Copied!",-1),v={class:"notification is-danger"},h=Object(a["l"])("button",{class:"delete"},null,-1),m=Object(a["l"])("p",null,[Object(a["k"])("Please enter the correct "),Object(a["l"])("br"),Object(a["k"])("product code (e.g: B009SAAV0C)")],-1),g={class:"notification is-danger"},y=Object(a["l"])("button",{class:"delete"},null,-1),w=Object(a["l"])("p",null,"No positive reviews!",-1),x={class:"column is-6 list-wrapper"},k={class:"loader-wrapper"},C=Object(a["l"])("div",{class:"fancy-spinner"},[Object(a["l"])("div",{class:"ring"}),Object(a["l"])("div",{class:"ring"}),Object(a["l"])("div",{class:"dot"})],-1),_={class:"block"},L={class:"notification is-success"},A={class:"field is-grouped is-grouped-multiline"},P={class:"tags has-addons"},M={class:"tag"},S=Object(a["l"])("span",{class:"tag is-primary"},[Object(a["l"])("i",{class:"fas fa-check"})],-1);function R(e,t){var n=Object(a["r"])("app-list");return Object(a["p"])(),Object(a["g"])("div",r,[Object(a["l"])("div",o,[Object(a["l"])("div",l,[Object(a["l"])("div",u,[d,Object(a["l"])("div",p,[Object(a["y"])(Object(a["l"])("input",{class:"input is-rounded","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.search=t}),type:"text",name:"",placeholder:"e.g Dog leash",onKeypress:t[2]||(t[2]=Object(c["e"])((function(t){return e.searchProduct(t)}),["enter"]))},null,544),[[c["c"],e.search]])]),Object(a["l"])("div",b,[Object(a["l"])("button",{class:[{"is-loading":e.isLoading},"button is-primary is-rounded is-large"],onClick:t[3]||(t[3]=function(t){return e.searchProduct(t)})},"Search",2)]),Object(a["y"])(Object(a["l"])("div",f,[j,O],512),[[c["d"],e.copied]]),Object(a["y"])(Object(a["l"])("div",v,[h,m],512),[[c["d"],e.hasError]]),Object(a["y"])(Object(a["l"])("div",g,[y,w],512),[[c["d"],401===e.statusCode]])])]),Object(a["l"])("div",x,[Object(a["y"])(Object(a["l"])("div",k,[C],512),[[c["d"],e.isLoading]]),Object(a["l"])("div",_,[Object(a["y"])(Object(a["l"])("div",L,[Object(a["l"])("p",null,"Search results for: "+Object(a["u"])(e.search),1)],512),[[c["d"],e.searchLabel]]),Object(a["l"])("div",A,[(Object(a["p"])(!0),Object(a["g"])(a["c"],null,Object(a["q"])(e.searchResults,(function(t,n){return Object(a["p"])(),Object(a["g"])("div",{class:"control",key:n,onClick:Object(c["f"])((function(n){return e.scrape(t.asin)}),["prevent"])},[Object(a["l"])("div",P,[Object(a["l"])("a",M,Object(a["u"])(t.asin),1),S])],8,["onClick"])})),128))])]),Object(a["l"])(c["a"],{name:"fade",mode:"out-in"},{default:Object(a["x"])((function(){return[(Object(a["p"])(!0),Object(a["g"])(a["c"],null,Object(a["q"])(e.newRes,(function(t,c){return Object(a["p"])(),Object(a["g"])(n,{key:c+1,index:c+1,review:t,isLoading:e.isLoading,onCopyclipboard:function(t){return e.copyClipboard("".concat(c+1))}},null,8,["index","review","isLoading","onCopyclipboard"])})),128))]})),_:1})])])])}n("4de4"),n("d3b7");var T=n("5530"),E=n("a1e9"),B=function(){var e=Object(E["g"])({reviews:[],isLoading:!1,isAnimated:!0,statusCode:null});function t(t){return e.isLoading=!0,fetch(t).then((function(t){return e.statusCode=t.status,t.json()})).then((function(t){e.reviews=t,setTimeout((function(){e.isLoading=!1}),2e3),e.isAnimated=!1}))}return Object(T["a"])(Object(T["a"])({},Object(E["m"])(e)),{},{readApi:t})},I=(n("a15b"),n("a434"),n("1276"),{class:"media"}),q={class:"media-content"},D=Object(a["j"])('<span class="icon has-text-warning"><i class="fas fa-star"></i></span><span class="icon has-text-warning"><i class="fas fa-star"></i></span><span class="icon has-text-warning"><i class="fas fa-star"></i></span><span class="icon has-text-warning"><i class="fas fa-star"></i></span><span class="icon has-text-warning"><i class="fas fa-star"></i></span>',5),J={class:"subtitle is-5 review-name"};function N(e,t){return Object(a["p"])(),Object(a["g"])("div",{class:["card animate__animated",{"is-active animate__fadeOutRight":e.isActive}],title:e.index,id:e.index},[Object(a["l"])("div",{class:"card-content",onClick:t[1]||(t[1]=Object(c["f"])((function(t){return e.copyclipboard("".concat(e.index)),e.removeList(e.index)}),["prevent"])),onMouseover:t[2]||(t[2]=function(t){return e.showMore=!0}),onMouseout:t[3]||(t[3]=function(t){return e.showMore=!1})},[Object(a["l"])("div",I,[Object(a["l"])("div",q,[D,Object(a["l"])("p",J,[Object(a["k"])(Object(a["u"])(e.review.content.split(" ").splice(0,35).join(" "))+" ",1),Object(a["y"])(Object(a["l"])("span",{class:"subtitle is-5 review-name"},Object(a["u"])(e.review.content.split(" ").splice(35,1e5).join(" ")),513),[[c["d"],e.showMore]])]),Object(a["l"])("p",{id:"".concat(e.index),class:"subtitle is-5 review-email"},Object(a["u"])(e.review.content),9,["id"])])])],32)],10,["title","id"])}n("a9e3");var V={props:{isLoading:{type:Boolean,default:!1},index:{type:Number},review:{type:Object}},setup:function(e,t){var n=t.emit,c=Object(E["h"])(!1),a=Object(E["h"])(!1);function i(e){setTimeout((function(){document.getElementById(e).style.display="none"}),1e3)}function s(e){c.value=!0,n("copyclipboard",e)}return{isActive:c,copyclipboard:s,removeList:i,showMore:a}}};n("a936");V.render=N;var G=V,K={name:"Generator",components:{"app-list":G},setup:function(){var e=Object(E["h"])(""),t=Object(E["h"])(!1),n=Object(E["h"])(!1),c=Object(E["h"])(""),i=Object(E["h"])([]),s=Object(E["h"])(!1),r=B(),o=r.reviews,l=r.readApi,u=r.isLoading,d=r.isAnimated,p=r.statusCode,b=Object(a["f"])((function(){var e=o.value;if(e.length>=1){var t=e.filter((function(e){return null!=e}));return t}}));function f(){u.value=!0,s.value=!0,o.value={},i.value={},fetch("http://rdb-review-scraper.herokuapp.com/?search=".concat(c.value)).then((function(e){return e.json()})).then((function(e){i.value=e,u.value=!1}))}function j(e){o.value={};var t="http://rdb-review-scraper.herokuapp.com/api/?code=".concat(e);return l(t)}function O(e){console.log("id: ",e);var t=document.getElementById(e).innerText,c=document.createElement("textarea");document.body.appendChild(c),c.value=t,c.select(),document.execCommand("copy"),document.body.removeChild(c),n.value=!0,setTimeout((function(){n.value=!1}),1e3)}return{reviews:o,scrape:j,isLoading:u,copyClipboard:O,copied:n,isAnimated:d,hasError:t,code:e,newRes:b,statusCode:p,search:c,searchResults:i,searchProduct:f,searchLabel:s}}};n("9034");K.render=R;var U=K,z={name:"App",components:{"app-generator":U}};n("64be");z.render=s;var F=z;n("5abe");Object(c["b"])(F).mount("#app")},"64be":function(e,t,n){"use strict";n("98e6")},9034:function(e,t,n){"use strict";n("0666")},"98e6":function(e,t,n){},a936:function(e,t,n){"use strict";n("dfce")},dfce:function(e,t,n){}});
//# sourceMappingURL=app.a27db64f.js.map