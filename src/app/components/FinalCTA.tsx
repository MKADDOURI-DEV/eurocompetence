import React from 'react';
import Link from 'next/link';
import { ArrowRight, Upload } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(201,168,76,0.15) 0%, transparent 60%)' }}
      />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/3 -translate-y-1/2 translate-x-1/3"
        style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
      />

      <div className="container-xl relative z-10 text-center">
        <p className="section-label mb-4" style={{ color: 'var(--accent)' }}>Prochaine étape</p>
        <h2 className="text-hero-md font-800 text-white mb-5" style={{ fontWeight: 800 }}>
          Construisons ensemble votre prochaine étape.
        </h2>
        <p className="text-base text-white/60 max-w-lg mx-auto mb-10">
          Que vous soyez une entreprise à la recherche de talents ou un professionnel en quête d'opportunités, 
          nous sommes à votre écoute.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact" className="btn-primary text-sm py-3.5 px-8">
            Nous contacter
            <ArrowRight size={16} />
          </Link>
          <Link href="/candidate-portal-dashboard" className="btn-outline-white text-sm py-3.5 px-8">
            <Upload size={16} />
            Déposer mon CV
          </Link>
        </div>
      </div>
    </section>
  );
}