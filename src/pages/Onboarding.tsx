import React, { useState, useEffect } from 'react';
import { NavPage, RecentSite } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ContactPage } from './pages/ContactPage';
import { Onboarding } from './pages/Onboarding';
import { SampleArticleModal } from './components/SampleArticleModal';
import { AgreementModal } from './components/AgreementModal';

export default function App() {
  const [activePage, setActivePage] = useState<NavPage>('home');
  const [selectedPackageForContact, setSelectedPackageForContact] = useState<string>('fullservice');
  
  // Modals state
  const [isSampleModalOpen, setIsSampleModalOpen] = useState(false);
  const [selectedSiteForSample, setSelectedSiteForSample] = useState<RecentSite | null>(null);
  const [isAgreementModalOpen, setIsAgreementModalOpen] = useState(false);

  // Reset scroll position to top on page switch
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  // Handle body scroll locking when modals are active
  useEffect(() => {
    const isAnyModalOpen = isSampleModalOpen || isAgreementModalOpen;
    document.body.style.overflow = isAnyModalOpen ? 'hidden' : 'unset';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSampleModalOpen, isAgreementModalOpen]);

  const handleNavigate = (page: NavPage, selectedPackage?: string) => {
    setActivePage(page);
    if (selectedPackage) {
      setSelectedPackageForContact(selectedPackage);
    }
  };

  const handleOpenSampleArticle = (site?: RecentSite | null) => {
    setSelectedSiteForSample(site || null);
    setIsSampleModalOpen(true);
  };

  // Check if we're on the onboarding page
  const isOnboarding = window.location.pathname === '/onboarding';

  return (
    <div className="min-h-screen bg-[#0B132B] text-slate-100 flex flex-col font-sans selection:bg-[#D4AF37] selection:text-[#0B132B]">
      
      {/* Only show Navbar and Footer if NOT on onboarding page */}
      {!isOnboarding && (
        <>
          {/* Header Navigation */}
          <Navbar
            activePage={activePage}
            onNavigate={handleNavigate}
            onOpenAgreements={() => setIsAgreementModalOpen(true)}
          />

          {/* Main Page View */}
          <main id="main-content" className="flex-1 focus:outline-none" tabIndex={-1}>
            {activePage === 'home' && (
              <HomePage
                onNavigate={handleNavigate}
                onOpenSampleArticle={handleOpenSampleArticle}
                onOpenAgreements={() => setIsAgreementModalOpen(true)}
              />
            )}

            {activePage === 'contact' && (
              <ContactPage
                initialPackageId={selectedPackageForContact}
                onOpenAgreements={() => setIsAgreementModalOpen(true)}
              />
            )}
          </main>

          {/* Footer */}
          <Footer
            onNavigate={handleNavigate}
            onOpenAgreements={() => setIsAgreementModalOpen(true)}
          />

          {/* Modals */}
          <SampleArticleModal
            isOpen={isSampleModalOpen}
            onClose={() => setIsSampleModalOpen(false)}
            selectedSite={selectedSiteForSample}
          />

          <AgreementModal
            isOpen={isAgreementModalOpen}
            onClose={() => setIsAgreementModalOpen(false)}
          />
        </>
      )}

      {/* Show Onboarding page when on /onboarding route */}
      {isOnboarding && <Onboarding />}
    </div>
  );
}
