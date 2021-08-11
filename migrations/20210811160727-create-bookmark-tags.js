'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BookmarkTags', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      BookmarkId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Bookmarks',
          key: 'id'
        }
      },

      TagId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Tags',
          key: 'id'
        }
      },

  //      MovieId: {
  //   type: DataTypes.INTEGER,
  //   references: {
  //     model: Movie, // 'Movies' would also work
  //     key: 'id'
  //   }
  // },
  
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('BookmarkTags');
  }
};