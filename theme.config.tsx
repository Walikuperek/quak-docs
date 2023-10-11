import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: '%s – QUAK'
    }
  },
  darkMode: true,
  logo: <div style={{display: 'flex', alignItems: 'center', fontWeight: 700, letterSpacing: '2px'}}><img src="https://quak.com.pl/quak_logo_72x72.png" alt="QUAK Logo" width={34} />&nbsp;QUAK</div>,
  primaryHue: 320,
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="QUAK" />
      <meta property="og:description" content="QUAK Kacper Walczak company website" />
      <script src="/libs/three.min.js"></script>
      <script src="/libs/vanta.globe.min.js"></script>
    </>
  ),
  gitTimestamp: <></>,
  search: {
    placeholder: 'Search...',
  },
  banner: {
    text: 'QUAK 🚀 Programming, DDD, Knowledge',
  },
  // project: {
  //   link: 'https://github.com/Walikuperek/quak-docs',
  // },
  docsRepositoryBase: 'https://github.com/Walikuperek/quak-docs/tree/main/',
  // TODO: Add chat link
  // chat: {
  //   link: 'https://discord.com',
  // },
  footer: {
    text: (
      <div className="flex justify-center w-full gap-5">
        <div className="flex flex-col">
          <b className="text-gray-500 font-bold">CONTACT</b>
          <div className="flex flex-col gap-2 mt-3 p-2">
            <a href="https://quak.com.pl/quakky/" className="text-green-500 hover:underline">
              Play Quakky
            </a>
            <a href="https://quak.com.pl/quakky/" className="text-green-500 hover:underline">
              Play Adventurer
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <b className="text-gray-500 font-bold">GAMES</b>
          <div className="flex flex-col gap-2 mt-3 p-2">
            <a href="https://quak.com.pl/quakky/" className="text-green-500 underline">
              Play Quakky
            </a>
            <a href="https://quak.com.pl/quakky/" className="text-green-500 underline">
              Play Adventurer
            </a>
          </div>
        </div>
      </div>
    ),
  },
}

export default config
