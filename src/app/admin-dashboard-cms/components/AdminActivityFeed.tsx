import React from 'react';
import { Users, Send, GraduationCap, MessageSquare, Briefcase, Building2 } from 'lucide-react';
import Icon from '@/components/ui/AppIcon';


const activities = [
  { id: 'act-001', icon: Users, color: 'bg-blue-50 text-blue-600', text: 'Nouveau candidat inscrit', sub: 'Khalid Mansouri — il y a 12 min', time: '14:41' },
  { id: 'act-002', icon: Send, color: 'bg-green-50 text-green-600', text: 'Candidature reçue', sub: 'Poste: Resp. RH — Groupe Saham', time: '14:28' },
  { id: 'act-003', icon: MessageSquare, color: 'bg-amber-50 text-amber-600', text: 'Nouveau message de contact', sub: 'Entreprise XYZ — Demande de formation', time: '13:55' },
  { id: 'act-004', icon: GraduationCap, color: 'bg-purple-50 text-purple-600', text: 'Inscription formation', sub: 'Management — Fatima Zahra Alami', time: '13:22' },
  { id: 'act-005', icon: Briefcase, color: 'bg-indigo-50 text-indigo-600', text: 'Nouvelle offre publiée', sub: 'Formateur QHSE — SFORHET', time: '11:47' },
  { id: 'act-006', icon: Building2, color: 'bg-teal-50 text-teal-600', text: 'Nouvelle entreprise', sub: 'Renault Maroc — Espace entreprise', time: '10:30' },
  { id: 'act-007', icon: Send, color: 'bg-rose-50 text-rose-600', text: 'Candidature — Entretien planifié', sub: 'Youssef Benali — Kenzi Hotels', time: '09:15' },
];

export default function AdminActivityFeed() {
  return (
    <div className="card-base h-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-700 text-primary" style={{ fontWeight: 700 }}>Activité récente</h2>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs text-muted-foreground">En direct</span>
        </div>
      </div>

      <ul className="space-y-3 overflow-y-auto max-h-80 scrollbar-thin">
        {activities?.map(({ id, icon: Icon, color, text, sub, time }) => (
          <li key={id} className="flex items-start gap-3 group">
            <div className={`w-8 h-8 rounded-lg ${color} flex items-center justify-center shrink-0 mt-0.5`}>
              <Icon size={14} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-600 text-foreground" style={{ fontWeight: 600 }}>{text}</p>
              <p className="text-xs text-muted-foreground mt-0.5 truncate">{sub}</p>
            </div>
            <span className="text-xs text-muted-foreground/60 shrink-0">{time}</span>
          </li>
        ))}
      </ul>

      <div className="mt-4 pt-3 border-t border-border">
        <button className="text-xs font-600 text-accent hover:text-gold-700 transition-colors" style={{ fontWeight: 600 }}>
          Voir tout le journal →
        </button>
      </div>
    </div>
  );
}