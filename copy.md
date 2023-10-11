<h3 class="text-lg mb-2 text-gray-500 font-bold">LEARN</h3>
<h2 class="text-4xl mb-3 font-bold">
  Learn with <span class="text-yellow-500">Q</span>
  <span class="text-fuchsia-500">U</span>
  <span class="text-violet-500">A</span>
  <span class="text-red-500">K</span>
</h2>
<p class="text-gray-500">Go for knowledge about programming aspects. QUAK</p>
<p class="text-gray-500">
  created multiple apps, games and websites, take this knowlege
</p>
<p class="mb-10 text-gray-500">from QUAK. Click Categories to learn more.</p>

<section class="flex align-center justify-evenly gap-1 w-full">
  <div class="h-12 border-solid border-2 p-2 border-violet-500 hover:border-violet-900 hover:cursor-pointer rouded-2xl w-full flex flex-col align-center justify-center gap-3">
    <span class="mx-auto font-bold text-lg">Backend</span>
  </div>
  <div class="h-12 border-solid border-2 border-fuchsia-500 hover:border-fuchsia-900 hover:cursor-pointer rouded-2xl w-full flex flex-col align-center justify-center gap-3">
    <span class="mx-auto font-bold text-lg">Frontend</span>
  </div>
  <div class="h-12 border-solid border-2 border-sky-500 hover:border-sky-900 hover:cursor-pointer rouded-2xl w-full flex flex-col align-center justify-center gap-3">
    <span class="mx-auto font-bold text-lg">Cloud</span>
  </div>
</section>

<section class="bg-lines flex mt-10 mb-20 h-12 w-full"></section>

<h3 class="text-lg mb-2 text-gray-500 font-bold">READ</h3>
<h2 class="text-4xl mb-3 font-bold">Latest readings</h2>
<p class="text-gray-500">Readings are sites with detailed informations</p>
<p class="text-gray-500">about given topic. Read latest ones from Learn</p>
<p class="mb-10 text-gray-500">or go to [Categories](/learn) list.</p>

<section class="mb-20 flex align-center justify-evenly gap-1 w-full">
  <div class="p-2 border-solid border-2 border-violet-900 hover:border-violet-500 hover:bg-violet-300 hover:text-black hover:cursor-pointer w-full flex flex-col align-center gap-3">
    <span class="bg-orange-50 border border-2 border-orange-300 w-fit px-5 text-black rounded-lg">
      Bun
    </span>
    <span class="font-bold text-lg">Bun http library</span>
    <p class="text-gray-500 mt-0">
      Build with me Express like library but with Bun.
    </p>
  </div>
  <div class="p-2 border-solid border-2 border-fuchsia-900 hover:border-fuchsia-500 hover:bg-fuchsia-300 hover:text-black hover:cursor-pointer w-full flex flex-col align-center gap-3">
    <span class="bg-yellow-200 border border-2 border-yellow-500 w-fit px-5 text-black rounded-lg">
      JavaScript
    </span>
    <span class="font-bold text-lg">Light/dark</span>
    <p class="text-gray-500 mt-0">
      Check out how to light/dark your app and more.
    </p>
  </div>
  <div class="p-2 border-solid border-2 border-sky-900 hover:border-sky-500 hover:bg-sky-300 hover:text-black hover:cursor-pointer w-full flex flex-col align-center gap-3">
    <span class="bg-blue-200 border border-2 border-blue-500 w-fit px-5 text-black rounded-lg">
      GCP
    </span>
    <span class="font-bold text-lg">Running a basic server</span>
    <p class="text-gray-500 mt-0">
      Compute Engine on Google Cloud Platform is easy to start with.
    </p>
  </div>
</section>

<section class="bg-lines-accent flex mt-10 mb-20 h-40 w-full"></section>

<h3 class="text-lg mb-2 text-gray-500 font-bold">LIBRARIES</h3>
<h2 class="text-4xl mb-3 font-bold">
  Libraries builded by <span class="text-yellow-500">Q</span>
  <span class="text-fuchsia-500">U</span>
  <span class="text-violet-500">A</span>
  <span class="text-red-500">K</span>
</h2>
<p class="text-gray-500">QUAK during the process of library creation is</p>
<p class="text-gray-500">focused mostly on end user experience. We devs,</p>
<p class="mb-10 text-gray-500">deserved it. Click Library to learn more.</p>

<section class="flex flex-col align-center justify-evenly gap-1 w-full lg:w-9/12 mx-auto">
  <div class="h-100 border-solid border-2 p-3 border-rose-500 rouded-2xl w-full flex flex-col align-center justify-center gap-3">
    <section class="flex flex-col align-center justify-evenly gap-1 w-3/12 mx-auto">
      <div class="h-12 border-solid border-2 p-2 border-rose-900 rounded-2xl w-full flex flex-col align-center justify-center gap-3">
        <span class="mx-auto font-bold text-lg">Qtheme</span>
      </div>
    </section>
    <img src="/logos/qtheme.png" alt="Qtheme" class="w-1/12" />
    
    <span class="text-lg text-gray-500">Light/dark or any theme for your app/website.</span>

    <div class="flex align-center">
      <a href="/portfolio/" className="w-2/12 text-center rounded-md whitespace-nowrap bg-rose-500 px-0.75 py-0.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
        See website
      </a>
      <a href="/portfolio/" className="w-2/12 text-center rounded-md whitespace-nowrap px-0.75 py-0.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
        NPM package <span aria-hidden="true">→</span>
      </a>
    </div>

    ```tsx
    import { Qtheme } from '@quak.lib/qtheme'
    import { darkTheme } from 'path/to/your/themes'

    Qtheme.setTheme(darkTheme)

    <body class="bg-color text-color">
      <h1 class="text-primary">Hello world!</h1>
      <p>This is regular text color</p>
      <btn class="btn">Action</btn>
    </body>
    ```
  </div>
</section>
