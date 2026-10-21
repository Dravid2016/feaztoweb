import React from 'react';
import { EditorialHero } from '../components/EditorialHero';
import { StorySection } from '../components/StorySection';
import { RegionalFoodGrid } from '../components/RegionalFoodGrid';
import { NarrativeTransitionBand } from '../components/NarrativeTransitionBand';
import { HomeKitchensSection } from '../components/HomeKitchensSection';
import { BrandPillarsSection } from '../components/BrandPillarsSection';
import { HowItWorksSection } from '../components/HowItWorksSection';
import { LayeredPhoneShowcase } from '../components/LayeredPhoneShowcase';
import { BookACookSection } from '../components/BookACookSection';
import { PartnerInvitation } from '../components/PartnerInvitation';
import { AppDownloadSection } from '../components/AppDownloadSection';
import { FAQSection } from '../components/FAQSection';
import { FinalBrandCTA } from '../components/FinalBrandCTA';

interface HomePageProps {
  navigate: (route: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ navigate }) => {
  return (
    <main className="feazto-homepage">

      {/* 1. Editorial hero with inline food imagery (Reference C) */}
      <EditorialHero navigate={navigate} />

      {/* 2. Story behind feazto with painterly kitchen illustration (Reference B) */}
      <StorySection navigate={navigate} />

      {/* 3. Regional food discovery grid */}
      <RegionalFoodGrid navigate={navigate} />

      {/* 4. Inline food-image transitions band (Reference D) */}
      <NarrativeTransitionBand />

      {/* 5. Home kitchens and FoodPreneurs */}
      <HomeKitchensSection navigate={navigate} />

      {/* 6. What makes feazto different */}
      <BrandPillarsSection />

      {/* 7. How feazto works (Documented flow) */}
      <HowItWorksSection />



      {/* 9. Layered phone and opposing moving image cards (Reference F) */}
      <LayeredPhoneShowcase navigate={navigate} />

      {/* 10. Book a Cook (Transparent Pilot Presentation) */}
      <BookACookSection navigate={navigate} />

      {/* 12. Partner and kitchen invitation */}
      <PartnerInvitation navigate={navigate} />

      {/* 13. Dedicated app-download section with QR (Reference G) */}
      <AppDownloadSection navigate={navigate} />

      {/* 14. Frequently asked questions */}
      <FAQSection />

      {/* 15. Final brand CTA */}
      <FinalBrandCTA navigate={navigate} />
    </main>
  );
};
