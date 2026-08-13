import React, { useState } from 'react';
import { PACKAGES } from '../data/packages';
import { NavPage } from '../types';
import {
  Check,
  ArrowRight,
  Sparkles,
  FileText,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

interface PricingSectionProps {
  onNavigate: (page: NavPage, selectedPackage?: string) => void;
  onOpenAgreements: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onNavigate,
}) => {
  const [showMatrix, setShowMatrix] = useState(true);
  const [showFullServiceDetails, setShowFullServiceDetails] = useState(false);

  const toggleFullServiceDetails = () => {
    setShowFullServiceDetails((currentValue) => !currentValue);
  };

  return (
    <section
      id="packages"
      className="relative border-t border-slate-700/50 bg-[#0F172A] py-16"
    >
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl space-y-3 text-center">
          <span className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
            <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />
            Monthly Retainer Pricing
          </span>

          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Content Management Plans
          </h2>

          <p className="text-sm font-normal leading-relaxed text-slate-300 sm:text-base">
            No hidden per-word fees or software subscription surcharges.
            Prepaid monthly retainers with zero long-term lock-ins. All plans
            lead directly to a client review &amp; approval workflow.
          </p>

          <div className="flex items-center justify-center space-x-4 pt-1 text-xs font-bold uppercase tracking-wider text-slate-400">
            <span className="flex items-center space-x-1">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span>
                Month-to-month flexibility with no lock-in contracts
              </span>
            </span>
          </div>
        </div>

        {/* Package Cards Grid */}
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PACKAGES.map((pkg) => {
            const isPopular = pkg.isPopular;
            const isFullService = pkg.id === 'fullservice';
            const isExpanded = showFullServiceDetails && isFullService;

            return (
              <div
                key={pkg.id}
                className={`relative flex h-full flex-col rounded ${
                  isPopular
                    ? 'border-2 border-l-4 border-[#D4AF37] bg-[#1E293B] shadow-xl'
                    : 'border border-slate-700/50 bg-[#1E293B] hover:border-[#D4AF37]/50'
                }`}
              >
                {/* Popular Badge Header */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#D4AF37] px-3 py-0.5 text-[10px] font-extrabold uppercase tracking-widest text-[#0F172A] shadow">
                    {pkg.badge}
                  </div>
                )}

                {/* Plan Name and Tagline */}
                {/* Fixed height keeps all price borders aligned. */}
                <div className="h-[88px] p-5 pb-3">
                  <h3 className="text-base font-bold uppercase tracking-wide text-[#D4AF37]">
                    {pkg.name}
                  </h3>

                  <p className="mt-1 min-h-[32px] text-[11px] leading-relaxed text-slate-300">
                    {pkg.tagline}
                  </p>
                </div>

                {/* Pricing Display */}
                {/* Fixed height keeps the top and bottom borders aligned. */}
                <div className="h-[70px] border-b border-t border-slate-700/50 px-5 py-2.5">
                  <div className="flex items-baseline space-x-1.5">
                    <span className="text-2xl font-extrabold text-white">
                      ${pkg.monthlyRetainer.toLocaleString()}
                    </span>

                    <span className="text-[10px] font-semibold text-slate-400">
                      USD / mo
                    </span>
                  </div>

                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF37]">
                    Setup: ${pkg.setupFee} USD
                  </div>
                </div>

                {/* CTA Button */}
                <div className="px-5 py-2.5">
                  <button
                    onClick={() => onNavigate('contact', pkg.id)}
                    className={`flex w-full items-center justify-center space-x-1.5 px-4 py-2 text-[10px] font-bold uppercase tracking-wider transition-colors ${
                      isPopular
                        ? 'bg-[#D4AF37] text-[#0F172A] hover:bg-[#C19A2E]'
                        : 'border border-[#D4AF37]/30 bg-slate-800 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0F172A]'
                    }`}
                  >
                    <span>Enquire Now</span>
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>

                {/* Features Section */}
                <div className="flex flex-1 flex-col px-5 py-2.5">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate-300">
                    Includes:
                  </div>

                  {!isFullService && (
                    <ul className="mt-2 space-y-1.5 text-[11px] text-slate-200">
                      {pkg.deliverables.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start space-x-2 leading-snug"
                        >
                          <Check className="mt-0.5 h-3 w-3 shrink-0 text-[#D4AF37]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {isFullService && (
                    <>
                      <ul className="mt-2 space-y-1.5 text-[11px] text-slate-200">
                        {pkg.deliverables.slice(0, 4).map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start space-x-2 leading-snug"
                          >
                            <Check className="mt-0.5 h-3 w-3 shrink-0 text-[#D4AF37]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <button
                        onClick={toggleFullServiceDetails}
                        className="group mt-2 flex items-center space-x-1.5 text-[10px] font-bold text-[#D4AF37] transition-colors hover:text-[#C19A2E]"
                      >
                        <span>{isExpanded ? 'Show Less' : 'Show More'}</span>

                        {isExpanded ? (
                          <ChevronUp className="h-3.5 w-3.5" />
                        ) : (
                          <ChevronDown className="h-3.5 w-3.5" />
                        )}
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isExpanded
                            ? 'max-h-[500px] opacity-100'
                            : 'max-h-0 opacity-0'
                        }`}
                      >
                        <ul className="space-y-1.5 pt-2 text-[11px] text-slate-200">
                          {pkg.deliverables.slice(4).map((item, idx) => (
                            <li
                              key={idx}
                              className="flex items-start space-x-2 leading-snug"
                            >
                              <Check className="mt-0.5 h-3 w-3 shrink-0 text-[#D4AF37]" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {!isExpanded && <div className="flex-1" />}
                    </>
                  )}
                </div>

                {/* Footer */}
                <div className="border-t border-slate-700/50 bg-[#0F172A] p-2.5 text-[10px] text-slate-400">
                  <span className="font-bold text-slate-300">Ideal for: </span>
                  {pkg.idealFor}
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Matrix Toggle Button */}
        <div className="mb-6 flex flex-col items-center justify-between gap-4 rounded border border-slate-700/50 bg-[#1E293B] p-5 sm:flex-row">
          <div>
            <h3 className="flex items-center space-x-2 text-base font-bold uppercase tracking-wide text-white">
              <FileText className="h-4 w-4 text-[#D4AF37]" />
              <span>Feature Comparison Matrix</span>
            </h3>

            <p className="mt-0.5 text-xs text-slate-400">
              Compare article specs, Canva graphics, WordPress staging, and
              social media scheduling features.
            </p>
          </div>

          <button
            onClick={() => setShowMatrix((currentValue) => !currentValue)}
            className="flex shrink-0 items-center space-x-2 border border-[#D4AF37]/40 bg-[#0F172A] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#D4AF37] transition-colors hover:bg-slate-800"
          >
            <span>{showMatrix ? 'Hide Comparison' : 'Show Comparison'}</span>

            {showMatrix ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </button>
        </div>

        {/* Comparison Matrix Table */}
        {showMatrix && (
          <div className="overflow-x-auto rounded border border-slate-700/50 bg-[#1E293B] shadow-xl">
            <table className="w-full min-w-[700px] border-collapse text-left">
              <thead>
                <tr className="border-b border-slate-700/50 bg-[#0F172A] text-[11px] font-bold uppercase tracking-wider text-slate-300">
                  <th className="w-1/4 p-4">Feature / Deliverable</th>
                  <th className="p-4 text-center">Content Essential</th>
                  <th className="p-4 text-center">Content + Visuals</th>
                  <th className="p-4 text-center">
                    Content + Visuals + Social
                  </th>
                  <th className="p-4 text-center text-[#D4AF37]">
                    Full-Service (All-In)
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-700/50 text-xs text-slate-300">
                <tr>
                  <td className="p-3.5 text-[11px] font-bold uppercase text-white">
                    Monthly Retainer
                  </td>
                  <td className="p-3.5 text-center font-bold">
                    $450 USD / mo
                  </td>
                  <td className="p-3.5 text-center font-bold">
                    $750 USD / mo
                  </td>
                  <td className="p-3.5 text-center font-bold">
                    $999 USD / mo
                  </td>
                  <td className="p-3.5 text-center font-bold text-[#D4AF37]">
                    $1,449 USD / mo
                  </td>
                </tr>

                <tr>
                  <td className="p-3.5 text-[11px] font-bold uppercase text-white">
                    One-Time Setup Fee
                  </td>
                  <td className="p-3.5 text-center">$50 USD</td>
                  <td className="p-3.5 text-center">$100 USD</td>
                  <td className="p-3.5 text-center">$250 USD</td>
                  <td className="p-3.5 text-center font-bold text-[#D4AF37]">
                    $350 USD
                  </td>
                </tr>

                <tr>
                  <td className="p-3.5 text-[11px] font-bold uppercase text-white">
                    Blog Articles per Month
                  </td>
                  <td className="p-3.5 text-center">4x (1,500 - 2,500w)</td>
                  <td className="p-3.5 text-center">4x (1,500 - 2,500w)</td>
                  <td className="p-3.5 text-center">4x (1,500 - 2,500w)</td>
                  <td className="p-3.5 text-center font-bold text-[#D4AF37]">
                    4x (1,500 - 2,500w)
                  </td>
                </tr>

                <tr>
                  <td className="p-3.5 text-[11px] font-bold uppercase text-white">
                    Dual SEO &amp; GEO Optimization
                  </td>
                  <td className="p-3.5 text-center font-bold text-emerald-400">
                    ✓ Included
                  </td>
                  <td className="p-3.5 text-center font-bold text-emerald-400">
                    ✓ Included
                  </td>
                  <td className="p-3.5 text-center font-bold text-emerald-400">
                    ✓ Included
                  </td>
                  <td className="p-3.5 text-center font-bold text-emerald-400">
                    ✓ Included
                  </td>
                </tr>

                <tr>
                  <td className="p-3.5 text-[11px] font-bold uppercase text-white">
                    Custom Canva Visual Assets
                  </td>
                  <td className="p-3.5 text-center text-slate-500">—</td>
                  <td className="p-3.5 text-center font-bold text-emerald-400">
                    ✓ Featured, Infographics, Charts, &amp; Data Tables
                  </td>
                  <td className="p-3.5 text-center font-bold text-emerald-400">
                    ✓ Featured, Infographics, Charts, &amp; Data Tables +
                    Social Assets
                  </td>
                  <td className="p-3.5 text-center font-bold text-emerald-400">
                    ✓ Full Custom Suite
                  </td>
                </tr>

                <tr>
                  <td className="p-3.5 text-[11px] font-bold uppercase text-white">
                    WordPress Draft Staging
                  </td>
                  <td className="p-3.5 text-center text-slate-500">—</td>
                  <td className="p-3.5 text-center text-slate-500">—</td>
                  <td className="p-3.5 text-center text-slate-500">—</td>
                  <td className="p-3.5 text-center font-bold text-[#D4AF37]">
                    ✓ Full Staging &amp; Gutenberg
                  </td>
                </tr>

                <tr>
                  <td className="p-3.5 text-[11px] font-bold uppercase text-white">
                    On-Page Yoast / SEO Meta Setup
                  </td>
                  <td className="p-3.5 text-center text-slate-500">—</td>
                  <td className="p-3.5 text-center text-slate-500">—</td>
                  <td className="p-3.5 text-center text-slate-500">—</td>
                  <td className="p-3.5 text-center font-bold text-[#D4AF37]">
                    ✓ Title, Meta &amp; Keywords
                  </td>
                </tr>

                <tr>
                  <td className="p-3.5 text-[11px] font-bold uppercase text-white">
                    CoSchedule Social Management
                  </td>
                  <td className="p-3.5 text-center text-slate-500">—</td>
                  <td className="p-3.5 text-center text-slate-500">—</td>
                  <td className="p-3.5 text-center font-bold text-emerald-400">
                    ✓ 4x Posts (3 Channels)
                  </td>
                  <td className="p-3.5 text-center font-bold text-emerald-400">
                    ✓ 4x Posts (3 Channels)
                  </td>
                </tr>

                <tr>
                  <td className="p-3.5 text-[11px] font-bold uppercase text-white">
                    Google Drive Archive
                  </td>
                  <td className="p-3.5 text-center text-emerald-400">
                    ✓ Drive Workspace
                  </td>
                  <td className="p-3.5 text-center text-emerald-400">
                    ✓ Drive Workspace
                  </td>
                  <td className="p-3.5 text-center text-emerald-400">
                    ✓ Drive Workspace
                  </td>
                  <td className="p-3.5 text-center text-emerald-400">
                    ✓ Drive + WP Media Gallery
                  </td>
                </tr>

                <tr>
                  <td className="p-3.5 text-[11px] font-bold uppercase text-white">
                    Enquire Action
                  </td>

                  <td className="p-3.5 text-center">
                    <button
                      onClick={() => onNavigate('contact', 'essential')}
                      className="border border-[#D4AF37]/30 bg-slate-800 px-3 py-1 text-[10px] font-bold uppercase text-[#D4AF37] transition-colors hover:bg-[#D4AF37] hover:text-[#0F172A]"
                    >
                      Enquire
                    </button>
                  </td>

                  <td className="p-3.5 text-center">
                    <button
                      onClick={() => onNavigate('contact', 'visuals')}
                      className="border border-[#D4AF37]/30 bg-slate-800 px-3 py-1 text-[10px] font-bold uppercase text-[#D4AF37] transition-colors hover:bg-[#D4AF37] hover:text-[#0F172A]"
                    >
                      Enquire
                    </button>
                  </td>

                  <td className="p-3.5 text-center">
                    <button
                      onClick={() => onNavigate('contact', 'social')}
                      className="border border-[#D4AF37]/30 bg-slate-800 px-3 py-1 text-[10px] font-bold uppercase text-[#D4AF37] transition-colors hover:bg-[#D4AF37] hover:text-[#0F172A]"
                    >
                      Enquire
                    </button>
                  </td>

                  <td className="p-3.5 text-center">
                    <button
                      onClick={() => onNavigate('contact', 'fullservice')}
                      className="bg-[#D4AF37] px-3 py-1 text-[10px] font-bold uppercase text-[#0F172A] transition-colors hover:bg-[#C19A2E]"
                    >
                      Enquire
                    </button>
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
