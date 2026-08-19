import React from 'react';
import { NavPage } from '../types';
import { ShieldCheck, CreditCard, ArrowRight, FileText, Globe, Check } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: NavPage, selectedPackage?: string) => void;
  onOpenAgreements: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenAgreements }) => {
  return (
    <footer className="bg-[#0F172A] border-t border-slate-700/50 text-slate-400 text-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1 & 2: Brand & Bio */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center space-x-2">
              <img 
                src="/Human-AI-Content-Creation-Square.png" 
                alt="Human AI Content Creation Logo" 
                className="w-10 h-10 md:w-16 md:h-16 rounded object-cover border border-[#D4AF37]/50" 
              />
              <span className="font-extrabold text-base text-white tracking-wider uppercase">
                HUMAN <span className="text-[#D4AF37]">AI</span> CONTENT
              </span>
            </div>
            
            <p className="text-slate-300 leading-relaxed max-w-md text-xs">
              A complete, end-to-end content management solution for US and international brands, blending the efficiency of AI-assisted content generation with the refinement of human editing. Fresh, authoritative, and reader-ready material published consistently—all through a hassle-free, hands-off service that runs seamlessly in the background, requiring virtually zero oversight from you.
            </p>
          </div>

          {/* Column 3: Navigation + Contact */}
          <div>
            <h4 className="text-white font-bold mb-3 text-[11px] tracking-widest uppercase text-[#D4AF37]">
              Navigation
            </h4>
            <ul className="space-y-2 mb-6">
              <li>
                <button 
                  onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    onNavigate('home');
                    setTimeout(() => {
                      const el = document.getElementById('packages');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Packages
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    onNavigate('home');
                    setTimeout(() => {
                      const el = document.getElementById('recent-sites');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    onNavigate('home');
                    setTimeout(() => {
                      const el = document.getElementById('faq');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  FAQ
                </button>
              </li>
            </ul>

            {/* CONTACT Heading */}
            <h4 className="text-white font-bold mb-3 text-[11px] tracking-widest uppercase text-[#D4AF37]">
              Contact
            </h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:mikel@humanaicontent.com" 
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  mikel@humanaicontent.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Services Offered + Service Agreement Overviews */}
          <div>
            <h4 className="text-white font-bold mb-3 text-[11px] tracking-widest uppercase text-[#D4AF37]">
              Services Offered
            </h4>
            <ul className="space-y-2 text-slate-300 mb-4">
              <li className="flex items-center space-x-1.5">
                <Check className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>SEO & GEO Articles (up to 2,500w)</span>
              </li>
              <li className="flex items-center space-x-1.5">
                <Check className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Custom Canva Visual Assets</span>
              </li>
              <li className="flex items-center space-x-1.5">
                <Check className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>WordPress Draft Staging & Yoast</span>
              </li>
              <li className="flex items-center space-x-1.5">
                <Check className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Password-Free CoSchedule Socials</span>
              </li>
              <li className="flex items-center space-x-1.5">
                <Check className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Google Drive Shared Archiving</span>
              </li>
            </ul>

            {/* Service Agreement Overviews */}
            <div className="pt-4 border-t border-slate-700/50">
              <button 
                onClick={onOpenAgreements} 
                className="text-[#D4AF37] hover:text-white font-bold text-[11px] uppercase tracking-wider transition-colors flex items-center space-x-1.5"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Service Agreement Overviews</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-slate-700/50 flex flex-col sm:flex-row items-center justify-between text-slate-400 space-y-3 sm:space-y-0 text-[11px]">
          <p>© {new Date().getFullYear()} Human AI Content. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
