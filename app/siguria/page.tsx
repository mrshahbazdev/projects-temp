import type { Metadata } from 'next'
import { CONFIG } from '@/lib/constants'
import { sq } from '@/lib/i18n'
import PageLayout from '@/components/PageLayout'

const url = CONFIG.siteUrl

export const metadata: Metadata = {
    title: sq.siguria.title,
    description: sq.siguria.text,
    alternates: {
        canonical: `${url}/siguria/`,
        languages: { 'sq-AL': `${url}/siguria/`, 'en': `${url}/en/siguria/`, 'x-default': `${url}/siguria/` },
    },
    openGraph: {
        title: sq.siguria.title, description: sq.siguria.text,
        url: `${url}/siguria/`, siteName: 'Marjana Ko\u00e7eku', locale: 'sq-AL', type: 'website',
    },
}

export default function SiguriaPage() {
    return (
        <PageLayout t={sq} currentPath="/siguria/">
            <div className="w-full max-w-[42rem] flex flex-col items-start">
                <h1 className="text-[28px] md:text-[32px] font-[600] tracking-tight text-[#2c2c2c] mb-4">
                    Siguria
                </h1>
                <p className="text-[15px] leading-relaxed text-[#4a4a4a]">{sq.siguria.text}</p>
            </div>
        </PageLayout>
    )
}
