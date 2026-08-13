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
            Frequently Asked Questions
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Everything you need to know about our content creation workflow, guarantees, and onboarding terms.
          </p>
        </div>

        {/* FAQ Accordion - Full Width */}
        <div className="bg-[#1E293B] rounded p-6 border border-slate-700/50 space-y-4 shadow-xl">
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
    </section>
  );
};
