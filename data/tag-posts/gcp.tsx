import {GCPTag} from "../../components/tags/gcp";

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
    }
];