import { writeFile } from 'node:fs/promises';
const polygons = [];
const project = (x, y, z) => [450 + (x - z) * 58, 420 + (x + z) * 27 - y * 80];
const points = vertices => vertices.map(v => project(...v).map(n => n.toFixed(1)).join(',')).join(' ');
function box(x, y, z, w, h, d, top, left, right) {
  const a = [x - w / 2, y, z - d / 2], b = [x + w / 2, y, z - d / 2];
  const c = [x + w / 2, y, z + d / 2], f = [x - w / 2, y, z + d / 2];
  const up = p => [p[0], p[1] + h, p[2]];
  polygons.push(`<polygon points="${points([f, c, up(c), up(f)])}" fill="${left}"/><polygon points="${points([b, c, up(c), up(b)])}" fill="${right}"/><polygon points="${points([up(a), up(b), up(c), up(f)])}" fill="${top}"/>`);
}
box(0, -.2, 0, 7.7, .22, 6.1, '#e4e5d7', '#cfd2c0', '#bbc1af');
box(-3, .02, .2, .7, .015, 4.7, '#a7b98b', '#9aae7e', '#9aae7e');
box(-.9, .02, 2.3, 2.8, .015, .9, '#a7b98b', '#9aae7e', '#9aae7e');
box(-.1, .04, -.15, 5, 1.6, 3.5, '#415a70', '#34465a', '#203446');
box(-.7, .28, 1.62, 2.6, 1.2, .04, '#6f8274', '#5a7264', '#405d50');
for (const x of [-2, -.7, .6]) box(x, .26, 1.65, .04, 1.25, .05, '#344b3d', '#344b3d', '#344b3d');
box(1.48, .04, 1.65, .8, 1.4, .05, '#b09a74', '#a48a65', '#938564');
for (let i = 0; i < 9; i++) box(1.12 + i * .09, .05, 1.69, .025, 1.37, .025, '#c9b997', '#c9b997', '#c9b997');
box(2.42, .3, -.3, .04, 1.13, 1.8, '#6f8274', '#5a7264', '#4a6558');
box(-.1, 1.65, -.15, 5.25, .16, 3.75, '#74899a', '#4e667a', '#344b60');
box(-.68, 1.82, -.5, 3.05, 1.5, 2.75, '#415a70', '#34465a', '#203446');
box(-.65, 2, .9, 2.18, 1.08, .045, '#5b7467', '#668073', '#4d695c');
for (const x of [-1.75, -.65, .45]) box(x, 1.99, .94, .04, 1.12, .06, '#374e40', '#374e40', '#374e40');
box(-.68, 3.32, -.5, 3.3, .17, 3, '#74899a', '#4e667a', '#344b60');
box(-.68, 3.49, -.5, 3.05, .015, 2.75, '#d6dbc9', '#cdd4bf', '#cdd4bf');
box(-.68, 1.82, 1.22, 2.85, .12, .67, '#faf8ed', '#e8e8da', '#d8dfca');
box(1.6, 1.82, -.5, 1.3, .06, 2.7, '#aa9470', '#aa9470', '#aa9470');
for (const z of [-1.8, .8]) box(2.2, 1.88, z, .07, 1.26, .07, '#495a43', '#495a43', '#495a43');
for (let i = 0; i < 10; i++) box(1.55, 3.14, -1.8 + i * .29, 1.5, .07, .055, '#b19a75', '#9a8566', '#8a7d5f');
for (let i = 0; i < 3; i++) box(1.46, .02, 1.95 + i * .38, 1.12, .04, .3, '#f0f0e5', '#d8decb', '#d1d7c4');
for (const [x, y, z] of [[-2.22, 1.45, 1.75], [2.5, 1.45, .9]]) {
  box(x, y, z, .25, .2, .38, '#fffdf3', '#eceee5', '#c8d1bf');
  box(x, y + .05, z + .2, .15, .1, .015, '#23453b', '#23453b', '#23453b');
}
const line = vertices => `<polyline points="${points(vertices)}" fill="none" stroke="#94e2ef" stroke-width="3" stroke-linejoin="round"/>`;
polygons.push(line([[-2.22, 1.6, 1.8], [-2.22, 1.83, 1.8], [2.58, 1.83, 1.8], [2.58, 1.83, -.9], [2.58, .7, -.9]]));
for (const [x, z] of [[-3.1, -1.6], [-3, .8], [3.1, -1.8]]) {
  const [cx, cy] = project(x, .5, z);
  polygons.push(`<path d="M${cx} ${cy + 30}v-65" stroke="#8b805f" stroke-width="7"/><path d="m${cx} ${cy - 100} 34 36 3 40-29 23-36-15-10-37z" fill="#8fa674"/><path d="m${cx} ${cy - 100} 34 36-26 21-46-10z" fill="#adc28b"/>`);
}
await writeFile('public/hero-poster.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 800"><defs><filter id="s"><feGaussianBlur stdDeviation="18"/></filter></defs><ellipse cx="460" cy="590" rx="290" ry="65" fill="#35482b" opacity=".09" filter="url(#s)"/>${polygons.join('')}</svg>`);
await writeFile('public/favicon.svg', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="16" fill="#17384a"/><path d="M18 15h8v14h12V15h8v34h-8V36H26v13h-8z" fill="#94e2ef"/><circle cx="32" cy="32" r="4" fill="#080f19"/></svg>');
const socialCard = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630"><rect width="1200" height="630" fill="#080f19"/><g transform="translate(80,80)"><rect width="64" height="64" rx="16" fill="#17384a"/><path d="M18 15h8v14h12V15h8v34h-8V36H26v13h-8z" fill="#94e2ef"/><circle cx="32" cy="32" r="4" fill="#080f19"/><text x="84" y="48" font-family="DM Sans Variable,system-ui,sans-serif" font-size="28" font-weight="600" fill="#17384a">Hope Networking</text></g><text x="80" y="260" font-family="Manrope Variable,system-ui,sans-serif" font-size="72" font-weight="600" fill="#17384a">Protection. Perfectly connected.</text><text x="80" y="340" font-family="DM Sans Variable,system-ui,sans-serif" font-size="32" fill="#a0afbe">CCTV, networking, and smart systems in Vallikkavu, Kerala.</text><rect x="80" y="460" width="240" height="56" rx="6" fill="#17384a"/><text x="112" y="498" font-family="DM Sans Variable,system-ui,sans-serif" font-size="20" font-weight="600" fill="#080f19">Plan my setup →</text></svg>`;
await writeFile('public/social-card.svg', socialCard);
console.log('Generated architectural poster, favicon, and social-card.svg.');
