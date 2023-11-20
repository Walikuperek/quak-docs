# QUAK Website


> [!IMPORTANT]
> This is a QUAK.COM.PL website repository.

This is README.md for [QUAK.COM.PL](https://quak.com.pl) website maintenace.

## Local Development

First, run `pnpm i` to install the dependencies.

Then, run `pnpm dev` to start the development server and visit localhost:3000.

```

<div className="flex flex-row flex-wrap justify-center gap-2">
  <a href="/portfolio/tech-app" className="w-96 flex flex-col align-center justify-between rounded-2xl bg-purple-500 bg-opacity-10">
    <header className="h-24 flex flex-row justify-center items-center gap-3 w-full p-2">
      <div className="bg-purple-900 bg-opacity-30 h-20 w-10 rounded-lg p-1 text-gray-500 flex items-center justify-center">Mob</div>
      <div className="bg-purple-900 bg-opacity-30 h-16 w-20 rounded-lg p-1 text-gray-500 flex items-center justify-center">Desktop</div>
    </header>
    <section className="shadow-lg flex flex-col gap-3 rounded-b-2xl bg-purple-700 h-60 overflow-hidden">
      <div className="flex shadow-2xl justify-between rounded-2xl p-2 text-white font-bold">
          <div className="bg-purple-600 h-20 w-20 rounded-lg p-1 text-white font-bold">Features<br /><small className="font-thin">➡️ use navi<br />➡️ sign doc</small></div>
          <small className="text-center text-sm font-bold">App</small>
      </div>
      <div className="p-2 h-20 w-full rounded-lg p-1 text-purple-100 font-bold">Regular features<br /><small className="font-thin"><span className="text-green-400">+</span> authentication<br /><span className="text-green-400">+</span> user settings<br /><span className="text-green-400">+</span> generating PDF</small></div>
    </section>
  </a>
</div>
```
