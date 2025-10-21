'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * SparseParticles - Optimized Floating Particles
 *
 * Lightweight animated particles that add subtle movement.
 * Reduced count from 20 to 8 for better performance while
 * maintaining visual interest.
 *
 * Props:
 * - count: Number of particles (default: 8)
 * - color: Tailwind color class (default: 'bg-primary')
 */
interface SparseParticlesProps {
  count?: number;
  color?: string;
}

export const SparseParticles: React.FC<SparseParticlesProps> = ({
  count = 8,
  color = 'bg-primary'
}) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Generate particles array once outside render to improve performance
  const particles = React.useMemo(() => Array.from({ length: count }), [count]);

  if (!isClient) {
    return null;
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {particles.map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className={`absolute w-1 h-1 ${color} rounded-full`}
          initial={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
            opacity: 0,
          }}
          animate={{
            y: [null, Math.random() * -150 - 50],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};
