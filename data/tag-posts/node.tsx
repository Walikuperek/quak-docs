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
    },
    {
        color: "node",
        category: "backend",
        link: "/learn/node/postgresql-testcontainers-integration-testing",
        tag: <NodeTag disabled={true} />,
        image: <section className="shadow-lg flex align-center justify-center gap-3 h-full overflow-hidden">
            <div
                className="flex rounded flex-col justify-start items-center bg-white h-40 w-40 p-1 mt-20 text-white font-bold">
                <p className="text-black">PostgreSQL</p>
                <img src="/logos/testcontainers.png" alt="testcontainers logo" className="h-10"/>
                <br />
                <br />
                <p className="text-black">Integration Testing</p>
            </div>
        </section>,
        author: "Kacper Walczak",
        createdAt: "13-07-2024",
        title: "Test PostgreSQL with Testcontainers",
        description: "How to PostgreSQL integration tests with Testcontainers.",
        descriptionTextLines: ["How to PostgreSQL integration tests with Testcontainers."]
    },
    {
        color: "node",
        category: "backend",
        link: "/learn/node/dockerize-express-and-mongo",
        tag: <NodeTag disabled={true} />,
        image: <section className="shadow-lg flex align-center justify-center gap-3 h-full overflow-hidden">
            <div
                className="flex rounded flex-col justify-start items-center bg-white h-40 w-40 p-1 mt-20 text-white font-bold">
                <p className="text-black">Docker</p>
                <img src="/logos/docker.svg" alt="docker logo" className="h-20"/>
                
                <p className="text-black">Node + Container</p>
            </div>
        </section>,
        author: "Kacper Walczak",
        createdAt: "08-08-2024",
        title: "ExpressJS & MongoDB with Docker",
        description: "How to contenerize ExpressJS and MongoDB app.",
        descriptionTextLines: ["How to contenerize ExpressJS and MongoDB app."]
    },
    {
        color: "node",
        category: "backend",
        link: "/learn/node/scrap-polish-pharmacies-from-pharma-search-page",
        tag: <NodeTag disabled={true} />,
        image: <section className="shadow-lg flex align-center justify-center gap-3 h-full overflow-hidden">
            <div
                className="flex rounded flex-col justify-start items-center bg-yellow-200 h-40 w-40 p-1 mt-20 text-black font-bold">
                <b className="text-2xl border-b-4 border-yellow-900 text-yellow-700">Scrape data</b>
                <code>
                &lt;ul&gt;
                &nbsp;&nbsp;&lt;li&gt;Data1&lt;/li&gt;
                &nbsp;&nbsp;&lt;li&gt;Data2&lt;/li&gt;
                &lt;/ul&gt;
                </code>
            </div>
        </section>,
        author: "Kacper Walczak",
        createdAt: "17-08-2024",
        title: "Scrape Pharmacies list",
        description: "How to scrape list of Pharmacies from browser and save to CSV file with Node, Puppeteer and Cheerio.",
        descriptionTextLines: ["How to scrape list of Pharmacies from browser and save to CSV file with Node, Puppeteer and Cheerio."]
    }
];
newestUpSorter(NodePosts);

