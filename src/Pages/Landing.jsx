import { Link } from 'react-router-dom'

function Landing() {
    return (
        <div>

            {/* Hero */}
            <section className="hero">
                <div className="hero-content">
                    <h1>Your Meetings.<br /><span>Finally Intelligent.</span></h1>
                    <p>MeetingMind records, transcribes, and transforms every meeting into clear summaries, action items, and decisions — automatically sent to your entire team.</p>
                    <div className="hero-buttons">
                        <Link to="/signup" className="btn">Get Started</Link>
                        <Link to="/pricing" className="btn-outline">View Pricing</Link>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="section">
                <h2 className="section-title">Why MeetingMind?</h2>
                <p className="section-subtitle">Everything your team needs after every meeting — without lifting a finger.</p>
                <div className="cards">
                    <div className="card">
                        <div className="card-icon">🎙️</div>
                        <h3>Live Recording</h3>
                        <p>MeetingMind records your meeting in real time the moment it starts. No setup, no uploads, no forgetting to hit record.</p>
                    </div>
                    <div className="card">
                        <div className="card-icon">🧠</div>
                        <h3>AI Intelligence</h3>
                        <p>Our AI analyzes every word spoken and extracts decisions, action items, and risks automatically.</p>
                    </div>
                    <div className="card">
                        <div className="card-icon">📨</div>
                        <h3>Auto Distribution</h3>
                        <p>The moment your meeting ends a professional summary is emailed to every attendee and stakeholder instantly.</p>
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section className="section">
                <h2 className="section-title">How It Works</h2>
                <p className="section-subtitle">Three steps. Zero effort.</p>
                <div className="cards">
                    <div className="card">
                        <div className="card-icon">1️⃣</div>
                        <h3>Create a Meeting</h3>
                        <p>Add your meeting title, date, and invite your attendees. MeetingMind sends them a joining link automatically.</p>
                    </div>
                    <div className="card">
                        <div className="card-icon">2️⃣</div>
                        <h3>Meet Normally</h3>
                        <p>Run your meeting as you always would. MeetingMind listens and records everything live in the background.</p>
                    </div>
                    <div className="card">
                        <div className="card-icon">3️⃣</div>
                        <h3>Get Your Summary</h3>
                        <p>Click End Meeting. Within seconds your AI summary, action items, and decisions land in everyone's inbox.</p>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Landing