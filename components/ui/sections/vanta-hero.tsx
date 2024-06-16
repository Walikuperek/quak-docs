import { useEffect } from "react";
import styles from "./vanta-hero.module.css";

declare var VANTA: any;

function VantaHero() {
  useEffect(() => {
    const kacTest = getComputedStyle(document.body).getPropertyValue('--kac-test');
    VANTA.GLOBE({
      el: "#vanta_globe",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 600.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      size: 0.5,
      backgroundColor: kacTest,
      borderRadius: '.5rem',
      color: 0xaf3fff,
    });
  }, []);

  return (
      <>
        <div id="vanta_globe" className={styles.vantahero}></div>
        <div className={styles.vantaheroTextWrapper}>
          <div className={styles.vantaheroText}>
            <h1 className="font-bold text-5xl text-white dark:text-black">QUAK</h1>
            <p className="text-xl text-slate-400 dark:text-slate-700 mt-3 whitespace-nowrap">
              Company that <span className="rounded px-1 text-xl font-bold text-fuchsia-500">make & teach</span>
            </p>
            <p className="text-xl text-slate-400 dark:text-slate-700 mt-1 whitespace-nowrap">
              IT things Globally
            </p>
            <div className="mt-5 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                  href="/learn/"
                  className="rounded-md whitespace-nowrap bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 dark:bg-fuchsia-500 dark:text-white dark:hover:bg-fuchsia-600 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Learn programming
              </a>
              <a
                  href="/portfolio/"
                  className="text-sm whitespace-nowrap font-semibold leading-6 text-white dark:text-black hover:underline"
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
  return <VantaHero/>;
}
