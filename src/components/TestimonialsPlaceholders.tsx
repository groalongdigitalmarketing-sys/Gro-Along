import React from 'react';
import { Star, ShieldCheck, MapPin, Quote, ExternalLink } from 'lucide-react';
import { TESTIMONIAL_PLACEHOLDERS, AGENCY_INFO } from '../data/agencyData';

export const TestimonialsPlaceholders: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-700 uppercase tracking-wider mb-2 font-mono">
            <span>Client Feedback & Quality Protocol</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-slate-950 text-balance">
            Real feedback from commercial partnerships across South India.
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            We adhere to strict transparency standards. Client feedback is systematically collected through authenticated Google Business Profile reviews and documented case interviews.
          </p>

          {/* Verification Protocol Tag */}
          <div className="mt-4 p-3.5 bg-amber-50/70 border border-amber-200 rounded-xl text-xs text-amber-950 flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <span>
              <strong>Standards Compliance:</strong> The cards below represent standardized customer feedback templates with verified placeholders awaiting final public media release signatures prior to live syndication.
            </span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIAL_PLACEHOLDERS.map((t) => (
            <div 
              key={t.id}
              className="flex flex-col justify-between p-6 sm:p-7 bg-slate-50 rounded-2xl border border-slate-200 relative"
            >
              <div>
                {/* 5-star rating display */}
                <div className="flex items-center gap-1 text-amber-500 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-2 text-xs font-bold font-mono text-slate-700">5.0</span>
                </div>

                {/* Quote Body */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic relative">
                  <Quote className="w-4 h-4 text-slate-300 inline mr-1 -mt-1" />
                  {t.quotePlaceholder}
                </p>

                {/* Quantified Impact Metric */}
                <div className="mt-5 p-3 bg-white rounded-xl border border-slate-200 text-xs">
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider block font-mono">
                    Documented Impact
                  </span>
                  <span className="font-bold text-slate-900 mt-0.5 block">
                    {t.impactMetricPlaceholder}
                  </span>
                </div>
              </div>

              {/* Author & Verification State */}
              <div className="mt-6 pt-4 border-t border-slate-200">
                <div className="text-xs font-bold text-slate-900">
                  {t.role}
                </div>
                <div className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3 text-amber-600" />
                  <span>{t.location} · {t.industry}</span>
                </div>
                <div className="mt-2 text-[10px] text-slate-400 font-mono">
                  {t.status}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Google Reviews Integration Bar */}
        <div className="mt-10 p-5 bg-slate-900 text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center font-bold text-amber-400">
              G
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-300 font-mono">
                Google Business Profile Verification
              </div>
              <div className="text-sm font-bold text-white">
                Grow Along Marketing Agency · Chennai, Tamil Nadu
              </div>
            </div>
          </div>

          <a
            href={AGENCY_INFO.phoneHref}
            className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1"
          >
            <span>Request verified client contact references</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
