DO $$ BEGIN
 CREATE TYPE "vocab_level" AS ENUM('Basic', 'N5', 'N4', 'N3', 'N2', 'N1');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "vocabs" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"meaning" text NOT NULL,
	"level" "vocab_level" DEFAULT 'Basic' NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "quizes" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
