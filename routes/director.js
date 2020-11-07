"use strict";

import express from "express";
import directorController from "../controllers/director.js";

const router = express.Router();

// Get directors, could be filtered and ordered by a field
router.get("/", directorController.getDirectors);

export default router;
