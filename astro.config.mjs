// @ts-check
import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
import tailwindcss from "@tailwindcss/vite";
import remarkToc from 'remark-toc';

// https://astro.build/config
export default defineConfig({
  site: "https://astro-d.netlify.app",
  integrations: [preact()],
  markdown: {
    remarkPlugins: [[remarkToc, { heading: 'toc', maxDepth: 3 }]],
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
  },
  vite: {
    plugins: [tailwindcss()]
  }
});