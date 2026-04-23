import React from 'react';
import { ArrowRight } from 'lucide-react';
import { portfolioProjects } from '../data/portfolioData';
import useScrollAnimation from '../hooks/useScrollAnimation';

const PortfolioCard = ({ project }: { project: typeof portfolioProjects[0] }) => {
  return (
    <div className="bg-brand-surface rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all min-w-[280px] flex-1 border border-white/5">
      <div className="aspect-video bg-brand-primary overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 opacity-80"
        />
      </div>
      <div className="p-5">
        <span className="text-xs font-semibold text-brand-accent uppercase tracking-wide">
          {project.category}
        </span>
        <h3 className="font-bold text-brand-foreground mt-2 mb-2 text-lg">
          {project.title}
        </h3>
        <p className="text-sm text-brand-muted mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-xs text-brand-muted/60">{project.client}</span>
          <span className="text-brand-accent text-sm font-medium flex items-center gap-1">
            View <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </div>
  );
};

export const SuccessStoriesSection = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section 
      ref={ref}
      className={`py-20 bg-brand-primary transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-foreground mb-4">
            Our Success Stories
          </h2>
          <p className="text-brand-muted max-w-2xl mx-auto text-lg">
            Delivering excellence across Ethiopia's telecommunications, power, and ICT sectors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioProjects.slice(0, 6).map((project, index) => (
            <div 
              key={project.id}
              className={`transition-all duration-700 ease-out transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <PortfolioCard project={project} />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <span className="text-brand-accent font-semibold text-lg inline-flex items-center gap-2 cursor-pointer">
            View All Projects <ArrowRight size={18} />
          </span>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;