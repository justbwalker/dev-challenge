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

  Season.associate = function (models) {
    Season.belongsTo(models.tvShow);
  };

  return Season;
};

export default model;
