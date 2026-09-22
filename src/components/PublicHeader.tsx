'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import { Menu, X, ChevronDown, User, Building2 } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '/services', children: [
    { label: 'Conseil', href: '/conseil' },
    { label: 'Formation', href: '/formation-platform-formation-detail' },
    { label: 'Recrutement', href: '/job-board-job-detail' },
    { label: 'Insertion', href: '/insertion' },
  ]},
  { label: 'Formations', href: '/formation-platform-formation-detail' },
  { label: 'Offres d\'emploi', href: '/job-board-job-detail' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Contact', href: '/contact' },
];

export default function PublicHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-nav border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="container-xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <AppLogo size={40} />
            <div className="flex flex-col">
              <span className={`font-bold text-base leading-tight transition-colors ${scrolled ? 'text-primary' : 'text-white'}`}>
                EURO COMPETENCE
              </span>
              <span className={`text-xs font-medium tracking-widest transition-colors ${scrolled ? 'text-accent' : 'text-gold-400'}`}>
                SFORHET
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks?.map((link) => (
              <div
                key={`nav-${link?.label}`}
                className="relative"
                onMouseEnter={() => link?.children && setOpenDropdown(link?.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={link?.href}
                  className={`flex items-center gap-1 px-4 py-2 rounded-md text-sm font-600 transition-all duration-200 ${
                    scrolled
                      ? 'text-foreground hover:text-primary hover:bg-muted'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                  style={{ fontWeight: 600 }}
                >
                  {link?.label}
                  {link?.children && <ChevronDown size={14} />}
                </Link>

                {link?.children && openDropdown === link?.label && (
                  <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-lg shadow-card-hover border border-border py-1 animate-slide-down">
                    {link?.children?.map((child) => (
                      <Link
                        key={`dropdown-${child?.label}`}
                        href={child?.href}
                        className="block px-4 py-2.5 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                        style={{ fontWeight: 500 }}
                      >
                        {child?.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/sign-up-login-screen"
              className={`flex items-center gap-2 px-4 py-2 text-sm rounded-md transition-all duration-200 ${
                scrolled
                  ? 'text-primary hover:bg-muted border border-border' :'text-white/90 hover:text-white hover:bg-white/10 border border-white/30'
              }`}
              style={{ fontWeight: 600 }}
            >
              <User size={15} />
              Connexion
            </Link>
            <Link
              href="/sign-up-login-screen"
              className="btn-primary text-sm py-2 px-5"
            >
              Espace candidat
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors ${
              scrolled ? 'text-primary hover:bg-muted' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-border shadow-nav animate-slide-down">
          <div className="container-xl py-4 space-y-1">
            {navLinks?.map((link) => (
              <div key={`mobile-${link?.label}`}>
                <Link
                  href={link?.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-sm font-semibold text-foreground hover:bg-muted rounded-md transition-colors"
                >
                  {link?.label}
                </Link>
                {link?.children && (
                  <div className="pl-4">
                    {link?.children?.map((child) => (
                      <Link
                        key={`mobile-child-${child?.label}`}
                        href={child?.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {child?.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-border space-y-2">
              <Link
                href="/sign-up-login-screen"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-primary border border-border rounded-md"
              >
                <User size={15} />
                Connexion
              </Link>
              <Link
                href="/sign-up-login-screen"
                onClick={() => setMobileOpen(false)}
                className="btn-primary w-full justify-center"
              >
                <Building2 size={15} />
                Espace candidat
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}