
import React from 'react';
import { motion } from 'framer-motion';
import { Home, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Brand } from './Brand';
import { UI_CLASSES } from '../data/constants';

interface SubPageLayoutProps {
  children?: React.ReactNode;
  tag: string;
  title: string;
  description: string;
  color?: string;
  onBack: () => void;
}

export const SubPageLayout: React.FC<SubPageLayoutProps> = ({ children, tag, title, description, color = "text-brand-accent", onBack }) => {
  const { t } = useTranslation();
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="pt-32 pb-20 min-h-screen bg-brand-primary text-brand-foreground">
      <div className="container mx-auto px-6">
        <nav className="flex items-center gap-4 mb-12 text-xs font-semibold uppercase tracking-wide">
          <button onClick={onBack} className="flex items-center gap-2 text-brand-muted hover:text-brand-accent transition-colors py-3 min-h-[44px]">
            <Home size={14} /> {t('common.home')}
          </button>
          <ChevronRight size={12} className="text-white/10" />
          <span className={color}>{tag}</span>
        </nav>
        <div className="mb-16">
          <span className={`${color} ${UI_CLASSES.tag} mb-6`}>{tag}</span>
          <h2 className={`${UI_CLASSES.sectionTitle} text-brand-foreground mb-6 max-w-5xl`}>{title}</h2>
          <p className={`text-brand-muted max-w-3xl ${UI_CLASSES.bodyLarge}`}>{description}</p>
        </div>
        {children}
        <div className="mt-24 pt-12 border-t border-white/5 flex justify-between items-center">
           <button onClick={onBack} className="flex items-center gap-4 text-brand-accent font-semibold uppercase text-xs tracking-wide group py-3 min-h-[44px]">
              <div className="w-10 h-10 rounded-full border border-brand-accent flex items-center justify-center group-hover:bg-brand-accent group-hover:text-brand-primary transition-all active:scale-90"><ChevronRight className="rotate-180" size={16} /></div>
              {t('common.backToOverview')}
           </button>
           <Brand forceInvert={true} onClick={onBack} className="opacity-20 hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </motion.div>
  );
};
