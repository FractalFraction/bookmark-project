const bookmark = (sequelize, DataTypes) => {
    const Bookmark = sequelize.define('bookmark', {
      name: {
        type: DataTypes.STRING(300),
        allowNull: false
      },
      url: {
        type: DataTypes.STRING(300),
        unique: true,
        allowNull: false
      },
      tag: {
        type: DataTypes.STRING(100)
      }
    }, {
      timestamps: false
    });
  
    return Bookmark;
  };
  
  module.exports = bookmark