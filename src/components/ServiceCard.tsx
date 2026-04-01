
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, LucideIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { UI_CLASSES } from '../data/constants';

interface ServiceCardProps {
  title: string;
  items: string[];
  icon: LucideIcon;
  color: string;
  onClick?: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, items, icon: Icon, color, onClick }) => {
  const { t } = useTranslation();
  const safeItems = Array.isArray(items) ? items : [];
  return (
    <motion.div 
      whileHover={{ y: -4 }} 
      onClick={onClick} 
      className="group rounded-xl border border-white/10 bg-brand-surface p-8 hover:border-brand-accent/40 hover:shadow-[0_8px_32px_rgba(0,194,255,0.12)] transition-all duration-300 cursor-pointer flex flex-col h-full"
    >
      <div className={`${color} w-14 h-14 rounded-xl flex items-center justify-center text-white mb-8 group-hover:rotate-6 transition-transform shadow-lg`}><Icon size={28} /></div>
      <h3 className={UI_CLASSES.cardTitle + " text-brand-foreground mb-6"}>{title}</h3>
      <ul className="space-y-3 mb-8 flex-grow">{safeItems.map((item, idx) => (<li key={idx} className="flex items-start gap-2.5 text-brand-muted text-sm font-bold leading-relaxed"><div className="w-1.5 h-1.5 rounded-full bg-brand-accent/40 mt-1.5 shrink-0"></div>{item}</li>))}</ul>
      <div className="flex items-center gap-2 text-brand-accent font-semibold text-xs tracking-wide uppercase mt-auto group-hover:gap-4 transition-all">{t('common.details')} <ArrowRight size={14} /></div>
    </motion.div>
  );
};
