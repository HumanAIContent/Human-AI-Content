import React, { useState } from 'react';
import { PACKAGES } from '../data/packages';
import { NavPage, PackagePlan } from '../types';
import { Check, ArrowRight, Sparkles, HelpCircle, FileText, ChevronDown, ChevronUp } from 'lucide-react';

interface PricingSectionProps {
  onNavigate: (page: NavPage, selectedPackage?: string) => void;
  onOpenAgreements: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onNavigate, onOpenAgreements }) => {
  const [showMatrix, setShowMatrix] = useState(false);
  const [showFullServiceDetails, setShowFullServiceDetails] = useState(false);

  const toggleFullServiceDetails = () => {
    setShowFullServiceDetails(!showFullServiceDetails);
  };

  // Define the new taglines for each package
  const getTagline = (pkgId: string) => {
    switch (pkgId) {
      case 'essential':
        return 'High-Performance AI-Assisted Human-Edited SEO & GEO Articles—Delivered as Pure Text. Deeply researched, content crafted for brands and agencies that manage their own publishing. All articles are delivered polished and publication-ready for complete in-house control.';
      case 'visuals':
        return 'Streamline your content pipeline with deeply researched, human-edited blog articles designed for dual SEO/GEO indexing. Paired with custom Canva visuals, infographics, and data tables, all deliverables drop into your shared Google Drive workspace every month.';
      case 'social':
        return 'CoSchedule hands-off social media management, custom Canva graphic designs, and AI-assisted, human-edited SEO/GEO articles. All written content and visual assets are delivered to a shared Google Drive, and social posts strictly require explicit client approval.';
      default:
        return ''; // Full-service uses its own tagline from the data
    }
  };

  // Define custom plan names
  const getPlanName = (pkgId: string, originalName: string) => {
    switch (pkgId) {
      case 'essential':
        return 'Content Essential (Basic)';
      default:
        return originalName;
    }
  };

  // Define custom "Ideal for" text for each package
  const getIdealFor = (pkgId: string) => {
    switch (pkgId) {
      case 'essential':
        return 'Businesses needing research-backed, human-edited SEO/GEO  (Generative Engine Optimization) content delivered clean for seamless internal publishing.';
      case 'visuals':
        return 'Businesses needing human-edited SEO/GEO blog posts and custom branded graphics delivered ready for in-house digital execution by your team.';
      case 'social':
        return 'Businesses wanting hands-off social media scheduling with strict approvals (CoSchedule), custom graphics (Canva), & human-edited SEO/GEO articles.';
      case 'fullservice':
        return 'Businesses wanting complete, hands-off content execution, including SEO/GEO articles, graphics, WordPress staging, and social posting.';
      default:
        return '';
    }
  };

  return (
    <section id="packages" className="py-16 bg-[#0F172A] relative border-t border-slate-700/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37] flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            Monthly Retainer Pricing
          </span>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Content Management Plans
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
            All-inclusive monthly retainers with zero hidden fees, no per-word surprises, and no long-term lock-in contracts. Every plan includes a structured review and approval workflow—content never goes live without your explicit approval.
          </p>

          {/* Removed: MONTH-TO-MONTH FLEXIBILITY WITH NO LOCK-IN CONTRACTS */}
        </div>

        {/* 4 Package Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {PACKAGES.map((pkg) => {
            const isPopular = pkg.isPopular;
            const isFullService = pkg.id === 'fullservice';
            const isExpanded = showFullServiceDetails && isFullService;
            
            // Use custom tagline for first 3 packages, override full-service tagline
            let tagline;
            if (isFullService) {
              tagline = 'WordPress draft staging, CoSchedule social scheduling, custom Canva visuals, and AI-assisted, human-edited SEO/GEO articles are delivered monthly. Assets are archived in Google Drive, with site publishing strictly contingent on your direct pre-approval.';
            } else {
              tagline = getTagline(pkg.id);
            }
            
            // Use custom plan name for first 3 packages, keep original for full-service
            const planName = isFullService ? pkg.name : getPlanName(pkg.id, pkg.name);
            
            // Use custom "Ideal for" text for all packages
            const idealFor = getIdealFor(pkg.id);

            return (
              <div
                key={pkg.id}
                className={`relative rounded overflow-hidden ${
                  isPopular
                    ? 'bg-[#1E293B] border-2 border-[#D4AF37] shadow-xl'
                    : 'bg-[#1E293B] border-2 border-[#D4AF37] hover:border-[#D4AF37]/70'
                }`}
              >
                {/* Popular Badge Header */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-[#0F172A] px-3 py-0.5 text-[10px] font-extrabold uppercase tracking-widest shadow whitespace-nowrap z-10">
                    {pkg.badge}
                  </div>
                )}

                {/* Card Content using flex column for sections */}
                <div className="flex flex-col h-full">
                  
                  {/* SECTION 1: Plan Name & Tagline - Box with subtle background */}
                  <div className="p-5 pb-3 bg-[#0F172A]/50 border-b border-slate-700/30">
                    <h3 className="text-base font-bold text-[#D4AF37] uppercase tracking-wide text-center">
                      {planName}
                    </h3>
                    <p className="text-[11px] text-slate-300 mt-1 leading-relaxed text-center">
                      {tagline}
                    </p>
                  </div>

                  {/* SECTION 2: Pricing Display - Box with subtle background */}
                  <div className="px-5 py-3 bg-[#0F172A]/30 border-b border-slate-700/30">
                    <div className="flex items-baseline justify-center space-x-1.5">
                      <span className="text-2xl font-extrabold text-white">
                        ${pkg.monthlyRetainer.toLocaleString()}
                      </span>
                      <span className="text-[10px] font-semibold text-slate-400">USD / mo</span>
                    </div>
                    <div className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider text-center">
                      Setup: ${pkg.setupFee} USD
                    </div>
                  </div>

                  {/* SECTION 3: CTA Button */}
                  <div className="px-5 py-3 border-b border-slate-700/30">
                    <button
                      onClick={() => onNavigate('contact', pkg.id)}
                      className={`w-full py-2 px-4 font-bold text-[10px] uppercase tracking-wider transition-colors flex items-center justify-center space-x-1.5 ${
                        isPopular
                          ? 'bg-[#D4AF37] hover:bg-[#C19A2E] text-[#0F172A]'
                          : 'bg-slate-800 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-[#0F172A] border border-[#D4AF37]/30'
                      }`}
                    >
                      <span>Enquire Now</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>

                  {/* SECTION 4: Features - Box with subtle background */}
                  <div className="px-5 py-3 flex-1 flex flex-col bg-[#0F172A]/30">
                    <div className="text-[10px] font-bold text-slate-300 uppercase tracking-widest text-center border-b border-slate-700/30 pb-2">
                      Features Included
                    </div>
                    
                    {!isFullService && (
                      <ul className="space-y-1.5 text-[11px] text-slate-200 mt-3">
                        {pkg.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-2 leading-snug">
                            <Check className="w-3 h-3 text-[#D4AF37] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {isFullService && (
                      <>
                        <ul className="space-y-1.5 text-[11px] text-slate-200 mt-3">
                          {pkg.deliverables.slice(0, 4).map((item, idx) => (
                            <li key={idx} className="flex items-start space-x-2 leading-snug">
                              <Check className="w-3 h-3 text-[#D4AF37] shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        <button
                          onClick={toggleFullServiceDetails}
                          className="text-[10px] font-bold text-[#D4AF37] hover:text-[#C19A2E] transition-colors flex items-center space-x-1.5 mt-2 group justify-center"
                        >
                          <span>{isExpanded ? 'Show Less' : 'Show More'}</span>
                          {isExpanded ? (
                            <ChevronUp className="w-3.5 h-3.5" />
                          ) : (
                            <ChevronDown className="w-3.5 h-3.5" />
                          )}
                        </button>

                        <div className={`overflow-hidden transition-all duration-300 ${
                          isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                          <ul className="space-y-1.5 text-[11px] text-slate-200 pt-2">
                            {pkg.deliverables.slice(4).map((item, idx) => (
                              <li key={idx} className="flex items-start space-x-2 leading-snug">
                                <Check className="w-3 h-3 text-[#D4AF37] shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {!isExpanded && <div className="flex-1" />}
                      </>
                    )}
                  </div>

                  {/* SECTION 5: Footer - Always at bottom */}
                  <div className="p-2.5 bg-[#0F172A] border-t border-slate-700/50 text-[10px] text-slate-400 text-center">
                    <span className="font-bold text-slate-300">Ideal for: </span>
                    {idealFor}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Matrix Toggle Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between bg-[#1E293B] p-5 rounded border border-slate-700/50 mb-6 gap-4">
          <div>
            <h3 className="text-base font-bold text-white uppercase tracking-wide flex items-center space-x-2">
              <FileText className="w-4 h-4 text-[#D4AF37]" />
              <span>Feature Comparison Matrix</span>
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Compare article specs, Canva graphics, WordPress staging, and social media scheduling features.
            </p>
          </div>
          <button
            onClick={() => setShowMatrix(!showMatrix)}
            className="px-4 py-2 bg-[#0F172A] hover:bg-slate-800 border border-[#D4AF37]/40 text-xs font-bold uppercase tracking-wider text-[#D4AF37] flex items-center space-x-2 transition-colors shrink-0"
          >
            <span>{showMatrix ? 'Hide Comparison' : 'Show Comparison'}</span>
            {showMatrix ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {/* Comparison Matrix Table */}
        {showMatrix && (
          <div className="bg-[#1E293B] rounded border border-slate-700/50 overflow-x-auto shadow-xl">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-slate-700/50 bg-[#0F172A] text-[11px] text-slate-300 uppercase font-bold tracking-wider">
                  <th className="p-4 w-1/4">Feature / Deliverable</th>
                  <th className="p-4 text-center">Content Essential</th>
                  <th className="p-4 text-center">Content + Visuals</th>
                  <th className="p-4 text-center">Content + Visuals + Social</th>
                  <th className="p-4 text-center text-[#D4AF37]">Full-Service (All-In)</th>
                </tr>
              </thead>
              <tbody className="text-xs divide-y divide-slate-700/50 text-slate-300">
                
                <tr>
                  <td className="p-3.5 font-bold text-white uppercase text-[11px]">Monthly Retainer</td>
                  <td className="p-3.5 text-center font-bold">$450 USD / mo</td>
                  <td className="p-3.5 text-center font-bold">$750 USD / mo</td>
                  <td className="p-3.5 text-center font-bold">$999 USD / mo</td>
                  <td className="p-3.5 text-center font-bold text-[#D4AF37]">$1,449 USD / mo</td>
                </tr>

                <tr>
                  <td className="p-3.5 font-bold text-white uppercase text-[11px]">One-Time Setup Fee</td>
                  <td className="p-3.5 text-center">$50 USD</td>
                  <td className="p-3.5 text-center">$100 USD</td>
                  <td className="p-3.5 text-center">$250 USD</td>
                  <td className="p-3.5 text-center text-[#D4AF37] font-bold">$350 USD</td>
                </tr>

                <tr>
                  <td className="p-3.5 font-bold text-white uppercase text-[11px]">Blog Articles per Month</td>
                  <td className="p-3.5 text-center">4x (1,500 - 2,500w)</td>
                  <td className="p-3.5 text-center">4x (1,500 - 2,500w)</td>
                  <td className="p-3.5 text-center">4x (1,500 - 2,500w)</td>
                  <td className="p-3.5 text-center text-[#D4AF37] font-bold">4x (1,500 - 2,500w)</td>
                </tr>

                <tr>
                  <td className="p-3.5 font-bold text-white uppercase text-[11px]">Dual SEO & GEO Optimization</td>
                  <td className="p-3.5 text-center text-emerald-400 font-bold">✓ Included</td>
                  <td className="p-3.5 text-center text-emerald-400 font-bold">✓ Included</td>
                  <td className="p-3.5 text-center text-emerald-400 font-bold">✓ Included</td>
                  <td className="p-3.5 text-center text-emerald-400 font-bold">✓ Included</td>
                </tr>

                <tr>
                  <td className="p-3.5 font-bold text-white uppercase text-[11px]">Custom Canva Visual Assets</td>
                  <td className="p-3.5 text-center text-slate-500">—</td>
                  <td className="p-3.5 text-center text-emerald-400 font-bold">✓ Featured, Infographics, Charts, & Data Tables</td>
                  <td className="p-3.5 text-center text-emerald-400 font-bold">✓ Featured, Infographics, Charts, & Data Tables + Social Assets</td>
                  <td className="p-3.5 text-center text-emerald-400 font-bold">✓ Full Custom Suite</td>
                </tr>

                <tr>
                  <td className="p-3.5 font-bold text-white uppercase text-[11px]">WordPress Draft Staging</td>
                  <td className="p-3.5 text-center text-slate-500">—</td>
                  <td className="p-3.5 text-center text-slate-500">—</td>
                  <td className="p-3.5 text-center text-slate-500">—</td>
                  <td className="p-3.5 text-center text-[#D4AF37] font-bold">✓ Full Staging & Gutenberg</td>
                </tr>

                <tr>
                  <td className="p-3.5 font-bold text-white uppercase text-[11px]">On-Page Yoast / SEO Meta Setup</td>
                  <td className="p-3.5 text-center text-slate-500">—</td>
                  <td className="p-3.5 text-center text-slate-500">—</td>
                  <td className="p-3.5 text-center text-slate-500">—</td>
                  <td className="p-3.5 text-center text-[#D4AF37] font-bold">✓ Title, Meta & Keywords</td>
                </tr>

                <tr>
                  <td className="p-3.5 font-bold text-white uppercase text-[11px]">CoSchedule Social Management</td>
                  <td className="p-3.5 text-center text-slate-500">—</td>
                  <td className="p-3.5 text-center text-slate-500">—</td>
                  <td className="p-3.5 text-center text-emerald-400 font-bold">✓ 4x Posts (3 Channels)</td>
                  <td className="p-3.5 text-center text-emerald-400 font-bold">✓ 4x Posts (3 Channels)</td>
                </tr>

                <tr>
                  <td className="p-3.5 font-bold text-white uppercase text-[11px]">Google Drive Archive</td>
                  <td className="p-3.5 text-center text-emerald-400">✓ Drive Workspace</td>
                  <td className="p-3.5 text-center text-emerald-400">✓ Drive Workspace</td>
                  <td className="p-3.5 text-center text-emerald-400">✓ Drive Workspace</td>
                  <td className="p-3.5 text-center text-emerald-400">✓ Drive + WP Media Gallery</td>
                </tr>

                <tr>
                  <td className="p-3.5 font-bold text-white uppercase text-[11px]">Enquire Action</td>
                  <td className="p-3.5 text-center">
                    <button onClick={() => onNavigate('contact', 'essential')} className="px-3 py-1 bg-slate-800 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0F172A] font-bold text-[10px] uppercase border border-[#D4AF37]/30 transition-colors">Enquire</button>
                  </td>
                  <td className="p-3.5 text-center">
                    <button onClick={() => onNavigate('contact', 'visuals')} className="px-3 py-1 bg-slate-800 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0F172A] font-bold text-[10px] uppercase border border-[#D4AF37]/30 transition-colors">Enquire</button>
                  </td>
                  <td className="p-3.5 text-center">
                    <button onClick={() => onNavigate('contact', 'social')} className="px-3 py-1 bg-slate-800 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0F172A] font-bold text-[10px] uppercase border border-[#D4AF37]/30 transition-colors">Enquire</button>
                  </td>
                  <td className="p-3.5 text-center">
                    <button onClick={() => onNavigate('contact', 'fullservice')} className="px-3 py-1 bg-[#D4AF37] hover:bg-[#C19A2E] text-[#0F172A] font-bold text-[10px] uppercase transition-colors">Enquire</button>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        )}

      </div>
    </section>
  );
};
