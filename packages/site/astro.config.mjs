import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  server: {
    port: 3001,
  },
  site: 'https://www.proautoma.com',
  integrations: [react(), tailwind(), sitemap()],
  vite: {
    ssr: {
      external: ['svgo', 'github-slugger'],
    },
  },
})
