(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{187:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),o=a.n(c),s=(a(73),a(33),a(19)),l=a(7),i=a(67),d={confirmed:0,deaths:0,recovered:0,date:""},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT":return Object(i.a)({},e,{confirmed:t.data.Confirmed,deaths:t.data.Deaths,recovered:t.data.Recovered,date:t.data.Date});default:return e}},u=Object(l.b)({infectedPage:m}),p=Object(l.c)(u),h=a(60),v=a(61),f=a(65),E=a(62),g=a(66),_=a(3),b=a.n(_),N=(a(78),a(63)),w=function(e){var t={labels:["Confirmed","Deaths","Recovered"],datasets:[{label:"Confirmed Statistic",data:[e.confirmed,e.deaths,e.recovered],backgroundColor:["rgba(225, 99, 132, 0.6)","rgba(33, 33, 33, 0.6)","rgba(76, 175, 80, 0.6)"]}]};return r.a.createElement(N.a,{data:t,width:100,height:400,options:{maintainAspectRatio:!1}})},O=function(e){return r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:b.a.date},r.a.createElement("h4",null,e.date)),r.a.createElement("div",{className:b.a.logo},r.a.createElement("span",null,"B"),r.a.createElement("span",null,"E"),r.a.createElement("span",null,"L"),r.a.createElement("span",null,"A"),r.a.createElement("span",null,"R"),r.a.createElement("span",null,"U"),r.a.createElement("span",null,"S")),r.a.createElement("div",{className:b.a.covid},r.a.createElement("span",null,"COVID-19")),r.a.createElement("div",{className:"chart"},r.a.createElement(w,{confirmed:e.confirmed,deaths:e.deaths,recovered:e.recovered})),r.a.createElement("div",{className:b.a.statistic},r.a.createElement("div",{className:b.a.stat},r.a.createElement("div",{className:b.a.statBar},r.a.createElement("span",null,"\u0417\u0430\u0440\u0430\u0436\u0435\u043d\u043e: "),r.a.createElement("span",null,e.confirmed)),r.a.createElement("div",{className:b.a.statBar},r.a.createElement("span",null,"\u0412\u044b\u0437\u0434\u043e\u0440\u043e\u0432\u0435\u043b\u043e: "),r.a.createElement("span",null,e.recovered)),r.a.createElement("div",{className:b.a.statBar},r.a.createElement("span",null,"\u0421\u043c\u0435\u0440\u0442\u0435\u0439: "),r.a.createElement("span",null,e.deaths))),r.a.createElement("div",{className:b.a.picture}," "))))},j=a(170).default,B=function(e){function t(){return Object(h.a)(this,t),Object(f.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){var e=this;j.get("https://api.covid19api.com/live/country/belarus/status/confirmed").then((function(t){var a=t.data[t.data.length-1];console.log(a),e.props.init(a)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return r.a.createElement(O,{confirmed:this.props.confirmed,deaths:this.props.deaths,recovered:this.props.recovered,date:this.props.date})}}]),t}(r.a.Component),y=Object(s.b)((function(e){return{confirmed:e.infectedPage.confirmed,deaths:e.infectedPage.deaths,recovered:e.infectedPage.recovered,date:e.infectedPage.date}}),(function(e){return{init:function(t){e(function(e){return{type:"INIT",data:e}}(t))}}}))(B),k=function(){return r.a.createElement(s.a,{store:p},r.a.createElement("div",{className:"App"},r.a.createElement(y,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},3:function(e,t,a){e.exports={date:"home_date__23SoN",logo:"home_logo__3XYsB",covid:"home_covid__3pTwE",statistic:"home_statistic__3TDtG",picture:"home_picture__3Oag6",stat:"home_stat__3R5uK",statBar:"home_statBar__10Wg2"}},33:function(e,t,a){},68:function(e,t,a){e.exports=a(187)},73:function(e,t,a){}},[[68,1,2]]]);
//# sourceMappingURL=main.6080b85e.chunk.js.map