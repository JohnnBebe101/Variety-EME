import React from 'react';
import { LucideIcon, Zap, Radio, Server, GraduationCap, Building2, CheckCircle, Users, Globe } from 'lucide-react';

interface QuickStat {
  icon: LucideIcon;
  value: string;
  label: string;
}

interface QuickStatsProps {
  category: string;
}

const STATS_BY_CATEGORY: Record<string, QuickStat[]> = {
  telecommunications: [
    { icon: Radio, value: '500+', label: 'Tower Sites' },
    { icon: Zap, value: '15K+', label: 'MW Deployed' },
    { icon: Building2, value: '66', label: 'Fiber Stations' },
    { icon: Users, value: '250+', label: 'Field Engineers' },
  ],
  ict_datacenter: [
    { icon: Server, value: '12', label: 'Data Centers' },
    { icon: Globe, value: '500+', label: 'Network Nodes' },
    { icon: CheckCircle, value: '99.9%', label: 'Uptime SLA' },
    { icon: Users, value: '50+', label: 'ICT Experts' },
  ],
   power: [
     { icon: Zap, value: '400KV', label: 'Transmission' },
     { icon: Building2, value: '67+', label: 'Towns Connected' },
     { icon: CheckCircle, value: '1.2GW', label: 'Power Managed' },
     { icon: Users, value: '180+', label: 'Engineers' },
   ],
 };

export const QuickStats: React.FC<QuickStatsProps> = ({ category }) => {
  const stats = STATS_BY_CATEGORY[category] || [];
  
  if (stats.length === 0) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div 
            key={index}
            className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 transition-colors"
          >
            <div className="w-8 h-8 rounded-md bg-brand-accent/10 flex items-center justify-center flex-shrink-0">
              <Icon size={16} className="text-brand-accent" />
            </div>
            <div className="min-w-0">
              <span className="text-sm font-bold text-white leading-tight block">{stat.value}</span>
              <span className="text-[10px] text-white/40 uppercase tracking-wide">{stat.label}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// Export stats data for use in SubPageLayout
export { STATS_BY_CATEGORY };