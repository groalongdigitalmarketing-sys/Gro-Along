import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';
import { Logo } from './Logo';

interface FooterProps {
  onOpenAudit: () => void;
  onOpenBlueprint: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAudit, onOpenBlueprint }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="inline-block hover:opacity-95 transition-opacity">
              <Logo size="md" variant="horizontal" theme="dark" />
            </a>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Chennai’s dedicated performance marketing partner. We engineer high-converting local SEO, Google Search campaigns, Meta advertising, and custom conversion web platforms for ambitious businesses in Tamil Nadu.
            </p>
            <div className="pt-2 text-[11px] font-mono text-slate-500">
              Chennai, Tamil Nadu, India · Ph: {AGENCY_INFO.phone}
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-200 font-mono">
              Navigation
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Capabilities
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-white transition-colors">
                  ROI Estimator
                </a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-white transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Local FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Direct Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Capabilities Scope (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-200 font-mono">
              Core Capabilities
            </div>
            <ul className="space-y-2 text-slate-400">
              <li>Local SEO & Google 3-Pack</li>
              <li>Google Search Performance Ads</li>
              <li>Meta & Instagram Lead Funnels</li>
              <li>Conversion Web Architecture</li>
              <li>Brand Identity & Creative Systems</li>
              <li>B2B Inbound & WhatsApp Pipelines</li>
            </ul>
          </div>

          {/* Direct Connect & Blueprint (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-200 font-mono">
              Direct Inquiries
            </div>
            <div className="space-y-2 text-slate-300">
              <a 
                href={AGENCY_INFO.phoneHref}
                className="flex items-center gap-2 hover:text-white transition-colors font-mono"
              >
                <Phone className="w-3.5 h-3.5 text-amber-500" />
                <span>{AGENCY_INFO.phone}</span>
              </a>
              <a 
                href={AGENCY_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp (+91 {AGENCY_INFO.phone})</span>
              </a>
              <a 
                href={`mailto:${AGENCY_INFO.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors break-all"
              >
                <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>{AGENCY_INFO.email}</span>
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBlueprint}
                className="w-full inline-flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 text-xs font-semibold text-amber-400 transition-colors cursor-pointer"
              >
                <span>Read Full Agency Blueprint</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Quiet Bottom Legal Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Grow Along Marketing Agency. All rights reserved. Chennai, Tamil Nadu, India.
          </div>
          <div className="flex items-center gap-4">
            <span>NAP Verified for Local SEO</span>
            <span aria-hidden="true">·</span>
            <span>Phone: 6381499729</span>
          </div>
        </div>

      </div>

    </footer>
  );
};
