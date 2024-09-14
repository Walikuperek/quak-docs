import {HeaderText} from "../generics/header-text";

export type PinnedPost = {
    pinned: true;
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

export function PinnedPosts({posts, fullWidth = false}: {posts: PinnedPost[], fullWidth?: boolean}) {
    const cardClassName = fullWidth
        ? "w-full xl:w-1/3 drop-shadow-2xl rounded-3xl bg-neutral-500 bg-opacity-10 hover:bg-neutral-300 hover:bg-opacity-40 hover:cursor-pointer hover:shadow-2xl"
        : "w-full xl:w-1/4 xl:max-w-[300px] drop-shadow-2xl rounded-3xl bg-neutral-500 bg-opacity-10 hover:bg-neutral-300 hover:bg-opacity-40 hover:cursor-pointer hover:shadow-2xl";
    return (
        <div className="flex flex-col gap-4">
            <div>
                <HeaderText size="h3" color="gray">
                    <span className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-pin" viewBox="0 0 16 16">
                            <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A6 6 0 0 1 5 6.708V2.277a3 3 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354m1.58 1.408-.002-.001zm-.002-.001.002.001A.5.5 0 0 1 6 2v5a.5.5 0 0 1-.276.447h-.002l-.012.007-.054.03a5 5 0 0 0-.827.58c-.318.278-.585.596-.725.936h7.792c-.14-.34-.407-.658-.725-.936a5 5 0 0 0-.881-.61l-.012-.006h-.002A.5.5 0 0 1 10 7V2a.5.5 0 0 1 .295-.458 1.8 1.8 0 0 0 .351-.271c.08-.08.155-.17.214-.271H5.14q.091.15.214.271a1.8 1.8 0 0 0 .37.282"/>
                        </svg>
                        PINNED POSTS
                    </span>
                </HeaderText>
            </div>
            <ul role="list" className="gap-2 flex flex-col flex-wrap xl:flex-row flex-nowrap">
                {posts.map((post) => (
                    <a href={post.link} key={post.title}
                        className={cardClassName}>
                        <div className="flex flex-col min-w-0 gap-x-2 relative">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="grey" className="absolute t-0 r-0 translate-x-1/2 translate-y-1/2" viewBox="0 0 16 16">
                                <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a6 6 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707s.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a6 6 0 0 1 1.013.16l3.134-3.133a3 3 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146"/>
                            </svg>
                            <section className="rounded-t-3xl max-h-40 overflow-hidden bg-neutral-900 bg-opacity-10 ">
                                {post.image}
                            </section>
                            <div className="p-2 flex flex-row">
                                <img loading="lazy" className="h-12 w-12 my-auto flex-none rounded-full bg-neutral-300 bg-opacity-10" src={post.authorAvatarUrl ?? "/logos/quak.png"} alt="Post Author Avatar" />
                                <div className="p-2 min-w-0 flex-auto">
                                    <p className="text-sm text-gray-500 font-semibold leading-4">{post.author} {post.createdAt}</p>
                                    <p className="text-sm font-semibold leading-6">{post.title}</p>
                                    <p className="mt-1 truncate text-xs leading-5">{post.description}</p>
                                </div>
                            </div>
                        </div>
                    </a>
                ))}

            </ul>
        </div>
    )
}

export default function MyApp({posts}: {posts: PinnedPost[]} = {posts: []}) {
    return <PinnedPosts posts={posts}/>
}