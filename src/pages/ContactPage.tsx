import React, { useState, useEffect } from 'react';
import { PACKAGES } from '../data/packages';
import { ContactFormState } from '../types';
import { Send, CheckCircle2, Sparkles, Mail, User, Building, Globe, MessageSquare } from 'lucide-react';

interface ContactPageProps {
  initialPackageId?: string;
  onOpenAgreements: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ initialPackageId, onOpenAgreements }) => {
  const [formData, setFormData] = useState<ContactFormState>({
    fullName: '',
    email: '',
    companyName: '',
    websiteUrl: '',
    selectedPackage: initialPackageId || 'fullservice',
    nicheTargetAudience: '',
    monthlyContentGoal: '4 Articles per Month',
    message: '',
    isTrialRequested: initialPackageId === 'trial',
    isCustomPlanRequested: false
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialPackageId) {
      if (initialPackageId === 'trial') {
        setFormData(prev => ({ ...prev, isTrialRequested: true, selectedPackage: 'fullservice' }));
      } else {
        setFormData(prev => ({ ...prev, selectedPackage: initialPackageId }));
      }
    }
  }, [initialPackageId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 150, behavior: 'smooth' });
  };

  const faqs = [
    {
      q: 'How does the 1-click email approval workflow work?',
      a: 'For WordPress staging and social media, content is placed in "Draft" mode. You receive an email notification containing preview links. You simply click "Approve" or reply with minor revisions. Content never goes live unapproved.'
    },
    {
      q: 'Do you require direct password access to my social media accounts?',
      a: 'No! We use CoSchedule authentication. You securely link your social profiles (up to 3 channels) inside the CoSchedule portal. We never handle or store your social platform passwords.'
    },
    {
      q: 'How are monthly payments and one-time setup fees billed?',
      a: 'All invoices are issued in USD upfront on a monthly prepaid retainer basis with zero long-term contract lock-ins.'
    },
    {
      q: 'What is your revision policy?',
      a: 'Each monthly deliverable includes up to two (2) rounds of minor revisions (phrasing tweaks, tone adjustments, minor facts) submitted within 3 business days of delivery notification.'
    },
    {
      q: 'Can I request a paid trial article before signing a retainer?',
      a: 'Yes! You can request a single paid test article which includes full research, SEO/GEO optimization, and custom Canva visual assets so you can evaluate our workflow risk-free.'
    }
  ];

  return (
    <div className="py-12 bg-[#0F172A]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37] flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            Direct Access to Content Creation Strategist
          </span>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Enquire Directly To Your Content Creator
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Fill out the enquiry form below to check availability, request custom samples, or initiate onboarding. Normal response time within 24 & 48 hours.
          </p>
        </div>

        {/* Main Form Container */}
        <div className="max-w-3xl mx-auto bg-[#1E293B] rounded p-6 sm:p-8 border border-slate-700/50 shadow-xl space-y-5">
            
            {submitted ? (
              <div className="text-center py-10 space-y-5">
                <div className="w-14 h-14 rounded bg-[#0F172A] border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-2xl font-extrabold text-white tracking-tight">Enquiry Received Successfully!</h3>
                  <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-[#D4AF37] font-bold">{formData.fullName}</span>. Your enquiry for the <span className="text-white font-bold">{PACKAGES.find(p => p.id === formData.selectedPackage)?.name || 'Custom Plan'}</span> has been submitted.
                  </p>
                </div>

                <div className="bg-[#0F172A] p-4 rounded border border-slate-700/60 max-w-md mx-auto text-xs text-slate-300 space-y-2 text-left">
                  <div className="font-bold text-[#D4AF37] uppercase tracking-wider">NEXT STEPS:</div>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-300 text-xs">
                    <li>Direct response sent to <span className="text-white font-mono">{formData.email}</span> within 24 hours.</li>
                    <li>Custom sample articles & onboarding questionnaire link provided.</li>
                    <li>Client agreement preview sent for review.</li>
                  </ul>
                </div>

                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 bg-[#0F172A] text-xs font-bold uppercase tracking-wider text-slate-300 border border-slate-700 hover:border-[#D4AF37]"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="border-b border-slate-700/50 pb-3 flex items-center justify-between">
                  <h2 className="text-lg font-extrabold text-white uppercase tracking-wide">Enquiry Details</h2>
                </div>

                {/* Package Selection */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-bold text-slate-300 uppercase tracking-wider">
                    Select The Package You Are Enquiring About *
                  </label>
                  <select
                    value={formData.selectedPackage}
                    onChange={(e) => setFormData({ ...formData, selectedPackage: e.target.value })}
                    className="w-full bg-[#0F172A] border border-slate-700/60 rounded px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                    required
                  >
                    {PACKAGES.map((pkg) => (
                      <option key={pkg.id} value={pkg.id}>
                        {pkg.name} — ${pkg.monthlyRetainer}/mo (${pkg.setupFee} Setup)
                      </option>
                    ))}
                  </select>
                </div>

                {/* Trial Article Checkbox */}
                <div className="bg-[#0F172A] p-3 rounded border border-slate-700/60 flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="trialCheck"
                    checked={formData.isTrialRequested}
                    onChange={(e) => setFormData({ ...formData, isTrialRequested: e.target.checked })}
                    className="w-4 h-4 rounded text-[#D4AF37] focus:ring-[#D4AF37] bg-[#1E293B] border-slate-700"
                  />
                  <label htmlFor="trialCheck" className="text-xs text-slate-300 cursor-pointer leading-snug">
                    <span className="font-bold text-[#D4AF37]">Enquire About A Paid Trial Article: </span>
                    Test the workflow with a single article before committing to a monthly retainer.
                  </label>
                </div>

                {/* Custom Plan Checkbox */}
                <div className="bg-[#0F172A] p-3 rounded border border-slate-700/60 flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="customPlanCheck"
                    checked={formData.isCustomPlanRequested || false}
                    onChange={(e) => setFormData({ ...formData, isCustomPlanRequested: e.target.checked })}
                    className="w-4 h-4 rounded text-[#D4AF37] focus:ring-[#D4AF37] bg-[#1E293B] border-slate-700"
                  />
                  <label htmlFor="customPlanCheck" className="text-xs text-slate-300 cursor-pointer leading-snug">
                    <span className="font-bold text-[#D4AF37]">Enquire About A Custom Plan: </span>
                    Tailored solutions designed around your specific business goals, scope, &amp; budget.
                  </label>
                </div>

                {/* Contact Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-[10px] font-bold text-slate-300 uppercase tracking-wider">Your Full Name *</label>
                    <div className="relative">
                      <User className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-3" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Smith"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-[#0F172A] border border-slate-700/60 rounded pl-9 pr-3 py-2 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[10px] font-bold text-slate-300 uppercase tracking-wider">Business Email Address *</label>
                    <div className="relative">
                      <Mail className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-3" />
                      <input
                        type="email"
                        required
                        placeholder="john@yourcompany.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#0F172A] border border-slate-700/60 rounded pl-9 pr-3 py-2 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>
                </div>

                {/* Company Name & Website */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-[10px] font-bold text-slate-300 uppercase tracking-wider">Company / Brand Name *</label>
                    <div className="relative">
                      <Building className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-3" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Apex Tech Solutions"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full bg-[#0F172A] border border-slate-700/60 rounded pl-9 pr-3 py-2 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[10px] font-bold text-slate-300 uppercase tracking-wider">Website URL *</label>
                    <div className="relative">
                      <Globe className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-3" />
                      <input
                        type="url"
                        required
                        placeholder="https://yourwebsite.com"
                        value={formData.websiteUrl}
                        onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                        className="w-full bg-[#0F172A] border border-slate-700/60 rounded pl-9 pr-3 py-2 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>
                </div>

                {/* Target Audience & Goals */}
                <div className="space-y-1">
                  <label className="block text-[10px] font-bold text-slate-300 uppercase tracking-wider">Industry, Niche & Target Audience</label>
                  <input
                    type="text"
                    placeholder="e.g. B2B SaaS decision makers, Health & Wellness, Wealth Management..."
                    value={formData.nicheTargetAudience}
                    onChange={(e) => setFormData({ ...formData, nicheTargetAudience: e.target.value })}
                    className="w-full bg-[#0F172A] border border-slate-700/60 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                {/* Additional Message */}
                <div className="space-y-1">
                  <label className="block text-[10px] font-bold text-slate-300 uppercase tracking-wider">Specific Requirements or Questions</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your current blog strategy, WordPress CMS, or social channels..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#0F172A] border border-slate-700/60 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#D4AF37] hover:bg-[#C19A2E] text-[#0F172A] font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-colors shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Enquiry</span>
                </button>

              </form>
            )}

        </div>

      </div>
    </div>
  );
};
