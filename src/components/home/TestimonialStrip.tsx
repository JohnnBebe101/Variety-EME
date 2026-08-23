import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { TESTIMONIAL_DATA } from '../../data/constants';
import { Section } from '../Section';

export const TestimonialStrip: React.FC = () => {
  return (
    <Section variant="dark" className="py-10 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-6"
        >
          {/* Left: Avatar */}
          <div className="flex-shrink-0">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-brand-accent/40 bg-brand-surface">
              <img
                src={TESTIMONIAL_DATA.avatar}
                alt={TESTIMONIAL_DATA.author}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right: Quote & Author */}
          <div className="min-w-0">
            <div className="flex items-center gap-3 mb-3">
              <Quote size={18} className="text-brand-accent/30 flex-shrink-0" />
              <div className="w-10 h-px bg-brand-accent/30" />
            </div>
            <blockquote className="text-white/90 text-sm md:text-base leading-relaxed mb-4 italic max-w-2xl">
              &ldquo;{TESTIMONIAL_DATA.quote}&rdquo;
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-1 h-6 bg-brand-accent rounded flex-shrink-0" />
              <div>
                <p className="font-bold text-white text-sm">{TESTIMONIAL_DATA.author}</p>
                <p className="text-brand-accent text-xs">{TESTIMONIAL_DATA.designation}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default TestimonialStrip;
