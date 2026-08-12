import React from 'react';
import { NavPage } from '../types';
import { Sparkles, Globe, ShieldCheck, Cpu, ArrowRight, CheckCircle2, Clock, Award, FileCheck } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: NavPage, selectedPackage?: string) => void;
  onOpenSampleArticle: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenSampleArticle }) => {
  return (
    <div className="py-12 bg-[#0F172A]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Top Header & Strategist Bio Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Bio Copy */}
          <div className="lg:col-span-7 space-y-5">
            
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37] flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
              Meet Your Content Creation Manager
            </span>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              20+ Years in Digital Marketing, Web Design & Conversion Copywriting
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Hi, I’m a native Australian content creation manager, writer, and digital marketer living in the Philippines. I bring over 20 years of experience in web design, digital marketing, and sales copywriting, combined with 4+ years of specialized experience in AI-assisted Human-Edited writing workflows.
            </p>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              I work specifically with US-based and international business owners who need high-quality, conversion-focused blog content without the hassle of micromanagement or constant rewrites. As a native English speaker, you’ll never have to worry about language barriers, awkward phrasing, or heavy rewrites. I focus on building long-term, reliable relationships with clients who want premium, hassle-free content solutions.
            </p>

            {/* Quick Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-[#1E293B] p-3 rounded border border-slate-700/50 space-y-0.5">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">First Language</div>
                <div className="text-white font-bold text-xs uppercase">English</div>
              </div>
              <div className="bg-[#1E293B] p-3 rounded border border-slate-700/50 space-y-0.5">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Web Experience</div>
                <div className="text-[#D4AF37] font-bold text-xs uppercase">20+ Years</div>
              </div>
              <div className="bg-[#1E293B] p-3 rounded border border-slate-700/50 space-y-0.5 col-span-2 sm:col-span-1">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">AI Workflows</div>
                <div className="text-emerald-400 font-bold text-xs uppercase">4+ Years GEO/AI</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="bg-[#D4AF37] hover:bg-[#C19A2E] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#0F172A] transition-colors flex items-center space-x-2 shadow-sm"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenSampleArticle}
                className="border border-[#D4AF37] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors flex items-center space-x-2"
              >
                <FileCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>Read Sample Article</span>
              </button>
            </div>

          </div>

          {/* Right Column: Man's Picture Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative bg-[#1E293B] rounded p-4 border border-slate-700/50 shadow-xl space-y-3 w-full max-w-xs text-center">
              
              {/* 50% Reduced Size Portrait */}
              <div className="relative w-40 h-48 mx-auto rounded overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 bg-[#0F172A] border border-slate-700/80 shadow-md">
                <img
                  src= "/mikel-portrait.jpg"
                  alt="Mikel - Content Creation Manager Portrait"
                  className="w-full h-full object-cover object-top"
                />
              </div>
                
              <div className="bg-[#0F172A]/90 p-2.5 rounded border border-slate-700/60 text-xs space-y-1 text-left">
                <div className="text-[#D4AF37] font-bold uppercase text-[11px] tracking-wider">Native English Communication</div>
                <div className="text-slate-300 text-[10px]">
                  Zero grammatical fixes, zero awkward phrasing. Direct strategic alignment.
                </div>
              </div>

              <div className="p-2 bg-[#0F172A] rounded border border-slate-700/60 text-[10px] font-bold uppercase text-slate-300 flex items-center justify-between">
                <span>Location: Philippines</span>
                <span className="text-[#D4AF37]">USD Retainers</span>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Differentiators Section */}
        <div className="space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Why Work With Me Over Cheaper Freelance Options?
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm">
              Managing generic freelancers takes hours of editing every week. Here is why our managed pipeline is different.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-[#1E293B] p-6 rounded border border-slate-700/50 space-y-2.5">
              <div className="w-9 h-9 rounded bg-[#0F172A] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                <Globe className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-white uppercase tracking-wide">1. Native English Communication</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                As a native English speaker from Australia, you will never have to edit awkward phrasing, correct subtle grammatical errors, or waste time bridging communication barriers.
              </p>
            </div>

            <div className="bg-[#1E293B] p-6 rounded border border-slate-700/50 space-y-2.5">
              <div className="w-9 h-9 rounded bg-[#0F172A] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                <Award className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-white uppercase tracking-wide">2. Full-Funnel Web Expertise</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Having spent two decades in web design, SEO, and sales copywriting, I understand how content fits into your broader website structure, user experience, and conversion funnel.
              </p>
            </div>

            <div className="bg-[#1E293B] p-6 rounded border border-slate-700/50 space-y-2.5">
              <div className="w-9 h-9 rounded bg-[#0F172A] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-white uppercase tracking-wide">3. Reliable Low-Friction Partner</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                I focus on building long-term, low-friction client relationships. You get clear workflows, strict adherence to weekly deadlines, and predictable output month after month.
              </p>
            </div>

            <div className="bg-[#1E293B] p-6 rounded border border-slate-700/50 space-y-2.5">
              <div className="w-9 h-9 rounded bg-[#0F172A] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                <Cpu className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-white uppercase tracking-wide">4. Proven AI + Human Workflow</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Rather than relying on raw AI output or slow traditional methods, I leverage AI for heavy drafting research, allowing maximum time spent polishing, fact-checking, and optimizing your messaging.
              </p>
            </div>

          </div>
        </div>

        {/* How Getting Started Works (4 Steps) */}
        <div className="bg-[#1E293B] rounded p-6 sm:p-10 border border-slate-700/50 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <h2 className="text-2xl font-extrabold text-white tracking-tight">
              How Getting Started Works
            </h2>
            <p className="text-xs text-slate-300">
              Four simple steps from agreement signing to live blog publishing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="bg-[#0F172A] p-4 rounded border border-slate-800 space-y-1.5">
              <div className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider">STEP 1</div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wide">Setup & Access</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Complete onboarding questionnaire, provide WP Editor access, and link social profiles via CoSchedule.
              </p>
            </div>

            <div className="bg-[#0F172A] p-4 rounded border border-slate-800 space-y-1.5">
              <div className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider">STEP 2</div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wide">Strategy Alignment</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Establish monthly topic schedule, target GEO keywords, and brand style preferences.
              </p>
            </div>

            <div className="bg-[#0F172A] p-4 rounded border border-slate-800 space-y-1.5">
              <div className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider">STEP 3</div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wide">Drafting & Staging</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Articles & Canva visuals produced, uploaded to Drive, and staged as WP draft links.
              </p>
            </div>

            <div className="bg-[#0F172A] p-4 rounded border border-slate-800 space-y-1.5">
              <div className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider">STEP 4</div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wide">1-Click Approval</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Receive preview links via email. Once approved, content and social campaigns go live.
              </p>
            </div>

          </div>

          <div className="text-center pt-2">
            <button
              onClick={() => onNavigate('contact', 'trial')}
              className="bg-[#D4AF37] hover:bg-[#C19A2E] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#0F172A] transition-colors inline-flex items-center space-x-2 shadow-sm"
            >
              <span>Enquire Today or Request A Paid Trial Article</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
