import React, { useState } from 'react';
import { 
  X, 
  FileText, 
  Layers, 
  LayoutTemplate, 
  Compass, 
  Search, 
  Palette, 
  CheckSquare, 
  Copy, 
  Check, 
  ExternalLink,
  Target
} from 'lucide-react';
import { STRATEGY_BLUEPRINT_SECTIONS, AGENCY_INFO } from '../data/agencyData';
import { Logo } from './Logo';

interface StrategyBlueprintModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StrategyBlueprintModal: React.FC<StrategyBlueprintModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<string>('positioning');
  const [copied, setCopied] = useState(false);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  if (!isOpen) return null;

  const toggleCheck = (idx: number) => {
    setCheckedItems(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const handleCopyAll = () => {
    const fullText = STRATEGY_BLUEPRINT_SECTIONS.map(s => 
      `### ${s.number}. ${s.title}\n${s.summary}\n\n` + s.details.map(d => `- ${d}`).join('\n')
    ).join('\n\n---\n\n');

    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const tabs = [
    { id: 'positioning', label: '1. Brand Positioning', icon: Target },
    { id: 'sitemap', label: '2. Sitemap & Architecture', icon: Layers },
    { id: 'homepage-wireframe', label: '3. Homepage Wireframe', icon: LayoutTemplate },
    { id: 'cta-strategy', label: '4. CTA Strategy', icon: Compass },
    { id: 'seo-strategy', label: '5. Chennai Local SEO', icon: Search },
    { id: 'visual-design-system', label: '6. Visual Design System', icon: Palette },
    { id: 'launch-checklist', label: '7. Launch Checklist', icon: CheckSquare }
  ];

  const currentSection = STRATEGY_BLUEPRINT_SECTIONS.find(s => s.id === activeTab) || STRATEGY_BLUEPRINT_SECTIONS[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col max-h-[92vh] overflow-hidden">
        
        {/* Header Bar */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-500/20 text-amber-400 rounded-lg">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-amber-400">
                Master Implementation Plan
              </div>
              <h2 className="text-base sm:text-lg font-bold font-display text-white">
                Grow Along Marketing Agency — Website Blueprint & Launch Guide
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyAll}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 transition-colors cursor-pointer"
              title="Copy complete strategy document"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy All'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body: Sidebar + Main Content */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          
          {/* Navigation Sidebar */}
          <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-slate-200 bg-slate-50 p-3 sm:p-4 overflow-x-auto md:overflow-y-auto shrink-0 flex md:flex-col gap-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap text-left cursor-pointer ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-amber-400' : 'text-slate-400'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Main Document Viewer */}
          <div className="flex-1 p-6 sm:p-8 overflow-y-auto bg-white space-y-6">
            
            {/* Section Header */}
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-amber-700">
                Blueprint Section {currentSection.number}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-950 mt-1">
                {currentSection.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {currentSection.summary}
              </p>
            </div>

            {/* Render Details */}
            <div className="pt-4 border-t border-slate-200 space-y-4">
              {currentSection.id === 'visual-design-system' && (
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-6">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-700">
                      Brand Asset Verification
                    </span>
                    <h4 className="text-base font-bold font-display text-slate-900 mt-0.5">
                      Official Grow Along Marketing Logo Suite
                    </h4>
                    <p className="text-xs text-slate-600 mt-1">
                      Rendered vector emblem featuring the royal peacock feather, inner gold and cyan core, and precision fountain pen nib.
                    </p>
                  </div>

                  {/* Logo Display Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Light Background Variant */}
                    <div className="p-6 bg-white rounded-xl border border-slate-200 flex flex-col items-center justify-center text-center shadow-xs">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-3">
                        Vertical Brand Stamp (Light)
                      </span>
                      <Logo size="lg" variant="stamp" theme="light" />
                    </div>

                    {/* Dark Background Variant */}
                    <div className="p-6 bg-slate-950 rounded-xl border border-slate-800 flex flex-col items-center justify-center text-center shadow-xs">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-3">
                        Vertical Brand Stamp (Dark)
                      </span>
                      <Logo size="lg" variant="stamp" theme="dark" />
                    </div>
                  </div>

                  {/* Horizontal Lockup Card */}
                  <div className="p-4 bg-white rounded-xl border border-slate-200 flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                        Horizontal Navigation Lockup
                      </span>
                      <Logo size="md" variant="horizontal" />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md bg-[#4F46E5]" title="Royal Violet #4F46E5" />
                      <div className="w-6 h-6 rounded-md bg-[#F59E0B]" title="Golden Amber #F59E0B" />
                      <div className="w-6 h-6 rounded-md bg-[#0284C7]" title="Cyan Droplet #0284C7" />
                      <div className="w-6 h-6 rounded-md bg-[#0F172A]" title="Midnight Navy #0F172A" />
                    </div>
                  </div>
                </div>
              )}

              {currentSection.id === 'launch-checklist' ? (
                <div className="space-y-2.5">
                  <div className="text-xs font-semibold text-slate-700 uppercase tracking-wider font-mono">
                    Interactive Verification Checklist
                  </div>
                  {currentSection.details.map((item, idx) => (
                    <label
                      key={idx}
                      onClick={() => toggleCheck(idx)}
                      className={`flex items-start gap-3 p-3.5 rounded-xl border transition-all cursor-pointer ${
                        checkedItems[idx]
                          ? 'bg-emerald-50/50 border-emerald-200 text-slate-800'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={!!checkedItems[idx]}
                        onChange={() => {}}
                        className="mt-0.5 rounded text-amber-600 focus:ring-amber-500 w-4 h-4 cursor-pointer"
                      />
                      <span className="text-xs sm:text-sm leading-relaxed">{item}</span>
                    </label>
                  ))}
                </div>
              ) : (
                <div className="space-y-3">
                  {currentSection.details.map((detail, idx) => (
                    <div 
                      key={idx} 
                      className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-700 leading-relaxed font-sans"
                    >
                      {detail.startsWith('  -') ? (
                        <div className="pl-4 text-slate-600 font-mono text-xs">
                          {detail}
                        </div>
                      ) : (
                        <div>{detail}</div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Strategic Notes Box */}
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-950 space-y-1">
              <div className="font-bold font-mono uppercase tracking-wider">
                Production Integrity Requirement
              </div>
              <p>
                All telephone calls (`tel:+916381499729`) and WhatsApp links (`wa.me/916381499729`) are wired directly to the Grow Along agency line. No fabricated stats, unverified reviews, or arbitrary claims appear on the public pages.
              </p>
            </div>

          </div>

        </div>

        {/* Modal Bottom Bar */}
        <div className="px-6 py-3.5 bg-slate-100 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <div>
            Grow Along Marketing Agency · Chennai, Tamil Nadu, India · 6381499729
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Back to Live Website
          </button>
        </div>

      </div>
    </div>
  );
};
