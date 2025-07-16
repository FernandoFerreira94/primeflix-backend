import { Router } from "express";

// Users
import CreateUserController from "./controllers/users/CreateUserController";
import AuthUserController from "./controllers/users/AuthUserController";
import DetailUserController from "./controllers/users/DetailUserController";

// Movies
import CreateMoviesController from "./controllers/movies/CreateMoviesController";
import DetailMoviesController from "./controllers/movies/DetailMoviesControoler";
import RemoveMovieController from "./controllers/movies/RemoveMovieController";

// Middlewares
import { isAuthenticated } from "./middlewares/isAuthenticated";

const router = Router();
// Rotas USERS
router.post("/users", CreateUserController);
router.post("/session", AuthUserController);
router.get("/me", isAuthenticated, DetailUserController);

// Rotas MOVIES
router.post("/movies", isAuthenticated, CreateMoviesController);
router.get("/movies", isAuthenticated, DetailMoviesController);
router.delete("/movies/:id", isAuthenticated, RemoveMovieController);

export { router };
