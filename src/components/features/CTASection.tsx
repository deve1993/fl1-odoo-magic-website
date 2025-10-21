'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Award } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export const CTASection: React.FC = () => {
  const t = useTranslations('cta');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
  };

  const mockupVariants = {
    hidden: { opacity: 0, x: 50, rotateY: -15 },
    visible: { opacity: 1, x: 0, rotateY: 0 }
  };

  const checkVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1 }
  };

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background ambient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-48 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          {/* Left Column - CTA Content (45%) */}
          <motion.div
            className="space-y-6 lg:space-y-8"
            variants={contentVariants}
            transition={{ duration: 0.6 }}
          >
            {/* Headline with gradient */}
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
              variants={contentVariants}
              transition={{ duration: 0.6 }}
            >
              {t('headline')}{' '}
              <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                {t('headlineHighlight')}
              </span>
            </motion.h2>

            {/* Subheadline */}
            <motion.p
              className="text-base sm:text-lg text-foreground-muted leading-relaxed"
              variants={contentVariants}
              transition={{ duration: 0.6 }}
            >
              {t('subtitle')}
            </motion.p>

            {/* Benefits checklist */}
            <motion.ul
              className="space-y-4"
              variants={contentVariants}
              transition={{ duration: 0.6 }}
            >
              {[
                t('benefits.realTimeInsights'),
                t('benefits.automatedWorkflows'),
                t('benefits.seamlessIntegration'),
                t('benefits.scalableGrowth')
              ].map((benefit, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  variants={contentVariants}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div
                    className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mt-0.5"
                    variants={checkVariants}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  >
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </motion.div>
                  <span className="text-sm sm:text-base text-foreground leading-relaxed">
                    {benefit}
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            {/* CTA Button */}
            <motion.div
              className="pt-4"
              variants={contentVariants}
              transition={{ duration: 0.6 }}
            >
              {/* Primary CTA */}
              <motion.button
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 rounded-xl font-semibold text-white shadow-lg shadow-blue-500/30 overflow-hidden"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative flex items-center justify-center gap-2">
                  {t('buttons.consultation')}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="flex flex-wrap items-center gap-6 pt-4 border-t border-primary/10"
              variants={contentVariants}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                  <Award className="w-4 h-4 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-foreground-muted">{t('trustIndicators.certifiedLabel')}</div>
                  <div className="text-sm font-bold text-foreground">{t('trustIndicators.certifiedValue')}</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
                <div className="text-left">
                  <div className="text-xs text-foreground-muted">{t('trustIndicators.successfullyLabel')}</div>
                  <div className="text-sm font-bold text-foreground">{t('trustIndicators.successfullyValue')}</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Odoo Mockup (55%) */}
          <motion.div
            className="relative"
            variants={mockupVariants}
            transition={{ duration: 0.8 }}
            style={{ perspective: '1500px' }}
          >
            {/* Animated gradient border */}
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 rounded-2xl opacity-75 blur-xl"
              animate={{
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.02, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />

            {/* Mockup container with glass effect */}
            <motion.div
              className="relative bg-background-secondary/60 backdrop-blur-md rounded-2xl p-2 border border-primary/30 overflow-hidden"
              whileHover={{
                rotateY: 5,
                rotateX: -5,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Odoo Dashboard Mockup */}
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden">
                <Image
                  src="/images/odoo main.svg"
                  alt="Odoo Dashboard Interface"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
