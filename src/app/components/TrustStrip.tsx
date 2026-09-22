import React from 'react';
import { Lightbulb, GraduationCap, Users, TrendingUp, Award, Shield } from 'lucide-react';
import Icon from '@/components/ui/AppIcon';


const items = [
  { icon: Award, label: 'Depuis 2005', sub: 'Cabinet agréé' },
  { icon: Lightbulb, label: 'Conseil', sub: 'Stratégie RH' },
  { icon: GraduationCap, label: 'Formation', sub: 'Sur mesure' },
  { icon: Users, label: 'Recrutement', sub: 'Profils qualifiés' },
  { icon: TrendingUp, label: 'Insertion', sub: 'Accompagnement' },
  { icon: Shield, label: 'Confidentiel', sub: 'Valeur fondatrice' },
];

export default function TrustStrip() {
  return (
    <section className="bg-white border-b border-border">
      <div className="container-xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-x divide-border">
          {items?.map(({ icon: Icon, label, sub }) => (
            <div
              key={`trust-${label}`}
              className="flex flex-col items-center gap-2 py-7 px-4 hover:bg-muted/50 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Icon size={18} className="text-accent" />
              </div>
              <div className="text-center">
                <div className="text-sm font-700 text-primary" style={{ fontWeight: 700 }}>{label}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}