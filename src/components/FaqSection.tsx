import React, { useState } from 'react';
import { ShieldCheck, Clock, CreditCard, CheckCircle2, HelpCircle, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Do you require direct password access to my social media accounts?',
      a: 'No direct password access to client social media accounts! We use CoSchedule authentication. You securely link your social profiles (up to 3 channels) inside the CoSchedule portal. We never handle or store your social platform passwords.'
    },
    {
      q: 'How does the client review & approval workflow work?',
      a: 'For WordPress staging and social media, content is placed in "Draft" mode. You receive an email notification containing preview links. You simply click "Approve" or reply with minor revisions. Content never goes live unapproved.'
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
    <section className="py-16 bg-[#0F172A] relative border-t border-slate-700/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37] flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            Questions & Guarantees
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions & Onboarding SLA
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Everything you need to know about our content creation workflow, guarantees, and onboarding terms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Onboarding SLA & Guarantee */}
          <div className="lg:col-span-5 bg-[#1E293B] rounded p-6 border border-slate-700/50 space-y-4 shadow-xl">
            <h3 className="text-base font-bold text-white uppercase tracking-wide flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
              <span>Onboarding SLA & Guarantee</span>
            </h3>

            <div className="space-y-3.5 text-xs text-slate-300 pt-2">
              <div className="flex items-start space-x-3 bg-[#0F172A] p-3 rounded border border-slate-800">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block mb-0.5">24 to 48 Hour SLA Response: </span>
                  Direct response from your content creation manager within 24 to 48 hours. Responses are typically provided within 24 hours, seven days a week.
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-[#0F172A] p-3 rounded border border-slate-800">
                <CreditCard className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block mb-0.5">Prepaid Retainers: </span>
                  Prepaid monthly retainer packages in USD with zero hidden fees or per-word surprises with no long-term lock-in contracts. You enjoy consistent, hands-off content management.
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-[#0F172A] p-3 rounded border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block mb-0.5">Password-Free Access: </span>
                  Secure login for the WordPress Editor & the CoSchedule OAuth API authentication. I will never ask for your social media passwords.
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="lg:col-span-7 bg-[#1E293B] rounded p-6 border border-slate-700/50 space-y-4 shadow-xl">
            <h3 className="text-base font-bold text-white uppercase tracking-wide flex items-center space-x-2">
              <HelpCircle className="w-5 h-5 text-[#D4AF37]" />
              <span>Frequently Asked Questions</span>
            </h3>

            <div className="space-y-3 pt-2">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border-b border-slate-700/50 pb-3">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                    className="w-full text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-200 hover:text-[#D4AF37] py-1 transition-colors"
                  >
                    <span>{faq.q}</span>
                    {openFaqIndex === idx ? <ChevronUp className="w-4 h-4 text-[#D4AF37] shrink-0 ml-2" /> : <ChevronDown className="w-4 h-4 text-slate-500 shrink-0 ml-2" />}
                  </button>
                  {openFaqIndex === idx && (
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed pl-1">
                      {faq.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
