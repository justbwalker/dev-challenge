"use strict";

import jwt from "jsonwebtoken";

import db from "../models/index.js";

const controller = {
  login: async (req, res) => {
    const { username, password } = req.body;
    if (!username) {
      return res.status(400).send({ message: "Provider did not pass username" });
    }

    if (!password) {
      return res.status(400).send({ message: "Provider did not pass password" });
    }

    const user = await db.user.findByPk(username);

    if (user) {
      if (user.password === password) {
        const payload = {
          username,
        };
        const token = jwt.sign(payload, "dEvChaLleNGe", {
          expiresIn: 1440,
        });
        return res.status(200).send({
          name: user.name,
          token,
        });
      } else {
        return res.status(403).send({ message: "Invalid password" });
      }
    } else {
      return res.status(404).send({ message: "User not found" });
    }
  },
  refresh: async (req, res) => {
    try {
      const payload = jwt.verify(req.body.token, "dEvChaLleNGe");
      if (payload) {
        delete payload.iat;
        delete payload.exp;
        const token = jwt.sign(payload, "dEvChaLleNGe", {
          expiresIn: 1440,
        });
        return res.status(200).send({
          name: payload.username,
          token,
        });
      } else {
        return res.status(403).send({ message: "Invalid token" });
      }
    } catch (error) {
      return res.status(403).send({ message: "Invalid token" });
    }
  },
};

export default controller;
