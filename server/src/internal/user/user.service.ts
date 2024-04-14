import { db } from "../../db";
import { User } from "./user.model";

export const getUserByEmail = async (email: string): Promise<User> => {
  const user = await db.query.users.findFirst({
    where: (user, { eq }) => eq(user.email, email),
  });
  if (!user) throw new Error("foo");
  return user;
};
