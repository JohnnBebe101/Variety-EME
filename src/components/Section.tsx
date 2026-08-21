
import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: 'dark' | 'light';
}

export const Section: React.FC<SectionProps> = ({ children, className = "", id, variant = 'dark' }) => {
  const variantClasses = variant === 'light' 
    ? 'bg-white text-gray-900' 
    : 'bg-brand-primary text-brand-foreground';
  
  return (
    <section 
      id={id}
      className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 ${variantClasses} ${className}`}
    >
      {children}
    </section>
  );
};
