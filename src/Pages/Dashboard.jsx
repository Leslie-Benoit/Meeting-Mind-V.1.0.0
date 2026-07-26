import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
    const [meetings, setMeetings] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchMeetings() {
            const token = localStorage.getItem('token')

            try {
                const response = await fetch('http://localhost:5000/api/meetings', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })

                const data = await response.json()

                if (response.ok) {
                    setMeetings(data.meetings)
                }
            } catch (error) {
                console.error('Error fetching meetings:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchMeetings()
    }, [])

    if (loading) {
        return <div className="dashboard"><p>Loading your meetings...</p></div>
    }

    return (
        <div className="dashboard">

            {/* Header */}
            <h1>Welcome back 👋</h1>
            <p className="dashboard-subtitle">Here is everything happening across your meetings.</p>

            {meetings.length > 0 ? (
                /* NORMAL STATE — user has meetings */
                <div>
                    {/* Stats */}
                    <div className="stats-grid">
                        <div className="stat-card">
                            <h3>{meetings.length}</h3>
                            <p>Total Meetings</p>
                        </div>
                    </div>

                    {/* Recent Meetings */}
                    <h2 style={{ color: '#ffffff', marginBottom: '24px', fontSize: '1.3rem' }}>
                        Recent Meetings
                    </h2>
                    <div className="meetings-list">
                        {meetings.map((meeting) => (
                            <div className="meeting-item" key={meeting.id}>
                                <div>
                                    <h4>{meeting.title}</h4>
                                    <p>{meeting.date} · {meeting.time}</p>
                                </div>
                                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                    <span className="badge badge-complete">{meeting.status}</span>
                                    <Link to="/results" className="btn">View Summary</Link>
                                </div>
                            </div>
                        ))}
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