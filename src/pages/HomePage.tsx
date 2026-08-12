import React from 'react';
import { NavPage, RecentSite } from '../types';
import { HeroSection } from '../components/HeroSection';
import { RecentSitesSection } from '../components/RecentSitesSection';
import { PricingSection } from '../components/PricingSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { ProcessPipeline } from '../components/ProcessPipeline';
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
      
      {/* 1. Hero Section (includes top section for picture of male strategist) */}
      <HeroSection
        onNavigate={onNavigate}
        onOpenSampleArticle={() => onOpenSampleArticle(null)}
      />

      {/* 2. Process Pipeline (5-step deliverable pipeline) */}
      <ProcessPipeline />

      {/* 3. Recent Client Sites (List 8 sites) */}
      <RecentSitesSection
        onSelectSite={(site) => onOpenSampleArticle(site)}
      />

      {/* 4. Packages & Pricing (4 agreement plans + comparison matrix) */}
      <PricingSection
        onNavigate={onNavigate}
        onOpenAgreements={onOpenAgreements}
      />

      {/* 5. Mock Testimonials (3 testimonials with pictures) */}
      <TestimonialsSection />

      {/* 6. FAQs & Onboarding SLA & Guarantee */}
      <FaqSection />

      {/* 7. Trial Article / CTA Banner */}
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
              No obligation • Direct access to your content creation Manager
            </p>

          </div>
        </div>
      </section>

    </div>
  );
};
