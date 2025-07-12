import { Request, Response } from "express";

import DetailMoviesService from "../../services/movies/DetailMoviesService";

export default async function DetailMoviesController(
  req: Request,
  res: Response
) {
  const user_id = req.user_id!;

  const detailMovies = await DetailMoviesService(user_id);
  res.json(detailMovies);
  return;
}
