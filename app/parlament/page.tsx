import type { Metadata } from 'next'
import { CONFIG } from '@/lib/constants'
import { sq } from '@/lib/i18n'
import PageLayout from '@/components/PageLayout'

const url = CONFIG.siteUrl

export const metadata: Metadata = {
    title: sq.parlament.title,
    description: sq.parlament.description,
    alternates: {
        canonical: `${url}/parlament/`,
        languages: { 'sq-AL': `${url}/parlament/`, 'en': `${url}/en/parlament/`, 'x-default': `${url}/parlament/` },
    },
    openGraph: {
        title: sq.parlament.title, description: sq.parlament.description,
        url: `${url}/parlament/`, siteName: 'Marjana Ko\u00e7eku', locale: 'sq-AL',
        images: [{ url: `${url}/og-image.jpg`, width: 1200, height: 630, alt: sq.ogImageAlt }], type: 'website',
    },
    twitter: { card: 'summary_large_image', title: sq.parlament.title, description: sq.parlament.description, images: [`${url}/og-image.jpg`] },
}

const breadcrumb = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Kryefaqja', item: `${url}/` },
                { '@type': 'ListItem', position: 2, name: "N'Parlament", item: `${url}/parlament/` },
            ],
        },
        {
            '@type': 'WebPage',
            '@id': `${url}/parlament/#webpage`,
            name: "N'Parlament",
            url: `${url}/parlament/`,
            description: sq.parlament.description,
            inLanguage: 'sq-AL',
            isPartOf: { '@id': `${url}/#website` },
            about: { '@id': `${url}/#person` },
        },
        {
            '@type': 'GovernmentService',
            name: "N'Parlament",
            description: sq.parlament.intro,
            url: `${url}/parlament/`,
            areaServed: { '@type': 'AdministrativeArea', name: 'Shkodr\u00ebr County' },
            provider: { '@id': `${url}/#person` },
        },
    ],
})

export default function ParlamentPage() {
    const t = sq.parlament
    return (
        <PageLayout t={sq} currentPath="/parlament/" breadcrumbSchema={breadcrumb}>
            <div className="w-full max-w-[42rem] flex flex-col items-start">
                <h1 className="text-[28px] md:text-[32px] font-[600] tracking-tight text-[#2c2c2c] mb-4">
                    N&apos;Parlament
                </h1>
                <p className="text-[15px] leading-relaxed text-[#4a4a4a] mb-4">{t.intro}</p>
                <p className="text-[15px] text-[#6b6b6b] italic mb-8">{t.role}</p>

                <section className="py-4 w-full">
                    <h2 className="text-[20px] font-[500] mb-3 text-[#2c2c2c]">{t.committees.title}</h2>
                    <p className="text-[15px] text-[#4a4a4a]">
                        {t.committees.name}, <span className="text-[#6b6b6b]">{t.committees.role}</span>
                    </p>
                </section>

                <section className="py-4 w-full">
                    <h2 className="text-[20px] font-[500] mb-4 text-[#2c2c2c]">{t.events.title}</h2>
                    <div className="space-y-6">
                        {t.events.items.map((item) => (
                            <div key={item.date}>
                                <p className="text-[13px] text-[#6b6b6b] mb-1">{item.date}</p>
                                <h3 className="text-[16px] font-[500] text-[#2c2c2c] mb-1">{item.heading}</h3>
                                <p className="text-[15px] leading-relaxed text-[#4a4a4a]">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="py-4 w-full">
                    <h2 className="text-[20px] font-[500] mb-4 text-[#2c2c2c]">{t.initiatives.title}</h2>
                    <div className="space-y-6">
                        {t.initiatives.items.map((item) => (
                            <div key={item.heading}>
                                <h3 className="text-[16px] font-[500] text-[#2c2c2c] mb-1">{item.heading}</h3>
                                <p className="text-[15px] leading-relaxed text-[#4a4a4a]">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </PageLayout>
    )
}
