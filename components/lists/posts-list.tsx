export type CardPost = {
    category: string;
    tag: JSX.Element;
    link: string;
    author: string;
    authorAvatarUrl?: string;
    createdAt: string;
    title: string;
    image?: JSX.Element;
    description: string;
}

export function PostsList({posts}: {posts: CardPost[]}) {
    return (
        <div className="flex flex-col gap-4">
            <div className="text-center">Total {posts.length}</div>
            <ul role="list" className="gap-4 flex flex-col flex-wrap lg:flex-row justify-center">

                {posts.map((post) => (
                    <a href={post.link} key={post.title}
                        className="w-full lg:w-1/3 drop-shadow-2xl rounded-3xl bg-neutral-500 bg-opacity-10 hover:bg-neutral-300 hover:bg-opacity-40 hover:cursor-pointer hover:shadow-2xl">
                        <div className="flex flex-col min-w-0 gap-x-4">
                            <section className="rounded-t-3xl max-h-40 overflow-hidden bg-neutral-900 bg-opacity-10 ">
                                {post.image}
                            </section>
                            <div className="p-2 flex flex-row">
                                <img loading="lazy" className="h-12 w-12 my-auto flex-none rounded-full bg-neutral-300 bg-opacity-10" src={post.authorAvatarUrl ?? "/logos/quak.png"} alt="Post Author Avatar" />
                                <div className="p-2 min-w-0 flex-auto">
                                    {/*<p className="text-sm text-gray-500 font-semibold leading-4">{post.createdAt}</p>*/}
                                    <p className="text-sm font-semibold leading-6">{post.title}</p>
                                    <p className="mt-1 truncate text-xs leading-5">{post.description}</p>
                                </div>
                            </div>
                            <div className="p-2 hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                {post.tag}
                            </div>
                        </div>
                    </a>
                ))}

            </ul>
        </div>
    )
}

export default function MyApp({posts}: {posts: CardPost[]} = {posts: []}) {
    return <PostsList posts={posts}/>
}