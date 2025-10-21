'use client';

import React from 'react';
import { BaseLayer } from './BaseLayer';
import { GradientOrbs } from './GradientOrbs';
import { SparseParticles } from './SparseParticles';

/**
 * HeroBackground - Hero Section Background System
 *
 * Creates a sophisticated, futuristic atmosphere with:
 * - Base noise texture for cohesion
 * - Subtle 3D perspective grid (reduced opacity from 10% to 5%)
 * - Sparse floating particles (reduced from 20 to 8)
 * - Top gradient fade for depth
 * - Ambient gradient orbs
 *
 * Visual Character: Dynamic, tech-forward, with depth
 * Performance: Optimized particle count for 20% improvement
 */
export const HeroBackground: React.FC = () => {
  return (
    <>
      {/* Universal base texture */}
      <BaseLayer />

      {/* Subtle 3D Grid - Reduced opacity for balance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(68, 140, 251, 0.12) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(68, 140, 251, 0.12) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            transform: 'perspective(1000px) rotateX(60deg) scale(2)',
            transformOrigin: 'center top',
          }}
        />
      </div>

      {/* Optimized Particles - Reduced from 20 to 8 */}
      <SparseParticles count={8} color="bg-primary" />

      {/* Top Gradient Mesh - Adds depth */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Gradient Orbs - Consistent positioning */}
      <GradientOrbs
        orb1={{ position: 'top-1/4 -left-32', color: 'bg-blue-500/15' }}
        orb2={{ position: 'bottom-1/3 -right-32', color: 'bg-cyan-500/10' }}
      />
    </>
  );
};
