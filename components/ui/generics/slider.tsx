import {activeDot, inactiveDot} from "./dots";

interface App {
    title: string;
    desc: string;
    imgSrc: string;
}

function SliderApp({app}: {app: App}) {
    return (
        <div className="h-[400px] w-full lg:w-[600px] relative">
            <img src={app.imgSrc} alt={app.title} className="transition-all object-left object-cover rounded shadow-2xl h-[400px] w-full lg:w-[600px]"/>
            <div className="absolute z-10 top-0 left-0 right-0 bg-black/80 h-[4rem] w-full rounded-t p-2 flex items-center">
                <div className="flex flex-col">
                    <h3 className="font-bold text-white">{app.title}</h3>
                    <p className="text-gray-400">{app.desc}</p>
                </div>
            </div>
        </div>
    );
}


export interface SliderAppsProps {
    apps: App[];
    activeIndex: number;
    setActiveIndex: (index: number) => void;
    clickedRightArrow: (index: number) => void;
    clickedLeftArrow: (index: number) => void;
}

function SliderApps({apps, activeIndex, setActiveIndex, clickedRightArrow, clickedLeftArrow}: SliderAppsProps) {
    const clickRightArrow = () => {
        const newIndex = activeIndex + 1 >= apps.length ? 0 : activeIndex + 1;
        setActiveIndex(newIndex);
        clickedRightArrow(newIndex);
    };
    const clickLeftArrow = () => {
        const newIndex = activeIndex - 1 < 0 ? apps.length - 1 : activeIndex - 1;
        setActiveIndex(newIndex);
        clickedLeftArrow(newIndex);
    };
    return (
        <div className="relative w-[600px] h-[400px]">
            <SliderApp app={apps[activeIndex]}/>
            <div className="absolute z-10 top-[5px] right-0 h-[4rem] p-2">
                <div className="flex items-center gap-2">
                    {apps.map((app, index) => index === activeIndex ? activeDot("key_dot_" + index) : inactiveDot("key_dot_" + index))}
                    <button className="text-4xl text-white hover:text-violet-500" onClick={e => clickLeftArrow()}>&larr;</button>
                    <button className="text-4xl text-white hover:text-violet-500" onClick={e => clickRightArrow()}>&rarr;</button>
                </div>
            </div>
        </div>
    );
}

export {SliderApps};
