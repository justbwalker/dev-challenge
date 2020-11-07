"use strict";

import express from "express";
import actorController from "../controllers/actor.js";

const router = express.Router();

router.get("/actors", actorController.getActors);

router.post("/actors", actorController.saveActor);

export default router;
