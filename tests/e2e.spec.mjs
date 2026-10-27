import { test, expect } from '@playwright/test';

const base = (process.env.PLAYWRIGHT_BASE_URL || 'http://127.0.0.1:4173') + (process.env.PLAYWRIGHT_PATH_PREFIX || '');

for (const path of ['/', '/services/', '/cctv-installation-vallikkavu/', '/home-security/', '/commercial-cctv-security/', '/networking-wifi-solutions/', '/about-hope-networking/', '/contact/', '/privacy-policy/']) {
  test(`${path} renders a clear H1, navigation, and footer`, async ({ page }) => {
    await page.goto(`${base}${path}`, { waitUntil: 'networkidle' });
    await expect(page.locator('h1')).toHaveCount(1);
    if (await page.locator('.menu-toggle').isVisible()) await page.locator('.menu-toggle').click();
    await expect(page.locator('header nav a').first()).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();
  });
}

test('contact form prepares a WhatsApp message and shows a copy fallback', async ({ page, context }) => {
  await page.goto(`${base}/contact/`);
  await page.fill('input[name="name"]', 'Asha');
  await page.fill('input[name="phone"]', '9876543210');
  await page.selectOption('select[name="service"]', 'CCTV & surveillance');
  await page.selectOption('select[name="property"]', 'Home / apartment');
  await page.fill('input[name="location"]', 'Vallikkavu');
  await page.fill('textarea[name="description"]', 'Need coverage for entrance and parking area.');
  await page.click('button[type="submit"]');
  await expect(page.locator('#enquiry-review')).toBeVisible();
  await expect(page.locator('#message-preview')).toContainText('Asha');
  await expect(page.locator('#message-preview')).toContainText('Need coverage');

  // Capture the handoff without sending personal data to an external service.
  await page.evaluate(() => { window.open = url => { window.__handoffUrl = url; return null; }; });
  await page.click('#send-whatsapp');
  const url = await page.evaluate(() => window.__handoffUrl);
  expect(url).toMatch(/^https:\/\/wa\.me\/\d+\?text=/);
  expect(new URL(url).searchParams.get('text')).toContain('Asha');
  await expect(page.locator('#copy-status')).toContainText('Press Send');
});

test('mobile menu opens and closes with keyboard', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto(`${base}/`);
  const toggle = page.locator('.menu-toggle');
  await toggle.click();
  await expect(toggle).toHaveAttribute('aria-expanded', 'true');
  await page.keyboard.press('Escape');
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
});

for (const width of [320, 360, 375, 390, 430, 768, 1024, 1440]) {
  test(`layout fits ${width}px across every page`, async ({ page }) => {
    await page.setViewportSize({ width, height: 850 });
    for (const path of ['/', '/services/', '/home-automation/', '/projects/', '/about-hope-networking/', '/contact/', '/privacy-policy/', '/404.html']) {
      await page.goto(`${base}${path}`);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), path).toBe(true);
    }
    await page.goto(`${base}/`);
    await expect(page.locator('#hero-visual')).toHaveClass(/scene-ready/);
    if (width === 390 || width === 1440) await page.screenshot({ path: `test-results/home-${width}.png`, fullPage: false });
  });
}

test('3D views switch, pause and replay without browser errors', async ({ page }) => {
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  await page.goto(`${base}/`);
  await expect(page.locator('#hero-visual')).toHaveClass(/scene-ready/);
  await page.locator('[data-scene="3"]').click();
  await expect(page.locator('#hero-visual')).toHaveAttribute('data-chapter', '3');
  await expect(page.locator('[data-scene="3"]')).toHaveAttribute('aria-pressed', 'true');
  await page.locator('#scene-pause').click();
  await expect(page.locator('#scene-pause')).toHaveAttribute('aria-label', 'Resume 3D animation');
  await page.locator('#scene-replay').click();
  await expect(page.locator('#hero-visual')).toHaveAttribute('data-chapter', '0');
  expect(errors).toEqual([]);
});

test('reduced motion leaves readable content and static poster', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto(`${base}/`);
  await expect(page.locator('.hero-poster')).toBeVisible();
  await expect(page.locator('#scene-canvas canvas')).toHaveCount(0);
  await expect(page.locator('[data-chapter]')).toHaveCount(4);
});

