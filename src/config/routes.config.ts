import { PageID } from '../types';

export interface RouteEntry {
  path: string;
  page: PageID;
  openContact?: boolean;
  prerender: boolean;
  meta: {
    title: string;
    description: string;
  };
}

/**
 * Single source of truth for all routes.
 * Used by: App.tsx (routing), prerender.ts (SSG), routes.ts (navigation helpers),
 * and constants.ts (NAV_CONFIG path resolution).
 *
 * RULE: To add a new page, add it here first. Everything else derives from this.
 */
export const ROUTES: RouteEntry[] = [
  // ── Home ──────────────────────────────────────────────────────────────
  { path: '/', page: 'home', prerender: true, meta: { title: 'Variety EME', description: 'Ethiopia\'s leading electromechanical engineering partner' } },

  // ── Telecommunications ────────────────────────────────────────────────
  { path: '/telecommunications', page: 'telecommunications', prerender: true, meta: { title: 'Telecommunications', description: 'End-to-end telecom infrastructure services' } },
  { path: '/telecommunications/mobile-rollout', page: 'telecommunications_mobile_rollout', prerender: true, meta: { title: 'Mobile Telecom Rollout (RAN + Power)', description: 'Radio Access Network deployment integrated with telecom power infrastructure as a single turnkey scope.' } },
  { path: '/telecommunications/fiber-optics', page: 'telecommunications_fiber_optics', prerender: true, meta: { title: 'Fiber Optics', description: 'Long-haul and metropolitan fiber optic network design, installation, splicing, termination, testing and commissioning.' } },
  { path: '/telecommunications/tower-civil-works', page: 'telecommunications_tower_civil_works', prerender: true, meta: { title: 'Tower & Civil Works', description: 'Greenfield tower construction, rooftop installations, tower reinforcement and civil site preparation.' } },
  { path: '/telecommunications/operations-maintenance', page: 'telecommunications_operations_maintenance', prerender: true, meta: { title: 'Operations & Maintenance (O&M)', description: 'Preventive and corrective maintenance contracts with SLA-based network support.' } },
  { path: '/telecommunications/warehouse-management', page: 'telecommunications_warehouse_management', prerender: true, meta: { title: 'Warehouse Management', description: 'Equipment receiving, inspection, inventory tracking and asset management for telecom programs.' } },

  // ── ICT & Data Center ─────────────────────────────────────────────────
  { path: '/ict-datacenter', page: 'ict_datacenter', prerender: true, meta: { title: 'ICT & Data Center', description: 'Data center design, enterprise networks, systems, cybersecurity, and consultancy.' } },
  { path: '/ict-datacenter/data-center-design', page: 'ict_datacenter_data_center_design', prerender: true, meta: { title: 'Data Center Design & Build', description: 'Data center assessment, rack and cabling infrastructure, power and cooling systems.' } },
  { path: '/ict-datacenter/enterprise-networking', page: 'ict_datacenter_enterprise_networking', prerender: true, meta: { title: 'Enterprise Networking, Storage & Backup', description: 'LAN/WAN design, structured cabling, storage and backup systems.' } },
  { path: '/ict-datacenter/system-development', page: 'ict_datacenter_system_development', prerender: true, meta: { title: 'System Development & Consultancy', description: 'System requirements analysis, software development and ICT project management.' } },
  { path: '/ict-datacenter/cybersecurity-managed', page: 'ict_datacenter_cybersecurity_managed', prerender: true, meta: { title: 'Cybersecurity & Managed Services', description: 'Information security assessments, managed services and incident response support.' } },
  { path: '/ict-datacenter/training-consultancy', page: 'ict_datacenter_training_consultancy', prerender: true, meta: { title: 'Training & ICT Consultancy', description: 'ICT training programs and consultancy services for enterprise and institutional clients.' } },

  // ── Power & Energy ────────────────────────────────────────────────────
  { path: '/power', page: 'power', prerender: true, meta: { title: 'Power & Energy', description: 'Transmission, distribution, minigrids, backup power and building electromechanical works.' } },
  { path: '/power/transmission-distribution', page: 'power_transmission_distribution', prerender: true, meta: { title: 'Transmission, Distribution & Substation', description: 'HV/MV transmission line construction, substations and distribution network rollout.' } },
  { path: '/power/minigrid-systems', page: 'power_minigrid_systems', prerender: true, meta: { title: 'Minigrid Systems', description: 'Minigrid design, hybrid power systems, grid integration and community electrification.' } },
  { path: '/power/backup-power', page: 'power_backup_power', prerender: true, meta: { title: 'Backup Power Systems (DG, Solar & Hybrid)', description: 'Diesel generator, solar PV, battery storage and UPS systems for backup power.' } },
  { path: '/power/building-electromechanical', page: 'power_building_electromechanical', prerender: true, meta: { title: 'Building Electromechanical Works', description: 'Industrial electrical installations, panel boards, earthing and lightning protection systems.' } },

  // ── Managed Services (MSP) ────────────────────────────────────────────
  { path: '/msp', page: 'msp', prerender: true, meta: { title: 'Managed ICT Services', description: 'Ongoing IT and infrastructure managed services' } },
  { path: '/msp/overview', page: 'msp_overview', prerender: true, meta: { title: 'Managed Services Overview', description: 'Managed IT and infrastructure services' } },
  { path: '/msp/noc-services', page: 'msp_noc', prerender: true, meta: { title: 'Network Operations Center', description: '24/7 NOC monitoring and management services' } },
  { path: '/msp/infrastructure', page: 'msp_infrastructure', prerender: true, meta: { title: 'Infrastructure Management', description: 'Server, storage and network device management' } },
  { path: '/msp/cybersecurity', page: 'msp_cybersecurity', prerender: true, meta: { title: 'Managed Cybersecurity', description: 'Security monitoring and incident response' } },
  { path: '/msp/ict-connectivity', page: 'msp_ict_connectivity', prerender: false, meta: { title: 'ICT & Connectivity', description: 'Enterprise networking, structured cabling, and managed support services' } },
  { path: '/msp/security-access', page: 'msp_security_access', prerender: false, meta: { title: 'Security & Access Control', description: 'Smart CCTV surveillance and biometric access control systems' } },
  { path: '/msp/fire-safety', page: 'msp_fire_safety', prerender: false, meta: { title: 'Fire Safety & Protection', description: 'Fire detection, suppression systems, and compliance monitoring' } },
  { path: '/msp/hvac', page: 'msp_hvac', prerender: false, meta: { title: 'HVAC & Environmental Control', description: 'Climate management and Building Management System integration' } },
  { path: '/msp/power-energy', page: 'msp_power_energy', prerender: false, meta: { title: 'Power & Energy Solutions', description: 'UPS backup power and energy management solutions' } },

  // ── Training Academy ──────────────────────────────────────────────────
  { path: '/academy', page: 'academy', prerender: true, meta: { title: 'Training Academy', description: 'Practitioner-led engineering and ICT training' } },
  { path: '/academy/overview', page: 'academy_overview', prerender: true, meta: { title: 'Training Overview', description: 'Practitioner-led engineering and ICT training programs' } },
  { path: '/academy/fiber-optics-certification', page: 'academy_fiber_optics_certification', prerender: true, meta: { title: 'Fiber Optics Certification (CFOT/CFOS)', description: 'FOA-aligned fiber optics certification programs for technicians and specialists.' } },
  { path: '/academy/telecom-automation-training', page: 'academy_telecom_automation_training', prerender: true, meta: { title: 'Telecom & Automation Training', description: 'Telecom and industrial automation training programs for operators and engineers.' } },
  { path: '/academy/institutional-partnerships', page: 'academy_institutional_partnerships', prerender: true, meta: { title: 'Institutional Partnerships', description: 'Corporate and institutional training partnerships' } },
  { path: '/academy/managed-services', page: 'msp_overview', prerender: false, meta: { title: 'Managed Services Training', description: 'Managed services training programs' } },

  // ── Corporate ─────────────────────────────────────────────────────────
  { path: '/portfolio', page: 'portfolio', prerender: true, meta: { title: 'Our Portfolio', description: 'Project portfolio and case studies' } },
  { path: '/about', page: 'about', prerender: true, meta: { title: 'About Us', description: 'Variety EME corporate identity and overview' } },
  { path: '/contact', page: 'contact', openContact: true, prerender: true, meta: { title: 'Contact Us', description: 'Get in touch with Variety EME' } },
  { path: '/privacy-policy', page: 'privacy_policy', prerender: false, meta: { title: 'Privacy Policy', description: 'Variety EME Privacy Policy' } },
  { path: '/terms-of-service', page: 'terms_of_service', prerender: false, meta: { title: 'Terms of Service', description: 'Variety EME Terms of Service' } },

  // ── Legacy redirects (prerender: false — kept for URL compat only) ────
  { path: '/telecom', page: 'telecommunications', prerender: false, meta: { title: 'Telecommunications', description: 'End-to-end telecom infrastructure services' } },
  { path: '/ict', page: 'ict_datacenter', prerender: false, meta: { title: 'ICT & Data Center', description: 'Data center design, enterprise networks, systems, cybersecurity, and consultancy.' } },
  { path: '/identity', page: 'about', prerender: false, meta: { title: 'About Us', description: 'Variety EME corporate identity and overview' } },
  { path: '/leadership', page: 'about', prerender: false, meta: { title: 'About Us', description: 'Variety EME leadership team' } },
  { path: '/board', page: 'about', prerender: false, meta: { title: 'About Us', description: 'Variety EME board of directors' } },
  { path: '/presence', page: 'academy_institutional_partnerships', prerender: false, meta: { title: 'Institutional Partnerships', description: 'Corporate and institutional training partnerships' } },
  { path: '/om', page: 'telecommunications_operations_maintenance', prerender: false, meta: { title: 'Operations & Maintenance', description: 'Preventive and corrective maintenance contracts.' } },
  { path: '/coresite', page: 'ict_datacenter_data_center_design', prerender: false, meta: { title: 'Data Center Design', description: 'Data center assessment and infrastructure.' } },
  { path: '/datacenters', page: 'ict_datacenter_data_center_design', prerender: false, meta: { title: 'Data Center Design', description: 'Data center assessment and infrastructure.' } },
  { path: '/ai-iot', page: 'ict_datacenter_cybersecurity_managed', prerender: false, meta: { title: 'Cybersecurity', description: 'Information security assessments.' } },
  { path: '/mobility', page: 'academy_telecom_automation_training', prerender: false, meta: { title: 'Training', description: 'Telecom and automation training.' } },
  { path: '/awards', page: 'about', prerender: false, meta: { title: 'About Us', description: 'Variety EME corporate overview.' } },
  { path: '/iso', page: 'about', prerender: false, meta: { title: 'About Us', description: 'Variety EME certifications.' } },
  { path: '/consultancy', page: 'ict_datacenter_system_development', prerender: false, meta: { title: 'System Development', description: 'System development and consultancy.' } },
  { path: '/ehs', page: 'academy_overview', prerender: false, meta: { title: 'Training Overview', description: 'Engineering and ICT training.' } },
  { path: '/portfolio-detailed', page: 'portfolio', prerender: false, meta: { title: 'Our Portfolio', description: 'Project portfolio and case studies' } },
];

// ── Derived helpers ──────────────────────────────────────────────────────

/** Routes that should be pre-rendered at build time */
export const PRERENDER_ROUTES = ROUTES.filter(r => r.prerender);

/** Path → RouteInfo lookup (replaces ROUTE_MAP in routes.ts) */
export const ROUTE_MAP: Record<string, { page: PageID; openContact?: boolean }> = Object.fromEntries(
  ROUTES.map(r => [r.path, { page: r.page, openContact: r.openContact }])
);

/** PageID → Path lookup (replaces PAGE_PATH_MAP in routes.ts) */
export const PAGE_PATH_MAP: Partial<Record<PageID, string>> = Object.fromEntries(
  ROUTES.filter(r => !r.openContact).map(r => [r.page, r.path])
);
