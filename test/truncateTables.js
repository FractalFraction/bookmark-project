require('dotenv').config()

const db = require('../models');
const Bookmark = db['Bookmark'];

const truncateTables = () => {
    Bookmark.destroy({
        truncate: true, cascade: true
      });
}

module.exports = truncateTables;