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

        if (data.get('website')) {
            setFormStatus('error')
            return
        }

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
            className={`py-12 w-full max-w-[48rem] mx-auto border-t border-border ${showEmail ? 'email-visible' : ''}`}
        >
            <h2 className="text-xl font-medium mb-4 text-primary">Contact</h2>

            <div className="space-y-6">
                {/* Email reveal */}
                <div>
                    {!showEmail ? (
                        <button
                            onClick={() => setShowEmail(true)}
                            className="text-accent hover:underline cursor-pointer underline underline-offset-4"
                        >
                            Show email address
                        </button>
                    ) : (
                        <a
                            href={`mailto:${EMAIL_USER}@${EMAIL_DOMAIN}`}
                            className="hidden-email text-accent hover:underline underline-offset-4"
                        >
                            {EMAIL_USER}@{EMAIL_DOMAIN}
                        </a>
                    )}
                </div>

                {/* Contact form - showing unconditionally for demo even if FORM_ID is empty */}
                <div>
                    <p className="text-base text-primary mb-4">Or send a message:</p>

                    <form onSubmit={handleSubmit} className="space-y-4 max-w-[24rem]">
                        {/* Honeypot */}
                        <div className="hidden" aria-hidden="true">
                            <input type="text" name="website" tabIndex={-1} autoComplete="off" />
                        </div>
                        <input type="hidden" name="_timestamp" value={Date.now().toString()} />

                        <div>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                placeholder="Name"
                                className="w-full px-3 py-2 border border-border bg-[#FDFDFD] text-sm text-primary placeholder:text-muted focus:outline-none"
                            />
                        </div>

                        <div>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                placeholder="Your email"
                                className="w-full px-3 py-2 border border-border bg-[#FDFDFD] text-sm text-primary placeholder:text-muted focus:outline-none"
                            />
                        </div>

                        <div>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                required
                                placeholder="Message"
                                className="w-full px-3 py-2 border border-border bg-[#FDFDFD] text-sm text-primary placeholder:text-muted resize-none focus:outline-none"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={formStatus === 'sending'}
                            className="px-6 py-2 bg-[#1A1A1A] text-background text-sm font-medium hover:bg-black disabled:opacity-50"
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
            </div>

            <footer className="mt-20 pt-8 border-t border-border flex gap-4 text-xs text-muted">
                <a href="#" className="hover:text-primary">Privacy</a>
                <a href="#" className="hover:text-primary">Security</a>
                <a href="#" className="hover:text-primary">Colophon</a>
                <span>© 2024</span>
            </footer>
        </section>
    )
}
