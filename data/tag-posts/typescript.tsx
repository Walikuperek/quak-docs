import {TSTag} from "../../components/tags/typescript";
import {newestUpSorter} from "../sorter";

export const TypescriptPosts = [
    {
        color: "typescript",
        category: "backend",
        link: "/learn/typescript/dependency-injection",
        tag: <TSTag disabled={true}/>,
        image: <section className="shadow-lg flex align-center justify-center gap-3 h-full overflow-hidden">
            <div className="flex flex-col">
                <div className="bg-pink-600 h-10 w-20 p-1 mt-20 text-white font-bold">Service</div>
                <div className="bg-pink-600 h-10 w-20 p-1 mt-1 text-white font-bold">Service</div>
            </div>
            <div className="bg-black h-40 w-40 p-1 mt-20 text-white font-bold">
                <span className="text-sm text-orange-500">@Injectable()</span><br/><span
                className="text-sm text-orange-500">class</span> App
            </div>
        </section>,
        author: "Kacper Walczak",
        createdAt: "05-11-2023",
        title: <><b>DI</b> in TypeScript</>,
        descriptionTextLines: [
            "Learn how to implement Dependency Injection in TS.",
        ],
        description: "Learn how to implement Dependency Injection in TS.",
        label: <></>
    },
    {
        color: "typescript",
        category: "frontend",
        link: "/learn/typescript/discriminated-union",
        tag: <TSTag disabled={true}/>,
        image: <section className="shadow-lg flex align-center justify-center gap-3 h-full overflow-hidden">
            <div className="bg-violet-500 h-40 w-40 p-1 mt-20 text-white font-bold">
            <span className="text-lg">
                $ buyProduct<br/>
                <span className="text-violet-300">&middot; vipCode?</span>
            </span>
            </div>
            <div className="flex flex-col">
                <div className="bg-fuchsia-600 h-10 w-20 p-1 mt-20 text-white font-bold">VIPUser</div>
                <div className="bg-fuchsia-600 h-10 w-20 p-1 mt-1 text-white font-bold">User</div>
            </div>
        </section>,
        author: "Kacper Walczak",
        createdAt: "08-11-2023",
        title: <>Discriminated Unions</>,
        descriptionTextLines: [
            "Learn how to deal with optional properties in typescript.",
        ],
        description: "Learn how to deal with optional properties in typescript.",
        label: <></>
    },
    {
        color: "typescript",
        category: "frontend",
        link: "/learn/typescript/perfect-timer-for-web",
        tag: <TSTag disabled={true}/>,
        image: <section className="flex align-center justify-center gap-3 h-full overflow-hidden">
            <div className="bg-violet-500 h-40 w-40 p-1 mt-20 text-white font-bold">
                <span className="text-lg">
                    ⏰ Thick<br />
                    <span className="text-violet-300">⌛ now?</span>
                    <br />
                    <br />
                    <br />
                    ... tik, tok
                </span>
            </div>
            <div className="flex flex-col">
                <div className="bg-fuchsia-600 h-10 w-20 p-1 mt-20 text-white font-bold animate-bounce">Tik</div>
                <div className="bg-fuchsia-600 h-10 w-20 p-1 mt-1 text-white font-bold">Tok</div>
            </div>
        </section>,
        author: "Kacper Walczak",
        createdAt: "10-08-2024",
        title: <>Perfect Timer for the Web</>,
        descriptionTextLines: [
            "Learn how to create perfect 10min, etc. timer for your apps in typescript.",
        ],
        description: "Learn how to create perfect 10min, etc. timer for your apps in typescript.",
        label: <></>
    },
    {
        color: "typescript",
        category: "frontend",
        link: "/learn/typescript/event-store",
        tag: <TSTag disabled={true}/>,
        image: <section className="flex align-center justify-center gap-3 h-full overflow-hidden">
            <div className="bg-violet-500 h-40 w-40 p-1 mt-20 text-white font-bold">
                <span className="text-lg">
                    Event<br />
                    <span className="text-violet-300">⌛ timestamp</span><br />
                    <span className="text-violet-300">📊 data</span>
                </span>
            </div>
            <div className="flex flex-col">
                <div className="bg-fuchsia-600 h-10 w-20 p-1 mt-20 text-white font-bold animate-bounce">Event</div>
                <div className="bg-fuchsia-600 h-10 w-20 p-1 mt-1 text-white font-bold">Events,</div>
            </div>
        </section>,
        author: "Kacper Walczak",
        createdAt: "20-08-2024",
        title: <>EventStore for Event Sourcing</>,
        descriptionTextLines: [
            "Dive into Event Sourcing internals, learn how to build Event Store.",
        ],
        description: "Dive into Event Sourcing internals, learn how to build Event Store.",
        label: <></>
    },
    {
        color: "typescript",
        category: "frontend",
        link: "/learn/typescript/unit-testing-with-mockclock",
        tag: <TSTag disabled={true}/>,
        image: <section className="flex align-center justify-center gap-3 h-full overflow-hidden">
            <img src="/assets/read/clock.png" className="object-fit rounded-2xl mt-5" />
        </section>,
        author: "Kacper Walczak",
        createdAt: "19-08-2024",
        title: <><b>MockClock</b> Unit Testing</>,
        descriptionTextLines: [
            "Mock time to check wheter product can be returned in tests within 30 days threshold.",
        ],
        description: "Mock time to check wheter product can be returned in tests within 30 days threshold.",
        label: <></>
    },
];
newestUpSorter(TypescriptPosts);
