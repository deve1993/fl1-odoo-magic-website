'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/src/i18n/routing';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  Check, X,
  Settings, GraduationCap, Headset, RefreshCw, FileText, Database,
  Search, Wrench, Users, Rocket, AlertCircle, TrendingDown, Clock, BarChart3,
  Zap, Globe, Award, ArrowRight, ChevronDown
} from 'lucide-react';
import Image from 'next/image';
import { HeroBackground } from '@/src/components/backgrounds';

export default function OdooDevPage() {
  const t = useTranslations('odooDev');

  // Mouse parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring animation for smooth movement
  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), springConfig);

  // Extra movement for floating badges (more pronounced)
  const badgeX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);
  const badgeY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-15, 15]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    const xPct = mouseXPos / width - 0.5;
    const yPct = mouseYPos / height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div className="min-h-screen relative">
      {/* Global Unified Background */}
      <div className="fixed inset-0 z-0">
        <HeroBackground />
      </div>

      {/* Page Content */}
      <div className="relative z-10">

        {/* Hero Section - Split Screen with Visual */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-20">

              {/* Left Side - Content */}
              <div className="space-y-8">

                {/* Eyebrow Badge */}
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/40 backdrop-blur-md"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Award className="w-5 h-5 text-amber-400" />
                  <span className="text-sm font-semibold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                    {t('hero.badge')}
                  </span>
                </motion.div>

                {/* Main Title */}
                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <span className="bg-gradient-to-r from-primary via-accent to-primary-light bg-clip-text text-transparent">
                    {t('hero.title')}
                  </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  className="text-xl md:text-2xl text-foreground-muted leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {t('hero.subtitle')}
                </motion.p>

                {/* Feature Cards Grid */}
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.3
                      }
                    }
                  }}
                >
                  {[
                    {
                      icon: Zap,
                      text: t('hero.features.fastSetup'),
                      gradient: 'from-blue-500 to-cyan-400',
                      shadowColor: 'shadow-blue-500/25'
                    },
                    {
                      icon: Globe,
                      text: t('hero.features.italianSupport'),
                      gradient: 'from-emerald-500 to-teal-400',
                      shadowColor: 'shadow-emerald-500/25'
                    },
                    {
                      icon: Settings,
                      text: t('hero.features.flexiblePackages'),
                      gradient: 'from-purple-500 to-pink-400',
                      shadowColor: 'shadow-purple-500/25'
                    },
                    {
                      icon: GraduationCap,
                      text: t('hero.features.trainingIncluded'),
                      gradient: 'from-amber-500 to-orange-400',
                      shadowColor: 'shadow-amber-500/25'
                    }
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3 p-4 rounded-xl bg-background-secondary/60 backdrop-blur-md border border-primary/20 hover:border-primary/40 transition-all duration-300 group"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                      }}
                    >
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${feature.gradient} p-2 flex items-center justify-center ${feature.shadowColor} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-sm md:text-base text-foreground font-medium">
                        {feature.text}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  {/* Primary CTA */}
                  <Link
                    href="/contact"
                    className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold text-lg shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/60 transition-all duration-300 hover:scale-105"
                  >
                    {t('hero.cta.primary')}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>

                  {/* Secondary CTA - Scroll to pricing */}
                  <button
                    onClick={() => {
                      const pricingSection = document.getElementById('pricing-section');
                      pricingSection?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-background-secondary/80 backdrop-blur-md border border-primary/30 text-foreground font-semibold text-lg hover:border-primary/60 hover:bg-background-secondary transition-all duration-300"
                  >
                    {t('hero.cta.secondary')}
                    <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
                  </button>
                </motion.div>

                {/* Trust Indicators Bar */}
                <motion.div
                  className="flex flex-wrap items-center gap-6 pt-8 border-t border-primary/10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    <span className="text-sm text-foreground-muted">{t('hero.trust.partner')}</span>
                  </div>
                  <div className="w-px h-6 bg-primary/20" />
                  <div className="flex items-center gap-2">
                    <Database className="w-5 h-5 text-primary" />
                    <span className="text-sm text-foreground-muted">{t('hero.trust.projects')}</span>
                  </div>
                  <div className="w-px h-6 bg-primary/20" />
                  <div className="flex items-center gap-2">
                    <Headset className="w-5 h-5 text-primary" />
                    <span className="text-sm text-foreground-muted">{t('hero.trust.support')}</span>
                  </div>
                </motion.div>
              </div>

              {/* Right Side - Visual Mockup */}
              <motion.div
                className="relative lg:block hidden"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                {/* Main Mockup Container with Interactive Parallax Effect */}
                <div
                  className="relative"
                  style={{
                    perspective: '1000px'
                  }}
                >
                  {/* Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary-light/20 blur-3xl rounded-3xl -z-10"
                    style={{
                      rotateX,
                      rotateY,
                      transformStyle: 'preserve-3d'
                    }}
                  />

                  {/* Mockup Image */}
                  <motion.div
                    className="relative rounded-2xl overflow-hidden border border-primary/20 backdrop-blur-md bg-background-secondary/40 shadow-2xl z-0"
                    style={{
                      rotateX,
                      rotateY,
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    <Image
                      src="/images/odoo main.svg"
                      alt="Odoo Dashboard"
                      width={600}
                      height={400}
                      className="w-full h-auto"
                      priority
                    />
                  </motion.div>

                  {/* Floating Stats Badges with Enhanced Parallax - Outside 3D context */}
                  <motion.div
                    className="absolute -top-6 -right-6 px-6 py-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/50 z-50"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    style={{
                      x: badgeX,
                      y: badgeY
                    }}
                  >
                    <div className="text-2xl font-bold">10+</div>
                    <div className="text-xs opacity-90">{t('hero.stats.years')}</div>
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-6 -left-6 px-6 py-3 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/50 z-50"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    style={{
                      x: useSpring(useTransform(mouseX, [-0.5, 0.5], [-20, 20]), springConfig),
                      y: useSpring(useTransform(mouseY, [-0.5, 0.5], [-20, 20]), springConfig)
                    }}
                  >
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-xs opacity-90">{t('hero.stats.satisfaction')}</div>
                  </motion.div>

                  <motion.div
                    className="absolute top-1/2 -right-8 px-6 py-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50 z-50"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    style={{
                      x: useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig),
                      y: useSpring(useTransform(mouseY, [-0.5, 0.5], [-10, 10]), springConfig)
                    }}
                  >
                    <div className="text-2xl font-bold">50+</div>
                    <div className="text-xs opacity-90">{t('hero.stats.projects')}</div>
                  </motion.div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Title + Subtitle */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-3">
                  {t('painPoints.title')}
                </h2>
                <p className="text-lg text-foreground-muted">
                  {t('painPoints.subtitle')}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: AlertCircle,
                    text: t('painPoints.scattered'),
                    color: 'from-red-500 to-orange-500',
                    borderColor: 'border-red-500/40 hover:border-red-500/70',
                    shadowColor: 'hover:shadow-red-500/30',
                    glowColor: 'group-hover:shadow-red-500/50'
                  },
                  {
                    icon: Clock,
                    text: t('painPoints.manual'),
                    color: 'from-amber-500 to-yellow-500',
                    borderColor: 'border-amber-500/40 hover:border-amber-500/70',
                    shadowColor: 'hover:shadow-amber-500/30',
                    glowColor: 'group-hover:shadow-amber-500/50'
                  },
                  {
                    icon: TrendingDown,
                    text: t('painPoints.noVisibility'),
                    color: 'from-purple-500 to-pink-500',
                    borderColor: 'border-purple-500/40 hover:border-purple-500/70',
                    shadowColor: 'hover:shadow-purple-500/30',
                    glowColor: 'group-hover:shadow-purple-500/50'
                  },
                  {
                    icon: BarChart3,
                    text: t('painPoints.hardToScale'),
                    color: 'from-blue-500 to-cyan-500',
                    borderColor: 'border-blue-500/40 hover:border-blue-500/70',
                    shadowColor: 'hover:shadow-blue-500/30',
                    glowColor: 'group-hover:shadow-blue-500/50'
                  }
                ].map((pain, index) => (
                  <motion.div
                    key={index}
                    className={`group flex items-center gap-4 p-5 rounded-xl bg-background-secondary/60 backdrop-blur-md border ${pain.borderColor} transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${pain.shadowColor} cursor-default`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className={`flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br ${pain.color} flex items-center justify-center shadow-lg ${pain.glowColor} transition-shadow duration-300`}>
                      <pain.icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-foreground font-medium">{pain.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing-section" className="py-20 lg:py-32 relative">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                {t('pricing.title')}
              </h2>
              <p className="text-xl text-foreground-muted">
                {t('pricing.subtitle')}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

              {/* Standard Package */}
              <motion.div
                className="group relative"
                style={{ perspective: '1000px' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative bg-background-secondary/80 backdrop-blur-md rounded-2xl p-8 border border-primary/20 h-full flex flex-col">
                  {/* Badge */}
                  <div className="mb-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 rounded-full border border-blue-500/30">
                      <span className="text-sm font-semibold text-blue-400">{t('pricing.standard.badge')}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-2">{t('pricing.standard.name')}</h3>
                  <div className="text-4xl font-bold text-primary mb-4">{t('pricing.standard.price')}</div>
                  <p className="text-sm text-foreground-muted mb-6">{t('pricing.standard.ideal')}</p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-grow">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{t('pricing.standard.features.module')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{t('pricing.standard.features.setup')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{t('pricing.standard.features.support')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{t('pricing.standard.features.training')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{t('pricing.standard.features.docs')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{t('pricing.standard.features.updates')}</span>
                    </li>
                  </ul>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className="block w-full text-center px-6 py-3 border-2 border-primary/40 hover:border-primary text-foreground rounded-xl font-semibold hover:bg-primary/10 transition-all mt-auto"
                  >
                    {t('pricing.standard.cta')}
                  </Link>
                </div>
              </motion.div>

              {/* Maxi Package - Highlighted */}
              <motion.div
                className="group relative"
                style={{ perspective: '1000px' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Animated gradient border */}
                <div className="absolute -inset-[2px] bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-600 rounded-2xl opacity-75 blur-sm" />

                <div className="relative bg-gradient-to-br from-primary/10 to-background-secondary backdrop-blur-md rounded-2xl p-8 border border-transparent h-full transform md:scale-105">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-4">
                    <span className="text-sm font-bold text-white">{t('pricing.maxi.badge')}</span>
                  </div>

                  <h3 className="text-2xl font-bold mb-2">{t('pricing.maxi.name')}</h3>
                  <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
                    {t('pricing.maxi.price')}
                  </div>
                  <p className="text-sm text-foreground-muted mb-6">{t('pricing.maxi.ideal')}</p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-semibold">{t('pricing.maxi.features.everything')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{t('pricing.maxi.features.customModules')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{t('pricing.maxi.features.extendedSupport')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{t('pricing.maxi.features.advancedTraining')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{t('pricing.maxi.features.integrations')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{t('pricing.maxi.features.prioritySupport')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{t('pricing.maxi.features.extendedDocs')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{t('pricing.maxi.features.extendedUpdates')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{t('pricing.maxi.features.optimization')}</span>
                    </li>
                  </ul>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className="block w-full text-center px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-primary/40 transition-all hover:scale-105"
                  >
                    {t('pricing.maxi.cta')}
                  </Link>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4 relative z-10">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {t('comparison.title')}
            </motion.h2>

            <motion.div
              className="max-w-4xl mx-auto overflow-x-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-primary/20">
                    <th className="text-left p-4 font-semibold">{t('comparison.features')}</th>
                    <th className="text-center p-4 font-semibold">Standard</th>
                    <th className="text-center p-4 font-semibold bg-primary/10">Maxi ⭐</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: t('comparison.customModules'), standard: false, maxi: '2' },
                    { label: t('comparison.supportHours'), standard: '10h', maxi: '30h' },
                    { label: t('comparison.training'), standard: '4h', maxi: '10h' },
                    { label: t('comparison.apiIntegrations'), standard: false, maxi: '2' },
                    { label: t('comparison.prioritySupport'), standard: false, maxi: true },
                    { label: t('comparison.updates'), standard: '3 months', maxi: '6 months' },
                    { label: t('comparison.optimization'), standard: false, maxi: true }
                  ].map((row, index) => (
                    <tr key={index} className={`border-b border-primary/10 ${index % 2 === 0 ? 'bg-background-secondary/30' : ''}`}>
                      <td className="p-4 text-sm">{row.label}</td>
                      <td className="p-4 text-center">
                        {row.standard === true ? (
                          <Check className="w-5 h-5 text-green-500 mx-auto" />
                        ) : row.standard === false ? (
                          <X className="w-5 h-5 text-red-500/50 mx-auto" />
                        ) : (
                          <span className="text-sm">{row.standard}</span>
                        )}
                      </td>
                      <td className="p-4 text-center bg-primary/5">
                        {row.maxi === true ? (
                          <Check className="w-5 h-5 text-green-500 mx-auto" />
                        ) : row.maxi === false ? (
                          <X className="w-5 h-5 text-red-500/50 mx-auto" />
                        ) : (
                          <span className="text-sm font-semibold">{row.maxi}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-20 lg:py-32 relative">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {t('included.title')}
              </h2>
              <p className="text-xl text-foreground-muted">
                {t('included.subtitle')}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
              {[
                { icon: Settings, title: t('included.setup.title'), desc: t('included.setup.description'), gradient: 'from-blue-500 to-cyan-500' },
                { icon: GraduationCap, title: t('included.training.title'), desc: t('included.training.description'), gradient: 'from-purple-500 to-pink-500' },
                { icon: Headset, title: t('included.support.title'), desc: t('included.support.description'), gradient: 'from-emerald-500 to-teal-500' },
                { icon: RefreshCw, title: t('included.updates.title'), desc: t('included.updates.description'), gradient: 'from-amber-500 to-orange-500' },
                { icon: FileText, title: t('included.docs.title'), desc: t('included.docs.description'), gradient: 'from-rose-500 to-fuchsia-500' },
                { icon: Database, title: t('included.migration.title'), desc: t('included.migration.description'), gradient: 'from-sky-500 to-indigo-500' }
              ].map((item, index) => {
                const IconComponent = item.icon;

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
                    <div className="block relative h-full">
                      {/* Animated gradient border */}
                      <div
                        className={`absolute -inset-[2px] bg-gradient-to-r ${item.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`}
                        style={{
                          animation: 'gradient-shift 3s ease infinite',
                          backgroundSize: '200% 200%'
                        }}
                      />

                      {/* Main card with isometric effect */}
                      <div
                        className="relative bg-background-secondary/80 backdrop-blur-md rounded-2xl overflow-hidden h-full min-h-[300px] border border-primary/10 transition-all duration-500 group-hover:border-transparent"
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
                            <div className={`relative w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl shadow-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                              {/* Icon glow */}
                              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity`} />

                              {/* Rotating ring */}
                              <div className="absolute inset-0 rounded-xl border-2 border-white/20 group-hover:animate-spin-slow" />

                              <IconComponent
                                className="w-6 h-6 text-white relative z-10"
                                strokeWidth={2}
                              />
                            </div>
                          </div>

                          {/* Text content */}
                          <div className="mt-20 flex-1 flex flex-col text-center">
                            <h3 className={`text-xl lg:text-2xl font-bold mb-3 bg-gradient-to-br ${item.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                              {item.title}
                            </h3>

                            <p className="text-sm text-foreground-muted leading-relaxed">
                              {item.desc}
                            </p>
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
                                backgroundSize: '20px 20px'
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

        {/* Process Timeline */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {t('process.title')}
              </h2>
              <p className="text-xl text-foreground-muted">
                {t('process.subtitle')}
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8 md:gap-6">
                {[
                  {
                    icon: Search,
                    title: t('process.discovery.title'),
                    desc: t('process.discovery.description'),
                    number: '01',
                    gradient: 'from-blue-500 to-cyan-500',
                    shadowColor: 'blue-500'
                  },
                  {
                    icon: Wrench,
                    title: t('process.setup.title'),
                    desc: t('process.setup.description'),
                    number: '02',
                    gradient: 'from-purple-500 to-pink-500',
                    shadowColor: 'purple-500'
                  },
                  {
                    icon: Users,
                    title: t('process.training.title'),
                    desc: t('process.training.description'),
                    number: '03',
                    gradient: 'from-emerald-500 to-teal-500',
                    shadowColor: 'emerald-500'
                  },
                  {
                    icon: Rocket,
                    title: t('process.golive.title'),
                    desc: t('process.golive.description'),
                    number: '04',
                    gradient: 'from-amber-500 to-orange-500',
                    shadowColor: 'amber-500'
                  }
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    className="group relative text-center cursor-default"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                  >
                    {/* Enhanced Connector line (except last) */}
                    {index < 3 && (
                      <div className="hidden md:block absolute top-16 left-1/2 w-full h-1 z-0 overflow-hidden">
                        <div className={`h-full bg-gradient-to-r ${step.gradient} opacity-30`} />
                      </div>
                    )}

                    <div className="relative z-10 mb-4">
                      {/* Icon Circle with Gradient & Glow */}
                      <div className={`w-36 h-36 mx-auto rounded-full bg-gradient-to-br ${step.gradient} bg-opacity-20 backdrop-blur-md border-2 border-${step.shadowColor}/50 flex items-center justify-center shadow-lg shadow-${step.shadowColor}/30 group-hover:shadow-xl group-hover:shadow-${step.shadowColor}/50 transition-all duration-300 relative overflow-hidden`}>
                        {/* Glow effect */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full`} />

                        {/* Icon with pulse effect */}
                        <step.icon className="w-16 h-16 text-white relative z-10 transition-transform duration-300 group-hover:scale-110" strokeWidth={2} />
                      </div>

                      {/* Number Badge - Enhanced */}
                      <div className={`absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white font-bold text-base shadow-lg shadow-${step.shadowColor}/50 group-hover:scale-110 transition-transform duration-300`}>
                        {step.number}
                      </div>
                    </div>

                    <h3 className={`font-bold mb-2 text-lg bg-gradient-to-br ${step.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                      {step.title}
                    </h3>
                    <p className="text-sm text-foreground-muted leading-relaxed">
                      {step.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA - Enhanced */}
        <section className="py-20 lg:py-32 relative">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="max-w-3xl mx-auto text-center relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Animated Gradient Border */}
              <div
                className="absolute -inset-[2px] bg-gradient-to-r from-primary via-accent to-primary rounded-3xl opacity-50 blur-sm"
                style={{
                  animation: 'gradient-shift 3s ease infinite',
                  backgroundSize: '200% 100%'
                }}
              />

              {/* Main Card */}
              <div className="relative bg-background-secondary/40 backdrop-blur-xl rounded-3xl p-12 border border-primary/30">

                {/* Urgency Badge */}
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <span className="text-xl">🔥</span>
                  <span className="text-sm font-bold text-foreground">
                    {t('finalCta.urgency')}
                  </span>
                </motion.div>

                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  {t('finalCta.title')}
                </h2>

                {/* Subtitle */}
                <p className="text-xl text-foreground-muted mb-8">
                  {t('finalCta.subtitle')}
                </p>

                {/* CTA Button with Enhanced Icon */}
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-primary/40 transition-all hover:scale-105"
                >
                  {t('finalCta.button')}
                  <Rocket className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </Link>

                {/* Trust Indicators */}
                <motion.div
                  className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-8 text-sm"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-foreground-muted">{t('finalCta.trust.free')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-foreground-muted">{t('finalCta.trust.noCommitment')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-green-500" />
                    <span className="text-foreground-muted">{t('finalCta.trust.response')}</span>
                  </div>
                </motion.div>

                {/* Secondary Contact Option */}
                <motion.p
                  className="text-sm text-foreground-muted mt-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  {t('finalCta.alternative')}{' '}
                  <a
                    href="tel:+393287219703"
                    className="text-primary hover:underline font-semibold transition-colors"
                  >
                    +39 328 721 9703
                  </a>
                </motion.p>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </div>
  );
}
