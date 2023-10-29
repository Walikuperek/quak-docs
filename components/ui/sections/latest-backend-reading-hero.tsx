import {latestBackendReading} from "../../../data/posts";
import {HeroLearnCard} from "../generics/hero-learn-card";

export function LatestBackendReadingHero() {
    return (
        <>
            <HeroLearnCard
                category={latestBackendReading.color}
                link={latestBackendReading.link}
                tag={latestBackendReading.tag}
                image={latestBackendReading.image}
                author={latestBackendReading.author}
                createdAt={latestBackendReading.createdAt}
                title={latestBackendReading.title}
                descriptionTextLines={latestBackendReading.descriptionTextLines}
                label={<>Latest post from <b>Backend</b></>}
            />
        </>
    )
}

export default function MyApp() {
    return <LatestBackendReadingHero />
}
