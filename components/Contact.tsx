'use client'

import { useState } from 'react'

const EMAIL_USER = 'contact'
const EMAIL_DOMAIN = 'markmartinaj.com'

export default function Contact() {
    const [showEmail, setShowEmail] = useState(false)

    return (
        <section className="py-6 w-full">
            <h2 className="text-xl font-medium mb-4 text-[#2c2c2c]">Contact</h2>

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

        </section>
    )
}
