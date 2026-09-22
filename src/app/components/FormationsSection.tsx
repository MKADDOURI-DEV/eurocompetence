import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';

const categories = [
  { label: 'Communication professionnelle', count: 4, color: 'bg-blue-50 text-blue-700 border-blue-200' },
  { label: 'Management', count: 6, color: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
  { label: 'Soft Skills', count: 8, color: 'bg-purple-50 text-purple-700 border-purple-200' },
  { label: 'Langues', count: 5, color: 'bg-green-50 text-green-700 border-green-200' },
  { label: 'Commerce & Vente', count: 7, color: 'bg-amber-50 text-amber-700 border-amber-200' },
  { label: 'Marketing', count: 4, color: 'bg-orange-50 text-orange-700 border-orange-200' },
  { label: 'QHSE', count: 3, color: 'bg-red-50 text-red-700 border-red-200' },
  { label: 'Bureautique', count: 5, color: 'bg-teal-50 text-teal-700 border-teal-200' },
  { label: 'Secourisme', count: 2, color: 'bg-rose-50 text-rose-700 border-rose-200' },
  { label: 'Formations métiers', count: 12, color: 'bg-cyan-50 text-cyan-700 border-cyan-200' },
];

export default function FormationsSection() {
  return (
    <section className="section-padding bg-white" id="formations">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label mb-3">Nos formations</p>
            <h2 className="text-hero-md font-700 text-primary mb-5" style={{ fontWeight: 700 }}>
              Des compétences adaptées aux besoins de demain
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Nos programmes de formation sont conçus sur mesure pour répondre aux exigences du marché marocain, 
              avec la possibilité de financement via le dispositif Tiers Payant OFPPT.
            </p>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-accent/8 border border-accent/20 mb-8"
              style={{ backgroundColor: 'rgba(201,168,76,0.06)' }}>
              <BookOpen size={20} className="text-accent shrink-0" />
              <p className="text-sm text-foreground">
                <span className="font-700" style={{ fontWeight: 700 }}>Financement OFPPT disponible</span>
                {' '}— 70% pris en charge, 30% par l'entreprise via le dispositif Tiers Payant.
              </p>
            </div>
            <Link href="/formation-platform-formation-detail" className="btn-primary">
              Explorer les formations
              <ArrowRight size={16} />
            </Link>
          </div>

          <div>
            <div className="flex flex-wrap gap-3">
              {categories?.map((cat) => (
                <Link
                  key={`cat-${cat?.label}`}
                  href="/formation-platform-formation-detail"
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full border text-sm font-600 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${cat?.color}`}
                  style={{ fontWeight: 600 }}
                >
                  {cat?.label}
                  <span className="text-xs opacity-60 font-500" style={{ fontWeight: 500 }}>({cat?.count})</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}