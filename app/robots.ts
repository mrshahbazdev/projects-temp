import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/', '/_next/', '/static/'],
        },
        sitemap: 'https://markmartinaj.com/sitemap.xml',
        host: 'https://markmartinaj.com',
    }
}
