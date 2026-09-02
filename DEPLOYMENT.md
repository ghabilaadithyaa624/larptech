# 🚀 Step-by-Step Cloud Deployment Guide

This guide walks you through deploying the **Backend** to **Render** and the **Frontend** to **Vercel**.

---

## 📑 Table of Contents
1. [Prerequisites & Repository Setup](#1-prerequisites--repository-setup)
2. [Deploying Backend to Render](#2-deploying-backend-to-render)
3. [Deploying Frontend to Vercel](#3-deploying-frontend-to-vercel)
4. [Connecting Frontend to Backend](#4-connecting-frontend-to-backend)
5. [Database Migrations in Production](#5-database-migrations-in-production)
6. [Troubleshooting & Verification](#6-troubleshooting--verification)

---

## 1. Prerequisites & Repository Setup

1. Push your monorepo to GitHub or GitLab:
   ```bash
   git init
   git add .
   git commit -m "feat: separate frontend and backend architecture"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```

---

## 2. Deploying Backend to Render

### Option A: Using Render Blueprint (`render.yaml`) — Recommended
1. Log in to [dashboard.render.com](https://dashboard.render.com).
2. Click **New +** → **Blueprint**.
3. Connect your GitHub repository.
4. Render will automatically detect `render.yaml` and provision:
   - A **Web Service** (`larptech-backend`)
   - A managed **PostgreSQL Database** (`larptech-db`)
5. Click **Apply**. Render will automatically build, deploy, and link the database connection URL!

---

### Option B: Manual Web Service Setup on Render
If you prefer configuring it manually via the Render UI:

1. **Create PostgreSQL Database (Optional if using Supabase/Neon/etc.)**:
   - In Render Dashboard, click **New +** → **PostgreSQL**.
   - Name: `larptech-db`
   - Database: `app_db`
   - Plan: **Free**
   - Click **Create Database** and copy the **Internal Database URL** (or External if connecting from outside).

2. **Create Web Service for Backend**:
   - Click **New +** → **Web Service**.
   - Connect your GitHub repository.
   - Configure the following settings:
     | Field | Value |
     | :--- | :--- |
     | **Name** | `larptech-backend` |
     | **Region** | Oregon (or closest to you) |
     | **Branch** | `main` |
     | **Root Directory** | `backend` *(Crucial!)* |
     | **Runtime** | `Node` |
     | **Build Command** | `npm install && npm run build` |
     | **Start Command** | `npm start` |
     | **Instance Type** | Free |

3. **Set Environment Variables in Render**:
   Under the **Environment** tab of your new Web Service, add:
   | Key | Value | Notes |
   | :--- | :--- | :--- |
   | `NODE_ENV` | `production` | Production mode |
   | `PORT` | `5000` | Render will bind this port |
   | `DATABASE_URL` | `postgresql://...` | Your PostgreSQL Connection URL |
   | `CORS_ORIGIN` | `*` or `https://your-app.vercel.app` | Allowed origins |
   | `RESEND_API_KEY` | `re_...` | *(Optional)* For email notifications |

4. Click **Create Web Service**. Once deployed, copy your Render service URL (e.g. `https://larptech-backend.onrender.com`).

5. Test the live health endpoint in your browser:
   ```
   https://larptech-backend.onrender.com/health
   ```

---

## 3. Deploying Frontend to Vercel

1. Log in to [vercel.com](https://vercel.com).
2. Click **Add New...** → **Project**.
3. Import your GitHub repository.
4. In the **Configure Project** screen:
   - **Project Name**: `larptech-frontend` (or your choice)
   - **Framework Preset**: `Next.js`
   - **Root Directory**: Click **Edit** and choose `frontend` *(Crucial!)*
5. **Add Environment Variables**:
   Under **Environment Variables**, add:
   | Key | Value | Example |
   | :--- | :--- | :--- |
   | `BACKEND_URL` | Your Render Backend URL | `https://larptech-backend.onrender.com` |
   | `NEXT_PUBLIC_API_URL` | Your Render Backend URL | `https://larptech-backend.onrender.com` |

6. Click **Deploy**.
7. Vercel will build the Next.js marketing application and generate your live URL (e.g., `https://larptech-frontend.vercel.app`).

---

## 4. Connecting Frontend to Backend

1. Once your Vercel deployment completes, copy your live Vercel domain (e.g., `https://larptech-frontend.vercel.app`).
2. Go back to your **Render Backend Web Service** → **Environment**.
3. Update `CORS_ORIGIN` to your exact Vercel URL (e.g., `https://larptech-frontend.vercel.app`), or keep `*` to allow preview deployments.
4. Render will automatically redeploy with the updated CORS policy.

---

## 5. Database Migrations in Production

To push your Drizzle schema (`leads` table) to your production database:

From your local machine with the production `DATABASE_URL`:
```bash
# In backend/.env or passed inline:
DATABASE_URL="postgresql://user:pass@host:5432/app_db" npm run db:push --workspace=backend
```

Or view your production database records visually with Drizzle Studio:
```bash
DATABASE_URL="postgresql://user:pass@host:5432/app_db" npm run db:studio --workspace=backend
```

---

## 6. Troubleshooting & Verification

### ✅ Verify End-to-End Flow
1. Visit your Vercel live site: `https://your-project.vercel.app/contact`
2. Fill out the Consultation Form and submit.
3. Verify that the form redirects to `/thank-you` seamlessly.
4. Check your Backend leads endpoint:
   ```bash
   curl https://your-backend.onrender.com/api/leads
   ```
   You should see your newly submitted lead in the JSON response!

### Common Issues
- **CORS error on form submit**: Ensure `CORS_ORIGIN` on Render is set to `*` or includes your Vercel domain. Note that `frontend/next.config.ts` also proxies `/api/*` on server-side Next.js rewrites to eliminate CORS issues entirely.
- **500 error on lead submit**: Ensure `DATABASE_URL` is set correctly on Render and that you have run `npm run db:push` to create the `leads` table.
