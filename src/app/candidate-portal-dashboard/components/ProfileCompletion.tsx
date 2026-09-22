'use client';
import React from 'react';
import Link from 'next/link';
import { CheckCircle2, Circle, ChevronRight } from 'lucide-react';

const steps = [
  { id: 'step-info', label: 'Informations personnelles', done: true },
  { id: 'step-cv', label: 'CV téléchargé', done: true },
  { id: 'step-photo', label: 'Photo de profil', done: false },
  { id: 'step-skills', label: 'Compétences renseignées', done: true },
  { id: 'step-exp', label: 'Expériences ajoutées', done: false },
  { id: 'step-lang', label: 'Langues renseignées', done: false },
];

export default function ProfileCompletion() {
  const done = steps?.filter(s => s?.done)?.length;
  const pct = Math.round((done / steps?.length) * 100);

  return (
    <div className="card-base">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-700 text-primary" style={{ fontWeight: 700 }}>Complétion du profil</h3>
        <span className="text-sm font-800 text-accent font-tabular" style={{ fontWeight: 800 }}>{pct}%</span>
      </div>

      {/* Progress bar */}
      <div className="w-full h-2 bg-muted rounded-full mb-4 overflow-hidden">
        <div
          className="h-full bg-accent rounded-full transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>

      <ul className="space-y-2 mb-4">
        {steps?.map(({ id, label, done }) => (
          <li key={id} className="flex items-center gap-2.5">
            {done ? (
              <CheckCircle2 size={15} className="text-green-500 shrink-0" />
            ) : (
              <Circle size={15} className="text-border shrink-0" />
            )}
            <span className={`text-xs ${done ? 'text-foreground line-through opacity-60' : 'text-foreground'}`}>
              {label}
            </span>
          </li>
        ))}
      </ul>

      <Link
        href="/candidate-portal-dashboard/profil"
        className="flex items-center justify-between w-full text-xs font-600 text-accent hover:text-gold-700 transition-colors group"
        style={{ fontWeight: 600 }}
      >
        Compléter mon profil
        <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
      </Link>
    </div>
  );
}