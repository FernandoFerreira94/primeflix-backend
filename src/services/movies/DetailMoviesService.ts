import prismaClient from "../../prisma";

export default async function DetailMoviesService(user_id: string) {
  const movies = await prismaClient.movie.findMany({
    where: {
      user_id,
    },
    select: {
      id: true,
      title: true,
      banner: true,
      language: true,
      release_data: true,
      genres: true,
    },
  });

  return movies;
}
