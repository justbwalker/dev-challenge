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

  Episode.associate = function (models) {
    Episode.belongsTo(models.season);
  };

  return Episode;
};

export default model;
