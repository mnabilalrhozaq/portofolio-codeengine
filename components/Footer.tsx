'use client';

import { SITE_CONFIG } from '@/lib/constants';

export function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Sitemap', href: '#' },
    ];

    return (
        <footer className="bg-navy py-12 text-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                    {/* Logo and Copyright */}
                    <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
                        <a
                            href="#"
                            className="font-serif text-2xl font-bold transition-colors hover:text-sky-400"
                        >
                            {SITE_CONFIG.name}
                        </a>
                        <p className="text-sm text-gray-400">
                            © {currentYear} {SITE_CONFIG.name}. All rights reserved.
                        </p>
                    </div>

                    {/* Footer Links */}
                    <div className="flex flex-wrap items-center justify-center gap-6">
                        {footerLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-sm text-gray-400 transition-colors hover:text-sky-400"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
