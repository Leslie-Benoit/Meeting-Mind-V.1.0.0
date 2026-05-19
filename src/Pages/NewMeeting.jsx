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

    // Adds an attendee to the list when user hits Enter
    function handleAddAttendee(e) {
        if (e.key === 'Enter' && currentAttendee.trim() !== '') {
            setAttendees([...attendees, currentAttendee.trim()])
            setCurrentAttendee('')
        }
    }

    // Handles form submission
    function handleSubmit(e) {
        e.preventDefault()
        navigate('/meeting-room')
    }

    return (
        <div className="form-page">
            <h1>Create a New Meeting</h1>
            <p>Fill in the details below. Attendees will receive a joining link automatically.</p>

            <form onSubmit={handleSubmit}>

                {/* Meeting Title */}
                <div className="form-group">
                    <label>Meeting Title</label>
                    <input
                        type="text"
                        placeholder="e.g. Q2 Marketing Strategy"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                {/* Date */}
                <div className="form-group">
                    <label>Date</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>

                {/* Time */}
                <div className="form-group">
                    <label>Time</label>
                    <input
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                    />
                </div>

                {/* Attendees */}
                <div className="form-group">
                    <label>Add Attendees</label>
                    <input
                        type="email"
                        placeholder="Type email and press Enter"
                        value={currentAttendee}
                        onChange={(e) => setCurrentAttendee(e.target.value)}
                        onKeyDown={handleAddAttendee}
                    />
                    {/* Shows added attendees as tags */}
                    <div className="attendee-tags">
                        {attendees.map((attendee, index) => (
                            <span key={index} className="attendee-tag">
                                {attendee}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Agenda */}
                <div className="form-group">
                    <label>Meeting Agenda</label>
                    <textarea
                        placeholder="Add your agenda topics here, one per line. Our AI will structure them into a timed agenda for your attendees."
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