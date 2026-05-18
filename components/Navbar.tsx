'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants';

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setMobileMenuOpen(false); // Close mobile menu immediately

        const element = document.querySelector(href);
        if (element) {
            // Subtract navbar height so section content is not clipped under the fixed header
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            setTimeout(() => {
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth',
                });
            }, 50); // Let the menu close animation start first to avoid layout shift conflicts
        }
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${scrolled
                    ? 'bg-white/80 backdrop-blur-md shadow-lg shadow-sky-500/10'
                    : 'bg-white/80 backdrop-blur-md'
                    } border-b border-sky-500/10`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-xl sm:text-2xl font-serif font-black text-sky-700 tracking-tight hover:text-sky-600 transition-colors"
                    >
                        Code<span className="text-accent">Engine</span>
                    </Link>

                    {/* Desktop Navigation Links */}
                    <ul className="hidden lg:flex items-center gap-8">
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

                    {/* Right Side: Get Started + Hamburger */}
                    <div className="flex items-center gap-3">
                        {/* CTA Button */}
                        <Link
                            href="#contact"
                            onClick={(e) => handleNavClick(e, '#contact')}
                            className="bg-sky-600 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold uppercase tracking-wider border-2 border-sky-600 hover:bg-transparent hover:text-sky-600 transition-all duration-300"
                        >
                            Get Started
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden p-2 text-gray-600 hover:text-sky-600 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-[73px] left-0 right-0 z-[999] bg-white/95 backdrop-blur-md border-b border-sky-500/10 lg:hidden"
                    >
                        <ul className="px-6 py-4 space-y-4">
                            {NAV_LINKS.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                        className="block text-base font-medium text-gray-700 hover:text-sky-600 transition-colors py-2"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
