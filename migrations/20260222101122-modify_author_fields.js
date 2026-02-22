"use strict";

module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.changeColumn("Authors", "name", {
        type: Sequelize.STRING,
        allowNull: false,
      }),
    ]);
  },

  down(queryInterface) {
    return Promise.all([queryInterface.dropTable("Authors")]);
  },
};