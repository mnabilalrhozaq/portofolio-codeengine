'use client';

import { useEffect } from 'react';

export function ErrorSuppressor() {
    useEffect(() => {
        // Suppress unhandled promise rejections from browser extensions
        const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
            const message = event.reason?.message || '';

            // Suppress browser extension errors
            if (
                message.includes('message channel closed') ||
                message.includes('listener indicated') ||
                message.includes('Extension context invalidated')
            ) {
                event.preventDefault();
                return;
            }
        };

        // Suppress specific console warnings
        const originalWarn = console.warn;
        const originalError = console.error;

        console.warn = (...args: any[]) => {
            const message = args.join(' ');

            // Suppress specific warnings
            if (
                message.includes('THREE.Clock') ||
                message.includes('container has a non-static position') ||
                message.includes('was preloaded using link preload') ||
                message.includes('Download the React DevTools')
            ) {
                return;
            }

            originalWarn.apply(console, args);
        };

        console.error = (...args: any[]) => {
            const message = args.join(' ');

            // Suppress browser extension errors
            if (
                message.includes('message channel closed') ||
                message.includes('listener indicated') ||
                message.includes('Extension context invalidated')
            ) {
                return;
            }

            originalError.apply(console, args);
        };

        window.addEventListener('unhandledrejection', handleUnhandledRejection);

        return () => {
            window.removeEventListener('unhandledrejection', handleUnhandledRejection);
            console.warn = originalWarn;
            console.error = originalError;
        };
    }, []);

    return null;
}
