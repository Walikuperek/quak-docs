import styles from "./hero-hero.module.css";
import {QuakColored} from "../quak-colored";

// Badges ;)
// <span className="inline-flex items-center bg-green-50 px-2.5 py-1 text-sm font-bold text-green-700 ring-2 ring-inset ring-green-700/10 rounded-full">In progress</span>
// <span className="inline-flex items-center bg-blue-50 px-2.5 py-1 text-sm font-bold text-blue-700 ring-2 ring-inset ring-blue-700/10 rounded-full">Done</span>
// <span className="inline-flex items-center bg-red-50 px-2.5 py-1 text-sm font-bold text-red-700 ring-2 ring-inset ring-red-700/10 rounded-full">Deprecated</span>
// <span className="inline-flex items-center bg-yellow-50 px-2.5 py-1 text-sm font-bold text-yellow-700 ring-2 ring-inset ring-yellow-700/10 rounded-full">Planned</span>
// <span className="inline-flex items-center bg-indigo-50 px-2.5 py-1 text-sm font-bold text-indigo-700 ring-2 ring-inset ring-indigo-700/10 rounded-full">Ideas</span>

function HeroHero() {
    return (
        <>
            <div id="hero_hero" className={styles.heroHero + " h-[800px] lg:h-[600px] clip-fancy-image-bottom overflow-hidden"}>
                <img src="/portfolio/tabelek/tabelek_in_progress.png" alt="Tabelek in progress"
                     className="opacity-30 filter blur object-cover absolute top-0 left-0 w-full h-full"/>
                <div className="relative z-1 h-full">
                    <div className="block mt-10 lg:hidden p-4 h-full pt-5">
                        <div className="flex gap-3 mb-3">
                            <span
                                className="inline-flex items-center bg-orange-50 px-2.5 py-1 text-xs font-bold text-orange-700 ring-2 ring-inset ring-orange-700/10 rounded-full">What's new</span>
                            <a href="https://quak.com.pl/instant-light-dark" target="_blank"
                               className="flex gap-2 items-center">
                                <span className="text-white text-sm">🚀 Launched light-dark-gen page</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red"
                                     className="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                                </svg>
                            </a>
                        </div>
                        <h1 className="mt-5 font-bold text-4xl text-white">AI, Scalable Apps, Cloud, Architecture</h1>
                        <h3 className="mt-3 mb-3 text-xl text-white leading-1">Learn how-to create apps and websites.
                            Start creating apps that scale. Become <span
                                className="px-1 font-bold rounded text-rose-500 bg-rose-900">fullstack(🦆)*</span> solution
                            provider.</h3>
                        <em className="text-rose-200">*simply be like a duck, fullstack</em>
                        <div className="mt-10 flex items-center gap-7">
                            <a
                                href="/learn/"
                                className="font-bold rounded-md whitespace-nowrap bg-white px-3.5 py-2.5 text-gray-900 dark:hover:bg-gray-200 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                Learn programming
                            </a>
                            <a
                                href="/portfolio/"
                                className="font-bold whitespace-nowrap text-white hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                Portfolio <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                    <img src="/portfolio/tabelek/tabelek_in_progress.png" alt="Tabelek in progress"
                         className="block lg:hidden opacity-70 absolute bottom-0 right-0 object-left object-cover rounded shadow-2xl w-96 h-96"/>

                    <div className="hidden lg:block mt-10 p-4 h-full pt-5 relative z-10 max-w-[90rem] ml-auto mr-auto">
                        <div className="flex gap-3 mb-3">
                            <span
                                className="inline-flex items-center bg-orange-50 px-2.5 py-1 text-xs font-bold text-orange-700 ring-2 ring-inset ring-orange-700/10 rounded-full">What's new</span>
                            <a href="https://quak.com.pl/instant-light-dark" target="_blank"
                               className="flex gap-2 items-center hover:underline">
                                <span className="text-white text-sm">🚀 Launched light-dark-generator page</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red"
                                     className="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                                </svg>
                            </a>
                        </div>
                        <div className="bg-rose-500 bg-opacity-30 p-2 pb-5 w-fit rounded ">
                            <h1 className="mt-5 font-bold text-5xl text-white max-w-lg">AI, Scalable Apps, Cloud, Architecture</h1>
                            <h3 className="mt-3 mb-3 text-xl text-white leading-1 mx-w-lg">
                                Learn how-to create apps and websites.<br />
                                Start creating apps that scale.<br />
                                Become <span className="px-1 font-bold rounded text-rose-500 bg-rose-900">fullstack(🦆)*</span> solution provider.
                            </h3>
                            <em className="text-rose-200">*simply be like a duck, fullstack</em>
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
                    <img src="/portfolio/tabelek/tabelek_in_progress.png" alt="Tabelek in progress"
                         className="hidden lg:block absolute z-0 top-0 right-0 opacity-70 translate-x-[10px] object-left object-cover rounded shadow-2xl h-[400px]"/>
                </div>
            </div>
            <div className="h-[800px] lg:h-[600px]">&nbsp;</div>
        </>
    );
}

export default function MyApp() {
    return <HeroHero/>;
}
