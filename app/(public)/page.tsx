// app/(public)/page.tsx

import HeroSection from '@/components/landing/HeroSection';
import PlatformStatisticsSection from '@/components/landing/PlatformStatisticsSection';
import WhyChooseUsSection from '@/components/landing/WhyChooseUsSection';
import LearningPathSection from '@/components/landing/LearningPathSection';

export default function PublicHomePage() {
  return (
    <main>
      <HeroSection />
      <PlatformStatisticsSection />
      <LearningPathSection />
      <WhyChooseUsSection />
    </main>
  );
}