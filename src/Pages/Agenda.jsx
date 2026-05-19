import { useState } from 'react'
import { Link } from 'react-router-dom'

function Agenda() {
    const [topics, setTopics] = useState('')
    const [generated, setGenerated] = useState(false)

    function handleGenerate(e) {
        e.preventDefault()
        setGenerated(true)
    }

    return (
        <div className="form-page">

            {/* Header */}
            <h1>Smart Agenda Builder</h1>
            <p>Drop in your meeting topics below. Our AI will structure them into a timed agenda and send it to all attendees before the meeting begins.</p>

            {/* Input Form */}
            {!generated ? (
                <form onSubmit={handleGenerate}>
                    <div className="form-group">
                        <label>Meeting Topics</label>
                        <textarea
                            placeholder="Add your topics one per line. For example:&#10;Q2 budget review&#10;Marketing campaign update&#10;Hiring plan for Q3&#10;Any other business"
                            value={topics}
                            onChange={(e) => setTopics(e.target.value)}
                            style={{ height: '200px' }}
                        ></textarea>
                    </div>
                    <button type="submit" className="btn">
                        Generate Agenda
                    </button>
                </form>
            ) : (

                /* Generated Agenda */
                <div>
                    <p style={{ color: '#22c55e', marginBottom: '24px', fontWeight: '600' }}>
                        ✓ Agenda generated and sent to all attendees
                    </p>

                    <div className="result-section">
                        <h2>📋 Structured Agenda</h2>
                        <ul className="action-items">
                            <li className="action-item">
                                <div>
                                    <strong>10:00 — 10:10</strong>
                                    <span style={{ display: 'block', color: '#86efac', fontSize: '0.9rem' }}>
                                        Welcome and introductions (10 mins)
                                    </span>
                                </div>
                            </li>
                            <li className="action-item">
                                <div>
                                    <strong>10:10 — 10:25</strong>
                                    <span style={{ display: 'block', color: '#86efac', fontSize: '0.9rem' }}>
                                        Q2 budget review (15 mins)
                                    </span>
                                </div>
                            </li>
                            <li className="action-item">
                                <div>
                                    <strong>10:25 — 10:40</strong>
                                    <span style={{ display: 'block', color: '#86efac', fontSize: '0.9rem' }}>
                                        Marketing campaign update (15 mins)
                                    </span>
                                </div>
                            </li>
                            <li className="action-item">
                                <div>
                                    <strong>10:40 — 10:55</strong>
                                    <span style={{ display: 'block', color: '#86efac', fontSize: '0.9rem' }}>
                                        Hiring plan for Q3 (15 mins)
                                    </span>
                                </div>
                            </li>
                            <li className="action-item">
                                <div>
                                    <strong>10:55 — 11:00</strong>
                                    <span style={{ display: 'block', color: '#86efac', fontSize: '0.9rem' }}>
                                        Any other business (5 mins)
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div style={{ display: 'flex', gap: '16px', marginTop: '24px', flexWrap: 'wrap' }}>
                        <button className="btn" onClick={() => setGenerated(false)}>
                            Edit Topics
                        </button>
                        <Link to="/new-meeting" className="btn-outline">
                            Back to Meeting
                        </Link>
                    </div>
                </div>
            )}

        </div>
    )
}

export default Agenda