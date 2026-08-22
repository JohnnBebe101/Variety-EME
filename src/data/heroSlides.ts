// src/data/heroSlides.ts
// Authoritative source: Variety-EME-Company-Profile.pdf
// All copy is final and approved — do NOT paraphrase

import { LucideIcon, Sparkles, Signal, Zap, Server, GraduationCap, Briefcase } from 'lucide-react';

export interface HeroSlide {
  id: number;
  chapter: string;
  image: string;
  category: 'telecom' | 'power' | 'ict' | 'academy';
  fallbackGradient: string;
  caption: string;
  eyebrow: {
    icon: LucideIcon;
    text: string;
  };
  headline: {
    line1: { text: string; color: string };
    line2: { text: string; color: string };
    line3?: { text: string; color: string };
  };
  subtitle: string;
  proofChips: string[];
  proofChipsLabel?: string;
  cta: {
    primary: { label: string; action: 'scroll' | 'link'; target: string };
    secondary: { label: string; action: 'link'; target: string };
    tertiary?: { label: string; action: 'link'; target: string; subject?: string };
  };
  // New fields for reconstructed first slide
  mainHeading?: {
    line1: { text: string; color: string };
    line2?: { text: string; color: string };
    line3?: { text: string; color: string };
  };
  subheading?: string;
  primaryButtons?: Array<{ label: string; action: 'link' | 'scroll'; target: string }>;
  secondaryButtons?: Array<{ label: string; action: 'link' | 'scroll'; target: string }>;
}

