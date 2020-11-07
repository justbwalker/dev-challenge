"use strict";

import express from "express";
import authController from "../controllers/auth.js";

const router = express.Router();

router.post("/auth/login", authController.login);

router.post("/auth/refresh", authController.refresh);

export default router;
