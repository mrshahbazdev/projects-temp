import type { Metadata } from 'next'
import { CONFIG } from '@/lib/constants'
import { en } from '@/lib/i18n'
import PageLayout from '@/components/PageLayout'

const url = CONFIG.siteUrl

export const metadata: Metadata = {
    title: en.parlament.title,
    description: en.parlament.description,
    alternates: {
        canonical: `${url}/en/parlament/`,
        languages: { 'sq-AL': `${url}/parlament/`, 'en': `${url}/en/parlament/`, 'x-default': `${url}/parlament/` },
    },
    openGraph: {
        title: en.parlament.title, description: en.parlament.description,
        url: `${url}/en/parlament/`, siteName: 'Marjana Ko\u00e7eku', locale: 'en_US',
        images: [{ url: `${url}/og-image.jpg`, width: 1200, height: 630, alt: en.ogImageAlt }], type: 'website',
    },
    twitter: { card: 'summary_large_image', title: en.parlament.title, description: en.parlament.description, images: [`${url}/og-image.jpg`] },
}

const breadcrumb = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: `${url}/en/` },
                { '@type': 'ListItem', position: 2, name: 'Parliament', item: `${url}/en/parlament/` },
            ],
        },
        {
            '@type': 'WebPage',
            '@id': `${url}/en/parlament/#webpage`,
            name: 'Parliament',
            url: `${url}/en/parlament/`,
            description: en.parlament.description,
            inLanguage: 'en',
            isPartOf: { '@id': `${url}/#website` },
            about: { '@id': `${url}/#person` },
        },
        {
            '@type': 'GovernmentService',
            name: 'Parliament',
            description: en.parlament.intro,
            url: `${url}/en/parlament/`,
            areaServed: { '@type': 'AdministrativeArea', name: 'Shkodr\u00ebr County' },
            provider: { '@id': `${url}/#person` },
        },
    ],
})

export default function EnParlamentPage() {
    const t = en.parlament
    return (
        <PageLayout t={en} currentPath="/en/parlament/" breadcrumbSchema={breadcrumb}>
            <div className="w-full max-w-[42rem] flex flex-col items-start">
                <h1 className="text-[28px] md:text-[32px] font-[600] tracking-tight text-[#2c2c2c] mb-4">
                    Parliament
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
