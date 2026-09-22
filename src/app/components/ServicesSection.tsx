'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Lightbulb, GraduationCap, Users, TrendingUp, ArrowRight } from 'lucide-react';
import Icon from '@/components/ui/AppIcon';


const services = [
  {
    id: 'conseil',
    number: '01',
    icon: Lightbulb,
    title: 'Conseil',
    description: 'Diagnostic stratégique, analyse des compétences et accompagnement personnalisé pour optimiser vos ressources humaines.',
    items: ['Diagnostic stratégique', 'Analyse des compétences', 'Bilan de compétences', 'Accompagnement RH'],
    href: '/conseil',
    color: 'from-blue-50 to-indigo-50',
    accentBg: 'bg-blue-500/10',
    accentText: 'text-blue-600',
  },
  {
    id: 'formation',
    number: '02',
    icon: GraduationCap,
    title: 'Formation',
    description: 'Programmes sur mesure adaptés aux besoins de votre organisation, avec financement OFPPT disponible.',
    items: ['Formation sur mesure', 'Formation métiers', 'Soft skills', 'Management'],
    href: '/formation-platform-formation-detail',
    color: 'from-amber-50 to-orange-50',
    accentBg: 'bg-accent/10',
    accentText: 'text-accent',
  },
  {
    id: 'recrutement',
    number: '03',
    icon: Users,
    title: 'Recrutement',
    description: 'De l\'analyse du besoin à l\'intégration du candidat, un processus rigoureux pour des recrutements réussis.',
    items: ['Sourcing ciblé', 'Sélection rigoureuse', 'Entretiens', 'Suivi d\'intégration'],
    href: '/job-board-job-detail',
    color: 'from-emerald-50 to-teal-50',
    accentBg: 'bg-emerald-500/10',
    accentText: 'text-emerald-600',
  },
  {
    id: 'insertion',
    number: '04',
    icon: TrendingUp,
    title: 'Insertion',
    description: 'Accompagnement des talents dans leur insertion professionnelle, de la préparation à la mise en relation.',
    items: ['Préparation professionnelle', 'Accompagnement', 'Mise en relation', 'Suivi personnalisé'],
    href: '/insertion',
    color: 'from-purple-50 to-pink-50',
    accentBg: 'bg-purple-500/10',
    accentText: 'text-purple-600',
  },
];

export default function ServicesSection() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="section-padding bg-muted/50" id="services">
      <div className="container-xl">
        <div className="text-center mb-14">
          <p className="section-label mb-3">Ce que nous faisons</p>
          <h2 className="text-hero-md font-700 text-primary mb-4" style={{ fontWeight: 700 }}>
            Des solutions complètes pour votre capital humain
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            Quatre domaines d'expertise complémentaires pour répondre à l'ensemble de vos besoins en développement des compétences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {services?.map((service) => {
            const Icon = service?.icon;
            const isHovered = hovered === service?.id;
            return (
              <div
                key={`service-${service?.id}`}
                className={`card-base card-hover cursor-pointer group relative overflow-hidden transition-all duration-300 ${
                  isHovered ? 'border-primary/30 shadow-card-hover' : ''
                }`}
                onMouseEnter={() => setHovered(service?.id)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Number */}
                <div className="text-5xl font-800 text-muted/80 absolute top-4 right-4 select-none leading-none" style={{ fontWeight: 800, color: 'var(--border)' }}>
                  {service?.number}
                </div>

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${service?.accentBg} flex items-center justify-center mb-5`}>
                  <Icon size={22} className={service?.accentText} />
                </div>

                <h3 className="text-lg font-700 text-primary mb-3" style={{ fontWeight: 700 }}>{service?.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{service?.description}</p>

                <ul className="space-y-1.5 mb-6">
                  {service?.items?.map((item) => (
                    <li key={`service-item-${item}`} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="w-1 h-1 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href={service?.href}
                  className={`inline-flex items-center gap-2 text-sm font-600 transition-all duration-200 ${
                    isHovered ? 'text-accent' : 'text-primary/60'
                  }`}
                  style={{ fontWeight: 600 }}
                >
                  En savoir plus
                  <ArrowRight size={14} className={`transition-transform duration-200 ${isHovered ? 'translate-x-1' : ''}`} />
                </Link>

                {/* Bottom accent bar */}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-accent transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}