(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{20:function(e,t,n){e.exports=n(32)},29:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(4),c=n.n(a),i=n(8),s=n(3),l=n(17),u=n(18),h=(n(29),n(5)),b=n(6),d=n(9),p=n(7),m=n(10),E=function(e){var t=e.name,n=e.email,r=e.id;return o.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},o.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?size=200x200")}),o.a.createElement("div",null,o.a.createElement("h2",null,t),o.a.createElement("p",null,n)))},f=function(e){var t=e.robots;return o.a.createElement("div",null,t.map((function(e){return o.a.createElement(E,{key:e.id,id:e.id,name:e.name,email:e.email})})))},O=function(e){var t=e.searchChange;return o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robots",onChange:t}))},g=function(e){return o.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"calc(100vh - 12rem)"}},e.children)},v=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(d.a)(this,Object(p.a)(t).call(this))).state={hasError:!1},e}return Object(m.a)(t,e),Object(b.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",null,"Ooooops! Something went wrong..."):this.props.children}}]),t}(o.a.Component),y=(n(30),function(e){function t(){return Object(h.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.robots,n=e.isPending,r=e.searchField,a=e.onSearchChange,c=t.filter((function(e){return r.toLowerCase().split(" ").every((function(t){return e.name.toLowerCase().includes(t)}))}));return n?o.a.createElement("h1",null,"Loading"):o.a.createElement("div",{className:"tc"},o.a.createElement("h1",{className:"f1"},"RoboFriends"),o.a.createElement(O,{searchChange:a}),o.a.createElement(g,null,o.a.createElement(v,null,o.a.createElement(f,{robots:c}))))}}]),t}(o.a.Component)),j=Object(i.b)((function(e){return{searchField:e.searchRobots.searchField,isPending:e.requestRobots.isPending,robots:e.requestRobots.robots,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCHFIELD",payload:t.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))}}}))(y);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(31);var S=n(19);function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(n,!0).forEach((function(t){Object(S.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C={searchField:""},P={isPending:!1,robots:[],error:[]},_=Object(l.createLogger)(),D=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCHFIELD":return w({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return w({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return w({},e,{isPending:!1,robots:t.payload});case"REQUEST_ROBOTS_FAILED":return w({},e,{isPending:!1,error:t.payload});default:return e}}}),T=Object(s.d)(D,Object(s.a)(u.a,_));c.a.render(o.a.createElement(v,null,o.a.createElement(i.a,{store:T},o.a.createElement(j,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[20,1,2]]]);
//# sourceMappingURL=main.000bbbbc.chunk.js.map