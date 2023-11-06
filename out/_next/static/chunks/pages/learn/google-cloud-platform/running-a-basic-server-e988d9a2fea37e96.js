(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8169],{2569:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/learn/google-cloud-platform/running-a-basic-server",function(){return a(9414)}])},9414:function(e,t,a){"use strict";a.r(t),a.d(t,{__toc:function(){return d}});var n=a(1527),r=a(4980),s=a(6351),i=a(4143);a(9015);var l=a(9741),o=a(235);let d=[{depth:2,value:"Before you begin",id:"before-you-begin"},{depth:2,value:"Create Linux VM instance",id:"create-linux-vm-instance"},{depth:3,value:"Create a VM instance",id:"create-a-vm-instance"},{depth:3,value:"Select operating system",id:"select-operating-system"},{depth:3,value:"Firewall",id:"firewall"},{depth:3,value:"Create",id:"create"},{depth:2,value:"Connect to the VM instance",id:"connect-to-the-vm-instance"},{depth:3,value:"Choose VM instance",id:"choose-vm-instance"},{depth:3,value:"Connect via SSH",id:"connect-via-ssh"},{depth:2,value:"Install Apache",id:"install-apache"},{depth:3,value:"Install packages",id:"install-packages"},{depth:3,value:"Start server",id:"start-server"},{depth:3,value:"Verify that Apache is running",id:"verify-that-apache-is-running"},{depth:3,value:"Prepare for browser testing",id:"prepare-for-browser-testing"},{depth:2,value:"Test your server",id:"test-your-server"},{depth:3,value:"Choose VM instance",id:"choose-vm-instance-1"},{depth:3,value:"Open browser",id:"open-browser"},{depth:3,value:"Result",id:"result"}];function _createMdxContent(e){let t=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",h3:"h3",pre:"pre",span:"span"},(0,l.a)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{children:"Running a basic test server"}),"\n",(0,n.jsx)(t.h2,{id:"before-you-begin",children:"Before you begin"}),"\n",(0,n.jsx)(t.p,{children:"Make sure that billing is enabled for your Google Cloud project."}),"\n",(0,n.jsxs)(t.p,{children:["Enable the ",(0,n.jsx)(t.code,{children:"Compute Engine"})," API."]}),"\n",(0,n.jsx)(t.h2,{id:"create-linux-vm-instance",children:"Create Linux VM instance"}),"\n",(0,n.jsxs)(o.Rg,{children:[(0,n.jsx)(t.h3,{id:"create-a-vm-instance",children:"Create a VM instance"}),(0,n.jsxs)(t.p,{children:["In the Google Cloud console, go to the ",(0,n.jsx)(t.code,{children:"Create an instance"})," page."]}),(0,n.jsx)(t.h3,{id:"select-operating-system",children:"Select operating system"}),(0,n.jsxs)(t.p,{children:["In the ",(0,n.jsx)(t.code,{children:"Boot disk"})," section, click ",(0,n.jsx)(t.code,{children:"Change"})," to begin configuring your boot disk."]}),(0,n.jsxs)(t.p,{children:["On the Public images tab, choose ",(0,n.jsx)(t.code,{children:"Ubuntu"})," from the Operating system list."]}),(0,n.jsxs)(t.p,{children:["Choose ",(0,n.jsx)(t.code,{children:"Ubuntu 20.04 LTS"})," from the Version list."]}),(0,n.jsxs)(t.p,{children:["Click ",(0,n.jsx)(t.code,{children:"Select"}),"."]}),(0,n.jsx)(t.h3,{id:"firewall",children:"Firewall"}),(0,n.jsxs)(t.p,{children:["In the Firewall section, select ",(0,n.jsx)(t.code,{children:"Allow HTTP"})," traffic."]}),(0,n.jsx)(t.h3,{id:"create",children:"Create"}),(0,n.jsxs)(t.p,{children:["To create the VM, click ",(0,n.jsx)(t.code,{children:"Create"}),"."]})]}),"\n",(0,n.jsx)(t.p,{children:"Allow a short period of time for the instance to start. After the instance is ready, it's listed on the VM instances page with a green status icon."}),"\n",(0,n.jsx)(t.h2,{id:"connect-to-the-vm-instance",children:"Connect to the VM instance"}),"\n",(0,n.jsxs)(o.Rg,{children:[(0,n.jsx)(t.h3,{id:"choose-vm-instance",children:"Choose VM instance"}),(0,n.jsx)(t.p,{children:"In the  VM instances page choose your instance."}),(0,n.jsx)(t.h3,{id:"connect-via-ssh",children:"Connect via SSH"}),(0,n.jsxs)(t.p,{children:["In the list of virtual machine instances, click ",(0,n.jsx)(t.code,{children:"SSH"})," in the row of the instance that you want to connect to."]})]}),"\n",(0,n.jsx)(t.h2,{id:"install-apache",children:"Install Apache"}),"\n",(0,n.jsxs)(o.Rg,{children:[(0,n.jsx)(t.h3,{id:"install-packages",children:"Install packages"}),(0,n.jsx)(t.p,{children:"To update the available packages and install the apache2 package, use the system package manager for that operating system. To update an Ubuntu VM, run the following command:"}),(0,n.jsx)(t.pre,{"data-language":"bash","data-theme":"default",children:(0,n.jsx)(t.code,{"data-language":"bash","data-theme":"default",children:(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"sudo"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"apt"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"update"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:"&&"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"sudo"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"apt"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"-y"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"install"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"apache2"})]})})}),(0,n.jsx)(t.h3,{id:"start-server",children:"Start server"}),(0,n.jsx)(t.p,{children:"After installing Apache, the operating system automatically starts the Apache server."}),(0,n.jsx)(t.h3,{id:"verify-that-apache-is-running",children:"Verify that Apache is running"}),(0,n.jsx)(t.p,{children:"To verify that Apache is running run the following command:"}),(0,n.jsx)(t.pre,{"data-language":"bash","data-theme":"default",children:(0,n.jsx)(t.code,{"data-language":"bash","data-theme":"default",children:(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"sudo"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"systemctl"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"status"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"apache2"})]})})}),(0,n.jsx)(t.h3,{id:"prepare-for-browser-testing",children:"Prepare for browser testing"}),(0,n.jsx)(t.p,{children:"Overwrite the Apache web server default web page:"}),(0,n.jsx)(t.pre,{"data-language":"bash","data-theme":"default",children:(0,n.jsx)(t.code,{"data-language":"bash","data-theme":"default",children:(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"echo"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'<!doctype html><html><body><h1>QUAK Hello!</h1></body></html>'"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"sudo"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"tee"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"/var/www/html/index.html"})]})})})]}),"\n",(0,n.jsx)(t.h2,{id:"test-your-server",children:"Test your server"}),"\n",(0,n.jsx)(t.p,{children:"Test that your VM is serving traffic on its external IP address."}),"\n",(0,n.jsxs)(o.Rg,{children:[(0,n.jsx)(t.h3,{id:"choose-vm-instance-1",children:"Choose VM instance"}),(0,n.jsx)(t.p,{children:"In the Google Cloud console, go to the VM Instances page."}),(0,n.jsxs)(t.p,{children:["Copy the ",(0,n.jsx)(t.code,{children:"external IP"})," for your VM under the External IP column."]}),(0,n.jsx)(t.h3,{id:"open-browser",children:"Open browser"}),(0,n.jsxs)(t.p,{children:["In a browser, navigate to ",(0,n.jsx)(t.code,{children:"http://[EXTERNAL-IP]"}),". Don't connect using https because this causes the server to return a ",(0,n.jsx)(t.code,{children:"Connection Refused"})," error."]}),(0,n.jsx)(t.h3,{id:"result",children:"Result"}),(0,n.jsx)(t.p,{children:"You should now see the page with the following text:"}),(0,n.jsx)(t.pre,{"data-language":"text","data-theme":"default",children:(0,n.jsx)(t.code,{"data-language":"text","data-theme":"default",children:(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"QUAK Hello!"})})})})]})]})}let c={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,l.a)(),e.components);return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/learn/google-cloud-platform/running-a-basic-server.mdx",route:"/learn/google-cloud-platform/running-a-basic-server",timestamp:169860836e4,pageMap:[{kind:"Meta",data:{index:{title:"Home",type:"page",theme:{layout:"full"}},libraries:{title:"Libraries",type:"page"},learn:{title:"Learn",type:"page",theme:{layout:"full"}},portfolio:{title:"Portfolio",type:"page",theme:{layout:"full"}},contact:{title:"Contact",type:"page"},useful:{title:"Useful",display:"hidden",type:"page"}}},{kind:"MdxPage",name:"contact",route:"/contact"},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"learn",route:"/learn",children:[{kind:"Meta",data:{index:{title:"Learn",display:"hidden"},"-":{type:"separator",title:"Categories"},backend:"Backend",frontend:"Frontend",cloud:"Cloud","--":{type:"separator",title:"Tags"},angular:"Angular",architecture:"Architecture",bun:"Bun","express-js":"Express JS","google-cloud-platform":"Google Cloud Platform",javascript:"JavaScript","nest-js":"Nest JS","next-js":"Next.js",node:"Node",python:"Python",react:"React",typescript:"TypeScript"}},{kind:"Folder",name:"angular",route:"/learn/angular",children:[{kind:"Meta",data:{"state-management":{title:"State management in Angular",display:"hidden",theme:{layout:"default",sidebar:!1}}}},{kind:"MdxPage",name:"state-management",route:"/learn/angular/state-management"}]},{kind:"MdxPage",name:"angular",route:"/learn/angular"},{kind:"Folder",name:"architecture",route:"/learn/architecture",children:[{kind:"Meta",data:{"drd-frontend":{title:"DRD Frontend",display:"hidden",theme:{layout:"default",sidebar:!1}}}},{kind:"MdxPage",name:"drd-frontend",route:"/learn/architecture/drd-frontend"}]},{kind:"MdxPage",name:"architecture",route:"/learn/architecture"},{kind:"MdxPage",name:"backend",route:"/learn/backend"},{kind:"Folder",name:"bun",route:"/learn/bun",children:[{kind:"Meta",data:{"build-http-server":{title:"Build HTTP with Bun",display:"hidden",theme:{layout:"default",sidebar:!1}}}},{kind:"MdxPage",name:"build-http-server",route:"/learn/bun/build-http-server"}]},{kind:"MdxPage",name:"bun",route:"/learn/bun"},{kind:"MdxPage",name:"cloud",route:"/learn/cloud"},{kind:"Folder",name:"express-js",route:"/learn/express-js",children:[{kind:"Meta",data:{}}]},{kind:"MdxPage",name:"express-js",route:"/learn/express-js"},{kind:"MdxPage",name:"frontend",route:"/learn/frontend"},{kind:"Folder",name:"google-cloud-platform",route:"/learn/google-cloud-platform",children:[{kind:"Meta",data:{"running-a-basic-server":{title:"Running a basic server",display:"hidden",theme:{layout:"default",sidebar:!1}}}},{kind:"MdxPage",name:"running-a-basic-server",route:"/learn/google-cloud-platform/running-a-basic-server"}]},{kind:"MdxPage",name:"google-cloud-platform",route:"/learn/google-cloud-platform"},{kind:"MdxPage",name:"index",route:"/learn"},{kind:"Folder",name:"javascript",route:"/learn/javascript",children:[{kind:"Meta",data:{"light-dark":{title:"Light/Dark",display:"hidden",theme:{layout:"default",sidebar:!1}}}},{kind:"MdxPage",name:"light-dark",route:"/learn/javascript/light-dark"}]},{kind:"MdxPage",name:"javascript",route:"/learn/javascript"},{kind:"MdxPage",name:"nest-js",route:"/learn/nest-js"},{kind:"MdxPage",name:"next-js",route:"/learn/next-js"},{kind:"MdxPage",name:"node",route:"/learn/node"},{kind:"Folder",name:"python",route:"/learn/python",children:[{kind:"Meta",data:{"resize-image":{title:"Resize image",display:"hidden",theme:{layout:"default",sidebar:!1}}}},{kind:"MdxPage",name:"resize-image",route:"/learn/python/resize-image"}]},{kind:"MdxPage",name:"python",route:"/learn/python"},{kind:"MdxPage",name:"react",route:"/learn/react"},{kind:"MdxPage",name:"typescript",route:"/learn/typescript"}]},{kind:"MdxPage",name:"learn",route:"/learn"},{kind:"Folder",name:"libraries",route:"/libraries",children:[{kind:"MdxPage",name:"qstore",route:"/libraries/qstore"},{kind:"MdxPage",name:"qtheme",route:"/libraries/qtheme"},{kind:"Meta",data:{qstore:"Qstore",qtheme:"Qtheme"}}]},{kind:"Folder",name:"portfolio",route:"/portfolio",children:[{kind:"Meta",data:{index:{title:"Portfolio",display:"hidden"},"-":{type:"separator",title:"Games"},adventurer:"Adventurer",quakky:"Quakky","retro-games":"Retro games","--":{type:"separator",title:"Projects"},"creativo-app":"Creativo App","psy-app":"Psy App","shop-app":"Shop App","tech-app":"Tech App",wrh:"WRH Website","---":{type:"separator",title:"Platform"},qchat:"Qchat",qcrypto:"Qcrypto",qgames:"Qgames",qwallet:"Qwallet"}},{kind:"MdxPage",name:"adventurer",route:"/portfolio/adventurer"},{kind:"MdxPage",name:"creativo-app",route:"/portfolio/creativo-app"},{kind:"MdxPage",name:"index",route:"/portfolio"},{kind:"MdxPage",name:"psy-app",route:"/portfolio/psy-app"},{kind:"MdxPage",name:"qchat",route:"/portfolio/qchat"},{kind:"MdxPage",name:"qcrypto",route:"/portfolio/qcrypto"},{kind:"MdxPage",name:"qgames",route:"/portfolio/qgames"},{kind:"MdxPage",name:"quakky",route:"/portfolio/quakky"},{kind:"MdxPage",name:"qwallet",route:"/portfolio/qwallet"},{kind:"MdxPage",name:"retro-games",route:"/portfolio/retro-games"},{kind:"MdxPage",name:"shop-app",route:"/portfolio/shop-app"},{kind:"MdxPage",name:"tech-app",route:"/portfolio/tech-app"},{kind:"MdxPage",name:"wrh",route:"/portfolio/wrh"}]},{kind:"MdxPage",name:"portfolio",route:"/portfolio"},{kind:"Folder",name:"useful",route:"/useful",children:[{kind:"Meta",data:{valentines:{title:"Valentines Card",display:"hidden",theme:{layout:"default",sidebar:!1}}}},{kind:"MdxPage",name:"valentines",route:"/useful/valentines"}]},{kind:"MdxPage",name:"useful",route:"/useful"}],flexsearch:{codeblocks:!0},title:"Running a basic test server",headings:d},pageNextRoute:"/learn/google-cloud-platform/running-a-basic-server",nextraLayout:s.ZP,themeConfig:i.Z};t.default=(0,r.j)(c)},4143:function(e,t,a){"use strict";var n=a(1527);a(959);let r={useNextSeoProps:()=>({titleTemplate:"%s – QUAK"}),darkMode:!0,sidebar:{defaultMenuCollapseLevel:1,toggleButton:!0},toc:{backToTop:!0},navigation:!1,logo:(0,n.jsxs)("div",{style:{display:"flex",alignItems:"center",fontWeight:700,letterSpacing:"2px"},children:[(0,n.jsx)("img",{src:"https://quak.com.pl/quak_logo_72x72.png",alt:"QUAK Logo",width:34}),"\xa0QUAK"]}),primaryHue:320,head:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,n.jsx)("meta",{name:"description",content:"Strona internetowa firmy QUAK. Wejdź i ucz się programowania z QUAK"}),(0,n.jsx)("meta",{property:"og:title",content:"QUAK"}),(0,n.jsx)("meta",{property:"og:description",content:"Strona internetowa firmy QUAK. Wejdź i ucz się programowania z QUAK"}),(0,n.jsx)("script",{src:"/libs/three.min.js"}),(0,n.jsx)("script",{src:"/libs/vanta.globe.min.js"})]}),gitTimestamp:(0,n.jsx)(n.Fragment,{}),search:{placeholder:"Search..."},docsRepositoryBase:"https://github.com/Walikuperek/quak-docs/tree/main/",footer:{text:(0,n.jsxs)("div",{className:"flex flex-col lg:flex-row flex-wrap justify-start w-full gap-5",children:[(0,n.jsxs)("div",{className:"flex flex-col gap-3 px-5",children:[(0,n.jsx)("img",{src:"/logos/quak.png",width:"44",height:"44",alt:"QUAK Logo",className:"mx-auto"}),(0,n.jsx)("strong",{className:"mx-auto",children:"QUAK"}),(0,n.jsx)("p",{className:"mx-auto",children:"Kacper Walczak"}),(0,n.jsxs)("p",{className:"mx-auto",children:["Copyright ",new Date().getFullYear()]})]}),(0,n.jsxs)("div",{className:"flex flex-col",children:[(0,n.jsx)("b",{className:"text-gray-500 font-bold",children:"CONTACT"}),(0,n.jsxs)("div",{className:"flex flex-col gap-2 mt-3 p-2",children:[(0,n.jsx)("a",{target:"_blank",href:"https://www.linkedin.com/in/kacper-walczak-b4122717a/",className:"text-green-500 hover:underline",children:"LinkedIn"}),(0,n.jsx)("a",{target:"_blank",href:"https://www.facebook.com/profile.php?id=100014391284754",className:"text-green-500 hover:underline",children:"Facebook"}),(0,n.jsx)("a",{target:"_blank",href:"https://www.instagram.com/walikuperek/",className:"text-green-500 hover:underline",children:"Instagram"}),(0,n.jsx)("a",{href:"mailto:k.walczak@quak.com.pl",className:"text-green-500 hover:underline",children:"k.walczak@quak.com.pl"})]})]}),(0,n.jsxs)("div",{className:"flex flex-col",children:[(0,n.jsx)("b",{className:"text-gray-500 font-bold",children:"GAMES"}),(0,n.jsxs)("div",{className:"flex flex-col gap-2 mt-3 p-2",children:[(0,n.jsx)("a",{target:"_blank",href:"https://quak.com.pl/quakky/",className:"text-green-500 hover:underline",children:"Play Quakky"}),(0,n.jsx)("a",{target:"_blank",href:"https://quak.com.pl/adventurer/",className:"text-green-500 hover:underline",children:"Play Adventurer"})]})]}),(0,n.jsxs)("div",{className:"flex flex-col",children:[(0,n.jsx)("b",{className:"text-gray-500 font-bold",children:"GITHUB"}),(0,n.jsxs)("div",{className:"flex flex-col gap-2 mt-3 p-2",children:[(0,n.jsx)("a",{target:"_blank",href:"https://github.com/Walikuperek/TS-snippets",className:"text-green-500 hover:underline",children:"TS-snippets"}),(0,n.jsx)("a",{target:"_blank",href:"https://github.com/Walikuperek/Python-code-smells",className:"text-green-500 hover:underline",children:"Python code smells"}),(0,n.jsx)("a",{target:"_blank",href:"https://github.com/Walikuperek/Qtheme",className:"text-green-500 hover:underline",children:"Qtheme"}),(0,n.jsx)("a",{target:"_blank",href:"https://github.com/Walikuperek/Qstore",className:"text-green-500 hover:underline",children:"Qstore"})]})]}),(0,n.jsxs)("div",{className:"flex flex-col",children:[(0,n.jsx)("b",{className:"text-gray-500 font-bold",children:"PRIVACY"}),(0,n.jsxs)("div",{className:"flex flex-col gap-2 mt-3 p-2",children:[(0,n.jsx)("a",{href:"/privacy",className:"text-green-500 hover:underline",children:"Privacy policy"}),(0,n.jsx)("a",{href:"/issue-contact",className:"text-green-500 hover:underline",children:"Issue contact"})]})]}),(0,n.jsxs)("div",{className:"flex flex-col",children:[(0,n.jsx)("b",{className:"text-gray-500 font-bold",children:"USEFUL"}),(0,n.jsx)("div",{className:"flex flex-col gap-2 mt-3 p-2",children:(0,n.jsx)("a",{href:"/useful/valentines",className:"text-green-500 hover:underline",children:"Valentine's Day Card"})})]})]})}};t.Z=r}},function(e){e.O(0,[9063,9774,2888,179],function(){return e(e.s=2569)}),_N_E=e.O()}]);