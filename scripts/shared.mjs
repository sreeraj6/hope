import config from '../site.config.mjs';
export function deployment() {
  const raw = process.env.SITE_URL || config.siteUrl;
  const url = raw ? new URL(raw.endsWith('/') ? raw : `${raw}/`) : null;
  if (url && !['https:', 'http:'].includes(url.protocol)) throw new Error('SITE_URL must be HTTP(S).');
  const base = url?.pathname || '/';
  return { url: url?.href || '', base };
}
export const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, c => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
}[c]));
export const publishedProjects = () => config.projects.filter(p => p.approved);
export const publishedBrands = () => config.brands.filter(b => b.verified);
export const publishedClients = () => config.clients.filter(c => c.approved);
