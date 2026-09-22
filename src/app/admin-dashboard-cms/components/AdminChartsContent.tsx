'use client';
import React, { useState } from 'react';
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Legend
} from 'recharts';

const candidaturesData = [
  { month: 'Avr', candidatures: 28, entretiens: 8 },
  { month: 'Mai', candidatures: 35, entretiens: 12 },
  { month: 'Juin', candidatures: 22, entretiens: 7 },
  { month: 'Juil', candidatures: 18, entretiens: 5 },
  { month: 'Août', candidatures: 31, entretiens: 10 },
  { month: 'Sept', candidatures: 44, entretiens: 15 },
];

const formationsData = [
  { category: 'Management', inscrits: 24 },
  { category: 'Soft Skills', inscrits: 31 },
  { category: 'Langues', inscrits: 18 },
  { category: 'QHSE', inscrits: 12 },
  { category: 'Commerce', inscrits: 22 },
  { category: 'Bureautique', inscrits: 15 },
  { category: 'Hôtellerie', inscrits: 28 },
];

const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: Array<{ name: string; value: number; color: string }>; label?: string }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-border rounded-xl shadow-card-hover p-3 text-xs">
      <p className="font-700 text-primary mb-2" style={{ fontWeight: 700 }}>{label}</p>
      {payload.map((p) => (
        <div key={`tooltip-${p.name}`} className="flex items-center gap-2 mb-1">
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: p.color }} />
          <span className="text-muted-foreground">{p.name}:</span>
          <span className="font-600 text-foreground" style={{ fontWeight: 600 }}>{p.value}</span>
        </div>
      ))}
    </div>
  );
};

export default function AdminChartsContent() {
  const [activeChart, setActiveChart] = useState<'candidatures' | 'formations'>('candidatures');

  return (
    <div className="card-base">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-sm font-700 text-primary" style={{ fontWeight: 700 }}>Activité de la plateforme</h2>
          <p className="text-xs text-muted-foreground mt-0.5">6 derniers mois</p>
        </div>
        <div className="flex bg-muted rounded-lg p-1">
          {[
            { key: 'candidatures' as const, label: 'Candidatures' },
            { key: 'formations' as const, label: 'Formations' },
          ].map(({ key, label }) => (
            <button
              key={`chart-tab-${key}`}
              onClick={() => setActiveChart(key)}
              className={`px-3 py-1.5 text-xs font-600 rounded-md transition-all ${
                activeChart === key ? 'bg-white text-primary shadow-card' : 'text-muted-foreground hover:text-foreground'
              }`}
              style={{ fontWeight: 600 }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {activeChart === 'candidatures' ? (
        <ResponsiveContainer width="100%" height={240}>
          <AreaChart data={candidaturesData} margin={{ top: 5, right: 5, bottom: 0, left: -20 }}>
            <defs>
              <linearGradient id="gradCandidatures" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.15} />
                <stop offset="95%" stopColor="var(--primary)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="gradEntretiens" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--accent)" stopOpacity={0.2} />
                <stop offset="95%" stopColor="var(--accent)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis dataKey="month" tick={{ fontSize: 11, fill: 'var(--muted-foreground)' }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 11, fill: 'var(--muted-foreground)' }} axisLine={false} tickLine={false} />
            <Tooltip content={<CustomTooltip />} />
            <Legend wrapperStyle={{ fontSize: '12px' }} />
            <Area type="monotone" dataKey="candidatures" name="Candidatures" stroke="var(--primary)" strokeWidth={2} fill="url(#gradCandidatures)" />
            <Area type="monotone" dataKey="entretiens" name="Entretiens" stroke="var(--accent)" strokeWidth={2} fill="url(#gradEntretiens)" />
          </AreaChart>
        </ResponsiveContainer>
      ) : (
        <ResponsiveContainer width="100%" height={240}>
          <BarChart data={formationsData} margin={{ top: 5, right: 5, bottom: 0, left: -20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis dataKey="category" tick={{ fontSize: 10, fill: 'var(--muted-foreground)' }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 11, fill: 'var(--muted-foreground)' }} axisLine={false} tickLine={false} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="inscrits" name="Inscrits" fill="var(--accent)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}