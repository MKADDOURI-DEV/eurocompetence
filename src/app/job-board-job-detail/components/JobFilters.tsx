'use client';
import React from 'react';
import { sectors, cities, contracts, experienceLevels } from './jobData';
import { X } from 'lucide-react';

interface FilterState {
  sector: string;
  city: string;
  contract: string;
  experience: string;
}

interface Props {
  filters: FilterState;
  setFilters: (f: FilterState) => void;
}

export default function JobFilters({ filters, setFilters }: Props) {
  const hasActive = filters.sector !== 'Tous les secteurs' || filters.city !== 'Toutes les villes' || filters.contract || filters.experience;

  const reset = () => setFilters({ sector: 'Tous les secteurs', city: 'Toutes les villes', contract: '', experience: '' });

  return (
    <div className="card-base space-y-5">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-700 text-primary" style={{ fontWeight: 700 }}>Filtres</h3>
        {hasActive && (
          <button onClick={reset} className="flex items-center gap-1 text-xs text-accent hover:text-gold-700 font-600 transition-colors" style={{ fontWeight: 600 }}>
            <X size={12} />
            Réinitialiser
          </button>
        )}
      </div>

      {/* Sector */}
      <div>
        <label className="label-field text-xs" htmlFor="filter-sector">Secteur d'activité</label>
        <select
          id="filter-sector"
          value={filters.sector}
          onChange={e => setFilters({ ...filters, sector: e.target.value })}
          className="input-field text-sm mt-1"
        >
          {sectors.map(s => <option key={`sector-${s}`} value={s}>{s}</option>)}
        </select>
      </div>

      {/* City */}
      <div>
        <label className="label-field text-xs" htmlFor="filter-city">Ville</label>
        <select
          id="filter-city"
          value={filters.city}
          onChange={e => setFilters({ ...filters, city: e.target.value })}
          className="input-field text-sm mt-1"
        >
          {cities.map(c => <option key={`city-${c}`} value={c}>{c}</option>)}
        </select>
      </div>

      {/* Contract */}
      <div>
        <p className="label-field text-xs mb-2">Type de contrat</p>
        <div className="flex flex-wrap gap-2">
          {contracts.map(c => (
            <button
              key={`contract-${c}`}
              onClick={() => setFilters({ ...filters, contract: filters.contract === c ? '' : c })}
              className={`px-3 py-1.5 rounded-full text-xs font-600 border transition-all ${
                filters.contract === c
                  ? 'bg-primary text-white border-primary' :'bg-white text-muted-foreground border-border hover:border-primary/40'
              }`}
              style={{ fontWeight: 600 }}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div>
        <p className="label-field text-xs mb-2">Expérience requise</p>
        <div className="space-y-2">
          {experienceLevels.map(exp => (
            <label key={`exp-${exp}`} className="flex items-center gap-2.5 cursor-pointer group">
              <input
                type="radio"
                name="experience"
                value={exp}
                checked={filters.experience === exp}
                onChange={() => setFilters({ ...filters, experience: filters.experience === exp ? '' : exp })}
                className="w-4 h-4 text-primary border-border"
              />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{exp}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}