import { Wrench, Monitor, Server, ShieldCheck, LucideIcon } from 'lucide-react';

export const mspServices: { id: number; title: string; description: string; icon: LucideIcon; path: string; page: string }[] = [
  {
    id: 1,
    title: "Managed Services",
    description: "Ongoing IT and infrastructure managed services: monitoring, maintenance, technical support, and operations consultancy.",
    icon: Wrench,
    page: "msp_overview",
    path: "/msp/overview",
  },
  {
    id: 2,
    title: "Network Operations Center (NOC)",
    description: "24/7 proactive monitoring and management of your network infrastructure from our dedicated NOC.",
    icon: Monitor,
    page: "msp_noc",
    path: "/msp/noc-services",
  },
  {
    id: 3,
    title: "Infrastructure Management",
    description: "Comprehensive management of servers, storage, and network devices with SLA-backed support.",
    icon: Server,
    page: "msp_infrastructure",
    path: "/msp/infrastructure",
  },
  {
    id: 4,
    title: "Managed Cybersecurity",
    description: "Continuous security monitoring, threat detection, incident response, and compliance management.",
    icon: ShieldCheck,
    page: "msp_cybersecurity",
    path: "/msp/cybersecurity",
  },
];

export const mspProjects = [
  {
    id: 1,
    title: "Clinton Foundation LAN Work",
    stat: "Enterprise LAN deployment and support",
    client: "Clinton Foundation",
    category: "Managed Services",
    image: "/assets/images/portfolio/clinton-global-initiative.webp",
  },
  {
    id: 2,
    title: "CSA Systems Support",
    stat: "Ongoing ICT support and administration",
    client: "Central Statistical Agency (CSA)",
    category: "Managed Services",
    image: "/assets/images/portfolio/Academy-practical-class.webp",
  },
];

export const mspHero = {
  eyebrows: "Managed Services",
  pageTitle: "Managed ICT Services",
  pageSubtitle: "Ongoing IT and infrastructure managed services that keep your systems running at peak performance with proactive monitoring and expert support.",
  gradientFallback: "from-green-900/10 to-gray-900/10",
  heroImage: "/assets/images/hero/hero-msp.webp",
  heroImageMobile: "/assets/images/hero/hero-msp-640.webp",
  heroImageTablet: "/assets/images/hero/hero-msp-1024.webp",
  heroAlt: "Managed services operations",
  icon: Wrench,
};