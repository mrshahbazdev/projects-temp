import Navigation from './Navigation'
import Footer from './Footer'
import type { Translations } from '@/lib/i18n'

interface PageLayoutProps {
    t: Translations
    currentPath: string
    children: React.ReactNode
    breadcrumbSchema?: string
}

export default function PageLayout({ t, currentPath, children, breadcrumbSchema }: PageLayoutProps) {
    return (
        <main className="min-h-screen px-6 md:px-12 lg:px-24 pb-22 flex justify-center bg-background">
            {breadcrumbSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
                />
            )}
            <div className="max-w-2xl w-full flex flex-col justify-start pt-12 md:pt-24 items-center">
                <Navigation t={t} currentPath={currentPath} />
                {children}
                <div className="w-full max-w-[42rem] flex flex-col items-start">
                    <Footer t={t} />
                </div>
            </div>
        </main>
    )
}
