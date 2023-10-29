import {latestCloudReading} from "../../../data/posts";
import {HeroLearnCard} from "../generics/hero-learn-card";

export function LatestCloudReadingHero() {
    return (
        <>
            <HeroLearnCard
                category={latestCloudReading.color}
                link={latestCloudReading.link}
                tag={latestCloudReading.tag}
                image={latestCloudReading.image}
                author={latestCloudReading.author}
                createdAt={latestCloudReading.createdAt}
                title={latestCloudReading.title}
                descriptionTextLines={latestCloudReading.descriptionTextLines}
                label={<>Latest post from <b>Cloud</b></>}
            />
        </>
    )
}

export default function MyApp() {
    return <LatestCloudReadingHero />
}
