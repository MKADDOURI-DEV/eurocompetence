'use client';
import React, { useState } from 'react';
import AdminSidebar from './AdminSidebar';
import AdminKPIs from './AdminKPIs';
import AdminCharts from './AdminCharts';
import AdminActivityFeed from './AdminActivityFeed';
import AdminJobsTable from './AdminJobsTable';

export default function AdminDashboard() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-background flex">
      <AdminSidebar collapsed={sidebarCollapsed} setCollapsed={setSidebarCollapsed} />

      <main className={`flex-1 min-h-screen transition-all duration-300 ${sidebarCollapsed ? 'ml-16' : 'ml-60'}`}>
        {/* Top bar */}
        <header className="bg-white border-b border-border h-16 flex items-center justify-between px-6 sticky top-0 z-30">
          <div>
            <h1 className="text-base font-700 text-primary" style={{ fontWeight: 700 }}>Tableau de bord Admin</h1>
            <p className="text-xs text-muted-foreground">EURO COMPETENCE / SFORHET — Vue d'ensemble</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground hidden sm:block">22 sept. 2025 — 14:53</span>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-50 border border-green-200">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-600 text-green-700" style={{ fontWeight: 600 }}>Système actif</span>
            </div>
          </div>
        </header>

        <div className="p-6 max-w-screen-2xl space-y-6">
          <AdminKPIs />
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2">
              <AdminCharts />
            </div>
            <div>
              <AdminActivityFeed />
            </div>
          </div>
          <AdminJobsTable />
        </div>
      </main>
    </div>
  );
}