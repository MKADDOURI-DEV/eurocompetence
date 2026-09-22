'use client';
import React, { useState } from 'react';
import { toast } from 'sonner';
import { Search, Plus, Edit2, Trash2, Eye, ChevronUp, ChevronDown, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { jobs as allJobs, Job } from '@/app/job-board-job-detail/components/jobData';
import Link from 'next/link';

type SortField = 'title' | 'company' | 'city' | 'contract' | 'postedDate';
type SortDir = 'asc' | 'desc';

export default function AdminJobsTable() {
  const [search, setSearch] = useState('');
  const [sortField, setSortField] = useState<SortField>('postedDate');
  const [sortDir, setSortDir] = useState<SortDir>('desc');
  const [page, setPage] = useState(1);
  const [perPage] = useState(5);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [deleteTarget, setDeleteTarget] = useState<Job | null>(null);

  const filtered = allJobs.filter(j => {
    const q = search.toLowerCase();
    return !q || j.title.toLowerCase().includes(q) || j.company.toLowerCase().includes(q) || j.city.toLowerCase().includes(q);
  });

  const sorted = [...filtered].sort((a, b) => {
    const av = a[sortField] ?? '';
    const bv = b[sortField] ?? '';
    return sortDir === 'asc' ? av.localeCompare(bv) : bv.localeCompare(av);
  });

  const totalPages = Math.ceil(sorted.length / perPage);
  const paginated = sorted.slice((page - 1) * perPage, page * perPage);

  const toggleSort = (field: SortField) => {
    if (sortField === field) setSortDir(d => d === 'asc' ? 'desc' : 'asc');
    else { setSortField(field); setSortDir('asc'); }
  };

  const toggleSelect = (id: string) => {
    setSelected(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const toggleAll = () => {
    if (selected.size === paginated.length) setSelected(new Set());
    else setSelected(new Set(paginated.map(j => j.id)));
  };

  const handleDelete = (job: Job) => {
    setDeleteTarget(job);
  };

  const confirmDelete = () => {
    // Backend integration: delete job from Supabase jobs table
    toast.success(`Offre "${deleteTarget?.title}" supprimée`);
    setDeleteTarget(null);
  };

  const handleBulkDelete = () => {
    // Backend integration: bulk delete from Supabase
    toast.success(`${selected.size} offre${selected.size > 1 ? 's' : ''} supprimée${selected.size > 1 ? 's' : ''}`);
    setSelected(new Set());
  };

  const SortIcon = ({ field }: { field: SortField }) => (
    <span className="inline-flex flex-col ml-1">
      <ChevronUp size={10} className={sortField === field && sortDir === 'asc' ? 'text-primary' : 'text-muted-foreground/40'} />
      <ChevronDown size={10} className={sortField === field && sortDir === 'desc' ? 'text-primary' : 'text-muted-foreground/40'} />
    </span>
  );

  const contractColors: Record<string, string> = {
    CDI: 'bg-green-50 text-green-700',
    CDD: 'bg-blue-50 text-blue-700',
    Intérim: 'bg-amber-50 text-amber-700',
    Freelance: 'bg-purple-50 text-purple-700',
    Stage: 'bg-pink-50 text-pink-700',
  };

  return (
    <div className="card-base">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
        <div>
          <h2 className="text-sm font-700 text-primary" style={{ fontWeight: 700 }}>Gestion des offres d'emploi</h2>
          <p className="text-xs text-muted-foreground mt-0.5">{filtered.length} offre{filtered.length > 1 ? 's' : ''} au total</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Rechercher..."
              value={search}
              onChange={e => { setSearch(e.target.value); setPage(1); }}
              className="pl-9 pr-8 py-2 text-xs border border-border rounded-lg bg-white focus:outline-none focus:border-primary transition-colors w-48"
            />
            {search && (
              <button onClick={() => setSearch('')} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                <X size={12} />
              </button>
            )}
          </div>
          <button className="btn-primary text-xs py-2 px-4">
            <Plus size={14} />
            Nouvelle offre
          </button>
        </div>
      </div>

      {/* Bulk action bar */}
      {selected.size > 0 && (
        <div className="flex items-center gap-3 mb-4 px-4 py-3 bg-primary/5 border border-primary/20 rounded-xl animate-slide-down">
          <span className="text-xs font-600 text-primary" style={{ fontWeight: 600 }}>{selected.size} offre{selected.size > 1 ? 's' : ''} sélectionnée{selected.size > 1 ? 's' : ''}</span>
          <button onClick={handleBulkDelete} className="flex items-center gap-1.5 text-xs font-600 text-red-600 hover:text-red-700 transition-colors" style={{ fontWeight: 600 }}>
            <Trash2 size={13} />
            Supprimer
          </button>
          <button onClick={() => setSelected(new Set())} className="ml-auto text-xs text-muted-foreground hover:text-foreground transition-colors">
            Annuler
          </button>
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto -mx-6 px-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="py-3 pr-3 w-10">
                <input
                  type="checkbox"
                  checked={selected.size === paginated.length && paginated.length > 0}
                  onChange={toggleAll}
                  className="w-4 h-4 rounded border-border text-primary"
                />
              </th>
              {[
                { field: 'title' as SortField, label: 'Poste' },
                { field: 'company' as SortField, label: 'Entreprise' },
                { field: 'city' as SortField, label: 'Ville' },
                { field: 'contract' as SortField, label: 'Contrat' },
                { field: 'postedDate' as SortField, label: 'Publié le' },
              ].map(({ field, label }) => (
                <th
                  key={`th-${field}`}
                  onClick={() => toggleSort(field)}
                  className="text-left py-3 pr-4 text-xs font-700 text-muted-foreground uppercase tracking-wider cursor-pointer hover:text-foreground transition-colors whitespace-nowrap select-none"
                  style={{ fontWeight: 700 }}
                >
                  {label}
                  <SortIcon field={field} />
                </th>
              ))}
              <th className="text-left py-3 text-xs font-700 text-muted-foreground uppercase tracking-wider" style={{ fontWeight: 700 }}>Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {paginated.map(job => (
              <tr key={job.id} className="hover:bg-muted/40 transition-colors group">
                <td className="py-3.5 pr-3">
                  <input
                    type="checkbox"
                    checked={selected.has(job.id)}
                    onChange={() => toggleSelect(job.id)}
                    className="w-4 h-4 rounded border-border text-primary"
                  />
                </td>
                <td className="py-3.5 pr-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-600 text-foreground" style={{ fontWeight: 600 }}>{job.title}</span>
                    {job.featured && (
                      <span className="text-xs bg-amber-50 text-amber-600 px-1.5 py-0.5 rounded font-600" style={{ fontWeight: 600 }}>★</span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">{job.sector}</p>
                </td>
                <td className="py-3.5 pr-4 text-sm text-muted-foreground">{job.company}</td>
                <td className="py-3.5 pr-4 text-sm text-muted-foreground">{job.city}</td>
                <td className="py-3.5 pr-4">
                  <span className={`status-badge text-xs ${contractColors[job.contract] || 'bg-muted text-muted-foreground'}`}>
                    {job.contract}
                  </span>
                </td>
                <td className="py-3.5 pr-4 text-xs text-muted-foreground">{job.postedDate}</td>
                <td className="py-3.5">
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Link href="/job-board-job-detail" title="Voir l'offre" className="p-1.5 rounded-md text-muted-foreground hover:text-primary hover:bg-muted transition-all">
                      <Eye size={14} />
                    </Link>
                    <button title="Modifier l'offre" className="p-1.5 rounded-md text-muted-foreground hover:text-primary hover:bg-muted transition-all">
                      <Edit2 size={14} />
                    </button>
                    <button
                      title="Supprimer l'offre — cette action est irréversible"
                      onClick={() => handleDelete(job)}
                      className="p-1.5 rounded-md text-muted-foreground hover:text-red-600 hover:bg-red-50 transition-all"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Empty state */}
      {paginated.length === 0 && (
        <div className="text-center py-12">
          <Search size={28} className="text-muted-foreground mx-auto mb-3 opacity-40" />
          <p className="text-sm font-600 text-muted-foreground" style={{ fontWeight: 600 }}>Aucune offre trouvée</p>
          <p className="text-xs text-muted-foreground mt-1">Modifiez votre recherche ou créez une nouvelle offre.</p>
        </div>
      )}

      {/* Pagination */}
      <div className="mt-5 pt-4 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-muted-foreground">
          Affichage de <span className="font-600 text-foreground" style={{ fontWeight: 600 }}>{(page - 1) * perPage + 1}</span>–
          <span className="font-600 text-foreground" style={{ fontWeight: 600 }}>{Math.min(page * perPage, sorted.length)}</span> sur{' '}
          <span className="font-600 text-foreground" style={{ fontWeight: 600 }}>{sorted.length}</span> offres
        </p>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1}
            className="p-1.5 rounded-md border border-border text-muted-foreground hover:text-primary hover:border-primary/40 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft size={14} />
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
            <button
              key={`page-${p}`}
              onClick={() => setPage(p)}
              className={`w-8 h-8 rounded-md text-xs font-600 transition-all ${
                page === p
                  ? 'bg-primary text-white' :'border border-border text-muted-foreground hover:text-primary hover:border-primary/40'
              }`}
              style={{ fontWeight: 600 }}
            >
              {p}
            </button>
          ))}
          <button
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="p-1.5 rounded-md border border-border text-muted-foreground hover:text-primary hover:border-primary/40 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>

      {/* Delete confirmation modal */}
      {deleteTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-primary/40 backdrop-blur-sm" onClick={() => setDeleteTarget(null)} />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 animate-slide-up">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
                <Trash2 size={18} className="text-red-600" />
              </div>
              <div>
                <h3 className="text-base font-700 text-primary" style={{ fontWeight: 700 }}>Supprimer cette offre</h3>
                <p className="text-xs text-muted-foreground">Cette action est irréversible</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Êtes-vous sûr de vouloir supprimer l'offre{' '}
              <span className="font-700 text-foreground" style={{ fontWeight: 700 }}>"{deleteTarget.title}"</span>{' '}
              de {deleteTarget.company} ? Toutes les candidatures associées seront également supprimées.
            </p>
            <div className="flex gap-3">
              <button onClick={() => setDeleteTarget(null)} className="btn-outline flex-1 text-sm">
                Annuler
              </button>
              <button
                onClick={confirmDelete}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-red-600 text-white text-sm font-600 rounded-lg hover:bg-red-700 transition-colors"
                style={{ fontWeight: 600 }}
              >
                <Trash2 size={15} />
                Supprimer définitivement
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}