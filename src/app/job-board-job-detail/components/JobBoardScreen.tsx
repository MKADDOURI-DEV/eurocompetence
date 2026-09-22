'use client';
import React, { useState } from 'react';
import PublicHeader from '@/components/PublicHeader';
import PublicFooter from '@/components/PublicFooter';
import JobFilters from './JobFilters';
import JobCard from './JobCard';
import JobDetailPanel from './JobDetailPanel';
import { jobs, Job } from './jobData';
import { Search, SlidersHorizontal, X } from 'lucide-react';

export default function JobBoardScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedJob, setSelectedJob] = useState<Job | null>(jobs[0]);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [filters, setFilters] = useState({
    sector: 'Tous les secteurs',
    city: 'Toutes les villes',
    contract: '' as string,
    experience: '' as string,
  });

  const filtered = jobs.filter(job => {
    const q = searchQuery.toLowerCase();
    const matchesSearch = !q || job.title.toLowerCase().includes(q) || job.company.toLowerCase().includes(q) || job.sector.toLowerCase().includes(q);
    const matchesSector = filters.sector === 'Tous les secteurs' || job.sector === filters.sector;
    const matchesCity = filters.city === 'Toutes les villes' || job.city === filters.city;
    const matchesContract = !filters.contract || job.contract === filters.contract;
    const matchesExp = !filters.experience || job.experience === filters.experience;
    return matchesSearch && matchesSector && matchesCity && matchesContract && matchesExp;
  });

  return (
    <div className="min-h-screen bg-background">
      <PublicHeader />

      {/* Page header */}
      <div className="bg-primary pt-28 pb-12">
        <div className="container-xl">
          <p className="section-label mb-3" style={{ color: 'var(--accent)' }}>Recrutement</p>
          <h1 className="text-3xl font-800 text-white mb-3" style={{ fontWeight: 800 }}>
            Offres d'emploi
          </h1>
          <p className="text-base text-white/60 max-w-lg">
            Découvrez les opportunités professionnelles sélectionnées par SFORHET pour vous.
          </p>

          {/* Search bar */}
          <div className="mt-7 flex gap-3 max-w-2xl">
            <div className="flex-1 relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Poste, entreprise, secteur..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 bg-white rounded-xl text-sm border-0 focus:outline-none focus:ring-2 focus:ring-accent shadow-card"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  <X size={16} />
                </button>
              )}
            </div>
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className={`flex items-center gap-2 px-4 py-3.5 rounded-xl text-sm font-600 border transition-all ${
                filtersOpen ? 'bg-accent text-primary border-accent' : 'bg-white/10 text-white border-white/20 hover:bg-white/20'
              }`}
              style={{ fontWeight: 600 }}
            >
              <SlidersHorizontal size={16} />
              Filtres
            </button>
          </div>
        </div>
      </div>

      <div className="container-xl py-8">
        <div className="flex gap-6">
          {/* Filters sidebar */}
          <div className={`${filtersOpen ? 'block' : 'hidden'} lg:block w-full lg:w-64 shrink-0`}>
            <JobFilters filters={filters} setFilters={setFilters} />
          </div>

          {/* Job list + detail */}
          <div className="flex-1 min-w-0">
            {/* Results header */}
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-muted-foreground">
                <span className="font-700 text-foreground" style={{ fontWeight: 700 }}>{filtered.length}</span> offre{filtered.length > 1 ? 's' : ''} trouvée{filtered.length > 1 ? 's' : ''}
              </p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
              {/* Job list */}
              <div className="xl:col-span-2 space-y-3">
                {filtered.length === 0 ? (
                  <div className="card-base text-center py-12">
                    <Search size={32} className="text-muted-foreground mx-auto mb-3 opacity-40" />
                    <p className="text-sm font-600 text-muted-foreground mb-1" style={{ fontWeight: 600 }}>
                      Aucune offre correspondante
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Nous n'avons actuellement aucune offre correspondant à vos critères.
                    </p>
                  </div>
                ) : (
                  filtered.map(job => (
                    <JobCard
                      key={job.id}
                      job={job}
                      isSelected={selectedJob?.id === job.id}
                      onClick={() => setSelectedJob(job)}
                    />
                  ))
                )}
              </div>

              {/* Job detail */}
              <div className="xl:col-span-3">
                {selectedJob ? (
                  <div className="sticky top-24">
                    <JobDetailPanel job={selectedJob} />
                  </div>
                ) : (
                  <div className="card-base text-center py-16">
                    <p className="text-sm text-muted-foreground">Sélectionnez une offre pour voir les détails</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <PublicFooter />
    </div>
  );
}