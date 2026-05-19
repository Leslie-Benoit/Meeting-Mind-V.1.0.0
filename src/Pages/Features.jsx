import { Link } from 'react-router-dom'

function Features() {
    return (
        <div>

            {/* Hero */}
            <section className="hero" style={{ minHeight: '60vh' }}>
                <div className="hero-content">
                    <h1>Everything Your Team<br /><span>Needs After Every Meeting.</span></h1>
                    <p>MeetingMind combines live recording, AI intelligence, and automatic distribution into one seamless platform built for modern teams.</p>
                    <div className="hero-buttons">
                        <Link to="/signup" className="btn">Start Free Trial</Link>
                        <Link to="/pricing" className="btn-outline">View Pricing</Link>
                    </div>
                </div>
            </section>

            {/* Feature 1 — Live Recording */}
            <section className="section">
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '60px',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    <div style={{ flex: '1', minWidth: '280px', maxWidth: '480px' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🎙️</div>
                        <h2 style={{ color: '#ffffff', fontSize: '2rem', fontWeight: '700', marginBottom: '16px' }}>
                            Live Recording
                        </h2>
                        <p style={{ color: '#86efac', fontSize: '1rem', lineHeight: '1.8', marginBottom: '24px' }}>
                            MeetingMind records every word the moment your meeting starts. No manual uploads. No forgetting to hit record. Just start your meeting and let MeetingMind handle the rest.
                        </p>
                        <ul className="action-items" style={{ marginBottom: '24px' }}>
                            <li className="action-item">Automatic recording from meeting start</li>
                            <li className="action-item">Real time live transcript preview</li>
                            <li className="action-item">Speaker identification and labeling</li>
                            <li className="action-item">Secure encrypted audio storage</li>
                        </ul>
                    </div>
                    <div style={{
                        flex: '1',
                        minWidth: '280px',
                        maxWidth: '480px',
                        background: '#142018',
                        border: '1px solid #1a2e1d',
                        borderRadius: '16px',
                        padding: '32px'
                    }}>
                        <p style={{ color: '#22c55e', fontSize: '0.85rem', fontWeight: '600', marginBottom: '16px' }}>
                            LIVE TRANSCRIPT
                        </p>
                        <p style={{ color: '#86efac', fontSize: '0.9rem', lineHeight: '2' }}>
                            <strong style={{ color: '#ffffff' }}>Alex:</strong> Let's start with the Q2 budget...<br />
                            <strong style={{ color: '#ffffff' }}>Sarah:</strong> I'll handle the social report by Friday.<br />
                            <strong style={{ color: '#ffffff' }}>James:</strong> We need the campaign brief this week.<br />
                            <strong style={{ color: '#ffffff' }}>Priya:</strong> I can own the analytics dashboard.
                        </p>
                    </div>
                </div>
            </section>

            {/* Feature 2 — AI Intelligence */}
            <section className="section" style={{ background: '#0a1209' }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '60px',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    flexDirection: 'row-reverse'
                }}>
                    <div style={{ flex: '1', minWidth: '280px', maxWidth: '480px' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🧠</div>
                        <h2 style={{ color: '#ffffff', fontSize: '2rem', fontWeight: '700', marginBottom: '16px' }}>
                            AI Intelligence
                        </h2>
                        <p style={{ color: '#86efac', fontSize: '1rem', lineHeight: '1.8', marginBottom: '24px' }}>
                            Our AI doesn't just transcribe — it thinks. Every meeting is analyzed for action items, decisions, risks, and recurring patterns so nothing important ever gets missed.
                        </p>
                        <ul className="action-items" style={{ marginBottom: '24px' }}>
                            <li className="action-item">Automatic action item extraction</li>
                            <li className="action-item">Decision and risk detection</li>
                            <li className="action-item">Recurring topic identification</li>
                            <li className="action-item">Executive summary generation</li>
                        </ul>
                    </div>
                    <div style={{
                        flex: '1',
                        minWidth: '280px',
                        maxWidth: '480px',
                        background: '#142018',
                        border: '1px solid #1a2e1d',
                        borderRadius: '16px',
                        padding: '32px'
                    }}>
                        <p style={{ color: '#22c55e', fontSize: '0.85rem', fontWeight: '600', marginBottom: '16px' }}>
                            AI DETECTED
                        </p>
                        <ul className="action-items">
                            <li className="action-item">
                                <div>
                                    <strong>Sarah Miller</strong> — Social media report
                                    <span style={{ color: '#86efac', fontSize: '0.8rem', display: 'block' }}>Due Friday</span>
                                </div>
                            </li>
                            <li className="action-item">
                                <div>
                                    <strong>James Carter</strong> — Campaign brief
                                    <span style={{ color: '#86efac', fontSize: '0.8rem', display: 'block' }}>Due this week</span>
                                </div>
                            </li>
                            <li className="action-item">
                                <div>
                                    <strong>Priya Patel</strong> — Analytics dashboard
                                    <span style={{ color: '#86efac', fontSize: '0.8rem', display: 'block' }}>Due end of month</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Feature 3 — Auto Distribution */}
            <section className="section">
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '60px',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    <div style={{ flex: '1', minWidth: '280px', maxWidth: '480px' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '16px' }}>📨</div>
                        <h2 style={{ color: '#ffffff', fontSize: '2rem', fontWeight: '700', marginBottom: '16px' }}>
                            Auto Distribution
                        </h2>
                        <p style={{ color: '#86efac', fontSize: '1rem', lineHeight: '1.8', marginBottom: '24px' }}>
                            The moment your meeting ends every attendee and stakeholder receives a professional summary automatically. No manual follow up emails. No one left out of the loop.
                        </p>
                        <ul className="action-items" style={{ marginBottom: '24px' }}>
                            <li className="action-item">Instant email delivery to all attendees</li>
                            <li className="action-item">Individual action item reminders</li>
                            <li className="action-item">Slack channel integration</li>
                            <li className="action-item">PDF summary download</li>
                        </ul>
                    </div>
                    <div style={{
                        flex: '1',
                        minWidth: '280px',
                        maxWidth: '480px',
                        background: '#142018',
                        border: '1px solid #1a2e1d',
                        borderRadius: '16px',
                        padding: '32px'
                    }}>
                        <p style={{ color: '#22c55e', fontSize: '0.85rem', fontWeight: '600', marginBottom: '16px' }}>
                            SENT TO 5 ATTENDEES
                        </p>
                        <ul className="action-items">
                            <li className="action-item">✓ alex@company.com</li>
                            <li className="action-item">✓ sarah@company.com</li>
                            <li className="action-item">✓ james@company.com</li>
                            <li className="action-item">✓ priya@company.com</li>
                            <li className="action-item">✓ tom@company.com</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Feature 4 — Accountability */}
            <section className="section" style={{ background: '#0a1209' }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '60px',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    flexDirection: 'row-reverse'
                }}>
                    <div style={{ flex: '1', minWidth: '280px', maxWidth: '480px' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '16px' }}>📊</div>
                        <h2 style={{ color: '#ffffff', fontSize: '2rem', fontWeight: '700', marginBottom: '16px' }}>
                            Accountability Follow Up
                        </h2>
                        <p style={{ color: '#86efac', fontSize: '1rem', lineHeight: '1.8', marginBottom: '24px' }}>
                            MeetingMind tracks every action item and automatically follows up with reminders before deadlines and completion checks after. Nothing falls through the cracks.
                        </p>
                        <ul className="action-items" style={{ marginBottom: '24px' }}>
                            <li className="action-item">Automatic deadline reminders</li>
                            <li className="action-item">Completion check follow ups</li>
                            <li className="action-item">Manager visibility on all items</li>
                            <li className="action-item">Cross meeting accountability report</li>
                        </ul>
                    </div>
                    <div style={{
                        flex: '1',
                        minWidth: '280px',
                        maxWidth: '480px',
                        background: '#142018',
                        border: '1px solid #1a2e1d',
                        borderRadius: '16px',
                        padding: '32px'
                    }}>
                        <p style={{ color: '#22c55e', fontSize: '0.85rem', fontWeight: '600', marginBottom: '16px' }}>
                            ACCOUNTABILITY REPORT
                        </p>
                        <ul className="action-items">
                            <li className="action-item">
                                <div>
                                    <strong style={{ color: '#22c55e' }}>87%</strong> completion rate
                                    <span style={{ color: '#86efac', fontSize: '0.8rem', display: 'block' }}>Across 24 meetings</span>
                                </div>
                            </li>
                            <li className="action-item">
                                <div>
                                    <strong style={{ color: '#ffffff' }}>Top performer</strong>
                                    <span style={{ color: '#86efac', fontSize: '0.8rem', display: 'block' }}>Priya Patel — 100%</span>
                                </div>
                            </li>
                            <li className="action-item">
                                <div>
                                    <strong style={{ color: '#ef4444' }}>Needs attention</strong>
                                    <span style={{ color: '#86efac', fontSize: '0.8rem', display: 'block' }}>Tom Williams — 60%</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section" style={{ textAlign: 'center' }}>
                <h2 className="section-title">Ready to Transform Your Meetings?</h2>
                <p className="section-subtitle">Join thousands of teams already using MeetingMind to run smarter meetings.</p>
                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link to="/signup" className="btn">Start Free Trial</Link>
                    <Link to="/pricing" className="btn-outline">View Pricing</Link>
                </div>
            </section>

        </div>
    )
}

export default Features