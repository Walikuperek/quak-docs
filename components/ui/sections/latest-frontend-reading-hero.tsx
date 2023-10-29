import {latestFrontendReading} from "../../../data/posts";
import {HeroLearnCard} from "../generics/hero-learn-card";

export function LatestFrontendReadingHero() {
    return (
        <>
            <HeroLearnCard
                category={latestFrontendReading.color}
                link={latestFrontendReading.link}
                tag={latestFrontendReading.tag}
                image={latestFrontendReading.image}
                author={latestFrontendReading.author}
                createdAt={latestFrontendReading.createdAt}
                title={latestFrontendReading.title}
                descriptionTextLines={latestFrontendReading.descriptionTextLines}
                label={<>Latest post from <b>Frontend</b></>}
            />
        </>
    )
}

export default function MyApp() {
    return <LatestFrontendReadingHero />
}
