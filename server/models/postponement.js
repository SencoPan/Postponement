'use strict';
module.exports = (sequelize, DataTypes) => {
  const Postponement = sequelize.define('Postponement', {
    delay: DataTypes.DATE,
    delayTo: DataTypes.DATE,
    number: DataTypes.INTEGER,
    deposit: DataTypes.FLOAT,
    fullname: DataTypes.STRING
  }, {});
  Postponement.associate = function(models) {
    // associations can be defined here
  };
  return Postponement;
};