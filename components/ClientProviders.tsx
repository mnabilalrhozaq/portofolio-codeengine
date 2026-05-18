'use client';

import dynamic from 'next/dynamic';
import { SmoothScrollProvider } from './SmoothScrollProvider';
import { Navbar } from './Navbar';

// Lazy load CustomCursor - not critical for initial render
const CustomCursor = dynamic(
    () => import('./CustomCursor').then(mod => ({ default: mod.CustomCursor })),
    { ssr: false }
);

interface ClientProvidersProps {
    children: React.ReactNode;
}

export function ClientProviders({ children }: ClientProvidersProps) {
    return (
        <SmoothScrollProvider>
            <CustomCursor />
            <Navbar />
            {children}
        </SmoothScrollProvider>
    );
}
