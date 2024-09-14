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
        title: "Backend Architectures",
        description: "Lets learn how to use different kinds of architecture.",
        descriptionTextLines: ["Lets learn how to use different kinds of architecture."]
    },
    // {
    //     color: "architecture",
    //     category: "backend",
    //     link: "/learn/architecture/mvc",
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
    //                     <span>MVC</span>
    //                 </li>
    //                 <li className="flex items-center gap-2">
    //                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
    //                          className="bi bi-bank" viewBox="0 0 16 16">
    //                         <path
    //                             d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.5.5 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89zM3.777 3h8.447L8 1zM2 6v7h1V6zm2 0v7h2.5V6zm3.5 0v7h1V6zm2 0v7H12V6zM13 6v7h1V6zm2-1V4H1v1zm-.39 9H1.39l-.25 1h13.72z"/>
    //                     </svg>
    //                     <span className="text-violet-500">CQRS</span>
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
    //     createdAt: "05-05-2024",
    //     title: "MVC Architecture",
    //     description: "Lets learn how to use MVC architecture.",
    //     descriptionTextLines: ["Lets learn how to use MVC architecture."]
    // },
    {
        pinned: true,
        color: "architecture",
        category: "backend",
        link: "/learn/architecture/bitemporal-events",
        tag: <ArchitectureTag disabled={true} />,
        image: <section className="shadow-lg flex align-center justify-center gap-3 h-full overflow-hidden">
            <div className="flex flex-col bg-emerald-500 h-40 w-40 p-2 mt-20 text-white font-bold rounded">
                <b>BiTemporal Events</b>
                
                <ul className="mt-1 ml-2">
                    <li><code className="bg-rose-500 text-red">valid_at: Date</code></li>
                    <li><code className="bg-rose-500 text-red">...</code></li>
                </ul>
            </div>
        </section>,
        author: "Kacper Walczak",
        createdAt: "21-08-2024",
        title: "Bi-Temporal Events",
        description: "Compare Martin Fowler's vision with reality or so-called 'Arkency way'.",
        descriptionTextLines: ["Compare Martin Fowler's vision with reality or so-called 'Arkency way'."]
    },
    {
        pinned: true,
        color: "architecture",
        category: "backend",
        link: "/learn/architecture/ddd",
        tag: <ArchitectureTag disabled={true} />,
        image: <section className="shadow-lg flex align-center justify-center gap-3 h-full overflow-hidden">
            <div className="flex flex-col bg-violet-900 h-40 w-40 p-2 mt-20 text-white font-bold rounded">
                <p>DDD</p>
                <hr/>
                <ul>
                    <li className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-door-open" viewBox="0 0 16 16">
                        <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1"/>
                        <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117M11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5M4 1.934V15h6V1.077z"/>
                        </svg>
                        <span className="text-violet-500">Event</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-workspace" viewBox="0 0 16 16">
                            <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                            <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.4 5.4 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2z"/>
                        </svg>
                        <span className="text-violet-500">Service</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bank" viewBox="0 0 16 16">
                        <path d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.5.5 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89zM3.777 3h8.447L8 1zM2 6v7h1V6zm2 0v7h2.5V6zm3.5 0v7h1V6zm2 0v7H12V6zM13 6v7h1V6zm2-1V4H1v1zm-.39 9H1.39l-.25 1h13.72z"/>
                        </svg>
                        <span className="text-violet-500">Aggregate</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bank" viewBox="0 0 16 16">
                        <path d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.5.5 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89zM3.777 3h8.447L8 1zM2 6v7h1V6zm2 0v7h2.5V6zm3.5 0v7h1V6zm2 0v7H12V6zM13 6v7h1V6zm2-1V4H1v1zm-.39 9H1.39l-.25 1h13.72z"/>
                        </svg>
                        <span className="text-violet-500">...</span>
                    </li>
                </ul>
            </div>
        </section>,
        author: "Kacper Walczak",
        createdAt: "04-09-2024",
        title: "Domain Driven Design (DDD)",
        description: "Lets learn how to utilize DDD approach with examples.",
        descriptionTextLines: ["Lets learn how to utilize DDD approach with examples."]
    },
    {
        pinned: true,
        color: "architecture",
        category: "backend",
        link: "/learn/architecture/nosql-migration-of-millions-of-documents",
        tag: <ArchitectureTag disabled={true}/>,
        image: <section className="content flex align-center justify-center gap-3 h-full overflow-hidden">
            <div className="bg-rose-500 rounded-xl delay-700 h-40 w-20 p-1 mt-20 text-white font-bold">
                V1 &rarr; V2
                <img src="/assets/read/one_ring.png" className="h-20 mt-4 rounded-2xl shadow-xl shadow-rose-500" alt="Image of the One Ring from Lord of the Rings" />
            </div>
        </section>,
        author: "Kacper Walczak",
        createdAt: "03-09-2024",
        title: <>"One to rule them all" - service rebuild story</>,
        descriptionTextLines: [
            "Service rebuild + NoSQL migration of millions of documents on Google Cloud.",
        ],
        description: "Service rebuild + NoSQL migration of millions of documents on Google Cloud."
    },
    {
        color: "architecture",
        category: "backend",
        link: "/learn/architecture/graph-database-usage-comparison",
        tag: <ArchitectureTag disabled={true}/>,
        image: <section className="content flex items-center justify-center gap-3 h-full overflow-hidden">
            <div className="flex items-center h-40 gap-3">
                <div className="w-20 h-20 bg-blue-400 border-3 border-blue-900 rounded-full flex items-center justify-center">Neo4j</div>
                <span className="text-rose-500 font-bold font-2xl">VS</span>
                <div className="w-20 h-20 bg-orange-400 border-3 border-orange-900 text-black rounded-full flex items-center justify-center">TigerGraph</div>
            </div>
        </section>,
        author: "Kacper Walczak",
        createdAt: "05-09-2024",
        title: <>Graph DB usage comparison</>,
        descriptionTextLines: [
            "Compare Neo4j and Tigergraph databases, which is easier to work with, etc.",
        ],
        description: "Compare Neo4j and Tigergraph databases, which is easier to work with, etc.."
    },
    {
        color: "architecture",
        category: "backend",
        link: "/learn/architecture/cqrs",
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
                        <span>CQRS</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-bank" viewBox="0 0 16 16">
                            <path
                                d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.5.5 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89zM3.777 3h8.447L8 1zM2 6v7h1V6zm2 0v7h2.5V6zm3.5 0v7h1V6zm2 0v7H12V6zM13 6v7h1V6zm2-1V4H1v1zm-.39 9H1.39l-.25 1h13.72z"/>
                        </svg>
                        <span className="text-violet-500">Hexagonal</span>
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
        createdAt: "06-05-2024",
        title: "CQRS",
        description: "Lets learn how to use CQRS in your project and when.",
        descriptionTextLines: ["Lets learn how to use CQRS in your project and when."]
    }
];
newestUpSorter(ArchitecturePosts);
