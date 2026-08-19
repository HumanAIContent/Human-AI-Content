import React, { useState } from 'react';
import { X, FileText, CheckCircle2, ShieldCheck, Download, ExternalLink } from 'lucide-react';

interface AgreementModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AgreementModal: React.FC<AgreementModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'essential' | 'visuals' | 'social' | 'fullservice'>('fullservice');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      
      <div className="relative w-full max-w-4xl bg-[#0F172A] rounded border border-slate-700/50 shadow-2xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="bg-[#1E293B] p-5 border-b border-slate-700/50 flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded bg-[#0F172A] border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37]">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider">
                Transparent Monthly Client Agreements
              </div>
              <h3 className="text-sm font-extrabold text-white uppercase tracking-wide">
                Agreement Terms & Terms of Service
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded bg-[#0F172A] text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-700 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Package Agreement Tabs - ORDER CHANGED HERE */}
        <div className="bg-[#0F172A] p-2.5 border-b border-slate-700/50 flex items-center space-x-2 overflow-x-auto text-xs font-bold uppercase tracking-wider">
          <button
            onClick={() => setActiveTab('fullservice')}
            className={`px-3.5 py-1.5 rounded text-[11px] whitespace-nowrap transition-colors ${
              activeTab === 'fullservice' ? 'bg-[#D4AF37] text-[#0F172A]' : 'text-slate-300 hover:text-white bg-[#1E293B]/60'
            }`}
          >
            Full-Service All-Inclusive ($1,449/mo)
          </button>
          <button
            onClick={() => setActiveTab('social')}
            className={`px-3.5 py-1.5 rounded text-[11px] whitespace-nowrap transition-colors ${
              activeTab === 'social' ? 'bg-[#D4AF37] text-[#0F172A]' : 'text-slate-300 hover:text-white bg-[#1E293B]/60'
            }`}
          >
            Content + Visuals + Social ($999/mo)
          </button>
          <button
            onClick={() => setActiveTab('visuals')}
            className={`px-3.5 py-1.5 rounded text-[11px] whitespace-nowrap transition-colors ${
              activeTab === 'visuals' ? 'bg-[#D4AF37] text-[#0F172A]' : 'text-slate-300 hover:text-white bg-[#1E293B]/60'
            }`}
          >
            Content + Visual Assets ($750/mo)
          </button>
          <button
            onClick={() => setActiveTab('essential')}
            className={`px-3.5 py-1.5 rounded text-[11px] whitespace-nowrap transition-colors ${
              activeTab === 'essential' ? 'bg-[#D4AF37] text-[#0F172A]' : 'text-slate-300 hover:text-white bg-[#1E293B]/60'
            }`}
          >
            Content Essential ($450/mo)
          </button>
        </div>

        {/* Legal Text Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto text-slate-300 text-xs sm:text-sm leading-relaxed">
          
          <div className="bg-[#1E293B] p-4 rounded border border-slate-700/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <div className="text-white font-extrabold text-xs uppercase tracking-wider">
                MONTHLY CONTENT MANAGEMENT AGREEMENT SUMMARY
              </div>
              <div className="text-[11px] text-[#D4AF37] font-bold uppercase tracking-wider mt-0.5">
                {activeTab === 'essential' && 'Retainer: $450/mo | One-Time Setup: $50 USD'}
                {activeTab === 'visuals' && 'Retainer: $750/mo | One-Time Setup: $100 USD'}
                {activeTab === 'social' && 'Retainer: $999/mo | One-Time Setup: $250 USD'}
                {activeTab === 'fullservice' && 'Retainer: $1,449/mo | One-Time Setup: $350 USD'}
              </div>
            </div>
            <span className="px-2.5 py-1 bg-[#0F172A] text-emerald-400 border border-emerald-800/60 text-[10px] font-bold uppercase tracking-wider shrink-0">
              Month-to-Month
            </span>
          </div>

          {/* Clauses Breakdown */}
          <div className="space-y-4 text-xs leading-relaxed">
            <div className="space-y-1">
              <h4 className="text-white font-bold text-xs uppercase tracking-wide">1. Services & Deliverables</h4>
              <p className="text-slate-300">
                Contractor agrees to provide four (4) targeted, highly researched blog articles per month (1,500 to 2,500 words each). Each article includes topic strategy, keyword analysis, AI-assisted drafting paired with expert human editing, and dual Search Engine Optimization (SEO) & Generative Engine Optimization (GEO).
                {activeTab !== 'essential' && ' Includes custom Canva visual assets (featured images, blog graphics, infographics).'}
                {(activeTab === 'social' || activeTab === 'fullservice') && ' Includes 4 promotional social media posts published via CoSchedule across up to 3 channels (excluding X/Twitter and YouTube).'}
                {activeTab === 'fullservice' && ' Includes full WordPress draft staging, Yoast/AIOSEO metadata configuration, author profiles, and taxonomy tagging.'}
              </p>
            </div>

            <div className="space-y-1">
              <h4 className="text-white font-bold text-xs uppercase tracking-wide">2. Workflow & Revisions</h4>
              <p className="text-slate-300">
                All final written content and graphics are uploaded to a dedicated shared Google Drive folder.
                {activeTab === 'fullservice' ? ' Staged WordPress posts generate a draft preview link sent via email.' : ' Client is notified upon upload.'}
                Up to two (2) rounds of minor revisions are included per deliverable cycle if submitted within 3 business days.
              </p>
            </div>

            <div className="space-y-1">
              <h4 className="text-white font-bold text-xs uppercase tracking-wide">3. Client Approval & Social Safety</h4>
              <p className="text-slate-300">
                For social media and WordPress publishing, posts strictly NEVER go live without explicit client review authorization. Social posts do NOT receive passive approval; they pause until explicitly approved.
              </p>
            </div>

            <div className="space-y-1">
              <h4 className="text-white font-bold text-xs uppercase tracking-wide">4. Fees & Billing</h4>
              <p className="text-slate-300">
                Services are billed upfront on a monthly prepaid retainer basis in USD. No hidden per-word fees. Work commences on the Monday following onboarding completion and retainer settlement.
              </p>
            </div>

            <div className="space-y-1">
              <h4 className="text-white font-bold text-xs uppercase tracking-wide">5. Intellectual Property & Rights</h4>
              <p className="text-slate-300">
                Upon full payment of applicable monthly invoices, all custom copy and visuals created specifically for the Client become sole Client property (subject to stock media licenses).
              </p>
            </div>

            <div className="space-y-1">
              <h4 className="text-white font-bold text-xs uppercase tracking-wide">6. Term, Termination & Guarantees</h4>
              <p className="text-slate-300">
                Either party may terminate with seven (7) business days written notice prior to the next billing cycle. Month-to-month flexibility.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-700/50 flex flex-col sm:flex-row items-center justify-end gap-3 text-xs text-slate-400">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2 bg-[#D4AF37] hover:bg-[#C19A2E] text-[#0F172A] font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
            >
              Done Reading
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
