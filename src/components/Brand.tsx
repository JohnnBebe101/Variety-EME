
import React from 'react';
import { LogoSymbol } from './LogoSymbol';
import { IMAGES } from '../data/imageConfig';

interface BrandProps {
  forceInvert?: boolean;
  className?: string;
  titleClass?: string;
  onClick?: () => void;
}

export const Brand: React.FC<BrandProps> = ({ forceInvert = true, className = "", titleClass = "text-lg font-bold tracking-tight", onClick }) => (
  <div className={`flex items-center gap-2 cursor-pointer ${className}`} onClick={onClick}>
    <img src={IMAGES.logo.white} alt="InfinEth" width="64" height="64" className="w-8 h-8 md:w-10 md:h-10 shrink-0 transition-transform duration-500 hover:scale-110 drop-shadow-xl" />
    <div className="flex flex-col leading-none text-left">
      <span className={`${titleClass} transition-colors ${forceInvert ? 'text-white' : 'text-brand-primary'}`}>InfinEth</span>
      <span className={`text-[6px] md:text-[9px] font-sans font-bold tracking-[0.2em] uppercase mt-0.5 ${forceInvert ? 'text-brand-accent' : 'text-brand-accent'}`}>Infinite Possibilities</span>
    </div>
  </div>
);
