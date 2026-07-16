import express from 'express'
import jwt from 'jsonwebtoken'

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
router.post('/', authenticateToken, (req, res) => {
    const { title, date, time, attendees, agenda } = req.body

    const newMeeting = {
        id: meetings.length + 1,
        userId: req.userId,
        title,
        date,
        time,
        attendees,
        agenda,
        status: 'scheduled',
        createdAt: new Date()
    }

    meetings.push(newMeeting)

    res.json({ 
        message: 'Meeting created successfully',
        meeting: newMeeting
    })
})

// READ — Get all meetings for logged in user
router.get('/', authenticateToken, (req, res) => {
    const userMeetings = meetings.filter(m => m.userId === req.userId)
    res.json({ meetings: userMeetings })
})

// READ — Get one specific meeting
router.get('/:id', authenticateToken, (req, res) => {
    const meeting = meetings.find(m => m.id === parseInt(req.params.id) && m.userId === req.userId)
    
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
router.delete('/:id', authenticateToken, (req, res) => {
    const meetingIndex = meetings.findIndex(m => m.id === parseInt(req.params.id) && m.userId === req.userId)
    
    if (meetingIndex === -1) {
        return res.status(404).json({ error: 'Meeting not found' })
    }

    meetings.splice(meetingIndex, 1)

    res.json({ message: 'Meeting deleted successfully' })
})

export default router