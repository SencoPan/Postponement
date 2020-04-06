"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Postponements", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      delay: {
        allowNull: false,
        type: Sequelize.DATE
      },
      delayTo: {
        allowNull: false,
        type: Sequelize.DATE
      },
      number: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      deposit: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      fullname: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface /*Sequelize*/) => {
    return queryInterface.dropTable("Postponements");
  }
};
