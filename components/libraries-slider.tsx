import { useEffect } from "react";

function LibrariesSlider() {
  useEffect(() => {
    
  }, []);

  return (
    <></>
  );
}

export default function MyApp() {
  return <LibrariesSlider />;
}


// <section class="flex align-center justify-evenly gap-2 w-9/12 mx-auto">
//   <div id="bun_http_card_toggle" class="h-12 border-solid border-2 p-2 hover:bg-orange-800 hover:cursor-pointer border-orange-600 rounded-2xl w-full flex flex-col align-center justify-center gap-3">
//     <span class="mx-auto font-bold text-lg">Bun-http</span>
//   </div>
//   <div id="qtheme_card_toggle" class="h-12 border-solid border-2 p-2 hover:bg-rose-800 hover:cursor-pointer border-rose-600 rounded-2xl w-full flex flex-col align-center justify-center gap-3">
//     <span class="mx-auto font-bold text-lg">Qtheme</span>
//   </div>
//   <div id="qstore_card_toggle" class="h-12 border-solid border-2 p-2 hover:bg-green-800 hover:cursor-pointer border-green-600 rounded-2xl w-full flex flex-col align-center justify-center gap-3">
//     <span class="mx-auto font-bold text-lg">Qstore</span>
//   </div>
// </section>

// <br />

// <section class="lg:w-9/12 mx-auto flex flex-col align-center justify-evenly gap-5 w-full">
//   <div id="bun_http_card" class="h-100 border-solid border-2 p-3 bg-zinc-900 border-orange-500 rouded-2xl w-full flex flex-col align-center justify-center gap-3">
//     <section class="flex flex-col align-center justify-evenly gap-1 w-3/12 mx-auto">
//       <div class="h-12 border-solid border-2 p-2 border-orange-600 rounded-2xl w-full flex flex-col align-center justify-center gap-3">
//         <span class="mx-auto font-bold text-lg">Bun-http</span>
//       </div>
//     </section>
    
//     <span class="text-lg text-white">Very fast HTTP server for Bun. 0 dependencies.</span>

//     <div class="flex align-center">
//       <a href="/portfolio/" className="w-2/12 text-center rounded-md whitespace-nowrap bg-orange-500 px-0.75 py-0.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
//         See blog post
//       </a>
//       <a href="/portfolio/" className="w-2/12 text-center rounded-md whitespace-nowrap px-0.75 py-0.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
//         GitHub repo <span aria-hidden="true">→</span>
//       </a>
//     </div>

//     ```tsx
//     import { http, Res } from "path/to/lib/http"; // http from bun-http repo

//     const str = (val: any) => JSON.stringify(val);

//     http.get("/", (req) => {
//       return new Res(`Hello from home`);
//     });
//     http.get("/product/:productId", (req) => {
//       return new Res(`Product (id: ${req.params.productId})`);
//     });
//     http.post("/blog/create", (req) => {
//       return new Res(`
//         params: ${str(req.params)},
//         query: ${str(req.query)},
//         body: ${str(req.body)}
//       `);
//     });

//     const server = http.serve({ port: 3000 });
//     console.log(`Listening on port ${server.port}...`);

//     /* Example output
//     $ bun main.ts
//         [0.90ms] ".env"
//         Listening on port 3000...
//         8:27:48 PM: 200 GET /
//         8:27:52 PM: 405 GET /blog/123
//         8:27:56 PM: 200 POST /blog/123
//         8:27:58 PM: 200 GET /__endpoints // [DEV] view with list of all endpoints
//     */
//     ```
//   </div>
  
//   <div id="qtheme_card" class="h-100 border-solid border-2 p-3 bg-slate-900 border-rose-500 rouded-2xl w-full flex flex-col align-center justify-center gap-3">
//     <section class="flex flex-col align-center justify-evenly gap-1 w-3/12 mx-auto">
//       <div class="h-12 border-solid border-2 p-2 border-rose-600 rounded-2xl w-full flex flex-col align-center justify-center gap-3">
//         <span class="mx-auto font-bold text-lg">Qtheme</span>
//       </div>
//     </section>
//     <img src="/logos/qtheme.png" alt="Qtheme" class="w-1/12" />
    
//     <span class="text-lg text-white">Light/dark/any your app/website. Works with any framework/vanilla.</span>

//     <div class="flex align-center">
//       <a href="/portfolio/" className="w-2/12 text-center rounded-md whitespace-nowrap bg-rose-500 px-0.75 py-0.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
//         See website
//       </a>
//       <a href="/portfolio/" className="w-2/12 text-center rounded-md whitespace-nowrap px-0.75 py-0.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
//         NPM package <span aria-hidden="true">→</span>
//       </a>
//     </div>

//     ```tsx
//     import { Qtheme } from '@quak.lib/qtheme'
//     import { darkTheme } from 'path/to/your/themes'

//     Qtheme.setTheme(darkTheme)

//     <body class="bg-color text-color">
//       <h1 class="text-primary">Hello world!</h1>
//       <p>This is regular text color</p>
//       <button class="btn">Action</button>
//     </body>
//     ```
//   </div>

//   <div id="qstore_card" class="h-100 border-solid border-2 p-3 bg-zinc-900 border-green-500 rouded-2xl w-full flex flex-col align-center justify-center gap-3">
//     <section class="flex flex-col align-center justify-evenly gap-1 w-3/12 mx-auto">
//       <div class="h-12 border-solid border-2 p-2 border-green-600 rounded-2xl w-full flex flex-col align-center justify-center gap-3">
//         <span class="mx-auto font-bold text-lg">Qstore</span>
//       </div>
//     </section>
//     <img src="/logos/qstore.png" alt="Qstore" class="w-1/12" />
    
//     <span class="text-lg mb-0 text-white">Store for any SPA app. Depends on RxJS.<br />Use it as your reactive source of data.</span>
//     <span class="text-lg mt-0 text-white"></span>

//     <div class="flex align-center">
//       <a href="/portfolio/" className="w-2/12 text-center rounded-md whitespace-nowrap bg-green-500 px-0.75 py-0.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
//         See docs page
//       </a>
//       <a href="/portfolio/" className="w-2/12 text-center rounded-md whitespace-nowrap px-0.75 py-0.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
//         GitHub repo <span aria-hidden="true">→</span>
//       </a>
//     </div>

//     ```tsx
//     import { Injectable } from '@angular/core'
//     import { Store, Action, ActionWith } from 'path/to/qstore.ts'

//     @Injectable({providedIn: 'root'})
//     class CounterStore extends Store<{count: number}> {
//       count$ = this.select(state => state.count)

//       constructor() {
//         super({count: 0})
//       }

//       add(value: number) {
//         this.set({count: this.values.count + value})
//       }
//     }

//     @Component({
//       selector: 'app-counter',
//       template: `
//         <div>
//           <span>Count: {{counterStore.count$ | async}}</span>
//           <button (click)="counterStore.add(1)">Increment</button>
//           <button (click)="counterStore.add(5)">Add 5</button>
//         </div>
//       `
//     })
//     class CounterComponent implements OnInit {
//       constructor(public counterStore: CounterStore) {}
//     }
//     ```
//   </div>
// </section>