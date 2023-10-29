export function TagsList({children}: {children?: React.ReactNode}) {
    return (
        <section className="flex flex-wrap align-center gap-3">{children}</section>
    );
}

export default function MyApp({children}) {
    return <TagsList />
}
