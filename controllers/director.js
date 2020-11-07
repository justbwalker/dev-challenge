"use strict";

import db from "../models/index.js";

const controller = {
  // Get directors, could be filtered and ordered by a field
  getDirectors: async (req, res) => {
    const { "sort-by": sortBy, ...where } = req.query;

    const options = {};
    if (where) options.where = where;
    if (sortBy) options.order = [sortBy];

    const directors = await db.person.findAll(options);

    if (directors) {
      return res.status(200).send(directors);
    } else {
      return res.status(404).send({ message: "Directors not found" });
    }
  },
};

export default controller;
