import type { Metadata } from 'next'
import { CONFIG } from '@/lib/constants'
import { en } from '@/lib/i18n'
import PageLayout from '@/components/PageLayout'

const url = CONFIG.siteUrl

export const metadata: Metadata = {
    title: en.media.title,
    description: en.media.description,
    alternates: {
        canonical: `${url}/en/media/`,
        languages: { 'sq-AL': `${url}/media/`, 'en': `${url}/en/media/`, 'x-default': `${url}/media/` },
    },
    openGraph: {
        title: en.media.title, description: en.media.description,
        url: `${url}/en/media/`, siteName: 'Marjana Ko\u00e7eku', locale: 'en_US',
        images: [{ url: `${url}/og-image.jpg`, width: 1200, height: 630, alt: en.ogImageAlt }], type: 'website',
    },
    twitter: { card: 'summary_large_image', title: en.media.title, description: en.media.description, images: [`${url}/og-image.jpg`] },
}

const breadcrumb = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: `${url}/en/` },
                { '@type': 'ListItem', position: 2, name: 'Press', item: `${url}/en/media/` },
            ],
        },
        {
            '@type': 'WebPage',
            '@id': `${url}/en/media/#webpage`,
            name: 'Press & media',
            url: `${url}/en/media/`,
            description: en.media.description,
            inLanguage: 'en',
            isPartOf: { '@id': `${url}/#website` },
            about: { '@id': `${url}/#person` },
        },
    ],
})

export default function EnMediaPage() {
    const t = en.media
    return (
        <PageLayout t={en} currentPath="/en/media/" breadcrumbSchema={breadcrumb}>
            <div className="w-full max-w-[42rem] flex flex-col items-start">
                <h1 className="text-[28px] md:text-[32px] font-[600] tracking-tight text-[#2c2c2c] mb-4">
                    Press &amp; media
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
