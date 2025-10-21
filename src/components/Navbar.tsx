'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname } from '@/src/i18n/routing';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const t = useTranslations('common.nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const servicesMenu = [
    { name: t('odoo-dev'), href: '/odoo-dev' },
    { name: t('3cx'), href: '/3cx' },
    { name: t('website-dev'), href: '/website-dev' },
  ];

  const navigation = [
    { name: t('home'), href: '/' },
    { name: t('about'), href: '/about' },
    { name: t('contact'), href: '/contact' },
  ];

  const languages = [
    { code: 'cs', name: 'Czech', fullName: 'Čeština', flag: '🇨🇿' },
    { code: 'en', name: 'English', fullName: 'English', flag: '🇬🇧' },
    { code: 'it', name: 'Italian', fullName: 'Italiano', flag: '🇮🇹' },
  ];

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

  return (
    <nav className="sticky top-0 z-50 bg-background-secondary/80 backdrop-blur-md border-b border-primary/20 shadow-lg shadow-black/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <Image
              src="/logo.svg"
              alt="FL1 Odoo Magic"
              width={120}
              height={48}
              priority
              className="h-12 w-auto brightness-110"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {/* Home Link */}
            <Link
              href="/"
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                pathname === '/'
                  ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30'
                  : 'text-foreground/80 hover:text-white hover:bg-primary/10'
              }`}
            >
              {t('home')}
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onBlur={() => setTimeout(() => setServicesDropdownOpen(false), 200)}
                className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-1 ${
                  servicesMenu.some(item => pathname === item.href)
                    ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30'
                    : 'text-foreground/80 hover:text-white hover:bg-primary/10'
                }`}
              >
                {t('services')}
                <svg
                  className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>

              {/* Services Dropdown Menu */}
              {servicesDropdownOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-background-secondary/95 backdrop-blur-xl border border-primary/30 rounded-xl shadow-2xl shadow-black/40 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                  {servicesMenu.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block px-4 py-3 transition-all ${
                          isActive
                            ? 'bg-gradient-to-r from-primary/20 to-accent/20 text-primary border-l-4 border-primary'
                            : 'text-foreground-muted hover:bg-primary/10 hover:text-white border-l-4 border-transparent'
                        }`}
                        onClick={() => setServicesDropdownOpen(false)}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Other Navigation Links */}
            {navigation.slice(1).map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30'
                      : 'text-foreground/80 hover:text-white hover:bg-primary/10'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Language Switcher + Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                onBlur={() => setTimeout(() => setLangDropdownOpen(false), 200)}
                className="flex items-center gap-2 px-4 py-2 bg-background-secondary/60 hover:bg-background-secondary border border-primary/30 hover:border-primary/60 rounded-lg transition-all group shadow-md hover:shadow-lg hover:shadow-primary/20"
                aria-label="Change language"
              >
                {/* Globe Icon */}
                <svg
                  className="w-5 h-5 text-foreground-muted group-hover:text-primary transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                </svg>
                <span className="hidden sm:inline text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {currentLanguage.code.toUpperCase()}
                </span>
                <svg
                  className={`w-4 h-4 text-foreground-muted group-hover:text-primary transition-all ${
                    langDropdownOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>

              {/* Dropdown Menu */}
              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-background-secondary/95 backdrop-blur-xl border border-primary/30 rounded-xl shadow-2xl shadow-black/40 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                  {languages.map((lang) => (
                    <a
                      key={lang.code}
                      href={`/${lang.code}${pathname}`}
                      className={`flex items-center gap-3 px-4 py-3 transition-all ${
                        locale === lang.code
                          ? 'bg-gradient-to-r from-primary/20 to-accent/20 text-primary border-l-4 border-primary'
                          : 'text-foreground-muted hover:bg-primary/10 hover:text-white border-l-4 border-transparent'
                      }`}
                    >
                      <span className="text-2xl">{lang.flag}</span>
                      <div className="flex-1">
                        <div className="font-medium">{lang.fullName}</div>
                        <div className="text-xs opacity-60">{lang.code.toUpperCase()}</div>
                      </div>
                      {locale === lang.code && (
                        <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      )}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors border border-primary/20"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6 text-foreground"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary/20">
            <div className="flex flex-col space-y-2">
              {/* Home Link */}
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg font-medium transition-all ${
                  pathname === '/'
                    ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30'
                    : 'text-foreground/80 hover:text-white hover:bg-primary/10'
                }`}
              >
                {t('home')}
              </Link>

              {/* Mobile Services Section */}
              <div className="pt-2">
                <div className="px-4 py-2 text-xs font-semibold text-foreground-muted uppercase tracking-wider">
                  {t('services')}
                </div>
                {servicesMenu.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-4 py-3 rounded-lg font-medium transition-all ml-4 ${
                        isActive
                          ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30'
                          : 'text-foreground/80 hover:text-white hover:bg-primary/10'
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>

              {/* Other Navigation Links */}
              {navigation.slice(1).map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg font-medium transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30'
                        : 'text-foreground/80 hover:text-white hover:bg-primary/10'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}

              {/* Mobile Language Switcher */}
              <div className="pt-4 mt-4 border-t border-primary/20">
                <div className="text-xs text-foreground-muted mb-2 px-4">Language / Jazyk / Lingua</div>
                {languages.map((lang) => (
                  <a
                    key={lang.code}
                    href={`/${lang.code}${pathname}`}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                      locale === lang.code
                        ? 'bg-gradient-to-r from-primary/20 to-accent/20 text-primary border-l-4 border-primary'
                        : 'text-foreground-muted hover:bg-primary/10 hover:text-white border-l-4 border-transparent'
                    }`}
                  >
                    <span className="text-2xl">{lang.flag}</span>
                    <div className="flex-1">
                      <div className="font-medium">{lang.fullName}</div>
                      <div className="text-xs opacity-60">{lang.code.toUpperCase()}</div>
                    </div>
                    {locale === lang.code && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
