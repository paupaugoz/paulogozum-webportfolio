(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,a,t){e.exports={animatedTextContainer:"AnimatedText_animatedTextContainer__2CrTv",animatedTextContent:"AnimatedText_animatedTextContent__3VxWC",animatedTextContentClone:"AnimatedText_animatedTextContentClone__3VG4m AnimatedText_animatedTextContent__3VxWC"}},,,,,function(e,a,t){e.exports=t(22)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(8),c=t.n(r),l=(t(17),t(1)),i=t(2),s=t(4),m=t(3),d=t(5),f=(t(18),t(19),t(20),t(21),t(9)),u=t(10),h=t(6),p=t.n(h),E=function(e){var a=e.textColor,t=e.overlayColor,r=e.children,c=Object(u.a)(e,["textColor","overlayColor","children"]),l=Object(n.useRef)(null),i={x:0,y:0},s=Object(n.useState)(i),m=Object(f.a)(s,2),d=m[0],h=m[1];return o.a.createElement("section",Object.assign({className:p.a.animatedTextContainer,style:{"--maskX":d.x,"--maskY":d.y},onMouseMove:function(e){e=e.nativeEvent;var a=l.current,t=e.offsetX/a.clientWidth*100,n=e.offsetY/a.clientHeight*100;h({x:t,y:n})},onMouseOut:function(){return h(i)},ref:l},c),o.a.createElement("h1",{style:{color:a},className:p.a.animatedTextContent},r),o.a.createElement("h1",{style:{color:t},className:p.a.animatedTextContentClone},r))},w=function(e){function a(){return Object(l.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{id:"projects",className:"intro-wrapper"},o.a.createElement("div",{id:"header"}),o.a.createElement("div",{id:"main-wrapper"},o.a.createElement("div",{className:"image-container"},o.a.createElement("img",{src:"./blacklogo.png",className:" fadeInDown img",alt:"Logo"})),o.a.createElement("h1",{id:"name-header",className:" fadeInDownBig red"},"Code That Works"),o.a.createElement("h2",{className:" fadeInDown delay-1s black "},"Hi I'm Gozum"),o.a.createElement("h3",{className:" fadeInDown delay-2s black "},"I'm a ",o.a.createElement("span",{className:"red"},"front end web developer "),"based in Southern California"),o.a.createElement("h3",{id:"projects-header",className:" fadeInDown delay-3s black "},"My goal is to",o.a.createElement("span",{className:"red"}," align technology ")," with ",o.a.createElement("span",{className:"red"},"business objectives"))),o.a.createElement("div",{id:"footer"},o.a.createElement("h1",{className:"black"})))}}]),a}(n.Component),b=function(e){function a(){return Object(l.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{id:"intro-wrapper"},o.a.createElement("div",{class:"animated fadeIn"},o.a.createElement("div",{id:"header"},o.a.createElement("div",{id:"links-container"},o.a.createElement("div",{className:"url-container justify-start animated fadeIn slower"}),o.a.createElement("div",{class:"animated  fadeIn slower icon-container"},o.a.createElement("div",{className:"icon-wrapper"},o.a.createElement("a",{title:"Designed by [https://fontawesome.com/icons/address-book?style=solid] from www.fontawesome.com",href:"https://docs.google.com/document/d/1KHecB6J9OXhenj5G5wcEUTa9-koTEjM9zLU0ZhfdTRk/export?format=pdf"},o.a.createElement("span",{class:"fas fa-address-book"}))),o.a.createElement("div",{className:"icon-wrapper"},o.a.createElement("a",{title:"Designed by [https://fontawesome.com/icons/file-download?style=solid] from www.fontawesome.com",href:"https://docs.google.com/document/d/1KHecB6J9OXhenj5G5wcEUTa9-koTEjM9zLU0ZhfdTRk/export?format=pdf"},o.a.createElement("span",{class:"fas fa-file-download"}))),o.a.createElement("div",{className:"icon-wrapper"},o.a.createElement("a",{alt:"Flowers in Chania",href:"https://www.linkedin.com/in/jan-paulo-gozum-b563a5172/"},o.a.createElement("span",{class:"fab fa-linkedin"}))),o.a.createElement("div",{className:"icon-wrapper"},o.a.createElement("a",{href:"https://github.com/paupaugoz"},o.a.createElement("span",{class:"fab fa-github-square"}))))))),o.a.createElement("main",null,o.a.createElement("div",{id:"main-container"},o.a.createElement(E,{id:"name-header"},"Hi I'm Gozum"),o.a.createElement("div",{className:"intro-text-container"},o.a.createElement("h2",{id:"first-header",className:"animated fadeInDown delay-1s black "},"I'm a ",o.a.createElement("span",{className:"red"},"front end web developer "),"based in Southern California"),o.a.createElement("h2",{id:"last-header",className:"animated fadeInDown delay-2s black "},"My goal is to",o.a.createElement("span",{className:"red"}," align technology ")," with ",o.a.createElement("span",{className:"red"},"business objectives"))))),o.a.createElement("div",{id:"footer"},o.a.createElement("div",{class:"arrow-container"},o.a.createElement("a",{href:"#projects"},o.a.createElement("div",{className:"animated fadeIn arrow"})))))}}]),a}(n.Component),v=(n.Component,function(e){function a(){return Object(l.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(b,null),o.a.createElement("aboutMe",null),o.a.createElement(w,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,1,2]]]);
//# sourceMappingURL=main.44c7d0cd.chunk.js.map