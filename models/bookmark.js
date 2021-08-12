'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Bookmark extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.Comments = this.hasMany(models.Comment, {
        onDelete: 'cascade'
      });
      
      this.Tags = this.belongsToMany(models.Tag, {through: 'BookmarkTags'})

    }
  };
  Bookmark.init({
    name: DataTypes.STRING,
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Bookmark',
  });
  return Bookmark;
};