/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'dist',
    images: { unoptimized: true },
    trailingSlash: true,
    reactStrictMode: true,
    poweredByHeader: false,

    // Note: headers() is defined here for reference/server deployments.
    // For static export use public/_headers (Netlify) or vercel.json.
}

module.exports = nextConfig
