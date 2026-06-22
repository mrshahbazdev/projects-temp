export type Locale = 'sq' | 'en'

export interface NavItem {
    href: string
    label: string
}

export interface Translations {
    locale: Locale
    htmlLang: string
    hrefLang: string
    title: string
    subtitle: string
    description: string
    ogImageAlt: string
    navLabel: string
    nav: NavItem[]
    footerHome: string
    footerPrivacy: string
    footerSecurity: string
    footerContact: string
    readStory: string
    homePath: string
    alternatePath: string
    alternateLabel: string
    alternateHrefLang: string
    notFoundTitle: string
    notFoundText: string
    notFoundLink: string
    rrugtimi: {
        title: string
        description: string
        intro: string
        sections: { heading: string; text: string }[]
    }
    neomalsore: {
        title: string
        description: string
        intro: string
        sections: { heading: string; text: string }[]
    }
    parlament: {
        title: string
        description: string
        intro: string
        role: string
        committees: { title: string; name: string; role: string }
        events: { title: string; items: { date: string; heading: string; text: string }[] }
        initiatives: { title: string; items: { heading: string; text: string }[] }
    }
    media: {
        title: string
        description: string
        items: { type: string; source: string; date: string; headline: string }[]
    }
    kontakt: {
        title: string
        description: string
        intro: string
        namePlaceholder: string
        emailPlaceholder: string
        messagePlaceholder: string
        send: string
        sending: string
        sent: string
        error: string
    }
    siguria: {
        title: string
        text: string
    }
    privatesia: {
        title: string
        text: string
    }
}

