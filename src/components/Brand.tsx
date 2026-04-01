
import React from 'react';
import { LogoSymbol } from './LogoSymbol';

interface BrandProps {
  forceInvert?: boolean;
  className?: string;
  titleClass?: string;
  onClick?: () => void;
}

export const Brand: React.FC<BrandProps> = ({ forceInvert = true, className = "", titleClass = "text-xl font-bold tracking-tight", onClick }) => (
  <div className={`flex items-center gap-3 cursor-pointer ${className}`} onClick={onClick}>
    <LogoSymbol 
      className="w-10 h-10 md:w-12 md:h-12 shrink-0 transition-transform duration-500 hover:scale-110 drop-shadow-xl" 
      forceInvert={forceInvert} 
      isFullColor={!forceInvert} 
    />
    <div className="flex flex-col leading-none text-left">
      <span className={`${titleClass} transition-colors ${forceInvert ? 'text-white' : 'text-brand-primary'}`}>InfinEth</span>
      <span className={`text-[7px] md:text-[10px] font-sans font-bold tracking-[0.25em] uppercase mt-0.5 ${forceInvert ? 'text-brand-accent' : 'text-brand-accent'}`}>Infinite Possibilities</span>
    </div>
  </div>
);
