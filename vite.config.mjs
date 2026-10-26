import { defineConfig } from 'vite';
import { readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { deployment } from './scripts/shared.mjs';

function htmlFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap(entry =>
    entry.isDirectory() ? htmlFiles(resolve(dir, entry.name)) :
      entry.name.endsWith('.html') ? [resolve(dir, entry.name)] : []);
}
export default defineConfig({
  root: '.generated',
  base: deployment().base,
  publicDir: resolve('public'),
  build: {
    outDir: resolve('dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: htmlFiles(resolve('.generated')),
      output: { manualChunks: id => id.includes('/three/') ? 'three' : undefined },
    },
  },
  server: { fs: { allow: [resolve('.')] } },
});
