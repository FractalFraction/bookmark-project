require('dotenv').config()
const {models,sequelize} = require('../models');

const createTestBookmark = () => {
    models.Bookmark.create({
        url: 'www.reddit.com',
        tag: 'proscrastination',
        comment: 'for the memes'
      });
}

module.exports = createTestBookmark;