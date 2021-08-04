const bookmark = (sequelize, DataTypes) => {
    const Bookmark = sequelize.define('bookmark', {
      url: {
        type: DataTypes.STRING(300),
        unique: true,
        allowNull: false
      },
      tag: {
        type: DataTypes.STRING(100)
      },
      comment: {
        type: DataTypes.STRING(150)
      }
    }, {
      timestamps: false
    });
  
    return Bookmark;
  };
  
  module.exports = bookmark