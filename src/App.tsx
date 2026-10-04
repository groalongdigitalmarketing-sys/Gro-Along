/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ChennaiPresenceBanner } from './components/ChennaiPresenceBanner';
import { ServicesBento } from './components/ServicesBento';
import { RoiCalculator } from './components/RoiCalculator';
import { CaseStudies } from './components/CaseStudies';
import { ProcessSection } from './components/ProcessSection';
import { TestimonialsPlaceholders } from './components/TestimonialsPlaceholders';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { AuditModal } from './components/AuditModal';
import { StrategyBlueprintModal } from './components/StrategyBlueprintModal';
import { FileText, Phone, MessageCircle } from 'lucide-react';
import { AGENCY_INFO } from './data/agencyData';

export default function App() {
  const [isAuditOpen, setIsAuditOpen] = useState(false);
  const [isBlueprintOpen, setIsBlueprintOpen] = useState(false);
  const [selectedServicePreset, setSelectedServicePreset] = useState<string>('');

  const handleSelectService = (serviceName: string) => {
    setSelectedServicePreset(serviceName);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-amber-100 selection:text-amber-900">
      
      {/* Top Banner Notice: Strategic Blueprint Available */}
      <div className="bg-slate-950 text-slate-300 px-4 py-2 text-xs border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-white">Grow Along Marketing Agency</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="hidden sm:inline">Chennai & Tamil Nadu Growth Partner</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsBlueprintOpen(true)}
              className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-semibold cursor-pointer transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Agency Strategy & Launch Blueprint</span>
            </button>
            <span aria-hidden="true" className="text-slate-700 hidden sm:inline">|</span>
            <a 
              href={AGENCY_INFO.phoneHref}
              className="hidden sm:inline font-mono font-medium text-slate-300 hover:text-white"
            >
              Ph: {AGENCY_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Primary Top Bar Navigation */}
      <Header
        onOpenAudit={() => setIsAuditOpen(true)}
        onOpenBlueprint={() => setIsBlueprintOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenAudit={() => setIsAuditOpen(true)} />

        {/* Local Chennai Commercial Ecosystem Coverage */}
        <ChennaiPresenceBanner />

        {/* 01-06 Services Bento Grid */}
        <ServicesBento
          onSelectService={handleSelectService}
          onOpenAudit={() => setIsAuditOpen(true)}
        />

        {/* Interactive ROI & Leads Estimator */}
        <RoiCalculator onOpenAudit={() => setIsAuditOpen(true)} />

        {/* Documented Case Study Models */}
        <CaseStudies onOpenAudit={() => setIsAuditOpen(true)} />

        {/* 4-Stage Systematic Growth Engine */}
        <ProcessSection onOpenAudit={() => setIsAuditOpen(true)} />

        {/* Verified Customer Feedback Placeholders & Standards */}
        <TestimonialsPlaceholders />

        {/* Hyper-Local FAQ */}
        <FaqSection />

        {/* High-Converting Lead Capture Form & Direct Contact Cards */}
        <ContactSection selectedServicePreset={selectedServicePreset} />
      </main>

      {/* Quiet Footer */}
      <Footer
        onOpenAudit={() => setIsAuditOpen(true)}
        onOpenBlueprint={() => setIsBlueprintOpen(true)}
      />

      {/* Mobile Sticky Thumb Navigation Bar (<= 12% Viewport Height) */}
      <MobileStickyBar onOpenAudit={() => setIsAuditOpen(true)} />

      {/* 60-Second Growth Audit Request Modal */}
      <AuditModal
        isOpen={isAuditOpen}
        onClose={() => setIsAuditOpen(false)}
      />

      {/* Complete Agency Strategy Blueprint & Launch Guide Modal */}
      <StrategyBlueprintModal
        isOpen={isBlueprintOpen}
        onClose={() => setIsBlueprintOpen(false)}
      />

    </div>
  );
}
