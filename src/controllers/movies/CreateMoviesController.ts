import { Request, Response } from "express";

import CreateMoviesService from "../../services/movies/CreateMoviesService";

export default async function CreateMoviesController(
  req: Request,
  res: Response
) {
  const { title, banner, language, release_data, genres, filmeId } = req.body;

  const user_id = req.user_id;

  try {
    const createMovies = await CreateMoviesService({
      title,
      filmeId,
      language,
      release_data,
      genres,
      user_id: user_id!,
    });

    res.status(201).json(createMovies);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
