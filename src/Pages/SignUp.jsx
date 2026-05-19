import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Signup({ setIsLoggedIn }) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [plan, setPlan] = useState('starter')

    const navigate = useNavigate()

async function handleSubmit(e) {
    e.preventDefault()

    try {
        const response = await fetch('http://localhost:5000/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        })

        const data = await response.json()

        if (response.ok) {
            // Store the token in localStorage
            localStorage.setItem('token', data.token)
            localStorage.setItem('user', JSON.stringify(data.user))
            
            // Log them in and navigate to dashboard
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

            <h1>Create Your Account</h1>
            <p>Start your 14 day free trial. No credit card required.</p>

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

                {/* Password */}
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Create a password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                {/* Plan Selection */}
                <div className="form-group">
                    <label>Select Your Plan</label>
                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '8px' }}>
                        {['starter', 'pro', 'enterprise'].map(p => (
                            <button
                                key={p}
                                type="button"
                                onClick={() => setPlan(p)}
                                className={plan === p ? 'btn' : 'btn-outline'}
                                style={{ padding: '8px 20px', fontSize: '0.85rem' }}
                            >
                                {p.charAt(0).toUpperCase() + p.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                <button type="submit" className="btn" style={{ width: '100%', marginTop: '8px' }}>
                    Create Account
                </button>

            </form>

            <p style={{ marginTop: '24px', color: '#86efac', fontSize: '0.9rem' }}>
                Already have an account?{' '}
                <Link to="/login" style={{ color: '#22c55e', fontWeight: '600' }}>
                    Sign In
                </Link>
            </p>

        </div>
    )
}

export default Signup
