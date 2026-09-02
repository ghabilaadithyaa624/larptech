# 🚀 LarpTech AI & Cyber Agency — Fullstack Monorepo

A modern, high-performance web platform for AI automation, cybersecurity, and enterprise consulting services. The project is cleanly separated into independent **Frontend** and **Backend** applications orchestrated via a unified monorepo root.

---

## 🏗️ Architecture Overview

```
larptech/
├── 📁 backend/                  # Node.js + Express + TypeScript API Server
│   ├── src/
│   │   ├── config/              # Environment & application config
│   │   ├── db/                  # PostgreSQL connection & Drizzle ORM schema
│   │   ├── routes/              # Express API endpoints (/health, /api/leads)
│   │   ├── validators/          # Zod request validation schemas
│   │   ├── app.ts               # Express app configuration & middleware
│   │   └── server.ts            # Server bootstrap & listener
│   ├── .env.example             # Backend environment template
│   ├── drizzle.config.json      # Drizzle Kit configuration
│   ├── package.json             # Backend dependencies & scripts
│   └── tsconfig.json            # Backend TypeScript configuration
│
├── 📁 frontend/                 # Next.js 16 (App Router) + React 19 + Tailwind CSS
│   ├── src/
│   │   ├── app/                 # Next.js App Router (Marketing pages, layout)
│   │   │   ├── (marketing)/     # Home, About, Services, Pricing, Case Studies, Contact
│   │   │   ├── globals.css      # Design tokens & Tailwind CSS styles
│   │   │   └── layout.tsx       # Root layout & font definitions
│   │   ├── components/          # Reusable UI & section components
│   │   └── lib/                 # Shared utilities, constants, & validators
│   ├── .env.example             # Frontend environment template
│   ├── next.config.ts           # Next.js config & API proxy rewrites
│   ├── package.json             # Frontend dependencies & scripts
│   ├── postcss.config.mjs       # Tailwind CSS PostCSS plugin
│   └── tsconfig.json            # Frontend TypeScript configuration
│
├── .env.example                 # Unified root environment template
├── .gitignore                   # Monorepo git ignore rules
├── package.json                 # Root workspace orchestrator
└── README.md                    # Project documentation (this file)
```

---

