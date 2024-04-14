import { db } from "../../db";
import HttpException from "../http/http-exception.model";
import { User } from "./user.model";

export const getUserByName = async (name: string): Promise<User> => {
  const user = await db.query.users.findFirst({
    where: (user, { eq }) => eq(user.name, name),
  });
  if (!user) {
    throw new HttpException(404, "not found");
  }
  return user;
};

export const getUserByEmail = async (email: string): Promise<User> => {
  const user = await db.query.users.findFirst({
    where: (user, { eq }) => eq(user.email, email),
  });
  if (!user) {
    throw new HttpException(404, "not found");
  }
  return user;
};
