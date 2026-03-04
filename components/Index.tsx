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
        <section className="py-8 flex justify-center w-full">
            <nav aria-label="Areas of work">
                <ul className="space-y-2 list-disc marker:text-primary pl-5">
                    {areas.map((area) => (
                        <li key={area} className="text-base text-primary font-medium">
                            {area}
                        </li>
                    ))}
                </ul>
            </nav>
        </section>
    )
}
