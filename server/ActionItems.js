import express from 'express'
import jwt from 'jsonwebtoken'
import pool from './db.js'

const router = express.Router()

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

// CREATE — Add a new action item
router.post('/', authenticateToken, async (req, res) => {
    const { meeting_id, task, assigned_to, due_date, status } = req.body

    const result = await pool.query(
        `INSERT INTO action_items (meeting_id, task, assigned_to, due_date, status)
         VALUES ($1, $2, $3, $4, $5)
         RETURNING *`,
        [meeting_id, task, assigned_to, due_date, status]
    )

    const newActionItem = result.rows[0]

    res.json({
        message: 'Action item created successfully',
        actionItem: newActionItem
    })
})

export default router