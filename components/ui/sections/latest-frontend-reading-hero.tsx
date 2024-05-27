import {latestFrontendReading} from "../../../data/posts";
import {HeroLearnCard} from "../generics/hero-learn-card";
import {Bleed} from "nextra-theme-docs";

export function LatestFrontendReadingHero() {
    return (
        <>
            <div className="block md:hidden lg:hidden">
                <Bleed full>
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
                </Bleed>
            </div>
            <div className="hidden md:block">
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
            </div>
        </>
    )
}

export default function MyApp() {
    return <LatestFrontendReadingHero/>
}
