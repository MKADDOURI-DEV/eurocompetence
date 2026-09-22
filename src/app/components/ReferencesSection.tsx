import React from 'react';
import { Building2 } from 'lucide-react';

export default function ReferencesSection() {
  // Backend integration: fetch references/partners from database
  const references: { id: string; name: string; logo?: string }[] = [];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-xl">
        <div className="text-center mb-10">
          <p className="section-label mb-3">Ils nous font confiance</p>
          <h2 className="text-2xl font-700 text-primary" style={{ fontWeight: 700 }}>
            Nos références
          </h2>
        </div>

        {references.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-4">
              <Building2 size={28} className="text-muted-foreground" />
            </div>
            <h3 className="text-base font-600 text-muted-foreground mb-2" style={{ fontWeight: 600 }}>
              Références en cours de publication
            </h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Nos références clients seront prochainement disponibles. Contactez-nous pour en savoir plus sur nos réalisations.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {references.map((ref) => (
              <div key={`ref-${ref.id}`} className="card-base flex items-center justify-center h-20 hover:shadow-card transition-shadow">
                {ref.logo ? (
                  <img src={ref.logo} alt={`Logo ${ref.name}`} className="max-h-10 max-w-full object-contain" />
                ) : (
                  <span className="text-sm font-600 text-muted-foreground text-center px-2">{ref.name}</span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}