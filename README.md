# MeetingMind

MeetingMind is a full-stack meeting management application built with React, Node.js, Express, and PostgreSQL — developed as a hands-on learning project to build real backend and database skills after completing several courses on individual concepts.

---

## Project Status: Learning Milestone, Intentionally Paused

This project was originally scoped as a complete, AI-powered SaaS platform. Partway through building it, I made a deliberate decision **not** to pursue AI integration or full feature completion here. Two reasons:

1. **The core learning goals were already met.** By the time I reached this point, I had built and understood real authentication, database design, and full CRUD operations against a live database — the actual skills I set out to learn.
2. **Continuing to completion would mean padding scope, not gaining skill.** Rather than force this specific project toward an "AI SaaS" finish line, I chose to document it honestly here and apply what I learned to a new project targeting more advanced concepts.

This README reflects the app's real, current state — not an idealized one.

---

## What's Actually Built and Working

### Authentication
- Signup and login, fully working against a real PostgreSQL database
- Passwords hashed with bcrypt
- JWT-based session handling, verified on protected routes
- Secrets managed via environment variables (`.env`), not hardcoded

### Database (PostgreSQL)
- Relational schema with foreign keys (`meetings.user_id → users.id`, `action_items.meeting_id → meetings.id`)
- Full CRUD for meetings: create, read, update, delete — all persisted, not in-memory
- Data survives server restarts (a deliberate fix from the original V1.0, which used in-memory arrays that reset on every restart)

### Frontend
- 15 React pages, fully responsive (desktop/tablet/mobile)
- Dashboard and meeting creation are fully wired to the real backend — meetings created through the UI persist in Postgres and display correctly, including delete functionality

---

## What's Intentionally Incomplete

- **Action Items** — database table and initial backend route created; frontend still uses placeholder data. Left here as a visible example of an in-progress feature rather than removed or faked as "done."
- **Meeting Intelligence Dashboard** — UI built, still shows placeholder metrics. Real version would require either backend-calculated stats or AI analysis (see below).
- **AI Results page** — UI fully built, but intentionally **not connected to an AI provider**. Adding a shallow API call here would demonstrate less than the database and auth work already in the app, so it's left as a clearly labeled placeholder rather than a superficial integration.

---

## Tech Stack

**Frontend:** React (Vite), React Router, responsive CSS
**Backend:** Node.js, Express, JWT, bcryptjs
**Database:** PostgreSQL (via `pg`), local instance managed with pgAdmin

---

## What I Learned Building This

- Designing a relational schema, including foreign key relationships, from scratch
- Migrating an application from in-memory storage to a real, persistent database
- Debugging real errors independently — module resolution issues, syntax errors, environment/terminal mix-ups — rather than working from a tutorial with no failure states
- Recognizing when a project has served its learning purpose, and choosing to scope down rather than pad it out


## Author

Built by Leslie Benoit