'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '@/src/i18n/routing';
import { HeroBackground } from '@/src/components/backgrounds';
import { Highlight } from '@/src/components/ui/hero-highlight';
import {
  Phone,
  Video,
  Smartphone,
  MessageSquare,
  Check,
  SearchCheck,
  Database,
  Users,
  Zap,
  Settings,
  Key,
  Award,
  Globe,
  Clock,
  Headphones,
  ArrowDown
} from 'lucide-react';

export default function ThreeCXPage() {
  const t = useTranslations('3cx');

  return (
    <div className="min-h-screen relative">
      {/* Global Unified Background */}
      <div className="fixed inset-0 z-0">
        <HeroBackground />
      </div>

      {/* Page Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Main Title */}
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Highlight className="text-white">{t('hero.title.highlight1')}</Highlight>{' '}
                {t('hero.title.middle')}{' '}
                <Highlight className="text-white">{t('hero.title.highlight2')}</Highlight>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                className="text-xl md:text-2xl text-foreground-muted leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {t('hero.subtitle.start')}{' '}
                <Highlight className="text-white">{t('hero.subtitle.highlight')}</Highlight>{' '}
                {t('hero.subtitle.end')}
              </motion.p>

              {/* Feature Cards Grid */}
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {[
                  { icon: Phone, label: t('hero.features.unifiedComms') },
                  { icon: Smartphone, label: t('hero.features.mobileApps') },
                  { icon: Video, label: t('hero.features.videoConf') },
                  { icon: MessageSquare, label: t('hero.features.integration') }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center gap-3 p-4 rounded-xl bg-background-secondary/60 backdrop-blur-md border border-primary/20 hover:border-primary/40 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <feature.icon className="w-8 h-8 text-primary" />
                    <span className="text-sm font-medium text-foreground text-center">
                      {feature.label}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link
                  href="/contact"
                  className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
                >
                  {t('hero.cta')}
                </Link>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                className="flex flex-wrap items-center justify-center gap-6 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-foreground-muted">{t('hero.trust.downloads')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-foreground-muted">{t('hero.trust.certified')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-foreground-muted">{t('hero.trust.support')}</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">
                {t('included.title.start')}{' '}
                <Highlight className="text-white">{t('included.title.highlight')}</Highlight>
              </h2>
              <p className="text-xl text-foreground-muted">{t('included.subtitle')}</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: SearchCheck,
                  title: t('included.lookup.title'),
                  description: t('included.lookup.description'),
                  gradient: 'from-blue-500 to-cyan-500'
                },
                {
                  icon: Database,
                  title: t('included.realtime.title'),
                  description: t('included.realtime.description'),
                  gradient: 'from-purple-500 to-pink-500'
                },
                {
                  icon: Users,
                  title: t('included.contacts.title'),
                  description: t('included.contacts.description'),
                  gradient: 'from-emerald-500 to-teal-500'
                },
                {
                  icon: Zap,
                  title: t('included.multichannel.title'),
                  description: t('included.multichannel.description'),
                  gradient: 'from-orange-500 to-red-500'
                },
                {
                  icon: Settings,
                  title: t('included.configuration.title'),
                  description: t('included.configuration.description'),
                  gradient: 'from-indigo-500 to-blue-500'
                },
                {
                  icon: Key,
                  title: t('included.api.title'),
                  description: t('included.api.description'),
                  gradient: 'from-amber-500 to-yellow-500'
                }
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    className="group"
                    style={{ perspective: '1000px' }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="block relative h-full">
                      {/* Animated gradient border */}
                      <div
                        className={`absolute -inset-[2px] bg-gradient-to-r ${item.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`}
                        style={{
                          animation: 'gradient-shift 3s ease infinite',
                          backgroundSize: '200% 200%'
                        }}
                      />

                      {/* Card with isometric effect */}
                      <div
                        className="relative bg-background-secondary/80 backdrop-blur-md rounded-2xl overflow-hidden h-full min-h-[300px] border border-primary/10 group-hover:border-primary/30 transition-all duration-500"
                        style={{
                          transform: 'perspective(1000px) rotateX(2deg) rotateY(-2deg)',
                          transition: 'transform 0.5s cubic-bezier(0.21, 0.45, 0.27, 0.9)'
                        }}
                      >
                        {/* Dot pattern overlay */}
                        <div
                          className="absolute inset-0 opacity-[0.03]"
                          style={{
                            backgroundImage:
                              'radial-gradient(circle, currentColor 1px, transparent 1px)',
                            backgroundSize: '24px 24px'
                          }}
                        />

                        {/* Floating icon badge */}
                        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20">
                          <div
                            className={`relative w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl shadow-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                          >
                            {/* Glow effect */}
                            <div
                              className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500`}
                            />

                            {/* Rotating ring */}
                            <div className="absolute inset-0 rounded-xl border-2 border-white/20 group-hover:animate-spin-slow" />

                            <IconComponent className="w-6 h-6 text-white relative z-10" />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 p-8 pt-24 h-full flex flex-col">
                          <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                            {item.title}
                          </h3>
                          <p className="text-foreground-muted leading-relaxed flex-grow">
                            {item.description}
                          </p>
                        </div>

                        {/* Shine effect overlay */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                          <div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12"
                            style={{ willChange: 'transform' }}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How It Works Section - Vertical Timeline */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">
                {t('howItWorks.title.start')}{' '}
                <Highlight className="text-white">{t('howItWorks.title.highlight')}</Highlight>
              </h2>
              <p className="text-xl text-foreground-muted">{t('howItWorks.subtitle')}</p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              {[
                {
                  icon: Phone,
                  title: t('howItWorks.step1.title'),
                  description: t('howItWorks.step1.description'),
                  number: '01',
                  gradient: 'from-blue-500 to-cyan-500',
                  bgColor: 'bg-blue-500/10',
                  borderColor: 'border-blue-500/30'
                },
                {
                  icon: Database,
                  title: t('howItWorks.step2.title'),
                  description: t('howItWorks.step2.description'),
                  number: '02',
                  gradient: 'from-purple-500 to-pink-500',
                  bgColor: 'bg-purple-500/10',
                  borderColor: 'border-purple-500/30'
                },
                {
                  icon: Users,
                  title: t('howItWorks.step3.title'),
                  description: t('howItWorks.step3.description'),
                  number: '03',
                  gradient: 'from-emerald-500 to-teal-500',
                  bgColor: 'bg-emerald-500/10',
                  borderColor: 'border-emerald-500/30'
                },
                {
                  icon: Check,
                  title: t('howItWorks.step4.title'),
                  description: t('howItWorks.step4.description'),
                  number: '04',
                  gradient: 'from-amber-500 to-orange-500',
                  bgColor: 'bg-amber-500/10',
                  borderColor: 'border-amber-500/30'
                }
              ].map((step, index) => (
                <div key={index}>
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                  >
                    {/* Card */}
                    <div className={`group flex items-start gap-4 p-6 rounded-2xl bg-background-secondary/60 backdrop-blur-md border ${step.borderColor} hover:border-primary/50 transition-all duration-300 hover:shadow-lg`}>
                      {/* Icon */}
                      <div className={`flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br ${step.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <step.icon className="w-7 h-7 text-white" />
                      </div>

                      {/* Content */}
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {step.title}
                        </h3>
                        <p className="text-foreground-muted leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Animated Arrow Connector */}
                  {index < 3 && (
                    <div className="flex justify-center py-4">
                      <motion.div
                        className="flex flex-col items-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.1 }}
                      >
                        {/* Vertical line */}
                        <div className={`w-0.5 h-8 bg-gradient-to-b ${step.gradient} opacity-30`} />

                        {/* Animated arrow with pulse */}
                        <motion.div
                          className={`w-8 h-8 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center`}
                          animate={{
                            y: [0, 8, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <ArrowDown className="w-5 h-5 text-white" />
                        </motion.div>
                      </motion.div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose FL1 Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">
                {t('whyChoose.title.start')}{' '}
                <Highlight className="text-white">{t('whyChoose.title.highlight')}</Highlight>
              </h2>
              <p className="text-xl text-foreground-muted">{t('whyChoose.subtitle')}</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: Award,
                  title: t('whyChoose.trusted.title'),
                  description: t('whyChoose.trusted.description'),
                  gradient: 'from-blue-500 to-cyan-500'
                },
                {
                  icon: Globe,
                  title: t('whyChoose.allVersions.title'),
                  description: t('whyChoose.allVersions.description'),
                  gradient: 'from-purple-500 to-pink-500'
                },
                {
                  icon: Clock,
                  title: t('whyChoose.quickSetup.title'),
                  description: t('whyChoose.quickSetup.description'),
                  gradient: 'from-emerald-500 to-teal-500'
                },
                {
                  icon: Headphones,
                  title: t('whyChoose.italianSupport.title'),
                  description: t('whyChoose.italianSupport.description'),
                  gradient: 'from-amber-500 to-orange-500'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="group text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="relative inline-flex items-center justify-center mb-4">
                    <motion.div
                      className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${item.gradient} bg-opacity-20 backdrop-blur-md border-2 shadow-lg flex items-center justify-center`}
                      whileHover={{
                        scale: 1.15,
                        rotate: 360,
                        transition: { duration: 0.6, ease: "easeInOut" }
                      }}
                    >
                      {/* Glow effect on hover */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-30 rounded-full transition-opacity duration-300 blur-md`}
                      />

                      {/* Pulsing ring */}
                      <motion.div
                        className={`absolute inset-0 rounded-full border-2 border-transparent`}
                        style={{
                          borderImage: `linear-gradient(to bottom right, var(--tw-gradient-stops)) 1`,
                        }}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />

                      <item.icon className="w-10 h-10 text-white relative z-10" />
                    </motion.div>
                  </div>

                  <h3 className={`text-lg font-bold mb-2 bg-gradient-to-br ${item.gradient} bg-clip-text text-transparent transition-all duration-300`}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Gradient animation keyframes */}
      <style jsx>{`
        @keyframes gradient-shift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </div>
  );
}
