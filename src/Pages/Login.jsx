import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login({ setIsLoggedIn }) {
    const navigate = useNavigate()
     const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

async function handleSubmit(e) {
    e.preventDefault()

    try {
        const response = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })

        const data = await response.json()

        if (response.ok) {
            // Store the token
            localStorage.setItem('token', data.token)
            localStorage.setItem('user', JSON.stringify(data.user))
            
            setIsLoggedIn(true)
            navigate('/dashboard')
        } else {
            alert(data.error)
        }
    } catch (error) {
        alert('Error connecting to server')
    }
}

    return (
        <div className="form-page">

            <h1>Welcome Back</h1>
            <p>Sign in to your MeetingMind account to continue.</p>

            <form onSubmit={handleSubmit}>

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

                {/* Password */}
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                {/* Forgot Password */}
                <div style={{ textAlign: 'right', marginTop: '-12px', marginBottom: '24px' }}>
                    <a href="#" style={{ color: '#22c55e', fontSize: '0.85rem', textDecoration: 'none' }}>
                        Forgot password?
                    </a>
                </div>

                <button type="submit" className="btn" style={{ width: '100%' }}>
                    Sign In
                </button>

            </form>

            {/* Divider */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                margin: '24px 0',
                color: '#86efac',
                fontSize: '0.85rem'
            }}>
                <div style={{ flex: 1, height: '1px', background: '#1a2e1d' }}></div>
                or
                <div style={{ flex: 1, height: '1px', background: '#1a2e1d' }}></div>
            </div>

            {/* Sign Up Link */}
            <p style={{ color: '#86efac', fontSize: '0.9rem', textAlign: 'center' }}>
                Don't have an account?{' '}
                <Link to="/signup" style={{ color: '#22c55e', fontWeight: '600' }}>
                    Start free trial
                </Link>
            </p>

        </div>
    )
}

export default Login