export const heroSlides: HeroSlide[] = [
  {
  id: 1,
  chapter: "Identity",
  category: 'telecom',
  image: "/assets/images/hero/hero-overview.webp",
  fallbackGradient: "from-slate-900 via-slate-800 to-slate-950",
  caption: "Variety ElectroMechanical Engineering · Addis Ababa, Ethiopia",
  eyebrow: {
    icon: Sparkles,
    text: "Ethiopia · East Africa · Since 2004",
  },
  headline: {
    line1: { text: "We provide the best Industrial Services worldwide", color: "text-white" },
    line2: { text: "", color: "" },
  },
  subtitle:
    "Ethiopia's leading multidisciplinary engineering and ICT partner. " +
    "Delivering integrated power, telecom and digital infrastructure " +
    "since October 2004.",
  proofChips: [
    "5× ISO Certified",
    "20+ Years Experience",
    "Govt · NGO · Enterprise",
  ],
  cta: {
    primary: { label: "About us", action: "link", target: "/about" },
    secondary: { label: "Explore", action: "scroll", target: "#capabilities" },
    tertiary: { label: "Portfolio", action: "link", target: "/portfolio" },
  },
  mainHeading: {
    line1: { text: "We provide the best Industrial Services worldwide", color: "text-white" },
  },
  subheading:
    "Ethiopia's leading multidisciplinary engineering and ICT partner. " +
    "Delivering integrated power, telecom and digital infrastructure " +
    "since October 2004.",
  primaryButtons: [
    { label: "Telecommunications", action: "link", target: "/telecommunications" },
    { label: "ICT", action: "link", target: "/ict-datacenter" },
    { label: "Power", action: "link", target: "/power" },
    { label: "MSP", action: "link", target: "/msp" },
    { label: "Training", action: "link", target: "/academy" },
  ],
  secondaryButtons: [
    { label: "ISO Certified", action: "link", target: "/iso" },
    { label: "20+ Years Experience", action: "link", target: "/about" },
  ],
},
  {
    id: 2,
    chapter: "Telecom Proof",
    category: 'telecom',
    image: "/assets/images/hero/hero-telecom.webp",
    fallbackGradient: "from-blue-900 via-blue-800 to-slate-900",
    caption: "Optical Transmission · 66 Stations · Addis Ababa–Mekele Route",
    eyebrow: {
      icon: Signal,
      text: "Telecommunications Engineering",
    },
    headline: {
      line1: { text: "66 Stations", color: "text-white" },
      line2: { text: "3 Routes", color: "text-white" },
      line3: { text: "One Team", color: "text-brand-accent" },
    },
    subtitle:
      "From optical transmission networks spanning Addis Ababa to Mekele, " +
      "Gonder and Sululta to nationwide tower rollouts for Ethio Telecom " +
      "and Nokia. Wireless, fiber, microwave and RAN delivered end-to-end.",
    proofChips: ["Ethio Telecom", "Nokia", "Ericsson", "ZTE", "Safaricom"],
    proofChipsLabel: "Telecom Clients",
    cta: {
      primary: { label: "View Telecom Services", action: "link", target: "/telecommunications" },
      secondary: { label: "See Portfolio", action: "link", target: "/portfolio" },
    },
  },
  {
    id: 3,
    chapter: "Power & Reach",
    category: 'power',
    image: "/assets/images/hero/hero-power.webp",
    fallbackGradient: "from-yellow-900 via-orange-900 to-gray-900",
    caption: "Rural Electrification · 67 Towns · Three EEPCO Projects",
    eyebrow: {
      icon: Zap,
      text: "Power & Electromechanical Engineering",
    },
    headline: {
      line1: { text: "67 Towns", color: "text-white" },
      line2: { text: "Powered", color: "text-brand-accent" },
      line3: { text: "Turnkey", color: "text-white" },
    },
    subtitle:
      "Three EEPCO rural electrification projects across Ethiopia. " +
      "Survey, poles, stringing, transformer work and commissioning. " +
      "From 400KV transmission towers to solar hybrid minigrids, " +
      "we deliver power where it matters most.",
    proofChips: ["KEC International", "EEPCO", "ESCO"],
    proofChipsLabel: "Power Clients",
    cta: {
      primary: { label: "View Power Services", action: "link", target: "/power" },
      secondary: { label: "View Portfolio", action: "link", target: "/portfolio" },
    },
  },
  {
    id: 4,
    chapter: "Why Variety EME",
    category: 'ict',
    image: "/assets/images/hero/hero-ict.webp",
    fallbackGradient: "from-cyan-900 via-teal-900 to-gray-900",
    caption: "Data Center · Enterprise ICT · Managed Services · Addis Ababa",
    eyebrow: {
      icon: Server,
      text: "ICT · Data Center · Managed Services",
    },
    headline: {
      line1: { text: "One Partner", color: "text-white" },
      line2: { text: "Every Layer", color: "text-brand-accent" },
      line3: { text: "Zero Compromises", color: "text-white" },
    },
    subtitle:
      "Power, telecom and ICT under one roof. No siloed vendors, " +
      "no coordination gaps. From MoFED regional data centers to " +
      "500-node campus networks, Variety EME delivers the full stack, " +
      "turnkey, safety-led and on time.",
    proofChips: ["MoFED", "Huawei", "OXFAM", "Clinton Foundation", "UN"],
    proofChipsLabel: "ICT & MSP Clients",
    cta: {
      primary: { label: "Start a Conversation", action: "link", target: "/contact" },
      secondary: { label: "View ICT Services", action: "link", target: "/ict-datacenter" },
    },
  },
  {
    id: 5,
    chapter: "Growing the Next Generation",
    category: 'academy',
    image: "/assets/images/hero/hero-msp.webp",
    fallbackGradient: "from-emerald-900 via-green-900 to-slate-900",
    caption: "Academy · CFOT/CFOS Certification · Managed Services",
    eyebrow: {
      icon: GraduationCap,
      text: "Academy & Managed Services",
    },
    headline: {
      line1: { text: "Certified", color: "text-white" },
      line2: { text: "Skilled", color: "text-brand-accent" },
      line3: { text: "Future-Ready", color: "text-white" },
    },
    subtitle:
      "Fiber optics certification (CFOT/CFOS), telecom and industrial " +
      "automation training combined with managed ICT services that " +
      "keep your infrastructure running at peak performance.",
    proofChips: [
      "CFOT / CFOS Certified",
      "Telecom Training",
      "Industrial Automation",
      "Managed Services",
    ],
    proofChipsLabel: "Academy & MSP",
    cta: {
      primary: { label: "View MSP & Academy", action: "link", target: "/academy" },
      secondary: { label: "Discuss Your Needs", action: "link", target: "/contact" },
    },
  },
  {
    id: 6,
    chapter: "Professional Training",
    category: 'academy',
    image: "/assets/images/hero/hero-academy.webp",
    fallbackGradient: "from-indigo-900 via-purple-900 to-slate-900",
    caption: "Academy · CFOT/CFOS Certification · Industrial Training",
    eyebrow: {
      icon: GraduationCap,
      text: "Training & Professional Development",
    },
    headline: {
      line1: { text: "Certified", color: "text-white" },
      line2: { text: "Excellence", color: "text-brand-accent" },
      line3: { text: "Industry-Ready", color: "text-white" },
    },
    subtitle:
      "Industry-recognized fiber optics certification (CFOT/CFOS) aligned with " +
      "ETA International standards. Combined with telecom and industrial automation " +
      "training that builds expertise your team needs.",
    proofChips: [
      "CFOT / CFOS Certified",
      "ETA International",
      "Industry Partners",
    ],
    proofChipsLabel: "Academy Programs",
    cta: {
      primary: { label: "Explore Academy", action: "link", target: "/academy" },
      secondary: { label: "Contact Training Team", action: "link", target: "/contact" },
    },
  },
];