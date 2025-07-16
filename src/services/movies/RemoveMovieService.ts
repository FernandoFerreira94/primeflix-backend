import prismaClient from "../../prisma";

export default async function RemoveMovieService(movieId: string) {
  try {
    const movie = await prismaClient.movie.delete({
      where: {
        id: movieId,
      },
    });

    return movie;
  } catch (err) {
    throw new Error("Filme não encontrado ou erro ao deletar.");
  }
}
