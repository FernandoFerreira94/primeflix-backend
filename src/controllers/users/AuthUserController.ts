import { Request, Response } from "express";

import AuthUserService from "../../services/users/AuthUserService";

export default async function AuthUserController(req: Request, res: Response) {
  const { email, password } = req.body;

  try {
    const authuser = await AuthUserService({ email, password });
    res.json(authuser);
    return;
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
      return;
    }

    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
    return;
  }
}
