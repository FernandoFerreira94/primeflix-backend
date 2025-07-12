import { Request, Response } from "express";

import CreateUserService from "../../services/users/CreateUserService";

export default async function CreateUserController(
  req: Request,
  res: Response
) {
  const { name, email, password } = req.body;

  const createUser = await CreateUserService({ name, email, password });

  res.json(createUser);
  return;
}
