import Link from 'next/link'
import { SOCIAL } from '@/lib/constants'
import type { Translations } from '@/lib/i18n'

interface FooterProps {
    t: Translations
}

export default function Footer({ t }: FooterProps) {
    const privacyPath = t.locale === 'sq' ? '/privatesia/' : '/en/privatesia/'
    const securityPath = t.locale === 'sq' ? '/siguria/' : '/en/siguria/'
    const contactPath = t.locale === 'sq' ? '/kontakt/' : '/en/kontakt/'

    return (
        <footer className="w-full mt-20 pt-8 pb-8 border-t border-[#e5e5e5] flex flex-wrap gap-5 text-[13px] text-[#595959]">
            <Link href={t.homePath} className="hover:text-[#2c2c2c] transition-colors">
                {t.footerHome}
            </Link>
            <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-[#2c2c2c] transition-colors">
                Facebook
            </a>
            <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[#2c2c2c] transition-colors">
                Instagram
            </a>
            <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#2c2c2c] transition-colors">
                LinkedIn
            </a>
            <a href={SOCIAL.x} target="_blank" rel="noopener noreferrer" className="hover:text-[#2c2c2c] transition-colors">
                X
            </a>
            <Link href={privacyPath} className="hover:text-[#2c2c2c] transition-colors">
                {t.footerPrivacy}
            </Link>
            <Link href={securityPath} className="hover:text-[#2c2c2c] transition-colors">
                {t.footerSecurity}
            </Link>
            <Link href={contactPath} className="hover:text-[#2c2c2c] transition-colors">
                {t.footerContact}
            </Link>
            <span className="whitespace-nowrap leading-none">&copy; {new Date().getFullYear()} Marjana Ko&#231;eku</span>
        </footer>
    )
}
