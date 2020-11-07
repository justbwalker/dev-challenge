"use strict";

import express from "express";
import { urlencoded, json } from "body-parser";

import movieRoutes from "./routes/movie.js";
import tvShowRoutes from "./routes/tvShow.js";
import actorRoutes from "./routes/actor.js";
import directorRoutes from "./routes/director.js";
import authRoutes from "./routes/auth.js";

// Set up the express app
var app = express();

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(urlencoded({ extended: false }));
app.use(json());

// Set up the routes
app.use("/api/movies", movieRoutes);
app.use("/api/tv-shows", tvShowRoutes);
app.use("/api/actors", actorRoutes);
app.use("/api/directors", directorRoutes);
app.use("/api/auth", authRoutes);

export default app;
