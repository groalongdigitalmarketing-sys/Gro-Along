import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';
import { Logo } from './Logo';

interface HeaderProps {
  onOpenAudit: () => void;
  onOpenBlueprint: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAudit, onOpenBlueprint }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* Top Bar 3-Zone Contract: [Brand title] — [4-6 Nav links] — [1-2 Actions] */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Zone 1: Brand Logo */}
        <a 
          href="#" 
          className="hover:opacity-95 transition-opacity"
          aria-label="Grow Along Marketing Agency - Home"
        >
          <Logo size="md" variant="horizontal" />
        </a>

        {/* Zone 2: 4-6 Clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
          <a href="#services" className="hover:text-slate-950 transition-colors">
            Services
          </a>
          <a href="#calculator" className="hover:text-slate-950 transition-colors">
            ROI Estimator
          </a>
          <a href="#case-studies" className="hover:text-slate-950 transition-colors">
            Case Studies
          </a>
          <a href="#process" className="hover:text-slate-950 transition-colors">
            Our Process
          </a>
          <a href="#faq" className="hover:text-slate-950 transition-colors">
            FAQ
          </a>
          <button 
            onClick={onOpenBlueprint}
            className="flex items-center gap-1.5 text-amber-600 hover:text-amber-700 font-semibold transition-colors cursor-pointer"
          >
            <span>Strategy Blueprint</span>
            <span className="text-xs bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded font-mono">Plan</span>
          </button>
        </nav>

        {/* Zone 3: 1-2 Primary Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a 
            href={AGENCY_INFO.phoneHref}
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 px-3 py-2 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
            title={`Call direct: ${AGENCY_INFO.phone}`}
          >
            <Phone className="w-3.5 h-3.5 text-amber-600" />
            <span className="font-mono">{AGENCY_INFO.phone}</span>
          </a>

          <a 
            href={AGENCY_INFO.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-3 py-2 rounded-lg border border-emerald-200 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>WhatsApp</span>
          </a>

          <button 
            onClick={onOpenAudit}
            className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 active:scale-95 transition-all shadow-sm cursor-pointer whitespace-nowrap"
          >
            Get Free Audit
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button 
            onClick={onOpenAudit}
            className="px-2.5 py-1.5 text-xs font-semibold text-white bg-slate-900 rounded-md sm:hidden"
          >
            Free Audit
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-950 rounded-lg hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drop-down */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 animate-in fade-in duration-150">
          <div className="flex flex-col space-y-2 text-sm font-medium text-slate-700">
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded hover:bg-slate-50 hover:text-slate-950"
            >
              Services & Capabilities
            </a>
            <a 
              href="#calculator" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded hover:bg-slate-50 hover:text-slate-950"
            >
              Chennai Marketing ROI Estimator
            </a>
            <a 
              href="#case-studies" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded hover:bg-slate-50 hover:text-slate-950"
            >
              Case Studies & Proven Models
            </a>
            <a 
              href="#process" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded hover:bg-slate-50 hover:text-slate-950"
            >
              4-Stage Growth Process
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded hover:bg-slate-50 hover:text-slate-950"
            >
              Local FAQs
            </a>
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBlueprint();
              }}
              className="py-2 px-3 text-left font-semibold text-amber-700 bg-amber-50 rounded flex items-center justify-between"
            >
              <span>View Full Strategy Blueprint</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a 
              href={AGENCY_INFO.phoneHref}
              className="flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-slate-900 bg-slate-100 rounded-lg"
            >
              <Phone className="w-4 h-4 text-amber-600" />
              <span>Call Direct: {AGENCY_INFO.phone}</span>
            </a>
            <a 
              href={AGENCY_INFO.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-emerald-900 bg-emerald-50 rounded-lg border border-emerald-200"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Chat on WhatsApp (+91 63814 99729)</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAudit();
              }}
              className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-slate-900 rounded-lg"
            >
              Request Free Growth Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
