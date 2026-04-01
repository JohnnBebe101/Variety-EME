
import { LucideIcon } from 'lucide-react';

export type PageID = 
  | 'home' 
  | 'identity' | 'leadership' | 'board' | 'portfolio-detailed' | 'presence'
  | 'telecom' | 'power' | 'om' | 'mobile-network' | 'energy-mgmt'
  | 'ict' | 'coresite' | 'ai-iot' | 'mobility' | 'datacenters'
  | 'awards' | 'iso' | 'academy' | 'consultancy' | 'ehs';

export interface NavItem {
  label: string;
  page: PageID;
  category: string;
}

export interface NavConfig {
  label: string;
  icon: LucideIcon;
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
