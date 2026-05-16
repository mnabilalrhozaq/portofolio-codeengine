'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function LoadingAnimation() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Minimum 1 second display
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[10000] flex items-center justify-center bg-white"
                    style={{ overflow: 'hidden' }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.5,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="flex flex-col items-center gap-4"
                    >
                        {/* Logo */}
                        <div className="text-4xl font-serif font-black text-sky-700">
                            Code<span className="text-accent">Engine</span>
                        </div>

                        {/* Loading spinner */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: 'linear',
                            }}
                            className="w-8 h-8 border-2 border-sky-200 border-t-sky-600 rounded-full"
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
