import type { Metadata } from 'next'
import { CONFIG } from '@/lib/constants'
import { en } from '@/lib/i18n'

const url = CONFIG.siteUrl

export const metadata: Metadata = {
    title: en.title,
    description: en.description,
    authors: [{ name: 'Marjana Ko\u00e7eku' }],
    creator: 'Marjana Ko\u00e7eku',
    keywords: [
        'Marjana Ko\u00e7eku', 'Marjana Koceku', 'Dukagjin', 'Shosh',
        'Mal\u00ebsi e Madhe', 'Mal\u00ebsia e Madhe', 'NeoMalsore',
        'Albanian MP', 'independent MP', 'Shkodr\u00ebr MP',
        'Parliament of Albania', 'rural tourism Albania', 'agrotourism Albania',
        'Shkodr\u00ebr', 'Shkodr\u00ebr County', 'northern Albania',
        'From Dukagjin', 'northern Albania politics',
    ],
    alternates: {
        canonical: `${url}/en/`,
        languages: {
            'sq-AL': `${url}/`,
            'en': `${url}/en/`,
            'x-default': `${url}/`,
        },
    },
    openGraph: {
        type: 'profile',
        locale: 'en_US',
        url: `${url}/en/`,
        siteName: 'Marjana Ko\u00e7eku',
        title: en.title,
        description: en.description,
        images: [{ url: `${url}/og-image.jpg`, width: 1200, height: 630, alt: en.ogImageAlt }],
    },
    twitter: {
        card: 'summary_large_image',
        title: en.title,
        description: en.description,
        images: [`${url}/og-image.jpg`],
    },
}

export default function EnLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
