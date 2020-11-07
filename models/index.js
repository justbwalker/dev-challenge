"use strict";

import Sequelize from "sequelize";

import movie from "./movie.js";
import person from "./person.js";
import tvShow from "./tvShow.js";
import season from "./season.js";
import episode from "./episode.js";
import user from "./user.js";

let sequelize = new Sequelize("sqlite::memory:");

// Append models to database
const db = {
  movie: movie(sequelize, Sequelize.DataTypes),
  person: person(sequelize, Sequelize.DataTypes),
  tvShow: tvShow(sequelize, Sequelize.DataTypes),
  season: season(sequelize, Sequelize.DataTypes),
  episode: episode(sequelize, Sequelize.DataTypes),
  user: user(sequelize, Sequelize.DataTypes),
};

// Create relationships
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.initialize = async () => {
  await db.sequelize.sync({ force: true });
  const tarantino = await db.person.create({ name: "Quentin Tarantino" });
  const almodobar = await db.person.create({ name: "Pedro Almodobar" });
  const patten = await db.person.create({ name: "Tim Van Patten" });
  await db.movie.create({
    title: "Reservoir Dogs",
    genre: "Drama",
    synopsis:
      "Seis criminales profesionales son contratados para robar en un almacén de diamantes, pero la policía aparece inesperadamente en el momento del atraco. Algunos miembros de la banda mueren en el enfrentamiento y otros logran huir, reagrupándose en un almacén y dispuestos a descubrir quién los delató.",
    language: "Ingles",
    directorId: tarantino.id,
  });
  await db.movie.create({
    title: "Pulp Fiction",
    synopsis: "La vida de un boxeador, dos sicarios, la esposa de un gánster y dos bandidos se entrelaza en una historia de violencia y redención.",
    language: "Ingles",
    directorId: tarantino.id,
  });
  await db.movie.create({
    title: "Todo sobre mi madre",
    synopsis: "Una madre soltera reaviva viejas relaciones y hace nuevas a su regreso a Barcelona buscando al padre de su hijo muerto.",
    language: "Español",
    directorId: almodobar.id,
  });
  await db.movie.create({
    title: "Mujeres al borde de un ataque de nervios",
    synopsis: "Una mujer inestable que busca a su ex amante se encuentra con caos cuando un diverso grupo de extraños entra en su vida.",
    language: "Español",
    directorId: almodobar.id,
  });

  const got = await db.tvShow.create({
    title: "Game of thrones",
    genre: "Fantasia",
    synopsis:
      "Esta serie, basada en los libros de George R.R. Martin, muestra la competencia entre familias nobles de siete reinos de Westeros, cuya finalidad es ganar el control sobre el Trono de Hierro.",
    language: "Ingles",
  });
  const seasonOne = await db.season.create({
    number: 1,
    year: 2011,
    tvShowId: got.id,
  });
  await db.episode.create({
    number: 1,
    title: "Winter Is Coming",
    synopsis: "Presentacion de personajes",
    seasonId: seasonOne.id,
    directorId: patten.id,
  });
  await db.episode.create({
    number: 2,
    title: "The Kingsroad",
    synopsis: "Sigue...",
    seasonId: seasonOne.id,
    directorId: patten.id,
  });
  await db.user.create({
    username: "jhon",
    password: "doe",
    name: "Jhon Doe",
  });
};

export default db;
