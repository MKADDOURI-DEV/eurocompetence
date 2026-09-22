import React from 'react';
import { MapPin, Clock, Briefcase, Star } from 'lucide-react';
import { Job } from './jobData';

const contractColors: Record<string, string> = {
  CDI: 'bg-green-50 text-green-700',
  CDD: 'bg-blue-50 text-blue-700',
  Intérim: 'bg-amber-50 text-amber-700',
  Freelance: 'bg-purple-50 text-purple-700',
  Stage: 'bg-pink-50 text-pink-700',
};

interface Props {
  job: Job;
  isSelected: boolean;
  onClick: () => void;
}

export default function JobCard({ job, isSelected, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-4 rounded-xl border transition-all duration-200 group ${
        isSelected
          ? 'border-primary bg-primary/4 shadow-card'
          : 'border-border bg-white hover:border-primary/30 hover:shadow-card'
      }`}
      style={isSelected ? { backgroundColor: 'rgba(15,32,68,0.03)' } : undefined}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-2 mb-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            {job.featured && (
              <span className="inline-flex items-center gap-1 text-xs font-600 text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full" style={{ fontWeight: 600 }}>
                <Star size={10} fill="currentColor" />
                Mis en avant
              </span>
            )}
          </div>
          <h3 className="text-sm font-700 text-primary line-clamp-2" style={{ fontWeight: 700 }}>{job.title}</h3>
          <p className="text-xs text-muted-foreground mt-0.5">{job.company}</p>
        </div>
        <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
          <Briefcase size={16} className="text-muted-foreground" />
        </div>
      </div>

      {/* Meta */}
      <div className="flex flex-wrap gap-2 mb-3">
        <span className={`status-badge text-xs ${contractColors[job.contract] || 'bg-muted text-muted-foreground'}`}>
          {job.contract}
        </span>
        <span className="text-xs text-muted-foreground flex items-center gap-1">
          <MapPin size={11} />
          {job.city}
        </span>
        <span className="text-xs text-muted-foreground flex items-center gap-1">
          <Clock size={11} />
          {job.experience}
        </span>
      </div>

      {/* Description */}
      <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">{job.description}</p>

      {/* Footer */}
      <div className="mt-3 pt-3 border-t border-border flex items-center justify-between">
        <span className="text-xs text-muted-foreground">{job.postedDate}</span>
        <span className="text-xs font-600 text-accent" style={{ fontWeight: 600 }}>Voir l'offre →</span>
      </div>
    </button>
  );
}