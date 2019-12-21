/*!
 * PieChart
 * @version: 0.9.5
 * @author: Micheal Wayne(michealwayne@163.com)
 * @time: 2018~2019
 */
!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var r in n)("object"==typeof exports?exports:t)[r]=n[r]}}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=15)}([function(t,e,n){"use strict";function r(t){return Object.prototype.toString.call(t).replace(/\[object\s|\]/g,"")}function o(t){return"Object"===r(t)}function i(t,e){for(var n=0,r=t.length;n<r;n++)e(t[n],n)}e.__esModule=!0,e.type=r,e.isArray=function(t){return"Array"===r(t)},e.isString=function(t){return"String"===r(t)},e.isObject=o,e.isFunction=function(t){return"Function"===r(t)},e.each=i,e.cloneObjDeep=function t(e,n){if(!o(e)||!o(n))return!1;for(var r in e)!o(n[r])||a[r]?n[r]=n[r]||e[r]:t(e[r],n[r]);return n},e.isEmptyObj=a,e.getColorRgbArr=c,e.getColorRgba=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return"rgba("+c(t).join(",")+","+e+")"},e.Lighting=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return c(t).map(function(t){return(t+=t*e)>255?255:t})},e.throwError=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";throw new Error("Error!"+t+".(FundCharts-"+e+" "+n+")")},e.min=function(t){return t.reduce(function(t,e){return Math.min(t,e)})},e.max=function(t){return t.reduce(function(t,e){return Math.max(t,e)})};e.cloneArray=function(t,e){return i(t,function(t,n){e[n]=t}),e};function a(t){if(!t)return!1;for(var e in t)return!1;return!0}function c(t){var e=t.toLowerCase();if(e&&/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(e)){if(4===e.length){for(var n="#",r=1;r<4;r++)n+=e.slice(r,r+1).concat(e.slice(r,r+1));e=n}for(var o=[],i=1;i<7;i+=2)o.push(parseInt("0x"+e.slice(i,i+2)));return o}return e}},function(t,e,n){"use strict";e.__esModule=!0,e.drawLine=function(t,e,n,r,o){t.beginPath(),t.moveTo(e,n),t.lineTo(r,o),t.closePath(),t.stroke()},e.drawDashLine=function(t,e,n,r,o,i){i=i||5;var a=(c=r-e,u=o-n,~~(Math.sqrt(Math.pow(c,2)+Math.pow(u,2))/i));var c,u;t.beginPath();for(var s=0;s<a;s++)t[1&s?"lineTo":"moveTo"](e+(r-e)/a*s,n+(o-n)/a*s);t.closePath(),t.stroke()},e.drawPoint=function(t,e,n,r,o,i,a){t.beginPath(),t.strokeStyle=o||"#fff",t.lineWidth=void 0!==a?a:1,t.arc(e,n,i,0,2*Math.PI,!0),t.closePath(),t.fillStyle=r,t.fill(),a&&t.stroke()},e.clearArc=function(t,e,n,r){var o=.1;!function e(n,r,i){var a=i-o,c=Math.sqrt(i*i-a*a);var u=n-a,s=r-c;var l=2*a,f=2*c;o<=i&&(t.clearRect(u,s,l,f),o+=.1,e(n,r,i))}(e,n,r)},e.retinaScale=function(t,e){var n=window.devicePixelRatio||1;if(1===n)return!1;var r=t.width,o=t.height;return t.width=r*n,t.height=o*n,e.scale(n,n),t.style.width=r+"px",t.style.height=o+"px",n},e.setContext=function(t,e,n){(!t||e?t.$el:t.opts.Canvas||n)||(0,o.throwError)("no chart object to set context","setContext");var i=t.opts,a=void 0,c=i.width||500,u=i.height||500;if(e){var s=t.$el;if(s.style.webkitUserSelect="none",s.style.userSelect="none",(0,o.isFunction)(s.getContext))a=s;else{(a=document.createElement("canvas")).id=i.id+"Canvas";var l=i.width||(0,r.getStyle)(s,"width"),f=i.height||(0,r.getStyle)(s,"height");a.width=l,a.height=f,s.appendChild(a)}}else if(n){wx&&(0,o.isFunction)(wx.createCanvasContext)||(0,o.throwError)("no param {Object} Ctx","setContext");var h=wx.createCanvasContext(i.id);a={info:"Weapp native canvas",width:c,height:u,getContext:function(){return h},draw:function(e){if(e)return h.draw(!0);wx.drawCanvas({canvasId:i.id,actions:t.ctx.getActions()})}}}else{var d=i.Canvas;i.Canvas||(0,o.throwError)("no param {Object} Canvas","setContext"),a=d.createCanvas(c,u),i.handleOut&&i.handleOut(a)}t.canvas=a,t.ctx=a.getContext("2d"),t._chart={width:a.width,height:a.height}};var r=n(3),o=n(0)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),o=n(1),i=n(4),a=i.default.inBrowser,c=i.default.inWeapp,u=function(){function t(t){this.$el=null,this.drawer=null,this.canvas=null,this.ctx=null;var e=t.id,n=t.colors,o=t.data,c=t.datas;e&&(o||c)||r.throwError("no container id or datas in options","setConfig"),a&&(this.$el=document.getElementById(e)),n&&(t.colors=n.concat(i.default.colors)),t=r.cloneObjDeep(i.default,t),o&&(t.datas=[o],delete t.data),this.opts=t}return t.prototype.update=function(t){t&&(t.data&&(t.datas=[t.data],delete t.data),this.opts=r.cloneObjDeep(this.opts,t)),this.drawer.draw(!0,this.opts.noAnimation)},t.prototype._init=function(){o.setContext(this,a,c),a&&(this.pixelRatio=o.retinaScale(this.canvas,this.ctx))},t}();e.default=u},function(t,e,n){"use strict";e.__esModule=!0,e.getStyle=function(t,e){var n=t.currentStyle?t.currentStyle[e]:document.defaultView.getComputedStyle(t,null).getPropertyValue(e),r=n&&n.match(/^(\d+)(\.\d+)?px$/);return r?+r[1]:void 0}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r="undefined"!=typeof wx&&void 0!==wx.getSystemInfo,o=r?2:1,i={inBrowser:"undefined"!=typeof window&&!r,inWeapp:r,backgroundColor:"rgba(0,0,0,0)",colors:["#fe5d4e","#43c2f7","#707ad9","#ffa61b","#64d290","#cf27bd"],duration:600,events:["touchstart","touchmove"],hoverLineColor:"#999",hoverHighlight:1,grid:{yTickLength:5},bar:{margin:60/o},chartTop:0,chartLeft:50/o,chartRight:15,dash:{color:"#e2e2e2",length:3/o},font:{color:"#666",fontFamily:"Arial",fontSize:{x:"11px",y:"10px"}}};e.default=i},function(t,e,n){"use strict";e.__esModule=!0,e.Animation=function(t){var e=23,n=t.duration||600,r=t.onProcess||function(){},a=t.onAnimationFinish||function(){},c=o(),u=null;c(function t(o){if(null===o)return r(1),a(),!1;null===u&&(u=o);if(o-u<n){var s=(o-u)/n;s=i(s),r(s),c(t,e)}else r(1),a()},e)};var r=void 0;"undefined"!=typeof window&&(r=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame);var o=function(){return void 0!==r?(o=function(){return r},r):function(t,e){setTimeout(function(){var e=+new Date;t(e)},e)}},i=function(t){return(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getRange=function(t){return t?t>2?4*Math.ceil(t/4):1.2*t:1},e.getAngle=function(t,e,n,r){var o=Math.atan2(n-t,e-r);return o<0?2*Math.PI+o:o},e.getDistance=function(t,e,n,r){return Math.sqrt(Math.pow(t-n,2)+Math.pow(e-r,2))}},,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(5),o=function(){function t(t){this.chartjs=t}return t.prototype.clearCtn=function(){var t=this.chartjs.ctx,e=this.chartjs.opts.backgroundColor;t.beginPath(),t[~e.replace(" ","").indexOf(",0)")?"clearRect":"rect"](0,0,1e5,1e5),t.fillStyle=e,t.fill(),t.closePath()},t.prototype.drawHover=function(t,e){},t.prototype.setEvents=function(){var t=this,e=this.chartjs.canvas,n=this.chartjs.opts,r=n.events;if(!r||!n.inBrowser)return!1;r.forEach(function(n){e.addEventListener(n,function(e){var r=~n.indexOf("touch")?e.touches[0]:e,o=r.clientX,i=r.pageY-r.target.offsetTop;return t.drawHover(o,i),!1},!1)})},t.prototype.setAnimation=function(t){var e=this.chartjs.opts;r.Animation({duration:e.duration,onProcess:t,onAnimationFinish:e.onFinish})},t}();e.default=o},,,,,,,function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),a=n(16),c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.init=function(){this._init(),this.drawer=new a.default(this),this.drawer.init()},e}(i.default);e.default=c},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__assign||function(){return(i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),c=n(6),u=n(1),s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.origin=null,e.centerArr=null,e}return o(e,t),e.prototype.drawPie=function(t,e,n){void 0===t&&(t=.6),void 0===e&&(e=1),t=t>.9?.9:t;var r=this.chartjs,o=r.opts,c=o.origin||{},s=o.widthRates,l=r.drawer,f=o.backgroundColor,h=o.colors,d=o.datas,p=r.oldDataset;this.clearCtn();var v=r.ctx,w=r._chart,g=w.width,y=w.height,b=o.radius||y/2-20,x=b*t,_=i({x:g/2,y:b+20},c),m=_.x,j=_.y;this.origin=_,l.radius=b,l.radiusWhite=x;var P=o.startAngle||-.5*Math.PI,O=P;v.save(),v.lineWidth=o.lineWidth,v.strokeStyle=f;var C=[];a.each(d,function(t,r){var i=n===r;O+=2*Math.PI*(1!==e&&p?(d[r]-p[r])*e+p[r]:d[r]*e),i&&o.hoverRate&&(v.fillStyle=i?a.getColorRgba(h[r],.6):h[r],v.beginPath(),v.moveTo(m,j),v.arc(m,j,b*(s&&s[r]||1)*o.hoverRate,P,O,!1),v.closePath(),v.fill()),v.fillStyle=i?a.getColorRgba(h[r],.8):h[r],v.beginPath(),v.moveTo(m,j),v.arc(m,j,b*(s&&s[r]||1),P,O,!1),v.closePath(),v.fill(),o.lineWidth&&v.stroke(),1===e&&C.push((O+P)/2),P=O}),~f.indexOf(",0)")?u.clearArc(v,m,j,x):u.drawPoint(v,m,j,f,"",x,0),1===e&&(this.centerArr=C,r.oldDataset=null,r.dataset=d)},e.prototype.draw=function(t,e){var n=this,r=this.chartjs,o=r.opts;t&&(r.oldDataset=a.cloneArray([],r.dataset)),e||!o.inBrowser&&!o.inWeapp?(this.drawPie(o.annularRate,1),o.onFinish&&o.onFinish()):this.setAnimation(function(t){n.drawPie(o.annularRate,t),o.onAnimation&&o.onAnimation.call(n,t),o.inWeapp&&n.chartjs.ctx.draw(!0)}),o.inWeapp&&this.chartjs.canvas.draw()},e.prototype.drawHover=function(t,e){var n=this.chartjs,r=n.opts,o=r.datas,i=this.origin;if(n.oldDataset)return!1;for(var a,u=c.getAngle(i.x,i.y,t,e),s=u/(2*Math.PI),l=0,f=0,h=o.length;f<h;f++)if(s<(l+=o[f])){a=f;break}return!(void 0===a||c.getDistance(t,e,i.x,i.y)>n.drawer.radius+5)&&(this.drawPie(r.annularRate,1,a),r.inWeapp&&n.canvas.draw(!0),r.hover&&r.hover(a,[o[a||0]],u,t,e),a)},e.prototype.init=function(){var t=this.chartjs.opts;this.draw(!1,t.noAnimation),this.setEvents(),t.inWeapp&&this.chartjs.canvas.draw()},e}(n(8).default);e.default=s}])});