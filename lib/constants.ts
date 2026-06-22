export const CONFIG = {
    siteUrl: 'https://marjanakoceku.com',
    email: 'contact@marjanakoceku.com',
    pictureEnabled: true,
}

export const SOCIAL = {
    facebook: 'https://www.facebook.com/marianamolla69',
    instagram: 'https://www.instagram.com/neomalsore/',
    linkedin: 'https://www.linkedin.com/in/marjana-ko%C3%A7eku-b16024151/',
    x: 'https://x.com/marianakoceku1',
}

export const SECURITY = {
    hsts: 'max-age=63072000; includeSubDomains; preload',
    csp: [
        "default-src 'none'",
        "script-src 'self' https://challenges.cloudflare.com",
        "style-src 'self' 'unsafe-inline'",
        "img-src 'self' data:",
        "font-src 'none'",
        "connect-src 'self' https://formspree.io https://challenges.cloudflare.com",
        "frame-src https://challenges.cloudflare.com",
        "frame-ancestors 'none'",
        "base-uri 'none'",
        "form-action 'self' https://formspree.io",
        'upgrade-insecure-requests',
    ].join('; '),
}

export const PERFORMANCE = {
    maxSize: 50000,
    targetFCP: 800,
    targetLCP: 1200,
}
