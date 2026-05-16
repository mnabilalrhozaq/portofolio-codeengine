'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error('Error:', error);
    }, [error]);

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-sky-50 via-white to-sky-100 px-6">
            <div className="text-center">
                <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-red-100 text-red-600">
                    <AlertTriangle className="h-10 w-10" />
                </div>
                <h1 className="mb-4 font-serif text-4xl font-bold text-gray-900">
                    Something went wrong!
                </h1>
                <p className="mb-8 text-lg text-gray-600">
                    We're sorry, but something unexpected happened. Please try again.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                    <button
                        onClick={reset}
                        className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-sky-500/30 transition-all duration-300 hover:-translate-y-1 hover:bg-sky-600 hover:shadow-xl"
                    >
                        <RefreshCw className="h-5 w-5" />
                        Try Again
                    </button>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 rounded-full border-2 border-sky-500 bg-white px-8 py-4 text-base font-semibold text-sky-600 transition-all duration-300 hover:-translate-y-1 hover:bg-sky-50"
                    >
                        <Home className="h-5 w-5" />
                        Go Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
