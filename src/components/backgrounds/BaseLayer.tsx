'use client';

import React from 'react';

/**
 * BaseLayer - Universal Texture Foundation
 *
 * Ultra-subtle noise texture that appears across all sections,
 * providing a cohesive foundation and preventing flat appearance.
 *
 * Opacity: 0.02 (almost imperceptible but adds depth)
 */
export const BaseLayer: React.FC = () => {
  return (
    <div className="absolute inset-0 opacity-[0.02] pointer-events-none" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />
    </div>
  );
};
