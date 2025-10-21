'use client';

import React, { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useScroll, useTransform, useMotionValue, useSpring, MotionValue } from 'framer-motion';
import { Link } from '@/src/i18n/routing';
import { HeroBackground } from '@/src/components/backgrounds';
import { Highlight } from '@/src/components/ui/hero-highlight';
import Image from 'next/image';
import {
  Code,
  Rocket,
  Globe,
  ShoppingCart,
  Layout,
  BarChart3,
  Wrench,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Target,
  TrendingUp,
  Euro,
  ChevronDown,
  LucideIcon
} from 'lucide-react';

// TypeScript interfaces
interface TranslationFunction {
  (key: string): string;
}

interface TrustIndicatorItem {
  icon: LucideIcon;
  label: string;
  gradient: string;
}

interface TechItem {
  name: string;
  Logo: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
}

interface ProjectItem {
  title: string;
  category: string;
  description: string;
  gradient: string;
  image: string;
  size: string;
  featured: boolean;
  wide?: boolean;
}

export default function WebsiteDevPage() {
  const t = useTranslations('websiteDev');
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <div ref={containerRef} className="min-h-screen relative">
      {/* Global Unified Background */}
      <div className="fixed inset-0 z-0">
        <HeroBackground />
      </div>

      {/* Page Content */}
      <div className="relative z-10">
        {/* Hero Section with Multi-Layer Parallax */}
        <HeroParallaxSection t={t} scrollYProgress={scrollYProgress} />

        {/* Tech Stack Floating */}
        <TechStackSection t={t} />

        {/* Services Grid */}
        <ServicesSection t={t} />

        {/* Projects Showcase Bento Grid */}
        <ProjectsShowcaseSection t={t} />

        {/* Development Process Timeline */}
        <ProcessTimelineSection t={t} />

        {/* USP Features Grid */}
        <FeaturesSection t={t} />

        {/* Pricing Section */}
        <PricingSection t={t} />

        {/* Final CTA */}
        <FinalCTASection t={t} />
      </div>
    </div>
  );
}

