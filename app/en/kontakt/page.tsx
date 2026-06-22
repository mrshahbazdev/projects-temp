import type { Metadata } from 'next'
import { CONFIG } from '@/lib/constants'
import { en } from '@/lib/i18n'
import PageLayout from '@/components/PageLayout'
import ContactForm from '@/components/ContactForm'

const url = CONFIG.siteUrl

export const metadata: Metadata = {
    title: en.kontakt.title,
    description: en.kontakt.description,
    alternates: {
        canonical: `${url}/en/kontakt/`,
        languages: { 'sq-AL': `${url}/kontakt/`, 'en': `${url}/en/kontakt/`, 'x-default': `${url}/kontakt/` },
    },
    openGraph: {
        title: en.kontakt.title, description: en.kontakt.description,
        url: `${url}/en/kontakt/`, siteName: 'Marjana Ko\u00e7eku', locale: 'en_US',
        images: [{ url: `${url}/og-image.jpg`, width: 1200, height: 630, alt: en.ogImageAlt }], type: 'website',
    },
    twitter: { card: 'summary_large_image', title: en.kontakt.title, description: en.kontakt.description, images: [`${url}/og-image.jpg`] },
}

const breadcrumb = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: `${url}/en/` },
                { '@type': 'ListItem', position: 2, name: 'Contact', item: `${url}/en/kontakt/` },
            ],
        },
        {
            '@type': 'WebPage',
            '@id': `${url}/en/kontakt/#webpage`,
            name: 'Contact',
            url: `${url}/en/kontakt/`,
            description: en.kontakt.description,
            inLanguage: 'en',
            isPartOf: { '@id': `${url}/#website` },
            about: { '@id': `${url}/#person` },
        },
    ],
})

export default function EnKontaktPage() {
    const t = en.kontakt
    return (
        <PageLayout t={en} currentPath="/en/kontakt/" breadcrumbSchema={breadcrumb}>
            <div className="w-full max-w-[42rem] flex flex-col items-start">
                <h1 className="text-[28px] md:text-[32px] font-[600] tracking-tight text-[#2c2c2c] mb-4">
                    Contact
                </h1>
                <p className="text-[15px] leading-relaxed text-[#4a4a4a] mb-8">{t.intro}</p>
                <ContactForm t={t} />
            </div>
        </PageLayout>
    )
}
