'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedMockup: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Main Card with 3D effect */}
      <motion.div
        initial={{ opacity: 0, rotateY: -30, scale: 0.8 }}
        animate={{ opacity: 1, rotateY: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative"
        style={{ perspective: "1000px" }}
      >
        {/* Floating Card 1 - Back */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotateZ: [-2, 2, -2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-10 -left-10 w-64 h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl backdrop-blur-xl border border-primary/30 shadow-2xl shadow-primary/20"
          style={{ transform: "translateZ(-50px)" }}
        />

        {/* Main Card */}
        <motion.div
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-80 h-96 bg-background-secondary/60 backdrop-blur-xl rounded-2xl border border-primary/40 shadow-2xl overflow-hidden"
        >
          {/* Glowing gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />

          {/* Mock content */}
          <div className="relative p-6 h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-2xl shadow-lg">
                📊
              </div>
              <div className="flex-1">
                <div className="h-3 bg-foreground/20 rounded-full w-24 mb-2"></div>
                <div className="h-2 bg-foreground/10 rounded-full w-16"></div>
              </div>
            </div>

            {/* Stats */}
            <div className="space-y-4 mb-6">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.random() * 40 + 60}%` }}
                  transition={{ duration: 1, delay: i * 0.2 }}
                  className="h-2 bg-gradient-to-r from-primary to-accent rounded-full"
                />
              ))}
            </div>

            {/* Chart mockup */}
            <div className="flex-1 flex items-end gap-2">
              {[40, 70, 50, 90, 60, 85, 75].map((height, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="flex-1 bg-gradient-to-t from-primary to-accent rounded-t-lg"
                />
              ))}
            </div>
          </div>

          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-50" />
        </motion.div>

        {/* Floating Card 2 - Front */}
        <motion.div
          animate={{
            y: [0, -25, 0],
            rotateZ: [2, -2, 2],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute -bottom-10 -right-10 w-48 h-64 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl backdrop-blur-xl border border-accent/30 shadow-2xl shadow-accent/20"
          style={{ transform: "translateZ(50px)" }}
        />
      </motion.div>

      {/* Orbiting particles */}
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute"
          style={{
            width: 300 + i * 50,
            height: 300 + i * 50,
          }}
        >
          <div className="absolute top-0 left-1/2 w-2 h-2 bg-primary rounded-full -translate-x-1/2" />
        </motion.div>
      ))}
    </div>
  );
};
