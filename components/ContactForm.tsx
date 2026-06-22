'use client'

import { useState } from 'react'
import type { Translations } from '@/lib/i18n'

const FORM_ID: string | null = null

type FormStatus = 'idle' | 'sending' | 'sent' | 'error'

interface ContactFormProps {
    t: Translations['kontakt']
}

export default function ContactForm({ t }: ContactFormProps) {
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

    const inputClass = 'w-full px-3 py-2.5 border bg-white text-[15px] text-[#2c2c2c] placeholder:text-[#999] focus:outline-none transition-colors border-[#e5e5e5] focus:border-[#ccc]'

    return (
        <form onSubmit={handleSubmit} noValidate className="space-y-4 w-full max-w-[24rem]">
            <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="honeypot"
                name="website"
            />
            <div>
                <input
                    type="text"
                    name="name"
                    required
                    minLength={2}
                    maxLength={100}
                    autoComplete="name"
                    placeholder={t.namePlaceholder}
                    className={inputClass}
                />
            </div>
            <div>
                <input
                    type="email"
                    name="email"
                    required
                    maxLength={254}
                    autoComplete="email"
                    placeholder={t.emailPlaceholder}
                    className={inputClass}
                />
            </div>
            <div>
                <textarea
                    name="message"
                    rows={4}
                    required
                    minLength={10}
                    maxLength={5000}
                    placeholder={t.messagePlaceholder}
                    className={`${inputClass} resize-none`}
                />
            </div>
            <button
                type="submit"
                disabled={formStatus === 'sending'}
                className="px-6 py-2.5 bg-[#2c2c2c] text-white text-[15px] font-[500] hover:bg-black transition-colors disabled:opacity-50"
            >
                {formStatus === 'sending' ? t.sending : t.send}
            </button>
            {formStatus === 'sent' && (
                <p className="text-[14px] text-green-700 mt-2">{t.sent}</p>
            )}
            {formStatus === 'error' && (
                <p className="text-[14px] text-[#a55252] mt-2">{t.error}</p>
            )}
        </form>
    )
}
