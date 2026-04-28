import { GraduationCap, Globe2, Cpu, Wrench, LucideIcon } from 'lucide-react';

export const mspServices: { id: number; title: string; description: string; icon: LucideIcon; path: string; page: string }[] = [
  {
    id: 1,
    title: "Academy Overview",
    description: "Structured professional development programs for engineers and technicians in telecom, power, and ICT disciplines.",
    icon: GraduationCap,
    page: "academy_overview",
    path: "/academy/overview",
  },
  {
    id: 2,
    title: "Fiber Optics Certification (CFOT / CFOS)",
    description: "Industry-recognized fiber optic technician and specialist certifications aligned with ETA International standards.",
    icon: Globe2,
    page: "academy_fiber_optics_certification",
    path: "/academy/fiber-certification",
  },
  {
    id: 3,
    title: "Telecom & Industrial Automation Training",
    description: "Hands-on training in telecom systems, network operations, and industrial automation for enterprise and government clients.",
    icon: Cpu,
    page: "academy_telecom_automation_training",
    path: "/academy/automation-training",
  },
  {
    id: 4,
    title: "Managed Services",
    description: "Ongoing IT and infrastructure managed services — monitoring, maintenance, technical support, and operations consultancy.",
    icon: Wrench,
    page: "academy_managed_services",
    path: "/academy/managed-services",
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
    title: "Ethiopian Sugar Corporation Consultancy",
    stat: "ICT systems consultancy and advisory",
    client: "Ethiopian Sugar Corporation",
    category: "ICT Consultancy",
    image: "/assets/images/portfolio/rural-electrification.webp",
  },
  {
    id: 3,
    title: "CSA Systems Support",
    stat: "Ongoing ICT support and administration",
    client: "Central Statistical Agency (CSA)",
    category: "Managed Services",
    image: "/assets/images/portfolio/Academy-practical-class.webp",
  },
];

export const mspHero = {
  eyebrow: "Academy & Managed Services",
  pageTitle: "Training, Certification & Managed ICT",
  pageSubtitle: "Professional training in fiber optics, telecom, and industrial automation — combined with ongoing managed services that keep your infrastructure running at peak performance.",
  gradientFallback: "from-green-900/10 to-gray-900/10",
  heroImage: "/assets/images/hero/msp.webp",
  heroAlt: "Training academy and managed services operations",
  icon: GraduationCap,
};