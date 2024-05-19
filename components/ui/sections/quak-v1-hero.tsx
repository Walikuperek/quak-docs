export function QuakV1Hero() {
    return (
        <section className="shadow-inner rounded-t-2xl mt-10 mb-40 h-96 p-2 pt-5 nx-bg-gray-100 lg:max-w-4xl mx-auto dark:nx-bg-neutral-900">
            <h3 className="text-center text-2xl font-bold">QUAK V1</h3>
            <p className="mb-5 text-center text-lg">Was on the WEB 2019-2020</p>
            <p className="mb-3 text-center text-gray-500">Archived V1 version ={">"} <a target="_blank" href="https://storage.googleapis.com/quak-poland-395819.appspot.com/quak-archived/v1/index.html" className="text-fuchsia-500 hover:underline hover:cursor-pointer">link to archived website</a></p>

            <img src="/assets/quak_history/quak_2020_1080w.png" className="shadow-purple500 shadow-2xl mt-3 rounded-b-2xl object-cover h-96 mx-auto" alt="" />
        </section>
    );
}

export default function MyApp() {
    return <QuakV1Hero/>
}