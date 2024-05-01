import {ArchitectureTag} from "../../components/tags/architecture";

export const ArchitecturePosts = [
    {
        color: "architecture",
        category: "frontend",
        link: "/learn/architecture/drd-frontend",
        tag: <ArchitectureTag disabled={true} />,
        image: <section className="shadow-lg flex align-center justify-center gap-3 h-full overflow-hidden">
            <div className="flex flex-col bg-gray-800 h-40 w-40 p-1 mt-20 text-white font-bold">
                <p>DTO<br />Repository<br />Domain</p>
            </div>
        </section>,
        author: "Kacper Walczak",
        createdAt: "15-07-2023",
        title: "DRD Frontend",
        description: "SPA architecture for frontend applications.",
        descriptionTextLines: ["SPA architecture for frontend applications."]
    },
    // {
    //     color: "architecture",
    //     category: "backend",
    //     link: "/learn/architecture/mvc",
    //     tag: <ArchitectureTag disabled={true} />,
    //     image: <section className="shadow-lg flex align-center justify-center gap-3 h-full overflow-hidden">
    //         <div className="flex flex-col bg-black h-40 w-40 p-1 mt-20 text-white font-bold">
    //             <p>MVC</p>
    //             <hr/>
    //             <p>Arch</p>
    //         </div>
    //     </section>,
    //     author: "Kacper Walczak",
    //     createdAt: "19-04-2024",
    //     title: "MVC Architecture",
    //     description: "What is and when to use MVC architecture.",
    //     descriptionTextLines: ["What is and when to use MVC architecture."]
    // },
    // {
    //     color: "architecture",
    //     category: "backend",
    //     link: "/learn/architecture/monolith",
    //     tag: <ArchitectureTag disabled={true} />,
    //     image: <section className="shadow-lg flex align-center justify-center gap-3 h-full overflow-hidden">
    //         <div className="flex flex-col bg-black h-40 w-40 p-1 mt-20 text-white font-bold">
    //             <p>Monolith</p>
    //             <hr/>
    //             <p>Arch</p>
    //         </div>
    //     </section>,
    //     author: "Kacper Walczak",
    //     createdAt: "20-04-2024",
    //     title: "Monolith Architecture",
    //     description: "What is and when to use Monolith architecture.",
    //     descriptionTextLines: ["What is and when to use Monolith architecture."]
    // },
    // {
    //     color: "architecture",
    //     category: "backend",
    //     link: "/learn/architecture/modular-monolith",
    //     tag: <ArchitectureTag disabled={true} />,
    //     image: <section className="shadow-lg flex align-center justify-center gap-3 h-full overflow-hidden">
    //         <div className="flex flex-col bg-black h-40 w-40 p-1 mt-20 text-white font-bold">
    //             <p>Modular Monolith</p>
    //             <hr/>
    //             <p>Arch</p>
    //         </div>
    //     </section>,
    //     author: "Kacper Walczak",
    //     createdAt: "21-04-2024",
    //     title: "Modular Monolith Architecture",
    //     description: "What is and when to use Modular Monolith architecture.",
    //     descriptionTextLines: ["What is and when to use Modular Monolith architecture."]
    // },
    // {
    //     color: "architecture",
    //     category: "backend",
    //     link: "/learn/architecture/microservice",
    //     tag: <ArchitectureTag disabled={true} />,
    //     image: <section className="shadow-lg flex align-center justify-center gap-3 h-full overflow-hidden">
    //         <div className="flex flex-col bg-black h-40 w-40 p-1 mt-20 text-white font-bold">
    //             <p>Microservice</p>
    //             <hr/>
    //             <p>Arch</p>
    //         </div>
    //     </section>,
    //     author: "Kacper Walczak",
    //     createdAt: "22-04-2024",
    //     title: "Microservice Architecture",
    //     description: "What is and when to use Microservice architecture.",
    //     descriptionTextLines: ["What is and when to use Microservice architecture."]
    // },
    // {
    //     color: "architecture",
    //     category: "backend",
    //     link: "/learn/architecture/rest-crud",
    //     tag: <ArchitectureTag disabled={true} />,
    //     image: <section className="shadow-lg flex align-center justify-center gap-3 h-full overflow-hidden">
    //         <div className="flex flex-col bg-black h-40 w-40 p-1 mt-20 text-white font-bold">
    //             <p>REST CRUD</p>
    //             <hr/>
    //             <p>Arch</p>
    //         </div>
    //     </section>,
    //     author: "Kacper Walczak",
    //     createdAt: "23-04-2024",
    //     title: "REST CRUD Architecture",
    //     description: "What is and when to use REST CRUD architecture.",
    //     descriptionTextLines: ["What is and when to use REST CRUD architecture."]
    // },
    // {
    //     color: "architecture",
    //     category: "backend",
    //     link: "/learn/architecture/cqrs",
    //     tag: <ArchitectureTag disabled={true} />,
    //     image: <section className="shadow-lg flex align-center justify-center gap-3 h-full overflow-hidden">
    //         <div className="flex flex-col bg-black h-40 w-40 p-1 mt-20 text-white font-bold">
    //             <p>CQRS</p>
    //             <hr/>
    //             <p>Arch</p>
    //         </div>
    //     </section>,
    //     author: "Kacper Walczak",
    //     createdAt: "24-04-2024",
    //     title: "CQRS",
    //     description: "What is and when to use CQRS.",
    //     descriptionTextLines: ["What is and when to use CQRS."]
    // },
    // {
    //     color: "architecture",
    //     category: "backend",
    //     link: "/learn/architecture/hexagonal",
    //     tag: <ArchitectureTag disabled={true} />,
    //     image: <section className="shadow-lg flex align-center justify-center gap-3 h-full overflow-hidden">
    //         <div className="flex flex-col bg-black h-40 w-40 p-1 mt-20 text-white font-bold">
    //             <p>Hexagonal</p>
    //             <hr/>
    //             <p>Arch</p>
    //         </div>
    //     </section>,
    //     author: "Kacper Walczak",
    //     createdAt: "25-04-2024",
    //     title: "Hexagonal Architecture",
    //     description: "What is and when to use Hexagonal architecture.",
    //     descriptionTextLines: ["What is and when to use Hexagonal architecture."]
    // },
    // {
    //     color: "architecture",
    //     category: "backend",
    //     link: "/learn/architecture/ddd",
    //     tag: <ArchitectureTag disabled={true} />,
    //     image: <section className="shadow-lg flex align-center justify-center gap-3 h-full overflow-hidden">
    //         <div className="flex flex-col bg-black h-40 w-40 p-1 mt-20 text-white font-bold">
    //             <p>DDD</p>
    //             <hr/>
    //             <p>Approach</p>
    //         </div>
    //     </section>,
    //     author: "Kacper Walczak",
    //     createdAt: "26-04-2024",
    //     title: "DDD way",
    //     description: "What is and when to use DDD approach.",
    //     descriptionTextLines: ["What is and when to use DDD approach."]
    // },
    // {
    //     color: "architecture",
    //     category: "backend",
    //     link: "/learn/architecture/tdd",
    //     tag: <ArchitectureTag disabled={true} />,
    //     image: <section className="shadow-lg flex align-center justify-center gap-3 h-full overflow-hidden">
    //         <div className="flex flex-col bg-black h-40 w-40 p-1 mt-20 text-white font-bold">
    //             <p>TDD</p>
    //             <hr/>
    //             <p>Approach</p>
    //         </div>
    //     </section>,
    //     author: "Kacper Walczak",
    //     createdAt: "27-04-2024",
    //     title: "TDD in practice",
    //     description: "What is and when to use TDD approach.",
    //     descriptionTextLines: ["What is and when to use TDD approach."]
    // },
    {
        color: "architecture",
        category: "backend",
        link: "/learn/architecture/cpu-simulator",
        tag: <ArchitectureTag disabled={true} />,
        image: <section className="shadow-lg flex align-center justify-center gap-3 h-full overflow-hidden">
            <div className="flex rounded flex-col justify-evenly items-center bg-violet-500 h-40 w-40 p-1 mt-20 text-white font-bold">
                <p>Simulator</p>
                <div className="flex justify-center items-center bg-black border-dashed border-sky-500 border-2 h-20 w-20">
                    <p>CPU</p>
                </div>
            </div>
        </section>,
        author: "Kacper Walczak",
        createdAt: "28-04-2024",
        title: "Lets build a CPU simulator",
        description: "Lets build a CPU simulator.",
        descriptionTextLines: ["Lets build a CPU simulator."]
    }
];
