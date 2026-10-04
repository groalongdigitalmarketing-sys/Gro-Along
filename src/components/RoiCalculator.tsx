import React, { useState, useId } from 'react';
import { Calculator, MessageCircle, ArrowRight, Info, CheckCircle2 } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';
import analyticsImg from '../assets/images/digital_analytics_roi_dashboard_1791105378851.jpg';

interface IndustryBenchmark {
  name: string;
  avgCpc: number; // in INR
  conversionRate: number; // percentage
  typicalDealValue: string;
  notes: string;
}

const BENCHMARKS: Record<string, IndustryBenchmark> = {
  'b2b': {
    name: 'B2B & Industrial Manufacturing',
    avgCpc: 45,
    conversionRate: 4.8,
    typicalDealValue: '₹50,000 – ₹10 Lakhs+',
    notes: 'Higher CPC but high lifetime value; priority on direct phone calls and RFQs.'
  },
  'healthcare': {
    name: 'Healthcare & Specialized Clinics',
    avgCpc: 28,
    conversionRate: 6.5,
    typicalDealValue: '₹3,000 – ₹45,000',
    notes: 'High conversion on mobile Google Maps & direct WhatsApp appointment booking.'
  },
  'realestate': {
    name: 'Real Estate & Interior Architecture',
    avgCpc: 55,
    conversionRate: 3.5,
    typicalDealValue: '₹5 Lakhs – ₹1.5 Cr+',
    notes: 'Requires gated qualification to filter out unverified inquiries.'
  },
  'retail': {
    name: 'Retail & Direct-to-Consumer (D2C)',
    avgCpc: 18,
    conversionRate: 3.2,
    typicalDealValue: '₹1,500 – ₹12,000',
    notes: 'Meta Ads & catalog remarketing drives rapid order volume.'
  },
  'services': {
    name: 'Local Professional Services',
    avgCpc: 32,
    conversionRate: 5.5,
    typicalDealValue: '₹10,000 – ₹1 Lakh',
    notes: 'High local search intent in Chennai neighborhoods.'
  }
};

