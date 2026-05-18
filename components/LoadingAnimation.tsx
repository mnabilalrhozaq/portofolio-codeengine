'use client';

import { useEffect, useState } from 'react';

export function LoadingAnimation() {
    const [isLoading, setIsLoading] = useState(true);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Hide loading immediately when DOM is ready
        const hideLoading = () => {
            setIsLoading(false);
            // Fade out animation
            setTimeout(() => setIsVisible(false), 200);
        };

        // Check if already loaded
        if (document.readyState === 'complete') {
            hideLoading();
            return;
        }

        // Wait for DOM content loaded (faster than window.load)
        if (document.readyState === 'interactive') {
            hideLoading();
            return;
        }

        // Fallback: hide after very short delay
        const timer = setTimeout(hideLoading, 100);

        // Listen for DOM ready
        document.addEventListener('DOMContentLoaded', hideLoading);

        return () => {
            clearTimeout(timer);
            document.removeEventListener('DOMContentLoaded', hideLoading);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div
            className={`fixed inset-0 z-[10000] flex items-center justify-center bg-white transition-opacity duration-200 ${isLoading ? 'opacity-100' : 'opacity-0'
                }`}
        >
            <div className="flex flex-col items-center gap-4">
                {/* Logo */}
                <div className="text-4xl font-serif font-black text-sky-700">
                    Code<span className="text-amber-500">Engine</span>
                </div>

                {/* Loading spinner - pure CSS */}
                <div className="w-8 h-8 border-2 border-sky-200 border-t-sky-600 rounded-full animate-spin" />
            </div>
        </div>
    );
}
