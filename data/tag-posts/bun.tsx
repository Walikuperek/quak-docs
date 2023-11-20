import {BunTag} from "../../components/tags/bun";

export const BunPosts = [
    {
        color: "bun",
        category: "backend",
        link: "/learn/bun/build-http-server",
        tag: <BunTag disabled={true} />,
        image: <section className="shadow-lg flex align-center justify-center gap-3 h-full overflow-hidden">
            <div className="bg-pink-600 animate-bounce delay-1000 h-20 w-20 p-1 mt-20 text-white font-bold">Req</div>
            <div className="bg-blue-600 h-40 w-40 p-1 mt-20 text-white font-bold">Server</div>
        </section>,
        author: "Kacper Walczak",
        createdAt: "25-10-2023",
        title: "Build http server",
        description: "Build with me Express like library but with Bun. Learn how to build http server with Bun."
    },
];
