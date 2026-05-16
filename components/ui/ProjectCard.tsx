'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Project } from '@/lib/types';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
    project: Project;
    index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
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
                'group relative overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300',
                'hover:-translate-y-2 hover:shadow-xl',
                'border-2 border-sky-100 hover:border-sky-300'
            )}
        >
            {/* Thumbnail */}
            <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-sky-100 to-sky-50">
                {/* Placeholder gradient since we don't have actual images */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-sky-400 to-sky-600">
                    <ExternalLink className="h-12 w-12 text-white/50" />
                </div>

                {/* Category Tag */}
                <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-sky-700 backdrop-blur-sm">
                    {project.category}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-sky-900/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex h-full items-center justify-center">
                        <button className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-sky-600 transition-transform hover:scale-105">
                            View Project
                            <ExternalLink className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="mb-2 font-serif text-xl font-bold text-gray-900">
                    {project.title}
                </h3>

                <p className="mb-4 text-sm text-gray-600 leading-relaxed">
                    {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                        <span
                            key={idx}
                            className="rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
