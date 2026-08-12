import React from 'react';
import { SAMPLE_ARTICLE } from '../data/sampleArticles';
import { RecentSite } from '../types';
import { X, Cpu, CheckCircle2, FileText, Share2, Eye, Sparkles } from 'lucide-react';

interface SampleArticleModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedSite?: RecentSite | null;
}

export const SampleArticleModal: React.FC<SampleArticleModalProps> = ({ isOpen, onClose, selectedSite }) => {
  if (!isOpen) return null;

  const article = SAMPLE_ARTICLE;
  const siteName = selectedSite ? selectedSite.name : article.siteName;
  const title = selectedSite ? selectedSite.sampleArticleTitle : article.title;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      
      <div className="relative w-full max-w-4xl bg-[#0F172A] rounded border border-slate-700/50 shadow-2xl overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="bg-[#1E293B] p-5 border-b border-slate-700/50 flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded bg-[#0F172A] border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37]">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider">
                Sample Article & Staging Preview • {siteName}
              </div>
              <h3 className="text-sm font-extrabold text-white tracking-wide truncate max-w-md uppercase">
                {title}
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

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
          
          {/* Yoast SEO On-Page Meta Staging Box */}
          <div className="bg-[#1E293B] p-5 rounded border border-slate-700/50 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>WordPress Staging Preview (Yoast SEO / Gutenberg)</span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-[#0F172A] px-2 py-0.5 rounded border border-emerald-800/60">
                SEO Score: Good (Green)
              </span>
            </div>

            <div className="bg-[#0F172A] p-3.5 rounded border border-slate-800 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <div className="text-blue-400 font-bold text-xs hover:underline cursor-pointer">
                  {article.metaTitle}
                </div>
                <a
                  href="https://tokyophysicaltherapy.com/benefits-of-pilates-for-physical-therapy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded bg-[#D4AF37] hover:bg-[#C19A2E] text-[#0F172A] font-extrabold text-[10px] uppercase tracking-wider inline-flex items-center space-x-1"
                >
                  <span>View Live Sample Article</span>
                </a>
              </div>
              <div className="text-emerald-500 font-mono text-[10px]">
                https://tokyophysicaltherapy.com/benefits-of-pilates-for-physical-therapy/
              </div>
              <p className="text-slate-300 leading-relaxed text-xs">
                {article.metaDescription}
              </p>
            </div>

            {/* Target Keywords Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
              <span className="text-slate-400 text-[10px] uppercase font-bold">Focus Keywords:</span>
              {article.targetKeywords.map((kw, idx) => (
                <span key={idx} className="px-2 py-0.5 bg-[#0F172A] text-[#D4AF37] border border-slate-700 text-[10px] uppercase font-semibold">
                  {kw}
                </span>
              ))}
            </div>
          </div>

          {/* GEO AI Engine Citation Box */}
          <div className="bg-[#1E293B] p-4 rounded border border-[#D4AF37]/40 space-y-2">
            <div className="flex items-center space-x-2 text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider">
              <Cpu className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Generative Engine Citation Snippet (ChatGPT & Gemini Indexing)</span>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed italic bg-[#0F172A] p-3 rounded border border-slate-800">
              "{selectedSite ? selectedSite.sampleArticleExcerpt : article.geoAIAnswerSnippet}"
            </p>
          </div>

          {/* Article Full Text Body */}
          <div className="space-y-6 text-slate-200 text-xs sm:text-sm leading-relaxed">
            {article.sections.map((sec, idx) => (
              <div key={idx} className="space-y-2.5">
                <h4 className="text-base font-bold text-white uppercase tracking-wide border-b border-slate-700/50 pb-2">
                  {sec.heading}
                </h4>
                <p className="text-slate-300 leading-relaxed whitespace-pre-line text-xs sm:text-sm">
                  {sec.body}
                </p>

                {sec.visualAssetUrl && (
                  <div className="my-3 rounded overflow-hidden border border-slate-700/50 bg-[#0F172A]">
                    <img
                      src={sec.visualAssetUrl}
                      alt={sec.visualAssetCaption}
                      className="w-full max-h-80 object-cover grayscale hover:grayscale-0 transition-all duration-300"
                    />
                    <div className="p-2.5 bg-[#1E293B] text-[10px] text-slate-400 uppercase font-bold italic">
                      {sec.visualAssetCaption}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom Action Bar */}
          <div className="pt-4 border-t border-slate-700/50 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-xs text-slate-400">
              Deliverable Length: <span className="font-bold text-white">2,150 Words</span> • Native Australian Human Edit
            </div>
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-2.5 bg-[#D4AF37] hover:bg-[#C19A2E] text-[#0F172A] font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
            >
              Close Preview
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
