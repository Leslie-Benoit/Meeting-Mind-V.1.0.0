import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import pool from './db.js'

const router = express.Router()

// Temporary in-memory storage (we'll replace with a real database later)
const users = []

// SIGNUP ROUTE
router.post('/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body
        // Check if user already exists
        const existingUser = await pool.query('SELECT * FROM users WHERE email = $1', [email])
     if (existingUser.rows.length > 0) {
    return res.status(400).json({ error: 'Email already registered' })
}

        // Hash the password - never store plain text passwords
      const hashedPassword = await bcrypt.hash(password, 10)

const result = await pool.query(
    'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
    [name, email, hashedPassword]
)
      
// Create the new user
const newUser = result.rows[0]



// Create a JWT token for this user
        const token = jwt.sign({ userId: newUser.id }, process.env.JWT_SECRET, { expiresIn: '7d' })

        res.json({ 
            message: 'Account created successfully',
            token,
            user: { id: newUser.id, name: newUser.name, email: newUser.email }
        })
    } catch (error) {
        res.status(500).json({ error: 'Server error' })
    }
})

// LOGIN ROUTE
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body

        // Find user by email
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email])
const user = result.rows[0]
        if (!user) {
            return res.status(400).json({ error: 'Invalid email or password' })
        }

        // Check if password matches
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid email or password' })
        }

        // Create JWT token
        const token = jwt.
          sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '7d' })

        res.json({ 
            message: 'Login successful',
            token,
            user: { id: user.id, name: user.name, email: user.email }
        })
    } catch (error) {
        res.status(500).json({ error: 'Server error' })
    }
})

export default router