import {latestCloudReading} from "../../../data/posts";
import {HeroLearnCard} from "../generics/hero-learn-card";
import {Bleed} from "nextra-theme-docs";

export function LatestCloudReadingHero() {
    return (
        <>
            <div className="block md:hidden lg:hidden">
                <Bleed full>
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
                </Bleed>
            </div>
            <div className="hidden md:block">
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
            </div>
        </>
    )
}

export default function MyApp() {
    return <LatestCloudReadingHero/>
}
