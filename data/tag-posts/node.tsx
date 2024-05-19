import {NodeTag} from "../../components/tags/node";
import {newestUpSorter} from "../sorter";

export const NodePosts = [
    {
        color: "node",
        category: "backend",
        link: "/learn/node/deploy-to-cpanel",
        tag: <NodeTag disabled={true} />,
        image: <section className="shadow-lg flex align-center justify-center gap-3 h-full overflow-hidden">
            <div className="flex rounded flex-col justify-evenly items-center bg-orange-500 h-40 w-40 p-1 mt-20 text-white font-bold">
                <p>Deploy</p>
                <div className="flex justify-center items-center bg-black border-dashed border-yellow-500 border-2 h-20 w-20">
                    <p>CPanel</p>
                </div>
            </div>
        </section>,
        author: "Kacper Walczak",
        createdAt: "19-05-2024",
        title: "Deploy static HTML to CPanel",
        description: "CD- Deploy static HTML to the shared hosting CPanel.",
        descriptionTextLines: ["CD - Deploy static HTML to the shared hosting CPanel."]
    }
];
newestUpSorter(NodePosts);