## ⚡ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | [Next.js 16](https://nextjs.org/) (App Router), [React 19](https://react.dev/), [Tailwind CSS v4](https://tailwindcss.com/), [Framer Motion](https://www.framer.com/motion/), [Lucide Icons](https://lucide.dev/), [React Hook Form](https://react-hook-form.com/), [Zod](https://zod.dev/) |
| **Backend** | [Node.js](https://nodejs.org/), [Express](https://expressjs.com/), [TypeScript](https://www.typescriptlang.org/), [Drizzle ORM](https://orm.drizzle.team/), [PostgreSQL (`pg`)](https://node-postgres.com/), [CORS](https://expressjs.com/en/resources/middleware/cors.html), [Zod](https://zod.dev/) |
| **Orchestration** | NPM Workspaces, [Concurrently](https://github.com/open-cli-tools/concurrently) |

---

## 📋 Prerequisites

Before getting started, make sure you have the following installed:
- **Node.js**: `v18.0.0` or later (`v20+` or `v22+` recommended)
- **npm**: `v9.0.0` or later
- **PostgreSQL**: Local instance running on port `5432` or a remote PostgreSQL database (Neon, Supabase, RDS, etc.)

---

## 🚀 Quick Start (One Command Setup)

### 1. Clone the repository
```bash
git clone <repository-url>
cd larptech
```

### 2. Install all dependencies across Frontend & Backend at once
```bash
npm install
```

### 3. Configure Environment Variables
Copy the `.env.example` templates for both services:

```bash
# Option A: Quick manual copy
cp .env.example backend/.env
cp frontend/.env.example frontend/.env
```

**Backend `.env`** (`backend/.env`):
```env
PORT=5000
NODE_ENV=development
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/app_db
CORS_ORIGIN=http://localhost:3000
# RESEND_API_KEY=re_your_api_key_here
```

**Frontend `.env`** (`frontend/.env`):
```env
BACKEND_URL=http://localhost:5000
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### 4. Push Database Schema (Optional/Recommended)
If your PostgreSQL database is running, push the schema to create the `leads` table:
```bash
npm run db:push
```

### 5. Run Both Frontend and Backend Simultaneously
```bash
npm run dev
```

- **Frontend App**: `http://localhost:3000`
- **Backend API**: `http://localhost:5000`
- **Health Check**: `http://localhost:5000/api/health`

---

## 🛠️ Monorepo Scripts Reference

All commands can be run from the root directory:

| Command | Action | Description |
| :--- | :--- | :--- |
| `npm run dev` | **Unified Dev** | Starts **both** Backend and Frontend concurrently with color-coded logs |
| `npm run dev:frontend` | Frontend Only | Starts only the Next.js dev server on `http://localhost:3000` |
| `npm run dev:backend` | Backend Only | Starts only the Express TS dev server on `http://localhost:5000` |
| `npm run build` | **Unified Build** | Builds both backend (TypeScript) and frontend (Next.js production bundle) |
| `npm run build:frontend` | Build Frontend | Compiles Next.js application for production |
| `npm run build:backend` | Build Backend | Compiles TypeScript backend to JavaScript in `backend/dist` |
| `npm run start` | **Unified Start** | Runs production servers for both Frontend and Backend concurrently |
| `npm run typecheck` | Typecheck | Runs TypeScript type verification across all workspaces |
| `npm run db:generate` | Drizzle Generate | Generates database migration SQL files from schema |
| `npm run db:push` | Drizzle Push | Applies Drizzle schema changes directly to the PostgreSQL database |
| `npm run db:studio` | Drizzle Studio | Opens the visual Drizzle database dashboard |

---

## 📡 Backend API Endpoints

### 1. Health Status
- **Endpoint**: `GET /health` or `GET /api/health`
- **Response**:
```json
{
  "status": "healthy",
  "database": "connected",
  "timestamp": "2026-09-02T09:00:00.000Z"
}
```

### 2. Submit Lead / Consultation Request
- **Endpoint**: `POST /api/leads`
- **Headers**: `Content-Type: application/json`
- **Request Body**:
```json
{
  "name": "Sarah Connor",
  "email": "sarah@cyberdyne.com",
  "company": "Cyberdyne Systems",
  "serviceInterest": "ai-agents",
  "message": "Looking to automate our internal workflows with customized AI agents."
}
```
- **Response (201 Created)**:
```json
{
  "success": true,
  "id": "c8f12a34-56b7-8901-cdef-123456789abc",
  "lead": { ... }
}
```

### 3. List Leads
- **Endpoint**: `GET /api/leads`
- **Response**:
```json
{
  "success": true,
  "count": 1,
  "leads": [ ... ]
}
```

---

## 🔗 Frontend-Backend Communication

1. **Proxy Rewrites (Default)**:
   In `frontend/next.config.ts`, requests to `/api/*` are automatically forwarded to `http://localhost:5000/api/*`.
2. **Direct Client Requests**:
   The frontend also supports direct cross-origin requests using `NEXT_PUBLIC_API_URL` with full CORS support enabled in the Express backend.

---

## 🌐 Cloud Deployment (Render & Vercel)

For a complete step-by-step walkthrough, see [`DEPLOYMENT.md`](./DEPLOYMENT.md).

### 1. Backend on [Render](https://render.com)
- **Automatic Setup (Blueprint)**: Connect your repository and select [`render.yaml`](./render.yaml). Render will provision both the Express Web Service and managed PostgreSQL database automatically.
- **Manual Setup**:
  - **Root Directory**: `backend`
  - **Build Command**: `npm install && npm run build`
  - **Start Command**: `npm start`
  - **Environment Variables**: `DATABASE_URL`, `CORS_ORIGIN=*`, `NODE_ENV=production`, `PORT=5000`

### 2. Frontend on [Vercel](https://vercel.com)
- Import your repository to Vercel.
- **Root Directory**: Set to `frontend` *(Edit in Project Settings)*
- **Framework Preset**: `Next.js`
- **Environment Variables**:
  - `BACKEND_URL`: `https://your-backend.onrender.com`
  - `NEXT_PUBLIC_API_URL`: `https://your-backend.onrender.com`

---

## 📄 License
Private project. All rights reserved.
