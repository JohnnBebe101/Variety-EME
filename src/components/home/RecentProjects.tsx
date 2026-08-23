import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { portfolioProjects } from '../../data/portfolioData';
import { PageID } from '../../types';
import { Section } from '../Section';

interface RecentProjectsProps {
  onNavigate?: (page: PageID, hash?: string, routePath?: string) => void;
}

export const RecentProjects: React.FC<RecentProjectsProps> = ({ onNavigate }) => {
  const { t } = useTranslation('common');

  const handleViewAll = () => {
    if (onNavigate) {
      onNavigate('portfolio', undefined, '/portfolio');
    }
  };

  const featuredProjects = portfolioProjects.slice(0, 3);

  return (
    <Section variant="dark" className="py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-6">
          <span className="text-brand-accent text-sm font-semibold uppercase tracking-widest block mb-2">
            {t('recentProjects') || 'RECENT PROJECTS'}
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
            {t('projectShowcase') || 'Showcasing Our Latest Deliveries'}
          </h2>
          <p className="text-brand-muted max-w-2xl mx-auto text-base">
            {t('projectShowcaseDesc') || 'A selection of recently completed projects across telecommunications, power, and ICT infrastructure.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="group relative aspect-[16/9] rounded-xl overflow-hidden bg-brand-surface">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-xs font-semibold text-brand-accent uppercase tracking-wide block mb-1">
                    {project.category}
                  </span>
                  <h3 className="font-bold text-base mb-1">{project.title}</h3>
                  <p className="text-white/80 text-xs line-clamp-2">{project.description}</p>
                  <div className="mt-3 flex items-center gap-2 text-xs text-white/60">
                    <span>{project.client}</span>
                    <span>•</span>
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <button onClick={handleViewAll} className="inline-flex items-center gap-2 text-brand-accent font-semibold text-sm hover:text-white transition-colors">
            {t('viewAllProjects') || 'View All Projects'}
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </Section>
  );
};

export default RecentProjects;
