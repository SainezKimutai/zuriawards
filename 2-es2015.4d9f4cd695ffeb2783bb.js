(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{B0QU:function(t,n,i){"use strict";i.d(n,"a",(function(){return e})),i.d(n,"b",(function(){return l})),i.d(n,"c",(function(){return u}));var o=i("8Y7J"),s=i("PqYM");class l{constructor(){this.class="",this.backgroundGradient=!1,this.backgroundColor="transparent",this.backgroundGradientStopColor="transparent",this.backgroundOpacity=1,this.backgroundStroke="transparent",this.backgroundStrokeWidth=0,this.backgroundPadding=5,this.percent=0,this.radius=90,this.space=4,this.toFixed=0,this.maxPercent=1e3,this.renderOnClick=!0,this.units="%",this.unitsFontSize="10",this.unitsFontWeight="normal",this.unitsColor="#444444",this.outerStrokeGradient=!1,this.outerStrokeWidth=8,this.outerStrokeColor="#78C000",this.outerStrokeGradientStopColor="transparent",this.outerStrokeLinecap="round",this.innerStrokeColor="#C7E596",this.innerStrokeWidth=4,this.titleFormat=void 0,this.title="auto",this.titleColor="#444444",this.titleFontSize="20",this.titleFontWeight="normal",this.subtitleFormat=void 0,this.subtitle="progress",this.subtitleColor="#A9A9A9",this.subtitleFontSize="10",this.subtitleFontWeight="normal",this.imageSrc=void 0,this.imageHeight=void 0,this.imageWidth=void 0,this.animation=!0,this.animateTitle=!0,this.animateSubtitle=!1,this.animationDuration=500,this.showTitle=!0,this.showSubtitle=!0,this.showUnits=!0,this.showImage=!1,this.showBackground=!0,this.showInnerStroke=!0,this.clockwise=!0,this.responsive=!1,this.startFromZero=!0,this.showZeroOuterStroke=!0,this.lazy=!1}}let e=class{constructor(t,n,i){this.elRef=n,this.document=i,this.onClick=new o.m,this.svgElement=null,this.isInViewport=!1,this.onViewportChanged=new o.m,this._viewportChangedSubscriber=null,this.options=new l,this.defaultOptions=new l,this._lastPercent=0,this._gradientUUID=null,this.render=()=>{this.applyOptions(),this.options.lazy?(null===this.svgElement&&this.draw(this._lastPercent),this.isInViewport&&(this.options.animation&&this.options.animationDuration>0?this.animate(this._lastPercent,this.options.percent):this.draw(this.options.percent),this._lastPercent=this.options.percent)):(this.options.animation&&this.options.animationDuration>0?this.animate(this._lastPercent,this.options.percent):this.draw(this.options.percent),this._lastPercent=this.options.percent)},this.polarToCartesian=(t,n,i,o)=>{let s=o*Math.PI/180;return{x:t+Math.sin(s)*i,y:n-Math.cos(s)*i}},this.draw=t=>{let n=(t=void 0===t?this.options.percent:Math.abs(t))>100?100:t,i=2*this.options.radius+2*this.options.outerStrokeWidth;this.options.showBackground&&(i+=2*this.options.backgroundStrokeWidth+this.max(0,2*this.options.backgroundPadding));let o,s,l={x:i/2,y:i/2},e=l.x,r=l.y-this.options.radius,u=this.polarToCartesian(l.x,l.y,this.options.radius,360*(this.options.clockwise?n:100-n)/100);100===n&&(u.x=u.x+(this.options.clockwise?-.01:.01)),[o,s]=n>50?this.options.clockwise?[1,1]:[1,0]:this.options.clockwise?[0,1]:[0,0];let h=this.options.animateTitle?t:this.options.percent,a=h>this.options.maxPercent?`${this.options.maxPercent.toFixed(this.options.toFixed)}+`:h.toFixed(this.options.toFixed),c=this.options.animateSubtitle?t:this.options.percent,p={x:l.x,y:l.y,textAnchor:"middle",color:this.options.titleColor,fontSize:this.options.titleFontSize,fontWeight:this.options.titleFontWeight,texts:[],tspans:[]};if(void 0!==this.options.titleFormat&&"Function"===this.options.titleFormat.constructor.name){let t=this.options.titleFormat(h);t instanceof Array?p.texts=[...t]:p.texts.push(t.toString())}else"auto"===this.options.title?p.texts.push(a):this.options.title instanceof Array?p.texts=[...this.options.title]:p.texts.push(this.options.title.toString());let d={x:l.x,y:l.y,textAnchor:"middle",color:this.options.subtitleColor,fontSize:this.options.subtitleFontSize,fontWeight:this.options.subtitleFontWeight,texts:[],tspans:[]};if(void 0!==this.options.subtitleFormat&&"Function"===this.options.subtitleFormat.constructor.name){let t=this.options.subtitleFormat(c);t instanceof Array?d.texts=[...t]:d.texts.push(t.toString())}else this.options.subtitle instanceof Array?d.texts=[...this.options.subtitle]:d.texts.push(this.options.subtitle.toString());let g={text:`${this.options.units}`,fontSize:this.options.unitsFontSize,fontWeight:this.options.unitsFontWeight,color:this.options.unitsColor},b=0,f=1;if(this.options.showTitle&&(b+=p.texts.length),this.options.showSubtitle&&(b+=d.texts.length),this.options.showTitle)for(let v of p.texts)p.tspans.push({span:v,dy:this.getRelativeY(f,b)}),f++;if(this.options.showSubtitle)for(let v of d.texts)d.tspans.push({span:v,dy:this.getRelativeY(f,b)}),f++;null===this._gradientUUID&&(this._gradientUUID=this.uuid()),this.svg={viewBox:`0 0 ${i} ${i}`,width:this.options.responsive?"100%":i,height:this.options.responsive?"100%":i,backgroundCircle:{cx:l.x,cy:l.y,r:this.options.radius+this.options.outerStrokeWidth/2+this.options.backgroundPadding,fill:this.options.backgroundColor,fillOpacity:this.options.backgroundOpacity,stroke:this.options.backgroundStroke,strokeWidth:this.options.backgroundStrokeWidth},path:{d:`M ${e} ${r}\n        A ${this.options.radius} ${this.options.radius} 0 ${o} ${s} ${u.x} ${u.y}`,stroke:this.options.outerStrokeColor,strokeWidth:this.options.outerStrokeWidth,strokeLinecap:this.options.outerStrokeLinecap,fill:"none"},circle:{cx:l.x,cy:l.y,r:this.options.radius-this.options.space-this.options.outerStrokeWidth/2-this.options.innerStrokeWidth/2,fill:"none",stroke:this.options.innerStrokeColor,strokeWidth:this.options.innerStrokeWidth},title:p,units:g,subtitle:d,image:{x:l.x-this.options.imageWidth/2,y:l.y-this.options.imageHeight/2,src:this.options.imageSrc,width:this.options.imageWidth,height:this.options.imageHeight},outerLinearGradient:{id:"outer-linear-"+this._gradientUUID,colorStop1:this.options.outerStrokeColor,colorStop2:"transparent"===this.options.outerStrokeGradientStopColor?"#FFF":this.options.outerStrokeGradientStopColor},radialGradient:{id:"radial-"+this._gradientUUID,colorStop1:this.options.backgroundColor,colorStop2:"transparent"===this.options.backgroundGradientStopColor?"#FFF":this.options.backgroundGradientStopColor}}},this.getAnimationParameters=(t,n)=>{let i,o,s,l=this.options.startFromZero?0:t<0?0:t,e=n<0?0:this.min(n,this.options.maxPercent),r=Math.abs(Math.round(e-l));return r>=100?(i=100,o=this.options.animateTitle||this.options.animateSubtitle?Math.round(r/i):1):(i=r,o=1),(s=Math.round(this.options.animationDuration/i))<10&&(i=this.options.animationDuration/(s=10),o=!this.options.animateTitle&&!this.options.animateSubtitle&&r>100?Math.round(100/i):Math.round(r/i)),o<1&&(o=1),{times:i,step:o,interval:s}},this.animate=(t,n)=>{this._timerSubscription&&!this._timerSubscription.closed&&this._timerSubscription.unsubscribe();let i=this.options.startFromZero?0:t,o=n,{step:l,interval:e}=this.getAnimationParameters(i,o),r=i;this._timerSubscription=i<o?Object(s.a)(0,e).subscribe(()=>{(r+=l)<=o?!this.options.animateTitle&&!this.options.animateSubtitle&&r>=100?(this.draw(o),this._timerSubscription.unsubscribe()):this.draw(r):(this.draw(o),this._timerSubscription.unsubscribe())}):Object(s.a)(0,e).subscribe(()=>{(r-=l)>=o?!this.options.animateTitle&&!this.options.animateSubtitle&&o>=100?(this.draw(o),this._timerSubscription.unsubscribe()):this.draw(r):(this.draw(o),this._timerSubscription.unsubscribe())})},this.emitClickEvent=t=>{this.options.renderOnClick&&this.animate(0,this.options.percent),this.onClick.emit(t)},this.applyOptions=()=>{for(let t of Object.keys(this.options))this.hasOwnProperty(t)&&void 0!==this[t]?this.options[t]=this[t]:this.templateOptions&&void 0!==this.templateOptions[t]&&(this.options[t]=this.templateOptions[t]);this.options.radius=Math.abs(+this.options.radius),this.options.space=+this.options.space,this.options.percent=+this.options.percent>0?+this.options.percent:0,this.options.maxPercent=Math.abs(+this.options.maxPercent),this.options.animationDuration=Math.abs(this.options.animationDuration),this.options.outerStrokeWidth=Math.abs(+this.options.outerStrokeWidth),this.options.innerStrokeWidth=Math.abs(+this.options.innerStrokeWidth),this.options.backgroundPadding=+this.options.backgroundPadding},this.getRelativeY=(t,n)=>(1*(t-n/2)-.18).toFixed(2)+"em",this.min=(t,n)=>t<n?t:n,this.max=(t,n)=>t>n?t:n,this.uuid=()=>{var t=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(n){var i=(t+16*Math.random())%16|0;return t=Math.floor(t/16),("x"==n?i:3&i|8).toString(16)}))},this.findSvgElement=function(){if(null===this.svgElement){let t=this.elRef.nativeElement.getElementsByTagName("svg");t.length>0&&(this.svgElement=t[0])}},this.checkViewport=()=>{this.findSvgElement();let t=this.isInViewport;this.isInViewport=this.isElementInViewport(this.svgElement),t!==this.isInViewport&&this.onViewportChanged.emit({oldValue:t,newValue:this.isInViewport})},this.onScroll=t=>{this.checkViewport()},this.loadEventsForLazyMode=()=>{if(this.options.lazy){this.document.addEventListener("scroll",this.onScroll,!0),this.window.addEventListener("resize",this.onScroll,!0),null===this._viewportChangedSubscriber&&(this._viewportChangedSubscriber=this.onViewportChanged.subscribe(({newValue:t})=>{t&&this.render()}));let t=Object(s.a)(0,50).subscribe(()=>{null===this.svgElement?this.checkViewport():t.unsubscribe()})}},this.unloadEventsForLazyMode=()=>{this.document.removeEventListener("scroll",this.onScroll,!0),this.window.removeEventListener("resize",this.onScroll,!0),null!==this._viewportChangedSubscriber&&(this._viewportChangedSubscriber.unsubscribe(),this._viewportChangedSubscriber=null)},this.document=i,this.window=this.document.defaultView,Object.assign(this.options,t),Object.assign(this.defaultOptions,t)}isDrawing(){return this._timerSubscription&&!this._timerSubscription.closed}isElementInViewport(t){if(null==t)return!1;let n,i=t.getBoundingClientRect(),o=t.parentNode;do{if(n=o.getBoundingClientRect(),i.top>=n.bottom)return!1;if(i.bottom<=n.top)return!1;if(i.left>=n.right)return!1;if(i.right<=n.left)return!1;o=o.parentNode}while(o!=this.document.body);return!(i.top>=(this.window.innerHeight||this.document.documentElement.clientHeight)||i.bottom<=0||i.left>=(this.window.innerWidth||this.document.documentElement.clientWidth)||i.right<=0)}ngOnInit(){this.loadEventsForLazyMode()}ngOnDestroy(){this.unloadEventsForLazyMode()}ngOnChanges(t){this.render(),"lazy"in t&&(t.lazy.currentValue?this.loadEventsForLazyMode():this.unloadEventsForLazyMode())}};var r;let u=r=class{static forRoot(t={}){return{ngModule:r,providers:[{provide:l,useValue:t}]}}}},D0XW:function(t,n,i){"use strict";i.d(n,"a",(function(){return s}));var o=i("3N8a");const s=new(i("IjjT").a)(o.a)},ITXy:function(t,n,i){"use strict";i.d(n,"a",(function(){return l})),i.d(n,"b",(function(){return y}));var o=i("8Y7J"),s=(i("B0QU"),i("SVse")),l=o.rb({encapsulation:2,styles:[],data:{}});function e(t){return o.Pb(0,[(t()(),o.tb(0,0,null,null,2,":svg:linearGradient",[],[[1,"id",0]],null,null,null,null)),(t()(),o.tb(1,0,null,null,0,":svg:stop",[["offset","5%"]],[[1,"stop-color",0],[1,"stop-opacity",0]],null,null,null,null)),(t()(),o.tb(2,0,null,null,0,":svg:stop",[["offset","95%"]],[[1,"stop-color",0],[1,"stop-opacity",0]],null,null,null,null))],null,(function(t,n){var i=n.component;t(n,0,0,i.svg.outerLinearGradient.id),t(n,1,0,i.svg.outerLinearGradient.colorStop1,1),t(n,2,0,i.svg.outerLinearGradient.colorStop2,1)}))}function r(t){return o.Pb(0,[(t()(),o.tb(0,0,null,null,2,":svg:radialGradient",[],[[1,"id",0]],null,null,null,null)),(t()(),o.tb(1,0,null,null,0,":svg:stop",[["offset","5%"]],[[1,"stop-color",0],[1,"stop-opacity",0]],null,null,null,null)),(t()(),o.tb(2,0,null,null,0,":svg:stop",[["offset","95%"]],[[1,"stop-color",0],[1,"stop-opacity",0]],null,null,null,null))],null,(function(t,n){var i=n.component;t(n,0,0,i.svg.radialGradient.id),t(n,1,0,i.svg.radialGradient.colorStop1,1),t(n,2,0,i.svg.radialGradient.colorStop2,1)}))}function u(t){return o.Pb(0,[(t()(),o.tb(0,0,null,null,0,":svg:circle",[],[[1,"cx",0],[1,"cy",0],[1,"r",0],[1,"fill",0],[1,"fill-opacity",0],[1,"stroke",0],[1,"stroke-width",0]],null,null,null,null))],null,(function(t,n){var i=n.component;t(n,0,0,i.svg.backgroundCircle.cx,i.svg.backgroundCircle.cy,i.svg.backgroundCircle.r,i.svg.backgroundCircle.fill,i.svg.backgroundCircle.fillOpacity,i.svg.backgroundCircle.stroke,i.svg.backgroundCircle.strokeWidth)}))}function h(t){return o.Pb(0,[(t()(),o.tb(0,0,null,null,0,":svg:circle",[],[[1,"cx",0],[1,"cy",0],[1,"r",0],[1,"fill",0],[1,"fill-opacity",0],[1,"stroke",0],[1,"stroke-width",0]],null,null,null,null))],null,(function(t,n){var i=n.component;t(n,0,0,i.svg.backgroundCircle.cx,i.svg.backgroundCircle.cy,i.svg.backgroundCircle.r,o.xb(1,"url(#",i.svg.radialGradient.id,")"),i.svg.backgroundCircle.fillOpacity,i.svg.backgroundCircle.stroke,i.svg.backgroundCircle.strokeWidth)}))}function a(t){return o.Pb(0,[(t()(),o.tb(0,0,null,null,4,null,null,null,null,null,null,null)),(t()(),o.ib(16777216,null,null,1,null,u)),o.sb(2,16384,null,0,s.n,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(t()(),o.ib(16777216,null,null,1,null,h)),o.sb(4,16384,null,0,s.n,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(t()(),o.ib(0,null,null,0))],(function(t,n){var i=n.component;t(n,2,0,!i.options.backgroundGradient),t(n,4,0,i.options.backgroundGradient)}),null)}function c(t){return o.Pb(0,[(t()(),o.tb(0,0,null,null,0,":svg:circle",[],[[1,"cx",0],[1,"cy",0],[1,"r",0],[1,"fill",0],[1,"stroke",0],[1,"stroke-width",0]],null,null,null,null))],null,(function(t,n){var i=n.component;t(n,0,0,i.svg.circle.cx,i.svg.circle.cy,i.svg.circle.r,i.svg.circle.fill,i.svg.circle.stroke,i.svg.circle.strokeWidth)}))}function p(t){return o.Pb(0,[(t()(),o.tb(0,0,null,null,0,":svg:path",[],[[1,"d",0],[1,"stroke",0],[1,"stroke-width",0],[1,"stroke-linecap",0],[1,"fill",0]],null,null,null,null))],null,(function(t,n){var i=n.component;t(n,0,0,i.svg.path.d,i.svg.path.stroke,i.svg.path.strokeWidth,i.svg.path.strokeLinecap,i.svg.path.fill)}))}function d(t){return o.Pb(0,[(t()(),o.tb(0,0,null,null,0,":svg:path",[],[[1,"d",0],[1,"stroke",0],[1,"stroke-width",0],[1,"stroke-linecap",0],[1,"fill",0]],null,null,null,null))],null,(function(t,n){var i=n.component;t(n,0,0,i.svg.path.d,o.xb(1,"url(#",i.svg.outerLinearGradient.id,")"),i.svg.path.strokeWidth,i.svg.path.strokeLinecap,i.svg.path.fill)}))}function g(t){return o.Pb(0,[(t()(),o.tb(0,0,null,null,4,null,null,null,null,null,null,null)),(t()(),o.ib(16777216,null,null,1,null,p)),o.sb(2,16384,null,0,s.n,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(t()(),o.ib(16777216,null,null,1,null,d)),o.sb(4,16384,null,0,s.n,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(t()(),o.ib(0,null,null,0))],(function(t,n){var i=n.component;t(n,2,0,!i.options.outerStrokeGradient),t(n,4,0,i.options.outerStrokeGradient)}),null)}function b(t){return o.Pb(0,[(t()(),o.tb(0,0,null,null,1,":svg:tspan",[],[[1,"x",0],[1,"y",0],[1,"dy",0],[1,"font-size",0],[1,"font-weight",0],[1,"fill",0]],null,null,null,null)),(t()(),o.Nb(1,null,["",""]))],null,(function(t,n){var i=n.component;t(n,0,0,i.svg.title.x,i.svg.title.y,n.context.$implicit.dy,i.svg.title.fontSize,i.svg.title.fontWeight,i.svg.title.color),t(n,1,0,n.context.$implicit.span)}))}function f(t){return o.Pb(0,[(t()(),o.tb(0,0,null,null,2,null,null,null,null,null,null,null)),(t()(),o.ib(16777216,null,null,1,null,b)),o.sb(2,278528,null,0,s.m,[o.O,o.L,o.r],{ngForOf:[0,"ngForOf"]},null),(t()(),o.ib(0,null,null,0))],(function(t,n){t(n,2,0,n.component.svg.title.tspans)}),null)}function v(t){return o.Pb(0,[(t()(),o.tb(0,0,null,null,1,":svg:tspan",[],[[1,"font-size",0],[1,"font-weight",0],[1,"fill",0]],null,null,null,null)),(t()(),o.Nb(1,null,["",""]))],null,(function(t,n){var i=n.component;t(n,0,0,i.svg.units.fontSize,i.svg.units.fontWeight,i.svg.units.color),t(n,1,0,i.svg.units.text)}))}function m(t){return o.Pb(0,[(t()(),o.tb(0,0,null,null,1,":svg:tspan",[],[[1,"x",0],[1,"y",0],[1,"dy",0],[1,"font-size",0],[1,"font-weight",0],[1,"fill",0]],null,null,null,null)),(t()(),o.Nb(1,null,["",""]))],null,(function(t,n){var i=n.component;t(n,0,0,i.svg.subtitle.x,i.svg.subtitle.y,n.context.$implicit.dy,i.svg.subtitle.fontSize,i.svg.subtitle.fontWeight,i.svg.subtitle.color),t(n,1,0,n.context.$implicit.span)}))}function k(t){return o.Pb(0,[(t()(),o.tb(0,0,null,null,2,null,null,null,null,null,null,null)),(t()(),o.ib(16777216,null,null,1,null,m)),o.sb(2,278528,null,0,s.m,[o.O,o.L,o.r],{ngForOf:[0,"ngForOf"]},null),(t()(),o.ib(0,null,null,0))],(function(t,n){t(n,2,0,n.component.svg.subtitle.tspans)}),null)}function x(t){return o.Pb(0,[(t()(),o.tb(0,0,null,null,6,":svg:text",[["alignment-baseline","baseline"]],[[1,"x",0],[1,"y",0],[1,"text-anchor",0]],null,null,null,null)),(t()(),o.ib(16777216,null,null,1,null,f)),o.sb(2,16384,null,0,s.n,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(t()(),o.ib(16777216,null,null,1,null,v)),o.sb(4,16384,null,0,s.n,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(t()(),o.ib(16777216,null,null,1,null,k)),o.sb(6,16384,null,0,s.n,[o.O,o.L],{ngIf:[0,"ngIf"]},null)],(function(t,n){var i=n.component;t(n,2,0,i.options.showTitle),t(n,4,0,i.options.showUnits),t(n,6,0,i.options.showSubtitle)}),(function(t,n){var i=n.component;t(n,0,0,i.svg.circle.cx,i.svg.circle.cy,i.svg.title.textAnchor)}))}function w(t){return o.Pb(0,[(t()(),o.tb(0,0,null,null,0,":svg:image",[["preserveAspectRatio","none"]],[[1,"height",0],[1,"width",0],[1,":xlink:href",0],[1,"x",0],[1,"y",0]],null,null,null,null))],null,(function(t,n){var i=n.component;t(n,0,0,i.svg.image.height,i.svg.image.width,i.svg.image.src,i.svg.image.x,i.svg.image.y)}))}function S(t){return o.Pb(0,[(t()(),o.tb(0,0,null,null,15,":svg:svg",[["preserveAspectRatio","xMidYMid meet"],["xmlns","http://www.w3.org/2000/svg"]],[[1,"viewBox",0],[1,"height",0],[1,"width",0],[1,"class",0]],[[null,"click"]],(function(t,n,i){var o=!0;return"click"===n&&(o=!1!==t.component.emitClickEvent(i)&&o),o}),null,null)),(t()(),o.tb(1,0,null,null,4,":svg:defs",[],null,null,null,null,null)),(t()(),o.ib(16777216,null,null,1,null,e)),o.sb(3,16384,null,0,s.n,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(t()(),o.ib(16777216,null,null,1,null,r)),o.sb(5,16384,null,0,s.n,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(t()(),o.ib(16777216,null,null,1,null,a)),o.sb(7,16384,null,0,s.n,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(t()(),o.ib(16777216,null,null,1,null,c)),o.sb(9,16384,null,0,s.n,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(t()(),o.ib(16777216,null,null,1,null,g)),o.sb(11,16384,null,0,s.n,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(t()(),o.ib(16777216,null,null,1,null,x)),o.sb(13,16384,null,0,s.n,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(t()(),o.ib(16777216,null,null,1,null,w)),o.sb(15,16384,null,0,s.n,[o.O,o.L],{ngIf:[0,"ngIf"]},null)],(function(t,n){var i=n.component;t(n,3,0,i.options.outerStrokeGradient),t(n,5,0,i.options.backgroundGradient),t(n,7,0,i.options.showBackground),t(n,9,0,i.options.showInnerStroke),t(n,11,0,i.options.percent-0!=0||i.options.showZeroOuterStroke),t(n,13,0,!i.options.showImage&&(i.options.showTitle||i.options.showUnits||i.options.showSubtitle)),t(n,15,0,i.options.showImage)}),(function(t,n){var i=n.component;t(n,0,0,i.svg.viewBox,i.svg.height,i.svg.width,i.options.class)}))}function y(t){return o.Pb(0,[(t()(),o.ib(16777216,null,null,1,null,S)),o.sb(1,16384,null,0,s.n,[o.O,o.L],{ngIf:[0,"ngIf"]},null)],(function(t,n){t(n,1,0,n.component.svg)}),null)}},PqYM:function(t,n,i){"use strict";var o=i("HDdC"),s=i("D0XW"),l=i("DH7j");function e(t){return!Object(l.a)(t)&&t-parseFloat(t)+1>=0}var r=i("z+Ro");function u(t=0,n,i){let l=-1;return e(n)?l=Number(n)<1?1:Number(n):Object(r.a)(n)&&(i=n),Object(r.a)(i)||(i=s.a),new o.a(n=>{const o=e(t)?t:+t-i.now();return i.schedule(h,o,{index:0,period:l,subscriber:n})})}function h(t){const{index:n,period:i,subscriber:o}=t;if(o.next(n),!o.closed){if(-1===i)return o.complete();t.index=n+1,this.schedule(t,i)}}i.d(n,"a",(function(){return u}))}}]);