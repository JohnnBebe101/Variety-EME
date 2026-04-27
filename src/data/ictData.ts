import { Server, Globe2, Code, ShieldCheck, LucideIcon } from 'lucide-react';

export const ictServices: { id: number; title: string; description: string; icon: LucideIcon; path: string; page: string }[] = [
  {
    id: 1,
    title: "Data Center Design & Build",
    description: "Turnkey data center projects from site assessment and design through to build, commissioning, and handover.",
    icon: Server,
    page: "ict_datacenter_data_center_design",
    path: "/ict-datacenter/data-center-design",
  },
  {
    id: 2,
    title: "Enterprise Networking, Storage & Backup",
    description: "LAN/WAN design, structured cabling, network switches and routing, NAS/SAN storage, and disaster recovery systems.",
    icon: Globe2,
    page: "ict_datacenter_enterprise_networking",
    path: "/ict-datacenter/enterprise-networking",
  },
  {
    id: 3,
    title: "System Development & Consultancy",
    description: "Custom software development, website development, ICT consultancy, and system administration support.",
    icon: Code,
    page: "ict_datacenter_system_development",
    path: "/ict-datacenter/system-development",
  },
  {
    id: 4,
    title: "Cybersecurity & Managed Services",
    description: "Security assessments, managed IT services, system monitoring, and ongoing technical support for enterprise clients.",
    icon: ShieldCheck,
    page: "ict_datacenter_cybersecurity_managed",
    path: "/ict-datacenter/cybersecurity",
  },
];

export const ictProjects = [
  {
    id: 1,
    title: "MoFED Regional Data Centers",
    stat: "Multi-region data center design and build",
    client: "Ministry of Finance & Economic Development",
    category: "Data Center",
    image: "/assets/images/portfolio/mofed-dc.webp",
  },
  {
    id: 2,
    title: "Entoto TVET Campus ICT",
    stat: "500+ nodes, 30m² data center, 12 buildings",
    client: "Huawei / AAICTDA",
    category: "Enterprise Networking",
    image: "/assets/images/portfolio/entoto-tvet-1.webp",
  },
  {
    id: 3,
    title: "OXFAM-America ICT Support",
    stat: "Full ICT infrastructure support",
    client: "OXFAM-America",
    category: "Managed Services",
    image: "/assets/images/portfolio/ethio-telecom-tower-rollout.webp",
  },
];

export const ictHero = {
  eyebrow: "ICT & Data Center",
  pageTitle: "Digital Infrastructure & Managed ICT",
  pageSubtitle: "Data center design and build, enterprise networking, cybersecurity, and system development — delivered as a single integrated solution.",
  gradientFallback: "from-gray-900 to-cyan-900",
  heroImage: "/assets/images/hero/ict.webp",
  heroAlt: "Data center and enterprise networking infrastructure",
  icon: Server,
};