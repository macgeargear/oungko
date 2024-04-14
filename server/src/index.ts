import userRoute from "./internal/user/user.controller";
import { Elysia } from "elysia";

const app = new Elysia().get("/", () => "Hello Elysia");
app.use(userRoute);
app.get("/:id", ({ params: { id } }) => ({ id }));

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

app.listen(3000);
