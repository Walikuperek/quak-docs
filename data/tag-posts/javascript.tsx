import {JSTag} from "../../components/tags/javascript";

export const JavascriptPosts = [
    {
        color: "javascript",
        category: "frontend",
        link: "/learn/javascript/light-dark",
        tag: <JSTag disabled={true}/>,
        image: <section className="flex align-center justify-center h-full overflow-hidden">
            <div className="bg-zinc-200 h-20 w-20 p-1 mt-20 text-black font-bold">Light</div>
            <div className="bg-zinc-500 h-20 w-20 p-1 mt-20 text-white font-bold">Dark</div>
        </section>,
        author: "Kacper Walczak",
        createdAt: "23-10-2023",
        title: "Light/dark",
        descriptionTextLines: [
            "Check out how to light/dark your website or app."
        ],
        description: "Check out how to light/dark your website or app.",
        label: "Post from QUAK Learn"
    }
];