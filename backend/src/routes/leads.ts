import { Router, Request, Response } from "express";
import { db } from "../db/index.js";
import { leads } from "../db/schema.js";
import { leadSchema } from "../validators/leads.js";
import { config } from "../config/env.js";
import { desc } from "drizzle-orm";

export const leadsRouter = Router();

leadsRouter.post("/", async (req: Request, res: Response) => {
  try {
    const parsed = leadSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({
        error: "Validation failed",
        details: parsed.error.flatten(),
      });
    }

    const { name, email, company, serviceInterest, message } = parsed.data;

    const [inserted] = await db
      .insert(leads)
      .values({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        company: company?.trim() || null,
        serviceInterest,
        message: message?.trim() || null,
        status: "new",
      })
      .returning();

    if (config.resendApiKey) {
      console.log(`[LEAD] New lead email queued: ${inserted.id} - ${email} (${serviceInterest})`);
    } else {
      console.log(`[LEAD] New lead created: ${inserted.id} - ${email} - ${serviceInterest}`);
    }

    return res.status(201).json({
      success: true,
      id: inserted.id,
      lead: inserted,
    });
  } catch (error) {
    console.error("[API /api/leads] Error:", error);
    return res.status(500).json({
      error: "Failed to create lead. Please check database connection and try again.",
      details: error instanceof Error ? error.message : "Unknown error",
    });
  }
});

leadsRouter.get("/", async (_req: Request, res: Response) => {
  try {
    const allLeads = await db
      .select()
      .from(leads)
      .orderBy(desc(leads.createdAt))
      .limit(50);

    return res.json({
      success: true,
      count: allLeads.length,
      leads: allLeads,
    });
  } catch (error) {
    console.error("[API GET /api/leads] Error:", error);
    return res.status(500).json({
      error: "Failed to fetch leads",
      details: error instanceof Error ? error.message : "Unknown error",
    });
  }
});
