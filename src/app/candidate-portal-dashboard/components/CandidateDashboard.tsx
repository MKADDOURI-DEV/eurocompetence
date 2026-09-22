'use client';
import React, { useState } from 'react';
import CandidateSidebar from './CandidateSidebar';
import DashboardKPIs from './DashboardKPIs';
import ApplicationsTable from './ApplicationsTable';
import SavedJobsList from './SavedJobsList';
import ProfileCompletion from './ProfileCompletion';

export default function CandidateDashboard() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-background flex">
      <CandidateSidebar collapsed={sidebarCollapsed} setCollapsed={setSidebarCollapsed} />

      {/* Main content */}
      <main
        className={`flex-1 min-h-screen transition-all duration-300 ${
          sidebarCollapsed ? 'ml-16' : 'ml-64'
        }`}
      >
        {/* Top bar */}
        <header className="bg-white border-b border-border h-16 flex items-center justify-between px-6 sticky top-0 z-30">
          <div>
            <h1 className="text-lg font-700 text-primary" style={{ fontWeight: 700 }}>Tableau de bord</h1>
            <p className="text-xs text-muted-foreground">Bonjour Youssef, voici votre activité récente.</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-xs text-muted-foreground hidden sm:block">Lun. 22 Sept. 2025</div>
            <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
              <span className="text-xs font-700 text-accent" style={{ fontWeight: 700 }}>YB</span>
            </div>
          </div>
        </header>

        <div className="p-6 max-w-screen-2xl">
          {/* KPI Cards */}
          <DashboardKPIs />

          <div className="mt-6 grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* Applications table — takes 2/3 */}
            <div className="xl:col-span-2">
              <ApplicationsTable />
            </div>

            {/* Right column */}
            <div className="space-y-6">
              <ProfileCompletion />
              <SavedJobsList />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}