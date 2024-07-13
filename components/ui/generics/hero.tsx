function HeroBoxWhatsNew() {
    return (
        <div className="p-4 h-full relative z-10">
            <div className="flex gap-3 mb-3">
                <span className="inline-flex items-center bg-orange-50 px-2.5 py-1 text-xs font-bold text-orange-700 ring-2 ring-inset ring-orange-700/10 rounded-full">
                    What's new
                </span>
                <a href="https://quak.com.pl/instant-light-dark" target="_blank"
                   className="flex gap-2 items-center hover:underline">
                    <span className="text-white text-sm">🚀 New light-dark CSS generator</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red"
                         className="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                </a>
            </div>
            <div className="bg-rose-500 bg-opacity-30 p-2 pb-5 w-fit rounded">
                <h1 className="mt-5 font-bold text-5xl text-white max-w-lg">AI, Scalable Apps, Cloud,
                    Architecture</h1>
                <h3 className="mt-3 mb-3 text-xl text-white leading-1 mx-w-lg">
                    Learn how-to create apps and websites.<br/>
                    Start creating apps that scale.<br/>
                    Become <span
                    className="px-1 font-bold rounded text-rose-500 bg-rose-900">fullstack(🦆)*</span> solution
                    provider.
                </h3>
                <em className="text-rose-200">*simply be like a duck, fullstack (duck can fly, walk and swim
                    :)</em>
                <div className="mt-10 flex items-center gap-7">
                    <a
                        href="/learn/"
                        className="font-bold rounded-md whitespace-nowrap bg-white px-3.5 py-2.5 text-sm text-gray-900 dark:hover:bg-gray-200 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        Learn programming
                    </a>
                    <a
                        href="/portfolio/"
                        className="font-bold text-sm whitespace-nowrap leading-6 text-white hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        Portfolio <span aria-hidden="true">→</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export {HeroBoxWhatsNew};
