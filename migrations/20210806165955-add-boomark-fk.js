'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

     await queryInterface.addColumn('Comments', 'BookmarkId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      after: 'text',
      references: {
        model: {
        tableName: 'Bookmarks'
        },
        key: 'id',
      },
      allowNull: false
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     
      await queryInterface.removeColumn('Comments','BookmarkId');
    }

};
