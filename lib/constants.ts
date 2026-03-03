export const CONFIG = {
    siteUrl: 'https://markmartinaj.com',
    email: 'contact@markmartinaj.com',
    pictureEnabled: false,
}

export const SECURITY = {
    hsts: 'max-age=63072000; includeSubDomains; preload',
    csp: [
        "default-src 'none'",
        "script-src 'self'",
        "style-src 'unsafe-inline'",
        "img-src 'self' data:",
        "font-src 'none'",
        "connect-src 'self'",
        "frame-ancestors 'none'",
        "base-uri 'none'",
        "form-action 'self'",
        'upgrade-insecure-requests',
    ].join('; '),
}

export const PERFORMANCE = {
    maxSize: 50000,    // 50KB
    targetFCP: 800,    // ms
    targetLCP: 1200,   // ms
}
