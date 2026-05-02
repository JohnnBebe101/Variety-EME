import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PageID } from '../types';

export interface CTAButtonProps {
  label: string;
  subject?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  onNavigate?: (page: PageID, hash?: string, routePath?: string) => void;
}

export const CTAButton: React.FC<CTAButtonProps> = ({ 
  label, 
  subject = 'General Inquiry', 
  variant = 'primary',
  className = '',
  onNavigate
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-xl font-semibold tracking-wide text-sm transition-all duration-200';
  
  const primaryStyles = 'bg-brand-accent text-brand-primary hover:bg-white hover:text-brand-primary shadow-lg';
  
  const secondaryStyles = 'bg-transparent border border-white/20 text-brand-foreground hover:border-brand-accent hover:text-brand-accent';
  
  const handleClick = () => {
    if (onNavigate) {
      onNavigate('contact', undefined, `/contact?subject=${encodeURIComponent(subject)}`);
    } else {
      window.location.href = `/contact?subject=${encodeURIComponent(subject)}`;
    }
  };
  
  return (
    <button 
      onClick={handleClick}
      className={`${baseStyles} ${variant === 'primary' ? primaryStyles : secondaryStyles} px-6 py-3 ${className}`}
    >
      {label}
      <ArrowRight className="w-4 h-4 ml-2" />
    </button>
  );
};

export default CTAButton;