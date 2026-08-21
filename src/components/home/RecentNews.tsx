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
    <Section variant="light" className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-brand-accent text-sm font-semibold uppercase tracking-widest block mb-4">
              {t('common.latestNews') || 'LATEST NEWS'}
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 max-w-2xl">
              {t('common.newsTitle') || 'Stay Updated with Our Latest Insights'}
            </h2>
          </div>
          <button onClick={handleViewAll} className="inline-flex items-center gap-2 text-brand-accent font-semibold hover:text-brand-primary transition-colors mt-4 md:mt-0">
            {t('common.viewAllNews') || 'View All News'}
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {NEWS_DATA.map((news, index) => (
            <motion.article
              key={news.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:border-brand-accent/50 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {news.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                    <time dateTime={news.date}>{news.date}</time>
                    <span aria-hidden="true">·</span>
                    <span>{news.readTime}</span>
                  </div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-3 line-clamp-2 group-hover:text-brand-primary transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4 flex-grow line-clamp-3">
                    {news.excerpt}
                  </p>
                  <button
                    onClick={() => onNavigate?.('home' as PageID, undefined, news.path)}
                    className="inline-flex items-center gap-2 text-brand-accent font-semibold hover:text-brand-primary transition-colors mt-auto"
                  >
                    {t('common.readMore') || 'Read More'}
                    <ArrowRight size={16} />
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