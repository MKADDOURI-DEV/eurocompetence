import React from 'react';
import { Clock, MapPin, Calendar, Users, BookOpen, Zap } from 'lucide-react';
import { Formation } from './formationData';

const statusConfig = {
  Disponible: { bg: 'bg-green-50 text-green-700', dot: 'bg-green-500' },
  Complet: { bg: 'bg-red-50 text-red-700', dot: 'bg-red-500' },
  Bientôt: { bg: 'bg-amber-50 text-amber-700', dot: 'bg-amber-500' },
};

const formatColors: Record<string, string> = {
  Présentiel: 'bg-blue-50 text-blue-700',
  Distanciel: 'bg-purple-50 text-purple-700',
  Hybride: 'bg-teal-50 text-teal-700',
};

interface Props {
  formation: Formation;
  onClick: () => void;
}

export default function FormationCard({ formation, onClick }: Props) {
  const sc = statusConfig[formation.status];
  const occupancy = Math.round((formation.currentParticipants / formation.maxParticipants) * 100);

  return (
    <button
      onClick={onClick}
      className="card-base card-hover text-left group flex flex-col h-full hover:border-primary/30"
    >
      {/* Category tag */}
      <div className="flex items-start justify-between gap-2 mb-4">
        <span className="text-xs font-600 text-accent bg-accent/10 px-2.5 py-1 rounded-full" style={{ fontWeight: 600 }}>
          {formation.category}
        </span>
        <span className={`status-badge text-xs ${sc.bg}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${sc.dot} mr-1.5`} />
          {formation.status}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-sm font-700 text-primary mb-2 line-clamp-2 group-hover:text-accent transition-colors" style={{ fontWeight: 700 }}>
        {formation.title}
      </h3>
      <p className="text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-2 flex-1">
        {formation.shortDescription}
      </p>

      {/* Meta */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Clock size={12} className="text-accent shrink-0" />
          {formation.duration}
        </div>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <MapPin size={12} className="text-accent shrink-0" />
          {formation.location}
        </div>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Calendar size={12} className="text-accent shrink-0" />
          {formation.nextDate}
        </div>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <BookOpen size={12} className="text-accent shrink-0" />
          {formation.level}
        </div>
      </div>

      {/* Occupancy bar */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-1.5">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Users size={11} />
            {formation.currentParticipants}/{formation.maxParticipants} places
          </div>
          <span className="text-xs text-muted-foreground">{occupancy}%</span>
        </div>
        <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all ${occupancy >= 90 ? 'bg-red-400' : occupancy >= 60 ? 'bg-amber-400' : 'bg-green-400'}`}
            style={{ width: `${occupancy}%` }}
          />
        </div>
      </div>

      {/* Footer */}
      <div className="pt-3 border-t border-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className={`text-xs px-2 py-1 rounded-md ${formatColors[formation.format] || 'bg-muted text-muted-foreground'}`} style={{ fontWeight: 500 }}>
            {formation.format}
          </span>
          {formation.ofpptFinancing && (
            <span className="flex items-center gap-1 text-xs font-600 text-amber-600 bg-amber-50 px-2 py-1 rounded-md" style={{ fontWeight: 600 }}>
              <Zap size={10} />
              OFPPT
            </span>
          )}
        </div>
        <span className="text-xs font-600 text-accent group-hover:translate-x-0.5 transition-transform inline-block" style={{ fontWeight: 600 }}>
          Voir →
        </span>
      </div>
    </button>
  );
}