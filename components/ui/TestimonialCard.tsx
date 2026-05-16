'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '@/lib/types';

interface TestimonialCardProps {
    testimonial: Testimonial;
    index: number;
}

export function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
    // Generate initials from name
    const initials = testimonial.name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase();

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
            }}
            className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg border-2 border-sky-100"
        >
            {/* Quote Icon */}
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-sky-50 text-sky-500">
                <Quote className="h-6 w-6" />
            </div>

            {/* Star Rating */}
            <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, idx) => (
                    <Star key={idx} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
            </div>

            {/* Quote */}
            <p className="mb-6 text-gray-700 leading-relaxed">
                "{testimonial.quote}"
            </p>

            {/* Author Info */}
            <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-sky-600 font-semibold text-white">
                    {initials}
                </div>

                {/* Name and Role */}
                <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">
                        {testimonial.role} at {testimonial.company}
                    </div>
                </div>
            </div>

            {/* Decorative gradient */}
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-sky-100/50 blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-0" />
        </motion.div>
    );
}
