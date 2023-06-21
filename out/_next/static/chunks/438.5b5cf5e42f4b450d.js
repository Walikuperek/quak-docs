"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[438],{7438:function(t,e,i){i.r(e),i.d(e,{diagram:function(){return N}});var r=i(2261),c=i(6990);i(2053),i(5804),i(1060);var a=function(){var t=function(t,e,i,r){for(i=i||{},r=t.length;r--;i[t[r]]=e);return i},e=[1,4],i=[1,7],r=[1,5],c=[1,9],a=[1,6],s=[2,6],n=[1,16],o=[6,8,14,20,22,24,25,27,29,32,37,40,50,55],l=[8,14,20,22,24,25,27,29,32,37,40],h=[8,13,14,20,22,24,25,27,29,32,37,40],m=[1,26],u=[6,8,14,50,55],y=[8,14,55],p=[1,53],g=[1,52],b=[8,14,30,33,35,38,55],d=[1,67],f=[1,68],k=[1,69],_=[8,14,33,35,42,55],$={trace:function(){},yy:{},symbols_:{error:2,start:3,eol:4,directive:5,GG:6,document:7,EOF:8,":":9,DIR:10,options:11,body:12,OPT:13,NL:14,line:15,statement:16,commitStatement:17,mergeStatement:18,cherryPickStatement:19,acc_title:20,acc_title_value:21,acc_descr:22,acc_descr_value:23,acc_descr_multiline_value:24,section:25,branchStatement:26,CHECKOUT:27,ref:28,BRANCH:29,ORDER:30,NUM:31,CHERRY_PICK:32,COMMIT_ID:33,STR:34,COMMIT_TAG:35,EMPTYSTR:36,MERGE:37,COMMIT_TYPE:38,commitType:39,COMMIT:40,commit_arg:41,COMMIT_MSG:42,NORMAL:43,REVERSE:44,HIGHLIGHT:45,openDirective:46,typeDirective:47,closeDirective:48,argDirective:49,open_directive:50,type_directive:51,arg_directive:52,close_directive:53,ID:54,";":55,$accept:0,$end:1},terminals_:{2:"error",6:"GG",8:"EOF",9:":",10:"DIR",13:"OPT",14:"NL",20:"acc_title",21:"acc_title_value",22:"acc_descr",23:"acc_descr_value",24:"acc_descr_multiline_value",25:"section",27:"CHECKOUT",29:"BRANCH",30:"ORDER",31:"NUM",32:"CHERRY_PICK",33:"COMMIT_ID",34:"STR",35:"COMMIT_TAG",36:"EMPTYSTR",37:"MERGE",38:"COMMIT_TYPE",40:"COMMIT",42:"COMMIT_MSG",43:"NORMAL",44:"REVERSE",45:"HIGHLIGHT",50:"open_directive",51:"type_directive",52:"arg_directive",53:"close_directive",54:"ID",55:";"},productions_:[0,[3,2],[3,2],[3,3],[3,4],[3,5],[7,0],[7,2],[11,2],[11,1],[12,0],[12,2],[15,2],[15,1],[16,1],[16,1],[16,1],[16,2],[16,2],[16,1],[16,1],[16,1],[16,2],[26,2],[26,4],[19,3],[19,5],[19,5],[19,5],[19,5],[18,2],[18,4],[18,4],[18,4],[18,6],[18,6],[18,6],[18,6],[18,6],[18,6],[18,8],[18,8],[18,8],[18,8],[18,8],[18,8],[17,2],[17,3],[17,3],[17,5],[17,5],[17,3],[17,5],[17,5],[17,5],[17,5],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,3],[17,5],[17,5],[17,5],[17,5],[17,5],[17,5],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[41,0],[41,1],[39,1],[39,1],[39,1],[5,3],[5,5],[46,1],[47,1],[49,1],[48,1],[28,1],[28,1],[4,1],[4,1],[4,1]],performAction:function(t,e,i,r,c,a,s){var n=a.length-1;switch(c){case 3:return a[n];case 4:return a[n-1];case 5:return r.setDirection(a[n-3]),a[n-1];case 7:r.setOptions(a[n-1]),this.$=a[n];break;case 8:a[n-1]+=a[n],this.$=a[n-1];break;case 10:this.$=[];break;case 11:a[n-1].push(a[n]),this.$=a[n-1];break;case 12:this.$=a[n-1];break;case 17:this.$=a[n].trim(),r.setAccTitle(this.$);break;case 18:case 19:this.$=a[n].trim(),r.setAccDescription(this.$);break;case 20:r.addSection(a[n].substr(8)),this.$=a[n].substr(8);break;case 22:r.checkout(a[n]);break;case 23:r.branch(a[n]);break;case 24:r.branch(a[n-2],a[n]);break;case 25:r.cherryPick(a[n],"",void 0);break;case 26:r.cherryPick(a[n-2],"",a[n]);break;case 27:case 29:r.cherryPick(a[n-2],"","");break;case 28:r.cherryPick(a[n],"",a[n-2]);break;case 30:r.merge(a[n],"","","");break;case 31:r.merge(a[n-2],a[n],"","");break;case 32:r.merge(a[n-2],"",a[n],"");break;case 33:r.merge(a[n-2],"","",a[n]);break;case 34:r.merge(a[n-4],a[n],"",a[n-2]);break;case 35:r.merge(a[n-4],"",a[n],a[n-2]);break;case 36:r.merge(a[n-4],"",a[n-2],a[n]);break;case 37:r.merge(a[n-4],a[n-2],a[n],"");break;case 38:r.merge(a[n-4],a[n-2],"",a[n]);break;case 39:r.merge(a[n-4],a[n],a[n-2],"");break;case 40:r.merge(a[n-6],a[n-4],a[n-2],a[n]);break;case 41:r.merge(a[n-6],a[n],a[n-4],a[n-2]);break;case 42:r.merge(a[n-6],a[n-4],a[n],a[n-2]);break;case 43:r.merge(a[n-6],a[n-2],a[n-4],a[n]);break;case 44:r.merge(a[n-6],a[n],a[n-2],a[n-4]);break;case 45:r.merge(a[n-6],a[n-2],a[n],a[n-4]);break;case 46:r.commit(a[n]);break;case 47:r.commit("","",r.commitType.NORMAL,a[n]);break;case 48:r.commit("","",a[n],"");break;case 49:r.commit("","",a[n],a[n-2]);break;case 50:r.commit("","",a[n-2],a[n]);break;case 51:r.commit("",a[n],r.commitType.NORMAL,"");break;case 52:r.commit("",a[n-2],r.commitType.NORMAL,a[n]);break;case 53:r.commit("",a[n],r.commitType.NORMAL,a[n-2]);break;case 54:r.commit("",a[n-2],a[n],"");break;case 55:r.commit("",a[n],a[n-2],"");break;case 56:r.commit("",a[n-4],a[n-2],a[n]);break;case 57:r.commit("",a[n-4],a[n],a[n-2]);break;case 58:r.commit("",a[n-2],a[n-4],a[n]);break;case 59:r.commit("",a[n],a[n-4],a[n-2]);break;case 60:r.commit("",a[n],a[n-2],a[n-4]);break;case 61:r.commit("",a[n-2],a[n],a[n-4]);break;case 62:r.commit(a[n],"",r.commitType.NORMAL,"");break;case 63:r.commit(a[n],"",r.commitType.NORMAL,a[n-2]);break;case 64:r.commit(a[n-2],"",r.commitType.NORMAL,a[n]);break;case 65:r.commit(a[n-2],"",a[n],"");break;case 66:r.commit(a[n],"",a[n-2],"");break;case 67:r.commit(a[n],a[n-2],r.commitType.NORMAL,"");break;case 68:r.commit(a[n-2],a[n],r.commitType.NORMAL,"");break;case 69:r.commit(a[n-4],"",a[n-2],a[n]);break;case 70:r.commit(a[n-4],"",a[n],a[n-2]);break;case 71:r.commit(a[n-2],"",a[n-4],a[n]);break;case 72:r.commit(a[n],"",a[n-4],a[n-2]);break;case 73:r.commit(a[n],"",a[n-2],a[n-4]);break;case 74:r.commit(a[n-2],"",a[n],a[n-4]);break;case 75:r.commit(a[n-4],a[n],a[n-2],"");break;case 76:r.commit(a[n-4],a[n-2],a[n],"");break;case 77:r.commit(a[n-2],a[n],a[n-4],"");break;case 78:r.commit(a[n],a[n-2],a[n-4],"");break;case 79:r.commit(a[n],a[n-4],a[n-2],"");break;case 80:r.commit(a[n-2],a[n-4],a[n],"");break;case 81:r.commit(a[n-4],a[n],r.commitType.NORMAL,a[n-2]);break;case 82:r.commit(a[n-4],a[n-2],r.commitType.NORMAL,a[n]);break;case 83:r.commit(a[n-2],a[n],r.commitType.NORMAL,a[n-4]);break;case 84:r.commit(a[n],a[n-2],r.commitType.NORMAL,a[n-4]);break;case 85:r.commit(a[n],a[n-4],r.commitType.NORMAL,a[n-2]);break;case 86:r.commit(a[n-2],a[n-4],r.commitType.NORMAL,a[n]);break;case 87:r.commit(a[n-6],a[n-4],a[n-2],a[n]);break;case 88:r.commit(a[n-6],a[n-4],a[n],a[n-2]);break;case 89:r.commit(a[n-6],a[n-2],a[n-4],a[n]);break;case 90:r.commit(a[n-6],a[n],a[n-4],a[n-2]);break;case 91:r.commit(a[n-6],a[n-2],a[n],a[n-4]);break;case 92:r.commit(a[n-6],a[n],a[n-2],a[n-4]);break;case 93:r.commit(a[n-4],a[n-6],a[n-2],a[n]);break;case 94:r.commit(a[n-4],a[n-6],a[n],a[n-2]);break;case 95:r.commit(a[n-2],a[n-6],a[n-4],a[n]);break;case 96:r.commit(a[n],a[n-6],a[n-4],a[n-2]);break;case 97:r.commit(a[n-2],a[n-6],a[n],a[n-4]);break;case 98:r.commit(a[n],a[n-6],a[n-2],a[n-4]);break;case 99:r.commit(a[n],a[n-4],a[n-2],a[n-6]);break;case 100:r.commit(a[n-2],a[n-4],a[n],a[n-6]);break;case 101:r.commit(a[n],a[n-2],a[n-4],a[n-6]);break;case 102:r.commit(a[n-2],a[n],a[n-4],a[n-6]);break;case 103:r.commit(a[n-4],a[n-2],a[n],a[n-6]);break;case 104:r.commit(a[n-4],a[n],a[n-2],a[n-6]);break;case 105:r.commit(a[n-2],a[n-4],a[n-6],a[n]);break;case 106:r.commit(a[n],a[n-4],a[n-6],a[n-2]);break;case 107:r.commit(a[n-2],a[n],a[n-6],a[n-4]);break;case 108:r.commit(a[n],a[n-2],a[n-6],a[n-4]);break;case 109:r.commit(a[n-4],a[n-2],a[n-6],a[n]);break;case 110:r.commit(a[n-4],a[n],a[n-6],a[n-2]);break;case 111:this.$="";break;case 112:this.$=a[n];break;case 113:this.$=r.commitType.NORMAL;break;case 114:this.$=r.commitType.REVERSE;break;case 115:this.$=r.commitType.HIGHLIGHT;break;case 118:r.parseDirective("%%{","open_directive");break;case 119:r.parseDirective(a[n],"type_directive");break;case 120:a[n]=a[n].trim().replace(/'/g,'"'),r.parseDirective(a[n],"arg_directive");break;case 121:r.parseDirective("}%%","close_directive","gitGraph")}},table:[{3:1,4:2,5:3,6:e,8:i,14:r,46:8,50:c,55:a},{1:[3]},{3:10,4:2,5:3,6:e,8:i,14:r,46:8,50:c,55:a},{3:11,4:2,5:3,6:e,8:i,14:r,46:8,50:c,55:a},{7:12,8:s,9:[1,13],10:[1,14],11:15,14:n},t(o,[2,124]),t(o,[2,125]),t(o,[2,126]),{47:17,51:[1,18]},{51:[2,118]},{1:[2,1]},{1:[2,2]},{8:[1,19]},{7:20,8:s,11:15,14:n},{9:[1,21]},t(l,[2,10],{12:22,13:[1,23]}),t(h,[2,9]),{9:[1,25],48:24,53:m},t([9,53],[2,119]),{1:[2,3]},{8:[1,27]},{7:28,8:s,11:15,14:n},{8:[2,7],14:[1,31],15:29,16:30,17:32,18:33,19:34,20:[1,35],22:[1,36],24:[1,37],25:[1,38],26:39,27:[1,40],29:[1,44],32:[1,43],37:[1,42],40:[1,41]},t(h,[2,8]),t(u,[2,116]),{49:45,52:[1,46]},t(u,[2,121]),{1:[2,4]},{8:[1,47]},t(l,[2,11]),{4:48,8:i,14:r,55:a},t(l,[2,13]),t(y,[2,14]),t(y,[2,15]),t(y,[2,16]),{21:[1,49]},{23:[1,50]},t(y,[2,19]),t(y,[2,20]),t(y,[2,21]),{28:51,34:p,54:g},t(y,[2,111],{41:54,33:[1,57],34:[1,59],35:[1,55],38:[1,56],42:[1,58]}),{28:60,34:p,54:g},{33:[1,61],35:[1,62]},{28:63,34:p,54:g},{48:64,53:m},{53:[2,120]},{1:[2,5]},t(l,[2,12]),t(y,[2,17]),t(y,[2,18]),t(y,[2,22]),t(b,[2,122]),t(b,[2,123]),t(y,[2,46]),{34:[1,65]},{39:66,43:d,44:f,45:k},{34:[1,70]},{34:[1,71]},t(y,[2,112]),t(y,[2,30],{33:[1,72],35:[1,74],38:[1,73]}),{34:[1,75]},{34:[1,76],36:[1,77]},t(y,[2,23],{30:[1,78]}),t(u,[2,117]),t(y,[2,47],{33:[1,80],38:[1,79],42:[1,81]}),t(y,[2,48],{33:[1,83],35:[1,82],42:[1,84]}),t(_,[2,113]),t(_,[2,114]),t(_,[2,115]),t(y,[2,51],{35:[1,85],38:[1,86],42:[1,87]}),t(y,[2,62],{33:[1,90],35:[1,88],38:[1,89]}),{34:[1,91]},{39:92,43:d,44:f,45:k},{34:[1,93]},t(y,[2,25],{35:[1,94]}),{33:[1,95]},{33:[1,96]},{31:[1,97]},{39:98,43:d,44:f,45:k},{34:[1,99]},{34:[1,100]},{34:[1,101]},{34:[1,102]},{34:[1,103]},{34:[1,104]},{39:105,43:d,44:f,45:k},{34:[1,106]},{34:[1,107]},{39:108,43:d,44:f,45:k},{34:[1,109]},t(y,[2,31],{35:[1,111],38:[1,110]}),t(y,[2,32],{33:[1,113],35:[1,112]}),t(y,[2,33],{33:[1,114],38:[1,115]}),{34:[1,116],36:[1,117]},{34:[1,118]},{34:[1,119]},t(y,[2,24]),t(y,[2,49],{33:[1,120],42:[1,121]}),t(y,[2,53],{38:[1,122],42:[1,123]}),t(y,[2,63],{33:[1,125],38:[1,124]}),t(y,[2,50],{33:[1,126],42:[1,127]}),t(y,[2,55],{35:[1,128],42:[1,129]}),t(y,[2,66],{33:[1,131],35:[1,130]}),t(y,[2,52],{38:[1,132],42:[1,133]}),t(y,[2,54],{35:[1,134],42:[1,135]}),t(y,[2,67],{35:[1,137],38:[1,136]}),t(y,[2,64],{33:[1,139],38:[1,138]}),t(y,[2,65],{33:[1,141],35:[1,140]}),t(y,[2,68],{35:[1,143],38:[1,142]}),{39:144,43:d,44:f,45:k},{34:[1,145]},{34:[1,146]},{34:[1,147]},{34:[1,148]},{39:149,43:d,44:f,45:k},t(y,[2,26]),t(y,[2,27]),t(y,[2,28]),t(y,[2,29]),{34:[1,150]},{34:[1,151]},{39:152,43:d,44:f,45:k},{34:[1,153]},{39:154,43:d,44:f,45:k},{34:[1,155]},{34:[1,156]},{34:[1,157]},{34:[1,158]},{34:[1,159]},{34:[1,160]},{34:[1,161]},{39:162,43:d,44:f,45:k},{34:[1,163]},{34:[1,164]},{34:[1,165]},{39:166,43:d,44:f,45:k},{34:[1,167]},{39:168,43:d,44:f,45:k},{34:[1,169]},{34:[1,170]},{34:[1,171]},{39:172,43:d,44:f,45:k},{34:[1,173]},t(y,[2,37],{35:[1,174]}),t(y,[2,38],{38:[1,175]}),t(y,[2,36],{33:[1,176]}),t(y,[2,39],{35:[1,177]}),t(y,[2,34],{38:[1,178]}),t(y,[2,35],{33:[1,179]}),t(y,[2,60],{42:[1,180]}),t(y,[2,73],{33:[1,181]}),t(y,[2,61],{42:[1,182]}),t(y,[2,84],{38:[1,183]}),t(y,[2,74],{33:[1,184]}),t(y,[2,83],{38:[1,185]}),t(y,[2,59],{42:[1,186]}),t(y,[2,72],{33:[1,187]}),t(y,[2,58],{42:[1,188]}),t(y,[2,78],{35:[1,189]}),t(y,[2,71],{33:[1,190]}),t(y,[2,77],{35:[1,191]}),t(y,[2,57],{42:[1,192]}),t(y,[2,85],{38:[1,193]}),t(y,[2,56],{42:[1,194]}),t(y,[2,79],{35:[1,195]}),t(y,[2,80],{35:[1,196]}),t(y,[2,86],{38:[1,197]}),t(y,[2,70],{33:[1,198]}),t(y,[2,81],{38:[1,199]}),t(y,[2,69],{33:[1,200]}),t(y,[2,75],{35:[1,201]}),t(y,[2,76],{35:[1,202]}),t(y,[2,82],{38:[1,203]}),{34:[1,204]},{39:205,43:d,44:f,45:k},{34:[1,206]},{34:[1,207]},{39:208,43:d,44:f,45:k},{34:[1,209]},{34:[1,210]},{34:[1,211]},{34:[1,212]},{39:213,43:d,44:f,45:k},{34:[1,214]},{39:215,43:d,44:f,45:k},{34:[1,216]},{34:[1,217]},{34:[1,218]},{34:[1,219]},{34:[1,220]},{34:[1,221]},{34:[1,222]},{39:223,43:d,44:f,45:k},{34:[1,224]},{34:[1,225]},{34:[1,226]},{39:227,43:d,44:f,45:k},{34:[1,228]},{39:229,43:d,44:f,45:k},{34:[1,230]},{34:[1,231]},{34:[1,232]},{39:233,43:d,44:f,45:k},t(y,[2,40]),t(y,[2,42]),t(y,[2,41]),t(y,[2,43]),t(y,[2,45]),t(y,[2,44]),t(y,[2,101]),t(y,[2,102]),t(y,[2,99]),t(y,[2,100]),t(y,[2,104]),t(y,[2,103]),t(y,[2,108]),t(y,[2,107]),t(y,[2,106]),t(y,[2,105]),t(y,[2,110]),t(y,[2,109]),t(y,[2,98]),t(y,[2,97]),t(y,[2,96]),t(y,[2,95]),t(y,[2,93]),t(y,[2,94]),t(y,[2,92]),t(y,[2,91]),t(y,[2,90]),t(y,[2,89]),t(y,[2,87]),t(y,[2,88])],defaultActions:{9:[2,118],10:[2,1],11:[2,2],19:[2,3],27:[2,4],46:[2,120],47:[2,5]},parseError:function(t,e){if(e.recoverable)this.trace(t);else{var i=Error(t);throw i.hash=e,i}},parse:function(t){var e=this,i=[0],r=[],c=[null],a=[],s=this.table,n="",o=0,l=0,h=a.slice.call(arguments,1),m=Object.create(this.lexer),u={yy:{}};for(var y in this.yy)Object.prototype.hasOwnProperty.call(this.yy,y)&&(u.yy[y]=this.yy[y]);m.setInput(t,u.yy),u.yy.lexer=m,u.yy.parser=this,void 0===m.yylloc&&(m.yylloc={});var p=m.yylloc;a.push(p);var g=m.options&&m.options.ranges;"function"==typeof u.yy.parseError?this.parseError=u.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var b,d,f,k,_,$,x,E,v={};;){if(d=i[i.length-1],this.defaultActions[d]?f=this.defaultActions[d]:(null==b&&(b=function(){var t;return"number"!=typeof(t=r.pop()||m.lex()||1)&&(t instanceof Array&&(t=(r=t).pop()),t=e.symbols_[t]||t),t}()),f=s[d]&&s[d][b]),void 0===f||!f.length||!f[0]){var T="";for(_ in E=[],s[d])this.terminals_[_]&&_>2&&E.push("'"+this.terminals_[_]+"'");T=m.showPosition?"Parse error on line "+(o+1)+":\n"+m.showPosition()+"\nExpecting "+E.join(", ")+", got '"+(this.terminals_[b]||b)+"'":"Parse error on line "+(o+1)+": Unexpected "+(1==b?"end of input":"'"+(this.terminals_[b]||b)+"'"),this.parseError(T,{text:m.match,token:this.terminals_[b]||b,line:m.yylineno,loc:p,expected:E})}if(f[0]instanceof Array&&f.length>1)throw Error("Parse Error: multiple actions possible at state: "+d+", token: "+b);switch(f[0]){case 1:i.push(b),c.push(m.yytext),a.push(m.yylloc),i.push(f[1]),b=null,l=m.yyleng,n=m.yytext,o=m.yylineno,p=m.yylloc;break;case 2:if($=this.productions_[f[1]][1],v.$=c[c.length-$],v._$={first_line:a[a.length-($||1)].first_line,last_line:a[a.length-1].last_line,first_column:a[a.length-($||1)].first_column,last_column:a[a.length-1].last_column},g&&(v._$.range=[a[a.length-($||1)].range[0],a[a.length-1].range[1]]),void 0!==(k=this.performAction.apply(v,[n,l,o,u.yy,f[1],c,a].concat(h))))return k;$&&(i=i.slice(0,-1*$*2),c=c.slice(0,-1*$),a=a.slice(0,-1*$)),i.push(this.productions_[f[1]][0]),c.push(v.$),a.push(v._$),x=s[i[i.length-2]][i[i.length-1]],i.push(x);break;case 3:return!0}}return!0}};function x(){this.yy={}}return $.lexer={EOF:1,parseError:function(t,e){if(this.yy.parser)this.yy.parser.parseError(t,e);else throw Error(t)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,i=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var r=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),i.length-1&&(this.yylineno-=i.length-1);var c=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:i?(i.length===r.length?this.yylloc.first_column:0)+r[r.length-i.length].length-i[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[c[0],c[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var i,r,c;if(this.options.backtrack_lexer&&(c={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(c.yylloc.range=this.yylloc.range.slice(0))),(r=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=r.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:r?r[r.length-1].length-r[r.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],i=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i)return i;if(this._backtrack)for(var a in c)this[a]=c[a];return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var t,e,i,r,c=this._currentRules(),a=0;a<c.length;a++)if((i=this._input.match(this.rules[c[a]]))&&(!e||i[0].length>e[0].length)){if(e=i,r=a,this.options.backtrack_lexer){if(!1!==(t=this.test_match(i,c[a])))return t;if(!this._backtrack)return!1;e=!1;continue}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,c[r]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){return this.next()||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,e,i,r){switch(i){case 0:return this.begin("open_directive"),50;case 1:return this.begin("type_directive"),51;case 2:return this.popState(),this.begin("arg_directive"),9;case 3:return this.popState(),this.popState(),53;case 4:return 52;case 5:return this.begin("acc_title"),20;case 6:return this.popState(),"acc_title_value";case 7:return this.begin("acc_descr"),22;case 8:return this.popState(),"acc_descr_value";case 9:this.begin("acc_descr_multiline");break;case 10:case 34:case 38:this.popState();break;case 11:return"acc_descr_multiline_value";case 12:return 14;case 13:case 14:break;case 15:return 6;case 16:return 40;case 17:return 33;case 18:return 38;case 19:return 42;case 20:return 43;case 21:return 44;case 22:return 45;case 23:return 35;case 24:return 29;case 25:return 30;case 26:return 37;case 27:return 32;case 28:return 27;case 29:case 30:return 10;case 31:return 9;case 32:return"CARET";case 33:this.begin("options");break;case 35:return 13;case 36:return 36;case 37:this.begin("string");break;case 39:return 34;case 40:return 31;case 41:return 54;case 42:return 8}},rules:[/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:(\r?\n)+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:gitGraph\b)/i,/^(?:commit(?=\s|$))/i,/^(?:id:)/i,/^(?:type:)/i,/^(?:msg:)/i,/^(?:NORMAL\b)/i,/^(?:REVERSE\b)/i,/^(?:HIGHLIGHT\b)/i,/^(?:tag:)/i,/^(?:branch(?=\s|$))/i,/^(?:order:)/i,/^(?:merge(?=\s|$))/i,/^(?:cherry-pick(?=\s|$))/i,/^(?:checkout(?=\s|$))/i,/^(?:LR\b)/i,/^(?:BT\b)/i,/^(?::)/i,/^(?:\^)/i,/^(?:options\r?\n)/i,/^(?:[ \r\n\t]+end\b)/i,/^(?:[\s\S]+(?=[ \r\n\t]+end))/i,/^(?:["]["])/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[0-9]+(?=\s|$))/i,/^(?:\w([-\./\w]*[-\w])?)/i,/^(?:$)/i,/^(?:\s+)/i],conditions:{acc_descr_multiline:{rules:[10,11],inclusive:!1},acc_descr:{rules:[8],inclusive:!1},acc_title:{rules:[6],inclusive:!1},close_directive:{rules:[],inclusive:!1},arg_directive:{rules:[3,4],inclusive:!1},type_directive:{rules:[2,3],inclusive:!1},open_directive:{rules:[1],inclusive:!1},options:{rules:[34,35],inclusive:!1},string:{rules:[38,39],inclusive:!1},INITIAL:{rules:[0,5,7,9,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,36,37,40,41,42,43],inclusive:!0}}},x.prototype=$,$.Parser=x,new x}();a.parser=a;let s=(0,r.c)().gitGraph.mainBranchName,n=(0,r.c)().gitGraph.mainBranchOrder,o={},l=null,h={};h[s]={name:s,order:n};let m={};m[s]=l;let u=s,y="LR",p=0;function g(){return(0,r.y)({length:7})}let b={},d=function(t){if(void 0===m[t=r.e.sanitizeText(t,(0,r.c)())]){let e=Error('Trying to checkout branch which is not yet created. (Help try using "branch '+t+'")');throw e.hash={text:"checkout "+t,token:"checkout "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:['"branch '+t+'"']},e}{u=t;let i=m[u];l=o[i]}};function f(t,e,i){let r=t.indexOf(e);-1===r?t.push(i):t.splice(r,1,i)}let k=function(){let t=Object.keys(o).map(function(t){return o[t]});return t.forEach(function(t){r.l.debug(t.id)}),t.sort((t,e)=>t.seq-e.seq),t},_={NORMAL:0,REVERSE:1,HIGHLIGHT:2,MERGE:3,CHERRY_PICK:4},$={parseDirective:function(t,e,i){r.m.parseDirective(this,t,e,i)},getConfig:()=>(0,r.c)().gitGraph,setDirection:function(t){y=t},setOptions:function(t){r.l.debug("options str",t),t=(t=t&&t.trim())||"{}";try{b=JSON.parse(t)}catch(e){r.l.error("error while parsing gitGraph options",e.message)}},getOptions:function(){return b},commit:function(t,e,i,c){r.l.debug("Entering commit:",t,e,i,c),e=r.e.sanitizeText(e,(0,r.c)()),t=r.e.sanitizeText(t,(0,r.c)()),c=r.e.sanitizeText(c,(0,r.c)());let a={id:e||p+"-"+g(),message:t,seq:p++,type:i||_.NORMAL,tag:c||"",parents:null==l?[]:[l.id],branch:u};l=a,o[a.id]=a,m[u]=a.id,r.l.debug("in pushCommit "+a.id)},branch:function(t,e){if(void 0===m[t=r.e.sanitizeText(t,(0,r.c)())])m[t]=null!=l?l.id:null,h[t]={name:t,order:e?parseInt(e,10):null},d(t),r.l.debug("in createBranch");else{let i=Error('Trying to create an existing branch. (Help: Either use a new name if you want create a new branch or try using "checkout '+t+'")');throw i.hash={text:"branch "+t,token:"branch "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:['"checkout '+t+'"']},i}},merge:function(t,e,i,c){t=r.e.sanitizeText(t,(0,r.c)()),e=r.e.sanitizeText(e,(0,r.c)());let a=o[m[u]],s=o[m[t]];if(u===t){let n=Error('Incorrect usage of "merge". Cannot merge a branch to itself');throw n.hash={text:"merge "+t,token:"merge "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["branch abc"]},n}if(void 0!==a&&a){if(void 0===m[t]){let h=Error('Incorrect usage of "merge". Branch to be merged ('+t+") does not exist");throw h.hash={text:"merge "+t,token:"merge "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["branch "+t]},h}if(void 0!==s&&s){if(a===s){let y=Error('Incorrect usage of "merge". Both branches have same head');throw y.hash={text:"merge "+t,token:"merge "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["branch abc"]},y}if(e&&void 0!==o[e]){let b=Error('Incorrect usage of "merge". Commit with id:'+e+" already exists, use different custom Id");throw b.hash={text:"merge "+t+e+i+c,token:"merge "+t+e+i+c,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["merge "+t+" "+e+"_UNIQUE "+i+" "+c]},b}}else{let d=Error('Incorrect usage of "merge". Branch to be merged ('+t+") has no commits");throw d.hash={text:"merge "+t,token:"merge "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:['"commit"']},d}}else{let f=Error('Incorrect usage of "merge". Current branch ('+u+")has no commits");throw f.hash={text:"merge "+t,token:"merge "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["commit"]},f}let k={id:e||p+"-"+g(),message:"merged branch "+t+" into "+u,seq:p++,parents:[null==l?null:l.id,m[t]],branch:u,type:_.MERGE,customType:i,customId:!!e,tag:c||""};l=k,o[k.id]=k,m[u]=k.id,r.l.debug(m),r.l.debug("in mergeBranch")},cherryPick:function(t,e,i){if(r.l.debug("Entering cherryPick:",t,e,i),t=r.e.sanitizeText(t,(0,r.c)()),e=r.e.sanitizeText(e,(0,r.c)()),i=r.e.sanitizeText(i,(0,r.c)()),!t||void 0===o[t]){let c=Error('Incorrect usage of "cherryPick". Source commit id should exist and provided');throw c.hash={text:"cherryPick "+t+" "+e,token:"cherryPick "+t+" "+e,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["cherry-pick abc"]},c}let a=o[t],s=a.branch;if(a.type===_.MERGE){let n=Error('Incorrect usage of "cherryPick". Source commit should not be a merge commit');throw n.hash={text:"cherryPick "+t+" "+e,token:"cherryPick "+t+" "+e,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["cherry-pick abc"]},n}if(!e||void 0===o[e]){if(s===u){let h=Error('Incorrect usage of "cherryPick". Source commit is already on current branch');throw h.hash={text:"cherryPick "+t+" "+e,token:"cherryPick "+t+" "+e,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["cherry-pick abc"]},h}let y=o[m[u]];if(void 0===y||!y){let b=Error('Incorrect usage of "cherry-pick". Current branch ('+u+")has no commits");throw b.hash={text:"cherryPick "+t+" "+e,token:"cherryPick "+t+" "+e,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["cherry-pick abc"]},b}let d={id:p+"-"+g(),message:"cherry-picked "+a+" into "+u,seq:p++,parents:[null==l?null:l.id,a.id],branch:u,type:_.CHERRY_PICK,tag:i??"cherry-pick:"+a.id};l=d,o[d.id]=d,m[u]=d.id,r.l.debug(m),r.l.debug("in cherryPick")}},checkout:d,prettyPrint:function(){r.l.debug(o);let t=k()[0];!function t(e){let i=e.reduce((t,e)=>t.seq>e.seq?t:e,e[0]),c="";e.forEach(function(t){t===i?c+="	*":c+="	|"});let a=[c,i.id,i.seq];for(let s in m)m[s]===i.id&&a.push(s);if(r.l.debug(a.join(" ")),i.parents&&2==i.parents.length){let n=o[i.parents[0]];f(e,i,n),e.push(o[i.parents[1]])}else{if(0==i.parents.length)return;let l=o[i.parents];f(e,i,l)}t(e=function(t,e){let i=Object.create(null);return t.reduce((t,r)=>{let c=e(r);return i[c]||(i[c]=!0,t.push(r)),t},[])}(e,t=>t.id))}([t])},clear:function(){o={},l=null;let t=(0,r.c)().gitGraph.mainBranchName,e=(0,r.c)().gitGraph.mainBranchOrder;(m={})[t]=null,(h={})[t]={name:t,order:e},u=t,p=0,(0,r.v)()},getBranchesAsObjArray:function(){let t=Object.values(h).map((t,e)=>null!==t.order?t:{...t,order:parseFloat(`0.${e}`,10)}).sort((t,e)=>t.order-e.order).map(({name:t})=>({name:t}));return t},getBranches:function(){return m},getCommits:function(){return o},getCommitsArray:k,getCurrentBranch:function(){return u},getDirection:function(){return y},getHead:function(){return l},setAccTitle:r.s,getAccTitle:r.g,getAccDescription:r.a,setAccDescription:r.b,setDiagramTitle:r.r,getDiagramTitle:r.t,commitType:_},x={},E={NORMAL:0,REVERSE:1,HIGHLIGHT:2,MERGE:3,CHERRY_PICK:4},v={},T={},R=[],w=0,I=()=>{v={},T={},x={},w=0,R=[]},M=t=>{let e=document.createElementNS("http://www.w3.org/2000/svg","text");for(let i of"string"==typeof t?t.split(/\\n|\n|<br\s*\/?>/gi):Array.isArray(t)?t:[]){let r=document.createElementNS("http://www.w3.org/2000/svg","tspan");r.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),r.setAttribute("dy","1em"),r.setAttribute("x","0"),r.setAttribute("class","row"),r.textContent=i.trim(),e.appendChild(r)}return e},L=(t,e,i)=>{let c=(0,r.z)().gitGraph,a=t.append("g").attr("class","commit-bullets"),s=t.append("g").attr("class","commit-labels"),n=0,o=Object.keys(e),l=o.sort((t,i)=>e[t].seq-e[i].seq);l.forEach(t=>{let r=e[t],o=v[r.branch].pos,l=n+10;if(i){let h;let m=void 0!==r.customType&&""!==r.customType?r.customType:r.type;switch(m){case E.NORMAL:h="commit-normal";break;case E.REVERSE:h="commit-reverse";break;case E.HIGHLIGHT:h="commit-highlight";break;case E.MERGE:h="commit-merge";break;case E.CHERRY_PICK:h="commit-cherry-pick";break;default:h="commit-normal"}if(m===E.HIGHLIGHT){let u=a.append("rect");u.attr("x",l-10),u.attr("y",o-10),u.attr("height",20),u.attr("width",20),u.attr("class",`commit ${r.id} commit-highlight${v[r.branch].index%8} ${h}-outer`),a.append("rect").attr("x",l-6).attr("y",o-6).attr("height",12).attr("width",12).attr("class",`commit ${r.id} commit${v[r.branch].index%8} ${h}-inner`)}else if(m===E.CHERRY_PICK)a.append("circle").attr("cx",l).attr("cy",o).attr("r",10).attr("class",`commit ${r.id} ${h}`),a.append("circle").attr("cx",l-3).attr("cy",o+2).attr("r",2.75).attr("fill","#fff").attr("class",`commit ${r.id} ${h}`),a.append("circle").attr("cx",l+3).attr("cy",o+2).attr("r",2.75).attr("fill","#fff").attr("class",`commit ${r.id} ${h}`),a.append("line").attr("x1",l+3).attr("y1",o+1).attr("x2",l).attr("y2",o-5).attr("stroke","#fff").attr("class",`commit ${r.id} ${h}`),a.append("line").attr("x1",l-3).attr("y1",o+1).attr("x2",l).attr("y2",o-5).attr("stroke","#fff").attr("class",`commit ${r.id} ${h}`);else{let y=a.append("circle");if(y.attr("cx",l),y.attr("cy",o),y.attr("r",r.type===E.MERGE?9:10),y.attr("class",`commit ${r.id} commit${v[r.branch].index%8}`),m===E.MERGE){let p=a.append("circle");p.attr("cx",l),p.attr("cy",o),p.attr("r",6),p.attr("class",`commit ${h} ${r.id} commit${v[r.branch].index%8}`)}if(m===E.REVERSE){let g=a.append("path");g.attr("d",`M ${l-5},${o-5}L${l+5},${o+5}M${l-5},${o+5}L${l+5},${o-5}`).attr("class",`commit ${h} ${r.id} commit${v[r.branch].index%8}`)}}}if(T[r.id]={x:n+10,y:o},i){if(r.type!==E.CHERRY_PICK&&(r.customId&&r.type===E.MERGE||r.type!==E.MERGE)&&c.showCommitLabel){let b=s.append("g"),d=b.insert("rect").attr("class","commit-label-bkg"),f=b.append("text").attr("x",n).attr("y",o+25).attr("class","commit-label").text(r.id),k=f.node().getBBox();if(d.attr("x",n+10-k.width/2-2).attr("y",o+13.5).attr("width",k.width+4).attr("height",k.height+4),f.attr("x",n+10-k.width/2),c.rotateCommitLabel){let _=-7.5-(k.width+10)/25*9.5,$=10+k.width/25*8.5;b.attr("transform","translate("+_+", "+$+") rotate(-45, "+n+", "+o+")")}}if(r.tag){let x=s.insert("polygon"),R=s.append("circle"),I=s.append("text").attr("y",o-16).attr("class","tag-label").text(r.tag),M=I.node().getBBox();I.attr("x",n+10-M.width/2);let L=M.height/2,O=o-19.2;x.attr("class","tag-label-bkg").attr("points",`
          ${n-M.width/2-2},${O+2}
          ${n-M.width/2-2},${O-2}
          ${n+10-M.width/2-4},${O-L-2}
          ${n+10+M.width/2+4},${O-L-2}
          ${n+10+M.width/2+4},${O+L+2}
          ${n+10-M.width/2-4},${O+L+2}`),R.attr("cx",n-M.width/2+2).attr("cy",O).attr("r",1.5).attr("class","tag-hole")}}(n+=50)>w&&(w=n)})},O=(t,e,i)=>{let r=Object.keys(i),c=r.filter(r=>i[r].branch===e.branch&&i[r].seq>t.seq&&i[r].seq<e.seq);return c.length>0},A=(t,e,i=0)=>{let r=t+Math.abs(t-e)/2;return i>5?r:R.every(t=>Math.abs(t-r)>=10)?(R.push(r),r):A(t,e-Math.abs(t-e)/5,i+1)},C=(t,e,i,r)=>{let c;let a=T[e.id],s=T[i.id],n=O(e,i,r),o="",l="",h=0,m=0,u=v[i.branch].index;if(n){o="A 10 10, 0, 0, 0,",l="A 10 10, 0, 0, 1,",h=10,m=10,u=v[i.branch].index;let y=a.y<s.y?A(a.y,s.y):A(s.y,a.y);c=a.y<s.y?`M ${a.x} ${a.y} L ${a.x} ${y-h} ${o} ${a.x+m} ${y} L ${s.x-h} ${y} ${l} ${s.x} ${y+m} L ${s.x} ${s.y}`:`M ${a.x} ${a.y} L ${a.x} ${y+h} ${l} ${a.x+m} ${y} L ${s.x-h} ${y} ${o} ${s.x} ${y-m} L ${s.x} ${s.y}`}else a.y<s.y&&(o="A 20 20, 0, 0, 0,",h=20,m=20,u=v[i.branch].index,c=`M ${a.x} ${a.y} L ${a.x} ${s.y-h} ${o} ${a.x+m} ${s.y} L ${s.x} ${s.y}`),a.y>s.y&&(o="A 20 20, 0, 0, 0,",h=20,m=20,u=v[e.branch].index,c=`M ${a.x} ${a.y} L ${s.x-h} ${a.y} ${o} ${s.x} ${a.y-m} L ${s.x} ${s.y}`),a.y===s.y&&(u=v[e.branch].index,c=`M ${a.x} ${a.y} L ${a.x} ${s.y-h} ${o} ${a.x+m} ${s.y} L ${s.x} ${s.y}`);t.append("path").attr("d",c).attr("class","arrow arrow"+u%8)},S=(t,e)=>{let i=t.append("g").attr("class","commit-arrows");Object.keys(e).forEach(t=>{let r=e[t];r.parents&&r.parents.length>0&&r.parents.forEach(t=>{C(i,e[t],r,e)})})},G=(t,e)=>{let i=(0,r.z)().gitGraph,c=t.append("g");e.forEach((t,e)=>{let r=e%8,a=v[t.name].pos,s=c.append("line");s.attr("x1",0),s.attr("y1",a),s.attr("x2",w),s.attr("y2",a),s.attr("class","branch branch"+r),R.push(a);let n=t.name,o=M(n),l=c.insert("rect"),h=c.insert("g").attr("class","branchLabel"),m=h.insert("g").attr("class","label branch-label"+r);m.node().appendChild(o);let u=o.getBBox();l.attr("class","branchLabelBkg label"+r).attr("rx",4).attr("ry",4).attr("x",-u.width-4-(!0===i.rotateCommitLabel?30:0)).attr("y",-u.height/2+8).attr("width",u.width+18).attr("height",u.height+4),m.attr("transform","translate("+(-u.width-14-(!0===i.rotateCommitLabel?30:0))+", "+(a-u.height/2-1)+")"),l.attr("transform","translate(-19, "+(a-u.height/2)+")")})},P=t=>`
  .commit-id,
  .commit-msg,
  .branch-label {
    fill: lightgrey;
    color: lightgrey;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
  ${[0,1,2,3,4,5,6,7].map(e=>`
        .branch-label${e} { fill: ${t["gitBranchLabel"+e]}; }
        .commit${e} { stroke: ${t["git"+e]}; fill: ${t["git"+e]}; }
        .commit-highlight${e} { stroke: ${t["gitInv"+e]}; fill: ${t["gitInv"+e]}; }
        .label${e}  { fill: ${t["git"+e]}; }
        .arrow${e} { stroke: ${t["git"+e]}; }
        `).join("\n")}

  .branch {
    stroke-width: 1;
    stroke: ${t.lineColor};
    stroke-dasharray: 2;
  }
  .commit-label { font-size: ${t.commitLabelFontSize}; fill: ${t.commitLabelColor};}
  .commit-label-bkg { font-size: ${t.commitLabelFontSize}; fill: ${t.commitLabelBackground}; opacity: 0.5; }
  .tag-label { font-size: ${t.tagLabelFontSize}; fill: ${t.tagLabelColor};}
  .tag-label-bkg { fill: ${t.tagLabelBackground}; stroke: ${t.tagLabelBorder}; }
  .tag-hole { fill: ${t.textColor}; }

  .commit-merge {
    stroke: ${t.primaryColor};
    fill: ${t.primaryColor};
  }
  .commit-reverse {
    stroke: ${t.primaryColor};
    fill: ${t.primaryColor};
    stroke-width: 3;
  }
  .commit-highlight-outer {
  }
  .commit-highlight-inner {
    stroke: ${t.primaryColor};
    fill: ${t.primaryColor};
  }

  .arrow { stroke-width: 8; stroke-linecap: round; fill: none}
  .gitTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.textColor};
  }
`,N={parser:a,db:$,renderer:{draw:function(t,e,i,a){I();let s=(0,r.z)(),n=s.gitGraph;r.l.debug("in gitgraph renderer",t+"\n","id:",e,i),x=a.db.getCommits();let o=a.db.getBranchesAsObjArray(),l=0;o.forEach((t,e)=>{v[t.name]={pos:l,index:e},l+=50+(n.rotateCommitLabel?40:0)});let h=(0,c.Ys)(`[id="${e}"]`);L(h,x,!1),n.showBranches&&G(h,o),S(h,x),L(h,x,!0),r.u.insertTitle(h,"gitTitleText",n.titleTopMargin,a.db.getDiagramTitle()),(0,r.A)(void 0,h,n.diagramPadding,n.useMaxWidth??s.useMaxWidth)}},styles:P}}}]);