import type { Metadata } from 'next'
import { CONFIG } from '@/lib/constants'
import { en } from '@/lib/i18n'
import PageLayout from '@/components/PageLayout'

const url = CONFIG.siteUrl

export const metadata: Metadata = {
    title: en.neomalsore.title,
    description: en.neomalsore.description,
    alternates: {
        canonical: `${url}/en/neomalsore/`,
        languages: { 'sq-AL': `${url}/neomalsore/`, 'en': `${url}/en/neomalsore/`, 'x-default': `${url}/neomalsore/` },
    },
    openGraph: {
        title: en.neomalsore.title, description: en.neomalsore.description,
        url: `${url}/en/neomalsore/`, siteName: 'Marjana Ko\u00e7eku', locale: 'en_US',
        images: [{ url: `${url}/og-image.jpg`, width: 1200, height: 630, alt: en.ogImageAlt }], type: 'website',
    },
    twitter: { card: 'summary_large_image', title: en.neomalsore.title, description: en.neomalsore.description, images: [`${url}/og-image.jpg`] },
}

const breadcrumb = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: `${url}/en/` },
                { '@type': 'ListItem', position: 2, name: 'NeoMalsore', item: `${url}/en/neomalsore/` },
            ],
        },
        {
            '@type': 'WebPage',
            '@id': `${url}/en/neomalsore/#webpage`,
            name: 'NeoMalsore',
            url: `${url}/en/neomalsore/`,
            description: en.neomalsore.description,
            inLanguage: 'en',
            isPartOf: { '@id': `${url}/#website` },
            about: { '@id': `${url}/#person` },
        },
        {
            '@type': 'TouristAttraction',
            name: 'NeoMalsore',
            description: en.neomalsore.intro,
            url: `${url}/en/neomalsore/`,
            address: { '@type': 'PostalAddress', addressLocality: 'Shosh', addressRegion: 'Dukagjin, Mal\u00ebsi e Madhe', addressCountry: 'AL' },
            touristType: ['Rural tourism', 'Agrotourism', 'Cultural tourism'],
        },
    ],
})

export default function EnNeomalsorePage() {
    const t = en.neomalsore
    return (
        <PageLayout t={en} currentPath="/en/neomalsore/" breadcrumbSchema={breadcrumb}>
            <div className="w-full max-w-[42rem] flex flex-col items-start">
                <h1 className="text-[28px] md:text-[32px] font-[600] tracking-tight text-[#2c2c2c] mb-4">
                    NeoMalsore
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
