import { Hono } from "hono";

export const userRoute = new Hono();

userRoute.get("/", (c) => c.text("henlo vvorld from /user"));
