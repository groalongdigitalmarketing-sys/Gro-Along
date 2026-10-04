import React, { useState } from 'react';
import { 
  Search, 
  TrendingUp, 
  Layout, 
  Share2, 
  Sparkles, 
  MessageSquare, 
  CheckCircle, 
  ArrowRight, 
  X,
  Languages,
  CheckCircle2
} from 'lucide-react';
import { SERVICES_DATA, AGENCY_INFO } from '../data/agencyData';
import { ServiceItem } from '../types';
import { Logo } from './Logo';
import creativeImg from '../assets/images/creative_branding_design_studio_1791105365779.jpg';

interface ServicesBentoProps {
  onSelectService: (serviceName: string) => void;
  onOpenAudit: () => void;
}

export const ServicesBento: React.FC<ServicesBentoProps> = ({ onSelectService, onOpenAudit }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [lang, setLang] = useState<'bilingual' | 'en' | 'ta'>('bilingual');

  // Icon mapping helper
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search':
        return <Search className="w-5 h-5 text-amber-600" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-blue-600" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-emerald-600" />;
      case 'Share2':
        return <Share2 className="w-5 h-5 text-purple-600" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-rose-600" />;
      case 'MessageSquare':
        return <MessageSquare className="w-5 h-5 text-teal-600" />;
      default:
        return <Search className="w-5 h-5 text-slate-600" />;
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Language Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-700 uppercase tracking-wider mb-2 font-mono">
              <span>Verified Core Capabilities · எங்கள் சேவைகள்</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-slate-950 text-balance">
              Strategic digital marketing, advertising & creative design services.
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Grow Along Marketing Agency specializes in Google Ads, SEO, Meta Ads, and Logo & Graphic Design to scale businesses across Chennai and Tamil Nadu.
            </p>
          </div>

          {/* Language Selector */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200 shrink-0 self-start md:self-end">
            <div className="flex items-center gap-1 pl-2 pr-1 text-xs text-slate-500 font-mono">
              <Languages className="w-3.5 h-3.5" />
            </div>
            <button
              onClick={() => setLang('bilingual')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                lang === 'bilingual' ? 'bg-white text-slate-950 shadow-xs' : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              Bilingual (இருமொழி)
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                lang === 'en' ? 'bg-white text-slate-950 shadow-xs' : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLang('ta')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                lang === 'ta' ? 'bg-white text-slate-950 shadow-xs' : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              தமிழ்
            </button>
          </div>
        </div>

        {/* 4 Core Pillars Strip Banner */}
        <div className="mb-10 p-4 sm:p-5 bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 text-white rounded-2xl border border-slate-800 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 shadow-md">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>ACTIVE SERVICES · உறுதிசெய்யப்பட்ட சேவைகள்</span>
            </div>
            <div className="text-sm sm:text-base font-bold font-display text-white">
              Google Ads · SEO · Meta Ads (FB & Insta) · Logo & Graphic Design · Web Design
            </div>
          </div>
          <a
            href={AGENCY_INFO.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-colors whitespace-nowrap"
          >
            <span>Inquire on WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => {
            const isLogoService = service.id === 'logo-graphic-design';

            return (
              <div 
                key={service.id}
                className={`group relative flex flex-col justify-between p-6 sm:p-7 bg-white rounded-2xl border transition-all duration-200 ${
                  isLogoService 
                    ? 'border-indigo-300 hover:border-indigo-500 shadow-xs ring-1 ring-indigo-100' 
                    : 'border-slate-200 hover:border-slate-400 hover:shadow-md'
                }`}
              >
                <div>
                  {/* Top Bar inside card: Number + Status Indicator */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-slate-50 border border-slate-200/80">
                        {getIcon(service.iconName)}
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-400">
                        {service.number}
                      </span>
                    </div>

                    {/* Status Badge */}
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      <CheckCircle className="w-3 h-3 text-emerald-600" />
                      <span>{lang === 'ta' ? 'செயலில் உள்ளது' : 'Verified Service'}</span>
                    </span>
                  </div>

                  {/* Title & Tamil Subtitle */}
                  <div>
                    {lang !== 'ta' && (
                      <h3 className="text-lg font-bold font-display text-slate-900 group-hover:text-amber-600 transition-colors">
                        {service.title}
                      </h3>
                    )}
                    {(lang === 'bilingual' || lang === 'ta') && service.tamilTitle && (
                      <div className={`text-sm font-semibold text-amber-700 ${lang === 'ta' ? 'text-lg font-bold text-slate-950 group-hover:text-amber-600' : 'mt-0.5'}`}>
                        {service.tamilTitle}
                      </div>
                    )}
                  </div>

                  {/* If Logo Service: show brand mark badge & studio visual */}
                  {isLogoService && (
                    <div className="mt-3 overflow-hidden rounded-xl border border-indigo-200 bg-slate-900 relative">
                      <div className="h-28 w-full overflow-hidden">
                        <img
                          src={creativeImg}
                          alt="Grow Along Logo & Graphic Design Studio"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent pointer-events-none" />
                      <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white">
                        <div className="text-[11px]">
                          <strong className="block font-display text-white">Custom Vector Branding</strong>
                          <span className="text-[10px] text-slate-300">
                            {lang === 'ta' ? 'ராயல் லோகோ & கிராபிக்ஸ்' : 'Logos, Social Posts & Collateral'}
                          </span>
                        </div>
                        <div className="bg-white/90 backdrop-blur-sm p-1.5 rounded-lg shadow-sm">
                          <Logo size="sm" variant="mark" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Short Description */}
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {lang === 'ta' && service.tamilShortDesc ? service.tamilShortDesc : service.shortDesc}
                  </p>

                  {lang === 'bilingual' && service.tamilShortDesc && (
                    <p className="mt-1 text-xs text-slate-500 leading-relaxed italic">
                      "{service.tamilShortDesc}"
                    </p>
                  )}

                  {/* Deliverable Highlights */}
                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5">
                    <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider font-mono">
                      {lang === 'ta' ? 'முக்கிய பலன்கள்' : 'Key Deliverables'}
                    </div>
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-700">
                        <span className="text-amber-600 font-bold shrink-0 mt-0.5">·</span>
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                    {service.deliverables.length > 3 && (
                      <div className="text-[11px] text-slate-400 italic">
                        +{service.deliverables.length - 3} {lang === 'ta' ? 'கூடுதல் பலன்கள்' : 'more deliverables'}
                      </div>
                    )}
                  </div>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5 text-[11px] text-slate-500">
                    {service.tags.map((tag, idx) => (
                      <span key={idx} className="bg-slate-100 px-2 py-0.5 rounded text-slate-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-semibold text-slate-700 hover:text-slate-950 underline underline-offset-4 cursor-pointer"
                  >
                    {lang === 'ta' ? 'முழு விவரங்கள்' : 'View Scope Details'}
                  </button>

                  <button
                    onClick={() => {
                      onSelectService(service.title);
                      const el = document.getElementById('contact');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-900 hover:text-amber-600 transition-colors cursor-pointer"
                  >
                    <span>{lang === 'ta' ? 'ஆர்டர் / விசாரணை' : 'Inquire'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Callout */}
        <div className="mt-12 p-6 sm:p-8 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h4 className="text-base sm:text-lg font-bold font-display text-slate-950">
              Need Google Ads, SEO, Meta Ads, or a new Logo for your business in Chennai?
            </h4>
            <p className="mt-1 text-xs sm:text-sm text-slate-600">
              கூகுள் ஆட்ஸ், எஸ்இஓ, மெட்டா ஆட்ஸ் அல்லது லோகோ டிசைன் தேவைப்படுகிறதா? நேரடி ஆலோசனைக்கு தொடர்பு கொள்ளவும்: 6381499729
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={AGENCY_INFO.phoneHref}
              className="px-4 py-2.5 text-xs font-semibold text-slate-900 bg-white border border-slate-200 hover:bg-slate-100 rounded-xl font-mono"
            >
              Call: {AGENCY_INFO.phone}
            </a>
            <button
              onClick={onOpenAudit}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all shadow-xs cursor-pointer whitespace-nowrap"
            >
              Get Free Consultation
            </button>
          </div>
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-bold font-mono text-amber-700 mb-1">
              <span>SERVICE {selectedService.number}</span>
              <span aria-hidden="true">·</span>
              <span className="text-emerald-700">Verified & Active</span>
            </div>

            <h3 className="text-2xl font-bold font-display text-slate-950">
              {selectedService.title}
            </h3>
            {selectedService.tamilTitle && (
              <div className="text-sm font-semibold text-amber-800 mt-1">
                {selectedService.tamilTitle}
              </div>
            )}

            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              {selectedService.fullDesc}
            </p>

            <div className="mt-6 pt-5 border-t border-slate-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono mb-3">
                Complete Deliverable Checklist
              </h4>
              <ul className="space-y-2.5">
                {selectedService.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 p-4 bg-slate-50 rounded-xl border border-slate-200">
              <div className="text-xs font-bold text-slate-900 mb-1 font-mono uppercase tracking-wider">
                Ideal Business Fit
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {selectedService.bestSuitedFor}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-slate-500">
                Direct Strategist Line: <strong className="font-mono text-slate-900">{AGENCY_INFO.phone}</strong>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={`https://wa.me/916381499729?text=Hello%20Grow%20Along%20Marketing,%20I%20am%20interested%20in%20discussing%20${encodeURIComponent(selectedService.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none px-4 py-2.5 text-xs font-semibold text-emerald-950 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl text-center"
                >
                  WhatsApp About This
                </a>
                <button
                  onClick={() => {
                    const title = selectedService.title;
                    setSelectedService(null);
                    onSelectService(title);
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex-1 sm:flex-none px-5 py-2.5 text-xs font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-xl cursor-pointer"
                >
                  Book Free Consultation
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
