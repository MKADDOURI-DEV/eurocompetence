import React from 'react';
import { Send, Bookmark, CalendarCheck, GraduationCap } from 'lucide-react';
import Icon from '@/components/ui/AppIcon';


const kpis = [
  {
    id: 'kpi-applications',
    icon: Send,
    label: 'Candidatures envoyées',
    value: '8',
    sub: '2 en cours d\'étude',
    trend: '+2 ce mois',
    trendUp: true,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    id: 'kpi-interviews',
    icon: CalendarCheck,
    label: 'Entretiens planifiés',
    value: '2',
    sub: 'Prochain : 25 sept.',
    trend: 'Confirmé',
    trendUp: true,
    color: 'bg-green-50 text-green-600',
  },
  {
    id: 'kpi-saved',
    icon: Bookmark,
    label: 'Offres sauvegardées',
    value: '7',
    sub: '3 expirent bientôt',
    trend: 'À consulter',
    trendUp: null,
    color: 'bg-amber-50 text-amber-600',
  },
  {
    id: 'kpi-formations',
    icon: GraduationCap,
    label: 'Formations inscrites',
    value: '1',
    sub: 'Management — Oct.',
    trend: 'En attente',
    trendUp: null,
    color: 'bg-purple-50 text-purple-600',
  },
];

export default function DashboardKPIs() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {kpis?.map(({ id, icon: Icon, label, value, sub, trend, trendUp, color }) => (
        <div key={id} className="card-base hover:shadow-card-hover transition-all duration-200">
          <div className="flex items-start justify-between mb-4">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${color}`}>
              <Icon size={18} />
            </div>
            <span className={`text-xs font-600 px-2 py-1 rounded-full ${
              trendUp === true ? 'bg-green-50 text-green-700' :
              trendUp === false ? 'bg-red-50 text-red-700': 'bg-muted text-muted-foreground'
            }`} style={{ fontWeight: 600 }}>
              {trend}
            </span>
          </div>
          <div className="text-3xl font-800 text-primary font-tabular mb-1" style={{ fontWeight: 800 }}>{value}</div>
          <div className="text-sm font-600 text-foreground mb-0.5" style={{ fontWeight: 600 }}>{label}</div>
          <div className="text-xs text-muted-foreground">{sub}</div>
        </div>
      ))}
    </div>
  );
}