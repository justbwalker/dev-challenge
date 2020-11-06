"use strict";

import Sequelize from "sequelize";

const sequelize = new Sequelize("sqlite::memory");

const Movie = sequelize.define("Movie", {
  identifier: { type: Sequelize.STRING, primaryKey: true },
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  sinopsis: {
    type: Sequelize.TEXT,
  },
});

(async () => {
  await sequelize.sync({ force: true });
  await Movie.create({ title: "Pulp Fiction", sinopsis: "lkldlsdkslksdkfls" });
  await Movie.create({ title: "Reservoir Dogs", sinopsis: "asasasasasas" });
})();

export default Movie;
