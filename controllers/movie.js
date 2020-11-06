"use strict";

import Movie from "../models/movie.js";

const controller = {
  get: async (req, res) => {
    // const movie = Movie.build({ title: "Pulp Fiction", sinopsis: "lkldlsdkslksdkfls" });

    const movies = await Movie.findAll();
    return res.status(200).send(movies);
  },
};

export default controller;
