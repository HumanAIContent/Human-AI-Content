import React, { useState } from 'react';
import { RECENT_SITES } from '../data/recentSites';
import { RecentSite } from '../types';
import { Globe, TrendingUp, Sparkles, FileText, CheckCircle2 } from 'lucide-react';

interface RecentSitesSectionProps {
  onSelectSite: (site: RecentSite) => void;
}

const RecentSitesSection: React.FC<RecentSitesSectionProps> = ({ onSelectSite }) => {
  // TEMPORARY: Set to true to hide Card 1 (Tokyo Rehabilitation)
  // Change back to false when ready to restore Card 1
  const HIDE_CARD_1 = true;

  // Filter out Card 1 if HIDE_CARD_1 is true
  const visibleSites = HIDE_CARD_1
    ? RECENT_SITES.filter(site => site.id !== 'site-1')
    : RECENT_SITES;

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
            Explore active client articles and social media posts.
          </p>
        </div>

        {/* 8 Sites Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleSites.map((site) => (
            <div
              key={site.id}
              className="group bg-[#1E293B] rounded border border-slate-700/50 hover:border-[#D4AF37]/50 overflow-hidden transition-all duration-300 flex flex-col shadow-lg"
            >
              
              {/* Image Container - Perfect Square with NO grayscale */}
              <div className="relative aspect-square overflow-hidden bg-[#0F172A]">
                <img
                  src={site.image}
                  alt={site.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                />
              </div>

              {/* Card Body - Full-width button */}
              <div className="flex-1 flex flex-col justify-end">
                <button
                  onClick={() => onSelectSite(site)}
                  className="w-full py-3 bg-[#D4AF37] hover:bg-[#C19A2E] text-[#0F172A] text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-1.5 transition-colors shadow-sm"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>View Samples</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RecentSitesSection;
