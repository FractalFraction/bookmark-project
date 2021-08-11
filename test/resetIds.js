require('dotenv').config()
const db = require('../models');
const Bookmark = db['Bookmark'];

const resetIds = () => {
    // Insert the reset method here
    // Assumes you have a table named bookmarks.
    console.log('Reset method here...')
    sequelize.query("ALTER SEQUENCE bookmarks_id_seq RESTART WITH 1;");
    sequelize.query("UPDATE bookmarks SET id=DEFAULT;");
}

module.exports = resetIds;