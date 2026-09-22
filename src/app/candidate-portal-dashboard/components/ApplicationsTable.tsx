'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Eye, Send } from 'lucide-react';

type AppStatus = 'Envoyée' | 'En cours d\'étude' | 'Présélection' | 'Entretien' | 'Acceptée' | 'Refusée';

interface Application {
  id: string;
  poste: string;
  entreprise: string;
  secteur: string;
  ville: string;
  datePostulation: string;
  status: AppStatus;
  contrat: string;
}

const statusConfig: Record<AppStatus, { bg: string; text: string; dot: string }> = {
  'Envoyée': { bg: 'bg-blue-50', text: 'text-blue-700', dot: 'bg-blue-500' },
  'En cours d\'étude': { bg: 'bg-amber-50', text: 'text-amber-700', dot: 'bg-amber-500' },
  'Présélection': { bg: 'bg-indigo-50', text: 'text-indigo-700', dot: 'bg-indigo-500' },
  'Entretien': { bg: 'bg-purple-50', text: 'text-purple-700', dot: 'bg-purple-500' },
  'Acceptée': { bg: 'bg-green-50', text: 'text-green-700', dot: 'bg-green-500' },
  'Refusée': { bg: 'bg-red-50', text: 'text-red-700', dot: 'bg-red-500' },
};

const applications: Application[] = [
  { id: 'app-001', poste: 'Responsable RH', entreprise: 'Groupe OCP', secteur: 'Industrie', ville: 'Casablanca', datePostulation: '18 sept. 2025', status: 'Entretien', contrat: 'CDI' },
  { id: 'app-002', poste: 'Chargé de formation', entreprise: 'Banque Populaire', secteur: 'Finance', ville: 'Casablanca', datePostulation: '14 sept. 2025', status: 'Présélection', contrat: 'CDI' },
  { id: 'app-003', poste: 'Assistant commercial', entreprise: 'Marjane Market', secteur: 'Distribution', ville: 'Rabat', datePostulation: '10 sept. 2025', status: 'En cours d\'étude', contrat: 'CDD' },
  { id: 'app-004', poste: 'Formateur soft skills', entreprise: 'SFORHET', secteur: 'Formation', ville: 'Casablanca', datePostulation: '05 sept. 2025', status: 'Envoyée', contrat: 'Freelance' },
  { id: 'app-005', poste: 'Manager hôtelier', entreprise: 'Kenzi Hotels', secteur: 'Hôtellerie', ville: 'Marrakech', datePostulation: '28 août 2025', status: 'Refusée', contrat: 'CDI' },
  { id: 'app-006', poste: 'Coordinateur RH', entreprise: 'INWI', secteur: 'Télécom', ville: 'Casablanca', datePostulation: '20 août 2025', status: 'Acceptée', contrat: 'CDI' },
];

export default function ApplicationsTable() {
  const [statusFilter, setStatusFilter] = useState<AppStatus | 'Toutes'>('Toutes');

  const filtered = statusFilter === 'Toutes'
    ? applications
    : applications.filter(a => a.status === statusFilter);

  return (
    <div className="card-base">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-base font-700 text-primary" style={{ fontWeight: 700 }}>Mes candidatures</h2>
          <p className="text-xs text-muted-foreground mt-0.5">{filtered.length} candidature{filtered.length > 1 ? 's' : ''}</p>
        </div>

        {/* Filter */}
        <div className="relative">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as AppStatus | 'Toutes')}
            className="appearance-none text-xs border border-border rounded-lg px-3 py-2 pr-7 bg-white text-foreground font-500 cursor-pointer hover:border-primary/30 transition-colors focus:outline-none focus:border-primary"
            style={{ fontWeight: 500 }}
          >
            <option value="Toutes">Tous les statuts</option>
            {Object.keys(statusConfig).map(s => (
              <option key={`filter-${s}`} value={s}>{s}</option>
            ))}
          </select>
          <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto -mx-6 px-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 pr-4 text-xs font-700 text-muted-foreground uppercase tracking-wider whitespace-nowrap" style={{ fontWeight: 700 }}>Poste</th>
              <th className="text-left py-3 pr-4 text-xs font-700 text-muted-foreground uppercase tracking-wider whitespace-nowrap" style={{ fontWeight: 700 }}>Entreprise</th>
              <th className="text-left py-3 pr-4 text-xs font-700 text-muted-foreground uppercase tracking-wider whitespace-nowrap hidden md:table-cell" style={{ fontWeight: 700 }}>Ville</th>
              <th className="text-left py-3 pr-4 text-xs font-700 text-muted-foreground uppercase tracking-wider whitespace-nowrap hidden lg:table-cell" style={{ fontWeight: 700 }}>Contrat</th>
              <th className="text-left py-3 pr-4 text-xs font-700 text-muted-foreground uppercase tracking-wider whitespace-nowrap hidden lg:table-cell" style={{ fontWeight: 700 }}>Date</th>
              <th className="text-left py-3 pr-4 text-xs font-700 text-muted-foreground uppercase tracking-wider whitespace-nowrap" style={{ fontWeight: 700 }}>Statut</th>
              <th className="py-3 text-xs font-700 text-muted-foreground uppercase tracking-wider" style={{ fontWeight: 700 }}></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filtered.map((app) => {
              const sc = statusConfig[app.status];
              return (
                <tr key={app.id} className="hover:bg-muted/40 transition-colors group">
                  <td className="py-3.5 pr-4">
                    <span className="font-600 text-foreground text-sm" style={{ fontWeight: 600 }}>{app.poste}</span>
                  </td>
                  <td className="py-3.5 pr-4">
                    <span className="text-sm text-muted-foreground">{app.entreprise}</span>
                  </td>
                  <td className="py-3.5 pr-4 hidden md:table-cell">
                    <span className="text-sm text-muted-foreground">{app.ville}</span>
                  </td>
                  <td className="py-3.5 pr-4 hidden lg:table-cell">
                    <span className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground font-500" style={{ fontWeight: 500 }}>{app.contrat}</span>
                  </td>
                  <td className="py-3.5 pr-4 hidden lg:table-cell">
                    <span className="text-xs text-muted-foreground">{app.datePostulation}</span>
                  </td>
                  <td className="py-3.5 pr-4">
                    <span className={`status-badge ${sc.bg} ${sc.text}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${sc.dot} mr-1.5`} />
                      {app.status}
                    </span>
                  </td>
                  <td className="py-3.5 text-right">
                    <button className="p-1.5 rounded-md text-muted-foreground hover:text-primary hover:bg-muted opacity-0 group-hover:opacity-100 transition-all" title="Voir le détail">
                      <Eye size={14} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-10">
          <Send size={28} className="text-muted-foreground mx-auto mb-3 opacity-40" />
          <p className="text-sm text-muted-foreground">Aucune candidature avec ce statut.</p>
        </div>
      )}

      <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
        <p className="text-xs text-muted-foreground">{applications.length} candidatures au total</p>
        <Link href="/candidate-portal-dashboard/candidatures" className="text-xs font-600 text-accent hover:text-gold-700 transition-colors" style={{ fontWeight: 600 }}>
          Voir tout →
        </Link>
      </div>
    </div>
  );
}