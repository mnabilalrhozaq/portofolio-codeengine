import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-sky-50 via-white to-sky-100 px-6">
            <div className="text-center">
                <h1 className="mb-4 font-serif text-9xl font-bold text-sky-500">404</h1>
                <h2 className="mb-4 font-serif text-3xl font-bold text-gray-900">
                    Page Not Found
                </h2>
                <p className="mb-8 text-lg text-gray-600">
                    Sorry, we couldn't find the page you're looking for.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-sky-500/30 transition-all duration-300 hover:-translate-y-1 hover:bg-sky-600 hover:shadow-xl"
                    >
                        <Home className="h-5 w-5" />
                        Go Home
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center gap-2 rounded-full border-2 border-sky-500 bg-white px-8 py-4 text-base font-semibold text-sky-600 transition-all duration-300 hover:-translate-y-1 hover:bg-sky-50"
                    >
                        <ArrowLeft className="h-5 w-5" />
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
}
