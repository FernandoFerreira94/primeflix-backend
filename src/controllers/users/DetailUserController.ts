import { Request, Response } from "express";

import DetailUserService from "../../services/users/DetailUserService";

export default async function DetailUserController(
  req: Request,
  res: Response
) {
  const user_Id = req.user_id;

  const detailUser = await DetailUserService(user_Id);
  res.json(detailUser);
  return;
}
