import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const strengths = [
'Cabinet autorisé par les autorités compétentes',
'Équipe de professionnels hautement qualifiés',
'Approche personnalisée pour chaque client',
'Partenaire agréé OFPPT',
'Solutions innovantes en capital humain'];


export default function AboutSection() {
  return (
    <section className="section-padding bg-background" id="a-propos">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card-hover">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_137ad884c-1777034774081.png"
                alt="Équipe SFORHET en réunion stratégique à Casablanca"
                width={650}
                height={450}
                className="w-full object-cover" />
              
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
            </div>

            {/* Year badge */}
            <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-2xl bg-accent flex flex-col items-center justify-center shadow-gold">
              <span className="text-3xl font-800 text-primary leading-none" style={{ fontWeight: 800 }}>20</span>
              <span className="text-xs font-700 text-primary/80 tracking-wide" style={{ fontWeight: 700 }}>ANS</span>
              <span className="text-xs text-primary/60">d'expertise</span>
            </div>

            {/* Decoration */}
            <div className="absolute -top-4 -left-4 w-20 h-20 rounded-2xl border-2 border-accent/30 -z-10" />
          </div>

          {/* Content side */}
          <div>
            <p className="section-label mb-3">Qui sommes-nous</p>
            <h2 className="text-hero-md font-700 text-primary mb-5" style={{ fontWeight: 700 }}>
              Une expertise au service du capital humain
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-5">
              Fondé en 2005, SFORHET est un cabinet de conseil, de formation et de recrutement implanté à Casablanca, 
              opérant en conformité avec la législation en vigueur et disposant d'une autorisation d'exercer délivrée 
              par les autorités compétentes.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              SFORHET considère le conseil, la formation et le recrutement comme des prestations à très forte valeur 
              ajoutée qui doivent être conçues et déployées avec une forte implication de ses clients et partenaires.
            </p>

            <ul className="space-y-3 mb-8">
              {strengths?.map((item) =>
              <li key={`strength-${item}`} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-accent mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground font-500" style={{ fontWeight: 500 }}>{item}</span>
                </li>
              )}
            </ul>

            <Link href="/a-propos" className="btn-primary">
              Découvrir notre histoire
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>);

}