import { CONFIG, SOCIAL } from './constants'

export const personSchema = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'Person',
            '@id': `${CONFIG.siteUrl}/#person`,
            name: 'Marjana Ko\u00e7eku',
            givenName: 'Marjana',
            familyName: 'Ko\u00e7eku',
            jobTitle: "Deputete n'Kuvendin e Shqip\u00ebris\u00eb",
            description: "Deputete p\u00ebr Qarkun e Shkodr\u00ebs, prej Dukagjinit. NeoMalsore, turiz\u00ebm rural dhe z\u00eb i Mal\u00ebsis\u00eb s\u00eb Madhe n'Kuvendin e Shqip\u00ebris\u00eb.",
            url: CONFIG.siteUrl,
            image: `${CONFIG.siteUrl}/profile.jpg`,
            nationality: { '@type': 'Country', name: 'Albania' },
            birthPlace: {
                '@type': 'Place',
                name: 'Shkodr\u00ebr',
                address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Shkodr\u00ebr',
                    addressRegion: 'Shkodr\u00ebr County',
                    addressCountry: 'AL',
                },
            },
            homeLocation: {
                '@type': 'Place',
                name: 'Shosh, Dukagjin',
                address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Shosh',
                    addressRegion: 'Mal\u00ebsi e Madhe',
                    addressCountry: 'AL',
                },
            },
            memberOf: {
                '@type': 'Organization',
                name: 'Parliament of Albania',
                url: 'https://www.parlament.al/',
            },
            worksFor: [
                {
                    '@type': 'Organization',
                    name: 'NeoMalsore',
                    url: `${CONFIG.siteUrl}/neomalsore/`,
                },
            ],
            alumniOf: [
                { '@type': 'EducationalOrganization', name: 'At\u00eb Pjet\u00ebr Meshkalla' },
                { '@type': 'CollegeOrUniversity', name: 'University of Genoa' },
            ],
            sameAs: [SOCIAL.facebook, SOCIAL.instagram, SOCIAL.linkedin, SOCIAL.x],
            knowsAbout: [
                'Marjana Ko\u00e7eku', 'Marjana Koceku', 'Dukagjin', 'Shosh',
                'Mal\u00ebsi e Madhe', 'Mal\u00ebsia e Madhe', 'NeoMalsore',
                'deputete', 'deputete Shkodr\u00ebr', 'deputete e pavarur',
                'Kuvendi i Shqip\u00ebris\u00eb', 'turiz\u00ebm rural', 'agroturiz\u00ebm',
                'Shkodr\u00ebr', 'Qarku i Shkodr\u00ebs', 'veri i Shqip\u00ebris\u00eb',
            ],
        },
        {
            '@type': 'WebSite',
            '@id': `${CONFIG.siteUrl}/#website`,
            name: 'Marjana Ko\u00e7eku',
            url: CONFIG.siteUrl,
            description: "Deputete p\u00ebr Qarkun e Shkodr\u00ebs, prej Dukagjinit. NeoMalsore, turiz\u00ebm rural dhe z\u00eb i Mal\u00ebsis\u00eb s\u00eb Madhe n'Kuvendin e Shqip\u00ebris\u00eb.",
            inLanguage: ['sq', 'en'],
            publisher: { '@id': `${CONFIG.siteUrl}/#person` },
        },
        {
            '@type': 'ProfilePage',
            '@id': `${CONFIG.siteUrl}/#profilepage`,
            name: 'Marjana Ko\u00e7eku',
            url: CONFIG.siteUrl,
            inLanguage: 'sq-AL',
            mainEntity: { '@id': `${CONFIG.siteUrl}/#person` },
            isPartOf: { '@id': `${CONFIG.siteUrl}/#website` },
        },
    ],
}
