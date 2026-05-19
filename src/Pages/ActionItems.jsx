import { useState } from 'react'

function ActionItems() {
    const [filter, setFilter] = useState('all')

    const actionItems = [
        {
            id: 1,
            person: 'Sarah Miller',
            task: 'Deliver social media report',
            due: 'April 18, 2025',
            meeting: 'Q2 Marketing Strategy',
            status: 'pending'
        },
        {
            id: 2,
            person: 'James Carter',
            task: 'Finalize campaign brief',
            due: 'April 18, 2025',
            meeting: 'Q2 Marketing Strategy',
            status: 'pending'
        },
        {
            id: 3,
            person: 'Priya Patel',
            task: 'Build analytics dashboard',
            due: 'April 30, 2025',
            meeting: 'Q2 Marketing Strategy',
            status: 'completed'
        },
        {
            id: 4,
            person: 'Alex Johnson',
            task: 'Approve Q2 budget allocation',
            due: 'April 15, 2025',
            meeting: 'Q2 Marketing Strategy',
            status: 'completed'
        },
        {
            id: 5,
            person: 'Tom Williams',
            task: 'Finalize vendor contracts',
            due: 'April 10, 2025',
            meeting: 'Product Roadmap Review',
            status: 'overdue'
        },
        {
            id: 6,
            person: 'Sarah Miller',
            task: 'Update brand guidelines',
            due: 'April 12, 2025',
            meeting: 'Product Roadmap Review',
            status: 'completed'
        },
    ]

    // Filter items based on selected filter
    const filtered = actionItems.filter(item => {
        if (filter === 'all') return true
        return item.status === filter
    })

    return (
        <div className="dashboard">

            {/* Header */}
            <h1>Action Item Tracker</h1>
            <p className="dashboard-subtitle">Track every action item across all meetings in one place.</p>

            {/* Stats */}
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>{actionItems.length}</h3>
                    <p>Total Action Items</p>
                </div>
                <div className="stat-card">
                    <h3>{actionItems.filter(i => i.status === 'completed').length}</h3>
                    <p>Completed</p>
                </div>
                <div className="stat-card">
                    <h3>{actionItems.filter(i => i.status === 'pending').length}</h3>
                    <p>Pending</p>
                </div>
                <div className="stat-card">
                    <h3>{actionItems.filter(i => i.status === 'overdue').length}</h3>
                    <p>Overdue</p>
                </div>
            </div>

            {/* Filter Buttons */}
            <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', flexWrap: 'wrap' }}>
                {['all', 'pending', 'completed', 'overdue'].map(f => (
                    <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={filter === f ? 'btn' : 'btn-outline'}
                        style={{ padding: '8px 20px', fontSize: '0.85rem' }}
                    >
                        {f.charAt(0).toUpperCase() + f.slice(1)}
                    </button>
                ))}
            </div>

            {/* Action Items List */}
            <div className="meetings-list">
                {filtered.map(item => (
                    <div className="meeting-item" key={item.id}>
                        <div>
                            <h4>{item.task}</h4>
                            <p>{item.person} · {item.meeting} · Due: {item.due}</p>
                        </div>
                        <span className={`badge ${
                            item.status === 'completed' ? 'badge-complete' :
                            item.status === 'overdue' ? 'badge-live' :
                            'badge-pending'
                        }`}>
                            {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                        </span>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default ActionItems