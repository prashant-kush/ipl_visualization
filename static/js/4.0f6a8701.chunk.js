(this["webpackJsonpatlan-task"]=this["webpackJsonpatlan-task"]||[]).push([[4,5],{21:function(t,a,e){t.exports={chart_space:"chartSpace_chart_space__3zTQr"}},22:function(t,a,e){"use strict";var n=e(0),r=e.n(n),o=e(26),c=e.n(o),s=e(23),i=e.n(s);a.a=function(t){var a=t.data,e=t.options,o=t.type,s=t.width,l=Object(n.useRef)();return Object(n.useEffect)((function(){var t=new c.a(l.current,{type:o,data:a,options:e});return t.update(),function(){t.destroy()}}),[a,e,o]),r.a.createElement("div",{className:i.a.container,style:{width:s}},r.a.createElement("canvas",{ref:l,className:i.a.canvas_line_chart},r.a.createElement("p",{className:i.a.fallback_p},"Hello Fallback World")))}},23:function(t,a,e){t.exports={container:"charts_container__2oi8D",canvas_line_chart:"charts_canvas_line_chart__1fLfM"}},25:function(t,a,e){"use strict";e.r(a),e.d(a,"buildOptions",(function(){return f}));var n=e(24),r=e(20),o=e(2),c=e(0),s=e.n(c),i=e(21),l=e.n(i),u=e(22),d=e(5),f=function(t,a){var e=parseFloat(getComputedStyle(document.querySelector("body"))["font-size"]);return{scales:a?{yAxes:[{ticks:{fontSize:.8*e}}],xAxes:[{ticks:{fontSize:.8*e}}]}:null,title:{display:!0,text:t,fontSize:e},legend:{display:!0,labels:{fontSize:.8*e}},responsive:!0,maintainAspectRatio:!0,animation:{duration:600}}};a.default=function(){var t=Object(d.b)(),a=Object(c.useState)([]),e=Object(o.a)(a,2),i=e[0],b=e[1],p=Object(c.useState)([]),m=Object(o.a)(p,2),h=m[0],O=m[1];return Object(c.useEffect)((function(){if(t.isDataLoaded){var a=Object(r.a)(new Set(t.data.map((function(t){return t.season}))));a.sort((function(t,a){return Number(t)<Number(a)?-1:1})),b(a);var e=Object(r.a)(new Set(t.data.map((function(t){return t.city}))));O(e)}}),[t.data,t.isDataLoaded]),s.a.createElement("div",{className:l.a.chart_space},s.a.createElement(u.a,{type:"line",data:{labels:i,datasets:[{data:i.map((function(a){var e=0;return t.data.forEach((function(n){n.season!==a||n.team1!==t.team&&n.team2!==t.team||e++})),e})),label:"Matches played",borderColor:"#2E5BFF",fill:!1},{data:i.map((function(a){var e=0;return t.data.forEach((function(n){n.season===a&&n.winner===t.team&&e++})),e})),label:"Matches won",borderColor:"#8C54FF",fill:!1}]},options:f("Matches played v/s won per season",!0)}),s.a.createElement(u.a,{type:"bar",data:{labels:i,datasets:[{data:i.map((function(a){var e=0;return t.data.forEach((function(n){n.season!==a||n.team1!==t.team&&n.team2!==t.team||n.toss_winner===t.team||e++})),e})),label:"win",backgroundColor:"#8C54FF",fill:!1},{data:i.map((function(a){var e=0;return t.data.forEach((function(n){n.season===a&&n.toss_winner===t.team&&e++})),e})),label:"loss",backgroundColor:"#2E5BFF",fill:!1}]},options:f("Toss result per season",!0)}),s.a.createElement(u.a,{type:"doughnut",data:{labels:["Fielding","Batting"],datasets:[{data:[t.data.filter((function(a){return a.toss_winner===t.team&&"field"===a.toss_decision})).length,t.data.filter((function(a){return a.toss_winner===t.team&&"bat"===a.toss_decision})).length],label:"matches",backgroundColor:["#8C54FF","#2E5BFF"],fill:!1}]},options:Object(n.a)({},f("Toss Decision"),{cutoutPercentage:65})}),s.a.createElement(u.a,{type:"doughnut",data:{labels:["Win","loss"],datasets:[{data:[t.data.filter((function(a){return(a.team1===t.team||a.team2===t.team)&&a.winner===t.team})).length,t.data.filter((function(a){return(a.team1===t.team||a.team2===t.team)&&a.winner!==t.team})).length],label:"matches",backgroundColor:["#8C54FF","#2E5BFF"],fill:!1}]},options:Object(n.a)({},f("Win percentage"),{cutoutPercentage:65})}),s.a.createElement(u.a,{type:"line",data:{labels:h,datasets:[{data:h.map((function(a){var e=0;return t.data.forEach((function(n){n.city!==a||n.team1!==t.team&&n.team2!==t.team||e++})),e})),label:"Matches played",borderColor:"#2E5BFF",fill:!1},{data:h.map((function(a){var e=0;return t.data.forEach((function(n){n.city===a&&n.winner===t.team&&e++})),e})),label:"Matches won",borderColor:"#8C54FF",fill:!1}]},options:f("Matches played v/s won at each city",!0),width:"65rem"}))}},33:function(t,a,e){"use strict";e.r(a);var n=e(24),r=e(20),o=e(2),c=e(0),s=e.n(c),i=e(21),l=e.n(i),u=e(22),d=e(5),f=e(25),b=function(t){for(var a=[],e=0;e<t;e+=1){for(var n="0123456789ABCDEF".split(""),r="#",o=0;o<6;o+=1)r+=n[Math.floor(16*Math.random())];a.push(r)}return a},p=function(t){var a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return a?"rgba(".concat(parseInt(a[1],16),",").concat(parseInt(a[2],16),",").concat(parseInt(a[3],16),",0.3)"):null},m=b(50);a.default=function(){var t=Object(d.b)(),a=Object(c.useState)([]),e=Object(o.a)(a,2),i=e[0],b=e[1],h=Object(c.useState)([]),O=Object(o.a)(h,2),y=O[0],E=O[1],v=Object(c.useState)([]),F=Object(o.a)(v,2),j=F[0],w=F[1],g=Object(c.useState)([]),_=Object(o.a)(g,2),C=_[0],k=_[1];return Object(c.useEffect)((function(){if(t.isDataLoaded){var a=Object(r.a)(new Set(t.data.map((function(t){return t.season}))));a.sort((function(t,a){return Number(t)<Number(a)?-1:1})),b(a);var e=Object(r.a)(new Set(t.data.map((function(t){return t.city}))));E(e);var n=Object(r.a)(new Set(t.data.map((function(t){return t.team1}))));w(n);var o=Object(r.a)(new Set(t.data.map((function(t){return t.player_of_match})))).map((function(a){var e=0;return t.data.forEach((function(t){t.player_of_match===a&&e++})),{name:a,count:e}}));o.sort((function(t,a){return t.count>a.count?-1:1})),o=o.slice(0,10),k(o)}}),[t.data,t.isDataLoaded]),s.a.createElement("div",{className:l.a.chart_space},s.a.createElement(u.a,{type:"bar",data:{labels:j,datasets:[{data:j.map((function(a){var e=0;return t.data.forEach((function(t){t.team1!==a&&t.team2!==a||e++})),e})),borderColor:m,backgroundColor:m.map((function(t){return p(t)})),borderWidth:2,fill:!1}]},options:Object(n.a)({},Object(f.buildOptions)("Total matches played by each team",!0),{legend:{display:!1}}),width:"65rem"}),s.a.createElement(u.a,{type:"bar",data:{labels:C.map((function(t){return t.name})),datasets:[{data:C.map((function(t){return t.count})),borderColor:m,backgroundColor:m.map((function(t){return p(t)})),borderWidth:2,fill:!1}]},options:Object(n.a)({},Object(f.buildOptions)("Top player of the match awardees",!0),{legend:{display:!1}}),width:"65rem"}),s.a.createElement(u.a,{type:"line",data:{labels:i,datasets:[{data:i.map((function(a){var e=0;return t.data.forEach((function(t){t.season===a&&e++})),e})),label:"Matches played",borderColor:"#2E5BFF",fill:!1}]},options:Object(f.buildOptions)("Matches played per season",!0)}),s.a.createElement(u.a,{type:"bar",data:{labels:i,datasets:[{data:i.map((function(a){var e=0;return t.data.forEach((function(t){t.season===a&&"bat"===t.toss_decision&&e++})),e})),label:"bat",backgroundColor:"#8C54FF",fill:!1},{data:i.map((function(a){var e=0;return t.data.forEach((function(t){t.season===a&&"field"===t.toss_decision&&e++})),e})),label:"field",backgroundColor:"#2E5BFF",fill:!1}]},options:Object(f.buildOptions)("Toss decision per season",!0)}),s.a.createElement(u.a,{type:"doughnut",data:{labels:["Fielding","Batting"],datasets:[{data:[t.data.filter((function(t){return"field"===t.toss_decision})).length,t.data.filter((function(t){return"bat"===t.toss_decision})).length],label:"matches",backgroundColor:["#8C54FF","#2E5BFF"],fill:!1}]},options:Object(n.a)({},Object(f.buildOptions)("Toss Decision"),{cutoutPercentage:65})}),s.a.createElement(u.a,{type:"doughnut",data:{labels:["Win","loss"],datasets:[{data:[t.data.filter((function(t){var a=t.toss_winner;return t.winner===a})).length,t.data.filter((function(t){var a=t.toss_winner;return t.winner!==a})).length],label:"matches",backgroundColor:["#8C54FF","#2E5BFF"],fill:!1}]},options:Object(n.a)({},Object(f.buildOptions)("Toss winner is match winner"),{cutoutPercentage:65})}),s.a.createElement(u.a,{type:"bar",data:{labels:j,datasets:[{data:j.map((function(a){var e=0;return t.data.forEach((function(t){t.toss_winner===a&&e++})),e})),borderColor:m,backgroundColor:m.map((function(t){return p(t)})),borderWidth:2,label:"Toss won",fill:!1}]},options:Object(n.a)({},Object(f.buildOptions)("Maximum toss winner",!0),{legend:{display:!1}}),width:"65rem"}),s.a.createElement(u.a,{type:"line",data:{labels:y,datasets:[{data:y.map((function(a){var e=0;return t.data.forEach((function(t){t.city===a&&e++})),e})),label:"Matches played",borderColor:"#2E5BFF",fill:!1}]},options:Object(f.buildOptions)("Matches played at each city",!0),width:"65rem"}))}}}]);
//# sourceMappingURL=4.0f6a8701.chunk.js.map