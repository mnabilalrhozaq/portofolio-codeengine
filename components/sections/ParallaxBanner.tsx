'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function ParallaxBanner() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    // Parallax effect for the grid pattern
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

    const scrollToContact = () => {
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            ref={containerRef}
            className="relative overflow-hidden bg-gradient-to-br from-sky-600 via-sky-500 to-sky-700"
            style={{ minHeight: '320px' }}
        >
            {/* Animated Grid Pattern */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 opacity-20"
            >
                <div
                    className="h-full w-full"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, white 1px, transparent 1px),
                            linear-gradient(to bottom, white 1px, transparent 1px)
                        `,
                        backgroundSize: '60px 60px',
                    }}
                />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 mx-auto flex min-h-[320px] max-w-4xl flex-col items-center justify-center px-6 py-20 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl"
                >
                    Ready to Transform Your Digital Presence?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-8 max-w-2xl text-lg text-sky-50"
                >
                    Let's collaborate to bring your vision to life with cutting-edge technology and creative excellence.
                </motion.p>

                <motion.button
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    onClick={scrollToContact}
                    className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-sky-600 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                    Get in Touch
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </motion.button>
            </div>

            {/* Decorative circles */}
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        </section>
    );
}
