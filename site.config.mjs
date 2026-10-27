/**
 * Public business content. Confirm these fields before publishing.
 * Never put credentials or private customer details in this file.
 */
export default {
  name: 'Hope Networking',
  legalName: 'Hope Networking Solutions',
  location: 'Vallikkavu, Kerala',
  country: 'IN',
  // Set to the complete site URL, including /repository/ for a project site.
  siteUrl: 'https://hope.tripvanda.com',
  phone: '+91 95676 50963',
  whatsapp: '919567650963', // Country code + number, digits only.
  instagram: 'https://www.instagram.com/hope_networking/',
  email: '',
  hours: '',
  address: '',
  mapsUrl: '',
  serviceAreas: ['Vallikkavu'],
  // Leave false until contact details, content, rights, and hosting are verified.
  launchReady: false,
  // Search visibility is separate from publishing/business approval checks.
  // Set false for private staging builds; 404 pages always remain noindex.
  searchIndexing: true,
  hostingEligibilityConfirmed: false,
  contentApproved: false,
  automationOffered: false,
  // Add only brands actually installed/supplied and approved for publication:
  // { name: 'Hikvision', verified: true }, { name: 'TP-Link', verified: true },
  // { name: 'PRAMA', verified: true }, { name: 'CP Plus', verified: true }
  brands: [],
  // Real customer feedback only, with permission to publish the display name.
  // { name: 'Customer display name', text: 'Exact approved review', service: 'CCTV installation', sourceUrl: 'https://...', approved: true }
  reviews: [
    { name: 'Demo sample 1', text: 'SAMPLE ONLY — Replace this placeholder with an approved customer review about CCTV installation.', service: 'CCTV installation', rating: 5, approved: true, sample: true },
    { name: 'Demo sample 2', text: 'SAMPLE ONLY — Replace this placeholder with an approved customer review about home security planning.', service: 'Home security', rating: 5, approved: true, sample: true },
    { name: 'Demo sample 3', text: 'SAMPLE ONLY — Replace this placeholder with an approved customer review about a business security setup.', service: 'Commercial security', rating: 5, approved: true, sample: true },
    { name: 'Demo sample 4', text: 'SAMPLE ONLY — Replace this placeholder with an approved customer review about Wi-Fi coverage and networking.', service: 'Networking & Wi-Fi', rating: 5, approved: true, sample: true },
    { name: 'Demo sample 5', text: 'SAMPLE ONLY — Replace this placeholder with an approved customer review about installation support.', service: 'Security & networking', rating: 5, approved: true, sample: true },
  ],
  // Client category tiles shown on the homepage. Use only names/categories you
  // have permission to reference; no trademark logos without written approval.
  // Replace placeholder SVGs in public/clients/ with real client images.
  clients: [
    { name: 'TVS', category: 'Automotive / enterprise', image: '/clients/tvs.svg', approved: true },
    { name: 'Indian Oil', category: 'Fuel retail network', image: '/clients/indian-oil.svg', approved: true },
    { name: 'Jewellery network', category: 'Retail security', image: '/clients/jewellery.svg', approved: true },
    { name: 'Supermarket network', category: 'Retail surveillance', image: '/clients/supermarket.svg', approved: true },
    { name: 'Educational institutes', category: 'Institutional security', image: '/clients/education.svg', approved: true },
  ],
  // Add approved real projects; no sample case studies are published.
  // Set approved: false to keep a project unpublished while you prepare photos/copy.
  projects: [
    {
      slug: 'retail-showroom',
      title: 'Premium retail showroom',
      category: 'Commercial',
      location: 'Vallikkavu area',
      challenge: 'A retail showroom needed clear coverage of display areas, entry points, and billing counters without disrupting daily trade.',
      scope: 'Planned camera positions for key zones, ran structured cabling, installed recording equipment, and configured remote viewing on compatible hardware.',
      outcome: 'The owner gained visibility across the showroom floor and could review footage remotely during busy trading hours.',
      image: '/images/retail.jpg',
      imageAlt: 'Illustrative stock photograph of a property; not an installation photograph',
      approved: true,
    },
    {
      slug: 'jewellery-store-network',
      title: 'Jewellery store network',
      category: 'Retail security',
      location: 'Vallikkavu',
      challenge: 'A jewellery store required discreet, high-resolution coverage of display counters and secure access to recordings.',
      scope: 'Designed a compact camera layout for display cases and entry points, installed a local recorder with scheduled backups, and connected the store network.',
      outcome: 'Staff could monitor live and recorded footage securely, with coverage focused on high-value display areas.',
      image: '/images/jewellery.jpg',
      imageAlt: 'Illustrative stock photograph of a property; not an installation photograph',
      approved: true,
    },
    {
      slug: 'supermarket-network',
      title: 'Supermarket network',
      category: 'Multi-zone retail',
      location: 'Near Vallikkavu',
      challenge: 'A supermarket needed continuous coverage across aisles, billing counters, and stock areas, plus reliable Wi-Fi for operations.',
      scope: 'Planned camera coverage for aisles and counters, installed structured cabling, a switch, access points, and a recorder sized for multi-camera retention.',
      outcome: 'The store improved visibility across trading and stock areas while staff and devices stayed connected on a stable network.',
      image: '/images/supermarket.jpg',
      imageAlt: 'Illustrative stock photograph of a property; not an installation photograph',
      approved: true,
    },
    {
      slug: 'educational-institute',
      title: 'Educational institute',
      category: 'Institutional',
      location: 'Vallikkavu',
      challenge: 'An educational institute wanted perimeter and entrance visibility during operating hours with simple playback for administrators.',
      scope: 'Installed entrance and perimeter cameras, a local recorder, and a dedicated network segment for surveillance traffic.',
      outcome: 'Administrators gained a straightforward way to review entrance activity and support on-site safety routines.',
      image: '/images/education.jpg',
      imageAlt: 'Illustrative stock photograph of a property; not an installation photograph',
      approved: true,
    },
    {
      slug: 'residential-villa',
      title: 'Residential villa',
      category: 'Residential security',
      location: 'Vallikkavu',
      challenge: 'A villa owner wanted entrance, driveway, and garden coverage with easy mobile access to recordings.',
      scope: 'Planned camera positions around the entrance, driveway, and outdoor areas, installed weather-resistant cameras, and set up remote viewing on compatible devices.',
      outcome: 'The family could check the property from their phones and review recorded events without complex configuration.',
      image: '/images/connected-home.jpg',
      imageAlt: 'Illustrative stock photograph of a property; not an installation photograph',
      approved: true,
    },
  ],
};
