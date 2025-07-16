import { Request, Response } from "express";

import RemoveMovieService from "../../services/movies/RemoveMovieService";

export default async function RemoveMovieController(
  req: Request,
  res: Response
) {
  const movieId = req.params.id;

  const removeMovie = await RemoveMovieService(movieId);
  res.json(removeMovie);
  return;
}