export const RoiCalculator: React.FC<{ onOpenAudit: () => void }> = ({ onOpenAudit }) => {
  const budgetInputId = useId();
  const [budget, setBudget] = useState<number>(50000);
  const [industryKey, setIndustryKey] = useState<string>('b2b');
  const [channel, setChannel] = useState<'hybrid' | 'search' | 'social'>('hybrid');

  const benchmark = BENCHMARKS[industryKey];

  // Adjustments based on channel
  let effectiveCpc = benchmark.avgCpc;
  let effectiveConvRate = benchmark.conversionRate;

  if (channel === 'search') {
    effectiveCpc = benchmark.avgCpc * 1.2;
    effectiveConvRate = benchmark.conversionRate * 1.25;
  } else if (channel === 'social') {
    effectiveCpc = benchmark.avgCpc * 0.7;
    effectiveConvRate = benchmark.conversionRate * 0.85;
  }

  const estimatedClicks = Math.round(budget / effectiveCpc);
  const estimatedLeads = Math.round(estimatedClicks * (effectiveConvRate / 100));
  const estimatedCpl = estimatedLeads > 0 ? Math.round(budget / estimatedLeads) : 0;

  // Format INR currency
  const formatInr = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const whatsappEstimateText = encodeURIComponent(
    `Hello Grow Along Marketing Agency, I used your Chennai ROI Estimator for ${benchmark.name}. With a monthly budget of ${formatInr(budget)}, projected inquiries are ~${estimatedLeads} leads/month. Let's schedule a call to review.`
  );

  return (
    <section id="calculator" className="py-16 md:py-24 bg-slate-900 text-white border-b border-slate-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 font-mono">
            <Calculator className="w-4 h-4" />
            <span>Interactive Financial Forecast</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-white text-balance">
            Estimate your monthly lead volume & customer acquisition cost.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Stop guessing your digital marketing returns. Adjust the monthly media budget and industry sector to see benchmarked traffic, inquiries, and projected cost per lead in Chennai.
          </p>
        </div>

        {/* 2-Column Calculator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Form */}
          <div className="lg:col-span-6 bg-slate-800/80 p-6 sm:p-8 rounded-2xl border border-slate-700/80 space-y-6">
            
            {/* 1. Monthly Budget */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor={budgetInputId} className="text-xs font-semibold uppercase tracking-wider text-slate-300 font-mono">
                  Monthly Media Budget (INR)
                </label>
                <span className="text-xl font-bold font-mono text-amber-400 tabular-nums">
                  {formatInr(budget)}
                </span>
              </div>
              <input
                id={budgetInputId}
                type="range"
                min="20000"
                max="300000"
                step="5000"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                <span>₹20,000</span>
                <span>₹1,50,000</span>
                <span>₹3,00,000+</span>
              </div>
            </div>

            {/* 2. Target Industry */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2 font-mono">
                Target Industry Sector
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {Object.entries(BENCHMARKS).map(([key, val]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setIndustryKey(key)}
                    className={`text-left p-3 rounded-xl border text-xs font-medium transition-colors cursor-pointer ${
                      industryKey === key
                        ? 'bg-amber-500/10 border-amber-500 text-amber-300'
                        : 'bg-slate-900/60 border-slate-700 text-slate-300 hover:border-slate-600'
                    }`}
                  >
                    <div className="font-semibold">{val.name}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Avg Deal: {val.typicalDealValue}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Acquisition Channel Strategy */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2 font-mono">
                Acquisition Channel Strategy
              </label>
              <div className="grid grid-cols-3 gap-2 p-1 bg-slate-900 rounded-xl border border-slate-700">
                <button
                  type="button"
                  onClick={() => setChannel('hybrid')}
                  className={`py-2 px-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer text-center ${
                    channel === 'hybrid'
                      ? 'bg-slate-700 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Balanced (Ads + SEO)
                </button>
                <button
                  type="button"
                  onClick={() => setChannel('search')}
                  className={`py-2 px-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer text-center ${
                    channel === 'search'
                      ? 'bg-slate-700 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  High-Intent Search
                </button>
                <button
                  type="button"
                  onClick={() => setChannel('social')}
                  className={`py-2 px-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer text-center ${
                    channel === 'social'
                      ? 'bg-slate-700 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Meta / Social Ads
                </button>
              </div>
            </div>

            <div className="p-3 bg-slate-900/70 border border-slate-700/60 rounded-xl text-xs text-slate-400 flex items-start gap-2">
              <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                {benchmark.notes} Benchmarked against verified South Indian campaign cost structures.
              </span>
            </div>

          </div>

          {/* Results Projection Card */}
          <div className="lg:col-span-6 bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6 shadow-2xl">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs uppercase font-mono tracking-wider text-slate-400">
                  Projected 30-Day Outcomes
                </span>
                <h3 className="text-xl font-bold font-display text-white">
                  Monthly Performance Forecast
                </h3>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-2 py-1 rounded">
                Model: Conservative
              </span>
            </div>

            {/* Big Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              
              <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                <div className="text-xs text-slate-400 font-mono">Estimated Inbound Leads</div>
                <div className="text-3xl font-extrabold font-display text-amber-400 mt-1 tabular-nums">
                  {estimatedLeads} – {Math.round(estimatedLeads * 1.35)}
                </div>
                <div className="text-[11px] text-slate-400 mt-1">Calls, WhatsApp & RFQs</div>
              </div>

              <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                <div className="text-xs text-slate-400 font-mono">Estimated Cost Per Lead</div>
                <div className="text-3xl font-extrabold font-display text-white mt-1 tabular-nums">
                  {formatInr(estimatedCpl)}
                </div>
                <div className="text-[11px] text-slate-400 mt-1">Average per qualified inquiry</div>
              </div>

              <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                <div className="text-xs text-slate-400 font-mono">Targeted Clicks / Visitors</div>
                <div className="text-2xl font-bold font-display text-slate-200 mt-1 tabular-nums">
                  ~{estimatedClicks.toLocaleString()}
                </div>
                <div className="text-[11px] text-slate-400 mt-1">High-intent buyer traffic</div>
              </div>

              <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                <div className="text-xs text-slate-400 font-mono">Projected Pipeline Value</div>
                <div className="text-2xl font-bold font-display text-emerald-400 mt-1">
                  High LTV
                </div>
                <div className="text-[11px] text-slate-400 mt-1">Based on {benchmark.typicalDealValue}</div>
              </div>

            </div>

            {/* Live Analytics Dashboard Visual */}
            <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-900 aspect-16/7 shadow-inner">
              <img
                src={analyticsImg}
                alt="Grow Along Google Ads & Analytics Dashboard Tracking"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />
              <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-xs">
                <span className="text-[11px] font-mono text-emerald-400 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Live Attribution: GA4 + GTM + Meta CAPI
                </span>
                <span className="text-[10px] text-slate-400 font-mono">Chennai Ad Servers</span>
              </div>
            </div>

            {/* Deliverables Included With This Spend */}
            <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800/80 space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-300 font-mono">
                Included in This Growth Sprint:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Custom Landing Page Setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>GA4 & WhatsApp Click Tracking</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>A/B Creative Ad Testing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Weekly Direct Strategist Review</span>
                </div>
              </div>
            </div>

            {/* Direct Action Links */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/916381499729?text=${whatsappEstimateText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-semibold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>Send Estimate via WhatsApp</span>
              </a>

              <button
                onClick={onOpenAudit}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>Request Custom Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="text-center text-[11px] text-slate-400">
              Direct consultation line: <a href={AGENCY_INFO.phoneHref} className="text-amber-400 font-mono hover:underline">{AGENCY_INFO.formattedPhone}</a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
