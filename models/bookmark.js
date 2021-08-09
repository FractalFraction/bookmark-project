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
      this.Comments = this.hasMany(models.Comment, { onDelete: 'cascade' }, 
     {foreignKey: 
        {
        name: 'bookmark id',
        allowNull: false
      }
      })
    }
  };
  Bookmark.init({
    name: DataTypes.STRING,
    url: DataTypes.STRING,
    tag: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Bookmark',
  });
  return Bookmark;
};