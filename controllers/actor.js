"use strict";

import db from "../models/index.js";

const controller = {
  getActors: async (req, res) => {
    const { "sort-by": sortBy, ...where } = req.query;

    const options = {};
    if (where) options.where = where;
    if (sortBy) options.order = [sortBy];

    const actors = await db.person.findAll(options);

    if (actors) {
      return res.status(200).send(actors);
    } else {
      return res.status(404).send({ message: "Actors not found" });
    }
  },
  saveActor: async (req, res) => {
    try {
      console.log(req);
      const actor = await db.person.create(req.body);
      if (actor === null) {
        return res.status(500).send({ message: "Error saving actor" });
      } else {
        return res.status(200).send(actor);
      }
    } catch (error) {
      return res.status(500).send({ message: "Error saving actor" });
    }
  },
};

export default controller;
