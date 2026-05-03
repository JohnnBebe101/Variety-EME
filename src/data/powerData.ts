import { Zap, Sun, Battery, Building2, LucideIcon } from 'lucide-react';

export const powerServices: { id: number; title: string; description: string; icon: LucideIcon; path: string; page: string }[] = [
  {
    id: 1,
    title: "Transmission, Distribution & Substation",
    description: "High-voltage transmission tower erection, distribution line construction, substation installation, and commissioning.",
    icon: Zap,
    page: "power_transmission_distribution",
    path: "/power/transmission-distribution",
  },
  {
    id: 2,
    title: "Minigrid Systems",
    description: "Rural minigrid design and deployment, integrating solar, diesel, and hybrid generation for off-grid communities.",
    icon: Sun,
    page: "power_minigrid_systems",
    path: "/power/minigrid",
  },
  {
    id: 3,
    title: "Backup Power Systems (DG, Solar & Hybrid)",
    description: "Diesel generator, solar PV, and hybrid backup power systems for telecom sites, enterprises, and public institutions.",
    icon: Battery,
    page: "power_backup_power",
    path: "/power/backup-power",
  },
  {
    id: 4,
    title: "Building Electromechanical Works",
    description: "Factory and building electrical installations, elevators and escalators (via VTS subsidiary), and electromechanical fit-out.",
    icon: Building2,
    page: "power_building_electromechanical",
    path: "/power/electromechanical",
  },
];

export const powerProjects = [
  {
    id: 1,
    title: "400KV Transmission Towers",
    stat: "Foundation and erection of high-voltage towers",
    client: "KEC International",
    category: "Transmission",
    image: "/assets/images/portfolio/400-kv-tower.webp",
  },
  {
    id: 2,
    title: "EEPCO Rural Electrification",
    stat: "67 towns across 3 projects (28, 10 & 29 towns)",
    client: "EEPCO",
    category: "Distribution",
    image: "/assets/images/portfolio/rural-electrification.webp",
  },
  {
    id: 3,
    title: "Telecom Power Framework",
    stat: "Multi-site power systems for telecom infrastructure",
    client: "ESCO",
    category: "Backup Power",
    image: "/assets/images/portfolio/safaricom-rollout.webp",
  },
];

export const powerHero = {
  eyebrow: "Power & Electromechanical",
  pageTitle: "Transmission, Distribution & Backup Power",
  pageSubtitle: "From high-voltage transmission and rural electrification to solar hybrid minigrids and building electromechanical works. Turnkey power delivery across Ethiopia.",
  gradientFallback: "from-yellow-900/10 to-gray-900/10",
  heroImage: "power-solar.webp",
  heroImageMobile: "power-solar-640.webp",
  heroImageTablet: "power-solar-1024.webp",
  heroAlt: "Power transmission towers and solar systems",
  icon: Zap,
};