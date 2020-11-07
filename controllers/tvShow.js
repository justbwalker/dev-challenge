"use strict";

import db from "../models/index.js";

const controller = {
  // Get tv shows, could be filtered and ordered by a field
  get: async (req, res) => {
    const { sort_by: sortBy, ...where } = req.query;

    const options = {};
    if (where) options.where = where;
    if (sortBy) options.order = [sortBy];

    const tvShows = await db.tvShow.findAll(options);

    return res.status(200).send(tvShows);
  },
};

export default controller;
