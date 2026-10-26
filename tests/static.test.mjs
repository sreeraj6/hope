import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import config from '../site.config.mjs';
import { deployment } from '../scripts/shared.mjs';
const routes = JSON.parse(await readFile('.generated/routes.json', 'utf8'));
const titles = new Set();
for (const route of routes) {
  test(`${route} has substantive static HTML and unique SEO metadata`, async () => {
    const html = await readFile(`dist${route}index.html`, 'utf8');
    assert.equal((html.match(/<h1\b/g) || []).length, 1);
    const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
    assert.ok(title);
    assert.ok(!titles.has(title));
    titles.add(title);
    assert.match(html, /<meta name="description" content="[^"]+"/);
    assert.match(html, /href="tel:\+919567650963"/);
    assert.match(html, /instagram.com\/hope_networking/);
    assert.match(html, /<main id="main">/);
    assert.ok(html.length > 5500);
    if (deployment().url) assert.match(html, /rel="canonical"/);
    if (!config.launchReady) assert.match(html, /content="noindex,follow"/);
  });
}
test('unverified brand and project proof is not published', async () => {
  const html = await readFile('dist/index.html', 'utf8');
  if (!config.projects.some(p => p.approved)) {
    assert.ok(!html.includes('href="/projects/"'));
    assert.ok(!(await readdir('dist')).includes('projects'));
  }
  assert.ok(!html.includes('200+'));
  assert.ok(!html.includes('50+'));
  assert.match(html, /ILLUSTRATIVE SYSTEM CONCEPT/);
});
test('fallback and real 404 are exported', async () => {
  const home = await readFile('dist/index.html', 'utf8');
  assert.match(home, /hero-poster.svg/);
  assert.match(home, /id="scene-canvas"/);
  const missing = await readFile('dist/404.html', 'utf8');
  assert.match(missing, /noindex,follow/);
  assert.match(missing, /Page Not Found/);
});
