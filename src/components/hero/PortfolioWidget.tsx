import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { widgetProjects } from '../../data/portfolioWidgetData';
import { ANIM } from '../../data/animationConstants';

interface PortfolioWidgetProps {
  isVisible: boolean;
  onNavigate?: (page: string) => void;
}

const PortfolioWidget: React.FC<PortfolioWidgetProps> = ({ isVisible, onNavigate }) => {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = widgetProjects.length;

  const startTimer = useCallback(() => {
    timerRef.current = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % total);
        setFading(false);
      }, 300);
    }, ANIM.WIDGET_INTERVAL);
  }, [total]);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  const navigate = (dir: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setFading(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + dir + total) % total);
      setFading(false);
      startTimer();
    }, 300);
  };

  const project = widgetProjects[current];

  return (
    <div
      className={`
        hidden lg:block absolute right-8 xl:right-16 top-1/2 -translate-y-1/2
        w-72 xl:w-80 z-20 transition-all duration-500
        ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'}
      `}
      onMouseEnter={() => {
        if (timerRef.current) clearInterval(timerRef.current);
      }}
      onMouseLeave={startTimer}
    >
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-2xl">
        <div className="px-5 pt-5 pb-3 flex items-center justify-between">
          <div>
            <p className="text-white/50 text-xs uppercase tracking-widest">Our Portfolio</p>
            <p className="text-white text-sm font-semibold mt-0.5">Selected Projects</p>
          </div>
          <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
        </div>

        <div className="relative w-full aspect-video overflow-hidden bg-gray-800">
          <img
            key={project.id}
            src={project.image}
            alt={project.title}
            className={`w-full h-full object-cover transition-opacity duration-300 ${fading ? 'opacity-0' : 'opacity-100'}`}
            loading="lazy"
            decoding="async"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
          <span className="absolute top-3 left-3 bg-brand-accent text-white text-xs font-medium px-2.5 py-1 rounded-full">
            {project.category}
          </span>
        </div>

        <div className={`px-5 py-4 transition-opacity duration-300 ${fading ? 'opacity-0' : 'opacity-100'}`}>
          <h4 className="text-white font-semibold text-sm leading-snug mb-1">{project.title}</h4>
          <p className="text-white/55 text-xs leading-relaxed mb-2">{project.description}</p>
          <p className="text-white/35 text-xs font-mono">{project.client}</p>
        </div>

        <div className="px-5 pb-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              aria-label="Previous project"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors duration-200 border border-white/15"
            >
              <ChevronLeft className="w-3.5 h-3.5 text-white" />
            </button>
            <span className="text-white/50 text-xs font-mono tabular-nums">
              {current + 1} / {total}
            </span>
            <button
              onClick={() => navigate(1)}
              aria-label="Next project"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors duration-200 border border-white/15"
            >
              <ChevronRight className="w-3.5 h-3.5 text-white" />
            </button>
          </div>
          <button
            onClick={() => onNavigate?.('portfolio-detailed')}
            className="text-brand-accent text-xs font-medium hover:text-brand-accent/80 transition-colors duration-200 flex items-center gap-1 cursor-pointer"
          >
            View All <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        <div className="flex gap-1.5 justify-center pb-4">
          {widgetProjects.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (timerRef.current) clearInterval(timerRef.current);
                setCurrent(i);
                startTimer();
              }}
              aria-label={`Go to project ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? 'w-4 h-1.5 bg-brand-accent'
                  : 'w-1.5 h-1.5 bg-white/25 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioWidget;