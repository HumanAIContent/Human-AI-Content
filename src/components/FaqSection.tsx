import React, { useState } from 'react';
import { ShieldCheck, Clock, CreditCard, CheckCircle2, HelpCircle, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

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
    },
    {
      q: 'What do I need to complete before content production can officially start?',
      a: 'Before work begins, you must submit the intake questionnaire, share topic preferences, approve the initial content plan, assign a primary point of contact, and submit brand assets (logos, HEX/RGB colors, fonts). Plan Dependency: While basic tiers require simple brand guidelines, higher-tier plans with direct CMS publishing or multi-channel distribution also require platform access credentials during this phase.'
    },
    {
      q: 'When does official work commence once onboarding is complete?',
      a: 'Work officially begins on the first Monday following the completion of your onboarding requirements and receipt of your initial setup and retainer payments. Plan Dependency: This kick-off timeline applies universally across all monthly tiers, ensuring sprint cycles begin simultaneously regardless of plan level.'
    },
    {
      q: 'What is included in the one-time setup process?',
      a: 'The setup covers building your dedicated Google Drive architecture, integrating brand strategy, and configuring author profiles/SEO defaults. Plan Dependency: Lower-tier plans focus solely on content storage setups, whereas advanced plans expand setups to include CMS configuration and social channel scheduling platform integrations.'
    },
    {
      q: 'How are articles optimized for search engines and AI discovery?',
      a: 'Every article is optimized for both traditional Search Engine Optimization (SEO) and modern Generative Engine Optimization (GEO) to ensure maximum search visibility and AI answer-engine indexing. Plan Dependency: Core tiers focus on on-page keyword density and structure, while higher-tier plans include advanced meta-data formatting and schema-ready markup for CMS integration.'
    },
    {
      q: 'How is generative AI utilized in content creation?',
      a: 'Generative AI tools are used for initial drafting, which is then paired with expert human editing, fact-checking, proofreading, and brand alignment. Plan Dependency: Human-in-the-loop oversight applies to all tiers, but multi-channel plans leverage AI to expand long-form drafts into varied social media platform copy.'
    },
    {
      q: 'Is there a grace period if a recurring monthly payment fails?',
      a: 'If a payment is delayed beyond three (3) calendar days past your billing date, production and publishing are paused until balances are settled. Plan Dependency: For basic plans, this pauses draft creation; for full-service publishing plans, it also halts scheduled CMS uploads and social syndication.'
    },
    {
      q: 'What payment methods and currencies are accepted?',
      a: 'All fees are billed in United States Dollars (USD) and processed via electronic transfer primarily through Wise. Other mutually acceptable electronic payment methods may be used in some circumstances. Plan Dependency: Payment processing terms apply equally across all flat-rate monthly retainer tiers.'
    },
    {
      q: 'Who owns the final content and custom visual assets?',
      a: 'Upon full payment of your monthly invoice, all custom final copy and visual assets become your sole property. Plan Dependency: Ownership transfers fully whether you are on a content-only plan or a full distribution and publishing tier.'
    }
  ];

  // Show only first 5 FAQs when collapsed, all when expanded
  const displayedFaqs = showAllFaqs ? faqs : faqs.slice(0, 5);

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
            Everything you need to know about content creation workflow, guarantees, and onboarding terms.
          </p>
        </div>

        {/* FAQ Accordion - Full Width */}
        <div className="bg-[#1E293B] rounded p-6 border border-slate-700/50 space-y-4 shadow-xl">
          
          {/* FAQ Header with Toggle Button */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center space-x-2">
              <HelpCircle className="w-5 h-5 text-[#D4AF37] shrink-0" />
              <h3 className="text-base font-bold text-white uppercase tracking-wide">
                Frequently Asked Questions
              </h3>
            </div>
            <button
              onClick={() => setShowAllFaqs(!showAllFaqs)}
              className="px-4 py-2 bg-[#0F172A] hover:bg-slate-800 border border-[#D4AF37]/40 text-xs font-bold uppercase tracking-wider text-[#D4AF37] flex items-center space-x-2 transition-colors shrink-0 rounded"
            >
              <span>{showAllFaqs ? 'Show Less' : 'View All FAQs'}</span>
              {showAllFaqs ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {/* FAQ List */}
          <div className="space-y-3 pt-2">
            {displayedFaqs.map((faq, idx) => (
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

          {/* Show count of additional FAQs when collapsed */}
          {!showAllFaqs && faqs.length > 5 && (
            <div className="text-center pt-2 text-[10px] text-slate-500">
              +{faqs.length - 5} more questions — click "View All FAQs" to see them all
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
