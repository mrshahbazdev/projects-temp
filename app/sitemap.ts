import { MetadataRoute } from 'next'
import { CONFIG } from '@/lib/constants'

const pages = [
    { path: '/', changeFreq: 'weekly' as const, priority: 1 },
    { path: '/rrugtimi/', changeFreq: 'monthly' as const, priority: 0.9 },
    { path: '/neomalsore/', changeFreq: 'monthly' as const, priority: 0.9 },
    { path: '/parlament/', changeFreq: 'weekly' as const, priority: 0.85 },
    { path: '/media/', changeFreq: 'weekly' as const, priority: 0.8 },
    { path: '/kontakt/', changeFreq: 'yearly' as const, priority: 0.7 },
    { path: '/privatesia/', changeFreq: 'yearly' as const, priority: 0.3 },
    { path: '/siguria/', changeFreq: 'yearly' as const, priority: 0.3 },
]

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date()
    const entries: MetadataRoute.Sitemap = []

    for (const page of pages) {
        entries.push({
            url: `${CONFIG.siteUrl}${page.path}`,
            lastModified: now,
            changeFrequency: page.changeFreq,
            priority: page.priority,
            alternates: {
                languages: {
                    'sq-AL': `${CONFIG.siteUrl}${page.path}`,
                    en: `${CONFIG.siteUrl}/en${page.path}`,
                    'x-default': `${CONFIG.siteUrl}${page.path}`,
                },
            },
        })
    }

    return entries
}
