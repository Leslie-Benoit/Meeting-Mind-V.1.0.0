import express from 'express'
import jwt from 'jsonwebtoken'
import pool from './db.js'

const router = express.Router()

// Temporary in-memory storage (will be replaced with database)
const meetings = []

// MIDDLEWARE — Protect routes with JWT
function authenticateToken(req, res, next) {
    const token = req.headers['authorization']?.split(' ')[1]
    
    if (!token) {
        return res.status(401).json({ error: 'Access denied. No token provided.' })
    }

    try {
      const verified = jwt.verify(token, process.env.JWT_SECRET)
        req.userId = verified.userId
        next()
    } catch (error) {
        res.status(403).json({ error: 'Invalid token' })
    }
}

// CREATE — Save a new meeting
router.post('/', authenticateToken, async (req, res) => {
    const { title, date, time, attendees, agenda } = req.body

const result = await pool.query(
    `INSERT INTO meetings (user_id, title, date, time, attendees, agenda, status)
     VALUES ($1, $2, $3, $4, $5, $6, $7)
     RETURNING *`,
    [req.userId, title, date, time, attendees, agenda, 'scheduled']
)

const newMeeting = result.rows[0]

    res.json({ 
        message: 'Meeting created successfully',
        meeting: newMeeting
    })
})

// READ — Get all meetings for logged in user
router.get('/', authenticateToken, async (req, res) => {
    const result = await pool.query('SELECT * FROM meetings WHERE user_id = $1', [req.userId])
    res.json({ meetings: result.rows })
})

// READ — Get one specific meeting
router.get('/:id', authenticateToken, async (req, res) => {
    const result = await pool.query(
        'SELECT * FROM meetings WHERE id = $1 AND user_id = $2',
        [req.params.id, req.userId]
    )
    const meeting = result.rows[0]

    if (!meeting) {
        return res.status(404).json({ error: 'Meeting not found' })
    }

    res.json({ meeting })
})

// UPDATE — Edit a meeting
router.put('/:id', authenticateToken, (req, res) => {
    const meetingIndex = meetings.findIndex(m => m.id === parseInt(req.params.id) && m.userId === req.userId)
    
    if (meetingIndex === -1) {
        return res.status(404).json({ error: 'Meeting not found' })
    }

    meetings[meetingIndex] = {
        ...meetings[meetingIndex],
        ...req.body,
        updatedAt: new Date()
    }

    res.json({ 
        message: 'Meeting updated successfully',
        meeting: meetings[meetingIndex]
    })
})

// DELETE — Remove a meeting
router.delete('/:id', authenticateToken, async (req, res) => {
    const result = await pool.query(
        'DELETE FROM meetings WHERE id = $1 AND user_id = $2 RETURNING *',
        [req.params.id, req.userId]
    )

    if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Meeting not found' })
    }

    res.json({ message: 'Meeting deleted successfully' })
})

export default router