import React from 'react';
import Link from 'next/link';
import { User, Building2, ArrowRight } from 'lucide-react';
import AppImage from '@/components/ui/AppImage';

export default function CandidateCompanySplit() {
  return (
    <section className="section-padding bg-background">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Candidate side */}
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
            <AppImage
              src="https://img.rocket.new/generatedImages/rocket_gen_img_1557a1dac-1772889187828.png"
              alt="Candidat professionnel cherchant des opportunités d'emploi"
              width={600}
              height={400}
              className="w-full object-cover h-80 group-hover:scale-105 transition-transform duration-500" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <div className="w-12 h-12 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center mb-4">
                <User size={22} className="text-accent" />
              </div>
              <h3 className="text-xl font-700 text-white mb-2" style={{ fontWeight: 700 }}>Vous êtes candidat ?</h3>
              <p className="text-sm text-white/70 mb-5 max-w-xs">
                Découvrez les opportunités et développez votre parcours professionnel avec notre accompagnement personnalisé.
              </p>
              <Link
                href="/candidate-portal-dashboard"
                className="inline-flex items-center gap-2 text-sm font-600 text-accent hover:text-white transition-colors group/link"
                style={{ fontWeight: 600 }}>
                
                Accéder à mon espace
                <ArrowRight size={15} className="group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Company side */}
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
            <AppImage
              src="https://img.rocket.new/generatedImages/rocket_gen_img_41ef9df11-1789124077433.png"
              alt="Équipe d'entreprise en réunion de travail collaboratif"
              width={600}
              height={400}
              className="w-full object-cover h-80 group-hover:scale-105 transition-transform duration-500" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-accent/90 via-accent/30 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <div className="w-12 h-12 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center mb-4">
                <Building2 size={22} className="text-white" />
              </div>
              <h3 className="text-xl font-700 text-white mb-2" style={{ fontWeight: 700 }}>Vous êtes une entreprise ?</h3>
              <p className="text-sm text-white/80 mb-5 max-w-xs">
                Confiez-nous vos besoins en recrutement, formation ou conseil. Nous trouvons les solutions adaptées.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-600 text-white hover:text-primary transition-colors group/link"
                style={{ fontWeight: 600 }}>
                
                Parler à un conseiller
                <ArrowRight size={15} className="group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>);

}