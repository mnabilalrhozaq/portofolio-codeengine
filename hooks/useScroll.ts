import { useEffect, useState } from 'react';

interface ScrollPosition {
    x: number;
    y: number;
}

export function useScroll() {
    const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({ x: 0, y: 0 });
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const x = window.scrollX;
            const y = window.scrollY;
            const height = document.documentElement.scrollHeight - window.innerHeight;
            const progress = height > 0 ? y / height : 0;

            setScrollPosition({ x, y });
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial call

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return { scrollPosition, scrollProgress };
}
