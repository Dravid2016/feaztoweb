import React from 'react';
import { EditorialHero } from '../components/EditorialHero';
import { NarrativeTransitionBand } from '../components/NarrativeTransitionBand';
import { HomeKitchensSection } from '../components/HomeKitchensSection';
import { BrandPillarsSection } from '../components/BrandPillarsSection';
import { HowItWorksSection } from '../components/HowItWorksSection';
import { LayeredPhoneShowcase } from '../components/LayeredPhoneShowcase';
import { BookACookSection } from '../components/BookACookSection';
import { PartnerInvitation } from '../components/PartnerInvitation';
import { AppDownloadSection } from '../components/AppDownloadSection';
import { FinalBrandCTA } from '../components/FinalBrandCTA';

interface HomePageProps {
  navigate: (route: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ navigate }) => {
  return (
    <main className="feazto-homepage">

      {/* 1. Editorial hero with inline food imagery (Reference C) */}
      <EditorialHero navigate={navigate} />

      {/* 2. Interactive Layered Phone Showcase (FEAZTO, Book a cook, Carefe) */}
      <LayeredPhoneShowcase navigate={navigate} />

      {/* 3. Inline food-image transitions band (Reference D) */}
      <NarrativeTransitionBand />

      {/* 6. Home kitchens and FoodPreneurs */}
      <HomeKitchensSection navigate={navigate} />

      {/* 7. What makes feazto different */}
      <BrandPillarsSection />

      {/* 8. How feazto works (Documented flow) */}
      <HowItWorksSection />

      {/* 9. Book a Cook (Transparent Pilot Presentation) */}
      <BookACookSection navigate={navigate} />

      {/* 12. Partner and kitchen invitation */}
      <PartnerInvitation navigate={navigate} />

      {/* 13. Dedicated app-download section with QR (Reference G) */}
      <AppDownloadSection navigate={navigate} />

      {/* 14. Final brand CTA */}
      <FinalBrandCTA navigate={navigate} />
    </main>
  );
};
