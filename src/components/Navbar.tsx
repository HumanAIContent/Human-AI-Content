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
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleNavClick = (page: NavPage, selectedPackage?: string) => {
    onNavigate(page, selectedPackage);
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    
    // If we're already on home, just scroll
    if (activePage === 'home') {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }
    
    // Navigate to home first, then scroll after render
    onNavigate('home');
    
    // Wait for navigation and DOM update
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        // If element still not found, try after another short delay
        setTimeout(() => {
          const el2 = document.getElementById(sectionId);
          if (el2) {
            el2.scrollIntoView({ behavior: 'smooth' });
          }
        }, 300);
      }
    }, 300);
  };

  return (
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
            <span className="font-extrabold text-sm text-white tracking-wider uppercase hidden sm:inline-block">
              HUMAN AI CONTENT
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-xs font-bold uppercase tracking-wider">
            <button
              onClick={() => handleNavClick('home')}
              className={`hover:text-[#D4AF37] transition-colors ${
                activePage === 'home' ? 'text-[#D4AF37]' : 'text-slate-300'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => {
                scrollToSection('packages');
              }}
              className="text-slate-300 hover:text-[#D4AF37] transition-colors"
            >
              Packages
            </button>
            <button
              onClick={() => {
                scrollToSection('recent-sites');
              }}
              className="text-slate-300 hover:text-[#D4AF37] transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => {
                scrollToSection('faq');
              }}
              className="text-slate-300 hover:text-[#D4AF37] transition-colors"
            >
              FAQ
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`hover:text-[#D4AF37] transition-colors ${
                activePage === 'about' ? 'text-[#D4AF37]' : 'text-slate-300'
              }`}
            >
              About
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`px-4 py-1.5 bg-[#D4AF37] hover:bg-[#C19A2E] text-[#0F172A] transition-colors rounded ${
                activePage === 'contact' ? 'bg-[#C19A2E]' : ''
              }`}
            >
              Enquire Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-[#D4AF37] transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#0F172A] z-40 flex flex-col px-4 pt-4 pb-8 overflow-y-auto">
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
                activePage === 'home' ? 'text-[#D4AF37]' : 'text-slate-300'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => {
                scrollToSection('packages');
              }}
              className="text-slate-300 hover:text-[#D4AF37] transition-colors"
            >
              Packages
            </button>
            <button
              onClick={() => {
                scrollToSection('recent-sites');
              }}
              className="text-slate-300 hover:text-[#D4AF37] transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => {
                scrollToSection('faq');
              }}
              className="text-slate-300 hover:text-[#D4AF37] transition-colors"
            >
              FAQ
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`hover:text-[#D4AF37] transition-colors ${
                activePage === 'about' ? 'text-[#D4AF37]' : 'text-slate-300'
              }`}
            >
              About
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full py-2.5 bg-[#D4AF37] hover:bg-[#C19A2E] text-[#0F172A] transition-colors rounded text-center"
            >
              Enquire Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