export const sq: Translations = {
    locale: 'sq',
    htmlLang: 'sq',
    hrefLang: 'sq-AL',
    title: 'Marjana Koçeku | Vajza e Dukagjinit',
    subtitle: 'Vajza e Dukagjinit',
    description: 'Marjana Koçeku \u2014 deputete e pavarur p\u00ebr Shkodr\u00ebn, prej Dukagjinit dhe Shoshit. NeoMalsore, turiz\u00ebm rural, Mal\u00ebsi e Madhe, Kuvendi i Shqip\u00ebris\u00eb.',
    ogImageAlt: 'Marjana Ko\u00e7eku, deputete p\u00ebr Qarkun e Shkodr\u00ebs, prej Dukagjinit',
    navLabel: 'Navigimi kryesor',
    nav: [
        { href: '/', label: 'Kryefaqja' },
        { href: '/rrugtimi/', label: 'Rrug\u00ebtimi' },
        { href: '/neomalsore/', label: 'NeoMalsore' },
        { href: '/parlament/', label: "N'Parlament" },
        { href: '/media/', label: 'Media' },
        { href: '/kontakt/', label: 'Kontakt' },
    ],
    footerHome: 'Kryefaqja',
    footerPrivacy: 'Privat\u00ebsia',
    footerSecurity: 'Siguria',
    footerContact: 'Kontakt',
    readStory: 'Lexo rrug\u00ebtimin',
    homePath: '/',
    alternatePath: '/en/',
    alternateLabel: 'EN',
    alternateHrefLang: 'en',
    notFoundTitle: '404',
    notFoundText: 'Page not found.',
    notFoundLink: 'Return to index',
    rrugtimi: {
        title: 'Rrug\u00ebtimi | Marjana Ko\u00e7eku',
        description: "Rrug\u00ebtimi i Marjana Ko\u00e7ekut: Shosh, Dukagjin, Shkodr\u00ebr, arsimi, Erasmus, NeoMalsore dhe mandati n'Kuvend si deputete p\u00ebr Shkodr\u00ebn.",
        intro: "Rrug\u00ebtimi im s'ka nis\u00eb n'Kuvend. Ka nis\u00eb shum\u00eb ma her\u00ebt, n'Shosh t\u00eb Dukagjinit, mes familjes, fqinjve dhe pun\u00ebs s\u00eb p\u00ebrditshme n'mal.",
        sections: [
            {
                heading: "F\u00ebmijnia n'Dukagjin",
                text: "U linda n'Shkodr\u00ebr n\u00eb vitin 2000, po zemra ime ka qen\u00eb gjithmon\u00eb n'mal. N'Shosh u rrita mes bujq\u00ebsis\u00eb, blegtori\u00ebs dhe trad\u00ebs s\u00eb familjes. Aty ku fjala ka pesh\u00eb, ku puna vler\u00ebsohet dhe ku mikpritja s'\u00ebsht zakon, por m\u00ebnyr\u00eb jetese.",
            },
            {
                heading: 'Arsimi dhe kthimi',
                text: "Shkoll\u00ebn e mesme e kreva n'gjimnazin jezuit \u201cAt\u00eb Pjet\u00ebr Meshkalla\u201d n'Shkodr\u00ebr. Studimet e larta i ndoqa n'Tiran\u00eb, me nj\u00eb vit Erasmus n'Gjenovë. Pastaj u ktheva n'vend, sepse dija se duhesha me u kthy aty ku jam rritur, jo ve\u00e7 aty ku duket ma mir\u00eb n'let\u00ebr.",
            },
            {
                heading: 'NeoMalsore',
                text: "N'Shosh nisa NeoMalsore, agroturizmin ton\u00eb familjar. Ishte puna ime e par\u00eb e madhe: me tok\u00eb, me njer\u00ebz t\u00eb zon\u00ebs dhe me bindjen se Mal\u00ebsia ka vler\u00eb kur e trajton vet\u00eb, jo kur e pret t\u00eb tjer\u00ebt.",
            },
            {
                heading: 'Parlamenti',
                text: "N\u00eb maj 2025 m\u00eb zgjodhën deputete p\u00ebr Qarkun e Shkodr\u00ebs. N\u00eb qershor 2026 shpalla statusin e pavarur n'Kuvend. P\u00ebr mua, Kuvendi s'\u00ebsht sken\u00eb. \u00cbsht\u00eb vend ku duhet me u d\u00ebgju Mal\u00ebsia, me fjal\u00eb t\u00eb qarta, me pun\u00eb t\u00eb matshme dhe me p\u00ebrgjegjësi ndaj atyre q\u00eb na besuan vot\u00ebn.",
            },
        ],
    },
    neomalsore: {
        title: 'NeoMalsore | Marjana Ko\u00e7eku',
        description: "NeoMalsore \u2014 agroturiz\u00ebm familjar n'Shosh, Dukagjin. Turiz\u00ebm rural, mikpritje mal\u00ebsore dhe zhvillim lokal n'Mal\u00ebsi t\u00eb Madhe.",
        intro: "NeoMalsore \u00ebsht\u00eb agroturizmi yn\u00eb familjar n'Shosh t\u00eb Dukagjinit. S'\u00ebsht projekt i shpejt\u00eb. \u00cbsht\u00eb puna e viteve p\u00ebr me e hapur Mal\u00ebsin\u00eb me kujdes, me respekt p\u00ebr tradit\u00ebn dhe me pun\u00eb p\u00ebr komunitetin.",
        sections: [
            {
                heading: 'Si nisi',
                text: "Pas studimeve dhe pun\u00ebs jasht\u00eb vendit, u ktheva te rr\u00ebnj\u00ebt e mia. Familja ime ka jetuar gjithmon\u00eb prej bujq\u00ebsis\u00eb dhe blegtori\u00ebs. NeoMalsore lindi prej nevoj\u00ebs p\u00ebr me e \u00e7u k\u00ebt\u00eb pun\u00eb p\u00ebrpara, pa e humb karakterin e vendit.",
            },
            {
                heading: '\u00c7ka ofrojm\u00eb',
                text: "Turiz\u00ebm rural, mikpritje dhe p\u00ebrvoj\u00eb t\u00eb v\u00ebrtet\u00eb mal\u00ebsore. Vizitor\u00ebt vin p\u00ebr natyr\u00ebn, p\u00ebr kultur\u00ebn dhe p\u00ebr njer\u00ebzit. Kjo \u00ebsht\u00eb rruga q\u00eb duam: turiz\u00ebm q\u00eb krijon pun\u00eb n'vend, jo q\u00eb e shfryt\u00ebzon dhe e l\u00eb bosh.",
            },
            {
                heading: 'Pse ka r\u00ebnd\u00ebsi',
                text: "Mal\u00ebsia ka potencial t\u00eb madh, po shpesh mbetet jasht\u00eb zhvillimit. NeoMalsore \u00ebsht\u00eb p\u00ebrpjekja ime p\u00ebr me i tregu se fshati s'\u00ebsht e kaluara. \u00cbsht\u00eb baza e nj\u00eb ekonomie t\u00eb sh\u00ebndetshme, n\u00ebse e trajtojm\u00eb me dinjitet.",
            },
        ],
    },
    parlament: {
        title: "N'Parlament | Marjana Ko\u00e7eku",
        description: "Puna parlamentare e Marjana Ko\u00e7ekut: deputete e pavarur p\u00ebr Shkodr\u00ebn, komisioni p\u00ebr Europ\u00ebn, zhvillim rural, turiz\u00ebm dhe integrim evropian.",
        intro: "Si deputete p\u00ebr Qarkun e Shkodr\u00ebs punoj n'Kuvend p\u00ebr \u00e7\u00ebshtje q\u00eb prekin verin e vendit: turizmin, zhvillimin rural, integrimin evropian dhe jet\u00ebn e p\u00ebrditshme t\u00eb njer\u00ebzve t\u00eb zon\u00ebs.",
        role: "Deputete e pavarur n'Kuvendin e Shqip\u00ebris\u00eb, Qarku Shkodr\u00ebr.",
        committees: {
            title: 'Komisionet',
            name: "Komisioni p\u00ebr Europ\u00ebn dhe Pun\u00ebt e Jashtme",
            role: 'Sekretare',
        },
        events: {
            title: 'Intervente & fjalime',
            items: [
                {
                    date: '22 shtator 2025',
                    heading: "Nd\u00ebrhyrje p\u00ebr rreshqitjen e dherave n\u00eb Kir-Lotaj-Nd\u00ebrlysaj",
                    text: "Isha n'terren n'aksin Kir-Lotaj-Nd\u00ebrlysaj pas rreshqitjes s\u00eb dherave, p\u00ebr me pa nga af\u00ebr d\u00ebmin dhe p\u00ebr me k\u00ebrku zgjidhje p\u00ebr banor\u00ebt e Dukagjinit.",
                },
                {
                    date: '8 shtator 2025',
                    heading: "Rikthim n'gjimnazin \u201cAt\u00eb Pjet\u00ebr Meshkalla\u201d",
                    text: "Vizit\u00eb n'shkoll\u00ebn ku kalova adoleshencën, p\u00ebr me fol\u00eb me nx\u00ebn\u00ebs e m\u00ebsues p\u00ebr arsimin, pun\u00ebn dhe t\u00eb ardhmen e Shkodr\u00ebs.",
                },
            ],
        },
        initiatives: {
            title: 'Iniciativa',
            items: [
                {
                    heading: "Zhvillimi rural dhe turizmi n\u00eb veri",
                    text: "Fokusi i pun\u00ebs sime n'Kuvend mbetet zhvillimi i zonave rurale, turizmi me identitet dhe mb\u00ebshtetja p\u00ebr fermer\u00ebt e Mal\u00ebsis\u00eb s\u00eb Madhe.",
                },
                {
                    heading: 'Integrimi evropian',
                    text: "Si sekretare e Komisionit p\u00ebr Europ\u00ebn dhe Pun\u00ebt e Jashtme, punoj p\u00ebr me avancu agjend\u00ebn evropiane t\u00eb vendit, me p\u00ebrvoj\u00ebn time n'marr\u00ebdh\u00ebnie nd\u00ebrkomb\u00ebtare.",
                },
            ],
        },
    },
    media: {
        title: 'Media | Marjana Ko\u00e7eku',
        description: "Intervista, artikuj dhe lajme prej pun\u00ebs sime si deputete dhe prej rrug\u00ebtimit n'NeoMalsore.",
        items: [
            { type: 'Lajm', source: 'RTSH', date: 'qershor 2026', headline: "Marjana Ko\u00e7eku shpall statusin e pavarur n'Parlament" },
            { type: 'Intervist\u00eb', source: 'Report TV', date: 'maj 2025', headline: "Neomalsorja zgjidhet deputete p\u00ebr Qarkun e Shkodr\u00ebs" },
            { type: 'Artikull', source: 'Shqiptarja', date: '2024', headline: "Neomalsorja q\u00eb la Evrop\u00ebn p\u00ebr rr\u00ebnj\u00ebt e saj" },
        ],
    },
    kontakt: {
        title: 'Kontakt | Marjana Ko\u00e7eku',
        description: "Kontaktoni Marjana Ko\u00e7ekun, deputete p\u00ebr Qarkun e Shkodr\u00ebs.",
        intro: "P\u00ebrdore formularin m\u00eb posht\u00eb p\u00ebr me m\u00eb shkru. \u00c7do mesazh e lexoj personalisht.",
        namePlaceholder: 'Emri',
        emailPlaceholder: 'Emaili yt',
        messagePlaceholder: 'Mesazhi',
        send: 'D\u00ebrgo',
        sending: 'Duke d\u00ebrguar\u2026',
        sent: 'Mesazhi u d\u00ebrgua.',
        error: "D\u00ebshtoi. Provoni p\u00ebrs\u00ebri m\u00eb von\u00eb.",
    },
    siguria: {
        title: 'Siguria | Marjana Ko\u00e7eku',
        text: "Faqja \u00ebsht\u00eb statike dhe sh\u00ebrbehet me HTTPS. P\u00ebr me raportu probleme sigurie, p\u00ebrdore formularin e kontaktit.",
    },
    privatesia: {
        title: 'Privat\u00ebsia | Marjana Ko\u00e7eku',
        text: "Kjo faqe s'p\u00ebrdor cookies ndjek\u00ebse. N\u00ebse na shkruani p\u00ebrmes formularit, i trajtojm\u00eb ve\u00e7 t\u00eb dh\u00ebnat q\u00eb d\u00ebrgoni vullnetarisht p\u00ebr me ju p\u00ebrgjigj. T\u00eb dh\u00ebnat s'shiten dhe s'ndahen me pal\u00eb t\u00eb treta, p\u00ebrve\u00e7 kur k\u00ebrkohet me ligj.",
    },
}

