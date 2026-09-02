import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import { config } from "./config/env.js";
import { healthRouter } from "./routes/health.js";
import { leadsRouter } from "./routes/leads.js";

export const app = express();

// Configure allowed CORS origins
const allowedOrigins = config.corsOrigin === "*"
  ? "*"
  : [
      ...config.corsOrigin.split(",").map((o) => o.trim()),
      "http://localhost:3000",
      "http://127.0.0.1:3000",
    ].filter(Boolean);

// Middleware
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps, curl, server-to-server)
      if (!origin || allowedOrigins === "*") {
        return callback(null, true);
      }
      if (
        allowedOrigins.includes(origin) ||
        origin.endsWith(".vercel.app") // Automatically allow Vercel preview/production domains
      ) {
        return callback(null, true);
      }
      return callback(null, true); // Fallback allow in dev/staging
    },
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root welcome / info
app.get("/", (_req: Request, res: Response) => {
  res.json({
    name: "LarpTech Backend API",
    version: "1.0.0",
    status: "online",
    endpoints: {
      health: "/health or /api/health",
      leads: "/api/leads",
    },
  });
});

// API Routes
app.use("/health", healthRouter);
app.use("/api/health", healthRouter);
app.use("/api/leads", leadsRouter);

// 404 Handler
app.use((_req: Request, res: Response) => {
  res.status(404).json({ error: "Endpoint not found" });
});

// Global Error Handler
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error("[Unhandled Server Error]", err);
  res.status(500).json({
    error: "Internal server error",
    message: config.nodeEnv === "development" ? err.message : undefined,
  });
});
