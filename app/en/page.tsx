import Link from 'next/link'
import { CONFIG } from '@/lib/constants'
import { en } from '@/lib/i18n'
import PageLayout from '@/components/PageLayout'
import Header from '@/components/Header'

const url = CONFIG.siteUrl

const breadcrumb = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: `${url}/en/` },
            ],
        },
        {
            '@type': 'WebPage',
            '@id': `${url}/en/#webpage`,
            name: 'Home',
            url: `${url}/en/`,
            description: en.description,
            inLanguage: 'en',
            isPartOf: { '@id': `${url}/#website` },
            about: { '@id': `${url}/#person` },
        },
    ],
})

export default function EnHome() {
    return (
        <PageLayout t={en} currentPath="/en/" breadcrumbSchema={breadcrumb}>
            <Header name="Marjana Ko&#231;eku" subtitle={en.subtitle} />

            <div className="w-48 h-48 sm:w-56 sm:h-56 my-8 ">
                <img
                    src="/profile.jpg"
                    alt={en.ogImageAlt}
                    width={224}
                    height={224}
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    className="w-full h-full object-cover rounded-full shadow-md ring-1 ring-border"
                />
            </div>

            <div className="w-full max-w-[42rem] flex flex-col items-start">
                <section className="py-6 w-full">
                    <div className="space-y-6 text-[15px] leading-relaxed text-[#4a4a4a]">
                        <p>
                            I grew up in the mountains of Dukagjin. That is where I learned to love my country,
                            keep my word, and understand that public service starts with the community around you,
                            not in a distant office.
                        </p>
                        <p>
                            I did not enter politics for a title. I entered because the people of Mal&#235;sia
                            deserve to be heard where laws are made, and heard with dignity and honest work.
                        </p>
                    </div>
                </section>

                <section className="py-6 w-full">
                    <Link
                        href="/en/rrugtimi/"
                        className="text-[15px] text-[#2c2c2c] hover:underline transition-colors"
                    >
                        {en.readStory} &rarr;
                    </Link>
                </section>
            </div>
        </PageLayout>
    )
}
