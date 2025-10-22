'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, ArrowRight, LucideIcon } from 'lucide-react';
import { Highlight } from '@/src/components/ui/hero-highlight';
import { HeroBackground } from '@/src/components/backgrounds';
import React, { useState } from 'react';

// TypeScript interfaces
interface TranslationFunction {
  (key: string): string;
}

interface ContactInfo {
  icon: LucideIcon;
  label: string;
  value: string;
  gradient: string;
  href: string | null;
}

export default function ContactPage() {
  const t = useTranslations('contact');

  return (
    <main className="min-h-screen relative">
      {/* Global Unified Background */}
      <div className="fixed inset-0 z-0">
        <HeroBackground />
      </div>

      {/* Hero Section */}
      <HeroSection t={t} />

      {/* Main Contact Section */}
      <MainContactSection t={t} />
    </main>
  );
}

// Hero Section
function HeroSection({ t }: { t: TranslationFunction }) {
  return (
    <section className="relative z-10 pt-32 pb-12 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 backdrop-blur-sm mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Mail className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium">{t('hero.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            {t('hero.title.start')}{' '}
            <Highlight>{t('hero.title.highlight')}</Highlight>
          </h1>

          <p className="text-xl md:text-2xl text-foreground-muted leading-relaxed max-w-3xl mx-auto">
            {t('hero.subtitle')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// Main Contact Section - Split Layout
function MainContactSection({ t }: { t: TranslationFunction }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    if (process.env.NODE_ENV === 'development') {
      console.log('Form submitted:', formData);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: t('info.email.label'),
      value: t('info.email.value'),
      gradient: 'from-purple-500 to-pink-500',
      href: 'mailto:bo2@fl1.cz'
    },
    {
      icon: Phone,
      label: t('info.phone.label'),
      value: t('info.phone.value'),
      gradient: 'from-emerald-500 to-teal-500',
      href: 'tel:+420775113732'
    },
    {
      icon: Clock,
      label: t('info.hours.label'),
      value: t('info.hours.value'),
      gradient: 'from-blue-400 to-purple-500',
      href: null
    },
    {
      icon: MapPin,
      label: t('info.location.label'),
      value: t('info.location.value'),
      gradient: 'from-orange-500 to-red-500',
      href: null
    }
  ];

  return (
    <section className="relative z-10 py-12 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[3fr_2fr] gap-8">
            {/* Left Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative bg-background-secondary/80 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/10">
                {/* Dot pattern */}
                <div className="absolute inset-0 opacity-5 pointer-events-none rounded-3xl overflow-hidden">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
                      backgroundSize: '20px 20px'
                    }}
                  />
                </div>

                <div className="relative">
                  <h2 className="text-3xl font-bold mb-2">{t('form.title')}</h2>
                  <p className="text-foreground-muted mb-8">{t('form.subtitle')}</p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold mb-2">
                        {t('form.fields.name')} <span className="text-red-400">*</span>
                      </label>
                      <div className="relative group">
                        <div
                          className={`absolute -inset-[2px] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl opacity-0 transition-opacity duration-300 ${
                            focusedField === 'name' ? 'opacity-100' : 'group-hover:opacity-50'
                          }`}
                        />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          className="relative w-full px-4 py-3 bg-background-secondary border border-white/10 rounded-xl focus:outline-none focus:border-transparent transition-all duration-300"
                          placeholder={t('form.placeholders.name')}
                        />
                      </div>
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold mb-2">
                        {t('form.fields.email')} <span className="text-red-400">*</span>
                      </label>
                      <div className="relative group">
                        <div
                          className={`absolute -inset-[2px] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl opacity-0 transition-opacity duration-300 ${
                            focusedField === 'email' ? 'opacity-100' : 'group-hover:opacity-50'
                          }`}
                        />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          className="relative w-full px-4 py-3 bg-background-secondary border border-white/10 rounded-xl focus:outline-none focus:border-transparent transition-all duration-300"
                          placeholder={t('form.placeholders.email')}
                        />
                      </div>
                    </div>

                    {/* Phone Field (Optional) */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                        {t('form.fields.phone')}
                      </label>
                      <div className="relative group">
                        <div
                          className={`absolute -inset-[2px] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl opacity-0 transition-opacity duration-300 ${
                            focusedField === 'phone' ? 'opacity-100' : 'group-hover:opacity-50'
                          }`}
                        />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('phone')}
                          onBlur={() => setFocusedField(null)}
                          className="relative w-full px-4 py-3 bg-background-secondary border border-white/10 rounded-xl focus:outline-none focus:border-transparent transition-all duration-300"
                          placeholder={t('form.placeholders.phone')}
                        />
                      </div>
                    </div>

                    {/* Service Dropdown */}
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold mb-2">
                        {t('form.fields.service')} <span className="text-red-400">*</span>
                      </label>
                      <div className="relative group">
                        <div
                          className={`absolute -inset-[2px] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl opacity-0 transition-opacity duration-300 ${
                            focusedField === 'service' ? 'opacity-100' : 'group-hover:opacity-50'
                          }`}
                        />
                        <select
                          id="service"
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('service')}
                          onBlur={() => setFocusedField(null)}
                          className="relative w-full px-4 py-3 bg-background-secondary border border-white/10 rounded-xl focus:outline-none focus:border-transparent transition-all duration-300 cursor-pointer"
                        >
                          <option value="">{t('form.placeholders.service')}</option>
                          <option value="odoo-dev">{t('form.services.odoo')}</option>
                          <option value="website-dev">{t('form.services.website')}</option>
                          <option value="consulting">{t('form.services.consulting')}</option>
                          <option value="other">{t('form.services.other')}</option>
                        </select>
                      </div>
                    </div>

                    {/* Message Textarea */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold mb-2">
                        {t('form.fields.message')} <span className="text-red-400">*</span>
                      </label>
                      <div className="relative group">
                        <div
                          className={`absolute -inset-[2px] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl opacity-0 transition-opacity duration-300 ${
                            focusedField === 'message' ? 'opacity-100' : 'group-hover:opacity-50'
                          }`}
                        />
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('message')}
                          onBlur={() => setFocusedField(null)}
                          className="relative w-full px-4 py-3 bg-background-secondary border border-white/10 rounded-xl focus:outline-none focus:border-transparent transition-all duration-300 resize-none"
                          placeholder={t('form.placeholders.message')}
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="relative w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-cyan-600 hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 overflow-hidden group"
                    >
                      <span className="relative z-10">{t('form.submit')}</span>
                      <Send className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />

                      {/* Shine effect on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      </div>
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Contact Info Cards */}
            <motion.div
              className="flex flex-col gap-6 h-full"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className={`group ${index === contactInfo.length - 1 ? 'flex-1' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  {info.href ? (
                    <a href={info.href} className="block h-full">
                      <ContactInfoCard info={info} />
                    </a>
                  ) : (
                    <ContactInfoCard info={info} isLast={index === contactInfo.length - 1} />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact Info Card Component
function ContactInfoCard({ info, isLast }: { info: ContactInfo; isLast?: boolean }) {
  const isLocation = info.icon === MapPin;

  return (
    <div className={`relative bg-background-secondary/80 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden ${isLast ? 'h-full flex flex-col' : ''}`}>
      {/* Glow effect on hover - inside the card */}
      <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`} />

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

      <div className={`relative flex ${isLocation ? 'items-start' : 'items-center'} gap-4 ${isLocation ? 'mb-4' : ''}`}>
        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${info.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}>
          <info.icon className="w-6 h-6 text-white" />
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-sm text-foreground-muted mb-1">{info.label}</p>
          <p className={`font-semibold bg-gradient-to-br ${info.gradient} bg-clip-text text-transparent break-words ${isLocation ? 'text-sm' : ''}`}>
            {info.value}
          </p>
        </div>

        {info.href && (
          <ArrowRight className="w-5 h-5 text-foreground-muted group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
        )}
      </div>

      {/* Map for location card */}
      {isLocation && isLast && (
        <div className="relative flex-1 rounded-xl overflow-hidden border border-white/10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.8741959076837!2d14.457962!3d50.069722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b9456e8b6e8e3%3A0x8c8e8c8e8c8e8c8e!2sMoskevsk%C3%A1%201464%2F61%2C%20101%2000%20Praha%2010-Vr%C5%A1ovice!5e0!3m2!1sen!2scz!4v1234567890123"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: '200px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="FL1 Office Location"
          />
        </div>
      )}
    </div>
  );
}
