/**
 * After `vite build` (client) and `vite build --ssr` (server bundle), fill each
 * built HTML page with its fully rendered markup, then drop the server bundle.
 */
import {readFile, rm, writeFile} from 'node:fs/promises';
import {pathToFileURL} from 'node:url';
import path from 'node:path';

const ssr = await import(pathToFileURL(path.resolve('dist-ssr/entry-server.js')).href);

for (const {id, file} of ssr.routes) {
  const out = path.join('dist', file);
  const html = await readFile(out, 'utf8');
  if (!html.includes('<!--app-->')) throw new Error(`${out} has no <!--app--> placeholder`);
  await writeFile(out, html.replace('<!--app-->', ssr.render(id)));
  console.log('prerendered', file);
}

await rm('dist-ssr', {recursive: true, force: true});
