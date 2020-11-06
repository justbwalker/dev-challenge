"use strict";

const model = (sequelize, DataTypes) => {
  const Person = sequelize.define("Person", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
    },
    birthdate: {
      type: DataTypes.DATEONLY,
    },
    biography: {
      type: DataTypes.TEXT,
    },
  });

  Person.associate = function (models) {
    Person.belongsToMany(models.movie, { through: "ActorMovies" });
    Person.belongsToMany(models.tvShow, { through: "ActorTvShows" });
  };

  return Person;
};

export default model;
