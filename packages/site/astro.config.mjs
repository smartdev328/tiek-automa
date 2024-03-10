import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import preact from '@astrojs/preact'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  server: {
    port: 3001,
  },
  site: '',
  legacy: {
    astroFlavoredMarkdown: true,
  },
  integrations: [sitemap(), preact(), tailwind()],
  vite: {
    ssr: {
      external: ['svgo', 'github-slugger'],
    },
  },
})
