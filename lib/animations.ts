import { Variants } from 'framer-motion';

// Custom easing curve for smooth animations
const customEase = [0.16, 1, 0.3, 1] as const;

// Fade up animation
export const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: customEase,
        },
    },
};

// Stagger children animation
export const staggerContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

// Scale in animation
export const scaleInVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: customEase,
        },
    },
};

// Slide in from left
export const slideInLeftVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: customEase,
        },
    },
};

// Slide in from right
export const slideInRightVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: customEase,
        },
    },
};

// Fade in animation
export const fadeInVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: customEase,
        },
    },
};

// Slide up animation
export const slideUpVariants: Variants = {
    hidden: { y: '100%' },
    visible: {
        y: 0,
        transition: {
            duration: 0.6,
            ease: customEase,
        },
    },
};

// Animation configuration
export const animationConfig = {
    // Respect user's motion preferences
    reducedMotion: {
        hidden: { opacity: 1 },
        visible: { opacity: 1 },
    },
    // Viewport detection settings for scroll animations
    viewport: {
        once: true, // Trigger animation only once
        margin: '-100px', // Start animation 100px before element enters viewport
        amount: 0.3, // Trigger when 30% of element is visible
    },
};

// Helper function to check if user prefers reduced motion
export function prefersReducedMotion(): boolean {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Helper function to get appropriate variants based on motion preference
export function getVariants(variants: Variants): Variants {
    return prefersReducedMotion() ? animationConfig.reducedMotion : variants;
}
