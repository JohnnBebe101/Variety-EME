import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { projectShowcase } from '../../data/projectShowcase';

const ROTATION_INTERVAL = 8000;

const CATEGORY_COLORS: Record<string, string> = {
  Telecom: 'text-sky-400 bg-sky-400/10',
  Power:   'text-amber-400 bg-amber-400/10',
  ICT:     'text-emerald-400 bg-emerald-400/10',
};

export default function ProjectProofWidget() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isPaused = useRef(false);
  const total = projectShowcase.length;

  const goTo = (index: number) => {
    setVisible(false);
    setProgress(0);
    setTimeout(() => {
      setCurrent((index + total) % total);
      setVisible(true);
    }, 280);
  };

  const startTimers = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (progressRef.current) clearInterval(progressRef.current);

    setProgress(0);
    const step = 100 / (ROTATION_INTERVAL / 50);

    progressRef.current = setInterval(() => {
      if (!isPaused.current) {
        setProgress(prev => {
          if (prev >= 100) return 100;
          return prev + step;
        });
      }
    }, 50);

    timerRef.current = setInterval(() => {
      if (!isPaused.current) {
        goTo(current + 1);
      }
    }, ROTATION_INTERVAL);
  };

  useEffect(() => {
    startTimers();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [current]);

  const item = projectShowcase[current];
  const categoryStyle = CATEGORY_COLORS[item.category] ?? 'text-white/60 bg-white/10';

  return (
    <div
      className="
        relative w-72 rounded-xl overflow-hidden
        bg-brand-surface/75 backdrop-blur-md
        border border-white/8
        border-l-2 border-l-brand-accent
        shadow-[0_8px_32px_rgba(0,0,0,0.4)]
        select-none
      "
      onMouseEnter={() => { isPaused.current = true; }}
      onMouseLeave={() => { isPaused.current = false; }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between px-4 pt-3 pb-2">
        <span className="text-[9px] font-bold uppercase tracking-[0.18em]
                         text-brand-foreground/35">
          Delivered Work
        </span>
        <div className="flex items-center gap-1">
          <button
            onClick={() => goTo(current - 1)}
            className="w-5 h-5 flex items-center justify-center rounded
                       text-brand-foreground/35 hover:text-white
                       transition-colors duration-200"
            aria-label="Previous project"
          >
            <ChevronLeft size={12} />
          </button>
          <button
            onClick={() => goTo(current + 1)}
            className="w-5 h-5 flex items-center justify-center rounded
                       text-brand-foreground/35 hover:text-white
                       transition-colors duration-200"
            aria-label="Next project"
          >
            <ChevronRight size={12} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div
        className={`
          px-4 pb-3 transition-opacity duration-[280ms]
          ${visible ? 'opacity-100' : 'opacity-0'}
        `}
      >
        {/* Category badge */}
        <span className={`
          inline-block text-[9px] font-bold uppercase tracking-[0.15em]
          px-2 py-0.5 rounded-full mb-2 ${categoryStyle}
        `}>
          {item.category}
        </span>

        {/* Project name */}
        <p className="text-sm font-semibold text-white leading-snug mb-1">
          {item.name}
        </p>

        {/* Impact line */}
        <p className="text-[11px] text-brand-foreground/60 leading-relaxed mb-2">
          {item.impact}
        </p>

        {/* Metric + client row */}
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold text-brand-accent">
            {item.metric}
          </span>
          <span className="text-[9px] text-brand-foreground/40 text-right
                           max-w-[110px] leading-tight">
            {item.client}
          </span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-0.5 w-full bg-brand-accent/15">
        <div
          className="h-full bg-brand-accent transition-none"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-1 py-2">
        {projectShowcase.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`
              rounded-full transition-all duration-300
              ${i === current
                ? 'w-3 h-1.5 bg-brand-accent'
                : 'w-1.5 h-1.5 bg-brand-foreground/20 hover:bg-brand-foreground/40'}
            `}
            aria-label={`Go to project ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}