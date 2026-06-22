import type { Metadata, Viewport } from 'next'
import './globals.css'
import { CONFIG } from '@/lib/constants'
import { sq } from '@/lib/i18n'
import { personSchema } from '@/lib/schema'

const url = CONFIG.siteUrl

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
}

export const metadata: Metadata = {
    title: sq.title,
    description: sq.description,
    authors: [{ name: 'Marjana Ko\u00e7eku' }],
    creator: 'Marjana Ko\u00e7eku',
    keywords: [
        'Marjana Ko\u00e7eku', 'Marjana Koceku', 'Dukagjin', 'Shosh',
        'Mal\u00ebsi e Madhe', 'Mal\u00ebsia e Madhe', 'NeoMalsore',
        'deputete', 'deputete Shkodr\u00ebr', 'deputete e pavarur',
        'Kuvendi i Shqip\u00ebris\u00eb', 'turiz\u00ebm rural', 'agroturiz\u00ebm',
        'Shkodr\u00ebr', 'Qarku i Shkodr\u00ebs', 'veri i Shqip\u00ebris\u00eb',
        'Vajza e Dukagjinit', 'politik\u00eb veri',
    ],
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
    alternates: {
        canonical: `${url}/`,
        languages: {
            'sq-AL': `${url}/`,
            'en': `${url}/en/`,
            'x-default': `${url}/`,
        },
    },
    openGraph: {
        type: 'profile',
        locale: 'sq-AL',
        url: `${url}/`,
        siteName: 'Marjana Ko\u00e7eku',
        title: sq.title,
        description: sq.description,
        images: [{
            url: `${url}/og-image.jpg`,
            width: 1200,
            height: 630,
            alt: sq.ogImageAlt,
        }],
    },
    twitter: {
        card: 'summary_large_image',
        title: sq.title,
        description: sq.description,
        images: [`${url}/og-image.jpg`],
    },
    icons: { icon: '/favicon.svg' },
    other: {
        'geo.region': 'AL-10',
        'geo.placename': 'Shkodr\u00ebr',
    },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="sq">
            <head>
                <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
                <link rel="alternate" hrefLang="sq-AL" href={`${url}`} />
                <link rel="alternate" hrefLang="en" href={`${url}/en/`} />
                <link rel="alternate" hrefLang="x-default" href={`${url}`} />
                <link rel="author" href="/humans.txt" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
                />
            </head>
            <body>{children}</body>
        </html>
    )
}
