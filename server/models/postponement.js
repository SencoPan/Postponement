"use strict";
module.exports = (sequelize, DataTypes) => {
  const Postponement = sequelize.define(
    "Postponement",
    {
      delay: {allowNull:false, type: DataTypes.DATE},
      delayTo: {allowNull:false, type: DataTypes.DATE},
      number: {allowNull:false, type: DataTypes.INTEGER},
      deposit: {allowNull:false, type: DataTypes.FLOAT},
      fullname: {allowNull:false, type: DataTypes.STRING}
    },
    {}
  );
  Postponement.associate = function(models) {
    // associations can be defined here
  };
  return Postponement;
};
