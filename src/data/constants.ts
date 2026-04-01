
import { 
  Radio, 
  Server, 
  Zap, 
  GraduationCap 
} from 'lucide-react';
import { PageID } from '../types';

export const SITE = {
  name: "InfinEth Solutions",
  tagline: "Infinite Possibilities in Engineering & ICT",
  url: "https://infine-th.com",
  logoText: "InfinEth",
  logoSub: "Infinite Possibilities",
  copyright: `© ${new Date().getFullYear()} InfinEth Solutions`,
  contact: {
    phone: "+251 11 635 4312",
    address: "Bole, Addis Ababa, Ethiopia",
    email: "info@infine-th.com"
  }
};

export const HERO = {
  badge: "isoCertified",
  heading: "heroTitle",
  subheading: "heroSub",
  slides: [
    {
      webp: "/assets/hero/hero-telecom.webp",
      jpeg: "/assets/hero/hero-telecom.webp",
      alt: "Telecom infrastructure hero image"
    },
    {
      webp: "/assets/hero/data-center.webp",
      jpeg: "/assets/hero/data-center.webp",
      alt: "Data center hero image"
    },
    {
      webp: "/assets/hero/power-solar.webp",
      jpeg: "/assets/hero/power-solar.webp",
      alt: "Power and solar systems hero image"
    }
  ]
};

export const PARTNERS = [
  { name: "NOKIA", logo: "/assets/partners/nokia.svg" },
  { name: "SAFARICOM", logo: "/assets/partners/safaricom.svg" },
  { name: "UNITED NATIONS (UN)", logo: "/assets/partners/un.svg" },
  { name: "ETHIO TELECOM", logo: "/assets/partners/ethio-telecom.svg" },
  { name: "HUAWEI", logo: "/assets/partners/huawei.svg" },
  { name: "ERICSSON", logo: "/assets/partners/ericsson.svg" },
  { name: "ZTE", logo: "/assets/partners/zte.svg" },
  { name: "ABB", logo: "/assets/partners/abb.svg" }
];

export const STATS = [
  { value: 12, label: "stats.chapters", suffix: "" },
  { value: 450, label: "stats.fieldStaff", suffix: "+" },
  { value: 1200, label: "stats.projects", suffix: "+" },
  { value: 99.9, label: "stats.uptime", suffix: "%" }
];

export const UI_CLASSES = {
  displayLarge: "text-display font-bold leading-tight tracking-tight",
  sectionTitle: "text-h2 font-semibold tracking-tight",
  cardTitle: "text-h3 font-semibold tracking-tight leading-tight",
  tag: "text-sm font-semibold tracking-[0.2em] uppercase block",
  bodyLarge: "text-body-lg leading-relaxed",
};

export const NAV_CONFIG = [
  {
    label: 'nav.telecommunications',
    icon: Radio,
    overview: {
      title: "nav.telecom_solutions",
      description: "nav.telecom_desc",
      cta: "nav.view_works",
      tag: "nav.connectivity"
    },
    items: [
      { label: 'nav.tower', page: 'telecom' as PageID, category: 'nav.infrastructure' },
      { label: 'nav.civil_works', page: 'telecom' as PageID, category: 'nav.infrastructure' },
      { label: 'nav.mobile_rollout', page: 'mobile-network' as PageID, category: 'nav.rollout' },
      { label: 'nav.fiber_optics', page: 'telecom' as PageID, category: 'nav.transmission' },
      { label: 'nav.sourcing', page: 'presence' as PageID, category: 'nav.supply' },
      { label: 'nav.om', page: 'om' as PageID, category: 'nav.field_service' },
      { label: 'nav.warehouse', page: 'om' as PageID, category: 'nav.logistics' }
    ]
  },
  {
    label: 'nav.ict_consultancy',
    icon: Server,
    overview: {
      title: "nav.digital_systems",
      description: "nav.digital_desc",
      cta: "nav.explore_tech",
      tag: "nav.digital_core"
    },
    items: [
      { label: 'nav.engineering_design', page: 'consultancy' as PageID, category: 'nav.consultancy' },
      { label: 'nav.installation', page: 'ict' as PageID, category: 'nav.field' },
      { label: 'nav.maintenance', page: 'om' as PageID, category: 'nav.om' },
      { label: 'nav.supplies', page: 'ict' as PageID, category: 'nav.procurement' },
      { label: 'nav.ai_iot', page: 'ai-iot' as PageID, category: 'nav.innovation' },
      { label: 'nav.software', page: 'ict' as PageID, category: 'nav.solutions' },
      { label: 'nav.mobility', page: 'mobility' as PageID, category: 'nav.mobility' }
    ]
  },
  {
    label: 'nav.power_automation',
    icon: Zap,
    overview: {
      title: "nav.industrial_power",
      description: "nav.industrial_power_desc",
      cta: "nav.power_grid",
      tag: "nav.industrial"
    },
    items: [
      { label: 'nav.mv_hv', page: 'power' as PageID, category: 'nav.grid' },
      { label: 'nav.backup', page: 'energy-mgmt' as PageID, category: 'nav.energy' },
      { label: 'nav.factory', page: 'power' as PageID, category: 'nav.automation' }
    ]
  },
  {
    label: 'nav.training',
    icon: GraduationCap,
    overview: {
      title: "nav.academia",
      description: "nav.academia_desc",
      cta: "nav.view_academy",
      tag: "nav.education"
    },
    items: [
      { label: 'nav.ehs', page: 'ehs' as PageID, category: 'nav.safety' },
      { label: 'nav.telecom_training', page: 'academy' as PageID, category: 'nav.technical' },
      { label: 'nav.industrial_automation', page: 'power' as PageID, category: 'nav.automation' },
      { label: 'nav.facility_dc', page: 'datacenters' as PageID, category: 'nav.infrastructure' }
    ]
  }
];

export const ISO_DATA = [
  { id: "9001", title: "iso.9001.title", description: "iso.9001.description" },
  { id: "14001", title: "iso.14001.title", description: "iso.14001.description" },
  { id: "45001", title: "iso.45001.title", description: "iso.45001.description" },
  { id: "27001", title: "iso.27001.title", description: "iso.27001.description" },
  { id: "22301", title: "iso.22301.title", description: "iso.22301.description" }
];
