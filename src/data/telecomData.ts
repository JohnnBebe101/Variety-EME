import { Radio, Globe, Building2, Wrench, LucideIcon } from 'lucide-react';

export const telecomServices: { id: number; title: string; description: string; icon: LucideIcon; path: string; page: string }[] = [
  {
    id: 1,
    title: "Mobile Telecom Rollout (RAN + Power)",
    description: "Wireless network deployment including base station installation, RAN integration, and associated power systems for mobile operators.",
    icon: Radio,
    page: "telecommunications_mobile_rollout",
    path: "/telecommunications/mobile-rollout",
  },
  {
    id: 2,
    title: "Fiber Optics",
    description: "Optical transmission network design, cable laying, splicing, and commissioning across long-haul and last-mile routes.",
    icon: Globe,
    page: "telecommunications_fiber_optics",
    path: "/telecommunications/fiber-optics",
  },
  {
    id: 3,
    title: "Tower & Civil Works",
    description: "Greenfield and rooftop tower construction, foundation works, rigging, and structural installation for telecom infrastructure.",
    icon: Building2,
    page: "telecommunications_tower_civil_works",
    path: "/telecommunications/tower-civil-works",
  },
  {
    id: 4,
    title: "Operations & Maintenance (O&M)",
    description: "Ongoing field operations, preventive and corrective maintenance, technical consultancy, and network performance support.",
    icon: Wrench,
    page: "telecommunications_operations_maintenance",
    path: "/telecommunications/operations-maintenance",
  },
];

export const telecomProjects = [
  {
    id: 1,
    title: "Optical Transmission Network",
    stat: "66 stations across 3 routes",
    client: "Huawei / AAICTDA",
    category: "Fiber Optics",
    image: "/assets/images/portfolio/optical-tansmission-network.webp",
  },
  {
    id: 2,
    title: "Ethio Telecom Tower Rollout",
    stat: "Nationwide tower deployment & commissioning",
    client: "Ethio Telecom / Nokia",
    category: "Tower & Civil",
    image: "/assets/images/portfolio/ethio-telecom-tower-rollout.webp",
  },
  {
    id: 3,
    title: "Safaricom Network Rollout Support",
    stat: "Multi-site rollout support",
    client: "Safaricom / ESCO",
    category: "RAN Rollout",
    image: "/assets/images/portfolio/safaricom-rollout.webp",
  },
];

export const telecomHero = {
  eyebrow: "Telecommunications",
  pageTitle: "Wireless, Fiber & Tower Engineering",
  pageSubtitle: "End-to-end telecom rollout. From tower civil works and RAN deployment to fiber optics and operations and maintenance across Ethiopia.",
  gradientFallback: "from-slate-900/10 to-blue-900/10",
  heroImage: "/assets/images/hero/telecom.webp",
  heroAlt: "Telecom tower and fiber infrastructure",
  icon: Radio,
};