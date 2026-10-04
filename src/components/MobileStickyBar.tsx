import React from 'react';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

interface MobileStickyBarProps {
  onOpenAudit: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenAudit }) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 sm:hidden shadow-lg">
      <div className="grid grid-cols-3 gap-2 items-center">
        
        {/* Direct Call Button */}
        <a
          href={AGENCY_INFO.phoneHref}
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-lg text-xs font-semibold whitespace-nowrap active:scale-95 transition-all"
        >
          <Phone className="w-3.5 h-3.5 text-amber-600 shrink-0" />
          <span>Call</span>
        </a>

        {/* WhatsApp Direct Chat */}
        <a
          href={AGENCY_INFO.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg text-xs font-semibold whitespace-nowrap active:scale-95 transition-all"
        >
          <MessageCircle className="w-3.5 h-3.5 shrink-0" />
          <span>WhatsApp</span>
        </a>

        {/* Free Consultation Audit */}
        <button
          onClick={onOpenAudit}
          className="flex items-center justify-center gap-1 py-2.5 px-2 bg-slate-950 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold whitespace-nowrap active:scale-95 transition-all cursor-pointer"
        >
          <span>Free Audit</span>
          <ArrowRight className="w-3 h-3 shrink-0" />
        </button>

      </div>
    </div>
  );
};
