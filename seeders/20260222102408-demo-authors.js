"use strict";

module.exports = {
up(queryInterface, Sequelize) {
  return queryInterface.bulkInsert("Authors", [
    { name: "Ashley Galvin", createdAt: new Date(), updatedAt: new Date() },
    { name: "Patrick Beach", createdAt: new Date(), updatedAt: new Date() },
    { name: "MacKenzie Miller", createdAt: new Date(), updatedAt: new Date() },
  ]);
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Authors", null, {});
  },
};