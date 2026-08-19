import React from 'react';
import { NavPage, RecentSite } from '../types';
import { HeroSection } from '../components/HeroSection';
import { RecentSitesSection } from '../components/RecentSitesSection';
import { PricingSection } from '../components/PricingSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FaqSection } from '../components/FaqSection';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: NavPage, selectedPackage?: string) => void;
  onOpenSampleArticle: (site?: RecentSite | null) => void;
  onOpenAgreements: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenSampleArticle,
  onOpenAgreements
}) => {
  return (
    <div className="space-y-0">
      
      {/* 1. Content Creation Growth-Engine (Hero Section with Manager Photo & 3 Key Value Boxes) */}
      <HeroSection
        onNavigate={onNavigate}
        onOpenSampleArticle={() => onOpenSampleArticle(null)}
      />

      {/* 2 & 3. Monthly Retainer Pricing & Feature Comparison Matrix */}
      <PricingSection
        onNavigate={onNavigate}
        onOpenAgreements={onOpenAgreements}
      />

      {/* How Getting Started Works - ADDED AFTER PRICING SECTION */}
      <div className="border-t border-slate-700/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-[#1E293B] rounded p-6 sm:p-10 border border-slate-700/50 space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-1">
              <h2 className="text-2xl font-extrabold text-white tracking-tight">
                How Getting Started Works
              </h2>
              <p className="text-xs text-slate-300">
                Four simple steps from agreement signing to live content publishing. *Setup details vary by package.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              {/* STEP 1 - UPDATED TEXT */}
              <div className="bg-[#0F172A] p-4 rounded border border-slate-800 relative transition-all duration-300 space-y-1.5">
                <div className="absolute left-0 top-0 h-full w-1 bg-[#D4AF37] rounded-l"></div>
                <div className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider pl-2">STEP 1</div>
                <h4 className="text-white font-bold text-xs uppercase tracking-wide pl-2">Setup & Access</h4>
                <p className="text-xs text-slate-400 leading-relaxed pl-2">
                  Complete the agreement. Pay the setup fee, fill out the onboarding questionnaire, & grant access. Package setup varies: WordPress credentials, CoSchedule connections, brand assets, & G-Drive setup.
                </p>
              </div>

              {/* STEP 2 */}
              <div className="bg-[#0F172A] p-4 rounded border border-slate-800 relative transition-all duration-300 space-y-1.5">
                <div className="absolute left-0 top-0 h-full w-1 bg-[#D4AF37] rounded-l"></div>
                <div className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider pl-2">STEP 2</div>
                <h4 className="text-white font-bold text-xs uppercase tracking-wide pl-2">Strategy Alignment</h4>
                <p className="text-xs text-slate-400 leading-relaxed pl-2">
                  I research your business & its niche, combine your topic suggestions with keyword research to build an SEO & GEO strategy. Production starts the Monday after the initial monthly retainer payment.
                </p>
              </div>

              {/* STEP 3 */}
              <div className="bg-[#0F172A] p-4 rounded border border-slate-800 relative transition-all duration-300 space-y-1.5">
                <div className="absolute left-0 top-0 h-full w-1 bg-[#D4AF37] rounded-l"></div>
                <div className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider pl-2">STEP 3</div>
                <h4 className="text-white font-bold text-xs uppercase tracking-wide pl-2">Drafting & Staging</h4>
                <p className="text-xs text-slate-400 leading-relaxed pl-2">
                  I pair AI-drafted articles with expert human editing & Canva graphics, staging ready-to-review drafts in WordPress or Google Drive while building your promotional social media campaign inside CoSchedule.
                </p>
              </div>

              {/* STEP 4 */}
              <div className="bg-[#0F172A] p-4 rounded border border-slate-800 relative transition-all duration-300 space-y-1.5">
                <div className="absolute left-0 top-0 h-full w-1 bg-[#D4AF37] rounded-l"></div>
                <div className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider pl-2">STEP 4</div>
                <h4 className="text-white font-bold text-xs uppercase tracking-wide pl-2">1-Click Approval</h4>
                <p className="text-xs text-slate-400 leading-relaxed pl-2">
                  You review staged Article drafts in either Google Drive or WordPress, then CoSchedule social posts. Request up to two revision rounds free & then approve. Nothing ever live without your approval.
                </p>
              </div>

            </div>

            <div className="text-center pt-2">
              <button
                onClick={() => onNavigate('contact', 'trial')}
                className="bg-[#D4AF37] hover:bg-[#C19A2E] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#0F172A] transition-colors inline-flex items-center space-x-2 shadow-sm"
              >
                <span>Enquire Today or Request A Paid Trial Article</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* 4. Client Feedback & Case Results (Testimonials & Global Brands) */}
      <TestimonialsSection />

      {/* 5. Questions & Guarantees (FAQs & Onboarding SLA) */}
      <FaqSection id="faq" />

      {/* 6. Showcase Portfolio • Live Client Sites (Featured Work) */}
      <RecentSitesSection
        onSelectSite={(site) => onOpenSampleArticle(site)}
      />

      {/* 7. Prefer to Verify Quality First? (Trial Banner CTA) */}
      <section className="py-20 bg-[#0B132B] relative border-t border-[#1E2845]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#151D33] via-[#1E2845] to-[#151D33] rounded-3xl p-8 sm:p-12 border border-[#D4AF37]/40 shadow-2xl relative overflow-hidden text-center space-y-6">
            
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#0B132B] border border-[#D4AF37]/40 text-xs font-semibold text-[#F3D073]">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>Low-Risk Start Option</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white font-serif tracking-wide">
              Prefer to Verify Quality First?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Experience the content creation workflow firsthand. Request writing samples or book a single paid trial article before committing to a monthly retainer.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('contact', 'trial')}
                className="px-8 py-4 rounded-xl font-bold text-base gold-bg-gradient gold-bg-gradient-hover text-[#0B132B] shadow-xl flex items-center space-x-2"
              >
                <span>Enquire About A Paid Trial Article</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-4 rounded-xl font-semibold text-base text-slate-200 bg-[#0B132B] hover:bg-[#151D33] border border-[#1E2845] hover:border-[#D4AF37]/50 transition-all flex items-center space-x-2"
              >
                <span>Enquire About Monthly Retainer</span>
              </button>
            </div>

            <p className="text-xs text-slate-400 pt-2 font-mono">
              No obligation • Direct access to your content creation Manager.
            </p>

          </div>
        </div>
      </section>

    </div>
  );
};
