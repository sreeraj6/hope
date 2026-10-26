# Hope Networking — Launch Checklist

This site is built and tested. Before publishing, complete the items below and re-run `npm run check:launch`.

## Already implemented

- Multi-page static export with one HTML file per route.
- All required launch routes: `/`, `/services/`, `/cctv-installation-vallikkavu/`, `/home-security/`, `/commercial-cctv-security/`, `/networking-wifi-solutions/`, `/about-hope-networking/`, `/contact/`, `/privacy-policy/`, plus `/404.html`.
- Dedicated service pages with original content, H1, FAQs, and internal links.
- WhatsApp enquiry form with validation, review step, copy fallback, and no server-side storage.
- Progressive 3D hero with static SVG poster, reduced-motion path, constrained-device skip, and keyboard pause/replay.
- Responsive styles, semantic headings, skip link, focus states, and print stylesheet.
- `sitemap.xml`, `robots.txt`, canonical/OG metadata, LocalBusiness structured data.
- Static tests (`npm test`) pass. E2E spec added in `tests/e2e.spec.mjs`.

## Remaining blockers (tracked by `npm run check:launch`)

1. **Production URL** — Set `SITE_URL` GitHub variable or `siteUrl` in `site.config.mjs` to the final HTTPS URL (including repository path if using a project site).
2. **Content approval** — Review all copy in `src/content.mjs` and `site.config.mjs` with the business, then set `contentApproved: true`.
3. **Hosting eligibility** — Confirm with GitHub that the site’s intended use complies with GitHub Pages limits, then set `hostingEligibilityConfirmed: true`.
4. **Launch readiness** — After steps 1–3 and the final checklist below are complete, set `launchReady: true`.

## Final manual checks

- [ ] Verify the WhatsApp number in `site.config.mjs` is the business-verified international number.
- [ ] Verify the public phone number, Instagram URL, email, hours, address, and service areas.
- [ ] Confirm whether home automation is offered and set `automationOffered` accordingly.
- [ ] Add approved real projects to `site.config.mjs` only with `approved: true` and local images in `public/projects/`.
- [ ] Add only verified technology brands to `site.config.mjs` with `verified: true`.
- [ ] Confirm project counts (200+/50+) before showing them; currently hidden until approved.
- [ ] Run `npm run build`, `npm test`, and `npm run check:launch` locally.
- [ ] Test the deployed site on real mobile devices: direct links, refresh, WhatsApp handoff, copy fallback, and 404 page.
- [ ] Set up Google Search Console and submit `sitemap.xml` after launch.
