import React from 'react';
import Link from 'next/link';
import { ArrowRight, ChefHat, Users, GraduationCap, Lightbulb, Star } from 'lucide-react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';


const offerings = [
{ icon: GraduationCap, title: 'Formation hôtelière', desc: 'Programmes métiers pour les professionnels de l\'hôtellerie et de la restauration.' },
{ icon: Users, title: 'Recrutement spécialisé', desc: 'Sourcing de profils hôteliers qualifiés pour tous les niveaux.' },
{ icon: Lightbulb, title: 'Conseil & stratégie', desc: 'Accompagnement dans la gestion des ressources humaines hôtelières.' },
{ icon: ChefHat, title: 'Formations métiers', desc: 'Boucherie, restauration, hébergement — programmes mandatés par l\'OFPPT.' },
{ icon: Star, title: 'GO SIYAHA', desc: 'Programme de transformation digitale du secteur touristique, financé à 90% par l\'État.' }];


export default function HospitalitySection() {
  return (
    <section className="section-padding bg-muted/30 overflow-hidden">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="section-label mb-3">Secteur hôtellerie</p>
            <h2 className="text-hero-md font-700 text-primary mb-5" style={{ fontWeight: 700 }}>
              Expertise & solutions pour l'hôtellerie
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              SFORHET est mandaté par l'OFPPT pour développer des programmes qualifiants dans les secteurs 
              du tourisme, de l'hôtellerie et de la restauration. Nous accompagnons les établissements hôteliers 
              dans leur montée en compétences.
            </p>

            <div className="space-y-4 mb-8">
              {offerings?.map(({ icon: Icon, title, desc }) =>
              <div key={`hotel-${title}`} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Icon size={18} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="text-sm font-700 text-primary mb-0.5" style={{ fontWeight: 700 }}>{title}</h4>
                    <p className="text-sm text-muted-foreground">{desc}</p>
                  </div>
                </div>
              )}
            </div>

            <Link href="/hotellerie" className="btn-primary">
              En savoir plus
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-xl overflow-hidden shadow-card">
                  <AppImage
                    src="https://img.rocket.new/generatedImages/rocket_gen_img_11ddca0d7-1775479115685.png"
                    alt="Hôtel de luxe avec piscine au Maroc"
                    width={400}
                    height={250}
                    className="w-full object-cover" />
                  
                </div>
                <div className="rounded-xl overflow-hidden shadow-card">
                  <AppImage
                    src="https://img.rocket.new/generatedImages/rocket_gen_img_1f3aaac26-1768316217207.png"
                    alt="Restaurant gastronomique avec présentation soignée"
                    width={400}
                    height={180}
                    className="w-full object-cover" />
                  
                </div>
              </div>
              <div className="mt-8">
                <div className="rounded-xl overflow-hidden shadow-card h-full min-h-60">
                  <AppImage
                    src="https://img.rocket.new/generatedImages/rocket_gen_img_1ccbdcdac-1770594208505.png"
                    alt="Formation professionnelle en hôtellerie avec formateur"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover" />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

}