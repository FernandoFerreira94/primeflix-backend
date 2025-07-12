import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface AuthRequest {
  email: string;
  password: string;
}

export default async function AuthUserService({
  email,
  password,
}: AuthRequest) {
  const user = await prismaClient.user.findFirst({
    where: { email: email },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const passwordmatch = await compare(password, user.password);

  if (!passwordmatch) {
    throw new Error("Password incorrect");
  }

  const token = sign(
    {
      name: user.name,
      email: user.email,
    },
    process.env.JWT_SECRET,
    {
      subject: user.id,
      expiresIn: "30d",
    }
  );

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    token,
  };
}
