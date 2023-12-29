import {PythonTag} from "../../components/tags/python";
import {newestUpSorter} from "../sorter";

export const PythonPosts = [
    {
        color: "python",
        category: "backend",
        link: "/learn/python/resize-image",
        tag: <PythonTag disabled={true}/>,
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
    {
        color: "python",
        category: "backend",
        link: "/learn/python/flask-crud-json-api",
        tag: <PythonTag disabled={true}/>,
        image: <section className="content flex align-center justify-center gap-3 h-full overflow-hidden">
            <div className="bg-violet-500 h-20 w-20 p-1 mt-20 text-white font-bold">Get Post<br/>Request
            </div>
            <div className="bg-emerald-600 h-40 w-40 p-1 mt-20 text-white font-bold">
                Response 200<br/>
                <pre>
                    <code>
                        {'{'}<br />
                            "title": "Resize image with Python",<br />
                            "content": "Learn how to resize image with Python",<br />
                            "author_id": "user_OAIJSDOIJ"<br />
                            "created_at": "2021-10-28T00:00:00.000Z"<br />
                        {'}'}
                    </code>
                </pre>
            </div>
        </section>,
        author: "Kacper Walczak",
        createdAt: "26-12-2023",
        title: <>Flask JSON CRUD API</>,
        descriptionTextLines: [
            "Get to know how to easily build json API",
            "with Flask and easy to test architecture."
        ],
        description: "Get to know how to easily build json API with Flask and easy to test architecture.",
        label: <>Latest post from <b>QUAK Learn</b></>
    },
    {
        color: "python",
        category: "backend",
        link: "/learn/python/flask-json-api-with-services",
        tag: <PythonTag disabled={true}/>,
        image: <section className="content flex align-center justify-center gap-3 h-full overflow-hidden">
            <div className="bg-violet-600 h-20 text-sm w-20 p-1 mt-20 text-white font-bold">
                Make Post From Draft
            </div>
            <div className="bg-violet-500 bg-opacity-10 h-40 w-40 p-1 mt-20 text-white font-bold">
                <pre><code>
                    SendEmailThatPostIsPublished(<br />
                    &nbsp;&nbsp;MakePostFromDraftService(draft_repo=PostDraftRepository(), post_repo=PostRepository())<br />
                    ).publish(post_draft_id="put_real_post_draft_id_here")<br />
                    <span className="text-gray-500"># decorator</span>
                    <span className="text-gray-500"># pattern</span>
                </code></pre>
            </div>
        </section>,
        author: "Kacper Walczak",
        createdAt: "29-12-2023",
        title: <>Flask API with services</>,
        descriptionTextLines: [
            "Learn how, why and when to use services",
            "with Flask and easy to test architecture."
        ],
        description: "Learn how, why and when to use services with Flask and easy to test architecture.",
        label: <>Latest post from <b>QUAK Learn</b></>
    },
];
newestUpSorter(PythonPosts);
