export function MainCategoriesBtns() {
    return (
        <section className="flex align-center justify-evenly mt-3 gap-2 w-full">
            <a href="/learn/backend"
               className="h-12 bg-violet-500 bg-opacity-10 border-solid border-2 p-2 border-violet-500 hover:border-violet-900 hover:cursor-pointer rounded-3xl w-full flex flex-col align-center justify-center gap-3">
                <span className="mx-auto font-bold text-lg">Backend</span>
            </a>
            <a href="/learn/frontend"
               className="h-12 bg-fuchsia-500 bg-opacity-10 border-solid border-2 border-fuchsia-500 hover:border-fuchsia-900 hover:cursor-pointer rounded-3xl w-full flex flex-col align-center justify-center gap-3">
                <span className="mx-auto font-bold text-lg">Frontend</span>
            </a>
            <a href="/learn/cloud"
               className="h-12 bg-sky-500 bg-opacity-10 border-solid border-2 border-sky-500 hover:border-sky-900 hover:cursor-pointer rounded-3xl w-full flex flex-col align-center justify-center gap-3">
                <span className="mx-auto font-bold text-lg">Cloud</span>
            </a>
        </section>
    );
}

export default function MyApp() {
    return <MainCategoriesBtns />
}
