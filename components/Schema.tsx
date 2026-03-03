export default function Schema() {
    // Single @graph document — cleaner and smaller than multiple script tags
    const schema = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Person',
                name: 'Mark Martinaj',
                jobTitle: 'Digital Governance & Distributed Systems Architecture',
                description:
                    'Protocol-level architecture for embedded governance logic and enforceable rule frameworks.',
                url: 'https://markmartinaj.com',
                email: 'contact@markmartinaj.com',
                worksFor: { '@type': 'Organization', name: 'Independent' },
                knowsAbout: [
                    {
                        '@type': 'Thing',
                        name: 'Protocol Architecture',
                        description: 'Core protocol logic and participation boundary design',
                    },
                    {
                        '@type': 'Thing',
                        name: 'Governance Systems',
                        description: 'Voting mechanics, quorum structures, execution frameworks',
                    },
                    {
                        '@type': 'Thing',
                        name: 'Distributed Systems',
                        description: 'Consensus modelling, fault tolerance, finality guarantees',
                    },
                    {
                        '@type': 'Thing',
                        name: 'Economic Rule Modelling',
                        description: 'Supply mechanisms, incentive alignment, cap structures',
                    },
                    {
                        '@type': 'Thing',
                        name: 'Security Oversight',
                        description: 'Cryptographic enforcement, circuit verification, independent review',
                    },
                ],
            },
            {
                '@type': 'WebSite',
                name: 'Mark Martinaj',
                url: 'https://markmartinaj.com',
                description: 'Digital Governance & Distributed Systems Architecture',
                author: { '@type': 'Person', name: 'Mark Martinaj' },
            },
            {
                '@type': 'ProfessionalService',
                name: 'Mark Martinaj',
                description:
                    'Protocol-level architecture for embedded governance logic and enforceable rule frameworks',
                url: 'https://markmartinaj.com',
                email: 'contact@markmartinaj.com',
                areaServed: 'Global',
                serviceType: [
                    'Protocol Architecture',
                    'Governance System Design',
                    'Distributed Systems Modelling',
                    'Security Review Oversight',
                ],
            },
        ],
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}
