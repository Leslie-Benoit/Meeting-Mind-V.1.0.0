import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import authRoutes from './auth.js'
import meetingRoutes from './meeting.js'
import pool from './db.js'

const app = express()

app.use(express.json())
app.use(cors())

// Request logger
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`)
    next()
})

// Test route
app.get('/api/test', (req, res) => {
    res.json({ 
        message: 'Backend is working!',
        timestamp: new Date()
    })
})

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/meetings', meetingRoutes)


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
}) 
