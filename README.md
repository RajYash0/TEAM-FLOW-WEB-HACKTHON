# 🌌 NASA Cosmic Watch

> **Interstellar Asteroid Tracker & Risk Analyser** — Built for the Web Hackathon by Team Flow

[![Live Demo](https://img.shields.io/badge/Live%20Demo-cosmic--watch--team--flow.netlify.app-brightgreen?style=for-the-badge)](https://cosmic-watch-team-flow.netlify.app/)
[![Python](https://img.shields.io/badge/Python-FastAPI-blue?style=for-the-badge&logo=python)](https://fastapi.tiangolo.com/)
[![Vite](https://img.shields.io/badge/Frontend-Vite-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-316192?style=for-the-badge&logo=postgresql)](https://www.postgresql.org/)
[![Docker](https://img.shields.io/badge/Docker-Compose-2496ED?style=for-the-badge&logo=docker)](https://docs.docker.com/compose/)

---

## 📖 Overview

**NASA Cosmic Watch** is a full-stack web platform that visualizes **Near-Earth Objects (NEOs)** in real time using official **NASA Open APIs**. It combines a modern frontend, a FastAPI backend, a PostgreSQL database, and WebSocket-powered live community chat — all containerized with Docker for consistent, repeatable deployments.

Built for the hackathon problem statement: *Interstellar Asteroid Tracker & Risk Analyser*.

---

## ✨ Features

- 🛰️ **Real-Time NEO Tracking** — Fetches live Near-Earth Object data from NASA's NeoWs API
- ⚠️ **Risk Analysis** — Classifies asteroids by estimated diameter, velocity, and miss distance
- 📊 **Interactive Dashboard** — Space-themed dark UI with data visualizations
- 💬 **Live Community Chat** — WebSocket-powered real-time chat for users
- 🔐 **JWT Authentication** — Secure user sessions with token-based auth
- 🐳 **Fully Dockerized** — One-command setup with Docker Compose
- ⚡ **Fast & Scalable** — Vite-powered frontend, async FastAPI backend

---

## 🧩 Tech Stack

| Layer | Technology |
|---|---|
| 🎨 Frontend | Vite + JavaScript + Nginx |
| 🧠 Backend | Python + FastAPI |
| 🗄️ Database | PostgreSQL 16 |
| 🔌 API | NASA NeoWs Open API |
| 🐳 DevOps | Docker & Docker Compose |
| 💬 Realtime | WebSockets |
| 🔐 Auth | JWT (JSON Web Tokens) |
| 🧪 Testing | Postman |
| 🚀 Hosting | Netlify (frontend) |

---

## 🗂️ Project Structure

```
TEAM-FLOW-WEB-HACKTHON/
├── frontend/          # Vite app (UI, dashboard, chat)
├── backend/           # FastAPI app (REST API, WebSockets, auth)
├── postman/           # Postman collection for API testing
├── docker-compose.yml # Full-stack orchestration
├── .env.example       # Environment variable template
├── netlify.toml       # Netlify deploy config
└── AI-LOG.md          # Transparent AI usage log
```

---

## ⚙️ Local Setup

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/) & [Docker Compose](https://docs.docker.com/compose/)
- [Node.js](https://nodejs.org/) v18+ (for running frontend without Docker)
- [Python](https://www.python.org/) 3.11+ (for running backend without Docker)
- A free [NASA API key](https://api.nasa.gov/) (or use `DEMO_KEY` for limited requests)

### 1. Clone the repository

```bash
git clone https://github.com/RajYash0/TEAM-FLOW-WEB-HACKTHON.git
cd TEAM-FLOW-WEB-HACKTHON
```

### 2. Configure environment variables

```bash
cp .env.example .env
```

Then open `.env` and fill in your values:

```env
# NASA API
NASA_API_KEY=your_nasa_api_key_here

# Backend
BACKEND_PORT=8000
JWT_SECRET=your-strong-secret-here
JWT_EXPIRE_MINUTES=120

# Frontend
FRONTEND_PORT=5173
VITE_API_BASE_URL=http://localhost:8000

# Database
POSTGRES_HOST=localhost
POSTGRES_DB=nasa
POSTGRES_USER=nasa_user
POSTGRES_PASSWORD=nasa_pass
POSTGRES_PORT=5432
```

> Get a free NASA API key at [https://api.nasa.gov/](https://api.nasa.gov/)

### 3. Run with Docker (recommended)

```bash
docker compose up --build
```

This starts three services with health checks and auto-restart:

| Service | URL |
|---|---|
| Frontend | http://localhost:5173 |
| Backend API | http://localhost:8000 |
| PostgreSQL | localhost:5432 |

### 4. Run without Docker

**Backend:**
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

**Frontend:**
```bash
cd frontend
npm install
npm run dev
```

---

## 🔌 API Reference

The backend exposes a REST API + WebSocket endpoint. Import the Postman collection from `/postman` for full endpoint documentation.

Key endpoints include:

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/health` | Health check |
| `POST` | `/auth/register` | Register a new user |
| `POST` | `/auth/login` | Login and receive JWT |
| `GET` | `/neo/today` | NEOs approaching today |
| `GET` | `/neo/feed` | NEO feed for a date range |
| `GET` | `/neo/{id}` | Details for a specific NEO |
| `WS` | `/ws/chat` | WebSocket community chat |

> Interactive API docs available at `http://localhost:8000/docs` (Swagger UI)

---

## 🚀 Deployment

### Frontend — Netlify

The frontend is deployed automatically on push to `main` via `netlify.toml`.

```toml
[build]
command = "cd frontend && npm install && npm run build"
publish = "frontend/dist"
```

Set the `VITE_API_BASE_URL` environment variable in your Netlify dashboard to point to your deployed backend URL.

**Live:** [https://cosmic-watch-team-flow.netlify.app/](https://cosmic-watch-team-flow.netlify.app/)

### Backend — Self-hosted / Cloud VM

The backend is containerized and can be deployed to any Docker-compatible host (Render, Railway, DigitalOcean, AWS EC2, etc.):

```bash
docker compose up -d backend db
```

---

## 👨‍🚀 Team Flow

> *United by Space • Powered by Teamwork • Driven by Innovation*

| Name | Role |
|---|---|
| 🚀 **Rashmi Ranjan Behera** | Team Lead · Project Architecture · System Design · Integration |
| 💻 **Yash Raj** | Frontend Development & UI Enhancements |
| ⚙️ **Abhisek Praharaj** | Backend Development & API Integration |
| 📊 **Laxmikanta Naik** | Data Analysis & ML Support |

---

## 🤖 AI Usage

AI tools (ChatGPT) were used strictly as a conceptual aid — for understanding requirements, architectural discussions, API comprehension, and debugging guidance. No AI-generated code was directly used in this project. See [AI-LOG.md](./AI-LOG.md) for the full transparency log.

---

## 📄 License

This project was built for a hackathon. All rights reserved by Team Flow.

---

<div align="center">
  <sub>✨ <em>"Great missions are built by great teams."</em> ✨</sub>
</div>
