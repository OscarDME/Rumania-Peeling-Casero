// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/static';
import compress from 'astro-compress';

export default defineConfig({
  output: 'static',
  adapter: vercel({
    imageService: false,
  }),
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
    assets: '_astro',
  },
  vite: {
    build: {
      cssMinify: 'esbuild',
    },
  },
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  integrations: [
    tailwind({ applyBaseStyles: true }),
    compress({
      HTML: {
        'html-minifier-terser': {
          collapseWhitespace: true,
          removeComments: true,
          minifyJS: true,
        },
      },
      JavaScript: true,
      SVG: true,
      CSS: false,
      Image: false,
    }),
  ],
});
