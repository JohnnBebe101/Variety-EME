import {
  Radio,
  Server,
  Zap,
  GraduationCap,
  Wrench,
} from 'lucide-react';
import { PageID } from '../types';

export const NAV_CONFIG = [
  {
    label: 'Telecom',
    page: 'telecommunications' as PageID,
    path: '/telecommunications',
    icon: Radio,
    overview: {
      title: 'Telecom',
      description: 'Mobile rollout, fiber optics, towers, O&M, and warehouse management.',
      cta: 'Explore',
      tag: 'Telecom'
    },
    items: [
      { label: 'Mobile Telecom Rollout (RAN + Power)', page: 'telecommunications_mobile_rollout' as PageID, category: 'Telecommunications', path: '/telecommunications/mobile-rollout' },
      { label: 'Fiber Optics', page: 'telecommunications_fiber_optics' as PageID, category: 'Telecommunications', path: '/telecommunications/fiber-optics' },
      { label: 'Tower & Civil Works', page: 'telecommunications_tower_civil_works' as PageID, category: 'Telecommunications', path: '/telecommunications/tower-civil-works' },
      { label: 'Operations & Maintenance (O&M)', page: 'telecommunications_operations_maintenance' as PageID, category: 'Telecommunications', path: '/telecommunications/operations-maintenance' },
      { label: 'Warehouse Management', page: 'telecommunications_warehouse_management' as PageID, category: 'Telecommunications', path: '/telecommunications/warehouse-management' }
    ]
  },
  {
    label: 'ICT',
    page: 'ict_datacenter' as PageID,
    path: '/ict-datacenter',
    icon: Server,
    overview: {
      title: 'ICT & Data Center',
      description: 'Data center design, enterprise networks, systems, cybersecurity, and consultancy.',
      cta: 'Explore',
      tag: 'ICT'
    },
    items: [
      { label: 'Data Center Design & Build', page: 'ict_datacenter_data_center_design' as PageID, category: 'ICT', path: '/ict-datacenter/data-center-design' },
      { label: 'Enterprise Networking, Storage & Backup', page: 'ict_datacenter_enterprise_networking' as PageID, category: 'ICT', path: '/ict-datacenter/enterprise-networking' },
      { label: 'System Development & Consultancy', page: 'ict_datacenter_system_development' as PageID, category: 'ICT', path: '/ict-datacenter/system-development' },
      { label: 'Cybersecurity & Managed Services', page: 'ict_datacenter_cybersecurity_managed' as PageID, category: 'ICT', path: '/ict-datacenter/cybersecurity-managed' },
      { label: 'Training & ICT Consultancy', page: 'ict_datacenter_training_consultancy' as PageID, category: 'ICT', path: '/ict-datacenter/training-consultancy' }
    ]
  },
  {
    label: 'Power',
    page: 'power' as PageID,
    path: '/power',
    icon: Zap,
    overview: {
      title: 'Power',
      description: 'Transmission, distribution, minigrids, backup power and building electromechanical works.',
      cta: 'Explore',
      tag: 'Power'
    },
    items: [
      { label: 'Transmission, Distribution & Substation', page: 'power_transmission_distribution' as PageID, category: 'Power', path: '/power/transmission-distribution' },
      { label: 'Minigrid Systems', page: 'power_minigrid_systems' as PageID, category: 'Power', path: '/power/minigrid-systems' },
      { label: 'Backup Power Systems (DG, Solar & Hybrid)', page: 'power_backup_power' as PageID, category: 'Power', path: '/power/backup-power' },
      { label: 'Building Electromechanical Works', page: 'power_building_electromechanical' as PageID, category: 'Power', path: '/power/building-electromechanical' }
    ]
  },
  {
    label: 'MSP',
    page: 'msp' as PageID,
    path: '/msp',
    icon: Wrench,
    overview: {
      title: 'Managed Services',
      description: 'Ongoing IT and infrastructure managed services.',
      cta: 'Explore',
      tag: 'MSP'
    },
    items: [
      { label: 'Managed Services Overview', page: 'msp_overview' as PageID, category: 'MSP', path: '/msp/overview' },
      { label: 'Network Operations Center (NOC)', page: 'msp_noc' as PageID, category: 'MSP', path: '/msp/noc-services' },
      { label: 'Infrastructure Management', page: 'msp_infrastructure' as PageID, category: 'MSP', path: '/msp/infrastructure' },
      { label: 'Managed Cybersecurity', page: 'msp_cybersecurity' as PageID, category: 'MSP', path: '/msp/cybersecurity' },
      { label: 'ICT & Connectivity', page: 'msp_ict_connectivity' as PageID, category: 'MSP', path: '/msp/ict-connectivity' },
      { label: 'Security & Access Control', page: 'msp_security_access' as PageID, category: 'MSP', path: '/msp/security-access' },
      { label: 'Fire Safety & Protection', page: 'msp_fire_safety' as PageID, category: 'MSP', path: '/msp/fire-safety' },
      { label: 'HVAC & Environmental Control', page: 'msp_hvac' as PageID, category: 'MSP', path: '/msp/hvac' },
      { label: 'Power & Energy Solutions', page: 'msp_power_energy' as PageID, category: 'MSP', path: '/msp/power-energy' }
    ]
  },
  {
    label: 'Training',
    page: 'academy' as PageID,
    path: '/academy',
    icon: GraduationCap,
    overview: {
      title: 'Training',
      description: 'Training, certification, and professional development programs.',
      cta: 'Explore',
      tag: 'Training'
    },
    items: [
      { label: 'Training Overview', page: 'academy_overview' as PageID, category: 'Training', path: '/academy/overview' },
      { label: 'Fiber Optics Certification (CFOT / CFOS)', page: 'academy_fiber_optics_certification' as PageID, category: 'Training', path: '/academy/fiber-optics-certification' },
      { label: 'Telecom & Industrial Automation Training', page: 'academy_telecom_automation_training' as PageID, category: 'Training', path: '/academy/telecom-automation-training' },
      { label: 'Institutional Partnerships', page: 'academy_institutional_partnerships' as PageID, category: 'Training', path: '/academy/institutional-partnerships' }
    ]
  }
];
