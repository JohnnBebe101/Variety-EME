
import { 
  Radio, 
  Server, 
  Zap, 
  GraduationCap,
  Wrench,
  Shield,
  Cpu,
  Headphones,
  Truck
} from 'lucide-react';
import { PageID } from '../types';

export const SITE = {
  name: "Variety ElectroMechanical Engineering",
  tagline: "Bridging market gaps in the electromechanical sector with innovative and intelligent solutions",
  url: "https://varietyeme.com",
  logoText: "Variety EME",
  logoSub: "Innovative Electromechanical Solutions",
  copyright: `© ${new Date().getFullYear()} Variety ElectroMechanical Engineering`,
  contact: {
    phone: "+251 11 000 0000",
    address: "Bole Sub-city, Addis Ababa, Ethiopia",
    email: "info@varietyeme.com"
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
  { name: "NOKIA", logo: "/assets/images/partners/NOKIA.webp" },
  { name: "SAFARICOM", logo: "/assets/images/partners/Safaricom.webp" },
  { name: "UNITED NATIONS (UN)", logo: "/assets/images/partners/un.webp" },
  { name: "ETHIO TELECOM", logo: "/assets/images/partners/ethio-telecom.webp" },
  { name: "HUAWEI", logo: "/assets/images/partners/Huawei.webp" },
  { name: "ERICSSON", logo: "/assets/images/partners/ericsson.png" },
  { name: "ZTE", logo: "/assets/images/partners/zte.png" },
  { name: "ABB", logo: "/assets/images/partners/abb.png" }
];

export const STATS = [
  { value: 20, label: "stats.years", suffix: "+" },
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
  },
  {
    label: 'Training',
    page: 'academy' as PageID,
    path: '/academy',
    icon: GraduationCap,
    overview: {
      title: 'Training',
      description: 'Training, certification, and professional development programs.',
      cta: 'Explore',
      tag: 'Training'
    },
    items: [
      { label: 'Training Overview', page: 'academy_overview' as PageID, category: 'Training', path: '/academy/overview' },
      { label: 'Fiber Optics Certification (CFOT / CFOS)', page: 'academy_fiber_optics_certification' as PageID, category: 'Training', path: '/academy/fiber-optics-certification' },
      { label: 'Telecom & Industrial Automation Training', page: 'academy_telecom_automation_training' as PageID, category: 'Training', path: '/academy/telecom-automation-training' },
      { label: 'Institutional Partnerships', page: 'academy_institutional_partnerships' as PageID, category: 'Training', path: '/academy/institutional-partnerships' }
    ]
  }
];

export interface ISOEntry {
  id: string;
  standard: string;
  title: string;
  description: string;
  status: string;
}

export const ISO_DATA: ISOEntry[] = [
  { id: "9001", standard: "ISO 9001:2015", title: "Quality Management Systems", description: "Meeting statutory and stakeholder requirements.", status: "certified" },
  { id: "45001", standard: "ISO 45001:2018", title: "Occupational Health & Safety Management", description: "Zero-accident operating culture.", status: "certified" },
  { id: "27001", standard: "ISO 27001:2022", title: "Information Security Management", description: "Protecting client and operational data.", status: "certified" },
  { id: "ecovadis", standard: "EcoVadis", title: "Sustainable Supply Chain", description: "The Global Standard for Resilient, Sustainable Supply Chains.", status: "rated" }
];

export interface HomeServiceCard {
  title: string;
  description: string;
  image: string;
  path: string;
  page: PageID;
  icon: React.ComponentType<{ size?: number }>;
}

export const HOME_SERVICE_CARDS: HomeServiceCard[] = [
  {
    title: 'Telecommunications',
    description: 'Mobile rollout, fiber optics, tower construction, O&M, and warehouse management for national carriers.',
    image: '/assets/images/hero/telecom.webp',
    path: '/telecommunications',
    page: 'telecommunications',
    icon: Radio
  },
  {
    title: 'Power & Energy',
    description: 'Transmission, distribution, minigrids, backup power systems, and building electromechanical works.',
    image: '/assets/images/hero/power.webp',
    path: '/power',
    page: 'power',
    icon: Zap
  },
  {
    title: 'ICT & Data Center',
    description: 'Data center design, enterprise networks, cybersecurity, system development, and managed services.',
    image: '/assets/images/hero/data-center.webp',
    path: '/ict-datacenter',
    page: 'ict_datacenter',
    icon: Server
  }
];

export interface TestimonialData {
  quote: string;
  author: string;
  designation: string;
  avatar: string;
}

export const TESTIMONIAL_DATA: TestimonialData = {
  quote: "Variety EME delivered our national fiber backbone project ahead of schedule and within budget. Their technical expertise and commitment to quality are unmatched in the region.",
  author: "Dr. Abraham Belay",
  designation: "Former Minister of Innovation & Technology, Ethiopia",
  avatar: "/assets/images/testimonial/abraham-belay.webp"
};

