'use client';

import React from 'react';
import { BaseLayer } from './BaseLayer';
import { GradientOrbs } from './GradientOrbs';

/**
 * WhyChooseBackground - Why Choose Us Section Background System
 *
 * Creates a distinctive, sophisticated atmosphere with:
 * - Base noise texture for cohesion
 * - Hexagonal pattern for unique visual identity
 * - Radial gradient fade for focus
 * - Ambient gradient orbs
 *
 * Visual Character: Distinctive, sophisticated, geometric
 * Performance: Static patterns only (maximum efficiency)
 */
export const WhyChooseBackground: React.FC = () => {
  return (
    <>
      {/* Universal base texture */}
      <BaseLayer />

      {/* Hexagon Pattern - Unique geometric identity */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25 15v30L30 60 5 45V15z' fill='none' stroke='rgba(68,140,251,0.15)' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 52px',
          }}
        />
      </div>

      {/* Radial Gradient Fade - Centers focus */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.05) 0%, transparent 70%)',
        }}
      />

      {/* Gradient Orbs - Balanced positioning */}
      <GradientOrbs
        orb1={{ position: 'top-1/4 left-1/4', color: 'bg-cyan-500/10' }}
        orb2={{ position: 'bottom-1/4 right-1/4', color: 'bg-purple-500/10' }}
      />
    </>
  );
};
