# MeetingMind V1.0

MeetingMind is a full-stack SaaS meeting management platform built with React, Node.js, and Express.

This is Version 1.0 of the application and represents the first working full-stack implementation of the system.

---

## Overview

MeetingMind allows users to:
- Create accounts and log in securely
- Create and manage meetings
- View a dashboard of meetings
- Simulate AI-powered meeting insights (UI only in V1.0)

This version focuses on building the full-stack structure and authentication flow.

---

## Tech Stack

### Frontend
- React (Vite)
- React Router
- CSS

### Backend
- Node.js
- Express
- JWT authentication
- bcryptjs password hashing

---

## Features

### Authentication
- User signup
- User login
- JWT-based session handling

### Meetings
- Create meetings
- View meetings in dashboard
- Meetings stored in server memory (temporary)

### UI
- Fully responsive design
- Landing page
- Dashboard
- Pricing page
- Login / Signup pages
- Meeting creation interface

---

## Important Limitation (V1.0)

This version uses **in-memory storage only**.

That means:
- Users are stored in memory
- Meetings are stored in memory
- All data is lost when the server restarts

No database is connected in this version.

---

## V1.0 Purpose

This version was built to learn and implement:
- Full-stack architecture
- Authentication flow (JWT)
- API creation with Express
- React routing and UI structure
- Frontend + backend integration


## Author

Built by Leslie Benoit