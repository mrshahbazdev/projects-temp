import type { Metadata, Viewport } from 'next'
import './globals.css'

const title = 'Mark Martinaj — Digital Governance & Distributed Systems Architecture'
const description =
    'Protocol-level architecture for embedded governance logic and enforceable rule frameworks. Distributed systems, platform design, and security oversight.'
const url = 'https://markmartinaj.com'

const personSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'Person',
            name: 'Mark Martinaj',
            jobTitle: 'Digital Governance & Distributed Systems Architecture',
            description,
            url,
            email: 'contact@markmartinaj.com',
            worksFor: { '@type': 'Organization', name: 'Independent' },
            knowsAbout: [
                { '@type': 'Thing', name: 'Protocol Architecture', description: 'Core protocol logic and participation boundary design' },
                { '@type': 'Thing', name: 'Governance Systems', description: 'Voting mechanics, quorum structures, execution frameworks' },
                { '@type': 'Thing', name: 'Distributed Systems', description: 'Consensus modelling, fault tolerance, finality guarantees' },
                { '@type': 'Thing', name: 'Economic Rule Modelling', description: 'Supply mechanisms, incentive alignment, cap structures' },
                { '@type': 'Thing', name: 'Security Oversight', description: 'Cryptographic enforcement, circuit verification, independent review' },
            ],
        },
        {
            '@type': 'WebSite',
            name: 'Mark Martinaj',
            url,
            description: 'Digital Governance & Distributed Systems Architecture',
        },
        {
            '@type': 'ProfessionalService',
            name: 'Mark Martinaj',
            description,
            url,
            email: 'contact@markmartinaj.com',
            areaServed: 'Global',
            serviceType: ['Protocol Architecture', 'Governance System Design', 'Distributed Systems Modelling', 'Security Review Oversight'],
        },
    ],
})

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
}

export const metadata: Metadata = {
    title,
    description,
    keywords: ['protocol architecture', 'governance systems', 'distributed systems', 'economic rule modelling', 'security oversight', 'digital governance'],
    authors: [{ name: 'Mark Martinaj' }],
    creator: 'Mark Martinaj',
    publisher: 'Mark Martinaj',
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, 'max-image-preview': 'none', 'max-snippet': -1 },
    },
    alternates: { canonical: url },
    openGraph: {
        type: 'profile',
        locale: 'en_US',
        url,
        siteName: 'Mark Martinaj',
        title,
        description,
        firstName: 'Mark',
        lastName: 'Martinaj',
    },
    twitter: { card: 'summary', title, description },
    icons: { icon: '/favicon.svg', shortcut: '/favicon.svg', apple: '/favicon.svg' },
    other: {
        'entity-type': 'Person',
        'entity-profession': 'Digital Governance & Distributed Systems Architecture',
        'entity-expertise': 'Protocol Architecture, Governance Systems, Distributed Systems, Economic Rule Modelling, Security Oversight',
    },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: personSchema }} />
                <link rel="author" href="/humans.txt" />
            </head>
            <body>{children}</body>
        </html>
    )
}
