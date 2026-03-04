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
        <section className="py-6 w-full mt-4">
            <nav aria-label="Areas of work">
                <ul className="space-y-2 list-disc pl-5">
                    {areas.map((area) => (
                        <li key={area} className="text-[15px] text-[#4a4a4a] marker:text-[#4a4a4a]">
                            {area}
                        </li>
                    ))}
                </ul>
            </nav>
        </section>
    )
}
