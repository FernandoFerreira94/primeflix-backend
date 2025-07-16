"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CreateMoviesService;
const prisma_1 = __importDefault(require("../../prisma"));
function CreateMoviesService(_a) {
    return __awaiter(this, arguments, void 0, function* ({ title, language, release_data, genres, user_id, filmeId, }) {
        if (!title || !language || !release_data || !user_id || !filmeId) {
            throw new Error("Dados obrigatórios ausentes.");
        }
        const movieAlreadyExist = yield prisma_1.default.movie.findFirst({
            where: {
                title,
                user_id,
            },
        });
        if (movieAlreadyExist) {
            throw new Error("Filme ja cadastrado.");
        }
        for (const genre of genres) {
            yield prisma_1.default.genre.upsert({
                where: { id: genre.id },
                update: { name: genre.name },
                create: {
                    id: genre.id,
                    name: genre.name,
                },
            });
        }
        const movie = yield prisma_1.default.movie.create({
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
    });
}
