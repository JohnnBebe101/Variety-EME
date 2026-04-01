
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Brand } from './Brand';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation('common');
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[300] flex items-center justify-center p-6 bg-brand-primary/95 backdrop-blur-xl">
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="relative w-full max-w-4xl bg-brand-surface rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row shadow-2xl h-[90vh] md:h-auto border border-white/5">
            <button onClick={onClose} className="absolute top-6 right-6 z-10 p-2.5 bg-white/5 hover:bg-white/10 rounded-xl text-brand-accent transition-all min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label="Close modal"><X size={20} /></button>
            <div className="hidden md:flex md:w-5/12 bg-brand-primary p-12 text-brand-foreground flex-col justify-between">
              <Brand forceInvert={true} />
              <h2 className="text-h2 font-semibold tracking-tight mb-10">{t('startNextProject')}</h2>
              <div className="space-y-4 text-brand-muted text-xs font-semibold">
                <p>+251 11 635 4312</p>
                <p>hello@infineth.com</p>
              </div>
            </div>
            <div className="w-full md:w-7/12 p-12 bg-brand-surface overflow-y-auto">
              <h3 className="text-h3 font-semibold mb-10 text-brand-foreground">{t('inquiryForm')}</h3>
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
                <div className="grid gap-6">
                  <div className="space-y-2"><label className="text-xs font-semibold uppercase text-brand-muted">{t('fullName')}</label><input type="text" className="w-full bg-brand-primary/50 p-4 rounded-xl outline-none font-semibold text-brand-foreground border border-white/5 focus:border-brand-accent/40 transition-all" required /></div>
                  <div className="space-y-2"><label className="text-xs font-semibold uppercase text-brand-muted">{t('email')}</label><input type="email" className="w-full bg-brand-primary/50 p-4 rounded-xl outline-none font-semibold text-brand-foreground border border-white/5 focus:border-brand-accent/40 transition-all" required /></div>
                  <div className="space-y-2"><label className="text-xs font-semibold uppercase text-brand-muted">{t('projectDetails')}</label><textarea rows={3} className="w-full bg-brand-primary/50 p-4 rounded-xl outline-none resize-none font-semibold text-brand-foreground border border-white/5 focus:border-brand-accent/40 transition-all" required></textarea></div>
                </div>
                <button type="submit" className="w-full bg-brand-accent text-brand-primary py-5 rounded-xl font-semibold tracking-wide uppercase shadow-xl hover:bg-white hover:text-brand-primary active:scale-95 focus-visible:ring-2 focus-visible:ring-brand-accent transition-all duration-200">{t('initialize')}</button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
