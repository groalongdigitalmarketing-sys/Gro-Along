import React from 'react';
import { MapPin, Navigation, Compass, Building2, Store, Stethoscope, Factory } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

export const ChennaiPresenceBanner: React.FC = () => {
  return (
    <section className="bg-slate-900 text-white py-12 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Context */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
              <Compass className="w-4 h-4" />
              <span>HYPER-LOCAL MARKET EXPERTISE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-white">
              Built for the commercial rhythm of Chennai.
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              From engineering manufacturers in Ambattur to healthcare specialists in Anna Nagar and tech enterprises along the OMR corridor, we architect marketing that resonates with South Indian decision-makers.
            </p>
          </div>

          {/* Right Localities & Target Sectors */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Geo Hubs */}
            <div>
              <div className="text-xs uppercase tracking-wider text-slate-400 mb-2 font-mono">
                Key Chennai Hubs We Actively Target
              </div>
              <div className="flex flex-wrap gap-2">
                {AGENCY_INFO.serviceAreas.map((area, idx) => (
                  <span 
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/80 text-xs text-slate-200"
                  >
                    <MapPin className="w-3 h-3 text-amber-400" />
                    <span>{area}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Core Industry Frameworks */}
            <div className="pt-2 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Factory className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>B2B & Manufacturing</span>
              </div>
              <div className="flex items-center gap-2">
                <Stethoscope className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Clinics & Healthcare</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>Real Estate & Interiors</span>
              </div>
              <div className="flex items-center gap-2">
                <Store className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>Retail & D2C Brands</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
