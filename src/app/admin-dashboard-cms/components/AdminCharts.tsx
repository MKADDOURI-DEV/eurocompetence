'use client';
import React from 'react';
import dynamic from 'next/dynamic';

const ChartsContent = dynamic(() => import('./AdminChartsContent'), { ssr: false });

export default function AdminCharts() {
  return <ChartsContent />;
}