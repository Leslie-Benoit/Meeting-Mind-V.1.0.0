import { Link } from 'react-router-dom'

function Results() {
    return (
        <div className="results">

            {/* Header */}
            <h1>Meeting Summary</h1>
            <p className="results-meta">Q2 Marketing Strategy · April 12, 2025 · 45 mins · 5 attendees</p>

            {/* AI Summary */}
            <div className="result-section">
                <h2>🧠 AI Summary</h2>
                <p>
                    The Q2 Marketing Strategy meeting focused on budget allocation,
                    campaign planning, and social media execution. The team agreed
                    to prioritize digital channels for Q2 with an increased focus
                    on analytics driven decision making. Key concerns were raised
                    around timeline for the campaign brief and resource availability
                    for the analytics dashboard build out.
                </p>
            </div>

            {/* Action Items */}
            <div className="result-section">
                <h2>✅ Action Items</h2>
                <ul className="action-items">
                    <li className="action-item">
                        <div>
                            <strong>Sarah Miller</strong> — Deliver social media report
                            <span style={{ color: '#86efac', fontSize: '0.85rem', display: 'block', marginTop: '4px' }}>
                                Due: Friday April 18, 2025
                            </span>
                        </div>
                    </li>
                    <li className="action-item">
                        <div>
                            <strong>James Carter</strong> — Finalize campaign brief
                            <span style={{ color: '#86efac', fontSize: '0.85rem', display: 'block', marginTop: '4px' }}>
                                Due: Friday April 18, 2025
                            </span>
                        </div>
                    </li>
                    <li className="action-item">
                        <div>
                            <strong>Priya Patel</strong> — Build analytics dashboard
                            <span style={{ color: '#86efac', fontSize: '0.85rem', display: 'block', marginTop: '4px' }}>
                                Due: April 30, 2025
                            </span>
                        </div>
                    </li>
                    <li className="action-item">
                        <div>
                            <strong>Alex Johnson</strong> — Approve Q2 budget allocation
                            <span style={{ color: '#86efac', fontSize: '0.85rem', display: 'block', marginTop: '4px' }}>
                                Due: April 15, 2025
                            </span>
                        </div>
                    </li>
                </ul>
            </div>

            {/* Decisions Made */}
            <div className="result-section">
                <h2>🗳️ Decisions Made</h2>
                <ul className="action-items">
                    <li className="action-item">Digital channels will be prioritized for Q2 budget</li>
                    <li className="action-item">Analytics driven approach adopted for all campaigns</li>
                    <li className="action-item">Weekly check ins scheduled every Monday at 10am</li>
                </ul>
            </div>

            {/* Risks Flagged */}
            <div className="result-section">
                <h2>⚠️ Risks Flagged</h2>
                <ul className="action-items">
                    <li className="action-item">Campaign brief timeline may be too tight given current workload</li>
                    <li className="action-item">Analytics dashboard resource availability unconfirmed</li>
                </ul>
            </div>

            {/* Previous Action Items Report */}
            <div className="result-section">
                <h2>📊 Previous Action Items Report</h2>
                <ul className="action-items">
                    <li className="action-item">
                        <div>
                            <strong style={{ color: '#22c55e' }}>✓ Completed</strong> — Tom Williams: Submit Q1 report
                        </div>
                    </li>
                    <li className="action-item">
                        <div>
                            <strong style={{ color: '#22c55e' }}>✓ Completed</strong> — Sarah Miller: Update brand guidelines
                        </div>
                    </li>
                    <li className="action-item">
                        <div>
                            <strong style={{ color: '#ef4444' }}>✗ Incomplete</strong> — James Carter: Finalize vendor contracts
                        </div>
                    </li>
                </ul>
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', gap: '16px', marginTop: '40px', flexWrap: 'wrap' }}>
                <button className="btn">📧 Email Summary to All</button>
                <button className="btn">📄 Download PDF</button>
                <Link to="/dashboard" className="btn-outline">Back to Dashboard</Link>
            </div>

        </div>
    )
}

export default Results