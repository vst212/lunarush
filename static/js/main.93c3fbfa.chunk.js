(this["webpackJsonpbsc-dapp-example"]=this["webpackJsonpbsc-dapp-example"]||[]).push([[0],{110:function(e,n){},113:function(e,n){},124:function(e,n,t){},125:function(e){e.exports=JSON.parse("{}")},131:function(e,n,t){},133:function(e,n,t){"use strict";t.r(n);var s=t(1),r=t.n(s),a=t(31),c=t.n(a),i=(t(99),t(15)),o=t(91),d=(t.p,t(124),t(125),t(16)),l=t(2),u=t.n(l),j=t(144),h=t(139),b=t(145),x=t(146),p="http://localhost:6324d/00b6325388655acd841aa94a8121142f";function f(e){return fetch(p+e)}var m=t(3);function w(){return(w=Object(d.a)(u.a.mark((function e(){var n,t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("/action?action=AutoClaim");case 2:if(200!=(n=e.sent).status){e.next=8;break}return e.next=6,n.json();case 6:"AutoClaim"==(t=e.sent).message&&document.getElementById("AutoClaim")&&(document.getElementById("AutoClaim").checked=t.data);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var O=function(e){var n=e.isBrowserExtensionInstalled?"\u5df2\u5b89\u88c5\u94b1\u5305":"\u672a\u5b89\u88c5\u94b1\u5305",t=e.isBrowserExtensionEnabled?"\u5df2\u8fde\u63a5":"\u6fc0\u6d3b\u94b1\u5305";return Object(m.jsx)(j.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:Object(m.jsxs)(h.a,{fluid:!0,children:[Object(m.jsx)(j.a.Brand,{href:"#home",children:"\u98de\u8239-\u8fdc\u7a0b\u6258\u7ba1"}),Object(m.jsx)(j.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(m.jsxs)(j.a.Collapse,{id:"responsive-navbar-nav",children:[Object(m.jsxs)(b.a,{className:"me-auto",children:[Object(m.jsx)(b.a.Link,{href:"https://www.spacecrypto.io/",target:"_blank",children:"\u98de\u8239\u5b98\u7f51"}),Object(m.jsx)(b.a.Link,{href:"https://play.spacecrypto.io/",target:"_blank",children:"\u5f00\u59cb\u6e38\u620f"}),Object(m.jsx)(b.a.Link,{href:"https://poocoin.app/tokens/0x0ecaf010fc192e2d5cbeb4dfb1fee20fbd733aa1",target:"_blank",children:"SPG\u4ef7\u683c\u56fe\u8868"}),Object(m.jsx)(b.a.Link,{href:"https://poocoin.app/tokens/0x74da4412b2c70644929479f4d169325e9ce35ddb",target:"_blank",children:"SPE\u4ef7\u683c\u56fe\u8868"})]}),Object(m.jsxs)(b.a,{children:[Object(m.jsx)(b.a.Link,{onClick:function(){return window.refreshLunaSessions()},children:"\u5237\u65b0\u5217\u8868"}),Object(m.jsx)(b.a.Link,{href:"#AutoClaim",children:Object(m.jsx)(x.a,{children:Object(m.jsx)(x.a.Check,{type:"switch",id:"AutoClaim",label:"\u81ea\u52a8\u63d0\u73b0",onClick:function(){return function(){return w.apply(this,arguments)}()}})})}),Object(m.jsx)(b.a.Link,{as:"p",children:n}),e.isBrowserExtensionInstalled&&Object(m.jsx)(b.a.Link,{onClick:function(){return e.enableBrowserExtension()},disabled:e.isBrowserExtensionEnabled,eventKey:2,children:t})]})]})]})})},g=t(5),k=t(24),S=t(143),v=t(92),C=t(147),L=t(90),y=t(140),E=t(141),A=t(142);t(131);function B(e,n,t){var s=n.substr(0,4)+"..."+n.substr(38,4);return Object(m.jsx)(S.a,{rootClose:!0,trigger:"click",placement:"right",overlay:Object(m.jsxs)(v.a,{id:"popover-positioned-".concat(n),children:[Object(m.jsx)(v.a.Header,{as:"h6",children:n}),Object(m.jsx)(v.a.Body,{children:Object(m.jsxs)(C.a,{className:"mb-3",children:[Object(m.jsx)(L.a,{placeholder:"\u4fee\u6539\u5907\u6ce8","aria-label":"\u4fee\u6539\u5907\u6ce8","aria-describedby":"basic-addon2",id:"mark-"+n}),Object(m.jsx)(y.a,{variant:"outline-secondary",onClick:function(){return function(e,n,t){return M.apply(this,arguments)}(e,n,document.getElementById("mark-"+n).value)},children:"\u4fee\u6539"})]})})]}),children:Object(m.jsxs)(y.a,{variant:"outline-secondary",children:[0!=t.length&&Object(m.jsx)("h4",{className:"text-dark",children:t}),Object(m.jsx)("small",{children:s})]})},n)}function N(e){if(null!=e){var n=0;for(var t in e)n+=e[t];return Object(m.jsx)(m.Fragment,{children:n})}return Object(m.jsx)(m.Fragment,{children:"0"})}function R(e){return null!=e?Object(m.jsxs)("div",{children:[e.Common>0&&Object(m.jsxs)("small",{className:"common",children:["C:",e.Common]}),e.Rare>0&&Object(m.jsxs)("small",{className:"rare",children:["R:",e.Rare]}),e.SuperRare>0&&Object(m.jsxs)("small",{className:"elite",children:["SR:",e.SuperRare]}),e.Epic>0&&Object(m.jsxs)("small",{className:"epic",children:["SSR:",e.Epic]}),e.Legend>0&&Object(m.jsxs)("small",{className:"legendary",children:["L:",e.Legend]}),e.Mythical>0&&Object(m.jsxs)("small",{className:"mythical",children:["SL:",e.Mythical]})]}):Object(m.jsx)(m.Fragment,{children:"-"})}function I(){return(I=Object(d.a)(u.a.mark((function e(n,t){var s,r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.dapp.currentAccount.address.toLowerCase()==t.toLowerCase()){e.next=3;break}return console.log("\u8bf7\u5148\u5207\u6362\u94b1\u5305\u5730\u5740\u5230",t),e.abrupt("return");case 3:return console.log(n,t),e.next=6,f("/get_message?addr="+t);case 6:if(200!=(s=e.sent).status){e.next=23;break}return e.next=10,s.json();case 10:if(0!=(r=e.sent).code||!r.message){e.next=23;break}return e.next=14,window.dapp.browserExtension.ethereum.request({method:"personal_sign",params:[r.message,window.dapp.currentAccount.address]});case 14:return a=e.sent,e.next=17,f("/sign_login?addr="+t+"&sign="+a);case 17:if(200!=(s=e.sent).status){e.next=23;break}return e.next=21,s.json();case 21:0==e.sent.code&&(window.Sessions[n].isLogin=!0,window.Sessions[n].isRun=!0,window.setSessions(Object(k.a)(window.Sessions)));case 23:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(){return(_=Object(d.a)(u.a.mark((function e(n,t){var s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("StartScript",n,t),e.next=3,f("/action?action=start&addr="+t);case 3:if(200!=(s=e.sent).status){e.next=9;break}return e.next=7,s.json();case 7:0==e.sent.code&&(window.Sessions[n].isRun=!0,window.setSessions(Object(k.a)(window.Sessions)));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(){return(F=Object(d.a)(u.a.mark((function e(n,t){var s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("StopScript",n,t),e.next=3,f("/action?action=stop&addr="+t);case 3:if(200!=(s=e.sent).status){e.next=9;break}return e.next=7,s.json();case 7:0==e.sent.code&&(window.Sessions[n].isLogin=!1,window.Sessions[n].isRun=!1,window.setSessions(Object(k.a)(window.Sessions)));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(){return(M=Object(d.a)(u.a.mark((function e(n,t,s){var r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("ChangeMark",n,t),e.next=3,f("/action?action=mark&addr="+t+"&mark="+encodeURIComponent(s));case 3:if(200!=(r=e.sent).status){e.next=9;break}return e.next=7,r.json();case 7:"mark"==(a=e.sent).message&&(window.LunaSessions.LunaSessions[n].Mark=a.data,window.setLunaSessions(Object(g.a)({},window.LunaSessions)));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e,n,t,s){if(t)return s?Object(m.jsx)(E.a,{size:"sm",children:Object(m.jsx)(y.a,{variant:"warning",onClick:function(){return function(e,n){return F.apply(this,arguments)}(e,n)},children:"\u505c\u6b62\u811a\u672c"})}):Object(m.jsx)(E.a,{size:"sm",children:Object(m.jsx)(y.a,{variant:"info",onClick:function(){return function(e,n){return _.apply(this,arguments)}(e,n)},children:"\u542f\u52a8\u811a\u672c"})});var r=!window.dapp.isBrowserExtensionEnabled||window.dapp.currentAccount&&window.dapp.currentAccount.address.toLowerCase()!=n.toLowerCase();return Object(m.jsx)(y.a,{size:"sm",onClick:function(){return function(e,n){return I.apply(this,arguments)}(e,n)},disabled:r,children:r?"\u8fde\u63a5\u94b1\u5305":"\u6388\u6743\u767b\u5f55"})}var z=function(){var e=r.a.useState([]),n=Object(i.a)(e,2),t=n[0],s=n[1];return window.Sessions=t,window.setSessions=s,window.refreshLunaSessions=Object(d.a)(u.a.mark((function e(){var n,t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("/current_info");case 2:if(200!=(n=e.sent).status){e.next=10;break}return e.next=6,n.json();case 6:t=e.sent,document.getElementById("AutoClaim")&&(document.getElementById("AutoClaim").checked=t.AutoClaim),s(t),console.log(t);case 10:case"end":return e.stop()}}),e)}))),Object(m.jsx)(h.a,{fluid:!0,children:Object(m.jsxs)(A.a,{striped:!0,bordered:!0,variant:"light",size:"sm",responsive:"sm",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"#"}),Object(m.jsx)("th",{children:"\u94b1\u5305\u4fe1\u606f"}),Object(m.jsx)("th",{children:"\u82f1\u96c4\u7edf\u8ba1"}),Object(m.jsx)("th",{children:"\u6e38\u620f\u4f59\u989d"}),Object(m.jsx)("th",{children:"\u82f1\u96c4\u603b\u6570"}),Object(m.jsx)("th",{children:"\u5f53\u524d\u5173\u5361"}),Object(m.jsx)("th",{children:"\u64cd\u4f5c"}),Object(m.jsx)("th",{children:"\u6700\u540e\u9519\u8bef"})]})}),Object(m.jsx)("tbody",{children:t&&t.map((function(e,n){return Object(m.jsxs)("tr",{className:"center_td",children:[Object(m.jsx)("td",{children:n+1}),Object(m.jsx)("td",{children:B(n,e.WalletAddress,"")}),Object(m.jsx)("td",{children:R(e.Session&&e.Session.HeroInfos||{})}),Object(m.jsx)("td",{children:(t=e.Session&&e.Session.Balance||0,Object(m.jsx)(h.a,{children:Object(m.jsx)("h4",{children:t.toFixed(2)})}))}),Object(m.jsx)("td",{children:N(e.Session&&e.Session.HeroInfos||{})}),Object(m.jsx)("td",{children:e.Session&&e.Session.CurrentBossLevel||0}),Object(m.jsx)("td",{children:P(n,e.WalletAddress,e.isLogin,e.isRun)}),Object(m.jsx)("td",{children:Object(m.jsx)("p",{className:"text-truncate",children:e.Session&&e.Session.LastLog})})]},n);var t}))})]})})};function T(){var e=r.a.useMemo((function(){return new o.a}),[]);window.dapp=e;var n=r.a.useState(e.isBrowserExtensionEnabled),t=Object(i.a)(n,2),s=(t[0],t[1]),a=r.a.useState(e.currentAddress),c=Object(i.a)(a,2),d=(c[0],c[1]);return r.a.useEffect((function(){return e.onEnabled((function(e){s(!0),d(e)}))}),[]),r.a.useEffect((function(){return e.onAccountChanged((function(e){d(e)}))}),[]),Object(m.jsxs)("div",{className:"App",children:[O(e),Object(m.jsx)("header",{className:"App-header",children:Object(m.jsx)(z,{})})]})}var H=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,148)).then((function(n){var t=n.getCLS,s=n.getFID,r=n.getFCP,a=n.getLCP,c=n.getTTFB;t(e),s(e),r(e),a(e),c(e)}))},J=(t(132),new URLSearchParams(document.location.search).get("url"));J&&J.length>0&&(p=J),setTimeout((function(){c.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(T,{})}),document.getElementById("root")),window.refreshLunaSessions&&window.refreshLunaSessions()}),500),H()},99:function(e,n,t){}},[[133,1,2]]]);
//# sourceMappingURL=main.93c3fbfa.chunk.js.map