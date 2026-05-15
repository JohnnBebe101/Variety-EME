import React from 'react';
import { ChevronRight, X } from 'lucide-react';

interface SidebarLink {
  label: string;
  path: string;
}

interface SidebarCategory {
  title: string;
  links: SidebarLink[];
}

interface PageSidebarProps {
  category: SidebarCategory;
  currentPath: string;
  onNavigate: (path: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const PageSidebar: React.FC<PageSidebarProps> = ({ category, currentPath, onNavigate, isOpen, onClose }) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`
        fixed lg:sticky top-0 lg:top-32 left-0 h-full lg:h-auto w-72 lg:w-60 
        bg-brand-surface lg:bg-transparent border-r lg:border-r-0 border-white/10 
        z-50 lg:z-auto transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        pt-20 lg:pt-0
      `}>
        {/* Mobile Close Button */}
        <div className="flex items-center justify-between p-4 lg:hidden border-b border-white/10">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
            {category.title}
          </span>
          <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-lg">
            <X size={20} className="text-white/60" />
          </button>
        </div>

        {/* Desktop Header */}
        <div className="hidden lg:block p-4 pb-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
            {category.title}
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="p-2 lg:p-4 space-y-1">
          {category.links.map((link, index) => {
            const isActive = currentPath === link.path;
            return (
              <button
                key={index}
                onClick={() => {
                  onNavigate(link.path);
                  onClose();
                }}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left 
                  transition-all duration-200 group
                  ${isActive 
                    ? 'bg-brand-accent/10 text-brand-accent border-l-2 border-brand-accent' 
                    : 'text-brand-muted hover:bg-white/5 hover:text-brand-foreground border-l-2 border-transparent'
                  }
                `}
              >
                <span className={`text-xs font-medium ${isActive ? 'text-brand-accent' : 'group-hover:text-white/80'}`}>
                  {link.label}
                </span>
                <ChevronRight size={14} className={`ml-auto transition-transform ${isActive ? 'rotate-90 text-brand-accent' : 'text-white/20'}`} />
              </button>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

// Sidebar Data Configuration
export const SIDEBAR_CONFIG: Record<string, SidebarCategory> = {
  telecommunications: {
    title: 'Telecommunications',
    links: [
      { label: 'Mobile Rollout (RAN + Power)', path: '/telecommunications/mobile-rollout' },
      { label: 'Fiber Optics', path: '/telecommunications/fiber-optics' },
      { label: 'Tower & Civil Works', path: '/telecommunications/tower-civil-works' },
      { label: 'Operations & Maintenance', path: '/telecommunications/operations-maintenance' },
      { label: 'Warehouse Management', path: '/telecommunications/warehouse-management' },
    ]
  },
  ict_datacenter: {
    title: 'ICT & Data Center',
    links: [
      { label: 'Data Center Design & Build', path: '/ict-datacenter/data-center-design' },
      { label: 'Enterprise Networking', path: '/ict-datacenter/enterprise-networking' },
      { label: 'System Development', path: '/ict-datacenter/system-development' },
      { label: 'Cybersecurity & Managed', path: '/ict-datacenter/cybersecurity-managed' },
      { label: 'Training & Consultancy', path: '/ict-datacenter/training-consultancy' },
    ]
  },
  power: {
    title: 'Power & Engineering',
    links: [
      { label: 'Transmission & Distribution', path: '/power/transmission-distribution' },
      { label: 'Minigrid Systems', path: '/power/minigrid-systems' },
      { label: 'Backup Power Systems', path: '/power/backup-power' },
      { label: 'Building Electromechanical', path: '/power/building-electromechanical' },
    ]
  },
  academy: {
    title: 'Training',
    links: [
      { label: 'Training Overview', path: '/academy/overview' },
      { label: 'Fiber Optics Certification', path: '/academy/fiber-optics-certification' },
      { label: 'Telecom Automation Training', path: '/academy/telecom-automation-training' },
      { label: 'Institutional Partnerships', path: '/academy/institutional-partnerships' },
    ]
  },
  msp: {
    title: 'Managed Services',
    links: [
      { label: 'Overview', path: '/msp' },
      { label: 'ICT & Connectivity', path: '/msp/ict-connectivity' },
      { label: 'Security & Access Control', path: '/msp/security-access' },
      { label: 'Fire Safety & Protection', path: '/msp/fire-safety' },
      { label: 'HVAC & Environmental', path: '/msp/hvac' },
      { label: 'Power & Energy', path: '/msp/power-energy' },
    ]
  }
};

// Helper to get category key from path
export const getCategoryFromPath = (path: string): string | null => {
  if (path.startsWith('/telecommunications')) return 'telecommunications';
  if (path.startsWith('/ict-datacenter')) return 'ict_datacenter';
  if (path.startsWith('/power')) return 'power';
  if (path.startsWith('/academy')) return 'academy';
  if (path.startsWith('/msp')) return 'msp';
  return null;
};