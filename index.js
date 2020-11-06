"use strict";

import app from "./app.js";

const port = 3030;

import { Sequelize } from "sequelize";

const sequelize = new Sequelize("sqlite::memory:");

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

app.listen(port, () => {
  console.log("Servidor corriendo correcamente");
});
