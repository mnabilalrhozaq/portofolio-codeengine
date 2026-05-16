'use client';

import { motion } from 'framer-motion';
import { testimonials } from '@/data/testimonials';
import { TestimonialCard } from '@/components/ui/TestimonialCard';

export function TestimonialsSection() {
    return (
        <section id="testimonials" className="relative bg-sky-50/30 py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="mb-4 inline-block rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700"
                    >
                        Client Success Stories
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="mb-4 font-serif text-4xl font-bold text-gray-900 md:text-5xl"
                    >
                        What Our Clients Say
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="mx-auto max-w-2xl text-lg text-gray-600"
                    >
                        Don't just take our word for it. Here's what our clients have to say about working with us.
                    </motion.p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={testimonial.id}
                            testimonial={testimonial}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
