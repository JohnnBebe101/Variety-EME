import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { FAQ_DATA } from '../../data/constants';
import { Section } from '../Section';

export const FAQSection: React.FC = () => {
  const { t } = useTranslation('common');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <Section variant="light" className="py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <span className="text-brand-accent text-sm font-semibold uppercase tracking-widest block mb-2">
            {t('frequentlyAsked') || 'F.A.Q'}
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 max-w-2xl mx-auto">
            {t('faqTitle') || 'All these years, our different services have delivered long lasting innovation'}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-3">
            {FAQ_DATA.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <div className="bg-white border border-gray-100 rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
                    aria-expanded={openIndex === index}
                  >
                    <span className="font-semibold text-base text-gray-900 pr-8">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-brand-accent flex-shrink-0 transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: openIndex === index ? 'auto' : 0, opacity: openIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 border-t border-gray-100">
                      <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default FAQSection;
