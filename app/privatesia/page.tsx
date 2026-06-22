import type { Metadata } from 'next'
import { CONFIG } from '@/lib/constants'
import { sq } from '@/lib/i18n'
import PageLayout from '@/components/PageLayout'

const url = CONFIG.siteUrl

export const metadata: Metadata = {
    title: sq.privatesia.title,
    description: sq.privatesia.text,
    alternates: {
        canonical: `${url}/privatesia/`,
        languages: { 'sq-AL': `${url}/privatesia/`, 'en': `${url}/en/privatesia/`, 'x-default': `${url}/privatesia/` },
    },
    openGraph: {
        title: sq.privatesia.title, description: sq.privatesia.text,
        url: `${url}/privatesia/`, siteName: 'Marjana Ko\u00e7eku', locale: 'sq-AL', type: 'website',
    },
}

export default function PrivatesiaPage() {
    return (
        <PageLayout t={sq} currentPath="/privatesia/">
            <div className="w-full max-w-[42rem] flex flex-col items-start">
                <h1 className="text-[28px] md:text-[32px] font-[600] tracking-tight text-[#2c2c2c] mb-4">
                    Privat&#235;sia
                </h1>
                <p className="text-[15px] leading-relaxed text-[#4a4a4a]">{sq.privatesia.text}</p>
            </div>
        </PageLayout>
    )
}
