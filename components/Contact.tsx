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
        <section className="py-6 w-full">
            <h2 className="text-[20px] font-[500] mb-5 text-[#2c2c2c]">Contact</h2>

            <div className="space-y-6">
                <div>
                    {!showEmail ? (
                        <button
                            onClick={() => setShowEmail(true)}
                            className="text-[#a55252] hover:text-[#8a4242] transition-colors flex items-center gap-2 cursor-pointer text-[15px]"
                        >
                            <span>→</span>
                            <span>Show email address</span>
                        </button>
                    ) : (
                        <a
                            href={`mailto:${EMAIL_USER}@${EMAIL_DOMAIN}`}
                            className="text-[#a55252] hover:text-[#8a4242] transition-colors flex items-center gap-2 text-[15px]"
                        >
                            <span>→</span>
                            <span>{EMAIL_USER}@{EMAIL_DOMAIN}</span>
                        </a>
                    )}
                </div>

                {/* Contact Form Restored */}
                <div className="pt-2">
                    <p className="text-[15px] text-[#2c2c2c] mb-4">Or send a message:</p>

                    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-[24rem]">
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
                                className="w-full px-3 py-2.5 border border-[#e5e5e5] bg-white text-[15px] text-[#2c2c2c] placeholder:text-[#999] focus:outline-none focus:border-[#ccc] transition-colors"
                            />
                        </div>

                        <div>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                placeholder="Your email"
                                className="w-full px-3 py-2.5 border border-[#e5e5e5] bg-white text-[15px] text-[#2c2c2c] placeholder:text-[#999] focus:outline-none focus:border-[#ccc] transition-colors"
                            />
                        </div>

                        <div>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                required
                                placeholder="Message"
                                className="w-full px-3 py-2.5 border border-[#e5e5e5] bg-white text-[15px] text-[#2c2c2c] placeholder:text-[#999] resize-none focus:outline-none focus:border-[#ccc] transition-colors"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={formStatus === 'sending'}
                            className="px-6 py-2.5 bg-[#2c2c2c] text-white text-[15px] font-[500] hover:bg-black transition-colors disabled:opacity-50"
                        >
                            {formStatus === 'sending' ? 'Sending…' : 'Send'}
                        </button>

                        {formStatus === 'sent' && (
                            <p className="text-[14px] text-green-700 mt-2">Message sent.</p>
                        )}
                        {formStatus === 'error' && (
                            <p className="text-[14px] text-[#a55252] mt-2">Failed. Please use the email address above.</p>
                        )}
                    </form>
                </div>
            </div>

            {/* Footer Restored */}
            <footer className="mt-20 pt-8 border-t border-[#e5e5e5] flex gap-5 text-[13px] text-[#888]">
                <a href="#" className="hover:text-[#2c2c2c] transition-colors">Privacy</a>
                <a href="#" className="hover:text-[#2c2c2c] transition-colors">Security</a>
                <a href="#" className="hover:text-[#2c2c2c] transition-colors">Colophon</a>
                <span>© 2024</span>
            </footer>
        </section>
    )
}
