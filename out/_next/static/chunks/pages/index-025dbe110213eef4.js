(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{705:function(){},9128:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3035)}])},2559:function(e,t,n){var i=n(2667);n(705);var r=n(959),a=r&&"object"==typeof r&&"default"in r?r:{default:r};function o(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var s=void 0!==i&&i.env&&!0,l=function(e){return"[object String]"===Object.prototype.toString.call(e)},c=function(){function e(e){var t=void 0===e?{}:e,n=t.name,i=void 0===n?"stylesheet":n,r=t.optimizeForSpeed,a=void 0===r?s:r;d(l(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#"+i+"-deleted-rule____{}",d("boolean"==typeof a,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=a,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var o=document.querySelector('meta[property="csp-nonce"]');this._nonce=o?o.getAttribute("content"):null}var t,n=e.prototype;return n.setOptimizeForSpeed=function(e){d("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),d(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},n.isOptimizeForSpeed=function(){return this._optimizeForSpeed},n.inject=function(){var e=this;if(d(!this._injected,"sheet already injected"),this._injected=!0,this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(s||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"==typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},n.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},n.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},n.insertRule=function(e,t){if(d(l(e),"`insertRule` accepts only strings"),this._optimizeForSpeed){var n=this.getSheet();"number"!=typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(i){return s||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var r=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,r))}return this._rulesCount++},n.replaceRule=function(e,t){if(this._optimizeForSpeed){var n=this.getSheet();if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(i){s||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var r=this._tags[e];d(r,"old rule at index `"+e+"` not found"),r.textContent=t}return e},n.deleteRule=function(e){if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];d(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},n.flush=function(){this._injected=!1,this._rulesCount=0,this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]},n.cssRules=function(){var e=this;return this._tags.reduce(function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[])},n.makeStyleTag=function(e,t,n){t&&d(l(t),"makeStyleTag accepts only strings as second parameter");var i=document.createElement("style");this._nonce&&i.setAttribute("nonce",this._nonce),i.type="text/css",i.setAttribute("data-"+e,""),t&&i.appendChild(document.createTextNode(t));var r=document.head||document.getElementsByTagName("head")[0];return n?r.insertBefore(i,n):r.appendChild(i),i},o(e.prototype,[{key:"length",get:function(){return this._rulesCount}}]),t&&o(e,t),e}();function d(e,t){if(!e)throw Error("StyleSheet: "+t+".")}var u=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0},h={};function p(e,t){if(!t)return"jsx-"+e;var n=String(t),i=e+n;return h[i]||(h[i]="jsx-"+u(e+"-"+n)),h[i]}function m(e,t){var n=e+t;return h[n]||(h[n]=t.replace(/__jsx-style-dynamic-selector/g,e)),h[n]}var f=function(){function e(e){var t=void 0===e?{}:e,n=t.styleSheet,i=void 0===n?null:n,r=t.optimizeForSpeed,a=void 0!==r&&r;this._sheet=i||new c({name:"styled-jsx",optimizeForSpeed:a}),this._sheet.inject(),i&&"boolean"==typeof a&&(this._sheet.setOptimizeForSpeed(a),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer||(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var n=this.getIdAndRules(e),i=n.styleId,r=n.rules;if(i in this._instancesCounts){this._instancesCounts[i]+=1;return}var a=r.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return -1!==e});this._indices[i]=a,this._instancesCounts[i]=1},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var i=this._fromServer&&this._fromServer[n];i?(i.parentNode.removeChild(i),delete this._fromServer[n]):(this._indices[n].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return n[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return Boolean(e[1])}))},t.styles=function(e){var t,n;return t=this.cssRules(),void 0===(n=e)&&(n={}),t.map(function(e){var t=e[0],i=e[1];return a.default.createElement("style",{id:"__"+t,key:"__"+t,nonce:n.nonce?n.nonce:void 0,dangerouslySetInnerHTML:{__html:i}})})},t.getIdAndRules=function(e){var t=e.children,n=e.dynamic,i=e.id;if(n){var r=p(i,n);return{styleId:r,rules:Array.isArray(t)?t.map(function(e){return m(r,e)}):[m(r,t)]}}return{styleId:p(i),rules:Array.isArray(t)?t:[t]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})},e}(),g=r.createContext(null);g.displayName="StyleSheetContext";var x=a.default.useInsertionEffect||a.default.useLayoutEffect,_=new f;function v(e){var t=_||r.useContext(g);return t&&x(function(){return t.add(e),function(){t.remove(e)}},[e.id,String(e.dynamic)]),null}v.dynamic=function(e){return e.map(function(e){return p(e[0],e[1])}).join(" ")},t.style=v},7754:function(e,t,n){"use strict";e.exports=n(2559).style},6408:function(e,t,n){"use strict";var i=n(1527);n(959);let r={logo:(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",fontWeight:700,letterSpacing:"2px"},children:[(0,i.jsx)("img",{src:"https://quak.com.pl/quak_logo_72x72.png",alt:"QUAK Logo",width:34}),"\xa0QUAK"]}),primaryHue:320,head:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,i.jsx)("meta",{property:"og:title",content:"QUAK"}),(0,i.jsx)("meta",{property:"og:description",content:"QUAK Kacper Walczak company website"})]}),search:{placeholder:"Search..."},banner:{text:"QUAK \uD83D\uDE80 Programming, Philosophy, Knowledge"},project:{link:"https://github.com/Walikuperek/quak-docs"},docsRepositoryBase:"https://github.com/Walikuperek/quak-docs",footer:{text:"QUAK Kacper Walczak \xa9 ".concat(new Date().getFullYear())}};t.Z=r},3035:function(e,t,n){"use strict";n.r(t);var i=n(1527),r=n(7754),a=n.n(r),o=n(6321),s=n(573),l=n(6408);n(8063);var c=n(6736);n(6484);var d=n(7233);n(959);var u=n(94);let h={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,c.ah)(),e.components);return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)},pageOpts:{filePath:"pages/index.mdx",route:"/",frontMatter:{title:"QUAK"},headings:[{depth:1,value:"Company that makes things",id:"company-that-makes-things"},{depth:2,value:"Programming don't have to be hard",id:"programming-dont-have-to-be-hard"},{depth:2,value:"QUAK Libraries",id:"quak-libraries"}],timestamp:1687212443e3,pageMap:[{kind:"Meta",data:{index:{title:"Home",type:"page",theme:{layout:"full"}},libraries:{title:"Libraries",type:"page"},learn:{title:"Learn",type:"page"},about:{title:"About",type:"page"},contact:{title:"Contact ↗",type:"page",href:"https://twitter.com/shuding_",newWindow:!0}}},{kind:"MdxPage",name:"about",route:"/about"},{kind:"MdxPage",name:"index",route:"/",frontMatter:{title:"QUAK"}},{kind:"Folder",name:"learn",route:"/learn",children:[{kind:"MdxPage",name:"ai",route:"/learn/ai"},{kind:"MdxPage",name:"backend",route:"/learn/backend"},{kind:"Folder",name:"frontend",route:"/learn/frontend",children:[{kind:"Folder",name:"angular",route:"/learn/frontend/angular",children:[{kind:"MdxPage",name:"state-management",route:"/learn/frontend/angular/state-management"},{kind:"Meta",data:{"state-management":"State Management"}}]}]},{kind:"MdxPage",name:"frontend",route:"/learn/frontend"},{kind:"MdxPage",name:"philosophy",route:"/learn/philosophy"},{kind:"Meta",data:{ai:"Ai",backend:"Backend",frontend:"Frontend",philosophy:"Philosophy"}}]},{kind:"Folder",name:"libraries",route:"/libraries",children:[{kind:"MdxPage",name:"qstore",route:"/libraries/qstore"},{kind:"MdxPage",name:"qtheme",route:"/libraries/qtheme"},{kind:"Meta",data:{qstore:"Qstore",qtheme:"Qtheme"}}]}],flexsearch:{codeblocks:!0},title:"QUAK"},pageNextRoute:"/",nextraLayout:s.ZP,themeConfig:l.Z};function p(e){let t=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",strong:"strong",code:"code"},(0,c.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a(),{id:"f4cdbc560219a9fe",children:"body{background:-webkit-linear-gradient(top,hsla(0,0%,100%,0)0,#fff min(110vw,800px)),fixed -webkit-repeating-radial-gradient(50%min(-webkit-calc(50vw + 3.5rem),-webkit-calc(300px + 5rem)),circle,#f5f5f5 0,#fff 40px);background:-moz-linear-gradient(top,hsla(0,0%,100%,0)0,#fff min(110vw,800px)),fixed -moz-repeating-radial-gradient(50%min(-moz-calc(50vw + 3.5rem),-moz-calc(300px + 5rem)),circle,#f5f5f5 0,#fff 40px);background:-o-linear-gradient(top,hsla(0,0%,100%,0)0,#fff min(110vw,800px)),fixed -o-repeating-radial-gradient(50%min(calc(50vw + 3.5rem),calc(300px + 5rem)),circle,#f5f5f5 0,#fff 40px);background:linear-gradient(180deg,hsla(0,0%,100%,0)0,#fff min(110vw,800px)),fixed repeating-radial-gradient(circle at 50%min(calc(50vw + 3.5rem),calc(300px + 5rem)),#f5f5f5 0,#fff 40px)}.dark body{background:-webkit-linear-gradient(bottom,hsla(0,0%,100%,.2)0,#000 min(110vw,800px)),fixed -webkit-repeating-radial-gradient(50%min(-webkit-calc(50vw + 3.5rem),-webkit-calc(300px + 5rem)),circle,#050505 0,#000 40px);background:-moz-linear-gradient(bottom,hsla(0,0%,100%,.2)0,#000 min(110vw,800px)),fixed -moz-repeating-radial-gradient(50%min(-moz-calc(50vw + 3.5rem),-moz-calc(300px + 5rem)),circle,#050505 0,#000 40px);background:-o-linear-gradient(bottom,hsla(0,0%,100%,.2)0,#000 min(110vw,800px)),fixed -o-repeating-radial-gradient(50%min(calc(50vw + 3.5rem),calc(300px + 5rem)),circle,#050505 0,#000 40px);background:linear-gradient(0deg,hsla(0,0%,100%,.2)0,#000 min(110vw,800px)),fixed repeating-radial-gradient(circle at 50%min(calc(50vw + 3.5rem),calc(300px + 5rem)),#050505 0,#000 40px)}.w-100{width:100%}.w-50{width:50%}.flex{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.flex-row{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.align-center{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.justify-center{-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.container{width:100%;max-width:1200px}.text-muted{color:#999}main{text-align:center}"}),"\n",(0,i.jsx)(t.h1,{children:"Company that makes things"}),"\n",(0,i.jsx)("em",{className:"jsx-f4cdbc560219a9fe",children:"QUAK - quickly understand another key (where key is the answer)"}),"\n",(0,i.jsx)(t.h2,{id:"programming-dont-have-to-be-hard",children:"Programming don't have to be hard"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)("span",{class:"text-muted",className:"jsx-f4cdbc560219a9fe",children:"Click"})," ",(0,i.jsx)(t.a,{href:"/learn",children:"LEARN"})," ",(0,i.jsx)("span",{class:"text-muted",className:"jsx-f4cdbc560219a9fe",children:" in the navbar and start improving yourself"})]}),"\n",(0,i.jsx)(d.G,{chart:"flowchart TD\n    C{QUAK}\n    C -->|Frontend| D[Vanilla, Angular, React]\n    C -->|Backend| E[Node.js, Python]\n    C -->|Philosophy| F[DDD, events...]\n    C -->|AI| G[Computer power]"}),"\n",(0,i.jsx)(t.h2,{id:"quak-libraries",children:"QUAK Libraries"}),"\n","\n",(0,i.jsx)(u.UW,{emoji:"\uD83D\uDC7E",children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"QUAK"})," is providing libraries with framework agnostic aproach."]})}),"\n",(0,i.jsxs)(t.p,{children:["Visit NPM and search for ",(0,i.jsx)(t.code,{children:"@quak.lib/"})," to find js libraries or click ",(0,i.jsx)(t.a,{href:"https://www.npmjs.com/~quak.lib",children:"@quak.lib account"})," to see list of all."]})]})}t.default=(0,o.j)(h)}},function(e){e.O(0,[774,882,201,727,888,179],function(){return e(e.s=9128)}),_N_E=e.O()}]);