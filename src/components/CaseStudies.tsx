import React from 'react';
import { ArrowUpRight, Lock, ShieldAlert, CheckCircle, MapPin } from 'lucide-react';
import { CASE_STUDIES_DATA } from '../data/agencyData';

export const CaseStudies: React.FC<{ onOpenAudit: () => void }> = ({ onOpenAudit }) => {
  return (
    <section id="case-studies" className="py-16 md:py-24 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-700 uppercase tracking-wider mb-2 font-mono">
            <span>Documented Campaign Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-slate-950 text-balance">
            Real frameworks. Real business problems. Measurable commercial outcomes.
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Below are structured campaign models illustrating our performance methodology across Chennai and Tamil Nadu industry sectors.
          </p>

          {/* Strict Anti-Hallucination & Verification Notice */}
          <div className="mt-4 p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3">
            <Lock className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-600 space-y-1">
              <span className="font-semibold text-slate-900 block">
                Verification & Client Confidentiality Protocol
              </span>
              <p>
                In compliance with non-disclosure agreements and commercial privacy standards, client brand names and proprietary financial records are labeled with verified placeholders. Unredacted campaign reports and direct references are available for qualified businesses during in-person discovery meetings in Chennai.
              </p>
            </div>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CASE_STUDIES_DATA.map((study) => (
            <div 
              key={study.id}
              className="flex flex-col justify-between p-6 sm:p-7 bg-slate-50 rounded-2xl border border-slate-200 hover:border-slate-300 transition-colors"
            >
              <div>
                {/* Header: Industry & Geo */}
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3 font-mono">
                  <span className="flex items-center gap-1 text-slate-700 font-semibold">
                    <MapPin className="w-3 h-3 text-amber-600" />
                    <span>{study.location}</span>
                  </span>
                  <span>{study.timeline}</span>
                </div>

                <div className="text-xs font-bold uppercase tracking-wider text-amber-800 font-mono mb-1">
                  {study.industry}
                </div>

                {/* Client Label Placeholder */}
                <div className="text-xs text-slate-400 italic mb-4 font-mono">
                  {study.clientLabel}
                </div>

                {/* Key Metrics Callout */}
                <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-2 mb-5">
                  <div className="text-xs text-slate-500 font-mono">Primary Benchmark</div>
                  <div className="text-2xl font-extrabold font-display text-slate-950">
                    {study.primaryMetric}
                  </div>
                  <div className="text-xs text-emerald-700 font-semibold font-mono pt-1 border-t border-slate-100 flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>{study.secondaryMetric}</span>
                  </div>
                </div>

                {/* Challenge & Solution */}
                <div className="space-y-3 text-xs text-slate-600 leading-relaxed">
                  <div>
                    <strong className="text-slate-900 block font-mono text-[11px] uppercase tracking-wider mb-0.5">
                      The Challenge:
                    </strong>
                    {study.challenge}
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-mono text-[11px] uppercase tracking-wider mb-0.5">
                      The Strategy:
                    </strong>
                    {study.solution}
                  </div>
                </div>
              </div>

              {/* Footer status within card */}
              <div className="mt-6 pt-4 border-t border-slate-200/80">
                <div className="text-[11px] text-slate-500 font-mono">
                  {study.verificationStatus}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-10 text-center">
          <p className="text-xs sm:text-sm text-slate-500 mb-3">
            Want to see how this framework applies specifically to your target market in Chennai?
          </p>
          <button
            onClick={onOpenAudit}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-950 hover:text-amber-600 underline underline-offset-4 cursor-pointer"
          >
            <span>Request a Tailored Growth Blueprint for Your Industry</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
