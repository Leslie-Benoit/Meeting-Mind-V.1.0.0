import { BrowserRouter, Routes, Route, NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Landing from './Pages/Landing'
import Dashboard from './Pages/Dashboard'
import NewMeeting from './Pages/NewMeeting'
import MeetingRoom from './Pages/MeetingRoom'
import Results from './Pages/Results'
import Pricing from './Pages/Pricing'
import Agenda from './Pages/Agenda'
import ActionItems from './Pages/ActionItems'
import Intelligence from './Pages/Intelligence'
import Loading from './Pages/Loading'
import NotFound from './Pages/NotFound'
import Features from './Pages/Features'
import Signup from './Pages/Signup'
import ContactSales from './Pages/ContactSales'
import Login from './Pages/Login'
import './index.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <BrowserRouter>
      <AppContent isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </BrowserRouter>
  )
}

function AppContent({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate()

  function handleLogout() {
    setIsLoggedIn(false)
    navigate('/')
  }

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">MeetingMind</div>
        <ul className="nav-links">
          {isLoggedIn ? (
            <>
              <li><NavLink to="/dashboard">Dashboard</NavLink></li>
              <li><NavLink to="/intelligence">Intelligence</NavLink></li>
              <li><NavLink to="/action-items">Action Items</NavLink></li>
              <li><NavLink to="/new-meeting" className="btn">New Meeting</NavLink></li>
              <li>
                <button
                  onClick={handleLogout}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#86efac', fontSize: '0.95rem', fontWeight: '500' }}
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/features">Features</NavLink></li>
              <li><NavLink to="/pricing">Pricing</NavLink></li>
              <li><NavLink to="/login">Login</NavLink></li>
              <li><NavLink to="/signup" className="btn">Get Started</NavLink></li>
            </>
          )}
        </ul>
      </nav>

      {/* Pages */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/new-meeting" element={<NewMeeting />} />
        <Route path="/meeting-room" element={<MeetingRoom />} />
        <Route path="/results" element={<Results />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/action-items" element={<ActionItems />} />
        <Route path="/intelligence" element={<Intelligence />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/contact-sales" element={<ContactSales />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/features" element={<Features />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 MeetingMind. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App