export interface WhatWeOfferItem {
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number }>;
  path: string;
}

export const WHAT_WE_OFFER_ITEMS: WhatWeOfferItem[] = [
  {
    title: 'Advanced Technology',
    description: 'Cutting-edge engineering solutions leveraging the latest innovations in telecommunications, power systems, and ICT infrastructure.',
    icon: Cpu,
    path: '/ict-datacenter'
  },
  {
    title: 'Expert Engineers',
    description: 'Our team of certified professionals brings decades of experience across complex electromechanical projects in East Africa.',
    icon: Shield,
    path: '/telecommunications'
  },
  {
    title: 'Customer Support',
    description: '24/7 dedicated support with local presence, ensuring rapid response and continuous operation of critical infrastructure.',
    icon: Headphones,
    path: '/msp'
  },
  {
    title: 'Delivery On Time',
    description: 'Proven track record of on-time project delivery through disciplined project management and efficient execution methodologies.',
    icon: Truck,
    path: '/power'
  }
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    question: 'What sectors does Variety EME specialize in?',
    answer: 'We specialize in Telecommunications, Power & Energy, ICT & Data Center infrastructure, and Managed Services. Our integrated approach allows us to deliver end-to-end solutions across these sectors, from concept and design through construction, commissioning, and ongoing operations & maintenance.'
  },
  {
    question: 'Does Variety EME operate outside Ethiopia?',
    answer: 'While our headquarters and primary operations are in Addis Ababa, Ethiopia, we have executed projects across East Africa and maintain partnerships with global technology providers (Nokia, Huawei, Ericsson, ABB, etc.) that enable us to deliver international-standard solutions throughout the region.'
  },
  {
    question: 'What certifications does Variety EME hold?',
    answer: 'We are certified to ISO 9001:2015 (Quality Management), ISO 45001:2018 (Occupational Health & Safety), and ISO 27001:2022 (Information Security). We also hold an EcoVadis sustainability rating, demonstrating our commitment to responsible and sustainable business practices.'
  },
  {
    question: 'How does Variety EME ensure project quality and safety?',
    answer: 'Quality and safety are embedded in our ISO-certified management systems. We follow a rigorous Assess-Design-Build-Commission-Support methodology with independent quality audits at each phase. Our HSE programs include daily toolbox talks, incident reporting, and zero-accident targets on all sites.'
  },
  {
    question: 'Can Variety EME handle turnkey EPC projects?',
    answer: 'Yes. We provide full Engineering, Procurement, and Construction (EPC) services for telecommunications towers, fiber optic networks, power transmission/distribution, substations, data centers, and building electromechanical systems. Our in-house capabilities cover design, procurement, construction, testing, and commissioning.'
  },
  {
    question: 'What training programs does Variety EME Academy offer?',
    answer: 'Our Academy offers FOA-aligned Fiber Optics Certification (CFOT/CFOS), Telecommunications & Industrial Automation training, and customized institutional partnership programs. Courses combine theoretical instruction with hands-on practice in our dedicated training facilities.'
  }
];

export interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  path: string;
}

export const NEWS_DATA: NewsItem[] = [
  {
    id: 1,
    title: 'Variety EME Completes 400kV Transmission Line for Ethiopian Electric Power',
    excerpt: 'Successfully delivered the 285km Welaita-Sodo 400kV double-circuit transmission line project, strengthening Ethiopia\'s national grid connectivity and enabling renewable energy integration.',
    image: '/assets/images/news/transmission-line.webp',
    category: 'Power & Energy',
    date: '2026-07-15',
    readTime: '5 min read',
    path: '/news/400kv-transmission-line-complete'
  },
  {
    id: 2,
    title: 'Nokia and Variety EME Partner on 5G Rural Connectivity Initiative',
    excerpt: 'Strategic collaboration to deploy 5G fixed wireless access across 200+ rural sites in Ethiopia, bridging the digital divide for underserved communities.',
    image: '/assets/images/news/nokia-partnership.webp',
    category: 'Telecommunications',
    date: '2026-07-03',
    readTime: '4 min read',
    path: '/news/nokia-5g-rural-connectivity'
  },
  {
    id: 3,
    title: 'New Data Center Certification Program Launched at Variety EME Academy',
    excerpt: 'Industry-first certified data center operations curriculum developed with Uptime Institute, addressing critical skills gap in East Africa\'s growing digital infrastructure sector.',
    image: '/assets/images/news/academy-certification.webp',
    category: 'Training',
    date: '2026-06-22',
    readTime: '6 min read',
    path: '/news/academy-data-center-certification'
  }
];
