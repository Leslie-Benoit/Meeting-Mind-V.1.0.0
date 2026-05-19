import { useState } from 'react'
import { Link } from 'react-router-dom'

function ContactSales() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [company, setCompany] = useState('')
    const [size, setSize] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        setSubmitted(true)
    }

    return (
        <div className="form-page">

            <h1>Contact Sales</h1>
            <p>Tell us about your business and a member of our enterprise team will be in touch within 24 hours.</p>

            {submitted ? (
                <div style={{ marginTop: '40px' }}>
                    <p style={{ color: '#22c55e', fontSize: '1.2rem', fontWeight: '600', marginBottom: '16px' }}>
                        ✓ Message received
                    </p>
                    <p style={{ color: '#86efac', marginBottom: '24px' }}>
                        Thank you for reaching out. Our enterprise team will contact you within 24 hours.
                    </p>
                    <Link to="/" className="btn-outline">Back to Home</Link>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>

                    {/* Name */}
                    <div className="form-group">
                        <label>Full Name</label>
                        <input
                            type="text"
                            placeholder="Your full name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    {/* Email */}
                    <div className="form-group">
                        <label>Work Email</label>
                        <input
                            type="email"
                            placeholder="you@company.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    {/* Company */}
                    <div className="form-group">
                        <label>Company Name</label>
                        <input
                            type="text"
                            placeholder="Your company name"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                        />
                    </div>

                    {/* Company Size */}
                    <div className="form-group">
                        <label>Company Size</label>
                        <input
                            type="text"
                            placeholder="e.g. 50-100 employees"
                            value={size}
                            onChange={(e) => setSize(e.target.value)}
                        />
                    </div>

                    {/* Message */}
                    <div className="form-group">
                        <label>How can we help?</label>
                        <textarea
                            placeholder="Tell us about your needs and what you are looking to achieve with MeetingMind."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>

                    <button type="submit" className="btn" style={{ width: '100%' }}>
                        Send Message
                    </button>

                </form>
            )}

        </div>
    )
}

export default ContactSales