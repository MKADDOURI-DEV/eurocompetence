import React from 'react';
import { Ear, Eye, Lock, ThumbsUp } from 'lucide-react';
import Icon from '@/components/ui/AppIcon';


const values = [
  {
    id: 'ecoute',
    icon: Ear,
    title: 'Écoute active',
    description: 'Nous prenons le temps de comprendre en profondeur vos besoins et vos objectifs avant de proposer toute solution.',
  },
  {
    id: 'transparence',
    icon: Eye,
    title: 'Transparence',
    description: "Une communication claire et honnête à chaque étape de notre collaboration, sans zone d'ombre.",
  },
  {
    id: 'confidentialite',icon: Lock,title: 'Confidentialité',description: 'La protection des données de nos clients et candidats est une priorité absolue et non négociable.',
  },
  {
    id: 'satisfaction',icon: ThumbsUp,title: 'Satisfaction',description: 'Notre succès se mesure à votre satisfaction. Chaque mission est conduite avec exigence et engagement.',
  },
];

export default function ValuesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-xl">
        <div className="text-center mb-14">
          <p className="section-label mb-3">Ce qui nous guide</p>
          <h2 className="text-hero-md font-700 text-primary mb-4" style={{ fontWeight: 700 }}>
            Nos valeurs fondatrices
          </h2>
          <p className="text-base text-muted-foreground max-w-lg mx-auto">
            Quatre valeurs qui définissent notre identité et guident chacune de nos actions depuis 2005.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {values?.map(({ id, icon: Icon, title, description }) => (
            <div
              key={`value-${id}`}
              className="group relative p-8 rounded-2xl border border-border hover:border-accent/40 hover:shadow-card-hover transition-all duration-300 text-center"
            >
              {/* Background decoration */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-accent/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(to bottom, rgba(201,168,76,0.04), transparent)' }}
              />

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-accent/20 transition-colors duration-300">
                  <Icon size={26} className="text-accent" />
                </div>
                <h3 className="text-base font-700 text-primary mb-3" style={{ fontWeight: 700 }}>{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}