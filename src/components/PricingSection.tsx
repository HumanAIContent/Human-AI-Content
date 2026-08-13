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
            No hidden per-word fees or software subscription surcharges. Prepaid monthly retainers with zero long-term lock-ins. All plans lead directly to a client review & approval workflow.
          </p>

          <div className="pt-1 flex items-center justify-center space-x-4 text-xs font-bold uppercase tracking-wider text-slate-400">
            <span className="flex items-center space-x-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>MONTH-TO-MONTH FLEXIBILITY WITH NO LOCK-IN CONTRACTS</span>
            </span>
          </div>
        </div>

        {/* 4 Package Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-12">
          {PACKAGES.map((pkg) => {
            const isPopular = pkg.isPopular;
            const isFullService = pkg.id === 'fullservice';
            const isExpanded = showFullServiceDetails && isFullService;

            return (
              <div
                key={pkg.id}
                className={`relative rounded flex flex-col transition-all duration-300 ${
                  isPopular
                    ? 'bg-[#1E293B] border-2 border-[#D4AF37] shadow-xl border-l-4'
                    : 'bg-[#1E293B] border border-slate-700/50 hover:border-[#D4AF37]/50'
                }`}
              >
                {/* Popular Badge Header */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-[#0F172A] px-3 py-0.5 text-[10px] font-extrabold uppercase tracking-widest shadow whitespace-nowrap">
                    {pkg.badge}
                  </div>
                )}

                <div className="p-6 space-y-5 flex-1 flex flex-col">
                  
                  {/* Fixed-height container for Plan Name & Tagline so price lines align evenly */}
                  <div className="flex flex-col justify-between min-h-[85px]">
                    <h3 className="text-lg font-bold text-[#D4AF37] uppercase tracking-wide">{pkg.name}</h3>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Pricing Display */}
                  <div className="border-t border-b border-slate-700/50 py-3 space-y-1">
                    <div className="flex items-baseline space-x-1.5">
                      <span className="text-3xl font-extrabold text-white">
                        ${pkg.monthlyRetainer.toLocaleString()}
                      </span>
                      <span className="text-xs font-semibold text-slate-400">USD / mo</span>
                    </div>
                    <div className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-wider">
                      One-Time Setup Fee: ${pkg.setupFee} USD
                    </div>
                  </div>

                  {/* CTA Button: Enquire Now */}
                  <div>
                    <button
                      onClick={() => onNavigate('contact', pkg.id)}
                      className={`w-full py-2.5 px-4 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center space-x-1.5 ${
                        isPopular
                          ? 'bg-[#D4AF37] hover:bg-[#C19A2E] text-[#0F172A]'
                          : 'bg-slate-800 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-[#0F172A] border border-[#D4AF37]/30'
                      }`}
                    >
                      <span>Enquire Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Core Features Included */}
                  <div className="space-y-2.5 pt-1 flex-1 flex flex-col">
                    <div className="text-[11px] font-bold text-slate-300 uppercase tracking-widest">
                      Includes:
                    </div>
                    
                    {/* Show all deliverables for packages 1-3 */}
                    {!isFullService && (
                      <ul className="space-y-2 text-xs text-slate-200">
                        {pkg.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-2 leading-snug">
                            <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Full-Service package with collapsible details */}
                    {isFullService && (
                      <>
                        {/* Show first 4 items always visible */}
                        <ul className="space-y-2 text-xs text-slate-200">
                          {pkg.deliverables.slice(0, 4).map((item, idx) => (
                            <li key={idx} className="flex items-start space-x-2 leading-snug">
                              <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        {/* "Show More" trigger */}
                        <button
                          onClick={toggleFullServiceDetails}
                          className="text-[11px] font-bold text-[#D4AF37] hover:text-[#C19A2E] transition-colors flex items-center space-x-1.5 mt-1 group"
                        >
                          <span>{isExpanded ? 'Show Less' : 'Show More'}</span>
                          {isExpanded ? (
                            <ChevronUp className="w-3.5 h-3.5" />
                          ) : (
                            <ChevronDown className="w-3.5 h-3.5" />
                          )}
                        </button>

                        {/* Collapsible remaining items */}
                        <div className={`overflow-hidden transition-all duration-300 ${
                          isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                          <ul className="space-y-2 text-xs text-slate-200 pt-2">
                            {pkg.deliverables.slice(4).map((item, idx) => (
                              <li key={idx} className="flex items-start space-x-2 leading-snug">
                                <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Spacer to maintain card height when collapsed */}
                        {!isExpanded && <div className="flex-1" />}
                      </>
                    )}
                  </div>

                </div>

                {/* Footer Info */}
                <div className="p-3 bg-[#0F172A] border-t border-slate-700/50 text-[11px] text-slate-400">
                  <span className="font-bold text-slate-300">Ideal for: </span>
                  {pkg.idealFor}
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
