import type { Metadata } from 'next'
import { CONFIG } from '@/lib/constants'
import { sq } from '@/lib/i18n'
import PageLayout from '@/components/PageLayout'

const url = CONFIG.siteUrl

export const metadata: Metadata = {
    title: sq.media.title,
    description: sq.media.description,
    alternates: {
        canonical: `${url}/media/`,
        languages: { 'sq-AL': `${url}/media/`, 'en': `${url}/en/media/`, 'x-default': `${url}/media/` },
    },
    openGraph: {
        title: sq.media.title, description: sq.media.description,
        url: `${url}/media/`, siteName: 'Marjana Ko\u00e7eku', locale: 'sq-AL',
        images: [{ url: `${url}/og-image.jpg`, width: 1200, height: 630, alt: sq.ogImageAlt }], type: 'website',
    },
    twitter: { card: 'summary_large_image', title: sq.media.title, description: sq.media.description, images: [`${url}/og-image.jpg`] },
}

const breadcrumb = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Kryefaqja', item: `${url}/` },
                { '@type': 'ListItem', position: 2, name: 'Media', item: `${url}/media/` },
            ],
        },
        {
            '@type': 'WebPage',
            '@id': `${url}/media/#webpage`,
            name: 'Media',
            url: `${url}/media/`,
            description: sq.media.description,
            inLanguage: 'sq-AL',
            isPartOf: { '@id': `${url}/#website` },
            about: { '@id': `${url}/#person` },
        },
    ],
})

export default function MediaPage() {
    const t = sq.media
    return (
        <PageLayout t={sq} currentPath="/media/" breadcrumbSchema={breadcrumb}>
            <div className="w-full max-w-[42rem] flex flex-col items-start">
                <h1 className="text-[28px] md:text-[32px] font-[600] tracking-tight text-[#2c2c2c] mb-4">
                    Media
                </h1>
                <p className="text-[15px] leading-relaxed text-[#4a4a4a] mb-8">{t.description}</p>
                <div className="space-y-6 w-full">
                    {t.items.map((item) => (
                        <article key={item.headline} className="py-2">
                            <p className="text-[13px] text-[#6b6b6b] mb-1">
                                {item.type} &middot; {item.source} &middot; {item.date}
                            </p>
                            <h2 className="text-[16px] font-[500] text-[#2c2c2c]">{item.headline}</h2>
                        </article>
                    ))}
                </div>
            </div>
        </PageLayout>
    )
}
