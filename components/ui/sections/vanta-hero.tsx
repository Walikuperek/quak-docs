import { useEffect } from "react";
import styles from "./vanta-hero.module.css";

declare var VANTA: any;

function VantaHero() {
  useEffect(() => {
    VANTA.GLOBE({
      el: "#vanta_globe",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 600.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0xaf3fff,
      size: 0.5,
      backgroundColor: 0x29153c,
    });
  }, []);

  return (
    <>
      <div id="vanta_globe" className={styles.vantahero}></div>
      <div className={styles.vantaheroTextWrapper}>
        <div className={styles.vantaheroText}>
          <h1 className="font-bold text-5xl text-white">QUAK</h1>
          <p className="text-xl text-slate-400 mt-3 whitespace-nowrap">
            Company that <span className="rounded px-1 text-xl font-bold text-fuchsia-500">make & teach</span> IT things
          </p>
          <div className="mt-5 flex items-center justify-center gap-x-6 lg:justify-start">
            <a
              href="/learn/"
              className="rounded-md whitespace-nowrap bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Learn programming
            </a>
            <a
              href="/portfolio/"
              className="text-sm whitespace-nowrap font-semibold leading-6 text-white hover:underline"
            >
              Portfolio <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.marginAfterHero}></div>
    </>
  );
}

export default function MyApp() {
  return <VantaHero />;
}
