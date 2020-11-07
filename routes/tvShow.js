"use strict";

import express from "express";
import tvShowController from "../controllers/tvShow.js";
import episodeController from "../controllers/episode.js";

const router = express.Router();

// Get tv shows, could be filtered and ordered by a field
router.get("/", tvShowController.get);

// Get an expecific episode, director included
router.get("/:tvShowId/seasons/:seasonId/episodes/:episodeId", episodeController.getEpisode);

export default router;
