import {Text} from "./text";

export function HeroLearnCard({category, tag, link, image, author, createdAt, title, descriptionTextLines, label}: { category: string, tag: any, link: string, image: any, author: string, createdAt: string, title: string, descriptionTextLines: string[], label?: JSX.Element }) {
    const colors = {
        "ai": "emerald",
        "angular": "rose",
        "architecture": "indigo",
        "backend": "violet",
        "bun": "orange",
        "cloud": "sky",
        "expressjs": "zinc",
        "frontend": "fuchsia",
        "gcp": "blue",
        "javascript": "yellow",
        "nestjs": "rose",
        "nextjs": "gray",
        "node": "green",
        "python": "blue",
        "react": "sky",
        "typescript": "blue"
    };
    if (!category) {
        category = "backend";
    }
    const color = colors[category];
    const heroClasses = `w-full rounded-2xl bg-opacity-10 border-2 bg-${color}-900 border-${color}-500`;
    const titleClasses = `text-2xl font-bold mb-4 border-b-2 border-b-${color}-500 flex flex-row flex-wrap justify-between items-center`;
    const linkClasses = `hover:text-${color}-500 hover:underline underline-offset-2`;
    const imageLinkField = link ? <a className="h-full" href={link}>{image}</a> : image;
    const linkField = link ? <a className={linkClasses} href={link}>{title}</a> : title;
    return (
        <>
            <section className={heroClasses}>
                <article className="flex flex-col align-between h-full relative">
                    <div className="absolute top-0 left-0 p-2">
                        {tag}
                    </div>
                    {imageLinkField}
                    <header className="flex flex-col px-4 pb-4 pt-4">
                        <div className={titleClasses}>
                            <h1 className="text-2xl font-bold">{linkField}</h1>
                            <p className="mt-2 text-lg text-gray-500">{author} &middot; {createdAt}</p>
                        </div>
                        <Text textLines={descriptionTextLines}/>
                    </header>
                </article>
            </section>
            {label && <p className="text-center text-gray-500 mb-3">{label}</p>}
        </>
    );
}

export default function MyApp({category, tag, link, image, author, createdAt, title, descriptionTextLines, label}) {
    return <HeroLearnCard category={category} tag={tag} link={link} image={image} author={author} createdAt={createdAt}
                          title={title} descriptionTextLines={descriptionTextLines} label={label}/>
};