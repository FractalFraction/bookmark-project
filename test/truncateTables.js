require('dotenv').config()
const {models,sequelize} = require('../models');

const truncateTables = () => {
    models.Bookmark.destroy({
        truncate: true
      });
}

module.exports = truncateTables;