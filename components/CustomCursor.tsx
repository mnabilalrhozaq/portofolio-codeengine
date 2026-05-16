'use client';

import { useEffect, useState } from 'react';

export function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Hide cursor on mobile
        const isMobile = window.innerWidth < 768;
        if (isMobile) return;

        setIsVisible(true);

        const updatePosition = (e: MouseEvent) => {
            try {
                setPosition({ x: e.clientX, y: e.clientY });
            } catch (error) {
                // Ignore errors from browser extensions
            }
        };

        const handleMouseOver = (e: MouseEvent) => {
            try {
                const target = e.target as HTMLElement;
                if (
                    target &&
                    target instanceof Element &&
                    (target.tagName === 'A' ||
                        target.tagName === 'BUTTON' ||
                        target.closest('a') ||
                        target.closest('button'))
                ) {
                    setIsHovering(true);
                }
            } catch (error) {
                // Ignore errors from browser extensions
            }
        };

        const handleMouseOut = (e: MouseEvent) => {
            try {
                const target = e.target as HTMLElement;
                if (
                    target &&
                    target instanceof Element &&
                    (target.tagName === 'A' ||
                        target.tagName === 'BUTTON' ||
                        target.closest('a') ||
                        target.closest('button'))
                ) {
                    setIsHovering(false);
                }
            } catch (error) {
                // Ignore errors from browser extensions
            }
        };

        window.addEventListener('mousemove', updatePosition, { passive: true });
        document.addEventListener('mouseover', handleMouseOver, { passive: true });
        document.addEventListener('mouseout', handleMouseOut, { passive: true });

        return () => {
            window.removeEventListener('mousemove', updatePosition);
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <>
            {/* Cursor dot */}
            <div
                className="fixed top-0 left-0 pointer-events-none z-[9999] transition-all duration-100"
                style={{
                    transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
                    width: isHovering ? '6px' : '10px',
                    height: isHovering ? '6px' : '10px',
                }}
            >
                <div
                    className={`w-full h-full rounded-full transition-colors duration-300 ${isHovering ? 'bg-sky-700' : 'bg-sky-500'
                        }`}
                />
            </div>

            {/* Cursor ring */}
            <div
                className="fixed top-0 left-0 pointer-events-none z-[9998] transition-all duration-[180ms] ease-out"
                style={{
                    transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
                    width: isHovering ? '52px' : '36px',
                    height: isHovering ? '52px' : '36px',
                }}
            >
                <div
                    className={`w-full h-full rounded-full border-[1.5px] transition-colors duration-300 ${isHovering ? 'border-sky-600' : 'border-sky-400'
                        }`}
                />
            </div>
        </>
    );
}
