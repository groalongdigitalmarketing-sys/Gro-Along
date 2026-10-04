import React, { useState } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import strategyImg from '../assets/images/strategy_growth_planning_1791105350911.jpg';

export const ProcessSection: React.FC<{ onOpenAudit: () => void }> = ({ onOpenAudit }) => {
  const [imgError, setImgError] = useState(false);

  const steps = [
    {
      num: '01',
      title: 'Commercial Diagnostic & Competitor Audit',
      description: 'We audit your existing web presence, identify where competitors in Chennai are capturing your buyers, and calculate your target customer acquisition cost.',
      deliverable: 'Delivered in 48 hours: 12-point Growth Audit Report'
    },
    {
      num: '02',
      title: 'High-Converting Landing Architecture',
      description: 'We craft high-speed mobile landing pages with frictionless Click-to-Call and WhatsApp integration, eliminating the bounce rate of sluggish legacy sites.',
      deliverable: 'Delivered in Week 1: Production-ready landing page & conversion tracking'
    },
    {
      num: '03',
      title: 'Precision Multi-Channel Launch',
      description: 'We activate hyper-targeted Google Search Ads and Meta direct-response campaigns alongside local Google 3-Pack optimization, targeting ready-to-buy prospects.',
      deliverable: 'Active in Week 2: First high-intent visitor traffic & live campaign data'
    },
    {
      num: '04',
      title: 'Attribution, Refinement & Scaled Volume',
      description: 'Weekly review of call recordings, WhatsApp chats, and cost-per-lead metrics. We reallocate budget into top-performing keywords to scale your sales pipeline.',
      deliverable: 'Ongoing: Weekly transparent performance dashboards'
    }
  ];

  return (
    <section id="process" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Asset & Guarantee */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold text-amber-700 uppercase tracking-wider font-mono">
                The Execution Playbook
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-slate-950 mt-2 text-balance">
                How we take your business from stagnant traffic to predictable inbound leads.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                No endless meetings or opaque agency retainers. We operate in disciplined sprints designed to generate qualified business inquiries quickly.
              </p>
            </div>

            {/* Strategic Image */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md aspect-16/10 bg-slate-900">
              {!imgError ? (
                <img
                  src={strategyImg}
                  alt="Grow Along Marketing Agency strategy consultation session"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full p-6 bg-slate-900 text-white flex flex-col justify-center">
                  <span className="text-xs text-amber-400 font-mono">STRATEGY SPRINT</span>
                  <div className="text-lg font-bold font-display mt-1">Data-Driven Execution</div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-xs text-white/90 font-medium">
                Transparent weekly reviews with direct access to your growth strategist.
              </div>
            </div>

            {/* Quick Action Button */}
            <button
              onClick={onOpenAudit}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-xl transition-all shadow-sm cursor-pointer whitespace-nowrap"
            >
              <span>Schedule Step 01 Discovery Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Column: Step by Step Flow */}
          <div className="lg:col-span-7 space-y-4">
            {steps.map((step) => (
              <div
                key={step.num}
                className="p-6 bg-white rounded-2xl border border-slate-200 hover:border-slate-300 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center font-mono font-bold text-sm text-slate-800 shrink-0">
                    {step.num}
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <h3 className="text-base font-bold font-display text-slate-900">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="pt-2 text-xs font-semibold text-emerald-800 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{step.deliverable}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
