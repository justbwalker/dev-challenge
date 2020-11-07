"use strict";

import express from "express";
import episodeController from "../controllers/episode.js";

const router = express.Router();

router.get("/tv-shows/:tvShowId/seasons/:seasonId/episodes/:episodeId", episodeController.getEpisode);

export default router;
