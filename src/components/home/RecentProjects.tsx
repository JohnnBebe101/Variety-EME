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

  // Take first 3 projects for the showcase
  const featuredProjects = portfolioProjects.slice(0, 3);

  return (
    <Section variant="dark" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-brand-accent text-sm font-semibold uppercase tracking-widest block mb-4">
            {t('common.recentProjects') || 'RECENT PROJECTS'}
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            {t('common.projectShowcase') || 'Showcasing Our Latest Deliveries'}
          </h2>
          <p className="text-brand-muted max-w-2xl mx-auto text-lg">
            {t('common.projectShowcaseDesc') || 'A selection of recently completed projects across telecommunications, power, and ICT infrastructure.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="group relative aspect-[16/9] rounded-xl overflow-hidden bg-brand-surface">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-xs font-semibold text-brand-accent uppercase tracking-wide block mb-2">
                    {project.category}
                  </span>
                  <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                  <p className="text-white/80 text-sm line-clamp-2">{project.description}</p>
                  <div className="mt-4 flex items-center gap-2 text-xs text-white/60">
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
          <button onClick={handleViewAll} className="inline-flex items-center gap-2 text-brand-accent font-semibold text-lg hover:text-white transition-colors">
            {t('common.viewAllProjects') || 'View All Projects'}
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </Section>
  );
};

export default RecentProjects;