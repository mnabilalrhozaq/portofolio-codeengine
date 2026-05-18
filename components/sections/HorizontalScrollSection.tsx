'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Check, ChevronRight } from 'lucide-react';
import { processSteps } from '@/data/process';
import { pricingTiers } from '@/data/pricing';
import { cn } from '@/lib/utils';

function IntroPanel() {
    return (
        <div className="flex h-full w-full lg:min-w-full flex-shrink-0 flex-col items-center justify-center bg-white px-6 lg:px-16">
            <div className="max-w-2xl text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-6 font-serif text-4xl font-bold text-gray-900 md:text-5xl"
                >
                    How We Work
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-8 text-lg text-gray-600"
                >
                    Our proven process ensures your project is delivered on time, on budget, and exceeds expectations.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center justify-center gap-2 text-sky-600"
                >
                    <span className="text-sm font-semibold">Scroll to explore</span>
                    <motion.div
                        animate={{ x: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        <ChevronRight className="h-5 w-5" />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

function ProcessPanel() {
    return (
        <div className="flex h-full w-full lg:min-w-full flex-shrink-0 flex-col items-center justify-center bg-sky-50 px-4 py-6 lg:px-8 lg:py-8">
            <div className="max-w-4xl w-full">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-4 text-center font-serif text-2xl font-bold text-gray-900 md:text-3xl"
                >
                    Our Process
                </motion.h2>

                <div className="relative">
                    {/* Connection Line - Center on desktop, left on mobile */}
                    <div className="absolute left-5 md:left-1/2 md:-translate-x-1/2 top-0 h-full w-0.5 bg-sky-200" />

                    {/* Process Steps */}
                    <div className="space-y-3">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.08,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className="group relative flex items-start gap-4 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-x-6 md:items-center"
                            >
                                {/* Column 1: Left Content (desktop only, for Step 2 & 4) */}
                                <div className="hidden md:block md:text-right">
                                    {index % 2 !== 0 && (
                                        <div className="rounded-xl bg-white p-3 md:p-3.5 shadow-sm transition-all duration-300 group-hover:shadow-md">
                                            <h3 className="mb-0.5 font-serif text-base md:text-lg font-bold text-gray-900">
                                                {step.title}
                                            </h3>
                                            <p className="text-xs md:text-sm text-gray-600">{step.description}</p>
                                        </div>
                                    )}
                                </div>

                                {/* Column 2: Step Badge (aligned center on desktop) */}
                                <div className="relative z-10 flex h-10 w-10 md:h-12 md:w-12 flex-shrink-0 items-center justify-center rounded-full bg-white text-base md:text-lg font-bold text-sky-600 shadow-md ring-2 ring-sky-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white group-hover:shadow-lg md:mx-auto">
                                    {step.id}
                                </div>

                                {/* Column 3: Right Content (always visible on mobile, Step 1, 3, 5 on desktop) */}
                                <div className="flex-1 md:flex-none">
                                    <div className={cn(
                                        "rounded-xl bg-white p-3 md:p-3.5 shadow-sm transition-all duration-300 group-hover:shadow-md",
                                        index % 2 !== 0 && "md:hidden"
                                    )}>
                                        <h3 className="mb-0.5 font-serif text-base md:text-lg font-bold text-gray-900">
                                            {step.title}
                                        </h3>
                                        <p className="text-xs md:text-sm text-gray-600">{step.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function PricingPanel() {
    return (
        <div className="flex h-full w-full lg:min-w-full flex-shrink-0 flex-col items-center justify-center bg-white px-6 py-16 lg:px-16">
            <div className="max-w-6xl">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-12 text-center font-serif text-4xl font-bold text-gray-900 md:text-5xl"
                >
                    Pricing Plans
                </motion.h2>

                <div className="grid gap-8 md:grid-cols-3">
                    {pricingTiers.map((tier, index) => (
                        <motion.div
                            key={tier.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className={cn(
                                'group relative overflow-hidden rounded-2xl p-8 transition-all duration-300',
                                // Glassmorphism effect
                                'backdrop-blur-xl bg-white/80',
                                // Neumorphism shadow
                                'shadow-[8px_8px_16px_rgba(14,165,233,0.1),-8px_-8px_16px_rgba(255,255,255,0.9)]',
                                // Hover effects
                                'hover:-translate-y-2 hover:shadow-[12px_12px_24px_rgba(14,165,233,0.15),-12px_-12px_24px_rgba(255,255,255,1)]',
                                // Featured card styling
                                tier.featured
                                    ? 'border-2 border-sky-400/50 bg-gradient-to-br from-sky-50/90 to-white/90'
                                    : 'border border-gray-200/50'
                            )}
                        >
                            {/* Featured Badge */}
                            {tier.featured && (
                                <div className="absolute right-4 top-4 rounded-sm bg-amber-500 px-3 py-1 text-xs font-semibold text-navy-900">
                                    Terpopuler
                                </div>
                            )}

                            {/* Tier Label */}
                            <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-sky-600">
                                {tier.id === 'starter' ? 'Starter' : tier.id === 'professional' ? 'Profesional' : 'Enterprise'}
                            </div>

                            {/* Tier Name */}
                            <h3 className="mb-2 font-serif text-2xl font-bold text-gray-900">
                                {tier.name}
                            </h3>

                            {/* Price */}
                            <div className="mb-6">
                                <span className="font-serif text-4xl font-bold text-sky-600">
                                    {tier.price}
                                </span>
                                <span className="ml-2 block text-sm text-gray-600">{tier.period}</span>
                            </div>

                            {/* Features */}
                            <ul className="mb-8 space-y-3">
                                {tier.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <Check className="h-5 w-5 flex-shrink-0 text-sky-500" />
                                        <span className="text-sm text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <button
                                className={cn(
                                    'group relative flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300',
                                    // Remove focus outline
                                    'focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2',
                                    tier.featured
                                        ? 'bg-gradient-to-r from-sky-500 to-sky-600 text-white shadow-lg shadow-sky-500/30 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-sky-500/40'
                                        : 'backdrop-blur-sm bg-white/60 text-gray-900 shadow-[4px_4px_8px_rgba(14,165,233,0.08),-4px_-4px_8px_rgba(255,255,255,0.8)] hover:bg-sky-50/80 hover:text-sky-600 hover:shadow-[6px_6px_12px_rgba(14,165,233,0.12),-6px_-6px_12px_rgba(255,255,255,1)]'
                                )}
                            >
                                Get Started
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export function HorizontalScrollSection() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start start', 'end end'],
    });

    // Transform for 3 panels: 0% -> -200% (to show all 3 panels)
    const x = useTransform(scrollYProgress, [0, 1], ['0%', '-200%']);

    return (
        <section id="process">
            {/* Desktop: Horizontal Scroll */}
            <div ref={targetRef} className="relative hidden h-[300vh] lg:block">
                <div className="sticky top-0 h-screen overflow-hidden">
                    <motion.div style={{ x }} className="flex h-full">
                        <IntroPanel />
                        <ProcessPanel />
                        <PricingPanel />
                    </motion.div>
                </div>
            </div>

            {/* Mobile: Vertical Stack */}
            <div className="lg:hidden w-full overflow-hidden">
                <div className="min-h-screen">
                    <IntroPanel />
                </div>
                <div className="min-h-screen">
                    <ProcessPanel />
                </div>
                <div className="min-h-screen">
                    <PricingPanel />
                </div>
            </div>
        </section>
    );
}
