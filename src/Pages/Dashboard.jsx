import { useState } from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
    // This simulates whether the user has meetings or not
    // When backend is connected this will come from real data
    const [hasMeetings, setHasMeetings] = useState(true)

    return (
        <div className="dashboard">

            {/* Header */}
            <h1>Welcome back, Alex 👋</h1>
            <p className="dashboard-subtitle">Here is everything happening across your meetings.</p>

            {/* Toggle for testing empty state — remove when backend is connected */}
            <div style={{ marginBottom: '24px' }}>
                <button
                    onClick={() => setHasMeetings(!hasMeetings)}
                    className="btn-outline"
                    style={{ padding: '8px 20px', fontSize: '0.85rem' }}
                >
                    {hasMeetings ? 'Preview Empty State' : 'Preview With Meetings'}
                </button>
            </div>

            {hasMeetings ? (
                /* NORMAL STATE — user has meetings */
                <div>
                    {/* Stats */}
                    <div className="stats-grid">
                        <div className="stat-card">
                            <h3>24</h3>
                            <p>Total Meetings</p>
                        </div>
                        <div className="stat-card">
                            <h3>87%</h3>
                            <p>Action Items Completed</p>
                        </div>
                        <div className="stat-card">
                            <h3>142</h3>
                            <p>Action Items Generated</p>
                        </div>
                        <div className="stat-card">
                            <h3>38m</h3>
                            <p>Average Meeting Length</p>
                        </div>
                    </div>

                    {/* Recent Meetings */}
                    <h2 style={{ color: '#ffffff', marginBottom: '24px', fontSize: '1.3rem' }}>
                        Recent Meetings
                    </h2>
                    <div className="meetings-list">
                        <div className="meeting-item">
                            <div>
                                <h4>Q2 Marketing Strategy</h4>
                                <p>April 10, 2025 · 6 attendees · 45 mins</p>
                            </div>
                            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                <span className="badge badge-complete">Complete</span>
                                <Link to="/results" className="btn">View Summary</Link>
                            </div>
                        </div>
                        <div className="meeting-item">
                            <div>
                                <h4>Product Roadmap Review</h4>
                                <p>April 8, 2025 · 4 attendees · 60 mins</p>
                            </div>
                            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                <span className="badge badge-complete">Complete</span>
                                <Link to="/results" className="btn">View Summary</Link>
                            </div>
                        </div>
                        <div className="meeting-item">
                            <div>
                                <h4>Engineering Standup</h4>
                                <p>April 12, 2025 · 8 attendees · 30 mins</p>
                            </div>
                            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                <span className="badge badge-live">Live</span>
                                <Link to="/meeting-room" className="btn">Join Now</Link>
                            </div>
                        </div>
                    </div>

                    {/* New Meeting Button */}
                    <div style={{ marginTop: '40px' }}>
                        <Link to="/new-meeting" className="btn">Start New Meeting</Link>
                    </div>
                </div>
            ) : (
                /* EMPTY STATE — brand new user */
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    padding: '80px 20px'
                }}>
                    <div style={{ fontSize: '4rem', marginBottom: '24px' }}>🎙️</div>
                    <h2 style={{ color: '#ffffff', fontSize: '1.5rem', marginBottom: '12px' }}>
                        No meetings yet
                    </h2>
                    <p style={{ color: '#86efac', maxWidth: '400px', marginBottom: '32px' }}>
                        You have not created any meetings yet. Start your first meeting and MeetingMind will handle the rest.
                    </p>
                    <Link to="/new-meeting" className="btn">
                        Create Your First Meeting
                    </Link>
                </div>
            )}

        </div>
    )
}

export default Dashboard