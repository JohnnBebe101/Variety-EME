
import { 
  Radio, 
  Server, 
  Zap, 
  GraduationCap,
  Wrench
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
    address: "Bole Sub-city, Woreda 04, House No. 100\nHaile Gebreselassie Avenue, Sr. Gete M. Bldg, 3rd floor\nAddis Ababa, Ethiopia",
    email: "infineth@infineth.com"
  }
};

export const HERO = {
  badge: "isoCertified",
  heading: "heroTitle",
  subheading: "heroSub",
  slides: [
    {
      webp: "/assets/images/hero/telecom.webp",
      jpeg: "/assets/images/hero/telecom.webp",
      alt: "Telecom infrastructure hero image"
    },
    {
      webp: "/assets/images/hero/data-center.webp",
      jpeg: "/assets/images/hero/data-center.webp",
      alt: "Data center hero image"
    },
    {
      webp: "/assets/images/hero/power.webp",
      jpeg: "/assets/images/hero/power.webp",
      alt: "Power and solar systems hero image"
    },
    {
      webp: "/assets/images/hero/hero-overview.webp",
      jpeg: "/assets/images/hero/hero-overview.webp",
      alt: "Brand overview hero image"
    },
    {
      webp: "/assets/images/hero/hero-academy.webp",
      jpeg: "/assets/images/hero/hero-academy.webp",
      alt: "Academy and training hero image"
    }
  ]
};

export const PARTNERS = [
  { name: "NOKIA", logo: "/assets/images/partners/nokia.png" },
  { name: "SAFARICOM", logo: "/assets/images/partners/safaricom.png" },
  { name: "UNITED NATIONS (UN)", logo: "/assets/images/partners/un.png" },
  { name: "ETHIO TELECOM", logo: "/assets/images/partners/ethio-telecom.png" },
  { name: "HUAWEI", logo: "/assets/images/partners/huawei.png" },
  { name: "ERICSSON", logo: "/assets/images/partners/ericsson.png" },
  { name: "ZTE", logo: "/assets/images/partners/zte.png" },
  { name: "ABB", logo: "/assets/images/partners/abb.png" }
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
    label: 'Telecom',
    page: 'telecommunications' as PageID,
    path: '/telecommunications',
    icon: Radio,
    overview: {
      title: 'Telecom',
      description: 'Mobile rollout, fiber optics, towers, O&M, and warehouse management.',
      cta: 'Explore',
      tag: 'Telecom'
    },
    items: [
      { label: 'Mobile Telecom Rollout (RAN + Power)', page: 'telecommunications_mobile_rollout' as PageID, category: 'Telecommunications', path: '/telecommunications/mobile-rollout' },
      { label: 'Fiber Optics', page: 'telecommunications_fiber_optics' as PageID, category: 'Telecommunications', path: '/telecommunications/fiber-optics' },
      { label: 'Tower & Civil Works', page: 'telecommunications_tower_civil_works' as PageID, category: 'Telecommunications', path: '/telecommunications/tower-civil-works' },
      { label: 'Operations & Maintenance (O&M)', page: 'telecommunications_operations_maintenance' as PageID, category: 'Telecommunications', path: '/telecommunications/operations-maintenance' },
      { label: 'Warehouse Management', page: 'telecommunications_warehouse_management' as PageID, category: 'Telecommunications', path: '/telecommunications/warehouse-management' }
    ]
  },
  {
    label: 'ICT',
    page: 'ict_datacenter' as PageID,
    path: '/ict-datacenter',
    icon: Server,
    overview: {
      title: 'ICT & Data Center',
      description: 'Data center design, enterprise networks, systems, cybersecurity, and consultancy.',
      cta: 'Explore',
      tag: 'ICT'
    },
    items: [
      { label: 'Data Center Design & Build', page: 'ict_datacenter_data_center_design' as PageID, category: 'ICT', path: '/ict-datacenter/data-center-design' },
      { label: 'Enterprise Networking, Storage & Backup', page: 'ict_datacenter_enterprise_networking' as PageID, category: 'ICT', path: '/ict-datacenter/enterprise-networking' },
      { label: 'System Development & Consultancy', page: 'ict_datacenter_system_development' as PageID, category: 'ICT', path: '/ict-datacenter/system-development' },
      { label: 'Cybersecurity & Managed Services', page: 'ict_datacenter_cybersecurity_managed' as PageID, category: 'ICT', path: '/ict-datacenter/cybersecurity-managed' },
      { label: 'Training & ICT Consultancy', page: 'ict_datacenter_training_consultancy' as PageID, category: 'ICT', path: '/ict-datacenter/training-consultancy' }
    ]
  },
  {
    label: 'Power',
    page: 'power' as PageID,
    path: '/power',
    icon: Zap,
    overview: {
      title: 'Power',
      description: 'Transmission, distribution, minigrids, backup power and building electromechanical works.',
      cta: 'Explore',
      tag: 'Power'
    },
    items: [
      { label: 'Transmission, Distribution & Substation', page: 'power_transmission_distribution' as PageID, category: 'Power', path: '/power/transmission-distribution' },
      { label: 'Minigrid Systems', page: 'power_minigrid_systems' as PageID, category: 'Power', path: '/power/minigrid-systems' },
      { label: 'Backup Power Systems (DG, Solar & Hybrid)', page: 'power_backup_power' as PageID, category: 'Power', path: '/power/backup-power' },
      { label: 'Building Electromechanical Works', page: 'power_building_electromechanical' as PageID, category: 'Power', path: '/power/building-electromechanical' }
    ]
  },
  {
    label: 'Academy',
    page: 'academy' as PageID,
    path: '/academy',
    icon: GraduationCap,
    overview: {
      title: 'Academy',
      description: 'Training, certification, and professional development programs.',
      cta: 'Explore',
      tag: 'Academy'
    },
    items: [
      { label: 'Academy Overview', page: 'academy_overview' as PageID, category: 'Academy', path: '/academy/overview' },
      { label: 'Fiber Optics Certification (CFOT / CFOS)', page: 'academy_fiber_optics_certification' as PageID, category: 'Academy', path: '/academy/fiber-optics-certification' },
      { label: 'Telecom & Industrial Automation Training', page: 'academy_telecom_automation_training' as PageID, category: 'Academy', path: '/academy/telecom-automation-training' },
      { label: 'Institutional Partnerships', page: 'academy_institutional_partnerships' as PageID, category: 'Academy', path: '/academy/institutional-partnerships' }
    ]
  },
  {
    label: 'MSP',
    page: 'msp' as PageID,
    path: '/msp',
    icon: Wrench,
    overview: {
      title: 'Managed Services',
      description: 'Ongoing IT and infrastructure managed services.',
      cta: 'Explore',
      tag: 'MSP'
    },
    items: [
      { label: 'Managed Services Overview', page: 'msp_overview' as PageID, category: 'MSP', path: '/msp/overview' },
      { label: 'Network Operations Center (NOC)', page: 'msp_noc' as PageID, category: 'MSP', path: '/msp/noc-services' },
      { label: 'Infrastructure Management', page: 'msp_infrastructure' as PageID, category: 'MSP', path: '/msp/infrastructure' },
      { label: 'Managed Cybersecurity', page: 'msp_cybersecurity' as PageID, category: 'MSP', path: '/msp/cybersecurity' }
    ]
  }
];

export const ISO_DATA = [
  { id: "9001", title: "iso.9001.title", description: "iso.9001.description" },
  { id: "45001", title: "iso.45001.title", description: "iso.45001.description" },
  { id: "27001", title: "iso.27001.title", description: "iso.27001.description" }
];
