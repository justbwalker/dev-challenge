"use strict";

import db from "../models/index.js";

const controller = {
  getEpisode: async (req, res) => {
    const { tvShowId, seasonId, episodeId } = req.params;

    const episode = await db.episode.findByPk(episodeId, {
      include: "director",
    });
    if (episode === null) {
      return res.status(404).send({ message: "Episode not found" });
    } else {
      return res.status(200).send(episode);
    }
  },
};

export default controller;
