import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';
import { FAQS_DATA, AGENCY_INFO } from '../data/agencyData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 uppercase tracking-wider mb-2 font-mono">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Clear Answers for Business Owners</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-slate-950 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Straightforward answers about our marketing timelines, local Chennai targeting, pricing, and attribution standards.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {FAQS_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold font-display text-slate-900 text-balance">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 text-amber-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-150">
                    <p>{item.answer}</p>
                    <div className="mt-2 text-[11px] font-mono text-slate-400">
                      Category: {item.category}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Have an unanswered question box */}
        <div className="mt-10 p-6 bg-white border border-slate-200 rounded-2xl text-center space-y-2">
          <h4 className="text-sm font-bold text-slate-900 font-display">
            Have a specific question about your market or budget in Chennai?
          </h4>
          <p className="text-xs text-slate-600">
            Speak directly with our senior strategist. No sales pitch, just practical advice for your business.
          </p>
          <div className="pt-2 flex items-center justify-center gap-4">
            <a
              href={AGENCY_INFO.phoneHref}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 hover:text-amber-600 font-mono"
            >
              <Phone className="w-3.5 h-3.5 text-amber-600" />
              <span>Call: {AGENCY_INFO.formattedPhone}</span>
            </a>
            <span className="text-slate-300">·</span>
            <a
              href={AGENCY_INFO.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-emerald-700 hover:text-emerald-800"
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
