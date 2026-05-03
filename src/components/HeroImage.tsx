import React, { useState } from 'react';

export interface HeroImageProps {
  mobileSrc?: string;
  tabletSrc?: string;
  desktopSrc: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export const HeroImage: React.FC<HeroImageProps> = ({
  mobileSrc,
  tabletSrc,
  desktopSrc,
  alt,
  className = '',
  priority = false
}) => {
  const [imageError, setImageError] = useState(false);

  const srcSet = [
    mobileSrc ? `/assets/images/hero/${mobileSrc} 640w` : null,
    tabletSrc ? `/assets/images/hero/${tabletSrc} 1024w` : null,
    desktopSrc ? `/assets/images/hero/${desktopSrc} 1920w` : null
  ].filter(Boolean).join(', ');

  const sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1920px';

  const fallbackSrc = mobileSrc 
    ? `/assets/images/hero/${mobileSrc}` 
    : tabletSrc 
      ? `/assets/images/hero/${tabletSrc}` 
      : `/assets/images/hero/${desktopSrc}`;

  if (imageError) {
    return null;
  }

  return (
    <img
      src={fallbackSrc}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      className={`w-full h-full object-cover ${className}`}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
      onError={() => setImageError(true)}
    />
  );
};

export default HeroImage;