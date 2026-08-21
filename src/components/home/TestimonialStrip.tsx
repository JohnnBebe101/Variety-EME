import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { TESTIMONIAL_DATA } from '../../data/constants';
import { Section } from '../Section';

export const TestimonialStrip: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <Section variant="dark" className="py-16 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex lg:flex-row items-center gap-12"
        >
          {/* Left: Avatar */}
          <div className="lg:w-1/3 flex-shrink-0">
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-brand-accent/10 rounded-full animate-pulse" />
              <div className="relative z-10 aspect-square rounded-full overflow-hidden border-4 border-brand-accent/30 bg-brand-surface">
                <img
                  src={TESTIMONIAL_DATA.avatar}
                  alt={TESTIMONIAL_DATA.author}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right: Quote & Author */}
          <div className="lg:w-2/3 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <Quote size={32} className="text-brand-accent/30" />
              <div className="w-16 h-px bg-brand-accent/30" />
            </div>
            <blockquote className="text-white/90 text-lg md:text-xl leading-relaxed mb-8 italic max-w-3xl mx-auto lg:mx-0">
              &ldquo;{TESTIMONIAL_DATA.quote}&rdquo;
            </blockquote>
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <div className="w-1 h-10 bg-brand-accent rounded" />
              <div>
                <p className="font-bold text-white text-lg">{TESTIMONIAL_DATA.author}</p>
                <p className="text-brand-accent text-sm">{TESTIMONIAL_DATA.designation}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default TestimonialStrip;