'use client';

import { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';

interface SmoothScrollProviderProps {
    children: React.ReactNode;
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
    const lenisRef = useRef<Lenis | null>(null);
    const rafRef = useRef<number | null>(null);
    const [isReady, setIsReady] = useState(false);

    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        // Delay initialization to not block initial render
        const initTimer = setTimeout(() => {
            setIsReady(true);
        }, 150);

        // Track window size dynamically for responsive smooth scroll
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 1024);
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);

        return () => {
            clearTimeout(initTimer);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (!isReady || !isDesktop) {
            // Clean up Lenis if we resize to mobile
            if (lenisRef.current) {
                if (rafRef.current) {
                    cancelAnimationFrame(rafRef.current);
                    rafRef.current = null;
                }
                lenisRef.current.destroy();
                lenisRef.current = null;
            }
            return;
        }

        // Check for prefers-reduced-motion
        const prefersReducedMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches;

        if (prefersReducedMotion) {
            return; // Don't initialize smooth scroll if user prefers reduced motion
        }

        // Initialize Lenis with optimized settings
        const lenis = new Lenis({
            duration: 1.0,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            infinite: false,
            autoResize: true,
        });

        lenisRef.current = lenis;

        // Optimized animation frame loop
        function raf(time: number) {
            lenis.raf(time);
            rafRef.current = requestAnimationFrame(raf);
        }

        rafRef.current = requestAnimationFrame(raf);

        // Pause on tab visibility change
        const handleVisibilityChange = () => {
            if (document.hidden) {
                if (rafRef.current) {
                    cancelAnimationFrame(rafRef.current);
                }
            } else {
                rafRef.current = requestAnimationFrame(raf);
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
            if (lenisRef.current) {
                lenisRef.current.destroy();
                lenisRef.current = null;
            }
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, [isReady, isDesktop]);

    return <>{children}</>;
}
