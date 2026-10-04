import React, { useState } from 'react';
import { Phone, MessageCircle, ArrowRight, ShieldCheck, CheckCircle2, MapPin } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';
import heroImg from '../assets/images/hero_chennai_marketing_hub_1791105333282.jpg';

interface HeroProps {
  onOpenAudit: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAudit }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden border-b border-slate-200 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Editorial Kicker & Location Signal */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 mb-4 sm:mb-6">
          <span className="flex items-center gap-1.5 text-amber-700 font-semibold">
            <MapPin className="w-3.5 h-3.5" />
            <span>Chennai & Tamil Nadu</span>
          </span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span className="font-semibold text-slate-800">Google Ads · SEO · Meta Ads · Logo Design</span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span>Direct Inbound Leads</span>
        </div>

        {/* 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Core Value Proposition & High-Intent Action */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold font-display tracking-tight text-slate-950 leading-[1.12] text-balance">
              Predictable customer inquiries for ambitious businesses in Chennai.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Grow Along Marketing Agency accelerates your commercial growth through <strong>Google Ads, Search Engine Optimization (SEO), Meta & Instagram Advertising</strong>, and <strong>Custom Logo & Graphic Design</strong>. We replace vanity clicks with verified phone calls, WhatsApp leads, and sales.
            </p>

            {/* High-Intent Conversion Triggers */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onOpenAudit}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-slate-950 hover:bg-slate-800 active:scale-[0.98] rounded-xl transition-all shadow-md cursor-pointer whitespace-nowrap"
              >
                <span>Get a Free Growth Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={AGENCY_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-xl transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Quick WhatsApp: {AGENCY_INFO.phone}</span>
              </a>
            </div>

            {/* Direct Phone Affirmation */}
            <div className="flex items-center gap-3 pt-1 text-xs text-slate-500">
              <span className="flex items-center gap-1.5 font-medium text-slate-700">
                <Phone className="w-3.5 h-3.5 text-amber-600" />
                <span>Call Directly:</span>
                <a href={AGENCY_INFO.phoneHref} className="font-mono font-bold text-slate-950 hover:underline">
                  {AGENCY_INFO.formattedPhone}
                </a>
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Speak with a Growth Strategist (Mon–Sat)</span>
            </div>

            {/* Trust Anchors & Anti-Slop Integrity */}
            <div className="pt-4 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-600">
                  <strong className="font-semibold text-slate-900 block">Verified Attribution</strong>
                  Every lead tracked to source
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-600">
                  <strong className="font-semibold text-slate-900 block">Zero Long-Term Lock-in</strong>
                  Performance-driven retention
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-600">
                  <strong className="font-semibold text-slate-900 block">Chennai Ecosystem</strong>
                  OMR, Guindy, Ambattur & beyond
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual with Scrim & Zero-Broken-Image Fallback */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 aspect-16/11 sm:aspect-16/10 lg:aspect-4/3">
              {!imgError ? (
                <img
                  src={heroImg}
                  alt="Grow Along Marketing Agency collaborative workspace in Chennai"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-700"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-8 flex flex-col justify-between text-white">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-amber-400 font-mono">Agency Studio</span>
                    <h3 className="text-xl font-bold font-display mt-2">Grow Along Marketing Agency</h3>
                    <p className="text-xs text-slate-300 mt-2">Chennai Performance Marketing & Growth Consultancy</p>
                  </div>
                  <div className="text-xs text-slate-400 font-mono">
                    Chennai, Tamil Nadu · Tel: 6381499729
                  </div>
                </div>
              )}

              {/* Scrim Overlay & Floating Local Assurance Box */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200/80 shadow-lg flex items-center justify-between">
                <div>
                  <div className="text-[11px] uppercase tracking-wider font-semibold text-amber-700">
                    Local Search & Paid Media
                  </div>
                  <div className="text-xs font-bold text-slate-900">
                    Chennai Commercial Corridor Focus
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[11px] text-slate-500">Inquiry Response</div>
                  <div className="text-xs font-semibold text-emerald-700 font-mono">&lt; 4 Hours</div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
