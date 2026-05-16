'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { cn } from '@/lib/utils';

const categories = ['All', 'Web', 'Mobile', 'Design', 'Branding'] as const;
type Category = typeof categories[number];

export function PortfolioSection() {
    const [activeFilter, setActiveFilter] = useState<Category>('All');

    const filteredProjects = projects.filter(
        (project) => activeFilter === 'All' || project.category === activeFilter
    );

    return (
        <section id="portfolio" className="relative bg-sky-50/30 py-24 lg:py-32">
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
                        Our Best Work
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="mb-4 font-serif text-4xl font-bold text-gray-900 md:text-5xl"
                    >
                        Portfolio
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="mx-auto max-w-2xl text-lg text-gray-600"
                    >
                        Explore our diverse portfolio of successful projects across web, mobile, and design.
                    </motion.p>
                </div>

                {/* Filter Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-12 flex flex-wrap justify-center gap-3"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            className={cn(
                                'rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300',
                                activeFilter === category
                                    ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/30'
                                    : 'bg-white text-gray-700 hover:bg-sky-50 hover:text-sky-600'
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeFilter}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                    >
                        {filteredProjects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="py-20 text-center"
                    >
                        <p className="text-gray-500">No projects found in this category.</p>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
