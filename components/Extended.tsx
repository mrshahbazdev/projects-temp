const areas = [
    { domain: 'Protocol mechanics', focus: 'Participation models, boundary conditions, state transitions' },
    { domain: 'Governance systems', focus: 'Voting mechanics, quorum structures, execution frameworks' },
    { domain: 'Distributed networks', focus: 'Consensus modelling, fault tolerance, finality guarantees' },
    { domain: 'Economic rules', focus: 'Supply mechanisms, incentive alignment, cap structures' },
    { domain: 'Security architecture', focus: 'Cryptographic enforcement, circuit verification, review oversight' },
]

const method = [
    'Model system behaviour under constraint',
    'Embed rules at protocol level',
    'Verify determinism via formal review',
    'Deploy with oversight mechanisms intact',
]

export default function Extended() {
    return (
        <>
            {/* Areas of Work */}
            <section className="prose-custom py-12 border-t border-border">
                <h2 className="text-base font-medium mb-6">Areas of Work</h2>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th style={{ textAlign: 'left', fontWeight: 500, paddingBottom: '0.75rem', fontSize: '0.875rem', color: '#666' }}>Domain</th>
                            <th style={{ textAlign: 'left', fontWeight: 500, paddingBottom: '0.75rem', fontSize: '0.875rem', color: '#666' }}>Focus</th>
                        </tr>
                    </thead>
                    <tbody>
                        {areas.map((row, i) => (
                            <tr key={i} style={{ borderTop: '1px solid #E5E5E5' }}>
                                <td style={{ padding: '0.75rem 1rem 0.75rem 0', fontSize: '0.9375rem', whiteSpace: 'nowrap' }}>{row.domain}</td>
                                <td style={{ padding: '0.75rem 0', fontSize: '0.9375rem', color: '#444' }}>{row.focus}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            {/* Method */}
            <section className="prose-custom py-12 border-t border-border">
                <h2 className="text-base font-medium mb-6">Method</h2>
                <ol style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                    {method.map((step, i) => (
                        <li key={i} style={{ display: 'flex', gap: '1rem', marginBottom: '0.75rem', fontSize: '1rem', lineHeight: '1.6' }}>
                            <span style={{ color: '#666', minWidth: '1.5rem' }}>{i + 1}.</span>
                            <span>{step}</span>
                        </li>
                    ))}
                </ol>
            </section>

            {/* Current Status */}
            <section className="prose-custom py-12 border-t border-border">
                <h2 className="text-base font-medium mb-6">Current Status</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>
                    <p>Active protocol development.</p>
                    <p>Security review ongoing.</p>
                    <p style={{ color: '#666' }}>No public announcements at this time.</p>
                </div>
            </section>
        </>
    )
}
