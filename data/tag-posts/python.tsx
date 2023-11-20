import {PythonTag} from "../../components/tags/python";

export const PythonPosts = [
    {
        color: "python",
        category: "backend",
        link: "/learn/python/resize-image",
        tag: <PythonTag disabled={true} />,
        image: <section className="shadow-lg flex align-center justify-center gap-3 h-full overflow-hidden">
            <div className="bg-pink-600 h-20 w-20 p-1 mt-20 text-white font-bold">200x200</div>
            <div className="bg-pink-600 h-40 w-40 p-1 mt-20 text-white font-bold">400x400</div>
        </section>,
        author: "Kacper Walczak",
        createdAt: "28-10-2023",
        title: <>Resize <b>img</b> with Python</>,
        descriptionTextLines: [
            "Get to know how to use PIL library",
            "for Python img resize solution."
        ],
        description: "Get to know how to use PIL library for Python img resize solution.",
        label: <>Latest post from <b>QUAK Learn</b></>
    },
];
