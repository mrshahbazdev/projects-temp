import { MetadataRoute } from 'next'
import { CONFIG } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: `${CONFIG.siteUrl}/`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
    ]
}
