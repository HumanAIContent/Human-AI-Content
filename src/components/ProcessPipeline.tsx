import React from 'react';
import { Layers, Search, Palette, Globe, MailCheck, Share2, Check, ArrowRight } from 'lucide-react';

export const ProcessPipeline: React.FC = () => {
  return (
    <section className="py-16 bg-[#0F172A] relative border-t border-slate-700/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37] flex items-center justify-center gap-2">
            <Layers className="w-3.5 h-3.5 text-[#D4AF37]" />
            Monthly Deliverable Workflow
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Your Month-by-Month Content Workflow
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            From initial content strategy to automated WordPress & CoSchedule publishing, every deliverable follows a predictable, battle-tested pipeline.
          </p>
        </div>

        {/* 5-Step Pipeline Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          
          {/* Step 1 */}
          <div className="bg-[#1E293B] rounded p-5 border border-slate-700/50 relative space-y-3 flex flex-col justify-between shadow-lg">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded bg-[#0F172A] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                <Search className="w-4 h-4" />
              </div>
              <div className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest">STAGE 01</div>
              <h3 className="text-white font-bold text-sm uppercase tracking-wide">Content Ideas, Strategy & Research</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Topic generation, keyword analysis, GEO answer-engine alignment, and AI-assisted drafting (1,500–2,500 words).
              </p>
            </div>
            <div className="pt-2 border-t border-slate-700/50 text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Expert Human Editing
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-[#1E293B] rounded p-5 border border-slate-700/50 relative space-y-3 flex flex-col justify-between shadow-lg">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded bg-[#0F172A] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                <Palette className="w-4 h-4" />
              </div>
              <div className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest">STAGE 02</div>
              <h3 className="text-white font-bold text-sm uppercase tracking-wide">Visual Asset Design</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
               Custom-branded Canva graphics, including infographics, charts, data tables, social media-ready formats, and article visuals.
              </p>
            </div>
            <div className="pt-2 border-t border-slate-700/50 text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Uploaded to Drive
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-[#1E293B] rounded p-5 border border-slate-700/50 relative space-y-3 flex flex-col justify-between shadow-lg">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded bg-[#0F172A] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                <Globe className="w-4 h-4" />
              </div>
              <div className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest">STAGE 03</div>
              <h3 className="text-white font-bold text-sm uppercase tracking-wide">WordPress Staging</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Articles drafted in WordPress with Yoast/AIOSEO fully configured—focus keywords, meta titles, and descriptions. Published seamlessly on your approval.
              </p>
            </div>
            <div className="pt-2 border-t border-slate-700/50 text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Draft Preview Link Created
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-[#1E293B] rounded p-5 border-l-4 border-l-[#D4AF37] border-y border-r border-slate-700/50 relative space-y-3 flex flex-col justify-between shadow-lg">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded bg-[#0F172A] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                <MailCheck className="w-4 h-4" />
              </div>
              <div className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest">STAGE 04</div>
              <h3 className="text-white font-bold text-sm uppercase tracking-wide">Client Review & Approval</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Preview links for both WordPress drafts and CoSchedule social posts delivered via email. Approve or make changes with a single action. Nothing goes out without your approval.
              </p>
            </div>
            <div className="pt-2 border-t border-slate-700/50 text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Guaranteed Client Control
            </div>
          </div>

          {/* Step 5 */}
          <div className="bg-[#1E293B] rounded p-5 border border-slate-700/50 relative space-y-3 flex flex-col justify-between shadow-lg">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded bg-[#0F172A] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                <Share2 className="w-4 h-4" />
              </div>
              <div className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest">STAGE 05</div>
              <h3 className="text-white font-bold text-sm uppercase tracking-wide">Automated Launch</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Once approved, your article goes live on your WordPress site, and shortly after, up to 3 social channels receive scheduled posts via CoSchedule. Everything is published and promoted for you—no additional work on your end.
              </p>
            </div>
            <div className="pt-2 border-t border-slate-700/50 text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Zero Technical Overhead
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
