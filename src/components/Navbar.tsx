import React, { useState, useEffect } from 'react';
import { NavPage } from '../types';
import { Menu, X, Sparkles, Shield, FileText, HelpCircle } from 'lucide-react';

interface NavbarProps {
  activePage: NavPage;
  onNavigate: (page: NavPage, selectedPackage?: string) => void;
  onOpenAgreements: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate, onOpenAgreements }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>('home');

  // Close mobile menu when window resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleNavClick = (page: NavPage, selectedPackage?: string) => {
    onNavigate(page, selectedPackage);
    setIsMenuOpen(false);
    setActiveTab(page);
    // Scroll to top when navigating to home
    if (page === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    setActiveTab(sectionId);
    
    // If we're already on home, just scroll
    if (activePage === 'home') {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        setTimeout(() => {
          const el2 = document.getElementById(sectionId);
          if (el2) {
            el2.scrollIntoView({ behavior: 'smooth' });
          }
        }, 200);
      }
      return;
    }
    
    // Navigate to home first, then scroll after render
    onNavigate('home');
    // Scroll to top of the page first, then to the section
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    const attemptScroll = (delay: number) => {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else if (delay < 1000) {
          attemptScroll(delay + 200);
        }
      }, delay);
    };
    
    attemptScroll(300);
  };

  const isTabActive = (tabId: string) => {
    return activeTab === tabId;
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#0F172A] border-b border-slate-700/50 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <img 
                src="/Human-AI-Content-Creation-Square.png" 
                alt="Human AI Content Logo" 
                className="w-8 h-8 rounded bg-[#1E293B] border border-[#D4AF37]/50 object-contain p-0.5"
              />
              <span className="font-extrabold text-sm text-white tracking-wider uppercase">
                HUMAN <span className="text-[#D4AF37]">AI</span> CONTENT
              </span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 text-xs font-bold uppercase tracking-wider">
              <button
                onClick={() => handleNavClick('home')}
                className={`hover:text-[#D4AF37] transition-colors ${
                  isTabActive('home') ? 'text-[#D4AF37]' : 'text-slate-300'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('packages')}
                className={`hover:text-[#D4AF37] transition-colors ${
                  isTabActive('packages') ? 'text-[#D4AF37]' : 'text-slate-300'
                }`}
              >
                Packages
              </button>
              <button
                onClick={() => scrollToSection('recent-sites')}
                className={`hover:text-[#D4AF37] transition-colors ${
                  isTabActive('recent-sites') ? 'text-[#D4AF37]' : 'text-slate-300'
                }`}
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className={`hover:text-[#D4AF37] transition-colors ${
                  isTabActive('faq') ? 'text-[#D4AF37]' : 'text-slate-300'
                }`}
              >
                FAQ
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className={`px-4 py-1.5 bg-[#D4AF37] hover:bg-[#C19A2E] text-[#0F172A] transition-colors rounded ${
                  isTabActive('contact') ? 'bg-[#C19A2E]' : ''
                }`}
              >
                Enquire Now
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-[#D4AF37] transition-colors z-50 relative"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - Moved outside header */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#0F172A] z-40 flex flex-col px-4 pt-4 pb-8 overflow-y-auto md:hidden">
          <div className="flex justify-end">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-slate-300 hover:text-[#D4AF37] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex flex-col space-y-4 text-sm font-bold uppercase tracking-wider mt-4">
            <button
              onClick={() => handleNavClick('home')}
              className={`hover:text-[#D4AF37] transition-colors ${
                isTabActive('home') ? 'text-[#D4AF37]' : 'text-slate-300'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('packages')}
              className={`hover:text-[#D4AF37] transition-colors ${
                isTabActive('packages') ? 'text-[#D4AF37]' : 'text-slate-300'
              }`}
            >
              Packages
            </button>
            <button
              onClick={() => scrollToSection('recent-sites')}
              className={`hover:text-[#D4AF37] transition-colors ${
                isTabActive('recent-sites') ? 'text-[#D4AF37]' : 'text-slate-300'
              }`}
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className={`hover:text-[#D4AF37] transition-colors ${
                isTabActive('faq') ? 'text-[#D4AF37]' : 'text-slate-300'
              }`}
            >
              FAQ
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`w-full py-2.5 bg-[#D4AF37] hover:bg-[#C19A2E] text-[#0F172A] transition-colors rounded text-center ${
                isTabActive('contact') ? 'bg-[#C19A2E]' : ''
              }`}
            >
              Enquire Now
            </button>
          </nav>
        </div>
      )}
    </>
  );
};
