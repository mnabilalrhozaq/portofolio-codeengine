'use client';

import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { Service } from '@/lib/types';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
    service: Service;
    index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
    // Dynamically get the icon component
    const IconComponent = (LucideIcons as any)[service.icon] || LucideIcons.Code2;

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
            className={cn(
                'group relative overflow-hidden rounded-2xl p-8 transition-all duration-300',
                // Glassmorphism + Neumorphism
                'backdrop-blur-sm bg-white/90',
                'shadow-[8px_8px_16px_rgba(14,165,233,0.08),-8px_-8px_16px_rgba(255,255,255,0.9)]',
                'hover:-translate-y-2 hover:shadow-[12px_12px_24px_rgba(14,165,233,0.12),-12px_-12px_24px_rgba(255,255,255,1)]',
                'border border-gray-100/50',
                'before:absolute before:inset-0 before:rounded-2xl before:border-t-4 before:border-transparent before:transition-colors hover:before:border-sky-500'
            )}
        >
            {/* Icon */}
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-sky-50 text-sky-600 transition-colors group-hover:bg-sky-500 group-hover:text-white">
                <IconComponent className="h-7 w-7" />
            </div>

            {/* Title */}
            <h3 className="mb-3 font-serif text-2xl font-bold text-gray-900">
                {service.title}
            </h3>

            {/* Description */}
            <p className="mb-6 text-gray-600 leading-relaxed">
                {service.description}
            </p>

            {/* Features */}
            <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                        {feature}
                    </li>
                ))}
            </ul>

            {/* Hover gradient overlay */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-50/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </motion.div>
    );
}
