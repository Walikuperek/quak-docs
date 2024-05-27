import {latestBackendReading} from "../../../data/posts";
import {HeroLearnCard} from "../generics/hero-learn-card";
import {Bleed} from "nextra-theme-docs";

export function LatestBackendReadingHero() {
    return (
        <>
            <div className="block md:hidden lg:hidden">
                <Bleed full>
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
                </Bleed>
            </div>
            <div className="hidden md:block">
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
            </div>
        </>
    )
}

export default function MyApp() {
    return <LatestBackendReadingHero/>
}
