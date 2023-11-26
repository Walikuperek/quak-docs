import {newestUpSorter} from "../sorter";
import {ReactTag} from "../../components/tags/react";

export const ReactPosts = [{
        color: "react",
        category: "frontend",
        link: "/learn/react/generate-map-for-game",
        tag: <ReactTag disabled={true}/>,
        image: <section className="shadow-lg flex align-center justify-center gap-3 h-full overflow-hidden">
            <img src="/assets/read/gen_map_1.png" className="mx-auto h-40 object-contain mt-20 p-1" width="100%" />
        </section>,
        author: "Kacper Walczak",
        createdAt: "26-11-2023",
        title: <>Arcade Map Generator</>,
        descriptionTextLines: [
            "Generate random maps for arcade games with React.",
        ],
        description: "Generate random maps for arcade games with React.",
        label: <></>
    },
];
newestUpSorter(ReactPosts);
