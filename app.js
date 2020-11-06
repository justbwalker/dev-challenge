"use strict";

import express from "express";
import { urlencoded, json } from "body-parser";

import movieRoutes from "./routes/movie.js";

// Set up the express app
var app = express();

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(urlencoded({ extended: false }));
app.use(json());

app.use("/api", movieRoutes);

app.get("/test", (req, res) => {
  res.status(200).send({ message: "Hola mundo" });
});

export default app;
