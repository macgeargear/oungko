import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { userRoute } from "./internal/user/user.controller";

const app = new Hono();

app.route("/users", userRoute);
app.get("/", (c) => {
  return c.text("Hello Hono!");
});

const port = 3001;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
