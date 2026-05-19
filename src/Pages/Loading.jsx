import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Loading() {
    const navigate = useNavigate()

    // useEffect runs when the page loads
    // After 4 seconds it automatically navigates to Results
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/results')
        }, 4000)

        // Cleanup — cancels the timer if user leaves the page early
        return () => clearTimeout(timer)
    }, [])

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

            {/* Animated Logo */}
            <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                border: '3px solid #1a2e1d',
                borderTop: '3px solid #22c55e',
                animation: 'spin 1s linear infinite',
                marginBottom: '40px'
            }}></div>

            {/* Spinning animation */}
            <style>{`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                @keyframes fadeIn {
                    0% { opacity: 0; transform: translateY(10px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
            `}</style>

            {/* Text */}
            <h1 style={{
                color: '#ffffff',
                fontSize: '1.8rem',
                fontWeight: '700',
                marginBottom: '16px',
                animation: 'fadeIn 0.6s ease'
            }}>
                Analyzing Your Meeting
            </h1>

            <p style={{
                color: '#86efac',
                fontSize: '1rem',
                maxWidth: '400px',
                marginBottom: '60px',
                animation: 'fadeIn 0.8s ease'
            }}>
                Our AI is extracting action items, decisions, and risks from your meeting. This will only take a moment.
            </p>

            {/* Step indicators */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                width: '100%',
                maxWidth: '360px',
                animation: 'fadeIn 1s ease'
            }}>
                {[
                    { label: 'Transcribing audio', delay: '0s' },
                    { label: 'Detecting action items', delay: '1s' },
                    { label: 'Identifying decisions', delay: '2s' },
                    { label: 'Generating summary', delay: '3s' },
                ].map((step, index) => (
                    <div key={index} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid #1a2e1d',
                        borderRadius: '8px',
                        padding: '12px 16px',
                        animation: `fadeIn 0.5s ease ${step.delay} both`
                    }}>
                        <div style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            background: '#22c55e',
                            animation: 'spin 1s linear infinite'
                        }}></div>
                        <span style={{ color: '#86efac', fontSize: '0.9rem' }}>
                            {step.label}
                        </span>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Loading