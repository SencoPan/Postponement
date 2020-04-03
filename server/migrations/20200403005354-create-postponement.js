'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Postponements', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      delay: {
        type: Sequelize.DATE
      },
      delayTo: {
        type: Sequelize.DATE
      },
      number: {
        type: Sequelize.INTEGER
      },
      deposit: {
        type: Sequelize.FLOAT
      },
      fullname: {
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Postponements');
  }
};