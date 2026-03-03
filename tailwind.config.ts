import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
            },
            fontSize: {
                base: ['16px', { lineHeight: '1.6' }],
                lg: ['18px', { lineHeight: '1.6' }],
                xl: ['20px', { lineHeight: '1.5' }],
                '2xl': ['24px', { lineHeight: '1.4' }],
                '3xl': ['32px', { lineHeight: '1.3' }],
            },
            colors: {
                primary: '#000000',
                background: '#FFFFFF',
                accent: '#CC0000',
                muted: '#666666',
                border: '#E5E5E5',
            },
            maxWidth: {
                prose: '65ch',
            },
            spacing: {
                '18': '4.5rem',
                '22': '5.5rem',
            },
        },
    },
    plugins: [],
    // darkMode intentionally not set (defaults to 'media' but unused in this config)
}

export default config
