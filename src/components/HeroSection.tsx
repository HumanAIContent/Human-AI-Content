import React from 'react';
import { NavPage } from '../types';
import { CheckCircle2, Sparkles, Shield, Cpu, Layers, FileCheck } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (page: NavPage, selectedPackage?: string) => void;
  onOpenSampleArticle: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, onOpenSampleArticle }) => {
  return (
    <section className="relative overflow-hidden py-12 lg:py-16 bg-[#0F172A]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Hero Card Container with Left Gold Accent Border */}
          <div className="lg:col-span-8 flex flex-col justify-center rounded-lg bg-[#1E293B] p-8 lg:p-10 border-l-4 border-[#D4AF37] border-y border-r border-slate-700/50 shadow-xl">
            
            {/* Top Eyebrow */}
            <span className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37] flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              Content Creation Growth-Engine
            </span>

            {/* Main Title */}
            <h1 className="mb-4 text-xl sm:text-2xl lg:text-3xl font-extrabold leading-tight text-white">
              Expert Website & Social Media Content Done For You—Hands Off!
            </h1>

            {/* Subheading */}
            <p className="mb-6 text-sm sm:text-base leading-relaxed text-slate-300">
              Welcome, my name is Mikel. I'm a native Australian content creation expert based in the Philippines with 20+ years of digital marketing expertise. I provide high-performance, AI-assisted, human-edited content creation for select US and global businesses.
              <br /><br />
              If you’ve hired freelancers on platforms like Upwork or Fiverr, you know cost savings often come with communication and language pitfalls. As a native English speaker, you’ll never worry about language barriers, awkward phrasing, or heavy rewrites—just quality, hassle-free content.
              <br /><br />
              If you're looking for a reliable, virtually hands-off website and social media content creation solution, please check out my services to see if they fit your needs.
            </p>

            {/* Value Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              <div className="flex items-center space-x-2 text-xs font-semibold text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>4x In-Depth Articles Per Month (1,500-2,500w)</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-semibold text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>CoSchedule Social Media Integration</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-semibold text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Custom Canva Featured Graphics</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-semibold text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Full WordPress Staging & Yoast Meta</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  const el = document.getElementById('packages');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border border-[#D4AF37] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors"
              >
                View Packages
              </button>
            </div>

            {/* Quick Trust Bar */}
            <div className="mt-8 pt-6 border-t border-slate-700/50 flex flex-wrap items-center gap-6 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              <div className="flex items-center space-x-1.5">
                <Shield className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Native English Content Creator</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Cpu className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>AI Speed + Human Quality</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Layers className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>No direct password access to client social media accounts</span>
              </div>
            </div>

          </div>

          {/* Right Strategist Image Frame with Sleek Grayscale Transition */}
          <div className="lg:col-span-4 flex flex-col justify-between items-center rounded-lg bg-[#1E293B] p-4 border border-slate-700/50 overflow-hidden shadow-xl text-center">
            
            {/* Status Badge Top Right */}
            <div className="w-full flex justify-between items-center mb-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300">Content Creation Manager</span>
              <span className="bg-[#0F172A] px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider text-[#D4AF37] border border-[#D4AF37]/30">
                20+ Yrs Exp
              </span>
            </div>

            {/* 50% Reduced Size Image Container */}
            <div className="relative w-36 h-36 sm:w-40 sm:h-40 my-2 rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 bg-[#0F172A] border border-slate-700/80 shadow-md shrink-0">
              <img
                src="/mikel-portrait.jpg"
                alt="Mikel - Content Creation Strategist Portrait"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Text Overlay Box */}
            <div className="bg-[#0F172A]/90 p-2.5 rounded border border-slate-700/60 w-full mt-2 mb-3">
              <div className="text-white font-bold text-xs uppercase tracking-wide">
                Mikel Sims
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">
                Expert Ai-assisted Human-edited Content Creator.
              </div>
            </div>

            <div className="w-full grid grid-cols-3 gap-2 text-center text-[10px] font-bold uppercase">
              <div className="bg-[#0F172A] p-1.5 rounded border border-slate-800">
                <div className="text-white text-xs font-bold">200+</div>
                <div className="text-slate-500 text-[8px] leading-tight mt-0.5">AI Assisted Human Edited</div>
              </div>
              <div className="bg-[#0F172A] p-1.5 rounded border border-slate-800">
                <div className="text-[#D4AF37] text-xs font-bold">100%</div>
                <div className="text-slate-500 text-[9px]">Native English Speaker</div>
              </div>
              <div className="bg-[#0F172A] p-1.5 rounded border border-slate-800">
                <div className="text-emerald-400 text-xs font-bold">20+ Years</div>
                <div className="text-slate-500 text-[9px]">Experience</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
