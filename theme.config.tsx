import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: '%s – QUAK'
    }
  },
  darkMode: true,
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    backToTop: true,
  },
  navigation: false,
  logo: <div style={{display: 'flex', alignItems: 'center', fontWeight: 700, letterSpacing: '2px'}}><img src="https://quak.com.pl/quak_logo_72x72.png" alt="QUAK Logo" width={34} />&nbsp;QUAK</div>,
  primaryHue: 320,
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Strona internetowa firmy QUAK. Wejdź i ucz się programowania z QUAK" />
      <meta property="og:title" content="QUAK" />
      <meta property="og:description" content="Strona internetowa firmy QUAK. Wejdź i ucz się programowania z QUAK" />
      <script src="/libs/three.min.js"></script>
      <script src="/libs/vanta.globe.min.js"></script>
    </>
  ),
  gitTimestamp: <></>,
  search: {
    placeholder: 'Search...',
  },
  // project: {
  //   link: 'https://github.com/Walikuperek/quak-docs',
  // },
  docsRepositoryBase: 'https://github.com/Walikuperek/quak-docs/tree/main/',
  // chat: {
  //   link: 'https://discord.com',
  // },
  footer: {
    text: (
      <div className="flex flex-col lg:flex-row flex-wrap justify-start w-full gap-5">
        <div className="flex flex-col gap-3 px-5">
          <img src="/logos/quak.png" width="44" height="44" alt="QUAK Logo" className="mx-auto" />
          <strong className="mx-auto">QUAK</strong>
          <p className="mx-auto">Kacper Walczak</p>
          <p className="mx-auto">Copyright {new Date().getFullYear()}</p>
        </div>
        <div className="flex flex-col">
          <b className="text-gray-500 font-bold">CONTACT</b>
          <div className="flex flex-col gap-2 mt-3 p-2">
            <a target="_blank" href="https://www.linkedin.com/in/kacper-walczak-b4122717a/" className="text-green-500 hover:underline">
              LinkedIn
            </a>
            <a target="_blank" href="https://www.facebook.com/profile.php?id=100014391284754" className="text-green-500 hover:underline">
              Facebook
            </a>
            <a target="_blank" href="https://www.instagram.com/walikuperek/" className="text-green-500 hover:underline">
              Instagram
            </a>
            <a href="mailto:k.walczak@quak.com.pl" className="text-green-500 hover:underline">
              k.walczak@quak.com.pl
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <b className="text-gray-500 font-bold">GAMES</b>
          <div className="flex flex-col gap-2 mt-3 p-2">
            <a target="_blank" href="https://quak.com.pl/quakky/" className="text-green-500 hover:underline">
              Play Quakky
            </a>
            <a target="_blank" href="https://quak.com.pl/labyrinth/" className="text-green-500 hover:underline">
              Play Labyrinth
            </a>
            <a target="_blank" href="https://quak.com.pl/adventurer/" className="text-green-500 hover:underline">
              Play Adventurer
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <b className="text-gray-500 font-bold">GITHUB</b>
          <div className="flex flex-col gap-2 mt-3 p-2">
            <a target="_blank" href="https://github.com/Walikuperek/TS-snippets" className="text-green-500 hover:underline">
              TS-snippets
            </a>
            <a target="_blank" href="https://github.com/Walikuperek/Python-code-smells" className="text-green-500 hover:underline">
              Python code smells
            </a>
            <a target="_blank" href="https://github.com/Walikuperek/Qtheme" className="text-green-500 hover:underline">
              Qtheme
            </a>
            <a target="_blank" href="https://github.com/Walikuperek/Qstore" className="text-green-500 hover:underline">
              Qstore
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <b className="text-gray-500 font-bold">PRIVACY</b>
          <div className="flex flex-col gap-2 mt-3 p-2">
            <a href="/privacy" className="text-green-500 hover:underline">
              Privacy policy
            </a>
            <a href="/issue-contact" className="text-green-500 hover:underline">
              Issue contact
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <b className="text-gray-500 font-bold">USEFUL</b>
          <div className="flex flex-col gap-2 mt-3 p-2">
            <a href="/useful/valentines" className="text-green-500 hover:underline">Valentine's Day Card</a>
          </div>
        </div>
      </div>
    ),
  },
}

export default config
