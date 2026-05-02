
import { LucideIcon } from 'lucide-react';

export type PageID = 
  | 'home'
  | 'telecommunications'
  | 'telecommunications_mobile_rollout'
  | 'telecommunications_fiber_optics'
  | 'telecommunications_tower_civil_works'
  | 'telecommunications_operations_maintenance'
  | 'telecommunications_warehouse_management'
  | 'ict_datacenter'
  | 'ict_datacenter_data_center_design'
  | 'ict_datacenter_enterprise_networking'
  | 'ict_datacenter_system_development'
  | 'ict_datacenter_cybersecurity_managed'
  | 'ict_datacenter_training_consultancy'
  | 'power'
  | 'power_transmission_distribution'
  | 'power_minigrid_systems'
  | 'power_backup_power'
  | 'power_building_electromechanical'
  | 'academy'
  | 'academy_overview'
  | 'academy_fiber_optics_certification'
  | 'academy_telecom_automation_training'
  | 'academy_institutional_partnerships'
  | 'msp'
  | 'msp_overview'
  | 'msp_noc'
  | 'msp_infrastructure'
  | 'msp_cybersecurity'
  | 'portfolio'
  | 'about'
  | 'contact'
  | 'identity' | 'leadership' | 'board' | 'portfolio-detailed' | 'presence'
  | 'telecom' | 'om' | 'mobile-network' | 'energy-mgmt'
  | 'ict' | 'coresite' | 'ai-iot' | 'mobility' | 'datacenters'
  | 'awards' | 'iso' | 'consultancy' | 'ehs';

export interface NavItem {
  label: string;
  page: PageID;
  category: string;
  path?: string;
}

export interface NavConfig {
  label: string;
  page?: PageID;
  path?: string;
  icon?: LucideIcon;
  overview: {
    title: string;
    description: string;
    cta: string;
    tag: string;
  };
  items: NavItem[];
}

export interface ISOData {
  id: string;
  title: string;
  description: string;
}
