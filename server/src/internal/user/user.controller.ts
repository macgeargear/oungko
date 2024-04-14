import { Elysia } from "elysia";
import { getUserByEmail } from "./user.service";

const userRoute = new Elysia({ prefix: "/users" });
userRoute.get("/:email", ({ params: { email } }) => getUserByEmail(email));

export default userRoute;
