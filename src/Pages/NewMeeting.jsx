import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function NewMeeting() {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [attendees, setAttendees] = useState([])
    const [currentAttendee, setCurrentAttendee] = useState('')
    const [agenda, setAgenda] = useState('')

    const navigate = useNavigate()

    function handleAddAttendee(e) {
        if (e.key === 'Enter' && currentAttendee.trim() !== '') {
            setAttendees([...attendees, currentAttendee.trim()])
            setCurrentAttendee('')
        }
    }

    async function handleSubmit(e) {
        e.preventDefault()

        const token = localStorage.getItem('token')

        try {
            const response = await fetch('http://localhost:5000/api/meetings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    title,
                    date,
                    time,
                    attendees,
                    agenda
                })
            })

            const data = await response.json()

            if (response.ok) {
                alert('Meeting created successfully!')
                navigate('/dashboard')
            } else {
                alert(data.error)
            }
        } catch (error) {
            alert('Error creating meeting')
        }
    }

    return (
        <div className="form-page">
            <h1>Create a New Meeting</h1>
            <p>Fill in the details below. Attendees will receive a joining link automatically.</p>

            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label>Meeting Title</label>
                    <input
                        type="text"
                        placeholder="e.g. Q2 Marketing Strategy"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Date</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Time</label>
                    <input
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Add Attendees</label>
                    <input
                        type="email"
                        placeholder="Type email and press Enter"
                        value={currentAttendee}
                        onChange={(e) => setCurrentAttendee(e.target.value)}
                        onKeyDown={handleAddAttendee}
                    />
                    <div className="attendee-tags">
                        {attendees.map((attendee, index) => (
                            <span key={index} className="attendee-tag">
                                {attendee}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="form-group">
                    <label>Meeting Agenda</label>
                    <textarea
                        placeholder="Add your agenda topics here"
                        value={agenda}
                        onChange={(e) => setAgenda(e.target.value)}
                    ></textarea>
                </div>

                <button type="submit" className="btn">
                    Create Meeting
                </button>

            </form>
        </div>
    )
}

export default NewMeeting