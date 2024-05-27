import {HeaderText} from "../generics/header-text";
import {Text} from "../generics/text";
import {latestTwoReadingsOffsetOne, latestThreeOffsetThreeReadings} from "../../../data/posts";
import {HeroLearnCard} from "../../../components/ui/generics/hero-learn-card";

export function LatestReadingsHome() {
    const backendReading = reading => <a href={reading.link} key={reading.title} className="rounded-2xl p-2 bg-violet-400 bg-opacity-10 border-solid border-2 border-violet-900 hover:border-violet-500 hover:bg-violet-300 hover:text-black hover:cursor-pointer w-full flex flex-col align-center gap-3">
        <div className="flex flex-row align-center gap-2 justify-between">
            {reading.tag}
            <p className="text-right mt-2 text-lg text-gray-500">{reading.createdAt}</p>
        </div>
        <b className="font-bold text-xl border-b-2 border-b-violet-500">{reading.title}</b>
        <Text textLines={reading.descriptionTextLines}/>
    </a>;
    const frontendReading = reading => <a href={reading.link} key={reading.title} className="rounded-2xl p-2 bg-fuchsia-400 bg-opacity-10 border-solid border-2 border-fuchsia-900 hover:border-fuchsia-500 hover:bg-fuchsia-300 hover:text-black hover:cursor-pointer w-full flex flex-col align-center gap-3">
            <div className="flex flex-row align-center gap-2 justify-between">
                {reading.tag}
                <p className="text-right mt-2 text-lg text-gray-500">{reading.createdAt}</p>
            </div>
            <b className="font-bold text-xl border-b-2 border-b-fuchsia-500">{reading.title}</b>
            <Text textLines={reading.descriptionTextLines}/>
        </a>;
    const cloudReading = reading => <a href={reading.link} key={reading.title} className="rounded-2xl p-2 bg-sky-400 bg-opacity-10 border-solid border-2 border-sky-900 hover:border-sky-500 hover:bg-sky-300 hover:text-black hover:cursor-pointer w-full flex flex-col align-center gap-3">
        <div className="flex flex-row align-center gap-2 justify-between">
            {reading.tag}
            <p className="text-right mt-2 text-lg text-gray-500">{reading.createdAt}</p>
        </div>
        <b className="font-bold text-xl border-b-2 border-b-sky-500">{reading.title}</b>
        <Text textLines={reading.descriptionTextLines}/>
    </a>;
    const readings = {
        "backend": backendReading,
        "frontend": frontendReading,
        "cloud": cloudReading
    };

    return (
        <>
            <HeaderText size="h3" color="gray">READ</HeaderText>
            <HeaderText size="h2">Latest readings</HeaderText>
            <Text color="gray" textLines={[
                "Readings are sites which will help you with detailed",
                "information about given topic. Read latest ones from Learn."
            ]}/>

            <div className="flex flex-col lg:flex-row gap-2 mt-10">
                <HeroLearnCard
                    category={latestTwoReadingsOffsetOne[0].color}
                    link={latestTwoReadingsOffsetOne[0].link}
                    tag={latestTwoReadingsOffsetOne[0].tag}
                    image={latestTwoReadingsOffsetOne[0].image}
                    author={latestTwoReadingsOffsetOne[0].author}
                    createdAt={latestTwoReadingsOffsetOne[0].createdAt}
                    title={latestTwoReadingsOffsetOne[0].title}
                    descriptionTextLines={latestTwoReadingsOffsetOne[0].descriptionTextLines}
                />
                <HeroLearnCard
                    category={latestTwoReadingsOffsetOne[1].color}
                    link={latestTwoReadingsOffsetOne[1].link}
                    tag={latestTwoReadingsOffsetOne[1].tag}
                    image={latestTwoReadingsOffsetOne[1].image}
                    author={latestTwoReadingsOffsetOne[1].author}
                    createdAt={latestTwoReadingsOffsetOne[1].createdAt}
                    title={latestTwoReadingsOffsetOne[1].title}
                    descriptionTextLines={latestTwoReadingsOffsetOne[1].descriptionTextLines}
                />
            </div>

            <section className="mt-4 mb-20 flex flex-col lg:flex-row align-center gap-3 justify-evenly w-full">
                {latestThreeOffsetThreeReadings.map((reading, index) => {
                    return readings[reading.category](reading);
                })}
            </section>
        </>
    );
}

export default function MyApp() {
    return <LatestReadingsHome />
}
