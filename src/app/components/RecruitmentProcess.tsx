import React from 'react';
import Link from 'next/link';
import { ArrowRight, Search, Filter, UserCheck, Presentation, HeartHandshake } from 'lucide-react';
import Icon from '@/components/ui/AppIcon';


const steps = [
  {
    id: 'step-01',
    number: '01',
    icon: Search,
    title: 'Comprendre le besoin',
    description: "Analyse approfondie du poste, de la culture d'entreprise et des exigences spécifiques.",
  },
  {
    id: 'step-02',number: '02',icon: Filter,title: 'Sourcer',description: 'Activation de nos réseaux, bases de données et canaux de sourcing ciblés.',
  },
  {
    id: 'step-03',number: '03',icon: UserCheck,title: 'Sélectionner',description: 'Évaluation rigoureuse des candidats selon les critères définis avec vous.',
  },
  {
    id: 'step-04',number: '04',icon: Presentation,title: 'Présenter',description: "Présentation d'une shortlist de candidats qualifiés avec dossiers complets.",
  },
  {
    id: 'step-05',
    number: '05',
    icon: HeartHandshake,
    title: 'Accompagner',
    description: 'Suivi de l\'intégration et accompagnement post-recrutement pour garantir le succès.',
  },
];

export default function RecruitmentProcess() {
  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'radial-gradient(circle at 10% 50%, rgba(201,168,76,0.5) 0%, transparent 40%), radial-gradient(circle at 90% 20%, rgba(255,255,255,0.3) 0%, transparent 40%)' }}
      />

      <div className="container-xl relative z-10">
        <div className="text-center mb-14">
          <p className="section-label mb-3" style={{ color: 'var(--accent)' }}>Notre processus</p>
          <h2 className="text-hero-md font-700 text-white mb-4" style={{ fontWeight: 700 }}>
            Le talent qui répond à vos ambitions
          </h2>
          <p className="text-base text-white/60 max-w-xl mx-auto">
            Un processus de recrutement éprouvé, rigoureux et transparent pour vous trouver les meilleurs profils.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {steps?.map((step, index) => {
            const Icon = step?.icon;
            return (
              <div key={step?.id} className="relative group">
                {/* Connector line */}
                {index < steps?.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-white/10 z-0"
                    style={{ width: 'calc(100% - 2rem)', left: 'calc(50% + 2rem)' }}
                  />
                )}

                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Step circle */}
                  <div className="relative mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-accent/20 group-hover:border-accent/40 transition-all duration-300">
                      <Icon size={24} className="text-white/80 group-hover:text-accent transition-colors duration-300" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                      <span className="text-xs font-800 text-primary" style={{ fontWeight: 800 }}>{step?.number}</span>
                    </div>
                  </div>

                  <h3 className="text-sm font-700 text-white mb-2" style={{ fontWeight: 700 }}>{step?.title}</h3>
                  <p className="text-xs text-white/50 leading-relaxed">{step?.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link href="/job-board-job-detail" className="btn-primary">
            Voir les opportunités
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}