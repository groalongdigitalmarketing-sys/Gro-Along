import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { AGENCY_INFO, SERVICES_DATA } from '../data/agencyData';
import { LeadFormData } from '../types';

interface ContactSectionProps {
  selectedServicePreset?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ selectedServicePreset }) => {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    businessName: '',
    phone: '',
    email: '',
    website: '',
    serviceNeeded: selectedServicePreset || SERVICES_DATA[0].title,
    monthlyBudget: '₹25,000 – ₹50,000',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Sync if preset changes
  React.useEffect(() => {
    if (selectedServicePreset) {
      setFormData(prev => ({ ...prev, serviceNeeded: selectedServicePreset }));
    }
  }, [selectedServicePreset]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name.';
    if (!formData.businessName.trim()) errs.businessName = 'Please enter your company or business name.';
    
    // Validate Indian phone number (10 digits)
    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.phone = 'Please provide a valid 10-digit phone number.';
    }

    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = 'Please provide a valid business email address.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);

    // Save lead to local storage for local persistence
    try {
      const existingLeads = JSON.parse(localStorage.getItem('grow_along_leads') || '[]');
      const newLead = {
        ...formData,
        timestamp: new Date().toISOString(),
        id: `LEAD-${Date.now().toString().slice(-6)}`
      };
      localStorage.setItem('grow_along_leads', JSON.stringify([newLead, ...existingLeads]));
    } catch {
      // ignore storage errors
    }

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const prefilledWhatsAppLink = `https://wa.me/916381499729?text=${encodeURIComponent(
    `Hello Grow Along Marketing, I just submitted a consultation request for ${formData.businessName || 'my business'}. Name: ${formData.fullName}, Phone: ${formData.phone}, Service: ${formData.serviceNeeded}, Budget: ${formData.monthlyBudget}.`
  )}`;

  return (
    <section id="contact" className="py-16 md:py-24 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-700 uppercase tracking-wider mb-2 font-mono">
            <span>Direct Growth Consultation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-slate-950 text-balance">
            Let's discuss your marketing strategy and monthly lead targets.
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Fill out the consultation brief below, or connect with our senior strategist immediately via direct call or WhatsApp.
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200">
            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-display text-slate-950">
                  Consultation Request Received!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. A dedicated growth strategist from Grow Along Marketing Agency will review your business requirements and contact you at <strong className="text-slate-900">{formData.phone}</strong> within 2–4 business hours.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={prefilledWhatsAppLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" />
                    <span>Instant Follow-up on WhatsApp</span>
                  </a>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        businessName: '',
                        phone: '',
                        email: '',
                        website: '',
                        serviceNeeded: SERVICES_DATA[0].title,
                        monthlyBudget: '₹25,000 – ₹50,000',
                        message: ''
                      });
                    }}
                    className="w-full sm:w-auto text-xs font-semibold text-slate-600 hover:text-slate-950 px-4 py-3 rounded-xl border border-slate-200 cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1 font-mono uppercase tracking-wider">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Senthil Kumar"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full px-3.5 py-2.5 bg-white rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/20 ${
                        errors.fullName ? 'border-rose-400' : 'border-slate-300 focus:border-amber-500'
                      }`}
                    />
                    {errors.fullName && <p className="text-[11px] text-rose-600 mt-1">{errors.fullName}</p>}
                  </div>

                  {/* Business Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1 font-mono uppercase tracking-wider">
                      Company / Business Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Apex Precision Tools"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className={`w-full px-3.5 py-2.5 bg-white rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/20 ${
                        errors.businessName ? 'border-rose-400' : 'border-slate-300 focus:border-amber-500'
                      }`}
                    />
                    {errors.businessName && <p className="text-[11px] text-rose-600 mt-1">{errors.businessName}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
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
                        className={`w-full px-3.5 py-2.5 bg-white rounded-r-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/20 ${
                          errors.phone ? 'border-rose-400' : 'border-slate-300 focus:border-amber-500'
                        }`}
                      />
                    </div>
                    {errors.phone && <p className="text-[11px] text-rose-600 mt-1">{errors.phone}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1 font-mono uppercase tracking-wider">
                      Business Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-3.5 py-2.5 bg-white rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/20 ${
                        errors.email ? 'border-rose-400' : 'border-slate-300 focus:border-amber-500'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-rose-600 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Service Needed */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1 font-mono uppercase tracking-wider">
                      Primary Service Needed
                    </label>
                    <select
                      value={formData.serviceNeeded}
                      onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                    >
                      {SERVICES_DATA.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.number}. {s.title} {s.tamilTitle ? `· ${s.tamilTitle}` : ''}
                        </option>
                      ))}
                      <option value="All-in-One Growth Bundle (Ads + SEO + Logo)">
                        All-in-One Growth Bundle (Google Ads + SEO + Meta Ads + Logo)
                      </option>
                    </select>
                  </div>

                  {/* Monthly Budget */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1 font-mono uppercase tracking-wider">
                      Estimated Monthly Budget
                    </label>
                    <select
                      value={formData.monthlyBudget}
                      onChange={(e) => setFormData({ ...formData, monthlyBudget: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                    >
                      <option value="₹25,000 – ₹50,000">₹25,000 – ₹50,000 / month</option>
                      <option value="₹50,000 – ₹1,00,000">₹50,000 – ₹1,00,000 / month</option>
                      <option value="₹1,00,000 – ₹2,50,000">₹1,00,000 – ₹2,50,000 / month</option>
                      <option value="₹2,50,000+">₹2,50,000+ / month (Enterprise)</option>
                    </select>
                  </div>
                </div>

                {/* Website / Instagram */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1 font-mono uppercase tracking-wider">
                    Current Website or Social URL (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="https://yourwebsite.com or @instagram_handle"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1 font-mono uppercase tracking-wider">
                    Current Marketing Challenge / Target Goal
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us what you want to achieve (e.g., more patient bookings in Anna Nagar, B2B procurement inquiries, lower CPL on Google Ads)..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 text-sm font-semibold text-white bg-slate-950 hover:bg-slate-800 active:scale-[0.99] rounded-xl transition-all shadow-md cursor-pointer disabled:opacity-50"
                >
                  {submitting ? (
                    <span>Submitting Brief...</span>
                  ) : (
                    <>
                      <span>Submit Free Consultation Request</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-center text-[11px] text-slate-500">
                  🔒 Zero spam. We never share your commercial information with third parties.
                </p>
              </form>
            )}
          </div>

          {/* Right Column: Direct Contact Details & Local Assurance */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6">
              <div>
                <span className="text-xs uppercase font-mono tracking-wider text-amber-400">
                  Direct Agency Contact
                </span>
                <h3 className="text-xl font-bold font-display text-white mt-1">
                  Grow Along Marketing Agency
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Performance Marketing & Digital Growth Partner
                </p>
              </div>

              {/* Direct channels */}
              <div className="space-y-4 text-xs">
                
                {/* Phone */}
                <a 
                  href={AGENCY_INFO.phoneHref}
                  className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 hover:border-slate-600 transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[11px] text-slate-400 font-mono">Direct Telephone</div>
                    <div className="text-sm font-bold font-mono text-white mt-0.5">
                      {AGENCY_INFO.phone}
                    </div>
                    <div className="text-[11px] text-emerald-400">Click to call immediately</div>
                  </div>
                </a>

                {/* WhatsApp */}
                <a 
                  href={AGENCY_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 hover:border-emerald-600/80 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[11px] text-slate-400 font-mono">Official WhatsApp Business</div>
                    <div className="text-sm font-bold font-mono text-white mt-0.5">
                      +91 {AGENCY_INFO.phone}
                    </div>
                    <div className="text-[11px] text-emerald-400">Instant chat & document exchange</div>
                  </div>
                </a>

                {/* Email */}
                <a 
                  href={`mailto:${AGENCY_INFO.email}`}
                  className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 hover:border-slate-600 transition-colors"
                >
                  <Mail className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[11px] text-slate-400 font-mono">Inquiry Email</div>
                    <div className="text-xs font-semibold text-white mt-0.5 break-all">
                      {AGENCY_INFO.email}
                    </div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
                  <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[11px] text-slate-400 font-mono">Primary Head Office</div>
                    <div className="text-xs font-semibold text-white mt-0.5">
                      Chennai, Tamil Nadu, India
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      In-person strategy reviews scheduled upon request
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[11px] text-slate-400 font-mono">Operational Schedule</div>
                    <div className="text-xs font-semibold text-white mt-0.5">
                      {AGENCY_INFO.workingHours}
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Local Chennai Advantage card */}
            <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-mono">
                The Chennai Advantage
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Prefer to discuss your marketing targets in person? Our senior strategist can meet your executive team at your office in Guindy, OMR, Anna Nagar, or central Chennai.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
