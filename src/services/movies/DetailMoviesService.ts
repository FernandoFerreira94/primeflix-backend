import prismaClient from "../../prisma";

export default async function DetailMoviesService(user_id: string) {
  const movies = await prismaClient.movie.findMany({
    where: {
      user_id,
    },
    select: {
      id: true,
      title: true,
      filmeId: true,
      language: true,
      release_data: true,
      genres: {
        select: {
          genre: true,
        },
      },
    },
  });

  return movies;
}
