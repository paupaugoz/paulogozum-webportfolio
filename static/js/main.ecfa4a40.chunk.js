(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){},16:function(e,a,t){e.exports={animatedTextContainer:"AnimatedText_animatedTextContainer__2CrTv",animatedTextContent:"AnimatedText_animatedTextContent__3VxWC",animatedTextContentClone:"AnimatedText_animatedTextContentClone__3VG4m AnimatedText_animatedTextContent__3VxWC"}},29:function(e,a,t){e.exports=t(44)},34:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(24),i=t.n(r),c=t(13),l=t(11),m=(t(34),t(20)),s=(t(35),t(36),t(37),t(38),t(2)),d=t(7),u=t(5),p=t(4),f=t(6),h=(t(15),t(28)),b=t(25),E=t(16),v=t.n(E),w=function(e){var a=e.textColor,t=e.overlayColor,r=e.children,i=Object(b.a)(e,["textColor","overlayColor","children"]),c=Object(n.useRef)(null),l={x:0,y:0},m=Object(n.useState)(l),s=Object(h.a)(m,2),d=s[0],u=s[1];return o.a.createElement("section",Object.assign({className:v.a.animatedTextContainer,style:{"--maskX":d.x,"--maskY":d.y},onMouseMove:function(e){e=e.nativeEvent;var a=c.current,t=e.offsetX/a.clientWidth*100,n=e.offsetY/a.clientHeight*100;u({x:t,y:n})},onMouseOut:function(){return u(l)},ref:c},i),o.a.createElement("h1",{style:{color:a},className:v.a.animatedTextContent},r),o.a.createElement("h1",{style:{color:t},className:v.a.animatedTextContentClone},r))},g=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("header",null,o.a.createElement("div",null,o.a.createElement("div",{id:"header"},o.a.createElement("div",{id:"links-container"},o.a.createElement("div",{className:"icon-container animated fadeIn delay-1s slower "},o.a.createElement("div",{className:"home-wrapper"},o.a.createElement(c.b,{exact:!0,to:"/",activeClassName:"active"},o.a.createElement("span",{className:"fas fa-home"}))),o.a.createElement("div",{className:"name-header-wrapper"},o.a.createElement("h3",{className:"name-header-text"},"Paulo Gozum")),this.props.children))))))}}]),a}(n.Component),y=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"flex"},o.a.createElement("div",{className:"icon-wrapper"},o.a.createElement("a",{title:"Designed by [https://fontawesome.com/icons/address-book?style=solid] from www.fontawesome.com",href:"mailto:paugozum1@gmail.com?Subject=Job%20Inquiry",target:"_top"},o.a.createElement("span",{className:"fas fa-address-book"}))),o.a.createElement("div",{className:"icon-wrapper"},o.a.createElement("a",{title:"Designed by [https://fontawesome.com/icons/file-download?style=solid] from www.fontawesome.com",href:"https://docs.google.com/document/d/1KHecB6J9OXhenj5G5wcEUTa9-koTEjM9zLU0ZhfdTRk/export?format=pdf"},o.a.createElement("span",{className:"fas fa-file-download"}))),o.a.createElement("div",{className:"icon-wrapper"},o.a.createElement("a",{alt:"Flowers in Chania",href:"https://www.linkedin.com/in/jan-paulo-gozum-b563a5172/",target:"_blank"},o.a.createElement("span",{className:"fab fa-linkedin"}))),o.a.createElement("div",{className:"icon-wrapper"},o.a.createElement("a",{href:"https://github.com/paupaugoz",target:"_blank"},o.a.createElement("span",{className:"fab fa-github-square"}))),o.a.createElement("div",{className:"icon-wrapper"},o.a.createElement("a",{href:"https://www.facebook.com/paulo.gozum.5",target:"_blank"},o.a.createElement("span",{className:"fab fa-facebook-square"}))))}}]),a}(n.Component),N=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{id:"intro-container"},o.a.createElement("div",{className:"animated fadeIn delay-1s"},o.a.createElement(g,null,o.a.createElement(y,null))),o.a.createElement("main",null,o.a.createElement("div",{id:"main-container"},o.a.createElement("div",{className:"image-container animated fadeIn slower"},o.a.createElement("img",{src:"/whitelogo.png",className:" slowest img",alt:"Logo"})),o.a.createElement("div",{className:"animated fadeIn slower hero-container"},o.a.createElement(w,{id:"name-header"},"Paulo Codes"),o.a.createElement("div",{className:"test"},o.a.createElement("h2",{id:"first-header",className:"animated fadeInDown delay-1s offwhite heading"},"I'm a ",o.a.createElement("span",{id:"span-font",className:"red"},"front end web developer "),"based in Southern California"),o.a.createElement("h2",{id:"mid-header",className:"animated fadeInDown delay-2s offwhite heading"},"Turning your dream into a reality by creating",o.a.createElement("span",{id:"span-font",className:"red"}," elegant and")),o.a.createElement("h2",{id:"last-header",className:"animated fadeInDown delay-3s red"},"functional user interfaces for web applications "))))),o.a.createElement("footer",null,o.a.createElement("div",{id:"footer"},o.a.createElement("div",{className:"arrow-container"},o.a.createElement(c.b,{exact:!0,to:"/about"},o.a.createElement("a",{href:"#about-me-container"},o.a.createElement("div",{className:"animated fadeIn arrow"})))))))}}]),a}(n.Component),x=(n.Component,t(43),function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{id:"about-me-container"},o.a.createElement(g,null),o.a.createElement("main",null,o.a.createElement("div",{id:"about-me-body-container"},o.a.createElement("div",{className:"about-me-text-image-container"},o.a.createElement("div",{className:"img-wrapper"},o.a.createElement("div",{className:"paulo-image"},o.a.createElement("img",{src:"/paulo.jpeg",className:"about-me-image",alt:"Paulo Gozum Picture"}))),o.a.createElement("div",{className:"about-me-text-container"},o.a.createElement("div",{className:"about-me-text-wrapper"},o.a.createElement("h1",{className:"about-me-heading-text"},"Hi, I'm Paulo Gozum. Part-time Computer Geek, Part-time Judoka")),o.a.createElement("div",{className:"about-me-text-wrapper"},o.a.createElement("h2",{className:"about-me-text"},"I'm an aspiring Front-end Developer that recently moved to Los Angeles. I am currently doing freelance work, and I am actively looking for a Front-end Developer opportunity. I am passionate about technology, continuously research on new technologies, and go back to my previous projects to see how I can improve them. I create to make change. Outside of technology, I am into fitness, and I do Judo. I believe that living a healthy lifestyle, incorporating discipline into your lifestyle helps you excel, and live a happier life.  I go beyond my comfort zone to challenge myself.")))),o.a.createElement("div",{className:"why-work-with-me-container"},o.a.createElement("div",{className:"about-me-text-wrapper"},o.a.createElement("h1",{className:"about-me-heading-text"},"Why Work with Me?")),o.a.createElement("div",{className:"about-me-text-wrapper"},o.a.createElement("h2",{className:"about-me-text"},"As a Management Information Systems graduate with a passion for building user interfaces, I seek to bridge the gap between Management and Information Technology. I believe that IT is meant to align with business objectives in order to support a firm's goals and strategies. This is why technology is meant to enable organizations through the use of Information Technology. As a Front-end developer, I strive to create intuitive and functional web applications that promotes a company's business objectives in order to maximize the company's growth."))))))}}]),a}(n.Component)),j=function(){var e=Object(n.useContext)(l.d).location,a=Object(m.b)(e,function(e){return e.pathname},{from:{opacity:0,transform:"translate3d(0, -100vh, 0)"},enter:{opacity:1,transform:"translate3d(0,0vh, 0)"},leave:{opacity:0,transform:"translate3d{0,100vh, 0"}});return o.a.createElement("div",{className:"App"},a.map(function(e){var a=e.item,t=e.props,n=e.key;return o.a.createElement(m.a.div,{key:n,style:t},o.a.createElement(l.c,{location:a},o.a.createElement(l.a,{exact:!0,path:"/",component:N}),o.a.createElement(l.a,{path:"/about",component:x})))}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(c.a,{basename:"/paulogozum-webportfolio"},o.a.createElement(l.a,{path:"/",component:j})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[29,1,2]]]);
//# sourceMappingURL=main.ecfa4a40.chunk.js.map