test('WebGL failure retains poster and all navigation', async ({ page }) => {
  await page.addInitScript(() => {
    const original = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function(type, ...args) {
      if (type.includes('webgl')) return null;
      return original.call(this, type, ...args);
    };
  });
  await page.goto(`${base}/`);
  await expect(page.locator('.hero-poster')).toBeVisible();
  await expect(page.locator('h1')).toBeVisible();
  await expect(page.locator('.scene-controls')).toBeHidden();
});

test('scroll tour follows chapters, freezes when paused, and resumes', async ({ page }) => {
  await page.goto(`${base}/`);
  const scene = page.locator('#hero-visual');
  await expect(scene).toHaveClass(/scene-ready/);
  await expect(page.locator('[data-scene]')).toHaveCount(5);
  // Scroll the document itself: the tour must work without using chapter buttons.
  for (const chapter of [1, 2, 3, 4]) {
    await page.locator(`#tour-0${chapter}`).evaluate(el => {
      const header = document.querySelector('.site-header').getBoundingClientRect().height;
      window.scrollTo({top: el.getBoundingClientRect().top + scrollY - header, behavior: 'instant'});
    });
    await expect(scene).toHaveAttribute('data-chapter', String(chapter));
    await expect(page.locator(`[data-scene="${chapter}"]`)).toHaveAttribute('aria-pressed','true');
    const bounds = await scene.boundingBox();
    expect(bounds.y).toBeGreaterThanOrEqual(70);
    expect(bounds.y).toBeLessThan(100);
  }
  await page.locator('#scene-pause').click();
  await page.locator('[data-scene="1"]').click();
  await expect(scene).toHaveAttribute('data-chapter', '4');
  await page.locator('#scene-pause').click();
  await expect(scene).toHaveAttribute('data-chapter', '1');
  await page.locator('#scene-replay').click();
  await expect(scene).toHaveAttribute('data-chapter', '0');
  await page.locator('.tour-skip').click();
  await expect(page.locator('#services h2')).toBeInViewport();
});

test('Network hands off to opaque services without a lingering house', async ({ page }) => {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto(`${base}/`);
  await expect(page.locator('#hero-visual')).toHaveClass(/scene-ready/);
  await page.reload();
  await expect(page.locator('#hero-visual')).toHaveClass(/scene-ready/);
  await page.locator('[data-scene="4"]').click();
  await expect(page.locator('#hero-visual')).toHaveAttribute('data-chapter', '4');
  const stage = await page.locator('.experience-stage').boundingBox();
  const visual = await page.locator('#hero-visual').boundingBox();
  expect(Math.abs(stage.height - visual.height)).toBeLessThan(2);
  await page.locator('#services').evaluate(el => {
    window.scrollTo({ top: el.offsetTop - document.querySelector('.site-header').offsetHeight, behavior: 'instant' });
  });
  await expect(page.locator('#services h2')).toBeInViewport();
  expect(await page.evaluate(() => document.elementFromPoint(innerWidth / 2, 150).closest('#services') !== null)).toBe(true);
  expect(await page.locator('#services').evaluate(el => getComputedStyle(el).backgroundColor)).not.toBe('rgba(0, 0, 0, 0)');
  await expect(page.locator('#services .service-card').first()).toBeVisible();
  await page.screenshot({ path: `test-results/services-transition-${test.info().project.name}.png` });
  expect(errors).toEqual([]);
});

test('poster remains behind a restrained intro until the first 3D frame is ready', async ({ page }) => {
  await page.route('**/assets/scene-*.js', route => new Promise(resolve => {
    setTimeout(() => resolve(route.continue()), 700);
  }));
  await page.goto(`${base}/`, { waitUntil: 'domcontentloaded' });
  await expect(page.locator('h1')).toBeVisible();
  await expect(page.locator('.hero-actions a').first()).toBeVisible();
  await expect(page.locator('.home-loader')).toHaveCount(0);
  await expect(page.locator('.scene-intro')).toBeAttached();
  await expect(page.locator('.scene-intro')).toBeVisible();
  await expect(page.locator('.scene-intro-label')).toHaveText('Preparing your connected home');
  await expect(page.locator('.hero-poster')).toBeVisible();
  const html = await page.locator('main').textContent();
  expect(html).toContain('A home that');
  await expect(page.locator('#hero-visual')).toHaveClass(/scene-ready/, { timeout: 5000 });
  await expect(page.locator('.scene-intro')).toBeHidden();
});
