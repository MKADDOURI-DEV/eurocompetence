'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AppLogo from '@/components/ui/AppLogo';
import { LayoutDashboard, Users, Building2, Briefcase, Send, GraduationCap, FileText, TrendingUp, Settings, LogOut, ChevronLeft, ChevronRight, MessageSquare, Award, BookOpen, Shield } from 'lucide-react';
import Icon from '@/components/ui/AppIcon';


const navGroups = [
  {
    id: 'group-overview',
    label: 'Vue d\'ensemble',
    items: [
      { key: 'nav-admin-dash', icon: LayoutDashboard, label: 'Tableau de bord', href: '/admin-dashboard-cms', badge: null },
    ],
  },
  {
    id: 'group-people',
    label: 'Personnes',
    items: [
      { key: 'nav-admin-candidates', icon: Users, label: 'Candidats', href: '/admin-dashboard-cms/candidats', badge: '12' },
      { key: 'nav-admin-companies', icon: Building2, label: 'Entreprises', href: '/admin-dashboard-cms/entreprises', badge: null },
    ],
  },
  {
    id: 'group-recruitment',
    label: 'Recrutement',
    items: [
      { key: 'nav-admin-jobs', icon: Briefcase, label: 'Offres d\'emploi', href: '/admin-dashboard-cms/offres', badge: '3' },
      { key: 'nav-admin-apps', icon: Send, label: 'Candidatures', href: '/admin-dashboard-cms/candidatures', badge: '8' },
    ],
  },
  {
    id: 'group-training',
    label: 'Formation',
    items: [
      { key: 'nav-admin-formations', icon: GraduationCap, label: 'Formations', href: '/admin-dashboard-cms/formations', badge: null },
      { key: 'nav-admin-inscriptions', icon: FileText, label: 'Inscriptions', href: '/admin-dashboard-cms/inscriptions', badge: '5' },
      { key: 'nav-admin-insertion', icon: TrendingUp, label: 'Insertion', href: '/admin-dashboard-cms/insertion', badge: null },
    ],
  },
  {
    id: 'group-content',
    label: 'Contenu',
    items: [
      { key: 'nav-admin-blog', icon: BookOpen, label: 'Actualités', href: '/admin-dashboard-cms/actualites', badge: null },
      { key: 'nav-admin-messages', icon: MessageSquare, label: 'Messages', href: '/admin-dashboard-cms/messages', badge: '4' },
      { key: 'nav-admin-partners', icon: Award, label: 'Partenaires', href: '/admin-dashboard-cms/partenaires', badge: null },
    ],
  },
  {
    id: 'group-system',
    label: 'Système',
    items: [
      { key: 'nav-admin-users', icon: Shield, label: 'Utilisateurs', href: '/admin-dashboard-cms/utilisateurs', badge: null },
      { key: 'nav-admin-settings', icon: Settings, label: 'Paramètres', href: '/admin-dashboard-cms/parametres', badge: null },
    ],
  },
];

interface Props {
  collapsed: boolean;
  setCollapsed: (v: boolean) => void;
}

export default function AdminSidebar({ collapsed, setCollapsed }: Props) {
  const pathname = usePathname();

  return (
    <aside className={`fixed left-0 top-0 h-full bg-navy-900 flex flex-col z-40 transition-all duration-300 ease-in-out ${collapsed ? 'w-16' : 'w-60'}`}>
      {/* Logo */}
      <div className={`flex items-center h-16 border-b border-white/10 px-3 ${collapsed ? 'justify-center' : 'gap-2.5'}`}>
        <AppLogo size={34} />
        {!collapsed && (
          <div>
            <div className="font-bold text-xs text-white leading-tight">EURO COMPETENCE</div>
            <div className="text-xs text-gold-400 tracking-widest" style={{ fontSize: '9px' }}>ADMIN</div>
          </div>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto scrollbar-thin py-3">
        {navGroups.map(group => (
          <div key={group.id} className="mb-2">
            {!collapsed && (
              <p className="text-xs font-700 text-white/25 uppercase tracking-widest px-4 py-2" style={{ fontWeight: 700 }}>
                {group.label}
              </p>
            )}
            {collapsed && <div className="h-px bg-white/10 mx-3 my-2" />}
            <ul className="space-y-0.5 px-2">
              {group.items.map(({ key, icon: Icon, label, href, badge }) => {
                const isActive = pathname === href;
                return (
                  <li key={key}>
                    <Link
                      href={href}
                      title={collapsed ? label : undefined}
                      className={`flex items-center gap-2.5 px-2.5 py-2 rounded-lg transition-all duration-200 group relative text-sm ${
                        isActive
                          ? 'bg-accent/20 text-white border border-accent/30' :'text-white/55 hover:text-white hover:bg-white/8'
                      }`}
                    >
                      <Icon size={16} className={`shrink-0 ${isActive ? 'text-accent' : ''}`} />
                      {!collapsed && (
                        <>
                          <span className="flex-1 truncate font-500" style={{ fontWeight: 500 }}>{label}</span>
                          {badge && (
                            <span className="w-5 h-5 rounded-full bg-accent/80 text-primary text-xs font-700 flex items-center justify-center" style={{ fontWeight: 700 }}>
                              {badge}
                            </span>
                          )}
                        </>
                      )}
                      {collapsed && badge && (
                        <span className="absolute top-0.5 right-0.5 w-2 h-2 rounded-full bg-accent" />
                      )}
                      {collapsed && (
                        <div className="absolute left-full ml-2 px-2.5 py-1.5 bg-white text-primary text-xs font-600 rounded-md shadow-card whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 border border-border" style={{ fontWeight: 600 }}>
                          {label}
                        </div>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* Bottom */}
      <div className="border-t border-white/10 p-2 space-y-1">
        {!collapsed && (
          <div className="flex items-center gap-2.5 px-2.5 py-2">
            <div className="w-7 h-7 rounded-full bg-accent/30 flex items-center justify-center shrink-0">
              <span className="text-xs font-700 text-white" style={{ fontWeight: 700 }}>AD</span>
            </div>
            <div className="overflow-hidden">
              <div className="text-xs font-700 text-white truncate" style={{ fontWeight: 700 }}>Admin SFORHET</div>
              <div className="text-xs text-white/35">Administrateur</div>
            </div>
          </div>
        )}
        <Link href="/" className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-white/35 hover:text-white hover:bg-red-500/10 transition-all duration-200">
          <LogOut size={15} className="shrink-0" />
          {!collapsed && <span className="text-xs font-500" style={{ fontWeight: 500 }}>Déconnexion</span>}
        </Link>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-full flex items-center justify-center py-2 text-white/25 hover:text-white transition-colors"
          aria-label="Toggle sidebar"
        >
          {collapsed ? <ChevronRight size={15} /> : <ChevronLeft size={15} />}
        </button>
      </div>
    </aside>
  );
}