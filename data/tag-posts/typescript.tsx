import {TSTag} from "../../components/tags/typescript";

export const TypescriptPosts = [
    {
        color: "typescript",
        category: "backend",
        link: "/learn/typescript/dependency-injection",
        tag: <TSTag disabled={true}/>,
        image: <section className="flex align-center justify-center gap-3 h-full overflow-hidden">
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
];
