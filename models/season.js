"use strict";

const model = (sequelize, DataTypes) => {
  const Season = sequelize.define("Season", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  // Create relationships
  Season.associate = function (models) {
    // A season belongs to a tv show
    Season.belongsTo(models.tvShow, {
      foreignKey: "tvShowId",
    });
  };

  return Season;
};

export default model;
