import React from 'react';
import { NavPage } from '../types';
import { CheckCircle2, Sparkles, Shield, Cpu, Layers, FileText } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (page: NavPage, selectedPackage?: string) => void;
  onOpenSampleArticle: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, onOpenSampleArticle }) => {
  return (
    <section className="relative overflow-hidden py-6 lg:py-8 bg-[#0F172A]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Logo and Headline Section - MOVED TO TOP */}
        <div className="text-center mb-6">
          <div className="flex justify-center items-center mb-4">
            <img
              src="/Human-AI-Content-Creation-Square.png"
              alt="Human-AI Content Creation Logo"
              className="w-24 h-24 sm:w-32 sm:h-32 object-contain rounded-lg shadow-md"
            />
          </div>
          
          <span className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37] flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            Content Creation Growth-Engine
          </span>

          <h1 className="mb-3 text-xl sm:text-2xl lg:text-3xl font-extrabold leading-tight text-white">
            Expert Website & Social Media Content<br />Done For You—Hands Off!
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* Main Hero Card Container */}
          <div className="lg:col-span-8 flex flex-col justify-between rounded-lg bg-[#1E293B] p-6 lg:p-7 border-l-4 border-[#D4AF37] border-y border-r border-slate-700/50 shadow-xl">
            
            <div>
              {/* Subheading */}
              <p className="mb-8 text-xs sm:text-sm leading-relaxed text-slate-300">
                Welcome, my name is Mikel. I'm a native Australian content creation expert based in the Philippines with 20+ years of digital marketing expertise. I provide high-performance, AI-assisted, human-edited content creation for select US and global businesses.
                <br /><br />
                If you've hired freelancers on platforms like Upwork or Fiverr, you know cost savings often come with communication and language pitfalls. As a native English speaker, you'll never worry about language barriers, awkward phrasing, or heavy rewrites—just quality, hassle-free content.
                <br /><br />
                Your content should NOT wait on your to-do list. If you are struggling with finding the time to do it and outsourcing has only resulted in more work for you. I'll create everything, from start to finish, giving you consistent, professional content without the management headaches.
              </p>
              

              {/* Value Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
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

              {/* Centered Primary Action Button */}
              <div className="flex justify-center mt-8 mb-4">
                <button
                  onClick={() => {
                    const el = document.getElementById('packages');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-[#D4AF37] hover:bg-[#C19A2E] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0F172A] transition-colors rounded shadow-lg hover:shadow-[#D4AF37]/20"
                >
                  View Packages
                </button>
              </div>
            </div>

            {/* Quick Trust Bar */}
            <div className="mt-5 pt-4 border-t border-slate-700/50 flex flex-wrap items-center justify-between gap-4 text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
              <div className="flex items-center space-x-1.5">
                <Shield className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Native English Content Creator</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Cpu className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>AI Speed + Human Quality Assurance</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <FileText className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>No Long-Term Lock-In Contracts</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Layers className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>No direct password access needed</span>
              </div>
            </div>

          </div>

          {/* Right Column Frame */}
          <div className="lg:col-span-4 flex flex-col justify-between rounded-lg bg-[#1E293B] p-4 border border-slate-700/50 shadow-xl text-center space-y-4">

            {/* Portrait & Stats Group */}
            <div className="flex flex-col items-center space-y-3">
              {/* Portrait Image Container */}
              <div className="relative w-32 h-32 rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 bg-[#0F172A] border border-slate-700/80 shadow-md shrink-0">
                <img
                  src="/mikel-portrait.jpg"
                  alt="Mikel - Content Creation Strategist Portrait"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Name Box */}
              <div className="bg-[#0F172A]/90 p-2.5 rounded border border-slate-700/60 w-full">
                <div className="text-white font-bold text-xs uppercase tracking-wide">
                  Mikel Sims
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5 leading-tight">
                  AI-Assisted Human-Edited Content Creation Manager
                </div>
              </div>

              {/* Stat Boxes */}
              <div className="w-full grid grid-cols-3 gap-1.5 text-center uppercase">
                <div className="bg-[#0F172A] p-2 rounded border border-slate-800">
                  <div className="text-white text-xs font-bold">200+</div>
                  <div className="text-slate-500 text-[8px] leading-tight mt-0.5">Articles Created</div>
                </div>
                <div className="bg-[#0F172A] p-2 rounded border border-slate-800">
                  <div className="text-[#D4AF37] text-xs font-bold">100%</div>
                  <div className="text-slate-500 text-[8px] leading-tight mt-0.5">Native English</div>
                </div>
                <div className="bg-[#0F172A] p-2 rounded border border-slate-800">
                  <div className="text-emerald-400 text-xs font-bold">20+ Yrs</div>
                  <div className="text-slate-500 text-[8px] leading-tight mt-0.5">Experience</div>
                </div>
              </div>
            </div>

            {/* Service Standards And Expectations Card */}
            <div className="bg-[#0F172A] p-4 sm:p-5 rounded-lg border border-[#D4AF37]/40 text-left space-y-4 flex-1 flex flex-col">
              <div className="flex items-center space-x-2.5 border-b border-slate-800 pb-3">
                <svg className="w-5 h-5 text-[#D4AF37] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-sm font-bold uppercase tracking-wide text-white leading-tight">
                  Service Standards<br />And Expectations
                </span>
              </div>

              <ul className="space-y-3.5 text-xs text-slate-300 leading-relaxed">
                <li className="flex items-start space-x-2.5">
                  <svg className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong className="text-white">24- to 48-Hour SLA Response:</strong> Direct response from your content creation manager within 24 to 48 hours. Responses are typically provided within 24 hours, seven days a week.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <svg className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <span><strong className="text-white">No Long-Term Lock-In Contracts:</strong> Prepaid monthly by-month retainer packages in USD with zero hidden fees or per-word surprises with no long-term lock-in contracts. You enjoy consistent, hands-off content management.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <Shield className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span><strong className="text-white">Password-Free Access:</strong> Secure login for the WordPress Editor & the CoSchedule OAuth API authentication. I will never ask for your social media passwords.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <svg className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span><strong className="text-white">Paid Trial Article Available:</strong> Request a single paid test article with full research, SEO/GEO optimization, and custom Canva visuals—so you can evaluate the workflow risk-free before committing to a retainer.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
