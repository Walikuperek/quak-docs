import {HeaderText} from "../generics/header-text";
import {Text} from "../generics/text";
import {latestTwoReadings, latestThreeOffsetTwoReadings} from "../../../data/posts";
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
                    category={latestTwoReadings[0].color}
                    link={latestTwoReadings[0].link}
                    tag={latestTwoReadings[0].tag}
                    image={latestTwoReadings[0].image}
                    author={latestTwoReadings[0].author}
                    createdAt={latestTwoReadings[0].createdAt}
                    title={latestTwoReadings[0].title}
                    descriptionTextLines={latestTwoReadings[0].descriptionTextLines}
                />
                <HeroLearnCard
                    category={latestTwoReadings[1].color}
                    link={latestTwoReadings[1].link}
                    tag={latestTwoReadings[1].tag}
                    image={latestTwoReadings[1].image}
                    author={latestTwoReadings[1].author}
                    createdAt={latestTwoReadings[1].createdAt}
                    title={latestTwoReadings[1].title}
                    descriptionTextLines={latestTwoReadings[1].descriptionTextLines}
                />
            </div>

            <section className="mt-4 flex flex-col lg:flex-row align-center gap-3 justify-evenly w-full">
                {latestThreeOffsetTwoReadings.map((reading, index) => {
                    return readings[reading.category](reading);
                })}
            </section>

            <section className="mt-10 mb-20 flex items-center justify-center gap-2 h-50">
                <a href="/learn/"
                   className="font-bold rounded-md whitespace-nowrap bg-rose-500 px-3.5 py-2.5 text-white shadow-sm hover:bg-rose-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                    See all readings
                </a>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red"
                     className="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                </svg>
            </section>
        </>
    );
}

export default function MyApp() {
    return <LatestReadingsHome/>
}
