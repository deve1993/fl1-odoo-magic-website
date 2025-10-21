'use client';

import React from 'react';

/**
 * GradientOrbs - Ambient Gradient Spheres
 *
 * Large, blurred gradient circles that provide ambient lighting
 * and depth to sections. Animated with subtle pulse effect.
 *
 * Props:
 * - orb1: First orb configuration (position, color)
 * - orb2: Second orb configuration (position, color)
 */
interface GradientOrbConfig {
  position: string;
  color: string;
}

interface GradientOrbsProps {
  orb1: GradientOrbConfig;
  orb2: GradientOrbConfig;
}

export const GradientOrbs: React.FC<GradientOrbsProps> = ({ orb1, orb2 }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* First Orb */}
      <div
        className={`absolute ${orb1.position} w-96 h-96 ${orb1.color} rounded-full blur-3xl animate-pulse`}
      />

      {/* Second Orb - Delayed animation */}
      <div
        className={`absolute ${orb2.position} w-96 h-96 ${orb2.color} rounded-full blur-3xl animate-pulse`}
        style={{ animationDelay: '1s' }}
      />
    </div>
  );
};
