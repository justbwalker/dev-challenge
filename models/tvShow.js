"use strict";

const model = (sequelize, DataTypes) => {
  const TvShow = sequelize.define("TvShow", {
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

  // Create relationships
  TvShow.associate = function (models) {
    // A tv show could have many actors
    TvShow.belongsToMany(models.person, { through: "ActorTvShows" });
  };

  return TvShow;
};

export default model;
