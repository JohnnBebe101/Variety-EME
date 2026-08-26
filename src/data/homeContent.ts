import React from 'react';
import {
  Radio,
  Server,
  Zap,
  GraduationCap,
  Wrench,
  Shield,
  Cpu,
  Headphones,
  Truck,
  Globe
} from 'lucide-react';
import { PageID } from '../types';

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
  },
  {
    title: 'Managed Services',
    description: 'NOC operations, infrastructure management, cybersecurity, HVAC, fire safety, and access control.',
    image: '/assets/images/hero/msp.webp',
    path: '/msp',
    page: 'msp',
    icon: Wrench
  },
  {
    title: 'Academy & Training',
    description: 'Fiber optics certification (CFOT/CFOS), industrial automation training, and professional development.',
    image: '/assets/images/hero/hero-academy.webp',
    path: '/academy',
    page: 'academy',
    icon: GraduationCap
  },
  {
    title: 'Fiber Optics',
    description: 'Fiber optic cable installation, fusion splicing, OTDR testing, and end-to-end network deployment.',
    image: '/assets/images/hero/hero-telecom.webp',
    path: '/telecommunications/fiber-optics',
    page: 'telecommunications_fiber_optics',
    icon: Globe
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
