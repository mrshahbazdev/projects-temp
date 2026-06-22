import type { Metadata } from 'next'
import { CONFIG } from '@/lib/constants'
import { en } from '@/lib/i18n'
import PageLayout from '@/components/PageLayout'

const url = CONFIG.siteUrl

export const metadata: Metadata = {
    title: en.privatesia.title,
    description: en.privatesia.text,
    alternates: {
        canonical: `${url}/en/privatesia/`,
        languages: { 'sq-AL': `${url}/privatesia/`, 'en': `${url}/en/privatesia/`, 'x-default': `${url}/privatesia/` },
    },
    openGraph: {
        title: en.privatesia.title, description: en.privatesia.text,
        url: `${url}/en/privatesia/`, siteName: 'Marjana Ko\u00e7eku', locale: 'en_US', type: 'website',
    },
}

export default function EnPrivatesiaPage() {
    return (
        <PageLayout t={en} currentPath="/en/privatesia/">
            <div className="w-full max-w-[42rem] flex flex-col items-start">
                <h1 className="text-[28px] md:text-[32px] font-[600] tracking-tight text-[#2c2c2c] mb-4">
                    Privacy
                </h1>
                <p className="text-[15px] leading-relaxed text-[#4a4a4a]">{en.privatesia.text}</p>
            </div>
        </PageLayout>
    )
}
