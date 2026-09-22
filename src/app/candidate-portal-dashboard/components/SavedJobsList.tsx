import React from 'react';
import Link from 'next/link';
import { Bookmark, MapPin, Clock, ChevronRight } from 'lucide-react';

const savedJobs = [
  { id: 'saved-001', title: 'Directeur commercial', company: 'Attijariwafa Bank', city: 'Casablanca', contract: 'CDI', expiresIn: '3 jours' },
  { id: 'saved-002', title: 'Chef de projet RH', company: 'Lydec', city: 'Casablanca', contract: 'CDI', expiresIn: '8 jours' },
  { id: 'saved-003', title: 'Formateur management', company: 'SFORHET', city: 'Casablanca', contract: 'Freelance', expiresIn: '12 jours' },
  { id: 'saved-004', title: 'Responsable formation', company: 'Royal Air Maroc', city: 'Casablanca', contract: 'CDI', expiresIn: '15 jours' },
];

export default function SavedJobsList() {
  return (
    <div className="card-base">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-700 text-primary" style={{ fontWeight: 700 }}>Offres sauvegardées</h3>
        <span className="text-xs text-muted-foreground">{savedJobs?.length} offres</span>
      </div>

      <ul className="space-y-3">
        {savedJobs?.map(({ id, title, company, city, contract, expiresIn }) => (
          <li key={id} className="group">
            <Link
              href="/job-board-job-detail"
              className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors -mx-3"
            >
              <div className="w-8 h-8 rounded-lg bg-primary/8 flex items-center justify-center shrink-0 mt-0.5"
                style={{ backgroundColor: 'rgba(15,32,68,0.06)' }}>
                <Bookmark size={14} className="text-primary/60" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-600 text-foreground truncate" style={{ fontWeight: 600 }}>{title}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{company}</div>
                <div className="flex items-center gap-3 mt-1.5">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin size={10} />
                    {city}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-amber-600">
                    <Clock size={10} />
                    Expire dans {expiresIn}
                  </div>
                </div>
              </div>
              <ChevronRight size={14} className="text-muted-foreground/40 group-hover:text-primary mt-1 transition-colors shrink-0" />
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-3 pt-3 border-t border-border">
        <Link href="/candidate-portal-dashboard/favoris" className="text-xs font-600 text-accent hover:text-gold-700 transition-colors" style={{ fontWeight: 600 }}>
          Voir toutes les offres sauvegardées →
        </Link>
      </div>
    </div>
  );
}