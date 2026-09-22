import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import Icon from '@/components/ui/AppIcon';


const footerLinks = {
  services: [
    { label: 'Conseil stratégique', href: '/conseil' },
    { label: 'Formation professionnelle', href: '/formation-platform-formation-detail' },
    { label: 'Recrutement', href: '/job-board-job-detail' },
    { label: 'Insertion professionnelle', href: '/insertion' },
    { label: 'Ingénierie de formation', href: '/services' },
    { label: 'Hôtellerie', href: '/hotellerie' },
  ],
  company: [
    { label: 'À propos', href: '/a-propos' },
    { label: 'Notre méthode', href: '/a-propos#methode' },
    { label: 'Nos références', href: '/references' },
    { label: 'Actualités', href: '/actualites' },
    { label: 'Contact', href: '/contact' },
  ],
  portals: [
    { label: 'Espace candidat', href: '/candidate-portal-dashboard' },
    { label: 'Espace entreprise', href: '/espace-entreprise' },
    { label: 'Offres d\'emploi', href: '/job-board-job-detail' },
    { label: 'Nos formations', href: '/formation-platform-formation-detail' },
  ],
};

export default function PublicFooter() {
  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="container-xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <AppLogo size={44} />
              <div>
                <div className="font-bold text-base leading-tight">EURO COMPETENCE</div>
                <div className="text-xs font-medium tracking-widest text-gold-400">SFORHET</div>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-6 max-w-xs">
              Cabinet de conseil, formation et recrutement implanté à Casablanca depuis 2005. 
              Nous accompagnons entreprises et talents dans leur développement professionnel.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-white/70">
                <MapPin size={15} className="text-accent mt-0.5 shrink-0" />
                <span>21, rue des Moineaux, Oasis, Casablanca, Maroc</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <Phone size={15} className="text-accent shrink-0" />
                <a href="tel:+212522236586" className="hover:text-white transition-colors">
                  +212 5 22 23 65 86
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <Mail size={15} className="text-accent shrink-0" />
                <a href="mailto:sforhetcasablanca@gmail.com" className="hover:text-white transition-colors">
                  sforhetcasablanca@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-6">
              {[
                { iconName: 'Linkedin', href: 'https://linkedin.com/company/sforhet', label: 'LinkedIn' },
                { iconName: 'Facebook', href: '#', label: 'Facebook' },
                { iconName: 'Instagram', href: '#', label: 'Instagram' },
              ]?.map(({ iconName, href, label }) => (
                <a
                  key={`social-${label}`}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-accent hover:text-primary flex items-center justify-center transition-all duration-200"
                >
                  <Icon name={iconName} size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-700 text-white mb-4 tracking-wide" style={{ fontWeight: 700 }}>
              Nos services
            </h4>
            <ul className="space-y-2.5">
              {footerLinks?.services?.map((link) => (
                <li key={`footer-service-${link?.label}`}>
                  <Link
                    href={link?.href}
                    className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-700 text-white mb-4 tracking-wide" style={{ fontWeight: 700 }}>
              L'entreprise
            </h4>
            <ul className="space-y-2.5">
              {footerLinks?.company?.map((link) => (
                <li key={`footer-company-${link?.label}`}>
                  <Link
                    href={link?.href}
                    className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Portals */}
          <div>
            <h4 className="text-sm font-700 text-white mb-4 tracking-wide" style={{ fontWeight: 700 }}>
              Accès rapide
            </h4>
            <ul className="space-y-2.5">
              {footerLinks?.portals?.map((link) => (
                <li key={`footer-portal-${link?.label}`}>
                  <Link
                    href={link?.href}
                    className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-xl py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-white/40">
              © 2025 Euro Competence / SFORHET. Tous droits réservés.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/mentions-legales" className="text-xs text-white/40 hover:text-white/70 transition-colors">
                Mentions légales
              </Link>
              <Link href="/confidentialite" className="text-xs text-white/40 hover:text-white/70 transition-colors">
                Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}