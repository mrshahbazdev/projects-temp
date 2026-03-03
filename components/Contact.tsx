'use client'

import { useState } from 'react'

const EMAIL_USER = 'contact'
const EMAIL_DOMAIN = 'markmartinaj.com'
// Replace with your Formspree form ID, or set to null to disable the form
const FORM_ID: string | null = null

type FormStatus = 'idle' | 'sending' | 'sent' | 'error'

export default function Contact() {
    const [showEmail, setShowEmail] = useState(false)
    const [formStatus, setFormStatus] = useState<FormStatus>('idle')

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setFormStatus('sending')

        const form = e.currentTarget
        const data = new FormData(form)

        // Honeypot: bail if bot filled the hidden field
        if (data.get('website')) {
            setFormStatus('error')
            return
        }

        // Timing check: reject submissions faster than 3s
        const ts = data.get('_timestamp') as string
        if (!ts || Date.now() - parseInt(ts, 10) < 3000) {
            setFormStatus('error')
            return
        }

        if (!FORM_ID) {
            setFormStatus('error')
            return
        }

        try {
            const res = await fetch(`https://formspree.io/f/${FORM_ID}`, {
                method: 'POST',
                body: data,
                headers: { Accept: 'application/json' },
            })
            if (res.ok) {
                setFormStatus('sent')
                form.reset()
            } else {
                setFormStatus('error')
            }
        } catch {
            setFormStatus('error')
        }
    }

    return (
        <section
            className={`prose-custom py-12 border-t border-border ${showEmail ? 'email-visible' : ''}`}
        >
            <h2 className="text-base font-medium mb-4">Contact</h2>

            <div className="space-y-6">
                {/* Email reveal — obfuscated by default to reduce scraping */}
                <div>
                    {!showEmail ? (
                        <button
                            onClick={() => setShowEmail(true)}
                            className="text-accent hover:underline cursor-pointer"
                        >
                            Show email address
                        </button>
                    ) : (
                        <a
                            href={`mailto:${EMAIL_USER}@${EMAIL_DOMAIN}`}
                            className="hidden-email text-accent hover:underline"
                        >
                            {EMAIL_USER}@{EMAIL_DOMAIN}
                        </a>
                    )}
                </div>

                {/* Contact form — only shown if FORM_ID is configured */}
                {FORM_ID && (
                    <div>
                        <p className="text-sm text-muted mb-4">Or send a message:</p>

                        <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
                            {/* Honeypot */}
                            <div className="honeypot" aria-hidden="true">
                                <input type="text" name="website" tabIndex={-1} autoComplete="off" />
                            </div>

                            {/* Timing token */}
                            <input type="hidden" name="_timestamp" value={Date.now().toString()} />

                            <div>
                                <label htmlFor="name" className="block text-sm mb-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-3 py-2 border border-border rounded text-sm"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm mb-1">Your email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-3 py-2 border border-border rounded text-sm"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm mb-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    required
                                    className="w-full px-3 py-2 border border-border rounded text-sm resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={formStatus === 'sending'}
                                className="px-4 py-2 bg-primary text-background text-sm rounded hover:opacity-80 disabled:opacity-50"
                            >
                                {formStatus === 'sending' ? 'Sending…' : 'Send'}
                            </button>

                            {formStatus === 'sent' && (
                                <p className="text-sm" style={{ color: '#166534' }}>Message sent.</p>
                            )}
                            {formStatus === 'error' && (
                                <p className="text-sm text-accent">Failed. Please use the email address above.</p>
                            )}
                        </form>
                    </div>
                )}
            </div>
        </section>
    )
}
