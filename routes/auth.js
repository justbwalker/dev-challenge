"use strict";

import express from "express";
import authController from "../controllers/auth.js";

const router = express.Router();

// Login with username and password
router.post("/login", authController.login);

// Refresh token
router.post("/refresh", authController.refresh);

export default router;
