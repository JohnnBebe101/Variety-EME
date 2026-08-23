import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { NEWS_DATA } from '../../data/constants';
import { PageID } from '../../types';
import { Section } from '../Section';

interface RecentNewsProps {
  onNavigate?: (page: PageID, hash?: string, routePath?: string) => void;
}

export const RecentNews: React.FC<RecentNewsProps> = ({ onNavigate }) => {
  const { t } = useTranslation('common');

  const handleViewAll = () => {
    if (onNavigate) {
      onNavigate('home' as PageID, undefined, '/news');
    }
  };

  return (
    <Section variant="light" className="py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <span className="text-brand-accent text-sm font-semibold uppercase tracking-widest block mb-2">
              {t('latestNews') || 'RECENT NEWS'}
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 max-w-2xl">
              {t('newsTitle') || 'Stay Updated with Our Latest Insights'}
            </h2>
          </div>
          <button onClick={handleViewAll} className="inline-flex items-center gap-2 text-brand-accent font-semibold text-sm hover:text-brand-primary transition-colors mt-2 md:mt-0">
            {t('viewAllNews') || 'More News'}
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {NEWS_DATA.map((news, index) => (
            <motion.article
              key={news.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:border-brand-accent/50 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-brand-accent text-white text-xs font-semibold px-2.5 py-0.5 rounded-full">
                      {news.category}
                    </span>
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                    <time dateTime={news.date}>{news.date}</time>
                    <span aria-hidden="true">·</span>
                    <span>{news.readTime}</span>
                  </div>
                  <h3 className="font-semibold text-base text-gray-900 mb-2 line-clamp-2 group-hover:text-brand-primary transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-3 flex-grow line-clamp-2">
                    {news.excerpt}
                  </p>
                  <button
                    onClick={() => onNavigate?.('home' as PageID, undefined, news.path)}
                    className="inline-flex items-center gap-1.5 text-brand-accent font-semibold text-sm hover:text-brand-primary transition-colors mt-auto"
                  >
                    {t('readMore') || 'Read More'}
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default RecentNews;
