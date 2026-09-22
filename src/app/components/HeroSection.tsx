'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronDown, Users, BookOpen, Briefcase, TrendingUp } from 'lucide-react';
import AppImage from '@/components/ui/AppImage';

const floatingStats = [
{ icon: Users, value: '2005', label: 'Fondé en', color: 'bg-white/95' },
{ icon: BookOpen, value: '10+', label: 'Domaines de formation', color: 'bg-accent/95' },
{ icon: Briefcase, value: 'CDI', label: 'Offres disponibles', color: 'bg-white/95' },
{ icon: TrendingUp, value: '100%', label: 'Engagement qualité', color: 'bg-white/95' }];


export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 navy-gradient" />
      <div className="absolute inset-0 opacity-20"
      style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(201,168,76,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 40%)' }} />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5"
      style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      

      <div className="container-xl relative z-10 py-32 lg:py-0 lg:min-h-screen lg:flex lg:items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          {/* Left Content */}
          <div className={`transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/20 border border-accent/30 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-700 text-accent tracking-wider uppercase" style={{ fontWeight: 700 }}>
                Cabinet RH — Casablanca, Maroc
              </span>
            </div>

            <h1 className="text-hero-xl font-800 text-white leading-tight mb-6 text-balance" style={{ fontWeight: 800 }}>
              Développer les{' '}
              <span className="text-accent">compétences.</span>
              <br />
              Révéler les{' '}
              <span className="relative">
                talents.
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent/60" />
              </span>
            </h1>

            <p className="text-base text-white/75 leading-relaxed mb-8 max-w-lg">
              EURO COMPETENCE / SFORHET accompagne les entreprises et les talents dans leurs projets de formation, 
              de recrutement, de conseil et d'insertion professionnelle depuis 2005.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/contact" className="btn-primary text-sm py-3.5 px-7">
                Demander un accompagnement
                <ArrowRight size={16} />
              </Link>
              <Link href="#services" className="btn-outline-white text-sm py-3.5 px-7">
                Découvrir nos services
              </Link>
            </div>

            {/* Mini stats row */}
            <div className="flex flex-wrap gap-6">
              {[
              { label: 'Depuis 2005', sub: 'Expérience confirmée' },
              { label: 'Casablanca', sub: 'Opérant au Maroc' },
              { label: 'OFPPT', sub: 'Partenaire agréé' }]?.
              map((item) =>
              <div key={`hero-stat-${item?.label}`} className="flex flex-col">
                  <span className="text-white font-700 text-base" style={{ fontWeight: 700 }}>{item?.label}</span>
                  <span className="text-white/50 text-xs">{item?.sub}</span>
                </div>
              )}
            </div>
          </div>

          {/* Right — Editorial Image Composition */}
          <div className={`relative transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {/* Main image card */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_4614ae512-1790089488711.png"
                alt="Professionnels en réunion de conseil et formation à Casablanca"
                width={700}
                height={480}
                priority
                className="w-full object-cover" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
            </div>

            {/* Floating card — top left */}
            <div className="absolute -top-4 -left-6 bg-white rounded-xl p-4 shadow-card-hover border border-border hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <BookOpen size={18} className="text-accent" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground font-500">Formations actives</div>
                  <div className="text-base font-700 text-primary" style={{ fontWeight: 700 }}>10 domaines</div>
                </div>
              </div>
            </div>

            {/* Floating card — bottom right */}
            <div className="absolute -bottom-4 -right-6 bg-primary rounded-xl p-4 shadow-card-hover hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Users size={18} className="text-accent" />
                </div>
                <div>
                  <div className="text-xs text-white/60 font-500">Accompagnement</div>
                  <div className="text-base font-700 text-white" style={{ fontWeight: 700 }}>Entreprises & Talents</div>
                </div>
              </div>
            </div>

            {/* Accent bar */}
            <div className="absolute top-6 right-6 w-1 h-24 bg-accent rounded-full opacity-80" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 animate-pulse-soft">
        <span className="text-xs tracking-widest uppercase">Découvrir</span>
        <ChevronDown size={18} />
      </div>
    </section>);

}