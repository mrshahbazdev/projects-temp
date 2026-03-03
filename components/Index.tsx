export default function Index() {
    const areas = [
        'Protocol work',
        'Governance logic',
        'Distributed systems',
        'Platform architecture',
        'Economic rule modelling',
        'Security oversight',
    ]

    return (
        <section className="prose-custom py-12 border-t border-border">
            <nav aria-label="Areas of work">
                <ul className="space-y-3">
                    {areas.map((area) => (
                        <li key={area} className="text-base">
                            {area}
                        </li>
                    ))}
                </ul>
            </nav>
        </section>
    )
}
