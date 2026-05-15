import { Wifi, Shield, Flame, Thermometer, Zap, LucideIcon } from 'lucide-react';

export interface MSPService {
  title: string;
  description: string;
}

export interface MSPVertical {
  id: number;
  title: string;
  emoji: string;
  icon: LucideIcon;
  color: string;
  borderColor: string;
  description: string;
  services: MSPService[];
  path: string;
  page: string;
}

export const mspVerticals: MSPVertical[] = [
  {
    id: 1,
    title: "ICT & Connectivity",
    emoji: "📡",
    icon: Wifi,
    color: "text-blue-400",
    borderColor: "border-blue-500/30",
    description: "Enterprise-grade networking and connectivity solutions for seamless operations.",
    services: [
      { 
        title: "Access Points & Networking", 
        description: "Deployment of high-speed enterprise Wi-Fi and robust LAN/WAN architectures to ensure seamless coverage across facilities of any size."
      },
      { 
        title: "Structured Cabling", 
        description: "Professional fiber and copper installation for high-bandwidth data transmission, meeting international standards."
      },
      { 
        title: "Managed Support", 
        description: "Remote monitoring of network traffic and hardware health with proactive issue resolution."
      },
    ],
    path: "/msp/ict-connectivity",
    page: "msp_ict_connectivity",
  },
  {
    id: 2,
    title: "Security & Access Control",
    emoji: "🛡️",
    icon: Shield,
    color: "text-red-400",
    borderColor: "border-red-500/30",
    description: "Advanced surveillance and access management systems for facility security.",
    services: [
      { 
        title: "Smart CCTV Surveillance", 
        description: "IP-based high-definition video monitoring with AI-driven threat detection and remote cloud storage integration."
      },
      { 
        title: "Biometric Access Control", 
        description: "Management of secure entry points using facial recognition, RFID, and keypad systems to regulate facility flow."
      },
    ],
    path: "/msp/security-access",
    page: "msp_security_access",
  },
  {
    id: 3,
    title: "Fire Safety & Protection",
    emoji: "🔥",
    icon: Flame,
    color: "text-orange-400",
    borderColor: "border-orange-500/30",
    description: "Intelligent fire detection and suppression systems with compliance monitoring.",
    services: [
      { 
        title: "Detection & Suppression", 
        description: "Installation of smart smoke sensors, fire alarms, and automated gas/water suppression systems for rapid response."
      },
      { 
        title: "Compliance Monitoring", 
        description: "Regular system testing and gap analysis to meet local and international safety codes and regulations."
      },
    ],
    path: "/msp/fire-safety",
    page: "msp_fire_safety",
  },
  {
    id: 4,
    title: "HVAC & Environmental Control",
    emoji: "❄️",
    icon: Thermometer,
    color: "text-cyan-400",
    borderColor: "border-cyan-500/30",
    description: "Centralized climate management and building automation integration.",
    services: [
      { 
        title: "Climate Management", 
        description: "Centralized management of heating, ventilation, and air conditioning to optimize comfort and energy use."
      },
      { 
        title: "BMS Integration", 
        description: "Connecting HVAC to a Building Management System for real-time efficiency tracking and automated optimization."
      },
    ],
    path: "/msp/hvac",
    page: "msp_hvac",
  },
  {
    id: 5,
    title: "Power & Energy Solutions",
    emoji: "⚡",
    icon: Zap,
    color: "text-yellow-400",
    borderColor: "border-yellow-500/30",
    description: "Uninterrupted power backup and energy consumption optimization.",
    services: [
      { 
        title: "Uninterrupted Power (UPS)", 
        description: "Backup power solutions for critical data centers and server rooms to prevent data loss during outages."
      },
      { 
        title: "Energy Management", 
        description: "Monitoring power consumption patterns to reduce operational costs and environmental impact."
      },
    ],
    path: "/msp/power-energy",
    page: "msp_power_energy",
  },
];

export const mspProjects = [
  {
    id: 1,
    title: "Clinton Foundation LAN Work",
    stat: "Enterprise LAN deployment and support",
    client: "Clinton Foundation",
    category: "ICT & Connectivity",
    image: "/assets/images/portfolio/clinton-global-initiative.webp",
  },
  {
    id: 2,
    title: "CSA Systems Support",
    stat: "Ongoing ICT support and administration",
    client: "Central Statistical Agency (CSA)",
    category: "ICT & Connectivity",
    image: "/assets/images/portfolio/Academy-practical-class.webp",
  },
];

export const mspHero = {
  eyebrows: "Managed Services",
  pageTitle: "Managed Services",
  pageSubtitle: "Comprehensive facility management services spanning ICT infrastructure, security systems, fire safety, HVAC, and power solutions. One integrated partner for all your operational needs.",
  gradientFallback: "from-green-900/10 to-gray-900/10",
  heroImage: "/assets/images/hero/hero-msp.webp",
  heroImageMobile: "/assets/images/hero/hero-msp-640.webp",
  heroImageTablet: "/assets/images/hero/hero-msp-1024.webp",
  heroAlt: "Managed services operations center",
  icon: Zap,
};