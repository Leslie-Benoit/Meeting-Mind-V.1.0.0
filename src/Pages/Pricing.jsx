import { Link } from 'react-router-dom'

function Pricing() {
    return (
        <div className="pricing">

            {/* Header */}
            <h2 className="section-title">Simple, Transparent Pricing</h2>
            <p className="section-subtitle">Choose the plan that fits your team. Upgrade or cancel anytime.</p>

            {/* Pricing Cards */}
            <div className="pricing-grid">

                {/* Starter */}
                <div className="pricing-card">
                    <h3>Starter</h3>
                    <div className="price">$49</div>
                    <div className="period">per month</div>
                    <ul className="pricing-features">
                        <li>Up to 10 meetings per month</li>
                        <li>AI summary and action items</li>
                        <li>Up to 5 attendees per meeting</li>
                        <li>Email distribution</li>
                        <li>7 day meeting history</li>
                    </ul>
                    <Link to="/signup" className="btn-outline">Get Started</Link>
                </div>

                {/* Pro - Featured */}
                <div className="pricing-card featured">
                    <h3>Pro</h3>
                    <div className="price">$199</div>
                    <div className="period">per month</div>
                    <ul className="pricing-features">
                        <li>Unlimited meetings</li>
                        <li>AI summary, action items and risks</li>
                        <li>Unlimited attendees</li>
                        <li>Email and Slack distribution</li>
                        <li>Smart agenda builder</li>
                        <li>Accountability follow ups</li>
                        <li>Meeting intelligence dashboard</li>
                        <li>90 day meeting history</li>
                    </ul>
                    <Link to="/signup " className="btn" style={{ background: '#0f1a12', color: '#22c55e' }}>
                        Get Started
                    </Link>
                </div>

                {/* Enterprise */}
                <div className="pricing-card">
                    <h3>Enterprise</h3>
                    <div className="price">Custom</div>
                    <div className="period">contact us</div>
                    <ul className="pricing-features">
                        <li>Everything in Pro</li>
                        <li>Dedicated account manager</li>
                        <li>Custom AI model training</li>
                        <li>SSO and advanced security</li>
                        <li>API access</li>
                        <li>Unlimited meeting history</li>
                        <li>SLA guarantee</li>
                    </ul>
                 <Link to="/contact-sales" className="btn-outline">Contact Sales</Link>
                </div>

            </div>

        </div>
    )
}

export default Pricing