'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

     await queryInterface.addColumn('Comments', 'bookmark id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      after: 'text',
      reference: {
        model: 'Bookmarks',
        key: 'id'
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     
      await queryInterface.removeColumn('Comments','bookmark id');
    }

};
