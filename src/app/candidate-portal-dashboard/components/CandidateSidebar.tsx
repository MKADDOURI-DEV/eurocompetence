'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AppLogo from '@/components/ui/AppLogo';
import { LayoutDashboard, User, FileText, Send, GraduationCap, Bookmark, Bell, Settings, LogOut, ChevronLeft, ChevronRight } from 'lucide-react';
import Icon from '@/components/ui/AppIcon';


const navItems = [
  { key: 'nav-dashboard', icon: LayoutDashboard, label: 'Tableau de bord', href: '/candidate-portal-dashboard', badge: null },
  { key: 'nav-profile', icon: User, label: 'Mon profil', href: '/candidate-portal-dashboard/profil', badge: null },
  { key: 'nav-cv', icon: FileText, label: 'Mon CV', href: '/candidate-portal-dashboard/cv', badge: null },
  { key: 'nav-applications', icon: Send, label: 'Mes candidatures', href: '/candidate-portal-dashboard/candidatures', badge: '4' },
  { key: 'nav-formations', icon: GraduationCap, label: 'Mes formations', href: '/candidate-portal-dashboard/formations', badge: '1' },
  { key: 'nav-saved', icon: Bookmark, label: 'Offres sauvegardées', href: '/candidate-portal-dashboard/favoris', badge: '7' },
  { key: 'nav-notifications', icon: Bell, label: 'Notifications', href: '/candidate-portal-dashboard/notifications', badge: '3' },
  { key: 'nav-settings', icon: Settings, label: 'Paramètres', href: '/candidate-portal-dashboard/parametres', badge: null },
];

interface Props {
  collapsed: boolean;
  setCollapsed: (v: boolean) => void;
}

export default function CandidateSidebar({ collapsed, setCollapsed }: Props) {
  const pathname = usePathname();

  return (
    <aside
      className={`fixed left-0 top-0 h-full bg-primary flex flex-col z-40 transition-all duration-300 ease-in-out ${
        collapsed ? 'w-16' : 'w-64'
      }`}
    >
      {/* Logo */}
      <div className={`flex items-center h-16 border-b border-white/10 px-4 ${collapsed ? 'justify-center' : 'gap-3'}`}>
        <AppLogo size={36} />
        {!collapsed && (
          <div className="overflow-hidden">
            <div className="font-bold text-xs text-white leading-tight whitespace-nowrap">EURO COMPETENCE</div>
            <div className="text-xs text-gold-400 tracking-widest whitespace-nowrap" style={{ fontSize: '10px' }}>SFORHET</div>
          </div>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 py-4 overflow-y-auto scrollbar-thin">
        <div className={`px-3 mb-2 ${collapsed ? 'hidden' : 'block'}`}>
          <p className="text-xs font-700 text-white/30 uppercase tracking-widest px-2" style={{ fontWeight: 700 }}>
            Mon espace
          </p>
        </div>

        <ul className="space-y-0.5 px-2">
          {navItems.map(({ key, icon: Icon, label, href, badge }) => {
            const isActive = pathname === href || (href !== '/candidate-portal-dashboard' && pathname.startsWith(href));
            return (
              <li key={key}>
                <Link
                  href={href}
                  title={collapsed ? label : undefined}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group relative ${
                    isActive
                      ? 'bg-accent/20 text-white border border-accent/30' :'text-white/60 hover:text-white hover:bg-white/8'
                  }`}
                  style={!isActive ? { '--tw-bg-opacity': '0.08' } as React.CSSProperties : undefined}
                >
                  <Icon size={18} className={`shrink-0 ${isActive ? 'text-accent' : ''}`} />
                  {!collapsed && (
                    <span className="text-sm font-500 truncate flex-1" style={{ fontWeight: 500 }}>{label}</span>
                  )}
                  {!collapsed && badge && (
                    <span className="ml-auto w-5 h-5 rounded-full bg-accent text-primary text-xs font-700 flex items-center justify-center" style={{ fontWeight: 700 }}>
                      {badge}
                    </span>
                  )}
                  {collapsed && badge && (
                    <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-accent" />
                  )}

                  {/* Tooltip on collapsed */}
                  {collapsed && (
                    <div className="absolute left-full ml-2 px-2.5 py-1.5 bg-primary-foreground text-primary text-xs font-600 rounded-md shadow-card whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 border border-border"
                      style={{ fontWeight: 600 }}>
                      {label}
                    </div>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom */}
      <div className="border-t border-white/10 p-2 space-y-1">
        {/* User info */}
        {!collapsed && (
          <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg">
            <div className="w-8 h-8 rounded-full bg-accent/30 flex items-center justify-center shrink-0">
              <span className="text-xs font-700 text-white" style={{ fontWeight: 700 }}>YB</span>
            </div>
            <div className="overflow-hidden">
              <div className="text-xs font-700 text-white truncate" style={{ fontWeight: 700 }}>Youssef Benali</div>
              <div className="text-xs text-white/40 truncate">Candidat</div>
            </div>
          </div>
        )}

        <Link
          href="/"
          title={collapsed ? 'Déconnexion' : undefined}
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/40 hover:text-white hover:bg-red-500/10 transition-all duration-200 group"
        >
          <LogOut size={16} className="shrink-0" />
          {!collapsed && <span className="text-sm" style={{ fontWeight: 500 }}>Déconnexion</span>}
        </Link>

        {/* Collapse toggle */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-full flex items-center justify-center py-2 text-white/30 hover:text-white transition-colors"
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>
    </aside>
  );
}