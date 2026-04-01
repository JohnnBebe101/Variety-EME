
import React from 'react';
import { motion } from 'framer-motion';

interface LogoSymbolProps {
  className?: string;
  forceInvert?: boolean;
  isFullColor?: boolean;
}

export const LogoSymbol: React.FC<LogoSymbolProps> = ({ className = "", forceInvert = false, isFullColor = false }) => {
  const primaryColor = isFullColor ? "#00C2FF" : (forceInvert ? "#FFFFFF" : "#0A1628");
  const secondaryColor = isFullColor ? "#0A1628" : (forceInvert ? "#FFFFFF" : "#00C2FF");
  
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path 
        d="M32 42C22 52 22 68 32 78C42 88 58 88 68 78L82 64C92 54 92 38 82 28C72 18 56 18 46 28L32 42Z" 
        stroke={primaryColor} 
        strokeWidth="11" 
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
      <motion.path 
        d="M68 58C78 48 78 32 68 22C58 12 42 12 32 22L18 36C8 46 8 62 18 72C28 82 44 82 54 72L68 58Z" 
        stroke={secondaryColor} 
        strokeWidth="11" 
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
      />
    </svg>
  );
};
