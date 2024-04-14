CREATE TABLE IF NOT EXISTS "quizes" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "vocabs" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"meaning" text NOT NULL
);
