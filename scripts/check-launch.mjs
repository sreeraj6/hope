import config from '../site.config.mjs';
import { deployment, publishedBrands, publishedProjects, publishedClients } from './shared.mjs';
import { existsSync } from 'node:fs';
const errors = [];
if (!deployment().url.startsWith('https://')) errors.push('Set SITE_URL or siteUrl to the final HTTPS URL, including the repository path if applicable.');
if (!config.launchReady) errors.push('Set launchReady only after reviewing the launch checklist.');
if (!config.hostingEligibilityConfirmed) errors.push('Resolve GitHub Pages hosting eligibility and set hostingEligibilityConfirmed.');
if (!config.contentApproved) errors.push('Review business/service/privacy copy and set contentApproved.');
if (!/^[1-9]\d{7,14}$/.test(config.whatsapp)) errors.push('Supply a verified WhatsApp number in international digits-only format.');
if (!/^\+[\d\s-]{8,20}$/.test(config.phone)) errors.push('Supply a verified international phone number.');
if (!/^https:\/\/(www\.)?instagram\.com\/[\w.]+\/?$/.test(config.instagram)) errors.push('Supply the approved Instagram URL.');
for (const p of publishedProjects()) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(p.slug)) errors.push('Projects need URL-safe unique slugs.');
  for (const key of ['title', 'category', 'location', 'challenge', 'scope', 'outcome']) {
    if (!p[key]) errors.push(`Project ${p.slug} is missing ${key}.`);
  }
  if (p.image && (!p.imageAlt || !existsSync(`public/${p.image.replace(/^\//, '')}`))) errors.push(`Project ${p.slug} needs an existing local image and descriptive alt text.`);
}
if (new Set(publishedProjects().map(p => p.slug)).size !== publishedProjects().length) errors.push('Project slugs must be unique.');
for (const c of publishedClients()) {
  if (!c.name || !c.category) errors.push('Approved client is missing a name or category.');
  if (c.image && !existsSync(`public/${c.image.replace(/^\//, '')}`)) errors.push(`Client ${c.name} image must exist in public/.`);
}
for (const b of publishedBrands()) if (!b.name) errors.push('Verified brand is missing a name.');
if (errors.length) {
  console.error(`Production launch is blocked:\n${errors.map(x => `- ${x}`).join('\n')}`);
  process.exitCode = 1;
} else console.log('Launch configuration is complete.');
