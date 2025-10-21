'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BaseLayer } from './BaseLayer';
import { GradientOrbs } from './GradientOrbs';

/**
 * ServicesBackground - Services Section Background System
 *
 * Creates a clean, professional atmosphere with:
 * - Base noise texture for cohesion
 * - Layered dot patterns (large and small) for sophisticated texture
 * - Animated gradient flow for subtle movement
 * - Ambient gradient orbs
 *
 * Visual Character: Clean, professional, textured
 * Performance: Static patterns (GPU-accelerated) + single animated element
 */
export const ServicesBackground: React.FC = () => {
  return (
    <>
      {/* Universal base texture */}
      <BaseLayer />

      {/* Layered Dots - Large Pattern */}
      <div className="absolute inset-0 opacity-15 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(68, 140, 251, 0.2) 2px, transparent 2px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Layered Dots - Small Pattern (creates depth) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(68, 140, 251, 0.15) 1px, transparent 1px)',
            backgroundSize: '25px 25px',
          }}
        />
      </div>

      {/* Animated Gradient Flow - Subtle movement */}
      <motion.div
        className="absolute inset-0 opacity-30 pointer-events-none"
        aria-hidden="true"
        animate={{
          background: [
            'radial-gradient(circle at 20% 30%, rgba(68, 140, 251, 0.08) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.08) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 30%, rgba(68, 140, 251, 0.08) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear'
        }}
      />

      {/* Gradient Orbs - Standardized positions */}
      <GradientOrbs
        orb1={{ position: 'top-0 left-1/4', color: 'bg-blue-500/10' }}
        orb2={{ position: 'bottom-0 right-1/4', color: 'bg-purple-500/10' }}
      />
    </>
  );
};
