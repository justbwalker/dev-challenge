"use strict";

import db from "../models/index.js";

const controller = {
  get: async (req, res) => {
    const movies = await db.movie.findAll({
      where: {},
      include: "director",
    });

    // if (movies.lenght == 0) return res.status(404).send({ message: "Movie not found" });

    return res.status(200).send(movies);
  },
};

export default controller;
