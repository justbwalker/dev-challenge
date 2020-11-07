"use strict";

const model = (sequelize, DataTypes) => {
  const Episode = sequelize.define("Episode", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    synopsis: {
      type: DataTypes.TEXT,
    },
  });

  // Create relationships
  Episode.associate = function (models) {
    // An episode belons to a season
    Episode.belongsTo(models.season, {
      foreignKey: "seasonId",
    });

    // An episode belons to a director
    Episode.belongsTo(models.person, {
      as: "director",
      foreignKey: "directorId",
    });
  };

  return Episode;
};

export default model;
