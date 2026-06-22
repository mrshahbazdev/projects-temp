import type { Metadata } from 'next'
import { CONFIG } from '@/lib/constants'
import { en } from '@/lib/i18n'
import PageLayout from '@/components/PageLayout'

const url = CONFIG.siteUrl

export const metadata: Metadata = {
    title: en.siguria.title,
    description: en.siguria.text,
    alternates: {
        canonical: `${url}/en/siguria/`,
        languages: { 'sq-AL': `${url}/siguria/`, 'en': `${url}/en/siguria/`, 'x-default': `${url}/siguria/` },
    },
    openGraph: {
        title: en.siguria.title, description: en.siguria.text,
        url: `${url}/en/siguria/`, siteName: 'Marjana Ko\u00e7eku', locale: 'en_US', type: 'website',
    },
}

export default function EnSiguriaPage() {
    return (
        <PageLayout t={en} currentPath="/en/siguria/">
            <div className="w-full max-w-[42rem] flex flex-col items-start">
                <h1 className="text-[28px] md:text-[32px] font-[600] tracking-tight text-[#2c2c2c] mb-4">
                    Security
                </h1>
                <p className="text-[15px] leading-relaxed text-[#4a4a4a]">{en.siguria.text}</p>
            </div>
        </PageLayout>
    )
}
