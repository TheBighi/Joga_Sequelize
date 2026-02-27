'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('ArticleTags', [
      { articleId: 1, tagId: 1, createdAt: new Date(), updatedAt: new Date() },
      { articleId: 2, tagId: 2, createdAt: new Date(), updatedAt: new Date() },
      { articleId: 1, tagId: 1, createdAt: new Date(), updatedAt: new Date() },
      { articleId: 3, tagId: 3, createdAt: new Date(), updatedAt: new Date() },
      { articleId: 3, tagId: 4, createdAt: new Date(), updatedAt: new Date() },
      { articleId: 1, tagId: 5, createdAt: new Date(), updatedAt: new Date() },
      { articleId: 2, tagId: 6, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    // This deletes all entries from the table. 
    // You can add a WHERE clause if you only want to delete specific IDs.
    return queryInterface.bulkDelete('ArticleTags', null, {});
  }
};