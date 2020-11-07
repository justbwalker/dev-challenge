"use strict";

import db from "../models/index.js";

const controller = {
  // Get movies, could be filtered and ordered by a field
  getMovies: async (req, res) => {
    const { "sort-by": sortBy, ...where } = req.query;

    const options = { include: "director" };
    if (where) options.where = where;
    if (sortBy) options.order = [sortBy];

    const movies = await db.movie.findAll(options);

    return res.status(200).send(movies);
  },
};

export default controller;
