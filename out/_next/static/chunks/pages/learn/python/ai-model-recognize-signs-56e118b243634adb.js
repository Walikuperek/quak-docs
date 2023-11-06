(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[844],{1704:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/learn/python/ai-model-recognize-signs",function(){return a(4743)}])},4743:function(e,n,a){"use strict";a.r(n),a.d(n,{__toc:function(){return l}});var t=a(1527),o=a(4980),r=a(6351),i=a(4143);a(9015);var s=a(9741);let l=[];function _createMdxContent(e){let n=Object.assign({p:"p",pre:"pre",code:"code",span:"span"},(0,s.a)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Oczywiście! Aby stworzyć model uczenia maszynowego do rozpoznawania i por\xf3wnywania podpis\xf3w, będziesz potrzebował danych treningowych, na kt\xf3rych model będzie się uczył. Idealnie byłoby, gdybyś miał zestaw podpis\xf3w r\xf3żnych os\xf3b, kt\xf3re zostaną użyte do uczenia modelu. Oto og\xf3lny przewodnik, jak można stworzyć taki model z użyciem TensorFlow:"}),"\n",(0,t.jsx)(n.p,{children:"Zbieranie danych treningowych:"}),"\n",(0,t.jsx)(n.p,{children:"Zebranie pr\xf3bek podpis\xf3w r\xf3żnych os\xf3b. Dla każdej osoby musisz mieć zestaw pr\xf3bek ich podpis\xf3w.\nPrzygotowanie danych:"}),"\n",(0,t.jsx)(n.p,{children:"Konwertowanie podpis\xf3w na format, kt\xf3ry można użyć do uczenia modelu. Możesz użyć obraz\xf3w podpis\xf3w lub zamienić podpisy na dane numeryczne.\nPodział danych:"}),"\n",(0,t.jsx)(n.p,{children:"Podziel dane na zestawy treningowe i testowe, aby ocenić wydajność modelu.\nTworzenie modelu TensorFlow:"}),"\n",(0,t.jsx)(n.p,{children:"Możesz wykorzystać bibliotekę TensorFlow do zdefiniowania modelu głębokiego uczenia. Oto przykład prostego modelu w TensorFlow 2.x:"}),"\n",(0,t.jsx)(n.pre,{"data-language":"python","data-theme":"default",children:(0,t.jsxs)(n.code,{"data-language":"python","data-theme":"default",children:[(0,t.jsxs)(n.span,{className:"line",children:[(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" tensorflow "}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"as"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" tf"})]}),"\n",(0,t.jsxs)(n.span,{className:"line",children:[(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" tensorflow "}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" keras"})]}),"\n",(0,t.jsxs)(n.span,{className:"line",children:[(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" tensorflow"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"keras "}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" layers"})]}),"\n",(0,t.jsx)(n.span,{className:"line",children:" "}),"\n",(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"# Tworzenie modelu"})}),"\n",(0,t.jsxs)(n.span,{className:"line",children:[(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"model "}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" keras"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"Sequential"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"(["})]}),"\n",(0,t.jsxs)(n.span,{className:"line",children:[(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"    layers."}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"Conv2D"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"("}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"32"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:", ("}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"3"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:", "}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"3"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"), activation"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'relu'"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:", input_shape"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"(height, width, "}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:")),"})]}),"\n",(0,t.jsxs)(n.span,{className:"line",children:[(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"    layers."}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"MaxPooling2D"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"(("}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"2"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:", "}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"2"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:")),"})]}),"\n",(0,t.jsxs)(n.span,{className:"line",children:[(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"    layers."}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"Flatten"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"(),"})]}),"\n",(0,t.jsxs)(n.span,{className:"line",children:[(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"    layers."}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"Dense"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"("}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"128"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:", activation"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'relu'"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"),"})]}),"\n",(0,t.jsxs)(n.span,{className:"line",children:[(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"    layers."}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"Dense"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"(num_classes, activation"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'softmax'"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:")"})]}),"\n",(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"])"})}),"\n",(0,t.jsx)(n.span,{className:"line",children:" "}),"\n",(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"# Kompilacja modelu"})}),"\n",(0,t.jsxs)(n.span,{className:"line",children:[(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"model"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"compile"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"(optimizer"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'adam'"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:", loss"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'categorical_crossentropy'"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:", metrics"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"["}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'accuracy'"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"])"})]})]})}),"\n",(0,t.jsx)(n.p,{children:"Ten kod tworzy prosty model konwolucyjnej sieci neuronowej. Możesz dostosować architekturę modelu do swoich potrzeb."}),"\n",(0,t.jsx)(n.p,{children:"Trenowanie modelu:"}),"\n",(0,t.jsx)(n.p,{children:"Ucz model na danych treningowych za pomocą metody model.fit.\nOcena modelu:"}),"\n",(0,t.jsx)(n.p,{children:"Ocen model na danych testowych, aby sprawdzić jego wydajność.\nPor\xf3wnywanie podpis\xf3w:"}),"\n",(0,t.jsx)(n.p,{children:"Po wytrenowaniu modelu można użyć go do por\xf3wnywania podpis\xf3w. Podaj dwa podpisy jako dane wejściowe i użyj modelu, aby ocenić podobieństwo między nimi.\nTo og\xf3lny przewodnik. Dokładna implementacja zależy od twoich konkretnych danych i wymagań. Jeśli masz konkretne pytania lub potrzebujesz bardziej szczeg\xf3łowej pomocy, daj mi znać, a chętnie pomogę."})]})}let d={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.a)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/learn/python/ai-model-recognize-signs.mdx",route:"/learn/python/ai-model-recognize-signs",pageMap:[{kind:"Meta",data:{index:{title:"Home",type:"page",theme:{layout:"full"}},libraries:{title:"Libraries",type:"page"},learn:{title:"Learn",type:"page",theme:{layout:"full"}},portfolio:{title:"Portfolio",type:"page",theme:{layout:"full"}},contact:{title:"Contact",type:"page"},useful:{title:"Useful",display:"hidden",type:"page"},privacy:{display:"hidden",title:"Privacy Policy",type:"page",theme:{layout:"full"}},"issue-contact":{display:"hidden",title:"Issue contact",type:"page",theme:{layout:"full"}}}},{kind:"MdxPage",name:"contact",route:"/contact"},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"issue-contact",route:"/issue-contact"},{kind:"Folder",name:"learn",route:"/learn",children:[{kind:"Meta",data:{index:{title:"Learn",display:"hidden"},"-":{type:"separator",title:"Categories"},backend:"Backend",frontend:"Frontend",cloud:"Cloud","--":{type:"separator",title:"Tags"},angular:"Angular",architecture:"Architecture",bun:"Bun","express-js":"Express JS","google-cloud-platform":"Google Cloud Platform",javascript:"JavaScript","nest-js":"Nest JS","next-js":"Next.js",node:"Node",python:"Python",react:"React",typescript:"TypeScript"}},{kind:"Folder",name:"angular",route:"/learn/angular",children:[{kind:"Meta",data:{"state-management":{title:"State management in Angular",display:"hidden",theme:{layout:"default",sidebar:!1}}}},{kind:"MdxPage",name:"state-management",route:"/learn/angular/state-management"}]},{kind:"MdxPage",name:"angular",route:"/learn/angular"},{kind:"Folder",name:"architecture",route:"/learn/architecture",children:[{kind:"Meta",data:{"drd-frontend":{title:"DRD Frontend",display:"hidden",theme:{layout:"default",sidebar:!1}}}},{kind:"MdxPage",name:"drd-frontend",route:"/learn/architecture/drd-frontend"}]},{kind:"MdxPage",name:"architecture",route:"/learn/architecture"},{kind:"MdxPage",name:"backend",route:"/learn/backend"},{kind:"Folder",name:"bun",route:"/learn/bun",children:[{kind:"Meta",data:{"build-http-server":{title:"Build HTTP with Bun",display:"hidden",theme:{layout:"default",sidebar:!1}}}},{kind:"MdxPage",name:"build-http-server",route:"/learn/bun/build-http-server"}]},{kind:"MdxPage",name:"bun",route:"/learn/bun"},{kind:"MdxPage",name:"cloud",route:"/learn/cloud"},{kind:"Folder",name:"express-js",route:"/learn/express-js",children:[{kind:"Meta",data:{}}]},{kind:"MdxPage",name:"express-js",route:"/learn/express-js"},{kind:"MdxPage",name:"frontend",route:"/learn/frontend"},{kind:"Folder",name:"google-cloud-platform",route:"/learn/google-cloud-platform",children:[{kind:"Meta",data:{"running-a-basic-server":{title:"Running a basic server",display:"hidden",theme:{layout:"default",sidebar:!1}}}},{kind:"MdxPage",name:"running-a-basic-server",route:"/learn/google-cloud-platform/running-a-basic-server"}]},{kind:"MdxPage",name:"google-cloud-platform",route:"/learn/google-cloud-platform"},{kind:"MdxPage",name:"index",route:"/learn"},{kind:"Folder",name:"javascript",route:"/learn/javascript",children:[{kind:"Meta",data:{"light-dark":{title:"Light/Dark",display:"hidden",theme:{layout:"default",sidebar:!1}}}},{kind:"MdxPage",name:"light-dark",route:"/learn/javascript/light-dark"}]},{kind:"MdxPage",name:"javascript",route:"/learn/javascript"},{kind:"MdxPage",name:"nest-js",route:"/learn/nest-js"},{kind:"MdxPage",name:"next-js",route:"/learn/next-js"},{kind:"MdxPage",name:"node",route:"/learn/node"},{kind:"Folder",name:"python",route:"/learn/python",children:[{kind:"Meta",data:{"resize-image":{title:"Resize image",display:"hidden",theme:{layout:"default",sidebar:!1}},"ai-model-recognize-signs":{title:"AI model to recognize signs",display:"hidden",theme:{layout:"default",sidebar:!1}}}},{kind:"MdxPage",name:"ai-model-recognize-signs",route:"/learn/python/ai-model-recognize-signs"},{kind:"MdxPage",name:"resize-image",route:"/learn/python/resize-image"}]},{kind:"MdxPage",name:"python",route:"/learn/python"},{kind:"MdxPage",name:"react",route:"/learn/react"},{kind:"Folder",name:"typescript",route:"/learn/typescript",children:[{kind:"Meta",data:{"dependency-injection":{title:"How to utilize DI pattern in your application",display:"hidden",theme:{layout:"default",sidebar:!1}}}},{kind:"MdxPage",name:"dependency-injection",route:"/learn/typescript/dependency-injection"}]},{kind:"MdxPage",name:"typescript",route:"/learn/typescript"}]},{kind:"MdxPage",name:"learn",route:"/learn"},{kind:"Folder",name:"libraries",route:"/libraries",children:[{kind:"MdxPage",name:"qstore",route:"/libraries/qstore"},{kind:"MdxPage",name:"qtheme",route:"/libraries/qtheme"},{kind:"Meta",data:{qstore:"Qstore",qtheme:"Qtheme"}}]},{kind:"Folder",name:"portfolio",route:"/portfolio",children:[{kind:"Meta",data:{index:{title:"Portfolio",display:"hidden"},"-":{type:"separator",title:"Games"},adventurer:"Adventurer",quakky:"Quakky","retro-games":"Retro games","--":{type:"separator",title:"Projects"},"creativo-app":"Creativo App","psy-app":"Psy App","shop-app":"Shop App","tech-app":"Tech App",wrh:"WRH Website","---":{type:"separator",title:"Platform"},qchat:"Qchat",qcrypto:"Qcrypto",qgames:"Qgames",qwallet:"Qwallet"}},{kind:"MdxPage",name:"adventurer",route:"/portfolio/adventurer"},{kind:"MdxPage",name:"creativo-app",route:"/portfolio/creativo-app"},{kind:"MdxPage",name:"index",route:"/portfolio"},{kind:"MdxPage",name:"psy-app",route:"/portfolio/psy-app"},{kind:"MdxPage",name:"qchat",route:"/portfolio/qchat"},{kind:"MdxPage",name:"qcrypto",route:"/portfolio/qcrypto"},{kind:"MdxPage",name:"qgames",route:"/portfolio/qgames"},{kind:"MdxPage",name:"quakky",route:"/portfolio/quakky"},{kind:"MdxPage",name:"qwallet",route:"/portfolio/qwallet"},{kind:"MdxPage",name:"retro-games",route:"/portfolio/retro-games"},{kind:"MdxPage",name:"shop-app",route:"/portfolio/shop-app"},{kind:"MdxPage",name:"tech-app",route:"/portfolio/tech-app"},{kind:"MdxPage",name:"wrh",route:"/portfolio/wrh"}]},{kind:"MdxPage",name:"portfolio",route:"/portfolio"},{kind:"MdxPage",name:"privacy",route:"/privacy"},{kind:"Folder",name:"useful",route:"/useful",children:[{kind:"Meta",data:{valentines:{title:"Valentines Card",display:"hidden",theme:{layout:"default",sidebar:!1}}}},{kind:"MdxPage",name:"valentines",route:"/useful/valentines"}]},{kind:"MdxPage",name:"useful",route:"/useful"}],flexsearch:{codeblocks:!0},title:"Ai Model Recognize Signs",headings:l},pageNextRoute:"/learn/python/ai-model-recognize-signs",nextraLayout:r.ZP,themeConfig:i.Z};n.default=(0,o.j)(d)},4143:function(e,n,a){"use strict";var t=a(1527);a(959);let o={useNextSeoProps:()=>({titleTemplate:"%s – QUAK"}),darkMode:!0,sidebar:{defaultMenuCollapseLevel:1,toggleButton:!0},toc:{backToTop:!0},navigation:!1,logo:(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",fontWeight:700,letterSpacing:"2px"},children:[(0,t.jsx)("img",{src:"https://quak.com.pl/quak_logo_72x72.png",alt:"QUAK Logo",width:34}),"\xa0QUAK"]}),primaryHue:320,head:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,t.jsx)("meta",{name:"description",content:"Strona internetowa firmy QUAK. Wejdź i ucz się programowania z QUAK"}),(0,t.jsx)("meta",{property:"og:title",content:"QUAK"}),(0,t.jsx)("meta",{property:"og:description",content:"Strona internetowa firmy QUAK. Wejdź i ucz się programowania z QUAK"}),(0,t.jsx)("script",{src:"/libs/three.min.js"}),(0,t.jsx)("script",{src:"/libs/vanta.globe.min.js"})]}),gitTimestamp:(0,t.jsx)(t.Fragment,{}),search:{placeholder:"Search..."},docsRepositoryBase:"https://github.com/Walikuperek/quak-docs/tree/main/",footer:{text:(0,t.jsxs)("div",{className:"flex flex-col lg:flex-row flex-wrap justify-start w-full gap-5",children:[(0,t.jsxs)("div",{className:"flex flex-col gap-3 px-5",children:[(0,t.jsx)("img",{src:"/logos/quak.png",width:"44",height:"44",alt:"QUAK Logo",className:"mx-auto"}),(0,t.jsx)("strong",{className:"mx-auto",children:"QUAK"}),(0,t.jsx)("p",{className:"mx-auto",children:"Kacper Walczak"}),(0,t.jsxs)("p",{className:"mx-auto",children:["Copyright ",new Date().getFullYear()]})]}),(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsx)("b",{className:"text-gray-500 font-bold",children:"CONTACT"}),(0,t.jsxs)("div",{className:"flex flex-col gap-2 mt-3 p-2",children:[(0,t.jsx)("a",{target:"_blank",href:"https://www.linkedin.com/in/kacper-walczak-b4122717a/",className:"text-green-500 hover:underline",children:"LinkedIn"}),(0,t.jsx)("a",{target:"_blank",href:"https://www.facebook.com/profile.php?id=100014391284754",className:"text-green-500 hover:underline",children:"Facebook"}),(0,t.jsx)("a",{target:"_blank",href:"https://www.instagram.com/walikuperek/",className:"text-green-500 hover:underline",children:"Instagram"}),(0,t.jsx)("a",{href:"mailto:k.walczak@quak.com.pl",className:"text-green-500 hover:underline",children:"k.walczak@quak.com.pl"})]})]}),(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsx)("b",{className:"text-gray-500 font-bold",children:"GAMES"}),(0,t.jsxs)("div",{className:"flex flex-col gap-2 mt-3 p-2",children:[(0,t.jsx)("a",{target:"_blank",href:"https://quak.com.pl/quakky/",className:"text-green-500 hover:underline",children:"Play Quakky"}),(0,t.jsx)("a",{target:"_blank",href:"https://quak.com.pl/adventurer/",className:"text-green-500 hover:underline",children:"Play Adventurer"})]})]}),(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsx)("b",{className:"text-gray-500 font-bold",children:"GITHUB"}),(0,t.jsxs)("div",{className:"flex flex-col gap-2 mt-3 p-2",children:[(0,t.jsx)("a",{target:"_blank",href:"https://github.com/Walikuperek/TS-snippets",className:"text-green-500 hover:underline",children:"TS-snippets"}),(0,t.jsx)("a",{target:"_blank",href:"https://github.com/Walikuperek/Python-code-smells",className:"text-green-500 hover:underline",children:"Python code smells"}),(0,t.jsx)("a",{target:"_blank",href:"https://github.com/Walikuperek/Qtheme",className:"text-green-500 hover:underline",children:"Qtheme"}),(0,t.jsx)("a",{target:"_blank",href:"https://github.com/Walikuperek/Qstore",className:"text-green-500 hover:underline",children:"Qstore"})]})]}),(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsx)("b",{className:"text-gray-500 font-bold",children:"PRIVACY"}),(0,t.jsxs)("div",{className:"flex flex-col gap-2 mt-3 p-2",children:[(0,t.jsx)("a",{href:"/privacy",className:"text-green-500 hover:underline",children:"Privacy policy"}),(0,t.jsx)("a",{href:"/issue-contact",className:"text-green-500 hover:underline",children:"Issue contact"})]})]}),(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsx)("b",{className:"text-gray-500 font-bold",children:"USEFUL"}),(0,t.jsx)("div",{className:"flex flex-col gap-2 mt-3 p-2",children:(0,t.jsx)("a",{href:"/useful/valentines",className:"text-green-500 hover:underline",children:"Valentine's Day Card"})})]})]})}};n.Z=o}},function(e){e.O(0,[9063,9774,2888,179],function(){return e(e.s=1704)}),_N_E=e.O()}]);