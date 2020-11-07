"use strict";

import express from "express";
import movieController from "../controllers/movie.js";

const router = express.Router();

// Get movies, could be filtered and ordered by a field
router.get("/", movieController.getMovies);

export default router;
