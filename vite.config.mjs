import { defineConfig } from 'vite';
import { readdirSync, copyFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { deployment } from './scripts/shared.mjs';

function htmlFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap(entry =>
    entry.isDirectory() ? htmlFiles(resolve(dir, entry.name)) :
      entry.name.endsWith('.html') ? [resolve(dir, entry.name)] : []);
}
export default defineConfig({
  plugins: [{
    name: 'sync-development-source',
    configureServer(server) {
      const source = resolve('src');
      server.watcher.add(source);
      server.watcher.on('change', file => {
        if (!file.startsWith(`${source}/`)) return;
        copyFileSync(file, resolve('.generated', file.slice(source.length + 1)));
      });
    },
  }],
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
