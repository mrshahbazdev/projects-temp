import Link from 'next/link'

export default function NotFound() {
    return (
        <main className="min-h-screen px-6 md:px-12 lg:px-24 flex items-center justify-center">
            <div className="prose-custom text-center space-y-6">
                <h1 className="text-2xl font-medium">404</h1>
                <p className="text-muted">Page not found.</p>
                <Link
                    href="/"
                    className="inline-block text-accent hover:underline"
                >
                    Return to index
                </Link>

                {/* GDPR: No error tracking */}
                <p className="text-xs text-muted mt-8">
                    Error logged for security purposes only. No personal data collected.
                </p>
            </div>
        </main>
    )
}
