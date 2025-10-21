'use client';

import { useTranslations } from 'next-intl';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight,
  Heart,
  Target,
  Lightbulb,
  Users,
  Award,
  TrendingUp,
  Clock,
  CheckCircle2,
  Rocket,
  Shield,
  Zap,
  LucideIcon
} from 'lucide-react';
import { Highlight } from '@/src/components/ui/hero-highlight';
import { HeroBackground } from '@/src/components/backgrounds';
import Image from 'next/image';
import React from 'react';

// TypeScript interfaces
interface TranslationFunction {
  (key: string): string;
}

interface ValueItem {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
}

export default function AboutPage() {
  const t = useTranslations('about');

  return (
    <main className="min-h-screen relative">
      {/* Global Unified Background */}
      <div className="fixed inset-0 z-0">
        <HeroBackground />
      </div>

      {/* Hero Section */}
      <HeroSection t={t} />

      {/* Our Story Timeline */}
      <OurStorySection t={t} />

      {/* Our Values */}
      <OurValuesSection t={t} />

      {/* Team Section */}
      <TeamSection t={t} />

      {/* Numbers & Achievements */}
      <NumbersSection t={t} />

      {/* Final CTA */}
      <FinalCTASection t={t} />
    </main>
  );
}

// Hero Section
function HeroSection({ t }: { t: TranslationFunction }) {
  return (
    <section className="relative z-10 min-h-[90vh] flex items-center justify-center py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo - Float Animation */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block"
            >
              <Image
                src="/images/FL1 _ Odoo Magic.svg"
                alt="FL1 Logo"
                width={80}
                height={80}
                priority
              />
            </motion.div>
          </motion.div>

          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 backdrop-blur-sm mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Heart className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium">{t('hero.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            {t('hero.title.start')}{' '}
            <Highlight>{t('hero.title.highlight')}</Highlight>
          </h1>

          <p className="text-xl md:text-2xl text-foreground-muted leading-relaxed mb-8 max-w-3xl mx-auto">
            {t('hero.subtitle')}
          </p>

          <p className="text-lg text-foreground-muted max-w-2xl mx-auto mb-10">
            {t('hero.description')}
          </p>

          {/* Trust Indicators */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-8 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <motion.div
              className="flex items-center gap-2 cursor-default"
              whileHover={{ scale: 1.1, z: 50 }}
              transition={{ duration: 0.3 }}
            >
              <Clock className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-semibold">10+ {t('hero.trust.years')}</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2 cursor-default"
              whileHover={{ scale: 1.1, z: 50 }}
              transition={{ duration: 0.3 }}
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span className="text-sm font-semibold">50+ {t('hero.trust.projects')}</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2 cursor-default"
              whileHover={{ scale: 1.1, z: 50 }}
              transition={{ duration: 0.3 }}
            >
              <Heart className="w-5 h-5 text-pink-400" />
              <span className="text-sm font-semibold">100% {t('hero.trust.satisfaction')}</span>
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Link
              href="/odoo-dev"
              className="relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-cyan-600 hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 overflow-hidden group"
            >
              <span className="relative z-10">{t('hero.cta.services')}</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />

              {/* Shine effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </Link>

            <div className="relative group hover:scale-105 transition-transform duration-300">
              {/* Gradient ring - visible only on hover */}
              <div className="absolute -inset-[2px] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <Link
                href="/contact"
                className="relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-background-secondary backdrop-blur-md text-foreground rounded-xl font-semibold text-lg border border-white/10 group-hover:border-transparent transition-all duration-300"
              >
                {t('hero.cta.contact')}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Our Story Timeline Section
function OurStorySection({ t }: { t: TranslationFunction }) {
  const milestones = [
    {
      year: '2015',
      title: t('story.milestone1.title'),
      description: t('story.milestone1.description'),
      gradient: 'from-blue-500 to-cyan-500',
      icon: Rocket
    },
    {
      year: '2018',
      title: t('story.milestone2.title'),
      description: t('story.milestone2.description'),
      gradient: 'from-purple-500 to-pink-500',
      icon: Award
    },
    {
      year: '2020',
      title: t('story.milestone3.title'),
      description: t('story.milestone3.description'),
      gradient: 'from-emerald-500 to-teal-500',
      icon: Users
    },
    {
      year: '2024',
      title: t('story.milestone4.title'),
      description: t('story.milestone4.description'),
      gradient: 'from-orange-500 to-red-500',
      icon: TrendingUp
    }
  ];

  return (
    <section className="relative z-10 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('story.title.start')}{' '}
            <Highlight>{t('story.title.highlight')}</Highlight>
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            {t('story.subtitle')}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              className="relative flex gap-8 mb-12 last:mb-0"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Timeline line */}
              {index !== milestones.length - 1 && (
                <div className="absolute left-[50px] top-[80px] w-[2px] h-full bg-gradient-to-b from-primary/50 to-transparent" />
              )}

              {/* Year badge */}
              <div className="relative">
                <motion.div
                  className={`w-24 h-24 rounded-full bg-gradient-to-br ${milestone.gradient} flex items-center justify-center shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <milestone.icon className="w-10 h-10 text-white" />
                </motion.div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-background-secondary border border-primary/20 backdrop-blur-sm">
                  <span className="text-sm font-bold text-primary">{milestone.year}</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 group">
                <div className="relative">
                  {/* Gradient border - visible only on hover */}
                  <div className={`absolute -inset-[2px] bg-gradient-to-r ${milestone.gradient} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />

                  <div className="relative bg-background-secondary/80 backdrop-blur-md rounded-xl p-6 border border-primary/20 group-hover:border-transparent transition-all duration-500">
                    <h3 className="text-2xl font-bold mb-2 text-foreground">{milestone.title}</h3>
                    <p className="text-foreground-muted">{milestone.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Our Values Section
function OurValuesSection({ t }: { t: TranslationFunction }) {
  const values = [
    {
      icon: Lightbulb,
      title: t('values.innovation.title'),
      description: t('values.innovation.description'),
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: t('values.quality.title'),
      description: t('values.quality.description'),
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Heart,
      title: t('values.transparency.title'),
      description: t('values.transparency.description'),
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Target,
      title: t('values.customer.title'),
      description: t('values.customer.description'),
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="relative z-10 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('values.title.start')}{' '}
            <Highlight>{t('values.title.highlight')}</Highlight>
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            {t('values.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <ValueCard key={index} value={value} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ValueCard({ value, index }: { value: ValueItem; index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 150, mass: 1 };

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);

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
    <div
      className="group"
      style={{ perspective: '1000px' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="block relative h-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d'
        }}
      >
        <div className="relative bg-background-secondary/80 backdrop-blur-md rounded-2xl overflow-hidden h-full min-h-[280px] border border-white/10 transition-all duration-500 group-hover:border-white/20">
          {/* Dot pattern overlay */}
          <div className="absolute inset-0 opacity-5 transition-opacity duration-500 pointer-events-none">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}
            />
          </div>

          <div className="p-8 relative h-full flex flex-col">
            <motion.div
              className={`w-16 h-16 rounded-full bg-gradient-to-br ${value.gradient} flex items-center justify-center shadow-lg mb-6`}
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <value.icon className="w-8 h-8 text-white" />
            </motion.div>

            <h3 className={`text-2xl font-bold mb-3 bg-gradient-to-br ${value.gradient} bg-clip-text text-transparent`}>
              {value.title}
            </h3>

            <p className="text-foreground-muted leading-relaxed flex-1">
              {value.description}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Team Section
function TeamSection({ t }: { t: TranslationFunction }) {
  const team = [
    {
      name: t('team.member1.name'),
      role: t('team.member1.role'),
      description: t('team.member1.description'),
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: t('team.member2.name'),
      role: t('team.member2.role'),
      description: t('team.member2.description'),
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      name: t('team.member3.name'),
      role: t('team.member3.role'),
      description: t('team.member3.description'),
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      name: t('team.member4.name'),
      role: t('team.member4.role'),
      description: t('team.member4.description'),
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="relative z-10 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('team.title.start')}{' '}
            <Highlight>{t('team.title.highlight')}</Highlight>
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            {t('team.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="group h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="relative h-full min-h-[320px] bg-background-secondary/80 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500">
                {/* Dot pattern */}
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
                      backgroundSize: '20px 20px'
                    }}
                  />
                </div>

                <div className="p-6 relative h-full flex flex-col">
                  {/* Avatar placeholder with gradient */}
                  <div className={`w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center shadow-lg`}>
                    <Users className="w-12 h-12 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-center mb-1">{member.name}</h3>
                  <p className={`text-sm text-center mb-3 bg-gradient-to-br ${member.gradient} bg-clip-text text-transparent font-semibold`}>
                    {member.role}
                  </p>
                  <p className="text-sm text-foreground-muted text-center leading-relaxed flex-1">
                    {member.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Numbers & Achievements Section
function NumbersSection({ t }: { t: TranslationFunction }) {
  const stats = [
    {
      number: '50+',
      label: t('numbers.projects'),
      icon: CheckCircle2,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      number: '10+',
      label: t('numbers.years'),
      icon: Clock,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      number: '1000+',
      label: t('numbers.downloads'),
      icon: TrendingUp,
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      number: '100%',
      label: t('numbers.satisfaction'),
      icon: Heart,
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="relative z-10 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('numbers.title.start')}{' '}
            <Highlight>{t('numbers.title.highlight')}</Highlight>
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            {t('numbers.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center cursor-default"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1, z: 50 }}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-lg`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className={`text-5xl font-bold mb-2 bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent`}>
                {stat.number}
              </h3>
              <p className="text-foreground-muted font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Final CTA Section
function FinalCTASection({ t }: { t: TranslationFunction }) {
  return (
    <section className="relative z-10 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center"
          >
            <Zap className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-none">
            {t('cta.title.start')}{' '}
            <Highlight>{t('cta.title.highlight')}</Highlight>
          </h2>

          <p className="text-xl text-foreground-muted mb-8">
            {t('cta.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-cyan-600 hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 overflow-hidden group"
            >
              <span className="relative z-10">{t('cta.contact')}</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />

              {/* Shine effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </Link>

            <div className="relative group hover:scale-105 transition-transform duration-300">
              {/* Gradient ring - visible only on hover */}
              <div className="absolute -inset-[2px] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <Link
                href="/odoo-dev"
                className="relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-background-secondary backdrop-blur-md text-foreground rounded-xl font-semibold text-lg border border-white/10 group-hover:border-transparent transition-all duration-300"
              >
                {t('cta.services')}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
