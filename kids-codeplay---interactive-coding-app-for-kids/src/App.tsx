import React, { useState } from 'react';
import { Navbar } from './components/landing/Navbar';
import { HeroSection } from './components/landing/HeroSection';
import { VelocityTicker } from './components/landing/VelocityTicker';
import { WaveDivider } from './components/common/WaveDivider';
import { ScreensShowcase } from './components/landing/ScreensShowcase';
import { AppSimulator } from './components/app/AppSimulator';
import { InteractivePlayground } from './components/landing/InteractivePlayground';
import { CurriculumSection } from './components/landing/CurriculumSection';
import { FeaturesSection } from './components/landing/FeaturesSection';
import { TestimonialsSection } from './components/landing/TestimonialsSection';
import { PricingSection } from './components/landing/PricingSection';
import { ContactSection } from './components/landing/ContactSection';
import { FaqSection } from './components/landing/FaqSection';
import { Footer } from './components/landing/Footer';
import { BackToTop } from './components/common/BackToTop';
import { DownloadModal, TrialModal, CheckoutModal } from './components/modals/Modals';
import { PricingPlan } from './types';

export default function App() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  const [isAnnualCheckout, setIsAnnualCheckout] = useState(true);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectPlan = (plan: PricingPlan, isAnnual: boolean) => {
    setSelectedPlan(plan);
    setIsAnnualCheckout(isAnnual);
    setCheckoutModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-800 selection:bg-blue-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        onOpenDownloadModal={() => setDownloadModalOpen(true)}
        onOpenTrialModal={() => setTrialModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection
          onScrollToSimulator={() => scrollToSection('app-simulator')}
          onScrollToScreens={() => scrollToSection('screens-showcase')}
        />

        {/* 2. Velocity Scroll Ticker */}
        <VelocityTicker />

        {/* 3. Overlapping Wave Transition */}
        <WaveDivider fill="#FFFFFF" className="-mb-2" />

        {/* 4. 6-Screen Reference Showcase (Grid View & Comparison) */}
        <ScreensShowcase onSelectScreenForSimulator={() => scrollToSection('app-simulator')} />

        {/* 5. Live Interactive Simulator Section */}
        <section id="app-simulator" className="relative py-20 bg-gradient-to-b from-white via-blue-50/40 to-slate-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-black text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 uppercase tracking-wider">
                Simulasi Smartphone Interaktif
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#232758] mt-3 mb-4 font-heading tracking-tight">
                Coba Langsung Aplikasi Kids-CodePlay
              </h2>
              <p className="text-base text-slate-600 font-medium leading-relaxed">
                Pilih layar menggunakan tab di atas ponsel atau klik tombol navigasi di dalam layar
                untuk menguji alur aplikasi secara nyata!
              </p>
            </div>

            {/* Single Interactive Phone */}
            <AppSimulator viewMode="single" />
          </div>
        </section>

        {/* 6. Overlapping Curved Wave */}
        <WaveDivider fill="#F1F5F9" className="-mb-2" />

        {/* 7. Interactive Playground ('The lost Number' game) */}
        <InteractivePlayground />

        {/* 8. Curriculum Roadmap */}
        <CurriculumSection />

        {/* 9. Key Features & Kid-Safety Highlights */}
        <FeaturesSection />

        {/* 10. Parent & Teacher Testimonials */}
        <TestimonialsSection />

        {/* 11. Pricing Plans */}
        <PricingSection onSelectPlan={handleSelectPlan} />

        {/* 12. FAQ Accordion */}
        <FaqSection />

        {/* 13. Contact & Consultation Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenDownloadModal={() => setDownloadModalOpen(true)}
        onOpenTrialModal={() => setTrialModalOpen(true)}
      />

      {/* Floating Back to Top Button */}
      <BackToTop />

      {/* Global Modals */}
      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
      />

      <TrialModal
        isOpen={trialModalOpen}
        onClose={() => setTrialModalOpen(false)}
      />

      <CheckoutModal
        isOpen={checkoutModalOpen}
        plan={selectedPlan}
        isAnnual={isAnnualCheckout}
        onClose={() => setCheckoutModalOpen(false)}
      />
    </div>
  );
}
