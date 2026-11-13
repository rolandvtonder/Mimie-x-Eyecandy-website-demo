import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import {resolve} from 'node:path';
import {defineConfig, type Plugin} from 'vite';
import {pages} from './src/content/pages';
import {headHtml, pageForHtml, robotsTxt, sitemapXml, webManifest} from './src/seo';

/**
 * Writes each page's <head> (title, description, canonical, share cards,
 * structured data) from src/seo.ts, in dev and in the build, and emits
 * sitemap.xml, robots.txt and site.webmanifest.
 */
function seo(): Plugin {
  return {
    name: 'mxe-seo',
    transformIndexHtml(html, ctx) {
      return html.replace('<!--head-->', headHtml(pageForHtml(ctx.path)));
    },
    generateBundle() {
      this.emitFile({type: 'asset', fileName: 'sitemap.xml', source: sitemapXml()});
      this.emitFile({type: 'asset', fileName: 'robots.txt', source: robotsTxt()});
      this.emitFile({type: 'asset', fileName: 'site.webmanifest', source: webManifest()});
    },
  };
}

// "/" on a real domain; "/<repo>/" when published to GitHub Pages.
const base = process.env.BASE_PATH ?? '/';

export default defineConfig(({isSsrBuild}) => ({
  base,
  define: {__BASE__: JSON.stringify(base)},
  plugins: [react(), tailwindcss(), seo()],
  build: isSsrBuild
    ? {target: 'node20'}
    : {
        target: 'es2020',
        rollupOptions: {
          // One HTML file per page — real URLs Google can index on their own.
          input: Object.fromEntries(Object.values(pages).map((p) => [p.id, resolve(__dirname, p.file)])),
        },
      },
}));
