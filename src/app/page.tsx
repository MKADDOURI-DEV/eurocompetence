import React from 'react';
import PublicHeader from '@/components/PublicHeader';
import PublicFooter from '@/components/PublicFooter';
import HeroSection from '@/app/components/HeroSection';
import TrustStrip from '@/app/components/TrustStrip';
import AboutSection from '@/app/components/AboutSection';
import ServicesSection from '@/app/components/ServicesSection';
import FormationsSection from '@/app/components/FormationsSection';
import RecruitmentProcess from '@/app/components/RecruitmentProcess';
import CandidateCompanySplit from '@/app/components/CandidateCompanySplit';
import HospitalitySection from '@/app/components/HospitalitySection';
import ValuesSection from '@/app/components/ValuesSection';
import ReferencesSection from '@/app/components/ReferencesSection';
import FinalCTA from '@/app/components/FinalCTA';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <PublicHeader />
      <HeroSection />
      <TrustStrip />
      <AboutSection />
      <ServicesSection />
      <FormationsSection />
      <RecruitmentProcess />
      <CandidateCompanySplit />
      <HospitalitySection />
      <ValuesSection />
      <ReferencesSection />
      <FinalCTA />
      <PublicFooter />
    </main>
  );
}