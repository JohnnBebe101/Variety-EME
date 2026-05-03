
import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  items: string[];
  icon: LucideIcon;
  color: string;
  onClick?: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, items, icon: Icon, color, onClick }) => {
  const safeItems = Array.isArray(items) ? items : [];
  return (
    <motion.div 
      whileHover={{ y: -2 }} 
      onClick={onClick} 
      className="group rounded-lg border border-white/10 bg-brand-surface p-4 hover:border-brand-accent/40 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col h-full border-l-2 border-brand-accent hover:-translate-y-0.5"
    >
      <div className={`${color} w-10 h-10 rounded-lg flex items-center justify-center text-white mb-3 group-hover:rotate-6 transition-transform shadow-md`}><Icon size={20} /></div>
      <h3 className="text-sm font-semibold tracking-tight text-brand-foreground mb-2">{title}</h3>
      <ul className="space-y-1 flex-grow">{safeItems.map((item, idx) => (<li key={idx} className="flex items-start gap-2 text-brand-muted text-xs leading-tight"><div className="w-1 h-1 rounded-full bg-brand-accent/40 mt-1 shrink-0"></div>{item}</li>))}</ul>
    </motion.div>
  );
};
