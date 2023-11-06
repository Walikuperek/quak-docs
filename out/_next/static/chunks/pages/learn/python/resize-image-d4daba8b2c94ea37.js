(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8295],{2343:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/learn/python/resize-image",function(){return n(7434)}])},7434:function(e,t,n){"use strict";n.r(t),n.d(t,{__toc:function(){return c}});var r=n(1527),a=n(4980),i=n(6351),s=n(4143);n(9015);var l=n(9741),o=n(3314);n(235);var d=n(2685);let c=[{depth:2,value:"How to resize image with Python?",id:"how-to-resize-image-with-python"},{depth:3,value:"Install PIL library",id:"install-pil-library"},{depth:3,value:"Resize image",id:"resize-image"}];function _createMdxContent(e){let t=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",h3:"h3",pre:"pre",code:"code",span:"span"},(0,l.a)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{children:"Resize image with Python"}),"\n",(0,r.jsx)("section",{className:"header__height w-full rounded-2xl bg-blue-900 bg-opacity-10 border-2 border-blue-500",children:(0,r.jsxs)("article",{className:"flex flex-col align-between h-full relative",children:[(0,r.jsx)("div",{className:"absolute top-0 left-0 p-2",children:(0,r.jsx)(d.V,{})}),(0,r.jsxs)("section",{className:"content flex align-center justify-center gap-3 h-full overflow-hidden",children:[(0,r.jsx)("div",{className:"bg-pink-600 animate-bounce delay-700 h-20 w-20 p-1 mt-20 text-white font-bold",children:"200x200"}),(0,r.jsx)("div",{className:"bg-pink-600 animate-bounce h-40 w-40 p-1 mt-20 text-white font-bold",children:"400x400"})]}),(0,r.jsxs)("header",{className:"px-4 pb-4 pt-4",children:[(0,r.jsx)("p",{className:"text-right mt-2 text-lg text-gray-500",children:"Kacper Walczak \xb7 28-10-2023"}),(0,r.jsxs)("h1",{className:"text-2xl font-bold mb-3 border-b-2 border-b-blue-200",children:["Resize ",(0,r.jsx)("b",{children:"img"})," with PIL library"]}),(0,r.jsx)("p",{className:"mt-2 text-lg",children:"Get to know how to use PIL library"}),(0,r.jsx)("p",{className:"text-lg",children:"for Python img resize solution."})]})]})}),"\n",(0,r.jsx)(t.h2,{id:"how-to-resize-image-with-python",children:"How to resize image with Python?"}),"\n",(0,r.jsx)(t.p,{children:"You can use PIL library to resize your images. PIL is a Python Imaging Library. It is free and open-source library. It supports many file formats and provides powerful image processing and graphics capabilities."}),"\n",(0,r.jsx)(t.p,{children:"Other libraries that you can use to resize images are:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"OpenCV"}),"\n",(0,r.jsx)(t.li,{children:"Scikit-image"}),"\n",(0,r.jsx)(t.li,{children:"Python Wand"}),"\n",(0,r.jsx)(t.li,{children:"PythonMagick"}),"\n",(0,r.jsx)(t.li,{children:"Pyvips"}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"install-pil-library",children:"Install PIL library"}),"\n",(0,r.jsx)(t.pre,{"data-language":"bash","data-theme":"default",children:(0,r.jsx)(t.code,{"data-language":"bash","data-theme":"default",children:(0,r.jsxs)(t.span,{className:"line",children:[(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"pip"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"install"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"Pillow"})]})})}),"\n",(0,r.jsx)(t.h3,{id:"resize-image",children:"Resize image"}),"\n",(0,r.jsx)(t.pre,{"data-language":"python","data-theme":"default",children:(0,r.jsxs)(t.code,{"data-language":"python","data-theme":"default",children:[(0,r.jsxs)(t.span,{className:"line",children:[(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" PIL "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" Image"})]}),"\n",(0,r.jsx)(t.span,{className:"line",children:" "}),"\n",(0,r.jsx)(t.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(t.span,{className:"line",children:[(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"class"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"ImageResizer"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:":"})]}),"\n",(0,r.jsxs)(t.span,{className:"line",children:[(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"@"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"staticmethod"})]}),"\n",(0,r.jsxs)(t.span,{className:"line",children:[(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"def"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"resize"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-parameter)"},children:"file_path"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"str"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-parameter)"},children:"width"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"100"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-parameter)"},children:"height"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"100"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:"->"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" Image:"})]}),"\n",(0,r.jsxs)(t.span,{className:"line",children:[(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"        image "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" Image"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"open"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:"(file_path)"})]}),"\n",(0,r.jsxs)(t.span,{className:"line",children:[(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"        new_image "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" image"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"resize"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:"((width, height))"})]}),"\n",(0,r.jsxs)(t.span,{className:"line",children:[(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" new_image"})]}),"\n",(0,r.jsx)(t.span,{className:"line",children:" "}),"\n",(0,r.jsx)(t.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(t.span,{className:"line",children:[(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"__name__"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"=="}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"__main__"'}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"})]}),"\n",(0,r.jsxs)(t.span,{className:"line",children:[(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    new_img "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" ImageResizer"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"resize"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:"(file_path"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"dalle_onion_img.png"'}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:", width"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"200"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:", height"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"200"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:")"})]}),"\n",(0,r.jsxs)(t.span,{className:"line",children:[(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    new_img"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"save"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:"("}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"f"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"img_resized(x:'}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"{200}"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:",y:"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"{200}"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:').png"'}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:")"})]})]})}),"\n",(0,r.jsx)(t.p,{children:"That's it! Now you can use this code to resize your images."}),"\n",(0,r.jsx)("section",{className:"rounded-2xl bg-lines flex mt-10 mb-20 h-20 w-full"}),"\n",(0,r.jsx)(o.K,{})]})}let h={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,l.a)(),e.components);return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/learn/python/resize-image.mdx",route:"/learn/python/resize-image",timestamp:169860836e4,pageMap:[{kind:"Meta",data:{index:{title:"Home",type:"page",theme:{layout:"full"}},libraries:{title:"Libraries",type:"page"},learn:{title:"Learn",type:"page",theme:{layout:"full"}},portfolio:{title:"Portfolio",type:"page",theme:{layout:"full"}},contact:{title:"Contact",type:"page"},useful:{title:"Useful",display:"hidden",type:"page"}}},{kind:"MdxPage",name:"contact",route:"/contact"},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"learn",route:"/learn",children:[{kind:"Meta",data:{index:{title:"Learn",display:"hidden"},"-":{type:"separator",title:"Categories"},backend:"Backend",frontend:"Frontend",cloud:"Cloud","--":{type:"separator",title:"Tags"},angular:"Angular",architecture:"Architecture",bun:"Bun","express-js":"Express JS","google-cloud-platform":"Google Cloud Platform",javascript:"JavaScript","nest-js":"Nest JS","next-js":"Next.js",node:"Node",python:"Python",react:"React",typescript:"TypeScript"}},{kind:"Folder",name:"angular",route:"/learn/angular",children:[{kind:"Meta",data:{"state-management":{title:"State management in Angular",display:"hidden",theme:{layout:"default",sidebar:!1}}}},{kind:"MdxPage",name:"state-management",route:"/learn/angular/state-management"}]},{kind:"MdxPage",name:"angular",route:"/learn/angular"},{kind:"Folder",name:"architecture",route:"/learn/architecture",children:[{kind:"Meta",data:{"drd-frontend":{title:"DRD Frontend",display:"hidden",theme:{layout:"default",sidebar:!1}}}},{kind:"MdxPage",name:"drd-frontend",route:"/learn/architecture/drd-frontend"}]},{kind:"MdxPage",name:"architecture",route:"/learn/architecture"},{kind:"MdxPage",name:"backend",route:"/learn/backend"},{kind:"Folder",name:"bun",route:"/learn/bun",children:[{kind:"Meta",data:{"build-http-server":{title:"Build HTTP with Bun",display:"hidden",theme:{layout:"default",sidebar:!1}}}},{kind:"MdxPage",name:"build-http-server",route:"/learn/bun/build-http-server"}]},{kind:"MdxPage",name:"bun",route:"/learn/bun"},{kind:"MdxPage",name:"cloud",route:"/learn/cloud"},{kind:"Folder",name:"express-js",route:"/learn/express-js",children:[{kind:"Meta",data:{}}]},{kind:"MdxPage",name:"express-js",route:"/learn/express-js"},{kind:"MdxPage",name:"frontend",route:"/learn/frontend"},{kind:"Folder",name:"google-cloud-platform",route:"/learn/google-cloud-platform",children:[{kind:"Meta",data:{"running-a-basic-server":{title:"Running a basic server",display:"hidden",theme:{layout:"default",sidebar:!1}}}},{kind:"MdxPage",name:"running-a-basic-server",route:"/learn/google-cloud-platform/running-a-basic-server"}]},{kind:"MdxPage",name:"google-cloud-platform",route:"/learn/google-cloud-platform"},{kind:"MdxPage",name:"index",route:"/learn"},{kind:"Folder",name:"javascript",route:"/learn/javascript",children:[{kind:"Meta",data:{"light-dark":{title:"Light/Dark",display:"hidden",theme:{layout:"default",sidebar:!1}}}},{kind:"MdxPage",name:"light-dark",route:"/learn/javascript/light-dark"}]},{kind:"MdxPage",name:"javascript",route:"/learn/javascript"},{kind:"MdxPage",name:"nest-js",route:"/learn/nest-js"},{kind:"MdxPage",name:"next-js",route:"/learn/next-js"},{kind:"MdxPage",name:"node",route:"/learn/node"},{kind:"Folder",name:"python",route:"/learn/python",children:[{kind:"Meta",data:{"resize-image":{title:"Resize image",display:"hidden",theme:{layout:"default",sidebar:!1}}}},{kind:"MdxPage",name:"resize-image",route:"/learn/python/resize-image"}]},{kind:"MdxPage",name:"python",route:"/learn/python"},{kind:"MdxPage",name:"react",route:"/learn/react"},{kind:"MdxPage",name:"typescript",route:"/learn/typescript"}]},{kind:"MdxPage",name:"learn",route:"/learn"},{kind:"Folder",name:"libraries",route:"/libraries",children:[{kind:"MdxPage",name:"qstore",route:"/libraries/qstore"},{kind:"MdxPage",name:"qtheme",route:"/libraries/qtheme"},{kind:"Meta",data:{qstore:"Qstore",qtheme:"Qtheme"}}]},{kind:"Folder",name:"portfolio",route:"/portfolio",children:[{kind:"Meta",data:{index:{title:"Portfolio",display:"hidden"},"-":{type:"separator",title:"Games"},adventurer:"Adventurer",quakky:"Quakky","retro-games":"Retro games","--":{type:"separator",title:"Projects"},"creativo-app":"Creativo App","psy-app":"Psy App","shop-app":"Shop App","tech-app":"Tech App",wrh:"WRH Website","---":{type:"separator",title:"Platform"},qchat:"Qchat",qcrypto:"Qcrypto",qgames:"Qgames",qwallet:"Qwallet"}},{kind:"MdxPage",name:"adventurer",route:"/portfolio/adventurer"},{kind:"MdxPage",name:"creativo-app",route:"/portfolio/creativo-app"},{kind:"MdxPage",name:"index",route:"/portfolio"},{kind:"MdxPage",name:"psy-app",route:"/portfolio/psy-app"},{kind:"MdxPage",name:"qchat",route:"/portfolio/qchat"},{kind:"MdxPage",name:"qcrypto",route:"/portfolio/qcrypto"},{kind:"MdxPage",name:"qgames",route:"/portfolio/qgames"},{kind:"MdxPage",name:"quakky",route:"/portfolio/quakky"},{kind:"MdxPage",name:"qwallet",route:"/portfolio/qwallet"},{kind:"MdxPage",name:"retro-games",route:"/portfolio/retro-games"},{kind:"MdxPage",name:"shop-app",route:"/portfolio/shop-app"},{kind:"MdxPage",name:"tech-app",route:"/portfolio/tech-app"},{kind:"MdxPage",name:"wrh",route:"/portfolio/wrh"}]},{kind:"MdxPage",name:"portfolio",route:"/portfolio"},{kind:"Folder",name:"useful",route:"/useful",children:[{kind:"Meta",data:{valentines:{title:"Valentines Card",display:"hidden",theme:{layout:"default",sidebar:!1}}}},{kind:"MdxPage",name:"valentines",route:"/useful/valentines"}]},{kind:"MdxPage",name:"useful",route:"/useful"}],flexsearch:{codeblocks:!0},title:"Resize image with Python",headings:c},pageNextRoute:"/learn/python/resize-image",nextraLayout:i.ZP,themeConfig:s.Z};t.default=(0,a.j)(h)},8188:function(e,t,n){"use strict";n.d(t,{z:function(){return HeaderText}});var r=n(1527),a=n(9575);function HeaderText(e){let{color:t,size:n,children:i}=e,s="";t&&(s=a.O[t]),s=" mb-2 font-bold "+s;let l={h1:()=>(0,r.jsx)("h1",{className:"text-4xl"+s,children:i}),h2:()=>(0,r.jsx)("h2",{className:"text-4xl"+s,children:i}),h3:()=>(0,r.jsx)("h3",{className:"text-lg"+s,children:i}),h4:()=>(0,r.jsx)("h4",{className:"text-base"+s,children:i}),h5:()=>(0,r.jsx)("h5",{className:"text-sm"+s,children:i}),h6:()=>(0,r.jsx)("h6",{className:"text-xs"+s,children:i})}[n||"h1"];return(0,r.jsx)(l,{})}},3314:function(e,t,n){"use strict";n.d(t,{K:function(){return LatestReadings}});var r=n(1527),a=n(8188),i=n(4505),s=n(283);function LatestReadings(){let e={backend:e=>(0,r.jsxs)("a",{href:e.link,className:"rounded-2xl p-2 bg-violet-400 bg-opacity-10 border-solid border-2 border-violet-900 hover:border-violet-500 hover:bg-violet-300 hover:text-black hover:cursor-pointer w-full flex flex-col align-center gap-3",children:[(0,r.jsxs)("div",{className:"flex flex-row align-center gap-2 justify-between",children:[e.tag,(0,r.jsx)("p",{className:"text-right mt-2 text-lg text-gray-500",children:e.createdAt})]}),(0,r.jsx)("b",{className:"font-bold text-xl border-b-2 border-b-violet-500",children:e.title}),(0,r.jsx)(i.x,{textLines:e.descriptionTextLines})]},e.title),frontend:e=>(0,r.jsxs)("a",{href:e.link,className:"rounded-2xl p-2 bg-fuchsia-400 bg-opacity-10 border-solid border-2 border-fuchsia-900 hover:border-fuchsia-500 hover:bg-fuchsia-300 hover:text-black hover:cursor-pointer w-full flex flex-col align-center gap-3",children:[(0,r.jsxs)("div",{className:"flex flex-row align-center gap-2 justify-between",children:[e.tag,(0,r.jsx)("p",{className:"text-right mt-2 text-lg text-gray-500",children:e.createdAt})]}),(0,r.jsx)("b",{className:"font-bold text-xl border-b-2 border-b-fuchsia-500",children:e.title}),(0,r.jsx)(i.x,{textLines:e.descriptionTextLines})]},e.title),cloud:e=>(0,r.jsxs)("a",{href:e.link,className:"rounded-2xl p-2 bg-sky-400 bg-opacity-10 border-solid border-2 border-sky-900 hover:border-sky-500 hover:bg-sky-300 hover:text-black hover:cursor-pointer w-full flex flex-col align-center gap-3",children:[(0,r.jsxs)("div",{className:"flex flex-row align-center gap-2 justify-between",children:[e.tag,(0,r.jsx)("p",{className:"text-right mt-2 text-lg text-gray-500",children:e.createdAt})]}),(0,r.jsx)("b",{className:"font-bold text-xl border-b-2 border-b-sky-500",children:e.title}),(0,r.jsx)(i.x,{textLines:e.descriptionTextLines})]},e.title)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.z,{size:"h3",color:"gray",children:"READ"}),(0,r.jsx)(a.z,{size:"h2",children:"Latest readings"}),(0,r.jsx)(i.x,{color:"gray",textLines:["Readings are sites which will help you with detailed","information about given topic. Read latest ones from Learn."]}),(0,r.jsx)("section",{className:"mt-10 mb-20 flex flex-col lg:flex-row align-center gap-3 justify-evenly w-full",children:s.Iq.map((t,n)=>e[t.category](t))})]})}}},function(e){e.O(0,[9063,7190,9774,2888,179],function(){return e(e.s=2343)}),_N_E=e.O()}]);