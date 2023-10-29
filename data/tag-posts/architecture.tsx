import {ArchitectureTag} from "../../components/tags/architecture";

export const ArchitecturePosts = [
    {
        color: "architecture",
        category: "frontend",
        link: "/learn/architecture/drd-frontend",
        tag: <ArchitectureTag disabled={true} />,
        image: <section className="flex align-center justify-center gap-3 h-full overflow-hidden">
            <div className="flex flex-col bg-gray-800 h-40 w-40 p-1 mt-20 text-white font-bold">
                <p>DTO<br />Repository<br />Domain</p>
            </div>
        </section>,
        author: "Kacper Walczak",
        createdAt: "15-07-2023",
        title: "DRD Frontend",
        description: "SPA architecture for frontend applications."
    }
];
