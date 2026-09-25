import React, { useState } from 'react';

/**
 * BrandLogo: Resilient logo component with multi-level fallbacks:
 * 1. Root zayrath-icon.jpg (high performance, bypasses CDN hashed asset issues)
 * 2. Root zayrath-logo.jpg
 * 3. Root zayrath-emblem.jpg
 * 4. High-fidelity inline SVG emblem (guarantees the logo is NEVER invisible)
 */
export default function BrandLogo({ 
  size = 44, 
  alt = "Zayrath Group Emblem", 
  style = {}, 
  className = "",
  variant = "icon"
}) {
  const [sourceIndex, setSourceIndex] = useState(0);

  // Candidate sources in order of preference
  const sources = [
    variant === 'full' ? './zayrath-logo.jpg' : './zayrath-icon.jpg',
    './zayrath-logo.jpg',
    './zayrath-emblem.jpg',
    './favicon.svg'
  ];

  const handleError = () => {
    if (sourceIndex < sources.length - 1) {
      setSourceIndex(prev => prev + 1);
    } else {
      setSourceIndex(-1); // Switch to SVG vector fallback
    }
  };

  // Ultimate fallback: crisp vector SVG if image files fail to load
  if (sourceIndex === -1) {
    return (
      <svg 
        viewBox="0 0 100 100" 
        className={className}
        style={{ 
          width: typeof size === 'number' ? `${size}px` : size, 
          height: typeof size === 'number' ? `${size}px` : size, 
          borderRadius: '8px',
          ...style 
        }}
        aria-label={alt}
      >
        <defs>
          <linearGradient id="svgBrandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0A58CA" />
            <stop offset="50%" stopColor="#002D62" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>
          <linearGradient id="svgChromeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#E2E8F0" />
            <stop offset="100%" stopColor="#94A3B8" />
          </linearGradient>
          <filter id="svgGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        
        {/* Background rounded emblem */}
        <rect width="100" height="100" rx="20" fill="url(#svgBrandGrad)" />
        
        {/* Globe meridians & equator */}
        <circle cx="50" cy="50" r="36" fill="none" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
        <ellipse cx="50" cy="50" rx="36" ry="16" fill="none" stroke="#38BDF8" strokeWidth="1.2" opacity="0.5" />
        <ellipse cx="50" cy="50" rx="16" ry="36" fill="none" stroke="#38BDF8" strokeWidth="1.2" opacity="0.5" />
        
        {/* Stylized 3D Chrome Z */}
        <path 
          d="M 28 32 L 72 32 L 36 68 L 72 68" 
          fill="none" 
          stroke="url(#svgChromeGrad)" 
          strokeWidth="11" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          filter="url(#svgGlow)"
        />
      </svg>
    );
  }

  return (
    <img 
      src={sources[sourceIndex]} 
      alt={alt} 
      onError={handleError}
      style={{ 
        width: typeof size === 'number' ? `${size}px` : size, 
        height: typeof size === 'number' ? `${size}px` : size, 
        objectFit: 'contain',
        display: 'block',
        ...style 
      }} 
      className={className}
    />
  );
}
