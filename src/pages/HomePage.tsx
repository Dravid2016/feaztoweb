import React from 'react';
import { EditorialHero } from '../components/EditorialHero';
import { LayeredPhoneShowcase } from '../components/LayeredPhoneShowcase';
import { HomeKitchensSection } from '../components/HomeKitchensSection';
import { BrandPillarsSection } from '../components/BrandPillarsSection';
import { KitchenVerificationSection } from '../components/KitchenVerificationSection';
import { HowItWorksSection } from '../components/HowItWorksSection';
import { PartnerInvitation } from '../components/PartnerInvitation';
import { AppDownloadSection } from '../components/AppDownloadSection';

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

      {/* 3. Home kitchens and FoodPreneurs */}
      <HomeKitchensSection navigate={navigate} />

      {/* 4. What makes feazto different */}
      <BrandPillarsSection />

      {/* 5. Customer Promise and Five-Step Kitchen Verification */}
      <KitchenVerificationSection navigate={navigate} />

      {/* 6. How feazto works (Documented flow) */}
      <HowItWorksSection />

      {/* 7. Partner and kitchen invitation (includes FoodPreneur Growth Engine loop) */}
      <PartnerInvitation navigate={navigate} />

      {/* 8. Dedicated app-download section with QR (Reference G) */}
      <AppDownloadSection navigate={navigate} />
    </main>
  );
};
