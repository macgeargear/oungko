import type { Config } from "drizzle-kit";
import { db } from "./src/db";
import { env } from "./src/env";

export default {
  schema: "./src/db/schema/index.ts",
  out: "./src/db/migration",
  driver: "pg",
  dbCredentials: {
    connectionString: env.DATABASE_URL,
  },
} satisfies Config;
