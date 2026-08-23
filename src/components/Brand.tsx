
import React from 'react';
import { IMAGES } from '../data/imageConfig';

interface BrandProps {
  forceInvert?: boolean;
  className?: string;
  titleClass?: string;
  onClick?: () => void;
  headerMode?: boolean;
}

export const Brand: React.FC<BrandProps> = ({ forceInvert = true, className = "", titleClass = "text-lg font-bold tracking-tight", onClick, headerMode = false }) => (
  <div className={`flex items-center gap-3 cursor-pointer ${className}`} onClick={onClick}>
    {headerMode ? (
      <div className="logo-glow p-1.5 flex items-center justify-center shrink-0 transition-transform duration-500 hover:scale-105 mt-10 md:mt-14 lg:mt-16">
        <img 
          src={IMAGES.logo.white} 
          alt="Variety EME" 
          className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-28 lg:h-28"
        />
      </div>
    ) : (
      <img 
        src={IMAGES.logo.white} 
        alt="Variety EME" 
        className="logo-white w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 shrink-0 transition-transform duration-500 hover:scale-105"
      />
    )}
    <div className="flex flex-col leading-none text-left">
      <span className={`logo-text-glow ${titleClass} transition-colors ${forceInvert ? 'text-white' : 'text-brand-primary'}`}>Variety EME</span>
      <span className={`text-[7px] sm:text-[8px] md:text-[9px] lg:text-[10px] font-sans font-bold tracking-[0.2em] uppercase mt-0.5 ${forceInvert ? 'text-brand-accent' : 'text-brand-accent'}`}>Innovative Electromechanical Solutions</span>
    </div>
  </div>
);