// Trust Indicator Card with Float + Tilt 3D
function TrustIndicatorCard({ item, index }: { item: TrustIndicatorItem; index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-100, 100], [3, -3]);
  const rotateY = useTransform(mouseX, [-100, 100], [-3, 3]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(event.clientX - centerX);
    mouseY.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      className="group flex flex-col items-center gap-2 p-4 rounded-xl bg-background-secondary/40 backdrop-blur-md border border-primary/10 hover:border-primary/30 transition-all duration-300"
      style={{ perspective: 1000 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: [0, -5, 0]
      }}
      transition={{
        opacity: { delay: 0.8 + index * 0.1, duration: 0.5 },
        y: {
          delay: 1 + index * 0.2,
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
      >
        <div className="relative">
          {/* Pulsing glow */}
          <motion.div
            className={`absolute -inset-2 bg-gradient-to-br ${item.gradient} rounded-lg opacity-0 group-hover:opacity-40 blur-md transition-opacity duration-300`}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0, 0.3, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <div className={`relative w-10 h-10 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
            <item.icon className="w-5 h-5 text-white" />
          </div>
        </div>
      </motion.div>

      <span className="text-sm font-medium text-foreground text-center">
        {item.label}
      </span>
    </motion.div>
  );
}

// Hero Parallax Section
function HeroParallaxSection({ t, scrollYProgress }: { t: TranslationFunction; scrollYProgress: MotionValue<number> }) {
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (event: React.MouseEvent) => {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;
    mouseX.set((clientX - innerWidth / 2) / 25);
    mouseY.set((clientY - innerHeight / 2) / 25);
  };

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <motion.div style={{ opacity }} className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Floating Shapes - Mouse Parallax */}
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl"
            style={{ x: useTransform(mouseX, (v) => v * 2), y: useTransform(mouseY, (v) => v * 2) }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-2xl"
            style={{ x: useTransform(mouseX, (v) => v * -1.5), y: useTransform(mouseY, (v) => v * -1.5) }}
          />

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ y: y1 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-md border border-primary/20 mb-6"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">{t('hero.badge')}</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              {t('hero.title.start')}{' '}
              <Highlight>{t('hero.title.highlight')}</Highlight>
            </h1>

            <p className="text-xl md:text-2xl text-foreground-muted leading-relaxed mb-8 max-w-3xl mx-auto">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
              >
                {t('hero.cta.primary')}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-8 py-4 bg-background-secondary/60 backdrop-blur-md border border-primary/20 text-foreground rounded-xl font-semibold text-lg hover:border-primary/40 transition-all duration-300"
              >
                {t('hero.cta.secondary')}
              </a>
            </div>

            {/* Trust Indicators */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
              style={{ y: y2 }}
            >
              {[
                { icon: Rocket, label: t('hero.features.fast'), gradient: 'from-blue-500 to-cyan-500' },
                { icon: Target, label: t('hero.features.performance'), gradient: 'from-purple-500 to-pink-500' },
                { icon: Globe, label: t('hero.features.seo'), gradient: 'from-emerald-500 to-teal-500' },
                { icon: Euro, label: t('hero.features.transparent'), gradient: 'from-orange-500 to-amber-500' }
              ].map((item, index) => (
                <TrustIndicatorCard key={index} item={item} index={index} />
              ))}
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute -bottom-12 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8 text-foreground-muted" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

// Tech Logos Components
const NextJsLogo = () => (
  <svg viewBox="0 0 180 180" fill="none" className="w-16 h-16">
    <mask id="mask0_408_134" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
      <circle cx="90" cy="90" r="90" fill="black"/>
    </mask>
    <g mask="url(#mask0_408_134)">
      <circle cx="90" cy="90" r="90" fill="black"/>
      <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint0_linear_408_134)"/>
      <rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear_408_134)"/>
    </g>
    <defs>
      <linearGradient id="paint0_linear_408_134" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="white"/>
        <stop offset="1" stopColor="white" stopOpacity="0"/>
      </linearGradient>
      <linearGradient id="paint1_linear_408_134" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
        <stop stopColor="white"/>
        <stop offset="1" stopColor="white" stopOpacity="0"/>
      </linearGradient>
    </defs>
  </svg>
);

const ReactLogo = () => (
  <svg viewBox="0 0 256 228" className="w-16 h-16">
    <path d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621 6.238-30.281 2.16-54.676-11.769-62.708-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848 155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233 50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165 167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266 13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923 168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586 13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488 29.348-9.723 48.443-25.443 48.443-41.52 0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345-3.24-10.257-7.612-21.163-12.963-32.432 5.106-11 9.31-21.767 12.459-31.957 2.619.758 5.16 1.557 7.61 2.4 23.69 8.156 38.14 20.213 38.14 29.504 0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787-1.524 8.219-4.59 13.698-8.382 15.893-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246 12.376-1.098 24.068-2.894 34.671-5.345.522 2.107.986 4.173 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994 7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863-6.35-5.437-9.555-10.836-9.555-15.216 0-9.322 13.897-21.212 37.076-29.293 2.813-.98 5.757-1.905 8.812-2.773 3.204 10.42 7.406 21.315 12.477 32.332-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789 8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152 7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793 2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433 4.902.192 9.899.29 14.978.29 5.218 0 10.376-.117 15.453-.343-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026 347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815 329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627 310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695 358.489 358.489 0 0 1 11.036 20.54 329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026-.344 1.668-.73 3.367-1.15 5.09-10.622-2.452-22.155-4.275-34.23-5.408-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86-22.86-10.235-22.86-22.86 10.235-22.86 22.86-22.86Z" fill="#00D8FF"/>
  </svg>
);

const TypeScriptLogo = () => (
  <svg viewBox="0 0 256 256" className="w-16 h-16">
    <rect width="256" height="256" rx="28" fill="#3178C6"/>
    <path d="M56.611 128.85l-.081 10.483h33.32v94.68H113.42v-94.68h33.32v-10.28c0-5.69-.122-10.444-.284-10.566-.122-.162-20.399-.244-44.983-.203l-44.739.122-.122 10.443Z" fill="#FFF"/>
    <path d="M206.567 118.108c6.501 1.626 11.459 4.511 16.01 9.224 2.357 2.52 5.851 7.112 6.136 8.209.08.325-11.053 7.802-17.798 11.987-.244.163-1.22-.894-2.317-2.52-3.291-4.795-6.745-6.867-12.028-7.233-7.76-.529-12.759 3.535-12.718 10.321 0 1.992.284 3.17 1.097 4.795 1.707 3.535 4.876 5.648 14.832 9.955 18.326 7.883 26.168 13.084 31.045 20.48 5.445 8.25 6.664 21.415 2.966 31.208-4.063 10.646-14.14 17.88-28.323 20.276-4.388.772-14.79.65-19.504-.203-10.28-1.829-20.033-6.908-26.047-13.572-2.357-2.601-6.949-9.387-6.664-9.875.122-.163 1.178-.813 2.356-1.504 1.138-.65 5.446-3.129 9.509-5.485l7.355-4.267 1.544 2.276c2.154 3.291 6.867 7.802 9.712 9.305 8.167 4.308 19.383 3.698 24.909-1.26 2.357-2.153 3.332-4.388 3.332-7.68 0-2.966-.366-4.266-1.91-6.5-1.99-2.845-6.054-5.242-17.595-10.24-13.206-5.69-18.895-9.224-24.096-14.832-3.007-3.25-5.852-8.452-7.03-12.8-.975-3.616-1.22-12.678-.447-16.335 2.723-12.76 12.353-21.658 26.25-24.3 4.51-.853 14.994-.528 19.424.569Z" fill="#FFF"/>
  </svg>
);

const TailwindLogo = () => (
  <svg viewBox="0 0 256 154" className="w-16 h-16">
    <defs>
      <linearGradient x1="-2.778%" y1="32%" x2="100%" y2="67.556%" id="gradient">
        <stop stopColor="#2298BD" offset="0%"/>
        <stop stopColor="#0ED7B5" offset="100%"/>
      </linearGradient>
    </defs>
    <path d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z" fill="url(#gradient)"/>
  </svg>
);

const NodeJsLogo = () => (
  <svg viewBox="0 0 256 289" className="w-16 h-16">
    <path d="M128 288.464c-3.975 0-7.685-1.06-11.13-2.915l-35.247-20.936c-5.3-2.915-2.65-3.975-1.06-4.505 7.155-2.385 8.48-2.915 15.9-7.156.796-.53 1.856-.265 2.65.265l27.032 16.166c1.06.53 2.385.53 3.18 0l105.74-61.217c1.06-.53 1.59-1.59 1.59-2.915V83.08c0-1.325-.53-2.385-1.59-2.915l-105.74-60.953c-1.06-.53-2.385-.53-3.18 0L20.405 80.166c-1.06.53-1.59 1.855-1.59 2.915v122.17c0 1.06.53 2.385 1.59 2.915l28.887 16.695c15.636 7.95 25.44-1.325 25.44-10.6V93.68c0-1.59 1.326-3.18 3.181-3.18h13.516c1.59 0 3.18 1.325 3.18 3.18v120.58c0 20.936-11.396 33.126-31.272 33.126-6.095 0-10.865 0-24.38-6.625l-27.827-15.9C4.24 220.885 0 213.465 0 205.515V83.346C0 75.396 4.24 67.976 11.13 64L116.87 2.783c6.625-3.71 15.635-3.71 22.26 0L244.87 64C251.76 67.975 256 75.395 256 83.346v122.17c0 7.95-4.24 15.37-11.13 19.345L139.13 286.08c-3.445 1.59-7.42 2.385-11.13 2.385Zm32.596-84.009c-46.377 0-55.917-21.2-55.917-39.221 0-1.59 1.325-3.18 3.18-3.18h13.78c1.59 0 2.916 1.06 2.916 2.65 2.12 14.045 8.215 20.936 36.306 20.936 22.261 0 31.802-5.035 31.802-16.96 0-6.891-2.65-11.926-37.367-15.372-28.886-2.915-46.907-9.275-46.907-32.33 0-21.467 18.021-34.187 48.232-34.187 33.921 0 50.617 11.66 52.737 37.101 0 .795-.265 1.59-.795 2.385-.53.53-1.325 1.06-2.12 1.06h-13.78c-1.326 0-2.65-1.06-2.916-2.385-3.18-14.575-11.395-19.345-33.126-19.345-24.38 0-27.296 8.48-27.296 14.84 0 7.686 3.445 10.07 36.306 14.31 32.597 4.24 47.967 10.336 47.967 33.127-.265 23.321-19.345 36.571-53.002 36.571Z" fill="#539E43"/>
  </svg>
);

const VercelLogo = () => (
  <svg viewBox="0 0 256 222" className="w-16 h-16">
    <path d="M128 0L256 221.705H0L128 0z" fill="currentColor"/>
  </svg>
);

// Tech Stack Floating Section
function TechStackSection({ t }: { t: TranslationFunction }) {
  const technologies = [
    { name: 'Next.js', Logo: NextJsLogo },
    { name: 'React', Logo: ReactLogo },
    { name: 'TypeScript', Logo: TypeScriptLogo },
    { name: 'Tailwind', Logo: TailwindLogo },
    { name: 'Node.js', Logo: NodeJsLogo },
    { name: 'Vercel', Logo: VercelLogo }
  ];

  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">
            {t('techStack.title.start')}{' '}
            <Highlight>{t('techStack.title.highlight')}</Highlight>
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            {t('techStack.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <TechCard key={index} tech={tech} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Tech Card with Mouse Tilt
function TechCard({ tech, index }: { tech: TechItem; index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-100, 100], [10, -10]);
  const rotateY = useTransform(mouseX, [-100, 100], [-10, 10]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(event.clientX - centerX);
    mouseY.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      className="group perspective-1000"
      style={{ perspective: 1000 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative h-40 p-6 rounded-2xl bg-background-secondary/40 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-300 flex flex-col items-center justify-center gap-3"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale: 1.05 }}
      >
        {/* Floating animation for logo */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
          className="flex items-center justify-center"
        >
          <tech.Logo />
        </motion.div>

        {/* Tech name */}
        <div className="text-sm font-semibold text-foreground">{tech.name}</div>

        {/* Shine effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12"
            style={{ willChange: 'transform' }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

// Services Grid Section
function ServicesSection({ t }: { t: TranslationFunction }) {
  const services = [
    {
      icon: Layout,
      title: t('services.landing.title'),
      description: t('services.landing.description'),
      gradient: 'from-blue-500 via-cyan-500 to-blue-600'
    },
    {
      icon: ShoppingCart,
      title: t('services.ecommerce.title'),
      description: t('services.ecommerce.description'),
      gradient: 'from-purple-500 via-pink-500 to-purple-600'
    },
    {
      icon: Code,
      title: t('services.webapp.title'),
      description: t('services.webapp.description'),
      gradient: 'from-emerald-500 via-teal-500 to-emerald-600'
    },
    {
      icon: BarChart3,
      title: t('services.dashboard.title'),
      description: t('services.dashboard.description'),
      gradient: 'from-orange-500 via-red-500 to-orange-600'
    },
    {
      icon: Wrench,
      title: t('services.maintenance.title'),
      description: t('services.maintenance.description'),
      gradient: 'from-indigo-500 via-purple-500 to-indigo-600'
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">
            {t('services.title.start')}{' '}
            <Highlight>{t('services.title.highlight')}</Highlight>
          </h2>
          <p className="text-xl text-foreground-muted">{t('services.subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Service Card with Mouse Tracking (Spring Animation)
function ServiceCard({ service, index }: { service: ServiceItem; index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring animation for smooth and fluid movement
  const springConfig = { damping: 30, stiffness: 150, mass: 1 };

  // Card rotation - smooth and elegant
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

  const IconComponent = service.icon;

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
        transition={{
          duration: 0.6,
          delay: index * 0.15,
          ease: [0.21, 0.45, 0.27, 0.9]
        }}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Animated gradient border */}
        <div
          className={`absolute -inset-[2px] bg-gradient-to-r ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`}
          style={{
            animation: 'gradient-shift 3s ease infinite',
            backgroundSize: '200% 200%'
          }}
        />

        {/* Main card with mouse tracking */}
        <div
          className="relative bg-background-secondary/80 backdrop-blur-md rounded-2xl overflow-hidden h-full min-h-[320px] border border-white/10 transition-all duration-500 group-hover:border-transparent"
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
                  backgroundSize: '20px 20px'
                }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Projects Showcase Bento Grid
function ProjectsShowcaseSection({ t }: { t: TranslationFunction }) {
  const projects = [
    {
      title: t('projects.project1.title'),
      category: t('projects.project1.category'),
      description: t('projects.project1.description'),
      gradient: 'from-blue-500 to-cyan-500',
      image: '/images/e-commerce.png',
      size: 'lg:col-span-2 lg:row-span-2',
      featured: true
    },
    {
      title: t('projects.project2.title'),
      category: t('projects.project2.category'),
      description: t('projects.project2.description'),
      gradient: 'from-purple-500 to-pink-500',
      image: '/images/dashboard.png',
      size: '',
      featured: false
    },
    {
      title: t('projects.project3.title'),
      category: t('projects.project3.category'),
      description: t('projects.project3.description'),
      gradient: 'from-emerald-500 to-teal-500',
      image: '/images/website.png',
      size: '',
      featured: false
    },
    {
      title: t('projects.project4.title'),
      category: t('projects.project4.category'),
      description: t('projects.project4.description'),
      gradient: 'from-orange-500 to-red-500',
      image: '/images/booking.png',
      size: 'lg:col-span-3',
      featured: false,
      wide: true
    }
  ];

  return (
    <section id="projects" className="py-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('projects.title.start')}{' '}
            <Highlight>{t('projects.title.highlight')}</Highlight>
          </h2>
          <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Project Card Component
function ProjectCard({ project, index }: { project: ProjectItem; index: number }) {
  return (
    <motion.div
      className={`group relative overflow-hidden rounded-2xl ${project.size}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.21, 0.45, 0.27, 0.9]
      }}
      whileHover={{ y: -8 }}
    >
      {/* Card Container */}
      <div className={`relative h-full ${project.featured ? 'min-h-[400px]' : project.wide ? 'min-h-[500px]' : 'min-h-[280px]'} p-6 bg-background-secondary/70 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all duration-500`}>

        {/* Animated Gradient Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">

          {/* Text Content */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm text-primary text-xs font-semibold uppercase tracking-wide">
                {project.category}
              </span>
            </div>

            <h3 className={`font-bold mb-2 bg-gradient-to-br ${project.gradient} bg-clip-text text-transparent ${project.featured ? 'text-2xl lg:text-3xl' : 'text-xl lg:text-2xl'}`}>
              {project.title}
            </h3>

            <p className="text-sm text-foreground-muted leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Image Container */}
          <div className={`flex-1 relative rounded-xl overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 backdrop-blur-sm ${project.wide ? 'min-h-[280px]' : 'min-h-[200px]'}`}>
            <div className={`absolute inset-0 flex items-center justify-center ${project.wide ? 'p-3' : 'p-4'}`}>
              <Image
                src={project.image}
                alt={project.title}
                width={project.featured ? 800 : project.wide ? 1200 : 600}
                height={project.featured ? 600 : project.wide ? 900 : 450}
                className={`${project.wide ? 'object-cover' : 'object-contain'} w-full h-full drop-shadow-2xl`}
                quality={100}
                priority={project.featured || project.wide}
              />
            </div>

            {/* Shine Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Process Timeline Section
function ProcessTimelineSection({ t }: { t: TranslationFunction }) {
  const steps = [
    {
      title: t('process.step1.title'),
      description: t('process.step1.description'),
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: t('process.step2.title'),
      description: t('process.step2.description'),
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: t('process.step3.title'),
      description: t('process.step3.description'),
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      title: t('process.step4.title'),
      description: t('process.step4.description'),
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">
            {t('process.title.start')}{' '}
            <Highlight>{t('process.title.highlight')}</Highlight>
          </h2>
          <p className="text-xl text-foreground-muted">{t('process.subtitle')}</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative pl-8 pb-12 last:pb-0"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              {/* Timeline line */}
              {index < steps.length - 1 && (
                <div className="absolute left-3 top-6 bottom-0 w-0.5 bg-gradient-to-b from-primary to-transparent" />
              )}

              {/* Step number */}
              <div className={`absolute left-0 top-0 w-6 h-6 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white text-xs font-bold`}>
                {index + 1}
              </div>

              {/* Content */}
              <div className="relative group">
                {/* Gradient border - visible only on hover */}
                <div className={`absolute -inset-[2px] bg-gradient-to-r ${step.gradient} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />

                <div className="relative bg-background-secondary/80 backdrop-blur-md rounded-xl p-6 border border-primary/20 group-hover:border-transparent transition-all duration-500">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{step.title}</h3>
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

// Features/USP Section
function FeaturesSection({ t }: { t: TranslationFunction }) {
  const features = [
    {
      icon: Rocket,
      title: t('features.fast.title'),
      description: t('features.fast.description'),
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Target,
      title: t('features.performance.title'),
      description: t('features.performance.description'),
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: t('features.seo.title'),
      description: t('features.seo.description'),
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Euro,
      title: t('features.pricing.title'),
      description: t('features.pricing.description'),
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">
            {t('features.title.start')}{' '}
            <Highlight>{t('features.title.highlight')}</Highlight>
          </h2>
          <p className="text-xl text-foreground-muted">{t('features.subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-[360deg] transition-all duration-[600ms]`}>
                <feature.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className={`text-xl font-bold mb-2 bg-gradient-to-br ${feature.gradient} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>{feature.title}</h3>
              <p className="text-foreground-muted">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Pricing Section
function PricingSection({ t }: { t: TranslationFunction }) {
  const features = [
    t('pricing.features.feature1'),
    t('pricing.features.feature2'),
    t('pricing.features.feature3'),
    t('pricing.features.feature4'),
    t('pricing.features.feature5'),
    t('pricing.features.feature6')
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">
            {t('pricing.title.start')}{' '}
            <Highlight>{t('pricing.title.highlight')}</Highlight>
          </h2>
          <p className="text-xl text-foreground-muted">{t('pricing.subtitle')}</p>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="group relative">
            {/* Glow effect - visible only on hover, outside the card */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl opacity-0 group-hover:opacity-40 blur-3xl transition-opacity duration-500" />

            {/* Card content - with dot pattern background */}
            <div className="relative p-8 rounded-3xl bg-background-secondary/80 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden">
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

              <div className="relative text-center mb-8">
              <div className="inline-flex items-baseline gap-2 mb-2">
                <span className="text-2xl text-foreground-muted">{t('pricing.from')}</span>
                <span className="text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  €1,500
                </span>
              </div>
              <p className="text-foreground-muted">{t('pricing.description')}</p>
            </div>

            <div className="relative space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>

            <Link
              href="/contact"
              className="relative w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-cyan-600 hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 overflow-hidden group"
            >
              <span className="relative z-10">{t('pricing.cta')}</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />

              {/* Shine effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </Link>

            <p className="relative text-center text-sm text-foreground-muted mt-4">{t('pricing.note')}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Final CTA Section
function FinalCTASection({ t }: { t: TranslationFunction }) {
  return (
    <section className="py-20">
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
            className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center"
          >
            <Sparkles className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-none">
            {t('finalCta.title.start')}{' '}
            <Highlight>{t('finalCta.title.highlight')}</Highlight>
          </h2>
          <p className="text-xl text-foreground-muted mb-8">
            {t('finalCta.subtitle')}
          </p>

          <Link
            href="/contact"
            className="relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-cyan-600 hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 overflow-hidden group"
          >
            <span className="relative z-10">{t('finalCta.cta')}</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />

            {/* Shine effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
