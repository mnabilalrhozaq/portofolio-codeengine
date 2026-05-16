'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants';

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${scrolled
                    ? 'bg-white/80 backdrop-blur-md shadow-lg shadow-sky-500/10'
                    : 'bg-white/80 backdrop-blur-md'
                } border-b border-sky-500/10`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-2xl font-serif font-black text-sky-700 tracking-tight hover:text-sky-600 transition-colors"
                >
                    Code<span className="text-accent">Engine</span>
                </Link>

                {/* Navigation Links - Hidden on mobile */}
                <ul className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="relative text-sm font-medium text-gray-600 uppercase tracking-wider hover:text-sky-600 transition-colors group"
                            >
                                {link.label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-500 transition-all duration-300 group-hover:w-full" />
                            </a>
                        </li>
                    ))}
                </ul>

                {/* CTA Button */}
                <Link
                    href="#contact"
                    onClick={(e) => handleNavClick(e, '#contact')}
                    className="bg-sky-600 text-white px-6 py-2.5 rounded text-sm font-semibold uppercase tracking-wider border-2 border-sky-600 hover:bg-transparent hover:text-sky-600 transition-all duration-300"
                >
                    Get Started
                </Link>
            </div>
        </motion.nav>
    );
}
