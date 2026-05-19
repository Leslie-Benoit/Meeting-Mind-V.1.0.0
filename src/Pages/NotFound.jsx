import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div style={{
            minHeight: '100vh',
            background: '#0f1a12',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '40px 20px'
        }}>

            {/* 404 Number */}
            <h1 style={{
                fontSize: '8rem',
                fontWeight: '800',
                color: '#22c55e',
                lineHeight: '1',
                marginBottom: '16px'
            }}>
                404
            </h1>

            {/* Message */}
            <h2 style={{
                color: '#ffffff',
                fontSize: '1.8rem',
                fontWeight: '700',
                marginBottom: '16px'
            }}>
                This page doesn't exist
            </h2>

            <p style={{
                color: '#86efac',
                fontSize: '1rem',
                maxWidth: '400px',
                marginBottom: '40px'
            }}>
                The page you are looking for may have been moved, deleted, or never existed. Let's get you back on track.
            </p>

            {/* Buttons */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Link to="/" className="btn">Back to Home</Link>
                <Link to="/dashboard" className="btn-outline">Go to Dashboard</Link>
            </div>

        </div>
    )
}

export default NotFound