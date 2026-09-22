import React from 'react';
import { Users, Building2, Briefcase, Send, GraduationCap, MessageSquare, TrendingUp, TrendingDown } from 'lucide-react';
import Icon from '@/components/ui/AppIcon';


const kpis = [
  {
    id: 'kpi-candidates',
    icon: Users,
    label: 'Candidats inscrits',
    value: '247',
    delta: '+18 ce mois',
    up: true,
    color: 'bg-blue-50 text-blue-600',
    border: 'border-blue-100',
  },
  {
    id: 'kpi-companies',
    icon: Building2,
    label: 'Entreprises',
    value: '34',
    delta: '+3 ce mois',
    up: true,
    color: 'bg-indigo-50 text-indigo-600',
    border: 'border-indigo-100',
  },
  {
    id: 'kpi-jobs',
    icon: Briefcase,
    label: 'Offres actives',
    value: '12',
    delta: '3 expirent bientôt',
    up: null,
    color: 'bg-amber-50 text-amber-600',
    border: 'border-amber-100',
  },
  {
    id: 'kpi-applications',
    icon: Send,
    label: 'Candidatures',
    value: '89',
    delta: '+24 cette semaine',
    up: true,
    color: 'bg-green-50 text-green-600',
    border: 'border-green-100',
  },
  {
    id: 'kpi-formations',
    icon: GraduationCap,
    label: 'Formations actives',
    value: '8',
    delta: '2 nouvelles',
    up: true,
    color: 'bg-purple-50 text-purple-600',
    border: 'border-purple-100',
  },
  {
    id: 'kpi-messages',
    icon: MessageSquare,
    label: 'Messages non lus',
    value: '4',
    delta: 'À traiter',
    up: false,
    color: 'bg-red-50 text-red-600',
    border: 'border-red-100',
  },
];

export default function AdminKPIs() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
      {kpis?.map(({ id, icon: Icon, label, value, delta, up, color, border }) => (
        <div key={id} className={`card-base border ${border} hover:shadow-card-hover transition-all duration-200`}>
          <div className={`w-9 h-9 rounded-lg ${color} flex items-center justify-center mb-3`}>
            <Icon size={16} />
          </div>
          <div className="text-2xl font-800 text-primary font-tabular mb-1" style={{ fontWeight: 800 }}>{value}</div>
          <div className="text-xs font-600 text-foreground mb-1.5" style={{ fontWeight: 600 }}>{label}</div>
          <div className={`flex items-center gap-1 text-xs font-500 ${
            up === true ? 'text-green-600' : up === false ? 'text-red-600' : 'text-amber-600'
          }`} style={{ fontWeight: 500 }}>
            {up === true ? <TrendingUp size={11} /> : up === false ? <TrendingDown size={11} /> : null}
            {delta}
          </div>
        </div>
      ))}
    </div>
  );
}