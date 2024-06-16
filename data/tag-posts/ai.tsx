import {newestUpSorter} from "../sorter";
import {AITag} from "../../components/tags/ai";

export const AIPosts = [
    {
        color: "ai",
        category: "backend",
        link: "/learn/ai/scrap-youtube",
        tag: <AITag disabled={true} />,
        image: <section className="shadow-lg flex align-center justify-center gap-3 h-full overflow-hidden">
            <div
                className="flex rounded flex-col justify-evenly items-center bg-green-500 h-40 w-40 p-1 mt-20 text-white font-bold">
                <p>SCRAPE</p>
                <div
                    className="flex flex-col justify-center items-center bg-black border-dashed border-emerald-300 border-2 h-20 w-20">
                    <p>DATA</p>
                    <p>DATA</p>
                    <p>DATA</p>
                </div>
            </div>
        </section>,
        author: "Kacper Walczak",
        createdAt: "10-06-2024",
        title: "Scrap Youtube with AI",
        description: "Scrap data from Youtube platform with an AI help.",
        descriptionTextLines: ["Scrap data from Youtube platform with an AI help."]
    }
];
newestUpSorter(AIPosts);
