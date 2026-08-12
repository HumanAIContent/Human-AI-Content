import React, { useState } from 'react';
import { NavPage, RecentSite } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { SampleArticleModal } from './components/SampleArticleModal';
import { AgreementModal } from './components/AgreementModal';

export default function App() {
  const [activePage, setActivePage] = useState<NavPage>('home');
  const [selectedPackageForContact, setSelectedPackageForContact] = useState<string>('fullservice');
  
  // Modals state
  const [isSampleModalOpen, setIsSampleModalOpen] = useState(false);
  const [selectedSiteForSample, setSelectedSiteForSample] = useState<RecentSite | null>(null);
  const [isAgreementModalOpen, setIsAgreementModalOpen] = useState(false);

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

  return (
    <div className="min-h-screen bg-[#0B132B] text-slate-100 flex flex-col font-sans selection:bg-[#D4AF37] selection:text-[#0B132B]">
      
      {/* Header Navigation */}
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenAgreements={() => setIsAgreementModalOpen(true)}
      />

      {/* Main Page View */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenSampleArticle={handleOpenSampleArticle}
            onOpenAgreements={() => setIsAgreementModalOpen(true)}
          />
        )}

        {activePage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenSampleArticle={() => handleOpenSampleArticle(null)}
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

    </div>
  );
}
