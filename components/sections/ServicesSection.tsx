'use client';

import { motion } from 'framer-motion';
import { services } from '@/data/services';
import { ServiceCard } from '@/components/ui/ServiceCard';

export function ServicesSection() {
    return (
        <section id="services" className="relative bg-white py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="mb-4 inline-block rounded-full bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700"
                    >
                        What We Do
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="mb-4 font-serif text-4xl font-bold text-gray-900 md:text-5xl"
                    >
                        Our Services
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="mx-auto max-w-2xl text-lg text-gray-600"
                    >
                        We offer comprehensive digital solutions tailored to your business needs, from concept to deployment and beyond.
                    </motion.p>
                </div>

                {/* Services Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <ServiceCard key={service.id} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
