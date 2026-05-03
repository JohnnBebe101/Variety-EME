import { GraduationCap, Globe2, Cpu, Users, LucideIcon } from 'lucide-react';

export const academyServices: { id: number; title: string; description: string; icon: LucideIcon; path: string; page: string }[] = [
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
    path: "/academy/fiber-optics-certification",
  },
  {
    id: 3,
    title: "Telecom & Industrial Automation Training",
    description: "Hands-on training in telecom systems, network operations, and industrial automation for enterprise and government clients.",
    icon: Cpu,
    page: "academy_telecom_automation_training",
    path: "/academy/telecom-automation-training",
  },
  {
    id: 4,
    title: "Institutional Partnerships",
    description: "Partnerships with universities, training institutions, and industry bodies for curriculum development and certification programs.",
    icon: Users,
    page: "academy_institutional_partnerships",
    path: "/academy/institutional-partnerships",
  },
];

export const academyProjects = [
  {
    id: 1,
    title: "Ethiopian Telecom Authority Training",
    stat: "Fiber optics certification program",
    client: "Ethiopian Telecom Authority",
    category: "Academy",
    image: "/assets/images/portfolio/Academy-practical-class.webp",
  },
  {
    id: 2,
    title: "Addis Ababa University ICT Curriculum",
    stat: "Industry-aligned ICT training curriculum",
    client: "Addis Ababa University",
    category: "Academy",
    image: "/assets/images/portfolio/entoto-tvet-1.webp",
  },
  {
    id: 3,
    title: "Kenya Powerlineman Certification",
    stat: "Power line technician certification",
    client: "Kenya Power",
    category: "Academy",
    image: "/assets/images/portfolio/400-kv-tower.webp",
  },
];

export const academyHero = {
  eyebrow: "Training",
  pageTitle: "Training & Professional Development",
  pageSubtitle: "Industry-certified training programs in fiber optics, telecom, and industrial automation that build the expertise your team needs.",
  gradientFallback: "from-blue-900/10 to-gray-900/10",
  heroImage: "/assets/images/hero/hero-academy.webp",
  heroImageMobile: "/assets/images/hero/hero-academy-640.webp",
  heroImageTablet: "/assets/images/hero/hero-academy-1024.webp",
  heroAlt: "Professional training and certification programs",
  icon: GraduationCap,
};