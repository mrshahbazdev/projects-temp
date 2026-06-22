import type { Metadata } from 'next'
import { CONFIG } from '@/lib/constants'
import { sq } from '@/lib/i18n'
import PageLayout from '@/components/PageLayout'
import ContactForm from '@/components/ContactForm'

const url = CONFIG.siteUrl

export const metadata: Metadata = {
    title: sq.kontakt.title,
    description: sq.kontakt.description,
    alternates: {
        canonical: `${url}/kontakt/`,
        languages: { 'sq-AL': `${url}/kontakt/`, 'en': `${url}/en/kontakt/`, 'x-default': `${url}/kontakt/` },
    },
    openGraph: {
        title: sq.kontakt.title, description: sq.kontakt.description,
        url: `${url}/kontakt/`, siteName: 'Marjana Ko\u00e7eku', locale: 'sq-AL',
        images: [{ url: `${url}/og-image.jpg`, width: 1200, height: 630, alt: sq.ogImageAlt }], type: 'website',
    },
    twitter: { card: 'summary_large_image', title: sq.kontakt.title, description: sq.kontakt.description, images: [`${url}/og-image.jpg`] },
}

const breadcrumb = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Kryefaqja', item: `${url}/` },
                { '@type': 'ListItem', position: 2, name: 'Kontakt', item: `${url}/kontakt/` },
            ],
        },
        {
            '@type': 'WebPage',
            '@id': `${url}/kontakt/#webpage`,
            name: 'Kontakt',
            url: `${url}/kontakt/`,
            description: sq.kontakt.description,
            inLanguage: 'sq-AL',
            isPartOf: { '@id': `${url}/#website` },
            about: { '@id': `${url}/#person` },
        },
    ],
})

export default function KontaktPage() {
    const t = sq.kontakt
    return (
        <PageLayout t={sq} currentPath="/kontakt/" breadcrumbSchema={breadcrumb}>
            <div className="w-full max-w-[42rem] flex flex-col items-start">
                <h1 className="text-[28px] md:text-[32px] font-[600] tracking-tight text-[#2c2c2c] mb-4">
                    Kontakt
                </h1>
                <p className="text-[15px] leading-relaxed text-[#4a4a4a] mb-8">{t.intro}</p>
                <ContactForm t={t} />
            </div>
        </PageLayout>
    )
}
