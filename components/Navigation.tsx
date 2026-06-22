import Link from 'next/link'
import type { Translations } from '@/lib/i18n'

interface NavigationProps {
    t: Translations
    currentPath: string
}

export default function Navigation({ t, currentPath }: NavigationProps) {
    return (
        <>
            <div className="w-full max-w-[42rem] flex justify-end">
                <div className="flex gap-2 text-[13px] text-[#595959] mb-2">
                    {t.locale === 'sq' ? (
                        <>
                            <span className="text-[#2c2c2c] font-[500]" aria-current="true">SQ</span>
                            <span>/</span>
                            <Link
                                href={t.alternatePath}
                                className="hover:text-[#2c2c2c] transition-colors"
                                hrefLang={t.alternateHrefLang}
                            >
                                {t.alternateLabel}
                            </Link>
                        </>
                    ) : (
                        <>
                            <span className="text-[#2c2c2c] font-[500]" aria-current="true">EN</span>
                            <span>/</span>
                            <Link
                                href={t.alternatePath}
                                className="hover:text-[#2c2c2c] transition-colors"
                                hrefLang={t.alternateHrefLang}
                            >
                                {t.alternateLabel}
                            </Link>
                        </>
                    )}
                </div>
            </div>
            <nav aria-label={t.navLabel} className="w-full max-w-[42rem] border-b border-[#e5e5e5] pb-6 mb-8">
                <ul className="flex flex-wrap gap-x-5 gap-y-2 justify-center text-[14px]">
                    {t.nav.map((item) => {
                        const isActive = item.href === currentPath
                        return (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={
                                        isActive
                                            ? 'text-[#2c2c2c] font-[500] border-b border-[#2c2c2c] pb-0.5'
                                            : 'text-[#595959] hover:text-[#2c2c2c] transition-colors'
                                    }
                                    aria-current={isActive ? 'page' : undefined}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}
