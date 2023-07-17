"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[684],{684:function(t,e,i){i.d(e,{diagram:function(){return O}});var n=i(6907),r=i(9373),s=i(1619),a=i(2281),l=i(7201);i(7484),i(7967),i(7856);var c=function(){var t=function(t,e,i,n){for(i=i||{},n=t.length;n--;i[t[n]]=e);return i},e=[1,2],i=[1,5],n=[6,9,11,17,18,20,22,23,26,27,28],r=[1,15],s=[1,16],a=[1,17],l=[1,18],c=[1,19],o=[1,23],h=[1,24],d=[1,27],u=[4,6,9,11,17,18,20,22,23,26,27,28],p={trace:function(){},yy:{},symbols_:{error:2,start:3,timeline:4,document:5,EOF:6,directive:7,line:8,SPACE:9,statement:10,NEWLINE:11,openDirective:12,typeDirective:13,closeDirective:14,":":15,argDirective:16,title:17,acc_title:18,acc_title_value:19,acc_descr:20,acc_descr_value:21,acc_descr_multiline_value:22,section:23,period_statement:24,event_statement:25,period:26,event:27,open_directive:28,type_directive:29,arg_directive:30,close_directive:31,$accept:0,$end:1},terminals_:{2:"error",4:"timeline",6:"EOF",9:"SPACE",11:"NEWLINE",15:":",17:"title",18:"acc_title",19:"acc_title_value",20:"acc_descr",21:"acc_descr_value",22:"acc_descr_multiline_value",23:"section",26:"period",27:"event",28:"open_directive",29:"type_directive",30:"arg_directive",31:"close_directive"},productions_:[0,[3,3],[3,2],[5,0],[5,2],[8,2],[8,1],[8,1],[8,1],[7,4],[7,6],[10,1],[10,2],[10,2],[10,1],[10,1],[10,1],[10,1],[10,1],[24,1],[25,1],[12,1],[13,1],[16,1],[14,1]],performAction:function(t,e,i,n,r,s,a){var l=s.length-1;switch(r){case 1:return s[l-1];case 3:case 7:case 8:this.$=[];break;case 4:s[l-1].push(s[l]),this.$=s[l-1];break;case 5:case 6:this.$=s[l];break;case 11:n.getCommonDb().setDiagramTitle(s[l].substr(6)),this.$=s[l].substr(6);break;case 12:this.$=s[l].trim(),n.getCommonDb().setAccTitle(this.$);break;case 13:case 14:this.$=s[l].trim(),n.getCommonDb().setAccDescription(this.$);break;case 15:n.addSection(s[l].substr(8)),this.$=s[l].substr(8);break;case 19:n.addTask(s[l],0,""),this.$=s[l];break;case 20:n.addEvent(s[l].substr(2)),this.$=s[l];break;case 21:n.parseDirective("%%{","open_directive");break;case 22:n.parseDirective(s[l],"type_directive");break;case 23:s[l]=s[l].trim().replace(/'/g,'"'),n.parseDirective(s[l],"arg_directive");break;case 24:n.parseDirective("}%%","close_directive","timeline")}},table:[{3:1,4:e,7:3,12:4,28:i},{1:[3]},t(n,[2,3],{5:6}),{3:7,4:e,7:3,12:4,28:i},{13:8,29:[1,9]},{29:[2,21]},{6:[1,10],7:22,8:11,9:[1,12],10:13,11:[1,14],12:4,17:r,18:s,20:a,22:l,23:c,24:20,25:21,26:o,27:h,28:i},{1:[2,2]},{14:25,15:[1,26],31:d},t([15,31],[2,22]),t(n,[2,8],{1:[2,1]}),t(n,[2,4]),{7:22,10:28,12:4,17:r,18:s,20:a,22:l,23:c,24:20,25:21,26:o,27:h,28:i},t(n,[2,6]),t(n,[2,7]),t(n,[2,11]),{19:[1,29]},{21:[1,30]},t(n,[2,14]),t(n,[2,15]),t(n,[2,16]),t(n,[2,17]),t(n,[2,18]),t(n,[2,19]),t(n,[2,20]),{11:[1,31]},{16:32,30:[1,33]},{11:[2,24]},t(n,[2,5]),t(n,[2,12]),t(n,[2,13]),t(u,[2,9]),{14:34,31:d},{31:[2,23]},{11:[1,35]},t(u,[2,10])],defaultActions:{5:[2,21],7:[2,2],27:[2,24],33:[2,23]},parseError:function(t,e){if(e.recoverable)this.trace(t);else{var i=Error(t);throw i.hash=e,i}},parse:function(t){var e=this,i=[0],n=[],r=[null],s=[],a=this.table,l="",c=0,o=0,h=s.slice.call(arguments,1),d=Object.create(this.lexer),u={yy:{}};for(var p in this.yy)Object.prototype.hasOwnProperty.call(this.yy,p)&&(u.yy[p]=this.yy[p]);d.setInput(t,u.yy),u.yy.lexer=d,u.yy.parser=this,void 0===d.yylloc&&(d.yylloc={});var y=d.yylloc;s.push(y);var g=d.options&&d.options.ranges;"function"==typeof u.yy.parseError?this.parseError=u.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var f,m,x,_,b,k,v,w,S={};;){if(m=i[i.length-1],this.defaultActions[m]?x=this.defaultActions[m]:(null==f&&(f=function(){var t;return"number"!=typeof(t=n.pop()||d.lex()||1)&&(t instanceof Array&&(t=(n=t).pop()),t=e.symbols_[t]||t),t}()),x=a[m]&&a[m][f]),void 0===x||!x.length||!x[0]){var $="";for(b in w=[],a[m])this.terminals_[b]&&b>2&&w.push("'"+this.terminals_[b]+"'");$=d.showPosition?"Parse error on line "+(c+1)+":\n"+d.showPosition()+"\nExpecting "+w.join(", ")+", got '"+(this.terminals_[f]||f)+"'":"Parse error on line "+(c+1)+": Unexpected "+(1==f?"end of input":"'"+(this.terminals_[f]||f)+"'"),this.parseError($,{text:d.match,token:this.terminals_[f]||f,line:d.yylineno,loc:y,expected:w})}if(x[0]instanceof Array&&x.length>1)throw Error("Parse Error: multiple actions possible at state: "+m+", token: "+f);switch(x[0]){case 1:i.push(f),r.push(d.yytext),s.push(d.yylloc),i.push(x[1]),f=null,o=d.yyleng,l=d.yytext,c=d.yylineno,y=d.yylloc;break;case 2:if(k=this.productions_[x[1]][1],S.$=r[r.length-k],S._$={first_line:s[s.length-(k||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(k||1)].first_column,last_column:s[s.length-1].last_column},g&&(S._$.range=[s[s.length-(k||1)].range[0],s[s.length-1].range[1]]),void 0!==(_=this.performAction.apply(S,[l,o,c,u.yy,x[1],r,s].concat(h))))return _;k&&(i=i.slice(0,-1*k*2),r=r.slice(0,-1*k),s=s.slice(0,-1*k)),i.push(this.productions_[x[1]][0]),r.push(S.$),s.push(S._$),v=a[i[i.length-2]][i[i.length-1]],i.push(v);break;case 3:return!0}}return!0}};function y(){this.yy={}}return p.lexer={EOF:1,parseError:function(t,e){if(this.yy.parser)this.yy.parser.parseError(t,e);else throw Error(t)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,i=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var n=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),i.length-1&&(this.yylineno-=i.length-1);var r=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:i?(i.length===n.length?this.yylloc.first_column:0)+n[n.length-i.length].length-i[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[r[0],r[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var i,n,r;if(this.options.backtrack_lexer&&(r={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(r.yylloc.range=this.yylloc.range.slice(0))),(n=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=n.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:n?n[n.length-1].length-n[n.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],i=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i)return i;if(this._backtrack)for(var s in r)this[s]=r[s];return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var t,e,i,n,r=this._currentRules(),s=0;s<r.length;s++)if((i=this._input.match(this.rules[r[s]]))&&(!e||i[0].length>e[0].length)){if(e=i,n=s,this.options.backtrack_lexer){if(!1!==(t=this.test_match(i,r[s])))return t;if(!this._backtrack)return!1;e=!1;continue}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,r[n]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){return this.next()||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,e,i,n){switch(i){case 0:return this.begin("open_directive"),28;case 1:return this.begin("type_directive"),29;case 2:return this.popState(),this.begin("arg_directive"),15;case 3:return this.popState(),this.popState(),31;case 4:return 30;case 5:case 6:case 8:case 9:break;case 7:return 11;case 10:return 4;case 11:return 17;case 12:return this.begin("acc_title"),18;case 13:return this.popState(),"acc_title_value";case 14:return this.begin("acc_descr"),20;case 15:return this.popState(),"acc_descr_value";case 16:this.begin("acc_descr_multiline");break;case 17:this.popState();break;case 18:return"acc_descr_multiline_value";case 19:return 23;case 20:return 27;case 21:return 26;case 22:return 6;case 23:return"INVALID"}},rules:[/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:timeline\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:section\s[^#:\n;]+)/i,/^(?::\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?:$)/i,/^(?:.)/i],conditions:{open_directive:{rules:[1],inclusive:!1},type_directive:{rules:[2,3],inclusive:!1},arg_directive:{rules:[3,4],inclusive:!1},acc_descr_multiline:{rules:[17,18],inclusive:!1},acc_descr:{rules:[15],inclusive:!1},acc_title:{rules:[13],inclusive:!1},INITIAL:{rules:[0,5,6,7,8,9,10,11,12,14,16,19,20,21,22,23],inclusive:!0}}},y.prototype=p,p.Parser=y,new y}();c.parser=c;let o="",h=0,d=[],u=[],p=[],y=()=>n.I,g=(t,e,i)=>{(0,n.J)(globalThis,t,e,i)},f=function(){d.length=0,u.length=0,o="",p.length=0,(0,n.v)()},m=function(t){o=t,d.push(t)},x=function(){return d},_=function(){let t=w(),e=0;for(;!t&&e<100;)t=w(),e++;return u.push(...p),u},b=function(t,e,i){let n={id:h++,section:o,type:o,task:t,score:e||0,events:i?[i]:[]};p.push(n)},k=function(t){let e=p.find(t=>t.id===h-1);e.events.push(t)},v=function(t){let e={section:o,type:o,description:t,task:t,classes:[]};u.push(e)},w=function(){let t=!0;for(let[e,i]of p.entries())p[e].processed,t=t&&i.processed;return t},S=Object.freeze(Object.defineProperty({__proto__:null,addEvent:k,addSection:m,addTask:b,addTaskOrg:v,clear:f,default:{clear:f,getCommonDb:y,addSection:m,getSections:x,getTasks:_,addTask:b,addTaskOrg:v,addEvent:k,parseDirective:g},getCommonDb:y,getSections:x,getTasks:_,parseDirective:g},Symbol.toStringTag,{value:"Module"})),$=function(t,e){let i=t.append("rect");return i.attr("x",e.x),i.attr("y",e.y),i.attr("fill",e.fill),i.attr("stroke",e.stroke),i.attr("width",e.width),i.attr("height",e.height),i.attr("rx",e.rx),i.attr("ry",e.ry),void 0!==e.class&&i.attr("class",e.class),i},E=function(t,e){let i=t.append("circle").attr("cx",e.cx).attr("cy",e.cy).attr("class","face").attr("r",15).attr("stroke-width",2).attr("overflow","visible"),n=t.append("g");return n.append("circle").attr("cx",e.cx-5).attr("cy",e.cy-5).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),n.append("circle").attr("cx",e.cx+5).attr("cy",e.cy-5).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),e.score>3?function(t){let i=(0,r.Nb1)().startAngle(Math.PI/2).endAngle(3*(Math.PI/2)).innerRadius(7.5).outerRadius(15/2.2);t.append("path").attr("class","mouth").attr("d",i).attr("transform","translate("+e.cx+","+(e.cy+2)+")")}(n):e.score<3?function(t){let i=(0,r.Nb1)().startAngle(3*Math.PI/2).endAngle(5*(Math.PI/2)).innerRadius(7.5).outerRadius(15/2.2);t.append("path").attr("class","mouth").attr("d",i).attr("transform","translate("+e.cx+","+(e.cy+7)+")")}(n):function(t){t.append("line").attr("class","mouth").attr("stroke",2).attr("x1",e.cx-5).attr("y1",e.cy+7).attr("x2",e.cx+5).attr("y2",e.cy+7).attr("class","mouth").attr("stroke-width","1px").attr("stroke","#666")}(n),i},I=function(t,e){let i=e.text.replace(/<br\s*\/?>/gi," "),n=t.append("text");n.attr("x",e.x),n.attr("y",e.y),n.attr("class","legend"),n.style("text-anchor",e.anchor),void 0!==e.class&&n.attr("class",e.class);let r=n.append("tspan");return r.attr("x",e.x+2*e.textMargin),r.text(i),n},M=-1,N=function(){return{x:0,y:0,width:100,anchor:"start",height:100,rx:0,ry:0}},A=function(){function t(t,e,i,r,s,a,l,c){let o=e.append("text").attr("x",i+s/2).attr("y",r+a/2+5).style("font-color",c).style("text-anchor","middle").text(t);n(o,l)}function e(t,e,i,r,s,a,l,c,o){let{taskFontSize:h,taskFontFamily:d}=c,u=t.split(/<br\s*\/?>/gi);for(let t=0;t<u.length;t++){let c=t*h-h*(u.length-1)/2,p=e.append("text").attr("x",i+s/2).attr("y",r).attr("fill",o).style("text-anchor","middle").style("font-size",h).style("font-family",d);p.append("tspan").attr("x",i+s/2).attr("dy",c).text(u[t]),p.attr("y",r+a/2).attr("dominant-baseline","central").attr("alignment-baseline","central"),n(p,l)}}function i(t,i,r,s,a,l,c,o){let h=i.append("switch"),d=h.append("foreignObject").attr("x",r).attr("y",s).attr("width",a).attr("height",l).attr("position","fixed"),u=d.append("xhtml:div").style("display","table").style("height","100%").style("width","100%");u.append("div").attr("class","label").style("display","table-cell").style("text-align","center").style("vertical-align","middle").text(t),e(t,h,r,s,a,l,c,o),n(u,c)}function n(t,e){for(let i in e)i in e&&t.attr(i,e[i])}return function(n){return"fo"===n.textPlacement?i:"old"===n.textPlacement?t:e}}();function L(t,e){t.each(function(){var t,i=(0,r.Ys)(this),n=i.text().split(/(\s+|<br>)/).reverse(),s=[],a=i.attr("y"),l=parseFloat(i.attr("dy")),c=i.text(null).append("tspan").attr("x",0).attr("y",a).attr("dy",l+"em");for(let r=0;r<n.length;r++)t=n[n.length-1-r],s.push(t),c.text(s.join(" ").trim()),(c.node().getComputedTextLength()>e||"<br>"===t)&&(s.pop(),c.text(s.join(" ").trim()),s="<br>"===t?[""]:[t],c=i.append("tspan").attr("x",0).attr("y",a).attr("dy","1.1em").text(t))})}let C=function(t,e,i){t.append("path").attr("id","node-"+e.id).attr("class","node-bkg node-"+e.type).attr("d",`M0 ${e.height-5} v${-e.height+10} q0,-5 5,-5 h${e.width-10} q5,0 5,5 v${e.height-5} H0 Z`),t.append("line").attr("class","node-line-"+i).attr("x1",0).attr("y1",e.height).attr("x2",e.width).attr("y2",e.height)},H={drawRect:$,drawCircle:function(t,e){let i=t.append("circle");return i.attr("cx",e.cx),i.attr("cy",e.cy),i.attr("class","actor-"+e.pos),i.attr("fill",e.fill),i.attr("stroke",e.stroke),i.attr("r",e.r),void 0!==i.class&&i.attr("class",i.class),void 0!==e.title&&i.append("title").text(e.title),i},drawSection:function(t,e,i){let n=t.append("g"),r=N();r.x=e.x,r.y=e.y,r.fill=e.fill,r.width=i.width,r.height=i.height,r.class="journey-section section-type-"+e.num,r.rx=3,r.ry=3,$(n,r),A(i)(e.text,n,r.x,r.y,r.width,r.height,{class:"journey-section section-type-"+e.num},i,e.colour)},drawText:I,drawLabel:function(t,e){var i,n;let r=t.append("polygon");r.attr("points",(i=e.x)+","+(n=e.y)+" "+(i+50)+","+n+" "+(i+50)+","+(n+20-7)+" "+(i+50-8.4)+","+(n+20)+" "+i+","+(n+20)),r.attr("class","labelBox"),e.y=e.y+e.labelMargin,e.x=e.x+.5*e.labelMargin,I(t,e)},drawTask:function(t,e,i){let n=e.x+i.width/2,r=t.append("g");M++,r.append("line").attr("id","task"+M).attr("x1",n).attr("y1",e.y).attr("x2",n).attr("y2",450).attr("class","task-line").attr("stroke-width","1px").attr("stroke-dasharray","4 2").attr("stroke","#666"),E(r,{cx:n,cy:300+(5-e.score)*30,score:e.score});let s=N();s.x=e.x,s.y=e.y,s.fill=e.fill,s.width=i.width,s.height=i.height,s.class="task task-type-"+e.num,s.rx=3,s.ry=3,$(r,s),e.x,A(i)(e.task,r,s.x,s.y,s.width,s.height,{class:"task"},i,e.colour)},drawBackgroundRect:function(t,e){let i=$(t,{x:e.startx,y:e.starty,width:e.stopx-e.startx,height:e.stopy-e.starty,fill:e.fill,class:"rect"});i.lower()},getTextObj:function(){return{x:0,y:0,fill:void 0,"text-anchor":"start",width:100,height:100,textMargin:0,rx:0,ry:0}},getNoteRect:N,initGraphics:function(t){t.append("defs").append("marker").attr("id","arrowhead").attr("refX",5).attr("refY",2).attr("markerWidth",6).attr("markerHeight",4).attr("orient","auto").append("path").attr("d","M 0,0 V 4 L6,2 Z")},drawNode:function(t,e,i,n){let r=i%12-1,s=t.append("g");e.section=r,s.attr("class",(e.class?e.class+" ":"")+"timeline-node section-"+r);let a=s.append("g"),l=s.append("g"),c=l.append("text").text(e.descr).attr("dy","1em").attr("alignment-baseline","middle").attr("dominant-baseline","middle").attr("text-anchor","middle").call(L,e.width),o=c.node().getBBox(),h=n.fontSize&&n.fontSize.replace?n.fontSize.replace("px",""):n.fontSize;return e.height=o.height+.55*h+e.padding,e.height=Math.max(e.height,e.maxHeight),e.width=e.width+2*e.padding,l.attr("transform","translate("+e.width/2+", "+e.padding/2+")"),C(a,e,r),e},getVirtualNodeHeight:function(t,e,i){let n=t.append("g"),r=n.append("text").text(e.descr).attr("dy","1em").attr("alignment-baseline","middle").attr("dominant-baseline","middle").attr("text-anchor","middle").call(L,e.width),s=r.node().getBBox(),a=i.fontSize&&i.fontSize.replace?i.fontSize.replace("px",""):i.fontSize;return n.remove(),s.height+.55*a+e.padding}},P=function(t,e,i,r,s,a,l,c,o,h,d){var u;for(let c of e){let e={descr:c.task,section:i,number:i,width:150,padding:20,maxHeight:a};n.l.debug("taskNode",e);let p=t.append("g").attr("class","taskWrapper"),y=H.drawNode(p,e,i,l),g=y.height;if(n.l.debug("taskHeight after draw",g),p.attr("transform",`translate(${r}, ${s})`),a=Math.max(a,g),c.events){let e=t.append("g").attr("class","lineWrapper");s+=100,T(t,c.events,i,r,s,l),s-=100,e.append("line").attr("x1",r+95).attr("y1",s+a).attr("x2",r+95).attr("y2",s+a+(d?a:h)+o+120).attr("stroke-width",2).attr("stroke","black").attr("marker-end","url(#arrowhead)").attr("stroke-dasharray","5,5")}r+=200,d&&!(null==(u=l.timeline)?void 0:u.disableMulticolor)&&i++}},T=function(t,e,i,r,s,a){let l=0,c=s;for(let c of(s+=100,e)){let e={descr:c,section:i,number:i,width:150,padding:20,maxHeight:50};n.l.debug("eventNode",e);let o=t.append("g").attr("class","eventWrapper"),h=H.drawNode(o,e,i,a),d=h.height;l+=d,o.attr("transform",`translate(${r}, ${s})`),s=s+10+d}return s=c,l},D=t=>{let e="";for(let e=0;e<t.THEME_COLOR_LIMIT;e++)t["lineColor"+e]=t["lineColor"+e]||t["cScaleInv"+e],(0,s.Z)(t["lineColor"+e])?t["lineColor"+e]=(0,a.Z)(t["lineColor"+e],20):t["lineColor"+e]=(0,l.Z)(t["lineColor"+e],20);for(let i=0;i<t.THEME_COLOR_LIMIT;i++){let n=""+(17-3*i);e+=`
    .section-${i-1} rect, .section-${i-1} path, .section-${i-1} circle, .section-${i-1} path  {
      fill: ${t["cScale"+i]};
    }
    .section-${i-1} text {
     fill: ${t["cScaleLabel"+i]};
    }
    .node-icon-${i-1} {
      font-size: 40px;
      color: ${t["cScaleLabel"+i]};
    }
    .section-edge-${i-1}{
      stroke: ${t["cScale"+i]};
    }
    .edge-depth-${i-1}{
      stroke-width: ${n};
    }
    .section-${i-1} line {
      stroke: ${t["cScaleInv"+i]} ;
      stroke-width: 3;
    }

    .lineWrapper line{
      stroke: ${t["cScaleLabel"+i]} ;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }
    `}return e},O={db:S,renderer:{setConf:()=>{},draw:function(t,e,i,s){var a,l,c,o;let h;let d=(0,n.c)(),u=d.leftMargin??50;null==(l=(a=s.db).clear)||l.call(a),s.parser.parse(t+"\n"),n.l.debug("timeline",s.db);let p=d.securityLevel;"sandbox"===p&&(h=(0,r.Ys)("#i"+e));let y="sandbox"===p?(0,r.Ys)(h.nodes()[0].contentDocument.body):(0,r.Ys)("body"),g=y.select("#"+e);g.append("g");let f=s.db.getTasks(),m=s.db.getCommonDb().getDiagramTitle();n.l.debug("task",f),H.initGraphics(g);let x=s.db.getSections();n.l.debug("sections",x);let _=0,b=0,k=0,v=0,w=50+u,S=50;v=50;let $=0,E=!0;x.forEach(function(t){let e={number:$,descr:t,section:$,width:150,padding:20,maxHeight:_},i=H.getVirtualNodeHeight(g,e,d);n.l.debug("sectionHeight before draw",i),_=Math.max(_,i+20)});let I=0,M=0;for(let[t,e]of(n.l.debug("tasks.length",f.length),f.entries())){let i={number:t,descr:e,section:e.section,width:150,padding:20,maxHeight:b},r=H.getVirtualNodeHeight(g,i,d);n.l.debug("taskHeight before draw",r),b=Math.max(b,r+20),I=Math.max(I,e.events.length);let s=0;for(let t=0;t<e.events.length;t++){let i=e.events[t],n={descr:i,section:e.section,number:e.section,width:150,padding:20,maxHeight:50};s+=H.getVirtualNodeHeight(g,n,d)}M=Math.max(M,s)}n.l.debug("maxSectionHeight before draw",_),n.l.debug("maxTaskHeight before draw",b),x&&x.length>0?x.forEach(t=>{let e=f.filter(e=>e.section===t),i={number:$,descr:t,section:$,width:200*Math.max(e.length,1)-50,padding:20,maxHeight:_};n.l.debug("sectionNode",i);let r=g.append("g"),s=H.drawNode(r,i,$,d);n.l.debug("sectionNode output",s),r.attr("transform",`translate(${w}, ${v})`),S+=_+50,e.length>0&&P(g,e,$,w,S,b,d,I,M,_,!1),w+=200*Math.max(e.length,1),S=v,$++}):(E=!1,P(g,f,$,w,S,b,d,I,M,_,!0));let N=g.node().getBBox();n.l.debug("bounds",N),m&&g.append("text").text(m).attr("x",N.width/2-u).attr("font-size","4ex").attr("font-weight","bold").attr("y",20),k=E?_+b+150:b+100;let A=g.append("g").attr("class","lineWrapper");A.append("line").attr("x1",u).attr("y1",k).attr("x2",N.width+3*u).attr("y2",k).attr("stroke-width",4).attr("stroke","black").attr("marker-end","url(#arrowhead)"),(0,n.p)(void 0,g,(null==(c=d.timeline)?void 0:c.padding)??50,(null==(o=d.timeline)?void 0:o.useMaxWidth)??!1)}},parser:c,styles:t=>`
  .edge {
    stroke-width: 3;
  }
  ${D(t)}
  .section-root rect, .section-root path, .section-root circle  {
    fill: ${t.git0};
  }
  .section-root text {
    fill: ${t.gitBranchLabel0};
  }
  .icon-container {
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .edge {
    fill: none;
  }
  .eventWrapper  {
   filter: brightness(120%);
  }
`}}}]);