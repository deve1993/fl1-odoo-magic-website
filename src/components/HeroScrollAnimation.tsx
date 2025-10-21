'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface HeroScrollAnimationProps {
  children: React.ReactNode;
}

export const HeroScrollAnimation: React.FC<HeroScrollAnimationProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax effects con velocità diverse
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const translateY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  // Rotazione 3D mentre scrolli
  const rotateX = useTransform(scrollYProgress, [0, 0.3], [0, -5]);

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      <motion.div
        style={{
          opacity,
          scale,
          y: translateY,
          rotateX,
          transformPerspective: 1200,
        }}
        className="sticky top-0 flex h-screen items-center justify-center"
      >
        {children}
      </motion.div>
    </div>
  );
};

interface ParallaxTextProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export const ParallaxText: React.FC<ParallaxTextProps> = ({
  children,
  speed = 1,
  className = ""
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
};

interface FloatingOrbProps {
  className?: string;
  speed?: number;
  delay?: number;
}

export const FloatingOrb: React.FC<FloatingOrbProps> = ({
  className = "",
  speed = 1,
  delay = 0
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -200 * speed]);
  const x = useTransform(scrollYProgress, [0, 1], [0, 50 * speed]);

  return (
    <motion.div
      ref={ref}
      style={{ y, x }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    />
  );
};
