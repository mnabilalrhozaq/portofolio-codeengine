import dynamic from 'next/dynamic';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { Footer } from '@/components/Footer';

// Lazy load sections below the fold for faster initial load
const ParallaxBanner = dynamic(
  () => import('@/components/sections/ParallaxBanner').then(mod => ({ default: mod.ParallaxBanner })),
  { ssr: true }
);

const PortfolioSection = dynamic(
  () => import('@/components/sections/PortfolioSection').then(mod => ({ default: mod.PortfolioSection })),
  { ssr: true }
);

const HorizontalScrollSection = dynamic(
  () => import('@/components/sections/HorizontalScrollSection').then(mod => ({ default: mod.HorizontalScrollSection })),
  { ssr: true }
);

const TestimonialsSection = dynamic(
  () => import('@/components/sections/TestimonialsSection').then(mod => ({ default: mod.TestimonialsSection })),
  { ssr: true }
);

const ContactSection = dynamic(
  () => import('@/components/sections/ContactSection').then(mod => ({ default: mod.ContactSection })),
  { ssr: true }
);

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
