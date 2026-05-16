import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ParallaxBanner } from '@/components/sections/ParallaxBanner';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { HorizontalScrollSection } from '@/components/sections/HorizontalScrollSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-sky-500 focus:px-4 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-sky-600"
      >
        Skip to content
      </a>

      <main id="main-content">
        <HeroSection />
        <ServicesSection />
        <ParallaxBanner />
        <PortfolioSection />
        <HorizontalScrollSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
