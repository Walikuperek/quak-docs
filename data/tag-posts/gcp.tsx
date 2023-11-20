import {GCPTag} from "../../components/tags/gcp";
import { newestUpSorter } from "../sorter";

export const GCPPosts = [
    {
        color: "gcp",
        category: "cloud",
        link: "/learn/google-cloud-platform/running-a-basic-server",
        tag: <GCPTag disabled={true}/>,
        image: <section className="flex align-center justify-center gap-3 h-full overflow-hidden">
            <div className="bg-blue-600 h-40 w-40 p-1 mt-20 text-white font-bold"><span className="text-gray-400 font-bold">$</span> run VM</div>
        </section>,
        author: "Kacper Walczak",
        createdAt: "20-10-2023",
        title: "Running a basic server",
        descriptionTextLines: [
            "Compute Engine on Google Cloud Platform is easy to start with."
        ],
        description: "Compute Engine on Google Cloud Platform is easy to start with.",
        label: "Post from QUAK Learn"
    },
    {
        color: "gcp",
        category: "cloud",
        link: "/learn/google-cloud-platform/deploy-flask-to-appengine",
        tag: <GCPTag disabled={true}/>,
        image: <section className="shadow-lg flex align-center justify-center gap-3 h-full overflow-hidden">
            <div className="flex shadow-2xl justify-between rounded-2xl bg-blue-600 h-40 w-40 p-2 mt-20 text-white font-bold">
                <div className="bg-fuchsia-600 h-20 w-20 rounded-lg p-1 text-white font-bold">Flask<br /><small className="font-thin">➡️ main.py</small></div>
                <span className="text-center text-sm font-bold">App<br />Engine</span>
            </div>
        </section>,
        author: "Kacper Walczak",
        createdAt: "19-11-2023",
        title: "Deploy Flask to AppEngine",
        descriptionTextLines: [
            "Learn how to deploy Flask to AppEngine on Google Cloud Platform."
        ],
        description: "Learn how to deploy Flask to AppEngine on Google Cloud Platform.",
        label: "Post from QUAK Learn"
    },
];
newestUpSorter(GCPPosts);
