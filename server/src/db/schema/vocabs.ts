import { integer, pgEnum, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { createId } from "@paralleldrive/cuid2";
export const vocabLevelEnum = pgEnum("vocab_level", [
  "Basic",
  "N5",
  "N4",
  "N3",
  "N2",
  "N1",
]);

export const vocabs = pgTable("vocabs", {
  id: text("id")
    .$defaultFn(() => createId())
    .primaryKey(),
  name: text("name").notNull(),
  meaning: text("meaning").notNull(),
  level: vocabLevelEnum("level").default("Basic").notNull(),
});
