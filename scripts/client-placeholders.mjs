import { mkdir, writeFile } from 'node:fs/promises';

function svg(name, category) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect width="400" height="300" fill="#f5f5ef"/><rect x="40" y="40" width="320" height="220" rx="12" fill="#e8ebe3"/><text x="200" y="130" text-anchor="middle" font-family="DM Sans Variable,system-ui,sans-serif" font-size="26" font-weight="600" fill="#182923">${name}</text><text x="200" y="170" text-anchor="middle" font-family="DM Sans Variable,system-ui,sans-serif" font-size="14" fill="#637068">${category}</text><rect x="120" y="210" width="160" height="8" rx="4" fill="#c5e873"/></svg>`;
}

await mkdir('public/clients', { recursive: true });
const clients = [
  ['tvs', 'TVS', 'Automotive / enterprise'],
  ['indian-oil', 'Indian Oil', 'Fuel retail network'],
  ['jewellery', 'Jewellery network', 'Retail security'],
  ['supermarket', 'Supermarket network', 'Retail surveillance'],
  ['education', 'Educational institutes', 'Institutional security'],
];
for (const [slug, name, category] of clients) {
  await writeFile(`public/clients/${slug}.svg`, svg(name, category));
}
console.log('Generated client placeholder SVGs in public/clients/');
