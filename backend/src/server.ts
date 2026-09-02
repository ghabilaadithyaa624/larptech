import { app } from "./app.js";
import { config } from "./config/env.js";

const server = app.listen(config.port, () => {
  console.log(`🚀 [Backend] Server running on http://localhost:${config.port}`);
  console.log(`🔌 [Backend] Database target: ${config.databaseUrl.replace(/:[^:]*@/, ":****@")}`);
  console.log(`🛡️  [Backend] CORS allowed origin: ${config.corsOrigin}`);
});

process.on("SIGTERM", () => {
  console.log("🛑 [Backend] SIGTERM signal received: closing HTTP server");
  server.close(() => {
    console.log("HTTP server closed");
  });
});
