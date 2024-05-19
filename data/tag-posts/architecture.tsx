import {ArchitectureTag} from "../../components/tags/architecture";
import {newestUpSorter} from "../sorter";

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
    },
    {
        color: "architecture",
        category: "backend",
        link: "/learn/architecture/web-architectures",
        tag: <ArchitectureTag disabled={true} />,
        image: <section className="shadow-lg flex align-center justify-center gap-3 h-full overflow-hidden">
            <div className="flex flex-col bg-violet-900 h-40 w-40 p-2 mt-20 text-white font-bold rounded">
                <p>Ways to build</p>
                <hr/>
                <ul>
                    <li className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-bank" viewBox="0 0 16 16">
                            <path
                                d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.5.5 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89zM3.777 3h8.447L8 1zM2 6v7h1V6zm2 0v7h2.5V6zm3.5 0v7h1V6zm2 0v7H12V6zM13 6v7h1V6zm2-1V4H1v1zm-.39 9H1.39l-.25 1h13.72z"/>
                        </svg>
                        <span className="text-violet-500">MVC</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-bank" viewBox="0 0 16 16">
                            <path
                                d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.5.5 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89zM3.777 3h8.447L8 1zM2 6v7h1V6zm2 0v7h2.5V6zm3.5 0v7h1V6zm2 0v7H12V6zM13 6v7h1V6zm2-1V4H1v1zm-.39 9H1.39l-.25 1h13.72z"/>
                        </svg>
                        <span className="text-violet-500">CQRS</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-bank" viewBox="0 0 16 16">
                            <path
                                d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.5.5 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89zM3.777 3h8.447L8 1zM2 6v7h1V6zm2 0v7h2.5V6zm3.5 0v7h1V6zm2 0v7H12V6zM13 6v7h1V6zm2-1V4H1v1zm-.39 9H1.39l-.25 1h13.72z"/>
                        </svg>
                        <span className="text-violet-500">Microservice</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-bank" viewBox="0 0 16 16">
                            <path
                                d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.5.5 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89zM3.777 3h8.447L8 1zM2 6v7h1V6zm2 0v7h2.5V6zm3.5 0v7h1V6zm2 0v7H12V6zM13 6v7h1V6zm2-1V4H1v1zm-.39 9H1.39l-.25 1h13.72z"/>
                        </svg>
                        <span className="text-violet-500">...</span>
                    </li>
                </ul>
            </div>
        </section>,
        author: "Kacper Walczak",
        createdAt: "04-05-2024",
        title: "Architectures for web applications",
        description: "Lets learn how to use different kinds of architecture.",
        descriptionTextLines: ["Lets learn how to use different kinds of architecture."]
    },
    {
        color: "architecture",
        category: "backend",
        link: "/learn/architecture/mvc",
        tag: <ArchitectureTag disabled={true} />,
        image: <section className="shadow-lg flex align-center justify-center gap-3 h-full overflow-hidden">
            <div className="flex flex-col bg-violet-900 h-40 w-40 p-2 mt-20 text-white font-bold rounded">
                <p>Architecture</p>
                <hr/>
                <ul>
                    <li className="flex items-center gap-2 p-1 bg-violet-700">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-bank" viewBox="0 0 16 16">
                            <path
                                d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.5.5 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89zM3.777 3h8.447L8 1zM2 6v7h1V6zm2 0v7h2.5V6zm3.5 0v7h1V6zm2 0v7H12V6zM13 6v7h1V6zm2-1V4H1v1zm-.39 9H1.39l-.25 1h13.72z"/>
                        </svg>
                        <span>MVC</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-bank" viewBox="0 0 16 16">
                            <path
                                d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.5.5 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89zM3.777 3h8.447L8 1zM2 6v7h1V6zm2 0v7h2.5V6zm3.5 0v7h1V6zm2 0v7H12V6zM13 6v7h1V6zm2-1V4H1v1zm-.39 9H1.39l-.25 1h13.72z"/>
                        </svg>
                        <span className="text-violet-500">CQRS</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-bank" viewBox="0 0 16 16">
                            <path
                                d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.5.5 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89zM3.777 3h8.447L8 1zM2 6v7h1V6zm2 0v7h2.5V6zm3.5 0v7h1V6zm2 0v7H12V6zM13 6v7h1V6zm2-1V4H1v1zm-.39 9H1.39l-.25 1h13.72z"/>
                        </svg>
                        <span className="text-violet-500">Microservice</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-bank" viewBox="0 0 16 16">
                            <path
                                d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.5.5 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89zM3.777 3h8.447L8 1zM2 6v7h1V6zm2 0v7h2.5V6zm3.5 0v7h1V6zm2 0v7H12V6zM13 6v7h1V6zm2-1V4H1v1zm-.39 9H1.39l-.25 1h13.72z"/>
                        </svg>
                        <span className="text-violet-500">...</span>
                    </li>
                </ul>
            </div>
        </section>,
        author: "Kacper Walczak",
        createdAt: "05-05-2024",
        title: "MVC Architecture",
        description: "Lets learn how to use MVC architecture.",
        descriptionTextLines: ["Lets learn how to use MVC architecture."]
    },
    // {
    //     color: "architecture",
    //     category: "backend",
    //     link: "/learn/architecture/cqrs",
    //     tag: <ArchitectureTag disabled={true} />,
    //     image: <section className="shadow-lg flex align-center justify-center gap-3 h-full overflow-hidden">
    //         <div className="flex flex-col bg-violet-900 h-40 w-40 p-2 mt-20 text-white font-bold rounded">
    //             <p>Architecture</p>
    //             <hr/>
    //             <ul>
    //                 <li className="flex items-center gap-2 p-1 bg-violet-700">
    //                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
    //                          className="bi bi-bank" viewBox="0 0 16 16">
    //                         <path
    //                             d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.5.5 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89zM3.777 3h8.447L8 1zM2 6v7h1V6zm2 0v7h2.5V6zm3.5 0v7h1V6zm2 0v7H12V6zM13 6v7h1V6zm2-1V4H1v1zm-.39 9H1.39l-.25 1h13.72z"/>
    //                     </svg>
    //                     <span>CQRS</span>
    //                 </li>
    //                 <li className="flex items-center gap-2">
    //                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
    //                          className="bi bi-bank" viewBox="0 0 16 16">
    //                         <path
    //                             d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.5.5 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89zM3.777 3h8.447L8 1zM2 6v7h1V6zm2 0v7h2.5V6zm3.5 0v7h1V6zm2 0v7H12V6zM13 6v7h1V6zm2-1V4H1v1zm-.39 9H1.39l-.25 1h13.72z"/>
    //                     </svg>
    //                     <span className="text-violet-500">Hexagonal</span>
    //                 </li>
    //                 <li className="flex items-center gap-2">
    //                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
    //                          className="bi bi-bank" viewBox="0 0 16 16">
    //                         <path
    //                             d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.5.5 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89zM3.777 3h8.447L8 1zM2 6v7h1V6zm2 0v7h2.5V6zm3.5 0v7h1V6zm2 0v7H12V6zM13 6v7h1V6zm2-1V4H1v1zm-.39 9H1.39l-.25 1h13.72z"/>
    //                     </svg>
    //                     <span className="text-violet-500">Microservice</span>
    //                 </li>
    //                 <li className="flex items-center gap-2">
    //                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
    //                          className="bi bi-bank" viewBox="0 0 16 16">
    //                         <path
    //                             d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.5.5 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89zM3.777 3h8.447L8 1zM2 6v7h1V6zm2 0v7h2.5V6zm3.5 0v7h1V6zm2 0v7H12V6zM13 6v7h1V6zm2-1V4H1v1zm-.39 9H1.39l-.25 1h13.72z"/>
    //                     </svg>
    //                     <span className="text-violet-500">...</span>
    //                 </li>
    //             </ul>
    //         </div>
    //     </section>,
    //     author: "Kacper Walczak",
    //     createdAt: "06-05-2024",
    //     title: "CQRS",
    //     description: "Lets learn how to use CQRS in your project and when.",
    //     descriptionTextLines: ["Lets learn how to use CQRS in your project and when."]
    // }
];
newestUpSorter(ArchitecturePosts);
