"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
// Users
const CreateUserController_1 = __importDefault(require("./controllers/users/CreateUserController"));
const AuthUserController_1 = __importDefault(require("./controllers/users/AuthUserController"));
const DetailUserController_1 = __importDefault(require("./controllers/users/DetailUserController"));
// Movies
const CreateMoviesController_1 = __importDefault(require("./controllers/movies/CreateMoviesController"));
const DetailMoviesControoler_1 = __importDefault(require("./controllers/movies/DetailMoviesControoler"));
const RemoveMovieController_1 = __importDefault(require("./controllers/movies/RemoveMovieController"));
// Middlewares
const isAuthenticated_1 = require("./middlewares/isAuthenticated");
const router = (0, express_1.Router)();
exports.router = router;
// Rotas USERS
router.post("/users", CreateUserController_1.default);
router.post("/session", AuthUserController_1.default);
router.get("/me", isAuthenticated_1.isAuthenticated, DetailUserController_1.default);
// Rotas MOVIES
router.post("/movies", isAuthenticated_1.isAuthenticated, CreateMoviesController_1.default);
router.get("/movies", isAuthenticated_1.isAuthenticated, DetailMoviesControoler_1.default);
router.delete("/movies/:id", isAuthenticated_1.isAuthenticated, RemoveMovieController_1.default);
