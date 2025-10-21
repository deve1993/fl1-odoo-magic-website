'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/src/i18n/routing';
import Image from 'next/image';

export default function Footer() {
  const t = useTranslations('common.nav');
  const currentYear = new Date().getFullYear();

  const navigation = [
    { name: t('home'), href: '/' },
    { name: t('odoo-dev'), href: '/odoo-dev' },
    { name: t('3cx'), href: '/3cx' },
    { name: t('about'), href: '/about' },
    { name: t('contact'), href: '/contact' },
  ];

  return (
    <footer className="bg-background-secondary/60 backdrop-blur-md border-t border-primary/20 mt-auto shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Image
              src="/logo.svg"
              alt="FL1 Odoo Magic"
              width={150}
              height={60}
              className="h-12 w-auto mb-4 brightness-110"
            />
            <p className="text-foreground-muted mb-4 max-w-md leading-relaxed">
              Expert Odoo development and implementation services for growing businesses.
              Transform your business with our specialized Odoo solutions.
            </p>
            <div className="flex space-x-4">
              {/* Social Links - Add actual URLs later */}
              <a
                href="#"
                className="w-10 h-10 bg-primary/20 hover:bg-primary text-primary hover:text-white rounded-lg flex items-center justify-center transition-all shadow-md hover:shadow-lg hover:shadow-primary/30"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="mailto:bo2@fl1.cz"
                className="w-10 h-10 bg-primary/20 hover:bg-primary text-primary hover:text-white rounded-lg flex items-center justify-center transition-all shadow-md hover:shadow-lg hover:shadow-primary/30"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-foreground-muted hover:text-primary transition-colors hover:underline"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-lg">Contact</h3>
            <ul className="space-y-2 text-foreground-muted">
              <li>
                <p className="font-medium text-foreground">FL1 s.r.o.</p>
              </li>
              <li>
                <p>Moskevská 1464/61</p>
                <p>Vršovice</p>
                <p>101 00 Praha 10</p>
              </li>
              <li className="pt-2">
                <a href="mailto:bo2@fl1.cz" className="hover:text-primary transition-colors hover:underline">
                  bo2@fl1.cz
                </a>
              </li>
              <li>
                <a href="tel:+420775113732" className="hover:text-primary transition-colors hover:underline">
                  +420 775 113 732
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-foreground-muted">
          <p>© {currentYear} FL1 s.r.o. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-primary transition-colors hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors hover:underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
