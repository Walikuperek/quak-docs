import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: '%s – QUAK'
    }
  },
  logo: <div style={{display: 'flex', alignItems: 'center', fontWeight: 700, letterSpacing: '2px'}}><img src="https://quak.com.pl/quak_logo_72x72.png" alt="QUAK Logo" width={34} />&nbsp;QUAK</div>,
  primaryHue: 320,
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="QUAK" />
      <meta property="og:description" content="QUAK Kacper Walczak company website" />
    </>
  ),
  
  search: {
    placeholder: 'Search...',
  },
  banner: {
    text: 'QUAK 🚀 Programming, DDD, Knowledge',
  },
  project: {
    link: 'https://github.com/Walikuperek/quak-docs',
  },
  docsRepositoryBase: 'https://github.com/Walikuperek/quak-docs/tree/main/',
  // TODO: Add chat link
  // chat: {
  //   link: 'https://discord.com',
  // },
  footer: {
    text: `QUAK Kacper Walczak © ${new Date().getFullYear()}`,
  },
}

export default config
