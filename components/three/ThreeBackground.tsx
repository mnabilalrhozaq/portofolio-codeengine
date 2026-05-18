'use client';

import { useEffect, useState } from 'react';

export function ThreeBackground() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-50 via-white to-sky-100" />;
    }

    return (
        <div className="absolute inset-0 -z-10 overflow-hidden bg-gradient-to-br from-sky-50 via-white to-sky-100">
            {/* Decorative Elements - Similar to sampulkreativ.id */}

            {/* Large Circle Top Right */}
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-sky-200/20 blur-3xl" />

            {/* Medium Circle Bottom Left */}
            <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-sky-300/15 blur-3xl" />

            {/* Small Circle Center */}
            <div className="absolute left-1/3 top-1/2 h-64 w-64 rounded-full bg-sky-100/30 blur-2xl" />

            {/* Floating Dots Pattern */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute left-[10%] top-[20%] h-2 w-2 rounded-full bg-sky-400 animate-pulse" style={{ animationDelay: '0s', animationDuration: '3s' }} />
                <div className="absolute left-[80%] top-[30%] h-3 w-3 rounded-full bg-sky-500 animate-pulse" style={{ animationDelay: '1s', animationDuration: '4s' }} />
                <div className="absolute left-[60%] top-[70%] h-2 w-2 rounded-full bg-sky-300 animate-pulse" style={{ animationDelay: '2s', animationDuration: '3.5s' }} />
                <div className="absolute left-[20%] top-[80%] h-3 w-3 rounded-full bg-sky-400 animate-pulse" style={{ animationDelay: '0.5s', animationDuration: '4.5s' }} />
                <div className="absolute left-[90%] top-[60%] h-2 w-2 rounded-full bg-sky-500 animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '3s' }} />
            </div>

            {/* Grid Pattern Overlay */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, #0ea5e9 1px, transparent 1px),
                        linear-gradient(to bottom, #0ea5e9 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px'
                }}
            />
        </div>
    );
}
