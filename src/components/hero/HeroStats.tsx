import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';
import { ANIM } from '../../data/animationConstants';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { value: 150, suffix: '+', label: 'Projects Delivered' },
  { value: 50, suffix: '+', label: 'Enterprise Clients' },
  { value: 5, suffix: '×', label: 'ISO Certified' },
  { value: 20, suffix: '+', label: 'Years Experience' },
];

const CountUp: React.FC<{ target: number; suffix: string; inView: boolean }> = ({ target, suffix, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    
    let start = 0;
    const duration = ANIM.COUNTUP_DURATION;
    const stepTime = Math.abs(Math.floor(duration / target));
    
    const timer = setInterval(() => {
      start += 1;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const HeroStats: React.FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div 
      ref={ref}
      className="absolute bottom-24 left-8 md:left-16 xl:left-24 z-20"
    >
      <div className="flex flex-wrap gap-8 md:gap-12">
        {stats.map((stat, index) => (
          <div key={index} className="group">
            <div className="text-3xl md:text-4xl font-bold text-white">
              <CountUp 
                target={stat.value} 
                suffix={stat.suffix} 
                inView={inView} 
              />
            </div>
            <div className="text-white/50 text-xs uppercase tracking-widest mt-1 group-hover:text-brand-accent transition-colors">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroStats;