'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  MessageCircle,
  Bot,
  Zap,
  Shield,
  CheckCircle2,
  ArrowRight,
  Instagram,
  Facebook,
  Mail,
  Send,
  TrendingUp,
  Users,
  BarChart3,
  Sparkles,
  Settings,
  Globe,
  Smartphone,
  Clock,
  Target,
  LucideIcon
} from 'lucide-react';
import { Highlight } from '@/src/components/ui/hero-highlight';
import { HeroBackground } from '@/src/components/backgrounds';

// TypeScript interfaces
interface TranslationFunction {
  (key: string): string;
}

interface BenefitItem {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
}

interface ChannelItem {
  name: string;
  icon: LucideIcon;
  color: string;
}

interface UseCaseItem {
  title: string;
  category: string;
  description: string;
  gradient: string;
  features: string[];
}

interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function SuperChatPage() {
  const t = useTranslations('superChat');

  return (
    <main className="min-h-screen relative">
      {/* Global Unified Background */}
      <div className="fixed inset-0 z-0">
        <HeroBackground />
      </div>

      {/* Hero Section */}
      <HeroSection t={t} />

      {/* What is SuperChat */}
      <WhatIsSection t={t} />

      {/* Integration Benefits */}
      <BenefitsSection t={t} />

      {/* Supported Channels */}
      <ChannelsSection t={t} />

      {/* How It Works */}
      <ProcessSection t={t} />

      {/* Use Cases */}
      <UseCasesSection t={t} />

      {/* Pricing Packages */}
      <PricingSection t={t} />

      {/* Technical Features */}
      <TechnicalFeaturesSection t={t} />

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
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 backdrop-blur-sm mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <MessageCircle className="w-4 h-4 text-green-400" />
            <span className="text-sm font-medium">{t('hero.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            {t('hero.title.start')}{' '}
            <Highlight>{t('hero.title.highlight')}</Highlight>
          </h1>

          <p className="text-xl md:text-2xl text-foreground-muted leading-relaxed mb-8 max-w-3xl mx-auto">
            {t('hero.subtitle')}
          </p>

          {/* Trust Indicators */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {[
              { icon: MessageCircle, text: t('hero.features.whatsapp') },
              { icon: Bot, text: t('hero.features.ai') },
              { icon: Zap, text: t('hero.features.unified') },
              { icon: Shield, text: t('hero.features.gdpr') }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-background-secondary/60 backdrop-blur-md rounded-full border border-white/10"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <feature.icon className="w-4 h-4 text-green-400" />
                <span className="text-sm font-medium">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Link
              href="/contact"
              className="relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold text-lg hover:from-green-600 hover:to-emerald-600 hover:shadow-xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 overflow-hidden group"
            >
              <span className="relative z-10">{t('hero.cta.primary')}</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />

              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </Link>

            <div className="relative group hover:scale-105 transition-transform duration-300">
              <div className="absolute -inset-[2px] bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Link
                href="#pricing"
                className="relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-background-secondary backdrop-blur-md text-foreground rounded-xl font-semibold text-lg border border-white/10 group-hover:border-transparent transition-all duration-300"
              >
                {t('hero.cta.secondary')}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// What is SuperChat Section
function WhatIsSection({ t }: { t: TranslationFunction }) {
  return (
    <section className="relative z-10 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('whatis.title.start')}{' '}
              <Highlight>{t('whatis.title.highlight')}</Highlight>
            </h2>
            <p className="text-xl text-foreground-muted leading-relaxed mb-8">
              {t('whatis.description')}
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {[
              { number: '90%', label: t('whatis.stats.openrate'), gradient: 'from-green-500 to-emerald-500' },
              { number: '80%', label: t('whatis.stats.automated'), gradient: 'from-blue-500 to-cyan-500' },
              { number: '6000+', label: t('whatis.stats.integrations'), gradient: 'from-purple-500 to-pink-500' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-background-secondary/60 backdrop-blur-md rounded-2xl border border-white/10"
                whileHover={{ y: -8, borderColor: 'rgba(255,255,255,0.2)' }}
                transition={{ duration: 0.3 }}
              >
                <h3 className={`text-5xl font-bold mb-2 bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent`}>
                  {stat.number}
                </h3>
                <p className="text-foreground-muted">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Integration Benefits Section
function BenefitsSection({ t }: { t: TranslationFunction }) {
  const benefits: BenefitItem[] = [
    {
      icon: Zap,
      title: t('benefits.unified.title'),
      description: t('benefits.unified.description'),
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Bot,
      title: t('benefits.ai.title'),
      description: t('benefits.ai.description'),
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: TrendingUp,
      title: t('benefits.journey.title'),
      description: t('benefits.journey.description'),
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: t('benefits.team.title'),
      description: t('benefits.team.description'),
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: BarChart3,
      title: t('benefits.analytics.title'),
      description: t('benefits.analytics.description'),
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Globe,
      title: t('benefits.multichannel.title'),
      description: t('benefits.multichannel.description'),
      gradient: 'from-pink-500 to-rose-500'
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
            {t('benefits.title.start')}{' '}
            <Highlight>{t('benefits.title.highlight')}</Highlight>
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            {t('benefits.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="relative h-full bg-background-secondary/80 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500">
                {/* Dot pattern */}
                <div className="absolute inset-0 opacity-5 pointer-events-none rounded-2xl overflow-hidden">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
                      backgroundSize: '20px 20px'
                    }}
                  />
                </div>

                <div className="relative">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-foreground-muted leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Supported Channels Section
function ChannelsSection({ t }: { t: TranslationFunction }) {
  const channels: ChannelItem[] = [
    { name: 'WhatsApp', icon: MessageCircle, color: 'from-green-500 to-emerald-500' },
    { name: 'Instagram', icon: Instagram, color: 'from-pink-500 to-purple-500' },
    { name: 'Facebook', icon: Facebook, color: 'from-blue-500 to-cyan-500' },
    { name: 'Email', icon: Mail, color: 'from-orange-500 to-red-500' },
    { name: 'Telegram', icon: Send, color: 'from-blue-400 to-sky-500' },
    { name: 'Live Chat', icon: MessageCircle, color: 'from-indigo-500 to-purple-500' }
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
            {t('channels.title.start')}{' '}
            <Highlight>{t('channels.title.highlight')}</Highlight>
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            {t('channels.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {channels.map((channel, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="relative bg-background-secondary/80 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className={`w-16 h-16 mx-auto mb-3 rounded-xl bg-gradient-to-br ${channel.color} flex items-center justify-center shadow-lg`}>
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-center font-semibold text-sm">{channel.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// How It Works Process Section
function ProcessSection({ t }: { t: TranslationFunction }) {
  const steps: ProcessStep[] = [
    {
      step: '1',
      title: t('process.step1.title'),
      description: t('process.step1.description'),
      icon: Settings
    },
    {
      step: '2',
      title: t('process.step2.title'),
      description: t('process.step2.description'),
      icon: Zap
    },
    {
      step: '3',
      title: t('process.step3.title'),
      description: t('process.step3.description'),
      icon: Bot
    },
    {
      step: '4',
      title: t('process.step4.title'),
      description: t('process.step4.description'),
      icon: Users
    },
    {
      step: '5',
      title: t('process.step5.title'),
      description: t('process.step5.description'),
      icon: Sparkles
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
            {t('process.title.start')}{' '}
            <Highlight>{t('process.title.highlight')}</Highlight>
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            {t('process.subtitle')}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative flex gap-6 mb-8 last:mb-0"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Timeline line */}
              {index !== steps.length - 1 && (
                <div className="absolute left-[30px] top-[70px] w-[2px] h-[calc(100%+2rem)] bg-gradient-to-b from-green-500/50 to-transparent" />
              )}

              {/* Step number */}
              <div className="relative">
                <div className="w-[60px] h-[60px] rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg">
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-background-secondary border border-green-500/20 backdrop-blur-sm">
                  <span className="text-xs font-bold text-green-400">{step.step}</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pb-8">
                <div className="bg-background-secondary/80 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-foreground-muted">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Use Cases Section
function UseCasesSection({ t }: { t: TranslationFunction }) {
  const useCases: UseCaseItem[] = [
    {
      title: t('usecases.ecommerce.title'),
      category: t('usecases.ecommerce.category'),
      description: t('usecases.ecommerce.description'),
      gradient: 'from-blue-500 to-cyan-500',
      features: [
        t('usecases.ecommerce.feature1'),
        t('usecases.ecommerce.feature2'),
        t('usecases.ecommerce.feature3')
      ]
    },
    {
      title: t('usecases.service.title'),
      category: t('usecases.service.category'),
      description: t('usecases.service.description'),
      gradient: 'from-purple-500 to-pink-500',
      features: [
        t('usecases.service.feature1'),
        t('usecases.service.feature2'),
        t('usecases.service.feature3')
      ]
    },
    {
      title: t('usecases.b2b.title'),
      category: t('usecases.b2b.category'),
      description: t('usecases.b2b.description'),
      gradient: 'from-emerald-500 to-teal-500',
      features: [
        t('usecases.b2b.feature1'),
        t('usecases.b2b.feature2'),
        t('usecases.b2b.feature3')
      ]
    },
    {
      title: t('usecases.support.title'),
      category: t('usecases.support.category'),
      description: t('usecases.support.description'),
      gradient: 'from-orange-500 to-red-500',
      features: [
        t('usecases.support.feature1'),
        t('usecases.support.feature2'),
        t('usecases.support.feature3')
      ]
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
            {t('usecases.title.start')}{' '}
            <Highlight>{t('usecases.title.highlight')}</Highlight>
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            {t('usecases.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="relative h-full bg-background-secondary/80 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500">
                {/* Gradient glow on hover */}
                <div className={`absolute -inset-[2px] bg-gradient-to-br ${useCase.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />

                <div className="relative">
                  <span className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${useCase.gradient} text-white text-xs font-semibold mb-4`}>
                    {useCase.category}
                  </span>
                  <h3 className="text-2xl font-bold mb-3">{useCase.title}</h3>
                  <p className="text-foreground-muted mb-4">{useCase.description}</p>

                  <ul className="space-y-2">
                    {useCase.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className={`w-5 h-5 mt-0.5 bg-gradient-to-r ${useCase.gradient} bg-clip-text text-transparent flex-shrink-0`} />
                        <span className="text-sm text-foreground-muted">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Pricing Section
function PricingSection({ t }: { t: TranslationFunction }) {
  return (
    <section id="pricing" className="relative z-10 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('pricing.title.start')}{' '}
            <Highlight>{t('pricing.title.highlight')}</Highlight>
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Starter Package */}
          <motion.div
            className="group relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="relative h-full bg-background-secondary/80 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold mb-4">
                  {t('pricing.starter.badge')}
                </span>
                <h3 className="text-2xl font-bold mb-2">{t('pricing.starter.name')}</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                    {t('pricing.starter.price')}
                  </span>
                </div>
                <p className="text-foreground-muted text-sm">{t('pricing.starter.ideal')}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {['channel', 'setup', 'support', 'training', 'updates'].map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{t(`pricing.starter.features.${feature}`)}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="block w-full py-3 px-6 text-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105"
              >
                {t('pricing.starter.cta')}
              </Link>
            </div>
          </motion.div>

          {/* Business Package - Featured */}
          <motion.div
            className="group relative md:-mt-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="absolute -inset-[2px] bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl opacity-50 blur-xl" />
            <div className="relative h-full bg-background-secondary backdrop-blur-md rounded-3xl p-8 border-2 border-green-500/50">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-semibold mb-4">
                  {t('pricing.business.badge')}
                </span>
                <h3 className="text-2xl font-bold mb-2">{t('pricing.business.name')}</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                    {t('pricing.business.price')}
                  </span>
                </div>
                <p className="text-foreground-muted text-sm">{t('pricing.business.ideal')}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {['everything', 'channels', 'ai', 'support', 'integrations', 'priority', 'analytics', 'updates'].map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{t(`pricing.business.features.${feature}`)}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="block w-full py-3 px-6 text-center bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 hover:scale-105 shadow-lg shadow-green-500/30"
              >
                {t('pricing.business.cta')}
              </Link>
            </div>
          </motion.div>

          {/* Enterprise Package */}
          <motion.div
            className="group relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="relative h-full bg-background-secondary/80 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm font-semibold mb-4">
                  {t('pricing.enterprise.badge')}
                </span>
                <h3 className="text-2xl font-bold mb-2">{t('pricing.enterprise.name')}</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                    {t('pricing.enterprise.price')}
                  </span>
                </div>
                <p className="text-foreground-muted text-sm">{t('pricing.enterprise.ideal')}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {['everything', 'custom', 'dedicated', 'training', 'sla', 'api', 'consulting', 'priority'].map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{t(`pricing.enterprise.features.${feature}`)}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="block w-full py-3 px-6 text-center bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105"
              >
                {t('pricing.enterprise.cta')}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Technical Features Section
function TechnicalFeaturesSection({ t }: { t: TranslationFunction }) {
  const features = [
    { icon: Shield, text: t('technical.gdpr') },
    { icon: Zap, text: t('technical.api') },
    { icon: Target, text: t('technical.webhook') },
    { icon: Settings, text: t('technical.templates') },
    { icon: BarChart3, text: t('technical.analytics') },
    { icon: Smartphone, text: t('technical.mobile') }
  ];

  return (
    <section className="relative z-10 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('technical.title.start')}{' '}
            <Highlight>{t('technical.title.highlight')}</Highlight>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-background-secondary/60 backdrop-blur-md rounded-xl p-4 border border-white/10 text-center hover:border-white/20 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              <feature.icon className="w-8 h-8 mx-auto mb-2 text-green-400" />
              <p className="text-xs font-medium">{feature.text}</p>
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
            className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center"
          >
            <MessageCircle className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('cta.title.start')}{' '}
            <Highlight>{t('cta.title.highlight')}</Highlight>
          </h2>

          <p className="text-xl text-foreground-muted mb-8">
            {t('cta.subtitle')}
          </p>

          <Link
            href="/contact"
            className="relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold text-lg hover:from-green-600 hover:to-emerald-600 hover:shadow-xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 overflow-hidden group"
          >
            <span className="relative z-10">{t('cta.button')}</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />

            {/* Shine effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>
          </Link>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-foreground-muted">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-green-400" />
              <span>{t('cta.trust.support')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-400" />
              <span>{t('cta.trust.gdpr')}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              <span>{t('cta.trust.certified')}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
