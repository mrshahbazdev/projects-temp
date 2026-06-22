import type { Metadata } from 'next'
import { CONFIG } from '@/lib/constants'
import { en } from '@/lib/i18n'
import PageLayout from '@/components/PageLayout'

const url = CONFIG.siteUrl

export const metadata: Metadata = {
    title: en.rrugtimi.title,
    description: en.rrugtimi.description,
    alternates: {
        canonical: `${url}/en/rrugtimi/`,
        languages: { 'sq-AL': `${url}/rrugtimi/`, 'en': `${url}/en/rrugtimi/`, 'x-default': `${url}/rrugtimi/` },
    },
    openGraph: {
        title: en.rrugtimi.title, description: en.rrugtimi.description,
        url: `${url}/en/rrugtimi/`, siteName: 'Marjana Ko\u00e7eku', locale: 'en_US',
        images: [{ url: `${url}/og-image.jpg`, width: 1200, height: 630, alt: en.ogImageAlt }], type: 'website',
    },
    twitter: { card: 'summary_large_image', title: en.rrugtimi.title, description: en.rrugtimi.description, images: [`${url}/og-image.jpg`] },
}

const breadcrumb = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: `${url}/en/` },
                { '@type': 'ListItem', position: 2, name: 'My Story', item: `${url}/en/rrugtimi/` },
            ],
        },
        {
            '@type': 'WebPage',
            '@id': `${url}/en/rrugtimi/#webpage`,
            name: 'My Story',
            url: `${url}/en/rrugtimi/`,
            description: en.rrugtimi.description,
            inLanguage: 'en',
            isPartOf: { '@id': `${url}/#website` },
            about: { '@id': `${url}/#person` },
        },
    ],
})

export default function EnRrugtimiPage() {
    const t = en.rrugtimi
    return (
        <PageLayout t={en} currentPath="/en/rrugtimi/" breadcrumbSchema={breadcrumb}>
            <div className="w-full max-w-[42rem] flex flex-col items-start">
                <h1 className="text-[28px] md:text-[32px] font-[600] tracking-tight text-[#2c2c2c] mb-4">
                    My Story
                </h1>
                <p className="text-[15px] leading-relaxed text-[#4a4a4a] mb-8">{t.intro}</p>
                {t.sections.map((section) => (
                    <section key={section.heading} className="py-4 w-full">
                        <h2 className="text-[20px] font-[500] mb-3 text-[#2c2c2c]">{section.heading}</h2>
                        <p className="text-[15px] leading-relaxed text-[#4a4a4a]">{section.text}</p>
                    </section>
                ))}
            </div>
        </PageLayout>
    )
}
