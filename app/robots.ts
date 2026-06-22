import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/_next/', '/api/'],
            },
            { userAgent: 'GPTBot', allow: '/' },
            { userAgent: 'ChatGPT-User', allow: '/' },
            { userAgent: 'ClaudeBot', allow: '/' },
            { userAgent: 'anthropic-ai', allow: '/' },
            { userAgent: 'PerplexityBot', allow: '/' },
            { userAgent: 'Google-Extended', allow: '/' },
            { userAgent: 'Googlebot', allow: '/' },
            { userAgent: 'Bingbot', allow: '/' },
        ],
        sitemap: 'https://marjanakoceku.com/sitemap.xml',
        host: 'https://marjanakoceku.com',
    }
}
