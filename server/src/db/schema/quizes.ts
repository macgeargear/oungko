import { serial, text, timestamp, integer, pgTable } from "drizzle-orm/pg-core";

export const quizes = pgTable("quizes", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
