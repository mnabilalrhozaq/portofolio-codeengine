'use client';

import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

// Lazy load Three.js background for better performance
const ThreeBackground = lazy(() =>
    import('@/components/three/ThreeBackground').then((mod) => ({
        default: mod.ThreeBackground,
    }))
);

const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1] as const,
        },
    }),
};

export function HeroSection() {
    const scrollToNext = () => {
        const servicesSection = document.querySelector('#services');
        if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-sky-50 via-white to-sky-100">
            {/* Three.js Background - Lazy loaded */}
            <Suspense fallback={null}>
                <ThreeBackground />
            </Suspense>

            {/* Content */}
            <div className="relative z-10 w-full px-6 py-32 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-col items-center text-center">
                        {/* Badge */}
                        <motion.div
                            custom={0}
                            initial="hidden"
                            animate="visible"
                            variants={fadeUpVariants}
                            className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-sm font-medium text-sky-700 shadow-lg backdrop-blur-sm"
                        >
                            <Sparkles className="h-4 w-4" />
                            Digital Solutions Studio
                        </motion.div>

                        {/* Main Headline */}
                        <motion.h1
                            custom={1}
                            initial="hidden"
                            animate="visible"
                            variants={fadeUpVariants}
                            className="mb-6 max-w-4xl font-serif text-5xl font-bold leading-tight text-gray-900 md:text-6xl lg:text-7xl"
                        >
                            {SITE_CONFIG.tagline}
                        </motion.h1>

                        {/* Subheadline */}
                        <motion.p
                            custom={2}
                            initial="hidden"
                            animate="visible"
                            variants={fadeUpVariants}
                            className="mb-10 max-w-2xl text-lg text-gray-600 md:text-xl"
                        >
                            We transform ideas into exceptional digital experiences through innovative web development, mobile apps, and cutting-edge design solutions.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            custom={3}
                            initial="hidden"
                            animate="visible"
                            variants={fadeUpVariants}
                            className="flex flex-col gap-4 sm:flex-row"
                        >
                            <button
                                onClick={() => {
                                    const contactSection = document.querySelector('#contact');
                                    if (contactSection) {
                                        contactSection.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                                className="rounded-full bg-sky-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-sky-500/30 transition-all duration-300 hover:-translate-y-1 hover:bg-sky-600 hover:shadow-2xl hover:shadow-sky-500/40"
                            >
                                Start Your Project
                            </button>
                            <button
                                onClick={() => {
                                    const portfolioSection = document.querySelector('#portfolio');
                                    if (portfolioSection) {
                                        portfolioSection.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                                className="rounded-full border-2 border-sky-500 bg-white px-8 py-4 text-base font-semibold text-sky-600 transition-all duration-300 hover:-translate-y-1 hover:bg-sky-50"
                            >
                                View Our Work
                            </button>
                        </motion.div>

                        {/* Statistics - Below Buttons, Centered */}
                        <motion.div
                            custom={4}
                            initial="hidden"
                            animate="visible"
                            variants={fadeUpVariants}
                            className="mt-16 flex flex-wrap items-center justify-center gap-x-12 gap-y-8"
                        >
                            <div className="text-center">
                                <div className="font-serif text-4xl font-bold text-sky-600">150+</div>
                                <div className="text-sm text-gray-600">Projects Completed</div>
                            </div>
                            <div className="text-center">
                                <div className="font-serif text-4xl font-bold text-sky-600">50+</div>
                                <div className="text-sm text-gray-600">Happy Clients</div>
                            </div>
                            <div className="text-center">
                                <div className="font-serif text-4xl font-bold text-sky-600">8+</div>
                                <div className="text-sm text-gray-600">Years Experience</div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    onClick={scrollToNext}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sky-600 transition-colors hover:text-sky-700"
                    aria-label="Scroll to next section"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        <ArrowDown className="h-8 w-8" />
                    </motion.div>
                </motion.button>
            </div>
        </section>
    );
}
