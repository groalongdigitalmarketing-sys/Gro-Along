import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageCircle, Phone } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuditModal: React.FC<AuditModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    businessName: '',
    websiteUrl: '',
    phone: '',
    primaryGoal: 'Google Maps / Local SEO in Chennai'
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!formData.businessName.trim()) errs.businessName = 'Please enter your business name.';
    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) errs.phone = 'Valid 10-digit mobile number required.';

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  const whatsappAuditMsg = encodeURIComponent(
    `Hello Grow Along Marketing, I would like to request the 60-Second Growth Audit for my company ${formData.businessName}. Phone: ${formData.phone}, Website: ${formData.websiteUrl || 'Not provided'}, Primary Goal: ${formData.primaryGoal}.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 sm:p-8 max-h-[95vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-amber-700 font-mono uppercase tracking-wider mb-1">
              <span>60-Second Commercial Diagnosis</span>
            </div>
            <h3 className="text-2xl font-bold font-display text-slate-950">
              Request Your Free Marketing Audit
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              We review your search rankings in Chennai, analyze competitor ad spend, and identify your fastest path to qualified leads.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1 font-mono uppercase tracking-wider">
                  Company / Business Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Apex Industrial Solutions"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className={`w-full px-3.5 py-2.5 bg-slate-50 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/20 ${
                    errors.businessName ? 'border-rose-400' : 'border-slate-300 focus:border-amber-500'
                  }`}
                />
                {errors.businessName && <p className="text-[11px] text-rose-600 mt-1">{errors.businessName}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1 font-mono uppercase tracking-wider">
                  Website or Social Profile (Optional)
                </label>
                <input
                  type="text"
                  placeholder="https://yourbrand.com or Instagram handle"
                  value={formData.websiteUrl}
                  onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1 font-mono uppercase tracking-wider">
                  Phone Number (WhatsApp) *
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 text-xs font-mono text-slate-600 bg-slate-100 border border-r-0 border-slate-300 rounded-l-xl">
                    +91
                  </span>
                  <input
                    type="tel"
                    placeholder="10-digit mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full px-3.5 py-2.5 bg-slate-50 rounded-r-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/20 ${
                      errors.phone ? 'border-rose-400' : 'border-slate-300 focus:border-amber-500'
                    }`}
                  />
                </div>
                {errors.phone && <p className="text-[11px] text-rose-600 mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1 font-mono uppercase tracking-wider">
                  Primary Objective
                </label>
                <select
                  value={formData.primaryGoal}
                  onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                >
                  <option value="Google Ads (PPC & Search Marketing)">Google Ads · கூகுள் ஆட்ஸ் (Instant Leads)</option>
                  <option value="Search Engine Optimization (SEO & Google Maps)">SEO & Google Maps 3-Pack · எஸ்இஓ (Organic Traffic)</option>
                  <option value="Meta Ads (Instagram & Facebook)">Meta Ads · மெட்டா ஆட்ஸ் (Instagram/FB Lead Ads)</option>
                  <option value="Logo & Graphic Design (Branding & Creatives)">Logo & Graphic Design · லோகோ & கிராபிக்ஸ்</option>
                  <option value="Conversion Website Redesign">High-Converting Website Design · வலைத்தள வடிவமைப்பு</option>
                  <option value="All-in-One Growth Bundle">All-in-One Growth Bundle · முழுமையான மார்க்கெட்டிங்</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 px-4 text-xs font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-xl transition-all shadow-md cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading ? 'Preparing Audit Request...' : 'Generate My Free Growth Audit'}
                {!loading && <Send className="w-3.5 h-3.5" />}
              </button>

              <div className="pt-2 text-center text-[11px] text-slate-500">
                Direct phone support: <a href={AGENCY_INFO.phoneHref} className="text-slate-900 font-mono font-bold hover:underline">{AGENCY_INFO.formattedPhone}</a>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center space-y-4">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold font-display text-slate-950">
              Audit Scheduled!
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              We have initiated your preliminary audit for <strong className="text-slate-900">{formData.businessName}</strong>. Our senior analyst will contact you at <strong className="text-slate-900">{formData.phone}</strong> shortly.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-2">
              <a
                href={`https://wa.me/916381499729?text=${whatsappAuditMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-colors"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>Notify via WhatsApp</span>
              </a>

              <button
                onClick={onClose}
                className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 rounded-xl border border-slate-200 cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
