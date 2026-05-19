function Intelligence() {
    return (
        <div className="dashboard">

            {/* Header */}
            <h1>Meeting Intelligence</h1>
            <p className="dashboard-subtitle">Patterns and insights across all your meetings.</p>

            {/* Stats */}
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>24</h3>
                    <p>Total Meetings This Month</p>
                </div>
                <div className="stat-card">
                    <h3>38m</h3>
                    <p>Average Meeting Length</p>
                </div>
                <div className="stat-card">
                    <h3>87%</h3>
                    <p>Action Item Completion Rate</p>
                </div>
                <div className="stat-card">
                    <h3>142</h3>
                    <p>Total Action Items Generated</p>
                </div>
            </div>

            {/* Top Speakers */}
            <div className="result-section" style={{ marginBottom: '24px' }}>
                <h2>🎙️ Top Speakers</h2>
                <div className="meetings-list">
                    {[
                        { name: 'Alex Johnson', percentage: 32, time: '14m avg' },
                        { name: 'Sarah Miller', percentage: 28, time: '12m avg' },
                        { name: 'James Carter', percentage: 20, time: '8m avg' },
                        { name: 'Priya Patel', percentage: 12, time: '5m avg' },
                        { name: 'Tom Williams', percentage: 8, time: '3m avg' },
                    ].map((speaker, index) => (
                        <div key={index} style={{ marginBottom: '16px' }}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                marginBottom: '6px'
                            }}>
                                <span style={{ color: '#ffffff', fontSize: '0.9rem', fontWeight: '600' }}>
                                    {speaker.name}
                                </span>
                                <span style={{ color: '#86efac', fontSize: '0.85rem' }}>
                                    {speaker.percentage}% · {speaker.time}
                                </span>
                            </div>
                            {/* Progress Bar */}
                            <div style={{
                                background: '#1a2e1d',
                                borderRadius: '8px',
                                height: '8px',
                                width: '100%'
                            }}>
                                <div style={{
                                    background: '#22c55e',
                                    borderRadius: '8px',
                                    height: '8px',
                                    width: `${speaker.percentage}%`,
                                    transition: 'width 0.5s ease'
                                }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Recurring Topics */}
            <div className="result-section" style={{ marginBottom: '24px' }}>
                <h2>🔁 Recurring Topics</h2>
                <ul className="action-items">
                    <li className="action-item">
                        <div>
                            <strong>Budget & Costs</strong>
                            <span style={{ color: '#86efac', fontSize: '0.85rem', display: 'block' }}>
                                Mentioned in 18 of 24 meetings
                            </span>
                        </div>
                    </li>
                    <li className="action-item">
                        <div>
                            <strong>Campaign Performance</strong>
                            <span style={{ color: '#86efac', fontSize: '0.85rem', display: 'block' }}>
                                Mentioned in 14 of 24 meetings
                            </span>
                        </div>
                    </li>
                    <li className="action-item">
                        <div>
                            <strong>Hiring & Headcount</strong>
                            <span style={{ color: '#86efac', fontSize: '0.85rem', display: 'block' }}>
                                Mentioned in 11 of 24 meetings
                            </span>
                        </div>
                    </li>
                    <li className="action-item">
                        <div>
                            <strong>Product Roadmap</strong>
                            <span style={{ color: '#86efac', fontSize: '0.85rem', display: 'block' }}>
                                Mentioned in 9 of 24 meetings
                            </span>
                        </div>
                    </li>
                </ul>
            </div>

            {/* Action Item Report */}
            <div className="result-section">
                <h2>📊 Action Item Report</h2>
                <ul className="action-items">
                    <li className="action-item">
                        <div>
                            <strong style={{ color: '#22c55e' }}>124 Completed</strong>
                            <span style={{ color: '#86efac', fontSize: '0.85rem', display: 'block' }}>
                                87% completion rate across all meetings
                            </span>
                        </div>
                    </li>
                    <li className="action-item">
                        <div>
                            <strong style={{ color: '#ef4444' }}>18 Incomplete</strong>
                            <span style={{ color: '#86efac', fontSize: '0.85rem', display: 'block' }}>
                                13% of action items missed or overdue
                            </span>
                        </div>
                    </li>
                    <li className="action-item">
                        <div>
                            <strong style={{ color: '#ffffff' }}>Top Performer</strong>
                            <span style={{ color: '#86efac', fontSize: '0.85rem', display: 'block' }}>
                                Priya Patel — 100% completion rate
                            </span>
                        </div>
                    </li>
                    <li className="action-item">
                        <div>
                            <strong style={{ color: '#ffffff' }}>Needs Attention</strong>
                            <span style={{ color: '#86efac', fontSize: '0.85rem', display: 'block' }}>
                                Tom Williams — 60% completion rate
                            </span>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Intelligence