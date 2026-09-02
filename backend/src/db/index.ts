import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { config } from "../config/env.js";

export const pool = new Pool({
  connectionString: config.databaseUrl,
});

pool.on("error", (err) => {
  console.error("[PostgreSQL Pool Error]", err);
});

export const db = drizzle(pool);
