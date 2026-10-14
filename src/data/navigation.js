// Top-level menu. `children` renders as a dropdown on desktop and an accordion on mobile.
export const NAV = [
  { label: 'Home', href: '#home' },
  {
    label: 'About Us',
    href: '#about',
    children: ['Vision & Profile', 'Objectives', 'Organization Setup', 'Governing Council', 'Internal Complaints Committee', 'Act & Rules'],
  },
  {
    label: 'Satellite Communication',
    href: '#services',
    children: ['Infrastructure', 'Operational Channels', 'Channel Details'],
  },
  {
    label: 'Functional Units',
    href: '#services',
    children: ['Centre for Geo-informatics Applications', 'Centre for Informatics and Training', 'Academy of Geo-informatics for Sustainable Development'],
  },
  { label: 'Innovations', href: '#impact' },
  { label: 'Projects', href: '#impact' },
  { label: 'E-citizen', href: '#gov', children: ['Right to Information Act', 'Useful Websites', 'Media Library'] },
  { label: 'Training', href: '#notices', children: ['Training / Workshops', 'FAQ'] },
  { label: 'Notices', href: '#notices' },
  { label: 'Contact', href: '#contact' },
];
