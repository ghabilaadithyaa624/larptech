import { Router, Request, Response } from "express";
import { db } from "../db/index.js";
import { sql } from "drizzle-orm";

export const healthRouter = Router();

healthRouter.get("/", async (_req: Request, res: Response) => {
  try {
    await db.execute(sql`SELECT 1`);
    res.json({
      status: "healthy",
      database: "connected",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    res.status(503).json({
      status: "unhealthy",
      database: "disconnected",
      error: error instanceof Error ? error.message : "Database unavailable",
      timestamp: new Date().toISOString(),
    });
  }
});
