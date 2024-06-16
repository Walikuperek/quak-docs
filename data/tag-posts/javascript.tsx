import {JSTag} from "../../components/tags/javascript";
import {newestUpSorter} from "../sorter";

export const JavascriptPosts = [
    {
        color: "javascript",
        category: "frontend",
        link: "/learn/javascript/light-dark",
        tag: <JSTag disabled={true}/>,
        image: <section className="shadow-lg flex align-center justify-center h-full overflow-hidden">
            <div className="bg-zinc-200 h-20 w-20 p-1 mt-20 text-black font-bold">Light</div>
            <div className="bg-zinc-500 h-20 w-20 p-1 mt-20 text-white font-bold">Dark</div>
        </section>,
        author: "Kacper Walczak",
        createdAt: "12-06-2024",
        title: "Light/dark",
        descriptionTextLines: [
            "Check out how to light/dark your website or app."
        ],
        description: "Check out how to light/dark your website or app.",
        label: <></>
    },
    {
        color: "javascript",
        category: "frontend",
        link: "/learn/javascript/map",
        tag: <JSTag disabled={true}/>,
        image: <section className="shadow-lg flex align-center justify-center h-full overflow-hidden">
            <div className="bg-black h-40 w-40 p-1 mt-20 text-white font-bold"><span className="font-bold">new Map()</span><span className="text-gray-600"><br />&nbsp;&nbsp;.<span className="text-violet-500">set</span>(key, value)<br />&nbsp;&nbsp;.<span className="text-violet-500">get</span>(key)</span></div>
        </section>,
        author: "Kacper Walczak",
        createdAt: "07-11-2023",
        title: "Maps in JS",
        descriptionTextLines: [
            "Learn how to use Map in JS, interesting usage."
        ],
        description: "Learn how to use Map in JS, interesting usage.",
        label: <></>
    }
];
newestUpSorter(JavascriptPosts);
