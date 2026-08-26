import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioProjects } from '../data/portfolioData';

const PortfolioSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % portfolioProjects.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % portfolioProjects.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + portfolioProjects.length) % portfolioProjects.length);

  return (
    <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 w-72 bg-slate-900/80 backdrop-blur-md rounded-xl p-4 border border-white/10 z-20">
      <h3 className="text-white text-sm font-semibold mb-3">Our Portfolio</h3>
      
      <div className="relative overflow-hidden rounded-lg bg-black/20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="aspect-video bg-slate-800 rounded-lg mb-3 overflow-hidden"
          >
            <img 
              src={portfolioProjects[currentIndex].image} 
              alt={portfolioProjects[currentIndex].title}
              className="w-full h-full object-cover opacity-80"
              loading="lazy"
            />
          </motion.div>
        </AnimatePresence>
        
        <div className="p-2">
          <p className="text-white text-xs font-medium mb-1">{portfolioProjects[currentIndex].title}</p>
          <p className="text-brand-accent text-xs">{portfolioProjects[currentIndex].category}</p>
          <p className="text-white/60 text-xs mt-1 line-clamp-2">{portfolioProjects[currentIndex].description}</p>
        </div>
      </div>

      <div className="flex justify-between mt-3">
        <button onClick={prevSlide} className="text-white/60 hover:text-white text-sm">← Prev</button>
        <button onClick={nextSlide} className="text-white/60 hover:text-white text-sm">Next →</button>
      </div>

      <div className="flex gap-1.5 mt-2 justify-center">
        {portfolioProjects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-colors ${
              idx === currentIndex ? 'bg-brand-accent' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioSlider;