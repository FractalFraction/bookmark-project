require('dotenv').config()
const {models,sequelize} = require('../models_old');

const createTestBookmark = () => {
    models.Bookmark.create({
        name : 'Reddit',
        url: 'www.reddit.com',
        tag: 'procrastination'
      });
}

module.exports = createTestBookmark;