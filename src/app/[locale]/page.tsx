'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/src/i18n/routing';
import Image from "next/image";
import { motion } from 'framer-motion';
import { Zap, Settings, Shield, Headset, Code, Headphones, Globe, Cloud, Database, Workflow, Users, Heart, LifeBuoy, TrendingUp } from 'lucide-react';
import { AnimatedMockup } from '@/src/components/AnimatedMockup';
import { HeroBackground } from '@/src/components/backgrounds';
import { CTASection } from '@/src/components/features/CTASection';

export default function Home() {
  const t = useTranslations('home');
  const tCommon = useTranslations('common');

  // Service cards data with icons and gradients
  const services = [
    {
      icon: Code,
      title: t('services.odooDev.title'),
      description: t('services.odooDev.description'),
      href: '/odoo-dev',
      gradient: 'from-blue-500 via-cyan-500 to-blue-600',
      glowColor: 'blue',
      command: 'explore_odoo_dev',
      badge: null
    },
    {
      icon: Headphones,
      title: t('services.3cx.title'),
      description: t('services.3cx.description'),
      href: '/3cx',
      gradient: 'from-purple-500 via-pink-500 to-purple-600',
      glowColor: 'purple',
      command: 'explore_3cx',
      badge: null
    },
    {
      icon: Globe,
      title: t('services.websiteDev.title'),
      description: t('services.websiteDev.description'),
      href: '/website-dev',
      gradient: 'from-emerald-500 via-teal-500 to-emerald-600',
      glowColor: 'emerald',
      command: 'explore_website',
      badge: t('services.websiteDev.badge')
    },
    {
      icon: Cloud,
      title: t('services.cloudMigration.title'),
      description: t('services.cloudMigration.description'),
      href: '/cloud-migration',
      gradient: 'from-sky-500 via-indigo-500 to-sky-600',
      glowColor: 'sky',
      command: 'explore_cloud',
      badge: t('services.cloudMigration.badge')
    },
    {
      icon: Database,
      title: t('services.erpImplementation.title'),
      description: t('services.erpImplementation.description'),
      href: '/erp-implementation',
      gradient: 'from-amber-500 via-orange-500 to-amber-600',
      glowColor: 'amber',
      command: 'explore_erp',
      badge: null
    },
    {
      icon: Workflow,
      title: t('services.businessIntegration.title'),
      description: t('services.businessIntegration.description'),
      href: '/business-integration',
      gradient: 'from-rose-500 via-fuchsia-500 to-rose-600',
      glowColor: 'rose',
      command: 'explore_integration',
      badge: t('services.businessIntegration.badge')
    }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Global Unified Background - Continuous across all sections */}
      <div className="fixed inset-0 z-0">
        <HeroBackground />
      </div>

      {/* Hero Section - Split Screen */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-20">
            {/* Left Side - Content */}
            <div className="space-y-8">
              {/* Headline - Odoo Logo */}
              <div className="mb-8">
                <Image
                  src="/images/odoo-logo.svg"
                  alt="Odoo"
                  width={300}
                  height={80}
                  priority
                  className="w-auto h-16 md:h-20 lg:h-24 drop-shadow-2xl"
                  style={{ background: 'transparent', mixBlendMode: 'normal' }}
                />
              </div>

              {/* Subtitle */}
              <p className="text-2xl md:text-3xl text-foreground font-light leading-relaxed">
                {t('hero.subtitle')}
              </p>

              {/* Description */}
              <p className="text-lg md:text-xl text-foreground-muted leading-relaxed max-w-xl">
                {t('hero.description')}
              </p>

              {/* Features Grid - Floating Glass Cards */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 items-stretch"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                {[
                  {
                    icon: Zap,
                    text: t('hero.features.fastImplementation'),
                    gradient: 'from-blue-500 to-cyan-400',
                    shadowColor: 'shadow-blue-500/25'
                  },
                  {
                    icon: Settings,
                    text: t('hero.features.customSolutions'),
                    gradient: 'from-purple-500 to-pink-400',
                    shadowColor: 'shadow-purple-500/25'
                  },
                  {
                    icon: Shield,
                    text: t('hero.features.secureReliable'),
                    gradient: 'from-emerald-500 to-teal-400',
                    shadowColor: 'shadow-emerald-500/25'
                  },
                  {
                    icon: Headset,
                    text: t('hero.features.premiumSupport'),
                    gradient: 'from-amber-500 to-orange-400',
                    shadowColor: 'shadow-amber-500/25'
                  },
                ].map((feature, i) => {
                  const IconComponent = feature.icon;
                  return (
                    <motion.div
                      key={i}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                      }}
                      className="group relative w-full"
                    >
                      {/* Animated gradient background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-xl transition-all duration-500 blur-xl`} />

                      {/* Card */}
                      <div className="relative flex items-center gap-4 p-4 rounded-xl bg-background-secondary/60 backdrop-blur-md border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1 hover:scale-[1.02] h-full">
                        {/* Icon Container with Gradient */}
                        <div className={`relative flex-shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br ${feature.gradient} shadow-lg ${feature.shadowColor} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                          {/* Pulse effect */}
                          <div className={`absolute inset-0 rounded-lg bg-gradient-to-br ${feature.gradient} animate-ping opacity-0 group-hover:opacity-20`} />
                          <IconComponent className="w-5 h-5 text-white relative z-10" strokeWidth={2.5} />
                        </div>

                        {/* Text */}
                        <span className="text-sm md:text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                          {feature.text}
                        </span>

                        {/* Shine effect on hover */}
                        <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
                          <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* CTA Buttons */}
              <div className="flex gap-4 flex-wrap pt-4">
                <Link
                  href="/contact"
                  className="group px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-primary/40 transition-all hover:scale-105 flex items-center gap-2"
                >
                  {tCommon('buttons.getStarted')}
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                  </svg>
                </Link>
                <Link
                  href="/odoo-dev"
                  className="px-8 py-4 border-2 border-primary/40 hover:border-primary text-foreground rounded-xl font-semibold hover:bg-primary/10 transition-all backdrop-blur-sm"
                >
                  {tCommon('buttons.learnMore')}
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 pt-8 border-t border-primary/20">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">10+</div>
                  <div className="text-sm text-foreground-muted">{t('hero.trustIndicators.yearsExperience')}</div>
                </div>
                <div className="w-px h-12 bg-primary/20" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-foreground-muted">{t('hero.trustIndicators.projectsDone')}</div>
                </div>
                <div className="w-px h-12 bg-primary/20" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-foreground-muted">{t('hero.trustIndicators.clientSatisfaction')}</div>
                </div>
              </div>
            </div>

            {/* Right Side - Animated Mockup */}
            <div className="hidden lg:block relative h-[600px]">
              <AnimatedMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Isometric Terminal Cards */}
      <section className="py-20 lg:py-32 relative">
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground">
              {t('services.title')}
            </h2>
            <p className="text-xl md:text-2xl text-foreground-muted max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </motion.div>

          {/* Service Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const IconComponent = service.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: [0.21, 0.45, 0.27, 0.9]
                  }}
                  className="group"
                  style={{ perspective: '1000px' }}
                >
                  <Link
                    href={service.href}
                    className="block relative h-full"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    {/* Animated gradient border - positioned absolutely behind card */}
                    <div
                      className={`absolute -inset-[2px] bg-gradient-to-r ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`}
                      style={{
                        animation: 'gradient-shift 3s ease infinite',
                        backgroundSize: '200% 200%'
                      }}
                    />

                    {/* Main card with isometric effect */}
                    <div
                      className="relative bg-background-secondary/80 backdrop-blur-md rounded-2xl overflow-hidden h-full min-h-[320px] border border-primary/10 transition-all duration-500 group-hover:border-transparent supports-[backdrop-filter]:bg-background-secondary/80 supports-no-[backdrop-filter]:bg-background-secondary"
                      style={{
                        transform: 'perspective(1000px) rotateX(2deg) rotateY(-2deg)',
                        transition: 'transform 0.5s cubic-bezier(0.21, 0.45, 0.27, 0.9)',
                        willChange: 'transform'
                      }}
                    >
                      {/* Card content */}
                      <div className="pt-8 px-6 pb-6 relative h-full flex flex-col">
                        {/* Floating icon badge */}
                        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20">
                          <div className={`relative w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-xl shadow-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`} style={{ willChange: 'transform' }}>
                            {/* Icon glow */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity`} />

                            {/* Rotating ring */}
                            <div className="absolute inset-0 rounded-xl border-2 border-white/20 group-hover:animate-spin-slow" style={{ willChange: 'transform' }} />

                            <IconComponent
                              className="w-6 h-6 text-white relative z-10"
                              strokeWidth={2}
                            />
                          </div>
                        </div>

                        {/* Text content */}
                        <div className="mt-20 flex-1 flex flex-col text-center">
                          <h3 className={`text-xl lg:text-2xl font-bold mb-3 bg-gradient-to-br ${service.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                            {service.title}
                          </h3>

                          <p className="text-sm text-foreground-muted leading-relaxed mb-4">
                            {service.description}
                          </p>

                          {/* Stats badge below text */}
                          {service.badge && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.15 + 0.3 }}
                              className="mt-auto pt-4 border-t border-primary/10"
                            >
                              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-background/95 backdrop-blur-md rounded-full border border-primary/30 shadow-lg group-hover:border-primary/50 transition-all duration-300">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                                <span className="text-xs font-bold text-primary whitespace-nowrap">
                                  {service.badge}
                                </span>
                              </div>
                            </motion.div>
                          )}
                        </div>

                        {/* Shine effect overlay */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                          <div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12"
                          />
                        </div>

                        {/* Dot pattern overlay */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                          <div
                            className="w-full h-full"
                            style={{
                              backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
                              backgroundSize: '20px 20px',
                              color:
                                service.glowColor === 'blue' ? '#448CFB' :
                                service.glowColor === 'purple' ? '#a855f7' :
                                service.glowColor === 'emerald' ? '#10b981' :
                                service.glowColor === 'sky' ? '#0ea5e9' :
                                service.glowColor === 'amber' ? '#f59e0b' :
                                service.glowColor === 'rose' ? '#f43f5e' :
                                '#448CFB'
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Add keyframes for gradient animation */}
        <style jsx>{`
          @keyframes gradient-shift {
            0%, 100% {
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
            animation: spin-slow 8s linear infinite;
          }

          /* Flatten isometric on hover - using data attribute for better specificity */
          :global(.group:hover) > a > div:nth-child(2) {
            transform: perspective(1000px) rotateX(0deg) rotateY(0deg) !important;
          }
        `}</style>
      </section>

      {/* Why Choose Us Section - Gradient Card Stack */}
      <section className="py-20 lg:py-32 relative">
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground">
              {t('whyChoose.title')}
            </h2>
            <p className="text-xl md:text-2xl text-foreground-muted max-w-2xl mx-auto">
              {t('whyChoose.subtitle')}
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              {
                icon: Users,
                title: t('whyChoose.expertTeam.title'),
                description: t('whyChoose.expertTeam.description'),
                gradient: 'from-blue-500 via-cyan-500 to-blue-600',
                glowColor: 'blue',
                stat: t('whyChoose.expertTeam.stat'),
                statLabel: t('whyChoose.expertTeam.statLabel')
              },
              {
                icon: Heart,
                title: t('whyChoose.customerFocus.title'),
                description: t('whyChoose.customerFocus.description'),
                gradient: 'from-purple-500 via-pink-500 to-purple-600',
                glowColor: 'purple',
                stat: t('whyChoose.customerFocus.stat'),
                statLabel: t('whyChoose.customerFocus.statLabel')
              },
              {
                icon: LifeBuoy,
                title: t('whyChoose.fullSupport.title'),
                description: t('whyChoose.fullSupport.description'),
                gradient: 'from-emerald-500 via-teal-500 to-emerald-600',
                glowColor: 'emerald',
                stat: t('whyChoose.fullSupport.stat'),
                statLabel: t('whyChoose.fullSupport.statLabel')
              },
              {
                icon: TrendingUp,
                title: t('whyChoose.provenResults.title'),
                description: t('whyChoose.provenResults.description'),
                gradient: 'from-amber-500 via-orange-500 to-amber-600',
                glowColor: 'amber',
                stat: t('whyChoose.provenResults.stat'),
                statLabel: t('whyChoose.provenResults.statLabel')
              }
            ].map((benefit, index) => {
              const IconComponent = benefit.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.21, 0.45, 0.27, 0.9]
                  }}
                  className="group"
                  style={{ perspective: '1000px' }}
                >
                  <div className="block relative h-full">
                    {/* Animated gradient border */}
                    <div
                      className={`absolute -inset-[2px] bg-gradient-to-r ${benefit.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`}
                      style={{
                        animation: 'gradient-shift 3s ease infinite',
                        backgroundSize: '200% 200%'
                      }}
                    />

                    {/* Main card with isometric effect */}
                    <div
                      className="relative bg-background-secondary/80 backdrop-blur-md rounded-2xl overflow-hidden h-full min-h-[280px] border border-primary/10 transition-all duration-500 group-hover:border-transparent supports-[backdrop-filter]:bg-background-secondary/80 supports-no-[backdrop-filter]:bg-background-secondary"
                      style={{
                        transform: 'perspective(1000px) rotateX(2deg) rotateY(-2deg)',
                        transition: 'transform 0.5s cubic-bezier(0.21, 0.45, 0.27, 0.9)',
                        willChange: 'transform'
                      }}
                    >
                      {/* Card content */}
                      <div className="pt-8 px-6 pb-6 relative h-full flex flex-col">
                        {/* Floating icon badge */}
                        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20">
                          <div className={`relative w-14 h-14 bg-gradient-to-br ${benefit.gradient} rounded-xl shadow-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`} style={{ willChange: 'transform' }}>
                            {/* Icon glow */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} rounded-xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity`} />

                            {/* Rotating ring */}
                            <div className="absolute inset-0 rounded-xl border-2 border-white/20 group-hover:animate-spin-slow" style={{ willChange: 'transform' }} />

                            <IconComponent
                              className="w-7 h-7 text-white relative z-10"
                              strokeWidth={2}
                            />
                          </div>
                        </div>

                        {/* Text content */}
                        <div className="mt-20 flex-1 flex flex-col text-center">
                          <h3 className={`text-xl lg:text-2xl font-bold mb-3 bg-gradient-to-br ${benefit.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                            {benefit.title}
                          </h3>

                          <p className="text-sm text-foreground-muted leading-relaxed mb-4">
                            {benefit.description}
                          </p>

                          {/* Stats badge */}
                          <div className="mt-auto pt-4 border-t border-primary/10">
                            <div className="flex items-center justify-center gap-2">
                              <div className={`text-2xl font-bold bg-gradient-to-br ${benefit.gradient} bg-clip-text text-transparent`}>
                                {benefit.stat}
                              </div>
                              <div className="text-xs text-foreground-muted">
                                {benefit.statLabel}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Shine effect overlay */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12" />
                        </div>

                        {/* Dot pattern overlay */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                          <div
                            className="w-full h-full"
                            style={{
                              backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
                              backgroundSize: '20px 20px',
                              color:
                                benefit.glowColor === 'blue' ? '#448CFB' :
                                benefit.glowColor === 'purple' ? '#a855f7' :
                                benefit.glowColor === 'emerald' ? '#10b981' :
                                benefit.glowColor === 'amber' ? '#f59e0b' :
                                '#448CFB'
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section - Split Screen with Odoo Mockup */}
      <CTASection />
    </div>
  );
}
