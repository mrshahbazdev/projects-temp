import type { Metadata } from 'next'
import { CONFIG } from '@/lib/constants'
import { sq } from '@/lib/i18n'
import PageLayout from '@/components/PageLayout'

const url = CONFIG.siteUrl

export const metadata: Metadata = {
    title: sq.rrugtimi.title,
    description: sq.rrugtimi.description,
    alternates: {
        canonical: `${url}/rrugtimi/`,
        languages: {
            'sq-AL': `${url}/rrugtimi/`,
            'en': `${url}/en/rrugtimi/`,
            'x-default': `${url}/rrugtimi/`,
        },
    },
    openGraph: {
        title: sq.rrugtimi.title,
        description: sq.rrugtimi.description,
        url: `${url}/rrugtimi/`,
        siteName: 'Marjana Ko\u00e7eku',
        locale: 'sq-AL',
        images: [{ url: `${url}/og-image.jpg`, width: 1200, height: 630, alt: sq.ogImageAlt }],
        type: 'website',
    },
    twitter: { card: 'summary_large_image', title: sq.rrugtimi.title, description: sq.rrugtimi.description, images: [`${url}/og-image.jpg`] },
}

const breadcrumb = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Kryefaqja', item: `${url}/` },
                { '@type': 'ListItem', position: 2, name: 'Rrug\u00ebtimi', item: `${url}/rrugtimi/` },
            ],
        },
        {
            '@type': 'WebPage',
            '@id': `${url}/rrugtimi/#webpage`,
            name: 'Rrug\u00ebtimi',
            url: `${url}/rrugtimi/`,
            description: sq.rrugtimi.description,
            inLanguage: 'sq-AL',
            isPartOf: { '@id': `${url}/#website` },
            about: { '@id': `${url}/#person` },
        },
    ],
})

export default function RrugtimiPage() {
    const t = sq.rrugtimi
    return (
        <PageLayout t={sq} currentPath="/rrugtimi/" breadcrumbSchema={breadcrumb}>
            <div className="w-full max-w-[42rem] flex flex-col items-start">
                <h1 className="text-[28px] md:text-[32px] font-[600] tracking-tight text-[#2c2c2c] mb-4">
                    Rrug&#235;timi
                </h1>
                <p className="text-[15px] leading-relaxed text-[#4a4a4a] mb-8">
                    {t.intro}
                </p>
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
