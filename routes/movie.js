"use strict";

import express from "express";
import movieController from "../controllers/movie.js";

const router = express.Router();

router.get("/movies", movieController.getMovies);

export default router;
