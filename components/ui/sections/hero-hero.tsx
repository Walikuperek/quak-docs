import {SliderApps} from "../generics/slider";
import styles from "./hero-hero.module.css";
import {useState} from "react";
import {HeroBoxWhatsNew} from "../generics/hero";

function HeroHero() {
    const apps = [
        { title: "Tabelek", desc: "Multi module app for business data", imgSrc: "/portfolio/tabelek/tabelek_in_progress.png", href: "/portfolio/tabelek" },
        { title: "TechApp", desc: "RTV/AGD repair tickets and maps integration", imgSrc: "/portfolio/techapp/techapp_office_list.png", href: "/portfolio/tech-app" },
        { title: "CreativoApp", desc: "Wholesaler parts management with docs gen", imgSrc: "/portfolio/creativoapp/tablica_1.png", href: "/portfolio/creativo-app" }
    ];
    const [activeIndex, setActiveIndex] = useState(0);
    const [imgSrc, setImgSrc] = useState(apps[activeIndex].imgSrc);
    return (
        <>
            <div id="hero_hero" className={styles.heroHero + " h-[850px] lg:h-[600px] overflow-hidden " + `clip-fancy-image-bottom${activeIndex} transition-all`}>
                <img src={imgSrc} alt="Hero background image" className="opacity-40 transition-all filter brightness-50 blur object-cover absolute top-0 left-0 w-full h-full"/>
                <div className="relative max-w-[90rem] ml-auto mr-auto flex flex-wrap justify-center items-center gap-5 pt-5">
                    <HeroBoxWhatsNew />
                    <SliderApps
                        apps={apps}
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                        clickedLeftArrow={movedToAppIndex => setImgSrc(apps[movedToAppIndex].imgSrc)}
                        clickedRightArrow={movedToAppIndex => setImgSrc(apps[movedToAppIndex].imgSrc)}
                    />
                </div>
            </div>
            {/* Spacer because of the hero absolute position */}
            <div className="h-[850px] lg:h-[600px]">&nbsp;</div>
        </>
    );
}

export default function MyApp() {
    return <HeroHero/>;
}
