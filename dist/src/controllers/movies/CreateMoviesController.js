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
exports.default = CreateMoviesController;
const CreateMoviesService_1 = __importDefault(require("../../services/movies/CreateMoviesService"));
function CreateMoviesController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { title, banner, language, release_data, genres, filmeId } = req.body;
        const user_id = req.user_id;
        try {
            const createMovies = yield (0, CreateMoviesService_1.default)({
                title,
                filmeId,
                language,
                release_data,
                genres,
                user_id: user_id,
            });
            res.status(201).json(createMovies);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    });
}
