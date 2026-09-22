'use client';
import React, { useState } from 'react';
import PublicHeader from '@/components/PublicHeader';
import PublicFooter from '@/components/PublicFooter';
import FormationCard from './FormationCard';
import FormationDetailPanel from './FormationDetailPanel';
import { formations, categories, formats, Formation } from './formationData';
import { Search, X, BookOpen } from 'lucide-react';

export default function FormationPlatform() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Toutes les catégories');
  const [selectedFormat, setSelectedFormat] = useState('');
  const [selectedFormation, setSelectedFormation] = useState<Formation | null>(null);

  const filtered = formations?.filter(f => {
    const q = searchQuery?.toLowerCase();
    const matchesSearch = !q || f?.title?.toLowerCase()?.includes(q) || f?.category?.toLowerCase()?.includes(q) || f?.shortDescription?.toLowerCase()?.includes(q);
    const matchesCat = selectedCategory === 'Toutes les catégories' || f?.category === selectedCategory;
    const matchesFormat = !selectedFormat || f?.format === selectedFormat;
    return matchesSearch && matchesCat && matchesFormat;
  });

  return (
    <div className="min-h-screen bg-background">
      <PublicHeader />

      {/* Page header */}
      <div className="bg-primary pt-28 pb-14">
        <div className="container-xl">
          <p className="section-label mb-3" style={{ color: 'var(--accent)' }}>Nos formations</p>
          <h1 className="text-3xl font-800 text-white mb-3" style={{ fontWeight: 800 }}>
            Catalogue de formations
          </h1>
          <p className="text-base text-white/60 max-w-xl mb-7">
            Des programmes de formation professionnelle adaptés aux besoins du marché marocain, 
            avec financement OFPPT disponible jusqu'à 70%.
          </p>

          {/* OFPPT badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30">
            <BookOpen size={15} className="text-accent" />
            <span className="text-xs font-600 text-accent" style={{ fontWeight: 600 }}>
              Financement OFPPT disponible — Tiers Payant (70% OFPPT / 30% entreprise)
            </span>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b border-border sticky top-0 z-20 shadow-nav">
        <div className="container-xl py-4">
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-sm">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Rechercher une formation..."
                value={searchQuery}
                onChange={e => setSearchQuery(e?.target?.value)}
                className="w-full pl-10 pr-8 py-2.5 text-sm border border-border rounded-xl bg-background focus:outline-none focus:border-primary transition-colors"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Category chips */}
            <div className="flex flex-wrap gap-2">
              {categories?.slice(0, 6)?.map(cat => (
                <button
                  key={`cat-chip-${cat}`}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-600 border transition-all ${
                    selectedCategory === cat
                      ? 'bg-primary text-white border-primary' :'bg-white text-muted-foreground border-border hover:border-primary/40 hover:text-primary'
                  }`}
                  style={{ fontWeight: 600 }}
                >
                  {cat === 'Toutes les catégories' ? 'Toutes' : cat}
                </button>
              ))}
            </div>

            {/* Format filter */}
            <div className="flex gap-2 ml-auto">
              {formats?.map(fmt => (
                <button
                  key={`fmt-${fmt}`}
                  onClick={() => setSelectedFormat(selectedFormat === fmt ? '' : fmt)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-600 border transition-all ${
                    selectedFormat === fmt
                      ? 'bg-accent text-primary border-accent' :'bg-white text-muted-foreground border-border hover:border-accent/40'
                  }`}
                  style={{ fontWeight: 600 }}
                >
                  {fmt}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container-xl py-8">
        {/* Results count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-muted-foreground">
            <span className="font-700 text-foreground" style={{ fontWeight: 700 }}>{filtered?.length}</span> formation{filtered?.length > 1 ? 's' : ''} disponible{filtered?.length > 1 ? 's' : ''}
          </p>
        </div>

        {filtered?.length === 0 ? (
          <div className="card-base text-center py-16 max-w-md mx-auto">
            <BookOpen size={36} className="text-muted-foreground mx-auto mb-4 opacity-40" />
            <h3 className="text-base font-600 text-muted-foreground mb-2" style={{ fontWeight: 600 }}>
              Aucune formation disponible
            </h3>
            <p className="text-sm text-muted-foreground">
              De nouvelles formations seront prochainement disponibles. Contactez-nous pour une formation sur mesure.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
            {filtered?.map(formation => (
              <FormationCard
                key={formation?.id}
                formation={formation}
                onClick={() => setSelectedFormation(formation)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Detail panel */}
      {selectedFormation && (
        <FormationDetailPanel
          formation={selectedFormation}
          onClose={() => setSelectedFormation(null)}
        />
      )}

      <PublicFooter />
    </div>
  );
}