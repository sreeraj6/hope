import { readFile, readdir, stat } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { deployment } from './shared.mjs';
const root = resolve('dist');
const { base } = deployment();
async function walk(dir) {
  return (await Promise.all((await readdir(dir, { withFileTypes:true })).map(e => e.isDirectory() ? walk(join(dir,e.name)) : join(dir,e.name)))).flat();
}
let checked = 0;
for (const file of (await walk(root)).filter(f => f.endsWith('.html'))) {
  const html = await readFile(file,'utf8');
  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const raw = match[1];
    if (/^(?:https?:|mailto:|tel:|#|data:)/.test(raw)) continue;
    if (!raw.startsWith(base)) throw new Error(`Non-base-aware asset/link: ${raw}`);
    const path = decodeURI(raw.split(/[?#]/)[0].slice(base.length));
    let target = resolve(root,path);
    if (!(target === root || target.startsWith(root + '/'))) throw new Error(`Path escapes output: ${raw}`);
    try { if ((await stat(target)).isDirectory()) target=join(target,'index.html'); await stat(target); }
    catch { throw new Error(`${file}: broken destination ${raw}`); }
    checked++;
  }
}
console.log(`Verified ${checked} internal links and asset references under ${base}`);
