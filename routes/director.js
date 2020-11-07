"use strict";

import express from "express";
import directorController from "../controllers/director.js";

const router = express.Router();

router.get("/directors", directorController.getDirectors);

export default router;
