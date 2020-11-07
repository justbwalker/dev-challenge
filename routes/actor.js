"use strict";

import express from "express";
import actorController from "../controllers/actor.js";

const router = express.Router();

// Get actors, could be filtered and ordered by a field
router.get("/", actorController.getActors);

// Save an actor
router.post("/", actorController.saveActor);

export default router;
