import React, { useState } from 'react';
import { NavPage } from '../types';
import { Sparkles, Menu, X, ArrowRight, FileText, CheckCircle2 } from 'lucide-react';

interface NavbarProps {
  activePage: NavPage;
  onNavigate: (page: NavPage, selectedPackage?: string) => void;
  onOpenAgreements: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate, onOpenAgreements }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: NavPage, selectedPackage?: string) => {
    onNavigate(page, selectedPackage);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#1E293B] border-b border-[#D4AF37]/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo / Brand Name */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-1.5 cursor-pointer group"
          >
            <div className="w-5 h-5 bg-[#D4AF37] rounded-sm flex items-center justify-center font-bold text-[#0F172A] text-[9px] shrink-0">
              HA
            </div>
            <div>
              <div className="flex items-center space-x-1">
                <span className="font-bold text-[10px] sm:text-xs tracking-tight text-white uppercase">HUMAN <span className="text-[#D4AF37]">AI</span> CONTENT CREATION</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 text-xs font-bold uppercase tracking-widest">
            <button
              onClick={() => handleNavClick('home')}
              className={`transition-colors py-1 ${
                activePage === 'home' ? 'text-[#D4AF37] border-b-2 border-[#D4AF37]' : 'text-slate-300 hover:text-[#D4AF37]'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => {
                handleNavClick('home');
                setTimeout(() => {
                  const el = document.getElementById('recent-sites');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="text-slate-300 hover:text-[#D4AF37] transition-colors py-1"
            >
              Featured Work
            </button>
            <button
              onClick={() => {
                handleNavClick('home');
                setTimeout(() => {
                  const el = document.getElementById('packages');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="text-slate-300 hover:text-[#D4AF37] transition-colors py-1"
            >
              Pricing
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`transition-colors py-1 ${
                activePage === 'about' ? 'text-[#D4AF37] border-b-2 border-[#D4AF37]' : 'text-slate-300 hover:text-[#D4AF37]'
              }`}
            >
              About
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded text-slate-300 hover:text-white hover:bg-[#0F172A]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0F172A] border-b border-[#D4AF37]/20 px-4 pt-3 pb-6 space-y-3 uppercase tracking-wider text-xs font-bold">
          <button
            onClick={() => handleNavClick('home')}
            className={`block w-full text-left py-2 ${
              activePage === 'home' ? 'text-[#D4AF37]' : 'text-slate-300'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => {
              handleNavClick('home');
              setTimeout(() => {
                const el = document.getElementById('recent-sites');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="block w-full text-left py-2 text-slate-300"
          >
            Recent Client Sites
          </button>
          <button
            onClick={() => {
              handleNavClick('home');
              setTimeout(() => {
                const el = document.getElementById('packages');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="block w-full text-left py-2 text-slate-300"
          >
            Pricing
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className={`block w-full text-left py-2 ${
              activePage === 'about' ? 'text-[#D4AF37]' : 'text-slate-300'
            }`}
          >
            About Me
          </button>
        </div>
      )}
    </header>
  );
};
