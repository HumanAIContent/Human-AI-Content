import React, { useState } from 'react';
import { RECENT_SITES } from '../data/recentSites';
import { RecentSite } from '../types';
import { Globe, TrendingUp, Sparkles, FileText, CheckCircle2 } from 'lucide-react';

interface RecentSitesSectionProps {
  onSelectSite: (site: RecentSite) => void;
}

export const RecentSitesSection: React.FC<RecentSitesSectionProps> = ({ onSelectSite }) => {
  return (
    <section id="recent-sites" className="py-16 bg-[#0F172A] relative border-t border-slate-700/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37] flex items-center justify-center gap-2">
            <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
            Showcase Portfolio • Live Client Sites
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Work
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
            Explore active client articles.
          </p>
        </div>

        {/* 8 Sites Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {RECENT_SITES.map((site, index) => (
            <div
              key={site.id}
              className="group bg-[#1E293B] rounded border border-slate-700/50 hover:border-[#D4AF37]/50 overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-lg"
            >
                         {/* Domain & Niche overlay */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5">
                  <div className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest">
                    {site.niche}
                  </div>
                  <div className="text-white font-extrabold text-base tracking-wide truncate uppercase">
                    {site.name}
                  </div>
                </div>
              </div>
         

              {/* Card Body */}
              <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="font-mono text-slate-300">{site.domain}</span>
                    <span className="px-1.5 py-0.5 bg-[#0F172A] text-[9px] font-bold text-[#D4AF37] uppercase border border-slate-800">
                      {site.packageUsed}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {site.description}
                  </p>

                  <div className="pt-2 border-t border-slate-700/50 space-y-0.5">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Sample Topic:</div>
                    <p className="text-xs font-semibold text-white italic line-clamp-2">
                      "{site.sampleArticleTitle}"
                    </p>
                  </div>
                </div>

                {/* Action Trigger Button */}
                <div className="pt-2">
                  <button
                    onClick={() => onSelectSite(site)}
                    className="w-full py-2 px-3 bg-[#D4AF37] hover:bg-[#C19A2E] text-[#0F172A] text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-1.5 transition-colors shadow-sm"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>View Articles</span>
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
