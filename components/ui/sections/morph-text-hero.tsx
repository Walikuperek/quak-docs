export function MorphTextHero() {
    return (
        <>
            <section className="mt-20 relative h-40">
                <h1 className="grayed-full-width-text sm-text-12">FOLIO</h1>
                <div className="morph-content">
                    <h2>PORT</h2>
                    <h2>PORT</h2>
                </div>
            </section>
        </>
    );
}

export default function MyApp() {
    return <MorphTextHero />
}
