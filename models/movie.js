"use strict";

const model = (sequelize, DataTypes) => {
  const Movie = sequelize.define("Movie", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
    },
    language: {
      type: DataTypes.STRING,
    },
    synopsis: {
      type: DataTypes.TEXT,
    },
  });

  Movie.associate = function (models) {
    Movie.belongsTo(models.person, {
      as: "director",
      foreignKey: "directorId",
    });

    Movie.belongsToMany(models.person, { through: "ActorMovies" });
  };

  return Movie;
};

export default model;