export const en: Translations = {
    locale: 'en',
    htmlLang: 'en',
    hrefLang: 'en',
    title: 'Marjana Ko\u00e7eku | From Dukagjin',
    subtitle: 'From Dukagjin',
    description: 'Marjana Ko\u00e7eku \u2014 independent MP for Shkodr\u00ebr County. From Dukagjin and Shosh. NeoMalsore, rural tourism, Mal\u00ebsi e Madhe, Albanian Parliament.',
    ogImageAlt: 'Marjana Ko\u00e7eku, Member of Parliament for Shkodr\u00ebr County, from Dukagjin',
    navLabel: 'Main navigation',
    nav: [
        { href: '/en/', label: 'Home' },
        { href: '/en/rrugtimi/', label: 'My Story' },
        { href: '/en/neomalsore/', label: 'NeoMalsore' },
        { href: '/en/parlament/', label: 'Parliament' },
        { href: '/en/media/', label: 'Press' },
        { href: '/en/kontakt/', label: 'Contact' },
    ],
    footerHome: 'Home',
    footerPrivacy: 'Privacy',
    footerSecurity: 'Security',
    footerContact: 'Contact',
    readStory: 'Read my story',
    homePath: '/en/',
    alternatePath: '/',
    alternateLabel: 'SQ',
    alternateHrefLang: 'sq-AL',
    notFoundTitle: '404',
    notFoundText: 'Page not found.',
    notFoundLink: 'Return to index',
    rrugtimi: {
        title: 'My Story | Marjana Ko\u00e7eku',
        description: 'The story of Marjana Ko\u00e7eku: Shosh, Dukagjin, Shkodr\u00ebr, education, Erasmus, NeoMalsore and her mandate in Parliament as MP for Shkodr\u00ebr.',
        intro: 'My story did not begin in Parliament. It began in Shosh, in Dukagjin, among family, neighbours, and the hard work of life in the mountains.',
        sections: [
            {
                heading: 'Growing up in Dukagjin',
                text: 'I was born in Shkodr\u00ebr in 2000, but I have always belonged to the mountains. I was raised in Shosh, where our life was built around farming, livestock, and the traditions of my family. It is a place where your word still matters and hospitality is part of daily life.',
            },
            {
                heading: 'Education and coming home',
                text: 'I completed secondary school at the Jesuit college At\u00eb Pjet\u00ebr Meshkalla in Shkodr\u00ebr. I studied political science and international relations in Tirana, and spent a year on Erasmus at the University of Genoa in Italy. Afterwards I returned home, because I wanted to build my life where I was raised, not only where a CV looks more impressive.',
            },
            {
                heading: 'NeoMalsore',
                text: 'Back in Shosh, I founded NeoMalsore, our family agrotourism business. It was my first major commitment: working the land, working with local people, and believing that Mal\u00ebsia is at its strongest when its own communities lead the way.',
            },
            {
                heading: 'Parliament',
                text: 'In May 2025 I was elected to represent Shkodr\u00ebr County in the Albanian Parliament. In June 2026 I left my parliamentary group to serve as an independent MP. To me, Parliament is not a stage. It is where Mal\u00ebsia must be heard clearly, and where we must answer to the people who trusted us with their vote.',
            },
        ],
    },
    neomalsore: {
        title: 'NeoMalsore | Marjana Ko\u00e7eku',
        description: 'NeoMalsore \u2014 family agrotourism in Shosh, Dukagjin. Rural tourism, highland hospitality and local development in Mal\u00ebsi e Madhe.',
        intro: 'NeoMalsore is our family agrotourism business in Shosh, Dukagjin. It was not built overnight. It is the result of years of work to open up Mal\u00ebsia with care, respect for tradition, and real opportunity for local people.',
        sections: [
            {
                heading: 'How it began',
                text: 'After studying and working abroad, I returned to my roots. My family has long made its living from farming and livestock. NeoMalsore grew from the need to carry that work forward without losing what makes the place distinctive.',
            },
            {
                heading: 'What we offer',
                text: 'We offer rural tourism, warm hospitality, and an authentic experience of mountain life. People come for the landscape, the culture, and the human connection. That is the kind of tourism we believe in: tourism that creates jobs locally, rather than passing through and leaving little behind.',
            },
            {
                heading: 'Why it matters',
                text: 'Mal\u00ebsia has extraordinary potential, yet it is too often left out of national development. NeoMalsore is part of my wider belief that rural Albania is not the past. Properly supported, it can be the foundation of a strong and dignified local economy.',
            },
        ],
    },
    parlament: {
        title: 'Parliament | Marjana Ko\u00e7eku',
        description: 'Parliamentary work of Marjana Ko\u00e7eku: independent MP for Shkodr\u00ebr, Committee on Europe, rural development, tourism and European integration.',
        intro: 'As MP for Shkodr\u00ebr County, I work on the issues that shape northern Albania: tourism, rural development, European integration, and the everyday concerns of people across the region.',
        role: 'Independent Member of Parliament, Shkodr\u00ebr County.',
        committees: {
            title: 'Committee work',
            name: 'Committee on Europe and Foreign Affairs',
            role: 'Secretary',
        },
        events: {
            title: 'Statements & visits',
            items: [
                {
                    date: '22 September 2025',
                    heading: 'Visit to landslide-affected communities in Kir-Lotaj-Nd\u00ebrlysaj',
                    text: 'I travelled to the Kir-Lotaj-Nd\u00ebrlysaj area after the landslide to see the damage firsthand and to press for practical support for residents of Dukagjin.',
                },
                {
                    date: '8 September 2025',
                    heading: 'Return to At\u00eb Pjet\u00ebr Meshkalla college',
                    text: 'I visited the school where I spent my teenage years to speak with students and teachers about education, work, and the future of Shkodr\u00ebr.',
                },
            ],
        },
        initiatives: {
            title: 'Policy priorities',
            items: [
                {
                    heading: 'Rural development and tourism in the north',
                    text: 'A central focus of my parliamentary work is supporting rural communities, culturally rooted tourism, and farmers across Mal\u00ebsia e Madhe.',
                },
                {
                    heading: 'European integration',
                    text: "Through my work on the Committee on Europe and Foreign Affairs, I support Albania\u2019s European path, drawing on my background in international relations.",
                },
            ],
        },
    },
    media: {
        title: 'Press & media | Marjana Ko\u00e7eku',
        description: 'Selected interviews, articles, and news coverage of my parliamentary work and the NeoMalsore project.',
        items: [
            { type: 'News', source: 'RTSH', date: 'June 2026', headline: 'Marjana Ko\u00e7eku announces she will serve as an independent MP' },
            { type: 'Interview', source: 'Report TV', date: 'May 2025', headline: 'Marjana Ko\u00e7eku on her election as MP for Shkodr\u00ebr County' },
            { type: 'Profile', source: 'Shqiptarja', date: '2024', headline: 'The young entrepreneur who left Europe to return to her roots' },
        ],
    },
    kontakt: {
        title: 'Contact | Marjana Ko\u00e7eku',
        description: 'Contact Marjana Ko\u00e7eku, Member of Parliament for Shkodr\u00ebr County.',
        intro: 'Use the form below to get in touch. Every message is read personally.',
        namePlaceholder: 'Name',
        emailPlaceholder: 'Your email address',
        messagePlaceholder: 'Your message',
        send: 'Send message',
        sending: 'Sending\u2026',
        sent: 'Message sent.',
        error: 'Failed. Please try again later.',
    },
    siguria: {
        title: 'Security | Marjana Ko\u00e7eku',
        text: 'This website is delivered as a static site over HTTPS. To report a security issue, please use the contact form.',
    },
    privatesia: {
        title: 'Privacy | Marjana Ko\u00e7eku',
        text: 'This website does not use tracking cookies. If you contact me through the form, I will only use the information you choose to send in order to reply. Your details are not sold or shared with third parties, except where the law requires it.',
    },
}

export function getTranslations(locale: Locale): Translations {
    return locale === 'en' ? en : sq
}
