import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function MeetingRoom() {
    const [isRecording, setIsRecording] = useState(true)
    const [duration, setDuration] = useState(0)

    const navigate = useNavigate()

    // Handles ending the meeting and navigating to results
 function handleEndMeeting() {
    navigate('/loading')
}

    return (
        <div className="meeting-room">

            {/* Meeting Title */}
            <h1>Q2 Marketing Strategy</h1>
            <p>Started at 10:00 AM · April 12, 2025</p>

            {/* Recording Indicator */}
            <div className="recording-indicator">
                <div className="recording-dot"></div>
                Recording in Progress
            </div>

            {/* Attendees */}
            <div>
                <p style={{ marginBottom: '16px', fontSize: '0.9rem' }}>
                    Attendees
                </p>
                <div className="attendees">
                    <div className="attendee">Alex Johnson</div>
                    <div className="attendee">Sarah Miller</div>
                    <div className="attendee">James Carter</div>
                    <div className="attendee">Priya Patel</div>
                    <div className="attendee">Tom Williams</div>
                </div>
            </div>

            {/* Live Transcript Preview */}
            <div style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '16px',
                padding: '24px',
                maxWidth: '600px',
                width: '100%',
                marginBottom: '40px',
                textAlign: 'left'
            }}>
                <p style={{ color: '#22c55e', fontSize: '0.85rem', marginBottom: '12px', fontWeight: '600' }}>
                    LIVE TRANSCRIPT
                </p>
                <p style={{ color: '#86efac', fontSize: '0.9rem', lineHeight: '1.8' }}>
                    <strong style={{ color: '#ffffff' }}>Alex:</strong> Let's start with the Q2 budget overview...<br />
                    <strong style={{ color: '#ffffff' }}>Sarah:</strong> I'll take care of the social media report by Friday.<br />
                    <strong style={{ color: '#ffffff' }}>James:</strong> We need to finalize the campaign brief this week.<br />
                    <strong style={{ color: '#ffffff' }}>Priya:</strong> I can handle the analytics dashboard by end of month.
                </p>
            </div>

            {/* End Meeting Button */}
            <button className="btn-danger" onClick={handleEndMeeting}>
                End Meeting
            </button>

            <p style={{ marginTop: '16px', fontSize: '0.85rem', color: '#86efac' }}>
                Clicking End Meeting will generate your AI summary instantly.
            </p>

        </div>
    )
}

export default MeetingRoom