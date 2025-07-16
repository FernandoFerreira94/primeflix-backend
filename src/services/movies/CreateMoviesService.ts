import prismaClient from "../../prisma";

interface GenreInput {
  id: string;
  name: string;
}

interface MovieRequest {
  title: string;
  language: string;
  release_data: string;
  genres: GenreInput[];
  user_id: string;
  filmeId: string;
}

export default async function CreateMoviesService({
  title,
  language,
  release_data,
  genres,
  user_id,
  filmeId,
}: MovieRequest) {
  if (!title || !language || !release_data || !user_id || !filmeId) {
    throw new Error("Dados obrigatórios ausentes.");
  }

  const movieAlreadyExist = await prismaClient.movie.findFirst({
    where: {
      title,
      user_id,
    },
  });

  if (movieAlreadyExist) {
    throw new Error("Filme ja cadastrado.");
  }

  for (const genre of genres) {
    await prismaClient.genre.upsert({
      where: { id: genre.id },
      update: { name: genre.name },
      create: {
        id: genre.id,
        name: genre.name,
      },
    });
  }

  const movie = await prismaClient.movie.create({
    data: {
      title,
      filmeId,
      language,
      release_data,
      user: {
        connect: { id: user_id },
      },
      genres: {
        create: genres.map((genres) => ({
          genre: {
            connect: { id: genres.id },
          },
        })),
      },
    },
    include: {
      genres: {
        include: {
          genre: true,
        },
      },
    },
  });

  return movie;
}
